! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "62fe540c-7674-4dbc-afa4-398948679637", e._sentryDebugIdIdentifier = "sentry-dbid-62fe540c-7674-4dbc-afa4-398948679637")
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
  [7214], {
    89996: (e, a, s) => {
      var t = {
        "./bully.svg": 54346,
        "./bullyS.svg": 70837,
        "./bullySE.svg": 5794,
        "./gta1.svg": 86333,
        "./gta2black.svg": 31239,
        "./gta2white.svg": 11837,
        "./gta3black.svg": 82164,
        "./gta3white.svg": 23346,
        "./gta4.svg": 19344,
        "./gta4tlad.svg": 69903,
        "./gtabogt.svg": 26588,
        "./gtacw.svg": 69202,
        "./gtalc.svg": 24411,
        "./gtalcs.svg": 73989,
        "./gtao.svg": 64683,
        "./gtaplus.svg": 57412,
        "./gtasa.svg": 61404,
        "./gtatlad.svg": 72683,
        "./gtav.svg": 9202,
        "./gtavc.svg": 2077,
        "./gtavcs.svg": 47220,
        "./lanoire.svg": 72908,
        "./manhunt1.svg": 39050,
        "./manhunt2.svg": 65049,
        "./maxpayne1.svg": 58710,
        "./maxpayne2.svg": 99957,
        "./maxpayne3.svg": 57972,
        "./mc1.svg": 2951,
        "./mc2.svg": 31444,
        "./mc3.svg": 57077,
        "./mc3remix.svg": 54440,
        "./mcla.svg": 44223,
        "./mclaremix.svg": 85618,
        "./rdo.svg": 5095,
        "./rdr1.svg": 17903,
        "./rdr1rsp.svg": 57458,
        "./rdr2.svg": 38876,
        "./rdrevolver.svg": 59821,
        "./rdrun.svg": 43135,
        "./sr1.svg": 13910,
        "./sr2.svg": 34197,
        "./srwz.svg": 6501,
        "./tabletennis.svg": 92871,
        "./warriors.svg": 45435
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
      }, r.resolve = o, e.exports = r, r.id = 89996
    },
    47891: (e, a, s) => {
      var t = {
        "./de_de/rdr1rsp.svg": 74127,
        "./en_us/bully.svg": 54346,
        "./en_us/bullyS.svg": 70837,
        "./en_us/bullySE.svg": 5794,
        "./en_us/gta1.svg": 86333,
        "./en_us/gta2black.svg": 31239,
        "./en_us/gta2white.svg": 11837,
        "./en_us/gta3black.svg": 82164,
        "./en_us/gta3white.svg": 23346,
        "./en_us/gta4.svg": 19344,
        "./en_us/gta4tlad.svg": 69903,
        "./en_us/gtabogt.svg": 26588,
        "./en_us/gtacw.svg": 69202,
        "./en_us/gtalc.svg": 24411,
        "./en_us/gtalcs.svg": 73989,
        "./en_us/gtao.svg": 64683,
        "./en_us/gtaplus.svg": 57412,
        "./en_us/gtasa.svg": 61404,
        "./en_us/gtatlad.svg": 72683,
        "./en_us/gtav.svg": 9202,
        "./en_us/gtavc.svg": 2077,
        "./en_us/gtavcs.svg": 47220,
        "./en_us/lanoire.svg": 72908,
        "./en_us/manhunt1.svg": 39050,
        "./en_us/manhunt2.svg": 65049,
        "./en_us/maxpayne1.svg": 58710,
        "./en_us/maxpayne2.svg": 99957,
        "./en_us/maxpayne3.svg": 57972,
        "./en_us/mc1.svg": 2951,
        "./en_us/mc2.svg": 31444,
        "./en_us/mc3.svg": 57077,
        "./en_us/mc3remix.svg": 54440,
        "./en_us/mcla.svg": 44223,
        "./en_us/mclaremix.svg": 85618,
        "./en_us/rdo.svg": 5095,
        "./en_us/rdr1.svg": 17903,
        "./en_us/rdr1rsp.svg": 57458,
        "./en_us/rdr2.svg": 38876,
        "./en_us/rdrevolver.svg": 59821,
        "./en_us/rdrun.svg": 43135,
        "./en_us/sr1.svg": 13910,
        "./en_us/sr2.svg": 34197,
        "./en_us/srwz.svg": 6501,
        "./en_us/tabletennis.svg": 92871,
        "./en_us/warriors.svg": 45435,
        "./es_es/rdr1rsp.svg": 13957,
        "./es_mx/rdr1rsp.svg": 58798,
        "./fr_fr/rdr1rsp.svg": 48557,
        "./ja_jp/rdr1rsp.svg": 8422,
        "./ko_kr/rdr1rsp.svg": 31180,
        "./pl_pl/rdr1rsp.svg": 97737,
        "./pt_br/rdr1rsp.svg": 6361,
        "./ru_ru/rdr1rsp.svg": 37139,
        "./zh_hans/rdr1rsp.svg": 60451,
        "./zh_tw/rdr1rsp.svg": 82356
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
      }, r.resolve = o, e.exports = r, r.id = 47891
    },
    90350: (e, a, s) => {
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
    48122: (e, a, s) => {
      "use strict";
      s.r(a), s.d(a, {
        default: () => C
      });
      var t = s(92440),
        r = s(95966),
        o = s(90660),
        c = s(35292);
      const m = {
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
      var i = s(62229);
      const n = (0, r.setContextItem)({
          context: (0, i.createContext)({}),
          key: "heroProvider"
        }),
        {
          Provider: g
        } = n,
        l = () => (0, i.useContext)(n),
        f = {
          pillBtn: "rockstargames-sites-legacyc0bc721c6d8914c8be0d8a110d70ade9",
          selected: "rockstargames-sites-legacyb6f59bc22c6ca1924963a98a8a7b4ac5"
        };
      var b = s(91029);
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
            variants: e ? m : void 0,
            children: [(0, b.jsx)(o.motion.div, {
              variants: e ? d : void 0,
              children: (0, b.jsx)(c.A, {
                brands: a
              })
            }), s && (0, b.jsx)(o.motion.div, {
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
            hasBackgroundImage: a,
            hasForegroundImage: s,
            className: t,
            imageStyles: c,
            foregroundImageStyles: d
          } = l();
          return (0, b.jsxs)(o.motion.div, {
            className: (0, r.classList)("rockstargames-sites-legacybe07ac034642f2cd87f687e179775b46", t),
            style: c,
            initial: "hidden",
            animate: "visible",
            variants: e ? m : void 0,
            "data-type": "hero",
            children: [(0, b.jsxs)("div", {
              className: "rockstargames-sites-legacycf8ce35c0316542332d22d5ac079b19c",
              children: [a && (0, b.jsx)("div", {
                className: "rockstargames-sites-legacyae8f2a0a0e087a658d3c6c648619a57b"
              }), s && (0, b.jsx)("div", {
                className: "rockstargames-sites-legacyda188cc8a6c70083f3b60ab53ec69f90",
                style: d ?? {}
              }), (0, b.jsx)("div", {
                className: "rockstargames-sites-legacybad07e99a98f7af361ad3309ce91d653"
              })]
            }), (0, b.jsx)(u, {})]
          })
        };
      var v = s(90350);
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
      var k = s(12363),
        x = s(2918);
      const y = {
          ps3: s(45302),
          ps4: s(28985),
          xbox: s(32903),
          xboxone: s(49429),
          switch: s(11008),
          xbox360: s(49564),
          play: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6682dc1ced3dab7f8ba43efb05df8e37.svg",
          questionMark: s(93221),
          default: ""
        },
        w = e => y[e] || null,
        z = {
          pillBtn: "rockstargames-sites-legacyebfcbbdf3b52e5611c5582d8143d1770",
          selected: "rockstargames-sites-legacydbcb068cb06ca907137c7d346305f78f",
          buttons: "rockstargames-sites-legacyd9e69eb7991e66678223305e061e13f9",
          ctaAndPlatformContainer: "rockstargames-sites-legacyad33f216fdbaf16496674b05e91a0300",
          cta: "rockstargames-sites-legacyc944d308f9a911490ec5543fb7edd971",
          label: "rockstargames-sites-legacya47597c182e00e6458bb7a0e0e8c74ca",
          primary: "rockstargames-sites-legacybcb66a07ecefc51b2835d0311ed95fc1",
          bottomEdge: "rockstargames-sites-legacyc2b15cd579d304bc966abb1961fe0a34",
          platformSection: "rockstargames-sites-legacyd7b1465ebc419dad07cf53397a329193",
          heading: "rockstargames-sites-legacyf8c379493c41e65c13253db63176d127",
          platforms: "rockstargames-sites-legacyfa43220c01647fa4004cc619e7cc3671"
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
                  primary: m,
                  type: d,
                  href: i
                } = e;
                switch (d) {
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
                        className: [m ? z.primary : "", z.cta].filter((e => e)).join(" "),
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
                        className: [m ? z.primary : "", z.cta].filter((e => e)).join(" "),
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
                        className: [m ? z.primary : "", z.cta].filter((e => e)).join(" "),
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
                        className: [m ? z.primary : "", z.cta].filter((e => e)).join(" "),
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
          pillBtn: "rockstargames-sites-legacye4c93cf1ee2ba112bae039a3a1036525",
          selected: "rockstargames-sites-legacyb81e371007ea4a9f611731fd2cd360d8",
          hero: "rockstargames-sites-legacyb64c8584ed0174bb171a200d04550f28",
          images: "rockstargames-sites-legacyd35666542bcde181abadc7b065e7618c",
          background: "rockstargames-sites-legacyd9312e35f03b8a34112033be14e2477b",
          foreground: "rockstargames-sites-legacyaefa366d32305c5e66bf53fb00a60dee",
          content: "rockstargames-sites-legacyc4dfdc56934940a1d0365e77b90c35f1",
          brandLogo: "rockstargames-sites-legacyb9557883d26a83b34c7440988e5a62c3",
          brand: "rockstargames-sites-legacyd31f6e3c88bd0ba1d3848e6d4117fd84",
          ctaButtons: "rockstargames-sites-legacyb2c63a52330cb3172dc377f9caa72e9a",
          platformSection: "rockstargames-sites-legacyc7aae84f26ec7b5b4f281346413f465e",
          heading: "rockstargames-sites-legacyace62b06655c1527cd7849bcb5d11955",
          platforms: "rockstargames-sites-legacyb8ca1e26cdff51b56d4e2d18bed40b40"
        },
        I = () => {
          const e = (0, r.useLocale)(),
            {
              breakpoints: a
            } = (0, r.useWindowResize)(),
            {
              animated: t,
              brands: c,
              ctas: m,
              platformCollection: d,
              enablePlatforms: i,
              className: n,
              hasBackgroundImage: g,
              hasForegroundImage: f,
              imageStyles: u,
              foregroundImageStyles: p
            } = l(),
            k = c?.[0]?.brand ?? null;
          let x;
          if (k) try {
            x = s(47891)(`./${e}/${k}.svg`)
          } catch (e) {
            x = s(89996)(`./${k}.svg`)
          }
          return (0, b.jsxs)(o.motion.div, {
            className: (0, r.classList)(N.hero, n),
            style: u,
            initial: "hidden",
            animate: "visible",
            variants: t ? h : void 0,
            "data-type": "hero",
            children: [(0, b.jsxs)("div", {
              className: N.images,
              children: [g && (0, b.jsx)("div", {
                className: N.background
              }), f && (0, b.jsx)("div", {
                className: N.foreground,
                style: p ?? {}
              })]
            }), (0, b.jsx)(o.motion.div, {
              className: N.content,
              initial: "hidden",
              animate: "visible",
              variants: t ? h : void 0,
              children: (0, b.jsxs)(o.motion.div, {
                className: N.brand,
                variants: t ? _ : void 0,
                children: [k && (0, b.jsx)("div", {
                  className: N.brandLogo,
                  children: (0, b.jsx)("img", {
                    src: x,
                    alt: (0, v.J)(k),
                    style: {
                      width: "100%",
                      height: "auto"
                    }
                  })
                }), a.sm.activeMin && (0, b.jsx)(j, {
                  ctas: m,
                  platformCollection: d,
                  enablePlatforms: i
                })]
              })
            }), a.sm.activeMin && i && (0, b.jsx)("div", {
              className: N.platformSection,
              children: d?.map((e => (0, b.jsxs)("div", {
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
              description: m = "",
              legalText: d = "",
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
            P = S(w, "ultrawide", _, G),
            $ = y?.backgroundImageHeight,
            O = y?.backgroundColor,
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
                    } = e[t][r], m = s.get(r), d = o?.length && c?.length ? `${c}${o}` : void 0;
                    d && (a = {
                      ...a,
                      [`${m}${t}`]: `${d}`
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
              ...$ ? {
                "--hero-background-height": $
              } : {},
              ...O ? {
                "--hero-background-color": O
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
              ...P ? {
                "--foreground-image-ultrawide": `url(${P})`
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
              description: m,
              expandingButton: z,
              hasBackgroundImage: F,
              hasForegroundImage: U,
              imageStyles: W,
              foregroundImageStyles: B,
              legalText: d,
              shardsSection: v,
              title: i
            },
            children: (0, b.jsxs)("section", {
              className: "rockstargames-sites-legacyba15b62d35d322aa58643e8200bd2d21",
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
    74127: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fc7345c351a2c85eb3b9004e6eab5aa4.svg"
    },
    54346: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0431f45407ec6185ae412f6c59708eed.svg"
    },
    70837: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b5d1155fa169266b6c60c40512579f0.svg"
    },
    5794: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1beaf0ebfdc80168933966a2323fcc6f.svg"
    },
    86333: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fbcb3e0c7e4a26cedfb51fd7ab7dfe28.svg"
    },
    31239: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/66dd4591426b8f363f68f52d2c228d77.svg"
    },
    11837: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ba3c6ab996551fbb8590fc0459cd9c03.svg"
    },
    82164: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/915e513491e3ec732a43dff44a6a9895.svg"
    },
    23346: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a728f054d69b9ff97d3771ddb75bd969.svg"
    },
    19344: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/80a40fd0033f7ca37266fdef3e667592.svg"
    },
    69903: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/23d1d192b9753891c35044ff5a9d5273.svg"
    },
    26588: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b2be01268f4d41c05d66e92cf503932.svg"
    },
    69202: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2f2d53f2d297c8c7a3f517451f0b1cc8.svg"
    },
    24411: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bfad9bf8ccf418c5bf115e435d1f5239.svg"
    },
    73989: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b254000bc6514b07267c7434e12b29d1.svg"
    },
    64683: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/af2eb343d3709c5af54e1d4983ba9839.svg"
    },
    57412: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7563ed0414306d18d4f8401effcab31a.svg"
    },
    61404: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fa64d823fd1f3e42f17ac4cb46402a04.svg"
    },
    72683: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/23d1d192b9753891c35044ff5a9d5273.svg"
    },
    9202: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4d580d34037dd454c9fa2bd4c02e5d7a.svg"
    },
    2077: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ad3acd23ce0c0050ee4256dfd77f3a1a.svg"
    },
    47220: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2dcd372093da40ccb17dfd1caeb55087.svg"
    },
    72908: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4abd4e7bc9890ce3f8b0cb57bab4ba30.svg"
    },
    39050: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a91b6716fe7567274cf996af819944a0.svg"
    },
    65049: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/82c9f4faaa19510ae342ce0e234c3a05.svg"
    },
    58710: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9a7ab4a3303fbdbba4db81b89fa21a82.svg"
    },
    99957: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0fd7e90090d098e13bc3a3519bd84380.svg"
    },
    57972: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2fa42af3c85e753b2b9f9929baa37704.svg"
    },
    2951: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/01beb619570e2030a9c773a31f5e0e3d.svg"
    },
    31444: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dc324d03cb664ea39479c16571a13167.svg"
    },
    57077: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/97ba353f28e159578a9093e97907dc39.svg"
    },
    54440: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/df69dca644a91371947fd92fb16b7867.svg"
    },
    44223: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/530bd549be0cc1d96efcb9d053195073.svg"
    },
    85618: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b4a066942b454f8c37eacc81f94b6a28.svg"
    },
    5095: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cda943443c406b760068f95a48ecfdb4.svg"
    },
    17903: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4a6dd22887de18eb60ac7719f611ae1c.svg"
    },
    57458: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6dcab3da727a2607c1d94dc24c52827d.svg"
    },
    38876: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e439bf2f8ddb47b1baeaf42f1d2ff848.svg"
    },
    59821: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5e6e03daba81fc7fbb76e1b0409678b4.svg"
    },
    43135: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/565d5e9d43bfd7db9b9fa2d48554b7a5.svg"
    },
    13910: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0058b4413586bc86955369de814e07bf.svg"
    },
    34197: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a11359c0983d626b7eb640956c021805.svg"
    },
    6501: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1ca5f6b683663555b0ce42e26eb30c38.svg"
    },
    92871: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b55f0446c9e66bb2ccccc2c8a6b1e3b6.svg"
    },
    45435: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/22f145cbeb5820ad15d3bb1d4767c7cb.svg"
    },
    13957: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7237ffb873e7c42b206600c0da381df7.svg"
    },
    58798: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7237ffb873e7c42b206600c0da381df7.svg"
    },
    48557: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a3125a914bd563db6c718d384556a419.svg"
    },
    8422: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/179ae34b23c16ec932195ea319cead80.svg"
    },
    31180: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bdb78e8a387fc628911a76f5d5688632.svg"
    },
    97737: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7cdf26bb302311bfadfef098c6342e06.svg"
    },
    6361: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/857a19c1f8eaaac00d34b414cac5f8da.svg"
    },
    37139: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ad14c10f77eb2f71e2e7e0535fbe9720.svg"
    },
    60451: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/55b565848b582be46113bb0cf45dedbd.svg"
    },
    82356: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7ea9b5d4cc5ffb73a723d1bf5ee4d6e6.svg"
    }
  }
]);