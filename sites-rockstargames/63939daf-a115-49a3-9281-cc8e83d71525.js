try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "63939daf-a115-49a3-9281-cc8e83d71525", e._sentryDebugIdIdentifier = "sentry-dbid-63939daf-a115-49a3-9281-cc8e83d71525")
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
  [5045, 7426], {
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
        A: () => g
      });
      var r = a(42295),
        s = a(62229),
        n = a(81788),
        i = a(95966),
        o = a(61128),
        c = a(2918),
        l = a(14200),
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
        f = a(19732);
      (0, i.importAll)(a(36672));
      const g = (0, d.A)((0, f.g)(({
        descriptors: e = null,
        footer: t = null,
        href: d,
        img: f = null,
        titleSlug: g = null,
        style: p = {},
        className: b
      }) => {
        const [h, v] = (0, s.useState)(!1), {
          inView: k
        } = (0, o.useInView)({
          threshold: .6
        }), [x, w] = (0, s.useState)({
          ratingDescriptors: e,
          ratingFooter: t,
          ratingImg: f,
          ratingUrl: d
        }), {
          track: y
        } = (0, c.useGtmTrack)(), j = (0, n.useIntl)(), {
          data: C
        } = (0, i.useQuery)(_.GameData, {
          variables: {
            titleSlug: g
          },
          skip: !g
        });
        if ((0, s.useEffect)(() => {
            C && w(C?.game)
          }, [C]), (0, s.useEffect)(() => {
            k && !h && x.ratingImg && (y({
              event: "page_section_impression",
              element_placement: "rating"
            }), v(!0))
          }, [k]), !x.ratingImg) return null;
        const N = !!x.ratingDescriptors;
        return (0, r.jsxs)("div", {
          className: [u.rating, N ? u.withDescriptors : u.withOutDescriptors, b || ""].join(" "),
          style: (0, i.safeStyles)(p),
          "data-testid": "rating",
          children: [(0, r.jsx)(l.A, {
            to: x.ratingUrl,
            target: "_blank",
            children: (0, r.jsx)("img", {
              alt: j.formatMessage(m.components_ratings_link_alt, {
                rating: (S = x.ratingImg, S.replace(/_/g, " ").split(".")[0].toUpperCase())
              }),
              src: a(8194)(`./${x.ratingImg}`)
            })
          }), N && (0, r.jsxs)("div", {
            className: u.text,
            children: [(0, r.jsx)("p", {
              className: u.descriptors,
              dangerouslySetInnerHTML: {
                __html: x?.ratingDescriptors?.split(/<br\s?\/?>/).join(", ") || ""
              }
            }), x.ratingFooter && (0, r.jsx)("hr", {}), x.ratingFooter && (0, r.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: x.ratingFooter.replace(/ \//g, ", ")
              }
            })]
          })]
        });
        var S
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
        YT: () => i,
        Ay: () => o
      });
      var r = a(42295);
      var s = a(4572),
        n = a.n(s);
      var i = function(e) {
        return e.small = "small", e.large = "large", e
      }({});
      const o = ({
        tagSize: e,
        platform: t,
        className: a = ""
      }) => {
        const {
          src: s,
          alt: i
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
        return (0, r.jsx)("img", {
          className: n()("rockstargames-sites-rockstargamesb0ff0045ed0326a46ca1e0867d2050c1", a),
          "data-testid": "platform-tag",
          "data-platform": t,
          "data-tag-size": e,
          src: s,
          alt: i
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
        s = a(62229);
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
    31262: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        default: () => pi
      });
      var r = a(42295),
        s = a(87927),
        n = a(62229),
        i = a(95966),
        o = a(81788),
        c = a(82324),
        l = a(20820),
        d = a(96498),
        u = a(9623);
      const m = (0, n.createContext)({
          slug: "",
          open: !1,
          onOpenChange: () => {}
        }),
        _ = ({
          children: e
        }) => {
          const [t, a] = (0, u.useSearchParams)(), [s, i] = (0, n.useState)(""), [o, c] = (0, n.useState)(!1), l = () => {
            const e = !o;
            c(e), e || (i(""), a(e => (e.delete("view"), e)))
          };
          (0, n.useEffect)(() => {
            const e = t.get("view");
            e ? (i(e), c(!0)) : (i(""), c(!1))
          }, [t]);
          const d = (0, n.useMemo)(() => ({
            open: o,
            onOpenChange: l,
            slug: s
          }), [o, s]);
          return (0, r.jsx)(m.Provider, {
            value: d,
            children: e
          })
        },
        f = () => {
          const e = (0, n.useContext)(m);
          if (void 0 === e) throw new Error("useBottomSheet must be used within a Bottom Sheet Provider");
          return {
            open: e.open,
            slug: e.slug,
            onOpenChange: e.onOpenChange
          }
        };
      var g = a(32067);
      const p = (0, o.defineMessages)({
        bottom_sheet_modal_close_icon: {
          id: "bottom_sheet_modal_close_icon",
          description: "Label for X icon to close modal in Bottom Sheet",
          defaultMessage: "Close"
        }
      });
      var b = a(2918),
        h = a(61128),
        v = a(75523);
      const k = (0, n.forwardRef)(function({
        href: e,
        testId: t,
        ...a
      }, s) {
        const n = (0, o.linkWithLocale)(e || ""),
          i = (0, v.v6)(a, {
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
      var x = a(77053),
        w = a(66135),
        y = a(96369),
        j = (0, y.c)({
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
      const C = ({
        showOn: e,
        forceMount: t = !1,
        ...a
      }) => {
        const s = (0, v.v6)(a, {
            className: j({
              showOn: e
            })
          }),
          i = (0, n.useMemo)(() => t ? void 0 : window?.matchMedia?.(w.f[e]), [e, window]);
        return (i?.matches ?? !0) && (0, r.jsx)(g.DX, {
          ...s
        })
      };
      var N = a(4572),
        S = a.n(N),
        R = (a(89091), "var(--g48eg92)"),
        I = "var(--g48eg91)",
        E = "g48eg96",
        z = "var(--g48eg90)";
      const T = (0, n.forwardRef)(function({
          children: e,
          className: t,
          asChild: a,
          testId: s,
          topPaddingMultiplier: n,
          bottomPaddingMultiplier: i,
          backgroundCss: o,
          backgroundImage: c,
          ...l
        }, d) {
          const u = a ? g.DX : "section",
            m = (0, v.v6)({
              "data-testid": s,
              className: S()(t, "g48eg93"),
              style: (0, x.DI)({
                [z]: n ?? "0.5",
                [I]: i ?? "0.5",
                [R]: o,
                backgroundImage: c ? `url(${c})` : ""
              })
            }, l);
          return (0, r.jsx)(u, {
            ref: d,
            ...m,
            children: e
          })
        }),
        A = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...s
        }, n) {
          if (!e) return;
          const i = t ? g.DX : "div",
            o = (0, v.v6)({
              "data-testid": a,
              className: "g48eg94 _1betujy5"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        M = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...s
        }, n) {
          const i = t ? g.DX : l.Heading,
            o = (0, v.v6)({
              "data-testid": a,
              className: "g48eg95 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd6"
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
        }, c) {
          const d = (0, v.v6)({
            "data-testid": e
          }, o);
          return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(C, {
              forceMount: !0,
              showOn: "mobile",
              children: (0, r.jsx)(l.IconButton, {
                size: "MD",
                appearance: "ghost",
                icon: n,
                className: E,
                label: a,
                ...d,
                ref: c,
                asChild: !0,
                children: (0, r.jsx)(k, {
                  href: s,
                  target: i ? "_blank" : "_self",
                  role: "link"
                })
              })
            }), (0, r.jsx)(C, {
              forceMount: !0,
              showOn: "tabletSmall",
              children: (0, r.jsx)(l.IconButton, {
                size: "MD",
                appearance: "ghost",
                icon: n,
                className: E,
                label: a,
                ...d,
                ref: c,
                asChild: !0,
                children: (0, r.jsx)(k, {
                  href: s,
                  target: i ? "_blank" : "_self",
                  role: "link"
                })
              })
            }), (0, r.jsx)(C, {
              forceMount: !0,
              showOn: "tabletMediumAndLarger",
              children: (0, r.jsx)(l.Button, {
                size: "LG",
                appearance: "ghost",
                iconRight: n,
                className: "g48eg97",
                "aria-label": a,
                ...d,
                ref: c,
                "data-testid": `${e}:desktopButton`,
                asChild: !0,
                children: (0, r.jsx)(k, {
                  href: s,
                  target: i ? "_blank" : "_self",
                  role: "link",
                  children: t
                })
              })
            })]
          })
        }),
        P = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...s
        }, n) {
          const i = t ? g.DX : "div",
            o = (0, v.v6)({
              "data-testid": a,
              className: "g48eg98"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        });
      var L = a(91633);
      const B = (0, n.createContext)({
          colorMode: void 0,
          headerTextColor: void 0,
          primaryAccentColor: void 0,
          secondaryAccentColor: void 0
        }),
        G = ({
          theme: e,
          children: t
        }) => e ? (0, r.jsx)(B.Provider, {
          value: {
            ...e
          },
          children: t
        }) : t,
        V = {
          none: 0,
          default: .5,
          double: 1
        },
        O = (0, n.createContext)({
          analyticsData: void 0
        }),
        q = ({
          block: e
        }) => {
          const {
            blockPosition: t
          } = (0, n.useContext)(c.BlockRendererContext), {
            trackEvent: a,
            useTrackPageSectionImpression: o
          } = U(), {
            ref: l
          } = o(e.analyticsData), [d, u] = (0, n.useState)(!1), [m, _] = (0, n.useState)(!0), {
            contrastMode: f
          } = (0, s.DP)(), {
            isMobile: g
          } = (0, i.useWindowResize)(), p = e.title, b = e.cta, h = p || b;
          (0, n.useEffect)(() => {
            if (e?.cta?.link?.url) try {
              new URL(e.cta.link.url).origin !== window.location.origin && u(!0)
            } catch {
              u(!1)
            }
          }, [e]);
          const v = (0, n.useCallback)(e => {
            _(e)
          }, []);
          if (!e || !m) return null;
          const k = {
              topPaddingMultiplier: V[e.topPadding] ?? V.default,
              bottomPaddingMultiplier: V[e.bottomPadding] ?? V.default,
              backgroundCss: e.backgroundCss,
              backgroundImage: g ? e.mobileBackgroundImage?.source?.url : e.desktopBackgroundImage?.source?.url,
              className: (0, L.m)(e.theme?.colorMode ?? "dark", f)
            },
            x = (0, r.jsxs)(T, {
              ref: l,
              ...k,
              children: [h && (0, r.jsxs)(A, {
                children: [p && (0, r.jsx)(M, {
                  level: 2,
                  children: p
                }), b?.text && b.link?.url && (0, r.jsx)(D, {
                  label: b.text,
                  url: b.link.url,
                  isExternal: d,
                  iconRight: b.iconRight?.icon,
                  onClick: () => a(b?.analyticsData, b),
                  children: b.text
                })]
              }), e.contentCollection?.items && (0, r.jsx)(P, {
                children: e.contentCollection.items?.map(e => (0, r.jsx)(c.BlockRenderer, {
                  block: e,
                  blockPosition: t,
                  renderSectionWrapper: v
                }, e.sys?.id))
              })]
            });
          let w;
          return w = (0, r.jsx)(G, {
            theme: e.theme,
            children: x
          }), w
        },
        F = "WwwSectionWrapper",
        U = () => {
          const {
            analyticsData: e
          } = (0, n.useContext)(O), {
            track: t
          } = (0, b.useGtmTrack)(), a = e?.element_placement;
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
      var X = a(20170);
      const $ = ({
          testId: e,
          ...t
        }) => {
          const a = (0, v.v6)(t, {
            "data-testid": e,
            autoFocus: !0
          });
          return (0, r.jsx)(X.bL, {
            ...a
          })
        },
        H = ({
          testId: e,
          ...t
        }) => {
          const a = (0, v.v6)(t, {
            "data-testid": e
          });
          return (0, r.jsx)(X.ZL, {
            ...a
          })
        },
        W = (0, n.forwardRef)(function({
          testId: e,
          ...t
        }, a) {
          const s = (0, v.v6)(t, {
            "data-testid": e,
            className: "_1ykqld07"
          });
          return (0, r.jsx)(X.hJ, {
            ref: a,
            ...s
          })
        }),
        K = (0, n.forwardRef)(function({
          testId: e,
          children: t,
          ...a
        }, s) {
          const n = (0, v.v6)(a, {
            "data-testid": e,
            className: "_1ykqld08"
          });
          return (0, r.jsx)(X.UC, {
            ref: s,
            ...n,
            children: t
          })
        }),
        Y = (0, n.forwardRef)(function({
          testId: e,
          children: t,
          ...a
        }, s) {
          const n = (0, v.v6)(a, {
            "data-testid": e,
            className: "_1ykqld09"
          });
          return (0, r.jsx)("div", {
            ref: s,
            ...n,
            children: t
          })
        }),
        Q = (0, n.forwardRef)(function({
          testId: e,
          ...t
        }, a) {
          const s = (0, v.v6)(t, {
            asChild: !0,
            className: "_1ykqld0a",
            "data-testid": e
          });
          return (0, r.jsx)(X.bm, {
            ref: a,
            ...s
          })
        }),
        Z = (0, n.forwardRef)(function({
          testId: e,
          ...t
        }, a) {
          const s = (0, v.v6)(t, {
            "data-testid": e
          });
          return (0, r.jsx)(X.hE, {
            ref: a,
            ...s
          })
        }),
        J = (0, n.forwardRef)(function({
          testId: e,
          ...t
        }, a) {
          const s = (0, v.v6)(t, {
            "data-testid": e
          });
          return (0, r.jsx)(X.VY, {
            ref: a,
            ...s
          })
        }),
        ee = () => {
          const {
            trackEvent: e
          } = U(), {
            formatMessage: t
          } = (0, o.useIntl)(), [a, s] = (0, n.useState)(!1), {
            slug: c,
            open: d,
            onOpenChange: u
          } = f(), m = (0, i.usePrevious)(c);
          if ((0, n.useEffect)(() => {
              a !== d && (s(d), e(d ? {
                event: "modal_open",
                card_id: c,
                card_name: c,
                text: c
              } : {
                event: "modal_close",
                card_id: m,
                card_name: m,
                text: m
              }))
            }, [d, a]), c) return (0, r.jsx)($, {
            open: d,
            onOpenChange: u,
            children: (0, r.jsxs)(H, {
              children: [(0, r.jsx)(W, {}), (0, r.jsxs)(K, {
                children: [(0, r.jsxs)(g.s6, {
                  children: [(0, r.jsx)(Z, {}), (0, r.jsx)(J, {})]
                }), (0, r.jsx)(Q, {
                  children: (0, r.jsx)(l.IconButton, {
                    size: "MD",
                    icon: "X",
                    appearance: "tertiary",
                    label: t(p.bottom_sheet_modal_close_icon)
                  })
                }), (0, r.jsx)(Y, {
                  children: (0, r.jsx)(te, {
                    slug: c
                  })
                })]
              })]
            })
          })
        },
        te = ({
          slug: e
        }) => {
          const {
            loading: t,
            error: a,
            data: s
          } = (0, c.useContentfulQuery)({
            query: d.wwwBottomSheetQuery,
            variables: {
              slug: e
            }
          });
          if (s && !t && !a) {
            const e = s?.wwwBottomSheetCollection?.items[0]?.contentCollection;
            if (e) return (0, r.jsx)(ae, {
              block: e
            })
          }
        },
        ae = ({
          block: e
        }) => {
          const {
            blockPosition: t
          } = (0, n.useContext)(c.BlockRendererContext);
          if (e) return e.items.map(e => (0, r.jsx)(c.BlockRenderer, {
            block: e,
            blockPosition: t
          }, e.sys.id))
        },
        re = JSON.parse('{"de-DE":{"bottom_sheet_modal_close_icon":"Schließen","carousel_next_button":"Weiter","carousel_prev_button":"Zurück","decorative_video_pause_button_label":"Pause","decorative_video_play_button_label":"Abspielen","featured_game_breadcrumbs_parent_item":"Spiele","hero_carousel_pause_button":"Pause","hero_carousel_play_button":"Abspielen","hp_hero_carousel_scroll_down_label":"Nach unten scrollen","hp_hero_play_button_label":"Abspielen","hp_hero_stop_button_label":"Anhalten","image_carousel_screen_reader_announcer_label":"Jetzt angezeigt: {selectedTab} von {total}","lightbox_close_button":"Schließen","masonry_grid_external_store_link":"Externer Link zum Store","ns_already_subbed_details":"Du erhältst bereits Newsletter-Updates an diese E-Mail-Adresse. Du kannst deine Präferenzen bezüglich E-Mails jederzeit in den Einstellungen deines Kontos ändern.","ns_already_subbed_title":"Bereits abonniert","ns_check_email_details":"Bitte verifiziere deine E-Mail-Adresse über den Link, der an die E-Mail-Adresse geschickt wurde, mit der du dich angemeldet hast, um dein Abo für die E-Mail-Liste von Rockstar Games zu bestätigen.","ns_check_email_title":"Überprüfe deine E-Mails","ns_confirm_after_register_details":"Du hast dich während der Kontoerstellung nicht für Werbe-E-Mails angemeldet. Möchtest du immer noch unseren Newsletter abonnieren?","ns_confirm_after_register_title":"Bestätige dein Abo","ns_confirm_details":"Bitte drücke auf den Knopf unten, um zu bestätigen, dass du den Newsletter von Rockstar Games abonnieren möchtest.","ns_confirm_title":"Bestätige dein Abo","ns_error_generic_details":"Wir können diese E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden.","ns_error_generic_title":"Fehler","ns_error_preferences_details":"Wir können deine E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden. Ändere deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos oder versuche es später erneut.","ns_error_preferences_title":"Fehler","ns_go_back_text":"Nein, zurückkehren","ns_manage_prefs_button_text":"Präferenzen verwalten","ns_ok_button_text":"OKAY","ns_successfully_subscribed_details":"Du hast dich bei der E-Mail-Liste von Rockstar Games angemeldet und erhältst regelmäßig Updates an die E-Mail-Adresse, mit der du dich angemeldet hast. Verwalte deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos.","ns_successfully_subscribed_title":"Erfolgreich abonniert","ns_yes_subscribe_text":"Ja, abonnieren"},"en-US":{"bottom_sheet_modal_close_icon":"Close","carousel_next_button":"Next","carousel_prev_button":"Previous","decorative_video_pause_button_label":"Pause","decorative_video_play_button_label":"Play","decorative_video_replay_button_label":"Replay","featured_game_breadcrumbs_parent_item":"Games","hero_carousel_pause_button":"Pause","hero_carousel_play_button":"Play","hp_hero_carousel_scroll_down_label":"Scroll Down","hp_hero_play_button_label":"Play","hp_hero_stop_button_label":"Stop","image_carousel_screen_reader_announcer_label":"Now showing {selectedTab} of {total}","lightbox_close_button":"Close","masonry_grid_external_store_link":"External link to Store","ns_already_subbed_details":"You are already receiving newsletter updates at this email address. Change your email preferences at any time on your account settings page.","ns_already_subbed_title":"Already Subscribed","ns_check_email_details":"To confirm your subscription to the Rockstar Games Email List, please verify your email address via the link sent to the email address you’ve signed up with.","ns_check_email_title":"Check Your Email","ns_confirm_after_register_details":"You did not opt-in to receive marketing emails during account creation. Would you still like to subscribe to our newsletter?","ns_confirm_after_register_title":"Confirm your subscription","ns_confirm_details":"Please confirm that you would like to subscribe to the Rockstar Games Newsletter by clicking the button below.","ns_confirm_title":"Confirm your subscription","ns_error_generic_details":"We cannot sign up this email address to our newsletter at this time.","ns_error_generic_title":"Error","ns_error_preferences_details":"We cannot sign up your email address to our newsletter at this time. Change your email preferences on your account settings page or try again later.","ns_error_preferences_title":"Error","ns_go_back_text":"No, Go Back","ns_manage_prefs_button_text":"Manage Preferences","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"You are now signed up to the Rockstar Games Email List and will receive regular updates to the email address you’ve signed up with. Manage your email preferences at any time on your account settings page.","ns_successfully_subscribed_title":"Successfully Subscribed","ns_yes_subscribe_text":"Yes, Subscribe"},"es-ES":{"bottom_sheet_modal_close_icon":"Cerrar","carousel_next_button":"Siguiente","carousel_prev_button":"Anterior","decorative_video_pause_button_label":"Pausar","decorative_video_play_button_label":"Reproducir","featured_game_breadcrumbs_parent_item":"Juegos","hero_carousel_pause_button":"Pausar","hero_carousel_play_button":"Reproducir","hp_hero_carousel_scroll_down_label":"Desplazarse hacia abajo","hp_hero_play_button_label":"Reproducir","hp_hero_stop_button_label":"Detener","image_carousel_screen_reader_announcer_label":"Mostrando {selectedTab} de {total}","lightbox_close_button":"Cerrar","masonry_grid_external_store_link":"Enlace externo a la tienda","ns_already_subbed_details":"Ya recibes actualizaciones del boletín de noticias en este correo electrónico. Cambia tus preferencias de correo electrónico en cualquier momento en la página de ajustes de tu cuenta.","ns_already_subbed_title":"Ya tienes una suscripción","ns_check_email_details":"Para confirmar tu suscripción a la lista de correo de Rockstar Games, verifica tu correo electrónico a través del enlace enviado al correo electrónico con el que te has suscrito.","ns_check_email_title":"Comprueba tu correo electrónico","ns_confirm_after_register_details":"No te has suscrito a los correos electrónicos comerciales al crear tu cuenta. ¿Quieres suscribirte a nuestro boletín de noticias?","ns_confirm_after_register_title":"Confirma tu suscripción","ns_confirm_details":"Haz click en el botón para confirmar que quieres suscribirte al boletín de noticias de Rockstar Games.","ns_confirm_title":"Confirma tu suscripción","ns_error_generic_details":"En este momento no puedes suscribirte a nuestro boletín de noticias con este correo electrónico.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento no puedes suscribirte a nuestro boletín de noticias con tu correo electrónico. Cambia tus preferencias de correo electrónico en la página de ajustes de tu cuenta o inténtalo de nuevo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar tus preferencias","ns_ok_button_text":"ACEPTAR","ns_successfully_subscribed_details":"Te has suscrito a la lista de correo de Rockstar Games y recibirás actualizaciones en el correo electrónico con el que te has suscrito. Cambia tus preferencias de correo electrónico en cualquier momento en la página de ajustes de tu cuenta.","ns_successfully_subscribed_title":"Te has suscrito","ns_yes_subscribe_text":"Sí, suscribirse"},"es-MX":{"bottom_sheet_modal_close_icon":"Cerrar","carousel_next_button":"Siguiente","carousel_prev_button":"Anterior","decorative_video_pause_button_label":"Pausar","decorative_video_play_button_label":"Reproducir","featured_game_breadcrumbs_parent_item":"Juegos","hero_carousel_pause_button":"Pausar","hero_carousel_play_button":"Reproducir","hp_hero_carousel_scroll_down_label":"Desplázate hacia abajo","hp_hero_play_button_label":"Reproducir","hp_hero_stop_button_label":"Detener","image_carousel_screen_reader_announcer_label":"Mostrando {selectedTab} de {total}","lightbox_close_button":"Cerrar","masonry_grid_external_store_link":"Enlace externo a la tienda","ns_already_subbed_details":"Ya recibes actualizaciones del boletín en esta dirección de correo electrónico. Modifica las preferencias de tu correo cuando quieras desde la página de ajustes de la cuenta.","ns_already_subbed_title":"Ya cuentas con una suscripción","ns_check_email_details":"Verifica tu dirección de correo electrónico mediante el enlace que enviamos al correo con el que te registraste para confirmar la suscripción a la lista de correos de Rockstar Games.","ns_check_email_title":"Verifica tu dirección de correo electrónico","ns_confirm_after_register_details":"No optaste por recibir correos con publicidad durante la creación de la cuenta. ¿Quieres suscribirte a nuestro boletín de todos modos?","ns_confirm_after_register_title":"Confirma tu suscripción","ns_confirm_details":"Haz clic en el botón a continuación para confirmar que quieres suscribirte al boletín de Rockstar Games.","ns_confirm_title":"Confirma tu suscripción","ns_error_generic_details":"En este momento, no podemos registrar esta dirección de correo electrónico a nuestro boletín.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento, no podemos registrar tu dirección de correo electrónico a nuestro boletín. Modifica las preferencias de tu correo desde la página de ajustes de la cuenta o inténtalo de nuevo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar preferencias","ns_ok_button_text":"ACEPTAR","ns_successfully_subscribed_details":"Cuentas con una suscripción a la lista de correos de Rockstar Games y recibirás actualizaciones habituales a la dirección de correo electrónico con la que te registraste. Gestiona las preferencias de tu correo cuando quieras desde la página de ajustes de la cuenta.","ns_successfully_subscribed_title":"Suscripción exitosa","ns_yes_subscribe_text":"Sí, suscribirse"},"fr-FR":{"bottom_sheet_modal_close_icon":"Fermer","carousel_next_button":"Suivant","carousel_prev_button":"Précédent","decorative_video_pause_button_label":"Pause","decorative_video_play_button_label":"Lecture","featured_game_breadcrumbs_parent_item":"Jeux","hero_carousel_pause_button":"Pause","hero_carousel_play_button":"Lecture","hp_hero_carousel_scroll_down_label":"Faire défiler vers le bas","hp_hero_play_button_label":"Lecture","hp_hero_stop_button_label":"Arrêter","image_carousel_screen_reader_announcer_label":"Affichage de {selectedTab} sur {total}","lightbox_close_button":"Fermer","masonry_grid_external_store_link":"Lien externe vers la boutique","ns_already_subbed_details":"Vous êtes déjà abonné(e) à la newsletter avec cette adresse e-mail. Modifiez vos préférences concernant les e-mails à tout moment sur la page des paramètres de votre compte.","ns_already_subbed_title":"Vous êtes déjà abonné(e)","ns_check_email_details":"Pour confirmer votre abonnement à la liste de diffusion de Rockstar Games, veuillez vérifier votre adresse e-mail en cliquant sur le lien envoyé à l\'adresse e-mail avec laquelle vous vous êtes abonné(e).","ns_check_email_title":"Vérifiez votre adresse e-mail","ns_confirm_after_register_details":"Vous avez choisi de ne pas recevoir d\'e-mails publicitaires lors de la création de votre compte. Voulez-vous toujours vous abonner à notre newsletter ?","ns_confirm_after_register_title":"Confirmez votre abonnement","ns_confirm_details":"Veuillez confirmer que vous souhaitez vous abonner à la newsletter de Rockstar Games en cliquant sur le bouton ci-dessous.","ns_confirm_title":"Confirmez votre abonnement","ns_error_generic_details":"Nous ne pouvons pas abonner cette adresse e-mail à notre newsletter pour l\'instant.","ns_error_generic_title":"Erreur","ns_error_preferences_details":"Nous ne pouvons pas abonner votre adresse e-mail à notre newsletter pour l\'instant. Modifiez vos préférences concernant les e-mails sur la page des paramètres de votre compte ou réessayez plus tard.","ns_error_preferences_title":"Erreur","ns_go_back_text":"Non, retour","ns_manage_prefs_button_text":"Gérer vos préférences","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Vous êtes désormais abonné(e) à la liste de diffusion de Rockstar Games. Vous recevrez des mises à jour régulières à l\'adresse e-mail avec laquelle vous vous êtes abonné(e). Gérez vos préférences concernant les e-mails à tout moment sur la page des paramètres de votre compte.","ns_successfully_subscribed_title":"Abonnement effectué","ns_yes_subscribe_text":"Oui, je m\'abonne"},"it-IT":{"bottom_sheet_modal_close_icon":"Chiudi","carousel_next_button":"Successivo","carousel_prev_button":"Precedente","decorative_video_pause_button_label":"Pausa","decorative_video_play_button_label":"Riproduci","featured_game_breadcrumbs_parent_item":"Giochi","hero_carousel_pause_button":"Pausa","hero_carousel_play_button":"Riproduci","hp_hero_carousel_scroll_down_label":"Scorri in basso","hp_hero_play_button_label":"Riproduci","hp_hero_stop_button_label":"Stop","image_carousel_screen_reader_announcer_label":"In riproduzione: {selectedTab} di {total}","lightbox_close_button":"Chiudi","masonry_grid_external_store_link":"Link esterno per il Negozio","ns_already_subbed_details":"Stai già usando questo indirizzo email per ricevere la newsletter. Puoi modificare le preferenze delle email in qualsiasi momento nella pagina delle impostazioni dell’account.","ns_already_subbed_title":"Sei già iscritto","ns_check_email_details":"Per confermare la tua iscrizione alla mailing list di Rockstar Games, verifica il tuo indirizzo email tramite il link che ti abbiamo inviato all’indirizzo email che hai usato per iscriverti.","ns_check_email_title":"Controlla la tua mail","ns_confirm_after_register_details":"Non hai acconsentito a ricevere le email di marketing durante la creazione dell\'account. Vuoi ancora iscriverti alla nostra newsletter?","ns_confirm_after_register_title":"Conferma la tua iscrizione","ns_confirm_details":"Conferma che vuoi iscriverti alla Newsletter di Rockstar Games cliccando sul pulsante qui sotto.","ns_confirm_title":"Conferma la tua iscrizione","ns_error_generic_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento.","ns_error_generic_title":"Errore","ns_error_preferences_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento. Modifica le preferenze della tua email nella pagina delle impostazioni dell’account o riprova più tardi.","ns_error_preferences_title":"Errore","ns_go_back_text":"No, torna indietro","ns_manage_prefs_button_text":"Gestisci le preferenze","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Hai effettuato l’iscrizione alla mailing list di Rockstar Games e riceverai regolarmente gli aggiornamenti all’indirizzo email che hai usato per iscriverti. Puoi modificare le preferenze delle email in qualsiasi momento nella pagina delle impostazioni dell’account.","ns_successfully_subscribed_title":"Iscrizione effettuata con successo","ns_yes_subscribe_text":"Sì, iscriviti"},"ja-JP":{"bottom_sheet_modal_close_icon":"閉じる","carousel_next_button":"次へ","carousel_prev_button":"前へ","decorative_video_pause_button_label":"一時停止","decorative_video_play_button_label":"再生","featured_game_breadcrumbs_parent_item":"ゲーム","hero_carousel_pause_button":"一時停止","hero_carousel_play_button":"再生","hp_hero_carousel_scroll_down_label":"下にスクロール","hp_hero_play_button_label":"再生","hp_hero_stop_button_label":"停止","image_carousel_screen_reader_announcer_label":"{total}のうち{selectedTab}を表示中","lightbox_close_button":"閉じる","masonry_grid_external_store_link":"ストアへの外部リンク","ns_already_subbed_details":"このメールアドレスで既にニュースレターアップデートを受け取っています。アカウント設定のページからいつでもメール受信設定を変更できます。","ns_already_subbed_title":"サブスクリプション登録済み","ns_check_email_details":"ロックスター・ゲームスのメールリストへのサブスクリプション登録を確認するため、登録に使用したメールアドレスに送られたリンクからメールアドレスを認証してください。","ns_check_email_title":"メールを確認してください","ns_confirm_after_register_details":"アカウント作成時にマーケティングメールを受け取ることを選択していません。ニュースレターのサブスクリプション登録をしますか？","ns_confirm_after_register_title":"サブスクリプション登録を承認してください","ns_confirm_details":"下のボタンをクリックすることでロックスター・ゲームスのニュースレターにサブスクリプション登録をすることを承認してください。","ns_confirm_title":"サブスクリプション登録を承認してください","ns_error_generic_details":"現在このメールアドレスをニュースレターに登録することができません。","ns_error_generic_title":"エラー","ns_error_preferences_details":"現在お客様のメールアドレスをニュースレターに登録することができません。アカウント設定のページからメール受信設定を変更するか、後ほど再度お試しください。","ns_error_preferences_title":"エラー","ns_go_back_text":"いいえ、戻ります","ns_manage_prefs_button_text":"受信設定を管理する","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"ロックスター・ゲームスのメールリストに登録されました。登録したメールアドレスに定期的にアップデートが送信されます。アカウント設定のページからいつでもメール受信設定を管理できます。","ns_successfully_subscribed_title":"サブスクリプション登録が完了しました","ns_yes_subscribe_text":"はい、サブスクリプション登録します"},"ko-KR":{"bottom_sheet_modal_close_icon":"닫기","carousel_next_button":"다음","carousel_prev_button":"이전","decorative_video_pause_button_label":"일시 정지","decorative_video_play_button_label":"재생","featured_game_breadcrumbs_parent_item":"게임","hero_carousel_pause_button":"일시 정지","hero_carousel_play_button":"재생","hp_hero_carousel_scroll_down_label":"아래로 스크롤","hp_hero_play_button_label":"재생","hp_hero_stop_button_label":"정지","image_carousel_screen_reader_announcer_label":"{total}의 {selectedTab} 이미지","lightbox_close_button":"닫기","masonry_grid_external_store_link":"스토어 외부 링크","ns_already_subbed_details":"이미 이 이메일 주소로 최신 뉴스레터 정보를 수신하고 있습니다. 계정 설정 페이지에서 언제든지 이메일 설정을 변경할 수 있습니다.","ns_already_subbed_title":"이미 구독 중","ns_check_email_details":"Rockstar Games 이메일 리스트 구독을 확인하려면 가입 시 사용한 이메일 주소로 전송된 링크를 통해 이메일 주소를 인증하십시오.","ns_check_email_title":"이메일 확인하기","ns_confirm_after_register_details":"계정을 생성할 때 마케팅 이메일 수신 동의를 선택하지 않았습니다. 그래도 뉴스레터를 구독하시겠습니까?","ns_confirm_after_register_title":"구독 확인하기","ns_confirm_details":"Rockstar Games 뉴스레터 구독을 확인하려면 아래 버튼을 클릭하십시오.","ns_confirm_title":"구독 확인하기","ns_error_generic_details":"현재 이 이메일 주소로 뉴스레터를 구독할 수 없습니다.","ns_error_generic_title":"오류","ns_error_preferences_details":"현재 해당 이메일 주소로 뉴스레터를 구독할 수 없습니다. 계정 설정 페이지에서 이메일 설정을 변경하거나 나중에 다시 시도하십시오.","ns_error_preferences_title":"오류","ns_go_back_text":"아니오, 뒤로 갑니다","ns_manage_prefs_button_text":"설정 관리","ns_ok_button_text":"확인","ns_successfully_subscribed_details":"Rockstar Games 이메일 리스트를 구독합니다. 가입하신 이메일 주소로 최신 정보가 정기적으로 전달됩니다. 계정 설정 페이지에서 언제든지 이메일 설정을 관리할 수 있습니다.","ns_successfully_subscribed_title":"구독 완료","ns_yes_subscribe_text":"네, 구독합니다"},"pl-PL":{"bottom_sheet_modal_close_icon":"Zamknij","carousel_next_button":"Dalej","carousel_prev_button":"Poprzednie","decorative_video_pause_button_label":"Zatrzymaj","decorative_video_play_button_label":"Odtwórz","featured_game_breadcrumbs_parent_item":"Gry","hero_carousel_pause_button":"Zatrzymaj","hero_carousel_play_button":"Odtwórz","hp_hero_carousel_scroll_down_label":"Przewiń w dół","hp_hero_play_button_label":"Odtwórz","hp_hero_stop_button_label":"Przerwij","image_carousel_screen_reader_announcer_label":"Wyświetlane {selectedTab} z {total}","lightbox_close_button":"Zamknij","masonry_grid_external_store_link":"Odnośnik zewnętrzny do sklepu","ns_already_subbed_details":"Otrzymujesz już powiadomienia o nowościach na ten adres e-mail. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_already_subbed_title":"Subskrypcja jest już aktywna","ns_check_email_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej.","ns_check_email_title":"Sprawdź swoją pocztę","ns_confirm_after_register_details":"Nie udzielono zgody na otrzymywanie powiadomień marketingowych przy zakładaniu konta. Czy chcesz subskrybować naszą listę mailingową?","ns_confirm_after_register_title":"Potwierdź swoją subskrypcję","ns_confirm_details":"Potwierdź swoją subskrypcję listy mailingowej Rockstar Games poprzez kliknięcie poniższego przycisku.","ns_confirm_title":"Potwierdź swoją subskrypcję","ns_error_generic_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej.","ns_error_generic_title":"Błąd","ns_error_preferences_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej. Zmień swoje preferencje w ustawieniach swojego konta lub spróbuj ponownie później.","ns_error_preferences_title":"Błąd","ns_go_back_text":"Nie, wróć","ns_manage_prefs_button_text":"Aktualizuj swoje preferencje","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_successfully_subscribed_title":"Pomyślnie zasubskrybowano","ns_yes_subscribe_text":"Tak, subskrybuj"},"pt-BR":{"bottom_sheet_modal_close_icon":"Fechar","carousel_next_button":"Próximo","carousel_prev_button":"Anterior","decorative_video_pause_button_label":"Pausar","decorative_video_play_button_label":"Iniciar","featured_game_breadcrumbs_parent_item":"Jogos","hero_carousel_pause_button":"Pausar","hero_carousel_play_button":"Iniciar","hp_hero_carousel_scroll_down_label":"Role para baixo","hp_hero_play_button_label":"Iniciar","hp_hero_stop_button_label":"Parar","image_carousel_screen_reader_announcer_label":"Mostrando {selectedTab} de {total}","lightbox_close_button":"Fechar","masonry_grid_external_store_link":"Link externo para a Loja","ns_already_subbed_details":"Você já está recebendo atualizações da newsletter neste endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta.","ns_already_subbed_title":"Você já se inscreveu","ns_check_email_details":"Para confirmar sua inscrição na lista de e-mails da Rockstar Games, verifique seu endereço de e-mail pelo link enviado para o endereço que você usou para se inscrever.","ns_check_email_title":"Verifique seu e-mail","ns_confirm_after_register_details":"Você escolheu não receber e-mails de marketing quando criou a sua conta. Deseja se inscrever na nosso newsletter?","ns_confirm_after_register_title":"Confirme sua inscrição","ns_confirm_details":"Confirme que você deseja se inscrever na newsletter da Rockstar Games clicando no botão abaixo.","ns_confirm_title":"Confirme sua inscrição","ns_error_generic_details":"No momento, não é possível se inscrever na nossa newsletter usando este endereço de e-mail.","ns_error_generic_title":"Erro","ns_error_preferences_details":"No momento, não é possível se inscrever na nossa newsletter usando o seu endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta ou tente de novo mais tarde.","ns_error_preferences_title":"Erro","ns_go_back_text":"Não, voltar","ns_manage_prefs_button_text":"Gerenciar preferências","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Você está inscrito na lista de e-mails da Rockstar Games e receberá atualizações periódicas no endereço de e-mail que usou para se inscrever. Gerencie suas preferências de e-mail a qualquer momento na página de configurações da sua conta.","ns_successfully_subscribed_title":"Inscrição confirmada","ns_yes_subscribe_text":"Sim, fazer inscrição"},"ru-RU":{"bottom_sheet_modal_close_icon":"Закрыть","carousel_next_button":"Далее","carousel_prev_button":"Назад","decorative_video_pause_button_label":"Пауза","decorative_video_play_button_label":"Воспроизвести","featured_game_breadcrumbs_parent_item":"Игры","hero_carousel_pause_button":"Пауза","hero_carousel_play_button":"Воспроизвести","hp_hero_carousel_scroll_down_label":"Прокрутить вниз","hp_hero_play_button_label":"Воспроизвести","hp_hero_stop_button_label":"Стоп","image_carousel_screen_reader_announcer_label":"На экране слайд {selectedTab} из {total} ","lightbox_close_button":"Закрыть","masonry_grid_external_store_link":"Внешняя ссылка на магазин","ns_already_subbed_details":"Вы уже получаете письма по рассылке на этот адрес электронной почты. Вы можете изменить настройки электронной почты в любое время на странице настроек учетной записи.","ns_already_subbed_title":"Подписка уже оформлена","ns_check_email_details":"Чтобы подтвердить подписку на рассылку электронных писем Rockstar Games, пожалуйста, подтвердите адрес электронной почты, нажав на ссылку в письме, полученном на адрес электронной почты, который вы указали при оформлении подписки.","ns_check_email_title":"Проверьте электронную почту","ns_confirm_after_register_details":"Вы не дали согласия на получение рекламных писем во время создания учетной записи. Вы все еще хотите оформить подписку на нашу рассылку?","ns_confirm_after_register_title":"Подтвердите подписку","ns_confirm_details":"Пожалуйста, подтвердите, что вы хотите подписаться на рассылку электронных писем Rockstar Games, нажав на кнопку ниже.","ns_confirm_title":"Подтвердите подписку","ns_error_generic_details":"Невозможно оформить подписку на нашу рассылку для этого адреса электронной почты в данный момент.","ns_error_generic_title":"Ошибка","ns_error_preferences_details":"Невозможно оформить подписку на нашу рассылку для вашего адреса электронной почты в данный момент. Вы можете изменить настройки электронной почты на странице настроек учетной записи или повторить попытку позже.","ns_error_preferences_title":"Ошибка","ns_go_back_text":"Нет, вернуться","ns_manage_prefs_button_text":"Изменить настройки учетной записи","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Подписка на рассылку электронных писем Rockstar Games оформлена, и вы будете регулярно получать новости на адрес электронной почты, указанный при оформлении. Вы можете изменить настройки электронной почты в любое время на странице настроек учетной записи.","ns_successfully_subscribed_title":"Подписка оформлена","ns_yes_subscribe_text":"Да, подписаться"},"zh-CN":{"bottom_sheet_modal_close_icon":"关闭","carousel_next_button":"下一个","carousel_prev_button":"上一个","decorative_video_pause_button_label":"暂停","decorative_video_play_button_label":"播放","featured_game_breadcrumbs_parent_item":"游戏","hero_carousel_pause_button":"暂停","hero_carousel_play_button":"播放","hp_hero_carousel_scroll_down_label":"向下滚动","hp_hero_play_button_label":"播放","hp_hero_stop_button_label":"停止","image_carousel_screen_reader_announcer_label":"正在显示{selectedTab}（共{total}）","lightbox_close_button":"关闭","masonry_grid_external_store_link":"前往商店的外部链接","ns_already_subbed_details":"您的电子邮件地址已在接收新闻通讯更新。您可以在账户设置页面随时修改您的电子邮件偏好。","ns_already_subbed_title":"已订阅","ns_check_email_details":"要确认您已订阅Rockstar Games电子邮件列表，请通过发送到您订阅时使用的电子邮件地址中的链接验证邮箱。","ns_check_email_title":"检查您的电子邮箱","ns_confirm_after_register_details":"您在创建账户时没有选择接收营销邮件。您还想要订阅我们的新闻通讯吗？","ns_confirm_after_register_title":"确认您的订阅","ns_confirm_details":"请点击下方按钮以确认您想订阅Rockstar Games新闻通讯。","ns_confirm_title":"确认您的订阅","ns_error_generic_details":"我们目前无法用此电子邮件地址订阅新闻通讯。","ns_error_generic_title":"错误","ns_error_preferences_details":"我们目前无法用您的电子邮件地址订阅新闻通讯。请在账户设置页面中修改您的电子邮件偏好，或稍后再试。","ns_error_preferences_title":"错误","ns_go_back_text":"不，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"好","ns_successfully_subscribed_details":"您现已订阅Rockstar Games电子邮件列表，您将会在您订阅时使用的电子邮件地址中收到定期更新。您可以在账户设置页面随时管理您的电子邮件偏好。","ns_successfully_subscribed_title":"订阅成功","ns_yes_subscribe_text":"是，订阅"},"zh-TW":{"bottom_sheet_modal_close_icon":"關閉","carousel_next_button":"下一個","carousel_prev_button":"上一個","decorative_video_pause_button_label":"暫停","decorative_video_play_button_label":"播放","featured_game_breadcrumbs_parent_item":"遊戲","hero_carousel_pause_button":"暫停","hero_carousel_play_button":"播放","hp_hero_carousel_scroll_down_label":"向下捲動","hp_hero_play_button_label":"播放","hp_hero_stop_button_label":"停止","image_carousel_screen_reader_announcer_label":"現正顯示 {selectedTab}（共 {total} 個）","lightbox_close_button":"關閉","masonry_grid_external_store_link":"前往商店的外部連結","ns_already_subbed_details":"電子報更新已以此電子郵件地址寄送給您。您可以在帳戶設定頁面隨時變更您的電子郵件偏好設定。","ns_already_subbed_title":"已經訂閱","ns_check_email_details":"為了確認您的 Rockstar Games 電子郵件通知訂閱，請以寄送到您訂閱電子郵件地址的連結，驗證您的電子郵件地址。","ns_check_email_title":"檢查您的電子郵件","ns_confirm_after_register_details":"在建立帳戶時，您並沒有選擇可接收行銷電子郵件。您仍想訂閱我們的電子報？","ns_confirm_after_register_title":"確認您的訂閱","ns_confirm_details":"請點擊以下按鈕，以確認您想訂閱 Rockstar Games 電子報。","ns_confirm_title":"確認您的訂閱","ns_error_generic_details":"我們現在無法將此電子郵件地址訂閱到我們的電子報。","ns_error_generic_title":"錯誤","ns_error_preferences_details":"我們現在無法將您的電子郵件地址訂閱到我們的電子報。在帳戶設定頁面變更您的電子郵件偏好設定，或稍後再試。","ns_error_preferences_title":"錯誤","ns_go_back_text":"否，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"確定","ns_successfully_subscribed_details":"您現在已訂閱 Rockstar Games 電子郵件通知，將會在訂閱的電子郵件地址收到定期更新。您可以在帳戶設定頁面隨時管理您的電子郵件偏好設定。","ns_successfully_subscribed_title":"成功訂閱","ns_yes_subscribe_text":"是，訂閱"}}');
      var se = a(12100),
        ne = a(46219),
        ie = a(6178),
        oe = a(56678);
      const ce = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, s) {
          const n = (0, v.v6)(a, {
            "data-testid": t
          });
          return (0, r.jsx)("picture", {
            ...n,
            ref: s,
            children: e
          })
        }),
        le = ({
          testId: e,
          src: t,
          ...a
        }) => {
          const s = (0, v.v6)(a, {
            "data-testid": e,
            srcSet: (0, ie.D)(t) ? t : (0, oe.GO)(t)?.map(e => `${e.url} ${e.width}w`).join(", ")
          });
          return (0, r.jsx)("source", {
            ...s
          })
        },
        de = (0, n.forwardRef)(function({
          testId: e,
          src: t,
          ...a
        }, s) {
          const i = (0, v.v6)(a, {
              "data-testid": e
            }),
            o = (0, n.useRef)(null),
            c = (0, ne.UP)(o, s);
          return (0, n.useEffect)(() => {
            o?.current && ((0, ie.D)(t) ? o.current.src = t : o.current.srcset = (0, oe.GO)(t)?.map(e => `${e.url} ${e.width}w`).join(", "))
          }, []), (0, r.jsx)("img", {
            className: "_1fbh3900",
            ref: c,
            ...i
          })
        }),
        ue = new Map([
          ["mobile", w.f.mobile],
          ["mobile_small", w.f.mobileSmall],
          ["mobile_medium", w.f.mobileMedium],
          ["tablet_small", w.f.tabletSmall],
          ["tablet_medium", w.f.tabletMedium],
          ["tablet_small_and_medium", w.f.tabletSmallAndMedium],
          ["tablet_large", w.f.tabletLarge],
          ["tablet_medium_and_large", w.f.tabletMediumAndLarge],
          ["tablet", w.f.tablet],
          ["desktop", w.f.desktop],
          ["desktop_small", w.f.desktopSmall],
          ["desktop_medium", w.f.desktopMedium],
          ["tablet_and_desktop", w.f.tabletAndDesktop],
          ["mobile_medium_and_larger", w.f.mobileMediumAndLarger],
          ["tablet_small_and_larger", w.f.tabletSmallAndLarger],
          ["tablet_medium_and_larger", w.f.tabletMediumAndLarger],
          ["tablet_medium_and_smaller", w.f.tabletMediumAndSmaller],
          ["tablet_large_and_larger", w.f.tabletLargeAndLarger],
          ["tablet_large_and_smaller", w.f.tabletLargeAndSmaller],
          ["desktop_small_and_larger", w.f.desktopSmallAndLarger],
          ["desktop_medium_and_larger", w.f.desktopMediumAndLarger],
          ["desktop_large_and_larger", w.f.desktopLargeAndLarger],
          ["portrait", w.f.portrait],
          ["landscape", w.f.landscape],
          ["mobile_landscape", w.f.mobileLandscape]
        ]),
        me = e => {
          for (const [t] of ue) {
            const a = e?.find(e => e === t);
            if (a) return a
          }
        },
        _e = "RsgImage";
      var fe = "var(--_1nrpitn0)";
      const ge = [{
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
        pe = (0, n.forwardRef)(function({
          src: e,
          testId: t,
          className: a,
          context: s,
          style: i,
          ...o
        }, l) {
          const [d, u] = (0, n.useState)(!1), m = (0, n.useRef)(null), _ = (0, ne.UP)(m, l);
          (0, n.useEffect)(() => {
            if (!m.current) return;
            if ("loading" in HTMLImageElement.prototype) return void u(!0);
            const e = new IntersectionObserver((e, t) => {
              e.some(e => e.isIntersecting) && (u(!0), t.disconnect())
            }, {
              rootMargin: "200px"
            });
            return e.observe(m.current), () => {
              e.disconnect()
            }
          }, [m.current]);
          const f = (0, n.useMemo)(() => {
            const r = (0, c.getOptimizedRsgImage)(e, s, {
                preferModernFormat: !0
              }),
              n = !r || !r.url || !(0, c.isVectorOrGif)(r.url),
              l = n ? (e => {
                if (!Array.isArray(e) || 0 === e.length) return "100vw";
                const t = e.filter(e => e?.slot).map(e => e.media ? `${e.media} ${e.slot}` : e.slot);
                return [...t.filter(e => e.includes("max-width")), t.find(e => !e.includes("max-width")) ?? "100vw"].join(", ")
              })(ge) : void 0,
              u = (0, x.DI)({
                [fe]: "" + (r?.width || 1) / (r?.height || 1)
              });
            return (0, v.v6)({
              "data-testid": t,
              srcSet: d && n ? r?.srcSet : void 0,
              src: r?.url,
              sizes: d && n ? l : void 0,
              className: S()(["_1nrpitn1", a]),
              alt: r?.alt ?? "",
              loading: "lazy",
              decoding: "async",
              width: r?.width || 1,
              height: r?.height || 1,
              style: {
                ...u,
                ...i
              }
            }, o)
          }, [t, a, s, e, o, d]);
          return d ? (0, r.jsx)("img", {
            ref: _,
            ...f
          }) : (0, r.jsx)("div", {
            ref: _
          })
        }),
        be = "RsgImageFile";
      var he = "var(--_19vg3kg0)";
      const ve = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...s
        }, n) {
          const i = a ? g.DX : "div",
            o = (0, v.v6)({
              "data-testid": t,
              className: "_19vg3kg1 _1betujy6 _1betujy5"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        ke = (0, n.forwardRef)(function({
          backgroundColor: e = "transparent",
          children: t,
          testId: a,
          asChild: s,
          altText: n,
          ...i
        }, o) {
          const c = s ? g.DX : "a",
            l = (0, v.v6)({
              "data-testid": a,
              className: "_19vg3kg2",
              "aria-label": n,
              style: (0, x.DI)({
                [he]: e
              })
            }, i);
          return (0, r.jsx)(c, {
            ref: o,
            ...l,
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
            c = (0, v.v6)({
              "data-testid": t,
              className: "_19vg3kg3",
              style: {
                backgroundImage: `url(${s})`
              }
            }, n);
          return (0, r.jsx)(o, {
            ref: i,
            ...c,
            children: e
          })
        }),
        we = (0, n.forwardRef)(function({
          src: e,
          ...t
        }, a) {
          const s = (0, v.v6)({
            src: e,
            className: "_19vg3kg4",
            context: e.context
          }, t);
          return (0, r.jsx)(pe, {
            ref: a,
            ...s
          })
        }),
        ye = "WwwBanner";
      var je = a(30257),
        Ce = a(16675),
        Ne = a(9738),
        Se = a.n(Ne);
      const Re = (0, o.defineMessages)({
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
      var Ie = (0, y.c)({
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
        Ee = "_1betujy6 _1betujy5",
        ze = (0, y.c)({
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
          withIndicators: !1,
          navigationRef: (0, n.createRef)(),
          embla: void 0,
          refEmblaContainer: void 0,
          defaultSlide: 0
        }),
        Ae = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          withIndicators: s = !1,
          defaultSlide: i = 0,
          carouselRef: o,
          ...c
        }, l) {
          const {
            navigationRef: d
          } = (0, n.useContext)(Te), [u, m] = (({
            defaultSlide: e
          }) => {
            const t = {
                axis: "x",
                align: "start",
                startIndex: e,
                active: !0,
                containScroll: "keepSnaps",
                loop: !1,
                skipSnaps: !0,
                inViewThreshold: .9
              },
              [a, r] = (0, Ce.A)(t, [(0, je.J)()]);
            return (0, n.useEffect)(() => {
              if (!r) return;
              const e = e => {
                e?.canScrollNext() || e?.canScrollPrev() ? e.reInit({
                  ...t,
                  watchDrag: !0
                }) : e.reInit({
                  ...t,
                  watchDrag: !1
                })
              };
              return r?.on("init", e), r?.on("resize", e), () => {
                r?.off("init", e), r?.off("resize", e)
              }
            }, [r]), [a, r]
          })({
            defaultSlide: i
          }), _ = a ? g.DX : "div", f = (0, v.v6)({
            "data-testid": t,
            className: "lwwe800"
          }, c), p = o ?? u;
          return (0, r.jsx)(Te.Provider, {
            value: {
              withIndicators: s,
              navigationRef: d,
              embla: m,
              defaultSlide: i,
              refEmblaContainer: p
            },
            children: (0, r.jsx)(_, {
              ref: l,
              ...f,
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
            o = (0, v.v6)(s, {
              "data-testid": t,
              className: Ee
            });
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        De = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, s) {
          const n = (0, v.v6)(a, {
            "data-testid": t,
            className: "lwwe801"
          });
          return (0, r.jsx)(l.Heading, {
            ref: s,
            ...n,
            children: e
          })
        }),
        Pe = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, s) {
          const {
            refEmblaContainer: i
          } = (0, n.useContext)(Te), o = (0, v.v6)({
            "data-testid": t,
            className: Ee
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
        Le = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          ...a
        }, s) {
          const n = t ? g.DX : "div",
            i = (0, v.v6)({
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
        Be = (0, n.forwardRef)(function({
          children: e,
          variant: t = "small",
          testId: a,
          ...s
        }, n) {
          const i = (0, v.v6)({
            "data-testid": a,
            className: Ie({
              variant: t
            })
          }, s);
          return (0, r.jsx)("div", {
            ref: n,
            ...i,
            children: e
          })
        }),
        Ge = (0, n.forwardRef)(function({
          isVisible: e = !0,
          prevButtonDisabled: t = !1,
          nextButtonDisabled: a = !0,
          onPrevButtonClick: s,
          onNextButtonClick: n,
          testId: i,
          asChild: c,
          ...d
        }, u) {
          const {
            formatMessage: m
          } = (0, o.useIntl)(), _ = c ? g.DX : "div", f = (0, v.v6)({
            onClick: s,
            isDisabled: t
          }, d), p = (0, v.v6)({
            onClick: n,
            isDisabled: a
          }, d);
          return (0, r.jsxs)(_, {
            ref: u,
            "data-testid": i,
            className: ze({
              visible: e
            }),
            children: [(0, r.jsx)(l.IconButton, {
              label: m(Re.carousel_prev_button),
              icon: "ArrowLeft",
              ...f
            }), (0, r.jsx)(l.IconButton, {
              label: m(Re.carousel_next_button),
              icon: "ArrowRight",
              ...p
            })]
          })
        });
      (0, y.c)({
        defaultClassName: "dlfce22",
        variantClassNames: {
          appearance: {
            accent: "dlfce23",
            primary: "dlfce24",
            secondary: "dlfce25",
            tertiary: "dlfce26",
            ghost: "dlfce27",
            information: "dlfce28",
            danger: "dlfce29"
          },
          size: {
            small: "dlfce2a",
            medium: "dlfce2b",
            large: "dlfce2c"
          }
        },
        defaultVariants: {
          appearance: "primary"
        },
        compoundVariants: []
      });
      const Ve = (0, n.createContext)({
          totalItems: 0,
          itemIndex: 0
        }),
        Oe = ({
          block: e,
          ...t
        }) => {
          const {
            blockPosition: a
          } = (0, n.useContext)(c.BlockRendererContext), {
            primaryAccentColor: s,
            secondaryAccentColor: i
          } = (0, n.useContext)(B), {
            viewportRef: o,
            controlsVisible: l,
            prevButtonDisabled: d,
            nextButtonDisabled: u,
            onPrevButtonClick: m,
            onNextButtonClick: _
          } = (({
            defaultSlide: e = 0
          }) => {
            const {
              trackEvent: t
            } = U(), [a, r] = (0, n.useState)(!0), [s, i] = (0, n.useState)(!0), [o, c] = (0, n.useState)(!1), l = {
              axis: "x",
              align: "start",
              startIndex: e,
              active: !0,
              containScroll: "trimSnaps",
              loop: !1,
              skipSnaps: !0,
              inViewThreshold: .9
            }, [d, u] = (0, Ce.A)(l, [(0, je.J)()]), m = (0, n.useCallback)(() => {
              u && (u.scrollPrev(), t({
                event: "carousel_previous"
              }))
            }, [u]), _ = (0, n.useCallback)(() => {
              u && (u.scrollNext(), t({
                event: "carousel_next"
              }))
            }, [u]), f = (0, n.useCallback)(() => {
              u && (r(!u.canScrollPrev()), i(!u.canScrollNext()))
            }, [u]), g = () => {
              if (!u) return;
              const e = u.internalEngine().scrollSnaps.length > 1;
              c(e), u.reInit({
                active: e
              })
            };
            return (0, n.useEffect)(() => {
              if (!u) return;
              f(), u.on("reInit", f).on("select", f);
              const e = Se()(g, 25);
              return window.addEventListener("resize", e), g(), () => {
                window.removeEventListener("resize", e)
              }
            }, [u, f]), (0, n.useEffect)(() => {
              if (!u) return;
              let e = 0;
              const a = () => {
                  e = u.selectedScrollSnap()
                },
                r = () => {
                  const a = u.selectedScrollSnap();
                  e !== a && t({
                    event: "carousel_swipe"
                  })
                };
              return u.on("pointerDown", a), u.on("pointerUp", r), () => {
                u.off("pointerDown", a), u.off("pointerUp", r)
              }
            }, [u]), {
              embla: u,
              viewportRef: d,
              controlsVisible: o,
              prevButtonDisabled: a,
              nextButtonDisabled: s,
              onPrevButtonClick: m,
              onNextButtonClick: _
            }
          })({
            defaultSlide: 0
          });
          if (!e) return;
          const f = e.cardsCollection?.items?.length ?? 0;
          return (0, r.jsxs)(Ae, {
            className: "dlfce20",
            carouselRef: o,
            ...t,
            children: [(0, r.jsxs)(Me, {
              children: [(0, r.jsx)(De, {
                level: 5,
                children: e.title
              }), (0, r.jsx)(Ge, {
                appearance: e.navigationButtonAppearance ?? "secondary",
                size: "SM",
                override_backgroundColor: s,
                override_textColor: i,
                isVisible: l,
                prevButtonDisabled: d,
                nextButtonDisabled: u,
                onPrevButtonClick: m,
                onNextButtonClick: _
              })]
            }), (0, r.jsx)(Pe, {
              children: e.cardsCollection?.items?.map((t, s) => (0, r.jsx)(Ve.Provider, {
                value: {
                  totalItems: f,
                  itemIndex: s
                },
                children: (0, r.jsx)(Be, {
                  variant: e.variant,
                  children: (0, r.jsx)(c.BlockRenderer, {
                    block: t,
                    blockPosition: a
                  }, e.sys.id)
                })
              }, `${t?.sys?.id}-${s}`))
            })]
          })
        },
        qe = "WwwDeck",
        Fe = (0, o.defineMessages)({
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
      var Ue = "_197irmi6",
        Xe = (0, y.c)({
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
        $e = "var(--_197irmi0)";
      const He = () => {
          const e = (0, n.useContext)(We);
          if (!e) throw new Error("useVideoContext must be used within VideoProvider");
          return e
        },
        We = (0, n.createContext)({
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
        Ke = (0, n.forwardRef)(function({
          landscapeViewportBehavior: e,
          scrimColor: t,
          reducedMotion: a,
          playOnce: s,
          children: i,
          asChild: o,
          ...c
        }, l) {
          const [d, u] = (0, n.useState)(!a), [m, _] = (0, n.useState)(!1), [f, p] = (0, n.useState)(!1), b = (0, n.useRef)(null), h = (0, n.useRef)(!1), k = (0, n.useRef)(null), x = (0, v.v6)({
            className: Xe({
              landscapeViewportBehavior: e
            })
          }, c), w = o ? g.DX : "div";
          return (0, r.jsx)(We.Provider, {
            value: {
              landscapeViewportBehavior: e,
              scrimColor: t,
              videoRef: b,
              lastPlayingRef: h,
              bgImageRef: k,
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
              ref: l,
              ...x,
              children: i
            })
          })
        }),
        Ye = (0, n.forwardRef)(function({
          onToggle: e,
          ...t
        }, a) {
          const {
            formatMessage: s
          } = (0, o.useIntl)(), {
            isPlaying: i,
            setIsPlaying: c,
            videoRef: d,
            lastPlayingRef: u,
            error: m,
            playOnce: _,
            hasEnded: f,
            setHasEnded: g,
            setError: p,
            reducedMotion: b
          } = He(), [h, k] = (0, n.useState)("Pause"), x = (!_ || !f) && u.current;
          (0, n.useEffect)(() => {
            k(i || x ? "Pause" : _ && f ? "Replay" : "Play")
          }, [x, i, _, f]);
          const w = (0, v.v6)({
            className: "_197irmi5",
            label: s(_ && f ? Fe.decorative_video_replay_button_label : x ? Fe.decorative_video_pause_button_label : Fe.decorative_video_play_button_label)
          }, t);
          return b || m ? null : (0, r.jsx)(l.IconButton, {
            ref: a,
            ...w,
            icon: h,
            size: "SM",
            onPress: async () => {
              e?.(!i);
              const t = d.current;
              if (t)
                if (_ && f) try {
                    g(!1), t.currentTime = 0, await t.play(), c(!0), u.current = !0
                  } catch {
                    p(!0), c(!1), u.current = !1
                  } else if (i || x) t?.pause(), c(!1), u.current = !1;
                  else try {
                    await (t?.play()), c(!0), u.current = !0
                  } catch {
                    p(!0), c(!1), u.current = !1
                  }
            }
          })
        }),
        Qe = (0, n.forwardRef)(function({
          src: e,
          poster: t,
          altText: a,
          autoPlay: s,
          muted: i,
          asChild: o,
          testId: c,
          ...l
        }, d) {
          const {
            videoRef: u,
            reducedMotion: m,
            lastPlayingRef: _,
            playOnce: f,
            setIsPlaying: p,
            error: b,
            setError: h,
            setHasEnded: k
          } = He(), x = o ? g.DX : "div", w = (0, v.v6)({
            "data-testid": c
          }, l);
          return (0, n.useEffect)(() => {
            const t = u.current;
            if (!t || !e || m) return;
            const a = t?.children[t.children.length - 1] ?? null,
              r = () => {
                p(!0), k(!1), _.current = !0
              },
              s = () => {
                t.paused || (p(!1), _.current = !1)
              },
              n = () => {
                console.warn("Play request interrupted :", t.error), h(!0), p(!1), _.current = !1
              },
              i = () => {
                p(!1), _.current = !1, k(!0)
              },
              o = () => {
                console.warn("Video failed to load sources."), h(!0), p(!1), _.current = !1
              };
            return t.addEventListener("play", r), t.addEventListener("pause", s), t.addEventListener("error", n), t.addEventListener("ended", i), a && a.addEventListener("error", o), () => {
              t.removeEventListener("play", r), t.removeEventListener("pause", s), t.removeEventListener("error", n), t.removeEventListener("ended", i), a && a.removeEventListener("error", o)
            }
          }, [u, e, m, p, h, k, _.current]), (() => {
            const {
              videoRef: e,
              lastPlayingRef: t,
              setIsPlaying: a,
              playOnce: r,
              hasEnded: s
            } = He();
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
            } = He();
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
            children: b || m || !e ? (0, r.jsx)("img", {
              alt: a,
              src: t,
              className: Ue
            }) : (0, r.jsx)("video", {
              ref: u,
              className: Ue,
              src: e,
              poster: t,
              autoPlay: s,
              muted: i,
              loop: !f,
              playsInline: !0,
              onError: () => h(!0),
              "aria-hidden": "true",
              tabIndex: -1
            })
          })
        }),
        Ze = (0, n.forwardRef)(function({
          children: e,
          ...t
        }, a) {
          const {
            scrimColor: s
          } = He(), n = (0, v.v6)({
            className: "_197irmi4",
            style: (0, x.DI)({
              [$e]: s ?? "unset"
            })
          }, t);
          return (0, r.jsx)("div", {
            ref: a,
            ...n,
            children: e
          })
        }),
        Je = "WwwDecorativeVideo";
      var et = (0, y.c)({
        defaultClassName: "_1rkk0nk0",
        variantClassNames: {
          size: {
            dimensions_25: "_1rkk0nk1",
            dimensions_50: "_1rkk0nk2",
            dimensions_100: "_1rkk0nk3",
            dimensions_150: "_1rkk0nk4",
            dimensions_175: "_1rkk0nk5"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      const tt = (0, n.forwardRef)(function({
          gradientStyle: e = "",
          thickness: t = "dimensions_25",
          ...a
        }, s) {
          return (0, r.jsx)("div", {
            className: et({
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
        at = "WwwDivider",
        rt = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          layout: a = "primary",
          aspect: s = "wide",
          transparent: n = !1,
          className: i,
          asChild: o,
          ...c
        }, l) {
          const d = o ? g.DX : "div",
            u = (0, v.v6)({
              className: S()("sp6aw70", i),
              "data-layout": a,
              "data-aspect": s,
              "data-transparent": !!n || void 0,
              "data-testid": t
            }, c);
          return (0, r.jsx)(d, {
            ref: l,
            ...u,
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
            o = (0, v.v6)({
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
            o = (0, v.v6)({
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
          const i = a ? g.DX : l.Text,
            o = (0, v.v6)({
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
          const i = a ? g.DX : l.Heading,
            o = (0, v.v6)({
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
        ct = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...s
        }, n) {
          const i = a ? g.DX : "time",
            o = (0, v.v6)({
              className: "sp6aw77 sp6aw74",
              "data-testid": t
            }, s);
          return (0, r.jsx)(i, {
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
          const i = a ? g.DX : "div",
            o = (0, v.v6)({
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
            }), (0, r.jsx)(ct, {
              children: (0, r.jsx)(ut, {
                width: "40%"
              })
            })]
          })]
        }),
        ft = ({
          loading: e,
          data: t,
          aspect: a,
          layout: s,
          transparent: n,
          handleStoryClick: i,
          testId: o
        }) => {
          const c = t?.preview_images_parsed.newswire_block["square" === a ? "square" : "d16x9"],
            l = `${c}?im=Resize,width=${"primary"===s?1200:600}`;
          return e || !t ? (0, r.jsx)(_t, {
            layout: s,
            aspect: a,
            testId: o
          }) : (0, r.jsx)(k, {
            className: "_17xncyz1",
            href: t.url,
            onClick: i,
            children: (0, r.jsxs)(rt, {
              className: mt,
              layout: s,
              aspect: a,
              transparent: n,
              testId: o,
              children: [(0, r.jsx)(st, {
                children: (0, r.jsx)("img", {
                  src: l,
                  loading: "lazy"
                })
              }), (0, r.jsxs)(nt, {
                children: [(0, r.jsxs)(lt, {
                  children: [(0, r.jsx)(it, {
                    children: t.primary_tags[0].name
                  }), (0, r.jsx)(ot, {
                    children: t.title
                  })]
                }), (0, r.jsx)(ct, {
                  dateTime: t.created,
                  children: t.created_formatted
                })]
              })]
            })
          })
        };
      var gt = a(87592);
      const pt = i.gql`
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
        bt = "WwwEditorialPost";
      var ht = (0, y.c)({
        defaultClassName: "aof7fm2",
        variantClassNames: {
          type: {
            tablet: "aof7fm3",
            desktop: "aof7fm4"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      const vt = ({
          stories: e
        }) => {
          const {
            trackEvent: t
          } = U(), {
            viewportRef: a
          } = (({
            defaultSlide: e = 0
          }) => {
            const {
              trackEvent: t
            } = U(), a = {
              axis: "x",
              align: "start",
              startIndex: e,
              active: !0,
              containScroll: "trimSnaps",
              loop: !1,
              skipSnaps: !0,
              inViewThreshold: .9
            }, [r, s] = (0, Ce.A)(a, [(0, je.J)()]);
            return (0, n.useEffect)(() => {
              if (!s) return;
              let e = 0;
              const a = () => {
                  e = s.selectedScrollSnap()
                },
                r = () => {
                  const a = s.selectedScrollSnap();
                  e !== a && t({
                    event: "carousel_swipe"
                  })
                };
              return s.on("pointerDown", a), s.on("pointerUp", r), () => {
                s.off("pointerDown", a), s.off("pointerUp", r)
              }
            }, [s]), {
              embla: s,
              viewportRef: r
            }
          })({
            defaultSlide: 0
          }), s = (0, ne.Ub)(w.f.tabletMediumAndLarger), i = e[0], o = e.slice(1), c = (a, r) => () => {
            const s = a.block,
              n = {
                position: r,
                position_max: e.length,
                event: "card_click",
                card_name: s?.url.split("/").pop() ?? s?.title,
                card_id: a.tinaId,
                link_url: s?.url
              };
            t(n)
          };
          return (0, r.jsx)("div", {
            "data-testid": "editorial-grid-module",
            children: (0, r.jsxs)("div", {
              className: s ? "aof7fm0 _1betujy6 _1betujy5" : "",
              children: [(0, r.jsx)("div", {
                className: "aof7fm5",
                children: (0, r.jsx)(Ae, {
                  testId: "newswire-carousel",
                  carouselRef: a,
                  className: "aof7fm7",
                  onCarouselDrag: () => {},
                  children: (0, r.jsxs)(Pe, {
                    children: [i && (0, r.jsx)(Be, {
                      children: (0, r.jsx)(ft, {
                        data: i.block,
                        layout: "secondary",
                        aspect: "wide",
                        handleStoryClick: c(i, 1),
                        testId: i.tinaId
                      })
                    }, `${i.tinaId}_primary`), o.map((e, t) => (0, r.jsx)(Be, {
                      children: (0, r.jsx)(ft, {
                        data: e.block,
                        layout: "secondary",
                        aspect: "wide",
                        handleStoryClick: c(e, t + 2),
                        testId: e.tinaId
                      })
                    }, `${e.tinaId}_secondary_${t}`))]
                  })
                })
              }), i && (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)("div", {
                  className: ht({
                    type: "tablet"
                  }),
                  "data-testid": "primary-story-tablet",
                  children: (0, r.jsx)(ft, {
                    data: i.block,
                    layout: "primary",
                    aspect: "wide",
                    handleStoryClick: c(i, 1),
                    testId: i.tinaId
                  })
                }), (0, r.jsx)("div", {
                  className: ht({
                    type: "desktop"
                  }),
                  "data-testid": "primary-story-desktop",
                  children: (0, r.jsx)(ft, {
                    data: i.block,
                    layout: "primary",
                    aspect: "wide",
                    handleStoryClick: c(i, 1),
                    testId: i.tinaId
                  })
                })]
              }), (0, r.jsx)("div", {
                className: "aof7fm6",
                "data-testid": "tertiary-stories",
                children: o.map((e, t) => (0, r.jsx)("div", {
                  children: (0, r.jsx)(ft, {
                    data: e.block,
                    layout: "tertiary",
                    aspect: "square",
                    transparent: !0,
                    handleStoryClick: c(e, t + 2),
                    testId: e.tinaId
                  })
                }, `${e.tinaId}_tertiary_${t}`))
              })]
            })
          })
        },
        kt = i.gql`
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
        xt = "WwwEditorialGridModule",
        wt = (0, o.defineMessages)({
          featured_game_breadcrumbs_parent_item: {
            id: "featured_game_breadcrumbs_parent_item",
            description: "Breadcrumbs parent page item label",
            defaultMessage: "Games"
          }
        }),
        yt = (0, o.defineMessages)({
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
      var jt = "vi4uz51";
      const Ct = (0, n.createContext)({
          videoRef: null,
          bgImageRef: null,
          isPlaying: !1,
          isLooping: !1,
          reducedMotion: !1,
          setIsPlaying: () => {},
          videoError: !1,
          setVideoError: () => {}
        }),
        Nt = () => {
          const e = (0, n.useContext)(Ct);
          if (!e) throw new Error("useHeroContext must be used within HeroProvider");
          return e
        },
        St = (0, n.forwardRef)(function({
          testId: e,
          children: t,
          asChild: a,
          isLooping: s = !1,
          ...i
        }, o) {
          const c = window && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
            l = (0, n.useRef)(null),
            d = (0, n.useRef)(null),
            [u, m] = (0, n.useState)(!c),
            [_, f] = (0, n.useState)(!1),
            p = (0, v.v6)({
              "data-testid": e,
              className: "vi4uz50"
            }, i),
            b = a ? g.DX : "div";
          return (0, r.jsx)(Ct.Provider, {
            value: {
              videoRef: l,
              bgImageRef: d,
              isPlaying: u,
              isLooping: s,
              reducedMotion: c,
              setIsPlaying: m,
              videoError: _,
              setVideoError: f
            },
            children: (0, r.jsx)(b, {
              ref: o,
              ...p,
              children: t
            })
          })
        }),
        Rt = (0, n.forwardRef)(function({
          videoSrc: e,
          backgroundImage: t,
          isPlaying: a,
          setIsPlaying: s,
          videoLabel: i,
          testId: o,
          asChild: l,
          ...d
        }, u) {
          const m = (0, ne.Ub)(w.f.mobile),
            {
              videoRef: _,
              isLooping: f,
              reducedMotion: p,
              setVideoError: b
            } = Nt(),
            [h, k] = (0, n.useState)(null),
            x = l ? g.DX : "div",
            y = (0, v.v6)({
              "data-testid": o,
              className: jt
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
                console.warn("Video failed to load sources."), b(!0)
              };
            return t.addEventListener("play", r), t.addEventListener("error", i), t.addEventListener("pause", n), a && a.addEventListener("error", o), () => {
              t.removeEventListener("play", r), t.removeEventListener("error", i), t.removeEventListener("pause", n), a && a.removeEventListener("error", o)
            }
          }, [_.current, JSON.stringify(e), p]), (0, n.useEffect)(() => {
            const e = (0, c.getOptimizedRsgImage)(t, m ? "1:1" : "21:9", {
              preferModernFormat: !0
            });
            e && k(e)
          }, [t, m]), (0, r.jsxs)(x, {
            ref: u,
            ...y,
            children: [(0, r.jsxs)("video", {
              ref: _,
              className: jt,
              loop: f,
              "aria-label": i,
              autoPlay: !0,
              playsInline: !0,
              muted: !0,
              poster: h?.url ?? void 0,
              children: [e.mobile && (0, r.jsx)("source", {
                media: w.f.mobile,
                src: e.mobile,
                type: "video/mp4"
              }), e.desktop && (0, r.jsx)("source", {
                media: w.f.tabletSmallAndLarger,
                src: e.desktop,
                type: "video/mp4"
              })]
            }), (0, r.jsx)(pe, {
              context: m ? "1:1" : "21:9",
              src: t,
              className: S()(["vi4uz52", a ? "vi4uz54" : "vi4uz53"]),
              "aria-hidden": a
            })]
          })
        }),
        It = (0, n.forwardRef)(function({
          disabled: e,
          onButtonClick: t,
          isPlaying: a,
          testId: s,
          ...i
        }, c) {
          const {
            formatMessage: d
          } = (0, o.useIntl)(), {
            videoRef: u,
            reducedMotion: m,
            videoError: _
          } = Nt(), f = (0, n.useCallback)(() => {
            (() => {
              const e = u.current;
              e && (a ? (e?.pause(), e.currentTime = 0) : e?.play())
            })(), t?.(a)
          }, [a]), g = (0, v.v6)({
            "data-testid": s,
            className: S()("vi4uz5e", e ? "vi4uz5d" : ""),
            label: d(a ? yt.hp_hero_stop_button_label : yt.hp_hero_play_button_label)
          }, i);
          return m || _ ? null : (0, r.jsx)(l.IconButton, {
            ref: c,
            ...g,
            icon: a ? "Stop" : "Play",
            appearance: "primary",
            size: "SM",
            onPress: f
          })
        });
      var Et = a(79142),
        zt = (0, y.c)({
          defaultClassName: "_1lfrlj8e",
          variantClassNames: {
            size: {
              small: "_1lfrlj8f",
              medium: "_1lfrlj8g",
              large: "_1lfrlj8h",
              xlarge: "_1lfrlj8i"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Tt = (0, y.c)({
          defaultClassName: "_1lfrlj89",
          variantClassNames: {
            size: {
              small: "_1lfrlj8a",
              medium: "_1lfrlj8b",
              large: "_1lfrlj8c",
              xlarge: "_1lfrlj8d"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        At = (0, y.c)({
          defaultClassName: "_1lfrlj8y",
          variantClassNames: {
            size: {
              small: "_1lfrlj8z",
              medium: "_1lfrlj810",
              large: "_1lfrlj811",
              xlarge: "_1lfrlj812"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Mt = (0, y.c)({
          defaultClassName: "_1lfrlj8r",
          variantClassNames: {
            theme: {
              dark: "_1lfrlj8s",
              light: "_1lfrlj8t"
            },
            size: {
              small: "_1lfrlj8u",
              medium: "_1lfrlj8v",
              large: "_1lfrlj8w",
              xlarge: "_1lfrlj8x"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Dt = "var(--_1lfrlj80)",
        Pt = "var(--_1lfrlj81)",
        Lt = "var(--_1lfrlj82)",
        Bt = (0, y.c)({
          defaultClassName: "_1lfrlj86",
          variantClassNames: {
            interactive: {
              false: "_1lfrlj87",
              true: "_1lfrlj88"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Gt = (0, y.c)({
          defaultClassName: "_1lfrlj83",
          variantClassNames: {
            gradient: {
              linear: "_1lfrlj84",
              radial: "_1lfrlj85"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Vt = (0, y.c)({
          defaultClassName: "_1lfrlj8k",
          variantClassNames: {
            theme: {
              light: "_1lfrlj8l",
              dark: "_1lfrlj8m"
            },
            size: {
              small: "_1lfrlj8n",
              medium: "_1lfrlj8o",
              large: "_1lfrlj8p",
              xlarge: "_1lfrlj8q"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ot = (0, y.c)({
          defaultClassName: "_1i0xbue0",
          variantClassNames: {
            size: {
              SM: "_1i0xbue1",
              MD: "_1i0xbue2",
              LG: "_1i0xbue3",
              XL: "_1i0xbue4"
            }
          },
          defaultVariants: {
            size: "MD"
          },
          compoundVariants: []
        });
      const qt = (0, n.forwardRef)(function({
          image: e,
          size: t = "MD",
          context: a = "mobile",
          testId: s,
          asChild: n,
          className: i,
          ...o
        }, c) {
          if (!e) return;
          const l = n ? g.DX : "div",
            d = (0, v.v6)({
              "data-testid": s,
              className: S()(Ot({
                size: t
              }), i)
            }, o);
          return (0, r.jsx)(l, {
            ref: c,
            ...d,
            children: (0, r.jsx)(pe, {
              src: e,
              context: a,
              className: "_1i0xbue5",
              alt: e.altText ?? ""
            })
          })
        }),
        Ft = (0, n.createContext)({
          size: void 0,
          interactive: !1,
          gradientColor: void 0,
          theme: "dark"
        }),
        Ut = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          size: s = "medium",
          gradientColor: n,
          gradientType: i = "linear",
          interactive: o = !1,
          theme: c = "dark",
          className: l,
          ...d
        }, u) {
          const m = ((e = "") => {
              if (!e || "string" != typeof e) return null;
              let t = e.replace("#", "");
              return 3 === t.length && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), {
                r: parseInt(t.substring(0, 2), 16).toString(),
                g: parseInt(t.substring(2, 4), 16).toString(),
                b: parseInt(t.substring(4, 6), 16).toString()
              }
            })(n),
            _ = m && (0, x.DI)({
              [Dt]: m.r,
              [Lt]: m.b,
              [Pt]: m.g
            }),
            f = a ? g.DX : "div",
            p = (0, v.v6)({
              "data-testid": t,
              className: S()(Gt({
                gradient: i
              }), l),
              style: {
                ..._
              }
            }, d);
          return (0, r.jsx)(Ft.Provider, {
            value: {
              size: s,
              gradientColor: n,
              interactive: o,
              theme: c
            },
            children: (0, r.jsx)(f, {
              ref: u,
              ...p,
              children: e
            })
          })
        }),
        Xt = (0, n.forwardRef)(function({
          alt: e,
          src: t,
          testId: a,
          ...s
        }, i) {
          const {
            interactive: o
          } = (0, n.useContext)(Ft), c = (0, v.v6)({
            "data-testid": a,
            className: Bt({
              interactive: o
            }),
            alt: e,
            src: t
          }, s);
          return (0, r.jsx)(pe, {
            ref: i,
            ...c
          })
        }),
        $t = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          className: s,
          ...i
        }, o) {
          const c = (0, n.useContext)(Ft);
          if (!c) return;
          const {
            size: l
          } = c, d = a ? g.DX : "div", u = (0, v.v6)({
            "data-testid": t,
            className: S()(Tt({
              size: l
            }), s)
          }, i);
          return (0, r.jsx)(d, {
            ref: o,
            ...u,
            children: e
          })
        }),
        Ht = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, s) {
          const i = (0, n.useContext)(Ft);
          if (!i) return;
          const {
            size: o
          } = i, c = (0, v.v6)({
            "data-testid": t,
            className: zt({
              size: o
            })
          }, a);
          return (0, r.jsx)("span", {
            ref: s,
            ...c,
            children: e
          })
        }),
        Wt = (0, n.forwardRef)(function({
          ...e
        }, t) {
          const a = (0, v.v6)({
            className: "_1lfrlj8j"
          }, e);
          return (0, r.jsx)(qt, {
            ref: t,
            ...a
          })
        }),
        Kt = (0, n.forwardRef)(function({
          children: e,
          level: t = 5,
          testId: a,
          ...s
        }, i) {
          const o = (0, n.useContext)(Ft);
          if (!o) return;
          const {
            size: d,
            theme: u
          } = o, m = (0, v.v6)({
            "data-testid": a,
            className: Vt({
              theme: u,
              size: d
            })
          }, s);
          return (0, r.jsx)(c.RsgMdTextComponent, {
            markdown: e,
            rsgRichTextOptions: {
              renderNode: {
                [Et.BLOCKS.HEADING_1]: (e, a) => (0, r.jsx)(l.Heading, {
                  level: t,
                  ref: i,
                  ...m,
                  children: a
                })
              }
            }
          })
        }),
        Yt = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...s
        }, i) {
          const o = (0, n.useContext)(Ft);
          if (!o) return;
          const {
            size: c
          } = o, l = a ? g.DX : "div", d = (0, v.v6)({
            "data-testid": t,
            className: Mt({
              size: c
            })
          }, s);
          return (0, r.jsx)(l, {
            ref: i,
            ...d,
            children: e
          })
        }),
        Qt = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, s) {
          const i = (0, n.useContext)(Ft);
          if (!i) return;
          const {
            size: o,
            theme: c
          } = i, d = (0, L.m)(c, "normal"), u = (0, v.v6)({
            "data-testid": t,
            className: S()(d, At({
              size: o
            }))
          }, a);
          return (0, r.jsx)(l.Button, {
            ref: s,
            ...u,
            children: e
          })
        });
      (0, y.c)({
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
      const Zt = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...s
        }, n) {
          const i = a ? g.DX : "section",
            o = (0, v.v6)({
              "data-testid": t,
              className: "_16t2abv0"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        Jt = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...s
        }, n) {
          const i = a ? g.DX : "div",
            o = (0, v.v6)({
              "data-testid": t,
              className: "_16t2abv1"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        ea = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...s
        }, n) {
          const i = a ? g.DX : "div",
            o = (0, v.v6)({
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
      var ta = (0, y.c)({
          defaultClassName: "hg5jwy4",
          variantClassNames: {
            reducedMotion: {
              false: "hg5jwy5",
              true: "hg5jwy6"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        aa = "hg5jwy2";
      const ra = ({
        block: e,
        size: t = "MD",
        backgroundColor: a,
        asChild: s,
        ...i
      }) => {
        const {
          trackEvent: o
        } = U(), [, c] = (0, u.useSearchParams)(), [d, m] = (0, n.useState)(""), {
          open: _
        } = f(), p = d && window.location.search.replace("?", "&"), b = e?.link?.url + p;
        if ((0, n.useEffect)(() => {
            if (!_) {
              const t = new URLSearchParams(e?.link?.url).get("view");
              m(t || "")
            }
          }, [e?.link?.url]), !e) return;
        const h = (0, v.v6)({
          size: t,
          appearance: e?.appearance,
          iconLeft: e?.iconLeft?.icon,
          iconRight: e?.iconRight?.icon,
          onPress: (x = e, () => {
            d && c(e => (e.set("view", d), e)), o({
              event: "cta_other",
              text: e.text?.toLowerCase(),
              link_url: b,
              ...x.analyticsData
            }, x)
          }),
          asChild: !d,
          override_backgroundColor: e.backgroundColor ?? a
        }, i);
        var x;
        return (0, r.jsx)(r.Fragment, {
          children: s ? (0, r.jsx)(k, {
            href: b,
            target: e?.openInNewTab ? "_blank" : "_self",
            children: (0, r.jsx)(g.DX, {
              ...i
            })
          }) : (0, r.jsx)(l.Button, {
            ...h,
            children: d ? e.text : (0, r.jsx)(k, {
              href: b,
              target: e?.openInNewTab ? "_blank" : "_self",
              children: e.text
            })
          })
        })
      };
      var sa = a(79719),
        na = a(44154);
      sa.os.registerPlugin(se.u);
      const ia = (0, n.createContext)({
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
        oa = () => (0, n.useContext)(ia),
        ca = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...s
        }, i) {
          const o = window && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
            c = (0, n.useRef)(null),
            l = (0, n.useRef)(null),
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
            const [o, c] = (0, n.useState)(!1);
            (0, na.L)(() => {
              if (o) return;
              const n = e.current,
                l = t.current,
                d = a.current,
                u = r.current,
                m = s.current,
                _ = i.current;
              if (!(n && l && d && u && m && _)) return;
              const f = sa.os.timeline({
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
                  scrub: !0
                }
              });
              f.fromTo(d, {
                background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, 70%, rgba(0, 0, 0, 1) 100%)"
              }, {
                background: "linear-gradient(180deg, rgba(0, 0, 0, 0) -100%, -60%, rgba(0, 0, 0, 1) 20%)"
              }, 0), f.to(d, {
                backdropFilter: "blur(50px)",
                duration: 50
              }, 50), f.fromTo(l, {
                scale: 1
              }, {
                scale: 1.1
              }, 0), f.to(u, {
                opacity: 0,
                duration: 10
              }, 70), s.current && (sa.os.utils.toArray(":scope > *", s.current).forEach(e => {
                sa.os.fromTo(e, {
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
              }), f.scrollTrigger.refresh(), c(!0))
            }, [e.current, t.current, a.current, r.current, i.current, s.current])
          }({
            heroRef: c,
            backgroundRef: l,
            backgroundGradientRef: d,
            playStopButtonRef: u,
            collectionsRef: m,
            gameDetailsRef: _
          });
          const b = a ? g.DX : "div",
            h = (0, v.v6)({
              "data-testid": t,
              className: "hg5jwy0"
            }, s);
          return (0, r.jsx)(ia.Provider, {
            value: {
              heroRef: c,
              backgroundRef: l,
              backgroundGradientRef: d,
              playStopButtonRef: u,
              collectionsRef: m,
              gameDetailsRef: _,
              reducedMotion: o,
              isPlaying: f,
              setIsPlaying: p
            },
            children: (0, r.jsx)(b, {
              ref: i,
              ...h,
              children: e
            })
          })
        }),
        la = (0, n.forwardRef)(function({
          backgroundImage: e,
          backgroundVideo: t,
          ...a
        }, s) {
          const {
            heroRef: n,
            backgroundRef: i,
            backgroundGradientRef: o,
            isPlaying: c,
            playStopButtonRef: l,
            reducedMotion: d,
            setIsPlaying: u
          } = oa(), {
            trackEvent: m
          } = U(), _ = (0, ne.UP)(n, s), f = (0, ne.Ub)(w.f.mobile), g = t?.videoFilesCollection?.items?.find(e => "21:9" === e.context), p = t?.videoFilesCollection?.items?.find(e => "1:1" === e.context), b = {
            desktop: g?.url,
            mobile: p?.url ?? g?.url
          };
          return (0, r.jsxs)(St, {
            ref: _,
            ...a,
            children: [(0, r.jsx)(Rt, {
              backgroundImage: e,
              isPlaying: c,
              ref: i,
              setIsPlaying: u,
              videoSrc: b,
              videoLabel: t?.title ?? ""
            }), !d && (0, r.jsx)(It, {
              ref: l,
              isPlaying: c,
              onButtonClick: e => {
                const a = f ? p : g;
                m({
                  event: "cta_other",
                  text: e ? "toggle pause" : "toggle play",
                  video_id: a?.sys?.id,
                  video_type: t?.type
                }, t)
              }
            }), (0, r.jsx)("div", {
              ref: o,
              className: ta({
                reducedMotion: d
              })
            })]
          })
        }),
        da = (0, n.forwardRef)(function({
          ...e
        }, t) {
          const a = (0, v.v6)({
            className: "hg5jwy3"
          }, e);
          return (0, r.jsx)(pe, {
            ref: t,
            ...a
          })
        }),
        ua = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...s
        }, n) {
          const i = a ? g.DX : "div",
            o = (0, v.v6)({
              "data-testid": t,
              className: "hg5jwy7"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        ma = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...s
        }, n) {
          const i = a ? g.DX : "div",
            o = (0, v.v6)({
              "data-testid": t,
              className: "hg5jwy8 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdc"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        _a = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...s
        }, n) {
          const i = a ? g.DX : "div",
            o = (0, v.v6)({
              "data-testid": t,
              className: "hg5jwy9"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        fa = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...s
        }, n) {
          const i = a ? g.DX : "div",
            o = (0, v.v6)({
              "data-testid": t,
              className: "hg5jwya"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        ga = (0, n.forwardRef)(function({
          icon: e,
          testId: t,
          asChild: a,
          ...s
        }, n) {
          const i = a ? g.DX : "div",
            o = (0, v.v6)({
              "data-testid": t,
              className: "hg5jwyb"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: (0, r.jsx)(pe, {
              src: e,
              context: "mobile",
              className: "hg5jwyc"
            })
          })
        }),
        pa = (0, n.forwardRef)(function({
          logo: e,
          gamePageLink: t,
          title: a,
          description: s,
          ctas: n,
          children: i,
          platforms: c,
          ...d
        }, u) {
          const {
            collectionsRef: m,
            gameDetailsRef: _
          } = oa(), {
            formatMessage: f
          } = (0, o.useIntl)(), g = (0, ne.UP)(_, u);
          return (0, r.jsxs)(Zt, {
            ref: m,
            className: "hg5jwy1",
            children: [(0, r.jsxs)(ea, {
              ref: g,
              ...d,
              children: [(0, r.jsx)(da, {
                src: e,
                context: "mobile"
              }), (0, r.jsxs)(ua, {
                children: [(0, r.jsxs)(Jt, {
                  className: aa,
                  children: [(0, r.jsxs)(l.Breadcrumbs.Root, {
                    children: [(0, r.jsx)(l.Breadcrumbs.Item, {
                      href: "/games",
                      children: f(wt.featured_game_breadcrumbs_parent_item)
                    }), (0, r.jsx)(l.Breadcrumbs.Item, {
                      href: t,
                      isCurrent: !0,
                      children: a
                    })]
                  }), (0, r.jsx)(ma, {
                    asChild: !0,
                    children: (0, r.jsx)(l.Body, {
                      children: s
                    })
                  })]
                }), (0, r.jsxs)(Jt, {
                  className: S()(aa, "hg5jwyd"),
                  children: [n?.items && (0, r.jsx)(_a, {
                    children: n?.items?.map((e, t) => {
                      if (e?.text) return (0, r.jsx)(ra, {
                        block: e,
                        size: "MD"
                      }, t)
                    })
                  }), c?.length && (0, r.jsx)(fa, {
                    children: c?.map((e, t) => (0, r.jsx)(ga, {
                      icon: e?.logo
                    }, `${e?.sys?.id}-${t}`))
                  })]
                })]
              })]
            }), i]
          })
        }),
        ba = ({
          block: e
        }) => {
          const {
            useTrackPageSectionImpression: t
          } = U(), {
            ref: a
          } = t(), {
            blockPosition: s
          } = (0, n.useContext)(c.BlockRendererContext);
          return e ? (0, r.jsxs)(ca, {
            ref: a,
            children: [(0, r.jsx)(la, {
              backgroundImage: e.backgroundImage,
              backgroundVideo: e.backgroundVideo,
              isLooping: !0
            }), (0, r.jsx)(pa, {
              logo: e.logo,
              title: e.game?.title,
              description: e.description,
              gamePageLink: e.game?.wwwPageLink?.url,
              platforms: e.game?.platformsCollection?.items,
              ctas: e.ctasCollection,
              children: e.childModulesCollection?.items.map(e => (0, r.jsx)(c.BlockRenderer, {
                block: e,
                blockPosition: s
              }, e.sys.id))
            })]
          }) : null
        },
        ha = "WwwFeaturedGameSection";
      var va = "wd86ka3",
        ka = "var(--wd86ka0)",
        xa = "wd86ka4";
      const wa = {
          wrap: "flex-direction: row;",
          stack: "flex-direction: column;"
        },
        ya = {
          left: "\n        align-items: flex-start;\n        justify-content: flex-start;\n    ",
          center: "\n        align-items: center;\n        justify-content: center;\n    ",
          right: "\n        align-items: flex-end;\n        justify-content: flex-end;\n    "
        },
        ja = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          gap: s,
          ...n
        }, i) {
          const o = t ? g.DX : "div",
            c = (0, v.v6)({
              "data-testid": a,
              className: "wd86ka2 _1betujy5",
              style: (0, x.DI)({
                [ka]: s
              })
            }, n);
          return (0, r.jsx)(o, {
            ref: i,
            ...c,
            children: e
          })
        }),
        Ca = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          breakpoints: s,
          ...i
        }, o) {
          const c = `grid-${(0,n.useId)()}`,
            l = t ? g.DX : "div",
            d = (0, n.useMemo)(() => s?.map(({
              mediaQuery: e,
              columns: t,
              behavior: a = "wrap",
              alignment: r = "left"
            }) => `\n            @media ${e} {\n                #${CSS.escape(c)}.${va} {\n                    ${wa[a]}\n                    ${ya[r]}\n                }\n                ${t.map((e,a)=>`\n                    #${CSS.escape(c)} .${xa}:nth-of-type(${t.length}n + ${a+1}) {\n                            --grid-col-span: ${e};\n                        }\n                    `).join(" ")}\n            }\n        `), [s]),
            u = (0, v.v6)({
              "data-testid": a,
              className: va
            }, i);
          return (0, r.jsxs)(l, {
            id: c,
            ref: o,
            ...u,
            children: [(0, r.jsx)("style", {
              children: d
            }), e]
          })
        }),
        Na = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...s
        }, n) {
          const i = t ? g.DX : "div",
            o = (0, v.v6)({
              "data-testid": a,
              className: xa
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        Sa = ({
          contentCollection: e,
          layout: t
        }) => {
          const a = (0, n.useMemo)(() => t?.breakpointsCollection?.items.map(e => ({
            mediaQuery: e.mediaQuery || "all",
            behavior: e.behavior || "wrap",
            alignment: e.alignment || "left",
            columns: e.columns
          })), [t]);
          return (0, r.jsx)(Ca, {
            breakpoints: a,
            children: e?.items.map((t, a) => (t.sys || console.log(t.__typename), (0, r.jsx)(Na, {
              children: (0, r.jsx)(c.BlockRenderer, {
                block: t,
                blockPosition: {
                  blockIndex: a,
                  totalBlocks: e.items.length
                }
              })
            }, t.sys?.id || a)))
          })
        },
        Ra = "WwwGridWrapper",
        Ia = (0, o.defineMessages)({
          hp_hero_carousel_scroll_down_label: {
            id: "hp_hero_carousel_scroll_down_label",
            description: "Hero carousel scroll down label",
            defaultMessage: "Scroll Down"
          }
        }),
        Ea = e => {
          if (!e) return "MD";
          const t = e.length;
          return t <= 20 ? "XL" : t > 20 && t <= 40 ? "LG" : t > 40 && t <= 60 ? "MD" : "SM"
        };
      var za = "var(--_1ccl7bj2)",
        Ta = "var(--_1ccl7bj3)",
        Aa = "var(--_1ccl7bj1)",
        Ma = (0, y.c)({
          defaultClassName: "_1ccl7bje",
          variantClassNames: {
            invisible: {
              true: "_1ccl7bjf"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Da = ((0, y.c)({
          defaultClassName: "_1ccl7bjo",
          variantClassNames: {
            appearance: {
              danger: "_1ccl7bjp",
              information: "_1ccl7bjq",
              primary: "_1ccl7bjr",
              secondary: "_1ccl7bjs",
              tertiary: "_1ccl7bjt",
              ghost: "_1ccl7bju",
              accent: "_1ccl7bjv"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }), (0, y.c)({
          defaultClassName: "_1ccl7bj6",
          variantClassNames: {
            size: {
              SM: "_1ccl7bj7",
              MD: "_1ccl7bj8",
              LG: "_1ccl7bj9",
              XL: "_1ccl7bja"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }));
      const Pa = (0, n.forwardRef)(function({
          children: e,
          bottomGradientColor: t,
          horizontalBackgroundPosition: a,
          verticalBackgroundPosition: s,
          asChild: n,
          testId: i,
          size: o = "MD",
          ...c
        }, l) {
          const d = n ? g.DX : "div",
            u = (0, v.v6)({
              "data-testid": i,
              className: Da({
                size: o
              }),
              style: (0, x.DI)({
                [Aa]: t,
                [za]: a,
                [Ta]: s
              })
            }, c);
          return (0, r.jsx)(d, {
            ref: l,
            ...u,
            children: (0, r.jsx)(g.xV, {
              children: e
            })
          })
        }),
        La = (0, n.forwardRef)(function({
          ...e
        }, t) {
          const a = (0, v.v6)({
            className: "_1ccl7bjc"
          }, e);
          return (0, r.jsx)(pe, {
            ref: t,
            ...a,
            loading: "eager"
          })
        }),
        Ba = (0, n.forwardRef)(function({
          invisible: e,
          children: t,
          asChild: a,
          testId: s,
          ...n
        }, i) {
          const o = a ? g.DX : "div",
            c = (0, v.v6)({
              "data-testid": s,
              className: Ma({
                invisible: e
              })
            }, n);
          return (0, r.jsx)("div", {
            className: "_1ccl7bjd _1betujy6 _1betujy5",
            children: (0, r.jsx)(o, {
              ref: i,
              ...c,
              children: t
            })
          })
        }),
        Ga = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...s
        }, n) {
          const i = t ? g.DX : "div",
            o = (0, v.v6)({
              "data-testid": a,
              className: "_1ccl7bjg"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        Va = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...s
        }, n) {
          const i = t ? g.DX : l.Label,
            o = (0, v.v6)({
              "data-testid": a,
              className: "_1ccl7bjh foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd6"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        Oa = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...s
        }, n) {
          const i = t ? g.DX : "h2",
            o = (0, v.v6)({
              "data-testid": a,
              className: "_1ccl7bji foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd5"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        qa = (0, n.forwardRef)(function({
          asChild: e,
          src: t,
          ...a
        }, s) {
          const n = e ? g.DX : "div",
            i = (0, v.v6)({
              className: "_1ccl7bjj"
            }, a);
          return (0, r.jsx)(n, {
            ref: s,
            ...i,
            children: (0, r.jsx)(pe, {
              src: t,
              alt: t?.altText ?? "",
              context: "mobile",
              className: "_1ccl7bjk",
              style: t?.source?.width && t?.source?.height ? {
                aspectRatio: `${t.source.width}/${t.source.height}`
              } : {},
              loading: "eager"
            })
          })
        }),
        Fa = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...s
        }, n) {
          const i = t ? g.DX : "div",
            o = (0, v.v6)({
              "data-testid": a,
              className: "_1ccl7bjn"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        });
      var Ua = a(90058),
        Xa = a(17982);
      const $a = () => ({
          desktop: {
            enter: sa.os.timeline({
              paused: !0
            }),
            exit: sa.os.timeline({
              paused: !0
            })
          },
          mobile: {
            enter: sa.os.timeline({
              paused: !0
            }),
            exit: sa.os.timeline({
              paused: !0
            })
          }
        }),
        Ha = (e, t) => e?.[t ? "mobile" : "desktop"],
        Wa = e => {
          const t = {
              desktop: {
                enter: sa.os.timeline({
                  paused: !0
                }),
                exit: sa.os.timeline({
                  paused: !0
                })
              },
              mobile: {
                enter: sa.os.timeline({
                  paused: !0
                }),
                exit: sa.os.timeline({
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
          }, 0), t) : $a()
        },
        Ka = (e, t, {
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
                  c = 0,
                  l = 0;
                for (let e = 0; e < n; e++) {
                  const d = s[e],
                    u = s[(e + 1) % n];
                  if (r) {
                    const t = u > d ? u - d : 1 + u - d,
                      a = (i - d + 1) % 1;
                    if (a >= 0 && a <= t) {
                      o = e, c = (e + 1) % n, l = a / t;
                      break
                    }
                    l = Math.min(a / t, 1)
                  } else {
                    const t = s[e + 1] ?? 1,
                      a = t - d;
                    if (i >= d && i <= t) {
                      o = e, c = e + 1, l = (i - d) / a;
                      break
                    }
                    l = Math.max(0, Math.min((i - d) / a, 1))
                  }
                  const m = t[e];
                  if (m) {
                    const e = Ha(m, a);
                    e?.enter.progress(l).pause(), e?.exit.progress(0).pause()
                  }
                }
                const d = t[o];
                if (d) {
                  const e = Ha(d, a);
                  e?.enter.progress(1 - l).pause(), e?.exit.progress(l).pause()
                }
                if (!a) {
                  const e = t[c];
                  if (e) {
                    const t = Ha(e, !1);
                    t?.enter.progress(l).pause(), t?.exit.progress(0).pause()
                  }
                }
                t.forEach((e, t) => {
                  if (t !== o && t !== c) {
                    const t = Ha(e, a);
                    t?.enter.progress(0).pause(), t?.exit.progress(0).pause()
                  }
                })
              };
            return e.on("scroll", i), e.on("resize", i), () => {
              e.off("scroll", i), e.off("resize", i)
            }
          }, [e, t, a, r])
        },
        Ya = (0, o.defineMessages)({
          hero_carousel_play_button: {
            id: "hero_carousel_play_button",
            description: "Aria label for the icon button to play the hero carousel",
            defaultMessage: "Play"
          },
          hero_carousel_pause_button: {
            id: "hero_carousel_pause_button",
            description: "Aria label for the icon button to pause the hero carousel",
            defaultMessage: "Pause"
          }
        });
      var Qa = a(444),
        Za = (0, y.c)({
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
        Ja = (0, y.c)({
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
        er = (0, y.c)({
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
      const tr = ({
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
            className: S()("wai797c", Ja({
              appearance: e,
              type: t
            })),
            children: (0, r.jsx)("span", {
              ref: i,
              className: er({
                appearance: e,
                type: t
              })
            })
          })
        }),
        ar = ({
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
        rr = (0, n.forwardRef)(function({
          type: e,
          appearance: t = "adaptive",
          pages: a,
          current: s,
          size: n,
          setDotRef: i,
          setFillRef: o,
          onBulletClick: c,
          onBulletKeyDown: l,
          testId: d,
          asChild: u,
          ...m
        }, _) {
          const f = u ? g.DX : "div",
            p = (0, v.v6)({
              "data-testid": d,
              className: Za({
                appearance: t,
                size: n
              })
            }, m),
            b = 100 * s / a;
          return (0, r.jsxs)(f, {
            ref: _,
            ...p,
            children: [("pagination" === e || "line" === e) && (0, Qa.A)(a)?.map(a => (0, r.jsx)(tr, {
              type: e,
              appearance: t,
              onClick: () => c(a),
              onBulletKeyDown: l(a),
              dotRef: e => i(e, a),
              fillRef: e => o(e, a)
            }, a)), "progress" === e && (0, r.jsx)(ar, {
              progress: b
            })]
          })
        });
      var sr = (0, y.c)({
        defaultClassName: "g7xdpg2",
        variantClassNames: {
          variant: {
            default: "g7xdpg3",
            full_height: "g7xdpg4"
          }
        },
        defaultVariants: {
          variant: "default"
        },
        compoundVariants: []
      });
      const nr = (0, n.createContext)({
          variant: "default",
          slides: null,
          defaultSlide: 0,
          autoPlay: !1,
          playOnInit: !1,
          autoScrollEnabled: !1,
          loop: !1
        }),
        ir = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          slides: a,
          variant: s,
          ...i
        }, o) {
          const c = (0, n.useRef)(null),
            l = (0, n.useRef)(null),
            {
              defaultSlide: d,
              playOnInit: u,
              autoPlay: m,
              autoScrollEnabled: _,
              loop: f
            } = (0, n.useContext)(nr),
            [p, b] = (0, n.useState)({});
          (({
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
            }, []), (0, na.L)(() => {
              const t = e.current;
              if (!t) return;
              const a = t.parentElement;
              sa.os.to(t, {
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
              }), sa.os.to(t, {
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
            }), (0, na.L)(() => {
              const e = t.current;
              if (!e) return;
              const a = e.parentElement;
              sa.os.set(e, {
                opacity: 1
              }), sa.os.to(e, {
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
            backgroundRef: c,
            contentRef: l
          }), (0, n.useEffect)(() => {
            const e = e => {
              e.origin === window.origin && "dynamicSlideColors" === e.data.source && b(e.data.values)
            };
            return window.addEventListener("message", e), () => {
              window.removeEventListener("message", e)
            }
          }, []);
          const h = t ? g.DX : Ae,
            k = (0, v.v6)({
              className: "g7xdpg0"
            }, i);
          return (0, r.jsx)(nr.Provider, {
            value: {
              slides: a,
              defaultSlide: d,
              autoPlay: m,
              playOnInit: u,
              autoScrollEnabled: _,
              loop: f,
              variant: s
            },
            children: (0, r.jsxs)(h, {
              ref: o,
              ...k,
              children: [(0, r.jsx)("div", {
                ref: c,
                className: "g7xdpg5",
                "aria-hidden": !0,
                style: p
              }), (0, r.jsx)("div", {
                ref: l,
                children: e
              })]
            })
          })
        }),
        or = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          forcePause: a,
          ...s
        }, n) {
          const i = t ? g.DX : Le;
          return (0, r.jsx)(i, {
            ref: n,
            appearance: "ghost",
            className: "g7xdpg1",
            "data-disabled": String(a),
            ...s,
            children: e
          })
        }),
        cr = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          ...a
        }, s) {
          const {
            variant: i
          } = (0, n.useContext)(nr), o = (0, v.v6)({
            className: sr({
              variant: i
            })
          }, a), c = t ? g.DX : Be;
          return (0, r.jsx)(c, {
            ref: s,
            ...o,
            children: e
          })
        }),
        lr = (0, n.forwardRef)(function({
          embla: e,
          currentSlide: t,
          totalSlides: a,
          label: s,
          onBulletClick: i,
          onBulletKeyDown: c,
          setDotRef: d,
          setFillRef: u,
          asChild: m,
          forcePause: _,
          ...f
        }, p) {
          const [b, h] = (0, n.useState)(!1), k = !b && !_, {
            formatMessage: x
          } = (0, o.useIntl)(), {
            trackEvent: y
          } = U(), j = (0, ne.Ub)(w.f.mobile), C = m ? g.DX : "div", N = (0, v.v6)({
            className: "g7xdpgd"
          }, f), S = (0, n.useCallback)(() => {
            h(e => (y({
              event: "cta_other",
              text: e ? "toggle play" : "toggle pause"
            }), !e))
          }, []);
          return (0, n.useEffect)(() => {
            const t = e?.plugins?.()?.autoplay;
            t && (k ? t.play() : t.stop())
          }, [e, k]), (0, n.useEffect)(() => {
            if (!e) return;
            const t = () => {
                _ || h(!1)
              },
              a = () => {};
            return e.on("select", t), e.on("autoplay:play", t), e.on("autoplay:stop", a), () => {
              e.off("select", t), e.off("autoplay:play", t), e.off("autoplay:stop", a)
            }
          }, [e, _]), (0, r.jsx)(C, {
            ref: p,
            ...N,
            children: (0, r.jsxs)("div", {
              className: "g7xdpgg",
              "data-disabled": String(_),
              children: [a > 1 && (0, r.jsxs)("div", {
                className: "g7xdpge",
                children: [(0, r.jsx)(l.IconButton, {
                  className: "g7xdpg6",
                  icon: k ? "Pause" : "Play",
                  label: x(k ? Ya.hero_carousel_pause_button : Ya.hero_carousel_play_button),
                  size: "SM",
                  appearance: "ghost",
                  onPress: S
                }), (0, r.jsx)(rr, {
                  type: j ? "line" : "pagination",
                  size: "large",
                  appearance: "ghost",
                  current: t,
                  pages: a,
                  onBulletClick: i,
                  onBulletKeyDown: c,
                  setDotRef: d,
                  setFillRef: u
                })]
              }), !j && s && (0, r.jsxs)("div", {
                className: "g7xdpgh",
                children: [(0, r.jsx)(l.Label, {
                  size: "XS",
                  appearance: "bold",
                  className: "g7xdpgi",
                  children: s
                }), (0, r.jsx)(Ua.ArrowDown, {
                  size: "MD",
                  label: s
                })]
              })]
            })
          })
        }),
        dr = () => v.X3 ? null : document.body,
        ur = (0, n.forwardRef)(function({
          slides: e,
          size: t,
          delay: a = 6e3,
          defaultSlide: s = 0,
          loop: c = !0
        }, l) {
          const {
            ref: d,
            inView: u
          } = (0, i.useScrollVisibility)(1 / 3), m = !u, {
            formatMessage: _
          } = (0, o.useIntl)(), {
            trackEvent: f
          } = U(), g = (0, n.useRef)(e.map(() => ({
            background: (0, n.createRef)(),
            content: (0, n.createRef)(),
            logo: (0, n.createRef)(),
            heading: (0, n.createRef)(),
            ctas: (0, n.createRef)(),
            fade: (0, n.createRef)()
          }))), p = (0, ne.Ub)("(max-width: 500px) or (max-aspect-ratio: 0.9)"), {
            embla: b,
            viewportRef: h,
            currentSlideRef: v,
            isPausedRef: k,
            onBulletClick: x,
            onBulletKeyDown: y,
            setDotRef: j,
            setFillRef: C
          } = (({
            defaultSlide: e = 0,
            delay: t = 6e3,
            duration: a = 50,
            loop: r = !1,
            slideRefs: s,
            slides: i,
            totalSlides: o
          }) => {
            const c = .5,
              l = "power2.inOut",
              d = (0, n.useRef)(e),
              {
                trackEvent: u
              } = U(),
              [m, _] = (0, n.useState)(!1),
              f = (0, n.useRef)(!1),
              g = (0, n.useRef)(!1),
              p = (0, n.useRef)([]),
              b = (0, n.useRef)([]),
              h = (0, n.useRef)(null),
              v = (0, n.useRef)(null),
              k = (0, n.useRef)(null),
              x = (0, ne.Ub)(w.f.mobile),
              y = (0, n.useRef)(null),
              j = (0, n.useRef)([]);
            k.current || (k.current = (0, Xa.A)({
              delay: 2 * t,
              stopOnInteraction: !1
            }));
            const [C, N] = (0, Ce.A)({
              axis: "x",
              align: "start",
              startIndex: e,
              containScroll: "trimSnaps",
              watchDrag: m,
              active: !0,
              duration: a,
              loop: r
            }, [k.current, (0, je.J)()]);
            Ka(N, j.current, {
              isMobile: x,
              loop: r
            });
            const S = (0, n.useCallback)((e, t) => {
                p.current[t] = e
              }, []),
              R = (0, n.useCallback)((e, t) => {
                b.current[t] = e
              }, []),
              I = (0, n.useCallback)(() => {
                v.current?.kill(), v.current = null, f.current = !0
              }, []),
              E = (0, n.useCallback)(() => {
                v.current?.pause(), f.current = !0
              }, []),
              z = (0, n.useCallback)(e => {
                N && N.selectedScrollSnap() !== e && (d.current !== e && (d.current = e), N.scrollTo(e), k.current?.isPlaying() || (k.current?.stop(), E()), u({
                  event: "carousel_thumbnail_click",
                  position: e + 1,
                  position_max: N.slideNodes().length
                }))
              }, [N, k, d, E]);
            (0, n.useEffect)(() => {
              const e = () => {
                g.current || (g.current = !0, E()), y.current && clearTimeout(y.current), y.current = setTimeout(() => {
                  g.current = !1, v.current?.resume(), f.current = !1
                }, 250)
              };
              return window.addEventListener("resize", e), () => {
                window.removeEventListener("resize", e), y.current && clearTimeout(y.current)
              }
            }, [g.current, y.current]), (0, n.useEffect)(() => {
              if (!N) return;
              const e = N.slideNodes(),
                a = [];
              for (let t = 0; t < e.length; t++) {
                const e = s.current[t],
                  r = e ? Wa(e) : $a();
                a.push(r)
              }
              j.current = a;
              const r = () => {
                  k.current?.reset();
                  const e = N?.selectedScrollSnap();
                  d.current = e, (e => {
                    b?.current?.length && b.current.forEach((t, a) => {
                      t && t.parentElement && "BUTTON" === t.parentElement.tagName && (t.parentElement.disabled = a === e)
                    })
                  })(e), g.current || I(), a.forEach(e => {
                    const t = Ha(e, x);
                    t?.enter?.progress(1), t?.exit?.progress(0)
                  }), b.current.forEach((t, a) => {
                    t && (a === e || sa.os.to(t, {
                      width: 10,
                      duration: c,
                      ease: l
                    }))
                  }), p.current.forEach((t, a) => {
                    if (!t) return;
                    const r = a === e;
                    sa.os.to(t, {
                      opacity: r ? 1 : 0,
                      duration: c,
                      ease: l
                    })
                  }), g.current ? v.current?.pause() : (e => {
                    const a = p.current[e],
                      r = b.current[e];
                    a && r && N && (p.current.forEach(e => {
                      e && sa.os.to(e, {
                        width: "0%",
                        duration: c,
                        ease: l
                      })
                    }), f.current = !1, sa.os.to(r, {
                      width: 80,
                      duration: c,
                      ease: l
                    }), sa.os.fromTo(a, {
                      opacity: 0
                    }, {
                      opacity: 1,
                      duration: c,
                      ease: l
                    }), v.current = sa.os.to(a, {
                      width: "100%",
                      duration: t / 1e3,
                      ease: "none",
                      onComplete: () => {
                        if (!N) return;
                        const e = N.selectedScrollSnap() + 1,
                          t = e >= N.scrollSnapList().length ? 0 : e;
                        N.scrollTo(t)
                      }
                    }))
                  })(e), N.slideNodes().forEach((t, a) => {
                    t.querySelectorAll("a, button, input, textarea, select, [tabindex]").forEach(t => {
                      a === e ? t.removeAttribute("tabindex") : t.setAttribute("tabindex", "-1")
                    })
                  }), window.postMessage({
                    source: "navColorTheme",
                    mode: i[e].navColor ?? "dark"
                  })
                },
                n = s.current.map(e => e.background?.current).filter(Boolean);
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
              }), N.on("select", r), N.on("resize", r), () => {
                o = !0, N.off("select", r), N.off("resize", r), a.forEach(e => {
                  e?.mobile.enter?.kill(), e?.mobile.exit?.kill(), e?.desktop.enter?.kill(), e?.desktop.exit?.kill()
                })
              }
            }, [N, k, s, I, x]), (0, n.useEffect)(() => {
              if (!N) return;
              let e = 0;
              const t = () => {
                  e = N.selectedScrollSnap()
                },
                a = () => {
                  const t = N.selectedScrollSnap();
                  e !== t && u({
                    event: "carousel_swipe"
                  })
                };
              return N.on("pointerDown", t), N.on("pointerUp", a), () => {
                N.off("pointerDown", t), N.off("pointerUp", a)
              }
            }, [N]), (0, n.useEffect)(() => {
              _(o > 1)
            }, [o]), (0, n.useEffect)(() => {
              if (!N) return;
              const e = () => {
                v.current?.resume(), f.current = !1
              };
              return N.on("autoplay:play", e), N.on("autoplay:stop", E), () => {
                N.off("autoplay:play", e), N.off("autoplay:stop", E)
              }
            }, [N, E]);
            const T = (0, n.useCallback)(e => t => {
              "Enter" !== t.key && " " !== t.key || (t.preventDefault(), N?.scrollTo(e))
            }, [N]);
            return (0, n.useEffect)(() => {
              const e = e => {
                N && "input" !== document.activeElement?.tagName.toLowerCase() && ("ArrowRight" === e.key && N.scrollNext(), "ArrowLeft" === e.key && N.scrollPrev())
              };
              return N?.rootNode().addEventListener("keydown", e), () => N?.rootNode()?.removeEventListener("keydown", e)
            }, [N]), (0, n.useEffect)(() => {
              const e = s.current[d.current].fade.current;
              if (!N || !e || "input" === document.activeElement?.tagName.toLowerCase()) return;
              const t = e => {
                const t = e.shiftKey,
                  a = Array.from((e => {
                    const t = s.current[e],
                      a = [...t.fade.current?.querySelectorAll("a[href], button:not(disabled), input:not(disabled), select, textarea, [tabindex]:not([tabindex='-1'])") || [], h?.current];
                    return t ? a : []
                  })(d.current));
                if (0 === a.length) return;
                const r = a[0],
                  n = a[a.length - 1];
                if (!t && document.activeElement === n) {
                  if (1 === N?.slideNodes().length) return;
                  e.preventDefault();
                  const t = b.current[d.current + 1];
                  t && t.focus()
                }
                if (t && document.activeElement === r) {
                  if (1 === N?.slideNodes().length || 0 === d.current) return;
                  e.preventDefault();
                  const t = b.current[d.current];
                  t && t.focus()
                }
              };
              return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
            }, [N]), {
              currentSlideRef: d,
              delay: t,
              embla: N,
              isPausedRef: f,
              viewportRef: C,
              setDotRef: R,
              setFillRef: S,
              playPauseRef: h,
              onBulletClick: z,
              onBulletKeyDown: T
            }
          })({
            defaultSlide: s,
            delay: a,
            loop: c,
            slideRefs: g,
            slides: e,
            totalSlides: e.length
          }), {
            isUltraWideLandscape: N
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
          })();
          if ((({
              embla: e,
              slides: t,
              target: a = dr(),
              enabled: r = !0,
              defaultSlideColor: s = "#000"
            }) => {
              const i = (0, n.useRef)([]),
                o = (0, n.useRef)([]);
              (0, n.useEffect)(() => {
                if (!(e && r && t?.length && a)) return;
                const n = () => {
                    i.current = e.scrollSnapList(), o.current = t.map(e => [e.topGradientColor || s, e.bottomGradientColor || s]), l()
                  },
                  c = (e, t, a, r, s) => {
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
                    })
                  },
                  l = () => {
                    const t = Math.min(Math.max(e?.scrollProgress() ?? 0, 0), 1),
                      a = i.current,
                      r = Math.max(a.findIndex(e => e > t), 0),
                      n = r - 1 >= 0 ? r - 1 : a.length - 1,
                      [l, d] = o.current[r] ?? s,
                      [u, m] = o.current[n] ?? s,
                      _ = Math.max(a[n] ?? 0, 0),
                      f = a[1] ?? 1,
                      g = Math.round((t - _) / f * 100);
                    c(u, l, m, d, g)
                  };
                return 1 === t?.length ? (() => {
                  const [e, t] = o.current[0] ?? [s, s];
                  c(e, e, t, t, 0)
                })() : (l(), e.on("scroll", l), e.on("reInit", l), e.on("slidesChanged", n), n()), () => {
                  e?.off("scroll", l), e?.off("reInit", l), e?.off("slidesChanged", n)
                }
              }, [r, e, t.length, s])
            })({
              embla: b,
              slides: e
            }), (0, n.useEffect)(() => {
              const t = t => {
                const a = t.selectedScrollSnap();
                u && f({
                  event: "banner_item_impression",
                  card_id: e[a].sys.id,
                  card_name: e[a].title,
                  position: a + 1,
                  position_max: e.length
                }, e[a])
              };
              return b && (t(b), b?.on("select", t)), () => {
                b?.off("select", t)
              }
            }, [b]), !e?.length) return null;
          const S = () => {
            k.current || b?.plugins().autoplay.stop()
          };
          return (0, r.jsxs)(ir, {
            ref: l,
            slides: e,
            variant: t,
            tabIndex: -1,
            onCarouselDrag: () => {},
            children: [(0, r.jsx)("div", {
              ref: d,
              children: (0, r.jsx)(or, {
                ref: h,
                forcePause: m,
                children: e.map((e, t) => (0, r.jsx)(cr, {
                  ref: g.current[t].fade,
                  variant: "full",
                  children: (0, r.jsxs)(Pa, {
                    bottomGradientColor: e.bottomGradientColor,
                    size: Ea(e.title),
                    children: [(0, r.jsx)(La, {
                      ref: g.current[t].background,
                      src: e.background,
                      context: p ? "2:3" : N ? "32:9" : "21:9"
                    }), (0, r.jsxs)(Ba, {
                      ref: g.current[t].content,
                      invisible: 0 === t,
                      children: [(0, r.jsx)(qa, {
                        ref: g.current[t].logo,
                        src: e.logo
                      }), (0, r.jsxs)(Ga, {
                        ref: g.current[t].heading,
                        children: [e.eyebrow && (0, r.jsx)(Va, {
                          size: "LG",
                          appearance: "bold",
                          children: e.eyebrow
                        }), e.title && (0, r.jsx)(Oa, {
                          children: e.title
                        })]
                      }), e.ctasCollection?.items && (0, r.jsx)(Fa, {
                        ref: g.current[t].ctas,
                        children: e.ctasCollection.items.map(e => (0, r.jsx)(ra, {
                          block: e,
                          size: "MD",
                          onClick: S
                        }, e.sys.id))
                      })]
                    })]
                  })
                }, t))
              })
            }), e.length > 1 && (0, r.jsx)(lr, {
              totalSlides: e.length,
              embla: b,
              currentSlide: v.current,
              setDotRef: j,
              setFillRef: C,
              onBulletClick: x,
              onBulletKeyDown: y,
              label: "full_height" === t ? _(Ia.hp_hero_carousel_scroll_down_label) : void 0,
              forcePause: m
            })]
          })
        }),
        mr = ({
          block: e
        }) => {
          const {
            useTrackPageSectionImpression: t
          } = U(), {
            ref: a
          } = t();
          return e ? (0, r.jsx)(ur, {
            ref: a,
            size: e?.size,
            slides: e?.slidesCollection?.items
          }) : null
        },
        _r = "WwwFeaturedContentCarousel";
      var fr = (0, y.c)({
        defaultClassName: "_1wn664h3",
        variantClassNames: {
          textAlignment: {
            left: "_1wn664h4",
            center: "_1wn664h5",
            right: "_1wn664h6"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      const gr = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...s
        }, n) {
          const i = a ? g.DX : "div",
            o = (0, v.v6)({
              "data-testid": t,
              className: "_1wn664h0"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        pr = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...s
        }, n) {
          const i = a ? g.DX : "div",
            o = (0, v.v6)({
              "data-testid": t,
              className: "_1wn664h1"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        br = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          textAlignment: s = "left",
          ...n
        }, i) {
          const o = a ? g.DX : "div",
            c = (0, v.v6)({
              "data-testid": t,
              className: fr({
                textAlignment: s
              })
            }, n);
          return (0, r.jsx)(o, {
            ref: i,
            ...c,
            children: e
          })
        }),
        hr = "WwwImageBlock";
      var vr = (0, y.c)({
        defaultClassName: "_120g2g71",
        variantClassNames: {
          appearance: {
            accent: "_120g2g72",
            primary: "_120g2g73",
            secondary: "_120g2g74",
            tertiary: "_120g2g75",
            ghost: "_120g2g76",
            information: "_120g2g77",
            danger: "_120g2g78"
          }
        },
        defaultVariants: {
          appearance: "primary"
        },
        compoundVariants: []
      });
      const kr = ({
          block: e
        }) => {
          const {
            totalItems: t,
            itemIndex: a
          } = (0, n.useContext)(Ve), {
            trackEvent: s
          } = U(), i = !!e.cta?.link?.url, o = (0, r.jsxs)(Ut, {
            gradientColor: e?.gradientColor,
            interactive: !0,
            children: [(0, r.jsx)(Xt, {
              alt: e?.ariaLabel,
              src: e.backgroundImage,
              context: "2:3"
            }), (0, r.jsx)(Wt, {
              image: e.logo,
              size: e.logoSize
            }), (0, r.jsxs)($t, {
              children: [e.text && (0, r.jsx)(Yt, {
                asChild: !0,
                children: (0, r.jsx)(l.Body, {
                  children: e.text
                })
              }), e.cta && (0, r.jsx)(Qt, {
                appearance: e.cta.appearance,
                override_backgroundColor: e.cta.backgroundColor,
                size: "MD",
                asChild: !0,
                children: (0, r.jsx)("span", {
                  className: vr({
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
            className: "_120g2g70",
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
        xr = "WwwImageCard",
        wr = (0, o.defineMessages)({
          image_carousel_screen_reader_announcer_label: {
            id: "image_carousel_screen_reader_announcer_label",
            description: "Image carousel screen reader announcer label",
            defaultMessage: "Now showing {selectedTab} of {total}"
          }
        });
      var yr = "var(--iast650)",
        jr = (0, y.c)({
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
        Cr = (0, y.c)({
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
      const Nr = (0, n.createContext)(null),
        Sr = () => {
          const e = (0, n.useContext)(Nr);
          if (!e) throw new Error("useImageCarousel must be used within ImageCarouselProvider");
          return e
        },
        Rr = (0, n.forwardRef)(function({
          items: e,
          children: t,
          asChild: a,
          ...s
        }, i) {
          const [o, c] = (0, n.useState)(0), [l, d] = (0, n.useState)(0), u = (0, n.useMemo)(() => ({
            items: e,
            activeIndex: o,
            setActiveIndex: c,
            focusedIndex: l,
            setFocusedIndex: d
          }), [e, o, l]), m = (0, v.v6)({
            className: "iast651"
          }, s), _ = a ? g.DX : "div";
          return (0, r.jsx)(Nr.Provider, {
            value: u,
            children: (0, r.jsx)(_, {
              ref: i,
              ...m,
              children: t
            })
          })
        }),
        Ir = (0, n.createContext)(null),
        Er = (0, n.forwardRef)(function({
          children: e,
          ...t
        }, a) {
          const {
            activeIndex: s,
            setActiveIndex: i,
            focusedIndex: o,
            setFocusedIndex: c
          } = Sr(), {
            containerRef: l,
            buttonRefs: d,
            highlight: u,
            overflow: m
          } = ((e, t = []) => {
            const a = (0, n.useRef)(null),
              r = (0, n.useRef)([]),
              [s, i] = (0, n.useState)({
                left: 0,
                width: 0
              }),
              [o, c] = (0, n.useState)({
                left: !1,
                right: !1
              }),
              l = (0, n.useCallback)(() => {
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
              const e = () => requestAnimationFrame(l),
                t = "function" == typeof document.fonts?.ready?.then ? document.fonts.ready : void 0;
              t ? t.then(e) : e()
            }, [e, l, ...t]), (0, n.useEffect)(() => {
              const t = r.current[e];
              if (!t) return;
              const a = new ResizeObserver(() => l());
              return a.observe(t), () => a.disconnect()
            }, [e, l]), (0, n.useEffect)(() => {
              const e = a.current;
              if (!e) return;
              const t = () => {
                c({
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
              remeasure: l
            }
          })(s, [e]), {
            onKeyDown: _
          } = (({
            count: e,
            focusedIndex: t,
            setFocusedIndex: a,
            setActiveIndex: r,
            buttonRefs: s
          }) => ({
            onKeyDown: (0, n.useCallback)(n => {
              if (e <= 0) return;
              let i = t;
              switch (n.key) {
                case "ArrowRight":
                  n.preventDefault(), i = (t + 1) % e, a(i), s.current[i]?.focus(), s.current[i]?.scrollIntoView({
                    behavior: "smooth",
                    inline: "center",
                    block: "nearest"
                  });
                  break;
                case "ArrowLeft":
                  n.preventDefault(), i = (t - 1 + e) % e, a(i), s.current[i]?.focus(), s.current[i]?.scrollIntoView({
                    behavior: "smooth",
                    inline: "center",
                    block: "nearest"
                  });
                  break;
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
            setFocusedIndex: c,
            setActiveIndex: i,
            buttonRefs: d
          }), f = (e, t) => {
            d.current[e] = t
          }, g = (e, t) => {
            i(e), c(e);
            const a = t ?? d.current[e];
            a && (a.focus(), "function" == typeof a.scrollIntoView && a.scrollIntoView({
              behavior: "smooth",
              inline: "center",
              block: "nearest"
            }))
          }, p = (0, n.useMemo)(() => ({
            setButtonRef: f,
            onTabKeyDown: _,
            activateIndex: g
          }), [_]), b = (0, ne.UP)(l, a), h = (0, v.v6)({
            className: Cr({
              overflowLeft: m.left,
              overflowRight: m.right
            }),
            role: "tablist"
          }, t);
          return (0, r.jsx)("div", {
            className: "iast658",
            children: (0, r.jsxs)("div", {
              ref: b,
              ...h,
              onKeyDown: _,
              children: [(0, r.jsx)("div", {
                className: "iast65e",
                style: {
                  transform: `translateX(calc(${u.left}px - ${x.LU.global.spacing.gap[50]}))`,
                  width: u.width
                }
              }), (0, r.jsx)(Ir.Provider, {
                value: p,
                children: e
              })]
            })
          })
        }),
        zr = (0, n.forwardRef)(function({
          children: e,
          index: t,
          onClick: a,
          onKeyDown: s,
          ...i
        }, o) {
          const {
            activeIndex: c,
            focusedIndex: l
          } = Sr(), {
            setButtonRef: d,
            onTabKeyDown: u,
            activateIndex: m
          } = (() => {
            const e = (0, n.useContext)(Ir);
            if (!e) throw new Error("ImageCarousel.Tab must be used inside ImageCarousel.Tabs");
            return e
          })(), _ = c === t, f = l === t, g = (0, ne.UP)(e => d(t, e), o), p = (0, v.v6)({
            className: "iast65d foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdh"
          }, i);
          return (0, r.jsx)("button", {
            ref: g,
            ...p,
            role: "tab",
            type: "button",
            tabIndex: f ? 0 : -1,
            "aria-selected": _,
            "data-selected": _,
            onClick: e => {
              a?.(e), m(t, e.currentTarget)
            },
            onKeyDown: e => {
              s?.(e), u(e)
            },
            children: e
          })
        }),
        Tr = (0, n.memo)(zr, (e, t) => e.children === t.children && e.index === t.index && e.appearance === t.appearance),
        Ar = (0, n.forwardRef)(function({
          children: e,
          mobileAspectRatio: t,
          desktopAspectRatio: a,
          ...s
        }, n) {
          const i = (0, ne.Ub)(w.f.mobile),
            o = (0, v.v6)({
              className: "iast652",
              style: (0, x.DI)({
                [yr]: i ? t : a
              })
            }, s);
          return (0, r.jsx)("div", {
            ref: n,
            ...o,
            children: e
          })
        }),
        Mr = (0, n.forwardRef)(function({
          index: e,
          children: t,
          ...a
        }, s) {
          const {
            activeIndex: n
          } = Sr(), i = n === e, o = (0, v.v6)({
            className: jr({
              isActive: i
            }),
            role: "tabpanel",
            hidden: !i,
            "aria-hidden": !i
          }, a);
          return (0, r.jsx)("div", {
            ref: s,
            ...o,
            children: t
          })
        }),
        Dr = (0, n.memo)(Mr),
        Pr = (0, n.forwardRef)(function({
          items: e,
          children: t,
          testId: a,
          ...s
        }, n) {
          const {
            formatMessage: i
          } = (0, o.useIntl)(), c = (0, v.v6)({
            "data-testid": a
          }, s);
          return (0, r.jsxs)(Rr, {
            items: e,
            children: [(0, r.jsx)("div", {
              ref: n,
              ...c,
              children: t
            }), (0, r.jsx)(Lr, {
              total: e.length,
              announcer: (e, t) => i(wr.image_carousel_screen_reader_announcer_label, {
                selectedTab: `${e+1}`,
                total: `${t}`
              })
            })]
          })
        }),
        Lr = ({
          total: e,
          announcer: t
        }) => {
          const {
            activeIndex: a
          } = Sr();
          return e <= 0 ? null : (0, r.jsx)(g.s6, {
            "aria-live": "polite",
            "aria-atomic": "true",
            children: t(a, e)
          })
        },
        Br = "WwwImageCarousel";
      var Gr = a(49292);
      const Vr = (0, n.createContext)({
          imagesLoaded: !1,
          setImagesLoaded: () => {}
        }),
        Or = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...s
        }, i) {
          const [o, c] = (0, n.useState)(!1), l = a ? g.DX : "section", d = (0, v.v6)({
            "data-testid": t,
            className: "_8a5o1l0"
          }, s);
          return (0, r.jsx)(Vr.Provider, {
            value: {
              imagesLoaded: o,
              setImagesLoaded: c
            },
            children: (0, r.jsx)(l, {
              ref: i,
              ...d,
              children: e
            })
          })
        }),
        qr = (0, n.forwardRef)(function({
          games: e,
          testId: t,
          asChild: a,
          ...s
        }, n) {
          const i = a ? g.DX : "div",
            o = (0, v.v6)({
              "data-testid": t,
              className: "_8a5o1l1"
            }, s),
            c = e ? Math.floor(e.length / 2) : 0,
            l = e?.slice(0, c) || [],
            d = e?.slice(c) || [];
          return (0, r.jsxs)(i, {
            ref: n,
            ...o,
            children: [l.length > 0 && (0, r.jsx)(Ur, {
              rowContent: l,
              delay: 0,
              speed: .2
            }), d.length > 0 && (0, r.jsx)(Ur, {
              rowContent: d,
              delay: 10,
              speed: .16
            })]
          })
        }),
        Fr = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...s
        }, n) {
          const i = a ? g.DX : "div",
            o = (0, v.v6)({
              "data-testid": t,
              className: "_8a5o1l7 _1betujy6 _1betujy5"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        Ur = (0, n.forwardRef)(function({
          rowContent: e,
          delay: t = 0,
          speed: a = .2
        }, s) {
          const [n] = (0, Ce.A)({
            loop: !0,
            dragFree: !0,
            startIndex: 0,
            watchDrag: !1,
            containScroll: "keepSnaps"
          }, [(0, Gr.A)({
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
            className: "_8a5o1l2",
            ref: i,
            children: (0, r.jsx)("div", {
              className: "_8a5o1l3",
              children: e?.map((e, t) => (0, r.jsx)(pe, {
                className: "_8a5o1l6",
                src: e?.boxArt,
                context: "mobile",
                sizes: "(min-width: 1570px) 260px, 20vw",
                loading: "eager"
              }, `${t}-${e?.boxArt?.altText}`))
            })
          })
        }),
        Xr = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...s
        }, n) {
          const i = a ? g.DX : "div",
            o = (0, v.v6)({
              "data-testid": t,
              className: "_8a5o1l8"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        $r = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, s) {
          const n = (0, v.v6)({
            "data-testid": t,
            className: "_8a5o1l9"
          }, a);
          return (0, r.jsx)(l.Heading, {
            ref: s,
            ...n,
            level: 3,
            children: e
          })
        }),
        Hr = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, s) {
          const n = (0, v.v6)({
            "data-testid": t,
            className: "_8a5o1la"
          }, a);
          return (0, r.jsx)(l.Body, {
            ref: s,
            ...n,
            size: "LG",
            appearance: "bold",
            children: e
          })
        }),
        Wr = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          link: a,
          ...s
        }, n) {
          const i = (0, v.v6)({
            "data-testid": t,
            className: "_8a5o1lb"
          }, s);
          return a?.url ? (0, r.jsx)(l.Button, {
            ref: n,
            ...i,
            size: "MD",
            asChild: !0,
            children: (0, r.jsx)(k, {
              href: a?.url,
              rel: "noreferrer",
              target: "_self",
              children: e
            })
          }) : (0, r.jsx)(l.Button, {
            ref: n,
            ...i,
            size: "MD",
            children: e
          })
        }),
        Kr = ({
          block: e
        }) => {
          const {
            trackEvent: t,
            useTrackPageSectionImpression: a
          } = U(), {
            ref: s
          } = a();
          if (!e) return null;
          const {
            cta: n,
            description: i,
            title: o
          } = e, c = e?.marqueeingElementsCollection?.items[0]?.referencesCollection?.items;
          return (0, r.jsxs)(Or, {
            ref: s,
            children: [(0, r.jsx)(qr, {
              games: c
            }), (0, r.jsxs)(Fr, {
              children: [(0, r.jsxs)(Xr, {
                children: [(0, r.jsx)($r, {
                  children: o
                }), (0, r.jsx)(Hr, {
                  children: i
                })]
              }), n && (0, r.jsx)(Wr, {
                appearance: n?.appearance,
                override_backgroundColor: n?.backgroundColor,
                iconLeft: n?.iconLeft?.icon,
                iconRight: n?.iconRight?.icon,
                link: n?.link,
                onPress: (l = n, () => t(l.analyticsData, l)),
                children: n?.text
              })]
            })]
          });
          var l
        },
        Yr = "WwwImagesMarqueeModule",
        Qr = l.Lightbox,
        Zr = "WwwLightboxImage",
        Jr = "WwwLinkOutImage";
      var es = (0, y.c)({
          defaultClassName: "_1awcvb7j",
          variantClassNames: {
            appearance: {
              primary: "_1awcvb7k",
              secondary: "_1awcvb7l",
              tertiary: "_1awcvb7m",
              ghost: "_1awcvb7n",
              information: "_1awcvb7o",
              danger: "_1awcvb7p",
              accent: "_1awcvb7q"
            }
          },
          defaultVariants: {
            appearance: "primary"
          },
          compoundVariants: []
        }),
        ts = ((0, y.c)({
          defaultClassName: "_1awcvb71",
          variantClassNames: {
            layout: {
              primary: "_1awcvb72",
              secondary: "_1awcvb73",
              default: "_1awcvb74"
            }
          },
          defaultVariants: {
            layout: "default"
          },
          compoundVariants: []
        }), (0, y.c)({
          defaultClassName: "_1awcvb75 _1betujy7",
          variantClassNames: {
            grid: {
              "4_up_a": "_1awcvb76",
              "4_up_b": "_1awcvb77",
              "4_up_c": "_1awcvb78",
              "4_up_d": "_1awcvb79"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        })),
        as = (0, y.c)({
          defaultClassName: "_1awcvb7a",
          variantClassNames: {
            type: {
              primary: "_1awcvb7b",
              secondary: "_1awcvb7c",
              tertiary: "_1awcvb7d"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const rs = (0, o.defineMessages)({
          masonry_grid_external_store_link: {
            id: "masonry_grid_external_store_link",
            description: "Tells the user this is an external link to the store.",
            defaultMessage: "External link to Store"
          }
        }),
        ss = (0, n.forwardRef)(function({
          block: e,
          mobileCarouselThreshold: t = 1,
          defaultSlide: a = 0,
          gridType: s,
          ...i
        }, o) {
          const {
            ref: c,
            api: l,
            currentSlide: d
          } = (({
            autoScrollEnabled: e = !1,
            defaultSlide: t,
            duration: a = 40
          }) => {
            const r = (0, n.useRef)(null),
              [s, i] = (0, n.useState)(t),
              [o, c] = (0, n.useState)(0),
              [l, d] = (0, n.useState)(!1),
              [u, m] = (0, Ce.A)({
                axis: "x",
                align: "start",
                startIndex: t,
                active: !0,
                containScroll: "trimSnaps",
                watchDrag: l,
                duration: a
              }, []),
              _ = (0, n.useCallback)(() => {
                m && (c(m?.scrollSnapList()?.length ?? 0), d(m?.canScrollNext() || m?.canScrollPrev()))
              }, [m]),
              f = (0, n.useCallback)(() => {
                m && i(m?.selectedScrollSnap() ?? 0)
              }, [m]);
            return (0, n.useEffect)(() => {
              m && r?.current && (e ? r?.current.play() : r.current.stop())
            }, [e, m]), (0, n.useEffect)(() => {
              if (m) return m.on("init", _), m.on("reInit", _), m.on("select", f), _(), () => {
                m.off("init", _), m.off("reInit", _), m.off("select", f)
              }
            }, [m, _, f]), {
              ref: u,
              currentSlide: s,
              totalSlides: o,
              api: m
            }
          })({
            defaultSlide: a
          }), {
            trackEvent: u
          } = U(), [m, _] = (0, n.useState)(!1);
          if ((0, n.useEffect)(() => (l?.on("pointerUp", () => _(!0)), m && u({
              event: "carousel_swipe"
            }), _(!1), () => {
              l?.off("pointerUp", () => _)
            }), [l, d]), !e) return;
          const {
            cardsCollection: f,
            variant: g
          } = e, p = f?.items ?? [], b = p.slice(0, t), h = p.slice(t), k = (0, v.v6)({
            className: "_1awcvb70 _1betujy6 _1betujy5"
          }, i), x = (e, t) => () => {
            u({
              event: "card_click",
              card_id: e?.sys?.id,
              position: t + 1,
              position_max: p.length,
              ...e.link?.url && {
                link_url: e.link?.url
              },
              ...e.analyticsData
            }, e.cta)
          };
          return (0, r.jsxs)("div", {
            ref: o,
            ...k,
            children: [(0, r.jsx)(C, {
              showOn: "mobile",
              forceMount: !0,
              children: (0, r.jsxs)("div", {
                className: ts({
                  grid: g ?? s
                }),
                children: [b.map((e, t) => (0, r.jsx)(os, {
                  card: e,
                  index: t,
                  size: "medium",
                  context: "4:5",
                  type: "primary",
                  onCardClick: x(e, t)
                }, `${e?.sys?.id}-${t}`)), (0, r.jsx)(Le, {
                  className: "_1awcvb7e",
                  ref: c,
                  children: h?.map((e, t) => {
                    const a = 0 === t ? "secondary" : "tertiary";
                    return (0, r.jsx)(Be, {
                      className: "_1awcvb7f",
                      children: (0, r.jsx)(os, {
                        card: e,
                        index: t,
                        size: "small",
                        context: "4:3",
                        type: a,
                        onCardClick: x(e, t)
                      })
                    }, e?.sys?.id)
                  })
                })]
              })
            }), (0, r.jsx)(C, {
              showOn: "tabletSmall",
              forceMount: !0,
              children: (0, r.jsx)(cs, {
                breakpoint: "tabletSmall",
                items: p,
                mainCardSize: "large",
                size: "medium",
                gridType: g ?? s
              })
            }), (0, r.jsx)(C, {
              showOn: "tabletMedium",
              forceMount: !0,
              children: (0, r.jsx)(cs, {
                breakpoint: "tabletMedium",
                items: p,
                mainCardSize: "medium",
                size: "small",
                gridType: g ?? s
              })
            }), (0, r.jsx)(C, {
              showOn: "tabletLarge",
              forceMount: !0,
              children: (0, r.jsx)(cs, {
                breakpoint: "tabletLarge",
                items: p,
                mainCardSize: "large",
                size: "medium",
                gridType: g ?? s
              })
            }), (0, r.jsx)(C, {
              showOn: "desktopSmallAndLarger",
              forceMount: !0,
              children: (0, r.jsx)(cs, {
                breakpoint: "desktopSmallAndLarger",
                items: p,
                mainCardSize: "large",
                size: "medium",
                gridType: g ?? s
              })
            })]
          })
        }),
        ns = {
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
        },
        is = {
          small: 6,
          medium: 5,
          large: 4,
          xlarge: 4
        },
        os = (0, n.forwardRef)(function({
          index: e,
          size: t = "medium",
          card: a,
          context: s,
          type: n,
          onCardClick: i,
          ...c
        }, l) {
          const d = (0, o.useIntl)();
          if (!a) return null;
          const u = (0, v.v6)({
              className: as({
                type: n
              }),
              style: {
                gridArea: String.fromCharCode(97 + e)
              }
            }, c),
            m = a.cta,
            _ = "dark" === a.textColor ? "light" : "dark",
            f = (0, r.jsxs)(Ut, {
              size: t,
              className: "_1awcvb7g",
              gradientColor: a.gradientColor,
              gradientType: "radial",
              theme: _,
              interactive: !0,
              children: [(0, r.jsxs)($t, {
                className: "_1awcvb7i",
                children: [a.badgeText && (0, r.jsx)(Ht, {
                  children: a.badgeText
                }), a.text && (0, r.jsx)(Kt, {
                  level: is[t],
                  children: a.text
                }), m && (0, r.jsx)(Qt, {
                  iconLeft: m.iconLeft?.icon,
                  iconRight: m.iconRight?.icon,
                  appearance: m.appearance,
                  override_backgroundColor: m.backgroundColor,
                  size: "MD",
                  onPress: i,
                  asChild: !0,
                  children: (0, r.jsx)("span", {
                    className: es({
                      appearance: m.appearance
                    }),
                    tabIndex: -1,
                    children: m.text
                  })
                })]
              }), (0, r.jsx)(Xt, {
                alt: a?.backgroundImage?.altText,
                src: a.backgroundImage,
                context: s
              })]
            });
          return (0, r.jsx)("div", {
            ref: l,
            ...u,
            children: a.link?.url ? (0, r.jsx)(k, {
              href: a.link?.url,
              target: "_blank",
              title: d.formatMessage(rs.masonry_grid_external_store_link),
              className: "_1awcvb7h",
              onClick: i,
              children: f
            }) : f
          })
        }),
        cs = (0, n.forwardRef)(function({
          breakpoint: e,
          items: t,
          size: a,
          mainCardSize: s = a,
          gridType: n,
          ...i
        }, o) {
          const {
            trackEvent: c
          } = U(), l = (0, v.v6)({
            className: S()(ts({
              grid: n || "4_up_a"
            }))
          }, i), d = (e, a) => () => {
            c({
              event: "card_click",
              card_id: e?.sys?.id,
              position: a + 1,
              position_max: t.length,
              ...e.link?.url && {
                link_url: e.link?.url
              },
              ...e.analyticsData
            }, e.cta)
          };
          return (0, r.jsx)("div", {
            ref: o,
            ...l,
            children: t.map((t, n) => {
              const o = (e => 0 === e ? "primary" : 1 === e ? "secondary" : "tertiary")(n),
                c = ns[e]?.[o] ?? "1:1";
              return (0, r.jsx)(os, {
                ...i,
                card: t,
                index: n,
                size: 0 === n ? s : a,
                type: o,
                context: c,
                onCardClick: d(t, n)
              }, `${t?.sys?.id}-${n}`)
            })
          })
        }),
        ls = "WwwMasonryGrid",
        ds = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...s
        }, n) {
          const i = t ? g.DX : "div",
            o = (0, v.v6)({
              "data-testid": a,
              className: "_4fo4mk0 _1betujy6 _1betujy5"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        us = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...s
        }, n) {
          const i = t ? g.DX : l.Heading,
            o = (0, v.v6)({
              "data-testid": a,
              className: "_4fo4mk1"
            }, s);
          return (0, r.jsx)(i, {
            level: 2,
            ref: n,
            ...o,
            children: e
          })
        }),
        ms = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...s
        }, n) {
          const i = t ? g.DX : "div",
            o = (0, v.v6)({
              "data-testid": a,
              className: "_4fo4mk2"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        _s = (e, t) => (0, r.jsx)(l.Heading, {
          level: 3,
          className: "_4fo4mk3",
          children: t
        }),
        fs = {
          [c.ContentfulTypes.BLOCKS.HEADING_1]: _s,
          [c.ContentfulTypes.BLOCKS.HEADING_2]: _s,
          [c.ContentfulTypes.BLOCKS.HEADING_3]: _s,
          [c.ContentfulTypes.BLOCKS.HEADING_4]: _s,
          [c.ContentfulTypes.BLOCKS.HEADING_5]: _s,
          [c.ContentfulTypes.BLOCKS.HEADING_6]: _s
        },
        gs = (0, n.forwardRef)(function({
          markdown: e,
          asChild: t,
          testId: a,
          ...s
        }, n) {
          const i = t ? g.DX : "div",
            o = (0, v.v6)({
              "data-testid": a,
              className: "_4fo4mk4"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: (0, r.jsx)(c.RsgMdTextComponent, {
              markdown: e,
              rsgRichTextOptions: {
                renderNode: fs
              }
            })
          })
        }),
        ps = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          isDisabled: a,
          ...s
        }, n) {
          const i = (0, v.v6)({
            "data-testid": t,
            isDisabled: a
          }, s);
          return (0, r.jsx)(l.Button, {
            appearance: "primary",
            size: "MD",
            ref: n,
            ...i,
            children: e
          })
        });
      var bs = a(79867),
        hs = a(51931),
        vs = a(72408);
      const ks = (0, o.defineMessages)({
          ns_successfully_subscribed_title: {
            id: "ns_successfully_subscribed_title",
            description: "Newsletter Subscription Alert - Successfully Subscribed title",
            defaultMessage: "Successfully Subscribed"
          },
          ns_successfully_subscribed_details: {
            id: "ns_successfully_subscribed_details",
            description: "Newsletter Subscription Alert - Successfully Subscribed details",
            defaultMessage: "You are now signed up to the Rockstar Games Email List and will receive regular updates to the email address you’ve signed up with. Manage your email preferences at any time on your account settings page."
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
          ns_already_subbed_details: {
            id: "ns_already_subbed_details",
            description: "Newsletter Subscription Alert - Already Subscribed details",
            defaultMessage: "You are already receiving newsletter updates at this email address. Change your email preferences at any time on your account settings page."
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
        xs = {
          SUCCESS: {
            icon: "check",
            heading: ks.ns_successfully_subscribed_title,
            bodyText: ks.ns_successfully_subscribed_details,
            showManagePreferences: !0
          },
          CHECK_EMAIL: {
            icon: "mail",
            heading: ks.ns_check_email_title,
            bodyText: ks.ns_check_email_details
          },
          ERROR_PREFERENCES: {
            icon: "error",
            heading: ks.ns_error_preferences_title,
            bodyText: ks.ns_error_preferences_details,
            showManagePreferences: !0
          },
          ERROR_GENERIC: {
            icon: "error",
            heading: ks.ns_error_generic_title,
            bodyText: ks.ns_error_generic_details
          },
          ALREADY_SUBSCRIBED: {
            icon: "check",
            heading: ks.ns_already_subbed_title,
            bodyText: ks.ns_already_subbed_details,
            showManagePreferences: !0
          },
          NEW_ACCOUNT: {
            icon: "mail",
            heading: ks.ns_confirm_after_register_title,
            bodyText: ks.ns_confirm_after_register_details,
            showManagePreferences: !0
          },
          CONFIRM: {
            icon: "mail",
            heading: ks.ns_confirm_title,
            bodyText: ks.ns_confirm_details,
            showManagePreferences: !1
          }
        },
        ws = {
          0: xs.ERROR_PREFERENCES,
          1: xs.SUCCESS,
          2: xs.ERROR_PREFERENCES,
          3: xs.ERROR_PREFERENCES,
          4: xs.ERROR_GENERIC
        },
        ys = (0, i.setMakeVarItem)({
          key: "subscriptionStatusReactive",
          value: (0, i.makeVar)(null)
        }),
        js = e => ys(e),
        Cs = (e, t) => {
          const [a, r] = (0, n.useState)(), [s, c] = (0, n.useState)(!1), [l, d] = (0, n.useState)(!1), [u, m] = (0, n.useState)(!1), [_, f] = (0, n.useState)(!1), g = (0, i.useReactiveVar)(ys), p = (0, o.useIntl)(), {
            track: h
          } = (0, b.useGtmTrack)(), v = {
            preferences: `https://${e.sc}.rockstargames.com/settings/email`,
            auth: `${e.login}?returnUrl=${window.location.pathname}%3Fmarketing%3Dtrue&lang=${e.lang}&newsletter=true`
          };
          (0, n.useEffect)(() => {
            a ? (d(!0), m(!1)) : d(!1)
          }, [a]);
          const k = {
              ...xs.NEW_ACCOUNT,
              closeOnOutsideClick: !1,
              buttons: [{
                buttonText: p.formatMessage(ks.ns_yes_subscribe_text),
                style: "monochrome",
                onClick: () => {
                  x()
                }
              }, {
                buttonText: p.formatMessage(ks.ns_go_back_text),
                onClick: () => {
                  r(null)
                }
              }]
            },
            x = async () => (h({
              event: "cta_subscribe_news",
              section_layout: t.loggedIn ? "signed in" : "signed out",
              element_placement: "newsletter subscribe",
              text: "subscribe now"
            }), t.loggedIn || (window.location.href = v.auth), t.loggedIn && t.isAMinor ? (r(xs.ERROR_GENERIC), f(!1), void h({
              event: "alert_error",
              text: "error message with no preferences link",
              element_placement: "newsletter subscribe"
            })) : t.loggedIn && !g || t.loggedIn && 3 == g ? void await w() : t.loggedIn && g ? (h({
              event: "alert_update",
              text: "alert - user already subscribed",
              element_placement: "newsletter subscribe"
            }), r(xs.ALREADY_SUBSCRIBED), void f(!1)) : void 0), w = async () => {
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
              if (e) js(0), r(xs.ERROR_GENERIC), h({
                event: "alert_error",
                text: "error message with preferences link",
                element_placement: "newsletter subscribe"
              });
              else {
                const e = a.status;
                js(e), r(ws[e]), 1 === e ? (h({
                  event: "subscribe_news_success",
                  element_placement: "newsletter subscribe"
                }), h({
                  event: "alert_update",
                  text: "user subscribed successfully",
                  element_placement: "newsletter subscribe"
                })) : h({
                  event: "alert_error",
                  text: "error message with preferences link",
                  element_placement: "newsletter subscribe"
                })
              }
            };
          return (0, n.useEffect)(() => {
            c(1 === g)
          }, [g]), (0, n.useEffect)(() => {
            (async () => {
              await (async () => {
                void 0 !== t.loggedIn && (t.loggedIn ? await (async () => {
                  if (-1 === g) return;
                  js(-1), m(!0);
                  const {
                    error: a = null,
                    result: s
                  } = await (0, i.coreScApiFetch)("marketing/status", {
                    pingBearer: t.pingBearer
                  });
                  if (a) js(0), m(!1);
                  else {
                    const a = s.status;
                    js(a), t.isFromAuth && (a => {
                      if (e.navigate(".", {
                          replace: !0
                        }), t.loggedIn) switch (a) {
                        case 1:
                          t.isNewAccount ? (h({
                            event: "subscribe_news_success",
                            element_placement: "newsletter subscribe"
                          }), h({
                            event: "alert_update",
                            text: "new user subscribed during account creation",
                            element_placement: "newsletter subscribe"
                          }), r(xs.SUCCESS)) : (h({
                            event: "alert_update",
                            text: "alert - user already subscribed",
                            element_placement: "newsletter subscribe"
                          }), r(xs.ALREADY_SUBSCRIBED));
                          break;
                        case 4:
                          h({
                            event: "alert_error",
                            text: "error message with no preferences link",
                            element_placement: "newsletter subscribe"
                          }), r(xs.ERROR_GENERIC);
                          break;
                        default:
                          t.isNewAccount ? (r(k), h({
                            event: "alert_update",
                            text: "newly registered user - would you still like to subscribe?",
                            element_placement: "newsletter subscribe"
                          })) : w()
                      }
                    })(a), m(!1)
                  }
                })() : m(!1))
              })()
            })()
          }, [t.loggedIn]), {
            dialog: a,
            handleSubscribeButton: x,
            isButtonLoading: _,
            isLoading: u,
            isSubscribed: s,
            setShowDialog: d,
            showDialog: l,
            subscriptionStatus: g,
            urls: v,
            setDialog: r
          }
        },
        Ns = "WwwNewsletterSubscribe";
      var Ss = (0, y.c)({
          defaultClassName: "_2g8q31a",
          variantClassNames: {
            imagePlacement: {
              left: "_2g8q31b",
              right: "_2g8q31c"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Rs = (0, y.c)({
          defaultClassName: "_2g8q31d",
          variantClassNames: {
            imagePlacement: {
              left: "_2g8q31e",
              right: "_2g8q31f"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Is = "var(--_2g8q310)",
        Es = "_2g8q31l",
        zs = (0, y.c)({
          defaultClassName: "_2g8q314",
          variantClassNames: {
            contentAlignment: {
              center: "_2g8q315",
              left: "_2g8q316"
            },
            imagePlacement: {
              left: "_2g8q317",
              right: "_2g8q318"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Ts = (0, n.createContext)(void 0),
        As = (0, n.forwardRef)(function({
          colorMode: e = "dark",
          backgroundColor: t,
          gradientEnabled: a = !0,
          imagePlacement: s = "left",
          children: i,
          className: o,
          asChild: c,
          testId: l,
          ...d
        }, u) {
          const m = c ? g.DX : "div",
            _ = "dark" === e ? "#000000" : "lightgrey",
            f = (0, v.v6)({
              "data-testid": l,
              className: S()(o, "_2g8q312 _1betujy6 _1betujy5"),
              style: (0, x.DI)({
                [Is]: t ?? _
              })
            }, d),
            p = (0, ne.Ub)(w.f.mobile),
            b = "left" === s ? i : n.Children.toArray(i).reverse();
          return (0, r.jsx)(Ts.Provider, {
            value: {
              colorMode: e,
              backgroundColor: t,
              imagePlacement: s,
              gradientEnabled: a
            },
            children: (0, r.jsx)(m, {
              ref: u,
              ...f,
              children: p ? i : b
            })
          })
        }),
        Ms = (0, n.forwardRef)(function({
          contentAlignment: e,
          children: t,
          testId: a,
          asChild: s,
          ...i
        }, o) {
          const c = (0, n.useContext)(Ts);
          if (!c) return;
          const {
            colorMode: l,
            gradientEnabled: d,
            imagePlacement: u
          } = c, m = s ? g.DX : "div", _ = (0, L.m)(l ?? "dark", "normal"), f = (0, v.v6)({
            "data-testid": a,
            className: S()(_, "_2g8q313", zs({
              contentAlignment: e,
              imagePlacement: u
            }), !d && "_2g8q319")
          }, i);
          return (0, r.jsx)(m, {
            ref: o,
            ...f,
            children: t
          })
        }),
        Ds = (0, n.forwardRef)(function({
          image: e,
          testId: t,
          asChild: a,
          ...s
        }, i) {
          const o = (0, ne.Ub)(w.f.tabletMediumAndLarger) ? "16:9" : "1:1",
            c = (0, n.useContext)(Ts);
          if (!c || !e) return;
          const {
            imagePlacement: l,
            gradientEnabled: d
          } = c, u = a ? g.DX : "div", m = (0, v.v6)({
            "data-testid": t,
            className: Ss({
              imagePlacement: l
            })
          }, s);
          return (0, r.jsxs)(u, {
            ref: i,
            ...m,
            children: [d && (0, r.jsx)("div", {
              className: Rs({
                imagePlacement: l
              })
            }), (0, r.jsx)(pe, {
              context: o,
              src: e,
              className: "_2g8q31g"
            })]
          })
        }),
        Ps = (0, n.forwardRef)(function({
          ...e
        }, t) {
          return (0, r.jsx)(qt, {
            ref: t,
            ...e
          })
        }),
        Ls = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, s) {
          if (!e) return;
          const n = (0, v.v6)({
            "data-testid": t,
            className: "_2g8q31h"
          }, a);
          return (0, r.jsx)(l.Button, {
            ref: s,
            ...n,
            children: e
          })
        }),
        Bs = (0, n.forwardRef)(function({
          children: e,
          ...t
        }, a) {
          if (!e) return;
          const s = (0, v.v6)({
            className: "_2g8q31i"
          }, t);
          return (0, r.jsx)(l.Heading, {
            ref: a,
            ...s,
            children: e
          })
        }),
        Gs = (0, n.forwardRef)(function({
          children: e,
          ...t
        }, a) {
          if (!e) return;
          const s = (0, v.v6)({
            className: "_2g8q31j"
          }, t);
          return (0, r.jsx)(l.Body, {
            ref: a,
            ...s,
            children: e
          })
        }),
        Vs = (0, n.forwardRef)(function({
          className: e,
          children: t,
          testId: a,
          ...s
        }, n) {
          if (!t) return;
          const i = (0, v.v6)({
            "data-testid": a,
            className: S()("_2g8q31k", e)
          }, s);
          return (0, r.jsx)("div", {
            ref: n,
            ...i,
            children: t
          })
        }),
        Os = (0, n.forwardRef)(function({
          markdown: e,
          onHyperlinkClick: t,
          testId: a,
          ...s
        }, n) {
          if (!e) return;
          const i = (0, v.v6)({
              "data-testid": a,
              className: Es
            }, s),
            o = {
              [c.ContentfulTypes.BLOCKS.PARAGRAPH]: (e, t) => (0, r.jsx)(l.Body, {
                size: "XS",
                className: Es,
                children: t
              }),
              [c.ContentfulTypes.INLINES.HYPERLINK]: (e, a) => {
                return (0, r.jsx)("a", {
                  href: e.data.uri,
                  className: "_2g8q31m",
                  onClick: (s = e, () => t?.(s)),
                  children: a
                });
                var s
              }
            };
          return (0, r.jsx)("div", {
            ref: n,
            ...i,
            children: (0, r.jsx)(c.RsgMdTextComponent, {
              markdown: e,
              rsgRichTextOptions: {
                renderNode: o
              }
            })
          })
        }),
        qs = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, s) {
          if (!e) return;
          const n = (0, v.v6)({
            "data-testid": t,
            className: "_2g8q31n"
          }, a);
          return (0, r.jsx)(l.Label, {
            ref: s,
            ...n,
            size: "XS",
            appearance: "bold",
            children: e
          })
        }),
        Fs = ({
          block: e
        }) => {
          const {
            trackEvent: t,
            trackRichTextHyperlink: a
          } = U();
          return (0, r.jsxs)(As, {
            colorMode: "dark",
            backgroundColor: e.backgroundColor,
            gradientEnabled: e.enableGradient,
            imagePlacement: e.imagePlacement,
            children: [(0, r.jsx)(Ds, {
              image: e.backgroundImage
            }), (0, r.jsxs)(Ms, {
              contentAlignment: e.contentAlignment,
              children: [(0, r.jsx)(qs, {
                children: e.badge
              }), (0, r.jsx)(Ps, {
                image: e.foregroundImage,
                size: e.foregroundImageSize
              }), (0, r.jsxs)(Vs, {
                children: [(0, r.jsx)(Bs, {
                  level: 4,
                  children: e.headline
                }), (0, r.jsx)(Gs, {
                  size: "MD",
                  children: e.description
                })]
              }), e.cta && (0, r.jsx)(Ls, {
                appearance: e.cta.appearance,
                override_backgroundColor: e.cta.backgroundColor,
                size: "MD",
                onPress: (s = e.cta, () => t(s.analyticsData, s)),
                asChild: !0,
                children: (0, r.jsx)("a", {
                  href: e.cta.link?.url,
                  children: e.cta.text
                })
              }), (0, r.jsx)(Os, {
                markdown: e.legalText,
                onHyperlinkClick: e => a(e)
              })]
            })]
          });
          var s
        },
        Us = "WwwPromoModule",
        Xs = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...s
        }, n) {
          const i = t ? g.DX : "div",
            o = (0, v.v6)({
              "data-testid": a,
              className: "pg6i3i0 _1betujy6 _1betujy5"
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
        $s = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...s
        }, n) {
          const i = t ? g.DX : "div",
            o = (0, v.v6)({
              "data-testid": a,
              className: "pg6i3i1"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        Hs = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          ...a
        }, s) {
          const n = t ? g.DX : "div",
            i = (0, v.v6)({
              className: "pg6i3i2"
            }, a);
          return (0, r.jsx)(n, {
            ref: s,
            ...i,
            children: e
          })
        }),
        Ws = (0, n.forwardRef)(function({
          asChild: e,
          testId: t,
          altText: a,
          ...s
        }, n) {
          const i = e ? g.DX : "div",
            o = (0, v.v6)({
              "data-testid": t
            }, s);
          return (0, r.jsxs)(i, {
            ref: n,
            ...o,
            children: [(0, r.jsx)("img", {
              src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/90e8a0c40853b90840df2c9de1542722.svg",
              className: "pg6i3i4",
              alt: a
            }), (0, r.jsx)("img", {
              src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/def13a31001678085d3deddd9381ae73.svg",
              className: "pg6i3i5",
              alt: a
            })]
          })
        }),
        Ks = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...s
        }, n) {
          const i = t ? g.DX : l.Body,
            o = (0, v.v6)({
              "data-testid": a,
              className: "pg6i3i6 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdc"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        Ys = "WwwSupportCalloutModule";
      var Qs = "var(--_1mhfmge7)",
        Zs = (0, y.c)({
          defaultClassName: "_1mhfmgec",
          variantClassNames: {
            align: {
              left: "_1mhfmged",
              center: "_1mhfmgee",
              right: "_1mhfmgef"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Js = "var(--_1mhfmge9)",
        en = "var(--_1mhfmgea)",
        tn = (0, y.c)({
          defaultClassName: "_1mhfmge0",
          variantClassNames: {
            align: {
              left: "_1mhfmge1",
              center: "_1mhfmge2",
              right: "_1mhfmge3"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const an = (0, n.createContext)({
          align: "left"
        }),
        rn = (0, n.forwardRef)(function({
          align: e = "left",
          children: t,
          testId: a,
          asChild: s,
          ...n
        }, i) {
          const o = s ? g.DX : "div",
            c = (0, v.v6)({
              "data-testid": a,
              className: tn({
                align: e
              })
            }, n);
          return (0, r.jsx)(an.Provider, {
            value: {
              align: e
            },
            children: (0, r.jsx)(o, {
              ref: i,
              ...c,
              children: t
            })
          })
        }),
        sn = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, s) {
          const n = (0, v.v6)({
            "data-testid": t,
            className: "_1mhfmge6"
          }, a);
          return (0, r.jsx)("div", {
            className: "_1mhfmge5",
            children: (0, r.jsx)(l.Badge.Root, {
              appearance: "primary",
              ref: s,
              ...n,
              children: (0, r.jsx)(l.Badge.Label, {
                children: e
              })
            })
          })
        }),
        nn = (0, n.forwardRef)(function({
          bodyTextWrap: e,
          children: t,
          testId: a,
          ...s
        }, n) {
          const i = (0, v.v6)({
            "data-testid": a,
            className: "_1mhfmge8",
            style: (0, x.DI)({
              [Qs]: e
            })
          }, s);
          return t ? (0, r.jsx)("div", {
            ref: n,
            ...i,
            children: t
          }) : null
        }),
        on = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          size: a = "SM",
          ...s
        }, n) {
          const i = (0, v.v6)({
            "data-testid": t,
            className: "_1mhfmge4"
          }, s);
          return (0, r.jsx)(l.Label, {
            size: a,
            appearance: "bold",
            ref: n,
            ...i,
            children: e
          })
        }),
        cn = (0, n.forwardRef)(function({
          headerSize: e,
          textColor: t,
          headerTextWrap: a,
          children: s,
          testId: i,
          ...o
        }, c) {
          const d = (0, ne.Ub)(w.f.desktopSmallAndLarger),
            [u, m] = (0, n.useState)(2),
            _ = (0, v.v6)({
              "data-testid": i,
              className: S()("_1mhfmgeg", t && "_1mhfmgeb"),
              style: (0, x.DI)({
                [Js]: t,
                [en]: a
              }),
              asChild: !0
            }, o);
          return (0, n.useEffect)(() => {
            "XS" === e ? m(d ? 5 : 6) : "SM" === e ? m(d ? 4 : 5) : "MD" === e ? m(d ? 3 : 4) : "LG" === e ? m(d ? 2 : 3) : "XL" === e && m(d ? 1 : 2)
          }, [e, d]), (0, r.jsx)(l.Heading, {
            level: u,
            ref: c,
            ..._,
            children: (0, r.jsx)("h2", {
              children: s
            })
          })
        }),
        ln = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...s
        }, n) {
          const i = a ? g.DX : "p",
            o = (0, v.v6)({
              "data-testid": t,
              className: "_1mhfmgeh"
            }, s);
          return (0, r.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        dn = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, s) {
          const {
            align: i
          } = (0, n.useContext)(an), o = (0, v.v6)({
            "data-testid": t,
            className: Zs({
              align: i
            })
          }, a);
          return (0, r.jsx)("div", {
            ref: s,
            ...o,
            children: e
          })
        }),
        un = "WwwTextBlock";
      var mn = (0, y.c)({
        defaultClassName: "r6o3sa3 _1betujy6 _1betujy5",
        variantClassNames: {
          alignment: {
            image_left: "r6o3sa4",
            image_right: "r6o3sa5"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      const _n = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          variant: s = "image_right",
          ...n
        }, i) {
          const o = a ? g.DX : "div",
            c = (0, v.v6)({
              "data-testid": t,
              className: mn({
                alignment: s
              })
            }, n);
          return (0, r.jsx)(o, {
            ref: i,
            ...c,
            children: e
          })
        }),
        fn = (0, n.forwardRef)(function({
          testId: e,
          altText: t,
          ...a
        }, s) {
          const n = (0, v.v6)({
            "data-testid": e,
            className: "r6o3sa6",
            alt: t
          }, a);
          return (0, r.jsx)("img", {
            ref: s,
            ...n
          })
        }),
        gn = (0, n.forwardRef)(function({
          children: e,
          ...t
        }, a) {
          const s = (0, v.v6)({
            className: "r6o3sa7"
          }, t);
          return (0, r.jsx)("div", {
            ref: a,
            ...s,
            children: e
          })
        }),
        pn = "WwwTextWithBadge";
      var bn = a(31879),
        hn = a.n(bn);
      const vn = "WwwVideoPlayer";
      var kn = a(63582);
      const xn = JSON.parse('{"de-DE":{"engagement_faq":"FAQ","engagement_faqs":"FAQ","engagement_legal_text":"Das Angebot endet am 9. Oktober um 23:59 Uhr (ET). Ein mit einer Mitgliedschaft bei GTA+ verknüpftes Spielkonto für GTA Online wird benötigt. Gilt nur einmal pro Mitgliedschaft bei GTA+. Das Angebot muss abgeholt und GTA Online muss vor dem 8. November um 23:59 Uhr (ET) mit einem mit GTA+ verknüpften Spielkonto gestartet werden. Es gelten zusätzliche Bedingungen (siehe {FaqLink}).","engagement_link_account":"Anderes Konto verknüpfen","engagement_link_console_account":"Spielkonto verknüpfen"},"en-US":{"engagement_faq":"FAQ","engagement_faqs":"FAQs","engagement_legal_text":"Offer ends October 9 at 11:59 p.m. ET. Offer must be applied to the GTA Online Game Account linked to your GTA+ Membership and is limited to one redemption per GTA+ Membership. Must claim and then sign in to GTA Online using your GTA+ Game Account before November 8 at 11:59 p.m. ET to redeem offer. Additional terms apply, see {FaqLink} for full terms.","engagement_link_account":"Link Another Account","engagement_link_console_account":"Link Game Account"},"es-ES":{"engagement_faq":"PREGUNTAS FRECUENTES","engagement_faqs":"Preguntas frecuentes","engagement_legal_text":"Oferta válida hasta el 9 de octubre a las 23:59 ET. La oferta debe solicitarse en tu cuenta de juego de GTA Online asociada a tu suscripción de GTA+ y solo puede canjearse una vez por cada suscripción de GTA+. Debes solicitarla e iniciar sesión en GTA Online usando tu cuenta de GTA+ antes del 8 de noviembre a las 23:59 ET (05:59 CEST) para canjear la oferta. Se aplican condiciones adicionales. Para más información, consulta nuestra sección de {FaqLink}.","engagement_link_account":"Vincular otra cuenta","engagement_link_console_account":"Vincular una cuenta de juego"},"es-MX":{"engagement_faq":"PREGUNTAS FRECUENTES","engagement_faqs":"Preguntas frecuentes","engagement_legal_text":"La oferta termina el 9 de octubre a las 11:59 p. m. (ET). La oferta debe ser aplicada a la cuenta del juego de GTA Online vinculada a tu membresía de GTA+, y solo se podrá obtener una vez por cada membresía de GTA+. Debes solicitar la oferta e iniciar sesión en GTA Online con tu cuenta del juego de GTA+ antes del 8 de noviembre a las 11:59 p. m. (ET) para obtenerla. Se aplican términos adicionales. Para ver los términos, consulta las {FaqLink}.","engagement_link_account":"Vincular otra cuenta","engagement_link_console_account":"Vincular una cuenta del juego"},"fr-FR":{"engagement_faq":"NOTRE FOIRE AUX QUESTIONS","engagement_faqs":"nos foires aux questions","engagement_legal_text":"Fin de l\'offre le 9 octobre à 23 h 59, heure de New York. L\'offre doit être appliquée au compte de jeu de GTA Online associé à votre abonnement à GTA+. Une seule utilisation de l\'offre par abonnement à GTA+. Pour pouvoir utiliser l\'offre, vous devez la récupérer puis vous connecter à GTA Online avec votre compte de jeu GTA+ avant le 8 novembre à 23 h 59, heure de New York. Offre soumise à conditions ; conditions complètes disponibles sur {FaqLink}.","engagement_link_account":"Associer un autre compte","engagement_link_console_account":"Associer un compte de jeu"},"it-IT":{"engagement_faq":"DOMANDE FREQUENTI","engagement_faqs":"Domande frequenti","engagement_legal_text":"L’offerta termina il 9 ottobre alle 23:59, fuso orario ET. L’offerta deve essere riscattata sull’account di GTA Online collegato al tuo abbonamento GTA+. Limite di un riscatto per abbonamento GTA+. È necessario riscattare e in seguito effettuare l’accesso a GTA Online tramite il tuo account di gioco collegato a GTA+ prima dell’8 novembre alle 23:59, fuso orario ET, per usufruire dell’offerta. Si applicano ulteriori condizioni, consulta le {FaqLink}.","engagement_link_account":"Collega un altro account","engagement_link_console_account":"Collega un account di gioco"},"ja-JP":{"engagement_faq":"よくある質問","engagement_faqs":"よくある質問","engagement_legal_text":"オファーは10月9日午後11時59分(アメリカ東部時間)に終了します。オファーはGTA+メンバーシップにリンクされた「GTAオンライン」のゲームアカウントに適用され、各GTA+メンバーシップにつき1度のみ引き換え可能です。オファーは受け取り後、11月8日午後11時59分(アメリカ東部時間)前にGTA+ゲームアカウントで「GTAオンライン」にサインインして引き換えてください。諸条件が適用されます。全諸条件は{FaqLink}をご覧ください。","engagement_link_account":"他のアカウントをリンクする","engagement_link_console_account":"ゲームアカウントをリンクする"},"ko-KR":{"engagement_faq":"자주 묻는 질문","engagement_faqs":"자주 묻는 질문","engagement_legal_text":"10월 9일 오후 11시 59분(미국 동부시)에 혜택 종료. 혜택은 GTA+ 멤버십과 연동된 GTA 온라인 게임 계정에만 사용. GTA+ 계정당 1회 제한. 혜택을 획득하고 사용하려면, GTA+ 게임 계정을 사용해서 11월 8일 오후 11시 59분(미국 동부시) 이전에 GTA 온라인에 로그인해야 합니다. 추가 이용 약관 적용. 전체 약관 내용은 {FaqLink}을 확인하십시오.","engagement_link_account":"다른 계정 연동하기","engagement_link_console_account":"게임 계정 연동하기"},"pl-PL":{"engagement_faq":"NAJCZĘSTSZE PYTANIA","engagement_faqs":"Najczęstsze pytania","engagement_legal_text":"Oferta ważna do 9 października, godziny 23:59 czasu ET. Oferta musi zostać wykorzystana wraz z kontem GTA Online powiązanym z członkostwem w GTA+ i jest ograniczona do jednorazowego użytku dla jednego członkostwa w GTA+. Należy ją odebrać, logując się w GTA Online za pomocą konta powiązanego z GTA+ przed 8 listopada, godz. 23:59 czasu ET. Obowiązują dodatkowe warunki, dostępne na stronie {FaqLink}.","engagement_link_account":"Powiąż inne konto","engagement_link_console_account":"Powiąż konto gracza"},"pt-BR":{"engagement_faq":"PERGUNTAS FREQUENTES","engagement_faqs":"Perguntas Frequentes","engagement_legal_text":"Oferta válida até 9 de outubro às 23:59 ET (10 de outubro às 00:59 BRT). A oferta será aplicada à conta do GTA Online vinculada à sua Afiliação GTA+ e é limitada a um resgate por Afiliação GTA+. Após reivindicar, acesse o GTA Online com a sua conta do jogo com GTA+ antes de 8 de novembro às 23:59 ET (9 de novembro às 00:59 BRT) para resgatar a oferta. Aplicam-se condições adicionais. Para ver todos os termos, veja as {FaqLink}.","engagement_link_account":"Vincular outra conta","engagement_link_console_account":"Vincular conta do jogo"},"ru-RU":{"engagement_faq":"РАЗДЕЛЕ ЧАСТО ЗАДАВАЕМЫХ ВОПРОСОВ","engagement_faqs":"разделе часто задаваемых вопросов","engagement_legal_text":"Предложение действует до 23:59 (ET) 9 октября. Предложение действительно для игровой учетной записи GTA Online, связанной с вашей подпиской GTA+. Предложением можно воспользоваться не более одного раза на подписку GTA+. Чтобы воспользоваться предложением, после нажатия на «Получить» необходимо войти в GTA Online с игровой учетной записью GTA+ до 23:59 (ET) 8 ноября. Регламентируется дополнительными условиями. С полным списком условий можно ознакомиться в {FaqLink}.","engagement_link_account":"Привязать другую учетную запись","engagement_link_console_account":"Привязать игровую учетную запись"},"zh-CN":{"engagement_faq":"常见问题","engagement_faqs":"常见问题","engagement_legal_text":"福利截至美国东部时间 10 月 9 日晚上 11:59。福利仅适用于绑定了您 GTA+ 会员的 GTA 在线模式游戏账户，而且每个 GTA+ 会员仅限领取一次。领取后务必使用您的 GTA+ 游戏账户（于美国东部时间 11 月 8 日晚上 11:59 之前）登录 GTA 在线模式，以兑换福利。附加条款适用，请前往 {FaqLink} 查看完整条款。","engagement_link_account":"绑定另一个账户","engagement_link_console_account":"绑定游戏账户"},"zh-TW":{"engagement_faq":"常見問答","engagement_faqs":"常見問答","engagement_legal_text":"活動將於美東時間 10 月 9 日晚間 11 點 59 分結束。須擁有 GTA 線上模式遊戲帳戶連結至您的 GTA+ 會籍，每個 GTA+ 會籍僅限兌換一次。如要領取優惠，必須在美東時間 11 月 8 日晚間 11 點 59 分前使用您的 GTA+ 遊戲帳戶登入 GTA 線上模式進行兌換。適用額外條款，完整條款請參閱{FaqLink}。","engagement_link_account":"連結另一個帳戶","engagement_link_console_account":"連結遊戲帳戶"}}'),
        wn = (0, o.defineMessages)({
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
      var yn = a(92440);
      const jn = ({
        legalText: e
      }) => (0, r.jsx)("div", {
        dangerouslySetInnerHTML: {
          __html: e
        }
      });
      var Cn = "_3rocp6l",
        Nn = (0, y.c)({
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
        Sn = "_3rocp6m",
        Rn = "_3rocp6i",
        In = "_3rocp6g",
        En = "_3rocp65",
        zn = "_3rocp66",
        Tn = "_3rocp6q",
        An = "_3rocp6j",
        Mn = "_3rocp63",
        Dn = "_3rocp68",
        Pn = "_3rocp6z",
        Ln = "_3rocp6a",
        Bn = "_3rocp6h",
        Gn = "_3rocp67";
      const Vn = ({
        content: e,
        loggedIn: t,
        addClaim: a,
        signin: s,
        landingSlide: n
      }) => (0, r.jsxs)("div", {
        className: S()(En, "_3rocp6c _3rocp6b", "onScreen" === n ? Dn : "", "hidden" === n ? zn : "", "visible" === n ? Gn : ""),
        children: [e?.introScreen?.image?.sources?.mobile && (0, r.jsx)("img", {
          src: e.introScreen.image.sources.mobile,
          className: Mn,
          alt: e.introScreen.image.alt
        }), (0, r.jsxs)("div", {
          className: Bn,
          children: [(0, r.jsx)("div", {
            className: Ln,
            children: (0, r.jsxs)("div", {
              className: Cn,
              children: [(0, r.jsx)(l.Badge.Root, {
                className: "_3rocp6k",
                appearance: "primary",
                children: (0, r.jsx)(l.Badge.Label, {
                  children: e.introScreen.tag
                })
              }), (0, r.jsxs)("div", {
                className: S()(Sn, "override"),
                children: [(0, r.jsx)(l.Heading, {
                  level: 3,
                  children: e.introScreen.headline
                }), (0, r.jsx)("div", {
                  dangerouslySetInnerHTML: {
                    __html: e.introScreen.body
                  }
                })]
              }), (0, r.jsx)("div", {
                className: In,
                children: (0, r.jsx)(l.Button, {
                  className: Pn,
                  appearance: "primary",
                  size: "MD",
                  onClick: t ? a : s,
                  children: t ? e.introScreen.btnText.loggedIn : e.introScreen.btnText.loggedOut
                })
              })]
            })
          }), (0, r.jsx)("div", {
            className: Rn,
            children: (0, r.jsx)("div", {
              className: S()(An, "override"),
              children: (0, r.jsx)(jn, {
                legalText: e.legalText
              })
            })
          })]
        })]
      });
      var On = a(24162),
        qn = a(85827),
        Fn = a(22230),
        Un = a(73005);
      const Xn = "rockstargames-sites-rockstargamesb2d75ee6d468c7fde9ad28ba90ca2804",
        $n = (0, n.forwardRef)(function({
          children: e,
          className: t,
          testId: a,
          ...s
        }, n) {
          const i = (0, v.v6)(s, {
            "data-testid": a,
            className: S()("rockstargames-sites-rockstargamesd738b88fa09e0960678501900af6dae1", t)
          });
          return (0, r.jsx)("div", {
            ref: n,
            ...i,
            children: e
          })
        }),
        Hn = (0, n.forwardRef)(function({
          src: e,
          alt: t,
          testId: s,
          ...i
        }, o) {
          const [c, l] = (0, n.useState)(e), d = (0, v.v6)(i, {
            className: "rockstargames-sites-rockstargamesa0e1daf7fc3c029353d5ef13f291348f",
            "data-testid": s
          });
          return e ? (0, r.jsx)("div", {
            ref: o,
            ...d,
            children: (0, r.jsx)("img", {
              className: Xn,
              src: c,
              alt: t,
              onError: () => l(a(14804))
            })
          }) : (0, r.jsx)("div", {
            ref: o,
            ...d,
            children: (0, r.jsx)("img", {
              className: Xn,
              src: a(14804),
              alt: t
            })
          })
        }),
        Wn = (0, n.forwardRef)(function({
          asChild: e,
          testId: t,
          className: a,
          ...s
        }, n) {
          const i = e ? g.DX : "div",
            o = (0, v.v6)(s, {
              className: S()("rockstargames-sites-rockstargamesfbe57172570573357e040787d9307835", a),
              "data-testid": t
            });
          return (0, r.jsx)(i, {
            ref: n,
            ...o
          })
        }),
        Kn = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, s) {
          const n = (0, v.v6)(a, {
            className: "rockstargames-sites-rockstargamesd9b917b7fb3a2b20d4af0d526ddbb8ff",
            "data-testid": t
          });
          return (0, r.jsx)("div", {
            ref: s,
            ...n,
            children: e
          })
        }),
        Yn = ({
          testId: e,
          ...t
        }) => {
          const a = (0, v.v6)(t, {
            "data-testid": e
          });
          return (0, r.jsx)(Fn.Ay, {
            ...a
          })
        },
        Qn = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, s) {
          const n = (0, v.v6)(a, {
            "data-testid": t
          });
          return (0, r.jsx)("div", {
            className: "rockstargames-sites-rockstargamescd5023e2864561e1f962ac435e70156b",
            "data-size": "small",
            ...n,
            ref: s,
            children: e
          })
        }),
        Zn = (0, n.forwardRef)(function({
          testId: e,
          children: t,
          ...a
        }, s) {
          const n = (0, v.v6)(a, {
            "data-testid": e
          });
          return (0, r.jsx)("div", {
            ...n,
            ref: s,
            children: t
          })
        }),
        Jn = ({
          testId: e,
          ...t
        }) => {
          const a = (0, v.v6)(t, {
            "data-testid": e
          });
          return (0, r.jsx)(Un.L, {
            ...a
          })
        };
      var ei = a(14200);
      const ti = ({
        content: e,
        successSlide: t,
        characterList: a,
        linkAccountUrl: s,
        linkMoreAccounts: i,
        linkAccountBtn: o
      }) => {
        const c = (0, n.createRef)(),
          d = (0, n.createRef)(),
          u = (0, n.createRef)(),
          [m, _] = (0, n.useState)(),
          [f, g] = (0, n.useState)(!1),
          [p, b] = (0, n.useState)(),
          [h, v] = (0, n.useState)(!1),
          [k, x] = (0, n.useState)(!0);
        return (0, n.useEffect)(() => {
          const e = () => {
            c?.current && g(c?.current?.scrollWidth > c?.current?.offsetWidth)
          };
          return e(), window.addEventListener("resize", e), () => {
            window.removeEventListener("resize", e)
          }
        }, [c]), (0, n.useEffect)(() => {
          _({
            nextEl: d?.current,
            prevEl: u?.current
          })
        }, [u?.current, d?.current]), (0, r.jsxs)("div", {
          className: S()(En, "_3rocp6d _3rocp6b", "onScreen" === t ? Dn : "", "hidden" === t ? zn : "", "visible" === t ? Gn : ""),
          children: [e?.introScreen?.image?.sources?.mobile && (0, r.jsx)("img", {
            src: e.introScreen.image.sources.mobile,
            className: Mn,
            alt: e.introScreen.image.alt
          }), (0, r.jsxs)("div", {
            className: Bn,
            children: [(0, r.jsxs)("div", {
              className: Cn,
              children: [(0, r.jsx)("div", {
                className: Nn({
                  slideName: "success"
                }),
                children: (0, r.jsx)(Ua.Check, {
                  className: Tn,
                  label: "succcess check label"
                })
              }), (0, r.jsxs)("div", {
                className: S()(Sn, "override"),
                children: [(0, r.jsx)(l.Heading, {
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
                  ref: c,
                  children: (0, r.jsx)(On.RC, {
                    mousewheel: {
                      releaseOnEdges: !0
                    },
                    touchReleaseOnEdges: !0,
                    loop: !1,
                    grabCursor: f,
                    slidesPerView: "auto",
                    speed: 700,
                    slidesOffsetAfter: 100,
                    navigation: m,
                    modules: [qn.Vx, qn.Jq],
                    onInit: e => {
                      b(e)
                    },
                    onSlideChange: e => {
                      v(e?.isEnd), x(e?.isBeginning)
                    },
                    children: a.map(e => (0, r.jsx)(On.qr, {
                      tabIndex: 0,
                      children: (0, r.jsxs)($n, {
                        className: "_3rocp6x",
                        children: [(0, r.jsx)(Hn, {
                          src: e.mugshotUrl
                        }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`), (0, r.jsxs)(Wn, {
                          children: [(0, r.jsx)(Kn, {
                            children: (0, r.jsx)(Yn, {
                              tagSize: Fn.YT.large,
                              platform: e.platform
                            })
                          }), (0, r.jsx)(Qn, {
                            children: e.platformUsername
                          }), (0, r.jsx)(Zn, {
                            children: (0, r.jsx)(Jn, {
                              rank: e.stats.overview.rank.value
                            })
                          })]
                        })]
                      })
                    }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`))
                  })
                }), (0, r.jsx)(l.Button, {
                  size: "SM",
                  appearance: "ghost",
                  iconRight: "ArrowRight",
                  iconRightLabel: "",
                  asChild: !0,
                  children: (0, r.jsx)(ei.A, {
                    className: "_3rocp6r",
                    to: s,
                    onClick: i,
                    children: o
                  })
                }), (0, r.jsx)(l.Button, {
                  className: "_3rocp6u",
                  size: "SM",
                  appearance: "ghost",
                  iconRight: "ArrowLeft",
                  iconRightLabel: "Previous",
                  ref: u,
                  onClick: () => {
                    p?.slidePrev()
                  },
                  isDisabled: k,
                  "data-hidden": !f
                }), (0, r.jsx)(l.Button, {
                  className: "_3rocp6v",
                  size: "SM",
                  appearance: "ghost",
                  iconRight: "ArrowRight",
                  iconRightLabel: "Previous",
                  ref: d,
                  onClick: () => {
                    p?.slideNext()
                  },
                  isDisabled: h,
                  "data-hidden": !f
                })]
              })]
            }), (0, r.jsx)("div", {
              className: Rn,
              children: (0, r.jsx)("div", {
                className: S()(An, "override"),
                children: (0, r.jsx)(jn, {
                  legalText: e.legalText
                })
              })
            })]
          })]
        })
      };
      a(2765);
      const ai = {
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
        ri = ({
          buttonText: e = "",
          link: t = "",
          platform: s = "",
          target: n = null,
          onClick: i,
          tabIndex: o,
          ...c
        }) => {
          const l = n ?? (t.startsWith(document.location.origin) ? "_self" : "_blank"),
            d = [ai.platformButton, ai[s]].join(" "),
            m = s ? a(5328)(`./${s}.svg`) : null,
            _ = (0, r.jsxs)(r.Fragment, {
              children: [m ? (0, r.jsx)("img", {
                src: m,
                alt: e
              }) : "", !m && (0, r.jsx)("div", {
                className: ai.buttonText,
                children: e
              })]
            });
          return t ? t.startsWith("http") ? (0, r.jsx)("a", {
            href: t,
            className: d,
            target: l,
            onClick: i,
            "aria-label": e,
            tabIndex: o,
            ...c,
            children: _
          }) : (0, r.jsx)(u.NavLink, {
            className: d,
            onClick: i,
            to: t,
            "aria-label": e,
            ...c,
            children: _
          }) : (0, r.jsx)("button", {
            className: d,
            onClick: i,
            "aria-label": e,
            tabIndex: o,
            ...c,
            children: _
          })
        },
        si = ({
          content: e,
          unlinkedSlide: t,
          returnUrl: a,
          giftId: s
        }) => {
          const n = (0, i.useRockstarTokenPing)(),
            {
              track: o
            } = (0, b.useGtmTrack)(),
            c = async e => {
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
                window.location.href = e.href
              }
            };
          return (0, r.jsxs)("div", {
            className: S()(En, "_3rocp6e _3rocp6b", "onScreen" === t ? Dn : "", "hidden" === t ? zn : "", "visible" === t ? Gn : ""),
            children: [e?.introScreen?.image?.sources?.mobile && (0, r.jsx)("img", {
              src: e.introScreen.image.sources.mobile,
              className: Mn,
              alt: e.introScreen.image.alt
            }), (0, r.jsxs)("div", {
              className: Bn,
              children: [(0, r.jsx)("div", {
                className: Ln,
                children: (0, r.jsxs)("div", {
                  className: Cn,
                  children: [(0, r.jsx)("div", {
                    className: Nn({
                      slideName: "error"
                    }),
                    children: (0, r.jsx)(Ua.TriangleAlert, {
                      className: Tn,
                      label: ""
                    })
                  }), (0, r.jsxs)("div", {
                    className: S()(Sn, "override"),
                    children: [(0, r.jsx)(l.Heading, {
                      level: 3,
                      children: e.unlinkedScreen.headline
                    }), (0, r.jsx)("div", {
                      dangerouslySetInnerHTML: {
                        __html: e.unlinkedScreen.body
                      }
                    })]
                  }), (0, r.jsxs)("div", {
                    className: "_3rocp610",
                    children: [(0, r.jsx)(ri, {
                      buttonText: (0, i.findPlatform)("xbox")?.friendlyName,
                      platform: "xbox",
                      target: "_blank",
                      onClick: () => c("xbox"),
                      tabIndex: 0
                    }), (0, r.jsx)(ri, {
                      buttonText: (0, i.findPlatform)("ps")?.friendlyName,
                      platform: "ps",
                      target: "_blank",
                      onClick: () => c("ps"),
                      tabIndex: 0
                    })]
                  })]
                })
              }), (0, r.jsx)("div", {
                className: Rn,
                children: (0, r.jsx)("div", {
                  className: S()(An, "override"),
                  children: (0, r.jsx)(jn, {
                    legalText: e.legalText
                  })
                })
              })]
            })]
          })
        },
        ni = ({
          errorSlide: e,
          content: t
        }) => (0, r.jsxs)("div", {
          className: S()(En, "_3rocp6f _3rocp6b", "onScreen" === e ? Dn : "", "hidden" === e ? zn : "", "visible" === e ? Gn : ""),
          children: [t?.introScreen?.image?.sources?.mobile && (0, r.jsx)("img", {
            src: t.introScreen.image.sources.mobile,
            className: Mn,
            alt: t.introScreen.image.alt
          }), (0, r.jsxs)("div", {
            className: Bn,
            children: [(0, r.jsx)("div", {
              className: Ln,
              children: (0, r.jsxs)("div", {
                className: Cn,
                children: [(0, r.jsx)("div", {
                  className: Nn({
                    slideName: "error"
                  }),
                  children: (0, r.jsx)(Ua.TriangleAlert, {
                    className: Tn,
                    label: ""
                  })
                }), (0, r.jsxs)("div", {
                  className: S()(Sn, "override"),
                  children: [(0, r.jsx)(l.Heading, {
                    level: 3,
                    children: t.errorScreen.headline
                  }), (0, r.jsx)("div", {
                    dangerouslySetInnerHTML: {
                      __html: t.errorScreen.body
                    }
                  })]
                }), (0, r.jsx)("div", {
                  className: In,
                  children: (0, r.jsx)(l.Button, {
                    className: Pn,
                    appearance: "primary",
                    size: "MD",
                    onClick: () => window.location.reload(),
                    children: t.errorScreen.btnText
                  })
                })]
              })
            }), (0, r.jsx)("div", {
              className: Rn,
              children: (0, r.jsx)("div", {
                className: S()(An, "override"),
                children: (0, r.jsx)(jn, {
                  legalText: t.legalText
                })
              })
            })]
          })]
        });
      var ii = function(e) {
        return e.error = "error", e.landing = "landing", e.success = "success", e.unlinked = "unlinked", e
      }(ii || {});
      const oi = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cb04fb2acd10f43aa501729b4d7d26a8.jpg",
        {
          host: ci
        } = (0, i.getConfigForDomain)(),
        li = (0, o.withIntl)(({
          giftId: e,
          location: t = "gtaplus_site",
          introScreen: a,
          errorScreen: s,
          unlinkedScreen: c,
          successScreen: l,
          jumpLinkId: d,
          legalText: m,
          fontTheme: _ = "chalet",
          usePadding: f = !0
        }) => {
          const g = {
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
                    desktop: (0, yn.useGetCdnSource)(a?.image?.sources?.en_us?.desktop) || null,
                    mobile: (0, yn.useGetCdnSource)(a?.image?.sources?.en_us?.mobile) || null
                  }
                },
                tag: a?.tag || ""
              },
              legalText: m,
              successScreen: {
                body: l?.successContent || "",
                headline: l?.successHeadline || ""
              },
              unlinkedScreen: {
                body: c?.unlinkedContent || "",
                btnText: c?.unlinkedButtonText || "",
                headline: c?.unlinkedHeadline || ""
              }
            },
            [p] = (0, u.useSearchParams)(),
            {
              data: v,
              loggedIn: k
            } = (0, b.useRockstarUser)(),
            x = (0, i.useRockstarTokenPing)(),
            w = `https://${ci}.rockstargames.com/settings/linkedaccounts`,
            y = (0, o.useIntl)(),
            {
              track: j
            } = (0, b.useGtmTrack)(),
            C = (0, n.useRef)(null),
            {
              ref: N,
              inView: R
            } = (0, h.useInView)({
              threshold: .6
            }),
            I = 1280,
            E = (0, n.createRef)(),
            [z, T] = (0, n.useState)(null),
            [A, M] = (0, n.useState)([]),
            [D, P] = (0, n.useState)(!1),
            [L, B] = (0, n.useState)(),
            [G, V] = (0, n.useState)("hidden"),
            [O, q] = (0, n.useState)("hidden"),
            [F, U] = (0, n.useState)("hidden"),
            [X, $] = (0, n.useState)("hidden"),
            [H, W] = (0, n.useState)(!1),
            [K, Y] = (0, n.useState)(ii.landing),
            [Q, Z] = (0, n.useState)(g.introScreen.image.sources.mobile || oi),
            J = `${document.location.pathname}${document.location.search}#${d}`,
            ee = (0, i.usePrevious)(L),
            te = (0, i.usePrevious)(k),
            {
              signInUrl: ae
            } = (0, i.useScAuthLinks)(J),
            re = e => {
              e === ii.landing ? (Y(ii.landing), q("onScreen"), V("hidden"), $("hidden"), U("hidden")) : e === ii.success ? (Y(ii.success), q("offScreen"), V("visible"), setTimeout(() => {
                q("hidden"), $("hidden")
              }, 300), setTimeout(() => {
                V("onScreen")
              }, 100)) : e === ii.error ? (Y(ii.error), q("offScreen"), $("visible"), setTimeout(() => {
                q("hidden")
              }, 300), setTimeout(() => {
                $("onScreen")
              }, 100)) : e === ii.unlinked && (Y(ii.unlinked), q("offScreen"), U("visible"), setTimeout(() => {
                q("hidden"), $("hidden")
              }, 300), setTimeout(() => {
                U("onScreen")
              }, 100))
            };
          return (0, n.useEffect)(() => {
            let e;
            return d && window.location.hash === `#${d}` && C.current && (e = window.setTimeout(() => {
              C.current?.scrollIntoView({
                behavior: "smooth",
                block: "start"
              })
            }, 1e3)), () => window.clearTimeout(e)
          }, [d]), (0, n.useEffect)(() => {
            const e = () => {
                window.innerWidth >= 2560 && "newswire" !== t ? Z(g.introScreen.image.sources.mobile || oi) : Z(g.introScreen.image.sources.desktop || oi)
              },
              a = () => {
                window.innerWidth <= I && !D ? (P(!0), re(K)) : window.innerWidth > I && D && P(!1), e()
              };
            return P(window.innerWidth <= I), e(), window.addEventListener("resize", a), () => {
              window.removeEventListener("resize", a)
            }
          }, [K, D]), (0, n.useEffect)(() => {
            const e = v?.characters?.gtao;
            M(e || [])
          }, [v?.characters?.gtao]), (0, n.useEffect)(() => {
            "boolean" != typeof ee && "boolean" != typeof te || !e || L && k && (async () => {
              try {
                const {
                  result: t
                } = await (0, i.coreScApiFetch)("marketing/engagement/claim/exists", {
                  pingBearer: x,
                  query: {
                    giftUId: e
                  }
                });
                T("boolean" == typeof t && t)
              } catch (e) {
                T(!1)
              }
            })()
          }, [L, k, e]), (0, n.useEffect)(() => {
            "boolean" == typeof k ? k ? B(!0) : (B(!1), q("onScreen")) : B(!0)
          }, [k]), (0, n.useEffect)(() => {
            "boolean" == typeof z && v?.accountSynced && B(!1)
          }, [z, v?.accountSynced, B]), (0, n.useEffect)(() => {
            L || (async () => {
              A.length > 0 && z ? re(ii.success) : re(z ? ii.unlinked : ii.landing)
            })()
          }, [L]), (0, n.useEffect)(() => {
            if (R && !H) {
              if (void 0 === k) return;
              j({
                element_placement: "WOC",
                event: "page_section_impression",
                section_layout: k ? "signed in" : "signed out"
              }), W(!0)
            }
          }, [R, k]), (0, n.useEffect)(() => {
            "onScreen" === G && j({
              element_placement: "WOC",
              event: "alert_update",
              o_id: e,
              text: "Almost there!"
            })
          }, [G]), (0, n.useEffect)(() => {
            "onScreen" === F && j({
              element_placement: "WOC",
              event: "alert_error",
              o_id: e,
              text: "No Qualifying Character Found"
            })
          }, [F]), (0, n.useEffect)(() => {
            "onScreen" === X && j({
              element_placement: "event_label",
              event: "alert_error",
              o_id: e,
              text: "Something went wrong on our end. Please try again in a few minutes."
            })
          }, [X]), (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)("div", {
              className: "_3rocp60",
              "data-font": _,
              "data-use-padding": f,
              ref: C,
              id: d || "",
              children: (0, r.jsxs)(kn.motion.div, {
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
                ref: N,
                children: [(0, r.jsx)("div", {
                  className: "_3rocp62",
                  style: {
                    "--engagement-image": `url(${Q})`
                  }
                }), (0, r.jsx)("div", {
                  className: S()("_3rocp64", L ? "loader" : ""),
                  ref: E,
                  children: L ? (0, r.jsx)("div", {
                    className: "_3rocp6w",
                    children: (0, r.jsx)(vs.A, {
                      type: "SPINNING"
                    })
                  }) : (0, r.jsxs)(r.Fragment, {
                    children: [K === ii.landing && (0, r.jsx)(Vn, {
                      content: g,
                      loggedIn: k,
                      addClaim: async () => {
                        const a = {
                            giftUId: e,
                            location: t,
                            utmCampaign: p.get("utm_campaign"),
                            utmContent: p.get("utm_content"),
                            utmMedium: p.get("utm_medium"),
                            utmSource: p.get("utm_source")
                          },
                          {
                            status: r
                          } = await (0, i.coreScApiFetch)("marketing/engagement/claim/create", {
                            fetchOptions: {
                              method: "POST"
                            },
                            pingBearer: x,
                            query: a
                          }) ?? [];
                        re(r ? ii.success : ii.error), j({
                          element_placement: "WOC",
                          event: "cta_claim",
                          o_id: e,
                          text: "claim now",
                          section_layout: "signed in"
                        })
                      },
                      signin: () => {
                        j({
                          element_placement: "WOC",
                          event: "cta_login",
                          link_url: ae,
                          text: "claim now",
                          section_layout: "signed out"
                        }), window.location.href = ae
                      },
                      landingSlide: O
                    }), K === ii.success && (0, r.jsx)(ti, {
                      content: g,
                      successSlide: G,
                      characterList: A,
                      linkAccountUrl: w,
                      linkMoreAccounts: () => {
                        j({
                          element_placement: "WOC",
                          event: "cta_link_account",
                          link_url: w,
                          text: wn.engagement_link_account.defaultMessage
                        })
                      },
                      linkAccountBtn: y.formatMessage(wn.engagement_link_account)
                    }), K === ii.unlinked && (0, r.jsx)(si, {
                      content: g,
                      unlinkedSlide: F,
                      returnUrl: J,
                      giftId: e
                    }), K === ii.error && (0, r.jsx)(ni, {
                      errorSlide: X,
                      content: g
                    })]
                  })
                })]
              })
            })
          })
        }, xn),
        di = li;
      var ui = a(38997);
      const mi = "WwwWebOfferClaim";
      var _i = a(20517);
      const fi = "RsgContentRating",
        gi = {
          [_e]: ({
            block: e
          }) => {
            const t = e.imageFilesCollection?.items,
              a = e.altText,
              s = me(t?.map(e => e?.context)),
              n = t?.find(e => e.context === s) || t?.[0],
              i = n?.source?.url;
            return t && i && s ? (0, r.jsxs)(ce, {
              children: [t?.map((e, t) => {
                const a = e.sys.id + t,
                  n = e.source?.url,
                  i = ue.get(e?.context || s);
                return n ? (0, r.jsx)(le, {
                  src: n,
                  media: i,
                  width: e.source?.width,
                  height: e.source?.height
                }, a) : null
              }), (0, r.jsx)(de, {
                src: i,
                alt: a
              })]
            }) : null
          },
          [be]: ({
            block: e
          }) => e.source?.url ? (0, r.jsx)(pe, {
            src: e,
            context: e.context
          }) : null,
          [fi]: ({
            block: e
          }) => {
            if (!e) return;
            const {
              titleSlug: t
            } = e;
            return t && (0, r.jsx)(_i.A, {
              titleSlug: t
            })
          },
          [ye]: ({
            block: e
          }) => {
            const {
              trackEvent: t
            } = U();
            if (!e) return null;
            const {
              altText: a,
              backgroundColor: s,
              backgroundImage: n,
              link: i,
              foregroundImage: o
            } = e, l = (0, c.getOptimizedRsgImage)(n, "5:1", {
              preferModernFormat: !0
            });
            return (0, r.jsx)(ve, {
              testId: "www-brand-banner",
              children: (0, r.jsx)(ke, {
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
                children: (0, r.jsxs)(k, {
                  href: i?.url ?? "",
                  children: [(0, r.jsx)(xe, {
                    src: l?.url ?? ""
                  }), o && (0, r.jsx)(we, {
                    src: o,
                    context: "mobile"
                  })]
                })
              })
            })
          },
          [qe]: ({
            block: e
          }) => e ? (0, r.jsx)(Oe, {
            block: e
          }) : null,
          [Je]: ({
            block: e
          }) => {
            const {
              trackEvent: t
            } = U(), {
              landscapeViewportBehavior: a,
              scrimColor: s,
              video: i,
              overlayElements: o,
              playbackBehavior: l
            } = e, {
              primaryAccentColor: d,
              secondaryAccentColor: u
            } = (0, n.useContext)(B), m = (0, ne.Ub)(w.f.landscape), _ = "play_once" === l, f = (0, n.useCallback)(e => t({
              event: "cta_other",
              text: "toggle " + (e ? "play" : "pause"),
              element_placement: "decorative video"
            }), []);
            if (!i) return null;
            const g = i.videoFilesCollection?.items?.find(e => "desktop" === e.context),
              p = i.videoFilesCollection?.items?.find(e => "mobile" === e.context),
              b = m ? g : p,
              h = b?.url ?? b?.upload?.url,
              v = b?.posterImage?.source?.url;
            return (0, r.jsxs)(Ke, {
              playOnce: _,
              landscapeViewportBehavior: a,
              scrimColor: s,
              children: [o && (0, r.jsx)(Ze, {
                children: (0, r.jsx)(c.BlockRenderer, {
                  block: o
                })
              }), h && (0, r.jsx)(Ye, {
                appearance: d ? "accent" : "primary",
                override_backgroundColor: d,
                override_textColor: u,
                onToggle: f
              }), (0, r.jsx)(Qe, {
                src: h,
                poster: v,
                altText: i.posterImage?.altText,
                autoPlay: !0,
                muted: !0
              })]
            })
          },
          [at]: ({
            block: e
          }) => e ? (0, r.jsx)(tt, {
            gradientStyle: e.style || "",
            thickness: e.thickness || "dimensions_25"
          }) : null,
          [xt]: ({
            block: e
          }) => {
            const [t] = (0, o.getLocale)(), a = e.contentCollection?.items, s = a?.map(e => e.tinaId), c = (0, n.useMemo)(() => ((e, t) => {
              const a = ((e, t) => e.reduce((e, a) => e + ((e, t) => `\n    post${e}: post(id_hash: "${e}", locale: "${t}") {\n            ...postFields\n    }\n`)(a, t), ""))(e, t);
              return i.gql`
        ${kt}

        ${r=a,`\nquery NewswirePosts {\n    ${r}\n}`}
    `;
              var r
            })(s, t.iso), [s]), {
              loading: l,
              data: d,
              error: u
            } = (0, i.useQuery)(c, {
              autoSetError: !1
            });
            if (u) return (0, gt.captureMessage)("Failed to load Newswire Unit", gt.Severity.Error), null;
            if (!e) return null;
            const m = s.map(e => ({
              tinaId: e,
              block: d?.[`post${e}`] ? d[`post${e}`] : null
            }));
            return (0, r.jsx)(vt, {
              variant: e.variant,
              stories: m,
              loading: l
            })
          },
          [bt]: ({
            block: e
          }) => {
            const [t] = (0, o.getLocale)(), a = e.tinaId, s = (0, n.useMemo)(() => ((e, t) => {
              const a = ((e, t) => `\n    post${e}: post(id_hash: "${e}", locale: "${t}") {\n            ...postFields\n    }\n`)(e, t);
              return i.gql`
        ${pt}

        ${r=a,`\nquery NewswirePosts {\n    ${r}\n}`}
    `;
              var r
            })(a, t.iso), [a]), {
              loading: c,
              data: l,
              error: d
            } = (0, i.useQuery)(s, {
              autoSetError: !1
            });
            if (d) return (0, gt.captureMessage)("Failed to load Newswire Unit", gt.Severity.Error), null;
            if (!e) return null;
            const u = {
              block: l?.[`post${a}`] ? l[`post${a}`] : null
            };
            return (0, r.jsx)(ft, {
              loading: c,
              data: u.block,
              layout: "secondary",
              aspect: "wide"
            })
          },
          [ha]: ({
            block: e
          }) => (0, r.jsx)(O.Provider, {
            value: {
              analyticsData: {
                element_placement: `featured game section: ${e.game?.title}`
              }
            },
            children: (0, r.jsx)(ba, {
              block: e
            })
          }),
          [Ra]: ({
            block: e
          }) => {
            const {
              contrastMode: t
            } = (0, s.DP)(), {
              colorMode: a
            } = (0, n.useContext)(B);
            if (!e) return;
            const {
              contentCollection: i,
              gap: o,
              theme: c
            } = e;
            if (!i?.items?.length) return null;
            const l = e.theme?.colorMode ?? a,
              d = (e => {
                if (!e) return "";
                const t = e?.replace("gap_", "");
                return x.LU.global.spacing.gap[t] ? x.LU.global.spacing.gap[t] : ""
              })(o);
            return (0, r.jsx)(G, {
              theme: c,
              children: (0, r.jsx)(ja, {
                gap: d,
                className: (0, L.m)(l ?? "dark", t),
                children: i?.items.map(e => (0, r.jsx)(Sa, {
                  contentCollection: e.contentCollection,
                  layout: e.layout
                }, e.sys.id))
              })
            })
          },
          [_r]: ({
            block: e
          }) => (0, r.jsx)(O.Provider, {
            value: {
              analyticsData: {
                element_placement: "featured content hero carousel"
              }
            },
            children: (0, r.jsx)(mr, {
              block: e
            })
          }),
          [hr]: ({
            block: e
          }) => {
            const {
              blockPosition: t
            } = (0, n.useContext)(c.BlockRendererContext), a = (0, ne.Ub)(w.f.desktopSmallAndLarger);
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
            } [o || "MD"] - (a ? 1 : 0), f = {
              "body-xs": "XS",
              "body-sm": "SM",
              "body-md": "MD",
              "body-lg": "LG"
            } [u ?? "body-md"];
            return (0, r.jsxs)(gr, {
              children: [(0, r.jsx)(pr, {
                children: (0, r.jsx)(c.BlockRenderer, {
                  block: s,
                  blockPosition: t
                })
              }), (0, r.jsxs)(br, {
                textAlignment: m,
                children: [i && (0, r.jsx)(l.Heading, {
                  level: _,
                  asChild: !0,
                  children: (0, r.jsx)("h3", {
                    className: "_1wn664h2",
                    children: i
                  })
                }), d && (0, r.jsx)(c.RsgMdTextComponent, {
                  markdown: d,
                  bodySize: f
                })]
              })]
            })
          },
          [xr]: ({
            block: e
          }) => {
            if (e) return (0, r.jsx)(kr, {
              block: e
            })
          },
          [Br]: ({
            block: e
          }) => {
            const {
              trackEvent: t
            } = U(), {
              blockPosition: a
            } = (0, n.useContext)(c.BlockRendererContext), s = (e, {
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
              desktopAspectRatio: l = "16/9"
            } = e, d = i?.items ?? [], u = d.map(t => ({
              label: t.title,
              analyticsData: "analyticsData" in t ? t.analyticsData : e.analyticsData
            }));
            return (0, r.jsxs)(Pr, {
              items: d,
              children: [(0, r.jsx)(Ar, {
                mobileAspectRatio: o,
                desktopAspectRatio: l,
                children: !!d.length && d.map((e, t) => (0, r.jsx)(Dr, {
                  index: t,
                  children: (0, r.jsx)(gr, {
                    children: (0, r.jsx)(pr, {
                      children: (0, r.jsx)(c.BlockRenderer, {
                        block: e.image,
                        blockPosition: a
                      })
                    })
                  })
                }, e?.sys?.id))
              }), !!d.length && (0, r.jsx)(Er, {
                children: u.map((e, t) => (0, r.jsx)(Tr, {
                  appearance: "ghost",
                  index: t,
                  onClick: s(t, e),
                  children: e.label
                }, e.label))
              })]
            })
          },
          [Yr]: ({
            block: e
          }) => (0, r.jsx)(O.Provider, {
            value: {
              analyticsData: {
                element_placement: "images marquee section"
              }
            },
            children: (0, r.jsx)(Kr, {
              block: e
            })
          }),
          [Zr]: ({
            block: e
          }) => {
            const t = (0, n.useContext)(c.BlockRendererContext),
              {
                blockPosition: a
              } = t,
              {
                trackEvent: s
              } = U(),
              {
                primaryAccentColor: i,
                secondaryAccentColor: o
              } = (0, n.useContext)(B),
              l = () => {
                let t = "";
                return e.image?.source?.url && (t = new URL(e.image.source.url).pathname.split("/").pop() ?? ""), {
                  card_id: e.sys.id,
                  card_name: t,
                  position: a?.blockIndex && Number.isFinite(a.blockIndex) ? a.blockIndex + 1 : void 0
                }
              };
            if (!e?.image) return null;
            const {
              image: d,
              caption: u,
              downloadButton: m,
              thumbnailAspectRatio: _,
              thumbnailObjectPosition: f,
              zoomControls: g
            } = e, p = (0, c.getOptimizedRsgImage)(d, d.context, {
              preferModernFormat: !0
            });
            return (0, r.jsxs)(Qr.Root, {
              altText: d?.altText || "",
              onOpenChange: e => {
                e && window.dispatchEvent(new CustomEvent("header:hideNav", {
                  detail: {
                    isHidden: !0
                  }
                }))
              },
              children: [(0, r.jsxs)(Qr.Trigger, {
                className: "_1ynyi8s0",
                style: {
                  aspectRatio: _,
                  ...(0, x.DI)({
                    [Qr.CssVars.TriggerBorder]: i,
                    [Qr.CssVars.TriggerIconBg]: i,
                    [Qr.CssVars.TriggerIconFg]: o,
                    [Qr.CssVars.TriggerIconBgActive]: i,
                    [Qr.CssVars.TriggerIconFgActive]: o
                  })
                },
                onClick: () => {
                  s({
                    event: "card_click",
                    ...l()
                  }, e)
                },
                children: [(0, r.jsx)(Qr.Thumbnail, {
                  src: d?.source?.url,
                  srcSet: p?.srcSet,
                  style: {
                    objectPosition: f
                  }
                }), (0, r.jsx)(Qr.OpenIcon, {
                  className: "_1ynyi8s2",
                  asChild: !0,
                  children: (0, r.jsx)(Ua.Maximize2, {
                    label: ""
                  })
                })]
              }), (0, r.jsxs)(Qr.Portal, {
                children: [(0, r.jsx)(Qr.Overlay, {}), (0, r.jsxs)(Qr.Content, {
                  children: [(0, r.jsx)(Qr.ZoomPan, {
                    children: (0, r.jsx)(Qr.Image, {
                      className: "_1ynyi8s1",
                      src: d?.source?.url
                    })
                  }), (0, r.jsxs)(Qr.Controls, {
                    children: [u && (0, r.jsx)(Qr.Caption, {
                      children: u
                    }), (0, r.jsx)(Qr.Close, {
                      onPress: () => {
                        s({
                          event: "modal_close",
                          ...l()
                        }, e)
                      }
                    }), g && (0, r.jsx)(Qr.Zoom, {}), m && (0, r.jsx)(Qr.Download, {})]
                  })]
                })]
              })]
            })
          },
          [Jr]: ({
            block: e
          }) => {
            const {
              trackEvent: t
            } = U(), a = e?.image?.imageFilesCollection?.items, s = e?.image?.altText, n = me(a?.map(e => e?.context)), i = a?.find(e => e.context === n) || a?.[0], o = i?.source?.url, c = e.link?.url;
            return a && o && n && c ? (0, r.jsx)("div", {
              className: "_1818zk50",
              children: (0, r.jsx)(k, {
                href: c,
                className: "_1818zk51",
                onClick: () => {
                  t({
                    event: "cta_other"
                  }, e)
                },
                children: (0, r.jsxs)(ce, {
                  children: [a?.map((e, t) => {
                    const a = e.sys.id + t,
                      s = e.source?.url,
                      i = ue.get(e?.context || n);
                    return s ? (0, r.jsx)(le, {
                      src: s,
                      media: i,
                      width: e.source?.width,
                      height: e.source?.height
                    }, a) : null
                  }), (0, r.jsx)(de, {
                    src: o,
                    alt: s
                  })]
                })
              })
            }) : null
          },
          [ls]: ({
            block: e
          }) => e ? (0, r.jsx)(ss, {
            block: e
          }) : null,
          [Ns]: ({
            block: e,
            renderSectionWrapper: t
          }) => {
            const a = (0, o.useIntl)(),
              s = (0, i.useRockstarTokenPing)(),
              {
                loggedIn: c,
                data: l,
                loading: d
              } = (0, b.useRockstarUser)(),
              m = (0, u.useNavigate)(),
              [{
                iso: _
              }] = (0, o.getLocale)(),
              f = (0, i.toScLocaleString)(_),
              {
                login: g
              } = (0, i.getConfigForDomain)(),
              p = (0, bs.A)(),
              [h] = (0, u.useSearchParams)(),
              v = "true" === h.get("marketing"),
              k = {
                lang: f,
                location: location.pathname,
                login: g,
                navigate: m,
                sc: p.sites.socialClub
              },
              x = {
                ...l,
                isFromAuth: v,
                loggedIn: c,
                pingBearer: s,
                userLoading: d
              },
              w = Cs(k, x),
              {
                dialog: y,
                urls: j,
                handleSubscribeButton: C,
                isButtonLoading: N,
                isLoading: S,
                isSubscribed: R,
                setShowDialog: I,
                showDialog: E
              } = w;
            let z = "loading";
            z = null === c || c && S ? "loading" : "ready";
            const T = "ready" === z,
              A = "ready" == (d ? "loading" : "ready") && c && T && !0 === R;
            if ((0, n.useEffect)(() => {
                t && t(E || !A)
              }, [t, E]), !e) return null;
            const M = y?.buttons || [{
                buttonText: a.formatMessage(ks.ns_ok_button_text),
                onClick: () => {
                  I(!1)
                },
                testId: "ok-btn",
                style: "secondary"
              }, {
                buttonText: y?.showManagePreferences ? a.formatMessage(ks.ns_manage_prefs_button_text) : "",
                isLink: !0,
                link: j.preferences,
                testId: "preferences-btn",
                style: "ghost"
              }],
              D = c && !T;
            return (0, r.jsxs)(r.Fragment, {
              children: [!A && (0, r.jsx)(ds, {
                children: D ? (0, r.jsx)(vs.A, {}) : (0, r.jsxs)(r.Fragment, {
                  children: [(0, r.jsx)(us, {
                    asChild: !0,
                    children: e.image && (0, r.jsx)(pe, {
                      src: e.image,
                      context: "mobile"
                    })
                  }), (0, r.jsxs)(ms, {
                    children: [e.textContent && (0, r.jsx)(gs, {
                      markdown: e.textContent
                    }), (0, r.jsx)(ps, {
                      onClick: C,
                      isDisabled: N,
                      children: e.cta?.text
                    })]
                  })]
                })
              }), y && (0, r.jsx)(hs.A, {
                icon: y.icon,
                title: a.formatMessage(y.heading),
                secondaryText: a.formatMessage(y.bodyText),
                closeOnOutsideClick: y.closeOnOutsideClick,
                buttons: M,
                showDialog: E,
                onClose: () => I(!1)
              })]
            })
          },
          [Us]: ({
            block: e
          }) => e ? (0, r.jsx)(Fs, {
            block: e
          }) : (console.log("no data"), null),
          [F]: ({
            block: e
          }) => (0, r.jsx)(O.Provider, {
            value: {
              analyticsData: e.analyticsData
            },
            children: (0, r.jsx)(q, {
              block: e
            })
          }),
          [Ys]: ({
            block: e
          }) => {
            if (!e) return null;
            const {
              cta: t
            } = e;
            return (0, r.jsx)(Xs, {
              children: (0, r.jsxs)($s, {
                children: [(0, r.jsxs)(Hs, {
                  children: [(0, r.jsx)(Ws, {
                    altText: e.title
                  }), (0, r.jsx)(Ks, {
                    children: e.description
                  })]
                }), t && (0, r.jsx)(ra, {
                  block: t,
                  size: "MD"
                })]
              })
            })
          },
          [un]: ({
            block: e
          }) => {
            const {
              primaryAccentColor: t,
              headerTextColor: a
            } = (0, n.useContext)(B);
            if (!e) return null;
            const {
              alignment: s,
              badge: i,
              eyebrow: o,
              eyebrowSize: l,
              header: d,
              headerSize: u,
              body: m,
              bodySize: _,
              ctasCollection: f,
              footnote: g,
              headerTextWrap: p,
              bodyTextWrap: b
            } = e;
            return (0, r.jsxs)(rn, {
              align: s || "left",
              children: [e.badge && (0, r.jsx)(sn, {
                children: i
              }), (0, r.jsxs)(nn, {
                bodyTextWrap: b,
                children: [o && (0, r.jsx)(on, {
                  size: l,
                  children: o
                }), d && (0, r.jsx)(cn, {
                  headerSize: u,
                  textColor: a,
                  headerTextWrap: p,
                  children: d
                }), m && (0, r.jsx)(ln, {
                  asChild: !0,
                  children: (0, r.jsx)(c.RsgMdTextComponent, {
                    markdown: m,
                    bodySize: _
                  })
                })]
              }), f && f?.items?.length > 0 && (0, r.jsx)(dn, {
                children: f.items.map(e => (0, r.jsx)(ra, {
                  block: e,
                  backgroundColor: t
                }, e.text))
              }), g && (0, r.jsx)(c.RsgMdTextComponent, {
                markdown: g,
                bodySize: "XS"
              })]
            })
          },
          [pn]: ({
            block: e
          }) => {
            const {
              blockPosition: t
            } = (0, n.useContext)(c.BlockRendererContext);
            if (!e?.content) return null;
            const {
              image: a,
              content: s,
              variant: i
            } = e;
            return (0, r.jsxs)(_n, {
              variant: i ?? "image_right",
              children: [(0, r.jsx)(fn, {
                altText: a?.altText ?? "",
                src: a?.source?.url ?? ""
              }), (0, r.jsx)(gn, {
                children: (0, r.jsx)(c.BlockRenderer, {
                  block: s,
                  blockPosition: t
                })
              })]
            })
          },
          [vn]: ({
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
                    return (0, r.jsx)(hn(), {
                      id: t,
                      autoplay: !0
                    }, e.sys.id)
                  }
                }
              })
            })
          },
          [mi]: ({
            block: e
          }) => {
            const {
              data: t
            } = (0, i.useQuery)(ui.MetaUrlInfo, {
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
            return a ? (0, r.jsx)(di, {
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
            }) : null
          }
        },
        pi = (bi = ({
          slug: e
        }) => {
          const [{
            iso: t
          }] = (0, o.getLocale)();
          let a = e;
          const {
            loading: i,
            data: l
          } = (0, c.useContentfulQuery)({
            query: d.wwwPageQuery,
            variables: {
              slug: a
            }
          }), u = (0, n.useCallback)(() => {
            se.u.refresh()
          }, []);
          return !i && l && l.wwwPageCollection.items[0] ? (0, r.jsx)(s.NP, {
            colorScheme: "dark",
            defaultColorScheme: "dark",
            defaultContrastMode: "normal",
            defaultPlatformScale: "desktop",
            className: "_1dx15kv0",
            locale: t,
            onPlatformScaleChange: u,
            children: (0, r.jsx)(_, {
              children: (0, r.jsx)(c.PageRenderer, {
                data: l.wwwPageCollection.items[0],
                customBlocks: gi,
                children: (0, r.jsx)(ee, {})
              })
            })
          }) : null
        }, (0, o.withIntl)(bi, re));
      var bi
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
          var c = o;
          o = new Set, c.forEach(function(e) {
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
        s = a(62229),
        n = a(95966),
        i = a(20820),
        o = a(4572),
        c = a.n(o);
      const l = ({
          button: e,
          closeDialog: t,
          style: a = "primary"
        }) => {
          const {
            buttonIcon: s,
            buttonText: n,
            extraClasses: o,
            isDisabled: l,
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
            className: c()(o),
            isDisabled: l,
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
          onClose: c = () => {},
          closeOnOutsideClick: u = !0,
          extraClasses: m
        }) => {
          const _ = (0, s.useRef)(null),
            {
              setBodyIsLocked: f
            } = (0, n.useBodyScrollable)("AlertDialog");
          (0, s.useEffect)(() => {
            o && _?.current && (_.current?.showModal?.(), f(!0))
          }, [o]);
          const g = () => {
            f(!1), c(), _.current?.close?.()
          };
          if (o) return (0, r.jsxs)("dialog", {
            ref: _,
            className: d.dialog,
            onClick: e => (e => {
              if (!e.currentTarget) return;
              const t = e.currentTarget.getBoundingClientRect();
              (t.left > e.clientX || t.right < e.clientX || t.top > e.clientY || t.bottom < e.clientY) && u && (f(!1), c(), e.currentTarget.close())
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
              children: i.slice(0, 2).map((e, t) => (0, r.jsx)(l, {
                style: e?.style ?? (0 === t ? "primary" : "secondary"),
                button: e,
                closeDialog: g
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
    68918: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cd57122be57f5e3a9dc4d0a0f2503fb1.svg"
    },
    72408: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => c
      });
      var r = a(42295),
        s = a(4346),
        n = a.n(s);
      const i = JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[300,300,0]},"a":{"k":[0,0,0]},"s":{"k":[244,244,100]}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"k":[100,100]},"p":{"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"tm","s":{"k":[{"i":{"x":[0.439],"y":[1.016]},"o":{"x":[0.561],"y":[0.015]},"n":["0p439_1p016_0p561_0p015"],"t":5,"s":[100],"e":[0]},{"t":33.0000013441176}],"ix":1},"e":{"k":[{"i":{"x":[0.439],"y":[1.017]},"o":{"x":[0.561],"y":[0.016]},"n":["0p439_1p017_0p561_0p016"],"t":0,"s":[100],"e":[0]},{"t":30.0000012219251}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"},{"ty":"st","fillEnabled":true,"c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":16},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"}],"ip":0,"op":900.000036657751,"st":0,"bm":0,"sr":1}],"v":"4.5.3","ddd":0,"ip":1.00000004073083,"op":33.0000013441175,"fr":29.9700012207031,"w":600,"h":600}'),
        o = JSON.parse('{"v":"5.7.3","fr":60,"ip":0,"op":64,"w":300,"h":300,"nm":"Dot_Loading","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"center","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":10,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":22,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":34,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.667,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"right","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":5,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":17,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":29,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.333,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":12,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":24,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0}],"markers":[]}'),
        c = ({
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
        L: () => l
      });
      var r = a(42295),
        s = a(62229),
        n = a(75523);
      var i = a(4572),
        o = a.n(i);
      const c = e => e < 100 ? "#2d6eb9" : e > 99 && e < 500 ? "#b48261" : e > 499 && e < 750 ? "#9699a1" : "#D6B563",
        l = (0, s.forwardRef)(function({
          rank: e,
          size: t = "large",
          className: a,
          alt: s,
          testId: i,
          ...l
        }, d) {
          const u = c(e),
            m = (0, n.v6)(l, {
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
              "data-rank": c(e),
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
        A: () => n,
        C: () => r
      });
      const r = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          circoloco: "circoloco",
          supportNew: "support"
        },
        s = [{
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
        n = () => {
          let e;
          const {
            location: t
          } = window, a = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), r = s.findIndex(t => Object.entries(t.sites).findIndex(([t, r]) => r === a && (e = {
            site: t,
            subDomain: r
          }, !0)) >= 0), n = s[r >= 0 ? r : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...n,
            currentSite: e
          }
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
    89091: () => {},
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
          var c = o;
          o = new Set, c.forEach(function(e) {
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