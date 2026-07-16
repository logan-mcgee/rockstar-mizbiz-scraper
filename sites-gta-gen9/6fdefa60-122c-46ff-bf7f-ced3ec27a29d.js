try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "6fdefa60-122c-46ff-bf7f-ced3ec27a29d", e._sentryDebugIdIdentifier = "sentry-dbid-6fdefa60-122c-46ff-bf7f-ced3ec27a29d")
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
  [7459], {
    73904(e, a, t) {
      t.d(a, {
        YT: () => i,
        lv: () => o,
        Ay: () => l
      });
      var s = t(39793),
        r = t(69088);
      var n = t(81270);
      var i = function(e) {
          return e.small = "small", e.large = "large", e
        }({}),
        o = function(e) {
          return e.pc = "pc", e.pcAlt = "pcalt", e.ps4 = "ps4", e.ps5 = "ps5", e.ps = "ps", e.np = "np", e.xboxOne = "xboxone", e.xboxSeries = "xboxsx", e.xbox = "xbl", e
        }({});
      const l = ({
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
        return (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)("img", {
            className: (0, n.default)("rockstargames-sites-gta-gen9b0ff0045ed0326a46ca1e0867d2050c1", t),
            "data-testid": "platform-tag",
            "data-platform": a,
            "data-tag-size": e,
            src: i,
            alt: "",
            "aria-hidden": !0
          }), (0, s.jsx)(r.s6, {
            children: o
          })]
        })
      }
    },
    53351(e, a, t) {
      t.d(a, {
        A: () => n
      });
      var s = t(39793),
        r = t(48478);
      const n = ({
        disableLink: e,
        className: a,
        "data-testid": t
      }) => {
        const n = e ? "span" : r.A;
        return (0, s.jsx)(n, {
          className: [e ? "rockstargames-sites-gta-gen9b28a6ee32abeb20049b97677a86a4314" : "rockstargames-sites-gta-gen9a3d920a1139575706b914bc3a0100970", a || ""].join(" "),
          "data-testid": t,
          alt: "Rockstar Games Home",
          ...!e && {
            to: "/"
          }
        })
      }
    },
    87335(e, a, t) {
      t.r(a), t.d(a, {
        RpCategory: () => c,
        rpCategoryTestIds: () => l
      });
      var s = t(39793),
        r = t(93082),
        n = t(33949);
      var i = t(81270);
      const o = e => e < 100 ? "#2d6eb9" : e > 99 && e < 500 ? "#b482619a" : e > 499 && e < 750 ? "#9699a1" : "#D6B563",
        l = {
          RANK_VALUE: "rpCategory:rankValue"
        },
        c = (0, r.forwardRef)(function({
          rank: e,
          size: a = "large",
          className: t,
          alt: r,
          testId: c,
          ...d
        }, m) {
          const p = o(e),
            f = (0, n.mergeProps)(d, {
              className: (0, i.default)("rockstargames-sites-gta-gen9f54750ef62f8600000c94f0caba85986", t),
              "data-testid": c
            });
          return (0, s.jsxs)("div", {
            "data-size": a,
            ref: m,
            ...f,
            children: [(0, s.jsx)("svg", {
              role: "svg",
              "aria-label": r,
              className: "rockstargames-sites-gta-gen9a3beb1e9c88e2938879ea4df25b63eb1",
              "data-rank": o(e),
              "data-testid": "rp-icon",
              width: "44",
              height: "44",
              viewBox: "0 0 44 44",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, s.jsx)("path", {
                d: "M21.8679 0C9.79195 0 0 9.79195 0 21.8679C0 33.9438 9.79195 43.7358 21.8679 43.7358C33.9438 43.7358 43.7358 33.9438 43.7358 21.8679C43.7358 9.79195 33.9438 0 21.8679 0ZM13.6796 17.4457H30.2506C30.4814 20.3007 30.4935 23.508 30.1048 26.9461H13.7889C13.4123 23.4958 13.4244 20.2885 13.6674 17.4457H13.6796ZM33.9681 17.4457H39.508C39.8603 18.8671 40.0668 20.3371 40.0668 21.8679C40.0668 23.6295 39.7995 25.3424 39.3379 26.9582H33.8102C34.1868 23.5201 34.1868 20.325 33.9681 17.4579V17.4457ZM38.208 13.8618H33.5793C33.1541 10.9947 32.5588 8.56492 31.9757 6.68185C34.6363 8.46773 36.7866 10.9582 38.208 13.8618ZM27.2863 4.42217C27.8208 5.73424 29.0721 9.09947 29.8132 13.8618H14.1169C14.9066 8.89294 16.2308 5.46697 16.7046 4.34928C18.3447 3.86333 20.0699 3.59605 21.8679 3.59605C23.7509 3.59605 25.5733 3.88762 27.2863 4.42217ZM12.0273 6.51177C11.432 8.40699 10.8003 10.8975 10.3629 13.8618H5.52772C6.99772 10.861 9.24525 8.32194 12.0273 6.51177ZM4.21564 17.4457H9.94989C9.71906 20.325 9.71906 23.508 10.0714 26.9461H4.38573C3.91192 25.3303 3.6568 23.6295 3.6568 21.8557C3.6568 20.325 3.86333 18.855 4.21564 17.4336V17.4457ZM5.84358 30.5421H10.5816C10.9704 32.7411 11.5049 35.0129 12.246 37.3576C9.57327 35.6811 7.35004 33.3364 5.84358 30.5421ZM16.8626 39.4229C15.672 36.3614 14.8459 33.385 14.3235 30.5421H29.5581C29.0235 33.3728 28.1974 36.3371 27.0068 39.3865C25.3789 39.8724 23.6538 40.1397 21.8679 40.1397C20.082 40.1397 18.4541 39.8846 16.8626 39.4229ZM31.6355 37.2604C32.3645 34.9522 32.9112 32.7168 33.2999 30.5421H37.88C36.3979 33.2756 34.2354 35.5839 31.6355 37.2604Z",
                fill: p
              })
            }), (0, s.jsx)("span", {
              className: "rockstargames-sites-gta-gen9d9ea5cdf174033003a8670f31ae66a59",
              "data-testid": l.RANK_VALUE,
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
        PlatformTagSizes: () => l.YT,
        Platforms: () => l.lv,
        RankContent: () => _,
        Root: () => u,
        RpCategory: () => C,
        TextContent: () => x,
        TopRow: () => v,
        UserName: () => k
      });
      var s = t(39793),
        r = t(93082),
        n = t(69088),
        i = t(33949),
        o = t(81270),
        l = t(73904),
        c = t(87335),
        d = t(3018),
        m = t(42909);
      const p = (0, m.defineMessages)({
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
        f = "rockstargames-sites-gta-gen9b2d75ee6d468c7fde9ad28ba90ca2804",
        g = (0, r.forwardRef)(function({
          children: e,
          className: a,
          testId: t,
          ...r
        }, l) {
          const {
            formatMessage: c
          } = (0, m.useIntl)(), d = (0, i.mergeProps)(r, {
            "data-testid": t,
            className: (0, o.default)("rockstargames-sites-gta-gen9d738b88fa09e0960678501900af6dae1", a)
          });
          return (0, s.jsxs)("div", {
            ref: l,
            ...d,
            children: [(0, s.jsx)(n.s6, {
              children: c(p.character_card_a11y_intro)
            }), e]
          })
        }),
        u = (0, d.g)(g),
        b = (0, r.forwardRef)(function({
          src: e,
          alt: a,
          testId: n,
          ...o
        }, l) {
          const [c, d] = (0, r.useState)(e), m = (0, i.mergeProps)(o, {
            className: "rockstargames-sites-gta-gen9a0e1daf7fc3c029353d5ef13f291348f",
            "data-testid": n
          });
          return e ? (0, s.jsx)("div", {
            ref: l,
            ...m,
            children: (0, s.jsx)("img", {
              className: f,
              src: c,
              alt: a ?? "",
              onError: () => d(t(14804)),
              "aria-hidden": !a
            })
          }) : (0, s.jsx)("div", {
            ref: l,
            ...m,
            children: (0, s.jsx)("img", {
              className: f,
              src: t(14804),
              alt: a ?? "",
              "aria-hidden": !a
            })
          })
        }),
        h = (0, r.forwardRef)(function({
          asChild: e,
          testId: a,
          className: t,
          ...r
        }, l) {
          const c = e ? n.DX : "div",
            d = (0, i.mergeProps)(r, {
              className: (0, o.default)("rockstargames-sites-gta-gen9fbe57172570573357e040787d9307835", t),
              "data-testid": a
            });
          return (0, s.jsx)(c, {
            ref: l,
            ...d
          })
        }),
        v = (0, r.forwardRef)(function({
          children: e,
          testId: a,
          ...t
        }, r) {
          const n = (0, i.mergeProps)(t, {
            className: "rockstargames-sites-gta-gen9d9b917b7fb3a2b20d4af0d526ddbb8ff",
            "data-testid": a
          });
          return (0, s.jsx)("div", {
            ref: r,
            ...n,
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
          return (0, s.jsx)(l.Ay, {
            ...t
          })
        },
        k = (0, r.forwardRef)(function({
          children: e,
          testId: a,
          userName: t,
          ...r
        }, o) {
          const {
            formatMessage: l
          } = (0, m.useIntl)(), c = (0, i.mergeProps)(r, {
            "data-testid": a
          });
          return (0, s.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9cd5023e2864561e1f962ac435e70156b",
            "data-size": "small",
            ...c,
            ref: o,
            children: [(0, s.jsx)(n.s6, {
              children: l(p.character_card_a11y_player, {
                player: t
              })
            }), (0, s.jsx)("div", {
              "aria-hidden": !0,
              children: e
            })]
          })
        }),
        _ = (0, r.forwardRef)(function({
          testId: e,
          children: a,
          ...t
        }, r) {
          const n = (0, i.mergeProps)(t, {
            "data-testid": e
          });
          return (0, s.jsx)("div", {
            ...n,
            ref: r,
            children: a
          })
        }),
        C = ({
          testId: e,
          ...a
        }) => {
          const {
            formatMessage: t
          } = (0, m.useIntl)(), r = (0, i.mergeProps)(a, {
            "data-testid": e
          });
          return (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(n.s6, {
              children: t(p.character_card_a11y_rank, {
                rank: a.rank
              })
            }), (0, s.jsx)(c.RpCategory, {
              ...r,
              "aria-hidden": !0
            })]
          })
        },
        x = (0, r.forwardRef)(function({
          asChild: e,
          children: a,
          testId: t,
          ...r
        }, o) {
          const l = e ? n.DX : "div",
            c = (0, i.mergeProps)(r, {
              className: "rockstargames-sites-gta-gen9e8daa457f5b09f3a79915a1355aa3332",
              "data-testid": t
            });
          return (0, s.jsx)(l, {
            ref: o,
            ...c,
            children: a
          })
        })
    },
    1468(e, a, t) {
      t.d(a, {
        A: () => m
      });
      var s = t(80391),
        r = t(28985),
        n = t(47240),
        i = t(32903),
        o = t(81715),
        l = t(49429),
        c = t(11008);
      const d = {
          ps: s,
          ps3: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg",
          ps4: r,
          ps5: n,
          switch: c,
          nintendoswitch: c,
          nintendoswitch2: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7696cbc8ff9dc5f2ed3f618ea7252e3b.svg",
          xbox: i,
          xboxone: l,
          xboxseriesxs: o,
          xbox360: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c5cee7464423693de19149a4554b3c2.svg",
          pc: t(85719),
          pcalt: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2921f91628eca684eaf0f91d8b6a5a76.svg",
          play: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/59c4aadbdbfcdb8d06d7caa54bdc9f60.svg",
          applestore: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38a6e85fa4a378c5620efa9fde8ff223.svg",
          googleplay: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ca4e52b102306a186549cfd712b1c8f8.svg",
          questionMark: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e6833fa9baf4a5382bdd84b0b7d2c03f.svg",
          netflix: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fc13a3a816ffa3f7e379ea32a79f99a3.svg",
          default: ""
        },
        m = e => d[e] || null
    },
    14804(e) {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    },
    85719(e) {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    80391(e) {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1506c5bba61fa270f73c874e3d60a94f.svg"
    },
    28985(e) {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg"
    },
    47240(e) {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e8f340ded0fd6b0b0d434e8c6c8b75e.svg"
    },
    11008(e) {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg"
    },
    32903(e) {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d6d2cb861c79506282c6d6cbf1170f81.svg"
    },
    49429(e) {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg"
    },
    81715(e) {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/205366df6706c3b367fb5ff4f26ab7f3.svg"
    },
    69088(e, a, t) {
      t.d(a, {
        DX: () => s.DX,
        xV: () => s.xV,
        s6: () => o
      });
      var s = t(17172),
        r = t(39793),
        n = t(93082),
        i = t(84045);
      const o = ({
        enabled: e = !0,
        ...a
      }) => {
        const t = e ? i.s6 : n.Fragment;
        return (0, r.jsx)(t, {
          ...a
        })
      }
    },
    64239(e, a, t) {
      t.d(a, {
        s: () => n
      });
      var s = t(93082);

      function r(e, a) {
        if ("function" == typeof e) return e(a);
        null != e && (e.current = a)
      }

      function n(...e) {
        return s.useCallback(function(...e) {
          return a => {
            let t = !1;
            const s = e.map(e => {
              const s = r(e, a);
              return t || "function" != typeof s || (t = !0), s
            });
            if (t) return () => {
              for (let a = 0; a < s.length; a++) {
                const t = s[a];
                "function" == typeof t ? t() : r(e[a], null)
              }
            }
          }
        }(...e), e)
      }
    },
    13165(e, a, t) {
      t.d(a, {
        hO: () => l,
        sG: () => o
      });
      var s = t(93082),
        r = t(84017),
        n = t(17172),
        i = t(39793),
        o = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, a) => {
          const t = (0, n.TL)(`Primitive.${a}`),
            r = s.forwardRef((e, s) => {
              const {
                asChild: r,
                ...n
              } = e, o = r ? t : a;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(o, {
                ...n,
                ref: s
              })
            });
          return r.displayName = `Primitive.${a}`, {
            ...e,
            [a]: r
          }
        }, {});

      function l(e, a) {
        e && r.flushSync(() => e.dispatchEvent(a))
      }
    },
    17172(e, a, t) {
      let s;
      t.d(a, {
        DX: () => o,
        Dc: () => c,
        TL: () => i,
        xV: () => d
      });
      var r = t(93082),
        n = t(64239);

      function i(e) {
        const a = r.forwardRef((a, t) => {
          let {
            children: s,
            ...i
          } = a, o = null, c = !1;
          const d = [];
          f(s) && "function" == typeof b && (s = b(s._payload)), r.Children.forEach(s, e => {
            if (a = e, r.isValidElement(a) && "function" == typeof a.type && "__radixId" in a.type && a.type.__radixId === l) {
              c = !0;
              const a = e;
              let t = "child" in a.props ? a.props.child : a.props.children;
              f(t) && "function" == typeof b && (t = b(t._payload)), o = m(a, t), d.push(o?.props?.children)
            } else d.push(e);
            var a
          }), o ? o = r.cloneElement(o, void 0, d) : !c && 1 === r.Children.count(s) && r.isValidElement(s) && (o = s);
          const p = o ? function(e) {
              let a = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                t = a && "isReactWarning" in a && a.isReactWarning;
              return t ? e.ref : (a = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = a && "isReactWarning" in a && a.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
            }(o) : void 0,
            h = (0, n.s)(t, p);
          if (!o) {
            if (s || 0 === s) throw new Error(c ? u(e) : g(e));
            return s
          }
          const v = function(e, a) {
            const t = {
              ...a
            };
            for (const s in a) {
              const r = e[s],
                n = a[s];
              /^on[A-Z]/.test(s) ? r && n ? t[s] = (...e) => {
                const a = n(...e);
                return r(...e), a
              } : r && (t[s] = r) : "style" === s ? t[s] = {
                ...r,
                ...n
              } : "className" === s && (t[s] = [r, n].filter(Boolean).join(" "))
            }
            return {
              ...e,
              ...t
            }
          }(i, o.props ?? {});
          return o.type !== r.Fragment && (v.ref = t ? h : p), r.cloneElement(o, v)
        });
        return a.displayName = `${e}.Slot`, a
      }
      var o = i("Slot"),
        l = Symbol.for("radix.slottable");

      function c(e) {
        const a = e => "child" in e ? e.children(e.child) : e.children;
        return a.displayName = `${e}.Slottable`, a.__radixId = l, a
      }
      var d = c("Slottable"),
        m = (e, a) => {
          if ("child" in e.props) {
            const a = e.props.child;
            return r.isValidElement(a) ? r.cloneElement(a, void 0, e.props.children(a.props.children)) : null
          }
          return r.isValidElement(a) ? a : null
        },
        p = Symbol.for("react.lazy");

      function f(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === p && "_payload" in e && "object" == typeof(a = e._payload) && null !== a && "then" in a;
        var a
      }
      var g = e => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,
        u = e => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,
        b = (s || (s = t.t(r, 2)))[" use ".trim().toString()]
    },
    84045(e, a, t) {
      t.d(a, {
        Qg: () => i,
        bL: () => l,
        s6: () => o
      });
      var s = t(93082),
        r = t(13165),
        n = t(39793),
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
        o = s.forwardRef((e, a) => (0, n.jsx)(r.sG.span, {
          ...e,
          ref: a,
          style: {
            ...i,
            ...e.style
          }
        }));
      o.displayName = "VisuallyHidden";
      var l = o
    },
    31147(e, a, t) {
      t.d(a, {
        A: () => i
      });
      var s = t(20219),
        r = t(61122),
        n = t(20212);

      function i(e) {
        let {
          swiper: a,
          extendParams: t,
          on: i,
          emit: o
        } = e;
        const l = "swiper-pagination";
        let c;
        t({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: e => e,
            formatFractionTotal: e => e,
            bulletClass: `${l}-bullet`,
            bulletActiveClass: `${l}-bullet-active`,
            modifierClass: `${l}-`,
            currentClass: `${l}-current`,
            totalClass: `${l}-total`,
            hiddenClass: `${l}-hidden`,
            progressbarFillClass: `${l}-progressbar-fill`,
            progressbarOppositeClass: `${l}-progressbar-opposite`,
            clickableClass: `${l}-clickable`,
            lockClass: `${l}-lock`,
            horizontalClass: `${l}-horizontal`,
            verticalClass: `${l}-vertical`,
            paginationDisabledClass: `${l}-disabled`
          }
        }), a.pagination = {
          el: null,
          bullets: []
        };
        let d = 0;

        function m() {
          return !a.params.pagination.el || !a.pagination.el || Array.isArray(a.pagination.el) && 0 === a.pagination.el.length
        }

        function p(e, t) {
          const {
            bulletActiveClass: s
          } = a.params.pagination;
          e && (e = e[("prev" === t ? "previous" : "next") + "ElementSibling"]) && (e.classList.add(`${s}-${t}`), (e = e[("prev" === t ? "previous" : "next") + "ElementSibling"]) && e.classList.add(`${s}-${t}-${t}`))
        }

        function f(e) {
          const t = e.target.closest((0, s.c)(a.params.pagination.bulletClass));
          if (!t) return;
          e.preventDefault();
          const r = (0, n.i)(t) * a.params.slidesPerGroup;
          if (a.params.loop) {
            if (a.realIndex === r) return;
            const e = (i = a.realIndex, o = r, (o %= l = a.slides.length) === 1 + (i %= l) ? "next" : o === i - 1 ? "previous" : void 0);
            "next" === e ? a.slideNext() : "previous" === e ? a.slidePrev() : a.slideToLoop(r)
          } else a.slideTo(r);
          var i, o, l
        }

        function g() {
          const e = a.rtl,
            t = a.params.pagination;
          if (m()) return;
          let r, i, l = a.pagination.el;
          l = (0, n.m)(l);
          const f = a.virtual && a.params.virtual.enabled ? a.virtual.slides.length : a.slides.length,
            g = a.params.loop ? Math.ceil(f / a.params.slidesPerGroup) : a.snapGrid.length;
          if (a.params.loop ? (i = a.previousRealIndex || 0, r = a.params.slidesPerGroup > 1 ? Math.floor(a.realIndex / a.params.slidesPerGroup) : a.realIndex) : void 0 !== a.snapIndex ? (r = a.snapIndex, i = a.previousSnapIndex) : (i = a.previousIndex || 0, r = a.activeIndex || 0), "bullets" === t.type && a.pagination.bullets && a.pagination.bullets.length > 0) {
            const s = a.pagination.bullets;
            let o, m, f;
            if (t.dynamicBullets && (c = (0, n.h)(s[0], a.isHorizontal() ? "width" : "height", !0), l.forEach(e => {
                e.style[a.isHorizontal() ? "width" : "height"] = c * (t.dynamicMainBullets + 4) + "px"
              }), t.dynamicMainBullets > 1 && void 0 !== i && (d += r - (i || 0), d > t.dynamicMainBullets - 1 ? d = t.dynamicMainBullets - 1 : d < 0 && (d = 0)), o = Math.max(r - d, 0), m = o + (Math.min(s.length, t.dynamicMainBullets) - 1), f = (m + o) / 2), s.forEach(e => {
                const a = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(e => `${t.bulletActiveClass}${e}`)].map(e => "string" == typeof e && e.includes(" ") ? e.split(" ") : e).flat();
                e.classList.remove(...a)
              }), l.length > 1) s.forEach(e => {
              const s = (0, n.i)(e);
              s === r ? e.classList.add(...t.bulletActiveClass.split(" ")) : a.isElement && e.setAttribute("part", "bullet"), t.dynamicBullets && (s >= o && s <= m && e.classList.add(...`${t.bulletActiveClass}-main`.split(" ")), s === o && p(e, "prev"), s === m && p(e, "next"))
            });
            else {
              const e = s[r];
              if (e && e.classList.add(...t.bulletActiveClass.split(" ")), a.isElement && s.forEach((e, a) => {
                  e.setAttribute("part", a === r ? "bullet-active" : "bullet")
                }), t.dynamicBullets) {
                const e = s[o],
                  a = s[m];
                for (let e = o; e <= m; e += 1) s[e] && s[e].classList.add(...`${t.bulletActiveClass}-main`.split(" "));
                p(e, "prev"), p(a, "next")
              }
            }
            if (t.dynamicBullets) {
              const r = Math.min(s.length, t.dynamicMainBullets + 4),
                n = (c * r - c) / 2 - f * c,
                i = e ? "right" : "left";
              s.forEach(e => {
                e.style[a.isHorizontal() ? i : "top"] = `${n}px`
              })
            }
          }
          l.forEach((e, i) => {
            if ("fraction" === t.type && (e.querySelectorAll((0, s.c)(t.currentClass)).forEach(e => {
                e.textContent = t.formatFractionCurrent(r + 1)
              }), e.querySelectorAll((0, s.c)(t.totalClass)).forEach(e => {
                e.textContent = t.formatFractionTotal(g)
              })), "progressbar" === t.type) {
              let n;
              n = t.progressbarOpposite ? a.isHorizontal() ? "vertical" : "horizontal" : a.isHorizontal() ? "horizontal" : "vertical";
              const i = (r + 1) / g;
              let o = 1,
                l = 1;
              "horizontal" === n ? o = i : l = i, e.querySelectorAll((0, s.c)(t.progressbarFillClass)).forEach(e => {
                e.style.transform = `translate3d(0,0,0) scaleX(${o}) scaleY(${l})`, e.style.transitionDuration = `${a.params.speed}ms`
              })
            }
            "custom" === t.type && t.renderCustom ? ((0, n.s)(e, t.renderCustom(a, r + 1, g)), 0 === i && o("paginationRender", e)) : (0 === i && o("paginationRender", e), o("paginationUpdate", e)), a.params.watchOverflow && a.enabled && e.classList[a.isLocked ? "add" : "remove"](t.lockClass)
          })
        }

        function u() {
          const e = a.params.pagination;
          if (m()) return;
          const t = a.virtual && a.params.virtual.enabled ? a.virtual.slides.length : a.grid && a.params.grid.rows > 1 ? a.slides.length / Math.ceil(a.params.grid.rows) : a.slides.length;
          let r = a.pagination.el;
          r = (0, n.m)(r);
          let i = "";
          if ("bullets" === e.type) {
            let s = a.params.loop ? Math.ceil(t / a.params.slidesPerGroup) : a.snapGrid.length;
            a.params.freeMode && a.params.freeMode.enabled && s > t && (s = t);
            for (let t = 0; t < s; t += 1) e.renderBullet ? i += e.renderBullet.call(a, t, e.bulletClass) : i += `<${e.bulletElement} ${a.isElement?'part="bullet"':""} class="${e.bulletClass}"></${e.bulletElement}>`
          }
          "fraction" === e.type && (i = e.renderFraction ? e.renderFraction.call(a, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), "progressbar" === e.type && (i = e.renderProgressbar ? e.renderProgressbar.call(a, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), a.pagination.bullets = [], r.forEach(t => {
            "custom" !== e.type && (0, n.s)(t, i || ""), "bullets" === e.type && a.pagination.bullets.push(...t.querySelectorAll((0, s.c)(e.bulletClass)))
          }), "custom" !== e.type && o("paginationRender", r[0])
        }

        function b() {
          a.params.pagination = (0, r.c)(a, a.originalParams.pagination, a.params.pagination, {
            el: "swiper-pagination"
          });
          const e = a.params.pagination;
          if (!e.el) return;
          let t;
          "string" == typeof e.el && a.isElement && (t = a.el.querySelector(e.el)), t || "string" != typeof e.el || (t = [...document.querySelectorAll(e.el)]), t || (t = e.el), t && 0 !== t.length && (a.params.uniqueNavElements && "string" == typeof e.el && Array.isArray(t) && t.length > 1 && (t = [...a.el.querySelectorAll(e.el)], t.length > 1 && (t = t.find(e => (0, n.b)(e, ".swiper")[0] === a.el))), Array.isArray(t) && 1 === t.length && (t = t[0]), Object.assign(a.pagination, {
            el: t
          }), t = (0, n.m)(t), t.forEach(t => {
            "bullets" === e.type && e.clickable && t.classList.add(...(e.clickableClass || "").split(" ")), t.classList.add(e.modifierClass + e.type), t.classList.add(a.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (t.classList.add(`${e.modifierClass}${e.type}-dynamic`), d = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && t.classList.add(e.progressbarOppositeClass), e.clickable && t.addEventListener("click", f), a.enabled || t.classList.add(e.lockClass)
          }))
        }

        function h() {
          const e = a.params.pagination;
          if (m()) return;
          let t = a.pagination.el;
          t && (t = (0, n.m)(t), t.forEach(t => {
            t.classList.remove(e.hiddenClass), t.classList.remove(e.modifierClass + e.type), t.classList.remove(a.isHorizontal() ? e.horizontalClass : e.verticalClass), e.clickable && (t.classList.remove(...(e.clickableClass || "").split(" ")), t.removeEventListener("click", f))
          })), a.pagination.bullets && a.pagination.bullets.forEach(a => a.classList.remove(...e.bulletActiveClass.split(" ")))
        }
        i("changeDirection", () => {
          if (!a.pagination || !a.pagination.el) return;
          const e = a.params.pagination;
          let {
            el: t
          } = a.pagination;
          t = (0, n.m)(t), t.forEach(t => {
            t.classList.remove(e.horizontalClass, e.verticalClass), t.classList.add(a.isHorizontal() ? e.horizontalClass : e.verticalClass)
          })
        }), i("init", () => {
          !1 === a.params.pagination.enabled ? v() : (b(), u(), g())
        }), i("activeIndexChange", () => {
          void 0 === a.snapIndex && g()
        }), i("snapIndexChange", () => {
          g()
        }), i("snapGridLengthChange", () => {
          u(), g()
        }), i("destroy", () => {
          h()
        }), i("enable disable", () => {
          let {
            el: e
          } = a.pagination;
          e && (e = (0, n.m)(e), e.forEach(e => e.classList[a.enabled ? "remove" : "add"](a.params.pagination.lockClass)))
        }), i("lock unlock", () => {
          g()
        }), i("click", (e, t) => {
          const s = t.target,
            r = (0, n.m)(a.pagination.el);
          if (a.params.pagination.el && a.params.pagination.hideOnClick && r && r.length > 0 && !s.classList.contains(a.params.pagination.bulletClass)) {
            if (a.navigation && (a.navigation.nextEl && s === a.navigation.nextEl || a.navigation.prevEl && s === a.navigation.prevEl)) return;
            const e = r[0].classList.contains(a.params.pagination.hiddenClass);
            o(!0 === e ? "paginationShow" : "paginationHide"), r.forEach(e => e.classList.toggle(a.params.pagination.hiddenClass))
          }
        });
        const v = () => {
          a.el.classList.add(a.params.pagination.paginationDisabledClass);
          let {
            el: e
          } = a.pagination;
          e && (e = (0, n.m)(e), e.forEach(e => e.classList.add(a.params.pagination.paginationDisabledClass))), h()
        };
        Object.assign(a.pagination, {
          enable: () => {
            a.el.classList.remove(a.params.pagination.paginationDisabledClass);
            let {
              el: e
            } = a.pagination;
            e && (e = (0, n.m)(e), e.forEach(e => e.classList.remove(a.params.pagination.paginationDisabledClass))), b(), u(), g()
          },
          disable: v,
          render: u,
          update: g,
          init: b,
          destroy: h
        })
      }
    }
  }
]);