try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "a2f0b92f-f83a-4f56-9f2e-917adca509ff", e._sentryDebugIdIdentifier = "sentry-dbid-a2f0b92f-f83a-4f56-9f2e-917adca509ff")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [3334], {
    950: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        RpCategory: () => l,
        rpCategoryTestIds: () => d
      });
      var s = t(62229),
        n = t(38763);
      var r = t(24036),
        i = t.n(r),
        o = t(25854);
      const c = e => e < 100 ? "#2d6eb9" : e > 99 && e < 500 ? "#b48261" : e > 499 && e < 750 ? "#9699a1" : "#D6B563",
        d = {
          RANK_VALUE: "rpCategory:rankValue"
        },
        l = (0, s.forwardRef)((function(e, a) {
          let {
            rank: t,
            className: s,
            alt: r,
            testId: l,
            ...m
          } = e;
          const g = c(t),
            u = (0, n.v6)(m, {
              className: i()("rockstargames-sites-gta-gen9f54750ef62f8600000c94f0caba85986", s),
              "data-testid": l
            });
          return (0, o.jsxs)("div", {
            "data-size": "small",
            ref: a,
            ...u,
            children: [(0, o.jsx)("svg", {
              role: "svg",
              "aria-label": r,
              className: "rockstargames-sites-gta-gen9a3beb1e9c88e2938879ea4df25b63eb1",
              "data-rank": c(t),
              "data-testid": "rp-icon",
              width: "44",
              height: "44",
              viewBox: "0 0 44 44",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, o.jsx)("path", {
                d: "M21.8679 0C9.79195 0 0 9.79195 0 21.8679C0 33.9438 9.79195 43.7358 21.8679 43.7358C33.9438 43.7358 43.7358 33.9438 43.7358 21.8679C43.7358 9.79195 33.9438 0 21.8679 0ZM13.6796 17.4457H30.2506C30.4814 20.3007 30.4935 23.508 30.1048 26.9461H13.7889C13.4123 23.4958 13.4244 20.2885 13.6674 17.4457H13.6796ZM33.9681 17.4457H39.508C39.8603 18.8671 40.0668 20.3371 40.0668 21.8679C40.0668 23.6295 39.7995 25.3424 39.3379 26.9582H33.8102C34.1868 23.5201 34.1868 20.325 33.9681 17.4579V17.4457ZM38.208 13.8618H33.5793C33.1541 10.9947 32.5588 8.56492 31.9757 6.68185C34.6363 8.46773 36.7866 10.9582 38.208 13.8618ZM27.2863 4.42217C27.8208 5.73424 29.0721 9.09947 29.8132 13.8618H14.1169C14.9066 8.89294 16.2308 5.46697 16.7046 4.34928C18.3447 3.86333 20.0699 3.59605 21.8679 3.59605C23.7509 3.59605 25.5733 3.88762 27.2863 4.42217ZM12.0273 6.51177C11.432 8.40699 10.8003 10.8975 10.3629 13.8618H5.52772C6.99772 10.861 9.24525 8.32194 12.0273 6.51177ZM4.21564 17.4457H9.94989C9.71906 20.325 9.71906 23.508 10.0714 26.9461H4.38573C3.91192 25.3303 3.6568 23.6295 3.6568 21.8557C3.6568 20.325 3.86333 18.855 4.21564 17.4336V17.4457ZM5.84358 30.5421H10.5816C10.9704 32.7411 11.5049 35.0129 12.246 37.3576C9.57327 35.6811 7.35004 33.3364 5.84358 30.5421ZM16.8626 39.4229C15.672 36.3614 14.8459 33.385 14.3235 30.5421H29.5581C29.0235 33.3728 28.1974 36.3371 27.0068 39.3865C25.3789 39.8724 23.6538 40.1397 21.8679 40.1397C20.082 40.1397 18.4541 39.8846 16.8626 39.4229ZM31.6355 37.2604C32.3645 34.9522 32.9112 32.7168 33.2999 30.5421H37.88C36.3979 33.2756 34.2354 35.5839 31.6355 37.2604Z",
                fill: g
              })
            }), (0, o.jsx)("span", {
              "data-testid": d.RANK_VALUE,
              children: t
            })]
          })
        }))
    },
    1157: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/090acda789de843d56780aa60c1f7056.jpg"
    },
    2024: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e99540df7fd07d75b08a5fbc02d4815.svg"
    },
    2661: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4639a2711d1bca49a87c302784050ee3.png"
    },
    2696: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/056d3bdf1f300bcb7efa4aebcfc5224d.svg"
    },
    3818: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/774943ec47ce732040f48df3943a0a7c.jpg"
    },
    3933: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/116555df6799e584310484375c97a43f.jpg"
    },
    3950: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e5792c85d5a88a0b7c75af087e4c6ee2.svg"
    },
    6312: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b457cab77cb82e1c05ad12628414576.svg"
    },
    7502: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48754c6fc2f75b0554098423f2bda6d1.png"
    },
    7509: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/15b671d990b1f3f941c6359b3235abf3.jpg"
    },
    8054: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/198ced82807c854e92e84e23f7434c91.svg"
    },
    8194: (e, a, t) => {
      var s = {
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

      function n(e) {
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      n.keys = function() {
        return Object.keys(s)
      }, n.resolve = r, e.exports = n, n.id = 8194
    },
    8494: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f34231941013a609948485830c84c072.jpg"
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
    9333: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8787df71c723ebe44f82fd13ed216e09.jpg"
    },
    9815: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2eb8777f38cbd4d721261ad736c1f2e7.svg"
    },
    10111: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    10419: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/092865e0ddae5190dc3c0284ee3c21bd.svg"
    },
    10632: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => c
      });
      var s = t(75385),
        n = t(83659);
      const r = {
        badge: "rockstargames-sites-gta-gen9b7268b0e907630904b6689af83fee8e3",
        badgeSizeUpdate: "rockstargames-sites-gta-gen9ce8632d7464b556158a1d549f653498c",
        badge2: "rockstargames-sites-gta-gen9d08ce7145bc9562355a3984f8ccc9313",
        badge3: "rockstargames-sites-gta-gen9c7c60cfb12b6e9be68893c60814b3ed7"
      };
      var i = t(25854);
      const o = e => {
          let {
            wrapper: a,
            children: t,
            role: s,
            splitter: n
          } = e;
          return n || s ? a(t) : t
        },
        c = e => {
          let {
            badge: a,
            badgeType: c,
            role: d,
            splitter: l
          } = e;
          const m = [];
          return l ? a.split(l).map(((e, a) => m.push(e))) : m.push(a), (0, i.jsxs)(o, {
            splitter: l,
            role: d,
            wrapper: e => (0, i.jsx)("div", {
              className: `${r.badge} ${c?r[c]:""} `,
              children: e
            }),
            children: [(0, i.jsx)(i.Fragment, {
              children: d && (0, i.jsx)(s.A, {
                image: {
                  alt: d,
                  desktop: t(65287)(`./${d}.png`)
                }
              })
            }), (0, i.jsx)(n.A, {
              className: `${l||d?"":r.badge} ${c?r[c]:""}`,
              min: 8,
              max: 1e3,
              mode: l || d ? "single" : "multi",
              children: m[0]
            }), (0, i.jsx)(i.Fragment, {
              children: m.shift() && l && m.length >= 1 && (0, i.jsx)(n.A, {
                min: 8,
                max: 1e3,
                mode: "single",
                forceSingleModeWidth: !0,
                children: m.join(" ")
              })
            })]
          }, "badge-wrapper")
        }
    },
    10869: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c82125e0b20342dba2008b0dcc6d55f6.jpg"
    },
    12602: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dd4b0f40e745f4347c822594da56a119.jpg"
    },
    13095: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e7d916fcce2bbe9b6419f914f290597.jpg"
    },
    14724: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bbcbd2a2bb65ddad76e831c91c17b421.jpg"
    },
    14804: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    },
    14825: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14448aca4ceaab8680323ce19c963d68.jpg"
    },
    15821: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/129ef1c1a15ffc7afb86ce282e48decb.svg"
    },
    16386: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/898794daaec68a69ef5ec4afaefe1948.png"
    },
    17065: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/676b3908098d8b19f1019ce361af45ec.png"
    },
    18177: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/35cf853d7882b090b56837bd08127da1.svg"
    },
    18518: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0281770395dc77e41c1f40559a3d5989.jpg"
    },
    18712: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/29ea20c333709a952c2eb3a2591d435d.svg"
    },
    19026: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        componentsForTinaParser: () => tn,
        componentsForTinaParserGuide: () => sn
      });
      var s = {};
      t.r(s), t.d(s, {
        Art: () => ts,
        Link: () => ss
      });
      var n = {};
      t.r(n), t.d(n, {
        A: () => G.A,
        AlertDialog: () => Y,
        AudioPlayer: () => Ya,
        Badge: () => Ee,
        Brands: () => M,
        Button: () => ja.A,
        ButtonGroup: () => I,
        CalloutSection: () => o.A,
        Carousel: () => c.A,
        CharacterCard: () => Ka,
        ConditionalBlock: () => k,
        CookieAB: () => at,
        CountryInputField: () => Ja,
        Cta: () => v.A,
        DescriptionArea: () => tt.A,
        DiscountsBadge: () => st.A,
        DotLoader: () => rt,
        Dropdown: () => ct,
        Embed: () => lt,
        ExpandingPlatformButton: () => _.A,
        FadeInContent: () => gt,
        Gen9Button: () => L.A,
        Gen9CoreCarousel: () => C.A,
        Grid: () => x,
        HTMLElement: () => B,
        Hero: () => A,
        HookStore: () => u,
        ImageWithBadge: () => be.A,
        LayeredImage: () => pt,
        Lightbox: () => bt,
        LoadingAnimation: () => U.A,
        MultiSourceImage: () => xa.A,
        NewswireBlocks: () => Mt,
        NewswireCard: () => yt,
        NewswireList: () => St,
        NewswireRelated: () => Tt,
        NewswireTag: () => ht,
        OrderedList: () => oe.A,
        Paging: () => Pt,
        ParallaxCacheBuster: () => ge,
        ParallaxInnerLayer: () => de,
        ParallaxOuterLayer: () => me,
        ParallaxWrapper: () => fe,
        PlatformTag: () => _s.Ay,
        PromoModule: () => ve,
        Rating: () => _e.A,
        ResponsiveFlexBox: () => At,
        ResponsiveFlexItem: () => $t,
        ResponsiveGridBox: () => Vt,
        ResponsiveGridItem: () => Rt,
        ResponsiveImg: () => Gt,
        ResponsiveSection: () => Ut,
        RockstarLogo: () => H,
        RpCategory: () => vs,
        SafeHtml: () => qt,
        ScrollSection: () => Yt.A,
        ScrollToTop: () => Kt,
        ScrollTracker: () => Te,
        SearchBox: () => Qt.A,
        Separator: () => Xt.A,
        SrcsetImage: () => vt,
        StorybookWrapper: () => Zt,
        TextFit: () => Jt.A,
        ThumbsGallery: () => Pa,
        TinaModuleFetchNRender: () => Ne.A,
        TinaWrapper: () => es,
        TrackList: () => ha,
        UnorderedList: () => pe.A,
        UserVote: () => ye,
        VideoCard: () => s,
        VideoCarousel: () => is,
        VideoList: () => us,
        VisuallyHidden: () => fs,
        Wasted: () => ps.A,
        framer: () => je,
        useTinaModuleFetchByIds: () => Ne.X,
        withSearchbarErrorBoundary: () => bs.A,
        withSimpleErrorBoundary: () => ks.A
      });
      var r = t(31879),
        i = t.n(r),
        o = t(88105),
        c = t(60882),
        d = t(62229),
        l = t(9623),
        m = t(95966),
        g = t(2918);
      const u = (0, t(75097).FF)();
      var f = t(25854);
      const p = e => e.some((e => !e)),
        b = e => {
          let {
            condition: a = null,
            children: t
          } = e;
          const [s, n] = (0, d.useState)(!1), r = (e => {
            const [a] = (0, l.useSearchParams)(), [t, s] = (0, d.useState)(null), n = (0, g.useRockstarUser)(), {
              loggedIn: r,
              data: i
            } = n, {
              hasGtaPlus: o
            } = i ?? {};
            return (0, d.useEffect)((() => {
              const t = "true" === a.get("conditionPreview");
              if (!e?.length > 0) return;
              u.applyFilters("preview_conditions", e);
              const n = [];
              return e.forEach((e => {
                const {
                  value: s
                } = e;
                if (t) return "true" === a.get(s) ? (n.push(!0), !0) : (n.push(!1), !1);
                if (p(n)) return !1;
                switch (s) {
                  case "user:is:loggedIn":
                    n.push(!0 === r);
                    break;
                  case "user:not:loggedIn":
                    n.push(!1 === r);
                    break;
                  case "user:is:gtaPlus":
                    n.push(!0 === o);
                    break;
                  case "user:not:gtaPlus":
                    n.push(!1 === o || void 0 === o);
                    break;
                  default:
                    n.push(!1)
                }
                return null
              })), s(!p(n)), () => {}
            }), [a, e, o, n, r]), t
          })(a);
          return (0, d.useEffect)((() => {
            n(r)
          }), [r]), (0, d.useMemo)((() => s ? t : null), [s])
        },
        k = (0, m.withTranslations)((e => {
          let {
            children: a
          } = e;
          return d.Children.map(d.Children.toArray(a), (e => (0, f.jsx)(b, {
            ...e?.props
          })))
        }));
      var v = t(37232),
        _ = t(76782),
        h = t(38558);
      const x = e => {
        let {
          children: a,
          context: t = null,
          game: s,
          image: n = {},
          style: r = {},
          template: i = null,
          theme: o = null,
          reversedOnMobile: c = !1,
          className: d = "",
          id: l = null
        } = e;
        const g = (0, h.S1)(n ?? {}),
          u = {
            ...r
          };
        if (g?.src?.desktop) {
          const e = (n?.style && n?.style["--background-image-size"]) ?? "var(--grid-background-size, cover)",
            a = (n?.style && n?.style["--background-image-repeat"]) ?? "var(--grid-background-repeat, no-repeat)",
            t = `var(--grid-background-position, center)/${e??"cover"}`;
          if (u.background = `url(${g?.src?.desktop}) ${a} ${t}`, n?.style && n?.style["--linear-gradient"]) u.background = `linear-gradient(${n?.style["--linear-gradient"]}), url(${g?.src?.desktop}) ${a} ${t}`;
          else if (n?.style && n?.style["--gradient-height"]) {
            const e = n?.style["--gradient-height"] || "3",
              s = n?.style["--gradient-start-color"] || "var(--background-color, transparent)",
              r = n?.style["--gradient-end-color"] || "var(--background-color, transparent)";
            u.background = `linear-gradient(180deg, ${s}, transparent ${e}%, transparent ${100-e}%, ${r}), url(${g?.src?.desktop}) ${a} ${t}`
          }
        }
        return (0, f.jsx)("div", {
          id: l,
          className: (0, m.classList)("rockstargames-sites-gta-gen9da87ead760b989fbe90a0b89c60b0653", c ? "rockstargames-sites-gta-gen9dfbda195073626bc6a7690dc73fba873" : "", d),
          "data-game": "community" === i ? null : s,
          style: (0, m.safeStyles)(u),
          "data-context": t,
          "data-template": i,
          "data-theme": o,
          children: a
        })
      };
      var y = t(62665),
        N = t(92440);
      const j = {
          pillBtn: "rockstargames-sites-gta-gen9b89f190ffa4d32a33304ffa4b5ff73df",
          selected: "rockstargames-sites-gta-gen9b5c12cc9810c7b3774102378f71714a1",
          hero: "rockstargames-sites-gta-gen9dccb6453f49a8e81c4ec407c39df4c79",
          images: "rockstargames-sites-gta-gen9d5fdc650fc4f2f7441ce7c563ae9653e",
          background: "rockstargames-sites-gta-gen9c8c90210c344650ad11d2d97258dcaab",
          gradient: "rockstargames-sites-gta-gen9d074051a93eac66cd56c616c8ccd4c91",
          layered: "rockstargames-sites-gta-gen9c58f0111e3765dc6116481764d0431d0",
          content: "rockstargames-sites-gta-gen9e4bb4024fb4b167423f58e02e471bf5e",
          descriptions: "rockstargames-sites-gta-gen9a54e628f4898aed20e45ad8a5e39af7f",
          buttonGroup: "rockstargames-sites-gta-gen9b8a0dc337c7ea835340f88b0f6d14822",
          ctaBlock: "rockstargames-sites-gta-gen9c3f1f785f5adb5cfcbf93195e21521e6",
          verticalCtaBlock: "rockstargames-sites-gta-gen9de8ee9092175484396cd56d19aec7cbd",
          primaryBtn: "rockstargames-sites-gta-gen9d273ee25efe0a98d789db801a1a18e97",
          secondaryBtn: "rockstargames-sites-gta-gen9af112e1264860cebe9be5f542d47ec27",
          btnText: "rockstargames-sites-gta-gen9e8ca7c699fe44c30cf4e542ee8b22119",
          legalText: "rockstargames-sites-gta-gen9bdbadc8b5ef295a4122905fffdde18f6",
          shardsCarousel: "rockstargames-sites-gta-gen9cd8c6fbe5139a661c2e52e9df726ca78"
        },
        w = {
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
        S = {
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
      var C = t(96644);
      const T = e => {
          let {
            title: a = "",
            mobileImg: t,
            desktopImg: s
          } = e;
          const n = (0, N.useGetCdnSource)(t ?? null),
            r = (0, N.useGetCdnSource)(s ?? n);
          return (0, f.jsx)("div", {
            className: j.shard,
            style: {
              "--background-image-mobile": `url(${n})`,
              "--background-image-desktop": `url(${r})`
            },
            children: (0, f.jsx)("h5", {
              children: a
            })
          })
        },
        E = e => {
          let {
            title: a = "Membership Rewards",
            name: t = "Membership Rewards",
            shards: s
          } = e;
          const [n, r] = (0, d.useState)(null);
          return (0, d.useEffect)((() => {
            s && r(s.reduce(((e, a) => {
              if (!a?.shardImg) return e;
              const {
                title: t,
                shardImg: s
              } = a, {
                mobile: n,
                desktop: r
              } = s;
              return e.push((0, f.jsx)(T, {
                title: t,
                mobileImg: n?.full_src,
                desktopImg: r?.full_src
              })), e
            }), []))
          }), [s]), n ? (0, f.jsx)("div", {
            className: j.shardsCarousel,
            children: (0, f.jsx)(C.A, {
              title: a,
              name: t,
              slideChildren: n,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        M = e => {
          let {
            brands: a = []
          } = e;
          return a.length ? (0, f.jsx)("div", {
            className: "rockstargames-sites-gta-gen9b53b6eca487387fc5c2057daf151691a",
            children: a.map(((e, a) => {
              let {
                brand: t
              } = e;
              return (0, f.jsx)("div", {
                className: "rockstargames-sites-gta-gen9e8c3be7a76fd7e532e74a9fcf87bee09",
                "data-brand": t
              }, a)
            }))
          }) : null
        };
      var L = t(10619);
      const I = e => {
          let {
            buttons: a = [],
            className: t
          } = e;
          return a.length ? (0, f.jsx)("div", {
            className: (0, m.classList)("rockstargames-sites-gta-gen9bbd74dec556da7f5c06710c72c662f8a", t),
            children: a.map(((e, a) => {
              let {
                icon: t,
                title: s,
                to: n
              } = e;
              return s ? (0, f.jsx)(L.A, {
                icon: t,
                text: s,
                to: n
              }, a) : ""
            }))
          }) : null
        },
        P = e => {
          let {
            animated: a = !1,
            ctas: t = [],
            expandingButtonLabel: s = "Subscribe"
          } = e;
          const [n, r] = (0, d.useState)([]), [i, o] = (0, d.useState)([]);
          return (0, d.useEffect)((() => {
            const {
              expandingButtonsArray: e,
              plainButtonsArray: a
            } = t.reduce(((e, a) => (a.isInExpandingButton ? e.expandingButtonsArray.push({
              href: a.href,
              platform: a.platform,
              buttonText: a.buttonText
            }) : e.plainButtonsArray.push({
              icon: a.platform ?? "",
              title: a.buttonText,
              to: a.href
            }), e)), {
              expandingButtonsArray: [],
              plainButtonsArray: []
            });
            r(e), o(a)
          }), [t]), n.length ? (0, f.jsx)(y.motion.div, {
            variants: a ? S : void 0,
            children: (0, f.jsx)(_.A, {
              variant: "gen9",
              buttonText: s,
              platformsAndLinks: n,
              children: !!i.length && (0, f.jsx)(y.motion.div, {
                variants: S,
                children: (0, f.jsx)(I, {
                  buttons: i,
                  className: j.buttonGroup
                })
              })
            })
          }) : (0, f.jsx)(f.Fragment, {
            children: !!i.length && (0, f.jsx)(y.motion.div, {
              variants: S,
              children: (0, f.jsx)(I, {
                buttons: i,
                className: j.buttonGroup
              })
            })
          })
        },
        z = e => {
          let {
            animated: a = !1,
            brands: t = [],
            cta: s = [],
            ctas: n = [],
            description: r = "",
            expandingButtonLabel: i = "Subscribe",
            legalText: o,
            stackButtons: c,
            title: d = ""
          } = e;
          return (0, f.jsxs)(y.motion.div, {
            className: j.content,
            initial: "hidden",
            animate: "visible",
            variants: a ? w : void 0,
            children: [(0, f.jsx)(y.motion.div, {
              variants: a ? S : void 0,
              children: (0, f.jsx)(M, {
                brands: t
              })
            }), (d || r) && (0, f.jsxs)(y.motion.div, {
              className: j.descriptions,
              variants: a ? S : void 0,
              children: [d && (0, f.jsx)("h2", {
                dangerouslySetInnerHTML: {
                  __html: d
                }
              }), r && (0, f.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: r
                }
              })]
            }), !!s.length && (0, f.jsx)("div", {
              className: c ? j.verticalCtaBlock : j.ctaBlock,
              children: (0, f.jsx)(N.TinaParser, {
                components: {
                  Cta: v.A,
                  ExpandingPlatformButton: _.A
                },
                tina: {
                  payload: {
                    content: s
                  }
                }
              })
            }), !!n.length && (0, f.jsx)("div", {
              className: j.ctaBlock,
              children: (0, f.jsx)(P, {
                animated: a,
                ctas: n,
                expandingButtonLabel: i
              })
            }), o && (0, f.jsx)(y.motion.div, {
              className: j.legalText,
              variants: a ? S : void 0,
              children: (0, f.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: o
                }
              })
            })]
          })
        },
        A = e => {
          let {
            animated: a = !1,
            backgroundImage: t,
            brands: s = [],
            className: n,
            ctas: r = [],
            cta: i,
            description: o = "",
            expandingButtonLabel: c = "Subscribe",
            layeredImage: l,
            layeredImageSettings: g,
            legalText: u,
            shardsSection: p = {},
            stackButtons: b = !1,
            theme: k = "gen9",
            title: v = ""
          } = e;
          const {
            breakpoints: _,
            windowWidth: h
          } = (0, m.useWindowResize)(), x = _.xxl.min, S = (e => {
            if (!e) return null;
            const a = {},
              t = new Map([
                ["xsmall", "xs"],
                ["small", "sm"],
                ["medium", "md"],
                ["large", "lg"],
                ["xlarge", "xl"],
                ["horizontal", "--layered-horizontal-offset-"],
                ["vertical", "--layered-vertical-offset-"],
                ["imageWidth", "--layered-image-width-"]
              ]);
            return Object.entries(e).forEach((e => {
              const [s, n] = e;
              if (t.has(s)) {
                const e = t.get(s);
                Object.entries(n).forEach((n => {
                  const [r, i] = n;
                  if (t.has(s) && t.has(r)) {
                    const s = `${t.get(r)}${e}`;
                    a[s] = "imageWidth" !== r ? i ? `${i}px` : "0px" : i ? `${i}vw` : "100vw"
                  }
                }))
              }
            })), a
          })(g), C = (0, N.useGetCdnSource)(t?.mobile?.full_src ?? null), T = (0, N.useGetCdnSource)(t?.desktop?.full_src ?? C), M = (0, N.useGetCdnSource)(l?.mobile?.full_src ?? null), L = (0, N.useGetCdnSource)(l?.desktop?.full_src ?? M), I = (0, d.useMemo)((() => {
            const {
              mobileStyle: e,
              desktopStyle: a,
              style: s
            } = t ?? {};
            return {
              ...s,
              ...h >= x ? (0, m.safeStyles)(a) : (0, m.safeStyles)(e)
            }
          }), [h, t?.style, t?.mobileStyle, t?.desktopStyle]);
          return (0, f.jsxs)(y.motion.div, {
            className: (0, m.classList)(j.hero, n),
            style: {
              "--background-image-desktop": `url(${T})`,
              "--background-image-mobile": `url(${C})`,
              "--layered-image-desktop": `url(${L})`,
              "--layered-image-mobile": `url(${M})`
            },
            initial: "hidden",
            animate: "visible",
            variants: a ? w : void 0,
            "data-type": "hero",
            theme: k,
            children: [(0, f.jsxs)("div", {
              className: j.images,
              children: [T && C ? (0, f.jsx)("div", {
                className: j.background,
                style: I ?? {}
              }) : "", M && L ? (0, f.jsx)("div", {
                className: j.layered,
                style: g ? S : {}
              }) : "", (0, f.jsx)("div", {
                className: j.gradient
              })]
            }), (0, f.jsx)(z, {
              animated: a,
              brands: s,
              cta: i,
              ctas: r,
              description: o,
              expandingButtonLabel: c,
              legalText: u,
              stackButtons: b,
              title: v
            }), p?.shards && (0, f.jsx)(E, {
              ...p
            })]
          })
        };
      var D = t(16188),
        $ = t.n(D);
      const B = e => {
        let {
          attributes: a = {},
          children: t,
          className: s = "",
          id: n = "",
          style: r = {}
        } = e;
        return (0, f.jsx)("span", {
          className: (0, m.classList)(s, a?.className, "rockstargames-sites-gta-gen9c650a7a1e761d6a9f2d6ce1cd8d6f330"),
          id: n,
          style: (0, m.safeStyles)(r ?? a?.style ?? {}),
          dangerouslySetInnerHTML: {
            __html: $().unescape(t)
          }
        })
      };
      var V = t(81788),
        O = t(40148),
        R = t(55799),
        F = t(61898),
        G = t(14341);
      const H = e => {
        let {
          disableLink: a,
          className: t,
          "data-testid": s
        } = e;
        const n = a ? "span" : G.A;
        return (0, f.jsx)(n, {
          className: [a ? "rockstargames-sites-gta-gen9b28a6ee32abeb20049b97677a86a4314" : "rockstargames-sites-gta-gen9a3d920a1139575706b914bc3a0100970", t || ""].join(" "),
          "data-testid": s,
          alt: "Rockstar Games Home",
          ...!a && {
            to: "/"
          }
        })
      };
      var U = t(1225);
      const W = e => {
          let {
            button: a,
            closeDialog: t,
            style: s = "primary"
          } = e;
          const {
            buttonIcon: n,
            buttonText: r,
            extraClasses: i,
            isDisabled: o,
            isLink: c,
            link: d,
            onClick: l,
            testId: g
          } = a;
          return c ? r && (0, f.jsx)(F.Button, {
            asChild: !0,
            appearance: s,
            size: "MD",
            children: (0, f.jsx)("a", {
              href: d,
              ...g && {
                "data-testid": g
              },
              children: r
            })
          }) : (0, f.jsx)(F.Button, {
            autoFocus: !0,
            iconRight: n,
            className: (0, m.classList)(i),
            isDisabled: o,
            onPress: e => (e => {
              l && l(), t && t(), "function" == typeof e?.stopPropagation && e?.stopPropagation()
            })(e),
            type: "button",
            appearance: s,
            "aria-label": r,
            ...g && {
              "data-testid": g
            },
            children: r
          })
        },
        q = {
          pillBtn: "rockstargames-sites-gta-gen9b403f298c2eff00899432c93daa15aec",
          selected: "rockstargames-sites-gta-gen9a6cab397bf3a16564fcc531ef4c16130",
          dialog: "rockstargames-sites-gta-gen9d2c9ef0a70d425745a27c169c594199a",
          "slide-up": "rockstargames-sites-gta-gen9b2b3117a07a11b3ec5897e4718e24373",
          "fade-in": "rockstargames-sites-gta-gen9e30057881578a38b5dc6f50854c6b56d",
          heading: "rockstargames-sites-gta-gen9dab9a8f190197c99405cebe1e9a992d6",
          message: "rockstargames-sites-gta-gen9f7cd64be4f94a272222f88f34789734a",
          icon: "rockstargames-sites-gta-gen9bc1e57fee27452c58670e4f60e492246",
          check: "rockstargames-sites-gta-gen9b63b9588fb98b439d19028797670c6c5",
          error: "rockstargames-sites-gta-gen9f654f7a2bf475a939f8c05fb569bfd5e",
          mail: "rockstargames-sites-gta-gen9b120386c4c2485c587f87173721d63be",
          content: "rockstargames-sites-gta-gen9efe65f5c39de5d044fdc6b13c1771125",
          actions: "rockstargames-sites-gta-gen9d35d1125eabb9ae0e941bd585003c4fc"
        },
        Y = e => {
          let {
            icon: a,
            title: t,
            secondaryText: s,
            buttons: n,
            showDialog: r,
            onClose: i = () => {},
            closeOnOutsideClick: o = !0,
            extraClasses: c
          } = e;
          const l = (0, d.useRef)(null),
            {
              setBodyIsLocked: g
            } = (0, m.useBodyScrollable)("AlertDialog");
          (0, d.useEffect)((() => {
            r && l?.current && (l.current?.showModal?.(), g(!0))
          }), [r]);
          const u = () => {
            g(!1), i(), l.current?.close?.()
          };
          if (r) return (0, f.jsxs)("dialog", {
            ref: l,
            className: q.dialog,
            onClick: e => (e => {
              if (!e.currentTarget) return;
              const a = e.currentTarget.getBoundingClientRect();
              (a.left > e.clientX || a.right < e.clientX || a.top > e.clientY || a.bottom < e.clientY) && o && (g(!1), i(), e.currentTarget.close())
            })(e),
            "data-testid": "alert-dialog",
            children: [a && (0, f.jsx)("i", {
              className: [q.icon, q[a]].join(" ")
            }), (0, f.jsxs)("div", {
              className: [q.content, c?.content].join(" "),
              children: [(0, f.jsx)("h3", {
                className: [q.heading, c?.heading].join(" "),
                children: t
              }), s && (0, f.jsx)("div", {
                className: [q.message, c?.message].join(" "),
                dangerouslySetInnerHTML: {
                  __html: s
                }
              })]
            }), n && (0, f.jsx)("div", {
              className: q.actions,
              children: n.slice(0, 2).map(((e, a) => (0, f.jsx)(W, {
                style: e?.style ?? (0 === a ? "primary" : "secondary"),
                button: e,
                closeDialog: u
              }, e.buttonText)))
            })]
          })
        },
        K = (0, V.defineMessages)({
          ns_cta_title: {
            id: "ns_cta_title",
            defaultMessage: "Subscribe to the Rockstar Games Email List"
          },
          ns_cta_title_twitchdrops: {
            id: "ns_cta_title_twitchdrops",
            defaultMessage: "Don't miss the next free GTA Online gift"
          },
          ns_cta_text: {
            id: "ns_cta_text",
            defaultMessage: "Sign up for our email newsletter to get info on game announcements and updates, details on special events and offers, and more from Rockstar Games and our affiliates."
          },
          ns_cta_button_text: {
            id: "ns_cta_button_text",
            defaultMessage: "Subscribe Now"
          },
          ns_successfully_subscribed_title: {
            id: "ns_successfully_subscribed_title",
            defaultMessage: "Successfully Subscribed"
          },
          ns_successfully_subscribed_details: {
            id: "ns_successfully_subscribed_details",
            defaultMessage: "You are now signed up to the Rockstar Games Email List and will receive regular updates to the email address you’ve signed up with. Manage your email preferences at any time on your account settings page."
          },
          ns_error_preferences_title: {
            id: "ns_error_preferences_title",
            defaultMessage: "Error"
          },
          ns_error_preferences_details: {
            id: "ns_error_preferences_details",
            defaultMessage: "We cannot sign up your email address to our newsletter at this time. Change your email preferences on your account settings page or try again later."
          },
          ns_error_generic_title: {
            id: "ns_error_generic_title",
            defaultMessage: "Error"
          },
          ns_error_generic_details: {
            id: "ns_error_generic_details",
            defaultMessage: "We cannot sign up this email address to our newsletter at this time."
          },
          ns_already_subbed_title: {
            id: "ns_already_subbed_title",
            defaultMessage: "Already Subscribed"
          },
          ns_already_subbed_details: {
            id: "ns_already_subbed_details",
            defaultMessage: "You are already receiving newsletter updates at this email address. Change your email preferences at any time on your account settings page."
          },
          ns_check_email_title: {
            id: "ns_check_email_title",
            defaultMessage: "Check Your Email"
          },
          ns_check_email_details: {
            id: "ns_check_email_details",
            defaultMessage: "To confirm your subscription to the Rockstar Games Email List, please verify your email address via the link sent to the email address you’ve signed up with."
          },
          ns_confirm_title: {
            id: "ns_confirm_title",
            defaultMessage: "Confirm your subscription"
          },
          ns_confirm_details: {
            id: "ns_confirm_details",
            defaultMessage: "Please confirm that you would like to subscribe to the Rockstar Games Newsletter by clicking the button below."
          },
          ns_confirm_after_register_title: {
            id: "ns_confirm_after_register_title",
            defaultMessage: "Confirm your subscription"
          },
          ns_confirm_after_register_details: {
            id: "ns_confirm_after_register_details",
            defaultMessage: "You did not opt-in to receive marketing emails during account creation. Would you still like to subscribe to our newsletter?"
          },
          ns_ok_button_text: {
            id: "ns_ok_button_text",
            defaultMessage: "OK"
          },
          ns_manage_prefs_button_text: {
            id: "ns_manage_prefs_button_text",
            defaultMessage: "Manage Preferences"
          },
          ns_yes_subscribe_text: {
            id: "ns_yes_subscribe_text",
            defaultMessage: "Yes, Subscribe"
          },
          ns_go_back_text: {
            id: "ns_go_back_text",
            defaultMessage: "No, Go Back"
          }
        });
      var Q = t(24036),
        X = t.n(Q);
      const Z = {
          pillBtn: "rockstargames-sites-gta-gen9bcc802c8f4e672f115f1074115c966e4",
          selected: "rockstargames-sites-gta-gen9fccc728f8062fedd21dda9ff20af4447",
          fadeIn: "rockstargames-sites-gta-gen9d4657bdad910613ab1c913eac69cc03a",
          "fade-in": "rockstargames-sites-gta-gen9f96d40bc7df11b0cd20585fb7b275d60",
          newsletterSubscription: "rockstargames-sites-gta-gen9c06351d3974c9778756737586bbe2117",
          banner: "rockstargames-sites-gta-gen9a031b97fa036ddae4bbadc6680558a2f",
          heading: "rockstargames-sites-gta-gen9ce3bcff18b4587d306e54fc607d1c872",
          copy: "rockstargames-sites-gta-gen9fd7cac31d4bc18c4c27f90dfbb6f7f49",
          inner: "rockstargames-sites-gta-gen9d5512a5e255d98ac193b89292a6f908e",
          body: "rockstargames-sites-gta-gen9b47d60d510ae51d65a0f6fb1eb459c89",
          isLoading: "rockstargames-sites-gta-gen9a365a6b8f3c57e3ff39bdfe300b076f4",
          buttonLoader: "rockstargames-sites-gta-gen9f302edb669d15d02ca82b40e4abacebb"
        },
        J = e => {
          let {
            loading: a,
            loggedIn: t,
            urls: s,
            handleSubscribeButton: n,
            isButtonLoading: r,
            showDialog: i,
            setShowDialog: o,
            dialog: c,
            isSubscribed: m,
            variant: u
          } = e;
          const [p, b] = (0, d.useState)(!1), k = (0, V.useIntl)(), {
            track: v
          } = (0, g.useGtmTrack)(), {
            ref: _,
            inView: h
          } = (0, R.useInView)({
            threshold: .6
          }), x = c?.buttons || [{
            buttonText: k.formatMessage(K.ns_ok_button_text),
            onClick: () => {
              o(!1)
            },
            testId: "ok-btn",
            style: "secondary"
          }, {
            buttonText: c?.showManagePreferences ? k.formatMessage(K.ns_manage_prefs_button_text) : "",
            isLink: !0,
            link: s.preferences,
            testId: "preferences-btn",
            style: "ghost"
          }];
          return (0, d.useEffect)((() => {
            h && !p && (v({
              event: "page_section_impression",
              section_layout: t ? "signed in" : "signed out",
              element_placement: "newsletter subscribe"
            }), b(!0))
          }), [h]), (0, f.jsxs)(f.Fragment, {
            children: [!m && (0, f.jsx)("div", {
              className: X()(Z.newsletterSubscription),
              "data-testid": "news-sub-banner",
              ref: _,
              children: (0, f.jsx)("section", {
                className: Z.banner,
                children: (0, f.jsx)("div", {
                  className: Z.inner,
                  children: a ? (0, f.jsx)(U.A, {}) : (0, f.jsxs)(f.Fragment, {
                    children: [(0, f.jsx)(H, {
                      disableLink: !0,
                      className: Z.fadeIn
                    }), (0, f.jsxs)("div", {
                      className: Z.body,
                      children: [(0, f.jsx)(F.Heading, {
                        level: 5,
                        className: [Z.heading, Z.fadeIn].join(" "),
                        children: "twitchdrops" === u ? (0, f.jsx)(V.FormattedMessage, {
                          ...K.ns_cta_title_twitchdrops
                        }) : (0, f.jsx)(V.FormattedMessage, {
                          ...K.ns_cta_title
                        })
                      }), (0, f.jsx)(F.Body, {
                        className: [Z.copy, Z.fadeIn].join(" "),
                        children: (0, f.jsx)(V.FormattedMessage, {
                          ...K.ns_cta_text
                        })
                      })]
                    }), t ? (0, f.jsxs)(F.Button, {
                      size: "MD",
                      appearance: "secondary",
                      onPress: n,
                      isDisabled: r,
                      "data-testid": "sub-btn",
                      children: [(0, f.jsx)(V.FormattedMessage, {
                        ...K.ns_cta_button_text
                      }), r && (0, f.jsx)("div", {
                        className: Z.buttonLoader,
                        children: (0, f.jsx)(U.A, {})
                      })]
                    }) : s?.auth && (0, f.jsx)(l.Link, {
                      to: s.auth,
                      "data-testid": "sub-link",
                      onClick: () => {
                        v({
                          event: "cta_subscribe_news",
                          section_layout: "signed out",
                          element_placement: "newsletter subscribe",
                          text: "subscribe now",
                          link_url: s.auth
                        })
                      },
                      children: (0, f.jsx)(F.Button, {
                        size: "MD",
                        appearance: "secondary",
                        allCaps: !0,
                        onPress: n,
                        isDisabled: r,
                        "data-testid": "sub-btn",
                        children: (0, f.jsx)(V.FormattedMessage, {
                          ...K.ns_cta_button_text
                        })
                      })
                    })]
                  })
                })
              })
            }), c && (0, f.jsx)(Y, {
              icon: c.icon,
              title: k.formatMessage(c.heading),
              secondaryText: k.formatMessage(c.bodyText),
              closeOnOutsideClick: c.closeOnOutsideClick,
              buttons: [{
                ...x[0]
              }, {
                ...x[1]
              }],
              showDialog: i,
              onClose: () => o(!1)
            })]
          })
        },
        ee = {
          SUCCESS: {
            icon: "check",
            heading: K.ns_successfully_subscribed_title,
            bodyText: K.ns_successfully_subscribed_details,
            showManagePreferences: !0
          },
          CHECK_EMAIL: {
            icon: "mail",
            heading: K.ns_check_email_title,
            bodyText: K.ns_check_email_details
          },
          ERROR_PREFERENCES: {
            icon: "error",
            heading: K.ns_error_preferences_title,
            bodyText: K.ns_error_preferences_details,
            showManagePreferences: !0
          },
          ERROR_GENERIC: {
            icon: "error",
            heading: K.ns_error_generic_title,
            bodyText: K.ns_error_generic_details
          },
          ALREADY_SUBSCRIBED: {
            icon: "check",
            heading: K.ns_already_subbed_title,
            bodyText: K.ns_already_subbed_details,
            showManagePreferences: !0
          },
          NEW_ACCOUNT: {
            icon: "mail",
            heading: K.ns_confirm_after_register_title,
            bodyText: K.ns_confirm_after_register_details,
            showManagePreferences: !0
          },
          CONFIRM: {
            icon: "mail",
            heading: K.ns_confirm_title,
            bodyText: K.ns_confirm_details,
            showManagePreferences: !1
          }
        },
        ae = {
          0: ee.ERROR_PREFERENCES,
          1: ee.SUCCESS,
          2: ee.ERROR_PREFERENCES,
          3: ee.ERROR_PREFERENCES,
          4: ee.ERROR_GENERIC
        },
        te = (0, m.setMakeVarItem)({
          key: "subscriptionStatusReactive",
          value: (0, m.makeVar)(void 0)
        }),
        se = e => te(e),
        ne = (e, a) => {
          const [t, s] = (0, d.useState)(), [n, r] = (0, d.useState)(!1), [i, o] = (0, d.useState)(!1), [c, l] = (0, d.useState)(!1), [u, f] = (0, d.useState)(!1), p = (0, m.useReactiveVar)(te), b = (0, V.useIntl)(), {
            track: k
          } = (0, g.useGtmTrack)(), v = {
            preferences: `https://${e.sc}.rockstargames.com/settings/email`,
            auth: `${e.login}?returnUrl=${window.location.pathname}%3Fmarketing%3Dtrue&lang=${e.lang}&newsletter=true`
          }, _ = e => {
            s(e), o(!0), l(!1)
          }, h = {
            ...ee.NEW_ACCOUNT,
            closeOnOutsideClick: !1,
            buttons: [{
              buttonText: b.formatMessage(K.ns_yes_subscribe_text),
              style: "monochrome",
              onClick: () => {
                x()
              }
            }, {
              buttonText: b.formatMessage(K.ns_go_back_text),
              onClick: () => {
                s(null), o(!1)
              }
            }]
          }, x = async () => (k({
            event: "cta_subscribe_news",
            section_layout: a.loggedIn ? "signed in" : "signed out",
            element_placement: "newsletter subscribe",
            text: "subscribe now"
          }), a.loggedIn || (window.location.href = v.auth), a.loggedIn && a.isAMinor ? (_(ee.ERROR_GENERIC), f(!1), void k({
            event: "alert_error",
            text: "error message with no preferences link",
            element_placement: "newsletter subscribe"
          })) : a.loggedIn && !p || a.loggedIn && 3 == p ? void await y() : a.loggedIn && p ? (k({
            event: "alert_update",
            text: "alert - user already subscribed",
            element_placement: "newsletter subscribe"
          }), _(ee.ALREADY_SUBSCRIBED), void f(!1)) : void 0), y = async () => {
            const {
              error: e = null,
              result: t
            } = await (0, m.coreScApiFetch)("marketing/update", {
              fetchOptions: {
                method: "POST"
              },
              pingBearer: a.pingBearer,
              query: {
                subscribe: !0
              }
            });
            if (e) se(0), _(ee.ERROR_GENERIC), k({
              event: "alert_error",
              text: "error message with preferences link",
              element_placement: "newsletter subscribe"
            });
            else {
              const e = t.status;
              se(e), _(ae[e]), 1 === e ? (k({
                event: "subscribe_news_success",
                element_placement: "newsletter subscribe"
              }), k({
                event: "alert_update",
                text: "user subscribed successfully",
                element_placement: "newsletter subscribe"
              })) : k({
                event: "alert_error",
                text: "error message with preferences link",
                element_placement: "newsletter subscribe"
              })
            }
          };
          return (0, d.useEffect)((() => {
            r(1 === p)
          }), [p]), (0, d.useEffect)((() => {
            (async () => {
              await (async () => {
                a.loggedIn ? await (async () => {
                  if (-1 === p) return;
                  se(-1), l(!0);
                  const {
                    error: t = null,
                    result: s
                  } = await (0, m.coreScApiFetch)("marketing/status", {
                    pingBearer: a.pingBearer
                  });
                  if (t) se(0), l(!1);
                  else {
                    const t = s.status;
                    se(t), a.isFromAuth && (t => {
                      if (e.navigate(".", {
                          replace: !0
                        }), a.loggedIn) switch (t) {
                        case 1:
                          a.isNewAccount ? (k({
                            event: "subscribe_news_success",
                            element_placement: "newsletter subscribe"
                          }), k({
                            event: "alert_update",
                            text: "new user subscribed during account creation",
                            element_placement: "newsletter subscribe"
                          }), _(ee.SUCCESS)) : (k({
                            event: "alert_update",
                            text: "alert - user already subscribed",
                            element_placement: "newsletter subscribe"
                          }), _(ee.ALREADY_SUBSCRIBED));
                          break;
                        case 4:
                          k({
                            event: "alert_error",
                            text: "error message with no preferences link",
                            element_placement: "newsletter subscribe"
                          }), _(ee.ERROR_GENERIC);
                          break;
                        default:
                          a.isNewAccount ? (_(h), k({
                            event: "alert_update",
                            text: "newly registered user - would you still like to subscribe?",
                            element_placement: "newsletter subscribe"
                          })) : y()
                      }
                    })(t), l(!1)
                  }
                })() : !1 === a.loggedIn && l(!1)
              })()
            })()
          }), [a.loggedIn]), {
            dialog: t,
            handleSubscribeButton: x,
            isButtonLoading: u,
            isLoading: c,
            isSubscribed: n,
            setShowDialog: o,
            showDialog: i,
            subscriptionStatus: p,
            urls: v,
            setDialog: s
          }
        };
      var re = t(84826);
      const ie = (0, re.g)((() => {
        const e = (0, m.useRockstarTokenPing)(),
          a = (0, O.A)(),
          [{
            iso: t
          }] = (0, V.getLocale)(),
          s = (0, m.toScLocaleString)(t),
          {
            login: n
          } = (0, m.getConfigForDomain)(),
          [r] = (0, l.useSearchParams)(),
          i = (0, l.useNavigate)(),
          o = (0, l.useLocation)(),
          {
            loggedIn: c,
            data: d,
            loading: u
          } = (0, g.useRockstarUser)(),
          p = "true" === r.get("marketing"),
          b = {
            lang: s,
            location: o.pathname,
            login: n,
            navigate: i,
            sc: a.sites.socialClub
          },
          k = {
            ...d,
            isFromAuth: p || !1,
            loggedIn: c,
            pingBearer: e,
            userLoading: u
          },
          v = ne(b, k),
          {
            dialog: _,
            setDialog: h,
            handleSubscribeButton: x,
            isButtonLoading: y,
            isLoading: N,
            isSubscribed: j,
            setShowDialog: w,
            showDialog: S,
            urls: C
          } = v;
        return (0, f.jsx)(f.Fragment, {
          children: (0, f.jsx)(J, {
            handleSubscribeButton: x,
            loggedIn: c || !1,
            loading: u || N,
            urls: C,
            isButtonLoading: y,
            setShowDialog: w,
            isSubscribed: j,
            showDialog: S,
            ...S && _ && {
              dialog: _
            }
          })
        })
      }));
      var oe = t(90635),
        ce = t(74445);
      const de = e => {
          let {
            layers: a = [],
            displayClass: t = "",
            style: s = {}
          } = e;
          const n = (0, N.useGenerateCdnSource)();
          if (!a || !a[0]?.image) return null;
          const r = a.map((e => ({
            ...e,
            props: {
              style: {
                ...e.style
              }
            },
            style: void 0,
            image: n(e?.image ?? null)
          })));
          return (0, f.jsx)(ce.y, {
            className: (0, m.classList)("rockstargames-sites-gta-gen9c1c689cf47230fa80bccc9b20515d4fa", t),
            layers: r,
            style: s
          })
        },
        le = "rockstargames-sites-gta-gen9ae8bfc3f9a519606a95144e64ee454b5",
        me = e => {
          let {
            minOffset: a = 0,
            maxOffset: t = 0,
            scrollAxis: s = "vertical",
            displayClass: n = "",
            style: r = {},
            children: i
          } = e;
          return "horizontal" === s ? (0, f.jsx)(ce.kQ, {
            x: [a, t],
            className: (0, m.classList)(le, n),
            styleOuter: r,
            children: i
          }) : (0, f.jsx)(ce.kQ, {
            y: [a, t],
            className: (0, m.classList)(le, n),
            styleOuter: r,
            children: i
          })
        },
        ge = e => {
          let {
            children: a
          } = e;
          const {
            parallaxController: t
          } = (0, ce.as)();
          return (0, d.useLayoutEffect)((() => {
            if (!t) return;
            const e = setInterval((() => {
              t.update()
            }), 500);
            return () => clearInterval(e)
          }), [t]), a
        },
        ue = {
          parallaxWrapper: "rockstargames-sites-gta-gen9e30c08cf0e042f7fc7bed0c23c0bfb31",
          large: "rockstargames-sites-gta-gen9e15ce487b25ba576b6e2b31df308098f",
          medium: "rockstargames-sites-gta-gen9dfdaa6f63f8e8bd10576fa2debcbc1fc",
          small: "rockstargames-sites-gta-gen9c32a973dbc862a43cc5d4a2aac19ed9b"
        },
        fe = e => {
          let {
            scrollAxis: a = "vertical",
            size: t = "",
            style: s = {},
            children: n
          } = e;
          return (0, f.jsx)(ce.zE, {
            scrollAxis: a,
            children: (0, f.jsx)(ge, {
              children: (0, f.jsx)("div", {
                className: (0, m.classList)(ue.parallaxWrapper, ue[t]),
                style: s,
                "data-context": "parallax-wrapper",
                children: n ? n.map(((e, t) => (0, d.cloneElement)(e, {
                  scrollAxis: a,
                  style: {
                    ...e?.props?.style,
                    zIndex: t
                  }
                }))) : (0, f.jsx)("div", {})
              })
            })
          })
        };
      var pe = t(70818),
        be = t(85239);
      const ke = {
          pillBtn: "rockstargames-sites-gta-gen9b12cdd53cc59cb42903d11d9fdceca7f",
          selected: "rockstargames-sites-gta-gen9e03b475da5ca3ded74e8c6dfd54fb476",
          promoModuleWrapper: "rockstargames-sites-gta-gen9de25220583bb9220882329a113f7a5e2",
          promoModule: "rockstargames-sites-gta-gen9eabbb5f24c40ef994b612515a0d0f356",
          promoModuleImage: "rockstargames-sites-gta-gen9b8584eedfbe5a91aaf72c40ec1d619a5",
          gradient: "rockstargames-sites-gta-gen9b78d3c0bdc9668bb3d318825467177ab",
          promoModuleContentContainer: "rockstargames-sites-gta-gen9ef7d758b0d1515fcebe6cb22271a4688",
          left: "rockstargames-sites-gta-gen9f4448b69feb648b8b910230c6f873dbd",
          right: "rockstargames-sites-gta-gen9b69bb02f1c00007e9b4eab8217e2f08e",
          promoModuleTextContent: "rockstargames-sites-gta-gen9b590150a7ac01a01a493b85b7ea5cf90"
        },
        ve = e => {
          let {
            backgroundColor: a,
            brands: t = [],
            description: s = "",
            ctaLabel: n,
            ctaLink: r = "https://rockstargames.com",
            gradient: i = !0,
            image: o,
            imageOrientation: c = "right",
            title: l = "",
            name: m = "",
            style: u,
            _memoq: p
          } = e;
          const [b, k] = (0, d.useState)(!1), {
            ref: v,
            inView: _
          } = (0, R.useInView)({
            threshold: .6
          }), {
            track: h
          } = (0, g.useGtmTrack)(), x = {
            ...u,
            "--promo-background": a ?? "var(--black-200)",
            "--promo-image": `url(${(0,N.useGetCdnSource)(o)??"var(--promo-background)"})`,
            "--promo-order": "left" === c ? "row" : "row-reverse"
          };
          return (0, d.useEffect)((() => {
            _ && !b && (h({
              event: "page_section_impression",
              element_placement: m?.toLowerCase()
            }), k(!0))
          }), [_]), (0, f.jsx)(f.Fragment, {
            children: (0, f.jsx)("div", {
              className: ke.promoModuleWrapper,
              children: (0, f.jsxs)(y.motion.div, {
                className: ke.promoModule,
                style: {
                  ...x
                },
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
                  ease: "easeIn",
                  duration: .4
                },
                ref: v,
                children: [(0, f.jsx)("div", {
                  className: [ke.promoModuleImage, i ? ke.gradient : "", "left" === c ? ke.left : ke.right].join(" ")
                }), (0, f.jsxs)("div", {
                  className: ke.promoModuleContentContainer,
                  children: [(0, f.jsx)(M, {
                    brands: t,
                    className: ke.promoModuleBrands
                  }), (0, f.jsxs)("div", {
                    className: ke.promoModuleTextContent,
                    children: [l && (0, f.jsx)("h3", {
                      children: l
                    }), s && (0, f.jsx)("p", {
                      children: s
                    })]
                  }), n && (0, f.jsx)(L.A, {
                    to: r,
                    text: n,
                    onClick: () => {
                      h({
                        event: "cta_learn",
                        element_placement: "promo module",
                        link_url: r,
                        text: p?.ctaLabel.toLowerCase()
                      })
                    }
                  })]
                })]
              })
            })
          })
        };
      var _e = t(75834),
        he = t(48524);
      const xe = {
          pillBtn: "rockstargames-sites-gta-gen9a0626acfa0dbdfdfd4f40b93134ac915",
          selected: "rockstargames-sites-gta-gen9de6015fb35bdee07192c1656ba4893e3",
          userVote: "rockstargames-sites-gta-gen9b32a59a8a63c53cc278266d726c9c5da",
          info: "rockstargames-sites-gta-gen9cee10f330f3ac6fba73fc06ac99bc951",
          voteContent: "rockstargames-sites-gta-gen9aad01ad44bcc6161ad363910e931515f",
          loggedOutButtons: "rockstargames-sites-gta-gen9c393b8f2d3b5b3e9204881ae6ff0fdc5",
          voteButtons: "rockstargames-sites-gta-gen9dda673f7473820d8884c017373c780f6",
          downVote: "rockstargames-sites-gta-gen9e23b13b0d0be49814d3770c10365c096",
          upVote: "rockstargames-sites-gta-gen9b3be682e82659d45f93c2fe63ccd73ba",
          voteButtonActive: "rockstargames-sites-gta-gen9f9e46f58f97d2b391aaf715861654cd7"
        },
        ye = e => {
          let {
            description: a,
            foreign_id: t = document.location.pathname,
            foreign_type: s = "url",
            title: n
          } = e;
          const {
            track: r
          } = (0, g.useGtmTrack)(), {
            loggedIn: i
          } = (0, g.useRockstarUser)(), {
            refetch: o
          } = (0, m.useQuery)(he.UserGetVote, {
            skip: !0
          }), [c] = (0, m.useMutation)(he.UserCastVote), [l, u] = (0, d.useState)(null), p = (0, d.useCallback)((async e => {
            r({
              event: "cta_" + (e ? "like" : "dislike"),
              text: `${s} ${t}`
            });
            const a = {
                foreign_id: t,
                foreign_type: s,
                vote: e
              },
              n = await c({
                variables: a
              });
            u(n?.data?.userCastVote?.vote ?? null)
          }), [t, s]);
          return (0, d.useEffect)((() => {
            (async () => {
              if (!i || !t || !s) return;
              const e = await o({
                foreign_id: t,
                foreign_type: s
              });
              u(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [t, s, i]), (0, f.jsx)("div", {
            className: xe.userVote,
            children: (0, f.jsxs)("div", {
              className: xe.voteContent,
              children: [(0, f.jsxs)("div", {
                className: xe.info,
                children: [(0, f.jsx)("h3", {
                  children: n
                }), (0, f.jsx)("p", {
                  children: a
                })]
              }), (0, f.jsxs)("div", {
                className: [xe.voteButtons, i ? "" : xe.loggedOutButtons].join(" "),
                children: [(0, f.jsx)("button", {
                  onClick: () => p(!0),
                  className: [xe.upVote, l ? xe.voteButtonActive : ""].join(" "),
                  type: "button",
                  "aria-label": "Vote up"
                }), (0, f.jsx)("button", {
                  className: [xe.downVote, !1 === l ? xe.voteButtonActive : ""].join(" "),
                  onClick: () => p(!1),
                  type: "button",
                  "aria-label": "Vote down"
                })]
              })]
            })
          })
        };
      var Ne = t(51243),
        je = t(32671),
        we = t(15310),
        Se = t.n(we);
      const Ce = (0, d.forwardRef)(((e, a) => {
        const {
          threshold: t,
          callback: s,
          children: n,
          requireUser: r
        } = e, {
          track: i
        } = (0, g.useGtmTrack)(r), [o, c] = (0, d.useState)(a?.current);
        return (0, d.useEffect)((() => {
          a?.current && c(a.current)
        }), [a]), ((e, a, t) => {
          const [s, n] = (0, d.useState)({
            scrollDepths: e,
            scrollY: 0
          }), {
            scrollDepths: r,
            scrollY: i
          } = s;
          (0, d.useEffect)((() => {
            "undefined" != typeof window && 0 !== window.pageYOffset && n((e => ({
              ...e,
              scrollY: window.pageYOffset
            })))
          }), []), (0, d.useEffect)((() => {
            n({
              scrollDepths: e,
              scrollY: 0
            })
          }), [window.location.pathname]);
          const o = (0, d.useCallback)((() => {
            const e = document.documentElement,
              i = document.body,
              c = t?.scrollTop || e.scrollTop || i.scrollTop,
              d = t?.scrollHeight || e.scrollHeight || i.scrollHeight,
              {
                clientHeight: l
              } = e,
              m = c / (d - l) * 100;
            if (r) {
              const e = Math.min(...r, d);
              if (m >= e) {
                const s = r.filter((a => a !== e));
                0 === s.length && (t ?? window).removeEventListener("scroll", o), a && a({
                  scrollY: e,
                  scrollPercent: m,
                  remainingDepths: s
                }), n({
                  scrollY: e,
                  scrollDepths: s
                })
              }
            } else n({
              ...s,
              scrollY: m
            })
          }), [r, t, a]);
          (0, d.useEffect)((() => {
            if ("undefined" == typeof window) return;
            const e = t ?? window;
            return e.addEventListener("scroll", o), () => e.removeEventListener("scroll", o)
          }), [o])
        })(t, (e => {
          let {
            scrollY: a
          } = e;
          i({
            event: "page_scroll",
            scroll_depth: a
          }), "function" == typeof s && s(a)
        }), o), n
      }));
      Ce.displayName = "ScrollTracker";
      const Te = Ce,
        Ee = e => {
          let {
            text: a,
            style: t
          } = e;
          return (0, f.jsx)("div", {
            className: "rockstargames-sites-gta-gen9c08a001134624b9ceb275eae413bfd3d",
            style: t,
            children: a
          })
        },
        Me = e => {
          let {
            hasTag: a = !1,
            tag: t = null,
            tagStyle: s = null,
            badges: n = []
          } = e;
          return a && t ? (0, f.jsx)("div", {
            className: "rockstargames-sites-gta-gen9ceb75d3391774f84e920e955d7a6853f",
            "data-tag-style": s,
            children: t
          }) : a && n && n?.length > 0 ? (0, f.jsx)("div", {
            className: "rockstargames-sites-gta-gen9f83b84453472e937d57011680a564ec6",
            children: n.map((e => (0, f.jsx)(Ee, {
              ...e
            }, e?.text)))
          }) : null
        },
        Le = {
          textOverlay: "rockstargames-sites-gta-gen9ca83475001f5d512b9ffcd89f1117561",
          content: "rockstargames-sites-gta-gen9f418ed13cf5cbe3f701ce0d872b50704"
        },
        {
          LiteMotion: Ie,
          Animations: Pe
        } = je,
        {
          variants: ze,
          transitions: Ae
        } = Pe,
        De = e => {
          let {
            title: a,
            hasTag: t,
            tag: s,
            hasDescription: n,
            description: r,
            fadesOut: i = !1,
            badges: o
          } = e;
          return (0, f.jsx)(Ie, {
            initial: ze.fade.out.initial,
            animate: {
              opacity: i ? 0 : 1
            },
            transition: Ae.fade,
            className: Le.textOverlay,
            children: (0, f.jsxs)("div", {
              className: Le.content,
              children: [(0, f.jsx)(Me, {
                hasTag: t,
                tag: s,
                badges: o?.filter((e => e?.isPrimary))
              }), (0, f.jsx)("h3", {
                children: a
              }), n && r && (0, f.jsx)("div", {
                className: Le.description,
                children: r
              })]
            })
          })
        },
        $e = e => {
          let {
            title: a,
            showTitle: t = !0,
            showBackground: s = !0,
            tag: n,
            tagStyle: r,
            discountPrice: i,
            originalPrice: o,
            setPricingContainerHeight: c = null
          } = e;
          const l = (0, d.createRef)();
          return (0, d.useEffect)((() => {
            const e = () => {
              l.current && null !== c && c(l.current.clientHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [l]), (0, f.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9e419c6cd31abd635e742e635dcfd8316",
            ref: l,
            "data-show-background": s,
            children: [t && (0, f.jsx)("span", {
              className: "rockstargames-sites-gta-gen9bf415d56280a8768ee0c26e116865d5b",
              children: a
            }), (0, f.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9d98da8fc9dce6d600db165351d3a3fed",
              children: [(0, f.jsx)("span", {
                className: "rockstargames-sites-gta-gen9a5717338db21efc7eb765011d68ea73d",
                "data-tag-style": r || "free",
                children: n
              }), (0, f.jsx)("span", {
                className: "rockstargames-sites-gta-gen9cdaaa9655747e4d129d6c22080bdd33d",
                children: i
              }), (0, f.jsx)("span", {
                className: "rockstargames-sites-gta-gen9af3db4eb6d14c1f4ee5689b4e6386715",
                children: o
              })]
            })]
          })
        };
      var Be = t(80391),
        Ve = t(28985),
        Oe = t(47240),
        Re = t(81715),
        Fe = t(49429),
        Ge = t(32903),
        He = t(85719),
        Ue = t(11008);
      const We = {
          ps5: Oe,
          ps4: Ve,
          ps: Be,
          xboxone: Fe,
          xbox: Ge,
          xboxseriesxs: Re,
          nintendoswitch: Ue,
          pc: He,
          googleplay: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2ef574ea2aa502447d579267ff37e251.svg",
          applestore: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c6affc8b37ec4c75486ab6d12b2de395.svg"
        },
        qe = e => {
          let {
            title: a,
            showTitle: t = !0,
            showBackground: s = !0,
            platformOptions: n,
            setPricingContainerHeight: r = () => {},
            expandedView: i
          } = e;
          const o = (0, d.createRef)();
          return (0, d.useEffect)((() => {
            const e = () => {
              o.current && null !== r && r(o.current.clientHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [o]), (0, f.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9ee81f54f31ab2cd10a67313b9689bf96",
            ref: o,
            "data-show-background": s,
            "data-show-platforms": !i,
            children: [t && (0, f.jsx)("span", {
              className: "rockstargames-sites-gta-gen9d4ab460f0a204a588d4d4dd0a110ca36",
              children: a
            }), n?.platformsAndLinks && (0, f.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9afdc85bfd80cae52d4c1b422f1294962",
              children: [(0, f.jsx)(Me, {
                hasTag: n?._memoq?.platformTag,
                tag: n?._memoq?.platformTag,
                tagStyle: n?._memoq?.platformTagStyle
              }), (0, f.jsx)("div", {
                className: "rockstargames-sites-gta-gen9c252412353007d9f02f19a754430b14b",
                children: n.platformsAndLinks.map((e => {
                  let {
                    platform: a,
                    buttonText: t
                  } = e;
                  return (0, f.jsx)("img", {
                    className: "rockstargames-sites-gta-gen9ff5cde8853312ffb892472d100c684cd",
                    alt: t,
                    src: We[a]
                  }, a)
                }))
              })]
            })]
          })
        },
        Ye = e => {
          let {
            textOverlayProps: a,
            title: t,
            size: s,
            expandedView: n = !1,
            children: r,
            pricingOptions: i,
            setPricingContainerHeight: o,
            isCoverCard: c = !1,
            platformOptions: l
          } = e;
          const [m] = (e => {
            let {
              hasTextOverlay: a,
              tag: t,
              collapsedHasTag: s,
              description: n,
              collapsedHasDescription: r,
              size: i,
              title: o,
              expandedView: c,
              badges: l
            } = e;
            const [m, g] = (0, d.useState)(null), u = (0, d.useMemo)((() => {
              if (!a) return null;
              const e = "sm" !== i && r;
              return (0, f.jsx)(De, {
                title: o,
                hasTag: s,
                tag: t,
                hasDescription: e,
                description: n,
                fadesOut: c,
                badges: l
              })
            }), [a, t, s, n, r, i, o, c, l]);
            return (0, d.useEffect)((() => {
              g(u)
            }), [u]), [m, g]
          })({
            ...a,
            size: s,
            title: t,
            expandedView: n
          }), g = void 0 !== i?.hasPricingOptions || null !== l;
          return (0, f.jsxs)("header", {
            className: "rockstargames-sites-gta-gen9cab36c59e0808c47183ef125bd12c511",
            "data-is-covercard": c,
            "data-expanded-view": n,
            children: [d.Children.map(r, (e => (0, d.cloneElement)(e, {
              title: t,
              size: s,
              expandedView: n
            }))), m, g && (0, f.jsxs)(f.Fragment, {
              children: [!0 === l?.hasPlatformOptions && (0, f.jsx)(qe, {
                title: t,
                platformOptions: l,
                pricingOptions: i,
                setPricingContainerHeight: o,
                expandedView: n
              }), !0 === i?.hasPricingOptions && (0, f.jsx)($e, {
                title: t,
                tag: i?._memoq?.tag,
                tagStyle: i?._memoq?.tagStyle || "free",
                discountPrice: i?._memoq?.discountPrice,
                originalPrice: i?._memoq?.originalPrice,
                setPricingContainerHeight: o
              })]
            })]
          })
        },
        {
          LiteMotion: Ke,
          Animations: Qe
        } = je,
        {
          transitions: Xe
        } = Qe,
        Ze = e => {
          let {
            components: a,
            payload: t,
            prod: s,
            size: n,
            title: r,
            initial: i = "initial",
            animate: o = "animate",
            variants: c,
            type: l = null,
            context: g = null,
            textOverlayProps: u,
            className: p,
            children: b,
            theme: k = "none",
            id: v,
            pricingOptions: _,
            pricingContainerHeight: h,
            isCoverCard: x,
            platformOptions: y,
            isProductCard: j = !1
          } = e;
          const w = (0, d.useRef)(),
            S = (0, d.useRef)(),
            {
              tag: C,
              expandedHasTag: T,
              badges: E
            } = u;
          $().set(t, "meta.prod", s);
          const M = b?.props?.images.length > 0;
          let L = (0, f.jsx)("h1", {
            children: r
          });
          return x && (L = null), (0, d.useEffect)((() => {
            const e = () => {
              w.current && w.current.scrollTop > 0 && window.innerWidth >= window.innerHeight && (w.current.scrollTop = 0)
            };
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), []), (0, f.jsx)(m.DataLayerProvider, {
            card_id: v,
            card_name: r?.toLowerCase(),
            children: (0, f.jsx)(Te, {
              threshold: [25, 50, 75, 90, 100],
              trackRef: "long" === l ? w : S,
              children: (0, f.jsxs)(Ke, {
                ref: w,
                initial: i,
                animate: o,
                variants: c.expanded,
                transition: Xe.cardOpen,
                className: (0, m.classList)("rockstargames-sites-gta-gen9c2289ce1bf0de6ad8a4a8ce7e90a4b66", p),
                "data-type": l,
                "data-size": n,
                "data-product": j,
                "data-covercard": x || !1,
                "data-context": g,
                style: {
                  "--product-card-pricing-info-height": `${h||0}px`
                },
                children: [M && (0, f.jsx)(Ye, {
                  size: n,
                  title: r,
                  textOverlayProps: u,
                  expandedView: !0,
                  pricingOptions: _,
                  platformOptions: y,
                  isCoverCard: x,
                  children: b
                }), (0, f.jsxs)(Ke, {
                  ref: S,
                  className: "rockstargames-sites-gta-gen9e461568802b56e8c21b8b82d9c3a1fb4",
                  variants: c.expandedContents,
                  transition: Xe.afterCardOpen,
                  "data-theme": k,
                  children: [(0, f.jsxs)("div", {
                    className: "rockstargames-sites-gta-gen9c4c35e83dbf962aa44c3f94b313361b3",
                    children: [(0, f.jsx)(Me, {
                      hasTag: T,
                      tag: C,
                      badges: E
                    }), L, j && (0, f.jsxs)(f.Fragment, {
                      children: [!0 === y?.hasPlatformOptions && (0, f.jsx)("div", {
                        className: "rockstargames-sites-gta-gen9cd635452588eda421bdea19f00660efc",
                        children: (0, f.jsx)(Me, {
                          hasTag: y?.hasPlatformOptions,
                          tag: y?._memoq?.platformTag,
                          tagStyle: y?._memoq?.platformTagStyle
                        })
                      }), !0 === _?.hasPricingOptions && (0, f.jsx)($e, {
                        title: r,
                        showTitle: !1,
                        showBackground: !1,
                        tag: _?._memoq?.tag,
                        tagStyle: _?.tagStyle || "free",
                        discountPrice: _?._memoq?.discountPrice,
                        originalPrice: _?._memoq?.originalPrice
                      })]
                    })]
                  }), (0, f.jsx)(N.TinaParser, {
                    components: a,
                    tina: {
                      payload: t
                    }
                  })]
                })]
              })
            })
          })
        };
      var Je = t(91644);
      const ea = (0, V.defineMessages)({
          card_label_platforms: {
            id: "card_label_platforms",
            defaultMessage: "{title} on {platformList}"
          },
          card_label_tag: {
            id: "card_label_tag",
            defaultMessage: "{tag} {title}"
          },
          card_label_platforms_tag: {
            id: "card_label_platforms_tag",
            defaultMessage: "{tag} {title} on {platformList}"
          },
          card_learn_more: {
            id: "card_learn_more",
            defaultMessage: "Learn More"
          },
          events_deck_next_aria_label: {
            id: "events_deck_next_aria_label",
            defaultMessage: "Next Page of Events"
          },
          events_deck_previous_aria_label: {
            id: "events_deck_previous_aria_label",
            defaultMessage: "Previous Page of Events"
          },
          events_deck_modal_next_aria_label: {
            id: "events_deck_modal_next_aria_label",
            defaultMessage: "Next event"
          },
          events_deck_modal_previous_aria_label: {
            id: "events_deck_modal_previous_aria_label",
            defaultMessage: "Previous event"
          },
          events_deck_modal_close_label: {
            id: "events_deck_modal_close_label",
            defaultMessage: "Close"
          },
          events_deck_paging_label: {
            id: "events_deck_paging_label",
            defaultMessage: "On page {currentPage} of {totalPages}"
          },
          events_deck_modal_group_label: {
            id: "events_deck_modal_group_label",
            defaultMessage: "Event Details"
          }
        }),
        aa = JSON.parse('{"de-DE":{"card_label_platforms":"{title} auf {platformList}","card_label_platforms_tag":"{tag} {title} auf {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Mehr erfahren","events_deck_modal_close_label":"Schließen","events_deck_modal_group_label":"Eventdetails","events_deck_modal_next_aria_label":"Nächstes Event","events_deck_modal_previous_aria_label":"Vorheriges Event","events_deck_next_aria_label":"Nächste Seite von Events","events_deck_paging_label":"Auf Seite {currentPage} von {totalPages}","events_deck_previous_aria_label":"Vorherige Seite von Events"},"en-US":{"card_label_platforms":"{title} on {platformList}","card_label_platforms_tag":"{tag} {title} on {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Learn More","events_deck_modal_close_label":"Close","events_deck_modal_group_label":"Event Details","events_deck_modal_next_aria_label":"Next event","events_deck_modal_previous_aria_label":"Previous event","events_deck_next_aria_label":"Next Page of Events","events_deck_paging_label":"On page {currentPage} of {totalPages}","events_deck_previous_aria_label":"Previous Page of Events"},"es-ES":{"card_label_platforms":"{title} para {platformList}","card_label_platforms_tag":"{tag} {title} para {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Más información","events_deck_modal_close_label":"Cerrar","events_deck_modal_group_label":"Detalles del evento","events_deck_modal_next_aria_label":"Evento siguiente","events_deck_modal_previous_aria_label":"Evento anterior","events_deck_next_aria_label":"Página siguiente de eventos","events_deck_paging_label":"Página {currentPage} de {totalPages}","events_deck_previous_aria_label":"Página anterior de eventos"},"es-MX":{"card_label_platforms":"{title} en {platformList}","card_label_platforms_tag":"{tag} {title} en {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Más información","events_deck_modal_close_label":"Cerrar","events_deck_modal_group_label":"Detalles del evento","events_deck_modal_next_aria_label":"Evento siguiente","events_deck_modal_previous_aria_label":"Evento anterior","events_deck_next_aria_label":"Página de eventos siguiente","events_deck_paging_label":"Página {currentPage} de {totalPages}","events_deck_previous_aria_label":"Página de eventos anterior"},"fr-FR":{"card_label_platforms":"{title} sur {platformList}","card_label_platforms_tag":"{tag} {title} sur {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"En savoir plus","events_deck_modal_close_label":"Fermer","events_deck_modal_group_label":"Détails de l’évènement","events_deck_modal_next_aria_label":"Évènement suivant","events_deck_modal_previous_aria_label":"Évènement précédent","events_deck_next_aria_label":"Page suivante des évènements","events_deck_paging_label":"Page {currentPage} sur {totalPages}","events_deck_previous_aria_label":"Page précédente des évènements"},"it-IT":{"card_label_platforms":"{title} su {platformList}","card_label_platforms_tag":"{tag} {title} su {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Altre informazioni","events_deck_modal_close_label":"Chiudi","events_deck_modal_group_label":"Dettagli evento","events_deck_modal_next_aria_label":"Evento successivo","events_deck_modal_previous_aria_label":"Evento precedente","events_deck_next_aria_label":"Pagina degli eventi successiva","events_deck_paging_label":"Pagina {currentPage} di {totalPages}","events_deck_previous_aria_label":"Pagina degli eventi precedente"},"ja-JP":{"card_label_platforms":"{platformList}版{title}","card_label_platforms_tag":"{tag} {platformList}版 {title}","card_label_tag":"{tag} {title}","card_learn_more":"詳細を閲覧","events_deck_modal_close_label":"閉じる","events_deck_modal_group_label":"イベントの詳細","events_deck_modal_next_aria_label":"次のイベント","events_deck_modal_previous_aria_label":"前のイベント","events_deck_next_aria_label":"次のイベントのページ","events_deck_paging_label":"{currentPage}/{totalPages}ページ","events_deck_previous_aria_label":"前のイベントのページ"},"ko-KR":{"card_label_platforms":"{platformList}용 {title}","card_label_platforms_tag":"{tag} {platformList}용 {title}","card_label_tag":"{tag} {title}","card_learn_more":"더 알아보기","events_deck_modal_close_label":"닫기","events_deck_modal_group_label":"이벤트 세부 정보","events_deck_modal_next_aria_label":"다음 이벤트","events_deck_modal_previous_aria_label":"이전 이벤트","events_deck_next_aria_label":"다음 이벤트 페이지","events_deck_paging_label":"{currentPage}/{totalPages} 페이지","events_deck_previous_aria_label":"이전 이벤트 페이지"},"pl-PL":{"card_label_platforms":"{title} na {platformList}","card_label_platforms_tag":"{tag} {title} na {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Dowiedz się więcej","events_deck_modal_close_label":"Zamknij","events_deck_modal_group_label":"Szczegóły wydarzenia","events_deck_modal_next_aria_label":"Następne wydarzenie","events_deck_modal_previous_aria_label":"Poprzednie wydarzenie","events_deck_next_aria_label":"Następna strona wydarzeń","events_deck_paging_label":"Strona {currentPage} z {totalPages}","events_deck_previous_aria_label":"Poprzednia strona wydarzeń"},"pt-BR":{"card_label_platforms":"{title} para {platformList}","card_label_platforms_tag":"{tag} {title} para {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Saiba mais","events_deck_modal_close_label":"Fechar","events_deck_modal_group_label":"Detalhes do evento","events_deck_modal_next_aria_label":"Próximo evento","events_deck_modal_previous_aria_label":"Evento anterior","events_deck_next_aria_label":"Próxima página de eventos","events_deck_paging_label":"Página {currentPage} de {totalPages}","events_deck_previous_aria_label":"Página anterior de eventos"},"ru-RU":{"card_label_platforms":"{title} на {platformList}","card_label_platforms_tag":"{title} ({tag}) на {platformList}","card_label_tag":"{title} ({tag})","card_learn_more":"Подробности","events_deck_modal_close_label":"Закрыть","events_deck_modal_group_label":"Описание события","events_deck_modal_next_aria_label":"Следующее событие","events_deck_modal_previous_aria_label":"Предыдущее событие","events_deck_next_aria_label":"Следующая страница с событиями","events_deck_paging_label":"На {currentPage}-й странице из {totalPages}","events_deck_previous_aria_label":"Предыдущая страница с событиями"},"zh-CN":{"card_label_platforms":"{platformList} 上的 {title}","card_label_platforms_tag":"{tag} {platformList} 上的 {title}","card_label_tag":"{tag} {title}","card_learn_more":"了解更多","events_deck_modal_close_label":"关闭","events_deck_modal_group_label":"活动细节","events_deck_modal_next_aria_label":"下一个活动","events_deck_modal_previous_aria_label":"上一个活动","events_deck_next_aria_label":"下一页活动","events_deck_paging_label":"在第 {currentPage} 页（共 {totalPages} 页）","events_deck_previous_aria_label":"上一页活动"},"zh-TW":{"card_label_platforms":"{platformList} 上的 {title}","card_label_platforms_tag":"{tag} {platformList} 上的 {title}","card_label_tag":"{tag} {title}","card_learn_more":"了解更多","events_deck_modal_close_label":"關閉","events_deck_modal_group_label":"活動詳情","events_deck_modal_next_aria_label":"下一個活動","events_deck_modal_previous_aria_label":"上一個活動","events_deck_next_aria_label":"下一頁活動","events_deck_paging_label":"第 {currentPage} 頁（共 {totalPages} 頁）","events_deck_previous_aria_label":"上一頁活動"}}'),
        ta = (0, V.withIntl)((e => {
          let {
            id: a,
            position: t,
            title: s,
            size: n = "md",
            sectionTitle: r = "",
            expandedType: i = null,
            modalProps: o = {
              content: null,
              className: "",
              contentClassName: ""
            },
            className: c,
            children: m,
            isProductCard: u,
            cardIds: p = null,
            theme: b = "none",
            isCoverCard: k,
            platformOptions: v
          } = e;
          const {
            formatMessage: _,
            formatList: h
          } = (0, V.useIntl)(), [x, y] = (0, l.useSearchParams)(), N = (0, d.useRef)(null), [, j] = (0, Je.h)(), {
            track: w
          } = (0, g.useGtmTrack)(), [S, C] = (0, d.useState)(!1), T = window.location.href.includes("cms5"), E = () => {
            C(!1), j(null), T || y({}), w({
              event: "trackPageview"
            })
          }, M = () => {
            if (!o?.content || !N.current || !i || "linkout" === i) return;
            const e = N.current,
              r = window.getComputedStyle(e),
              c = parseInt(r.getPropertyValue("width"), 10),
              d = parseInt(r.getPropertyValue("height"), 10),
              l = e.getBoundingClientRect(),
              {
                content: m,
                className: g,
                contentClassName: u
              } = o,
              f = "fob" === n ? "fob" : "default";
            j({
              content: m,
              onClose: E,
              rect: l,
              width: c,
              height: d,
              className: g,
              contentClassName: u,
              fadeIn: !1,
              cardIds: p,
              theme: b,
              activeId: a,
              gtm: {
                card_id: a,
                card_name: s?.toLowerCase(),
                position: t
              },
              aspectRatio: f,
              cardDimensions: {
                size: n,
                type: i
              }
            }), w({
              event: "trackPageview",
              link_url: window.location.href,
              card_id: a,
              card_name: s?.toLowerCase(),
              position: t
            })
          };
          (0, d.useEffect)((() => {
            S && M()
          }), [S]), (0, d.useEffect)((() => {
            C(x.get("info") === a)
          }), [x.get("info"), a]);
          const L = (0, d.useMemo)((() => {
            const e = v?._memoq?.platformTag || "";
            if (v?.platformsAndLinks?.length > 0) {
              const a = v?.platformsAndLinks?.map((e => {
                  let {
                    buttonText: a
                  } = e;
                  return a
                })),
                t = h(a, {
                  type: "conjunction"
                });
              return e ? _(ea.card_label_platforms_tag, {
                tag: e,
                title: s,
                platformList: t
              }) : _(ea.card_label_platforms, {
                title: s,
                platformList: t
              })
            }
            return e ? _(ea.card_label_tag, {
              tag: e,
              title: s
            }) : s
          }), [v, s]);
          return k || "linkout" === i ? (0, f.jsx)("div", {
            ref: N,
            className: c,
            "data-size": n,
            "data-type": i,
            "data-product": u,
            role: "button",
            "aria-label": L,
            children: m
          }) : (0, f.jsx)("button", {
            ref: N,
            onClick: e => {
              e.preventDefault(), e.stopPropagation(), a ? y({
                info: a
              }) : M(), w({
                event: "card_click",
                element_placement: r?.toLowerCase(),
                position: t,
                card_id: a,
                card_name: s?.toLowerCase(),
                link_url: window.location.href
              })
            },
            className: c,
            "data-size": n,
            "data-type": i,
            "data-product": u,
            tabIndex: "linkout" !== i ? 0 : -1,
            "aria-label": L,
            type: "button",
            children: m
          })
        }), aa),
        sa = {
          pillBtn: "rockstargames-sites-gta-gen9f3a91bbe53323354bc84e26197787c03",
          selected: "rockstargames-sites-gta-gen9a03c60979e8d6882b5b8ce0f0301b7e9",
          card: "rockstargames-sites-gta-gen9c49a3d41905733d6aa83dcd3463df7d5",
          content: "rockstargames-sites-gta-gen9b41eac21ba69f02fe26f8dafa8433207",
          expandedContent: "rockstargames-sites-gta-gen9fea5414b5f55420cfcd6c6ee12a393b3",
          text: "rockstargames-sites-gta-gen9e961062768d06292ff6cb598ae1c5e69",
          imageHolder: "rockstargames-sites-gta-gen9d893e3eab0a5754bb28882ceb8de6b59",
          coverCardWrapper: "rockstargames-sites-gta-gen9dd482c08ed9fdc5cef20f63dd6720e13"
        },
        na = e => {
          let {
            payload: a,
            prod: t,
            images: s,
            size: n,
            title: r,
            initial: i,
            animate: o,
            variants: l,
            id: m,
            position: g,
            sectionTitle: u,
            expandedType: p,
            context: b,
            children: k,
            expandedCardContents: v,
            textOverlayProps: _ = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            deckProps: h = {},
            modalProps: x = [],
            theme: y,
            cardIds: j,
            pricingOptions: w,
            platformOptions: S = null,
            pricingContainerHeight: C,
            isCoverCard: T = !1,
            isProductCard: E = !1
          } = e;
          const M = (0, N.useTinaComponents)(),
            L = (0, d.useMemo)((() => ({
              ...M,
              HTMLElement: B,
              ImageWithBadge: be.A,
              Carousel: c.A,
              GroupOfItems: Se()
            })), [M]),
            I = (0, d.useMemo)((() => (0, f.jsx)(Ze, {
              type: p,
              components: L,
              payload: a,
              prod: t,
              images: s,
              size: n,
              title: r,
              context: b,
              textOverlayProps: _,
              initial: i,
              animate: o,
              variants: l,
              theme: y,
              cardIds: j,
              pricingOptions: w,
              id: m,
              pricingContainerHeight: C,
              isCoverCard: T,
              platformOptions: S,
              isProductCard: E,
              children: v
            })), [p, s, t, n, r, _, v, i, o, l, L, a, E]),
            P = [sa.card, T ? sa.coverCardWrapper : ""].join(" ");
          return (0, f.jsx)(ta, {
            id: m,
            position: g,
            sectionTitle: u,
            title: r,
            size: n,
            expandedType: p,
            images: s,
            deckProps: h,
            modalProps: {
              content: I,
              ...x
            },
            className: P,
            isProductCard: E,
            cardIds: j,
            theme: y,
            isCoverCard: T,
            platformOptions: S,
            children: k
          })
        },
        ra = {
          layeredImageFrame: "rockstargames-sites-gta-gen9cfc6074d8b476125230142c79438a249",
          layered: "rockstargames-sites-gta-gen9a7a1d10cda2bf3de7960b4fadf2f7a4e",
          foreground: "rockstargames-sites-gta-gen9d858cc29f8933cc96ea1b20f734c1796",
          imageMask: "rockstargames-sites-gta-gen9d656190323ba10afc580adbf82303a8b",
          logo: "rockstargames-sites-gta-gen9ca32213b5f72baeb68ba9a21ee8a295b",
          "sm-horizontal": "rockstargames-sites-gta-gen9f5ab2fbb234fc0631784968dc2b1da75"
        },
        {
          LiteMotion: ia,
          Animations: oa
        } = je,
        {
          getVariant: ca,
          variants: da,
          transitions: la
        } = oa,
        ma = e => {
          let {
            image: a,
            i: t,
            prod: s
          } = e;
          const {
            alt: n,
            src: r
          } = (0, h.S1)({
            ...a,
            prod: s
          });
          return (0, f.jsx)("img", {
            src: r.mobile,
            alt: n ?? "",
            style: {
              "--z-index": t
            }
          })
        },
        ga = e => {
          let {
            images: a = [],
            className: t = "",
            prod: s = !1,
            expandedView: n = !1,
            style: r = {}
          } = e;
          const [i, o] = (0, d.useState)({
            height: window.innerHeight,
            width: window.innerWidth
          });
          (0, d.useEffect)((() => {
            function e() {
              o({
                height: window.innerHeight,
                width: window.innerWidth
              })
            }
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [i]);
          const c = (0, d.useMemo)((() => a?.length && 0 !== a.length ? a.map((e => (0, f.jsx)(ia, {
            className: (0, m.classList)(ra[e?.specialClass] ?? ra.imageMask, ra[e?.sizeClass], e?.className),
            variants: ca(e?.specialClass ?? "imageMask", n ? "expanded" : "collapsed"),
            initial: "initial",
            animate: "animate",
            transition: la.cardOpen,
            children: (0, f.jsx)(ma, {
              image: e,
              prod: s
            })
          }, e.key))) : null), [a, i, n, s]);
          return (0, f.jsx)(ia, {
            className: (0, m.classList)(ra.layeredImageFrame, a.length > 1 ? ra.layered : ra.flat, t),
            style: r,
            initial: da.fade.in.initial,
            animate: da.fade.in.animate,
            transition: la.instantFade,
            "data-expanded-view": n,
            children: c
          })
        },
        ua = e => {
          let {
            expandedType: a,
            to: t,
            children: s,
            style: n,
            sectionTitle: r = "",
            id: i,
            cardTitle: o,
            position: c
          } = e;
          const {
            track: l
          } = (0, g.useGtmTrack)(), m = (0, d.useCallback)((() => {
            l({
              event: "card_click",
              link_url: t,
              card_id: i,
              card_name: o,
              element_placement: r.toLowerCase(),
              position: c
            })
          }), [r, t, i, o, r, c]);
          return "linkout" === a && t ? (0, f.jsx)(G.A, {
            to: t,
            style: n,
            target: t?.startsWith("http") ? "_blank" : "_self",
            onClick: m,
            children: s
          }) : s
        },
        fa = {
          pillBtn: "rockstargames-sites-gta-gen9ddaada7b150b18de710c9f77384c6537",
          selected: "rockstargames-sites-gta-gen9b4fbb4006fc27b899dac5e522ef574e3",
          customModalContent: "rockstargames-sites-gta-gen9fc96cdfdaeb2ad81b1b409fcb233657e",
          content: "rockstargames-sites-gta-gen9c65ddebc8ee2173143d87e1079f2455a"
        },
        {
          variants: pa
        } = je.Animations,
        ba = e => {
          let {
            id: a,
            title: t,
            content: s,
            size: n = "md",
            expandedType: r = "short",
            textOverlayProps: i = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            images: o = [],
            deckProps: c = {},
            to: l = null,
            tina: m = {},
            position: g = 0,
            sectionTitle: u = "",
            theme: p,
            pricingOptions: b,
            cardIds: k,
            platformOptions: v = null
          } = e;
          const _ = (0, N.useTinaPayload)(),
            h = m?.payload?.meta?.cdn ?? _?.meta?.prod ?? !1,
            [x, y] = (0, d.useState)(c?.size ?? n),
            [j, w] = (0, d.useState)(0),
            S = void 0 !== b?.hasPricingOptions || void 0 !== v?.hasPlatformOptions;
          return (0, d.useEffect)((() => {
            y(c?.size ?? n)
          }), [c?.size, n]), (0, f.jsx)(na, {
            id: a,
            title: t,
            size: x,
            expandedType: r,
            images: o,
            deckProps: c,
            prod: h,
            payload: {
              content: s,
              meta: {}
            },
            variants: pa.plainCard,
            textOverlayProps: i,
            modalProps: {
              className: fa.customModal,
              contentClassName: fa.customModalContent
            },
            expandedCardContents: (0, f.jsx)(ga, {
              images: o,
              prod: h,
              expandedView: !0
            }),
            position: g,
            sectionTitle: u,
            theme: p,
            cardIds: k,
            pricingOptions: b,
            platformOptions: v,
            pricingContainerHeight: j,
            isProductCard: S,
            children: (0, f.jsx)(ua, {
              expandedType: r,
              to: l,
              sectionTitle: u,
              id: a,
              cardTitle: t,
              position: g,
              children: (0, f.jsx)("div", {
                className: fa.content,
                "data-product": S,
                children: (0, f.jsx)(Ye, {
                  title: t,
                  size: x,
                  textOverlayProps: i,
                  pricingOptions: b,
                  platformOptions: v,
                  setPricingContainerHeight: w,
                  children: (0, f.jsx)(ga, {
                    images: o,
                    prod: h
                  })
                })
              })
            })
          })
        },
        ka = (0, V.defineMessages)({
          components_track_list_title: {
            id: "components_track_list_title",
            defaultMessage: "Tracklist"
          }
        }),
        va = {
          bodySmall: "rockstargames-sites-gta-gen9deed018133fca0148d0bf72fbe95bcd6"
        },
        _a = e => {
          let {
            track: a,
            artist: t
          } = e;
          return (0, f.jsxs)("div", {
            className: va.track,
            children: [(0, f.jsx)("p", {
              children: a
            }), (0, f.jsx)("p", {
              className: va.bodySmall,
              children: t
            })]
          })
        },
        ha = (0, re.g)((e => {
          let {
            content: a = []
          } = e;
          return (0, f.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9e2587587f57e43c9ca90d1e16e4a6ca6",
            children: [(0, f.jsx)("h4", {
              className: "rockstargames-sites-gta-gen9ef167f82b058360b2b6a3466ca73d7de",
              children: (0, f.jsx)(V.FormattedMessage, {
                ...ka.components_track_list_title
              })
            }), (0, f.jsx)("div", {
              className: "rockstargames-sites-gta-gen9beaa4a0a8d9f3a6ef20ee517f222a3c2",
              children: (0, f.jsx)("div", {
                className: "rockstargames-sites-gta-gen9c06a65e90847e8b44df20f2aceb57038",
                children: a?.map((e => (0, f.jsx)(_a, {
                  track: e.track,
                  artist: e.artist
                }, e.key)))
              })
            })]
          })
        }));
      var xa = t(75385);
      const {
        variants: ya
      } = je.Animations;
      var Na = t(46823),
        ja = t(44606);
      const wa = {
          pillBtn: "rockstargames-sites-gta-gen9e810afee3cb66fbbb03c473e5aa2f5be",
          selected: "rockstargames-sites-gta-gen9e4ad62c1f330692bdb75370f5bbe66eb",
          customModalContent: "rockstargames-sites-gta-gen9c758020ea3f5943e5f8a7d89ade3da69",
          content: "rockstargames-sites-gta-gen9db8d475894c24c580268644776443fa6",
          secondary: "rockstargames-sites-gta-gen9d761507b70662391f68f5018510655ea",
          logo: "rockstargames-sites-gta-gen9f5649436402db0dddc6a55b41c5556cc"
        },
        {
          variants: Sa
        } = je.Animations,
        Ca = e => {
          let {
            id: a,
            logoImage: t = null,
            logoImageHeight: s = "auto",
            name: n = null,
            title: r,
            titleSizeClass: i = null,
            content: o,
            ctaText: c,
            ctaURL: l,
            size: m = "md",
            expandedType: g = "short",
            textOverlayProps: u = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            images: p = [],
            deckProps: b = {},
            to: k = null,
            tina: v = {},
            cardIds: _,
            theme: h
          } = e;
          const x = (0, V.useIntl)(),
            y = (0, N.useTranslations)({
              payload: v?.payload,
              variables: v?.variables ?? {}
            }),
            [j, w] = (0, d.useState)(b?.size ?? m),
            S = (0, N.useGetCdnSource)(t ?? null),
            C = y?.content?.[0],
            T = C?.body ?? C?._memoq?.body;
          return (0, d.useEffect)((() => {
            w(b?.size ?? m)
          }), [b?.size, m]), (0, f.jsx)(na, {
            id: a,
            title: r,
            sectionTitle: n || r,
            size: j,
            expandedType: g,
            images: p,
            deckProps: b,
            payload: {
              content: o,
              meta: {}
            },
            variants: Sa.plainCard,
            textOverlayProps: u,
            modalProps: {
              className: wa.customModal,
              contentClassName: wa.customModalContent
            },
            expandedCardContents: (0, f.jsx)(ga, {
              images: p,
              expandedView: !0
            }),
            theme: h,
            cardIds: _,
            isCoverCard: !0,
            children: (0, f.jsx)(ua, {
              expandedType: g,
              to: k,
              sectionTitle: n || r,
              children: (0, f.jsxs)("div", {
                className: wa.content,
                children: [t && (0, f.jsx)("img", {
                  className: wa.logo,
                  alt: "logo",
                  src: S,
                  style: {
                    height: `${s}`
                  }
                }), (0, f.jsx)("h2", {
                  className: i,
                  children: r
                }), T && (0, f.jsx)("p", {
                  children: T
                }), (0, f.jsx)(ja.A, {
                  target: "newtab" === g ? "_blank" : "_self",
                  to: l || void 0,
                  children: c || x.formatMessage(ea.card_learn_more)
                })]
              })
            })
          })
        };
      var Ta = t(43851),
        Ea = t(52066);
      const Ma = "rockstargames-sites-gta-gen9b7d3d1587271986440f5870d8d02eb3b",
        La = "rockstargames-sites-gta-gen9fcffcc6e594fbf9a4a6e9ab5a8d034c7",
        Ia = {
          0: {
            spaceBetween: 8
          },
          768: {
            spaceBetween: 16
          },
          1024: {
            spaceBetween: 18
          },
          1920: {
            spaceBetween: 20
          },
          2560: {
            spaceBetween: 22
          }
        },
        Pa = e => {
          let {
            title: a = "thumbnail gallery",
            thumbsPerView: t = 3,
            loop: s = !1,
            navigation: n = !1,
            slideChildren: r = [],
            variants: i = {
              parent: void 0,
              main: void 0,
              thumbs: void 0
            },
            transition: o = {
              parent: void 0,
              main: void 0,
              thumbs: void 0
            }
          } = e;
          const {
            track: c
          } = (0, g.useGtmTrack)(), [l, m] = (0, d.useState)([Ea.U1, Ea.WO, Ea.dK]), [u, p] = (0, d.useState)(null), [b, k] = (0, d.useState)(null);
          return (0, d.useEffect)((() => {
            const e = [Ea.U1, Ea.WO, Ea.dK];
            n && e.push(Ea.Vx), m(e)
          }), [n]), (0, d.useEffect)((() => {
            if (!r) return;
            const e = r.map(((e, a) => (0, f.jsx)(Ta.qr, {
              children: e
            }, Symbol(a).toString())));
            k(e)
          }), [r]), b ? (0, f.jsxs)(y.motion.div, {
            className: "rockstargames-sites-gta-gen9f2d55de974817e455a162843125a8771",
            variants: i.parent,
            transition: o.parent,
            initial: "initial",
            animate: "animate",
            children: [(0, f.jsx)(y.motion.div, {
              className: Ma,
              variants: i.main,
              transition: o.main,
              initial: "initial",
              animate: "animate",
              children: (0, f.jsx)(Ta.RC, {
                loop: s,
                navigation: n,
                pagination: {
                  clickable: !0
                },
                thumbs: {
                  swiper: u
                },
                modules: l,
                breakpoints: Ia,
                className: Ma,
                onSlideNextTransitionEnd: () => {
                  c({
                    event: "carousel_next",
                    element_placement: a?.toLowerCase() ?? ""
                  })
                },
                onSlidePrevTransitionEnd: () => {
                  c({
                    event: "carousel_previous",
                    element_placement: a?.toLowerCase() ?? ""
                  })
                },
                onSlideChangeTransitionEnd: () => {
                  c({
                    event: "carousel_swipe",
                    element_placement: a?.toLowerCase() ?? ""
                  })
                },
                children: b
              })
            }), (0, f.jsx)(y.motion.div, {
              className: La,
              variants: i.thumbs,
              transition: o.thumbs,
              initial: "initial",
              animate: "animate",
              children: (0, f.jsx)(Ta.RC, {
                threshold: 50,
                onSwiper: p,
                loop: s,
                breakpoints: Ia,
                slidesPerView: t,
                freeMode: !0,
                watchSlidesProgress: !0,
                modules: l,
                className: La,
                children: b
              })
            })]
          }) : null
        },
        za = e => {
          let {
            images: a,
            title: t,
            expandedView: s,
            variants: n,
            transition: r
          } = e;
          const i = (0, d.useMemo)((() => a && 0 !== a?.length ? a.map(((e, a) => e?.image?.sources ? (0, d.createElement)(be.A, {
            ...e,
            key: a,
            style: {
              ...e?.style,
              "--object-position": e?.objectPosition ?? ""
            }
          }) : null)) : null), [a]);
          return !i?.length || i?.length < 1 ? null : 1 === i.length ? i : (0, f.jsx)(Pa, {
            slideChildren: i,
            title: t,
            navigation: s,
            thumbsVisible: s,
            spaceBetween: 0,
            variants: n,
            transition: r
          })
        },
        Aa = {
          pillBtn: "rockstargames-sites-gta-gen9cf00b554598ff2d6e233a11c7c829c7d",
          selected: "rockstargames-sites-gta-gen9cbdd37e11b752cff831c5a96aeb7dbeb",
          customModalContent: "rockstargames-sites-gta-gen9ecdc3da21cda9331cebe845898b7fa7b"
        },
        {
          transitions: Da,
          variants: $a
        } = je.Animations,
        Ba = e => {
          let {
            id: a,
            title: t,
            content: s,
            size: n = "md",
            expandedType: r = "gallery",
            textOverlayProps: i = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            images: o = [],
            deckProps: c = {},
            tina: l = {},
            payload: m,
            position: g = 0,
            sectionTitle: u = "",
            cardIds: p
          } = e;
          const b = (0, N.useTinaPayload)(),
            k = m ?? b,
            v = l?.payload?.meta?.cdn ?? k?.meta?.prod ?? !1,
            _ = ((e, a) => e?.map((e => e?.image ? {
              ...e,
              image: {
                ...e.image,
                prod: a
              }
            } : e)))(o, v),
            [h, x] = (0, d.useState)(c?.size ?? n),
            {
              parent: y,
              main: j,
              thumbs: w
            } = $a?.cardWithImageGallery?.gallery ?? {};
          return (0, d.useEffect)((() => {
            x(c?.size ?? n)
          }), [c?.size, n]), (0, f.jsx)(na, {
            id: a,
            position: g,
            sectionTitle: u,
            payload: {
              content: s,
              meta: {},
              payload: k
            },
            title: t,
            size: h,
            expandedType: r,
            images: _,
            deckProps: c,
            prod: v,
            variants: $a.cardWithImageGallery,
            textOverlayProps: i,
            modalProps: {
              className: Aa.customModal,
              contentClassName: Aa.customModalContent
            },
            expandedCardContents: (0, f.jsx)(za, {
              images: _,
              title: t,
              navigation: !0,
              thumbsVisible: !0,
              variants: {
                parent: y,
                main: j,
                thumbs: w
              },
              transition: {
                parent: Da.cardOpen,
                main: Da.cardOpen,
                thumbs: Da.cardOpen
              }
            }),
            cardIds: p,
            children: (0, f.jsx)("div", {
              className: Aa.content,
              children: (0, f.jsx)(Ye, {
                title: t,
                size: h,
                textOverlayProps: i,
                children: (0, f.jsx)(za, {
                  images: _,
                  title: t,
                  navigation: !1,
                  thumbsVisible: !1
                })
              })
            })
          })
        };
      var Va = t(21444);
      const Oa = e => {
        let {
          title: a,
          content: t,
          size: s = "md",
          badgeText: n
        } = e;
        const r = {
          ...(0, N.useTinaComponents)(),
          HTMLElement: B,
          UnorderedList: pe.A,
          ListItem: Va.A
        };
        return (0, f.jsx)("div", {
          className: "rockstargames-sites-gta-gen9cfa8d259e6ae05cd5f97d50306be5ffe",
          "data-size": s,
          children: (0, f.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9a4a39548fac12526e8721ffa8813e66a",
            children: [n && (0, f.jsx)("div", {
              className: "rockstargames-sites-gta-gen9cf77e65e2af63ee114825607dde3d11e",
              children: n
            }), (0, f.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9f903ce7e605696e1bc18c4bc22274a6e",
              children: [a && (0, f.jsx)("h3", {
                children: a
              }), (0, f.jsx)(N.TinaParser, {
                components: r,
                tina: {
                  payload: {
                    content: t
                  }
                }
              })]
            })]
          })
        })
      };
      var Ra = t(35790),
        Fa = t.n(Ra),
        Ga = t(65211);
      const Ha = {
          player: "rockstargames-sites-gta-gen9c7765dd7dbdff24d38ef3326bb8a938b",
          fixedToBottom: "rockstargames-sites-gta-gen9ea802f7f67d39cfdd9625cc8de62828f",
          tracksOpen: "rockstargames-sites-gta-gen9a9a553961300b8ee030d0c90ac613c4c",
          tracks: "rockstargames-sites-gta-gen9b4036f5fe1d1ab9674cc7c6e40f9a53c",
          iconBurger: "rockstargames-sites-gta-gen9a18e526e94dfd87e9b5696a21c1c7754",
          trackList: "rockstargames-sites-gta-gen9c7dfe95abfbec1cdef9dfb87d9fd1a1f",
          trackActive: "rockstargames-sites-gta-gen9a74e95cb6296abf8ca92168db76fecb9",
          trackTitle: "rockstargames-sites-gta-gen9eceb3183ee9dc74e33d4184b307ba923",
          trackIndex: "rockstargames-sites-gta-gen9d0322571401b3a4dac22628533213ede",
          controls: "rockstargames-sites-gta-gen9add02ff2cfa9b26941d96126a31bc21f",
          controlsCurrentBg: "rockstargames-sites-gta-gen9cca0f086505f02983f345dfb64c2ca45",
          controlsCurrentBgVisible: "rockstargames-sites-gta-gen9b91004149be94449c7fbfee3d24bde58",
          controlsTrack: "rockstargames-sites-gta-gen9ff717d7c9ac30041034f2c95fd3e3017",
          controlsTrackTitle: "rockstargames-sites-gta-gen9f47edf112978c82a9bbfb2476170007f",
          controlsTrackAnimating: "rockstargames-sites-gta-gen9f09973ae8e0457805bc0a1090d05e444",
          scrollText: "rockstargames-sites-gta-gen9b42c9e9ba3716121d34600c92fdf4398",
          controlsTrackArtist: "rockstargames-sites-gta-gen9e0b6ffdc4c40a6992d70395cd98cb6c5",
          controlsTrackBurger: "rockstargames-sites-gta-gen9f3106c22742d7b08e577964a56789504",
          controlsButtons: "rockstargames-sites-gta-gen9e77442300b4509fe7a0104b3fb4cecf5",
          controlsScrub: "rockstargames-sites-gta-gen9f90cfd862377d31cb5ee1faf9249fd3c",
          controlsPlayPause: "rockstargames-sites-gta-gen9c58746be839199f6102319efb7659a54",
          controlsPlayPausePlaying: "rockstargames-sites-gta-gen9cecadc2b92a0597a55ba5870b46706c9",
          controlsNextTrack: "rockstargames-sites-gta-gen9cd583d32f7692538f7f5d1181943c899",
          controlsPrevTrack: "rockstargames-sites-gta-gen9d84e8c03d27a3038eb54cb7d12c8ac52",
          controlsScrubTrack: "rockstargames-sites-gta-gen9f4bb886e9545730ccc323f43a1dfb45c"
        },
        Ua = e => {
          let {
            src: a
          } = e;
          return (0, f.jsx)("div", {
            className: Ha.cover,
            style: {
              background: `url(${a}) center/cover`
            }
          })
        },
        Wa = e => {
          let {
            timing: a = {
              current: 0,
              duration: 0
            },
            playing: t,
            audioRef: s,
            setPlaying: n,
            tracksOpen: r,
            setTracksOpen: i,
            trackData: o,
            setTrackId: c,
            trackBounds: l,
            setAutoNext: m
          } = e;
          const g = (0, d.useRef)(null),
            u = (0, d.useRef)(null),
            p = (0, d.useRef)(null),
            [b, k] = (0, d.useState)(null),
            [v, _] = (0, d.useState)(!1),
            h = e => {
              const a = new Date(1e3 * e),
                t = a.getUTCMinutes(),
                s = a.getSeconds();
              return `${t.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`
            };
          return (0, d.useEffect)((() => {
            if (!u.current || !p.current) return;
            const e = () => {
              p.current && u.current && k(p.current.clientWidth > u.current.clientWidth)
            };
            return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e)
          }), [p, u, a]), (0, d.useEffect)((() => {
            if (!g.current || !a?.duration) return;
            let e = null;
            const t = new(Fa())(g.current),
              n = e => {
                if (g.current) {
                  const t = g.current.clientWidth;
                  if (!g.current.contains(e.srcEvent.target)) return;
                  const n = Math.max(0, e.srcEvent.offsetX),
                    r = Number(n / t * a.duration);
                  s.currentTime = r
                }
              },
              r = () => {
                e ? s.pause() : s.play()
              },
              i = () => {
                e = s.paused, s.pause()
              };
            return t.on("panstart", i), t.on("panleft", n), t.on("panright", n), t.on("panend", r), t.on("tap", n), () => {
              t.off("panstart", i), t.off("panleft", n), t.off("panright", n), t.off("panend", r), t.off("tap", n)
            }
          }), [g.current, a.duration]), (0, d.useEffect)((() => {
            const e = Number(s?.currentTime);
            (t || !isNaN(e) && 0 !== e) && _(!0)
          }), [t, s?.currentTime]), (0, f.jsxs)("div", {
            className: Ha.controls,
            style: {
              "--track-color": o.color,
              "--track-mix-blend-mode": o.mix_blend_mode,
              "--current-pct": a.current / a.duration
            },
            children: [(0, f.jsx)("div", {
              className: [Ha.controlsCurrentBg, v ? Ha.controlsCurrentBgVisible : ""].join(" ")
            }), (0, f.jsx)("div", {
              className: Ha.controlsTrack,
              ref: u,
              children: (0, f.jsx)("span", {
                className: [Ha.controlsTrackTitle, b ? Ha.controlsTrackAnimating : ""].join(" "),
                ref: p,
                children: o.title
              })
            }), (0, f.jsxs)("div", {
              className: Ha.controlsButtons,
              children: [(0, f.jsx)("div", {
                className: Ha.controlsPrevTrack,
                onClick: () => {
                  l && (c(l[0]), m(!0), n(!0))
                }
              }), (0, f.jsx)("div", {
                className: [Ha.controlsPlayPause, t ? Ha.controlsPlayPausePlaying : ""].join(" "),
                onClick: () => {
                  n(!t)
                }
              }), (0, f.jsx)("div", {
                className: Ha.controlsNextTrack,
                onClick: () => {
                  l && (c(l[1]), m(!0), n(!0))
                }
              })]
            }), (0, f.jsx)("div", {
              active: r ? "" : null,
              className: Ha.controlsTrackBurger,
              children: (0, f.jsx)("div", {
                className: Ha.iconBurger,
                onClick: () => {
                  i(!r)
                }
              })
            }), (0, f.jsxs)("div", {
              className: Ha.controlsScrub,
              children: [(0, f.jsx)("span", {
                children: h(a.current)
              }), (0, f.jsx)("div", {
                className: Ha.controlsScrubTrack,
                ref: g
              }), (0, f.jsx)("span", {
                children: h(a.duration)
              })]
            })]
          })
        },
        qa = e => {
          let {
            tracks: a,
            trackId: t,
            setTrackId: s,
            tracksOpen: n,
            setTracksOpen: r,
            setPlaying: i,
            setAutoNext: o
          } = e;
          return (0, f.jsxs)("div", {
            className: Ha.tracks,
            children: [(0, f.jsx)("h4", {
              children: "Tracks"
            }), (0, f.jsx)("div", {
              className: Ha.trackBurger,
              onClick: () => {
                r(!n)
              }
            }), (0, f.jsx)("div", {
              className: Ha.trackList,
              children: a.map(((e, a) => (0, f.jsxs)("a", {
                style: {
                  "--highlight-color": e.color
                },
                className: t === e.id ? Ha.trackActive : "",
                onClick: () => {
                  s(e.id), i(!0), o(!0)
                },
                children: [(0, f.jsx)("span", {
                  className: Ha.trackIndex,
                  children: String(a + 1).padStart(2, "0")
                }), (0, f.jsx)("span", {
                  className: Ha.trackTitle,
                  children: e.title
                }), (0, f.jsx)("span", {
                  className: Ha.trackTime,
                  children: e.duration
                })]
              }, e.id)))
            })]
          })
        },
        Ya = e => {
          let {
            id: a,
            className: t = ""
          } = e;
          const {
            data: s
          } = (0, m.useQuery)(Ga.GetAudioAlbum, {
            variables: {
              id: a
            }
          }), [n, r] = (0, d.useState)(), [i, o] = (0, d.useState)(), [c, l] = (0, d.useState)(), [g, u] = (0, d.useState)(!1), [p, b] = (0, d.useState)(!1), [k, v] = (0, d.useState)(new HTMLAudioElement), [_, h] = (0, d.useState)({
            current: 0,
            duration: 0
          }), [x, y] = (0, d.useState)(!0);
          return (0, d.useEffect)((() => {
            const e = "audio",
              a = a => {
                a?.data?.rockstarAudioPlayerPlayTrackId && (o(a.data.rockstarAudioPlayerPlayTrackId), y(!1), b(!0)), p && a?.data?.attentionBlurredElsewhere && a?.data?.from !== e && b(!1)
              };
            return p && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: e
            }), window.addEventListener("message", a, !1), () => window.removeEventListener("message", a, !1)
          }), [p]), (0, d.useEffect)((() => {
            if (!k) return;
            const e = () => {
                isNaN(k.duration) || h({
                  duration: k?.duration ?? 0,
                  current: k?.currentTime ?? 0
                })
              },
              a = () => {
                x && n && o(n[1])
              };
            return k.addEventListener("loadedmetadata", e), k.addEventListener("timeupdate", e), k.addEventListener("ended", a), () => {
              k.removeEventListener("loadedmetadata", e), k.removeEventListener("timeupdate", e), k.removeEventListener("ended", a)
            }
          }), [k, n, x]), (0, d.useEffect)((() => {
            p && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: "audio"
            })
          }), [p]), (0, d.useEffect)((() => {
            k && (p ? k.play() : k.pause(), u(!1))
          }), [p, k, c?.id]), (0, d.useEffect)((() => {
            if (!i) return;
            const {
              tracks: e
            } = s.audioAlbum, a = s.audioAlbum.tracks.findIndex((e => e.id === i));
            r([e[a - 1]?.id ?? e[e.length - 1].id, e[a + 1]?.id ?? e[0].id]), l(e[a])
          }), [i]), (0, d.useEffect)((() => {
            s && o(s.audioAlbum.tracks[0].id)
          }), [s]), c ? (0, f.jsxs)("div", {
            className: [Ha.player, Ha[t], g ? Ha.tracksOpen : ""].join(" "),
            children: [(0, f.jsx)("audio", {
              ref: e => {
                v(e)
              },
              src: c.mp3_src
            }), (0, f.jsx)(qa, {
              tracks: s.audioAlbum.tracks,
              setTrackId: o,
              trackId: i,
              tracksOpen: g,
              setTracksOpen: u,
              setPlaying: b,
              setAutoNext: y
            }), (0, f.jsx)(Ua, {
              src: c.cover_src
            }), (0, f.jsx)(Wa, {
              setTrackId: o,
              trackBounds: n,
              tracksOpen: g,
              setTracksOpen: u,
              playing: p,
              setPlaying: b,
              timing: _,
              trackData: c,
              audioRef: k,
              setAutoNext: y
            })]
          }) : null
        };
      var Ka = t(20930),
        Qa = t(86330),
        Xa = t(15924),
        Za = t.n(Xa);
      const Ja = e => {
        let {
          isMulti: a,
          allowSelectAll: t,
          label: s,
          miscProps: n
        } = e;
        const [r, i] = (0, d.useState)(""), o = (0, d.useMemo)((() => Za()().getData()), []);
        return (0, f.jsx)(Qa.Ay, {
          unstyled: !0,
          value: r,
          isMulti: a,
          allowSelectAll: t,
          options: o,
          placeholder: s,
          onChange: e => {
            return a = e?.target?.value, void i(a);
            var a
          },
          classNamePrefix: "country-select",
          ...n
        })
      };
      var et = t(87171);
      const at = e => {
        let {
          cookieName: a,
          cookieValue: t,
          trueComponent: s,
          falseComponent: n
        } = e;
        const r = (e => {
            const a = document.cookie.split("; "),
              t = `${e}=`,
              s = a.find((e => e.startsWith(t)));
            return s?.substring(t.length, s.length)
          })(a),
          i = new URLSearchParams(window.location.search).get(a);
        return i && ((e, a) => {
          e && a && (document.cookie = `${e}=${a}; domain=${(0,et.F)()}; path=/;`)
        })(a, i), r === t || i === t ? s : n
      };
      var tt = t(99217),
        st = t(10632);
      const nt = "rockstargames-sites-gta-gen9a19bcd2b98d91e60c43b9de146e20f4e",
        rt = e => {
          let {
            color: a
          } = e;
          return (0, f.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9e83fe07aa054242e9023d2f9e7a3fd25",
            style: {
              "--loader-color": a
            },
            children: [(0, f.jsx)("div", {
              className: nt
            }), (0, f.jsx)("div", {
              className: nt
            }), (0, f.jsx)("div", {
              className: nt
            })]
          })
        };
      var it = t(14474);
      const ot = {
          dropdownWrapper: "rockstargames-sites-gta-gen9bbf48ac7e790ff47ad1d5ee6fb7da4d9",
          items: "rockstargames-sites-gta-gen9a9afd60434d032bdba4ce040dbeb13b7",
          open: "rockstargames-sites-gta-gen9df17f0cb21e0947d4f391f915bd797d2",
          opener: "rockstargames-sites-gta-gen9cb53c003fd165ccb31dee0f32edca90f",
          secondary: "rockstargames-sites-gta-gen9fe6babf9fc35bb59a2b5225e4d6e7a50"
        },
        ct = e => {
          let {
            children: a,
            className: t,
            title: s
          } = e;
          const [n, r] = (0, d.useState)(!1);
          let i = null;
          return i = it.Ay, (0, f.jsx)(i, {
            disabled: !n,
            children: (0, f.jsxs)("div", {
              className: [ot.dropdownWrapper, n ? ot.open : "", void 0 !== t ? t : ""].join(" "),
              children: [(0, f.jsx)("button", {
                className: ot.opener,
                onClick: () => r(!n),
                children: s
              }), n && (0, f.jsx)("div", {
                className: ot.items,
                onClick: () => r(!1),
                children: a
              })]
            })
          })
        },
        dt = e => {
          let {
            caption: a,
            children: t,
            ...s
          } = e;
          return a ? (0, f.jsxs)("figure", {
            ...s,
            children: [t, (0, f.jsx)("figcaption", {
              dangerouslySetInnerHTML: {
                __html: a
              }
            })]
          }) : t
        },
        lt = e => {
          let {
            componentTitle: a,
            type: t,
            items: s
          } = e;
          return s?.length ? (0, f.jsx)("div", {
            className: "rockstargames-sites-gta-gen9aee2a98f97e777758e2d9bec034314ee",
            type: t,
            children: (0, f.jsxs)(x, {
              children: [a && (0, f.jsx)("h3", {
                children: a
              }), (0, f.jsx)(x, {
                className: "rockstargames-sites-gta-gen9dba17b5c55f8d40e2600765f1a60d6af",
                children: s.map(((e, a) => {
                  return e?.embed ? (0, f.jsx)(dt, {
                    caption: e?.caption,
                    children: (0, f.jsx)("div", {
                      className: "rockstargames-sites-gta-gen9f0cd8278232673606f9c1715bd4950f6",
                      dangerouslySetInnerHTML: {
                        __html: (t = e.embed, t.replace(/&gt;/g, ">").replace(/&lt;/g, "<"))
                      }
                    }, `${e?.key??a}_div`)
                  }, e?.key ?? a) : e?.text ? (0, f.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: e.text
                    }
                  }, e?.key ?? a) : void 0;
                  var t
                }))
              })]
            })
          }) : null
        },
        mt = {
          animateBox: "rockstargames-sites-gta-gen9b07a3be6338e0ba4b346b072762582e3",
          fadeArea: "rockstargames-sites-gta-gen9f47504b50907dd0fd609719dad3f62bd",
          visible: "rockstargames-sites-gta-gen9c121e11e40215dc778fe8665eb38845d",
          barGrow: "rockstargames-sites-gta-gen9e0262d00df9ad8a47b08ae84160bfa51",
          bar: "rockstargames-sites-gta-gen9bbb7e636ac00581aed0b7e148916cc11",
          animateMe: "rockstargames-sites-gta-gen9f7adfd0186421cac9ad0b300911cc9af"
        },
        gt = e => {
          let {
            children: a,
            style: t
          } = e;
          const s = (0, d.useRef)(null);
          return (0, d.useEffect)((() => {
            new IntersectionObserver((e => {
              e.forEach((e => {
                e.isIntersecting && e.target.classList.add([mt.visible])
              }))
            })).observe(s?.current)
          }), []), (0, f.jsx)("div", {
            style: t,
            className: [mt.fadeArea].join(" "),
            ref: s,
            children: a
          })
        },
        ut = {
          layeredImage: "rockstargames-sites-gta-gen9fb27e7361e78dacdcf500e0b9a2b4fce",
          layersWrapper: "rockstargames-sites-gta-gen9af169afca6f741daca0331a1b13fa5f1",
          "hero-lg": "rockstargames-sites-gta-gen9b722bba74c792beb73ccdfec4506b591",
          "hero-md": "rockstargames-sites-gta-gen9c6b26605a3817704bbf427741edb98f8",
          "hero-sm": "rockstargames-sites-gta-gen9e7b70cd5245ee850b5a2bfd048fa02c4",
          contain: "rockstargames-sites-gta-gen9c409c9fefffbfffd091f81bdd75ab8a6",
          cover: "rockstargames-sites-gta-gen9a72cf62465acbddecc3a2cb256640fac",
          fill: "rockstargames-sites-gta-gen9c12eb7986b09f10158c48ad4a902f2ef",
          "bg-img": "rockstargames-sites-gta-gen9ae25e5bf6793a5522c791028f396dedd",
          imageLayer: "rockstargames-sites-gta-gen9a63d213c123e7da5863c6256e847eb0f",
          "layer-lg-height": "rockstargames-sites-gta-gen9a206e14a6e055900c30ee67826330173",
          "layer-md-height": "rockstargames-sites-gta-gen9e2a2cf239dc64e006fdc9c2c3d280b8e",
          "layer-sm-height": "rockstargames-sites-gta-gen9c947fc08bb64674c4bf0429e7914507e",
          "layer-xl-height": "rockstargames-sites-gta-gen9a4d21457b55a0626d1cf5170845ba8d6",
          "layer-xs-height": "rockstargames-sites-gta-gen9d0f6abd48b388b8e3b18eee4bc19039d",
          "layer-xxl-height": "rockstargames-sites-gta-gen9d74cf249eb57fb6682f07fe13fdfdb4a",
          "layer-lg-width": "rockstargames-sites-gta-gen9fb58e41629b31453b12d8bbcc525608f",
          "layer-md-width": "rockstargames-sites-gta-gen9f1d2c109e21746d5fa00c85e56e61b10",
          "layer-sm-width": "rockstargames-sites-gta-gen9a1289245dc6b1854c3aec5b1a8a11593",
          "layer-xl-width": "rockstargames-sites-gta-gen9e5ecbec181677eea6c9c72e02580c501",
          "layer-xs-width": "rockstargames-sites-gta-gen9c60b1a515049d3f670d8c5a76c8a1bf6",
          "layer-xxl-width": "rockstargames-sites-gta-gen9ac03c56e2475aecafc08e873eed26566",
          "bottom-y": "rockstargames-sites-gta-gen9d66e5203a7bd3c85b99e6caef49b2e9b",
          "center-x": "rockstargames-sites-gta-gen9cc06519a4a0d2db824b70a425c8cefd6",
          "center-y": "rockstargames-sites-gta-gen9d6ce82f1bd5cbf6b4abe650a2738c723",
          "left-x": "rockstargames-sites-gta-gen9bb4dd9e1570a80cc01f752a2230abdac",
          "right-x": "rockstargames-sites-gta-gen9d50c0c4bee9b09502dd611543223ed37",
          "top-y": "rockstargames-sites-gta-gen9a9cd0a03e7193a5b47c6e767e045a1ec",
          border: "rockstargames-sites-gta-gen9af6154339558ed7e6e46014575250492",
          shards: "rockstargames-sites-gta-gen9a0d1e1b5705f11b3b9301717bc5f6245",
          shards_three: "rockstargames-sites-gta-gen9cf01ef76b0d5cc2a7bc4f005be4eb31f",
          shards_two: "rockstargames-sites-gta-gen9f317b17c9b0f0a27ed95ec2844857f25",
          dual: "rockstargames-sites-gta-gen9b9c969b033c5016f95d5a70ceea22071"
        },
        ft = e => {
          let {
            style: a,
            className: t
          } = e;
          const s = {
              ...a
            },
            n = a["--border-image-source"],
            r = (0, N.useGetCdnSource)(n || null);
          return n && (s["--border-image-source"] = `url(${r})`), (0, f.jsx)("div", {
            className: (0, m.classList)(ut.border, t),
            style: {
              ...s
            }
          })
        },
        pt = e => e?.images ? (0, f.jsx)("div", {
          className: (0, m.classList)(ut.layeredImage, ut[e?.variantClass], ut[e?.wrapperSizeClass]),
          style: {
            ...e?.style ?? {}
          },
          children: (0, f.jsxs)("div", {
            className: ut.layersWrapper,
            children: [e?.images?.map(((e, a) => {
              const {
                image: t,
                paddingClass: s,
                imageSizeClass: n,
                objectFitClass: r,
                positionClassX: i,
                positionClassY: o,
                zIndex: c,
                className: d,
                style: l,
                alt: g,
                displayClass: u
              } = e;
              return (0, f.jsx)(xa.A, {
                image: t,
                style: {
                  zIndex: c ?? a + 1
                },
                imageStyle: l,
                className: (0, m.classList)(d, u, ut.imageLayer, ut[s], ut[n], ut[r], ut[i], ut[o]),
                alt: g
              }, c ?? a + 1)
            })), e?.borderImage && (0, f.jsx)(ft, {
              style: e?.borderImage,
              className: e?.borderImage?.displayClass
            })]
          })
        }) : null,
        bt = e => {
          const {
            image: a,
            thumbnail: t,
            style: s,
            showOpenButtonMobile: n,
            showOpenButton: r,
            showDownloadButtonMobile: i,
            showDownloadButton: o
          } = e, c = (0, m.useLocale)(), {
            isMobile: d
          } = (0, m.useWindowResize)(), l = a?.sources ?? {}, g = t?.image?.sources ?? {}, u = (0, h.C1)(l?.[c] ?? l?.en_us) ?? "", p = (0, h.C1)(g?.[c] ?? g?.en_us) ?? u, b = {
            ...t,
            ...e,
            src: u,
            thumbnail: p,
            showOpenButton: d ? n : r,
            showDownloadButton: d ? i : o
          };
          return (0, f.jsx)("div", {
            style: s,
            className: "rockstargames-sites-gta-gen9adbaa0167219cd891249a29faec00e8f",
            children: (0, f.jsx)(F.Lightbox, {
              ...b
            })
          })
        },
        kt = {
          pillBtn: "rockstargames-sites-gta-gen9c79dd3a7e7c5c11adfd19c623716576f",
          selected: "rockstargames-sites-gta-gen9c53675ad15e2ef662362850daab33791",
          multiSourceContainer: "rockstargames-sites-gta-gen9a99f18f8581cc9aeafa5111379885ee6",
          multiSourceImage: "rockstargames-sites-gta-gen9bc42c525ec0bd93df46e1999e278e9fb",
          animatePlaceholder: "rockstargames-sites-gta-gen9f6f51dbe7c2f79f974e9573386bba9da",
          "loader-keyframes": "rockstargames-sites-gta-gen9c3684b80c99c860036d9337843a7be58"
        },
        vt = e => {
          let {
            imageUrl: a,
            className: t,
            alt: s,
            style: n,
            lazy: r = !1,
            decoding: i = "auto",
            sizes: o = [320, 480, 768, 1024, 1440, 1920, 2560]
          } = e;
          const [c, l] = (0, d.useState)(!1);
          return (0, f.jsxs)("div", {
            className: kt.multiSourceContainer,
            children: [!c && (0, f.jsx)("img", {
              className: [t, kt.animatePlaceholder].join(" "),
              src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjMzMzMzMzIi8+Cjwvc3ZnPgo=",
              sizes: "(max-width: 1024px) 100vw, 1024px",
              alt: "Loading...",
              style: n
            }), (0, f.jsx)("img", {
              className: [kt.multiSourceImage, t].join(" "),
              src: `${a}?im=Resize=1920`,
              srcSet: (m = a, o.map((e => `${m}?im=Resize=${e} ${e}w`)).join(", ")),
              sizes: "(max-width: 400px) 200px, (max-width: 1920px) 100vw, 1920px",
              alt: s ?? "Multi-Source Image",
              style: n,
              onLoad: () => {
                l(!0)
              },
              loading: r ? "lazy" : "eager",
              decoding: i
            })]
          });
          var m
        },
        _t = {
          tag: "rockstargames-sites-gta-gen9b660bb706132d84852c02df01cc6ed5a"
        },
        ht = e => {
          let {
            className: a,
            href: t,
            title: s,
            style: n
          } = e;
          const r = (0, f.jsxs)("div", {
            style: n,
            className: [_t.tag, a].join(" "),
            children: [(0, f.jsx)("i", {}), s]
          });
          return void 0 !== t ? (0, f.jsx)(G.A, {
            to: t,
            children: r
          }) : r
        },
        xt = {
          newswireBlock: "rockstargames-sites-gta-gen9b394b56c31488c36155ca82090c66e6f",
          info: "rockstargames-sites-gta-gen9ea1c51ae745531c2aeabbe3fcf603842",
          title: "rockstargames-sites-gta-gen9f1dfe59c3d981dbe132559620885ecea",
          newswireBlockNoSpecialOrder: "rockstargames-sites-gta-gen9c06d09374e8b5cc41f1732c691ee8e25",
          preview: "rockstargames-sites-gta-gen9ca2b587572d3c9a74cfc2fedf400ce8c",
          previewMobile: "rockstargames-sites-gta-gen9b3d4a8cfcc371ae39ce6220d009c5954",
          top: "rockstargames-sites-gta-gen9eee9c5d3b714a61ac265369800a6d4e0",
          startAnimation: "rockstargames-sites-gta-gen9a56af3c95449fe8452485dfb6c89fc29"
        },
        yt = e => {
          let {
            section: a = "",
            index: t,
            post: s,
            noSpecialOrder: n = !1,
            focused: r
          } = e;
          const {
            track: i
          } = (0, g.useGtmTrack)(), [o] = (0, l.useSearchParams)(), c = s.preview_images_parsed.newswire_block, u = {
            default: 0 !== t || n ? c.square || c.d16x9 || c._fallback : c.d16x9 || c.square || c._fallback,
            mobile: c.square || c._fallback
          }, [p, b] = (0, m.usePreloadImg)(u.default), k = {
            default: {
              backgroundImage: `url(${u.default})`
            },
            mobile: {
              backgroundImage: `url(${u.mobile})`
            }
          }, v = (0, d.useCallback)((() => {
            i({
              event: "card_click",
              card_id: s.id,
              card_name: s.name_slug.replace(/-/g, " "),
              link_url: s.url,
              position: t,
              element_placement: a?.toLowerCase()
            })
          }), [s]);
          return (0, f.jsx)(G.A, {
            to: s.url,
            className: [xt.newswireBlock, n ? xt.newswireBlockNoSpecialOrder : "", null !== p ? xt.startAnimation : ""].join(" "),
            focused: r,
            onClick: v,
            children: (0, f.jsxs)(f.Fragment, {
              children: [0 !== t || o.get("tag_id") ? (0, f.jsx)("div", {
                className: xt.preview,
                style: k.default
              }) : (0, f.jsxs)(f.Fragment, {
                children: [(0, f.jsx)("div", {
                  className: xt.previewMobile,
                  style: k.mobile
                }), (0, f.jsx)("div", {
                  className: xt.preview,
                  style: k.default
                })]
              }), (0, f.jsxs)("div", {
                className: xt.info,
                children: [(0, f.jsxs)("div", {
                  className: xt.top,
                  children: [s.primary_tags.length ? (0, f.jsx)(ht, {
                    title: s.primary_tags[s.primary_tags.length > 1 && 722 === s.primary_tags[0].id ? 1 : 0].name
                  }) : "", (0, f.jsx)("time", {
                    dateTime: s.created,
                    children: s.created_formatted
                  })]
                }), (0, f.jsx)("h5", {
                  className: xt.title,
                  dangerouslySetInnerHTML: {
                    __html: s.title
                  }
                })]
              })]
            })
          })
        };
      var Nt = t(81588),
        jt = t(46368),
        wt = t.n(jt);
      const St = (0, m.withTranslations)((e => {
          let {
            section: a = "",
            relativeTo: t = "",
            tagId: s = null,
            metaUrl: n = "/newswire",
            t: r
          } = e;
          const i = (0, m.useLocale)(),
            {
              track: o
            } = (0, g.useGtmTrack)(),
            [c, u] = (0, l.useSearchParams)(),
            {
              tagId: p = null
            } = (0, l.useParams)(),
            [b, k] = (0, d.useState)(p ?? s ?? c.get("tag_id")),
            [v, _] = (0, d.useState)(1),
            [h, x] = (0, d.useState)(20),
            [y, N] = (0, d.useState)([]),
            [j, w] = (0, d.useState)(null),
            [S, {
              loading: C,
              data: T
            }] = (0, Nt._l)(wt(), {
              variables: {
                tagId: Number(b),
                page: v,
                metaUrl: n,
                limit: h,
                locale: i
              }
            });
          return (0, d.useEffect)((() => {
            _(1), N([]), x(20), k(p ?? s ?? c.get("tag_id")), S()
          }), [c.get("tag_id"), p, s]), (0, d.useEffect)((() => {
            const e = y;
            T?.posts?.paging && w(T?.posts?.paging), T?.posts?.results && N(e.concat(T?.posts?.results))
          }), [T]), (0, d.useEffect)((() => {
            (() => {
              const e = c.get("page"),
                a = Number(e ?? 1);
              x(20 * a), S()
            })()
          }), []), y.length ? (0, f.jsxs)("div", {
            "data-testid": "newswire-list",
            children: [(0, f.jsx)(Mt, {
              section: a,
              posts: y,
              relativeTo: t,
              noSpecialOrder: null !== b
            }), null !== j && j.nextPage ? (0, f.jsx)(ja.A, {
              className: "rockstargames-sites-gta-gen9e125d510192feb4ce2844cb97084b838",
              "data-testid": "more-stories",
              onClick: e => {
                const a = c.get("page"),
                  t = Number(a ?? v) + 1;
                _(t), 20 !== h && x(20), S(), u({
                  page: String(t)
                }, {
                  replace: !0
                }), o({
                  event: "cta_learn",
                  text: "more stories",
                  element_placement: "newswire"
                })
              },
              disabled: C,
              context: "secondary",
              children: r("More Stories")
            }) : ""]
          }) : null
        })),
        Ct = {
          pillBtn: "rockstargames-sites-gta-gen9f2d003dd0e6a129a56ea07208548787c",
          selected: "rockstargames-sites-gta-gen9f94728c4a438800b9abab11a8b3e3c0a",
          related: "rockstargames-sites-gta-gen9b8a63bb419c1f2a8f94e099e1e650e48",
          posts: "rockstargames-sites-gta-gen9cfe09d4dc8447b1e606404300d040e7a",
          just1post: "rockstargames-sites-gta-gen9d46374473ed68a4121f88b44eba06359"
        },
        Tt = (0, m.withTranslations)((e => {
          let {
            posts: a,
            t
          } = e;
          return (0, f.jsxs)("section", {
            className: Ct.related,
            children: [(0, f.jsx)("h2", {
              children: t("Related Stories")
            }), (0, f.jsx)("div", {
              className: [Ct.posts, 1 === a.length ? Ct.just1post : ""].join(" "),
              children: a.map((e => (0, f.jsx)(yt, {
                noSpecialOrder: !0,
                post: e
              }, e.id)))
            })]
          })
        })),
        Et = {
          newswireBlocks: "rockstargames-sites-gta-gen9ea687097d9239d4830bc03090f0116f2",
          noSpecialOrder: "rockstargames-sites-gta-gen9d301334a72b626f8cc2f5b9733299e76"
        },
        Mt = (0, m.withGtmTracking)((e => {
          let {
            section: a = "",
            noSpecialOrder: t = !1,
            posts: s,
            gtmTrack: n,
            relativeTo: r
          } = e;
          const [i, o] = (0, d.useState)(null);
          return (0, d.useEffect)((() => {
            if (!s.length) return;
            const e = {
              event: "view_item_list",
              ecommerce: {
                impressions: []
              }
            };
            s.map(((t, s) => {
              e.ecommerce.impressions.push({
                name: t.title,
                id: t.id,
                position: s + 1,
                list: a
              })
            })), n(e), o(s.length)
          }), [s.length]), (0, f.jsx)("div", {
            "data-testid": "newswire-blocks-container",
            className: [Et.newswireBlocks, t ? Et.noSpecialOrder : "", Et.contextHome].join(" "),
            children: s.map(((e, s) => (0, f.jsx)(yt, {
              section: a,
              index: s,
              noSpecialOrder: t,
              post: e,
              focused: s === i
            }, e.id)))
          })
        })),
        Lt = "rockstargames-sites-gta-gen9b013d77f453d7053bbcf06f173ff326c",
        It = e => {
          let {
            children: a,
            data: t,
            onPageUpdate: s,
            page: n,
            className: r
          } = e;
          return (0, f.jsx)("a", {
            href: "#",
            className: n === t.page ? `rockstargames-sites-gta-gen9b577d5726806ec872ecdb8a46905734f ${r??""}` : "",
            onClick: e => {
              e.preventDefault(), s(n)
            },
            children: a
          })
        },
        Pt = e => {
          let {
            data: a,
            onPageUpdate: t,
            className: s
          } = e;
          if (1 === a.pageCount) return null;
          const n = new Array(Math.min(a.pageCount, 8)),
            r = Math.max(a.pageCount - 8, 1),
            i = Math.max(2, a.page - 4),
            o = Array.from(n, ((e, a) => a + Math.min(r, i)));
          return (0, f.jsxs)("div", {
            className: `rockstargames-sites-gta-gen9e480f25872ae2a8b3fcd1e492d838301 ${s??""}`,
            children: [a.pageCount > 8 ? (0, f.jsxs)(f.Fragment, {
              children: [(0, f.jsx)(It, {
                data: a,
                onPageUpdate: t,
                page: 1,
                children: "1"
              }), 2 !== o[0] ? (0, f.jsx)("div", {
                className: Lt,
                children: "..."
              }) : ""]
            }) : "", o.map((e => (0, f.jsx)(It, {
              data: a,
              onPageUpdate: t,
              page: e,
              className: s,
              children: e
            }, e))), a.pageCount > 8 ? (0, f.jsxs)(f.Fragment, {
              children: [o.slice(-1)[0] + 1 < a.pageCount ? (0, f.jsx)("div", {
                className: Lt,
                children: "..."
              }) : "", (0, f.jsx)(It, {
                data: a,
                onPageUpdate: t,
                page: a.pageCount,
                children: a.pageCount
              })]
            }) : ""]
          })
        },
        zt = {
          responsiveFlexBox: "rockstargames-sites-gta-gen9fad65f02dd0ee292c36ec9d50b9c249a",
          responsiveFlexItem: "rockstargames-sites-gta-gen9f5215494f66727858110c9c73e2d882a",
          responsiveImage: "rockstargames-sites-gta-gen9d437a700a9b768227a114e70db78af03"
        },
        At = e => {
          let {
            children: a,
            className: t,
            style: s
          } = e;
          return (0, f.jsx)("div", {
            className: [zt.responsiveFlexBox, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: a
          })
        },
        Dt = {
          responsiveFlexItem: "rockstargames-sites-gta-gen9e7371144db2e94a049204d4b178416ec"
        },
        $t = e => {
          let {
            children: a,
            className: t,
            style: s
          } = e;
          return (0, f.jsx)("div", {
            className: [Dt.responsiveFlexItem, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: a
          })
        },
        Bt = {
          responsiveGridBox: "rockstargames-sites-gta-gen9e9ae27279428e611bbce59656759ed50",
          responsiveGridItem: "rockstargames-sites-gta-gen9b0d14e4a5e63a903117e93a392cbfb53"
        },
        Vt = e => {
          let {
            children: a,
            cols: t,
            className: s,
            rows: n,
            style: r
          } = e;
          const i = r ? {
            ...r
          } : {};
          return void 0 !== t && (i.gridTemplateColumns = `repeat(${t}, 1fr)`), void 0 !== n && (i.gridTemplateRows = `repeat(${n}, 1fr)`), (0, f.jsx)("div", {
            className: [Bt.responsiveGridBox, void 0 !== s ? s : ""].join(" "),
            style: i,
            children: a
          })
        },
        Ot = {
          responsiveGridBox: "rockstargames-sites-gta-gen9e721a07d53edbb90b165a7720bb32c08",
          responsiveGridItem: "rockstargames-sites-gta-gen9a32d93b6ae982b5ad473f75cf86ff085"
        },
        Rt = e => {
          let {
            children: a,
            className: t,
            style: s
          } = e;
          return (0, f.jsx)("div", {
            className: [Ot.responsiveGridItem, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: a
          })
        },
        Ft = {
          responsiveImage: "rockstargames-sites-gta-gen9f642b754e0efd503262ab7ca0c7b9f5b"
        },
        Gt = e => {
          let {
            src: a,
            className: t = "",
            animate: s,
            ariaLabel: n,
            style: r = {}
          } = e;
          const [i, o] = (0, m.usePreloadImg)(a);
          if (!i) return null;
          r.backgroundImage = `url(${a})`;
          const c = {
            ...r
          };
          return o && (c["--aspect-ratio"] = o.width / o.height), (0, f.jsx)("div", {
            role: "img",
            "aria-label": n ?? "R* Games",
            className: [Ft.responsiveImage, s ? Ft.animateBox : "", t].join(" "),
            style: c
          })
        },
        Ht = {
          responsiveSection: "rockstargames-sites-gta-gen9bd7167fb3a3edaf4df4d9a576efb1170",
          maxWidth: "rockstargames-sites-gta-gen9b2c8f49e280c2e7c204b30a4af8c13b9"
        },
        Ut = e => {
          let {
            children: a,
            className: t,
            style: s,
            maxWidth: n
          } = e;
          return (0, f.jsx)("section", {
            className: [Ht.responsiveSection, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: n ? (0, f.jsx)("div", {
              className: Ht.maxWidth,
              children: a
            }) : a
          })
        };
      var Wt = t(22897);
      const qt = e => {
        let {
          html: a
        } = e;
        return (0, f.jsx)("div", {
          children: (0, Wt.Ay)(a)
        })
      };
      var Yt = t(27777);
      const Kt = () => {
        const {
          pathname: e
        } = (0, l.useLocation)();
        return (0, d.useEffect)((() => {
          const e = document.scrollingElement || document.documentElement;
          setTimeout((() => {
            e.scrollTop = 0
          }), 0)
        }), [e]), null
      };
      var Qt = t(41179),
        Xt = t(83933);
      const Zt = e => {
        let {
          children: a
        } = e;
        return (0, f.jsx)("div", {
          className: "rockstargames-sites-gta-gen9aae4d33d1eecebdc9b489f8d7a1ad708",
          children: (0, f.jsx)("div", {
            className: "rockstargames-sites-gta-gen9c573fe5c7bdcc46c4d57ec4a2c275e3b",
            children: a
          })
        })
      };
      var Jt = t(83659);
      const es = e => {
          let {
            children: a,
            style: t,
            theme: s
          } = e;
          const [n, r] = (0, d.useState)(s);
          return (0, d.useEffect)((() => {
            s && r(s)
          }), [s]), (0, f.jsx)("div", {
            className: "rockstargames-sites-gta-gen9e5e0faf6ab9871fd60b958c6f7dcf519",
            style: t,
            "data-theme": n,
            children: a
          })
        },
        as = {
          videoPreview: "rockstargames-sites-gta-gen9a626ad482ff0be0336e75929516654d5",
          card: "rockstargames-sites-gta-gen9f93031694e202c791c00e5ae3497250a",
          info: "rockstargames-sites-gta-gen9dabce30c906fad181d7cc188f1632c04",
          title: "rockstargames-sites-gta-gen9fd87597d0f90ed6d8a2081da933f53bc",
          screencap: "rockstargames-sites-gta-gen9fd37974f16cd1f2376fef29d4af8d948",
          screencapLoaded: "rockstargames-sites-gta-gen9b8d4ef3e1a73c58f4002eab351d4eec2",
          gameTitle: "rockstargames-sites-gta-gen9a1fe577b937c0e16250bf38e9d775061"
        },
        ts = e => {
          let {
            video: a,
            size: t = 640
          } = e;
          const s = () => a.screencap.includes("akamai") ? `${a.screencap}?im=Resize=${t}` : a.screencap,
            [n] = (0, m.usePreloadImg)(s());
          return (0, f.jsx)("div", {
            className: [as.screencap, n ? as.screencapLoaded : ""].join(" "),
            style: {
              background: `url(${s()}) center/cover`
            }
          })
        },
        ss = e => {
          let {
            gameTitleNecessary: a = !0,
            openInNewWindow: t = !1,
            video: s,
            size: n,
            toExplicit: r
          } = e;
          const i = r ?? `/videos/${s.id}`,
            o = {
              className: as.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": i
            },
            c = (0, f.jsxs)("div", {
              className: as.card,
              children: [(0, f.jsx)(ts, {
                video: s,
                size: n
              }), (0, f.jsxs)("div", {
                className: as.info,
                children: [a ? (0, f.jsx)("div", {
                  className: as.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: s.game.title
                  }
                }) : "", (0, f.jsx)("h5", {
                  className: as.title,
                  dangerouslySetInnerHTML: {
                    __html: s.title
                  }
                })]
              })]
            });
          return t ? (0, f.jsx)("a", {
            href: i,
            target: "_blank",
            ...o,
            children: c
          }) : (0, f.jsx)(G.A, {
            to: i,
            ...o,
            children: c
          })
        },
        ns = {
          carousel: "rockstargames-sites-gta-gen9bc3f1abaac4c17c0e9aaac5fccfc6f7e",
          slidesContent: "rockstargames-sites-gta-gen9c4e301fb08e073f689a8dabd2bef9eb2",
          text: "rockstargames-sites-gta-gen9cdb5c063bfc35cfbaaaefc68a77c1b07",
          info: "rockstargames-sites-gta-gen9a4057ef942e10ebeedb1370b08c3c32b",
          active: "rockstargames-sites-gta-gen9e35688e0d87409e3aef95ffb624d94f4",
          title: "rockstargames-sites-gta-gen9e66c271fbbc8b6e431fc5d466c57479c",
          gameTitle: "rockstargames-sites-gta-gen9b5d3df350466b14e4b419bdb479b4064",
          videoTitle: "rockstargames-sites-gta-gen9ed4138b1e7fecd4b6d29f0e1bef1fdfd",
          cta: "rockstargames-sites-gta-gen9f40c40ed1bc4242a32bc0628eea34048",
          track: "rockstargames-sites-gta-gen9efe7112432da76c65f293853b4c942d1",
          disableClick: "rockstargames-sites-gta-gen9fcd11cd5895147a9e08f8f4026d68d94",
          items: "rockstargames-sites-gta-gen9d30be9a5f31ff7fabf20969eec3200f1",
          dragging: "rockstargames-sites-gta-gen9b335b03fce6834b86318f3d7cbf3fab6",
          dots: "rockstargames-sites-gta-gen9e0ca3ed410818f0961345606a96f03ee"
        },
        rs = (0, V.defineMessages)({
          learn_more: {
            id: "carousel_learn_more",
            defaultMessage: "Learn More"
          },
          watch_more: {
            id: "carousel_watch_more",
            defaultMessage: "Watch Now"
          }
        }),
        is = (0, re.g)((e => {
          let {
            videos: a
          } = e;
          const t = (0, m.useLocale)(),
            {
              formatMessage: s
            } = (0, V.useIntl)(),
            {
              track: n
            } = (0, g.useGtmTrack)(),
            {
              setBodyIsLocked: r
            } = (0, m.useBodyScrollable)("VideoCarousel"),
            [i, o] = (0, d.useState)(0),
            [c, l] = (0, d.useState)(0),
            u = (0, d.useRef)(null),
            p = (0, d.useRef)(null);
          (0, d.useEffect)((() => {
            if (!u.current || !p.current) return;
            const e = new(Fa())(u.current);
            e.get("press").set({
              time: 0
            }), e.get("tap").set({
              time: 150
            });
            const t = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
              s = () => {
                o(i - 1 < 0 ? 0 : i - 1), l(0)
              },
              n = () => {
                const e = i + 1 >= a.length - 1 ? a.length - 1 : i + 1;
                o(e), l(0)
              },
              c = e => {
                l(e.isFinal ? 0 : e.deltaX), "panleft" !== e.additionalEvent && "panright" !== e.additionalEvent || !p.current?.classList.contains(ns.dragging) || t() && r(!0)
              },
              d = () => {
                t() && r(!1), l(0)
              },
              m = e => {
                "press" === e.type && u.current?.classList.add(`${ns.disableClick}`), "tap" === e.type && (u.current?.classList.remove(`${ns.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
              },
              g = () => {
                t() && r(!1), u.current && u.current.classList.remove(`${ns.disableClick}`)
              },
              f = () => {
                t() && r(!1)
              };
            return p.current.addEventListener("transitionend", f), e.on("swiperight", s), e.on("swipeleft", n), e.on("pan", c), e.on("panend", d), e.on("press tap", m), e.on("pressup", g), () => {
              e.off("swiperight", s), e.off("swipeleft", n), e.off("pan", c), e.off("panend", d), e.off("press tap", m), e.off("pressup", g), p.current && p.current.removeEventListener("transitionend", f), l(0)
            }
          }), [u.current, i]);
          const b = e => {
            const a = "VI" === e.game?.titleSlug;
            return [e?.titleHomepage ?? e?.title, a ? "/VI" : `/videos/${e.id}`, a ? "_blank" : "_self", s(a ? rs.learn_more : rs.watch_more)]
          };
          return (0, f.jsxs)("section", {
            className: ns.carousel,
            children: [(0, f.jsx)("div", {
              className: ns.track,
              ref: u,
              children: (0, f.jsx)("div", {
                className: `${ns.items} ${0!==c?ns.dragging:""}`,
                ref: p,
                style: {
                  transform: `translateX(calc(-${100*i}% + ${c}px))`
                },
                children: a.map(((e, a) => {
                  const [t, s, n] = b(e);
                  return (0, f.jsx)(G.A, {
                    "data-gtm-category": "Carousel",
                    "data-gtm-action": "Click-through screencap",
                    "data-gtm-label": s,
                    to: s,
                    className: i === a ? ns.active : "",
                    role: "link",
                    title: t,
                    tabIndex: i === a ? 0 : -1,
                    target: n,
                    children: (0, f.jsx)(ts, {
                      video: e,
                      size: 1280
                    })
                  }, e.id)
                }))
              })
            }), (0, f.jsxs)("div", {
              className: ns.slidesContent,
              children: [(0, f.jsx)("div", {
                className: ns.text,
                children: a.map(((e, a) => {
                  const [s, r, o, c] = b(e);
                  return (0, f.jsxs)(G.A, {
                    className: [ns.info, a === i ? ns.active : ""].join(" "),
                    "data-gtm-category": "Carousel",
                    "data-gtm-action": "Click-through footer",
                    "data-gtm-label": r,
                    to: r,
                    role: "link",
                    title: s,
                    tabIndex: i === a ? 0 : -1,
                    target: o,
                    children: [(0, f.jsxs)("div", {
                      className: ns.title,
                      children: [(0, f.jsxs)("div", {
                        className: ns.gameTitle,
                        children: [e.game.title, "fr_fr" === t && " "]
                      }), (0, f.jsx)("h2", {
                        className: ns.videoTitle,
                        children: s
                      })]
                    }), (0, f.jsx)(ja.A, {
                      className: ns.cta,
                      onClick: (d = r, () => {
                        n({
                          event: "cta_watch_video",
                          text: "watch now",
                          link_url: d,
                          element_placement: "video carousel"
                        })
                      }),
                      children: c
                    })]
                  }, e.id);
                  var d
                }))
              }), (0, f.jsx)("section", {
                className: ns.dots,
                "aria-controls": "video-carousel",
                "aria-label": "video carousel buttons",
                role: "group",
                children: a.map(((e, a) => (0, f.jsx)("button", {
                  "aria-label": `Slide ${a+1}`,
                  "data-gtm-category": "Marquee",
                  "data-gtm-action": "Dot click",
                  "data-gtm-label": `Dot clicked to ${a}`,
                  onClick: () => o(a),
                  className: i === a ? ns.active : "",
                  type: "button"
                }, e.id)))
              })]
            })]
          })
        })),
        os = (0, V.defineMessages)({
          next_button_label: {
            id: "next_button_label",
            defaultMessage: "Next video page"
          },
          previous_button_label: {
            id: "previous_button_label",
            defaultMessage: "Previous video page"
          }
        }),
        cs = {
          img: "rockstargames-sites-gta-gen9d87037fda2ea106061c7a614036a89df",
          wide: "rockstargames-sites-gta-gen9dc444c089b89129c0a39bc61845d531f",
          imgContentful: "rockstargames-sites-gta-gen9b9f3c994ce8a97ac6530cf0a85e5abe0"
        };
      (0, m.importAll)(t(86751));
      const ds = e => {
          let {
            isWideCard: a = !1,
            size: s = 640,
            title: n,
            titleSlug: r
          } = e;
          const {
            isMobile: i
          } = (0, m.useWindowResize)(), o = (0, d.useMemo)((() => {
            let e = "";
            return a && (e = i ? t(24865)(`./${r}/mobile.jpg`) : t(53781)(`./${r}/desktop.jpg`)), e || (e = t(39294)(`./${r}.jpg`), e += `?im=Resize=${s}`), e
          }), [i, r]), [c] = (0, m.usePreloadImg)(o);
          let l = o;
          return (0, f.jsx)("div", {
            role: "img",
            "aria-label": n,
            style: {
              backgroundImage: `url(${l})`
            },
            className: [cs.img, c ? cs.startAnimation : "", a ? cs.wide : ""].join(" ")
          })
        },
        ls = {
          fobLink: "rockstargames-sites-gta-gen9d30ff40ba02b7ed14124da3ca9cd4f2b",
          wide: "rockstargames-sites-gta-gen9c9686ec502f78b05e47568667e90bd17"
        },
        ms = e => {
          let {
            game: a,
            to: t
          } = e;
          const {
            titleSlug: s,
            urlOfficial: n = ""
          } = a, r = ["VI"].includes(s.toUpperCase());
          return (0, f.jsx)(G.A, {
            "data-gtm-category": "Games",
            "data-gtm-action": "Game Click-through",
            "data-gtm-label": s,
            "data-testid": `${s}-gamecard`,
            to: t ?? n,
            target: "_self",
            className: [ls.fobLink, r ? ls.wide : ""].join(" "),
            reloadDocument: r,
            children: (0, f.jsx)(ds, {
              title: a.title,
              titleSlug: s,
              isWideCard: r,
              size: r ? 1740 : 480
            })
          })
        },
        gs = {
          videoList: "rockstargames-sites-gta-gen9bacddb57787eca7b621a046e6f23aaf5",
          sectionHeader: "rockstargames-sites-gta-gen9ad695c18d6276297e78924feea3e6201",
          arrowNav: "rockstargames-sites-gta-gen9c9b73b78d75dd740e918208a9d615796",
          items: "rockstargames-sites-gta-gen9ef63b0224f0cc9fa73a9c4549ad6c7e9",
          trackWrapper: "rockstargames-sites-gta-gen9bd79ab04bc93e3bcf79be808e0a06e9b",
          partial: "rockstargames-sites-gta-gen9ab95829b388545f21071fd5bb97c25bb",
          track: "rockstargames-sites-gta-gen9a4d3877b3cf6bff0abccdc561c0fe149",
          arrow: "rockstargames-sites-gta-gen9cabb1073f7b7f75b799c87d74cfaf0ad",
          previous: "rockstargames-sites-gta-gen9d7404262ef1f79bde0883b02110a4a5d",
          next: "rockstargames-sites-gta-gen9bfdf85a5867d26b52a0962be91170e36",
          disabled: "rockstargames-sites-gta-gen9dbe1b06efadb349825f7b9b1b2778c68"
        },
        us = (0, re.g)((e => {
          let {
            vids: a,
            games: t,
            title: s,
            gameTitleNecessary: n
          } = e;
          const r = (0, V.useIntl)(),
            {
              track: i
            } = (0, g.useGtmTrack)(),
            o = void 0 !== t ? "games" : "videos",
            [c, l] = (0, d.useState)(),
            [u, p] = (0, d.useState)(),
            [b, k] = (0, d.useState)(0),
            v = (0, d.useRef)(null),
            _ = (0, d.useRef)(null);
          (0, d.useEffect)((() => {
            p({
              nextEl: _.current,
              prevEl: v.current
            })
          }), [_, v]), (0, d.useEffect)((() => {
            const e = () => {
              const e = e => window.matchMedia(`(max-width: ${e})`).matches;
              let a = 4;
              e("768px") ? a = 1 : e("990px") || e("1440px") ? a = 2.2 : e("1920px") && (a = 3.2), k(a)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [b]);
          const h = e => {
            c?.slideTo(e)
          };
          let x;
          return x = "games" === o ? (0, f.jsx)(f.Fragment, {
            children: t.results.map(((e, a) => "775700as" !== e.id && (0, f.jsx)(Ta.qr, {
              className: gs.slide,
              onFocus: () => h(a),
              children: (0, f.jsx)(ms, {
                game: e,
                dontOverrideTo: !0,
                to: `/videos?type=game&gameId=${e.id}`
              })
            }, e.id)))
          }) : (0, f.jsx)(f.Fragment, {
            children: a.map(((e, a) => (0, f.jsx)(Ta.qr, {
              className: gs.slide,
              onFocus: () => h(a),
              children: (0, f.jsx)(ss, {
                video: e,
                gameTitleNecessary: n
              })
            }, e.id)))
          }), (0, f.jsxs)("section", {
            className: gs.videoList,
            children: [(0, f.jsxs)("h3", {
              className: gs.sectionHeader,
              children: [s, (0, f.jsxs)("div", {
                className: gs.arrowNav,
                children: [(0, f.jsx)("button", {
                  className: [gs.arrow, gs.previous].join(" "),
                  type: "button",
                  ref: v,
                  "aria-label": r.formatMessage(os.previous_button_label)
                }), (0, f.jsx)("button", {
                  className: [gs.arrow, gs.next].join(" "),
                  type: "button",
                  ref: _,
                  "aria-label": r.formatMessage(os.next_button_label),
                  onKeyDown: e => {
                    if ("Tab" === e.key && !e.shiftKey) {
                      const a = c?.slides[c?.activeIndex].querySelector('a, button, [role="button"]');
                      a && (e.preventDefault(), a.focus())
                    }
                  }
                })]
              })]
            }), (0, f.jsx)("div", {
              className: [gs.items, b % 1 != 0 ? gs.partial : ""].join(" "),
              children: (0, f.jsx)("div", {
                className: gs.trackWrapper,
                children: b && (0, f.jsx)(Ta.RC, {
                  className: gs.track,
                  slidesPerView: b,
                  spaceBetween: 24,
                  onInit: e => {
                    l(e)
                  },
                  grabCursor: !0,
                  navigation: u,
                  modules: [Ea.Vx],
                  slideClass: (0, m.classList)("swiper-slide"),
                  onSlideNextTransitionEnd: () => {
                    i({
                      event: "carousel_next",
                      element_placement: s?.toLowerCase() ?? ""
                    })
                  },
                  onSlidePrevTransitionEnd: () => {
                    i({
                      event: "carousel_previous",
                      element_placement: s?.toLowerCase() ?? ""
                    })
                  },
                  onSlideChangeTransitionEnd: () => {
                    i({
                      event: "carousel_swipe",
                      element_placement: s?.toLowerCase() ?? ""
                    })
                  },
                  children: x
                })
              })
            })]
          })
        })),
        fs = e => {
          let {
            children: a,
            ...t
          } = e;
          return (0, f.jsx)("span", {
            ...t,
            className: "rockstargames-sites-gta-gen9acd86b7f5778381df8fac4a3f7489f60",
            children: a
          })
        };
      var ps = t(45575),
        bs = t(43981),
        ks = t(48782),
        vs = t(950),
        _s = t(92041);
      const {
        Gen9CoreCarousel: hs,
        framer: xs,
        useTinaModuleFetchByIds: ys,
        withSimpleErrorBoundary: Ns
      } = n, js = {
        Card: ba,
        CardWithImageGallery: Ba,
        TextCard: Oa,
        ...n
      };
      var ws = function(e) {
        return e.extraSmall = "xs", e.small = "sm", e.medium = "md", e.large = "lg", e.extraLarge = "xl", e.frontOfBox = "fob", e.custom = "custom", e
      }(ws || {});
      const Ss = xs.withFadeIn(Ns((e => {
        let {
          cards: a = [],
          size: t,
          name: s,
          title: n,
          description: r,
          disclaimer: i,
          customSlidesPerView: o = null,
          theme: c = "none",
          cardSizeBreakpoints: m = {},
          customAspectRatio: g = "3/1",
          titleBadge: u = null,
          id: p = ""
        } = e;
        const b = (0, d.useRef)(null),
          k = $().map(a, "id"),
          v = ys({
            ids: k
          }),
          [_, h] = (0, d.useState)(o),
          [x] = (0, l.useSearchParams)(),
          [y, j] = (0, d.useState)(!1);
        (0, d.useEffect)((() => {
          let e;
          if (e = ws.frontOfBox, t === e) {
            const e = x.get("section");
            if (e && "games" === e && !y && (j(!0), b.current)) {
              const e = 100;
              window.scrollTo(0, b.current.offsetTop - e)
            }
          }
        }), []), (0, d.useEffect)((() => {
          if (!b.current) return;
          const e = () => {
            const e = o || window.getComputedStyle(b.current).getPropertyValue("--slides-per-view");
            h(e)
          };
          return window.addEventListener("resize", e), e(), () => {
            window.removeEventListener("resize", e)
          }
        }));
        const w = (0, d.useMemo)((() => {
          let e = 0;
          if (!v) return null;
          let a = "blank",
            s = !1;
          return v.forEach((e => {
            "cover-card" === e?.tina?.payload?.meta?.type && (a = e?.id, void 0 !== e?.tina?.payload?.content[0]?.excludeFromModal && (s = e.tina.payload.content[0].excludeFromModal))
          })), v.reduce(((r, i) => {
            if (i) {
              const {
                id: o,
                tina: d
              } = i, l = $().clone(d);
              $().set(l, "payload.meta.id", o);
              let m = k;
              m = k.filter((e => e !== a || e === a && !s)), r.push((0, f.jsx)(N.TinaParser, {
                components: js,
                tina: l,
                componentProps: {
                  deckProps: {
                    size: t
                  },
                  tina: l,
                  id: o,
                  position: e,
                  sectionTitle: n,
                  theme: c,
                  cardIds: m
                }
              }, o)), e += 1
            }
            return r
          }), [])
        }), [v, t]);
        return (0, f.jsxs)("div", {
          className: "rockstargames-sites-gta-gen9cf8eaaa96e41e0c9b5a5a1745ded9986",
          "data-theme": c,
          ref: b,
          id: p,
          children: [(0, f.jsx)(hs, {
            description: r,
            size: t,
            cardSizeBreakpoints: m,
            slideChildren: w,
            title: n,
            name: s,
            customSlidesPerView: _,
            customAspectRatio: g,
            titleBadge: u,
            theme: c
          }), i && (0, f.jsx)("div", {
            className: "rockstargames-sites-gta-gen9d6d0f9d842469dec608825829148dff6",
            children: (0, f.jsx)("span", {
              className: "rockstargames-sites-gta-gen9e22c0580e1e1d2471b4ca2e60e6b900f",
              children: (0, f.jsx)(qt, {
                html: i
              })
            })
          })]
        })
      })));
      var Cs = t(87330),
        Ts = t(1571),
        Es = t.n(Ts);
      const Ms = (e, a) => {
          let t = getComputedStyle(e).getPropertyValue(a);
          return t = t.replace("px", "").replace("rem", "").replace("em", ""), t = t.replace("vh", "").replace("vw", "").replace("vmin", "").replace("vmax", ""), t = t.replace("ms", "").replace("s", ""), Number(t)
        },
        Ls = e => ({
          x: void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
          y: void 0 !== e.changedTouches ? e.changedTouches[0].screenY : e.screenY
        }),
        Is = e => e.scrollHeight > e.clientHeight;

      function Ps(e, a) {
        const t = {
          ...e
        };
        return $().forOwn(e, ((e, s) => {
          if ("image" === s) {
            const e = t[s];
            t[s] = {
              ...e,
              prod: a
            }
          } else $().isObject(e) && !$().isArray(e) ? Ps(e, a) : $().isArray(e) && (t[s] = e.map((e => $().isObject(e) ? Ps(e, a) : e)))
        })), t
      }
      const zs = (0, m.withTranslations)((e => {
          let {
            active: a,
            styles: t,
            title: s,
            itemNumber: n,
            inModalMode: r,
            openModalMode: i,
            element: o,
            upNext: c,
            mobileMode: l,
            refDeck: m,
            components: u,
            tina: p,
            prevPage: b,
            nextPage: k,
            transitionStyle: v,
            selectedItemNumber: _,
            carouselTitle: x,
            sharedDraggingDelta: y,
            setSharedDraggingDelta: j
          } = e;
          const w = (0, V.useIntl)(),
            {
              track: S
            } = (0, g.useGtmTrack)(),
            C = (0, d.createRef)(),
            T = (0, d.createRef)(),
            E = (0, d.createRef)(),
            M = (0, d.createRef)(),
            L = (0, d.createRef)(),
            [I, P] = (0, d.useState)(!1),
            [z, A] = (0, d.useState)(0),
            [D, $] = (0, d.useState)(0),
            [B, O] = (0, d.useState)(0),
            [R, F] = (0, d.useState)(0),
            [G, H] = (0, d.useState)(0),
            [U, W] = (0, d.useState)(!1),
            [q, Y] = (0, d.useState)(0),
            [K, Q] = (0, d.useState)(0),
            [X, Z] = (0, d.useState)(0),
            [J, ee] = (0, d.useState)("700"),
            [ae, te] = (0, d.useState)(-1),
            [se, ne] = (0, d.useState)(0),
            [re, ie] = (0, d.useState)(0),
            [oe, ce] = (0, d.useState)(0),
            [de, le] = (0, d.useState)(!1),
            [me, ge] = (0, d.useState)(""),
            [ue, fe] = (0, d.useState)(null),
            [pe, be] = (0, d.useState)(!1),
            [ke, ve] = (0, d.useState)(null),
            [_e, he] = (0, d.useState)(!1),
            [xe, ye] = (0, d.useState)(!1),
            Ne = (0, N.useTinaPayload)(),
            je = p?.payload?.meta?.cdn ?? !1 ?? Ne?.meta?.prod ?? !1,
            we = (0, N.useTranslations)({
              payload: p?.payload,
              variables: p?.variables
            }),
            Se = we?.meta ?? {},
            Ce = Ps(we?.content?.[0], je),
            Te = (0, d.useMemo)((() => Ce?.images?.[0]?.image?.badge), [Ce]),
            Me = (0, d.useMemo)((() => Ce.title ?? s ?? Se?.title), [s, Se?.title, Ce.title]),
            Le = (0, h.S1)({
              alt: Ce?.images?.[0]?.image?.alt ?? "",
              ariaLabel: Ce?.images?.[0]?.image?.alt ?? "",
              sources: Ce?.images?.[0]?.image?.sources ?? [],
              prod: je
            }),
            Ie = Le?.src?.mobile ?? Le?.src?.desktop ?? !1,
            Pe = (0, d.useMemo)((() => Se?.foreignId), [Se]),
            ze = (0, d.useMemo)((() => Se?.foreignTitle), [Se]),
            [Ae, De] = (0, d.useState)(0),
            [$e, Be] = (0, d.useState)(0),
            [Ve, Oe] = (0, d.useState)(0),
            [Re, Fe] = (0, d.useState)(0),
            [Ge, He] = (0, d.useState)(!1),
            [Ue, We] = (0, d.useState)(0),
            [qe, Ye] = (0, d.useState)(20),
            [Ke, Qe] = (0, d.useState)(null),
            [Xe, Ze] = (0, d.useState)(!1);
          let Je = r ? -1 : 0;
          const aa = (0, d.useCallback)((e => {
              if (!0 === U || !r && !l || pe) return;
              const a = Ls(e);
              De(a.x), Be(a.y)
            }), [U, r]),
            ta = e => {
              aa(e)
            },
            sa = e => {
              if (!0 === U || 0 === Ae || !r && !l || pe) return;
              const a = Ls(e),
                t = a.x > Ae ? 1 : -1,
                s = Math.abs(Ae - a.x);
              r && !l && s > qe ? (Ze(!0), ge(t > 0 ? "prev" : "next"), ra()) : (He(!0), We(s * t), j(s * t))
            },
            na = e => {
              if (!0 === U || !r && !l || pe) return;
              const a = Ls(e),
                t = a.x > Ae ? 1 : -1,
                s = Math.abs(Ae - a.x),
                n = Math.abs($e - a.y);
              r && !l ? (ra(), ge("")) : s > qe && n < 25 ? (Ze(!0), ge(t > 0 ? "prev" : "next"), ra()) : ra()
            },
            ra = () => {
              W(!0), De(0), Be(0), He(!1), We(0), j(0)
            },
            ia = e => {
              e ? (r || P(!0), r || l || (clearTimeout(ae), te(setTimeout((() => {
                S({
                  event: "card_title_hover",
                  card_name: Me,
                  card_id: n,
                  position: n,
                  view_name: `${Pe}/${ze}`,
                  source_content_id: Pe,
                  source_content_name: ze
                })
              }), 1e3)))) : (r || P(!1), r || l || clearTimeout(ae))
            };
          return (0, d.useEffect)((() => {
            let e = q;
            I ? e = 0 : r && !l && (e = q), A(e)
          }), [I, l, r, D, R, K, X, B, q]), (0, d.useEffect)((() => {
            P(!(!r || !l))
          }), [r, l]), (0, d.useEffect)((() => {
            r && a && S({
              event: "virtualPageview",
              display_type: l ? "mobile" : "desktop",
              view_name: `${Pe}/${Me}`,
              source_content_id: Pe,
              source_content_name: ze
            })
          }), [r, a]), (0, d.useEffect)((() => {
            const e = Es()(((e, a) => {
              let t = 18;
              if (e?.documentElement && (t = Ms(e?.documentElement, "--root-font-size")), re !== a.innerHeight && ie(a.innerHeight), m?.current) {
                Z(Ms(m.current, "--eventDeck-marginSm") * t);
                const e = t * Ms(m?.current, "--eventDeck-modalGutters"),
                  s = a?.innerWidth,
                  n = s - 2 * e;
                $(n), M.current && l && O(n), F(Ms(m.current, "--eventDeck-itemSize") * t), ce(Ms(m.current, "--eventDeck-phaseOneTransitionDuration"));
                const r = Ms(m?.current, "--eventDeck-itemImageTitleMargins") * t,
                  i = T?.current?.clientHeight,
                  o = i + r;
                Number.isNaN(o) || Y(o), ne(Ms(m?.current, "--eventDeck-headerHeight") * t)
              }
              let s = Math.min(700, a.innerWidth);
              l || (s = 900), ee(`${s}`)
            }), 300);
            return window.addEventListener("resize", (() => {
              e(document, window)
            })), e(document, window), () => {
              window.removeEventListener("resize", (() => {
                e(document, window)
              }))
            }
          }), [m, l]), (0, d.useEffect)((() => {
            if (C.current) {
              const e = C.current.clientHeight;
              Number.isNaN(e) || Q(e)
            }
          }), [C]), (0, d.useEffect)((() => {
            if (r && l && M.current && (M.current.style.transform = "scale(1) translate3d(0, 0, 0)"), !r && l && M.current) {
              const e = 228 / D;
              M.current.style.transform = `scale(${e}) translate3d(0, 0, 0)`
            }!l && M.current && (M.current.style.transform = null)
          }), [r, l, D, B]), (0, d.useEffect)((() => {
            const e = .5 * D,
              a = re - se - 3 * X;
            H(D - (e < a ? e : a))
          }), [D, X, re]), (0, d.useEffect)((() => {
            "next" === me ? (k(null, !0), ge("")) : "prev" === me && (b(null, !0), ge(""))
          }), [me]), (0, d.useEffect)((() => {
            Oe(0), Fe(0)
          }), [l]), (0, d.useEffect)((() => {
            l ? Ye(r ? 35 : 20) : r && Ye(50)
          }), [r, l]), (0, d.useEffect)((() => {
            let e = [],
              a = 0,
              s = 0;
            if (null !== t?.transform) {
              e = t.transform.split(",");
              const n = e[0].split("(");
              a = Number(n[1].replace("px", "")), Oe(a), s = Number(e[1].replace("px", "")), Fe(s)
            }
          }), [t]), (0, d.useEffect)((() => {
            if (!U) return;
            clearTimeout(ue);
            const e = setTimeout((() => {
              W(!1), De(0)
            }), 200);
            fe(e)
          }), [U, 200]), (0, d.useEffect)((() => {
            if (!Xe) return;
            clearTimeout(Ke);
            const e = setTimeout((() => {
              Ze(!1)
            }), 1e3);
            Qe(e)
          }), [Xe]), (0, d.useEffect)((() => {
            r && clearTimeout(ae), setTimeout((() => {
              le(!de)
            }), oe)
          }), [r]), (0, d.useEffect)((() => (document.body.addEventListener("mouseleave", ra), () => {
            document.body.removeEventListener("mouseleave", ra)
          })), []), (0, d.useEffect)((() => {
            L.current ? he(Is(L.current)) : he(!1), void 0 !== o && o.current ? ye(Is(o.current)) : ye(!1)
          }), [o, L, a, r, de]), Ce ? (0, f.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9c02ee363d47108460ab7916fc955cd9b",
            ref: o,
            "data-item-position": n,
            "data-modal-mode": r,
            "data-active-item": a,
            "data-up-next": c,
            "data-transition": Ge || 0 !== y ? "none" : v,
            "data-scrollable": xe,
            style: {
              ...t,
              transform: r && a && !l ? `translate3d(${Ve+Ue}px, ${Re}px, 0)` : l && !r ? `translate3d(${Ve+y}px, ${Re}px, 0)` : t?.transform
            },
            onClick: e => {
              Xe || (r ? r && !l && (n < _ ? b(e, !0) : n > _ && k(e, !0)) : i(e))
            },
            onMouseEnter: () => ia(!0),
            onMouseLeave: () => ia(!1),
            onTouchStart: ta,
            onTouchMove: sa,
            onTouchEnd: na,
            onMouseDown: ta,
            onMouseMove: sa,
            onMouseUp: na,
            onKeyUp: e => {
              "Enter" === e.key && (r || i(e))
            },
            tabIndex: Je,
            "aria-label": r ? w.formatMessage(ea.events_deck_modal_group_label) : Me,
            role: r ? "dialog" : "presentation",
            children: [(0, f.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9dee75b8e3614051c8f0fc97e373e78e5",
              "data-full-header": I,
              ref: E,
              style: {
                height: r && l ? `${D}px` : null,
                width: r && l ? `${D}px` : null
              },
              children: [Ie && (0, f.jsx)("img", {
                ref: M,
                src: `${Le?.src?.mobile??Le?.src?.desktop}?im=Resize,width=${J}`,
                alt: Le?.alt,
                style: {
                  width: 0 !== B && l ? `${B}px` : null,
                  height: 0 !== B && l ? `${B}px` : null
                }
              }), (0, f.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9dc279f97c134d6e7d30602288b8b10ae",
                "aria-hidden": "true",
                style: {
                  transform: !l || l && r ? `translate3d(0, ${z}px, 0)` : null
                },
                children: [Te && (0, f.jsx)("div", {
                  className: "rockstargames-sites-gta-gen9cfe252d5613a21c1d308c98566cabd21",
                  ref: C,
                  children: (0, f.jsx)(Ee, {
                    text: Te
                  })
                }), (0, f.jsx)("span", {
                  className: "rockstargames-sites-gta-gen9b311a78aea53383ab6bd5cbccb52ceeb",
                  ref: T,
                  "aria-hidden": "true",
                  children: Me
                })]
              })]
            }), (0, f.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9d212586e74ea4b4fe934beed9e339f78",
              ref: L,
              "aria-hidden": !r,
              onScroll: () => {
                be(!0), ra(), clearTimeout(ke);
                const e = setTimeout((() => {
                  be(!1)
                }), 100);
                ve(e)
              },
              style: {
                top: r && l ? `${D}px` : null,
                width: r && !l && a ? `${G}px` : null,
                touchAction: _e || l ? "unset" : "none"
              },
              children: [Me && (0, f.jsx)("span", {
                className: "rockstargames-sites-gta-gen9da9ef865674c108ffd53cfab2ed2971a",
                children: Me
              }), (0, f.jsx)("div", {
                className: "rockstargames-sites-gta-gen9abad8b0c98a7216d91b672492397e6a6",
                children: (0, f.jsx)(N.TinaParser, {
                  components: u,
                  tina: {
                    meta: Se,
                    payload: {
                      content: Ce?.content
                    }
                  }
                })
              })]
            })]
          }) : null
        })),
        As = "rockstargames-sites-gta-gen9eff7810cc71a3b63bfc3e58cbe4a0279",
        Ds = e => {
          let {
            prevPage: a,
            prevBtnDisabled: t,
            nextPage: s,
            nextBtnDisabled: n,
            selectedItemNumber: r,
            itemsData: i,
            closeModalMode: o,
            inModalMode: c,
            controlsHidden: d
          } = e;
          const l = (0, V.useIntl)();
          return (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9a13ee8af1dd8f09d28c65e56abd782ef",
              "aria-hidden": d || "false",
              children: [(0, f.jsx)("button", {
                className: As,
                type: "button",
                onClick: a,
                disabled: t,
                "aria-label": c ? l.formatMessage(ea.events_deck_modal_previous_aria_label) : l.formatMessage(ea.events_deck_previous_aria_label)
              }), (0, f.jsxs)("span", {
                className: "rockstargames-sites-gta-gen9a6b11adaa46a0c2acc5893d2f5da04f1",
                "aria-hidden": !c,
                "aria-label": l.formatMessage(ea.events_deck_paging_label, {
                  currentPage: r + 1,
                  totalPages: i.length
                }),
                children: [r + 1, (0, f.jsx)("span", {
                  className: "rockstargames-sites-gta-gen9aad28b229162f1d7494a2de3a3b6b547"
                }), i.length]
              }), (0, f.jsx)("button", {
                className: As,
                type: "button",
                onClick: s,
                disabled: n,
                "aria-label": c ? l.formatMessage(ea.events_deck_modal_next_aria_label) : l.formatMessage(ea.events_deck_next_aria_label)
              })]
            }), (0, f.jsx)("button", {
              className: "rockstargames-sites-gta-gen9fb0b7933375b44858b7e92cdea86ee81",
              type: "button",
              onClick: o,
              "aria-label": l.formatMessage(ea.events_deck_modal_close_label),
              "aria-hidden": !c,
              tabIndex: c ? 0 : -1
            })]
          })
        },
        $s = (0, V.withIntl)((e => {
          const {
            setBodyIsLocked: a
          } = (0, m.useBodyScrollable)("EventsDeck"), {
            title: t
          } = e, {
            track: s
          } = (0, g.useGtmTrack)(), [n, r] = (0, d.useState)(!1), i = (() => {
            const {
              data: e
            } = (0, m.useQuery)(Na.TinaModulesList, {
              variables: {
                type: "gtao-event-card",
                orderBy: "priority",
                orderDirection: "desc"
              }
            }), a = e?.tinaModulesList?.results, t = $().map(a, "id");
            return (0, Ne.X)({
              ids: t
            })
          })(), [o, l] = (0, d.useState)([]), [u, p] = (0, d.useState)(null), [b, k] = (0, d.useState)(0), [v, _] = (0, d.useState)(window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth), [h, x] = (0, d.useState)(!1), y = (0, d.createRef)(), [j, w] = (0, d.useState)(null), S = (0, d.createRef)(), C = (0, d.createRef)(), [T, E] = (0, d.useState)([]), [M, L] = (0, d.useState)(!0), [I, P] = (0, d.useState)(!1), [z, A] = (0, d.useState)(!1), [D, V] = (0, d.useState)([]), [O, R] = (0, d.useState)(404), [F, G] = (0, d.useState)(808), [H, U] = (0, d.useState)(672), [W, q] = (0, d.useState)(336), [Y, K] = (0, d.useState)(0), [Q, X] = (0, d.useState)(0), [Z, J] = (0, d.useState)(0), [ee, ae] = (0, d.useState)(0), [te, se] = (0, d.useState)(0), [ne, re] = (0, d.useState)(!1), ie = !!(0, m.usePrevious)(ne), [oe, ce] = (0, d.useState)(window.innerWidth), [de, le] = (0, d.useState)(0), [me, ge] = (0, d.useState)(0), [ue, fe] = (0, d.useState)(0), [ke, ve] = (0, d.useState)(0), [_e, he] = (0, d.useState)(0), [xe, ye] = (0, d.useState)(0), [je, we] = (0, d.useState)(0), [Ce, Te] = (0, d.useState)(0), [Ee, Me] = (0, d.useState)(-1e3), [Le, Ie] = (0, d.useState)(0), [Pe, ze] = (0, d.useState)(50), [Ae, De] = (0, d.useState)(0), [$e, Be] = (0, d.useState)(!1), [Ve, Oe] = (0, d.useState)(768), [Re, Fe] = (0, d.useState)(!1), [Ge, He] = (0, d.useState)(!1), [Ue, We] = (0, d.useState)(!1), [qe, Ye] = (0, d.useState)(!1), [Ke, Qe] = (0, d.useState)(!1), [Xe, Ze] = (0, d.useState)(1e3), [Je, ea] = (0, d.useState)(1.2), [aa, ta] = (0, d.useState)(0), [sa, na] = (0, d.useState)(!1), [ra, ia] = (0, d.useState)(!1), [oa, ca] = (0, d.useState)(!0), [da, la] = (0, d.useState)(!1), [ma, ga] = (0, d.useState)(!1), [ua, fa] = (0, d.useState)(null), [pa, ba] = (0, d.useState)(100), [ka, va] = (0, d.useState)(!1), [_a, ha] = (0, d.useState)({}), [xa, ya] = (0, d.useState)(""), [ja, wa] = (0, d.useState)(0), [Sa, Ca] = (0, d.useState)(!1), [Ta, Ea] = (0, d.useState)(!1), [Ma, La] = (0, d.useState)(0), [Ia, Pa] = (0, d.useState)(0), [za, Aa] = (0, d.useState)(100), [Da, $a] = (0, d.useState)(!1), [Va, Oa] = (0, d.useState)(!1), Ra = () => oe * de + Pe, Fa = () => !1 === $e ? Je : 1, Ga = e => e === je - 1 || e === je + 1, Ha = () => {
            let e = -1 * xe;
            return e = -1 * xe - ke, e
          }, Ua = function(e) {
            let a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (!0 === $e) return 0;
            const t = e.itemNumber % 2 == 0,
              s = O * Je;
            if (!0 === t && 0 !== e.itemNumber) {
              const t = Ms(e?.element?.current, "top");
              let n = t - Z;
              return !1 === a && (n -= t), -1 * (.5 * s + n) + aa
            }
            return Z - .5 * s + aa
          }, Wa = function(e, a) {
            let t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              s = Ha();
            !1 === t && (s = 0);
            const n = oe * de,
              r = !1 === $e ? O * Fa() : n;
            return e.inModalMode && $e ? -1 === a ? Ra() * (je - e.itemNumber) * -1 - e.styles.left : Ra() * (e.itemNumber - je) - e.styles.left : -1 === a ? -1 * e.styles.left - r - Pe + s : n - e.styles.left + Pe + s
          }, qa = (e, a, t) => {
            -1 === a && (P(!1), L(!0)), P(!1 === t && e >= a || !0 === t && e + 1 === a), L(e <= 0)
          }, Ya = function(e) {
            let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (ma || da) return;
            if (ga(!0), ne) return void
            function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (je + 1 >= o.length) return;
              const a = T[je + 1]?.tina?.payload?.meta?.title ?? `card-${je+1}`;
              s({
                event: e ? "modal_swipe" : "modal_next",
                card_name: a,
                card_id: je + 1,
                position: je + 1,
                view_name: `${T[je+1].source_content_id}/${a}`,
                source_content_id: T[je + 1].source_content_id,
                source_content_name: T[je + 1].source_content_name
              }), qa(je + 1, o.length, !0), $e ? $e && E(T.map((e => {
                e.itemNumber === je - 1 ? e.upNext = !1 : e.itemNumber === je + 2 ? e.upNext = !0 : e.itemNumber === je + 1 ? e.active = !0 : e.itemNumber === je && (e.upNext = !0, e.active = !1);
                const a = e.styles.transform.replace("translate3d(", "").split(",");
                let t = Number(a[0].replace("px", ""));
                t -= Ra();
                const s = `translate3d(${t}px,${a[1]},${a[2]}`;
                return e.styles = {
                  ...e.styles,
                  transform: s
                }, e
              }))) : E(T.map((e => (e.itemNumber === je - 1 ? e.upNext = !1 : e.itemNumber === je + 2 ? e.upNext = !0 : e.itemNumber === je + 1 ? (e.active = !0, e.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${Ha()}px, ${aa}px, 0) scale(1)`
              }) : e.itemNumber === je && (e.upNext = !0, e.active = !1, e.styles = {
                ...e.styles,
                transform: `translate3d(${Wa(e,-1)}px, ${Ua(e)}px, 0) scale(${Fa()})`
              }), e)))), we(je + 1)
            }(a);
            const n = _e + 1;
            if (!(n > te))
              if (s({
                  event: a ? "carousel_swipe" : "carousel_next",
                  element_placement: t?.toLowerCase() ?? ""
                }), qa(n, te, !1), $e) {
                let e = n * W * -1;
                e < Ee && (e = Ee, P(!0), L(!1), he(te)), he(n), E(T.map((a => (a.styles = {
                  ...a.styles,
                  transform: `translate3d(${e}px, 0, 0)`
                }, a))))
              } else {
                let e = xe - Q;
                he(n), e < Ee && (e = Ee, P(!0), L(!1), he(te)), ye(e)
              }
          }, Ka = function(e) {
            let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (ma || da) return;
            if (ga(!0), !0 === ne) return void
            function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (ma) return;
              if (je - 1 < 0) return;
              const a = T[je - 1]?.tina?.payload?.meta?.title ?? "card-" + (je - 1);
              s({
                event: e ? "modal_swipe" : "modal_previous",
                element_placement: t?.toLowerCase(),
                card_name: a,
                card_id: je - 1,
                position: je - 1,
                view_name: `${T[je-1].source_content_id}/${a}`,
                source_content_id: T[je - 1].source_content_id,
                source_content_name: T[je - 1].source_content_name
              }), qa(je - 1, o.length, !0), $e || E(T.map((e => (e.itemNumber === je + 1 ? e.upNext = !1 : e.itemNumber === je - 2 ? e.upNext = !0 : e.itemNumber === je ? (e.upNext = !0, e.active = !1, e.styles = {
                ...e.styles,
                transform: `translate3d(${Wa(e,1)}px, ${Ua(e)}px, 0) scale(${Fa()})`
              }) : e.itemNumber === je - 1 && (e.active = !0, e.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${Ha()}px, ${aa}px, 0) scale(1)`
              }), e)))), $e && E(T.map((e => {
                e.itemNumber === je + 1 ? e.upNext = !1 : e.itemNumber === je - 2 ? e.upNext = !0 : e.itemNumber === je ? (e.upNext = !0, e.active = !1) : e.itemNumber === je - 1 && (e.active = !0);
                const a = e.styles.transform.replace("translate3d(", "").split(",");
                let t = Number(a[0].replace("px", ""));
                t += Ra();
                const s = `translate3d(${t}px,${a[1]},${a[2]}`;
                return e.styles = {
                  ...e.styles,
                  transform: s
                }, e
              }))), we(je - 1)
            }(a);
            const n = _e - 1;
            if (!(n < 0))
              if (s({
                  event: a ? "carousel_swipe" : "carousel_previous",
                  element_placement: t?.toLowerCase()
                }), qa(n, te, !1), $e) {
                let e = n * W * -1;
                e > 0 && (e = 0, L(!0), P(!1), he(0)), he(n), E(T.map((a => (a.styles = {
                  ...a.styles,
                  transform: `translate3d(${e}px, 0, 0)`
                }, a))))
              } else {
                let e = xe + Q;
                he(n), (e > 0 || 0 === e || -1 * e < F) && (e = 0, L(!0), P(!1), he(0)), ye(e)
              }
          }, Qa = e => {
            if (Sa || ne || $e) return;
            const a = Ls(e);
            wa(a.x)
          }, Xa = e => {
            if (Sa || 0 === ja || ne || $e) return;
            const a = Ls(e),
              t = a.x > ja ? 1 : -1;
            let s = Math.abs(ja - a.x) * t;
            (0 === _e && 1 === t || _e === te && -1 === t) && (s *= .35), Ea(!0), La(s)
          }, Za = e => {
            if (Sa || ne || $e) return;
            const a = Ls(e),
              t = a.x > ja ? 1 : -1,
              s = Math.abs(ja - a.x);
            ya(s > za ? t > 0 ? "prev" : "next" : ""), Ja()
          }, Ja = () => {
            Ca(!0), wa(0), La(0), Ea(!1)
          }, et = e => {
            Ta && (Za(e), Ea(!1))
          }, at = function(e, a) {
            let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            return e.map(((e, s) => {
              let n = s * W,
                r = s;
              !1 === $e && (r = Math.ceil(.5 * s) + 1, s > 0 && (n = 2 === r ? H : H + W * (r - 2)));
              const i = D[s];
              return i?.current && (i.current.scrollTop = 0), {
                ...e,
                mobileMode: $e,
                itemNumber: s,
                columnNumber: r,
                inModalMode: !1,
                upNext: !0,
                active: !1,
                openModalMode: st,
                element: i,
                transitionStyle: a,
                styles: {
                  left: n,
                  transform: "" === t ? null : t,
                  height: null,
                  top: null
                }
              }
            }))
          }, tt = () => {
            const e = T[je]?.tina?.payload?.meta?.title ?? `card-${je}`;
            if (s({
                event: "modal_close",
                element_placement: t?.toLowerCase(),
                card_name: e,
                card_id: je,
                position: je,
                view_name: `${T[je].source_content_id}/${e}`,
                source_content_id: T[je].source_content_id,
                source_content_name: T[je].source_content_name
              }), $e) {
              let e = je * W * -1;
              e < Ee && (e = Ee, P(!0), L(!1), he(te)), he(je), qa(je, te, !1), E(at(o, "cardClose", `translate3d(${e}px, 0, 0)`))
            } else {
              E(at(o, "cardClose"));
              const e = Math.ceil((T[je].columnNumber + 1) / Y) - 1;
              he(e);
              let a = e * Q * -1;
              Ae < me ? (a = 0, L(!0), P(!0), he(0)) : a < Ee ? (a = Ee, L(!1), P(!0), he(te)) : qa(e, te, !1), ye(a), we(0)
            }
            S.current.style.transform = "translate(0px, 0px)", S.current.style.transition = "all var(--eventDeck-transitionCardClose)", na(!1), Ye(!1), re(!1), He(!1), Fe(!1), Qe(!1), setTimeout((() => {
              We(!0)
            }), Xe)
          };
          (0, d.useEffect)((() => {
            !1 !== Ue && (We(!1), na(!1), j.style.zIndex = null, E(T.map((e => (e.transitionStyle = "", e)))))
          }), [Ue]);
          const st = e => {
            setTimeout((() => {
              ha(e), va(!0)
            }), 1)
          };
          (0, d.useEffect)((() => {
            if (!ka) return;
            if (va(!1), ma) return;
            we(Number(_a?.target?.dataset?.itemPosition)), He(!0), la(!0), oa && ca(!1);
            const e = T[_a?.target?.dataset?.itemPosition].source_content_id,
              a = T[_a?.target?.dataset?.itemPosition].source_content_name,
              n = T[_a?.target?.dataset?.itemPosition]?.tina?.payload?.meta?.title;
            s({
              event: "card_click",
              element_placement: t?.toLowerCase(),
              card_name: n ?? `card-${je}`,
              card_id: _a?.target?.dataset?.itemPosition,
              position: _a?.target?.dataset?.itemPosition,
              view_name: `${e}/${n}`,
              source_content_id: e,
              source_content_name: a
            })
          }), [ka]), (0, d.useEffect)((() => {
            if (!Ge || ne) return;
            He(!1);
            const e = (() => {
              const e = j?.getBoundingClientRect().top;
              return ta(-1 * (e - b)), -1 * (e - 140)
            })();
            $e && E(T.map((e => {
              const a = e.itemNumber > je + 3 || e.itemNumber < je - 3;
              return e.styles = {
                ...e.styles,
                display: a ? "none" : null,
                transition: a ? "none" : null
              }, e
            }))), j.style.zIndex = "var(--eventDeck-zIndexOverlay)", na(!0), S.current && (S.current.style.transition = "all var(--eventDeck-transitionCardOpen)", S.current.style.transform = `translate(${-1*ke}px, ${e}px)`), Ye(!0), setTimeout((() => {
              Fe(!0)
            }), 1)
          }), [Ge]);
          const nt = () => {
            E(T.map(((e, a) => {
              e.active = a === je, e.inModalMode = !0, e.transitionStyle = "cardOpen", $e && (e.upNext = Ga(e.itemNumber));
              const t = !$e;
              let s = 0;
              if ($e) {
                const e = Ce + 5 * b;
                s = window.innerHeight - e
              }
              return e.itemNumber < je ? e.styles = {
                ...e.styles,
                height: $e ? `${s}px` : null,
                transform: `translate3d(${Wa(e,-1,t)}px, ${aa}px, 0) scale(${Fa()})`
              } : e.itemNumber > je ? e.styles = {
                ...e.styles,
                height: $e ? `${s}px` : null,
                transform: `translate3d(${Wa(e,1,t)}px, ${aa}px, 0) scale(1)`
              } : e.itemNumber === je && (e.styles = $e ? {
                ...e.styles,
                height: `${s}px`,
                transform: `translate3d(${-1*e.styles.left}px, ${aa}px, 0) scale(1)`
              } : {
                left: 0,
                top: 0,
                transform: `translate3d(${Ha()}px, ${aa}px, 0) scale(1)`
              }), e
            })))
          };
          (0, d.useEffect)((() => {
            !1 !== Re && !0 !== ne && (re(!0), Fe(!1), qa(je, T.length, !0), S.current && (S.current.style.transition = "all var(--eventDeck-transitionCardOpen)", S.current.style.transform = `translate(${-1*ke}px, ${aa}px)`), nt(), $e ? (ye(0), la(!1), ia(!0)) : Qe(!0))
          }), [Re]), (0, d.useEffect)((() => {
            ra && (ia(!1), E(T.map((e => ("none" === e.styles.display && (e.styles.display = null, e.styles.transition = null), e)))))
          }), [ra]);
          const rt = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            E(T.map((a => {
              if (a.upNext = Ga(a.itemNumber), a.itemNumber !== je) {
                let e = Wa(a, 1);
                a.itemNumber < je && (e = Wa(a, -1)), a.styles = {
                  ...a.styles,
                  transform: `translate3d(${e}px, ${Ua(a)}px, 0) scale(${Fa()})`
                }
              } else a.itemNumber === je && !$e && e && (a.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${Ha()}px, ${aa}px, 0) scale(1)`
              });
              return a
            })))
          };
          (0, d.useEffect)((() => {
            !1 !== Ke && !0 !== $e && (Qe(!1), setTimeout((() => {
              rt(), la(!1)
            }), 1))
          }), [Ke]), (0, d.useEffect)((() => {
            E(at(o, ""))
          }), [H, W, o]), (0, d.useEffect)((() => {
            const e = window.navigator?.userAgentData?.platform || window.navigator?.platform;
            $a(["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(e))
          }), []), (0, d.useEffect)((() => {
            const e = ie !== ne;
            ne ? (e && a(!0), Da && Oa(!0)) : Ta || ne || (e && a(!1), Da && Va && Oa(!1))
          }), [ne, Ta]), (0, d.useEffect)((() => {
            if (!ma) return;
            clearTimeout(ua);
            const e = setTimeout((() => {
              ga(!1)
            }), pa);
            fa(e)
          }), [ma]), (0, d.useEffect)((() => {
            h && setTimeout((() => {
              x(!1)
            }), 3e3)
          }), [h]), (0, d.useEffect)((() => {
            x(!0), ye(0), he(0);
            let e = Math.ceil(Math.ceil(Ae / W) / Y);
            $e && (e = T.length - 1), e < 0 && (e = 1), qa(0, e, !1), ne && tt()
          }), [$e]), (0, d.useEffect)((() => {
            S.current && !ne && (S.current.style.transform = "")
          }), [S, $e, ne]), (0, d.useEffect)((() => {
            const e = (i ?? []).map((e => {
              let a = null;
              return "FeaturedEventInfo" === e?.tina?.payload?.content[0]?._template && e?.tina?.variables?.keys?.meta && (a = e?.tina?.variables?.keys?.meta?.title), {
                ...e,
                title: a,
                source_content_id: e?.tina?.payload?.meta?.foreignId,
                source_content_name: e?.tina?.payload?.meta?.foreignTitle,
                view_name: `${e?.tina?.payload?.meta?.foreignId}/${e?.tina?.payload?.meta?.foreignTitle}`
              }
            }));
            l(e)
          }), [i]), (0, d.useEffect)((() => {
            V(o.map((() => (0, d.createRef)())))
          }), [o]), (0, d.useEffect)((() => {
            const e = e => {
              const {
                key: a
              } = e;
              "ArrowLeft" === a ? Ka(null, !1) : "ArrowRight" === a ? Ya(null, !1) : "Escape" === a && ne && tt()
            };
            return document.addEventListener("keydown", e), () => {
              document.removeEventListener("keydown", e)
            }
          }), [ma, da, ne, S]), (0, d.useEffect)((() => {
            if (S.current) {
              let e = 0;
              e = S?.current?.clientHeight, e += Ms(S?.current, "margin-top"), e += Ms(S?.current, "margin-bottom"), Te(e)
            }
          }), [S, C]), (0, d.useEffect)((() => {
            ne && (() => {
              const e = j?.getBoundingClientRect().top,
                a = -1 * (e - b);
              if (E(T.map((e => {
                  if (e.styles.transform) {
                    const t = e.styles.transform.split(","),
                      s = `${t[0]}, ${a}px,${t[2]}`;
                    e.styles = {
                      ...e.styles,
                      transform: s
                    }
                  }
                  return e
                }))), S.current) {
                const a = -1 * (e - b);
                S.current.style.transform = `translate(${-1*ke}px, ${a}px)`
              }
            })()
          }), [$e, ne, aa]), (0, d.useEffect)((() => {
            ne || (Ae < de * oe && 0 === _e ? (ye(0), P(!0), L(!0)) : xe < Ee ? (P(!0), L(!1), he(te), ye(Ee)) : xe < 0 && (P(!1), he(te - 1)), Ae > de * oe && I && P(!1))
          }), [Ee]), (0, d.useEffect)((() => {
            if (y.current) {
              w(y.current);
              const e = Ms(document.documentElement, "--root-font-size"),
                a = Ms(y.current, "--eventDeck-modalGutters") * e,
                t = Ms(y.current, "--eventDeck-collapsedMaxWidth");
              fe(t);
              let s = oe - 2 * a;
              s > t && (s = t), ge(s), le(s / oe);
              const n = 2 * a + s;
              let r = 0;
              n < oe && (r = .5 * (oe - n)), ve(r);
              let i = Ms(y.current, "--eventDeck-modalBottomGutter");
              i *= e;
              const c = window.innerHeight - (Ce + i);
              J(.5 * s < c ? s / 4 : .5 * c);
              const d = Ms(y.current, "--eventDeck-mobileBreakpoint");
              Oe(d);
              let l = Ms(y.current, "--eventDeck-itemSize");
              l *= e, R(l);
              let m = Ms(y.current, "--eventDeck-modalGutterGap");
              m *= e, ze(m);
              let g = Ms(y.current, "--eventDeck-insideMargin");
              g *= e;
              const f = !1 === $e ? 2 * l + g : l + g;
              G(f), U(f + g);
              const b = l + g;
              q(b);
              let v = Math.ceil(.5 * (o.length - 1)) * b + f;
              $e && (v = o.length * b), De(v), 0 !== Ae && Me(-1 * Ae + s);
              let _ = Math.ceil(Math.ceil(v / b) / Y);
              ($e || ne) && (_ = T.length - 1), se(_);
              const h = Ms(y.current, "--eventDeck-itemScaleUpAmount");
              ea(h), Ze(Ms(y.current, "--eventDeck-cardCloseTransitionDuration")), k(Ms(y.current, "--eventDeck-itemImageTitleMargins") * e), null !== u && e !== u && (p(e), ne && rt()), null === u && p(e)
            }
          }), [y, o]), (0, d.useEffect)((() => {
            if (ne && !$e) {
              rt();
              const e = j?.getBoundingClientRect().top,
                a = -1 * (e - b);
              a !== aa && ta(a)
            }
          }), [v]), (0, d.useEffect)((() => {
            A(!(!M || !I || ne))
          }), [M, I]), (0, d.useEffect)((() => {
            const e = Es()((e => {
              ce(e), Be(e < Ve);
              const a = (1 - de) / 2;
              Ie(e * a);
              const t = Math.floor(me / W);
              K(t);
              let s = t * W;
              s > ue && (s = ue), X(s), ae(e - e * a);
              const n = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth;
              if (n !== v && _(n), ne && n === v && !h) {
                const e = j?.getBoundingClientRect().top,
                  a = -1 * (e - b);
                a !== aa && ta(a)
              }
            }), 300);
            return window.addEventListener("resize", (() => {
              e(window.innerWidth)
            })), window.addEventListener("scroll", (() => {
              ne && $e && e(window.innerWidth)
            })), e(window.innerWidth), () => {
              window.removeEventListener("resize", (() => {
                e(window.innerWidth)
              }))
            }
          }), [W, de, ne, $e]), (0, d.useEffect)((() => {
            !1 !== ne && !0 !== h && ($e ? nt() : rt(!0))
          }), [ee, Q, Pe, O, oe, Le, Z, aa]), (0, d.useEffect)((() => {
            const e = () => {
              if (y.current && oa) {
                const e = y.current.getBoundingClientRect(),
                  a = .2 * window.innerHeight;
                window.innerHeight - e.top >= a && ca(!1)
              }
            };
            return e(), window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
          }), [y]);
          const it = (0, d.useCallback)((() => {
            if (null !== y.current && !n) {
              const {
                top: a
              } = y?.current?.getBoundingClientRect() || 0;
              a <= .6 * window.innerHeight && (s({
                event: "page_section_impression",
                element_placement: e?._memoq?.title?.toLowerCase()
              }), r(!0))
            }
          }), [y]);
          (0, d.useEffect)((() => (window.addEventListener("scroll", it), () => {
            window.removeEventListener("scroll", it)
          })), [it, y]), (0, d.useEffect)((() => {
            "next" === xa ? (Ya(null, !0), ya("")) : "prev" === xa && (Ka(null, !0), ya(""))
          }), [xa]), (0, d.useEffect)((() => {
            y.current && y.current.addEventListener("mouseleave", (() => {
              Ta && Ja()
            }))
          }), [y, Ta]), (0, d.useEffect)((() => (document.body.addEventListener("mouseleave", et), () => {
            document.body.removeEventListener("mouseleave", et)
          })), [Ta]), (0, d.useEffect)((() => {
            Sa && setTimeout((() => {
              Ca(!1), wa(0)
            }), pa)
          }), [Sa]), (0, d.useEffect)((() => {
            Aa($e ? 20 : 100)
          }), [$e]), (0, d.useEffect)((() => {
            ba(ne ? 500 : 100)
          }), [ne]);
          const ot = (0, N.useTinaComponents)(),
            ct = (0, d.useMemo)((() => ({
              ...ot,
              CardWithImageGallery: Ba,
              HTMLElement: B,
              ImageWithBadge: be.A,
              Carousel: c.A,
              GroupOfItems: Se(),
              UnorderedList: pe.A
            })), [ot]),
            dt = (0, d.useMemo)((() => T.map((e => (0, d.createElement)(zs, {
              ...e,
              refDeck: y,
              key: e?.id ?? e?.sync_hash,
              components: ct,
              prevPage: Ka,
              nextPage: Ya,
              loadCssRawValue: Ms,
              selectedItemNumber: je,
              carouselTitle: t,
              sharedDraggingDelta: Ia,
              setSharedDraggingDelta: Pa
            })))), [T, y, ct, Ka, Ya, je]);
          return !dt?.length || dt.length <= 0 ? null : (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsx)("div", {
              className: "rockstargames-sites-gta-gen9b3206f796ddd61f3b6d1974ea73a4f22",
              "data-modal-mode": qe,
              "aria-hidden": "true"
            }), (0, f.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9e623ea950c02afbb9d28949ca4701ca4",
              "data-modal-mode": ne,
              "data-faded": oa,
              ref: y,
              onTouchStart: Qa,
              onTouchMove: Xa,
              onTouchEnd: Za,
              onMouseDown: Qa,
              onMouseMove: Xa,
              onMouseUp: Za,
              tabIndex: -1,
              role: "presentation",
              children: [(0, f.jsx)("div", {
                className: "rockstargames-sites-gta-gen9b8d0a147dd4f1835ba5495bac02f4c11",
                "aria-hidden": "true"
              }), (0, f.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9a758545d118b90def20e860fe541c26e",
                "data-modal-mode": ne,
                ref: S,
                "data-animating": sa,
                children: [(0, f.jsx)("h2", {
                  className: "rockstargames-sites-gta-gen9be12152c36226103d53925a82ba66452",
                  children: t
                }), (0, f.jsx)(Ds, {
                  prevPage: Ka,
                  prevBtnDisabled: M,
                  nextPage: Ya,
                  nextBtnDisabled: I,
                  selectedItemNumber: je,
                  itemsData: o,
                  closeModalMode: tt,
                  inModalMode: ne,
                  controlsHidden: z
                })]
              }), (0, f.jsx)("div", {
                className: "rockstargames-sites-gta-gen9f369e1390b3aa251df43bea9c55634f2",
                "data-modal-mode": ne,
                "data-is-dragging": Ta,
                style: {
                  transform: `translate3d(${xe+Ma}px, 0, 0)`,
                  width: `${Ae}px`
                },
                ref: C,
                children: dt
              })]
            })]
          })
        }), aa);
      var Bs = t(70636),
        Vs = t.n(Bs),
        Os = t(20206),
        Rs = t.n(Os),
        Fs = t(5162),
        Gs = t.n(Fs),
        Hs = t(39490),
        Us = t(28197),
        Ws = t(57685),
        qs = t(97458),
        Ys = t(71076),
        Ks = t(88221),
        Qs = t(67578),
        Xs = t(63265),
        Zs = t(92580),
        Js = t(82385),
        en = t(11405),
        an = t(72325);
      const tn = {
          CalloutSection: o.A,
          Card: ba,
          CardWithImageGallery: Ba,
          ConditionalBlock: k,
          CommunityChallenges: Gs(),
          CoverCard: Ca,
          Cta: v.A,
          DiscoveryCallout: Us.A,
          EventsDeck: $s,
          PageTemplate: Vs(),
          ExpandingPlatformButton: _.A,
          TextCard: Oa,
          Deck: Ss,
          Grid: x,
          Hero: A,
          HighlightsItem: Cs.HighlightsItem,
          HTMLElement: B,
          NewsletterSubscription: ie,
          OrderedList: oe.A,
          ParallaxInnerLayer: de,
          ParallaxOuterLayer: me,
          ParallaxWrapper: fe,
          UnorderedList: pe.A,
          ImageWithBadge: be.A,
          Carousel: c.A,
          GroupOfItems: Se(),
          Rating: _e.A,
          gen9: an,
          TinaModuleFetchNRender: Ne.A,
          PromoModule: ve,
          RockstarVideoPlayer: i(),
          Engagement: Rs()
        },
        sn = {
          CalloutSection: o.A,
          Card: ba,
          CardWithImageGallery: Ba,
          ConditionalBlock: k,
          CoverCard: Ca,
          Carousel: c.A,
          ExpandingPlatformButton: _.A,
          Hero: A,
          Grid: x,
          TextCard: Oa,
          Deck: Ss,
          GroupOfItems: Se(),
          ParallaxInnerLayer: de,
          ParallaxOuterLayer: me,
          ParallaxWrapper: fe,
          PromoModule: ve,
          Engagement: Rs(),
          NewsletterSubscription: ie,
          gen9: {
            BuyNow: Hs.A,
            Disclaimer: Ws.A,
            FAQ: qs.Ay,
            Guide: Ys.A,
            GuideGroup: Ks.A,
            GuideIntro: Qs.A,
            GuideSection: Xs.A,
            Hero: A,
            ImageTextGroupGroup: Zs.A,
            LinkoutSection: Js.A,
            TinaWrapper: en.A,
            UserVote: () => null
          },
          HTMLElement: B,
          OrderedList: oe.A,
          UnorderedList: pe.A,
          ImageWithBadge: be.A,
          Rating: _e.A,
          TinaModuleFetchNRender: Ne.A,
          UserVote: ye
        }
    },
    19552: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61a79de8dea0228576a18068e4f2660a.jpg"
    },
    19612: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1a3660d76f39527a79f8a49bb27a74be.svg"
    },
    20930: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        Avatar: () => u,
        Content: () => f,
        PlatformTag: () => b,
        PlatformTagSizes: () => c.YT,
        Platforms: () => c.lv,
        RankContent: () => v,
        Root: () => g,
        RpCategory: () => _,
        TextContent: () => h,
        TopRow: () => p,
        UserName: () => k
      });
      var s = t(62229),
        n = t(30109),
        r = t(38763),
        i = t(24036),
        o = t.n(i),
        c = t(92041),
        d = t(950);
      const l = "rockstargames-sites-gta-gen9b2d75ee6d468c7fde9ad28ba90ca2804";
      var m = t(25854);
      const g = (0, s.forwardRef)((function(e, a) {
          let {
            children: t,
            className: s,
            testId: n,
            ...i
          } = e;
          const c = (0, r.v6)(i, {
            "data-testid": n,
            className: o()("rockstargames-sites-gta-gen9d738b88fa09e0960678501900af6dae1", s)
          });
          return (0, m.jsx)("div", {
            ref: a,
            ...c,
            children: t
          })
        })),
        u = (0, s.forwardRef)((function(e, a) {
          let {
            src: n,
            alt: i,
            testId: o,
            ...c
          } = e;
          const [d, g] = (0, s.useState)(n), u = (0, r.v6)(c, {
            className: "rockstargames-sites-gta-gen9a0e1daf7fc3c029353d5ef13f291348f",
            "data-testid": o
          });
          return n ? (0, m.jsx)("div", {
            ref: a,
            ...u,
            children: (0, m.jsx)("img", {
              className: l,
              src: d,
              alt: i,
              onError: () => g(t(14804))
            })
          }) : (0, m.jsx)("div", {
            ref: a,
            ...u,
            children: (0, m.jsx)("img", {
              className: l,
              src: t(14804),
              alt: i
            })
          })
        })),
        f = (0, s.forwardRef)((function(e, a) {
          let {
            asChild: t,
            testId: s,
            className: i,
            ...c
          } = e;
          const d = t ? n.DX : "div",
            l = (0, r.v6)(c, {
              className: o()("rockstargames-sites-gta-gen9fbe57172570573357e040787d9307835", i),
              "data-testid": s
            });
          return (0, m.jsx)(d, {
            ref: a,
            ...l
          })
        })),
        p = (0, s.forwardRef)((function(e, a) {
          let {
            children: t,
            testId: s,
            ...n
          } = e;
          const i = (0, r.v6)(n, {
            className: "rockstargames-sites-gta-gen9d9b917b7fb3a2b20d4af0d526ddbb8ff",
            "data-testid": s
          });
          return (0, m.jsx)("div", {
            ref: a,
            ...i,
            children: t
          })
        })),
        b = e => {
          let {
            testId: a,
            ...t
          } = e;
          const s = (0, r.v6)(t, {
            "data-testid": a
          });
          return (0, m.jsx)(c.Ay, {
            ...s
          })
        },
        k = (0, s.forwardRef)((function(e, a) {
          let {
            children: t,
            testId: s,
            ...n
          } = e;
          const i = (0, r.v6)(n, {
            "data-testid": s
          });
          return (0, m.jsx)("div", {
            className: "rockstargames-sites-gta-gen9cd5023e2864561e1f962ac435e70156b",
            "data-size": "small",
            ...i,
            ref: a,
            children: t
          })
        })),
        v = (0, s.forwardRef)((function(e, a) {
          let {
            testId: t,
            children: s,
            ...n
          } = e;
          const i = (0, r.v6)(n, {
            "data-testid": t
          });
          return (0, m.jsx)("div", {
            ...i,
            ref: a,
            children: s
          })
        })),
        _ = e => {
          let {
            testId: a,
            ...t
          } = e;
          const s = (0, r.v6)(t, {
            "data-testid": a
          });
          return (0, m.jsx)(d.RpCategory, {
            ...s
          })
        },
        h = (0, s.forwardRef)((function(e, a) {
          let {
            asChild: t,
            children: s,
            testId: i,
            ...o
          } = e;
          const c = t ? n.DX : "div",
            d = (0, r.v6)(o, {
              className: "rockstargames-sites-gta-gen9e8daa457f5b09f3a79915a1355aa3332",
              "data-testid": i
            });
          return (0, m.jsx)(c, {
            ref: a,
            ...d,
            children: s
          })
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
    21444: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r
      });
      var s = t(49819),
        n = t(86237);
      const r = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          parent: "",
          post: null
        };
        return {
          name: "listItem",
          label: "List Item",
          component: "group",
          fields: [(0, s.om)(e), (0, s.z9)({
            name: "content",
            label: "Content",
            component: "text",
            initialValues: ""
          }), (0, s.sE)(e)],
          defaultItem: () => (0, s.Q)({
            content: ""
          }),
          itemProps: e => (0, s.Rv)(e, {
            label: (0, n._e)(`${e?.name??e?.[s.Qw]?.content??"New"} [List Item]`)
          })
        }
      }
    },
    22772: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/954d63889440be17e1ebef30b7026369.svg"
    },
    22844: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4a1657ff0ab4e3d45469556ba2f899c3.jpg"
    },
    23587: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b95ab415fdd8bec89099d433d23e3c7.jpg"
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
    24808: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8977d6b170f295068d78c5bbb7b6f02d.jpg"
    },
    24865: (e, a, t) => {
      var s = {
        "./VI/mobile.jpg": 92244
      };

      function n(e) {
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      n.keys = function() {
        return Object.keys(s)
      }, n.resolve = r, e.exports = n, n.id = 24865
    },
    24970: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e111377ba943e9eefaa9204f77c77093.png"
    },
    26151: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b48e041f1412ff62c8a92dc424b59aa5.svg"
    },
    26788: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    27064: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5aa471f90eaff248e0fbef79400cbbf3.jpg"
    },
    27351: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/64d281825da1c782681bcc096d693e32.svg"
    },
    28005: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/404be4f04081372768bb660a6c1991ba.jpg"
    },
    28414: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c2acdad576048f5c48b2ee6a2a2a90a3.svg"
    },
    28839: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61ae357c3bfbabb5d765e9a7c794d08f.png"
    },
    29362: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7ac89f9e00ded04ef4b2dd3eaf3e8734.svg"
    },
    31248: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/082b847bcab37655faf903149f80f1e4.jpg"
    },
    32323: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/703a546f7a5109c1e2af87a212135aad.png"
    },
    32830: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14312e604f0637a2afd376dd571345d9.jpg"
    },
    33143: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    },
    36672: (e, a, t) => {
      var s = {
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

      function n(e) {
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      n.keys = function() {
        return Object.keys(s)
      }, n.resolve = r, e.exports = n, n.id = 36672
    },
    36855: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bba2f70e014e82b336a9f80625053089.svg"
    },
    38635: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e77bb0f25a6ea37e8d831b12df9fa3c.png"
    },
    39294: (e, a, t) => {
      var s = {
        "./GTAOnline.jpg": 10111,
        "./GTATrilogy.jpg": 84752,
        "./IV.jpg": 73483,
        "./V.jpg": 98754,
        "./VI.jpg": 1157,
        "./VI/desktop.jpg": 67496,
        "./VI/mobile.jpg": 92244,
        "./agent.jpg": 78323,
        "./beaterator.jpg": 23587,
        "./bully-scholarshipedition.jpg": 67181,
        "./bully.jpg": 85332,
        "./chinatownwars.jpg": 44596,
        "./episodesfromlibertycity.jpg": 18518,
        "./grandtheftauto-gba.jpg": 7509,
        "./grandtheftauto3.jpg": 42787,
        "./gta-online.jpg": 26788,
        "./gta-v.jpg": 33143,
        "./gta.jpg": 8494,
        "./gta2.jpg": 59942,
        "./gtacomplete.jpg": 64923,
        "./gtalondon.jpg": 85256,
        "./italianjob.jpg": 42043,
        "./lanoire-vr-case-files.jpg": 52014,
        "./lanoire.jpg": 59414,
        "./lanoire_2.jpg": 52461,
        "./libertycitystories.jpg": 89273,
        "./manhunt.jpg": 95903,
        "./manhunt2.jpg": 3933,
        "./maxpayne.jpg": 77321,
        "./maxpayne2.jpg": 13095,
        "./maxpayne3.jpg": 57258,
        "./midnightclub.jpg": 12602,
        "./midnightclub2.jpg": 3818,
        "./midnightclub3.jpg": 59655,
        "./midnightclubLA-complete.jpg": 63839,
        "./midnightclubLA.jpg": 79795,
        "./oni.jpg": 24808,
        "./rdr-goty.jpg": 19552,
        "./reddeadonline.jpg": 73534,
        "./reddeadredemption.jpg": 27064,
        "./reddeadredemption2.jpg": 31248,
        "./reddeadrevolver.jpg": 79114,
        "./rockstar-games-collection-edition-1.jpg": 93573,
        "./sanandreas.jpg": 14724,
        "./skateanddestroy.jpg": 90377,
        "./smugglersrun.jpg": 73564,
        "./smugglersrun2.jpg": 22844,
        "./smugglersrunwarzones.jpg": 84715,
        "./stateofemergency.jpg": 28005,
        "./tabletennis.jpg": 84141,
        "./theballadofgaytony.jpg": 14825,
        "./thelostanddamned.jpg": 52591,
        "./thewarriors.jpg": 96148,
        "./undeadnightmare.jpg": 32830,
        "./vicecity.jpg": 91480,
        "./vicecitystories.jpg": 10869,
        "./wildmetal.jpg": 85613
      };

      function n(e) {
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      n.keys = function() {
        return Object.keys(s)
      }, n.resolve = r, e.exports = n, n.id = 39294
    },
    40491: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27a26f477c8db29df4ceec4517c7f42b.svg"
    },
    41179: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => o
      });
      var s = t(62229),
        n = t(9623),
        r = t(95966);
      var i = t(25854);
      const o = (0, r.withTranslations)((e => {
        let {
          t: a
        } = e;
        const [t] = (0, s.useState)(""), o = (0, n.useNavigate)(), c = (0, r.useMutateState)();
        return (0, i.jsxs)("form", {
          action: "#",
          className: "rockstargames-sites-gta-gen9c9f16d9c2f4a943ae8f1f900f31b5f4b",
          onSubmit: e => {
            e.preventDefault(), c({
              navOpen: !1
            }), document.activeElement?.blur?.();
            const a = e.currentTarget.elements.namedItem("q").value;
            o(`/search?q=${a}`)
          },
          role: "search",
          children: [(0, i.jsx)("button", {
            type: "submit",
            role: "button",
            title: "Submit"
          }), (0, i.jsx)("input", {
            autoComplete: "off",
            defaultValue: t,
            enterKeyHint: "search",
            name: "q",
            placeholder: a("Search Rockstar Games")
          })]
        })
      }))
    },
    42043: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/809c3d6f72a6752f0ebcc6c92d43db67.jpg"
    },
    42787: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/81001f378e085cd20f8ee0182e23cb7c.jpg"
    },
    43981: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => c
      });
      var s = t(62229),
        n = t(50583),
        r = t(45575),
        i = t(25854);
      class o extends s.Component {
        constructor(e) {
          super(e), this.state = {
            error: {
              code: null,
              message: null
            }
          }
        }
        componentDidUpdate(e) {
          this.props.error && e.error !== this.props.error && this.setState({
            ...this.state,
            error: this.props.error
          })
        }
        static getDerivedStateFromError(e) {
          const a = {
            message: e?.message ? e.toString() : "Something has gone horribly awry.",
            code: e?.code ?? 399
          };
          return 399 === a.code && ((0, n.captureMessage)("Notorious 399 Error", n.Severity.Error), (0, n.addBreadcrumb)({
            category: "ErrorBoundary",
            message: "E399 triggered",
            data: a
          })), {
            error: a
          }
        }
        render() {
          return null !== this.state.error.code ? (0, i.jsx)(r.A, {
            error: this.state.error
          }) : this.props.children
        }
      }
      const c = function(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return function(t) {
          return (0, i.jsx)(o, {
            header: a,
            children: (0, i.jsx)(e, {
              ...t
            })
          })
        }
      }
    },
    44596: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a8074783730a47af2fe5c2b67ddf7d31.jpg"
    },
    44606: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => i
      });
      var s = t(14341);
      const n = {
        button: "rockstargames-sites-gta-gen9bc25ec64410308d56e4dc097e81fb129",
        secondary: "rockstargames-sites-gta-gen9a3e6439dcaa4870840298d683db4831c"
      };
      var r = t(25854);
      const i = e => {
        let {
          className: a = "",
          children: t,
          context: i = "",
          to: o,
          onClick: c,
          target: d = "_self",
          ...l
        } = e;
        const m = [n.button, n[i], a].join(" ");
        return o ? (0, r.jsx)(s.A, {
          ...l,
          to: o,
          className: m,
          onClick: c,
          target: d,
          children: t
        }) : (0, r.jsx)("button", {
          ...l,
          type: "button",
          className: m,
          onClick: c,
          children: t
        })
      }
    },
    45575: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => d
      });
      var s = t(62229),
        n = t(81788),
        r = t(14341),
        i = t(41179);
      const o = (0, n.defineMessages)({
        wasted_error_404_new: {
          id: "wasted_error_404_new",
          defaultMessage: "The page you're looking for doesn't exist or another error occurred."
        },
        wasted_home: {
          id: "wasted_home",
          defaultMessage: "Home"
        }
      });
      var c = t(25854);
      const d = e => {
        let {
          error: a,
          domain: t = ""
        } = e;
        console.error({
          error: a
        });
        const {
          formatMessage: d
        } = (0, n.useIntl)();
        let l = a?.message ?? d(o.wasted_error_404_new);
        l = d(o.wasted_error_404_new);
        const m = a?.code ?? 398,
          g = (0, s.useRef)(null);
        return (0, s.useEffect)((() => {
          g && g?.current && g.current.focus()
        }), [g]), (0, c.jsxs)("div", {
          className: "rockstargames-sites-gta-gen9d0635ab9b06be2bdd2967e49648afe4e",
          children: [(0, c.jsx)("h3", {
            tabIndex: -1,
            ref: g,
            children: `${l} (${m})`
          }), (0, c.jsx)(r.A, {
            to: "/",
            reloadDocument: !1,
            children: d(o.wasted_home)
          }), "clr" !== t && (0, c.jsx)(i.A, {})]
        })
      }
    },
    46368: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "FragmentDefinition",
          name: {
            kind: "Name",
            value: "postFields"
          },
          typeCondition: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "RockstarGames_Newswire_Model_Entity_Post_o"
            }
          },
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              alias: {
                kind: "Name",
                value: "id"
              },
              name: {
                kind: "Name",
                value: "id_hash"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "url"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "title"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "name_slug"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "created"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "created_formatted"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "primary_tags"
              },
              arguments: [],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "id"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "name"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "secondary_tags"
              },
              arguments: [],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "id"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "name"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "preview_images_parsed"
              },
              arguments: [],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "newswire_block"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "square"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "d16x9"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "_fallback"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }]
              }
            }]
          }
        }, {
          kind: "FragmentDefinition",
          name: {
            kind: "Name",
            value: "paging"
          },
          typeCondition: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "RockstarGames_Cake_Graph_Type_Paging_o"
            }
          },
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "pageCount"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "page"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "count"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "nextPage"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "prevPage"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "perPage"
              },
              arguments: [],
              directives: []
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "NewswireList"
          },
          variableDefinitions: [{
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
                value: "page"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int"
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
                value: "limit"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int"
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "tagId"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int"
              }
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
                  value: "url"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "metaUrl"
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
                value: "posts"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "page"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "page"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "tagId"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "tagId"
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
                  value: "limit"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "limit"
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
                    value: "paging"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "FragmentSpread",
                      name: {
                        kind: "Name",
                        value: "paging"
                      },
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "results"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "FragmentSpread",
                      name: {
                        kind: "Name",
                        value: "postFields"
                      },
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
          end: 926
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: 'fragment postFields on RockstarGames_Newswire_Model_Entity_Post_o {\n    id: id_hash\n    url\n    title\n    name_slug\n    created\n    created_formatted\n    primary_tags {\n        id\n        name\n    }\n    secondary_tags {\n        id\n        name\n    }\n    preview_images_parsed {\n        newswire_block {\n            square\n            d16x9\n            _fallback\n        }\n    }\n}\nfragment paging on RockstarGames_Cake_Graph_Type_Paging_o {\n    pageCount\n    page\n    count\n    nextPage\n    prevPage\n    perPage\n}\n\nquery NewswireList(\n    $locale: String!\n    $page: Int!\n    $limit: Int\n    $tagId: Int\n    $metaUrl: String!\n    $cache: Boolean = true\n) {\n    meta: metaUrl(url: $metaUrl, domain: "www", locale: $locale) {\n        title\n    }\n    posts(page: $page, tagId: $tagId, locale: $locale, limit: $limit) {\n        paging {\n            ...paging\n        }\n        results {\n            ...postFields\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function n(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function r(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          i = new Set,
          o = new Set;
        for (r.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var s = n(e, a);
          s && t.definitions.push(s)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.postFields = r(a, "postFields"), e.exports.paging = r(a, "paging"), e.exports.NewswireList = r(a, "NewswireList")
    },
    46554: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/03ab76c58ed61a83bf035c923dbe32b2.svg"
    },
    46618: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c01f38f1051e751caa633d533202873c.svg"
    },
    46823: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TinaModulesList"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "type"
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
                value: "orderBy"
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
                value: "orderDirection"
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
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "tinaModulesList"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "type"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "orderBy"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "orderBy"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "orderDirection"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "orderDirection"
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
                    value: "results"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      alias: {
                        kind: "Name",
                        value: "id"
                      },
                      name: {
                        kind: "Name",
                        value: "id_hash"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "name"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "type"
                      },
                      arguments: [],
                      directives: []
                    }, {
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
                            value: "id"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "payload"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "variables"
                          },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "keys"
                              },
                              arguments: [],
                              directives: []
                            }]
                          }
                        }]
                      }
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 495
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: "query TinaModulesList(\n    $type: String\n    $orderBy: String\n    $orderDirection: String\n    $locale: String!\n) {\n    tinaModulesList(\n        type: $type\n        orderBy: $orderBy\n        orderDirection: $orderDirection\n        locale: $locale\n    ) {\n        results {\n            id: id_hash\n            name\n            type\n            tina {\n                id\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function n(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesList = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          i = new Set,
          o = new Set;
        for (r.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var s = n(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "TinaModulesList")
    },
    47580: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6079496697e537802f8a0eb5a83d2e94.svg"
    },
    48157: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1a3660d76f39527a79f8a49bb27a74be.svg"
    },
    48524: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "UserGetVote"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "foreign_id"
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
                value: "foreign_type"
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
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "userGetVote"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreign_id"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreign_type"
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
                    value: "vote"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "mutation",
          name: {
            kind: "Name",
            value: "UserCastVote"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "foreign_id"
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
                value: "foreign_type"
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
                value: "vote"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
                }
              }
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
                value: "userCastVote"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreign_id"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreign_type"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "vote"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "vote"
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
                    value: "vote"
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

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: "query UserGetVote($foreign_id: String!, $foreign_type: String!) {\n    userGetVote(foreign_id: $foreign_id, foreign_type: $foreign_type) {\n        vote\n    }\n}\n\nmutation UserCastVote(\n    $foreign_id: String!\n    $foreign_type: String!\n    $vote: Boolean!\n) {\n    userCastVote(\n        foreign_id: $foreign_id\n        foreign_type: $foreign_type\n        vote: $vote\n    ) {\n        vote\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function n(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function r(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          i = new Set,
          o = new Set;
        for (r.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var s = n(e, a);
          s && t.definitions.push(s)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.UserGetVote = r(a, "UserGetVote"), e.exports.UserCastVote = r(a, "UserCastVote")
    },
    49980: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/05e9f2f27883d4cbabb3d4e4e16c9c74.svg"
    },
    50324: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/937b7a0c5a128c39addf2adeba2d2f23.svg"
    },
    50828: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "UserGetVote"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "foreignId"
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
                value: "foreignType"
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
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "userGetVote"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreignId"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreignType"
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
                    value: "vote"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "mutation",
          name: {
            kind: "Name",
            value: "UserCastVote"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "foreignId"
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
                value: "foreignType"
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
                value: "vote"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
                }
              }
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
                value: "userCastVote"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreignId"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreignType"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "vote"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "vote"
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
                    value: "vote"
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
          end: 386
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: "query UserGetVote($foreignId: String!, $foreignType: String!) {\n    userGetVote(foreign_id: $foreignId, foreign_type: $foreignType) {\n        vote\n    }\n}\n\nmutation UserCastVote(\n    $foreignId: String!\n    $foreignType: String!\n    $vote: Boolean!\n) {\n    userCastVote(\n        foreign_id: $foreignId\n        foreign_type: $foreignType\n        vote: $vote\n    ) {\n        vote\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function n(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function r(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          i = new Set,
          o = new Set;
        for (r.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var s = n(e, a);
          s && t.definitions.push(s)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.UserGetVote = r(a, "UserGetVote"), e.exports.UserCastVote = r(a, "UserCastVote")
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
    52014: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b13400360d3873aa5ed169d38da1ff9f.jpg"
    },
    52461: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b1034f3c525b39db31d9017268a0aeb5.jpg"
    },
    52466: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/46a27d8d16855dcc2a217f48243c6d82.svg"
    },
    52591: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f9b044c847e4c971c6ac5d096fe3e0eb.jpg"
    },
    53781: (e, a, t) => {
      var s = {
        "./VI/desktop.jpg": 67496
      };

      function n(e) {
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      n.keys = function() {
        return Object.keys(s)
      }, n.resolve = r, e.exports = n, n.id = 53781
    },
    54222: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07f9f9e93ec430813e74cbce545962c4.svg"
    },
    57258: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0f31b4df90bff5bab740485f2d4b8253.jpg"
    },
    58648: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/608f591c35aff9d47091dd7fe9a8fb13.svg"
    },
    59414: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b1034f3c525b39db31d9017268a0aeb5.jpg"
    },
    59655: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e8ae1f733bc7d3b05c506de67f4b4f7f.jpg"
    },
    59942: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48371205a1d87d858baa85712d1f91bb.jpg"
    },
    60882: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => u
      });
      var s = t(62229),
        n = t(43851),
        r = t(39311),
        i = t(95966);
      const o = {
        deprecatedCarousel: "rockstargames-sites-gta-gen9a531264d5417d2198d4e14aa72335af1",
        "swiper-scrollbar-disabled": "rockstargames-sites-gta-gen9ee2324d6dd93a95776b1e2d14d0f529d",
        "swiper-horizontal": "rockstargames-sites-gta-gen9b823bbff86d38da8cb611a7c3367d8fe",
        "swiper-vertical": "rockstargames-sites-gta-gen9d29252354bbbfe413678daff5223169d",
        renderedWithChildren: "rockstargames-sites-gta-gen9ad7696edafa3086969e7aaece4f09b4f",
        panorama: "rockstargames-sites-gta-gen9ff63f8addff8d036ca0b65fa495e1653",
        img: "rockstargames-sites-gta-gen9d8e66128b4fef1ea164350cd535e2d68",
        hideMobile: "rockstargames-sites-gta-gen9f3445a74a067bd92ff94b521cb0bdc07",
        hideLarge: "rockstargames-sites-gta-gen9a6c9173aa5a8fe31a062251352a9d711",
        imageAreaBg: "rockstargames-sites-gta-gen9dcb2b41007683141579697bb4a8658ba",
        infinite_false: "rockstargames-sites-gta-gen9b85758ee99a52896b94130d002e821c7",
        track: "rockstargames-sites-gta-gen9c7c21df4f7f83a73f79dd7913aa87832",
        perico: "rockstargames-sites-gta-gen9aa50a9164fd0296b1196d441233cc348",
        dotsSlide: "rockstargames-sites-gta-gen9b8fd11776fba32f9663bbb6292a5c901",
        siblings: "rockstargames-sites-gta-gen9f4c50c0daadf81cd292587fcfea1339d",
        active: "rockstargames-sites-gta-gen9fdc2ec652cbb7469f602e73cd10ef997",
        "swiper-preloader-spin": "rockstargames-sites-gta-gen9c39b97f81c73d75dc4e013fde14aff18"
      };
      var c = t(99217),
        d = t(85239),
        l = t(25854);
      const m = e => {
          let {
            item: a
          } = e;
          return (0, l.jsxs)("div", {
            children: [(0, l.jsx)(d.A, {
              image: a?.image,
              badge: a?.badge ?? a?.image?.badge,
              badgeType: "badge3",
              role: a?.role ?? a?.image?.role,
              splitter: a?.splitter ?? a?.image?.splitter,
              type: a?.type,
              ariaLabel: a?.image?.ariaLabel ?? a.description,
              style: a?.style,
              className: (0, i.classList)(o.img, a?.className)
            }), (a?.title || a?.description) && (0, l.jsx)(c.A, {
              item: a
            })]
          })
        },
        g = e => {
          let {
            current: a,
            total: t
          } = e;
          return (0, l.jsx)("div", {
            className: "swiper-scrollbar",
            style: {
              "--current-slide": a,
              "--total-slides": t
            },
            children: (0, l.jsx)("div", {
              className: "swiper-scrollbar-drag"
            })
          })
        },
        u = e => {
          let {
            children: a,
            items: t = [],
            style: d = {},
            noInfiniteScroll: u = !1,
            className: f = "",
            renderTemplate: p = "standard",
            text: b,
            customSpaceBetween: k = null,
            centerSlides: v = !0,
            centeredSlidesBounds: _ = !1
          } = e;
          const [h, x] = (0, s.useState)(0), y = (0, s.useMemo)((() => a && Array.isArray(a) ? a.map((() => (0, r.A)())) : null), [a]);
          if (!(t && 0 !== t?.length || a)) return null;
          const N = {
            0: {
              spaceBetween: k ?? 16
            },
            1024: {
              spaceBetween: k ?? 18
            },
            1920: {
              spaceBetween: k ?? 20
            },
            2560: {
              spaceBetween: k ?? 22
            }
          };
          return (0, l.jsxs)("div", {
            className: (0, i.classList)(o.deprecatedCarousel, o[p], o[`infinite_${!u}`], a ? o.renderedWithChildren : "", f),
            style: d,
            children: [(0, l.jsxs)(n.RC, {
              loop: !u,
              grabCursor: !0,
              centeredSlides: v,
              centerInsufficientSlides: v,
              slidesPerView: "auto",
              speed: 700,
              breakpoints: N,
              onUpdate: () => x(0),
              onActiveIndexChange: e => x(e?.realIndex ?? 0),
              centeredSlidesBounds: _,
              children: [(0, l.jsx)("div", {
                className: o.trackWrapper,
                children: (0, l.jsxs)("div", {
                  className: o.track,
                  children: [t?.map((e => (0, l.jsx)(n.qr, {
                    children: (0, l.jsx)(m, {
                      item: e
                    })
                  }, e.key))), a && a.map(((e, a) => e && (0, l.jsx)(n.qr, {
                    children: e
                  }, y && y[a])))]
                })
              }), (0, l.jsx)(g, {
                current: h,
                total: a ? a.length : t.length
              })]
            }), (b?.title || b?.description) && (0, l.jsx)(c.A, {
              item: b
            })]
          })
        }
    },
    63117: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d910a48fc0914f58ca80dc0732a7677.svg"
    },
    63839: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a549b321910f5308200496f1893c2a5f.jpg"
    },
    64923: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/089fe525338554e2120a1aaaf81766d6.jpg"
    },
    65044: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1a94d5705ae3ddeb4c8c2fde79bfe81.svg"
    },
    65211: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "GetAudioAlbum"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "id"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int"
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
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "audioAlbum"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "id"
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
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "tracks"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "id"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "cover_src"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "mp3_src"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "color"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "mix_blend_mode"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "duration"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "artist"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "name"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 340
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: "query GetAudioAlbum($id: Int!, $locale: String!) {\n    audioAlbum(id: $id, locale: $locale) {\n        title\n        tracks {\n            id\n            cover_src\n            mp3_src\n            title\n            color\n            mix_blend_mode\n            duration\n            artist {\n                name\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function n(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.GetAudioAlbum = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          i = new Set,
          o = new Set;
        for (r.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var s = n(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "GetAudioAlbum")
    },
    65287: (e, a, t) => {
      var s = {
        "./bounty.png": 7502,
        "./collector.png": 24970,
        "./moonshiner.png": 2661,
        "./naturalist.png": 16386,
        "./trader.png": 38635
      };

      function n(e) {
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      n.keys = function() {
        return Object.keys(s)
      }, n.resolve = r, e.exports = n, n.id = 65287
    },
    65315: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/534078f6307f97ce0d70e0bb885f9d77.svg"
    },
    67181: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5704d117b387578dfebe1290e556f963.jpg"
    },
    67299: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f44dd7aad9d6c62e40a11f51252f59b8.svg"
    },
    67443: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a3931a545299e205758648bce29e5c49.svg"
    },
    67496: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/372e91ece1e13eda3ec63d6dfc06f7ce.jpg"
    },
    68918: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cd57122be57f5e3a9dc4d0a0f2503fb1.svg"
    },
    72690: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a825976dddc59e33b3ce146ad6cd3d20.svg"
    },
    73483: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b01707ef5603a26c1f542088f8f7c09.jpg"
    },
    73534: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc01cf29aa31b9d15a5d06483a0a1a3.jpg"
    },
    73564: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4393d2466a2f8931669e345898541812.jpg"
    },
    74432: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a19fbf81b03db0fda00839496a3ce5.svg"
    },
    75385: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => c
      });
      var s = t(38558),
        n = t(95966);
      const r = "rockstargames-sites-gta-gen9c8dc03880ce2e12f3fdea5b5b587f27f";
      var i = t(25854);
      const o = e => {
          let {
            alt: a,
            className: s,
            src: r,
            style: o
          } = e;
          const [c, d] = (0, n.usePreloadImg)(r);
          let l = r;
          !1 === c && ("rockstargames-sites-gta-gen9a6a06e2d5c4f1811ea39d17312ca2e67" === s && (l = t(28839)), l = t(9333));
          const {
            width: m,
            height: g
          } = d, u = {
            "--aspect-ratio": Number.isNaN(m / g) ? "" : m / g,
            ...o
          };
          return (0, i.jsx)("img", {
            src: l,
            className: s ?? "",
            alt: a,
            style: u
          })
        },
        c = e => {
          let {
            className: a,
            style: c = {},
            image: d = {},
            imageStyle: l = {}
          } = e, {
            alt: m,
            src: g
          } = (0, s.S1)(d);
          const {
            isMobile: u
          } = (0, n.useWindowResize)();
          g.desktop || g.mobile || (m = "", g = {
            mobile: t(28839),
            desktop: t(9333)
          });
          let f = d.frame ? `${d.frame} ${r}` : r;
          return (0, i.jsx)("div", {
            className: f,
            style: c,
            children: (0, i.jsx)(o, {
              style: {
                ...l,
                ...d?.style
              },
              src: u ? g.mobile || g.desktop : g?.desktop || g?.mobile,
              alt: m,
              className: a
            })
          })
        }
    },
    75834: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => p
      });
      var s = t(62229),
        n = t(81788),
        r = t(95966),
        i = t(55799),
        o = t(2918),
        c = t(14341),
        d = t(48782);
      const l = {
          rating: "rockstargames-sites-gta-gen9c3e95c84902dd75b827d3c95532e22dc",
          withDescriptors: "rockstargames-sites-gta-gen9b98963abfc7a63295bebc6c6d15b391a",
          withOutDescriptors: "rockstargames-sites-gta-gen9b6339480b5fd086fb0c025930bfb7dcd",
          text: "rockstargames-sites-gta-gen9babdd6ae2ff83f380dadc6982effa011"
        },
        m = (0, n.defineMessages)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      var g = t(95520),
        u = t(84826),
        f = t(25854);
      (0, r.importAll)(t(36672));
      const p = (0, d.A)((0, u.g)((e => {
        let {
          descriptors: a = null,
          footer: d = null,
          href: u,
          img: p = null,
          titleSlug: b = null,
          style: k = {},
          className: v
        } = e;
        const [_, h] = (0, s.useState)(!1), {
          inView: x
        } = (0, i.useInView)({
          threshold: .6
        }), [y, N] = (0, s.useState)({
          ratingDescriptors: a,
          ratingFooter: d,
          ratingImg: p,
          ratingUrl: u
        }), {
          track: j
        } = (0, o.useGtmTrack)(), w = (0, n.useIntl)(), {
          data: S
        } = (0, r.useQuery)(g.GameData, {
          variables: {
            titleSlug: b
          },
          skip: !b
        });
        if ((0, s.useEffect)((() => {
            S && N(S?.game)
          }), [S]), (0, s.useEffect)((() => {
            x && !_ && y.img_rating && (j({
              event: "page_section_impression",
              element_placement: "rating"
            }), h(!0))
          }), [x]), !y.ratingImg) return null;
        const C = !!y.ratingDescriptors;
        return (0, f.jsxs)("div", {
          className: [l.rating, C ? l.withDescriptors : l.withOutDescriptors, v || ""].join(" "),
          style: (0, r.safeStyles)(k),
          "data-testId": "rating",
          children: [(0, f.jsx)(c.A, {
            to: y.ratingUrl,
            target: "_blank",
            children: (0, f.jsx)("img", {
              alt: w.formatMessage(m.components_ratings_link_alt, {
                rating: (T = y.ratingImg, T.replace(/_/g, " ").split(".")[0].toUpperCase())
              }),
              src: t(8194)(`./${y.ratingImg}`)
            })
          }), C && (0, f.jsxs)("div", {
            className: l.text,
            children: [(0, f.jsx)("p", {
              className: l.descriptors,
              dangerouslySetInnerHTML: {
                __html: y?.ratingDescriptors?.split(/<br\s?\/?>/).join(", ") || ""
              }
            }), y.ratingFooter && (0, f.jsx)("hr", {}), y.ratingFooter && (0, f.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: y.ratingFooter.replace(/ \//g, ", ")
              }
            })]
          })]
        });
        var T
      })))
    },
    77321: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fd74a091e2e5765c8769668cc515e494.jpg"
    },
    77404: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d1f569db6c94b4f81417f62e91759082.svg"
    },
    78323: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d66bfe06a724f04c0941073de283297.jpg"
    },
    79114: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d3ee871568fd751956d5ea1242a4f2d.jpg"
    },
    79795: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/659db20d7a19cc70a0510c7d197cedf3.jpg"
    },
    81864: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f52c5ab315a1ff90360e06372c3f2c0.svg"
    },
    82424: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b43dddd485139df895fc531e79c75e68.svg"
    },
    83933: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r
      });
      const s = {
        hr: "rockstargames-sites-gta-gen9dc7b1bc141e132d4ee9b7bf9d55c573a",
        redLine: "rockstargames-sites-gta-gen9d4d968b41ef87926b0b6318e8647738b",
        gtao: "rockstargames-sites-gta-gen9f66c75c6e882da85fef31e4211ca0be2"
      };
      var n = t(25854);
      const r = e => {
        let {
          style: a,
          className: t = "",
          type: r = ""
        } = e;
        return (0, n.jsx)("div", {
          style: a,
          className: [s.hr, s[r], t].join(" ")
        })
      }
    },
    84141: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5df3b2d018d1e8e9b424b9eaebc86b16.jpg"
    },
    84406: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c699f3b76c15209c8059f02507e11b5.svg"
    },
    84715: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/16e65ca64eafabe331ef1d2bef9c6f16.jpg"
    },
    84752: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/214a1cd1a2e7bb8f9b1e5d3846ca2993.jpg"
    },
    85239: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => d
      });
      var s = t(62229),
        n = t(95966),
        r = t(10632),
        i = t(75385);
      var o = t(25854);
      const c = e => {
          let {
            hero: a,
            children: t
          } = e;
          return a ? (0, o.jsx)("div", {
            className: "rockstargames-sites-gta-gen9a429886d721550d02521f7f5c9de7f5b",
            children: t
          }) : t
        },
        d = e => {
          let {
            badge: a = null,
            badgeType: t,
            discountTxt: d,
            splitter: l,
            image: m,
            style: g,
            className: u = "",
            attributes: f = {},
            role: p,
            hero: b = !1
          } = e;
          const k = (0, s.useMemo)((() => {
            if (m?.badge || m?.discountTxt || a || d) return (0, o.jsx)(r.A, {
              badge: m?.discountTxt ?? m?.badge ?? a ?? d,
              badgeType: t,
              splitter: m?.splitter ?? l,
              role: m?.role ?? p
            })
          }), [a, t, d, m, p, l]);
          return (0, o.jsx)(c, {
            hero: b,
            children: (0, o.jsx)("figure", {
              children: (0, o.jsxs)("div", {
                className: (0, n.classList)("rockstargames-sites-gta-gen9d9ac792281efe15bcd4589b028d1c27b", b ? "rockstargames-sites-gta-gen9e430c4662cd185f58259d4a8d8b322de" : "", f?.hiddenMobile ? "hiddenMobile" : "", f?.hiddenLarge ? "hiddenLarge" : "", f?.className, u),
                style: (0, n.safeStyles)({
                  ...g,
                  ...f?.style
                }),
                ...f,
                children: [(0, o.jsx)(i.A, {
                  image: m,
                  className: u
                }), k, m?.caption && (0, o.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: m.caption
                  }
                })]
              })
            })
          })
        }
    },
    85256: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc4dbe3e1d52c3fc405579090868d08.jpg"
    },
    85332: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f58d386594d32f34c887da75032c5be.jpg"
    },
    85613: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d0b53035bf66e851116bd0244ba6ace.jpg"
    },
    86595: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/72e8749316b4d1f52925b95e075e9c24.svg"
    },
    86751: (e, a, t) => {
      var s = {
        "./GTAOnline.jpg": 10111,
        "./GTATrilogy.jpg": 84752,
        "./IV.jpg": 73483,
        "./V.jpg": 98754,
        "./VI.jpg": 1157,
        "./VI/desktop.jpg": 67496,
        "./VI/mobile.jpg": 92244,
        "./agent.jpg": 78323,
        "./beaterator.jpg": 23587,
        "./bully-scholarshipedition.jpg": 67181,
        "./bully.jpg": 85332,
        "./chinatownwars.jpg": 44596,
        "./episodesfromlibertycity.jpg": 18518,
        "./grandtheftauto-gba.jpg": 7509,
        "./grandtheftauto3.jpg": 42787,
        "./gta-online.jpg": 26788,
        "./gta-v.jpg": 33143,
        "./gta.jpg": 8494,
        "./gta2.jpg": 59942,
        "./gtacomplete.jpg": 64923,
        "./gtalondon.jpg": 85256,
        "./italianjob.jpg": 42043,
        "./lanoire-vr-case-files.jpg": 52014,
        "./lanoire.jpg": 59414,
        "./lanoire_2.jpg": 52461,
        "./libertycitystories.jpg": 89273,
        "./manhunt.jpg": 95903,
        "./manhunt2.jpg": 3933,
        "./maxpayne.jpg": 77321,
        "./maxpayne2.jpg": 13095,
        "./maxpayne3.jpg": 57258,
        "./midnightclub.jpg": 12602,
        "./midnightclub2.jpg": 3818,
        "./midnightclub3.jpg": 59655,
        "./midnightclubLA-complete.jpg": 63839,
        "./midnightclubLA.jpg": 79795,
        "./oni.jpg": 24808,
        "./rdr-goty.jpg": 19552,
        "./reddeadonline.jpg": 73534,
        "./reddeadredemption.jpg": 27064,
        "./reddeadredemption2.jpg": 31248,
        "./reddeadrevolver.jpg": 79114,
        "./rockstar-games-collection-edition-1.jpg": 93573,
        "./sanandreas.jpg": 14724,
        "./skateanddestroy.jpg": 90377,
        "./smugglersrun.jpg": 73564,
        "./smugglersrun2.jpg": 22844,
        "./smugglersrunwarzones.jpg": 84715,
        "./stateofemergency.jpg": 28005,
        "./tabletennis.jpg": 84141,
        "./theballadofgaytony.jpg": 14825,
        "./thelostanddamned.jpg": 52591,
        "./thewarriors.jpg": 96148,
        "./undeadnightmare.jpg": 32830,
        "./vicecity.jpg": 91480,
        "./vicecitystories.jpg": 10869,
        "./wildmetal.jpg": 85613
      };

      function n(e) {
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      n.keys = function() {
        return Object.keys(s)
      }, n.resolve = r, e.exports = n, n.id = 86751
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
    88105: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => p
      });
      var s = t(62229),
        n = t(55799),
        r = t(95966),
        i = t(2918),
        o = t(50828),
        c = t(44606),
        d = t(25854);
      const l = e => {
          let {
            className: a
          } = e;
          return (0, d.jsxs)("svg", {
            className: a,
            width: "16",
            height: "17",
            viewBox: "0 0 16 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, d.jsx)("path", {
              d: "M3.33203 8.5H12.6654",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, d.jsx)("path", {
              d: "M8 3.83331L12.6667 8.49998L8 13.1666",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })]
          })
        },
        m = {
          pillBtn: "rockstargames-sites-gta-gen9c881ff12d1d9fb612b4ddd89178684e4",
          selected: "rockstargames-sites-gta-gen9dece7a2abb867cf09add3f7429e7383b",
          calloutContainer: "rockstargames-sites-gta-gen9e8b19ed9af6aedef68997370cd508539",
          calloutSection: "rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f",
          calloutHeaders: "rockstargames-sites-gta-gen9e86d59dd2e0ab3c594c33eccde3e8fea",
          calloutHeaderMargins: "rockstargames-sites-gta-gen9d7d4d815f9e36b62ef54befcc89ca296",
          calloutHeader: "rockstargames-sites-gta-gen9fb0bbc5bcc4fb2c7d0b8152001df0497",
          calloutSubheader: "rockstargames-sites-gta-gen9f5fe27da672cf05e64359ada500a6b7a",
          calloutVoteForm: "rockstargames-sites-gta-gen9b5e2fa8800d39c78682d9ce8ce5e53f8",
          voteButton: "rockstargames-sites-gta-gen9ecdf609ed8d6c4039be969205b7e3ac0",
          upvote: "rockstargames-sites-gta-gen9f8d6a685395153161827b5cf8c6ddb93",
          downvote: "rockstargames-sites-gta-gen9b1953057e462cdf6c79a4b8e6f2fe91b",
          active: "rockstargames-sites-gta-gen9ec9f200e6987aebf6375c999eecd5dc3",
          calloutButton: "rockstargames-sites-gta-gen9b8ed029eb7d9b09c70caa4576bbb4c5a",
          calloutLink: "rockstargames-sites-gta-gen9bc07ececd6531f5df1c8cba48c846797",
          calloutLinkIcon: "rockstargames-sites-gta-gen9db31e98c20de15e8d5983285bd6ec92e",
          actionBlock: "rockstargames-sites-gta-gen9b1516576d0566f12c906be9e81407ce4",
          actionFooter: "rockstargames-sites-gta-gen9f713e165e153987c3855d93dc1614f4d"
        },
        g = e => {
          let {
            foreign_id: a,
            foreign_type: t
          } = e;
          const {
            track: n
          } = (0, i.useGtmTrack)(), {
            refetch: c
          } = (0, r.useQuery)(o.UserGetVote, {
            skip: !0
          }), [l] = (0, r.useMutation)(o.UserCastVote), [g, u] = (0, s.useState)(null), f = (0, s.useCallback)((e => {
            (async () => {
              if (e === g && null !== g) u(null);
              else {
                u(e), n({
                  event: "cta_" + (e ? "like" : "dislike"),
                  text: `${t} ${a}`
                });
                const s = {
                  foreignId: a,
                  foreignType: t,
                  vote: e
                };
                await l({
                  variables: s
                })
              }
            })()
          }), [a, t, g]);
          return (0, s.useEffect)((() => {
            a && t && (async () => {
              const e = await c({
                foreignId: a,
                foreignType: t
              });
              u(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [a, t]), (0, d.jsxs)("div", {
            className: m.calloutVoteForm,
            children: [(0, d.jsx)("button", {
              "aria-label": "upvote",
              className: [m.upvote, m.voteButton, g ? m.active : ""].join(" "),
              name: "upvote",
              onClick: () => f(!0),
              type: "button"
            }), (0, d.jsx)("button", {
              "aria-label": "downvote",
              className: [m.downvote, m.voteButton, !1 === g ? m.active : ""].join(" "),
              name: "downvote",
              onClick: () => f(!1),
              type: "button"
            })]
          })
        },
        u = e => {
          let {
            action_text: a,
            link: t,
            trackingData: s
          } = e;
          const {
            track: n
          } = (0, i.useGtmTrack)();
          return (0, d.jsx)("a", {
            href: t,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, d.jsxs)("button", {
              className: m.calloutLink,
              type: "button",
              onClick: s ? () => n({
                ...s
              }) : () => {},
              children: [a, (0, d.jsx)(l, {
                className: m.calloutLinkIcon
              })]
            })
          })
        },
        f = e => {
          let {
            helperText: a,
            linkText: t,
            link: s,
            trackingData: n
          } = e;
          const {
            track: r
          } = (0, i.useGtmTrack)();
          return (0, d.jsxs)("div", {
            className: m.actionFooter,
            children: [a, t && " ", t && (0, d.jsx)("a", {
              href: s ?? "",
              onClick: () => r({
                ...n
              }),
              children: t
            })]
          })
        },
        p = (0, r.withTranslations)((e => {
          let {
            header: a,
            subheader: t,
            type: o,
            action_text: l,
            link: p,
            foreign_id: b = document.location.pathname,
            foreign_type: k = "url",
            className: v = "",
            actionFooterHelperText: _,
            actionFooterLinkText: h,
            actionFooterLink: x,
            trackingData: y = {},
            actionFooterLinkTrackingData: N = {},
            t: j,
            ...w
          } = e;
          const {
            loggedIn: S
          } = (0, i.useRockstarUser)(), {
            track: C
          } = (0, i.useGtmTrack)(), T = document.location.pathname, {
            signInUrl: E
          } = (0, r.useScAuthLinks)(T), {
            ref: M,
            inView: L
          } = (0, n.useInView)({
            threshold: .6
          }), [I, P] = (0, s.useState)(!1);
          let z;
          if ((0, s.useEffect)((() => {
              L && !I && (C({
                event: "page_section_impression",
                element_placement: `callout section - ${w?.sectionName??w?._memoq?.header}`
              }), P(!0))
            }), [L]), !a && !t) return null;
          switch (o) {
            case "vote":
              if (!S) {
                z = (0, d.jsx)(c.A, {
                  to: E,
                  className: m.calloutButton,
                  onClick: y ? () => C({
                    ...y
                  }) : () => {},
                  children: "Log In"
                });
                break
              }
              z = (0, d.jsx)(g, {
                foreign_id: b,
                foreign_type: k
              });
              break;
            case "button":
              l && p && (z = (0, d.jsx)(c.A, {
                to: p,
                className: m.calloutButton,
                onClick: y ? () => C({
                  ...y
                }) : () => {},
                children: l
              }));
              break;
            case "link":
              l && p && (z = (0, d.jsx)(u, {
                action_text: l,
                link: p,
                trackingData: y
              }));
              break;
            default:
              z = null
          }
          return (0, d.jsx)("div", {
            className: `${m.calloutContainer} ${v||""}`,
            ref: M,
            children: (0, d.jsxs)("div", {
              className: m.calloutSection,
              children: [(0, d.jsxs)("div", {
                className: [m.calloutHeaders, z ? m.calloutHeaderMargins : ""].join(" "),
                children: [a && (0, d.jsx)("h2", {
                  className: m.calloutHeader,
                  children: j(a)
                }), t && (0, d.jsx)("h3", {
                  className: m.calloutSubheader,
                  children: j(t)
                })]
              }), (0, d.jsxs)("div", {
                className: m.actionBlock,
                children: [z, _ && (0, d.jsx)(f, {
                  helperText: _,
                  linkText: h,
                  link: x,
                  trackingData: N
                })]
              })]
            })
          })
        }))
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
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ab528316ca7d31c2b041b62c4ce5dd36.jpg"
    },
    89303: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/515f2884036e870905ae53f156692721.svg"
    },
    89836: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3689ac97526f00a4537e1b38ec82a074.svg"
    },
    90377: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a69bebbefae64314172002dd2bae0a34.jpg"
    },
    90635: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => l
      });
      var s = t(62229),
        n = t(17048),
        r = t.n(n),
        i = t(95966);
      const o = {
        pillBtn: "rockstargames-sites-gta-gen9c1ed14af6fceaba7c99728a81676dd92",
        selected: "rockstargames-sites-gta-gen9e49b5a5fd4ab934ece172fffe9f6577e",
        grid: "rockstargames-sites-gta-gen9be627ae18a7bd3cff72d3f11aeed67df",
        itemList: "rockstargames-sites-gta-gen9d9620ae764026da5584e0f0a5886c992",
        gtaplus: "rockstargames-sites-gta-gen9fbf343ed03c1bd513ea4cadc9726af76",
        rdo: "rockstargames-sites-gta-gen9b2194fe129aa210950dcb07b88a28c13",
        noImg: "rockstargames-sites-gta-gen9bbb7247d5d7a836d755491e85639f1a3",
        gtao: "rockstargames-sites-gta-gen9ffaf58c543b36fd7fb4efec24b3564bc",
        custom: "rockstargames-sites-gta-gen9cc2c26a3dd80cf9db62c4c7f389b7859",
        yellow: "rockstargames-sites-gta-gen9ce372826eac3cc73094d69c0c5d9a530",
        hotPink: "rockstargames-sites-gta-gen9edb9998d6516a5aa1aece9c07c1768be",
        red: "rockstargames-sites-gta-gen9f674d6037f10af1a1fe41a83c1e5da17",
        turquoise: "rockstargames-sites-gta-gen9e211b0b8ae00897d696af259b3ddd837",
        purple: "rockstargames-sites-gta-gen9e61db4af0805bb4c9bf820c26ac8a85f",
        teal: "rockstargames-sites-gta-gen9a379d41268f4f002d5ac257f67461f1d",
        blue: "rockstargames-sites-gta-gen9bffe0939bda9e26ad14f6b01669338a8",
        green: "rockstargames-sites-gta-gen9f9c1eebf59650cd8ee84191d8fc62874",
        darkRed: "rockstargames-sites-gta-gen9d44e2fc53f269ccf2b8fbe032ef6cec9",
        darkBlue: "rockstargames-sites-gta-gen9e2b6f722952b5d61d2a3b725166bfc9b",
        goldenrod: "rockstargames-sites-gta-gen9a365c5895cfd6c9f94fc994d71ba402c",
        skull: "rockstargames-sites-gta-gen9b2a1c0b367b250fe0606dffece9e1c02"
      };
      var c = t(25854);
      const {
        sanitize: d
      } = r(), l = e => {
        let {
          list: a,
          string: t,
          starColor: n,
          style: r,
          className: l,
          game: m,
          noImg: g,
          columns: u,
          mobileColumns: f
        } = e;
        const [p, b] = (0, s.useState)(null);
        if ((0, s.useEffect)((() => {
            b(a)
          }), [a]), !t && !a) return null;
        const k = {
          color: r?.color
        };
        return delete r?.color, u && p ? (0, c.jsx)("div", {
          className: o.grid,
          style: {
            "--ordered-list-grid-column": u,
            "--ordered-list-grid-column-mobile": f ?? u
          },
          children: (0, c.jsx)("ol", {
            className: (0, i.classList)(o.itemList, o.noImg, o[n], o[m]),
            style: (0, i.safeStyles)(r),
            children: p.map((e => (0, c.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: d(e.content)
              },
              style: k
            }, e.content)))
          })
        }) : (0, c.jsx)("ol", {
          style: (0, i.safeStyles)(r),
          className: (0, i.classList)(o.itemList, o.custom, g ? o.noImg : "", n ? o[n] : "", m ? o[m] : "", l ?? ""),
          children: a.map((e => (0, c.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: d(e?.content ?? e)
            }
          }, e?.content)))
        })
      }
    },
    90717: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c3fe2a9610ca8b42807dfa99073d68b3.svg"
    },
    91480: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6bf5412b358a42300603159932412051.jpg"
    },
    91644: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => f,
        h: () => u
      });
      var s = t(62229),
        n = t(95966),
        r = t(9623),
        i = t(14474),
        o = t(62665),
        c = t(2918);
      var d = t(25854);
      const l = e => {
          let {
            modal: a
          } = e;
          const {
            content: t,
            className: l,
            height: m,
            onClose: g,
            rect: u = {
              left: 0,
              top: 0
            },
            contentStyle: f = {},
            contentClassName: p = "",
            width: b,
            fadeIn: k = !0,
            cardIds: v,
            activeId: _,
            theme: h,
            title: x,
            gtm: y = {},
            aspectRatio: N = "default",
            cardDimensions: j
          } = a, {
            left: w,
            top: S
          } = u, C = v?.indexOf(_), [T, E] = (0, s.useState)(v?.length || 0), {
            track: M
          } = (0, c.useGtmTrack)(), L = null !== v && (v?.length || 0) > 1 && ("flag_bg" === h || "fob" === j?.size), I = window.location.href.includes("cms5"), [P, z] = (0, r.useSearchParams)(), [A, D] = (0, s.useState)(!1), [$, B] = (0, s.useState)(!1), [V, O] = (0, s.useState)(), R = e => {
            "number" == typeof e && v && e < v.length && e > -1 && z({
              info: v[e].toString()
            })
          }, F = () => {
            const e = "number" == typeof C && C > -1 ? C - 1 : 0;
            R(e), M({
              event: "modal_previous",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              element_placement: x?.toLowerCase(),
              position: C
            })
          }, G = () => {
            const e = "number" == typeof C && C > -1 ? C + 1 : 0;
            R(e), M({
              event: "modal_next",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              element_placement: x?.toLowerCase(),
              position: C
            })
          };
          (0, s.useEffect)((() => {
            E(v?.length || 0)
          }), [v?.length]), (0, s.useEffect)((() => {
            null !== C && null !== v && R(C)
          }), [C, v]), (0, s.useEffect)((() => {
            const e = v?.findIndex((e => e === _));
            "number" == typeof e && (B(e <= 0), D(e >= T - 1))
          }), [v, _, T, P]);
          const [H] = (0, s.useState)({
            y: S,
            x: w,
            top: 0,
            left: 0,
            width: b,
            height: m,
            border: "0px solid transparent",
            background: "transparent",
            marginTop: L ? "0" : ""
          }), U = {
            opacity: 1
          }, W = (0, s.useRef)(null), q = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, Y = {
            ease: "easeIn",
            duration: .3,
            delay: .5
          }, [K] = (0, s.useState)({
            x: "-50%",
            y: "-50%",
            top: "50%",
            left: "50%",
            width: "calc(100vw - (var(--modal-padding) * 2))",
            height: "var(--modal-height)",
            border: "1px solid var(--border-color, #2d2d2d)",
            background: "var(--black-100)",
            marginTop: L ? "calc(var(--modal-controlsHeight) - var(--modal-padding))" : "",
            transition: {
              x: q,
              y: q,
              top: q,
              left: q,
              width: q,
              height: q,
              border: q,
              background: {
                delay: .3
              }
            }
          }), [Q, X] = (0, s.useState)({
            initial: H,
            shown: K
          });
          (0, s.useEffect)((() => {
            X({
              initial: H,
              shown: K
            })
          }), [H, K]), (0, s.useEffect)((() => {
            const e = e => {
              "function" == typeof g && "Escape" === e.key && (g(), M({
                event: "modal_close",
                element_placement: x?.toLowerCase(),
                ...y
              }))
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []);
          const Z = () => {
              "function" == typeof g && (g(), M({
                event: "modal_close",
                element_placement: x?.toLowerCase(),
                ...y
              }))
            },
            J = (e, a) => {
              if (!e || !e.children || a < 0) return null;
              for (let t = 0; t < e.children.length; t++) {
                const s = e.children[t];
                if (s.scrollHeight > s.clientHeight) return s;
                const n = J(s, a - 1);
                if (n) return n
              }
              return null
            },
            ee = e => {
              if (te?.current?.children) {
                let a = null;
                const t = "ArrowDown" === e.key ? 25 : "ArrowUp" === e.key ? -25 : 0;
                switch (e.key) {
                  case "ArrowDown":
                  case "ArrowUp":
                    a = (e => {
                      let a = null;
                      return V?.queried ? a = V.element : (a = J(e, 2), O({
                        queried: !0,
                        element: a
                      })), a
                    })(te.current), e.preventDefault(), a && (a.scrollTop += t)
                }
              }
            },
            ae = k ? 0 : 1,
            te = (0, s.useRef)(null),
            se = (0, d.jsx)(o.motion.button, {
              className: "rockstargames-sites-gta-gen9f462dceb5efde1dd4885f34f45132e3d",
              "aria-label": "Close",
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: Y,
              onClick: () => {
                Z()
              },
              onKeyDown: ee,
              onKeyUp: ee
            });
          let ne = null;
          return ne = I ? s.Fragment : i.Ay, (0, s.useMemo)((() => (0, d.jsx)("div", {
            className: "rockstargames-sites-gta-gen9a1a5465ff4d4669854d9beb4e863413e",
            "data-show-nav": L,
            "data-aspect-ratio": N,
            children: (0, d.jsx)(ne, {
              children: (0, d.jsxs)("div", {
                children: [(0, d.jsx)(o.motion.div, {
                  className: "rockstargames-sites-gta-gen9cf4f951d4ea408858a9b48c822007342",
                  initial: {
                    opacity: 0
                  },
                  animate: U,
                  transition: q,
                  onClick: () => Z()
                }), L && (0, d.jsxs)("div", {
                  className: "rockstargames-sites-gta-gen9d5753adf78798ed2e5e2ab02678cfe1b",
                  children: [(0, d.jsxs)(o.motion.div, {
                    className: "rockstargames-sites-gta-gen9dbb0055ba799f28f1a2e41026b8781e8",
                    initial: {
                      opacity: 0
                    },
                    animate: {
                      opacity: 1
                    },
                    transition: Y,
                    children: [(0, d.jsx)("button", {
                      type: "button",
                      "aria-label": "Previous",
                      onClick: F,
                      disabled: $,
                      onKeyDown: ee,
                      onKeyUp: ee
                    }), (0, d.jsxs)("div", {
                      className: "rockstargames-sites-gta-gen9e316695281c4c56337307741bda1371f",
                      "data-theme": h,
                      children: [" ", (C ?? 0) + 1, (0, d.jsx)("div", {
                        className: "rockstargames-sites-gta-gen9c1ee424eae15f7b789c86e634df9e28d"
                      }), v?.length, " "]
                    }), (0, d.jsx)("button", {
                      type: "button",
                      "aria-label": "Next",
                      onClick: G,
                      disabled: A,
                      onKeyDown: ee,
                      onKeyUp: ee,
                      "data-autofocus": !0
                    })]
                  }), se]
                }), (0, d.jsx)(o.motion.div, {
                  className: "rockstargames-sites-gta-gen9e708da42918d8bbff9a8e1a36a2c4366",
                  ref: W,
                  initial: "initial",
                  animate: "shown",
                  variants: Q,
                  transition: q,
                  style: f,
                  children: (0, d.jsxs)(o.motion.div, {
                    className: (0, n.classList)("rockstargames-sites-gta-gen9a7d77f83f629e9ae93f6934c8ba007b0", l),
                    id: "modal",
                    "data-testid": "modal",
                    role: "dialog",
                    children: [!L && se, (0, d.jsx)(o.motion.div, {
                      className: (0, n.classList)("rockstargames-sites-gta-gen9f26fc1babb8dd1284d4c03b3dabff714", p),
                      initial: {
                        opacity: ae
                      },
                      animate: {
                        opacity: 1
                      },
                      transition: Y,
                      ref: te,
                      children: t
                    }), (0, d.jsx)("button", {
                      className: "rockstargames-sites-gta-gen9ea8f15b1bfbda9f3efef89dc0d2ebc89",
                      type: "button",
                      "aria-label": "End of modal"
                    })]
                  })
                })]
              })
            })
          })), [t, C, f])
        },
        m = [null, () => null],
        g = (0, n.setContextItem)({
          context: (0, s.createContext)(m),
          key: "modalContext"
        }),
        u = () => (0, s.useContext)(g),
        f = e => {
          let {
            children: a
          } = e;
          const [t, r] = (0, s.useState)(m), {
            setBodyIsLocked: i
          } = (0, n.useBodyScrollable)("ModalProvider"), o = (0, s.useMemo)((() => t?.content ? (0, d.jsx)(l, {
            modal: t
          }) : null), [t]), c = () => i(!1);
          return (0, s.useEffect)((() => (window.addEventListener("popstate", c), () => {
            window.removeEventListener("popstate", c)
          })), []), (0, s.useEffect)((() => {
            i(!!o)
          }), [o]), (0, d.jsx)(g.Provider, {
            value: [o, r],
            children: a
          })
        }
    },
    92041: (e, a, t) => {
      "use strict";
      t.d(a, {
        YT: () => o,
        lv: () => c,
        Ay: () => d
      });
      var s = t(25854);
      let n = null,
        r = null,
        i = "";
      n = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/91b881fc47ab8f61e9d3fbb515272656.svg", r = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9822b4be8e173b12a152443a538ee613.svg", i = "PC Legacy";
      let o = function(e) {
          return e.small = "small", e.large = "large", e
        }({}),
        c = function(e) {
          return e.pc = "pc", e.pcAlt = "pcalt", e.ps4 = "ps4", e.ps5 = "ps5", e.ps = "ps", e.np = "np", e.xboxOne = "xboxone", e.xboxSeries = "xboxsx", e.xbox = "xbl", e
        }({});
      const d = e => {
        let {
          tagSize: a,
          platform: t
        } = e;
        const {
          src: n,
          alt: r
        } = ((e, a) => {
          const t = a === o.small;
          switch (e) {
            case c.pc:
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/91b881fc47ab8f61e9d3fbb515272656.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9822b4be8e173b12a152443a538ee613.svg", alt: "PC Legacy"
              };
            case c.pcAlt:
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b0c35912b602cae2ecdacb21a992ca7.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0f7ec13ed3fbe1c1389f38d189869ada.svg", alt: "PC Enhanced"
              };
            case c.ps4:
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6054f77c4450b075b6059eda658a510d.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/941a1141a404ed211f7d23ed36ccee23.svg", alt: "PS4"
              };
            case c.ps5:
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c577e2612120d70330b797e6ee5487d9.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04d319f216248f3df7f9727df641b832.svg", alt: "PS5"
              };
            case c.xboxOne:
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c8ee10e269f42d96c58c1eb016717e1.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e18ef78074a128424a94ab6313dd332.svg", alt: "Xbox One"
              };
            case c.xboxSeries:
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61f1cfebde0508725354fa6c2bdda0b4.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c91f19b5ea19868e280034220acf6740.svg", alt: "Xbox Series X|S"
              };
            case c.ps:
            case c.np:
              return {
                src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9360dcc4d2c470d84e308ad6b5e4c037.svg", alt: "PS"
              };
            case c.xbox:
              return {
                src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c0834bf9f8603f0af3841a1d42cff529.svg", alt: "Xbox"
              };
            default:
              return {
                src: "", alt: ""
              }
          }
        })(t, a);
        return (0, s.jsx)("img", {
          className: "rockstargames-sites-gta-gen9b0ff0045ed0326a46ca1e0867d2050c1",
          "data-testid": "platform-tag",
          "data-platform": t,
          "data-tag-size": a,
          src: n,
          alt: r
        })
      }
    },
    92244: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4f086bb17e0de94d33c4031f30fff704.jpg"
    },
    93573: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f79f3baf4a020b34cf9d3cf29d71f4e.jpg"
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
      var a = {
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

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: 'query GameData(\n    $titleSlug: String!\n    $locale: String!\n    $withMetaTitle: Boolean = false\n    $metaUrl: String = "/"\n) {\n    meta: metaUrl(locale: $locale, domain: "www", url: $metaUrl)\n        @include(if: $withMetaTitle) {\n        title\n    }\n    game(titleSlug: $titleSlug, locale: $locale) {\n        ratingDescriptors\n        ratingFooter\n        ratingImg\n        ratingUrl\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function n(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.GameData = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          i = new Set,
          o = new Set;
        for (r.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var s = n(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "GameData")
    },
    95903: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fa649a5d6b52121271093a7c564cc56a.jpg"
    },
    96148: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5239707dea0f2f4ea8351f64e6b5a921.jpg"
    },
    97558: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51b141250a4851d7ec3673d88dbd20a.png"
    },
    98754: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    },
    98952: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/85250e8a0e5a5a1209f214423f6ebe43.svg"
    },
    99217: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => l
      });
      var s = t(95966),
        n = t(75385),
        r = t(70818),
        i = t(83933);
      const o = "rockstargames-sites-gta-gen9acd27eff2209196752622710f7b27558";
      var c = t(25854);
      const d = e => {
          let {
            to: a,
            children: t
          } = e;
          return a ? (0, c.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noreferrer",
            children: t
          }) : t
        },
        l = e => {
          let {
            item: a,
            className: t = ""
          } = e;
          return (0, c.jsxs)("div", {
            className: (0, s.classList)("rockstargames-sites-gta-gen9f8bc9589974046cdac4a2264be12d2df", t),
            children: [a.title && (0, c.jsx)(d, {
              to: a?.href ?? a?.to,
              children: (0, c.jsx)("h3", {
                children: a.title
              })
            }), Array.isArray(a?.description?.content) ? a.description.content?.map(((e, a) => e?.unorderedList ? (0, c.jsx)(r.A, {
              columns: e.unorderedList.columns ?? null,
              style: {
                "--unordered-list-padding": "var(--grid-gap-static-sm)",
                "--unordered-list-margin-bottom": ".5rem"
              },
              noImg: !0,
              list: e.unorderedList.list
            }, a) : e?.image ? (0, c.jsx)(n.A, {
              image: e.image,
              className: e?.className
            }, a) : e?.separator ? (0, c.jsx)("div", {
              style: {
                margin: `${e.separator.spacing} 0`
              },
              children: (0, c.jsx)(i.A, {})
            }, a) : (0, c.jsx)("p", {
              children: (0, c.jsx)("span", {
                className: o,
                dangerouslySetInnerHTML: {
                  __html: e
                }
              })
            }, a))) : (0, c.jsx)("span", {
              className: o,
              dangerouslySetInnerHTML: {
                __html: a.description
              }
            })]
          })
        }
    }
  }
]);