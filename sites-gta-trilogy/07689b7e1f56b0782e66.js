(self.webpackChunk_rockstargames_sites_gta_trilogy = self.webpackChunk_rockstargames_sites_gta_trilogy || []).push([
  [479], {
    5479: (e, s, t) => {
      "use strict";
      t.r(s), t.d(s, {
        default: () => ae
      });
      var i = t(7814),
        a = t(8976);
      var r = t(3322);
      const n = e => {
          let {
            gameSlug: s
          } = e;
          return (0, r.jsx)("div", {
            className: "a36af67ea8f983e1a7e7",
            style: {
              "--background-image": `url(${t(3098)(`./FOB_${s}.jpg`)})`
            }
          })
        },
        c = () => (0, r.jsxs)("div", {
          className: "fa5a764f09730b28dfbf",
          children: [(0, r.jsx)(n, {
            gameSlug: "VC"
          }), (0, r.jsx)(n, {
            gameSlug: "III"
          }), (0, r.jsx)(n, {
            gameSlug: "SA"
          })]
        });
      var m = t(2324),
        d = t(9929);
      const o = e => {
          let {
            variant: s = "full",
            className: i = "",
            style: a = {}
          } = e;
          return (0, r.jsx)("img", {
            style: a,
            className: (0, m.classList)("a0ac46591820de1d3457", i?.split(" ")),
            src: t(7118)(`./${s}-logo.svg`)
          })
        },
        l = e => {
          let {
            href: s,
            children: t,
            ...i
          } = e;
          return s ? (0, r.jsx)("a", {
            href: s,
            ...i,
            children: t
          }) : (0, r.jsx)("button", {
            ...i,
            children: t
          })
        },
        g = e => {
          let {
            style: s,
            children: t,
            ...i
          } = e;
          return (0, r.jsx)(l, {
            style: s,
            ...i,
            children: t
          })
        },
        h = (0, d.withTranslations)((e => {
          let {
            t: s
          } = e;
          return (0, r.jsx)(g, {
            href: "https://store.rockstargames.com/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition",
            target: "_blank",
            className: "f7e0a808bf160fdfab25",
            children: s("trilogy.pre-order-now")
          })
        })),
        f = "be660a5267f21286670b",
        x = (0, d.withTranslations)((e => {
          let {
            logoVariant: s = "full",
            className: i = "",
            style: a = {},
            t: n
          } = e;
          return (0, r.jsx)("div", {
            className: (0, m.classList)("f8ff5fa66aad95e014dc", i?.split(" ")),
            style: a,
            children: (0, r.jsxs)("div", {
              className: "a9f668ca74c93f96a129",
              children: [(0, r.jsxs)("div", {
                className: "eaf46edc8aa7368eeba2",
                children: [(0, r.jsx)(o, {
                  className: "bd0a9b2917492a96f969",
                  variant: s
                }), (0, r.jsx)("div", {
                  className: "fb783ed90cbd3a24dd63",
                  children: n("trilogy.release-date")
                })]
              }), (0, r.jsx)(h, {}), (0, r.jsxs)("div", {
                className: "c8a601ec5679ed0c9c36",
                children: [(0, r.jsx)("img", {
                  className: f,
                  src: t(139)
                }), (0, r.jsx)("img", {
                  className: f,
                  src: t(3156)
                }), (0, r.jsx)("img", {
                  className: f,
                  src: t(9664)
                }), (0, r.jsx)("img", {
                  className: f,
                  src: t(6208)
                }), (0, r.jsx)("img", {
                  className: f,
                  src: t(4491)
                })]
              })]
            })
          })
        })),
        j = () => (0, r.jsxs)("section", {
          id: "intro",
          className: "aa166a02d07508cdbac7",
          children: [(0, r.jsx)("div", {
            className: "bfddf79c0e3f74171eb7",
            children: (0, r.jsx)(c, {})
          }), (0, r.jsx)(x, {
            className: "a068ced0f58f81636b27",
            logoVariant: "full"
          })]
        });
      var u = t(4224),
        p = t.n(u);
      const b = e => {
          let {
            children: s,
            className: t,
            ...i
          } = e;
          return (0, r.jsx)("section", {
            className: (0, m.classList)("f79fc6dc610f691a4653", t?.split(" ")),
            ...i,
            children: s
          })
        },
        v = () => (0, r.jsx)(b, {
          id: "trailer",
          children: (0, r.jsx)(p(), {
            id: "12237"
          })
        }),
        w = (0, d.withTranslations)((e => {
          let {
            t: s
          } = e;
          return (0, r.jsx)(b, {
            id: "info",
            children: (0, r.jsxs)("div", {
              className: "cc4a79007948542703b7",
              children: [(0, r.jsxs)("div", {
                className: "cb2612a14f3301d9c460",
                children: [(0, r.jsx)("h3", {
                  dangerouslySetInnerHTML: {
                    __html: s("trilogy.info.title")
                  }
                }), (0, r.jsx)("p", {
                  children: s("trilogy.info.body")
                })]
              }), (0, r.jsxs)("div", {
                className: "ec79a700c82727438f54",
                children: [(0, r.jsx)("img", {
                  src: t(1111),
                  className: "e92103ce4729cbd29ac3"
                }), (0, r.jsx)("img", {
                  src: t(7962),
                  className: "a844a7d4d070de411266"
                }), (0, r.jsx)("img", {
                  src: t(589),
                  className: "c8151865f9aa5748f8ad"
                })]
              })]
            })
          })
        }));
      var _ = t(822),
        k = t(9303),
        y = t(6168);
      const N = e => {
          let {
            src: s,
            children: t,
            style: i = {},
            className: a = ""
          } = e;
          return (0, r.jsxs)("div", {
            className: (0, m.classList)("b58742091f7b9f2c4f47", a?.split(" ")),
            style: i,
            children: [(0, r.jsx)("div", {
              className: "c2be77495cb1157a42bf",
              children: (0, r.jsx)("img", {
                src: s
              })
            }), (0, r.jsx)("div", {
              className: "d3157430d2380bffd319",
              children: t
            })]
          })
        },
        z = "ff17da61de69979bc6ea",
        T = "ece2d6982145b6528f5d",
        S = e => {
          let {
            t: s
          } = e;
          return (0, r.jsxs)(N, {
            src: t(306),
            className: z,
            children: [(0, r.jsx)("div", {
              className: T,
              dangerouslySetInnerHTML: {
                __html: s("trilogy.enhancements.1.title")
              }
            }), (0, r.jsxs)("ul", {
              children: [(0, r.jsx)("li", {
                children: s("trilogy.enhancements.1.li.1")
              }), (0, r.jsx)("li", {
                children: s("trilogy.enhancements.1.li.2")
              }), (0, r.jsx)("li", {
                children: s("trilogy.enhancements.1.li.3")
              }), (0, r.jsx)("li", {
                children: s("trilogy.enhancements.1.li.4")
              }), (0, r.jsx)("li", {
                children: s("trilogy.enhancements.1.li.5")
              }), (0, r.jsx)("li", {
                children: s("trilogy.enhancements.1.li.6")
              })]
            })]
          })
        },
        E = e => {
          let {
            t: s
          } = e;
          return (0, r.jsxs)(N, {
            src: t(9283),
            className: z,
            children: [(0, r.jsx)("div", {
              className: T,
              dangerouslySetInnerHTML: {
                __html: s("trilogy.enhancements.2.title")
              }
            }), (0, r.jsxs)("ul", {
              children: [(0, r.jsx)("li", {
                children: s("trilogy.enhancements.2.li.1")
              }), (0, r.jsx)("li", {
                children: s("trilogy.enhancements.2.li.2")
              }), (0, r.jsx)("li", {
                children: s("trilogy.enhancements.2.li.3")
              }), (0, r.jsx)("li", {
                children: s("trilogy.enhancements.2.li.4")
              }), (0, r.jsx)("li", {
                children: s("trilogy.enhancements.2.li.5")
              })]
            })]
          })
        },
        I = e => {
          let {
            t: s
          } = e;
          return (0, r.jsxs)(N, {
            src: t(2893),
            className: z,
            children: [(0, r.jsx)("div", {
              className: T,
              dangerouslySetInnerHTML: {
                __html: s("trilogy.enhancements.3.title")
              }
            }), (0, r.jsxs)("ul", {
              children: [(0, r.jsx)("li", {
                children: s("trilogy.enhancements.3.li.2")
              }), (0, r.jsx)("li", {
                children: s("trilogy.enhancements.3.li.3")
              }), (0, r.jsx)("li", {
                children: s("trilogy.enhancements.3.li.4")
              })]
            })]
          })
        },
        O = (0, d.withMediaBasedProps)((0, d.withTranslations)((e => {
          let {
            t: s
          } = e;
          const [t, i] = (0, _.useState)(1), [a, n] = (0, _.useState)(16), c = () => {
            const e = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
            i((e => e < 600 ? 1 : e >= 600 && e < 1024 ? 1.25 : e >= 1024 && e < 1280 ? 1.5 : e >= 1280 && e < 1440 ? 2 : e >= 1440 && e < 1920 ? 2.5 : 3)(e)), n((e => e < 768 ? 16 : e >= 768 && e < 1024 ? 18 : e >= 1024 && e < 1920 ? 20 : 22)(e))
          };
          return (0, _.useEffect)((() => (c(), window.addEventListener("resize", c), () => window.removeEventListener("resize", c)))), (0, r.jsxs)(b, {
            id: "enhancements",
            className: "ba8ece28c1f4c11f7736",
            children: [(0, r.jsx)("h3", {
              children: s("trilogy.nav.enhancements")
            }), (0, r.jsx)("div", {
              className: "b9103de23c3ab73c13c0",
              children: (0, r.jsxs)(y.tq, {
                slidesPerView: t,
                modules: [k.tl],
                pagination: {
                  clickable: !0
                },
                spaceBetween: a,
                children: [(0, r.jsx)(y.o5, {
                  children: (0, r.jsx)(S, {
                    t: s
                  })
                }), (0, r.jsx)(y.o5, {
                  children: (0, r.jsx)(E, {
                    t: s
                  })
                }), (0, r.jsx)(y.o5, {
                  children: (0, r.jsx)(I, {
                    t: s
                  })
                })]
              })
            })]
          })
        })));
      var W = t(5306),
        H = t(8416),
        L = t(64),
        $ = t(3205);
      const F = e => {
          const s = window.innerWidth,
            t = s < 1440 ? window.innerHeight - 60 : window.innerHeight,
            i = s > t ? 1 : 2,
            a = s > t ? s : t * (s > t ? 1 : 1.3);
          let r, n, c;
          window.innerWidth < 768 ? (r = s, n = t, c = 8) : window.innerWidth >= 768 && window.innerWidth < 1024 ? (r = s, n = t, c = 9) : window.innerWidth >= 1024 && window.innerWidth < 1920 ? (r = .9 * s, n = .9 * t, c = 10) : window.innerWidth >= 1920 && (r = .75 * s, n = .75 * t, c = 22);
          const m = 2 * r + c,
            d = e + t,
            o = .25 * a,
            l = .65 * a,
            g = .8 * a;
          return {
            sizes: {
              vw: s,
              vh: t,
              initialMiddleWidth: s,
              finalColumnWidth: (s - 2 * c) / 3,
              gameDescriptionWidth: r,
              gameDescriptionHeight: n,
              imageGridGap: c,
              transitionDistance: m
            },
            triggers: {
              endIntro: e,
              startGames: d,
              gamesTrigger1: o,
              gamesTrigger2: l,
              gamesTrigger3: g,
              introTriggers: [e, d, d + o, d + l],
              introTriggers2: [e, d, d + o, d + l, d + g, d + m * i],
              FadeFOBTriggers: [d + o, d + l],
              FadeFOBTriggersText: [d + o + .2 * a, d + l],
              FadeFOBTriggersGirl: [d + o + .05 * a, d + l - .2 * a]
            }
          }
        },
        C = e => {
          let {
            gameSlug: s,
            children: i,
            style: a,
            triggers: n
          } = e;
          if (!n) return null;
          const {
            scrollY: c
          } = (0, H.M)(), {
            FadeFOBTriggers: m,
            FadeFOBTriggersText: d,
            FadeFOBTriggersGirl: l
          } = n, [g, h] = (0, _.useState)(null), [f, x] = (0, _.useState)(null), [j, u] = (0, _.useState)(null), [p, b] = (0, _.useState)(null);
          (0, _.useEffect)((() => {
            const e = () => {
              let e, s, t, i;
              window.innerWidth < 768 ? (e = .3, s = 1.1 * e, t = .05, i = .1) : window.innerWidth >= 768 && window.innerWidth < 1024 ? (e = .22, s = .8 * e, t = .05, i = .2) : window.innerWidth >= 1024 && window.innerWidth < 1920 || window.innerWidth >= 1920 && window.innerWidth < 2560 ? (e = .15, s = .6 * e, t = .05, i = .2) : window.innerWidth >= 2560 && (e = .11, s = .6 * e, t = .1, i = .2), h(e), x(s), u(t), b(i)
            };
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), []);
          const v = (0, L.H)(c, m, [window.innerWidth * g, window.innerWidth * f]),
            w = (0, L.H)(c, m, [window.innerHeight * j, window.innerHeight * p]),
            k = (0, L.H)(c, l, [1, 0]),
            y = (0, L.H)(c, d, [0, 1]);
          return (0, r.jsxs)($.E.div, {
            className: "dcdbda981240e8f536b9",
            "data-game": s,
            style: a,
            children: [(0, r.jsx)($.E.div, {
              className: "befa2bbc0fdb36d85638",
              style: {
                opacity: y
              },
              children: i
            }), (0, r.jsx)($.E.img, {
              src: t(1163)(`./${s}_Girl.png`),
              className: "e1dd3d552e7aed061103",
              style: {
                opacity: k
              }
            }), (0, r.jsx)($.E.div, {
              className: "a9143dec4aa15b7cf025",
              style: {
                width: v,
                paddingBottom: w
              },
              children: (0, r.jsx)(o, {
                variant: s
              })
            })]
          })
        },
        G = e => {
          let {
            gameSlug: s,
            children: t,
            triggers: i,
            sizes: a
          } = e;
          const {
            scrollY: n
          } = (0, H.M)(), {
            endIntro: c,
            startGames: m,
            gamesTrigger1: d,
            gamesTrigger2: o,
            gamesTrigger3: l,
            introTriggers: g,
            introTriggers2: h
          } = i, {
            vw: f,
            vh: x,
            initialMiddleWidth: j,
            finalColumnWidth: u,
            gameDescriptionWidth: p,
            gameDescriptionHeight: b,
            imageGridGap: v,
            transitionDistance: w
          } = a, _ = (0, L.H)(n, g, [u, u, u, p]), k = (0, L.H)(n, h, [0, 0, 0, (x - b) / 2, (x - b) / 2, (x - b) / 2]), y = (0, L.H)(n, h, [0, 0, 0, p + v, p + v, p - w]), N = (0, L.H)(n, [m, m + 1, m + d, m + o], [x, x, x, b]);
          return (0, r.jsx)(C, {
            gameSlug: s,
            style: {
              x: y,
              y: k,
              width: _,
              height: N
            },
            triggers: i,
            sizes: a,
            children: t
          })
        },
        D = e => {
          let {
            t: s,
            triggers: t,
            sizes: i
          } = e;
          const {
            scrollY: a
          } = (0, H.M)(), {
            endIntro: n,
            startGames: c,
            gamesTrigger1: m,
            gamesTrigger2: d,
            gamesTrigger3: o,
            introTriggers: l,
            introTriggers2: g
          } = t, {
            vw: h,
            vh: f,
            initialMiddleWidth: x,
            finalColumnWidth: j,
            gameDescriptionWidth: u,
            gameDescriptionHeight: p,
            imageGridGap: b,
            transitionDistance: v
          } = i, w = (0, L.H)(a, l, [x, j, j, u]), _ = (0, L.H)(a, g, [0, 0, 0, (f - p) / 2, (f - p) / 2, (f - p) / 2]), k = (0, L.H)(a, g, [0, 0, 0, u + b, u + b, u - v]), y = (0, L.H)(a, [c, c + 1, c + m, c + d], [f, f, f, p]);
          return (0, r.jsxs)(C, {
            gameSlug: "VC",
            style: {
              x: k,
              y: _,
              width: w,
              height: y
            },
            triggers: t,
            sizes: i,
            children: [(0, r.jsx)("h3", {
              children: s("trilogy.games.vc.title")
            }), (0, r.jsx)("p", {
              children: s("trilogy.games.vc.body")
            })]
          })
        },
        B = e => {
          let {
            t: s,
            triggers: t,
            sizes: i
          } = e;
          return (0, r.jsxs)(G, {
            gameSlug: "III",
            triggers: t,
            sizes: i,
            children: [(0, r.jsx)("h3", {
              children: s("trilogy.games.iii.title")
            }), (0, r.jsx)("p", {
              children: s("trilogy.games.iii.body")
            })]
          })
        },
        M = e => {
          let {
            t: s,
            triggers: t,
            sizes: i
          } = e;
          return (0, r.jsxs)(G, {
            gameSlug: "SA",
            triggers: t,
            sizes: i,
            children: [(0, r.jsx)("h3", {
              children: s("trilogy.games.sc.title")
            }), (0, r.jsx)("p", {
              children: s("trilogy.games.sc.body")
            })]
          })
        },
        V = (0, d.withTranslations)((e => {
          let {
            t: s,
            startDistance: t
          } = e;
          if (!t) return null;
          const [i, a] = (0, _.useState)(F(t));
          return (0, _.useEffect)((() => {
            const e = () => {
              a(F(t))
            };
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), [t]), (0, r.jsxs)($.E.div, {
            className: "c8c8f19c748d36264e00",
            children: [(0, r.jsx)(B, {
              t: s,
              triggers: i?.triggers,
              sizes: i?.sizes
            }), (0, r.jsx)(D, {
              t: s,
              triggers: i?.triggers,
              sizes: i?.sizes
            }), (0, r.jsx)(M, {
              t: s,
              triggers: i?.triggers,
              sizes: i?.sizes
            })]
          })
        })),
        Y = () => {
          const e = (0, _.useRef)(),
            [s, t] = (0, _.useState)(parseInt(localStorage?.getItem("startGames")) ?? null),
            i = (0, W.S1)(e, {
              threshold: [0]
            }),
            [a, n] = (0, _.useState)(0),
            c = e => {
              t(e), localStorage.setItem("startGames", e)
            };
          return (0, _.useEffect)((() => {
            const t = () => {
              n(window.pageYOffset), i?.isIntersecting && !s && (c(window.pageYOffset > a ? window.pageYOffset : window.pageYOffset - e.current.offsetHeight - window.innerHeight), window.removeEventListener("scroll", t))
            };
            return window.addEventListener("scroll", t), () => window.removeEventListener("scroll", t)
          }), [a, s]), (0, _.useEffect)((() => {
            const s = () => {
              if (c(null), i?.isIntersecting) {
                const s = window.pageYOffset + e.current.getBoundingClientRect().top - window.innerHeight;
                c(s)
              }
            };
            return window.addEventListener("resize", s), () => window.removeEventListener("resize", s)
          }), [i]), (0, r.jsx)("section", {
            id: "games",
            ref: e,
            className: "a568b187c32b9be3bb67",
            children: (0, r.jsx)(V, {
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
          return (0, r.jsxs)(b, {
            id: "media",
            className: "d9c5615fe61336ad9ede",
            children: [(0, r.jsx)("div", {
              className: "c07c41bc93d43d44e7a6",
              children: (0, r.jsx)("h3", {
                children: s("trilogy.beforeafter-title")
              })
            }), (0, r.jsxs)("div", {
              className: `${A} ${U}`,
              children: [(0, r.jsx)("img", {
                src: t(8028)
              }), (0, r.jsx)("div", {
                className: q,
                children: (0, r.jsx)(o, {
                  className: J,
                  variant: "III"
                })
              })]
            }), (0, r.jsxs)("div", {
              className: `${A} ${R}`,
              children: [(0, r.jsx)("img", {
                src: t(4723)
              }), (0, r.jsx)("img", {
                src: t(5131)
              })]
            }), (0, r.jsxs)("div", {
              className: `${A} ${P}`,
              children: [(0, r.jsx)("img", {
                src: t(1885)
              }), (0, r.jsx)("img", {
                src: t(9482)
              })]
            }), (0, r.jsxs)("div", {
              className: `${A} ${U}`,
              children: [(0, r.jsx)("img", {
                src: t(4139)
              }), (0, r.jsx)("div", {
                className: q,
                children: (0, r.jsx)(o, {
                  className: J,
                  variant: "VC"
                })
              })]
            }), (0, r.jsxs)("div", {
              className: `${A} d99bbb5216fa27290a21`,
              children: [(0, r.jsx)("img", {
                src: t(6276)
              }), (0, r.jsx)("img", {
                src: t(3642)
              })]
            }), (0, r.jsxs)("div", {
              className: `${A} ${P}`,
              children: [(0, r.jsx)("img", {
                src: t(2240)
              }), (0, r.jsx)("img", {
                src: t(1402)
              })]
            }), (0, r.jsxs)("div", {
              className: `${A} ${U}`,
              children: [(0, r.jsx)("img", {
                src: t(5890)
              }), (0, r.jsx)("div", {
                className: q,
                children: (0, r.jsx)(o, {
                  className: J,
                  variant: "SA"
                })
              })]
            }), (0, r.jsxs)("div", {
              className: `${A} ${R}`,
              children: [(0, r.jsx)("img", {
                src: t(7029)
              }), (0, r.jsx)("img", {
                src: t(9413)
              })]
            }), (0, r.jsxs)("div", {
              className: `${A} ${P}`,
              children: [(0, r.jsx)("img", {
                src: t(2266)
              }), (0, r.jsx)("img", {
                src: t(6619)
              })]
            })]
          })
        })),
        Q = (e, s, t) => {
          const i = e.split(s),
            a = [];
          for (let e = 0; e < i.length; e++) a.push(i[e]), e < i.length - 1 && a.push(t);
          return a
        },
        X = (0, a.withSimpleErrorBoundary)(a.Rating),
        Z = (0, d.withTranslations)((e => {
          let {
            t: s
          } = e;
          return (0, r.jsxs)("div", {
            className: "f03797f0295f28b6d41c",
            children: [(0, r.jsxs)(b, {
              className: "cf704f2164d83cf48288",
              children: [(0, r.jsx)("div", {
                className: "c3bb2beda93ad91908e7",
                children: (0, r.jsx)("img", {
                  src: t(8352)
                })
              }), (0, r.jsx)(x, {
                className: "e2c7bd6156b1d0b6963a",
                logoVariant: "horizontal"
              })]
            }), (0, r.jsx)("div", {
              className: "a3b071cd4b54d59bbefc",
              children: (0, r.jsxs)(b, {
                children: [(0, r.jsx)(X, {
                  titleSlug: "GTATrilogy"
                }), (0, r.jsx)("div", {
                  className: "c2ba483f7304e81e6c8a",
                  children: Q(s("trilogy.footer"), "{logo}", (0, r.jsx)("div", {
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
            children: t
          } = e;
          const i = function(e) {
            let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            if (s <= 0) return;
            const t = document.documentElement,
              a = document.getElementById(e).offsetTop,
              r = (a - t.scrollTop) / s * 10;
            setTimeout((() => {
              t.scrollTop += r, t.scrollTop !== a && i(e, s - 10)
            }), 10)
          };
          return (0, r.jsx)("a", {
            onClick: () => i(s),
            children: t
          })
        },
        se = (0, d.withTranslations)((e => {
          let {
            t: s
          } = e;
          const {
            scrollY: t
          } = (0, H.M)(), [i, a] = (0, _.useState)(!1);
          t.onChange((e => a(e > 600)));
          const [n, c] = (0, _.useState)(!1), [m, d] = (0, _.useState)(0), [l, g] = (0, _.useState)(60);
          return (0, _.useEffect)((() => {
            const e = () => {
              const e = window.pageYOffset;
              c(e > m), d(e), g(e > m ? 0 : 60)
            };
            return window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
          }), [n, m]), (0, r.jsxs)($.E.nav, {
            className: "a1a4f4fc4b02bd5cde19",
            animate: i ? {
              opacity: 1,
              y: l,
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
            children: [(0, r.jsx)(o, {
              variant: "horizontal"
            }), (0, r.jsxs)("div", {
              className: "f92727a6ea606bdd3cf6",
              children: [(0, r.jsx)(ee, {
                to: "trailer",
                children: s("trilogy.nav.trailer")
              }), (0, r.jsx)(ee, {
                to: "info",
                children: s("trilogy.nav.info")
              }), (0, r.jsx)(ee, {
                to: "enhancements",
                children: s("trilogy.nav.enhancements")
              }), (0, r.jsx)(ee, {
                to: "games",
                children: s("trilogy.nav.games")
              }), (0, r.jsx)(ee, {
                to: "media",
                children: s("trilogy.nav.media")
              })]
            }), (0, r.jsx)(h, {})]
          })
        })),
        te = () => (0, r.jsxs)("div", {
          className: "cb5458ba3b5564ef3d43",
          children: [(0, r.jsx)(se, {}), (0, r.jsx)(j, {}), (0, r.jsx)(v, {}), (0, r.jsx)(w, {}), (0, r.jsx)(O, {}), (0, r.jsx)(Y, {}), (0, r.jsx)(K, {}), (0, r.jsx)(Z, {})]
        }),
        ie = () => {
          const e = [{
            path: "/",
            element: (0, r.jsx)(te, {})
          }, {
            path: "*",
            element: (0, r.jsx)(a.Wasted, {
              error: {
                code: window?.env?.responseStatusCode ?? 398
              }
            })
          }];
          return (0, i.useRoutes)(e)
        },
        ae = () => (0, r.jsx)(ie, {})
    },
    1163: (e, s, t) => {
      var i = {
        "./III_Girl.png": 648,
        "./SA_Girl.png": 7806,
        "./VC_Girl.png": 1458
      };

      function a(e) {
        var s = r(e);
        return t(s)
      }

      function r(e) {
        if (!t.o(i, e)) {
          var s = new Error("Cannot find module '" + e + "'");
          throw s.code = "MODULE_NOT_FOUND", s
        }
        return i[e]
      }
      a.keys = function() {
        return Object.keys(i)
      }, a.resolve = r, e.exports = a, a.id = 1163
    },
    7118: (e, s, t) => {
      var i = {
        "./III-logo.svg": 3581,
        "./SA-logo.svg": 9503,
        "./VC-logo.svg": 4930,
        "./full-logo.svg": 4215,
        "./horizontal-logo.svg": 6201
      };

      function a(e) {
        var s = r(e);
        return t(s)
      }

      function r(e) {
        if (!t.o(i, e)) {
          var s = new Error("Cannot find module '" + e + "'");
          throw s.code = "MODULE_NOT_FOUND", s
        }
        return i[e]
      }
      a.keys = function() {
        return Object.keys(i)
      }, a.resolve = r, e.exports = a, a.id = 7118
    },
    3098: (e, s, t) => {
      var i = {
        "./FOB_III.jpg": 3805,
        "./FOB_SA.jpg": 5558,
        "./FOB_VC.jpg": 2109
      };

      function a(e) {
        var s = r(e);
        return t(s)
      }

      function r(e) {
        if (!t.o(i, e)) {
          var s = new Error("Cannot find module '" + e + "'");
          throw s.code = "MODULE_NOT_FOUND", s
        }
        return i[e]
      }
      a.keys = function() {
        return Object.keys(i)
      }, a.resolve = r, e.exports = a, a.id = 3098
    },
    648: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/aaef94029e6656ccf54a.png"
    },
    7806: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/81b8d1a3188c97c25e45.png"
    },
    1458: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/c8e92c375e0511302e4b.png"
    },
    3581: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/0929f57ca62562b9a414.svg"
    },
    9503: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/a49827a3589d82047913.svg"
    },
    4930: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/0f7a4be849dc278c14cc.svg"
    },
    4215: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/2d03ebc8143725df5211.svg"
    },
    6201: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/2bb1101ae2da2c76b637.svg"
    },
    3805: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/be1e1bc3d97b8b93b8fe.jpg"
    },
    5558: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/5e85ab53ae3eef836b23.jpg"
    },
    2109: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/38aec280741e6376aa1d.jpg"
    },
    4491: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/d12185c65d31d91fcd01.svg"
    },
    139: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/030c2fb3b92e10af9e59.svg"
    },
    6208: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/e151b8a05dd57482f5fd.svg"
    },
    9664: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/ad198d46c09ae63d0062.svg"
    },
    3156: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/e4ad77bb7e38dae39af9.svg"
    },
    306: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/bb2c527f9264604f9c96.jpg"
    },
    9283: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/afa2de9642866521f4d2.jpg"
    },
    2893: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/5038478f256b924725ac.jpg"
    },
    8352: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/be50e86e4a053c675d18.jpg"
    },
    1111: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/b1ff880488d88293b59c.jpg"
    },
    7962: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/3426d99a9ce4a3c66c5f.jpg"
    },
    589: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/e1e2b71627d3fb1f73d4.jpg"
    },
    8028: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/ff284e208b96afaf5e89.jpg"
    },
    4723: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/d31bd91f2973e4005066.jpg"
    },
    5131: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/6bb1401a759b8e20f913.jpg"
    },
    1885: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/5989bfab2bc294303b6d.jpg"
    },
    9482: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/c8a84b0a5078d4cc27fe.jpg"
    },
    5890: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/905ae00cf023a8e0c94b.jpg"
    },
    7029: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/1048912f85b80ac069d6.jpg"
    },
    9413: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/f70695b5f470504b2106.jpg"
    },
    2266: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/a7567fac70f5a7a49adc.jpg"
    },
    6619: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/6df1f432de5b7eb047dd.jpg"
    },
    4139: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/eeec6d7d9f661f77d84d.jpg"
    },
    6276: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/80d6d6b25c7e8b86187a.jpg"
    },
    3642: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/cf596cc9782312294064.jpg"
    },
    2240: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/ff25b9ab9b14464433c3.jpg"
    },
    1402: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/f34573e4ca2de764df33.jpg"
    }
  }
]);