try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "e098ff70-ef16-4e3d-8e49-33cd26a2a9a0", e._sentryDebugIdIdentifier = "sentry-dbid-e098ff70-ef16-4e3d-8e49-33cd26a2a9a0")
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
  [9437], {
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
    6522: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5df3b2d018d1e8e9b424b9eaebc86b16.jpg"
    },
    6927: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/81f92d6438abb2b88c813d8eaeab8d3f.jpg"
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
    11016: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/74576fdc36948700777d06f9b8db2eec.jpg"
    },
    12602: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dd4b0f40e745f4347c822594da56a119.jpg"
    },
    13095: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e7d916fcce2bbe9b6419f914f290597.jpg"
    },
    13890: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4eaaed791df32e91f97107b262830371.jpg"
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
        A: () => j
      });
      var s = t(42295),
        o = t(62229),
        m = t(24162),
        r = t(16458),
        d = t(91179),
        c = t(2918),
        i = t(4572),
        p = t.n(i),
        g = t(81788);
      const n = (0, g.defineMessages)({
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
      const b = {
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
        j = (0, t(19732).g)(({
          vids: e,
          games: a,
          title: t,
          gameTitleNecessary: i
        }) => {
          const j = (0, g.useIntl)(),
            {
              track: l
            } = (0, c.useGtmTrack)(),
            k = void 0 !== a ? "games" : "videos",
            [_, u] = (0, o.useState)(),
            [h, x] = (0, o.useState)(),
            [z, I] = (0, o.useState)(0),
            V = (0, o.useRef)(null),
            v = (0, o.useRef)(null);
          (0, o.useEffect)(() => {
            x({
              nextEl: v.current,
              prevEl: V.current
            })
          }, [v, V]), (0, o.useEffect)(() => {
            const e = () => {
              const e = e => window.matchMedia(`(max-width: ${e})`).matches;
              let a = 4;
              e("768px") ? a = 1 : e("990px") || e("1440px") ? a = 2.2 : e("1920px") && (a = 3.2), I(a)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }, [z]);
          const y = e => {
            _?.slideTo(e)
          };
          let w;
          return w = "games" === k ? (0, s.jsx)(s.Fragment, {
            children: a.results.map((e, a) => "775700as" !== e.id && (0, s.jsx)(m.qr, {
              className: b.slide,
              onFocus: () => y(a),
              children: (0, s.jsx)(f.N, {
                game: e,
                dontOverrideTo: !0,
                to: `/videos?type=game&gameId=${e.id}`
              })
            }, e.id))
          }) : (0, s.jsx)(s.Fragment, {
            children: e.map((e, a) => (0, s.jsx)(m.qr, {
              className: b.slide,
              onFocus: () => y(a),
              children: (0, s.jsx)(d.N, {
                video: e,
                gameTitleNecessary: i
              })
            }, e.id))
          }), (0, s.jsxs)("section", {
            className: b.videoList,
            children: [(0, s.jsxs)("h3", {
              className: b.sectionHeader,
              children: [t, (0, s.jsxs)("div", {
                className: b.arrowNav,
                children: [(0, s.jsx)("button", {
                  className: [b.arrow, b.previous].join(" "),
                  type: "button",
                  ref: V,
                  "aria-label": j.formatMessage(n.previous_button_label)
                }), (0, s.jsx)("button", {
                  className: [b.arrow, b.next].join(" "),
                  type: "button",
                  ref: v,
                  "aria-label": j.formatMessage(n.next_button_label),
                  onKeyDown: e => {
                    if ("Tab" === e.key && !e.shiftKey) {
                      const a = _?.slides[_?.activeIndex].querySelector('a, button, [role="button"]');
                      a && (e.preventDefault(), a.focus())
                    }
                  }
                })]
              })]
            }), (0, s.jsx)("div", {
              className: [b.items, z % 1 != 0 ? b.partial : ""].join(" "),
              children: (0, s.jsx)("div", {
                className: b.trackWrapper,
                children: z && (0, s.jsx)(m.RC, {
                  className: b.track,
                  slidesPerView: z,
                  spaceBetween: 24,
                  onInit: e => {
                    u(e)
                  },
                  grabCursor: !0,
                  navigation: h,
                  modules: [r.Vx],
                  slideClass: p()("swiper-slide"),
                  onSlideNextTransitionEnd: () => {
                    l({
                      event: "carousel_next",
                      element_placement: t?.toLowerCase() ?? ""
                    })
                  },
                  onSlidePrevTransitionEnd: () => {
                    l({
                      event: "carousel_previous",
                      element_placement: t?.toLowerCase() ?? ""
                    })
                  },
                  onSlideChangeTransitionEnd: () => {
                    l({
                      event: "carousel_swipe",
                      element_placement: t?.toLowerCase() ?? ""
                    })
                  },
                  children: w
                })
              })
            })]
          })
        })
    },
    16044: (e, a, t) => {
      var s = {
        "./VI/mobile/de_de.jpg": 35996,
        "./VI/mobile/en_us.jpg": 27109,
        "./VI/mobile/es_es.jpg": 79258,
        "./VI/mobile/es_mx.jpg": 36725,
        "./VI/mobile/fr_fr.jpg": 83118,
        "./VI/mobile/it_it.jpg": 34416,
        "./VI/mobile/ja_jp.jpg": 84705,
        "./VI/mobile/ko_kr.jpg": 33055,
        "./VI/mobile/pl_pl.jpg": 37098,
        "./VI/mobile/pt_br.jpg": 84598,
        "./VI/mobile/ru_ru.jpg": 20340,
        "./VI/mobile/zh_hans.jpg": 16264,
        "./VI/mobile/zh_tw.jpg": 6927
      };

      function o(e) {
        var a = m(e);
        return t(a)
      }

      function m(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      o.keys = function() {
        return Object.keys(s)
      }, o.resolve = m, e.exports = o, o.id = 16044
    },
    16264: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a9ff3cac0e6f01352186a60a37f17a8f.jpg"
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
        o = t(62229),
        m = t(95966);
      const r = {
        img: "rockstargames-sites-rockstargamesd87037fda2ea106061c7a614036a89df",
        imgContentful: "rockstargames-sites-rockstargamesb9f3c994ce8a97ac6530cf0a85e5abe0",
        wide: "rockstargames-sites-rockstargamesdc444c089b89129c0a39bc61845d531f"
      };
      (0, m.importAll)(t(86751));
      const d = ({
        isWideCard: e = !1,
        size: a = 640,
        title: d,
        titleSlug: c,
        inGlobalNav: i = !1
      }) => {
        const {
          isMobile: p
        } = (0, m.useWindowResize)(), g = (0, m.useLocale)(), n = (0, o.useMemo)(() => {
          let s = "";
          return e && (s = p ? t(16044)(`./${c}/mobile/${g}.jpg`) : t(51048)(`./${c}/desktop/${g}.jpg`)), s || (s = t(39294)(`./${c}.jpg`), s += `?im=Resize=${a}`), s
        }, [p, c]), [f] = (0, m.usePreloadImg)(n);
        let b = n;
        return (0, s.jsx)("div", {
          role: "img",
          "aria-label": d,
          style: {
            backgroundImage: `url(${b})`,
            borderRadius: i ? "unset" : ""
          },
          className: [r.img, f ? r.startAnimation : "", e ? r.wide : ""].join(" ")
        })
      }
    },
    19552: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61a79de8dea0228576a18068e4f2660a.jpg"
    },
    20144: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5050d09bf65a09d316c5c4344c2c38fb.jpg"
    },
    20340: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/524705aa18bd4ecfe65a7604fe553bea.jpg"
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
    26788: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    27064: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5aa471f90eaff248e0fbef79400cbbf3.jpg"
    },
    27109: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9184d16412d42140f30a1d0c16db22b1.jpg"
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
    33055: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4fb18f10480c1ce10ca7faaad9a2aea7.jpg"
    },
    33143: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    },
    34416: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d748d12cf8cc854121e8be9860ed409.jpg"
    },
    35996: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/44a3bdc0a87eb98dc369735737deaf33.jpg"
    },
    36725: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b48f3ad2d0327e0b1b30934487535181.jpg"
    },
    37098: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/79aabd673e6726aec41e898bb1b4dca5.jpg"
    },
    37758: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/42eaeed54ffe28ca0cf5ca0babdc19a4.jpg"
    },
    38537: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e66ce9502ddace9f8b0a8496f0cdcda.jpg"
    },
    39003: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1293618750cb6ba3f62e73c5633032f8.jpg"
    },
    39294: (e, a, t) => {
      var s = {
        "./GTAOnline.jpg": 10111,
        "./GTATrilogy.jpg": 84752,
        "./IV.jpg": 73483,
        "./V.jpg": 98754,
        "./VI.jpg": 1157,
        "./VI/desktop/de_de.jpg": 20144,
        "./VI/desktop/en_us.jpg": 40401,
        "./VI/desktop/es_es.jpg": 47534,
        "./VI/desktop/es_mx.jpg": 38537,
        "./VI/desktop/fr_fr.jpg": 72994,
        "./VI/desktop/it_it.jpg": 93668,
        "./VI/desktop/ja_jp.jpg": 63365,
        "./VI/desktop/ko_kr.jpg": 39003,
        "./VI/desktop/pl_pl.jpg": 37758,
        "./VI/desktop/pt_br.jpg": 13890,
        "./VI/desktop/ru_ru.jpg": 11016,
        "./VI/desktop/zh_hans.jpg": 95732,
        "./VI/desktop/zh_tw.jpg": 65667,
        "./VI/mobile/de_de.jpg": 35996,
        "./VI/mobile/en_us.jpg": 27109,
        "./VI/mobile/es_es.jpg": 79258,
        "./VI/mobile/es_mx.jpg": 36725,
        "./VI/mobile/fr_fr.jpg": 83118,
        "./VI/mobile/it_it.jpg": 34416,
        "./VI/mobile/ja_jp.jpg": 84705,
        "./VI/mobile/ko_kr.jpg": 33055,
        "./VI/mobile/pl_pl.jpg": 37098,
        "./VI/mobile/pt_br.jpg": 84598,
        "./VI/mobile/ru_ru.jpg": 20340,
        "./VI/mobile/zh_hans.jpg": 16264,
        "./VI/mobile/zh_tw.jpg": 6927,
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
        "./tabletennis.jpg": 6522,
        "./theballadofgaytony.jpg": 14825,
        "./thelostanddamned.jpg": 52591,
        "./thewarriors.jpg": 96148,
        "./undeadnightmare.jpg": 32830,
        "./vicecity.jpg": 91480,
        "./vicecitystories.jpg": 10869,
        "./wildmetal.jpg": 85613
      };

      function o(e) {
        var a = m(e);
        return t(a)
      }

      function m(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      o.keys = function() {
        return Object.keys(s)
      }, o.resolve = m, e.exports = o, o.id = 39294
    },
    40401: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5486652b229530cf4b752c25531e251f.jpg"
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
    47534: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e66ce9502ddace9f8b0a8496f0cdcda.jpg"
    },
    51048: (e, a, t) => {
      var s = {
        "./VI/desktop/de_de.jpg": 20144,
        "./VI/desktop/en_us.jpg": 40401,
        "./VI/desktop/es_es.jpg": 47534,
        "./VI/desktop/es_mx.jpg": 38537,
        "./VI/desktop/fr_fr.jpg": 72994,
        "./VI/desktop/it_it.jpg": 93668,
        "./VI/desktop/ja_jp.jpg": 63365,
        "./VI/desktop/ko_kr.jpg": 39003,
        "./VI/desktop/pl_pl.jpg": 37758,
        "./VI/desktop/pt_br.jpg": 13890,
        "./VI/desktop/ru_ru.jpg": 11016,
        "./VI/desktop/zh_hans.jpg": 95732,
        "./VI/desktop/zh_tw.jpg": 65667
      };

      function o(e) {
        var a = m(e);
        return t(a)
      }

      function m(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      o.keys = function() {
        return Object.keys(s)
      }, o.resolve = m, e.exports = o, o.id = 51048
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
    56275: (e, a, t) => {
      "use strict";
      t.d(a, {
        s: () => s.A,
        N: () => d
      });
      var s = t(18670),
        o = t(42295),
        m = t(14200);
      const r = {
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
          return (0, o.jsx)(m.A, {
            "data-gtm-category": "Games",
            "data-gtm-action": "Game Click-through",
            "data-gtm-label": t,
            "data-testid": `${t}-gamecard`,
            to: a ?? d,
            target: "_self",
            className: [r.fobLink, c ? r.wide : ""].join(" "),
            reloadDocument: c,
            children: (0, o.jsx)(s.A, {
              title: e.title,
              titleSlug: t,
              isWideCard: c,
              size: c ? 1740 : 480
            })
          })
        }
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
    63365: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6205f3bd39adb33d23221501f6506dc5.jpg"
    },
    63839: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a549b321910f5308200496f1893c2a5f.jpg"
    },
    64923: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/089fe525338554e2120a1aaaf81766d6.jpg"
    },
    65667: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3ce78f679abdee82651d753a47e38532.jpg"
    },
    67181: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5704d117b387578dfebe1290e556f963.jpg"
    },
    72994: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04fad38dffabad52092b45f9a3cee88b.jpg"
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
    79258: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b48f3ad2d0327e0b1b30934487535181.jpg"
    },
    79795: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/659db20d7a19cc70a0510c7d197cedf3.jpg"
    },
    83118: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d748d12cf8cc854121e8be9860ed409.jpg"
    },
    84598: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d33532ed9c8c08388d6ab4a0613520aa.jpg"
    },
    84705: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a9ff3cac0e6f01352186a60a37f17a8f.jpg"
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
        "./VI/desktop/de_de.jpg": 20144,
        "./VI/desktop/en_us.jpg": 40401,
        "./VI/desktop/es_es.jpg": 47534,
        "./VI/desktop/es_mx.jpg": 38537,
        "./VI/desktop/fr_fr.jpg": 72994,
        "./VI/desktop/it_it.jpg": 93668,
        "./VI/desktop/ja_jp.jpg": 63365,
        "./VI/desktop/ko_kr.jpg": 39003,
        "./VI/desktop/pl_pl.jpg": 37758,
        "./VI/desktop/pt_br.jpg": 13890,
        "./VI/desktop/ru_ru.jpg": 11016,
        "./VI/desktop/zh_hans.jpg": 95732,
        "./VI/desktop/zh_tw.jpg": 65667,
        "./VI/mobile/de_de.jpg": 35996,
        "./VI/mobile/en_us.jpg": 27109,
        "./VI/mobile/es_es.jpg": 79258,
        "./VI/mobile/es_mx.jpg": 36725,
        "./VI/mobile/fr_fr.jpg": 83118,
        "./VI/mobile/it_it.jpg": 34416,
        "./VI/mobile/ja_jp.jpg": 84705,
        "./VI/mobile/ko_kr.jpg": 33055,
        "./VI/mobile/pl_pl.jpg": 37098,
        "./VI/mobile/pt_br.jpg": 84598,
        "./VI/mobile/ru_ru.jpg": 20340,
        "./VI/mobile/zh_hans.jpg": 16264,
        "./VI/mobile/zh_tw.jpg": 6927,
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
        "./tabletennis.jpg": 6522,
        "./theballadofgaytony.jpg": 14825,
        "./thelostanddamned.jpg": 52591,
        "./thewarriors.jpg": 96148,
        "./undeadnightmare.jpg": 32830,
        "./vicecity.jpg": 91480,
        "./vicecitystories.jpg": 10869,
        "./wildmetal.jpg": 85613
      };

      function o(e) {
        var a = m(e);
        return t(a)
      }

      function m(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      o.keys = function() {
        return Object.keys(s)
      }, o.resolve = m, e.exports = o, o.id = 86751
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
        o = t(95966),
        m = t(14200);
      const r = {
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
            [m] = (0, o.usePreloadImg)(t());
          return (0, s.jsx)("div", {
            className: [r.screencap, m ? r.screencapLoaded : ""].join(" "),
            "aria-label": e?.title,
            role: "img",
            style: {
              background: `url(${t()}) center/cover`
            }
          })
        },
        c = ({
          gameTitleNecessary: e = !0,
          openInNewWindow: a = !1,
          video: t,
          size: o,
          toExplicit: c
        }) => {
          const i = c ?? `/videos/${t.id}`,
            p = {
              className: r.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": i
            },
            g = (0, s.jsxs)("div", {
              className: r.card,
              children: [(0, s.jsx)(d, {
                video: t,
                size: o
              }), (0, s.jsxs)("div", {
                className: r.info,
                children: [e ? (0, s.jsx)("div", {
                  className: r.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: t.game.title
                  }
                }) : "", (0, s.jsx)("h5", {
                  className: r.title,
                  dangerouslySetInnerHTML: {
                    __html: t.title
                  }
                })]
              })]
            });
          return a ? (0, s.jsx)("a", {
            href: i,
            target: "_blank",
            ...p,
            children: g
          }) : (0, s.jsx)(m.A, {
            to: i,
            ...p,
            children: g
          })
        }
    },
    91480: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6bf5412b358a42300603159932412051.jpg"
    },
    93573: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f79f3baf4a020b34cf9d3cf29d71f4e.jpg"
    },
    93668: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04fad38dffabad52092b45f9a3cee88b.jpg"
    },
    95732: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6205f3bd39adb33d23221501f6506dc5.jpg"
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