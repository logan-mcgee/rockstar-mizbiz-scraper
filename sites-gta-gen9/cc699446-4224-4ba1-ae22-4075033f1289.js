try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "cc699446-4224-4ba1-ae22-4075033f1289", e._sentryDebugIdIdentifier = "sentry-dbid-cc699446-4224-4ba1-ae22-4075033f1289")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "e75daf86583d2f46160d46d6e78dabbc975e828b",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "e75daf86583d2f46160d46d6e78dabbc975e828b"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [5090], {
    91: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        Avatar: () => f,
        Content: () => b,
        PlatformTag: () => u,
        PlatformTagSizes: () => i.YT,
        Platforms: () => i.lv,
        RankContent: () => v,
        Root: () => g,
        RpCategory: () => x,
        TextContent: () => h,
        TopRow: () => p,
        UserName: () => k
      });
      var s = t(42295),
        r = t(62229),
        c = t(32067),
        o = t(68791),
        n = t(4572),
        d = t.n(n),
        i = t(22230),
        m = t(95386);
      const l = "rockstargames-sites-gta-gen9b2d75ee6d468c7fde9ad28ba90ca2804",
        g = (0, r.forwardRef)((function({
          children: e,
          className: a,
          testId: t,
          ...r
        }, c) {
          const n = (0, o.v6)(r, {
            "data-testid": t,
            className: d()("rockstargames-sites-gta-gen9d738b88fa09e0960678501900af6dae1", a)
          });
          return (0, s.jsx)("div", {
            ref: c,
            ...n,
            children: e
          })
        })),
        f = (0, r.forwardRef)((function({
          src: e,
          alt: a,
          testId: c,
          ...n
        }, d) {
          const [i, m] = (0, r.useState)(e), g = (0, o.v6)(n, {
            className: "rockstargames-sites-gta-gen9a0e1daf7fc3c029353d5ef13f291348f",
            "data-testid": c
          });
          return e ? (0, s.jsx)("div", {
            ref: d,
            ...g,
            children: (0, s.jsx)("img", {
              className: l,
              src: i,
              alt: a,
              onError: () => m(t(14804))
            })
          }) : (0, s.jsx)("div", {
            ref: d,
            ...g,
            children: (0, s.jsx)("img", {
              className: l,
              src: t(14804),
              alt: a
            })
          })
        })),
        b = (0, r.forwardRef)((function({
          asChild: e,
          testId: a,
          className: t,
          ...r
        }, n) {
          const i = e ? c.DX : "div",
            m = (0, o.v6)(r, {
              className: d()("rockstargames-sites-gta-gen9fbe57172570573357e040787d9307835", t),
              "data-testid": a
            });
          return (0, s.jsx)(i, {
            ref: n,
            ...m
          })
        })),
        p = (0, r.forwardRef)((function({
          children: e,
          testId: a,
          ...t
        }, r) {
          const c = (0, o.v6)(t, {
            className: "rockstargames-sites-gta-gen9d9b917b7fb3a2b20d4af0d526ddbb8ff",
            "data-testid": a
          });
          return (0, s.jsx)("div", {
            ref: r,
            ...c,
            children: e
          })
        })),
        u = ({
          testId: e,
          ...a
        }) => {
          const t = (0, o.v6)(a, {
            "data-testid": e
          });
          return (0, s.jsx)(i.Ay, {
            ...t
          })
        },
        k = (0, r.forwardRef)((function({
          children: e,
          testId: a,
          ...t
        }, r) {
          const c = (0, o.v6)(t, {
            "data-testid": a
          });
          return (0, s.jsx)("div", {
            className: "rockstargames-sites-gta-gen9cd5023e2864561e1f962ac435e70156b",
            "data-size": "small",
            ...c,
            ref: r,
            children: e
          })
        })),
        v = (0, r.forwardRef)((function({
          testId: e,
          children: a,
          ...t
        }, r) {
          const c = (0, o.v6)(t, {
            "data-testid": e
          });
          return (0, s.jsx)("div", {
            ...c,
            ref: r,
            children: a
          })
        })),
        x = ({
          testId: e,
          ...a
        }) => {
          const t = (0, o.v6)(a, {
            "data-testid": e
          });
          return (0, s.jsx)(m.RpCategory, {
            ...t
          })
        },
        h = (0, r.forwardRef)((function({
          asChild: e,
          children: a,
          testId: t,
          ...r
        }, n) {
          const d = e ? c.DX : "div",
            i = (0, o.v6)(r, {
              className: "rockstargames-sites-gta-gen9e8daa457f5b09f3a79915a1355aa3332",
              "data-testid": t
            });
          return (0, s.jsx)(d, {
            ref: n,
            ...i,
            children: a
          })
        }))
    },
    5328: (e, a, t) => {
      var s = {
        "./applestore.svg": 49733,
        "./googleplay.svg": 62749,
        "./left.svg": 84941,
        "./pc.svg": 39821,
        "./pcalt.svg": 29886,
        "./ps.svg": 65437,
        "./ps3.svg": 33492,
        "./ps4.svg": 65115,
        "./ps5.svg": 23146,
        "./right.svg": 80304,
        "./switch.svg": 22454,
        "./x.svg": 66426,
        "./xbox.svg": 59129,
        "./xboxone.svg": 42659,
        "./xboxseriesxs.svg": 36773
      };

      function r(e) {
        var a = c(e);
        return t(a)
      }

      function c(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = c, e.exports = r, r.id = 5328
    },
    14804: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    },
    22230: (e, a, t) => {
      "use strict";
      t.d(a, {
        YT: () => o,
        lv: () => n,
        Ay: () => d
      });
      var s = t(42295);
      var r = t(4572),
        c = t.n(r);
      var o = function(e) {
          return e.small = "small", e.large = "large", e
        }({}),
        n = function(e) {
          return e.pc = "pc", e.pcAlt = "pcalt", e.ps4 = "ps4", e.ps5 = "ps5", e.ps = "ps", e.np = "np", e.xboxOne = "xboxone", e.xboxSeries = "xboxsx", e.xbox = "xbl", e
        }({});
      const d = ({
        tagSize: e,
        platform: a,
        className: t = ""
      }) => {
        const {
          src: r,
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
        return (0, s.jsx)("img", {
          className: c()("rockstargames-sites-gta-gen9b0ff0045ed0326a46ca1e0867d2050c1", t),
          "data-testid": "platform-tag",
          "data-platform": a,
          "data-tag-size": e,
          src: r,
          alt: o
        })
      }
    },
    22454: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg"
    },
    23146: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b12e4e9678e7a4ebea34905926feeb90.svg"
    },
    26732: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => d
      });
      var s = t(42295),
        r = t(9623);
      const c = {
          blackBtn: "rockstargames-sites-gta-gen9d3207a3907ff5e6cc1498c67d5562087",
          btnText: "rockstargames-sites-gta-gen9e146813e6b911567a15379239351bb9f",
          btnTexticon: "rockstargames-sites-gta-gen9add785fa73d6a7f8cdf490add2819974",
          iconBtn: "rockstargames-sites-gta-gen9a305be36306fd7f0977b052ccab54910",
          link: "rockstargames-sites-gta-gen9a73b743df91203999c432aceb1093e62",
          pc: "rockstargames-sites-gta-gen9c4a7b17bb99afb02a9f9b9b133be7844",
          pillBtn: "rockstargames-sites-gta-gen9a76545929bba4f1522661c9f297ea3c5",
          plusButton: "rockstargames-sites-gta-gen9b35e9ba36ecaabe08c02c44808110761",
          ps4: "rockstargames-sites-gta-gen9af1b302b53e77d0da20f92de2973fd29",
          ps5: "rockstargames-sites-gta-gen9b5164622a2b180ed2b04eab4d489763b",
          selected: "rockstargames-sites-gta-gen9e5b12527bec7eae7fce9642c9827cc3b",
          small: "rockstargames-sites-gta-gen9b3ba679464048120f8440e7ae0d14086",
          transparentBtn: "rockstargames-sites-gta-gen9d4515b6bf9a4c714239cac9e27932235",
          whiteBtn: "rockstargames-sites-gta-gen9d94aba4fb4bae812e14f8715816752c2",
          xboxone: "rockstargames-sites-gta-gen9cadebea37980f01b56560143374013b3",
          xboxseriesxs: "rockstargames-sites-gta-gen9c28e2bcbd4ed4fc95b67860cb7033999"
        },
        o = ({
          children: e,
          className: a,
          onClick: t,
          style: r,
          ariaLabel: c
        }) => (0, s.jsx)("button", {
          className: a,
          onClick: t,
          style: r,
          type: "button",
          "aria-label": c,
          children: e
        }),
        n = ({
          children: e,
          className: a,
          onClick: t,
          style: c,
          to: o,
          ariaLabel: n
        }) => (0, s.jsx)(r.NavLink, {
          className: a,
          onClick: t,
          style: c,
          to: o,
          "aria-label": n,
          children: e
        }),
        d = ({
          btnColor: e = "#fff",
          className: a = "",
          consoleBtn: t,
          icon: r = "",
          img: d,
          labelColor: i = "#000",
          onClick: m,
          secondText: l,
          size: g,
          text: f,
          to: b,
          type: p = "",
          ariaLabel: u
        }) => {
          const k = [c.plusButton, c[p] ?? "", c[g] ?? "", c[t] ?? "", a].join(" "),
            v = {
              "--hvr-color": e ?? i,
              "--hvr-bg-color": i ?? e,
              "--hvr-border-color": e ?? i
            },
            x = (0, s.jsxs)(s.Fragment, {
              children: [d ? (0, s.jsx)("img", {
                src: d,
                alt: ""
              }) : "", (0, s.jsxs)("div", {
                className: c.btnText,
                icon: r,
                children: [f, l ? (0, s.jsx)("span", {
                  children: l
                }) : ""]
              })]
            });
          if (b) {
            if (b.startsWith("http")) {
              const e = b.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, s.jsx)("span", {
                onClick: m,
                onKeyDown: m,
                className: k,
                role: "button",
                "aria-label": u,
                tabIndex: 0,
                children: (0, s.jsx)("a", {
                  href: b,
                  target: e,
                  children: x
                })
              })
            }
            return (0, s.jsx)(n, {
              className: k,
              onClick: m,
              style: {
                ...v
              },
              to: b,
              ariaLabel: u,
              children: x
            })
          }
          return (0, s.jsx)(o, {
            className: k,
            onClick: m,
            style: {
              ...v
            },
            ariaLabel: u,
            children: x
          })
        }
    },
    29886: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2921f91628eca684eaf0f91d8b6a5a76.svg"
    },
    32067: (e, a, t) => {
      "use strict";
      t.d(a, {
        DX: () => s.DX,
        xV: () => s.xV,
        s6: () => n
      });
      var s = t(39447),
        r = t(42295),
        c = t(62229),
        o = t(69055);
      const n = ({
        enabled: e = !0,
        ...a
      }) => {
        const t = e ? o.s6 : c.Fragment;
        return (0, r.jsx)(t, {
          ...a
        })
      }
    },
    33492: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg"
    },
    36773: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5bd8456deb2338503b8fd44786b5fa07.svg"
    },
    39821: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    42659: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg"
    },
    49733: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c6affc8b37ec4c75486ab6d12b2de395.svg"
    },
    59129: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f74e871585118640ffd9ce881181a176.svg"
    },
    62749: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2ef574ea2aa502447d579267ff37e251.svg"
    },
    65115: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg"
    },
    65437: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27ae07e3226006749e6cb6428bc62bb1.svg"
    },
    66426: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c453a914f0b049334120adfcba614e5.svg"
    },
    80304: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cf1b78cec82c717ea9c2155ce4093736.svg"
    },
    84941: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3c6134ba61610ead6af640361535e346.svg"
    },
    95386: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        RpCategory: () => m,
        rpCategoryTestIds: () => i
      });
      var s = t(42295),
        r = t(62229),
        c = t(68791);
      var o = t(4572),
        n = t.n(o);
      const d = e => e < 100 ? "#2d6eb9" : e > 99 && e < 500 ? "#b48261" : e > 499 && e < 750 ? "#9699a1" : "#D6B563",
        i = {
          RANK_VALUE: "rpCategory:rankValue"
        },
        m = (0, r.forwardRef)((function({
          rank: e,
          size: a = "large",
          className: t,
          alt: r,
          testId: o,
          ...m
        }, l) {
          const g = d(e),
            f = (0, c.v6)(m, {
              className: n()("rockstargames-sites-gta-gen9f54750ef62f8600000c94f0caba85986", t),
              "data-testid": o
            });
          return (0, s.jsxs)("div", {
            "data-size": a,
            ref: l,
            ...f,
            children: [(0, s.jsx)("svg", {
              role: "svg",
              "aria-label": r,
              className: "rockstargames-sites-gta-gen9a3beb1e9c88e2938879ea4df25b63eb1",
              "data-rank": d(e),
              "data-testid": "rp-icon",
              width: "44",
              height: "44",
              viewBox: "0 0 44 44",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, s.jsx)("path", {
                d: "M21.8679 0C9.79195 0 0 9.79195 0 21.8679C0 33.9438 9.79195 43.7358 21.8679 43.7358C33.9438 43.7358 43.7358 33.9438 43.7358 21.8679C43.7358 9.79195 33.9438 0 21.8679 0ZM13.6796 17.4457H30.2506C30.4814 20.3007 30.4935 23.508 30.1048 26.9461H13.7889C13.4123 23.4958 13.4244 20.2885 13.6674 17.4457H13.6796ZM33.9681 17.4457H39.508C39.8603 18.8671 40.0668 20.3371 40.0668 21.8679C40.0668 23.6295 39.7995 25.3424 39.3379 26.9582H33.8102C34.1868 23.5201 34.1868 20.325 33.9681 17.4579V17.4457ZM38.208 13.8618H33.5793C33.1541 10.9947 32.5588 8.56492 31.9757 6.68185C34.6363 8.46773 36.7866 10.9582 38.208 13.8618ZM27.2863 4.42217C27.8208 5.73424 29.0721 9.09947 29.8132 13.8618H14.1169C14.9066 8.89294 16.2308 5.46697 16.7046 4.34928C18.3447 3.86333 20.0699 3.59605 21.8679 3.59605C23.7509 3.59605 25.5733 3.88762 27.2863 4.42217ZM12.0273 6.51177C11.432 8.40699 10.8003 10.8975 10.3629 13.8618H5.52772C6.99772 10.861 9.24525 8.32194 12.0273 6.51177ZM4.21564 17.4457H9.94989C9.71906 20.325 9.71906 23.508 10.0714 26.9461H4.38573C3.91192 25.3303 3.6568 23.6295 3.6568 21.8557C3.6568 20.325 3.86333 18.855 4.21564 17.4336V17.4457ZM5.84358 30.5421H10.5816C10.9704 32.7411 11.5049 35.0129 12.246 37.3576C9.57327 35.6811 7.35004 33.3364 5.84358 30.5421ZM16.8626 39.4229C15.672 36.3614 14.8459 33.385 14.3235 30.5421H29.5581C29.0235 33.3728 28.1974 36.3371 27.0068 39.3865C25.3789 39.8724 23.6538 40.1397 21.8679 40.1397C20.082 40.1397 18.4541 39.8846 16.8626 39.4229ZM31.6355 37.2604C32.3645 34.9522 32.9112 32.7168 33.2999 30.5421H37.88C36.3979 33.2756 34.2354 35.5839 31.6355 37.2604Z",
                fill: g
              })
            }), (0, s.jsx)("span", {
              className: "rockstargames-sites-gta-gen9d9ea5cdf174033003a8670f31ae66a59",
              "data-testid": i.RANK_VALUE,
              children: e
            })]
          })
        }))
    },
    98357: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => k
      });
      var s = t(42295),
        r = t(62229),
        c = t(9623),
        o = t(62665),
        n = t(51673),
        d = t.n(n),
        i = t(95966),
        m = t(4572),
        l = t.n(m),
        g = t(2918);
      const f = {
          open: {
            opacity: 0,
            transition: {
              ease: "easeOut",
              duration: .3
            }
          },
          closed: {
            opacity: 1,
            transition: {
              ease: "easeOut",
              duration: .9,
              delay: .3
            }
          }
        },
        b = {
          open: {
            "--cta-border-color": "var(--white-15)",
            "--cta-background-color": "rgba(255,255,255,.1)",
            "--cta-background-color-noBlur": "var(--black-100)",
            gridGap: "var(--grid-gap-sm)",
            "--btn-hover-bg-color": "var(--black-15)",
            "--btn-hover-bg-color-noBlur": "var(--black-100)",
            "--btn-hover-font-color": "var(--white-100)",
            "--btn-hover-border-color": "var(--white-15)"
          },
          closed: {
            "--cta-border-color": "var(--white-100)",
            "--cta-background-color": "var(--black-15)",
            "--cta-background-color-noBlur": "var(--black-15)",
            gridGap: 0,
            transition: {
              type: "spring",
              stiffness: 650,
              damping: 45
            },
            transitionEnd: {
              "--btn-hover-bg-color": "var(--white-100)",
              "--btn-hover-bg-color-noBlur": "var(--white-100)",
              "--btn-hover-font-color": "var(--black-100)",
              "--btn-hover-border-color": "var(--white-100)"
            }
          }
        },
        p = {
          applestore: "rockstargames-sites-gta-gen9e68d88a0e9f24a2f0bcf7da8a0e1b388",
          buttonText: "rockstargames-sites-gta-gen9c240c5768c5acdd2bc6022568ef877f0",
          closeButton: "rockstargames-sites-gta-gen9ee432a5defea7b8181973d3a9ad3190b",
          container: "rockstargames-sites-gta-gen9fc8f7fb18de952e853977b6df36af26a",
          content: "rockstargames-sites-gta-gen9b12c469ae4536819db4253c10b2cd11d",
          expandedArea: "rockstargames-sites-gta-gen9e752e3ffffce454f84c993a62a279f87",
          expandedButton: "rockstargames-sites-gta-gen9bb945d977a4db6fdd9206dbfe8581304",
          googleplay: "rockstargames-sites-gta-gen9d0d623dce429f6ae2fd898e1d551257e",
          pc: "rockstargames-sites-gta-gen9ffc20241c500599d4ee134fcffd66961",
          pcalt: "rockstargames-sites-gta-gen9a2ef6590cf9e642c1a2a8c589a792928",
          pillBtn: "rockstargames-sites-gta-gen9ed7115facef4ace39e8c7486e9066fe1",
          platformButton: "rockstargames-sites-gta-gen9fa40c93ee13fdec88bb8dc08ce36353a",
          platformButtons: "rockstargames-sites-gta-gen9e950c05307f67ce36d561a09027fd844",
          ps: "rockstargames-sites-gta-gen9dd89bc9ad4dba162494e28c6358baa41",
          ps4: "rockstargames-sites-gta-gen9ed20f3369b590314810f7996943fdaa4",
          ps5: "rockstargames-sites-gta-gen9f046700558956d566323b32d87c4a54f",
          selected: "rockstargames-sites-gta-gen9e7705468e2dbcfc45d23ef5047671698",
          switch: "rockstargames-sites-gta-gen9e8e3ea0f1d334667f3928f696308060e",
          unexpandedButton: "rockstargames-sites-gta-gen9eaa10e0601812da4ea334974165d92ec",
          xbox: "rockstargames-sites-gta-gen9e6c21e19f66ac6c50547342d3dd72dd4",
          xboxone: "rockstargames-sites-gta-gen9c03015dbaf51a94ba1826bb21f5d040f",
          xboxseriesxs: "rockstargames-sites-gta-gen9dde1b553776bdd59373d22a43479de29"
        },
        u = ({
          buttonText: e = "",
          link: a = "",
          platform: r = "",
          target: o = null,
          onClick: n,
          tabIndex: d,
          ...i
        }) => {
          const m = o ?? (a.startsWith(document.location.origin) ? "_self" : "_blank"),
            l = [p.platformButton, p[r]].join(" "),
            g = r ? t(5328)(`./${r}.svg`) : null,
            f = (0, s.jsxs)(s.Fragment, {
              children: [g ? (0, s.jsx)("img", {
                src: g,
                alt: e
              }) : "", !g && (0, s.jsx)("div", {
                className: p.buttonText,
                children: e
              })]
            });
          return a.startsWith("http") ? (0, s.jsx)("a", {
            href: a,
            className: l,
            target: m,
            onClick: n,
            "aria-label": e,
            tabIndex: d,
            ...i,
            children: f
          }) : (0, s.jsx)(c.NavLink, {
            className: l,
            onClick: n,
            to: a,
            "aria-label": e,
            ...i,
            children: f
          })
        },
        k = ({
          variant: e,
          buttonText: a = "Subscribe",
          buttonClassName: c,
          className: n,
          children: m,
          platformsAndLinks: k = [],
          trackingType: v = "buy",
          trackingParent: x,
          target: h = null,
          trackingOId: _ = null
        }) => {
          const [C, w] = (0, r.useState)(!1), [y, N] = (0, r.useState)(!1), [j, z] = (0, r.useState)(200), {
            track: L
          } = (0, g.useGtmTrack)(), T = (0, r.useRef)(null), B = (0, r.useRef)(C), E = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            B.current = C
          }), [C]), (0, r.useEffect)((() => {
            const e = e => {
              B && !T?.current?.contains(e.target) && w(!1)
            };
            document.addEventListener("click", e);
            const a = e => {
              B && "Escape" == e.code && w(!1)
            };
            return document.addEventListener("keydown", a, !1), () => {
              document.removeEventListener("click", e), document.removeEventListener("keydown", a, !1)
            }
          }), []), (0, r.useEffect)((() => {
            const e = () => {
              C && (N(!0), w(!1))
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [C]), (0, r.useEffect)((() => {
            if (T?.current) {
              const e = 1e3 * Number(getComputedStyle(T.current).getPropertyValue("--expandingPlatformButton-expandDuration").replace("ms", "").replace("s", ""));
              z(isNaN(e) ? 200 : e)
            }
          }), []), (0, r.useEffect)((() => {
            y && setTimeout((() => {
              N(!1)
            }), j)
          }), [y]);
          const I = ({
            href: e,
            platform: a
          }) => () => {
            L({
              element_placement: x?.toLowerCase(),
              event: "cta_store_link",
              link_url: e,
              text: a
            })
          };
          return (0, s.jsxs)("div", {
            className: l()(p.container, n),
            children: [(0, s.jsx)(o.motion.div, {
              className: p.content,
              animate: C ? "open" : "close",
              variants: f,
              "aria-hidden": !!C,
              children: m
            }), (0, s.jsxs)(o.motion.div, {
              "data-variant": e,
              "data-animating": y,
              className: l()(C ? p.expandedButton : p.unexpandedButton),
              animate: C ? "open" : "closed",
              variants: b,
              initial: !1,
              ref: T,
              children: [(0, s.jsx)(o.motion.button, {
                className: l()(p.buttonText, c),
                "aria-expanded": C,
                onClick: () => {
                  if (N(!0), w(!C), !C) switch (v) {
                    case "select_platform":
                      L({
                        element_placement: x?.toLowerCase(),
                        event: "select_platform",
                        text: a?.toLowerCase() ?? "subscribe"
                      });
                      break;
                    case "link_account":
                      L({
                        element_placement: x?.toLowerCase(),
                        event: "cta_link_account",
                        o_id: _,
                        text: a?.toLowerCase()
                      });
                      break;
                    case "buy":
                      L({
                        element_placement: x?.toLowerCase(),
                        event: "cta_buy",
                        text: a?.toLowerCase() ?? "subscribe"
                      });
                      break;
                    case "store_link":
                      L({
                        element_placement: x?.toLowerCase(),
                        event: "cta_store_link",
                        text: a?.toLowerCase()
                      });
                      break;
                    case "other":
                      L({
                        element_placement: x?.toLowerCase(),
                        event: "cta_other",
                        text: a?.toLowerCase()
                      })
                  }
                },
                tabIndex: C ? -1 : 0,
                children: "string" == typeof a ? a : "Subscribe"
              }), (0, s.jsx)("div", {
                className: p.expandedArea,
                ref: E,
                "data-animate": C ? "open" : "closed",
                "aria-hidden": !C,
                style: {
                  height: C ? E?.current?.scrollHeight : 0
                },
                children: (0, s.jsx)(d(), {
                  active: C,
                  focusTrapOptions: {
                    allowOutsideClick: !0,
                    preventScroll: !0,
                    checkCanFocusTrap: e => new Promise((a => {
                      const t = setInterval((() => {
                        "hidden" !== getComputedStyle(e[0]).visibility && (a(), clearInterval(t))
                      }), 5)
                    }))
                  },
                  children: (0, s.jsxs)("div", {
                    children: [(0, s.jsx)("button", {
                      className: p.closeButton,
                      onClick: () => {
                        w(!1), N(!0), L({
                          element_placement: x?.toLowerCase(),
                          event: "cta_other",
                          text: "close expanding platform button"
                        })
                      },
                      "aria-label": "Close",
                      tabIndex: C ? 0 : -1,
                      children: (0, s.jsx)("img", {
                        src: t(66426),
                        alt: "Close"
                      })
                    }), (0, s.jsx)("div", {
                      className: p.platformButtons,
                      children: k.length ? k.map((e => (0, s.jsx)(u, {
                        buttonText: e.buttonText ?? (0, i.findPlatform)(e.platform)?.friendlyName ?? "",
                        link: e.href,
                        platform: e.platform,
                        onClick: I(e),
                        target: h,
                        tabIndex: C ? 0 : -1
                      }, `${e.key}-${e.href}-${e.platform}`))) : ""
                    })]
                  })
                })
              })]
            })]
          })
        }
    }
  }
]);