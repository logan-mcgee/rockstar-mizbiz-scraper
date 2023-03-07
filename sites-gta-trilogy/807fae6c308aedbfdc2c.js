(self.webpackChunk_rockstargames_sites_gta_trilogy = self.webpackChunk_rockstargames_sites_gta_trilogy || []).push([
  [479], {
    5479: (e, s, i) => {
      "use strict";
      i.r(s), i.d(s, {
        default: () => re
      });
      var t = i(6803),
        r = i(8976);
      var n = i(3322);
      const a = e => {
          let {
            gameSlug: s
          } = e;
          return (0, n.jsx)("div", {
            className: "a36af67ea8f983e1a7e7",
            style: {
              "--background-image": `url(${i(3098)(`./FOB_${s}.jpg`)})`
            }
          })
        },
        c = () => (0, n.jsxs)("div", {
          className: "fa5a764f09730b28dfbf",
          children: [(0, n.jsx)(a, {
            gameSlug: "VC"
          }), (0, n.jsx)(a, {
            gameSlug: "III"
          }), (0, n.jsx)(a, {
            gameSlug: "SA"
          })]
        });
      var l = i(2324),
        d = i(9929);
      const o = e => {
          let {
            variant: s = "full",
            className: t = "",
            style: r = {}
          } = e;
          return (0, n.jsx)("img", {
            style: r,
            className: (0, l.classList)("a0ac46591820de1d3457", t?.split(" ")),
            src: i(7118)(`./${s}-logo.svg`)
          })
        },
        g = e => {
          let {
            href: s,
            children: i,
            ...t
          } = e;
          return s ? (0, n.jsx)("a", {
            href: s,
            ...t,
            children: i
          }) : (0, n.jsx)("button", {
            ...t,
            children: i
          })
        },
        m = e => {
          let {
            style: s,
            children: i,
            ...t
          } = e;
          return (0, n.jsx)(g, {
            style: s,
            ...t,
            children: i
          })
        },
        h = (0, d.withTranslations)((e => {
          let {
            t: s
          } = e;
          return (0, n.jsx)(m, {
            href: "https://store.rockstargames.com/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition",
            target: "_blank",
            className: "f7e0a808bf160fdfab25",
            children: s("trilogy.pre-order-now")
          })
        })),
        x = "be660a5267f21286670b",
        j = (0, d.withTranslations)((e => {
          let {
            logoVariant: s = "full",
            className: t = "",
            style: r = {},
            t: a
          } = e;
          return (0, n.jsx)("div", {
            className: (0, l.classList)("f8ff5fa66aad95e014dc", t?.split(" ")),
            style: r,
            children: (0, n.jsxs)("div", {
              className: "a9f668ca74c93f96a129",
              children: [(0, n.jsxs)("div", {
                className: "eaf46edc8aa7368eeba2",
                children: [(0, n.jsx)(o, {
                  className: "bd0a9b2917492a96f969",
                  variant: s
                }), (0, n.jsx)("div", {
                  className: "fb783ed90cbd3a24dd63",
                  children: a("trilogy.release-date")
                })]
              }), (0, n.jsx)(h, {}), (0, n.jsxs)("div", {
                className: "c8a601ec5679ed0c9c36",
                children: [(0, n.jsx)("img", {
                  className: x,
                  src: i(139)
                }), (0, n.jsx)("img", {
                  className: x,
                  src: i(3156)
                }), (0, n.jsx)("img", {
                  className: x,
                  src: i(9664)
                }), (0, n.jsx)("img", {
                  className: x,
                  src: i(6208)
                }), (0, n.jsx)("img", {
                  className: x,
                  src: i(4491)
                })]
              })]
            })
          })
        })),
        f = () => (0, n.jsxs)("section", {
          id: "intro",
          className: "aa166a02d07508cdbac7",
          children: [(0, n.jsx)("div", {
            className: "bfddf79c0e3f74171eb7",
            children: (0, n.jsx)(c, {})
          }), (0, n.jsx)(j, {
            className: "a068ced0f58f81636b27",
            logoVariant: "full"
          })]
        });
      var u = i(4224),
        p = i.n(u);
      const b = e => {
          let {
            children: s,
            className: i,
            ...t
          } = e;
          return (0, n.jsx)("section", {
            className: (0, l.classList)("f79fc6dc610f691a4653", i?.split(" ")),
            ...t,
            children: s
          })
        },
        v = () => (0, n.jsx)(b, {
          id: "trailer",
          children: (0, n.jsx)(p(), {
            id: "12237"
          })
        }),
        w = (0, d.withTranslations)((e => {
          let {
            t: s
          } = e;
          return (0, n.jsx)(b, {
            id: "info",
            children: (0, n.jsxs)("div", {
              className: "cc4a79007948542703b7",
              children: [(0, n.jsxs)("div", {
                className: "cb2612a14f3301d9c460",
                children: [(0, n.jsx)("h3", {
                  dangerouslySetInnerHTML: {
                    __html: s("trilogy.info.title")
                  }
                }), (0, n.jsx)("p", {
                  children: s("trilogy.info.body")
                })]
              }), (0, n.jsxs)("div", {
                className: "ec79a700c82727438f54",
                children: [(0, n.jsx)("img", {
                  src: i(1111),
                  className: "e92103ce4729cbd29ac3"
                }), (0, n.jsx)("img", {
                  src: i(7962),
                  className: "a844a7d4d070de411266"
                }), (0, n.jsx)("img", {
                  src: i(589),
                  className: "c8151865f9aa5748f8ad"
                })]
              })]
            })
          })
        }));
      var y = i(822),
        N = i(9303),
        T = i(6168);
      const S = e => {
          let {
            src: s,
            children: i,
            style: t = {},
            className: r = ""
          } = e;
          return (0, n.jsxs)("div", {
            className: (0, l.classList)("b58742091f7b9f2c4f47", r?.split(" ")),
            style: t,
            children: [(0, n.jsx)("div", {
              className: "c2be77495cb1157a42bf",
              children: (0, n.jsx)("img", {
                src: s
              })
            }), (0, n.jsx)("div", {
              className: "d3157430d2380bffd319",
              children: i
            })]
          })
        },
        E = "ff17da61de69979bc6ea",
        I = "ece2d6982145b6528f5d",
        _ = e => {
          let {
            t: s
          } = e;
          return (0, n.jsxs)(S, {
            src: i(306),
            className: E,
            children: [(0, n.jsx)("div", {
              className: I,
              dangerouslySetInnerHTML: {
                __html: s("trilogy.enhancements.1.title")
              }
            }), (0, n.jsxs)("ul", {
              children: [(0, n.jsx)("li", {
                children: s("trilogy.enhancements.1.li.1")
              }), (0, n.jsx)("li", {
                children: s("trilogy.enhancements.1.li.2")
              }), (0, n.jsx)("li", {
                children: s("trilogy.enhancements.1.li.3")
              }), (0, n.jsx)("li", {
                children: s("trilogy.enhancements.1.li.4")
              }), (0, n.jsx)("li", {
                children: s("trilogy.enhancements.1.li.5")
              }), (0, n.jsx)("li", {
                children: s("trilogy.enhancements.1.li.6")
              })]
            })]
          })
        },
        O = e => {
          let {
            t: s
          } = e;
          return (0, n.jsxs)(S, {
            src: i(9283),
            className: E,
            children: [(0, n.jsx)("div", {
              className: I,
              dangerouslySetInnerHTML: {
                __html: s("trilogy.enhancements.2.title")
              }
            }), (0, n.jsxs)("ul", {
              children: [(0, n.jsx)("li", {
                children: s("trilogy.enhancements.2.li.1")
              }), (0, n.jsx)("li", {
                children: s("trilogy.enhancements.2.li.2")
              }), (0, n.jsx)("li", {
                children: s("trilogy.enhancements.2.li.3")
              }), (0, n.jsx)("li", {
                children: s("trilogy.enhancements.2.li.4")
              }), (0, n.jsx)("li", {
                children: s("trilogy.enhancements.2.li.5")
              })]
            })]
          })
        },
        W = e => {
          let {
            t: s
          } = e;
          return (0, n.jsxs)(S, {
            src: i(2893),
            className: E,
            children: [(0, n.jsx)("div", {
              className: I,
              dangerouslySetInnerHTML: {
                __html: s("trilogy.enhancements.3.title")
              }
            }), (0, n.jsxs)("ul", {
              children: [(0, n.jsx)("li", {
                children: s("trilogy.enhancements.3.li.2")
              }), (0, n.jsx)("li", {
                children: s("trilogy.enhancements.3.li.3")
              }), (0, n.jsx)("li", {
                children: s("trilogy.enhancements.3.li.4")
              })]
            })]
          })
        },
        z = (0, d.withMediaBasedProps)((0, d.withTranslations)((e => {
          let {
            t: s
          } = e;
          const [i, t] = (0, y.useState)(1), [r, a] = (0, y.useState)(16), c = () => {
            const e = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
            t((e => e < 600 ? 1 : e >= 600 && e < 1024 ? 1.25 : e >= 1024 && e < 1280 ? 1.5 : e >= 1280 && e < 1440 ? 2 : e >= 1440 && e < 1920 ? 2.5 : 3)(e)), a((e => e < 768 ? 16 : e >= 768 && e < 1024 ? 18 : e >= 1024 && e < 1920 ? 20 : 22)(e))
          };
          return (0, y.useEffect)((() => (c(), window.addEventListener("resize", c), () => window.removeEventListener("resize", c)))), (0, n.jsxs)(b, {
            id: "enhancements",
            className: "ba8ece28c1f4c11f7736",
            children: [(0, n.jsx)("h3", {
              children: s("trilogy.nav.enhancements")
            }), (0, n.jsx)("div", {
              className: "b9103de23c3ab73c13c0",
              children: (0, n.jsxs)(T.tq, {
                slidesPerView: i,
                modules: [N.tl],
                pagination: {
                  clickable: !0
                },
                spaceBetween: r,
                children: [(0, n.jsx)(T.o5, {
                  children: (0, n.jsx)(_, {
                    t: s
                  })
                }), (0, n.jsx)(T.o5, {
                  children: (0, n.jsx)(O, {
                    t: s
                  })
                }), (0, n.jsx)(T.o5, {
                  children: (0, n.jsx)(W, {
                    t: s
                  })
                })]
              })
            })]
          })
        })));
      var H = i(5306),
        L = i(8416),
        $ = i(64),
        F = i(3205);
      const C = e => {
          const s = window.innerWidth,
            i = s < 1440 ? window.innerHeight - 60 : window.innerHeight,
            t = s > i ? 1 : 2,
            r = s > i ? s : i * (s > i ? 1 : 1.3);
          let n, a, c;
          window.innerWidth < 768 ? (n = s, a = i, c = 8) : window.innerWidth >= 768 && window.innerWidth < 1024 ? (n = s, a = i, c = 9) : window.innerWidth >= 1024 && window.innerWidth < 1920 ? (n = .9 * s, a = .9 * i, c = 10) : window.innerWidth >= 1920 && (n = .75 * s, a = .75 * i, c = 22);
          const l = 2 * n + c,
            d = e + i,
            o = .25 * r,
            g = .65 * r,
            m = .8 * r;
          return {
            sizes: {
              vw: s,
              vh: i,
              initialMiddleWidth: s,
              finalColumnWidth: (s - 2 * c) / 3,
              gameDescriptionWidth: n,
              gameDescriptionHeight: a,
              imageGridGap: c,
              transitionDistance: l
            },
            triggers: {
              endIntro: e,
              startGames: d,
              gamesTrigger1: o,
              gamesTrigger2: g,
              gamesTrigger3: m,
              introTriggers: [e, d, d + o, d + g],
              introTriggers2: [e, d, d + o, d + g, d + m, d + l * t],
              FadeFOBTriggers: [d + o, d + g],
              FadeFOBTriggersText: [d + o + .2 * r, d + g],
              FadeFOBTriggersGirl: [d + o + .05 * r, d + g - .2 * r]
            }
          }
        },
        G = e => {
          let {
            gameSlug: s,
            children: t,
            style: r,
            triggers: a
          } = e;
          if (!a) return null;
          const {
            scrollY: c
          } = (0, L.M)(), {
            FadeFOBTriggers: l,
            FadeFOBTriggersText: d,
            FadeFOBTriggersGirl: g
          } = a, [m, h] = (0, y.useState)(null), [x, j] = (0, y.useState)(null), [f, u] = (0, y.useState)(null), [p, b] = (0, y.useState)(null);
          (0, y.useEffect)((() => {
            const e = () => {
              let e, s, i, t;
              window.innerWidth < 768 ? (e = .3, s = 1.1 * e, i = .05, t = .1) : window.innerWidth >= 768 && window.innerWidth < 1024 ? (e = .22, s = .8 * e, i = .05, t = .2) : window.innerWidth >= 1024 && window.innerWidth < 1920 || window.innerWidth >= 1920 && window.innerWidth < 2560 ? (e = .15, s = .6 * e, i = .05, t = .2) : window.innerWidth >= 2560 && (e = .11, s = .6 * e, i = .1, t = .2), h(e), j(s), u(i), b(t)
            };
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), []);
          const v = (0, $.H)(c, l, [window.innerWidth * m, window.innerWidth * x]),
            w = (0, $.H)(c, l, [window.innerHeight * f, window.innerHeight * p]),
            N = (0, $.H)(c, g, [1, 0]),
            T = (0, $.H)(c, d, [0, 1]);
          return (0, n.jsxs)(F.E.div, {
            className: "dcdbda981240e8f536b9",
            "data-game": s,
            style: r,
            children: [(0, n.jsx)(F.E.div, {
              className: "befa2bbc0fdb36d85638",
              style: {
                opacity: T
              },
              children: t
            }), (0, n.jsx)(F.E.img, {
              src: i(1163)(`./${s}_Girl.png`),
              className: "e1dd3d552e7aed061103",
              style: {
                opacity: N
              }
            }), (0, n.jsx)(F.E.div, {
              className: "a9143dec4aa15b7cf025",
              style: {
                width: v,
                paddingBottom: w
              },
              children: (0, n.jsx)(o, {
                variant: s
              })
            })]
          })
        },
        k = e => {
          let {
            gameSlug: s,
            children: i,
            triggers: t,
            sizes: r
          } = e;
          const {
            scrollY: a
          } = (0, L.M)(), {
            endIntro: c,
            startGames: l,
            gamesTrigger1: d,
            gamesTrigger2: o,
            gamesTrigger3: g,
            introTriggers: m,
            introTriggers2: h
          } = t, {
            vw: x,
            vh: j,
            initialMiddleWidth: f,
            finalColumnWidth: u,
            gameDescriptionWidth: p,
            gameDescriptionHeight: b,
            imageGridGap: v,
            transitionDistance: w
          } = r, y = (0, $.H)(a, m, [u, u, u, p]), N = (0, $.H)(a, h, [0, 0, 0, (j - b) / 2, (j - b) / 2, (j - b) / 2]), T = (0, $.H)(a, h, [0, 0, 0, p + v, p + v, p - w]), S = (0, $.H)(a, [l, l + 1, l + d, l + o], [j, j, j, b]);
          return (0, n.jsx)(G, {
            gameSlug: s,
            style: {
              x: T,
              y: N,
              width: y,
              height: S
            },
            triggers: t,
            sizes: r,
            children: i
          })
        },
        D = e => {
          let {
            t: s,
            triggers: i,
            sizes: t
          } = e;
          const {
            scrollY: r
          } = (0, L.M)(), {
            endIntro: a,
            startGames: c,
            gamesTrigger1: l,
            gamesTrigger2: d,
            gamesTrigger3: o,
            introTriggers: g,
            introTriggers2: m
          } = i, {
            vw: h,
            vh: x,
            initialMiddleWidth: j,
            finalColumnWidth: f,
            gameDescriptionWidth: u,
            gameDescriptionHeight: p,
            imageGridGap: b,
            transitionDistance: v
          } = t, w = (0, $.H)(r, g, [j, f, f, u]), y = (0, $.H)(r, m, [0, 0, 0, (x - p) / 2, (x - p) / 2, (x - p) / 2]), N = (0, $.H)(r, m, [0, 0, 0, u + b, u + b, u - v]), T = (0, $.H)(r, [c, c + 1, c + l, c + d], [x, x, x, p]);
          return (0, n.jsxs)(G, {
            gameSlug: "VC",
            style: {
              x: N,
              y,
              width: w,
              height: T
            },
            triggers: i,
            sizes: t,
            children: [(0, n.jsx)("h3", {
              children: s("trilogy.games.vc.title")
            }), (0, n.jsx)("p", {
              children: s("trilogy.games.vc.body")
            })]
          })
        },
        B = e => {
          let {
            t: s,
            triggers: i,
            sizes: t
          } = e;
          return (0, n.jsxs)(k, {
            gameSlug: "III",
            triggers: i,
            sizes: t,
            children: [(0, n.jsx)("h3", {
              children: s("trilogy.games.iii.title")
            }), (0, n.jsx)("p", {
              children: s("trilogy.games.iii.body")
            })]
          })
        },
        M = e => {
          let {
            t: s,
            triggers: i,
            sizes: t
          } = e;
          return (0, n.jsxs)(k, {
            gameSlug: "SA",
            triggers: i,
            sizes: t,
            children: [(0, n.jsx)("h3", {
              children: s("trilogy.games.sc.title")
            }), (0, n.jsx)("p", {
              children: s("trilogy.games.sc.body")
            })]
          })
        },
        V = (0, d.withTranslations)((e => {
          let {
            t: s,
            startDistance: i
          } = e;
          if (!i) return null;
          const [t, r] = (0, y.useState)(C(i));
          return (0, y.useEffect)((() => {
            const e = () => {
              r(C(i))
            };
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), [i]), (0, n.jsxs)(F.E.div, {
            className: "c8c8f19c748d36264e00",
            children: [(0, n.jsx)(B, {
              t: s,
              triggers: t?.triggers,
              sizes: t?.sizes
            }), (0, n.jsx)(D, {
              t: s,
              triggers: t?.triggers,
              sizes: t?.sizes
            }), (0, n.jsx)(M, {
              t: s,
              triggers: t?.triggers,
              sizes: t?.sizes
            })]
          })
        })),
        Y = () => {
          const e = (0, y.useRef)(),
            [s, i] = (0, y.useState)(parseInt(localStorage?.getItem("startGames")) ?? null),
            t = (0, H.S1)(e, {
              threshold: [0]
            }),
            [r, a] = (0, y.useState)(0),
            c = e => {
              i(e), localStorage.setItem("startGames", e)
            };
          return (0, y.useEffect)((() => {
            const i = () => {
              a(window.pageYOffset), t?.isIntersecting && !s && (c(window.pageYOffset > r ? window.pageYOffset : window.pageYOffset - e.current.offsetHeight - window.innerHeight), window.removeEventListener("scroll", i))
            };
            return window.addEventListener("scroll", i), () => window.removeEventListener("scroll", i)
          }), [r, s]), (0, y.useEffect)((() => {
            const s = () => {
              if (c(null), t?.isIntersecting) {
                const s = window.pageYOffset + e.current.getBoundingClientRect().top - window.innerHeight;
                c(s)
              }
            };
            return window.addEventListener("resize", s), () => window.removeEventListener("resize", s)
          }), [t]), (0, n.jsx)("section", {
            id: "games",
            ref: e,
            className: "a568b187c32b9be3bb67",
            children: (0, n.jsx)(V, {
              startDistance: s
            })
          })
        },
        A = "e28e820fac8f253c5cc4",
        U = "a90fb408626463d4a95f",
        R = "afc3b0efe233645ca74c",
        P = "b1ef1e71dd8e9e771878",
        q = "bd4a354be914210ae786",
        J = "e59e9372638301421091",
        K = (0, d.withTranslations)((e => {
          let {
            t: s
          } = e;
          return (0, n.jsxs)(b, {
            id: "media",
            className: "d9c5615fe61336ad9ede",
            children: [(0, n.jsx)("div", {
              className: "c07c41bc93d43d44e7a6",
              children: (0, n.jsx)("h3", {
                children: s("trilogy.beforeafter-title")
              })
            }), (0, n.jsxs)("div", {
              className: `${A} ${U}`,
              children: [(0, n.jsx)("img", {
                src: i(8028)
              }), (0, n.jsx)("div", {
                className: q,
                children: (0, n.jsx)(o, {
                  className: J,
                  variant: "III"
                })
              })]
            }), (0, n.jsxs)("div", {
              className: `${A} ${R}`,
              children: [(0, n.jsx)("img", {
                src: i(4723)
              }), (0, n.jsx)("img", {
                src: i(5131)
              })]
            }), (0, n.jsxs)("div", {
              className: `${A} ${P}`,
              children: [(0, n.jsx)("img", {
                src: i(1885)
              }), (0, n.jsx)("img", {
                src: i(9482)
              })]
            }), (0, n.jsxs)("div", {
              className: `${A} ${U}`,
              children: [(0, n.jsx)("img", {
                src: i(4139)
              }), (0, n.jsx)("div", {
                className: q,
                children: (0, n.jsx)(o, {
                  className: J,
                  variant: "VC"
                })
              })]
            }), (0, n.jsxs)("div", {
              className: `${A} d99bbb5216fa27290a21`,
              children: [(0, n.jsx)("img", {
                src: i(6276)
              }), (0, n.jsx)("img", {
                src: i(3642)
              })]
            }), (0, n.jsxs)("div", {
              className: `${A} ${P}`,
              children: [(0, n.jsx)("img", {
                src: i(2240)
              }), (0, n.jsx)("img", {
                src: i(1402)
              })]
            }), (0, n.jsxs)("div", {
              className: `${A} ${U}`,
              children: [(0, n.jsx)("img", {
                src: i(5890)
              }), (0, n.jsx)("div", {
                className: q,
                children: (0, n.jsx)(o, {
                  className: J,
                  variant: "SA"
                })
              })]
            }), (0, n.jsxs)("div", {
              className: `${A} ${R}`,
              children: [(0, n.jsx)("img", {
                src: i(7029)
              }), (0, n.jsx)("img", {
                src: i(9413)
              })]
            }), (0, n.jsxs)("div", {
              className: `${A} ${P}`,
              children: [(0, n.jsx)("img", {
                src: i(2266)
              }), (0, n.jsx)("img", {
                src: i(6619)
              })]
            })]
          })
        })),
        Q = (e, s, i) => {
          const t = e.split(s),
            r = [];
          for (let e = 0; e < t.length; e++) r.push(t[e]), e < t.length - 1 && r.push(i);
          return r
        },
        X = (0, r.withSimpleErrorBoundary)(r.Rating),
        Z = (0, d.withTranslations)((e => {
          let {
            t: s
          } = e;
          return (0, n.jsxs)("div", {
            className: "f03797f0295f28b6d41c",
            children: [(0, n.jsxs)(b, {
              className: "cf704f2164d83cf48288",
              children: [(0, n.jsx)("div", {
                className: "c3bb2beda93ad91908e7",
                children: (0, n.jsx)("img", {
                  src: i(8352)
                })
              }), (0, n.jsx)(j, {
                className: "e2c7bd6156b1d0b6963a",
                logoVariant: "horizontal"
              })]
            }), (0, n.jsx)("div", {
              className: "a3b071cd4b54d59bbefc",
              children: (0, n.jsxs)(b, {
                children: [(0, n.jsx)(X, {
                  titleSlug: "GTATrilogy"
                }), (0, n.jsx)("div", {
                  className: "c2ba483f7304e81e6c8a",
                  children: Q(s("trilogy.footer"), "{logo}", (0, n.jsx)("div", {
                    className: "e331b4e3b3c60e290f92"
                  }))
                })]
              })
            })]
          })
        })),
        ee = e => {
          let {
            to: s,
            children: i
          } = e;
          const t = function(e) {
            let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            if (s <= 0) return;
            const i = document.documentElement,
              r = document.getElementById(e).offsetTop,
              n = (r - i.scrollTop) / s * 10;
            setTimeout((() => {
              i.scrollTop += n, i.scrollTop !== r && t(e, s - 10)
            }), 10)
          };
          return (0, n.jsx)("a", {
            onClick: () => t(s),
            children: i
          })
        },
        se = (0, d.withTranslations)((e => {
          let {
            t: s
          } = e;
          const {
            scrollY: i
          } = (0, L.M)(), [t, r] = (0, y.useState)(!1);
          i.onChange((e => r(e > 600)));
          const [a, c] = (0, y.useState)(!1), [l, d] = (0, y.useState)(0), [g, m] = (0, y.useState)(60);
          return (0, y.useEffect)((() => {
            const e = () => {
              const e = window.pageYOffset;
              c(e > l), d(e), m(e > l ? 0 : 60)
            };
            return window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
          }), [a, l]), (0, n.jsxs)(F.E.nav, {
            className: "a1a4f4fc4b02bd5cde19",
            animate: t ? {
              opacity: 1,
              y: g,
              x: "-50%"
            } : {
              opacity: 0,
              y: 0,
              x: "-50%"
            },
            transition: {
              duration: .3,
              ease: "easeInOut"
            },
            children: [(0, n.jsx)(o, {
              variant: "horizontal"
            }), (0, n.jsxs)("div", {
              className: "f92727a6ea606bdd3cf6",
              children: [(0, n.jsx)(ee, {
                to: "trailer",
                children: s("trilogy.nav.trailer")
              }), (0, n.jsx)(ee, {
                to: "info",
                children: s("trilogy.nav.info")
              }), (0, n.jsx)(ee, {
                to: "enhancements",
                children: s("trilogy.nav.enhancements")
              }), (0, n.jsx)(ee, {
                to: "games",
                children: s("trilogy.nav.games")
              }), (0, n.jsx)(ee, {
                to: "media",
                children: s("trilogy.nav.media")
              })]
            }), (0, n.jsx)(h, {})]
          })
        })),
        ie = () => (0, n.jsxs)("div", {
          className: "cb5458ba3b5564ef3d43",
          children: [(0, n.jsx)(se, {}), (0, n.jsx)(f, {}), (0, n.jsx)(v, {}), (0, n.jsx)(w, {}), (0, n.jsx)(z, {}), (0, n.jsx)(Y, {}), (0, n.jsx)(K, {}), (0, n.jsx)(Z, {})]
        }),
        te = () => {
          const e = [{
            path: "/",
            element: (0, n.jsx)(ie, {})
          }, {
            path: "*",
            element: (0, n.jsx)(r.Wasted, {
              error: {
                code: window?.env?.responseStatusCode ?? 398
              }
            })
          }];
          return (0, t.useRoutes)(e)
        },
        re = () => (0, n.jsx)(te, {})
    },
    1163: (e, s, i) => {
      var t = {
        "./III_Girl.png": 648,
        "./SA_Girl.png": 7806,
        "./VC_Girl.png": 1458
      };

      function r(e) {
        var s = n(e);
        return i(s)
      }

      function n(e) {
        if (!i.o(t, e)) {
          var s = new Error("Cannot find module '" + e + "'");
          throw s.code = "MODULE_NOT_FOUND", s
        }
        return t[e]
      }
      r.keys = function() {
        return Object.keys(t)
      }, r.resolve = n, e.exports = r, r.id = 1163
    },
    7118: (e, s, i) => {
      var t = {
        "./III-logo.svg": 3581,
        "./SA-logo.svg": 9503,
        "./VC-logo.svg": 4930,
        "./full-logo.svg": 4215,
        "./horizontal-logo.svg": 6201
      };

      function r(e) {
        var s = n(e);
        return i(s)
      }

      function n(e) {
        if (!i.o(t, e)) {
          var s = new Error("Cannot find module '" + e + "'");
          throw s.code = "MODULE_NOT_FOUND", s
        }
        return t[e]
      }
      r.keys = function() {
        return Object.keys(t)
      }, r.resolve = n, e.exports = r, r.id = 7118
    },
    3098: (e, s, i) => {
      var t = {
        "./FOB_III.jpg": 3805,
        "./FOB_SA.jpg": 5558,
        "./FOB_VC.jpg": 2109
      };

      function r(e) {
        var s = n(e);
        return i(s)
      }

      function n(e) {
        if (!i.o(t, e)) {
          var s = new Error("Cannot find module '" + e + "'");
          throw s.code = "MODULE_NOT_FOUND", s
        }
        return t[e]
      }
      r.keys = function() {
        return Object.keys(t)
      }, r.resolve = n, e.exports = r, r.id = 3098
    },
    648: (e, s, i) => {
      "use strict";
      e.exports = i.p + "img/aaef94029e6656ccf54a.png"
    },
    7806: (e, s, i) => {
      "use strict";
      e.exports = i.p + "img/81b8d1a3188c97c25e45.png"
    },
    1458: (e, s, i) => {
      "use strict";
      e.exports = i.p + "img/c8e92c375e0511302e4b.png"
    },
    3581: (e, s, i) => {
      "use strict";
      e.exports = i.p + "img/0929f57ca62562b9a414.svg"
    },
    9503: (e, s, i) => {
      "use strict";
      e.exports = i.p + "img/a49827a3589d82047913.svg"
    },
    4930: (e, s, i) => {
      "use strict";
      e.exports = i.p + "img/0f7a4be849dc278c14cc.svg"
    },
    4215: (e, s, i) => {
      "use strict";
      e.exports = i.p + "img/2d03ebc8143725df5211.svg"
    },
    6201: (e, s, i) => {
      "use strict";
      e.exports = i.p + "img/2bb1101ae2da2c76b637.svg"
    },
    3805: (e, s, i) => {
      "use strict";
      e.exports = i.p + "img/be1e1bc3d97b8b93b8fe.jpg"
    },
    5558: (e, s, i) => {
      "use strict";
      e.exports = i.p + "img/5e85ab53ae3eef836b23.jpg"
    },
    2109: (e, s, i) => {
      "use strict";
      e.exports = i.p + "img/38aec280741e6376aa1d.jpg"
    },
    4491: (e, s, i) => {
      "use strict";
      e.exports = i.p + "img/d12185c65d31d91fcd01.svg"
    },
    139: (e, s, i) => {
      "use strict";
      e.exports = i.p + "img/030c2fb3b92e10af9e59.svg"
    },
    6208: (e, s, i) => {
      "use strict";
      e.exports = i.p + "img/e151b8a05dd57482f5fd.svg"
    },
    9664: (e, s, i) => {
      "use strict";
      e.exports = i.p + "img/ad198d46c09ae63d0062.svg"
    },
    3156: (e, s, i) => {
      "use strict";
      e.exports = i.p + "img/e4ad77bb7e38dae39af9.svg"
    },
    306: (e, s, i) => {
      "use strict";
      e.exports = i.p + "img/bb2c527f9264604f9c96.jpg"
    },
    9283: (e, s, i) => {
      "use strict";
      e.exports = i.p + "img/afa2de9642866521f4d2.jpg"
    },
    2893: (e, s, i) => {
      "use strict";
      e.exports = i.p + "img/5038478f256b924725ac.jpg"
    },
    8352: (e, s, i) => {
      "use strict";
      e.exports = i.p + "img/be50e86e4a053c675d18.jpg"
    },
    1111: (e, s, i) => {
      "use strict";
      e.exports = i.p + "img/b1ff880488d88293b59c.jpg"
    },
    7962: (e, s, i) => {
      "use strict";
      e.exports = i.p + "img/3426d99a9ce4a3c66c5f.jpg"
    },
    589: (e, s, i) => {
      "use strict";
      e.exports = i.p + "img/e1e2b71627d3fb1f73d4.jpg"
    },
    8028: (e, s, i) => {
      "use strict";
      e.exports = i.p + "img/ff284e208b96afaf5e89.jpg"
    },
    4723: (e, s, i) => {
      "use strict";
      e.exports = i.p + "img/d31bd91f2973e4005066.jpg"
    },
    5131: (e, s, i) => {
      "use strict";
      e.exports = i.p + "img/6bb1401a759b8e20f913.jpg"
    },
    1885: (e, s, i) => {
      "use strict";
      e.exports = i.p + "img/5989bfab2bc294303b6d.jpg"
    },
    9482: (e, s, i) => {
      "use strict";
      e.exports = i.p + "img/c8a84b0a5078d4cc27fe.jpg"
    },
    5890: (e, s, i) => {
      "use strict";
      e.exports = i.p + "img/905ae00cf023a8e0c94b.jpg"
    },
    7029: (e, s, i) => {
      "use strict";
      e.exports = i.p + "img/1048912f85b80ac069d6.jpg"
    },
    9413: (e, s, i) => {
      "use strict";
      e.exports = i.p + "img/f70695b5f470504b2106.jpg"
    },
    2266: (e, s, i) => {
      "use strict";
      e.exports = i.p + "img/a7567fac70f5a7a49adc.jpg"
    },
    6619: (e, s, i) => {
      "use strict";
      e.exports = i.p + "img/6df1f432de5b7eb047dd.jpg"
    },
    4139: (e, s, i) => {
      "use strict";
      e.exports = i.p + "img/eeec6d7d9f661f77d84d.jpg"
    },
    6276: (e, s, i) => {
      "use strict";
      e.exports = i.p + "img/80d6d6b25c7e8b86187a.jpg"
    },
    3642: (e, s, i) => {
      "use strict";
      e.exports = i.p + "img/cf596cc9782312294064.jpg"
    },
    2240: (e, s, i) => {
      "use strict";
      e.exports = i.p + "img/ff25b9ab9b14464433c3.jpg"
    },
    1402: (e, s, i) => {
      "use strict";
      e.exports = i.p + "img/f34573e4ca2de764df33.jpg"
    }
  }
]);