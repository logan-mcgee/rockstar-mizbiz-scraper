try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "be5e3b8f-92da-4fb3-82f6-916a7c871a89", e._sentryDebugIdIdentifier = "sentry-dbid-be5e3b8f-92da-4fb3-82f6-916a7c871a89")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [9147], {
    2024: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e99540df7fd07d75b08a5fbc02d4815.svg"
    },
    2696: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/056d3bdf1f300bcb7efa4aebcfc5224d.svg"
    },
    3950: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e5792c85d5a88a0b7c75af087e4c6ee2.svg"
    },
    5328: (e, t, a) => {
      var r = {
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

      function s(e) {
        var t = n(e);
        return a(t)
      }

      function n(e) {
        if (!a.o(r, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return r[e]
      }
      s.keys = function() {
        return Object.keys(r)
      }, s.resolve = n, e.exports = s, s.id = 5328
    },
    6312: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b457cab77cb82e1c05ad12628414576.svg"
    },
    6325: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7394670f18d3cf36ebc76e11b860fc03.svg"
    },
    8054: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/198ced82807c854e92e84e23f7434c91.svg"
    },
    8194: (e, t, a) => {
      var r = {
        "./cero_a.png": 97558,
        "./cero_b.svg": 29362,
        "./cero_c.svg": 67299,
        "./cero_d.svg": 9020,
        "./cero_rp.png": 17065,
        "./cero_z.svg": 46554,
        "./djctq_10.svg": 51392,
        "./djctq_12.svg": 8674,
        "./djctq_14.svg": 89836,
        "./djctq_16.svg": 54222,
        "./djctq_18.svg": 58648,
        "./djctq_er.svg": 8054,
        "./djctq_l.svg": 23781,
        "./esrb_ao.svg": 89235,
        "./esrb_e.svg": 24256,
        "./esrb_e10plus.svg": 65315,
        "./esrb_latam_rp.svg": 6325,
        "./esrb_m.svg": 87256,
        "./esrb_m_ao.svg": 10419,
        "./esrb_rp.svg": 89069,
        "./esrb_rplm17.svg": 95088,
        "./esrb_t.svg": 18177,
        "./fpb_13.svg": 86595,
        "./fpb_16.svg": 28414,
        "./fpb_18.svg": 81864,
        "./fpb_pg.svg": 77404,
        "./grac_12.svg": 8711,
        "./grac_15.svg": 6312,
        "./grac_18.svg": 48157,
        "./grac_19.svg": 19612,
        "./grac_a.svg": 89303,
        "./gsrr_0.svg": 67443,
        "./gsrr_12.svg": 49980,
        "./gsrr_15.svg": 24611,
        "./gsrr_18.svg": 68918,
        "./gsrr_6.svg": 63117,
        "./nmc_12.svg": 2024,
        "./nmc_16.svg": 50324,
        "./nmc_18.svg": 52466,
        "./nmc_21.svg": 3950,
        "./nmc_3.svg": 9188,
        "./nmc_7.svg": 18712,
        "./oflc_g.svg": 21022,
        "./oflc_m.svg": 22772,
        "./oflc_ma15.svg": 9815,
        "./oflc_pg.svg": 47580,
        "./oflc_r18.svg": 74432,
        "./pegi_12.svg": 15821,
        "./pegi_16.svg": 86929,
        "./pegi_18.svg": 51575,
        "./pegi_3.svg": 27351,
        "./pegi_4.svg": 82424,
        "./pegi_6.svg": 46618,
        "./pegi_7.svg": 40491,
        "./pegi_rp.png": 94293,
        "./rars_0.svg": 36855,
        "./rars_12.svg": 98952,
        "./rars_16.svg": 65044,
        "./rars_18.svg": 72690,
        "./rars_6.svg": 51913,
        "./tw_rp.png": 68271,
        "./usk_0.svg": 84406,
        "./usk_12.svg": 26151,
        "./usk_16.svg": 87707,
        "./usk_18.svg": 90717,
        "./usk_6.svg": 2696,
        "./usk_rp.svg": 21228,
        "./vaci_rp.png": 32323
      };

      function s(e) {
        var t = n(e);
        return a(t)
      }

      function n(e) {
        if (!a.o(r, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return r[e]
      }
      s.keys = function() {
        return Object.keys(r)
      }, s.resolve = n, e.exports = s, s.id = 8194
    },
    8674: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b31c79d361cfd92e1a405dbbf4890bd.svg"
    },
    8711: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fe262661c6667d97f441e045067f4a0f.svg"
    },
    9020: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/204116b24cd9e9ab4e71af21b3a96179.svg"
    },
    9188: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4da522682784ded3799c5a6f9f8c213a.svg"
    },
    9815: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2eb8777f38cbd4d721261ad736c1f2e7.svg"
    },
    10419: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/092865e0ddae5190dc3c0284ee3c21bd.svg"
    },
    14804: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    },
    15821: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/129ef1c1a15ffc7afb86ce282e48decb.svg"
    },
    17065: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/676b3908098d8b19f1019ce361af45ec.png"
    },
    18177: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/35cf853d7882b090b56837bd08127da1.svg"
    },
    18712: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/29ea20c333709a952c2eb3a2591d435d.svg"
    },
    19612: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1a3660d76f39527a79f8a49bb27a74be.svg"
    },
    20517: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => f
      });
      var r = a(42295),
        s = a(71127),
        n = a(56990),
        i = a(58136),
        o = a(21352),
        l = a(61874),
        c = a(14200),
        d = a(29315);
      const u = {
          rating: "rockstargames-sites-rockstargamesc3e95c84902dd75b827d3c95532e22dc",
          text: "rockstargames-sites-rockstargamesbabdd6ae2ff83f380dadc6982effa011",
          withDescriptors: "rockstargames-sites-rockstargamesb98963abfc7a63295bebc6c6d15b391a",
          withOutDescriptors: "rockstargames-sites-rockstargamesb6339480b5fd086fb0c025930bfb7dcd"
        },
        m = (0, n.defineMessages)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            description: "Ratings link alt text",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      var _ = a(95520),
        g = a(19732);
      (0, i.importAll)(a(36672));
      const f = (0, d.A)((0, g.g)(({
        descriptors: e = null,
        footer: t = null,
        href: d,
        img: g = null,
        titleSlug: f = null,
        style: p = {},
        className: h,
        ...b
      }) => {
        const [v, x] = (0, s.useState)(!1), {
          inView: k
        } = (0, o.useInView)({
          threshold: .6
        }), [w, y] = (0, s.useState)({
          ratingDescriptors: e,
          ratingFooter: t,
          ratingImg: g,
          ratingUrl: d
        }), {
          track: j
        } = (0, l.useGtmTrack)(), C = (0, n.useIntl)(), {
          data: R
        } = (0, i.useQuery)(_.GameData, {
          variables: {
            titleSlug: f
          },
          skip: !f
        });
        if ((0, s.useEffect)(() => {
            R && y(R?.game)
          }, [R]), (0, s.useEffect)(() => {
            k && !v && w.ratingImg && (j({
              event: "page_section_impression",
              element_placement: "rating"
            }), x(!0))
          }, [k]), !w.ratingImg) return null;
        const S = !!w.ratingDescriptors;
        return (0, r.jsxs)("div", {
          className: [u.rating, S ? u.withDescriptors : u.withOutDescriptors, h || ""].join(" "),
          style: (0, i.safeStyles)(p),
          "data-testid": "rating",
          ...b,
          children: [(0, r.jsx)(c.A, {
            to: w.ratingUrl,
            target: "_blank",
            children: (0, r.jsx)("img", {
              alt: C.formatMessage(m.components_ratings_link_alt, {
                rating: (N = w.ratingImg, N.replace(/_/g, " ").split(".")[0].toUpperCase())
              }),
              src: a(8194)(`./${w.ratingImg}`)
            })
          }), S && (0, r.jsxs)("div", {
            className: u.text,
            children: [(0, r.jsx)("p", {
              className: u.descriptors,
              dangerouslySetInnerHTML: {
                __html: w?.ratingDescriptors?.split(/<br\s?\/?>/).join(", ") || ""
              }
            }), w.ratingFooter && (0, r.jsx)("hr", {}), w.ratingFooter && (0, r.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: w.ratingFooter.replace(/ \//g, ", ")
              }
            })]
          })]
        });
        var N
      }))
    },
    21022: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c66fbb7c204e32da80ccb1693d15e00.svg"
    },
    21228: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/278e84e5a41407499c43a30f545da3e8.svg"
    },
    22230: (e, t, a) => {
      "use strict";
      a.d(t, {
        YT: () => o,
        Ay: () => l
      });
      var r = a(42295),
        s = a(4408);
      var n = a(1556),
        i = a.n(n);
      var o = function(e) {
        return e.small = "small", e.large = "large", e
      }({});
      const l = ({
        tagSize: e,
        platform: t,
        className: a = ""
      }) => {
        const {
          src: n,
          alt: o
        } = ((e, t) => {
          const a = "small" === t;
          switch (e) {
            case "pc":
              return {
                src: a ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/91b881fc47ab8f61e9d3fbb515272656.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9822b4be8e173b12a152443a538ee613.svg", alt: "PC Legacy"
              };
            case "pcalt":
              return {
                src: a ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b0c35912b602cae2ecdacb21a992ca7.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0f7ec13ed3fbe1c1389f38d189869ada.svg", alt: "PC Enhanced"
              };
            case "ps4":
              return {
                src: a ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6054f77c4450b075b6059eda658a510d.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/941a1141a404ed211f7d23ed36ccee23.svg", alt: "PS4"
              };
            case "ps5":
              return {
                src: a ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c577e2612120d70330b797e6ee5487d9.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04d319f216248f3df7f9727df641b832.svg", alt: "PS5"
              };
            case "xboxone":
              return {
                src: a ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c8ee10e269f42d96c58c1eb016717e1.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e18ef78074a128424a94ab6313dd332.svg", alt: "Xbox One"
              };
            case "xboxsx":
              return {
                src: a ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61f1cfebde0508725354fa6c2bdda0b4.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c91f19b5ea19868e280034220acf6740.svg", alt: "Xbox Series X|S"
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
        })(t, e);
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("img", {
            className: i()("rockstargames-sites-rockstargamesb0ff0045ed0326a46ca1e0867d2050c1", a),
            "data-testid": "platform-tag",
            "data-platform": t,
            "data-tag-size": e,
            src: n,
            alt: "",
            "aria-hidden": !0
          }), (0, r.jsx)(s.s6, {
            children: o
          })]
        })
      }
    },
    22454: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg"
    },
    22772: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/954d63889440be17e1ebef30b7026369.svg"
    },
    23146: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b12e4e9678e7a4ebea34905926feeb90.svg"
    },
    23240: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        default: () => Pi
      });
      var r = a(42295),
        s = a(87927),
        n = a(71127),
        i = a(58136),
        o = a(56990),
        l = a(35390),
        c = a(93231),
        d = a(96498),
        u = a(10181);
      const m = (0, n.createContext)({
          slug: "",
          open: !1,
          onOpenChange: () => {}
        }),
        _ = ({
          children: e
        }) => {
          const [t, a] = (0, u.useSearchParams)(), [s, i] = (0, n.useState)(""), [o, l] = (0, n.useState)(!1), c = () => {
            const e = !o;
            l(e), e || (i(""), a(e => (e.delete("view"), e)))
          };
          (0, n.useEffect)(() => {
            const e = t.get("view");
            e ? (i(e), l(!0)) : (i(""), l(!1))
          }, [t]);
          const d = (0, n.useMemo)(() => ({
            open: o,
            onOpenChange: c,
            slug: s
          }), [o, s]);
          return (0, r.jsx)(m.Provider, {
            value: d,
            children: e
          })
        };
      var g = a(4408);
      const f = (0, o.defineMessages)({
        bottom_sheet_modal_close_icon: {
          id: "bottom_sheet_modal_close_icon",
          description: "Label for X icon to close modal in Bottom Sheet",
          defaultMessage: "Close"
        }
      });
      var p = a(61874),
        h = a(21352),
        b = a(91633);
      const v = (0, n.createContext)({
          colorMode: void 0,
          headerTextColor: void 0,
          primaryAccentColor: void 0,
          secondaryAccentColor: void 0
        }),
        x = ({
          theme: e,
          children: t
        }) => e ? (0, r.jsx)(v.Provider, {
          value: {
            ...e
          },
          children: t
        }) : t;
      var k = a(75523);
      const w = (0, n.forwardRef)(function({
        href: e,
        testId: t,
        ...a
      }, s) {
        const n = (0, o.linkWithLocale)(e || ""),
          i = (0, k.v6)(a, {
            "data-testid": t
          });
        return n.isExternal ? (0, r.jsx)("a", {
          href: n.link,
          target: "_blank",
          rel: "noreferrer",
          ...i,
          ref: s
        }) : (0, r.jsx)(u.Link, {
          to: n.link,
          target: "_self",
          ...i,
          ref: s
        })
      });
      var y = a(77053),
        j = a(66135),
        C = a(96369),
        R = (0, C.c)({
          defaultClassName: "_1ksuttk0",
          variantClassNames: {
            showOn: {
              mobile: "_1ksuttk1",
              mobileSmall: "_1ksuttk2",
              mobileMedium: "_1ksuttk3",
              tabletSmall: "_1ksuttk4",
              tabletMedium: "_1ksuttk5",
              tabletSmallAndMedium: "_1ksuttk6",
              tabletLarge: "_1ksuttk7",
              tabletMediumAndLarge: "_1ksuttk8",
              tablet: "_1ksuttk9",
              desktop: "_1ksuttka",
              desktopSmall: "_1ksuttkb",
              desktopMedium: "_1ksuttkc",
              tabletAndDesktop: "_1ksuttkd",
              mobileMediumAndLarger: "_1ksuttke",
              tabletSmallAndLarger: "_1ksuttkf",
              tabletMediumAndLarger: "_1ksuttkg",
              tabletMediumAndSmaller: "_1ksuttkh",
              tabletLargeAndLarger: "_1ksuttki",
              tabletLargeAndSmaller: "_1ksuttkj",
              desktopSmallAndLarger: "_1ksuttkk",
              desktopMediumAndLarger: "_1ksuttkl",
              desktopLargeAndLarger: "_1ksuttkm",
              portrait: "_1ksuttkn",
              landscape: "_1ksuttko",
              mobileLandscape: "_1ksuttkp"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const S = ({
        showOn: e,
        forceMount: t = !1,
        ...a
      }) => {
        const s = (0, k.v6)(a, {
            className: R({
              showOn: e
            })
          }),
          i = (0, n.useMemo)(() => t ? void 0 : window?.matchMedia?.(j.f[e]), [e, window]);
        return (i?.matches ?? !0) && (0, r.jsx)(g.DX, {
          ...s
        })
      };
      a(50402);
      var N = "var(--rd0xso2)",
        I = "var(--rd0xso1)",
        E = "rd0xso6",
        T = "var(--rd0xso0)";
      const A = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          topPaddingMultiplier: s,
          bottomPaddingMultiplier: n,
          backgroundCss: i,
          backgroundImage: o,
          ...l
        }, c) {
          const d = t ? g.DX : "section",
            u = (0, k.v6)({
              "data-testid": a,
              className: "rd0xso3",
              style: (0, y.DI)({
                [T]: s ?? "0.5",
                [I]: n ?? "0.5",
                [N]: i,
                backgroundImage: o ? `url(${o})` : ""
              })
            }, l);
          return (0, r.jsx)(d, {
            ref: c,
            ...u,
            children: e
          })
        }),
        M = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...s
        }, n) {
          if (!e) return;
          const i = t ? g.DX : "div",
            o = (0, k.v6)({
              "data-testid": a,
              className: "rd0xso4 _1betujy5"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        z = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...s
        }, n) {
          const i = t ? g.DX : c.Heading,
            o = (0, k.v6)({
              "data-testid": a,
              className: "rd0xso5 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd6"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        D = (0, n.forwardRef)(function({
          testId: e,
          children: t,
          label: a,
          url: s,
          iconRight: n = "ArrowRight",
          isExternal: i = !1,
          ...o
        }, l) {
          const d = (0, k.v6)({
            "data-testid": e
          }, o);
          return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(S, {
              forceMount: !0,
              showOn: "mobile",
              children: (0, r.jsx)(c.IconButton, {
                size: "MD",
                appearance: "ghost",
                icon: n,
                className: E,
                label: a,
                ...d,
                ref: l,
                asChild: !0,
                children: (0, r.jsx)(w, {
                  href: s,
                  target: i ? "_blank" : "_self",
                  role: "link"
                })
              })
            }), (0, r.jsx)(S, {
              forceMount: !0,
              showOn: "tabletSmall",
              children: (0, r.jsx)(c.IconButton, {
                size: "MD",
                appearance: "ghost",
                icon: n,
                className: E,
                label: a,
                ...d,
                ref: l,
                asChild: !0,
                children: (0, r.jsx)(w, {
                  href: s,
                  target: i ? "_blank" : "_self",
                  role: "link"
                })
              })
            }), (0, r.jsx)(S, {
              forceMount: !0,
              showOn: "tabletMediumAndLarger",
              children: (0, r.jsx)(c.Button, {
                size: "LG",
                appearance: "ghost",
                iconRight: n,
                className: "rd0xso7",
                "aria-label": a,
                ...d,
                ref: l,
                "data-testid": `${e}:desktopButton`,
                asChild: !0,
                children: (0, r.jsx)(w, {
                  href: s,
                  target: i ? "_blank" : "_self",
                  role: "link",
                  children: t
                })
              })
            })]
          })
        }),
        F = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...s
        }, n) {
          const i = t ? g.DX : "div",
            o = (0, k.v6)({
              "data-testid": a,
              className: "rd0xso8"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        P = {
          none: 0,
          default: .5,
          double: 1
        },
        L = (0, n.createContext)({
          analyticsData: void 0
        }),
        W = "WwwSectionWrapper",
        G = () => {
          const {
            analyticsData: e
          } = (0, n.useContext)(L), {
            track: t
          } = (0, p.useGtmTrack)(), a = e?.element_placement;
          return {
            trackEvent: (e, r) => {
              const s = r?.analyticsData || {};
              return t({
                ...r?.link?.url && {
                  link_url: r?.link?.url
                },
                ...e,
                element_placement: a,
                ...s
              })
            },
            trackRichTextHyperlink: e => t({
              event: "site_link_click",
              link_url: e.data.uri,
              text: e.content[0].value,
              element_placement: a
            }),
            useTrackPageSectionImpression: e => {
              const r = (0, n.useCallback)(r => {
                  r && t({
                    event: "page_section_impression",
                    element_placement: a,
                    ...e
                  })
                }, [t]),
                {
                  ref: s,
                  inView: i
                } = (0, h.useInView)({
                  threshold: .6,
                  triggerOnce: !0,
                  onChange: r
                });
              return {
                ref: s,
                inView: i
              }
            }
          }
        };
      var B = a(20170);
      const q = ({
          testId: e,
          ...t
        }) => {
          const a = (0, k.v6)(t, {
            "data-testid": e,
            autoFocus: !0
          });
          return (0, r.jsx)(B.bL, {
            ...a
          })
        },
        O = ({
          testId: e,
          ...t
        }) => {
          const a = (0, k.v6)(t, {
            "data-testid": e
          });
          return (0, r.jsx)(B.ZL, {
            ...a
          })
        },
        V = (0, n.forwardRef)(function({
          testId: e,
          ...t
        }, a) {
          const s = (0, k.v6)(t, {
            "data-testid": e,
            className: "_1ykqld07"
          });
          return (0, r.jsx)(B.hJ, {
            ref: a,
            ...s
          })
        }),
        $ = (0, n.forwardRef)(function({
          testId: e,
          children: t,
          ...a
        }, s) {
          const n = (0, k.v6)(a, {
            "data-testid": e,
            className: "_1ykqld08"
          });
          return (0, r.jsx)(B.UC, {
            ref: s,
            ...n,
            children: t
          })
        }),
        U = (0, n.forwardRef)(function({
          testId: e,
          children: t,
          ...a
        }, s) {
          const n = (0, k.v6)(a, {
            "data-testid": e,
            className: "_1ykqld09"
          });
          return (0, r.jsx)("div", {
            ref: s,
            ...n,
            children: t
          })
        }),
        X = (0, n.forwardRef)(function({
          testId: e,
          ...t
        }, a) {
          const s = (0, k.v6)(t, {
            asChild: !0,
            className: "_1ykqld0a",
            "data-testid": e
          });
          return (0, r.jsx)(B.bm, {
            ref: a,
            ...s
          })
        }),
        H = (0, n.forwardRef)(function({
          testId: e,
          ...t
        }, a) {
          const s = (0, k.v6)(t, {
            "data-testid": e
          });
          return (0, r.jsx)(B.hE, {
            ref: a,
            ...s
          })
        }),
        K = (0, n.forwardRef)(function({
          testId: e,
          ...t
        }, a) {
          const s = (0, k.v6)(t, {
            "data-testid": e
          });
          return (0, r.jsx)(B.VY, {
            ref: a,
            ...s
          })
        }),
        Q = () => {
          const {
            trackEvent: e
          } = G(), {
            formatMessage: t
          } = (0, o.useIntl)(), [a, s] = (0, n.useState)(!1), {
            slug: u,
            open: _,
            onOpenChange: p
          } = (() => {
            const e = (0, n.useContext)(m);
            if (void 0 === e) throw new Error("useBottomSheet must be used within a Bottom Sheet Provider");
            return {
              open: e.open,
              slug: e.slug,
              onOpenChange: e.onOpenChange
            }
          })(), h = (0, i.usePrevious)(u), {
            loading: b,
            error: v,
            data: x
          } = (0, l.useContentfulQuery)({
            query: d.wwwBottomSheetQuery,
            variables: {
              slug: u
            },
            skip: !u
          });
          if ((0, n.useEffect)(() => {
              a !== _ && (s(_), e(_ ? {
                event: "modal_open",
                card_id: u,
                card_name: u,
                text: u
              } : {
                event: "modal_close",
                card_id: h,
                card_name: h,
                text: h
              }))
            }, [_, a]), !u) return;
          let k = null;
          return !x || b || v || (k = x?.wwwBottomSheetCollection?.items?.[0]), (0, r.jsx)(q, {
            open: _,
            onOpenChange: p,
            children: (0, r.jsxs)(O, {
              children: [(0, r.jsx)(V, {}), (0, r.jsxs)($, {
                children: [(0, r.jsxs)(g.s6, {
                  children: [(0, r.jsx)(H, {}), (0, r.jsx)(K, {})]
                }), (0, r.jsx)(X, {
                  children: (0, r.jsx)(c.IconButton, {
                    size: "MD",
                    icon: "X",
                    appearance: "tertiary",
                    label: t(f.bottom_sheet_modal_close_icon)
                  })
                }), (0, r.jsx)(U, {
                  children: k && (0, r.jsx)(Y, {
                    block: k.contentCollection
                  })
                })]
              })]
            })
          })
        },
        Y = ({
          block: e
        }) => {
          const {
            blockPosition: t
          } = (0, n.useContext)(l.BlockRendererContext);
          if (e) return e.items.map(e => (0, r.jsx)(l.BlockRenderer, {
            block: e,
            blockPosition: t
          }, e.sys.id))
        },
        Z = JSON.parse('{"de-DE":{"bottom_sheet_modal_close_icon":"Schließen","carousel_next_button":"Weiter","carousel_prev_button":"Zurück","decorative_video_pause_button_label":"Pause","decorative_video_play_button_label":"Abspielen","decorative_video_replay_button_label":"Wiederholen","featured_game_breadcrumbs_parent_item":"Spiele","hero_carousel_pause_button":"Pause","hero_carousel_play_button":"Abspielen","hero_carousel_scroll_down_label":"Nach unten scrollen","hp_hero_play_button_label":"Abspielen","hp_hero_stop_button_label":"Anhalten","image_carousel_screen_reader_announcer_label":"Jetzt angezeigt: {selectedTab} von {total}","lightbox_close_button":"Schließen","masonry_grid_external_store_link":"Externer Link zum Store","ns_already_subbed_title":"Bereits abonniert","ns_check_email_details":"Bitte verifiziere deine E-Mail-Adresse über den Link, der an die E-Mail-Adresse geschickt wurde, mit der du dich angemeldet hast, um dein Abo für die E-Mail-Liste von Rockstar Games zu bestätigen.","ns_check_email_title":"Überprüfe deine E-Mails","ns_confirm_after_register_details":"Du hast dich während der Kontoerstellung nicht für Werbe-E-Mails angemeldet. Möchtest du immer noch unseren Newsletter abonnieren?","ns_confirm_after_register_title":"Bestätige dein Abo","ns_confirm_details":"Bitte drücke auf den Knopf unten, um zu bestätigen, dass du den Newsletter von Rockstar Games abonnieren möchtest.","ns_confirm_title":"Bestätige dein Abo","ns_error_generic_details":"Wir können diese E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden.","ns_error_generic_title":"Fehler","ns_error_preferences_details":"Wir können deine E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden. Ändere deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos oder versuche es später erneut.","ns_error_preferences_title":"Fehler","ns_go_back_text":"Nein, zurückkehren","ns_manage_prefs_button_text":"Präferenzen verwalten","ns_ok_button_text":"OKAY","ns_successfully_subscribed_title":"Erfolgreich abonniert","ns_yes_subscribe_text":"Ja, abonnieren"},"en-US":{"bottom_sheet_modal_close_icon":"Close","carousel_next_button":"Next","carousel_prev_button":"Previous","decorative_video_pause_button_label":"Pause","decorative_video_play_button_label":"Play","decorative_video_replay_button_label":"Replay","featured_game_breadcrumbs_parent_item":"Games","hero_carousel_pause_button":"Pause","hero_carousel_play_button":"Play","hero_carousel_scroll_down_label":"Scroll Down","hp_hero_play_button_label":"Play","hp_hero_stop_button_label":"Stop","image_carousel_screen_reader_announcer_label":"Now showing {selectedTab} of {total}","lightbox_close_button":"Close","masonry_grid_external_store_link":"External link to Store","ns_already_subbed_details_amp":"You are already receiving newsletter updates at this email address. Manage your communication preferences at any time in your account settings.","ns_already_subbed_title":"Already Subscribed","ns_check_email_details":"To confirm your subscription to the Rockstar Games Email List, please verify your email address via the link sent to the email address you’ve signed up with.","ns_check_email_title":"Check Your Email","ns_confirm_after_register_details":"You did not opt-in to receive marketing emails during account creation. Would you still like to subscribe to our newsletter?","ns_confirm_after_register_title":"Confirm your subscription","ns_confirm_details":"Please confirm that you would like to subscribe to the Rockstar Games Newsletter by clicking the button below.","ns_confirm_title":"Confirm your subscription","ns_error_generic_details":"We cannot sign up this email address to our newsletter at this time.","ns_error_generic_title":"Error","ns_error_preferences_details":"We cannot sign up your email address to our newsletter at this time. Change your email preferences on your account settings page or try again later.","ns_error_preferences_title":"Error","ns_go_back_text":"No, Go Back","ns_manage_prefs_button_text":"Manage Preferences","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"You are now signed up to the Rockstar Games Email List and will receive regular updates to the email address you’ve signed up with. Manage your communication preferences at any time in your account settings.","ns_successfully_subscribed_title":"Successfully Subscribed","ns_yes_subscribe_text":"Yes, Subscribe"},"es-ES":{"bottom_sheet_modal_close_icon":"Cerrar","carousel_next_button":"Siguiente","carousel_prev_button":"Anterior","decorative_video_pause_button_label":"Pausar","decorative_video_play_button_label":"Reproducir","decorative_video_replay_button_label":"Volver a ver","featured_game_breadcrumbs_parent_item":"Juegos","hero_carousel_pause_button":"Pausar","hero_carousel_play_button":"Reproducir","hero_carousel_scroll_down_label":"Desplazarse hacia abajo","hp_hero_play_button_label":"Reproducir","hp_hero_stop_button_label":"Detener","image_carousel_screen_reader_announcer_label":"Mostrando {selectedTab} de {total}","lightbox_close_button":"Cerrar","masonry_grid_external_store_link":"Enlace externo a la tienda","ns_already_subbed_title":"Ya tienes una suscripción","ns_check_email_details":"Para confirmar tu suscripción a la lista de correo de Rockstar Games, verifica tu correo electrónico a través del enlace enviado al correo electrónico con el que te has suscrito.","ns_check_email_title":"Comprueba tu correo electrónico","ns_confirm_after_register_details":"No te has suscrito a los correos electrónicos comerciales al crear tu cuenta. ¿Quieres suscribirte a nuestro boletín de noticias?","ns_confirm_after_register_title":"Confirma tu suscripción","ns_confirm_details":"Haz click en el botón para confirmar que quieres suscribirte al boletín de noticias de Rockstar Games.","ns_confirm_title":"Confirma tu suscripción","ns_error_generic_details":"En este momento no puedes suscribirte a nuestro boletín de noticias con este correo electrónico.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento no puedes suscribirte a nuestro boletín de noticias con tu correo electrónico. Cambia tus preferencias de correo electrónico en la página de ajustes de tu cuenta o inténtalo de nuevo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar tus preferencias","ns_ok_button_text":"ACEPTAR","ns_successfully_subscribed_title":"Te has suscrito","ns_yes_subscribe_text":"Sí, suscribirse"},"es-MX":{"bottom_sheet_modal_close_icon":"Cerrar","carousel_next_button":"Siguiente","carousel_prev_button":"Anterior","decorative_video_pause_button_label":"Pausar","decorative_video_play_button_label":"Reproducir","decorative_video_replay_button_label":"Repetir","featured_game_breadcrumbs_parent_item":"Juegos","hero_carousel_pause_button":"Pausar","hero_carousel_play_button":"Reproducir","hero_carousel_scroll_down_label":"Desplazarse hacia abajo","hp_hero_play_button_label":"Reproducir","hp_hero_stop_button_label":"Detener","image_carousel_screen_reader_announcer_label":"Mostrando {selectedTab} de {total}","lightbox_close_button":"Cerrar","masonry_grid_external_store_link":"Enlace externo a la tienda","ns_already_subbed_title":"Ya cuentas con una suscripción","ns_check_email_details":"Verifica tu dirección de correo electrónico mediante el enlace que enviamos al correo con el que te registraste para confirmar la suscripción a la lista de correos de Rockstar Games.","ns_check_email_title":"Verifica tu dirección de correo electrónico","ns_confirm_after_register_details":"No optaste por recibir correos con publicidad durante la creación de la cuenta. ¿Quieres suscribirte a nuestro boletín de todos modos?","ns_confirm_after_register_title":"Confirma tu suscripción","ns_confirm_details":"Haz clic en el botón a continuación para confirmar que quieres suscribirte al boletín de Rockstar Games.","ns_confirm_title":"Confirma tu suscripción","ns_error_generic_details":"En este momento, no podemos registrar esta dirección de correo electrónico a nuestro boletín.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento, no podemos registrar tu dirección de correo electrónico a nuestro boletín. Modifica las preferencias de tu correo desde la página de ajustes de la cuenta o inténtalo de nuevo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar preferencias","ns_ok_button_text":"ACEPTAR","ns_successfully_subscribed_title":"Suscripción exitosa","ns_yes_subscribe_text":"Sí, suscribirse"},"fr-FR":{"bottom_sheet_modal_close_icon":"Fermer","carousel_next_button":"Suivant","carousel_prev_button":"Précédent","decorative_video_pause_button_label":"Pause","decorative_video_play_button_label":"Lecture","decorative_video_replay_button_label":"Relire","featured_game_breadcrumbs_parent_item":"Jeux","hero_carousel_pause_button":"Pause","hero_carousel_play_button":"Lecture","hero_carousel_scroll_down_label":"Faire défiler vers le bas","hp_hero_play_button_label":"Lecture","hp_hero_stop_button_label":"Arrêter","image_carousel_screen_reader_announcer_label":"Affichage de {selectedTab} sur {total}","lightbox_close_button":"Fermer","masonry_grid_external_store_link":"Lien externe vers la boutique","ns_already_subbed_title":"Vous êtes déjà abonné(e)","ns_check_email_details":"Pour confirmer votre abonnement à la liste de diffusion de Rockstar Games, veuillez vérifier votre adresse e-mail en cliquant sur le lien envoyé à l\'adresse e-mail avec laquelle vous vous êtes abonné(e).","ns_check_email_title":"Vérifiez votre adresse e-mail","ns_confirm_after_register_details":"Vous avez choisi de ne pas recevoir d\'e-mails publicitaires lors de la création de votre compte. Voulez-vous toujours vous abonner à notre newsletter ?","ns_confirm_after_register_title":"Confirmez votre abonnement","ns_confirm_details":"Veuillez confirmer que vous souhaitez vous abonner à la newsletter de Rockstar Games en cliquant sur le bouton ci-dessous.","ns_confirm_title":"Confirmez votre abonnement","ns_error_generic_details":"Nous ne pouvons pas abonner cette adresse e-mail à notre newsletter pour l\'instant.","ns_error_generic_title":"Erreur","ns_error_preferences_details":"Nous ne pouvons pas abonner votre adresse e-mail à notre newsletter pour l\'instant. Modifiez vos préférences concernant les e-mails sur la page des paramètres de votre compte ou réessayez plus tard.","ns_error_preferences_title":"Erreur","ns_go_back_text":"Non, retour","ns_manage_prefs_button_text":"Gérer vos préférences","ns_ok_button_text":"OK","ns_successfully_subscribed_title":"Abonnement effectué","ns_yes_subscribe_text":"Oui, je m\'abonne"},"it-IT":{"bottom_sheet_modal_close_icon":"Chiudi","carousel_next_button":"Successivo","carousel_prev_button":"Precedente","decorative_video_pause_button_label":"Pausa","decorative_video_play_button_label":"Riproduci","decorative_video_replay_button_label":"Riproduci di nuovo","featured_game_breadcrumbs_parent_item":"Giochi","hero_carousel_pause_button":"Pausa","hero_carousel_play_button":"Riproduci","hero_carousel_scroll_down_label":"Scorri in basso","hp_hero_play_button_label":"Riproduci","hp_hero_stop_button_label":"Stop","image_carousel_screen_reader_announcer_label":"In riproduzione: {selectedTab} di {total}","lightbox_close_button":"Chiudi","masonry_grid_external_store_link":"Link esterno per il Negozio","ns_already_subbed_title":"Sei già iscritto","ns_check_email_details":"Per confermare la tua iscrizione alla mailing list di Rockstar Games, verifica il tuo indirizzo email tramite il link che ti abbiamo inviato all’indirizzo email che hai usato per iscriverti.","ns_check_email_title":"Controlla la tua mail","ns_confirm_after_register_details":"Non hai acconsentito a ricevere le email di marketing durante la creazione dell\'account. Vuoi ancora iscriverti alla nostra newsletter?","ns_confirm_after_register_title":"Conferma la tua iscrizione","ns_confirm_details":"Conferma che vuoi iscriverti alla Newsletter di Rockstar Games cliccando sul pulsante qui sotto.","ns_confirm_title":"Conferma la tua iscrizione","ns_error_generic_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento.","ns_error_generic_title":"Errore","ns_error_preferences_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento. Modifica le preferenze della tua email nella pagina delle impostazioni dell’account o riprova più tardi.","ns_error_preferences_title":"Errore","ns_go_back_text":"No, torna indietro","ns_manage_prefs_button_text":"Gestisci le preferenze","ns_ok_button_text":"OK","ns_successfully_subscribed_title":"Iscrizione effettuata con successo","ns_yes_subscribe_text":"Sì, iscriviti"},"ja-JP":{"bottom_sheet_modal_close_icon":"閉じる","carousel_next_button":"次へ","carousel_prev_button":"前へ","decorative_video_pause_button_label":"一時停止","decorative_video_play_button_label":"再生","decorative_video_replay_button_label":"もう一回見る","featured_game_breadcrumbs_parent_item":"ゲーム","hero_carousel_pause_button":"一時停止","hero_carousel_play_button":"再生","hero_carousel_scroll_down_label":"下にスクロール","hp_hero_play_button_label":"再生","hp_hero_stop_button_label":"停止","image_carousel_screen_reader_announcer_label":"{total}のうち{selectedTab}を表示中","lightbox_close_button":"閉じる","masonry_grid_external_store_link":"ストアへの外部リンク","ns_already_subbed_title":"サブスクリプション登録済み","ns_check_email_details":"ロックスター・ゲームスのメールリストへのサブスクリプション登録を確認するため、登録に使用したメールアドレスに送られたリンクからメールアドレスを認証してください。","ns_check_email_title":"メールを確認してください","ns_confirm_after_register_details":"アカウント作成時にマーケティングメールを受け取ることを選択していません。ニュースレターのサブスクリプション登録をしますか？","ns_confirm_after_register_title":"サブスクリプション登録を承認してください","ns_confirm_details":"下のボタンをクリックすることでロックスター・ゲームスのニュースレターにサブスクリプション登録をすることを承認してください。","ns_confirm_title":"サブスクリプション登録を承認してください","ns_error_generic_details":"現在このメールアドレスをニュースレターに登録することができません。","ns_error_generic_title":"エラー","ns_error_preferences_details":"現在お客様のメールアドレスをニュースレターに登録することができません。アカウント設定のページからメール受信設定を変更するか、後ほど再度お試しください。","ns_error_preferences_title":"エラー","ns_go_back_text":"いいえ、戻ります","ns_manage_prefs_button_text":"受信設定を管理する","ns_ok_button_text":"OK","ns_successfully_subscribed_title":"サブスクリプション登録が完了しました","ns_yes_subscribe_text":"はい、サブスクリプション登録します"},"ko-KR":{"bottom_sheet_modal_close_icon":"닫기","carousel_next_button":"다음","carousel_prev_button":"이전","decorative_video_pause_button_label":"일시 정지","decorative_video_play_button_label":"재생","decorative_video_replay_button_label":"다시 재생","featured_game_breadcrumbs_parent_item":"게임","hero_carousel_pause_button":"일시 정지","hero_carousel_play_button":"재생","hero_carousel_scroll_down_label":"아래로 스크롤","hp_hero_play_button_label":"재생","hp_hero_stop_button_label":"정지","image_carousel_screen_reader_announcer_label":"{total}의 {selectedTab} 이미지","lightbox_close_button":"닫기","masonry_grid_external_store_link":"스토어 외부 링크","ns_already_subbed_title":"이미 구독 중","ns_check_email_details":"Rockstar Games 이메일 리스트 구독을 확인하려면 가입 시 사용한 이메일 주소로 전송된 링크를 통해 이메일 주소를 인증하십시오.","ns_check_email_title":"이메일 확인하기","ns_confirm_after_register_details":"계정을 생성할 때 마케팅 이메일 수신 동의를 선택하지 않았습니다. 그래도 뉴스레터를 구독하시겠습니까?","ns_confirm_after_register_title":"구독 확인하기","ns_confirm_details":"Rockstar Games 뉴스레터 구독을 확인하려면 아래 버튼을 클릭하십시오.","ns_confirm_title":"구독 확인하기","ns_error_generic_details":"현재 이 이메일 주소로 뉴스레터를 구독할 수 없습니다.","ns_error_generic_title":"오류","ns_error_preferences_details":"현재 해당 이메일 주소로 뉴스레터를 구독할 수 없습니다. 계정 설정 페이지에서 이메일 설정을 변경하거나 나중에 다시 시도하십시오.","ns_error_preferences_title":"오류","ns_go_back_text":"아니오, 뒤로 갑니다","ns_manage_prefs_button_text":"설정 관리","ns_ok_button_text":"확인","ns_successfully_subscribed_title":"구독 완료","ns_yes_subscribe_text":"네, 구독합니다"},"pl-PL":{"bottom_sheet_modal_close_icon":"Zamknij","carousel_next_button":"Dalej","carousel_prev_button":"Poprzednie","decorative_video_pause_button_label":"Zatrzymaj","decorative_video_play_button_label":"Odtwórz","decorative_video_replay_button_label":"Odtwórz ponownie","featured_game_breadcrumbs_parent_item":"Gry","hero_carousel_pause_button":"Zatrzymaj","hero_carousel_play_button":"Odtwórz","hero_carousel_scroll_down_label":"Przewiń w dół","hp_hero_play_button_label":"Odtwórz","hp_hero_stop_button_label":"Przerwij","image_carousel_screen_reader_announcer_label":"Wyświetlane {selectedTab} z {total}","lightbox_close_button":"Zamknij","masonry_grid_external_store_link":"Odnośnik zewnętrzny do sklepu","ns_already_subbed_title":"Subskrypcja jest już aktywna","ns_check_email_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej.","ns_check_email_title":"Sprawdź swoją pocztę","ns_confirm_after_register_details":"Nie udzielono zgody na otrzymywanie powiadomień marketingowych przy zakładaniu konta. Czy chcesz subskrybować naszą listę mailingową?","ns_confirm_after_register_title":"Potwierdź swoją subskrypcję","ns_confirm_details":"Potwierdź swoją subskrypcję listy mailingowej Rockstar Games poprzez kliknięcie poniższego przycisku.","ns_confirm_title":"Potwierdź swoją subskrypcję","ns_error_generic_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej.","ns_error_generic_title":"Błąd","ns_error_preferences_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej. Zmień swoje preferencje w ustawieniach swojego konta lub spróbuj ponownie później.","ns_error_preferences_title":"Błąd","ns_go_back_text":"Nie, wróć","ns_manage_prefs_button_text":"Aktualizuj swoje preferencje","ns_ok_button_text":"OK","ns_successfully_subscribed_title":"Pomyślnie zasubskrybowano","ns_yes_subscribe_text":"Tak, subskrybuj"},"pt-BR":{"bottom_sheet_modal_close_icon":"Fechar","carousel_next_button":"Próximo","carousel_prev_button":"Anterior","decorative_video_pause_button_label":"Pausar","decorative_video_play_button_label":"Iniciar","decorative_video_replay_button_label":"Replay","featured_game_breadcrumbs_parent_item":"Jogos","hero_carousel_pause_button":"Pausar","hero_carousel_play_button":"Iniciar","hero_carousel_scroll_down_label":"Role para baixo","hp_hero_play_button_label":"Iniciar","hp_hero_stop_button_label":"Parar","image_carousel_screen_reader_announcer_label":"Mostrando {selectedTab} de {total}","lightbox_close_button":"Fechar","masonry_grid_external_store_link":"Link externo para a Loja","ns_already_subbed_title":"Você já se inscreveu","ns_check_email_details":"Para confirmar sua inscrição na lista de e-mails da Rockstar Games, verifique seu endereço de e-mail pelo link enviado para o endereço que você usou para se inscrever.","ns_check_email_title":"Verifique seu e-mail","ns_confirm_after_register_details":"Você escolheu não receber e-mails de marketing quando criou a sua conta. Deseja se inscrever na nosso newsletter?","ns_confirm_after_register_title":"Confirme sua inscrição","ns_confirm_details":"Confirme que você deseja se inscrever na newsletter da Rockstar Games clicando no botão abaixo.","ns_confirm_title":"Confirme sua inscrição","ns_error_generic_details":"No momento, não é possível se inscrever na nossa newsletter usando este endereço de e-mail.","ns_error_generic_title":"Erro","ns_error_preferences_details":"No momento, não é possível se inscrever na nossa newsletter usando o seu endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta ou tente de novo mais tarde.","ns_error_preferences_title":"Erro","ns_go_back_text":"Não, voltar","ns_manage_prefs_button_text":"Gerenciar preferências","ns_ok_button_text":"OK","ns_successfully_subscribed_title":"Inscrição confirmada","ns_yes_subscribe_text":"Sim, fazer inscrição"},"ru-RU":{"bottom_sheet_modal_close_icon":"Закрыть","carousel_next_button":"Далее","carousel_prev_button":"Назад","decorative_video_pause_button_label":"Пауза","decorative_video_play_button_label":"Воспроизвести","decorative_video_replay_button_label":"Повтор","featured_game_breadcrumbs_parent_item":"Игры","hero_carousel_pause_button":"Пауза","hero_carousel_play_button":"Воспроизвести","hero_carousel_scroll_down_label":"Прокрутить вниз","hp_hero_play_button_label":"Воспроизвести","hp_hero_stop_button_label":"Стоп","image_carousel_screen_reader_announcer_label":"На экране слайд {selectedTab} из {total}","lightbox_close_button":"Закрыть","masonry_grid_external_store_link":"Внешняя ссылка на магазин","ns_already_subbed_title":"Подписка уже оформлена","ns_check_email_details":"Чтобы подтвердить подписку на рассылку электронных писем Rockstar Games, пожалуйста, подтвердите адрес электронной почты, нажав на ссылку в письме, полученном на адрес электронной почты, который вы указали при оформлении подписки.","ns_check_email_title":"Проверьте электронную почту","ns_confirm_after_register_details":"Вы не дали согласия на получение рекламных писем во время создания учетной записи. Вы все еще хотите оформить подписку на нашу рассылку?","ns_confirm_after_register_title":"Подтвердите подписку","ns_confirm_details":"Пожалуйста, подтвердите, что вы хотите подписаться на рассылку электронных писем Rockstar Games, нажав на кнопку ниже.","ns_confirm_title":"Подтвердите подписку","ns_error_generic_details":"Невозможно оформить подписку на нашу рассылку для этого адреса электронной почты в данный момент.","ns_error_generic_title":"Ошибка","ns_error_preferences_details":"Невозможно оформить подписку на нашу рассылку для вашего адреса электронной почты в данный момент. Вы можете изменить настройки электронной почты на странице настроек учетной записи или повторить попытку позже.","ns_error_preferences_title":"Ошибка","ns_go_back_text":"Нет, вернуться","ns_manage_prefs_button_text":"Изменить настройки учетной записи","ns_ok_button_text":"OK","ns_successfully_subscribed_title":"Подписка оформлена","ns_yes_subscribe_text":"Да, подписаться"},"zh-CN":{"bottom_sheet_modal_close_icon":"关闭","carousel_next_button":"下一个","carousel_prev_button":"上一个","decorative_video_pause_button_label":"暂停","decorative_video_play_button_label":"播放","decorative_video_replay_button_label":"回放","featured_game_breadcrumbs_parent_item":"游戏","hero_carousel_pause_button":"暂停","hero_carousel_play_button":"播放","hero_carousel_scroll_down_label":"向下滚动","hp_hero_play_button_label":"播放","hp_hero_stop_button_label":"停止","image_carousel_screen_reader_announcer_label":"正在显示{selectedTab}（共{total}）","lightbox_close_button":"关闭","masonry_grid_external_store_link":"前往商店的外部链接","ns_already_subbed_title":"已订阅","ns_check_email_details":"要确认您已订阅Rockstar Games电子邮件列表，请通过发送到您订阅时使用的电子邮件地址中的链接验证邮箱。","ns_check_email_title":"检查您的电子邮箱","ns_confirm_after_register_details":"您在创建账户时没有选择接收营销邮件。您还想要订阅我们的新闻通讯吗？","ns_confirm_after_register_title":"确认您的订阅","ns_confirm_details":"请点击下方按钮以确认您想订阅Rockstar Games新闻通讯。","ns_confirm_title":"确认您的订阅","ns_error_generic_details":"我们目前无法用此电子邮件地址订阅新闻通讯。","ns_error_generic_title":"错误","ns_error_preferences_details":"我们目前无法用您的电子邮件地址订阅新闻通讯。请在账户设置页面中修改您的电子邮件偏好，或稍后再试。","ns_error_preferences_title":"错误","ns_go_back_text":"不，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"好","ns_successfully_subscribed_title":"订阅成功","ns_yes_subscribe_text":"是，订阅"},"zh-TW":{"bottom_sheet_modal_close_icon":"關閉","carousel_next_button":"下一個","carousel_prev_button":"上一個","decorative_video_pause_button_label":"暫停","decorative_video_play_button_label":"播放","decorative_video_replay_button_label":"重播","featured_game_breadcrumbs_parent_item":"遊戲","hero_carousel_pause_button":"暫停","hero_carousel_play_button":"播放","hero_carousel_scroll_down_label":"向下捲動","hp_hero_play_button_label":"播放","hp_hero_stop_button_label":"停止","image_carousel_screen_reader_announcer_label":"現正顯示 {selectedTab}（共 {total} 個）","lightbox_close_button":"關閉","masonry_grid_external_store_link":"前往商店的外部連結","ns_already_subbed_title":"已經訂閱","ns_check_email_details":"為了確認您的 Rockstar Games 電子郵件通知訂閱，請以寄送到您訂閱電子郵件地址的連結，驗證您的電子郵件地址。","ns_check_email_title":"檢查您的電子郵件","ns_confirm_after_register_details":"在建立帳戶時，您並沒有選擇可接收行銷電子郵件。您仍想訂閱我們的電子報？","ns_confirm_after_register_title":"確認您的訂閱","ns_confirm_details":"請點擊以下按鈕，以確認您想訂閱 Rockstar Games 電子報。","ns_confirm_title":"確認您的訂閱","ns_error_generic_details":"我們現在無法將此電子郵件地址訂閱到我們的電子報。","ns_error_generic_title":"錯誤","ns_error_preferences_details":"我們現在無法將您的電子郵件地址訂閱到我們的電子報。在帳戶設定頁面變更您的電子郵件偏好設定，或稍後再試。","ns_error_preferences_title":"錯誤","ns_go_back_text":"否，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"確定","ns_successfully_subscribed_title":"成功訂閱","ns_yes_subscribe_text":"是，訂閱"}}');
      var J = a(12100);
      const ee = e => e.endsWith(".svg") || e.endsWith(".gif"),
        te = [320, 400, 480, 620, 768, 900, 1024, 1280, 1440, 1640, 1920, 2e3, 2560, 3840],
        ae = (e, t = te, a = {}) => {
          const r = Math.min(4e3, a.maxWidth ?? 1 / 0);
          return t.filter(e => e <= r).map(t => {
            const r = ((e, t = {}) => {
              if (!e.startsWith("http")) return e;
              const a = new URL(e);
              return a.pathname.endsWith(".svg") ? e : (t.width && a.searchParams.set("w", String(t.width)), t.height && a.searchParams.set("h", String(t.height)), t.quality && a.searchParams.set("q", String(t.quality)), t.format && a.searchParams.set("fm", String(t.format)), t.fit && a.searchParams.set("fit", String(t.fit)), a.toString())
            })(e, {
              ...a,
              width: t
            });
            return {
              url: r,
              width: t
            }
          })
        },
        re = e => 0 === e ? "primary" : 1 === e ? "secondary" : "tertiary",
        se = {
          tabletSmall: {
            primary: "16:9",
            secondary: "3:1",
            tertiary: "4:3"
          },
          tabletMedium: {
            primary: "4:5",
            secondary: "3:1",
            tertiary: "1:1"
          },
          tabletLarge: {
            primary: "4:5",
            secondary: "3:1",
            tertiary: "1:1"
          },
          desktopSmallAndLarger: {
            primary: "4:5",
            secondary: "3:1",
            tertiary: "1:1"
          }
        };
      var ne = a(19403),
        ie = "var(--_1dbiq9u0)";
      const oe = [{
          media: "(max-width: 480px)",
          slot: "100vw"
        }, {
          media: "(max-width: 768px)",
          slot: "100vw"
        }, {
          media: "(max-width: 900px)",
          slot: "90vw"
        }, {
          media: "(max-width: 1024px)",
          slot: "90vw"
        }, {
          media: "(max-width: 1280px)",
          slot: "1280px"
        }, {
          media: "(max-width: 1440px)",
          slot: "1440px"
        }, {
          media: "(max-width: 1640px)",
          slot: "1640px"
        }, {
          media: "(max-width: 1920px)",
          slot: "1920px"
        }, {
          media: "(max-width: 2000px)",
          slot: "2000px"
        }, {
          media: "(max-width: 2560px)",
          slot: "2560px"
        }, {
          slot: "3840px"
        }],
        le = (0, n.forwardRef)(function({
          src: e,
          width: t,
          height: a,
          testId: s,
          style: i,
          ...o
        }, l) {
          const [c, d] = (0, n.useState)(!1), u = (0, n.useRef)(null), m = (0, ne.UP)(u, l);
          (0, n.useEffect)(() => {
            if (!u.current) return;
            if ("loading" in HTMLImageElement.prototype) return void d(!0);
            const e = new IntersectionObserver((e, t) => {
              e.some(e => e.isIntersecting) && (d(!0), t.disconnect())
            }, {
              rootMargin: "200px"
            });
            return e.observe(u.current), () => {
              e.disconnect()
            }
          }, [u.current]);
          const _ = (0, n.useMemo)(() => {
            const r = !e || !ee(e),
              n = r ? (e => {
                if (!Array.isArray(e) || 0 === e.length) return "100vw";
                const t = e.filter(e => e?.slot).map(e => e.media ? `${e.media} ${e.slot}` : e.slot);
                return [...t.filter(e => e.includes("max-width")), t.find(e => !e.includes("max-width")) ?? "100vw"].join(", ")
              })(oe) : void 0,
              l = (0, y.DI)({
                [ie]: `${t||1} / ${a||1}`
              });
            return (0, k.v6)({
              "data-testid": s,
              srcSet: c && r ? ae(e)?.map(e => `${e.url} ${e.width}w`).join(", ") : void 0,
              src: e,
              sizes: c && r ? n : void 0,
              className: "_1dbiq9u1",
              loading: "lazy",
              decoding: "async",
              width: t,
              height: a,
              style: {
                ...l,
                ...i
              }
            }, o)
          }, [s, e, o, c]);
          return c ? (0, r.jsx)("img", {
            ref: m,
            ..._
          }) : (0, r.jsx)("div", {
            ref: m
          })
        }),
        ce = (0, n.forwardRef)(function({
          src: e,
          className: t,
          loading: a = "lazy",
          testId: s,
          ...n
        }, i) {
          if (!e.source?.url || !e.source?.height || !e.source?.width) return null;
          const o = (0, l.getOptimizedImage)({
            src: e.source.url,
            originalSize: {
              height: e.source.height,
              width: e.source.width
            },
            options: {
              preferModernFormat: !0
            }
          });
          if (!o?.url) return null;
          const c = (0, k.v6)({
            "data-testid": s,
            alt: o.alt,
            src: o.url,
            width: o.width,
            height: o.height,
            loading: a,
            className: t
          }, n);
          return (0, r.jsx)(le, {
            ref: i,
            ...c
          })
        }),
        de = "RsgImageFile",
        ue = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, s) {
          const n = (0, k.v6)(a, {
            "data-testid": t
          });
          return (0, r.jsx)("picture", {
            ...n,
            ref: s,
            children: e
          })
        }),
        me = ({
          testId: e,
          src: t,
          ...a
        }) => {
          const s = (0, k.v6)(a, {
            "data-testid": e,
            srcSet: ee(t) ? t : ae(t)?.map(e => `${e.url} ${e.width}w`).join(", ")
          });
          return (0, r.jsx)("source", {
            ...s
          })
        },
        _e = (0, n.forwardRef)(function({
          testId: e,
          src: t,
          ...a
        }, s) {
          const i = (0, k.v6)(a, {
              "data-testid": e
            }),
            o = (0, n.useRef)(null),
            l = (0, ne.UP)(o, s);
          return (0, n.useEffect)(() => {
            o?.current && (ee(t) ? o.current.src = t : o.current.srcset = ae(t)?.map(e => `${e.url} ${e.width}w`).join(", "))
          }, []), (0, r.jsx)("img", {
            className: "_1fbh3900",
            ref: l,
            ...i
          })
        }),
        ge = new Map([
          ["mobile", j.f.mobile],
          ["mobile_small", j.f.mobileSmall],
          ["mobile_medium", j.f.mobileMedium],
          ["tablet_small", j.f.tabletSmall],
          ["tablet_medium", j.f.tabletMedium],
          ["tablet_small_and_medium", j.f.tabletSmallAndMedium],
          ["tablet_large", j.f.tabletLarge],
          ["tablet_medium_and_large", j.f.tabletMediumAndLarge],
          ["tablet", j.f.tablet],
          ["desktop", j.f.desktop],
          ["desktop_small", j.f.desktopSmall],
          ["desktop_medium", j.f.desktopMedium],
          ["tablet_and_desktop", j.f.tabletAndDesktop],
          ["mobile_medium_and_larger", j.f.mobileMediumAndLarger],
          ["tablet_small_and_larger", j.f.tabletSmallAndLarger],
          ["tablet_medium_and_larger", j.f.tabletMediumAndLarger],
          ["tablet_medium_and_smaller", j.f.tabletMediumAndSmaller],
          ["tablet_large_and_larger", j.f.tabletLargeAndLarger],
          ["tablet_large_and_smaller", j.f.tabletLargeAndSmaller],
          ["desktop_small_and_larger", j.f.desktopSmallAndLarger],
          ["desktop_medium_and_larger", j.f.desktopMediumAndLarger],
          ["desktop_large_and_larger", j.f.desktopLargeAndLarger],
          ["portrait", j.f.portrait],
          ["landscape", j.f.landscape],
          ["mobile_landscape", j.f.mobileLandscape]
        ]),
        fe = e => {
          for (const [t] of ge) {
            const a = e?.find(e => e === t);
            if (a) return a
          }
        },
        pe = "RsgImage";
      var he = "var(--dhgwc10)";
      const be = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...s
        }, n) {
          const i = a ? g.DX : "div",
            o = (0, k.v6)({
              "data-testid": t,
              className: "dhgwc11 _1betujy6 _1betujy5"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        ve = (0, n.forwardRef)(function({
          backgroundColor: e = "transparent",
          children: t,
          testId: a,
          asChild: s,
          altText: n,
          ...i
        }, o) {
          const l = s ? g.DX : "a",
            c = (0, k.v6)({
              "data-testid": a,
              className: "dhgwc12",
              "aria-label": n,
              style: (0, y.DI)({
                [he]: e
              })
            }, i);
          return (0, r.jsx)(l, {
            ref: o,
            ...c,
            children: t
          })
        }),
        xe = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          src: s,
          ...n
        }, i) {
          const o = a ? g.DX : "div",
            l = (0, k.v6)({
              "data-testid": t,
              className: "dhgwc13",
              style: {
                backgroundImage: `url(${s})`
              }
            }, n);
          return (0, r.jsx)(o, {
            ref: i,
            ...l,
            children: e
          })
        }),
        ke = (0, n.forwardRef)(function({
          src: e,
          ...t
        }, a) {
          const s = (0, k.v6)({
            src: e,
            className: "dhgwc14"
          }, t);
          return (0, r.jsx)(ce, {
            ref: a,
            ...s
          })
        }),
        we = "WwwBanner";
      var ye = a(16675),
        je = a(30257),
        Ce = a(9738),
        Re = a.n(Ce);
      const Se = (0, o.defineMessages)({
        carousel_next_button: {
          id: "carousel_next_button",
          description: "The label for the next button.",
          defaultMessage: "Next"
        },
        carousel_prev_button: {
          id: "carousel_prev_button",
          description: "The label for the previous button.",
          defaultMessage: "Previous"
        }
      });
      var Ne = (0, C.c)({
          defaultClassName: "lwwe808",
          variantClassNames: {
            variant: {
              small: "lwwe809",
              medium: "lwwe80a",
              full: "lwwe80b"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ie = "_1betujy6 _1betujy5",
        Ee = (0, C.c)({
          defaultClassName: "lwwe80g",
          variantClassNames: {
            visible: {
              true: "lwwe80h",
              false: "lwwe80i"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Te = (0, n.createContext)({
          defaultSlide: 0,
          embla: void 0,
          controlsVisible: !1,
          prevButtonDisabled: !1,
          nextButtonDisabled: !1,
          onPrevButtonClick: null,
          onNextButtonClick: null,
          navigationRef: (0, n.createRef)(),
          viewportRef: void 0
        }),
        Ae = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          defaultSlide: s = 0,
          onNext: i,
          onPrev: o,
          onSwipe: l,
          ...c
        }, d) {
          const {
            navigationRef: u
          } = (0, n.useContext)(Te), {
            embla: m,
            viewportRef: _,
            controlsVisible: f,
            prevButtonDisabled: p,
            nextButtonDisabled: h,
            onPrevButtonClick: b,
            onNextButtonClick: v
          } = (({
            defaultSlide: e,
            onNext: t,
            onPrev: a,
            onSwipe: r
          }) => {
            const [s, i] = (0, n.useState)(!0), [o, l] = (0, n.useState)(!0), [c, d] = (0, n.useState)(!1), u = {
              axis: "x",
              align: "start",
              startIndex: e,
              active: !0,
              containScroll: "trimSnaps",
              loop: !1,
              skipSnaps: !0,
              inViewThreshold: .9
            }, [m, _] = (0, ye.A)(u, [(0, je.J)()]), g = (0, n.useCallback)(() => {
              _ && (_.scrollPrev(), a?.())
            }, [_]), f = (0, n.useCallback)(() => {
              _ && (_.scrollNext(), t?.())
            }, [_]), p = (0, n.useCallback)(() => {
              _ && (i(!_.canScrollPrev()), l(!_.canScrollNext()))
            }, [_]), h = () => {
              if (!_) return;
              const e = _.internalEngine().scrollSnaps.length > 1;
              d(e), _.reInit({
                active: e
              })
            };
            return (0, n.useEffect)(() => {
              if (!_) return;
              p(), _.on("reInit", p).on("select", p);
              const e = Re()(h, 25);
              return window.addEventListener("resize", e), h(), () => {
                window.removeEventListener("resize", e)
              }
            }, [_, p]), (0, n.useEffect)(() => {
              if (!_) return;
              let e = 0;
              const t = () => {
                  e = _.selectedScrollSnap()
                },
                a = () => {
                  const t = _.selectedScrollSnap();
                  e !== t && r?.()
                };
              return _.on("pointerDown", t), _.on("pointerUp", a), () => {
                _.off("pointerDown", t), _.off("pointerUp", a)
              }
            }, [_]), (0, n.useEffect)(() => {
              if (!_) return;
              const e = e => {
                e?.canScrollNext() || e?.canScrollPrev() ? e.reInit({
                  ...u,
                  watchDrag: !0
                }) : e.reInit({
                  ...u,
                  watchDrag: !1
                })
              };
              return _?.on("init", e), _?.on("resize", e), () => {
                _?.off("init", e), _?.off("resize", e)
              }
            }, [_]), {
              embla: _,
              controlsVisible: c,
              prevButtonDisabled: s,
              nextButtonDisabled: o,
              onPrevButtonClick: g,
              onNextButtonClick: f,
              viewportRef: m
            }
          })({
            defaultSlide: s,
            onNext: i,
            onPrev: o,
            onSwipe: l
          }), x = a ? g.DX : "div", w = (0, k.v6)({
            "data-testid": t,
            className: "lwwe800"
          }, c);
          return (0, r.jsx)(Te.Provider, {
            value: {
              embla: m,
              defaultSlide: s,
              navigationRef: u,
              controlsVisible: f,
              prevButtonDisabled: p,
              nextButtonDisabled: h,
              onPrevButtonClick: b,
              onNextButtonClick: v,
              viewportRef: _
            },
            children: (0, r.jsx)(x, {
              ref: d,
              ...w,
              children: (0, r.jsx)(g.xV, {
                children: e
              })
            })
          })
        }),
        Me = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...s
        }, n) {
          const i = a ? g.DX : "div",
            o = (0, k.v6)(s, {
              "data-testid": t,
              className: Ie
            });
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        ze = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, s) {
          const n = (0, k.v6)(a, {
            "data-testid": t,
            className: "lwwe801"
          });
          return (0, r.jsx)(c.Heading, {
            ref: s,
            ...n,
            children: e
          })
        }),
        De = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, s) {
          const {
            viewportRef: i
          } = (0, n.useContext)(Te), o = (0, k.v6)({
            "data-testid": t,
            className: Ie
          }, a);
          return (0, r.jsx)("div", {
            ref: s,
            ...o,
            children: (0, r.jsx)("div", {
              ref: i,
              className: "lwwe802",
              children: (0, r.jsx)("div", {
                className: "lwwe803",
                children: e
              })
            })
          })
        }),
        Fe = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          ...a
        }, s) {
          const n = t ? g.DX : "div",
            i = (0, k.v6)({
              className: "lwwe807"
            }, a);
          return (0, r.jsx)(n, {
            ref: s,
            ...i,
            children: (0, r.jsx)("div", {
              className: "lwwe804",
              children: e
            })
          })
        }),
        Pe = (0, n.forwardRef)(function({
          children: e,
          variant: t = "small",
          testId: a,
          ...s
        }, n) {
          const i = (0, k.v6)({
            "data-testid": a,
            className: Ne({
              variant: t
            })
          }, s);
          return (0, r.jsx)("div", {
            ref: n,
            ...i,
            children: e
          })
        }),
        Le = (0, n.forwardRef)(function({
          override_textColor: e,
          override_backgroundColor: t,
          appearance: a,
          size: s,
          testId: i,
          asChild: l,
          ...d
        }, u) {
          const {
            controlsVisible: m,
            onPrevButtonClick: _,
            onNextButtonClick: f,
            prevButtonDisabled: p,
            nextButtonDisabled: h
          } = (0, n.useContext)(Te), {
            formatMessage: b
          } = (0, o.useIntl)(), v = l ? g.DX : "div", x = (0, k.v6)({
            className: Ee({
              visible: m
            }),
            "data-testid": i
          }, d);
          return (0, r.jsxs)(v, {
            ref: u,
            ...x,
            children: [(0, r.jsx)(c.IconButton, {
              size: s,
              icon: "ArrowLeft",
              appearance: a,
              onClick: _,
              label: b(Se.carousel_prev_button),
              override_backgroundColor: t,
              override_textColor: e,
              isDisabled: p
            }), (0, r.jsx)(c.IconButton, {
              size: s,
              icon: "ArrowRight",
              appearance: a,
              onClick: f,
              label: b(Se.carousel_next_button),
              override_backgroundColor: t,
              override_textColor: e,
              isDisabled: h
            })]
          })
        }),
        We = (0, n.createContext)({
          totalItems: 0,
          itemIndex: 0
        }),
        Ge = "WwwDeck",
        Be = (0, o.defineMessages)({
          decorative_video_play_button_label: {
            id: "decorative_video_play_button_label",
            description: "Decorative video play button label",
            defaultMessage: "Play"
          },
          decorative_video_pause_button_label: {
            id: "decorative_video_pause_button_label",
            description: "Decorative video pause button label",
            defaultMessage: "Pause"
          },
          decorative_video_replay_button_label: {
            id: "decorative_video_replay_button_label",
            description: "Decorative video replay button label",
            defaultMessage: "Replay"
          }
        });
      var qe = "_197irmi6",
        Oe = (0, C.c)({
          defaultClassName: "_197irmi1",
          variantClassNames: {
            landscapeViewportBehavior: {
              full_height: "_197irmi2",
              retain_aspect_ratio: "_197irmi3"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ve = "var(--_197irmi0)";
      const $e = () => {
          const e = (0, n.useContext)(Ue);
          if (!e) throw new Error("useDecorativeVideoContext must be used within VideoProvider");
          return e
        },
        Ue = (0, n.createContext)({
          landscapeViewportBehavior: "retain_aspect_ratio",
          scrimColor: void 0,
          reducedMotion: window && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
          isPlaying: !1,
          setIsPlaying: () => {},
          error: !1,
          playOnce: !1,
          hasEnded: !1,
          setHasEnded: () => {},
          setError: () => {},
          videoRef: null,
          lastPlayingRef: null,
          bgImageRef: null
        }),
        Xe = (0, n.forwardRef)(function({
          landscapeViewportBehavior: e,
          scrimColor: t,
          reducedMotion: a,
          playOnce: s,
          children: i,
          asChild: o,
          ...l
        }, c) {
          const [d, u] = (0, n.useState)(!a), [m, _] = (0, n.useState)(!1), [f, p] = (0, n.useState)(!1), h = (0, n.useRef)(null), b = (0, n.useRef)(!1), v = (0, n.useRef)(null), x = (0, k.v6)({
            className: Oe({
              landscapeViewportBehavior: e
            })
          }, l), w = o ? g.DX : "div";
          return (0, r.jsx)(Ue.Provider, {
            value: {
              landscapeViewportBehavior: e,
              scrimColor: t,
              videoRef: h,
              lastPlayingRef: b,
              bgImageRef: v,
              isPlaying: d,
              playOnce: s,
              hasEnded: m,
              setHasEnded: _,
              reducedMotion: a,
              setIsPlaying: u,
              error: f,
              setError: p
            },
            children: (0, r.jsx)(w, {
              ref: c,
              ...x,
              children: i
            })
          })
        }),
        He = (0, n.forwardRef)(function({
          onToggle: e,
          ...t
        }, a) {
          const {
            formatMessage: s
          } = (0, o.useIntl)(), {
            isPlaying: i,
            setIsPlaying: l,
            videoRef: d,
            lastPlayingRef: u,
            error: m,
            playOnce: _,
            hasEnded: g,
            setHasEnded: f,
            setError: p,
            reducedMotion: h
          } = $e(), [b, v] = (0, n.useState)("Pause"), x = (!_ || !g) && u.current;
          (0, n.useEffect)(() => {
            v(i || x ? "Pause" : _ && g ? "Replay" : "Play")
          }, [x, i, _, g]);
          const w = (0, k.v6)({
            className: "_197irmi5",
            label: s(_ && g ? Be.decorative_video_replay_button_label : x ? Be.decorative_video_pause_button_label : Be.decorative_video_play_button_label)
          }, t);
          return h || m ? null : (0, r.jsx)(c.IconButton, {
            ref: a,
            ...w,
            icon: b,
            size: "SM",
            onPress: async () => {
              e?.(!i);
              const t = d.current;
              if (t)
                if (_ && g) try {
                    f(!1), t.currentTime = 0, await t.play(), l(!0), u.current = !0
                  } catch {
                    p(!0), l(!1), u.current = !1
                  } else if (i || x) t?.pause(), l(!1), u.current = !1;
                  else try {
                    await (t?.play()), l(!0), u.current = !0
                  } catch {
                    p(!0), l(!1), u.current = !1
                  }
            }
          })
        }),
        Ke = (0, n.forwardRef)(function({
          src: e,
          poster: t,
          altText: a,
          autoPlay: s,
          muted: i,
          asChild: o,
          testId: l,
          ...c
        }, d) {
          const {
            videoRef: u,
            reducedMotion: m,
            lastPlayingRef: _,
            playOnce: f,
            setIsPlaying: p,
            error: h,
            setError: b,
            setHasEnded: v
          } = $e(), x = o ? g.DX : "div", w = (0, k.v6)({
            "data-testid": l
          }, c);
          return (0, n.useEffect)(() => {
            const t = u.current;
            if (!t || !e || m) return;
            const a = t?.children[t.children.length - 1] ?? null,
              r = () => {
                p(!0), v(!1), _.current = !0
              },
              s = () => {
                t.paused || (p(!1), _.current = !1)
              },
              n = () => {
                console.warn("Play request interrupted :", t.error), b(!0), p(!1), _.current = !1
              },
              i = () => {
                p(!1), _.current = !1, v(!0)
              },
              o = () => {
                console.warn("Video failed to load sources."), b(!0), p(!1), _.current = !1
              };
            return t.addEventListener("play", r), t.addEventListener("pause", s), t.addEventListener("error", n), t.addEventListener("ended", i), a && a.addEventListener("error", o), () => {
              t.removeEventListener("play", r), t.removeEventListener("pause", s), t.removeEventListener("error", n), t.removeEventListener("ended", i), a && a.removeEventListener("error", o)
            }
          }, [u, e, m, p, b, v, _.current]), (() => {
            const {
              videoRef: e,
              lastPlayingRef: t,
              setIsPlaying: a,
              playOnce: r,
              hasEnded: s
            } = $e();
            (0, n.useEffect)(() => {
              const n = async () => {
                const n = e.current;
                if (n)
                  if (document.hidden) t.current = !n.paused && !s, n.paused || (n.pause(), a(!1));
                  else if (t.current && !s && n.paused && n.muted && (!r || !s)) try {
                  await n.play(), a(!0), t.current = !0
                } catch {
                  a(!1), t.current = !1
                }
              };
              return document.addEventListener("visibilitychange", n), () => document.removeEventListener("visibilitychange", n)
            }, [e, a, r, s, t])
          })(), ((e = 0) => {
            const {
              videoRef: t,
              lastPlayingRef: a,
              setIsPlaying: r,
              playOnce: s,
              hasEnded: i
            } = $e();
            (0, n.useEffect)(() => {
              const n = t.current;
              if (!n) return;
              const o = new IntersectionObserver(async e => {
                if (e[0].isIntersecting) {
                  if (a.current && !i && n.paused && n.muted && (!s || !i)) try {
                    await n.play(), r(!0), a.current = !0
                  } catch {
                    r(!1), a.current = !1
                  }
                } else a.current = !n.paused && !i, n.paused || (n.pause(), r(!1))
              }, {
                threshold: e
              });
              return o.observe(n), () => o.disconnect()
            }, [t, r, e, s, i, a])
          })(0), (0, r.jsx)(x, {
            ref: d,
            ...w,
            children: h || m || !e ? (0, r.jsx)("img", {
              "data-testid": "decorative-video-fallback",
              alt: a,
              src: t,
              className: qe
            }) : (0, r.jsx)("video", {
              ref: u,
              className: qe,
              src: e,
              poster: t,
              autoPlay: s,
              muted: i,
              loop: !f,
              playsInline: !0,
              onError: () => b(!0),
              "aria-hidden": "true",
              tabIndex: -1
            })
          })
        }),
        Qe = (0, n.forwardRef)(function({
          children: e,
          ...t
        }, a) {
          const {
            scrimColor: s
          } = $e(), n = (0, k.v6)({
            className: "_197irmi4",
            style: (0, y.DI)({
              [Ve]: s ?? "unset"
            })
          }, t);
          return (0, r.jsx)("div", {
            ref: a,
            ...n,
            children: e
          })
        }),
        Ye = "WwwDecorativeVideo";
      var Ze = (0, C.c)({
        defaultClassName: "_1asiojt0",
        variantClassNames: {
          size: {
            dimensions_25: "_1asiojt1",
            dimensions_50: "_1asiojt2",
            dimensions_100: "_1asiojt3",
            dimensions_150: "_1asiojt4",
            dimensions_175: "_1asiojt5"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      const Je = (0, n.forwardRef)(function({
          gradientStyle: e = "",
          thickness: t = "dimensions_25",
          ...a
        }, s) {
          return (0, r.jsx)("div", {
            className: Ze({
              size: t
            }),
            style: {
              background: e
            },
            tabIndex: -1,
            ref: s,
            ...a
          })
        }),
        et = "WwwDivider";
      var tt = a(12304);
      const at = i.gql`
fragment postFields on RockstarGames_Newswire_Model_Entity_Post_o {
    id: id_hash
    url
    title
    created
    created_formatted
    primary_tags {
        id
        name
    }
    secondary_tags {
        id
        name
    }
    preview_images_parsed {
        newswire_block {
            square
            d16x9
            _fallback
        }
    }
}`,
        rt = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          layout: a = "primary",
          aspect: s = "wide",
          transparent: n = !1,
          asChild: i,
          ...o
        }, l) {
          const c = i ? g.DX : "div",
            d = (0, k.v6)({
              className: "sp6aw70",
              "data-layout": a,
              "data-aspect": s,
              "data-transparent": !!n || void 0,
              "data-testid": t
            }, o);
          return (0, r.jsx)(c, {
            ref: l,
            ...d,
            children: e
          })
        }),
        st = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...s
        }, n) {
          const i = a ? g.DX : "div",
            o = (0, k.v6)({
              className: "sp6aw71",
              "data-testid": t
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: (0, r.jsx)("div", {
              className: "sp6aw72",
              children: e
            })
          })
        }),
        nt = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...s
        }, n) {
          const i = a ? g.DX : "div",
            o = (0, k.v6)({
              className: "sp6aw73",
              "data-testid": t
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        it = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...s
        }, n) {
          const i = a ? g.DX : c.Text,
            o = (0, k.v6)({
              className: "sp6aw75 sp6aw74",
              "data-testid": t
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        ot = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...s
        }, n) {
          const i = a ? g.DX : c.Heading,
            o = (0, k.v6)({
              className: "sp6aw76 sp6aw74",
              "data-testid": t
            }, s);
          return (0, r.jsx)(i, {
            level: 4,
            ref: n,
            ...o,
            children: e
          })
        }),
        lt = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...s
        }, n) {
          const i = a ? g.DX : "time",
            o = (0, k.v6)({
              className: "sp6aw77 sp6aw74",
              "data-testid": t
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        ct = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...s
        }, n) {
          const i = a ? g.DX : "div",
            o = (0, k.v6)({
              className: "sp6aw78",
              "data-testid": t
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        dt = ({
          width: e = "100%",
          height: t = "100%"
        }) => (0, r.jsx)("div", {
          className: "_9c411v3 _9c411v1",
          "aria-hidden": "true",
          style: {
            width: e,
            height: t
          }
        }),
        ut = ({
          width: e = "100%"
        }) => (0, r.jsx)("span", {
          className: "_9c411v2 _9c411v1",
          "aria-hidden": "true",
          style: {
            width: e
          }
        });
      var mt = "_17xncyz0";
      const _t = ({
          layout: e,
          aspect: t,
          transparent: a,
          testId: s
        }) => (0, r.jsxs)(rt, {
          className: mt,
          layout: e,
          aspect: t,
          transparent: a,
          testId: s,
          children: [(0, r.jsx)(st, {
            children: (0, r.jsx)(dt, {
              width: "100%"
            })
          }), (0, r.jsxs)(nt, {
            children: [(0, r.jsx)(it, {
              children: (0, r.jsx)(ut, {
                width: "30%"
              })
            }), (0, r.jsxs)(ot, {
              children: [(0, r.jsx)(ut, {}), (0, r.jsx)(ut, {})]
            }), (0, r.jsx)(lt, {
              children: (0, r.jsx)(ut, {
                width: "40%"
              })
            })]
          })]
        }),
        gt = ({
          loading: e,
          data: t,
          id: a,
          aspect: s,
          layout: n,
          transparent: i,
          handleStoryClick: o,
          testId: l
        }) => {
          const c = t?.preview_images_parsed.newswire_block["square" === s ? "square" : "d16x9"],
            d = `${c}?im=Resize,width=${"primary"===n?1200:600}`;
          return e || !t ? (0, r.jsx)(_t, {
            layout: n,
            aspect: s,
            testId: l
          }) : (0, r.jsx)(w, {
            className: "_17xncyz1",
            href: t.url,
            onClick: o,
            children: (0, r.jsxs)(rt, {
              className: mt,
              layout: n,
              aspect: s,
              transparent: i,
              testId: l,
              children: [(0, r.jsx)(st, {
                children: (0, r.jsx)("img", {
                  src: d,
                  loading: "lazy"
                })
              }), (0, r.jsxs)(nt, {
                children: [(0, r.jsxs)(ct, {
                  children: [(0, r.jsx)(it, {
                    children: t.primary_tags[0].name
                  }), (0, r.jsx)(ot, {
                    children: t.title
                  })]
                }), (0, r.jsx)(lt, {
                  dateTime: t.created,
                  children: t.created_formatted
                })]
              })]
            })
          })
        },
        ft = i.gql`
fragment postFields on RockstarGames_Newswire_Model_Entity_Post_o {
    id: id_hash
    url
    title
    created
    created_formatted
    primary_tags {
        id
        name
    }
    secondary_tags {
        id
        name
    }
    preview_images_parsed {
        newswire_block {
            square
            d16x9
            _fallback
        }
    }
}`,
        pt = "WwwEditorialPost",
        ht = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...s
        }, n) {
          const i = a ? g.DX : "div",
            o = (0, k.v6)({
              "data-testid": t
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        bt = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...s
        }, n) {
          const i = (0, ne.Ub)(j.f.tabletMediumAndLarger),
            o = a ? g.DX : "div",
            l = (0, k.v6)({
              "data-testid": t
            }, s);
          return (0, r.jsx)(o, {
            ref: n,
            ...l,
            className: i ? "_1hb4ou60 _1betujy6 _1betujy5" : "",
            children: e
          })
        }),
        vt = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          onCarouselSwipe: s,
          ...i
        }, o) {
          const {
            viewportRef: l
          } = (({
            defaultSlide: e = 0,
            onCarouselSwipe: t
          }) => {
            const a = {
                axis: "x",
                align: "start",
                startIndex: e,
                active: !0,
                containScroll: "trimSnaps",
                loop: !1,
                skipSnaps: !0,
                inViewThreshold: .9
              },
              [r, s] = (0, ye.A)(a, [(0, je.J)()]);
            return (0, n.useEffect)(() => {
              if (!s) return;
              let e = 0;
              const a = () => {
                  e = s.selectedScrollSnap()
                },
                r = () => {
                  const a = s.selectedScrollSnap();
                  e !== a && t?.()
                };
              return s.on("pointerDown", a), s.on("pointerUp", r), () => {
                s.off("pointerDown", a), s.off("pointerUp", r)
              }
            }, [s]), {
              embla: s,
              viewportRef: r
            }
          })({
            defaultSlide: 0,
            onCarouselSwipe: s
          }), c = a ? g.DX : "div", d = (0, k.v6)({
            "data-testid": t,
            className: "_1hb4ou65"
          }, i);
          return (0, r.jsx)(c, {
            className: "_1hb4ou63",
            ref: o,
            children: (0, r.jsx)(Ae, {
              ref: l,
              ...d,
              children: (0, r.jsx)(De, {
                children: e
              })
            })
          })
        }),
        xt = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, s) {
          const n = (0, k.v6)({
            "data-testid": t
          }, a);
          return (0, r.jsx)(Pe, {
            ref: s,
            ...n,
            children: e
          })
        }),
        kt = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...s
        }, n) {
          const i = (0, k.v6)({
              "data-testid": t,
              className: "_1hb4ou62"
            }, s),
            o = a ? g.DX : "div";
          return (0, r.jsx)(o, {
            ref: n,
            ...i,
            children: e
          })
        }),
        wt = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...s
        }, n) {
          const i = (0, k.v6)({
              "data-testid": t,
              className: "_1hb4ou64"
            }, s),
            o = a ? g.DX : "div";
          return (0, r.jsx)(o, {
            ref: n,
            ...i,
            children: e
          })
        }),
        yt = "WwwEditorialGridModule",
        jt = (0, o.defineMessages)({
          featured_game_breadcrumbs_parent_item: {
            id: "featured_game_breadcrumbs_parent_item",
            description: "Breadcrumbs parent page item label",
            defaultMessage: "Games"
          }
        });
      var Ct = a(1556),
        Rt = a.n(Ct),
        St = a(79719),
        Nt = a(44154);
      St.os.registerPlugin(J.u);
      const It = (0, n.forwardRef)(function({
          src: e,
          context: t,
          className: a,
          loading: s = "lazy",
          testId: n,
          ...i
        }, o) {
          if (!e) return null;
          const c = (0, l.getOptimizedRsgImage)(e, t, {
            preferModernFormat: !0
          });
          if (!c?.url) return null;
          const d = (0, k.v6)({
            "data-testid": n,
            alt: c.alt,
            src: c.url,
            width: c.width,
            height: c.height,
            loading: s,
            className: a
          }, i);
          return (0, r.jsx)(le, {
            ref: o,
            ...d
          })
        }),
        Et = (0, o.defineMessages)({
          hp_hero_play_button_label: {
            id: "hp_hero_play_button_label",
            description: "Featured Game hero play button label",
            defaultMessage: "Play"
          },
          hp_hero_stop_button_label: {
            id: "hp_hero_stop_button_label",
            description: "Featured Game hero stop button label",
            defaultMessage: "Stop"
          }
        });
      var Tt = "vi4uz51";
      const At = (0, n.createContext)({
          videoRef: null,
          bgImageRef: null,
          isPlaying: !1,
          isLooping: !1,
          reducedMotion: !1,
          setIsPlaying: () => {},
          videoError: !1,
          setVideoError: () => {}
        }),
        Mt = () => {
          const e = (0, n.useContext)(At);
          if (!e) throw new Error("useHeroContext must be used within HeroProvider");
          return e
        },
        zt = (0, n.forwardRef)(function({
          testId: e,
          children: t,
          asChild: a,
          isLooping: s = !1,
          ...i
        }, o) {
          const l = window && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
            c = (0, n.useRef)(null),
            d = (0, n.useRef)(null),
            [u, m] = (0, n.useState)(!l),
            [_, f] = (0, n.useState)(!1),
            p = (0, k.v6)({
              "data-testid": e,
              className: "vi4uz50"
            }, i),
            h = a ? g.DX : "div";
          return (0, r.jsx)(At.Provider, {
            value: {
              videoRef: c,
              bgImageRef: d,
              isPlaying: u,
              isLooping: s,
              reducedMotion: l,
              setIsPlaying: m,
              videoError: _,
              setVideoError: f
            },
            children: (0, r.jsx)(h, {
              ref: o,
              ...p,
              children: t
            })
          })
        }),
        Dt = (0, n.forwardRef)(function({
          videoSrc: e,
          backgroundImage: t,
          isPlaying: a,
          setIsPlaying: s,
          videoLabel: i,
          testId: o,
          asChild: c,
          ...d
        }, u) {
          const m = (0, ne.Ub)(j.f.mobile),
            {
              videoRef: _,
              isLooping: f,
              reducedMotion: p,
              setVideoError: h
            } = Mt(),
            [b, v] = (0, n.useState)(null),
            x = c ? g.DX : "div",
            w = (0, k.v6)({
              "data-testid": o,
              className: Tt
            }, d);
          return (0, n.useEffect)(() => {
            const t = _.current;
            if (!t || !e.mobile && !e.desktop || p) return;
            const a = t?.children[t.children.length - 1] ?? null,
              r = () => {
                s(!0)
              },
              n = () => {
                s(!1)
              },
              i = () => {
                console.warn("Play request interrupted :", t.error), s(!1)
              },
              o = () => {
                console.warn("Video failed to load sources."), h(!0)
              };
            return t.addEventListener("play", r), t.addEventListener("error", i), t.addEventListener("pause", n), a && a.addEventListener("error", o), () => {
              t.removeEventListener("play", r), t.removeEventListener("error", i), t.removeEventListener("pause", n), a && a.removeEventListener("error", o)
            }
          }, [_.current, JSON.stringify(e), p]), (0, n.useEffect)(() => {
            const e = (0, l.getOptimizedRsgImage)(t, m ? "1:1" : "21:9", {
              preferModernFormat: !0
            });
            e && v(e)
          }, [t, m]), (0, r.jsxs)(x, {
            ref: u,
            ...w,
            children: [(0, r.jsxs)("video", {
              ref: _,
              className: Tt,
              loop: f,
              "aria-label": i,
              autoPlay: !0,
              playsInline: !0,
              muted: !0,
              poster: b?.url ?? void 0,
              children: [e.mobile && (0, r.jsx)("source", {
                media: j.f.mobile,
                src: e.mobile,
                type: "video/mp4"
              }), e.desktop && (0, r.jsx)("source", {
                media: j.f.tabletSmallAndLarger,
                src: e.desktop,
                type: "video/mp4"
              })]
            }), (0, r.jsx)(It, {
              context: m ? "1:1" : "21:9",
              src: t,
              className: Rt()(["vi4uz52", a ? "vi4uz54" : "vi4uz53"]),
              "aria-hidden": a
            })]
          })
        }),
        Ft = (0, n.forwardRef)(function({
          disabled: e,
          onButtonClick: t,
          isPlaying: a,
          testId: s,
          ...i
        }, l) {
          const {
            formatMessage: d
          } = (0, o.useIntl)(), {
            videoRef: u,
            reducedMotion: m,
            videoError: _
          } = Mt(), g = (0, n.useCallback)(() => {
            (() => {
              const e = u.current;
              e && (a ? (e?.pause(), e.currentTime = 0) : e?.play())
            })(), t?.(a)
          }, [a]), f = (0, k.v6)({
            "data-testid": s,
            className: Rt()("vi4uz5e", e ? "vi4uz5d" : ""),
            label: d(a ? Et.hp_hero_stop_button_label : Et.hp_hero_play_button_label)
          }, i);
          return m || _ ? null : (0, r.jsx)(c.IconButton, {
            ref: l,
            ...f,
            icon: a ? "Stop" : "Play",
            appearance: "primary",
            size: "SM",
            onPress: g
          })
        });
      (0, C.c)({
        defaultClassName: "_1betujy6 _1betujy5",
        variantClassNames: {
          columns: {
            1: "_16t2abv3",
            2: "_16t2abv4",
            3: "_16t2abv5",
            4: "_16t2abv6",
            5: "_16t2abv7",
            6: "_16t2abv8",
            7: "_16t2abv9",
            8: "_16t2abva",
            9: "_16t2abvb",
            10: "_16t2abvc",
            11: "_16t2abvd",
            12: "_16t2abve"
          },
          align: {
            start: "_16t2abvf",
            center: "_16t2abvg",
            end: "_16t2abvh"
          }
        },
        defaultVariants: {
          columns: 3,
          align: "start"
        },
        compoundVariants: []
      });
      const Pt = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...s
        }, n) {
          const i = a ? g.DX : "section",
            o = (0, k.v6)({
              "data-testid": t,
              className: "_16t2abv0"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        Lt = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...s
        }, n) {
          const i = a ? g.DX : "div",
            o = (0, k.v6)({
              "data-testid": t,
              className: "_16t2abv1"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        Wt = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...s
        }, n) {
          const i = a ? g.DX : "div",
            o = (0, k.v6)({
              "data-testid": t,
              className: "_16t2abvi"
            }, s);
          return (0, r.jsx)("div", {
            className: "_1betujy6 _1betujy5",
            children: (0, r.jsx)(i, {
              ref: n,
              ...o,
              children: e
            })
          })
        });
      var Gt = (0, C.c)({
        defaultClassName: "_1xrjhoy4",
        variantClassNames: {
          reducedMotion: {
            false: "_1xrjhoy5",
            true: "_1xrjhoy6"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      const Bt = (0, n.createContext)({
          heroRef: (0, n.createRef)(),
          backgroundRef: (0, n.createRef)(),
          backgroundGradientRef: (0, n.createRef)(),
          playStopButtonRef: (0, n.createRef)(),
          collectionsRef: (0, n.createRef)(),
          gameDetailsRef: (0, n.createRef)(),
          reducedMotion: !1,
          isPlaying: !1,
          setIsPlaying: e => e
        }),
        qt = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...s
        }, i) {
          const o = window && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
            l = (0, n.useRef)(null),
            c = (0, n.useRef)(null),
            d = (0, n.useRef)(null),
            u = (0, n.useRef)(null),
            m = (0, n.useRef)(null),
            _ = (0, n.useRef)(null),
            [f, p] = (0, n.useState)(!o);
          ! function({
            heroRef: e,
            backgroundRef: t,
            backgroundGradientRef: a,
            playStopButtonRef: r,
            collectionsRef: s,
            gameDetailsRef: i
          }) {
            const [o, l] = (0, n.useState)(!1);
            (0, Nt.L)(() => {
              if (o) return;
              const n = e.current,
                c = t.current,
                d = a.current,
                u = r.current,
                m = s.current,
                _ = i.current;
              if (!(n && c && d && u && m && _)) return;
              const g = St.os.timeline({
                paused: !0,
                defaults: {
                  ease: "none",
                  duration: 100
                },
                scrollTrigger: {
                  trigger: n,
                  start: "top top",
                  endTrigger: m,
                  end: "top top",
                  pin: !0,
                  pinSpacing: !1,
                  scrub: !0,
                  onEnter: () => {
                    g.scrollTrigger?.refresh()
                  }
                }
              });
              g.fromTo(d, {
                background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, 70%, rgba(0, 0, 0, 1) 100%)"
              }, {
                background: "linear-gradient(180deg, rgba(0, 0, 0, 0) -100%, -60%, rgba(0, 0, 0, 1) 20%)"
              }, 0), g.to(d, {
                backdropFilter: "blur(50px)",
                duration: 50
              }, 50), g.fromTo(c, {
                scale: 1
              }, {
                scale: 1.1
              }, 0), g.to(u, {
                opacity: 0,
                duration: 10
              }, 70), s.current && (St.os.utils.toArray(":scope > *", s.current).forEach(e => {
                St.os.fromTo(e, {
                  opacity: 0
                }, {
                  opacity: 1,
                  ease: "none",
                  scrollTrigger: {
                    trigger: e,
                    start: "top bottom",
                    end: "+=20%",
                    toggleActions: "play none none none",
                    scrub: !0
                  }
                })
              }), g.scrollTrigger?.refresh(), l(!0))
            }, [e.current, t.current, a.current, r.current, i.current, s.current])
          }({
            heroRef: l,
            backgroundRef: c,
            backgroundGradientRef: d,
            playStopButtonRef: u,
            collectionsRef: m,
            gameDetailsRef: _
          });
          const h = a ? g.DX : "div",
            b = (0, k.v6)({
              "data-testid": t,
              className: "_1xrjhoy0"
            }, s);
          return (0, r.jsx)(Bt.Provider, {
            value: {
              heroRef: l,
              backgroundRef: c,
              backgroundGradientRef: d,
              playStopButtonRef: u,
              collectionsRef: m,
              gameDetailsRef: _,
              reducedMotion: o,
              isPlaying: f,
              setIsPlaying: p
            },
            children: (0, r.jsx)(h, {
              ref: i,
              ...b,
              children: e
            })
          })
        }),
        Ot = (0, n.forwardRef)(function({
          backgroundImage: e,
          backgroundVideo: t,
          ...a
        }, s) {
          const {
            heroRef: i,
            backgroundRef: o,
            backgroundGradientRef: l,
            isPlaying: c,
            playStopButtonRef: d,
            reducedMotion: u,
            setIsPlaying: m
          } = (0, n.useContext)(Bt), {
            trackEvent: _
          } = G(), g = (0, ne.UP)(i, s), f = (0, ne.Ub)(j.f.mobile), p = t?.videoFilesCollection?.items?.find(e => "21:9" === e.context), h = t?.videoFilesCollection?.items?.find(e => "1:1" === e.context), b = {
            desktop: p?.url,
            mobile: h?.url ?? p?.url
          };
          return (0, r.jsxs)(zt, {
            ref: g,
            ...a,
            children: [(0, r.jsx)(Dt, {
              backgroundImage: e,
              isPlaying: c,
              ref: o,
              setIsPlaying: m,
              videoSrc: b,
              videoLabel: t?.title ?? ""
            }), !u && (0, r.jsx)(Ft, {
              ref: d,
              isPlaying: c,
              onButtonClick: e => {
                const a = f ? h : p;
                _({
                  event: "cta_other",
                  text: e ? "toggle pause" : "toggle play",
                  video_id: a?.sys?.id,
                  video_type: t?.type
                }, t)
              }
            }), (0, r.jsx)("div", {
              ref: l,
              className: Gt({
                reducedMotion: u
              })
            })]
          })
        }),
        Vt = (0, n.forwardRef)(function({
          ...e
        }, t) {
          const a = (0, k.v6)({
            className: "_1xrjhoy3"
          }, e);
          return (0, r.jsx)(ce, {
            ref: t,
            ...a
          })
        }),
        $t = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...s
        }, n) {
          const i = a ? g.DX : "div",
            o = (0, k.v6)({
              "data-testid": t,
              className: "_1xrjhoy7"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        Ut = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...s
        }, n) {
          const i = a ? g.DX : "div",
            o = (0, k.v6)({
              "data-testid": t,
              className: "_1xrjhoy8 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdc"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        Xt = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...s
        }, n) {
          const i = a ? g.DX : "div",
            o = (0, k.v6)({
              "data-testid": t,
              className: "_1xrjhoy9"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        Ht = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...s
        }, n) {
          const i = a ? g.DX : "div",
            o = (0, k.v6)({
              "data-testid": t,
              className: "_1xrjhoya"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        Kt = (0, n.forwardRef)(function({
          testId: e,
          asChild: t,
          children: a,
          ...s
        }, n) {
          const i = t ? g.DX : It,
            o = (0, k.v6)({
              "data-testid": e,
              className: "_1xrjhoyc"
            }, s);
          return (0, r.jsx)("div", {
            className: "_1xrjhoyb",
            children: (0, r.jsx)(i, {
              ref: n,
              ...o,
              children: a
            })
          })
        }),
        Qt = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...s
        }, i) {
          const {
            gameDetailsRef: o
          } = (0, n.useContext)(Bt), l = (0, ne.UP)(o, i), c = t ? g.DX : Pt, d = (0, k.v6)({
            "data-testid": a
          }, s);
          return (0, r.jsx)(c, {
            ref: l,
            ...d,
            children: e
          })
        }),
        Yt = (0, n.forwardRef)(function({
          children: e,
          className: t,
          asChild: a,
          ...s
        }, i) {
          const {
            collectionsRef: o
          } = (0, n.useContext)(Bt), l = (0, ne.UP)(o, i), c = a ? g.DX : Pt, d = (0, k.v6)({
            className: Rt()("_1xrjhoy1", t)
          }, s);
          return (0, r.jsx)(c, {
            ref: l,
            ...d,
            children: e
          })
        }),
        Zt = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...s
        }, n) {
          const i = a ? g.DX : Wt,
            o = (0, k.v6)({
              "data-testid": t
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        Jt = (0, n.forwardRef)(function({
          children: e,
          className: t,
          asChild: a,
          ...s
        }, n) {
          const i = a ? g.DX : Lt,
            o = (0, k.v6)({
              className: Rt()("_1xrjhoy2", t)
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        ea = "view",
        ta = e => {
          if (!e) return null;
          try {
            return new URL(e, window.location.origin)
          } catch {
            return null
          }
        },
        aa = (e, t) => {
          if (!e) return "";
          const a = ta(e);
          return a ? (new URLSearchParams(t).forEach((e, t) => {
            a.searchParams.has(t) || a.searchParams.set(t, e)
          }), `${a.pathname}${a.search}${a.hash}`) : e
        },
        ra = ({
          block: e,
          size: t = "MD",
          backgroundColor: a,
          asChild: s,
          ...i
        }) => {
          const o = (0, u.useLocation)(),
            [, l] = (0, u.useSearchParams)(),
            {
              trackEvent: d
            } = G(),
            m = e?.link?.url ?? "",
            _ = (0, n.useMemo)(() => ((e, t) => {
              const a = ta(e);
              if (!a) return {
                mode: "link",
                href: e,
                viewParam: ""
              };
              const r = a.searchParams.get(ea) ?? "",
                s = r ? "bottom-sheet" : "link";
              return {
                mode: s,
                href: "bottom-sheet" === s ? aa(e, t) : e,
                viewParam: r
              }
            })(m, o.search), [m, o.search]),
            f = "bottom-sheet" === _.mode,
            p = _.href,
            h = _.viewParam,
            b = e?.openInNewTab ? "_blank" : "_self";
          if (!e) return null;
          const v = e => {
              d({
                event: "cta_other",
                text: e.text?.toLowerCase(),
                link_url: p,
                ...e.analyticsData
              }, e)
            },
            x = (0, k.v6)({
              size: t,
              appearance: e?.appearance,
              iconLeft: e?.iconLeft?.icon,
              iconRight: e?.iconRight?.icon,
              onPress: f ? () => {
                f && f && h && l(e => {
                  const t = new URLSearchParams(e);
                  return t.set(ea, h), t
                }), v(e)
              } : () => v(e),
              override_backgroundColor: e?.backgroundColor ?? a,
              asChild: !f
            }, i);
          return s ? (0, r.jsx)(w, {
            href: p,
            target: b,
            children: (0, r.jsx)(g.DX, {
              ...i
            })
          }) : (0, r.jsx)(c.Button, {
            ...x,
            children: f ? e.text : (0, r.jsx)(w, {
              href: p,
              target: b,
              children: e.text
            })
          })
        },
        sa = ({
          block: e
        }) => {
          const {
            useTrackPageSectionImpression: t
          } = G(), {
            blockPosition: a
          } = (0, n.useContext)(l.BlockRendererContext), {
            ref: s
          } = t(), {
            formatMessage: i
          } = (0, o.useIntl)();
          if (!e) return null;
          const {
            logo: d,
            game: u,
            description: m,
            ctasCollection: _
          } = e;
          return (0, r.jsxs)(qt, {
            ref: s,
            children: [(0, r.jsx)(Ot, {
              backgroundImage: e.backgroundImage,
              backgroundVideo: e.backgroundVideo,
              isLooping: !0
            }), (0, r.jsx)(Qt, {
              children: (0, r.jsxs)(Yt, {
                children: [(0, r.jsxs)(Zt, {
                  children: [(0, r.jsx)(Vt, {
                    src: d
                  }), (0, r.jsxs)($t, {
                    children: [(0, r.jsxs)(Jt, {
                      children: [(0, r.jsxs)(c.Breadcrumbs.Root, {
                        children: [(0, r.jsx)(c.Breadcrumbs.Item, {
                          href: "/games",
                          children: i(jt.featured_game_breadcrumbs_parent_item)
                        }), (0, r.jsx)(c.Breadcrumbs.Item, {
                          href: u?.wwwPageLink?.url,
                          isCurrent: !0,
                          children: u?.title
                        })]
                      }), (0, r.jsx)(Ut, {
                        asChild: !0,
                        children: (0, r.jsx)(c.Body, {
                          children: m
                        })
                      })]
                    }), (0, r.jsxs)(Jt, {
                      className: "hg5jwy0",
                      children: [_?.items && (0, r.jsx)(Xt, {
                        children: _?.items?.map((e, t) => {
                          if (e?.text) return (0, r.jsx)(ra, {
                            block: e,
                            size: "MD"
                          }, t)
                        })
                      }), u?.platformsCollection?.items?.length && (0, r.jsx)(Ht, {
                        children: u.platformsCollection.items.map((e, t) => (0, r.jsx)(Kt, {
                          src: e?.logo,
                          context: "mobile"
                        }, `${e?.sys?.id}-${t}`))
                      })]
                    })]
                  })]
                }), e.childModulesCollection?.items.map(e => (0, r.jsx)(l.BlockRenderer, {
                  block: e,
                  blockPosition: a
                }, e.sys.id))]
              })
            })]
          })
        },
        na = "WwwFeaturedGameSection";
      var ia = "r3mkgz4",
        oa = "var(--r3mkgz0)",
        la = "r3mkgz5",
        ca = "var(--r3mkgz1)";
      const da = {
          wrap: "flex-direction: row;",
          stack: "flex-direction: column;"
        },
        ua = {
          left: "\n        align-items: flex-start;\n        justify-content: flex-start;\n    ",
          center: "\n        align-items: center;\n        justify-content: center;\n    ",
          right: "\n        align-items: flex-end;\n        justify-content: flex-end;\n    "
        },
        ma = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          gap: s,
          ...n
        }, i) {
          const o = t ? g.DX : "div",
            l = (0, k.v6)({
              "data-testid": a,
              className: "r3mkgz3 _1betujy5",
              style: (0, y.DI)({
                [oa]: s
              })
            }, n);
          return (0, r.jsx)(o, {
            ref: i,
            ...l,
            children: e
          })
        }),
        _a = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          breakpoints: s,
          gap: i,
          ...o
        }, l) {
          const c = `grid-${(0,n.useId)()}`,
            d = t ? g.DX : "div",
            u = (0, n.useMemo)(() => s?.map(({
              mediaQuery: e,
              columns: t,
              behavior: a = "wrap",
              alignment: r = "left"
            }) => `\n            @media ${e} {\n                #${CSS.escape(c)}.${ia} {\n                    ${da[a]}\n                    ${ua[r]}\n                }\n                ${t.map((e,a)=>`\n                    #${CSS.escape(c)} .${la}:nth-of-type(${t.length}n + ${a+1}) {\n                            --grid-col-span: ${e};\n                        }\n                    `).join(" ")}\n            }\n        `), [s]),
            m = (0, k.v6)({
              "data-testid": a,
              className: ia,
              style: (0, y.DI)({
                [ca]: i
              })
            }, o);
          return (0, r.jsxs)(d, {
            id: c,
            ref: l,
            ...m,
            children: [(0, r.jsx)("style", {
              children: u
            }), e]
          })
        }),
        ga = (0, n.forwardRef)(function({
          gap: e,
          children: t,
          asChild: a,
          testId: s,
          ...n
        }, i) {
          const o = a ? g.DX : "div",
            l = (0, k.v6)({
              "data-testid": s,
              className: la,
              style: (0, y.DI)({
                [ca]: e
              })
            }, n);
          return (0, r.jsx)(o, {
            ref: i,
            ...l,
            children: t
          })
        }),
        fa = ({
          contentCollection: e,
          layout: t,
          ...a
        }) => {
          const s = (0, n.useMemo)(() => t?.breakpointsCollection?.items.map(e => ({
            mediaQuery: e.mediaQuery || "all",
            behavior: e.behavior || "wrap",
            alignment: e.alignment || "left",
            columns: e.columns
          })), [t]);
          return (0, r.jsx)(_a, {
            breakpoints: s,
            ...a,
            children: e?.items.map((t, a) => (0, r.jsx)(ga, {
              children: (0, r.jsx)(l.BlockRenderer, {
                block: t,
                blockPosition: {
                  blockIndex: a,
                  totalBlocks: e.items.length
                }
              })
            }, t.sys?.id || a))
          })
        },
        pa = "WwwGridWrapper",
        ha = e => {
          if (!e) return "MD";
          const t = e.length;
          return t <= 20 ? "XL" : t > 20 && t <= 40 ? "LG" : t > 40 && t <= 60 ? "MD" : "SM"
        };
      var ba = a(84531),
        va = a(17982);
      St.os.registerPlugin(J.u);
      const xa = () => ({
          desktop: {
            enter: St.os.timeline({
              paused: !0
            }),
            exit: St.os.timeline({
              paused: !0
            })
          },
          mobile: {
            enter: St.os.timeline({
              paused: !0
            }),
            exit: St.os.timeline({
              paused: !0
            })
          }
        }),
        ka = (e, t) => e?.[t ? "mobile" : "desktop"],
        wa = e => {
          const t = {
              desktop: {
                enter: St.os.timeline({
                  paused: !0
                }),
                exit: St.os.timeline({
                  paused: !0
                })
              },
              mobile: {
                enter: St.os.timeline({
                  paused: !0
                }),
                exit: St.os.timeline({
                  paused: !0
                })
              }
            },
            a = [e.fade?.current].filter(Boolean) || null,
            r = [e.content?.current].filter(Boolean) || null;
          return a || r ? (t.mobile.enter.set([a, r], {
            opacity: 1
          }), t.mobile.exit.fromTo(a, {
            opacity: 1
          }, {
            opacity: .2,
            duration: 1,
            ease: "power1.inOut"
          }, 0).fromTo(r, {
            opacity: 1
          }, {
            opacity: .2,
            duration: 1,
            ease: "power1.inOut"
          }, 0).fromTo(r, {
            x: 0
          }, {
            x: "70vw",
            duration: 1,
            ease: "none"
          }, 0), t.desktop.enter.set(a, {
            opacity: 1
          }, 0).fromTo(r, {
            opacity: 0,
            yPercent: 25
          }, {
            yPercent: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.in"
          }, 0), t.desktop.exit.fromTo(a, {
            opacity: 1
          }, {
            opacity: .1,
            duration: 1,
            ease: "none"
          }, 0).fromTo(r, {
            opacity: 1,
            yPercent: 0
          }, {
            opacity: 0,
            yPercent: 0,
            duration: 1,
            ease: "none"
          }, 0), t) : xa()
        },
        ya = (e, t, {
          isMobile: a = !1,
          loop: r = !1
        }) => {
          (0, n.useEffect)(() => {
            if (!e || 0 === t.length) return;
            const s = e.scrollSnapList(),
              n = s.length,
              i = () => {
                const i = e.scrollProgress();
                let o = 0,
                  l = 0,
                  c = 0;
                for (let e = 0; e < n; e++) {
                  const d = s[e],
                    u = s[(e + 1) % n];
                  if (r) {
                    const t = u > d ? u - d : 1 + u - d,
                      a = (i - d + 1) % 1;
                    if (a >= 0 && a <= t) {
                      o = e, l = (e + 1) % n, c = a / t;
                      break
                    }
                    c = Math.min(a / t, 1)
                  } else {
                    const t = s[e + 1] ?? 1,
                      a = t - d;
                    if (i >= d && i <= t) {
                      o = e, l = e + 1, c = (i - d) / a;
                      break
                    }
                    c = Math.max(0, Math.min((i - d) / a, 1))
                  }
                  const m = t[e];
                  if (m) {
                    const e = ka(m, a);
                    e?.enter.progress(c).pause(), e?.exit.progress(0).pause()
                  }
                }
                const d = t[o];
                if (d) {
                  const e = ka(d, a);
                  e?.enter.progress(1 - c).pause(), e?.exit.progress(c).pause()
                }
                if (!a) {
                  const e = t[l];
                  if (e) {
                    const t = ka(e, !1);
                    t?.enter.progress(c).pause(), t?.exit.progress(0).pause()
                  }
                }
                t.forEach((e, t) => {
                  if (t !== o && t !== l) {
                    const t = ka(e, a);
                    t?.enter.progress(0).pause(), t?.exit.progress(0).pause()
                  }
                })
              };
            return t.length > 1 ? (e.on("scroll", i), e.on("resize", i), () => {
              e.off("scroll", i), e.off("resize", i)
            }) : void 0
          }, [e, t, a, r])
        },
        ja = () => k.X3 ? null : document.body,
        Ca = (0, o.defineMessages)({
          hero_carousel_play_button: {
            id: "hero_carousel_play_button",
            description: "Aria label for the icon button to play the hero carousel",
            defaultMessage: "Play"
          },
          hero_carousel_pause_button: {
            id: "hero_carousel_pause_button",
            description: "Aria label for the icon button to pause the hero carousel",
            defaultMessage: "Pause"
          },
          hero_carousel_scroll_down_label: {
            id: "hero_carousel_scroll_down_label",
            description: "Hero carousel scroll down label",
            defaultMessage: "Scroll Down"
          }
        });
      var Ra = a(444),
        Sa = (0, C.c)({
          defaultClassName: "wai7970",
          variantClassNames: {
            inLayout: {
              true: "wai7971",
              false: "wai7972"
            },
            appearance: {
              dark: "wai7973",
              light: "wai7974",
              adaptive: "wai7975",
              ghost: "wai7976"
            },
            size: {
              large: "wai7977",
              small: "wai7978"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              appearance: "ghost",
              size: "large"
            }, "wai7979"],
            [{
              appearance: "ghost",
              size: "small"
            }, "wai797a"]
          ]
        }),
        Na = (0, C.c)({
          defaultClassName: "wai797f",
          variantClassNames: {
            appearance: {
              dark: "wai797g",
              light: "wai797h",
              adaptive: "wai797i",
              ghost: "wai797j"
            },
            type: {
              pagination: "wai797k",
              progress: "wai797l",
              line: "wai797m"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              appearance: "ghost",
              type: "pagination"
            }, "wai797n"],
            [{
              appearance: "ghost",
              type: "line"
            }, "wai797o"]
          ]
        }),
        Ia = (0, C.c)({
          defaultClassName: "wai797p",
          variantClassNames: {
            appearance: {
              dark: "wai797q",
              light: "wai797r",
              adaptive: "wai797s",
              ghost: "wai797t"
            },
            type: {
              pagination: "wai797u",
              progress: "wai797v",
              line: "wai797w"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Ea = ({
          appearance: e,
          type: t,
          onClick: a,
          onBulletKeyDown: s,
          dotRef: n,
          fillRef: i
        }) => (0, r.jsx)("button", {
          className: "wai797b",
          onClick: a,
          onKeyDown: s,
          children: (0, r.jsx)("span", {
            ref: n,
            className: Rt()("wai797c", Na({
              appearance: e,
              type: t
            })),
            children: (0, r.jsx)("span", {
              ref: i,
              className: Ia({
                appearance: e,
                type: t
              })
            })
          })
        }),
        Ta = ({
          progress: e = 0
        }) => (0, r.jsx)("span", {
          className: "wai797d",
          children: (0, r.jsx)("span", {
            className: "wai797e",
            style: {
              width: `${e}%`
            }
          })
        }),
        Aa = (0, n.forwardRef)(function({
          type: e,
          appearance: t = "adaptive",
          pages: a,
          current: s,
          size: n,
          setDotRef: i,
          setFillRef: o,
          onBulletClick: l,
          onBulletKeyDown: c,
          testId: d,
          asChild: u,
          ...m
        }, _) {
          const f = u ? g.DX : "div",
            p = (0, k.v6)({
              "data-testid": d,
              className: Sa({
                appearance: t,
                size: n
              })
            }, m),
            h = 100 * s / a;
          return (0, r.jsxs)(f, {
            ref: _,
            ...p,
            children: [("pagination" === e || "line" === e) && (0, Ra.A)(a)?.map(a => (0, r.jsx)(Ea, {
              type: e,
              appearance: t,
              onClick: () => l(a),
              onBulletKeyDown: c?.(a),
              dotRef: e => i?.(e, a),
              fillRef: e => o?.(e, a)
            }, a)), "progress" === e && (0, r.jsx)(Ta, {
              progress: h
            })]
          })
        });
      var Ma = (0, C.c)({
        defaultClassName: "_1obdf6x2",
        variantClassNames: {
          variant: {
            default: "_1obdf6x3",
            full_height: "_1obdf6x4"
          }
        },
        defaultVariants: {
          variant: "default"
        },
        compoundVariants: []
      });
      const za = (0, n.createContext)({
          variant: "default",
          slides: null,
          defaultSlide: 0,
          autoPlay: !1,
          playOnInit: !1,
          autoScrollEnabled: !1,
          loop: !1,
          delay: 6e3,
          totalSlides: 0,
          slideRefs: null,
          inView: !1,
          emblaApi: null,
          intersectionRef: null,
          currentSlideRef: null,
          viewportRef: null,
          onBulletClick: null,
          onBulletKeyDown: null,
          setDotRef: null,
          setFillRef: null,
          isPausedRef: null
        }),
        Da = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          slides: a,
          variant: s,
          delay: o,
          slideRefs: l,
          loop: c = !0,
          defaultSlide: d,
          playOnInit: u,
          autoPlay: m,
          autoScrollEnabled: _,
          ...f
        }, p) {
          const h = (0, n.useRef)(null),
            b = (0, n.useRef)(null),
            [v, x] = (0, n.useState)({}),
            {
              ref: w,
              inView: y
            } = (0, i.useScrollVisibility)(1 / 3),
            {
              embla: C,
              viewportRef: R,
              currentSlideRef: S,
              onBulletClick: N,
              onBulletKeyDown: I,
              setDotRef: E,
              setFillRef: T,
              isPausedRef: A
            } = (({
              defaultSlide: e = 0,
              delay: t = 6e3,
              duration: a = 50,
              loop: r = !1,
              slideRefs: s,
              slides: i,
              totalSlides: o
            }) => {
              const l = .5,
                c = "power2.inOut",
                d = (0, n.useRef)(e),
                {
                  trackEvent: u
                } = G(),
                [m, _] = (0, n.useState)(!1),
                g = (0, n.useRef)(!1),
                f = (0, n.useRef)(!1),
                p = (0, n.useRef)([]),
                h = (0, n.useRef)([]),
                b = (0, n.useRef)(null),
                v = (0, n.useRef)(null),
                x = (0, n.useRef)(null),
                k = (0, ne.Ub)(j.f.mobile),
                w = (0, n.useRef)(null),
                y = (0, n.useRef)([]);
              x.current || (x.current = (0, va.A)({
                delay: 2 * t,
                stopOnInteraction: !1
              }));
              const [C, R] = (0, ye.A)({
                axis: "x",
                align: "start",
                startIndex: e,
                containScroll: "trimSnaps",
                watchDrag: m,
                active: !0,
                duration: a,
                loop: r
              }, [x.current, (0, je.J)()]);
              ya(R, y.current, {
                isMobile: k,
                loop: r
              });
              const S = (0, n.useCallback)((e, t) => {
                  p.current[t] = e
                }, []),
                N = (0, n.useCallback)((e, t) => {
                  h.current[t] = e
                }, []),
                I = (0, n.useCallback)(() => {
                  v.current?.kill(), v.current = null, g.current = !0
                }, []),
                E = (0, n.useCallback)(() => {
                  v.current?.pause(), g.current = !0
                }, []),
                T = (0, n.useCallback)(e => {
                  R && R.selectedScrollSnap() !== e && (d.current !== e && (d.current = e), R.scrollTo(e), x.current?.isPlaying() || (x.current?.stop(), E()), u({
                    event: "carousel_thumbnail_click",
                    position: e + 1,
                    position_max: R.slideNodes().length
                  }))
                }, [R, x, d, E]);
              (0, n.useEffect)(() => {
                const e = () => {
                  w.current && clearTimeout(w.current), f.current || (f.current = !0, E()), w.current = setTimeout(() => {
                    f.current = !1, v.current?.resume(), g.current = !1
                  }, 250)
                };
                return window.addEventListener("resize", e), () => {
                  window.removeEventListener("resize", e), w.current && clearTimeout(w.current)
                }
              }, []), (0, n.useEffect)(() => {
                if (!R) return;
                const e = R.slideNodes(),
                  a = [];
                for (let t = 0; t < e.length; t++) {
                  const e = s.current[t],
                    r = e ? wa(e) : xa();
                  a.push(r)
                }
                y.current = a;
                const r = () => {
                    x.current?.reset();
                    const e = R?.selectedScrollSnap();
                    d.current = e, (e => {
                      h?.current?.length && h.current.forEach((t, a) => {
                        t && t.parentElement && "BUTTON" === t.parentElement.tagName && (t.parentElement.disabled = a === e)
                      })
                    })(e), f.current || I(), a.forEach(e => {
                      const t = ka(e, k);
                      t?.enter?.progress(1), t?.exit?.progress(0)
                    }), h.current.forEach((t, a) => {
                      t && (a === e || St.os.to(t, {
                        width: 10,
                        duration: l,
                        ease: c
                      }))
                    }), p.current.forEach((t, a) => {
                      if (!t) return;
                      const r = a === e;
                      St.os.to(t, {
                        opacity: r ? 1 : 0,
                        duration: l,
                        ease: c
                      })
                    }), f.current ? v.current?.pause() : (e => {
                      const a = p.current[e],
                        r = h.current[e];
                      a && r && R && (p.current.forEach(e => {
                        e && St.os.to(e, {
                          width: "0%",
                          duration: l,
                          ease: c
                        })
                      }), g.current = !1, St.os.to(r, {
                        width: 80,
                        duration: l,
                        ease: c
                      }), St.os.fromTo(a, {
                        opacity: 0
                      }, {
                        opacity: 1,
                        duration: l,
                        ease: c
                      }), v.current = St.os.to(a, {
                        width: "100%",
                        duration: t / 1e3,
                        ease: "none",
                        onComplete: () => {
                          if (!R) return;
                          const e = R.selectedScrollSnap() + 1,
                            t = e >= R.scrollSnapList().length ? 0 : e;
                          R.scrollTo(t)
                        }
                      }))
                    })(e), R.slideNodes().forEach((t, a) => {
                      t.querySelectorAll("a, button, input, textarea, select, [tabindex]").forEach(t => {
                        a === e ? t.removeAttribute("tabindex") : t.setAttribute("tabindex", "-1")
                      })
                    }), window.postMessage({
                      source: "navColorTheme",
                      mode: i[e].navColor ?? "dark"
                    })
                  },
                  n = s.current?.map(e => e.background?.current).filter(Boolean);
                if (0 === n.length) return;
                let o = !1;
                const u = n.map(e => new Promise(t => {
                  if (e.complete) t();
                  else {
                    const a = () => {
                      e.removeEventListener("load", a), t()
                    };
                    e.addEventListener("load", a)
                  }
                }));
                return Promise.all(u).then(() => {
                  o || r()
                }), R.on("select", r), R.on("resize", r), () => {
                  o = !0, R.off("select", r), R.off("resize", r), a.forEach(e => {
                    e?.mobile.enter?.kill(), e?.mobile.exit?.kill(), e?.desktop.enter?.kill(), e?.desktop.exit?.kill()
                  })
                }
              }, [R, x, s, I, k]), (0, n.useEffect)(() => {
                if (!R) return;
                let e = 0;
                const t = () => {
                    e = R.selectedScrollSnap()
                  },
                  a = () => {
                    const t = R.selectedScrollSnap();
                    e !== t && u({
                      event: "carousel_swipe"
                    })
                  };
                return R.on("pointerDown", t), R.on("pointerUp", a), () => {
                  R.off("pointerDown", t), R.off("pointerUp", a)
                }
              }, [R]), (0, n.useEffect)(() => {
                _(o > 1)
              }, [o]), (0, n.useEffect)(() => {
                if (!R) return;
                const e = () => {
                  v.current?.resume(), g.current = !1
                };
                return R.on("autoplay:play", e), R.on("autoplay:stop", E), () => {
                  R.off("autoplay:play", e), R.off("autoplay:stop", E)
                }
              }, [R, E]);
              const A = (0, n.useCallback)(e => t => {
                "Enter" !== t.key && " " !== t.key || (t.preventDefault(), R?.scrollTo(e))
              }, [R]);
              return (0, n.useEffect)(() => {
                const e = e => {
                  R && "input" !== document.activeElement?.tagName.toLowerCase() && ("ArrowRight" === e.key && R.scrollNext(), "ArrowLeft" === e.key && R.scrollPrev())
                };
                return R?.rootNode().addEventListener("keydown", e), () => R?.rootNode()?.removeEventListener("keydown", e)
              }, [R]), (0, n.useEffect)(() => {
                const e = s.current[d.current].fade.current;
                if (!R || !e || "input" === document.activeElement?.tagName.toLowerCase()) return;
                const t = e => {
                  const t = e.shiftKey,
                    a = Array.from((e => {
                      const t = s.current[e],
                        a = [...t.fade.current?.querySelectorAll("a[href], button:not(disabled), input:not(disabled), select, textarea, [tabindex]:not([tabindex='-1'])") || [], b?.current];
                      return t ? a : []
                    })(d.current));
                  if (0 === a.length) return;
                  const r = a[0],
                    n = a[a.length - 1];
                  if (!t && document.activeElement === n) {
                    if (1 === R?.slideNodes().length) return;
                    e.preventDefault();
                    const t = h.current[d.current + 1];
                    t && t.focus()
                  }
                  if (t && document.activeElement === r) {
                    if (1 === R?.slideNodes().length || 0 === d.current) return;
                    e.preventDefault();
                    const t = h.current[d.current];
                    t && t.focus()
                  }
                };
                return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
              }, [R]), {
                currentSlideRef: d,
                delay: t,
                embla: R,
                isPausedRef: g,
                viewportRef: C,
                setDotRef: N,
                setFillRef: S,
                playPauseRef: b,
                onBulletClick: T,
                onBulletKeyDown: A
              }
            })({
              defaultSlide: d,
              delay: o,
              loop: c,
              slideRefs: l,
              slides: a,
              totalSlides: a.length
            });
          (({
            embla: e,
            slides: t,
            target: a = ja(),
            enabled: r = !0,
            defaultSlideColor: s = "#000"
          }) => {
            const i = (0, n.useRef)([]),
              o = (0, n.useRef)([]);
            (0, n.useEffect)(() => {
              if (!(e && r && t?.length && a)) return;
              const n = () => {
                  i.current = e.scrollSnapList(), o.current = t?.map(e => [e.topGradientColor || s, e.bottomGradientColor || s]), c()
                },
                l = (e, t, a, r, s) => {
                  const n = {
                    "--leftSlideTopColor": e,
                    "--rightSlideTopColor": t,
                    "--leftSlideBottomColor": a,
                    "--rightSlideBottomColor": r,
                    "--mixPercent": `${s}%`
                  };
                  window.postMessage({
                    source: "dynamicSlideColors",
                    values: n
                  }, "*")
                },
                c = () => {
                  const t = Math.min(Math.max(e?.scrollProgress() ?? 0, 0), 1),
                    a = i.current,
                    r = Math.max(a.findIndex(e => e > t), 0),
                    n = r - 1 >= 0 ? r - 1 : a.length - 1,
                    [c, d] = o.current[r] ?? s,
                    [u, m] = o.current[n] ?? s,
                    _ = Math.max(a[n] ?? 0, 0),
                    g = a[1] ?? 1,
                    f = Math.round((t - _) / g * 100);
                  l(u, c, m, d, f)
                };
              if (1 !== t?.length) return c(), e.on("scroll", c), e.on("reInit", c), e.on("slidesChanged", n), n(), () => {
                e.off("scroll", c), e.off("reInit", c), e.off("slidesChanged", n)
              };
              (() => {
                const [e, t] = o.current[0] ?? [s, s];
                l(e, e, t, t, 0)
              })(), n()
            }, [r, e, t.length, s])
          })({
            embla: C,
            slides: a
          }), (({
            backgroundRef: e,
            contentRef: t
          }) => {
            (0, n.useLayoutEffect)(() => {
              const e = document.getElementById("main");
              if (!e) return;
              const t = "static" === getComputedStyle(e).position,
                a = e.style.position,
                r = e.style.zIndex;
              return t && (e.style.position = "relative"), e.style.zIndex = "1", () => {
                t && (e.style.position = a), e.style.zIndex = r
              }
            }, []), (0, Nt.L)(() => {
              const t = e.current;
              if (!t) return;
              const a = t.parentElement;
              St.os.to(t, {
                autoAlpha: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: a,
                  start: "top bottom",
                  end: "top top",
                  scrub: !0,
                  invalidateOnRefresh: !0
                },
                overwrite: "auto"
              }), St.os.to(t, {
                autoAlpha: 0,
                ease: "none",
                scrollTrigger: {
                  trigger: a,
                  start: "top top-=10%",
                  end: "bottom 25%",
                  scrub: !0,
                  invalidateOnRefresh: !0
                },
                overwrite: "auto"
              })
            }, {
              dependencies: [e]
            }), (0, Nt.L)(() => {
              const e = t.current;
              if (!e) return;
              const a = e.parentElement;
              St.os.set(e, {
                opacity: 1
              }), St.os.to(e, {
                opacity: 0,
                ease: "none",
                scrollTrigger: {
                  trigger: a,
                  start: "bottom 75%",
                  end: "bottom top",
                  scrub: !0,
                  invalidateOnRefresh: !0
                }
              })
            }, {
              dependencies: [t]
            })
          })({
            backgroundRef: h,
            contentRef: b
          }), (0, n.useEffect)(() => {
            const e = e => {
              e.origin === window.origin && "dynamicSlideColors" === e.data.source && x(e.data.values)
            };
            return window.addEventListener("message", e), () => {
              window.removeEventListener("message", e)
            }
          }, []);
          const M = t ? g.DX : Ae,
            z = (0, k.v6)({
              className: "_1obdf6x0"
            }, f);
          return (0, r.jsx)(za.Provider, {
            value: {
              slides: a,
              defaultSlide: d,
              autoPlay: m,
              playOnInit: u,
              autoScrollEnabled: _,
              loop: c,
              variant: s,
              delay: o,
              slideRefs: l,
              emblaApi: C,
              inView: y,
              currentSlideRef: S,
              intersectionRef: w,
              isPausedRef: A,
              viewportRef: R,
              onBulletClick: N,
              onBulletKeyDown: I,
              setDotRef: E,
              setFillRef: T
            },
            children: (0, r.jsxs)(M, {
              ref: p,
              ...z,
              children: [(0, r.jsx)("div", {
                ref: h,
                className: "_1obdf6x5",
                "aria-hidden": !0,
                style: v
              }), (0, r.jsx)("div", {
                ref: b,
                children: e
              })]
            })
          })
        }),
        Fa = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          ...a
        }, s) {
          const {
            inView: i,
            intersectionRef: o,
            viewportRef: l
          } = (0, n.useContext)(za), c = (0, ne.UP)(l, s), d = t ? g.DX : Fe;
          return (0, r.jsx)("div", {
            ref: o,
            children: (0, r.jsx)(d, {
              ref: c,
              appearance: "ghost",
              className: "_1obdf6x1",
              "data-disabled": String(!i),
              ...a,
              children: e
            })
          })
        }),
        Pa = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          ...a
        }, s) {
          const {
            variant: i
          } = (0, n.useContext)(za), o = (0, k.v6)({
            className: Ma({
              variant: i
            })
          }, a), l = t ? g.DX : Pe;
          return (0, r.jsx)(l, {
            ref: s,
            ...o,
            children: e
          })
        }),
        La = (0, n.forwardRef)(function({
          label: e,
          asChild: t,
          ...a
        }, s) {
          const {
            emblaApi: i,
            inView: l,
            currentSlideRef: d,
            slides: u,
            variant: m,
            setDotRef: _,
            setFillRef: f,
            onBulletClick: p,
            onBulletKeyDown: h
          } = (0, n.useContext)(za), b = !l, [v, x] = (0, n.useState)(!1), w = !v && !b, y = u.length, {
            formatMessage: C
          } = (0, o.useIntl)(), {
            trackEvent: R
          } = G(), S = (0, ne.Ub)(j.f.mobile), N = t ? g.DX : "div", I = (0, k.v6)({
            className: "_1obdf6xd"
          }, a), E = (0, n.useCallback)(() => {
            x(e => (R({
              event: "cta_other",
              text: e ? "toggle play" : "toggle pause"
            }), !e))
          }, []);
          return (0, n.useEffect)(() => {
            const e = i?.plugins?.()?.autoplay;
            e && (w ? e.play() : e.stop())
          }, [i, w]), (0, n.useEffect)(() => {
            if (!i) return;
            const e = () => {
                b || x(!1)
              },
              t = () => {};
            return i.on("select", e), i.on("autoplay:play", e), i.on("autoplay:stop", t), () => {
              i.off("select", e), i.off("autoplay:play", e), i.off("autoplay:stop", t)
            }
          }, [i, b]), (0, r.jsx)(N, {
            ref: s,
            ...I,
            children: (0, r.jsxs)("div", {
              className: "_1obdf6xg",
              "data-disabled": String(b),
              children: [y > 1 && (0, r.jsxs)("div", {
                className: "_1obdf6xe",
                children: [(0, r.jsx)(c.IconButton, {
                  className: "_1obdf6x6",
                  icon: w ? "Pause" : "Play",
                  label: C(w ? Ca.hero_carousel_pause_button : Ca.hero_carousel_play_button),
                  size: "SM",
                  appearance: "ghost",
                  onPress: E
                }), (0, r.jsx)(Aa, {
                  type: S ? "line" : "pagination",
                  size: "large",
                  appearance: "ghost",
                  current: d?.current,
                  pages: y,
                  onBulletClick: p,
                  onBulletKeyDown: h,
                  setDotRef: _,
                  setFillRef: f
                })]
              }), !S && e && (0, r.jsxs)("div", {
                className: "_1obdf6xh",
                children: [(0, r.jsx)(c.Label, {
                  size: "XS",
                  appearance: "bold",
                  className: "_1obdf6xi",
                  children: "full_height" === m ? C(Ca.hero_carousel_scroll_down_label) : void 0
                }), (0, r.jsx)(ba.ArrowDown, {
                  size: "MD",
                  label: e
                })]
              })]
            })
          })
        });
      var Wa = "var(--uw9ioi2)",
        Ga = "var(--uw9ioi3)",
        Ba = "var(--uw9ioi1)",
        qa = (0, C.c)({
          defaultClassName: "uw9ioie",
          variantClassNames: {
            invisible: {
              true: "uw9ioif"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Oa = ((0, C.c)({
          defaultClassName: "uw9ioio",
          variantClassNames: {
            appearance: {
              link: "uw9ioip",
              danger: "uw9ioiq",
              information: "uw9ioir",
              primary: "uw9iois",
              secondary: "uw9ioit",
              tertiary: "uw9ioiu",
              ghost: "uw9ioiv",
              accent: "uw9ioiw"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }), (0, C.c)({
          defaultClassName: "uw9ioi6",
          variantClassNames: {
            size: {
              SM: "uw9ioi7",
              MD: "uw9ioi8",
              LG: "uw9ioi9",
              XL: "uw9ioia"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }));
      const Va = (0, n.forwardRef)(function({
          children: e,
          bottomGradientColor: t,
          horizontalBackgroundPosition: a,
          verticalBackgroundPosition: s,
          asChild: n,
          testId: i,
          size: o = "MD",
          ...l
        }, c) {
          const d = n ? g.DX : "div",
            u = (0, k.v6)({
              "data-testid": i,
              className: Oa({
                size: o
              }),
              style: (0, y.DI)({
                [Ba]: t,
                [Wa]: a,
                [Ga]: s
              })
            }, l);
          return (0, r.jsx)(d, {
            ref: c,
            ...u,
            children: e
          })
        }),
        $a = (0, n.forwardRef)(function({
          src: e,
          ...t
        }, a) {
          const s = (0, ne.Ub)("(max-width: 500px) or (max-aspect-ratio: 0.9)"),
            {
              isUltraWideLandscape: i
            } = (() => {
              const e = (0, n.useCallback)(() => {
                  const e = window.innerWidth / window.innerHeight;
                  return [e >= 21 / 9, e <= 9 / 21]
                }, []),
                [t, a] = e(),
                [r, s] = (0, n.useState)(t),
                [i, o] = (0, n.useState)(a);
              return (0, n.useEffect)(() => {
                const t = () => {
                  const [t, a] = e();
                  s(t), o(a)
                };
                return window.addEventListener("resize", t), () => window.removeEventListener("resize", t)
              }, []), {
                isUltraWideLandscape: r,
                isUltraTallPortrait: i
              }
            })(),
            o = (0, k.v6)({
              className: "uw9ioic",
              src: e
            }, t);
          return (0, r.jsx)(It, {
            ref: a,
            ...o,
            loading: "eager",
            context: s ? "2:3" : i ? "32:9" : "21:9"
          })
        }),
        Ua = (0, n.forwardRef)(function({
          invisible: e,
          children: t,
          asChild: a,
          testId: s,
          ...n
        }, i) {
          const o = a ? g.DX : "div",
            l = (0, k.v6)({
              "data-testid": s,
              className: qa({
                invisible: e
              })
            }, n);
          return (0, r.jsx)("div", {
            className: "uw9ioid _1betujy6 _1betujy5",
            children: (0, r.jsx)(o, {
              ref: i,
              ...l,
              children: t
            })
          })
        }),
        Xa = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...s
        }, n) {
          const i = t ? g.DX : "div",
            o = (0, k.v6)({
              "data-testid": a,
              className: "uw9ioig"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        Ha = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...s
        }, n) {
          const i = t ? g.DX : c.Label,
            o = (0, k.v6)({
              "data-testid": a,
              className: "uw9ioih foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd6"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        Ka = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...s
        }, n) {
          const i = t ? g.DX : "h2",
            o = (0, k.v6)({
              "data-testid": a,
              className: "uw9ioii foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd5"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        Qa = (0, n.forwardRef)(function({
          asChild: e,
          src: t,
          ...a
        }, s) {
          const n = e ? g.DX : "div",
            i = (0, k.v6)({
              className: "uw9ioij"
            }, a);
          return (0, r.jsx)(n, {
            ref: s,
            ...i,
            children: (0, r.jsx)(ce, {
              src: t,
              alt: t?.altText ?? "",
              className: "uw9ioik",
              style: t?.source?.width && t?.source?.height ? {
                aspectRatio: `${t.source.width}/${t.source.height}`
              } : {},
              loading: "eager"
            })
          })
        }),
        Ya = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...s
        }, n) {
          const i = t ? g.DX : "div",
            o = (0, k.v6)({
              "data-testid": a,
              className: "uw9ioin"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        Za = ({
          slideRefs: e,
          slide: t,
          currentSlideIndex: a
        }) => {
          const {
            isPausedRef: s,
            emblaApi: i
          } = (0, n.useContext)(za), o = () => {
            s.current || i?.plugins().autoplay.stop()
          };
          return (0, r.jsxs)(Va, {
            bottomGradientColor: t.bottomGradientColor,
            size: ha(t.title),
            children: [(0, r.jsx)($a, {
              ref: e.current[a].background,
              src: t.background
            }), (0, r.jsxs)(Ua, {
              ref: e.current[a].content,
              invisible: 0 === a,
              children: [(0, r.jsx)(Qa, {
                ref: e.current[a].logo,
                src: t.logo
              }), (0, r.jsxs)(Xa, {
                ref: e.current[a].heading,
                children: [t.eyebrow && (0, r.jsx)(Ha, {
                  size: "LG",
                  appearance: "bold",
                  children: t.eyebrow
                }), t.title && (0, r.jsx)(Ka, {
                  children: t.title
                })]
              }), t?.ctasCollection?.items && (0, r.jsx)(Ya, {
                ref: e?.current[a]?.ctas,
                children: t?.ctasCollection?.items?.map(e => (0, r.jsx)(ra, {
                  block: e,
                  size: "MD",
                  onClick: o
                }, e.sys.id))
              })]
            })]
          })
        },
        Ja = (0, n.forwardRef)(function({
          slides: e,
          size: t,
          delay: a = 6e3,
          defaultSlide: s = 0,
          loop: i = !0,
          ...o
        }, l) {
          const {
            trackEvent: c
          } = G(), {
            emblaApi: d,
            inView: u
          } = (0, n.useContext)(za), m = (0, n.useRef)(e?.map(() => ({
            background: (0, n.createRef)(),
            content: (0, n.createRef)(),
            logo: (0, n.createRef)(),
            heading: (0, n.createRef)(),
            ctas: (0, n.createRef)(),
            fade: (0, n.createRef)()
          })));
          return (0, n.useEffect)(() => {
            const t = t => {
              const a = t.selectedScrollSnap();
              u && c({
                event: "banner_item_impression",
                card_id: e[a].sys.id,
                card_name: e[a].title,
                position: a + 1,
                position_max: e.length
              }, e[a])
            };
            return d && (t(d), d?.on("select", t)), () => {
              d?.off("select", t)
            }
          }, [d]), e?.length ? (0, r.jsxs)(Da, {
            ref: l,
            slides: e,
            variant: t,
            tabIndex: -1,
            delay: a,
            slideRefs: m,
            defaultSlide: s,
            onNext: () => {
              c({
                event: "carousel_next"
              })
            },
            onPrev: () => {
              c({
                event: "carousel_previous"
              })
            },
            onSwipe: () => {
              c({
                event: "carousel_swipe"
              })
            },
            loop: i,
            ...o,
            children: [(0, r.jsx)(Fa, {
              children: e?.map((e, t) => (0, r.jsx)(Pa, {
                ref: m?.current[t]?.fade,
                variant: "full",
                children: (0, r.jsx)(Za, {
                  currentSlideIndex: t,
                  slideRefs: m,
                  slide: e
                })
              }, t))
            }), e?.length > 1 && (0, r.jsx)(La, {})]
          }) : null
        }),
        er = ({
          block: e
        }) => {
          const {
            useTrackPageSectionImpression: t
          } = G(), {
            ref: a
          } = t();
          return e ? (0, r.jsx)(Ja, {
            ref: a,
            size: e.size,
            slides: e.slidesCollection?.items
          }) : null
        },
        tr = "WwwFeaturedContentCarousel";
      var ar = (0, C.c)({
        defaultClassName: "_1cw0rgk3",
        variantClassNames: {
          textAlignment: {
            left: "_1cw0rgk4",
            center: "_1cw0rgk5",
            right: "_1cw0rgk6"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      const rr = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...s
        }, n) {
          const i = a ? g.DX : "div",
            o = (0, k.v6)({
              "data-testid": t,
              className: "_1cw0rgk0"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        sr = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...s
        }, n) {
          const i = a ? g.DX : "div",
            o = (0, k.v6)({
              "data-testid": t,
              className: "_1cw0rgk1"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        nr = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          textAlignment: s = "left",
          ...n
        }, i) {
          const o = a ? g.DX : "div",
            l = (0, k.v6)({
              "data-testid": t,
              className: ar({
                textAlignment: s
              })
            }, n);
          return (0, r.jsx)(o, {
            ref: i,
            ...l,
            children: e
          })
        }),
        ir = "WwwImageBlock";
      var or = a(79142),
        lr = (0, C.c)({
          defaultClassName: "_1scye89e",
          variantClassNames: {
            size: {
              small: "_1scye89f",
              medium: "_1scye89g",
              large: "_1scye89h",
              xlarge: "_1scye89i"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        cr = (0, C.c)({
          defaultClassName: "_1scye899",
          variantClassNames: {
            size: {
              small: "_1scye89a",
              medium: "_1scye89b",
              large: "_1scye89c",
              xlarge: "_1scye89d"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        dr = (0, C.c)({
          defaultClassName: "_1scye89y",
          variantClassNames: {
            size: {
              small: "_1scye89z",
              medium: "_1scye8910",
              large: "_1scye8911",
              xlarge: "_1scye8912"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ur = (0, C.c)({
          defaultClassName: "_1scye89r",
          variantClassNames: {
            theme: {
              dark: "_1scye89s",
              light: "_1scye89t"
            },
            size: {
              small: "_1scye89u",
              medium: "_1scye89v",
              large: "_1scye89w",
              xlarge: "_1scye89x"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        mr = "var(--_1scye890)",
        _r = "var(--_1scye891)",
        gr = "var(--_1scye892)",
        fr = (0, C.c)({
          defaultClassName: "_1scye896",
          variantClassNames: {
            interactive: {
              false: "_1scye897",
              true: "_1scye898"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        pr = (0, C.c)({
          defaultClassName: "_1scye893",
          variantClassNames: {
            gradient: {
              linear: "_1scye894",
              radial: "_1scye895"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        hr = (0, C.c)({
          defaultClassName: "_1scye89k",
          variantClassNames: {
            theme: {
              light: "_1scye89l",
              dark: "_1scye89m"
            },
            size: {
              small: "_1scye89n",
              medium: "_1scye89o",
              large: "_1scye89p",
              xlarge: "_1scye89q"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        br = (0, C.c)({
          defaultClassName: "_1hsn8lx0",
          variantClassNames: {
            size: {
              SM: "_1hsn8lx1",
              MD: "_1hsn8lx2",
              LG: "_1hsn8lx3",
              XL: "_1hsn8lx4",
              auto: "_1hsn8lx5"
            }
          },
          defaultVariants: {
            size: "MD"
          },
          compoundVariants: []
        });
      const vr = (0, n.forwardRef)(function({
          image: e,
          size: t = "auto",
          testId: a,
          asChild: s,
          ...n
        }, i) {
          if (!e) return;
          const o = s ? g.DX : "div",
            l = (0, k.v6)({
              "data-testid": a,
              className: br({
                size: t
              })
            }, n);
          return (0, r.jsx)(o, {
            ref: i,
            ...l,
            children: (0, r.jsx)(ce, {
              src: e,
              className: "_1hsn8lx6"
            })
          })
        }),
        xr = (0, n.createContext)({
          size: void 0,
          interactive: !1,
          gradientColor: void 0,
          theme: "dark"
        }),
        kr = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          size: s = "medium",
          gradientColor: n,
          gradientType: i = "linear",
          interactive: o = !1,
          theme: l = "dark",
          ...c
        }, d) {
          const u = ((e = "") => {
              if (!e || "string" != typeof e) return null;
              let t = e.replace("#", "");
              return 3 === t.length && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), {
                r: parseInt(t.substring(0, 2), 16).toString(),
                g: parseInt(t.substring(2, 4), 16).toString(),
                b: parseInt(t.substring(4, 6), 16).toString()
              }
            })(n),
            m = u && (0, y.DI)({
              [mr]: u.r,
              [gr]: u.b,
              [_r]: u.g
            }),
            _ = a ? g.DX : "div",
            f = (0, k.v6)({
              "data-testid": t,
              className: pr({
                gradient: i
              }),
              style: {
                ...m
              }
            }, c);
          return (0, r.jsx)(xr.Provider, {
            value: {
              size: s,
              gradientColor: n,
              interactive: o,
              theme: l
            },
            children: (0, r.jsx)(_, {
              ref: d,
              ...f,
              children: e
            })
          })
        }),
        wr = (0, n.forwardRef)(function({
          testId: e,
          asChild: t,
          children: a,
          ...s
        }, i) {
          const {
            interactive: o
          } = (0, n.useContext)(xr), l = t ? g.DX : "div", c = (0, k.v6)({
            "data-testid": e,
            className: fr({
              interactive: o
            })
          }, s);
          return (0, r.jsx)(l, {
            ref: i,
            ...c,
            children: a
          })
        }),
        yr = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...s
        }, i) {
          const o = (0, n.useContext)(xr);
          if (!o) return;
          const {
            size: l
          } = o, c = a ? g.DX : "div", d = (0, k.v6)({
            "data-testid": t,
            className: cr({
              size: l
            })
          }, s);
          return (0, r.jsx)(c, {
            ref: i,
            ...d,
            children: e
          })
        }),
        jr = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, s) {
          const i = (0, n.useContext)(xr);
          if (!i) return;
          const {
            size: o
          } = i, l = (0, k.v6)({
            "data-testid": t,
            className: lr({
              size: o
            })
          }, a);
          return (0, r.jsx)("span", {
            ref: s,
            ...l,
            children: e
          })
        }),
        Cr = (0, n.forwardRef)(function({
          ...e
        }, t) {
          const a = (0, k.v6)({
            className: "_1scye89j"
          }, e);
          return (0, r.jsx)(vr, {
            ref: t,
            ...a
          })
        }),
        Rr = (0, n.forwardRef)(function({
          children: e,
          level: t = 5,
          testId: a,
          ...s
        }, i) {
          const o = (0, n.useContext)(xr);
          if (!o) return;
          const {
            size: d,
            theme: u
          } = o, m = (0, k.v6)({
            "data-testid": a,
            className: hr({
              theme: u,
              size: d
            })
          }, s);
          return (0, r.jsx)(l.RsgMdTextComponent, {
            markdown: e,
            rsgRichTextOptions: {
              renderNode: {
                [or.BLOCKS.HEADING_1]: (e, a) => (0, r.jsx)(c.Heading, {
                  level: t,
                  ref: i,
                  ...m,
                  children: a
                })
              }
            }
          })
        }),
        Sr = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...s
        }, i) {
          const o = (0, n.useContext)(xr);
          if (!o) return;
          const {
            size: l
          } = o, c = a ? g.DX : "div", d = (0, k.v6)({
            "data-testid": t,
            className: ur({
              size: l
            })
          }, s);
          return (0, r.jsx)(c, {
            ref: i,
            ...d,
            children: e
          })
        }),
        Nr = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, s) {
          const i = (0, n.useContext)(xr);
          if (!i) return;
          const {
            size: o,
            theme: l
          } = i, d = (0, b.m)(l, "normal"), u = (0, k.v6)({
            "data-testid": t,
            className: Rt()(d, dr({
              size: o
            }))
          }, a);
          return (0, r.jsx)(c.Button, {
            ref: s,
            ...u,
            children: e
          })
        });
      var Ir = (0, C.c)({
        defaultClassName: "_120g2g73",
        variantClassNames: {
          appearance: {
            link: "_120g2g74",
            accent: "_120g2g75",
            primary: "_120g2g76",
            secondary: "_120g2g77",
            tertiary: "_120g2g78",
            ghost: "_120g2g79",
            information: "_120g2g7a",
            danger: "_120g2g7b"
          }
        },
        defaultVariants: {
          appearance: "primary"
        },
        compoundVariants: []
      });
      const Er = "WwwImageCard",
        Tr = (0, o.defineMessages)({
          image_carousel_screen_reader_announcer_label: {
            id: "image_carousel_screen_reader_announcer_label",
            description: "Image carousel screen reader announcer label",
            defaultMessage: "Now showing {selectedTab} of {total}"
          }
        });
      var Ar = "var(--iast650)",
        Mr = (0, C.c)({
          defaultClassName: "iast655",
          variantClassNames: {
            isActive: {
              true: "iast656",
              false: "iast657"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        zr = (0, C.c)({
          defaultClassName: "iast659",
          variantClassNames: {
            overflowLeft: {
              true: "iast65a"
            },
            overflowRight: {
              true: "iast65b"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              overflowLeft: !0,
              overflowRight: !0
            }, "iast65c"]
          ]
        });
      const Dr = (0, n.createContext)({
          theme: "light",
          items: null,
          activeIndex: 0,
          focusedIndex: 0,
          setActiveIndex: null,
          setFocusedIndex: null
        }),
        Fr = (0, n.forwardRef)(function({
          theme: e = "light",
          items: t,
          children: a,
          asChild: s,
          testId: i,
          ...l
        }, c) {
          const [d, u] = (0, n.useState)(0), [m, _] = (0, n.useState)(0), {
            formatMessage: f
          } = (0, o.useIntl)(), p = (0, n.useMemo)(() => ({
            theme: e,
            items: t,
            activeIndex: d,
            focusedIndex: m,
            setActiveIndex: u,
            setFocusedIndex: _
          }), [e, t, d, m]), h = (0, b.m)(e), v = s ? g.DX : "div", x = (0, k.v6)({
            className: Rt()("iast651", h),
            "data-testid": i
          }, l);
          return (0, r.jsxs)(Dr.Provider, {
            value: p,
            children: [(0, r.jsx)(v, {
              ref: c,
              ...x,
              children: a
            }), (0, r.jsx)(Vr, {
              total: t.length,
              announcer: (e, t) => f(Tr.image_carousel_screen_reader_announcer_label, {
                selectedTab: `${e+1}`,
                total: `${t}`
              })
            })]
          })
        }),
        Pr = (0, n.createContext)(null),
        Lr = (0, n.forwardRef)(function({
          children: e,
          ...t
        }, a) {
          const {
            activeIndex: s,
            setActiveIndex: i,
            focusedIndex: o,
            setFocusedIndex: l,
            theme: c
          } = (0, n.useContext)(Dr), {
            containerRef: d,
            buttonRefs: u,
            highlight: m,
            overflow: _
          } = ((e = 0, t = []) => {
            const a = (0, n.useRef)(null),
              r = (0, n.useRef)([]),
              [s, i] = (0, n.useState)({
                left: 0,
                width: 0
              }),
              [o, l] = (0, n.useState)({
                left: !1,
                right: !1
              }),
              c = (0, n.useCallback)(() => {
                const t = a.current,
                  s = r.current[e];
                if (!t || !s) return;
                const n = s.offsetLeft,
                  o = s.offsetWidth;
                i(e => e.left === n && e.width === o ? e : {
                  left: n,
                  width: o
                })
              }, [e]);
            return (0, n.useLayoutEffect)(() => {
              const e = () => requestAnimationFrame(c),
                t = "function" == typeof document.fonts?.ready?.then ? document.fonts.ready : void 0;
              t ? t.then(e) : e()
            }, [e, c, ...t]), (0, n.useEffect)(() => {
              const t = r.current[e];
              if (!t) return;
              const a = new ResizeObserver(() => c());
              return a.observe(t), () => a.disconnect()
            }, [e, c]), (0, n.useEffect)(() => {
              const e = a.current;
              if (!e) return;
              const t = () => {
                l({
                  left: e.scrollLeft > 0,
                  right: e.scrollWidth - e.clientWidth > 1 + e.scrollLeft
                })
              };
              t();
              const r = new ResizeObserver(t);
              return r.observe(e), e.addEventListener("scroll", t), () => {
                r.disconnect(), e.removeEventListener("scroll", t)
              }
            }, []), {
              containerRef: a,
              buttonRefs: r,
              highlight: s,
              overflow: o,
              remeasure: c
            }
          })(s, [e]), {
            onKeyDown: g
          } = (({
            count: e,
            focusedIndex: t,
            setFocusedIndex: a,
            setActiveIndex: r,
            buttonRefs: s
          }) => ({
            onKeyDown: (0, n.useCallback)(n => {
              if (!(e <= 0)) switch (n.key) {
                case "ArrowRight": {
                  n.preventDefault();
                  const r = (t + 1) % e;
                  a(r), s.current[r]?.focus(), s.current[r]?.scrollIntoView({
                    behavior: "smooth",
                    inline: "center",
                    block: "nearest"
                  });
                  break
                }
                case "ArrowLeft": {
                  n.preventDefault();
                  const r = (t - 1 + e) % e;
                  a(r), s.current[r]?.focus(), s.current[r]?.scrollIntoView({
                    behavior: "smooth",
                    inline: "center",
                    block: "nearest"
                  });
                  break
                }
                case "Home":
                  n.preventDefault(), a(0), s.current[0]?.focus();
                  break;
                case "End":
                  n.preventDefault(), a(e - 1), s.current[e - 1]?.focus();
                  break;
                case "Enter":
                case " ":
                  n.preventDefault(), r(t), a(t)
              }
            }, [e, t, a, r, s])
          }))({
            count: n.Children.count(e),
            focusedIndex: o,
            setFocusedIndex: l,
            setActiveIndex: i,
            buttonRefs: u
          }), f = (e, t) => {
            u.current[e] = t
          }, p = (e, t) => {
            if (!l || !i) return;
            i(e), l(e);
            const a = t ?? u.current[e];
            a && (a.focus(), "function" == typeof a.scrollIntoView && a.scrollIntoView({
              behavior: "smooth",
              inline: "center",
              block: "nearest"
            }))
          }, h = (0, n.useMemo)(() => ({
            setButtonRef: f,
            onTabKeyDown: g,
            activateIndex: p
          }), [g]), v = (0, b.m)(c), x = (0, ne.UP)(d, a), w = (0, k.v6)({
            className: Rt()(zr({
              overflowLeft: _.left,
              overflowRight: _.right
            }), v),
            role: "tablist"
          }, t);
          return (0, r.jsx)("div", {
            className: Rt()("iast658", v),
            children: (0, r.jsxs)("div", {
              ref: x,
              ...w,
              onKeyDown: g,
              children: [(0, r.jsx)("div", {
                className: Rt()("iast65e", v),
                style: {
                  transform: `translateX(calc(${m.left}px - ${y.LU.global.spacing.gap[50]}))`,
                  width: m.width
                }
              }), (0, r.jsx)(Pr.Provider, {
                value: h,
                children: e
              })]
            })
          })
        }),
        Wr = (0, n.forwardRef)(function({
          children: e,
          index: t,
          onClick: a,
          onKeyDown: s,
          ...i
        }, o) {
          const {
            activeIndex: l,
            focusedIndex: c,
            theme: d
          } = (0, n.useContext)(Dr), {
            setButtonRef: u,
            onTabKeyDown: m,
            activateIndex: _
          } = (() => {
            const e = (0, n.useContext)(Pr);
            if (!e) throw new Error("ImageCarousel.Tab must be used inside ImageCarousel.Tabs");
            return e
          })(), g = l === t, f = c === t, p = (0, b.m)(d), h = (0, ne.UP)(e => u(t, e), o), v = (0, k.v6)({
            className: Rt()("iast65d foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdh", p)
          }, i);
          return (0, r.jsx)("button", {
            ref: h,
            ...v,
            role: "tab",
            type: "button",
            tabIndex: f ? 0 : -1,
            "aria-selected": g,
            "data-selected": g,
            onClick: e => {
              a?.(e), _(t, e.currentTarget)
            },
            onKeyDown: e => {
              s?.(e), m(e)
            },
            children: e
          })
        }),
        Gr = (0, n.memo)(Wr, (e, t) => e.children === t.children && e.index === t.index && e.appearance === t.appearance),
        Br = (0, n.forwardRef)(function({
          children: e,
          mobileAspectRatio: t = "1/1",
          desktopAspectRatio: a = "16/9",
          ...s
        }, n) {
          const i = (0, ne.Ub)(j.f.mobile),
            o = (0, k.v6)({
              className: "iast652",
              style: (0, y.DI)({
                [Ar]: i ? t : a
              })
            }, s);
          return (0, r.jsx)("div", {
            ref: n,
            ...o,
            children: e
          })
        }),
        qr = (0, n.forwardRef)(function({
          index: e,
          children: t,
          ...a
        }, s) {
          const {
            theme: i,
            activeIndex: o
          } = (0, n.useContext)(Dr), l = o === e, c = (0, b.m)(i), d = (0, k.v6)({
            className: Rt()(Mr({
              isActive: l
            }), c),
            role: "tabpanel",
            hidden: !l,
            "aria-hidden": !l
          }, a);
          return (0, r.jsx)("div", {
            ref: s,
            ...d,
            children: t
          })
        }),
        Or = (0, n.memo)(qr),
        Vr = ({
          total: e,
          announcer: t
        }) => {
          const {
            activeIndex: a
          } = (0, n.useContext)(Dr);
          return e <= 0 || !a ? null : (0, r.jsx)(g.s6, {
            "aria-live": "polite",
            "aria-atomic": "true",
            children: t(a, e)
          })
        },
        $r = ({
          index: e,
          children: t
        }) => {
          const {
            activeIndex: a
          } = (0, n.useContext)(Dr), s = a !== e ? -1 : void 0;
          return (0, r.jsx)(g.DX, {
            tabIndex: s,
            children: t
          })
        },
        Ur = "WwwImageCarousel";
      var Xr = a(49292);
      const Hr = (0, n.createContext)({
          imagesLoaded: !1,
          setImagesLoaded: () => {}
        }),
        Kr = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...s
        }, i) {
          const [o, l] = (0, n.useState)(!1), c = a ? g.DX : "section", d = (0, k.v6)({
            "data-testid": t,
            className: "b8qqdy0"
          }, s);
          return (0, r.jsx)(Hr.Provider, {
            value: {
              imagesLoaded: o,
              setImagesLoaded: l
            },
            children: (0, r.jsx)(c, {
              ref: i,
              ...d,
              children: e
            })
          })
        }),
        Qr = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...s
        }, n) {
          const i = a ? g.DX : "div",
            o = (0, k.v6)({
              "data-testid": t,
              className: "b8qqdy1"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        Yr = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...s
        }, n) {
          const i = a ? g.DX : "div",
            o = (0, k.v6)({
              "data-testid": t,
              className: "b8qqdy7 _1betujy6 _1betujy5"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        Zr = (0, n.forwardRef)(function({
          children: e,
          delay: t = 0,
          speed: a = .2
        }, s) {
          const [n] = (0, ye.A)({
            loop: !0,
            dragFree: !0,
            startIndex: 0,
            watchDrag: !1,
            containScroll: "keepSnaps"
          }, [(0, Xr.A)({
            playOnInit: !0,
            speed: a,
            direction: "forward",
            startDelay: t,
            stopOnInteraction: !1,
            stopOnMouseEnter: !1,
            stopOnFocusIn: !1,
            rootNode: null
          })]), i = (0, ne.UP)(n, s);
          return (0, r.jsx)("div", {
            className: "b8qqdy2",
            ref: i,
            children: (0, r.jsx)("div", {
              className: "b8qqdy3",
              children: e
            })
          })
        }),
        Jr = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...s
        }) {
          const n = (0, k.v6)({
              "data-testid": t,
              className: "b8qqdy6"
            }, s),
            i = a ? g.DX : "div";
          return (0, r.jsx)(i, {
            ...n,
            children: e
          })
        }),
        es = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...s
        }, n) {
          const i = a ? g.DX : "div",
            o = (0, k.v6)({
              "data-testid": t,
              className: "b8qqdy8"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        ts = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, s) {
          const n = (0, k.v6)({
            "data-testid": t,
            className: "b8qqdy9"
          }, a);
          return (0, r.jsx)(c.Heading, {
            ref: s,
            ...n,
            level: 3,
            children: e
          })
        }),
        as = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, s) {
          const n = (0, k.v6)({
            "data-testid": t,
            className: "b8qqdya"
          }, a);
          return (0, r.jsx)(c.Body, {
            ref: s,
            ...n,
            size: "LG",
            appearance: "bold",
            children: e
          })
        }),
        rs = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          link: a,
          ...s
        }, n) {
          const i = (0, k.v6)({
            "data-testid": t,
            className: "b8qqdyb"
          }, s);
          return a?.url ? (0, r.jsx)(c.Button, {
            ref: n,
            ...i,
            size: "MD",
            asChild: !0,
            children: (0, r.jsx)(w, {
              href: a?.url,
              rel: "noreferrer",
              target: "_self",
              children: e
            })
          }) : (0, r.jsx)(c.Button, {
            ref: n,
            ...i,
            size: "MD",
            children: e
          })
        }),
        ss = ({
          block: e
        }) => {
          const {
            trackEvent: t,
            useTrackPageSectionImpression: a
          } = G(), {
            ref: s
          } = a();
          if (!e) return null;
          const {
            cta: n,
            description: i,
            title: o
          } = e, l = e?.marqueeingElementsCollection?.items[0]?.referencesCollection?.items, c = l ? Math.floor(l.length / 2) : 0, d = l?.slice(0, c) || [], u = l?.slice(c) || [];
          return (0, r.jsxs)(Kr, {
            ref: s,
            children: [(0, r.jsxs)(Qr, {
              children: [(0, r.jsx)(Zr, {
                delay: 0,
                speed: .2,
                children: d.map((e, t) => {
                  if (e.boxArt) return (0, r.jsx)(Jr, {
                    asChild: !0,
                    children: (0, r.jsx)(It, {
                      src: e.boxArt,
                      context: "mobile",
                      sizes: "(min-width: 1570px) 260px, 20vw",
                      loading: "eager"
                    })
                  }, `${t}-${e?.boxArt?.altText}`)
                })
              }), (0, r.jsx)(Zr, {
                delay: 10,
                speed: .16,
                children: u.map((e, t) => {
                  if (e.boxArt) return (0, r.jsx)(Jr, {
                    asChild: !0,
                    children: (0, r.jsx)(It, {
                      src: e.boxArt,
                      context: "mobile",
                      sizes: "(min-width: 1570px) 260px, 20vw",
                      loading: "eager"
                    })
                  }, `${t}-${e?.boxArt?.altText}`)
                })
              })]
            }), (0, r.jsxs)(Yr, {
              children: [(0, r.jsxs)(es, {
                children: [(0, r.jsx)(ts, {
                  children: o
                }), (0, r.jsx)(as, {
                  children: i
                })]
              }), n && (0, r.jsx)(rs, {
                appearance: n?.appearance,
                override_backgroundColor: n?.backgroundColor,
                iconLeft: n?.iconLeft?.icon,
                iconRight: n?.iconRight?.icon,
                link: n?.link,
                onPress: (m = n, () => t(m.analyticsData, m)),
                children: n?.text
              })]
            })]
          });
          var m
        },
        ns = "WwwImagesMarqueeModule",
        is = "WwwLightboxImage",
        os = "WwwLinkOutImage";
      var ls = (0, C.c)({
          defaultClassName: "_64q2nvi",
          variantClassNames: {
            appearance: {
              primary: "_64q2nvj",
              secondary: "_64q2nvk",
              tertiary: "_64q2nvl",
              ghost: "_64q2nvm",
              information: "_64q2nvn",
              danger: "_64q2nvo",
              accent: "_64q2nvp",
              link: "_64q2nvq"
            }
          },
          defaultVariants: {
            appearance: "primary"
          },
          compoundVariants: []
        }),
        cs = ((0, C.c)({
          defaultClassName: "_64q2nv1",
          variantClassNames: {
            layout: {
              primary: "_64q2nv2",
              secondary: "_64q2nv3",
              default: "_64q2nv4"
            }
          },
          defaultVariants: {
            layout: "default"
          },
          compoundVariants: []
        }), (0, C.c)({
          defaultClassName: "_64q2nv5 _1betujy7",
          variantClassNames: {
            grid: {
              "4_up_a": "_64q2nv6",
              "4_up_b": "_64q2nv7",
              "4_up_c": "_64q2nv8",
              "4_up_d": "_64q2nv9"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        })),
        ds = (0, C.c)({
          defaultClassName: "_64q2nva",
          variantClassNames: {
            type: {
              primary: "_64q2nvb",
              secondary: "_64q2nvc",
              tertiary: "_64q2nvd"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const us = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...s
        }, n) {
          const i = t ? g.DX : "div",
            o = (0, k.v6)({
              className: "_64q2nv0 _1betujy6 _1betujy5",
              "data-testid": a
            }, s);
          return (0, r.jsx)(i, {
            ...o,
            ref: n,
            children: e
          })
        }),
        ms = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          gridType: s,
          ...n
        }, i) {
          const o = t ? g.DX : "div",
            l = (0, k.v6)({
              className: cs({
                grid: s
              }),
              "data-testid": a
            }, n);
          return (0, r.jsx)(o, {
            ...l,
            ref: i,
            children: e
          })
        }),
        _s = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          gridType: s,
          ...i
        }, o) {
          const l = t ? g.DX : "div",
            c = (0, k.v6)({
              className: Rt()(cs({
                grid: s || "4_up_a"
              })),
              "data-testid": a
            }, i);
          return (0, r.jsx)(l, {
            ...c,
            ref: o,
            children: n.Children.map(e, (e, t) => (0, n.isValidElement)(e) && (0, n.cloneElement)(e, {
              style: {
                gridArea: String.fromCharCode(97 + t)
              }
            }))
          })
        }),
        gs = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          type: s,
          ...n
        }, i) {
          const o = t ? g.DX : "div",
            l = (0, k.v6)({
              className: ds({
                type: s
              }),
              "data-testid": a
            }, n);
          return (0, r.jsx)(o, {
            ...l,
            ref: i,
            children: e
          })
        }),
        fs = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          defaultSlide: a = 0,
          onCarouselSwipe: s,
          ...i
        }, o) {
          const [l, c] = (0, n.useState)(!1), {
            ref: d,
            api: u,
            currentSlide: m
          } = (({
            autoScrollEnabled: e = !1,
            defaultSlide: t,
            duration: a = 40
          }) => {
            const r = (0, n.useRef)(null),
              [s, i] = (0, n.useState)(t),
              [o, l] = (0, n.useState)(0),
              [c, d] = (0, n.useState)(!1),
              [u, m] = (0, ye.A)({
                axis: "x",
                align: "start",
                startIndex: t,
                active: !0,
                containScroll: "trimSnaps",
                watchDrag: c,
                duration: a
              }, []),
              _ = (0, n.useCallback)(() => {
                m && (l(m?.scrollSnapList()?.length ?? 0), d(m?.canScrollNext() || m?.canScrollPrev()))
              }, [m]),
              g = (0, n.useCallback)(() => {
                m && i(m?.selectedScrollSnap() ?? 0)
              }, [m]);
            return (0, n.useEffect)(() => {
              m && r?.current && (e ? r?.current.play() : r.current.stop())
            }, [e, m]), (0, n.useEffect)(() => {
              if (m) return m.on("init", _), m.on("reInit", _), m.on("select", g), _(), () => {
                m.off("init", _), m.off("reInit", _), m.off("select", g)
              }
            }, [m, _, g]), {
              ref: u,
              currentSlide: s,
              totalSlides: o,
              api: m
            }
          })({
            defaultSlide: a
          }), _ = (0, ne.UP)(d, o), g = (0, k.v6)({
            className: "_64q2nve",
            "data-testid": t
          }, i);
          return (0, n.useEffect)(() => {
            const e = () => {
              c(!0)
            };
            return u?.on("pointerUp", e), l && s?.(), c(!1), () => {
              u?.off("pointerUp", e)
            }
          }, [u, m]), (0, r.jsx)(Fe, {
            ...g,
            ref: _,
            children: e
          })
        }),
        ps = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, s) {
          const n = (0, k.v6)({
            className: "_64q2nvf",
            "data-testid": t
          }, a);
          return (0, r.jsx)(Pe, {
            ...n,
            ref: s,
            children: e
          })
        }),
        hs = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          textColor: a,
          size: s,
          ...n
        }, i) {
          const o = (0, k.v6)({
            className: "_64q2nvg",
            "data-testid": t,
            gradientType: "radial",
            theme: "dark" === a ? "light" : "dark",
            interactive: !0,
            size: s
          }, n);
          return (0, r.jsx)(kr, {
            ...o,
            ref: i,
            children: e
          })
        }),
        bs = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, s) {
          const n = (0, k.v6)({
            className: "_64q2nvh",
            "data-testid": t
          }, a);
          return (0, r.jsx)(yr, {
            ...n,
            ref: s,
            children: e
          })
        }),
        vs = jr,
        xs = Rr,
        ks = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, s) {
          const n = (0, k.v6)({
            "data-testid": t
          }, a);
          return (0, r.jsx)(Nr, {
            ...n,
            ref: s,
            asChild: !0,
            children: (0, r.jsx)("span", {
              className: ls({
                appearance: a.appearance
              }),
              tabIndex: -1,
              children: e
            })
          })
        }),
        ws = wr,
        ys = (0, o.defineMessages)({
          masonry_grid_external_store_link: {
            id: "masonry_grid_external_store_link",
            description: "Tells the user this is an external link to the store.",
            defaultMessage: "External link to Store"
          }
        });
      var js = "_18nij4j0";
      const Cs = {
          small: 6,
          medium: 5,
          large: 4,
          xlarge: 4
        },
        Rs = ({
          card: e,
          context: t,
          size: a
        }) => {
          const {
            textColor: s,
            badgeText: n,
            text: i,
            cta: o,
            backgroundImage: l
          } = e, c = Cs[a];
          return (0, r.jsxs)(hs, {
            size: a,
            textColor: s,
            children: [(0, r.jsxs)(bs, {
              children: [n && (0, r.jsx)(vs, {
                children: n
              }), i && (0, r.jsx)(xs, {
                level: c,
                children: i
              }), o && (0, r.jsx)(ks, {
                iconLeft: o.iconLeft?.icon,
                iconRight: o.iconRight?.icon,
                appearance: o.appearance,
                override_backgroundColor: o?.backgroundColor,
                size: "MD",
                children: o.text
              })]
            }), l && (0, r.jsx)(ws, {
              asChild: !0,
              children: (0, r.jsx)(It, {
                alt: l?.altText,
                src: l,
                context: t
              })
            })]
          })
        },
        Ss = "WwwMasonryGrid";
      var Ns = a(79867),
        Is = a(51931),
        Es = a(72408),
        Ts = a(20250),
        As = a(4094);
      const Ms = (0, o.defineMessages)({
          ns_successfully_subscribed_title: {
            id: "ns_successfully_subscribed_title",
            description: "Newsletter Subscription Alert - Successfully Subscribed title",
            defaultMessage: "Successfully Subscribed"
          },
          ns_successfully_subscribed_details_amp: {
            id: "ns_successfully_subscribed_details_amp",
            description: "Newsletter Subscription Alert - Successfully Subscribed details post AMP launch",
            defaultMessage: "You are now signed up to the Rockstar Games Email List and will receive regular updates to the email address you’ve signed up with. Manage your communication preferences at any time in your account settings."
          },
          ns_error_preferences_title: {
            id: "ns_error_preferences_title",
            description: "Newsletter Subscription Alert - Error (Check Preferences) title",
            defaultMessage: "Error"
          },
          ns_error_preferences_details: {
            id: "ns_error_preferences_details",
            description: "Newsletter Subscription Alert - Error (Check Preferences) details",
            defaultMessage: "We cannot sign up your email address to our newsletter at this time. Change your email preferences on your account settings page or try again later."
          },
          ns_error_generic_title: {
            id: "ns_error_generic_title",
            description: "Newsletter Subscription Alert - Error (Generic) title",
            defaultMessage: "Error"
          },
          ns_error_generic_details: {
            id: "ns_error_generic_details",
            description: "Newsletter Subscription Alert - Error (Generic) details",
            defaultMessage: "We cannot sign up this email address to our newsletter at this time."
          },
          ns_already_subbed_title: {
            id: "ns_already_subbed_title",
            description: "Newsletter Subscription Alert - Already Subscribed title",
            defaultMessage: "Already Subscribed"
          },
          ns_already_subbed_details_amp: {
            id: "ns_already_subbed_details_amp",
            description: "Newsletter Subscription Alert - Already Subscribed details post AMP launch",
            defaultMessage: "You are already receiving newsletter updates at this email address. Manage your communication preferences at any time in your account settings."
          },
          ns_check_email_title: {
            id: "ns_check_email_title",
            description: "Newsletter Subscription Alert - Check Email title",
            defaultMessage: "Check Your Email"
          },
          ns_check_email_details: {
            id: "ns_check_email_details",
            description: "Newsletter Subscription Alert - Check Email details",
            defaultMessage: "To confirm your subscription to the Rockstar Games Email List, please verify your email address via the link sent to the email address you’ve signed up with."
          },
          ns_confirm_title: {
            id: "ns_confirm_title",
            description: "Newsletter Subscription Alert - Confirm your subsciption title",
            defaultMessage: "Confirm your subscription"
          },
          ns_confirm_details: {
            id: "ns_confirm_details",
            description: "Newsletter Subscription Alert - Confirm your subsciption details",
            defaultMessage: "Please confirm that you would like to subscribe to the Rockstar Games Newsletter by clicking the button below."
          },
          ns_confirm_after_register_title: {
            id: "ns_confirm_after_register_title",
            description: "Newsletter Subscription Alert - Confirmation box after successful register - no opt in during creation title",
            defaultMessage: "Confirm your subscription"
          },
          ns_confirm_after_register_details: {
            id: "ns_confirm_after_register_details",
            description: "Newsletter Subscription Alert - Confirmation box after successful register - no opt in during creation details",
            defaultMessage: "You did not opt-in to receive marketing emails during account creation. Would you still like to subscribe to our newsletter?"
          },
          ns_ok_button_text: {
            id: "ns_ok_button_text",
            description: "Newsletter Subscription Alert - OK button text",
            defaultMessage: "OK"
          },
          ns_manage_prefs_button_text: {
            id: "ns_manage_prefs_button_text",
            description: "Newsletter Subscription Alert - Manage Preferences button text",
            defaultMessage: "Manage Preferences"
          },
          ns_yes_subscribe_text: {
            id: "ns_yes_subscribe_text",
            description: "Newsletter Subscription Alert - Yes, Subscribe button text",
            defaultMessage: "Yes, Subscribe"
          },
          ns_go_back_text: {
            id: "ns_go_back_text",
            description: "Newsletter Subscription Alert - No, go back button text",
            defaultMessage: "No, Go Back"
          }
        }),
        zs = {
          SUCCESS: {
            icon: "check",
            heading: Ms.ns_successfully_subscribed_title,
            bodyText: Ms.ns_successfully_subscribed_details_amp,
            showManagePreferences: !0
          },
          CHECK_EMAIL: {
            icon: "mail",
            heading: Ms.ns_check_email_title,
            bodyText: Ms.ns_check_email_details
          },
          ERROR_PREFERENCES: {
            icon: "error",
            heading: Ms.ns_error_preferences_title,
            bodyText: Ms.ns_error_preferences_details,
            showManagePreferences: !0
          },
          ERROR_GENERIC: {
            icon: "error",
            heading: Ms.ns_error_generic_title,
            bodyText: Ms.ns_error_generic_details
          },
          ALREADY_SUBSCRIBED: {
            icon: "check",
            heading: Ms.ns_already_subbed_title,
            bodyText: Ms.ns_already_subbed_details_amp,
            showManagePreferences: !0
          },
          NEW_ACCOUNT: {
            icon: "mail",
            heading: Ms.ns_confirm_after_register_title,
            bodyText: Ms.ns_confirm_after_register_details,
            showManagePreferences: !0
          },
          CONFIRM: {
            icon: "mail",
            heading: Ms.ns_confirm_title,
            bodyText: Ms.ns_confirm_details,
            showManagePreferences: !1
          }
        },
        Ds = {
          0: zs.ERROR_PREFERENCES,
          1: zs.SUCCESS,
          2: zs.ERROR_PREFERENCES,
          3: zs.ERROR_PREFERENCES,
          4: zs.ERROR_GENERIC
        },
        Fs = (0, Ts.eU)(null),
        Ps = (e, t) => {
          const [a, r] = (0, n.useState)(), [s, l] = (0, n.useState)(!1), [c, d] = (0, n.useState)(!1), [u, m] = (0, n.useState)(!1), [_, g] = (0, n.useState)(!1), [f, h] = (0, As.fp)(Fs), b = (0, o.useIntl)(), {
            track: v
          } = (0, p.useGtmTrack)(), x = {
            preferences: `https://${e.www}.rockstargames.com/account/communications`,
            auth: `${e.login}?returnUrl=${window.location.pathname}%3Fmarketing%3Dtrue&lang=${e.lang}&newsletter=true`
          };
          (0, n.useEffect)(() => {
            a ? (d(!0), m(!1)) : d(!1)
          }, [a]);
          const k = {
              ...zs.NEW_ACCOUNT,
              closeOnOutsideClick: !1,
              buttons: [{
                buttonText: b.formatMessage(Ms.ns_yes_subscribe_text),
                style: "monochrome",
                onClick: () => {
                  w()
                }
              }, {
                buttonText: b.formatMessage(Ms.ns_go_back_text),
                onClick: () => {
                  r(null)
                }
              }]
            },
            w = async () => (v({
              event: "cta_subscribe_news",
              section_layout: t.loggedIn ? "signed in" : "signed out",
              element_placement: "newsletter subscribe",
              text: "subscribe now"
            }), t.loggedIn || window.location.assign(x.auth), t.loggedIn && t.isAMinor ? (r(zs.ERROR_GENERIC), g(!1), void v({
              event: "alert_error",
              text: "error message with no preferences link",
              element_placement: "newsletter subscribe"
            })) : t.loggedIn && !f || t.loggedIn && 3 == f ? void await y() : t.loggedIn && f ? (v({
              event: "alert_update",
              text: "alert - user already subscribed",
              element_placement: "newsletter subscribe"
            }), r(zs.ALREADY_SUBSCRIBED), void g(!1)) : void 0), y = async () => {
              const {
                error: e = null,
                result: a
              } = await (0, i.coreScApiFetch)("marketing/update", {
                fetchOptions: {
                  method: "POST"
                },
                pingBearer: t.pingBearer,
                query: {
                  subscribe: !0
                }
              });
              if (e) h(0), r(zs.ERROR_GENERIC), v({
                event: "alert_error",
                text: "error message with preferences link",
                element_placement: "newsletter subscribe"
              });
              else {
                const e = a.status;
                h(e), r(Ds[e]), 1 === e ? (v({
                  event: "subscribe_news_success",
                  element_placement: "newsletter subscribe"
                }), v({
                  event: "alert_update",
                  text: "user subscribed successfully",
                  element_placement: "newsletter subscribe"
                })) : v({
                  event: "alert_error",
                  text: "error message with preferences link",
                  element_placement: "newsletter subscribe"
                })
              }
            };
          return (0, n.useEffect)(() => {
            l(1 === f)
          }, [f]), (0, n.useEffect)(() => {
            (async () => {
              await (async () => {
                void 0 !== t.loggedIn && (t.loggedIn ? await (async () => {
                  if (-1 === f) return;
                  h(-1), m(!0);
                  const {
                    error: a = null,
                    result: s
                  } = await (0, i.coreScApiFetch)("marketing/status", {
                    pingBearer: t.pingBearer
                  });
                  if (a) h(0), m(!1);
                  else {
                    const a = s.status;
                    h(a), t.isFromAuth && (a => {
                      if (e.navigate(".", {
                          replace: !0
                        }), t.loggedIn) switch (a) {
                        case 1:
                          t.isNewAccount ? (v({
                            event: "subscribe_news_success",
                            element_placement: "newsletter subscribe"
                          }), v({
                            event: "alert_update",
                            text: "new user subscribed during account creation",
                            element_placement: "newsletter subscribe"
                          }), r(zs.SUCCESS)) : (v({
                            event: "alert_update",
                            text: "alert - user already subscribed",
                            element_placement: "newsletter subscribe"
                          }), r(zs.ALREADY_SUBSCRIBED));
                          break;
                        case 4:
                          v({
                            event: "alert_error",
                            text: "error message with no preferences link",
                            element_placement: "newsletter subscribe"
                          }), r(zs.ERROR_GENERIC);
                          break;
                        default:
                          t.isNewAccount ? (r(k), v({
                            event: "alert_update",
                            text: "newly registered user - would you still like to subscribe?",
                            element_placement: "newsletter subscribe"
                          })) : y()
                      }
                    })(a), m(!1)
                  }
                })() : m(!1))
              })()
            })()
          }, [t.loggedIn]), {
            dialog: a,
            handleSubscribeButton: w,
            isButtonLoading: _,
            isLoading: u,
            isSubscribed: s,
            setShowDialog: d,
            showDialog: c,
            subscriptionStatus: f,
            urls: x,
            setDialog: r
          }
        },
        Ls = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...s
        }, n) {
          const i = t ? g.DX : "div",
            o = (0, k.v6)({
              "data-testid": a,
              className: "l1gjt90 _1betujy6 _1betujy5"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        Ws = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...s
        }, n) {
          const i = t ? g.DX : c.Heading,
            o = (0, k.v6)({
              "data-testid": a,
              className: "l1gjt91"
            }, s);
          return (0, r.jsx)(i, {
            level: 2,
            ref: n,
            ...o,
            children: e
          })
        }),
        Gs = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...s
        }, n) {
          const i = t ? g.DX : "div",
            o = (0, k.v6)({
              "data-testid": a,
              className: "l1gjt92"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        Bs = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...s
        }, n) {
          const i = t ? g.DX : "div",
            o = (0, k.v6)({
              "data-testid": a,
              className: "l1gjt94"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        qs = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          isDisabled: a,
          ...s
        }, n) {
          const i = (0, k.v6)({
            "data-testid": t,
            isDisabled: a
          }, s);
          return (0, r.jsx)(c.Button, {
            appearance: "primary",
            size: "MD",
            ref: n,
            ...i,
            children: e
          })
        }),
        Os = "WwwNewsletterSubscribe";
      var Vs = (0, C.c)({
          defaultClassName: "_1ozycm4b",
          variantClassNames: {
            imagePlacement: {
              left: "_1ozycm4c",
              right: "_1ozycm4d",
              vertical: "_1ozycm4e"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        $s = (0, C.c)({
          defaultClassName: "_1ozycm4f",
          variantClassNames: {
            imagePlacement: {
              left: "_1ozycm4g",
              right: "_1ozycm4h",
              vertical: "_1ozycm4i"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Us = "var(--_1ozycm40)",
        Xs = "_1ozycm4o",
        Hs = (0, C.c)({
          defaultClassName: "_1ozycm44",
          variantClassNames: {
            contentAlignment: {
              center: "_1ozycm45",
              left: "_1ozycm46"
            },
            imagePlacement: {
              left: "_1ozycm47",
              right: "_1ozycm48",
              vertical: "_1ozycm49"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Ks = (0, n.createContext)(void 0),
        Qs = (0, n.forwardRef)(function({
          colorMode: e = "dark",
          backgroundColor: t,
          gradientEnabled: a = !0,
          imagePlacement: s = "left",
          children: i,
          asChild: o,
          testId: l,
          ...c
        }, d) {
          const u = o ? g.DX : "div",
            m = "dark" === e ? "#000000" : "lightgrey",
            _ = (0, k.v6)({
              "data-testid": l,
              className: "_1ozycm42 _1betujy6 _1betujy5",
              style: (0, y.DI)({
                [Us]: t ?? m
              })
            }, c),
            f = (0, ne.Ub)(j.f.mobile),
            p = f ? "vertical" : s,
            h = "left" === s ? i : n.Children.toArray(i).reverse();
          return (0, r.jsx)(Ks.Provider, {
            value: {
              colorMode: e,
              backgroundColor: t,
              imagePlacement: p,
              gradientEnabled: a
            },
            children: (0, r.jsx)(u, {
              ref: d,
              ..._,
              children: f ? i : h
            })
          })
        }),
        Ys = (0, n.forwardRef)(function({
          contentAlignment: e,
          children: t,
          testId: a,
          asChild: s,
          ...i
        }, o) {
          const l = (0, n.useContext)(Ks);
          if (!l) return;
          const {
            colorMode: c,
            gradientEnabled: d,
            imagePlacement: u
          } = l, m = s ? g.DX : "div", _ = (0, b.m)(c ?? "dark", "normal"), f = (0, k.v6)({
            "data-testid": a,
            className: Rt()(_, "_1ozycm43", Hs({
              contentAlignment: e,
              imagePlacement: u
            }), !d && "_1ozycm4a")
          }, i);
          return (0, r.jsx)(m, {
            ref: o,
            ...f,
            children: t
          })
        }),
        Zs = (0, n.forwardRef)(function({
          image: e,
          testId: t,
          asChild: a,
          ...s
        }, i) {
          const o = (0, ne.Ub)(j.f.tabletMediumAndLarger) ? "16:9" : "1:1",
            l = (0, n.useContext)(Ks);
          if (!l || !e) return;
          const {
            imagePlacement: c,
            gradientEnabled: d
          } = l, u = a ? g.DX : "div", m = (0, k.v6)({
            "data-testid": t,
            className: Vs({
              imagePlacement: c
            })
          }, s);
          return (0, r.jsxs)(u, {
            ref: i,
            ...m,
            children: [d && (0, r.jsx)("div", {
              className: $s({
                imagePlacement: c
              })
            }), (0, r.jsx)(It, {
              src: e,
              context: o,
              className: "_1ozycm4j"
            })]
          })
        }),
        Js = (0, n.forwardRef)(function({
          ...e
        }, t) {
          return (0, r.jsx)(vr, {
            ref: t,
            ...e
          })
        }),
        en = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, s) {
          if (!e) return;
          const n = (0, k.v6)({
            "data-testid": t,
            className: "_1ozycm4k"
          }, a);
          return (0, r.jsx)(c.Button, {
            ref: s,
            ...n,
            children: e
          })
        }),
        tn = (0, n.forwardRef)(function({
          children: e,
          ...t
        }, a) {
          if (!e) return;
          const s = (0, k.v6)({
            className: "_1ozycm4l"
          }, t);
          return (0, r.jsx)(c.Heading, {
            ref: a,
            ...s,
            children: e
          })
        }),
        an = (0, n.forwardRef)(function({
          children: e,
          ...t
        }, a) {
          if (!e) return;
          const s = (0, k.v6)({
            className: "_1ozycm4m"
          }, t);
          return (0, r.jsx)(c.Body, {
            ref: a,
            ...s,
            children: e
          })
        }),
        rn = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, s) {
          if (!e) return;
          const n = (0, k.v6)({
            "data-testid": t,
            className: "_1ozycm4n"
          }, a);
          return (0, r.jsx)("div", {
            ref: s,
            ...n,
            children: e
          })
        }),
        sn = (0, n.forwardRef)(function({
          markdown: e,
          onHyperlinkClick: t,
          testId: a,
          ...s
        }, n) {
          if (!e) return;
          const i = (0, k.v6)({
              "data-testid": a,
              className: Xs
            }, s),
            o = {
              [l.ContentfulTypes.BLOCKS.PARAGRAPH]: (e, t) => (0, r.jsx)(c.Body, {
                size: "XS",
                className: Xs,
                children: t
              }),
              [l.ContentfulTypes.INLINES.HYPERLINK]: (e, a) => {
                return (0, r.jsx)("a", {
                  href: e.data.uri,
                  className: "_1ozycm4p",
                  onClick: (s = e, () => t?.(s)),
                  children: a
                });
                var s
              }
            };
          return (0, r.jsx)("div", {
            ref: n,
            ...i,
            children: (0, r.jsx)(l.RsgMdTextComponent, {
              markdown: e,
              rsgRichTextOptions: {
                renderNode: o
              }
            })
          })
        }),
        nn = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, s) {
          if (!e) return;
          const n = (0, k.v6)({
            "data-testid": t,
            className: "_1ozycm4q"
          }, a);
          return (0, r.jsx)(c.Label, {
            ref: s,
            ...n,
            size: "XS",
            appearance: "bold",
            children: e
          })
        }),
        on = "WwwPromoModule",
        ln = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...s
        }, n) {
          const i = t ? g.DX : "div",
            o = (0, k.v6)({
              "data-testid": a,
              className: "_174ett30 _1betujy6 _1betujy5"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            style: {
              backgroundImage: "\n        linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.5) 50%),\n        url(https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5c0a5c2692eb47690bbaa34cde2f2173.jpg)"
            },
            ...o,
            children: e
          })
        }),
        cn = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...s
        }, n) {
          const i = t ? g.DX : "div",
            o = (0, k.v6)({
              "data-testid": a,
              className: "_174ett31"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        dn = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          ...a
        }, s) {
          const n = t ? g.DX : "div",
            i = (0, k.v6)({
              className: "_174ett32"
            }, a);
          return (0, r.jsx)(n, {
            ref: s,
            ...i,
            children: e
          })
        }),
        un = (0, n.forwardRef)(function({
          asChild: e,
          testId: t,
          altText: a,
          ...s
        }, n) {
          const i = e ? g.DX : "div",
            o = (0, k.v6)({
              "data-testid": t
            }, s);
          return (0, r.jsxs)(i, {
            ref: n,
            ...o,
            children: [(0, r.jsx)("img", {
              src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/90e8a0c40853b90840df2c9de1542722.svg",
              className: "_174ett34",
              alt: a
            }), (0, r.jsx)("img", {
              src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/def13a31001678085d3deddd9381ae73.svg",
              className: "_174ett35",
              alt: a
            })]
          })
        }),
        mn = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...s
        }, n) {
          const i = t ? g.DX : c.Body,
            o = (0, k.v6)({
              "data-testid": a,
              className: "_174ett36 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdc"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        _n = "WwwSupportCalloutModule";
      var gn = "var(--lgxyya7)",
        fn = (0, C.c)({
          defaultClassName: "lgxyyac",
          variantClassNames: {
            align: {
              left: "lgxyyad",
              center: "lgxyyae",
              right: "lgxyyaf"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        pn = "var(--lgxyya9)",
        hn = "var(--lgxyyaa)",
        bn = (0, C.c)({
          defaultClassName: "lgxyya0",
          variantClassNames: {
            align: {
              left: "lgxyya1",
              center: "lgxyya2",
              right: "lgxyya3"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const vn = (0, n.createContext)({
          align: "left"
        }),
        xn = (0, n.forwardRef)(function({
          align: e = "left",
          children: t,
          testId: a,
          asChild: s,
          ...n
        }, i) {
          const o = s ? g.DX : "div",
            l = (0, k.v6)({
              "data-testid": a,
              className: bn({
                align: e
              })
            }, n);
          return (0, r.jsx)(vn.Provider, {
            value: {
              align: e
            },
            children: (0, r.jsx)(o, {
              ref: i,
              ...l,
              children: t
            })
          })
        }),
        kn = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, s) {
          const n = (0, k.v6)({
            "data-testid": t,
            className: "lgxyya6"
          }, a);
          return (0, r.jsx)("div", {
            className: "lgxyya5",
            children: (0, r.jsx)(c.Badge.Root, {
              appearance: "primary",
              ref: s,
              ...n,
              children: (0, r.jsx)(c.Badge.Label, {
                children: e
              })
            })
          })
        }),
        wn = (0, n.forwardRef)(function({
          bodyTextWrap: e,
          children: t,
          testId: a,
          ...s
        }, n) {
          const i = (0, k.v6)({
            "data-testid": a,
            className: "lgxyya8",
            style: (0, y.DI)({
              [gn]: e
            })
          }, s);
          return t ? (0, r.jsx)("div", {
            ref: n,
            ...i,
            children: t
          }) : null
        }),
        yn = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          size: a = "SM",
          ...s
        }, n) {
          const i = (0, k.v6)({
            "data-testid": t,
            className: "lgxyya4"
          }, s);
          return (0, r.jsx)(c.Label, {
            size: a,
            appearance: "bold",
            ref: n,
            ...i,
            children: e
          })
        }),
        jn = (0, n.forwardRef)(function({
          headerSize: e,
          textColor: t,
          headerTextWrap: a,
          children: s,
          testId: i,
          ...o
        }, l) {
          const d = (0, ne.Ub)(j.f.desktopSmallAndLarger),
            [u, m] = (0, n.useState)(2),
            _ = (0, k.v6)({
              "data-testid": i,
              className: Rt()("lgxyyag", t && "lgxyyab"),
              style: (0, y.DI)({
                [pn]: t,
                [hn]: a
              }),
              asChild: !0
            }, o);
          return (0, n.useEffect)(() => {
            "XS" === e ? m(d ? 5 : 6) : "SM" === e ? m(d ? 4 : 5) : "MD" === e ? m(d ? 3 : 4) : "LG" === e ? m(d ? 2 : 3) : "XL" === e && m(d ? 1 : 2)
          }, [e, d]), (0, r.jsx)(c.Heading, {
            level: u,
            ref: l,
            ..._,
            children: (0, r.jsx)("h2", {
              children: s
            })
          })
        }),
        Cn = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...s
        }, n) {
          const i = a ? g.DX : "p",
            o = (0, k.v6)({
              "data-testid": t,
              className: "lgxyyah"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        Rn = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, s) {
          const {
            align: i
          } = (0, n.useContext)(vn), o = (0, k.v6)({
            "data-testid": t,
            className: fn({
              align: i
            })
          }, a);
          return (0, r.jsx)("div", {
            ref: s,
            ...o,
            children: e
          })
        }),
        Sn = "WwwTextBlock";
      var Nn = (0, C.c)({
        defaultClassName: "ftz7gr3 _1betujy6 _1betujy5",
        variantClassNames: {
          alignment: {
            image_left: "ftz7gr4",
            image_right: "ftz7gr5"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      const In = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          variant: s = "image_right",
          ...n
        }, i) {
          const o = a ? g.DX : "div",
            l = (0, k.v6)({
              "data-testid": t,
              className: Nn({
                alignment: s
              })
            }, n);
          return (0, r.jsx)(o, {
            ref: i,
            ...l,
            children: e
          })
        }),
        En = (0, n.forwardRef)(function({
          testId: e,
          altText: t,
          ...a
        }, s) {
          const n = (0, k.v6)({
            "data-testid": e,
            className: "ftz7gr6",
            alt: t
          }, a);
          return (0, r.jsx)("img", {
            ref: s,
            ...n
          })
        }),
        Tn = (0, n.forwardRef)(function({
          children: e,
          ...t
        }, a) {
          const s = (0, k.v6)({
            className: "ftz7gr7"
          }, t);
          return (0, r.jsx)("div", {
            ref: a,
            ...s,
            children: e
          })
        }),
        An = "WwwTextWithBadge";
      var Mn = a(31879),
        zn = a.n(Mn);
      const Dn = "WwwVideoPlayer";
      var Fn = a(48586);
      const Pn = JSON.parse('{"de-DE":{"engagement_faq":"FAQ","engagement_faqs":"FAQ","engagement_legal_text":"Das Angebot endet am 9. Oktober um 23:59 Uhr (ET). Ein mit einer Mitgliedschaft bei GTA+ verknüpftes Spielkonto für GTA Online wird benötigt. Gilt nur einmal pro Mitgliedschaft bei GTA+. Das Angebot muss abgeholt und GTA Online muss vor dem 8. November um 23:59 Uhr (ET) mit einem mit GTA+ verknüpften Spielkonto gestartet werden. Es gelten zusätzliche Bedingungen (siehe {FaqLink}).","engagement_link_account":"Anderes Konto verknüpfen","engagement_link_console_account":"Spielkonto verknüpfen"},"en-US":{"engagement_faq":"FAQ","engagement_faqs":"FAQs","engagement_legal_text":"Offer ends October 9 at 11:59 p.m. ET. Offer must be applied to the GTA Online Game Account linked to your GTA+ Membership and is limited to one redemption per GTA+ Membership. Must claim and then sign in to GTA Online using your GTA+ Game Account before November 8 at 11:59 p.m. ET to redeem offer. Additional terms apply, see {FaqLink} for full terms.","engagement_link_account":"Link Another Account","engagement_link_console_account":"Link Game Account"},"es-ES":{"engagement_faq":"PREGUNTAS FRECUENTES","engagement_faqs":"Preguntas frecuentes","engagement_legal_text":"Oferta válida hasta el 9 de octubre a las 23:59 ET. La oferta debe solicitarse en tu cuenta de juego de GTA Online asociada a tu suscripción de GTA+ y solo puede canjearse una vez por cada suscripción de GTA+. Debes solicitarla e iniciar sesión en GTA Online usando tu cuenta de GTA+ antes del 8 de noviembre a las 23:59 ET (05:59 CEST) para canjear la oferta. Se aplican condiciones adicionales. Para más información, consulta nuestra sección de {FaqLink}.","engagement_link_account":"Vincular otra cuenta","engagement_link_console_account":"Vincular una cuenta de juego"},"es-MX":{"engagement_faq":"PREGUNTAS FRECUENTES","engagement_faqs":"Preguntas frecuentes","engagement_legal_text":"La oferta termina el 9 de octubre a las 11:59 p. m. (ET). La oferta debe ser aplicada a la cuenta del juego de GTA Online vinculada a tu membresía de GTA+, y solo se podrá obtener una vez por cada membresía de GTA+. Debes solicitar la oferta e iniciar sesión en GTA Online con tu cuenta del juego de GTA+ antes del 8 de noviembre a las 11:59 p. m. (ET) para obtenerla. Se aplican términos adicionales. Para ver los términos, consulta las {FaqLink}.","engagement_link_account":"Vincular otra cuenta","engagement_link_console_account":"Vincular una cuenta del juego"},"fr-FR":{"engagement_faq":"NOTRE FOIRE AUX QUESTIONS","engagement_faqs":"nos foires aux questions","engagement_legal_text":"Fin de l\'offre le 9 octobre à 23 h 59, heure de New York. L\'offre doit être appliquée au compte de jeu de GTA Online associé à votre abonnement à GTA+. Une seule utilisation de l\'offre par abonnement à GTA+. Pour pouvoir utiliser l\'offre, vous devez la récupérer puis vous connecter à GTA Online avec votre compte de jeu GTA+ avant le 8 novembre à 23 h 59, heure de New York. Offre soumise à conditions ; conditions complètes disponibles sur {FaqLink}.","engagement_link_account":"Associer un autre compte","engagement_link_console_account":"Associer un compte de jeu"},"it-IT":{"engagement_faq":"DOMANDE FREQUENTI","engagement_faqs":"Domande frequenti","engagement_legal_text":"L’offerta termina il 9 ottobre alle 23:59, fuso orario ET. L’offerta deve essere riscattata sull’account di GTA Online collegato al tuo abbonamento GTA+. Limite di un riscatto per abbonamento GTA+. È necessario riscattare e in seguito effettuare l’accesso a GTA Online tramite il tuo account di gioco collegato a GTA+ prima dell’8 novembre alle 23:59, fuso orario ET, per usufruire dell’offerta. Si applicano ulteriori condizioni, consulta le {FaqLink}.","engagement_link_account":"Collega un altro account","engagement_link_console_account":"Collega un account di gioco"},"ja-JP":{"engagement_faq":"よくある質問","engagement_faqs":"よくある質問","engagement_legal_text":"オファーは10月9日午後11時59分(アメリカ東部時間)に終了します。オファーはGTA+メンバーシップにリンクされた「GTAオンライン」のゲームアカウントに適用され、各GTA+メンバーシップにつき1度のみ引き換え可能です。オファーは受け取り後、11月8日午後11時59分(アメリカ東部時間)前にGTA+ゲームアカウントで「GTAオンライン」にサインインして引き換えてください。諸条件が適用されます。全諸条件は{FaqLink}をご覧ください。","engagement_link_account":"他のアカウントをリンクする","engagement_link_console_account":"ゲームアカウントをリンクする"},"ko-KR":{"engagement_faq":"자주 묻는 질문","engagement_faqs":"자주 묻는 질문","engagement_legal_text":"10월 9일 오후 11시 59분(미국 동부시)에 혜택 종료. 혜택은 GTA+ 멤버십과 연동된 GTA 온라인 게임 계정에만 사용. GTA+ 계정당 1회 제한. 혜택을 획득하고 사용하려면, GTA+ 게임 계정을 사용해서 11월 8일 오후 11시 59분(미국 동부시) 이전에 GTA 온라인에 로그인해야 합니다. 추가 이용 약관 적용. 전체 약관 내용은 {FaqLink}을 확인하십시오.","engagement_link_account":"다른 계정 연동하기","engagement_link_console_account":"게임 계정 연동하기"},"pl-PL":{"engagement_faq":"NAJCZĘSTSZE PYTANIA","engagement_faqs":"Najczęstsze pytania","engagement_legal_text":"Oferta ważna do 9 października, godziny 23:59 czasu ET. Oferta musi zostać wykorzystana wraz z kontem GTA Online powiązanym z członkostwem w GTA+ i jest ograniczona do jednorazowego użytku dla jednego członkostwa w GTA+. Należy ją odebrać, logując się w GTA Online za pomocą konta powiązanego z GTA+ przed 8 listopada, godz. 23:59 czasu ET. Obowiązują dodatkowe warunki, dostępne na stronie {FaqLink}.","engagement_link_account":"Powiąż inne konto","engagement_link_console_account":"Powiąż konto gracza"},"pt-BR":{"engagement_faq":"PERGUNTAS FREQUENTES","engagement_faqs":"Perguntas Frequentes","engagement_legal_text":"Oferta válida até 9 de outubro às 23:59 ET (10 de outubro às 00:59 BRT). A oferta será aplicada à conta do GTA Online vinculada à sua Afiliação GTA+ e é limitada a um resgate por Afiliação GTA+. Após reivindicar, acesse o GTA Online com a sua conta do jogo com GTA+ antes de 8 de novembro às 23:59 ET (9 de novembro às 00:59 BRT) para resgatar a oferta. Aplicam-se condições adicionais. Para ver todos os termos, veja as {FaqLink}.","engagement_link_account":"Vincular outra conta","engagement_link_console_account":"Vincular conta do jogo"},"ru-RU":{"engagement_faq":"РАЗДЕЛЕ ЧАСТО ЗАДАВАЕМЫХ ВОПРОСОВ","engagement_faqs":"разделе часто задаваемых вопросов","engagement_legal_text":"Предложение действует до 23:59 (ET) 9 октября. Предложение действительно для игровой учетной записи GTA Online, связанной с вашей подпиской GTA+. Предложением можно воспользоваться не более одного раза на подписку GTA+. Чтобы воспользоваться предложением, после нажатия на «Получить» необходимо войти в GTA Online с игровой учетной записью GTA+ до 23:59 (ET) 8 ноября. Регламентируется дополнительными условиями. С полным списком условий можно ознакомиться в {FaqLink}.","engagement_link_account":"Привязать другую учетную запись","engagement_link_console_account":"Привязать игровую учетную запись"},"zh-CN":{"engagement_faq":"常见问题","engagement_faqs":"常见问题","engagement_legal_text":"福利截至美国东部时间 10 月 9 日晚上 11:59。福利仅适用于绑定了您 GTA+ 会员的 GTA 在线模式游戏账户，而且每个 GTA+ 会员仅限领取一次。领取后务必使用您的 GTA+ 游戏账户（于美国东部时间 11 月 8 日晚上 11:59 之前）登录 GTA 在线模式，以兑换福利。附加条款适用，请前往 {FaqLink} 查看完整条款。","engagement_link_account":"绑定另一个账户","engagement_link_console_account":"绑定游戏账户"},"zh-TW":{"engagement_faq":"常見問答","engagement_faqs":"常見問答","engagement_legal_text":"活動將於美東時間 10 月 9 日晚間 11 點 59 分結束。須擁有 GTA 線上模式遊戲帳戶連結至您的 GTA+ 會籍，每個 GTA+ 會籍僅限兌換一次。如要領取優惠，必須在美東時間 11 月 8 日晚間 11 點 59 分前使用您的 GTA+ 遊戲帳戶登入 GTA 線上模式進行兌換。適用額外條款，完整條款請參閱{FaqLink}。","engagement_link_account":"連結另一個帳戶","engagement_link_console_account":"連結遊戲帳戶"}}'),
        Ln = (0, o.defineMessages)({
          engagement_legal_text: {
            id: "engagement_legal_text",
            description: "Legal Text",
            defaultMessage: "Offer ends October 9 at 11:59 p.m. ET. Offer must be applied to the GTA Online Game Account linked to your GTA+ Membership and is limited to one redemption per GTA+ Membership. Must claim and then sign in to GTA Online using your GTA+ Game Account before November 8 at 11:59 p.m. ET to redeem offer. Additional terms apply, see {FaqLink} for full terms."
          },
          engagement_faq: {
            id: "engagement_faq",
            description: "FAQ Text",
            defaultMessage: "FAQ"
          },
          engagement_faqs: {
            id: "engagement_faqs",
            description: "FAQs Text in plural",
            defaultMessage: "FAQs"
          },
          engagement_link_account: {
            id: "engagement_link_account",
            description: "Text for button to link another account",
            defaultMessage: "Link Another Account"
          },
          engagement_link_console_account: {
            id: "engagement_link_console_account",
            description: "Text for button to link another game/console account",
            defaultMessage: "Link Game Account"
          }
        });
      var Wn = a(22030);
      const Gn = ({
        legalText: e
      }) => (0, r.jsx)("div", {
        dangerouslySetInnerHTML: {
          __html: e
        }
      });
      var Bn = "_3rocp6l",
        qn = (0, C.c)({
          defaultClassName: "_3rocp6n",
          variantClassNames: {
            slideName: {
              success: "_3rocp6o",
              error: "_3rocp6p"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        On = "_3rocp6m",
        Vn = "_3rocp6i",
        $n = "_3rocp6g",
        Un = "_3rocp65",
        Xn = "_3rocp66",
        Hn = "_3rocp6q",
        Kn = "_3rocp6j",
        Qn = "_3rocp63",
        Yn = "_3rocp68",
        Zn = "_3rocp6z",
        Jn = "_3rocp6a",
        ei = "_3rocp6h",
        ti = "_3rocp67";
      const ai = ({
        content: e,
        loggedIn: t,
        addClaim: a,
        signin: s,
        landingSlide: n
      }) => (0, r.jsxs)("div", {
        className: Rt()(Un, "_3rocp6c _3rocp6b", "onScreen" === n ? Yn : "", "hidden" === n ? Xn : "", "visible" === n ? ti : ""),
        children: [e?.introScreen?.image?.sources?.mobile && (0, r.jsx)("img", {
          src: e.introScreen.image.sources.mobile,
          className: Qn,
          alt: e.introScreen.image.alt
        }), (0, r.jsxs)("div", {
          className: ei,
          children: [(0, r.jsx)("div", {
            className: Jn,
            children: (0, r.jsxs)("div", {
              className: Bn,
              children: [(0, r.jsx)(c.Badge.Root, {
                className: "_3rocp6k",
                appearance: "primary",
                children: (0, r.jsx)(c.Badge.Label, {
                  children: e.introScreen.tag
                })
              }), (0, r.jsxs)("div", {
                className: Rt()(On, "override"),
                children: [(0, r.jsx)(c.Heading, {
                  level: 3,
                  children: e.introScreen.headline
                }), (0, r.jsx)("div", {
                  dangerouslySetInnerHTML: {
                    __html: e.introScreen.body
                  }
                })]
              }), (0, r.jsx)("div", {
                className: $n,
                children: (0, r.jsx)(c.Button, {
                  className: Zn,
                  appearance: "primary",
                  size: "MD",
                  onClick: t ? a : s,
                  children: t ? e.introScreen.btnText.loggedIn : e.introScreen.btnText.loggedOut
                })
              })]
            })
          }), (0, r.jsx)("div", {
            className: Vn,
            children: (0, r.jsx)("div", {
              className: Rt()(Kn, "override"),
              children: (0, r.jsx)(Gn, {
                legalText: e.legalText
              })
            })
          })]
        })]
      });
      var ri = a(24162),
        si = a(85827),
        ni = a(22230),
        ii = a(73005),
        oi = a(19732);
      const li = (0, o.defineMessages)({
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
        ci = "rockstargames-sites-rockstargamesb2d75ee6d468c7fde9ad28ba90ca2804",
        di = (0, n.forwardRef)(function({
          children: e,
          className: t,
          testId: a,
          ...s
        }, n) {
          const {
            formatMessage: i
          } = (0, o.useIntl)(), l = (0, k.v6)(s, {
            "data-testid": a,
            className: Rt()("rockstargames-sites-rockstargamesd738b88fa09e0960678501900af6dae1", t)
          });
          return (0, r.jsxs)("div", {
            ref: n,
            ...l,
            children: [(0, r.jsx)(g.s6, {
              children: i(li.character_card_a11y_intro)
            }), e]
          })
        }),
        ui = (0, oi.g)(di),
        mi = (0, n.forwardRef)(function({
          src: e,
          alt: t,
          testId: s,
          ...i
        }, o) {
          const [l, c] = (0, n.useState)(e), d = (0, k.v6)(i, {
            className: "rockstargames-sites-rockstargamesa0e1daf7fc3c029353d5ef13f291348f",
            "data-testid": s
          });
          return e ? (0, r.jsx)("div", {
            ref: o,
            ...d,
            children: (0, r.jsx)("img", {
              className: ci,
              src: l,
              alt: t ?? "",
              onError: () => c(a(14804)),
              "aria-hidden": !t
            })
          }) : (0, r.jsx)("div", {
            ref: o,
            ...d,
            children: (0, r.jsx)("img", {
              className: ci,
              src: a(14804),
              alt: t ?? "",
              "aria-hidden": !t
            })
          })
        }),
        _i = (0, n.forwardRef)(function({
          asChild: e,
          testId: t,
          className: a,
          ...s
        }, n) {
          const i = e ? g.DX : "div",
            o = (0, k.v6)(s, {
              className: Rt()("rockstargames-sites-rockstargamesfbe57172570573357e040787d9307835", a),
              "data-testid": t
            });
          return (0, r.jsx)(i, {
            ref: n,
            ...o
          })
        }),
        gi = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, s) {
          const n = (0, k.v6)(a, {
            className: "rockstargames-sites-rockstargamesd9b917b7fb3a2b20d4af0d526ddbb8ff",
            "data-testid": t
          });
          return (0, r.jsx)("div", {
            ref: s,
            ...n,
            children: e
          })
        }),
        fi = ({
          testId: e,
          ...t
        }) => {
          const a = (0, k.v6)(t, {
            "data-testid": e
          });
          return (0, r.jsx)(ni.Ay, {
            ...a
          })
        },
        pi = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          userName: a,
          ...s
        }, n) {
          const {
            formatMessage: i
          } = (0, o.useIntl)(), l = (0, k.v6)(s, {
            "data-testid": t
          });
          return (0, r.jsxs)("div", {
            className: "rockstargames-sites-rockstargamescd5023e2864561e1f962ac435e70156b",
            "data-size": "small",
            ...l,
            ref: n,
            children: [(0, r.jsx)(g.s6, {
              children: i(li.character_card_a11y_player, {
                player: a
              })
            }), (0, r.jsx)("div", {
              "aria-hidden": !0,
              children: e
            })]
          })
        }),
        hi = (0, n.forwardRef)(function({
          testId: e,
          children: t,
          ...a
        }, s) {
          const n = (0, k.v6)(a, {
            "data-testid": e
          });
          return (0, r.jsx)("div", {
            ...n,
            ref: s,
            children: t
          })
        }),
        bi = ({
          testId: e,
          ...t
        }) => {
          const {
            formatMessage: a
          } = (0, o.useIntl)(), s = (0, k.v6)(t, {
            "data-testid": e
          });
          return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(g.s6, {
              children: a(li.character_card_a11y_rank, {
                rank: t.rank
              })
            }), (0, r.jsx)(ii.L, {
              ...s,
              "aria-hidden": !0
            })]
          })
        };
      var vi = a(14200);
      const xi = ({
        content: e,
        successSlide: t,
        characterList: a,
        linkAccountUrl: s,
        linkMoreAccounts: i,
        linkAccountBtn: o
      }) => {
        const l = (0, n.createRef)(),
          d = (0, n.createRef)(),
          u = (0, n.createRef)(),
          [m, _] = (0, n.useState)(),
          [g, f] = (0, n.useState)(!1),
          [p, h] = (0, n.useState)(),
          [b, v] = (0, n.useState)(!1),
          [x, k] = (0, n.useState)(!0);
        return (0, n.useEffect)(() => {
          const e = () => {
            l?.current && f(l?.current?.scrollWidth > l?.current?.offsetWidth)
          };
          return e(), window.addEventListener("resize", e), () => {
            window.removeEventListener("resize", e)
          }
        }, [l]), (0, n.useEffect)(() => {
          _({
            nextEl: d?.current,
            prevEl: u?.current
          })
        }, [u?.current, d?.current]), (0, r.jsxs)("div", {
          className: Rt()(Un, "_3rocp6d _3rocp6b", "onScreen" === t ? Yn : "", "hidden" === t ? Xn : "", "visible" === t ? ti : ""),
          children: [e?.introScreen?.image?.sources?.mobile && (0, r.jsx)("img", {
            src: e.introScreen.image.sources.mobile,
            className: Qn,
            alt: e.introScreen.image.alt
          }), (0, r.jsxs)("div", {
            className: ei,
            children: [(0, r.jsxs)("div", {
              className: Bn,
              children: [(0, r.jsx)("div", {
                className: qn({
                  slideName: "success"
                }),
                children: (0, r.jsx)(ba.Check, {
                  className: Hn,
                  label: "succcess check label"
                })
              }), (0, r.jsxs)("div", {
                className: Rt()(On, "override"),
                children: [(0, r.jsx)(c.Heading, {
                  level: 3,
                  children: e.successScreen.headline
                }), (0, r.jsx)("div", {
                  dangerouslySetInnerHTML: {
                    __html: e.successScreen.body
                  }
                })]
              }), (0, r.jsxs)("div", {
                className: "_3rocp6s",
                children: [(0, r.jsx)("div", {
                  className: "_3rocp6t",
                  ref: l,
                  children: (0, r.jsx)(ri.RC, {
                    mousewheel: {
                      releaseOnEdges: !0
                    },
                    touchReleaseOnEdges: !0,
                    loop: !1,
                    grabCursor: g,
                    slidesPerView: "auto",
                    speed: 700,
                    slidesOffsetAfter: 100,
                    navigation: m,
                    modules: [si.Vx, si.Jq],
                    onInit: e => {
                      h(e)
                    },
                    onSlideChange: e => {
                      v(e?.isEnd), k(e?.isBeginning)
                    },
                    children: a.map(e => (0, r.jsx)(ri.qr, {
                      tabIndex: 0,
                      children: (0, r.jsxs)(ui, {
                        className: "_3rocp6x",
                        children: [(0, r.jsx)(mi, {
                          src: e.mugshotUrl
                        }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`), (0, r.jsxs)(_i, {
                          children: [(0, r.jsx)(gi, {
                            children: (0, r.jsx)(fi, {
                              tagSize: ni.YT.large,
                              platform: e.platform
                            })
                          }), (0, r.jsx)(pi, {
                            userName: e.platformUsername,
                            children: e.platformUsername
                          }), (0, r.jsx)(hi, {
                            children: (0, r.jsx)(bi, {
                              rank: e.stats.overview.rank.value
                            })
                          })]
                        })]
                      })
                    }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`))
                  })
                }), (0, r.jsx)(c.Button, {
                  size: "SM",
                  appearance: "ghost",
                  iconRight: "ArrowRight",
                  iconRightLabel: "",
                  asChild: !0,
                  children: (0, r.jsx)(vi.A, {
                    className: "_3rocp6r",
                    to: s,
                    onClick: i,
                    children: o
                  })
                }), (0, r.jsx)(c.Button, {
                  className: "_3rocp6u",
                  size: "SM",
                  appearance: "ghost",
                  iconRight: "ArrowLeft",
                  iconRightLabel: "Previous",
                  ref: u,
                  onClick: () => {
                    p?.slidePrev()
                  },
                  isDisabled: x,
                  "data-hidden": !g
                }), (0, r.jsx)(c.Button, {
                  className: "_3rocp6v",
                  size: "SM",
                  appearance: "ghost",
                  iconRight: "ArrowRight",
                  iconRightLabel: "Previous",
                  ref: d,
                  onClick: () => {
                    p?.slideNext()
                  },
                  isDisabled: b,
                  "data-hidden": !g
                })]
              })]
            }), (0, r.jsx)("div", {
              className: Vn,
              children: (0, r.jsx)("div", {
                className: Rt()(Kn, "override"),
                children: (0, r.jsx)(Gn, {
                  legalText: e.legalText
                })
              })
            })]
          })]
        })
      };
      a(99101);
      const ki = {
          applestore: "rockstargames-sites-rockstargamese68d88a0e9f24a2f0bcf7da8a0e1b388",
          buttonText: "rockstargames-sites-rockstargamesc240c5768c5acdd2bc6022568ef877f0",
          closeButton: "rockstargames-sites-rockstargamesee432a5defea7b8181973d3a9ad3190b",
          container: "rockstargames-sites-rockstargamesfc8f7fb18de952e853977b6df36af26a",
          content: "rockstargames-sites-rockstargamesb12c469ae4536819db4253c10b2cd11d",
          expandedArea: "rockstargames-sites-rockstargamese752e3ffffce454f84c993a62a279f87",
          expandedButton: "rockstargames-sites-rockstargamesbb945d977a4db6fdd9206dbfe8581304",
          googleplay: "rockstargames-sites-rockstargamesd0d623dce429f6ae2fd898e1d551257e",
          pc: "rockstargames-sites-rockstargamesffc20241c500599d4ee134fcffd66961",
          pcalt: "rockstargames-sites-rockstargamesa2ef6590cf9e642c1a2a8c589a792928",
          pillBtn: "rockstargames-sites-rockstargamesed7115facef4ace39e8c7486e9066fe1",
          platformButton: "rockstargames-sites-rockstargamesfa40c93ee13fdec88bb8dc08ce36353a",
          platformButtons: "rockstargames-sites-rockstargamese950c05307f67ce36d561a09027fd844",
          ps: "rockstargames-sites-rockstargamesdd89bc9ad4dba162494e28c6358baa41",
          ps4: "rockstargames-sites-rockstargamesed20f3369b590314810f7996943fdaa4",
          ps5: "rockstargames-sites-rockstargamesf046700558956d566323b32d87c4a54f",
          selected: "rockstargames-sites-rockstargamese7705468e2dbcfc45d23ef5047671698",
          switch: "rockstargames-sites-rockstargamese8e3ea0f1d334667f3928f696308060e",
          unexpandedButton: "rockstargames-sites-rockstargameseaa10e0601812da4ea334974165d92ec",
          xbox: "rockstargames-sites-rockstargamese6c21e19f66ac6c50547342d3dd72dd4",
          xboxone: "rockstargames-sites-rockstargamesc03015dbaf51a94ba1826bb21f5d040f",
          xboxseriesxs: "rockstargames-sites-rockstargamesdde1b553776bdd59373d22a43479de29"
        },
        wi = ({
          buttonText: e = "",
          link: t = "",
          platform: s = "",
          target: n = null,
          onClick: i,
          tabIndex: o,
          ...l
        }) => {
          const c = n ?? (t.startsWith(document.location.origin) ? "_self" : "_blank"),
            d = [ki.platformButton, ki[s]].join(" "),
            m = s ? a(5328)(`./${s}.svg`) : null,
            _ = (0, r.jsxs)(r.Fragment, {
              children: [m ? (0, r.jsx)("img", {
                src: m,
                alt: e
              }) : "", !m && (0, r.jsx)("div", {
                className: ki.buttonText,
                children: e
              })]
            });
          return t ? t.startsWith("http") ? (0, r.jsx)("a", {
            href: t,
            className: d,
            target: c,
            onClick: i,
            "aria-label": e,
            tabIndex: o,
            ...l,
            children: _
          }) : (0, r.jsx)(u.NavLink, {
            className: d,
            onClick: i,
            to: t,
            "aria-label": e,
            ...l,
            children: _
          }) : (0, r.jsx)("button", {
            className: d,
            onClick: i,
            "aria-label": e,
            tabIndex: o,
            ...l,
            children: _
          })
        },
        yi = ({
          content: e,
          unlinkedSlide: t,
          returnUrl: a,
          giftId: s
        }) => {
          const n = (0, i.useRockstarTokenPing)(),
            {
              track: o
            } = (0, p.useGtmTrack)(),
            l = async e => {
              const t = (0, i.findPlatform)(e)?.onlineService;
              if (t && "sc" !== t) {
                o({
                  element_placement: "woc",
                  event: "cta_link_account",
                  o_id: s,
                  text: `link ${t}`
                });
                const e = await (0, i.generateTpaLink)({
                  pingBearer: n,
                  returnUrl: a || window.location.pathname,
                  service: t
                });
                window.location.assign(e.href)
              }
            };
          return (0, r.jsxs)("div", {
            className: Rt()(Un, "_3rocp6e _3rocp6b", "onScreen" === t ? Yn : "", "hidden" === t ? Xn : "", "visible" === t ? ti : ""),
            children: [e?.introScreen?.image?.sources?.mobile && (0, r.jsx)("img", {
              src: e.introScreen.image.sources.mobile,
              className: Qn,
              alt: e.introScreen.image.alt
            }), (0, r.jsxs)("div", {
              className: ei,
              children: [(0, r.jsx)("div", {
                className: Jn,
                children: (0, r.jsxs)("div", {
                  className: Bn,
                  children: [(0, r.jsx)("div", {
                    className: qn({
                      slideName: "error"
                    }),
                    children: (0, r.jsx)(ba.TriangleAlert, {
                      className: Hn,
                      label: ""
                    })
                  }), (0, r.jsxs)("div", {
                    className: Rt()(On, "override"),
                    children: [(0, r.jsx)(c.Heading, {
                      level: 3,
                      children: e.unlinkedScreen.headline
                    }), (0, r.jsx)("div", {
                      dangerouslySetInnerHTML: {
                        __html: e.unlinkedScreen.body
                      }
                    })]
                  }), (0, r.jsxs)("div", {
                    className: "_3rocp610",
                    children: [(0, r.jsx)(wi, {
                      buttonText: (0, i.findPlatform)("xbox")?.friendlyName,
                      platform: "xbox",
                      target: "_blank",
                      onClick: () => l("xbox"),
                      tabIndex: 0
                    }), (0, r.jsx)(wi, {
                      buttonText: (0, i.findPlatform)("ps")?.friendlyName,
                      platform: "ps",
                      target: "_blank",
                      onClick: () => l("ps"),
                      tabIndex: 0
                    })]
                  })]
                })
              }), (0, r.jsx)("div", {
                className: Vn,
                children: (0, r.jsx)("div", {
                  className: Rt()(Kn, "override"),
                  children: (0, r.jsx)(Gn, {
                    legalText: e.legalText
                  })
                })
              })]
            })]
          })
        },
        ji = ({
          errorSlide: e,
          content: t
        }) => (0, r.jsxs)("div", {
          className: Rt()(Un, "_3rocp6f _3rocp6b", "onScreen" === e ? Yn : "", "hidden" === e ? Xn : "", "visible" === e ? ti : ""),
          children: [t?.introScreen?.image?.sources?.mobile && (0, r.jsx)("img", {
            src: t.introScreen.image.sources.mobile,
            className: Qn,
            alt: t.introScreen.image.alt
          }), (0, r.jsxs)("div", {
            className: ei,
            children: [(0, r.jsx)("div", {
              className: Jn,
              children: (0, r.jsxs)("div", {
                className: Bn,
                children: [(0, r.jsx)("div", {
                  className: qn({
                    slideName: "error"
                  }),
                  children: (0, r.jsx)(ba.TriangleAlert, {
                    className: Hn,
                    label: ""
                  })
                }), (0, r.jsxs)("div", {
                  className: Rt()(On, "override"),
                  children: [(0, r.jsx)(c.Heading, {
                    level: 3,
                    children: t.errorScreen.headline
                  }), (0, r.jsx)("div", {
                    dangerouslySetInnerHTML: {
                      __html: t.errorScreen.body
                    }
                  })]
                }), (0, r.jsx)("div", {
                  className: $n,
                  children: (0, r.jsx)(c.Button, {
                    className: Zn,
                    appearance: "primary",
                    size: "MD",
                    onClick: () => window.location.reload(),
                    children: t.errorScreen.btnText
                  })
                })]
              })
            }), (0, r.jsx)("div", {
              className: Vn,
              children: (0, r.jsx)("div", {
                className: Rt()(Kn, "override"),
                children: (0, r.jsx)(Gn, {
                  legalText: t.legalText
                })
              })
            })]
          })]
        });
      var Ci = function(e) {
        return e.error = "error", e.landing = "landing", e.success = "success", e.unlinked = "unlinked", e
      }(Ci || {});
      const Ri = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cb04fb2acd10f43aa501729b4d7d26a8.jpg",
        {
          currentSite: Si
        } = (0, Ns.A)(),
        Ni = (0, o.withIntl)(({
          giftId: e,
          location: t = "gtaplus_site",
          introScreen: a,
          errorScreen: s,
          unlinkedScreen: l,
          successScreen: c,
          jumpLinkId: d,
          legalText: m,
          fontTheme: _ = "chalet",
          usePadding: g = !0,
          ...f
        }) => {
          const b = {
              errorScreen: {
                btnText: s?.errorButton || "",
                headline: s?.errorHeadline || "",
                body: s?.errorContent || ""
              },
              introScreen: {
                body: a?.introContent || "",
                btnText: {
                  loggedIn: a?.btnTextLoggedIn || "",
                  loggedOut: a?.btnTextLoggedOut || ""
                },
                headline: a?.introHeadline || "",
                image: {
                  alt: a?.image?.alt || a?.introHeadline || "",
                  sources: {
                    desktop: (0, Wn.useGetCdnSource)(a?.image?.sources?.en_us?.desktop) || null,
                    mobile: (0, Wn.useGetCdnSource)(a?.image?.sources?.en_us?.mobile) || null
                  }
                },
                tag: a?.tag || ""
              },
              legalText: m,
              successScreen: {
                body: c?.successContent || "",
                headline: c?.successHeadline || ""
              },
              unlinkedScreen: {
                body: l?.unlinkedContent || "",
                btnText: l?.unlinkedButtonText || "",
                headline: l?.unlinkedHeadline || ""
              }
            },
            [v] = (0, u.useSearchParams)(),
            {
              data: x,
              loggedIn: k
            } = (0, p.useRockstarUser)(),
            w = (0, i.useRockstarTokenPing)(),
            y = `https://${Si?.subDomain}.rockstargames.com/account/connections`,
            j = (0, o.useIntl)(),
            {
              track: C
            } = (0, p.useGtmTrack)(),
            R = (0, n.useRef)(null),
            {
              ref: S,
              inView: N
            } = (0, h.useInView)({
              threshold: .6
            }),
            I = 1280,
            E = (0, n.createRef)(),
            [T, A] = (0, n.useState)(null),
            [M, z] = (0, n.useState)([]),
            [D, F] = (0, n.useState)(!1),
            [P, L] = (0, n.useState)(),
            [W, G] = (0, n.useState)("hidden"),
            [B, q] = (0, n.useState)("hidden"),
            [O, V] = (0, n.useState)("hidden"),
            [$, U] = (0, n.useState)("hidden"),
            [X, H] = (0, n.useState)(!1),
            [K, Q] = (0, n.useState)(Ci.landing),
            [Y, Z] = (0, n.useState)(b.introScreen.image.sources.mobile || Ri),
            J = `${document.location.pathname}${document.location.search}#${d}`,
            ee = (0, i.usePrevious)(P),
            te = (0, i.usePrevious)(k),
            {
              signInUrl: ae
            } = (0, i.useScAuthLinks)(J),
            re = e => {
              e === Ci.landing ? (Q(Ci.landing), q("onScreen"), G("hidden"), U("hidden"), V("hidden")) : e === Ci.success ? (Q(Ci.success), q("offScreen"), G("visible"), setTimeout(() => {
                q("hidden"), U("hidden")
              }, 300), setTimeout(() => {
                G("onScreen")
              }, 100)) : e === Ci.error ? (Q(Ci.error), q("offScreen"), U("visible"), setTimeout(() => {
                q("hidden")
              }, 300), setTimeout(() => {
                U("onScreen")
              }, 100)) : e === Ci.unlinked && (Q(Ci.unlinked), q("offScreen"), V("visible"), setTimeout(() => {
                q("hidden"), U("hidden")
              }, 300), setTimeout(() => {
                V("onScreen")
              }, 100))
            };
          return (0, n.useEffect)(() => {
            let e;
            return d && window.location.hash === `#${d}` && R.current && (e = window.setTimeout(() => {
              R.current?.scrollIntoView({
                behavior: "smooth",
                block: "start"
              })
            }, 1e3)), () => window.clearTimeout(e)
          }, [d]), (0, n.useEffect)(() => {
            const e = () => {
                window.innerWidth >= 2560 && "newswire" !== t ? Z(b.introScreen.image.sources.mobile || Ri) : Z(b.introScreen.image.sources.desktop || Ri)
              },
              a = () => {
                window.innerWidth <= I && !D ? (F(!0), re(K)) : window.innerWidth > I && D && F(!1), e()
              };
            return F(window.innerWidth <= I), e(), window.addEventListener("resize", a), () => {
              window.removeEventListener("resize", a)
            }
          }, [K, D]), (0, n.useEffect)(() => {
            const e = x?.characters?.gtao;
            z(e || [])
          }, [x?.characters?.gtao]), (0, n.useEffect)(() => {
            "boolean" != typeof ee && "boolean" != typeof te || !e || P && k && (async () => {
              try {
                const {
                  result: t
                } = await (0, i.coreScApiFetch)("marketing/engagement/claim/exists", {
                  pingBearer: w,
                  query: {
                    giftUId: e
                  }
                });
                A("boolean" == typeof t && t)
              } catch (e) {
                A(!1)
              }
            })()
          }, [P, k, e]), (0, n.useEffect)(() => {
            "boolean" == typeof k ? k ? L(!0) : (L(!1), q("onScreen")) : L(!0)
          }, [k]), (0, n.useEffect)(() => {
            "boolean" == typeof T && x?.accountSynced && L(!1)
          }, [T, x?.accountSynced, L]), (0, n.useEffect)(() => {
            P || (async () => {
              M.length > 0 && T ? re(Ci.success) : re(T ? Ci.unlinked : Ci.landing)
            })()
          }, [P]), (0, n.useEffect)(() => {
            if (N && !X) {
              if (void 0 === k) return;
              C({
                element_placement: "WOC",
                event: "page_section_impression",
                section_layout: k ? "signed in" : "signed out"
              }), H(!0)
            }
          }, [N, k]), (0, n.useEffect)(() => {
            "onScreen" === W && C({
              element_placement: "WOC",
              event: "alert_update",
              o_id: e,
              text: "Almost there!"
            })
          }, [W]), (0, n.useEffect)(() => {
            "onScreen" === O && C({
              element_placement: "WOC",
              event: "alert_error",
              o_id: e,
              text: "No Qualifying Character Found"
            })
          }, [O]), (0, n.useEffect)(() => {
            "onScreen" === $ && C({
              element_placement: "event_label",
              event: "alert_error",
              o_id: e,
              text: "Something went wrong on our end. Please try again in a few minutes."
            })
          }, [$]), (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)("div", {
              className: "_3rocp60",
              "data-font": _,
              "data-use-padding": g,
              ref: R,
              id: d || "",
              ...f,
              children: (0, r.jsxs)(Fn.motion.div, {
                className: "_3rocp61",
                initial: {
                  opacity: 0
                },
                whileInView: {
                  opacity: 1
                },
                viewport: {
                  margin: "-20%",
                  once: !0
                },
                transition: {
                  duration: .4,
                  ease: "easeIn"
                },
                "data-context": "interestTracker",
                ref: S,
                children: [(0, r.jsx)("div", {
                  className: "_3rocp62",
                  style: {
                    "--engagement-image": `url(${Y})`
                  }
                }), (0, r.jsx)("div", {
                  className: Rt()("_3rocp64", P ? "loader" : ""),
                  ref: E,
                  children: P ? (0, r.jsx)("div", {
                    className: "_3rocp6w",
                    children: (0, r.jsx)(Es.A, {
                      type: "SPINNING"
                    })
                  }) : (0, r.jsxs)(r.Fragment, {
                    children: [K === Ci.landing && (0, r.jsx)(ai, {
                      content: b,
                      loggedIn: k,
                      addClaim: async () => {
                        const a = {
                            giftUId: e,
                            location: t,
                            utmCampaign: v.get("utm_campaign"),
                            utmContent: v.get("utm_content"),
                            utmMedium: v.get("utm_medium"),
                            utmSource: v.get("utm_source")
                          },
                          {
                            status: r
                          } = await (0, i.coreScApiFetch)("marketing/engagement/claim/create", {
                            fetchOptions: {
                              method: "POST"
                            },
                            pingBearer: w,
                            query: a
                          }) ?? [];
                        re(r ? Ci.success : Ci.error), C({
                          element_placement: "WOC",
                          event: "cta_claim",
                          o_id: e,
                          text: "claim now",
                          section_layout: "signed in"
                        })
                      },
                      signin: () => {
                        C({
                          element_placement: "WOC",
                          event: "cta_login",
                          link_url: ae,
                          text: "claim now",
                          section_layout: "signed out"
                        }), window.location.assign(ae)
                      },
                      landingSlide: B
                    }), K === Ci.success && (0, r.jsx)(xi, {
                      content: b,
                      successSlide: W,
                      characterList: M,
                      linkAccountUrl: y,
                      linkMoreAccounts: () => {
                        C({
                          element_placement: "WOC",
                          event: "cta_link_account",
                          link_url: y,
                          text: Ln.engagement_link_account.defaultMessage
                        })
                      },
                      linkAccountBtn: j.formatMessage(Ln.engagement_link_account)
                    }), K === Ci.unlinked && (0, r.jsx)(yi, {
                      content: b,
                      unlinkedSlide: O,
                      returnUrl: J,
                      giftId: e
                    }), K === Ci.error && (0, r.jsx)(ji, {
                      errorSlide: $,
                      content: b
                    })]
                  })
                })]
              })
            })
          })
        }, Pn),
        Ii = Ni;
      var Ei = a(38997);
      const Ti = "WwwWebOfferClaim";
      var Ai = a(20517);
      const Mi = "RsgContentRating",
        zi = {
          [pe]: ({
            block: e
          }) => {
            const t = e.imageFilesCollection?.items,
              a = e.altText,
              s = fe(t?.map(e => e?.context)),
              n = t?.find(e => e.context === s) || t?.[0],
              i = n?.source?.url;
            return t && i && s ? (0, r.jsxs)(ue, {
              children: [t?.map((e, t) => {
                const a = e.sys.id + t,
                  n = e.source?.url,
                  i = ge.get(e?.context || s);
                return n ? (0, r.jsx)(me, {
                  src: n,
                  media: i,
                  width: e.source?.width,
                  height: e.source?.height
                }, a) : null
              }), (0, r.jsx)(_e, {
                src: i,
                alt: a
              })]
            }) : null
          },
          [de]: ({
            block: e
          }) => e ? (0, r.jsx)(ce, {
            src: e
          }) : null,
          [Mi]: ({
            block: e
          }) => {
            if (!e) return;
            const {
              titleSlug: t
            } = e;
            return t && (0, r.jsx)(Ai.A, {
              titleSlug: t
            })
          },
          [we]: ({
            block: e
          }) => {
            const {
              trackEvent: t
            } = G();
            if (!e) return null;
            const {
              altText: a,
              backgroundColor: s,
              backgroundImage: n,
              link: i,
              foregroundImage: o
            } = e, c = (0, l.getOptimizedRsgImage)(n, "5:1", {
              preferModernFormat: !0
            });
            return (0, r.jsx)(be, {
              testId: "www-brand-banner",
              children: (0, r.jsx)(ve, {
                altText: a ?? "",
                backgroundColor: s,
                onClick: () => {
                  t({
                    event: "card_click",
                    card_id: e.sys.id,
                    card_name: "brand banner",
                    link_url: e.link?.url
                  })
                },
                asChild: !0,
                children: (0, r.jsxs)(w, {
                  href: i?.url ?? "",
                  children: [(0, r.jsx)(xe, {
                    src: c?.url ?? ""
                  }), o && (0, r.jsx)(ke, {
                    src: o
                  })]
                })
              })
            })
          },
          [Ge]: ({
            block: e,
            ...t
          }) => {
            const {
              blockPosition: a
            } = (0, n.useContext)(l.BlockRendererContext), {
              primaryAccentColor: s,
              secondaryAccentColor: i
            } = (0, n.useContext)(v), {
              trackEvent: o
            } = G(), c = e.cardsCollection?.items?.length ?? 0;
            if (e) return (0, r.jsxs)(Ae, {
              ...t,
              onNext: () => {
                o({
                  event: "carousel_next"
                })
              },
              onPrev: () => {
                o({
                  event: "carousel_previous"
                })
              },
              onSwipe: () => {
                o({
                  event: "carousel_swipe"
                })
              },
              style: {
                paddingBottom: "3px"
              },
              children: [(0, r.jsxs)(Me, {
                children: [(0, r.jsx)(ze, {
                  level: 5,
                  children: e.title
                }), (0, r.jsx)(Le, {
                  appearance: e.navigationButtonAppearance ?? "secondary",
                  size: "SM",
                  override_backgroundColor: s,
                  override_textColor: i
                })]
              }), (0, r.jsx)(De, {
                children: e.cardsCollection?.items?.map((t, s) => (0, r.jsx)(We.Provider, {
                  value: {
                    totalItems: c,
                    itemIndex: s
                  },
                  children: (0, r.jsx)(Pe, {
                    variant: e.variant,
                    children: (0, r.jsx)(l.BlockRenderer, {
                      block: t,
                      blockPosition: a
                    }, e.sys.id)
                  }, `${t?.sys?.id}-${s}`)
                }, `${t?.sys?.id}-${s}`))
              })]
            })
          },
          [Ye]: ({
            block: e
          }) => {
            const {
              trackEvent: t
            } = G(), {
              landscapeViewportBehavior: a,
              scrimColor: s,
              video: i,
              overlayElements: o,
              playbackBehavior: c
            } = e, {
              primaryAccentColor: d,
              secondaryAccentColor: u
            } = (0, n.useContext)(v), m = (0, ne.Ub)(j.f.landscape), _ = "play_once" === c, g = (0, n.useCallback)(e => t({
              event: "cta_other",
              text: "toggle " + (e ? "play" : "pause"),
              element_placement: "decorative video"
            }), []);
            if (!i) return null;
            const f = i.videoFilesCollection?.items?.find(e => "desktop" === e.context),
              p = i.videoFilesCollection?.items?.find(e => "mobile" === e.context),
              h = m ? f : p,
              b = h?.url ?? h?.upload?.url,
              x = h?.posterImage?.source?.url;
            return (0, r.jsxs)(Xe, {
              playOnce: _,
              landscapeViewportBehavior: a,
              scrimColor: s,
              children: [o && (0, r.jsx)(Qe, {
                children: (0, r.jsx)(l.BlockRenderer, {
                  block: o
                })
              }), b && (0, r.jsx)(He, {
                appearance: d ? "accent" : "primary",
                override_backgroundColor: d,
                override_textColor: u,
                onToggle: g
              }), (0, r.jsx)(Ke, {
                src: b,
                poster: x,
                altText: i.posterImage?.altText,
                autoPlay: !0,
                muted: !0
              })]
            })
          },
          [et]: ({
            block: e
          }) => e ? (0, r.jsx)(Je, {
            gradientStyle: e.style || "",
            thickness: e.thickness || "dimensions_25"
          }) : null,
          [yt]: ({
            block: e
          }) => {
            const [t] = (0, o.getLocale)(), {
              trackEvent: a
            } = G(), s = e.contentCollection?.items, l = s?.map(e => e.tinaId), c = (0, n.useMemo)(() => ((e, t) => {
              const a = ((e, t) => e.reduce((e, a) => e + ((e, t) => `\n    post${e}: post(id_hash: "${e}", locale: "${t}") {\n            ...postFields\n    }\n`)(a, t), ""))(e, t);
              return i.gql`
        ${at}

        ${r=a,`\nquery NewswirePosts {\n    ${r}\n}`}
    `;
              var r
            })(l, t.iso), [l]), {
              loading: d,
              data: u,
              error: m
            } = (0, i.useQuery)(c, {
              autoSetError: !1
            }), _ = (e, t) => () => {
              const r = e.block,
                s = {
                  position: t,
                  position_max: g.length,
                  event: "card_click",
                  card_name: r?.url.split("/").pop() ?? r?.title,
                  card_id: e.tinaId,
                  link_url: r?.url
                };
              a(s)
            };
            if (m) return (0, tt.captureMessage)("Failed to load Newswire Unit", tt.Severity.Error), null;
            if (!e || !s) return null;
            const g = s?.map(e => ({
              id: e.sys.id,
              tinaId: e.tinaId,
              block: u?.[`post${e.tinaId}`] ? u[`post${e.tinaId}`] : null
            })).filter(e => !!e.tinaId);
            if (d || !g?.length) return null;
            const f = g[0];
            return (0, r.jsx)(ht, {
              testId: "editorial-grid-module",
              children: (0, r.jsxs)(bt, {
                children: [(0, r.jsx)(S, {
                  showOn: "tabletMediumAndSmaller",
                  children: (0, r.jsx)(vt, {
                    testId: "newswire-carousel",
                    onCarouselSwipe: () => a({
                      event: "carousel_swipe"
                    }),
                    children: g?.map((e, t) => (0, r.jsx)(xt, {
                      children: (0, r.jsx)(gt, {
                        loading: d,
                        data: e.block,
                        id: e.id,
                        layout: "secondary",
                        aspect: "wide",
                        handleStoryClick: _(e, t + 1),
                        testId: e.tinaId
                      })
                    }, e.id))
                  })
                }), (0, r.jsx)(S, {
                  showOn: "tabletMediumAndLarger",
                  children: (0, r.jsx)(kt, {
                    testId: "primary-story",
                    children: (0, r.jsx)(gt, {
                      loading: d,
                      data: f.block,
                      id: f.id,
                      layout: "primary",
                      aspect: "wide",
                      handleStoryClick: _(f, 1),
                      testId: f.tinaId
                    })
                  })
                }), (0, r.jsx)(S, {
                  showOn: "tabletMediumAndLarger",
                  children: (0, r.jsx)(wt, {
                    children: g?.slice?.(1)?.map((e, t) => (0, r.jsx)(gt, {
                      loading: d,
                      data: e.block,
                      id: e.id,
                      layout: "tertiary",
                      aspect: "square",
                      transparent: !0,
                      handleStoryClick: _(e, t + 1),
                      testId: e.tinaId
                    }, e.id))
                  })
                })]
              })
            })
          },
          [pt]: ({
            block: e
          }) => {
            const [t] = (0, o.getLocale)(), a = e.tinaId, s = (0, n.useMemo)(() => ((e, t) => {
              const a = ((e, t) => `\n    post${e}: post(id_hash: "${e}", locale: "${t}") {\n            ...postFields\n    }\n`)(e, t);
              return i.gql`
        ${ft}

        ${r=a,`\nquery NewswirePosts {\n    ${r}\n}`}
    `;
              var r
            })(a, t.iso), [a]), {
              loading: l,
              data: c,
              error: d
            } = (0, i.useQuery)(s, {
              autoSetError: !1
            });
            if (d) return (0, tt.captureMessage)("Failed to load Newswire Unit", tt.Severity.Error), null;
            if (!e) return null;
            const u = {
              tinaId: a,
              block: c?.[`post${a}`] ? c[`post${a}`] : null
            };
            return u.block ? (0, r.jsx)(gt, {
              loading: l,
              data: u.block,
              id: e.sys.id,
              layout: "secondary",
              aspect: "wide"
            }) : null
          },
          [na]: ({
            block: e
          }) => (0, r.jsx)(L.Provider, {
            value: {
              analyticsData: {
                element_placement: `featured game section: ${e.game?.title}`
              }
            },
            children: (0, r.jsx)(sa, {
              block: e
            })
          }),
          [pa]: ({
            block: e
          }) => {
            const {
              colorMode: t
            } = (0, n.useContext)(v);
            if (!e) return;
            const {
              contentCollection: a,
              gap: s,
              theme: i
            } = e;
            if (!a?.items?.length) return null;
            const o = e.theme?.colorMode ?? t,
              l = (e => {
                if (!e) return "";
                const t = e?.replace("gap_", "");
                return y.LU.global.spacing.gap[t] ? y.LU.global.spacing.gap[t] : ""
              })(s);
            return (0, r.jsx)(x, {
              theme: i,
              children: (0, r.jsx)(ma, {
                gap: l,
                className: (0, b.m)(o ?? "dark"),
                children: a?.items.map(e => (0, r.jsx)(fa, {
                  contentCollection: e.contentCollection,
                  layout: e.layout
                }, e.sys.id))
              })
            })
          },
          [tr]: ({
            block: e
          }) => (0, r.jsx)(L.Provider, {
            value: {
              analyticsData: {
                element_placement: "featured content hero carousel"
              }
            },
            children: (0, r.jsx)(er, {
              block: e
            })
          }),
          [ir]: ({
            block: e
          }) => {
            const {
              blockPosition: t
            } = (0, n.useContext)(l.BlockRendererContext), a = (0, ne.Ub)(j.f.desktopSmallAndLarger);
            if (!e?.image) return null;
            const {
              image: s,
              title: i,
              titleSize: o,
              description: d,
              descriptionSize: u,
              textAlignment: m
            } = e, _ = {
              XS: 6,
              SM: 5,
              MD: 4,
              LG: 3,
              XL: 2
            } [o || "MD"] - (a ? 1 : 0), g = {
              "body-xs": "XS",
              "body-sm": "SM",
              "body-md": "MD",
              "body-lg": "LG"
            } [u ?? "body-md"];
            return (0, r.jsxs)(rr, {
              children: [(0, r.jsx)(sr, {
                children: (0, r.jsx)(l.BlockRenderer, {
                  block: s,
                  blockPosition: t
                })
              }), (0, r.jsxs)(nr, {
                textAlignment: m,
                children: [i && (0, r.jsx)(c.Heading, {
                  level: _,
                  asChild: !0,
                  children: (0, r.jsx)("h3", {
                    className: "_1cw0rgk2",
                    children: i
                  })
                }), d && (0, r.jsx)(l.RsgMdTextComponent, {
                  markdown: d,
                  bodySize: g
                })]
              })]
            })
          },
          [Er]: ({
            block: e
          }) => {
            const {
              totalItems: t,
              itemIndex: a
            } = (0, n.useContext)(We), {
              trackEvent: s
            } = G(), i = !!e.cta?.link?.url, o = (0, r.jsxs)(kr, {
              gradientColor: e?.gradientColor,
              interactive: !0,
              children: [(0, r.jsx)(wr, {
                asChild: !0,
                children: (0, r.jsx)(It, {
                  alt: e?.ariaLabel,
                  src: e.backgroundImage,
                  context: "2:3"
                })
              }), (0, r.jsx)(Cr, {
                image: e.logo,
                size: e.logoSize
              }), (0, r.jsxs)(yr, {
                children: [e.text && (0, r.jsx)(Sr, {
                  asChild: !0,
                  children: (0, r.jsx)(c.Body, {
                    children: e.text
                  })
                }), e.cta && (0, r.jsx)(Nr, {
                  appearance: e.cta.appearance,
                  iconLeft: e.cta.iconLeft,
                  iconRight: e.cta.iconRight,
                  override_backgroundColor: e.cta.backgroundColor,
                  size: "MD",
                  asChild: !0,
                  children: (0, r.jsx)("span", {
                    className: Ir({
                      appearance: e.cta.appearance
                    }),
                    tabIndex: -1,
                    children: e.cta?.text
                  })
                })]
              })]
            });
            return i ? (0, r.jsx)(ra, {
              block: e.cta,
              className: "_120g2g72",
              onClick: () => {
                s({
                  event: "card_click",
                  card_id: e?.sys?.id,
                  card_name: e?.text,
                  position: a + 1,
                  position_max: t
                }, e)
              },
              asChild: !0,
              children: o
            }) : o
          },
          [Ur]: ({
            block: e
          }) => {
            const {
              trackEvent: t
            } = G(), {
              blockPosition: a
            } = (0, n.useContext)(l.BlockRendererContext), s = (e, {
              label: a,
              analyticsData: r
            }) => () => {
              t({
                event: "component_tab_click",
                text: a,
                position: e + 1,
                ...r
              })
            };
            if (!e) return;
            const {
              contentCollection: i,
              mobileAspectRatio: o = "1/1",
              desktopAspectRatio: c = "16/9"
            } = e, d = i?.items ?? [], u = d.map(t => ({
              label: t.title,
              analyticsData: "analyticsData" in t ? t.analyticsData : e.analyticsData
            }));
            return (0, r.jsxs)(Fr, {
              items: d,
              children: [(0, r.jsx)(Br, {
                mobileAspectRatio: o,
                desktopAspectRatio: c,
                children: !!d.length && d.map((e, t) => (0, r.jsx)(Or, {
                  index: t,
                  children: (0, r.jsx)(rr, {
                    children: (0, r.jsx)(sr, {
                      children: (0, r.jsx)($r, {
                        index: t,
                        children: (0, r.jsx)(l.BlockRenderer, {
                          block: e.image,
                          blockPosition: a
                        })
                      })
                    })
                  })
                }, e?.sys?.id))
              }), !!d.length && (0, r.jsx)(Lr, {
                children: u.map((e, t) => (0, r.jsx)(Gr, {
                  appearance: "ghost",
                  index: t,
                  onClick: s(t, e),
                  children: e.label
                }, e.label))
              })]
            })
          },
          [ns]: ({
            block: e
          }) => (0, r.jsx)(L.Provider, {
            value: {
              analyticsData: {
                element_placement: "images marquee section"
              }
            },
            children: (0, r.jsx)(ss, {
              block: e
            })
          }),
          [is]: ({
            block: e,
            ...t
          }) => {
            const a = (0, n.useContext)(l.BlockRendererContext),
              {
                blockPosition: s
              } = a,
              {
                trackEvent: i
              } = G(),
              {
                primaryAccentColor: o,
                secondaryAccentColor: d
              } = (0, n.useContext)(v),
              u = t?.tabIndex,
              m = () => {
                let t = "";
                if (e.image?.source?.url) try {
                  t = new URL(e.image.source.url).pathname.split("/").pop() ?? ""
                } catch {
                  t = e.image?.source?.url.split("/").pop() ?? ""
                }
                return {
                  card_id: e.sys.id,
                  card_name: t,
                  position: s?.blockIndex && Number.isFinite(s.blockIndex) ? s.blockIndex + 1 : void 0
                }
              };
            if (!e?.image) return null;
            const {
              image: _,
              caption: g,
              downloadButton: f,
              thumbnailAspectRatio: p,
              thumbnailObjectPosition: h,
              zoomControls: b
            } = e;
            return (0, r.jsxs)(c.Lightbox.Root, {
              altText: _?.altText || "",
              onOpenChange: e => {
                e && window.dispatchEvent(new CustomEvent("header:hideNav", {
                  detail: {
                    isHidden: !0
                  }
                }))
              },
              children: [(0, r.jsxs)(c.Lightbox.Trigger, {
                tabIndex: u,
                className: "_1ynyi8s0",
                style: {
                  aspectRatio: p,
                  ...(0, y.DI)({
                    [c.Lightbox.CssVars.TriggerBorder]: o,
                    [c.Lightbox.CssVars.TriggerIconBg]: o,
                    [c.Lightbox.CssVars.TriggerIconFg]: d,
                    [c.Lightbox.CssVars.TriggerIconBgActive]: o,
                    [c.Lightbox.CssVars.TriggerIconFgActive]: d
                  })
                },
                onClick: () => {
                  i({
                    event: "card_click",
                    ...m()
                  }, e)
                },
                children: [(0, r.jsx)(c.Lightbox.Thumbnail, {
                  src: _?.source?.url,
                  style: {
                    objectPosition: h
                  }
                }), (0, r.jsx)(c.Lightbox.OpenIcon, {
                  className: "_1ynyi8s2",
                  asChild: !0,
                  children: (0, r.jsx)(ba.Maximize2, {
                    label: ""
                  })
                })]
              }), (0, r.jsxs)(c.Lightbox.Portal, {
                children: [(0, r.jsx)(c.Lightbox.Overlay, {}), (0, r.jsxs)(c.Lightbox.Content, {
                  children: [(0, r.jsx)(c.Lightbox.ZoomPan, {
                    children: (0, r.jsx)(c.Lightbox.Image, {
                      className: "_1ynyi8s1",
                      src: _?.source?.url
                    })
                  }), (0, r.jsxs)(c.Lightbox.Controls, {
                    children: [g && (0, r.jsx)(c.Lightbox.Caption, {
                      children: g
                    }), (0, r.jsx)(c.Lightbox.Close, {
                      onPress: () => {
                        i({
                          event: "modal_close",
                          ...m()
                        }, e)
                      }
                    }), b && (0, r.jsx)(c.Lightbox.Zoom, {}), f && (0, r.jsx)(c.Lightbox.Download, {})]
                  })]
                })]
              })]
            })
          },
          [os]: ({
            block: e
          }) => {
            const {
              trackEvent: t
            } = G(), a = e?.image?.imageFilesCollection?.items, s = e?.image?.altText, n = fe(a?.map(e => e?.context)), i = a?.find(e => e.context === n) || a?.[0], o = i?.source?.url, l = e.link?.url;
            return a && o && n && l ? (0, r.jsx)("div", {
              className: "_1eo5pzj0",
              children: (0, r.jsx)(w, {
                href: l,
                className: "_1eo5pzj1",
                onClick: () => {
                  t({
                    event: "cta_other"
                  }, e)
                },
                children: (0, r.jsxs)(ue, {
                  children: [a?.map((e, t) => {
                    const a = e.sys.id + t,
                      s = e.source?.url,
                      i = ge.get(e?.context || n);
                    return s ? (0, r.jsx)(me, {
                      src: s,
                      media: i,
                      width: e.source?.width,
                      height: e.source?.height
                    }, a) : null
                  }), (0, r.jsx)(_e, {
                    src: o,
                    alt: s
                  })]
                })
              })
            }) : null
          },
          [Ss]: ({
            block: e
          }) => {
            const t = (0, o.useIntl)(),
              {
                trackEvent: a
              } = G();
            if (!e) return null;
            const s = e.cardsCollection?.items || [],
              [n, ...i] = s,
              l = (e, t) => se[e]?.[t] ?? "1:1",
              c = (e, t) => () => {
                a({
                  event: "card_click",
                  card_id: e?.sys?.id,
                  position: t + 1,
                  position_max: s.length,
                  ...e.link?.url && {
                    link_url: e.link?.url
                  },
                  ...e.analyticsData
                }, e.cta)
              };
            return (0, r.jsxs)(us, {
              children: [(0, r.jsx)(S, {
                showOn: "mobile",
                forceMount: !0,
                children: (0, r.jsxs)(ms, {
                  gridType: e.variant,
                  children: [(0, r.jsx)(gs, {
                    type: re(0),
                    children: (0, r.jsx)(w, {
                      href: n.link?.url,
                      target: "_blank",
                      title: t.formatMessage(ys.masonry_grid_external_store_link),
                      onClick: () => c(n, 0),
                      children: (0, r.jsx)(Rs, {
                        card: n,
                        context: "4:5",
                        size: "medium"
                      })
                    })
                  }), (0, r.jsx)(fs, {
                    defaultSlide: 0,
                    onCarouselSwipe: () => a({
                      event: "carousel_swipe"
                    }),
                    children: i.map((e, a) => (0, r.jsx)(ps, {
                      children: (0, r.jsx)(w, {
                        href: e.link?.url,
                        target: "_blank",
                        title: t.formatMessage(ys.masonry_grid_external_store_link),
                        onClick: () => c(e, a),
                        className: js,
                        children: (0, r.jsx)(Rs, {
                          card: e,
                          context: "4:3",
                          size: "small"
                        })
                      })
                    }, e.sys.id))
                  })]
                })
              }), (0, r.jsx)(S, {
                showOn: "tabletSmall",
                forceMount: !0,
                children: (0, r.jsx)(_s, {
                  gridType: e.variant,
                  children: s.map((e, a) => {
                    const s = re(a),
                      n = l("tabletSmall", s),
                      i = 0 === a ? "large" : "medium";
                    return (0, r.jsx)(gs, {
                      type: s,
                      children: (0, r.jsx)(w, {
                        href: e.link?.url,
                        target: "_blank",
                        title: t.formatMessage(ys.masonry_grid_external_store_link),
                        onClick: () => c(e, a),
                        className: js,
                        children: (0, r.jsx)(Rs, {
                          card: e,
                          context: n,
                          size: i
                        })
                      })
                    }, e.sys.id)
                  })
                })
              }), (0, r.jsx)(S, {
                showOn: "tabletMedium",
                forceMount: !0,
                children: (0, r.jsx)(_s, {
                  gridType: e.variant,
                  children: s.map((e, a) => {
                    const s = re(a),
                      n = l("tabletMedium", s),
                      i = 0 === a ? "medium" : "small";
                    return (0, r.jsx)(gs, {
                      type: s,
                      children: (0, r.jsx)(w, {
                        href: e.link?.url,
                        target: "_blank",
                        title: t.formatMessage(ys.masonry_grid_external_store_link),
                        onClick: () => c(e, a),
                        className: js,
                        children: (0, r.jsx)(Rs, {
                          card: e,
                          context: n,
                          size: i
                        })
                      })
                    }, e.sys.id)
                  })
                })
              }), (0, r.jsx)(S, {
                showOn: "tabletLarge",
                forceMount: !0,
                children: (0, r.jsx)(_s, {
                  gridType: e.variant,
                  children: s.map((e, a) => {
                    const s = re(a),
                      n = l("tabletLarge", s),
                      i = 0 === a ? "large" : "medium";
                    return (0, r.jsx)(gs, {
                      type: s,
                      children: (0, r.jsx)(w, {
                        href: e.link?.url,
                        target: "_blank",
                        title: t.formatMessage(ys.masonry_grid_external_store_link),
                        onClick: () => c(e, a),
                        className: js,
                        children: (0, r.jsx)(Rs, {
                          card: e,
                          context: n,
                          size: i
                        })
                      })
                    }, e.sys.id)
                  })
                })
              }), (0, r.jsx)(S, {
                showOn: "desktopSmallAndLarger",
                forceMount: !0,
                children: (0, r.jsx)(_s, {
                  gridType: e.variant,
                  children: s.map((e, a) => {
                    const s = re(a),
                      n = l("desktopSmallAndLarger", s),
                      i = 0 === a ? "large" : "medium";
                    return (0, r.jsx)(gs, {
                      type: s,
                      children: (0, r.jsx)(w, {
                        href: e.link?.url,
                        target: "_blank",
                        title: t.formatMessage(ys.masonry_grid_external_store_link),
                        onClick: () => c(e, a),
                        className: js,
                        children: (0, r.jsx)(Rs, {
                          card: e,
                          context: n,
                          size: i
                        })
                      })
                    }, e.sys.id)
                  })
                })
              })]
            })
          },
          [Os]: ({
            block: e,
            renderSectionWrapper: t
          }) => {
            const a = (0, o.useIntl)(),
              s = (0, i.useRockstarTokenPing)(),
              {
                loggedIn: d,
                data: m,
                loading: _
              } = (0, p.useRockstarUser)(),
              g = (0, u.useNavigate)(),
              [{
                iso: f
              }] = (0, o.getLocale)(),
              h = (0, i.toScLocaleString)(f),
              {
                login: b
              } = (0, i.getConfigForDomain)(),
              v = (0, Ns.A)(),
              [x] = (0, u.useSearchParams)(),
              k = "true" === x.get("marketing"),
              w = {
                lang: h,
                location: location.pathname,
                login: b,
                navigate: g,
                www: v.sites.www
              },
              y = {
                ...m,
                isFromAuth: k,
                loggedIn: d,
                pingBearer: s,
                userLoading: _
              },
              j = Ps(w, y),
              {
                dialog: C,
                urls: R,
                handleSubscribeButton: S,
                isButtonLoading: N,
                isLoading: I,
                isSubscribed: E,
                setShowDialog: T,
                showDialog: A
              } = j;
            let M;
            M = null === d || d && I ? "loading" : "ready";
            const z = "ready" === M,
              D = "ready" == (_ ? "loading" : "ready") && d && z && !0 === E;
            if ((0, n.useEffect)(() => {
                t && t(A || !D)
              }, [t, A]), !e) return null;
            const F = C?.buttons || [{
                buttonText: a.formatMessage(Ms.ns_ok_button_text),
                onClick: () => {
                  T(!1)
                },
                testId: "ok-btn",
                style: "secondary"
              }, {
                buttonText: C?.showManagePreferences ? a.formatMessage(Ms.ns_manage_prefs_button_text) : "",
                isLink: !0,
                link: R.preferences,
                testId: "preferences-btn",
                style: "ghost"
              }],
              P = (e, t) => (0, r.jsx)(c.Heading, {
                level: 3,
                className: "_4fo4mk1",
                children: t
              }),
              L = {
                [l.ContentfulTypes.BLOCKS.HEADING_1]: P,
                [l.ContentfulTypes.BLOCKS.HEADING_2]: P,
                [l.ContentfulTypes.BLOCKS.HEADING_3]: P,
                [l.ContentfulTypes.BLOCKS.HEADING_4]: P,
                [l.ContentfulTypes.BLOCKS.HEADING_5]: P,
                [l.ContentfulTypes.BLOCKS.HEADING_6]: P
              },
              W = d && !z;
            return (0, r.jsxs)(r.Fragment, {
              children: [!D && (0, r.jsx)(Ls, {
                children: W ? (0, r.jsx)(Es.A, {}) : (0, r.jsxs)(r.Fragment, {
                  children: [(0, r.jsx)(Ws, {
                    asChild: !0,
                    children: e.image && (0, r.jsx)(ce, {
                      src: e.image
                    })
                  }), (0, r.jsxs)(Gs, {
                    children: [e.textContent && (0, r.jsx)(Bs, {
                      children: (0, r.jsx)(l.RsgMdTextComponent, {
                        markdown: e.textContent,
                        rsgRichTextOptions: {
                          renderNode: L
                        }
                      })
                    }), (0, r.jsx)(qs, {
                      onClick: S,
                      isDisabled: N,
                      children: e.cta?.text
                    })]
                  })]
                })
              }), C && (0, r.jsx)(Is.A, {
                icon: C.icon,
                title: a.formatMessage(C.heading),
                secondaryText: a.formatMessage(C.bodyText),
                closeOnOutsideClick: C.closeOnOutsideClick,
                buttons: F,
                showDialog: A,
                onClose: () => T(!1)
              })]
            })
          },
          [on]: ({
            block: e
          }) => {
            const {
              trackEvent: t,
              trackRichTextHyperlink: a
            } = G();
            return (0, r.jsxs)(Qs, {
              colorMode: "dark",
              backgroundColor: e.backgroundColor,
              gradientEnabled: e.enableGradient,
              imagePlacement: e.imagePlacement,
              children: [(0, r.jsx)(Zs, {
                image: e.backgroundImage
              }), (0, r.jsxs)(Ys, {
                contentAlignment: e.contentAlignment,
                children: [(0, r.jsx)(nn, {
                  children: e.badge
                }), (0, r.jsx)(Js, {
                  image: e.foregroundImage,
                  size: e.foregroundImageSize
                }), (0, r.jsxs)(rn, {
                  children: [(0, r.jsx)(tn, {
                    level: 4,
                    children: e.headline
                  }), (0, r.jsx)(an, {
                    size: "MD",
                    children: e.description
                  })]
                }), e.cta && (0, r.jsx)(en, {
                  appearance: e.cta.appearance,
                  override_backgroundColor: e.cta.backgroundColor,
                  size: "MD",
                  onPress: (s = e.cta, () => t(s.analyticsData, s)),
                  asChild: !0,
                  children: (0, r.jsx)("a", {
                    href: e.cta.link?.url,
                    children: e.cta.text
                  })
                }), (0, r.jsx)(sn, {
                  markdown: e.legalText,
                  onHyperlinkClick: e => a(e)
                })]
              })]
            });
            var s
          },
          [W]: ({
            block: e
          }) => {
            const {
              blockPosition: t
            } = (0, n.useContext)(l.BlockRendererContext), {
              trackEvent: a,
              useTrackPageSectionImpression: s
            } = G(), {
              ref: o
            } = s(e.analyticsData), [c, d] = (0, n.useState)(!1), [u, m] = (0, n.useState)(!0), {
              isMobile: _
            } = (0, i.useWindowResize)(), g = e.title, f = e.cta, p = g || f;
            (0, n.useEffect)(() => {
              if (e?.cta?.link?.url) try {
                new URL(e.cta.link.url).origin !== window.location.origin && d(!0)
              } catch {
                d(!1)
              }
            }, [e]);
            const h = (0, n.useCallback)(e => {
              m(e)
            }, []);
            if (!e || !u) return null;
            const v = {
                topPaddingMultiplier: P[e.topPadding] ?? P.default,
                bottomPaddingMultiplier: P[e.bottomPadding] ?? P.default,
                backgroundCss: e.backgroundCss,
                backgroundImage: _ ? e.mobileBackgroundImage?.source?.url : e.desktopBackgroundImage?.source?.url,
                className: (0, b.m)(e.theme?.colorMode ?? "dark")
              },
              k = (0, r.jsxs)(A, {
                ref: o,
                ...v,
                children: [p && (0, r.jsxs)(M, {
                  children: [g && (0, r.jsx)(z, {
                    level: 2,
                    children: g
                  }), f?.text && f.link?.url && (0, r.jsx)(D, {
                    label: f.text,
                    url: f.link.url,
                    isExternal: c,
                    iconRight: f.iconRight?.icon,
                    onClick: () => a(f?.analyticsData, f),
                    children: f.text
                  })]
                }), e.contentCollection?.items && (0, r.jsx)(F, {
                  children: e.contentCollection.items?.map(e => (0, r.jsx)(l.BlockRenderer, {
                    block: e,
                    blockPosition: t,
                    renderSectionWrapper: h
                  }, e.sys?.id))
                })]
              });
            let w;
            return w = (0, r.jsx)(x, {
              theme: e.theme,
              children: k
            }), w
          },
          [_n]: ({
            block: e
          }) => {
            if (!e) return null;
            const {
              cta: t
            } = e;
            return (0, r.jsx)(ln, {
              children: (0, r.jsxs)(cn, {
                children: [(0, r.jsxs)(dn, {
                  children: [(0, r.jsx)(un, {
                    altText: e.title
                  }), (0, r.jsx)(mn, {
                    children: e.description
                  })]
                }), t && (0, r.jsx)(ra, {
                  block: t,
                  size: "MD"
                })]
              })
            })
          },
          [Sn]: ({
            block: e
          }) => {
            const {
              primaryAccentColor: t,
              headerTextColor: a
            } = (0, n.useContext)(v), {
              alignment: s,
              badge: i,
              eyebrow: o,
              eyebrowSize: c,
              header: d,
              headerSize: u,
              body: m,
              bodySize: _,
              ctasCollection: g,
              footnote: f,
              headerTextWrap: p,
              bodyTextWrap: h
            } = e;
            return (0, r.jsxs)(xn, {
              align: s || "left",
              children: [i && (0, r.jsx)(kn, {
                children: i
              }), (0, r.jsxs)(wn, {
                bodyTextWrap: h,
                children: [o && (0, r.jsx)(yn, {
                  size: c,
                  children: o
                }), d && (0, r.jsx)(jn, {
                  headerSize: u,
                  textColor: a,
                  headerTextWrap: p,
                  children: d
                }), m && (0, r.jsx)(Cn, {
                  asChild: !0,
                  children: (0, r.jsx)(l.RsgMdTextComponent, {
                    markdown: m,
                    bodySize: _
                  })
                })]
              }), g && g?.items?.length > 0 && (0, r.jsx)(Rn, {
                children: g.items.map(e => (0, r.jsx)(ra, {
                  block: e,
                  backgroundColor: t
                }, e.text))
              }), f && (0, r.jsx)(l.RsgMdTextComponent, {
                markdown: f,
                bodySize: "XS"
              })]
            })
          },
          [An]: ({
            block: e
          }) => {
            const {
              blockPosition: t
            } = (0, n.useContext)(l.BlockRendererContext);
            if (!e?.content) return null;
            const {
              image: a,
              content: s,
              variant: i
            } = e;
            return (0, r.jsxs)(In, {
              variant: i ?? "image_right",
              children: [(0, r.jsx)(En, {
                altText: a?.altText ?? "",
                src: a?.source?.url ?? ""
              }), (0, r.jsx)(Tn, {
                children: (0, r.jsx)(l.BlockRenderer, {
                  block: s,
                  blockPosition: t
                })
              })]
            })
          },
          [Dn]: ({
            block: e
          }) => {
            if (e) return (0, r.jsx)(r.Fragment, {
              children: e.videos?.referencesCollection?.items.map(e => {
                if ("Link" === e.type && e?.link?.url) {
                  const t = new URL(e?.link?.url),
                    a = "www.rockstargames.com" === t.hostname,
                    s = t.pathname.split("/");
                  if (a && "videos" === s[1]) {
                    const t = s[2];
                    return (0, r.jsx)(zn(), {
                      id: t,
                      autoplay: !0
                    }, e.sys.id)
                  }
                }
              })
            })
          },
          [Ti]: ({
            block: e
          }) => {
            const {
              data: t
            } = (0, i.useQuery)(Ei.MetaUrlInfo, {
              variables: {
                url: e?.tinaPageUrl ?? ""
              },
              setTitleDataPath: "metaUrlInfo.title"
            });
            if (!t || !e) return null;
            const a = (e => {
              if (!e) return null;
              const {
                content: t
              } = e.metaUrlInfo.tina.payload;
              if (!t) return null;
              let a = {
                _template: ""
              };
              return t.forEach(e => {
                if ("gen9.TinaWrapper" === e?._template) {
                  const t = e.content.find(e => "Engagement" === e?._template);
                  t && (a = t)
                }
              }), a
            })(t);
            return (0, r.jsx)(Ii, {
              fontTheme: "helvetica",
              usePadding: !1,
              giftId: a?.giftId || "",
              location: a?.location || "",
              jumpLinkId: a?.jumpLinkId || "",
              legalText: a?._memoq?.legalText || "",
              successScreen: {
                successContent: a?.successScreen?._memoq?.successContent || "",
                successHeadline: a?.successScreen?._memoq?.successHeadline || ""
              },
              errorScreen: {
                errorHeadline: a?.errorScreen?._memoq?.errorHeadline || "",
                errorButton: a?.errorScreen?._memoq?.errorButton || ""
              },
              unlinkedScreen: {
                unlinkedContent: a?.unlinkedScreen?._memoq?.unlinkedContent || "",
                unlinkedHeadline: a?.unlinkedScreen?._memoq?.unlinkedHeadline || "",
                unlinkedButtonText: a?.unlinkedScreen?._memoq?.unlinkedButtonText || ""
              },
              introScreen: {
                tag: a?.introScreen?._memoq?.tag || "",
                introHeadline: a?.introScreen?._memoq?.introHeadline || "",
                introContent: a?.introScreen?._memoq?.introContent || "",
                btnTextLoggedIn: a?.introScreen?._memoq?.btnTextLoggedIn || "",
                btnTextLoggedOut: a?.introScreen?._memoq?.btnTextLoggedOut || "",
                image: {
                  alt: a?.introScreen?.image?._memoq?.alt || "",
                  sources: a?.introScreen?.image?.sources
                }
              }
            })
          }
        },
        Di = ({
          data: e
        }) => (0, r.jsx)(_, {
          children: (0, r.jsx)(l.PageRenderer, {
            data: e.items[0],
            customBlocks: zi,
            children: (0, r.jsx)(Q, {})
          })
        }),
        Fi = ({
          slug: e
        }) => {
          let t = e;
          const {
            loading: a,
            data: s
          } = (0, l.useContentfulQuery)({
            query: d.wwwPageQuery,
            variables: {
              slug: t
            }
          });
          return !a && s && s.wwwPageCollection.items[0] ? (0, r.jsx)(Di, {
            data: s.wwwPageCollection
          }) : null
        },
        Pi = (Li = ({
          slug: e
        }) => {
          const [{
            iso: t
          }] = (0, o.getLocale)(), a = (0, n.useCallback)(() => {
            J.u.refresh()
          }, []);
          return (0, r.jsx)(s.NP, {
            colorScheme: "dark",
            defaultColorScheme: "dark",
            defaultContrastMode: "normal",
            defaultPlatformScale: "desktop",
            className: "_1dx15kv0",
            locale: t,
            onPlatformScaleChange: a,
            children: (0, r.jsx)(Fi, {
              slug: e
            })
          })
        }, (0, o.withIntl)(Li, Z));
      var Li
    },
    23781: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/edf01daa4f0392081705c17a74d8a146.svg"
    },
    24256: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/201de0eb81b09ea93aa1aef2a6824b7c.svg"
    },
    24611: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f2fc4de3decfa0ac007f6cbd91658a9.svg"
    },
    26151: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b48e041f1412ff62c8a92dc424b59aa5.svg"
    },
    27351: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/64d281825da1c782681bcc096d693e32.svg"
    },
    28414: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c2acdad576048f5c48b2ee6a2a2a90a3.svg"
    },
    29315: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => i
      });
      var r = a(42295),
        s = a(71127);
      class n extends s.Component {
        constructor(e) {
          super(e), this.state = {
            header: e.header ?? null,
            hidden: e.hidden ?? !1
          }
        }
        static getDerivedStateFromError(e) {
          return {
            error: {
              message: e.message ?? e.toString()
            }
          }
        }
        render() {
          return this?.state?.error?.message && this?.state?.hidden ? null : this?.state?.error?.message ? (0, r.jsxs)("div", {
            className: "rockstargames-sites-rockstargamesd5c408a8b618087ef4bb452f96526b2b",
            children: [(0, r.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, r.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      const i = (e, t = null, a = !1) => {
        const s = s => (0, r.jsx)(n, {
          header: t,
          hidden: a,
          children: (0, r.jsx)(e, {
            ...s
          })
        });
        return s.displayName = `withSimpleErrorBoundary(${e.displayName||e.name||"Component"})`, s
      }
    },
    29362: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7ac89f9e00ded04ef4b2dd3eaf3e8734.svg"
    },
    29886: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2921f91628eca684eaf0f91d8b6a5a76.svg"
    },
    32323: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/703a546f7a5109c1e2af87a212135aad.png"
    },
    33492: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg"
    },
    36672: (e, t, a) => {
      var r = {
        "./cero_a.png": 97558,
        "./cero_b.svg": 29362,
        "./cero_c.svg": 67299,
        "./cero_d.svg": 9020,
        "./cero_rp.png": 17065,
        "./cero_z.svg": 46554,
        "./djctq_10.svg": 51392,
        "./djctq_12.svg": 8674,
        "./djctq_14.svg": 89836,
        "./djctq_16.svg": 54222,
        "./djctq_18.svg": 58648,
        "./djctq_er.svg": 8054,
        "./djctq_l.svg": 23781,
        "./esrb_ao.svg": 89235,
        "./esrb_e.svg": 24256,
        "./esrb_e10plus.svg": 65315,
        "./esrb_latam_rp.svg": 6325,
        "./esrb_m.svg": 87256,
        "./esrb_m_ao.svg": 10419,
        "./esrb_rp.svg": 89069,
        "./esrb_rplm17.svg": 95088,
        "./esrb_t.svg": 18177,
        "./fpb_13.svg": 86595,
        "./fpb_16.svg": 28414,
        "./fpb_18.svg": 81864,
        "./fpb_pg.svg": 77404,
        "./grac_12.svg": 8711,
        "./grac_15.svg": 6312,
        "./grac_18.svg": 48157,
        "./grac_19.svg": 19612,
        "./grac_a.svg": 89303,
        "./gsrr_0.svg": 67443,
        "./gsrr_12.svg": 49980,
        "./gsrr_15.svg": 24611,
        "./gsrr_18.svg": 68918,
        "./gsrr_6.svg": 63117,
        "./nmc_12.svg": 2024,
        "./nmc_16.svg": 50324,
        "./nmc_18.svg": 52466,
        "./nmc_21.svg": 3950,
        "./nmc_3.svg": 9188,
        "./nmc_7.svg": 18712,
        "./oflc_g.svg": 21022,
        "./oflc_m.svg": 22772,
        "./oflc_ma15.svg": 9815,
        "./oflc_pg.svg": 47580,
        "./oflc_r18.svg": 74432,
        "./pegi_12.svg": 15821,
        "./pegi_16.svg": 86929,
        "./pegi_18.svg": 51575,
        "./pegi_3.svg": 27351,
        "./pegi_4.svg": 82424,
        "./pegi_6.svg": 46618,
        "./pegi_7.svg": 40491,
        "./pegi_rp.png": 94293,
        "./rars_0.svg": 36855,
        "./rars_12.svg": 98952,
        "./rars_16.svg": 65044,
        "./rars_18.svg": 72690,
        "./rars_6.svg": 51913,
        "./tw_rp.png": 68271,
        "./usk_0.svg": 84406,
        "./usk_12.svg": 26151,
        "./usk_16.svg": 87707,
        "./usk_18.svg": 90717,
        "./usk_6.svg": 2696,
        "./usk_rp.svg": 21228,
        "./vaci_rp.png": 32323
      };

      function s(e) {
        var t = n(e);
        return a(t)
      }

      function n(e) {
        if (!a.o(r, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return r[e]
      }
      s.keys = function() {
        return Object.keys(r)
      }, s.resolve = n, e.exports = s, s.id = 36672
    },
    36773: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5bd8456deb2338503b8fd44786b5fa07.svg"
    },
    36855: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bba2f70e014e82b336a9f80625053089.svg"
    },
    38997: e => {
      var t = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "MetaUrlInfo"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "url"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "locale"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "cache"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean"
              }
            },
            defaultValue: {
              kind: "BooleanValue",
              value: !0
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "metaUrlInfo"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "url"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "url"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "cache"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "cache"
                  }
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "tina"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "payload"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 190
        }
      };

      function a(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var r = e.type;
          "NamedType" === r.kind && t.add(r.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach(function(e) {
          a(e, t)
        }), e.variableDefinitions && e.variableDefinitions.forEach(function(e) {
          a(e, t)
        }), e.definitions && e.definitions.forEach(function(e) {
          a(e, t)
        })
      }
      t.loc.source = {
        body: "query MetaUrlInfo($url: String, $locale: String!, $cache: Boolean = true) {\n    metaUrlInfo(url: $url, locale: $locale, cache: $cache) {\n        tina {\n            payload\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var r = {};

      function s(e, t) {
        for (var a = 0; a < e.definitions.length; a++) {
          var r = e.definitions[a];
          if (r.name && r.name.value == t) return r
        }
      }
      t.definitions.forEach(function(e) {
        if (e.name) {
          var t = new Set;
          a(e, t), r[e.name.value] = t
        }
      }), e.exports = t, e.exports.MetaUrlInfo = function(e, t) {
        var a = {
          kind: e.kind,
          definitions: [s(e, t)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var n = r[t] || new Set,
          i = new Set,
          o = new Set;
        for (n.forEach(function(e) {
            o.add(e)
          }); o.size > 0;) {
          var l = o;
          o = new Set, l.forEach(function(e) {
            i.has(e) || (i.add(e), (r[e] || new Set).forEach(function(e) {
              o.add(e)
            }))
          })
        }
        return i.forEach(function(t) {
          var r = s(e, t);
          r && a.definitions.push(r)
        }), a
      }(t, "MetaUrlInfo")
    },
    39821: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    40491: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27a26f477c8db29df4ceec4517c7f42b.svg"
    },
    42659: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg"
    },
    46554: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/03ab76c58ed61a83bf035c923dbe32b2.svg"
    },
    46618: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c01f38f1051e751caa633d533202873c.svg"
    },
    47580: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6079496697e537802f8a0eb5a83d2e94.svg"
    },
    48157: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1a3660d76f39527a79f8a49bb27a74be.svg"
    },
    49733: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c6affc8b37ec4c75486ab6d12b2de395.svg"
    },
    49980: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/05e9f2f27883d4cbabb3d4e4e16c9c74.svg"
    },
    50324: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/937b7a0c5a128c39addf2adeba2d2f23.svg"
    },
    50402: () => {},
    51392: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f468aef6f0b5399d5c0f6b2e95b60cc5.svg"
    },
    51575: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dabd13175cc0894dcb3f942d3d2dab86.svg"
    },
    51913: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/01b0cd4466759aa349ac4036594ab6ae.svg"
    },
    51931: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => u
      });
      var r = a(42295),
        s = a(71127),
        n = a(58136),
        i = a(93231),
        o = a(1556),
        l = a.n(o);
      const c = ({
          button: e,
          closeDialog: t,
          style: a = "primary"
        }) => {
          const {
            buttonIcon: s,
            buttonText: n,
            extraClasses: o,
            isDisabled: c,
            isLink: d,
            link: u,
            onClick: m,
            testId: _
          } = e;
          return d ? n && (0, r.jsx)(i.Button, {
            asChild: !0,
            appearance: a,
            size: "MD",
            children: (0, r.jsx)("a", {
              href: u,
              ..._ && {
                "data-testid": _
              },
              children: n
            })
          }) : (0, r.jsx)(i.Button, {
            autoFocus: !0,
            iconRight: s,
            className: l()(o),
            isDisabled: c,
            onPress: e => (e => {
              m && m(), t && t(), "function" == typeof e?.stopPropagation && e?.stopPropagation()
            })(e),
            type: "button",
            appearance: a,
            "aria-label": n,
            ..._ && {
              "data-testid": _
            },
            children: n
          })
        },
        d = {
          actions: "rockstargames-sites-rockstargamesd35d1125eabb9ae0e941bd585003c4fc",
          check: "rockstargames-sites-rockstargamesb63b9588fb98b439d19028797670c6c5",
          content: "rockstargames-sites-rockstargamesefe65f5c39de5d044fdc6b13c1771125",
          dialog: "rockstargames-sites-rockstargamesd2c9ef0a70d425745a27c169c594199a",
          error: "rockstargames-sites-rockstargamesf654f7a2bf475a939f8c05fb569bfd5e",
          "fade-in": "rockstargames-sites-rockstargamese30057881578a38b5dc6f50854c6b56d",
          heading: "rockstargames-sites-rockstargamesdab9a8f190197c99405cebe1e9a992d6",
          icon: "rockstargames-sites-rockstargamesbc1e57fee27452c58670e4f60e492246",
          mail: "rockstargames-sites-rockstargamesb120386c4c2485c587f87173721d63be",
          message: "rockstargames-sites-rockstargamesf7cd64be4f94a272222f88f34789734a",
          pillBtn: "rockstargames-sites-rockstargamesb403f298c2eff00899432c93daa15aec",
          selected: "rockstargames-sites-rockstargamesa6cab397bf3a16564fcc531ef4c16130",
          "slide-up": "rockstargames-sites-rockstargamesb2b3117a07a11b3ec5897e4718e24373"
        },
        u = ({
          icon: e,
          title: t,
          secondaryText: a,
          buttons: i,
          showDialog: o,
          onClose: l = () => {},
          closeOnOutsideClick: u = !0,
          extraClasses: m
        }) => {
          const _ = (0, s.useRef)(null),
            {
              setBodyIsLocked: g
            } = (0, n.useBodyScrollable)("AlertDialog");
          (0, s.useEffect)(() => {
            o && _?.current && (_.current?.showModal?.(), g(!0))
          }, [o]);
          const f = () => {
            g(!1), l(), _.current?.close?.()
          };
          if (o) return (0, r.jsxs)("dialog", {
            ref: _,
            className: d.dialog,
            onClick: e => (e => {
              if (!e.currentTarget) return;
              const t = e.currentTarget.getBoundingClientRect();
              (t.left > e.clientX || t.right < e.clientX || t.top > e.clientY || t.bottom < e.clientY) && u && (g(!1), l(), e.currentTarget.close())
            })(e),
            "data-testid": "alert-dialog",
            children: [e && (0, r.jsx)("i", {
              className: [d.icon, d[e]].join(" ")
            }), (0, r.jsxs)("div", {
              className: [d.content, m?.content].join(" "),
              children: [(0, r.jsx)("h3", {
                className: [d.heading, m?.heading].join(" "),
                children: t
              }), a && (0, r.jsx)("div", {
                className: [d.message, m?.message].join(" "),
                dangerouslySetInnerHTML: {
                  __html: a
                }
              })]
            }), i && (0, r.jsx)("div", {
              className: d.actions,
              children: i.slice(0, 2).map((e, t) => (0, r.jsx)(c, {
                style: e?.style ?? (0 === t ? "primary" : "secondary"),
                button: e,
                closeDialog: f
              }, e.buttonText))
            })]
          })
        }
    },
    52466: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/46a27d8d16855dcc2a217f48243c6d82.svg"
    },
    54222: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07f9f9e93ec430813e74cbce545962c4.svg"
    },
    58648: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/608f591c35aff9d47091dd7fe9a8fb13.svg"
    },
    59129: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f74e871585118640ffd9ce881181a176.svg"
    },
    62749: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2ef574ea2aa502447d579267ff37e251.svg"
    },
    63117: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d910a48fc0914f58ca80dc0732a7677.svg"
    },
    65044: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1a94d5705ae3ddeb4c8c2fde79bfe81.svg"
    },
    65115: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg"
    },
    65315: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/534078f6307f97ce0d70e0bb885f9d77.svg"
    },
    65437: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27ae07e3226006749e6cb6428bc62bb1.svg"
    },
    66135: (e, t, a) => {
      "use strict";
      a.d(t, {
        f: () => r
      });
      var r = {
        mobile: "(min-width: 0px) and (max-width: 767.98px)",
        mobileSmall: "(min-width: 0px) and (max-width: 499.98px)",
        mobileMedium: "(min-width: 500px) and (max-width: 767.98px)",
        tabletSmall: "(min-width: 768px) and (max-width: 1023.98px)",
        tabletMedium: "(min-width: 1024px) and (max-width: 1279.98px)",
        tabletSmallAndMedium: "(min-width: 768px) and (max-width: 1279.98px)",
        tabletLarge: "(min-width: 1280px) and (max-width: 1439.98px)",
        tabletMediumAndLarge: "(min-width: 1024px) and (max-width: 1439.98px)",
        tablet: "(min-width: 768px) and (max-width: 1439.98px)",
        desktop: "(min-width: 1440px) and (max-width: 2559.98px)",
        desktopSmall: "(min-width: 1440px) and (max-width: 1919.98px)",
        desktopMedium: "(min-width: 1920px) and (max-width: 2559.98px)",
        tabletAndDesktop: "(min-width: 768px) and (max-width: 2559.98px)",
        mobileMediumAndLarger: "(min-width: 500px)",
        tabletSmallAndLarger: "(min-width: 768px)",
        tabletMediumAndLarger: "(min-width: 1024px)",
        tabletMediumAndSmaller: "(max-width: 1023.98px)",
        tabletLargeAndLarger: "(min-width: 1280px)",
        tabletLargeAndSmaller: "(max-width: 1279.98px)",
        desktopSmallAndLarger: "(min-width: 1440px)",
        desktopMediumAndLarger: "(min-width: 1920px)",
        desktopLargeAndLarger: "(min-width: 2560px)",
        portrait: "(orientation: portrait)",
        landscape: "(orientation: landscape)",
        mobileLandscape: "(min-width: 500px) and (max-width: 767px) and (orientation: landscape)"
      }
    },
    66426: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c453a914f0b049334120adfcba614e5.svg"
    },
    67299: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f44dd7aad9d6c62e40a11f51252f59b8.svg"
    },
    67443: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a3931a545299e205758648bce29e5c49.svg"
    },
    68271: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/12bd0a3a5b71cd7d797c7e213829d218.png"
    },
    68918: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cd57122be57f5e3a9dc4d0a0f2503fb1.svg"
    },
    72408: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => l
      });
      var r = a(42295),
        s = a(4346),
        n = a.n(s);
      const i = JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[300,300,0]},"a":{"k":[0,0,0]},"s":{"k":[244,244,100]}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"k":[100,100]},"p":{"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"tm","s":{"k":[{"i":{"x":[0.439],"y":[1.016]},"o":{"x":[0.561],"y":[0.015]},"n":["0p439_1p016_0p561_0p015"],"t":5,"s":[100],"e":[0]},{"t":33.0000013441176}],"ix":1},"e":{"k":[{"i":{"x":[0.439],"y":[1.017]},"o":{"x":[0.561],"y":[0.016]},"n":["0p439_1p017_0p561_0p016"],"t":0,"s":[100],"e":[0]},{"t":30.0000012219251}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"},{"ty":"st","fillEnabled":true,"c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":16},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"}],"ip":0,"op":900.000036657751,"st":0,"bm":0,"sr":1}],"v":"4.5.3","ddd":0,"ip":1.00000004073083,"op":33.0000013441175,"fr":29.9700012207031,"w":600,"h":600}'),
        o = JSON.parse('{"v":"5.7.3","fr":60,"ip":0,"op":64,"w":300,"h":300,"nm":"Dot_Loading","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"center","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":10,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":22,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":34,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.667,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"right","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":5,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":17,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":29,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.333,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":12,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":24,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0}],"markers":[]}'),
        l = ({
          type: e = "spinning"
        }) => {
          let t;
          return t = "threeDots" === e ? o : i, (0, r.jsx)(n(), {
            loop: !0,
            autoplay: !0,
            animationData: t,
            style: {
              width: "50px",
              height: "50px"
            },
            "data-testid": "loader-spinner"
          })
        }
    },
    72690: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a825976dddc59e33b3ce146ad6cd3d20.svg"
    },
    73005: (e, t, a) => {
      "use strict";
      a.d(t, {
        L: () => c
      });
      var r = a(42295),
        s = a(71127),
        n = a(75523);
      var i = a(1556),
        o = a.n(i);
      const l = e => e < 100 ? "#2d6eb9" : e > 99 && e < 500 ? "#b48261" : e > 499 && e < 750 ? "#9699a1" : "#D6B563",
        c = (0, s.forwardRef)(function({
          rank: e,
          size: t = "large",
          className: a,
          alt: s,
          testId: i,
          ...c
        }, d) {
          const u = l(e),
            m = (0, n.v6)(c, {
              className: o()("rockstargames-sites-rockstargamesf54750ef62f8600000c94f0caba85986", a),
              "data-testid": i
            });
          return (0, r.jsxs)("div", {
            "data-size": t,
            ref: d,
            ...m,
            children: [(0, r.jsx)("svg", {
              role: "svg",
              "aria-label": s,
              className: "rockstargames-sites-rockstargamesa3beb1e9c88e2938879ea4df25b63eb1",
              "data-rank": l(e),
              "data-testid": "rp-icon",
              width: "44",
              height: "44",
              viewBox: "0 0 44 44",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, r.jsx)("path", {
                d: "M21.8679 0C9.79195 0 0 9.79195 0 21.8679C0 33.9438 9.79195 43.7358 21.8679 43.7358C33.9438 43.7358 43.7358 33.9438 43.7358 21.8679C43.7358 9.79195 33.9438 0 21.8679 0ZM13.6796 17.4457H30.2506C30.4814 20.3007 30.4935 23.508 30.1048 26.9461H13.7889C13.4123 23.4958 13.4244 20.2885 13.6674 17.4457H13.6796ZM33.9681 17.4457H39.508C39.8603 18.8671 40.0668 20.3371 40.0668 21.8679C40.0668 23.6295 39.7995 25.3424 39.3379 26.9582H33.8102C34.1868 23.5201 34.1868 20.325 33.9681 17.4579V17.4457ZM38.208 13.8618H33.5793C33.1541 10.9947 32.5588 8.56492 31.9757 6.68185C34.6363 8.46773 36.7866 10.9582 38.208 13.8618ZM27.2863 4.42217C27.8208 5.73424 29.0721 9.09947 29.8132 13.8618H14.1169C14.9066 8.89294 16.2308 5.46697 16.7046 4.34928C18.3447 3.86333 20.0699 3.59605 21.8679 3.59605C23.7509 3.59605 25.5733 3.88762 27.2863 4.42217ZM12.0273 6.51177C11.432 8.40699 10.8003 10.8975 10.3629 13.8618H5.52772C6.99772 10.861 9.24525 8.32194 12.0273 6.51177ZM4.21564 17.4457H9.94989C9.71906 20.325 9.71906 23.508 10.0714 26.9461H4.38573C3.91192 25.3303 3.6568 23.6295 3.6568 21.8557C3.6568 20.325 3.86333 18.855 4.21564 17.4336V17.4457ZM5.84358 30.5421H10.5816C10.9704 32.7411 11.5049 35.0129 12.246 37.3576C9.57327 35.6811 7.35004 33.3364 5.84358 30.5421ZM16.8626 39.4229C15.672 36.3614 14.8459 33.385 14.3235 30.5421H29.5581C29.0235 33.3728 28.1974 36.3371 27.0068 39.3865C25.3789 39.8724 23.6538 40.1397 21.8679 40.1397C20.082 40.1397 18.4541 39.8846 16.8626 39.4229ZM31.6355 37.2604C32.3645 34.9522 32.9112 32.7168 33.2999 30.5421H37.88C36.3979 33.2756 34.2354 35.5839 31.6355 37.2604Z",
                fill: u
              })
            }), (0, r.jsx)("span", {
              className: "rockstargames-sites-rockstargamesd9ea5cdf174033003a8670f31ae66a59",
              "data-testid": "rpCategory:rankValue",
              children: e
            })]
          })
        })
    },
    74432: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a19fbf81b03db0fda00839496a3ce5.svg"
    },
    77404: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d1f569db6c94b4f81417f62e91759082.svg"
    },
    79867: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => c,
        C: () => o
      });
      var r = a(56265),
        s = a.n(r),
        n = a(41972),
        i = a.n(n);
      const o = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          circoloco: "circoloco",
          supportNew: "support"
        },
        l = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store",
            circoloco: "circolocorecords",
            supportNew: "support"
          },
          cookieIdentifier: "prod"
        }],
        c = () => {
          let e;
          const {
            location: t
          } = window, a = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), r = l.findIndex(t => Object.entries(t.sites).findIndex(([t, r]) => r === a && (e = {
            site: t,
            subDomain: r
          }, !0)) >= 0), n = l[r >= 0 ? r : 0], o = l.find(e => e.id === n.fallbackEnvironment);
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), i()(s()({}, o, {
            currentSite: e
          }, n), "fallbackEnvironment")
        }
    },
    80304: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cf1b78cec82c717ea9c2155ce4093736.svg"
    },
    81864: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f52c5ab315a1ff90360e06372c3f2c0.svg"
    },
    82424: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b43dddd485139df895fc531e79c75e68.svg"
    },
    84406: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c699f3b76c15209c8059f02507e11b5.svg"
    },
    84941: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3c6134ba61610ead6af640361535e346.svg"
    },
    86595: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/72e8749316b4d1f52925b95e075e9c24.svg"
    },
    86929: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a5d9ca87a5bd107da9bb33d3d718e8.svg"
    },
    87256: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f4b0d9409df1e8a420b2118e4e601263.svg"
    },
    87707: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07362df5a2671c08b232a97d503cd6bf.svg"
    },
    89069: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/80dd50a2fa9aae3b5d6effdb2d9c2661.svg"
    },
    89235: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c4dd58f5b5b97796b6c6177de364dd36.svg"
    },
    89303: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/515f2884036e870905ae53f156692721.svg"
    },
    89836: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3689ac97526f00a4537e1b38ec82a074.svg"
    },
    90717: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c3fe2a9610ca8b42807dfa99073d68b3.svg"
    },
    94293: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a380d3ce353544a356e8ce48f8586804.png"
    },
    95088: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d471eef7883043fdabe1b3ed17a72b3.svg"
    },
    95520: e => {
      var t = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "GameData"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "titleSlug"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "locale"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withMetaTitle"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean"
              }
            },
            defaultValue: {
              kind: "BooleanValue",
              value: !1
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "metaUrl"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            },
            defaultValue: {
              kind: "StringValue",
              value: "/",
              block: !1
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              alias: {
                kind: "Name",
                value: "meta"
              },
              name: {
                kind: "Name",
                value: "metaUrl"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "domain"
                },
                value: {
                  kind: "StringValue",
                  value: "www",
                  block: !1
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "url"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "metaUrl"
                  }
                }
              }],
              directives: [{
                kind: "Directive",
                name: {
                  kind: "Name",
                  value: "include"
                },
                arguments: [{
                  kind: "Argument",
                  name: {
                    kind: "Name",
                    value: "if"
                  },
                  value: {
                    kind: "Variable",
                    name: {
                      kind: "Name",
                      value: "withMetaTitle"
                    }
                  }
                }]
              }],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "game"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "titleSlug"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "titleSlug"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingDescriptors"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingFooter"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingImg"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingUrl"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 394
        }
      };

      function a(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var r = e.type;
          "NamedType" === r.kind && t.add(r.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach(function(e) {
          a(e, t)
        }), e.variableDefinitions && e.variableDefinitions.forEach(function(e) {
          a(e, t)
        }), e.definitions && e.definitions.forEach(function(e) {
          a(e, t)
        })
      }
      t.loc.source = {
        body: 'query GameData(\n    $titleSlug: String!\n    $locale: String!\n    $withMetaTitle: Boolean = false\n    $metaUrl: String = "/"\n) {\n    meta: metaUrl(locale: $locale, domain: "www", url: $metaUrl)\n        @include(if: $withMetaTitle) {\n        title\n    }\n    game(titleSlug: $titleSlug, locale: $locale) {\n        ratingDescriptors\n        ratingFooter\n        ratingImg\n        ratingUrl\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var r = {};

      function s(e, t) {
        for (var a = 0; a < e.definitions.length; a++) {
          var r = e.definitions[a];
          if (r.name && r.name.value == t) return r
        }
      }
      t.definitions.forEach(function(e) {
        if (e.name) {
          var t = new Set;
          a(e, t), r[e.name.value] = t
        }
      }), e.exports = t, e.exports.GameData = function(e, t) {
        var a = {
          kind: e.kind,
          definitions: [s(e, t)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var n = r[t] || new Set,
          i = new Set,
          o = new Set;
        for (n.forEach(function(e) {
            o.add(e)
          }); o.size > 0;) {
          var l = o;
          o = new Set, l.forEach(function(e) {
            i.has(e) || (i.add(e), (r[e] || new Set).forEach(function(e) {
              o.add(e)
            }))
          })
        }
        return i.forEach(function(t) {
          var r = s(e, t);
          r && a.definitions.push(r)
        }), a
      }(t, "GameData")
    },
    96498: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        RSG_CONTENT_RATING_FRAGMENT: () => s,
        RSG_CTA_FRAGMENT: () => n,
        RSG_GAME_FRAGMENT: () => i,
        RSG_ICON_FRAGMENT: () => o,
        RSG_IMAGE_FILE_FRAGMENT: () => l,
        RSG_IMAGE_FRAGMENT: () => c,
        RSG_VIDEO_FILE_FRAGMENT: () => F,
        RSG_VIDEO_FRAGMENT: () => P,
        SYS_FRAGMENT: () => d,
        WWW_BANNER_FRAGMENT: () => u,
        WWW_DECK_FRAGMENT: () => m,
        WWW_DECORATIVE_VIDEO_FRAGMENT: () => _,
        WWW_DIVIDER_FRAGMENT: () => g,
        WWW_EDITORIAL_GRID_MODULE_FRAGMENT: () => f,
        WWW_FEATURED_CONTENT_CAROUSEL_FRAGMENT: () => p,
        WWW_FEATURED_GAME_SECTION_FRAGMENT: () => h,
        WWW_GRID_FRAGMENT: () => b,
        WWW_GRID_LAYOUT_BREAKPOINT_FRAGMENT: () => v,
        WWW_GRID_WRAPPER_FRAGMENT: () => x,
        WWW_IMAGE_BLOCK_FRAGMENT: () => k,
        WWW_IMAGE_CARD_FRAGMENT: () => w,
        WWW_IMAGE_CAROUSEL_FRAGMENT: () => y,
        WWW_IMAGE_MARQUEE_MODULE_FRAGMENT: () => j,
        WWW_LIGHTBOX_IMAGE_FRAGMENT: () => C,
        WWW_LINKOUT_IMAGE_FRAGMENT: () => R,
        WWW_MASONRY_GRID_FRAGMENT: () => S,
        WWW_NEWSLETTER_SUBSCRIBE_FRAGMENT: () => N,
        WWW_PROMO_MODULE_FRAGMENT: () => I,
        WWW_SECTION_WRAPPER_FRAGMENT: () => T,
        WWW_SUPPORT_CALLOUT_MODULE_FRAGMENT: () => A,
        WWW_TEXT_BLOCK_FRAGMENT: () => M,
        WWW_TEXT_WITH_BADGE_FRAGMENT: () => z,
        WWW_THEME_PROVIDER_FRAGMENT: () => D,
        WWW_VIDEO_PLAYER_FRAGMENT: () => L,
        WWW_WEB_OFFER_CLAIM_FRAGMENT: () => E,
        wwwBottomSheetQuery: () => G,
        wwwPageQuery: () => W
      });
      var r = a(32467);
      const s = r.gql`
fragment RsgContentRatingFragment on RsgContentRating {
  __typename
  sys {
    ...SysFragment
  }
  titleSlug
}
`,
        n = r.gql`
fragment RsgCtaFragment on RsgCta {
  sys {
    ...SysFragment
  }
  text
  analyticsData
  openInNewTab
  link {
    url
  }
  appearance
  iconLeft {
    ...RsgIconFragment
  }
  iconRight {
    ...RsgIconFragment
  }
  backgroundColor
  openInNewTab
}
`,
        i = r.gql`
fragment RsgGameFragment on RsgGame {
  title
  slug
  wwwPageLink
  boxArt {
    imageFilesCollection {
      __typename
      items {
        ... on RsgImageFile {
          ...RsgImageFileFragment
        }
      }
    }
  }
}
`,
        o = r.gql`
fragment RsgIconFragment on RsgIcon {
  icon
  iconLabel
}
`,
        l = r.gql`
fragment RsgImageFileFragment on RsgImageFile {
  __typename
  sys {
    ...SysFragment
  }
  context
  altText
  source {
    __typename
    url
    width
    height
  }
}
`,
        c = r.gql`
fragment RsgImageFragment on RsgImage {
  __typename
  sys {
    ...SysFragment
  }
  altText
  imageFilesCollection(
    limit: 8
  ) {
    items {
      __typename
      sys {
        ...SysFragment
      }
      ...RsgImageFileFragment
    }
  }
}
`,
        d = r.gql`
fragment SysFragment on Sys {
  __typename
  id
}
`,
        u = r.gql`
fragment WwwBannerFragment on WwwBanner {
  __typename
  sys {
    ...SysFragment
  }
  text
  backgroundColor
  backgroundImage {
    ...RsgImageFragment
  }
  foregroundImage {
    ...RsgImageFileFragment
  }
  link {
    url
  }
  altText
}
`,
        m = r.gql`
fragment WwwDeckFragment on WwwDeck {
  sys {
      ...SysFragment
  }
  title
  variant
  navigationButtonAppearance
  cardsCollection(limit: 4) {
      items {
          __typename
          ... on WwwImageCard {
              ...WwwImageCardFragment
          }
          ... on WwwImageBlock {
            ...WwwImageBlockFragment
          }
      }
  }
}
`,
        _ = r.gql`
fragment WwwDecorativeVideoFragment on WwwDecorativeVideo {
    __typename
    sys {
        ...SysFragment
    }
    playbackBehavior
    scrimColor
    landscapeViewportBehavior
    overlayElements {
        ...WwwGridWrapperFragment
    }
    video {
        ...RsgVideoFragment
    }
    squareVideo {
        ...RsgVideoFragment
    }
}
`,
        g = r.gql`
fragment WwwDividerFragment on WwwDivider {
    __typename
    sys {
          ...SysFragment
    }
    thickness
    style
}
`,
        f = r.gql`
fragment WwwEditorialGridModuleFragment on WwwEditorialGridModule {
  __typename
  sys {
    ...SysFragment
  }
  contentCollection(limit: 7) {
    items {
      __typename
      sys {
        ...SysFragment
      }
      tinaId
    }
  }
}
`,
        p = r.gql`
fragment WwwFeaturedContentCarouselFragment on WwwFeaturedContentCarousel {
  __typename
  sys {
    ...SysFragment
  }
  size
  slidesCollection(limit: 5) {
    items {
      __typename
      sys {
        ...SysFragment
      }
      analyticsData
      title
      eyebrow
      topGradientColor
      bottomGradientColor
      ctasCollection(limit: 3) {
        items {
          ...RsgCtaFragment
        }
      }
      logo {
        ...RsgImageFileFragment
      }
      background {
        ...RsgImageFragment
        ...RsgVideoFragment
      }
      navColor
    }
  }
}
`,
        h = r.gql`
fragment WwwFeaturedGameSectionFragment on WwwFeaturedGameSection {
  __typename
  sys {
    ...SysFragment
  }
  description
  ctasCollection(limit: 4) {
    items {
      __typename
      sys {
        ...SysFragment
      }
      ...RsgCtaFragment
    }
  }
  backgroundImage {
    ...RsgImageFragment
  }
  backgroundVideo {
    ...RsgVideoFragment
  }
  squareBackgroundVideo {
    ...RsgVideoFragment
  }
  logo {
    ...RsgImageFileFragment
  }
  game {
    sys {
      ...SysFragment
    }
    platformsCollection(limit: 10) {
      items {
        __typename
        sys {
          ...SysFragment
        }
        name
        logo {
          ...RsgImageFragment
        }
      }
    }
    title
    logo {
      ...RsgImageFragment
    }
  }

  childModulesCollection(limit: 2) {
    items {
      __typename
      ... on WwwPromoModule {
        ...WwwPromoModuleFragment
      }
      ... on WwwDeck {
        sys {
          ...SysFragment
        }
        title
        cardsCollection(limit: 4) {
          items {
            __typename
            ... on WwwImageCard {
              ...WwwImageCardFragment
            }
          }
        }
      }
    }
  }
}
`,
        b = r.gql`
fragment WwwGridFragment on WwwGrid {
    __typename
    sys {
        ...SysFragment
    }
    contentCollection(limit: 10) {
        items {
            ... on WwwTextBlock {
                ...WwwTextBlockFragment
            }
            ... on WwwImageCard {
                ...WwwImageCardFragment
            }
            ... on WwwImageBlock {
              ...WwwImageBlockFragment
            }
            ... on WwwImageCarousel {
              ...WwwImageCarouselFragment
            }
            ... on WwwLinkOutImage {
              ...WwwLinkOutImageFragment
            }
            ... on RsgImage {
              ...RsgImageFragment
            }
            ... on RsgImageFile {
              ...RsgImageFileFragment
            }
        }
    }
    layout {
        breakpointsCollection(limit: 8) {
            items {
                ... on WwwGridLayoutBreakpoint {
                    ...WwwGridLayoutBreakpointFragment
                }
            }
        }
    }
}
`,
        v = r.gql`
fragment WwwGridLayoutBreakpointFragment on WwwGridLayoutBreakpoint {
    __typename
    sys {
        ...SysFragment
    }
    mediaQuery
    columns
    behavior
    alignment
}
`,
        x = r.gql`
fragment WwwGridWrapperFragment on WwwGridWrapper {
    __typename
    sys {
        ...SysFragment
    }
    title
    theme {
      ...WwwThemeProviderFragment
    }
    gap
    contentCollection(limit: 6) {
        items {
            ... on WwwGrid {
              ...WwwGridFragment
            }
        }
    }
}
`,
        k = r.gql`
fragment WwwImageBlockFragment on WwwImageBlock {
  __typename
  sys {
    ...SysFragment
  }
  description
  descriptionSize
  image {
    ... on RsgImageFile {
      ...RsgImageFileFragment
    }
    ... on WwwLightboxImage {
      ...WwwLightboxImageFragment
    }
  }
  textAlignment
  title
  titleSize
}
`,
        w = r.gql`
fragment WwwImageCardFragment on WwwImageCard {
  __typename
  sys {
    ...SysFragment
  }
  analyticsData
  badgeText
  backgroundImage {
    ...RsgImageFragment
  }
  cta {
    ...RsgCtaFragment
  }
  link {
    url
  }
  logo {
    ...RsgImageFileFragment
  }
  logoSize
  text
  textColor
  textAlignment
  gradientColor
  ariaLabel
}
`,
        y = r.gql`
fragment WwwImageCarouselFragment on WwwImageCarousel {
  __typename
  sys {
    ...SysFragment
  }
  analyticsData
  contentCollection(limit: 5) {
    total
    skip
    limit
    items {
      ... on WwwImageBlock {
        ...WwwImageBlockFragment
      }
    }
  }
}
`,
        j = r.gql`
fragment WwwImagesMarqueeModuleFragment on WwwImagesMarqueeModule {
  __typename
  sys {
    ...SysFragment
  }
  title
  description
  cta {
    ...RsgCtaFragment
  }
  marqueeingElementsCollection(limit: 2) {
    items {
      ... on RsgGroup {
        referencesCollection(limit: 20) {
          items {
            ... on RsgGame {
              boxArt {
                ...RsgImageFragment
              }
            }
          }
        }
      }
    }
  }
}
`,
        C = r.gql`
fragment WwwLightboxImageFragment on WwwLightboxImage {
  __typename
  sys {
    ...SysFragment
  }
  analyticsData
  caption
  downloadButton
  image {
    ...RsgImageFileFragment
  }
  thumbnailAspectRatio
  thumbnailObjectPosition
  zoomControls
}
`,
        R = r.gql`
fragment WwwLinkOutImageFragment on WwwLinkOutImage {
  __typename
  sys {
    ...SysFragment
  }
  analyticsData
  link {
    url
  }
  image {
    ...RsgImageFragment
  }
}
`,
        S = r.gql`
fragment WwwMasonryGridFragment on WwwMasonryGrid {
  __typename
  sys {
    ...SysFragment
  }
  variant
  cardsCollection {
    items {
      __typename
      sys {
        ...SysFragment
      }
      analyticsData
      backgroundImage {
        ...RsgImageFragment
      }
      logo {
        ...RsgImageFileFragment
      }
      text
      badgeText
      link {
        url
      }
      gradientColor
      textAlignment
      textColor
      cta {
        ...RsgCtaFragment
      }
    }
  }
}
`,
        N = r.gql`
fragment WwwNewsletterSubscribeFragment on WwwNewsletterSubscribe {
  __typename
  sys {
    ...SysFragment
  }
  image {
    ...RsgImageFileFragment
  }
  textContent
  cta {
    ...RsgCtaFragment
  }
}
`,
        I = r.gql`
fragment WwwPromoModuleFragment on WwwPromoModule {
  __typename
  sys {
    ...SysFragment
  }
  backgroundImage {
    ...RsgImageFragment
  }
  foregroundImage {
    ...RsgImageFileFragment
  }
  foregroundImageSize
  badge
  headline
  description
  cta {
    ...RsgCtaFragment
  }
  legalText
  imagePlacement
  backgroundColor
  colorMode
  enableGradient
  contentAlignment
}
`,
        E = r.gql`
fragment WwwWebOfferClaimFragment on WwwWebOfferClaim {
    __typename
    sys {
        ...SysFragment
    }
    tinaPageUrl
}
`,
        T = r.gql`
fragment WwwSectionWrapperFragment on WwwSectionWrapper {
  __typename
  sys {
    ...SysFragment
  }
  analyticsData
  title
  theme {
    ...WwwThemeProviderFragment
  }
  backgroundCss
  backgroundImage {
    ...RsgImageFragment
  }
  mobileBackgroundImage {
    ...RsgImageFileFragment
  }
  desktopBackgroundImage {
    ...RsgImageFileFragment
  }
  bottomPadding
  topPadding
  cta {
    ...RsgCtaFragment
  }
  contentCollection(limit: 5) {
    items {
      ... on RsgContentRating {
        ...RsgContentRatingFragment
      }
      ... on RsgImage {
        ...RsgImageFragment
      }
      ... on WwwBanner {
        ...WwwBannerFragment
      }
      ... on WwwEditorialGridModule {
        ...WwwEditorialGridModuleFragment
      }
      ... on WwwLinkOutImage {
        ...WwwLinkOutImageFragment
      }
      ... on WwwMasonryGrid {
        ...WwwMasonryGridFragment
      }
      ... on WwwNewsletterSubscribe {
        ...WwwNewsletterSubscribeFragment
      }
      ... on WwwDecorativeVideo {
        ...WwwDecorativeVideoFragment
      }
      ... on WwwDivider {
        ...WwwDividerFragment
      }
      ... on WwwGridWrapper {
        ...WwwGridWrapperFragment
      }
      ... on WwwDeck {
        ...WwwDeckFragment
      }
      ... on WwwSupportCalloutModule {
        ...WwwSupportCalloutModuleFragment
      }
      ... on WwwWebOfferClaim {
        ...WwwWebOfferClaimFragment
      }
    }
  }
}
`,
        A = r.gql`
fragment WwwSupportCalloutModuleFragment on WwwSupportCalloutModule {
  sys {
    ...SysFragment
  }
  title
  description
  cta {
    ...RsgCtaFragment
  }
}
`,
        M = r.gql`
fragment WwwTextBlockFragment on WwwTextBlock {
    __typename
    sys {
        ...SysFragment
    }
    badge
    eyebrow
    header
    body
    ctasCollection(limit: 4) {
        items {
            __typename
            sys {
                ...SysFragment
            }
            ...RsgCtaFragment
        }
    }
    footnote
    headerSize
    bodySize
    alignment
    headerTextWrap
    bodyTextWrap
}
`,
        z = r.gql`
fragment WwwTextWithBadgeFragment on WwwTextWithBadge {
  __typename
  sys {
    ...SysFragment
  }
  content {
    ... on RsgRichText {
      __typename
      sys {
        ...SysFragment
      }
      content {
        json
      }
    }
  }
  variant
  image {
    ...RsgImageFileFragment
  }
}
`,
        D = r.gql`
fragment WwwThemeProviderFragment on WwwThemeProvider {
  __typename
  sys {
    ...SysFragment
  }
  colorMode
  headerTextColor
  primaryAccentColor
  secondaryAccentColor
}
`,
        F = r.gql`
fragment RsgVideoFileFragment on RsgVideoFile {
  __typename
  sys {
    ...SysFragment
  }
  codec
  context
  height
  posterImage {
    ...RsgImageFileFragment
  }
  upload {
    url
    title
  }
  url
  width
}
`,
        P = r.gql`
fragment RsgVideoFragment on RsgVideo {
  __typename
  sys {
    ...SysFragment
  }
  title
  link {
    url
  }
  type
  upload {
    url
    title
  }
  analyticsData
  videoFilesCollection(limit: 3) {
    items {
      ...RsgVideoFileFragment
    }
  }
}
`,
        L = r.gql`
fragment WwwVideoPlayerFragment on WwwVideoPlayer {
  __typename
  sys {
    ...SysFragment
  }
  videos {
    ... on RsgGroup {
      referencesCollection(limit: 20) {
        items {
          ... on RsgVideo {
            ...RsgVideoFragment
          }
        }
      }
    }
  }
}
`,
        W = r.gql`
  query WwwPage($locale: String!, $slug: String!) {
    wwwPageCollection(locale: $locale, limit: 1, where: { slug: $slug }) {
      items {
        __typename
        sys {
          ...SysFragment
        }
        slug
        contentCollection(limit: 20) {
          total
          skip
          limit
          items {
            ... on WwwDivider {
              ...WwwDividerFragment
            }
            ... on WwwFeaturedContentCarousel {
              ...WwwFeaturedContentCarouselFragment
            }
            ... on WwwFeaturedGameSection {
              ...WwwFeaturedGameSectionFragment
            }
            ... on WwwImagesMarqueeModule {
              ...WwwImagesMarqueeModuleFragment
            }
            ... on WwwPromoModule {
              ...WwwPromoModuleFragment
            }
            ... on WwwSectionWrapper {
              ...WwwSectionWrapperFragment
            }
            ... on WwwTextWithBadge {
              ...WwwTextWithBadgeFragment
            }
          }
        }
      }
    }
  }
  ${s}
  ${n}
  ${o}
  ${l}
  ${c}
  ${F}
  ${P}
  ${d}
  ${u}
  ${m}
  ${_}
  ${g}
  ${f}
  ${p}
  ${h}
  ${b}
  ${v}
  ${x}
  ${k}
  ${w}
  ${y}
  ${j}
  ${C}
  ${R}
  ${S}
  ${N}
  ${I}
  ${T}
  ${A}
  ${M}
  ${z}
  ${D}
  ${E}
`,
        G = r.gql`
  query WwwBottomSheet($locale: String!, $slug: String!) {
    wwwBottomSheetCollection(locale: $locale, limit: 1, where: { slug: $slug }) {
      items {
        __typename
        sys {
          ...SysFragment
        }
        slug
        contentCollection(limit: 10) {
          total
          skip
          limit
          items {
            ... on WwwVideoPlayer {
              ...WwwVideoPlayerFragment
            }
          }
        }
      }
    }
  }
  ${l}
  ${F}
  ${P}
  ${d}
  ${L}
`
    },
    97558: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51b141250a4851d7ec3673d88dbd20a.png"
    },
    98952: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/85250e8a0e5a5a1209f214423f6ebe43.svg"
    }
  }
]);