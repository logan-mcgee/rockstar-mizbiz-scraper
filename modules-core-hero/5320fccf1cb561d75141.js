(self.webpackChunk_rockstargames_modules_core_hero = self.webpackChunk_rockstargames_modules_core_hero || []).push([
  [485], {
    7928: (e, a, s) => {
      "use strict";
      s.r(a), s.d(a, {
        default: () => w
      });
      var t = s(9542),
        m = s(9929),
        c = s(4379),
        o = s(8976);
      const r = {
          visible: {
            opacity: 1,
            transition: {
              ease: [.5, 0, 0, 1],
              duration: .75,
              when: "beforeChildren",
              delayChildren: .25,
              staggerChildren: .1
            }
          },
          hidden: {
            opacity: 0
          }
        },
        i = {
          visible: {
            opacity: 1,
            y: 0,
            height: "100%",
            overflow: "hidden",
            transition: {
              ease: [.5, 0, 0, 1],
              duration: .75
            }
          },
          hidden: {
            opacity: 0,
            y: 100,
            height: "0%",
            overflow: "hidden"
          }
        };
      var n = s(289);
      const d = (0, n.createContext)({}),
        {
          Provider: g
        } = d,
        l = () => (0, n.useContext)(d),
        u = {};
      var v = s(6160);
      const f = () => {
          const {
            animated: e,
            brands: a,
            legalText: s
          } = l();
          return (0, v.jsxs)(c.E.div, {
            className: u.content,
            initial: "hidden",
            animate: "visible",
            variants: e ? r : void 0,
            children: [(0, v.jsx)(c.E.div, {
              variants: e ? i : void 0,
              children: (0, v.jsx)(o.Brands, {
                brands: a
              })
            }), s && (0, v.jsx)(c.E.div, {
              className: u.legalText,
              variants: e ? i : void 0,
              children: (0, v.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: s
                }
              })
            })]
          })
        },
        b = () => {
          const {
            animated: e,
            backgroundImageDesktop: a,
            backgroundImageMobile: s,
            className: m,
            imageStyles: o,
            foregroundImageDesktop: i,
            foregroundImageMobile: n,
            foregroundImageStyles: d
          } = l();
          return (0, v.jsxs)(c.E.div, {
            className: (0, t.classList)("d19089a0dc318059f10e3404b5f905f55c7d", m),
            style: o,
            initial: "hidden",
            animate: "visible",
            variants: e ? r : void 0,
            "data-type": "hero",
            children: [(0, v.jsxs)("div", {
              className: "d19089a0dc318059ec5434167e737d19d402",
              children: [a && s ? (0, v.jsx)("div", {
                className: "d19089a0dc318059e74df4ca2dc9db6a86f8"
              }) : "", n && i ? (0, v.jsx)("div", {
                className: "d19089a0dc318059e27b71cdba2f9f3122f9",
                style: d ?? {}
              }) : "", (0, v.jsx)("div", {
                className: "d19089a0dc318059e70122156e22d4484288"
              })]
            }), (0, v.jsx)(f, {})]
          })
        },
        _ = {
          visible: {
            opacity: 1,
            transition: {
              ease: [.5, 0, 0, 1],
              duration: .75,
              when: "beforeChildren",
              delayChildren: .25,
              staggerChildren: .1
            }
          },
          hidden: {
            opacity: 0
          }
        },
        p = {
          visible: {
            opacity: 1,
            transition: {
              ease: [0, 0, 0, 1],
              duration: 1
            }
          },
          hidden: {
            opacity: 0
          }
        };
      var h = s(6711);
      const k = {
          ps3: "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/c362395c2a7ba52d8e93.svg",
          ps4: "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/399e4fadd28201f041fe.svg",
          xbox: "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/96b3858c446374dbe3a1.svg",
          xboxone: "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/3852a2c6a70d09be710a.svg",
          switch: "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/fc5864f34c72e5763bea.svg",
          xbox360: "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/3ab3afe4e696bde1c015.svg",
          play: "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/8b42fcf96b9a5a9fe517.svg",
          questionMark: "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/e17029ee821cf4c19a4b.svg",
          default: ""
        },
        x = e => k[e] || null,
        y = {
          buttons: "d19089a0dc318059a4a6b50a3fc9ac8ffd96",
          mainButton: "d19089a0dc318059cad981b56548a1d9aab1",
          label: "d19089a0dc318059a80eca6149cb2deffa74",
          primary: "d19089a0dc318059d6a6926b4d305a124eec",
          ctaAndPlatformContainer: "d19089a0dc318059a4ef971101acfc7d760c",
          bottomEdge: "d19089a0dc318059f76ff3da14cbe3298244",
          platformSection: "d19089a0dc318059aca5a5492d25aa40cd69",
          heading: "d19089a0dc318059b5e36a4f389a7464220e",
          platforms: "d19089a0dc318059df463c177fc47975546e"
        },
        j = e => {
          let {
            ctas: a = [],
            platformCollection: s = [],
            enablePlatforms: t = !1,
            backgroundImageMask: c = ""
          } = e;
          const {
            isMobile: r
          } = (0, m.useWindowResize)(), {
            track: i
          } = (0, h.useGtmTrack)(), n = {
            "--background-image-mask": `url(${c})`
          };
          return a?.buttons?.length ? (0, v.jsxs)("section", {
            className: [y.ctaAndPlatformContainer, r ? y.bottomEdge : ""].join(" "),
            style: n,
            children: [(0, v.jsx)("div", {
              className: y.buttons,
              style: {
                width: r ? "100%" : ""
              },
              children: a?.buttons.map((e => ((e, a) => {
                const {
                  key: s,
                  label: t,
                  icon: c,
                  primary: r,
                  type: i,
                  href: n
                } = e;
                switch (i) {
                  case "wishlist":
                    return (0, v.jsx)(o.A, {
                      to: n,
                      role: "button",
                      tabIndex: "-1",
                      onClick: () => {
                        (0, m.detectIfWeShouldAnchorSomewhere)(), a({
                          event: "add_to_wishlist",
                          text: t,
                          element_placement: "hero"
                        })
                      },
                      children: (0, v.jsxs)("div", {
                        className: [y.mainButton, r ? y.primary : ""].filter((e => e)).join(" "),
                        children: [e?.icon && (0, v.jsx)("img", {
                          className: y.platformIcon,
                          src: x(e?.icon) || "",
                          alt: t,
                          "aria-label": t
                        }), (0, v.jsx)("div", {
                          className: y.label,
                          children: t
                        })]
                      })
                    }, s);
                  case "buy":
                    return (0, v.jsx)(o.A, {
                      to: n,
                      role: "button",
                      tabIndex: "-1",
                      onClick: () => {
                        a({
                          event: "cta_buy",
                          event_category: "cta",
                          event_action: "buy",
                          event_label: "hero"
                        })
                      },
                      children: (0, v.jsxs)("div", {
                        className: [y.mainButton, r ? y.primary : ""].filter((e => e)).join(" "),
                        children: [e?.icon && (0, v.jsx)("img", {
                          className: y.platformIcon,
                          src: x(c) || "",
                          alt: t,
                          "aria-label": t
                        }), (0, v.jsx)("div", {
                          className: y.label,
                          children: t
                        })]
                      })
                    }, s);
                  case "trailer":
                    return (0, v.jsx)(o.A, {
                      to: n,
                      role: "button",
                      tabIndex: "-1",
                      onClick: () => {
                        a({
                          event: "cta_watch_video",
                          text: t,
                          link_url: n,
                          element_placement: "hero"
                        })
                      },
                      children: (0, v.jsxs)("div", {
                        className: [y.mainButton, r ? y.primary : ""].filter((e => e)).join(" "),
                        children: [e?.icon && (0, v.jsx)("img", {
                          className: y.platformIcon,
                          src: x(c) || "",
                          alt: t,
                          "aria-label": t
                        }), (0, v.jsx)("div", {
                          className: y.label,
                          children: t
                        })]
                      })
                    }, s);
                  default:
                    return (0, v.jsx)(o.A, {
                      to: n,
                      role: "button",
                      tabIndex: "-1",
                      onClick: () => {
                        a({
                          event: "cta_other",
                          text: t,
                          link_url: n,
                          element_placement: "hero"
                        })
                      },
                      children: (0, v.jsxs)("div", {
                        className: [y.mainButton, r ? y.primary : ""].filter((e => e)).join(" "),
                        children: [e?.icon && (0, v.jsx)("img", {
                          className: y.platformIcon,
                          src: x(c) || "",
                          alt: t,
                          "aria-label": t
                        }), (0, v.jsx)("div", {
                          className: y.label,
                          children: t
                        })]
                      })
                    }, s)
                }
              })(e, (e => i(e)))))
            }), r && t && (0, v.jsx)("div", {
              className: y.platformSection,
              children: s?.map((e => (0, v.jsxs)("div", {
                className: y.col,
                children: [(0, v.jsx)("div", {
                  className: y.heading,
                  children: e?.platformHeading
                }), (0, v.jsx)("div", {
                  className: y.platforms,
                  children: e?.platformDescription
                })]
              }, JSON.stringify(e))))
            })]
          }) : null
        },
        z = {
          hero: "d19089a0dc318059f4cb1ce400a14b999df7",
          images: "d19089a0dc318059c8693260205325f8e1bf",
          background: "d19089a0dc318059e560de515cf53390f09e",
          foreground: "d19089a0dc318059f712520894ee37793fd7",
          content: "d19089a0dc318059d71a8e6c05988d6524df",
          brandLogo: "d19089a0dc318059eeb2f4cddb715f59c226",
          brand: "d19089a0dc318059d54397e2a3533d457f55",
          ctaButtons: "d19089a0dc318059b77452be0c9c58afff12",
          platformSection: "d19089a0dc318059bbf4aa90cf1275616493",
          heading: "d19089a0dc318059cb3e00cae45fdc51a681",
          platforms: "d19089a0dc318059a3d7e23d9d2bd0e517dd"
        },
        N = () => {
          const e = (0, m.useLocale)(),
            {
              breakpoints: a
            } = (0, m.useWindowResize)(),
            {
              animated: o,
              brands: r,
              ctas: i,
              platformCollection: n,
              enablePlatforms: d,
              className: g,
              hasBackgroundImage: u,
              hasForegroundImage: f,
              imageStyles: b,
              foregroundImageStyles: h
            } = l(),
            k = r?.[0]?.brand ?? null;
          let x;
          try {
            x = s(7948)(`./${e}/${k}.svg`)
          } catch (e) {
            x = s(1446)(`./${k}.svg`)
          }
          return (0, v.jsxs)(c.E.div, {
            className: (0, t.classList)(z.hero, g),
            style: b,
            initial: "hidden",
            animate: "visible",
            variants: o ? _ : void 0,
            "data-type": "hero",
            children: [(0, v.jsxs)("div", {
              className: z.images,
              children: [u && (0, v.jsx)("div", {
                className: z.background
              }), f && (0, v.jsx)("div", {
                className: z.foreground,
                style: h ?? {}
              })]
            }), (0, v.jsx)(c.E.div, {
              className: z.content,
              initial: "hidden",
              animate: "visible",
              variants: o ? _ : void 0,
              children: (0, v.jsxs)(c.E.div, {
                className: z.brand,
                variants: o ? p : void 0,
                children: [k && (0, v.jsx)("div", {
                  className: z.brandLogo,
                  children: (0, v.jsx)("img", {
                    src: x,
                    alt: "Brand",
                    style: {
                      width: "100%",
                      height: "auto"
                    }
                  })
                }), a.sm.activeMin && (0, v.jsx)(j, {
                  ctas: i,
                  platformCollection: n,
                  enablePlatforms: d
                })]
              })
            }), a.sm.activeMin && d && (0, v.jsx)("div", {
              className: z.platformSection,
              children: n?.map((e => (0, v.jsxs)("div", {
                className: z.col,
                children: [(0, v.jsx)("div", {
                  className: z.heading,
                  children: e?.platformHeading
                }), (0, v.jsx)("div", {
                  className: z.platforms,
                  children: e?.platformDescription
                })]
              })))
            })]
          })
        },
        w = e => {
          let {
            animated: a = !1,
            content: {
              brands: s = [],
              platformCollection: c,
              enablePlatforms: o,
              description: r = "",
              legalText: i = "",
              title: n = "",
              ctaGroup: d = {}
            },
            id: l = "",
            images: u = {},
            className: f = "",
            shardsSection: _ = [],
            type: p = "gen9"
          } = e;
          const {
            isMobile: h
          } = (0, m.useWindowResize)(), {
            background: k,
            foreground: x
          } = u, {
            expandingButton: y,
            ctas: z
          } = d, w = (e => {
            let a = {};
            const s = new Map([
              ["horizontal", "--foreground-horizontal-offset-"],
              ["vertical", "--foreground-vertical-offset-"],
              ["width", "--foreground-image-width-"],
              ["height", "--foreground-image-height-"]
            ]);
            return Object.getOwnPropertyNames(e).forEach((t => {
              Object.getOwnPropertyNames(e[t]).forEach((m => {
                if (s.has(m)) {
                  const {
                    unit: c,
                    value: o
                  } = e[t][m], r = s.get(m), i = c?.length && o?.length ? `${o}${c}` : void 0;
                  i && (a = {
                    ...a,
                    [`${r}${t}`]: `${i}`
                  })
                }
              }))
            })), a
          })(x), C = (0, t.useGetCdnSource)(k?.mask?.full_src ?? null), S = (0, t.useGetCdnSource)(k?.mobile?.full_src ?? null), I = (0, t.useGetCdnSource)(k?.desktop?.full_src ?? S), E = (0, t.useGetCdnSource)(x?.mobile?.image?.full_src ?? null), $ = (0, t.useGetCdnSource)(x?.mini?.image?.full_src ?? E), M = (0, t.useGetCdnSource)(x?.desktop?.image?.full_src ?? E), O = {
            "--background-image-desktop": `url(${I})`,
            "--background-image-mobile": `url(${S})`,
            "--background-image-mask": `url(${C})`,
            "--foreground-image-desktop": `url(${M})`,
            "--foreground-image-mini": `url(${$})`,
            "--foreground-image-mobile": `url(${E})`,
            "--foreground-image-tablet": `url(${(0,t.useGetCdnSource)(x?.tablet?.image?.full_src??M)})`,
            "--foreground-image-ultrawide": `url(${(0,t.useGetCdnSource)(x?.ultrawide?.image?.full_src??M)})`
          }, B = !(!I && !S), P = !(!M && !E);
          return (0, v.jsx)(g, {
            value: {
              animated: a,
              brands: s,
              className: f,
              ctas: z,
              platformCollection: c,
              enablePlatforms: o,
              description: r,
              expandingButton: y,
              hasBackgroundImage: B,
              hasForegroundImage: P,
              imageStyles: O,
              foregroundImageStyles: w,
              legalText: i,
              shardsSection: _,
              title: n
            },
            children: (0, v.jsxs)("section", {
              id: l ?? "",
              children: [(() => {
                switch (p) {
                  case "gen9":
                  default:
                    return (0, v.jsx)(b, {});
                  case "legacy":
                    return (0, v.jsx)(N, {})
                }
              })(), h && (0, v.jsx)(j, {
                ctas: z,
                platformCollection: c,
                enablePlatforms: o,
                backgroundImageMask: C
              })]
            })
          })
        }
    },
    1446: (e, a, s) => {
      var t = {
        "./bully.svg": 2056,
        "./bullyS.svg": 1722,
        "./bullySE.svg": 6488,
        "./gta1.svg": 7302,
        "./gta2black.svg": 3092,
        "./gta2white.svg": 195,
        "./gta3black.svg": 2863,
        "./gta3white.svg": 6845,
        "./gta4.svg": 2538,
        "./gta4tlad.svg": 6696,
        "./gtabogt.svg": 5692,
        "./gtacw.svg": 5723,
        "./gtalc.svg": 8993,
        "./gtalcs.svg": 3703,
        "./gtao.svg": 9559,
        "./gtaplus.svg": 1789,
        "./gtasa.svg": 9302,
        "./gtatlad.svg": 75,
        "./gtav.svg": 8339,
        "./gtavc.svg": 3318,
        "./gtavcs.svg": 1107,
        "./lanoire.svg": 606,
        "./manhunt1.svg": 362,
        "./manhunt2.svg": 7506,
        "./maxpayne1.svg": 7989,
        "./maxpayne2.svg": 8761,
        "./maxpayne3.svg": 5622,
        "./mc1.svg": 3417,
        "./mc2.svg": 720,
        "./mc3.svg": 2178,
        "./mc3remix.svg": 4606,
        "./mcla.svg": 6585,
        "./mclaremix.svg": 9417,
        "./rdo.svg": 9781,
        "./rdr1.svg": 5309,
        "./rdr1rsp.svg": 4339,
        "./rdr2.svg": 6516,
        "./rdrevolver.svg": 8443,
        "./rdrun.svg": 8984,
        "./sr1.svg": 2117,
        "./sr2.svg": 9080,
        "./srwz.svg": 6086,
        "./tabletennis.svg": 5364,
        "./warriors.svg": 3614
      };

      function m(e) {
        var a = c(e);
        return s(a)
      }

      function c(e) {
        if (!s.o(t, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return t[e]
      }
      m.keys = function() {
        return Object.keys(t)
      }, m.resolve = c, e.exports = m, m.id = 1446
    },
    7948: (e, a, s) => {
      var t = {
        "./en_us/bully.svg": 2056,
        "./en_us/bullyS.svg": 1722,
        "./en_us/bullySE.svg": 6488,
        "./en_us/gta1.svg": 7302,
        "./en_us/gta2black.svg": 3092,
        "./en_us/gta2white.svg": 195,
        "./en_us/gta3black.svg": 2863,
        "./en_us/gta3white.svg": 6845,
        "./en_us/gta4.svg": 2538,
        "./en_us/gta4tlad.svg": 6696,
        "./en_us/gtabogt.svg": 5692,
        "./en_us/gtacw.svg": 5723,
        "./en_us/gtalc.svg": 8993,
        "./en_us/gtalcs.svg": 3703,
        "./en_us/gtao.svg": 9559,
        "./en_us/gtaplus.svg": 1789,
        "./en_us/gtasa.svg": 9302,
        "./en_us/gtatlad.svg": 75,
        "./en_us/gtav.svg": 8339,
        "./en_us/gtavc.svg": 3318,
        "./en_us/gtavcs.svg": 1107,
        "./en_us/lanoire.svg": 606,
        "./en_us/manhunt1.svg": 362,
        "./en_us/manhunt2.svg": 7506,
        "./en_us/maxpayne1.svg": 7989,
        "./en_us/maxpayne2.svg": 8761,
        "./en_us/maxpayne3.svg": 5622,
        "./en_us/mc1.svg": 3417,
        "./en_us/mc2.svg": 720,
        "./en_us/mc3.svg": 2178,
        "./en_us/mc3remix.svg": 4606,
        "./en_us/mcla.svg": 6585,
        "./en_us/mclaremix.svg": 9417,
        "./en_us/rdo.svg": 9781,
        "./en_us/rdr1.svg": 5309,
        "./en_us/rdr1rsp.svg": 4339,
        "./en_us/rdr2.svg": 6516,
        "./en_us/rdrevolver.svg": 8443,
        "./en_us/rdrun.svg": 8984,
        "./en_us/sr1.svg": 2117,
        "./en_us/sr2.svg": 9080,
        "./en_us/srwz.svg": 6086,
        "./en_us/tabletennis.svg": 5364,
        "./en_us/warriors.svg": 3614
      };

      function m(e) {
        var a = c(e);
        return s(a)
      }

      function c(e) {
        if (!s.o(t, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return t[e]
      }
      m.keys = function() {
        return Object.keys(t)
      }, m.resolve = c, e.exports = m, m.id = 7948
    },
    2056: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/b84bb25fd59dc430671e.svg"
    },
    1722: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/b84bb25fd59dc430671e.svg"
    },
    6488: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/6e0fe499930736fc80f9.svg"
    },
    7302: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/96799b13efc766ab13ec.svg"
    },
    3092: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/da7954dcb372602a8b6b.svg"
    },
    195: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/480689552bbd1e5ec5e2.svg"
    },
    2863: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/66e1d2667e3d85469176.svg"
    },
    6845: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/fb3799eca59e022a1a23.svg"
    },
    2538: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/c68b513df2ab26124912.svg"
    },
    6696: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/cf1b2101a9303598140a.svg"
    },
    5692: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/a8d7a555794cbac9d1f6.svg"
    },
    5723: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/b645ab1c33157898c58e.svg"
    },
    8993: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/c6edd142041e844c9f48.svg"
    },
    3703: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/473ed37ce8fc42464d83.svg"
    },
    9559: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/412d03abdb7494d6a81c.svg"
    },
    1789: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/c957a3210117cf0e5e6a.svg"
    },
    9302: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/47f48f4dfa6e08181d9e.svg"
    },
    75: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/cf1b2101a9303598140a.svg"
    },
    8339: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/cc4b8d5c455ccb92dc0c.svg"
    },
    3318: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/0a7b9f3edee57c0ab764.svg"
    },
    1107: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/17fe6353c3e731ecaf42.svg"
    },
    606: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/1783114f0cf67c89b994.svg"
    },
    362: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/5936d9cf6616c75caa07.svg"
    },
    7506: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/91e51a183db8b230c66c.svg"
    },
    7989: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/c886f26c168e8e70ae72.svg"
    },
    8761: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/3b467cfb7c0e845d0f78.svg"
    },
    5622: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/dc7ddfd9eabea6dd1f50.svg"
    },
    3417: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/947979e56397bb150c0d.svg"
    },
    720: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/f6dfebaed2595c05bbad.svg"
    },
    2178: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/38f021f101c1e39c7bbb.svg"
    },
    4606: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/7281b1ed1251e09ac13e.svg"
    },
    6585: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/cd4d64ab011a55fa4705.svg"
    },
    9417: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/177289c246aca364e586.svg"
    },
    9781: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/b571866ac871cd93641f.svg"
    },
    5309: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/19a78ca2f698321df7db.svg"
    },
    4339: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/762722045c24a9838905.svg"
    },
    6516: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/6bf408bf416c95abf860.svg"
    },
    8443: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/51d84bf4a49aac65b2c3.svg"
    },
    8984: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/e21b86fbb99130c8fbcc.svg"
    },
    2117: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/533d63055f1be1cb1bcc.svg"
    },
    9080: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/a5b47c4cd016a2398138.svg"
    },
    6086: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/47b1e5e16086dd59acee.svg"
    },
    5364: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/e1dc80ce7bfdbd1aa5b7.svg"
    },
    3614: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/e753c5a450a038a5d565.svg"
    }
  }
]);