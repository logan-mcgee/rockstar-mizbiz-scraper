! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "3b7fe1e8-0e9a-43b0-91df-a3f1f0abf4dd", e._sentryDebugIdIdentifier = "sentry-dbid-3b7fe1e8-0e9a-43b0-91df-a3f1f0abf4dd")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [4981], {
    22778: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r
      });
      var s = t(60285);
      const i = {
        button: "rockstargames-sites-rockstargamese056494c33cff1fe89431f279fdb6b9a",
        secondary: "rockstargames-sites-rockstargamesd340cf27f380a4347994e59544432eb3"
      };
      var n = t(46632);
      const r = e => {
        let {
          className: a = "",
          children: t,
          context: r = "",
          to: o,
          onClick: d,
          target: c = "_self",
          ...m
        } = e;
        const l = [i.button, i[r], a].join(" ");
        return o ? (0, n.jsx)(s.A, {
          ...m,
          to: o,
          className: l,
          onClick: d,
          target: c,
          children: t
        }) : (0, n.jsx)("button", {
          ...m,
          type: "button",
          className: l,
          onClick: d,
          children: t
        })
      }
    },
    24079: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => o
      });
      var s = t(71403),
        i = t(42756);
      const n = {
        img: "rockstargames-sites-rockstargamese3f505a2281df28eb1acdf2d586e7fbd",
        wide: "rockstargames-sites-rockstargamesc3a6d60e0087f92bbf7062fe2f36e200"
      };
      var r = t(46632);
      (0, i.importAll)(t(43202));
      const o = e => {
        let {
          isWideCard: a = !1,
          size: o = 640,
          title: d,
          titleSlug: c
        } = e;
        const {
          isMobile: m
        } = (0, i.useWindowResize)(), l = (0, s.useMemo)((() => {
          let e = "";
          return a && (e = m ? t(17426)(`./${c}/mobile.png`) : t(65392)(`./${c}/desktop.png`)), e || (e = t(32781)(`./${c}.jpg`), e += `?im=Resize=${o}`), e
        }), [m, c]), [g] = (0, i.usePreloadImg)(l);
        return (0, r.jsx)("div", {
          role: "img",
          "aria-label": d,
          className: [n.img, g ? n.startAnimation : "", a ? n.wide : ""].join(" "),
          style: {
            backgroundImage: `url(${l})`
          }
        })
      }
    },
    63852: (e, a, t) => {
      "use strict";
      t.d(a, {
        s: () => s.A,
        N: () => o
      });
      var s = t(24079),
        i = t(60285);
      const n = {
        fobLink: "rockstargames-sites-rockstargamesfded54fb94f7325c5a0b57590585b175",
        wide: "rockstargames-sites-rockstargamesa9b41f96042bda8a8c77b7b7b10f84d5"
      };
      var r = t(46632);
      const o = e => {
        let {
          game: a,
          to: t
        } = e;
        const {
          titleSlug: o,
          urlOfficial: d = ""
        } = a, c = ["VI"].includes(o);
        return (0, r.jsx)(i.A, {
          "data-gtm-category": "Games",
          "data-gtm-action": "Game Click-through",
          "data-gtm-label": o,
          "data-testid": `${o}-gamecard`,
          to: t ?? d,
          target: "_self",
          className: [n.fobLink, c ? n.wide : ""].join(" "),
          children: (0, r.jsx)(s.A, {
            title: a.title,
            titleSlug: o,
            isWideCard: c
          })
        })
      }
    },
    72558: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => l
      });
      var s = t(71403),
        i = t(89779),
        n = t(42756),
        r = t(40207),
        o = t(60285),
        d = t(31716);
      const c = {
        newswireBlock: "rockstargames-sites-rockstargamesa793f470884d207243d6c3caac8ad811",
        info: "rockstargames-sites-rockstargamesd50f6d2bc5f983c05311292acb4c78a5",
        title: "rockstargames-sites-rockstargamescc389449dc1495fc9c323fc2c547857d",
        newswireBlockNoSpecialOrder: "rockstargames-sites-rockstargamesffd167124f27c8e26a147f49c88796e5",
        preview: "rockstargames-sites-rockstargamesbbfbcf32c8c892ea29f4178949643475",
        previewMobile: "rockstargames-sites-rockstargamesf88852766488b21a28c42d230ea529a1",
        top: "rockstargames-sites-rockstargamesfa1a6f4c7d94b94f5af2dc1ac9af79f1",
        startAnimation: "rockstargames-sites-rockstargamese380e8c67066df6f33fc018341ea96e5"
      };
      var m = t(46632);
      const l = e => {
        let {
          section: a = "",
          index: t,
          post: l,
          noSpecialOrder: g = !1,
          focused: p
        } = e;
        const {
          track: f
        } = (0, r.useGtmTrack)(), [u] = (0, i.useSearchParams)(), k = l.preview_images_parsed.newswire_block, b = {
          default: 0 !== t || g ? k.square || k.d16x9 || k._fallback : k.d16x9 || k.square || k._fallback,
          mobile: k.square || k._fallback
        }, [v, j] = (0, n.usePreloadImg)(b.default), h = {
          default: {
            backgroundImage: `url(${b.default})`
          },
          mobile: {
            backgroundImage: `url(${b.mobile})`
          }
        }, _ = (0, s.useCallback)((() => {
          f({
            event: "card_click",
            card_id: l.id,
            card_name: l.name_slug.replace(/-/g, " "),
            link_url: l.url,
            position: t,
            element_placement: a
          })
        }), [l]);
        return (0, m.jsx)(o.A, {
          to: l.url,
          className: [c.newswireBlock, g ? c.newswireBlockNoSpecialOrder : "", null !== v ? c.startAnimation : ""].join(" "),
          focused: p,
          onClick: _,
          children: (0, m.jsxs)(m.Fragment, {
            children: [0 !== t || u.get("tag_id") ? (0, m.jsx)("div", {
              className: c.preview,
              style: h.default
            }) : (0, m.jsxs)(m.Fragment, {
              children: [(0, m.jsx)("div", {
                className: c.previewMobile,
                style: h.mobile
              }), (0, m.jsx)("div", {
                className: c.preview,
                style: h.default
              })]
            }), (0, m.jsxs)("div", {
              className: c.info,
              children: [(0, m.jsxs)("div", {
                className: c.top,
                children: [l.primary_tags.length ? (0, m.jsx)(d.A, {
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
    31716: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r
      });
      var s = t(60285);
      const i = {
        tag: "rockstargames-sites-rockstargamesed77774d2704bc0ebc0ac156542ae053"
      };
      var n = t(46632);
      const r = e => {
        let {
          className: a,
          href: t,
          title: r,
          style: o
        } = e;
        const d = (0, n.jsxs)("div", {
          style: o,
          className: [i.tag, a].join(" "),
          children: [(0, n.jsx)("i", {}), r]
        });
        return void 0 !== t ? (0, n.jsx)(s.A, {
          to: t,
          children: d
        }) : d
      }
    },
    24486: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => c
      });
      var s = t(71403),
        i = t(42756),
        n = t(72558);
      t(49853);
      const r = {
        pillBtn: "rockstargames-sites-rockstargamesafd0af959edb4a463c41ad4e9cc5dadc",
        selected: "rockstargames-sites-rockstargamesbcd59aa4a9e88d86a2cbe8d4972f8f51",
        related: "rockstargames-sites-rockstargamesa748ad776070dab831edc1f67f66af08",
        posts: "rockstargames-sites-rockstargamesc0aa38678decd13ca38886b4547efedd",
        just1post: "rockstargames-sites-rockstargamesb1a31ddf7fd4458ee860d354a6a0ac92"
      };
      var o = t(46632);
      (0, i.withTranslations)((e => {
        let {
          posts: a,
          t
        } = e;
        return (0, o.jsxs)("section", {
          className: r.related,
          children: [(0, o.jsx)("h2", {
            children: t("Related Stories")
          }), (0, o.jsx)("div", {
            className: [r.posts, 1 === a.length ? r.just1post : ""].join(" "),
            children: a.map((e => (0, o.jsx)(n.A, {
              noSpecialOrder: !0,
              post: e
            }, e.id)))
          })]
        })
      })), t(31716);
      const d = {
          newswireBlocks: "rockstargames-sites-rockstargamesc2c8eedd25de7e186655f98b2a8d8960",
          noSpecialOrder: "rockstargames-sites-rockstargamesc0d0db9dfc71c9f4f959b9c017b1ae4b"
        },
        c = (0, i.withGtmTracking)((e => {
          let {
            section: a = "",
            noSpecialOrder: t = !1,
            posts: i,
            gtmTrack: r,
            relativeTo: c
          } = e;
          const [m, l] = (0, s.useState)(null);
          return (0, s.useEffect)((() => {
            if (!i.length) return;
            const e = {
              event: "view_item_list",
              ecommerce: {
                impressions: []
              }
            };
            i.map(((t, s) => {
              e.ecommerce.impressions.push({
                name: t.title,
                id: t.id,
                position: s + 1,
                list: a
              })
            })), r(e), l(i.length)
          }), [i.length]), (0, o.jsx)("div", {
            "data-testid": "newswire-blocks-container",
            className: [d.newswireBlocks, t ? d.noSpecialOrder : "", d.contextHome].join(" "),
            children: i.map(((e, s) => (0, o.jsx)(n.A, {
              section: a,
              index: s,
              noSpecialOrder: t,
              post: e,
              focused: s === m
            }, e.id)))
          })
        }))
    },
    49853: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => p
      });
      var s = t(71403),
        i = t(89779),
        n = t(58407),
        r = t(42756),
        o = t(40207),
        d = t(22778),
        c = t(24486),
        m = t(31955),
        l = t.n(m),
        g = t(46632);
      const p = (0, r.withTranslations)((e => {
        let {
          section: a = "",
          relativeTo: t = "",
          tagId: r = null,
          metaUrl: m = "/newswire",
          t: p
        } = e;
        const {
          track: f
        } = (0, o.useGtmTrack)(), [u, k] = (0, i.useSearchParams)(), {
          tagId: b = null
        } = (0, i.useParams)(), [v, j] = (0, s.useState)(b ?? r ?? u.get("tag_id")), [h, _] = (0, s.useState)(1), [x, N] = (0, s.useState)(20), [w, y] = (0, s.useState)([]), [S, z] = (0, s.useState)(null), [A, {
          loading: T,
          data: V
        }] = (0, n.useLazyQuery)(l(), {
          variables: {
            tagId: Number(v),
            page: h,
            metaUrl: m,
            limit: x,
            locale: "en_us"
          }
        });
        return (0, s.useEffect)((() => {
          _(1), y([]), N(20), j(b ?? r ?? u.get("tag_id")), A()
        }), [u.get("tag_id"), b, r]), (0, s.useEffect)((() => {
          const e = w;
          V?.posts?.paging && z(V?.posts?.paging), V?.posts?.results && y(e.concat(V?.posts?.results))
        }), [V]), (0, s.useEffect)((() => {
          (() => {
            const e = u.get("page"),
              a = Number(e ?? 1);
            N(20 * a), A()
          })()
        }), []), w.length ? (0, g.jsxs)("div", {
          "data-testid": "newswire-list",
          children: [(0, g.jsx)(c.A, {
            section: a,
            posts: w,
            relativeTo: t,
            noSpecialOrder: null !== v
          }), null !== S && S.nextPage ? (0, g.jsx)(d.A, {
            "data-testid": "more-stories",
            onClick: e => {
              const a = u.get("page"),
                t = Number(a ?? h) + 1;
              _(t), 20 !== x && N(20), A(), k({
                page: String(t)
              }, {
                replace: !0
              }), f({
                event: "cta_learn",
                text: "more stories",
                element_placement: "newswire"
              })
            },
            disabled: T,
            context: "secondary",
            children: p("More Stories")
          }) : ""]
        }) : null
      }))
    },
    67356: (e, a, t) => {
      "use strict";
      t.d(a, {
        s: () => o,
        N: () => d
      });
      var s = t(42756),
        i = t(60285);
      const n = {
        videoPreview: "rockstargames-sites-rockstargamesc6739cc628fda235abe2bafeb30ad7cf",
        card: "rockstargames-sites-rockstargamesec6e68ffa1188155be202dfef3f92829",
        info: "rockstargames-sites-rockstargamesab8da127fbcdb98f874bc3f1377669a2",
        title: "rockstargames-sites-rockstargamese84fa4b2b140994c96a13607410d30a3",
        screencap: "rockstargames-sites-rockstargamesa322c3d2275cedd594a3b17800154066",
        screencapLoaded: "rockstargames-sites-rockstargamesf68c57f5459778024e5a98918ae61ab2",
        gameTitle: "rockstargames-sites-rockstargamesdebff452a4923aded7de826c081bab5d"
      };
      var r = t(46632);
      const o = e => {
          let {
            video: a,
            size: t = 640
          } = e;
          const i = () => a.screencap.includes("akamai") ? `${a.screencap}?im=Resize=${t}` : a.screencap,
            [o] = (0, s.usePreloadImg)(i());
          return (0, r.jsx)("div", {
            className: [n.screencap, o ? n.screencapLoaded : ""].join(" "),
            style: {
              background: `url(${i()}) center/cover`
            }
          })
        },
        d = e => {
          let {
            gameTitleNecessary: a = !0,
            openInNewWindow: t = !1,
            video: s,
            size: d,
            toExplicit: c
          } = e;
          const m = c ?? `/videos/${s.id}`,
            l = {
              className: n.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": m
            },
            g = (0, r.jsxs)("div", {
              className: n.card,
              children: [(0, r.jsx)(o, {
                video: s,
                size: d
              }), (0, r.jsxs)("div", {
                className: n.info,
                children: [a ? (0, r.jsx)("div", {
                  className: n.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: s.game.title
                  }
                }) : "", (0, r.jsx)("h5", {
                  className: n.title,
                  dangerouslySetInnerHTML: {
                    __html: s.title
                  }
                })]
              })]
            });
          return t ? (0, r.jsx)("a", {
            href: m,
            target: "_blank",
            ...l,
            children: g
          }) : (0, r.jsx)(i.A, {
            to: m,
            ...l,
            children: g
          })
        }
    },
    57928: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => p
      });
      var s = t(71403),
        i = t(40207),
        n = t(42756),
        r = t(59028),
        o = t.n(r),
        d = t(60285),
        c = t(22778),
        m = t(67356);
      const l = {
        carousel: "rockstargames-sites-rockstargamesd8e71d378f6d4a968e8ac7d621e5f32a",
        text: "rockstargames-sites-rockstargamesa3f73d86b98d36a296bf8f621f1c340f",
        info: "rockstargames-sites-rockstargamesf46d7fc75c302b1d3f4db01d8572bea8",
        active: "rockstargames-sites-rockstargamesd26d1267cc02f841fee8a874d679aebd",
        title: "rockstargames-sites-rockstargamesa879dfc151f7cf8da6bf5642b51436bb",
        gameTitle: "rockstargames-sites-rockstargamesb42d96124219141b4dbb454131b8c37b",
        videoTitle: "rockstargames-sites-rockstargamesc5ff8983fae65d6a3d7c741360bd3606",
        cta: "rockstargames-sites-rockstargamese25e320fda75ce4076c9fe68b540a2fa",
        track: "rockstargames-sites-rockstargamesdd0d39c46df512d3eff8ba48e469af0a",
        disableClick: "rockstargames-sites-rockstargamesb169e1b67f64de28605dd5056a740584",
        items: "rockstargames-sites-rockstargamesdddc42d4babcaec339a7c1bd04420e6e",
        dragging: "rockstargames-sites-rockstargamesa7313e3ff4e99b5313f8698890d0dd8c",
        dots: "rockstargames-sites-rockstargamese1d7433489996eb9fa890d452ebcb042"
      };
      var g = t(46632);
      const p = (0, n.withLocale)((e => {
        let {
          locale: a,
          t,
          videos: r
        } = e;
        const {
          track: p
        } = (0, i.useGtmTrack)(), {
          setBodyIsLocked: f
        } = (0, n.useBodyScrollable)("VideoCarousel"), [u, k] = (0, s.useState)(0), [b, v] = (0, s.useState)(0), j = (0, s.useRef)(null), h = (0, s.useRef)(null);
        return (0, s.useEffect)((() => {
          if (!j.current || !h.current) return;
          const e = new(o())(j.current);
          e.get("press").set({
            time: 0
          }), e.get("tap").set({
            time: 150
          });
          const a = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
            t = () => {
              k(u - 1 < 0 ? 0 : u - 1), v(0)
            },
            s = () => {
              const e = u + 1 >= r.length - 1 ? r.length - 1 : u + 1;
              k(e), v(0)
            },
            i = e => {
              v(e.isFinal ? 0 : e.deltaX), "panleft" !== e.additionalEvent && "panright" !== e.additionalEvent || !h.current?.classList.contains(l.dragging) || a() && f(!0)
            },
            n = () => {
              a() && f(!1), v(0)
            },
            d = e => {
              "press" === e.type && j.current?.classList.add(`${l.disableClick}`), "tap" === e.type && (j.current?.classList.remove(`${l.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
            },
            c = () => {
              a() && f(!1), j.current && j.current.classList.remove(`${l.disableClick}`)
            },
            m = () => {
              a() && f(!1)
            };
          return h.current.addEventListener("transitionend", m), e.on("swiperight", t), e.on("swipeleft", s), e.on("pan", i), e.on("panend", n), e.on("press tap", d), e.on("pressup", c), () => {
            e.off("swiperight", t), e.off("swipeleft", s), e.off("pan", i), e.off("panend", n), e.off("press tap", d), e.off("pressup", c), h.current && h.current.removeEventListener("transitionend", m), v(0)
          }
        }), [j.current, u]), (0, g.jsxs)("section", {
          className: l.carousel,
          children: [(0, g.jsx)("div", {
            className: l.track,
            ref: j,
            children: (0, g.jsx)("div", {
              className: `${l.items} ${0!==b?l.dragging:""}`,
              ref: h,
              style: {
                transform: `translateX(calc(-${100*u}% + ${b}px))`
              },
              children: r.map(((e, a) => (0, g.jsx)(d.A, {
                "data-gtm-category": "Carousel",
                "data-gtm-action": "Click-through screencap",
                "data-gtm-label": `/videos/${e.id}`,
                to: `/videos/${e.id}`,
                className: u === a ? l.active : "",
                role: "link",
                title: e.title,
                tabIndex: u === a ? 0 : -1,
                children: (0, g.jsx)(m.s, {
                  video: e,
                  size: 1280
                })
              }, e.id)))
            })
          }), (0, g.jsxs)("footer", {
            children: [(0, g.jsx)("div", {
              className: l.text,
              children: r.map(((e, s) => {
                return (0, g.jsxs)(d.A, {
                  className: [l.info, s === u ? l.active : ""].join(" "),
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through footer",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  role: "link",
                  title: e.title,
                  tabIndex: u === s ? 0 : -1,
                  children: [(0, g.jsxs)("div", {
                    className: l.title,
                    children: [(0, g.jsxs)("div", {
                      className: l.gameTitle,
                      children: [e.game.title, "fr_fr" === a && " "]
                    }), (0, g.jsx)("h2", {
                      className: l.videoTitle,
                      children: e.title
                    })]
                  }), (0, g.jsx)(c.A, {
                    className: l.cta,
                    onClick: (i = `/videos/${e.id}`, () => {
                      p({
                        event: "cta_watch_video",
                        text: "watch now",
                        link_url: i,
                        element_placement: "video carousel"
                      })
                    }),
                    children: t("Watch Now")
                  })]
                }, e.id);
                var i
              }))
            }), (0, g.jsx)("div", {
              className: l.dots,
              children: r.map(((e, a) => (0, g.jsx)("button", {
                "aria-label": `Slide ${a+1}`,
                "data-gtm-category": "Marquee",
                "data-gtm-action": "Dot click",
                "data-gtm-label": `Dot clicked to ${a}`,
                onClick: () => k(a),
                className: u === a ? l.active : "",
                type: "button"
              }, e.id)))
            })]
          })]
        })
      }))
    },
    44981: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        default: () => j
      });
      var s = t(58407),
        i = t(42756),
        n = t(40207),
        r = t(60285),
        o = t(22778),
        d = t(24486),
        c = t(57928),
        m = t(63852),
        l = t(79286);
      const g = "rockstargames-sites-rockstargamesf75798e3984014f9cd35c5956e94fbb3",
        p = "rockstargames-sites-rockstargamesaa6bc8070e5e81ea0594636575db8fd6";
      var f = t(3131),
        u = t(46632);
      const k = void 0 !== f.HomeData ? f.HomeData : HomeDataDefault,
        b = e => {
          let {
            games: a,
            t
          } = e;
          const {
            track: s
          } = (0, n.useGtmTrack)();
          return (0, u.jsxs)("section", {
            className: "rockstargames-sites-rockstargamesbec4f690ea94ae150d36b6be04b7011d",
            "data-testid": "featuredGames",
            children: [(0, u.jsx)("h3", {
              className: g,
              children: (0, u.jsx)(r.A, {
                to: "games",
                "aria-label": t("Featured Games"),
                "data-testid": "featuredGamesHeader",
                children: t("Featured Games")
              })
            }), (0, u.jsx)("div", {
              className: p,
              children: a.map((e => (0, u.jsx)(m.N, {
                game: e
              }, e.id)))
            }), (0, u.jsx)(o.A, {
              to: "games",
              context: "secondary",
              "data-testid": "viewMoreButton",
              onClick: e => {
                const a = e.currentTarget.href;
                s({
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
        v = e => {
          let {
            posts: a,
            t
          } = e;
          const {
            track: s
          } = (0, n.useGtmTrack)();
          return (0, u.jsxs)("section", {
            className: "rockstargames-sites-rockstargamesbc6c5d345fb1cccca402fd4a97a8bef8",
            "data-testid": "newswire",
            children: [(0, u.jsx)("h3", {
              className: g,
              children: (0, u.jsx)(r.A, {
                to: "newswire",
                "aria-label": t("Newswire"),
                "data-testid": "newswireHeader",
                children: t("Newswire")
              })
            }), (0, u.jsx)(d.A, {
              section: "Home",
              className: p,
              posts: a,
              noSpecialOrder: !0
            }), (0, u.jsx)(o.A, {
              to: "newswire",
              context: "secondary",
              "data-testid": "viewMoreButton",
              onClick: e => {
                const a = e.currentTarget.href;
                s({
                  event: "cta_learn",
                  text: "view more",
                  link_url: a,
                  element_placement: "newswire"
                })
              },
              children: t("View More")
            })]
          })
        },
        j = (0, i.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            data: t
          } = (0, s.useQuery)(k, {
            autoSetLoading: !0
          });
          if (!t) return null;
          const {
            games: i,
            posts: n,
            videos: r
          } = t;
          return (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsxs)("div", {
              className: "rockstargames-sites-rockstargamesdcf817f11d19ae0ef32bf4b753d292a2",
              "data-testid": "homepageBody",
              children: [(0, u.jsx)(c.A, {
                videos: r.results,
                t: a
              }), (0, u.jsxs)("div", {
                className: "rockstargames-sites-rockstargamesd04358d9e38bc205e1c35dee36efcaa1",
                children: [(0, u.jsx)(v, {
                  posts: n.results,
                  t: a
                }), (0, u.jsx)(b, {
                  games: i.results,
                  t: a
                })]
              })]
            }), (0, u.jsx)(l.A, {})]
          })
        }))
    },
    31955: (e, a, t) => {
      var s = {
        kind: "Document",
        definitions: [{
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
          end: 568
        }
      };
      s.loc.source = {
        body: '#import "@rockstargames/graph-client/operations/fragments/newswire-post.graphql"\n#import "@rockstargames/graph-client/operations/fragments/paging.graphql"\n\nquery NewswireList(\n    $locale: String!\n    $page: Int!\n    $limit: Int\n    $tagId: Int\n    $metaUrl: String!\n    $cache: Boolean = true\n) {\n    meta: metaUrl(url: $metaUrl, domain: "www", locale: $locale) {\n        title\n    }\n    posts(page: $page, tagId: $tagId, locale: $locale, limit: $limit) {\n        paging {\n            ...paging\n        }\n        results {\n            ...postFields\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var i = {};

      function n(e) {
        return e.filter((function(e) {
          if ("FragmentDefinition" !== e.kind) return !0;
          var a = e.name.value;
          return !i[a] && (i[a] = !0, !0)
        }))
      }

      function r(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var t = e.type;
          "NamedType" === t.kind && a.add(t.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          r(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          r(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          r(e, a)
        }))
      }
      s.definitions = s.definitions.concat(n(t(90588).definitions)), s.definitions = s.definitions.concat(n(t(78417).definitions));
      var o = {};

      function d(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      s.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          r(e, a), o[e.name.value] = a
        }
      })), e.exports = s, e.exports.NewswireList = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [d(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var s = o[a] || new Set,
          i = new Set,
          n = new Set;
        for (s.forEach((function(e) {
            n.add(e)
          })); n.size > 0;) {
          var r = n;
          n = new Set, r.forEach((function(e) {
            i.has(e) || (i.add(e), (o[e] || new Set).forEach((function(e) {
              n.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var s = d(e, a);
          s && t.definitions.push(s)
        })), t
      }(s, "NewswireList")
    },
    3131: (e, a, t) => {
      var s = {
        kind: "Document",
        definitions: [{
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
          end: 701
        }
      };
      s.loc.source = {
        body: '#import "@rockstargames/graph-client/operations/fragments/newswire-post.graphql"\n\nquery HomeData($locale: String!) {\n    meta: metaUrl(url: "/", domain: "www", locale: $locale) {\n        title\n    }\n    games(limit: 5, locale: $locale) {\n        results {\n            id\n            title\n            titleSlug\n            urlOfficial\n        }\n    }\n    posts(limit: 6, locale: $locale) {\n        results {\n            ...postFields\n        }\n    }\n    videos(locale: $locale, limit: 4, finder: "featured") {\n        results {\n            id\n            title\n            screencap\n            game {\n                id\n                title\n                titleSlug\n            }\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var i = {};

      function n(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var t = e.type;
          "NamedType" === t.kind && a.add(t.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          n(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          n(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          n(e, a)
        }))
      }
      s.definitions = s.definitions.concat(t(90588).definitions.filter((function(e) {
        if ("FragmentDefinition" !== e.kind) return !0;
        var a = e.name.value;
        return !i[a] && (i[a] = !0, !0)
      })));
      var r = {};

      function o(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      s.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          n(e, a), r[e.name.value] = a
        }
      })), e.exports = s, e.exports.HomeData = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [o(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var s = r[a] || new Set,
          i = new Set,
          n = new Set;
        for (s.forEach((function(e) {
            n.add(e)
          })); n.size > 0;) {
          var d = n;
          n = new Set, d.forEach((function(e) {
            i.has(e) || (i.add(e), (r[e] || new Set).forEach((function(e) {
              n.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var s = o(e, a);
          s && t.definitions.push(s)
        })), t
      }(s, "HomeData")
    },
    43202: (e, a, t) => {
      var s = {
        "./GTAOnline.jpg": 10046,
        "./GTATrilogy.jpg": 58679,
        "./IV.jpg": 60104,
        "./V.jpg": 15007,
        "./VI/desktop.png": 94699,
        "./VI/mobile.png": 17821,
        "./agent.jpg": 65682,
        "./beaterator.jpg": 45024,
        "./bully-scholarshipedition.jpg": 38910,
        "./bully.jpg": 58205,
        "./chinatownwars.jpg": 48057,
        "./episodesfromlibertycity.jpg": 97955,
        "./grandtheftauto-gba.jpg": 99826,
        "./grandtheftauto3.jpg": 23686,
        "./gta-online.jpg": 34747,
        "./gta-v.jpg": 44342,
        "./gta.jpg": 4019,
        "./gta2.jpg": 32217,
        "./gtacomplete.jpg": 63970,
        "./gtalondon.jpg": 63201,
        "./italianjob.jpg": 27976,
        "./lanoire-vr-case-files.jpg": 57743,
        "./lanoire.jpg": 61451,
        "./lanoire_2.jpg": 67680,
        "./libertycitystories.jpg": 76766,
        "./manhunt.jpg": 61490,
        "./manhunt2.jpg": 85010,
        "./maxpayne.jpg": 85006,
        "./maxpayne2.jpg": 77126,
        "./maxpayne3.jpg": 15651,
        "./midnightclub.jpg": 57741,
        "./midnightclub2.jpg": 85171,
        "./midnightclub3.jpg": 22006,
        "./midnightclubLA-complete.jpg": 89550,
        "./midnightclubLA.jpg": 56204,
        "./oni.jpg": 94417,
        "./rdr-goty.jpg": 56647,
        "./reddeadonline.jpg": 31271,
        "./reddeadredemption.jpg": 51789,
        "./reddeadredemption2.jpg": 7891,
        "./reddeadrevolver.jpg": 73195,
        "./rockstar-games-collection-edition-1.jpg": 93564,
        "./sanandreas.jpg": 9655,
        "./skateanddestroy.jpg": 61748,
        "./smugglersrun.jpg": 40499,
        "./smugglersrun2.jpg": 7737,
        "./smugglersrunwarzones.jpg": 39528,
        "./stateofemergency.jpg": 55582,
        "./tabletennis.jpg": 20724,
        "./theballadofgaytony.jpg": 14786,
        "./thelostanddamned.jpg": 74540,
        "./thewarriors.jpg": 80173,
        "./undeadnightmare.jpg": 81919,
        "./vicecity.jpg": 31527,
        "./vicecitystories.jpg": 43048,
        "./wildmetal.jpg": 51652
      };

      function i(e) {
        var a = n(e);
        return t(a)
      }

      function n(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = n, e.exports = i, i.id = 43202
    },
    32781: (e, a, t) => {
      var s = {
        "./GTAOnline.jpg": 10046,
        "./GTATrilogy.jpg": 58679,
        "./IV.jpg": 60104,
        "./V.jpg": 15007,
        "./agent.jpg": 65682,
        "./beaterator.jpg": 45024,
        "./bully-scholarshipedition.jpg": 38910,
        "./bully.jpg": 58205,
        "./chinatownwars.jpg": 48057,
        "./episodesfromlibertycity.jpg": 97955,
        "./grandtheftauto-gba.jpg": 99826,
        "./grandtheftauto3.jpg": 23686,
        "./gta-online.jpg": 34747,
        "./gta-v.jpg": 44342,
        "./gta.jpg": 4019,
        "./gta2.jpg": 32217,
        "./gtacomplete.jpg": 63970,
        "./gtalondon.jpg": 63201,
        "./italianjob.jpg": 27976,
        "./lanoire-vr-case-files.jpg": 57743,
        "./lanoire.jpg": 61451,
        "./lanoire_2.jpg": 67680,
        "./libertycitystories.jpg": 76766,
        "./manhunt.jpg": 61490,
        "./manhunt2.jpg": 85010,
        "./maxpayne.jpg": 85006,
        "./maxpayne2.jpg": 77126,
        "./maxpayne3.jpg": 15651,
        "./midnightclub.jpg": 57741,
        "./midnightclub2.jpg": 85171,
        "./midnightclub3.jpg": 22006,
        "./midnightclubLA-complete.jpg": 89550,
        "./midnightclubLA.jpg": 56204,
        "./oni.jpg": 94417,
        "./rdr-goty.jpg": 56647,
        "./reddeadonline.jpg": 31271,
        "./reddeadredemption.jpg": 51789,
        "./reddeadredemption2.jpg": 7891,
        "./reddeadrevolver.jpg": 73195,
        "./rockstar-games-collection-edition-1.jpg": 93564,
        "./sanandreas.jpg": 9655,
        "./skateanddestroy.jpg": 61748,
        "./smugglersrun.jpg": 40499,
        "./smugglersrun2.jpg": 7737,
        "./smugglersrunwarzones.jpg": 39528,
        "./stateofemergency.jpg": 55582,
        "./tabletennis.jpg": 20724,
        "./theballadofgaytony.jpg": 14786,
        "./thelostanddamned.jpg": 74540,
        "./thewarriors.jpg": 80173,
        "./undeadnightmare.jpg": 81919,
        "./vicecity.jpg": 31527,
        "./vicecitystories.jpg": 43048,
        "./wildmetal.jpg": 51652
      };

      function i(e) {
        var a = n(e);
        return t(a)
      }

      function n(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = n, e.exports = i, i.id = 32781
    },
    65392: (e, a, t) => {
      var s = {
        "./VI/desktop.png": 94699
      };

      function i(e) {
        var a = n(e);
        return t(a)
      }

      function n(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = n, e.exports = i, i.id = 65392
    },
    17426: (e, a, t) => {
      var s = {
        "./VI/mobile.png": 17821
      };

      function i(e) {
        var a = n(e);
        return t(a)
      }

      function n(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = n, e.exports = i, i.id = 17426
    },
    10046: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    58679: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/214a1cd1a2e7bb8f9b1e5d3846ca2993.jpg"
    },
    60104: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b01707ef5603a26c1f542088f8f7c09.jpg"
    },
    15007: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    },
    94699: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1aba112359a3d6747ad694a8c02a07c.png"
    },
    17821: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/26f95aa7677031d8cd56ea75250c7bdd.png"
    },
    65682: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d66bfe06a724f04c0941073de283297.jpg"
    },
    45024: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b95ab415fdd8bec89099d433d23e3c7.jpg"
    },
    38910: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5704d117b387578dfebe1290e556f963.jpg"
    },
    58205: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f58d386594d32f34c887da75032c5be.jpg"
    },
    48057: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a8074783730a47af2fe5c2b67ddf7d31.jpg"
    },
    97955: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0281770395dc77e41c1f40559a3d5989.jpg"
    },
    99826: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/15b671d990b1f3f941c6359b3235abf3.jpg"
    },
    23686: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/81001f378e085cd20f8ee0182e23cb7c.jpg"
    },
    34747: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    44342: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    },
    4019: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f34231941013a609948485830c84c072.jpg"
    },
    32217: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48371205a1d87d858baa85712d1f91bb.jpg"
    },
    63970: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/089fe525338554e2120a1aaaf81766d6.jpg"
    },
    63201: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc4dbe3e1d52c3fc405579090868d08.jpg"
    },
    27976: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/809c3d6f72a6752f0ebcc6c92d43db67.jpg"
    },
    57743: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b13400360d3873aa5ed169d38da1ff9f.jpg"
    },
    61451: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b1034f3c525b39db31d9017268a0aeb5.jpg"
    },
    67680: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b1034f3c525b39db31d9017268a0aeb5.jpg"
    },
    76766: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ab528316ca7d31c2b041b62c4ce5dd36.jpg"
    },
    61490: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fa649a5d6b52121271093a7c564cc56a.jpg"
    },
    85010: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/116555df6799e584310484375c97a43f.jpg"
    },
    85006: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fd74a091e2e5765c8769668cc515e494.jpg"
    },
    77126: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e7d916fcce2bbe9b6419f914f290597.jpg"
    },
    15651: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0f31b4df90bff5bab740485f2d4b8253.jpg"
    },
    57741: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dd4b0f40e745f4347c822594da56a119.jpg"
    },
    85171: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/774943ec47ce732040f48df3943a0a7c.jpg"
    },
    22006: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e8ae1f733bc7d3b05c506de67f4b4f7f.jpg"
    },
    89550: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a549b321910f5308200496f1893c2a5f.jpg"
    },
    56204: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/659db20d7a19cc70a0510c7d197cedf3.jpg"
    },
    94417: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8977d6b170f295068d78c5bbb7b6f02d.jpg"
    },
    56647: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61a79de8dea0228576a18068e4f2660a.jpg"
    },
    31271: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc01cf29aa31b9d15a5d06483a0a1a3.jpg"
    },
    51789: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5aa471f90eaff248e0fbef79400cbbf3.jpg"
    },
    7891: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/082b847bcab37655faf903149f80f1e4.jpg"
    },
    73195: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d3ee871568fd751956d5ea1242a4f2d.jpg"
    },
    93564: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f79f3baf4a020b34cf9d3cf29d71f4e.jpg"
    },
    9655: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bbcbd2a2bb65ddad76e831c91c17b421.jpg"
    },
    61748: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a69bebbefae64314172002dd2bae0a34.jpg"
    },
    40499: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4393d2466a2f8931669e345898541812.jpg"
    },
    7737: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4a1657ff0ab4e3d45469556ba2f899c3.jpg"
    },
    39528: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/16e65ca64eafabe331ef1d2bef9c6f16.jpg"
    },
    55582: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/404be4f04081372768bb660a6c1991ba.jpg"
    },
    20724: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5df3b2d018d1e8e9b424b9eaebc86b16.jpg"
    },
    14786: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14448aca4ceaab8680323ce19c963d68.jpg"
    },
    74540: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f9b044c847e4c971c6ac5d096fe3e0eb.jpg"
    },
    80173: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5239707dea0f2f4ea8351f64e6b5a921.jpg"
    },
    81919: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14312e604f0637a2afd376dd571345d9.jpg"
    },
    31527: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6bf5412b358a42300603159932412051.jpg"
    },
    43048: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c82125e0b20342dba2008b0dcc6d55f6.jpg"
    },
    51652: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d0b53035bf66e851116bd0244ba6ace.jpg"
    }
  }
]);