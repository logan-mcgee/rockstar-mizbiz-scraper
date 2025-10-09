try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "49a0b53d-6a8c-4b8d-93e4-431f47069b77", e._sentryDebugIdIdentifier = "sentry-dbid-49a0b53d-6a8c-4b8d-93e4-431f47069b77")
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
  [6992], {
    1157: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/090acda789de843d56780aa60c1f7056.jpg"
    },
    3818: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/774943ec47ce732040f48df3943a0a7c.jpg"
    },
    3933: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/116555df6799e584310484375c97a43f.jpg"
    },
    7509: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/15b671d990b1f3f941c6359b3235abf3.jpg"
    },
    8494: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f34231941013a609948485830c84c072.jpg"
    },
    10111: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
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
    14825: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14448aca4ceaab8680323ce19c963d68.jpg"
    },
    15221: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => b
      });
      var s = t(42295),
        r = t(62229),
        o = t(24162),
        m = t(34353),
        d = t(91179),
        c = t(2918),
        i = t(4572),
        n = t.n(i),
        g = t(81788);
      const p = (0, g.defineMessages)({
        next_button_label: {
          id: "next_button_label",
          description: "Aria label to indicate going to the next page of videos",
          defaultMessage: "Next video page"
        },
        previous_button_label: {
          id: "previous_button_label",
          description: "Aria label to indicate going to the previous page of videos",
          defaultMessage: "Previous video page"
        }
      });
      var f = t(56275);
      const l = {
          arrow: "rockstargames-sites-rockstargamescabb1073f7b7f75b799c87d74cfaf0ad",
          arrowNav: "rockstargames-sites-rockstargamesc9b73b78d75dd740e918208a9d615796",
          disabled: "rockstargames-sites-rockstargamesdbe1b06efadb349825f7b9b1b2778c68",
          items: "rockstargames-sites-rockstargamesef63b0224f0cc9fa73a9c4549ad6c7e9",
          next: "rockstargames-sites-rockstargamesbfdf85a5867d26b52a0962be91170e36",
          partial: "rockstargames-sites-rockstargamesab95829b388545f21071fd5bb97c25bb",
          previous: "rockstargames-sites-rockstargamesd7404262ef1f79bde0883b02110a4a5d",
          sectionHeader: "rockstargames-sites-rockstargamesad695c18d6276297e78924feea3e6201",
          track: "rockstargames-sites-rockstargamesa4d3877b3cf6bff0abccdc561c0fe149",
          trackWrapper: "rockstargames-sites-rockstargamesbd79ab04bc93e3bcf79be808e0a06e9b",
          videoList: "rockstargames-sites-rockstargamesbacddb57787eca7b621a046e6f23aaf5"
        },
        b = (0, t(19732).g)((({
          vids: e,
          games: a,
          title: t,
          gameTitleNecessary: i
        }) => {
          const b = (0, g.useIntl)(),
            {
              track: u
            } = (0, c.useGtmTrack)(),
            j = void 0 !== a ? "games" : "videos",
            [k, _] = (0, r.useState)(),
            [h, x] = (0, r.useState)(),
            [v, y] = (0, r.useState)(0),
            z = (0, r.useRef)(null),
            w = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            x({
              nextEl: w.current,
              prevEl: z.current
            })
          }), [w, z]), (0, r.useEffect)((() => {
            const e = () => {
              const e = e => window.matchMedia(`(max-width: ${e})`).matches;
              let a = 4;
              e("768px") ? a = 1 : e("990px") || e("1440px") ? a = 2.2 : e("1920px") && (a = 3.2), y(a)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [v]);
          const N = e => {
            k?.slideTo(e)
          };
          let T;
          return T = "games" === j ? (0, s.jsx)(s.Fragment, {
            children: a.results.map(((e, a) => "775700as" !== e.id && (0, s.jsx)(o.qr, {
              className: l.slide,
              onFocus: () => N(a),
              children: (0, s.jsx)(f.N, {
                game: e,
                dontOverrideTo: !0,
                to: `/videos?type=game&gameId=${e.id}`
              })
            }, e.id)))
          }) : (0, s.jsx)(s.Fragment, {
            children: e.map(((e, a) => (0, s.jsx)(o.qr, {
              className: l.slide,
              onFocus: () => N(a),
              children: (0, s.jsx)(d.N, {
                video: e,
                gameTitleNecessary: i
              })
            }, e.id)))
          }), (0, s.jsxs)("section", {
            className: l.videoList,
            children: [(0, s.jsxs)("h3", {
              className: l.sectionHeader,
              children: [t, (0, s.jsxs)("div", {
                className: l.arrowNav,
                children: [(0, s.jsx)("button", {
                  className: [l.arrow, l.previous].join(" "),
                  type: "button",
                  ref: z,
                  "aria-label": b.formatMessage(p.previous_button_label)
                }), (0, s.jsx)("button", {
                  className: [l.arrow, l.next].join(" "),
                  type: "button",
                  ref: w,
                  "aria-label": b.formatMessage(p.next_button_label),
                  onKeyDown: e => {
                    if ("Tab" === e.key && !e.shiftKey) {
                      const a = k?.slides[k?.activeIndex].querySelector('a, button, [role="button"]');
                      a && (e.preventDefault(), a.focus())
                    }
                  }
                })]
              })]
            }), (0, s.jsx)("div", {
              className: [l.items, v % 1 != 0 ? l.partial : ""].join(" "),
              children: (0, s.jsx)("div", {
                className: l.trackWrapper,
                children: v && (0, s.jsx)(o.RC, {
                  className: l.track,
                  slidesPerView: v,
                  spaceBetween: 24,
                  onInit: e => {
                    _(e)
                  },
                  grabCursor: !0,
                  navigation: h,
                  modules: [m.Vx],
                  slideClass: n()("swiper-slide"),
                  onSlideNextTransitionEnd: () => {
                    u({
                      event: "carousel_next",
                      element_placement: t?.toLowerCase() ?? ""
                    })
                  },
                  onSlidePrevTransitionEnd: () => {
                    u({
                      event: "carousel_previous",
                      element_placement: t?.toLowerCase() ?? ""
                    })
                  },
                  onSlideChangeTransitionEnd: () => {
                    u({
                      event: "carousel_swipe",
                      element_placement: t?.toLowerCase() ?? ""
                    })
                  },
                  children: T
                })
              })
            })]
          })
        }))
    },
    18518: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0281770395dc77e41c1f40559a3d5989.jpg"
    },
    18670: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => d
      });
      var s = t(42295),
        r = t(62229),
        o = t(95966);
      const m = {
        img: "rockstargames-sites-rockstargamesd87037fda2ea106061c7a614036a89df",
        imgContentful: "rockstargames-sites-rockstargamesb9f3c994ce8a97ac6530cf0a85e5abe0",
        wide: "rockstargames-sites-rockstargamesdc444c089b89129c0a39bc61845d531f"
      };
      (0, o.importAll)(t(86751));
      const d = ({
        isWideCard: e = !1,
        size: a = 640,
        title: d,
        titleSlug: c
      }) => {
        const {
          isMobile: i
        } = (0, o.useWindowResize)(), n = (0, r.useMemo)((() => {
          let s = "";
          return e && (s = i ? t(24865)(`./${c}/mobile.jpg`) : t(53781)(`./${c}/desktop.jpg`)), s || (s = t(39294)(`./${c}.jpg`), s += `?im=Resize=${a}`), s
        }), [i, c]), [g] = (0, o.usePreloadImg)(n);
        let p = n;
        return (0, s.jsx)("div", {
          role: "img",
          "aria-label": d,
          style: {
            backgroundImage: `url(${p})`
          },
          className: [m.img, g ? m.startAnimation : "", e ? m.wide : ""].join(" ")
        })
      }
    },
    19552: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61a79de8dea0228576a18068e4f2660a.jpg"
    },
    22844: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4a1657ff0ab4e3d45469556ba2f899c3.jpg"
    },
    23587: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b95ab415fdd8bec89099d433d23e3c7.jpg"
    },
    24808: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8977d6b170f295068d78c5bbb7b6f02d.jpg"
    },
    24865: (e, a, t) => {
      var s = {
        "./VI/mobile.jpg": 92244
      };

      function r(e) {
        var a = o(e);
        return t(a)
      }

      function o(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = o, e.exports = r, r.id = 24865
    },
    26788: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    27064: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5aa471f90eaff248e0fbef79400cbbf3.jpg"
    },
    28005: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/404be4f04081372768bb660a6c1991ba.jpg"
    },
    31248: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/082b847bcab37655faf903149f80f1e4.jpg"
    },
    32830: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14312e604f0637a2afd376dd571345d9.jpg"
    },
    33143: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
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

      function r(e) {
        var a = o(e);
        return t(a)
      }

      function o(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = o, e.exports = r, r.id = 39294
    },
    42043: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/809c3d6f72a6752f0ebcc6c92d43db67.jpg"
    },
    42787: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/81001f378e085cd20f8ee0182e23cb7c.jpg"
    },
    44596: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a8074783730a47af2fe5c2b67ddf7d31.jpg"
    },
    52014: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b13400360d3873aa5ed169d38da1ff9f.jpg"
    },
    52461: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b1034f3c525b39db31d9017268a0aeb5.jpg"
    },
    52591: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f9b044c847e4c971c6ac5d096fe3e0eb.jpg"
    },
    53781: (e, a, t) => {
      var s = {
        "./VI/desktop.jpg": 67496
      };

      function r(e) {
        var a = o(e);
        return t(a)
      }

      function o(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = o, e.exports = r, r.id = 53781
    },
    56275: (e, a, t) => {
      "use strict";
      t.d(a, {
        s: () => s.A,
        N: () => d
      });
      var s = t(18670),
        r = t(42295),
        o = t(14200);
      const m = {
          fobLink: "rockstargames-sites-rockstargamesd30ff40ba02b7ed14124da3ca9cd4f2b",
          wide: "rockstargames-sites-rockstargamesc9686ec502f78b05e47568667e90bd17"
        },
        d = ({
          game: e,
          to: a
        }) => {
          const {
            titleSlug: t,
            urlOfficial: d = ""
          } = e, c = ["VI"].includes(t.toUpperCase());
          return (0, r.jsx)(o.A, {
            "data-gtm-category": "Games",
            "data-gtm-action": "Game Click-through",
            "data-gtm-label": t,
            "data-testid": `${t}-gamecard`,
            to: a ?? d,
            target: "_self",
            className: [m.fobLink, c ? m.wide : ""].join(" "),
            reloadDocument: c,
            children: (0, r.jsx)(s.A, {
              title: e.title,
              titleSlug: t,
              isWideCard: c,
              size: c ? 1740 : 480
            })
          })
        }
    },
    56992: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        default: () => n
      });
      var s = t(42295),
        r = t(62229),
        o = t(9623),
        m = t(15221),
        d = t(31879),
        c = t(95966),
        i = t(87790);
      const n = (0, c.withTranslations)((({
        t: e
      }) => {
        const [a] = (0, o.useSearchParams)(), t = (0, o.useNavigate)(), {
          setNormalLogo: c,
          setBreadcrumb: n,
          setTitle: g
        } = (0, i.b)(), {
          videoId: p
        } = (0, o.useParams)(), {
          video: f,
          related: l
        } = (0, d.useVideoData)({
          id: p
        }), b = a.get("resolution") ?? "_auto";
        return (0, r.useEffect)((() => (n([{
          href: "/videos",
          title: e("Videos")
        }]), c(!1), () => {
          c(!0), n()
        })), []), (0, r.useEffect)((() => {
          f && g(`${f.game.title} - ${f.title}`)
        }), [f]), f && p ? (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(d.PlayerWithInfo, {
            resolution: b,
            videoId: p,
            videoChangeCallback: e => {
              t(`../videos/${e}`)
            }
          }), l?.results?.length ? (0, s.jsx)(m.A, {
            vids: l.results,
            title: e("Related Videos")
          }) : ""]
        }) : null
      }))
    },
    57258: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0f31b4df90bff5bab740485f2d4b8253.jpg"
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
    63839: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a549b321910f5308200496f1893c2a5f.jpg"
    },
    64923: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/089fe525338554e2120a1aaaf81766d6.jpg"
    },
    67181: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5704d117b387578dfebe1290e556f963.jpg"
    },
    67496: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/372e91ece1e13eda3ec63d6dfc06f7ce.jpg"
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
    77321: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fd74a091e2e5765c8769668cc515e494.jpg"
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
    84141: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5df3b2d018d1e8e9b424b9eaebc86b16.jpg"
    },
    84715: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/16e65ca64eafabe331ef1d2bef9c6f16.jpg"
    },
    84752: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/214a1cd1a2e7bb8f9b1e5d3846ca2993.jpg"
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

      function r(e) {
        var a = o(e);
        return t(a)
      }

      function o(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = o, e.exports = r, r.id = 86751
    },
    89273: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ab528316ca7d31c2b041b62c4ce5dd36.jpg"
    },
    90377: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a69bebbefae64314172002dd2bae0a34.jpg"
    },
    91179: (e, a, t) => {
      "use strict";
      t.d(a, {
        s: () => d,
        N: () => c
      });
      var s = t(42295),
        r = t(95966),
        o = t(14200);
      const m = {
          card: "rockstargames-sites-rockstargamesf93031694e202c791c00e5ae3497250a",
          gameTitle: "rockstargames-sites-rockstargamesa1fe577b937c0e16250bf38e9d775061",
          info: "rockstargames-sites-rockstargamesdabce30c906fad181d7cc188f1632c04",
          screencap: "rockstargames-sites-rockstargamesfd37974f16cd1f2376fef29d4af8d948",
          screencapLoaded: "rockstargames-sites-rockstargamesb8d4ef3e1a73c58f4002eab351d4eec2",
          title: "rockstargames-sites-rockstargamesfd87597d0f90ed6d8a2081da933f53bc",
          videoPreview: "rockstargames-sites-rockstargamesa626ad482ff0be0336e75929516654d5"
        },
        d = ({
          video: e,
          size: a = 640
        }) => {
          const t = () => e.screencap.includes("akamai") ? `${e.screencap}?im=Resize=${a}` : e.screencap,
            [o] = (0, r.usePreloadImg)(t());
          return (0, s.jsx)("div", {
            className: [m.screencap, o ? m.screencapLoaded : ""].join(" "),
            style: {
              background: `url(${t()}) center/cover`
            }
          })
        },
        c = ({
          gameTitleNecessary: e = !0,
          openInNewWindow: a = !1,
          video: t,
          size: r,
          toExplicit: c
        }) => {
          const i = c ?? `/videos/${t.id}`,
            n = {
              className: m.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": i
            },
            g = (0, s.jsxs)("div", {
              className: m.card,
              children: [(0, s.jsx)(d, {
                video: t,
                size: r
              }), (0, s.jsxs)("div", {
                className: m.info,
                children: [e ? (0, s.jsx)("div", {
                  className: m.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: t.game.title
                  }
                }) : "", (0, s.jsx)("h5", {
                  className: m.title,
                  dangerouslySetInnerHTML: {
                    __html: t.title
                  }
                })]
              })]
            });
          return a ? (0, s.jsx)("a", {
            href: i,
            target: "_blank",
            ...n,
            children: g
          }) : (0, s.jsx)(o.A, {
            to: i,
            ...n,
            children: g
          })
        }
    },
    91480: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6bf5412b358a42300603159932412051.jpg"
    },
    92244: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4f086bb17e0de94d33c4031f30fff704.jpg"
    },
    93573: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f79f3baf4a020b34cf9d3cf29d71f4e.jpg"
    },
    95903: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fa649a5d6b52121271093a7c564cc56a.jpg"
    },
    96148: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5239707dea0f2f4ea8351f64e6b5a921.jpg"
    },
    98754: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    }
  }
]);