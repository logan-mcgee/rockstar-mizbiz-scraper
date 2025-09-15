try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "6208028e-9ef7-4321-8334-c990aaf71e6e", e._sentryDebugIdIdentifier = "sentry-dbid-6208028e-9ef7-4321-8334-c990aaf71e6e")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [8850], {
    1157: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/090acda789de843d56780aa60c1f7056.jpg"
    },
    2600: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => b
      });
      var s = t(42295),
        r = t(62229),
        o = t(2918),
        c = t(95966),
        m = t(81788),
        i = t(87731),
        d = t.n(i),
        n = t(14200),
        g = t(29625),
        p = t(91179);
      const f = {
          active: "rockstargames-sites-rockstargamese35688e0d87409e3aef95ffb624d94f4",
          carousel: "rockstargames-sites-rockstargamesbc3f1abaac4c17c0e9aaac5fccfc6f7e",
          cta: "rockstargames-sites-rockstargamesf40c40ed1bc4242a32bc0628eea34048",
          disableClick: "rockstargames-sites-rockstargamesfcd11cd5895147a9e08f8f4026d68d94",
          dots: "rockstargames-sites-rockstargamese0ca3ed410818f0961345606a96f03ee",
          dragging: "rockstargames-sites-rockstargamesb335b03fce6834b86318f3d7cbf3fab6",
          gameTitle: "rockstargames-sites-rockstargamesb5d3df350466b14e4b419bdb479b4064",
          info: "rockstargames-sites-rockstargamesa4057ef942e10ebeedb1370b08c3c32b",
          items: "rockstargames-sites-rockstargamesd30be9a5f31ff7fabf20969eec3200f1",
          slidesContent: "rockstargames-sites-rockstargamesc4e301fb08e073f689a8dabd2bef9eb2",
          text: "rockstargames-sites-rockstargamescdb5c063bfc35cfbaaaefc68a77c1b07",
          title: "rockstargames-sites-rockstargamese66c271fbbc8b6e431fc5d466c57479c",
          track: "rockstargames-sites-rockstargamesefe7112432da76c65f293853b4c942d1",
          videoTitle: "rockstargames-sites-rockstargamesed4138b1e7fecd4b6d29f0e1bef1fdfd"
        },
        l = (0, m.defineMessages)({
          learn_more: {
            id: "carousel_learn_more",
            description: "Carousel learn more button text",
            defaultMessage: "Learn More"
          },
          watch_more: {
            id: "carousel_watch_more",
            description: "Carousel watch more button text",
            defaultMessage: "Watch Now"
          }
        }),
        b = (0, t(19732).g)((({
          videos: e
        }) => {
          const a = (0, c.useLocale)(),
            {
              formatMessage: t
            } = (0, m.useIntl)(),
            {
              track: i
            } = (0, o.useGtmTrack)(),
            {
              setBodyIsLocked: b
            } = (0, c.useBodyScrollable)("VideoCarousel"),
            [u, k] = (0, r.useState)(0),
            [j, _] = (0, r.useState)(0),
            h = (0, r.useRef)(null),
            x = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            if (!h.current || !x.current) return;
            const a = new(d())(h.current);
            a.get("press").set({
              time: 0
            }), a.get("tap").set({
              time: 150
            });
            const t = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
              s = () => {
                k(u - 1 < 0 ? 0 : u - 1), _(0)
              },
              r = () => {
                const a = u + 1 >= e.length - 1 ? e.length - 1 : u + 1;
                k(a), _(0)
              },
              o = e => {
                _(e.isFinal ? 0 : e.deltaX), "panleft" !== e.additionalEvent && "panright" !== e.additionalEvent || !x.current?.classList.contains(f.dragging) || t() && b(!0)
              },
              c = () => {
                t() && b(!1), _(0)
              },
              m = e => {
                "press" === e.type && h.current?.classList.add(`${f.disableClick}`), "tap" === e.type && (h.current?.classList.remove(`${f.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
              },
              i = () => {
                t() && b(!1), h.current && h.current.classList.remove(`${f.disableClick}`)
              },
              n = () => {
                t() && b(!1)
              };
            return x.current.addEventListener("transitionend", n), a.on("swiperight", s), a.on("swipeleft", r), a.on("pan", o), a.on("panend", c), a.on("press tap", m), a.on("pressup", i), () => {
              a.off("swiperight", s), a.off("swipeleft", r), a.off("pan", o), a.off("panend", c), a.off("press tap", m), a.off("pressup", i), x.current && x.current.removeEventListener("transitionend", n), _(0)
            }
          }), [h.current, u]);
          const y = e => {
            const a = "VI" === e.game?.titleSlug;
            return [e?.titleHomepage ?? e?.title, a ? "/VI" : `/videos/${e.id}`, a ? "_blank" : "_self", t(a ? l.learn_more : l.watch_more)]
          };
          return (0, s.jsxs)("section", {
            className: f.carousel,
            children: [(0, s.jsx)("div", {
              className: f.track,
              ref: h,
              children: (0, s.jsx)("div", {
                className: `${f.items} ${0!==j?f.dragging:""}`,
                ref: x,
                style: {
                  transform: `translateX(calc(-${100*u}% + ${j}px))`
                },
                children: e.map(((e, a) => {
                  const [t, r, o] = y(e);
                  return (0, s.jsx)(n.A, {
                    "data-gtm-category": "Carousel",
                    "data-gtm-action": "Click-through screencap",
                    "data-gtm-label": r,
                    to: r,
                    className: u === a ? f.active : "",
                    role: "link",
                    title: t,
                    tabIndex: u === a ? 0 : -1,
                    target: o,
                    children: (0, s.jsx)(p.s, {
                      video: e,
                      size: 1280
                    })
                  }, e.id)
                }))
              })
            }), (0, s.jsxs)("div", {
              className: f.slidesContent,
              children: [(0, s.jsx)("div", {
                className: f.text,
                children: e.map(((e, t) => {
                  const [r, o, c, m] = y(e);
                  return (0, s.jsxs)(n.A, {
                    className: [f.info, t === u ? f.active : ""].join(" "),
                    "data-gtm-category": "Carousel",
                    "data-gtm-action": "Click-through footer",
                    "data-gtm-label": o,
                    to: o,
                    role: "link",
                    title: r,
                    tabIndex: u === t ? 0 : -1,
                    target: c,
                    children: [(0, s.jsxs)("div", {
                      className: f.title,
                      children: [(0, s.jsxs)("div", {
                        className: f.gameTitle,
                        children: [e.game.title, "fr_fr" === a && " "]
                      }), (0, s.jsx)("h2", {
                        className: f.videoTitle,
                        children: r
                      })]
                    }), (0, s.jsx)(g.A, {
                      className: f.cta,
                      onClick: (d = o, () => {
                        i({
                          event: "cta_watch_video",
                          text: "watch now",
                          link_url: d,
                          element_placement: "video carousel"
                        })
                      }),
                      children: m
                    })]
                  }, e.id);
                  var d
                }))
              }), (0, s.jsx)("section", {
                className: f.dots,
                "aria-controls": "video-carousel",
                "aria-label": "video carousel buttons",
                role: "group",
                children: e.map(((e, a) => (0, s.jsx)("button", {
                  "aria-label": `Slide ${a+1}`,
                  "data-gtm-category": "Marquee",
                  "data-gtm-action": "Dot click",
                  "data-gtm-label": `Dot clicked to ${a}`,
                  onClick: () => k(a),
                  className: u === a ? f.active : "",
                  type: "button"
                }, e.id)))
              })]
            })]
          })
        }))
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
    18518: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0281770395dc77e41c1f40559a3d5989.jpg"
    },
    18670: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => m
      });
      var s = t(42295),
        r = t(62229),
        o = t(95966);
      const c = {
        img: "rockstargames-sites-rockstargamesd87037fda2ea106061c7a614036a89df",
        imgContentful: "rockstargames-sites-rockstargamesb9f3c994ce8a97ac6530cf0a85e5abe0",
        wide: "rockstargames-sites-rockstargamesdc444c089b89129c0a39bc61845d531f"
      };
      (0, o.importAll)(t(86751));
      const m = ({
        isWideCard: e = !1,
        size: a = 640,
        title: m,
        titleSlug: i
      }) => {
        const {
          isMobile: d
        } = (0, o.useWindowResize)(), n = (0, r.useMemo)((() => {
          let s = "";
          return e && (s = d ? t(24865)(`./${i}/mobile.jpg`) : t(53781)(`./${i}/desktop.jpg`)), s || (s = t(39294)(`./${i}.jpg`), s += `?im=Resize=${a}`), s
        }), [d, i]), [g] = (0, o.usePreloadImg)(n);
        let p = n;
        return (0, s.jsx)("div", {
          role: "img",
          "aria-label": m,
          style: {
            backgroundImage: `url(${p})`
          },
          className: [c.img, g ? c.startAnimation : "", e ? c.wide : ""].join(" ")
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
    29625: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => c
      });
      var s = t(42295),
        r = t(14200);
      const o = {
          button: "rockstargames-sites-rockstargamesbc25ec64410308d56e4dc097e81fb129",
          secondary: "rockstargames-sites-rockstargamesa3e6439dcaa4870840298d683db4831c"
        },
        c = ({
          className: e = "",
          children: a,
          context: t = "",
          to: c,
          onClick: m,
          target: i = "_self",
          ...d
        }) => {
          const n = [o.button, o[t], e].join(" ");
          return c ? (0, s.jsx)(r.A, {
            ...d,
            to: c,
            className: n,
            onClick: m,
            target: i,
            children: a
          }) : (0, s.jsx)("button", {
            ...d,
            type: "button",
            className: n,
            onClick: m,
            children: a
          })
        }
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
        N: () => m
      });
      var s = t(18670),
        r = t(42295),
        o = t(14200);
      const c = {
          fobLink: "rockstargames-sites-rockstargamesd30ff40ba02b7ed14124da3ca9cd4f2b",
          wide: "rockstargames-sites-rockstargamesc9686ec502f78b05e47568667e90bd17"
        },
        m = ({
          game: e,
          to: a
        }) => {
          const {
            titleSlug: t,
            urlOfficial: m = ""
          } = e, i = ["VI"].includes(t.toUpperCase());
          return (0, r.jsx)(o.A, {
            "data-gtm-category": "Games",
            "data-gtm-action": "Game Click-through",
            "data-gtm-label": t,
            "data-testid": `${t}-gamecard`,
            to: a ?? m,
            target: "_self",
            className: [c.fobLink, i ? c.wide : ""].join(" "),
            reloadDocument: i,
            children: (0, r.jsx)(s.A, {
              title: e.title,
              titleSlug: t,
              isWideCard: i,
              size: i ? 1740 : 480
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
        s: () => m,
        N: () => i
      });
      var s = t(42295),
        r = t(95966),
        o = t(14200);
      const c = {
          card: "rockstargames-sites-rockstargamesf93031694e202c791c00e5ae3497250a",
          gameTitle: "rockstargames-sites-rockstargamesa1fe577b937c0e16250bf38e9d775061",
          info: "rockstargames-sites-rockstargamesdabce30c906fad181d7cc188f1632c04",
          screencap: "rockstargames-sites-rockstargamesfd37974f16cd1f2376fef29d4af8d948",
          screencapLoaded: "rockstargames-sites-rockstargamesb8d4ef3e1a73c58f4002eab351d4eec2",
          title: "rockstargames-sites-rockstargamesfd87597d0f90ed6d8a2081da933f53bc",
          videoPreview: "rockstargames-sites-rockstargamesa626ad482ff0be0336e75929516654d5"
        },
        m = ({
          video: e,
          size: a = 640
        }) => {
          const t = () => e.screencap.includes("akamai") ? `${e.screencap}?im=Resize=${a}` : e.screencap,
            [o] = (0, r.usePreloadImg)(t());
          return (0, s.jsx)("div", {
            className: [c.screencap, o ? c.screencapLoaded : ""].join(" "),
            style: {
              background: `url(${t()}) center/cover`
            }
          })
        },
        i = ({
          gameTitleNecessary: e = !0,
          openInNewWindow: a = !1,
          video: t,
          size: r,
          toExplicit: i
        }) => {
          const d = i ?? `/videos/${t.id}`,
            n = {
              className: c.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": d
            },
            g = (0, s.jsxs)("div", {
              className: c.card,
              children: [(0, s.jsx)(m, {
                video: t,
                size: r
              }), (0, s.jsxs)("div", {
                className: c.info,
                children: [e ? (0, s.jsx)("div", {
                  className: c.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: t.game.title
                  }
                }) : "", (0, s.jsx)("h5", {
                  className: c.title,
                  dangerouslySetInnerHTML: {
                    __html: t.title
                  }
                })]
              })]
            });
          return a ? (0, s.jsx)("a", {
            href: d,
            target: "_blank",
            ...n,
            children: g
          }) : (0, s.jsx)(o.A, {
            to: d,
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