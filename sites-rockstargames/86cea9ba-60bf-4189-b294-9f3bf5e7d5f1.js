try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "86cea9ba-60bf-4189-b294-9f3bf5e7d5f1", e._sentryDebugIdIdentifier = "sentry-dbid-86cea9ba-60bf-4189-b294-9f3bf5e7d5f1")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "be5f2d7609076d5a1ed53045b22c8612e2fd03cd",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "be5f2d7609076d5a1ed53045b22c8612e2fd03cd"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [650], {
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
    7994: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d0b53035bf66e851116bd0244ba6ace.jpg"
    },
    8494: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f34231941013a609948485830c84c072.jpg"
    },
    10111: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    10670: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r
      });
      var i = t(62229),
        s = t(95966);
      const n = {
        img: "rockstargames-sites-rockstargamesd87037fda2ea106061c7a614036a89df",
        wide: "rockstargames-sites-rockstargamesdc444c089b89129c0a39bc61845d531f",
        imgContentful: "rockstargames-sites-rockstargamesb9f3c994ce8a97ac6530cf0a85e5abe0"
      };
      var d = t(70954);
      (0, s.importAll)(t(86751));
      const r = e => {
        let {
          isWideCard: a = !1,
          size: r = 640,
          title: o,
          titleSlug: m
        } = e;
        const {
          isMobile: c
        } = (0, s.useWindowResize)(), l = (0, i.useMemo)((() => {
          let e = "";
          return a && (e = c ? t(24865)(`./${m}/mobile.jpg`) : t(53781)(`./${m}/desktop.jpg`)), e || (e = t(39294)(`./${m}.jpg`), e += `?im=Resize=${r}`), e
        }), [c, m]), [g] = (0, s.usePreloadImg)(l);
        let u = l;
        return (0, d.jsx)("div", {
          role: "img",
          "aria-label": o,
          style: {
            backgroundImage: `url(${u})`
          },
          className: [n.img, g ? n.startAnimation : "", a ? n.wide : ""].join(" ")
        })
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
    14825: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14448aca4ceaab8680323ce19c963d68.jpg"
    },
    16551: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => f
      });
      var i = t(62229),
        s = t(2918),
        n = t(95966),
        d = t(81788),
        r = t(32698),
        o = t.n(r),
        m = t(18444),
        c = t(95882),
        l = t(30760);
      const g = {
          carousel: "rockstargames-sites-rockstargamesbc3f1abaac4c17c0e9aaac5fccfc6f7e",
          slidesContent: "rockstargames-sites-rockstargamesc4e301fb08e073f689a8dabd2bef9eb2",
          text: "rockstargames-sites-rockstargamescdb5c063bfc35cfbaaaefc68a77c1b07",
          info: "rockstargames-sites-rockstargamesa4057ef942e10ebeedb1370b08c3c32b",
          active: "rockstargames-sites-rockstargamese35688e0d87409e3aef95ffb624d94f4",
          title: "rockstargames-sites-rockstargamese66c271fbbc8b6e431fc5d466c57479c",
          gameTitle: "rockstargames-sites-rockstargamesb5d3df350466b14e4b419bdb479b4064",
          videoTitle: "rockstargames-sites-rockstargamesed4138b1e7fecd4b6d29f0e1bef1fdfd",
          cta: "rockstargames-sites-rockstargamesf40c40ed1bc4242a32bc0628eea34048",
          track: "rockstargames-sites-rockstargamesefe7112432da76c65f293853b4c942d1",
          disableClick: "rockstargames-sites-rockstargamesfcd11cd5895147a9e08f8f4026d68d94",
          items: "rockstargames-sites-rockstargamesd30be9a5f31ff7fabf20969eec3200f1",
          dragging: "rockstargames-sites-rockstargamesb335b03fce6834b86318f3d7cbf3fab6",
          dots: "rockstargames-sites-rockstargamese0ca3ed410818f0961345606a96f03ee"
        },
        u = (0, d.defineMessages)({
          learn_more: {
            id: "carousel_learn_more",
            defaultMessage: "Learn More"
          },
          watch_more: {
            id: "carousel_watch_more",
            defaultMessage: "Watch Now"
          }
        });
      var k = t(28329),
        p = t(70954);
      const f = (0, k.g)((e => {
        let {
          videos: a
        } = e;
        const t = (0, n.useLocale)(),
          {
            formatMessage: r
          } = (0, d.useIntl)(),
          {
            track: k
          } = (0, s.useGtmTrack)(),
          {
            setBodyIsLocked: f
          } = (0, n.useBodyScrollable)("VideoCarousel"),
          [v, b] = (0, i.useState)(0),
          [j, h] = (0, i.useState)(0),
          _ = (0, i.useRef)(null),
          N = (0, i.useRef)(null);
        (0, i.useEffect)((() => {
          if (!_.current || !N.current) return;
          const e = new(o())(_.current);
          e.get("press").set({
            time: 0
          }), e.get("tap").set({
            time: 150
          });
          const t = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
            i = () => {
              b(v - 1 < 0 ? 0 : v - 1), h(0)
            },
            s = () => {
              const e = v + 1 >= a.length - 1 ? a.length - 1 : v + 1;
              b(e), h(0)
            },
            n = e => {
              h(e.isFinal ? 0 : e.deltaX), "panleft" !== e.additionalEvent && "panright" !== e.additionalEvent || !N.current?.classList.contains(g.dragging) || t() && f(!0)
            },
            d = () => {
              t() && f(!1), h(0)
            },
            r = e => {
              "press" === e.type && _.current?.classList.add(`${g.disableClick}`), "tap" === e.type && (_.current?.classList.remove(`${g.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
            },
            m = () => {
              t() && f(!1), _.current && _.current.classList.remove(`${g.disableClick}`)
            },
            c = () => {
              t() && f(!1)
            };
          return N.current.addEventListener("transitionend", c), e.on("swiperight", i), e.on("swipeleft", s), e.on("pan", n), e.on("panend", d), e.on("press tap", r), e.on("pressup", m), () => {
            e.off("swiperight", i), e.off("swipeleft", s), e.off("pan", n), e.off("panend", d), e.off("press tap", r), e.off("pressup", m), N.current && N.current.removeEventListener("transitionend", c), h(0)
          }
        }), [_.current, v]);
        const x = e => {
          const a = "VI" === e.game?.titleSlug;
          return [e?.titleHomepage ?? e?.title, a ? "/VI" : `/videos/${e.id}`, a ? "_blank" : "_self", r(a ? u.learn_more : u.watch_more)]
        };
        return (0, p.jsxs)("section", {
          className: g.carousel,
          children: [(0, p.jsx)("div", {
            className: g.track,
            ref: _,
            children: (0, p.jsx)("div", {
              className: `${g.items} ${0!==j?g.dragging:""}`,
              ref: N,
              style: {
                transform: `translateX(calc(-${100*v}% + ${j}px))`
              },
              children: a.map(((e, a) => {
                const [t, i, s] = x(e);
                return (0, p.jsx)(m.A, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through screencap",
                  "data-gtm-label": i,
                  to: i,
                  className: v === a ? g.active : "",
                  role: "link",
                  title: t,
                  tabIndex: v === a ? 0 : -1,
                  target: s,
                  children: (0, p.jsx)(l.s, {
                    video: e,
                    size: 1280
                  })
                }, e.id)
              }))
            })
          }), (0, p.jsxs)("div", {
            className: g.slidesContent,
            children: [(0, p.jsx)("div", {
              className: g.text,
              children: a.map(((e, a) => {
                const [i, s, n, d] = x(e);
                return (0, p.jsxs)(m.A, {
                  className: [g.info, a === v ? g.active : ""].join(" "),
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through footer",
                  "data-gtm-label": s,
                  to: s,
                  role: "link",
                  title: i,
                  tabIndex: v === a ? 0 : -1,
                  target: n,
                  children: [(0, p.jsxs)("div", {
                    className: g.title,
                    children: [(0, p.jsxs)("div", {
                      className: g.gameTitle,
                      children: [e.game.title, "fr_fr" === t && " "]
                    }), (0, p.jsx)("h2", {
                      className: g.videoTitle,
                      children: i
                    })]
                  }), (0, p.jsx)(c.A, {
                    className: g.cta,
                    onClick: (r = s, () => {
                      k({
                        event: "cta_watch_video",
                        text: "watch now",
                        link_url: r,
                        element_placement: "video carousel"
                      })
                    }),
                    children: d
                  })]
                }, e.id);
                var r
              }))
            }), (0, p.jsx)("section", {
              className: g.dots,
              "aria-controls": "video-carousel",
              "aria-label": "video carousel buttons",
              role: "group",
              children: a.map(((e, a) => (0, p.jsx)("button", {
                "aria-label": `Slide ${a+1}`,
                "data-gtm-category": "Marquee",
                "data-gtm-action": "Dot click",
                "data-gtm-label": `Dot clicked to ${a}`,
                onClick: () => b(a),
                className: v === a ? g.active : "",
                type: "button"
              }, e.id)))
            })]
          })]
        })
      }))
    },
    18518: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0281770395dc77e41c1f40559a3d5989.jpg"
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
      var i = {
        "./VI/mobile.jpg": 92244
      };

      function s(e) {
        var a = n(e);
        return t(a)
      }

      function n(e) {
        if (!t.o(i, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return i[e]
      }
      s.keys = function() {
        return Object.keys(i)
      }, s.resolve = n, e.exports = s, s.id = 24865
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
    30760: (e, a, t) => {
      "use strict";
      t.d(a, {
        s: () => r,
        N: () => o
      });
      var i = t(95966),
        s = t(18444);
      const n = {
        videoPreview: "rockstargames-sites-rockstargamesa626ad482ff0be0336e75929516654d5",
        card: "rockstargames-sites-rockstargamesf93031694e202c791c00e5ae3497250a",
        info: "rockstargames-sites-rockstargamesdabce30c906fad181d7cc188f1632c04",
        title: "rockstargames-sites-rockstargamesfd87597d0f90ed6d8a2081da933f53bc",
        screencap: "rockstargames-sites-rockstargamesfd37974f16cd1f2376fef29d4af8d948",
        screencapLoaded: "rockstargames-sites-rockstargamesb8d4ef3e1a73c58f4002eab351d4eec2",
        gameTitle: "rockstargames-sites-rockstargamesa1fe577b937c0e16250bf38e9d775061"
      };
      var d = t(70954);
      const r = e => {
          let {
            video: a,
            size: t = 640
          } = e;
          const s = () => a.screencap.includes("akamai") ? `${a.screencap}?im=Resize=${t}` : a.screencap,
            [r] = (0, i.usePreloadImg)(s());
          return (0, d.jsx)("div", {
            className: [n.screencap, r ? n.screencapLoaded : ""].join(" "),
            style: {
              background: `url(${s()}) center/cover`
            }
          })
        },
        o = e => {
          let {
            gameTitleNecessary: a = !0,
            openInNewWindow: t = !1,
            video: i,
            size: o,
            toExplicit: m
          } = e;
          const c = m ?? `/videos/${i.id}`,
            l = {
              className: n.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": c
            },
            g = (0, d.jsxs)("div", {
              className: n.card,
              children: [(0, d.jsx)(r, {
                video: i,
                size: o
              }), (0, d.jsxs)("div", {
                className: n.info,
                children: [a ? (0, d.jsx)("div", {
                  className: n.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: i.game.title
                  }
                }) : "", (0, d.jsx)("h5", {
                  className: n.title,
                  dangerouslySetInnerHTML: {
                    __html: i.title
                  }
                })]
              })]
            });
          return t ? (0, d.jsx)("a", {
            href: c,
            target: "_blank",
            ...l,
            children: g
          }) : (0, d.jsx)(s.A, {
            to: c,
            ...l,
            children: g
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
      var i = {
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
        "./wildmetal.jpg": 7994
      };

      function s(e) {
        var a = n(e);
        return t(a)
      }

      function n(e) {
        if (!t.o(i, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return i[e]
      }
      s.keys = function() {
        return Object.keys(i)
      }, s.resolve = n, e.exports = s, s.id = 39294
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
      var i = {
        "./VI/desktop.jpg": 67496
      };

      function s(e) {
        var a = n(e);
        return t(a)
      }

      function n(e) {
        if (!t.o(i, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return i[e]
      }
      s.keys = function() {
        return Object.keys(i)
      }, s.resolve = n, e.exports = s, s.id = 53781
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
    70417: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => p
      });
      var i = t(62229),
        s = t(23205),
        n = t(10403),
        d = t(30760),
        r = t(2918),
        o = t(95966),
        m = t(81788);
      const c = (0, m.defineMessages)({
        next_button_label: {
          id: "next_button_label",
          defaultMessage: "Next video page"
        },
        previous_button_label: {
          id: "previous_button_label",
          defaultMessage: "Previous video page"
        }
      });
      var l = t(91430);
      const g = {
        videoList: "rockstargames-sites-rockstargamesbacddb57787eca7b621a046e6f23aaf5",
        sectionHeader: "rockstargames-sites-rockstargamesad695c18d6276297e78924feea3e6201",
        arrowNav: "rockstargames-sites-rockstargamesc9b73b78d75dd740e918208a9d615796",
        items: "rockstargames-sites-rockstargamesef63b0224f0cc9fa73a9c4549ad6c7e9",
        trackWrapper: "rockstargames-sites-rockstargamesbd79ab04bc93e3bcf79be808e0a06e9b",
        partial: "rockstargames-sites-rockstargamesab95829b388545f21071fd5bb97c25bb",
        track: "rockstargames-sites-rockstargamesa4d3877b3cf6bff0abccdc561c0fe149",
        arrow: "rockstargames-sites-rockstargamescabb1073f7b7f75b799c87d74cfaf0ad",
        previous: "rockstargames-sites-rockstargamesd7404262ef1f79bde0883b02110a4a5d",
        next: "rockstargames-sites-rockstargamesbfdf85a5867d26b52a0962be91170e36",
        disabled: "rockstargames-sites-rockstargamesdbe1b06efadb349825f7b9b1b2778c68"
      };
      var u = t(28329),
        k = t(70954);
      const p = (0, u.g)((e => {
        let {
          vids: a,
          games: t,
          title: u,
          gameTitleNecessary: p
        } = e;
        const f = (0, m.useIntl)(),
          {
            track: v
          } = (0, r.useGtmTrack)(),
          b = void 0 !== t ? "games" : "videos",
          [j, h] = (0, i.useState)(),
          [_, N] = (0, i.useState)(),
          [x, y] = (0, i.useState)(0),
          S = (0, i.useRef)(null),
          w = (0, i.useRef)(null);
        (0, i.useEffect)((() => {
          N({
            nextEl: w.current,
            prevEl: S.current
          })
        }), [w, S]), (0, i.useEffect)((() => {
          const e = () => {
            const e = e => window.matchMedia(`(max-width: ${e})`).matches;
            let a = 4;
            e("768px") ? a = 1 : e("990px") || e("1440px") ? a = 2.2 : e("1920px") && (a = 3.2), y(a)
          };
          return window.addEventListener("resize", e), e(), () => {
            window.removeEventListener("resize", e)
          }
        }), [x]);
        const V = e => {
          j?.slideTo(e)
        };
        let z;
        return z = "games" === b ? (0, k.jsx)(k.Fragment, {
          children: t.results.map(((e, a) => "775700as" !== e.id && (0, k.jsx)(s.qr, {
            className: g.slide,
            onFocus: () => V(a),
            children: (0, k.jsx)(l.N, {
              game: e,
              dontOverrideTo: !0,
              to: `/videos?type=game&gameId=${e.id}`
            })
          }, e.id)))
        }) : (0, k.jsx)(k.Fragment, {
          children: a.map(((e, a) => (0, k.jsx)(s.qr, {
            className: g.slide,
            onFocus: () => V(a),
            children: (0, k.jsx)(d.N, {
              video: e,
              gameTitleNecessary: p
            })
          }, e.id)))
        }), (0, k.jsxs)("section", {
          className: g.videoList,
          children: [(0, k.jsxs)("h3", {
            className: g.sectionHeader,
            children: [u, (0, k.jsxs)("div", {
              className: g.arrowNav,
              children: [(0, k.jsx)("button", {
                className: [g.arrow, g.previous].join(" "),
                type: "button",
                ref: S,
                "aria-label": f.formatMessage(c.previous_button_label)
              }), (0, k.jsx)("button", {
                className: [g.arrow, g.next].join(" "),
                type: "button",
                ref: w,
                "aria-label": f.formatMessage(c.next_button_label),
                onKeyDown: e => {
                  if ("Tab" === e.key && !e.shiftKey) {
                    const a = j?.slides[j?.activeIndex].querySelector('a, button, [role="button"]');
                    a && (e.preventDefault(), a.focus())
                  }
                }
              })]
            })]
          }), (0, k.jsx)("div", {
            className: [g.items, x % 1 != 0 ? g.partial : ""].join(" "),
            children: (0, k.jsx)("div", {
              className: g.trackWrapper,
              children: x && (0, k.jsx)(s.RC, {
                className: g.track,
                slidesPerView: x,
                spaceBetween: 24,
                onInit: e => {
                  h(e)
                },
                grabCursor: !0,
                navigation: _,
                modules: [n.Vx],
                slideClass: (0, o.classList)("swiper-slide"),
                onSlideNextTransitionEnd: () => {
                  v({
                    event: "carousel_next",
                    element_placement: u?.toLowerCase() ?? ""
                  })
                },
                onSlidePrevTransitionEnd: () => {
                  v({
                    event: "carousel_previous",
                    element_placement: u?.toLowerCase() ?? ""
                  })
                },
                onSlideChangeTransitionEnd: () => {
                  v({
                    event: "carousel_swipe",
                    element_placement: u?.toLowerCase() ?? ""
                  })
                },
                children: z
              })
            })
          })]
        })
      }))
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
    80650: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        default: () => g
      });
      var i = t(62229),
        s = t(9623),
        n = t(16551),
        d = t(70417),
        r = t(95966),
        o = t(33918);
      const m = "rockstargames-sites-rockstargamese4c9440250394cde6e2c3bc2220470d4";
      var c = t(81187),
        l = t(70954);
      const g = (0, r.withTranslations)((e => {
        let {
          t: a
        } = e;
        const {
          setBreadcrumb: t,
          setNormalLogo: g
        } = (0, o.b)(), u = (0, r.useQueryParams)(), [k, p] = (0, i.useState)({}), {
          data: f
        } = (0, r.useQuery)(c.VideosList, {
          variables: k,
          skip: !Object.entries(k).length,
          autoSetLoading: !0
        }), {
          search: v
        } = (0, s.useLocation)();
        if ((0, i.useEffect)((() => {
            window.scrollTo(0, 0)
          }), [v]), (0, i.useEffect)((() => (t([{
            href: "/videos",
            title: a("Videos")
          }]), () => {
            t()
          })), []), (0, i.useEffect)((() => {
            p({
              ...k,
              type: u.get("type"),
              gameId: u.get("gameId"),
              index: null === u.get("type"),
              gtaoSessionsEpisodes: "78cs3289" === u.get("gameId")
            })
          }), [u.get("type"), u.get("gameId")]), (0, i.useEffect)((() => (g(!1), () => g(!0))), []), !f) return null;
        if (f?.game && f?.gameVideos) return (0, l.jsxs)("div", {
          className: m,
          children: [(0, l.jsx)(d.A, {
            vids: f.gameVideos.results,
            title: a("Videos from %s").replace("%s", f.game.title)
          }), f?.gtaosessions?.results && (0, l.jsx)(d.A, {
            vids: f.gtaosessions.results,
            title: a("GTA Online Sessions Episodes")
          })]
        });
        const {
          games: b,
          gtao: j,
          gtaVI: h,
          latest: _,
          rdo: N
        } = f;
        return (0, l.jsx)("div", {
          className: m,
          children: k.type ? "" : (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(n.A, {
              videos: _.results,
              t: a
            }), (0, l.jsxs)("div", {
              className: "rockstargames-sites-rockstargamesbeb129d516377f758cb0e943deffe1bc",
              children: [(0, l.jsx)(d.A, {
                vids: h.results,
                title: a("Videos from %s").replace("%s", "Grand Theft Auto VI")
              }), (0, l.jsx)(d.A, {
                vids: j.results,
                title: a("Videos from %s").replace("%s", "Grand Theft Auto Online")
              }), (0, l.jsx)(d.A, {
                vids: N.results,
                title: a("Videos from %s").replace("%s", "Red Dead Online")
              }), (0, l.jsx)(d.A, {
                games: b,
                title: a("By Game")
              })]
            })]
          })
        })
      }))
    },
    81187: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "FragmentDefinition",
          name: {
            kind: "Name",
            value: "videoFields"
          },
          typeCondition: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "RockstarGames_Videos_Model_Entity_Video_o"
            }
          },
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
                value: "title"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "screencap"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "game"
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
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "titleSlug"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "VideosList"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "gameId"
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
                value: "index"
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
                value: "gtaoSessionsEpisodes"
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
                  kind: "StringValue",
                  value: "/videos",
                  block: !1
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
              alias: {
                kind: "Name",
                value: "latest"
              },
              name: {
                kind: "Name",
                value: "videos"
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
                  value: "limit"
                },
                value: {
                  kind: "IntValue",
                  value: "4"
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "finder"
                },
                value: {
                  kind: "StringValue",
                  value: "featured",
                  block: !1
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
                      kind: "FragmentSpread",
                      name: {
                        kind: "Name",
                        value: "videoFields"
                      },
                      directives: []
                    }]
                  }
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "gtaVI"
              },
              name: {
                kind: "Name",
                value: "videos"
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
                  value: "gameId"
                },
                value: {
                  kind: "StringValue",
                  value: "775700as",
                  block: !1
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
                      value: "index"
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
                        value: "videoFields"
                      },
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "youtubeOnly"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "youtubeId"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "rdo"
              },
              name: {
                kind: "Name",
                value: "videos"
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
                  value: "gameId"
                },
                value: {
                  kind: "StringValue",
                  value: "rra9a70r",
                  block: !1
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "limit"
                },
                value: {
                  kind: "IntValue",
                  value: "1000"
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
                      value: "index"
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
                        value: "videoFields"
                      },
                      directives: []
                    }]
                  }
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "gtao"
              },
              name: {
                kind: "Name",
                value: "videos"
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
                  value: "gameId"
                },
                value: {
                  kind: "StringValue",
                  value: "78cs3289",
                  block: !1
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "limit"
                },
                value: {
                  kind: "IntValue",
                  value: "1000"
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
                      value: "index"
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
                        value: "videoFields"
                      },
                      directives: []
                    }]
                  }
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "gtaosessions"
              },
              name: {
                kind: "Name",
                value: "videos"
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
                  value: "finder"
                },
                value: {
                  kind: "StringValue",
                  value: "grandTheftAutoOnlineSesssionsEpisodesVideos",
                  block: !1
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
                      value: "gtaoSessionsEpisodes"
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
                        value: "videoFields"
                      },
                      directives: []
                    }]
                  }
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "games"
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
                  value: "finder"
                },
                value: {
                  kind: "StringValue",
                  value: "hasVideos",
                  block: !1
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
                      value: "index"
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
                    value: "results"
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
                        value: "titleSlug"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "gameVideos"
              },
              name: {
                kind: "Name",
                value: "videos"
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
                  value: "gameId"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "gameId"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "limit"
                },
                value: {
                  kind: "IntValue",
                  value: "1000"
                }
              }],
              directives: [{
                kind: "Directive",
                name: {
                  kind: "Name",
                  value: "skip"
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
                      value: "index"
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
                        value: "videoFields"
                      },
                      directives: []
                    }]
                  }
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
                  value: "id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "gameId"
                  }
                }
              }],
              directives: [{
                kind: "Directive",
                name: {
                  kind: "Name",
                  value: "skip"
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
                      value: "index"
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
            }]
          }
        }],
        loc: {
          start: 0,
          end: 1614
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && a.add(i.name.value)
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
        body: 'fragment videoFields on RockstarGames_Videos_Model_Entity_Video_o {\n    id\n    title\n    screencap\n    game {\n        id\n        title\n        titleSlug\n    }\n}\n\nquery VideosList(\n    $gameId: String\n    $locale: String!\n    $index: Boolean = false\n    $gtaoSessionsEpisodes: Boolean = false\n) {\n    meta: metaUrl(locale: $locale, domain: "www", url: "/videos") {\n        title\n    }\n    latest: videos(locale: $locale, limit: 4, finder: "featured") {\n        results {\n            ...videoFields\n        }\n    }\n    gtaVI: videos(locale: $locale, gameId: "775700as") @include(if: $index) {\n        results {\n            ...videoFields\n            youtubeOnly\n            youtubeId\n        }\n    }\n    rdo: videos(locale: $locale, gameId: "rra9a70r", limit: 1000)\n        @include(if: $index) {\n        results {\n            ...videoFields\n        }\n    }\n    gtao: videos(locale: $locale, gameId: "78cs3289", limit: 1000)\n        @include(if: $index) {\n        results {\n            ...videoFields\n        }\n    }\n    gtaosessions: videos(\n        locale: $locale\n        finder: "grandTheftAutoOnlineSesssionsEpisodesVideos"\n    ) @include(if: $gtaoSessionsEpisodes) {\n        results {\n            ...videoFields\n        }\n    }\n    games(locale: $locale, finder: "hasVideos") @include(if: $index) {\n        results {\n            id\n            titleSlug\n        }\n    }\n    gameVideos: videos(locale: $locale, gameId: $gameId, limit: 1000)\n        @skip(if: $index) {\n        results {\n            ...videoFields\n        }\n    }\n    game(locale: $locale, id: $gameId) @skip(if: $index) {\n        title\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var i = {};

      function s(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var i = e.definitions[t];
          if (i.name && i.name.value == a) return i
        }
      }

      function n(e, a) {
        var t = {
          kind: e.kind,
          definitions: [s(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var n = i[a] || new Set,
          d = new Set,
          r = new Set;
        for (n.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var o = r;
          r = new Set, o.forEach((function(e) {
            d.has(e) || (d.add(e), (i[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return d.forEach((function(a) {
          var i = s(e, a);
          i && t.definitions.push(i)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), i[e.name.value] = a
        }
      })), e.exports = a, e.exports.videoFields = n(a, "videoFields"), e.exports.VideosList = n(a, "VideosList")
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
    86751: (e, a, t) => {
      var i = {
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
        "./wildmetal.jpg": 7994
      };

      function s(e) {
        var a = n(e);
        return t(a)
      }

      function n(e) {
        if (!t.o(i, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return i[e]
      }
      s.keys = function() {
        return Object.keys(i)
      }, s.resolve = n, e.exports = s, s.id = 86751
    },
    89273: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ab528316ca7d31c2b041b62c4ce5dd36.jpg"
    },
    90377: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a69bebbefae64314172002dd2bae0a34.jpg"
    },
    91430: (e, a, t) => {
      "use strict";
      t.d(a, {
        s: () => i.A,
        N: () => r
      });
      var i = t(10670),
        s = t(18444);
      const n = {
        fobLink: "rockstargames-sites-rockstargamesd30ff40ba02b7ed14124da3ca9cd4f2b",
        wide: "rockstargames-sites-rockstargamesc9686ec502f78b05e47568667e90bd17"
      };
      var d = t(70954);
      const r = e => {
        let {
          game: a,
          to: t
        } = e;
        const {
          titleSlug: r,
          urlOfficial: o = ""
        } = a, m = ["VI"].includes(r.toUpperCase());
        return (0, d.jsx)(s.A, {
          "data-gtm-category": "Games",
          "data-gtm-action": "Game Click-through",
          "data-gtm-label": r,
          "data-testid": `${r}-gamecard`,
          to: t ?? o,
          target: "_self",
          className: [n.fobLink, m ? n.wide : ""].join(" "),
          reloadDocument: m,
          children: (0, d.jsx)(i.A, {
            title: a.title,
            titleSlug: r,
            isWideCard: m,
            size: m ? 1740 : 480
          })
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
    95882: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => d
      });
      var i = t(18444);
      const s = {
        button: "rockstargames-sites-rockstargamesbc25ec64410308d56e4dc097e81fb129",
        secondary: "rockstargames-sites-rockstargamesa3e6439dcaa4870840298d683db4831c"
      };
      var n = t(70954);
      const d = e => {
        let {
          className: a = "",
          children: t,
          context: d = "",
          to: r,
          onClick: o,
          target: m = "_self",
          ...c
        } = e;
        const l = [s.button, s[d], a].join(" ");
        return r ? (0, n.jsx)(i.A, {
          ...c,
          to: r,
          className: l,
          onClick: o,
          target: m,
          children: t
        }) : (0, n.jsx)("button", {
          ...c,
          type: "button",
          className: l,
          onClick: o,
          children: t
        })
      }
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