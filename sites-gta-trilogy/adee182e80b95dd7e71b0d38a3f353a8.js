! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      s = (new Error).stack;
    s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "a517c87d-d847-4db0-b3db-2524d954dc2d", e._sentryDebugIdIdentifier = "sentry-dbid-a517c87d-d847-4db0-b3db-2524d954dc2d")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "5e225a56a96343405c858680af91190e5116b19e",
  packageName: "@rockstargames/sites-gta-trilogy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "5e225a56a96343405c858680af91190e5116b19e"
}, (self.webpackChunk_rockstargames_sites_gta_trilogy = self.webpackChunk_rockstargames_sites_gta_trilogy || []).push([
  [280], {
    9280: (e, s, t) => {
      "use strict";
      t.r(s), t.d(s, {
        default: () => ee
      });
      var a = t(1320),
        r = t(1668);
      var i = t(3480);
      const c = e => {
          let {
            gameSlug: s
          } = e;
          return (0, i.jsx)("div", {
            className: "rockstargames-sites-gta-trilogya590c78396ad12a0134e4fe83d46d6c5",
            style: {
              "--background-image": `url(${t(4584)(`./FOB_${s}.jpg`)})`
            }
          })
        },
        o = () => (0, i.jsxs)("div", {
          className: "rockstargames-sites-gta-trilogyb3f2c71a5c27e002148765bd45a8f945",
          children: [(0, i.jsx)(c, {
            gameSlug: "VC"
          }), (0, i.jsx)(c, {
            gameSlug: "III"
          }), (0, i.jsx)(c, {
            gameSlug: "SA"
          })]
        });
      var d = t(5356),
        n = t(5792);
      const m = e => {
          let {
            variant: s = "full",
            className: a = "",
            style: r = {}
          } = e;
          return (0, i.jsx)("img", {
            style: r,
            className: (0, d.classList)("rockstargames-sites-gta-trilogye713aa2e2995a6755fff195529f21156", a?.split(" ")),
            src: t(3380)(`./${s}-logo.svg`)
          })
        },
        g = e => {
          let {
            href: s,
            children: t,
            ...a
          } = e;
          return s ? (0, i.jsx)("a", {
            href: s,
            ...a,
            children: t
          }) : (0, i.jsx)("button", {
            ...a,
            children: t
          })
        },
        l = e => {
          let {
            style: s,
            children: t,
            ...a
          } = e;
          return (0, i.jsx)(g, {
            style: s,
            ...a,
            children: t
          })
        },
        f = (0, n.withTranslations)((e => {
          let {
            t: s
          } = e;
          return (0, i.jsx)(l, {
            href: "https://store.rockstargames.com/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition",
            target: "_blank",
            className: "rockstargames-sites-gta-trilogyb6ec590bc1cb44bd8dd2cfe8f3c5c8ac",
            children: s("trilogy.pre-order-now")
          })
        })),
        b = "rockstargames-sites-gta-trilogya0b342d557fa7f9e2c7aa7701c8150e7",
        h = (0, n.withTranslations)((e => {
          let {
            logoVariant: s = "full",
            className: a = "",
            style: r = {},
            t: c
          } = e;
          return (0, i.jsx)("div", {
            className: (0, d.classList)("rockstargames-sites-gta-trilogye06ad1179cdbca03d9b8c92489d722f5", a?.split(" ")),
            style: r,
            children: (0, i.jsxs)("div", {
              className: "rockstargames-sites-gta-trilogya7fb7c7a032b27d60edb1c63d750d256",
              children: [(0, i.jsxs)("div", {
                className: "rockstargames-sites-gta-trilogye1a17b9ee6face3d3a9c76913e25d228",
                children: [(0, i.jsx)(m, {
                  className: "rockstargames-sites-gta-trilogyc1acc35818d3bcf2b1bef14f37e21788",
                  variant: s
                }), (0, i.jsx)("div", {
                  className: "rockstargames-sites-gta-trilogye7e37cac02926147260e4be917570b65",
                  children: c("trilogy.release-date")
                })]
              }), (0, i.jsx)(f, {}), (0, i.jsxs)("div", {
                className: "rockstargames-sites-gta-trilogyd17090820a2431a292835621e09a5d59",
                children: [(0, i.jsx)("img", {
                  className: b,
                  src: t(9652)
                }), (0, i.jsx)("img", {
                  className: b,
                  src: t(9336)
                }), (0, i.jsx)("img", {
                  className: b,
                  src: t(4400)
                }), (0, i.jsx)("img", {
                  className: b,
                  src: t(5224)
                }), (0, i.jsx)("img", {
                  className: b,
                  src: t(3111)
                })]
              })]
            })
          })
        })),
        p = () => (0, i.jsxs)("section", {
          id: "intro",
          className: "rockstargames-sites-gta-trilogyf6018228cfb05f954ab28bd5ce03108f",
          children: [(0, i.jsx)("div", {
            className: "rockstargames-sites-gta-trilogyf78809f3a6f868ddbb69bf0dc94f8608",
            children: (0, i.jsx)(o, {})
          }), (0, i.jsx)(h, {
            className: "rockstargames-sites-gta-trilogyc0e6ab6e0547bff20fa5beb941851297",
            logoVariant: "full"
          })]
        });
      var x = t(4644),
        u = t.n(x);
      const j = e => {
          let {
            children: s,
            className: t,
            ...a
          } = e;
          return (0, i.jsx)("section", {
            className: (0, d.classList)("rockstargames-sites-gta-trilogyc4b62be59154f67f28815d02813c6b78", t?.split(" ")),
            ...a,
            children: s
          })
        },
        k = () => (0, i.jsx)(j, {
          id: "trailer",
          children: (0, i.jsx)(u(), {
            id: "12237"
          })
        }),
        y = (0, n.withTranslations)((e => {
          let {
            t: s
          } = e;
          return (0, i.jsx)(j, {
            id: "info",
            children: (0, i.jsxs)("div", {
              className: "rockstargames-sites-gta-trilogyc2632fd95330b74d5dd3fb784ed24b73",
              children: [(0, i.jsxs)("div", {
                className: "rockstargames-sites-gta-trilogye7f8ed9a18eb203787dc2c282f755da7",
                children: [(0, i.jsx)("h3", {
                  dangerouslySetInnerHTML: {
                    __html: s("trilogy.info.title")
                  }
                }), (0, i.jsx)("p", {
                  children: s("trilogy.info.body")
                })]
              }), (0, i.jsxs)("div", {
                className: "rockstargames-sites-gta-trilogyad9e8c3af7501dbae1538c50aa477734",
                children: [(0, i.jsx)("img", {
                  src: t(6852),
                  className: "rockstargames-sites-gta-trilogyed7288ec5cd27db1bc123f2fc9a6d951"
                }), (0, i.jsx)("img", {
                  src: t(9428),
                  className: "rockstargames-sites-gta-trilogyf65984b0b5e380f2679469d5dc374e18"
                }), (0, i.jsx)("img", {
                  src: t(8404),
                  className: "rockstargames-sites-gta-trilogyf57363f71e1cdcb73e866e745d2d8a37"
                })]
              })]
            })
          })
        }));
      var w = t(8200),
        _ = t(1403),
        v = t(8111);
      const N = e => {
          let {
            src: s,
            children: t,
            style: a = {},
            className: r = ""
          } = e;
          return (0, i.jsxs)("div", {
            className: (0, d.classList)("rockstargames-sites-gta-trilogyd4701b70db493e5c28da87a2b72a3de5", r?.split(" ")),
            style: a,
            children: [(0, i.jsx)("div", {
              className: "rockstargames-sites-gta-trilogyeea77eac0b39a8921982484cfa0f198d",
              children: (0, i.jsx)("img", {
                src: s
              })
            }), (0, i.jsx)("div", {
              className: "rockstargames-sites-gta-trilogyc187feb573f88c0ef5bb9326fd3f268b",
              children: t
            })]
          })
        },
        z = "rockstargames-sites-gta-trilogyc1a19a201a67e5b2fb26247e2661850e",
        T = "rockstargames-sites-gta-trilogyd54fa7627079eedbb51bd51370499ee8",
        S = e => {
          let {
            t: s
          } = e;
          return (0, i.jsxs)(N, {
            src: t(8416),
            className: z,
            children: [(0, i.jsx)("div", {
              className: T,
              dangerouslySetInnerHTML: {
                __html: s("trilogy.enhancements.1.title")
              }
            }), (0, i.jsxs)("ul", {
              children: [(0, i.jsx)("li", {
                children: s("trilogy.enhancements.1.li.1")
              }), (0, i.jsx)("li", {
                children: s("trilogy.enhancements.1.li.2")
              }), (0, i.jsx)("li", {
                children: s("trilogy.enhancements.1.li.3")
              }), (0, i.jsx)("li", {
                children: s("trilogy.enhancements.1.li.4")
              }), (0, i.jsx)("li", {
                children: s("trilogy.enhancements.1.li.5")
              }), (0, i.jsx)("li", {
                children: s("trilogy.enhancements.1.li.6")
              })]
            })]
          })
        },
        I = e => {
          let {
            t: s
          } = e;
          return (0, i.jsxs)(N, {
            src: t(7328),
            className: z,
            children: [(0, i.jsx)("div", {
              className: T,
              dangerouslySetInnerHTML: {
                __html: s("trilogy.enhancements.2.title")
              }
            }), (0, i.jsxs)("ul", {
              children: [(0, i.jsx)("li", {
                children: s("trilogy.enhancements.2.li.1")
              }), (0, i.jsx)("li", {
                children: s("trilogy.enhancements.2.li.2")
              }), (0, i.jsx)("li", {
                children: s("trilogy.enhancements.2.li.3")
              }), (0, i.jsx)("li", {
                children: s("trilogy.enhancements.2.li.4")
              }), (0, i.jsx)("li", {
                children: s("trilogy.enhancements.2.li.5")
              })]
            })]
          })
        },
        E = e => {
          let {
            t: s
          } = e;
          return (0, i.jsxs)(N, {
            src: t(6400),
            className: z,
            children: [(0, i.jsx)("div", {
              className: T,
              dangerouslySetInnerHTML: {
                __html: s("trilogy.enhancements.3.title")
              }
            }), (0, i.jsxs)("ul", {
              children: [(0, i.jsx)("li", {
                children: s("trilogy.enhancements.3.li.2")
              }), (0, i.jsx)("li", {
                children: s("trilogy.enhancements.3.li.3")
              }), (0, i.jsx)("li", {
                children: s("trilogy.enhancements.3.li.4")
              })]
            })]
          })
        },
        W = (0, n.withMediaBasedProps)((0, n.withTranslations)((e => {
          let {
            t: s
          } = e;
          const [t, a] = (0, w.useState)(1), [r, c] = (0, w.useState)(16), o = () => {
            const e = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
            a((e => e < 600 ? 1 : e >= 600 && e < 1024 ? 1.25 : e >= 1024 && e < 1280 ? 1.5 : e >= 1280 && e < 1440 ? 2 : e >= 1440 && e < 1920 ? 2.5 : 3)(e)), c((e => e < 768 ? 16 : e >= 768 && e < 1024 ? 18 : e >= 1024 && e < 1920 ? 20 : 22)(e))
          };
          return (0, w.useEffect)((() => (o(), window.addEventListener("resize", o), () => window.removeEventListener("resize", o)))), (0, i.jsxs)(j, {
            id: "enhancements",
            className: "rockstargames-sites-gta-trilogyabb29043b941172bcd96e548321d6ffe",
            children: [(0, i.jsx)("h3", {
              children: s("trilogy.nav.enhancements")
            }), (0, i.jsx)("div", {
              className: "rockstargames-sites-gta-trilogyef7774d3a3f0808310323089434e4c9c",
              children: (0, i.jsxs)(v.wx, {
                slidesPerView: t,
                modules: [_.eM],
                pagination: {
                  clickable: !0
                },
                spaceBetween: r,
                children: [(0, i.jsx)(v.Ky, {
                  children: (0, i.jsx)(S, {
                    t: s
                  })
                }), (0, i.jsx)(v.Ky, {
                  children: (0, i.jsx)(I, {
                    t: s
                  })
                }), (0, i.jsx)(v.Ky, {
                  children: (0, i.jsx)(E, {
                    t: s
                  })
                })]
              })
            })]
          })
        })));
      var O = t(5620),
        L = t(4900);
      const D = e => {
          const s = window.innerWidth,
            t = s < 1440 ? window.innerHeight - 60 : window.innerHeight,
            a = s > t ? 1 : 2,
            r = s > t ? s : t * (s > t ? 1 : 1.3);
          let i, c, o;
          window.innerWidth < 768 ? (i = s, c = t, o = 8) : window.innerWidth >= 768 && window.innerWidth < 1024 ? (i = s, c = t, o = 9) : window.innerWidth >= 1024 && window.innerWidth < 1920 ? (i = .9 * s, c = .9 * t, o = 10) : window.innerWidth >= 1920 && (i = .75 * s, c = .75 * t, o = 22);
          const d = 2 * i + o,
            n = e + t,
            m = .25 * r,
            g = .65 * r,
            l = .8 * r;
          return {
            sizes: {
              vw: s,
              vh: t,
              initialMiddleWidth: s,
              finalColumnWidth: (s - 2 * o) / 3,
              gameDescriptionWidth: i,
              gameDescriptionHeight: c,
              imageGridGap: o,
              transitionDistance: d
            },
            triggers: {
              endIntro: e,
              startGames: n,
              gamesTrigger1: m,
              gamesTrigger2: g,
              gamesTrigger3: l,
              introTriggers: [e, n, n + m, n + g],
              introTriggers2: [e, n, n + m, n + g, n + l, n + d * a],
              FadeFOBTriggers: [n + m, n + g],
              FadeFOBTriggersText: [n + m + .2 * r, n + g],
              FadeFOBTriggersGirl: [n + m + .05 * r, n + g - .2 * r]
            }
          }
        },
        $ = e => {
          let {
            gameSlug: s,
            children: a,
            style: r,
            triggers: c
          } = e;
          if (!c) return null;
          const {
            scrollY: o
          } = (0, L.useViewportScroll)(), {
            FadeFOBTriggers: d,
            FadeFOBTriggersText: n,
            FadeFOBTriggersGirl: g
          } = c, [l, f] = (0, w.useState)(null), [b, h] = (0, w.useState)(null), [p, x] = (0, w.useState)(null), [u, j] = (0, w.useState)(null);
          (0, w.useEffect)((() => {
            const e = () => {
              let e, s, t, a;
              window.innerWidth < 768 ? (e = .3, s = 1.1 * e, t = .05, a = .1) : window.innerWidth >= 768 && window.innerWidth < 1024 ? (e = .22, s = .8 * e, t = .05, a = .2) : window.innerWidth >= 1024 && window.innerWidth < 1920 || window.innerWidth >= 1920 && window.innerWidth < 2560 ? (e = .15, s = .6 * e, t = .05, a = .2) : window.innerWidth >= 2560 && (e = .11, s = .6 * e, t = .1, a = .2), f(e), h(s), x(t), j(a)
            };
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), []);
          const k = (0, L.useTransform)(o, d, [window.innerWidth * l, window.innerWidth * b]),
            y = (0, L.useTransform)(o, d, [window.innerHeight * p, window.innerHeight * u]),
            _ = (0, L.useTransform)(o, g, [1, 0]),
            v = (0, L.useTransform)(o, n, [0, 1]);
          return (0, i.jsxs)(L.motion.div, {
            className: "rockstargames-sites-gta-trilogyf4a72102ceddef029be930bb493b8d88",
            "data-game": s,
            style: r,
            children: [(0, i.jsx)(L.motion.div, {
              className: "rockstargames-sites-gta-trilogyc35094365e57ebef18fcf1fbd503ec51",
              style: {
                opacity: v
              },
              children: a
            }), (0, i.jsx)(L.motion.img, {
              src: t(5748)(`./${s}_Girl.png`),
              className: "rockstargames-sites-gta-trilogyd3c78232d1c0927ec585487469a7ff98",
              style: {
                opacity: _
              }
            }), (0, i.jsx)(L.motion.div, {
              className: "rockstargames-sites-gta-trilogybc67a77bd0be6d9e4963002edc9eb1c9",
              style: {
                width: k,
                paddingBottom: y
              },
              children: (0, i.jsx)(m, {
                variant: s
              })
            })]
          })
        },
        F = e => {
          let {
            gameSlug: s,
            children: t,
            triggers: a,
            sizes: r
          } = e;
          const {
            scrollY: c
          } = (0, L.useViewportScroll)(), {
            endIntro: o,
            startGames: d,
            gamesTrigger1: n,
            gamesTrigger2: m,
            gamesTrigger3: g,
            introTriggers: l,
            introTriggers2: f
          } = a, {
            vw: b,
            vh: h,
            initialMiddleWidth: p,
            finalColumnWidth: x,
            gameDescriptionWidth: u,
            gameDescriptionHeight: j,
            imageGridGap: k,
            transitionDistance: y
          } = r, w = (0, L.useTransform)(c, l, [x, x, x, u]), _ = (0, L.useTransform)(c, f, [0, 0, 0, (h - j) / 2, (h - j) / 2, (h - j) / 2]), v = (0, L.useTransform)(c, f, [0, 0, 0, u + k, u + k, u - y]), N = (0, L.useTransform)(c, [d, d + 1, d + n, d + m], [h, h, h, j]);
          return (0, i.jsx)($, {
            gameSlug: s,
            style: {
              x: v,
              y: _,
              width: w,
              height: N
            },
            triggers: a,
            sizes: r,
            children: t
          })
        },
        M = e => {
          let {
            t: s,
            triggers: t,
            sizes: a
          } = e;
          const {
            scrollY: r
          } = (0, L.useViewportScroll)(), {
            endIntro: c,
            startGames: o,
            gamesTrigger1: d,
            gamesTrigger2: n,
            gamesTrigger3: m,
            introTriggers: g,
            introTriggers2: l
          } = t, {
            vw: f,
            vh: b,
            initialMiddleWidth: h,
            finalColumnWidth: p,
            gameDescriptionWidth: x,
            gameDescriptionHeight: u,
            imageGridGap: j,
            transitionDistance: k
          } = a, y = (0, L.useTransform)(r, g, [h, p, p, x]), w = (0, L.useTransform)(r, l, [0, 0, 0, (b - u) / 2, (b - u) / 2, (b - u) / 2]), _ = (0, L.useTransform)(r, l, [0, 0, 0, x + j, x + j, x - k]), v = (0, L.useTransform)(r, [o, o + 1, o + d, o + n], [b, b, b, u]);
          return (0, i.jsxs)($, {
            gameSlug: "VC",
            style: {
              x: _,
              y: w,
              width: y,
              height: v
            },
            triggers: t,
            sizes: a,
            children: [(0, i.jsx)("h3", {
              children: s("trilogy.games.vc.title")
            }), (0, i.jsx)("p", {
              children: s("trilogy.games.vc.body")
            })]
          })
        },
        G = e => {
          let {
            t: s,
            triggers: t,
            sizes: a
          } = e;
          return (0, i.jsxs)(F, {
            gameSlug: "III",
            triggers: t,
            sizes: a,
            children: [(0, i.jsx)("h3", {
              children: s("trilogy.games.iii.title")
            }), (0, i.jsx)("p", {
              children: s("trilogy.games.iii.body")
            })]
          })
        },
        C = e => {
          let {
            t: s,
            triggers: t,
            sizes: a
          } = e;
          return (0, i.jsxs)(F, {
            gameSlug: "SA",
            triggers: t,
            sizes: a,
            children: [(0, i.jsx)("h3", {
              children: s("trilogy.games.sc.title")
            }), (0, i.jsx)("p", {
              children: s("trilogy.games.sc.body")
            })]
          })
        },
        B = (0, n.withTranslations)((e => {
          let {
            t: s,
            startDistance: t
          } = e;
          if (!t) return null;
          const [a, r] = (0, w.useState)(D(t));
          return (0, w.useEffect)((() => {
            const e = () => {
              r(D(t))
            };
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), [t]), (0, i.jsxs)(L.motion.div, {
            className: "rockstargames-sites-gta-trilogyb27c2ebcfe15c41df0c992d67fc15aed",
            children: [(0, i.jsx)(G, {
              t: s,
              triggers: a?.triggers,
              sizes: a?.sizes
            }), (0, i.jsx)(M, {
              t: s,
              triggers: a?.triggers,
              sizes: a?.sizes
            }), (0, i.jsx)(C, {
              t: s,
              triggers: a?.triggers,
              sizes: a?.sizes
            })]
          })
        })),
        H = () => {
          const e = (0, w.useRef)(),
            [s, t] = (0, w.useState)(parseInt(localStorage?.getItem("startGames")) ?? null),
            a = (0, O.useIntersectionObserver)(e, {
              threshold: [0]
            }),
            [r, c] = (0, w.useState)(0),
            o = e => {
              t(e), localStorage.setItem("startGames", e)
            };
          return (0, w.useEffect)((() => {
            const t = () => {
              c(window.pageYOffset), a?.isIntersecting && !s && (o(window.pageYOffset > r ? window.pageYOffset : window.pageYOffset - e.current.offsetHeight - window.innerHeight), window.removeEventListener("scroll", t))
            };
            return window.addEventListener("scroll", t), () => window.removeEventListener("scroll", t)
          }), [r, s]), (0, w.useEffect)((() => {
            const s = () => {
              if (o(null), a?.isIntersecting) {
                const s = window.pageYOffset + e.current.getBoundingClientRect().top - window.innerHeight;
                o(s)
              }
            };
            return window.addEventListener("resize", s), () => window.removeEventListener("resize", s)
          }), [a]), (0, i.jsx)("section", {
            id: "games",
            ref: e,
            className: "rockstargames-sites-gta-trilogye931a8ec0b56a01e03bfbdd0c1b504e3",
            children: (0, i.jsx)(B, {
              startDistance: s
            })
          })
        },
        V = "rockstargames-sites-gta-trilogybaf0910838232b08c92edcb6a981d263",
        Y = "rockstargames-sites-gta-trilogyc12b85147ab877bdd1e264eae95885ec",
        A = "rockstargames-sites-gta-trilogyb9c2f6d143c919d269e79c918c9119bd",
        R = "rockstargames-sites-gta-trilogydb25c893ecdb3316b14c93891cbd4296",
        U = "rockstargames-sites-gta-trilogyd0a69bb831b4e0786451f3fb0a98caf5",
        K = "rockstargames-sites-gta-trilogyd557c3260fa1478a9ab89ebdcf82b84b",
        P = (0, n.withTranslations)((e => {
          let {
            t: s
          } = e;
          return (0, i.jsxs)(j, {
            id: "media",
            className: "rockstargames-sites-gta-trilogyba94f48290f0eba9b255628fb73650af",
            children: [(0, i.jsx)("div", {
              className: "rockstargames-sites-gta-trilogydd750bad3aae896ea003606d8b71367d",
              children: (0, i.jsx)("h3", {
                children: s("trilogy.beforeafter-title")
              })
            }), (0, i.jsxs)("div", {
              className: `${V} ${Y}`,
              children: [(0, i.jsx)("img", {
                src: t(4708)
              }), (0, i.jsx)("div", {
                className: U,
                children: (0, i.jsx)(m, {
                  className: K,
                  variant: "III"
                })
              })]
            }), (0, i.jsxs)("div", {
              className: `${V} ${A}`,
              children: [(0, i.jsx)("img", {
                src: t(36)
              }), (0, i.jsx)("img", {
                src: t(9616)
              })]
            }), (0, i.jsxs)("div", {
              className: `${V} ${R}`,
              children: [(0, i.jsx)("img", {
                src: t(3431)
              }), (0, i.jsx)("img", {
                src: t(9628)
              })]
            }), (0, i.jsxs)("div", {
              className: `${V} ${Y}`,
              children: [(0, i.jsx)("img", {
                src: t(836)
              }), (0, i.jsx)("div", {
                className: U,
                children: (0, i.jsx)(m, {
                  className: K,
                  variant: "VC"
                })
              })]
            }), (0, i.jsxs)("div", {
              className: `${V} rockstargames-sites-gta-trilogycc94677a83f454af7a5022a362878d7d`,
              children: [(0, i.jsx)("img", {
                src: t(2900)
              }), (0, i.jsx)("img", {
                src: t(132)
              })]
            }), (0, i.jsxs)("div", {
              className: `${V} ${R}`,
              children: [(0, i.jsx)("img", {
                src: t(9412)
              }), (0, i.jsx)("img", {
                src: t(7840)
              })]
            }), (0, i.jsxs)("div", {
              className: `${V} ${Y}`,
              children: [(0, i.jsx)("img", {
                src: t(2468)
              }), (0, i.jsx)("div", {
                className: U,
                children: (0, i.jsx)(m, {
                  className: K,
                  variant: "SA"
                })
              })]
            }), (0, i.jsxs)("div", {
              className: `${V} ${A}`,
              children: [(0, i.jsx)("img", {
                src: t(4940)
              }), (0, i.jsx)("img", {
                src: t(3548)
              })]
            }), (0, i.jsxs)("div", {
              className: `${V} ${R}`,
              children: [(0, i.jsx)("img", {
                src: t(6840)
              }), (0, i.jsx)("img", {
                src: t(6660)
              })]
            })]
          })
        })),
        q = (e, s, t) => {
          const a = e.split(s),
            r = [];
          for (let e = 0; e < a.length; e++) r.push(a[e]), e < a.length - 1 && r.push(t);
          return r
        },
        J = (0, r.withSimpleErrorBoundary)(r.Rating),
        Q = (0, n.withTranslations)((e => {
          let {
            t: s
          } = e;
          return (0, i.jsxs)("div", {
            className: "rockstargames-sites-gta-trilogyff81c758ae8f9c1c968caed27bf65d9c",
            children: [(0, i.jsxs)(j, {
              className: "rockstargames-sites-gta-trilogycea07dd04748f0d5a5a5e847dea51d49",
              children: [(0, i.jsx)("div", {
                className: "rockstargames-sites-gta-trilogyad8d2b9a429671ba124f56d8aef0336c",
                children: (0, i.jsx)("img", {
                  src: t(4600)
                })
              }), (0, i.jsx)(h, {
                className: "rockstargames-sites-gta-trilogye3d53937910b56e85b616c18d3fefae2",
                logoVariant: "horizontal"
              })]
            }), (0, i.jsx)("div", {
              className: "rockstargames-sites-gta-trilogyb42a248ee8b56a330c2c3349b94d10d2",
              children: (0, i.jsxs)(j, {
                children: [(0, i.jsx)(J, {
                  titleSlug: "GTATrilogy"
                }), (0, i.jsx)("div", {
                  className: "rockstargames-sites-gta-trilogyd8ad2b2c61621cb0980b9e3ec08f4445",
                  children: q(s("trilogy.footer"), "{logo}", (0, i.jsx)("div", {
                    className: "rockstargames-sites-gta-trilogyc6cca253803cc97d8a71219be0247b49"
                  }))
                })]
              })
            })]
          })
        })),
        X = () => (0, i.jsxs)("div", {
          className: "rockstargames-sites-gta-trilogyb8cf5407890c35f4d571c2b3cb58647b",
          children: [(0, i.jsx)(p, {}), (0, i.jsx)(k, {}), (0, i.jsx)(y, {}), (0, i.jsx)(W, {}), (0, i.jsx)(H, {}), (0, i.jsx)(P, {}), (0, i.jsx)(Q, {})]
        }),
        Z = () => {
          const e = [{
            path: "/",
            element: (0, i.jsx)(X, {})
          }, {
            path: "*",
            element: (0, i.jsx)(r.Wasted, {
              error: {
                code: window?.env?.responseStatusCode ?? 398
              }
            })
          }];
          return (0, a.useRoutes)(e)
        },
        ee = () => (0, i.jsx)(Z, {})
    },
    5748: (e, s, t) => {
      var a = {
        "./III_Girl.png": 2396,
        "./SA_Girl.png": 3144,
        "./VC_Girl.png": 9176
      };

      function r(e) {
        var s = i(e);
        return t(s)
      }

      function i(e) {
        if (!t.o(a, e)) {
          var s = new Error("Cannot find module '" + e + "'");
          throw s.code = "MODULE_NOT_FOUND", s
        }
        return a[e]
      }
      r.keys = function() {
        return Object.keys(a)
      }, r.resolve = i, e.exports = r, r.id = 5748
    },
    3380: (e, s, t) => {
      var a = {
        "./III-logo.svg": 1036,
        "./SA-logo.svg": 8656,
        "./VC-logo.svg": 676,
        "./full-logo.svg": 9332,
        "./horizontal-logo.svg": 8925
      };

      function r(e) {
        var s = i(e);
        return t(s)
      }

      function i(e) {
        if (!t.o(a, e)) {
          var s = new Error("Cannot find module '" + e + "'");
          throw s.code = "MODULE_NOT_FOUND", s
        }
        return a[e]
      }
      r.keys = function() {
        return Object.keys(a)
      }, r.resolve = i, e.exports = r, r.id = 3380
    },
    4584: (e, s, t) => {
      var a = {
        "./FOB_III.jpg": 9260,
        "./FOB_SA.jpg": 716,
        "./FOB_VC.jpg": 6364
      };

      function r(e) {
        var s = i(e);
        return t(s)
      }

      function i(e) {
        if (!t.o(a, e)) {
          var s = new Error("Cannot find module '" + e + "'");
          throw s.code = "MODULE_NOT_FOUND", s
        }
        return a[e]
      }
      r.keys = function() {
        return Object.keys(a)
      }, r.resolve = i, e.exports = r, r.id = 4584
    },
    2396: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ba9d39a51a293a0dea8015cb169a3f00.png"
    },
    3144: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/815ee37b95c5da495dfd53e195b3fd2b.png"
    },
    9176: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d694e018ebbf633042b0ab4efe240761.png"
    },
    1036: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ebac74a3bd8855474149e5183e5daab9.svg"
    },
    8656: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/419c79b6f881cd3688627cfb79701a87.svg"
    },
    676: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/eedafb67aa8e0d384b040a059e58c129.svg"
    },
    9332: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/040fbe2e73f8c389455e3388e65871e6.svg"
    },
    8925: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/373d262bd11690abd9c7d019b2a06ae5.svg"
    },
    9260: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3b429d8b2554c055088d26c6fee32e98.jpg"
    },
    716: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c3056c18e92a148889b955e35c1c1e51.jpg"
    },
    6364: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a6791bf313eb4e358c452a31527d40ef.jpg"
    },
    3111: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d0e385716c5426389c4d61fb78777d1c.svg"
    },
    9652: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4dd59366a90e52fc8b44cbd1b4137bc2.svg"
    },
    5224: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/669f728359a35dafbb17cfcae2a26e4c.svg"
    },
    4400: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f34e278813ef8f47dba1c371775c814b.svg"
    },
    9336: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5b6d072ab2eab82ec405ce22dc2e1e98.svg"
    },
    8416: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1550aa38eb8e866457a12bd02b9943d6.jpg"
    },
    7328: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/819b667fa0aef711c1f1628a42e8e9ce.jpg"
    },
    6400: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/567318b8517c492081e77e2e0a7ce63e.jpg"
    },
    4600: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fabc3ff8a64105c4d8ac1aadbeffb3a9.jpg"
    },
    6852: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d02080b921b7f16bcc79828f2098758f.jpg"
    },
    9428: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5b523f9e2578bdc3e95de00427f8910d.jpg"
    },
    8404: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/aea5f8a32dbc4b3b8cd475b36ca10553.jpg"
    },
    4708: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d0db280cc91d285f6ed5eb64f3d9d8e.jpg"
    },
    36: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f21b89ff222aec91c5c432eeb7993a15.jpg"
    },
    9616: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4aeff66c2cfd92173bf6a93f9a533b24.jpg"
    },
    3431: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4d8cb815ee8236e1dbac6e7d3120809b.jpg"
    },
    9628: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a6305db310108acdaa5f15d169b1b6c7.jpg"
    },
    2468: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5c00b0e39ea1fa1e867a6402ed9f4761.jpg"
    },
    4940: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d28dac374fa7413d066a50ca33cf6da7.jpg"
    },
    3548: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/39d1b9492d201b5d046ee2ba2f136001.jpg"
    },
    6840: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4bddd183ad5bce1fa0efdc5cbd958743.jpg"
    },
    6660: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e8a120c239702e7578f40def8fe1b8e5.jpg"
    },
    836: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/aa480237baeaa2aeb0df779e3b42e840.jpg"
    },
    2900: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c37f2dbd02b15d29abfce91294f29403.jpg"
    },
    132: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c56ece29d1d4a95952e36faf50215d22.jpg"
    },
    9412: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/423be4b38c2a859d7cf5b599814d4374.jpg"
    },
    7840: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6baec421d2ea5db3c5db1dfff3206ea4.jpg"
    }
  }
]);
//# sourceMappingURL=adee182e80b95dd7e71b0d38a3f353a8.js.map