(self.webpackChunk_rockstargames_modules_core_hero = self.webpackChunk_rockstargames_modules_core_hero || []).push([
  [272], {
    7016: (e, a, s) => {
      "use strict";
      s.r(a), s.d(a, {
        default: () => w
      });
      var t = s(9542),
        r = s(9929),
        o = s(681),
        m = s(8976);
      const c = {
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
        d = {
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
      var i = s(279);
      const n = (0, i.createContext)({}),
        {
          Provider: g
        } = n,
        l = () => (0, i.useContext)(n),
        f = {};
      var b = s(3705);
      const u = () => {
          const {
            animated: e,
            brands: a,
            legalText: s
          } = l();
          return (0, b.jsxs)(o.E.div, {
            className: f.content,
            initial: "hidden",
            animate: "visible",
            variants: e ? c : void 0,
            children: [(0, b.jsx)(o.E.div, {
              variants: e ? d : void 0,
              children: (0, b.jsx)(m.Brands, {
                brands: a
              })
            }), s && (0, b.jsx)(o.E.div, {
              className: f.legalText,
              variants: e ? d : void 0,
              children: (0, b.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: s
                }
              })
            })]
          })
        },
        p = () => {
          const {
            animated: e,
            backgroundImageDesktop: a,
            backgroundImageMobile: s,
            className: r,
            imageStyles: m,
            foregroundImageDesktop: d,
            foregroundImageMobile: i,
            foregroundImageStyles: n
          } = l();
          return (0, b.jsxs)(o.E.div, {
            className: (0, t.classList)("rockstargames-modules-core-heroab34c150959a3e817c63f243582c5dd0", r),
            style: m,
            initial: "hidden",
            animate: "visible",
            variants: e ? c : void 0,
            "data-type": "hero",
            children: [(0, b.jsxs)("div", {
              className: "rockstargames-modules-core-heroa405ffcbe811ff8a1d60214a55f258d0",
              children: [a && s ? (0, b.jsx)("div", {
                className: "rockstargames-modules-core-herod7078d6fe2f842243694d795c612ad01"
              }) : "", i && d ? (0, b.jsx)("div", {
                className: "rockstargames-modules-core-heroe2066b3a6a753da9c56bc06c5dc8fb16",
                style: n ?? {}
              }) : "", (0, b.jsx)("div", {
                className: "rockstargames-modules-core-herof0a3e366f73eb509f74764114db394da"
              })]
            }), (0, b.jsx)(u, {})]
          })
        },
        v = {
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
        _ = {
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
          ps3: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg",
          ps4: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg",
          xbox: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d6d2cb861c79506282c6d6cbf1170f81.svg",
          xboxone: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg",
          switch: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg",
          xbox360: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c5cee7464423693de19149a4554b3c2.svg",
          play: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6682dc1ced3dab7f8ba43efb05df8e37.svg",
          questionMark: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e6833fa9baf4a5382bdd84b0b7d2c03f.svg",
          default: ""
        },
        x = e => k[e] || null,
        z = {
          buttons: "rockstargames-modules-core-heroc91dbfc46b32d701ad406e8e05d6c7b7",
          mainButton: "rockstargames-modules-core-herod5cc9adff876740d5ab25bb87f06a7d1",
          label: "rockstargames-modules-core-herobb2dd534268087593550f76172be7a4b",
          primary: "rockstargames-modules-core-heroaaf54771bc646af7279967df2d3408f0",
          ctaAndPlatformContainer: "rockstargames-modules-core-herof9c8c35a94febb66f009d6b0c9dd8fe2",
          bottomEdge: "rockstargames-modules-core-heroaf3be3bd90650750afa5b0dae0721e5d",
          platformSection: "rockstargames-modules-core-heroad77f0d746ff170cdd1d173e1f4510cc",
          heading: "rockstargames-modules-core-herod1e1b4df85976f6b353085e8adc33480",
          platforms: "rockstargames-modules-core-herobf74a634c9febdae8d97e6e241de28f0"
        },
        y = e => {
          let {
            ctas: a = [],
            platformCollection: s = [],
            enablePlatforms: t = !1,
            backgroundImageMask: o = ""
          } = e;
          const {
            isMobile: c
          } = (0, r.useWindowResize)(), {
            track: d
          } = (0, h.useGtmTrack)(), i = {
            "--background-image-mask": `url(${o})`
          };
          return a?.buttons?.length ? (0, b.jsxs)("section", {
            className: [z.ctaAndPlatformContainer, c ? z.bottomEdge : ""].join(" "),
            style: i,
            children: [(0, b.jsx)("div", {
              className: z.buttons,
              style: {
                width: c ? "100%" : ""
              },
              children: a?.buttons.map((e => ((e, a) => {
                const {
                  key: s,
                  label: t,
                  icon: o,
                  primary: c,
                  type: d,
                  href: i
                } = e;
                switch (d) {
                  case "wishlist":
                    return (0, b.jsx)(m.A, {
                      to: i,
                      role: "button",
                      tabIndex: "-1",
                      onClick: () => {
                        (0, r.detectIfWeShouldAnchorSomewhere)(), a({
                          event: "add_to_wishlist",
                          text: t,
                          element_placement: "hero"
                        })
                      },
                      children: (0, b.jsxs)("div", {
                        className: [z.mainButton, c ? z.primary : ""].filter((e => e)).join(" "),
                        children: [e?.icon && (0, b.jsx)("img", {
                          className: z.platformIcon,
                          src: x(e?.icon) || "",
                          alt: t,
                          "aria-label": t
                        }), (0, b.jsx)("div", {
                          className: z.label,
                          children: t
                        })]
                      })
                    }, s);
                  case "buy":
                    return (0, b.jsx)(m.A, {
                      to: i,
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
                      children: (0, b.jsxs)("div", {
                        className: [z.mainButton, c ? z.primary : ""].filter((e => e)).join(" "),
                        children: [e?.icon && (0, b.jsx)("img", {
                          className: z.platformIcon,
                          src: x(o) || "",
                          alt: t,
                          "aria-label": t
                        }), (0, b.jsx)("div", {
                          className: z.label,
                          children: t
                        })]
                      })
                    }, s);
                  case "trailer":
                    return (0, b.jsx)(m.A, {
                      to: i,
                      role: "button",
                      tabIndex: "-1",
                      onClick: () => {
                        a({
                          event: "cta_watch_video",
                          text: t,
                          link_url: i,
                          element_placement: "hero"
                        })
                      },
                      children: (0, b.jsxs)("div", {
                        className: [z.mainButton, c ? z.primary : ""].filter((e => e)).join(" "),
                        children: [e?.icon && (0, b.jsx)("img", {
                          className: z.platformIcon,
                          src: x(o) || "",
                          alt: t,
                          "aria-label": t
                        }), (0, b.jsx)("div", {
                          className: z.label,
                          children: t
                        })]
                      })
                    }, s);
                  default:
                    return (0, b.jsx)(m.A, {
                      to: i,
                      role: "button",
                      tabIndex: "-1",
                      onClick: () => {
                        a({
                          event: "cta_other",
                          text: t,
                          link_url: i,
                          element_placement: "hero"
                        })
                      },
                      children: (0, b.jsxs)("div", {
                        className: [z.mainButton, c ? z.primary : ""].filter((e => e)).join(" "),
                        children: [e?.icon && (0, b.jsx)("img", {
                          className: z.platformIcon,
                          src: x(o) || "",
                          alt: t,
                          "aria-label": t
                        }), (0, b.jsx)("div", {
                          className: z.label,
                          children: t
                        })]
                      })
                    }, s)
                }
              })(e, (e => d(e)))))
            }), c && t && (0, b.jsx)("div", {
              className: z.platformSection,
              children: s?.map((e => (0, b.jsxs)("div", {
                className: z.col,
                children: [(0, b.jsx)("div", {
                  className: z.heading,
                  children: e?.platformHeading
                }), (0, b.jsx)("div", {
                  className: z.platforms,
                  children: e?.platformDescription
                })]
              }, JSON.stringify(e))))
            })]
          }) : null
        },
        j = {
          hero: "rockstargames-modules-core-herob8e0233267ba05921810793260210866",
          images: "rockstargames-modules-core-heroa34402c543cdc21c911019f01fbf538d",
          background: "rockstargames-modules-core-heroa6b35a523a2b0fc6d56844cf3dae0884",
          foreground: "rockstargames-modules-core-heroe1ec5a44ae4546611241d132fd0a6f3c",
          content: "rockstargames-modules-core-heroad14c1e60798ec06d48a6094dc712a40",
          brandLogo: "rockstargames-modules-core-heroa2d080d07749082874680f254a4169fd",
          brand: "rockstargames-modules-core-herof5d7467c97b2f0c0fc53f85aa30c4cf9",
          ctaButtons: "rockstargames-modules-core-herod7afacab3be4aad5d956b85cf9102ba5",
          platformSection: "rockstargames-modules-core-heroc0dad90d57612ad751be9db5d79d20a4",
          heading: "rockstargames-modules-core-herob54eb29bfc9e1c04759c5a86db9f899d",
          platforms: "rockstargames-modules-core-herofacdc7c8011a78565764be582b6d2fbc"
        },
        N = () => {
          const e = (0, r.useLocale)(),
            {
              breakpoints: a
            } = (0, r.useWindowResize)(),
            {
              animated: m,
              brands: c,
              ctas: d,
              platformCollection: i,
              enablePlatforms: n,
              className: g,
              hasBackgroundImage: f,
              hasForegroundImage: u,
              imageStyles: p,
              foregroundImageStyles: h
            } = l(),
            k = c?.[0]?.brand ?? null;
          let x;
          if (k) try {
            x = s(7948)(`./${e}/${k}.svg`)
          } catch (e) {
            x = s(1446)(`./${k}.svg`)
          }
          return (0, b.jsxs)(o.E.div, {
            className: (0, t.classList)(j.hero, g),
            style: p,
            initial: "hidden",
            animate: "visible",
            variants: m ? v : void 0,
            "data-type": "hero",
            children: [(0, b.jsxs)("div", {
              className: j.images,
              children: [f && (0, b.jsx)("div", {
                className: j.background
              }), u && (0, b.jsx)("div", {
                className: j.foreground,
                style: h ?? {}
              })]
            }), (0, b.jsx)(o.E.div, {
              className: j.content,
              initial: "hidden",
              animate: "visible",
              variants: m ? v : void 0,
              children: (0, b.jsxs)(o.E.div, {
                className: j.brand,
                variants: m ? _ : void 0,
                children: [k && (0, b.jsx)("div", {
                  className: j.brandLogo,
                  children: (0, b.jsx)("img", {
                    src: x,
                    alt: "Brand",
                    style: {
                      width: "100%",
                      height: "auto"
                    }
                  })
                }), a.sm.activeMin && (0, b.jsx)(y, {
                  ctas: d,
                  platformCollection: i,
                  enablePlatforms: n
                })]
              })
            }), a.sm.activeMin && n && (0, b.jsx)("div", {
              className: j.platformSection,
              children: i?.map((e => (0, b.jsxs)("div", {
                className: j.col,
                children: [(0, b.jsx)("div", {
                  className: j.heading,
                  children: e?.platformHeading
                }), (0, b.jsx)("div", {
                  className: j.platforms,
                  children: e?.platformDescription
                })]
              }, e)))
            })]
          })
        },
        w = e => {
          let {
            animated: a = !1,
            content: {
              brands: s = [],
              platformCollection: o,
              enablePlatforms: m,
              description: c = "",
              legalText: d = "",
              title: i = "",
              ctaGroup: n = {}
            },
            id: l = "",
            images: f = {},
            className: u = "",
            shardsSection: v = [],
            type: _ = "gen9"
          } = e;
          const {
            isMobile: h
          } = (0, r.useWindowResize)(), {
            background: k,
            foreground: x
          } = f, {
            expandingButton: z,
            ctas: j
          } = n, w = (e => {
            let a = {};
            const s = new Map([
              ["horizontal", "--foreground-horizontal-offset-"],
              ["vertical", "--foreground-vertical-offset-"],
              ["width", "--foreground-image-width-"],
              ["height", "--foreground-image-height-"]
            ]);
            return e && "object" == typeof e && Object.getOwnPropertyNames(e).forEach((t => {
              Object.getOwnPropertyNames(e[t]).forEach((r => {
                if (s.has(r)) {
                  const {
                    unit: o,
                    value: m
                  } = e[t][r], c = s.get(r), d = o?.length && m?.length ? `${m}${o}` : void 0;
                  d && (a = {
                    ...a,
                    [`${c}${t}`]: `${d}`
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
          return (0, b.jsx)(g, {
            value: {
              animated: a,
              brands: s,
              className: u,
              ctas: j,
              platformCollection: o,
              enablePlatforms: m,
              description: c,
              expandingButton: z,
              hasBackgroundImage: B,
              hasForegroundImage: P,
              imageStyles: O,
              foregroundImageStyles: w,
              legalText: d,
              shardsSection: v,
              title: i
            },
            children: (0, b.jsxs)("section", {
              id: l ?? "",
              children: [(() => {
                switch (_) {
                  case "gen9":
                  default:
                    return (0, b.jsx)(p, {});
                  case "legacy":
                    return (0, b.jsx)(N, {})
                }
              })(), h && (0, b.jsx)(y, {
                ctas: j,
                platformCollection: o,
                enablePlatforms: m,
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

      function r(e) {
        var a = o(e);
        return s(a)
      }

      function o(e) {
        if (!s.o(t, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return t[e]
      }
      r.keys = function() {
        return Object.keys(t)
      }, r.resolve = o, e.exports = r, r.id = 1446
    },
    7948: (e, a, s) => {
      var t = {
        "./de_de/rdr1rsp.svg": 5678,
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
        "./en_us/warriors.svg": 3614,
        "./es_es/rdr1rsp.svg": 9003,
        "./es_mx/rdr1rsp.svg": 2905,
        "./fr_fr/rdr1rsp.svg": 8473,
        "./ja_jp/rdr1rsp.svg": 3457,
        "./ko_kr/rdr1rsp.svg": 4409,
        "./pl_pl/rdr1rsp.svg": 8647,
        "./pt_br/rdr1rsp.svg": 7951,
        "./ru_ru/rdr1rsp.svg": 9068,
        "./zh_hans/rdr1rsp.svg": 8457,
        "./zh_tw/rdr1rsp.svg": 3231
      };

      function r(e) {
        var a = o(e);
        return s(a)
      }

      function o(e) {
        if (!s.o(t, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return t[e]
      }
      r.keys = function() {
        return Object.keys(t)
      }, r.resolve = o, e.exports = r, r.id = 7948
    },
    5678: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fc7345c351a2c85eb3b9004e6eab5aa4.svg"
    },
    2056: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b5d1155fa169266b6c60c40512579f0.svg"
    },
    1722: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b5d1155fa169266b6c60c40512579f0.svg"
    },
    6488: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1beaf0ebfdc80168933966a2323fcc6f.svg"
    },
    7302: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fbcb3e0c7e4a26cedfb51fd7ab7dfe28.svg"
    },
    3092: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/66dd4591426b8f363f68f52d2c228d77.svg"
    },
    195: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ba3c6ab996551fbb8590fc0459cd9c03.svg"
    },
    2863: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/915e513491e3ec732a43dff44a6a9895.svg"
    },
    6845: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a728f054d69b9ff97d3771ddb75bd969.svg"
    },
    2538: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/80a40fd0033f7ca37266fdef3e667592.svg"
    },
    6696: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/23d1d192b9753891c35044ff5a9d5273.svg"
    },
    5692: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b2be01268f4d41c05d66e92cf503932.svg"
    },
    5723: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2f2d53f2d297c8c7a3f517451f0b1cc8.svg"
    },
    8993: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bfad9bf8ccf418c5bf115e435d1f5239.svg"
    },
    3703: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b254000bc6514b07267c7434e12b29d1.svg"
    },
    9559: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/af2eb343d3709c5af54e1d4983ba9839.svg"
    },
    1789: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7563ed0414306d18d4f8401effcab31a.svg"
    },
    9302: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fa64d823fd1f3e42f17ac4cb46402a04.svg"
    },
    75: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/23d1d192b9753891c35044ff5a9d5273.svg"
    },
    8339: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4d580d34037dd454c9fa2bd4c02e5d7a.svg"
    },
    3318: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ad3acd23ce0c0050ee4256dfd77f3a1a.svg"
    },
    1107: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2dcd372093da40ccb17dfd1caeb55087.svg"
    },
    606: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4abd4e7bc9890ce3f8b0cb57bab4ba30.svg"
    },
    362: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a91b6716fe7567274cf996af819944a0.svg"
    },
    7506: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/82c9f4faaa19510ae342ce0e234c3a05.svg"
    },
    7989: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9a7ab4a3303fbdbba4db81b89fa21a82.svg"
    },
    8761: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0fd7e90090d098e13bc3a3519bd84380.svg"
    },
    5622: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2fa42af3c85e753b2b9f9929baa37704.svg"
    },
    3417: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/01beb619570e2030a9c773a31f5e0e3d.svg"
    },
    720: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dc324d03cb664ea39479c16571a13167.svg"
    },
    2178: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/97ba353f28e159578a9093e97907dc39.svg"
    },
    4606: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/df69dca644a91371947fd92fb16b7867.svg"
    },
    6585: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/530bd549be0cc1d96efcb9d053195073.svg"
    },
    9417: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b4a066942b454f8c37eacc81f94b6a28.svg"
    },
    9781: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cda943443c406b760068f95a48ecfdb4.svg"
    },
    5309: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4a6dd22887de18eb60ac7719f611ae1c.svg"
    },
    4339: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6dcab3da727a2607c1d94dc24c52827d.svg"
    },
    6516: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e439bf2f8ddb47b1baeaf42f1d2ff848.svg"
    },
    8443: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5e6e03daba81fc7fbb76e1b0409678b4.svg"
    },
    8984: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/565d5e9d43bfd7db9b9fa2d48554b7a5.svg"
    },
    2117: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0058b4413586bc86955369de814e07bf.svg"
    },
    9080: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a11359c0983d626b7eb640956c021805.svg"
    },
    6086: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1ca5f6b683663555b0ce42e26eb30c38.svg"
    },
    5364: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b55f0446c9e66bb2ccccc2c8a6b1e3b6.svg"
    },
    3614: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/22f145cbeb5820ad15d3bb1d4767c7cb.svg"
    },
    9003: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7237ffb873e7c42b206600c0da381df7.svg"
    },
    2905: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7237ffb873e7c42b206600c0da381df7.svg"
    },
    8473: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a3125a914bd563db6c718d384556a419.svg"
    },
    3457: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/179ae34b23c16ec932195ea319cead80.svg"
    },
    4409: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bdb78e8a387fc628911a76f5d5688632.svg"
    },
    8647: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7cdf26bb302311bfadfef098c6342e06.svg"
    },
    7951: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/857a19c1f8eaaac00d34b414cac5f8da.svg"
    },
    9068: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ad14c10f77eb2f71e2e7e0535fbe9720.svg"
    },
    8457: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/55b565848b582be46113bb0cf45dedbd.svg"
    },
    3231: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7ea9b5d4cc5ffb73a723d1bf5ee4d6e6.svg"
    }
  }
]);