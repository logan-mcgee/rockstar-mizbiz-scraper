(self.webpackChunk_rockstargames_sites_gta_trilogy = self.webpackChunk_rockstargames_sites_gta_trilogy || []).push([
  [916], {
    9916: (e, s, a) => {
      "use strict";
      a.r(s), a.d(s, {
        default: () => ie
      });
      var t = a(7455),
        i = a(8976);
      var r = a(6160);
      const c = e => {
          let {
            gameSlug: s
          } = e;
          return (0, r.jsx)("div", {
            className: "_95a1eaa184c04364a36af67ea8f983e1a7e7",
            style: {
              "--background-image": `url(${a(3098)(`./FOB_${s}.jpg`)})`
            }
          })
        },
        n = () => (0, r.jsxs)("div", {
          className: "_95a1eaa184c04364fa5a764f09730b28dfbf",
          children: [(0, r.jsx)(c, {
            gameSlug: "VC"
          }), (0, r.jsx)(c, {
            gameSlug: "III"
          }), (0, r.jsx)(c, {
            gameSlug: "SA"
          })]
        });
      var m = a(2324),
        d = a(9929);
      const o = e => {
          let {
            variant: s = "full",
            className: t = "",
            style: i = {}
          } = e;
          return (0, r.jsx)("img", {
            style: i,
            className: (0, m.classList)("_95a1eaa184c04364a0ac46591820de1d3457", t?.split(" ")),
            src: a(7118)(`./${s}-logo.svg`)
          })
        },
        l = e => {
          let {
            href: s,
            children: a,
            ...t
          } = e;
          return s ? (0, r.jsx)("a", {
            href: s,
            ...t,
            children: a
          }) : (0, r.jsx)("button", {
            ...t,
            children: a
          })
        },
        g = e => {
          let {
            style: s,
            children: a,
            ...t
          } = e;
          return (0, r.jsx)(l, {
            style: s,
            ...t,
            children: a
          })
        },
        h = (0, d.withTranslations)((e => {
          let {
            t: s
          } = e;
          return (0, r.jsx)(g, {
            href: "https://store.rockstargames.com/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition",
            target: "_blank",
            className: "_95a1eaa184c04364f7e0a808bf160fdfab25",
            children: s("trilogy.pre-order-now")
          })
        })),
        f = "_95a1eaa184c04364be660a5267f21286670b",
        x = (0, d.withTranslations)((e => {
          let {
            logoVariant: s = "full",
            className: t = "",
            style: i = {},
            t: c
          } = e;
          return (0, r.jsx)("div", {
            className: (0, m.classList)("_95a1eaa184c04364f8ff5fa66aad95e014dc", t?.split(" ")),
            style: i,
            children: (0, r.jsxs)("div", {
              className: "_95a1eaa184c04364a9f668ca74c93f96a129",
              children: [(0, r.jsxs)("div", {
                className: "_95a1eaa184c04364eaf46edc8aa7368eeba2",
                children: [(0, r.jsx)(o, {
                  className: "_95a1eaa184c04364bd0a9b2917492a96f969",
                  variant: s
                }), (0, r.jsx)("div", {
                  className: "_95a1eaa184c04364fb783ed90cbd3a24dd63",
                  children: c("trilogy.release-date")
                })]
              }), (0, r.jsx)(h, {}), (0, r.jsxs)("div", {
                className: "_95a1eaa184c04364c8a601ec5679ed0c9c36",
                children: [(0, r.jsx)("img", {
                  className: f,
                  src: a(139)
                }), (0, r.jsx)("img", {
                  className: f,
                  src: a(3156)
                }), (0, r.jsx)("img", {
                  className: f,
                  src: a(9664)
                }), (0, r.jsx)("img", {
                  className: f,
                  src: a(6208)
                }), (0, r.jsx)("img", {
                  className: f,
                  src: a(4491)
                })]
              })]
            })
          })
        })),
        j = () => (0, r.jsxs)("section", {
          id: "intro",
          className: "_95a1eaa184c04364aa166a02d07508cdbac7",
          children: [(0, r.jsx)("div", {
            className: "_95a1eaa184c04364bfddf79c0e3f74171eb7",
            children: (0, r.jsx)(n, {})
          }), (0, r.jsx)(x, {
            className: "_95a1eaa184c04364a068ced0f58f81636b27",
            logoVariant: "full"
          })]
        });
      var u = a(4224),
        p = a.n(u);
      const _ = e => {
          let {
            children: s,
            className: a,
            ...t
          } = e;
          return (0, r.jsx)("section", {
            className: (0, m.classList)("_95a1eaa184c04364f79fc6dc610f691a4653", a?.split(" ")),
            ...t,
            children: s
          })
        },
        b = () => (0, r.jsx)(_, {
          id: "trailer",
          children: (0, r.jsx)(p(), {
            id: "12237"
          })
        }),
        v = (0, d.withTranslations)((e => {
          let {
            t: s
          } = e;
          return (0, r.jsx)(_, {
            id: "info",
            children: (0, r.jsxs)("div", {
              className: "_95a1eaa184c04364cc4a79007948542703b7",
              children: [(0, r.jsxs)("div", {
                className: "_95a1eaa184c04364cb2612a14f3301d9c460",
                children: [(0, r.jsx)("h3", {
                  dangerouslySetInnerHTML: {
                    __html: s("trilogy.info.title")
                  }
                }), (0, r.jsx)("p", {
                  children: s("trilogy.info.body")
                })]
              }), (0, r.jsxs)("div", {
                className: "_95a1eaa184c04364ec79a700c82727438f54",
                children: [(0, r.jsx)("img", {
                  src: a(1111),
                  className: "_95a1eaa184c04364e92103ce4729cbd29ac3"
                }), (0, r.jsx)("img", {
                  src: a(7962),
                  className: "_95a1eaa184c04364a844a7d4d070de411266"
                }), (0, r.jsx)("img", {
                  src: a(589),
                  className: "_95a1eaa184c04364c8151865f9aa5748f8ad"
                })]
              })]
            })
          })
        }));
      var w = a(4932),
        k = a(7131),
        y = a(822);
      const N = e => {
          let {
            src: s,
            children: a,
            style: t = {},
            className: i = ""
          } = e;
          return (0, r.jsxs)("div", {
            className: (0, m.classList)("_95a1eaa184c04364b58742091f7b9f2c4f47", i?.split(" ")),
            style: t,
            children: [(0, r.jsx)("div", {
              className: "_95a1eaa184c04364c2be77495cb1157a42bf",
              children: (0, r.jsx)("img", {
                src: s
              })
            }), (0, r.jsx)("div", {
              className: "_95a1eaa184c04364d3157430d2380bffd319",
              children: a
            })]
          })
        },
        z = "_95a1eaa184c04364ff17da61de69979bc6ea",
        T = "_95a1eaa184c04364ece2d6982145b6528f5d",
        S = e => {
          let {
            t: s
          } = e;
          return (0, r.jsxs)(N, {
            src: a(306),
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
            src: a(9283),
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
            src: a(2893),
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
          const [a, t] = (0, w.useState)(1), [i, c] = (0, w.useState)(16), n = () => {
            const e = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
            t((e => e < 600 ? 1 : e >= 600 && e < 1024 ? 1.25 : e >= 1024 && e < 1280 ? 1.5 : e >= 1280 && e < 1440 ? 2 : e >= 1440 && e < 1920 ? 2.5 : 3)(e)), c((e => e < 768 ? 16 : e >= 768 && e < 1024 ? 18 : e >= 1024 && e < 1920 ? 20 : 22)(e))
          };
          return (0, w.useEffect)((() => (n(), window.addEventListener("resize", n), () => window.removeEventListener("resize", n)))), (0, r.jsxs)(_, {
            id: "enhancements",
            className: "_95a1eaa184c04364ba8ece28c1f4c11f7736",
            children: [(0, r.jsx)("h3", {
              children: s("trilogy.nav.enhancements")
            }), (0, r.jsx)("div", {
              className: "_95a1eaa184c04364b9103de23c3ab73c13c0",
              children: (0, r.jsxs)(y.tq, {
                slidesPerView: a,
                modules: [k.tl],
                pagination: {
                  clickable: !0
                },
                spaceBetween: i,
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
      var W = a(4964),
        H = a(9078),
        L = a(7424),
        $ = a(8360);
      const F = e => {
          const s = window.innerWidth,
            a = s < 1440 ? window.innerHeight - 60 : window.innerHeight,
            t = s > a ? 1 : 2,
            i = s > a ? s : a * (s > a ? 1 : 1.3);
          let r, c, n;
          window.innerWidth < 768 ? (r = s, c = a, n = 8) : window.innerWidth >= 768 && window.innerWidth < 1024 ? (r = s, c = a, n = 9) : window.innerWidth >= 1024 && window.innerWidth < 1920 ? (r = .9 * s, c = .9 * a, n = 10) : window.innerWidth >= 1920 && (r = .75 * s, c = .75 * a, n = 22);
          const m = 2 * r + n,
            d = e + a,
            o = .25 * i,
            l = .65 * i,
            g = .8 * i;
          return {
            sizes: {
              vw: s,
              vh: a,
              initialMiddleWidth: s,
              finalColumnWidth: (s - 2 * n) / 3,
              gameDescriptionWidth: r,
              gameDescriptionHeight: c,
              imageGridGap: n,
              transitionDistance: m
            },
            triggers: {
              endIntro: e,
              startGames: d,
              gamesTrigger1: o,
              gamesTrigger2: l,
              gamesTrigger3: g,
              introTriggers: [e, d, d + o, d + l],
              introTriggers2: [e, d, d + o, d + l, d + g, d + m * t],
              FadeFOBTriggers: [d + o, d + l],
              FadeFOBTriggersText: [d + o + .2 * i, d + l],
              FadeFOBTriggersGirl: [d + o + .05 * i, d + l - .2 * i]
            }
          }
        },
        C = e => {
          let {
            gameSlug: s,
            children: t,
            style: i,
            triggers: c
          } = e;
          if (!c) return null;
          const {
            scrollY: n
          } = (0, H.M)(), {
            FadeFOBTriggers: m,
            FadeFOBTriggersText: d,
            FadeFOBTriggersGirl: l
          } = c, [g, h] = (0, w.useState)(null), [f, x] = (0, w.useState)(null), [j, u] = (0, w.useState)(null), [p, _] = (0, w.useState)(null);
          (0, w.useEffect)((() => {
            const e = () => {
              let e, s, a, t;
              window.innerWidth < 768 ? (e = .3, s = 1.1 * e, a = .05, t = .1) : window.innerWidth >= 768 && window.innerWidth < 1024 ? (e = .22, s = .8 * e, a = .05, t = .2) : window.innerWidth >= 1024 && window.innerWidth < 1920 || window.innerWidth >= 1920 && window.innerWidth < 2560 ? (e = .15, s = .6 * e, a = .05, t = .2) : window.innerWidth >= 2560 && (e = .11, s = .6 * e, a = .1, t = .2), h(e), x(s), u(a), _(t)
            };
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), []);
          const b = (0, L.H)(n, m, [window.innerWidth * g, window.innerWidth * f]),
            v = (0, L.H)(n, m, [window.innerHeight * j, window.innerHeight * p]),
            k = (0, L.H)(n, l, [1, 0]),
            y = (0, L.H)(n, d, [0, 1]);
          return (0, r.jsxs)($.E.div, {
            className: "_95a1eaa184c04364dcdbda981240e8f536b9",
            "data-game": s,
            style: i,
            children: [(0, r.jsx)($.E.div, {
              className: "_95a1eaa184c04364befa2bbc0fdb36d85638",
              style: {
                opacity: y
              },
              children: t
            }), (0, r.jsx)($.E.img, {
              src: a(1163)(`./${s}_Girl.png`),
              className: "_95a1eaa184c04364e1dd3d552e7aed061103",
              style: {
                opacity: k
              }
            }), (0, r.jsx)($.E.div, {
              className: "_95a1eaa184c04364a9143dec4aa15b7cf025",
              style: {
                width: b,
                paddingBottom: v
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
            children: a,
            triggers: t,
            sizes: i
          } = e;
          const {
            scrollY: c
          } = (0, H.M)(), {
            endIntro: n,
            startGames: m,
            gamesTrigger1: d,
            gamesTrigger2: o,
            gamesTrigger3: l,
            introTriggers: g,
            introTriggers2: h
          } = t, {
            vw: f,
            vh: x,
            initialMiddleWidth: j,
            finalColumnWidth: u,
            gameDescriptionWidth: p,
            gameDescriptionHeight: _,
            imageGridGap: b,
            transitionDistance: v
          } = i, w = (0, L.H)(c, g, [u, u, u, p]), k = (0, L.H)(c, h, [0, 0, 0, (x - _) / 2, (x - _) / 2, (x - _) / 2]), y = (0, L.H)(c, h, [0, 0, 0, p + b, p + b, p - v]), N = (0, L.H)(c, [m, m + 1, m + d, m + o], [x, x, x, _]);
          return (0, r.jsx)(C, {
            gameSlug: s,
            style: {
              x: y,
              y: k,
              width: w,
              height: N
            },
            triggers: t,
            sizes: i,
            children: a
          })
        },
        D = e => {
          let {
            t: s,
            triggers: a,
            sizes: t
          } = e;
          const {
            scrollY: i
          } = (0, H.M)(), {
            endIntro: c,
            startGames: n,
            gamesTrigger1: m,
            gamesTrigger2: d,
            gamesTrigger3: o,
            introTriggers: l,
            introTriggers2: g
          } = a, {
            vw: h,
            vh: f,
            initialMiddleWidth: x,
            finalColumnWidth: j,
            gameDescriptionWidth: u,
            gameDescriptionHeight: p,
            imageGridGap: _,
            transitionDistance: b
          } = t, v = (0, L.H)(i, l, [x, j, j, u]), w = (0, L.H)(i, g, [0, 0, 0, (f - p) / 2, (f - p) / 2, (f - p) / 2]), k = (0, L.H)(i, g, [0, 0, 0, u + _, u + _, u - b]), y = (0, L.H)(i, [n, n + 1, n + m, n + d], [f, f, f, p]);
          return (0, r.jsxs)(C, {
            gameSlug: "VC",
            style: {
              x: k,
              y: w,
              width: v,
              height: y
            },
            triggers: a,
            sizes: t,
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
            triggers: a,
            sizes: t
          } = e;
          return (0, r.jsxs)(G, {
            gameSlug: "III",
            triggers: a,
            sizes: t,
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
            triggers: a,
            sizes: t
          } = e;
          return (0, r.jsxs)(G, {
            gameSlug: "SA",
            triggers: a,
            sizes: t,
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
            startDistance: a
          } = e;
          if (!a) return null;
          const [t, i] = (0, w.useState)(F(a));
          return (0, w.useEffect)((() => {
            const e = () => {
              i(F(a))
            };
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), [a]), (0, r.jsxs)($.E.div, {
            className: "_95a1eaa184c04364c8c8f19c748d36264e00",
            children: [(0, r.jsx)(B, {
              t: s,
              triggers: t?.triggers,
              sizes: t?.sizes
            }), (0, r.jsx)(D, {
              t: s,
              triggers: t?.triggers,
              sizes: t?.sizes
            }), (0, r.jsx)(M, {
              t: s,
              triggers: t?.triggers,
              sizes: t?.sizes
            })]
          })
        })),
        Y = () => {
          const e = (0, w.useRef)(),
            [s, a] = (0, w.useState)(parseInt(localStorage?.getItem("startGames")) ?? null),
            t = (0, W.S1)(e, {
              threshold: [0]
            }),
            [i, c] = (0, w.useState)(0),
            n = e => {
              a(e), localStorage.setItem("startGames", e)
            };
          return (0, w.useEffect)((() => {
            const a = () => {
              c(window.pageYOffset), t?.isIntersecting && !s && (n(window.pageYOffset > i ? window.pageYOffset : window.pageYOffset - e.current.offsetHeight - window.innerHeight), window.removeEventListener("scroll", a))
            };
            return window.addEventListener("scroll", a), () => window.removeEventListener("scroll", a)
          }), [i, s]), (0, w.useEffect)((() => {
            const s = () => {
              if (n(null), t?.isIntersecting) {
                const s = window.pageYOffset + e.current.getBoundingClientRect().top - window.innerHeight;
                n(s)
              }
            };
            return window.addEventListener("resize", s), () => window.removeEventListener("resize", s)
          }), [t]), (0, r.jsx)("section", {
            id: "games",
            ref: e,
            className: "_95a1eaa184c04364a568b187c32b9be3bb67",
            children: (0, r.jsx)(V, {
              startDistance: s
            })
          })
        },
        A = "_95a1eaa184c04364e28e820fac8f253c5cc4",
        U = "_95a1eaa184c04364a90fb408626463d4a95f",
        R = "_95a1eaa184c04364afc3b0efe233645ca74c",
        P = "_95a1eaa184c04364b1ef1e71dd8e9e771878",
        q = "_95a1eaa184c04364bd4a354be914210ae786",
        J = "_95a1eaa184c04364e59e9372638301421091",
        K = (0, d.withTranslations)((e => {
          let {
            t: s
          } = e;
          return (0, r.jsxs)(_, {
            id: "media",
            className: "_95a1eaa184c04364d9c5615fe61336ad9ede",
            children: [(0, r.jsx)("div", {
              className: "_95a1eaa184c04364c07c41bc93d43d44e7a6",
              children: (0, r.jsx)("h3", {
                children: s("trilogy.beforeafter-title")
              })
            }), (0, r.jsxs)("div", {
              className: `${A} ${U}`,
              children: [(0, r.jsx)("img", {
                src: a(8028)
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
                src: a(4723)
              }), (0, r.jsx)("img", {
                src: a(5131)
              })]
            }), (0, r.jsxs)("div", {
              className: `${A} ${P}`,
              children: [(0, r.jsx)("img", {
                src: a(1885)
              }), (0, r.jsx)("img", {
                src: a(9482)
              })]
            }), (0, r.jsxs)("div", {
              className: `${A} ${U}`,
              children: [(0, r.jsx)("img", {
                src: a(4139)
              }), (0, r.jsx)("div", {
                className: q,
                children: (0, r.jsx)(o, {
                  className: J,
                  variant: "VC"
                })
              })]
            }), (0, r.jsxs)("div", {
              className: `${A} _95a1eaa184c04364d99bbb5216fa27290a21`,
              children: [(0, r.jsx)("img", {
                src: a(6276)
              }), (0, r.jsx)("img", {
                src: a(3642)
              })]
            }), (0, r.jsxs)("div", {
              className: `${A} ${P}`,
              children: [(0, r.jsx)("img", {
                src: a(2240)
              }), (0, r.jsx)("img", {
                src: a(1402)
              })]
            }), (0, r.jsxs)("div", {
              className: `${A} ${U}`,
              children: [(0, r.jsx)("img", {
                src: a(5890)
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
                src: a(7029)
              }), (0, r.jsx)("img", {
                src: a(9413)
              })]
            }), (0, r.jsxs)("div", {
              className: `${A} ${P}`,
              children: [(0, r.jsx)("img", {
                src: a(2266)
              }), (0, r.jsx)("img", {
                src: a(6619)
              })]
            })]
          })
        })),
        Q = (e, s, a) => {
          const t = e.split(s),
            i = [];
          for (let e = 0; e < t.length; e++) i.push(t[e]), e < t.length - 1 && i.push(a);
          return i
        },
        X = (0, i.withSimpleErrorBoundary)(i.Rating),
        Z = (0, d.withTranslations)((e => {
          let {
            t: s
          } = e;
          return (0, r.jsxs)("div", {
            className: "_95a1eaa184c04364f03797f0295f28b6d41c",
            children: [(0, r.jsxs)(_, {
              className: "_95a1eaa184c04364cf704f2164d83cf48288",
              children: [(0, r.jsx)("div", {
                className: "_95a1eaa184c04364c3bb2beda93ad91908e7",
                children: (0, r.jsx)("img", {
                  src: a(8352)
                })
              }), (0, r.jsx)(x, {
                className: "_95a1eaa184c04364e2c7bd6156b1d0b6963a",
                logoVariant: "horizontal"
              })]
            }), (0, r.jsx)("div", {
              className: "_95a1eaa184c04364a3b071cd4b54d59bbefc",
              children: (0, r.jsxs)(_, {
                children: [(0, r.jsx)(X, {
                  titleSlug: "GTATrilogy"
                }), (0, r.jsx)("div", {
                  className: "_95a1eaa184c04364c2ba483f7304e81e6c8a",
                  children: Q(s("trilogy.footer"), "{logo}", (0, r.jsx)("div", {
                    className: "_95a1eaa184c04364e331b4e3b3c60e290f92"
                  }))
                })]
              })
            })]
          })
        })),
        ee = e => {
          let {
            to: s,
            children: a
          } = e;
          const t = function(e) {
            let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            if (s <= 0) return;
            const a = document.documentElement,
              i = document.getElementById(e).offsetTop,
              r = (i - a.scrollTop) / s * 10;
            setTimeout((() => {
              a.scrollTop += r, a.scrollTop !== i && t(e, s - 10)
            }), 10)
          };
          return (0, r.jsx)("a", {
            onClick: () => t(s),
            children: a
          })
        },
        se = (0, d.withTranslations)((e => {
          let {
            t: s
          } = e;
          const {
            scrollY: a
          } = (0, H.M)(), [t, i] = (0, w.useState)(!1);
          a.onChange((e => i(e > 600)));
          const [c, n] = (0, w.useState)(!1), [m, d] = (0, w.useState)(0), [l, g] = (0, w.useState)(60);
          return (0, w.useEffect)((() => {
            const e = () => {
              const e = window.pageYOffset;
              n(e > m), d(e), g(e > m ? 0 : 60)
            };
            return window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
          }), [c, m]), (0, r.jsxs)($.E.nav, {
            className: "_95a1eaa184c04364a1a4f4fc4b02bd5cde19",
            animate: t ? {
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
              className: "_95a1eaa184c04364f92727a6ea606bdd3cf6",
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
        ae = () => (0, r.jsxs)("div", {
          className: "_95a1eaa184c04364cb5458ba3b5564ef3d43",
          children: [(0, r.jsx)(se, {}), (0, r.jsx)(j, {}), (0, r.jsx)(b, {}), (0, r.jsx)(v, {}), (0, r.jsx)(O, {}), (0, r.jsx)(Y, {}), (0, r.jsx)(K, {}), (0, r.jsx)(Z, {})]
        }),
        te = () => {
          const e = [{
            path: "/",
            element: (0, r.jsx)(ae, {})
          }, {
            path: "*",
            element: (0, r.jsx)(i.Wasted, {
              error: {
                code: window?.env?.responseStatusCode ?? 398
              }
            })
          }];
          return (0, t.useRoutes)(e)
        },
        ie = () => (0, r.jsx)(te, {})
    },
    1163: (e, s, a) => {
      var t = {
        "./III_Girl.png": 648,
        "./SA_Girl.png": 7806,
        "./VC_Girl.png": 1458
      };

      function i(e) {
        var s = r(e);
        return a(s)
      }

      function r(e) {
        if (!a.o(t, e)) {
          var s = new Error("Cannot find module '" + e + "'");
          throw s.code = "MODULE_NOT_FOUND", s
        }
        return t[e]
      }
      i.keys = function() {
        return Object.keys(t)
      }, i.resolve = r, e.exports = i, i.id = 1163
    },
    7118: (e, s, a) => {
      var t = {
        "./III-logo.svg": 3581,
        "./SA-logo.svg": 9503,
        "./VC-logo.svg": 4930,
        "./full-logo.svg": 4215,
        "./horizontal-logo.svg": 6201
      };

      function i(e) {
        var s = r(e);
        return a(s)
      }

      function r(e) {
        if (!a.o(t, e)) {
          var s = new Error("Cannot find module '" + e + "'");
          throw s.code = "MODULE_NOT_FOUND", s
        }
        return t[e]
      }
      i.keys = function() {
        return Object.keys(t)
      }, i.resolve = r, e.exports = i, i.id = 7118
    },
    3098: (e, s, a) => {
      var t = {
        "./FOB_III.jpg": 3805,
        "./FOB_SA.jpg": 5558,
        "./FOB_VC.jpg": 2109
      };

      function i(e) {
        var s = r(e);
        return a(s)
      }

      function r(e) {
        if (!a.o(t, e)) {
          var s = new Error("Cannot find module '" + e + "'");
          throw s.code = "MODULE_NOT_FOUND", s
        }
        return t[e]
      }
      i.keys = function() {
        return Object.keys(t)
      }, i.resolve = r, e.exports = i, i.id = 3098
    },
    648: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/aaef94029e6656ccf54a.png"
    },
    7806: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/81b8d1a3188c97c25e45.png"
    },
    1458: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/c8e92c375e0511302e4b.png"
    },
    3581: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/0929f57ca62562b9a414.svg"
    },
    9503: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/a49827a3589d82047913.svg"
    },
    4930: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/0f7a4be849dc278c14cc.svg"
    },
    4215: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/2d03ebc8143725df5211.svg"
    },
    6201: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/2bb1101ae2da2c76b637.svg"
    },
    3805: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/be1e1bc3d97b8b93b8fe.jpg"
    },
    5558: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/5e85ab53ae3eef836b23.jpg"
    },
    2109: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/38aec280741e6376aa1d.jpg"
    },
    4491: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/d12185c65d31d91fcd01.svg"
    },
    139: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/030c2fb3b92e10af9e59.svg"
    },
    6208: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/e151b8a05dd57482f5fd.svg"
    },
    9664: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/ad198d46c09ae63d0062.svg"
    },
    3156: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/e4ad77bb7e38dae39af9.svg"
    },
    306: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/bb2c527f9264604f9c96.jpg"
    },
    9283: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/afa2de9642866521f4d2.jpg"
    },
    2893: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/5038478f256b924725ac.jpg"
    },
    8352: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/be50e86e4a053c675d18.jpg"
    },
    1111: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/b1ff880488d88293b59c.jpg"
    },
    7962: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/3426d99a9ce4a3c66c5f.jpg"
    },
    589: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/e1e2b71627d3fb1f73d4.jpg"
    },
    8028: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/ff284e208b96afaf5e89.jpg"
    },
    4723: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/d31bd91f2973e4005066.jpg"
    },
    5131: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/6bb1401a759b8e20f913.jpg"
    },
    1885: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/5989bfab2bc294303b6d.jpg"
    },
    9482: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/c8a84b0a5078d4cc27fe.jpg"
    },
    5890: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/905ae00cf023a8e0c94b.jpg"
    },
    7029: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/1048912f85b80ac069d6.jpg"
    },
    9413: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/f70695b5f470504b2106.jpg"
    },
    2266: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/a7567fac70f5a7a49adc.jpg"
    },
    6619: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/6df1f432de5b7eb047dd.jpg"
    },
    4139: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/eeec6d7d9f661f77d84d.jpg"
    },
    6276: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/80d6d6b25c7e8b86187a.jpg"
    },
    3642: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/cf596cc9782312294064.jpg"
    },
    2240: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/ff25b9ab9b14464433c3.jpg"
    },
    1402: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/f34573e4ca2de764df33.jpg"
    }
  }
]);