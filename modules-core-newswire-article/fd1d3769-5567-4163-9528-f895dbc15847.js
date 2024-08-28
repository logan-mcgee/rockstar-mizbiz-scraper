! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "fd1d3769-5567-4163-9528-f895dbc15847", e._sentryDebugIdIdentifier = "sentry-dbid-fd1d3769-5567-4163-9528-f895dbc15847")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [9435, 4216], {
    69435: (e, a, r) => {
      "use strict";
      r.r(a), r.d(a, {
        Jsx0: () => n,
        Jsx1: () => B,
        Jsx2: () => D
      });
      var s = r(31716);
      var t = r(46632);
      const n = e => {
        let {
          article: a,
          children: r
        } = e;
        const n = a.primary_tags[a.primary_tags.length > 1 && 722 === a.primary_tags[0].id ? 1 : 0];
        return (0, t.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articlefde6afcfe220cf25157dc91bf1b2d18e",
          children: [(0, t.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlebca2269fc10a1f1bd0a9e45876f0c9cf",
            children: [(0, t.jsxs)("h1", {
              children: [a.title, a.subtitle ? (0, t.jsx)("span", {
                children: a.subtitle
              }) : ""]
            }), (0, t.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articlec37d0dc8985df7232f651846152c95e2",
              children: [a.primary_tags.length ? (0, t.jsx)(s.A, {
                title: n.name,
                href: `/newswire?tag_id=${n.id}`
              }) : "", (0, t.jsx)("time", {
                dateTime: a.created,
                children: a.created_formatted
              })]
            }), a.posts_hero && "iframe" === a.posts_hero.type ? (0, t.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlea802e7b8d32570889cd1dfceaae9f128",
              children: (0, t.jsx)("iframe", {
                src: a.posts_hero.hero
              })
            }) : "", (0, t.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlefec56da42544417b3e8932627cfb9ab8",
              dangerouslySetInnerHTML: {
                __html: a.content
              }
            })]
          }), r]
        })
      };
      var i = r(71403),
        c = r(85865),
        o = r.n(c),
        d = r(42756),
        l = r(34983),
        u = r(21450),
        m = r(8999),
        f = r(60285),
        k = r(22778),
        b = r(39613),
        v = r(41074),
        w = r(28606),
        g = r(87839),
        p = r(2024),
        x = r(95625),
        j = r(61841),
        h = r(43108),
        N = r(75930),
        y = r(17375),
        A = r(37297),
        T = r(63303),
        S = r(63672),
        _ = r(74459),
        E = r.n(_),
        I = r(64064),
        P = r.n(I),
        F = r(26750);
      const B = (0, d.withTranslations)((0, d.withLocale)((e => {
        let {
          article: a,
          children: r,
          locale: n,
          t: c
        } = e;
        const d = {
            A: e => (0, t.jsx)(f.A, {
              ...e
            }),
            AnchorLink: e => (0, t.jsx)(F.AnchorLink, {
              ...e
            }),
            ArticleTag: e => (0, t.jsx)(s.A, {
              ...e
            }),
            AudioPlayer: e => (0, t.jsx)(l.A, {
              ...e
            }),
            Button: e => (0, t.jsx)(k.A, {
              ...e
            }),
            Carousel: e => (0, t.jsx)(u.A, {
              ...e
            }),
            Cta: e => (0, t.jsx)(b.A, {
              ...e
            }),
            Discounts: e => (0, t.jsx)(F.Discounts, {
              ...e
            }),
            Donate: e => (0, t.jsx)(F.Donate, {
              ...e
            }),
            FadeInContent: e => (0, t.jsx)(v.A, {
              ...e
            }),
            FontClip: e => (0, t.jsx)(F.FontClip, {
              ...e
            }),
            GamingRewards: e => (0, t.jsx)(F.GamingRewards, {
              ...e
            }),
            Gif: e => (0, t.jsx)(P(), {
              ...e
            }),
            Grid: e => (0, t.jsx)(w.A, {
              ...e
            }),
            GroupOfItems: e => (0, t.jsx)(E(), {
              ...e
            }),
            HeroImage: e => (0, t.jsx)(F.HeroImage, {
              ...e
            }),
            HTMLElement: e => (0, t.jsx)(g.A, {
              ...e
            }),
            ImageWithBadge: e => (0, t.jsx)(m.A, {
              ...e
            }),
            MultiSourceImage: e => (0, t.jsx)(p.A, {
              ...e
            }),
            NewswireFull: e => (0, t.jsx)(F.NewswireFull, {
              ...e
            }),
            Title: e => (0, t.jsx)(F.NewswireTitle, {
              ...e
            }),
            PctBar: e => (0, t.jsx)(F.PctBar, {
              ...e
            }),
            Podium: e => (0, t.jsx)(F.Podium, {
              ...e
            }),
            ResponsiveGridBox: e => (0, t.jsx)(x.A, {
              ...e
            }),
            ResponsiveGridItem: e => (0, t.jsx)(j.A, {
              ...e
            }),
            ResponsiveFlexBox: e => (0, t.jsx)(h.A, {
              ...e
            }),
            ResponsiveFlexItem: e => (0, t.jsx)(N.A, {
              ...e
            }),
            ResponsiveSection: e => (0, t.jsx)(y.A, {
              ...e
            }),
            ResponsiveImg: e => (0, t.jsx)(A.A, {
              ...e
            }),
            Separator: e => (0, t.jsx)(T.A, {
              ...e
            }),
            Tag: e => (0, t.jsx)(s.A, {
              ...e
            }),
            UnorderedList: e => (0, t.jsx)(S.A, {
              ...e
            })
          },
          _ = a.posts_jsx.variables_us_defaulted,
          [I] = (0, i.useState)((0, t.jsx)(o(), {
            renderInWrapper: !1,
            bindings: {
              getArray: (e, a) => e[a],
              renderHtml: e => (0, t.jsx)("span", {
                dangerouslySetInnerHTML: {
                  __html: e
                }
              }, I),
              article: a,
              locale: n,
              t: c,
              variables: _
            },
            components: d,
            jsx: a.posts_jsx.markup,
            onError: e => {
              console.error(e)
            }
          }));
        return (0, t.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articlec24348b14cbdcfa0c1461aa99aa4c1f6",
          children: [I, r]
        })
      })));
      var C = r(74401),
        L = r(74216);
      const D = e => {
        let {
          children: a,
          payload: r,
          variablesKeys: s
        } = e;
        return (0, t.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articled024f9dc1e6bc46f9b3576bcf12e1eb9",
          children: [(0, t.jsx)(C.TinaParser, {
            tina: {
              payload: r,
              variables: {
                keys: s
              }
            },
            components: L.componentsForTinaParser
          }), a]
        })
      }
    },
    74216: (e, a, r) => {
      "use strict";
      r.r(a), r.d(a, {
        componentsForTinaParser: () => b
      });
      var s = r(20009),
        t = r(64064),
        n = r.n(t),
        i = r(74459),
        c = r.n(i),
        o = r(26527),
        d = r.n(o),
        l = r(31879),
        u = r.n(l),
        m = r(66713),
        f = r.n(m),
        k = r(53473);
      const b = {
        ...s,
        ...r(26750),
        ...{
          ClrCard: k.y3,
          ClrCollapsedCard: k.h7,
          Gif: n(),
          GroupOfItems: c(),
          RockstarVideoPlayer: u(),
          SwiperCarousel: d(),
          UGCJobSpotlight: f()
        }
      }
    },
    34983: (e, a, r) => {
      "use strict";
      r.d(a, {
        A: () => f
      });
      var s = r(71403),
        t = r(59028),
        n = r.n(t),
        i = r(58407),
        c = r(83178);
      const o = {
        player: "rockstargames-modules-core-newswire-articlebb43df423657efcc0f1f38630a24e5e8",
        fixedToBottom: "rockstargames-modules-core-newswire-articlee1f497e3ec34c2fd721b124969e27dd5",
        tracksOpen: "rockstargames-modules-core-newswire-articlee8f2736f0ae21a56045104071a7a9fd7",
        tracks: "rockstargames-modules-core-newswire-articleea84096a931648765b1db46f708f70aa",
        iconBurger: "rockstargames-modules-core-newswire-articleb91aad66a2102668715c5ddaaecede2e",
        trackList: "rockstargames-modules-core-newswire-articlec44536ca7b7fa7236e86c65ae309057e",
        trackActive: "rockstargames-modules-core-newswire-articleac7826f934fc777f58017b1a5752419a",
        trackTitle: "rockstargames-modules-core-newswire-articleaafc522e642572d5ff93c7408b941829",
        trackIndex: "rockstargames-modules-core-newswire-articleb880baa4707c71eb543f905816d8e952",
        controls: "rockstargames-modules-core-newswire-articleff92c8eddfc0a0fa7bc7f444973e4f28",
        controlsCurrentBg: "rockstargames-modules-core-newswire-articlea81d9465f14d65e8e20800d7b25f77d9",
        controlsCurrentBgVisible: "rockstargames-modules-core-newswire-articlec87bd14d2bbc9248d9c197b77454f345",
        controlsTrack: "rockstargames-modules-core-newswire-articlec23bf574089d1af93750f6af8ebb489f",
        controlsTrackTitle: "rockstargames-modules-core-newswire-articlee4b77d29e904f9928cca1de93f5c7745",
        controlsTrackAnimating: "rockstargames-modules-core-newswire-articleba49949a9cd8c22385708f267c625029",
        scrollText: "rockstargames-modules-core-newswire-articlefd9c80e5afaa1ed38ce85f2c3d70eae4",
        controlsTrackArtist: "rockstargames-modules-core-newswire-articlec93c1e5399d9fd5e96ca246fdbfb307b",
        controlsTrackBurger: "rockstargames-modules-core-newswire-articleb4e1a16e3460b40c1aacd92afe219856",
        controlsButtons: "rockstargames-modules-core-newswire-articled136125994c1d0db1449fce51af559ca",
        controlsScrub: "rockstargames-modules-core-newswire-articled3d935648408f71928bd49d2f7c5a9ff",
        controlsPlayPause: "rockstargames-modules-core-newswire-articlef5de7526c8cee98bdd7363fd7f2cf8ae",
        controlsPlayPausePlaying: "rockstargames-modules-core-newswire-articleefb6194f0df966e6c8c759937d2fb826",
        controlsNextTrack: "rockstargames-modules-core-newswire-articlef286e0ce01c5401e56dd579b076f1aae",
        controlsPrevTrack: "rockstargames-modules-core-newswire-articlea56bb7cb4b0e2de481777d1f09c3f2f2",
        controlsScrubTrack: "rockstargames-modules-core-newswire-articleb8f38f45353fa54fcb6f9e2a3d0d5a85"
      };
      var d = r(46632);
      const l = e => {
          let {
            src: a
          } = e;
          return (0, d.jsx)("div", {
            className: o.cover,
            style: {
              background: `url(${a}) center/cover`
            }
          })
        },
        u = e => {
          let {
            timing: a = {
              current: 0,
              duration: 0
            },
            playing: r,
            audioRef: t,
            setPlaying: i,
            tracksOpen: c,
            setTracksOpen: l,
            trackData: u,
            setTrackId: m,
            trackBounds: f,
            setAutoNext: k
          } = e;
          const b = (0, s.useRef)(null),
            v = (0, s.useRef)(null),
            w = (0, s.useRef)(null),
            [g, p] = (0, s.useState)(null),
            [x, j] = (0, s.useState)(!1),
            h = e => {
              const a = new Date(1e3 * e),
                r = a.getUTCMinutes(),
                s = a.getSeconds();
              return `${r.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`
            };
          return (0, s.useEffect)((() => {
            if (!v.current || !w.current) return;
            const e = () => {
              w.current && v.current && p(w.current.clientWidth > v.current.clientWidth)
            };
            return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e)
          }), [w, v, a]), (0, s.useEffect)((() => {
            if (!b.current || !a?.duration) return;
            let e = null;
            const r = new(n())(b.current),
              s = e => {
                if (b.current) {
                  const r = b.current.clientWidth;
                  if (!b.current.contains(e.srcEvent.target)) return;
                  const s = Math.max(0, e.srcEvent.offsetX),
                    n = Number(s / r * a.duration);
                  t.currentTime = n
                }
              },
              i = () => {
                e ? t.pause() : t.play()
              },
              c = () => {
                e = t.paused, t.pause()
              };
            return r.on("panstart", c), r.on("panleft", s), r.on("panright", s), r.on("panend", i), r.on("tap", s), () => {
              r.off("panstart", c), r.off("panleft", s), r.off("panright", s), r.off("panend", i), r.off("tap", s)
            }
          }), [b.current, a.duration]), (0, s.useEffect)((() => {
            const e = Number(t?.currentTime);
            (r || !isNaN(e) && 0 !== e) && j(!0)
          }), [r, t?.currentTime]), (0, d.jsxs)("div", {
            className: o.controls,
            style: {
              "--track-color": u.color,
              "--track-mix-blend-mode": u.mix_blend_mode,
              "--current-pct": a.current / a.duration
            },
            children: [(0, d.jsx)("div", {
              className: [o.controlsCurrentBg, x ? o.controlsCurrentBgVisible : ""].join(" ")
            }), (0, d.jsx)("div", {
              className: o.controlsTrack,
              ref: v,
              children: (0, d.jsx)("span", {
                className: [o.controlsTrackTitle, g ? o.controlsTrackAnimating : ""].join(" "),
                ref: w,
                children: u.title
              })
            }), (0, d.jsxs)("div", {
              className: o.controlsButtons,
              children: [(0, d.jsx)("div", {
                className: o.controlsPrevTrack,
                onClick: () => {
                  f && (m(f[0]), k(!0), i(!0))
                }
              }), (0, d.jsx)("div", {
                className: [o.controlsPlayPause, r ? o.controlsPlayPausePlaying : ""].join(" "),
                onClick: () => {
                  i(!r)
                }
              }), (0, d.jsx)("div", {
                className: o.controlsNextTrack,
                onClick: () => {
                  f && (m(f[1]), k(!0), i(!0))
                }
              })]
            }), (0, d.jsx)("div", {
              active: c ? "" : null,
              className: o.controlsTrackBurger,
              children: (0, d.jsx)("div", {
                className: o.iconBurger,
                onClick: () => {
                  l(!c)
                }
              })
            }), (0, d.jsxs)("div", {
              className: o.controlsScrub,
              children: [(0, d.jsx)("span", {
                children: h(a.current)
              }), (0, d.jsx)("div", {
                className: o.controlsScrubTrack,
                ref: b
              }), (0, d.jsx)("span", {
                children: h(a.duration)
              })]
            })]
          })
        },
        m = e => {
          let {
            tracks: a,
            trackId: r,
            setTrackId: s,
            tracksOpen: t,
            setTracksOpen: n,
            setPlaying: i,
            setAutoNext: c
          } = e;
          return (0, d.jsxs)("div", {
            className: o.tracks,
            children: [(0, d.jsx)("h4", {
              children: "Tracks"
            }), (0, d.jsx)("div", {
              className: o.trackBurger,
              onClick: () => {
                n(!t)
              }
            }), (0, d.jsx)("div", {
              className: o.trackList,
              children: a.map(((e, a) => (0, d.jsxs)("a", {
                style: {
                  "--highlight-color": e.color
                },
                className: r === e.id ? o.trackActive : "",
                onClick: () => {
                  s(e.id), i(!0), c(!0)
                },
                children: [(0, d.jsx)("span", {
                  className: o.trackIndex,
                  children: String(a + 1).padStart(2, "0")
                }), (0, d.jsx)("span", {
                  className: o.trackTitle,
                  children: e.title
                }), (0, d.jsx)("span", {
                  className: o.trackTime,
                  children: e.duration
                })]
              }, e.id)))
            })]
          })
        },
        f = e => {
          let {
            id: a,
            className: r = ""
          } = e;
          const {
            data: t
          } = (0, i.useQuery)(c.GetAudioAlbum, {
            variables: {
              id: a
            }
          }), [n, f] = (0, s.useState)(), [k, b] = (0, s.useState)(), [v, w] = (0, s.useState)(), [g, p] = (0, s.useState)(!1), [x, j] = (0, s.useState)(!1), [h, N] = (0, s.useState)(new HTMLAudioElement), [y, A] = (0, s.useState)({
            current: 0,
            duration: 0
          }), [T, S] = (0, s.useState)(!0);
          return (0, s.useEffect)((() => {
            const e = "audio",
              a = a => {
                a?.data?.rockstarAudioPlayerPlayTrackId && (b(a.data.rockstarAudioPlayerPlayTrackId), S(!1), j(!0)), x && a?.data?.attentionBlurredElsewhere && a?.data?.from !== e && j(!1)
              };
            return x && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: e
            }), window.addEventListener("message", a, !1), () => window.removeEventListener("message", a, !1)
          }), [x]), (0, s.useEffect)((() => {
            if (!h) return;
            const e = () => {
                isNaN(h.duration) || A({
                  duration: h?.duration ?? 0,
                  current: h?.currentTime ?? 0
                })
              },
              a = () => {
                T && n && b(n[1])
              };
            return h.addEventListener("loadedmetadata", e), h.addEventListener("timeupdate", e), h.addEventListener("ended", a), () => {
              h.removeEventListener("loadedmetadata", e), h.removeEventListener("timeupdate", e), h.removeEventListener("ended", a)
            }
          }), [h, n, T]), (0, s.useEffect)((() => {
            x && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: "audio"
            })
          }), [x]), (0, s.useEffect)((() => {
            h && (x ? h.play() : h.pause(), p(!1))
          }), [x, h, v?.id]), (0, s.useEffect)((() => {
            if (!k) return;
            const {
              tracks: e
            } = t.audioAlbum, a = t.audioAlbum.tracks.findIndex((e => e.id === k));
            f([e[a - 1]?.id ?? e[e.length - 1].id, e[a + 1]?.id ?? e[0].id]), w(e[a])
          }), [k]), (0, s.useEffect)((() => {
            t && b(t.audioAlbum.tracks[0].id)
          }), [t]), v ? (0, d.jsxs)("div", {
            className: [o.player, o[r], g ? o.tracksOpen : ""].join(" "),
            children: [(0, d.jsx)("audio", {
              ref: e => {
                N(e)
              },
              src: v.mp3_src
            }), (0, d.jsx)(m, {
              tracks: t.audioAlbum.tracks,
              setTrackId: b,
              trackId: k,
              tracksOpen: g,
              setTracksOpen: p,
              setPlaying: j,
              setAutoNext: S
            }), (0, d.jsx)(l, {
              src: v.cover_src
            }), (0, d.jsx)(u, {
              setTrackId: b,
              trackBounds: n,
              tracksOpen: g,
              setTracksOpen: p,
              playing: x,
              setPlaying: j,
              timing: y,
              trackData: v,
              audioRef: h,
              setAutoNext: S
            })]
          }) : null
        }
    },
    41074: (e, a, r) => {
      "use strict";
      r.d(a, {
        A: () => i
      });
      var s = r(71403);
      const t = {
        animateBox: "rockstargames-modules-core-newswire-articlee9374e74c542c1028a2068dfbd1e85a3",
        fadeArea: "rockstargames-modules-core-newswire-articlea63de5cdf9849ac45a0f6b4f7617cfa5",
        visible: "rockstargames-modules-core-newswire-articled7458685114194d602f94e2581de0f08",
        barGrow: "rockstargames-modules-core-newswire-articleb0f4d843b626e3741c9dd38fcb3f56b0",
        bar: "rockstargames-modules-core-newswire-articlea4b99f54f3ce3987765143d8a151360a",
        animateMe: "rockstargames-modules-core-newswire-articlef9c3869a2a1e10490bdfbcb3ee89d7da"
      };
      var n = r(46632);
      const i = e => {
        let {
          children: a,
          style: r
        } = e;
        const i = (0, s.useRef)(null);
        return (0, s.useEffect)((() => {
          new IntersectionObserver((e => {
            e.forEach((e => {
              e.isIntersecting && e.target.classList.add([t.visible])
            }))
          })).observe(i?.current)
        }), []), (0, n.jsx)("div", {
          style: r,
          className: [t.fadeArea].join(" "),
          ref: i,
          children: a
        })
      }
    },
    43108: (e, a, r) => {
      "use strict";
      r.d(a, {
        A: () => n
      });
      const s = {
        responsiveFlexBox: "rockstargames-modules-core-newswire-articlecef355ba53827b9ec44655c80b247b2e",
        responsiveFlexItem: "rockstargames-modules-core-newswire-articlea8f5d10f689c3d40c8378e3ae8a07517",
        responsiveImage: "rockstargames-modules-core-newswire-articlebee8268780b292e5bc0da0b497e2c28f"
      };
      var t = r(46632);
      const n = e => {
        let {
          children: a,
          className: r,
          style: n
        } = e;
        return (0, t.jsx)("div", {
          className: [s.responsiveFlexBox, void 0 !== r ? r : ""].join(" "),
          style: n,
          children: a
        })
      }
    },
    75930: (e, a, r) => {
      "use strict";
      r.d(a, {
        A: () => n
      });
      const s = {
        responsiveFlexItem: "rockstargames-modules-core-newswire-articleae579f6183cf73c897e68c8aae5c9d9d"
      };
      var t = r(46632);
      const n = e => {
        let {
          children: a,
          className: r,
          style: n
        } = e;
        return (0, t.jsx)("div", {
          className: [s.responsiveFlexItem, void 0 !== r ? r : ""].join(" "),
          style: n,
          children: a
        })
      }
    },
    31716: (e, a, r) => {
      "use strict";
      r.d(a, {
        A: () => i
      });
      var s = r(60285);
      const t = {
        tag: "rockstargames-modules-core-newswire-articleed77774d2704bc0ebc0ac156542ae053"
      };
      var n = r(46632);
      const i = e => {
        let {
          className: a,
          href: r,
          title: i,
          style: c
        } = e;
        const o = (0, n.jsxs)("div", {
          style: c,
          className: [t.tag, a].join(" "),
          children: [(0, n.jsx)("i", {}), i]
        });
        return void 0 !== r ? (0, n.jsx)(s.A, {
          to: r,
          children: o
        }) : o
      }
    },
    83178: e => {
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

      function r(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          r(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          r(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          r(e, a)
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

      function t(e, a) {
        for (var r = 0; r < e.definitions.length; r++) {
          var s = e.definitions[r];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          r(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.GetAudioAlbum = function(e, a) {
        var r = {
          kind: e.kind,
          definitions: [t(e, a)]
        };
        e.hasOwnProperty("loc") && (r.loc = e.loc);
        var n = s[a] || new Set,
          i = new Set,
          c = new Set;
        for (n.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var s = t(e, a);
          s && r.definitions.push(s)
        })), r
      }(a, "GetAudioAlbum")
    }
  }
]);