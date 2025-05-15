! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "e8429511-cf67-4e77-aaeb-f48055e0df37", e._sentryDebugIdIdentifier = "sentry-dbid-e8429511-cf67-4e77-aaeb-f48055e0df37")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [6566], {
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
    6958: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => u
      });
      var i = t(62229),
        s = t(9623),
        n = t(81588),
        r = t(95966),
        d = t(2918),
        o = t(44606),
        c = t(61844),
        m = t(46368),
        l = t.n(m);
      var g = t(25854);
      const u = (0, r.withTranslations)((e => {
        let {
          section: a = "",
          relativeTo: t = "",
          tagId: m = null,
          metaUrl: u = "/newswire",
          t: k
        } = e;
        const p = (0, r.useLocale)(),
          {
            track: f
          } = (0, d.useGtmTrack)(),
          [v, b] = (0, s.useSearchParams)(),
          {
            tagId: _ = null
          } = (0, s.useParams)(),
          [j, h] = (0, i.useState)(_ ?? m ?? v.get("tag_id")),
          [N, x] = (0, i.useState)(1),
          [w, y] = (0, i.useState)(20),
          [S, F] = (0, i.useState)([]),
          [z, T] = (0, i.useState)(null),
          [A, {
            loading: V,
            data: I
          }] = (0, n._l)(l(), {
            variables: {
              tagId: Number(j),
              page: N,
              metaUrl: u,
              limit: w,
              locale: p
            }
          });
        return (0, i.useEffect)((() => {
          x(1), F([]), y(20), h(_ ?? m ?? v.get("tag_id")), A()
        }), [v.get("tag_id"), _, m]), (0, i.useEffect)((() => {
          const e = S;
          I?.posts?.paging && T(I?.posts?.paging), I?.posts?.results && F(e.concat(I?.posts?.results))
        }), [I]), (0, i.useEffect)((() => {
          (() => {
            const e = v.get("page"),
              a = Number(e ?? 1);
            y(20 * a), A()
          })()
        }), []), S.length ? (0, g.jsxs)("div", {
          "data-testid": "newswire-list",
          children: [(0, g.jsx)(c.A, {
            section: a,
            posts: S,
            relativeTo: t,
            noSpecialOrder: null !== j
          }), null !== z && z.nextPage ? (0, g.jsx)(o.A, {
            className: "rockstargames-sites-rockstargamese125d510192feb4ce2844cb97084b838",
            "data-testid": "more-stories",
            onClick: e => {
              const a = v.get("page"),
                t = Number(a ?? N) + 1;
              x(t), 20 !== w && y(20), A(), b({
                page: String(t)
              }, {
                replace: !0
              }), f({
                event: "cta_learn",
                text: "more stories",
                element_placement: "newswire"
              })
            },
            disabled: V,
            context: "secondary",
            children: k("More Stories")
          }) : ""]
        }) : null
      }))
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
    11960: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => l
      });
      var i = t(62229),
        s = t(9623),
        n = t(95966),
        r = t(2918),
        d = t(14341),
        o = t(13344);
      const c = {
        newswireBlock: "rockstargames-sites-rockstargamesb394b56c31488c36155ca82090c66e6f",
        info: "rockstargames-sites-rockstargamesea1c51ae745531c2aeabbe3fcf603842",
        title: "rockstargames-sites-rockstargamesf1dfe59c3d981dbe132559620885ecea",
        newswireBlockNoSpecialOrder: "rockstargames-sites-rockstargamesc06d09374e8b5cc41f1732c691ee8e25",
        preview: "rockstargames-sites-rockstargamesca2b587572d3c9a74cfc2fedf400ce8c",
        previewMobile: "rockstargames-sites-rockstargamesb3d4a8cfcc371ae39ce6220d009c5954",
        top: "rockstargames-sites-rockstargameseee9c5d3b714a61ac265369800a6d4e0",
        startAnimation: "rockstargames-sites-rockstargamesa56af3c95449fe8452485dfb6c89fc29"
      };
      var m = t(25854);
      const l = e => {
        let {
          section: a = "",
          index: t,
          post: l,
          noSpecialOrder: g = !1,
          focused: u
        } = e;
        const {
          track: k
        } = (0, r.useGtmTrack)(), [p] = (0, s.useSearchParams)(), f = l.preview_images_parsed.newswire_block, v = {
          default: 0 !== t || g ? f.square || f.d16x9 || f._fallback : f.d16x9 || f.square || f._fallback,
          mobile: f.square || f._fallback
        }, [b, _] = (0, n.usePreloadImg)(v.default), j = {
          default: {
            backgroundImage: `url(${v.default})`
          },
          mobile: {
            backgroundImage: `url(${v.mobile})`
          }
        }, h = (0, i.useCallback)((() => {
          k({
            event: "card_click",
            card_id: l.id,
            card_name: l.name_slug.replace(/-/g, " "),
            link_url: l.url,
            position: t,
            element_placement: a
          })
        }), [l]);
        return (0, m.jsx)(d.A, {
          to: l.url,
          className: [c.newswireBlock, g ? c.newswireBlockNoSpecialOrder : "", null !== b ? c.startAnimation : ""].join(" "),
          focused: u,
          onClick: h,
          children: (0, m.jsxs)(m.Fragment, {
            children: [0 !== t || p.get("tag_id") ? (0, m.jsx)("div", {
              className: c.preview,
              style: j.default
            }) : (0, m.jsxs)(m.Fragment, {
              children: [(0, m.jsx)("div", {
                className: c.previewMobile,
                style: j.mobile
              }), (0, m.jsx)("div", {
                className: c.preview,
                style: j.default
              })]
            }), (0, m.jsxs)("div", {
              className: c.info,
              children: [(0, m.jsxs)("div", {
                className: c.top,
                children: [l.primary_tags.length ? (0, m.jsx)(o.A, {
                  title: l.primary_tags[l.primary_tags.length > 1 && 722 === l.primary_tags[0].id ? 1 : 0].name
                }) : "", (0, m.jsx)("time", {
                  dateTime: l.created,
                  children: l.created_formatted
                })]
              }), (0, m.jsx)("h5", {
                className: c.title,
                dangerouslySetInnerHTML: {
                  __html: l.title
                }
              })]
            })]
          })
        })
      }
    },
    12602: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dd4b0f40e745f4347c822594da56a119.jpg"
    },
    13095: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e7d916fcce2bbe9b6419f914f290597.jpg"
    },
    13344: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r
      });
      var i = t(14341);
      const s = {
        tag: "rockstargames-sites-rockstargamesb660bb706132d84852c02df01cc6ed5a"
      };
      var n = t(25854);
      const r = e => {
        let {
          className: a,
          href: t,
          title: r,
          style: d
        } = e;
        const o = (0, n.jsxs)("div", {
          style: d,
          className: [s.tag, a].join(" "),
          children: [(0, n.jsx)("i", {}), r]
        });
        return void 0 !== t ? (0, n.jsx)(i.A, {
          to: t,
          children: o
        }) : o
      }
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
    19140: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => f
      });
      var i = t(62229),
        s = t(2918),
        n = t(95966),
        r = t(81788),
        d = t(35790),
        o = t.n(d),
        c = t(14341),
        m = t(44606),
        l = t(24170);
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
        u = (0, r.defineMessages)({
          learn_more: {
            id: "carousel_learn_more",
            defaultMessage: "Learn More"
          },
          watch_more: {
            id: "carousel_watch_more",
            defaultMessage: "Watch Now"
          }
        });
      var k = t(84826),
        p = t(25854);
      const f = (0, k.g)((e => {
        let {
          videos: a
        } = e;
        const t = (0, n.useLocale)(),
          {
            formatMessage: d
          } = (0, r.useIntl)(),
          {
            track: k
          } = (0, s.useGtmTrack)(),
          {
            setBodyIsLocked: f
          } = (0, n.useBodyScrollable)("VideoCarousel"),
          [v, b] = (0, i.useState)(0),
          [_, j] = (0, i.useState)(0),
          h = (0, i.useRef)(null),
          N = (0, i.useRef)(null);
        (0, i.useEffect)((() => {
          if (!h.current || !N.current) return;
          const e = new(o())(h.current);
          e.get("press").set({
            time: 0
          }), e.get("tap").set({
            time: 150
          });
          const t = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
            i = () => {
              b(v - 1 < 0 ? 0 : v - 1), j(0)
            },
            s = () => {
              const e = v + 1 >= a.length - 1 ? a.length - 1 : v + 1;
              b(e), j(0)
            },
            n = e => {
              j(e.isFinal ? 0 : e.deltaX), "panleft" !== e.additionalEvent && "panright" !== e.additionalEvent || !N.current?.classList.contains(g.dragging) || t() && f(!0)
            },
            r = () => {
              t() && f(!1), j(0)
            },
            d = e => {
              "press" === e.type && h.current?.classList.add(`${g.disableClick}`), "tap" === e.type && (h.current?.classList.remove(`${g.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
            },
            c = () => {
              t() && f(!1), h.current && h.current.classList.remove(`${g.disableClick}`)
            },
            m = () => {
              t() && f(!1)
            };
          return N.current.addEventListener("transitionend", m), e.on("swiperight", i), e.on("swipeleft", s), e.on("pan", n), e.on("panend", r), e.on("press tap", d), e.on("pressup", c), () => {
            e.off("swiperight", i), e.off("swipeleft", s), e.off("pan", n), e.off("panend", r), e.off("press tap", d), e.off("pressup", c), N.current && N.current.removeEventListener("transitionend", m), j(0)
          }
        }), [h.current, v]);
        const x = e => {
          const a = "VI" === e.game?.titleSlug;
          return [e?.titleHomepage ?? e?.title, a ? "/VI" : `/videos/${e.id}`, a ? "_blank" : "_self", d(a ? u.learn_more : u.watch_more)]
        };
        return (0, p.jsxs)("section", {
          className: g.carousel,
          children: [(0, p.jsx)("div", {
            className: g.track,
            ref: h,
            children: (0, p.jsx)("div", {
              className: `${g.items} ${0!==_?g.dragging:""}`,
              ref: N,
              style: {
                transform: `translateX(calc(-${100*v}% + ${_}px))`
              },
              children: a.map(((e, a) => {
                const [t, i, s] = x(e);
                return (0, p.jsx)(c.A, {
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
                const [i, s, n, r] = x(e);
                return (0, p.jsxs)(c.A, {
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
                  }), (0, p.jsx)(m.A, {
                    className: g.cta,
                    onClick: (d = s, () => {
                      k({
                        event: "cta_watch_video",
                        text: "watch now",
                        link_url: d,
                        element_placement: "video carousel"
                      })
                    }),
                    children: r
                  })]
                }, e.id);
                var d
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
    24170: (e, a, t) => {
      "use strict";
      t.d(a, {
        s: () => d,
        N: () => o
      });
      var i = t(95966),
        s = t(14341);
      const n = {
        videoPreview: "rockstargames-sites-rockstargamesa626ad482ff0be0336e75929516654d5",
        card: "rockstargames-sites-rockstargamesf93031694e202c791c00e5ae3497250a",
        info: "rockstargames-sites-rockstargamesdabce30c906fad181d7cc188f1632c04",
        title: "rockstargames-sites-rockstargamesfd87597d0f90ed6d8a2081da933f53bc",
        screencap: "rockstargames-sites-rockstargamesfd37974f16cd1f2376fef29d4af8d948",
        screencapLoaded: "rockstargames-sites-rockstargamesb8d4ef3e1a73c58f4002eab351d4eec2",
        gameTitle: "rockstargames-sites-rockstargamesa1fe577b937c0e16250bf38e9d775061"
      };
      var r = t(25854);
      const d = e => {
          let {
            video: a,
            size: t = 640
          } = e;
          const s = () => a.screencap.includes("akamai") ? `${a.screencap}?im=Resize=${t}` : a.screencap,
            [d] = (0, i.usePreloadImg)(s());
          return (0, r.jsx)("div", {
            className: [n.screencap, d ? n.screencapLoaded : ""].join(" "),
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
            toExplicit: c
          } = e;
          const m = c ?? `/videos/${i.id}`,
            l = {
              className: n.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": m
            },
            g = (0, r.jsxs)("div", {
              className: n.card,
              children: [(0, r.jsx)(d, {
                video: i,
                size: o
              }), (0, r.jsxs)("div", {
                className: n.info,
                children: [a ? (0, r.jsx)("div", {
                  className: n.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: i.game.title
                  }
                }) : "", (0, r.jsx)("h5", {
                  className: n.title,
                  dangerouslySetInnerHTML: {
                    __html: i.title
                  }
                })]
              })]
            });
          return t ? (0, r.jsx)("a", {
            href: m,
            target: "_blank",
            ...l,
            children: g
          }) : (0, r.jsx)(s.A, {
            to: m,
            ...l,
            children: g
          })
        }
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
        "./wildmetal.jpg": 85613
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
    44606: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r
      });
      var i = t(14341);
      const s = {
        button: "rockstargames-sites-rockstargamesbc25ec64410308d56e4dc097e81fb129",
        secondary: "rockstargames-sites-rockstargamesa3e6439dcaa4870840298d683db4831c"
      };
      var n = t(25854);
      const r = e => {
        let {
          className: a = "",
          children: t,
          context: r = "",
          to: d,
          onClick: o,
          target: c = "_self",
          ...m
        } = e;
        const l = [s.button, s[r], a].join(" ");
        return d ? (0, n.jsx)(i.A, {
          ...m,
          to: d,
          className: l,
          onClick: o,
          target: c,
          children: t
        }) : (0, n.jsx)("button", {
          ...m,
          type: "button",
          className: l,
          onClick: o,
          children: t
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
        body: 'fragment postFields on RockstarGames_Newswire_Model_Entity_Post_o {\n    id: id_hash\n    url\n    title\n    name_slug\n    created\n    created_formatted\n    primary_tags {\n        id\n        name\n    }\n    secondary_tags {\n        id\n        name\n    }\n    preview_images_parsed {\n        newswire_block {\n            square\n            d16x9\n            _fallback\n        }\n    }\n}\nfragment paging on RockstarGames_Cake_Graph_Type_Paging_o {\n    pageCount\n    page\n    count\n    nextPage\n    prevPage\n    perPage\n}\n\nquery NewswireList(\n    $locale: String!\n    $page: Int!\n    $limit: Int\n    $tagId: Int\n    $metaUrl: String!\n    $cache: Boolean = true\n) {\n    meta: metaUrl(url: $metaUrl, domain: "www", locale: $locale) {\n        title\n    }\n    posts(page: $page, tagId: $tagId, locale: $locale, limit: $limit) {\n        paging {\n            ...paging\n        }\n        results {\n            ...postFields\n        }\n    }\n}\n',
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
          r = new Set,
          d = new Set;
        for (n.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var o = d;
          d = new Set, o.forEach((function(e) {
            r.has(e) || (r.add(e), (i[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var i = s(e, a);
          i && t.definitions.push(i)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), i[e.name.value] = a
        }
      })), e.exports = a, e.exports.postFields = n(a, "postFields"), e.exports.paging = n(a, "paging"), e.exports.NewswireList = n(a, "NewswireList")
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
    60090: e => {
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
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "HomeData"
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
                  kind: "StringValue",
                  value: "/",
                  block: !1
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
                value: "games"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "limit"
                },
                value: {
                  kind: "IntValue",
                  value: "5"
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
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "urlOfficial"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
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
                  value: "limit"
                },
                value: {
                  kind: "IntValue",
                  value: "6"
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
            }, {
              kind: "Field",
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
                        value: "titleHomepage"
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
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 1026
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
        body: 'fragment postFields on RockstarGames_Newswire_Model_Entity_Post_o {\n    id: id_hash\n    url\n    title\n    name_slug\n    created\n    created_formatted\n    primary_tags {\n        id\n        name\n    }\n    secondary_tags {\n        id\n        name\n    }\n    preview_images_parsed {\n        newswire_block {\n            square\n            d16x9\n            _fallback\n        }\n    }\n}\n\nquery HomeData($locale: String!) {\n    meta: metaUrl(url: "/", domain: "www", locale: $locale) {\n        title\n    }\n    games(limit: 5, locale: $locale) {\n        results {\n            id\n            title\n            titleSlug\n            urlOfficial\n        }\n    }\n    posts(limit: 6, locale: $locale) {\n        results {\n            ...postFields\n        }\n    }\n    videos(locale: $locale, limit: 4, finder: "featured") {\n        results {\n            id\n            title\n            titleHomepage\n            screencap\n            game {\n                id\n                title\n                titleSlug\n            }\n        }\n    }\n}\n',
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
          r = new Set,
          d = new Set;
        for (n.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var o = d;
          d = new Set, o.forEach((function(e) {
            r.has(e) || (r.add(e), (i[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var i = s(e, a);
          i && t.definitions.push(i)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), i[e.name.value] = a
        }
      })), e.exports = a, e.exports.postFields = n(a, "postFields"), e.exports.HomeData = n(a, "HomeData")
    },
    61844: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => c
      });
      var i = t(62229),
        s = t(95966),
        n = t(11960);
      t(6958);
      const r = {
        pillBtn: "rockstargames-sites-rockstargamesf2d003dd0e6a129a56ea07208548787c",
        selected: "rockstargames-sites-rockstargamesf94728c4a438800b9abab11a8b3e3c0a",
        related: "rockstargames-sites-rockstargamesb8a63bb419c1f2a8f94e099e1e650e48",
        posts: "rockstargames-sites-rockstargamescfe09d4dc8447b1e606404300d040e7a",
        just1post: "rockstargames-sites-rockstargamesd46374473ed68a4121f88b44eba06359"
      };
      var d = t(25854);
      (0, s.withTranslations)((e => {
        let {
          posts: a,
          t
        } = e;
        return (0, d.jsxs)("section", {
          className: r.related,
          children: [(0, d.jsx)("h2", {
            children: t("Related Stories")
          }), (0, d.jsx)("div", {
            className: [r.posts, 1 === a.length ? r.just1post : ""].join(" "),
            children: a.map((e => (0, d.jsx)(n.A, {
              noSpecialOrder: !0,
              post: e
            }, e.id)))
          })]
        })
      })), t(13344);
      const o = {
          newswireBlocks: "rockstargames-sites-rockstargamesea687097d9239d4830bc03090f0116f2",
          noSpecialOrder: "rockstargames-sites-rockstargamesd301334a72b626f8cc2f5b9733299e76"
        },
        c = (0, s.withGtmTracking)((e => {
          let {
            section: a = "",
            noSpecialOrder: t = !1,
            posts: s,
            gtmTrack: r,
            relativeTo: c
          } = e;
          const [m, l] = (0, i.useState)(null);
          return (0, i.useEffect)((() => {
            if (!s.length) return;
            const e = {
              event: "view_item_list",
              ecommerce: {
                impressions: []
              }
            };
            s.map(((t, i) => {
              e.ecommerce.impressions.push({
                name: t.title,
                id: t.id,
                position: i + 1,
                list: a
              })
            })), r(e), l(s.length)
          }), [s.length]), (0, d.jsx)("div", {
            "data-testid": "newswire-blocks-container",
            className: [o.newswireBlocks, t ? o.noSpecialOrder : "", o.contextHome].join(" "),
            children: s.map(((e, i) => (0, d.jsx)(n.A, {
              section: a,
              index: i,
              noSpecialOrder: t,
              post: e,
              focused: i === m
            }, e.id)))
          })
        }))
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
    72246: (e, a, t) => {
      "use strict";
      t.d(a, {
        s: () => i.A,
        N: () => d
      });
      var i = t(82023),
        s = t(14341);
      const n = {
        fobLink: "rockstargames-sites-rockstargamesd30ff40ba02b7ed14124da3ca9cd4f2b",
        wide: "rockstargames-sites-rockstargamesc9686ec502f78b05e47568667e90bd17"
      };
      var r = t(25854);
      const d = e => {
        let {
          game: a,
          to: t
        } = e;
        const {
          titleSlug: d,
          urlOfficial: o = ""
        } = a, c = ["VI"].includes(d.toUpperCase());
        return (0, r.jsx)(s.A, {
          "data-gtm-category": "Games",
          "data-gtm-action": "Game Click-through",
          "data-gtm-label": d,
          "data-testid": `${d}-gamecard`,
          to: t ?? o,
          target: "_self",
          className: [n.fobLink, c ? n.wide : ""].join(" "),
          reloadDocument: c,
          children: (0, r.jsx)(i.A, {
            title: a.title,
            titleSlug: d,
            isWideCard: c,
            size: c ? 1740 : 480
          })
        })
      }
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
    76566: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        default: () => b
      });
      var i = t(95966),
        s = t(2918),
        n = t(14341),
        r = t(44606),
        d = t(61844),
        o = t(19140),
        c = t(72246),
        m = t(4281),
        l = t(60090);
      const g = "rockstargames-sites-rockstargamesbba7a3e75f52ac91a881d61421836e58",
        u = "rockstargames-sites-rockstargamesb4465a1362a13b7a9b3a99b48b4d9107";
      var k = t(25854);
      const p = e => {
          let {
            games: a,
            t
          } = e;
          const {
            track: i
          } = (0, s.useGtmTrack)();
          return (0, k.jsxs)("section", {
            className: "rockstargames-sites-rockstargamese141d42751979e9e7b65aa2d5aec6f30",
            "data-testid": "featuredGames",
            children: [(0, k.jsx)("h3", {
              className: g,
              children: (0, k.jsx)(n.A, {
                to: "games",
                "aria-label": t("Featured Games"),
                "data-testid": "featuredGamesHeader",
                children: t("Featured Games")
              })
            }), (0, k.jsx)("div", {
              className: u,
              children: a.map((e => (0, k.jsx)(c.N, {
                game: e
              }, e.id)))
            }), (0, k.jsx)(r.A, {
              to: "games",
              context: "secondary",
              "data-testid": "viewMoreButton",
              onClick: e => {
                const a = e.currentTarget.href;
                i({
                  event: "cta_learn",
                  text: "view more",
                  link_url: a,
                  element_placement: "featured games"
                })
              },
              children: t("View More")
            })]
          })
        },
        f = e => {
          let {
            posts: a,
            t
          } = e;
          const {
            track: i
          } = (0, s.useGtmTrack)();
          return (0, k.jsxs)("section", {
            className: "rockstargames-sites-rockstargamesf1a70d9ab6a86d0df95c44335f46a692",
            "data-testid": "newswire",
            children: [(0, k.jsx)("h3", {
              className: g,
              children: (0, k.jsx)(n.A, {
                to: "newswire",
                "aria-label": t("Newswire"),
                "data-testid": "newswireHeader",
                children: t("Newswire")
              })
            }), (0, k.jsx)(d.A, {
              section: "Home",
              className: u,
              posts: a,
              noSpecialOrder: !0
            }), (0, k.jsx)(r.A, {
              to: "newswire",
              context: "secondary",
              "data-testid": "viewMoreButton",
              onClick: e => {
                const a = e.currentTarget.href;
                i({
                  event: "cta_learn",
                  text: "view more",
                  link_url: a,
                  element_placement: "newswire"
                })
              },
              children: t("View More")
            })]
          })
        };
      let v = null;
      v = (0, i.withTranslations)((e => {
        let {
          t: a
        } = e;
        const {
          data: t
        } = (0, i.useQuery)(l.HomeData, {
          autoSetLoading: !0
        });
        if (!t) return null;
        const {
          games: s,
          posts: n,
          videos: r
        } = t;
        return (0, k.jsxs)(k.Fragment, {
          children: [(0, k.jsxs)("div", {
            className: "rockstargames-sites-rockstargamesa9f290c70f40a29f685537afe8addab4",
            "data-testid": "homepageBody",
            children: [(0, k.jsx)(o.A, {
              videos: r.results,
              t: a
            }), (0, k.jsxs)("div", {
              className: "rockstargames-sites-rockstargamesbf2fea28c30c0885410410bc0ec72393",
              children: [(0, k.jsx)(f, {
                posts: n.results,
                t: a
              }), (0, k.jsx)(p, {
                games: s.results,
                t: a
              })]
            })]
          }), (0, k.jsx)(m.A, {})]
        })
      }));
      const b = v
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
    82023: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => d
      });
      var i = t(62229),
        s = t(95966);
      const n = {
        img: "rockstargames-sites-rockstargamesd87037fda2ea106061c7a614036a89df",
        wide: "rockstargames-sites-rockstargamesdc444c089b89129c0a39bc61845d531f",
        imgContentful: "rockstargames-sites-rockstargamesb9f3c994ce8a97ac6530cf0a85e5abe0"
      };
      var r = t(25854);
      (0, s.importAll)(t(86751));
      const d = e => {
        let {
          isWideCard: a = !1,
          size: d = 640,
          title: o,
          titleSlug: c
        } = e;
        const {
          isMobile: m
        } = (0, s.useWindowResize)(), l = (0, i.useMemo)((() => {
          let e = "";
          return a && (e = m ? t(24865)(`./${c}/mobile.jpg`) : t(53781)(`./${c}/desktop.jpg`)), e || (e = t(39294)(`./${c}.jpg`), e += `?im=Resize=${d}`), e
        }), [m, c]), [g] = (0, s.usePreloadImg)(l);
        let u = l;
        return (0, r.jsx)("div", {
          role: "img",
          "aria-label": o,
          style: {
            backgroundImage: `url(${u})`
          },
          className: [n.img, g ? n.startAnimation : "", a ? n.wide : ""].join(" ")
        })
      }
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
        "./wildmetal.jpg": 85613
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