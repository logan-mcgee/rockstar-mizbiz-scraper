try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2f28d95c-07e7-4496-a5ba-1fa6f7b72c36", e._sentryDebugIdIdentifier = "sentry-dbid-2f28d95c-07e7-4496-a5ba-1fa6f7b72c36")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-gtao-license-plate",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [3822, 4105], {
    1675: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/99e28a3c5885ec460aa556591903f67f.jpg"
    },
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
    6312: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b457cab77cb82e1c05ad12628414576.svg"
    },
    7881: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fcdc388bebc3a656c2584e90c1f4a6bf.png"
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
    8960: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/46a5907832294f4292975a7428408031.png"
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
    10520: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5970684d704507ab7282e32cc69cd04b.png"
    },
    15821: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/129ef1c1a15ffc7afb86ce282e48decb.svg"
    },
    17065: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/676b3908098d8b19f1019ce361af45ec.png"
    },
    17418: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/22c93544bb6cc43f1456250955025b44.png"
    },
    17454: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/318db7582cb10a2b660aafa45a49ec13.jpg"
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
    21022: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c66fbb7c204e32da80ccb1693d15e00.svg"
    },
    21228: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/278e84e5a41407499c43a30f545da3e8.svg"
    },
    22772: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/954d63889440be17e1ebef30b7026369.svg"
    },
    23458: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f00c086b0ccf0f5e143a07d6c397af01.jpg"
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
    25751: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d1525b482fdcab1ad0e483f4346b0f5a.png"
    },
    26151: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b48e041f1412ff62c8a92dc424b59aa5.svg"
    },
    27114: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f698f122632ac925fa54df7fd371035.jpg"
    },
    27351: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/64d281825da1c782681bcc096d693e32.svg"
    },
    28414: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c2acdad576048f5c48b2ee6a2a2a90a3.svg"
    },
    29362: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7ac89f9e00ded04ef4b2dd3eaf3e8734.svg"
    },
    32323: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/703a546f7a5109c1e2af87a212135aad.png"
    },
    33829: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4235e82a6662cc6c700deee2b5aa28b2.jpg"
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
    36855: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bba2f70e014e82b336a9f80625053089.svg"
    },
    39132: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/58af63f198dffe524132d43c57561d1c.jpg"
    },
    40491: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27a26f477c8db29df4ceec4517c7f42b.svg"
    },
    41284: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/310aae02f3b729401148b00e21e63680.png"
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
    47763: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f5f90e389f2e4dbec1782e382c2e0efd.jpg"
    },
    48157: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1a3660d76f39527a79f8a49bb27a74be.svg"
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
    51524: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ca6a8bfc39e4bff84d6f31176074b342.png"
    },
    51575: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dabd13175cc0894dcb3f942d3d2dab86.svg"
    },
    51913: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/01b0cd4466759aa349ac4036594ab6ae.svg"
    },
    52466: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/46a27d8d16855dcc2a217f48243c6d82.svg"
    },
    53207: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e842fb4993c970ad9f99c54f66dc23f1.jpg"
    },
    53365: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/eeeb3b31a594a9c0b399af3296c3caed.jpg"
    },
    54222: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07f9f9e93ec430813e74cbce545962c4.svg"
    },
    56006: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => Ja
      });
      var r = a(42295),
        s = a(62229),
        n = a(81788),
        o = a(51858),
        i = a(3988),
        c = a(54811),
        l = a(9623),
        d = a(2953),
        u = a(74031),
        m = a(16188),
        p = a.n(m),
        g = a(2918),
        f = a(95966),
        b = a(72148),
        h = a(14200),
        y = a(20270),
        v = a(76327);
      class x extends s.Component {
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
            className: "rockstargames-modules-gtao-license-plated5c408a8b618087ef4bb452f96526b2b",
            children: [(0, r.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, r.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      const k = {
          rating: "rockstargames-modules-gtao-license-platec3e95c84902dd75b827d3c95532e22dc",
          text: "rockstargames-modules-gtao-license-platebabdd6ae2ff83f380dadc6982effa011",
          withDescriptors: "rockstargames-modules-gtao-license-plateb98963abfc7a63295bebc6c6d15b391a",
          withOutDescriptors: "rockstargames-modules-gtao-license-plateb6339480b5fd086fb0c025930bfb7dcd"
        },
        _ = (0, n.defineMessages)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            description: "Ratings link alt text",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      var w = a(95520),
        E = a(19732);
      (0, f.importAll)(a(36672));
      const P = ((e, t = null, a = !1) => function(s) {
        return (0, r.jsx)(x, {
          header: t,
          hidden: a,
          children: (0, r.jsx)(e, {
            ...s
          })
        })
      })((0, E.g)((({
        descriptors: e = null,
        footer: t = null,
        href: o,
        img: i = null,
        titleSlug: c = null,
        style: l = {},
        className: d
      }) => {
        const [u, m] = (0, s.useState)(!1), {
          inView: p
        } = (0, v.Wx)({
          threshold: .6
        }), [b, y] = (0, s.useState)({
          ratingDescriptors: e,
          ratingFooter: t,
          ratingImg: i,
          ratingUrl: o
        }), {
          track: x
        } = (0, g.useGtmTrack)(), E = (0, n.useIntl)(), {
          data: P
        } = (0, f.useQuery)(w.GameData, {
          variables: {
            titleSlug: c
          },
          skip: !c
        });
        if ((0, s.useEffect)((() => {
            P && y(P?.game)
          }), [P]), (0, s.useEffect)((() => {
            p && !u && b.img_rating && (x({
              event: "page_section_impression",
              element_placement: "rating"
            }), m(!0))
          }), [p]), !b.ratingImg) return null;
        const S = !!b.ratingDescriptors;
        return (0, r.jsxs)("div", {
          className: [k.rating, S ? k.withDescriptors : k.withOutDescriptors, d || ""].join(" "),
          style: (0, f.safeStyles)(l),
          "data-testid": "rating",
          children: [(0, r.jsx)(h.A, {
            to: b.ratingUrl,
            target: "_blank",
            children: (0, r.jsx)("img", {
              alt: E.formatMessage(_.components_ratings_link_alt, {
                rating: (N = b.ratingImg, N.replace(/_/g, " ").split(".")[0].toUpperCase())
              }),
              src: a(8194)(`./${b.ratingImg}`)
            })
          }), S && (0, r.jsxs)("div", {
            className: k.text,
            children: [(0, r.jsx)("p", {
              className: k.descriptors,
              dangerouslySetInnerHTML: {
                __html: b?.ratingDescriptors?.split(/<br\s?\/?>/).join(", ") || ""
              }
            }), b.ratingFooter && (0, r.jsx)("hr", {}), b.ratingFooter && (0, r.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: b.ratingFooter.replace(/ \//g, ", ")
              }
            })]
          })]
        });
        var N
      })));
      var S = a(13581),
        N = a.n(S);
      const C = e => he.find((({
          id: t
        }) => t === e)),
        I = e => he.find((({
          name: t
        }) => t.toLowerCase() === e.toLowerCase())),
        T = e => e * parseFloat(getComputedStyle(document.documentElement).fontSize),
        R = () => window.innerWidth < ye.lg,
        O = () => window.innerHeight > .75 * window.innerWidth,
        j = () => {
          const e = window.innerWidth;
          switch (!0) {
            case e >= ye.xxl:
              return 25;
            case e >= ye.xl:
              return 30;
            case e >= 1440:
              return 32.5;
            case e >= 1280:
              return 35;
            case e >= ye.lg:
              return 40;
            default:
              return 100
          }
        },
        A = () => {
          const e = window.innerWidth;
          switch (!0) {
            case e >= ye.xl:
              return T(4);
            case e >= 1440:
              return T(3);
            default:
              return T(2)
          }
        },
        V = () => {
          const e = window.innerWidth;
          switch (!0) {
            case e >= ye.xl:
              return 4;
            case e >= 1280:
              return 4.5;
            case e >= ye.lg:
              return 5;
            case e >= ye.md:
            default:
              return 8
          }
        },
        M = (e, t) => e?.plateText && t.length ? !t.some((({
          plateText: t,
          style: a
        }, r) => r && t === e.plateText && a?.id === e?.style?.id)) : !!e?.plateText;

      function L(e) {
        const t = {
          x: 0,
          y: 0,
          z: 0,
          scale: 1
        };
        if (!e) return t;
        const a = window.getComputedStyle(e).transform;
        if ("none" === a || void 0 === a) return t;
        const r = a.includes("3d") ? "3d" : "2d",
          s = a.match(/matrix.*\((.+)\)/);
        let n;
        if (s && (n = s[1].split(", ")), n) {
          if ("2d" === r) return {
            x: n[4],
            y: n[5],
            z: 0,
            scale: n[0]
          };
          if ("3d" === r) return {
            x: n[12],
            y: n[13],
            z: n[14],
            scale: n[0]
          }
        }
        return t
      }

      function z(e, t, a, r, s = {
        x: 0,
        y: 0
      }) {
        const {
          offsetWidth: n
        } = t, {
          columns: o,
          rows: i,
          plateHeight: c,
          plateWidth: l,
          rowGap: d,
          columnGap: u
        } = r.gridOptions, {
          top: m,
          left: p,
          bottom: g
        } = r.gridDimensions.margins.pixels, f = Math.floor(e / o), b = e % o, h = c * i + d * (i - 1), y = l * o + u * (o - 1), v = n - s.x - 2 * p, x = a - s.y - m - g, k = x * (c / h), _ = v * (l / y), w = f * (c + d) / h, E = {
          x: v * (b * (l + u) / y) + p + s.x,
          y: x * w + m + s.y
        };
        return {
          rect: {
            top: E.y,
            left: E.x,
            right: E.x + _,
            bottom: E.y + k,
            center: {
              x: E.x + _ / 2,
              y: E.y + k / 2
            }
          },
          height: k,
          width: _
        }
      }
      const D = (e, t) => {
          t === We.LIST_PLATES && (document.body.style.cursor = "pointer")
        },
        W = e => {
          document.body.style.cursor = "auto", N().to(e.scale, {
            x: 1,
            y: 1,
            z: 1,
            duration: xe.plateHover.duration,
            ease: xe.plateHover.ease
          })
        };

      function Y(e, t) {
        const {
          plateIndex: a,
          timeline: r,
          three: s,
          gridScale: n
        } = e, {
          onComplete: o,
          tweenPosition: c,
          onStart: l,
          is3D: d
        } = t;
        if (Number.isNaN(a) || !s || !r || !n || !s?.controls?.current) return null;
        const {
          scene: u,
          camera: m,
          controls: p
        } = s, g = V(), f = !O() || R() ? g * n : 1.6 * g * n, b = [];
        let h = null;
        u.traverse((e => {
          e.name === Ye.LP && b.push(e), e.userData.index === a && (h = e)
        }));
        const y = new i.Vector3;
        h && h.getWorldPosition(y);
        const v = {
            cameraPosition: {
              start: (new i.Vector3).copy(m.position),
              end: new i.Vector3(y.x, y.y, y.z + f)
            },
            controlsTarget: {
              start: (new i.Vector3).copy(p.current.target),
              end: y
            },
            plateOpacity: b.map(((e, t) => ({
              start: e.material.opacity,
              end: b[t].userData.index === a ? 1 : 0
            })))
          },
          x = {
            current: 0
          };
        let k = 0;
        return t.isResize || (k = R() ? xe.sidebar.mobile.drawer.duration : xe.clickPlate.duration), r.to(x, {
          current: 1,
          duration: k,
          ease: R() ? xe.sidebar.mobile.drawer.ease : xe.clickPlate.ease,
          onUpdate: () => {
            const {
              current: e
            } = x, t = v.cameraPosition.start.clone().lerp(v.cameraPosition.end, e);
            m.position.set(t.x, t.y, t.z);
            const a = v.controlsTarget.start.clone().lerp(v.controlsTarget.end, e);
            p.current.target.x = a.x, p.current.target.y = a.y, p.current.target.z = a.z
          },
          onStart: l ? () => {
            l()
          } : void 0,
          onComplete: o ? () => {
            o(e)
          } : void 0
        }, c || 0), x.current = 0, r.to(x, {
          current: 1,
          duration: R ? xe.sidebar.mobile.drawer.duration : xe.clickPlate.duration,
          ease: R ? xe.sidebar.mobile.drawer.ease : xe.clickPlate.ease,
          onUpdate: () => {
            const {
              current: e
            } = x;
            b.forEach(((t, a) => {
              t.material && d && (t.material.opacity = i.MathUtils.lerp(v.plateOpacity[a].start, v.plateOpacity[a].end, e))
            }))
          }
        }, "<")
      }

      function $() {
        return navigator.userAgent.toLowerCase().indexOf("firefox") > -1
      }
      const H = "GTALicensePlatesRegular",
        U = 620,
        F = a(56453),
        B = "initial",
        G = "top",
        X = "bottom",
        q = "accessiblePlateGrid",
        Z = "canvasWrap",
        K = "confirmContent",
        J = "confirmSidebar",
        Q = "confirmOrderSidebarButtons",
        ee = "confirmOrderSidebarButtonsPortal",
        te = "ctaShader",
        ae = "firstPlateMesh",
        re = "footer",
        se = "loadingScreen",
        ne = "mobileSidebarPortalTarget",
        oe = "newPlateForm",
        ie = "newPlateSidebar",
        ce = "newPlateUI",
        le = "orderBg",
        de = "plateCount",
        ue = "root",
        me = "sidebar",
        pe = "sidebarButtons",
        ge = "sidebarButtonsLoadingAnimation",
        fe = "ui",
        be = "toggleViewButton",
        he = [{
          id: 0,
          name: "eCola",
          displayName: "eCola",
          alphaImageUrl: F,
          albedoImageUrl: a(93505),
          roughnessImageUrl: a(96698),
          bumpImageUrl: a(27114),
          previewUrl: a(91628),
          image: null,
          fontColor: "#FFFFFF",
          fontSize: U,
          fontName: H,
          selected: !1,
          isXmas2023Plate: !0
        }, {
          id: 1,
          name: "sprunk",
          displayName: "Sprunk",
          alphaImageUrl: F,
          albedoImageUrl: a(61918),
          roughnessImageUrl: a(47763),
          bumpImageUrl: a(33829),
          previewUrl: a(7881),
          image: null,
          fontColor: "#FFFFFF",
          fontSize: U,
          fontName: H,
          selected: !1,
          isXmas2023Plate: !0
        }, {
          id: 2,
          name: "BlueWhite2",
          displayName: "Blue on White 2",
          alphaImageUrl: F,
          albedoImageUrl: a(23458),
          roughnessImageUrl: a(64375),
          bumpImageUrl: a(59993),
          previewUrl: a(63149),
          image: null,
          fontColor: "#2C317E",
          fontSize: U,
          fontName: H,
          selected: !1,
          isXmas2023Plate: !1
        }, {
          id: 3,
          name: "YellowBlack",
          displayName: "Yellow on Black",
          alphaImageUrl: F,
          albedoImageUrl: a(39132),
          roughnessImageUrl: a(1675),
          bumpImageUrl: a(59117),
          previewUrl: a(25751),
          image: null,
          fontColor: "#D29D17",
          fontSize: U,
          fontName: H,
          selected: !1,
          isXmas2023Plate: !1
        }, {
          id: 4,
          name: "OrangeBlue",
          displayName: "Orange on Blue",
          alphaImageUrl: F,
          albedoImageUrl: a(89273),
          roughnessImageUrl: a(1675),
          bumpImageUrl: a(59117),
          previewUrl: a(51524),
          image: null,
          fontColor: "#CD7600",
          fontSize: U,
          fontName: H,
          selected: !1,
          isXmas2023Plate: !1
        }, {
          id: 5,
          name: "BlueWhite1",
          displayName: "Blue on White 1",
          alphaImageUrl: F,
          albedoImageUrl: a(53207),
          roughnessImageUrl: a(1675),
          bumpImageUrl: a(59117),
          previewUrl: a(89018),
          image: null,
          fontColor: "#2C317E",
          fontSize: U,
          fontName: H,
          selected: !1,
          isXmas2023Plate: !1
        }, {
          id: 6,
          name: "BlueWhite3",
          displayName: "Blue on White 3",
          alphaImageUrl: F,
          albedoImageUrl: a(53365),
          roughnessImageUrl: a(17454),
          bumpImageUrl: a(56574),
          previewUrl: a(8960),
          image: null,
          fontColor: "#2C317E",
          fontSize: U,
          fontName: H,
          selected: !1,
          isXmas2023Plate: !1
        }],
        ye = {
          sm: 430,
          md: 768,
          lg: 1024,
          xl: 1920,
          xxl: 2560
        },
        ve = {
          saturation: {
            value: 0
          },
          shaderIndex: {
            value: 0
          }
        },
        xe = {
          plateHover: {
            duration: .25,
            ease: S.Power1.easeOut
          },
          clickPlate: {
            duration: .9,
            ease: S.Power4.easeInOut
          },
          deletePlate: {
            duration: .6,
            ease: S.Power4.easeInOut,
            delay: .005
          },
          sidebar: {
            in: {
              duration: .35,
              ease: S.Power2.easeIn,
              delay: .65
            },
            out: {
              duration: .3,
              ease: S.Power2.easeIn,
              delay: 0
            },
            mobile: {
              drawer: {
                duration: .9,
                ease: S.Power4.easeInOut
              },
              drawerSnap: {
                duration: .4,
                ease: S.Power4.easeOut
              },
              fadeHeader: {
                in: {
                  duration: .6,
                  ease: S.Power2.easeInOut,
                  delay: .3
                },
                out: {
                  duration: .7,
                  ease: S.Power2.easeInOut
                }
              },
              footer: {
                in: {
                  duration: .4,
                  ease: S.Cubic.easeIn,
                  delay: .9
                },
                out: {
                  duration: .4,
                  ease: S.Cubic.easeOut
                }
              }
            }
          },
          toggleView: {
            camera: {
              duration: .75,
              ease: S.Cubic.easeInOut
            },
            fadeIn: {
              duration: .5,
              ease: S.Power2.easeIn
            },
            fadeOut: {
              duration: .5,
              ease: S.Power2.easeIn
            },
            reset: {
              duration: .375,
              ease: S.Cubic.easeInOut
            }
          },
          transaction: {
            confirmOrder: {
              duration: .9,
              ease: S.Power3.easeInOut
            },
            fade: {
              in: {
                duration: .4,
                ease: S.Cubic.easeIn
              },
              out: {
                duration: .4,
                ease: S.Cubic.easeOut
              },
              landingPage: {
                duration: 1.15,
                ease: S.Cubic.easeInOut
              }
            }
          },
          plateShimmer: {
            duration: 2,
            ease: S.Power2.easeOut
          },
          accessibilePlate: {
            duration: .5,
            ease: S.Power2.easeIn
          }
        },
        ke = {
          plateView: {
            maxPolarAngle: Math.PI - .9,
            minPolarAngle: .9,
            maxAzimuthAngle: Math.PI / 4,
            minAzimuthAngle: Math.PI / -4
          },
          carView: {
            maxPolarAngle: Math.PI - 1.55,
            minPolarAngle: 1.2,
            maxAzimuthAngle: Math.PI / 4,
            minAzimuthAngle: Math.PI / -4
          }
        },
        _e = -9.72,
        we = 5,
        Ee = -10.68,
        Pe = 10.4,
        Se = 5,
        Ne = 4.52,
        Ce = {
          x: 0,
          y: 14.4,
          z: 4.9
        },
        Ie = -4.52,
        Te = 10,
        Re = 6.8,
        Oe = {
          x: -14.52
        },
        je = -15,
        Ae = 7,
        Ve = 4.52,
        Me = {
          x: 6,
          y: 5,
          z: 5
        },
        Le = .6,
        ze = .4,
        De = .3,
        We = {
          LIST_PLATES: "list",
          VIEW_PLATE: "view",
          NEW_PLATE: "new",
          CONFIRM_ORDER: "confirm-order"
        },
        Ye = {
          LP: "licensePlate",
          LP_GRID: "licensePlateGrid"
        },
        $e = {
          faux: !0,
          index: 0,
          mpPlate: !1,
          noDelete: !1,
          spPlate: !1,
          plateText: "",
          style: I("BlueWhite2"),
          vehicles: []
        },
        He = (0, f.setMakeVarItem)({
          key: "setAccessiblePlates",
          value: (0, f.makeVar)([])
        }),
        Ue = (0, f.setMakeVarItem)({
          key: "setCanvasDimensions",
          value: (0, f.makeVar)(null)
        }),
        Fe = (0, f.setMakeVarItem)({
          key: "setCharacter",
          value: (0, f.makeVar)(null)
        }),
        Be = (0, f.setMakeVarItem)({
          key: "setCurrentView",
          value: (0, f.makeVar)(null)
        }),
        Ge = (0, f.setMakeVarItem)({
          key: "setCurrentPlateIndex",
          value: (0, f.makeVar)(0)
        }),
        Xe = (0, f.setMakeVarItem)({
          key: "setCurrentView",
          value: (0, f.makeVar)(We.LIST_PLATES)
        }),
        qe = (0, f.setMakeVarItem)({
          key: "setDeletedPlateIndex",
          value: (0, f.makeVar)(null)
        }),
        Ze = (0, f.setMakeVarItem)({
          key: "setError",
          value: (0, f.makeVar)(null)
        }),
        Ke = (0, f.setMakeVarItem)({
          key: "setFirstPlateMesh",
          value: (0, f.makeVar)(null)
        }),
        Je = (0, f.setMakeVarItem)({
          key: "setGridScale",
          value: (0, f.makeVar)(1)
        }),
        Qe = (0, f.setMakeVarItem)({
          key: "setGridState",
          value: (0, f.makeVar)(null)
        }),
        et = (0, f.setMakeVarItem)({
          key: "setIs3D",
          value: (0, f.makeVar)(!1)
        }),
        tt = (0, f.setMakeVarItem)({
          key: "setIsMobile",
          value: (0, f.makeVar)(R())
        }),
        at = (0, f.setMakeVarItem)({
          key: "setIsExpanded",
          value: (0, f.makeVar)(!1)
        }),
        rt = (0, f.setMakeVarItem)({
          key: "setIsLoading",
          value: (0, f.makeVar)(!0)
        }),
        st = (0, f.setMakeVarItem)({
          key: "setIsLoggedIn",
          value: (0, f.makeVar)(null)
        }),
        nt = (0, f.setMakeVarItem)({
          key: "setIsOrderConfirmed",
          value: (0, f.makeVar)(!1)
        }),
        ot = (0, f.setMakeVarItem)({
          key: "setIsSceneLoaded",
          value: (0, f.makeVar)(!1)
        }),
        it = (0, f.setMakeVarItem)({
          key: "setIsScrollEnabled",
          value: (0, f.makeVar)(!0)
        }),
        ct = (0, f.setMakeVarItem)({
          key: "setLastScrollY",
          value: (0, f.makeVar)(0)
        }),
        lt = (0, f.setMakeVarItem)({
          key: "setLastView",
          value: (0, f.makeVar)(We.LIST_PLATES)
        }),
        dt = (0, f.setMakeVarItem)({
          key: "setLoginUrl",
          value: (0, f.makeVar)("")
        }),
        ut = (0, f.setMakeVarItem)({
          key: "setPendingOrder",
          value: (0, f.makeVar)(void 0)
        }),
        mt = (0, f.setMakeVarItem)({
          key: "setPlateNumber",
          value: (0, f.makeVar)("")
        }),
        pt = (0, f.setMakeVarItem)({
          key: "setPlates",
          value: (0, f.makeVar)([])
        }),
        gt = (0, f.setMakeVarItem)({
          key: "setPlateTextures",
          value: (0, f.makeVar)([])
        }),
        ft = (0, f.setMakeVarItem)({
          key: "setPlateNumberStatus",
          value: (0, f.makeVar)({
            isValid: !0,
            isMalformed: !1,
            isProfane: !1,
            isReserved: !1,
            statusPlateNumberBasis: ""
          })
        }),
        bt = (0, f.setMakeVarItem)({
          key: "setPlateStyles",
          value: (0, f.makeVar)(he)
        }),
        ht = (0, f.setMakeVarItem)({
          key: "setRealHeight",
          value: (0, f.makeVar)(0)
        }),
        yt = (0, f.setMakeVarItem)({
          key: "setRefsInternal",
          value: (0, f.makeVar)({})
        }),
        vt = (e, t) => {
          const a = {
            ...yt(),
            [e]: t
          };
          yt(a)
        },
        xt = (0, f.setMakeVarItem)({
          key: "setSelectedStyle",
          value: (0, f.makeVar)($e.style?.id)
        }),
        kt = (0, f.setMakeVarItem)({
          key: "setSelectedVehicle",
          value: (0, f.makeVar)(null)
        }),
        _t = (0, f.setMakeVarItem)({
          key: "setShouldForce2D",
          value: (0, f.makeVar)(!!R())
        }),
        wt = (0, f.setMakeVarItem)({
          key: "setShouldRenderScene",
          value: (0, f.makeVar)(!1)
        }),
        Et = (0, f.setMakeVarItem)({
          key: "setThree",
          value: (0, f.makeVar)(null)
        }),
        Pt = (0, f.setMakeVarItem)({
          key: "setVehicles",
          value: (0, f.makeVar)(null)
        }),
        St = (0, f.setMakeVarItem)({
          key: "setXmas23PlatesAllowed",
          value: (0, f.makeVar)(!1)
        }),
        Nt = () => {
          const e = (0, f.useLocale)(),
            {
              login: t
            } = (0, f.getConfigForDomain)(),
            a = (0, f.useReactiveVar)(He),
            r = (0, f.useReactiveVar)(Ue),
            n = (0, f.useReactiveVar)(Fe),
            o = (0, f.useReactiveVar)(Be),
            i = (0, f.useReactiveVar)(Ge),
            c = (0, f.useReactiveVar)(Xe),
            l = (0, f.useReactiveVar)(qe),
            d = (0, f.useReactiveVar)(Ze),
            u = (0, f.useReactiveVar)(Ke),
            m = (0, f.useReactiveVar)(Je),
            p = (0, f.useReactiveVar)(Qe),
            g = (0, f.useReactiveVar)(et),
            b = (0, f.useReactiveVar)(tt),
            h = (0, f.useReactiveVar)(at),
            y = (0, f.useReactiveVar)(rt),
            v = (0, f.useReactiveVar)(st),
            x = (0, f.useReactiveVar)(nt),
            k = (0, f.useReactiveVar)(ot),
            _ = (0, f.useReactiveVar)(it),
            w = (0, f.useReactiveVar)(ct),
            E = (0, f.useReactiveVar)(lt),
            P = (0, f.useReactiveVar)(dt),
            S = (0, f.useReactiveVar)(ut),
            N = (0, f.useReactiveVar)(mt),
            C = (0, f.useReactiveVar)(pt),
            I = (0, f.useReactiveVar)(gt),
            T = (0, f.useReactiveVar)(ft),
            R = (0, f.useReactiveVar)(bt),
            O = (0, f.useReactiveVar)(ht),
            j = (0, f.useReactiveVar)(yt),
            A = (0, f.useReactiveVar)(xt),
            V = (0, f.useReactiveVar)(kt),
            M = (0, f.useReactiveVar)(_t),
            L = (0, f.useReactiveVar)(wt),
            z = (0, f.useReactiveVar)(Et),
            D = (0, f.useReactiveVar)(Pt),
            W = (0, f.useReactiveVar)(St),
            [Y, $] = (0, s.useState)({
              width: 0,
              height: 0
            });
          return (0, s.useEffect)((() => {
            const a = (0, f.toScLocaleString)(e),
              r = `${document.location.pathname}${document.location.search}`;
            dt(`${t}?returnUrl=${r}&lang=${a}`)
          }), []), (0, s.useEffect)((() => {
            const e = () => {
              $({
                width: window.innerWidth,
                height: window.innerHeight
              })
            };
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), []), {
            state: {
              accessiblePlates: a,
              canvasDimensions: r,
              character: n,
              currentPlate: o,
              currentPlateIndex: i,
              currentView: c,
              deletedPlateIndex: l,
              dimensions: Y,
              error: d,
              firstPlateMesh: u,
              isLoading: y,
              isScrollEnabled: _,
              gridScale: m,
              gridState: p,
              lastScrollY: w,
              pendingOrder: S,
              plates: C,
              plateTextures: I,
              realHeight: O,
              is3D: g,
              isExpanded: h,
              isLoggedIn: v,
              isMobile: b,
              isSceneLoaded: k,
              loginUrl: P,
              isOrderConfirmed: x,
              lastView: E,
              plateNumber: N,
              plateNumberStatus: T,
              plateStyles: R,
              refs: j,
              selectedStyle: A,
              selectedVehicle: V,
              shouldForce2D: M,
              shouldRenderScene: L,
              three: z,
              vehicles: D,
              xmas23PlatesAllowed: W
            },
            setAccessiblePlates: He,
            setCanvasDimensions: Ue,
            setCharacter: Fe,
            setCurrentPlate: Be,
            setCurrentPlateIndex: Ge,
            setCurrentView: Xe,
            setDeletedPlateIndex: qe,
            setError: Ze,
            setFirstPlateMesh: Ke,
            setGridState: Qe,
            setIsLoading: rt,
            setIsLoggedIn: st,
            setIsOrderConfirmed: nt,
            setLastScrollY: ct,
            setLastView: lt,
            setPendingOrder: ut,
            setPlates: pt,
            setRealHeight: ht,
            setIs3D: et,
            setIsExpanded: at,
            setIsMobile: tt,
            setIsSceneLoaded: ot,
            setIsScrollEnabled: it,
            setGridScale: Je,
            setPlateNumber: mt,
            setPlateNumberStatus: ft,
            setPlateStyles: bt,
            setPlateTextures: gt,
            setRefs: vt,
            setSelectedStyle: xt,
            setSelectedVehicle: kt,
            setShouldForce2D: _t,
            setShouldRenderScene: wt,
            setThree: Et,
            setVehicles: Pt,
            setXmas23PlatesAllowed: St
          }
        },
        Ct = (0, f.setContextItem)({
          context: (0, s.createContext)(Nt),
          key: "lpeState"
        }),
        It = () => (0, s.useContext)(Ct),
        Tt = ({
          t: e
        }) => {
          const {
            setRefs: t,
            state: a
          } = It(), o = (0, l.useLocation)(), {
            realHeight: i
          } = a, c = (0, s.useRef)(null);
          return (0, s.useEffect)((() => {
            c.current && t(re, c)
          }), [c.current]), (0, r.jsx)("div", {
            className: "rockstargames-modules-gtao-license-plated6b388963868ad145cd3ec9475c82ea8",
            ref: c,
            style: {
              display: i ? "block" : "none"
            },
            children: (0, r.jsxs)("div", {
              className: "rockstargames-modules-gtao-license-platea76b834819c26ca51eb57acfd273fadd",
              children: [(0, r.jsxs)("div", {
                className: "rockstargames-modules-gtao-license-plateae73b6c88b578dd6fbc3afb851fbe5ad",
                children: [(0, r.jsx)(y.LanguageSelector, {
                  location: o,
                  onLanguageChange: n.onLanguageChange
                }), (0, r.jsxs)("div", {
                  className: "rockstargames-modules-gtao-license-platec6b9e0c5f7b0449b91245ad74fd6c788",
                  children: [(0, r.jsx)(h.A, {
                    to: "/corpinfo",
                    "data-gtm-category": "Footer",
                    "data-gtm-action": "Link Click",
                    "data-gtm-label": "Corporate Info",
                    children: e("Corporate")
                  }), (0, r.jsx)(h.A, {
                    to: "/privacy",
                    "data-gtm-category": "Footer",
                    "data-gtm-action": "Link Click",
                    "data-gtm-label": "Privacy",
                    children: e("Privacy")
                  }), (0, r.jsx)(h.A, {
                    onClick: () => window.OneTrust?.ToggleInfoDisplay(),
                    "data-gtm-category": "Footer",
                    "data-gtm-action": "Link Click",
                    "data-gtm-label": "Cookie settings",
                    children: e("Cookie Settings")
                  }), (0, r.jsx)(h.A, {
                    to: "/cookies",
                    "data-gtm-category": "Footer",
                    "data-gtm-action": "Link Click",
                    "data-gtm-label": "Cookie policy",
                    children: e("Cookie Policy")
                  }), (0, r.jsx)(h.A, {
                    to: "/legal",
                    "data-gtm-category": "Footer",
                    "data-gtm-action": "Link Click",
                    "data-gtm-label": "Legal",
                    children: e("Legal")
                  }), (0, r.jsx)(h.A, {
                    to: "/ccpa",
                    "data-gtm-category": "Footer",
                    "data-gtm-action": "CCPA Link",
                    "data-gtm-label": "View CCPA Info",
                    children: e("Do Not Sell My Info")
                  })]
                })]
              }), (0, r.jsx)(P, {
                className: "rockstargames-modules-gtao-license-platef04a987129766a561c6da7b1a5288f4c",
                condensed: !0,
                titleSlug: "gta-online"
              })]
            })
          })
        };
      var Rt = a(63739),
        Ot = a(83846);
      const jt = ({
        envMap: e,
        envModel: t,
        onLoad: a,
        position: n = [0, 0, 0]
      }) => {
        const {
          scene: o
        } = t;
        return (0, s.useEffect)((() => {
          o.traverse((e => {
            e instanceof i.Mesh && (e.material.opacity = 0, e.material.transparent = !0, e.material.map && (e.material.map.encoding = i.LinearEncoding, e.material.map.needsUpdate = !0)), "Car_ShadowPlane" !== e.name && "banshee_HD_Glass_SingleLayer" !== e.name && "banshee_HD_Shells_VertexPaint_Cage" !== e.name || (e.renderOrder = 1, e instanceof i.Mesh && (e.material.depthWrite = !0))
          })), o.getObjectByName("Car_Banshee_LOD_VertexColors")?.traverse((t => {
            t.castShadow = !0, t instanceof i.Mesh && (t.material.envMap = e, t.material.envMapIntensity = 1)
          })), o.visible = !1
        }), [t]), (0, s.useEffect)((() => {
          a && a()
        }), []), (0, r.jsx)("primitive", {
          position: n,
          scale: [1, 1, 1],
          rotation: [0, 0, 0],
          object: o
        })
      };
      var At = a(82548);
      const Vt = "#898989",
        Mt = "#000000",
        Lt = ["0.05", "0.15", "0.4"],
        zt = ["0.0", "0.5", "1.0"],
        Dt = ["0.299", "0.587", "0.114"],
        Wt = (() => {
          const {
            userAgent: e
          } = window.navigator;
          return e.indexOf("AppleWebKit") > -1 && -1 === e.indexOf("Chrome")
        })(),
        Yt = () => {
          const e = document.createElement("canvas").getContext("2d", {
            alpha: !1
          });
          let t = 1;
          const {
            innerWidth: a
          } = window;
          return a <= ye.sm ? t = 1 / 4 : a <= ye.md && (t = .5), e.canvas.width = 2048 * t, e.canvas.height = 1024 * t, e.textAlign = "center", e.textBaseline = "middle", e
        },
        $t = {
          bumpMap: Yt(),
          map: Yt(),
          roughnessMap: Yt()
        },
        Ht = ({
          envMap: e,
          height: t = 1,
          plate: a,
          plateIndex: n,
          position: o = [0, 0, 0],
          width: c = 2
        }) => {
          const {
            state: l,
            setCurrentView: d,
            setPlateTextures: u,
            setRefs: m
          } = It(), {
            currentView: p,
            isSceneLoaded: g,
            pendingOrder: f,
            plateNumber: b,
            plates: h,
            isLoggedIn: y,
            isMobile: v,
            selectedStyle: x,
            gridScale: k,
            plateTextures: _
          } = l, w = 0 === n && "number" == typeof x, [E, P] = (0, s.useState)(C(w ? x : a.style.id)), S = [0, 0, 0], N = [1, 1, 1], [I] = (0, s.useState)(0 === a.index), [T, R] = (0, s.useState)({}), O = (0, s.useRef)(), j = h.filter((({
            faux: e
          }) => !e)).length >= 30;
          (0, s.useEffect)((() => {
            O.current && 0 === O.current.userData.index && m(ae, O)
          }), [O.current]);
          const A = (0, s.useRef)(),
            V = (0, s.useCallback)((e => {
              !a.index && j || D(0, p)
            }), [p]),
            M = (0, s.useCallback)((e => {
              if (!E) return [];
              const t = String.fromCharCode(8202).repeat(0),
                a = e.split("")?.join(t) ?? "",
                r = ((e, t) => {
                  delete $t.bumpMap, $t.bumpMap = Yt();
                  const a = $t.bumpMap;
                  let r = 1;
                  const {
                    innerWidth: s
                  } = window;
                  s <= ye.sm ? r = 1 / 4 : s <= ye.md && (r = .5);
                  const n = t.fontSize * r;
                  a.strokeStyle = "white", a.fillStyle = "white", a.clearRect(0, 0, a.canvas.width, a.canvas.height), a.font = `${n}px ${t.fontName}`;
                  const o = 5 * r;
                  return Wt || (a.filter = `blur(${o}px)`), t?.bumpMap?.image && a.drawImage(t.bumpMap.image, 0, 0, a.canvas.width, a.canvas.height), a.strokeText(e, a.canvas.width / 2, a.canvas.height / 1.7), a.fillText(e, a.canvas.width / 2, a.canvas.height / 1.7), Wt && At.canvasRGB(a.canvas, 0, 0, a.canvas.width, a.canvas.height, 3 * o), new i.CanvasTexture(a.canvas)
                })(a, E),
                s = ((e, t) => {
                  delete $t.map, $t.map = Yt();
                  const a = $t.map;
                  let r = 1;
                  const {
                    innerWidth: s
                  } = window;
                  s <= ye.sm ? r = 1 / 4 : s <= ye.md && (r = .5);
                  const n = t.fontSize * r;
                  return a.clearRect(0, 0, a.canvas.width, a.canvas.height), a.fillStyle = "white", a.fillRect(0, 0, a.canvas.width, a.canvas.height), t?.albedoMap?.image && a.drawImage(t.albedoMap.image, 0, 0, a.canvas.width, a.canvas.height), a.font = `${n}px ${t.fontName}`, a.fillStyle = t.fontColor, a.fillText(e, a.canvas.width / 2, a.canvas.height / 1.7), new i.CanvasTexture(a.canvas)
                })(a, E),
                n = v ? void 0 : ((e, t) => {
                  delete $t.roughnessMap, $t.roughnessMap = Yt();
                  const a = $t.roughnessMap;
                  let r = 1;
                  const {
                    innerWidth: s
                  } = window;
                  s <= ye.sm ? r = 1 / 4 : s <= ye.md && (r = .5);
                  const n = t.fontSize * r;
                  a.strokeStyle = Mt, a.fillStyle = Mt, a.fillRect(0, 0, a.canvas.width, a.canvas.height), a.font = `${n}px ${t.fontName}`;
                  for (let r = 1; r < 2; r += 1) t?.roughnessMap?.image && a.drawImage(t.roughnessMap.image, 0, 0, a.canvas.width, a.canvas.height), a.strokeStyle = Vt, a.fillStyle = Vt, a.strokeText(e, a.canvas.width / 2, a.canvas.height / 1.7), a.fillText(e, a.canvas.width / 2, a.canvas.height / 1.7);
                  return new i.CanvasTexture(a.canvas)
                })(a, E);
              return [r, s, n]
            }), [E]),
            L = (0, s.useCallback)((e => {
              var t;
              I && (e.uniforms.saturation = ve.saturation, e.uniforms.fade = ve.fade, e.uniforms.shaderIndex = ve.shaderIndex, e.fragmentShader = `uniform float saturation;\nuniform float fade;\nuniform int shaderIndex;\n${e.fragmentShader}`, e.fragmentShader = e.fragmentShader.replace("#include <dithering_fragment>", `\n        #include <dithering_fragment>\n\n        vec3 lerpedColor;\n\n        if (shaderIndex == 2) {\n            float opacity = mix(0.01, 1.0, saturation);\n            float desaturationOpacity = gl_FragColor.a * (opacity);\n            vec3 desaturationColor = vec3(\n                ${Dt[0]},\n                ${Dt[1]},\n                ${Dt[2]}\n            );\n            lerpedColor =  mix(\n                vec3(dot(gl_FragColor.rgb, desaturationColor)),\n                gl_FragColor.rgb,\n                saturation\n            );\n            gl_FragColor = vec4(lerpedColor, gl_FragColor.a);\n\n        } else if (shaderIndex == 0) {\n            float gradient;\n                if (vUv.y < 0.5) {\n                    gradient = mix(${(t=y?Lt:zt)[0]}, ${t[1]}, vUv.y * 2.0);\n                } else {\n                    gradient = mix(${t[1]}, ${t[2]}, ((vUv.y - 0.5) * 2.0));\n                }\n                lerpedColor = mix(gl_FragColor.rgb, gl_FragColor.rgb * saturation, 1.0 - gradient);\n\n                float lerpedAlpha = mix(gl_FragColor.a * 0.8, gl_FragColor.a, saturation);\n\n                gl_FragColor = vec4(lerpedColor, lerpedAlpha);\n\n        } else {\n            lerpedColor = mix(gl_FragColor.rgb, gl_FragColor.rgb * saturation, 1.0 - vUv.y);\n\n            gl_FragColor = vec4(lerpedColor, 1);\n\n        }\n    `))
            }), [I, y, f]);
          return (0, s.useEffect)((() => {
            I && (a.plateText = b)
          }), [I ? b : null]), (0, s.useEffect)((() => {
            if (I && E && E.id !== x) {
              const e = C(x);
              P(e)
            }
          }), [I, x]), (0, s.useEffect)((() => {
            ve.shaderIndex.value = y ? f ? 0 : 2 : 0, A.current && (A.current.bumpScale = .015 * k, A.current.needsUpdate = !0)
          }), [A.current, f, y, k]), (0, s.useEffect)((() => {
            if (T.map && _[n] !== T.map) {
              const e = [..._];
              e[n] = T.map, u(e)
            }
          }), [T, _]), (0, s.useEffect)((() => {
            const [e, t, r] = M(I ? b : a.plateText);
            R({
              map: t,
              bumpMap: e,
              roughnessMap: r
            })
          }), [I ? b : void 0, I ? E : void 0]), (0, s.useMemo)((() => g && T.map && T.bumpMap ? (0, r.jsxs)("mesh", {
            name: Ye.LP,
            visible: !0,
            userData: {
              index: n
            },
            position: o,
            rotation: S,
            scale: N,
            ref: O,
            onPointerOver: v ? void 0 : () => {
              y && d() === We.LIST_PLATES && O.current && V(O.current)
            },
            onPointerOut: v ? void 0 : () => {
              var e;
              y && O.current && (e = O.current, !a.index && j || W(e))
            },
            children: [(0, r.jsx)("planeBufferGeometry", {
              args: [c, t, c, t]
            }), (0, r.jsx)("meshPhysicalMaterial", {
              onBeforeCompile: 0 === n ? L : void 0,
              alphaMap: a.alphaMap,
              bumpMap: T.bumpMap,
              opacity: 0,
              bumpScale: .015,
              depthTest: !1,
              envMap: e,
              envMapIntensity: ze,
              map: T.map,
              metalness: .4,
              ref: A,
              roughness: .3,
              roughnessMap: T.roughnessMap,
              transparent: !0
            })]
          }) : null), [y, v, T])
        },
        Ut = ({
          gridState: e,
          loadedAssets: t
        }) => {
          const [a, n, c, l] = [2, 1, 2, 1, [0, 0, 0]], {
            environmentMap: d
          } = t, {
            gridOptions: u,
            gridPosition: m
          } = e, {
            bottomMarginAsRatio: p,
            columnGap: f,
            columns: b,
            isVertical: h,
            rowGap: y,
            topMarginAsRatio: v
          } = u, {
            state: x,
            setRealHeight: k,
            setGridScale: _,
            setLastScrollY: w,
            setCurrentView: E
          } = It(), {
            currentView: P,
            gridScale: S,
            plates: N,
            isLoggedIn: C,
            isMobile: I,
            realHeight: T,
            refs: R,
            currentPlateIndex: O,
            three: j,
            canvasDimensions: V,
            lastScrollY: M,
            isScrollEnabled: L
          } = x, z = (0, s.useRef)(null), {
            camera: D,
            scene: W,
            gl: Y
          } = (0, o.useThree)(), [H, U] = (0, s.useState)(new i.Vector3(m.x, m.y, m.z)), [F, B] = (0, s.useState)(0), [G, X] = (0, s.useState)(0), {
            track: q
          } = (0, g.useGtmTrack)(), Z = {
            view_name: "license plate creator - landing page logged " + (C ? "in" : "out")
          }, [K, J] = (0, s.useState)(null);
          (0, s.useEffect)((() => {
            P === We.LIST_PLATES && q({
              ...Z,
              event: "virtualPageview",
              display_type: I ? "mobile" : "desktop",
              view_name: "license plate creator - landing page logged " + (C ? "in" : "out")
            })
          }), [P]);
          const Q = (0, s.useCallback)((() => {
            if (V) {
              const t = c * b + f * (b - 1),
                a = Math.abs(m.z) * Math.tan((0, Ot.pu)(D.fov / 2)) * 2,
                r = e.gridDimensions.margins.meters.top,
                s = e.gridDimensions.margins.meters.bottom,
                n = e.gridDimensions.width,
                o = n / t,
                i = e.gridDimensions.height,
                l = i / a;
              X((i - a + r + s).toFixed(4)), _(o), (() => {
                We.LIST_PLATES;
                const e = Y.domElement.offsetHeight,
                  t = l * e + v * e + p * e,
                  a = A(),
                  r = R[ue]?.current;
                r && (r.style.height = `${t}px`), J({
                  canvasHeight: e,
                  rootHeight: t
                }), k(`${Math.round(t)}px`);
                const s = Math.round(c * o / n * (Y.domElement.offsetWidth - 2 * a));
                B(s)
              })()
            }
          }), [D.fov, V, b, P, I, m, N, n, W, v, O, j]);
          (0, s.useEffect)((() => {
            m && U(m), Q()
          }), [m, V]);
          const ee = (0, s.useMemo)((() => N?.map((e => {
              if (0 === F) return null;
              const {
                index: t
              } = e, s = -1 * a / 2 + .251953125 * a, o = (h ? t % b * (a + f) : Math.floor(t / b) * (a + f)) + a / 2, i = (h ? Math.floor(t / b) * (n + y) * -1 : t % b * (n + y) * -1) + s;
              return (0, r.jsx)(Ht, {
                envMap: d,
                height: l,
                position: [o, i, 0],
                plate: e,
                plateIndex: e.index,
                width: c
              }, `${e.index}-${Math.random()}`)
            })) ?? null), [F, N]),
            te = (0, s.useCallback)((() => {
              const e = R[ue].current,
                t = document.body;
              e && (e.style.touchAction = "auto"), $() || requestAnimationFrame((() => {
                t.style.removeProperty("position"), t.style.removeProperty("top"), window.scrollTo(0, M)
              }))
            }), [I, M, L]),
            ae = (0, s.useCallback)((() => {
              const e = R[ue].current,
                t = document.body,
                a = window.scrollY;
              w(a), e && (e.style.touchAction = "none"), $() || (window.scrollTo(0, a), requestAnimationFrame((() => {
                t.style.position = "fixed", t.style.top = `-${a}px`
              })))
            }), [I, R, L, M]);
          (0, s.useEffect)((() => {
            L ? te() : ae()
          }), [L]), (0, s.useEffect)((() => () => {
            te()
          }), []);
          const re = (0, s.useCallback)(((e = !1) => {
            if (E() === We.LIST_PLATES || e) {
              const e = R[ue]?.current;
              if (!e || !K) return;
              const {
                canvasHeight: t,
                rootHeight: a
              } = K, r = I && N.length <= 2 ? 2 : 1;
              let s = Number(Math.min(window.scrollY / (a - t), r).toFixed(4));
              (Number.isNaN(s) || a === t) && (s = 0);
              const n = H.y + G * s;
              z?.current?.position?.set(H.x, Number(n.toFixed(3)), H.z)
            }
          }), [z.current, H, R, G, N, K, C, I]);
          return (0, s.useEffect)((() => {
            const e = e => {
              re(!1), e && (e.stopPropagation(), e.preventDefault())
            };
            return 0 !== window.scrollY && e(null), window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
          }), [z.current, C, H, m, T, R, G, K]), (0, s.useEffect)((() => {
            if (!z.current || !W) return;
            const e = W.getObjectByName("Scene");
            z.current.add(e), e && e.scale.set(6.5, 6.5, 6.5)
          }), [z.current, W]), (0, s.useMemo)((() => (0, r.jsx)("group", {
            name: Ye.LP_GRID,
            ref: z,
            position: m,
            scale: S,
            children: 0 !== F && ee
          })), [S, ee, F])
        },
        Ft = ({
          name: e,
          color: t,
          intensity: a,
          distance: s,
          decay: n,
          position: o,
          rotation: i,
          mapSize: c,
          ref: l,
          withHelper: d = !1
        }) => (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("pointLight", {
            name: e,
            color: t,
            intensity: a,
            distance: s,
            decay: n,
            position: o,
            rotation: i,
            castShadow: !0,
            "shadow-mapSize-height": c,
            "shadow-mapSize-width": 2 * c,
            "shadow-radius": 4,
            "shadow-bias": -35e-5
          }), d && (0, r.jsx)("pointLightHelper", {
            light: l,
            sphereSize: 1
          })]
        }),
        Bt = ({
          baseIntensity: e,
          mapSize: t
        }) => (0, s.useMemo)((() => (0, r.jsxs)("group", {
          name: "Lights",
          children: [(0, r.jsx)(Ft, {
            name: "Light1",
            color: 16777215,
            intensity: 0,
            distance: 0,
            decay: 2,
            position: [_e, we, Ee],
            rotation: [-Math.PI / 2, 0, 0],
            mapSize: t
          }), (0, r.jsx)(Ft, {
            name: "Light2",
            color: 16777215,
            intensity: e,
            distance: 0,
            decay: 2,
            position: [Pe, Se, Ne],
            rotation: [-Math.PI / 2, 0, 0],
            mapSize: t
          }), (0, r.jsx)(Ft, {
            name: "Light3",
            color: 16777215,
            intensity: e,
            distance: 0,
            decay: 2,
            position: [Ie, Te, Re],
            rotation: [-Math.PI / 2, 0, 0],
            mapSize: t
          }), (0, r.jsx)(Ft, {
            name: "Light4",
            color: 16777215,
            intensity: 0,
            distance: 50,
            decay: 2,
            position: [je, Ae, Ve],
            rotation: [-Math.PI / 2, 0, 0],
            mapSize: t
          })]
        })), [e, t]);
      (0, o.extend)({
        OrbitControls: Rt.N
      });
      const Gt = {
          leftMargin: 200,
          topMargin: 200,
          columns: 3,
          isVertical: !0,
          columnGap: .1,
          rowGap: .1,
          depth: 5,
          plateHeight: 1,
          plateWidth: 2
        },
        Xt = ({
          loadedAssets: e
        }) => {
          const {
            state: t,
            setIsSceneLoaded: a,
            setThree: n,
            setGridState: c
          } = It(), {
            currentView: l,
            gridState: d,
            isLoggedIn: u,
            is3D: m,
            shouldForce2D: p,
            isSceneLoaded: g,
            plates: f,
            plateStyles: b,
            three: h,
            canvasDimensions: y,
            shouldRenderScene: v,
            refs: x
          } = t, [k, _, w] = (0, o.useThree)((({
            camera: e,
            gl: t,
            scene: a
          }) => [e, t, a])), E = (0, s.useRef)(), [P, S] = (0, s.useState)(!1), [N, C] = (0, s.useState)(null), I = () => {
            if (_.domElement.style.opacity = 1, _.domElement.style.position = "absolute", _.domElement.style.top = 0, _.domElement.style.left = 0, _.domElement.style.right = 0, _.domElement.style.bottom = 0, _.domElement.style.touchAction = "auto", !g) {
              const e = new i.Vector3,
                t = new i.Vector3;
              E.current.target.copy(t), n({
                scene: w,
                camera: k,
                renderer: _,
                controls: E,
                originalCameraFov: k.fov,
                originalCameraPosition: e,
                originalControlsTarget: t
              })
            }
            a(!0)
          };
          (0, s.useEffect)((() => {
            f.length && N && R(N.width)
          }), [N, f]), (0, s.useEffect)((() => (C({
            height: _.domElement.offsetHeight,
            width: _.domElement.offsetWidth
          }), () => {
            a(!1)
          })), []), (0, s.useEffect)((() => {
            e && f?.length && null !== u && S(!0)
          }), [e, f, u]), (0, s.useEffect)((() => {
            e && e?.environmentMap && b?.map(((t, a) => (t.albedoMap = e.plateTextures[a].albedoMap, t.alphaMap = e.plateTextures[a].alphaMap, t.bumpMap = e.plateTextures[a].bumpMap, t.roughnessMap = e.plateTextures[a].roughnessMap, t.envMap = e.environmentMap, t)))
          }), [e, b]);
          const R = (0, s.useCallback)((e => {
            const t = document.getElementById("list-plates-sidebar");
            if (!k || !t || !N) return;
            const a = A(),
              {
                plateWidth: r,
                plateHeight: s,
                columnGap: n,
                rowGap: o,
                depth: l
              } = Gt,
              d = l * Math.tan((0, Ot.pu)(17.5)),
              u = -1 * k.aspect * d,
              m = window.innerWidth < ye.lg ? t.offsetHeight + a : a,
              p = a,
              g = _.domElement.offsetWidth,
              b = _.domElement.offsetHeight,
              h = (() => {
                const e = window.innerWidth;
                switch (!0) {
                  case e >= ye.xxl:
                    return T(11);
                  case e >= ye.xl:
                    return T(12);
                  case e >= ye.md:
                    return T(13);
                  default:
                    return T(20)
                }
              })(),
              y = p / g,
              v = u - u * y * 2,
              x = m / b,
              w = d - d * x * 2,
              E = h / b,
              P = new i.Vector3(v, w, -l),
              S = f.length > 1 ? (e => {
                const t = window.innerWidth;
                switch (!0) {
                  case t >= ye.xxl:
                    return 3;
                  case t >= ye.lg && t <= 1280:
                    return 1;
                  case e >= 600:
                    return 2;
                  default:
                    return 1
                }
              })(e) : 1,
              C = Math.ceil(f.length / S),
              I = r * S + n * (S - 1),
              R = s * Math.ceil(f.length / S) + o * (Math.ceil(f.length / S) - 1),
              O = Math.abs(P.z) * Math.tan((0, Ot.pu)(k.fov / 2)) * 2,
              j = y * (O * (g / b)),
              V = x * O,
              M = E * O,
              L = Math.abs(2 * P.x),
              z = L / I * R;
            c({
              gridPosition: P,
              gridOptions: {
                ...Gt,
                columns: S,
                rows: C,
                topMarginAsRatio: x,
                bottomMarginAsRatio: E,
                leftMarginAsRatio: y
              },
              gridDimensions: {
                margins: {
                  meters: {
                    top: V,
                    left: j,
                    bottom: M
                  },
                  pixels: {
                    top: m,
                    left: p,
                    bottom: h
                  }
                },
                height: z,
                width: L
              }
            })
          }), [f, x?.[me]?.current, k, N, u]);
          (0, s.useEffect)((() => {
            h && E.current && !h?.controlsInit && n({
              ...h,
              controls: E,
              controlsInit: !0
            })
          }), [E.current, h]), (0, s.useEffect)((() => {
            h?.scene && E?.current && (E.current.enabled = v)
          }), [v, h]), (0, s.useEffect)((() => {
            E?.current && (!p && m || (E.current.enabled = !1))
          }), [p, m]), (0, o.useFrame)((() => {
            v && (E?.current?.update(), _.render(w, k))
          }), 1), (0, s.useEffect)((() => {
            const e = () => {
              const e = x[Z]?.current;
              e && C({
                width: e.offsetWidth,
                height: e.offsetHeight
              })
            };
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), [y, l, x[Z]?.current]);
          const O = (0, s.useMemo)((() => e?.environmentMap && e?.environmentModel ? (0, r.jsx)(jt, {
              position: [0, -4.05, -11.76],
              envMap: e.environmentMap,
              envModel: e.environmentModel,
              onLoad: I
            }) : null), [e]),
            j = (0, s.useMemo)((() => (0, r.jsx)(Bt, {
              baseIntensity: Le,
              mapSize: 1024
            })), []),
            V = (0, s.useMemo)((() => (0, r.jsx)(Ut, {
              gridState: d,
              loadedAssets: e
            })), [d, e]),
            M = (0, s.useMemo)((() => (0, r.jsx)("orbitControls", {
              ref: E,
              screenSpacePanning: !0,
              args: [k, _.domElement],
              enableDamping: !0,
              enableZoom: !1,
              enablePan: !1,
              maxPolarAngle: ke.plateView.maxPolarAngle,
              minPolarAngle: ke.plateView.minPolarAngle,
              maxAzimuthAngle: ke.plateView.maxAzimuthAngle,
              minAzimuthAngle: ke.plateView.minAzimuthAngle,
              minDistance: -1,
              maxDistance: 100
            })), [k, E, _]);
          return (0, r.jsxs)(r.Fragment, {
            children: [j, O, P && d ? V : "", M]
          })
        };
      var qt = a(44853),
        Zt = a(3983),
        Kt = a(92811);
      const Jt = ({
          isVisible: e = !1,
          top: t,
          bottom: a,
          onDrag: n,
          onHide: o,
          onShow: i,
          children: c,
          onTap: l,
          drawerY: d,
          mobileSidebarHeight: u
        }) => {
          const {
            state: m
          } = It(), {
            currentView: p
          } = m, g = (0, s.useRef)(null), f = (0, s.useState)(B), b = d?.get ? d.get() : 0, h = (0, Zt.useSpring)({
            y: e ? b : u,
            config: {
              easing: Zt.easings.easeInOutQuart,
              duration: 900
            }
          }), y = (0, s.useRef)(u), v = (0, s.useRef)(0), x = (0, s.useRef)(!1);
          (0, s.useEffect)((() => {
            const r = {
              top: t,
              bottom: a,
              y: h.y,
              offset: y,
              sidebarRef: g
            };
            g.current.style.touchAction = "none", g.current.style.overflowY = "hidden", e ? i(r) : o(r)
          }), [e]);
          const k = (0, s.useCallback)((0, Kt.useDrag)((e => {
              if (p !== We.CONFIRM_ORDER) {
                if (!x.current)
                  if (y.current = Math.max(t, Math.min(a, h.y.get() + e.delta[1])), v.current = e.movement[1], e.dragging) h.y.set(y.current);
                  else {
                    const e = {
                      y: h.y.get()
                    };
                    if (y.current < t / 2) {
                      const a = N().to(e, {
                        y: t,
                        duration: xe.sidebar.mobile.drawerSnap.duration,
                        ease: xe.sidebar.mobile.drawerSnap.ease,
                        onUpdate: () => {
                          x.current ? a.kill() : h.y.set(e.y)
                        }
                      });
                      g.current.style.touchAction = "auto", g.current.style.overflowY = "auto", f.current = G
                    } else if (y.current > a / 2) {
                      const t = N().to(e, {
                        y: a,
                        duration: xe.sidebar.mobile.drawerSnap.duration,
                        ease: xe.sidebar.mobile.drawerSnap.ease,
                        onUpdate: () => {
                          x.current ? t.kill() : h.y.set(e.y)
                        }
                      });
                      g.current.style.touchAction = "none", g.current.style.overflowY = "hidden", f.current = X
                    } else {
                      const t = N().to(e, {
                        y: 0,
                        ease: xe.sidebar.mobile.drawerSnap.ease,
                        onUpdate: () => {
                          x.current ? t.kill() : h.y.set(e.y)
                        }
                      });
                      g.current.style.touchAction = "none", g.current.style.overflowY = "hidden", f.current = B
                    }
                    y.current = h.y.get()
                  } const r = {
                  top: t,
                  bottom: a,
                  y: h.y,
                  offset: y,
                  sidebarRef: g,
                  dragParams: e
                };
                n(r)
              }
            })), [p, t, a]),
            _ = () => {
              if (Math.abs(v.current) < 3) {
                x.current = !0, l({
                  drawerStateRef: f
                });
                const e = {
                    y: h.y.get()
                  },
                  a = {};
                f.current === B ? (a.y = t, g.current.style.touchAction = "auto", g.current.style.overflowY = "auto", f.current = G) : (f.current === G || f.current === X) && (a.y = 0, g.current.style.touchAction = "none", g.current.style.overflowY = "hidden", f.current = B), N().to(e, {
                  y: a.y,
                  duration: xe.sidebar.mobile.drawerSnap.duration,
                  ease: xe.sidebar.mobile.drawerSnap.ease,
                  onUpdate: () => {
                    h.y.set(e.y)
                  },
                  onComplete: () => {
                    x.current = !1, y.current = h.y.get()
                  }
                })
              }
            };
          return (0, s.useMemo)((() => (0, r.jsxs)(Zt.animated.div, {
            ...k(),
            ref: g,
            style: h ? {
              y: h.y
            } : void 0,
            className: "rockstargames-modules-gtao-license-platecdd6433a11823225b2b9f9b65f2d6391",
            children: [(0, r.jsx)("hr", {
              className: "rockstargames-modules-gtao-license-plateaf6995e0e4937c42ed789cab97198e81",
              onClick: _,
              "aria-hidden": "true"
            }), c]
          })), [h.y.get(), _, c])
        },
        Qt = ({
          onClick: e
        }) => (0, r.jsx)("button", {
          type: "button",
          onClick: e,
          className: "rockstargames-modules-gtao-license-plateb22d23c7c52ff05ed8bfc3eb13e2aa30",
          "aria-label": "Close",
          tabIndex: 0
        }),
        ea = () => (0, r.jsx)("div", {
          className: "rockstargames-modules-gtao-license-platec5f441b2fc5d40da656b91ae7effe79c",
          "aria-label": "Los Santos Customs"
        });
      var ta = a(79834),
        aa = a(10439);
      const ra = ({
          button: e,
          closeDialog: t,
          style: a = "primary"
        }) => {
          const {
            buttonIcon: s,
            buttonText: n,
            extraClasses: o,
            isDisabled: i,
            isLink: c,
            link: l,
            onClick: d,
            testId: u
          } = e;
          return c ? n && (0, r.jsx)(ta.$n, {
            asChild: !0,
            appearance: a,
            size: "MD",
            children: (0, r.jsx)("a", {
              href: l,
              ...u && {
                "data-testid": u
              },
              children: n
            })
          }) : (0, r.jsx)(ta.$n, {
            autoFocus: !0,
            iconRight: s,
            className: (0, aa.A)(o),
            isDisabled: i,
            onPress: e => (e => {
              d && d(), t && t(), "function" == typeof e?.stopPropagation && e?.stopPropagation()
            })(e),
            type: "button",
            appearance: a,
            "aria-label": n,
            ...u && {
              "data-testid": u
            },
            children: n
          })
        },
        sa = {
          actions: "rockstargames-modules-gtao-license-plated35d1125eabb9ae0e941bd585003c4fc",
          check: "rockstargames-modules-gtao-license-plateb63b9588fb98b439d19028797670c6c5",
          content: "rockstargames-modules-gtao-license-plateefe65f5c39de5d044fdc6b13c1771125",
          dialog: "rockstargames-modules-gtao-license-plated2c9ef0a70d425745a27c169c594199a",
          error: "rockstargames-modules-gtao-license-platef654f7a2bf475a939f8c05fb569bfd5e",
          "fade-in": "rockstargames-modules-gtao-license-platee30057881578a38b5dc6f50854c6b56d",
          heading: "rockstargames-modules-gtao-license-platedab9a8f190197c99405cebe1e9a992d6",
          icon: "rockstargames-modules-gtao-license-platebc1e57fee27452c58670e4f60e492246",
          mail: "rockstargames-modules-gtao-license-plateb120386c4c2485c587f87173721d63be",
          message: "rockstargames-modules-gtao-license-platef7cd64be4f94a272222f88f34789734a",
          pillBtn: "rockstargames-modules-gtao-license-plateb403f298c2eff00899432c93daa15aec",
          selected: "rockstargames-modules-gtao-license-platea6cab397bf3a16564fcc531ef4c16130",
          "slide-up": "rockstargames-modules-gtao-license-plateb2b3117a07a11b3ec5897e4718e24373"
        },
        na = ({
          icon: e,
          title: t,
          secondaryText: a,
          buttons: n,
          showDialog: o,
          onClose: i = () => {},
          closeOnOutsideClick: c = !0,
          extraClasses: l
        }) => {
          const d = (0, s.useRef)(null),
            {
              setBodyIsLocked: u
            } = (0, f.useBodyScrollable)("AlertDialog");
          (0, s.useEffect)((() => {
            o && d?.current && (d.current?.showModal?.(), u(!0))
          }), [o]);
          const m = () => {
            u(!1), i(), d.current?.close?.()
          };
          if (o) return (0, r.jsxs)("dialog", {
            ref: d,
            className: sa.dialog,
            onClick: e => (e => {
              if (!e.currentTarget) return;
              const t = e.currentTarget.getBoundingClientRect();
              (t.left > e.clientX || t.right < e.clientX || t.top > e.clientY || t.bottom < e.clientY) && c && (u(!1), i(), e.currentTarget.close())
            })(e),
            "data-testid": "alert-dialog",
            children: [e && (0, r.jsx)("i", {
              className: [sa.icon, sa[e]].join(" ")
            }), (0, r.jsxs)("div", {
              className: [sa.content, l?.content].join(" "),
              children: [(0, r.jsx)("h3", {
                className: [sa.heading, l?.heading].join(" "),
                children: t
              }), a && (0, r.jsx)("div", {
                className: [sa.message, l?.message].join(" "),
                dangerouslySetInnerHTML: {
                  __html: a
                }
              })]
            }), n && (0, r.jsx)("div", {
              className: sa.actions,
              children: n.slice(0, 2).map(((e, t) => (0, r.jsx)(ra, {
                style: e?.style ?? (0 === t ? "primary" : "secondary"),
                button: e,
                closeDialog: m
              }, e.buttonText)))
            })]
          })
        },
        oa = ({
          vehicleName: e,
          vehicleClass: t
        }) => (0, r.jsxs)("div", {
          className: "rockstargames-modules-gtao-license-platee39b4476c1155e8516c785d7e108bf4a",
          children: [(0, r.jsx)("p", {
            className: "rockstargames-modules-gtao-license-platef0c30e7d91c8460759982c0a036adb42",
            children: e
          }), t && (0, r.jsx)("p", {
            className: "rockstargames-modules-gtao-license-plated55542f294d0da7a719e2e11c6b75f7a",
            children: t
          })]
        }),
        ia = {
          deleteBtn: "rockstargames-modules-gtao-license-plateb42e75b3ce2fe5e0554f34f7de301080",
          deleteBtnContainer: "rockstargames-modules-gtao-license-platecc58d536c33a97a25e6490673ebe383a",
          dialogMessage: "rockstargames-modules-gtao-license-platef46f773eb561785e2eaa30d16b28a50b",
          drawerHandle: "rockstargames-modules-gtao-license-plateecc338a8e8e35e9bbacb53e0ab132d44",
          expanded: "rockstargames-modules-gtao-license-plateb73cb1f3d64ef93943be8a83efe8b4d6",
          heading: "rockstargames-modules-gtao-license-platefc42ef731a2290815d4f87b621acff94",
          hover: "rockstargames-modules-gtao-license-platee7c1a7e40bb308b3bab3b7ff196737df",
          isWindows: "rockstargames-modules-gtao-license-platebcb308bfd5b41b061c0920054e50b95f",
          landingPage: "rockstargames-modules-gtao-license-platebb26405efcd28b8b40024d0c1c79a9e0",
          noDeleteClarification: "rockstargames-modules-gtao-license-platebfdfd77efc4fde5052acb8effd674b1d",
          noVehicles: "rockstargames-modules-gtao-license-platec0e9ab6ade745302288b7f2e32568dab",
          pillBtn: "rockstargames-modules-gtao-license-platee9b1ed5a355d9a899a63c7786e2c22be",
          plateInfo: "rockstargames-modules-gtao-license-platec9153729f8ef30b4c03c455e17495458",
          primaryButton: "rockstargames-modules-gtao-license-platebe96e31f995f7f83ac257c99550005e6",
          secondaryButton: "rockstargames-modules-gtao-license-plateaa5c1fc34a8c5287e61377479befea1f",
          selected: "rockstargames-modules-gtao-license-platef218288d493a08bc8d6d11f816f2b3ac",
          sidebar: "rockstargames-modules-gtao-license-plated96356e37c97bc10051ddd343d1b4c94",
          ui: "rockstargames-modules-gtao-license-platea4c267c45ac4852cef79ecd07c50de5b",
          uiBottom: "rockstargames-modules-gtao-license-platecd1a8aa605e8278adea12caf6fdb755b",
          vehicles: "rockstargames-modules-gtao-license-platefb141f2e6e98807c0cfa391784fbb8b2",
          viewPlate: "rockstargames-modules-gtao-license-plateb9fda5f6d20dd2d6b61326259a148682"
        },
        ca = "visible",
        la = (0, f.withTranslations)((({
          t: e
        }) => {
          const t = (0, f.useRockstarTokenPing)(),
            {
              loggedIn: a
            } = (0, g.useRockstarUser)(),
            {
              setCurrentView: n,
              setShouldRenderScene: o,
              setIsExpanded: c,
              setRefs: l,
              setError: d,
              state: u,
              setIsScrollEnabled: m,
              setDeletedPlateIndex: b
            } = It(),
            {
              accessiblePlates: h,
              currentPlateIndex: y,
              currentPlate: v,
              currentView: x,
              gridScale: k,
              gridState: _,
              is3D: w,
              isExpanded: E,
              isMobile: P,
              isScrollEnabled: S,
              lastScrollY: C,
              plates: I,
              realHeight: T,
              refs: j,
              three: A
            } = u,
            [M, D] = (0, s.useState)(x === We.VIEW_PLATE),
            [W, $] = (0, s.useState)([]),
            [H, U] = (0, s.useState)(!1),
            [F, q] = (0, s.useState)(!1),
            K = (0, s.useRef)(null),
            J = (0, s.useRef)(null),
            Q = (0, s.useRef)(null),
            ee = (0, s.useRef)(null),
            te = (0, s.useRef)(35),
            ae = (0, s.useRef)(null),
            [re, se] = (0, s.useState)(.4 * window.innerHeight),
            [ne, oe] = (0, s.useState)(-1 * (.6 * window.innerHeight - 80)),
            [ie, ce] = (0, s.useState)(0),
            le = (0, s.useRef)(re),
            de = (0, s.useRef)(null),
            [pe, ge] = (0, s.useState)(null),
            be = (0, s.useRef)(null),
            he = (0, s.useRef)(null),
            ye = (0, s.useRef)(null),
            ve = (0, s.useRef)(0),
            [_e, we] = (0, s.useState)(null),
            {
              track: Ee
            } = (0, g.useGtmTrack)(),
            Pe = {
              view_name: "license plate creator - view plate"
            },
            Se = x === We.VIEW_PLATE ? 0 : -1;
          (0, s.useEffect)((() => {
            x !== We.VIEW_PLATE && F && q(!1)
          }), [x, F]);
          const Ne = (0, s.useRef)(0);
          (0, s.useEffect)((() => {
            Number.isNaN(y) || (Ne.current = y)
          }), [y]);
          const Ce = (0, s.useRef)(null);
          (0, s.useEffect)((() => {
            x && (Ce.current = x), x === We.VIEW_PLATE && (ye.current = !1)
          }), [x]);
          const Ie = (0, s.useRef)(0);
          (0, s.useEffect)((() => {
            k && (Ie.current = k)
          }), [k]), (0, s.useEffect)((() => {
            h?.[0]?.current && x === We.NEW_PLATE && we(L(h[0].parentElement))
          }), [h, x]);
          const Te = (0, s.useRef)(null);
          (0, s.useEffect)((() => {
            _e && (Te.current = _e)
          }), [_e]);
          const Re = (0, s.useCallback)(((e, t, a = !1) => {
            if (Ce.current !== We.VIEW_PLATE) return;
            const {
              renderer: r
            } = A;
            Y({
              plateIndex: Ne.current,
              three: A,
              timeline: e,
              gridScale: t
            }, {
              onStart: () => {
                P ? document.body.style.touchAction = "none" : m(!1)
              },
              onComplete: e => {
                e?.three?.camera && (K.current = new i.Vector3(e.three.camera.position.x, e.three.camera.position.y, e.three.camera.position.z)), ee?.current?.children && ee.current.querySelectorAll("button").forEach((e => {
                  e.style.pointerEvents = "all"
                })), P && (r.domElement.style.touchAction = "none", S && setTimeout((() => {
                  document.body.style.touchAction = "auto", m(!1)
                }), 200), de.current = L(r.domElement).y)
              },
              tweenPosition: 0,
              isResize: a,
              is3D: w
            })
          }), [A, y, x, _, I, P, w, S]);
          (0, s.useEffect)((() => {
            if (!A?.controls || !M) return;
            const {
              controls: e
            } = A, t = N().timeline({
              duration: P ? xe.sidebar.mobile.drawer.duration : xe.clickPlate.duration,
              ease: P ? xe.sidebar.mobile.drawer.ease : xe.clickPlate.ease,
              onStart: () => {
                e?.current && (e.current.minDistance = 0)
              }
            });
            Re(t, k, !0)
          }), [k, A]), (0, s.useEffect)((() => {
            ve.current = C
          }), [C]);
          const Oe = (e, t = {}) => {
              if (!A?.controls || !h?.[y]) return;
              const {
                controls: a
              } = A, r = e || N().timeline({
                defaults: {
                  duration: 0,
                  ease: P ? xe.sidebar.mobile.drawer.ease : xe.clickPlate.ease
                },
                onStart: () => {
                  a.current.minDistance = 0
                }
              }), s = V(), o = P && x === We.CONFIRM_ORDER ? 1.5 : 1, i = !O() || P ? s * k * o : 1.6 * s * k, c = j[ue].current, l = document.getElementById("list-plates-sidebar"), d = j[Z].current, u = h[y].current;
              if (c && l && u && d) {
                const e = z(y, c, Number(T.replace("px", "")), _, P ? void 0 : {
                    x: l.offsetWidth,
                    y: 0
                  }).rect.center,
                  a = d.getBoundingClientRect(),
                  s = L(d),
                  o = L(u.parentElement),
                  m = {
                    x: a.left + a.width / 2 - Number(s.x),
                    y: a.top + a.height / 2 - Number(s.y)
                  },
                  p = 5 / i,
                  g = P || n() !== We.CONFIRM_ORDER ? 0 : -1 * l.offsetWidth,
                  f = {
                    x: m.x - e.x + g,
                    y: m.y - e.y - 80 + (t.isResize ? ve.current : window.scrollY)
                  },
                  b = {
                    current: 0
                  },
                  v = h.map((e => Number(getComputedStyle(e?.current)?.getPropertyValue("opacity"))));
                r.to(b, {
                  current: 1,
                  ease: P ? xe.sidebar.mobile.drawer.ease : xe.clickPlate.ease,
                  onComplete: () => {
                    we(L(u.parentElement))
                  },
                  onUpdate: () => {
                    const {
                      current: a
                    } = b, r = (0, Ot.Cc)(Number(o.x), f.x, a), s = (0, Ot.Cc)(Number(o.y), f.y + (P ? .4 * window.innerHeight / -2 : 0), a), n = (0, Ot.Cc)(Number(o.scale), p, a);
                    u.parentElement.style.transformOrigin = `${e.x}px ${e.y}px`, u.parentElement.style.transform = `translate(${r}px, ${s}px) scale(${n})`, t.isResize || h.forEach(((e, t) => {
                      if (t !== y && e?.current) {
                        const r = (0, Ot.Cc)(v[t], 0, Math.min(1, 20 * a));
                        e.current.style.opacity = r.toFixed(2)
                      }
                    }))
                  }
                }, "<")
              }
            },
            je = (0, s.useCallback)(((e = void 0) => {
              if (!A?.camera || !K.current) return;
              const {
                camera: t,
                controls: a,
                renderer: r
              } = A;
              if (N().to(t.position, {
                  x: Number(K.current.x),
                  y: Number(K.current.y),
                  z: Number(K.current.z),
                  ease: xe.toggleView.camera.ease,
                  duration: xe.toggleView.camera.duration,
                  onStart: () => {
                    a?.current && (a.current.minDistance = 2, a.current.enableZoom = !1, a.current.enabled = !1)
                  },
                  onComplete: () => {
                    n(We.LIST_PLATES), a?.current && (a.current.minDistance = 0, a.current.maxPolarAngle = ke.plateView.maxPolarAngle, a.current.minPolarAngle = ke.plateView.minPolarAngle, a.current.maxAzimuthAngle = ke.plateView.maxAzimuthAngle, a.current.minAzimuthAngle = ke.plateView.minAzimuthAngle, a.current.enableZoom = !1), le.current = 0, e?.onComplete && e.onComplete()
                  }
                }), P) {
                const e = r.domElement;
                N().to(e.style, {
                  opacity: 1,
                  duration: xe.toggleView.reset.duration,
                  ease: xe.toggleView.reset.ease
                })
              }
              Ee({
                ...Pe,
                event: "modal_close",
                element_placement: "view plate",
                view_name: "license plate creator - view plate"
              })
            }), [P, A, K]);
          (0, s.useEffect)((() => {
            l("viewPlate", ae)
          }), [ae.current]), (0, s.useEffect)((() => {
            $(I?.[y]?.vehicles ?? [])
          }), [y, I]), (0, s.useEffect)((() => {
            D(x === We.VIEW_PLATE)
          }), [x]), (0, s.useEffect)((() => {
            A?.scene && ee?.current && (e => {
              const {
                scene: t,
                controls: a
              } = A, r = [];
              t.traverse((e => {
                e.name === Ye.LP && r.push(e), e.userData.index === Number(y) && (J.current = e)
              }));
              const s = N().timeline({
                defaults: {
                  duration: P ? xe.sidebar.mobile.drawer.duration : xe.clickPlate.duration,
                  ease: P ? xe.sidebar.mobile.drawer.ease : xe.clickPlate.ease
                },
                onStart: () => {
                  a?.current && (a.current.minDistance = 0)
                }
              });
              switch (e) {
                case ca: {
                  Re(s, Ie.current, !1);
                  const e = j[ue]?.current,
                    t = j[me]?.current,
                    a = h[y].current,
                    r = j?.[Z]?.current;
                  e && t && a && r && Oe(s), he?.current && s.to([ee.current, he.current, P ? void 0 : Q.current], {
                    autoAlpha: 1,
                    duration: xe.sidebar.in.duration,
                    ease: xe.sidebar.in.ease,
                    delay: xe.sidebar.in.delay,
                    onComplete: () => {
                      he?.current && (he.current.style.pointerEvents = "all"), Q?.current && (Q.current.style.pointerEvents = "all")
                    }
                  }, 0), A?.camera && P && !te.current && (te.current = A.camera.fov);
                  break
                }
                default:
                  Q.current && N().to(Q.current, {
                    pointerEvents: "none"
                  }), (ee.current ? ee.current.querySelectorAll("button") : []).forEach((e => {
                    e.style.pointerEvents = "none"
                  })), N().to(ee.current, {
                    autoAlpha: 0,
                    duration: xe.sidebar.out.duration,
                    ease: xe.sidebar.out.ease,
                    delay: xe.sidebar.out.delay
                  }), !P && Q.current ? (N().to(Q.current, {
                    autoAlpha: 0,
                    duration: xe.sidebar.out.duration,
                    ease: xe.sidebar.out.ease,
                    delay: xe.sidebar.out.delay
                  }), N().to(he.current, {
                    autoAlpha: 0,
                    duration: xe.sidebar.out.duration,
                    ease: xe.sidebar.out.ease,
                    delay: xe.sidebar.out.delay,
                    onComplete: () => {
                      he.current && (he.current.style.pointerEvents = "none")
                    }
                  })) : N().to(he.current, {
                    autoAlpha: 0,
                    duration: xe.sidebar.out.duration,
                    ease: xe.sidebar.out.ease,
                    delay: xe.sidebar.out.delay,
                    onComplete: () => {
                      he.current && (he.current.style.pointerEvents = "none")
                    }
                  }), a?.current && (a.current.minDistance = 0)
              }
            })(M ? ca : "hidden")
          }), [j[me]?.current, he.current, A, M]);
          const Ae = (0, s.useCallback)((() => {
            if (P && ae.current) {
              const e = ae.current.offsetHeight + 80,
                t = e - window.innerHeight,
                a = .4 * e;
              ce(a - 48 - t), se(a), oe(-1 * (.6 * e - 80))
            }
          }), [P, ae.current]);
          (0, s.useEffect)((() => {
            Ae()
          }), [P, ae.current]);
          const Ve = (0, s.useRef)(null),
            Le = (0, s.useRef)(null);
          (0, s.useEffect)((() => {
            Ve.current = M
          }), [M]), (0, s.useEffect)((() => {
            Le.current = A
          }), [A]);
          const ze = (0, s.useCallback)(p().debounce((() => {
            if (!0 !== Ve.current) return;
            const {
              renderer: e
            } = Le.current;
            Ce.current === We.VIEW_PLATE && (R() ? e.domElement.style.transform = `translateY(${.4*window.innerHeight/-2}px)` : e.domElement.style.transform = "translateY(0px)", Q?.current && (Q.current.style.opacity = "1", Q.current.style.visibility = "visible", Q.current.style.pointerEvents = "all"), Oe(null, {
              isResize: !0
            }), Ae())
          }), 100), [P, M, x, A, ne, T, _]);
          (0, s.useEffect)((() => {
            k && (Ie.current = k), n() === We.VIEW_PLATE ? ze() : R() && (Ae(), ge(.4 * window.innerHeight))
          }), [k]), (0, s.useEffect)((() => {
            if (!A?.scene) return;
            if (!A?.scene || !h?.[0]?.current) return;
            const {
              scene: e
            } = A, t = [], a = [], r = h[y].current;
            if (e.traverse((e => {
                e.name === Ye.LP && e.material ? a[e.userData.index] = e.material : t.push(e.material)
              })), n() === We.VIEW_PLATE)
              if (w) {
                const t = a[y];
                if (N().to(t, {
                    opacity: 1,
                    delay: P ? xe.sidebar.mobile.drawer.duration : xe.clickPlate.duration,
                    duration: P ? xe.sidebar.mobile.drawer.duration : xe.clickPlate.duration,
                    ease: P ? xe.sidebar.mobile.drawer.ease : xe.clickPlate.ease,
                    onStart: () => {
                      o(!0), N().to(r.style, {
                        opacity: 0,
                        duration: xe.accessibilePlate.duration,
                        ease: xe.accessibilePlate.ease,
                        onUpdate: () => {}
                      })
                    }
                  }), !ye.current) {
                  const t = e.getObjectByName("Light4"),
                    a = new i.Vector3;
                  J?.current && (J.current.getWorldPosition(a), N().to(t.position, {
                    x: Me.x,
                    y: a.y + Me.y,
                    z: Me.z,
                    delay: P ? xe.sidebar.mobile.drawer.duration : xe.clickPlate.duration,
                    duration: xe.plateShimmer.duration,
                    ease: xe.plateShimmer.ease
                  }));
                  const r = {
                    current: 0
                  };
                  N().to(r, {
                    current: 1,
                    delay: P ? xe.sidebar.mobile.drawer.duration : xe.clickPlate.duration,
                    duration: xe.plateShimmer.duration,
                    ease: xe.plateShimmer.ease,
                    onUpdate: () => {
                      const {
                        current: e
                      } = r, a = (0, Ot.Cc)(0, Math.PI, e);
                      t.intensity = .3 * Math.sin(a), t.color = new i.Color(a, .9 * a, a)
                    }
                  }), ye.current = !0
                }
              } else {
                const e = a[y];
                N().to(r.style, {
                  opacity: 1,
                  duration: xe.accessibilePlate.duration,
                  ease: xe.accessibilePlate.ease,
                  onStart: () => {
                    N().to(e, {
                      opacity: 0,
                      duration: xe.accessibilePlate.duration,
                      ease: xe.accessibilePlate.ease,
                      onComplete: () => {
                        o(!1)
                      }
                    })
                  }
                })
              }
          }), [w, P, A]);
          const De = (0, r.jsxs)(r.Fragment, {
              children: [!P && (0, r.jsx)("hr", {
                className: ia.drawerHandle,
                onClick: () => {
                  c(!E)
                },
                "aria-hidden": "true"
              }), (0, r.jsx)("div", {
                className: ia.plateInfo,
                children: (0, r.jsxs)("section", {
                  className: ia.vehiclesApplied,
                  children: [(0, r.jsx)("label", {
                    htmlFor: "vehicles",
                    className: W.length ? "" : `${ia.noVehicles}`,
                    children: W.length ? e("lp.view.title.vehicles") : e("lp.view.title.novehicles")
                  }), (0, r.jsx)("div", {
                    className: ia.vehicles,
                    children: W.map((({
                      modelName: e,
                      manufacturerName: t
                    }, a) => (0, r.jsx)(oa, {
                      vehicleName: e,
                      vehicleClass: t
                    }, a)))
                  })]
                })
              })]
            }),
            $e = (0, s.useCallback)((e => {
              if (!A) return;
              const {
                drawerStateRef: t
              } = e, a = h?.[0].current;
              if (a) {
                const e = L(a.parentElement),
                  {
                    renderer: r,
                    camera: s
                  } = A,
                  n = r.domElement,
                  o = {
                    buttonWrapOpacity: be.current.style.opacity,
                    buttonWrapTranslateY: L(be.current).y,
                    canvasWrapOpacity: n.style.opacity,
                    canvasHeight: n.offsetHeight,
                    canvasTranslateY: Number(L(n).y),
                    fov: s.fov,
                    accessiblePlateX: Number(e.x),
                    accessiblePlateY: Number(e.y),
                    accessiblePlateScale: Number(e.scale)
                  },
                  i = {};
                t.current === B ? (i.buttonWrapOpacity = 0, i.buttonWrapTranslateY = ne, i.canvasWrapOpacity = 0, i.canvasHeight = -ne, i.canvasTranslateY = de.current, i.fov = te.current, i.accessiblePlateX = Te.current.x, i.accessiblePlateY = Te.current.y, i.accessiblePlateScale = Te.current.scale, n.style.pointerEvents = "none") : (t.current === G || t.current === X) && (i.buttonWrapOpacity = 1, i.buttonWrapTranslateY = 0, i.canvasWrapOpacity = 1, i.canvasHeight = -ne, i.canvasTranslateY = de.current, i.fov = te.current, i.accessiblePlateX = Te.current.x, i.accessiblePlateY = Te.current.y, i.accessiblePlateScale = Te.current.scale, n.style.pointerEvents = "all"), N().to(o, {
                  buttonWrapOpacity: i.buttonWrapOpacity,
                  buttonWrapTranslateY: i.buttonWrapTranslateY,
                  canvasWrapOpacity: i.canvasWrapOpacity,
                  canvasHeight: i.canvasHeight,
                  canvasTranslateY: i.canvasTranslateY,
                  fov: i.fov,
                  accessiblePlateX: i.accessiblePlateX,
                  accessiblePlateY: i.accessiblePlateY,
                  accessiblePlateScale: i.accessiblePlateScale,
                  duration: xe.sidebar.mobile.drawerSnap.duration,
                  ease: xe.sidebar.mobile.drawerSnap.ease,
                  onUpdate: () => {
                    n.style.opacity = o.canvasWrapOpacity, be.current.style.opacity = o.buttonWrapOpacity, be.current.style.transform = `translate(0px, ${o.buttonWrapTranslateY}px)`, a && (a.parentElement.style.opacity = o.canvasWrapOpacity, a.parentElement.style.transform = `translate(${o.accessiblePlateX}px,\n                            ${o.accessiblePlateY}px) scale(${o.accessiblePlateScale})`), s.fov = o.fov, s.updateProjectionMatrix(), n.style.transform = `translateY(${o.canvasTranslateY}px)`
                  }
                })
              }
            }), [A, re, ne, h]),
            He = (0, s.useCallback)((e => {
              if (!A) return;
              const {
                dragParams: t,
                offset: a,
                y: r,
                top: s,
                bottom: n
              } = e, {
                camera: o,
                renderer: i
              } = A, c = i.domElement, l = h?.[0]?.current, d = -ne + .4 * window.innerHeight - 48;
              if (l)
                if (t.dragging) {
                  const e = (0, Ot.U4)(0, s, r.get()),
                    i = (0, Ot.Cc)(0, 1, 1 - e);
                  c.style.opacity = i, be.current.style.opacity = i, be.current.style.transform = `translateY(${r.get()}px)`;
                  const d = (0, Ot.Cc)(0, 1, 1 - 3 * e);
                  if (l.parentElement.style.opacity = d, a.current > 0 && Math.abs(t.delta[1]) > 0 && o && a.current < n) {
                    const e = (0, Ot.U4)(0, n, r.get()),
                      a = (0, Ot.Cc)(te.current, 40, e);
                    o.fov = a;
                    const s = Number(L(c).y) + t.delta[1] / 2;
                    if (c.style.transform = `translateY(${s}px)`, l) {
                      const e = L(l.parentElement),
                        a = Number(e.x),
                        r = Number(e.scale),
                        s = Number(L(l.parentElement).y) + t.delta[1] / 2;
                      l.parentElement.style.transform = `translate(${a}px,\n                                ${s}px) scale(${r})`
                    }
                    o.updateProjectionMatrix()
                  }
                } else {
                  const e = {
                    buttonWrapOpacity: be.current.style.opacity,
                    canvasWrapOpacity: c.style.opacity,
                    fov: o.fov,
                    uiButtonsTransformY: L(be.current).y,
                    canvasHeight: c.offsetHeight,
                    canvasTranslateY: Number(L(c).y),
                    accessibilityPlateY: Number(L(l.parentElement).y),
                    accessibilityPlateOpacity: l.parentElement.style.opacity
                  };
                  a.current < ne / 2 ? (c.style.pointerEvents = "none", N().to(e, {
                    buttonWrapOpacity: 0,
                    canvasWrapOpacity: 0,
                    uiButtonsTransformY: ne,
                    canvasHeight: d,
                    accessibilityPlateOpacity: 0,
                    duration: xe.sidebar.mobile.drawerSnap.duration,
                    ease: xe.sidebar.mobile.drawerSnap.ease,
                    onUpdate: () => {
                      c.style.opacity = e.canvasWrapOpacity, be.current.style.opacity = e.buttonWrapOpacity, be.current.style.transform = `translate(0px, ${e.uiButtonsTransformY}px)`, l.parentElement.style.opacity = e.accessibilityPlateOpacity
                    }
                  })) : a.current > n / 2 ? (c.style.pointerEvents = "all", N().to(e, {
                    buttonWrapOpacity: 1,
                    uiButtonsTransformY: n,
                    canvasWrapOpacity: 1,
                    fov: 40,
                    canvasHeight: d,
                    canvasTranslateY: Number(de.current) + n / 2,
                    accessibilityPlateY: Number(Te.current.y) + n / 2,
                    duration: xe.sidebar.mobile.drawerSnap.duration,
                    ease: xe.sidebar.mobile.drawerSnap.ease,
                    onUpdate: () => {
                      c.style.opacity = e.canvasWrapOpacity, be.current.style.opacity = e.buttonWrapOpacity, be.current.style.transform = `translate(0px, ${e.uiButtonsTransformY}px)`, o.fov = e.fov, o.updateProjectionMatrix(), c.style.transform = `translateY(${e.canvasTranslateY}px)`, l.parentElement.style.transform = `translate(${Te.current.x}px,\n                                ${e.accessibilityPlateY}px) scale(${Te.current.scale})`
                    }
                  })) : Math.abs(a.current) > 0 && (c.style.pointerEvents = "all", N().to(e, {
                    buttonWrapOpacity: 1,
                    canvasWrapOpacity: 1,
                    uiButtonsTransformY: 0,
                    fov: te.current,
                    canvasHeight: -ne,
                    canvasTranslateY: .4 * window.innerHeight / -2,
                    accessibilityPlateOpacity: 1,
                    accessibilityPlateY: Number(Te.current.y),
                    duration: xe.sidebar.mobile.drawerSnap.duration,
                    ease: xe.sidebar.mobile.drawerSnap.ease,
                    onUpdate: () => {
                      c.style.opacity = e.canvasWrapOpacity, be.current.style.opacity = e.buttonWrapOpacity, be.current.style.transform = `translate(0px, ${e.uiButtonsTransformY}px`, l.parentElement.style.opacity = e.accessibilityPlateOpacity, o.fov = e.fov, o.updateProjectionMatrix(), c.style.transform = `translateY(${e.canvasTranslateY}px)`;
                      const t = L(l.parentElement),
                        a = Number(t.x),
                        r = Number(t.scale),
                        s = e.accessibilityPlateY;
                      l.parentElement.style.transform = `translate(${a}px,\n                                ${s}px) scale(${r})`
                    }
                  }))
                }
            }), [A, be.current, ne, h, re, _e]),
            Ue = (0, s.useCallback)((e => {
              const t = j[fe]?.current;
              if (!t || !A?.scene || !e) return;
              const {
                camera: a,
                renderer: r
              } = A, s = r.domElement, {
                y: n,
                sidebarRef: o
              } = e, i = t.offsetHeight, c = {
                mobileSidebarHeight: n.get(),
                opacity: o.current.style.opacity,
                height: s.offsetHeight,
                fov: a.fov
              };
              N().to(c, {
                opacity: 1,
                height: i,
                mobileSidebarHeight: .4 * window.innerHeight,
                fov: te.current,
                duration: xe.sidebar.mobile.drawer.duration,
                ease: xe.sidebar.mobile.drawer.ease,
                onUpdate: () => {
                  o.current.style.transform = `translateY(${c.mobileSidebarHeight}px)`, o.current.style.opacity = c.opacity, be.current.style.opacity = c.opacity, s.style.height = c.height, n.set(c.mobileSidebarHeight), a && (a.fov = c.fov, a.updateProjectionMatrix())
                },
                onComplete: () => {
                  s.style.pointerEvents = "all"
                }
              }), o.current.style.pointerEvents = "none"
            }), [j, A, re]),
            Fe = (0, s.useCallback)((e => {
              if (!A?.scene) return;
              const {
                sidebarRef: t,
                offset: a,
                y: r
              } = e;
              null === pe && ge(r);
              const {
                renderer: s
              } = A;
              t.current.style.pointerEvents = "all";
              const n = {
                mobileSidebarHeight: .4 * window.innerHeight,
                opacity: t.current.style.opacity,
                canvasY: 0
              };
              N().to(n, {
                opacity: 1,
                mobileSidebarHeight: 0,
                canvasY: .4 * window.innerHeight / 2,
                duration: xe.sidebar.mobile.drawer.duration,
                ease: xe.sidebar.mobile.drawer.ease,
                onUpdate: () => {
                  t.current.style.opacity = n.opacity, t.current.style.transform = `translateY(${n.mobileSidebarHeight}px)`, a.current = n.mobileSidebarHeight, r.set(a.current), be.current.style.transform = `translateY(${n.mobileSidebarHeight}px)`, he.current.style.transform = `translateY(${n.mobileSidebarHeight}px)`, s.domElement.style.transform = `translateY(${-1*n.canvasY}px)`
                }
              })
            }), [pe, A]),
            Be = (0, s.useMemo)((() => P ? (0, r.jsx)(Jt, {
              isVisible: M,
              top: ne,
              bottom: ie,
              onTap: $e,
              onDrag: He,
              onHide: Ue,
              onShow: Fe,
              mobileSidebarHeight: re,
              children: De
            }) : (0, r.jsx)("div", {
              ref: Q,
              className: ia.sidebar,
              children: De
            })), [be.current, he.current, E, re, P, M, j, Q.current, W, ne, ie]);
          return (0, s.useEffect)((() => {
            if (H) {
              const t = e("lp.modal.order-cancel.title");
              Ee({
                event: "virtualPageview",
                display_type: P ? "mobile" : "desktop",
                view_name: `license plate creator - modal: ${t.toLowerCase()}`
              })
            }
          }), [H]), (0, r.jsxs)("div", {
            className: ia.viewPlate,
            ref: ae,
            children: [(0, r.jsx)(na, {
              title: e("lp.modal.delete.title"),
              secondaryText: e("lp.modal.delete.description").replace("{plateText}", v?.plateText ?? ""),
              extraClasses: {
                message: ia.dialogMessage,
                heading: ia.heading
              },
              buttons: [{
                buttonText: e("lp.modal.delete.confirm"),
                extraClasses: ia.primaryButton,
                onClick: () => {
                  (async () => {
                    try {
                      if (!v || !a) return;
                      const {
                        plateText: e
                      } = v;
                      q(!0);
                      const {
                        error: r,
                        status: s
                      } = await (0, f.coreScApiFetch)("games/gtao/licensePlates/plate", {
                        pingBearer: t,
                        fetchOptions: {
                          method: "DELETE"
                        },
                        query: {
                          plateText: e
                        }
                      });
                      if (r) throw Object.assign(new Error(""), r);
                      s && b(y), je()
                    } catch (e) {
                      d(["api", e])
                    }
                  })(), Ee({
                    ...Pe,
                    event: "license_plate_delete_confirm",
                    text: "confirm",
                    view_name: "license plate creator - modal: delete"
                  })
                },
                style: "primary"
              }, {
                buttonText: e("lp.modal.delete.cancel"),
                extraClasses: ia.secondaryButton,
                onClick: () => {
                  Ee({
                    ...Pe,
                    event: "cta_cancel",
                    text: "cancel",
                    view_name: "license plate creator - modal: cancel"
                  })
                },
                style: "secondary"
              }],
              showDialog: H,
              onClose: () => U(!1)
            }), Be, (0, r.jsxs)("div", {
              ref: ee,
              className: ia.ui,
              children: [(0, r.jsx)(Qt, {
                onClick: je
              }), (0, r.jsx)(Zt.animated.div, {
                ref: be,
                className: ia.uiBottom,
                style: pe ? {
                  y: pe
                } : void 0,
                children: (0, r.jsx)(ea, {})
              })]
            }), (0, r.jsxs)("div", {
              className: ia.deleteBtnContainer,
              ref: he,
              children: [(0, r.jsx)("button", {
                "data-testid": "lp-cta-delete",
                "aria-label": e("lp.modal.delete.title"),
                className: ia.deleteBtn,
                disabled: v?.noDelete || F,
                onClick: () => {
                  v?.noDelete || F || (Ee({
                    ...Pe,
                    event: "license_plate_delete_click",
                    text: "delete this plate?"
                  }), U(!0))
                },
                tabIndex: Se,
                type: "button"
              }), v?.noDelete && (0, r.jsx)("label", {
                htmlFor: "nodelete",
                className: ia.noDeleteClarification,
                children: e("lp.view.nodelete")
              })]
            })]
          })
        }));
      var da = a(4346),
        ua = a.n(da);
      const ma = JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[300,300,0]},"a":{"k":[0,0,0]},"s":{"k":[244,244,100]}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"k":[100,100]},"p":{"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"tm","s":{"k":[{"i":{"x":[0.439],"y":[1.016]},"o":{"x":[0.561],"y":[0.015]},"n":["0p439_1p016_0p561_0p015"],"t":5,"s":[100],"e":[0]},{"t":33.0000013441176}],"ix":1},"e":{"k":[{"i":{"x":[0.439],"y":[1.017]},"o":{"x":[0.561],"y":[0.016]},"n":["0p439_1p017_0p561_0p016"],"t":0,"s":[100],"e":[0]},{"t":30.0000012219251}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"},{"ty":"st","fillEnabled":true,"c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":16},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"}],"ip":0,"op":900.000036657751,"st":0,"bm":0,"sr":1}],"v":"4.5.3","ddd":0,"ip":1.00000004073083,"op":33.0000013441175,"fr":29.9700012207031,"w":600,"h":600}'),
        pa = JSON.parse('{"v":"5.7.3","fr":60,"ip":0,"op":64,"w":300,"h":300,"nm":"Dot_Loading","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"center","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":10,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":22,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":34,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.667,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"right","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":5,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":17,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":29,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.333,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":12,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":24,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0}],"markers":[]}'),
        ga = ({
          type: e = "spinning"
        }) => {
          let t;
          return t = "threeDots" === e ? pa : ma, (0, r.jsx)(ua(), {
            loop: !0,
            autoplay: !0,
            animationData: t,
            style: {
              width: "50px",
              height: "50px"
            },
            "data-testid": "loader-spinner"
          })
        },
        fa = (0, f.withTranslations)((({
          plateNumberStatus: {
            isProfane: e,
            isReserved: t,
            isValid: a
          },
          t: s
        }) => {
          const {
            track: n
          } = (0, g.useGtmTrack)(), o = (e ? "lp.create.valid-profane" : t && "lp.create.valid-reserved") || "lp.create.helper";
          return (e || t) && n({
            view_name: "license plate creator - create plate form",
            event: "alert_error",
            text: o
          }), (0, r.jsx)("p", {
            className: "rockstargames-modules-gtao-license-plateb209538451491db9c8ff89b3feaa3486 rockstargames-modules-gtao-license-platea6887e8868808165d57b5e31b1690c29 " + (!1 === a ? "rockstargames-modules-gtao-license-platea787c38ab225207f19d39ff1930ea467" : ""),
            children: s(o)
          })
        })),
        ba = {
          lpStyleOption: "rockstargames-modules-gtao-license-plateadc1cef4e1bf27db273a8c9809f1078c",
          lpStyleOptionImage: "rockstargames-modules-gtao-license-platef2c22734774c766cd38bfe57e639d6e7",
          pillBtn: "rockstargames-modules-gtao-license-plateeb697addd096a6dc983580e66590631b",
          selected: "rockstargames-modules-gtao-license-platec18b38d08b89945ec1e65df313206d99"
        },
        ha = ({
          style: e,
          tabIndex: t
        }) => {
          const {
            state: a,
            setSelectedStyle: n
          } = It(), {
            plates: o,
            selectedStyle: i
          } = a, c = (0, s.useCallback)((() => {
            he.forEach((e => ({
              ...e,
              selected: !0
            }))), n(e.id)
          }), [o, e]);
          return (0, r.jsx)("button", {
            "data-testid": `lp-option-${e.displayName.toLowerCase().replace(/\s+/g,"-")}`,
            className: [ba.lpStyleOption, i === e.id ? ba.selected : ""].join(" "),
            onClick: () => c(),
            type: "button",
            tabIndex: t,
            "aria-label": `${e.displayName} plate style`,
            children: (0, r.jsx)("img", {
              className: ba.lpStyleOptionImage,
              src: e.previewUrl,
              alt: e.displayName
            })
          })
        },
        ya = (0, f.withTranslations)((({
          setIsLoading: e,
          validateFnRef: t,
          t: a
        }) => {
          const {
            loggedIn: n
          } = (0, g.useRockstarUser)(), o = (0, f.useRockstarTokenPing)(), {
            setCurrentView: i,
            setPlateNumber: c,
            setPlateNumberStatus: l,
            setError: d,
            setRefs: u,
            state: m
          } = It(), {
            currentView: p,
            plateStyles: b,
            plateNumber: h,
            plateNumberStatus: y,
            isMobile: v,
            xmas23PlatesAllowed: x
          } = m, [k, _] = (0, s.useState)(0), {
            isValid: w
          } = y, E = (0, s.useMemo)((() => h), [h]), {
            track: P
          } = (0, g.useGtmTrack)(), S = {
            view_name: "license plate creator - " + (n ? "create plate form" : "try lp editor")
          }, N = (0, s.useRef)(null), C = (0, s.useRef)(null), I = (0, s.useRef)(null), T = (0, s.useRef)(null), R = (0, s.useRef)(null);
          (0, s.useEffect)((() => {
            u(oe, I)
          }), [I.current]), (0, s.useEffect)((() => {
            p === We.NEW_PLATE && document.activeElement === R.current && R.current?.setSelectionRange(k, k)
          }), [k]), (0, s.useEffect)((() => {
            R?.current && p === We.NEW_PLATE && setTimeout((() => R?.current?.focus()), 1e3)
          }), [p, R?.current]);
          const O = p === We.NEW_PLATE ? 0 : -1,
            j = (0, s.useCallback)((() => {
              (async () => {
                if (n && h) try {
                  e(!0);
                  const {
                    error: t,
                    result: a
                  } = await (0, f.coreScApiFetch)("games/gtao/licensePlates/validate", {
                    pingBearer: o,
                    fetchOptions: {
                      method: "POST"
                    },
                    query: {
                      plateText: h
                    }
                  });
                  if (e(!1), t) throw Object.assign(new Error(""), t);
                  const {
                    isMalformed: r,
                    isProfane: s,
                    isReserved: n,
                    isValid: c
                  } = a;
                  l({
                    isValid: c,
                    isMalformed: r,
                    isProfane: s,
                    isReserved: n,
                    statusPlateNumberBasis: h
                  }), c && (i(We.CONFIRM_ORDER), P({
                    ...S,
                    event: "virtualPageview",
                    display_type: v ? "mobile" : "desktop",
                    view_name: "license plate creator - confirm order"
                  }))
                } catch (e) {
                  d(["api", e])
                }
              })()
            }), [n, h]);
          (0, s.useEffect)((() => {
            t && (t.current = j)
          }), [j, t]);
          const A = (0, s.useMemo)((() => b?.filter((e => !e.isXmas2023Plate || e.isXmas2023Plate && x)).map((e => (0, r.jsx)(ha, {
            style: e,
            tabIndex: O
          }, e.id)))), [b, p]);
          return (0, r.jsxs)("form", {
            ref: I,
            className: "rockstargames-modules-gtao-license-plateba43ed502d425e0cabaab29089cc8371",
            onSubmit: e => {
              e.preventDefault(), R.current?.blur()
            },
            onFocusCapture: e => e.preventDefault(),
            children: [(0, r.jsxs)("section", {
              children: [(0, r.jsx)("label", {
                htmlFor: "plate-text-input",
                ref: N,
                children: a("lp.create.title")
              }), (0, r.jsxs)("div", {
                ref: C,
                className: "rockstargames-modules-gtao-license-plateae616cb4a6f094aca3d7d499be73ff81",
                children: [(0, r.jsx)("i", {
                  className: "" + (!1 === w ? "rockstargames-modules-gtao-license-plateca69ffac1f84964e08803d88539baf54" : "")
                }), (0, r.jsx)("input", {
                  id: "plate-text-input",
                  autoComplete: "off",
                  maxLength: 8,
                  onInput: e => {
                    const t = e.target.value.replace(/[^a-zA-Z0-9 ]/g, "").toUpperCase().slice(0, 8);
                    c(t), _(e.target.selectionStart || 0), y.isValid || l({
                      isValid: !0,
                      isMalformed: !1,
                      isProfane: !1,
                      isReserved: !1,
                      statusPlateNumberBasis: h
                    })
                  },
                  placeholder: "LOSANTOS",
                  pattern: "[a-zA-Z0-9]{4,10}",
                  type: "text",
                  onKeyDown: e => {
                    "Enter" === e.code && p === We.NEW_PLATE && R.current && R.current.blur()
                  },
                  value: E,
                  ref: R
                }), (0, r.jsx)(fa, {
                  plateNumberStatus: y
                })]
              })]
            }), (0, r.jsx)("hr", {
              className: "rockstargames-modules-gtao-license-platef288b4cac4582ac1a0e94b377ee74f41"
            }), (0, r.jsxs)("section", {
              children: [(0, r.jsx)("label", {
                htmlFor: "plate-style-selector",
                children: a("lp.create.bgselector")
              }), (0, r.jsx)("div", {
                id: "plate-style-selector",
                ref: T,
                className: "rockstargames-modules-gtao-license-platefef9b5e7fcd209483f2159f8a7fafccc",
                children: A
              })]
            })]
          })
        })),
        va = ({
          buttons: e,
          refName: t = pe,
          isLoading: a,
          tabIndex: n
        }) => {
          const o = (0, s.useRef)(null),
            {
              setRefs: i
            } = It();
          return (0, s.useEffect)((() => {
            i(t, o)
          }), [o.current]), (0, r.jsx)("div", {
            className: "rockstargames-modules-gtao-license-platea55ba5860ffc39b46274dc161ad56fbd",
            ref: o,
            children: e.slice(0, 2).map((({
              buttonText: e,
              isDisabled: t,
              onClick: s
            }) => (0, r.jsx)("button", {
              "data-testid": "lp-cta-sidebar",
              className: [t ? "rockstargames-modules-gtao-license-platec145f9a1a2bb42981b104f4dc9de8b1f" : "", a ? "rockstargames-modules-gtao-license-platebd434bfeedcca5d845b58eb7fcfb0b9a" : ""].join(" ").trim(),
              disabled: t,
              onClick: s,
              type: "button",
              tabIndex: n,
              "aria-label": e,
              children: e
            }, e)))
          })
        },
        xa = "rockstargames-modules-gtao-license-plateef96579824fcf289d6b760a367574ba2",
        ka = "rockstargames-modules-gtao-license-platead5528668e11995670231ff5023524c9",
        _a = (0, f.withTranslations)((({
          onToggleView: e = () => {},
          is3DToggle: t = !1,
          t: a
        }) => {
          const [n, o] = (0, s.useState)(!1), [i, c] = (0, s.useState)(!1), {
            state: l,
            setRefs: d
          } = It(), {
            currentView: u,
            isMobile: m,
            is3D: p,
            shouldForce2D: f
          } = l, {
            track: b
          } = (0, g.useGtmTrack)(), h = {
            view_name: "license plate creator - create plate form"
          }, y = (0, s.useRef)(null);
          (0, s.useEffect)((() => {
            c(/([wW]in)/i.test(window.navigator.userAgent))
          }), []), (0, s.useEffect)((() => {
            t || d(be, y)
          }), [y.current, t]), (0, s.useEffect)((() => {
            u === We.NEW_PLATE && f && o(!1)
          }), [f, u]), (0, s.useEffect)((() => {
            t || (u === We.NEW_PLATE ? n ? (b({
              ...h,
              event: "virtualPageview",
              display_type: m ? "mobile" : "desktop",
              view_name: "license plate creator - car view"
            }), b({
              ...h,
              event: "license_plate_preview_car"
            })) : b({
              ...h,
              event: "virtualPageview",
              display_type: m ? "mobile" : "desktop"
            }) : o(!1))
          }), [n, u]);
          const v = {
              carViewToggle: {
                plateView: a("lp.create.plateview"),
                carView: a("lp.create.carview")
              },
              dimensionToggle: {
                threeDimensions: "3D",
                twoDimensions: "2D"
              }
            },
            x = t ? "Switch between 2D and 3D views" : "Switch between viewing the plate on a car and by itself";
          let k = "";
          return k = t ? p ? v.dimensionToggle.threeDimensions : v.dimensionToggle.twoDimensions : n ? v.carViewToggle.carView : v.carViewToggle.plateView, (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)("button", {
              ref: y,
              type: "button",
              "data-checked": t ? p : n,
              className: "rockstargames-modules-gtao-license-platef5eb720718d122d1857b7c349c1d11d8",
              onClick: () => {
                e({
                  onStart: () => {
                    o(!n)
                  }
                })
              },
              tabIndex: 0,
              "aria-label": x,
              children: [(0, r.jsx)("div", {
                className: xa,
                children: (0, r.jsx)("p", {
                  className: i ? ka : "",
                  children: t ? v.dimensionToggle.twoDimensions : v.carViewToggle.plateView
                })
              }), (0, r.jsx)("div", {
                className: xa,
                children: (0, r.jsx)("p", {
                  className: i ? ka : "",
                  children: t ? v.dimensionToggle.threeDimensions : v.carViewToggle.carView
                })
              }), (0, r.jsx)("span", {
                className: "rockstargames-modules-gtao-license-platec508fde0acf1e67b40528d8c5a793cc0"
              })]
            }), (0, r.jsx)("span", {
              className: "rockstargames-modules-gtao-license-platede2af017fb7bf8b8c37b0b7fa3c0e605",
              "aria-live": "polite",
              children: k
            })]
          })
        })),
        wa = {
          backToPlatesButton: "rockstargames-modules-gtao-license-platec368fac8f2880833176de4c9efc3c77d",
          background: "rockstargames-modules-gtao-license-plateff9a6d4bdd87b816e79bfbe6cbbb5b9c",
          content: "rockstargames-modules-gtao-license-plated7b985669f742999a4abcd720bbafdf7",
          contentHeading: "rockstargames-modules-gtao-license-platef2038658cd0cd22aed0727b4d9499590",
          ctaText: "rockstargames-modules-gtao-license-plateedf845aae85bbfa58a60f2b434e33e48",
          hover: "rockstargames-modules-gtao-license-platedd901826f99f2cd35f5a6e25287cf7f5",
          isWindows: "rockstargames-modules-gtao-license-platead4a8d5f2f285827b19dde15197ebf43",
          orderConfirmed: "rockstargames-modules-gtao-license-platedd2c5cf0fa7931bd5b9c773c678db625",
          pillBtn: "rockstargames-modules-gtao-license-plateaf31bb793c7d277921a5692713fcda42",
          plateRedemptionInstructions: "rockstargames-modules-gtao-license-platead988eb5b2a4a0d3aea2ef9bb2d045cc",
          secondaryWrap: "rockstargames-modules-gtao-license-platef38149bb0b438f66e721920efcece6a4",
          selected: "rockstargames-modules-gtao-license-plateb2a3d08e2a413b4b6e0c4604841dab1e",
          visible: "rockstargames-modules-gtao-license-platee272c81d3eaff85310b150f61308c159"
        },
        Ea = (0, f.withTranslations)((({
          isVisible: e,
          vehicleModel: t,
          t: a,
          top: n,
          drawerY: o,
          tabIndex: i
        }) => {
          const {
            setCurrentView: c,
            setIsExpanded: l,
            setRefs: d,
            state: u
          } = It(), {
            currentView: m,
            isExpanded: p,
            refs: f,
            three: b,
            isMobile: h,
            accessiblePlates: y
          } = u, v = (0, s.useRef)(null), x = (0, s.useRef)(null), k = (0, s.useRef)(null), _ = (0, s.useRef)(null), w = (0, s.useRef)(null), {
            track: E
          } = (0, g.useGtmTrack)(), P = {
            view_name: "license plate creator - order confirmed"
          };
          (0, s.useEffect)((() => {
            d(le, w)
          }), [w.current]);
          const C = f[K]?.current,
            I = f[J]?.current,
            T = f[ee]?.current,
            R = f[Q]?.current,
            O = f[ie]?.current,
            A = f[Z]?.current,
            V = f[pe]?.current,
            M = w.current,
            L = v.current,
            z = k.current,
            D = _.current,
            W = x.current,
            Y = f[fe]?.current,
            $ = f[ce]?.current,
            H = f[me]?.current,
            U = f[q]?.current,
            F = (0, s.useRef)(null);
          (0, s.useEffect)((() => {
            F.current = y
          }), [y]);
          const B = (0, s.useCallback)((() => {
            c(We.LIST_PLATES), E({
              ...P,
              event: "cta_return_page",
              text: "order received"
            })
          }), []);
          return (0, s.useEffect)((() => {
            if (!b || !F?.current) return;
            const {
              renderer: t,
              camera: a,
              originalCameraPosition: r,
              originalCameraFov: s,
              controls: i,
              originalControlsTarget: c
            } = b;
            if (!(t && M && C && U)) return;
            const d = j();
            if (p && m === We.LIST_PLATES) {
              const e = N().timeline({
                defaults: {
                  ease: xe.transaction.confirmOrder.ease,
                  duration: xe.transaction.confirmOrder.duration
                },
                onComplete: () => {
                  l(!1)
                }
              });
              if (N().to([t.domElement, H], {
                  autoAlpha: 1,
                  ease: xe.transaction.fade.landingPage.ease,
                  duration: xe.transaction.fade.landingPage.duration
                }), h) {
                const t = {
                  opacity: 1
                };
                e.to(t, {
                  drawerHeight: n,
                  opacity: 0,
                  duration: xe.sidebar.mobile.drawer.duration,
                  ease: xe.sidebar.mobile.drawer.ease,
                  onUpdate: () => {
                    const e = n - o.get();
                    M.style.transform = `translateY(${e}px)`, M.style.opacity = t.opacity
                  }
                }, 0)
              } else e.to(M, {
                autoAlpha: 0
              }, 0).to([L, z, D], {
                autoAlpha: 0
              }), e.to(C, {
                x: "100vw",
                pointerEvents: "none",
                zIndex: "revert"
              }, 0), e.to(M, {
                x: "-100vw"
              }, 0), N().set([O, $], {
                x: 0
              }), N().set(I, {
                left: "revert"
              })
            } else if (e) {
              const e = N().timeline({
                defaults: {
                  ease: xe.transaction.confirmOrder.ease,
                  duration: xe.transaction.confirmOrder.duration
                },
                onComplete: () => {
                  l(!0), N().set(A, {
                    x: 0
                  }), b.scene.traverse((e => {
                    e.name === Ye.LP && 0 === e.userData.index && e.material && (e.material.opacity = 0)
                  })), a.position.set(r.x, r.y, r.z), i?.current && (i.current.minDistance = 0, i.current.target.set(c.x, c.y, c.z)), Y && (a.fov = s, a.updateProjectionMatrix(), ve.saturation.value = 0)
                },
                onStart: () => {
                  N().set(W, {
                    height: 0
                  })
                }
              });
              if (e.to(t.domElement, {
                  autoAlpha: 0
                }, 0), F.current.forEach(((e, t) => {
                  N().to(e.current.style, {
                    opacity: 0,
                    onComplete: 0 === t ? () => {
                      U.style.transform = "none"
                    } : void 0
                  })
                })), e.to(L, {
                  autoAlpha: 1,
                  ease: S.Power1.easeIn,
                  duration: .3,
                  onComplete: () => {
                    L.focus()
                  }
                }, "<1").to(W, {
                  height: "auto",
                  ease: S.Power2.easeInOut,
                  duration: .4
                }, "<1").to([z, D], {
                  autoAlpha: 1,
                  ease: S.Power1.easeIn,
                  duration: .3,
                  stagger: .1
                }, "<0.2"), h) {
                if (o) {
                  N().set(M, {
                    y: n - o.get(),
                    zIndex: 100,
                    pointerEvents: "all",
                    visibility: "visible"
                  });
                  const t = {
                    drawerHeight: o.get(),
                    y: n,
                    lerp: 0
                  };
                  e.to(t, {
                    y: 0,
                    drawerHeight: n,
                    lerp: 1,
                    onUpdate: () => {
                      M.style.transform = `translateY(${n-t.drawerHeight}px`, o.set(t.drawerHeight), R && (R.style.pointerEvents = "none", R.style.opacity = String(1 - t.lerp), R.style.transform = `translateY(${100*t.lerp}%)`), T && (T.style.pointerEvents = "none", T.style.opacity = String(1 - t.lerp)), e.to(V, {
                        autoAlpha: 0
                      }, "<"), M.style.opacity = t.lerp
                    }
                  }, 0)
                }
              } else e.to(C, {
                x: 0,
                pointerEvents: "all",
                zIndex: "3"
              }, 0).to(M, {
                x: 0
              }, 0).to(M, {
                autoAlpha: 1
              }, 0).to(I, {
                autoAlpha: 0,
                ease: xe.transaction.fade.out.ease,
                duration: xe.transaction.fade.out.duration
              }, 0).set(M, {
                pointerEvents: "all"
              }), I && e.to(I, {
                left: 100 - d + "vw"
              }, 0);
              E({
                ...P,
                event: "virtualPageview",
                display_type: h ? "mobile" : "desktop",
                view_name: "license plate creator - order received"
              })
            }
          }), [e, w.current, b, m, h ? o : void 0]), (0, r.jsx)("div", {
            className: [wa.orderConfirmed, p ? wa.visible : ""].join(" "),
            children: (0, r.jsx)("div", {
              ref: w,
              className: wa.background,
              children: (0, r.jsxs)("div", {
                className: wa.content,
                children: [(0, r.jsx)("h1", {
                  ref: v,
                  className: wa.contentHeading,
                  tabIndex: -1,
                  children: a("lp.success.title")
                }), (0, r.jsxs)("div", {
                  ref: x,
                  className: wa.secondaryWrap,
                  children: [(0, r.jsx)("p", {
                    ref: k,
                    className: wa.plateRedemptionInstructions,
                    dangerouslySetInnerHTML: {
                      __html: a("lp.success.description").replace("{car_name}", t)
                    }
                  }), (0, r.jsx)("button", {
                    ref: _,
                    type: "button",
                    className: wa.backToPlatesButton,
                    onClick: () => {
                      B()
                    },
                    "aria-label": a("lp.success.cta"),
                    tabIndex: i,
                    "data-testid": "lp-cta-success-confirm",
                    children: (0, r.jsx)("span", {
                      className: wa.ctaText,
                      children: a("lp.success.cta")
                    })
                  })]
                })]
              })
            })
          })
        })),
        Pa = (0, f.withTranslations)((({
          t: e,
          top: t,
          drawerY: a
        }) => {
          const {
            state: n,
            setError: o,
            setCurrentView: i,
            setIsOrderConfirmed: c,
            setPendingOrder: l,
            setRefs: d,
            setSelectedVehicle: u
          } = It(), {
            currentView: m,
            selectedVehicle: p,
            pendingOrder: b,
            plates: h,
            three: y,
            isMobile: v,
            refs: x,
            vehicles: k,
            selectedStyle: _,
            isOrderConfirmed: w,
            isExpanded: E
          } = n, {
            selectedCharacterTuple: P
          } = (0, g.useRockstarUserState)(), {
            loggedIn: S
          } = (0, g.useRockstarUser)(), I = (0, f.useRockstarTokenPing)(), T = m === We.CONFIRM_ORDER, [R, O] = (0, s.useState)(E), [A, V] = (0, s.useState)(!1), M = (0, s.useRef)(null), z = (0, s.useRef)(null), D = (0, s.useRef)(null), {
            track: W
          } = (0, g.useGtmTrack)(), Y = {
            view_name: "license plate creator - confirm order"
          }, $ = m === We.CONFIRM_ORDER ? 0 : -1;
          (0, s.useEffect)((() => {
            d(J, M)
          }), [M.current]), (0, s.useEffect)((() => {
            d(K, z)
          }), [z.current]);
          const H = x[le]?.current,
            U = x[K]?.current,
            F = x[J]?.current,
            B = x[ee]?.current,
            G = x[Q]?.current,
            X = x[q]?.current,
            te = x[ie]?.current,
            ae = x[Z]?.current,
            re = x[pe]?.current,
            se = x[ce]?.current;

          function ne() {
            if (W({
                ...Y,
                event: "virtualPageview",
                display_type: v ? "mobile" : "desktop",
                view_name: "license plate creator - create plate form"
              }), !(y?.camera && U && F && ae && H && X)) return;
            const e = {
                ease: v ? xe.sidebar.mobile.drawer.ease : xe.transaction.confirmOrder.ease,
                duration: v ? xe.sidebar.mobile.drawer.duration : xe.transaction.confirmOrder.duration
              },
              t = N().timeline({
                defaults: {
                  ...e
                },
                onComplete: () => {
                  O(!1)
                }
              });
            re && N().set(re, {
              pointerEvents: "all"
            }), v ? t.to(re, {
              autoAlpha: 1
            }, "<") : (F && t.to(F, {
              autoAlpha: 0
            }, 0), m === We.NEW_PLATE && t.to(te, {
              autoAlpha: 1
            }, "<"), t.to([te, ae, se], {
              x: 0
            }, "<"), t.to(U, {
              x: "100vw"
            }, "<"))
          }(0, s.useEffect)((() => {
            m === We.LIST_PLATES && R && ne()
          }), [m, R]);
          const oe = (0, s.useCallback)((() => {
            (async () => {
              try {
                const e = C(_);
                if (!(S && p && e?.name && P)) return;
                const [t, a] = P, {
                  index: r
                } = p, s = {
                  vehicleIndex: r,
                  plateText: h?.[0]?.plateText,
                  plateStyle: e.name
                };
                V(!0);
                const {
                  error: n
                } = await (0, f.coreScApiFetch)("games/gtao/licensePlates/order", {
                  pingBearer: I,
                  fetchOptions: {
                    body: JSON.stringify(s),
                    method: "POST"
                  },
                  query: {
                    character: a,
                    platform: t
                  }
                });
                if (V(!1), n) throw Object.assign(new Error(""), n);
                c(!0);
                const {
                  error: o,
                  result: i
                } = await (0, f.coreScApiFetch)("games/gtao/licensePlates/order", {
                  pingBearer: I,
                  query: {
                    platform: t
                  },
                  useCache: !1
                });
                if (o) throw Object.assign(new Error(""), o);
                i[`character${a}Pending`] && l(i)
              } catch (e) {
                o(["api", e])
              }
            })()
          }), [S, P, h?.[0]?.plateText, p, A, _]);
          (0, s.useEffect)((() => {
            if (m !== We.CONFIRM_ORDER || w) {
              if (v && !w) {
                re && N().set(re, {
                  pointerEvents: "all"
                });
                const e = {
                  lerp: 0
                };
                N().to(e, {
                  lerp: 1,
                  duration: xe.sidebar.mobile.drawer.duration,
                  ease: xe.sidebar.mobile.drawer.ease,
                  onUpdate: () => {
                    G && (G.style.opacity = "" + (1 - e.lerp), G.style.transform = `translateY(${100*e.lerp}%`)
                  }
                }), F && N().to(F, {
                  autoAlpha: 0,
                  duration: xe.sidebar.mobile.drawer.duration,
                  ease: xe.sidebar.mobile.drawer.ease
                }), B && (B.style.pointerEvents = "none", N().to(B.style, {
                  opacity: 0,
                  duration: xe.sidebar.mobile.drawer.duration,
                  ease: xe.sidebar.mobile.drawer.ease
                }))
              }
            } else {
              if (!(y?.camera && U && F && ae && H && X)) return;
              let e = j();
              v || 100 !== e || (e = 0);
              const t = N().timeline({
                  defaults: {
                    ease: xe.transaction.confirmOrder.ease,
                    duration: xe.transaction.confirmOrder.duration
                  },
                  onComplete: () => {
                    O(!0), D.current?.focus()
                  }
                }),
                a = {
                  autoAlpha: 1
                },
                r = {
                  autoAlpha: 0
                };
              if (re && N().set(re, {
                  pointerEvents: "none"
                }), v && (a.ease = xe.sidebar.mobile.drawer.ease, a.duration = xe.sidebar.mobile.drawer.duration, a.delay = xe.sidebar.mobile.drawer.duration / 2, r.ease = xe.sidebar.mobile.drawer.ease, r.duration = xe.sidebar.mobile.drawer.duration, F && t.to(F, a, 0), X)) {
                const e = {
                    current: 0
                  },
                  a = {
                    start: Number(getComputedStyle(X).opacity),
                    end: 1
                  };
                t.to(e, {
                  current: 1,
                  delay: xe.sidebar.mobile.drawer.duration / 2,
                  onUpdate: () => {
                    const {
                      current: t
                    } = e, r = (0, Ot.Cc)(a.start, a.end, t);
                    X.style.opacity = r
                  }
                }, 0)
              }
              if (v) {
                if (G) {
                  G.style.pointerEvents = "all", N().set(G.style, {
                    visibility: "visible"
                  });
                  const e = {
                    lerp: 0
                  };
                  N().to(e, {
                    lerp: 1,
                    duration: xe.sidebar.mobile.drawer.duration,
                    ease: xe.sidebar.mobile.drawer.ease,
                    onUpdate: () => {
                      G.style.opacity = e.lerp, G.style.transform = `translateY(${100*(1-e.lerp)}%`
                    }
                  })
                }
                B && (B.style.pointerEvents = "all", N().set(B.style, {
                  visibility: "visible"
                }), N().to(B.style, {
                  opacity: 1,
                  duration: xe.sidebar.mobile.drawer.duration,
                  ease: xe.sidebar.mobile.drawer.ease
                })), t.to(re, {
                  autoAlpha: 0
                }, "<")
              } else {
                if (te && ae && (t.to([te, ae, se], {
                    x: -1 * e + "vw"
                  }, "<"), X)) {
                  const {
                    x: a,
                    y: r,
                    scale: s
                  } = L(X), n = {
                    x: {
                      start: Number(a),
                      end: Number(a) + -e / 100 * window.innerWidth
                    },
                    y: {
                      start: Number(r),
                      end: Number(r)
                    },
                    scale: {
                      start: s,
                      end: 1
                    }
                  }, o = {
                    current: 0
                  };
                  t.to(o, {
                    current: 1,
                    onUpdate: () => {
                      const {
                        current: e
                      } = o, t = `translate(${(0,Ot.Cc)(n.x.start,n.x.end,e)}px, ${(0,Ot.Cc)(n.y.start,n.y.end,e)}px) scale(${(0,Ot.Cc)(n.scale.start,n.scale.end,e)})`;
                      X.style.transform = t
                    }
                  }, "<")
                }
                t.to(U, {
                  x: 100 - e + "vw"
                }, "<"), F && t.to(F, {
                  autoAlpha: 1
                }, "<"), t.to(te, {
                  autoAlpha: 0
                }, "<"), t.set(H, {
                  x: `${-100+e}vw`
                }, "<")
              }
            }
            R && !T && w && c(!1)
          }), [y, m, v, G, w, B, j()]), (0, s.useEffect)((() => {
            if (m !== We.CONFIRM_ORDER && k?.length) {
              let e = k[0];
              if (b) {
                const t = k.find((({
                  manufacturer: e,
                  name: t
                }) => e === b.manufacturerName && t === b.vehicleName));
                t && (e = t)
              }
              u(e)
            }
          }), [k, b]);
          const de = (0, s.useCallback)((e => {
              if (!k?.length) return;
              const t = k.find((({
                id: t
              }) => t === Number(e.target.value))) ?? null;
              u(t), W({
                ...Y,
                event: "license_plate_select_vehicle",
                position: e.target.selectedIndex
              })
            }), [k]),
            ue = (0, r.jsx)(va, {
              refName: Q,
              buttons: [{
                buttonText: e("lp.confirm.cancel"),
                isDisabled: A,
                onClick: () => {
                  i(We.NEW_PLATE), ne(), W({
                    ...Y,
                    event: "cta_cancel",
                    text: "cancel"
                  })
                }
              }, {
                buttonText: A ? (0, r.jsx)(ga, {}) : e("lp.confirm.next"),
                isDisabled: !S || !p || A,
                onClick: () => {
                  oe(), W({
                    ...Y,
                    event: "license_plate_create_confirm",
                    text: "confirm"
                  })
                }
              }],
              isLoading: A,
              tabIndex: $
            });
          let me;
          return v && (me = B ? (0, qt.createPortal)(ue, B) : null), (0, r.jsx)("div", {
            className: "rockstargames-modules-gtao-license-plateccf4dd7ed6d54ec03316f9491d1ceb0b",
            "aria-hidden": m !== We.CONFIRM_ORDER,
            tabIndex: -1,
            children: (0, r.jsxs)("div", {
              className: "rockstargames-modules-gtao-license-plated06bbda7fd9a62f1755d5b7646ae0dc9",
              ref: z,
              children: [(0, r.jsx)("span", {}), (0, r.jsxs)("div", {
                className: "rockstargames-modules-gtao-license-platea66042f8221d18c3038447193b8515e1",
                ref: M,
                children: [(0, r.jsxs)("form", {
                  className: "rockstargames-modules-gtao-license-plated893ed9c951d74a61f2c3b5ae9724a78",
                  onSubmit: e => e.preventDefault(),
                  children: [(0, r.jsxs)("div", {
                    className: "rockstargames-modules-gtao-license-platea86f2d603f8395ce6d5145291e1af131",
                    children: [(0, r.jsx)("h2", {
                      children: e("lp.confirm.title")
                    }), (0, r.jsxs)("section", {
                      children: [(0, r.jsx)("label", {
                        htmlFor: "cars",
                        children: e("lp.confirm.selector")
                      }), (0, r.jsx)("div", {
                        className: "rockstargames-modules-gtao-license-plated67bee6f05e7266d0b715666a1efc8ea",
                        children: (0, r.jsx)("select", {
                          ref: D,
                          value: p?.id ?? "null",
                          onChange: de,
                          required: !0,
                          tabIndex: $,
                          "aria-label": e("lp.confirm.selector"),
                          children: k?.map((({
                            id: e,
                            manufacturer: t,
                            name: a
                          }, s) => (0, r.jsx)("option", {
                            value: e,
                            children: `${t||""} ${a}`.trim()
                          }, s)))
                        })
                      }), (0, r.jsx)("p", {
                        className: "rockstargames-modules-gtao-license-plateca4101e90baeaaae4ff37241b3ae2e6b",
                        children: e("lp.confirm.helper")
                      })]
                    })]
                  }), (0, r.jsx)("p", {
                    className: "rockstargames-modules-gtao-license-platefb230b882dde4874f5848eecc87e4b8b",
                    children: e("lp.confirm.info")
                  })]
                }), v ? me : ue]
              }), (0, r.jsx)(Ea, {
                drawerY: a,
                top: t,
                isVisible: w,
                vehicleModel: `${p?.manufacturer||""} ${p?.name}`.trim(),
                tabIndex: w ? $ : -1
              })]
            })
          })
        })),
        Sa = {
          CTAWrap: "rockstargames-modules-gtao-license-platec688cf18f7961fb6015979a36bdf3a29",
          createNewPlate: "rockstargames-modules-gtao-license-platebde5374cbe06324c8933b73f87e62cec",
          ctaIcon: "rockstargames-modules-gtao-license-platedf010384f10f92f78b706fac6362adbf",
          ctaText: "rockstargames-modules-gtao-license-plated95d94baecd40b984572c105baf574ae",
          hidden: "rockstargames-modules-gtao-license-platea44cb80f585cfd6d060e118a3abf3f5f",
          hover: "rockstargames-modules-gtao-license-platea74d6fb98a2646a884bfeb0adc8f3bb1",
          isWindows: "rockstargames-modules-gtao-license-platec8bb7bb7f0e6ed5147fe63296d5b0b03",
          loggedOut: "rockstargames-modules-gtao-license-plateb2cc5ba7542619d20252030bd5c7b78c",
          loggedOutCTA: "rockstargames-modules-gtao-license-plateef65145f920d2317d95cc3d4df64ca80",
          loggedOutShader: "rockstargames-modules-gtao-license-platef10815fa02eb65834d7ba45bf9943b64",
          maxPlatesReached: "rockstargames-modules-gtao-license-plateb61f8b09805e416f6be5ca92e9be1000",
          maxPlatesReachedWrap: "rockstargames-modules-gtao-license-platec6ae282fa174e7b6aa74dcb096ecedda",
          newOrder: "rockstargames-modules-gtao-license-platee17102620ef875461c6592b42c9e5805",
          pendingOrderShader: "rockstargames-modules-gtao-license-platec9b06e76f487fbf8a7b35aaf533df9ef",
          pillBtn: "rockstargames-modules-gtao-license-platecf08e37f0f2e5dbb315546996d05bf51",
          selected: "rockstargames-modules-gtao-license-plated05b38c802b68d5464a8017584cc9098",
          signIn: "rockstargames-modules-gtao-license-plateefb07c1cdd128072eb2111d626c5f85a",
          tryWithoutSigningIn: "rockstargames-modules-gtao-license-plated5301ff8693b3e2758d542c26ed40d86",
          visible: "rockstargames-modules-gtao-license-platec9303bda96cb235d131e4613ee41e395"
        },
        Na = "hidden",
        Ca = "visible",
        Ia = (0, f.withTranslations)((({
          t: e
        }) => {
          const {
            setShouldRenderScene: t,
            setShouldForce2D: a,
            state: n,
            setCurrentView: o,
            setLastView: c,
            setIsScrollEnabled: l,
            setIsExpanded: d,
            setRefs: u
          } = It(), {
            loggedIn: m
          } = (0, g.useRockstarUser)(), {
            accessiblePlates: p,
            currentView: f,
            gridScale: b,
            gridState: h,
            loginUrl: y,
            is3D: v,
            isMobile: x,
            isExpanded: k,
            isScrollEnabled: _,
            lastScrollY: w,
            lastView: E,
            pendingOrder: P,
            plateNumber: S,
            plateNumberStatus: C,
            refs: I,
            three: T,
            realHeight: j,
            shouldForce2D: A
          } = n, [M, D] = (0, s.useState)(0), [W, $] = (0, s.useState)(!1), [H, U] = (0, s.useState)(!1), [F, q] = (0, s.useState)(.4 * window.innerHeight), [K, J] = (0, s.useState)(-1 * (.6 * window.innerHeight - 80)), Q = (0, s.useRef)(F), [ae, re] = (0, s.useState)(null), [se, ne] = (0, s.useState)(!1), [le, de] = (0, s.useState)(null), me = (0, s.useRef)(null), ge = (0, s.useRef)(null), he = (0, s.useRef)(null), ye = (0, s.useRef)(null), _e = (0, s.useRef)(null), we = (0, s.useRef)(!1), Ee = (0, s.useRef)(!1), [Te, Re] = (0, s.useState)(null), je = (0, s.useRef)(Te), Ae = (0, s.useRef)(null), Ve = (0, s.useRef)(null), $e = (0, s.useRef)(null), He = (0, s.useRef)(null), Ue = (0, s.useRef)(null), Fe = (0, s.useRef)(null), Be = (0, s.useRef)(null), Ge = (0, s.useRef)(null), Xe = (0, s.useRef)(null), qe = (0, s.useRef)(null), Ze = (0, s.useRef)(null), Ke = (0, s.useRef)(null), {
            track: Je
          } = (0, g.useGtmTrack)(), Qe = {
            view_name: "license plate creator - create plate form"
          };
          (0, s.useEffect)((() => {
            p?.[0]?.current && f === We.NEW_PLATE && de(L(p[0].parentElement))
          }), [p, f]);
          const et = (0, s.useRef)(null);
          (0, s.useEffect)((() => {
            le && (et.current = le)
          }), [le]), (0, s.useEffect)((() => {
            const e = f === We.NEW_PLATE || !(!R() || f !== We.CONFIRM_ORDER);
            W !== e && $(e), e || ne(!1)
          }), [f, R()]);
          const tt = (0, s.useCallback)(((e, t = !1) => {
            if (!T) return;
            const {
              scene: a,
              camera: r,
              controls: s,
              renderer: n
            } = T, o = a.getObjectByName("Scene");
            if (!o) return;
            const c = V(),
              d = x && f === We.CONFIRM_ORDER ? 1.5 : 1,
              u = !O() || x ? c * b * d : 1.6 * c * b,
              g = [];
            a.traverse((e => {
              0 === e.userData.index && (Ze.current = e, o.position.set(e.position.x, e.position.y + -4.58, e.position.z + -13.77)), e.name === Ye.LP && g.push(e)
            }));
            const h = x ? xe.sidebar.mobile.drawer.duration : xe.clickPlate.duration,
              y = N().timeline({
                defaults: {
                  duration: h,
                  ease: x ? xe.sidebar.mobile.drawer.ease : xe.clickPlate.ease
                },
                onStart: () => {
                  je.current || (s.current.minDistance = 0)
                }
              });
            switch (e) {
              case Ca: {
                const e = I[te]?.current;
                if (!s.current || !e) return;
                const o = new i.Vector3;
                Ze?.current && Ze.current.getWorldPosition(o);
                const c = I[ue].current,
                  h = document.getElementById("list-plates-sidebar"),
                  w = I[Z].current,
                  S = p?.[0].current;
                c && (h || x) && S && w && (f === We.NEW_PLATE || x && f === We.CONFIRM_ORDER) && rt(y, t);
                const C = (new i.Vector3).copy(o);
                je.current && (C.z = o.z - 5 * b);
                const T = {
                  cameraPosition: {
                    start: (new i.Vector3).copy(r.position),
                    end: new i.Vector3(o.x, o.y, o.z + u)
                  },
                  controlsTarget: {
                    start: (new i.Vector3).copy(s.current.target),
                    end: C
                  },
                  plateOpacity: g.map(((e, t) => ({
                    start: e.material.opacity,
                    end: 0 === t && v ? 1 : 0
                  }))),
                  firstPlateSaturation: {
                    start: ve.saturation.value,
                    end: 1
                  },
                  firstPlateOpacity: {
                    start: E === We.LIST_PLATES ? .2 : 1,
                    end: 1
                  },
                  cameraFov: {
                    start: r.fov,
                    end: x && f === We.CONFIRM_ORDER ? 1.2 * _e.current : _e.current
                  },
                  ctaShaderOpacity: {
                    start: e.style.opacity,
                    end: 0
                  }
                };
                if (x && S) {
                  const e = L(S.parentElement);
                  T.translateY = {
                    start: f === We.NEW_PLATE ? Ke?.current?.offsetHeight : 0,
                    end: f === We.NEW_PLATE ? 0 : Ke?.current?.offsetHeight
                  }, T.startingDrawerHeight = me.current ? me.current.get() : 0, T.startingCanvasHeight = Number(L(n.domElement).y), T.canvasWidth = n.domElement.offsetWidth, T.canvasY = {
                    start: Number(L(n.domElement).y),
                    end: .4 * window.innerHeight / -2
                  }, T.canvasYConfirmOrder = {
                    start: Number(L(n.domElement).y),
                    end: K / 1.5
                  }, T.accessiblePlateGridYConfirmOrder = {
                    start: Number(e.y),
                    end: Number(e.y) + (T.canvasYConfirmOrder.end - T.canvasYConfirmOrder.start)
                  }, T.accessiblePlateGridXConfirmOrder = {
                    start: Number(e.x),
                    end: Number(e.x)
                  }, T.accessiblePlateGridScaleConfirmOrder = {
                    start: Number(L(S.parentElement).scale),
                    end: Number(L(S.parentElement).scale) / d
                  }, T.drawerHeight = {
                    start: me.current ? me.current.get() : 0,
                    end: f === We.NEW_PLATE ? 0 : K / (k ? 1 : 2)
                  }, T.cameraFov = {
                    start: r.fov,
                    end: f === We.CONFIRM_ORDER ? 1.2 * _e.current : _e.current
                  }, T.canvasOpacity = {
                    start: n.domElement.style.opacity,
                    end: 1
                  }
                }
                const R = {
                  current: 0
                };
                if (f === We.NEW_PLATE) {
                  const o = S.querySelector("canvas");
                  y.to(R, {
                    current: 1,
                    duration: x ? xe.sidebar.mobile.drawer.duration : xe.clickPlate.duration,
                    ease: x ? xe.sidebar.mobile.drawer.ease : xe.clickPlate.ease,
                    onUpdate: () => {
                      const a = t ? 1 : R.current,
                        i = T.cameraPosition.start.clone().lerp(T.cameraPosition.end, a);
                      r.position.set(i.x, i.y, i.z);
                      const c = T.controlsTarget.start.clone().lerp(T.controlsTarget.end, a);
                      s.current.target.x = c.x, s.current.target.y = c.y, s.current.target.z = c.z, g.forEach(((e, t) => {
                        e.material && (e.material.opacity = (0, Ot.Cc)(T.plateOpacity[t].start, T.plateOpacity[t].end, a))
                      }));
                      const l = (0, Ot.Cc)(T.firstPlateSaturation.start, T.firstPlateSaturation.end, a);
                      if (ve.saturation.value = l, m && !P && o) {
                        const e = !!P,
                          t = (0, Ot.Cc)(T.firstPlateOpacity.start, T.firstPlateOpacity.end, a);
                        o.style.filter = `saturate(${l})${!e&&` opacity(${t})`}`
                      }
                      if (e) {
                        const t = (0, Ot.Cc)(T.ctaShaderOpacity.start, T.ctaShaderOpacity.end, a);
                        e.style.opacity = t
                      }
                      if (T.cameraFov.start !== T.cameraFov.end && r.updateProjectionMatrix(), x) {
                        if (Ke.current) {
                          const e = (0, Ot.Cc)(T.translateY.start, T.translateY.end, a);
                          Ke.current.style.transform = `translateY(${e}px)`, Ke.current.style.opacity = String(a), Ke.current.style.pointerEvents = "all"
                        }
                        me.current && me.current.set((0, Ot.Cc)(T.drawerHeight.start, T.drawerHeight.end, a));
                        const e = (0, Ot.Cc)(T.canvasY.start, T.canvasY.end, a);
                        n.domElement.style.transform = `translateY(${e}px)`
                      }
                    },
                    onStart: () => {
                      x ? document.body.style.touchAction = "none" : l(!1)
                    },
                    onComplete: () => {
                      f === We.NEW_PLATE && (c && (c.style.touchAction = "none"), ye.current = new i.Vector3(r.position.x, r.position.y, r.position.z), Fe?.current?.children && Fe.current.querySelectorAll("button").forEach((e => {
                        e.style.pointerEvents = "all"
                      })), x && (n.domElement.style.touchAction = "none", _ && setTimeout((() => {
                        l(!1), document.body.style.touchAction = "auto"
                      }), 200), he.current = L(n.domElement).y), o && o.classList.remove(Sa.newOrder), n.render(a, r))
                    }
                  }, 0), x && y.to(I[oe].current, {
                    autoAlpha: 1,
                    duration: t ? 0 : xe.sidebar.mobile.drawer.duration,
                    ease: xe.sidebar.mobile.drawer.ease,
                    delay: xe.sidebar.mobile.drawer.duration / 2,
                    onStart: () => {
                      Ke.current && (Ke.current.style.pointerEvents = "all", Ke.current.style.visibility = "visible")
                    }
                  }, 0), y.to([Fe.current, x ? void 0 : Ue.current], {
                    autoAlpha: 1,
                    duration: t ? 0 : xe.sidebar.in.duration,
                    ease: xe.sidebar.in.ease,
                    delay: xe.sidebar.in.delay,
                    onStart: () => {
                      Be.current && (Be.current.style.transform = "translateY(0px)")
                    },
                    onComplete: () => {
                      x || N().set([Ue.current, I[pe]?.current], {
                        pointerEvents: "all"
                      }), Fe.current && Fe.current.querySelectorAll("button").forEach((e => {
                        e.style.pointerEvents = "all"
                      }))
                    }
                  }, "<")
                } else f === We.CONFIRM_ORDER && (!0 === je.current && mt(), x && (y.to(R, {
                  current: 1,
                  duration: xe.sidebar.mobile.drawer.duration,
                  ease: xe.sidebar.mobile.drawer.ease,
                  onUpdate: () => {
                    const {
                      current: e
                    } = R;
                    if (Ke.current) {
                      me.current && me.current.set((0, Ot.Cc)(T.drawerHeight.start, T.drawerHeight.end, e));
                      const t = T.cameraPosition.start.clone().lerp(T.cameraPosition.end, e);
                      r.position.set(t.x, t.y, t.z), n.domElement.style.opacity = (0, Ot.Cc)(T.canvasOpacity.start, T.canvasOpacity.end, e), Fe?.current?.style && (Fe.current.style.opacity = String(1 - e));
                      const a = (0, Ot.Cc)(T.translateY.start, T.translateY.end, e);
                      Ke.current.style.transform = `translateY(${a}px)`, Ke.current.style.pointerEvents = "none";
                      const s = (0, Ot.Cc)(T.canvasYConfirmOrder.start, T.canvasYConfirmOrder.end, e);
                      n.domElement.style.transform = `translateY(${s}px)`;
                      const o = (0, Ot.Cc)(T.accessiblePlateGridXConfirmOrder.start, T.accessiblePlateGridXConfirmOrder.end, e),
                        i = (0, Ot.Cc)(T.accessiblePlateGridYConfirmOrder.start, T.accessiblePlateGridYConfirmOrder.end, e),
                        c = (0, Ot.Cc)(T.accessiblePlateGridScaleConfirmOrder.start, T.accessiblePlateGridScaleConfirmOrder.end, e);
                      S?.parentElement && (S.parentElement.style.transform = `translate(${o}px,\n                                        ${i}px) scale(${c})`)
                    }
                  }
                }, 0), y.to(I[oe].current, {
                  autoAlpha: 0,
                  duration: xe.sidebar.mobile.drawer.duration,
                  ease: xe.sidebar.mobile.drawer.ease
                }, 0)));
                break
              }
              default:
                if (Fe.current.querySelectorAll("button").forEach((e => {
                    e.style.pointerEvents = "none"
                  })), N().to(Fe.current, {
                    autoAlpha: 0,
                    duration: xe.sidebar.out.duration,
                    ease: xe.sidebar.out.ease,
                    delay: xe.sidebar.out.delay
                  }), x && Ke?.current) {
                  const e = {
                    transform: 0,
                    translateY: L(Ke.current).y,
                    drawerHeight: me.current ? me.current.get() : 0,
                    fov: r.fov
                  };
                  N().to(e, {
                    translateY: Ke?.current?.offsetHeight,
                    duration: xe.sidebar.mobile.drawer.duration,
                    drawerHeight: .4 * window.innerHeight,
                    fov: _e.current,
                    ease: xe.sidebar.mobile.drawer.ease,
                    onUpdate: () => {
                      Ke.current && (me.current && me.current.set(e.drawerHeight), Ke.current.style.transform = `translateY(${e.translateY}px)`, Ke.current.style.pointerEvents = "none", r.fov = e.fov, r.updateProjectionMatrix())
                    }
                  })
                }
                if (f === We.CONFIRM_ORDER ? k || 1 == !je.current && N().to(r.position, {
                    x: Number(ye.current.x),
                    y: Number(ye.current.y),
                    z: 0,
                    ease: xe.transaction.confirmOrder.ease,
                    duration: xe.transaction.confirmOrder.duration
                  }) : N().to(Ue.current, {
                    autoAlpha: 0,
                    duration: xe.sidebar.out.duration,
                    ease: xe.sidebar.out.ease,
                    delay: xe.sidebar.out.delay
                  }), f === We.LIST_PLATES) {
                  const e = I[ue].current;
                  e && (e.style.touchAction = "auto")
                }
                s?.current && (s.current.minDistance = 0), je.current = !1, Re(!1)
            }
          }), [f, T, I, x, P, b, h, w, E, j, ae, K, me.current, je.current, v]);
          (0, s.useEffect)((() => {
            I?.[pe]?.current && (Ke.current = I[pe].current)
          }), [I]), (0, s.useEffect)((() => {
            u("newPlate", Xe)
          }), [Xe.current]), (0, s.useEffect)((() => {
            u(ee, Ge)
          }), [Ge.current]), (0, s.useEffect)((() => {
            u(ie, Ue)
          }), [Ue.current]), (0, s.useEffect)((() => {
            u(ce, Fe)
          }), [Fe.current]);
          const at = (0, s.useRef)(null);
          (0, s.useEffect)((() => {
            at.current = T
          }), [T]), (0, s.useEffect)((() => {
            ge.current = w
          }), [w]);
          const rt = (0, s.useCallback)(((e, t = !1) => {
              if (!T?.controls || !p?.[0]) return;
              const {
                controls: a
              } = T, r = e || N().timeline({
                defaults: {
                  duration: 0,
                  ease: x ? xe.sidebar.mobile.drawer.ease : xe.clickPlate.ease
                },
                onStart: () => {
                  a.current.minDistance = 0
                }
              }), s = V(), n = x && f === We.CONFIRM_ORDER ? 1.5 : 1, i = !O() || x ? s * b * n : 1.6 * s * b, c = I[ue].current, l = document.getElementById("list-plates-sidebar"), d = I[Z].current, u = p[0].current;
              if (c && (x || l) && u && d) {
                const e = z(0, c, Number(j.replace("px", "")), h, x ? void 0 : {
                    x: l.offsetWidth,
                    y: 0
                  }).rect.center,
                  a = d.getBoundingClientRect(),
                  s = L(d),
                  n = L(u.parentElement),
                  m = {
                    x: a.left + a.width / 2 - Number(s.x),
                    y: a.top + a.height / 2 - Number(s.y)
                  },
                  g = 5 / i,
                  f = x || o() !== We.CONFIRM_ORDER ? 0 : -1 * l.offsetWidth,
                  b = {
                    x: m.x - e.x + f,
                    y: m.y - e.y - 80 + (E === We.CONFIRM_ORDER || t ? w : window.scrollY)
                  },
                  y = {
                    current: 0
                  },
                  v = p.map((e => e?.current ? Number(getComputedStyle(e?.current).getPropertyValue("opacity")) : null)).filter((e => e));
                console.log(u, v);
                const k = E === We.CONFIRM_ORDER ? xe.transaction.confirmOrder.ease : xe.clickPlate.ease,
                  _ = E === We.CONFIRM_ORDER ? xe.transaction.confirmOrder.duration : xe.clickPlate.duration,
                  P = .4 * window.innerHeight,
                  S = x ? xe.sidebar.mobile.drawer.duration : _,
                  N = t ? 0 : S;
                r.to(y, {
                  current: 1,
                  ease: x ? xe.sidebar.mobile.drawer.ease : k,
                  duration: N,
                  onComplete: () => {
                    de(L(u.parentElement)), ne(!0)
                  },
                  onUpdate: () => {
                    const {
                      current: a
                    } = y, r = (0, Ot.Cc)(Number(n.x), b.x, a), s = (0, Ot.Cc)(Number(n.y), b.y + (x ? P / -2 : 0), a), o = (0, Ot.Cc)(Number(n.scale), g, a);
                    u.parentElement.style.transformOrigin = `${e.x}px ${e.y}px`, u.parentElement.style.transform = `translate(${r}px, ${s}px) scale(${o})`, t || p.forEach(((e, t) => {
                      if (0 !== t && e?.current) {
                        const r = (0, Ot.Cc)(v[t], 0, Math.min(1, 20 * a));
                        e.current.style.opacity = r
                      }
                    }))
                  }
                }, "<")
              }
            }), [h, j, x, f, F, T, p, I, E, $e?.current, w]),
            st = (0, s.useCallback)((() => {
              if (!T?.controls) return;
              const {
                controls: e,
                scene: t
              } = T, a = N().timeline({
                duration: x ? xe.sidebar.mobile.drawer.duration : xe.clickPlate.duration,
                ease: x ? xe.sidebar.mobile.drawer.ease : xe.clickPlate.ease,
                onStart: () => {
                  e?.current && !je.current && (e.current.minDistance = 0)
                }
              });
              let r;
              ct(a, b, !0), t.traverse((e => {
                0 === e.userData.index && (r = e)
              })), r && N().to(r.material, {
                duration: 0,
                ease: x ? xe.sidebar.mobile.drawer.ease : xe.clickPlate.ease,
                opacity: v ? 1 : 0
              });
              const {
                renderer: s
              } = at.current;
              W ? (f === We.NEW_PLATE && (R() ? s.domElement.style.transform = `translateY(${.4*window.innerHeight/-2}px)` : s.domElement.style.transform = "translateY(0px)", Ue?.current && (Ue.current.style.opacity = "1", Ue.current.style.visibility = "visible", Ue.current.style.pointerEvents = "all")), f === We.CONFIRM_ORDER && R() && (s.domElement.style.transform = `translateY(${K/1.5}px)`)) : f !== We.CONFIRM_ORDER || R() || (s.domElement.style.transform = "translateY(0px)"), o() !== We.NEW_PLATE && o() !== We.CONFIRM_ORDER || rt(null, !0), R() && ot(), je.current && ut({
                isResize: !0,
                onComplete: null,
                delay: 0
              })
            }), [R(), W, v, f, T, Ue.current, b, w]),
            nt = (0, s.useCallback)(((e = {}, t = !1) => {
              if (!Ze?.current || !ye.current || !T?.camera) return;
              Je({
                ...Qe,
                event: "modal_close",
                element_placement: "new plate",
                view_name: "license plate creator - new plate form"
              }), Je({
                ...Qe,
                event: "cta_return_page",
                text: "(close button)"
              });
              const {
                camera: a,
                scene: r,
                controls: s,
                renderer: n
              } = T, o = r.getObjectByName("Scene"), i = r.getObjectByName("Light1"), c = r.getObjectByName("Light2"), l = r.getObjectByName("Light3"), d = n.domElement, u = N().timeline({
                defaults: {
                  ease: xe.toggleView.camera.ease,
                  duration: t ? 0 : xe.toggleView.camera.duration
                },
                onStart: () => {
                  s?.current && (s.current.minDistance = 2, s.current.enableZoom = !1, s.current.enabled = !1)
                },
                onComplete: () => {
                  s?.current && (s.current.minDistance = 0, s.current.maxPolarAngle = ke.plateView.maxPolarAngle, s.current.minPolarAngle = ke.plateView.minPolarAngle, s.current.maxAzimuthAngle = ke.plateView.maxAzimuthAngle, s.current.minAzimuthAngle = ke.plateView.minAzimuthAngle, s.current.enableZoom = !1), Q.current = 0, e.onComplete && e.onComplete()
                }
              });
              u.to(a.position, {
                x: Number(ye.current.x),
                y: Number(ye.current.y),
                z: Number(ye.current.z)
              }, 0).to(d.style, {
                opacity: 1
              }, "<").to(Ze.current.rotation, {
                x: 0
              }, "<").to(i, {
                intensity: 0
              }, "<").to([c, l], {
                intensity: Le
              }, "<").to(c.position, {
                x: Pe,
                y: Se,
                z: Ne
              }, "<").to(l.position, {
                x: Ie
              }, "<").set(Ze.current, {
                receiveShadow: !1
              }, .4).set(Ze.current.material, {
                depthTest: !1
              }, "<"), Ze?.current?.material && u.to(Ze.current.material, {
                envMapIntensity: ze
              }, "<"), o.traverse((e => {
                e.material && N().to(e.material, {
                  opacity: 0,
                  duration: t ? 0 : xe.toggleView.fadeOut.duration,
                  ease: xe.toggleView.fadeOut.ease
                })
              }))
            }), [Ze.current, ye.current, T]);
          (0, s.useEffect)((() => {
            T?.scene && !_e.current && (_e.current = T.camera.fov)
          }), [_e.current, T]), (0, s.useEffect)((() => {
            T?.scene && Ke.current && tt(W ? Ca : Na)
          }), [T, W, f === We.CONFIRM_ORDER, E]), (0, s.useEffect)((() => {
            T?.scene && Ke.current && tt(W ? Ca : Na, !0)
          }), [x]);
          const ot = (0, s.useCallback)((() => {
            if (Ke?.current && x && Xe.current) {
              const e = Xe.current.offsetHeight + 80,
                t = e - window.innerHeight,
                a = .4 * e;
              D(a - 48 - Ke.current.offsetHeight - t), q(a), J(-1 * (.6 * e - 80)), Ke.current.style.transform = `translateY${Ke.current.offsetHeight}px`
            }
          }), [Ke.current, x, Xe.current]);
          (0, s.useEffect)((() => {
            ot()
          }), [Ke.current, x, Xe.current]), (0, s.useEffect)((() => {
            Ve.current || (Ve.current = f), $e.current || ($e.current = Ve.current), f && ($e.current = Ve.current, c(Ve.current), Ve.current = f), f === We.LIST_PLATES && je.current && nt({}, !0), f === We.NEW_PLATE && (He.current = !1)
          }), [f]), (0, s.useEffect)((() => {
            const e = x ? xe.sidebar.mobile.drawer.duration : xe.clickPlate.duration,
              a = se ? 0 : e;
            if (!T?.scene) return;
            if (!T?.scene || !p?.[0]?.current) return;
            const {
              scene: r,
              renderer: s,
              camera: n
            } = T, c = [], l = [], d = p[0].current;
            if (r.traverse((e => {
                e.name === Ye.LP && e.material ? l[e.userData.index] = e.material : c.push(e.material)
              })), o() === We.NEW_PLATE)
              if (v) {
                const e = l[0];
                if (N().to(e, {
                    opacity: 1,
                    delay: a,
                    duration: x ? xe.sidebar.mobile.drawer.duration : xe.clickPlate.duration,
                    ease: x ? xe.sidebar.mobile.drawer.ease : xe.clickPlate.ease,
                    onStart: () => {
                      t(!0), N().to(d.style, {
                        opacity: 0,
                        duration: xe.accessibilePlate.duration,
                        ease: xe.accessibilePlate.ease,
                        onComplete: () => {
                          Ee.current = !1
                        }
                      })
                    }
                  }), !He.current) {
                  const e = r.getObjectByName("Light4"),
                    t = new i.Vector3;
                  Ze?.current && (Ze.current.getWorldPosition(t), N().to(e.position, {
                    x: Me.x,
                    y: t.y + Me.y,
                    z: Me.z,
                    delay: a,
                    duration: xe.plateShimmer.duration,
                    ease: xe.plateShimmer.ease
                  }));
                  const s = {
                    current: 0
                  };
                  N().to(s, {
                    current: 1,
                    delay: a,
                    duration: xe.plateShimmer.duration,
                    ease: xe.plateShimmer.ease,
                    onUpdate: () => {
                      const {
                        current: t
                      } = s, a = (0, Ot.Cc)(0, Math.PI, t);
                      e.intensity = .3 * Math.sin(a), e.color = new i.Color(a, .9 * a, a)
                    }
                  }), He.current = !0
                }
              } else {
                const e = l[0];
                N().to(d.style, {
                  opacity: 1,
                  duration: xe.accessibilePlate.duration,
                  ease: xe.accessibilePlate.ease,
                  onStart: () => {
                    N().to(e, {
                      opacity: 0,
                      duration: xe.accessibilePlate.duration,
                      ease: xe.accessibilePlate.ease,
                      onComplete: () => {
                        t(!1), Ee.current = !1, s.render(r, n)
                      }
                    })
                  }
                })
              }
          }), [v, x, T, p]), (0, s.useEffect)((() => {
            if (o() === We.NEW_PLATE && se && T?.camera) {
              const {
                camera: e
              } = T, t = v ? 0 : .5;
              v || N().to(e.position, {
                duration: t,
                x: Number(ye.current.x),
                y: Number(ye.current.y),
                z: Number(ye.current.z)
              })
            }
          }), [v, T]);
          const it = (0, s.useRef)(0);
          (0, s.useEffect)((() => {
            b && (it.current = b), o() === We.NEW_PLATE || o() === We.CONFIRM_ORDER ? st() : R() && (ot(), re(window.innerHeight), Ke.current && (Ke.current.style.transform = `translateY(${Ke.current.offsetHeight}px`))
          }), [b]);
          const ct = (0, s.useCallback)(((e, t, a = !1) => {
              if (Ve.current !== We.NEW_PLATE && Ve.current !== We.CONFIRM_ORDER) return;
              const {
                renderer: r
              } = T;
              Y({
                plateIndex: 0,
                three: T,
                timeline: e,
                gridScale: t
              }, {
                onComplete: e => {
                  e?.three?.camera && (ye.current = new i.Vector3(e.three.camera.position.x, e.three.camera.position.y, e.three.camera.position.z)), Fe?.current?.children && Fe.current.querySelectorAll("button").forEach((e => {
                    e.style.pointerEvents = "all"
                  })), x && (r.domElement.style.touchAction = "none")
                },
                tweenPosition: 0,
                isResize: a
              })
            }), [T, f]),
            lt = (0, s.useCallback)((e => {
              if (!T?.scene) return;
              const {
                drawerStateRef: t
              } = e, a = p?.[0]?.current;
              if (a) {
                const {
                  renderer: e,
                  camera: r
                } = T, s = e.domElement, n = L(a.parentElement), o = {
                  buttonWrapOpacity: Be.current.style.opacity,
                  canvasWrapOpacity: s.style.opacity,
                  fov: r.fov,
                  canvasTranslateY: Number(L(s).y),
                  accessiblePlateX: Number(n.x),
                  accessiblePlateY: Number(n.y),
                  accessiblePlateScale: Number(n.scale)
                }, i = {}, c = Fe.current.querySelectorAll("button");
                t.current === B ? (i.buttonWrapOpacity = 0, i.canvasWrapOpacity = 0, i.fov = _e.current, i.canvasTranslateY = he.current, i.accessiblePlateX = et.current.x, i.accessiblePlateY = et.current.y, i.accessiblePlateScale = et.current.scale, s.style.pointerEvents = "all", c.forEach((e => {
                  e.style.pointerEvents = "none"
                }))) : (t.current === G || t.current === X) && (i.buttonWrapOpacity = 1, i.canvasWrapOpacity = 1, i.fov = _e.current, i.canvasTranslateY = he.current, i.accessiblePlateX = et.current.x, i.accessiblePlateY = et.current.y, i.accessiblePlateScale = et.current.scale, s.style.pointerEvents = "all", c.forEach((e => {
                  e.style.pointerEvents = "all"
                }))), N().to(o, {
                  buttonWrapOpacity: i.buttonWrapOpacity,
                  canvasWrapOpacity: i.canvasWrapOpacity,
                  fov: i.fov,
                  accessiblePlateX: i.accessiblePlateX,
                  accessiblePlateY: i.accessiblePlateY,
                  accessiblePlateScale: i.accessiblePlateScale,
                  canvasTranslateY: i.canvasTranslateY,
                  duration: xe.sidebar.mobile.drawerSnap.duration,
                  ease: xe.sidebar.mobile.drawerSnap.ease,
                  onUpdate: () => {
                    s.style.opacity = o.canvasWrapOpacity, Be.current.style.opacity = o.buttonWrapOpacity, a && (a.parentElement.style.opacity = o.canvasWrapOpacity, a.parentElement.style.transform = `translate(${o.accessiblePlateX}px,\n                            ${o.accessiblePlateY}px) scale(${o.accessiblePlateScale})`), r.fov = o.fov, r.updateProjectionMatrix(), s.style.transform = `translateY(${o.canvasTranslateY}px)`
                  }
                })
              }
            }), [T, F, p, he.current]),
            dt = (0, s.useCallback)((e => {
              if (!T?.scene || !Ke.current) return;
              const {
                dragParams: t,
                offset: a,
                y: r,
                top: s,
                bottom: n
              } = e, {
                camera: o,
                renderer: i
              } = T, c = i.domElement, l = p?.[0]?.current;
              if (l)
                if (t.dragging) {
                  const e = (0, Ot.U4)(0, s, r.get()),
                    i = (0, Ot.Cc)(0, 1, 1 - e);
                  c.style.opacity = i;
                  const d = (0, Ot.Cc)(0, 1, 1 - 3 * e);
                  if (l.parentElement.style.opacity = d, Be.current.style.opacity = i, Fe.current.querySelectorAll("button").forEach((e => {
                      e.style.pointerEvents = r.get() >= 0 ? "all" : "none"
                    })), Be.current.style.transform = `translateY(${r.get()}px)`, a.current > 0 && Math.abs(t.delta[1]) > 0 && o && a.current < n) {
                    const e = (0, Ot.U4)(0, n, r.get()),
                      a = je.current ? 60 : 40,
                      s = (0, Ot.Cc)(_e.current, a, e);
                    o.fov = s, o.updateProjectionMatrix();
                    const i = Number(L(c).y) + t.delta[1] / 2;
                    if (c.style.transform = `translateY(${i}px)`, l) {
                      const e = L(l.parentElement),
                        a = Number(e.x),
                        r = Number(e.scale),
                        s = Number(L(l.parentElement).y) + t.delta[1] / 2;
                      l.parentElement.style.transform = `translate(${a}px,\n                                ${s}px) scale(${r})`
                    }
                  }
                } else {
                  const e = Number(L(c).y),
                    t = {
                      buttonWrapOpacity: Be.current.style.opacity,
                      canvasWrapOpacity: c.style.opacity,
                      fov: o.fov,
                      canvasTranslateY: e,
                      accessibilityPlateY: Number(L(l.parentElement).y),
                      accessibilityPlateOpacity: l.parentElement.style.opacity
                    };
                  a.current < s / 2 ? (Fe.current.querySelectorAll("button").forEach((e => {
                    e.style.pointerEvents = "none"
                  })), N().to(t, {
                    buttonWrapOpacity: 0,
                    canvasWrapOpacity: 0,
                    accessibilityPlateOpacity: 0,
                    fov: je.current ? 60 : 40,
                    duration: xe.sidebar.mobile.drawerSnap.duration,
                    ease: xe.sidebar.mobile.drawerSnap.ease,
                    onUpdate: () => {
                      c.style.opacity = t.canvasWrapOpacity, l.parentElement.style.opacity = t.accessibilityPlateOpacity, Be.current.style.opacity = t.buttonWrapOpacity
                    }
                  })) : a.current > n / 2 ? (c.style.pointerEvents = "all", Fe.current.querySelectorAll("button").forEach((e => {
                    e.style.pointerEvents = "all"
                  })), N().to(t, {
                    buttonWrapOpacity: 1,
                    canvasWrapOpacity: 1,
                    accessibilityPlateY: Number(et.current.y) + n / 2,
                    canvasTranslateY: Number(he.current) + n / 2,
                    fov: je.current ? 60 : 40,
                    duration: xe.sidebar.mobile.drawerSnap.duration,
                    ease: xe.sidebar.mobile.drawerSnap.ease,
                    onUpdate: () => {
                      c.style.opacity = t.canvasWrapOpacity, Be.current.style.opacity = t.buttonWrapOpacity, o.fov = t.fov, o.updateProjectionMatrix(), c.style.transform = `translateY(${t.canvasTranslateY}px)`, l.parentElement.style.transform = `translate(${et.current.x}px,\n                                ${t.accessibilityPlateY}px) scale(${et.current.scale})`
                    }
                  })) : Math.abs(a.current) > 0 && (c.style.pointerEvents = "all", Fe.current.querySelectorAll("button").forEach((e => {
                    e.style.pointerEvents = "all"
                  })), N().to(t, {
                    buttonWrapOpacity: 1,
                    canvasWrapOpacity: 1,
                    accessibilityPlateOpacity: 1,
                    accessibilityPlateY: Number(et.current.y),
                    fov: _e.current,
                    canvasTranslateY: .4 * window.innerHeight / -2,
                    duration: xe.sidebar.mobile.drawerSnap.duration,
                    ease: xe.sidebar.mobile.drawerSnap.ease,
                    onUpdate: () => {
                      if (c.style.opacity = t.canvasWrapOpacity, Be.current.style.opacity = t.buttonWrapOpacity, l.parentElement.style.opacity = t.accessibilityPlateOpacity, o.fov = t.fov, o.updateProjectionMatrix(), a.current > 0) {
                        c.style.transform = `translateY(${t.canvasTranslateY}px)`;
                        const e = L(l.parentElement),
                          a = Number(e.x),
                          r = Number(e.scale),
                          s = t.accessibilityPlateY;
                        l.parentElement.style.transform = `translate(${a}px,\n                                    ${s}px) scale(${r})`
                      }
                    }
                  }))
                }
            }), [T, Ke.current, F, p, he.current, le]),
            ut = (0, s.useCallback)(((e = {
              isResize: !1,
              onComplete: null,
              delay: 0
            }) => {
              const {
                isResize: t,
                delay: a
              } = e, {
                scene: r,
                camera: s,
                controls: n
              } = T, o = r.getObjectByName("Scene"), c = r.getObjectByName("Light1"), l = r.getObjectByName("Light2"), d = r.getObjectByName("Light3");
              let u = null;
              const m = [];
              o.traverse((e => {
                e.material && (e.material.transparent = !0, e.material.mesh = e, "Banshee_Interior_LightMap" === e.material.name && (e.renderOrder = 99999), m.push(e.material))
              })), r.traverse((e => {
                e.name === Ye.LP && 0 === e.userData.index && (u = e)
              }));
              const p = new i.Vector3;
              Ze.current.getWorldPosition(p);
              const g = {
                camPositionY: s.position.y,
                camPositionZ: s.position.z,
                controlsTargetZ: n.current.target.z,
                plateRotationX: Ze.current.rotation.x,
                light1Intensity: c.intensity,
                light2Intensity: l.intensity,
                light2PositionX: l.position.x,
                light2PositionY: l.position.y,
                light2PositionZ: l.position.z,
                light3Intensity: d.intensity,
                light3PositionX: d.position.x,
                envMapIntensity: Ze?.current?.material?.envMapIntensity
              };
              N().to(g, {
                camPositionY: s.position.y + 2.5 * b,
                camPositionZ: s.position.z + (x ? 24 * b : 12 * b),
                controlsTargetZ: n.current.target.z - 5 * b,
                plateRotationX: -.16,
                light1Intensity: Le,
                light2Intensity: .2,
                light2PositionX: Ce.x,
                light2PositionY: Ce.y,
                light2PositionZ: Ce.z,
                light3Intensity: Le,
                light3PositionX: Oe.x,
                delay: a,
                envMapIntensity: De,
                duration: t ? 0 : xe.toggleView.camera.duration,
                ease: xe.toggleView.camera.ease,
                onStart: () => {
                  const e = x ? 52 * b : 26 * b;
                  n.current.enableZoom = !0, n.current.maxPolarAngle = ke.carView.maxPolarAngle, n.current.minPolarAngle = ke.carView.minPolarAngle, n.current.maxAzimuthAngle = ke.carView.maxAzimuthAngle, n.current.minAzimuthAngle = ke.carView.minAzimuthAngle, n.current.maxDistance = e, o.visible = !0, I[be].current.style.pointerEvents = "none"
                },
                onUpdate: () => {
                  s.position.set(s.position.x, g.camPositionY, g.camPositionZ), n.current.target.z = g.controlsTargetZ, Ze.current.rotation.x = g.plateRotationX, Ze.current?.material && (Ze.current.material.envMapIntensity = g.envMapIntensity), c.intensity = g.light1Intensity, l.intensity = g.light2Intensity, l.position.set(g.light2PositionX, g.light2PositionY, g.light2PositionZ), d.intensity = g.light3Intensity, d.position.x = g.light3PositionX
                },
                onComplete: () => {
                  we.current = !1, n.current.minDistance = x ? 20 * b : 10 * b, I[be].current.style.pointerEvents = "all"
                }
              });
              const f = {
                opacity: 0
              };
              N().to(f, {
                opacity: 1,
                duration: t ? 0 : xe.toggleView.fadeOut.duration,
                ease: xe.toggleView.fadeOut.ease,
                delay: a,
                onUpdate: () => {
                  m.forEach((e => {
                    e.opacity = f.opacity
                  }))
                }
              }), u && N().to(u, {
                duration: 0,
                delay: t ? 0 : .4 + a,
                onComplete: () => {
                  u.material && (u.receiveShadow = !0, u.material.depthTest = !1, u.renderOrder = 99998)
                }
              })
            }), [T, je.current, Ze, Ze?.current, b, x, A, v]),
            mt = (0, s.useCallback)(((e = {
              delay: 0,
              onComplete: null
            }) => {
              if (!T?.scene || !T?.controls?.current || !Ze || !Ze?.current || we.current) return;
              const {
                scene: t,
                camera: r,
                controls: s
              } = T, n = e.delay || 0, o = t.getObjectByName("Scene"), c = t.getObjectByName("Light1"), l = t.getObjectByName("Light2"), d = t.getObjectByName("Light3"), u = V(), m = !O() || x ? u * b : 1.6 * u * b;
              if (o && s && !we.current && !Ee.current) {
                const t = [];
                if (o.traverse((e => {
                    e.material && (e.material.transparent = !0, e.material.mesh = e, "Banshee_Interior_LightMap" === e.material.name && (e.renderOrder = 99999), t.push(e.material))
                  })), je.current) {
                  const a = new i.Vector3;
                  if (Ze.current.getWorldPosition(a), setTimeout((() => {
                      Ze.current.receiveShadow = !1, Ze.current.material.depthTest = !1
                    }), 400), !we.current) {
                    const n = {
                      camPositionX: r.position.x,
                      camPositionY: r.position.y,
                      camPositionZ: r.position.z,
                      controlsTargetX: s.current.target.x,
                      controlsTargetY: s.current.target.y,
                      controlsTargetZ: s.current.target.z,
                      plateRotationX: Ze.current.rotation.x,
                      light1Intensity: c.intensity,
                      light2Intensity: l.intensity,
                      light2PositionX: l.position.x,
                      light2PositionY: l.position.y,
                      light2PositionZ: l.position.z,
                      light3Intensity: d.intensity,
                      light3PositionX: d.position.x,
                      envMapIntensity: Ze?.current?.material?.envMapIntensity
                    };
                    N().to(n, {
                      camPositionX: a.x,
                      camPositionY: a.y,
                      camPositionZ: a.z + m,
                      controlsTargetX: a.x,
                      controlsTargetY: a.y,
                      controlsTargetZ: a.z,
                      plateRotationX: 0,
                      light1Intensity: 0,
                      light2Intensity: Le,
                      light2PositionX: Pe,
                      light2PositionY: Se,
                      light2PositionZ: Ne,
                      light3Intensity: Le,
                      light3PositionX: Ie,
                      envMapIntensity: ze,
                      duration: xe.toggleView.camera.duration,
                      ease: xe.toggleView.camera.ease,
                      onStart: () => {
                        s.current.minDistance = 2, s.current.enableZoom = !1, I[be].current.style.pointerEvents = "none";
                        const e = N().timeline({
                          duration: x ? xe.sidebar.mobile.drawer.duration : xe.clickPlate.duration,
                          ease: x ? xe.sidebar.mobile.drawer.ease : xe.clickPlate.ease
                        });
                        ct(e, b)
                      },
                      onUpdate: () => {
                        Ze.current.rotation.x = n.plateRotationX, Ze.current?.material && (Ze.current.material.envMapIntensity = n.envMapIntensity), c.intensity = n.light1Intensity, l.intensity = n.light2Intensity, l.position.set(n.light2PositionX, n.light2PositionY, n.light2PositionZ), d.intensity = n.light3Intensity, d.position.x = n.light3PositionX
                      },
                      onComplete: () => {
                        we.current = !1, o.visible = !1, s.current.maxPolarAngle = ke.plateView.maxPolarAngle, s.current.minPolarAngle = ke.plateView.minPolarAngle, s.current.maxAzimuthAngle = ke.plateView.maxAzimuthAngle, s.current.minAzimuthAngle = ke.plateView.minAzimuthAngle, I[be].current.style.pointerEvents = "all", e.onComplete && e.onComplete()
                      }
                    });
                    const i = {
                      opacity: 1
                    };
                    N().to(i, {
                      opacity: 0,
                      duration: xe.toggleView.fadeOut.duration,
                      ease: xe.toggleView.fadeOut.ease,
                      onUpdate: () => {
                        t.forEach((e => {
                          e.opacity = i.opacity
                        }))
                      }
                    })
                  }
                } else we.current || (A && a(!1), ut({
                  isResize: !1,
                  onComplete: null,
                  delay: n
                }));
                je.current = !je.current
              }
            }), [T, je.current, Ze, Ze?.current, b, A, v]),
            pt = (0, s.useCallback)((e => {
              if (!T?.scene || !Ke?.current || !Be.current) return;
              const t = I[fe]?.current;
              if (t) {
                const {
                  camera: a,
                  renderer: r
                } = T, s = r.domElement, {
                  y: n,
                  sidebarRef: o
                } = e, i = t.offsetHeight, c = {
                  submitOrderTranslateY: 0,
                  mobileSidebarHeight: n.get(),
                  opacity: o.current.style.opacity,
                  fov: a.fov,
                  height: s.offsetHeight
                };
                N().to(c, {
                  opacity: 1,
                  height: i,
                  mobileSidebarHeight: .4 * window.innerHeight,
                  fov: _e.current,
                  submitOrderTranslateY: Ke.current.offsetHeight,
                  duration: xe.sidebar.mobile.drawer.duration,
                  ease: xe.sidebar.mobile.drawer.ease,
                  onUpdate: () => {
                    o.current.style.transform = `translateY(${c.mobileSidebarHeight}px)`, o.current.style.opacity = c.opacity, Ke.current.style.transform = `translateY(${c.submitOrderTranslateY}px)`, Be.current.style.opacity = c.opacity, s.style.height = c.height, n.set(c.mobileSidebarHeight), a && (a.fov = c.fov, a.updateProjectionMatrix())
                  },
                  onComplete: () => {
                    s.style.pointerEvents = "all"
                  }
                }), o.current.style.pointerEvents = "none"
              }
            }), [I, Ue?.current, Ke?.current, T, F]),
            gt = e => {
              if (!T?.scene) return;
              const {
                sidebarRef: t,
                offset: a,
                y: r
              } = e, {
                sidebar: s
              } = xe, {
                duration: n,
                ease: o
              } = s.mobile.drawer;
              re(r), me.current = r, t.current.style.pointerEvents = "all";
              const i = {
                mobileSidebarHeight: .4 * window.innerHeight,
                opacity: t.current.style.opacity
              };
              N().to(i, {
                opacity: 1,
                duration: n,
                ease: o,
                onUpdate: () => {
                  t.current.style.opacity = i.opacity, t.current.style.transform = `translateY(${i.mobileSidebarHeight}px)`, a.current = i.mobileSidebarHeight, r.set(a.current), Be.current.style.transform = `translateY(${i.mobileSidebarHeight}px)`
                }
              })
            },
            ft = (0, s.useMemo)((() => {
              const {
                isValid: t,
                statusPlateNumberBasis: a
              } = C, s = H ? (0, r.jsx)(ga, {}) : e("lp.create.next");
              return (0, r.jsx)(va, {
                buttons: [{
                  buttonText: m ? s : e("lp.create.signin"),
                  isDisabled: !!m && (H || !S || !t && S === a),
                  onClick: async () => {
                    Ae?.current?.(), m || (Je({
                      ...Qe,
                      event: "cta_login",
                      text: "sign in",
                      link_url: y
                    }), window.location.href = y)
                  }
                }],
                isLoading: H,
                isVisible: [We.NEW_PLATE, We.CONFIRM_ORDER].includes(f),
                tabIndex: f === We.NEW_PLATE ? 0 : -1
              })
            }), [S, f, m, W, C, Ae.current, H]),
            bt = (0, s.useCallback)((() => {
              d(!k)
            }), [k]),
            ht = (0, s.useMemo)((() => x ? (0, r.jsxs)(Jt, {
              bottom: M,
              isVisible: W,
              onDrag: dt,
              onHide: pt,
              onShow: gt,
              onTap: lt,
              top: K,
              drawerY: ae,
              mobileSidebarHeight: F,
              children: [(0, r.jsx)(ya, {
                validateFnRef: Ae,
                setIsLoading: U
              }), (0, r.jsx)(Pa, {
                top: K,
                drawerY: ae
              })]
            }) : (0, r.jsxs)("div", {
              ref: Ue,
              className: "rockstargames-modules-gtao-license-platec6bd2543961f51ab8a2440a36d014d8d",
              children: [(0, r.jsx)("hr", {
                className: "rockstargames-modules-gtao-license-platec0d3c5fa81bf6bd68d33033581b041ee",
                onClick: () => {
                  bt()
                },
                "aria-hidden": "true"
              }), (0, r.jsx)(ya, {
                validateFnRef: Ae,
                setIsLoading: U
              }), ft]
            })), [S, M, k, x, W, me.current, Ue.current, K, ae, H, F]);
          return (0, r.jsxs)("div", {
            ref: Xe,
            className: "rockstargames-modules-gtao-license-platef69d51cdeb1d5ee141cae55f8b4f9adb",
            children: [ht, (0, r.jsxs)("div", {
              ref: Fe,
              className: "rockstargames-modules-gtao-license-platee49deea3c780db5e5416573fa9f90f66",
              children: [(0, r.jsx)(Qt, {
                onClick: () => {
                  we.current || nt({
                    onComplete: () => {
                      ne(!1), o(We.LIST_PLATES)
                    }
                  })
                }
              }), (0, r.jsxs)(Zt.animated.div, {
                ref: Be,
                className: "rockstargames-modules-gtao-license-platedb8fd67aad3682fb0e39e3d4e408641a",
                style: ae ? {
                  y: ae
                } : void 0,
                children: [(0, r.jsx)(_a, {
                  is3DToggle: !0,
                  onToggleView: () => {
                    Ee.current || we.current || (je.current && !A ? mt({
                      onComplete: () => {
                        a(!A), Re(!1)
                      }
                    }) : a(!A), Ee.current = !0)
                  }
                }), (0, r.jsx)(_a, {
                  is3DToggle: !1,
                  onToggleView: e => {
                    if (!we.current && !Ee.current) {
                      const t = x ? xe.sidebar.mobile.drawer.duration : xe.clickPlate.duration,
                        a = v ? 0 : t;
                      "function" == typeof e?.onStart && e.onStart(), mt({
                        delay: a
                      }), we.current = !0
                    }
                  }
                })]
              })]
            }), (0, r.jsxs)("div", {
              ref: qe,
              className: "rockstargames-modules-gtao-license-plateff5da204c5963e1a720d9dcf9174ccd5",
              children: [x && ft, x && (0, r.jsx)("div", {
                className: "rockstargames-modules-gtao-license-platec3a6fc73a8acccc39969733f69624d88",
                ref: Ge
              })]
            })]
          })
        })),
        Ta = "rockstargames-modules-gtao-license-plateb81496aa3fc265d184341f41ec869831",
        Ra = (0, n.defineMessages)({
          lpe_sidebar_total_plates_text: {
            id: "lpe_sidebar_total_owned_plates",
            description: "Text for the total number of owned plates",
            defaultMessage: "{total} owned plates out of a maximum of {max}"
          }
        }),
        Oa = "rockstargames-modules-gtao-license-platee8b715cd9fe57b8045d6cdba432a383d",
        ja = "rockstargames-modules-gtao-license-platedb428a8c19f00e1957c84f82211c4d0c",
        Aa = (0, f.withTranslations)((({
          t: e
        }) => {
          const t = (0, n.useIntl)(),
            {
              loggedIn: a
            } = (0, g.useRockstarUser)(),
            {
              setRefs: o,
              state: i
            } = It(),
            {
              plates: c,
              isMobile: l
            } = i,
            d = (0, s.useRef)(null),
            u = (0, s.useRef)(null),
            m = (0, s.useRef)(null);
          (0, s.useEffect)((() => {
            o(me, d)
          }), [d.current, l]), (0, s.useEffect)((() => {
            o(de, m)
          }), [m.current, l]), (0, s.useEffect)((() => {
            o(ge, u)
          }), [u.current]);
          const p = c?.filter((({
            faux: e = !1
          }) => !e))?.length ?? 0;
          return (0, r.jsxs)("div", {
            id: "list-plates-sidebar",
            ref: d,
            className: "rockstargames-modules-gtao-license-platef66c6c22d9f6f0fa0968c042f7633c80",
            children: [(0, r.jsx)("div", {
              className: "rockstargames-modules-gtao-license-platebf26a866f143c9adce282b703ad336b7",
              children: (0, r.jsx)(ea, {})
            }), (0, r.jsxs)("div", {
              className: "rockstargames-modules-gtao-license-plated89cb92c0040dfed9866f721fd0474b9",
              children: [(0, r.jsxs)("div", {
                className: "rockstargames-modules-gtao-license-platee34cc310994432a6d9929a1ed42bd77f",
                children: [(0, r.jsx)("h1", {
                  className: "rockstargames-modules-gtao-license-plateaaa02a4c0fe64c1fd39f7ad43beb99bb",
                  children: e("lp.landing.title")
                }), (0, r.jsx)("p", {
                  className: "rockstargames-modules-gtao-license-platee1341c7b8cf44962c1cac76dcd4961bd",
                  children: e("lp.landing.description")
                }), (0, r.jsx)("div", {
                  className: "rockstargames-modules-gtao-license-platef4ab517197cf42b833e2769cd1f39867",
                  children: (0, r.jsxs)("div", {
                    children: [" ", e("lp.landing.helper.intro"), (0, r.jsx)("a", {
                      target: "_blank",
                      href: "https://support.rockstargames.com/articles/249hFb5jI2MALgwGWd4iJ1/grand-theft-auto-online-license-plate-creator-faq",
                      children: e("lp.landing.helper.link")
                    })]
                  })
                })]
              }), a && (0, r.jsxs)("div", {
                className: "rockstargames-modules-gtao-license-plateab73d4ca22b28ac6510b46c2e383d2e5",
                children: [(0, r.jsx)("h5", {
                  "aria-hidden": !0,
                  children: e("lp.landing.plates")
                }), (0, r.jsx)("span", {
                  className: "rockstargames-modules-gtao-license-platebc954b400e6f92736070544d7f74ff68",
                  children: t.formatMessage(Ra.lpe_sidebar_total_plates_text, {
                    total: p,
                    max: 30
                  })
                }), (0, r.jsxs)("span", {
                  className: "rockstargames-modules-gtao-license-platef67982f2958ee2ede04484b6c12301cb",
                  "aria-hidden": !0,
                  children: [(0, r.jsxs)("span", {
                    className: "rockstargames-modules-gtao-license-platedf8be750402f23ec36aa794c46b93020",
                    children: [u?.current && (0, r.jsx)("span", {
                      ref: u,
                      className: "rockstargames-modules-gtao-license-platea8baf9af6883055b425ec8f1de6b47c1",
                      children: (0, r.jsx)(ga, {
                        type: "THREE_DOTS"
                      })
                    }), (0, r.jsx)("span", {
                      ref: m,
                      className: "rockstargames-modules-gtao-license-platef85c9f7c24f0bc92fcd1f8724c3dbc62",
                      children: p
                    })]
                  }), (0, r.jsx)("span", {
                    className: "rockstargames-modules-gtao-license-platec7f328f6989b55e51a5c64a4efc97ef1"
                  }), 30]
                })]
              })]
            })]
          })
        })),
        Va = "rockstargames-modules-gtao-license-plateb93df9086c68643b2659f4db7a32cea3",
        {
          lerp: Ma
        } = i.MathUtils,
        La = "visible";
      let za, Da = !1;
      const Wa = () => {
          const {
            state: e,
            setShouldRenderScene: t,
            setIsScrollEnabled: a,
            setAccessiblePlates: n,
            setDeletedPlateIndex: o,
            setPlates: c
          } = It(), {
            accessiblePlates: l,
            pendingOrder: d,
            currentPlateIndex: u,
            currentView: m,
            is3D: p,
            three: f,
            isMobile: b,
            isLoading: h,
            refs: y,
            gridScale: v,
            deletedPlateIndex: x,
            plates: k
          } = e, {
            loggedIn: _
          } = (0, g.useRockstarUser)(), {
            selectedCharacterTuple: w
          } = (0, g.useRockstarUserState)(), E = (0, s.useRef)(null), [P, S] = (0, s.useState)(m === We.LIST_PLATES), C = y?.[ne]?.current;
          (0, s.useEffect)((() => {
            za && (za.pause(), za = null), Da = !1
          }), [w]), (0, s.useEffect)((() => {
            S(m === We.LIST_PLATES)
          }), [m]);
          const [I, T] = (0, s.useState)();
          return (0, s.useEffect)((() => {
            if (!(y && y?.[te]?.current && y?.[re]?.current && y?.[me]?.current && y?.[fe]?.current && y?.[se]?.current && E.current && f?.scene && f?.controls)) return;
            const e = P ? La : "hidden";
            I !== e && (e => {
              T(e);
              const {
                camera: r,
                controls: s,
                originalCameraPosition: m,
                originalControlsTarget: p,
                renderer: g,
                scene: v
              } = f, {
                clickPlate: w,
                sidebar: P,
                deletePlate: S
              } = xe, I = y[re].current, R = y[me].current, O = y[se].current, j = y[ge].current, A = y[de].current, V = l?.[u]?.current || null, M = l?.[0]?.current || null, z = y[te]?.current || null, D = [];
              switch (v.traverse((e => {
                  e.name === Ye.LP && D.push(e)
                })), za = N().timeline({
                  duration: b ? P.mobile.drawer.duration : w.duration,
                  ease: b ? P.mobile.drawer.ease : w.ease
                }), e) {
                case La: {
                  const e = l.filter((e => null === e.current));
                  if (!s.current || e.length > 0 || !z) return;
                  const u = {
                      current: 0
                    },
                    f = {
                      cameraPosition: {
                        start: (new i.Vector3).copy(r.position),
                        end: m
                      },
                      controlsTarget: {
                        start: (new i.Vector3).copy(s.current.target),
                        end: p
                      },
                      plateOpacity: D.map((e => ({
                        start: e.material.opacity,
                        end: 0
                      }))),
                      accessiblePlateOpacity: l.map((e => ({
                        start: getComputedStyle(e.current).opacity,
                        end: 1
                      }))),
                      firstPlateSaturation: {
                        start: ve.saturation.value,
                        end: 0
                      },
                      firstPlateOpacity: {
                        start: 1,
                        end: .2
                      },
                      canvasTranslateY: {
                        start: Number(L(g.domElement).y),
                        end: 0
                      },
                      canvasWidth: g.domElement.offsetWidth,
                      drawerHeight: {
                        start: Number(L(E.current).y),
                        end: 0
                      },
                      ctaShaderOpacity: {
                        start: z.style.opacity,
                        end: 1
                      }
                    };
                  V?.parentElement && (f.currentAccessibilityPlateTransform = {
                    start: {
                      x: Number(L(V.parentElement).x),
                      y: Number(L(V.parentElement).y),
                      scale: Number(L(V.parentElement).scale)
                    },
                    end: {
                      x: 0,
                      y: 0,
                      scale: 1
                    }
                  });
                  const y = M.querySelector("canvas");
                  if (za.to(u, {
                      current: 1,
                      duration: b ? P.mobile.drawer.duration : w.duration,
                      ease: b ? P.mobile.drawer.ease : w.ease,
                      onComplete: () => {
                        b && (g.domElement.style.touchAction = "auto"), t(!1);
                        const e = v.getObjectByName("Light4");
                        N().to(e.position, {
                          x: je - 20,
                          y: Ae,
                          z: Ve
                        })
                      },
                      onStart: () => {
                        u.current = 0, R && (R.style.pointerEvents = "all"), g.render(v, r), a(!0)
                      },
                      onUpdate: () => {
                        const {
                          current: e
                        } = u, t = f.cameraPosition.start.clone().lerp(f.cameraPosition.end, e);
                        r.position.set(t.x, t.y, t.z);
                        const a = f.controlsTarget.start.clone().lerp(f.controlsTarget.end, e);
                        if (s.current.target.x = a.x, s.current.target.y = a.y, s.current.target.z = a.z, V && V.parentElement?.classList?.contains(Ta)) {
                          const t = Ma(f.currentAccessibilityPlateTransform.start.x, f.currentAccessibilityPlateTransform.end.x, e),
                            a = Ma(f.currentAccessibilityPlateTransform.start.y, f.currentAccessibilityPlateTransform.end.y, e),
                            r = Ma(f.currentAccessibilityPlateTransform.start.scale, f.currentAccessibilityPlateTransform.end.scale, e);
                          V.parentElement.style.transform = `translate(${t}px,\n                            ${a}px) scale(${r})`
                        }
                        const n = Ma(f.firstPlateSaturation.start, f.firstPlateSaturation.end, e);
                        if (ve.saturation.value = n, _ && !d && y) {
                          const t = Ma(f.firstPlateOpacity.start, f.firstPlateOpacity.end, e),
                            a = !!d;
                          y.style.filter = `saturate(${n})${!a&&` opacity(${t})`}`
                        }
                        if (z) {
                          const t = Ma(f.ctaShaderOpacity.start, f.ctaShaderOpacity.end, e);
                          z.style.opacity = t
                        }
                        if (b) {
                          const t = Ma(f.canvasTranslateY.start, f.canvasTranslateY.end, e);
                          if (g.domElement.style.transform = `translateY(${t}px)`, E.current) {
                            const t = Ma(f.drawerHeight.start, f.drawerHeight.end, e);
                            E.current.style.transform = `translateY(${t}px)`
                          }
                        }
                      }
                    }, 0), (l.length === k.length && l?.[0]?.current || _ && !h && l[0].current && l?.filter((e => e?.current)).length === k.length && 0 !== k.length && 0 !== l.length) && !Da) {
                    const e = {
                      current: 0
                    };
                    Da = !0, za.to(e, {
                      current: 1,
                      duration: b ? xe.sidebar.mobile.drawer.duration : xe.clickPlate.duration,
                      ease: b ? xe.sidebar.mobile.drawer.ease : xe.clickPlate.ease,
                      onStart: () => {
                        Da = !0
                      },
                      onComplete: () => {
                        Da = !1
                      },
                      onUpdate: () => {
                        const {
                          current: t
                        } = e;
                        l.forEach(((e, a) => {
                          if (e.current && f.accessiblePlateOpacity[a]) {
                            const r = Ma(f.accessiblePlateOpacity[a].start, f.accessiblePlateOpacity[a].end, 2.5 * (t - .6));
                            e.current.style.opacity = r
                          }
                          if (D[a] && D[a].material) {
                            const e = Ma(f.plateOpacity[a].start, f.plateOpacity[a].end, t);
                            D[a].material.opacity = e
                          }
                        }))
                      }
                    }, 0);
                    const t = Number(getComputedStyle(l[0].current.parentElement).opacity);
                    if (t < 1) {
                      const e = {
                          start: t,
                          end: 1
                        },
                        a = {
                          current: 0
                        };
                      za.to(a, {
                        current: 1,
                        duration: b ? xe.sidebar.mobile.drawer.duration : xe.clickPlate.duration,
                        ease: b ? xe.sidebar.mobile.drawer.ease : xe.clickPlate.ease,
                        onUpdate: () => {
                          const t = Ma(e.start, e.end, a.current);
                          l[0].current.parentElement.style.opacity = t
                        }
                      }, "<")
                    }
                  }
                  if ("number" == typeof x) {
                    const e = D.find((e => e.userData.index === x)),
                      t = l[x].current;
                    if (e && t) {
                      const a = {
                          current: 0
                        },
                        r = {
                          plateOpacity: {
                            start: e.material.opacity,
                            end: 0
                          },
                          accessiblePlateOpacity: {
                            start: 1,
                            end: 0
                          }
                        };
                      za.to(a, {
                        current: 1,
                        duration: S.duration,
                        ease: S.ease,
                        onUpdate: () => {
                          const {
                            current: s
                          } = a, n = Ma(r.plateOpacity.start, r.plateOpacity.end, s), o = Ma(r.accessiblePlateOpacity.start, r.accessiblePlateOpacity.end, s);
                          e?.material && (e.material.opacity = n), t.style.opacity = o
                        }
                      }, ">");
                      const s = D.filter((e => e.userData.index >= x)).map((e => e.position)),
                        i = l.filter(((e, t) => t >= x)).map((e => {
                          const {
                            top: t,
                            left: a
                          } = getComputedStyle(e.current), r = e.current.offsetHeight, s = e.current.offsetWidth, n = Number(t.replace("px", ""));
                          return {
                            x: Number(a.replace("px", "")) + s / 2,
                            y: n + r / 2
                          }
                        })),
                        d = s.map((e => e.clone())),
                        u = i.map(((e, t) => ({
                          x: i[Math.max(t - 1, 0)].x - i[t].x,
                          y: i[Math.max(t - 1, 0)].y - i[t].y
                        })));
                      za.to(s.slice(1), {
                        x: e => d[e].x,
                        y: e => d[e].y,
                        z: e => d[e].z,
                        stagger: {
                          each: .03
                        },
                        onComplete: () => {
                          e.removeFromParent(), e.userData.index = void 0, v.remove(e)
                        }
                      }, "<25%");
                      const m = l.filter(((e, t) => t >= x)),
                        p = i.map((() => ({
                          x: 0,
                          y: 0
                        })));
                      p.forEach(((e, t) => {
                        za.to(e, {
                          x: u[t].x,
                          y: u[t].y,
                          duration: S.duration,
                          ease: S.ease,
                          delay: 1 + .03 * t,
                          onUpdate: () => {
                            const a = m[t]?.current;
                            a && (a.style.transform = `translate(${e.x}px, ${e.y}px)`)
                          },
                          onComplete: () => {
                            if (t === p.length - 1) {
                              const e = l.filter(((e, t) => t !== x));
                              n(e), o(null);
                              const t = k.filter((e => e.index !== x));
                              t.forEach(((e, t) => {
                                e.index = t
                              })), c(t)
                            }
                          }
                        }, 0)
                      }))
                    }
                  }
                  za.to(I, {
                    autoAlpha: 1,
                    duration: b ? P.mobile.footer.in.duration : P.in.duration,
                    ease: b ? P.mobile.footer.in.ease : P.in.ease,
                    delay: b ? P.mobile.footer.in.delay : P.in.delay
                  }, 0), za.to(R, {
                    autoAlpha: 1,
                    duration: b ? P.mobile.fadeHeader.in.duration : P.in.duration,
                    ease: b ? P.mobile.fadeHeader.in.ease : P.in.ease,
                    delay: b ? P.mobile.fadeHeader.in.delay : P.in.delay,
                    onStart: () => {
                      O && (h ? (O.classList.add(Va), j && j.classList.add(ja), A && A.classList.remove(Oa)) : (O.classList.remove(Va), j && j.classList.remove(ja), A && A.classList.add(Oa)))
                    }
                  }, 0), b && (C && N().set(C.style, {
                    visibility: "visible"
                  }), R && (R.style.pointerEvents = "all"));
                  break
                }
                default:
                  if (N().to(I, {
                      autoAlpha: 0,
                      duration: b ? P.mobile.footer.out.duration : P.out.duration,
                      ease: b ? P.mobile.footer.out.ease : P.out.ease
                    }), C && N().set(C.style, {
                      visibility: "hidden"
                    }), R && (R.style.pointerEvents = "none"), b) {
                    const e = {
                      current: L(R).y
                    };
                    N().to(R, {
                      opacity: 0,
                      duration: P.mobile.fadeHeader.out.duration,
                      ease: P.mobile.fadeHeader.out.ease
                    }), N().to(e, {
                      current: -1 * R.offsetHeight,
                      duration: P.mobile.drawer.duration,
                      ease: P.mobile.drawer.ease,
                      onUpdate: () => {
                        E.current.style.transform = `translateY(${e.current}px)`
                      }
                    })
                  } else N().to(R, {
                    autoAlpha: 0,
                    duration: P.out.duration,
                    ease: P.out.ease,
                    delay: P.out.delay
                  })
              }
            })(e)
          }), [y, y.length, v, l?.[0]?.current, P, E.current, p, f, b, h, y?.[te]?.current, y?.[re]?.current, y?.[me]?.current]), (0, r.jsx)("div", {
            ref: E,
            className: "rockstargames-modules-gtao-license-plated26d6e7ed0d7e2b8990af6bd3a8720bd",
            children: (0, r.jsx)(Aa, {})
          })
        },
        Ya = ({
          isMobile: e
        }) => {
          const {
            loggedIn: t
          } = (0, g.useRockstarUser)(), {
            setRefs: a,
            state: n
          } = It(), {
            plates: o,
            refs: i
          } = n, c = (0, s.useRef)(null), l = i[ne]?.current;
          if ((0, s.useEffect)((() => {
              a(fe, c)
            }), [c.current]), !o) return null;
          let d;
          return e && (d = l ? (0, qt.createPortal)((0, r.jsx)(Wa, {}), l) : null), (0, r.jsxs)("div", {
            ref: c,
            className: "rockstargames-modules-gtao-license-plated2586ff68fbf36883beccbd139e83c3b",
            children: [t && !e && (0, r.jsx)(Pa, {}), e ? d : (0, r.jsx)(Wa, {}), t && (0, r.jsx)(la, {}), (0, r.jsx)(Ia, {})]
          })
        },
        $a = (0, n.defineMessages)({
          gtao_lp_no_character_errror: {
            id: "gtao_lp_no_character_errror",
            description: "Error text for when a user logs into a Rockstar Games account without any characters.",
            defaultMessage: "No character found with this account. Link a Grand Theft Auto Online character or switch to a different Rockstar Games account."
          },
          gtao_lp_link_account_cta: {
            id: "gtao_lp_link_account_cta",
            description: "CTA Button label for linking a Rockstar Games account",
            defaultMessage: "Link a Rockstar Games Account"
          }
        }),
        Ha = ({
          t: e
        }) => {
          const t = {
              code: null,
              logId: null
            },
            {
              formatMessage: a
            } = (0, n.useIntl)(),
            {
              state: {
                error: o,
                isMobile: i
              }
            } = It(),
            [c, d] = (0, s.useState)(null),
            [u, m] = (0, s.useState)(null),
            p = {
              api: e("lp.error.api.description"),
              browser: e("lp.error.browser.description"),
              character: a($a.gtao_lp_no_character_errror),
              vehicles: e("lp.error.novehicle.description"),
              webgl: e("lp.error.webgl.description")
            },
            f = {
              api: e("lp.error.api.cta"),
              browser: e("lp.error.browser.cta"),
              character: a($a.gtao_lp_link_account_cta),
              vehicles: e("lp.error.api.cta"),
              webgl: e("lp.error.api.cta")
            },
            {
              track: b
            } = (0, g.useGtmTrack)(),
            {
              data: h
            } = (0, g.useRockstarUser)(),
            y = {
              member_id: h?.user ? h.user?.id : void 0,
              view_name: "license plate creator - error screen"
            };
          return (0, s.useEffect)((() => {
            if (!o) return d(null), void m(null);
            d(o[0]), m(o[1] ?? t)
          }), [String(o)]), (0, s.useEffect)((() => {
            b({
              ...y,
              event: "alert_error",
              text: p[c] || e("lp.error.unexpected.description")
            }), b({
              ...y,
              event: "trackPageview",
              display_type: i ? "mobile" : "desktop"
            })
          }), []), c ? (0, r.jsxs)("div", {
            className: "rockstargames-modules-gtao-license-plateb282da21e1c33c438f07cb12d450b9b6",
            children: [(0, r.jsxs)("div", {
              className: "rockstargames-modules-gtao-license-plateae5df7e5a3b27349589fc6c0127e1e86",
              children: [(0, r.jsxs)("div", {
                className: "rockstargames-modules-gtao-license-plated2662ae88b6e78594e56eb8d0e901a6e",
                children: [(0, r.jsx)("i", {}), (0, r.jsx)("h4", {
                  children: p[c] || e("lp.error.unexpected.description")
                }), u?.code && (0, r.jsxs)("div", {
                  className: "rockstargames-modules-gtao-license-platef9f0425f6b691854deb61847717b396a",
                  children: [(0, r.jsx)("p", {
                    children: `Code: ${u.code}`
                  }), u?.logId && (0, r.jsx)("p", {
                    children: `LogID: ${u?.logId}`
                  })]
                })]
              }), (0, r.jsx)(l.NavLink, {
                to: "character" !== c ? "/gta-online" : "https://socialclub.rockstargames.com/settings/linkedaccounts",
                children: (0, r.jsx)("button", {
                  className: "rockstargames-modules-gtao-license-platef401a65d0d51649696be14e05bfe1d92",
                  type: "button",
                  tabIndex: 0,
                  children: (0, r.jsx)("span", {
                    className: "rockstargames-modules-gtao-license-plated8ccd7f594826eb200de852c5194ad63",
                    children: f[c]
                  })
                })
              })]
            }), (0, r.jsx)("div", {
              className: "rockstargames-modules-gtao-license-platef99c537bfeaed8e629d99128d495afb5"
            })]
          }) : null
        },
        Ua = () => {
          const {
            state: e,
            setRefs: t
          } = It(), {
            refs: a,
            isMobile: n
          } = e, o = (0, s.useRef)(null);
          (0, s.useEffect)((() => {
            o && t(se, o)
          }), [o]);
          const i = (0, s.useRef)(null);
          return (0, s.useEffect)((() => {
            const e = document.querySelectorAll('[aria-label="animation"]');
            e.length && e.forEach((e => {
              e.tabIndex = -1
            }))
          }), []), (0, s.useEffect)((() => {
            if (n && a?.[me]?.current && i.current) {
              const e = 80,
                t = 50,
                r = window.innerHeight - e,
                s = a?.[me].current.offsetHeight,
                n = s + (r - s) / 2 - t / 2;
              i.current && (i.current.style.top = `${n}px`)
            } else i.current && (i.current.style.top = "unset")
          }), [n, a]), (0, r.jsx)("div", {
            ref: o,
            className: "rockstargames-modules-gtao-license-plateabe8ebbbeecc5dcdab4bfe48b49bfa4e",
            children: (0, r.jsx)("div", {
              ref: i,
              className: "rockstargames-modules-gtao-license-plateb038b2af59fd9f47b74dfad03f66d487",
              children: (0, r.jsx)(ga, {})
            })
          })
        },
        Fa = {
          backToPlatesButton: "rockstargames-modules-gtao-license-platef7260185216aee7e7c3f2c87eb860582",
          buttonWrap: "rockstargames-modules-gtao-license-plateb8a8482c702e415dc891257205f743f0",
          contentHeading: "rockstargames-modules-gtao-license-platef8fecfcba7fc4b9e1f902ababa0775e9",
          ctaText: "rockstargames-modules-gtao-license-platee9a0de1671487a749293483c34c6c7dc",
          dialogMessage: "rockstargames-modules-gtao-license-platecc8342a88df5c6da136f9306a9fb0240",
          expanded: "rockstargames-modules-gtao-license-platef05bd15cbe2171843c9ab5470fd384ee",
          heading: "rockstargames-modules-gtao-license-platee26f429fb4c3640703e559c5606478ef",
          hidden: "rockstargames-modules-gtao-license-plateb5cb84e68cad8d5c30fbc0bcac0530fe",
          hover: "rockstargames-modules-gtao-license-platebd6cbd15981e9781058701ddffe9e2bb",
          isWindows: "rockstargames-modules-gtao-license-platee66ea7a93e634411e2a09910bd043759",
          orderInProgressCTA: "rockstargames-modules-gtao-license-platec2c5d4c6d32b89b2490cd14b09612e53",
          orderInstructions: "rockstargames-modules-gtao-license-platee3756614aa438d40a88b6bc8a28fd6e3",
          pillBtn: "rockstargames-modules-gtao-license-platef71b8ebf9fb3a55061eeb3735c046f0d",
          plateRedemptionInstructions: "rockstargames-modules-gtao-license-platec8b238cd77b68a18e3c80fde4896df47",
          primaryButton: "rockstargames-modules-gtao-license-plateb954aa6137a5d1ce11b9a9191773981a",
          secondaryButton: "rockstargames-modules-gtao-license-platea8cca01fdfa6f3864a7b31df894541cf",
          selected: "rockstargames-modules-gtao-license-plated8101fd891b055d804649cd67a950424"
        },
        Ba = ({
          vehicleName: e,
          onClickEdit: t,
          isVisible: a,
          t: n
        }) => {
          const [o, i] = (0, s.useState)(!1), {
            loggedIn: c
          } = (0, g.useRockstarUser)(), l = (0, f.useRockstarTokenPing)(), {
            setPlates: d,
            setPendingOrder: u,
            setPlateNumber: m,
            setSelectedStyle: p,
            setError: b,
            state: h
          } = It(), {
            character: y,
            plates: v,
            currentView: x,
            isMobile: k
          } = h, {
            track: _
          } = (0, g.useGtmTrack)(), w = {
            view_name: "license plate creator - landing page logged in"
          }, E = x === We.LIST_PLATES ? 0 : -1, P = (0, s.useCallback)((() => {
            (async () => {
              if (!c || !y) return;
              const [e] = y, {
                error: t
              } = await (0, f.coreScApiFetch)("games/gtao/licensePlates/order", {
                pingBearer: l,
                fetchOptions: {
                  method: "DELETE"
                },
                query: {
                  platform: e
                }
              });
              if (t) return void b(["api", t]);
              const a = [$e, ...v.slice(1, v.length)];
              d(a), u(null), m(""), p(I($e.style.name)?.id), _({
                ...w,
                event: "cta_cancel",
                text: `modal: ${n("lp.modal.order-cancel.confirm")}`,
                view_name: `license plate creator - modal: ${n("lp.modal.order-cancel.title").toLowerCase()}`
              })
            })()
          }), [c, y, v]);
          return (0, s.useEffect)((() => {
            if (o) {
              const e = n("lp.modal.order-cancel.title");
              _({
                event: "virtualPageview",
                display_type: k ? "mobile" : "desktop",
                view_name: `license plate creator - modal: ${e.toLowerCase()}`
              })
            }
          }), [o]), (0, r.jsxs)("div", {
            className: [Fa.orderInProgressCTA, a ? "" : Fa.hidden].join(" "),
            children: [(0, r.jsx)("h1", {
              className: Fa.contentHeading,
              children: n("lp.inprogress.title")
            }), (0, r.jsx)("p", {
              className: Fa.orderInstructions,
              dangerouslySetInnerHTML: {
                __html: n("lp.inprogress.description").replace("<span>{car_name}</span>", `<span className=${Fa.vehicleName}>${e}</span>`)
              }
            }), (0, r.jsxs)("div", {
              className: Fa.buttonWrap,
              children: [(0, r.jsx)("button", {
                "data-testid": "lp-cta-edit",
                type: "button",
                onClick: t,
                "aria-label": n("lp.inprogress.edit"),
                tabIndex: E,
                children: (0, r.jsx)("span", {
                  className: Fa.ctaText,
                  children: n("lp.inprogress.edit")
                })
              }), (0, r.jsx)("button", {
                "data-testid": "lp-cta-cancel",
                type: "button",
                onClick: e => {
                  i(!0), e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
                },
                "aria-label": n("lp.inprogress.cancel"),
                tabIndex: E,
                children: (0, r.jsx)("span", {
                  className: Fa.ctaText,
                  children: n("lp.inprogress.cancel")
                })
              })]
            }), (0, r.jsx)(na, {
              title: n("lp.modal.order-cancel.title"),
              secondaryText: n("lp.modal.order-cancel.description").replace("{plateText}", v?.[0]?.plateText ?? "this plate"),
              extraClasses: {
                message: Fa.dialogMessage,
                heading: Fa.heading
              },
              buttons: [{
                buttonText: n("lp.modal.order-cancel.confirm"),
                onClick: P,
                extraClasses: Fa.primaryButton,
                testId: "lp-cta-cancel-confirm"
              }, {
                buttonText: n("lp.modal.order-cancel.close"),
                onClick: () => {
                  _({
                    ...w,
                    event: "cta_cancel",
                    text: "yes, cancel",
                    view_name: "license plate creator - modal: yes, cancel"
                  })
                },
                extraClasses: Fa.secondaryButton,
                testId: "lp-cta-cancel-reject"
              }],
              showDialog: o,
              onClose: () => i(!1),
              t: n
            })]
          })
        },
        Ga = ({
          plateData: e,
          plateWidthInPixels: t,
          currentView: a,
          loginUrl: s,
          inputTabIndex: n,
          track: o,
          trackingPresets: i,
          onClickPlate: c,
          t: l
        }) => (0, r.jsx)("div", {
          className: Sa.firstPlateLoggedOut,
          style: {
            background: "none",
            border: "none",
            opacity: a === We.LIST_PLATES ? 1 : 0,
            width: `${t}px`,
            height: t / 2 + "px"
          },
          children: (0, r.jsxs)("div", {
            className: [Sa.loggedOutCTA, a !== We.LIST_PLATES ? Sa.hidden : ""].join(" "),
            children: [(0, r.jsx)("button", {
              "data-testid": "lp-cta-login",
              type: "button",
              onClick: () => {
                s && (o({
                  event: "cta_login",
                  text: "sign in",
                  link_url: s
                }), window.location.href = s)
              },
              className: [Sa.signIn, a !== We.LIST_PLATES ? Sa.hidden : ""].join(" "),
              tabIndex: n,
              children: (0, r.jsx)("span", {
                className: Sa.ctaText,
                children: l("lp.landing.signup")
              })
            }), (0, r.jsx)("button", {
              "data-testid": "lp-cta-try",
              type: "button",
              onClick: () => {
                o({
                  ...i,
                  event: "license_plate_try",
                  text: "try it out"
                }), c(e.index)
              },
              className: [Sa.tryWithoutSigningIn, Sa.firstLoad, a !== We.LIST_PLATES ? Sa.hidden : ""].join(" "),
              tabIndex: n,
              children: (0, r.jsx)("span", {
                className: Sa.ctaText,
                children: l("lp.landing.tryit")
              })
            })]
          })
        }),
        Xa = ({
          t: e
        }) => {
          const {
            loggedIn: t
          } = (0, g.useRockstarUser)(), {
            state: a,
            setCurrentView: n,
            setCurrentPlate: o,
            setCurrentPlateIndex: i,
            setRefs: c
          } = It(), {
            currentView: l,
            accessiblePlates: d,
            gridState: u,
            is3D: m,
            loginUrl: p,
            pendingOrder: f,
            three: b,
            plates: h,
            refs: y,
            isMobile: v,
            realHeight: x,
            plateTextures: k
          } = a, [_, w] = (0, s.useState)(!1), [E, P] = (0, s.useState)(!1);
          (0, s.useEffect)((() => {
            w(/([wW]in)/i.test(window.navigator.userAgent))
          }), []), (0, s.useEffect)((() => {
            h?.length && (I(h[0]), R(h.filter((({
              faux: e
            }) => !e)).length >= 30))
          }), [h]);
          const [S, N] = (0, s.useState)(null), [C, I] = (0, s.useState)(null), [T, R] = (0, s.useState)(!1), O = y[ae], j = y[ue], A = (0, s.useRef)(null), V = (0, s.useRef)(null);
          (0, s.useEffect)((() => {
            const e = y[me];
            if (!(e?.current && j?.current && u?.gridOptions && C)) return;
            const t = e.current,
              a = {
                x: v ? 0 : t.offsetWidth,
                y: 0
              },
              r = z(C.index, j.current, Number(x.replace("px", "")), u, a);
            N(r)
          }), [y]);
          const {
            track: L
          } = (0, g.useGtmTrack)(), Y = {
            view_name: "license plate creator - landing page logged " + (t ? "in" : "out")
          }, $ = (0, s.useRef)(null);
          (0, s.useEffect)((() => {
            A.current && c("ctaWrap", A)
          }), [A.current, E]), (0, s.useEffect)((() => {
            V.current && c(te, V)
          }), [V.current]);
          const H = l === We.LIST_PLATES ? 0 : -1,
            U = (0, s.useCallback)((e => {
              if (n() === We.LIST_PLATES) {
                const t = 0 === e ? We.NEW_PLATE : We.VIEW_PLATE;
                e && (L({
                  ...Y,
                  event: "license_plate_open",
                  view_name: "list plates",
                  position: e
                }), L({
                  ...Y,
                  event: "virtualPageview",
                  display_type: v ? "mobile" : "desktop",
                  view_name: "license plate creator - view plate"
                })), o(h[e]), i(e), n(t)
              }
            }), [h]),
            F = (0, s.useCallback)((e => {
              D(0, l)
            }), [l]),
            B = (0, s.useMemo)((() => S ? (0, r.jsx)(Ga, {
              plateData: C,
              plateWidthInPixels: S.width,
              currentView: l,
              loginUrl: p,
              inputTabIndex: H,
              track: L,
              trackingPresets: Y,
              onClickPlate: U,
              t: e
            }) : null), [l, p, S]),
            G = (0, s.useMemo)((() => void 0 !== h ? M(f, h) ? (0, r.jsx)(Ba, {
              t: e,
              vehicleName: `${f?.manufacturerName||""} ${f?.vehicleName||""}`.trim(),
              onClickEdit: () => {
                L({
                  ...Y,
                  event: "license_plate_edit_click",
                  text: "edit"
                }), U(C.index)
              },
              isVisible: l === We.LIST_PLATES
            }) : T ? (0, r.jsxs)("div", {
              className: [Sa.maxPlatesReached, l !== We.LIST_PLATES ? Sa.hidden : ""].join(" "),
              children: [(0, r.jsx)("i", {}), e("lp.notify.max-plates")]
            }) : 0 === h.length ? null : (0, r.jsxs)("div", {
              type: "button",
              style: {
                pointerEvents: l === We.LIST_PLATES ? "all" : "none"
              },
              onKeyPress: e => {
                "Space" !== e.code && "Enter" !== e.code || (L({
                  ...Y,
                  event: "license_plate_create_click",
                  text: "new order"
                }), U(C.index))
              },
              onClick: () => {
                L({
                  ...Y,
                  event: "license_plate_create_click",
                  text: "new order"
                }), U(C.index)
              },
              onPointerOver: v ? void 0 : () => {
                O?.current && F(O?.current)
              },
              onPointerOut: v ? void 0 : () => {
                var e;
                O?.current && (e = O?.current, W(e))
              },
              className: [Sa.createNewPlate, l !== We.LIST_PLATES ? Sa.hidden : ""].join(" "),
              ref: $,
              tabIndex: H,
              children: [(0, r.jsx)("span", {
                className: `${Sa.ctaText} ${_?Sa.isWindows:""}`,
                children: e("lp.landing.newcta")
              }), (0, r.jsx)("div", {
                className: Sa.ctaIcon,
                role: "presentation",
                "aria-label": "Plus Icon"
              })]
            }) : null), [S, l, T]),
            X = (0, s.useMemo)((() => void 0 !== f && S ? (0, r.jsx)("div", {
              "data-testid": "lp-cta-new",
              onKeyPress: e => {
                "Space" !== e.code && "Enter" !== e.code || (L({
                  ...Y,
                  event: "license_plate_create_click",
                  text: "new order"
                }), T || U(C.index))
              },
              onClick: () => {
                L({
                  ...Y,
                  event: "license_plate_create_click",
                  text: "new order"
                }), T || U(C.index)
              },
              type: "button",
              tabIndex: H,
              style: {
                width: `${S.width}px`,
                height: S.width / 2 + "px",
                pointerEvents: l === We.LIST_PLATES ? "all" : "none",
                fontSize: S.width / 2 * .075 + "px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "transparent",
                border: "none",
                boxShadow: "none"
              },
              children: G
            }) : null), [l, f, S, y, C, G, v, T]);
          return (0, s.useEffect)((() => {
            if (k?.[0]) {
              const e = k[0].image;
              if (e && A.current) {
                const a = A.current.querySelector("canvas");
                a && A.current.removeChild(a), e.style.width = "100%", e.style.height = "100%", e.style.position = "absolute", e.style.top = "0px", e.style.left = "0px", e.style.pointerEvents = "none", e.style.opacity = 1, e.style.transition = "transform 0.25s ease-out", t && !f && l === We.LIST_PLATES && e.classList.add(Sa.newOrder), A.current.append(e)
              }
            }
          }), [k, A.current, f, t, l]), (0, s.useEffect)((() => {
            d?.[0]?.current || A.current && (d[0] = A)
          }), [d, A.current]), (0, s.useEffect)((() => {
            if (k?.[0]) {
              const e = k[0].image;
              e && b?.scene && (e.style.transition = "transform 0.25s ease-out")
            }
          }), [m, b, k]), (0, s.useMemo)((() => {
            if (!S || !C || !u?.gridOptions) return null;
            const e = M(f, h) ? Sa.pendingOrderShader : "",
              a = t ? e : Sa.loggedOutShader,
              {
                width: s,
                height: n
              } = S,
              {
                top: o,
                left: i,
                right: c,
                bottom: l
              } = S.rect,
              d = [Sa.CTAWrap];
            return t || d.push(Sa.loggedOut), t && T && d.push(Sa.maxPlatesReachedWrap), P(!0), (0, r.jsxs)("div", {
              ref: A,
              className: d.join(" "),
              style: {
                top: o,
                left: i,
                bottom: l,
                right: c,
                width: s,
                height: n
              },
              children: [(0, r.jsx)("div", {
                ref: V,
                className: a
              }), t ? X : B]
            })
          }), [G, T, t, V.current])
        },
        qa = ({
          plate: e,
          index: t,
          accessiblePlateRefs: a,
          details: n,
          tabIndex: o,
          texture: i
        }) => {
          const {
            loggedIn: c
          } = (0, g.useRockstarUser)(), {
            setCurrentView: l,
            setCurrentPlate: d,
            setCurrentPlateIndex: u,
            state: {
              currentView: m,
              isLoading: p,
              plateTextures: f,
              plates: b,
              deletedPlateIndex: h,
              isMobile: y,
              shouldRenderScene: v
            }
          } = It(), {
            track: x
          } = (0, g.useGtmTrack)(), k = {
            view_name: "license plate creator - landing page logged " + (c ? "in" : "out")
          }, _ = (0, s.useRef)(null);
          return (0, s.useEffect)((() => {
            !a.current[t + 1]?.current && _ && (a.current[t + 1] = _)
          }), [_.current, b, p]), (0, s.useEffect)((() => {
            if (i && _.current) {
              const e = _.current.querySelector("canvas");
              e && _.current.removeChild(e), i.style.width = "100%", i.style.height = "100%", i.style.position = "absolute", i.style.opacity = 1, i.style.top = "0px", i.style.left = "0px", i.style.pointerEvents = "none", i.style.transition = "transform 0.25s ease-out", i.classList.add("rockstargames-modules-gtao-license-plated076f28440f12b1a047333ded3aab65e"), _.current.append(i)
            }
          }), [f, i, _.current]), (0, s.useMemo)((() => (0, r.jsx)("button", {
            "aria-label": `${e?.style?.displayName||""} license plate ${e.plateText?`with the number ${e.plateText}`:""}`.trim(),
            className: "rockstargames-modules-gtao-license-platecbe69614ca3f29d98b25375d7c2c3257",
            ref: _,
            id: `keyboard-accessible-license-plate-${t}`,
            style: {
              opacity: 1,
              position: "absolute",
              height: `${n.height+1}px`,
              width: `${n.width}px`,
              top: n.top - 1 + "px",
              left: `${n.left}px`,
              transformOrigin: "center",
              pointerEvents: m !== We.LIST_PLATES || "number" == typeof h || v ? "none" : "all"
            },
            tabIndex: o,
            type: "button",
            onClick: a => {
              a.target.blur(), x({
                ...k,
                event: "license_plate_open",
                view_name: "list plates",
                position: t
              }), x({
                ...k,
                event: "virtualPageview",
                display_type: y ? "mobile" : "desktop",
                view_name: "license plate creator - view plate"
              }), d(e), u(t + 1), l(We.VIEW_PLATE)
            }
          })), [e, i, n, v, m])
        },
        Za = ({
          t: e
        }) => {
          const {
            setAccessiblePlates: t,
            setRefs: a,
            state: {
              currentView: n,
              gridState: o,
              plates: i,
              realHeight: c,
              refs: l,
              isMobile: d,
              plateTextures: u
            }
          } = It(), {
            loggedIn: m
          } = (0, g.useRockstarUser)(), [p, f] = (0, s.useState)([]), b = (0, s.useRef)(null), h = (0, s.useRef)([]);
          return (0, s.useEffect)((() => {
            h.current && i.length > 0 && h.current.length === i.length && t(h.current)
          }), [h.current?.length, i]), (0, s.useEffect)((() => {
            a(q, b)
          }), [b.current]), (0, s.useEffect)((() => {
            const e = l[ue]?.current,
              t = l?.[me]?.current,
              a = [];
            e && t && o && (i.forEach(((r, s) => {
              if (s) {
                const r = z(s, e, Number(c.replace("px", "")), o, d ? void 0 : {
                    x: t.offsetWidth,
                    y: 0
                  }),
                  {
                    height: n,
                    width: i,
                    rect: {
                      top: l,
                      left: u
                    }
                  } = r;
                n && i && n < i && a.push({
                  width: i,
                  height: n,
                  top: l,
                  left: u
                })
              }
            })), f([...a]))
          }), [u, l && l?.[me]?.current]), (0, s.useMemo)((() => m && !p.length ? null : (h.current.forEach((e => {
            e.current && (e.current.style.transform = "none")
          })), (0, r.jsxs)("div", {
            ref: b,
            className: Ta,
            children: [(0, r.jsx)(Xa, {
              t: e
            }), i.filter(((e, t) => t)).map(((e, t) => (0, r.jsx)(qa, {
              accessiblePlateRefs: h,
              plate: e,
              index: t,
              details: p[t],
              tabIndex: n === We.LIST_PLATES ? 0 : -1,
              texture: u[t + 1]?.image
            }, e.plateText + e.vehicles.toString())))]
          }))), [p, n])
        },
        Ka = JSON.parse('{"de-DE":{"gtao_lp_link_account_cta":"Rockstar-Games-Konto verknüpfen","gtao_lp_no_character_errror":"Es wurde kein Charakter für dieses Konto gefunden. Verknüpfe einen Charakter aus Grand Theft Auto Online oder melde dich mit einem anderen Rockstar-Games-Konto an.","lpe_sidebar_total_owned_plates":"Nummernschilder in Besitz: {total} von {max}"},"en-US":{"gtao_lp_link_account_cta":"Link a Rockstar Games Account","gtao_lp_no_character_errror":"No character found with this account. Link a Grand Theft Auto Online character or switch to a different Rockstar Games account.","lpe_sidebar_total_owned_plates":"{total} owned plates out of a maximum of {max}"},"es-ES":{"gtao_lp_link_account_cta":"Vincula una cuenta de Rockstar Games","gtao_lp_no_character_errror":"No se ha encontrado un personaje vinculado a esta cuenta. Vincula un personaje de Grand Theft Auto Online o cambia a otra cuenta de Rockstar Games.","lpe_sidebar_total_owned_plates":"Matrículas en propiedad: {total} de {max}"},"es-MX":{"gtao_lp_link_account_cta":"Vincula una cuenta de Rockstar Games","gtao_lp_no_character_errror":"No se encontró un personaje en esta cuenta. Vincula un personaje de Grand Theft Auto Online o cambia a una cuenta de Rockstar Games distinta.","lpe_sidebar_total_owned_plates":"Tienes {total} placas de un máximo de {max}."},"fr-FR":{"gtao_lp_link_account_cta":"Associer un compte Rockstar Games","gtao_lp_no_character_errror":"Aucun personnage n\'a été trouvé avec ce compte. Associez un personnage de Grand Theft Auto Online ou utilisez un autre compte Rockstar Games.","lpe_sidebar_total_owned_plates":"{total} plaques possédées sur un maximum de {max}"},"it-IT":{"gtao_lp_link_account_cta":"Collega un account di Rockstar Games","gtao_lp_no_character_errror":"Non è stato trovato alcun personaggio con questo account. Collega un personaggio di Grand Theft Auto Online o prova con un altro account di Rockstar Games.","lpe_sidebar_total_owned_plates":"Targhe possedute: {total}/{max}"},"ja-JP":{"gtao_lp_link_account_cta":"ロックスター・ゲームスアカウントとリンクする","gtao_lp_no_character_errror":"このアカウントのキャラクターが見つかりませんでした。「GTAオンライン」のキャラクターをリンクするか別のロックスター・ゲームスアカウントに切り替えてください。","lpe_sidebar_total_owned_plates":"最大{max}枚のうち{total}枚のプレートを所有"},"ko-KR":{"gtao_lp_link_account_cta":"Rockstar Games 계정 연동하기","gtao_lp_no_character_errror":"이 계정에서 캐릭터를 찾을 수 없습니다. Grand Theft Auto 온라인 캐릭터를 연동하거나 다른 Rockstar Games 계정을 사용하십시오.","lpe_sidebar_total_owned_plates":"최대 {max}개의 번호판 중 {total}개 소유"},"pl-PL":{"gtao_lp_link_account_cta":"Powiąż konto Rockstar Games","gtao_lp_no_character_errror":"Nie odnaleziono postaci powiązanej tym kontem. Powiąż postać Grand Theft Auto Online lub przełącz się na inne konto Rockstar Games.","lpe_sidebar_total_owned_plates":"Liczba posiadanych tablic: {total} z {max}"},"pt-BR":{"gtao_lp_link_account_cta":"Vincular conta da Rockstar Games","gtao_lp_no_character_errror":"Nenhum personagem encontrado nessa conta. Vincule um personagem de Grand Theft Auto Online ou use uma conta da Rockstar Games diferente.","lpe_sidebar_total_owned_plates":"Tem {total} placas de um máximo de {max}"},"ru-RU":{"gtao_lp_link_account_cta":"Привяжите учетную запись Rockstar Games","gtao_lp_no_character_errror":"Не найдено персонажей, связанных с этой учетной записью. Привяжите игровую учетную запись с персонажем Grand Theft Auto Online или переключитесь на другую учетную запись Rockstar Games.","lpe_sidebar_total_owned_plates":"Количество номерных знаков, которыми вы владеете: {total} из {max}"},"zh-CN":{"gtao_lp_link_account_cta":"绑定一个 Rockstar Games 账户","gtao_lp_no_character_errror":"该账户下未找到角色。绑定一个 Grand Theft Auto 在线模式角色或切换至另一个 Rockstar Games 账户。","lpe_sidebar_total_owned_plates":"已拥有 {total} 张车牌（最多 {max} 张）"},"zh-TW":{"gtao_lp_link_account_cta":"連結 Rockstar Games 帳戶","gtao_lp_no_character_errror":"該帳戶未找到任何角色。連結 Grand Theft Auto 線上模式角色或切換至另一個 Rockstar Games 帳戶。","lpe_sidebar_total_owned_plates":"擁有 {total} 個車牌（最多 {max} 個）"}}'),
        Ja = (Qa = (0, n.withIntl)((0, f.withTranslations)((({
          t: e
        }) => {
          const t = It(),
            {
              setCanvasDimensions: n,
              setCharacter: m,
              setCurrentView: h,
              setDeletedPlateIndex: y,
              setError: v,
              setIs3D: x,
              setIsLoading: k,
              setIsLoggedIn: _,
              setIsMobile: w,
              setPendingOrder: E,
              setPlateNumber: P,
              setPlates: S,
              setRefs: N,
              setSelectedStyle: C,
              setThree: T,
              setVehicles: O,
              setXmas23PlatesAllowed: j,
              state: A
            } = t,
            {
              error: V,
              plates: L,
              pendingOrder: z,
              isMobile: D,
              three: W,
              currentView: Y,
              shouldForce2D: $
            } = A,
            {
              loggedIn: H,
              data: U
            } = (0, g.useRockstarUser)();
          (0, s.useEffect)((() => {
            _(H)
          }), [H]);
          const {
            selectedCharacterTuple: F
          } = (0, g.useRockstarUserState)(), B = (0, f.useRockstarTokenPing)(), G = (0, s.useRef)(null), X = (0, s.useRef)(null), q = (0, s.useRef)(null), [K, J] = (0, s.useState)(null), [Q] = (0, l.useSearchParams)(), [ee, te] = (0, s.useState)(!1);
          return (0, s.useEffect)((() => {
            try {
              if (!f.supportedBrowsers.test(navigator.userAgent)) throw new Error("browser");
              const e = document.createElement("canvas"),
                t = ["webgl2", "webgl", "experimental-webgl", "moz-webgl", "webkit-3d"].some((t => {
                  const a = e.getContext(t);
                  return a && "function" == typeof a?.getParameter
                }));
              if (!window.WebGLRenderingContext || !t) throw new Error("webgl")
            } catch (e) {
              v([e?.message])
            } finally {
              te(!0)
            }
          }), []), (0, s.useEffect)((() => {
            const e = () => {
              if (W?.renderer) {
                const {
                  renderer: e
                } = W, {
                  clientWidth: t,
                  clientHeight: a
                } = e.domElement;
                n({
                  width: t,
                  height: a
                })
              }
              w(R())
            };
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), [W]), (0, s.useEffect)((() => () => {
            (0, b.U4)(!1), h(We.LIST_PLATES), T(null)
          }), []), (0, s.useEffect)((() => {
            N(Z, G)
          }), [G.current]), (0, s.useEffect)((() => {
            X?.current && (0, b.U4)(!0), N(ue, X)
          }), [X.current]), (0, s.useEffect)((() => {
            N(ne, q)
          }), [q.current]), (0, s.useEffect)((() => {
            if (!ee || "webgl" === V || "browser" === V) return;
            v(null), m(F), h(We.LIST_PLATES), C($e.style?.id), E(null), y(null);
            const e = (H ? [] : [$e]).map(((e, t) => ({
              ...e,
              index: t
            })));
            null !== H && (S(e), !1 === H && k(!1)), O([]), U?.accountSynced && (async () => {
              try {
                H && k(!0);
                const e = v();
                if (!H || null === F || e) return;
                if (!1 === F) return void v(["character"]);
                const [t, a] = F, {
                  error: r = null,
                  result: s
                } = await (0, f.coreScApiFetch)("games/gtao/licensePlates/owned", {
                  pingBearer: B,
                  query: {
                    character: a,
                    platform: t
                  }
                });
                if (r) throw Object.assign(new Error(""), r);
                j(s?.xmas23PlatesAllowed);
                const n = s?.plates?.map((e => {
                    const t = I(e?.vehicles?.[0]?.plateStyle ?? "YellowBlack") ?? I("YellowBlack");
                    return {
                      ...e,
                      style: t
                    }
                  })) ?? [],
                  {
                    error: o = null,
                    result: i
                  } = await (0, f.coreScApiFetch)("games/gtao/licensePlates/availableVehicles", {
                    pingBearer: B,
                    query: {
                      character: a,
                      platform: t
                    }
                  });
                if (o) throw Object.assign(new Error(""), o);
                const c = p().uniqBy(i?.vehicles ?? [], (({
                  id: e
                }) => e));
                if (!c.length) return v(["vehicles"]), void k(!1);
                O(c);
                const {
                  error: l,
                  result: d
                } = await (0, f.coreScApiFetch)("games/gtao/licensePlates/order", {
                  pingBearer: B,
                  query: {
                    platform: t
                  },
                  useCache: !1
                });
                if (l) throw Object.assign(new Error(""), l);
                const u = M(d, L);
                let m = [$e, ...n];
                m = m.map(((e, t) => ({
                  ...e,
                  index: t
                }))), u ? (E(d), C($e.style.id)) : E(null), P($e.plateText), k(!1), S(m)
              } catch (e) {
                v(["api", e]), k(!1)
              }
            })()
          }), [JSON.stringify(F), H, U?.accountSynced, ee]), (0, s.useEffect)((() => {
            if (M(z, L)) {
              const e = I(z.plateStyle);
              "number" == typeof e?.id && C(e.id), L[0].plateText || P(z.plateText)
            }
          }), [z]), (0, s.useEffect)((() => {
            if (K || !he || V || !ee) return;
            const e = Q.get("envUrl") || a(68719),
              t = new i.LoadingManager((() => {
                J({
                  environmentMap: p,
                  environmentModel: m,
                  plateTextures: g
                })
              })),
              r = new c.B(t),
              s = new d.Z(t),
              n = new u.p(t);
            s.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.3/"), r.setDRACOLoader(s), n.detectSupport(new i.WebGLRenderer), n.setTranscoderPath("https://unpkg.com/three@0.134.0/examples/js/libs/basis/"), r.setKTX2Loader(n);
            const o = new i.TextureLoader(t),
              l = new i.CubeTextureLoader(t);
            let m;
            r.load(e, (e => {
              m = e
            }), void 0, (e => console.log("err", e)));
            const p = l.load([a(17418), a(41284), a(56275), a(67437), a(10520), a(76758)]),
              g = he.map((e => {
                const {
                  fontColor: t,
                  fontSize: a
                } = e, [r, s, n, i] = [e.albedoImageUrl, e.alphaImageUrl, e.bumpImageUrl, e.roughnessImageUrl].map((e => o.load(e)));
                return {
                  albedoMap: r,
                  alphaMap: s,
                  bumpMap: n,
                  roughnessMap: i,
                  fontColor: t,
                  fontSize: a
                }
              }))
          }), [K, he, V, ee]), (0, s.useEffect)((() => {
            const e = Y !== We.LIST_PLATES && !$;
            x(e)
          }), [Y, $]), ee && void 0 !== H ? V ? (0, r.jsx)(Ha, {
            t: e
          }) : (0, r.jsxs)("div", {
            ref: X,
            className: "rockstargames-modules-gtao-license-plateca024a804d95fe968ca4fddbaa5ff3d8",
            children: [D && (0, r.jsx)("div", {
              className: "rockstargames-modules-gtao-license-plateb98a6410ceaf77f353096b1c928768d6",
              ref: q,
              children: (0, r.jsx)(Ua, {})
            }), (0, r.jsxs)("div", {
              className: "rockstargames-modules-gtao-license-plateaa25d714e62bafe3a46d3ffe54dc4295",
              children: [(0, r.jsx)(Ya, {
                isMobile: D
              }), (0, r.jsxs)("div", {
                className: "rockstargames-modules-gtao-license-platef1b2508e27dd3db3b76b46047e76fab6",
                ref: G,
                children: [(0, r.jsx)(o.Canvas, {
                  shadows: !R(),
                  linear: !0,
                  flat: !0,
                  dpr: window.devicePixelRatio,
                  camera: {
                    position: [0, 0, 0],
                    fov: 35
                  },
                  onCreated: ({
                    gl: e
                  }) => {
                    e.setClearColor(0, 0)
                  },
                  children: (0, r.jsx)(Ct.Provider, {
                    value: t,
                    children: (0, r.jsx)(Xt, {
                      loadedAssets: K
                    })
                  })
                }), !D && (0, r.jsx)(Ua, {})]
              })]
            }), (0, r.jsx)("span", {
              className: "rockstargames-modules-gtao-license-platefe047d438065593e0832af888b1913c1"
            }), (0, r.jsx)(Za, {
              t: e
            }), (0, r.jsx)(Tt, {
              t: e
            })]
          }) : null
        })), Ka), function(e) {
          const t = Nt();
          return (0, r.jsx)(Ct.Provider, {
            value: t,
            children: (0, r.jsx)(Qa, {
              ...e
            })
          })
        });
      var Qa
    },
    56275: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b6102d9185c58dfe8a1da872c7e27558.png"
    },
    56453: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cc712e262f7a46085049a07d1ca145ea.jpg"
    },
    56574: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27588e10169bb7555bed1fe99963ddf4.jpg"
    },
    58648: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/608f591c35aff9d47091dd7fe9a8fb13.svg"
    },
    59117: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/858ed8fe9a4aaed2e385023aac516ede.jpg"
    },
    59993: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/81c8bf8e8f3845940a1ddf505a9dbb2e.jpg"
    },
    61918: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ed129e5ac2d871dddf75daba04816bc0.jpg"
    },
    63117: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d910a48fc0914f58ca80dc0732a7677.svg"
    },
    63149: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ad86726bf1f59ba9e72f48ec3d909510.png"
    },
    64375: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/24ace1d97bcf47f10b248854b28723fb.jpg"
    },
    65044: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1a94d5705ae3ddeb4c8c2fde79bfe81.svg"
    },
    65315: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/534078f6307f97ce0d70e0bb885f9d77.svg"
    },
    67299: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f44dd7aad9d6c62e40a11f51252f59b8.svg"
    },
    67437: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/080f77652dad3eab9c63ae40289bc2cd.png"
    },
    67443: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a3931a545299e205758648bce29e5c49.svg"
    },
    68719: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/glb/1843b92a5b0f80dbad5ac625e18712c9.glb"
    },
    68918: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cd57122be57f5e3a9dc4d0a0f2503fb1.svg"
    },
    72690: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a825976dddc59e33b3ce146ad6cd3d20.svg"
    },
    74432: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a19fbf81b03db0fda00839496a3ce5.svg"
    },
    76758: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/696c6c8a65f80cb1ddef34af304bbea3.png"
    },
    77404: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d1f569db6c94b4f81417f62e91759082.svg"
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
    89018: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1911068b624e9ad6e24e0b5af557ca98.png"
    },
    89069: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/80dd50a2fa9aae3b5d6effdb2d9c2661.svg"
    },
    89235: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c4dd58f5b5b97796b6c6177de364dd36.svg"
    },
    89273: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e41a5143c3d0ae5a16573064ee1e309a.jpg"
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
    91628: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9ff7cef42d4c37cc4a158aadd7bf9e70.png"
    },
    93505: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/582604393d5f75a3b9b1943b1fdb856f.jpg"
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
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, t)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, t)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, t)
        }))
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
      t.definitions.forEach((function(e) {
        if (e.name) {
          var t = new Set;
          a(e, t), r[e.name.value] = t
        }
      })), e.exports = t, e.exports.GameData = function(e, t) {
        var a = {
          kind: e.kind,
          definitions: [s(e, t)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var n = r[t] || new Set,
          o = new Set,
          i = new Set;
        for (n.forEach((function(e) {
            i.add(e)
          })); i.size > 0;) {
          var c = i;
          i = new Set, c.forEach((function(e) {
            o.has(e) || (o.add(e), (r[e] || new Set).forEach((function(e) {
              i.add(e)
            })))
          }))
        }
        return o.forEach((function(t) {
          var r = s(e, t);
          r && a.definitions.push(r)
        })), a
      }(t, "GameData")
    },
    96698: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/306a9606a4773a61342b14618e5e4165.jpg"
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