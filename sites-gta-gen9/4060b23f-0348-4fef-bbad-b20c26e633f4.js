try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "4060b23f-0348-4fef-bbad-b20c26e633f4", e._sentryDebugIdIdentifier = "sentry-dbid-4060b23f-0348-4fef-bbad-b20c26e633f4")
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
  [1287, 2934, 3059], {
    71554(e, a, t) {
      function r(e) {
        var a = function(e) {
          if ("object" != typeof e || !e) return e;
          var a = e[Symbol.toPrimitive];
          if (void 0 !== a) {
            var t = a.call(e, "string");
            if ("object" != typeof t) return t;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof a ? a : String(a)
      }

      function n(e, a) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          a && (r = r.filter(function(a) {
            return Object.getOwnPropertyDescriptor(e, a).enumerable
          })), t.push.apply(t, r)
        }
        return t
      }

      function s(e) {
        for (var a = 1; a < arguments.length; a++) {
          var t = null != arguments[a] ? arguments[a] : {};
          a % 2 ? n(Object(t), !0).forEach(function(a) {
            var n, s, i;
            n = e, s = a, i = t[a], (s = r(s)) in n ? Object.defineProperty(n, s, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[s] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : n(Object(t)).forEach(function(a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
          })
        }
        return e
      }

      function i(e, a) {
        var t = {};
        for (var r in e) t[r] = a(e[r], r);
        return t
      }
      t.d(a, {
        c: () => c
      });
      var o = (e, a, t) => {
          for (var r of Object.keys(e)) {
            var n;
            if (e[r] !== (null !== (n = a[r]) && void 0 !== n ? n : t[r])) return !1
          }
          return !0
        },
        c = e => {
          var a = a => {
            var t = e.defaultClassName,
              r = s(s({}, e.defaultVariants), a);
            for (var n in r) {
              var i, c = null !== (i = r[n]) && void 0 !== i ? i : e.defaultVariants[n];
              if (null != c) {
                var d = c;
                "boolean" == typeof d && (d = !0 === d ? "true" : "false");
                var l = e.variantClassNames[n][d];
                l && (t += " " + l)
              }
            }
            for (var [f, m] of e.compoundVariants) o(f, r, e.defaultVariants) && (t += " " + m);
            return t
          };
          return a.variants = () => Object.keys(e.variantClassNames), a.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return i(e.variantClassNames, e => i(e, e => e.split(" ")[0]))
            }
          }, a
        }
    },
    73904(e, a, t) {
      t.d(a, {
        YT: () => i,
        lv: () => o,
        Ay: () => c
      });
      var r = t(39793),
        n = t(69088);
      var s = t(81270);
      var i = function(e) {
          return e.small = "small", e.large = "large", e
        }({}),
        o = function(e) {
          return e.pc = "pc", e.pcAlt = "pcalt", e.ps4 = "ps4", e.ps5 = "ps5", e.ps = "ps", e.np = "np", e.xboxOne = "xboxone", e.xboxSeries = "xboxsx", e.xbox = "xbl", e
        }({});
      const c = ({
        tagSize: e,
        platform: a,
        className: t = ""
      }) => {
        const {
          src: i,
          alt: o
        } = ((e, a) => {
          const t = "small" === a;
          switch (e) {
            case "pc":
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/91b881fc47ab8f61e9d3fbb515272656.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9822b4be8e173b12a152443a538ee613.svg", alt: "PC Legacy"
              };
            case "pcalt":
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b0c35912b602cae2ecdacb21a992ca7.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0f7ec13ed3fbe1c1389f38d189869ada.svg", alt: "PC Enhanced"
              };
            case "ps4":
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6054f77c4450b075b6059eda658a510d.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/941a1141a404ed211f7d23ed36ccee23.svg", alt: "PS4"
              };
            case "ps5":
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c577e2612120d70330b797e6ee5487d9.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04d319f216248f3df7f9727df641b832.svg", alt: "PS5"
              };
            case "xboxone":
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c8ee10e269f42d96c58c1eb016717e1.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e18ef78074a128424a94ab6313dd332.svg", alt: "Xbox One"
              };
            case "xboxsx":
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61f1cfebde0508725354fa6c2bdda0b4.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c91f19b5ea19868e280034220acf6740.svg", alt: "Xbox Series X|S"
              };
            case "ps":
            case "np":
              return {
                src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9360dcc4d2c470d84e308ad6b5e4c037.svg", alt: "PS"
              };
            case "xbl":
              return {
                src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c0834bf9f8603f0af3841a1d42cff529.svg", alt: "Xbox"
              };
            default:
              return {
                src: "", alt: ""
              }
          }
        })(a, e);
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("img", {
            className: (0, s.default)("rockstargames-sites-gta-gen9b0ff0045ed0326a46ca1e0867d2050c1", t),
            "data-testid": "platform-tag",
            "data-platform": a,
            "data-tag-size": e,
            src: i,
            alt: "",
            "aria-hidden": !0
          }), (0, r.jsx)(n.s6, {
            children: o
          })]
        })
      }
    },
    87335(e, a, t) {
      t.r(a), t.d(a, {
        RpCategory: () => d,
        rpCategoryTestIds: () => c
      });
      var r = t(39793),
        n = t(93082),
        s = t(33949);
      var i = t(81270);
      const o = e => e < 100 ? "#2d6eb9" : e > 99 && e < 500 ? "#b482619a" : e > 499 && e < 750 ? "#9699a1" : "#D6B563",
        c = {
          RANK_VALUE: "rpCategory:rankValue"
        },
        d = (0, n.forwardRef)(function({
          rank: e,
          size: a = "large",
          className: t,
          alt: n,
          testId: d,
          ...l
        }, f) {
          const m = o(e),
            p = (0, s.mergeProps)(l, {
              className: (0, i.default)("rockstargames-sites-gta-gen9f54750ef62f8600000c94f0caba85986", t),
              "data-testid": d
            });
          return (0, r.jsxs)("div", {
            "data-size": a,
            ref: f,
            ...p,
            children: [(0, r.jsx)("svg", {
              role: "svg",
              "aria-label": n,
              className: "rockstargames-sites-gta-gen9a3beb1e9c88e2938879ea4df25b63eb1",
              "data-rank": o(e),
              "data-testid": "rp-icon",
              width: "44",
              height: "44",
              viewBox: "0 0 44 44",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, r.jsx)("path", {
                d: "M21.8679 0C9.79195 0 0 9.79195 0 21.8679C0 33.9438 9.79195 43.7358 21.8679 43.7358C33.9438 43.7358 43.7358 33.9438 43.7358 21.8679C43.7358 9.79195 33.9438 0 21.8679 0ZM13.6796 17.4457H30.2506C30.4814 20.3007 30.4935 23.508 30.1048 26.9461H13.7889C13.4123 23.4958 13.4244 20.2885 13.6674 17.4457H13.6796ZM33.9681 17.4457H39.508C39.8603 18.8671 40.0668 20.3371 40.0668 21.8679C40.0668 23.6295 39.7995 25.3424 39.3379 26.9582H33.8102C34.1868 23.5201 34.1868 20.325 33.9681 17.4579V17.4457ZM38.208 13.8618H33.5793C33.1541 10.9947 32.5588 8.56492 31.9757 6.68185C34.6363 8.46773 36.7866 10.9582 38.208 13.8618ZM27.2863 4.42217C27.8208 5.73424 29.0721 9.09947 29.8132 13.8618H14.1169C14.9066 8.89294 16.2308 5.46697 16.7046 4.34928C18.3447 3.86333 20.0699 3.59605 21.8679 3.59605C23.7509 3.59605 25.5733 3.88762 27.2863 4.42217ZM12.0273 6.51177C11.432 8.40699 10.8003 10.8975 10.3629 13.8618H5.52772C6.99772 10.861 9.24525 8.32194 12.0273 6.51177ZM4.21564 17.4457H9.94989C9.71906 20.325 9.71906 23.508 10.0714 26.9461H4.38573C3.91192 25.3303 3.6568 23.6295 3.6568 21.8557C3.6568 20.325 3.86333 18.855 4.21564 17.4336V17.4457ZM5.84358 30.5421H10.5816C10.9704 32.7411 11.5049 35.0129 12.246 37.3576C9.57327 35.6811 7.35004 33.3364 5.84358 30.5421ZM16.8626 39.4229C15.672 36.3614 14.8459 33.385 14.3235 30.5421H29.5581C29.0235 33.3728 28.1974 36.3371 27.0068 39.3865C25.3789 39.8724 23.6538 40.1397 21.8679 40.1397C20.082 40.1397 18.4541 39.8846 16.8626 39.4229ZM31.6355 37.2604C32.3645 34.9522 32.9112 32.7168 33.2999 30.5421H37.88C36.3979 33.2756 34.2354 35.5839 31.6355 37.2604Z",
                fill: m
              })
            }), (0, r.jsx)("span", {
              className: "rockstargames-sites-gta-gen9d9ea5cdf174033003a8670f31ae66a59",
              "data-testid": c.RANK_VALUE,
              children: e
            })]
          })
        })
    },
    76475(e, a, t) {
      t.r(a), t.d(a, {
        Avatar: () => b,
        Content: () => h,
        PlatformTag: () => y,
        PlatformTagSizes: () => c.YT,
        Platforms: () => c.lv,
        RankContent: () => _,
        Root: () => u,
        RpCategory: () => k,
        TextContent: () => w,
        TopRow: () => v,
        UserName: () => x
      });
      var r = t(39793),
        n = t(93082),
        s = t(69088),
        i = t(33949),
        o = t(81270),
        c = t(73904),
        d = t(87335),
        l = t(3018),
        f = t(42909);
      const m = (0, f.defineMessages)({
          character_card_a11y_intro: {
            id: "character_card_a11y_intro",
            description: "The a11y intro for the charcter card.",
            defaultMessage: "Character Card:"
          },
          character_card_a11y_player: {
            id: "character_card_a11y_player",
            description: "The a11y player name for the charcter card.",
            defaultMessage: "Player {player}."
          },
          character_card_a11y_rank: {
            id: "character_card_a11y_rank",
            description: "The a11y rank for the charcter card.",
            defaultMessage: "Rank {rank}."
          }
        }),
        p = "rockstargames-sites-gta-gen9b2d75ee6d468c7fde9ad28ba90ca2804",
        g = (0, n.forwardRef)(function({
          children: e,
          className: a,
          testId: t,
          ...n
        }, c) {
          const {
            formatMessage: d
          } = (0, f.useIntl)(), l = (0, i.mergeProps)(n, {
            "data-testid": t,
            className: (0, o.default)("rockstargames-sites-gta-gen9d738b88fa09e0960678501900af6dae1", a)
          });
          return (0, r.jsxs)("div", {
            ref: c,
            ...l,
            children: [(0, r.jsx)(s.s6, {
              children: d(m.character_card_a11y_intro)
            }), e]
          })
        }),
        u = (0, l.g)(g),
        b = (0, n.forwardRef)(function({
          src: e,
          alt: a,
          testId: s,
          ...o
        }, c) {
          const [d, l] = (0, n.useState)(e), f = (0, i.mergeProps)(o, {
            className: "rockstargames-sites-gta-gen9a0e1daf7fc3c029353d5ef13f291348f",
            "data-testid": s
          });
          return e ? (0, r.jsx)("div", {
            ref: c,
            ...f,
            children: (0, r.jsx)("img", {
              className: p,
              src: d,
              alt: a ?? "",
              onError: () => l(t(14804)),
              "aria-hidden": !a
            })
          }) : (0, r.jsx)("div", {
            ref: c,
            ...f,
            children: (0, r.jsx)("img", {
              className: p,
              src: t(14804),
              alt: a ?? "",
              "aria-hidden": !a
            })
          })
        }),
        h = (0, n.forwardRef)(function({
          asChild: e,
          testId: a,
          className: t,
          ...n
        }, c) {
          const d = e ? s.DX : "div",
            l = (0, i.mergeProps)(n, {
              className: (0, o.default)("rockstargames-sites-gta-gen9fbe57172570573357e040787d9307835", t),
              "data-testid": a
            });
          return (0, r.jsx)(d, {
            ref: c,
            ...l
          })
        }),
        v = (0, n.forwardRef)(function({
          children: e,
          testId: a,
          ...t
        }, n) {
          const s = (0, i.mergeProps)(t, {
            className: "rockstargames-sites-gta-gen9d9b917b7fb3a2b20d4af0d526ddbb8ff",
            "data-testid": a
          });
          return (0, r.jsx)("div", {
            ref: n,
            ...s,
            children: e
          })
        }),
        y = ({
          testId: e,
          ...a
        }) => {
          const t = (0, i.mergeProps)(a, {
            "data-testid": e
          });
          return (0, r.jsx)(c.Ay, {
            ...t
          })
        },
        x = (0, n.forwardRef)(function({
          children: e,
          testId: a,
          userName: t,
          ...n
        }, o) {
          const {
            formatMessage: c
          } = (0, f.useIntl)(), d = (0, i.mergeProps)(n, {
            "data-testid": a
          });
          return (0, r.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9cd5023e2864561e1f962ac435e70156b",
            "data-size": "small",
            ...d,
            ref: o,
            children: [(0, r.jsx)(s.s6, {
              children: c(m.character_card_a11y_player, {
                player: t
              })
            }), (0, r.jsx)("div", {
              "aria-hidden": !0,
              children: e
            })]
          })
        }),
        _ = (0, n.forwardRef)(function({
          testId: e,
          children: a,
          ...t
        }, n) {
          const s = (0, i.mergeProps)(t, {
            "data-testid": e
          });
          return (0, r.jsx)("div", {
            ...s,
            ref: n,
            children: a
          })
        }),
        k = ({
          testId: e,
          ...a
        }) => {
          const {
            formatMessage: t
          } = (0, f.useIntl)(), n = (0, i.mergeProps)(a, {
            "data-testid": e
          });
          return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(s.s6, {
              children: t(m.character_card_a11y_rank, {
                rank: a.rank
              })
            }), (0, r.jsx)(d.RpCategory, {
              ...n,
              "aria-hidden": !0
            })]
          })
        },
        w = (0, n.forwardRef)(function({
          asChild: e,
          children: a,
          testId: t,
          ...n
        }, o) {
          const c = e ? s.DX : "div",
            d = (0, i.mergeProps)(n, {
              className: "rockstargames-sites-gta-gen9e8daa457f5b09f3a79915a1355aa3332",
              "data-testid": t
            });
          return (0, r.jsx)(c, {
            ref: o,
            ...d,
            children: a
          })
        })
    },
    14804(e) {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    },
    69088(e, a, t) {
      t.d(a, {
        DX: () => r.DX,
        xV: () => r.xV,
        s6: () => o
      });
      var r = t(17172),
        n = t(39793),
        s = t(93082),
        i = t(84045);
      const o = ({
        enabled: e = !0,
        ...a
      }) => {
        const t = e ? i.s6 : s.Fragment;
        return (0, n.jsx)(t, {
          ...a
        })
      }
    },
    64239(e, a, t) {
      t.d(a, {
        s: () => s
      });
      var r = t(93082);

      function n(e, a) {
        if ("function" == typeof e) return e(a);
        null != e && (e.current = a)
      }

      function s(...e) {
        return r.useCallback(function(...e) {
          return a => {
            let t = !1;
            const r = e.map(e => {
              const r = n(e, a);
              return t || "function" != typeof r || (t = !0), r
            });
            if (t) return () => {
              for (let a = 0; a < r.length; a++) {
                const t = r[a];
                "function" == typeof t ? t() : n(e[a], null)
              }
            }
          }
        }(...e), e)
      }
    },
    13165(e, a, t) {
      t.d(a, {
        hO: () => c,
        sG: () => o
      });
      var r = t(93082),
        n = t(84017),
        s = t(17172),
        i = t(39793),
        o = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, a) => {
          const t = (0, s.TL)(`Primitive.${a}`),
            n = r.forwardRef((e, r) => {
              const {
                asChild: n,
                ...s
              } = e, o = n ? t : a;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(o, {
                ...s,
                ref: r
              })
            });
          return n.displayName = `Primitive.${a}`, {
            ...e,
            [a]: n
          }
        }, {});

      function c(e, a) {
        e && n.flushSync(() => e.dispatchEvent(a))
      }
    },
    17172(e, a, t) {
      let r;
      t.d(a, {
        DX: () => o,
        Dc: () => d,
        TL: () => i,
        xV: () => l
      });
      var n = t(93082),
        s = t(64239);

      function i(e) {
        const a = n.forwardRef((a, t) => {
          let {
            children: r,
            ...i
          } = a, o = null, d = !1;
          const l = [];
          p(r) && "function" == typeof b && (r = b(r._payload)), n.Children.forEach(r, e => {
            if (a = e, n.isValidElement(a) && "function" == typeof a.type && "__radixId" in a.type && a.type.__radixId === c) {
              d = !0;
              const a = e;
              let t = "child" in a.props ? a.props.child : a.props.children;
              p(t) && "function" == typeof b && (t = b(t._payload)), o = f(a, t), l.push(o?.props?.children)
            } else l.push(e);
            var a
          }), o ? o = n.cloneElement(o, void 0, l) : !d && 1 === n.Children.count(r) && n.isValidElement(r) && (o = r);
          const m = o ? function(e) {
              let a = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                t = a && "isReactWarning" in a && a.isReactWarning;
              return t ? e.ref : (a = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = a && "isReactWarning" in a && a.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
            }(o) : void 0,
            h = (0, s.s)(t, m);
          if (!o) {
            if (r || 0 === r) throw new Error(d ? u(e) : g(e));
            return r
          }
          const v = function(e, a) {
            const t = {
              ...a
            };
            for (const r in a) {
              const n = e[r],
                s = a[r];
              /^on[A-Z]/.test(r) ? n && s ? t[r] = (...e) => {
                const a = s(...e);
                return n(...e), a
              } : n && (t[r] = n) : "style" === r ? t[r] = {
                ...n,
                ...s
              } : "className" === r && (t[r] = [n, s].filter(Boolean).join(" "))
            }
            return {
              ...e,
              ...t
            }
          }(i, o.props ?? {});
          return o.type !== n.Fragment && (v.ref = t ? h : m), n.cloneElement(o, v)
        });
        return a.displayName = `${e}.Slot`, a
      }
      var o = i("Slot"),
        c = Symbol.for("radix.slottable");

      function d(e) {
        const a = e => "child" in e ? e.children(e.child) : e.children;
        return a.displayName = `${e}.Slottable`, a.__radixId = c, a
      }
      var l = d("Slottable"),
        f = (e, a) => {
          if ("child" in e.props) {
            const a = e.props.child;
            return n.isValidElement(a) ? n.cloneElement(a, void 0, e.props.children(a.props.children)) : null
          }
          return n.isValidElement(a) ? a : null
        },
        m = Symbol.for("react.lazy");

      function p(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === m && "_payload" in e && "object" == typeof(a = e._payload) && null !== a && "then" in a;
        var a
      }
      var g = e => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,
        u = e => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,
        b = (r || (r = t.t(n, 2)))[" use ".trim().toString()]
    },
    84045(e, a, t) {
      t.d(a, {
        Qg: () => i,
        bL: () => c,
        s6: () => o
      });
      var r = t(93082),
        n = t(13165),
        s = t(39793),
        i = Object.freeze({
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal"
        }),
        o = r.forwardRef((e, a) => (0, s.jsx)(n.sG.span, {
          ...e,
          ref: a,
          style: {
            ...i,
            ...e.style
          }
        }));
      o.displayName = "VisuallyHidden";
      var c = o
    },
    73059(e, a, t) {
      t.d(a, {
        A: () => i
      });
      var r = t(37015),
        n = t(20219),
        s = t(20212);

      function i(e) {
        let {
          swiper: a,
          extendParams: t,
          on: i
        } = e;
        t({
          a11y: {
            enabled: !0,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            slideLabelMessage: "{{index}} / {{slidesLength}}",
            containerMessage: null,
            containerRoleDescriptionMessage: null,
            containerRole: null,
            itemRoleDescriptionMessage: null,
            slideRole: "group",
            id: null,
            scrollOnFocus: !0
          }
        }), a.a11y = {
          clicked: !1
        };
        let o, c, d = null,
          l = (new Date).getTime();

        function f(e) {
          const a = d;
          0 !== a.length && (0, s.s)(a, e)
        }

        function m(e) {
          (e = (0, s.m)(e)).forEach(e => {
            e.setAttribute("tabIndex", "0")
          })
        }

        function p(e) {
          (e = (0, s.m)(e)).forEach(e => {
            e.setAttribute("tabIndex", "-1")
          })
        }

        function g(e, a) {
          (e = (0, s.m)(e)).forEach(e => {
            e.setAttribute("role", a)
          })
        }

        function u(e, a) {
          (e = (0, s.m)(e)).forEach(e => {
            e.setAttribute("aria-roledescription", a)
          })
        }

        function b(e, a) {
          (e = (0, s.m)(e)).forEach(e => {
            e.setAttribute("aria-label", a)
          })
        }

        function h(e) {
          (e = (0, s.m)(e)).forEach(e => {
            e.setAttribute("aria-disabled", !0)
          })
        }

        function v(e) {
          (e = (0, s.m)(e)).forEach(e => {
            e.setAttribute("aria-disabled", !1)
          })
        }

        function y(e) {
          if (13 !== e.keyCode && 32 !== e.keyCode) return;
          const t = a.params.a11y,
            r = e.target;
          if (!a.pagination || !a.pagination.el || r !== a.pagination.el && !a.pagination.el.contains(e.target) || e.target.matches((0, n.c)(a.params.pagination.bulletClass))) {
            if (a.navigation && a.navigation.prevEl && a.navigation.nextEl) {
              const e = (0, s.m)(a.navigation.prevEl);
              (0, s.m)(a.navigation.nextEl).includes(r) && (a.isEnd && !a.params.loop || a.slideNext(), a.isEnd ? f(t.lastSlideMessage) : f(t.nextSlideMessage)), e.includes(r) && (a.isBeginning && !a.params.loop || a.slidePrev(), a.isBeginning ? f(t.firstSlideMessage) : f(t.prevSlideMessage))
            }
            a.pagination && r.matches((0, n.c)(a.params.pagination.bulletClass)) && r.click()
          }
        }

        function x() {
          return a.pagination && a.pagination.bullets && a.pagination.bullets.length
        }

        function _() {
          return x() && a.params.pagination.clickable
        }
        const k = (e, a, t) => {
            m(e), "BUTTON" !== e.tagName && (g(e, "button"), e.addEventListener("keydown", y)), b(e, t),
              function(e, a) {
                (e = (0, s.m)(e)).forEach(e => {
                  e.setAttribute("aria-controls", a)
                })
              }(e, a)
          },
          w = e => {
            c && c !== e.target && !c.contains(e.target) && (o = !0), a.a11y.clicked = !0
          },
          E = () => {
            o = !1, requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                a.destroyed || (a.a11y.clicked = !1)
              })
            })
          },
          C = e => {
            l = (new Date).getTime()
          },
          M = e => {
            if (a.a11y.clicked || !a.params.a11y.scrollOnFocus) return;
            if ((new Date).getTime() - l < 100) return;
            const t = e.target.closest(`.${a.params.slideClass}, swiper-slide`);
            if (!t || !a.slides.includes(t)) return;
            c = t;
            const r = a.slides.indexOf(t) === a.activeIndex,
              n = a.params.watchSlidesProgress && a.visibleSlides && a.visibleSlides.includes(t);
            r || n || e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || (a.isHorizontal() ? a.el.scrollLeft = 0 : a.el.scrollTop = 0, requestAnimationFrame(() => {
              o || (a.params.loop ? a.slideToLoop(a.getSlideIndexWhenGrid(parseInt(t.getAttribute("data-swiper-slide-index"))), 0) : a.slideTo(a.getSlideIndexWhenGrid(a.slides.indexOf(t)), 0), o = !1)
            }))
          },
          j = () => {
            const e = a.params.a11y;
            e.itemRoleDescriptionMessage && u(a.slides, e.itemRoleDescriptionMessage), e.slideRole && g(a.slides, e.slideRole);
            const t = a.slides.length;
            e.slideLabelMessage && a.slides.forEach((r, n) => {
              const s = a.params.loop ? parseInt(r.getAttribute("data-swiper-slide-index"), 10) : n;
              b(r, e.slideLabelMessage.replace(/\{\{index\}\}/, s + 1).replace(/\{\{slidesLength\}\}/, t))
            })
          };
        i("beforeInit", () => {
          d = (0, s.c)("span", a.params.a11y.notificationClass), d.setAttribute("aria-live", "assertive"), d.setAttribute("aria-atomic", "true")
        }), i("afterInit", () => {
          a.params.a11y.enabled && (() => {
            const e = a.params.a11y;
            a.el.append(d);
            const t = a.el;
            e.containerRoleDescriptionMessage && u(t, e.containerRoleDescriptionMessage), e.containerMessage && b(t, e.containerMessage), e.containerRole && g(t, e.containerRole);
            const n = a.wrapperEl,
              i = e.id || n.getAttribute("id") || `swiper-wrapper-${o=16,void 0===o&&(o=16),"x".repeat(o).replace(/x/g,()=>Math.round(16*Math.random()).toString(16))}`;
            var o;
            const c = a.params.autoplay && a.params.autoplay.enabled ? "off" : "polite";
            var l, f;
            l = n, f = i, (l = (0, s.m)(l)).forEach(e => {
                e.setAttribute("id", f)
              }),
              function(e, a) {
                (e = (0, s.m)(e)).forEach(e => {
                  e.setAttribute("aria-live", a)
                })
              }(n, c), j();
            let {
              nextEl: m,
              prevEl: p
            } = a.navigation ? a.navigation : {};
            m = (0, s.m)(m), p = (0, s.m)(p), m && m.forEach(a => k(a, i, e.nextSlideMessage)), p && p.forEach(a => k(a, i, e.prevSlideMessage)), _() && (0, s.m)(a.pagination.el).forEach(e => {
              e.addEventListener("keydown", y)
            }), (0, r.g)().addEventListener("visibilitychange", C), a.el.addEventListener("focus", M, !0), a.el.addEventListener("focus", M, !0), a.el.addEventListener("pointerdown", w, !0), a.el.addEventListener("pointerup", E, !0)
          })()
        }), i("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
          a.params.a11y.enabled && j()
        }), i("fromEdge toEdge afterInit lock unlock", () => {
          a.params.a11y.enabled && function() {
            if (a.params.loop || a.params.rewind || !a.navigation) return;
            const {
              nextEl: e,
              prevEl: t
            } = a.navigation;
            t && (a.isBeginning ? (h(t), p(t)) : (v(t), m(t))), e && (a.isEnd ? (h(e), p(e)) : (v(e), m(e)))
          }()
        }), i("paginationUpdate", () => {
          a.params.a11y.enabled && function() {
            const e = a.params.a11y;
            x() && a.pagination.bullets.forEach(t => {
              a.params.pagination.clickable && (m(t), a.params.pagination.renderBullet || (g(t, "button"), b(t, e.paginationBulletMessage.replace(/\{\{index\}\}/, (0, s.i)(t) + 1)))), t.matches((0, n.c)(a.params.pagination.bulletActiveClass)) ? t.setAttribute("aria-current", "true") : t.removeAttribute("aria-current")
            })
          }()
        }), i("destroy", () => {
          a.params.a11y.enabled && function() {
            d && d.remove();
            let {
              nextEl: e,
              prevEl: t
            } = a.navigation ? a.navigation : {};
            e = (0, s.m)(e), t = (0, s.m)(t), e && e.forEach(e => e.removeEventListener("keydown", y)), t && t.forEach(e => e.removeEventListener("keydown", y)), _() && (0, s.m)(a.pagination.el).forEach(e => {
              e.removeEventListener("keydown", y)
            }), (0, r.g)().removeEventListener("visibilitychange", C), a.el && "string" != typeof a.el && (a.el.removeEventListener("focus", M, !0), a.el.removeEventListener("pointerdown", w, !0), a.el.removeEventListener("pointerup", E, !0))
          }()
        })
      }
    }
  }
]);