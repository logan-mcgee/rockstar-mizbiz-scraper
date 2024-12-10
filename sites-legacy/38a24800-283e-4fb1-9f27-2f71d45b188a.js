! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "38a24800-283e-4fb1-9f27-2f71d45b188a", e._sentryDebugIdIdentifier = "sentry-dbid-38a24800-283e-4fb1-9f27-2f71d45b188a")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [9259, 581], {
    74057: (e, a, s) => {
      "use strict";
      s.d(a, {
        J: () => r,
        _: () => t
      });
      const t = {
          gtao: "Grand Theft Auto Online",
          gtav: "Grand Theft Auto V",
          gtaplus: "GTA+",
          rdo: "Red Dead Online",
          rdr2: "Read Dead Redemption 2",
          bully: "Bully",
          bullySE: "Bully: Special Edition",
          gta1: "Grand Theft Auto I",
          gta2black: "Grand Theft Auto II (black logo)",
          gta2white: "Grand Theft Auto II (white logo)",
          gta3black: "Grand Theft Auto III (black logo)",
          gta3white: "Grand Theft Auto III (white logo)",
          gta4: "Grand Theft Auto IV",
          gtabogt: "Grand Theft Auto: The Ballad of Gay Tony",
          gtacw: "Grand Theft Auto: Chinatown Wars",
          gtalc: "Grand Theft Auto: Libery City",
          gtalcs: "Grand Theft Auto: Libery City Stories",
          gtavc: "Grand Theft Auto: Vice City",
          gtavcs: "Grand Theft Auto: Vice City Stories",
          gtatlad: "Grand Theft Auto: The Lost and the Damned",
          lanoire: "L.A. Noire",
          manhunt1: "Manhunt",
          manhunt2: "Manhunt 2",
          maxpayne1: "Max Payne",
          maxpayne2: "Max Payne 2",
          maxpayne3: "Max Payne 3",
          mc1: "Midnight Club",
          mc2: "Midnight Club II",
          mc3: "Midnight Club III Dub Edition",
          mc3remix: "Midnight Club III Dub Edition REMIX",
          mcla: "Midnight Club Los Angeles",
          mclaremix: "Midnight Club Los Angeles REMIX",
          rdr1: "Red Dead Redemption",
          rdr1rsp: "Red Dead Redemption (Rockstar Presents Ver)",
          rdrevolver: "Red Dead Revolver",
          rdrun: "Red Dead Redemption Undead Nightmare",
          sr1: "Smuggler's Run",
          sr2: "Smuggler's Run 2",
          srwz: "Smuggler's Run Warzones",
          tabletennis: "Table Tennis ",
          warriors: "Warriors",
          lossantoscustoms: "Los Santos Customs"
        },
        r = e => t[e] || e
    },
    25155: (e, a, s) => {
      "use strict";
      s.r(a), s.d(a, {
        default: () => C
      });
      var t = s(74401),
        r = s(42756),
        o = s(40581),
        c = s(34634);
      const d = {
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
        m = {
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
      var i = s(71403);
      const n = (0, i.createContext)({}),
        {
          Provider: g
        } = n,
        l = () => (0, i.useContext)(n),
        f = {
          pillBtn: "rockstargames-sites-legacyf8b718491d7051e7d78c4bd691c07216",
          selected: "rockstargames-sites-legacya8e2ea223dd9d4f3ab8c33b0dd7e8212"
        };
      var b = s(46632);
      const u = () => {
          const {
            animated: e,
            brands: a,
            legalText: s
          } = l();
          return (0, b.jsxs)(o.motion.div, {
            className: f.content,
            initial: "hidden",
            animate: "visible",
            variants: e ? d : void 0,
            children: [(0, b.jsx)(o.motion.div, {
              variants: e ? m : void 0,
              children: (0, b.jsx)(c.A, {
                brands: a
              })
            }), s && (0, b.jsx)(o.motion.div, {
              className: f.legalText,
              variants: e ? m : void 0,
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
            hasBackgroundImage: a,
            hasForegroundImage: s,
            className: r,
            imageStyles: c,
            foregroundImageStyles: m
          } = l();
          return (0, b.jsxs)(o.motion.div, {
            className: (0, t.classList)("rockstargames-sites-legacyb2b8cd4005cc08e559780a20041d59a2", r),
            style: c,
            initial: "hidden",
            animate: "visible",
            variants: e ? d : void 0,
            "data-type": "hero",
            children: [(0, b.jsxs)("div", {
              className: "rockstargames-sites-legacyfe52f5c5faace35bc3f20bb6580475ff",
              children: [a && (0, b.jsx)("div", {
                className: "rockstargames-sites-legacya549b9142dede80e5c6965876c7904de"
              }), s && (0, b.jsx)("div", {
                className: "rockstargames-sites-legacyb4cf5e80e44a5fb034aaad3301fa3112",
                style: m ?? {}
              }), (0, b.jsx)("div", {
                className: "rockstargames-sites-legacyf1d77360a413374c6c7010fa517ae81f"
              })]
            }), (0, b.jsx)(u, {})]
          })
        };
      var v = s(74057);
      const h = {
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
      var k = s(60285),
        x = s(40207);
      const y = {
          ps3: s(7644),
          ps4: s(82275),
          xbox: s(19169),
          xboxone: s(47483),
          switch: s(73870),
          xbox360: s(6754),
          play: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6682dc1ced3dab7f8ba43efb05df8e37.svg",
          questionMark: s(38375),
          default: ""
        },
        w = e => y[e] || null,
        z = {
          pillBtn: "rockstargames-sites-legacyc5cea19b50dcb94ac951990c4648f43f",
          selected: "rockstargames-sites-legacyb94639bd9a1c57c402cbfde17390a218",
          buttons: "rockstargames-sites-legacybf37f11425aac1777600c17f7c80abc1",
          ctaAndPlatformContainer: "rockstargames-sites-legacyedf583c90c952d581811afc0cf284d2f",
          cta: "rockstargames-sites-legacye9dec13897de442fc4317b5d275fe4a9",
          label: "rockstargames-sites-legacyf682a83a9cc9b0daea9f8b4d5d018bc6",
          primary: "rockstargames-sites-legacyd084abb87c9d33abe723d6c99b89a142",
          bottomEdge: "rockstargames-sites-legacyf40f4cc53f75aa458e19962df29d2396",
          platformSection: "rockstargames-sites-legacyc0517dc3e5cb0b710e6500dc67194240",
          heading: "rockstargames-sites-legacyea2879adbed6c35d0c4fa012f54c0935",
          platforms: "rockstargames-sites-legacyc94a05240895b2567b6012f25d313fbe"
        },
        j = e => {
          let {
            ctas: a = [],
            platformCollection: s = [],
            enablePlatforms: t = !1
          } = e;
          const {
            isMobile: o
          } = (0, r.useWindowResize)(), {
            track: c
          } = (0, x.useGtmTrack)();
          return a?.buttons?.length ? (0, b.jsxs)("section", {
            className: [z.ctaAndPlatformContainer, o ? z.bottomEdge : ""].join(" "),
            children: [(0, b.jsx)("div", {
              className: z.buttons,
              style: {
                width: o ? "100%" : ""
              },
              children: a?.buttons.map((e => ((e, a) => {
                const {
                  key: s,
                  label: t,
                  name: o,
                  icon: c,
                  primary: d,
                  type: m,
                  href: i
                } = e;
                switch (m) {
                  case "wishlist":
                    return (0, b.jsx)(k.A, {
                      to: i,
                      role: "button",
                      onClick: () => {
                        (0, r.detectIfWeShouldAnchorSomewhere)(), a({
                          event: "add_to_wishlist",
                          text: (o ?? t).toLowerCase(),
                          element_placement: "hero",
                          link_url: i
                        })
                      },
                      children: (0, b.jsxs)("div", {
                        className: [d ? z.primary : "", z.cta].filter((e => e)).join(" "),
                        children: [e?.icon && (0, b.jsx)("img", {
                          className: z.platformIcon,
                          src: w(e?.icon) || "",
                          alt: t,
                          "aria-label": t
                        }), (0, b.jsx)("div", {
                          className: z.label,
                          children: t
                        })]
                      })
                    }, s);
                  case "buy":
                    return (0, b.jsx)(k.A, {
                      to: i,
                      role: "button",
                      onClick: () => {
                        i.includes("#") && (0, r.detectIfWeShouldAnchorSomewhere)({
                          paramName: i.replace("#", "")
                        }), a({
                          event: "cta_buy",
                          element_placement: "hero",
                          link_url: i,
                          text: (o ?? t).toLowerCase()
                        })
                      },
                      children: (0, b.jsxs)("div", {
                        className: [d ? z.primary : "", z.cta].filter((e => e)).join(" "),
                        children: [e?.icon && (0, b.jsx)("img", {
                          className: z.platformIcon,
                          src: w(c) || "",
                          alt: t,
                          "aria-label": t
                        }), (0, b.jsx)("div", {
                          className: z.label,
                          children: t
                        })]
                      })
                    }, s);
                  case "trailer":
                    return (0, b.jsx)(k.A, {
                      to: i,
                      role: "button",
                      onClick: () => {
                        a({
                          event: "cta_watch_video",
                          text: (o ?? t).toLowerCase(),
                          link_url: i,
                          element_placement: "hero"
                        })
                      },
                      children: (0, b.jsxs)("div", {
                        className: [d ? z.primary : "", z.cta].filter((e => e)).join(" "),
                        children: [e?.icon && (0, b.jsx)("img", {
                          className: z.platformIcon,
                          src: w(c) || "",
                          alt: t,
                          "aria-label": t
                        }), (0, b.jsx)("div", {
                          className: z.label,
                          children: t
                        })]
                      })
                    }, s);
                  default:
                    return (0, b.jsx)(k.A, {
                      to: i,
                      role: "button",
                      onClick: () => {
                        a({
                          event: "cta_other",
                          text: (o ?? t).toLowerCase(),
                          link_url: i,
                          element_placement: "hero"
                        })
                      },
                      children: (0, b.jsxs)("div", {
                        className: [d ? z.primary : "", z.cta].filter((e => e)).join(" "),
                        children: [e?.icon && (0, b.jsx)("img", {
                          className: z.platformIcon,
                          src: w(c) || "",
                          alt: t,
                          "aria-label": t
                        }), (0, b.jsx)("div", {
                          className: z.label,
                          children: t
                        })]
                      })
                    }, s)
                }
              })(e, (e => c(e)))))
            }), o && t && (0, b.jsx)("div", {
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
        N = {
          pillBtn: "rockstargames-sites-legacye3686796e38c9d300c93b90c9d2669cf",
          selected: "rockstargames-sites-legacyf7688252019b2caf37a82d5f31c44b19",
          hero: "rockstargames-sites-legacyea0cd812f61c556dc76338f78db365d1",
          images: "rockstargames-sites-legacyfa8e43edc51cf9a0a37b1e68a44b29c0",
          background: "rockstargames-sites-legacyebcb471f3ba23d0d21caaca66ac628af",
          foreground: "rockstargames-sites-legacyd74d6274647c9a16c7c310528af6a504",
          content: "rockstargames-sites-legacye547e26ea026b328f027f873cc6b3612",
          brandLogo: "rockstargames-sites-legacybf577292ac1b65c6414efe9d743e18ce",
          brand: "rockstargames-sites-legacyd5bb9ae3f24dcfc575dcd5f86791276b",
          ctaButtons: "rockstargames-sites-legacya4e88d21353d06974334b4ff9c136a19",
          platformSection: "rockstargames-sites-legacyc464c982229798dd7b6f7e53984a6b2c",
          heading: "rockstargames-sites-legacya089cc4f3a267ed6939e42a4bf2d9070",
          platforms: "rockstargames-sites-legacyb049ce8eaf203c17c1b028f1ce68ccab"
        },
        I = () => {
          const e = (0, r.useLocale)(),
            {
              breakpoints: a
            } = (0, r.useWindowResize)(),
            {
              animated: c,
              brands: d,
              ctas: m,
              platformCollection: i,
              enablePlatforms: n,
              className: g,
              hasBackgroundImage: f,
              hasForegroundImage: u,
              imageStyles: p,
              foregroundImageStyles: k
            } = l(),
            x = d?.[0]?.brand ?? null;
          let y;
          if (x) try {
            y = s(11053)(`./${e}/${x}.svg`)
          } catch (e) {
            y = s(63798)(`./${x}.svg`)
          }
          return (0, b.jsxs)(o.motion.div, {
            className: (0, t.classList)(N.hero, g),
            style: p,
            initial: "hidden",
            animate: "visible",
            variants: c ? h : void 0,
            "data-type": "hero",
            children: [(0, b.jsxs)("div", {
              className: N.images,
              children: [f && (0, b.jsx)("div", {
                className: N.background
              }), u && (0, b.jsx)("div", {
                className: N.foreground,
                style: k ?? {}
              })]
            }), (0, b.jsx)(o.motion.div, {
              className: N.content,
              initial: "hidden",
              animate: "visible",
              variants: c ? h : void 0,
              children: (0, b.jsxs)(o.motion.div, {
                className: N.brand,
                variants: c ? _ : void 0,
                children: [x && (0, b.jsx)("div", {
                  className: N.brandLogo,
                  children: (0, b.jsx)("img", {
                    src: y,
                    alt: (0, v.J)(x),
                    style: {
                      width: "100%",
                      height: "auto"
                    }
                  })
                }), a.sm.activeMin && (0, b.jsx)(j, {
                  ctas: m,
                  platformCollection: i,
                  enablePlatforms: n
                })]
              })
            }), a.sm.activeMin && n && (0, b.jsx)("div", {
              className: N.platformSection,
              children: i?.map((e => (0, b.jsxs)("div", {
                className: N.col,
                children: [(0, b.jsx)("div", {
                  className: N.heading,
                  children: e?.platformHeading
                }), (0, b.jsx)("div", {
                  className: N.platforms,
                  children: e?.platformDescription
                })]
              }, e)))
            })]
          })
        },
        C = e => {
          let {
            animated: a = !1,
            content: {
              brands: s = [],
              platformCollection: o,
              enablePlatforms: c,
              description: d = "",
              legalText: m = "",
              title: i = "",
              ctaGroup: n = {}
            },
            id: l = "",
            images: f = {},
            className: u = "",
            shardsSection: v = [],
            type: h = "gen9"
          } = e;
          const _ = (0, r.useLocale)(),
            {
              isMobile: k
            } = (0, r.useWindowResize)(),
            x = (0, t.useGenerateCdnSource)(),
            {
              background: y,
              foreground: w
            } = f,
            {
              expandingButton: z,
              ctas: N
            } = n,
            C = (y?.sources ?? {})[_],
            S = function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                a = arguments.length > 1 ? arguments[1] : void 0,
                s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "en_us",
                t = arguments.length > 3 ? arguments[3] : void 0;
              const r = e?.[a]?.image?.full_src,
                o = e?.[a]?.image?.sources?.[s];
              return x(o ?? r ?? t)
            },
            T = (e, a, s, t) => {
              const r = e?.[s],
                o = a?.[s]?.full_src;
              return x(r ?? o ?? t)
            },
            A = x(y?.mask?.full_src ?? null),
            M = T(C, y, "mobile", null),
            E = T(C, y, "desktop", M),
            R = S(w, "mobile", _, null),
            L = S(w, "mini", _, R),
            G = S(w, "desktop", _, R),
            D = S(w, "tablet", _, G),
            $ = S(w, "ultrawide", _, G),
            O = y?.backgroundImageHeight,
            P = y?.backgroundColor,
            B = (e => {
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
                      value: c
                    } = e[t][r], d = s.get(r), m = o?.length && c?.length ? `${c}${o}` : void 0;
                    m && (a = {
                      ...a,
                      [`${d}${t}`]: `${m}`
                    })
                  }
                }))
              })), a
            })(w),
            W = {
              ...E ? {
                "--background-image-desktop": `url(${E})`
              } : {},
              ...M ? {
                "--background-image-mobile": `url(${M})`
              } : {},
              ...A ? {
                "--background-image-mask": `url(${A})`
              } : {},
              ...O ? {
                "--hero-background-height": O
              } : {},
              ...P ? {
                "--hero-background-color": P
              } : {},
              ...G ? {
                "--foreground-image-desktop": `url(${G})`
              } : {},
              ...L ? {
                "--foreground-image-mini": `url(${L})`
              } : {},
              ...R ? {
                "--foreground-image-mobile": `url(${R})`
              } : {},
              ...D ? {
                "--foreground-image-tablet": `url(${D})`
              } : {},
              ...$ ? {
                "--foreground-image-ultrawide": `url(${$})`
              } : {}
            },
            F = !(!E && !M),
            U = !(!G && !R);
          return (0, b.jsx)(g, {
            value: {
              animated: a,
              brands: s,
              className: u,
              ctas: N,
              platformCollection: o,
              enablePlatforms: c,
              description: d,
              expandingButton: z,
              hasBackgroundImage: F,
              hasForegroundImage: U,
              imageStyles: W,
              foregroundImageStyles: B,
              legalText: m,
              shardsSection: v,
              title: i
            },
            children: (0, b.jsxs)("section", {
              className: "rockstargames-sites-legacyb28f731273be5c0d3a4265e01700822a",
              id: l ?? "",
              children: [(() => {
                switch (h) {
                  case "gen9":
                  default:
                    return (0, b.jsx)(p, {});
                  case "legacy":
                    return (0, b.jsx)(I, {})
                }
              })(), k && (0, b.jsx)(j, {
                ctas: N,
                platformCollection: o,
                enablePlatforms: c,
                backgroundImageMask: A
              })]
            })
          })
        }
    },
    63798: (e, a, s) => {
      var t = {
        "./bully.svg": 57732,
        "./bullyS.svg": 77391,
        "./bullySE.svg": 74832,
        "./gta1.svg": 3507,
        "./gta2black.svg": 95057,
        "./gta2white.svg": 23111,
        "./gta3black.svg": 14070,
        "./gta3white.svg": 79964,
        "./gta4.svg": 45326,
        "./gta4tlad.svg": 74829,
        "./gtabogt.svg": 35034,
        "./gtacw.svg": 41468,
        "./gtalc.svg": 28729,
        "./gtalcs.svg": 84568,
        "./gtao.svg": 16469,
        "./gtaplus.svg": 57794,
        "./gtasa.svg": 82194,
        "./gtatlad.svg": 49293,
        "./gtav.svg": 93516,
        "./gtavc.svg": 15319,
        "./gtavcs.svg": 6758,
        "./lanoire.svg": 31110,
        "./manhunt1.svg": 38436,
        "./manhunt2.svg": 81559,
        "./maxpayne1.svg": 16944,
        "./maxpayne2.svg": 62083,
        "./maxpayne3.svg": 24146,
        "./mc1.svg": 15513,
        "./mc2.svg": 66218,
        "./mc3.svg": 35035,
        "./mc3remix.svg": 83990,
        "./mcla.svg": 18949,
        "./mclaremix.svg": 73880,
        "./rdo.svg": 93413,
        "./rdr1.svg": 43793,
        "./rdr1rsp.svg": 36240,
        "./rdr2.svg": 79746,
        "./rdrevolver.svg": 92383,
        "./rdrun.svg": 57985,
        "./sr1.svg": 20172,
        "./sr2.svg": 82847,
        "./srwz.svg": 83188,
        "./tabletennis.svg": 26541,
        "./warriors.svg": 38405
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
      }, r.resolve = o, e.exports = r, r.id = 63798
    },
    11053: (e, a, s) => {
      var t = {
        "./de_de/rdr1rsp.svg": 78229,
        "./en_us/bully.svg": 57732,
        "./en_us/bullyS.svg": 77391,
        "./en_us/bullySE.svg": 74832,
        "./en_us/gta1.svg": 3507,
        "./en_us/gta2black.svg": 95057,
        "./en_us/gta2white.svg": 23111,
        "./en_us/gta3black.svg": 14070,
        "./en_us/gta3white.svg": 79964,
        "./en_us/gta4.svg": 45326,
        "./en_us/gta4tlad.svg": 74829,
        "./en_us/gtabogt.svg": 35034,
        "./en_us/gtacw.svg": 41468,
        "./en_us/gtalc.svg": 28729,
        "./en_us/gtalcs.svg": 84568,
        "./en_us/gtao.svg": 16469,
        "./en_us/gtaplus.svg": 57794,
        "./en_us/gtasa.svg": 82194,
        "./en_us/gtatlad.svg": 49293,
        "./en_us/gtav.svg": 93516,
        "./en_us/gtavc.svg": 15319,
        "./en_us/gtavcs.svg": 6758,
        "./en_us/lanoire.svg": 31110,
        "./en_us/manhunt1.svg": 38436,
        "./en_us/manhunt2.svg": 81559,
        "./en_us/maxpayne1.svg": 16944,
        "./en_us/maxpayne2.svg": 62083,
        "./en_us/maxpayne3.svg": 24146,
        "./en_us/mc1.svg": 15513,
        "./en_us/mc2.svg": 66218,
        "./en_us/mc3.svg": 35035,
        "./en_us/mc3remix.svg": 83990,
        "./en_us/mcla.svg": 18949,
        "./en_us/mclaremix.svg": 73880,
        "./en_us/rdo.svg": 93413,
        "./en_us/rdr1.svg": 43793,
        "./en_us/rdr1rsp.svg": 36240,
        "./en_us/rdr2.svg": 79746,
        "./en_us/rdrevolver.svg": 92383,
        "./en_us/rdrun.svg": 57985,
        "./en_us/sr1.svg": 20172,
        "./en_us/sr2.svg": 82847,
        "./en_us/srwz.svg": 83188,
        "./en_us/tabletennis.svg": 26541,
        "./en_us/warriors.svg": 38405,
        "./es_es/rdr1rsp.svg": 16387,
        "./es_mx/rdr1rsp.svg": 80928,
        "./fr_fr/rdr1rsp.svg": 59779,
        "./ja_jp/rdr1rsp.svg": 85364,
        "./ko_kr/rdr1rsp.svg": 98210,
        "./pl_pl/rdr1rsp.svg": 46591,
        "./pt_br/rdr1rsp.svg": 23383,
        "./ru_ru/rdr1rsp.svg": 13129,
        "./zh_hans/rdr1rsp.svg": 55277,
        "./zh_tw/rdr1rsp.svg": 3938
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
      }, r.resolve = o, e.exports = r, r.id = 11053
    },
    78229: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fc7345c351a2c85eb3b9004e6eab5aa4.svg"
    },
    57732: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0431f45407ec6185ae412f6c59708eed.svg"
    },
    77391: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b5d1155fa169266b6c60c40512579f0.svg"
    },
    74832: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1beaf0ebfdc80168933966a2323fcc6f.svg"
    },
    3507: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fbcb3e0c7e4a26cedfb51fd7ab7dfe28.svg"
    },
    95057: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/66dd4591426b8f363f68f52d2c228d77.svg"
    },
    23111: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ba3c6ab996551fbb8590fc0459cd9c03.svg"
    },
    14070: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/915e513491e3ec732a43dff44a6a9895.svg"
    },
    79964: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a728f054d69b9ff97d3771ddb75bd969.svg"
    },
    45326: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/80a40fd0033f7ca37266fdef3e667592.svg"
    },
    74829: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/23d1d192b9753891c35044ff5a9d5273.svg"
    },
    35034: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b2be01268f4d41c05d66e92cf503932.svg"
    },
    41468: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2f2d53f2d297c8c7a3f517451f0b1cc8.svg"
    },
    28729: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bfad9bf8ccf418c5bf115e435d1f5239.svg"
    },
    84568: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b254000bc6514b07267c7434e12b29d1.svg"
    },
    16469: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/af2eb343d3709c5af54e1d4983ba9839.svg"
    },
    57794: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7563ed0414306d18d4f8401effcab31a.svg"
    },
    82194: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fa64d823fd1f3e42f17ac4cb46402a04.svg"
    },
    49293: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/23d1d192b9753891c35044ff5a9d5273.svg"
    },
    93516: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4d580d34037dd454c9fa2bd4c02e5d7a.svg"
    },
    15319: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ad3acd23ce0c0050ee4256dfd77f3a1a.svg"
    },
    6758: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2dcd372093da40ccb17dfd1caeb55087.svg"
    },
    31110: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4abd4e7bc9890ce3f8b0cb57bab4ba30.svg"
    },
    38436: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a91b6716fe7567274cf996af819944a0.svg"
    },
    81559: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/82c9f4faaa19510ae342ce0e234c3a05.svg"
    },
    16944: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9a7ab4a3303fbdbba4db81b89fa21a82.svg"
    },
    62083: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0fd7e90090d098e13bc3a3519bd84380.svg"
    },
    24146: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2fa42af3c85e753b2b9f9929baa37704.svg"
    },
    15513: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/01beb619570e2030a9c773a31f5e0e3d.svg"
    },
    66218: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dc324d03cb664ea39479c16571a13167.svg"
    },
    35035: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/97ba353f28e159578a9093e97907dc39.svg"
    },
    83990: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/df69dca644a91371947fd92fb16b7867.svg"
    },
    18949: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/530bd549be0cc1d96efcb9d053195073.svg"
    },
    73880: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b4a066942b454f8c37eacc81f94b6a28.svg"
    },
    93413: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cda943443c406b760068f95a48ecfdb4.svg"
    },
    43793: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4a6dd22887de18eb60ac7719f611ae1c.svg"
    },
    36240: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6dcab3da727a2607c1d94dc24c52827d.svg"
    },
    79746: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e439bf2f8ddb47b1baeaf42f1d2ff848.svg"
    },
    92383: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5e6e03daba81fc7fbb76e1b0409678b4.svg"
    },
    57985: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/565d5e9d43bfd7db9b9fa2d48554b7a5.svg"
    },
    20172: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0058b4413586bc86955369de814e07bf.svg"
    },
    82847: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a11359c0983d626b7eb640956c021805.svg"
    },
    83188: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1ca5f6b683663555b0ce42e26eb30c38.svg"
    },
    26541: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b55f0446c9e66bb2ccccc2c8a6b1e3b6.svg"
    },
    38405: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/22f145cbeb5820ad15d3bb1d4767c7cb.svg"
    },
    16387: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7237ffb873e7c42b206600c0da381df7.svg"
    },
    80928: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7237ffb873e7c42b206600c0da381df7.svg"
    },
    59779: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a3125a914bd563db6c718d384556a419.svg"
    },
    85364: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/179ae34b23c16ec932195ea319cead80.svg"
    },
    98210: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bdb78e8a387fc628911a76f5d5688632.svg"
    },
    46591: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7cdf26bb302311bfadfef098c6342e06.svg"
    },
    23383: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/857a19c1f8eaaac00d34b414cac5f8da.svg"
    },
    13129: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ad14c10f77eb2f71e2e7e0535fbe9720.svg"
    },
    55277: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/55b565848b582be46113bb0cf45dedbd.svg"
    },
    3938: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7ea9b5d4cc5ffb73a723d1bf5ee4d6e6.svg"
    }
  }
]);