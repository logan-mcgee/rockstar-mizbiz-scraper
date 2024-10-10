! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "069ec931-27a5-474c-8515-0da0fa2d7a9a", e._sentryDebugIdIdentifier = "sentry-dbid-069ec931-27a5-474c-8515-0da0fa2d7a9a")
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
  [7160], {
    26208: (e, t, r) => {
      r.d(t, {
        S: () => o
      });
      var n = r(71403);

      function o(e, t) {
        return r = t || null, o = function(t) {
          return e.forEach((function(e) {
            return function(e, t) {
              return "function" == typeof e ? e(t) : e && (e.current = t), e
            }(e, t)
          }))
        }, (a = (0, n.useState)((function() {
          return {
            value: r,
            callback: o,
            facade: {
              get current() {
                return a.value
              },
              set current(e) {
                var t = a.value;
                t !== e && (a.value = e, a.callback(e, t))
              }
            }
          }
        }))[0]).callback = o, a.facade;
        var r, o, a
      }
    },
    23496: (e, t, r) => {
      r.d(t, {
        C: () => l,
        f: () => i
      });
      var n = r(80226);

      function o(e) {
        return e
      }

      function a(e, t) {
        void 0 === t && (t = o);
        var r = [],
          n = !1;
        return {
          read: function() {
            if (n) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return r.length ? r[r.length - 1] : e
          },
          useMedium: function(e) {
            var o = t(e, n);
            return r.push(o),
              function() {
                r = r.filter((function(e) {
                  return e !== o
                }))
              }
          },
          assignSyncMedium: function(e) {
            for (n = !0; r.length;) {
              var t = r;
              r = [], t.forEach(e)
            }
            r = {
              push: function(t) {
                return e(t)
              },
              filter: function() {
                return r
              }
            }
          },
          assignMedium: function(e) {
            n = !0;
            var t = [];
            if (r.length) {
              var o = r;
              r = [], o.forEach(e), t = r
            }
            var a = function() {
                var r = t;
                t = [], r.forEach(e)
              },
              l = function() {
                return Promise.resolve().then(a)
              };
            l(), r = {
              push: function(e) {
                t.push(e), l()
              },
              filter: function(e) {
                return t = t.filter(e), r
              }
            }
          }
        }
      }

      function l(e, t) {
        return void 0 === t && (t = o), a(e, t)
      }

      function i(e) {
        void 0 === e && (e = {});
        var t = a(null);
        return t.options = (0, n.Cl)({
          async: !0,
          ssr: !1
        }, e), t
      }
    },
    57160: (e, t, r) => {
      r.r(t), r.d(t, {
        Button: () => Rd,
        Caption: () => K,
        Dropdown: () => NC,
        Heading: () => I,
        IconButton: () => Lx,
        Lightbox: () => UR,
        Metadata: () => te,
        Option: () => OC,
        Paragraph: () => V,
        Subtitle: () => se,
        Text: () => ge,
        TextArea: () => Wc,
        TextSemantics: () => pe,
        Tooltip: () => nj
      });
      var n = {};
      r.r(n), r.d(n, {
        AlertTriangle: () => At,
        ArrowDown: () => Fe,
        ArrowDownSolid: () => di,
        ArrowLeft: () => qe,
        ArrowLeftSolid: () => vi,
        ArrowRight: () => Ye,
        ArrowRightSolid: () => wi,
        ArrowUp: () => He,
        ArrowUpSolid: () => li,
        Arrows: () => gt,
        AuxMenuSolid: () => Al,
        Bell: () => fl,
        BlockCircle: () => Xt,
        Car: () => Ml,
        ChatBubbleSolid: () => _i,
        Check: () => Ha,
        CheckCircle: () => Et,
        CheckCircleSolid: () => Ol,
        CheckShieldSolid: () => qi,
        CheckSquare: () => Ya,
        CheckSquareSolid: () => Hi,
        ChevronDown: () => st,
        ChevronLeft: () => ot,
        ChevronRight: () => et,
        ChevronUp: () => ft,
        Circle: () => wa,
        CircleDot: () => ja,
        Clock: () => zt,
        Code: () => $n,
        CurrencySolid: () => ji,
        Download: () => Qt,
        Envelope: () => Lr,
        EnvelopeSolid: () => Ql,
        ExternalLink: () => jr,
        Facebook: () => la,
        Files: () => Kt,
        Gear: () => Jn,
        GearSolid: () => zl,
        Globe: () => Vn,
        Grid: () => io,
        HelpCircle: () => Tn,
        House: () => Xo,
        IdentificationSolid: () => ss,
        InfoCircle: () => Ot,
        Instagram: () => ra,
        Link: () => dr,
        List: () => fo,
        Maximize: () => cn,
        Menu: () => no,
        Minimize: () => hn,
        Minus: () => _a,
        MinusCircle: () => Fa,
        MinusCircleSolid: () => El,
        MinusSquare: () => el,
        MinusSquareSolid: () => Fi,
        Moon: () => mn,
        Padlock: () => Oo,
        PadlockPassword: () => zo,
        PadlockPasswordSolid: () => gs,
        PadlockSolid: () => fs,
        PaperPlaneSolid: () => Kl,
        Paperclip: () => _r,
        PartialCircle: () => kn,
        Pause: () => on,
        Pencil: () => vr,
        Person: () => Un,
        PersonBlock: () => Ko,
        PersonBlockSolid: () => os,
        PersonMinus: () => Ao,
        PersonMinusSolid: () => es,
        PersonPlus: () => Eo,
        PersonPlusSolid: () => Yi,
        PersonSolid: () => Xl,
        PhoneSolid: () => Li,
        Play: () => qr,
        Plus: () => La,
        Property: () => gl,
        Refresh: () => wr,
        Revert: () => yt,
        Search: () => go,
        SkipBack: () => Yr,
        SkipForward: () => en,
        Square: () => qa,
        SquareSolid: () => Ii,
        Sun: () => bn,
        ThumbsDown: () => ol,
        ThumbsUp: () => sl,
        Trash: () => lr,
        Twitch: () => Qo,
        Twitter: () => da,
        TwoPeopleSolid: () => ri,
        Upload: () => rr,
        VolumeDown: () => Ir,
        VolumeOff: () => Fr,
        VolumeUp: () => Hr,
        Weapon: () => yl,
        WifiOff: () => Mo,
        WifiOn: () => yo,
        X: () => Ia,
        XCircle: () => Mt,
        Youtube: () => va,
        ZoomIn: () => Cn,
        ZoomOut: () => Pn
      });
      var o = r(46632);
      const a = "undefined" == typeof window;

      function l(e) {
        var t, r, n = "";
        if ("string" == typeof e || "number" == typeof e) n += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++) e[t] && (r = l(e[t])) && (n && (n += " "), n += r)
          } else
            for (r in e) e[r] && (n && (n += " "), n += r);
        return n
      }

      function i() {
        for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)(e = arguments[r]) && (t = l(e)) && (n && (n += " "), n += t);
        return n
      }
      const s = i;
      var c = r(94066),
        d = r(94048),
        u = r(27335),
        f = r(11377);
      const h = (e, t) => Array().concat(t).reduce(((e, t) => c(e, t, ((e, t) => d(e) && d(t) ? function(...e) {
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
        for (const o in e) Object.prototype.hasOwnProperty.call(e, o) && (p.test(o) ? t ? r[o] = e[o] : n[o] = e[o] : v.test(o) ? r[o] = e[o] : n[o] = e[o]);
        return {
          events: r,
          others: n
        }
      }
      r(51315), r(31949), r(31062), r(14653), r(4642), r(14963);
      var m = r(71403),
        w = r.t(m, 2),
        x = r.n(m),
        y = r(10515),
        b = r(26677),
        j = r(79493);
      const R = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, t) => {
          const r = (0, m.forwardRef)(((e, r) => {
            const {
              asChild: n,
              ...o
            } = e, a = n ? y.DX : t;
            return (0, m.useEffect)((() => {
              window[Symbol.for("radix-ui")] = !0
            }), []), (0, m.createElement)(a, (0, b.A)({}, o, {
              ref: r
            }))
          }));
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }), {}),
        M = (0, m.forwardRef)(((e, t) => (0, m.createElement)(R.span, (0, b.A)({}, e, {
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
        C = ({
          enabled: e = !0,
          ...t
        }) => {
          const r = e ? M : m.Fragment;
          return (0, o.jsx)(r, {
            ...t
          })
        };

      function L(e) {
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

      function S(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function E(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? S(Object(r), !0).forEach((function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = L(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : S(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function P(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var _, D, A = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        T = (_ = {
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
        }, D = e => {
          var t = _.defaultClassName,
            r = E(E({}, _.defaultVariants), e);
          for (var n in r) {
            var o, a = null !== (o = r[n]) && void 0 !== o ? o : _.defaultVariants[n];
            if (null != a) {
              var l = a;
              "boolean" == typeof l && (l = !0 === l ? "true" : "false");
              var i = _.variantClassNames[n][l];
              i && (t += " " + i)
            }
          }
          for (var [s, c] of _.compoundVariants) A(s, r, _.defaultVariants) && (t += " " + c);
          return t
        }, D.variants = () => Object.keys(_.variantClassNames), D.classNames = {
          get base() {
            return _.defaultClassName.split(" ")[0]
          },
          get variants() {
            return P(_.variantClassNames, (e => P(e, (e => e.split(" ")[0]))))
          }
        }, D);
      const I = (0, m.forwardRef)((({
        asChild: e,
        level: t,
        testId: r,
        ...n
      }, a) => {
        const l = e ? y.DX : `h${t}`,
          i = h(n, {
            className: T({
              level: t
            })
          });
        return (0, o.jsx)(l, {
          ref: a,
          "data-testid": r,
          ...i
        })
      }));

      function N(e) {
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

      function O(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function k(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? O(Object(r), !0).forEach((function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = N(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : O(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function H(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var B = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        z = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = k(k({}, e.defaultVariants), t);
            for (var o in n) {
              var a, l = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != l) {
                var i = l;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var s = e.variantClassNames[o][i];
                s && (r += " " + s)
              }
            }
            for (var [c, d] of e.compoundVariants) B(c, n, e.defaultVariants) && (r += " " + d);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return H(e.variantClassNames, (e => H(e, (e => e.split(" ")[0]))))
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
      const V = (0, m.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: r = "default",
        ...n
      }, a) => {
        const l = e ? y.DX : "p",
          i = h(n, {
            className: z({
              appearance: r
            })
          });
        return (0, o.jsx)(l, {
          ref: a,
          "data-testid": t,
          ...i
        })
      }));

      function F(e) {
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
            n = e, o = t, a = r[t], (o = F(o)) in n ? Object.defineProperty(n, o, {
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

      function U(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var q = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        W = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = X(X({}, e.defaultVariants), t);
            for (var o in n) {
              var a, l = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != l) {
                var i = l;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var s = e.variantClassNames[o][i];
                s && (r += " " + s)
              }
            }
            for (var [c, d] of e.compoundVariants) q(c, n, e.defaultVariants) && (r += " " + d);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return U(e.variantClassNames, (e => U(e, (e => e.split(" ")[0]))))
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
      const K = (0, m.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: r = "default",
        ...n
      }, a) => {
        const l = e ? y.DX : "span",
          i = h(n, {
            className: W({
              appearance: r
            })
          });
        return (0, o.jsx)(l, {
          ref: a,
          "data-testid": t,
          ...i
        })
      }));

      function $(e) {
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

      function Y(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Y(Object(r), !0).forEach((function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = $(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Y(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Q(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var J = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ee = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Z(Z({}, e.defaultVariants), t);
            for (var o in n) {
              var a, l = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != l) {
                var i = l;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var s = e.variantClassNames[o][i];
                s && (r += " " + s)
              }
            }
            for (var [c, d] of e.compoundVariants) J(c, n, e.defaultVariants) && (r += " " + d);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Q(e.variantClassNames, (e => Q(e, (e => e.split(" ")[0]))))
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
      const te = (0, m.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: r = "default",
        ...n
      }, a) => {
        const l = e ? y.DX : "span",
          i = h(n, {
            className: ee({
              appearance: r
            })
          });
        return (0, o.jsx)(l, {
          ref: a,
          "data-testid": t,
          ...i
        })
      }));

      function re(e) {
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

      function ne(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function oe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ne(Object(r), !0).forEach((function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = re(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ne(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function ae(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var le = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ie = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = oe(oe({}, e.defaultVariants), t);
            for (var o in n) {
              var a, l = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != l) {
                var i = l;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var s = e.variantClassNames[o][i];
                s && (r += " " + s)
              }
            }
            for (var [c, d] of e.compoundVariants) le(c, n, e.defaultVariants) && (r += " " + d);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ae(e.variantClassNames, (e => ae(e, (e => e.split(" ")[0]))))
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
      const se = (0, m.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: r = "default",
        ...n
      }, a) => {
        const l = e ? y.DX : "p",
          i = h(n, {
            className: ie({
              appearance: r
            })
          });
        return (0, o.jsx)(l, {
          ref: a,
          "data-testid": t,
          ...i
        })
      }));

      function ce(e) {
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

      function de(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function ue(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? de(Object(r), !0).forEach((function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = ce(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : de(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function fe(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var he = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ve = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ue(ue({}, e.defaultVariants), t);
            for (var o in n) {
              var a, l = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != l) {
                var i = l;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var s = e.variantClassNames[o][i];
                s && (r += " " + s)
              }
            }
            for (var [c, d] of e.compoundVariants) he(c, n, e.defaultVariants) && (r += " " + d);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return fe(e.variantClassNames, (e => fe(e, (e => e.split(" ")[0]))))
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
      const pe = {
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
        ge = (0, m.forwardRef)((({
          asChild: e,
          testId: t,
          semantic: r = "default",
          ...n
        }, a) => {
          const l = e ? y.DX : pe[r] || "span",
            i = h(n, {
              className: ve({
                semantic: r
              })
            });
          return (0, o.jsx)(l, {
            ref: a,
            "data-testid": t,
            ...i
          })
        }));

      function me(...e) {
        return t => e.forEach((e => function(e, t) {
          "function" == typeof e ? e(t) : null != e && (e.current = t)
        }(e, t)))
      }

      function we(...e) {
        return m.useCallback(me(...e), e)
      }
      var xe = m.forwardRef(((e, t) => {
        const {
          children: r,
          ...n
        } = e, a = m.Children.toArray(r), l = a.find(je);
        if (l) {
          const e = l.props.children,
            r = a.map((t => t === l ? m.Children.count(e) > 1 ? m.Children.only(null) : m.isValidElement(e) ? e.props.children : null : t));
          return (0, o.jsx)(ye, {
            ...n,
            ref: t,
            children: m.isValidElement(e) ? m.cloneElement(e, void 0, r) : null
          })
        }
        return (0, o.jsx)(ye, {
          ...n,
          ref: t,
          children: r
        })
      }));
      xe.displayName = "Slot";
      var ye = m.forwardRef(((e, t) => {
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
            ...Re(n, r.props),
            ref: t ? me(t, e) : e
          })
        }
        return m.Children.count(r) > 1 ? m.Children.only(null) : null
      }));
      ye.displayName = "SlotClone";
      var be = ({
        children: e
      }) => (0, o.jsx)(o.Fragment, {
        children: e
      });

      function je(e) {
        return m.isValidElement(e) && e.type === be
      }

      function Re(e, t) {
        const r = {
          ...t
        };
        for (const n in t) {
          const o = e[n],
            a = t[n];
          /^on[A-Z]/.test(n) ? o && a ? r[n] = (...e) => {
            a(...e), o(...e)
          } : o && (r[n] = o) : "style" === n ? r[n] = {
            ...o,
            ...a
          } : "className" === n && (r[n] = [o, a].filter(Boolean).join(" "))
        }
        return {
          ...e,
          ...r
        }
      }
      var Me = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, t) => {
          const r = m.forwardRef(((e, r) => {
            const {
              asChild: n,
              ...a
            } = e, l = n ? xe : t;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, o.jsx)(l, {
              ...a,
              ref: r
            })
          }));
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }), {}),
        Ce = m.forwardRef(((e, t) => (0, o.jsx)(Me.span, {
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
      Ce.displayName = "VisuallyHidden";
      var Le = Ce,
        Se = ({
          children: e,
          label: t
        }) => {
          const r = m.Children.only(e);
          return (0, o.jsxs)(o.Fragment, {
            children: [m.cloneElement(r, {
              "aria-hidden": "true",
              focusable: "false"
            }), (0, o.jsx)(Le, {
              children: t
            })]
          })
        };
      Se.displayName = "AccessibleIcon";
      var Ee = Se;

      function Pe(e) {
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

      function _e(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function De(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? _e(Object(r), !0).forEach((function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Pe(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _e(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Ae(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Te = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ie = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = De(De({}, e.defaultVariants), t);
            for (var o in n) {
              var a, l = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != l) {
                var i = l;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var s = e.variantClassNames[o][i];
                s && (r += " " + s)
              }
            }
            for (var [c, d] of e.compoundVariants) Te(c, n, e.defaultVariants) && (r += " " + d);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ae(e.variantClassNames, (e => Ae(e, (e => e.split(" ")[0]))))
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
      const Ne = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M7.47 2.47a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1-1.06 1.06L8.75 4.81V13a.75.75 0 0 1-1.5 0V4.81L3.53 8.53a.75.75 0 0 1-1.06-1.06z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Oe = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M11.293 3.293a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1-1.414 1.414L13 6.414V20a1 1 0 1 1-2 0V6.414l-5.293 5.293a1 1 0 0 1-1.414-1.414z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ke = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M16 3.75c.352 0 .688.149.925.41l10 11a1.25 1.25 0 1 1-1.85 1.68L17.25 8.234V26a1.25 1.25 0 1 1-2.5 0V8.233l-7.825 8.608a1.25 1.25 0 1 1-1.85-1.682l10-11c.237-.26.573-.409.925-.409",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        He = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(Ne, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(Oe, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(ke, {
              ...n,
              ref: r
            })]
          })
        }));
      He.displayName = "ArrowUp", He.category = "Arrows", He.variant = "Outline", He.keywords = "Up, Navigation, Increase", He.MD = Ne, He.LG = Oe, He.XL = ke;
      const Be = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M8 2.25a.75.75 0 0 1 .75.75v8.19l3.72-3.72a.75.75 0 1 1 1.06 1.06l-5 5a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 0 1 1.06-1.06l3.72 3.72V3A.75.75 0 0 1 8 2.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ze = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M12 3a1 1 0 0 1 1 1v13.586l5.293-5.293a1 1 0 0 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 1 1 1.414-1.414L11 17.586V4a1 1 0 0 1 1-1",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M16 3.75c.69 0 1.25.56 1.25 1.25v18.767l7.825-8.608a1.25 1.25 0 1 1 1.85 1.682l-10 11a1.25 1.25 0 0 1-1.85 0l-10-11a1.25 1.25 0 1 1 1.85-1.682l7.825 8.608V5c0-.69.56-1.25 1.25-1.25",
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
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(Be, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(ze, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(Ve, {
              ...n,
              ref: r
            })]
          })
        }));
      Fe.displayName = "ArrowDown", Fe.category = "Arrows", Fe.variant = "Outline", Fe.keywords = "Down, Navigation, Decrease", Fe.MD = Be, Fe.LG = ze, Fe.XL = Ve;
      const Ge = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M7.53 2.47a.75.75 0 0 1 0 1.06L3.81 7.25H14a.75.75 0 0 1 0 1.5H3.81l3.72 3.72a.75.75 0 1 1-1.06 1.06l-5-5a.75.75 0 0 1 0-1.06l5-5a.75.75 0 0 1 1.06 0",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M11.707 4.293a1 1 0 0 1 0 1.414L6.414 11H20a1 1 0 1 1 0 2H6.414l5.293 5.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ue = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M16.925 5.16a1.25 1.25 0 0 1-.084 1.765L8.233 14.75H27a1.25 1.25 0 0 1 0 2.5H8.233l8.608 7.825a1.25 1.25 0 1 1-1.682 1.85l-11-10a1.25 1.25 0 0 1 0-1.85l11-10a1.25 1.25 0 0 1 1.766.084",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        qe = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(Ge, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(Xe, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(Ue, {
              ...n,
              ref: r
            })]
          })
        }));
      qe.displayName = "ArrowLeft", qe.category = "Arrows", qe.variant = "Outline", qe.keywords = "Left, Navigation, Back", qe.MD = Ge, qe.LG = Xe, qe.XL = Ue;
      const We = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M8.47 2.47a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06-1.06l3.72-3.72H2a.75.75 0 0 1 0-1.5h10.19L8.47 3.53a.75.75 0 0 1 0-1.06",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ke = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M12.293 4.293a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414-1.414L17.586 13H4a1 1 0 1 1 0-2h13.586l-5.293-5.293a1 1 0 0 1 0-1.414",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M15.075 5.16a1.25 1.25 0 0 1 1.766-.085l11 10a1.25 1.25 0 0 1 0 1.85l-11 10a1.25 1.25 0 1 1-1.682-1.85l8.608-7.825H5a1.25 1.25 0 1 1 0-2.5h18.767l-8.608-7.825a1.25 1.25 0 0 1-.084-1.766",
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
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(We, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(Ke, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)($e, {
              ...n,
              ref: r
            })]
          })
        }));
      Ye.displayName = "ArrowRight", Ye.category = "Arrows", Ye.variant = "Outline", Ye.keywords = "Right, Navigation, Forward", Ye.MD = We, Ye.LG = Ke, Ye.XL = $e;
      const Ze = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M5.529 3.529c.26-.26.682-.26.942 0l4 4c.26.26.26.682 0 .942l-4 4a.667.667 0 1 1-.942-.942L9.057 8 5.53 4.471a.667.667 0 0 1 0-.942",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Qe = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M11.116 7.116a1.25 1.25 0 0 1 1.768 0l8 8a1.25 1.25 0 0 1 0 1.768l-8 8a1.25 1.25 0 0 1-1.768-1.768L18.232 16l-7.116-7.116a1.25 1.25 0 0 1 0-1.768",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        et = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(Ze, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(Qe, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(Je, {
              ...n,
              ref: r
            })]
          })
        }));
      et.displayName = "ChevronRight", et.category = "Arrows", et.variant = "Outline", et.keywords = "Right, Direction, Side, Navigation", et.MD = Ze, et.LG = Qe, et.XL = Je;
      const tt = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M10.471 3.529c.26.26.26.682 0 .942L6.943 8l3.528 3.529a.667.667 0 0 1-.942.942l-4-4a.667.667 0 0 1 0-.942l4-4c.26-.26.682-.26.942 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        rt = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M15.707 5.293a1 1 0 0 1 0 1.414L10.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M20.884 7.116a1.25 1.25 0 0 1 0 1.768L13.768 16l7.116 7.116a1.25 1.25 0 0 1-1.768 1.768l-8-8a1.25 1.25 0 0 1 0-1.768l8-8a1.25 1.25 0 0 1 1.768 0",
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
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(tt, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(rt, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(nt, {
              ...n,
              ref: r
            })]
          })
        }));
      ot.displayName = "ChevronLeft", ot.category = "Arrows", ot.variant = "Outline", ot.keywords = "Left, Direction, Side, Navigation", ot.MD = tt, ot.LG = rt, ot.XL = nt;
      const at = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M3.529 5.529c.26-.26.682-.26.942 0L8 9.057l3.529-3.528a.667.667 0 1 1 .942.942l-4 4a.667.667 0 0 1-.942 0l-4-4a.667.667 0 0 1 0-.942",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        lt = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M5.293 8.293a1 1 0 0 1 1.414 0L12 13.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M7.116 11.116a1.25 1.25 0 0 1 1.768 0L16 18.232l7.116-7.116a1.25 1.25 0 0 1 1.768 1.768l-8 8a1.25 1.25 0 0 1-1.768 0l-8-8a1.25 1.25 0 0 1 0-1.768",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        st = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(at, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(lt, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(it, {
              ...n,
              ref: r
            })]
          })
        }));
      st.displayName = "ChevronDown", st.category = "Arrows", st.variant = "Outline", st.keywords = "Down, Direction, Bottom, Navigation", st.MD = at, st.LG = lt, st.XL = it;
      const ct = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M7.529 5.529c.26-.26.682-.26.942 0l4 4a.667.667 0 0 1-.942.942L8 6.943 4.471 10.47a.667.667 0 1 1-.942-.942z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        dt = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M11.293 8.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414L12 10.414l-5.293 5.293a1 1 0 0 1-1.414-1.414z",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M15.116 11.116a1.25 1.25 0 0 1 1.768 0l8 8a1.25 1.25 0 0 1-1.768 1.768L16 13.768l-7.116 7.116a1.25 1.25 0 0 1-1.768-1.768z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ft = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(ct, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(dt, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(ut, {
              ...n,
              ref: r
            })]
          })
        }));
      ft.displayName = "ChevronUp", ft.category = "Arrows", ft.variant = "Outline", ft.keywords = "Up, Direction, Top, Navigation", ft.MD = ct, ft.LG = dt, ft.XL = ut;
      const ht = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M4.47 3.47a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1-1.06 1.06l-.72-.72V12a.75.75 0 0 1-1.5 0V5.81l-.72.72a.75.75 0 0 1-1.06-1.06zM11 3.25a.75.75 0 0 1 .75.75v6.19l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72V4a.75.75 0 0 1 .75-.75",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        vt = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M8 5a1 1 0 0 1 .8.4l3 4a1 1 0 0 1-1.6 1.2L9 9v9a1 1 0 1 1-2 0V9l-1.2 1.6a1 1 0 1 1-1.6-1.2l3-4A1 1 0 0 1 8 5m8 0a1 1 0 0 1 1 1v9l1.2-1.6a1 1 0 0 1 1.6 1.2l-3 4a1 1 0 0 1-1.6 0l-3-4a1 1 0 0 1 1.6-1.2L15 15V6a1 1 0 0 1 1-1",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M11 6.75c.418 0 .808.209 1.04.557l4 6a1.25 1.25 0 0 1-2.08 1.386l-1.71-2.564V24a1.25 1.25 0 1 1-2.5 0V12.129l-1.71 2.564a1.25 1.25 0 0 1-2.08-1.386l4-6A1.25 1.25 0 0 1 11 6.75m10 0c.69 0 1.25.56 1.25 1.25v11.872l1.71-2.565a1.25 1.25 0 0 1 2.08 1.386l-4 6a1.25 1.25 0 0 1-2.08 0l-4-6a1.25 1.25 0 0 1 2.08-1.386l1.71 2.565V8c0-.69.56-1.25 1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        gt = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(ht, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(vt, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(pt, {
              ...n,
              ref: r
            })]
          })
        }));
      gt.displayName = "Arrows", gt.category = "Arrows", gt.variant = "Outline", gt.keywords = "Sorting, Sortable, Control, Filter, Sort", gt.MD = ht, gt.LG = vt, gt.XL = pt;
      const mt = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M5.47 3.47a.75.75 0 0 1 1.06 1.06L6 4zm-.66 2.78 1.72-1.719L6 4l-.53-.53-3 3a.75.75 0 0 0 0 1.06l2.997 2.998.002.002L6 10l-.53.53a.75.75 0 0 0 1.06-1.06v-.001L4.81 7.75H10a2.25 2.25 0 0 1 0 4.5H7.643a.75.75 0 0 0 0 1.5H10a3.75 3.75 0 1 0 0-7.5z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        wt = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M9.707 5.293a1 1 0 0 1 0 1.414L7.414 9H14.5a5.5 5.5 0 1 1 0 11h-2.464a1 1 0 1 1 0-2H14.5a3.5 3.5 0 1 0 0-7H7.414l2.293 2.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M13.884 6.116a1.25 1.25 0 0 1 0 1.768l-2.866 2.866h8.444c3.841 0 6.788 3.342 6.788 7.25s-2.947 7.25-6.788 7.25h-3.033a1.25 1.25 0 1 1 0-2.5h3.033c2.276 0 4.288-2.03 4.288-4.75s-2.012-4.75-4.288-4.75h-8.444l2.866 2.866a1.25 1.25 0 0 1-1.768 1.768l-5-5a1.25 1.25 0 0 1 0-1.768l5-5a1.25 1.25 0 0 1 1.768 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        yt = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(mt, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(wt, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(xt, {
              ...n,
              ref: r
            })]
          })
        }));
      yt.displayName = "Revert", yt.category = "Arrows", yt.variant = "Outline", yt.keywords = "Back, Undo, Return, Arrow, Navigation", yt.MD = mt, yt.LG = wt, yt.XL = xt;
      const bt = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M8 2.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5M1.25 8a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0m4.22-2.53a.75.75 0 0 1 1.06 0L8 6.94l1.47-1.47a.75.75 0 1 1 1.06 1.06L9.06 8l1.47 1.47a.75.75 0 1 1-1.06 1.06L8 9.06l-1.47 1.47a.75.75 0 1 1-1.06-1.06L6.94 8 5.47 6.53a.75.75 0 0 1 0-1.06",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        jt = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m6.293-3.707a1 1 0 0 1 1.414 0L12 10.586l2.293-2.293a1 1 0 1 1 1.414 1.414L13.414 12l2.293 2.293a1 1 0 0 1-1.414 1.414L12 13.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L10.586 12 8.293 9.707a1 1 0 0 1 0-1.414",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M16 5.25C10.063 5.25 5.25 10.063 5.25 16S10.063 26.75 16 26.75 26.75 21.937 26.75 16 21.937 5.25 16 5.25M2.75 16C2.75 8.682 8.682 2.75 16 2.75S29.25 8.682 29.25 16 23.318 29.25 16 29.25 2.75 23.318 2.75 16m8.366-4.884a1.25 1.25 0 0 1 1.768 0L16 14.232l3.116-3.116a1.25 1.25 0 0 1 1.768 1.768L17.768 16l3.116 3.116a1.25 1.25 0 0 1-1.768 1.768L16 17.768l-3.116 3.116a1.25 1.25 0 0 1-1.768-1.768L14.232 16l-3.116-3.116a1.25 1.25 0 0 1 0-1.768",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Mt = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(bt, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(jt, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(Rt, {
              ...n,
              ref: r
            })]
          })
        }));
      Mt.displayName = "XCircle", Mt.category = "Feedback", Mt.variant = "Outline", Mt.keywords = "Close, Error, Remove, Clean, Erase, Deprecate, Delete, Navigation", Mt.MD = bt, Mt.LG = jt, Mt.XL = Rt;
      const Ct = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M8 2.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5M1.25 8a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0m10.28-2.53a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 0 1 1.06-1.06L7 8.94l3.47-3.47a.75.75 0 0 1 1.06 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Lt = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m14.664-3.747a1 1 0 0 1 .083 1.411l-5.333 6a1 1 0 0 1-1.495 0l-2.666-3a1 1 0 0 1 1.494-1.328l1.92 2.159 4.586-5.16a1 1 0 0 1 1.411-.082",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M16 5.25C10.063 5.25 5.25 10.063 5.25 16S10.063 26.75 16 26.75 26.75 21.937 26.75 16 21.937 5.25 16 5.25M2.75 16C2.75 8.682 8.682 2.75 16 2.75S29.25 8.682 29.25 16 23.318 29.25 16 29.25 2.75 23.318 2.75 16m19.05-4.96c.53.442.602 1.23.16 1.76l-6.666 8a1.25 1.25 0 0 1-1.921 0l-3.333-4a1.25 1.25 0 0 1 1.92-1.6l2.373 2.847L20.04 11.2a1.25 1.25 0 0 1 1.76-.16",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Et = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(Ct, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(Lt, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(St, {
              ...n,
              ref: r
            })]
          })
        }));
      Et.displayName = "CheckCircle", Et.category = "Feedback", Et.variant = "Outline", Et.keywords = "Done, Ready, Yes, Available, Completed, Circle, Approve, Success", Et.MD = Ct, Et.LG = Lt, Et.XL = St;
      const Pt = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M7.053 1.512a1.85 1.85 0 0 1 1.894 0c.286.17.521.413.686.7l.002.004 4.87 8.602a2.02 2.02 0 0 1 .005 1.924c-.16.296-.393.548-.68.727a1.85 1.85 0 0 1-.957.28l-.009.001H3.127a1.85 1.85 0 0 1-.957-.281 1.94 1.94 0 0 1-.68-.727 2.02 2.02 0 0 1 .006-1.924l.005-.01 4.866-8.596c.165-.287.4-.53.686-.7M8 2.75a.35.35 0 0 0-.18.05.43.43 0 0 0-.15.157l-.001.001L2.81 11.54a.52.52 0 0 0 .001.49q.062.111.151.165a.35.35 0 0 0 .18.055h9.717a.35.35 0 0 0 .178-.055.44.44 0 0 0 .152-.164.52.52 0 0 0 0-.49L8.332 2.957v-.001A.43.43 0 0 0 8.18 2.8.35.35 0 0 0 8 2.75m0 2.5a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V6A.75.75 0 0 1 8 5.25m-.75 5.25A.75.75 0 0 1 8 9.75h.1a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        _t = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M10.655 3.361a2.69 2.69 0 0 1 2.69 0c.41.237.749.575.989.981l.003.005 7.296 12.497.008.014a2.8 2.8 0 0 1 .007 2.735c-.232.419-.57.771-.98 1.019s-.88.383-1.36.388H4.692a2.7 2.7 0 0 1-1.36-.388c-.411-.248-.749-.6-.981-1.019a2.8 2.8 0 0 1 .007-2.735l.008-.014 7.3-12.502c.24-.406.579-.744.988-.98M12 5a.7.7 0 0 0-.345.093.74.74 0 0 0-.266.265l-7.29 12.486a.8.8 0 0 0 .001.778.75.75 0 0 0 .266.278.7.7 0 0 0 .345.1h14.578a.7.7 0 0 0 .345-.1c.108-.065.2-.16.266-.278a.8.8 0 0 0 0-.778L12.613 5.36v-.002a.74.74 0 0 0-.267-.265A.7.7 0 0 0 12 5m0 3.004a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1M11 16.5a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M14.233 4.239A3.45 3.45 0 0 1 16 3.75c.623 0 1.232.17 1.767.489s.973.771 1.282 1.31l.003.005 9.728 17.184.01.017a3.8 3.8 0 0 1 .46 1.805 3.8 3.8 0 0 1-.45 1.806 3.6 3.6 0 0 1-1.271 1.36 3.45 3.45 0 0 1-1.786.524H6.257a3.45 3.45 0 0 1-1.786-.524 3.6 3.6 0 0 1-1.27-1.36 3.8 3.8 0 0 1-.451-1.806 3.8 3.8 0 0 1 .46-1.805l.01-.017 9.731-17.19a3.6 3.6 0 0 1 1.282-1.31M16 6.25a.95.95 0 0 0-.487.136c-.153.092-.29.228-.391.403l-.002.003L5.401 23.96c-.097.18-.15.39-.151.606 0 .22.053.431.152.614.098.183.235.326.39.423.154.095.322.144.489.147h19.438a.95.95 0 0 0 .488-.147c.155-.097.293-.24.391-.423a1.3 1.3 0 0 0 .152-.614 1.3 1.3 0 0 0-.151-.606l-9.72-17.168v-.003a1.1 1.1 0 0 0-.392-.403A.95.95 0 0 0 16 6.25m0 4.5c.69 0 1.25.56 1.25 1.25v6a1.25 1.25 0 1 1-2.5 0v-6c0-.69.56-1.25 1.25-1.25M14.75 23c0-.69.56-1.25 1.25-1.25h.1a1.25 1.25 0 1 1 0 2.5H16c-.69 0-1.25-.56-1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        At = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(Pt, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(_t, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(Dt, {
              ...n,
              ref: r
            })]
          })
        }));
      At.displayName = "AlertTriangle", At.category = "Feedback", At.variant = "Outline", At.keywords = "Warning, Alert, Caution, Attention, Danger, Error, Triangle", At.MD = Pt, At.LG = _t, At.XL = Dt;
      const Tt = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M8 2.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5M1.25 8a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0m6-3A.75.75 0 0 1 8 4.25h.1a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 5M8 7.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V8A.75.75 0 0 1 8 7.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        It = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m9-4a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1m1 3a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M16 5.25C10.063 5.25 5.25 10.063 5.25 16S10.063 26.75 16 26.75 26.75 21.937 26.75 16 21.937 5.25 16 5.25M2.75 16C2.75 8.682 8.682 2.75 16 2.75S29.25 8.682 29.25 16 23.318 29.25 16 29.25 2.75 23.318 2.75 16m12-6c0-.69.56-1.25 1.25-1.25h.1a1.25 1.25 0 1 1 0 2.5H16c-.69 0-1.25-.56-1.25-1.25M16 13.75c.69 0 1.25.56 1.25 1.25v6a1.25 1.25 0 1 1-2.5 0v-6c0-.69.56-1.25 1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ot = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(Tt, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(It, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(Nt, {
              ...n,
              ref: r
            })]
          })
        }));
      Ot.displayName = "InfoCircle", Ot.category = "Feedback", Ot.variant = "Outline", Ot.keywords = "Info, Information, Help, Support", Ot.MD = Tt, Ot.LG = It, Ot.XL = Nt;
      const kt = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M8 2.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5M1.25 8a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0M8 4.25a.75.75 0 0 1 .75.75v2.536l1.585.793a.75.75 0 1 1-.67 1.342l-2-1A.75.75 0 0 1 7.25 8V5A.75.75 0 0 1 8 4.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ht = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m10-6a1 1 0 0 1 1 1v5.382l3.447 1.724a1 1 0 1 1-.894 1.788l-4-2A1 1 0 0 1 11 13V7a1 1 0 0 1 1-1",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M16 5.25C10.063 5.25 5.25 10.063 5.25 16S10.063 26.75 16 26.75 26.75 21.937 26.75 16 21.937 5.25 16 5.25M2.75 16C2.75 8.682 8.682 2.75 16 2.75S29.25 8.682 29.25 16 23.318 29.25 16 29.25 2.75 23.318 2.75 16M16 6.75c.69 0 1.25.56 1.25 1.25v8.228l5.309 2.654a1.25 1.25 0 1 1-1.118 2.236l-6-3A1.25 1.25 0 0 1 14.75 17V8c0-.69.56-1.25 1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        zt = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(kt, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(Ht, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(Bt, {
              ...n,
              ref: r
            })]
          })
        }));
      zt.displayName = "Clock", zt.category = "Feedback", zt.variant = "Outline", zt.keywords = "Time, Hour, Minute, Second, Planned, Watch", zt.MD = kt, zt.LG = Ht, zt.XL = Bt;
      const Vt = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M3.795 4.856a5.25 5.25 0 0 0 7.349 7.349zm1.06-1.06 7.35 7.348a5.25 5.25 0 0 0-7.349-7.349M1.25 8a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M5.68 7.094A8 8 0 0 0 16.905 18.32zM7.094 5.68 18.32 16.906A8 8 0 0 0 7.094 5.68M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Gt = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M7.566 9.334A10.7 10.7 0 0 0 5.25 16c0 5.937 4.813 10.75 10.75 10.75 2.518 0 4.834-.866 6.666-2.316zm1.768-1.768 15.1 15.1A10.7 10.7 0 0 0 26.75 16c0-5.937-4.813-10.75-10.75-10.75-2.518 0-4.834.866-6.666 2.316M2.75 16C2.75 8.682 8.682 2.75 16 2.75S29.25 8.682 29.25 16 23.318 29.25 16 29.25 2.75 23.318 2.75 16",
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
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(Vt, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(Ft, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(Gt, {
              ...n,
              ref: r
            })]
          })
        }));
      Xt.displayName = "BlockCircle", Xt.category = "Feedback", Xt.variant = "Outline", Xt.keywords = "Blocked, Restricted, Denied, Forbidden, Unavailable, Stop, No, Cancel, Error, Alert", Xt.MD = Vt, Xt.LG = Ft, Xt.XL = Gt;
      const Ut = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M5.874 1.725A2.08 2.08 0 0 1 7.23 1.25h5.538a1.98 1.98 0 0 1 1.981 1.98v5.54c0 .444-.103.925-.393 1.316-.31.42-.787.664-1.357.664h-.75v-1.5H13a.25.25 0 0 0 .11-.019.1.1 0 0 0 .042-.038c.04-.055.098-.189.098-.424V3.231a.48.48 0 0 0-.48-.481H7.23a.6.6 0 0 0-.383.116c-.055.047-.097.114-.097.234v.75h-1.5V3.1c0-.56.234-1.043.624-1.375M2.25 6.23A1.98 1.98 0 0 1 4.23 4.25h5.54a1.98 1.98 0 0 1 1.98 1.98v5.54a1.98 1.98 0 0 1-1.98 1.98H4.23a1.98 1.98 0 0 1-1.98-1.98zm1.98-.481a.48.48 0 0 0-.48.48v5.54c0 .265.215.48.48.48h5.54a.48.48 0 0 0 .48-.48V6.23a.48.48 0 0 0-.48-.48z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        qt = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M7.945 3.564C8.503 3.151 9.197 3 9.846 3h8.308A2.846 2.846 0 0 1 21 5.846v8.308c0 .65-.15 1.343-.564 1.9-.442.597-1.119.946-1.936.946h-1v-2h1a.5.5 0 0 0 .22-.041.3.3 0 0 0 .109-.095c.081-.11.171-.34.171-.71V5.846A.846.846 0 0 0 18.154 5H9.846c-.37 0-.6.09-.71.171a.3.3 0 0 0-.095.109A.5.5 0 0 0 9 5.5v1H7v-1c0-.817.35-1.494.945-1.936M3 9.846A2.846 2.846 0 0 1 5.846 7h8.308A2.846 2.846 0 0 1 17 9.846v8.308A2.846 2.846 0 0 1 14.154 21H5.846A2.846 2.846 0 0 1 3 18.154zM5.846 9A.846.846 0 0 0 5 9.846v8.308c0 .467.379.846.846.846h8.308a.846.846 0 0 0 .846-.846V9.846A.846.846 0 0 0 14.154 9z",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M10.764 5.086c.618-.736 1.559-1.336 2.698-1.336h11.077a3.71 3.71 0 0 1 3.711 3.712v11.077c0 1.106-.545 2.044-1.263 2.677A4.1 4.1 0 0 1 24.3 22.25h-1.25v-2.5h1.25c.352 0 .738-.149 1.033-.408.291-.258.417-.55.417-.803V7.461c0-.67-.542-1.212-1.212-1.212H13.462c-.22 0-.51.12-.783.444-.274.326-.428.747-.428 1.106v1.25h-2.5V7.8c0-1 .397-1.98 1.014-2.714M3.75 13.461A3.71 3.71 0 0 1 7.462 9.75h11.077a3.71 3.71 0 0 1 3.711 3.711v11.077a3.71 3.71 0 0 1-3.712 3.712H7.462a3.71 3.71 0 0 1-3.712-3.712zm3.712-1.211c-.67 0-1.212.542-1.212 1.211v11.077c0 .67.542 1.212 1.212 1.212h11.077c.669 0 1.211-.542 1.211-1.212V13.462c0-.669-.542-1.211-1.212-1.211z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Kt = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(Ut, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(qt, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(Wt, {
              ...n,
              ref: r
            })]
          })
        }));
      Kt.displayName = "Files", Kt.category = "Files", Kt.variant = "Outline", Kt.keywords = "Copy, Data, Document, File, Folder, Restore", Kt.MD = Ut, Kt.LG = qt, Kt.XL = Wt;
      const $t = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M8 1.25a.75.75 0 0 1 .75.75v5.19l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 1.06-1.06l1.72 1.72V2A.75.75 0 0 1 8 1.25m-5 7a.75.75 0 0 1 .75.75v3.12l.02.014a.93.93 0 0 0 .48.116h7.5a.93.93 0 0 0 .5-.13V9a.75.75 0 0 1 1.5 0v3.2c0 .546-.337.958-.712 1.197-.376.241-.84.353-1.288.353h-7.5c-.447 0-.912-.112-1.288-.353-.375-.24-.712-.65-.712-1.197V9A.75.75 0 0 1 3 8.25",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M12 2a1 1 0 0 1 1 1v8.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 1.414-1.414L11 11.586V3a1 1 0 0 1 1-1M4 13a1 1 0 0 1 1 1v4.718c.02.018.05.043.1.073.19.114.512.209.9.209h12c.388 0 .71-.095.9-.209a.6.6 0 0 0 .1-.073V14a1 1 0 1 1 2 0v4.8c0 .795-.521 1.376-1.071 1.706-.56.336-1.256.494-1.929.494H6c-.673 0-1.368-.158-1.929-.494C3.521 20.176 3 19.595 3 18.8V14a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Zt = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M16 2.75c.69 0 1.25.56 1.25 1.25v11.982l4.866-4.866a1.25 1.25 0 0 1 1.768 1.768l-7 7a1.25 1.25 0 0 1-1.768 0l-7-7a1.25 1.25 0 0 1 1.768-1.768l4.866 4.866V4c0-.69.56-1.25 1.25-1.25m-11 15c.69 0 1.25.56 1.25 1.25v6.314a.8.8 0 0 0 .184.137c.287.167.759.299 1.316.299h16.5c.557 0 1.03-.132 1.316-.3a.8.8 0 0 0 .184-.136V19a1.25 1.25 0 1 1 2.5 0v6.4c0 1.04-.7 1.79-1.427 2.212-.745.433-1.672.638-2.573.638H7.75c-.901 0-1.828-.205-2.573-.638C4.45 27.189 3.75 26.44 3.75 25.4V19c0-.69.56-1.25 1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Qt = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)($t, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(Yt, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(Zt, {
              ...n,
              ref: r
            })]
          })
        }));
      Qt.displayName = "Download", Qt.category = "Files", Qt.variant = "Outline", Qt.keywords = "Down, File", Qt.MD = $t, Qt.LG = Yt, Qt.XL = Zt;
      const Jt = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M7.47 1.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06L8.75 3.81V9a.75.75 0 0 1-1.5 0V3.81L5.53 5.53a.75.75 0 0 1-1.06-1.06zM3 6.25a.75.75 0 0 1 .75.75v4.8c0 .11.045.22.136.307a.53.53 0 0 0 .364.143h7.5a.53.53 0 0 0 .364-.143.43.43 0 0 0 .136-.307V7a.75.75 0 0 1 1.5 0v4.8c0 .527-.219 1.026-.597 1.39-.377.362-.882.56-1.403.56h-7.5c-.52 0-1.026-.198-1.403-.56a1.93 1.93 0 0 1-.597-1.39V7A.75.75 0 0 1 3 6.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        er = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M11.293 2.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414L13 5.414V15a1 1 0 1 1-2 0V5.414L7.707 8.707a1 1 0 0 1-1.414-1.414zM4 10a1 1 0 0 1 1 1v7.2c0 .176.077.37.255.53.181.163.448.27.745.27h12c.297 0 .564-.107.745-.27A.72.72 0 0 0 19 18.2V11a1 1 0 1 1 2 0v7.2c0 .779-.345 1.501-.917 2.016A3.12 3.12 0 0 1 18 21H6a3.12 3.12 0 0 1-2.083-.784A2.71 2.71 0 0 1 3 18.2V11a1 1 0 0 1 1-1",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M15.116 3.116a1.25 1.25 0 0 1 1.768 0l7 7a1.25 1.25 0 0 1-1.768 1.768L17.25 7.018V20a1.25 1.25 0 1 1-2.5 0V7.018l-4.866 4.866a1.25 1.25 0 0 1-1.768-1.768zM5 13.75c.69 0 1.25.56 1.25 1.25v9.6c0 .246.11.522.377.755.273.238.674.395 1.123.395h16.5c.449 0 .85-.157 1.123-.395.267-.233.377-.51.377-.755V15a1.25 1.25 0 1 1 2.5 0v9.6c0 1.027-.469 1.972-1.233 2.639-.76.662-1.757 1.011-2.767 1.011H7.75c-1.01 0-2.007-.349-2.766-1.011-.765-.667-1.234-1.612-1.234-2.639V15c0-.69.56-1.25 1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        rr = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(Jt, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(er, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(tr, {
              ...n,
              ref: r
            })]
          })
        }));
      rr.displayName = "Upload", rr.category = "Files", rr.variant = "Outline", rr.keywords = "Up, File, Share", rr.MD = Jt, rr.LG = er, rr.XL = tr;
      const nr = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M7 2.75a.25.25 0 0 0-.25.25v.25h2.5V3A.25.25 0 0 0 9 2.75zm3.75.5V3A1.75 1.75 0 0 0 9 1.25H7A1.75 1.75 0 0 0 5.25 3v.25H3a.75.75 0 0 0 0 1.5h.25v5.534c0 .576.03 1.088.125 1.527.096.446.272.862.597 1.194.636.65 1.617.745 2.684.745h2.688c1.067 0 2.048-.094 2.685-.745.324-.332.5-.748.597-1.194.095-.438.124-.951.124-1.527V4.75H13a.75.75 0 0 0 0-1.5zm.5 1.5h-6.5v5.534c0 .542.03.928.09 1.208.06.273.138.397.204.464.145.149.492.294 1.612.294h2.688c1.12 0 1.467-.145 1.612-.294.066-.067.144-.19.204-.463.06-.281.09-.667.09-1.21zM6.5 6.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75m3 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M10.066 4.273c-.037.125-.066.34-.066.719V5h4v-.008c0-.378-.03-.594-.066-.72a.3.3 0 0 0-.034-.083l-.008-.008c-.016-.013-.104-.069-.375-.114-.269-.045-.643-.067-1.173-.067h-.688c-.53 0-.904.022-1.173.067-.27.045-.359.101-.375.114-.005.003-.005.004-.008.007a.3.3 0 0 0-.034.085M16 5v-.008c0-.829-.094-1.8-.908-2.411-.374-.28-.813-.415-1.246-.487S12.908 2 12.344 2h-.688c-.564 0-1.068.022-1.502.094s-.872.206-1.246.487C8.094 3.19 8 4.163 8 4.992V5H4a1 1 0 0 0 0 2h1v8.933c0 .86.044 1.617.184 2.26.142.655.397 1.253.863 1.729C6.961 20.854 8.38 21 9.984 21h4.032c1.605 0 3.023-.146 3.937-1.078.466-.476.72-1.074.863-1.728.14-.644.184-1.402.184-2.261V7h1a1 1 0 1 0 0-2zm1 2H7v8.933c0 .815.044 1.402.138 1.835.092.423.218.632.338.754.259.264.832.478 2.508.478h4.032c1.675 0 2.25-.214 2.508-.478.12-.122.246-.331.338-.754.094-.433.138-1.02.138-1.835zm-7 2a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ar = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M13.342 5.673c-.053.179-.092.476-.092.983v.094h5.5v-.094c0-.507-.039-.804-.092-.983-.04-.134-.073-.157-.083-.164l-.002-.001c-.037-.028-.169-.106-.536-.168-.366-.06-.87-.09-1.578-.09h-.918c-.708 0-1.212.03-1.578.09-.367.062-.499.14-.536.168l-.002.001c-.01.007-.043.03-.083.164M21.25 6.75v-.094c0-1.104-.127-2.36-1.177-3.148-.484-.363-1.055-.539-1.625-.634-.572-.095-1.24-.124-1.99-.124h-.917c-.75 0-1.417.03-1.989.124-.57.095-1.141.27-1.625.634-1.05.787-1.177 2.044-1.177 3.148v.094H5a1.25 1.25 0 1 0 0 2.5h1.75v12.23c0 1.164.058 2.182.242 3.042.187.872.519 1.662 1.123 2.29 1.19 1.237 3.051 1.438 5.197 1.438h5.376c2.146 0 4.006-.201 5.197-1.438.604-.628.936-1.418 1.122-2.29.184-.86.243-1.878.243-3.041V9.25H27a1.25 1.25 0 1 0 0-2.5zm1.5 2.5H9.25v12.23c0 1.11.059 1.918.187 2.52.126.588.302.894.48 1.078.37.386 1.166.672 3.395.672h5.376c2.229 0 3.024-.286 3.396-.672.177-.184.353-.49.479-1.079.128-.6.187-1.41.187-2.518zM13 11.75c.69 0 1.25.56 1.25 1.25v8a1.25 1.25 0 1 1-2.5 0v-8c0-.69.56-1.25 1.25-1.25m6 0c.69 0 1.25.56 1.25 1.25v8a1.25 1.25 0 1 1-2.5 0v-8c0-.69.56-1.25 1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        lr = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(nr, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(or, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(ar, {
              ...n,
              ref: r
            })]
          })
        }));
      lr.displayName = "Trash", lr.category = "Files", lr.variant = "Outline", lr.keywords = "Trashcan, Bin, Waste bin, Erase, Delete, Remove", lr.MD = nr, lr.LG = or, lr.XL = ar;
      const ir = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M10.215 3.25a2.48 2.48 0 0 0-1.767.723l-.918.918a.75.75 0 0 1-1.06-1.06l.917-.918a3.98 3.98 0 0 1 2.837-1.163 4.05 4.05 0 0 1 2.838 1.188 4.05 4.05 0 0 1 1.188 2.838 3.98 3.98 0 0 1-1.163 2.837l-.917.917a.75.75 0 0 1-1.06-1.06l.917-.918a2.48 2.48 0 0 0 .723-1.767 2.55 2.55 0 0 0-.749-1.786 2.55 2.55 0 0 0-1.786-.749m-.185 2.72a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0m-5.14.5a.75.75 0 0 1 0 1.06l-.917.918a2.48 2.48 0 0 0-.723 1.767 2.55 2.55 0 0 0 .749 1.786 2.55 2.55 0 0 0 1.786.749 2.48 2.48 0 0 0 1.767-.723l.918-.918a.75.75 0 1 1 1.06 1.06l-.917.918a3.98 3.98 0 0 1-2.837 1.163 4.05 4.05 0 0 1-2.838-1.188 4.05 4.05 0 0 1-1.188-2.838 3.98 3.98 0 0 1 1.163-2.837l.917-.917a.75.75 0 0 1 1.06 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        sr = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M15.425 5a3.4 3.4 0 0 0-2.456.992l-1.262 1.262a1 1 0 1 1-1.414-1.414l1.261-1.262A5.4 5.4 0 0 1 15.448 3a5.62 5.62 0 0 1 3.901 1.651 5.62 5.62 0 0 1 1.65 3.901 5.4 5.4 0 0 1-1.577 3.894l-1.262 1.261a1 1 0 0 1-1.414-1.414l1.262-1.262A3.4 3.4 0 0 0 19 8.575a3.62 3.62 0 0 0-1.065-2.51A3.62 3.62 0 0 0 15.425 5m-.218 3.793a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414l5-5a1 1 0 0 1 1.414 0m-7.953 1.5a1 1 0 0 1 0 1.414L5.992 12.97A3.4 3.4 0 0 0 5 15.425c.01.932.392 1.836 1.065 2.51A3.62 3.62 0 0 0 8.575 19a3.4 3.4 0 0 0 2.456-.992l1.262-1.262a1 1 0 1 1 1.414 1.414l-1.261 1.262A5.4 5.4 0 0 1 8.552 21a5.62 5.62 0 0 1-3.901-1.651 5.62 5.62 0 0 1-1.65-3.901 5.4 5.4 0 0 1 1.577-3.894l1.262-1.261a1 1 0 0 1 1.414 0",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M20.901 6.25a4.63 4.63 0 0 0-3.335 1.348L15.884 9.28a1.25 1.25 0 0 1-1.768-1.768l1.682-1.682a7.13 7.13 0 0 1 5.132-2.08 7.4 7.4 0 0 1 5.143 2.177 7.4 7.4 0 0 1 2.177 5.143 7.13 7.13 0 0 1-2.08 5.132l-1.682 1.682a1.25 1.25 0 0 1-1.768-1.768l1.682-1.682A4.63 4.63 0 0 0 25.75 11.1a4.9 4.9 0 0 0-1.445-3.404 4.9 4.9 0 0 0-3.404-1.445m-1.017 5.866a1.25 1.25 0 0 1 0 1.768l-6 6a1.25 1.25 0 0 1-1.768-1.768l6-6a1.25 1.25 0 0 1 1.768 0m-10.604 2a1.25 1.25 0 0 1 0 1.768l-1.682 1.682A4.63 4.63 0 0 0 6.25 20.9a4.9 4.9 0 0 0 1.445 3.404 4.9 4.9 0 0 0 3.404 1.445 4.63 4.63 0 0 0 3.335-1.348l1.682-1.682a1.25 1.25 0 0 1 1.768 1.768l-1.682 1.682a7.13 7.13 0 0 1-5.132 2.08 7.4 7.4 0 0 1-5.143-2.177A7.4 7.4 0 0 1 3.75 20.93a7.13 7.13 0 0 1 2.08-5.132l1.682-1.682a1.25 1.25 0 0 1 1.768 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        dr = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(ir, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(sr, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(cr, {
              ...n,
              ref: r
            })]
          })
        }));
      dr.displayName = "Link", dr.category = "Files", dr.variant = "Outline", dr.keywords = "Chain, URL, Links, Hyperlink", dr.MD = ir, dr.LG = sr, dr.XL = cr;
      const ur = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M9.37 3.174a1.75 1.75 0 0 1 2.492.043l1.001 1.052a1.75 1.75 0 0 1-.042 2.457l-6.439 6.31a.75.75 0 0 1-.396.203l-2.857.5a.75.75 0 0 1-.87-.857l.476-3a.75.75 0 0 1 .216-.418zm1.406 1.078a.25.25 0 0 0-.357-.006l-6.24 6.116-.274 1.718 1.594-.279 6.272-6.147a.25.25 0 0 0 .006-.35z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        fr = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M14.766 3.996a2 2 0 0 1 2.848.049l2.43 2.551a2 2 0 0 1-.048 2.808L9.27 19.914a1 1 0 0 1-.527.271l-4.572.8a1 1 0 0 1-1.16-1.142l.762-4.8a1 1 0 0 1 .288-.557zM5.698 15.683l-.49 3.09 2.885-.505L18.596 7.977l-2.43-2.552.724-.69-.724.69z",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M20.163 4.817a2.25 2.25 0 0 1 3.204.055l3.858 4.052a2.25 2.25 0 0 1-.054 3.159l-15.01 14.71a1.25 1.25 0 0 1-.66.338l-6.286 1.1a1.25 1.25 0 0 1-1.45-1.427l1.048-6.6a1.25 1.25 0 0 1 .36-.697zM21.73 6.78 7.217 21.004l-.708 4.463 4.179-.731L25.245 10.47z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        vr = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(ur, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(fr, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(hr, {
              ...n,
              ref: r
            })]
          })
        }));
      vr.displayName = "Pencil", vr.category = "Files", vr.variant = "Outline", vr.keywords = "Edit, Update, Correct, Modify, Note, Draft", vr.MD = ur, vr.LG = fr, vr.XL = hr;
      const pr = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M6.944 3.802c-1.577.252-2.884 1.364-3.23 2.43a.75.75 0 0 1-1.427-.464c.553-1.7 2.396-3.124 4.42-3.448a5.24 5.24 0 0 1 3.212.482c.87.439 1.666 1.145 2.331 2.151V4a.75.75 0 1 1 1.5 0v3a.75.75 0 0 1-.75.75h-3a.75.75 0 1 1 0-1.5h1.282c-.602-1.09-1.319-1.746-2.038-2.109a3.74 3.74 0 0 0-2.3-.34M2.25 9A.75.75 0 0 1 3 8.25h3a.75.75 0 0 1 0 1.5H4.707l.006.018c.347 1.066 1.654 2.178 3.23 2.43a3.74 3.74 0 0 0 2.3-.34c.742-.373 1.481-1.058 2.095-2.21a.75.75 0 0 1 1.324.704c-.737 1.384-1.685 2.312-2.743 2.846a5.24 5.24 0 0 1-3.213.482c-1.628-.261-3.14-1.234-3.956-2.49V12a.75.75 0 0 1-1.5 0z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        gr = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M11.119 5.087c-2.47.424-4.584 2.3-5.162 4.204a1 1 0 1 1-1.914-.582c.822-2.707 3.608-5.056 6.738-5.593 1.598-.274 3.315-.083 4.932.79 1.213.656 2.33 1.674 3.287 3.099V5a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1h-5a1 1 0 0 1 0-2h2.873c-.93-1.7-2.018-2.744-3.11-3.334-1.184-.64-2.441-.785-3.644-.579M6.584 16H9a1 1 0 0 0 0-2H4a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-2.773c1.277 1.83 3.432 3.254 5.781 3.657 1.598.274 3.315.083 4.932-.79 1.615-.873 3.06-2.388 4.182-4.649a1 1 0 0 0-1.79-.89c-.977 1.965-2.158 3.139-3.343 3.78-1.183.639-2.44.784-3.643.578-1.902-.327-3.594-1.515-4.535-2.913",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M14.722 6.393c-3.816.69-7.152 3.75-8.016 6.934a1.25 1.25 0 0 1-2.412-.654c1.136-4.193 5.3-7.893 9.984-8.74 2.385-.431 4.94-.13 7.316 1.242 1.52.879 2.926 2.172 4.156 3.926V6a1.25 1.25 0 1 1 2.5 0v7c0 .69-.56 1.25-1.25 1.25h-7a1.25 1.25 0 1 1 0-2.5h4.472c-1.241-2.168-2.673-3.569-4.129-4.41-1.811-1.047-3.756-1.284-5.62-.947M7.338 20.25H12a1.25 1.25 0 1 0 0-2.5H5c-.69 0-1.25.56-1.25 1.25v7a1.25 1.25 0 1 0 2.5 0v-2.854c1.916 2.462 4.852 4.347 8.028 4.921 2.385.431 4.94.13 7.316-1.242 2.371-1.37 4.467-3.752 6.049-7.318a1.25 1.25 0 1 0-2.286-1.014c-1.418 3.196-3.197 5.117-5.014 6.167-1.811 1.047-3.756 1.284-5.62.947-3.178-.574-6.023-2.793-7.385-5.357",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        wr = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(pr, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(gr, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(mr, {
              ...n,
              ref: r
            })]
          })
        }));
      wr.displayName = "Refresh", wr.category = "Files", wr.variant = "Outline", wr.keywords = "Loop, Reload, Repeat, Sync, Update, Arrows, Reset, Restore", wr.MD = pr, wr.LG = gr, wr.XL = mr;
      const xr = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M10 2.75a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V3.81L8.53 8.53a.75.75 0 0 1-1.06-1.06l4.72-4.72zm-5.667 1a.583.583 0 0 0-.583.583v7.334a.583.583 0 0 0 .583.583h7.334a.583.583 0 0 0 .583-.583v-3a.75.75 0 0 1 1.5 0v3a2.083 2.083 0 0 1-2.083 2.083H4.333a2.083 2.083 0 0 1-2.083-2.083V4.333A2.083 2.083 0 0 1 4.333 2.25h3a.75.75 0 1 1 0 1.5z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        yr = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M15 4a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V5.414l-7.793 7.793a1 1 0 0 1-1.414-1.414L18.586 4zM6.133 5A1.133 1.133 0 0 0 5 6.133v11.734A1.134 1.134 0 0 0 6.133 19h11.734A1.134 1.134 0 0 0 19 17.867V13a1 1 0 1 1 2 0v4.867A3.133 3.133 0 0 1 17.867 21H6.133A3.133 3.133 0 0 1 3 17.867V6.133A3.133 3.133 0 0 1 6.133 3H11a1 1 0 1 1 0 2z",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M18.75 4c0-.69.56-1.25 1.25-1.25h8c.69 0 1.25.56 1.25 1.25v8a1.25 1.25 0 1 1-2.5 0V7.018L15.384 18.384a1.25 1.25 0 0 1-1.768-1.768L24.982 5.25H20c-.69 0-1.25-.56-1.25-1.25M7.933 6.25A1.683 1.683 0 0 0 6.25 7.933v16.134a1.683 1.683 0 0 0 1.683 1.683h16.134a1.684 1.684 0 0 0 1.683-1.683v-6.692a1.25 1.25 0 1 1 2.5 0v6.692a4.183 4.183 0 0 1-4.183 4.183H7.933a4.183 4.183 0 0 1-4.183-4.183V7.933A4.183 4.183 0 0 1 7.933 3.75h6.692a1.25 1.25 0 1 1 0 2.5z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        jr = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(xr, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(yr, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(br, {
              ...n,
              ref: r
            })]
          })
        }));
      jr.displayName = "ExternalLink", jr.category = "Files", jr.variant = "Outline", jr.keywords = "Link, New tab, New Window, Open, URL, Hyperlink, External", jr.MD = xr, jr.LG = yr, jr.XL = br;
      const Rr = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M2 5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm1.5.662V5.5h9v.162L8 7.912zm0 1.677V10.5h9V7.339L8.343 9.417a.75.75 0 0 1-.686 0z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Mr = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M3 8.651V16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2zm2-.52V8h14v.132l-7 4.667zm14 2.405V16H5v-5.464l6.445 4.296a1 1 0 0 0 1.11 0z",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M4 10.5A2.5 2.5 0 0 1 6.5 8h19a2.5 2.5 0 0 1 2.5 2.5v11a2.5 2.5 0 0 1-2.5 2.5h-19A2.5 2.5 0 0 1 4 21.5zm2.5 0h19v.063L16 17.688l-9.5-7.125zm0 3.188V21.5h19v-7.812l-8.734 6.55a1.25 1.25 0 0 1-1.543-.008z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Lr = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(Rr, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(Mr, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(Cr, {
              ...n,
              ref: r
            })]
          })
        }));
      Lr.displayName = "Envelope", Lr.category = "Files", Lr.variant = "Outline", Lr.keywords = "Mail, Email, Message, Inbox, Chat, Letter, Invitation", Lr.MD = Rr, Lr.LG = Mr, Lr.XL = Cr;
      const Sr = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M11.228 3.144c-.335-.324-.636-.45-1.064-.444a1.45 1.45 0 0 0-.706.222c-.166.099-.272.196-.29.213L4.398 8.078c-.027.03-.699.772-.699 1.8 0 .431.06.72.165.956.105.239.279.474.581.767s.559.468.814.57c.25.101.54.148.932.122a2.73 2.73 0 0 0 1.638-.678l.004-.004 2.248-2.27a.7.7 0 0 1 .995.986L8.83 12.594c-.085.087-1.001.991-2.545 1.096-.56.038-1.068-.026-1.548-.22-.476-.19-.882-.49-1.267-.864-.376-.365-.682-.745-.886-1.205-.205-.463-.285-.958-.285-1.523 0-1.633 1.056-2.735 1.088-2.768l.002-.002 4.78-4.955.008-.008c.035-.036.827-.827 1.964-.845.836-.012 1.486.282 2.06.838.277.268.489.55.624.894.132.337.17.681.177 1.035.022 1.15-.745 1.964-.777 1.998l-.007.007-4.783 4.958-.056.053c-.037.031-.17.14-.358.246-.178.1-.47.236-.815.245a1.7 1.7 0 0 1-.72-.11 1.7 1.7 0 0 1-.545-.374 1.7 1.7 0 0 1-.406-.566 1.8 1.8 0 0 1-.137-.673 1.8 1.8 0 0 1 .49-1.27l4.435-4.566a.7.7 0 1 1 1.005.975L5.894 9.555a.42.42 0 0 0-.095.263.4.4 0 0 0 .022.15.4.4 0 0 0 .088.11c.07.066.099.085.106.089.01.002.05.01.154.008q.001.002.054-.013a1 1 0 0 0 .112-.052c.054-.03.097-.062.12-.08l4.75-4.922c.013-.016.107-.124.2-.294.112-.203.203-.454.198-.72-.005-.278-.034-.434-.08-.55-.042-.108-.118-.23-.295-.4m-5.215 7.022h.002zm.002 0 .002.002zm-.127-.605h.001",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Er = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M16.773 4.708C16.24 4.194 15.755 3.99 15.07 4c-.423.007-.82.167-1.136.356a3 3 0 0 0-.461.34l-7.37 7.64-.002.002C6.064 12.38 5 13.55 5 15.175c0 .674.094 1.133.262 1.51.169.383.444.755.916 1.212.471.457.877.736 1.284.899.4.16.86.234 1.476.192 1.625-.11 2.584-1.07 2.584-1.07l.002-.003.005-.005.003-.003 3.471-3.503a1 1 0 0 1 1.42 1.407l-3.47 3.503.005-.004-.006.006c-.123.126-1.521 1.508-3.879 1.668-.857.058-1.628-.04-2.357-.332-.722-.29-1.341-.748-1.93-1.32-.579-.56-1.044-1.138-1.353-1.836C3.122 16.793 3 16.04 3 15.175 3 12.683 4.613 11 4.658 10.953l.003-.002.001-.002h.001l7.38-7.65.002-.003.002-.002.005-.005.007-.007c.047-.047 1.251-1.255 2.98-1.281 1.268-.02 2.252.426 3.125 1.27.422.41.742.837.946 1.354.199.508.257 1.029.267 1.572.033 1.745-1.136 2.984-1.18 3.03l-.005.005-.005.005-.003.003-7.39 7.66a1 1 0 0 1-.074.071c-.05.042-.248.208-.534.37-.27.153-.713.36-1.231.374-.363.01-.723-.02-1.08-.165-.352-.143-.61-.364-.817-.561a2.6 2.6 0 0 1-.609-.848 2.7 2.7 0 0 1-.205-1.01 2.72 2.72 0 0 1 .735-1.904l6.854-7.056a1 1 0 0 1 1.434 1.393l-6.855 7.057c-.005.007-.041.049-.079.118a.7.7 0 0 0-.09.345.7.7 0 0 0 .041.262.6.6 0 0 0 .155.196c.147.14.187.155.19.155.001.001.014.006.05.011.042.006.11.01.22.007a.4.4 0 0 0 .11-.025q.089-.03.19-.088c.088-.05.159-.102.194-.13l7.346-7.614c.021-.024.17-.196.321-.467.178-.321.326-.725.318-1.157-.009-.434-.055-.686-.13-.877-.071-.181-.196-.378-.475-.649",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M22.1 6.567c-.696-.662-1.325-.919-2.215-.905-.543.008-1.056.209-1.472.452a3.7 3.7 0 0 0-.605.436L7.874 16.651l-.002.002c-.055.06-1.455 1.577-1.455 3.677 0 .88.125 1.472.343 1.954.22.488.581.969 1.211 1.568.629.598 1.165.957 1.695 1.166.521.205 1.125.301 1.942.247 2.145-.143 3.414-1.386 3.414-1.386l.008-.008 4.684-4.637a1.48 1.48 0 0 1 2.062-.01c.572.557.577 1.462.01 2.024l-4.68 4.633c-.176.177-2.085 2.025-5.3 2.238-1.17.078-2.226-.052-3.227-.447-.99-.39-1.838-1.004-2.639-1.766-.785-.747-1.422-1.522-1.847-2.463-.427-.947-.593-1.957-.593-3.113 0-3.337 2.2-5.589 2.266-5.657l.004-.004 9.96-10.126.016-.017c.074-.072 1.723-1.689 4.094-1.725 1.74-.027 3.095.576 4.29 1.71.577.549 1.02 1.126 1.3 1.83.276.687.355 1.39.37 2.115.044 2.348-1.553 4.012-1.62 4.082l-.015.015L14.2 22.685a2 2 0 0 1-.116.107 5 5 0 0 1-.746.504c-.37.205-.98.481-1.697.5-.496.014-1-.026-1.5-.225-.495-.197-.854-.5-1.136-.764a3.5 3.5 0 0 1-.846-1.156 3.6 3.6 0 0 1-.286-1.376c-.037-1.513.903-2.478 1.022-2.596l9.24-9.33a1.48 1.48 0 0 1 2.063-.03c.577.55.59 1.456.03 2.023l-9.24 9.329a1 1 0 0 0-.093.137.8.8 0 0 0-.106.399c.005.2.033.277.047.307.012.027.046.095.183.223.145.136.206.175.22.184.02.005.105.021.322.016 0 0 .04-.003.111-.027q.107-.037.234-.106c.112-.062.202-.126.25-.162l9.895-10.061c.03-.032.224-.253.42-.6.233-.414.422-.927.412-1.471-.011-.568-.072-.887-.167-1.123-.089-.222-.247-.47-.615-.82M11.236 20.92l.005.002zm.005.002.004.002zm-.264-1.238.002-.002z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        _r = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(Sr, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(Er, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(Pr, {
              ...n,
              ref: r
            })]
          })
        }));
      _r.displayName = "Paperclip", _r.category = "Files", _r.variant = "Outline", _r.keywords = "Attach, Clip, Document, Attachment, Paper", _r.MD = Sr, _r.LG = Er, _r.XL = Pr;
      const Dr = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M9.313 2.319A.75.75 0 0 1 9.75 3v10a.75.75 0 0 1-1.238.57l-3.123-2.677H3a.75.75 0 0 1-.75-.75V5.857a.75.75 0 0 1 .75-.75h2.39l3.122-2.676a.75.75 0 0 1 .801-.112M8.25 4.63 6.155 6.427a.75.75 0 0 1-.488.18H3.75v2.786h1.917a.75.75 0 0 1 .488.18L8.25 11.37zm3.172.89a.75.75 0 0 1 1.056-.099C13.27 6.078 13.75 7.001 13.75 8c0 1-.48 1.922-1.271 2.578a.75.75 0 1 1-.957-1.156c.489-.405.728-.921.728-1.422s-.24-1.017-.729-1.422a.75.75 0 0 1-.099-1.056",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ar = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M14.433 4.099A1 1 0 0 1 15 5v14a1 1 0 0 1-1.625.78L8.65 16H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.65l4.725-3.78a1 1 0 0 1 1.058-.121M13 7.08l-3.375 2.7A1 1 0 0 1 9 10H6v4h3a1 1 0 0 1 .625.22L13 16.92zm3.15 1.391a1 1 0 0 1 1.378-.321C18.99 9.059 20 10.415 20 12s-1.01 2.94-2.472 3.85a1 1 0 0 1-1.056-1.7C17.572 13.469 18 12.666 18 12s-.429-1.468-1.528-2.15a1 1 0 0 1-.321-1.378",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M19.551 5.878c.428.21.699.645.699 1.122v18a1.25 1.25 0 0 1-2.014.99l-6.329-4.883H7c-.69 0-1.25-.56-1.25-1.25v-7.714c0-.69.56-1.25 1.25-1.25h4.907l6.33-4.883a1.25 1.25 0 0 1 1.314-.132M17.75 9.543l-4.653 3.59a1.25 1.25 0 0 1-.764.26H8.25v5.214h4.083c.277 0 .545.092.764.26l4.653 3.59zm5.156 1.853a1.25 1.25 0 0 1 1.698-.49C26.72 12.074 28.25 13.85 28.25 16s-1.53 3.926-3.646 5.094a1.25 1.25 0 0 1-1.208-2.188c1.726-.954 2.354-2.054 2.354-2.906s-.628-1.952-2.354-2.906a1.25 1.25 0 0 1-.49-1.698",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ir = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(Dr, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(Ar, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(Tr, {
              ...n,
              ref: r
            })]
          })
        }));
      Ir.displayName = "VolumeDown", Ir.category = "Media playback", Ir.variant = "Outline", Ir.keywords = "Control, Volume, Low, Sound, Speaker", Ir.MD = Dr, Ir.LG = Ar, Ir.XL = Tr;
      const Nr = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M9.313 2.319A.75.75 0 0 1 9.75 3v10a.75.75 0 0 1-1.238.57l-3.123-2.677H3a.75.75 0 0 1-.75-.75V5.857a.75.75 0 0 1 .75-.75h2.39l3.122-2.676a.75.75 0 0 1 .801-.112M8.25 4.63 6.155 6.427a.75.75 0 0 1-.488.18H3.75v2.786h1.917a.75.75 0 0 1 .488.18L8.25 11.37zm4.28-.215a.75.75 0 0 1 1.054.114c.759.943 1.166 2.192 1.166 3.47s-.407 2.528-1.166 3.47a.75.75 0 1 1-1.168-.94c.522-.649.834-1.557.834-2.53s-.312-1.881-.834-2.53a.75.75 0 0 1 .114-1.054m-2.107 1.106a.75.75 0 0 1 1.056-.1c.79.656 1.271 1.579 1.271 2.578 0 1-.48 1.922-1.271 2.578a.75.75 0 1 1-.957-1.156c.489-.405.728-.921.728-1.422s-.24-1.017-.729-1.422a.75.75 0 0 1-.099-1.056",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Or = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M14.433 4.099A1 1 0 0 1 15 5v14a1 1 0 0 1-1.625.78L8.65 16H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.65l4.725-3.78a1 1 0 0 1 1.058-.121M13 7.08l-3.375 2.7A1 1 0 0 1 9 10H6v4h3a1 1 0 0 1 .625.22L13 16.92zm6.23.281a1 1 0 0 1 1.408-.132C22.12 8.458 23 10.167 23 12s-.88 3.542-2.362 4.77a1 1 0 0 1-1.276-1.54C20.442 14.336 21 13.168 21 12s-.558-2.336-1.638-3.23a1 1 0 0 1-.132-1.408m-3.08 1.11a1 1 0 0 1 1.378-.321C18.99 9.059 20 10.415 20 12s-1.01 2.94-2.472 3.85a1 1 0 0 1-1.056-1.7C17.572 13.469 18 12.666 18 12s-.429-1.468-1.528-2.15a1 1 0 0 1-.321-1.378",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M19.551 5.878c.428.21.699.645.699 1.122v18a1.25 1.25 0 0 1-2.014.99l-6.329-4.883H7c-.69 0-1.25-.56-1.25-1.25v-7.714c0-.69.56-1.25 1.25-1.25h4.907l6.33-4.883a1.25 1.25 0 0 1 1.314-.132M17.75 9.543l-4.653 3.59a1.25 1.25 0 0 1-.764.26H8.25v5.214h4.083c.277 0 .545.092.764.26l4.653 3.59zm7.221.747a1.25 1.25 0 0 1 1.74-.319c2.165 1.495 3.539 3.641 3.539 6.029s-1.374 4.534-3.54 6.029a1.25 1.25 0 0 1-1.42-2.058c1.676-1.157 2.46-2.608 2.46-3.971s-.784-2.814-2.46-3.971a1.25 1.25 0 0 1-.319-1.74m-4.065 1.106a1.25 1.25 0 0 1 1.698-.49C24.72 12.074 26.25 13.85 26.25 16s-1.53 3.926-3.646 5.094a1.25 1.25 0 0 1-1.208-2.188c1.726-.954 2.354-2.054 2.354-2.906s-.628-1.952-2.354-2.906a1.25 1.25 0 0 1-.49-1.698",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Hr = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(Nr, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(Or, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(kr, {
              ...n,
              ref: r
            })]
          })
        }));
      Hr.displayName = "VolumeUp", Hr.category = "Media playback", Hr.variant = "Outline", Hr.keywords = "Control, Volume, High, Sound, Speaker", Hr.MD = Nr, Hr.LG = Or, Hr.XL = kr;
      const Br = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M9.313 2.319A.75.75 0 0 1 9.75 3v10a.75.75 0 0 1-1.238.57l-3.123-2.677H3a.75.75 0 0 1-.75-.75V5.857a.75.75 0 0 1 .75-.75h2.39l3.122-2.676a.75.75 0 0 1 .801-.112M8.25 4.63 6.155 6.427a.75.75 0 0 1-.488.18H3.75v2.786h1.917a.75.75 0 0 1 .488.18L8.25 11.37zm2.22 1.339a.75.75 0 0 1 1.06 0l.97.97.97-.97a.75.75 0 1 1 1.06 1.06l-.97.97.97.97a.75.75 0 1 1-1.06 1.06l-.97-.97-.97.97a.75.75 0 1 1-1.06-1.06l.97-.97-.97-.97a.75.75 0 0 1 0-1.06",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        zr = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M14.433 4.099A1 1 0 0 1 15 5v14a1 1 0 0 1-1.625.78L8.65 16H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.65l4.725-3.78a1 1 0 0 1 1.058-.121M13 7.08l-3.375 2.7A1 1 0 0 1 9 10H6v4h3a1 1 0 0 1 .625.22L13 16.92zm3.293 2.212a1 1 0 0 1 1.414 0L19 10.586l1.293-1.293a1 1 0 0 1 1.414 1.414L20.414 12l1.293 1.293a1 1 0 0 1-1.414 1.414L19 13.414l-1.293 1.293a1 1 0 0 1-1.414-1.414L17.586 12l-1.293-1.293a1 1 0 0 1 0-1.414",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M19.551 5.878c.428.21.699.645.699 1.122v18a1.25 1.25 0 0 1-2.014.99l-6.329-4.883H7c-.69 0-1.25-.56-1.25-1.25v-7.714c0-.69.56-1.25 1.25-1.25h4.907l6.33-4.883a1.25 1.25 0 0 1 1.314-.132M17.75 9.543l-4.653 3.59a1.25 1.25 0 0 1-.764.26H8.25v5.214h4.083c.277 0 .545.092.764.26l4.653 3.59zm4.366 3.573a1.25 1.25 0 0 1 1.768 0l1.616 1.616 1.616-1.616a1.25 1.25 0 0 1 1.768 1.768L27.268 16.5l1.616 1.616a1.25 1.25 0 0 1-1.768 1.768L25.5 18.268l-1.616 1.616a1.25 1.25 0 0 1-1.768-1.768l1.616-1.616-1.616-1.616a1.25 1.25 0 0 1 0-1.768",
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
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(Br, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(zr, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(Vr, {
              ...n,
              ref: r
            })]
          })
        }));
      Fr.displayName = "VolumeOff", Fr.category = "Media playback", Fr.variant = "Outline", Fr.keywords = "Control, Volume, Mute, Sound, Speaker", Fr.MD = Br, Fr.LG = zr, Fr.XL = Vr;
      const Gr = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M3.636 2.344a.75.75 0 0 1 .761.02l8 5a.75.75 0 0 1 0 1.272l-8 5A.75.75 0 0 1 3.25 13V3a.75.75 0 0 1 .386-.656m1.114 2.01v7.293L10.585 8z",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M4.498 3.135a1 1 0 0 1 .998-.003l14 8a1 1 0 0 1 0 1.736l-14 8A1 1 0 0 1 4 20V4a1 1 0 0 1 .498-.865M6 5.723v12.554L16.984 12z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ur = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M6.389 3.91A1.25 1.25 0 0 0 5.75 5v22a1.25 1.25 0 0 0 1.902 1.067l18-11a1.25 1.25 0 0 0 0-2.134l-18-11a1.25 1.25 0 0 0-1.263-.023M22.603 16 8.25 24.771V7.23z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        qr = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(Gr, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(Xr, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(Ur, {
              ...n,
              ref: r
            })]
          })
        }));
      qr.displayName = "Play", qr.category = "Media playback", qr.variant = "Outline", qr.keywords = "Play, Control, Player", qr.MD = Gr, qr.LG = Xr, qr.XL = Ur;
      const Wr = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M13.343 2.333A.75.75 0 0 1 13.75 3v10a.75.75 0 0 1-1.186.61l-7-5a.75.75 0 0 1 0-1.22l7-5a.75.75 0 0 1 .78-.057M7.29 8l4.96 3.543V4.457zM3 3.25a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0V4A.75.75 0 0 1 3 3.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Kr = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M19.433 3.099A1 1 0 0 1 20 4v16a1 1 0 0 1-1.625.78l-10-8a1 1 0 0 1 0-1.56l10-8a1 1 0 0 1 1.058-.121M10.601 12 18 17.92V6.08zM5 4a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M25.546 3.876c.43.209.704.645.704 1.124v22a1.25 1.25 0 0 1-2.022.983l-14-11a1.25 1.25 0 0 1 0-1.966l14-11a1.25 1.25 0 0 1 1.318-.141M13.023 16l10.727 8.428V7.572zM6 4.75c.69 0 1.25.56 1.25 1.25v20a1.25 1.25 0 1 1-2.5 0V6c0-.69.56-1.25 1.25-1.25",
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
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(Wr, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(Kr, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)($r, {
              ...n,
              ref: r
            })]
          })
        }));
      Yr.displayName = "SkipBack", Yr.category = "Media playback", Yr.variant = "Outline", Yr.keywords = "Back, Rewind, Reverse, Control, Player", Yr.MD = Wr, Yr.LG = Kr, Yr.XL = $r;
      const Zr = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M2.657 2.333a.75.75 0 0 1 .779.057l7 5a.75.75 0 0 1 0 1.22l-7 5A.75.75 0 0 1 2.25 13V3a.75.75 0 0 1 .407-.667M3.75 4.457v7.086L8.71 8zM13 3.25a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Qr = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M4.567 3.099a1 1 0 0 1 1.058.12l10 8a1 1 0 0 1 0 1.562l-10 8A1 1 0 0 1 4 20V4a1 1 0 0 1 .567-.901M6 6.08v11.838L13.4 12zM19 4a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M6.454 3.876a1.25 1.25 0 0 1 1.318.141l14 11a1.25 1.25 0 0 1 0 1.966l-14 11A1.25 1.25 0 0 1 5.75 27V5c0-.479.273-.915.704-1.124M8.25 7.572v16.856L18.977 16zM26 4.75c.69 0 1.25.56 1.25 1.25v20a1.25 1.25 0 1 1-2.5 0V6c0-.69.56-1.25 1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        en = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(Zr, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(Qr, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(Jr, {
              ...n,
              ref: r
            })]
          })
        }));
      en.displayName = "SkipForward", en.category = "Media playback", en.variant = "Outline", en.keywords = "Next, Forward, Front, Control, Player", en.MD = Zr, en.LG = Qr, en.XL = Jr;
      const tn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M2.35 4c0-.911.739-1.65 1.65-1.65h2c.911 0 1.65.739 1.65 1.65v8A1.65 1.65 0 0 1 6 13.65H4A1.65 1.65 0 0 1 2.35 12zM4 3.65a.35.35 0 0 0-.35.35v8c0 .193.157.35.35.35h2a.35.35 0 0 0 .35-.35V4A.35.35 0 0 0 6 3.65zM8.35 4c0-.911.739-1.65 1.65-1.65h2c.911 0 1.65.739 1.65 1.65v8A1.65 1.65 0 0 1 12 13.65h-2A1.65 1.65 0 0 1 8.35 12zM10 3.65a.35.35 0 0 0-.35.35v8c0 .193.157.35.35.35h2a.35.35 0 0 0 .35-.35V4a.35.35 0 0 0-.35-.35z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        rn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M3 6a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm7 1a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M3.75 7A3.25 3.25 0 0 1 7 3.75h4A3.25 3.25 0 0 1 14.25 7v18A3.25 3.25 0 0 1 11 28.25H7A3.25 3.25 0 0 1 3.75 25zM7 6.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h4a.75.75 0 0 0 .75-.75V7a.75.75 0 0 0-.75-.75zM17.75 7A3.25 3.25 0 0 1 21 3.75h4A3.25 3.25 0 0 1 28.25 7v18A3.25 3.25 0 0 1 25 28.25h-4A3.25 3.25 0 0 1 17.75 25zM21 6.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h4a.75.75 0 0 0 .75-.75V7a.75.75 0 0 0-.75-.75z",
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
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(tn, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(rn, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(nn, {
              ...n,
              ref: r
            })]
          })
        }));
      on.displayName = "Pause", on.category = "Media playback", on.variant = "Outline", on.keywords = "Pause, Control, Player", on.MD = tn, on.LG = rn, on.XL = nn;
      const an = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M9.25 3a.75.75 0 0 1 .75-.75h2c.966 0 1.75.784 1.75 1.75v2a.75.75 0 0 1-1.5 0V4a.25.25 0 0 0-.25-.25h-2A.75.75 0 0 1 9.25 3m-7 1c0-.966.784-1.75 1.75-1.75h2a.75.75 0 0 1 0 1.5H4a.25.25 0 0 0-.25.25v2a.75.75 0 0 1-1.5 0zM3 9.25a.75.75 0 0 1 .75.75v2c0 .138.112.25.25.25h2a.75.75 0 0 1 0 1.5H4A1.75 1.75 0 0 1 2.25 12v-2A.75.75 0 0 1 3 9.25m10 0a.75.75 0 0 1 .75.75v2A1.75 1.75 0 0 1 12 13.75h-2a.75.75 0 0 1 0-1.5h2a.25.25 0 0 0 .25-.25v-2a.75.75 0 0 1 .75-.75",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ln = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M15 4a1 1 0 0 1 1-1h2a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V6a1 1 0 0 0-1-1h-2a1 1 0 0 1-1-1M3 6a3 3 0 0 1 3-3h2a1 1 0 0 1 0 2H6a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0zm1 9a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H6a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1m16 0a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M19.75 5c0-.69.56-1.25 1.25-1.25h4A3.25 3.25 0 0 1 28.25 7v4a1.25 1.25 0 1 1-2.5 0V7a.75.75 0 0 0-.75-.75h-4c-.69 0-1.25-.56-1.25-1.25m-16 2A3.25 3.25 0 0 1 7 3.75h4a1.25 1.25 0 1 1 0 2.5H7a.75.75 0 0 0-.75.75v4a1.25 1.25 0 1 1-2.5 0zM5 19.75c.69 0 1.25.56 1.25 1.25v4c0 .414.336.75.75.75h4a1.25 1.25 0 1 1 0 2.5H7A3.25 3.25 0 0 1 3.75 25v-4c0-.69.56-1.25 1.25-1.25m22 0c.69 0 1.25.56 1.25 1.25v4A3.25 3.25 0 0 1 25 28.25h-4a1.25 1.25 0 1 1 0-2.5h4a.75.75 0 0 0 .75-.75v-4c0-.69.56-1.25 1.25-1.25",
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
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(an, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(ln, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(sn, {
              ...n,
              ref: r
            })]
          })
        }));
      cn.displayName = "Maximize", cn.category = "Media playback", cn.variant = "Outline", cn.keywords = "Maximum, Full screen, Big, Large, Expand", cn.MD = an, cn.LG = ln, cn.XL = sn;
      const dn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M10 2.25a.75.75 0 0 1 .75.75v2c0 .138.112.25.25.25h2a.75.75 0 0 1 0 1.5h-2A1.75 1.75 0 0 1 9.25 5V3a.75.75 0 0 1 .75-.75m-4 0a.75.75 0 0 1 .75.75v2A1.75 1.75 0 0 1 5 6.75H3a.75.75 0 0 1 0-1.5h2A.25.25 0 0 0 5.25 5V3A.75.75 0 0 1 6 2.25M2.25 10A.75.75 0 0 1 3 9.25h2c.966 0 1.75.784 1.75 1.75v2a.75.75 0 0 1-1.5 0v-2a.25.25 0 0 0-.25-.25H3a.75.75 0 0 1-.75-.75m7 1c0-.966.784-1.75 1.75-1.75h2a.75.75 0 0 1 0 1.5h-2a.25.25 0 0 0-.25.25v2a.75.75 0 0 1-1.5 0z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        un = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M9 3a1 1 0 0 1 1 1v3a3 3 0 0 1-3 3H4a1 1 0 0 1 0-2h3a1 1 0 0 0 1-1V4a1 1 0 0 1 1-1m6 0a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h3a1 1 0 1 1 0 2h-3a3 3 0 0 1-3-3V4a1 1 0 0 1 1-1M3 15a1 1 0 0 1 1-1h3a3 3 0 0 1 3 3v3a1 1 0 1 1-2 0v-3a1 1 0 0 0-1-1H4a1 1 0 0 1-1-1m11 2a3 3 0 0 1 3-3h3a1 1 0 1 1 0 2h-3a1 1 0 0 0-1 1v3a1 1 0 1 1-2 0z",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M20 3.75c.69 0 1.25.56 1.25 1.25v5c0 .414.336.75.75.75h5a1.25 1.25 0 1 1 0 2.5h-5A3.25 3.25 0 0 1 18.75 10V5c0-.69.56-1.25 1.25-1.25m-8 0c.69 0 1.25.56 1.25 1.25v5A3.25 3.25 0 0 1 10 13.25H5a1.25 1.25 0 1 1 0-2.5h5a.75.75 0 0 0 .75-.75V5c0-.69.56-1.25 1.25-1.25M3.75 20c0-.69.56-1.25 1.25-1.25h5A3.25 3.25 0 0 1 13.25 22v5a1.25 1.25 0 1 1-2.5 0v-5a.75.75 0 0 0-.75-.75H5c-.69 0-1.25-.56-1.25-1.25m15 2A3.25 3.25 0 0 1 22 18.75h5a1.25 1.25 0 1 1 0 2.5h-5a.75.75 0 0 0-.75.75v5a1.25 1.25 0 1 1-2.5 0z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        hn = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(dn, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(un, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(fn, {
              ...n,
              ref: r
            })]
          })
        }));
      hn.displayName = "Minimize", hn.category = "Media playback", hn.variant = "Outline", hn.keywords = "Full screen, Exit, Window, Shrink, Reduce, Video Playback", hn.MD = dn, hn.LG = un, hn.XL = fn;
      const vn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M8.113 1.632a.75.75 0 0 1-.05.814 3.927 3.927 0 0 0 5.491 5.491.75.75 0 0 1 1.193.673A6.763 6.763 0 1 1 7.39 1.253a.75.75 0 0 1 .723.379M6.06 3.1a5.263 5.263 0 1 0 6.84 6.84A5.427 5.427 0 0 1 6.06 3.1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        pn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M12.15 3.509a1 1 0 0 1-.067 1.085 5.236 5.236 0 0 0 7.323 7.323 1 1 0 0 1 1.59.896 9.017 9.017 0 1 1-9.809-9.809 1 1 0 0 1 .963.505M9.414 5.467a7.017 7.017 0 1 0 9.12 9.12 7.233 7.233 0 0 1-9.455-6.343c-.07-.946.046-1.889.335-2.777",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M16.188 5.386c.242.43.21.96-.084 1.357a6.544 6.544 0 0 0 9.153 9.153 1.25 1.25 0 0 1 1.988 1.12 11.272 11.272 0 1 1-12.26-12.26 1.25 1.25 0 0 1 1.203.63m-3.421 2.448a8.772 8.772 0 1 0 11.4 11.4 9.044 9.044 0 0 1-11.4-11.4",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        mn = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(vn, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(pn, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(gn, {
              ...n,
              ref: r
            })]
          })
        }));
      mn.displayName = "Moon", mn.category = "Accessibility", mn.variant = "Outline", mn.keywords = "Night, Dark, Lightness, Theme, Brightness", mn.MD = vn, mn.LG = pn, mn.XL = gn;
      const wn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M8 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 1 1-1.5 0V2A.75.75 0 0 1 8 1.25m4.955 1.863c.301.285.314.76.03 1.06l-.77.813a.75.75 0 1 1-1.089-1.032l.77-.812a.75.75 0 0 1 1.06-.029m-10.007.18a.75.75 0 0 1 1.06-.045l.823.756a.75.75 0 1 1-1.015 1.105l-.823-.757a.75.75 0 0 1-.045-1.06M8 5.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M4.25 8a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0m-3 0A.75.75 0 0 1 2 7.25h1a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 8m11 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m-1.266 2.955a.75.75 0 0 1 1.06.03l.77.811a.75.75 0 0 1-1.09 1.032l-.769-.812a.75.75 0 0 1 .03-1.06m-5.97.062a.75.75 0 0 1-.045 1.06l-.824.756a.75.75 0 0 1-1.014-1.105l.823-.756a.75.75 0 0 1 1.06.045M8 12.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        xn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M12 2a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1M5.077 5.187a1 1 0 0 1 1.414-.033L7.794 6.4a1 1 0 0 1-1.381 1.446L5.109 6.6a1 1 0 0 1-.032-1.414m13.923 0a1 1 0 0 1-.032 1.414l-1.304 1.245A1 1 0 1 1 16.283 6.4l1.303-1.246A1 1 0 0 1 19 5.188M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0m-5 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m16 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1M8 16.049a1 1 0 0 1-.032 1.414l-1.304 1.245a1 1 0 0 1-1.381-1.446l1.303-1.246A1 1 0 0 1 8 16.05m8.077.26a1 1 0 0 1 1.414-.032l1.303 1.245a1 1 0 1 1-1.381 1.446l-1.304-1.245a1 1 0 0 1-.032-1.414M12 18a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M16 2.75c.69 0 1.25.56 1.25 1.25v3a1.25 1.25 0 1 1-2.5 0V4c0-.69.56-1.25 1.25-1.25m8.824 4.49a1.25 1.25 0 0 1 .058 1.767l-1.71 1.825a1.25 1.25 0 0 1-1.824-1.71l1.71-1.824a1.25 1.25 0 0 1 1.766-.058m-17.679.048a1.25 1.25 0 0 1 1.767.057l1.71 1.825a1.25 1.25 0 0 1-1.825 1.71l-1.71-1.825a1.25 1.25 0 0 1 .058-1.767M16 12.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5M9.75 16a6.25 6.25 0 1 1 12.5 0 6.25 6.25 0 0 1-12.5 0m-7 0c0-.69.56-1.25 1.25-1.25h3a1.25 1.25 0 1 1 0 2.5H4c-.69 0-1.25-.56-1.25-1.25m21 0c0-.69.56-1.25 1.25-1.25h3a1.25 1.25 0 1 1 0 2.5h-3c-.69 0-1.25-.56-1.25-1.25m-12.926 5.24a1.25 1.25 0 0 1 .058 1.767l-1.71 1.825a1.25 1.25 0 0 1-1.824-1.71l1.71-1.824a1.25 1.25 0 0 1 1.766-.058m10.321.048a1.25 1.25 0 0 1 1.767.057l1.71 1.825a1.25 1.25 0 0 1-1.825 1.71l-1.71-1.825a1.25 1.25 0 0 1 .058-1.767M16 23.75c.69 0 1.25.56 1.25 1.25v3a1.25 1.25 0 1 1-2.5 0v-3c0-.69.56-1.25 1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        bn = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(wn, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(xn, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(yn, {
              ...n,
              ref: r
            })]
          })
        }));
      bn.displayName = "Sun", bn.category = "Accessibility", bn.variant = "Outline", bn.keywords = "Day, Light, Lightness, Theme, Brightness", bn.MD = wn, bn.LG = xn, bn.XL = yn;
      const jn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: [(0, o.jsx)("path", {
              fill: e,
              d: "M7.75 5a.75.75 0 0 0-1.5 0v1.25H5a.75.75 0 0 0 0 1.5h1.25V9a.75.75 0 0 0 1.5 0V7.75H9a.75.75 0 0 0 0-1.5H7.75z"
            }), (0, o.jsx)("path", {
              fill: e,
              d: "M7 1.25a5.75 5.75 0 1 0 3.239 10.502l2.292 1.834a.75.75 0 0 0 .938-1.172l-2.098-1.678A5.75 5.75 0 0 0 7 1.25M2.75 7a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Rn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: [(0, o.jsx)("path", {
              fill: e,
              d: "M12 7a1 1 0 1 0-2 0v3H7a1 1 0 1 0 0 2h3v3a1 1 0 1 0 2 0v-3h3a1 1 0 1 0 0-2h-3z"
            }), (0, o.jsx)("path", {
              fill: e,
              d: "M11 2a9 9 0 1 0 5.618 16.032l2.675 2.675a1 1 0 0 0 1.414-1.414l-2.675-2.675A9 9 0 0 0 11 2m-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Mn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M15 5.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S20.385 5.25 15 5.25M2.75 15C2.75 8.235 8.235 2.75 15 2.75S27.25 8.235 27.25 15c0 2.933-1.03 5.624-2.749 7.733l3.383 3.383a1.25 1.25 0 0 1-1.768 1.768L22.733 24.5A12.2 12.2 0 0 1 15 27.25C8.235 27.25 2.75 21.765 2.75 15M15 7.75c.69 0 1.25.56 1.25 1.25v4.75H21a1.25 1.25 0 1 1 0 2.5h-4.75V21a1.25 1.25 0 1 1-2.5 0v-4.75H9a1.25 1.25 0 1 1 0-2.5h4.75V9c0-.69.56-1.25 1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Cn = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(jn, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(Rn, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(Mn, {
              ...n,
              ref: r
            })]
          })
        }));
      Cn.displayName = "ZoomIn", Cn.category = "Accessibility", Cn.variant = "Outline", Cn.keywords = "Magnifying glass, Zoom, View, See, More, Closer", Cn.MD = jn, Cn.LG = Rn, Cn.XL = Mn;
      const Ln = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M7 2.75a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5M1.25 7a5.75 5.75 0 1 1 10.12 3.736l2.099 1.678a.75.75 0 0 1-.937 1.172l-2.293-1.834A5.75 5.75 0 0 1 1.25 7m3 0A.75.75 0 0 1 5 6.25h4a.75.75 0 0 1 0 1.5H5A.75.75 0 0 1 4.25 7",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Sn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14m-9 7a9 9 0 1 1 16.032 5.618l2.675 2.675a1 1 0 0 1-1.414 1.414l-2.675-2.675A9 9 0 0 1 2 11m4 0a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        En = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M15 5.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S20.385 5.25 15 5.25M2.75 15C2.75 8.235 8.235 2.75 15 2.75S27.25 8.235 27.25 15c0 2.933-1.03 5.624-2.749 7.733l3.383 3.383a1.25 1.25 0 0 1-1.768 1.768L22.733 24.5A12.2 12.2 0 0 1 15 27.25C8.235 27.25 2.75 21.765 2.75 15m5 0c0-.69.56-1.25 1.25-1.25h12a1.25 1.25 0 1 1 0 2.5H9c-.69 0-1.25-.56-1.25-1.25",
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
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(Ln, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(Sn, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(En, {
              ...n,
              ref: r
            })]
          })
        }));
      Pn.displayName = "ZoomOut", Pn.category = "Accessibility", Pn.variant = "Outline", Pn.keywords = "Magnifying glass, Zoom, View, See, Less, Further", Pn.MD = Ln, Pn.LG = Sn, Pn.XL = En;
      const _n = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M7.75 2.274a5.476 5.476 0 1 0 0 10.952 5.476 5.476 0 0 0 0-10.952M1 7.75a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0m6.94-2.91a1.5 1.5 0 0 0-.996.175c-.299.17-.521.435-.633.744a.637.637 0 1 1-1.197-.434A2.7 2.7 0 0 1 6.312 3.91a2.8 2.8 0 0 1 1.838-.326 2.75 2.75 0 0 1 1.626.906c.418.483.65 1.096.649 1.732 0 1.026-.782 1.7-1.34 2.062a5.6 5.6 0 0 1-1.163.568l-.024.008-.007.003h-.003s-.001.001-.197-.605l.196.606a.637.637 0 0 1-.394-1.211l.013-.005.054-.019a4.338 4.338 0 0 0 .833-.415c.491-.317.758-.66.758-.992 0-.325-.117-.644-.337-.897a1.48 1.48 0 0 0-.873-.485m-.827 5.967c0-.352.285-.637.637-.637h.153a.637.637 0 0 1 0 1.273H7.75a.637.637 0 0 1-.637-.636",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Dn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M12 3.887a8.113 8.113 0 1 0 0 16.226 8.113 8.113 0 0 0 0-16.226M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m10.282-4.312a2.24 2.24 0 0 0-1.477.26 2.1 2.1 0 0 0-.937 1.103.943.943 0 0 1-1.774-.643A3.98 3.98 0 0 1 9.87 6.31a4.13 4.13 0 0 1 2.722-.484c.936.156 1.79.63 2.41 1.344.619.714.961 1.622.96 2.565 0 1.52-1.158 2.52-1.984 3.054a8.3 8.3 0 0 1-1.723.842l-.035.012-.011.004-.004.001h-.001s-.002 0-.292-.897l.29.898a.943.943 0 0 1-.582-1.795l.019-.006a5 5 0 0 0 .385-.151c.259-.112.597-.277.929-.492.727-.47 1.123-.979 1.123-1.47v-.002c0-.482-.175-.952-.5-1.328a2.2 2.2 0 0 0-1.294-.717m3.68 2.047v.001l-.943-.001zm-4.905 6.793c0-.52.422-.943.943-.943h.226a.943.943 0 0 1 0 1.887H12a.943.943 0 0 1-.943-.944",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M16 5.25C10.063 5.25 5.25 10.063 5.25 16S10.063 26.75 16 26.75 26.75 21.937 26.75 16 21.937 5.25 16 5.25M2.75 16C2.75 8.682 8.682 2.75 16 2.75S29.25 8.682 29.25 16 23.318 29.25 16 29.25 2.75 23.318 2.75 16m13.624-5.714a2.97 2.97 0 0 0-1.957.346 2.78 2.78 0 0 0-1.242 1.46 1.25 1.25 0 1 1-2.35-.852 5.28 5.28 0 0 1 2.353-2.78 5.47 5.47 0 0 1 3.607-.64 5.4 5.4 0 0 1 3.192 1.78 5.18 5.18 0 0 1 1.273 3.399c0 2.013-1.534 3.338-2.63 4.047a11 11 0 0 1-2.283 1.115l-.046.016-.014.005-.005.002h-.002s-.002 0-.387-1.189l.385 1.19a1.25 1.25 0 0 1-.772-2.378h.001l.025-.009.105-.037a8.52 8.52 0 0 0 1.636-.814c.963-.624 1.487-1.297 1.487-1.949v-.002a2.68 2.68 0 0 0-.662-1.759 2.9 2.9 0 0 0-1.714-.951m4.876 2.713V13L20 12.998zM14.75 22c0-.69.56-1.25 1.25-1.25h.3a1.25 1.25 0 1 1 0 2.5H16c-.69 0-1.25-.56-1.25-1.25",
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
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(_n, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(Dn, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(An, {
              ...n,
              ref: r
            })]
          })
        }));
      Tn.displayName = "HelpCircle", Tn.category = "Accessibility", Tn.variant = "Outline", Tn.keywords = "Help, Question mark, Support, Assistance, Doubt, FAQ, Tooltip", Tn.MD = _n, Tn.LG = Dn, Tn.XL = An;
      const In = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M8.001 2a6.001 6.001 0 1 0 0 12.003A6.001 6.001 0 0 0 8.001 2M8 3.5a4.501 4.501 0 0 0 0 9.003z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Nn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M12.001 3a9.001 9.001 0 1 0 0 18.002 9.001 9.001 0 0 0 0-18.002M5 12.001A7 7 0 0 1 12.001 5v14.002a7 7 0 0 1-7.001-7",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M16.001 4C9.373 4 4 9.373 4 16.001s5.373 12.002 12.001 12.002S28.003 22.629 28.003 16 22.629 4 16 4M6.5 16.001A9.5 9.5 0 0 1 16.001 6.5v19.003A9.5 9.5 0 0 1 6.5 16",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        kn = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(In, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(Nn, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(On, {
              ...n,
              ref: r
            })]
          })
        }));
      kn.displayName = "PartialCircle", kn.category = "Accessibility", kn.variant = "Outline", kn.keywords = "Partial, Half, Middle, Split", kn.MD = In, kn.LG = Nn, kn.XL = On;
      const Hn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M2.803 7.25h2.483a11.2 11.2 0 0 1 1.217-4.283 5.26 5.26 0 0 0-3.7 4.283M8 3.355A9.6 9.6 0 0 0 6.792 7.25h2.416A9.6 9.6 0 0 0 8 3.355M9.208 8.75A9.6 9.6 0 0 1 8 12.645 9.6 9.6 0 0 1 6.792 8.75zm-3.922 0H2.803a5.26 5.26 0 0 0 3.7 4.283A11.2 11.2 0 0 1 5.286 8.75m4.211 4.283a11.2 11.2 0 0 0 1.217-4.283h2.483a5.26 5.26 0 0 1-3.7 4.283m3.7-5.783h-2.483a11.2 11.2 0 0 0-1.217-4.283 5.26 5.26 0 0 1 3.7 4.283M1.25 8a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Bn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M4.062 11h3.983c.177-2.404.849-4.722 1.957-6.748A8.01 8.01 0 0 0 4.062 11M12 4.785c-1.084 1.817-1.761 3.96-1.95 6.215h3.9c-.189-2.256-.866-4.398-1.95-6.215M13.95 13c-.189 2.255-.866 4.398-1.95 6.215-1.084-1.817-1.761-3.96-1.95-6.215zm-5.905 0H4.062a8.01 8.01 0 0 0 5.94 6.748C8.894 17.722 8.222 15.404 8.045 13m5.953 6.748c1.108-2.026 1.78-4.344 1.957-6.748h3.983a8.01 8.01 0 0 1-5.94 6.748M19.938 11h-3.983c-.177-2.404-.849-4.722-1.957-6.748A8.01 8.01 0 0 1 19.938 11M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M5.322 14.75h5.482c.231-3.289 1.159-6.457 2.697-9.208a10.76 10.76 0 0 0-8.18 9.208M16 6.218c-1.508 2.484-2.444 5.43-2.69 8.532h5.38c-.245-3.102-1.182-6.048-2.69-8.532m2.69 11.032c-.245 3.102-1.182 6.048-2.69 8.532-1.508-2.484-2.444-5.43-2.69-8.532zm-7.886 0H5.322a10.76 10.76 0 0 0 8.179 9.208c-1.538-2.75-2.466-5.92-2.697-9.208m7.695 9.208c1.539-2.75 2.466-5.92 2.697-9.208h5.482a10.76 10.76 0 0 1-8.179 9.208m8.18-11.708h-5.483c-.231-3.289-1.158-6.457-2.697-9.208a10.76 10.76 0 0 1 8.18 9.208M2.75 16C2.75 8.682 8.682 2.75 16 2.75S29.25 8.682 29.25 16 23.318 29.25 16 29.25 2.75 23.318 2.75 16",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Vn = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(Hn, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(Bn, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(zn, {
              ...n,
              ref: r
            })]
          })
        }));
      Vn.displayName = "Globe", Vn.category = "Accessibility", Vn.variant = "Outline", Vn.keywords = "Global, Network, Earth, World", Vn.MD = Hn, Vn.LG = Bn, Vn.XL = zn;
      const Fn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M8 2.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M4.75 4.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0M3.185 9.268A3.17 3.17 0 0 1 5.5 8.25h5c.878 0 1.71.373 2.315 1.018a3.5 3.5 0 0 1 .935 2.399V13a.75.75 0 0 1-1.5 0v-1.333a2 2 0 0 0-.53-1.373 1.67 1.67 0 0 0-1.22-.544h-5c-.448 0-.888.19-1.22.544a2 2 0 0 0-.53 1.373V13a.75.75 0 0 1-1.5 0v-1.333c0-.891.331-1.755.935-2.399",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Gn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M12 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6M7 7a5 5 0 1 1 10 0A5 5 0 0 1 7 7m-2.536 7.464A5 5 0 0 1 8 13h8a5 5 0 0 1 5 5v2a1 1 0 1 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 1 1-2 0v-2a5 5 0 0 1 1.464-3.536",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M16 5.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5M9.75 9a6.25 6.25 0 1 1 12.5 0 6.25 6.25 0 0 1-12.5 0M5.74 19.665a6.84 6.84 0 0 1 4.76-1.915h11c1.778 0 3.49.684 4.76 1.915a6.5 6.5 0 0 1 1.99 4.668V27a1.25 1.25 0 1 1-2.5 0v-2.667c0-1.07-.438-2.105-1.231-2.873a4.34 4.34 0 0 0-3.019-1.21h-11c-1.14 0-2.225.44-3.019 1.21a4 4 0 0 0-1.231 2.873V27a1.25 1.25 0 1 1-2.5 0v-2.667c0-1.758.72-3.437 1.99-4.668",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Un = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(Fn, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(Gn, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(Xn, {
              ...n,
              ref: r
            })]
          })
        }));
      Un.displayName = "Person", Un.category = "User Interface", Un.variant = "Outline", Un.keywords = "Profile, Avatar, Account, User, People, Human", Un.MD = Fn, Un.LG = Gn, Un.XL = Xn;
      const qn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M9.335 5.33a.75.75 0 0 1 .336 1.005l-2 4a.75.75 0 0 1-1.342-.67l2-4a.75.75 0 0 1 1.006-.336m-4.805.14a.75.75 0 0 1 0 1.06L3.06 8l1.47 1.47a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 0m6.94 0a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06L12.94 8l-1.47-1.47a.75.75 0 0 1 0-1.06",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M13.243 7.03a1 1 0 0 1 .727 1.213l-2 8a1 1 0 1 1-1.94-.485l2-8a1 1 0 0 1 1.213-.728m-5.536.263a1 1 0 0 1 0 1.414L4.414 12l3.293 3.293a1 1 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0m8.586 0a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L19.586 12l-3.293-3.293a1 1 0 0 1 0-1.414",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Kn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M17.245 9.774a1.25 1.25 0 0 1 .98 1.471l-2 10a1.25 1.25 0 1 1-2.45-.49l2-10a1.25 1.25 0 0 1 1.47-.98m-6.285.426a1.25 1.25 0 0 1-.16 1.76L5.953 16l4.847 4.04a1.25 1.25 0 1 1-1.6 1.92l-6-5a1.25 1.25 0 0 1 0-1.92l6-5a1.25 1.25 0 0 1 1.76.16m10.08 0a1.25 1.25 0 0 1 1.76-.16l6 5a1.25 1.25 0 0 1 0 1.92l-6 5a1.25 1.25 0 0 1-1.6-1.92L26.047 16 21.2 11.96a1.25 1.25 0 0 1-.16-1.76",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        $n = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(qn, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(Wn, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(Kn, {
              ...n,
              ref: r
            })]
          })
        }));
      $n.displayName = "Code", $n.category = "User Interface", $n.variant = "Outline", $n.keywords = "Code, Computer, Dev, Engineering, Web, Develop, HTML, Tag", $n.MD = qn, $n.LG = Wn, $n.XL = Kn;
      const Yn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "m11.341 4.027-.293 1.296-.607.144a6.7 6.7 0 0 0-1.958.812l-.53.327-1.125-.71a8 8 0 0 0-.932.932l.71 1.124-.327.531a6.7 6.7 0 0 0-.812 1.958l-.144.607-1.296.293a8 8 0 0 0 0 1.318l1.296.293.144.607a6.7 6.7 0 0 0 .812 1.958l.327.53-.71 1.125q.429.504.932.932l1.124-.71.531.327a6.7 6.7 0 0 0 1.958.812l.607.144.293 1.296a8 8 0 0 0 1.318 0l.293-1.296.607-.144a6.7 6.7 0 0 0 1.958-.812l.53-.327 1.125.71a8 8 0 0 0 .932-.932l-.71-1.124.327-.531a6.7 6.7 0 0 0 .812-1.958l.144-.607 1.296-.293a8 8 0 0 0 0-1.318l-1.296-.293-.144-.607a6.7 6.7 0 0 0-.812-1.958l-.327-.53.71-1.125a8 8 0 0 0-.932-.932l-1.124.71-.531-.327a6.7 6.7 0 0 0-1.958-.812l-.607-.144-.293-1.296a8 8 0 0 0-1.318 0m-.984-1.893a10 10 0 0 1 3.286 0l.664.11.326 1.447q.72.229 1.38.572l1.253-.792.548.392a10 10 0 0 1 2.323 2.323l.392.548-.792 1.253q.343.66.572 1.38l1.447.326.11.664a10 10 0 0 1 0 3.286l-.11.664-1.447.326q-.229.72-.572 1.38l.792 1.253-.392.548a10 10 0 0 1-2.323 2.323l-.547.392-1.254-.792q-.66.343-1.38.572l-.326 1.447-.664.11a10 10 0 0 1-3.286 0l-.664-.11-.326-1.447a8.7 8.7 0 0 1-1.38-.572l-1.253.792-.548-.392a10 10 0 0 1-2.323-2.323l-.392-.547.792-1.254q-.343-.66-.572-1.38l-1.447-.326-.11-.664a10 10 0 0 1 0-3.286l.11-.664 1.447-.326q.229-.72.572-1.38L3.47 6.734l.392-.548a10 10 0 0 1 2.323-2.323l.548-.392 1.253.792q.66-.343 1.38-.572l.326-1.447zM12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Zn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "m7.628 2.763-.193.855-.455.108c-.459.109-.89.29-1.28.53l-.399.246-.741-.468a5 5 0 0 0-.526.526l.468.741-.245.398c-.24.391-.422.822-.531 1.281l-.108.455-.855.193a5 5 0 0 0 0 .744l.855.193.108.455c.109.459.29.89.53 1.28l.246.399-.468.741q.244.282.526.526l.741-.468.398.245c.391.24.822.422 1.281.531l.455.108.193.855a5 5 0 0 0 .744 0l.193-.855.455-.108c.459-.109.89-.29 1.28-.53l.399-.246.741.468q.282-.244.526-.526l-.468-.741.245-.398c.24-.391.422-.822.531-1.281l.108-.455.855-.193a5 5 0 0 0 0-.744l-.855-.193-.108-.455a4.4 4.4 0 0 0-.53-1.28l-.246-.399.468-.741a5 5 0 0 0-.526-.526l-.741.468-.398-.245a4.4 4.4 0 0 0-1.281-.531l-.455-.108-.193-.855a5 5 0 0 0-.744 0M6.891 1.34a6.8 6.8 0 0 1 2.218 0l.498.082.22.973q.439.143.844.35l.843-.532.41.293a6.8 6.8 0 0 1 1.569 1.569l.293.41-.532.843q.207.405.35.845l.973.22.082.497a6.8 6.8 0 0 1 0 2.218l-.082.498-.973.22a6 6 0 0 1-.35.844l.532.843-.293.41a6.8 6.8 0 0 1-1.569 1.569l-.41.293-.843-.532q-.405.207-.845.35l-.22.973-.497.082a6.8 6.8 0 0 1-2.218 0l-.498-.082-.22-.973a6 6 0 0 1-.844-.35l-.843.532-.41-.293a6.8 6.8 0 0 1-1.569-1.569l-.293-.41.532-.843a6 6 0 0 1-.35-.845l-.973-.22-.082-.497a6.8 6.8 0 0 1 0-2.218l.082-.498.973-.22q.143-.438.35-.844l-.532-.843.293-.41a6.8 6.8 0 0 1 1.569-1.569l.41-.293.843.532q.405-.207.845-.35l.22-.973zM8 6.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M5.25 8a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "m15.054 5.291-.393 1.737-.758.18a9 9 0 0 0-2.636 1.093l-.663.41-1.507-.952q-.727.61-1.338 1.338l.951 1.507-.409.664a9 9 0 0 0-1.092 2.635l-.18.758-1.738.393a11 11 0 0 0 0 1.892l1.737.393.18.758a9 9 0 0 0 1.093 2.636l.41.663-.952 1.507q.61.727 1.338 1.338l1.507-.951.664.409a9 9 0 0 0 2.635 1.092l.758.18.393 1.738a11 11 0 0 0 1.892 0l.393-1.738.758-.18a9 9 0 0 0 2.636-1.092l.663-.41 1.507.952a11 11 0 0 0 1.338-1.338l-.951-1.507.409-.663a9 9 0 0 0 1.092-2.636l.18-.758 1.738-.393a11 11 0 0 0 0-1.892l-1.738-.393-.18-.758a9 9 0 0 0-1.092-2.636l-.41-.663.952-1.507a11 11 0 0 0-1.338-1.338l-1.507.951-.663-.409a9 9 0 0 0-2.636-1.092l-.758-.18-.393-1.738a11 11 0 0 0-1.892 0m-1.23-2.363a13.3 13.3 0 0 1 4.353 0l.83.137.433 1.921q1 .314 1.914.794l1.665-1.051.684.489a13.3 13.3 0 0 1 3.079 3.08l.49.683-1.052 1.665q.481.912.794 1.913l1.92.434.138.83a13.3 13.3 0 0 1 0 4.354l-.137.83-1.921.433a11.5 11.5 0 0 1-.794 1.914l1.051 1.665-.489.684a13.3 13.3 0 0 1-3.08 3.079l-.683.49-1.665-1.052a11.5 11.5 0 0 1-1.913.794l-.434 1.92-.83.138a13.3 13.3 0 0 1-4.354 0l-.83-.137-.434-1.921a11.5 11.5 0 0 1-1.913-.794L8.98 27.271l-.684-.489a13.3 13.3 0 0 1-3.079-3.08l-.49-.683 1.052-1.665a11.5 11.5 0 0 1-.794-1.913l-1.92-.434-.138-.83a13.3 13.3 0 0 1 0-4.354l.137-.83 1.921-.434q.314-1 .794-1.913L4.729 8.98l.489-.684a13.3 13.3 0 0 1 3.08-3.079l.683-.49 1.665 1.052a11.5 11.5 0 0 1 1.913-.794l.434-1.92zM16 13.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M10.75 16a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Jn = (0, m.forwardRef)((({
          size: e = "LG",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["LG" === e && (0, o.jsx)(Yn, {
              ...n,
              ref: r
            }), "MD" === e && (0, o.jsx)(Zn, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(Qn, {
              ...n,
              ref: r
            })]
          })
        }));
      Jn.displayName = "Gear", Jn.category = "User Interface", Jn.variant = "Outline", Jn.keywords = "Settings, Preferences, Options, Custom, Customize", Jn.LG = Yn, Jn.MD = Zn, Jn.XL = Qn;
      const eo = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M2.25 4A.75.75 0 0 1 3 3.25h10a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 4m0 4A.75.75 0 0 1 3 7.25h10a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 8m0 4a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        to = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ro = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M3.75 8c0-.69.56-1.25 1.25-1.25h22a1.25 1.25 0 1 1 0 2.5H5c-.69 0-1.25-.56-1.25-1.25m0 8c0-.69.56-1.25 1.25-1.25h22a1.25 1.25 0 1 1 0 2.5H5c-.69 0-1.25-.56-1.25-1.25m0 8c0-.69.56-1.25 1.25-1.25h22a1.25 1.25 0 1 1 0 2.5H5c-.69 0-1.25-.56-1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        no = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(eo, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(to, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(ro, {
              ...n,
              ref: r
            })]
          })
        }));
      no.displayName = "Menu", no.category = "User Interface", no.variant = "Outline", no.keywords = "Hamburger, Navigation, Side nav, Triple bar, Item", no.MD = eo, no.LG = to, no.XL = ro;
      const oo = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M2.3 3a.7.7 0 0 1 .7-.7h4a.7.7 0 0 1 .7.7v4a.7.7 0 0 1-.7.7H3a.7.7 0 0 1-.7-.7zm1.4.7v2.6h2.6V3.7zM8.3 3a.7.7 0 0 1 .7-.7h4a.7.7 0 0 1 .7.7v4a.7.7 0 0 1-.7.7H9a.7.7 0 0 1-.7-.7zm1.4.7v2.6h2.6V3.7zM2.3 9a.7.7 0 0 1 .7-.7h4a.7.7 0 0 1 .7.7v4a.7.7 0 0 1-.7.7H3a.7.7 0 0 1-.7-.7zm1.4.7v2.6h2.6V9.7zM8.3 9a.7.7 0 0 1 .7-.7h4a.7.7 0 0 1 .7.7v4a.7.7 0 0 1-.7.7H9a.7.7 0 0 1-.7-.7zm1.4.7v2.6h2.6V9.7z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ao = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M3 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm2 1v4h4V5zm8-1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1zm2 1v4h4V5zM3 14a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm2 1v4h4v-4zm8-1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1zm2 1v4h4v-4z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        lo = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M3.75 5.5c0-.966.784-1.75 1.75-1.75h7c.966 0 1.75.784 1.75 1.75v7a1.75 1.75 0 0 1-1.75 1.75h-7a1.75 1.75 0 0 1-1.75-1.75zm2.5.75v5.5h5.5v-5.5zm11.5-.75c0-.966.784-1.75 1.75-1.75h7c.966 0 1.75.784 1.75 1.75v7a1.75 1.75 0 0 1-1.75 1.75h-7a1.75 1.75 0 0 1-1.75-1.75zm2.5.75v5.5h5.5v-5.5zM3.75 19.5c0-.966.784-1.75 1.75-1.75h7c.966 0 1.75.784 1.75 1.75v7a1.75 1.75 0 0 1-1.75 1.75h-7a1.75 1.75 0 0 1-1.75-1.75zm2.5.75v5.5h5.5v-5.5zm11.5-.75c0-.966.784-1.75 1.75-1.75h7c.966 0 1.75.784 1.75 1.75v7a1.75 1.75 0 0 1-1.75 1.75h-7a1.75 1.75 0 0 1-1.75-1.75zm2.5.75v5.5h5.5v-5.5z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        io = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(oo, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(ao, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(lo, {
              ...n,
              ref: r
            })]
          })
        }));
      io.displayName = "Grid", io.category = "User Interface", io.variant = "Outline", io.keywords = "Squares, Hub, Menu, Blocks, Options, Items, Gallery", io.MD = oo, io.LG = ao, io.XL = lo;
      const so = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M2.25 4A.75.75 0 0 1 3 3.25h.1a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 4m3 0A.75.75 0 0 1 6 3.25h7a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 4m-3 4A.75.75 0 0 1 3 7.25h.1a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 8m3 0A.75.75 0 0 1 6 7.25h7a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 8m-3 4a.75.75 0 0 1 .75-.75h.1a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m3 0a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        co = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M3 6a1 1 0 0 1 1-1h.2a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1m4 0a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m-4 6a1 1 0 0 1 1-1h.2a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m4 0a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m-4 6a1 1 0 0 1 1-1h.2a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m4 0a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        uo = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M3.75 8c0-.69.56-1.25 1.25-1.25h.2a1.25 1.25 0 1 1 0 2.5H5c-.69 0-1.25-.56-1.25-1.25m5 0c0-.69.56-1.25 1.25-1.25h17a1.25 1.25 0 1 1 0 2.5H10c-.69 0-1.25-.56-1.25-1.25m-5 8c0-.69.56-1.25 1.25-1.25h.2a1.25 1.25 0 1 1 0 2.5H5c-.69 0-1.25-.56-1.25-1.25m5 0c0-.69.56-1.25 1.25-1.25h17a1.25 1.25 0 1 1 0 2.5H10c-.69 0-1.25-.56-1.25-1.25m-5 8c0-.69.56-1.25 1.25-1.25h.2a1.25 1.25 0 1 1 0 2.5H5c-.69 0-1.25-.56-1.25-1.25m5 0c0-.69.56-1.25 1.25-1.25h17a1.25 1.25 0 1 1 0 2.5H10c-.69 0-1.25-.56-1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        fo = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(so, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(co, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(uo, {
              ...n,
              ref: r
            })]
          })
        }));
      fo.displayName = "List", fo.category = "User Interface", fo.variant = "Outline", fo.keywords = "Index, Table of Contents, Menu, Side nav, Navigation, Bullet, To do", fo.MD = so, fo.LG = co, fo.XL = uo;
      const ho = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M7 2.75a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5M1.25 7a5.75 5.75 0 1 1 10.12 3.736l2.099 1.678a.75.75 0 0 1-.937 1.172l-2.293-1.834A5.75 5.75 0 0 1 1.25 7",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        vo = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14m-9 7a9 9 0 1 1 16.032 5.618l2.675 2.675a1 1 0 0 1-1.414 1.414l-2.675-2.675A9 9 0 0 1 2 11",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        po = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M15 5.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S20.385 5.25 15 5.25M2.75 15C2.75 8.235 8.235 2.75 15 2.75S27.25 8.235 27.25 15c0 2.933-1.03 5.624-2.749 7.733l3.383 3.383a1.25 1.25 0 0 1-1.768 1.768L22.733 24.5A12.2 12.2 0 0 1 15 27.25C8.235 27.25 2.75 21.765 2.75 15",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        go = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(ho, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(vo, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(po, {
              ...n,
              ref: r
            })]
          })
        }));
      go.displayName = "Search", go.category = "User Interface", go.variant = "Outline", go.keywords = "Magnifying Glass, Look, Find, View", go.MD = ho, go.LG = vo, go.XL = po;
      const mo = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M8 3.75c-2.28 0-4.095.906-5.47 2.28a.75.75 0 0 1-1.06-1.06C3.095 3.344 5.28 2.25 8 2.25s4.905 1.094 6.53 2.72a.75.75 0 0 1-1.06 1.06C12.095 4.656 10.28 3.75 8 3.75m0 3.5a6.47 6.47 0 0 0-4.48 1.791.75.75 0 0 1-1.04-1.082A7.97 7.97 0 0 1 8 5.75a7.97 7.97 0 0 1 5.52 2.209.75.75 0 1 1-1.04 1.082A6.47 6.47 0 0 0 8 7.25m0 3.5c-.91 0-1.795.379-2.46 1.07a.75.75 0 0 1-1.08-1.04A4.9 4.9 0 0 1 8 9.25c1.333 0 2.603.555 3.54 1.53a.75.75 0 0 1-1.08 1.04A3.41 3.41 0 0 0 8 10.75m-.75 2.75a.75.75 0 0 1 .75-.75h.1a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        wo = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M12 6C8.93 6 5.966 7.152 3.673 9.24A1 1 0 0 1 2.327 7.76 14.36 14.36 0 0 1 12 4.001c3.572 0 7.016 1.34 9.673 3.76a1 1 0 0 1-1.346 1.479A12.36 12.36 0 0 0 12 6m0 5c-2.395 0-4.673.822-6.35 2.26a1 1 0 1 1-1.3-1.52C6.411 9.974 9.16 9 12 9s5.588.973 7.65 2.74a1 1 0 1 1-1.3 1.52C16.672 11.822 14.394 11 12 11m0 5c-1.26 0-2.455.454-3.331 1.243a1 1 0 0 1-1.338-1.486C8.591 14.623 10.268 14 12 14s3.41.623 4.669 1.757a1 1 0 0 1-1.338 1.486C14.455 16.454 13.26 16 12 16m-1 4a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        xo = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M16 7.75c-3.771 0-8.414 1.432-11.116 4.134a1.25 1.25 0 0 1-1.768-1.768C6.414 6.818 11.771 5.25 16 5.25s9.586 1.568 12.884 4.866a1.25 1.25 0 0 1-1.768 1.768C24.414 9.182 19.771 7.75 16 7.75m-4.83 7.296c-1.24.486-2.26 1.16-3.463 1.985a1.25 1.25 0 0 1-1.414-2.062c1.2-.823 2.43-1.65 3.964-2.25 1.552-.61 3.36-.969 5.743-.969s4.19.36 5.743.968c1.534.602 2.764 1.428 3.964 2.251a1.25 1.25 0 0 1-1.414 2.062c-1.203-.825-2.223-1.5-3.463-1.985-1.222-.48-2.714-.796-4.83-.796s-3.608.316-4.83.796M16 20.25c-1.669 0-3.026.587-4.134 1.652a1.25 1.25 0 0 1-1.732-1.804c1.562-1.5 3.535-2.348 5.866-2.348 1.104 0 2.14.138 3.136.52 1.001.386 1.895.993 2.748 1.846a1.25 1.25 0 0 1-1.768 1.768c-.647-.647-1.253-1.04-1.877-1.28-.63-.242-1.343-.354-2.239-.354M14.75 26c0-.69.56-1.25 1.25-1.25h.1a1.25 1.25 0 0 1 0 2.5H16c-.69 0-1.25-.56-1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        yo = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(mo, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(wo, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(xo, {
              ...n,
              ref: r
            })]
          })
        }));
      yo.displayName = "WifiOn", yo.category = "User Interface", yo.variant = "Outline", yo.keywords = "Connection, Internet, Wireless, Technology, Network, Signal", yo.MD = mo, yo.LG = wo, yo.XL = xo;
      const bo = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "m2.1 3.2 10.607 10.607 1.06-1.061-5.49-5.49a6.47 6.47 0 0 1 4.204 1.785.75.75 0 1 0 1.038-1.082 7.97 7.97 0 0 0-6.665-2.127L5.26 4.238A7.7 7.7 0 0 1 8 3.75c2.28 0 4.095.906 5.47 2.28a.75.75 0 1 0 1.06-1.06C12.905 3.344 10.72 2.25 8 2.25c-1.447 0-2.743.31-3.884.845l-.955-.956zM3.327 5.327 2.26 4.26a10 10 0 0 0-.79.71A.75.75 0 0 0 2.53 6.03q.377-.376.797-.703M5.677 7.677 4.536 6.536A7.9 7.9 0 0 0 2.48 7.959a.75.75 0 0 0 1.038 1.082 6.4 6.4 0 0 1 2.158-1.364M4.46 10.78A4.95 4.95 0 0 1 7.3 9.301l1.565 1.565A3.3 3.3 0 0 0 8 10.75c-.91 0-1.795.379-2.46 1.07a.75.75 0 0 1-1.08-1.04M7.25 13.5a.75.75 0 0 1 .75-.75h.1a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75"
            })
          })
        }))),
        jo = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "m3 4.8 16.264 16.263 1.414-1.414L12.028 11c2.385.007 4.652.828 6.321 2.26a1 1 0 1 0 1.302-1.52C17.588 9.974 14.84 9 12 9q-.929 0-1.835.136L7.778 6.75A12.3 12.3 0 0 1 12 6c3.07 0 6.034 1.152 8.327 3.24a1 1 0 0 0 1.346-1.479A14.36 14.36 0 0 0 12 4.001c-1.998 0-3.956.419-5.759 1.212L4.414 3.386zM13.122 16.122l-2.06-2.06c-1.391.182-2.7.767-3.731 1.695a1 1 0 0 0 1.338 1.486C9.545 16.454 10.74 16 12 16c.382 0 .759.042 1.122.122M7.044 10.044l1.538 1.538a9.2 9.2 0 0 0-2.931 1.677 1 1 0 1 1-1.302-1.518c.806-.69 1.716-1.26 2.695-1.697M3.674 6.674 5.11 8.11A12.5 12.5 0 0 0 3.673 9.24 1 1 0 1 1 2.327 7.76q.645-.587 1.347-1.087M11 20a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1"
            })
          })
        }))),
        Ro = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "m4 6 21.92 21.92 1.768-1.768-11.901-11.9q.105-.003.213-.002c2.116 0 3.608.316 4.83.796 1.24.486 2.26 1.16 3.463 1.985a1.25 1.25 0 0 0 1.414-2.062c-1.2-.823-2.43-1.65-3.964-2.25-1.552-.61-3.36-.969-5.743-.969-.934 0-1.78.055-2.556.159l-3.181-3.182c1.905-.645 3.922-.977 5.737-.977 3.771 0 8.414 1.432 11.116 4.134a1.25 1.25 0 0 0 1.768-1.768C25.586 6.818 20.229 5.25 16 5.25c-2.392 0-5.144.502-7.68 1.534L5.767 4.232zM8.861 13.361l1.869 1.869c-1.049.467-1.965 1.075-3.023 1.8a1.25 1.25 0 0 1-1.414-2.06c.814-.56 1.642-1.119 2.568-1.609M6.24 10.74 4.454 8.954q-.713.54-1.337 1.163a1.25 1.25 0 0 0 1.768 1.768c.41-.41.866-.792 1.356-1.143M13.583 18.083l2.171 2.171c-1.557.055-2.835.636-3.888 1.648a1.25 1.25 0 0 1-1.732-1.804c.99-.95 2.143-1.638 3.449-2.015M14.75 26c0-.69.56-1.25 1.25-1.25h.1a1.25 1.25 0 0 1 0 2.5H16c-.69 0-1.25-.56-1.25-1.25"
            })
          })
        }))),
        Mo = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(bo, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(jo, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(Ro, {
              ...n,
              ref: r
            })]
          })
        }));
      Mo.displayName = "WifiOff", Mo.category = "User Interface", Mo.variant = "Outline", Mo.keywords = "Connection, Internet, Wireless, Technology, Network, Signal, No, Off", Mo.MD = bo, Mo.LG = jo, Mo.XL = Ro;
      const Co = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: [(0, o.jsx)("path", {
              fill: e,
              d: "M4.25 6a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M7 4.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, o.jsx)("path", {
              fill: e,
              d: "M8.819 9.25H5A2.75 2.75 0 0 0 2.25 12v1a.75.75 0 0 0 1.5 0v-1A1.25 1.25 0 0 1 5 10.75h3.08c.123-.562.381-1.074.739-1.5"
            }), (0, o.jsx)("path", {
              fill: e,
              d: "M14 11.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-2.5-1.6a.35.35 0 0 1 .35.35v.9h.9a.35.35 0 1 1 0 .7h-.9v.9a.35.35 0 1 1-.7 0v-.9h-.9a.35.35 0 1 1 0-.7h.9v-.9a.35.35 0 0 1 .35-.35",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: [(0, o.jsx)("path", {
              fill: e,
              d: "M6.5 9a4 4 0 1 1 8 0 4 4 0 0 1-8 0m4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, o.jsx)("path", {
              fill: e,
              d: "M12.691 14H7.25a4.2 4.2 0 0 0-3.014 1.278A4.38 4.38 0 0 0 3 18.333V20a1 1 0 1 0 2 0v-1.667c0-.627.243-1.223.668-1.659A2.2 2.2 0 0 1 7.25 16h4.595c.141-.732.435-1.41.846-2"
            }), (0, o.jsx)("path", {
              fill: e,
              d: "M21 17a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-4-2.65a.65.65 0 0 1 .65.65v1.35H19a.65.65 0 1 1 0 1.3h-1.35V19a.65.65 0 1 1-1.3 0v-1.35H15a.65.65 0 1 1 0-1.3h1.35V15a.65.65 0 0 1 .65-.65",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        So = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: [(0, o.jsx)("path", {
              fill: e,
              d: "M8.75 12a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0M14 9.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, o.jsx)("path", {
              fill: e,
              d: "M18.082 18.75H9.5a5.67 5.67 0 0 0-4.082 1.75 6 6 0 0 0-1.668 4.167V27a1.25 1.25 0 1 0 2.5 0v-2.333c0-.92.353-1.795.968-2.433A3.17 3.17 0 0 1 9.5 21.25h7.238a6.5 6.5 0 0 1 1.344-2.5"
            }), (0, o.jsx)("path", {
              fill: e,
              d: "M28 23a5 5 0 1 1-10 0 5 5 0 0 1 10 0m-5-3.25a.75.75 0 0 1 .75.75v1.75h1.75a.75.75 0 0 1 0 1.5h-1.75v1.75a.75.75 0 0 1-1.5 0v-1.75H20.5a.75.75 0 0 1 0-1.5h1.75V20.5a.75.75 0 0 1 .75-.75",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Eo = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(Co, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(Lo, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(So, {
              ...n,
              ref: r
            })]
          })
        }));
      Eo.displayName = "PersonPlus", Eo.category = "User Interface", Eo.variant = "Outline", Eo.keywords = "User, Add, Contact, Friend, Follow, People, Person, Profile", Eo.MD = Co, Eo.LG = Lo, Eo.XL = So;
      const Po = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: [(0, o.jsx)("path", {
              fill: e,
              d: "M4.25 6a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M7 4.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, o.jsx)("path", {
              fill: e,
              d: "M8.819 9.25H5A2.75 2.75 0 0 0 2.25 12v1a.75.75 0 0 0 1.5 0v-1A1.25 1.25 0 0 1 5 10.75h3.08c.123-.562.381-1.074.739-1.5"
            }), (0, o.jsx)("path", {
              fill: e,
              d: "M14 11.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-4.1 0a.35.35 0 0 1 .35-.35h2.5a.35.35 0 1 1 0 .7h-2.5a.35.35 0 0 1-.35-.35",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        _o = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: [(0, o.jsx)("path", {
              fill: e,
              d: "M6.5 9a4 4 0 1 1 8 0 4 4 0 0 1-8 0m4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, o.jsx)("path", {
              fill: e,
              d: "M12.691 14H7.25a4.2 4.2 0 0 0-3.014 1.278A4.38 4.38 0 0 0 3 18.333V20a1 1 0 1 0 2 0v-1.667c0-.627.243-1.223.668-1.659A2.2 2.2 0 0 1 7.25 16h4.595c.141-.732.435-1.41.846-2"
            }), (0, o.jsx)("path", {
              fill: e,
              d: "M21 17a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-6.65 0a.65.65 0 0 1 .65-.65h4a.65.65 0 1 1 0 1.3h-4a.65.65 0 0 1-.65-.65",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Do = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: [(0, o.jsx)("path", {
              fill: e,
              d: "M8.75 12a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0M14 9.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, o.jsx)("path", {
              fill: e,
              d: "M18.082 18.75H9.5a5.67 5.67 0 0 0-4.082 1.75 6 6 0 0 0-1.668 4.167V27a1.25 1.25 0 1 0 2.5 0v-2.333c0-.92.353-1.795.968-2.433A3.17 3.17 0 0 1 9.5 21.25h7.238a6.5 6.5 0 0 1 1.344-2.5"
            }), (0, o.jsx)("path", {
              fill: e,
              d: "M28 23a5 5 0 1 1-10 0 5 5 0 0 1 10 0m-8.25 0a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Ao = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(Po, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(_o, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(Do, {
              ...n,
              ref: r
            })]
          })
        }));
      Ao.displayName = "PersonMinus", Ao.category = "User Interface", Ao.variant = "Outline", Ao.keywords = "Person, Profile, Remove, User, Delete, People, Unfriend, Friend, Unfollow", Ao.MD = Po, Ao.LG = _o, Ao.XL = Do;
      const To = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: [(0, o.jsx)("path", {
              fill: e,
              d: "M8.75 8a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"
            }), (0, o.jsx)("path", {
              fill: e,
              d: "M4.3 3.757a5 5 0 0 0-.031.256A2 2 0 0 0 2.5 6v6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V6a2 2 0 0 0-1.757-1.985 4 4 0 0 0-.023-.253c-.055-.453-.208-1.077-.63-1.64C10.377 1.172 9.222.75 7.993.75c-1.16 0-2.402.28-3.126 1.419a4.1 4.1 0 0 0-.569 1.588M7.993 2.25c-.977 0-1.551.237-1.86.723a2.6 2.6 0 0 0-.35 1.002L5.78 4h4.458l-.007-.057c-.036-.3-.131-.64-.342-.922-.349-.465-.987-.771-1.895-.771M11.5 5.5h-7A.5.5 0 0 0 4 6v6a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Io = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: [(0, o.jsx)("path", {
              fill: e,
              d: "M13 12.5a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0z"
            }), (0, o.jsx)("path", {
              fill: e,
              d: "M6.08 6.798a8 8 0 0 0-.045.36A3 3 0 0 0 4 10v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-8a3 3 0 0 0-2.013-2.834 7 7 0 0 0-.034-.366c-.089-.73-.336-1.722-1.004-2.614C15.823 2.684 13.985 2 11.99 2c-1.902 0-3.862.459-5 2.249-.567.893-.807 1.846-.91 2.549M11.99 4c-1.658 0-2.727.402-3.31 1.321-.347.545-.523 1.16-.608 1.679h7.89c-.067-.516-.237-1.113-.614-1.615C14.707 4.53 13.556 4 11.99 4M17 9H7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        No = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: [(0, o.jsx)("path", {
              fill: e,
              d: "M17.25 17a1.25 1.25 0 1 0-2.5 0v4a1.25 1.25 0 1 0 2.5 0z"
            }), (0, o.jsx)("path", {
              fill: e,
              d: "M7.86 9.339c-.06.412-.089.775-.101 1.059A4 4 0 0 0 5.5 14v10a4 4 0 0 0 4 4h13a4 4 0 0 0 4-4V14a4 4 0 0 0-2.25-3.598c0-.29-.016-.654-.065-1.064-.122-1.006-.462-2.367-1.376-3.587-1.54-2.055-4.063-3.001-6.823-3.001-2.644 0-5.322.638-6.872 3.079-.78 1.227-1.11 2.539-1.254 3.51m8.126-4.089c-2.34 0-3.903.567-4.762 1.92-.527.83-.778 1.768-.89 2.533a8 8 0 0 0-.039.297h11.442a7 7 0 0 0-.034-.36c-.091-.751-.334-1.64-.895-2.39-.934-1.248-2.597-2-4.822-2M22.5 12.5h-13A1.5 1.5 0 0 0 8 14v10a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 24 24V14a1.5 1.5 0 0 0-1.5-1.5",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Oo = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(To, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(Io, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(No, {
              ...n,
              ref: r
            })]
          })
        }));
      Oo.displayName = "Padlock", Oo.category = "User Interface", Oo.variant = "Outline", Oo.keywords = "Lock, Password, Safe, Protection, Secure, Security, Latch", Oo.MD = To, Oo.LG = Io, Oo.XL = No;
      const ko = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: [(0, o.jsx)("path", {
              fill: e,
              d: "M5.5 8.25a.75.75 0 0 0 0 1.5h.1a.75.75 0 0 0 0-1.5zM8 8.25a.75.75 0 0 0 0 1.5h.1a.75.75 0 0 0 0-1.5zM10.5 8.25a.75.75 0 0 0 0 1.5h.1a.75.75 0 0 0 0-1.5z"
            }), (0, o.jsx)("path", {
              fill: e,
              d: "M4.3 3.757a5 5 0 0 0-.031.256A2 2 0 0 0 2.5 6v6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V6a2 2 0 0 0-1.757-1.985 4 4 0 0 0-.023-.253c-.055-.453-.208-1.077-.63-1.64C10.377 1.172 9.222.75 7.993.75c-1.16 0-2.402.28-3.126 1.419a4.1 4.1 0 0 0-.569 1.588M7.993 2.25c-.977 0-1.551.237-1.86.723a2.6 2.6 0 0 0-.35 1.002L5.78 4h4.458l-.007-.057c-.036-.3-.131-.64-.342-.922-.349-.465-.987-.771-1.895-.771M11.5 5.5h-7A.5.5 0 0 0 4 6v6a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Ho = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: [(0, o.jsx)("path", {
              fill: e,
              d: "M8.5 13a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zM12 13a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zM15.5 13a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2z"
            }), (0, o.jsx)("path", {
              fill: e,
              d: "M6.08 6.798a8 8 0 0 0-.045.36A3 3 0 0 0 4 10v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-8a3 3 0 0 0-2.013-2.834 7 7 0 0 0-.034-.366c-.089-.73-.336-1.722-1.004-2.614C15.823 2.684 13.985 2 11.99 2c-1.902 0-3.862.459-5 2.249-.567.893-.807 1.846-.91 2.549M11.99 4c-1.658 0-2.727.402-3.31 1.321-.347.545-.523 1.16-.608 1.679h7.89c-.067-.516-.237-1.113-.614-1.615C14.707 4.53 13.556 4 11.99 4M17 9H7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Bo = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: [(0, o.jsx)("path", {
              fill: e,
              d: "M11.5 17.75a1.25 1.25 0 1 0 0 2.5h.1a1.25 1.25 0 1 0 0-2.5zM16 17.75a1.25 1.25 0 1 0 0 2.5h.1a1.25 1.25 0 1 0 0-2.5zM20.5 17.75a1.25 1.25 0 1 0 0 2.5h.1a1.25 1.25 0 1 0 0-2.5z"
            }), (0, o.jsx)("path", {
              fill: e,
              d: "M7.86 9.339c-.06.412-.089.775-.101 1.059A4 4 0 0 0 5.5 14v10a4 4 0 0 0 4 4h13a4 4 0 0 0 4-4V14a4 4 0 0 0-2.25-3.598c0-.29-.016-.654-.065-1.064-.122-1.006-.462-2.367-1.376-3.587-1.54-2.055-4.063-3.001-6.823-3.001-2.644 0-5.322.638-6.872 3.079-.78 1.227-1.11 2.539-1.254 3.51m8.126-4.089c-2.34 0-3.903.567-4.762 1.92-.527.83-.778 1.768-.89 2.533a8 8 0 0 0-.039.297h11.442a7 7 0 0 0-.034-.36c-.091-.751-.334-1.64-.895-2.39-.934-1.248-2.597-2-4.822-2M22.5 12.5h-13A1.5 1.5 0 0 0 8 14v10a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 24 24V14a1.5 1.5 0 0 0-1.5-1.5",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        zo = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(ko, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(Ho, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(Bo, {
              ...n,
              ref: r
            })]
          })
        }));
      zo.displayName = "PadlockPassword", zo.category = "User Interface", zo.variant = "Outline", zo.keywords = "", zo.MD = ko, zo.LG = Ho, zo.XL = Bo;
      const Vo = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M14 8a1 1 0 0 1-1 1h-.5v3.5A1.5 1.5 0 0 1 11 14H5a1.5 1.5 0 0 1-1.5-1.5V9H3a1 1 0 0 1-1-1V6.362a1.5 1.5 0 0 1 .744-1.296l4.5-2.625a1.5 1.5 0 0 1 1.512 0l4.5 2.625A1.5 1.5 0 0 1 14 6.362zm-1.5-.5H11v5H9.55v-2.4a.65.65 0 0 0-.65-.65H7.1a.65.65 0 0 0-.65.65v2.4H5v-5H3.5V6.362L8 3.737l4.5 2.625zm-4.95 5h.9v-1.95h-.9z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Fo = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M21 11.8a1.7 1.7 0 0 1-1.7 1.7h-.55V19a2 2 0 0 1-2 2h-9.5a2 2 0 0 1-2-2v-5.5H4.7A1.7 1.7 0 0 1 3 11.8V9.399a2 2 0 0 1 .992-1.728l7-4.083a2 2 0 0 1 2.016 0l7 4.083A2 2 0 0 1 21 9.4zm-4.25-.3V19h-2.1v-4.5a.95.95 0 0 0-.95-.95h-3.4a.95.95 0 0 0-.95.95V19h-2.1v-7.5H5V9.399l7-4.084L19 9.4V11.5zm-5.7 7.5h1.9v-3.75h-1.9z",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M28 16a2 2 0 0 1-2 2h-1v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 7 25.5V18H6a2 2 0 0 1-2-2v-3.564a2.5 2.5 0 0 1 1.24-2.16l9.5-5.541a2.5 2.5 0 0 1 2.52 0l9.5 5.542A2.5 2.5 0 0 1 28 12.436zm-5.5-.5v10h-2.802v-6.4a1.2 1.2 0 0 0-1.2-1.2h-5a1.2 1.2 0 0 0-1.2 1.2v6.4H9.5v-10h-3v-3.064L16 6.894l9.5 5.542V15.5zm-8.002 10h3v-5.4h-3z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Xo = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(Vo, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(Fo, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(Go, {
              ...n,
              ref: r
            })]
          })
        }));
      Xo.displayName = "House", Xo.category = "User Interface", Xo.variant = "Outline", Xo.keywords = "Home, Building, Property, Homepage, City", Xo.MD = Vo, Xo.LG = Fo, Xo.XL = Go;
      const Uo = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: [(0, o.jsx)("path", {
              fill: e,
              d: "M4.25 6a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M7 4.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, o.jsx)("path", {
              fill: e,
              d: "M8.819 9.25H5A2.75 2.75 0 0 0 2.25 12v1a.75.75 0 0 0 1.5 0v-1A1.25 1.25 0 0 1 5 10.75h3.08c.123-.562.381-1.074.739-1.5"
            }), (0, o.jsx)("path", {
              fill: e,
              d: "M11.75 8.45a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6m-1.7 2.8c0-.269.062-.523.173-.749l2.276 2.276a1.7 1.7 0 0 1-2.449-1.527m3.227.749L11 9.723a1.7 1.7 0 0 1 2.275 2.275",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        qo = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: [(0, o.jsx)("path", {
              fill: e,
              d: "M6.5 9a4 4 0 1 1 8 0 4 4 0 0 1-8 0m4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, o.jsx)("path", {
              fill: e,
              d: "M12.691 14H7.25a4.2 4.2 0 0 0-3.014 1.278A4.38 4.38 0 0 0 3 18.333V20a1 1 0 1 0 2 0v-1.667c0-.627.243-1.223.668-1.659A2.2 2.2 0 0 1 7.25 16h4.595c.141-.732.435-1.41.846-2"
            }), (0, o.jsx)("path", {
              fill: e,
              d: "M17 13.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5M14.75 17c0-.347.079-.676.22-.97l3 3A2.25 2.25 0 0 1 14.75 17m4.28.97-3-3a2.25 2.25 0 0 1 3 3",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Wo = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: [(0, o.jsx)("path", {
              fill: e,
              d: "M8.75 12a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0M14 9.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, o.jsx)("path", {
              fill: e,
              d: "M18.082 18.75H9.5a5.67 5.67 0 0 0-4.082 1.75 6 6 0 0 0-1.668 4.167V27a1.25 1.25 0 1 0 2.5 0v-2.333c0-.92.353-1.795.968-2.433A3.17 3.17 0 0 1 9.5 21.25h7.238a6.5 6.5 0 0 1 1.344-2.5"
            }), (0, o.jsx)("path", {
              fill: e,
              d: "M23 18a5 5 0 1 0 0 10 5 5 0 0 0 0-10m-3 5c0-.463.105-.902.292-1.293l4.001 4A3 3 0 0 1 20 23m5.708 1.293-4.001-4a3 3 0 0 1 4.001 4.001",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Ko = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(Uo, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(qo, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(Wo, {
              ...n,
              ref: r
            })]
          })
        }));
      Ko.displayName = "PersonBlock", Ko.category = "User Interface", Ko.variant = "Outline", Ko.keywords = "", Ko.MD = Uo, Ko.LG = qo, Ko.XL = Wo;
      const $o = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: [(0, o.jsx)("path", {
              fill: e,
              d: "M5.143 2 3 4.143v7.714h2.571V14l2.143-2.143H9.43L13.286 8V2zm7.286 5.571-1.715 1.715H9l-1.5 1.5v-1.5H5.571V2.857h6.858z"
            }), (0, o.jsx)("path", {
              fill: e,
              d: "M11.143 4.357h-.857V6.93h.857zM8.786 4.357h-.857V6.93h.857z"
            })]
          })
        }))),
        Yo = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: [(0, o.jsx)("path", {
              fill: e,
              d: "M7.514 3 4.3 6.214v11.572h3.857V21l3.214-3.214h2.572L19.728 12V3zm10.929 8.357L15.87 13.93H13.3l-2.25 2.25v-2.25H8.157V4.286h10.286z"
            }), (0, o.jsx)("path", {
              fill: e,
              d: "M16.514 6.536h-1.286v3.857h1.286zM12.978 6.536h-1.285v3.857h1.285z"
            })]
          })
        }))),
        Zo = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: [(0, o.jsx)("path", {
              fill: e,
              d: "M9.986 4 5.7 8.286v15.428h5.143V28l4.286-4.286h3.428L26.272 16V4zm14.571 11.143L21.13 18.57H17.7l-3 3v-3h-3.857V5.714h13.714z"
            }), (0, o.jsx)("path", {
              fill: e,
              d: "M21.986 8.714h-1.714v5.143h1.714zM17.272 8.714h-1.715v5.143h1.715z"
            })]
          })
        }))),
        Qo = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)($o, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(Yo, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(Zo, {
              ...n,
              ref: r
            })]
          })
        }));
      Qo.displayName = "Twitch", Qo.category = "Social Media", Qo.variant = "Outline", Qo.keywords = "Social media, Streaming, Game, App, Share", Qo.MD = $o, Qo.LG = Yo, Qo.XL = Zo;
      const Jo = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M5.515 2.042c-.638.03-1.074.132-1.455.282-.395.153-.73.36-1.062.694a2.9 2.9 0 0 0-.69 1.063c-.148.382-.248.818-.276 1.457s-.034.844-.031 2.474c.003 1.629.01 1.833.041 2.473.03.639.132 1.074.282 1.456.154.394.36.728.694 1.061s.668.537 1.064.69c.382.147.818.248 1.457.276.638.028.844.034 2.473.031s1.834-.01 2.474-.04 1.073-.133 1.455-.282c.394-.154.729-.36 1.061-.694a2.9 2.9 0 0 0 .69-1.064c.148-.382.248-.818.276-1.456.028-.64.034-.845.031-2.474s-.01-1.834-.04-2.474-.133-1.074-.282-1.456a2.95 2.95 0 0 0-.694-1.061 2.9 2.9 0 0 0-1.064-.69c-.382-.147-.818-.248-1.457-.276-.638-.027-.844-.034-2.473-.031s-1.834.01-2.474.041m.07 10.847c-.585-.026-.902-.123-1.114-.204a1.9 1.9 0 0 1-.691-.448 1.85 1.85 0 0 1-.45-.689c-.082-.212-.181-.529-.209-1.114-.03-.632-.036-.822-.04-2.424-.003-1.602.003-1.791.031-2.424.025-.584.123-.902.204-1.114.108-.28.238-.48.448-.69.21-.212.409-.342.689-.451.211-.083.529-.18 1.113-.209.633-.03.823-.036 2.424-.039 1.602-.004 1.792.002 2.425.03.585.026.903.123 1.114.204.28.108.48.238.69.448.212.21.342.409.451.69.083.21.181.527.209 1.112.03.633.037.823.04 2.424.002 1.602-.003 1.792-.031 2.424-.026.585-.123.903-.204 1.115-.108.28-.238.48-.448.69-.21.211-.409.341-.689.45-.211.083-.529.182-1.113.21-.633.03-.822.035-2.425.039s-1.791-.003-2.424-.03m4.892-8.096a.72.72 0 1 0 1.44-.002.72.72 0 0 0-1.44.002M4.919 8.006a3.08 3.08 0 1 0 6.162-.012 3.08 3.08 0 0 0-6.162.012M6 8.004a2 2 0 1 1 4-.008 2 2 0 0 1-4 .008"
            })
          })
        }))),
        ea = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M8.273 3.063c-.958.045-1.612.198-2.184.423-.591.23-1.093.54-1.592 1.04a4.4 4.4 0 0 0-1.035 1.596c-.222.572-.372 1.227-.414 2.185s-.052 1.266-.047 3.71.016 2.75.062 3.71c.046.958.198 1.612.423 2.184.23.591.54 1.093 1.04 1.592.502.5 1.003.806 1.597 1.035.572.221 1.227.372 2.185.414s1.266.052 3.71.047 2.75-.016 3.71-.061c.96-.046 1.61-.199 2.183-.423a4.4 4.4 0 0 0 1.592-1.04 4.4 4.4 0 0 0 1.035-1.597c.221-.572.372-1.227.414-2.184.042-.96.051-1.268.047-3.711-.005-2.444-.016-2.75-.061-3.71-.046-.96-.198-1.612-.423-2.184a4.4 4.4 0 0 0-1.04-1.592c-.501-.5-1.004-.806-1.597-1.035-.572-.221-1.227-.372-2.185-.414s-1.266-.052-3.71-.047-2.75.015-3.71.062m.105 16.27c-.878-.038-1.354-.184-1.672-.306a2.8 2.8 0 0 1-1.036-.671 2.8 2.8 0 0 1-.675-1.034c-.124-.317-.272-.793-.313-1.67-.045-.95-.054-1.234-.06-3.637s.005-2.687.046-3.636c.038-.877.184-1.354.306-1.671.162-.421.357-.72.671-1.036a2.8 2.8 0 0 1 1.034-.675c.317-.124.793-.272 1.67-.313.95-.045 1.234-.054 3.637-.06s2.687.004 3.637.046c.876.038 1.354.183 1.67.306.421.162.72.357 1.037.671s.511.613.675 1.034c.124.317.271.792.313 1.67.045.95.055 1.234.06 3.636s-.005 2.688-.046 3.636c-.038.877-.184 1.354-.306 1.672-.162.42-.357.72-.672 1.036-.314.316-.613.511-1.033.675-.317.124-.794.271-1.67.313-.95.045-1.234.054-3.637.06s-2.687-.005-3.636-.046M15.715 7.19a1.08 1.08 0 1 0 2.16-.004 1.08 1.08 0 0 0-2.16.004m-8.336 4.819a4.621 4.621 0 1 0 9.242-.018 4.621 4.621 0 0 0-9.242.018M9 12.006a3 3 0 1 1 6-.012 3 3 0 0 1-6 .012"
            })
          })
        }))),
        ta = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M11.03 4.084c-1.277.06-2.149.264-2.91.563a5.9 5.9 0 0 0-2.124 1.388 5.9 5.9 0 0 0-1.38 2.127c-.295.764-.495 1.637-.552 2.914-.056 1.278-.069 1.688-.063 4.947s.021 3.667.083 4.948c.061 1.276.264 2.148.564 2.91a5.9 5.9 0 0 0 1.387 2.123 5.9 5.9 0 0 0 2.13 1.38c.762.295 1.635.496 2.913.552s1.688.069 4.946.063 3.668-.02 4.948-.082c1.28-.06 2.147-.265 2.91-.563a5.9 5.9 0 0 0 2.122-1.388 5.9 5.9 0 0 0 1.38-2.128c.295-.764.496-1.637.552-2.913.056-1.28.069-1.69.063-4.948s-.021-3.667-.082-4.946c-.06-1.28-.264-2.15-.563-2.912a5.9 5.9 0 0 0-1.388-2.123 5.86 5.86 0 0 0-2.128-1.38c-.764-.295-1.636-.496-2.914-.552-1.277-.055-1.688-.069-4.947-.063s-3.667.02-4.947.083m.14 21.693c-1.17-.05-1.805-.245-2.228-.408a3.7 3.7 0 0 1-1.382-.895 3.7 3.7 0 0 1-.9-1.378c-.165-.423-.363-1.058-.417-2.228-.06-1.264-.072-1.644-.08-4.848-.006-3.204.006-3.583.061-4.848.05-1.169.246-1.805.408-2.228.216-.561.477-.96.895-1.382a3.7 3.7 0 0 1 1.379-.9c.423-.165 1.057-.361 2.227-.417 1.265-.06 1.644-.072 4.848-.08 3.203-.006 3.583.006 4.85.062 1.168.05 1.805.244 2.227.408.561.216.96.475 1.382.895s.681.817.9 1.378c.166.422.362 1.056.417 2.227.06 1.265.074 1.645.08 4.848s-.006 3.583-.061 4.848c-.051 1.17-.245 1.805-.408 2.23a3.7 3.7 0 0 1-.895 1.38c-.42.422-.819.682-1.379.9-.422.165-1.058.362-2.226.418-1.266.06-1.645.072-4.85.079s-3.582-.006-4.847-.06m9.782-16.192a1.44 1.44 0 1 0 2.88-.004 1.44 1.44 0 0 0-2.88.004M9.84 16.012a6.162 6.162 0 1 0 12.323-.026 6.162 6.162 0 0 0-12.323.026M12 16.008a4 4 0 1 1 8-.016 4 4 0 0 1-8 .016"
            })
          })
        }))),
        ra = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(Jo, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(ea, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(ta, {
              ...n,
              ref: r
            })]
          })
        }));
      ra.displayName = "Instagram", ra.category = "Social Media", ra.variant = "Outline", ra.keywords = "Social media, Photo, Camera, App, Share", ra.MD = Jo, ra.LG = ea, ra.XL = ta;
      const na = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M14 8.022C14 4.696 11.313 2 8 2S2 4.696 2 8.022a6.02 6.02 0 0 0 4.55 5.845V9.862H5.314v-1.84h1.238v-.793c0-2.05.924-3 2.929-3 .38 0 1.036.075 1.304.15v1.668a8 8 0 0 0-.693-.022c-.984 0-1.364.374-1.364 1.346v.65h1.96l-.337 1.841H8.727V14A6.015 6.015 0 0 0 14 8.022"
            })
          })
        }))),
        oa = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M21 12.033C21 7.044 16.97 3 12 3s-9 4.044-9 9.033A9.03 9.03 0 0 0 9.826 20.8v-6.007H7.97v-2.76h1.856v-1.19c0-3.074 1.386-4.499 4.393-4.499.57 0 1.555.112 1.957.224V9.07a12 12 0 0 0-1.04-.033c-1.475 0-2.045.561-2.045 2.02v.976h2.94l-.506 2.76h-2.434V21C17.547 20.46 21 16.65 21 12.033"
            })
          })
        }))),
        aa = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M28 16.044C28 9.392 22.627 4 16 4S4 9.392 4 16.044a12.04 12.04 0 0 0 9.101 11.69v-8.01h-2.474v-3.68H13.1v-1.586c0-4.1 1.848-6 5.858-6 .76 0 2.073.15 2.61.3v3.336c-.284-.03-.776-.045-1.387-.045-1.968 0-2.728.748-2.728 2.693v1.302h3.92l-.674 3.68h-3.246V28C23.396 27.28 28 22.202 28 16.044"
            })
          })
        }))),
        la = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(na, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(oa, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(aa, {
              ...n,
              ref: r
            })]
          })
        }));
      la.displayName = "Facebook", la.category = "Social Media", la.variant = "Outline", la.keywords = "Social media, Profile, Feed, App, Share", la.MD = na, la.LG = oa, la.XL = aa;
      const ia = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M9.142 7.081 13.609 2H12.55L8.671 6.412 5.573 2H2l4.685 6.672L2 14h1.059l4.096-4.66L10.427 14H14zm-1.45 1.65-.475-.665L3.44 2.78h1.626l3.048 4.266.475.664 3.962 5.546h-1.626z"
            })
          })
        }))),
        sa = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M13.712 10.622 20.413 3h-1.588l-5.818 6.618L8.36 3H3l7.027 10.007L3 21h1.588l6.144-6.989L15.64 21H21zm-2.174 2.474-.713-.997L5.16 4.17H7.6l4.571 6.4.712.996 5.943 8.319h-2.439z"
            })
          })
        }))),
        ca = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M18.283 14.162 27.218 4H25.1l-7.758 8.824L11.147 4H4l9.37 13.343L4 28h2.117l8.193-9.318L20.853 28H28zm-2.9 3.299-.95-1.329L6.88 5.56h3.252l6.096 8.532.95 1.329 7.924 11.09h-3.253z"
            })
          })
        }))),
        da = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(ia, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(sa, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(ca, {
              ...n,
              ref: r
            })]
          })
        }));
      da.displayName = "Twitter", da.category = "Social Media", da.variant = "Outline", da.keywords = "Social media, Twitter, Tweet, App, Share, X", da.MD = ia, da.LG = sa, da.XL = ca;
      const ua = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M14.708 4.63a1.75 1.75 0 0 0-1.237-1.237C12.378 3.1 8 3.1 8 3.1s-4.378 0-5.47.293A1.75 1.75 0 0 0 1.293 4.63C1 5.722 1 8 1 8s0 2.278.293 3.37a1.75 1.75 0 0 0 1.237 1.237C3.622 12.9 8 12.9 8 12.9s4.378 0 5.47-.293a1.75 1.75 0 0 0 1.237-1.237C15 10.278 15 8 15 8s0-2.278-.293-3.37zM6.6 10.1V5.9L10.237 8z"
            })
          })
        }))),
        fa = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M21.584 7.186a2.5 2.5 0 0 0-1.769-1.768C18.255 5 12 5 12 5s-6.255 0-7.814.418a2.5 2.5 0 0 0-1.768 1.768C2 8.746 2 12 2 12s0 3.255.418 4.814c.23.86.907 1.537 1.768 1.768C5.746 19 12 19 12 19s6.255 0 7.814-.418a2.5 2.5 0 0 0 1.768-1.768C22 15.254 22 12 22 12s0-3.255-.418-4.814zM10 15V9l5.196 3z"
            })
          })
        }))),
        ha = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M28.459 9.742a3.26 3.26 0 0 0-2.3-2.298C24.132 6.9 16 6.9 16 6.9s-8.13 0-10.158.544a3.26 3.26 0 0 0-2.298 2.298C3 11.77 3 16 3 16s0 4.231.544 6.258a3.26 3.26 0 0 0 2.298 2.298C7.87 25.1 16 25.1 16 25.1s8.13 0 10.158-.544a3.26 3.26 0 0 0 2.298-2.298C29 20.23 29 16 29 16s0-4.231-.544-6.258zM13.399 19.9V12.1l6.755 3.9z"
            })
          })
        }))),
        va = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(ua, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(fa, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(ha, {
              ...n,
              ref: r
            })]
          })
        }));
      va.displayName = "Youtube", va.category = "Social Media", va.variant = "Outline", va.keywords = "Social media, Video, Player, App, Share", va.MD = ua, va.LG = fa, va.XL = ha;
      const pa = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M8 13.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ga = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ma = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M16 5.25C10.063 5.25 5.25 10.063 5.25 16S10.063 26.75 16 26.75 26.75 21.937 26.75 16 21.937 5.25 16 5.25M2.75 16C2.75 8.682 8.682 2.75 16 2.75S29.25 8.682 29.25 16 23.318 29.25 16 29.25 2.75 23.318 2.75 16",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        wa = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(pa, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(ga, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(ma, {
              ...n,
              ref: r
            })]
          })
        }));
      wa.displayName = "Circle", wa.category = "Selection", wa.variant = "Outline", wa.keywords = "Radio, Radio Button, Round, Empty, Selection, Unchecked", wa.MD = pa, wa.LG = ga, wa.XL = ma;
      const xa = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: [(0, o.jsx)("path", {
              fill: e,
              d: "M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
            }), (0, o.jsx)("path", {
              fill: e,
              d: "M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        ya = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: [(0, o.jsx)("path", {
              fill: e,
              d: "M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12"
            }), (0, o.jsx)("path", {
              fill: e,
              d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        ba = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: [(0, o.jsx)("path", {
              fill: e,
              d: "M16 24a8 8 0 1 0 0-16 8 8 0 0 0 0 16"
            }), (0, o.jsx)("path", {
              fill: e,
              d: "M16 2.75C8.682 2.75 2.75 8.682 2.75 16S8.682 29.25 16 29.25 29.25 23.318 29.25 16 23.318 2.75 16 2.75M5.25 16c0-5.937 4.813-10.75 10.75-10.75S26.75 10.063 26.75 16 21.937 26.75 16 26.75 5.25 21.937 5.25 16",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        ja = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(xa, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(ya, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(ba, {
              ...n,
              ref: r
            })]
          })
        }));
      ja.displayName = "CircleDot", ja.category = "Selection", ja.variant = "Outline", ja.keywords = "Radio, Radio Button, Round, Filled, Selection, Aim, Checked", ja.MD = xa, ja.LG = ya, ja.XL = ba;
      const Ra = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M8 2.25a.75.75 0 0 1 .75.75v4.25H13a.75.75 0 0 1 0 1.5H8.75V13a.75.75 0 0 1-1.5 0V8.75H3a.75.75 0 0 1 0-1.5h4.25V3A.75.75 0 0 1 8 2.25",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M12 4a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ca = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M16 4.75c.69 0 1.25.56 1.25 1.25v8.75H26a1.25 1.25 0 1 1 0 2.5h-8.75V26a1.25 1.25 0 1 1-2.5 0v-8.75H6a1.25 1.25 0 1 1 0-2.5h8.75V6c0-.69.56-1.25 1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        La = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(Ra, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(Ma, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(Ca, {
              ...n,
              ref: r
            })]
          })
        }));
      La.displayName = "Plus", La.category = "Selection", La.variant = "Outline", La.keywords = "Add, More, Create, New, Navigation", La.MD = Ra, La.LG = Ma, La.XL = Ca;
      const Sa = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M2.25 8A.75.75 0 0 1 3 7.25h10a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 8",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ea = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Pa = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M4.75 16c0-.69.56-1.25 1.25-1.25h20a1.25 1.25 0 1 1 0 2.5H6c-.69 0-1.25-.56-1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        _a = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(Sa, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(Ea, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(Pa, {
              ...n,
              ref: r
            })]
          })
        }));
      _a.displayName = "Minus", _a.category = "Selection", _a.variant = "Outline", _a.keywords = "Remove, Less, Delete, Navigation, Minimize", _a.MD = Sa, _a.LG = Ea, _a.XL = Pa;
      const Da = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M3.47 3.47a.75.75 0 0 1 1.06 0L8 6.94l3.47-3.47a.75.75 0 1 1 1.06 1.06L9.06 8l3.47 3.47a.75.75 0 1 1-1.06 1.06L8 9.06l-3.47 3.47a.75.75 0 0 1-1.06-1.06L6.94 8 3.47 4.53a.75.75 0 0 1 0-1.06",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Aa = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ta = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M7.116 7.116a1.25 1.25 0 0 1 1.768 0L16 14.232l7.116-7.116a1.25 1.25 0 0 1 1.768 1.768L17.768 16l7.116 7.116a1.25 1.25 0 0 1-1.768 1.768L16 17.768l-7.116 7.116a1.25 1.25 0 0 1-1.768-1.768L14.232 16 7.116 8.884a1.25 1.25 0 0 1 0-1.768",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ia = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(Da, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(Aa, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(Ta, {
              ...n,
              ref: r
            })]
          })
        }));
      Ia.displayName = "X", Ia.category = "Selection", Ia.variant = "Outline", Ia.keywords = "Close, Error, Remove, Clean, Erase, Delete, Navigation, Cross, Times, Cancel", Ia.MD = Da, Ia.LG = Aa, Ia.XL = Ta;
      const Na = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M14.245 4.041a.75.75 0 0 1 0 1.06l-8 8a.75.75 0 0 1-1.061 0L1.755 9.674a.75.75 0 1 1 1.061-1.06l2.898 2.898 7.47-7.47a.75.75 0 0 1 1.06 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Oa = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M19.684 6.27a1 1 0 0 1 .046 1.414l-10.313 11a1 1 0 0 1-1.459 0l-4.688-5a1 1 0 1 1 1.46-1.368l3.957 4.222L18.27 6.316a1 1 0 0 1 1.414-.046",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ka = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M26.876 10.108c.492.484.5 1.275.016 1.768l-13.75 14a1.25 1.25 0 0 1-1.784 0l-6.25-6.364a1.25 1.25 0 1 1 1.784-1.751l5.358 5.455 12.858-13.092a1.25 1.25 0 0 1 1.768-.016",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ha = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(Na, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(Oa, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(ka, {
              ...n,
              ref: r
            })]
          })
        }));
      Ha.displayName = "Check", Ha.category = "Selection", Ha.variant = "Outline", Ha.keywords = "Done, Ready, Yes, Available, Completed, Success, Accept, Tick", Ha.MD = Na, Ha.LG = Oa, Ha.XL = ka;
      const Ba = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M8 2.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5M1.25 8a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0m4 0A.75.75 0 0 1 6 7.25h4a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 8",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        za = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m5 0a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Va = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M16 5.25C10.063 5.25 5.25 10.063 5.25 16S10.063 26.75 16 26.75 26.75 21.937 26.75 16 21.937 5.25 16 5.25M2.75 16C2.75 8.682 8.682 2.75 16 2.75S29.25 8.682 29.25 16 23.318 29.25 16 29.25 2.75 23.318 2.75 16m6 0c0-.69.56-1.25 1.25-1.25h12a1.25 1.25 0 1 1 0 2.5H10c-.69 0-1.25-.56-1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Fa = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(Ba, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(za, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(Va, {
              ...n,
              ref: r
            })]
          })
        }));
      Fa.displayName = "MinusCircle", Fa.category = "Selection", Fa.variant = "Outline", Fa.keywords = "Minus, No, Less, n/a, Remove, Delete", Fa.MD = Ba, Fa.LG = za, Fa.XL = Va;
      const Ga = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M12.5 3.5h-9v9h9zM3.5 2A1.5 1.5 0 0 0 2 3.5v9A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 12.5 2z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Xa = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M19 5H5v14h14zM5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ua = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M24 6.5H8A1.5 1.5 0 0 0 6.5 8v16A1.5 1.5 0 0 0 8 25.5h16a1.5 1.5 0 0 0 1.5-1.5V8A1.5 1.5 0 0 0 24 6.5M8 4a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        qa = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(Ga, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(Xa, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(Ua, {
              ...n,
              ref: r
            })]
          })
        }));
      qa.displayName = "Square", qa.category = "Selection", qa.variant = "Outline", qa.keywords = "Checkbox, Shape, Empty, Selection, Unchecked, Unselected, Maximize", qa.MD = Ga, qa.LG = Xa, qa.XL = Ua;
      const Wa = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M1.25 3.5A2.25 2.25 0 0 1 3.5 1.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25zm2.25-.75a.75.75 0 0 0-.75.75v9c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-.75-.75zm8.03 2.72a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 0 1 1.06-1.06L7 8.94l3.47-3.47a.75.75 0 0 1 1.06 0",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm11.664 4.253a1 1 0 0 1 .083 1.411l-5.333 6a1 1 0 0 1-1.495 0l-2.666-3a1 1 0 0 1 1.494-1.328l1.92 2.159 4.586-5.16a1 1 0 0 1 1.411-.082",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        $a = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M2.75 8C2.75 5.1 5.1 2.75 8 2.75h16c2.9 0 5.25 2.35 5.25 5.25v16c0 2.9-2.35 5.25-5.25 5.25H8A5.25 5.25 0 0 1 2.75 24zM8 5.25A2.75 2.75 0 0 0 5.25 8v16A2.75 2.75 0 0 0 8 26.75h16A2.75 2.75 0 0 0 26.75 24V8A2.75 2.75 0 0 0 24 5.25zm13.8 5.79c.53.442.602 1.23.16 1.76l-6.666 8a1.25 1.25 0 0 1-1.921 0l-3.333-4a1.25 1.25 0 0 1 1.92-1.6l2.373 2.847L20.04 11.2a1.25 1.25 0 0 1 1.76-.16",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ya = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(Wa, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(Ka, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)($a, {
              ...n,
              ref: r
            })]
          })
        }));
      Ya.displayName = "CheckSquare", Ya.category = "Selection", Ya.variant = "Outline", Ya.keywords = "Checkbox, Selection, Checked, Completed, Check Mark, To do, Done, Approved, Selected", Ya.MD = Wa, Ya.LG = Ka, Ya.XL = $a;
      const Za = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M1.25 3.5A2.25 2.25 0 0 1 3.5 1.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25zm2.25-.75a.75.75 0 0 0-.75.75v9c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-.75-.75zM5.25 8A.75.75 0 0 1 6 7.25h4a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 8",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Qa = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm2 8a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ja = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M2.75 8C2.75 5.1 5.1 2.75 8 2.75h16c2.9 0 5.25 2.35 5.25 5.25v16c0 2.9-2.35 5.25-5.25 5.25H8A5.25 5.25 0 0 1 2.75 24zM8 5.25A2.75 2.75 0 0 0 5.25 8v16A2.75 2.75 0 0 0 8 26.75h16A2.75 2.75 0 0 0 26.75 24V8A2.75 2.75 0 0 0 24 5.25zM8.75 16c0-.69.56-1.25 1.25-1.25h12a1.25 1.25 0 1 1 0 2.5H10c-.69 0-1.25-.56-1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        el = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(Za, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(Qa, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(Ja, {
              ...n,
              ref: r
            })]
          })
        }));
      el.displayName = "MinusSquare", el.category = "Selection", el.variant = "Outline", el.keywords = "Checkbox, Partial, Selection, Intermediate, Remove, Minus, Delete, Indeterminate", el.MD = Za, el.LG = Qa, el.XL = Ja;
      const tl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M10.162 13.153a.75.75 0 0 1-.735.597 8 8 0 0 1-1.223-.139 5 5 0 0 1-.707-.178c-.183-.062-.487-.179-.698-.407a2.47 2.47 0 0 1-.646-1.676V9.9H4.032a1.7 1.7 0 0 1-.76-.172 1.8 1.8 0 0 1-.607-.486 1.9 1.9 0 0 1-.35-.69 1.9 1.9 0 0 1-.046-.771l.7-4.95c.06-.426.262-.826.582-1.121a1.72 1.72 0 0 1 1.182-.46h7.25c.49 0 .944.21 1.27.563.324.351.497.815.497 1.287v3.85c0 .472-.173.936-.497 1.287a1.73 1.73 0 0 1-1.27.563h-.914zM11.21 7.3h.774a.23.23 0 0 0 .168-.081.4.4 0 0 0 .098-.269V3.1a.4.4 0 0 0-.098-.269.23.23 0 0 0-.168-.08h-.774zm-1.5-4.55H4.72a.22.22 0 0 0-.153.064.38.38 0 0 0-.112.225l-.7 4.95a.4.4 0 0 0 .01.174.4.4 0 0 0 .07.14q.045.053.093.076a.2.2 0 0 0 .09.021h2.885a.75.75 0 0 1 .75.75v2.2c0 .237.081.457.214.619q.026.013.112.043c.13.045.306.088.505.125q.178.035.345.057l.88-4.221z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        rl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M14.459 20.285A1 1 0 0 1 13.5 21c-.36 0-.75-.128-1.034-.237a10 10 0 0 1-.999-.457c-.616-.321-1.324-.754-1.668-1.093-.446-.44-.622-1.023-.704-1.46a7 7 0 0 1-.092-1.332l.16-2.021H5.649a2.65 2.65 0 0 1-2-.888 2.6 2.6 0 0 1-.619-2.104l1.122-7.2c.096-.624.418-1.19.901-1.594A2.64 2.64 0 0 1 6.771 2h11.603c.692 0 1.358.27 1.851.756.494.486.775 1.15.775 1.844v5.6c0 .695-.28 1.358-.775 1.844a2.64 2.64 0 0 1-1.85.756h-1.693zm2.477-9.485h1.438a.64.64 0 0 0 .448-.181A.59.59 0 0 0 19 10.2V4.6a.59.59 0 0 0-.178-.419.64.64 0 0 0-.448-.18h-1.438zm-2-6.8H6.755a.64.64 0 0 0-.419.148.6.6 0 0 0-.207.364l-1.122 7.2a.58.58 0 0 0 .141.476q.09.1.216.157a.65.65 0 0 0 .27.055h4.611a1 1 0 0 1 .997 1.079L11 16.539c.001.292.013.59.062.848q.038.198.086.305c.03.072.054.095.053.095.113.111.582.428 1.19.745q.226.117.438.215l2.106-7.092z",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M19.26 28.361a1.25 1.25 0 0 1-1.198.889c-.467 0-.98-.165-1.37-.311-.437-.165-.911-.383-1.36-.613-.846-.434-1.804-1.012-2.264-1.457-.59-.571-.827-1.338-.938-1.924-.116-.613-.13-1.233-.13-1.68q0-.05.004-.1l.229-2.844H7.267a3.55 3.55 0 0 1-1.445-.294c-.458-.199-.87-.493-1.203-.865a3.4 3.4 0 0 1-.728-1.293 3.35 3.35 0 0 1-.1-1.481v-.002l1.542-9.74c.13-.825.56-1.567 1.203-2.096a3.53 3.53 0 0 1 2.273-.8h15.956c.911 0 1.793.35 2.45.986a3.38 3.38 0 0 1 1.035 2.429v7.576a3.38 3.38 0 0 1-1.035 2.429 3.52 3.52 0 0 1-2.45.986H22.34zm3.401-12.705h2.104c.274 0 .529-.106.71-.282a.88.88 0 0 0 .275-.633V7.165a.88.88 0 0 0-.274-.633 1.02 1.02 0 0 0-.711-.282H22.66zm-2.5-9.406H8.79a1.03 1.03 0 0 0-.665.23.9.9 0 0 0-.322.554l-1.543 9.74a.85.85 0 0 0 .026.377c.037.122.102.239.193.34a1 1 0 0 0 .34.244c.133.058.28.087.428.086h6.34a1.25 1.25 0 0 1 1.246 1.35l-.333 4.143c.001.398.018.808.086 1.166.076.398.182.555.221.593.169.163.829.6 1.665 1.028.26.133.514.254.75.356l2.94-9.736z",
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
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(tl, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(rl, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(nl, {
              ...n,
              ref: r
            })]
          })
        }));
      ol.displayName = "ThumbsDown", ol.category = "Social", ol.variant = "Outline", ol.keywords = "Dislike, Rate, Social, Review, Feedback, Negative", ol.MD = tl, ol.LG = rl, ol.XL = nl;
      const al = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M5.838 1.847a.75.75 0 0 1 .735-.597c.263 0 .76.051 1.223.139.234.044.484.103.706.178.184.062.488.179.7.407.418.454.645 1.058.645 1.676V5.1h2.121a1.7 1.7 0 0 1 .76.172c.237.115.444.283.607.486.164.204.282.44.35.69.066.252.082.514.046.771l-.7 4.95c-.06.426-.262.826-.582 1.121a1.72 1.72 0 0 1-1.182.46h-7.25c-.49 0-.945-.21-1.27-.563A1.9 1.9 0 0 1 2.25 11.9V8.05c0-.472.173-.936.497-1.287a1.73 1.73 0 0 1 1.27-.563h.914zM4.79 7.7h-.774a.23.23 0 0 0-.167.081.4.4 0 0 0-.099.269v3.85c0 .111.041.207.099.269a.23.23 0 0 0 .167.08h.774zm1.5 4.55h4.99a.22.22 0 0 0 .153-.064.38.38 0 0 0 .112-.225l.7-4.95a.4.4 0 0 0-.01-.174.4.4 0 0 0-.07-.14.3.3 0 0 0-.093-.076.2.2 0 0 0-.09-.021H9.097a.75.75 0 0 1-.75-.75v-2.2a.98.98 0 0 0-.214-.619 1 1 0 0 0-.112-.043 4 4 0 0 0-.505-.126 7 7 0 0 0-.345-.056l-.88 4.221z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ll = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M9.541 2.715A1 1 0 0 1 10.5 2c.36 0 .75.128 1.034.237.322.123.67.286.999.457.616.321 1.324.754 1.668 1.093.446.44.622 1.023.704 1.46a7 7 0 0 1 .092 1.332l-.16 2.021h3.514a2.65 2.65 0 0 1 2 .888 2.6 2.6 0 0 1 .619 2.104l-1.122 7.2a2.6 2.6 0 0 1-.901 1.594 2.64 2.64 0 0 1-1.718.614H5.626a2.64 2.64 0 0 1-1.851-.756A2.59 2.59 0 0 1 3 18.4v-5.6c0-.695.28-1.358.775-1.844a2.64 2.64 0 0 1 1.85-.756h1.693zM7.064 12.2H5.626a.64.64 0 0 0-.448.181A.59.59 0 0 0 5 12.8v5.6c0 .154.062.305.178.419a.64.64 0 0 0 .448.18h1.438zm2 6.8h8.181a.64.64 0 0 0 .419-.148.6.6 0 0 0 .207-.364l1.122-7.2a.58.58 0 0 0-.141-.476.649.649 0 0 0-.485-.212h-4.612a1 1 0 0 1-.997-1.079L13 6.461c-.001-.293-.013-.59-.062-.848a1.5 1.5 0 0 0-.086-.305c-.03-.072-.054-.095-.053-.095-.113-.111-.582-.428-1.19-.745a10 10 0 0 0-.438-.215l-2.107 7.092z",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M12.74 3.639a1.25 1.25 0 0 1 1.197-.889c.468 0 .982.165 1.372.312.436.164.91.382 1.359.612.846.434 1.804 1.012 2.264 1.457.59.571.827 1.338.938 1.924.116.613.13 1.233.13 1.68q0 .05-.004.1l-.229 2.844h4.966c.497-.004.99.096 1.445.294.458.199.87.493 1.203.865.335.373.584.813.728 1.293s.178.986.1 1.481v.002l-1.542 9.74a3.4 3.4 0 0 1-1.203 2.096 3.53 3.53 0 0 1-2.273.8H7.235c-.911 0-1.793-.35-2.45-.986a3.38 3.38 0 0 1-1.035-2.429V17.26a3.38 3.38 0 0 1 1.035-2.429 3.52 3.52 0 0 1 2.45-.986H9.66zM9.34 16.344H7.235c-.274 0-.529.106-.71.282a.88.88 0 0 0-.275.633v7.576c0 .23.094.458.274.633.182.176.437.282.711.282H9.34zm2.5 9.406H23.21a1.03 1.03 0 0 0 .665-.23.9.9 0 0 0 .322-.553l1.543-9.742a.85.85 0 0 0-.026-.376.9.9 0 0 0-.193-.34 1 1 0 0 0-.34-.244 1.05 1.05 0 0 0-.428-.086h-6.34a1.25 1.25 0 0 1-1.246-1.35l.333-4.143a6.6 6.6 0 0 0-.086-1.166c-.076-.398-.182-.555-.221-.593-.169-.163-.829-.6-1.665-1.028a13 13 0 0 0-.75-.356l-2.94 9.736z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        sl = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(al, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(ll, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(il, {
              ...n,
              ref: r
            })]
          })
        }));
      sl.displayName = "ThumbsUp", sl.category = "Social", sl.variant = "Outline", sl.keywords = "Like, Rate, Social, Review, Feedback, Positive", sl.MD = al, sl.LG = ll, sl.XL = il;
      const cl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M5.124 2.396A4.16 4.16 0 0 1 8 1.25c1.073 0 2.109.409 2.877 1.146A3.89 3.89 0 0 1 12.083 5.2c0 1.75.39 2.82.736 3.43.174.306.342.504.454.618a1.4 1.4 0 0 0 .143.128A.75.75 0 0 1 13 10.75H3a.75.75 0 0 1-.397-1.389 2 2 0 0 0 .124-.113c.112-.114.28-.312.454-.619.346-.608.736-1.678.736-3.429 0-1.058.438-2.066 1.207-2.804M4.552 9.25h6.896c-.46-.86-.865-2.158-.865-4.05 0-.64-.264-1.26-.745-1.722A2.66 2.66 0 0 0 8 2.75c-.695 0-1.355.265-1.838.728A2.39 2.39 0 0 0 5.417 5.2c0 1.892-.404 3.19-.865 4.05m1.031 2.126a.75.75 0 0 1 1.04.207c.126.188.315.357.558.478.244.122.527.189.82.189s.574-.067.818-.189c.243-.121.432-.29.557-.478a.75.75 0 0 1 1.248.834c-.281.42-.676.757-1.135.986-.458.23-.971.347-1.489.347s-1.03-.118-1.49-.347a2.94 2.94 0 0 1-1.134-.986.75.75 0 0 1 .207-1.04",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        dl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M7.69 3.755C8.91 2.625 10.55 2 12.245 2c1.696 0 3.336.624 4.555 1.755 1.222 1.133 1.923 2.685 1.923 4.32 0 2.843.655 4.6 1.254 5.617.3.511.594.847.798 1.047a3 3 0 0 0 .277.237l.002.002a.943.943 0 0 1-.507 1.739H3.943a.943.943 0 0 1-.498-1.744h-.002l-.003.003-.004.003q-.002 0 0 0l.003-.002.047-.035a3 3 0 0 0 .23-.203c.204-.2.497-.536.798-1.048.598-1.017 1.253-2.773 1.253-5.616 0-1.635.702-3.187 1.923-4.32M6.03 14.83h12.43l-.11-.182c-.785-1.335-1.513-3.427-1.513-6.573 0-1.086-.465-2.145-1.32-2.937-.856-.794-2.032-1.251-3.272-1.251s-2.415.457-3.272 1.251c-.854.792-1.319 1.85-1.319 2.937 0 3.146-.728 5.238-1.514 6.573zm2.813 3.1a.943.943 0 0 1 1.245.479c.25.562.597.998.982 1.286.38.286.785.418 1.175.418s.795-.132 1.176-.418c.385-.288.73-.724.982-1.287a.943.943 0 1 1 1.723.768c-.363.815-.897 1.522-1.573 2.029-.678.509-1.475.795-2.308.795s-1.629-.286-2.308-.795c-.675-.507-1.21-1.214-1.572-2.029a.943.943 0 0 1 .478-1.245",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M9.965 5.075C11.58 3.577 13.753 2.75 16 2.75s4.42.827 6.035 2.325c1.62 1.501 2.548 3.558 2.548 5.725 0 3.766.868 6.093 1.661 7.441a6.7 6.7 0 0 0 1.058 1.388 4 4 0 0 0 .367.315l.003.002A1.25 1.25 0 0 1 27 22.25H5a1.25 1.25 0 0 1-.66-2.311l-.003.001-.005.003-.005.004.001-.001.003-.002q.014-.009.062-.046c.064-.05.17-.137.306-.27.27-.264.658-.709 1.057-1.387.793-1.348 1.66-3.675 1.66-7.441 0-2.167.93-4.224 2.549-5.725m-2.2 14.675h16.47l-.146-.241c-1.04-1.769-2.006-4.542-2.006-8.709 0-1.44-.616-2.842-1.747-3.892C19.2 5.856 17.643 5.25 16 5.25c-1.642 0-3.2.606-4.335 1.658-1.132 1.05-1.748 2.452-1.748 3.892 0 4.167-.966 6.94-2.006 8.709zm3.726 4.108a1.25 1.25 0 0 1 1.65.633c.333.746.792 1.323 1.301 1.705.505.379 1.041.554 1.558.554s1.053-.175 1.558-.554c.51-.382.968-.96 1.3-1.705a1.25 1.25 0 1 1 2.284 1.018c-.481 1.08-1.19 2.016-2.084 2.687-.9.675-1.954 1.054-3.058 1.054s-2.159-.38-3.058-1.054c-.895-.67-1.603-1.608-2.084-2.687a1.25 1.25 0 0 1 .633-1.65",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        fl = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(cl, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(dl, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(ul, {
              ...n,
              ref: r
            })]
          })
        }));
      fl.displayName = "Bell", fl.category = "Social", fl.variant = "Outline", fl.keywords = "Notification, Message, Ring, Ding, Attention, Reminder, Alarm", fl.MD = cl, fl.LG = dl, fl.XL = ul;
      const hl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: [(0, o.jsx)("path", {
              fill: e,
              d: "M5.5 6V4.5H7V6zM5.5 8.5V7H7v1.5zM9 4.5V6h1.5V4.5zM9 8.5V7h1.5v1.5z"
            }), (0, o.jsx)("path", {
              fill: e,
              d: "M4.5 14A1.5 1.5 0 0 1 3 12.5v-9A1.5 1.5 0 0 1 4.5 2h7A1.5 1.5 0 0 1 13 3.5v9a1.5 1.5 0 0 1-1.5 1.5zm0-10.5h7v9H9.55v-2.4a.65.65 0 0 0-.65-.65H7.1a.65.65 0 0 0-.65.65v2.4H4.5zm3.95 9h-.9v-1.95h.9z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        vl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: [(0, o.jsx)("path", {
              fill: e,
              d: "M8.5 6v2h2V6zM8.5 10v2h2v-2zM13.5 6v2h2V6zM13.5 10v2h2v-2z"
            }), (0, o.jsx)("path", {
              fill: e,
              d: "M5 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm2 0h10v14h-2.35v-4.5a.95.95 0 0 0-.95-.95h-3.4a.95.95 0 0 0-.95.95V19H7zm4.05 14h1.9v-3.75h-1.9z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        pl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: [(0, o.jsx)("path", {
              fill: e,
              d: "M11.5 8v2.667H14V8zM11.5 13.667v2.666H14v-2.666zM18 8v2.667h2.5V8zM18 13.667v2.666h2.5v-2.666z"
            }), (0, o.jsx)("path", {
              fill: e,
              d: "M7 6.5A2.5 2.5 0 0 1 9.5 4h13A2.5 2.5 0 0 1 25 6.5v19a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 7 25.5zm2.5 0h13v19h-2.8v-6.4a1.2 1.2 0 0 0-1.2-1.2h-5a1.2 1.2 0 0 0-1.2 1.2v6.4H9.5zm5 19h3v-5.4h-3z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        gl = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(hl, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(vl, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(pl, {
              ...n,
              ref: r
            })]
          })
        }));
      gl.displayName = "Property", gl.category = "GTA Online", gl.variant = "Outline", gl.keywords = "Building, House, City, GTAO, Structure", gl.MD = hl, gl.LG = vl, gl.XL = pl;
      const ml = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M4.205 4.3a.35.35 0 0 0-.32.205l-.554 1.22a.35.35 0 0 0 .095.414l.263.218a1.65 1.65 0 0 1 .517 1.765l-.751 2.377a.35.35 0 0 0 .334.455h1.096a.35.35 0 0 0 .332-.239L6.352 7.31a1.65 1.65 0 0 1 1.566-1.128h3.506a.35.35 0 0 0 .35-.35V4.65a.35.35 0 0 0-.35-.35zm-1.503-.333A1.65 1.65 0 0 1 4.205 3h7.22c.91 0 1.65.739 1.65 1.65v1.182a1.65 1.65 0 0 1-1.65 1.65h-1.239a3.06 3.06 0 0 1-.705 1.514c-.566.639-1.434 1.013-2.63.931l-.4 1.2a1.65 1.65 0 0 1-1.566 1.127H3.79a1.65 1.65 0 0 1-1.574-2.146l.751-2.378a.35.35 0 0 0-.11-.374l-.262-.219a1.65 1.65 0 0 1-.446-1.95zm4.578 4.67c.647-.023 1.013-.26 1.23-.504.167-.189.278-.42.345-.651h-.937a.35.35 0 0 0-.332.24z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        wl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M4.416 6.172A2 2 0 0 1 6.236 5h12.538a2 2 0 0 1 2 2v3.09a2 2 0 0 1-2 2H16.16c-.133.799-.463 1.692-1.124 2.437-.902 1.016-2.288 1.614-4.208 1.474l-.786 2.359a2 2 0 0 1-1.898 1.367H5.14a2 2 0 0 1-1.907-2.602L4.8 12.157l-1.08-.9a2 2 0 0 1-.54-2.365zm7.072 7.85c1.08-.026 1.692-.416 2.052-.822.286-.322.47-.717.576-1.11H12.13zM18.774 7H6.236L5 9.72l1.08.9a2 2 0 0 1 .628 2.14l-1.57 4.967h3.006l2.09-6.268a2 2 0 0 1 1.897-1.368h6.643z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        xl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "m8.33 8.5-1.773 3.9 1.752 1.46a2.25 2.25 0 0 1 .705 2.406L6.73 23.5h4.393l2.988-8.961A2.25 2.25 0 0 1 16.244 13h9.53V8.5zM6.12 7.319A2.25 2.25 0 0 1 8.168 6h17.856a2.25 2.25 0 0 1 2.25 2.25v5a2.25 2.25 0 0 1-2.25 2.25h-4.077c-.166 1.104-.611 2.355-1.531 3.392-1.225 1.38-3.122 2.194-5.78 1.977l-1.198 3.593A2.25 2.25 0 0 1 11.303 26H6.39a2.25 2.25 0 0 1-2.146-2.927l2.337-7.4-1.77-1.475a2.25 2.25 0 0 1-.608-2.66zm9.337 11.087c1.625.004 2.546-.562 3.089-1.173.446-.503.717-1.127.858-1.733h-2.979z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        yl = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(ml, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(wl, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(xl, {
              ...n,
              ref: r
            })]
          })
        }));
      yl.displayName = "Weapon", yl.category = "GTA Online", yl.variant = "Outline", yl.keywords = "Gun, Pistol, GTAO, Fire, Shoot", yl.MD = ml, yl.LG = wl, yl.XL = xl;
      const bl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "m4.483 5.317-.136.488h7.307l-.136-.488-.007-.014a2.227 2.227 0 0 0-.373-.56 1.78 1.78 0 0 0-1.366-.593H6.229a1.78 1.78 0 0 0-1.367.593 2.2 2.2 0 0 0-.38.574m7.042.016v.003zm1.219-.45.016.05.377 1.352.207.767.017.046.066.184c.05.143.115.336.16.497.027.098.034.216.038.27v.005q.008.125.013.295c.006.226.01.517.011.828.003.624-.002 1.346-.009 1.833a91 91 0 0 0-.002 1.683.95.95 0 0 1-.95.957H11.3a.95.95 0 0 1-.95-.95v-1.05h-4.7v1.05a.95.95 0 0 1-.95.95H3.313a.95.95 0 0 1-.95-.957c.002-.411.005-1.15-.003-1.683-.007-.487-.012-1.209-.009-1.833.002-.311.005-.602.012-.828q.005-.17.012-.295v-.005c.004-.054.011-.173.038-.27a9 9 0 0 1 .226-.681l.017-.046.208-.772.376-1.348.016-.05.001-.002.001-.003.004-.008.009-.024.03-.072a3.527 3.527 0 0 1 .603-.91A3.08 3.08 0 0 1 6.23 2.85h3.543c1.108 0 1.862.511 2.324 1.014a3.5 3.5 0 0 1 .633.981l.01.024.003.008.001.003v.002zm-8.86 2.595v.003l-.006.013-.018.05-.06.168a8 8 0 0 0-.124.38l-.004.044q-.005.09-.01.25c-.006.211-.01.49-.011.798-.002.377 0 .791.002 1.166h8.694c.003-.375.004-.79.002-1.166a36 36 0 0 0-.01-.798 8 8 0 0 0-.014-.293 8 8 0 0 0-.185-.55l-.018-.049-.005-.012-.001-.003L12 7.478m.335 4.172h-.685v.7h.686zm-8.67 0v.7h.685v-.7zM4.35 8.8A.65.65 0 0 1 5 8.15h.1a.65.65 0 0 1 0 1.3H5a.65.65 0 0 1-.65-.65m6 0a.65.65 0 0 1 .65-.65h.1a.65.65 0 1 1 0 1.3H11a.65.65 0 0 1-.65-.65",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        jl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: [(0, o.jsx)("path", {
              fill: e,
              d: "M7 12.1a.9.9 0 1 0 0 1.8h.2a.9.9 0 0 0 0-1.8zM16.8 12.1a.9.9 0 1 0 0 1.8h.2a.9.9 0 0 0 0-1.8z"
            }), (0, o.jsx)("path", {
              fill: e,
              d: "m19.481 7.33-.022-.069v-.002l-.001-.002-.002-.004-.005-.013a2 2 0 0 0-.061-.146 5.503 5.503 0 0 0-.94-1.417A4.79 4.79 0 0 0 14.835 4.1h-5.67A4.79 4.79 0 0 0 5.55 5.677a5.5 5.5 0 0 0-.94 1.417l-.06.146-.006.013-.001.004-.001.002v.002l-.023.069-.601 2.155-.335 1.24-.029.08c-.027.073-.064.175-.105.292-.08.23-.182.534-.253.787a2 2 0 0 0-.055.35c-.009.105-.016.229-.02.363-.011.27-.017.612-.02.986-.004.75.004 1.655.015 2.43.013.875.008 2.242.003 2.978A1.4 1.4 0 0 0 4.52 20.4H6.6A1.4 1.4 0 0 0 8 19v-2.1h8V19a1.4 1.4 0 0 0 1.4 1.4h2.08a1.4 1.4 0 0 0 1.4-1.409c-.004-.736-.009-2.103.004-2.978.012-.775.02-1.68.015-2.43a33 33 0 0 0-.019-.986 8 8 0 0 0-.02-.363 2 2 0 0 0-.056-.35c-.07-.253-.173-.558-.253-.787l-.105-.292-.029-.08-.333-1.232zM5.971 8.827l.269-.966.014-.033a3.703 3.703 0 0 1 .622-.933c.462-.504 1.18-.995 2.29-.995h5.669c1.108 0 1.827.49 2.29.995a3.7 3.7 0 0 1 .636.966l.269.966zm-.69 2.495-.007.02-.029.08-.097.27c-.073.21-.154.452-.208.641l-.005.052a7 7 0 0 0-.016.282c-.01.242-.015.561-.017.928-.003.461-.002.987.003 1.505h14.19c.005-.518.007-1.044.004-1.505a31 31 0 0 0-.018-.928 7 7 0 0 0-.02-.334c-.054-.189-.135-.43-.209-.64l-.097-.272-.029-.079-.008-.02-.125-.452-.04-.144-.027-.099H5.474l-.164.607zm12.52 5.578h1.276c-.002.584 0 1.209.002 1.7H17.8zM4.92 18.6c.003-.491.004-1.116.002-1.7H6.2v1.7z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Rl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "m8.091 9.937-.366 1.313h16.55l-.366-1.313-.02-.044a5.08 5.08 0 0 0-.852-1.28c-.634-.69-1.62-1.363-3.14-1.363h-7.794c-1.52 0-2.506.673-3.14 1.363a5 5 0 0 0-.852 1.28zM26.266 9.1l.002.006q.016.047.03.095l.83 2.974.457 1.695.04.108c.037.1.088.242.144.403.11.314.252.734.349 1.082.048.173.066.363.076.475.012.142.021.308.028.488.015.36.022.815.026 1.314.007 1-.004 2.214-.02 3.28-.016 1.05-.012 2.501-.007 3.466a2.253 2.253 0 0 1-2.252 2.265h-2.024a2.25 2.25 0 0 1-2.25-2.25v-2.25h-11.39v2.25a2.25 2.25 0 0 1-2.25 2.25H6.031a2.253 2.253 0 0 1-2.252-2.265c.005-.965.009-2.416-.007-3.466-.016-1.066-.027-2.28-.02-3.28.003-.5.011-.954.026-1.314.007-.18.016-.346.029-.488.01-.112.028-.302.076-.475.096-.349.238-.767.348-1.082a34 34 0 0 1 .184-.511l.46-1.705.827-2.964q.014-.048.03-.095v-.002h.001l.001-.004.003-.006.006-.017a3 3 0 0 1 .085-.202 7.579 7.579 0 0 1 1.294-1.952c.99-1.077 2.603-2.172 4.98-2.172h7.796c2.377 0 3.99 1.095 4.98 2.172a7.6 7.6 0 0 1 1.294 1.952 5 5 0 0 1 .085.202l.006.017zM7.04 13.75l-.266.947-.01.028a23 23 0 0 0-.174.481c-.1.289-.212.622-.286.881l-.007.066a9 9 0 0 0-.021.372c-.013.32-.02.743-.024 1.23-.004.608-.002 1.302.005 1.995h19.486c.007-.693.01-1.387.005-1.994-.003-.488-.01-.912-.024-1.231a9 9 0 0 0-.028-.438c-.074-.26-.185-.592-.286-.88-.052-.15-.1-.28-.134-.373l-.027-.075-.012-.034-.01-.028-.004-.009-.278-.938m.773 8.5h-1.523v2h1.525c-.003-.584-.005-1.303-.002-2m-19.436 0c.003.697 0 1.416-.002 2h1.525v-2zM7.75 17c0-.69.56-1.25 1.25-1.25h.2a1.25 1.25 0 1 1 0 2.5H9c-.69 0-1.25-.56-1.25-1.25m13.8 0c0-.69.56-1.25 1.25-1.25h.2a1.25 1.25 0 1 1 0 2.5h-.2c-.69 0-1.25-.56-1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ml = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(bl, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(jl, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(Rl, {
              ...n,
              ref: r
            })]
          })
        }));
      Ml.displayName = "Car", Ml.category = "GTA Online", Ml.variant = "Outline", Ml.keywords = "Vehicle, Automobile, GTAO, Transport", Ml.MD = bl, Ml.LG = jl, Ml.XL = Rl;
      const Cl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14M6 7.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ll = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10M8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M16 29c7.18 0 13-5.82 13-13S23.18 3 16 3 3 8.82 3 16s5.82 13 13 13m-6-14.25a1.25 1.25 0 1 0 0 2.5h12a1.25 1.25 0 1 0 0-2.5z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        El = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(Cl, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(Ll, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(Sl, {
              ...n,
              ref: r
            })]
          })
        }));
      El.displayName = "MinusCircleSolid", El.category = "Uncategorized", El.variant = "Solid", El.keywords = "Minus, No, Less, n/a, Remove, Delete", El.MD = Cl, El.LG = Ll, El.XL = Sl;
      const Pl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M9.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M9.5 12.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
            })
          })
        }))),
        _l = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M14 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0M14 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
            })
          })
        }))),
        Dl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M19 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0M19 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0M19 25a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
            })
          })
        }))),
        Al = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(Pl, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(_l, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(Dl, {
              ...n,
              ref: r
            })]
          })
        }));
      Al.displayName = "AuxMenuSolid", Al.category = "Uncategorized", Al.variant = "Solid", Al.keywords = "Navigation, Side nav, Dots, Item, More", Al.MD = Pl, Al.LG = _l, Al.XL = Dl;
      const Tl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-3.47-1.47a.75.75 0 0 0-1.06-1.06L7 8.94 5.53 7.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Il = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-5.253-2.336a1 1 0 0 0-1.494-1.328l-4.586 5.159-1.92-2.16a1 1 0 0 0-1.494 1.33l2.666 3a1 1 0 0 0 1.495 0z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Nl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M29 16c0 7.18-5.82 13-13 13S3 23.18 3 16 8.82 3 16 3s13 5.82 13 13m-7.04-3.2a1.25 1.25 0 0 0-1.92-1.6l-5.707 6.847L11.96 15.2a1.25 1.25 0 0 0-1.92 1.6l3.333 4a1.25 1.25 0 0 0 1.92 0z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ol = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(Tl, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(Il, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(Nl, {
              ...n,
              ref: r
            })]
          })
        }));
      Ol.displayName = "CheckCircleSolid", Ol.category = "Uncategorized", Ol.variant = "Solid", Ol.keywords = "Done, Ready, Yes, Available, Completed, Circle, Approve, Success", Ol.MD = Tl, Ol.LG = Il, Ol.XL = Nl;
      const kl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "m3.931 2.303.926.585a6 6 0 0 1 1.751-.726l.241-1.068a7 7 0 0 1 2.302 0l.241 1.068c.628.15 1.217.397 1.751.726l.926-.585c.628.45 1.178 1 1.627 1.628l-.584.926c.329.534.577 1.123.726 1.751l1.068.241a7 7 0 0 1 0 2.302l-1.068.241a6 6 0 0 1-.726 1.751l.585.926c-.45.628-1 1.178-1.628 1.627l-.926-.584a6 6 0 0 1-1.751.726l-.241 1.068a7 7 0 0 1-2.302 0l-.241-1.068a6 6 0 0 1-1.751-.726l-.926.585a7 7 0 0 1-1.628-1.628l.585-.926a6 6 0 0 1-.726-1.751l-1.068-.241a7 7 0 0 1 0-2.302l1.068-.241c.15-.628.397-1.217.726-1.751l-.585-.926a7 7 0 0 1 1.628-1.628M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Hl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "m6.187 3.862 1.323.835a8.5 8.5 0 0 1 2.502-1.037l.344-1.526a10 10 0 0 1 3.288 0l.345 1.526a8.5 8.5 0 0 1 2.501 1.037l1.323-.835a10 10 0 0 1 2.325 2.325l-.835 1.323a8.5 8.5 0 0 1 1.037 2.502l1.526.344a10 10 0 0 1 0 3.288l-1.526.345a8.5 8.5 0 0 1-1.037 2.501l.835 1.323a10 10 0 0 1-2.325 2.325l-1.323-.835a8.5 8.5 0 0 1-2.501 1.037l-.345 1.526a10 10 0 0 1-3.288 0l-.344-1.526a8.5 8.5 0 0 1-2.502-1.037l-1.323.835a10 10 0 0 1-2.325-2.325l.835-1.323A8.5 8.5 0 0 1 3.66 13.99l-1.526-.345a10 10 0 0 1 0-3.288l1.526-.344A8.5 8.5 0 0 1 4.697 7.51l-.835-1.323a10 10 0 0 1 2.325-2.325M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "m8.443 5.42 1.72 1.087a11 11 0 0 1 3.252-1.348l.448-1.984a13.1 13.1 0 0 1 4.274 0l.448 1.984c1.166.276 2.26.736 3.252 1.348l1.72-1.086a13.1 13.1 0 0 1 3.022 3.022l-1.086 1.72a11.1 11.1 0 0 1 1.349 3.252l1.983.448a13.1 13.1 0 0 1 0 4.274l-1.983.448a11.1 11.1 0 0 1-1.349 3.252l1.086 1.72a13.1 13.1 0 0 1-3.022 3.022l-1.72-1.086a11.1 11.1 0 0 1-3.252 1.349l-.448 1.983a13.1 13.1 0 0 1-4.274 0l-.448-1.983a11.1 11.1 0 0 1-3.252-1.349l-1.72 1.086a13.1 13.1 0 0 1-3.022-3.022l1.086-1.72a11 11 0 0 1-1.348-3.252l-1.984-.448a13.1 13.1 0 0 1 0-4.274l1.984-.448c.276-1.166.736-2.26 1.348-3.252L5.42 8.443a13.1 13.1 0 0 1 3.022-3.022M16 22a6 6 0 1 0 0-12 6 6 0 0 0 0 12",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        zl = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(kl, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(Hl, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(Bl, {
              ...n,
              ref: r
            })]
          })
        }));
      zl.displayName = "GearSolid", zl.category = "Uncategorized", zl.variant = "Solid", zl.keywords = "Settings, Preferences, Options, Custom, Customize", zl.MD = kl, zl.LG = Hl, zl.XL = Bl;
      const Vl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M8 7.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6M5 9h6c.75 0 1.5.25 2.25 1s.75 1.75.75 2.5V14H2v-1.5c0-.687.05-1.8.75-2.5S4 9 5 9"
            })
          })
        }))),
        Fl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10M7.5 14h9c1.125 0 2.25.35 3.375 1.4S21 17.85 21 18.9V21H3v-2.1c0-.962.076-2.521 1.125-3.5S6 14 7.5 14"
            })
          })
        }))),
        Gl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M16 4.5a6 6 0 1 0 0 12 6 6 0 0 0 0-12M10 19h12c1.5 0 3 .45 4.5 1.8s1.5 3.15 1.5 4.5V28H4v-2.7c0-1.238.102-3.241 1.5-4.5S8 19 10 19"
            })
          })
        }))),
        Xl = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(Vl, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(Fl, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(Gl, {
              ...n,
              ref: r
            })]
          })
        }));
      Xl.displayName = "PersonSolid", Xl.category = "Uncategorized", Xl.variant = "Solid", Xl.keywords = "Profile, Avatar, Account, User, People, Human", Xl.MD = Vl, Xl.LG = Fl, Xl.XL = Gl;
      const Ul = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M12.98 2.642a.504.504 0 0 0-.652-.613l-9.99 3.48a.502.502 0 0 0-.038.934l3.404 1.506 4.913-3.762c.094-.071.214.048.142.141l-3.71 4.8 2.123 3.623c.224.382.798.31.921-.115z"
            })
          })
        }))),
        ql = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M20.467 4.247c.197-.757-.521-1.435-1.273-1.2L3.702 7.892c-.918.287-.942 1.568-.035 1.889l5.844 2.068 7.513-5.682c.14-.106.317.07.21.21l-5.621 7.325 2.932 6.224c.399.846 1.645.731 1.88-.173z"
            })
          })
        }))),
        Wl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M27.465 5.25c.203-.76-.52-1.442-1.272-1.2L4.692 10.96c-.9.29-.93 1.546-.044 1.877l8.407 3.136 9.576-7.486c.186-.145.427.095.28.28l-7.401 9.372 4.356 8.806c.408.824 1.625.704 1.861-.184z"
            })
          })
        }))),
        Kl = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(Ul, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(ql, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(Wl, {
              ...n,
              ref: r
            })]
          })
        }));
      Kl.displayName = "PaperPlaneSolid", Kl.category = "Uncategorized", Kl.variant = "Solid", Kl.keywords = "Send, Sent, Message, Delivery, Mail", Kl.MD = Ul, Kl.LG = ql, Kl.XL = Wl;
      const $l = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: [(0, o.jsx)("path", {
              fill: e,
              d: "M3 4a1 1 0 0 0-1 1c.113 0 .228.025.336.08L8 7.911l5.665-2.833A.75.75 0 0 1 14 5a1 1 0 0 0-1-1z"
            }), (0, o.jsx)("path", {
              fill: e,
              d: "M14 6.589 8.343 9.417a.75.75 0 0 1-.686 0L2 6.59V11a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1z"
            })]
          })
        }))),
        Yl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: [(0, o.jsx)("path", {
              fill: e,
              d: "M3.25 7.031a1 1 0 0 1 .305.137L12 12.798l8.445-5.63q.146-.096.305-.137A2 2 0 0 0 19 6H5a2 2 0 0 0-1.75 1.031"
            }), (0, o.jsx)("path", {
              fill: e,
              d: "m21 9.202-8.426 5.617a1 1 0 0 1-1.148 0L3 9.202V16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"
            })]
          })
        }))),
        Zl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: [(0, o.jsx)("path", {
              fill: e,
              d: "M4.442 9.08q.162.062.308.17L16 17.688 27.25 9.25q.146-.108.308-.17A2.5 2.5 0 0 0 25.5 8h-19c-.853 0-1.607.428-2.058 1.08"
            }), (0, o.jsx)("path", {
              fill: e,
              d: "m28 11.813-11.228 8.42a1.25 1.25 0 0 1-1.303.149 1.2 1.2 0 0 1-.241-.149L4 11.813V21.5A2.5 2.5 0 0 0 6.5 24h19a2.5 2.5 0 0 0 2.5-2.5z"
            })]
          })
        }))),
        Ql = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)($l, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(Yl, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(Zl, {
              ...n,
              ref: r
            })]
          })
        }));
      Ql.displayName = "EnvelopeSolid", Ql.category = "Uncategorized", Ql.variant = "Solid", Ql.keywords = "Mail, Email, Message, Inbox, Chat, Letter, Invitation", Ql.MD = $l, Ql.LG = Yl, Ql.XL = Zl;
      const Jl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M8 10h4c.5 0 1 .2 1.5.8s.5 1.4.5 2V14H6v-1.2c0-.55.034-1.44.5-2S7.333 10 8 10M12.25 6.5a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0M4 10h2v.059c-.38.101-.665.339-1 .741-.466.56-.5 1.45-.5 2V14H2v-1.2c0-.55.034-1.44.5-2S3.333 10 4 10M7.25 4.629a2.248 2.248 0 0 0 0 3.742 2.25 2.25 0 1 1 0-3.742"
            })
          })
        }))),
        ei = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M12 15h6c.75 0 1.5.3 2.25 1.2s.75 2.1.75 3V21H9v-1.8c0-.825.05-2.16.75-3S11 15 12 15M18.5 9.75a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0M6 15h3v.041c-.436.073-.797.273-1.25.816C7 16.757 7 17.84 7 19.2V21H3v-1.8c0-.825.05-2.16.75-3S5 15 6 15M10.688 6.835a3.25 3.25 0 1 0 .228 5.706A5.48 5.48 0 0 1 10 9.5c0-.967.25-1.876.688-2.665"
            })
          })
        }))),
        ti = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M16 20h8c1 0 2 .4 3 1.6s1 2.8 1 4V28H12v-2.4c0-1.1.068-2.881 1-4s1.667-1.6 3-1.6M25 12.5a5 5 0 1 1-10 0 5 5 0 0 1 10 0M14.5 8.169A5 5 0 0 0 12 12.5a5 5 0 0 0 2.5 4.331 5 5 0 1 1 0-8.662M8 20h4v.117c-.762.204-1.33.679-2 1.483-.932 1.119-1 2.9-1 4V28H4v-2.4c0-1.1.068-2.881 1-4S6.667 20 8 20"
            })
          })
        }))),
        ri = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(Jl, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(ei, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(ti, {
              ...n,
              ref: r
            })]
          })
        }));
      ri.displayName = "TwoPeopleSolid", ri.category = "Uncategorized", ri.variant = "Solid", ri.keywords = "People, Humans, Persons, Users, Friends, Multiple, Group", ri.MD = Jl, ri.LG = ei, ri.XL = ti;
      const ni = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M7.227 2.148a1.146 1.146 0 0 1 1.546 0l4.996 4.497a1.15 1.15 0 1 1-1.538 1.71L9.15 5.582V13a1.15 1.15 0 0 1-2.3 0V5.582L3.77 8.355a1.15 1.15 0 0 1-1.54-1.71z"
            })
          })
        }))),
        oi = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M13.02 2.9a1.5 1.5 0 0 0-2.04 0l-7 6.5a1.5 1.5 0 0 0 2.04 2.2l4.48-4.16V19a1.5 1.5 0 0 0 3 0V7.44l4.48 4.16a1.5 1.5 0 0 0 2.04-2.2z"
            })
          })
        }))),
        ai = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M16 3.25c.5 0 .95.21 1.27.546l9.997 10.497a1.75 1.75 0 1 1-2.534 2.414L17.75 9.375V25a1.75 1.75 0 1 1-3.5 0V9.375l-6.983 7.332a1.75 1.75 0 1 1-2.534-2.414L14.73 3.796c.32-.336.77-.546 1.27-.546"
            })
          })
        }))),
        li = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(ni, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(oi, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(ai, {
              ...n,
              ref: r
            })]
          })
        }));
      li.displayName = "ArrowUpSolid", li.category = "Uncategorized", li.variant = "Solid", li.keywords = "Up, Navigation, Increase", li.MD = ni, li.LG = oi, li.XL = ai;
      const ii = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M8 1.85c.635 0 1.15.515 1.15 1.15v7.418l3.08-2.773a1.15 1.15 0 1 1 1.54 1.71l-5 4.5a1.15 1.15 0 0 1-1.54 0l-5-4.5a1.15 1.15 0 0 1 1.54-1.71l3.08 2.773V3c0-.635.515-1.15 1.15-1.15"
            })
          })
        }))),
        si = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M13.5 5a1.5 1.5 0 0 0-3 0v10.56L6.02 11.4a1.5 1.5 0 0 0-2.04 2.2l6.996 6.496a1.5 1.5 0 0 0 .297.217c.213.118.457.185.718.187h.019a1.5 1.5 0 0 0 1.014-.404L20.02 13.6a1.5 1.5 0 0 0-2.042-2.198L13.5 15.56z"
            })
          })
        }))),
        ci = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M17.75 7a1.75 1.75 0 1 0-3.5 0v15.625l-6.983-7.332a1.75 1.75 0 1 0-2.534 2.414l9.997 10.497c.319.336.77.546 1.27.546a1.74 1.74 0 0 0 1.27-.546l9.997-10.497a1.75 1.75 0 1 0-2.534-2.414l-6.983 7.332z"
            })
          })
        }))),
        di = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(ii, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(si, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(ci, {
              ...n,
              ref: r
            })]
          })
        }));
      di.displayName = "ArrowDownSolid", di.category = "Uncategorized", di.variant = "Solid", di.keywords = "Down, Navigation, Decrease", di.MD = ii, di.LG = si, di.XL = ci;
      const ui = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M8.355 3.77a1.15 1.15 0 0 0-1.71-1.54L2.148 7.229a1.146 1.146 0 0 0 0 1.545l4.497 4.996a1.15 1.15 0 1 0 1.71-1.538L5.582 9.15H13a1.15 1.15 0 0 0 0-2.3H5.582z"
            })
          })
        }))),
        fi = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M12.6 6.02a1.5 1.5 0 0 0-2.2-2.04l-6.496 6.996A1.5 1.5 0 0 0 3.5 12a1.5 1.5 0 0 0 .404 1.024L10.4 20.02a1.5 1.5 0 0 0 2.198-2.042L8.44 13.5H19a1.5 1.5 0 0 0 0-3H8.44z"
            })
          })
        }))),
        hi = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M16.707 7.267a1.75 1.75 0 1 0-2.414-2.534L3.796 14.73c-.336.32-.546.77-.546 1.27s.21.95.546 1.27l10.497 9.997a1.75 1.75 0 1 0 2.414-2.534L9.375 17.75H25a1.75 1.75 0 1 0 0-3.5H9.375z"
            })
          })
        }))),
        vi = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(ui, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(fi, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(hi, {
              ...n,
              ref: r
            })]
          })
        }));
      vi.displayName = "ArrowLeftSolid", vi.category = "Uncategorized", vi.variant = "Solid", vi.keywords = "Left, Navigation, Back", vi.MD = ui, vi.LG = fi, vi.XL = hi;
      const pi = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M9.355 2.23a1.15 1.15 0 1 0-1.71 1.54l2.773 3.08H3a1.15 1.15 0 1 0 0 2.3h7.418l-2.773 3.08a1.15 1.15 0 1 0 1.71 1.54l4.497-4.997a1.145 1.145 0 0 0 0-1.545z"
            })
          })
        }))),
        gi = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M13.6 3.98a1.5 1.5 0 0 0-2.2 2.04l4.16 4.48H5a1.5 1.5 0 0 0 0 3h10.56l-4.16 4.48a1.5 1.5 0 0 0 2.2 2.04l6.496-6.996A1.5 1.5 0 0 0 20.5 12a1.5 1.5 0 0 0-.4-1.02M13.6 3.98l6.496 6.996z"
            })
          })
        }))),
        mi = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M15.293 24.733a1.75 1.75 0 1 0 2.414 2.534l10.497-9.997c.336-.32.546-.77.546-1.27s-.21-.951-.546-1.27L17.707 4.733a1.75 1.75 0 1 0-2.414 2.534l7.332 6.983H7a1.75 1.75 0 1 0 0 3.5h15.625z"
            })
          })
        }))),
        wi = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(pi, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(gi, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(mi, {
              ...n,
              ref: r
            })]
          })
        }));
      wi.displayName = "ArrowRightSolid", wi.category = "Uncategorized", wi.variant = "Solid", wi.keywords = "Right, Navigation, Forward", wi.MD = pi, wi.LG = gi, wi.XL = mi;
      const xi = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-6.267 4.22c1.777-.182 2.767-1.126 2.767-2.543 0-1.356-.918-2.034-2.158-2.313l-2.17-.484c-.561-.121-.836-.4-.836-.872 0-.617.49-.92 1.598-.92 1.116 0 1.635.298 1.803.97.037.149.161.265.314.265h1.035c.173 0 .311-.146.284-.317-.196-1.227-1.097-2.1-2.637-2.323V2.3a.3.3 0 0 0-.3-.3h-.711a.3.3 0 0 0-.3.3v1.359c-1.968.17-2.767 1.32-2.767 2.519 0 1.162.727 1.985 1.98 2.264l2.301.509c.632.145.883.4.883.871 0 .666-.525.981-1.73.981-1.223 0-1.791-.327-1.925-1.069-.029-.158-.158-.287-.32-.287H4.81c-.17 0-.306.14-.286.308.166 1.408 1.184 2.295 2.899 2.465v1.48a.3.3 0 0 0 .3.3h.711a.3.3 0 0 0 .3-.3z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        yi = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-9.057 5.627c2.284-.242 3.557-1.502 3.557-3.39 0-1.81-1.18-2.713-2.775-3.085l-2.79-.645c-.721-.162-1.074-.533-1.074-1.163 0-.823.629-1.227 2.055-1.227 1.386 0 2.056.37 2.294 1.205.07.246.276.442.531.442h1.107c.287 0 .519-.243.468-.526-.284-1.582-1.435-2.702-3.373-2.994V4.5a.5.5 0 0 0-.5-.5h-.687a.5.5 0 0 0-.5.5v1.712C8.726 6.438 7.7 7.972 7.7 9.57c0 1.55.936 2.648 2.546 3.02l2.959.677c.812.194 1.134.533 1.134 1.163 0 .888-.674 1.308-2.223 1.308-1.521 0-2.255-.41-2.457-1.33-.058-.263-.27-.479-.54-.479H8.015c-.282 0-.511.234-.473.514.25 1.817 1.55 2.962 3.714 3.184V19.5a.5.5 0 0 0 .5.5h.687a.5.5 0 0 0 .5-.5z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        bi = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M29 16c0 7.18-5.82 13-13 13S3 23.18 3 16 8.82 3 16 3s13 5.82 13 13m-11.847 7.033c2.792-.302 4.347-1.877 4.347-4.238 0-2.26-1.443-3.39-3.392-3.855l-3.41-.807c-.881-.202-1.312-.666-1.312-1.453 0-1.03.768-1.534 2.51-1.534 1.752 0 2.568.496 2.832 1.614.059.25.268.445.524.445h1.569c.287 0 .518-.243.475-.527-.307-2.046-1.723-3.5-4.143-3.873V6.5a.5.5 0 0 0-.5-.5H15.59a.5.5 0 0 0-.5.5v2.265c-3.092.282-4.347 2.2-4.347 4.198 0 1.937 1.143 3.31 3.11 3.774l3.617.847c.993.242 1.387.666 1.387 1.453 0 1.11-.825 1.635-2.718 1.635-1.921 0-2.815-.546-3.026-1.78-.045-.265-.26-.48-.53-.48h-1.57a.47.47 0 0 0-.479.513c.262 2.347 1.862 3.826 4.556 4.108V25.5a.5.5 0 0 0 .5.5h1.062a.5.5 0 0 0 .5-.5z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ji = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(xi, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(yi, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(bi, {
              ...n,
              ref: r
            })]
          })
        }));
      ji.displayName = "CurrencySolid", ji.category = "Uncategorized", ji.variant = "Solid", ji.keywords = "Money, Cash, Finance, Refund, Donation, Coin, Gold, Dollar, Bank, Payment, Purchase, Value", ji.MD = xi, ji.LG = yi, ji.XL = bi;
      const Ri = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "m9.204 10.812.148-.19.72-.92c.176-.228.407-.352.696-.333.123.008.251.044.36.1.63.316 1.254.642 1.88.965.18.093.363.182.541.278.444.24.582.728.315 1.156q-.502.812-1.03 1.605c-.226.337-.556.53-.964.527a6.4 6.4 0 0 1-1.595-.206c-.996-.269-1.916-.707-2.783-1.26A13.2 13.2 0 0 1 5.041 10.5a12.7 12.7 0 0 1-1.899-2.545c-.42-.745-.764-1.524-.957-2.36-.086-.372-.115-.757-.166-1.137a1.4 1.4 0 0 1 .022-.58c.075-.28.221-.516.462-.679.54-.365 1.083-.727 1.633-1.078a.783.783 0 0 1 1.101.276c.196.346.37.703.55 1.056q.37.716.734 1.435a.79.79 0 0 1-.22 1.004q-.526.415-1.06.822c-.06.046-.068.08-.03.147.29.526.604 1.037.985 1.504a9.4 9.4 0 0 0 2.984 2.442c.005.002.01.001.024.004"
            })
          })
        }))),
        Mi = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M13.805 16.217q.11-.137.223-.284l1.079-1.38c.266-.342.612-.528 1.046-.499.183.012.376.065.54.149.944.475 1.88.964 2.82 1.448.27.14.544.272.81.418.666.36.874 1.09.474 1.733a89 89 0 0 1-1.546 2.408c-.338.505-.834.796-1.446.79a9.6 9.6 0 0 1-2.393-.308c-1.494-.404-2.874-1.062-4.174-1.891a19.8 19.8 0 0 1-3.677-3.049 19 19 0 0 1-2.847-3.817c-.63-1.119-1.147-2.288-1.436-3.54-.13-.559-.173-1.136-.25-1.706-.039-.29-.046-.582.033-.87.113-.42.332-.774.693-1.018.81-.549 1.625-1.092 2.45-1.617a1.174 1.174 0 0 1 1.652.412c.293.52.554 1.056.825 1.585q.554 1.074 1.1 2.152a1.184 1.184 0 0 1-.33 1.506q-.787.624-1.589 1.233c-.09.07-.102.12-.046.22.437.79.907 1.556 1.479 2.257 1.244 1.523 2.725 2.756 4.475 3.662.007.004.014.003.035.006"
            })
          })
        }))),
        Ci = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M18.407 21.623q.146-.183.297-.379l1.439-1.84c.354-.456.816-.703 1.394-.665.244.015.501.087.72.198 1.26.633 2.508 1.285 3.76 1.93.36.187.726.364 1.082.558.887.48 1.163 1.455.63 2.312a119 119 0 0 1-2.061 3.21c-.451.674-1.111 1.06-1.928 1.053-1.076-.013-2.148-.129-3.19-.411-1.992-.538-3.832-1.415-5.566-2.521a26.3 26.3 0 0 1-4.903-4.065 25.5 25.5 0 0 1-3.796-5.09c-.84-1.492-1.53-3.05-1.915-4.72-.171-.745-.23-1.514-.332-2.274-.052-.387-.062-.776.043-1.16.15-.56.443-1.033.924-1.358a143 143 0 0 1 3.268-2.156c.754-.481 1.76-.23 2.202.55.39.692.738 1.408 1.1 2.114.49.955.983 1.91 1.467 2.868.362.716.19 1.51-.44 2.009q-1.051.831-2.12 1.644c-.118.092-.136.16-.061.293.583 1.052 1.21 2.074 1.972 3.008 1.66 2.031 3.634 3.675 5.967 4.884.01.005.019.003.047.008"
            })
          })
        }))),
        Li = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(Ri, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(Mi, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(Ci, {
              ...n,
              ref: r
            })]
          })
        }));
      Li.displayName = "PhoneSolid", Li.category = "Uncategorized", Li.variant = "Solid", Li.keywords = "", Li.MD = Ri, Li.LG = Mi, Li.XL = Ci;
      const Si = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M2 3.5V14l2.5-2.5h8A1.5 1.5 0 0 0 14 10V3.5A1.5 1.5 0 0 0 12.5 2h-9A1.5 1.5 0 0 0 2 3.5"
            })
          })
        }))),
        Ei = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M3 5v16l3.75-3.75H19a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2"
            })
          })
        }))),
        Pi = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M4 6.5V28l5-5h16.5a2.5 2.5 0 0 0 2.5-2.5v-14A2.5 2.5 0 0 0 25.5 4h-19A2.5 2.5 0 0 0 4 6.5"
            })
          })
        }))),
        _i = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(Si, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(Ei, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(Pi, {
              ...n,
              ref: r
            })]
          })
        }));
      _i.displayName = "ChatBubbleSolid", _i.category = "Uncategorized", _i.variant = "Solid", _i.keywords = "Message, Support, DM, Communication, Conversation", _i.MD = Si, _i.LG = Ei, _i.XL = Pi;
      const Di = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M2 3.5A1.5 1.5 0 0 1 3.5 2h9A1.5 1.5 0 0 1 14 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 12.5z"
            })
          })
        }))),
        Ai = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
            })
          })
        }))),
        Ti = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M4 8a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"
            })
          })
        }))),
        Ii = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(Di, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(Ai, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(Ti, {
              ...n,
              ref: r
            })]
          })
        }));
      Ii.displayName = "SquareSolid", Ii.category = "Uncategorized", Ii.variant = "Solid", Ii.keywords = "Checkbox, Shape, Empty, Selection, Unchecked, Unselected, Maximize", Ii.MD = Di, Ii.LG = Ai, Ii.XL = Ti;
      const Ni = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M3.5 2A1.5 1.5 0 0 0 2 3.5v9A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 12.5 2zm8.03 4.53a.75.75 0 0 0-1.06-1.06L7 8.94 5.53 7.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Oi = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm11.747 6.664a1 1 0 0 0-1.494-1.328l-4.586 5.159-1.92-2.16a1 1 0 0 0-1.494 1.33l2.666 3a1 1 0 0 0 1.495 0z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ki = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M8 4a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4zm13.96 8.8a1.25 1.25 0 0 0-1.92-1.6l-5.707 6.847L11.96 15.2a1.25 1.25 0 0 0-1.92 1.6l3.333 4a1.25 1.25 0 0 0 1.92 0z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Hi = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(Ni, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(Oi, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(ki, {
              ...n,
              ref: r
            })]
          })
        }));
      Hi.displayName = "CheckSquareSolid", Hi.category = "Uncategorized", Hi.variant = "Solid", Hi.keywords = "Checkbox, Selection, Checked, Completed, Check Mark, To do, Done, Approved, Selected", Hi.MD = Ni, Hi.LG = Oi, Hi.XL = ki;
      const Bi = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M3.5 2A1.5 1.5 0 0 0 2 3.5v9A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 12.5 2zM6 7.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        zi = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm3 8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M8 4a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4zm2 10.75a1.25 1.25 0 1 0 0 2.5h12a1.25 1.25 0 1 0 0-2.5z",
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
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(Bi, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(zi, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(Vi, {
              ...n,
              ref: r
            })]
          })
        }));
      Fi.displayName = "MinusSquareSolid", Fi.category = "Uncategorized", Fi.variant = "Solid", Fi.keywords = "Checkbox, Partial, Selection, Intermediate, Remove, Minus, Delete, Indeterminate", Fi.MD = Bi, Fi.LG = zi, Fi.XL = Vi;
      const Gi = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M18.71 4.056c-.802.342-2.216.82-3.182.455-1.042-.394-2.421-1.697-3.076-2.356a.53.53 0 0 0-.751 0c-.655.66-2.035 1.962-3.077 2.356-.977.37-2.415-.125-3.212-.468-.3-.13-.657.033-.723.354-.419 2.059-1.54 8.661.483 12.271 2.203 3.933 6.127 4.932 6.804 5.078a.4.4 0 0 0 .198-.006c.697-.191 4.91-1.48 6.807-5.072 1.73-3.276.81-10.083.46-12.234-.054-.333-.42-.51-.73-.378M16.748 9.43a1 1 0 0 0-1.494-1.329l-4.586 5.16-1.92-2.16a1 1 0 0 0-1.494 1.33l2.666 3a1 1 0 0 0 1.495 0z",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M24.904 5.94c-1.11.309-2.815.639-4.03.203-1.326-.474-3.048-1.958-4.011-2.856a1.086 1.086 0 0 0-1.472 0c-.963.898-2.685 2.382-4.01 2.856-1.253.449-3.085.085-4.233-.231-.574-.159-1.186.165-1.307.748-.598 2.871-1.89 10.76.792 15.287 2.826 4.77 7.711 6.22 9.11 6.547.254.06.511.052.762-.02 1.447-.41 6.675-2.158 9.116-6.527 2.294-4.105 1.154-12.218.623-15.22-.107-.607-.746-.953-1.34-.788m-2.921 6.435a1.25 1.25 0 1 0-1.92-1.6l-5.707 6.847-2.373-2.847a1.25 1.25 0 1 0-1.92 1.6l3.333 4a1.25 1.25 0 0 0 1.92 0z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ui = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M12.677 2.46c-.537.212-1.561.535-2.251.269-.694-.268-1.603-1.129-2.07-1.603a.43.43 0 0 0-.608 0c-.466.474-1.376 1.335-2.07 1.603-.697.268-1.735-.064-2.268-.275-.178-.07-.383.027-.421.215-.276 1.33-1.099 5.998.316 8.57 1.524 2.77 4.247 3.46 4.686 3.556q.061.013.12-.004c.454-.126 3.376-1.024 4.688-3.553 1.21-2.334.534-7.156.304-8.548-.032-.194-.242-.301-.426-.23M11.53 6.339a.75.75 0 0 0-1.06-1.061L7 8.747l-1.47-1.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        qi = (0, m.forwardRef)((({
          size: e = "LG",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["LG" === e && (0, o.jsx)(Gi, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(Xi, {
              ...n,
              ref: r
            }), "MD" === e && (0, o.jsx)(Ui, {
              ...n,
              ref: r
            })]
          })
        }));
      qi.displayName = "CheckShieldSolid", qi.category = "Uncategorized", qi.variant = "Solid", qi.keywords = "Protection, Security, Verification, Safety, Defense, Secure", qi.LG = Gi, qi.XL = Xi, qi.MD = Ui;
      const Wi = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: [(0, o.jsx)("path", {
              fill: e,
              d: "M7 8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M8.337 10H4.5c-.833 0-1.292.24-1.875.8S2 12.25 2 12.8V14h7.05A3.5 3.5 0 0 1 8 11.5c0-.537.12-1.045.337-1.5"
            }), (0, o.jsx)("path", {
              fill: e,
              d: "M14 11.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-2.5-1.6a.35.35 0 0 1 .35.35v.9h.9a.35.35 0 1 1 0 .7h-.9v.9a.35.35 0 1 1-.7 0v-.9h-.9a.35.35 0 1 1 0-.7h.9v-.9a.35.35 0 0 1 .35-.35",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Ki = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: [(0, o.jsx)("path", {
              fill: e,
              d: "M14.5 9a4 4 0 1 1-8 0 4 4 0 0 1 8 0M12.144 15H6.75c-1.25 0-1.938.36-2.812 1.2-.875.84-.938 2.175-.938 3V21h10.6a5.24 5.24 0 0 1-1.85-4c0-.708.14-1.384.394-2"
            }), (0, o.jsx)("path", {
              fill: e,
              d: "M21 17a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-4-2.65a.65.65 0 0 1 .65.65v1.35H19a.65.65 0 1 1 0 1.3h-1.35V19a.65.65 0 1 1-1.3 0v-1.35H15a.65.65 0 1 1 0-1.3h1.35V15a.65.65 0 0 1 .65-.65",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        $i = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: [(0, o.jsx)("path", {
              fill: e,
              d: "M14 7.5a5 5 0 1 0 0 10 5 5 0 0 0 0-10M18.846 28a6.49 6.49 0 0 1-2.346-5c0-1.082.264-2.102.732-3H9c-1.667 0-2.585.481-3.75 1.6S4 24.5 4 25.6V28z"
            }), (0, o.jsx)("path", {
              fill: e,
              d: "M28 23a5 5 0 1 1-10 0 5 5 0 0 1 10 0m-5-3.25a.75.75 0 0 1 .75.75v1.75h1.75a.75.75 0 0 1 0 1.5h-1.75v1.75a.75.75 0 0 1-1.5 0v-1.75H20.5a.75.75 0 0 1 0-1.5h1.75V20.5a.75.75 0 0 1 .75-.75",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Yi = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(Wi, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(Ki, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)($i, {
              ...n,
              ref: r
            })]
          })
        }));
      Yi.displayName = "PersonPlusSolid", Yi.category = "Uncategorized", Yi.variant = "Solid", Yi.keywords = "User, Add, Contact, Friend, Follow, People, Person, Profile", Yi.MD = Wi, Yi.LG = Ki, Yi.XL = $i;
      const Zi = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: [(0, o.jsx)("path", {
              fill: e,
              d: "M7 8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M8.337 10H4.5c-.833 0-1.292.24-1.875.8S2 12.25 2 12.8V14h7.05A3.5 3.5 0 0 1 8 11.5c0-.537.12-1.045.337-1.5"
            }), (0, o.jsx)("path", {
              fill: e,
              d: "M14 11.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-4.1 0a.35.35 0 0 1 .35-.35h2.5a.35.35 0 1 1 0 .7h-2.5a.35.35 0 0 1-.35-.35",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Qi = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: [(0, o.jsx)("path", {
              fill: e,
              d: "M14.5 9a4 4 0 1 1-8 0 4 4 0 0 1 8 0M12.144 15H6.75c-1.25 0-1.938.36-2.812 1.2-.875.84-.938 2.175-.938 3V21h10.6a5.24 5.24 0 0 1-1.85-4c0-.708.14-1.384.394-2"
            }), (0, o.jsx)("path", {
              fill: e,
              d: "M21 17a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-6.65 0a.65.65 0 0 1 .65-.65h4a.65.65 0 1 1 0 1.3h-4a.65.65 0 0 1-.65-.65",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: [(0, o.jsx)("path", {
              fill: e,
              d: "M14 7.5a5 5 0 1 0 0 10 5 5 0 0 0 0-10M18.846 28a6.49 6.49 0 0 1-2.346-5c0-1.082.264-2.102.732-3H9c-1.667 0-2.585.481-3.75 1.6S4 24.5 4 25.6V28z"
            }), (0, o.jsx)("path", {
              fill: e,
              d: "M28 23a5 5 0 1 1-10 0 5 5 0 0 1 10 0m-8.25 0a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        es = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(Zi, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(Qi, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(Ji, {
              ...n,
              ref: r
            })]
          })
        }));
      es.displayName = "PersonMinusSolid", es.category = "Uncategorized", es.variant = "Solid", es.keywords = "Person, Profile, Remove, User, Delete, People, Unfriend, Friend, Unfollow", es.MD = Zi, es.LG = Qi, es.XL = Ji;
      const ts = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: [(0, o.jsx)("path", {
              fill: e,
              d: "M7 8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M8.337 10H4.5c-.833 0-1.292.24-1.875.8S2 12.25 2 12.8V14h7.05A3.5 3.5 0 0 1 8 11.5c0-.537.12-1.045.337-1.5"
            }), (0, o.jsx)("path", {
              fill: e,
              d: "M11.75 8.45a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6m-1.7 2.8c0-.269.062-.523.173-.749l2.276 2.276a1.7 1.7 0 0 1-2.449-1.527m3.227.749L11 9.723a1.7 1.7 0 0 1 2.275 2.275",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        rs = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: [(0, o.jsx)("path", {
              fill: e,
              d: "M14.5 9a4 4 0 1 1-8 0 4 4 0 0 1 8 0M12.144 15H6.75c-1.25 0-1.938.36-2.812 1.2-.875.84-.938 2.175-.938 3V21h10.6a5.24 5.24 0 0 1-1.85-4c0-.708.14-1.384.394-2"
            }), (0, o.jsx)("path", {
              fill: e,
              d: "M17 13.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5m-2.25 3.75c0-.347.079-.676.22-.97l3 3a2.25 2.25 0 0 1-3.22-2.03m4.28.97-3-3a2.25 2.25 0 0 1 3 3",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: [(0, o.jsx)("path", {
              fill: e,
              d: "M14 7.5a5 5 0 1 0 0 10 5 5 0 0 0 0-10M18.846 28a6.49 6.49 0 0 1-2.346-5c0-1.082.264-2.102.732-3H9c-1.667 0-2.585.481-3.75 1.6S4 24.5 4 25.6V28z"
            }), (0, o.jsx)("path", {
              fill: e,
              d: "M23 18.05a4.95 4.95 0 1 0 0 9.9 4.95 4.95 0 0 0 0-9.9M19.95 23c0-.496.118-.964.328-1.378l4.1 4.1A3.05 3.05 0 0 1 19.95 23m5.772 1.378-4.1-4.1a3.05 3.05 0 0 1 4.1 4.1",
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
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(ts, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(rs, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(ns, {
              ...n,
              ref: r
            })]
          })
        }));
      os.displayName = "PersonBlockSolid", os.category = "Uncategorized", os.variant = "Solid", os.keywords = "User, Blocked, Contact, Unfriend, Restricted", os.MD = ts, os.LG = rs, os.XL = ns;
      const as = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M2 10.5v-5A1.5 1.5 0 0 1 3.5 4h9A1.5 1.5 0 0 1 14 5.5v5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 10.5m7.1-3.9c0-.22.18-.4.4-.4H12a.4.4 0 0 1 0 .8H9.5a.4.4 0 0 1-.4-.4m.4 1.1a.4.4 0 0 0 0 .8H12a.4.4 0 0 0 0-.8zm-.4 1.9c0-.22.18-.4.4-.4h1a.4.4 0 0 1 0 .8h-1a.4.4 0 0 1-.4-.4M7 6.96c0 .53-.448.96-1 .96s-1-.43-1-.96S5.448 6 6 6s1 .43 1 .96M7 8.4H5c-.333 0-.517.096-.75.32S4 9.3 4 9.52V10h4v-.48c0-.24 0-.56-.25-.8S7.25 8.4 7 8.4",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ls = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M3 16V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2m5-4.12c.828 0 1.5-.645 1.5-1.44S8.828 9 8 9s-1.5.645-1.5 1.44.672 1.44 1.5 1.44m-1.5.72h3c.375 0 .75.12 1.125.48s.375.84.375 1.2V15H5v-.72c0-.33.025-.864.375-1.2S6 12.6 6.5 12.6m6.3-3.95a.65.65 0 0 0 0 1.3h5.5a.65.65 0 1 0 0-1.3zm-.65 3.15a.65.65 0 0 1 .65-.65h5.5a.65.65 0 1 1 0 1.3h-5.5a.65.65 0 0 1-.65-.65m.65 1.85a.65.65 0 0 0 0 1.3h3.3a.65.65 0 1 0 0-1.3z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        is = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M4 22.5v-13A2.5 2.5 0 0 1 6.5 7h19A2.5 2.5 0 0 1 28 9.5v13a2.5 2.5 0 0 1-2.5 2.5h-19A2.5 2.5 0 0 1 4 22.5m7-6.66c1.105 0 2-.86 2-1.92S12.105 12 11 12s-2 .86-2 1.92.895 1.92 2 1.92m-2 .96h4c.5 0 1 .16 1.5.64s.5 1.12.5 1.6V20H7v-.96c0-.44.034-1.152.5-1.6s.833-.64 1.5-.64m8.5-4.7a.9.9 0 1 0 0 1.8h7a.9.9 0 1 0 0-1.8zm-.9 3.9a.9.9 0 0 1 .9-.9h7a.9.9 0 1 1 0 1.8h-7a.9.9 0 0 1-.9-.9m.9 2.1a.9.9 0 1 0 0 1.8h4a.9.9 0 1 0 0-1.8z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ss = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(as, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(ls, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(is, {
              ...n,
              ref: r
            })]
          })
        }));
      ss.displayName = "IdentificationSolid", ss.category = "Uncategorized", ss.variant = "Solid", ss.keywords = "ID, Card, Access, Information, Security, Privacy, Proof, Personal, Verification", ss.MD = as, ss.LG = ls, ss.XL = is;
      const cs = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M4.269 4.013q.01-.119.03-.256a4.1 4.1 0 0 1 .569-1.588C5.592 1.029 6.835.75 7.994.75c1.229 0 2.384.422 3.095 1.372.423.563.576 1.187.631 1.64q.017.135.023.253A2 2 0 0 1 13.5 6v6a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V6a2 2 0 0 1 1.769-1.987m1.865-1.04c.309-.486.883-.723 1.86-.723.908 0 1.546.306 1.895.771.21.281.306.622.342.922l.007.057H5.78l.003-.025c.046-.31.147-.68.351-1.002M8 7.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V8A.75.75 0 0 1 8 7.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ds = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M6.035 7.158q.017-.169.045-.36c.103-.703.343-1.656.91-2.55C8.129 2.459 10.089 2 11.99 2c1.995 0 3.833.684 4.959 2.186.668.892.915 1.884 1.004 2.614q.022.194.034.366A3 3 0 0 1 20 10v8a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-8c0-1.32.852-2.44 2.035-2.842M8.68 5.321C9.263 4.402 10.331 4 11.99 4c1.566 0 2.717.53 3.358 1.385.377.502.547 1.099.614 1.615h-7.89c.085-.52.261-1.134.607-1.679M12 11.5a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M7.759 10.398c.012-.284.04-.647.101-1.06.143-.97.475-2.282 1.254-3.51 1.55-2.44 4.228-3.078 6.872-3.078 2.76 0 5.283.946 6.822 3 .915 1.221 1.255 2.582 1.377 3.588.05.41.065.773.065 1.064A4 4 0 0 1 26.5 14v10a4 4 0 0 1-4 4h-13a4 4 0 0 1-4-4V14a4 4 0 0 1 2.259-3.602m3.465-3.229c.859-1.352 2.422-1.919 4.762-1.919 2.225 0 3.887.752 4.822 2 .561.75.804 1.639.895 2.39q.022.19.034.36H10.295q.015-.142.039-.297c.112-.765.363-1.704.89-2.534M16 15.75c.69 0 1.25.56 1.25 1.25v4a1.25 1.25 0 1 1-2.5 0v-4c0-.69.56-1.25 1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        fs = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(cs, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(ds, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(us, {
              ...n,
              ref: r
            })]
          })
        }));
      fs.displayName = "PadlockSolid", fs.category = "Uncategorized", fs.variant = "Solid", fs.keywords = "Lock, Password, Safe, Protection, Secure, Security, Latch", fs.MD = cs, fs.LG = ds, fs.XL = us;
      const hs = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M4.269 4.013q.01-.119.03-.256a4.1 4.1 0 0 1 .569-1.588C5.592 1.029 6.835.75 7.994.75c1.229 0 2.384.422 3.095 1.372.423.563.576 1.187.631 1.64q.017.135.023.253A2 2 0 0 1 13.5 6v6a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V6a2 2 0 0 1 1.769-1.987m1.865-1.04c.309-.486.883-.723 1.86-.723.908 0 1.546.306 1.895.771.21.281.306.622.342.922l.007.057H5.78l.003-.025c.046-.31.147-.68.351-1.002M7.25 9A.75.75 0 0 1 8 8.25h.1a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 9m3.25-.75a.75.75 0 0 0 0 1.5h.1a.75.75 0 0 0 0-1.5zM4.75 9a.75.75 0 0 1 .75-.75h.1a.75.75 0 0 1 0 1.5h-.1A.75.75 0 0 1 4.75 9",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        vs = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M6.035 7.158q.017-.169.045-.36c.103-.703.343-1.656.91-2.55C8.129 2.459 10.089 2 11.99 2c1.995 0 3.833.684 4.959 2.186.668.892.915 1.884 1.004 2.614q.022.194.034.366A3 3 0 0 1 20 10v8a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-8c0-1.32.852-2.44 2.035-2.842M8.68 5.321C9.263 4.402 10.331 4 11.99 4c1.566 0 2.717.53 3.358 1.385.377.502.547 1.099.614 1.615h-7.89c.085-.52.261-1.134.607-1.679M11 14a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1m4.5-1a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zm-8 1a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2h-.1a1 1 0 0 1-1-1",
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
        }, a) => (0, o.jsx)(Ee, {
          label: r,
          children: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, o.jsx)("path", {
              fill: e,
              d: "M7.759 10.398c.012-.284.04-.647.101-1.06.143-.97.475-2.282 1.254-3.51 1.55-2.44 4.228-3.078 6.872-3.078 2.76 0 5.283.946 6.822 3 .915 1.221 1.255 2.582 1.377 3.588.05.41.065.773.065 1.064A4 4 0 0 1 26.5 14v10a4 4 0 0 1-4 4h-13a4 4 0 0 1-4-4V14a4 4 0 0 1 2.259-3.602m3.465-3.229c.859-1.352 2.422-1.919 4.762-1.919 2.225 0 3.887.752 4.822 2 .561.75.804 1.639.895 2.39q.022.19.034.36H10.295q.015-.142.039-.297c.112-.765.363-1.704.89-2.534M14.75 19c0-.69.56-1.25 1.25-1.25h.1a1.25 1.25 0 1 1 0 2.5H16c-.69 0-1.25-.56-1.25-1.25m-3.25-1.25a1.25 1.25 0 1 0 0 2.5h.1a1.25 1.25 0 1 0 0-2.5zM19.25 19c0-.69.56-1.25 1.25-1.25h.1a1.25 1.25 0 1 1 0 2.5h-.1c-.69 0-1.25-.56-1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        gs = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Ie({
              size: e
            })
          });
          return (0, o.jsxs)(o.Fragment, {
            children: ["MD" === e && (0, o.jsx)(hs, {
              ...n,
              ref: r
            }), "LG" === e && (0, o.jsx)(vs, {
              ...n,
              ref: r
            }), "XL" === e && (0, o.jsx)(ps, {
              ...n,
              ref: r
            })]
          })
        }));
      gs.displayName = "PadlockPasswordSolid", gs.category = "Uncategorized", gs.variant = "Solid", gs.keywords = "Lock, Password, Safe, Protection, Secure, Security, Latch, Access, Code", gs.MD = hs, gs.LG = vs, gs.XL = ps;
      const ms = new Set(["id"]),
        ws = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        xs = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        ys = /^(data-.*)$/;

      function bs(e, t = {}) {
        let {
          labelable: r,
          isLink: n,
          propNames: o
        } = t, a = {};
        for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (ms.has(t) || r && ws.has(t) || n && xs.has(t) || (null == o ? void 0 : o.has(t)) || ys.test(t)) && (a[t] = e[t]);
        return a
      }
      const js = "undefined" != typeof document ? m.useLayoutEffect : () => {};

      function Rs(e) {
        const t = (0, m.useRef)(null);
        return js((() => {
          t.current = e
        }), [e]), (0, m.useCallback)(((...e) => {
          const r = t.current;
          return null == r ? void 0 : r(...e)
        }), [])
      }
      const Ms = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        Cs = e => e && "window" in e && e.window === e ? e : Ms(e).defaultView || window;

      function Ls(...e) {
        return (...t) => {
          for (let r of e) "function" == typeof r && r(...t)
        }
      }
      const Ss = {
          prefix: String(Math.round(1e10 * Math.random())),
          current: 0
        },
        Es = m.createContext(Ss),
        Ps = m.createContext(!1);
      let _s = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        Ds = new WeakMap;
      const As = "function" == typeof m.useId ? function(e) {
        let t = m.useId(),
          [r] = (0, m.useState)("function" == typeof m.useSyncExternalStore ? m.useSyncExternalStore(Ns, Ts, Is) : (0, m.useContext)(Ps));
        return e || `${r?"react-aria":`react-aria${Ss.prefix}`}-${t}`
      } : function(e) {
        let t = (0, m.useContext)(Es);
        t !== Ss || _s || console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
        let r = function(e = !1) {
            let t = (0, m.useContext)(Es),
              r = (0, m.useRef)(null);
            if (null === r.current && !e) {
              var n, o;
              let e = null === (o = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === o || null === (n = o.ReactCurrentOwner) || void 0 === n ? void 0 : n.current;
              if (e) {
                let r = Ds.get(e);
                null == r ? Ds.set(e, {
                  id: t.current,
                  state: e.memoizedState
                }) : e.memoizedState !== r.state && (t.current = r.id, Ds.delete(e))
              }
              r.current = ++t.current
            }
            return r.current
          }(!!e),
          n = `react-aria${t.prefix}`;
        return e || `${n}-${r}`
      };

      function Ts() {
        return !1
      }

      function Is() {
        return !0
      }

      function Ns(e) {
        return () => {}
      }
      let Os = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        ks = new Map;

      function Hs(e) {
        let [t, r] = (0, m.useState)(e), n = (0, m.useRef)(null), o = As(t), a = (0, m.useCallback)((e => {
          n.current = e
        }), []);
        return Os && ks.set(o, a), js((() => {
          let e = o;
          return () => {
            ks.delete(e)
          }
        }), [o]), (0, m.useEffect)((() => {
          let e = n.current;
          e && (n.current = null, r(e))
        })), o
      }

      function Bs(e, t) {
        if (e === t) return e;
        let r = ks.get(e);
        if (r) return r(t), t;
        let n = ks.get(t);
        return n ? (n(e), e) : t
      }

      function zs(e = []) {
        let t = Hs(),
          [r, n] = function(e) {
            let [t, r] = (0, m.useState)(e), n = (0, m.useRef)(null), o = Rs((() => {
              if (!n.current) return;
              let e = n.current.next();
              e.done ? n.current = null : t === e.value ? o() : r(e.value)
            }));
            js((() => {
              n.current && o()
            }));
            let a = Rs((e => {
              n.current = e(t), o()
            }));
            return [t, a]
          }(t),
          o = (0, m.useCallback)((() => {
            n((function*() {
              yield t, yield document.getElementById(t) ? t : void 0
            }))
          }), [t, n]);
        return js(o, [t, o, ...e]), r
      }

      function Vs(...e) {
        let t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          let n = e[r];
          for (let e in n) {
            let r = t[e],
              o = n[e];
            "function" == typeof r && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = Ls(r, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof o ? "id" === e && r && o ? t.id = Bs(r, o) : t[e] = void 0 !== o ? o : r : t[e] = s(r, o)
          }
        }
        return t
      }

      function Fs(e, t) {
        let {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        } = e;
        if (r = Hs(r), o && n) {
          let e = new Set([r, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return n || o || !t || (n = t), {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        }
      }

      function Gs(e) {
        let {
          description: t,
          errorMessage: r,
          isInvalid: n,
          validationState: o
        } = e, {
          labelProps: a,
          fieldProps: l
        } = function(e) {
          let {
            id: t,
            label: r,
            "aria-labelledby": n,
            "aria-label": o,
            labelElementType: a = "label"
          } = e;
          t = Hs(t);
          let l = Hs(),
            i = {};
          return r ? (n = n ? `${l} ${n}` : l, i = {
            id: l,
            htmlFor: "label" === a ? t : void 0
          }) : n || o || console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility"), {
            labelProps: i,
            fieldProps: Fs({
              id: t,
              "aria-label": o,
              "aria-labelledby": n
            })
          }
        }(e), i = zs([Boolean(t), Boolean(r), n, o]), s = zs([Boolean(t), Boolean(r), n, o]);
        return l = Vs(l, {
          "aria-describedby": [i, s, e["aria-describedby"]].filter(Boolean).join(" ") || void 0
        }), {
          labelProps: a,
          fieldProps: l,
          descriptionProps: {
            id: i
          },
          errorMessageProps: {
            id: s
          }
        }
      }
      let Xs = new Map,
        Us = new Set;

      function qs() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = r => {
          if (!e(r) || !r.target) return;
          let n = Xs.get(r.target);
          if (n && (n.delete(r.propertyName), 0 === n.size && (r.target.removeEventListener("transitioncancel", t), Xs.delete(r.target)), 0 === Xs.size)) {
            for (let e of Us) e();
            Us.clear()
          }
        };
        document.body.addEventListener("transitionrun", (r => {
          if (!e(r) || !r.target) return;
          let n = Xs.get(r.target);
          n || (n = new Set, Xs.set(r.target, n), r.target.addEventListener("transitioncancel", t, {
            once: !0
          })), n.add(r.propertyName)
        })), document.body.addEventListener("transitionend", t)
      }

      function Ws(e) {
        requestAnimationFrame((() => {
          0 === Xs.size ? e() : Us.add(e)
        }))
      }

      function Ks(e) {
        if (function() {
            if (null == $s) {
              $s = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return $s = !0, !0
                  }
                })
              } catch (e) {}
            }
            return $s
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
      "undefined" != typeof document && ("loading" !== document.readyState ? qs() : document.addEventListener("DOMContentLoaded", qs));
      let $s = null;

      function Ys(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some((t => e.test(t.brand)))) || e.test(window.navigator.userAgent))
      }

      function Zs(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function Qs() {
        return Zs(/^Mac/i)
      }

      function Js() {
        return Zs(/^iPad/i) || Qs() && navigator.maxTouchPoints > 1
      }

      function ec() {
        return Zs(/^iPhone/i) || Js()
      }

      function tc() {
        return Ys(/Android/i)
      }

      function rc(e) {
        return !(0 !== e.mozInputSource || !e.isTrusted) || (tc() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }
      let nc = null,
        oc = new Set,
        ac = new Map,
        lc = !1,
        ic = !1;

      function sc(e, t) {
        for (let r of oc) r(e, t)
      }

      function cc(e) {
        lc = !0,
          function(e) {
            return !(e.metaKey || !Qs() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
          }(e) && (nc = "keyboard", sc("keyboard", e))
      }

      function dc(e) {
        nc = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (lc = !0, sc("pointer", e))
      }

      function uc(e) {
        rc(e) && (lc = !0, nc = "virtual")
      }

      function fc(e) {
        e.target !== window && e.target !== document && (lc || ic || (nc = "virtual", sc("virtual", e)), lc = !1, ic = !1)
      }

      function hc() {
        lc = !1, ic = !0
      }

      function vc(e) {
        if ("undefined" == typeof window || ac.get(Cs(e))) return;
        const t = Cs(e),
          r = Ms(e);
        let n = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          lc = !0, n.apply(this, arguments)
        }, r.addEventListener("keydown", cc, !0), r.addEventListener("keyup", cc, !0), r.addEventListener("click", uc, !0), t.addEventListener("focus", fc, !0), t.addEventListener("blur", hc, !1), "undefined" != typeof PointerEvent ? (r.addEventListener("pointerdown", dc, !0), r.addEventListener("pointermove", dc, !0), r.addEventListener("pointerup", dc, !0)) : (r.addEventListener("mousedown", dc, !0), r.addEventListener("mousemove", dc, !0), r.addEventListener("mouseup", dc, !0)), t.addEventListener("beforeunload", (() => {
          pc(e)
        }), {
          once: !0
        }), ac.set(t, {
          focus: n
        })
      }
      const pc = (e, t) => {
        const r = Cs(e),
          n = Ms(e);
        t && n.removeEventListener("DOMContentLoaded", t), ac.has(r) && (r.HTMLElement.prototype.focus = ac.get(r).focus, n.removeEventListener("keydown", cc, !0), n.removeEventListener("keyup", cc, !0), n.removeEventListener("click", uc, !0), r.removeEventListener("focus", fc, !0), r.removeEventListener("blur", hc, !1), "undefined" != typeof PointerEvent ? (n.removeEventListener("pointerdown", dc, !0), n.removeEventListener("pointermove", dc, !0), n.removeEventListener("pointerup", dc, !0)) : (n.removeEventListener("mousedown", dc, !0), n.removeEventListener("mousemove", dc, !0), n.removeEventListener("mouseup", dc, !0)), ac.delete(r))
      };

      function gc(e, t) {
        js((() => {
          if (e && e.ref && t) return e.ref.current = t.current, () => {
            e.ref && (e.ref.current = null)
          }
        }))
      }
      "undefined" != typeof document && function(e) {
        const t = Ms(e);
        let r;
        "loading" !== t.readyState ? vc(e) : (r = () => {
          vc(e)
        }, t.addEventListener("DOMContentLoaded", r))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
      class mc {
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

      function wc(e) {
        let {
          isDisabled: t,
          onFocus: r,
          onBlur: n,
          onFocusChange: o
        } = e;
        const a = (0, m.useCallback)((e => {
            if (e.target === e.currentTarget) return n && n(e), o && o(!1), !0
          }), [n, o]),
          l = function(e) {
            let t = (0, m.useRef)({
              isFocused: !1,
              observer: null
            });
            js((() => {
              const e = t.current;
              return () => {
                e.observer && (e.observer.disconnect(), e.observer = null)
              }
            }), []);
            let r = Rs((t => {
              null == e || e(t)
            }));
            return (0, m.useCallback)((e => {
              if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
                t.current.isFocused = !0;
                let n = e.target,
                  o = e => {
                    t.current.isFocused = !1, n.disabled && r(new mc("blur", e)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
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
          i = (0, m.useCallback)((e => {
            const t = Ms(e.target);
            e.target === e.currentTarget && t.activeElement === e.target && (r && r(e), o && o(!0), l(e))
          }), [o, r, l]);
        return {
          focusProps: {
            onFocus: !t && (r || o || n) ? i : void 0,
            onBlur: t || !n && !o ? void 0 : a
          }
        }
      }

      function xc(e) {
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
      let yc = m.createContext(null);

      function bc(e, t) {
        let {
          focusProps: r
        } = wc(e), {
          keyboardProps: n
        } = function(e) {
          return {
            keyboardProps: e.isDisabled ? {} : {
              onKeyDown: xc(e.onKeyDown),
              onKeyUp: xc(e.onKeyUp)
            }
          }
        }(e), o = Vs(r, n), a = function(e) {
          let t = (0, m.useContext)(yc) || {};
          gc(t, e);
          let {
            ref: r,
            ...n
          } = t;
          return n
        }(t), l = e.isDisabled ? {} : a, i = (0, m.useRef)(e.autoFocus);
        return (0, m.useEffect)((() => {
          i.current && t.current && function(e) {
            const t = Ms(e);
            if ("virtual" === nc) {
              let r = t.activeElement;
              Ws((() => {
                t.activeElement === r && e.isConnected && Ks(e)
              }))
            } else Ks(e)
          }(t.current), i.current = !1
        }), [t]), {
          focusableProps: Vs({
            ...o,
            tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0
          }, l)
        }
      }

      function jc(e) {
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
      const Rc = {
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
        Mc = {
          ...Rc,
          customError: !0,
          valid: !1
        },
        Cc = {
          isInvalid: !1,
          validationDetails: Rc,
          validationErrors: []
        },
        Lc = (0, m.createContext)({}),
        Sc = "__formValidationState" + Date.now();

      function Ec(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function Pc(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: Mc
        } : null
      }

      function _c(e, t) {
        return e === t || e && t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every(((e, r) => e === t.validationErrors[r])) && Object.entries(e.validationDetails).every((([e, r]) => t.validationDetails[e] === r))
      }

      function Dc(e, t) {
        let {
          inputElementType: r = "input",
          isDisabled: n = !1,
          isRequired: o = !1,
          isReadOnly: a = !1,
          type: l = "text",
          validationBehavior: i = "aria"
        } = e, [s, c] = function(e, t, r) {
          let [n, o] = (0, m.useState)(e || t), a = (0, m.useRef)(void 0 !== e), l = void 0 !== e;
          (0, m.useEffect)((() => {
            let e = a.current;
            e !== l && console.warn(`WARN: A component changed from ${e?"controlled":"uncontrolled"} to ${l?"controlled":"uncontrolled"}.`), a.current = l
          }), [l]);
          let i = l ? e : n,
            s = (0, m.useCallback)(((e, ...t) => {
              let n = (e, ...t) => {
                r && (Object.is(i, e) || r(e, ...t)), l || (i = e)
              };
              "function" == typeof e ? (console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"), o(((r, ...o) => {
                let a = e(l ? i : r, ...o);
                return n(a, ...t), l ? r : a
              }))) : (l || o(e), n(e, ...t))
            }), [l, i, r]);
          return [i, s]
        }(e.value, e.defaultValue || "", e.onChange), {
          focusableProps: d
        } = bc(e, t), u = function(e) {
          if (e[Sc]) {
            let {
              realtimeValidation: t,
              displayValidation: r,
              updateValidation: n,
              resetValidation: o,
              commitValidation: a
            } = e[Sc];
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
              validate: l,
              validationBehavior: i = "aria"
            } = e;
            r && (t || (t = "invalid" === r));
            let s = void 0 !== t ? {
                isInvalid: t,
                validationErrors: [],
                validationDetails: Mc
              } : null,
              c = (0, m.useMemo)((() => Pc(function(e, t) {
                if ("function" == typeof e) {
                  let r = e(t);
                  if (r && "boolean" != typeof r) return Ec(r)
                }
                return []
              }(l, o))), [l, o]);
            (null == a ? void 0 : a.validationDetails.valid) && (a = null);
            let d = (0, m.useContext)(Lc),
              u = (0, m.useMemo)((() => n ? Array.isArray(n) ? n.flatMap((e => Ec(d[e]))) : Ec(d[n]) : []), [d, n]),
              [f, h] = (0, m.useState)(d),
              [v, p] = (0, m.useState)(!1);
            d !== f && (h(d), p(!1));
            let g = (0, m.useMemo)((() => Pc(v ? [] : u)), [v, u]),
              w = (0, m.useRef)(Cc),
              [x, y] = (0, m.useState)(Cc),
              b = (0, m.useRef)(Cc),
              [j, R] = (0, m.useState)(!1);
            return (0, m.useEffect)((() => {
              if (!j) return;
              R(!1);
              let e = c || a || w.current;
              _c(e, b.current) || (b.current = e, y(e))
            })), {
              realtimeValidation: s || g || c || a || Cc,
              displayValidation: "native" === i ? s || g || x : s || g || c || a || x,
              updateValidation(e) {
                "aria" !== i || _c(x, e) ? w.current = e : y(e)
              },
              resetValidation() {
                let e = Cc;
                _c(e, b.current) || (b.current = e, y(e)), "native" === i && R(!1), p(!0)
              },
              commitValidation() {
                "native" === i && R(!0), p(!0)
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
        } = Gs({
          ...e,
          isInvalid: f,
          errorMessage: e.errorMessage || h
        }), y = bs(e, {
          labelable: !0
        });
        const b = {
          type: l,
          pattern: e.pattern
        };
        return function(e, t, r) {
            let n = (0, m.useRef)(t),
              o = Rs((() => {
                r && r(n.current)
              }));
            (0, m.useEffect)((() => {
              var t;
              let r = null == e || null === (t = e.current) || void 0 === t ? void 0 : t.form;
              return null == r || r.addEventListener("reset", o), () => {
                null == r || r.removeEventListener("reset", o)
              }
            }), [e, o])
          }(t, s, c),
          function(e, t, r) {
            let {
              validationBehavior: n,
              focus: o
            } = e;
            js((() => {
              if ("native" === n && (null == r ? void 0 : r.current)) {
                let n = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
                r.current.setCustomValidity(n), r.current.hasAttribute("title") || (r.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
                  isInvalid: !(e = r.current).validity.valid,
                  validationDetails: jc(e),
                  validationErrors: e.validationMessage ? [e.validationMessage] : []
                })
              }
              var e
            }));
            let a = Rs((() => {
                t.resetValidation()
              })),
              l = Rs((e => {
                var n;
                t.displayValidation.isInvalid || t.commitValidation();
                let a = null == r || null === (n = r.current) || void 0 === n ? void 0 : n.form;
                var l;
                !e.defaultPrevented && r && a && function(e) {
                  for (let t = 0; t < e.elements.length; t++) {
                    let r = e.elements[t];
                    if (!r.validity.valid) return r
                  }
                  return null
                }(a) === r.current && (o ? o() : null === (l = r.current) || void 0 === l || l.focus(), nc = "keyboard", sc("keyboard", null)), e.preventDefault()
              })),
              i = Rs((() => {
                t.commitValidation()
              }));
            (0, m.useEffect)((() => {
              let e = null == r ? void 0 : r.current;
              if (!e) return;
              let t = e.form;
              return e.addEventListener("invalid", l), e.addEventListener("change", i), null == t || t.addEventListener("reset", a), () => {
                e.removeEventListener("invalid", l), e.removeEventListener("change", i), null == t || t.removeEventListener("reset", a)
              }
            }), [r, l, i, a, n])
          }(e, u, t), (0, m.useEffect)((() => {
            if (t.current instanceof Cs(t.current).HTMLTextAreaElement) {
              let e = t.current;
              Object.defineProperty(e, "defaultValue", {
                get: () => e.value,
                set: () => {},
                configurable: !0
              })
            }
          }), [t]), {
            labelProps: p,
            inputProps: Vs(y, "input" === r && b, {
              disabled: n,
              readOnly: a,
              required: o && "native" === i,
              "aria-required": o && "aria" === i || void 0,
              "aria-invalid": f || void 0,
              "aria-errormessage": e["aria-errormessage"],
              "aria-activedescendant": e["aria-activedescendant"],
              "aria-autocomplete": e["aria-autocomplete"],
              "aria-haspopup": e["aria-haspopup"],
              value: s,
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
            descriptionProps: w,
            errorMessageProps: x,
            isInvalid: f,
            validationErrors: h,
            validationDetails: v
          }
      }

      function Ac(e, {
        defaultValue: t = !1,
        initializeWithValue: r = !0
      } = {}) {
        const n = e => a || !window.matchMedia ? t : window.matchMedia(e).matches,
          [o, l] = (0, m.useState)((() => r ? n(e) : t));

        function i() {
          l(n(e))
        }
        return (0, m.useEffect)((() => {
          const t = window.matchMedia?.(e);
          return i(), t?.addListener ? t?.addListener(i) : t?.addEventListener("change", i), () => {
            t?.removeListener ? t?.removeListener(i) : t?.removeEventListener("change", i)
          }
        }), [e]), o
      }

      function Tc(e) {
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

      function Ic(...e) {
        const t = (0, m.useRef)(null);
        return (0, m.useEffect)((() => {
          e.forEach((e => {
            e && ("function" == typeof e ? e(t.current || null) : e.current = t.current)
          }))
        }), [e]), t
      }
      const Nc = () => Ac("(prefers-reduced-motion: reduce)", {
        defaultValue: !1,
        initializeWithValue: !0
      });

      function Oc(e) {
        const t = (0, m.useRef)(e);
        return (0, m.useEffect)((() => {
          t.current = e
        })), (0, m.useMemo)((() => (...e) => t.current?.(...e)), [])
      }
      const kc = ({
        activity: e,
        leave: t,
        enabled: r = !0
      }) => {
        const n = (0, m.useRef)(),
          [o, a] = (0, m.useState)(!1),
          l = (0, m.useCallback)((() => a(!0)), []),
          i = (0, m.useCallback)(((t, r) => {
            let o = 0;
            return (...t) => {
              const r = Date.now();
              r - o >= 500 && (o = r, (() => {
                a(!1), window.clearTimeout(n.current), n.current = window.setTimeout(l, e)
              })(...t))
            }
          })(), []),
          s = (0, m.useCallback)((() => {
            window.clearTimeout(n.current), n.current = window.setTimeout(l, t)
          }), []),
          c = (0, m.useCallback)((() => {
            document.hidden || i()
          }), []);
        return (0, m.useEffect)((() => {
          const e = () => {
            window.removeEventListener("mousemove", i), window.removeEventListener("mousedown", i), window.removeEventListener("resize", i), window.removeEventListener("keydown", i), window.removeEventListener("touchstart", i), window.removeEventListener("wheel", i), document.removeEventListener("mouseleave", s), document.removeEventListener("visibilitychange", c), window.clearTimeout(n.current), a(!1)
          };
          return r ? (window.addEventListener("mousemove", i), window.addEventListener("mousedown", i), window.addEventListener("resize", i), window.addEventListener("keydown", i), window.addEventListener("touchstart", i), window.addEventListener("wheel", i), document.addEventListener("mouseleave", s), document.addEventListener("visibilitychange", c), i()) : e(), () => e()
        }), [r]), {
          isIdle: o
        }
      };

      function Hc({
        prop: e,
        defaultProp: t,
        onChange: r = (() => {})
      }) {
        const [n, o] = function({
          defaultProp: e,
          onChange: t
        }) {
          const r = (0, m.useState)(e),
            [n] = r,
            o = (0, m.useRef)(n),
            a = Oc(t);
          return (0, m.useEffect)((() => {
            o.current !== n && (a(n), o.current = n)
          }), [n, o, a]), r
        }({
          defaultProp: t,
          onChange: r
        }), a = void 0 !== e, l = a ? e : n, i = Oc(r), s = (0, m.useCallback)((t => {
          if (a) {
            const r = "function" == typeof t ? t(e) : t;
            r !== e && i(r)
          } else o(t)
        }), [a, e, o, i]);
        return [l, s]
      }

      function Bc(e, t, r, n) {
        const o = (0, m.useRef)(t);
        (0, m.useEffect)((() => {
          o.current = t
        }), [t]), (0, m.useEffect)((() => {
          const t = r?.current ?? window;
          if (!t || !t.addEventListener) return;
          const a = e => {
            o.current(e)
          };
          return t.addEventListener(e, a, n), () => {
            t.removeEventListener(e, a, n)
          }
        }), [e, r?.current, n])
      }

      function zc(e = !0) {
        return !!e && Ac("screen and (pointer: coarse) and (hover: none)")
      }

      function Vc(e) {
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

      function Fc(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Gc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Fc(Object(r), !0).forEach((function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Vc(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fc(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Xc(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Uc = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        qc = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Gc(Gc({}, e.defaultVariants), t);
            for (var o in n) {
              var a, l = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != l) {
                var i = l;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var s = e.variantClassNames[o][i];
                s && (r += " " + s)
              }
            }
            for (var [c, d] of e.compoundVariants) Uc(c, n, e.defaultVariants) && (r += " " + d);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Xc(e.variantClassNames, (e => Xc(e, (e => e.split(" ")[0]))))
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
      const Wc = (0, m.forwardRef)((({
        asChild: e,
        label: t,
        isRequired: r,
        hint: n,
        children: a,
        description: l,
        testId: i,
        className: s,
        rows: c = 5,
        hideLabel: d,
        hideDescription: u,
        hideRequiredAsterisk: f,
        validate: v,
        errorMessage: p,
        ...g
      }, w) => {
        const x = Ic((0, m.useRef)(null), w),
          {
            inputProps: b,
            labelProps: j,
            descriptionProps: R,
            isInvalid: M,
            errorMessageProps: L,
            validationErrors: S
          } = Dc({
            ...g,
            label: t,
            description: l,
            isRequired: r,
            inputElementType: "textarea",
            validate: e => v?.(e) ?? (!p || [p])
          }, x),
          E = h({
            ...b,
            className: s
          }, {
            className: qc({
              isInvalid: M
            }),
            "aria-errormessage": L?.id
          }),
          P = e ? y.DX : "textarea";
        return (0, o.jsxs)("div", {
          className: "foundry_vq8c3j0",
          children: [(t || n) && (0, o.jsxs)("div", {
            className: "foundry_vq8c3j1",
            children: [(0, o.jsx)(C, {
              enabled: !!d,
              children: (0, o.jsx)(K, {
                ...j,
                className: "foundry_vq8c3j2",
                asChild: !0,
                children: (0, o.jsxs)("label", {
                  children: [t, r && !f && (0, o.jsx)("span", {
                    className: "foundry_vq8c3j7",
                    children: "*"
                  })]
                })
              })
            }), n && (0, o.jsx)(te, {
              className: "foundry_vq8c3j3",
              children: n
            })]
          }), (0, o.jsx)(P, {
            rows: c,
            ref: w,
            "data-testid": i,
            ...E,
            children: a
          }), l && (0, o.jsx)(C, {
            enabled: S.length > 0 || !!u,
            children: (0, o.jsx)(K, {
              ...R,
              className: "foundry_vq8c3j4",
              children: l
            })
          }), S.length > 0 && (0, o.jsxs)(K, {
            ...L,
            appearance: "bold",
            className: "foundry_vq8c3j5",
            children: [(0, o.jsx)(Ia, {
              size: "MD",
              label: "",
              className: "foundry_vq8c3j6"
            }), S.join(". ")]
          })]
        })
      }));
      let Kc = "default",
        $c = "",
        Yc = new WeakMap;

      function Zc(e) {
        if (ec()) {
          if ("default" === Kc) {
            const t = Ms(e);
            $c = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
          }
          Kc = "disabled"
        } else(e instanceof HTMLElement || e instanceof SVGElement) && (Yc.set(e, e.style.userSelect), e.style.userSelect = "none")
      }

      function Qc(e) {
        if (ec()) {
          if ("disabled" !== Kc) return;
          Kc = "restoring", setTimeout((() => {
            Ws((() => {
              if ("restoring" === Kc) {
                const t = Ms(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = $c || ""), $c = "", Kc = "default"
              }
            }))
          }), 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && Yc.has(e)) {
          let t = Yc.get(e);
          "none" === e.style.userSelect && (e.style.userSelect = t), "" === e.getAttribute("style") && e.removeAttribute("style"), Yc.delete(e)
        }
      }
      const Jc = m.createContext({
        register: () => {}
      });

      function ed(e, t, r) {
        if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
        return t.get(e)
      }

      function td(e, t, r) {
        return function(e, t, r) {
          if (t.set) t.set.call(e, r);
          else {
            if (!t.writable) throw new TypeError("attempted to set read only private field");
            t.value = r
          }
        }(e, ed(e, t, "set"), r), r
      }

      function rd(e, t, r = !0) {
        var n, o;
        let {
          metaKey: a,
          ctrlKey: l,
          altKey: i,
          shiftKey: s
        } = t;
        Ys(/Firefox/i) && (null === (o = window.event) || void 0 === o || null === (n = o.type) || void 0 === n ? void 0 : n.startsWith("key")) && "_blank" === e.target && (Qs() ? a = !0 : l = !0);
        let c = Ys(/AppleWebKit/i) && !Ys(/Chrome/i) && Qs() && !Js() ? new KeyboardEvent("keydown", {
          keyIdentifier: "Enter",
          metaKey: a,
          ctrlKey: l,
          altKey: i,
          shiftKey: s
        }) : new MouseEvent("click", {
          metaKey: a,
          ctrlKey: l,
          altKey: i,
          shiftKey: s,
          bubbles: !0,
          cancelable: !0
        });
        rd.isOpening = r, Ks(e), e.dispatchEvent(c), rd.isOpening = !1
      }
      Jc.displayName = "PressResponderContext", rd.isOpening = !1;
      var nd = new WeakMap;
      class od {
        continuePropagation() {
          td(this, nd, !1)
        }
        get shouldStopPropagation() {
          return function(e, t) {
            return t.get ? t.get.call(e) : t.value
          }(this, ed(this, nd, "get"))
        }
        constructor(e, t, r) {
          var n, o, a;
          a = {
              writable: !0,
              value: void 0
            },
            function(e, t) {
              if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }(n = this, o = nd), o.set(n, a), td(this, nd, !0), this.type = e, this.pointerType = t, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey
        }
      }
      const ad = Symbol("linkClicked");

      function ld(e) {
        let {
          onPress: t,
          onPressChange: r,
          onPressStart: n,
          onPressEnd: o,
          onPressUp: a,
          isDisabled: l,
          isPressed: i,
          preventFocusOnPress: s,
          shouldCancelOnPointerExit: c,
          allowTextSelectionOnPress: d,
          ref: u,
          ...f
        } = function(e) {
          let t = (0, m.useContext)(Jc);
          if (t) {
            let {
              register: r,
              ...n
            } = t;
            e = Vs(n, e), r()
          }
          return gc(t, e.ref), e
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
            t = (0, m.useCallback)(((t, r, n, o) => {
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
            r = (0, m.useCallback)(((t, r, n, o) => {
              var a;
              let l = (null === (a = e.current.get(n)) || void 0 === a ? void 0 : a.fn) || n;
              t.removeEventListener(r, l, o), e.current.delete(n)
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
        }(), x = Rs(((e, t) => {
          let o = p.current;
          if (l || o.didFirePressStart) return !1;
          let a = !0;
          if (o.isTriggeringEvent = !0, n) {
            let r = new od("pressstart", t, e);
            n(r), a = r.shouldStopPropagation
          }
          return r && r(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, v(!0), a
        })), y = Rs(((e, n, a = !0) => {
          let i = p.current;
          if (!i.didFirePressStart) return !1;
          i.ignoreClickAfterPress = !0, i.didFirePressStart = !1, i.isTriggeringEvent = !0;
          let s = !0;
          if (o) {
            let t = new od("pressend", n, e);
            o(t), s = t.shouldStopPropagation
          }
          if (r && r(!1), v(!1), t && a && !l) {
            let r = new od("press", n, e);
            t(r), s && (s = r.shouldStopPropagation)
          }
          return i.isTriggeringEvent = !1, s
        })), b = Rs(((e, t) => {
          let r = p.current;
          if (l) return !1;
          if (a) {
            r.isTriggeringEvent = !0;
            let n = new od("pressup", t, e);
            return a(n), r.isTriggeringEvent = !1, n.shouldStopPropagation
          }
          return !0
        })), j = Rs((e => {
          let t = p.current;
          t.isPressed && t.target && (t.isOverTarget && null != t.pointerType && y(dd(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, w(), d || Qc(t.target))
        })), R = Rs((e => {
          c && j(e)
        })), M = (0, m.useMemo)((() => {
          let e = p.current,
            t = {
              onKeyDown(t) {
                if (sd(t.nativeEvent, t.currentTarget) && t.currentTarget.contains(t.target)) {
                  var n;
                  hd(t.target, t.key) && t.preventDefault();
                  let o = !0;
                  if (!e.isPressed && !t.repeat) {
                    e.target = t.currentTarget, e.isPressed = !0, o = x(t, "keyboard");
                    let n = t.currentTarget,
                      a = t => {
                        sd(t, n) && !t.repeat && n.contains(t.target) && e.target && b(dd(e.target, t), "keyboard")
                      };
                    g(Ms(t.currentTarget), "keyup", Ls(a, r), !0)
                  }
                  o && t.stopPropagation(), t.metaKey && Qs() && (null === (n = e.metaKeyEvents) || void 0 === n || n.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                if ((!t || t.currentTarget.contains(t.target)) && t && 0 === t.button && !e.isTriggeringEvent && !rd.isOpening) {
                  let r = !0;
                  if (l && t.preventDefault(), !e.ignoreClickAfterPress && !e.ignoreEmulatedMouseEvents && !e.isPressed && ("virtual" === e.pointerType || rc(t.nativeEvent))) {
                    l || s || Ks(t.currentTarget);
                    let e = x(t, "virtual"),
                      n = b(t, "virtual"),
                      o = y(t, "virtual");
                    r = e && n && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, e.ignoreClickAfterPress = !1, r && t.stopPropagation()
                }
              }
            },
            r = t => {
              var r;
              if (e.isPressed && e.target && sd(t, e.target)) {
                var n;
                hd(t.target, t.key) && t.preventDefault();
                let r = t.target;
                y(dd(e.target, t), "keyboard", e.target.contains(r)), w(), "Enter" !== t.key && id(e.target) && e.target.contains(r) && !t[ad] && (t[ad] = !0, rd(e.target, t, !1)), e.isPressed = !1, null === (n = e.metaKeyEvents) || void 0 === n || n.delete(t.key)
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
              if (a = t.nativeEvent, !tc() && 0 === a.width && 0 === a.height || 1 === a.width && 1 === a.height && 0 === a.pressure && 0 === a.detail && "mouse" === a.pointerType) return void(e.pointerType = "virtual");
              var a;
              fd(t.currentTarget) && t.preventDefault(), e.pointerType = t.pointerType;
              let i = !0;
              e.isPressed || (e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, l || s || Ks(t.currentTarget), d || Zc(e.target), i = x(t, e.pointerType), g(Ms(t.currentTarget), "pointermove", r, !1), g(Ms(t.currentTarget), "pointerup", n, !1), g(Ms(t.currentTarget), "pointercancel", o, !1)), i && t.stopPropagation()
            }, t.onMouseDown = e => {
              e.currentTarget.contains(e.target) && 0 === e.button && (fd(e.currentTarget) && e.preventDefault(), e.stopPropagation())
            }, t.onPointerUp = t => {
              t.currentTarget.contains(t.target) && "virtual" !== e.pointerType && 0 === t.button && ud(t, t.currentTarget) && b(t, e.pointerType || t.pointerType)
            };
            let r = t => {
                t.pointerId === e.activePointerId && (e.target && ud(t, e.target) ? e.isOverTarget || null == e.pointerType || (e.isOverTarget = !0, x(dd(e.target, t), e.pointerType)) : e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, y(dd(e.target, t), e.pointerType, !1), R(t)))
              },
              n = t => {
                t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target && (ud(t, e.target) && null != e.pointerType ? y(dd(e.target, t), e.pointerType) : e.isOverTarget && null != e.pointerType && y(dd(e.target, t), e.pointerType, !1), e.isPressed = !1, e.isOverTarget = !1, e.activePointerId = null, e.pointerType = null, w(), d || Qc(e.target))
              },
              o = e => {
                j(e)
              };
            t.onDragStart = e => {
              e.currentTarget.contains(e.target) && j(e)
            }
          } else {
            t.onMouseDown = t => {
              0 === t.button && t.currentTarget.contains(t.target) && (fd(t.currentTarget) && t.preventDefault(), e.ignoreEmulatedMouseEvents ? t.stopPropagation() : (e.isPressed = !0, e.isOverTarget = !0, e.target = t.currentTarget, e.pointerType = rc(t.nativeEvent) ? "virtual" : "mouse", l || s || Ks(t.currentTarget), x(t, e.pointerType) && t.stopPropagation(), g(Ms(t.currentTarget), "mouseup", r, !1)))
            }, t.onMouseEnter = t => {
              if (!t.currentTarget.contains(t.target)) return;
              let r = !0;
              e.isPressed && !e.ignoreEmulatedMouseEvents && null != e.pointerType && (e.isOverTarget = !0, r = x(t, e.pointerType)), r && t.stopPropagation()
            }, t.onMouseLeave = t => {
              if (!t.currentTarget.contains(t.target)) return;
              let r = !0;
              e.isPressed && !e.ignoreEmulatedMouseEvents && null != e.pointerType && (e.isOverTarget = !1, r = y(t, e.pointerType, !1), R(t)), r && t.stopPropagation()
            }, t.onMouseUp = t => {
              t.currentTarget.contains(t.target) && (e.ignoreEmulatedMouseEvents || 0 !== t.button || b(t, e.pointerType || "mouse"))
            };
            let r = t => {
              0 === t.button && (e.isPressed = !1, w(), e.ignoreEmulatedMouseEvents ? e.ignoreEmulatedMouseEvents = !1 : (e.target && ud(t, e.target) && null != e.pointerType ? y(dd(e.target, t), e.pointerType) : e.target && e.isOverTarget && null != e.pointerType && y(dd(e.target, t), e.pointerType, !1), e.isOverTarget = !1))
            };
            t.onTouchStart = t => {
              if (!t.currentTarget.contains(t.target)) return;
              let r = function(e) {
                const {
                  targetTouches: t
                } = e;
                return t.length > 0 ? t[0] : null
              }(t.nativeEvent);
              r && (e.activePointerId = r.identifier, e.ignoreEmulatedMouseEvents = !0, e.isOverTarget = !0, e.isPressed = !0, e.target = t.currentTarget, e.pointerType = "touch", l || s || Ks(t.currentTarget), d || Zc(e.target), x(t, e.pointerType) && t.stopPropagation(), g(Cs(t.currentTarget), "scroll", n, !0))
            }, t.onTouchMove = t => {
              if (!t.currentTarget.contains(t.target)) return;
              if (!e.isPressed) return void t.stopPropagation();
              let r = cd(t.nativeEvent, e.activePointerId),
                n = !0;
              r && ud(r, t.currentTarget) ? e.isOverTarget || null == e.pointerType || (e.isOverTarget = !0, n = x(t, e.pointerType)) : e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, n = y(t, e.pointerType, !1), R(t)), n && t.stopPropagation()
            }, t.onTouchEnd = t => {
              if (!t.currentTarget.contains(t.target)) return;
              if (!e.isPressed) return void t.stopPropagation();
              let r = cd(t.nativeEvent, e.activePointerId),
                n = !0;
              r && ud(r, t.currentTarget) && null != e.pointerType ? (b(t, e.pointerType), n = y(t, e.pointerType)) : e.isOverTarget && null != e.pointerType && (n = y(t, e.pointerType, !1)), n && t.stopPropagation(), e.isPressed = !1, e.activePointerId = null, e.isOverTarget = !1, e.ignoreEmulatedMouseEvents = !0, e.target && !d && Qc(e.target), w()
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
        }), [g, l, s, w, d, j, R, y, x, b]);
        return (0, m.useEffect)((() => () => {
          var e;
          d || Qc(null !== (e = p.current.target) && void 0 !== e ? e : void 0)
        }), [d]), {
          isPressed: i || h,
          pressProps: Vs(f, M)
        }
      }

      function id(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function sd(e, t) {
        const {
          key: r,
          code: n
        } = e, o = t, a = o.getAttribute("role");
        return !("Enter" !== r && " " !== r && "Spacebar" !== r && "Space" !== n || o instanceof Cs(o).HTMLInputElement && !pd(o, r) || o instanceof Cs(o).HTMLTextAreaElement || o.isContentEditable || ("link" === a || !a && id(o)) && "Enter" !== r)
      }

      function cd(e, t) {
        const r = e.changedTouches;
        for (let e = 0; e < r.length; e++) {
          const n = r[e];
          if (n.identifier === t) return n
        }
        return null
      }

      function dd(e, t) {
        return {
          currentTarget: e,
          shiftKey: t.shiftKey,
          ctrlKey: t.ctrlKey,
          metaKey: t.metaKey,
          altKey: t.altKey
        }
      }

      function ud(e, t) {
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

      function fd(e) {
        return !(e instanceof HTMLElement && e.hasAttribute("draggable"))
      }

      function hd(e, t) {
        return e instanceof HTMLInputElement ? !pd(e, t) : e instanceof HTMLButtonElement ? "submit" !== e.type && "reset" !== e.type : !id(e)
      }
      const vd = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function pd(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : vd.has(e.type)
      }

      function gd(e, t) {
        let r, {
          elementType: n = "button",
          isDisabled: o,
          onPress: a,
          onPressStart: l,
          onPressEnd: i,
          onPressUp: s,
          onPressChange: c,
          preventFocusOnPress: d,
          allowFocusWhenDisabled: u,
          onClick: f,
          href: h,
          target: v,
          rel: p,
          type: g = "button"
        } = e;
        r = "button" === n ? {
          type: g,
          disabled: o
        } : {
          role: "button",
          tabIndex: o ? void 0 : 0,
          href: "a" === n && o ? void 0 : h,
          target: "a" === n ? v : void 0,
          type: "input" === n ? g : void 0,
          disabled: "input" === n ? o : void 0,
          "aria-disabled": o && "input" !== n ? o : void 0,
          rel: "a" === n ? p : void 0
        };
        let {
          pressProps: m,
          isPressed: w
        } = ld({
          onPressStart: l,
          onPressEnd: i,
          onPressChange: c,
          onPress: a,
          onPressUp: s,
          isDisabled: o,
          preventFocusOnPress: d,
          ref: t
        }), {
          focusableProps: x
        } = bc(e, t);
        u && (x.tabIndex = o ? -1 : x.tabIndex);
        let y = Vs(x, m, bs(e, {
          labelable: !0
        }));
        return {
          isPressed: w,
          buttonProps: Vs(r, y, {
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

      function md(e) {
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

      function wd(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function xd(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? wd(Object(r), !0).forEach((function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = md(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wd(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function yd(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var bd = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        jd = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = xd(xd({}, e.defaultVariants), t);
            for (var o in n) {
              var a, l = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != l) {
                var i = l;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var s = e.variantClassNames[o][i];
                s && (r += " " + s)
              }
            }
            for (var [c, d] of e.compoundVariants) bd(c, n, e.defaultVariants) && (r += " " + d);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return yd(e.variantClassNames, (e => yd(e, (e => e.split(" ")[0]))))
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
      const Rd = (0, m.forwardRef)((({
        testId: e,
        asChild: t,
        className: r,
        children: a,
        onClick: l,
        iconLeft: i,
        iconLeftLabel: s,
        iconRight: c,
        iconRightLabel: d,
        appearance: u,
        size: f = "MD",
        allCaps: v = !1,
        fullWidth: p = !1,
        ...w
      }, x) => {
        const b = Ic((0, m.useRef)(null), x),
          {
            events: j,
            others: R
          } = g(w, {
            onPress: !1
          }),
          {
            buttonProps: M,
            isPressed: C
          } = gd({
            ...R,
            elementType: "button",
            preventFocusOnPress: !0,
            onPress: e => R.onPress?.(e) ?? l?.(e)
          }, b),
          L = h({
            ...M,
            className: r
          }, {
            ...j,
            role: "button",
            "data-pressed": C,
            "data-testid": e,
            className: jd({
              appearance: u,
              size: f,
              fullWidth: p,
              allCaps: v
            })
          }),
          S = i && n[i],
          E = c && n[c],
          P = t ? y.DX : "button";
        return (0, o.jsxs)(P, {
          ref: b,
          ...L,
          children: [(0, o.jsxs)("span", {
            className: "foundry_17pcofyi",
            children: [S && (0, o.jsx)(S, {
              label: s || "",
              size: f
            }), (0, o.jsx)(y.xV, {
              children: a
            })]
          }), E && (0, o.jsx)(E, {
            label: d || "",
            size: f
          })]
        })
      }));
      var Md = {
          mobile: "screen and (max-width: 1023px)",
          tablet: "screen and (min-width: 1024px) and (max-width: 1919px)",
          desktop: "screen and (min-width: 1920px) and (max-width: 2559px)",
          desktopLarge: "screen and (min-width: 2560px)"
        },
        Cd = {
          mobile: 1,
          tablet: 1.125,
          desktop: 1.25,
          desktopLarge: 1.375
        },
        Ld = {
          dark: "foundry_nu8bkpar",
          darkHc: "foundry_nu8bkpat",
          light: "foundry_nu8bkpaq",
          lightHc: "foundry_nu8bkpas",
          tokens: "foundry_nu8bkp1"
        },
        Sd = "--foundry_nu8bkp0",
        Ed = "foundry_nu8bkp1";
      const Pd = (0, m.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          contrastMode: "normal",
          defaultContrastMode: "normal",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          platformScaleRatios: Cd,
          platformScaleBreakpoints: Md,
          locale: "en-US"
        }),
        _d = () => (0, m.useContext)(Pd),
        Dd = (e, t) => {
          const r = "more" === t ? Ld.lightHc : Ld.light,
            n = "more" === t ? Ld.darkHc : Ld.dark;
          return "dark" === e ? n : r
        };
      const Ad = () => a ? null : document.body;
      (0, m.forwardRef)((({
        children: e,
        className: t,
        container: r = Ad(),
        asChild: n,
        colorScheme: l,
        defaultColorScheme: i,
        contrastMode: s,
        defaultContrastMode: c,
        platformScaleBreakpoints: d,
        platformScaleRatios: u,
        defaultPlatformScale: f,
        platformScale: h,
        locale: v = "en-US"
      }, p) => {
        const g = Ic((0, m.useRef)(null), p),
          w = (0, m.useRef)(r),
          {
            ratio: x,
            scale: b
          } = function(e) {
            const t = (0, m.useMemo)((() => ({
                ...Cd,
                ...e.platformScaleRatios
              })), [e.platformScaleRatios]),
              r = (0, m.useMemo)((() => ({
                ...Md,
                ...e.platformScaleBreakpoints
              })), [e.platformScaleBreakpoints]),
              [n, o] = (0, m.useState)(e.platformScale || e.defaultPlatformScale),
              l = (0, m.useRef)([]),
              i = () => {
                if (!a) {
                  for (const {
                      handler: e,
                      matchMedia: t
                    }
                    of l.current) t.removeEventListener("change", e);
                  l.current = []
                }
              };
            return (0, m.useEffect)((() => (e.platformScale ? o(e.platformScale) : (() => {
              if (!a) {
                i();
                for (const e in r) {
                  const t = window.matchMedia(r[e]),
                    n = t => {
                      t.matches && o(e)
                    };
                  t.addEventListener("change", n), t.matches && o(e), l.current.push({
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
            platformScaleBreakpoints: d,
            platformScaleRatios: u,
            defaultPlatformScale: f,
            platformScale: h
          }),
          {
            appearanceClass: j,
            otherAppearanceClasses: R,
            providerColor: M,
            providerContrast: C
          } = function({
            colorScheme: e,
            defaultColorScheme: t = "dark",
            contrastMode: r,
            defaultContrastMode: n = "normal"
          }) {
            const o = Ac("(prefers-color-scheme: light)"),
              a = Ac("(prefers-color-scheme: dark)"),
              l = Ac("(prefers-contrast: more)"),
              i = "system" !== e && e || o && "light" || a && "dark" || t,
              s = r || l && "more" || n,
              c = (0, m.useMemo)((() => Dd(i, s)), [i, s]),
              d = (0, m.useMemo)((() => ((e, t) => {
                const r = Dd(e, t);
                return [Ld.light, Ld.dark, Ld.lightHc, Ld.darkHc].filter((e => e !== r))
              })(i, s)), [i, s]);
            return {
              appearanceClass: c,
              otherAppearanceClasses: d,
              providerColor: i,
              providerContrast: s
            }
          }({
            colorScheme: l,
            defaultColorScheme: i,
            contrastMode: s,
            defaultContrastMode: c
          });
        return ((e, t, r, n, o) => {
          const a = Tc(o),
            l = Tc(e.current);
          (0, m.useEffect)((() => {
            e.current?.classList.contains(Ed) || e.current?.classList.add(Ed), e.current?.classList.add(r), e.current?.classList.remove(...n), a && o && e.current?.classList.contains(a) ? e.current?.classList.replace(a, o) : a && !o && e.current?.classList.contains(a) ? e.current?.classList.remove(a) : o && e.current?.classList.add(o)
          }), [r, o]), (0, m.useEffect)((() => {
            e.current?.style.setProperty(Sd, t.toString())
          }), [t]), (0, m.useEffect)((() => {
            l?.classList.remove(Ed), l?.classList.remove(r), l?.style.removeProperty(Sd), o && l?.classList.remove(o)
          }), [l])
        })(n ? g : w, x, j, R, t), (0, o.jsx)(Pd.Provider, {
          value: {
            locale: v,
            defaultColorScheme: i,
            colorScheme: M,
            defaultContrastMode: c,
            contrastMode: C,
            defaultPlatformScale: f,
            platformScale: b,
            platformScaleRatios: u,
            platformScaleBreakpoints: d
          },
          children: n ? (0, o.jsx)(y.DX, {
            ref: g,
            children: e
          }) : e
        })
      }));
      var Td = $d(),
        Id = e => Ud(e, Td),
        Nd = $d();
      Id.write = e => Ud(e, Nd);
      var Od = $d();
      Id.onStart = e => Ud(e, Od);
      var kd = $d();
      Id.onFrame = e => Ud(e, kd);
      var Hd = $d();
      Id.onFinish = e => Ud(e, Hd);
      var Bd = [];
      Id.setTimeout = (e, t) => {
        const r = Id.now() + t,
          n = () => {
            const e = Bd.findIndex((e => e.cancel == n));
            ~e && Bd.splice(e, 1), Gd -= ~e ? 1 : 0
          },
          o = {
            time: r,
            handler: e,
            cancel: n
          };
        return Bd.splice(zd(r), 0, o), Gd += 1, qd(), o
      };
      var zd = e => ~(~Bd.findIndex((t => t.time > e)) || ~Bd.length);
      Id.cancel = e => {
        Od.delete(e), kd.delete(e), Hd.delete(e), Td.delete(e), Nd.delete(e)
      }, Id.sync = e => {
        Xd = !0, Id.batchedUpdates(e), Xd = !1
      }, Id.throttle = e => {
        let t;

        function r() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function n(...e) {
          t = e, Id.onStart(r)
        }
        return n.handler = e, n.cancel = () => {
          Od.delete(r), t = null
        }, n
      };
      var Vd = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      Id.use = e => Vd = e, Id.now = "undefined" != typeof performance ? () => performance.now() : Date.now, Id.batchedUpdates = e => e(), Id.catch = console.error, Id.frameLoop = "always", Id.advance = () => {
        "demand" !== Id.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : Kd()
      };
      var Fd = -1,
        Gd = 0,
        Xd = !1;

      function Ud(e, t) {
        Xd ? (t.delete(e), e(0)) : (t.add(e), qd())
      }

      function qd() {
        Fd < 0 && (Fd = 0, "demand" !== Id.frameLoop && Vd(Wd))
      }

      function Wd() {
        ~Fd && (Vd(Wd), Id.batchedUpdates(Kd))
      }

      function Kd() {
        const e = Fd;
        Fd = Id.now();
        const t = zd(Fd);
        t && (Yd(Bd.splice(0, t), (e => e.handler())), Gd -= t), Gd ? (Od.flush(), Td.flush(e ? Math.min(64, Fd - e) : 16.667), kd.flush(), Nd.flush(), Hd.flush()) : Fd = -1
      }

      function $d() {
        let e = new Set,
          t = e;
        return {
          add(r) {
            Gd += t != e || e.has(r) ? 0 : 1, e.add(r)
          },
          delete: r => (Gd -= t == e && e.has(r) ? 1 : 0, e.delete(r)),
          flush(r) {
            t.size && (e = new Set, Gd -= t.size, Yd(t, (t => t(r) && e.add(t))), Gd += e.size, t = e)
          }
        }
      }

      function Yd(e, t) {
        e.forEach((e => {
          try {
            t(e)
          } catch (e) {
            Id.catch(e)
          }
        }))
      }
      var Zd = Object.defineProperty,
        Qd = {};

      function Jd() {}((e, t) => {
        for (var r in t) Zd(e, r, {
          get: t[r],
          enumerable: !0
        })
      })(Qd, {
        assign: () => hu,
        colors: () => du,
        createStringInterpolator: () => lu,
        skipAnimation: () => uu,
        to: () => iu,
        willAdvance: () => fu
      });
      var eu = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function tu(e, t) {
        if (eu.arr(e)) {
          if (!eu.arr(t) || e.length !== t.length) return !1;
          for (let r = 0; r < e.length; r++)
            if (e[r] !== t[r]) return !1;
          return !0
        }
        return e === t
      }
      var ru = (e, t) => e.forEach(t);

      function nu(e, t, r) {
        if (eu.arr(e))
          for (let n = 0; n < e.length; n++) t.call(r, e[n], `${n}`);
        else
          for (const n in e) e.hasOwnProperty(n) && t.call(r, e[n], n)
      }
      var ou = e => eu.und(e) ? [] : eu.arr(e) ? e : [e];

      function au(e, t) {
        if (e.size) {
          const r = Array.from(e);
          e.clear(), ru(r, t)
        }
      }
      var lu, iu, su = (e, ...t) => au(e, (e => e(...t))),
        cu = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        du = null,
        uu = !1,
        fu = Jd,
        hu = e => {
          e.to && (iu = e.to), e.now && (Id.now = e.now), void 0 !== e.colors && (du = e.colors), null != e.skipAnimation && (uu = e.skipAnimation), e.createStringInterpolator && (lu = e.createStringInterpolator), e.requestAnimationFrame && Id.use(e.requestAnimationFrame), e.batchedUpdates && (Id.batchedUpdates = e.batchedUpdates), e.willAdvance && (fu = e.willAdvance), e.frameLoop && (Id.frameLoop = e.frameLoop)
        },
        vu = new Set,
        pu = [],
        gu = [],
        mu = 0,
        wu = {
          get idle() {
            return !vu.size && !pu.length
          },
          start(e) {
            mu > e.priority ? (vu.add(e), Id.onStart(xu)) : (yu(e), Id(ju))
          },
          advance: ju,
          sort(e) {
            if (mu) Id.onFrame((() => wu.sort(e)));
            else {
              const t = pu.indexOf(e);
              ~t && (pu.splice(t, 1), bu(e))
            }
          },
          clear() {
            pu = [], vu.clear()
          }
        };

      function xu() {
        vu.forEach(yu), vu.clear(), Id(ju)
      }

      function yu(e) {
        pu.includes(e) || bu(e)
      }

      function bu(e) {
        pu.splice(function(t, r) {
          const n = t.findIndex((t => t.priority > e.priority));
          return n < 0 ? t.length : n
        }(pu), 0, e)
      }

      function ju(e) {
        const t = gu;
        for (let r = 0; r < pu.length; r++) {
          const n = pu[r];
          mu = n.priority, n.idle || (fu(n), n.advance(e), n.idle || t.push(n))
        }
        return mu = 0, (gu = pu).length = 0, (pu = t).length > 0
      }
      var Ru = "[-+]?\\d*\\.?\\d+",
        Mu = Ru + "%";

      function Cu(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var Lu = new RegExp("rgb" + Cu(Ru, Ru, Ru)),
        Su = new RegExp("rgba" + Cu(Ru, Ru, Ru, Ru)),
        Eu = new RegExp("hsl" + Cu(Ru, Mu, Mu)),
        Pu = new RegExp("hsla" + Cu(Ru, Mu, Mu, Ru)),
        _u = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        Du = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        Au = /^#([0-9a-fA-F]{6})$/,
        Tu = /^#([0-9a-fA-F]{8})$/;

      function Iu(e, t, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
      }

      function Nu(e, t, r) {
        const n = r < .5 ? r * (1 + t) : r + t - r * t,
          o = 2 * r - n,
          a = Iu(o, n, e + 1 / 3),
          l = Iu(o, n, e),
          i = Iu(o, n, e - 1 / 3);
        return Math.round(255 * a) << 24 | Math.round(255 * l) << 16 | Math.round(255 * i) << 8
      }

      function Ou(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function ku(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function Hu(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function Bu(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function zu(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = Au.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : du && void 0 !== du[e] ? du[e] : (t = Lu.exec(e)) ? (Ou(t[1]) << 24 | Ou(t[2]) << 16 | Ou(t[3]) << 8 | 255) >>> 0 : (t = Su.exec(e)) ? (Ou(t[1]) << 24 | Ou(t[2]) << 16 | Ou(t[3]) << 8 | Hu(t[4])) >>> 0 : (t = _u.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = Tu.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = Du.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = Eu.exec(e)) ? (255 | Nu(ku(t[1]), Bu(t[2]), Bu(t[3]))) >>> 0 : (t = Pu.exec(e)) ? (Nu(ku(t[1]), Bu(t[2]), Bu(t[3])) | Hu(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var Vu = (e, t, r) => {
          if (eu.fun(e)) return e;
          if (eu.arr(e)) return Vu({
            range: e,
            output: t,
            extrapolate: r
          });
          if (eu.str(e.output[0])) return lu(e);
          const n = e,
            o = n.output,
            a = n.range || [0, 1],
            l = n.extrapolateLeft || n.extrapolate || "extend",
            i = n.extrapolateRight || n.extrapolate || "extend",
            s = n.easing || (e => e);
          return e => {
            const t = function(e, t) {
              for (var r = 1; r < t.length - 1 && !(t[r] >= e); ++r);
              return r - 1
            }(e, a);
            return function(e, t, r, n, o, a, l, i, s) {
              let c = s ? s(e) : e;
              if (c < t) {
                if ("identity" === l) return c;
                "clamp" === l && (c = t)
              }
              if (c > r) {
                if ("identity" === i) return c;
                "clamp" === i && (c = r)
              }
              return n === o ? n : t === r ? e <= t ? n : o : (t === -1 / 0 ? c = -c : r === 1 / 0 ? c -= t : c = (c - t) / (r - t), c = a(c), n === -1 / 0 ? c = -c : o === 1 / 0 ? c += n : c = c * (o - n) + n, c)
            }(e, a[t], a[t + 1], o[t], o[t + 1], s, l, i, n.map)
          }
        },
        Fu = 1.70158,
        Gu = 1.525 * Fu,
        Xu = Fu + 1,
        Uu = 2 * Math.PI / 3,
        qu = 2 * Math.PI / 4.5,
        Wu = e => {
          const t = 7.5625,
            r = 2.75;
          return e < 1 / r ? t * e * e : e < 2 / r ? t * (e -= 1.5 / r) * e + .75 : e < 2.5 / r ? t * (e -= 2.25 / r) * e + .9375 : t * (e -= 2.625 / r) * e + .984375
        },
        Ku = {
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
          easeInBack: e => Xu * e * e * e - Fu * e * e,
          easeOutBack: e => 1 + Xu * Math.pow(e - 1, 3) + Fu * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - Gu) / 2 : (Math.pow(2 * e - 2, 2) * ((Gu + 1) * (2 * e - 2) + Gu) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * Uu),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * Uu) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * qu) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * qu) / 2 + 1,
          easeInBounce: e => 1 - Wu(1 - e),
          easeOutBounce: Wu,
          easeInOutBounce: e => e < .5 ? (1 - Wu(1 - 2 * e)) / 2 : (1 + Wu(2 * e - 1)) / 2,
          steps: (e, t = "end") => r => {
            const n = (r = "end" === t ? Math.min(r, .999) : Math.max(r, .001)) * e;
            return o = ("end" === t ? Math.floor(n) : Math.ceil(n)) / e, Math.min(Math.max(o, 0), 1);
            var o
          }
        },
        $u = Symbol.for("FluidValue.get"),
        Yu = Symbol.for("FluidValue.observers"),
        Zu = e => Boolean(e && e[$u]),
        Qu = e => e && e[$u] ? e[$u]() : e,
        Ju = e => e[Yu] || null;

      function ef(e, t) {
        const r = e[Yu];
        r && r.forEach((e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        }))
      }
      var tf = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            rf(this, e)
          }
        },
        rf = (e, t) => lf(e, $u, t);

      function nf(e, t) {
        if (e[$u]) {
          let r = e[Yu];
          r || lf(e, Yu, r = new Set), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t))
        }
        return t
      }

      function of(e, t) {
        const r = e[Yu];
        if (r && r.has(t)) {
          const n = r.size - 1;
          n ? r.delete(t) : e[Yu] = null, e.observerRemoved && e.observerRemoved(n, t)
        }
      }
      var af, lf = (e, t, r) => Object.defineProperty(e, t, {
          value: r,
          writable: !0,
          configurable: !0
        }),
        sf = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        cf = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        df = new RegExp(`(${sf.source})(%|[a-z]+)`, "i"),
        uf = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        ff = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        hf = e => {
          const [t, r] = vf(e);
          if (!t || cu()) return e;
          const n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (n) return n.trim();
          if (r && r.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(r) || e
          }
          return r && ff.test(r) ? hf(r) : r || e
        },
        vf = e => {
          const t = ff.exec(e);
          if (!t) return [, ];
          const [, r, n] = t;
          return [r, n]
        },
        pf = (e, t, r, n, o) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,
        gf = e => {
          af || (af = du ? new RegExp(`(${Object.keys(du).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map((e => Qu(e).replace(ff, hf).replace(cf, zu).replace(af, zu))),
            r = t.map((e => e.match(sf).map(Number))),
            n = r[0].map(((e, t) => r.map((e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })))).map((t => Vu({
              ...e,
              output: t
            })));
          return e => {
            const r = !df.test(t[0]) && t.find((e => df.test(e)))?.replace(sf, "");
            let o = 0;
            return t[0].replace(sf, (() => `${n[o++](e)}${r||""}`)).replace(uf, pf)
          }
        },
        mf = "react-spring: ",
        wf = e => {
          const t = e;
          let r = !1;
          if ("function" != typeof t) throw new TypeError(`${mf}once requires a function parameter`);
          return (...e) => {
            r || (t(...e), r = !0)
          }
        },
        xf = wf(console.warn),
        yf = wf(console.warn);

      function bf(e) {
        return eu.str(e) && ("#" == e[0] || /\d/.test(e) || !cu() && ff.test(e) || e in (du || {}))
      }
      var jf = cu() ? m.useEffect : m.useLayoutEffect,
        Rf = () => {
          const e = (0, m.useRef)(!1);
          return jf((() => (e.current = !0, () => {
            e.current = !1
          })), []), e
        };

      function Mf() {
        const e = (0, m.useState)()[1],
          t = Rf();
        return () => {
          t.current && e(Math.random())
        }
      }
      var Cf = e => (0, m.useEffect)(e, Lf),
        Lf = [];

      function Sf(e) {
        const t = (0, m.useRef)();
        return (0, m.useEffect)((() => {
          t.current = e
        })), t.current
      }
      var Ef = Symbol.for("Animated:node"),
        Pf = e => e && e[Ef],
        _f = (e, t) => {
          return r = e, n = Ef, o = t, Object.defineProperty(r, n, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var r, n, o
        },
        Df = e => e && e[Ef] && e[Ef].getPayload(),
        Af = class {
          constructor() {
            _f(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        Tf = class extends Af {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, eu.num(this._value) && (this.lastPosition = this._value)
          }
          static create(e) {
            return new Tf(e)
          }
          getPayload() {
            return [this]
          }
          getValue() {
            return this._value
          }
          setValue(e, t) {
            return eu.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, eu.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        If = class extends Tf {
          constructor(e) {
            super(0), this._string = null, this._toString = Vu({
              output: [e, e]
            })
          }
          static create(e) {
            return new If(e)
          }
          getValue() {
            const e = this._string;
            return null == e ? this._string = this._toString(this._value) : e
          }
          setValue(e) {
            if (eu.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = Vu({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        Nf = {
          dependencies: null
        },
        Of = class extends Af {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return nu(this.source, ((r, n) => {
              var o;
              (o = r) && o[Ef] === o ? t[n] = r.getValue(e) : Zu(r) ? t[n] = Qu(r) : e || (t[n] = r)
            })), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && ru(this.payload, (e => e.reset()))
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return nu(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            Nf.dependencies && Zu(e) && Nf.dependencies.add(e);
            const t = Df(e);
            t && ru(t, (e => this.add(e)))
          }
        },
        kf = class extends Of {
          constructor(e) {
            super(e)
          }
          static create(e) {
            return new kf(e)
          }
          getValue() {
            return this.source.map((e => e.getValue()))
          }
          setValue(e) {
            const t = this.getPayload();
            return e.length == t.length ? t.map(((t, r) => t.setValue(e[r]))).some(Boolean) : (super.setValue(e.map(Hf)), !0)
          }
        };

      function Hf(e) {
        return (bf(e) ? If : Tf).create(e)
      }

      function Bf(e) {
        const t = Pf(e);
        return t ? t.constructor : eu.arr(e) ? kf : bf(e) ? If : Tf
      }
      var zf = (e, t) => {
          const r = !eu.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, m.forwardRef)(((n, o) => {
            const a = (0, m.useRef)(null),
              l = r && (0, m.useCallback)((e => {
                a.current = function(e, t) {
                  return e && (eu.fun(e) ? e(t) : e.current = t), t
                }(o, e)
              }), [o]),
              [i, s] = function(e, t) {
                const r = new Set;
                return Nf.dependencies = r, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new Of(e), Nf.dependencies = null, [e, r]
              }(n, t),
              c = Mf(),
              d = () => {
                const e = a.current;
                r && !e || !1 === (!!e && t.applyAnimatedValues(e, i.getValue(!0))) && c()
              },
              u = new Vf(d, s),
              f = (0, m.useRef)();
            jf((() => (f.current = u, ru(s, (e => nf(e, u))), () => {
              f.current && (ru(f.current.deps, (e => of(e, f.current))), Id.cancel(f.current.update))
            }))), (0, m.useEffect)(d, []), Cf((() => () => {
              const e = f.current;
              ru(e.deps, (t => of(t, e)))
            }));
            const h = t.getComponentProps(i.getValue());
            return m.createElement(e, {
              ...h,
              ref: l
            })
          }))
        },
        Vf = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && Id.write(this.update)
          }
        },
        Ff = Symbol.for("AnimatedComponent"),
        Gf = e => eu.str(e) ? e : e && eu.str(e.displayName) ? e.displayName : eu.fun(e) && e.name || null;

      function Xf(e, ...t) {
        return eu.fun(e) ? e(...t) : e
      }
      var Uf = (e, t) => !0 === e || !!(t && e && (eu.fun(e) ? e(t) : ou(e).includes(t))),
        qf = (e, t) => eu.obj(e) ? t && e[t] : e,
        Wf = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        Kf = e => e,
        $f = (e, t = Kf) => {
          let r = Yf;
          e.default && !0 !== e.default && (e = e.default, r = Object.keys(e));
          const n = {};
          for (const o of r) {
            const r = t(e[o], o);
            eu.und(r) || (n[o] = r)
          }
          return n
        },
        Yf = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        Zf = {
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

      function Qf(e) {
        const t = function(e) {
          const t = {};
          let r = 0;
          if (nu(e, ((e, n) => {
              Zf[n] || (t[n] = e, r++)
            })), r) return t
        }(e);
        if (t) {
          const r = {
            to: t
          };
          return nu(e, ((e, n) => n in t || (r[n] = e))), r
        }
        return {
          ...e
        }
      }

      function Jf(e) {
        return e = Qu(e), eu.arr(e) ? e.map(Jf) : bf(e) ? Qd.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function eh(e) {
        for (const t in e) return !0;
        return !1
      }

      function th(e) {
        return eu.fun(e) || eu.arr(e) && eu.obj(e[0])
      }

      function rh(e, t) {
        e.ref?.delete(e), t?.delete(e)
      }

      function nh(e, t) {
        t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
      }
      var oh = {
          tension: 170,
          friction: 26,
          mass: 1,
          damping: 1,
          easing: Ku.linear,
          clamp: !1
        },
        ah = class {
          constructor() {
            this.velocity = 0, Object.assign(this, oh)
          }
        };

      function lh(e, t) {
        if (eu.und(t.decay)) {
          const r = !eu.und(t.tension) || !eu.und(t.friction);
          !r && eu.und(t.frequency) && eu.und(t.damping) && eu.und(t.mass) || (e.duration = void 0, e.decay = void 0), r && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var ih = [],
        sh = class {
          constructor() {
            this.changed = !1, this.values = ih, this.toValues = null, this.fromValues = ih, this.config = new ah, this.immediate = !1
          }
        };

      function ch(e, {
        key: t,
        props: r,
        defaultProps: n,
        state: o,
        actions: a
      }) {
        return new Promise(((l, i) => {
          let s, c, d = Uf(r.cancel ?? n?.cancel, t);
          if (d) h();
          else {
            eu.und(r.pause) || (o.paused = Uf(r.pause, t));
            let e = n?.pause;
            !0 !== e && (e = o.paused || Uf(e, t)), s = Xf(r.delay || 0, t), e ? (o.resumeQueue.add(f), a.pause()) : (a.resume(), f())
          }

          function u() {
            o.resumeQueue.add(f), o.timeouts.delete(c), c.cancel(), s = c.time - Id.now()
          }

          function f() {
            s > 0 && !Qd.skipAnimation ? (o.delayed = !0, c = Id.setTimeout(h, s), o.pauseQueue.add(u), o.timeouts.add(c)) : h()
          }

          function h() {
            o.delayed && (o.delayed = !1), o.pauseQueue.delete(u), o.timeouts.delete(c), e <= (o.cancelId || 0) && (d = !0);
            try {
              a.start({
                ...r,
                callId: e,
                cancel: d
              }, l)
            } catch (e) {
              i(e)
            }
          }
        }))
      }
      var dh = (e, t) => 1 == t.length ? t[0] : t.some((e => e.cancelled)) ? hh(e.get()) : t.every((e => e.noop)) ? uh(e.get()) : fh(e.get(), t.every((e => e.finished))),
        uh = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        fh = (e, t, r = !1) => ({
          value: e,
          finished: t,
          cancelled: r
        }),
        hh = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function vh(e, t, r, n) {
        const {
          callId: o,
          parentId: a,
          onRest: l
        } = t, {
          asyncTo: i,
          promise: s
        } = r;
        return a || e !== i || t.reset ? r.promise = (async () => {
          r.asyncId = o, r.asyncTo = e;
          const c = $f(t, ((e, t) => "onRest" === t ? void 0 : e));
          let d, u;
          const f = new Promise(((e, t) => (d = e, u = t))),
            h = e => {
              const t = o <= (r.cancelId || 0) && hh(n) || o !== r.asyncId && fh(n, !1);
              if (t) throw e.result = t, u(e), e
            },
            v = (e, t) => {
              const a = new gh,
                l = new mh;
              return (async () => {
                if (Qd.skipAnimation) throw ph(r), l.result = fh(n, !1), u(l), l;
                h(a);
                const i = eu.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                i.parentId = o, nu(c, ((e, t) => {
                  eu.und(i[t]) && (i[t] = e)
                }));
                const s = await n.start(i);
                return h(a), r.paused && await new Promise((e => {
                  r.resumeQueue.add(e)
                })), s
              })()
            };
          let p;
          if (Qd.skipAnimation) return ph(r), fh(n, !1);
          try {
            let t;
            t = eu.arr(e) ? (async e => {
              for (const t of e) await v(t)
            })(e) : Promise.resolve(e(v, n.stop.bind(n))), await Promise.all([t.then(d), f]), p = fh(n.get(), !0, !1)
          } catch (e) {
            if (e instanceof gh) p = e.result;
            else {
              if (!(e instanceof mh)) throw e;
              p = e.result
            }
          } finally {
            o == r.asyncId && (r.asyncId = a, r.asyncTo = a ? i : void 0, r.promise = a ? s : void 0)
          }
          return eu.fun(l) && Id.batchedUpdates((() => {
            l(p, n, n.item)
          })), p
        })() : s
      }

      function ph(e, t) {
        au(e.timeouts, (e => e.cancel())), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var gh = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        mh = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        wh = e => e instanceof yh,
        xh = 1,
        yh = class extends tf {
          constructor() {
            super(...arguments), this.id = xh++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = Pf(this);
            return e && e.getValue()
          }
          to(...e) {
            return Qd.to(this, e)
          }
          interpolate(...e) {
            return xf(`${mf}The "interpolate" function is deprecated in v9 (use "to" instead)`), Qd.to(this, e)
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
            ef(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || wu.sort(this), ef(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        bh = Symbol.for("SpringPhase"),
        jh = e => (1 & e[bh]) > 0,
        Rh = e => (2 & e[bh]) > 0,
        Mh = e => (4 & e[bh]) > 0,
        Ch = (e, t) => t ? e[bh] |= 3 : e[bh] &= -3,
        Lh = (e, t) => t ? e[bh] |= 4 : e[bh] &= -5,
        Sh = class extends yh {
          constructor(e, t) {
            if (super(), this.animation = new sh, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !eu.und(e) || !eu.und(t)) {
              const r = eu.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              eu.und(r.default) && (r.default = !0), this.start(r)
            }
          }
          get idle() {
            return !(Rh(this) || this._state.asyncTo) || Mh(this)
          }
          get goal() {
            return Qu(this.animation.to)
          }
          get velocity() {
            const e = Pf(this);
            return e instanceof Tf ? e.lastVelocity || 0 : e.getPayload().map((e => e.lastVelocity || 0))
          }
          get hasAnimated() {
            return jh(this)
          }
          get isAnimating() {
            return Rh(this)
          }
          get isPaused() {
            return Mh(this)
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
            } = n, l = Df(n.to);
            !l && Zu(n.to) && (o = ou(Qu(n.to))), n.values.forEach(((i, s) => {
              if (i.done) return;
              const c = i.constructor == If ? 1 : l ? l[s].lastPosition : o[s];
              let d = n.immediate,
                u = c;
              if (!d) {
                if (u = i.lastPosition, a.tension <= 0) return void(i.done = !0);
                let t = i.elapsedTime += e;
                const r = n.fromValues[s],
                  o = null != i.v0 ? i.v0 : i.v0 = eu.arr(a.velocity) ? a.velocity[s] : a.velocity;
                let l;
                const f = a.precision || (r == c ? .005 : Math.min(1, .001 * Math.abs(c - r)));
                if (eu.und(a.duration))
                  if (a.decay) {
                    const e = !0 === a.decay ? .998 : a.decay,
                      n = Math.exp(-(1 - e) * t);
                    u = r + o / (1 - e) * (1 - n), d = Math.abs(i.lastPosition - u) <= f, l = o * n
                  } else {
                    l = null == i.lastVelocity ? o : i.lastVelocity;
                    const t = a.restVelocity || f / 10,
                      n = a.clamp ? 0 : a.bounce,
                      s = !eu.und(n),
                      h = r == c ? i.v0 > 0 : r < c;
                    let v, p = !1;
                    const g = 1,
                      m = Math.ceil(e / g);
                    for (let e = 0; e < m && (v = Math.abs(l) > t, v || (d = Math.abs(c - u) <= f, !d)); ++e) s && (p = u == c || u > c == h, p && (l = -l * n, u = c)), l += (1e-6 * -a.tension * (u - c) + .001 * -a.friction * l) / a.mass * g, u += l * g
                  }
                else {
                  let n = 1;
                  a.duration > 0 && (this._memoizedDuration !== a.duration && (this._memoizedDuration = a.duration, i.durationProgress > 0 && (i.elapsedTime = a.duration * i.durationProgress, t = i.elapsedTime += e)), n = (a.progress || 0) + t / this._memoizedDuration, n = n > 1 ? 1 : n < 0 ? 0 : n, i.durationProgress = n), u = r + a.easing(n) * (c - r), l = (u - i.lastPosition) / e, d = 1 == n
                }
                i.lastVelocity = l, Number.isNaN(u) && (console.warn("Got NaN while animating:", this), d = !0)
              }
              l && !l[s].done && (d = !1), d ? i.done = !0 : t = !1, i.setValue(u, a.round) && (r = !0)
            }));
            const i = Pf(this),
              s = i.getValue();
            if (t) {
              const e = Qu(n.to);
              s === e && !r || a.decay ? r && a.decay && this._onChange(s) : (i.setValue(e), this._onChange(e)), this._stop()
            } else r && this._onChange(s)
          }
          set(e) {
            return Id.batchedUpdates((() => {
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
            if (Rh(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              Id.batchedUpdates((() => {
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
            return eu.und(e) ? (r = this.queue || [], this.queue = []) : r = [eu.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(r.map((e => this._update(e)))).then((e => dh(this, e)))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), ph(this._state, e && this._lastCallId), Id.batchedUpdates((() => this._stop(t, e))), this
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
            r = eu.obj(r) ? r[t] : r, (null == r || th(r)) && (r = void 0), n = eu.obj(n) ? n[t] : n, null == n && (n = void 0);
            const o = {
              to: r,
              from: n
            };
            return jh(this) || (e.reverse && ([r, n] = [n, r]), n = Qu(n), eu.und(n) ? Pf(this) || this._set(r) : this._set(n)), o
          }
          _update({
            ...e
          }, t) {
            const {
              key: r,
              defaultProps: n
            } = this;
            e.default && Object.assign(n, $f(e, ((e, t) => /^on/.test(t) ? qf(e, r) : e))), Ih(this, e, "onProps"), Nh(this, "onProps", e, this);
            const o = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const a = this._state;
            return ch(++this._lastCallId, {
              key: r,
              props: e,
              defaultProps: n,
              state: a,
              actions: {
                pause: () => {
                  Mh(this) || (Lh(this, !0), su(a.pauseQueue), Nh(this, "onPause", fh(this, Eh(this, this.animation.to)), this))
                },
                resume: () => {
                  Mh(this) && (Lh(this, !1), Rh(this) && this._resume(), su(a.resumeQueue), Nh(this, "onResume", fh(this, Eh(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, o)
              }
            }).then((r => {
              if (e.loop && r.finished && (!t || !r.noop)) {
                const t = Ph(e);
                if (t) return this._update(t, !0)
              }
              return r
            }))
          }
          _merge(e, t, r) {
            if (t.cancel) return this.stop(!0), r(hh(this));
            const n = !eu.und(e.to),
              o = !eu.und(e.from);
            if (n || o) {
              if (!(t.callId > this._lastToId)) return r(hh(this));
              this._lastToId = t.callId
            }
            const {
              key: a,
              defaultProps: l,
              animation: i
            } = this, {
              to: s,
              from: c
            } = i;
            let {
              to: d = s,
              from: u = c
            } = e;
            !o || n || t.default && !eu.und(d) || (d = u), t.reverse && ([d, u] = [u, d]);
            const f = !tu(u, c);
            f && (i.from = u), u = Qu(u);
            const h = !tu(d, s);
            h && this._focus(d);
            const v = th(t.to),
              {
                config: p
              } = i,
              {
                decay: g,
                velocity: m
              } = p;
            (n || o) && (p.velocity = 0), t.config && !v && function(e, t, r) {
              r && (lh(r = {
                ...r
              }, t), t = {
                ...r,
                ...t
              }), lh(e, t), Object.assign(e, t);
              for (const t in oh) null == e[t] && (e[t] = oh[t]);
              let {
                frequency: n,
                damping: o
              } = e;
              const {
                mass: a
              } = e;
              eu.und(n) || (n < .01 && (n = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / n, 2) * a, e.friction = 4 * Math.PI * o * a / n)
            }(p, Xf(t.config, a), t.config !== l.config ? Xf(l.config, a) : void 0);
            let w = Pf(this);
            if (!w || eu.und(d)) return r(fh(this, !0));
            const x = eu.und(t.reset) ? o && !t.default : !eu.und(u) && Uf(t.reset, a),
              y = x ? u : this.get(),
              b = Jf(d),
              j = eu.num(b) || eu.arr(b) || bf(b),
              R = !v && (!j || Uf(l.immediate || t.immediate, a));
            if (h) {
              const e = Bf(d);
              if (e !== w.constructor) {
                if (!R) throw Error(`Cannot animate between ${w.constructor.name} and ${e.name}, as the "to" prop suggests`);
                w = this._set(b)
              }
            }
            const M = w.constructor;
            let C = Zu(d),
              L = !1;
            if (!C) {
              const e = x || !jh(this) && f;
              (h || e) && (L = tu(Jf(y), b), C = !L), (tu(i.immediate, R) || R) && tu(p.decay, g) && tu(p.velocity, m) || (C = !0)
            }
            if (L && Rh(this) && (i.changed && !x ? C = !0 : C || this._stop(s)), !v && ((C || Zu(s)) && (i.values = w.getPayload(), i.toValues = Zu(d) ? null : M == If ? [1] : ou(b)), i.immediate != R && (i.immediate = R, R || x || this._set(s)), C)) {
              const {
                onRest: e
              } = i;
              ru(Th, (e => Ih(this, t, e)));
              const n = fh(this, Eh(this, s));
              su(this._pendingCalls, n), this._pendingCalls.add(r), i.changed && Id.batchedUpdates((() => {
                i.changed = !x, e?.(n, this), x ? Xf(l.onRest, n) : i.onStart?.(n, this)
              }))
            }
            x && this._set(y), v ? r(vh(t.to, t, this._state, this)) : C ? this._start() : Rh(this) && !h ? this._pendingCalls.add(r) : r(uh(y))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && (Ju(this) && this._detach(), t.to = e, Ju(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            Zu(t) && (nf(t, this), wh(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            Zu(e) && of(e, this)
          }
          _set(e, t = !0) {
            const r = Qu(e);
            if (!eu.und(r)) {
              const e = Pf(this);
              if (!e || !tu(r, e.getValue())) {
                const n = Bf(r);
                e && e.constructor == n ? e.setValue(r) : _f(this, n.create(r)), e && Id.batchedUpdates((() => {
                  this._onChange(r, t)
                }))
              }
            }
            return Pf(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, Nh(this, "onStart", fh(this, Eh(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), Xf(this.animation.onChange, e, this)), Xf(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            Pf(this).reset(Qu(e.to)), e.immediate || (e.fromValues = e.values.map((e => e.lastPosition))), Rh(this) || (Ch(this, !0), Mh(this) || this._resume())
          }
          _resume() {
            Qd.skipAnimation ? this.finish() : wu.start(this)
          }
          _stop(e, t) {
            if (Rh(this)) {
              Ch(this, !1);
              const r = this.animation;
              ru(r.values, (e => {
                e.done = !0
              })), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), ef(this, {
                type: "idle",
                parent: this
              });
              const n = t ? hh(this.get()) : fh(this.get(), Eh(this, e ?? r.to));
              su(this._pendingCalls, n), r.changed && (r.changed = !1, Nh(this, "onRest", n, this))
            }
          }
        };

      function Eh(e, t) {
        const r = Jf(t);
        return tu(Jf(e.get()), r)
      }

      function Ph(e, t = e.loop, r = e.to) {
        const n = Xf(t);
        if (n) {
          const o = !0 !== n && Qf(n),
            a = (o || e).reverse,
            l = !o || o.reset;
          return _h({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !a || th(r) ? r : void 0,
            from: l ? e.from : void 0,
            reset: l,
            ...o
          })
        }
      }

      function _h(e) {
        const {
          to: t,
          from: r
        } = e = Qf(e), n = new Set;
        return eu.obj(t) && Ah(t, n), eu.obj(r) && Ah(r, n), e.keys = n.size ? Array.from(n) : null, e
      }

      function Dh(e) {
        const t = _h(e);
        return eu.und(t.default) && (t.default = $f(t)), t
      }

      function Ah(e, t) {
        nu(e, ((e, r) => null != e && t.add(r)))
      }
      var Th = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function Ih(e, t, r) {
        e.animation[r] = t[r] !== Wf(t, r) ? qf(t[r], e.key) : void 0
      }

      function Nh(e, t, ...r) {
        e.animation[t]?.(...r), e.defaultProps[t]?.(...r)
      }
      var Oh = ["onStart", "onChange", "onRest"],
        kh = 1,
        Hh = class {
          constructor(e, t) {
            this.id = kh++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
              eu.und(r) || this.springs[t].set(r)
            }
          }
          update(e) {
            return e && this.queue.push(_h(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = ou(e).map(_h) : this.queue = [], this._flush ? this._flush(this, t) : (Uh(this, t), Bh(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const r = this.springs;
              ru(ou(t), (t => r[t].stop(!!e)))
            } else ph(this._state, this._lastAsyncId), this.each((t => t.stop(!!e)));
            return this
          }
          pause(e) {
            if (eu.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              ru(ou(e), (e => t[e].pause()))
            }
            return this
          }
          resume(e) {
            if (eu.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              ru(ou(e), (e => t[e].resume()))
            }
            return this
          }
          each(e) {
            nu(this.springs, e)
          }
          _onFrame() {
            const {
              onStart: e,
              onChange: t,
              onRest: r
            } = this._events, n = this._active.size > 0, o = this._changed.size > 0;
            (n && !this._started || o && !this._started) && (this._started = !0, au(e, (([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            })));
            const a = !n && this._started,
              l = o || a && r.size ? this.get() : null;
            o && t.size && au(t, (([e, t]) => {
              t.value = l, e(t, this, this._item)
            })), a && (this._started = !1, au(r, (([e, t]) => {
              t.value = l, e(t, this, this._item)
            })))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            Id.onFrame(this._onFrame)
          }
        };

      function Bh(e, t) {
        return Promise.all(t.map((t => zh(e, t)))).then((t => dh(e, t)))
      }
      async function zh(e, t, r) {
        const {
          keys: n,
          to: o,
          from: a,
          loop: l,
          onRest: i,
          onResolve: s
        } = t, c = eu.obj(t.default) && t.default;
        l && (t.loop = !1), !1 === o && (t.to = null), !1 === a && (t.from = null);
        const d = eu.arr(o) || eu.fun(o) ? o : void 0;
        d ? (t.to = void 0, t.onRest = void 0, c && (c.onRest = void 0)) : ru(Oh, (r => {
          const n = t[r];
          if (eu.fun(n)) {
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
            }, c && (c[r] = t[r])
          }
        }));
        const u = e._state;
        t.pause === !u.paused ? (u.paused = t.pause, su(t.pause ? u.pauseQueue : u.resumeQueue)) : u.paused && (t.pause = !0);
        const f = (n || Object.keys(e.springs)).map((r => e.springs[r].start(t))),
          h = !0 === t.cancel || !0 === Wf(t, "cancel");
        (d || h && u.asyncId) && f.push(ch(++e._lastAsyncId, {
          props: t,
          state: u,
          actions: {
            pause: Jd,
            resume: Jd,
            start(t, r) {
              h ? (ph(u, e._lastAsyncId), r(hh(e))) : (t.onRest = i, r(vh(d, t, u, e)))
            }
          }
        })), u.paused && await new Promise((e => {
          u.resumeQueue.add(e)
        }));
        const v = dh(e, await Promise.all(f));
        if (l && v.finished && (!r || !v.noop)) {
          const r = Ph(t, l, o);
          if (r) return Uh(e, [r]), zh(e, r, !0)
        }
        return s && Id.batchedUpdates((() => s(v, e, e.item))), v
      }

      function Vh(e, t) {
        const r = {
          ...e.springs
        };
        return t && ru(ou(t), (e => {
          eu.und(e.keys) && (e = _h(e)), eu.obj(e.to) || (e = {
            ...e,
            to: void 0
          }), Xh(r, e, (e => Gh(e)))
        })), Fh(e, r), r
      }

      function Fh(e, t) {
        nu(t, ((t, r) => {
          e.springs[r] || (e.springs[r] = t, nf(t, e))
        }))
      }

      function Gh(e, t) {
        const r = new Sh;
        return r.key = e, t && nf(r, t), r
      }

      function Xh(e, t, r) {
        t.keys && ru(t.keys, (n => {
          (e[n] || (e[n] = r(n)))._prepareNode(t)
        }))
      }

      function Uh(e, t) {
        ru(t, (t => {
          Xh(e.springs, t, (t => Gh(t, e)))
        }))
      }
      var qh, Wh, Kh = ({
          children: e,
          ...t
        }) => {
          const r = (0, m.useContext)($h),
            n = t.pause || !!r.pause,
            o = t.immediate || !!r.immediate;
          t = function(e, t) {
            const [r] = (0, m.useState)((() => ({
              inputs: t,
              result: e()
            }))), n = (0, m.useRef)(), o = n.current;
            let a = o;
            return a ? Boolean(t && a.inputs && function(e, t) {
              if (e.length !== t.length) return !1;
              for (let r = 0; r < e.length; r++)
                if (e[r] !== t[r]) return !1;
              return !0
            }(t, a.inputs)) || (a = {
              inputs: t,
              result: e()
            }) : a = r, (0, m.useEffect)((() => {
              n.current = a, o == r && (r.inputs = r.result = void 0)
            }), [a]), a.result
          }((() => ({
            pause: n,
            immediate: o
          })), [n, o]);
          const {
            Provider: a
          } = $h;
          return m.createElement(a, {
            value: t
          }, e)
        },
        $h = (qh = Kh, Wh = {}, Object.assign(qh, m.createContext(Wh)), qh.Provider._context = qh, qh.Consumer._context = qh, qh);
      Kh.Provider = $h.Provider, Kh.Consumer = $h.Consumer;
      var Yh = () => {
        const e = [],
          t = function(t) {
            yf(`${mf}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
            const n = [];
            return ru(e, ((e, o) => {
              if (eu.und(t)) n.push(e.start());
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
          return ru(e, (e => e.pause(...arguments))), this
        }, t.resume = function() {
          return ru(e, (e => e.resume(...arguments))), this
        }, t.set = function(t) {
          ru(e, ((e, r) => {
            const n = eu.fun(t) ? t(r, e) : t;
            n && e.set(n)
          }))
        }, t.start = function(t) {
          const r = [];
          return ru(e, ((e, n) => {
            if (eu.und(t)) r.push(e.start());
            else {
              const o = this._getProps(t, e, n);
              o && r.push(e.start(o))
            }
          })), r
        }, t.stop = function() {
          return ru(e, (e => e.stop(...arguments))), this
        }, t.update = function(t) {
          return ru(e, ((e, r) => e.update(this._getProps(t, e, r)))), this
        };
        const r = function(e, t, r) {
          return eu.fun(e) ? e(r, t) : e
        };
        return t._getProps = r, t
      };

      function Zh(e, t) {
        const r = eu.fun(e),
          [
            [n], o
          ] = function(e, t, r) {
            const n = eu.fun(t) && t;
            n && !r && (r = []);
            const o = (0, m.useMemo)((() => n || 3 == arguments.length ? Yh() : void 0), []),
              a = (0, m.useRef)(0),
              l = Mf(),
              i = (0, m.useMemo)((() => ({
                ctrls: [],
                queue: [],
                flush(e, t) {
                  const r = Vh(e, t);
                  return a.current > 0 && !i.queue.length && !Object.keys(r).some((t => !e.springs[t])) ? Bh(e, t) : new Promise((n => {
                    Fh(e, r), i.queue.push((() => {
                      n(Bh(e, t))
                    })), l()
                  }))
                }
              })), []),
              s = (0, m.useRef)([...i.ctrls]),
              c = [],
              d = Sf(e) || 0;

            function u(e, r) {
              for (let o = e; o < r; o++) {
                const e = s.current[o] || (s.current[o] = new Hh(null, i.flush)),
                  r = n ? n(o, e) : t[o];
                r && (c[o] = Dh(r))
              }
            }(0, m.useMemo)((() => {
              ru(s.current.slice(e, d), (e => {
                rh(e, o), e.stop(!0)
              })), s.current.length = e, u(d, e)
            }), [e]), (0, m.useMemo)((() => {
              u(0, Math.min(d, e))
            }), r);
            const f = s.current.map(((e, t) => Vh(e, c[t]))),
              h = (0, m.useContext)(Kh),
              v = Sf(h),
              p = h !== v && eh(h);
            jf((() => {
              a.current++, i.ctrls = s.current;
              const {
                queue: e
              } = i;
              e.length && (i.queue = [], ru(e, (e => e()))), ru(s.current, ((e, t) => {
                o?.add(e), p && e.start({
                  default: h
                });
                const r = c[t];
                r && (nh(e, r.ref), e.ref ? e.queue.push(r) : e.start(r))
              }))
            })), Cf((() => () => {
              ru(i.ctrls, (e => e.stop(!0)))
            }));
            const g = f.map((e => ({
              ...e
            })));
            return o ? [g, o] : g
          }(1, r ? e : [e], r ? t || [] : t);
        return r || 2 == arguments.length ? [n, o] : n
      }
      var Qh = () => Yh(),
        Jh = () => (0, m.useState)(Qh)[0];
      var ev = 1,
        tv = class extends yh {
          constructor(e, t) {
            super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = Vu(...t);
            const r = this._get(),
              n = Bf(r);
            _f(this, n.create(r))
          }
          advance(e) {
            const t = this._get();
            tu(t, this.get()) || (Pf(this).setValue(t), this._onChange(t, this.idle)), !this.idle && nv(this._active) && ov(this)
          }
          _get() {
            const e = eu.arr(this.source) ? this.source.map(Qu) : ou(Qu(this.source));
            return this.calc(...e)
          }
          _start() {
            this.idle && !nv(this._active) && (this.idle = !1, ru(Df(this), (e => {
              e.done = !1
            })), Qd.skipAnimation ? (Id.batchedUpdates((() => this.advance())), ov(this)) : wu.start(this))
          }
          _attach() {
            let e = 1;
            ru(ou(this.source), (t => {
              Zu(t) && nf(t, this), wh(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
            })), this.priority = e, this._start()
          }
          _detach() {
            ru(ou(this.source), (e => {
              Zu(e) && of(e, this)
            })), this._active.clear(), ov(this)
          }
          eventObserved(e) {
            "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = ou(this.source).reduce(((e, t) => Math.max(e, (wh(t) ? t.priority : 0) + 1)), 0))
          }
        };

      function rv(e) {
        return !1 !== e.idle
      }

      function nv(e) {
        return !e.size || Array.from(e).every(rv)
      }

      function ov(e) {
        e.idle || (e.idle = !0, ru(Df(e), (e => {
          e.done = !0
        })), ef(e, {
          type: "idle",
          parent: e
        }))
      }
      Qd.assign({
        createStringInterpolator: gf,
        to: (e, t) => new tv(e, t)
      }), wu.advance;
      var av = /^--/;

      function lv(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || av.test(e) || sv.hasOwnProperty(e) && sv[e] ? ("" + t).trim() : t + "px"
      }
      var iv = {},
        sv = {
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
        cv = ["Webkit", "Ms", "Moz", "O"];
      sv = Object.keys(sv).reduce(((e, t) => (cv.forEach((r => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(r, t)] = e[t])), e)), sv);
      var dv = /^(matrix|translate|scale|rotate|skew)/,
        uv = /^(translate)/,
        fv = /^(rotate|skew)/,
        hv = (e, t) => eu.num(e) && 0 !== e ? e + t : e,
        vv = (e, t) => eu.arr(e) ? e.every((e => vv(e, t))) : eu.num(e) ? e === t : parseFloat(e) === t,
        pv = class extends Of {
          constructor({
            x: e,
            y: t,
            z: r,
            ...n
          }) {
            const o = [],
              a = [];
            (e || t || r) && (o.push([e || 0, t || 0, r || 0]), a.push((e => [`translate3d(${e.map((e=>hv(e,"px"))).join(",")})`, vv(e, 0)]))), nu(n, ((e, t) => {
              if ("transform" === t) o.push([e || ""]), a.push((e => [e, "" === e]));
              else if (dv.test(t)) {
                if (delete n[t], eu.und(e)) return;
                const r = uv.test(t) ? "px" : fv.test(t) ? "deg" : "";
                o.push(ou(e)), a.push("rotate3d" === t ? ([e, t, n, o]) => [`rotate3d(${e},${t},${n},${hv(o,r)})`, vv(o, 0)] : e => [`${t}(${e.map((e=>hv(e,r))).join(",")})`, vv(e, t.startsWith("scale") ? 1 : 0)])
              }
            })), o.length && (n.transform = new gv(o, a)), super(n)
          }
        },
        gv = class extends tf {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return ru(this.inputs, ((r, n) => {
              const o = Qu(r[0]),
                [a, l] = this.transforms[n](eu.arr(o) ? o : r.map(Qu));
              e += " " + a, t = t && l
            })), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && ru(this.inputs, (e => ru(e, (e => Zu(e) && nf(e, this)))))
          }
          observerRemoved(e) {
            0 == e && ru(this.inputs, (e => ru(e, (e => Zu(e) && of(e, this)))))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), ef(this, e)
          }
        };
      Qd.assign({
        batchedUpdates: j.unstable_batchedUpdates,
        createStringInterpolator: gf,
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
      var mv = ((e, {
          applyAnimatedValues: t = (() => !1),
          createAnimatedStyle: r = (e => new Of(e)),
          getComponentProps: n = (e => e)
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: r,
              getComponentProps: n
            },
            a = e => {
              const t = Gf(e) || "Anonymous";
              return (e = eu.str(e) ? a[e] || (a[e] = zf(e, o)) : e[Ff] || (e[Ff] = zf(e, o))).displayName = `Animated(${t})`, e
            };
          return nu(e, ((t, r) => {
            eu.arr(e) && (r = Gf(t)), a[r] = a(t)
          })), {
            animated: a
          }
        })(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
          applyAnimatedValues: function(e, t) {
            if (!e.nodeType || !e.setAttribute) return !1;
            const r = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
              {
                style: n,
                children: o,
                scrollTop: a,
                scrollLeft: l,
                viewBox: i,
                ...s
              } = t,
              c = Object.values(s),
              d = Object.keys(s).map((t => r || e.hasAttribute(t) ? t : iv[t] || (iv[t] = t.replace(/([A-Z])/g, (e => "-" + e.toLowerCase())))));
            void 0 !== o && (e.textContent = o);
            for (const t in n)
              if (n.hasOwnProperty(t)) {
                const r = lv(t, n[t]);
                av.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
              } d.forEach(((t, r) => {
              e.setAttribute(t, c[r])
            })), void 0 !== a && (e.scrollTop = a), void 0 !== l && (e.scrollLeft = l), void 0 !== i && e.setAttribute("viewBox", i)
          },
          createAnimatedStyle: e => new pv(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...r
          }) => r
        }),
        wv = mv.animated;
      const xv = (e, t, r) => {
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
        yv = e => {
          const t = (e, t, r) => {
            r(e, t) && (e = t)
          };
          return [...e.children].reduce(((e, r) => {
            const n = r.getBoundingClientRect();
            return e ? (t(e.top, n.top, ((e, t) => e < t)), t(e.bottom, n.bottom, ((e, t) => e > t)), t(e.left, n.left, ((e, t) => e < t)), t(e.right, n.right, ((e, t) => e > t)), t(e.height, e.bottom - e.top, (() => !0)), t(e.width, e.right - e.left, (() => !0)), t(e.x, e.left, (() => !0)), t(e.y, e.top, (() => !0)), n) : n
          }), null)
        },
        bv = (e, t, r, n) => {
          let o = r[0],
            a = r[1];
          const {
            a: l
          } = new DOMMatrix(e.style.transform), i = n / 100, s = yv(e), c = t.getBoundingClientRect(), d = s.width / l / 2 * i - c.width / 2, u = s.height / l / 2 * i - c.height / 2, f = -o > d, h = o > d, v = a > u, p = -a > u;
          return f && !h ? o = -d : h && !f && (o = d), v && !p ? a = u : p && !v && (a = -u), {
            xy: [o, a],
            horizontalOffset: d,
            verticalOffset: u
          }
        },
        jv = {
          scrollFactor: 2e3,
          pinchFactor: 300,
          dragFactor: 1.25
        };

      function Rv(e, t) {
        return e.map((function(e, r) {
          return e + t[r]
        }))
      }

      function Mv(e, t) {
        return e.map((function(e, r) {
          return e - t[r]
        }))
      }

      function Cv(e) {
        return Math.hypot.apply(Math, e)
      }

      function Lv(e, t) {
        void 0 === t && (t = e);
        var r = Cv(t),
          n = 0 === r ? 0 : 1 / r,
          o = t.map((function(e) {
            return n * e
          }));
        return {
          distance: Cv(e),
          direction: o
        }
      }

      function Sv(e, t, r) {
        var n = Cv(t),
          o = 0 === n ? 0 : 1 / n,
          a = 0 === r ? 0 : 1 / r,
          l = a * n,
          i = t.map((function(e) {
            return a * e
          })),
          s = t.map((function(e) {
            return o * e
          }));
        return {
          velocities: i,
          velocity: l,
          distance: Cv(e),
          direction: s
        }
      }

      function Ev(e) {
        return Math.sign ? Math.sign(e) : Number(e > 0) - Number(e < 0) || +e
      }

      function Pv(e, t, r) {
        return 0 === t || Math.abs(t) === 1 / 0 ? function(e, t) {
          return Math.pow(e, 5 * t)
        }(e, r) : e * t * r / (t + r * e)
      }

      function _v(e, t, r, n) {
        return void 0 === n && (n = .15), 0 === n ? function(e, t, r) {
          return Math.max(t, Math.min(e, r))
        }(e, t, r) : e < t ? -Pv(t - e, r - t, n) + t : e > r ? +Pv(e - r, r - t, n) + r : e
      }

      function Dv(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
      }

      function Av() {
        return Av = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, Av.apply(this, arguments)
      }

      function Tv(e, t) {
        e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
      }

      function Iv(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
      }

      function Nv(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function Ov(e, t) {
        var r;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
          if (Array.isArray(e) || (r = function(e, t) {
              if (e) {
                if ("string" == typeof e) return Nv(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Nv(e, t) : void 0
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

      function kv() {}

      function Hv() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return 0 === t.length ? kv : 1 === t.length ? t[0] : function() {
          for (var e, r, n = Ov(t); !(r = n()).done;) e = r.value.apply(this, arguments) || e;
          return e
        }
      }

      function Bv(e, t) {
        if (void 0 === e) {
          if (void 0 === t) throw new Error("Must define fallback value if undefined is expected");
          e = t
        }
        return Array.isArray(e) ? e : [e, e]
      }

      function zv(e, t) {
        return Object.assign({}, t, e || {})
      }

      function Vv(e) {
        if ("function" == typeof e) {
          for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
          return e.apply(void 0, r)
        }
        return e
      }

      function Fv(e, t) {
        void 0 === e && (e = {});
        for (var r = {}, n = 0, o = Object.entries(t); n < o.length; n++) {
          var a = o[n],
            l = a[0],
            i = a[1];
          switch (typeof i) {
            case "function":
              r[l] = i.call(r, e[l], l, e);
              break;
            case "object":
              r[l] = Fv(e[l], i);
              break;
            case "boolean":
              i && (r[l] = e[l])
          }
        }
        return r
      }

      function Gv() {
        return "undefined" != typeof window && "ontouchstart" in window
      }

      function Xv(e) {
        return "pointerId" in e ? null : "touchend" === e.type ? e.changedTouches : e.targetTouches
      }

      function Uv(e) {
        return Array.from(Xv(e)).map((function(e) {
          return e.identifier
        }))
      }

      function qv(e) {
        return {
          buttons: "buttons" in e ? e.buttons : 0,
          shiftKey: e.shiftKey,
          altKey: e.altKey,
          metaKey: e.metaKey,
          ctrlKey: e.ctrlKey
        }
      }
      var Wv = function(e) {
        return e
      };

      function Kv(e, t) {
        void 0 === t && (t = Wv);
        var r = Xv(e),
          n = r ? r[0] : e;
        return t([n.clientX, n.clientY])
      }

      function $v(e, t, r) {
        void 0 === r && (r = Wv);
        var n = Array.from(e.touches).filter((function(e) {
            return t.includes(e.identifier)
          })),
          o = n[0],
          a = n[1];
        if (!o || !a) throw Error("The event doesn't have two pointers matching the pointerIds");
        var l = a.clientX - o.clientX,
          i = a.clientY - o.clientY,
          s = (a.clientX + o.clientX) / 2,
          c = (a.clientY + o.clientY) / 2;
        return {
          values: r([Math.hypot(l, i), -180 * Math.atan2(l, i) / Math.PI]),
          origin: r([s, c])
        }
      }

      function Yv(e, t) {
        void 0 === t && (t = Wv);
        var r = e.deltaX,
          n = e.deltaY,
          o = e.deltaMode;
        return 1 === o ? (r *= 40, n *= 40) : 2 === o && (r *= 800, n *= 800), t([r, n])
      }

      function Zv(e, t) {
        return void 0 === t && (t = Wv), t([e.scale, e.rotation])
      }
      var Qv = {
          threshold: function(e) {
            return void 0 === e && (e = 0), Bv(e)
          },
          rubberband: function(e) {
            switch (void 0 === e && (e = 0), e) {
              case !0:
                return Bv(.15);
              case !1:
                return Bv(0);
              default:
                return Bv(e)
            }
          },
          enabled: function(e) {
            return void 0 === e && (e = !0), e
          },
          triggerAllEvents: function(e) {
            return void 0 === e && (e = !1), e
          },
          initial: function(e) {
            return void 0 === e && (e = 0), "function" == typeof e ? e : Bv(e)
          },
          transform: !0
        },
        Jv = Av({}, Qv, {
          axis: !0,
          lockDirection: function(e) {
            return void 0 === e && (e = !1), e
          },
          bounds: function(e) {
            if (void 0 === e && (e = {}), "function" == typeof e) return function(t) {
              return Jv.bounds(e(t))
            };
            var t = e,
              r = t.left,
              n = void 0 === r ? -1 / 0 : r,
              o = t.right,
              a = void 0 === o ? 1 / 0 : o,
              l = t.top,
              i = void 0 === l ? -1 / 0 : l,
              s = t.bottom;
            return [
              [n, a],
              [i, void 0 === s ? 1 / 0 : s]
            ]
          }
        }),
        ep = "undefined" != typeof window && window.document && window.document.createElement,
        tp = {
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
            return void 0 === e && (e = ep ? window : void 0), e
          })),
          eventOptions: function(e) {
            var t = void 0 === e ? {} : e,
              r = t.passive,
              n = void 0 === r || r,
              o = t.capture;
            return {
              passive: n,
              capture: void 0 !== o && o
            }
          },
          transform: !0
        },
        rp = Av({}, Qv, {
          bounds: function(e, t, r) {
            var n = r.distanceBounds,
              o = void 0 === n ? {} : n,
              a = r.angleBounds,
              l = void 0 === a ? {} : a,
              i = function(e) {
                var t = zv(Vv(o, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              },
              s = function(e) {
                var t = zv(Vv(l, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              };
            return "function" != typeof o && "function" != typeof l ? [i(), s()] : function(e) {
              return [i(e), s(e)]
            }
          }
        }),
        np = Av({}, Jv, {
          useTouch: function(e) {
            void 0 === e && (e = !1);
            var t = Gv(),
              r = "undefined" != typeof window && "onpointerdown" in window;
            return !(!e || !t) || !(!t || r)
          },
          experimental_preventWindowScrollY: function(e) {
            return void 0 === e && (e = !1), e
          },
          threshold: function(e, t, r) {
            var n = r.filterTaps,
              o = void 0 !== n && n,
              a = r.lockDirection,
              l = void 0 !== a && a,
              i = r.axis,
              s = Bv(e, o ? 3 : l || (void 0 === i ? void 0 : i) ? 1 : 0);
            return this.filterTaps = o, s
          },
          swipeVelocity: function(e) {
            return void 0 === e && (e = .5), Bv(e)
          },
          swipeDistance: function(e) {
            return void 0 === e && (e = 50), Bv(e)
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

      function op(e) {
        return void 0 === e && (e = {}), Fv(e, Jv)
      }

      function ap(e) {
        return Av({
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
          cancel: kv,
          canceled: !1,
          memo: void 0,
          args: void 0
        }, e)
      }

      function lp() {
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
          drag: ap({
            _pointerId: void 0,
            axis: void 0,
            xy: [0, 0],
            vxvy: [0, 0],
            velocity: 0,
            distance: 0,
            tap: !1,
            swipe: [0, 0]
          }),
          pinch: ap({
            _pointerIds: [],
            da: [0, 0],
            vdva: [0, 0],
            origin: void 0,
            turns: 0
          }),
          wheel: ap({
            axis: void 0,
            xy: [0, 0],
            vxvy: [0, 0],
            velocity: 0,
            distance: 0
          }),
          move: ap({
            axis: void 0,
            xy: [0, 0],
            vxvy: [0, 0],
            velocity: 0,
            distance: 0
          }),
          scroll: ap({
            axis: void 0,
            xy: [0, 0],
            vxvy: [0, 0],
            velocity: 0,
            distance: 0
          })
        }
      }
      var ip = new Map,
        sp = function(e) {
          return e
        },
        cp = function() {
          function e(e, t) {
            var r = this;
            void 0 === t && (t = []), this.controller = e, this.args = t, this.debounced = !0, this.setTimeout = function(e, t) {
              var n;
              void 0 === t && (t = 140), clearTimeout(r.controller.timeouts[r.stateKey]);
              for (var o = arguments.length, a = new Array(o > 2 ? o - 2 : 0), l = 2; l < o; l++) a[l - 2] = arguments[l];
              r.controller.timeouts[r.stateKey] = (n = window).setTimeout.apply(n, [e, t].concat(a))
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
              var o = r.controller.pointerIds.size || r.controller.touchIds.size,
                a = r.controller.state.shared.buttons > 0 || o > 0,
                l = Av({}, r.controller.state.shared, r.state, r.mapStateValues(r.state), {
                  locked: !!document.pointerLockElement,
                  touches: o,
                  down: a
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
              o = r._initial,
              a = r._active,
              l = r._intentional,
              i = r.lastOffset,
              s = r.movement,
              c = r._threshold,
              d = this.getInternalMovement(e, this.state),
              u = !1 === l[0] ? dp(d[0], c[0]) : l[0],
              f = !1 === l[1] ? dp(d[1], c[1]) : l[1],
              h = this.checkIntentionality([u, f], d);
            if (h._blocked) return Av({}, h, {
              _movement: d,
              delta: [0, 0]
            });
            var v = h._intentional,
              p = d,
              g = [!1 !== v[0] ? d[0] - v[0] : 0, !1 !== v[1] ? d[1] - v[1] : 0],
              m = Rv(g, i),
              w = a ? t : [0, 0];
            return g = up(n, Rv(g, o), w), Av({}, h, {
              intentional: !1 !== v[0] || !1 !== v[1],
              _initial: o,
              _movement: p,
              movement: g,
              values: e,
              offset: up(n, m, w),
              delta: Mv(g, s)
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
              return this.config.transform || this.controller.config.transform || sp
            }
          }]) && Dv(t.prototype, r), e
        }();

      function dp(e, t) {
        return Math.abs(e) >= t && Ev(e) * t
      }

      function up(e, t, r) {
        var n = t[0],
          o = t[1],
          a = r[0],
          l = r[1],
          i = e[0],
          s = i[0],
          c = i[1],
          d = e[1],
          u = d[0],
          f = d[1];
        return [_v(n, s, c, a), _v(o, u, f, l)]
      }

      function fp(e, t, r) {
        var n = e.state,
          o = t.timeStamp,
          a = t.type,
          l = n.values;
        return {
          _lastEventType: a,
          event: t,
          timeStamp: o,
          elapsedTime: r ? 0 : o - n.startTime,
          previous: l
        }
      }

      function hp(e, t, r, n) {
        var o = e.state,
          a = e.config,
          l = e.stateKey,
          i = e.args,
          s = e.transform,
          c = o.offset,
          d = r.timeStamp,
          u = a.initial,
          f = a.bounds,
          h = Mv(s(a.threshold), s([0, 0])).map(Math.abs),
          v = Av({}, lp()[l], {
            _active: !0,
            args: i,
            values: t,
            initial: null != n ? n : t,
            _threshold: h,
            offset: c,
            lastOffset: c,
            startTime: d
          });
        return Av({}, v, {
          _initial: Vv(u, v),
          _bounds: Vv(f, v)
        })
      }
      var vp = function(e) {
        var t = this;
        this.classes = e, this.pointerIds = new Set, this.touchIds = new Set, this.supportsTouchEvents = Gv(), this.supportsGestureEvents = function() {
          try {
            return "constructor" in GestureEvent
          } catch (e) {
            return !1
          }
        }(), this.bind = function() {
          for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
          for (var o, a = {}, l = Ov(t.classes); !(o = l()).done;) new(0, o.value)(t, r).addBindings(a);
          var i = function(e) {
            xp(a, e, (function(n) {
              return t.nativeRefs[e](Av({}, t.state.shared, {
                event: n,
                args: r
              }))
            }))
          };
          for (var s in t.nativeRefs) i(s);
          return t.config.domTarget ? function(e, t) {
            var r = e.config,
              n = e.domListeners,
              o = wp(r);
            if (!o) throw new Error("domTarget must be defined");
            var a = r.eventOptions;
            bp(o, mp(n), a);
            for (var l = 0, i = Object.entries(t); l < i.length; l++) {
              var s = i[l],
                c = s[0],
                d = s[1],
                u = c.slice(2).toLowerCase();
              n.push([u, Hv.apply(void 0, d)])
            }
            yp(o, n, a)
          }(t, a) : function(e, t) {
            for (var r = {}, n = e.config.eventOptions.capture ? "Capture" : "", o = 0, a = Object.entries(t); o < a.length; o++) {
              var l = a[o],
                i = l[0],
                s = l[1],
                c = Array.isArray(s) ? s : [s];
              r[i + n] = Hv.apply(void 0, c)
            }
            return r
          }(t, a)
        }, this.effect = function() {
          return t.config.domTarget && t.bind(), t.clean
        }, this.clean = function() {
          var e = wp(t.config),
            r = t.config.eventOptions;
          e && bp(e, mp(t.domListeners), r), Object.values(t.timeouts).forEach(clearTimeout),
            function(e) {
              var t = e.config,
                r = t.window,
                n = t.eventOptions,
                o = e.windowListeners;
              if (r) {
                for (var a in o) bp(r, o[a], n);
                e.windowListeners = {}
              }
            }(t)
        }, this.classes = e, this.state = lp(), this.timeouts = {}, this.domListeners = [], this.windowListeners = {}
      };

      function pp(e, t) {
        "pointerId" in t ? e.pointerIds.add(t.pointerId) : e.touchIds = new Set(Uv(t))
      }

      function gp(e, t) {
        "pointerId" in t ? e.pointerIds.delete(t.pointerId) : Uv(t).forEach((function(t) {
          return e.touchIds.delete(t)
        }))
      }

      function mp(e) {
        return void 0 === e && (e = []), e.splice(0, e.length)
      }

      function wp(e) {
        var t = e.domTarget;
        return t && "current" in t ? t.current : t
      }

      function xp(e, t, r) {
        e[t] || (e[t] = []), e[t].push(r)
      }

      function yp(e, t, r) {
        void 0 === t && (t = []), void 0 === r && (r = {});
        for (var n, o = Ov(t); !(n = o()).done;) {
          var a = n.value,
            l = a[0],
            i = a[1];
          e.addEventListener(l, i, r)
        }
      }

      function bp(e, t, r) {
        void 0 === t && (t = []), void 0 === r && (r = {});
        for (var n, o = Ov(t); !(n = o()).done;) {
          var a = n.value,
            l = a[0],
            i = a[1];
          e.removeEventListener(l, i, r)
        }
      }

      function jp() {}
      var Rp = function(e) {
        function t() {
          return e.apply(this, arguments) || this
        }
        Tv(t, e);
        var r = t.prototype;
        return r.getInternalMovement = function(e, t) {
          return Mv(e, t.initial)
        }, r.checkIntentionality = function(e, t) {
          if (!1 === e[0] && !1 === e[1]) return {
            _intentional: e,
            axis: this.state.axis
          };
          var r = t.map(Math.abs),
            n = r[0],
            o = r[1],
            a = this.state.axis || (n > o ? "x" : n < o ? "y" : void 0);
          return this.config.axis || this.config.lockDirection ? a ? this.config.axis && a !== this.config.axis ? {
            _intentional: e,
            _blocked: !0,
            axis: a
          } : (e["x" === a ? 1 : 0] = !1, {
            _intentional: e,
            _blocked: !1,
            axis: a
          }) : {
            _intentional: [!1, !1],
            _blocked: !1,
            axis: a
          } : {
            _intentional: e,
            _blocked: !1,
            axis: a
          }
        }, r.getKinematics = function(e, t) {
          var r = this.getMovement(e);
          if (!r._blocked) {
            var n = t.timeStamp - this.state.timeStamp;
            Object.assign(r, Sv(r.movement, r.delta, n))
          }
          return r
        }, r.mapStateValues = function(e) {
          return {
            xy: e.values,
            vxvy: e.velocities
          }
        }, t
      }(cp);

      function Mp(e) {
        "persist" in e && "function" == typeof e.persist && e.persist()
      }
      var Cp = function(e) {
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
              Mp(e),
                function(e, t, r, n) {
                  var o = e.config,
                    a = e.windowListeners;
                  void 0 === r && (r = []), void 0 === n && (n = o.eventOptions), o.window && (bp(o.window, a[t], n), yp(o.window, a[t] = r, n))
                }(t.controller, t.stateKey, [
                  ["touchmove", t.preventScroll],
                  ["touchend", t.clean.bind(Iv(t))],
                  ["touchcancel", t.clean.bind(Iv(t))]
                ], {
                  passive: !1
                }), t.setTimeout(t.startDrag.bind(Iv(t)), 250, e)
            }, t.setUpDelayedDragTrigger = function(e) {
              t.state._dragDelayed = !0, Mp(e), t.setTimeout(t.startDrag.bind(Iv(t)), t.config.delay, e)
            }, t.setStartState = function(e) {
              var r = Kv(e, t.transform);
              t.updateSharedState(qv(e)), t.updateGestureState(Av({}, hp(Iv(t), r, e), fp(Iv(t), e, !0), {
                _pointerId: t.getEventId(e)
              })), t.updateGestureState(t.getMovement(r))
            }, t.onDragStart = function(e) {
              pp(t.controller, e), t.enabled && !t.state._active && (t.setStartState(e), t.setPointerCapture(e), t.shouldPreventWindowScrollY ? t.setUpWindowScrollDetection(e) : t.config.delay > 0 ? t.setUpDelayedDragTrigger(e) : t.startDrag(e, !0))
            }, t.onDragChange = function(e) {
              if (!t.state.canceled && t.state._active && t.isValidEvent(e) && (t.state._lastEventType !== e.type || e.timeStamp !== t.state.timeStamp)) {
                var r;
                if (document.pointerLockElement) {
                  var n = e.movementX,
                    o = e.movementY;
                  r = Rv(t.transform([n, o]), t.state.values)
                } else r = Kv(e, t.transform);
                var a = t.getKinematics(r, e);
                if (!t.state._dragStarted) {
                  if (t.state._dragDelayed) return void t.startDrag(e);
                  if (!t.shouldPreventWindowScrollY) return;
                  if (t.state._dragPreventScroll || !a.axis) return;
                  if ("x" !== a.axis) return void(t.state._active = !1);
                  t.startDrag(e)
                }
                var l = qv(e);
                t.updateSharedState(l);
                var i = fp(Iv(t), e),
                  s = Cv(a._movement),
                  c = t.state._dragIsTap;
                c && s >= 3 && (c = !1), t.updateGestureState(Av({}, i, a, {
                  _dragIsTap: c
                })), t.fireGestureHandler()
              }
            }, t.onDragEnd = function(e) {
              if (gp(t.controller, e), t.isValidEvent(e) && (t.clean(), t.state._active)) {
                t.state._active = !1;
                var r = t.state._dragIsTap,
                  n = t.state.velocities,
                  o = n[0],
                  a = n[1],
                  l = t.state.movement,
                  i = l[0],
                  s = l[1],
                  c = t.state._intentional,
                  d = c[0],
                  u = c[1],
                  f = t.config.swipeVelocity,
                  h = f[0],
                  v = f[1],
                  p = t.config.swipeDistance,
                  g = p[0],
                  m = p[1],
                  w = t.config.swipeDuration,
                  x = Av({}, fp(Iv(t), e), t.getMovement(t.state.values)),
                  y = [0, 0];
                x.elapsedTime < w && (!1 !== d && Math.abs(o) > h && Math.abs(i) > g && (y[0] = Ev(o)), !1 !== u && Math.abs(a) > v && Math.abs(s) > m && (y[1] = Ev(a))), t.updateSharedState({
                  buttons: 0
                }), t.updateGestureState(Av({}, x, {
                  tap: r,
                  swipe: y
                })), t.fireGestureHandler(t.config.filterTaps && !0 === r)
              }
            }, t.clean = function() {
              e.prototype.clean.call(Iv(t)), t.state._dragStarted = !1, t.releasePointerCapture(),
                function(e, t, r) {
                  var n = e.config,
                    o = e.windowListeners;
                  void 0 === r && (r = n.eventOptions), n.window && (bp(n.window, o[t], r), delete o[t])
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
          Tv(t, e);
          var r = t.prototype;
          return r.startDrag = function(e, t) {
            void 0 === t && (t = !1), this.state._active && !this.state._dragStarted && (t || this.setStartState(e), this.updateGestureState({
              _dragStarted: !0,
              _dragPreventScroll: !0,
              cancel: this.onCancel
            }), this.clearTimeout(), this.fireGestureHandler())
          }, r.addBindings = function(e) {
            this.config.useTouch ? (xp(e, "onTouchStart", this.onDragStart), xp(e, "onTouchMove", this.onDragChange), xp(e, "onTouchEnd", this.onDragEnd), xp(e, "onTouchCancel", this.onDragEnd)) : (xp(e, "onPointerDown", this.onDragStart), xp(e, "onPointerMove", this.onDragChange), xp(e, "onPointerUp", this.onDragEnd), xp(e, "onPointerCancel", this.onDragEnd)), this.config.filterTaps && xp(e, this.controller.config.eventOptions.capture ? "onClick" : "onClickCapture", this.onClick)
          }, t
        }(Rp),
        Lp = function(e) {
          function t() {
            var t;
            return (t = e.apply(this, arguments) || this).ingKey = "pinching", t.stateKey = "pinch", t.onPinchStart = function(e) {
              pp(t.controller, e);
              var r = t.controller.touchIds;
              if (t.enabled && !(t.state._active && t.state._pointerIds.every((function(e) {
                  return r.has(e)
                })) || r.size < 2)) {
                var n = Array.from(r).slice(0, 2),
                  o = $v(e, n, t.transform),
                  a = o.values,
                  l = o.origin;
                t.updateSharedState(qv(e)), t.updateGestureState(Av({}, hp(Iv(t), a, e), fp(Iv(t), e, !0), {
                  _pointerIds: n,
                  cancel: t.onCancel,
                  origin: l
                })), t.updateGestureState(t.getMovement(a)), t.fireGestureHandler()
              }
            }, t.onPinchChange = function(e) {
              var r = t.state,
                n = r.canceled,
                o = r._active;
              if (!n && o && e.timeStamp !== t.state.timeStamp) {
                var a = qv(e);
                t.updateSharedState(a);
                try {
                  var l = $v(e, t.state._pointerIds, t.transform),
                    i = l.values,
                    s = l.origin,
                    c = t.getKinematics(i, e);
                  t.updateGestureState(Av({}, fp(Iv(t), e), c, {
                    origin: s
                  })), t.fireGestureHandler()
                } catch (r) {
                  t.onPinchEnd(e)
                }
              }
            }, t.onPinchEnd = function(e) {
              gp(t.controller, e);
              var r = Uv(e);
              t.state._pointerIds.every((function(e) {
                return !r.includes(e)
              })) || (t.clean(), t.state._active && (t.updateGestureState(Av({}, fp(Iv(t), e), t.getMovement(t.state.values), {
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
                var r = Zv(e, t.transform);
                t.updateSharedState(qv(e)), t.updateGestureState(Av({}, hp(Iv(t), r, e), fp(Iv(t), e, !0), {
                  origin: [e.clientX, e.clientY],
                  cancel: t.onCancel
                })), t.updateGestureState(t.getMovement(r)), t.fireGestureHandler()
              }
            }, t.onGestureChange = function(e) {
              var r = t.state,
                n = r.canceled,
                o = r._active;
              if (!n && o) {
                e.preventDefault();
                var a = qv(e);
                t.updateSharedState(a);
                var l = Zv(e, t.transform);
                l[0] = 260 * (l[0] - t.state.event.scale) + t.state.values[0];
                var i = t.getKinematics(l, e);
                t.updateGestureState(Av({}, fp(Iv(t), e), i, {
                  origin: [e.clientX, e.clientY]
                })), t.fireGestureHandler()
              }
            }, t.onGestureEnd = function(e) {
              t.clean(), t.state._active && (t.updateGestureState(Av({}, fp(Iv(t), e), t.getMovement(t.state.values), {
                _active: !1,
                origin: [e.clientX, e.clientY]
              })), t.fireGestureHandler())
            }, t.wheelShouldRun = function(e) {
              return t.enabled && e.ctrlKey
            }, t.getWheelValuesFromEvent = function(e) {
              var r = Yv(e, t.transform)[1],
                n = t.state.values,
                o = n[0],
                a = n[1],
                l = 7 * -r,
                i = void 0 !== a ? a : 0;
              return {
                values: [o + l, i],
                origin: [e.clientX, e.clientY],
                delta: [l, i]
              }
            }, t.onWheel = function(e) {
              t.wheelShouldRun(e) && (t.setTimeout(t.onWheelEnd), t.state._active ? t.onWheelChange(e) : t.onWheelStart(e))
            }, t.onWheelStart = function(e) {
              var r = t.getWheelValuesFromEvent(e),
                n = r.values,
                o = r.delta,
                a = r.origin;
              e.cancelable && e.preventDefault(), t.updateSharedState(qv(e)), t.updateGestureState(Av({}, hp(Iv(t), n, e, t.state.values), fp(Iv(t), e, !0), {
                offset: n,
                delta: o,
                origin: a
              })), t.updateGestureState(t.getMovement(n)), t.fireGestureHandler()
            }, t.onWheelChange = function(e) {
              e.cancelable && e.preventDefault(), t.updateSharedState(qv(e));
              var r = t.getWheelValuesFromEvent(e),
                n = r.values,
                o = r.origin,
                a = r.delta;
              t.updateGestureState(Av({}, fp(Iv(t), e), t.getKinematics(n, e), {
                origin: o,
                delta: a
              })), t.fireGestureHandler()
            }, t.onWheelEnd = function() {
              t.clean(), t.state._active && (t.state._active = !1, t.updateGestureState(t.getMovement(t.state.values)), t.fireGestureHandler())
            }, t
          }
          return Tv(t, e), t.prototype.addBindings = function(e) {
            this.controller.config.domTarget && !this.controller.supportsTouchEvents && this.controller.supportsGestureEvents ? (xp(e, "onGestureStart", this.onGestureStart), xp(e, "onGestureChange", this.onGestureChange), xp(e, "onGestureEnd", this.onGestureEnd)) : (xp(e, "onTouchStart", this.onPinchStart), xp(e, "onTouchMove", this.onPinchChange), xp(e, "onTouchEnd", this.onPinchEnd), xp(e, "onTouchCancel", this.onPinchEnd), xp(e, "onWheel", this.onWheel))
          }, t
        }(function(e) {
          function t() {
            return e.apply(this, arguments) || this
          }
          Tv(t, e);
          var r = t.prototype;
          return r.getInternalMovement = function(e, t) {
            var r = t.values[1],
              n = e[0],
              o = e[1],
              a = void 0 === o ? r : o,
              l = a - r,
              i = t.turns;
            return Math.abs(l) > 270 && (i += Ev(l)), Mv([n, a - 360 * i], t.initial)
          }, r.getKinematics = function(e, t) {
            var r = this.getMovement(e),
              n = (e[1] - r._movement[1] - this.state.initial[1]) / 360,
              o = t.timeStamp - this.state.timeStamp;
            return Av({
              turns: n
            }, r, function(e, t) {
              if (null == e) return {};
              var r, n, o = {},
                a = Object.keys(e);
              for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
              return o
            }(Sv(r.movement, r.delta, o), ["distance", "velocity"]))
          }, r.mapStateValues = function(e) {
            return {
              da: e.values,
              vdva: e.velocities
            }
          }, t
        }(cp)),
        Sp = function(e) {
          function t() {
            var t;
            return (t = e.apply(this, arguments) || this).ingKey = "wheeling", t.stateKey = "wheel", t.debounced = !0, t.handleEvent = function(e) {
              if ((!e.ctrlKey || !("pinch" in t.controller.handlers)) && t.enabled) {
                t.setTimeout(t.onEnd), t.updateSharedState(qv(e));
                var r = Rv(Yv(e, t.transform), t.state.values);
                if (t.state._active) t.updateGestureState(Av({}, fp(Iv(t), e), t.getKinematics(r, e)));
                else {
                  t.updateGestureState(Av({}, hp(Iv(t), r, e, t.state.values), fp(Iv(t), e, !0)));
                  var n = t.getMovement(r),
                    o = Lv(n.delta);
                  t.updateGestureState(n), t.updateGestureState(o)
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
          return Tv(t, e), t.prototype.addBindings = function(e) {
            xp(e, "onWheel", this.handleEvent)
          }, t
        }(Rp),
        Ep = function(e) {
          function t() {
            var t;
            return (t = e.apply(this, arguments) || this).ingKey = "moving", t.stateKey = "move", t.debounced = !0, t.onMove = function(e) {
              t.enabled && (t.setTimeout(t.onMoveEnd), t.state._active ? t.onMoveChange(e) : t.onMoveStart(e))
            }, t.onMoveStart = function(e) {
              t.updateSharedState(qv(e));
              var r = Kv(e, t.transform);
              t.updateGestureState(Av({}, hp(Iv(t), r, e), fp(Iv(t), e, !0))), t.updateGestureState(t.getMovement(r)), t.fireGestureHandler()
            }, t.onMoveChange = function(e) {
              t.updateSharedState(qv(e));
              var r = Kv(e, t.transform);
              t.updateGestureState(Av({}, fp(Iv(t), e), t.getKinematics(r, e))), t.fireGestureHandler()
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
                  var r = Kv(e, t.hoverTransform()),
                    n = Av({}, t.controller.state.shared, t.state, fp(Iv(t), e, !0), {
                      args: t.args,
                      values: r,
                      active: !0,
                      hovering: !0
                    });
                  t.controller.handlers.hover(Av({}, n, t.mapStateValues(n)))
                }
                "move" in t.controller.handlers && t.onMoveStart(e)
              }
            }, t.onPointerLeave = function(e) {
              if (t.controller.state.shared.hovering = !1, "move" in t.controller.handlers && t.onMoveEnd(), t.controller.config.hover.enabled) {
                var r = Kv(e, t.hoverTransform()),
                  n = Av({}, t.controller.state.shared, t.state, fp(Iv(t), e), {
                    args: t.args,
                    values: r,
                    active: !1
                  });
                t.controller.handlers.hover(Av({}, n, t.mapStateValues(n)))
              }
            }, t
          }
          return Tv(t, e), t.prototype.addBindings = function(e) {
            "move" in this.controller.handlers && xp(e, "onPointerMove", this.onMove), "hover" in this.controller.handlers && (xp(e, "onPointerEnter", this.onPointerEnter), xp(e, "onPointerLeave", this.onPointerLeave))
          }, t
        }(Rp),
        Pp = function(e) {
          function t() {
            var t;
            return (t = e.apply(this, arguments) || this).ingKey = "scrolling", t.stateKey = "scroll", t.debounced = !0, t.handleEvent = function(e) {
              if (t.enabled) {
                t.clearTimeout(), t.setTimeout(t.onEnd);
                var r = function(e, t) {
                  void 0 === t && (t = Wv);
                  var r = e.currentTarget,
                    n = r.scrollX,
                    o = r.scrollY,
                    a = r.scrollLeft,
                    l = r.scrollTop;
                  return t([n || a || 0, o || l || 0])
                }(e, t.transform);
                if (t.updateSharedState(qv(e)), t.state._active) t.updateGestureState(Av({}, fp(Iv(t), e), t.getKinematics(r, e)));
                else {
                  t.updateGestureState(Av({}, hp(Iv(t), r, e, t.state.values), fp(Iv(t), e, !0)));
                  var n = t.getMovement(r),
                    o = Lv(n.delta);
                  t.updateGestureState(n), t.updateGestureState(o)
                }
                t.fireGestureHandler()
              }
            }, t.onEnd = function() {
              t.clean(), t.state._active && (t.updateGestureState(Av({}, t.getMovement(t.state.values), {
                _active: !1,
                velocities: [0, 0],
                velocity: 0
              })), t.fireGestureHandler())
            }, t
          }
          return Tv(t, e), t.prototype.addBindings = function(e) {
            xp(e, "onScroll", this.handleEvent)
          }, t
        }(Rp),
        _p = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

      function Dp(e, t) {
        void 0 === t && (t = {});
        var r = function(e) {
            var t = {},
              r = {},
              n = new Set;
            for (var o in e) _p.test(o) ? (n.add(RegExp.lastMatch), r[o] = e[o]) : t[o] = e[o];
            return [r, t, n]
          }(e),
          n = r[0],
          o = r[1],
          a = r[2];
        ip.set("drag", Cp), ip.set("hover", Ep), ip.set("move", Ep), ip.set("pinch", Lp), ip.set("scroll", Pp), ip.set("wheel", Sp);
        var l = function(e, t) {
            void 0 === e && (e = {}), void 0 === t && (t = new Set);
            var r = e,
              n = r.drag,
              o = r.wheel,
              a = r.move,
              l = r.scroll,
              i = r.pinch,
              s = r.hover,
              c = r.eventOptions,
              d = r.window,
              u = r.transform,
              f = function(e) {
                return void 0 === e && (e = {}), Fv(e, tp)
              }({
                domTarget: r.domTarget,
                eventOptions: c,
                transform: u,
                window: d,
                enabled: r.enabled
              });
            return t.has("onDrag") && (f.drag = function(e) {
              return void 0 === e && (e = {}), Fv(e, np)
            }(n)), t.has("onWheel") && (f.wheel = op(o)), t.has("onScroll") && (f.scroll = op(l)), t.has("onMove") && (f.move = op(a)), t.has("onPinch") && (f.pinch = function(e) {
              return void 0 === e && (e = {}), Fv(e, rp)
            }(i)), t.has("onHover") && (f.hover = Av({
              enabled: !0
            }, s)), f
          }(t, a),
          i = {};
        return a.has("onDrag") && (i.drag = Ap(n, "onDrag")), a.has("onWheel") && (i.wheel = Ap(n, "onWheel")), a.has("onScroll") && (i.scroll = Ap(n, "onScroll")), a.has("onMove") && (i.move = Ap(n, "onMove")), a.has("onPinch") && (i.pinch = Ap(n, "onPinch")), a.has("onHover") && (i.hover = n.onHover),
          function(e, t, r) {
            void 0 === r && (r = {});
            var n = function(e) {
                var t = new Set;
                return e.drag && t.add(ip.get("drag")), e.wheel && t.add(ip.get("wheel")), e.scroll && t.add(ip.get("scroll")), e.move && t.add(ip.get("move")), e.pinch && t.add(ip.get("pinch")), e.hover && t.add(ip.get("hover")), t
              }(e),
              o = x().useMemo((function() {
                return new vp(n)
              }), []);
            return o.config = t, o.handlers = e, o.nativeRefs = r, x().useEffect(o.effect, []), o.config.domTarget ? jp : o.bind
          }(i, l, o)
      }

      function Ap(e, t) {
        var r = t + "Start",
          n = t + "End";
        return function(o) {
          var a = void 0;
          return o.first && r in e && e[r](o), t in e && (a = e[t](o)), o.last && n in e && e[n](o), a
        }
      }
      const Tp = ({
        children: e,
        containerRef: t,
        contentRef: r,
        zoomLevel: n,
        position: a,
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
        }), Dp({
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
        const i = Nc(),
          s = Zh({
            x: a[0],
            y: a[1],
            immediate: i
          }),
          c = Zh({
            scale: n / 100,
            immediate: i
          }),
          d = {
            touchAction: "none",
            userSelect: "none",
            MozUserSelect: "none",
            WebkitUserSelect: "none"
          };
        return (0, o.jsx)("div", {
          ref: t,
          className: "foundry_148vt480",
          style: d,
          children: (0, o.jsx)(wv.div, {
            ref: r,
            className: "foundry_148vt481",
            style: {
              ...s,
              ...c,
              ...d,
              height: "100%"
            },
            children: e
          })
        })
      };
      var Ip, Np, Op, kp = r(80226);

      function Hp(e) {
        return e.type === Np.literal
      }

      function Bp(e) {
        return e.type === Np.argument
      }

      function zp(e) {
        return e.type === Np.number
      }

      function Vp(e) {
        return e.type === Np.date
      }

      function Fp(e) {
        return e.type === Np.time
      }

      function Gp(e) {
        return e.type === Np.select
      }

      function Xp(e) {
        return e.type === Np.plural
      }

      function Up(e) {
        return e.type === Np.pound
      }

      function qp(e) {
        return e.type === Np.tag
      }

      function Wp(e) {
        return !(!e || "object" != typeof e || e.type !== Op.number)
      }

      function Kp(e) {
        return !(!e || "object" != typeof e || e.type !== Op.dateTime)
      }! function(e) {
        e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
      }(Ip || (Ip = {})),
      function(e) {
        e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
      }(Np || (Np = {})),
      function(e) {
        e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
      }(Op || (Op = {}));
      var $p = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        Yp = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

      function Zp(e) {
        var t = {};
        return e.replace(Yp, (function(e) {
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
      var Qp = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i,
        Jp = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        eg = /^(@+)?(\+|#+)?[rs]?$/g,
        tg = /(\*)(0+)|(#+)(0+)|(0+)/g,
        rg = /^(0+)$/;

      function ng(e) {
        var t = {};
        return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(eg, (function(e, r, n) {
          return "string" != typeof n ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : "+" === n ? t.minimumSignificantDigits = r.length : "#" === r[0] ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + ("string" == typeof n ? n.length : 0)), ""
        })), t
      }

      function og(e) {
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

      function ag(e) {
        var t;
        if ("E" === e[0] && "E" === e[1] ? (t = {
            notation: "engineering"
          }, e = e.slice(2)) : "E" === e[0] && (t = {
            notation: "scientific"
          }, e = e.slice(1)), t) {
          var r = e.slice(0, 2);
          if ("+!" === r ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === r && (t.signDisplay = "exceptZero", e = e.slice(2)), !rg.test(e)) throw new Error("Malformed concise eng/scientific notation");
          t.minimumIntegerDigits = e.length
        }
        return t
      }

      function lg(e) {
        return og(e) || {}
      }

      function ig(e) {
        for (var t = {}, r = 0, n = e; r < n.length; r++) {
          var o = n[r];
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
              t = (0, kp.Cl)((0, kp.Cl)((0, kp.Cl)({}, t), {
                notation: "scientific"
              }), o.options.reduce((function(e, t) {
                return (0, kp.Cl)((0, kp.Cl)({}, e), lg(t))
              }), {}));
              continue;
            case "engineering":
              t = (0, kp.Cl)((0, kp.Cl)((0, kp.Cl)({}, t), {
                notation: "engineering"
              }), o.options.reduce((function(e, t) {
                return (0, kp.Cl)((0, kp.Cl)({}, e), lg(t))
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
              o.options[0].replace(tg, (function(e, r, n, o, a, l) {
                if (r) t.minimumIntegerDigits = n.length;
                else {
                  if (o && a) throw new Error("We currently do not support maximum integer digits");
                  if (l) throw new Error("We currently do not support exact integer digits")
                }
                return ""
              }));
              continue
          }
          if (rg.test(o.stem)) t.minimumIntegerDigits = o.stem.length;
          else if (Jp.test(o.stem)) {
            if (o.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            o.stem.replace(Jp, (function(e, r, n, o, a, l) {
              return "*" === n ? t.minimumFractionDigits = r.length : o && "#" === o[0] ? t.maximumFractionDigits = o.length : a && l ? (t.minimumFractionDigits = a.length, t.maximumFractionDigits = a.length + l.length) : (t.minimumFractionDigits = r.length, t.maximumFractionDigits = r.length), ""
            }));
            var a = o.options[0];
            "w" === a ? t = (0, kp.Cl)((0, kp.Cl)({}, t), {
              trailingZeroDisplay: "stripIfInteger"
            }) : a && (t = (0, kp.Cl)((0, kp.Cl)({}, t), ng(a)))
          } else if (eg.test(o.stem)) t = (0, kp.Cl)((0, kp.Cl)({}, t), ng(o.stem));
          else {
            var l = og(o.stem);
            l && (t = (0, kp.Cl)((0, kp.Cl)({}, t), l));
            var i = ag(o.stem);
            i && (t = (0, kp.Cl)((0, kp.Cl)({}, t), i))
          }
        }
        return t
      }
      var sg, cg = {
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

      function dg(e) {
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
        return "root" !== n && (r = e.maximize().region), (cg[r || ""] || cg[n || ""] || cg["".concat(n, "-001")] || cg["001"])[0]
      }
      var ug = new RegExp("^".concat($p.source, "*")),
        fg = new RegExp("".concat($p.source, "*$"));

      function hg(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var vg = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        pg = !!String.fromCodePoint,
        gg = !!Object.fromEntries,
        mg = !!String.prototype.codePointAt,
        wg = !!String.prototype.trimStart,
        xg = !!String.prototype.trimEnd,
        yg = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        bg = !0;
      try {
        bg = "a" === (null === (sg = Pg("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === sg ? void 0 : sg[0])
      } catch (e) {
        bg = !1
      }
      var jg, Rg = vg ? function(e, t, r) {
          return e.startsWith(t, r)
        } : function(e, t, r) {
          return e.slice(r, r + t.length) === t
        },
        Mg = pg ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var r, n = "", o = e.length, a = 0; o > a;) {
            if ((r = e[a++]) > 1114111) throw RangeError(r + " is not a valid code point");
            n += r < 65536 ? String.fromCharCode(r) : String.fromCharCode(55296 + ((r -= 65536) >> 10), r % 1024 + 56320)
          }
          return n
        },
        Cg = gg ? Object.fromEntries : function(e) {
          for (var t = {}, r = 0, n = e; r < n.length; r++) {
            var o = n[r],
              a = o[0],
              l = o[1];
            t[a] = l
          }
          return t
        },
        Lg = mg ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var r = e.length;
          if (!(t < 0 || t >= r)) {
            var n, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === r || (n = e.charCodeAt(t + 1)) < 56320 || n > 57343 ? o : n - 56320 + (o - 55296 << 10) + 65536
          }
        },
        Sg = wg ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(ug, "")
        },
        Eg = xg ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(fg, "")
        };

      function Pg(e, t) {
        return new RegExp(e, t)
      }
      if (bg) {
        var _g = Pg("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        jg = function(e, t) {
          var r;
          return _g.lastIndex = t, null !== (r = _g.exec(e)[1]) && void 0 !== r ? r : ""
        }
      } else jg = function(e, t) {
        for (var r = [];;) {
          var n = Lg(e, t);
          if (void 0 === n || Tg(n) || Ig(n)) break;
          r.push(n), t += n >= 65536 ? 2 : 1
        }
        return Mg.apply(void 0, r)
      };
      var Dg = function() {
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
            var o = this.char();
            if (123 === o) {
              if ((a = this.parseArgument(e, r)).err) return a;
              n.push(a.val)
            } else {
              if (125 === o && e > 0) break;
              if (35 !== o || "plural" !== t && "selectordinal" !== t) {
                if (60 === o && !this.ignoreTag && 47 === this.peek()) {
                  if (r) break;
                  return this.error(Ip.UNMATCHED_CLOSING_TAG, hg(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && Ag(this.peek() || 0)) {
                  if ((a = this.parseTag(e, t)).err) return a;
                  n.push(a.val)
                } else {
                  var a;
                  if ((a = this.parseLiteral(e, t)).err) return a;
                  n.push(a.val)
                }
              } else {
                var l = this.clonePosition();
                this.bump(), n.push({
                  type: Np.pound,
                  location: hg(l, this.clonePosition())
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
              type: Np.literal,
              value: "<".concat(n, "/>"),
              location: hg(r, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var a = o.val,
              l = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !Ag(this.char())) return this.error(Ip.INVALID_TAG, hg(l, this.clonePosition()));
              var i = this.clonePosition();
              return n !== this.parseTagName() ? this.error(Ip.UNMATCHED_CLOSING_TAG, hg(i, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: Np.tag,
                  value: n,
                  children: a,
                  location: hg(r, this.clonePosition())
                },
                err: null
              } : this.error(Ip.INVALID_TAG, hg(l, this.clonePosition())))
            }
            return this.error(Ip.UNCLOSED_TAG, hg(r, this.clonePosition()))
          }
          return this.error(Ip.INVALID_TAG, hg(r, this.clonePosition()))
        }, e.prototype.parseTagName = function() {
          var e, t = this.offset();
          for (this.bump(); !this.isEOF() && (45 === (e = this.char()) || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039);) this.bump();
          return this.message.slice(t, this.offset())
        }, e.prototype.parseLiteral = function(e, t) {
          for (var r = this.clonePosition(), n = "";;) {
            var o = this.tryParseQuote(t);
            if (o) n += o;
            else {
              var a = this.tryParseUnquoted(e, t);
              if (a) n += a;
              else {
                var l = this.tryParseLeftAngleBracket();
                if (!l) break;
                n += l
              }
            }
          }
          var i = hg(r, this.clonePosition());
          return {
            val: {
              type: Np.literal,
              value: n,
              location: i
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (Ag(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
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
          return Mg.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var r = this.char();
          return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), Mg(r))
        }, e.prototype.parseArgument = function(e, t) {
          var r = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(Ip.EXPECT_ARGUMENT_CLOSING_BRACE, hg(r, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(Ip.EMPTY_ARGUMENT, hg(r, this.clonePosition()));
          var n = this.parseIdentifierIfPossible().value;
          if (!n) return this.error(Ip.MALFORMED_ARGUMENT, hg(r, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(Ip.EXPECT_ARGUMENT_CLOSING_BRACE, hg(r, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: Np.argument,
                  value: n,
                  location: hg(r, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Ip.EXPECT_ARGUMENT_CLOSING_BRACE, hg(r, this.clonePosition())) : this.parseArgumentOptions(e, t, n, r);
            default:
              return this.error(Ip.MALFORMED_ARGUMENT, hg(r, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            r = jg(this.message, t),
            n = t + r.length;
          return this.bumpTo(n), {
            value: r,
            location: hg(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, r, n) {
          var o, a = this.clonePosition(),
            l = this.parseIdentifierIfPossible().value,
            i = this.clonePosition();
          switch (l) {
            case "":
              return this.error(Ip.EXPECT_ARGUMENT_TYPE, hg(a, i));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var s = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var c = this.clonePosition();
                if ((m = this.parseSimpleArgStyleIfPossible()).err) return m;
                if (0 === (h = Eg(m.val)).length) return this.error(Ip.EXPECT_ARGUMENT_STYLE, hg(this.clonePosition(), this.clonePosition()));
                s = {
                  style: h,
                  styleLocation: hg(c, this.clonePosition())
                }
              }
              if ((w = this.tryParseArgumentClose(n)).err) return w;
              var d = hg(n, this.clonePosition());
              if (s && Rg(null == s ? void 0 : s.style, "::", 0)) {
                var u = Sg(s.style.slice(2));
                if ("number" === l) return (m = this.parseNumberSkeletonFromString(u, s.styleLocation)).err ? m : {
                  val: {
                    type: Np.number,
                    value: r,
                    location: d,
                    style: m.val
                  },
                  err: null
                };
                if (0 === u.length) return this.error(Ip.EXPECT_DATE_TIME_SKELETON, d);
                var f = u;
                this.locale && (f = function(e, t) {
                  for (var r = "", n = 0; n < e.length; n++) {
                    var o = e.charAt(n);
                    if ("j" === o) {
                      for (var a = 0; n + 1 < e.length && e.charAt(n + 1) === o;) a++, n++;
                      var l = 1 + (1 & a),
                        i = a < 2 ? 1 : 3 + (a >> 1),
                        s = dg(t);
                      for ("H" != s && "k" != s || (i = 0); i-- > 0;) r += "a";
                      for (; l-- > 0;) r = s + r
                    } else r += "J" === o ? "H" : o
                  }
                  return r
                }(u, this.locale));
                var h = {
                  type: Op.dateTime,
                  pattern: f,
                  location: s.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? Zp(f) : {}
                };
                return {
                  val: {
                    type: "date" === l ? Np.date : Np.time,
                    value: r,
                    location: d,
                    style: h
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === l ? Np.number : "date" === l ? Np.date : Np.time,
                  value: r,
                  location: d,
                  style: null !== (o = null == s ? void 0 : s.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var v = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(Ip.EXPECT_SELECT_ARGUMENT_OPTIONS, hg(v, (0, kp.Cl)({}, v)));
              this.bumpSpace();
              var p = this.parseIdentifierIfPossible(),
                g = 0;
              if ("select" !== l && "offset" === p.value) {
                if (!this.bumpIf(":")) return this.error(Ip.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, hg(this.clonePosition(), this.clonePosition()));
                var m;
                if (this.bumpSpace(), (m = this.tryParseDecimalInteger(Ip.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Ip.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return m;
                this.bumpSpace(), p = this.parseIdentifierIfPossible(), g = m.val
              }
              var w, x = this.tryParsePluralOrSelectOptions(e, l, t, p);
              if (x.err) return x;
              if ((w = this.tryParseArgumentClose(n)).err) return w;
              var y = hg(n, this.clonePosition());
              return "select" === l ? {
                val: {
                  type: Np.select,
                  value: r,
                  options: Cg(x.val),
                  location: y
                },
                err: null
              } : {
                val: {
                  type: Np.plural,
                  value: r,
                  options: Cg(x.val),
                  offset: g,
                  pluralType: "plural" === l ? "cardinal" : "ordinal",
                  location: y
                },
                err: null
              };
            default:
              return this.error(Ip.INVALID_ARGUMENT_TYPE, hg(a, i))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(Ip.EXPECT_ARGUMENT_CLOSING_BRACE, hg(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var r = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(Ip.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, hg(r, this.clonePosition()));
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
              for (var t = [], r = 0, n = e.split(Qp).filter((function(e) {
                  return e.length > 0
                })); r < n.length; r++) {
                var o = n[r].split("/");
                if (0 === o.length) throw new Error("Invalid number skeleton");
                for (var a = o[0], l = o.slice(1), i = 0, s = l; i < s.length; i++)
                  if (0 === s[i].length) throw new Error("Invalid number skeleton");
                t.push({
                  stem: a,
                  options: l
                })
              }
              return t
            }(e)
          } catch (e) {
            return this.error(Ip.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: Op.number,
              tokens: r,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? ig(r) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, r, n) {
          for (var o, a = !1, l = [], i = new Set, s = n.value, c = n.location;;) {
            if (0 === s.length) {
              var d = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var u = this.tryParseDecimalInteger(Ip.EXPECT_PLURAL_ARGUMENT_SELECTOR, Ip.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (u.err) return u;
              c = hg(d, this.clonePosition()), s = this.message.slice(d.offset, this.offset())
            }
            if (i.has(s)) return this.error("select" === t ? Ip.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Ip.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
            "other" === s && (a = !0), this.bumpSpace();
            var f = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? Ip.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Ip.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, hg(this.clonePosition(), this.clonePosition()));
            var h = this.parseMessage(e + 1, t, r);
            if (h.err) return h;
            var v = this.tryParseArgumentClose(f);
            if (v.err) return v;
            l.push([s, {
              value: h.val,
              location: hg(f, this.clonePosition())
            }]), i.add(s), this.bumpSpace(), s = (o = this.parseIdentifierIfPossible()).value, c = o.location
          }
          return 0 === l.length ? this.error("select" === t ? Ip.EXPECT_SELECT_ARGUMENT_SELECTOR : Ip.EXPECT_PLURAL_ARGUMENT_SELECTOR, hg(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !a ? this.error(Ip.MISSING_OTHER_CLAUSE, hg(this.clonePosition(), this.clonePosition())) : {
            val: l,
            err: null
          }
        }, e.prototype.tryParseDecimalInteger = function(e, t) {
          var r = 1,
            n = this.clonePosition();
          this.bumpIf("+") || this.bumpIf("-") && (r = -1);
          for (var o = !1, a = 0; !this.isEOF();) {
            var l = this.char();
            if (!(l >= 48 && l <= 57)) break;
            o = !0, a = 10 * a + (l - 48), this.bump()
          }
          var i = hg(n, this.clonePosition());
          return o ? yg(a *= r) ? {
            val: a,
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
          var t = Lg(this.message, e);
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
          if (Rg(this.message, e, this.offset())) {
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
          for (; !this.isEOF() && Tg(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            t = this.offset(),
            r = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
          return null != r ? r : null
        }, e
      }();

      function Ag(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function Tg(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function Ig(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function Ng(e) {
        e.forEach((function(e) {
          if (delete e.location, Gp(e) || Xp(e))
            for (var t in e.options) delete e.options[t].location, Ng(e.options[t].value);
          else zp(e) && Wp(e.style) || (Vp(e) || Fp(e)) && Kp(e.style) ? delete e.style.location : qp(e) && Ng(e.children)
        }))
      }

      function Og(e, t) {
        void 0 === t && (t = {}), t = (0, kp.Cl)({
          shouldParseSkeletons: !0,
          requiresOtherClause: !0
        }, t);
        var r = new Dg(e, t).parse();
        if (r.err) {
          var n = SyntaxError(Ip[r.err.kind]);
          throw n.location = r.err.location, n.originalMessage = r.err.message, n
        }
        return (null == t ? void 0 : t.captureLocation) || Ng(r.val), r.val
      }
      var kg, Hg = r(60903);
      ! function(e) {
        e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API"
      }(kg || (kg = {}));
      var Bg, zg = function(e) {
          function t(t, r, n) {
            var o = e.call(this, t) || this;
            return o.code = r, o.originalMessage = n, o
          }
          return (0, kp.C6)(t, e), t.prototype.toString = function() {
            return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
          }, t
        }(Error),
        Vg = function(e) {
          function t(t, r, n, o) {
            return e.call(this, 'Invalid values for "'.concat(t, '": "').concat(r, '". Options are "').concat(Object.keys(n).join('", "'), '"'), kg.INVALID_VALUE, o) || this
          }
          return (0, kp.C6)(t, e), t
        }(zg),
        Fg = function(e) {
          function t(t, r, n) {
            return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(r), kg.INVALID_VALUE, n) || this
          }
          return (0, kp.C6)(t, e), t
        }(zg),
        Gg = function(e) {
          function t(t, r) {
            return e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(r, '"'), kg.MISSING_VALUE, r) || this
          }
          return (0, kp.C6)(t, e), t
        }(zg);

      function Xg(e) {
        return "function" == typeof e
      }

      function Ug(e, t, r, n, o, a, l) {
        if (1 === e.length && Hp(e[0])) return [{
          type: Bg.literal,
          value: e[0].value
        }];
        for (var i = [], s = 0, c = e; s < c.length; s++) {
          var d = c[s];
          if (Hp(d)) i.push({
            type: Bg.literal,
            value: d.value
          });
          else if (Up(d)) "number" == typeof a && i.push({
            type: Bg.literal,
            value: r.getNumberFormat(t).format(a)
          });
          else {
            var u = d.value;
            if (!o || !(u in o)) throw new Gg(u, l);
            var f = o[u];
            if (Bp(d)) f && "string" != typeof f && "number" != typeof f || (f = "string" == typeof f || "number" == typeof f ? String(f) : ""), i.push({
              type: "string" == typeof f ? Bg.literal : Bg.object,
              value: f
            });
            else if (Vp(d)) {
              var h = "string" == typeof d.style ? n.date[d.style] : Kp(d.style) ? d.style.parsedOptions : void 0;
              i.push({
                type: Bg.literal,
                value: r.getDateTimeFormat(t, h).format(f)
              })
            } else if (Fp(d)) h = "string" == typeof d.style ? n.time[d.style] : Kp(d.style) ? d.style.parsedOptions : n.time.medium, i.push({
              type: Bg.literal,
              value: r.getDateTimeFormat(t, h).format(f)
            });
            else if (zp(d))(h = "string" == typeof d.style ? n.number[d.style] : Wp(d.style) ? d.style.parsedOptions : void 0) && h.scale && (f *= h.scale || 1), i.push({
              type: Bg.literal,
              value: r.getNumberFormat(t, h).format(f)
            });
            else {
              if (qp(d)) {
                var v = d.children,
                  p = d.value,
                  g = o[p];
                if (!Xg(g)) throw new Fg(p, "function", l);
                var m = g(Ug(v, t, r, n, o, a).map((function(e) {
                  return e.value
                })));
                Array.isArray(m) || (m = [m]), i.push.apply(i, m.map((function(e) {
                  return {
                    type: "string" == typeof e ? Bg.literal : Bg.object,
                    value: e
                  }
                })))
              }
              if (Gp(d)) {
                if (!(w = d.options[f] || d.options.other)) throw new Vg(d.value, f, Object.keys(d.options), l);
                i.push.apply(i, Ug(w.value, t, r, n, o))
              } else if (Xp(d)) {
                var w;
                if (!(w = d.options["=".concat(f)])) {
                  if (!Intl.PluralRules) throw new zg('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', kg.MISSING_INTL_API, l);
                  var x = r.getPluralRules(t, {
                    type: d.pluralType
                  }).select(f - (d.offset || 0));
                  w = d.options[x] || d.options.other
                }
                if (!w) throw new Vg(d.value, f, Object.keys(d.options), l);
                i.push.apply(i, Ug(w.value, t, r, n, o, f - (d.offset || 0)))
              }
            }
          }
        }
        return (y = i).length < 2 ? y : y.reduce((function(e, t) {
          var r = e[e.length - 1];
          return r && r.type === Bg.literal && t.type === Bg.literal ? r.value += t.value : e.push(t), e
        }), []);
        var y
      }

      function qg(e) {
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
      }(Bg || (Bg = {}));
      var Wg, Kg = function() {
        function e(t, r, n, o) {
          var a, l, i, s = this;
          if (void 0 === r && (r = e.defaultLocale), this.formatterCache = {
              number: {},
              dateTime: {},
              pluralRules: {}
            }, this.format = function(e) {
              var t = s.formatToParts(e);
              if (1 === t.length) return t[0].value;
              var r = t.reduce((function(e, t) {
                return e.length && t.type === Bg.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e
              }), []);
              return r.length <= 1 ? r[0] || "" : r
            }, this.formatToParts = function(e) {
              return Ug(s.ast, s.locales, s.formatters, s.formats, e, void 0, s.message)
            }, this.resolvedOptions = function() {
              var e;
              return {
                locale: (null === (e = s.resolvedLocale) || void 0 === e ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(s.locales)[0]
              }
            }, this.getAst = function() {
              return s.ast
            }, this.locales = r, this.resolvedLocale = e.resolveLocale(r), "string" == typeof t) {
            if (this.message = t, !e.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
            var c = o || {},
              d = (c.formatters, (0, kp.Tt)(c, ["formatters"]));
            this.ast = e.__parse(t, (0, kp.Cl)((0, kp.Cl)({}, d), {
              locale: this.resolvedLocale
            }))
          } else this.ast = t;
          if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
          this.formats = (l = e.formats, (i = n) ? Object.keys(l).reduce((function(e, t) {
            return e[t] = function(e, t) {
              return t ? (0, kp.Cl)((0, kp.Cl)((0, kp.Cl)({}, e || {}), t || {}), Object.keys(e).reduce((function(r, n) {
                return r[n] = (0, kp.Cl)((0, kp.Cl)({}, e[n]), t[n] || {}), r
              }), {})) : e
            }(l[t], i[t]), e
          }), (0, kp.Cl)({}, l)) : l), this.formatters = o && o.formatters || (void 0 === (a = this.formatterCache) && (a = {
            number: {},
            dateTime: {},
            pluralRules: {}
          }), {
            getNumberFormat: (0, Hg.B)((function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.NumberFormat).bind.apply(e, (0, kp.fX)([void 0], t, !1)))
            }), {
              cache: qg(a.number),
              strategy: Hg.W.variadic
            }),
            getDateTimeFormat: (0, Hg.B)((function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.DateTimeFormat).bind.apply(e, (0, kp.fX)([void 0], t, !1)))
            }), {
              cache: qg(a.dateTime),
              strategy: Hg.W.variadic
            }),
            getPluralRules: (0, Hg.B)((function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.PluralRules).bind.apply(e, (0, kp.fX)([void 0], t, !1)))
            }), {
              cache: qg(a.pluralRules),
              strategy: Hg.W.variadic
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
        }, e.__parse = Og, e.formats = {
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
      }(Wg || (Wg = {}));
      var $g = function(e) {
          function t(r, n, o) {
            var a = this,
              l = o ? o instanceof Error ? o : new Error(String(o)) : void 0;
            return (a = e.call(this, "[@formatjs/intl Error ".concat(r, "] ").concat(n, "\n").concat(l ? "\n".concat(l.message, "\n").concat(l.stack) : "")) || this).code = r, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(a, t), a
          }
          return (0, kp.C6)(t, e), t
        }(Error),
        Yg = function(e) {
          function t(t, r) {
            return e.call(this, Wg.UNSUPPORTED_FORMATTER, t, r) || this
          }
          return (0, kp.C6)(t, e), t
        }($g),
        Zg = function(e) {
          function t(t, r) {
            return e.call(this, Wg.INVALID_CONFIG, t, r) || this
          }
          return (0, kp.C6)(t, e), t
        }($g),
        Qg = function(e) {
          function t(t, r) {
            return e.call(this, Wg.MISSING_DATA, t, r) || this
          }
          return (0, kp.C6)(t, e), t
        }($g),
        Jg = function(e) {
          function t(t, r, n) {
            var o = e.call(this, Wg.FORMAT_ERROR, "".concat(t, "\nLocale: ").concat(r, "\n"), n) || this;
            return o.locale = r, o
          }
          return (0, kp.C6)(t, e), t
        }($g),
        em = function(e) {
          function t(t, r, n, o) {
            var a = e.call(this, "".concat(t, "\nMessageID: ").concat(null == n ? void 0 : n.id, "\nDefault Message: ").concat(null == n ? void 0 : n.defaultMessage, "\nDescription: ").concat(null == n ? void 0 : n.description, "\n"), r, o) || this;
            return a.descriptor = n, a.locale = r, a
          }
          return (0, kp.C6)(t, e), t
        }(Jg),
        tm = function(e) {
          function t(t, r) {
            var n = e.call(this, Wg.MISSING_TRANSLATION, 'Missing message: "'.concat(t.id, '" for locale "').concat(r, '", using ').concat(t.defaultMessage ? "default message (".concat("string" == typeof t.defaultMessage ? t.defaultMessage : t.defaultMessage.map((function(e) {
              var t;
              return null !== (t = e.value) && void 0 !== t ? t : JSON.stringify(e)
            })).join(), ")") : "id", " as fallback.")) || this;
            return n.descriptor = t, n
          }
          return (0, kp.C6)(t, e), t
        }($g);

      function rm(e, t, r) {
        return void 0 === r && (r = {}), t.reduce((function(t, n) {
          return n in e ? t[n] = e[n] : n in r && (t[n] = r[n]), t
        }), {})
      }
      var nm = {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: function(e) {},
        onWarn: function(e) {}
      };

      function om(e) {
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

      function am(e, t, r, n) {
        var o, a = e && e[t];
        if (a && (o = a[r]), o) return o;
        n(new Yg("No ".concat(t, " format named: ").concat(r)))
      }

      function lm(e, t, r) {
        if (void 0 === r && (r = Error), !e) throw new r(t)
      }

      function im(e) {
        lm(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
      }
      var sm = (0, kp.Cl)((0, kp.Cl)({}, nm), {
        textComponent: m.Fragment
      });
      r(3536);
      var cm = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? m.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = m.createContext(null)),
        dm = (cm.Consumer, cm.Provider),
        um = cm;

      function fm(e, t) {
        return Object.keys(e).reduce((function(r, n) {
          return r[n] = (0, kp.Cl)({
            timeZone: t
          }, e[n]), r
        }), {})
      }

      function hm(e, t) {
        return Object.keys((0, kp.Cl)((0, kp.Cl)({}, e), t)).reduce((function(r, n) {
          return r[n] = (0, kp.Cl)((0, kp.Cl)({}, e[n] || {}), t[n] || {}), r
        }), {})
      }

      function vm(e, t) {
        if (!t) return e;
        var r = Kg.formats;
        return (0, kp.Cl)((0, kp.Cl)((0, kp.Cl)({}, r), e), {
          date: hm(fm(r.date, t), fm(e.date || {}, t)),
          time: hm(fm(r.time, t), fm(e.time || {}, t))
        })
      }
      var pm = function(e, t, r, n, o) {
          var a = e.locale,
            l = e.formats,
            i = e.messages,
            s = e.defaultLocale,
            c = e.defaultFormats,
            d = e.fallbackOnEmptyString,
            u = e.onError,
            f = e.timeZone,
            h = e.defaultRichTextElements;
          void 0 === r && (r = {
            id: ""
          });
          var v = r.id,
            p = r.defaultMessage;
          lm(!!v, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
          var g = String(v),
            m = i && Object.prototype.hasOwnProperty.call(i, g) && i[g];
          if (Array.isArray(m) && 1 === m.length && m[0].type === Np.literal) return m[0].value;
          if (!n && m && "string" == typeof m && !h) return m.replace(/'\{(.*?)\}'/gi, "{$1}");
          if (n = (0, kp.Cl)((0, kp.Cl)({}, h), n || {}), l = vm(l, f), c = vm(c, f), !m) {
            if (!1 === d && "" === m) return m;
            if ((!p || a && a.toLowerCase() !== s.toLowerCase()) && u(new tm(r, a)), p) try {
              return t.getMessageFormat(p, s, c, o).format(n)
            } catch (e) {
              return u(new em('Error formatting default message for: "'.concat(g, '", rendering default message verbatim'), a, r, e)), "string" == typeof p ? p : g
            }
            return g
          }
          try {
            return t.getMessageFormat(m, a, l, (0, kp.Cl)({
              formatters: t
            }, o || {})).format(n)
          } catch (e) {
            u(new em('Error formatting message: "'.concat(g, '", using ').concat(p ? "default message" : "id", " as fallback."), a, r, e))
          }
          if (p) try {
            return t.getMessageFormat(p, s, c, o).format(n)
          } catch (e) {
            u(new em('Error formatting the default message for: "'.concat(g, '", rendering message verbatim'), a, r, e))
          }
          return "string" == typeof m ? m : "string" == typeof p ? p : g
        },
        gm = ["style", "currency", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem", "trailingZeroDisplay", "roundingPriority", "roundingIncrement", "roundingMode"];

      function mm(e, t, r) {
        var n = e.locale,
          o = e.formats,
          a = e.onError;
        void 0 === r && (r = {});
        var l = r.format,
          i = l && am(o, "number", l, a) || {};
        return t(n, rm(r, gm, i))
      }

      function wm(e, t, r, n) {
        void 0 === n && (n = {});
        try {
          return mm(e, t, n).format(r)
        } catch (t) {
          e.onError(new Jg("Error formatting number.", e.locale, t))
        }
        return String(r)
      }

      function xm(e, t, r, n) {
        void 0 === n && (n = {});
        try {
          return mm(e, t, n).formatToParts(r)
        } catch (t) {
          e.onError(new Jg("Error formatting number.", e.locale, t))
        }
        return []
      }
      var ym = ["numeric", "style"];

      function bm(e, t, r, n, o) {
        void 0 === o && (o = {}), n || (n = "second"), Intl.RelativeTimeFormat || e.onError(new zg('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', kg.MISSING_INTL_API));
        try {
          return function(e, t, r) {
            var n = e.locale,
              o = e.formats,
              a = e.onError;
            void 0 === r && (r = {});
            var l = r.format,
              i = !!l && am(o, "relative", l, a) || {};
            return t(n, rm(r, ym, i))
          }(e, t, o).format(r, n)
        } catch (t) {
          e.onError(new Jg("Error formatting relative time.", e.locale, t))
        }
        return String(r)
      }
      var jm = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

      function Rm(e, t, r, n) {
        var o = e.locale,
          a = e.formats,
          l = e.onError,
          i = e.timeZone;
        void 0 === n && (n = {});
        var s = n.format,
          c = (0, kp.Cl)((0, kp.Cl)({}, i && {
            timeZone: i
          }), s && am(a, t, s, l)),
          d = rm(n, jm, c);
        return "time" !== t || d.hour || d.minute || d.second || d.timeStyle || d.dateStyle || (d = (0, kp.Cl)((0, kp.Cl)({}, d), {
          hour: "numeric",
          minute: "numeric"
        })), r(o, d)
      }

      function Mm(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          a = r[1],
          l = void 0 === a ? {} : a,
          i = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return Rm(e, "date", t, l).format(i)
        } catch (t) {
          e.onError(new Jg("Error formatting date.", e.locale, t))
        }
        return String(i)
      }

      function Cm(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          a = r[1],
          l = void 0 === a ? {} : a,
          i = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return Rm(e, "time", t, l).format(i)
        } catch (t) {
          e.onError(new Jg("Error formatting time.", e.locale, t))
        }
        return String(i)
      }

      function Lm(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          a = r[1],
          l = r[2],
          i = void 0 === l ? {} : l,
          s = e.timeZone,
          c = e.locale,
          d = e.onError,
          u = rm(i, jm, s ? {
            timeZone: s
          } : {});
        try {
          return t(c, u).formatRange(o, a)
        } catch (t) {
          d(new Jg("Error formatting date time range.", e.locale, t))
        }
        return String(o)
      }

      function Sm(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          a = r[1],
          l = void 0 === a ? {} : a,
          i = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return Rm(e, "date", t, l).formatToParts(i)
        } catch (t) {
          e.onError(new Jg("Error formatting date.", e.locale, t))
        }
        return []
      }

      function Em(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          a = r[1],
          l = void 0 === a ? {} : a,
          i = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return Rm(e, "time", t, l).formatToParts(i)
        } catch (t) {
          e.onError(new Jg("Error formatting time.", e.locale, t))
        }
        return []
      }
      var Pm = ["type"];

      function _m(e, t, r, n) {
        var o = e.locale,
          a = e.onError;
        void 0 === n && (n = {}), Intl.PluralRules || a(new zg('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', kg.MISSING_INTL_API));
        var l = rm(n, Pm);
        try {
          return t(o, l).select(r)
        } catch (e) {
          a(new Jg("Error formatting plural.", o, e))
        }
        return "other"
      }
      var Dm = ["type", "style"],
        Am = Date.now();

      function Tm(e, t, r, n) {
        void 0 === n && (n = {});
        var o = Im(e, t, r, n).reduce((function(e, t) {
          var r = t.value;
          return "string" != typeof r ? e.push(r) : "string" == typeof e[e.length - 1] ? e[e.length - 1] += r : e.push(r), e
        }), []);
        return 1 === o.length ? o[0] : 0 === o.length ? "" : o
      }

      function Im(e, t, r, n) {
        var o = e.locale,
          a = e.onError;
        void 0 === n && (n = {}), Intl.ListFormat || a(new zg('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', kg.MISSING_INTL_API));
        var l = rm(n, Dm);
        try {
          var i = {},
            s = r.map((function(e, t) {
              if ("object" == typeof e) {
                var r = function(e) {
                  return "".concat(Am, "_").concat(e, "_").concat(Am)
                }(t);
                return i[r] = e, r
              }
              return String(e)
            }));
          return t(o, l).formatToParts(s).map((function(e) {
            return "literal" === e.type ? e : (0, kp.Cl)((0, kp.Cl)({}, e), {
              value: i[e.value] || e.value
            })
          }))
        } catch (e) {
          a(new Jg("Error formatting list.", o, e))
        }
        return r
      }
      var Nm = ["style", "type", "fallback", "languageDisplay"];

      function Om(e, t, r, n) {
        var o = e.locale,
          a = e.onError;
        Intl.DisplayNames || a(new zg('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', kg.MISSING_INTL_API));
        var l = rm(n, Nm);
        try {
          return t(o, l).of(r)
        } catch (e) {
          a(new Jg("Error formatting display name.", o, e))
        }
      }

      function km(e, t) {
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
              o = (0, Hg.B)((function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.DateTimeFormat).bind.apply(e, (0, kp.fX)([void 0], t, !1)))
              }), {
                cache: om(e.dateTime),
                strategy: Hg.W.variadic
              }),
              a = (0, Hg.B)((function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.NumberFormat).bind.apply(e, (0, kp.fX)([void 0], t, !1)))
              }), {
                cache: om(e.number),
                strategy: Hg.W.variadic
              }),
              l = (0, Hg.B)((function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.PluralRules).bind.apply(e, (0, kp.fX)([void 0], t, !1)))
              }), {
                cache: om(e.pluralRules),
                strategy: Hg.W.variadic
              });
            return {
              getDateTimeFormat: o,
              getNumberFormat: a,
              getMessageFormat: (0, Hg.B)((function(e, t, r, n) {
                return new Kg(e, t, r, (0, kp.Cl)({
                  formatters: {
                    getNumberFormat: a,
                    getDateTimeFormat: o,
                    getPluralRules: l
                  }
                }, n || {}))
              }), {
                cache: om(e.message),
                strategy: Hg.W.variadic
              }),
              getRelativeTimeFormat: (0, Hg.B)((function() {
                for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                return new(t.bind.apply(t, (0, kp.fX)([void 0], e, !1)))
              }), {
                cache: om(e.relativeTime),
                strategy: Hg.W.variadic
              }),
              getPluralRules: l,
              getListFormat: (0, Hg.B)((function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(r.bind.apply(r, (0, kp.fX)([void 0], e, !1)))
              }), {
                cache: om(e.list),
                strategy: Hg.W.variadic
              }),
              getDisplayNames: (0, Hg.B)((function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(n.bind.apply(n, (0, kp.fX)([void 0], e, !1)))
              }), {
                cache: om(e.displayNames),
                strategy: Hg.W.variadic
              })
            }
          }(t),
          n = (0, kp.Cl)((0, kp.Cl)({}, nm), e),
          o = n.locale,
          a = n.defaultLocale,
          l = n.onError;
        return o ? !Intl.NumberFormat.supportedLocalesOf(o).length && l ? l(new Qg('Missing locale data for locale: "'.concat(o, '" in Intl.NumberFormat. Using default locale: "').concat(a, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(o).length && l && l(new Qg('Missing locale data for locale: "'.concat(o, '" in Intl.DateTimeFormat. Using default locale: "').concat(a, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (l && l(new Zg('"locale" was not configured, using "'.concat(a, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), n.locale = n.defaultLocale || "en"),
          function(e) {
            e.onWarn && e.defaultRichTextElements && function(e) {
              return "string" == typeof(e ? e[Object.keys(e)[0]] : void 0)
            }(e.messages || {}) && e.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution')
          }(n), (0, kp.Cl)((0, kp.Cl)({}, n), {
            formatters: r,
            formatNumber: wm.bind(null, n, r.getNumberFormat),
            formatNumberToParts: xm.bind(null, n, r.getNumberFormat),
            formatRelativeTime: bm.bind(null, n, r.getRelativeTimeFormat),
            formatDate: Mm.bind(null, n, r.getDateTimeFormat),
            formatDateToParts: Sm.bind(null, n, r.getDateTimeFormat),
            formatTime: Cm.bind(null, n, r.getDateTimeFormat),
            formatDateTimeRange: Lm.bind(null, n, r.getDateTimeFormat),
            formatTimeToParts: Em.bind(null, n, r.getDateTimeFormat),
            formatPlural: _m.bind(null, n, r.getPluralRules),
            formatMessage: pm.bind(null, n, r),
            $t: pm.bind(null, n, r),
            formatList: Tm.bind(null, n, r.getListFormat),
            formatListToParts: Im.bind(null, n, r.getListFormat),
            formatDisplayName: Om.bind(null, n, r.getDisplayNames)
          })
      }

      function Hm(e) {
        return e ? Object.keys(e).reduce((function(t, r) {
          var n, o = e[r];
          return t[r] = Xg(o) ? (n = o, function(e) {
            return n(m.Children.toArray(e))
          }) : o, t
        }), {}) : e
      }
      var Bm = function(e, t, r, n) {
          for (var o = [], a = 4; a < arguments.length; a++) o[a - 4] = arguments[a];
          var l = Hm(n),
            i = pm.apply(void 0, (0, kp.fX)([e, t, r, l], o, !1));
          return Array.isArray(i) ? m.Children.toArray(i) : i
        },
        zm = function(e, t) {
          var r = e.defaultRichTextElements,
            n = (0, kp.Tt)(e, ["defaultRichTextElements"]),
            o = Hm(r),
            a = km((0, kp.Cl)((0, kp.Cl)((0, kp.Cl)({}, sm), n), {
              defaultRichTextElements: o
            }), t),
            l = {
              locale: a.locale,
              timeZone: a.timeZone,
              fallbackOnEmptyString: a.fallbackOnEmptyString,
              formats: a.formats,
              defaultLocale: a.defaultLocale,
              defaultFormats: a.defaultFormats,
              messages: a.messages,
              onError: a.onError,
              defaultRichTextElements: o
            };
          return (0, kp.Cl)((0, kp.Cl)({}, a), {
            formatMessage: Bm.bind(null, l, a.formatters),
            $t: Bm.bind(null, l, a.formatters)
          })
        };

      function Vm(e) {
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
      var Fm = function(e) {
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
            intl: zm(Vm(t.props), t.cache),
            prevConfig: Vm(t.props)
          }, t
        }
        return (0, kp.C6)(t, e), t.getDerivedStateFromProps = function(e, t) {
          var r = t.prevConfig,
            n = t.cache,
            o = Vm(e);
          return function(e, t) {
            if (e === t) return !0;
            if (!e || !t) return !1;
            var r = Object.keys(e),
              n = Object.keys(t),
              o = r.length;
            if (n.length !== o) return !1;
            for (var a = 0; a < o; a++) {
              var l = r[a];
              if (e[l] !== t[l] || !Object.prototype.hasOwnProperty.call(t, l)) return !1
            }
            return !0
          }(r, o) ? null : {
            intl: zm(o, n),
            prevConfig: o
          }
        }, t.prototype.render = function() {
          return im(this.state.intl), m.createElement(dm, {
            value: this.state.intl
          }, this.props.children)
        }, t.displayName = "IntlProvider", t.defaultProps = sm, t
      }(m.PureComponent);
      const Gm = Fm;

      function Xm() {
        var e = m.useContext(um);
        return im(e), e
      }
      var Um, qm;
      ! function(e) {
        e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName"
      }(Um || (Um = {})),
      function(e) {
        e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts"
      }(qm || (qm = {}));
      var Wm = function(e) {
        var t = Xm(),
          r = e.value,
          n = e.children,
          o = (0, kp.Tt)(e, ["value", "children"]);
        return n(t.formatNumberToParts(r, o))
      };

      function Km(e) {
        var t = function(t) {
          var r = Xm(),
            n = t.value,
            o = t.children,
            a = (0, kp.Tt)(t, ["value", "children"]),
            l = "string" == typeof n ? new Date(n || 0) : n;
          return o("formatDate" === e ? r.formatDateToParts(l, a) : r.formatTimeToParts(l, a))
        };
        return t.displayName = qm[e], t
      }

      function $m(e) {
        var t = function(t) {
          var r = Xm(),
            n = t.value,
            o = t.children,
            a = (0, kp.Tt)(t, ["value", "children"]),
            l = r[e](n, a);
          if ("function" == typeof o) return o(l);
          var i = r.textComponent || m.Fragment;
          return m.createElement(i, null, l)
        };
        return t.displayName = Um[e], t
      }
      Wm.displayName = "FormattedNumberParts", Wm.displayName = "FormattedNumberParts", $m("formatDate"), $m("formatTime"), $m("formatNumber"), $m("formatList"), $m("formatDisplayName"), Km("formatDate"), Km("formatTime");
      const Ym = ({
          children: e,
          locale: t,
          messages: r,
          fallback: n
        }) => (0, o.jsx)(m.Suspense, {
          fallback: n || null,
          children: (0, o.jsx)(Zm, {
            locale: t,
            messages: r,
            children: e
          })
        }),
        Zm = ({
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
          return (0, o.jsx)(Gm, {
            locale: t,
            messages: n,
            children: e
          })
        },
        Qm = {
          id: "Lightbox_Open_Button_Label",
          description: "Aria-label for the lightbox open button",
          defaultMessage: "Expand image"
        };

      function Jm(e, [t, r]) {
        return Math.min(r, Math.max(t, e))
      }

      function ew(e, t, {
        checkForDefaultPrevented: r = !0
      } = {}) {
        return function(n) {
          if (e?.(n), !1 === r || !n.defaultPrevented) return t?.(n)
        }
      }

      function tw(e, t = []) {
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
          const a = m.createContext(n),
            l = r.length;

          function i(t) {
            const {
              scope: r,
              children: n,
              ...i
            } = t, s = r?.[e][l] || a, c = m.useMemo((() => i), Object.values(i));
            return (0, o.jsx)(s.Provider, {
              value: c,
              children: n
            })
          }
          return r = [...r, n], i.displayName = t + "Provider", [i, function(r, o) {
            const i = o?.[e][l] || a,
              s = m.useContext(i);
            if (s) return s;
            if (void 0 !== n) return n;
            throw new Error(`\`${r}\` must be used within \`${t}\``)
          }]
        }, rw(n, ...t)]
      }

      function rw(...e) {
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

      function nw(e) {
        const t = m.useRef(e);
        return m.useEffect((() => {
          t.current = e
        })), m.useMemo((() => (...e) => t.current?.(...e)), [])
      }

      function ow({
        prop: e,
        defaultProp: t,
        onChange: r = (() => {})
      }) {
        const [n, o] = function({
          defaultProp: e,
          onChange: t
        }) {
          const r = m.useState(e),
            [n] = r,
            o = m.useRef(n),
            a = nw(t);
          return m.useEffect((() => {
            o.current !== n && (a(n), o.current = n)
          }), [n, o, a]), r
        }({
          defaultProp: t,
          onChange: r
        }), a = void 0 !== e, l = a ? e : n, i = nw(r);
        return [l, m.useCallback((t => {
          if (a) {
            const r = "function" == typeof t ? t(e) : t;
            r !== e && i(r)
          } else o(t)
        }), [a, e, o, i])]
      }
      var aw = m.createContext(void 0);

      function lw(e) {
        const t = m.useContext(aw);
        return e || t || "ltr"
      }

      function iw(e) {
        const t = m.useRef({
          value: e,
          previous: e
        });
        return m.useMemo((() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous)), [e])
      }
      var sw = Boolean(globalThis?.document) ? m.useLayoutEffect : () => {};

      function cw(e) {
        const [t, r] = m.useState(void 0);
        return sw((() => {
          if (e) {
            r({
              width: e.offsetWidth,
              height: e.offsetHeight
            });
            const t = new ResizeObserver((t => {
              if (!Array.isArray(t)) return;
              if (!t.length) return;
              const n = t[0];
              let o, a;
              if ("borderBoxSize" in n) {
                const e = n.borderBoxSize,
                  t = Array.isArray(e) ? e[0] : e;
                o = t.inlineSize, a = t.blockSize
              } else o = e.offsetWidth, a = e.offsetHeight;
              r({
                width: o,
                height: a
              })
            }));
            return t.observe(e, {
              box: "border-box"
            }), () => t.unobserve(e)
          }
          r(void 0)
        }), [e]), t
      }

      function dw(e) {
        const t = e + "CollectionProvider",
          [r, n] = tw(t),
          [a, l] = r(t, {
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
            return (0, o.jsx)(a, {
              scope: t,
              itemMap: l,
              collectionRef: n,
              children: r
            })
          };
        i.displayName = t;
        const s = e + "CollectionSlot",
          c = m.forwardRef(((e, t) => {
            const {
              scope: r,
              children: n
            } = e, a = we(t, l(s, r).collectionRef);
            return (0, o.jsx)(xe, {
              ref: a,
              children: n
            })
          }));
        c.displayName = s;
        const d = e + "CollectionItemSlot",
          u = "data-radix-collection-item",
          f = m.forwardRef(((e, t) => {
            const {
              scope: r,
              children: n,
              ...a
            } = e, i = m.useRef(null), s = we(t, i), c = l(d, r);
            return m.useEffect((() => (c.itemMap.set(i, {
              ref: i,
              ...a
            }), () => {
              c.itemMap.delete(i)
            }))), (0, o.jsx)(xe, {
              [u]: "",
              ref: s,
              children: n
            })
          }));
        return f.displayName = d, [{
          Provider: i,
          Slot: c,
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
      var uw = ["PageUp", "PageDown"],
        fw = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        hw = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        vw = "Slider",
        [pw, gw, mw] = dw(vw),
        [ww, xw] = tw(vw, [mw]),
        [yw, bw] = ww(vw),
        jw = m.forwardRef(((e, t) => {
          const {
            name: r,
            min: n = 0,
            max: a = 100,
            step: l = 1,
            orientation: i = "horizontal",
            disabled: s = !1,
            minStepsBetweenThumbs: c = 0,
            defaultValue: d = [n],
            value: u,
            onValueChange: f = (() => {}),
            onValueCommit: h = (() => {}),
            inverted: v = !1,
            ...p
          } = e, g = m.useRef(new Set), w = m.useRef(0), x = "horizontal" === i ? Cw : Lw, [y = [], b] = ow({
            prop: u,
            defaultProp: d,
            onChange: e => {
              const t = [...g.current];
              t[w.current]?.focus(), f(e)
            }
          }), j = m.useRef(y);

          function R(e, t, {
            commit: r
          } = {
            commit: !1
          }) {
            const o = function(e) {
                return (String(e).split(".")[1] || "").length
              }(l),
              i = function(e, t) {
                const r = Math.pow(10, t);
                return Math.round(e * r) / r
              }(Math.round((e - n) / l) * l + n, o),
              s = Jm(i, [n, a]);
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
                }(n, c * l)) {
                w.current = n.indexOf(s);
                const t = String(n) !== String(e);
                return t && r && h(n), t ? n : e
              }
              return e
            }))
          }
          return (0, o.jsx)(yw, {
            scope: e.__scopeSlider,
            name: r,
            disabled: s,
            min: n,
            max: a,
            valueIndexToChangeRef: w,
            thumbs: g.current,
            values: y,
            orientation: i,
            children: (0, o.jsx)(pw.Provider, {
              scope: e.__scopeSlider,
              children: (0, o.jsx)(pw.Slot, {
                scope: e.__scopeSlider,
                children: (0, o.jsx)(x, {
                  "aria-disabled": s,
                  "data-disabled": s ? "" : void 0,
                  ...p,
                  ref: t,
                  onPointerDown: ew(p.onPointerDown, (() => {
                    s || (j.current = y)
                  })),
                  min: n,
                  max: a,
                  inverted: v,
                  onSlideStart: s ? void 0 : function(e) {
                    const t = function(e, t) {
                      if (1 === e.length) return 0;
                      const r = e.map((e => Math.abs(e - t))),
                        n = Math.min(...r);
                      return r.indexOf(n)
                    }(y, e);
                    R(e, t)
                  },
                  onSlideMove: s ? void 0 : function(e) {
                    R(e, w.current)
                  },
                  onSlideEnd: s ? void 0 : function() {
                    const e = j.current[w.current];
                    y[w.current] !== e && h(y)
                  },
                  onHomeKeyDown: () => !s && R(n, 0, {
                    commit: !0
                  }),
                  onEndKeyDown: () => !s && R(a, y.length - 1, {
                    commit: !0
                  }),
                  onStepKeyDown: ({
                    event: e,
                    direction: t
                  }) => {
                    if (!s) {
                      const r = uw.includes(e.key) || e.shiftKey && fw.includes(e.key) ? 10 : 1,
                        n = w.current;
                      R(y[n] + l * r * t, n, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        }));
      jw.displayName = vw;
      var [Rw, Mw] = ww(vw, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), Cw = m.forwardRef(((e, t) => {
        const {
          min: r,
          max: n,
          dir: a,
          inverted: l,
          onSlideStart: i,
          onSlideMove: s,
          onSlideEnd: c,
          onStepKeyDown: d,
          ...u
        } = e, [f, h] = m.useState(null), v = we(t, (e => h(e))), p = m.useRef(), g = lw(a), w = "ltr" === g, x = w && !l || !w && l;

        function y(e) {
          const t = p.current || f.getBoundingClientRect(),
            o = kw([0, t.width], x ? [r, n] : [n, r]);
          return p.current = t, o(e - t.left)
        }
        return (0, o.jsx)(Rw, {
          scope: e.__scopeSlider,
          startEdge: x ? "left" : "right",
          endEdge: x ? "right" : "left",
          direction: x ? 1 : -1,
          size: "width",
          children: (0, o.jsx)(Sw, {
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
              p.current = void 0, c?.()
            },
            onStepKeyDown: e => {
              const t = hw[x ? "from-left" : "from-right"].includes(e.key);
              d?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      })), Lw = m.forwardRef(((e, t) => {
        const {
          min: r,
          max: n,
          inverted: a,
          onSlideStart: l,
          onSlideMove: i,
          onSlideEnd: s,
          onStepKeyDown: c,
          ...d
        } = e, u = m.useRef(null), f = we(t, u), h = m.useRef(), v = !a;

        function p(e) {
          const t = h.current || u.current.getBoundingClientRect(),
            o = kw([0, t.height], v ? [n, r] : [r, n]);
          return h.current = t, o(e - t.top)
        }
        return (0, o.jsx)(Rw, {
          scope: e.__scopeSlider,
          startEdge: v ? "bottom" : "top",
          endEdge: v ? "top" : "bottom",
          size: "height",
          direction: v ? 1 : -1,
          children: (0, o.jsx)(Sw, {
            "data-orientation": "vertical",
            ...d,
            ref: f,
            style: {
              ...d.style,
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
              const t = hw[v ? "from-bottom" : "from-top"].includes(e.key);
              c?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      })), Sw = m.forwardRef(((e, t) => {
        const {
          __scopeSlider: r,
          onSlideStart: n,
          onSlideMove: a,
          onSlideEnd: l,
          onHomeKeyDown: i,
          onEndKeyDown: s,
          onStepKeyDown: c,
          ...d
        } = e, u = bw(vw, r);
        return (0, o.jsx)(Me.span, {
          ...d,
          ref: t,
          onKeyDown: ew(e.onKeyDown, (e => {
            "Home" === e.key ? (i(e), e.preventDefault()) : "End" === e.key ? (s(e), e.preventDefault()) : uw.concat(fw).includes(e.key) && (c(e), e.preventDefault())
          })),
          onPointerDown: ew(e.onPointerDown, (e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), u.thumbs.has(t) ? t.focus() : n(e)
          })),
          onPointerMove: ew(e.onPointerMove, (e => {
            e.target.hasPointerCapture(e.pointerId) && a(e)
          })),
          onPointerUp: ew(e.onPointerUp, (e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), l(e))
          }))
        })
      })), Ew = "SliderTrack", Pw = m.forwardRef(((e, t) => {
        const {
          __scopeSlider: r,
          ...n
        } = e, a = bw(Ew, r);
        return (0, o.jsx)(Me.span, {
          "data-disabled": a.disabled ? "" : void 0,
          "data-orientation": a.orientation,
          ...n,
          ref: t
        })
      }));
      Pw.displayName = Ew;
      var _w = "SliderRange",
        Dw = m.forwardRef(((e, t) => {
          const {
            __scopeSlider: r,
            ...n
          } = e, a = bw(_w, r), l = Mw(_w, r), i = we(t, m.useRef(null)), s = a.values.length, c = a.values.map((e => Ow(e, a.min, a.max))), d = s > 1 ? Math.min(...c) : 0, u = 100 - Math.max(...c);
          return (0, o.jsx)(Me.span, {
            "data-orientation": a.orientation,
            "data-disabled": a.disabled ? "" : void 0,
            ...n,
            ref: i,
            style: {
              ...e.style,
              [l.startEdge]: d + "%",
              [l.endEdge]: u + "%"
            }
          })
        }));
      Dw.displayName = _w;
      var Aw = "SliderThumb",
        Tw = m.forwardRef(((e, t) => {
          const r = gw(e.__scopeSlider),
            [n, a] = m.useState(null),
            l = we(t, (e => a(e))),
            i = m.useMemo((() => n ? r().findIndex((e => e.ref.current === n)) : -1), [r, n]);
          return (0, o.jsx)(Iw, {
            ...e,
            ref: l,
            index: i
          })
        })),
        Iw = m.forwardRef(((e, t) => {
          const {
            __scopeSlider: r,
            index: n,
            name: a,
            ...l
          } = e, i = bw(Aw, r), s = Mw(Aw, r), [c, d] = m.useState(null), u = we(t, (e => d(e))), f = !c || Boolean(c.closest("form")), h = cw(c), v = i.values[n], p = void 0 === v ? 0 : Ow(v, i.min, i.max), g = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(n, i.values.length), w = h?.[s.size], x = w ? function(e, t, r) {
            const n = e / 2;
            return (n - kw([0, 50], [0, n])(t) * r) * r
          }(w, p, s.direction) : 0;
          return m.useEffect((() => {
            if (c) return i.thumbs.add(c), () => {
              i.thumbs.delete(c)
            }
          }), [c, i.thumbs]), (0, o.jsxs)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [s.startEdge]: `calc(${p}% + ${x}px)`
            },
            children: [(0, o.jsx)(pw.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, o.jsx)(Me.span, {
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
                onFocus: ew(e.onFocus, (() => {
                  i.valueIndexToChangeRef.current = n
                }))
              })
            }), f && (0, o.jsx)(Nw, {
              name: a ?? (i.name ? i.name + (i.values.length > 1 ? "[]" : "") : void 0),
              value: v
            }, n)]
          })
        }));
      Tw.displayName = Aw;
      var Nw = e => {
        const {
          value: t,
          ...r
        } = e, n = m.useRef(null), a = iw(t);
        return m.useEffect((() => {
          const e = n.current,
            r = window.HTMLInputElement.prototype,
            o = Object.getOwnPropertyDescriptor(r, "value").set;
          if (a !== t && o) {
            const r = new Event("input", {
              bubbles: !0
            });
            o.call(e, t), e.dispatchEvent(r)
          }
        }), [a, t]), (0, o.jsx)("input", {
          style: {
            display: "none"
          },
          ...r,
          ref: n,
          defaultValue: t
        })
      };

      function Ow(e, t, r) {
        return Jm(100 / (r - t) * (e - t), [0, 100])
      }

      function kw(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }
      var Hw = jw,
        Bw = Pw,
        zw = Dw,
        Vw = Tw;
      const Fw = {
          id: "Lightbox_Close_Button_Label",
          description: "Aria-label for the lightbox close button",
          defaultMessage: "Close lightbox"
        },
        Gw = {
          id: "Lightbox_Close_Button_Tooltip",
          description: "Visible tooltip for the lightbox close button",
          defaultMessage: "Press {shortcut}"
        },
        Xw = {
          id: "Lightbox_Zoom_In_Button_Label",
          description: "Aria-label for the lightbox zoom in button",
          defaultMessage: "Zoom in"
        },
        Uw = {
          id: "Lightbox_Zoom_In_Button_Tooltip",
          description: "Visible tooltip for the lightbox zoom in button",
          defaultMessage: "Press {shortcut}"
        },
        qw = {
          id: "Lightbox_Zoom_Out_Button_Label",
          description: "Aria-label for the lightbox zoom out button",
          defaultMessage: "Zoom out"
        },
        Ww = {
          id: "Lightbox_Zoom_Out_Button__Tooltip",
          description: "Visible tooltip for the lightbox zoom out button",
          defaultMessage: "Press {shortcut}"
        },
        Kw = {
          id: "Lightbox_Reset_Zoom_Button_Label",
          description: "Aria-label for the lightbox reset button (resets zoom and position)",
          defaultMessage: "Reset"
        },
        $w = {
          id: "Lightbox_Reset_Zoom_Button_Tooltip",
          description: "Visible tooltip for the lightbox reset button (resets zoom and position)",
          defaultMessage: "Press {shortcut}"
        },
        Yw = {
          id: "Lightbox_Zoom_Slider_Label",
          description: "Aria-label for the lightbox zoom slider",
          defaultMessage: "Zoom level"
        },
        Zw = {
          id: "Lightbox_Zoom_Slider_Tooltip",
          description: "Visible tooltip for the lightbox zoom slider",
          defaultMessage: "{zoom}%"
        },
        Qw = {
          id: "Lightbox_Download_Button_Label",
          description: "Aria-label for the lightbox download button (downloads the image)",
          defaultMessage: "Download"
        },
        Jw = {
          id: "Lightbox_Download_Button_Tooltip",
          description: "Visible tooltip for the lightbox download button (downloads the image)",
          defaultMessage: "Download"
        };

      function ex() {
        return ex = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, ex.apply(this, arguments)
      }
      var tx = ["shift", "alt", "meta", "mod", "ctrl"],
        rx = {
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

      function nx(e) {
        return (rx[e] || e).trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
      }

      function ox(e, t) {
        return void 0 === t && (t = ","), e.split(t)
      }

      function ax(e, t, r) {
        void 0 === t && (t = "+");
        var n = e.toLocaleLowerCase().split(t).map((function(e) {
          return nx(e)
        }));
        return ex({}, {
          alt: n.includes("alt"),
          ctrl: n.includes("ctrl") || n.includes("control"),
          shift: n.includes("shift"),
          meta: n.includes("meta"),
          mod: n.includes("mod")
        }, {
          keys: n.filter((function(e) {
            return !tx.includes(e)
          })),
          description: r
        })
      }
      "undefined" != typeof document && (document.addEventListener("keydown", (function(e) {
        void 0 !== e.key && sx([nx(e.key), nx(e.code)])
      })), document.addEventListener("keyup", (function(e) {
        void 0 !== e.key && cx([nx(e.key), nx(e.code)])
      }))), "undefined" != typeof window && window.addEventListener("blur", (function() {
        lx.clear()
      }));
      var lx = new Set;

      function ix(e) {
        return Array.isArray(e)
      }

      function sx(e) {
        var t = Array.isArray(e) ? e : [e];
        lx.has("meta") && lx.forEach((function(e) {
          return ! function(e) {
            return tx.includes(e)
          }(e) && lx.delete(e.toLowerCase())
        })), t.forEach((function(e) {
          return lx.add(e.toLowerCase())
        }))
      }

      function cx(e) {
        var t = Array.isArray(e) ? e : [e];
        "meta" === e ? lx.clear() : t.forEach((function(e) {
          return lx.delete(e.toLowerCase())
        }))
      }

      function dx(e, t) {
        var r = e.target;
        void 0 === t && (t = !1);
        var n = r && r.tagName;
        return ix(t) ? Boolean(n && t && t.some((function(e) {
          return e.toLowerCase() === n.toLowerCase()
        }))) : Boolean(n && t && !0 === t)
      }
      var ux = (0, m.createContext)(void 0);

      function fx(e) {
        var t = e.addHotkey,
          r = e.removeHotkey,
          n = e.children;
        return (0, o.jsx)(ux.Provider, {
          value: {
            addHotkey: t,
            removeHotkey: r
          },
          children: n
        })
      }

      function hx(e, t) {
        return e && t && "object" == typeof e && "object" == typeof t ? Object.keys(e).length === Object.keys(t).length && Object.keys(e).reduce((function(r, n) {
          return r && hx(e[n], t[n])
        }), !0) : e === t
      }
      var vx = (0, m.createContext)({
          hotkeys: [],
          enabledScopes: [],
          toggleScope: function() {},
          enableScope: function() {},
          disableScope: function() {}
        }),
        px = function(e) {
          var t = e.initiallyActiveScopes,
            r = void 0 === t ? ["*"] : t,
            n = e.children,
            a = (0, m.useState)((null == r ? void 0 : r.length) > 0 ? r : ["*"]),
            l = a[0],
            i = a[1],
            s = (0, m.useState)([]),
            c = s[0],
            d = s[1],
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
              d((function(t) {
                return [].concat(t, [e])
              }))
            }), []),
            p = (0, m.useCallback)((function(e) {
              d((function(t) {
                return t.filter((function(t) {
                  return !hx(t, e)
                }))
              }))
            }), []);
          return (0, o.jsx)(vx.Provider, {
            value: {
              enabledScopes: l,
              hotkeys: c,
              enableScope: u,
              disableScope: f,
              toggleScope: h
            },
            children: (0, o.jsx)(fx, {
              addHotkey: v,
              removeHotkey: p,
              children: n
            })
          })
        },
        gx = function(e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
        },
        mx = "undefined" != typeof window ? m.useLayoutEffect : m.useEffect;

      function wx(e, t, r, n) {
        var o = (0, m.useRef)(null),
          a = (0, m.useRef)(!1),
          l = r instanceof Array ? n instanceof Array ? void 0 : n : r,
          i = ix(e) ? e.join(null == l ? void 0 : l.splitKey) : e,
          s = r instanceof Array ? r : n instanceof Array ? n : void 0,
          c = (0, m.useCallback)(t, null != s ? s : []),
          d = (0, m.useRef)(c);
        d.current = s ? c : t;
        var u = function(e) {
            var t = (0, m.useRef)(void 0);
            return hx(t.current, e) || (t.current = e), t.current
          }(l),
          f = (0, m.useContext)(vx).enabledScopes,
          h = (0, m.useContext)(ux);
        return mx((function() {
          if (!1 !== (null == u ? void 0 : u.enabled) && (e = f, t = null == u ? void 0 : u.scopes, 0 === e.length && t ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), 1) : !t || e.some((function(e) {
              return t.includes(e)
            })) || e.includes("*"))) {
            var e, t, r = function(e, t) {
                var r;
                if (void 0 === t && (t = !1), !dx(e, ["input", "textarea", "select"]) || dx(e, null == u ? void 0 : u.enableOnFormTags)) {
                  if (null !== o.current) {
                    var n = o.current.getRootNode();
                    if ((n instanceof Document || n instanceof ShadowRoot) && n.activeElement !== o.current && !o.current.contains(n.activeElement)) return void gx(e)
                  }(null == (r = e.target) || !r.isContentEditable || null != u && u.enableOnContentEditable) && ox(i, null == u ? void 0 : u.splitKey).forEach((function(r) {
                    var n, o = ax(r, null == u ? void 0 : u.combinationKey);
                    if (function(e, t, r) {
                        void 0 === r && (r = !1);
                        var n, o, a = t.alt,
                          l = t.meta,
                          i = t.mod,
                          s = t.shift,
                          c = t.ctrl,
                          d = t.keys,
                          u = e.key,
                          f = e.code,
                          h = e.ctrlKey,
                          v = e.metaKey,
                          p = e.shiftKey,
                          g = e.altKey,
                          m = nx(f),
                          w = u.toLowerCase();
                        if (!(null != d && d.includes(m) || null != d && d.includes(w) || ["ctrl", "control", "unknown", "meta", "alt", "shift", "os"].includes(m))) return !1;
                        if (!r) {
                          if (a === !g && "alt" !== w) return !1;
                          if (s === !p && "shift" !== w) return !1;
                          if (i) {
                            if (!v && !h) return !1
                          } else {
                            if (l === !v && "meta" !== w && "os" !== w) return !1;
                            if (c === !h && "ctrl" !== w && "control" !== w) return !1
                          }
                        }
                        return !(!d || 1 !== d.length || !d.includes(w) && !d.includes(m)) || (d ? (void 0 === o && (o = ","), (ix(n = d) ? n : n.split(o)).every((function(e) {
                          return lx.has(e.trim().toLowerCase())
                        }))) : !d)
                      }(e, o, null == u ? void 0 : u.ignoreModifiers) || null != (n = o.keys) && n.includes("*")) {
                      if (null != u && null != u.ignoreEventWhen && u.ignoreEventWhen(e)) return;
                      if (t && a.current) return;
                      if (function(e, t, r) {
                          ("function" == typeof r && r(e, t) || !0 === r) && e.preventDefault()
                        }(e, o, null == u ? void 0 : u.preventDefault), ! function(e, t, r) {
                          return "function" == typeof r ? r(e, t) : !0 === r || void 0 === r
                        }(e, o, null == u ? void 0 : u.enabled)) return void gx(e);
                      d.current(e, o), t || (a.current = !0)
                    }
                  }))
                }
              },
              n = function(e) {
                void 0 !== e.key && (sx(nx(e.code)), (void 0 === (null == u ? void 0 : u.keydown) && !0 !== (null == u ? void 0 : u.keyup) || null != u && u.keydown) && r(e))
              },
              s = function(e) {
                void 0 !== e.key && (cx(nx(e.code)), a.current = !1, null != u && u.keyup && r(e, !0))
              },
              c = o.current || (null == l ? void 0 : l.document) || document;
            return c.addEventListener("keyup", s), c.addEventListener("keydown", n), h && ox(i, null == u ? void 0 : u.splitKey).forEach((function(e) {
                return h.addHotkey(ax(e, null == u ? void 0 : u.combinationKey, null == u ? void 0 : u.description))
              })),
              function() {
                c.removeEventListener("keyup", s), c.removeEventListener("keydown", n), h && ox(i, null == u ? void 0 : u.splitKey).forEach((function(e) {
                  return h.removeHotkey(ax(e, null == u ? void 0 : u.combinationKey, null == u ? void 0 : u.description))
                }))
              }
          }
        }), [i, u, f]), o
      }

      function xx(e) {
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

      function yx(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function bx(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? yx(Object(r), !0).forEach((function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = xx(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yx(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function jx(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Rx = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Mx = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = bx(bx({}, e.defaultVariants), t);
            for (var o in n) {
              var a, l = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != l) {
                var i = l;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var s = e.variantClassNames[o][i];
                s && (r += " " + s)
              }
            }
            for (var [c, d] of e.compoundVariants) Rx(c, n, e.defaultVariants) && (r += " " + d);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return jx(e.variantClassNames, (e => jx(e, (e => e.split(" ")[0]))))
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
      const Cx = {
          XS: "MD",
          SM: "MD",
          MD: "LG",
          LG: "LG"
        },
        Lx = (0, m.forwardRef)((({
          testId: e,
          asChild: t,
          className: r,
          icon: a,
          label: l,
          appearance: i,
          size: s = "MD",
          fullWidth: c = !1,
          onClick: d,
          ...u
        }, f) => {
          const v = Ic((0, m.useRef)(null), f),
            {
              events: p,
              others: w
            } = g(u, {
              onPress: !1
            }),
            {
              buttonProps: x,
              isPressed: b
            } = gd({
              ...w,
              elementType: "button",
              preventFocusOnPress: !0,
              onPress: e => w.onPress?.(e) ?? d?.(e)
            }, v),
            j = h({
              ...x,
              className: r
            }, {
              ...p,
              role: "button",
              "data-pressed": b,
              "data-testid": e,
              className: Mx({
                appearance: i,
                size: s,
                fullWidth: c
              })
            }),
            R = n[a],
            M = t ? y.DX : "button",
            C = Cx[s];
          return (0, o.jsx)(M, {
            ref: v,
            ...j,
            children: (0, o.jsx)(y.xV, {
              children: R && (0, o.jsx)(R, {
                label: l || "",
                size: C
              })
            })
          })
        })),
        Sx = (0, m.forwardRef)((({
          shortcut: e,
          isInline: t,
          onShortcut: r
        }, n) => (wx(e, (e => r?.(e)), [r]), (0, o.jsx)(te, {
          className: i("foundry_bc732x0", {
            foundry_bc732x1: t
          }),
          asChild: !0,
          children: (0, o.jsx)("kbd", {
            ref: n,
            children: e
          })
        }))));
      var Ex, Px = "dismissableLayer.update",
        _x = m.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        Dx = m.forwardRef(((e, t) => {
          const {
            disableOutsidePointerEvents: r = !1,
            onEscapeKeyDown: n,
            onPointerDownOutside: a,
            onFocusOutside: l,
            onInteractOutside: i,
            onDismiss: s,
            ...c
          } = e, d = m.useContext(_x), [u, f] = m.useState(null), h = u?.ownerDocument ?? globalThis?.document, [, v] = m.useState({}), p = we(t, (e => f(e))), g = Array.from(d.layers), [w] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), x = g.indexOf(w), y = u ? g.indexOf(u) : -1, b = d.layersWithOutsidePointerEventsDisabled.size > 0, j = y >= x, R = function(e, t = globalThis?.document) {
            const r = nw(e),
              n = m.useRef(!1),
              o = m.useRef((() => {}));
            return m.useEffect((() => {
              const e = e => {
                  if (e.target && !n.current) {
                    let n = function() {
                      Tx("dismissableLayer.pointerDownOutside", r, a, {
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
            j && !r && (a?.(e), i?.(e), e.defaultPrevented || s?.())
          }), h), M = function(e, t = globalThis?.document) {
            const r = nw(e),
              n = m.useRef(!1);
            return m.useEffect((() => {
              const e = e => {
                e.target && !n.current && Tx("dismissableLayer.focusOutside", r, {
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
            [...d.branches].some((e => e.contains(t))) || (l?.(e), i?.(e), e.defaultPrevented || s?.())
          }), h);
          return function(e, t = globalThis?.document) {
            const r = nw(e);
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
            y === d.layers.size - 1 && (n?.(e), !e.defaultPrevented && s && (e.preventDefault(), s()))
          }), h), m.useEffect((() => {
            if (u) return r && (0 === d.layersWithOutsidePointerEventsDisabled.size && (Ex = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(u)), d.layers.add(u), Ax(), () => {
              r && 1 === d.layersWithOutsidePointerEventsDisabled.size && (h.body.style.pointerEvents = Ex)
            }
          }), [u, h, r, d]), m.useEffect((() => () => {
            u && (d.layers.delete(u), d.layersWithOutsidePointerEventsDisabled.delete(u), Ax())
          }), [u, d]), m.useEffect((() => {
            const e = () => v({});
            return document.addEventListener(Px, e), () => document.removeEventListener(Px, e)
          }), []), (0, o.jsx)(Me.div, {
            ...c,
            ref: p,
            style: {
              pointerEvents: b ? j ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: ew(e.onFocusCapture, M.onFocusCapture),
            onBlurCapture: ew(e.onBlurCapture, M.onBlurCapture),
            onPointerDownCapture: ew(e.onPointerDownCapture, R.onPointerDownCapture)
          })
        }));

      function Ax() {
        const e = new CustomEvent(Px);
        document.dispatchEvent(e)
      }

      function Tx(e, t, r, {
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
        }), n ? function(e, t) {
          e && j.flushSync((() => e.dispatchEvent(t)))
        }(o, a) : o.dispatchEvent(a)
      }
      Dx.displayName = "DismissableLayer", m.forwardRef(((e, t) => {
        const r = m.useContext(_x),
          n = m.useRef(null),
          a = we(t, n);
        return m.useEffect((() => {
          const e = n.current;
          if (e) return r.branches.add(e), () => {
            r.branches.delete(e)
          }
        }), [r.branches]), (0, o.jsx)(Me.div, {
          ...e,
          ref: a
        })
      })).displayName = "DismissableLayerBranch";
      var Ix = w["useId".toString()] || (() => {}),
        Nx = 0;

      function Ox(e) {
        const [t, r] = m.useState(Ix());
        return sw((() => {
          e || r((e => e ?? String(Nx++)))
        }), [e]), e || (t ? `radix-${t}` : "")
      }
      const kx = ["top", "right", "bottom", "left"],
        Hx = Math.min,
        Bx = Math.max,
        zx = Math.round,
        Vx = Math.floor,
        Fx = e => ({
          x: e,
          y: e
        }),
        Gx = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
        },
        Xx = {
          start: "end",
          end: "start"
        };

      function Ux(e, t, r) {
        return Bx(e, Hx(t, r))
      }

      function qx(e, t) {
        return "function" == typeof e ? e(t) : e
      }

      function Wx(e) {
        return e.split("-")[0]
      }

      function Kx(e) {
        return e.split("-")[1]
      }

      function $x(e) {
        return "x" === e ? "y" : "x"
      }

      function Yx(e) {
        return "y" === e ? "height" : "width"
      }

      function Zx(e) {
        return ["top", "bottom"].includes(Wx(e)) ? "y" : "x"
      }

      function Qx(e) {
        return $x(Zx(e))
      }

      function Jx(e) {
        return e.replace(/start|end/g, (e => Xx[e]))
      }

      function ey(e) {
        return e.replace(/left|right|bottom|top/g, (e => Gx[e]))
      }

      function ty(e) {
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

      function ry(e) {
        return {
          ...e,
          top: e.y,
          left: e.x,
          right: e.x + e.width,
          bottom: e.y + e.height
        }
      }

      function ny(e, t, r) {
        let {
          reference: n,
          floating: o
        } = e;
        const a = Zx(t),
          l = Qx(t),
          i = Yx(l),
          s = Wx(t),
          c = "y" === a,
          d = n.x + n.width / 2 - o.width / 2,
          u = n.y + n.height / 2 - o.height / 2,
          f = n[i] / 2 - o[i] / 2;
        let h;
        switch (s) {
          case "top":
            h = {
              x: d,
              y: n.y - o.height
            };
            break;
          case "bottom":
            h = {
              x: d,
              y: n.y + n.height
            };
            break;
          case "right":
            h = {
              x: n.x + n.width,
              y: u
            };
            break;
          case "left":
            h = {
              x: n.x - o.width,
              y: u
            };
            break;
          default:
            h = {
              x: n.x,
              y: n.y
            }
        }
        switch (Kx(t)) {
          case "start":
            h[l] -= f * (r && c ? -1 : 1);
            break;
          case "end":
            h[l] += f * (r && c ? -1 : 1)
        }
        return h
      }
      async function oy(e, t) {
        var r;
        void 0 === t && (t = {});
        const {
          x: n,
          y: o,
          platform: a,
          rects: l,
          elements: i,
          strategy: s
        } = e, {
          boundary: c = "clippingAncestors",
          rootBoundary: d = "viewport",
          elementContext: u = "floating",
          altBoundary: f = !1,
          padding: h = 0
        } = qx(t, e), v = ty(h), p = i[f ? "floating" === u ? "reference" : "floating" : u], g = ry(await a.getClippingRect({
          element: null == (r = await (null == a.isElement ? void 0 : a.isElement(p))) || r ? p : p.contextElement || await (null == a.getDocumentElement ? void 0 : a.getDocumentElement(i.floating)),
          boundary: c,
          rootBoundary: d,
          strategy: s
        })), m = "floating" === u ? {
          ...l.floating,
          x: n,
          y: o
        } : l.reference, w = await (null == a.getOffsetParent ? void 0 : a.getOffsetParent(i.floating)), x = await (null == a.isElement ? void 0 : a.isElement(w)) && await (null == a.getScale ? void 0 : a.getScale(w)) || {
          x: 1,
          y: 1
        }, y = ry(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
          rect: m,
          offsetParent: w,
          strategy: s
        }) : m);
        return {
          top: (g.top - y.top + v.top) / x.y,
          bottom: (y.bottom - g.bottom + v.bottom) / x.y,
          left: (g.left - y.left + v.left) / x.x,
          right: (y.right - g.right + v.right) / x.x
        }
      }
      const ay = e => ({
          name: "arrow",
          options: e,
          async fn(t) {
            const {
              x: r,
              y: n,
              placement: o,
              rects: a,
              platform: l,
              elements: i,
              middlewareData: s
            } = t, {
              element: c,
              padding: d = 0
            } = qx(e, t) || {};
            if (null == c) return {};
            const u = ty(d),
              f = {
                x: r,
                y: n
              },
              h = Qx(o),
              v = Yx(h),
              p = await l.getDimensions(c),
              g = "y" === h,
              m = g ? "top" : "left",
              w = g ? "bottom" : "right",
              x = g ? "clientHeight" : "clientWidth",
              y = a.reference[v] + a.reference[h] - f[h] - a.floating[v],
              b = f[h] - a.reference[h],
              j = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(c));
            let R = j ? j[x] : 0;
            R && await (null == l.isElement ? void 0 : l.isElement(j)) || (R = i.floating[x] || a.floating[v]);
            const M = y / 2 - b / 2,
              C = R / 2 - p[v] / 2 - 1,
              L = Hx(u[m], C),
              S = Hx(u[w], C),
              E = L,
              P = R - p[v] - S,
              _ = R / 2 - p[v] / 2 + M,
              D = Ux(E, _, P),
              A = !s.arrow && null != Kx(o) && _ != D && a.reference[v] / 2 - (_ < E ? L : S) - p[v] / 2 < 0,
              T = A ? _ < E ? _ - E : _ - P : 0;
            return {
              [h]: f[h] + T,
              data: {
                [h]: D,
                centerOffset: _ - D - T,
                ...A && {
                  alignmentOffset: T
                }
              },
              reset: A
            }
          }
        }),
        ly = function(e) {
          return void 0 === e && (e = {}), {
            name: "flip",
            options: e,
            async fn(t) {
              var r, n;
              const {
                placement: o,
                middlewareData: a,
                rects: l,
                initialPlacement: i,
                platform: s,
                elements: c
              } = t, {
                mainAxis: d = !0,
                crossAxis: u = !0,
                fallbackPlacements: f,
                fallbackStrategy: h = "bestFit",
                fallbackAxisSideDirection: v = "none",
                flipAlignment: p = !0,
                ...g
              } = qx(e, t);
              if (null != (r = a.arrow) && r.alignmentOffset) return {};
              const m = Wx(o),
                w = Wx(i) === i,
                x = await (null == s.isRTL ? void 0 : s.isRTL(c.floating)),
                y = f || (w || !p ? [ey(i)] : function(e) {
                  const t = ey(e);
                  return [Jx(e), t, Jx(t)]
                }(i));
              f || "none" === v || y.push(... function(e, t, r, n) {
                const o = Kx(e);
                let a = function(e, t, r) {
                  const n = ["left", "right"],
                    o = ["right", "left"],
                    a = ["top", "bottom"],
                    l = ["bottom", "top"];
                  switch (e) {
                    case "top":
                    case "bottom":
                      return r ? t ? o : n : t ? n : o;
                    case "left":
                    case "right":
                      return t ? a : l;
                    default:
                      return []
                  }
                }(Wx(e), "start" === r, n);
                return o && (a = a.map((e => e + "-" + o)), t && (a = a.concat(a.map(Jx)))), a
              }(i, p, v, x));
              const b = [i, ...y],
                j = await oy(t, g),
                R = [];
              let M = (null == (n = a.flip) ? void 0 : n.overflows) || [];
              if (d && R.push(j[m]), u) {
                const e = function(e, t, r) {
                  void 0 === r && (r = !1);
                  const n = Kx(e),
                    o = Qx(e),
                    a = Yx(o);
                  let l = "x" === o ? n === (r ? "end" : "start") ? "right" : "left" : "start" === n ? "bottom" : "top";
                  return t.reference[a] > t.floating[a] && (l = ey(l)), [l, ey(l)]
                }(o, l, x);
                R.push(j[e[0]], j[e[1]])
              }
              if (M = [...M, {
                  placement: o,
                  overflows: R
                }], !R.every((e => e <= 0))) {
                var C, L;
                const e = ((null == (C = a.flip) ? void 0 : C.index) || 0) + 1,
                  t = b[e];
                if (t) return {
                  data: {
                    index: e,
                    overflows: M
                  },
                  reset: {
                    placement: t
                  }
                };
                let r = null == (L = M.filter((e => e.overflows[0] <= 0)).sort(((e, t) => e.overflows[1] - t.overflows[1]))[0]) ? void 0 : L.placement;
                if (!r) switch (h) {
                  case "bestFit": {
                    var S;
                    const e = null == (S = M.map((e => [e.placement, e.overflows.filter((e => e > 0)).reduce(((e, t) => e + t), 0)])).sort(((e, t) => e[1] - t[1]))[0]) ? void 0 : S[0];
                    e && (r = e);
                    break
                  }
                  case "initialPlacement":
                    r = i
                }
                if (o !== r) return {
                  reset: {
                    placement: r
                  }
                }
              }
              return {}
            }
          }
        };

      function iy(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width
        }
      }

      function sy(e) {
        return kx.some((t => e[t] >= 0))
      }
      const cy = function(e) {
          return void 0 === e && (e = {}), {
            name: "hide",
            options: e,
            async fn(t) {
              const {
                rects: r
              } = t, {
                strategy: n = "referenceHidden",
                ...o
              } = qx(e, t);
              switch (n) {
                case "referenceHidden": {
                  const e = iy(await oy(t, {
                    ...o,
                    elementContext: "reference"
                  }), r.reference);
                  return {
                    data: {
                      referenceHiddenOffsets: e,
                      referenceHidden: sy(e)
                    }
                  }
                }
                case "escaped": {
                  const e = iy(await oy(t, {
                    ...o,
                    altBoundary: !0
                  }), r.floating);
                  return {
                    data: {
                      escapedOffsets: e,
                      escaped: sy(e)
                    }
                  }
                }
                default:
                  return {}
              }
            }
          }
        },
        dy = function(e) {
          return void 0 === e && (e = 0), {
            name: "offset",
            options: e,
            async fn(t) {
              const {
                x: r,
                y: n
              } = t, o = await async function(e, t) {
                const {
                  placement: r,
                  platform: n,
                  elements: o
                } = e, a = await (null == n.isRTL ? void 0 : n.isRTL(o.floating)), l = Wx(r), i = Kx(r), s = "y" === Zx(r), c = ["left", "top"].includes(l) ? -1 : 1, d = a && s ? -1 : 1, u = qx(t, e);
                let {
                  mainAxis: f,
                  crossAxis: h,
                  alignmentAxis: v
                } = "number" == typeof u ? {
                  mainAxis: u,
                  crossAxis: 0,
                  alignmentAxis: null
                } : {
                  mainAxis: 0,
                  crossAxis: 0,
                  alignmentAxis: null,
                  ...u
                };
                return i && "number" == typeof v && (h = "end" === i ? -1 * v : v), s ? {
                  x: h * d,
                  y: f * c
                } : {
                  x: f * c,
                  y: h * d
                }
              }(t, e);
              return {
                x: r + o.x,
                y: n + o.y,
                data: o
              }
            }
          }
        },
        uy = function(e) {
          return void 0 === e && (e = {}), {
            name: "shift",
            options: e,
            async fn(t) {
              const {
                x: r,
                y: n,
                placement: o
              } = t, {
                mainAxis: a = !0,
                crossAxis: l = !1,
                limiter: i = {
                  fn: e => {
                    let {
                      x: t,
                      y: r
                    } = e;
                    return {
                      x: t,
                      y: r
                    }
                  }
                },
                ...s
              } = qx(e, t), c = {
                x: r,
                y: n
              }, d = await oy(t, s), u = Zx(Wx(o)), f = $x(u);
              let h = c[f],
                v = c[u];
              if (a) {
                const e = "y" === f ? "bottom" : "right";
                h = Ux(h + d["y" === f ? "top" : "left"], h, h - d[e])
              }
              if (l) {
                const e = "y" === u ? "bottom" : "right";
                v = Ux(v + d["y" === u ? "top" : "left"], v, v - d[e])
              }
              const p = i.fn({
                ...t,
                [f]: h,
                [u]: v
              });
              return {
                ...p,
                data: {
                  x: p.x - r,
                  y: p.y - n
                }
              }
            }
          }
        },
        fy = function(e) {
          return void 0 === e && (e = {}), {
            options: e,
            fn(t) {
              const {
                x: r,
                y: n,
                placement: o,
                rects: a,
                middlewareData: l
              } = t, {
                offset: i = 0,
                mainAxis: s = !0,
                crossAxis: c = !0
              } = qx(e, t), d = {
                x: r,
                y: n
              }, u = Zx(o), f = $x(u);
              let h = d[f],
                v = d[u];
              const p = qx(i, t),
                g = "number" == typeof p ? {
                  mainAxis: p,
                  crossAxis: 0
                } : {
                  mainAxis: 0,
                  crossAxis: 0,
                  ...p
                };
              if (s) {
                const e = "y" === f ? "height" : "width",
                  t = a.reference[f] - a.floating[e] + g.mainAxis,
                  r = a.reference[f] + a.reference[e] - g.mainAxis;
                h < t ? h = t : h > r && (h = r)
              }
              if (c) {
                var m, w;
                const e = "y" === f ? "width" : "height",
                  t = ["top", "left"].includes(Wx(o)),
                  r = a.reference[u] - a.floating[e] + (t && (null == (m = l.offset) ? void 0 : m[u]) || 0) + (t ? 0 : g.crossAxis),
                  n = a.reference[u] + a.reference[e] + (t ? 0 : (null == (w = l.offset) ? void 0 : w[u]) || 0) - (t ? g.crossAxis : 0);
                v < r ? v = r : v > n && (v = n)
              }
              return {
                [f]: h,
                [u]: v
              }
            }
          }
        },
        hy = function(e) {
          return void 0 === e && (e = {}), {
            name: "size",
            options: e,
            async fn(t) {
              const {
                placement: r,
                rects: n,
                platform: o,
                elements: a
              } = t, {
                apply: l = (() => {}),
                ...i
              } = qx(e, t), s = await oy(t, i), c = Wx(r), d = Kx(r), u = "y" === Zx(r), {
                width: f,
                height: h
              } = n.floating;
              let v, p;
              "top" === c || "bottom" === c ? (v = c, p = d === (await (null == o.isRTL ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (p = c, v = "end" === d ? "top" : "bottom");
              const g = h - s[v],
                m = f - s[p],
                w = !t.middlewareData.shift;
              let x = g,
                y = m;
              if (u) {
                const e = f - s.left - s.right;
                y = d || w ? Hx(m, e) : e
              } else {
                const e = h - s.top - s.bottom;
                x = d || w ? Hx(g, e) : e
              }
              if (w && !d) {
                const e = Bx(s.left, 0),
                  t = Bx(s.right, 0),
                  r = Bx(s.top, 0),
                  n = Bx(s.bottom, 0);
                u ? y = f - 2 * (0 !== e || 0 !== t ? e + t : Bx(s.left, s.right)) : x = h - 2 * (0 !== r || 0 !== n ? r + n : Bx(s.top, s.bottom))
              }
              await l({
                ...t,
                availableWidth: y,
                availableHeight: x
              });
              const b = await o.getDimensions(a.floating);
              return f !== b.width || h !== b.height ? {
                reset: {
                  rects: !0
                }
              } : {}
            }
          }
        };

      function vy(e) {
        return my(e) ? (e.nodeName || "").toLowerCase() : "#document"
      }

      function py(e) {
        var t;
        return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
      }

      function gy(e) {
        var t;
        return null == (t = (my(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
      }

      function my(e) {
        return e instanceof Node || e instanceof py(e).Node
      }

      function wy(e) {
        return e instanceof Element || e instanceof py(e).Element
      }

      function xy(e) {
        return e instanceof HTMLElement || e instanceof py(e).HTMLElement
      }

      function yy(e) {
        return "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof py(e).ShadowRoot)
      }

      function by(e) {
        const {
          overflow: t,
          overflowX: r,
          overflowY: n,
          display: o
        } = Ly(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(o)
      }

      function jy(e) {
        return ["table", "td", "th"].includes(vy(e))
      }

      function Ry(e) {
        const t = My(),
          r = Ly(e);
        return "none" !== r.transform || "none" !== r.perspective || !!r.containerType && "normal" !== r.containerType || !t && !!r.backdropFilter && "none" !== r.backdropFilter || !t && !!r.filter && "none" !== r.filter || ["transform", "perspective", "filter"].some((e => (r.willChange || "").includes(e))) || ["paint", "layout", "strict", "content"].some((e => (r.contain || "").includes(e)))
      }

      function My() {
        return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
      }

      function Cy(e) {
        return ["html", "body", "#document"].includes(vy(e))
      }

      function Ly(e) {
        return py(e).getComputedStyle(e)
      }

      function Sy(e) {
        return wy(e) ? {
          scrollLeft: e.scrollLeft,
          scrollTop: e.scrollTop
        } : {
          scrollLeft: e.pageXOffset,
          scrollTop: e.pageYOffset
        }
      }

      function Ey(e) {
        if ("html" === vy(e)) return e;
        const t = e.assignedSlot || e.parentNode || yy(e) && e.host || gy(e);
        return yy(t) ? t.host : t
      }

      function Py(e) {
        const t = Ey(e);
        return Cy(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : xy(t) && by(t) ? t : Py(t)
      }

      function _y(e, t, r) {
        var n;
        void 0 === t && (t = []), void 0 === r && (r = !0);
        const o = Py(e),
          a = o === (null == (n = e.ownerDocument) ? void 0 : n.body),
          l = py(o);
        return a ? t.concat(l, l.visualViewport || [], by(o) ? o : [], l.frameElement && r ? _y(l.frameElement) : []) : t.concat(o, _y(o, [], r))
      }

      function Dy(e) {
        const t = Ly(e);
        let r = parseFloat(t.width) || 0,
          n = parseFloat(t.height) || 0;
        const o = xy(e),
          a = o ? e.offsetWidth : r,
          l = o ? e.offsetHeight : n,
          i = zx(r) !== a || zx(n) !== l;
        return i && (r = a, n = l), {
          width: r,
          height: n,
          $: i
        }
      }

      function Ay(e) {
        return wy(e) ? e : e.contextElement
      }

      function Ty(e) {
        const t = Ay(e);
        if (!xy(t)) return Fx(1);
        const r = t.getBoundingClientRect(),
          {
            width: n,
            height: o,
            $: a
          } = Dy(t);
        let l = (a ? zx(r.width) : r.width) / n,
          i = (a ? zx(r.height) : r.height) / o;
        return l && Number.isFinite(l) || (l = 1), i && Number.isFinite(i) || (i = 1), {
          x: l,
          y: i
        }
      }
      const Iy = Fx(0);

      function Ny(e) {
        const t = py(e);
        return My() && t.visualViewport ? {
          x: t.visualViewport.offsetLeft,
          y: t.visualViewport.offsetTop
        } : Iy
      }

      function Oy(e, t, r, n) {
        void 0 === t && (t = !1), void 0 === r && (r = !1);
        const o = e.getBoundingClientRect(),
          a = Ay(e);
        let l = Fx(1);
        t && (n ? wy(n) && (l = Ty(n)) : l = Ty(e));
        const i = function(e, t, r) {
          return void 0 === t && (t = !1), !(!r || t && r !== py(e)) && t
        }(a, r, n) ? Ny(a) : Fx(0);
        let s = (o.left + i.x) / l.x,
          c = (o.top + i.y) / l.y,
          d = o.width / l.x,
          u = o.height / l.y;
        if (a) {
          const e = py(a),
            t = n && wy(n) ? py(n) : n;
          let r = e.frameElement;
          for (; r && n && t !== e;) {
            const e = Ty(r),
              t = r.getBoundingClientRect(),
              n = Ly(r),
              o = t.left + (r.clientLeft + parseFloat(n.paddingLeft)) * e.x,
              a = t.top + (r.clientTop + parseFloat(n.paddingTop)) * e.y;
            s *= e.x, c *= e.y, d *= e.x, u *= e.y, s += o, c += a, r = py(r).frameElement
          }
        }
        return ry({
          width: d,
          height: u,
          x: s,
          y: c
        })
      }

      function ky(e) {
        return Oy(gy(e)).left + Sy(e).scrollLeft
      }

      function Hy(e, t, r) {
        let n;
        if ("viewport" === t) n = function(e, t) {
          const r = py(e),
            n = gy(e),
            o = r.visualViewport;
          let a = n.clientWidth,
            l = n.clientHeight,
            i = 0,
            s = 0;
          if (o) {
            a = o.width, l = o.height;
            const e = My();
            (!e || e && "fixed" === t) && (i = o.offsetLeft, s = o.offsetTop)
          }
          return {
            width: a,
            height: l,
            x: i,
            y: s
          }
        }(e, r);
        else if ("document" === t) n = function(e) {
          const t = gy(e),
            r = Sy(e),
            n = e.ownerDocument.body,
            o = Bx(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth),
            a = Bx(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
          let l = -r.scrollLeft + ky(e);
          const i = -r.scrollTop;
          return "rtl" === Ly(n).direction && (l += Bx(t.clientWidth, n.clientWidth) - o), {
            width: o,
            height: a,
            x: l,
            y: i
          }
        }(gy(e));
        else if (wy(t)) n = function(e, t) {
          const r = Oy(e, !0, "fixed" === t),
            n = r.top + e.clientTop,
            o = r.left + e.clientLeft,
            a = xy(e) ? Ty(e) : Fx(1);
          return {
            width: e.clientWidth * a.x,
            height: e.clientHeight * a.y,
            x: o * a.x,
            y: n * a.y
          }
        }(t, r);
        else {
          const r = Ny(e);
          n = {
            ...t,
            x: t.x - r.x,
            y: t.y - r.y
          }
        }
        return ry(n)
      }

      function By(e, t) {
        const r = Ey(e);
        return !(r === t || !wy(r) || Cy(r)) && ("fixed" === Ly(r).position || By(r, t))
      }

      function zy(e, t, r) {
        const n = xy(t),
          o = gy(t),
          a = "fixed" === r,
          l = Oy(e, !0, a, t);
        let i = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const s = Fx(0);
        if (n || !n && !a)
          if (("body" !== vy(t) || by(o)) && (i = Sy(t)), n) {
            const e = Oy(t, !0, a, t);
            s.x = e.x + t.clientLeft, s.y = e.y + t.clientTop
          } else o && (s.x = ky(o));
        return {
          x: l.left + i.scrollLeft - s.x,
          y: l.top + i.scrollTop - s.y,
          width: l.width,
          height: l.height
        }
      }

      function Vy(e, t) {
        return xy(e) && "fixed" !== Ly(e).position ? t ? t(e) : e.offsetParent : null
      }

      function Fy(e, t) {
        const r = py(e);
        if (!xy(e)) return r;
        let n = Vy(e, t);
        for (; n && jy(n) && "static" === Ly(n).position;) n = Vy(n, t);
        return n && ("html" === vy(n) || "body" === vy(n) && "static" === Ly(n).position && !Ry(n)) ? r : n || function(e) {
          let t = Ey(e);
          for (; xy(t) && !Cy(t);) {
            if (Ry(t)) return t;
            t = Ey(t)
          }
          return null
        }(e) || r
      }
      const Gy = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
          let {
            rect: t,
            offsetParent: r,
            strategy: n
          } = e;
          const o = xy(r),
            a = gy(r);
          if (r === a) return t;
          let l = {
              scrollLeft: 0,
              scrollTop: 0
            },
            i = Fx(1);
          const s = Fx(0);
          if ((o || !o && "fixed" !== n) && (("body" !== vy(r) || by(a)) && (l = Sy(r)), xy(r))) {
            const e = Oy(r);
            i = Ty(r), s.x = e.x + r.clientLeft, s.y = e.y + r.clientTop
          }
          return {
            width: t.width * i.x,
            height: t.height * i.y,
            x: t.x * i.x - l.scrollLeft * i.x + s.x,
            y: t.y * i.y - l.scrollTop * i.y + s.y
          }
        },
        getDocumentElement: gy,
        getClippingRect: function(e) {
          let {
            element: t,
            boundary: r,
            rootBoundary: n,
            strategy: o
          } = e;
          const a = [..."clippingAncestors" === r ? function(e, t) {
              const r = t.get(e);
              if (r) return r;
              let n = _y(e, [], !1).filter((e => wy(e) && "body" !== vy(e))),
                o = null;
              const a = "fixed" === Ly(e).position;
              let l = a ? Ey(e) : e;
              for (; wy(l) && !Cy(l);) {
                const t = Ly(l),
                  r = Ry(l);
                r || "fixed" !== t.position || (o = null), (a ? !r && !o : !r && "static" === t.position && o && ["absolute", "fixed"].includes(o.position) || by(l) && !r && By(e, l)) ? n = n.filter((e => e !== l)) : o = t, l = Ey(l)
              }
              return t.set(e, n), n
            }(t, this._c) : [].concat(r), n],
            l = a[0],
            i = a.reduce(((e, r) => {
              const n = Hy(t, r, o);
              return e.top = Bx(n.top, e.top), e.right = Hx(n.right, e.right), e.bottom = Hx(n.bottom, e.bottom), e.left = Bx(n.left, e.left), e
            }), Hy(t, l, o));
          return {
            width: i.right - i.left,
            height: i.bottom - i.top,
            x: i.left,
            y: i.top
          }
        },
        getOffsetParent: Fy,
        getElementRects: async function(e) {
          let {
            reference: t,
            floating: r,
            strategy: n
          } = e;
          const o = this.getOffsetParent || Fy,
            a = this.getDimensions;
          return {
            reference: zy(t, await o(r), n),
            floating: {
              x: 0,
              y: 0,
              ...await a(r)
            }
          }
        },
        getClientRects: function(e) {
          return Array.from(e.getClientRects())
        },
        getDimensions: function(e) {
          return Dy(e)
        },
        getScale: Ty,
        isElement: wy,
        isRTL: function(e) {
          return "rtl" === Ly(e).direction
        }
      };
      const Xy = (e, t, r) => {
          const n = new Map,
            o = {
              platform: Gy,
              ...r
            },
            a = {
              ...o.platform,
              _c: n
            };
          return (async (e, t, r) => {
            const {
              placement: n = "bottom",
              strategy: o = "absolute",
              middleware: a = [],
              platform: l
            } = r, i = a.filter(Boolean), s = await (null == l.isRTL ? void 0 : l.isRTL(t));
            let c = await l.getElementRects({
                reference: e,
                floating: t,
                strategy: o
              }),
              {
                x: d,
                y: u
              } = ny(c, n, s),
              f = n,
              h = {},
              v = 0;
            for (let r = 0; r < i.length; r++) {
              const {
                name: a,
                fn: p
              } = i[r], {
                x: g,
                y: m,
                data: w,
                reset: x
              } = await p({
                x: d,
                y: u,
                initialPlacement: n,
                placement: f,
                strategy: o,
                middlewareData: h,
                rects: c,
                platform: l,
                elements: {
                  reference: e,
                  floating: t
                }
              });
              d = null != g ? g : d, u = null != m ? m : u, h = {
                ...h,
                [a]: {
                  ...h[a],
                  ...w
                }
              }, x && v <= 50 && (v++, "object" == typeof x && (x.placement && (f = x.placement), x.rects && (c = !0 === x.rects ? await l.getElementRects({
                reference: e,
                floating: t,
                strategy: o
              }) : x.rects), ({
                x: d,
                y: u
              } = ny(c, f, s))), r = -1)
            }
            return {
              x: d,
              y: u,
              placement: f,
              strategy: o,
              middlewareData: h
            }
          })(e, t, {
            ...o,
            platform: a
          })
        },
        Uy = e => ({
          name: "arrow",
          options: e,
          fn(t) {
            const {
              element: r,
              padding: n
            } = "function" == typeof e ? e(t) : e;
            return r && (o = r, {}.hasOwnProperty.call(o, "current")) ? null != r.current ? ay({
              element: r.current,
              padding: n
            }).fn(t) : {} : r ? ay({
              element: r,
              padding: n
            }).fn(t) : {};
            var o
          }
        });
      var qy = "undefined" != typeof document ? m.useLayoutEffect : m.useEffect;

      function Wy(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        let r, n, o;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (r = e.length, r != t.length) return !1;
            for (n = r; 0 != n--;)
              if (!Wy(e[n], t[n])) return !1;
            return !0
          }
          if (o = Object.keys(e), r = o.length, r !== Object.keys(t).length) return !1;
          for (n = r; 0 != n--;)
            if (!{}.hasOwnProperty.call(t, o[n])) return !1;
          for (n = r; 0 != n--;) {
            const r = o[n];
            if (!("_owner" === r && e.$$typeof || Wy(e[r], t[r]))) return !1
          }
          return !0
        }
        return e != e && t != t
      }

      function Ky(e) {
        return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
      }

      function $y(e, t) {
        const r = Ky(e);
        return Math.round(t * r) / r
      }

      function Yy(e) {
        const t = m.useRef(e);
        return qy((() => {
          t.current = e
        })), t
      }
      var Zy = m.forwardRef(((e, t) => {
        const {
          children: r,
          width: n = 10,
          height: a = 5,
          ...l
        } = e;
        return (0, o.jsx)(Me.svg, {
          ...l,
          ref: t,
          width: n,
          height: a,
          viewBox: "0 0 30 10",
          preserveAspectRatio: "none",
          children: e.asChild ? r : (0, o.jsx)("polygon", {
            points: "0,0 30,0 15,10"
          })
        })
      }));
      Zy.displayName = "Arrow";
      var Qy = Zy,
        Jy = "Popper",
        [eb, tb] = tw(Jy),
        [rb, nb] = eb(Jy),
        ob = e => {
          const {
            __scopePopper: t,
            children: r
          } = e, [n, a] = m.useState(null);
          return (0, o.jsx)(rb, {
            scope: t,
            anchor: n,
            onAnchorChange: a,
            children: r
          })
        };
      ob.displayName = Jy;
      var ab = "PopperAnchor",
        lb = m.forwardRef(((e, t) => {
          const {
            __scopePopper: r,
            virtualRef: n,
            ...a
          } = e, l = nb(ab, r), i = m.useRef(null), s = we(t, i);
          return m.useEffect((() => {
            l.onAnchorChange(n?.current || i.current)
          })), n ? null : (0, o.jsx)(Me.div, {
            ...a,
            ref: s
          })
        }));
      lb.displayName = ab;
      var ib = "PopperContent",
        [sb, cb] = eb(ib),
        db = m.forwardRef(((e, t) => {
          const {
            __scopePopper: r,
            side: n = "bottom",
            sideOffset: a = 0,
            align: l = "center",
            alignOffset: i = 0,
            arrowPadding: s = 0,
            avoidCollisions: c = !0,
            collisionBoundary: d = [],
            collisionPadding: u = 0,
            sticky: f = "partial",
            hideWhenDetached: h = !1,
            updatePositionStrategy: v = "optimized",
            onPlaced: p,
            ...g
          } = e, w = nb(ib, r), [x, y] = m.useState(null), b = we(t, (e => y(e))), [R, M] = m.useState(null), C = cw(R), L = C?.width ?? 0, S = C?.height ?? 0, E = n + ("center" !== l ? "-" + l : ""), P = "number" == typeof u ? u : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...u
          }, _ = Array.isArray(d) ? d : [d], D = _.length > 0, A = {
            padding: P,
            boundary: _.filter(vb),
            altBoundary: D
          }, {
            refs: T,
            floatingStyles: I,
            placement: N,
            isPositioned: O,
            middlewareData: k
          } = function(e) {
            void 0 === e && (e = {});
            const {
              placement: t = "bottom",
              strategy: r = "absolute",
              middleware: n = [],
              platform: o,
              elements: {
                reference: a,
                floating: l
              } = {},
              transform: i = !0,
              whileElementsMounted: s,
              open: c
            } = e, [d, u] = m.useState({
              x: 0,
              y: 0,
              strategy: r,
              placement: t,
              middlewareData: {},
              isPositioned: !1
            }), [f, h] = m.useState(n);
            Wy(f, n) || h(n);
            const [v, p] = m.useState(null), [g, w] = m.useState(null), x = m.useCallback((e => {
              e != M.current && (M.current = e, p(e))
            }), [p]), y = m.useCallback((e => {
              e !== C.current && (C.current = e, w(e))
            }), [w]), b = a || v, R = l || g, M = m.useRef(null), C = m.useRef(null), L = m.useRef(d), S = Yy(s), E = Yy(o), P = m.useCallback((() => {
              if (!M.current || !C.current) return;
              const e = {
                placement: t,
                strategy: r,
                middleware: f
              };
              E.current && (e.platform = E.current), Xy(M.current, C.current, e).then((e => {
                const t = {
                  ...e,
                  isPositioned: !0
                };
                _.current && !Wy(L.current, t) && (L.current = t, j.flushSync((() => {
                  u(t)
                })))
              }))
            }), [f, t, r, E]);
            qy((() => {
              !1 === c && L.current.isPositioned && (L.current.isPositioned = !1, u((e => ({
                ...e,
                isPositioned: !1
              }))))
            }), [c]);
            const _ = m.useRef(!1);
            qy((() => (_.current = !0, () => {
              _.current = !1
            })), []), qy((() => {
              if (b && (M.current = b), R && (C.current = R), b && R) {
                if (S.current) return S.current(b, R, P);
                P()
              }
            }), [b, R, P, S]);
            const D = m.useMemo((() => ({
                reference: M,
                floating: C,
                setReference: x,
                setFloating: y
              })), [x, y]),
              A = m.useMemo((() => ({
                reference: b,
                floating: R
              })), [b, R]),
              T = m.useMemo((() => {
                const e = {
                  position: r,
                  left: 0,
                  top: 0
                };
                if (!A.floating) return e;
                const t = $y(A.floating, d.x),
                  n = $y(A.floating, d.y);
                return i ? {
                  ...e,
                  transform: "translate(" + t + "px, " + n + "px)",
                  ...Ky(A.floating) >= 1.5 && {
                    willChange: "transform"
                  }
                } : {
                  position: r,
                  left: t,
                  top: n
                }
              }), [r, i, A.floating, d.x, d.y]);
            return m.useMemo((() => ({
              ...d,
              update: P,
              refs: D,
              elements: A,
              floatingStyles: T
            })), [d, P, D, A, T])
          }({
            strategy: "fixed",
            placement: E,
            whileElementsMounted: (...e) => function(e, t, r, n) {
              void 0 === n && (n = {});
              const {
                ancestorScroll: o = !0,
                ancestorResize: a = !0,
                elementResize: l = "function" == typeof ResizeObserver,
                layoutShift: i = "function" == typeof IntersectionObserver,
                animationFrame: s = !1
              } = n, c = Ay(e), d = o || a ? [...c ? _y(c) : [], ..._y(t)] : [];
              d.forEach((e => {
                o && e.addEventListener("scroll", r, {
                  passive: !0
                }), a && e.addEventListener("resize", r)
              }));
              const u = c && i ? function(e, t) {
                let r, n = null;
                const o = gy(e);

                function a() {
                  clearTimeout(r), n && n.disconnect(), n = null
                }
                return function l(i, s) {
                  void 0 === i && (i = !1), void 0 === s && (s = 1), a();
                  const {
                    left: c,
                    top: d,
                    width: u,
                    height: f
                  } = e.getBoundingClientRect();
                  if (i || t(), !u || !f) return;
                  const h = {
                    rootMargin: -Vx(d) + "px " + -Vx(o.clientWidth - (c + u)) + "px " + -Vx(o.clientHeight - (d + f)) + "px " + -Vx(c) + "px",
                    threshold: Bx(0, Hx(1, s)) || 1
                  };
                  let v = !0;

                  function p(e) {
                    const t = e[0].intersectionRatio;
                    if (t !== s) {
                      if (!v) return l();
                      t ? l(!1, t) : r = setTimeout((() => {
                        l(!1, 1e-7)
                      }), 100)
                    }
                    v = !1
                  }
                  try {
                    n = new IntersectionObserver(p, {
                      ...h,
                      root: o.ownerDocument
                    })
                  } catch (e) {
                    n = new IntersectionObserver(p, h)
                  }
                  n.observe(e)
                }(!0), a
              }(c, r) : null;
              let f, h = -1,
                v = null;
              l && (v = new ResizeObserver((e => {
                let [n] = e;
                n && n.target === c && v && (v.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame((() => {
                  v && v.observe(t)
                }))), r()
              })), c && !s && v.observe(c), v.observe(t));
              let p = s ? Oy(e) : null;
              return s && function t() {
                const n = Oy(e);
                !p || n.x === p.x && n.y === p.y && n.width === p.width && n.height === p.height || r(), p = n, f = requestAnimationFrame(t)
              }(), r(), () => {
                d.forEach((e => {
                  o && e.removeEventListener("scroll", r), a && e.removeEventListener("resize", r)
                })), u && u(), v && v.disconnect(), v = null, s && cancelAnimationFrame(f)
              }
            }(...e, {
              animationFrame: "always" === v
            }),
            elements: {
              reference: w.anchor
            },
            middleware: [dy({
              mainAxis: a + S,
              alignmentAxis: i
            }), c && uy({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === f ? fy() : void 0,
              ...A
            }), c && ly({
              ...A
            }), hy({
              ...A,
              apply: ({
                elements: e,
                rects: t,
                availableWidth: r,
                availableHeight: n
              }) => {
                const {
                  width: o,
                  height: a
                } = t.reference, l = e.floating.style;
                l.setProperty("--radix-popper-available-width", `${r}px`), l.setProperty("--radix-popper-available-height", `${n}px`), l.setProperty("--radix-popper-anchor-width", `${o}px`), l.setProperty("--radix-popper-anchor-height", `${a}px`)
              }
            }), R && Uy({
              element: R,
              padding: s
            }), pb({
              arrowWidth: L,
              arrowHeight: S
            }), h && cy({
              strategy: "referenceHidden",
              ...A
            })]
          }), [H, B] = gb(N), z = nw(p);
          sw((() => {
            O && z?.()
          }), [O, z]);
          const V = k.arrow?.x,
            F = k.arrow?.y,
            G = 0 !== k.arrow?.centerOffset,
            [X, U] = m.useState();
          return sw((() => {
            x && U(window.getComputedStyle(x).zIndex)
          }), [x]), (0, o.jsx)("div", {
            ref: T.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...I,
              transform: O ? I.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: X,
              "--radix-popper-transform-origin": [k.transformOrigin?.x, k.transformOrigin?.y].join(" "),
              ...k.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, o.jsx)(sb, {
              scope: r,
              placedSide: H,
              onArrowChange: M,
              arrowX: V,
              arrowY: F,
              shouldHideArrow: G,
              children: (0, o.jsx)(Me.div, {
                "data-side": H,
                "data-align": B,
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
      db.displayName = ib;
      var ub = "PopperArrow",
        fb = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        hb = m.forwardRef((function(e, t) {
          const {
            __scopePopper: r,
            ...n
          } = e, a = cb(ub, r), l = fb[a.placedSide];
          return (0, o.jsx)("span", {
            ref: a.onArrowChange,
            style: {
              position: "absolute",
              left: a.arrowX,
              top: a.arrowY,
              [l]: 0,
              transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
              } [a.placedSide],
              transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
              } [a.placedSide],
              visibility: a.shouldHideArrow ? "hidden" : void 0
            },
            children: (0, o.jsx)(Qy, {
              ...n,
              ref: t,
              style: {
                ...n.style,
                display: "block"
              }
            })
          })
        }));

      function vb(e) {
        return null !== e
      }
      hb.displayName = ub;
      var pb = e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          const {
            placement: r,
            rects: n,
            middlewareData: o
          } = t, a = 0 !== o.arrow?.centerOffset, l = a ? 0 : e.arrowWidth, i = a ? 0 : e.arrowHeight, [s, c] = gb(r), d = {
            start: "0%",
            center: "50%",
            end: "100%"
          } [c], u = (o.arrow?.x ?? 0) + l / 2, f = (o.arrow?.y ?? 0) + i / 2;
          let h = "",
            v = "";
          return "bottom" === s ? (h = a ? d : `${u}px`, v = -i + "px") : "top" === s ? (h = a ? d : `${u}px`, v = `${n.floating.height+i}px`) : "right" === s ? (h = -i + "px", v = a ? d : `${f}px`) : "left" === s && (h = `${n.floating.width+i}px`, v = a ? d : `${f}px`), {
            data: {
              x: h,
              y: v
            }
          }
        }
      });

      function gb(e) {
        const [t, r = "center"] = e.split("-");
        return [t, r]
      }
      var mb = ob,
        wb = lb,
        xb = db,
        yb = hb,
        bb = m.forwardRef(((e, t) => {
          const {
            container: r,
            ...n
          } = e, [a, l] = m.useState(!1);
          sw((() => l(!0)), []);
          const i = r || a && globalThis?.document?.body;
          return i ? j.createPortal((0, o.jsx)(Me.div, {
            ...n,
            ref: t
          }), i) : null
        }));
      bb.displayName = "Portal";
      var jb = e => {
        const {
          present: t,
          children: r
        } = e, n = function(e) {
          const [t, r] = m.useState(), n = m.useRef({}), o = m.useRef(e), a = m.useRef("none"), l = e ? "mounted" : "unmounted", [i, s] = function(e, t) {
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
            const e = Rb(n.current);
            a.current = "mounted" === i ? e : "none"
          }), [i]), sw((() => {
            const t = n.current,
              r = o.current;
            if (r !== e) {
              const n = a.current,
                l = Rb(t);
              s(e ? "MOUNT" : "none" === l || "none" === t?.display ? "UNMOUNT" : r && n !== l ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
            }
          }), [e, s]), sw((() => {
            if (t) {
              const e = e => {
                  const r = Rb(n.current).includes(e.animationName);
                  e.target === t && r && j.flushSync((() => s("ANIMATION_END")))
                },
                r = e => {
                  e.target === t && (a.current = Rb(n.current))
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
        }(t), o = "function" == typeof r ? r({
          present: n.isPresent
        }) : m.Children.only(r), a = we(n.ref, function(e) {
          let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            r = t && "isReactWarning" in t && t.isReactWarning;
          return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref)
        }(o));
        return "function" == typeof r || n.isPresent ? m.cloneElement(o, {
          ref: a
        }) : null
      };

      function Rb(e) {
        return e?.animationName || "none"
      }
      jb.displayName = "Presence";
      var [Mb, Cb] = tw("Tooltip", [tb]), Lb = tb(), Sb = "TooltipProvider", Eb = 700, Pb = "tooltip.open", [_b, Db] = Mb(Sb), Ab = e => {
        const {
          __scopeTooltip: t,
          delayDuration: r = Eb,
          skipDelayDuration: n = 300,
          disableHoverableContent: a = !1,
          children: l
        } = e, [i, s] = m.useState(!0), c = m.useRef(!1), d = m.useRef(0);
        return m.useEffect((() => {
          const e = d.current;
          return () => window.clearTimeout(e)
        }), []), (0, o.jsx)(_b, {
          scope: t,
          isOpenDelayed: i,
          delayDuration: r,
          onOpen: m.useCallback((() => {
            window.clearTimeout(d.current), s(!1)
          }), []),
          onClose: m.useCallback((() => {
            window.clearTimeout(d.current), d.current = window.setTimeout((() => s(!0)), n)
          }), [n]),
          isPointerInTransitRef: c,
          onPointerInTransitChange: m.useCallback((e => {
            c.current = e
          }), []),
          disableHoverableContent: a,
          children: l
        })
      };
      Ab.displayName = Sb;
      var Tb = "Tooltip",
        [Ib, Nb] = Mb(Tb),
        Ob = e => {
          const {
            __scopeTooltip: t,
            children: r,
            open: n,
            defaultOpen: a = !1,
            onOpenChange: l,
            disableHoverableContent: i,
            delayDuration: s
          } = e, c = Db(Tb, e.__scopeTooltip), d = Lb(t), [u, f] = m.useState(null), h = Ox(), v = m.useRef(0), p = i ?? c.disableHoverableContent, g = s ?? c.delayDuration, w = m.useRef(!1), [x = !1, y] = ow({
            prop: n,
            defaultProp: a,
            onChange: e => {
              e ? (c.onOpen(), document.dispatchEvent(new CustomEvent(Pb))) : c.onClose(), l?.(e)
            }
          }), b = m.useMemo((() => x ? w.current ? "delayed-open" : "instant-open" : "closed"), [x]), j = m.useCallback((() => {
            window.clearTimeout(v.current), w.current = !1, y(!0)
          }), [y]), R = m.useCallback((() => {
            window.clearTimeout(v.current), y(!1)
          }), [y]), M = m.useCallback((() => {
            window.clearTimeout(v.current), v.current = window.setTimeout((() => {
              w.current = !0, y(!0)
            }), g)
          }), [g, y]);
          return m.useEffect((() => () => window.clearTimeout(v.current)), []), (0, o.jsx)(mb, {
            ...d,
            children: (0, o.jsx)(Ib, {
              scope: t,
              contentId: h,
              open: x,
              stateAttribute: b,
              trigger: u,
              onTriggerChange: f,
              onTriggerEnter: m.useCallback((() => {
                c.isOpenDelayed ? M() : j()
              }), [c.isOpenDelayed, M, j]),
              onTriggerLeave: m.useCallback((() => {
                p ? R() : window.clearTimeout(v.current)
              }), [R, p]),
              onOpen: j,
              onClose: R,
              disableHoverableContent: p,
              children: r
            })
          })
        };
      Ob.displayName = Tb;
      var kb = "TooltipTrigger",
        Hb = m.forwardRef(((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, a = Nb(kb, r), l = Db(kb, r), i = Lb(r), s = we(t, m.useRef(null), a.onTriggerChange), c = m.useRef(!1), d = m.useRef(!1), u = m.useCallback((() => c.current = !1), []);
          return m.useEffect((() => () => document.removeEventListener("pointerup", u)), [u]), (0, o.jsx)(wb, {
            asChild: !0,
            ...i,
            children: (0, o.jsx)(Me.button, {
              "aria-describedby": a.open ? a.contentId : void 0,
              "data-state": a.stateAttribute,
              ...n,
              ref: s,
              onPointerMove: ew(e.onPointerMove, (e => {
                "touch" !== e.pointerType && (d.current || l.isPointerInTransitRef.current || (a.onTriggerEnter(), d.current = !0))
              })),
              onPointerLeave: ew(e.onPointerLeave, (() => {
                a.onTriggerLeave(), d.current = !1
              })),
              onPointerDown: ew(e.onPointerDown, (() => {
                c.current = !0, document.addEventListener("pointerup", u, {
                  once: !0
                })
              })),
              onFocus: ew(e.onFocus, (() => {
                c.current || a.onOpen()
              })),
              onBlur: ew(e.onBlur, a.onClose),
              onClick: ew(e.onClick, a.onClose)
            })
          })
        }));
      Hb.displayName = kb;
      var Bb = "TooltipPortal",
        [zb, Vb] = Mb(Bb, {
          forceMount: void 0
        }),
        Fb = e => {
          const {
            __scopeTooltip: t,
            forceMount: r,
            children: n,
            container: a
          } = e, l = Nb(Bb, t);
          return (0, o.jsx)(zb, {
            scope: t,
            forceMount: r,
            children: (0, o.jsx)(jb, {
              present: r || l.open,
              children: (0, o.jsx)(bb, {
                asChild: !0,
                container: a,
                children: n
              })
            })
          })
        };
      Fb.displayName = Bb;
      var Gb = "TooltipContent",
        Xb = m.forwardRef(((e, t) => {
          const r = Vb(Gb, e.__scopeTooltip),
            {
              forceMount: n = r.forceMount,
              side: a = "top",
              ...l
            } = e,
            i = Nb(Gb, e.__scopeTooltip);
          return (0, o.jsx)(jb, {
            present: n || i.open,
            children: i.disableHoverableContent ? (0, o.jsx)(Kb, {
              side: a,
              ...l,
              ref: t
            }) : (0, o.jsx)(Ub, {
              side: a,
              ...l,
              ref: t
            })
          })
        })),
        Ub = m.forwardRef(((e, t) => {
          const r = Nb(Gb, e.__scopeTooltip),
            n = Db(Gb, e.__scopeTooltip),
            a = m.useRef(null),
            l = we(t, a),
            [i, s] = m.useState(null),
            {
              trigger: c,
              onClose: d
            } = r,
            u = a.current,
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
              s(a), f(!0)
            }), [f]);
          return m.useEffect((() => () => h()), [h]), m.useEffect((() => {
            if (c && u) {
              const e = e => v(e, u),
                t = e => v(e, c);
              return c.addEventListener("pointerleave", e), u.addEventListener("pointerleave", t), () => {
                c.removeEventListener("pointerleave", e), u.removeEventListener("pointerleave", t)
              }
            }
          }), [c, u, v, h]), m.useEffect((() => {
            if (i) {
              const e = e => {
                const t = e.target,
                  r = {
                    x: e.clientX,
                    y: e.clientY
                  },
                  n = c?.contains(t) || u?.contains(t),
                  o = ! function(e, t) {
                    const {
                      x: r,
                      y: n
                    } = e;
                    let o = !1;
                    for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
                      const l = t[e].x,
                        i = t[e].y,
                        s = t[a].x,
                        c = t[a].y;
                      i > n != c > n && r < (s - l) * (n - i) / (c - i) + l && (o = !o)
                    }
                    return o
                  }(r, i);
                n ? h() : o && (h(), d())
              };
              return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
            }
          }), [c, u, i, d, h]), (0, o.jsx)(Kb, {
            ...e,
            ref: l
          })
        })),
        [qb, Wb] = Mb(Tb, {
          isInside: !1
        }),
        Kb = m.forwardRef(((e, t) => {
          const {
            __scopeTooltip: r,
            children: n,
            "aria-label": a,
            onEscapeKeyDown: l,
            onPointerDownOutside: i,
            ...s
          } = e, c = Nb(Gb, r), d = Lb(r), {
            onClose: u
          } = c;
          return m.useEffect((() => (document.addEventListener(Pb, u), () => document.removeEventListener(Pb, u))), [u]), m.useEffect((() => {
            if (c.trigger) {
              const e = e => {
                const t = e.target;
                t?.contains(c.trigger) && u()
              };
              return window.addEventListener("scroll", e, {
                capture: !0
              }), () => window.removeEventListener("scroll", e, {
                capture: !0
              })
            }
          }), [c.trigger, u]), (0, o.jsx)(Dx, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: l,
            onPointerDownOutside: i,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: u,
            children: (0, o.jsxs)(xb, {
              "data-state": c.stateAttribute,
              ...d,
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
              children: [(0, o.jsx)(be, {
                children: n
              }), (0, o.jsx)(qb, {
                scope: r,
                isInside: !0,
                children: (0, o.jsx)(Le, {
                  id: c.contentId,
                  role: "tooltip",
                  children: a || n
                })
              })]
            })
          })
        }));
      Xb.displayName = Gb;
      var $b = "TooltipArrow",
        Yb = m.forwardRef(((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, a = Lb(r);
          return Wb($b, r).isInside ? null : (0, o.jsx)(yb, {
            ...a,
            ...n,
            ref: t
          })
        }));
      Yb.displayName = $b;
      var Zb = Ab,
        Qb = Ob,
        Jb = Hb,
        ej = Fb,
        tj = Xb,
        rj = Yb;
      const nj = ({
        content: e,
        children: t,
        side: r = "top",
        sideOffset: n = 8,
        align: a = "center",
        alignOffset: l = 0,
        avoidCollisions: i = !0,
        collisionBoundary: s,
        collisionPadding: c,
        sticky: d = "partial",
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
        const [R = !1, M] = Hc({
          defaultProp: v,
          prop: p,
          onChange: g
        }), C = Tc(R), L = Zh({
          opacity: R ? 1 : 0,
          immediate: R && !C
        }), S = "left" === r || "right" === r ? "center" : a, E = x ? {
          container: b
        } : {}, P = x ? ej : m.Fragment, _ = y ? {
          className: "foundry_h3lgaa2"
        } : {}, D = y ? rj : m.Fragment;
        return (0, o.jsx)(Zb, {
          delayDuration: w,
          children: (0, o.jsxs)(Qb, {
            open: R,
            onOpenChange: M,
            children: [(0, o.jsx)(Jb, {
              asChild: !0,
              className: "foundry_h3lgaa3",
              onClick: e => e.preventDefault?.(),
              children: t
            }), (0, o.jsx)(P, {
              ...E,
              children: (0, o.jsx)(tj, {
                asChild: !0,
                side: r,
                align: S,
                sticky: d,
                forceMount: !0,
                "aria-label": h,
                "data-testid": j,
                className: "foundry_h3lgaa0",
                sideOffset: n,
                alignOffset: l,
                onEscapeKeyDown: u,
                avoidCollisions: i,
                collisionPadding: c,
                collisionBoundary: s,
                onPointerDownOutside: f,
                children: (0, o.jsxs)(wv.div, {
                  style: L,
                  children: [(0, o.jsx)(K, {
                    className: "foundry_h3lgaa1",
                    children: e
                  }), (0, o.jsx)(D, {
                    ..._
                  })]
                })
              })
            })]
          })
        })
      };
      var oj = "foundry_bwy1ds1",
        aj = "foundry_bwy1dsg",
        lj = "foundry_bwy1dsf";
      const ij = e => {
          e.preventDefault?.()
        },
        sj = (0, m.forwardRef)((({
          onClose: e,
          onDownload: t,
          zoomLevel: r,
          zoomIn: n,
          zoomOut: a,
          zoomTo: l,
          minZoomLevel: s,
          maxZoomLevel: c,
          canZoomIn: d,
          canZoomOut: u,
          resetZoom: f,
          caption: h,
          showDownloadButton: v,
          defaultZoomLevel: p
        }, g) => {
          const m = Xm(),
            w = Ac("screen and (max-width: 1024px)"),
            x = r !== p,
            y = w ? "SM" : "LG",
            b = Zh({
              opacity: x ? 1 : 0,
              immediate: Nc()
            });
          wx(["+", "=", "add", "plus"], (() => n?.()), {
            preventDefault: !0
          }), wx(["minus", "subtract"], (() => a?.()), {
            preventDefault: !0
          }), wx("r", (() => f?.()), {
            preventDefault: !0
          });
          const j = zc() && w;
          return (0, o.jsx)(px, {
            children: (0, o.jsxs)("div", {
              className: "foundry_bwy1ds0",
              ref: g,
              children: [(0, o.jsx)(nj, {
                side: "right",
                portal: !1,
                delayDuration: 0,
                onPointerDownOutside: ij,
                content: (0, o.jsxs)("div", {
                  className: lj,
                  children: [m.formatMessage(Fw), (0, o.jsx)(te, {
                    className: aj,
                    children: m.formatMessage(Gw, {
                      shortcut: (0, o.jsx)(Sx, {
                        shortcut: "Esc",
                        isInline: !0
                      })
                    })
                  })]
                }),
                children: (0, o.jsx)(Lx, {
                  size: y,
                  appearance: "tertiary",
                  icon: "ArrowLeft",
                  label: m.formatMessage(Fw),
                  className: i(oj, "foundry_bwy1ds2"),
                  onPress: e
                })
              }), (0, o.jsxs)("div", {
                className: "foundry_bwy1ds3",
                children: [!j && (0, o.jsxs)(o.Fragment, {
                  children: [(0, o.jsxs)("div", {
                    className: "foundry_bwy1ds4",
                    children: [(0, o.jsx)(nj, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: ij,
                      content: (0, o.jsxs)("div", {
                        className: lj,
                        children: [m.formatMessage(Xw), (0, o.jsx)(te, {
                          className: aj,
                          children: m.formatMessage(Uw, {
                            shortcut: (0, o.jsx)(Sx, {
                              shortcut: "+",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, o.jsx)(Lx, {
                        size: y,
                        appearance: "tertiary",
                        icon: "Plus",
                        label: m.formatMessage(Xw),
                        className: i(oj, "foundry_bwy1ds5"),
                        onPress: () => n(),
                        isDisabled: !d
                      })
                    }), (0, o.jsxs)(Hw, {
                      className: "foundry_bwy1dsa",
                      value: [r],
                      max: c,
                      min: s,
                      step: 1,
                      orientation: "vertical",
                      onValueChange: e => l?.(e[0]),
                      children: [(0, o.jsx)(Bw, {
                        className: "foundry_bwy1dsb",
                        children: (0, o.jsx)(zw, {
                          className: "foundry_bwy1dsc"
                        })
                      }), (0, o.jsx)(nj, {
                        side: "left",
                        portal: !1,
                        delayDuration: 0,
                        onPointerDownOutside: ij,
                        content: m.formatMessage(Zw, {
                          zoom: r.toFixed(0)
                        }),
                        children: (0, o.jsx)(Vw, {
                          className: "foundry_bwy1dsd",
                          "aria-label": m.formatMessage(Yw),
                          children: (0, o.jsx)("span", {
                            className: "foundry_bwy1dse"
                          })
                        })
                      })]
                    }), (0, o.jsx)(nj, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: ij,
                      content: (0, o.jsxs)("div", {
                        className: lj,
                        children: [m.formatMessage(qw), (0, o.jsx)(te, {
                          className: aj,
                          children: m.formatMessage(Ww, {
                            shortcut: (0, o.jsx)(Sx, {
                              shortcut: "-",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, o.jsx)(Lx, {
                        size: y,
                        appearance: "tertiary",
                        icon: "Minus",
                        label: m.formatMessage(qw),
                        className: i(oj, "foundry_bwy1ds6"),
                        onPress: () => a(),
                        isDisabled: !u
                      })
                    })]
                  }), (0, o.jsx)(wv.div, {
                    style: b,
                    children: (0, o.jsx)(nj, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: ij,
                      content: (0, o.jsxs)("div", {
                        className: lj,
                        children: [m.formatMessage(Kw), (0, o.jsx)(te, {
                          className: aj,
                          children: m.formatMessage($w, {
                            shortcut: (0, o.jsx)(Sx, {
                              shortcut: "R",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, o.jsx)(Lx, {
                        size: y,
                        appearance: "tertiary",
                        icon: "Revert",
                        label: m.formatMessage(Kw),
                        className: i(oj, "foundry_bwy1ds7"),
                        onPress: f,
                        isDisabled: !x,
                        "aria-hidden": !x
                      })
                    })
                  })]
                }), v && j && (0, o.jsx)(nj, {
                  side: "left",
                  portal: !1,
                  delayDuration: 0,
                  onPointerDownOutside: ij,
                  content: m.formatMessage(Jw),
                  children: (0, o.jsx)(Lx, {
                    size: y,
                    appearance: "tertiary",
                    icon: "Download",
                    label: m.formatMessage(Qw),
                    className: oj,
                    onPress: e
                  })
                })]
              }), (0, o.jsxs)("div", {
                className: "foundry_bwy1ds8",
                children: [h && (0, o.jsxs)(o.Fragment, {
                  children: [(0, o.jsx)("div", {
                    className: "foundry_bwy1dsh"
                  }), (0, o.jsx)(V, {
                    asChild: "string" != typeof h,
                    children: h
                  })]
                }), v && !j && (0, o.jsx)("div", {
                  className: "foundry_bwy1ds9",
                  children: (0, o.jsx)(nj, {
                    side: "left",
                    portal: !1,
                    delayDuration: 0,
                    onPointerDownOutside: ij,
                    content: m.formatMessage(Jw),
                    children: (0, o.jsx)(Lx, {
                      size: y,
                      appearance: "tertiary",
                      icon: "Download",
                      label: m.formatMessage(Qw),
                      className: oj,
                      onPress: t
                    })
                  })
                })]
              })]
            })
          })
        })),
        cj = {
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
        dj = (e, t) => {
          const r = "more" === t ? Ld.lightHc : Ld.light,
            n = "more" === t ? Ld.darkHc : Ld.dark;
          return "dark" === e ? n : r
        };
      var uj = "foundry_1a74xwb4",
        fj = "focusScope.autoFocusOnMount",
        hj = "focusScope.autoFocusOnUnmount",
        vj = {
          bubbles: !1,
          cancelable: !0
        },
        pj = m.forwardRef(((e, t) => {
          const {
            loop: r = !1,
            trapped: n = !1,
            onMountAutoFocus: a,
            onUnmountAutoFocus: l,
            ...i
          } = e, [s, c] = m.useState(null), d = nw(a), u = nw(l), f = m.useRef(null), h = we(t, (e => c(e))), v = m.useRef({
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
                  s.contains(t) ? f.current = t : xj(f.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (v.paused || !s) return;
                  const t = e.relatedTarget;
                  null !== t && (s.contains(t) || xj(f.current, {
                    select: !0
                  }))
                },
                r = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && xj(s)
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
              yj.add(v);
              const e = document.activeElement;
              if (!s.contains(e)) {
                const t = new CustomEvent(fj, vj);
                s.addEventListener(fj, d), s.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const r = document.activeElement;
                  for (const n of e)
                    if (xj(n, {
                        select: t
                      }), document.activeElement !== r) return
                }(gj(s).filter((e => "A" !== e.tagName)), {
                  select: !0
                }), document.activeElement === e && xj(s))
              }
              return () => {
                s.removeEventListener(fj, d), setTimeout((() => {
                  const t = new CustomEvent(hj, vj);
                  s.addEventListener(hj, u), s.dispatchEvent(t), t.defaultPrevented || xj(e ?? document.body, {
                    select: !0
                  }), s.removeEventListener(hj, u), yj.remove(v)
                }), 0)
              }
            }
          }), [s, d, u, v]);
          const p = m.useCallback((e => {
            if (!r && !n) return;
            if (v.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [n, a] = function(e) {
                  const t = gj(e);
                  return [mj(t, e), mj(t.reverse(), e)]
                }(t);
              n && a ? e.shiftKey || o !== a ? e.shiftKey && o === n && (e.preventDefault(), r && xj(a, {
                select: !0
              })) : (e.preventDefault(), r && xj(n, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }), [r, n, v.paused]);
          return (0, o.jsx)(Me.div, {
            tabIndex: -1,
            ...i,
            ref: h,
            onKeyDown: p
          })
        }));

      function gj(e) {
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

      function mj(e, t) {
        for (const r of e)
          if (!wj(r, {
              upTo: t
            })) return r
      }

      function wj(e, {
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

      function xj(e, {
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
      pj.displayName = "FocusScope";
      var yj = function() {
        let e = [];
        return {
          add(t) {
            const r = e[0];
            t !== r && r?.pause(), e = bj(e, t), e.unshift(t)
          },
          remove(t) {
            e = bj(e, t), e[0]?.resume()
          }
        }
      }();

      function bj(e, t) {
        const r = [...e],
          n = r.indexOf(t);
        return -1 !== n && r.splice(n, 1), r
      }
      var jj = 0;

      function Rj() {
        m.useEffect((() => {
          const e = document.querySelectorAll("[data-radix-focus-guard]");
          return document.body.insertAdjacentElement("afterbegin", e[0] ?? Mj()), document.body.insertAdjacentElement("beforeend", e[1] ?? Mj()), jj++, () => {
            1 === jj && document.querySelectorAll("[data-radix-focus-guard]").forEach((e => e.remove())), jj--
          }
        }), [])
      }

      function Mj() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e
      }
      var Cj = "right-scroll-bar-position",
        Lj = "width-before-scroll-bar",
        Sj = r(26208),
        Ej = (0, r(23496).f)(),
        Pj = function() {},
        _j = m.forwardRef((function(e, t) {
          var r = m.useRef(null),
            n = m.useState({
              onScrollCapture: Pj,
              onWheelCapture: Pj,
              onTouchMoveCapture: Pj
            }),
            o = n[0],
            a = n[1],
            l = e.forwardProps,
            i = e.children,
            s = e.className,
            c = e.removeScrollBar,
            d = e.enabled,
            u = e.shards,
            f = e.sideCar,
            h = e.noIsolation,
            v = e.inert,
            p = e.allowPinchZoom,
            g = e.as,
            w = void 0 === g ? "div" : g,
            x = e.gapMode,
            y = (0, kp.Tt)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            b = f,
            j = (0, Sj.S)([r, t]),
            R = (0, kp.Cl)((0, kp.Cl)({}, y), o);
          return m.createElement(m.Fragment, null, d && m.createElement(b, {
            sideCar: Ej,
            removeScrollBar: c,
            shards: u,
            noIsolation: h,
            inert: v,
            setCallbacks: a,
            allowPinchZoom: !!p,
            lockRef: r,
            gapMode: x
          }), l ? m.cloneElement(m.Children.only(i), (0, kp.Cl)((0, kp.Cl)({}, R), {
            ref: j
          })) : m.createElement(w, (0, kp.Cl)({}, R, {
            className: s,
            ref: j
          }), i))
        }));
      _j.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, _j.classNames = {
        fullWidth: Lj,
        zeroRight: Cj
      };
      var Dj = function(e) {
        var t = e.sideCar,
          r = (0, kp.Tt)(e, ["sideCar"]);
        if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
        var n = t.read();
        if (!n) throw new Error("Sidecar medium not found");
        return m.createElement(n, (0, kp.Cl)({}, r))
      };
      Dj.isSideCarExport = !0;
      var Aj = function() {
          var e = 0,
            t = null;
          return {
            add: function(n) {
              var o, a;
              0 == e && (t = function() {
                if (!document) return null;
                var e = document.createElement("style");
                e.type = "text/css";
                var t = r.nc;
                return t && e.setAttribute("nonce", t), e
              }()) && (a = n, (o = t).styleSheet ? o.styleSheet.cssText = a : o.appendChild(document.createTextNode(a)), function(e) {
                (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
              }(t)), e++
            },
            remove: function() {
              !--e && t && (t.parentNode && t.parentNode.removeChild(t), t = null)
            }
          }
        },
        Tj = function() {
          var e, t = (e = Aj(), function(t, r) {
            m.useEffect((function() {
              return e.add(t),
                function() {
                  e.remove()
                }
            }), [t && r])
          });
          return function(e) {
            var r = e.styles,
              n = e.dynamic;
            return t(r, n), null
          }
        },
        Ij = {
          left: 0,
          top: 0,
          right: 0,
          gap: 0
        },
        Nj = function(e) {
          return parseInt(e || "", 10) || 0
        },
        Oj = Tj(),
        kj = function(e, t, r, n) {
          var o = e.left,
            a = e.top,
            l = e.right,
            i = e.gap;
          return void 0 === r && (r = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(n, ";\n   padding-right: ").concat(i, "px ").concat(n, ";\n  }\n  body {\n    overflow: hidden ").concat(n, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(n, ";"), "margin" === r && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(a, "px;\n    padding-right: ").concat(l, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(i, "px ").concat(n, ";\n    "), "padding" === r && "padding-right: ".concat(i, "px ").concat(n, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(Cj, " {\n    right: ").concat(i, "px ").concat(n, ";\n  }\n  \n  .").concat(Lj, " {\n    margin-right: ").concat(i, "px ").concat(n, ";\n  }\n  \n  .").concat(Cj, " .").concat(Cj, " {\n    right: 0 ").concat(n, ";\n  }\n  \n  .").concat(Lj, " .").concat(Lj, " {\n    margin-right: 0 ").concat(n, ";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(i, "px;\n  }\n")
        },
        Hj = function(e) {
          var t = e.noRelative,
            r = e.noImportant,
            n = e.gapMode,
            o = void 0 === n ? "margin" : n,
            a = m.useMemo((function() {
              return function(e) {
                if (void 0 === e && (e = "margin"), "undefined" == typeof window) return Ij;
                var t = function(e) {
                    var t = window.getComputedStyle(document.body),
                      r = t["padding" === e ? "paddingLeft" : "marginLeft"],
                      n = t["padding" === e ? "paddingTop" : "marginTop"],
                      o = t["padding" === e ? "paddingRight" : "marginRight"];
                    return [Nj(r), Nj(n), Nj(o)]
                  }(e),
                  r = document.documentElement.clientWidth,
                  n = window.innerWidth;
                return {
                  left: t[0],
                  top: t[1],
                  right: t[2],
                  gap: Math.max(0, n - r + t[2] - t[0])
                }
              }(o)
            }), [o]);
          return m.createElement(Oj, {
            styles: kj(a, !t, o, r ? "" : "!important")
          })
        },
        Bj = !1;
      if ("undefined" != typeof window) try {
        var zj = Object.defineProperty({}, "passive", {
          get: function() {
            return Bj = !0, !0
          }
        });
        window.addEventListener("test", zj, zj), window.removeEventListener("test", zj, zj)
      } catch (e) {
        Bj = !1
      }
      var Vj = !!Bj && {
          passive: !1
        },
        Fj = function(e, t) {
          var r = window.getComputedStyle(e);
          return "hidden" !== r[t] && !(r.overflowY === r.overflowX && ! function(e) {
            return "TEXTAREA" === e.tagName
          }(e) && "visible" === r[t])
        },
        Gj = function(e, t) {
          var r = t.ownerDocument,
            n = t;
          do {
            if ("undefined" != typeof ShadowRoot && n instanceof ShadowRoot && (n = n.host), Xj(e, n)) {
              var o = Uj(e, n);
              if (o[1] > o[2]) return !0
            }
            n = n.parentNode
          } while (n && n !== r.body);
          return !1
        },
        Xj = function(e, t) {
          return "v" === e ? function(e) {
            return Fj(e, "overflowY")
          }(t) : function(e) {
            return Fj(e, "overflowX")
          }(t)
        },
        Uj = function(e, t) {
          return "v" === e ? function(e) {
            return [e.scrollTop, e.scrollHeight, e.clientHeight]
          }(t) : function(e) {
            return [e.scrollLeft, e.scrollWidth, e.clientWidth]
          }(t)
        },
        qj = function(e) {
          return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        },
        Wj = function(e) {
          return [e.deltaX, e.deltaY]
        },
        Kj = function(e) {
          return e && "current" in e ? e.current : e
        },
        $j = function(e) {
          return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n")
        },
        Yj = 0,
        Zj = [];

      function Qj(e) {
        for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
        return t
      }
      const Jj = (Ej.useMedium((function(e) {
        var t = m.useRef([]),
          r = m.useRef([0, 0]),
          n = m.useRef(),
          o = m.useState(Yj++)[0],
          a = m.useState(Tj)[0],
          l = m.useRef(e);
        m.useEffect((function() {
          l.current = e
        }), [e]), m.useEffect((function() {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(o));
            var t = (0, kp.fX)([e.lockRef.current], (e.shards || []).map(Kj), !0).filter(Boolean);
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
        var i = m.useCallback((function(e, t) {
            if ("touches" in e && 2 === e.touches.length) return !l.current.allowPinchZoom;
            var o, a = qj(e),
              i = r.current,
              s = "deltaX" in e ? e.deltaX : i[0] - a[0],
              c = "deltaY" in e ? e.deltaY : i[1] - a[1],
              d = e.target,
              u = Math.abs(s) > Math.abs(c) ? "h" : "v";
            if ("touches" in e && "h" === u && "range" === d.type) return !1;
            var f = Gj(u, d);
            if (!f) return !0;
            if (f ? o = u : (o = "v" === u ? "h" : "v", f = Gj(u, d)), !f) return !1;
            if (!n.current && "changedTouches" in e && (s || c) && (n.current = o), !o) return !0;
            var h = n.current || o;
            return function(e, t, r, n, o) {
              var a = function(e, t) {
                  return "h" === e && "rtl" === t ? -1 : 1
                }(e, window.getComputedStyle(t).direction),
                l = a * n,
                i = r.target,
                s = t.contains(i),
                c = !1,
                d = l > 0,
                u = 0,
                f = 0;
              do {
                var h = Uj(e, i),
                  v = h[0],
                  p = h[1] - h[2] - a * v;
                (v || p) && Xj(e, i) && (u += p, f += v), i = i instanceof ShadowRoot ? i.host : i.parentNode
              } while (!s && i !== document.body || s && (t.contains(i) || t === i));
              return (d && (o && Math.abs(u) < 1 || !o && l > u) || !d && (o && Math.abs(f) < 1 || !o && -l > f)) && (c = !0), c
            }(h, t, e, "h" === h ? s : c, !0)
          }), []),
          s = m.useCallback((function(e) {
            var r = e;
            if (Zj.length && Zj[Zj.length - 1] === a) {
              var n = "deltaY" in r ? Wj(r) : qj(r),
                o = t.current.filter((function(e) {
                  return e.name === r.type && (e.target === r.target || r.target === e.shadowParent) && (t = e.delta, o = n, t[0] === o[0] && t[1] === o[1]);
                  var t, o
                }))[0];
              if (o && o.should) r.cancelable && r.preventDefault();
              else if (!o) {
                var s = (l.current.shards || []).map(Kj).filter(Boolean).filter((function(e) {
                  return e.contains(r.target)
                }));
                (s.length > 0 ? i(r, s[0]) : !l.current.noIsolation) && r.cancelable && r.preventDefault()
              }
            }
          }), []),
          c = m.useCallback((function(e, r, n, o) {
            var a = {
              name: e,
              delta: r,
              target: n,
              should: o,
              shadowParent: Qj(n)
            };
            t.current.push(a), setTimeout((function() {
              t.current = t.current.filter((function(e) {
                return e !== a
              }))
            }), 1)
          }), []),
          d = m.useCallback((function(e) {
            r.current = qj(e), n.current = void 0
          }), []),
          u = m.useCallback((function(t) {
            c(t.type, Wj(t), t.target, i(t, e.lockRef.current))
          }), []),
          f = m.useCallback((function(t) {
            c(t.type, qj(t), t.target, i(t, e.lockRef.current))
          }), []);
        m.useEffect((function() {
          return Zj.push(a), e.setCallbacks({
              onScrollCapture: u,
              onWheelCapture: u,
              onTouchMoveCapture: f
            }), document.addEventListener("wheel", s, Vj), document.addEventListener("touchmove", s, Vj), document.addEventListener("touchstart", d, Vj),
            function() {
              Zj = Zj.filter((function(e) {
                return e !== a
              })), document.removeEventListener("wheel", s, Vj), document.removeEventListener("touchmove", s, Vj), document.removeEventListener("touchstart", d, Vj)
            }
        }), []);
        var h = e.removeScrollBar,
          v = e.inert;
        return m.createElement(m.Fragment, null, v ? m.createElement(a, {
          styles: $j(o)
        }) : null, h ? m.createElement(Hj, {
          gapMode: e.gapMode
        }) : null)
      })), Dj);
      var eR = m.forwardRef((function(e, t) {
        return m.createElement(_j, (0, kp.Cl)({}, e, {
          ref: t,
          sideCar: Jj
        }))
      }));
      eR.classNames = _j.classNames;
      const tR = eR;
      var rR = new WeakMap,
        nR = new WeakMap,
        oR = {},
        aR = 0,
        lR = function(e) {
          return e && (e.host || lR(e.parentNode))
        },
        iR = function(e, t, r) {
          void 0 === r && (r = "data-aria-hidden");
          var n = Array.from(Array.isArray(e) ? e : [e]),
            o = t || function(e) {
              return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
            }(e);
          return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), function(e, t, r, n) {
            var o = function(e, t) {
              return t.map((function(t) {
                if (e.contains(t)) return t;
                var r = lR(t);
                return r && e.contains(r) ? r : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null)
              })).filter((function(e) {
                return Boolean(e)
              }))
            }(t, Array.isArray(e) ? e : [e]);
            oR[r] || (oR[r] = new WeakMap);
            var a = oR[r],
              l = [],
              i = new Set,
              s = new Set(o),
              c = function(e) {
                e && !i.has(e) && (i.add(e), c(e.parentNode))
              };
            o.forEach(c);
            var d = function(e) {
              e && !s.has(e) && Array.prototype.forEach.call(e.children, (function(e) {
                if (i.has(e)) d(e);
                else {
                  var t = e.getAttribute(n),
                    o = null !== t && "false" !== t,
                    s = (rR.get(e) || 0) + 1,
                    c = (a.get(e) || 0) + 1;
                  rR.set(e, s), a.set(e, c), l.push(e), 1 === s && o && nR.set(e, !0), 1 === c && e.setAttribute(r, "true"), o || e.setAttribute(n, "true")
                }
              }))
            };
            return d(t), i.clear(), aR++,
              function() {
                l.forEach((function(e) {
                  var t = rR.get(e) - 1,
                    o = a.get(e) - 1;
                  rR.set(e, t), a.set(e, o), t || (nR.has(e) || e.removeAttribute(n), nR.delete(e)), o || e.removeAttribute(r)
                })), --aR || (rR = new WeakMap, rR = new WeakMap, nR = new WeakMap, oR = {})
              }
          }(n, o, r, "aria-hidden")) : function() {
            return null
          }
        },
        sR = "Dialog",
        [cR, dR] = tw(sR),
        [uR, fR] = cR(sR),
        hR = e => {
          const {
            __scopeDialog: t,
            children: r,
            open: n,
            defaultOpen: a,
            onOpenChange: l,
            modal: i = !0
          } = e, s = m.useRef(null), c = m.useRef(null), [d = !1, u] = ow({
            prop: n,
            defaultProp: a,
            onChange: l
          });
          return (0, o.jsx)(uR, {
            scope: t,
            triggerRef: s,
            contentRef: c,
            contentId: Ox(),
            titleId: Ox(),
            descriptionId: Ox(),
            open: d,
            onOpenChange: u,
            onOpenToggle: m.useCallback((() => u((e => !e))), [u]),
            modal: i,
            children: r
          })
        };
      hR.displayName = sR;
      var vR = "DialogTrigger",
        pR = m.forwardRef(((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, a = fR(vR, r), l = we(t, a.triggerRef);
          return (0, o.jsx)(Me.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": a.open,
            "aria-controls": a.contentId,
            "data-state": DR(a.open),
            ...n,
            ref: l,
            onClick: ew(e.onClick, a.onOpenToggle)
          })
        }));
      pR.displayName = vR;
      var gR = "DialogPortal",
        [mR, wR] = cR(gR, {
          forceMount: void 0
        }),
        xR = e => {
          const {
            __scopeDialog: t,
            forceMount: r,
            children: n,
            container: a
          } = e, l = fR(gR, t);
          return (0, o.jsx)(mR, {
            scope: t,
            forceMount: r,
            children: m.Children.map(n, (e => (0, o.jsx)(jb, {
              present: r || l.open,
              children: (0, o.jsx)(bb, {
                asChild: !0,
                container: a,
                children: e
              })
            })))
          })
        };
      xR.displayName = gR;
      var yR = "DialogOverlay",
        bR = m.forwardRef(((e, t) => {
          const r = wR(yR, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...a
            } = e,
            l = fR(yR, e.__scopeDialog);
          return l.modal ? (0, o.jsx)(jb, {
            present: n || l.open,
            children: (0, o.jsx)(jR, {
              ...a,
              ref: t
            })
          }) : null
        }));
      bR.displayName = yR;
      var jR = m.forwardRef(((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, a = fR(yR, r);
          return (0, o.jsx)(tR, {
            as: xe,
            allowPinchZoom: !0,
            shards: [a.contentRef],
            children: (0, o.jsx)(Me.div, {
              "data-state": DR(a.open),
              ...n,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...n.style
              }
            })
          })
        })),
        RR = "DialogContent",
        MR = m.forwardRef(((e, t) => {
          const r = wR(RR, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...a
            } = e,
            l = fR(RR, e.__scopeDialog);
          return (0, o.jsx)(jb, {
            present: n || l.open,
            children: l.modal ? (0, o.jsx)(CR, {
              ...a,
              ref: t
            }) : (0, o.jsx)(LR, {
              ...a,
              ref: t
            })
          })
        }));
      MR.displayName = RR;
      var CR = m.forwardRef(((e, t) => {
          const r = fR(RR, e.__scopeDialog),
            n = m.useRef(null),
            a = we(t, r.contentRef, n);
          return m.useEffect((() => {
            const e = n.current;
            if (e) return iR(e)
          }), []), (0, o.jsx)(SR, {
            ...e,
            ref: a,
            trapFocus: r.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: ew(e.onCloseAutoFocus, (e => {
              e.preventDefault(), r.triggerRef.current?.focus()
            })),
            onPointerDownOutside: ew(e.onPointerDownOutside, (e => {
              const t = e.detail.originalEvent,
                r = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || r) && e.preventDefault()
            })),
            onFocusOutside: ew(e.onFocusOutside, (e => e.preventDefault()))
          })
        })),
        LR = m.forwardRef(((e, t) => {
          const r = fR(RR, e.__scopeDialog),
            n = m.useRef(!1),
            a = m.useRef(!1);
          return (0, o.jsx)(SR, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: t => {
              e.onCloseAutoFocus?.(t), t.defaultPrevented || (n.current || r.triggerRef.current?.focus(), t.preventDefault()), n.current = !1, a.current = !1
            },
            onInteractOutside: t => {
              e.onInteractOutside?.(t), t.defaultPrevented || (n.current = !0, "pointerdown" === t.detail.originalEvent.type && (a.current = !0));
              const o = t.target,
                l = r.triggerRef.current?.contains(o);
              l && t.preventDefault(), "focusin" === t.detail.originalEvent.type && a.current && t.preventDefault()
            }
          })
        })),
        SR = m.forwardRef(((e, t) => {
          const {
            __scopeDialog: r,
            trapFocus: n,
            onOpenAutoFocus: a,
            onCloseAutoFocus: l,
            ...i
          } = e, s = fR(RR, r), c = m.useRef(null), d = we(t, c);
          return Rj(), (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(pj, {
              asChild: !0,
              loop: !0,
              trapped: n,
              onMountAutoFocus: a,
              onUnmountAutoFocus: l,
              children: (0, o.jsx)(Dx, {
                role: "dialog",
                id: s.contentId,
                "aria-describedby": s.descriptionId,
                "aria-labelledby": s.titleId,
                "data-state": DR(s.open),
                ...i,
                ref: d,
                onDismiss: () => s.onOpenChange(!1)
              })
            }), (0, o.jsxs)(o.Fragment, {
              children: [(0, o.jsx)(NR, {
                titleId: s.titleId
              }), (0, o.jsx)(OR, {
                contentRef: c,
                descriptionId: s.descriptionId
              })]
            })]
          })
        })),
        ER = "DialogTitle";
      m.forwardRef(((e, t) => {
        const {
          __scopeDialog: r,
          ...n
        } = e, a = fR(ER, r);
        return (0, o.jsx)(Me.h2, {
          id: a.titleId,
          ...n,
          ref: t
        })
      })).displayName = ER;
      var PR = "DialogDescription";
      m.forwardRef(((e, t) => {
        const {
          __scopeDialog: r,
          ...n
        } = e, a = fR(PR, r);
        return (0, o.jsx)(Me.p, {
          id: a.descriptionId,
          ...n,
          ref: t
        })
      })).displayName = PR;
      var _R = "DialogClose";

      function DR(e) {
        return e ? "open" : "closed"
      }
      m.forwardRef(((e, t) => {
        const {
          __scopeDialog: r,
          ...n
        } = e, a = fR(_R, r);
        return (0, o.jsx)(Me.button, {
          type: "button",
          ...n,
          ref: t,
          onClick: ew(e.onClick, (() => a.onOpenChange(!1)))
        })
      })).displayName = _R;
      var AR = "DialogTitleWarning",
        [TR, IR] = function(e, t) {
          const r = m.createContext(t);

          function n(e) {
            const {
              children: t,
              ...n
            } = e, a = m.useMemo((() => n), Object.values(n));
            return (0, o.jsx)(r.Provider, {
              value: a,
              children: t
            })
          }
          return n.displayName = e + "Provider", [n, function(n) {
            const o = m.useContext(r);
            if (o) return o;
            if (void 0 !== t) return t;
            throw new Error(`\`${n}\` must be used within \`${e}\``)
          }]
        }(AR, {
          contentName: RR,
          titleName: ER,
          docsSlug: "dialog"
        }),
        NR = ({
          titleId: e
        }) => {
          const t = IR(AR),
            r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return m.useEffect((() => {
            e && (document.getElementById(e) || console.error(r))
          }), [r, e]), null
        },
        OR = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${IR("DialogDescriptionWarning").contentName}}.`;
          return m.useEffect((() => {
            const n = e.current?.getAttribute("aria-describedby");
            t && n && (document.getElementById(t) || console.warn(r))
          }), [r, e, t]), null
        },
        kR = hR,
        HR = pR,
        BR = xR,
        zR = MR;
      const VR = wv(bR),
        FR = wv(zR),
        GR = e => {
          e?.preventDefault(), e?.target?.focus({
            preventScroll: !0
          })
        },
        XR = ({
          src: e,
          alt: t,
          caption: r,
          crossOrigin: n,
          loading: a,
          referrerPolicy: l,
          thumbnail: i,
          thumbnailAspectRatio: s,
          thumbnailPosition: c = "center",
          thumbnailFit: d = "cover",
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
          onZoomLevelChange: R,
          gestureSettings: M,
          testId: C
        }) => {
          const L = (0, m.useRef)(null),
            S = (0, m.useRef)(null),
            E = (0, m.useRef)(null),
            P = (0, m.useRef)(null),
            _ = Jh(),
            D = Jh(),
            A = Jh(),
            T = (0, m.useRef)(!1),
            I = Xm(),
            N = Ac("screen and (max-width: 1024px)"),
            O = zc() && N,
            k = Nc(),
            [H, B] = (0, m.useState)(!0),
            [z, V] = (0, m.useState)(!1),
            [F = !1, G] = Hc({
              prop: h,
              defaultProp: f,
              onChange: v
            }),
            X = (0, m.useDeferredValue)(F),
            U = u || k || f && !T.current;
          (0, m.useEffect)((() => {
            (f || h) && oe(!0)
          }), []), ((e, t = []) => {
            const r = (0, m.useRef)(!1);
            (0, m.useEffect)((() => (r.current = !0, () => {
              r.current = !1
            })), []), (0, m.useEffect)((() => {
              r.current && e()
            }), [...t])
          })((() => {
            F !== X && (oe(F), T.current = !0)
          }), [F]);
          const q = () => {
              G(!1)
            },
            W = (({
              position: e,
              defaultPosition: t,
              onPositionChange: r,
              minZoomLevel: n,
              maxZoomLevel: o,
              zoomLevelStep: a,
              zoomLevel: l,
              defaultZoomLevel: i,
              onZoomLevelChange: s,
              onRequestClose: c,
              onClick: d,
              gestureSettings: u = jv
            }) => {
              const [f = t, h] = Hc({
                prop: e,
                defaultProp: t,
                onChange: r
              }), [v = i, p] = Hc({
                prop: l,
                defaultProp: i,
                onChange: s
              }), g = (0, m.useRef)(null), w = (0, m.useRef)(null), [x, y] = (0, m.useState)(!1), b = v > n, j = v < o, R = v > n, M = v === n, C = Ac("screen and (max-width: 1024px)"), L = zc() && C, S = (e, {
                origin: r,
                delta: l
              } = {}) => {
                if (g.current && w.current) {
                  r || (r = [w.current.clientWidth / 2, w.current.clientHeight / 2]);
                  const d = (i = e, s = n, c = o, Math.min(Math.max(i, s), c));
                  if (d === v) return;
                  if (l || (l = (d - v) / a), d <= n) h(t);
                  else {
                    const e = bv(g.current, w.current, (({
                      currentTranslate: [e, t],
                      contentRef: r,
                      pinchDelta: n,
                      scale: o,
                      touchOrigin: [a, l]
                    }) => {
                      if (!r?.current) return [0, 0];
                      const {
                        height: i,
                        left: s,
                        top: c,
                        width: d
                      } = r.current?.getBoundingClientRect();
                      return [-(a - s - d / 2) / o * n + e, -(l - c - i / 2) / o * n + t]
                    })({
                      currentTranslate: f,
                      contentRef: g,
                      pinchDelta: l,
                      scale: v / a,
                      touchOrigin: r
                    }), d);
                    h(e.xy)
                  }
                  p(d)
                }
                var i, s, c
              }, E = () => {
                h(t), p(i)
              }, {
                handleClick: P
              } = (({
                enabled: e = !0,
                latency: t = 300,
                onDoubleClick: r = (() => null),
                onSingleClick: n = (() => null)
              }) => {
                const o = (0, m.useRef)(0),
                  a = (0, m.useRef)();
                return {
                  handleClick: l => {
                    e && (o.current += 1, a.current = setTimeout((() => {
                      1 === o.current ? n(l) : 2 === o.current && r(l), o.current = 0
                    }), t))
                  }
                }
              })({
                onDoubleClick: () => {
                  g.current && L && v > n && E()
                },
                onSingleClick: e => {
                  if (g.current && 0 === e.button) {
                    const t = yv(g.current),
                      r = e.y < t.top || e.y > t.bottom || e.x < t.left || e.x > t.right ? "overlay" : "content";
                    d?.({
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
                  S(v + a, e)
                },
                zoomOut: e => {
                  S(v - a, e)
                },
                zoomTo: S,
                resetZoom: E,
                canZoomIn: j,
                canZoomOut: R,
                zoomLevelStep: a,
                maxZoomLevel: o,
                minZoomLevel: n,
                defaultZoomLevel: i,
                eventHandlers: {
                  onDrag: ({
                    first: e,
                    memo: t = [0, 0],
                    movement: [r, o],
                    pinching: a,
                    tap: l,
                    touches: i,
                    event: s
                  }) => {
                    if (!w.current || !g.current) return;
                    if (l) return void P(s);
                    if (r && o && !x && y(!0), i > 1) return;
                    if (a || v < n) return;
                    if (e) return f;
                    const {
                      horizontalOffset: c,
                      verticalOffset: d
                    } = bv(g.current, w.current, f, v), p = r * u.dragFactor, m = o * u.dragFactor;
                    return h(v === n ? [t[0], t[1] + m] : [xv(t[0] + p, -c, c), xv(t[1] + m, -d, d)]), t
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
                          } = bv(g.current, w.current, f, v);
                        r.top + Math.abs(n) >= e.height / 2 ? c?.() : h(t)
                      } else if (void 0 !== e) {
                      const e = bv(g.current, w.current, f, v);
                      y(!1), h(e.xy)
                    }
                  },
                  onPinch: ({
                    cancel: e,
                    last: t,
                    movement: [r],
                    origin: [n, o]
                  }) => {
                    if (g.current && w.current) {
                      if (r && x && y(!0), t) return void e();
                      const a = [n, o],
                        l = v / 100,
                        i = l + r / u.pinchFactor;
                      S(100 * i, {
                        delta: i - l,
                        origin: a
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
                      const o = -1 * n[1];
                      if (o && x && y(!0), e) return void t();
                      const a = [r.clientX, r.clientY],
                        l = v / 100,
                        i = l + o / u.scrollFactor;
                      S(100 * i, {
                        delta: i - l,
                        origin: a
                      })
                    }
                  },
                  onWheelEnd: () => {
                    w.current && g.current && y(!1)
                  }
                },
                getCursor: () => M && j ? "zoom-in" : b ? x ? "grabbing" : "grab" : "pointer"
              }
            })({
              enabled: X,
              onClick: function(e) {
                N ? B(!H) : "overlay" === e.target ? q() : W.zoomLevel >= W.maxZoomLevel ? W.resetZoom() : W.zoomTo(W.maxZoomLevel, {
                  origin: e.origin
                })
              },
              onRequestClose: q,
              zoomLevel: w,
              defaultZoomLevel: x,
              minZoomLevel: y,
              maxZoomLevel: b,
              zoomLevelStep: j,
              onZoomLevelChange: R,
              defaultPosition: [0, 0],
              gestureSettings: M
            }),
            {
              loaded: K,
              eventHandlers: $
            } = (({
              enabled: e = !0
            }) => {
              const [t, r] = (0, m.useState)(!1), [n, o] = (0, m.useState)(!1);
              return (0, m.useEffect)((() => {
                e || (r(!1), o(!1))
              }), [e]), {
                eventHandlers: {
                  onLoad: () => {
                    e && (o(!0), r(!1))
                  },
                  onAbort: () => {
                    e && (o(!0), r(!1))
                  },
                  onError: () => {
                    e && (o(!0), r(!1))
                  }
                },
                error: t,
                loaded: n
              }
            })({
              enabled: X
            }),
            {
              isHovered: Y
            } = (({
              enabled: e,
              ref: t
            }) => {
              const [r, n] = (0, m.useState)(!1);
              return (0, m.useEffect)((() => {
                n(!1)
              }), [t.current]), Bc("mouseenter", (() => {
                n(!0)
              }), t), Bc("mouseleave", (() => {
                n(!1)
              }), t), {
                isHovered: !!e && r
              }
            })({
              ref: L,
              enabled: X
            }),
            {
              isFocused: Z
            } = (({
              enabled: e,
              ref: t
            }) => {
              const [r, n] = (0, m.useState)(!1);
              return (0, m.useEffect)((() => {
                n(!1)
              }), [t.current]), Bc("focusin", (() => {
                n(!0)
              }), t), Bc("focusout", (() => {
                n(!1)
              }), t), {
                isFocused: !!e && r
              }
            })({
              ref: L,
              enabled: X
            }),
            {
              isIdle: Q
            } = kc({
              leave: 300,
              activity: 3e3,
              enabled: X && !Y && !Z && !O
            }),
            J = function(e, t, r) {
              const n = eu.fun(t) && t,
                {
                  reset: o,
                  sort: a,
                  trail: l = 0,
                  expires: i = !0,
                  exitBeforeEnter: s = !1,
                  onDestroyed: c,
                  ref: d,
                  config: u
                } = n ? n() : t,
                f = (0, m.useMemo)((() => n || 3 == arguments.length ? Yh() : void 0), []),
                h = ou(e),
                v = [],
                p = (0, m.useRef)(null),
                g = o ? null : p.current;
              jf((() => {
                p.current = v
              })), Cf((() => (ru(v, (e => {
                f?.add(e.ctrl), e.ctrl.ref = f
              })), () => {
                ru(p.current, (e => {
                  e.expired && clearTimeout(e.expirationId), rh(e.ctrl, f), e.ctrl.stop(!0)
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
                      return r ? (t.add(r), r.key) : ev++
                    }))
                  }
                  return eu.und(r) ? e : eu.fun(r) ? e.map(r) : ou(r)
                }(h, n ? n() : t, g),
                x = o && p.current || [];
              jf((() => ru(x, (({
                ctrl: e,
                item: t,
                key: r
              }) => {
                rh(e, f), Xf(c, t, r)
              }))));
              const y = [];
              if (g && ru(g, ((e, t) => {
                  e.expired ? (clearTimeout(e.expirationId), x.push(e)) : ~(t = y[t] = w.indexOf(e.key)) && (v[t] = e)
                })), ru(h, ((e, t) => {
                  v[t] || (v[t] = {
                    key: w[t],
                    item: e,
                    phase: "mount",
                    ctrl: new Hh
                  }, v[t].ctrl.item = e)
                })), y.length) {
                let e = -1;
                const {
                  leave: r
                } = n ? n() : t;
                ru(y, ((t, n) => {
                  const o = g[n];
                  ~t ? (e = v.indexOf(o), v[e] = {
                    ...o,
                    item: h[t]
                  }) : r && v.splice(++e, 0, o)
                }))
              }
              eu.fun(a) && v.sort(((e, t) => a(e.item, t.item)));
              let b = -l;
              const j = Mf(),
                R = $f(t),
                M = new Map,
                C = (0, m.useRef)(new Map),
                L = (0, m.useRef)(!1);
              ru(v, ((e, r) => {
                const o = e.key,
                  a = e.phase,
                  c = n ? n() : t;
                let f, h;
                const v = Xf(c.delay || 0, o);
                if ("mount" == a) f = c.enter, h = "enter";
                else {
                  const e = w.indexOf(o) < 0;
                  if ("leave" != a)
                    if (e) f = c.leave, h = "leave";
                    else {
                      if (!(f = c.update)) return;
                      h = "update"
                    }
                  else {
                    if (e) return;
                    f = c.enter, h = "enter"
                  }
                }
                if (f = Xf(f, e.item, r), f = eu.obj(f) ? Qf(f) : {
                    to: f
                  }, !f.config) {
                  const t = u || R.config;
                  f.config = Xf(t, e.item, r, h)
                }
                b += l;
                const m = {
                  ...R,
                  delay: v + b,
                  ref: d,
                  immediate: c.immediate,
                  reset: !1,
                  ...f
                };
                if ("enter" == h && eu.und(m.from)) {
                  const o = n ? n() : t,
                    a = eu.und(o.initial) || g ? o.from : o.initial;
                  m.from = Xf(a, e.item, r)
                }
                const {
                  onResolve: x
                } = m;
                m.onResolve = e => {
                  Xf(x, e);
                  const t = p.current,
                    r = t.find((e => e.key === o));
                  if (r && (!e.cancelled || "update" == r.phase) && r.ctrl.idle) {
                    const e = t.every((e => e.ctrl.idle));
                    if ("leave" == r.phase) {
                      const t = Xf(i, r.item);
                      if (!1 !== t) {
                        const n = !0 === t ? 0 : t;
                        if (r.expired = !0, !e && n > 0) return void(n <= 2147483647 && (r.expirationId = setTimeout(j, n)))
                      }
                    }
                    e && t.some((e => e.expired)) && (C.current.delete(r), s && (L.current = !0), j())
                  }
                };
                const y = Vh(e.ctrl, m);
                "leave" === h && s ? C.current.set(e, {
                  phase: h,
                  springs: y,
                  payload: m
                }) : M.set(e, {
                  phase: h,
                  springs: y,
                  payload: m
                })
              }));
              const S = (0, m.useContext)(Kh),
                E = Sf(S),
                P = S !== E && eh(S);
              jf((() => {
                P && ru(v, (e => {
                  e.ctrl.start({
                    default: S
                  })
                }))
              }), [S]), ru(M, ((e, t) => {
                if (C.current.size) {
                  const e = v.findIndex((e => e.key === t.key));
                  v.splice(e, 1)
                }
              })), jf((() => {
                ru(C.current.size ? C.current : M, (({
                  phase: e,
                  payload: t
                }, r) => {
                  const {
                    ctrl: n
                  } = r;
                  r.phase = e, f?.add(n), P && "enter" == e && n.start({
                    default: S
                  }), t && (nh(n, t.ref), !n.ref && !f || L.current ? (n.start(t), L.current && (L.current = !1)) : n.update(t))
                }))
              }), o ? void 0 : r);
              const _ = e => m.createElement(m.Fragment, null, v.map(((t, r) => {
                const {
                  springs: n
                } = M.get(t) || t.ctrl, o = e({
                  ...n
                }, t.item, t, r);
                return o && o.type ? m.createElement(o.type, {
                  ...o.props,
                  key: eu.str(t.key) || eu.num(t.key) ? t.key : t.ctrl.id,
                  ref: o.ref
                }) : o
              })));
              return f ? [_, f] : _
            }(X, {
              ref: _,
              from: {
                opacity: 0
              },
              enter: {
                opacity: 1
              },
              leave: {
                opacity: 0
              },
              immediate: U
            }),
            ee = Zh({
              ref: D,
              opacity: X && !Q && K && H ? 1 : 0,
              immediate: U
            }),
            te = Zh({
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
                objectFit: d,
                objectPosition: c,
                opacity: 0
              },
              onStart: () => {
                X || V(!1)
              },
              onRest: async () => {
                X ? V(!0) : (W.resetZoom(), B(!0))
              }
            }),
            re = Zh({
              opacity: X && K && z ? 1 : 0,
              immediate: !0,
              onRest: () => {
                X && K && A.start({
                  opacity: 0,
                  immediate: !0
                })
              }
            }),
            ne = [
              [A, _, D],
              [0, 0, .1]
            ];

          function oe(e) {
            const t = E.current.getBoundingClientRect(),
              r = S.current.naturalWidth,
              n = S.current.naturalHeight,
              o = r / window.innerWidth,
              a = r / o,
              l = n / o,
              i = window.innerHeight * a / l,
              u = window.innerWidth * l / a,
              f = l >= window.innerHeight ? "horizontal" : "vertical",
              h = "horizontal" === f ? (window.innerWidth - window.innerHeight * a / l) / 2 : (window.innerHeight - window.innerWidth * l / a) / 2;
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
                  immediate: U
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
                  objectFit: d,
                  objectPosition: c,
                  height: "horizontal" === f ? `${window.innerHeight}px` : `${u}px`,
                  width: "horizontal" === f ? `${i}px` : `${window.innerWidth}px`,
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
                  immediate: U
                }), E.current.style.opacity = "1", await e({
                  immediate: !0,
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: "0",
                  left: "0",
                  aspectRatio: s,
                  objectFit: d,
                  opacity: 0
                })
              }
            })
          }! function(e, t, r = 1e3) {
            jf((() => {
              if (t) {
                let n = 0;
                ru(e, ((e, o) => {
                  const a = e.current;
                  if (a.length) {
                    let l = r * t[o];
                    isNaN(l) ? l = n : n = l, ru(a, (e => {
                      ru(e.queue, (e => {
                        const t = e.delay;
                        e.delay = e => l + Xf(t || 0, e)
                      }))
                    })), e.start()
                  }
                }))
              } else {
                let t = Promise.resolve();
                ru(e, (e => {
                  const r = e.current;
                  if (r.length) {
                    const n = r.map((e => {
                      const t = e.queue;
                      return e.queue = [], t
                    }));
                    t = t.then((() => (ru(r, ((e, t) => ru(n[t] || [], (t => e.queue.push(t))))), Promise.all(e.start()))))
                  }
                }))
              }
            }))
          }(X ? ne[0] : ne[0].reverse(), ne[1]), (0, m.useEffect)((() => {
            B(!O)
          }), [O]);
          const {
            contrastMode: ae
          } = (() => {
            const {
              colorScheme: e,
              defaultColorScheme: t,
              contrastMode: r,
              defaultContrastMode: n,
              platformScale: o,
              defaultPlatformScale: a,
              platformScaleRatios: l,
              platformScaleBreakpoints: i,
              locale: s
            } = _d();
            return {
              colorScheme: e,
              defaultColorScheme: t,
              contrastMode: r,
              defaultContrastMode: n,
              platformScale: o,
              defaultPlatformScale: a,
              platformScaleRatios: l,
              platformScaleBreakpoints: i,
              locale: s
            }
          })(), le = ((e, t) => [Ld.tokens, dj("dark", t)].join(" "))(0, ae);
          return (0, o.jsx)(kR, {
            children: (0, o.jsxs)("div", {
              className: "foundry_1a74xwb0",
              children: [(0, o.jsx)(wv.div, {
                className: "foundry_1a74xwb2 foundry_1a74xwb1",
                ref: P,
                "data-idle": !X,
                style: te,
                children: (0, o.jsx)("img", {
                  alt: t,
                  src: i,
                  ref: S,
                  loading: a,
                  className: uj,
                  crossOrigin: n,
                  referrerPolicy: l
                })
              }), (0, o.jsx)(HR, {
                asChild: !0,
                children: (0, o.jsxs)(wv.button, {
                  className: "foundry_1a74xwb3 foundry_1d5mo5m0 foundry_1a74xwb1",
                  onClick: () => {
                    G(!F)
                  },
                  ref: E,
                  "data-idle": !X,
                  style: {
                    aspectRatio: s,
                    objectPosition: c,
                    objectFit: d
                  },
                  children: [(0, o.jsx)("img", {
                    alt: t,
                    src: i,
                    ref: S,
                    loading: a,
                    className: uj,
                    crossOrigin: n,
                    referrerPolicy: l
                  }), J(((e, t) => p && !t && (0, o.jsx)(wv.span, {
                    className: "foundry_1a74xwb5",
                    style: e,
                    children: (0, o.jsx)(La, {
                      label: I.formatMessage(Qm)
                    })
                  })))]
                })
              }), (0, o.jsx)(BR, {
                forceMount: !0,
                children: J(((i, s) => s && (0, o.jsxs)(o.Fragment, {
                  children: [(0, o.jsx)(VR, {
                    className: "foundry_1a74xwb8",
                    style: i
                  }), (0, o.jsxs)(FR, {
                    "data-testid": C,
                    onEscapeKeyDown: q,
                    onOpenAutoFocus: GR,
                    className: le,
                    children: [(0, o.jsx)(wv.div, {
                      className: "foundry_1a74xwb6",
                      style: re,
                      children: (0, o.jsx)(Tp, {
                        ...W,
                        children: (0, o.jsx)("img", {
                          alt: t,
                          src: e,
                          loading: a,
                          className: "foundry_1a74xwba",
                          crossOrigin: n,
                          referrerPolicy: l,
                          style: {
                            cursor: W.getCursor()
                          },
                          ...$
                        })
                      })
                    }), (0, o.jsx)(wv.div, {
                      className: "foundry_1a74xwb9",
                      style: ee,
                      children: (0, o.jsx)(sj, {
                        ...W,
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
        UR = e => {
          const t = (() => {
            const {
              locale: e
            } = _d();
            return e
          })();
          return (0, o.jsx)(Ym, {
            messages: cj,
            locale: t,
            children: (0, o.jsx)(XR, {
              ...e
            })
          })
        };
      var qR = [" ", "Enter", "ArrowUp", "ArrowDown"],
        WR = [" ", "Enter"],
        KR = "Select",
        [$R, YR, ZR] = dw(KR),
        [QR, JR] = tw(KR, [ZR, tb]),
        eM = tb(),
        [tM, rM] = QR(KR),
        [nM, oM] = QR(KR),
        aM = e => {
          const {
            __scopeSelect: t,
            children: r,
            open: n,
            defaultOpen: a,
            onOpenChange: l,
            value: i,
            defaultValue: s,
            onValueChange: c,
            dir: d,
            name: u,
            autoComplete: f,
            disabled: h,
            required: v
          } = e, p = eM(t), [g, w] = m.useState(null), [x, y] = m.useState(null), [b, j] = m.useState(!1), R = lw(d), [M = !1, C] = ow({
            prop: n,
            defaultProp: a,
            onChange: l
          }), [L, S] = ow({
            prop: i,
            defaultProp: s,
            onChange: c
          }), E = m.useRef(null), P = !g || Boolean(g.closest("form")), [_, D] = m.useState(new Set), A = Array.from(_).map((e => e.props.value)).join(";");
          return (0, o.jsx)(mb, {
            ...p,
            children: (0, o.jsxs)(tM, {
              required: v,
              scope: t,
              trigger: g,
              onTriggerChange: w,
              valueNode: x,
              onValueNodeChange: y,
              valueNodeHasChildren: b,
              onValueNodeHasChildrenChange: j,
              contentId: Ox(),
              value: L,
              onValueChange: S,
              open: M,
              onOpenChange: C,
              dir: R,
              triggerPointerDownPosRef: E,
              disabled: h,
              children: [(0, o.jsx)($R.Provider, {
                scope: t,
                children: (0, o.jsx)(nM, {
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
              }), P ? (0, o.jsxs)(zM, {
                "aria-hidden": !0,
                required: v,
                tabIndex: -1,
                name: u,
                autoComplete: f,
                value: L,
                onChange: e => S(e.target.value),
                disabled: h,
                children: [void 0 === L ? (0, o.jsx)("option", {
                  value: ""
                }) : null, Array.from(_)]
              }, A) : null]
            })
          })
        };
      aM.displayName = KR;
      var lM = "SelectTrigger",
        iM = m.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            disabled: n = !1,
            ...a
          } = e, l = eM(r), i = rM(lM, r), s = i.disabled || n, c = we(t, i.onTriggerChange), d = YR(r), [u, f, h] = VM((e => {
            const t = d().filter((e => !e.disabled)),
              r = t.find((e => e.value === i.value)),
              n = FM(t, e, r);
            void 0 !== n && i.onValueChange(n.value)
          })), v = () => {
            s || (i.onOpenChange(!0), h())
          };
          return (0, o.jsx)(wb, {
            asChild: !0,
            ...l,
            children: (0, o.jsx)(Me.button, {
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
              "data-placeholder": BM(i.value) ? "" : void 0,
              ...a,
              ref: c,
              onClick: ew(a.onClick, (e => {
                e.currentTarget.focus()
              })),
              onPointerDown: ew(a.onPointerDown, (e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && (v(), i.triggerPointerDownPosRef.current = {
                  x: Math.round(e.pageX),
                  y: Math.round(e.pageY)
                }, e.preventDefault())
              })),
              onKeyDown: ew(a.onKeyDown, (e => {
                const t = "" !== u.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), t && " " === e.key || qR.includes(e.key) && (v(), e.preventDefault())
              }))
            })
          })
        }));
      iM.displayName = lM;
      var sM = "SelectValue",
        cM = m.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: a,
            children: l,
            placeholder: i = "",
            ...s
          } = e, c = rM(sM, r), {
            onValueNodeHasChildrenChange: d
          } = c, u = void 0 !== l, f = we(t, c.onValueNodeChange);
          return sw((() => {
            d(u)
          }), [d, u]), (0, o.jsx)(Me.span, {
            ...s,
            ref: f,
            style: {
              pointerEvents: "none"
            },
            children: BM(c.value) ? (0, o.jsx)(o.Fragment, {
              children: i
            }) : l
          })
        }));
      cM.displayName = sM;
      var dM = m.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          children: n,
          ...a
        } = e;
        return (0, o.jsx)(Me.span, {
          "aria-hidden": !0,
          ...a,
          ref: t,
          children: n || "▼"
        })
      }));
      dM.displayName = "SelectIcon";
      var uM = e => (0, o.jsx)(bb, {
        asChild: !0,
        ...e
      });
      uM.displayName = "SelectPortal";
      var fM = "SelectContent",
        hM = m.forwardRef(((e, t) => {
          const r = rM(fM, e.__scopeSelect),
            [n, a] = m.useState();
          if (sw((() => {
              a(new DocumentFragment)
            }), []), !r.open) {
            const t = n;
            return t ? j.createPortal((0, o.jsx)(pM, {
              scope: e.__scopeSelect,
              children: (0, o.jsx)($R.Slot, {
                scope: e.__scopeSelect,
                children: (0, o.jsx)("div", {
                  children: e.children
                })
              })
            }), t) : null
          }
          return (0, o.jsx)(mM, {
            ...e,
            ref: t
          })
        }));
      hM.displayName = fM;
      var vM = 10,
        [pM, gM] = QR(fM),
        mM = m.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            position: n = "item-aligned",
            onCloseAutoFocus: a,
            onEscapeKeyDown: l,
            onPointerDownOutside: i,
            side: s,
            sideOffset: c,
            align: d,
            alignOffset: u,
            arrowPadding: f,
            collisionBoundary: h,
            collisionPadding: v,
            sticky: p,
            hideWhenDetached: g,
            avoidCollisions: w,
            ...x
          } = e, y = rM(fM, r), [b, j] = m.useState(null), [R, M] = m.useState(null), C = we(t, (e => j(e))), [L, S] = m.useState(null), [E, P] = m.useState(null), _ = YR(r), [D, A] = m.useState(!1), T = m.useRef(!1);
          m.useEffect((() => {
            if (b) return iR(b)
          }), [b]), Rj();
          const I = m.useCallback((e => {
              const [t, ...r] = _().map((e => e.ref.current)), [n] = r.slice(-1), o = document.activeElement;
              for (const r of e) {
                if (r === o) return;
                if (r?.scrollIntoView({
                    block: "nearest"
                  }), r === t && R && (R.scrollTop = 0), r === n && R && (R.scrollTop = R.scrollHeight), r?.focus(), document.activeElement !== o) return
              }
            }), [_, R]),
            N = m.useCallback((() => I([L, b])), [I, L, b]);
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
          const [H, B] = VM((e => {
            const t = _().filter((e => !e.disabled)),
              r = t.find((e => e.ref.current === document.activeElement)),
              n = FM(t, e, r);
            n && setTimeout((() => n.ref.current.focus()))
          })), z = m.useCallback(((e, t, r) => {
            const n = !T.current && !r;
            (void 0 !== y.value && y.value === t || n) && (S(e), n && (T.current = !0))
          }), [y.value]), V = m.useCallback((() => b?.focus()), [b]), F = m.useCallback(((e, t, r) => {
            const n = !T.current && !r;
            (void 0 !== y.value && y.value === t || n) && P(e)
          }), [y.value]), G = "popper" === n ? xM : wM, X = G === xM ? {
            side: s,
            sideOffset: c,
            align: d,
            alignOffset: u,
            arrowPadding: f,
            collisionBoundary: h,
            collisionPadding: v,
            sticky: p,
            hideWhenDetached: g,
            avoidCollisions: w
          } : {};
          return (0, o.jsx)(pM, {
            scope: r,
            content: b,
            viewport: R,
            onViewportChange: M,
            itemRefCallback: z,
            selectedItem: L,
            onItemLeave: V,
            itemTextRefCallback: F,
            focusSelectedItem: N,
            selectedItemText: E,
            position: n,
            isPositioned: D,
            searchRef: H,
            children: (0, o.jsx)(tR, {
              as: xe,
              allowPinchZoom: !0,
              children: (0, o.jsx)(pj, {
                asChild: !0,
                trapped: y.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: ew(a, (e => {
                  y.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                })),
                children: (0, o.jsx)(Dx, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: l,
                  onPointerDownOutside: i,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => y.onOpenChange(!1),
                  children: (0, o.jsx)(G, {
                    role: "listbox",
                    id: y.contentId,
                    "data-state": y.open ? "open" : "closed",
                    dir: y.dir,
                    onContextMenu: e => e.preventDefault(),
                    ...x,
                    ...X,
                    onPlaced: () => A(!0),
                    ref: C,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...x.style
                    },
                    onKeyDown: ew(x.onKeyDown, (e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || B(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        let t = _().filter((e => !e.disabled)).map((e => e.ref.current));
                        if (["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                          const r = e.target,
                            n = t.indexOf(r);
                          t = t.slice(n + 1)
                        }
                        setTimeout((() => I(t))), e.preventDefault()
                      }
                    }))
                  })
                })
              })
            })
          })
        }));
      mM.displayName = "SelectContentImpl";
      var wM = m.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          onPlaced: n,
          ...a
        } = e, l = rM(fM, r), i = gM(fM, r), [s, c] = m.useState(null), [d, u] = m.useState(null), f = we(t, (e => u(e))), h = YR(r), v = m.useRef(!1), p = m.useRef(!0), {
          viewport: g,
          selectedItem: w,
          selectedItemText: x,
          focusSelectedItem: y
        } = i, b = m.useCallback((() => {
          if (l.trigger && l.valueNode && s && d && g && w && x) {
            const e = l.trigger.getBoundingClientRect(),
              t = d.getBoundingClientRect(),
              r = l.valueNode.getBoundingClientRect(),
              o = x.getBoundingClientRect();
            if ("rtl" !== l.dir) {
              const n = o.left - t.left,
                a = r.left - n,
                l = e.left - a,
                i = e.width + l,
                c = Math.max(i, t.width),
                d = window.innerWidth - vM,
                u = Jm(a, [vM, d - c]);
              s.style.minWidth = i + "px", s.style.left = u + "px"
            } else {
              const n = t.right - o.right,
                a = window.innerWidth - r.right - n,
                l = window.innerWidth - e.right - a,
                i = e.width + l,
                c = Math.max(i, t.width),
                d = window.innerWidth - vM,
                u = Jm(a, [vM, d - c]);
              s.style.minWidth = i + "px", s.style.right = u + "px"
            }
            const a = h(),
              i = window.innerHeight - 2 * vM,
              c = g.scrollHeight,
              u = window.getComputedStyle(d),
              f = parseInt(u.borderTopWidth, 10),
              p = parseInt(u.paddingTop, 10),
              m = parseInt(u.borderBottomWidth, 10),
              y = f + p + c + parseInt(u.paddingBottom, 10) + m,
              b = Math.min(5 * w.offsetHeight, y),
              j = window.getComputedStyle(g),
              R = parseInt(j.paddingTop, 10),
              M = parseInt(j.paddingBottom, 10),
              C = e.top + e.height / 2 - vM,
              L = i - C,
              S = w.offsetHeight / 2,
              E = f + p + (w.offsetTop + S),
              P = y - E;
            if (E <= C) {
              const e = w === a[a.length - 1].ref.current;
              s.style.bottom = "0px";
              const t = d.clientHeight - g.offsetTop - g.offsetHeight,
                r = E + Math.max(L, S + (e ? M : 0) + t + m);
              s.style.height = r + "px"
            } else {
              const e = w === a[0].ref.current;
              s.style.top = "0px";
              const t = Math.max(C, f + g.offsetTop + (e ? R : 0) + S) + P;
              s.style.height = t + "px", g.scrollTop = E - C + g.offsetTop
            }
            s.style.margin = `${vM}px 0`, s.style.minHeight = b + "px", s.style.maxHeight = i + "px", n?.(), requestAnimationFrame((() => v.current = !0))
          }
        }), [h, l.trigger, l.valueNode, s, d, g, w, x, l.dir, n]);
        sw((() => b()), [b]);
        const [j, R] = m.useState();
        sw((() => {
          d && R(window.getComputedStyle(d).zIndex)
        }), [d]);
        const M = m.useCallback((e => {
          e && !0 === p.current && (b(), y?.(), p.current = !1)
        }), [b, y]);
        return (0, o.jsx)(yM, {
          scope: r,
          contentWrapper: s,
          shouldExpandOnScrollRef: v,
          onScrollButtonChange: M,
          children: (0, o.jsx)("div", {
            ref: c,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: j
            },
            children: (0, o.jsx)(Me.div, {
              ...a,
              ref: f,
              style: {
                boxSizing: "border-box",
                maxHeight: "100%",
                ...a.style
              }
            })
          })
        })
      }));
      wM.displayName = "SelectItemAlignedPosition";
      var xM = m.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          align: n = "start",
          collisionPadding: a = vM,
          ...l
        } = e, i = eM(r);
        return (0, o.jsx)(xb, {
          ...i,
          ...l,
          ref: t,
          align: n,
          collisionPadding: a,
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
      xM.displayName = "SelectPopperPosition";
      var [yM, bM] = QR(fM, {}), jM = "SelectViewport", RM = m.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          nonce: n,
          ...a
        } = e, l = gM(jM, r), i = bM(jM, r), s = we(t, l.onViewportChange), c = m.useRef(0);
        return (0, o.jsxs)(o.Fragment, {
          children: [(0, o.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: n
          }), (0, o.jsx)($R.Slot, {
            scope: r,
            children: (0, o.jsx)(Me.div, {
              "data-radix-select-viewport": "",
              role: "presentation",
              ...a,
              ref: s,
              style: {
                position: "relative",
                flex: 1,
                overflow: "auto",
                ...a.style
              },
              onScroll: ew(a.onScroll, (e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: r,
                    shouldExpandOnScrollRef: n
                  } = i;
                if (n?.current && r) {
                  const e = Math.abs(c.current - t.scrollTop);
                  if (e > 0) {
                    const n = window.innerHeight - 2 * vM,
                      o = parseFloat(r.style.minHeight),
                      a = parseFloat(r.style.height),
                      l = Math.max(o, a);
                    if (l < n) {
                      const o = l + e,
                        a = Math.min(n, o),
                        i = o - a;
                      r.style.height = a + "px", "0px" === r.style.bottom && (t.scrollTop = i > 0 ? i : 0, r.style.justifyContent = "flex-end")
                    }
                  }
                }
                c.current = t.scrollTop
              }))
            })
          })]
        })
      }));
      RM.displayName = jM;
      var MM = "SelectGroup",
        [CM, LM] = QR(MM);
      m.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, a = Ox();
        return (0, o.jsx)(CM, {
          scope: r,
          id: a,
          children: (0, o.jsx)(Me.div, {
            role: "group",
            "aria-labelledby": a,
            ...n,
            ref: t
          })
        })
      })).displayName = MM;
      var SM = "SelectLabel";
      m.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, a = LM(SM, r);
        return (0, o.jsx)(Me.div, {
          id: a.id,
          ...n,
          ref: t
        })
      })).displayName = SM;
      var EM = "SelectItem",
        [PM, _M] = QR(EM),
        DM = m.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            value: n,
            disabled: a = !1,
            textValue: l,
            ...i
          } = e, s = rM(EM, r), c = gM(EM, r), d = s.value === n, [u, f] = m.useState(l ?? ""), [h, v] = m.useState(!1), p = we(t, (e => c.itemRefCallback?.(e, n, a))), g = Ox(), w = () => {
            a || (s.onValueChange(n), s.onOpenChange(!1))
          };
          if ("" === n) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, o.jsx)(PM, {
            scope: r,
            value: n,
            disabled: a,
            textId: g,
            isSelected: d,
            onItemTextChange: m.useCallback((e => {
              f((t => t || (e?.textContent ?? "").trim()))
            }), []),
            children: (0, o.jsx)($R.ItemSlot, {
              scope: r,
              value: n,
              disabled: a,
              textValue: u,
              children: (0, o.jsx)(Me.div, {
                role: "option",
                "aria-labelledby": g,
                "data-highlighted": h ? "" : void 0,
                "aria-selected": d && h,
                "data-state": d ? "checked" : "unchecked",
                "aria-disabled": a || void 0,
                "data-disabled": a ? "" : void 0,
                tabIndex: a ? void 0 : -1,
                ...i,
                ref: p,
                onFocus: ew(i.onFocus, (() => v(!0))),
                onBlur: ew(i.onBlur, (() => v(!1))),
                onPointerUp: ew(i.onPointerUp, w),
                onPointerMove: ew(i.onPointerMove, (e => {
                  a ? c.onItemLeave?.() : e.currentTarget.focus({
                    preventScroll: !0
                  })
                })),
                onPointerLeave: ew(i.onPointerLeave, (e => {
                  e.currentTarget === document.activeElement && c.onItemLeave?.()
                })),
                onKeyDown: ew(i.onKeyDown, (e => {
                  "" !== c.searchRef?.current && " " === e.key || (WR.includes(e.key) && w(), " " === e.key && e.preventDefault())
                }))
              })
            })
          })
        }));
      DM.displayName = EM;
      var AM = "SelectItemText",
        TM = m.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: a,
            ...l
          } = e, i = rM(AM, r), s = gM(AM, r), c = _M(AM, r), d = oM(AM, r), [u, f] = m.useState(null), h = we(t, (e => f(e)), c.onItemTextChange, (e => s.itemTextRefCallback?.(e, c.value, c.disabled))), v = u?.textContent, p = m.useMemo((() => (0, o.jsx)("option", {
            value: c.value,
            disabled: c.disabled,
            children: v
          }, c.value)), [c.disabled, c.value, v]), {
            onNativeOptionAdd: g,
            onNativeOptionRemove: w
          } = d;
          return sw((() => (g(p), () => w(p))), [g, w, p]), (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(Me.span, {
              id: c.textId,
              ...l,
              ref: h
            }), c.isSelected && i.valueNode && !i.valueNodeHasChildren ? j.createPortal(l.children, i.valueNode) : null]
          })
        }));
      TM.displayName = AM;
      var IM = "SelectItemIndicator";
      m.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return _M(IM, r).isSelected ? (0, o.jsx)(Me.span, {
          "aria-hidden": !0,
          ...n,
          ref: t
        }) : null
      })).displayName = IM;
      var NM = "SelectScrollUpButton";
      m.forwardRef(((e, t) => {
        const r = gM(NM, e.__scopeSelect),
          n = bM(NM, e.__scopeSelect),
          [a, l] = m.useState(!1),
          i = we(t, n.onScrollButtonChange);
        return sw((() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              l(e)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }), [r.viewport, r.isPositioned]), a ? (0, o.jsx)(kM, {
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
      })).displayName = NM;
      var OM = "SelectScrollDownButton";
      m.forwardRef(((e, t) => {
        const r = gM(OM, e.__scopeSelect),
          n = bM(OM, e.__scopeSelect),
          [a, l] = m.useState(!1),
          i = we(t, n.onScrollButtonChange);
        return sw((() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                r = Math.ceil(t.scrollTop) < e;
              l(r)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }), [r.viewport, r.isPositioned]), a ? (0, o.jsx)(kM, {
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
      })).displayName = OM;
      var kM = m.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          onAutoScroll: n,
          ...a
        } = e, l = gM("SelectScrollButton", r), i = m.useRef(null), s = YR(r), c = m.useCallback((() => {
          null !== i.current && (window.clearInterval(i.current), i.current = null)
        }), []);
        return m.useEffect((() => () => c()), [c]), sw((() => {
          const e = s().find((e => e.ref.current === document.activeElement));
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }), [s]), (0, o.jsx)(Me.div, {
          "aria-hidden": !0,
          ...a,
          ref: t,
          style: {
            flexShrink: 0,
            ...a.style
          },
          onPointerDown: ew(a.onPointerDown, (() => {
            null === i.current && (i.current = window.setInterval(n, 50))
          })),
          onPointerMove: ew(a.onPointerMove, (() => {
            l.onItemLeave?.(), null === i.current && (i.current = window.setInterval(n, 50))
          })),
          onPointerLeave: ew(a.onPointerLeave, (() => {
            c()
          }))
        })
      }));
      m.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return (0, o.jsx)(Me.div, {
          "aria-hidden": !0,
          ...n,
          ref: t
        })
      })).displayName = "SelectSeparator";
      var HM = "SelectArrow";

      function BM(e) {
        return "" === e || void 0 === e
      }
      m.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, a = eM(r), l = rM(HM, r), i = gM(HM, r);
        return l.open && "popper" === i.position ? (0, o.jsx)(yb, {
          ...a,
          ...n,
          ref: t
        }) : null
      })).displayName = HM;
      var zM = m.forwardRef(((e, t) => {
        const {
          value: r,
          ...n
        } = e, a = m.useRef(null), l = we(t, a), i = iw(r);
        return m.useEffect((() => {
          const e = a.current,
            t = window.HTMLSelectElement.prototype,
            n = Object.getOwnPropertyDescriptor(t, "value").set;
          if (i !== r && n) {
            const t = new Event("change", {
              bubbles: !0
            });
            n.call(e, r), e.dispatchEvent(t)
          }
        }), [i, r]), (0, o.jsx)(Ce, {
          asChild: !0,
          children: (0, o.jsx)("select", {
            ...n,
            ref: l,
            defaultValue: r
          })
        })
      }));

      function VM(e) {
        const t = nw(e),
          r = m.useRef(""),
          n = m.useRef(0),
          o = m.useCallback((e => {
            const o = r.current + e;
            t(o),
              function e(t) {
                r.current = t, window.clearTimeout(n.current), "" !== t && (n.current = window.setTimeout((() => e("")), 1e3))
              }(o)
          }), [t]),
          a = m.useCallback((() => {
            r.current = "", window.clearTimeout(n.current)
          }), []);
        return m.useEffect((() => () => window.clearTimeout(n.current)), []), [r, o, a]
      }

      function FM(e, t, r) {
        const n = t.length > 1 && Array.from(t).every((e => e === t[0])) ? t[0] : t,
          o = r ? e.indexOf(r) : -1;
        let a = (l = e, i = Math.max(o, 0), l.map(((e, t) => l[(i + t) % l.length])));
        var l, i;
        1 === n.length && (a = a.filter((e => e !== r)));
        const s = a.find((e => e.textValue.toLowerCase().startsWith(n.toLowerCase())));
        return s !== r ? s : void 0
      }
      zM.displayName = "BubbleSelect";
      var GM = aM,
        XM = iM,
        UM = cM,
        qM = dM,
        WM = uM,
        KM = hM,
        $M = RM,
        YM = DM,
        ZM = TM,
        QM = "ScrollArea",
        [JM, eC] = tw(QM),
        [tC, rC] = JM(QM),
        nC = m.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: r,
            type: n = "hover",
            dir: a,
            scrollHideDelay: l = 600,
            ...i
          } = e, [s, c] = m.useState(null), [d, u] = m.useState(null), [f, h] = m.useState(null), [v, p] = m.useState(null), [g, w] = m.useState(null), [x, y] = m.useState(0), [b, j] = m.useState(0), [R, M] = m.useState(!1), [C, L] = m.useState(!1), S = we(t, (e => c(e))), E = lw(a);
          return (0, o.jsx)(tC, {
            scope: r,
            type: n,
            dir: E,
            scrollHideDelay: l,
            scrollArea: s,
            viewport: d,
            onViewportChange: u,
            content: f,
            onContentChange: h,
            scrollbarX: v,
            onScrollbarXChange: p,
            scrollbarXEnabled: R,
            onScrollbarXEnabledChange: M,
            scrollbarY: g,
            onScrollbarYChange: w,
            scrollbarYEnabled: C,
            onScrollbarYEnabledChange: L,
            onCornerWidthChange: y,
            onCornerHeightChange: j,
            children: (0, o.jsx)(Me.div, {
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
      nC.displayName = QM;
      var oC = "ScrollAreaViewport",
        aC = m.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: r,
            children: n,
            nonce: a,
            ...l
          } = e, i = rC(oC, r), s = we(t, m.useRef(null), i.onViewportChange);
          return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: a
            }), (0, o.jsx)(Me.div, {
              "data-radix-scroll-area-viewport": "",
              ...l,
              ref: s,
              style: {
                overflowX: i.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: i.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, o.jsx)("div", {
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
      aC.displayName = oC;
      var lC = "ScrollAreaScrollbar",
        iC = m.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, a = rC(lC, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: l,
            onScrollbarYEnabledChange: i
          } = a, s = "horizontal" === e.orientation;
          return m.useEffect((() => (s ? l(!0) : i(!0), () => {
            s ? l(!1) : i(!1)
          })), [s, l, i]), "hover" === a.type ? (0, o.jsx)(sC, {
            ...n,
            ref: t,
            forceMount: r
          }) : "scroll" === a.type ? (0, o.jsx)(cC, {
            ...n,
            ref: t,
            forceMount: r
          }) : "auto" === a.type ? (0, o.jsx)(dC, {
            ...n,
            ref: t,
            forceMount: r
          }) : "always" === a.type ? (0, o.jsx)(uC, {
            ...n,
            ref: t
          }) : null
        }));
      iC.displayName = lC;
      var sC = m.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, a = rC(lC, e.__scopeScrollArea), [l, i] = m.useState(!1);
          return m.useEffect((() => {
            const e = a.scrollArea;
            let t = 0;
            if (e) {
              const r = () => {
                  window.clearTimeout(t), i(!0)
                },
                n = () => {
                  t = window.setTimeout((() => i(!1)), a.scrollHideDelay)
                };
              return e.addEventListener("pointerenter", r), e.addEventListener("pointerleave", n), () => {
                window.clearTimeout(t), e.removeEventListener("pointerenter", r), e.removeEventListener("pointerleave", n)
              }
            }
          }), [a.scrollArea, a.scrollHideDelay]), (0, o.jsx)(jb, {
            present: r || l,
            children: (0, o.jsx)(dC, {
              "data-state": l ? "visible" : "hidden",
              ...n,
              ref: t
            })
          })
        })),
        cC = m.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, a = rC(lC, e.__scopeScrollArea), l = "horizontal" === e.orientation, i = PC((() => c("SCROLL_END")), 100), [s, c] = ("hidden", d = {
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
          }, m.useReducer(((e, t) => d[e][t] ?? e), "hidden"));
          var d;
          return m.useEffect((() => {
            if ("idle" === s) {
              const e = window.setTimeout((() => c("HIDE")), a.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }), [s, a.scrollHideDelay, c]), m.useEffect((() => {
            const e = a.viewport,
              t = l ? "scrollLeft" : "scrollTop";
            if (e) {
              let r = e[t];
              const n = () => {
                const n = e[t];
                r !== n && (c("SCROLL"), i()), r = n
              };
              return e.addEventListener("scroll", n), () => e.removeEventListener("scroll", n)
            }
          }), [a.viewport, l, c, i]), (0, o.jsx)(jb, {
            present: r || "hidden" !== s,
            children: (0, o.jsx)(uC, {
              "data-state": "hidden" === s ? "hidden" : "visible",
              ...n,
              ref: t,
              onPointerEnter: ew(e.onPointerEnter, (() => c("POINTER_ENTER"))),
              onPointerLeave: ew(e.onPointerLeave, (() => c("POINTER_LEAVE")))
            })
          })
        })),
        dC = m.forwardRef(((e, t) => {
          const r = rC(lC, e.__scopeScrollArea),
            {
              forceMount: n,
              ...a
            } = e,
            [l, i] = m.useState(!1),
            s = "horizontal" === e.orientation,
            c = PC((() => {
              if (r.viewport) {
                const e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                i(s ? e : t)
              }
            }), 10);
          return _C(r.viewport, c), _C(r.content, c), (0, o.jsx)(jb, {
            present: n || l,
            children: (0, o.jsx)(uC, {
              "data-state": l ? "visible" : "hidden",
              ...a,
              ref: t
            })
          })
        })),
        uC = m.forwardRef(((e, t) => {
          const {
            orientation: r = "vertical",
            ...n
          } = e, a = rC(lC, e.__scopeScrollArea), l = m.useRef(null), i = m.useRef(0), [s, c] = m.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), d = RC(s.viewport, s.content), u = {
            ...n,
            sizes: s,
            onSizesChange: c,
            hasThumb: Boolean(d > 0 && d < 1),
            onThumbChange: e => l.current = e,
            onThumbPointerUp: () => i.current = 0,
            onThumbPointerDown: e => i.current = e
          };

          function f(e, t) {
            return function(e, t, r, n = "ltr") {
              const o = MC(r),
                a = t || o / 2,
                l = o - a,
                i = r.scrollbar.paddingStart + a,
                s = r.scrollbar.size - r.scrollbar.paddingEnd - l,
                c = r.content - r.viewport;
              return LC([i, s], "ltr" === n ? [0, c] : [-1 * c, 0])(e)
            }(e, i.current, s, t)
          }
          return "horizontal" === r ? (0, o.jsx)(fC, {
            ...u,
            ref: t,
            onThumbPositionChange: () => {
              if (a.viewport && l.current) {
                const e = CC(a.viewport.scrollLeft, s, a.dir);
                l.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              a.viewport && (a.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              a.viewport && (a.viewport.scrollLeft = f(e, a.dir))
            }
          }) : "vertical" === r ? (0, o.jsx)(hC, {
            ...u,
            ref: t,
            onThumbPositionChange: () => {
              if (a.viewport && l.current) {
                const e = CC(a.viewport.scrollTop, s);
                l.current.style.transform = `translate3d(0, ${e}px, 0)`
              }
            },
            onWheelScroll: e => {
              a.viewport && (a.viewport.scrollTop = e)
            },
            onDragScroll: e => {
              a.viewport && (a.viewport.scrollTop = f(e))
            }
          }) : null
        })),
        fC = m.forwardRef(((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...a
          } = e, l = rC(lC, e.__scopeScrollArea), [i, s] = m.useState(), c = m.useRef(null), d = we(t, c, l.onScrollbarXChange);
          return m.useEffect((() => {
            c.current && s(getComputedStyle(c.current))
          }), [c]), (0, o.jsx)(gC, {
            "data-orientation": "horizontal",
            ...a,
            ref: d,
            sizes: r,
            style: {
              bottom: 0,
              left: "rtl" === l.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === l.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": MC(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, r) => {
              if (l.viewport) {
                const n = l.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(n), SC(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              c.current && l.viewport && i && n({
                content: l.viewport.scrollWidth,
                viewport: l.viewport.offsetWidth,
                scrollbar: {
                  size: c.current.clientWidth,
                  paddingStart: jC(i.paddingLeft),
                  paddingEnd: jC(i.paddingRight)
                }
              })
            }
          })
        })),
        hC = m.forwardRef(((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...a
          } = e, l = rC(lC, e.__scopeScrollArea), [i, s] = m.useState(), c = m.useRef(null), d = we(t, c, l.onScrollbarYChange);
          return m.useEffect((() => {
            c.current && s(getComputedStyle(c.current))
          }), [c]), (0, o.jsx)(gC, {
            "data-orientation": "vertical",
            ...a,
            ref: d,
            sizes: r,
            style: {
              top: 0,
              right: "ltr" === l.dir ? 0 : void 0,
              left: "rtl" === l.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": MC(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, r) => {
              if (l.viewport) {
                const n = l.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(n), SC(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              c.current && l.viewport && i && n({
                content: l.viewport.scrollHeight,
                viewport: l.viewport.offsetHeight,
                scrollbar: {
                  size: c.current.clientHeight,
                  paddingStart: jC(i.paddingTop),
                  paddingEnd: jC(i.paddingBottom)
                }
              })
            }
          })
        })),
        [vC, pC] = JM(lC),
        gC = m.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: r,
            sizes: n,
            hasThumb: a,
            onThumbChange: l,
            onThumbPointerUp: i,
            onThumbPointerDown: s,
            onThumbPositionChange: c,
            onDragScroll: d,
            onWheelScroll: u,
            onResize: f,
            ...h
          } = e, v = rC(lC, r), [p, g] = m.useState(null), w = we(t, (e => g(e))), x = m.useRef(null), y = m.useRef(""), b = v.viewport, j = n.content - n.viewport, R = nw(u), M = nw(c), C = PC(f, 10);

          function L(e) {
            if (x.current) {
              const t = e.clientX - x.current.left,
                r = e.clientY - x.current.top;
              d({
                x: t,
                y: r
              })
            }
          }
          return m.useEffect((() => {
            const e = e => {
              const t = e.target,
                r = p?.contains(t);
              r && R(e, j)
            };
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }), [b, p, j, R]), m.useEffect(M, [n, M]), _C(p, C), _C(v.content, C), (0, o.jsx)(vC, {
            scope: r,
            scrollbar: p,
            hasThumb: a,
            onThumbChange: nw(l),
            onThumbPointerUp: nw(i),
            onThumbPositionChange: M,
            onThumbPointerDown: nw(s),
            children: (0, o.jsx)(Me.div, {
              ...h,
              ref: w,
              style: {
                position: "absolute",
                ...h.style
              },
              onPointerDown: ew(e.onPointerDown, (e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), x.current = p.getBoundingClientRect(), y.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", v.viewport && (v.viewport.style.scrollBehavior = "auto"), L(e))
              })),
              onPointerMove: ew(e.onPointerMove, L),
              onPointerUp: ew(e.onPointerUp, (e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = y.current, v.viewport && (v.viewport.style.scrollBehavior = ""), x.current = null
              }))
            })
          })
        })),
        mC = "ScrollAreaThumb",
        wC = m.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, a = pC(mC, e.__scopeScrollArea);
          return (0, o.jsx)(jb, {
            present: r || a.hasThumb,
            children: (0, o.jsx)(xC, {
              ref: t,
              ...n
            })
          })
        })),
        xC = m.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: r,
            style: n,
            ...a
          } = e, l = rC(mC, r), i = pC(mC, r), {
            onThumbPositionChange: s
          } = i, c = we(t, (e => i.onThumbChange(e))), d = m.useRef(), u = PC((() => {
            d.current && (d.current(), d.current = void 0)
          }), 100);
          return m.useEffect((() => {
            const e = l.viewport;
            if (e) {
              const t = () => {
                if (u(), !d.current) {
                  const t = EC(e, s);
                  d.current = t, s()
                }
              };
              return s(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }), [l.viewport, u, s]), (0, o.jsx)(Me.div, {
            "data-state": i.hasThumb ? "visible" : "hidden",
            ...a,
            ref: c,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...n
            },
            onPointerDownCapture: ew(e.onPointerDownCapture, (e => {
              const t = e.target.getBoundingClientRect(),
                r = e.clientX - t.left,
                n = e.clientY - t.top;
              i.onThumbPointerDown({
                x: r,
                y: n
              })
            })),
            onPointerUp: ew(e.onPointerUp, i.onThumbPointerUp)
          })
        }));
      wC.displayName = mC;
      var yC = "ScrollAreaCorner";
      m.forwardRef(((e, t) => {
        const r = rC(yC, e.__scopeScrollArea),
          n = Boolean(r.scrollbarX && r.scrollbarY);
        return "scroll" !== r.type && n ? (0, o.jsx)(bC, {
          ...e,
          ref: t
        }) : null
      })).displayName = yC;
      var bC = m.forwardRef(((e, t) => {
        const {
          __scopeScrollArea: r,
          ...n
        } = e, a = rC(yC, r), [l, i] = m.useState(0), [s, c] = m.useState(0), d = Boolean(l && s);
        return _C(a.scrollbarX, (() => {
          const e = a.scrollbarX?.offsetHeight || 0;
          a.onCornerHeightChange(e), c(e)
        })), _C(a.scrollbarY, (() => {
          const e = a.scrollbarY?.offsetWidth || 0;
          a.onCornerWidthChange(e), i(e)
        })), d ? (0, o.jsx)(Me.div, {
          ...n,
          ref: t,
          style: {
            width: l,
            height: s,
            position: "absolute",
            right: "ltr" === a.dir ? 0 : void 0,
            left: "rtl" === a.dir ? 0 : void 0,
            bottom: 0,
            ...e.style
          }
        }) : null
      }));

      function jC(e) {
        return e ? parseInt(e, 10) : 0
      }

      function RC(e, t) {
        const r = e / t;
        return isNaN(r) ? 0 : r
      }

      function MC(e) {
        const t = RC(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          n = (e.scrollbar.size - r) * t;
        return Math.max(n, 18)
      }

      function CC(e, t, r = "ltr") {
        const n = MC(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          a = t.scrollbar.size - o,
          l = t.content - t.viewport,
          i = a - n,
          s = Jm(e, "ltr" === r ? [0, l] : [-1 * l, 0]);
        return LC([0, l], [0, i])(s)
      }

      function LC(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function SC(e, t) {
        return e > 0 && e < t
      }
      var EC = (e, t = (() => {})) => {
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
            l = r.left !== a.left,
            i = r.top !== a.top;
          (l || i) && t(), r = a, n = window.requestAnimationFrame(o)
        }(), () => window.cancelAnimationFrame(n)
      };

      function PC(e, t) {
        const r = nw(e),
          n = m.useRef(0);
        return m.useEffect((() => () => window.clearTimeout(n.current)), []), m.useCallback((() => {
          window.clearTimeout(n.current), n.current = window.setTimeout(r, t)
        }), [r, t])
      }

      function _C(e, t) {
        const r = nw(t);
        sw((() => {
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
      var DC = nC,
        AC = aC,
        TC = iC,
        IC = wC;
      const NC = (0, m.forwardRef)((({
          children: e,
          label: t,
          hint: r,
          placeholder: n,
          description: a,
          testId: l,
          hideLabel: s,
          hideDescription: c,
          hideRequiredAsterisk: d,
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
          className: R,
          ariaLabelledBy: M
        }, L) => {
          const S = Ic((0, m.useRef)(null), L),
            E = (0, m.useId)(),
            P = (0, m.useId)(),
            [_ = !1, D] = Hc({
              prop: g,
              defaultProp: w,
              onChange: x
            });
          return (0, o.jsxs)("div", {
            className: i("foundry_uaq1gw0", R),
            children: [(t && !s || r) && (0, o.jsxs)("div", {
              className: "foundry_uaq1gw1",
              children: [(0, o.jsx)(C, {
                enabled: !!s,
                children: (0, o.jsx)(K, {
                  className: "foundry_uaq1gw2",
                  asChild: !0,
                  children: (0, o.jsxs)("label", {
                    id: E,
                    children: [t, y && !d && (0, o.jsx)("span", {
                      className: "foundry_uaq1gw4",
                      children: "*"
                    })]
                  })
                })
              }), r && (0, o.jsx)(te, {
                className: "foundry_uaq1gw3",
                children: r
              })]
            }), (0, o.jsxs)(GM, {
              required: y,
              disabled: b,
              open: _,
              onOpenChange: () => D(!j && !_),
              value: h,
              defaultValue: v,
              onValueChange: p,
              children: [(0, o.jsxs)(XM, {
                className: i("foundry_uaq1gw5 foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdf", !!f && "foundry_uaq1gw7", j && "foundry_uaq1gw6"),
                ref: S,
                "data-testid": l,
                "aria-activedescendant": h,
                "aria-labelledby": M || E,
                "aria-controls": P,
                children: [(0, o.jsx)("span", {
                  className: "foundry_uaq1gw8",
                  children: (0, o.jsx)(UM, {
                    placeholder: n,
                    "aria-label": h
                  })
                }), (0, o.jsx)(qM, {
                  asChild: !0,
                  className: i("foundry_uaq1gw9", (j || b) && "foundry_uaq1gwa"),
                  children: _ ? (0, o.jsx)(ft, {
                    size: "LG",
                    label: ""
                  }) : (0, o.jsx)(st, {
                    size: "LG",
                    label: ""
                  })
                })]
              }), (0, o.jsx)(WM, {
                children: (0, o.jsx)(KM, {
                  id: P,
                  position: "popper",
                  sideOffset: 8,
                  align: "center",
                  className: "foundry_uaq1gwb",
                  children: (0, o.jsxs)(DC, {
                    className: "foundry_uaq1gwj",
                    type: "auto",
                    children: [(0, o.jsx)($M, {
                      className: i("foundry_uaq1gwc", u && "foundry_uaq1gwd"),
                      asChild: !0,
                      children: (0, o.jsx)(AC, {
                        className: "foundry_uaq1gwk",
                        children: e
                      })
                    }), (0, o.jsx)(TC, {
                      className: "foundry_uaq1gwl",
                      orientation: "vertical",
                      children: (0, o.jsx)(IC, {
                        className: "foundry_uaq1gwm"
                      })
                    })]
                  })
                })
              })]
            }), a && (0, o.jsx)(C, {
              enabled: !!f || c,
              children: (0, o.jsx)(K, {
                className: "foundry_uaq1gwf",
                children: a
              })
            }), f && (0, o.jsxs)(K, {
              appearance: "bold",
              className: "foundry_uaq1gwg",
              children: [(0, o.jsx)(Ia, {
                size: "MD",
                label: "",
                className: "foundry_uaq1gwh"
              }), f]
            })]
          })
        })),
        OC = (0, m.forwardRef)((({
          label: e,
          value: t,
          icon: r,
          iconLabel: a,
          iconPosition: l,
          isDisabled: i,
          testId: s
        }, c) => {
          const d = Ic((0, m.useRef)(null), c),
            u = r && n[r];
          return (0, o.jsxs)(YM, {
            value: t,
            className: "foundry_uaq1gwe foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdf",
            ref: d,
            disabled: i,
            "data-testid": s,
            children: [u && "left" === l && (0, o.jsx)(u, {
              label: a || "",
              size: "LG"
            }), (0, o.jsx)(ZM, {
              children: e
            }), u && "right" === l && (0, o.jsx)(u, {
              label: a || "",
              size: "LG",
              className: "foundry_uaq1gwi"
            })]
          })
        }))
    }
  }
]);