! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "bac575db-66c9-463d-a2e6-390a14b52cad", e._sentryDebugIdIdentifier = "sentry-dbid-bac575db-66c9-463d-a2e6-390a14b52cad")
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
  [185], {
    34983: (e, a, r) => {
      "use strict";
      r.d(a, {
        A: () => f
      });
      var s = r(71403),
        t = r(59028),
        c = r.n(t),
        n = r(58407),
        i = r(83178);
      const d = {
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
      var o = r(46632);
      const l = e => {
          let {
            src: a
          } = e;
          return (0, o.jsx)("div", {
            className: d.cover,
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
            setPlaying: n,
            tracksOpen: i,
            setTracksOpen: l,
            trackData: u,
            setTrackId: m,
            trackBounds: f,
            setAutoNext: k
          } = e;
          const w = (0, s.useRef)(null),
            b = (0, s.useRef)(null),
            g = (0, s.useRef)(null),
            [v, p] = (0, s.useState)(null),
            [N, x] = (0, s.useState)(!1),
            h = e => {
              const a = new Date(1e3 * e),
                r = a.getUTCMinutes(),
                s = a.getSeconds();
              return `${r.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`
            };
          return (0, s.useEffect)((() => {
            if (!b.current || !g.current) return;
            const e = () => {
              g.current && b.current && p(g.current.clientWidth > b.current.clientWidth)
            };
            return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e)
          }), [g, b, a]), (0, s.useEffect)((() => {
            if (!w.current || !a?.duration) return;
            let e = null;
            const r = new(c())(w.current),
              s = e => {
                if (w.current) {
                  const r = w.current.clientWidth;
                  if (!w.current.contains(e.srcEvent.target)) return;
                  const s = Math.max(0, e.srcEvent.offsetX),
                    c = Number(s / r * a.duration);
                  t.currentTime = c
                }
              },
              n = () => {
                e ? t.pause() : t.play()
              },
              i = () => {
                e = t.paused, t.pause()
              };
            return r.on("panstart", i), r.on("panleft", s), r.on("panright", s), r.on("panend", n), r.on("tap", s), () => {
              r.off("panstart", i), r.off("panleft", s), r.off("panright", s), r.off("panend", n), r.off("tap", s)
            }
          }), [w.current, a.duration]), (0, s.useEffect)((() => {
            const e = Number(t?.currentTime);
            (r || !isNaN(e) && 0 !== e) && x(!0)
          }), [r, t?.currentTime]), (0, o.jsxs)("div", {
            className: d.controls,
            style: {
              "--track-color": u.color,
              "--track-mix-blend-mode": u.mix_blend_mode,
              "--current-pct": a.current / a.duration
            },
            children: [(0, o.jsx)("div", {
              className: [d.controlsCurrentBg, N ? d.controlsCurrentBgVisible : ""].join(" ")
            }), (0, o.jsx)("div", {
              className: d.controlsTrack,
              ref: b,
              children: (0, o.jsx)("span", {
                className: [d.controlsTrackTitle, v ? d.controlsTrackAnimating : ""].join(" "),
                ref: g,
                children: u.title
              })
            }), (0, o.jsxs)("div", {
              className: d.controlsButtons,
              children: [(0, o.jsx)("div", {
                className: d.controlsPrevTrack,
                onClick: () => {
                  f && (m(f[0]), k(!0), n(!0))
                }
              }), (0, o.jsx)("div", {
                className: [d.controlsPlayPause, r ? d.controlsPlayPausePlaying : ""].join(" "),
                onClick: () => {
                  n(!r)
                }
              }), (0, o.jsx)("div", {
                className: d.controlsNextTrack,
                onClick: () => {
                  f && (m(f[1]), k(!0), n(!0))
                }
              })]
            }), (0, o.jsx)("div", {
              active: i ? "" : null,
              className: d.controlsTrackBurger,
              children: (0, o.jsx)("div", {
                className: d.iconBurger,
                onClick: () => {
                  l(!i)
                }
              })
            }), (0, o.jsxs)("div", {
              className: d.controlsScrub,
              children: [(0, o.jsx)("span", {
                children: h(a.current)
              }), (0, o.jsx)("div", {
                className: d.controlsScrubTrack,
                ref: w
              }), (0, o.jsx)("span", {
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
            setTracksOpen: c,
            setPlaying: n,
            setAutoNext: i
          } = e;
          return (0, o.jsxs)("div", {
            className: d.tracks,
            children: [(0, o.jsx)("h4", {
              children: "Tracks"
            }), (0, o.jsx)("div", {
              className: d.trackBurger,
              onClick: () => {
                c(!t)
              }
            }), (0, o.jsx)("div", {
              className: d.trackList,
              children: a.map(((e, a) => (0, o.jsxs)("a", {
                style: {
                  "--highlight-color": e.color
                },
                className: r === e.id ? d.trackActive : "",
                onClick: () => {
                  s(e.id), n(!0), i(!0)
                },
                children: [(0, o.jsx)("span", {
                  className: d.trackIndex,
                  children: String(a + 1).padStart(2, "0")
                }), (0, o.jsx)("span", {
                  className: d.trackTitle,
                  children: e.title
                }), (0, o.jsx)("span", {
                  className: d.trackTime,
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
          } = (0, n.useQuery)(i.GetAudioAlbum, {
            variables: {
              id: a
            }
          }), [c, f] = (0, s.useState)(), [k, w] = (0, s.useState)(), [b, g] = (0, s.useState)(), [v, p] = (0, s.useState)(!1), [N, x] = (0, s.useState)(!1), [h, y] = (0, s.useState)(new HTMLAudioElement), [j, _] = (0, s.useState)({
            current: 0,
            duration: 0
          }), [S, T] = (0, s.useState)(!0);
          return (0, s.useEffect)((() => {
            const e = "audio",
              a = a => {
                a?.data?.rockstarAudioPlayerPlayTrackId && (w(a.data.rockstarAudioPlayerPlayTrackId), T(!1), x(!0)), N && a?.data?.attentionBlurredElsewhere && a?.data?.from !== e && x(!1)
              };
            return N && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: e
            }), window.addEventListener("message", a, !1), () => window.removeEventListener("message", a, !1)
          }), [N]), (0, s.useEffect)((() => {
            if (!h) return;
            const e = () => {
                isNaN(h.duration) || _({
                  duration: h?.duration ?? 0,
                  current: h?.currentTime ?? 0
                })
              },
              a = () => {
                S && c && w(c[1])
              };
            return h.addEventListener("loadedmetadata", e), h.addEventListener("timeupdate", e), h.addEventListener("ended", a), () => {
              h.removeEventListener("loadedmetadata", e), h.removeEventListener("timeupdate", e), h.removeEventListener("ended", a)
            }
          }), [h, c, S]), (0, s.useEffect)((() => {
            N && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: "audio"
            })
          }), [N]), (0, s.useEffect)((() => {
            h && (N ? h.play() : h.pause(), p(!1))
          }), [N, h, b?.id]), (0, s.useEffect)((() => {
            if (!k) return;
            const {
              tracks: e
            } = t.audioAlbum, a = t.audioAlbum.tracks.findIndex((e => e.id === k));
            f([e[a - 1]?.id ?? e[e.length - 1].id, e[a + 1]?.id ?? e[0].id]), g(e[a])
          }), [k]), (0, s.useEffect)((() => {
            t && w(t.audioAlbum.tracks[0].id)
          }), [t]), b ? (0, o.jsxs)("div", {
            className: [d.player, d[r], v ? d.tracksOpen : ""].join(" "),
            children: [(0, o.jsx)("audio", {
              ref: e => {
                y(e)
              },
              src: b.mp3_src
            }), (0, o.jsx)(m, {
              tracks: t.audioAlbum.tracks,
              setTrackId: w,
              trackId: k,
              tracksOpen: v,
              setTracksOpen: p,
              setPlaying: x,
              setAutoNext: T
            }), (0, o.jsx)(l, {
              src: b.cover_src
            }), (0, o.jsx)(u, {
              setTrackId: w,
              trackBounds: c,
              tracksOpen: v,
              setTracksOpen: p,
              playing: N,
              setPlaying: x,
              timing: j,
              trackData: b,
              audioRef: h,
              setAutoNext: T
            })]
          }) : null
        }
    },
    41074: (e, a, r) => {
      "use strict";
      r.d(a, {
        A: () => n
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
      var c = r(46632);
      const n = e => {
        let {
          children: a,
          style: r
        } = e;
        const n = (0, s.useRef)(null);
        return (0, s.useEffect)((() => {
          new IntersectionObserver((e => {
            e.forEach((e => {
              e.isIntersecting && e.target.classList.add([t.visible])
            }))
          })).observe(n?.current)
        }), []), (0, c.jsx)("div", {
          style: r,
          className: [t.fadeArea].join(" "),
          ref: n,
          children: a
        })
      }
    },
    43108: (e, a, r) => {
      "use strict";
      r.d(a, {
        A: () => c
      });
      const s = {
        responsiveFlexBox: "rockstargames-modules-core-newswire-articlecef355ba53827b9ec44655c80b247b2e",
        responsiveFlexItem: "rockstargames-modules-core-newswire-articlea8f5d10f689c3d40c8378e3ae8a07517",
        responsiveImage: "rockstargames-modules-core-newswire-articlebee8268780b292e5bc0da0b497e2c28f"
      };
      var t = r(46632);
      const c = e => {
        let {
          children: a,
          className: r,
          style: c
        } = e;
        return (0, t.jsx)("div", {
          className: [s.responsiveFlexBox, void 0 !== r ? r : ""].join(" "),
          style: c,
          children: a
        })
      }
    },
    75930: (e, a, r) => {
      "use strict";
      r.d(a, {
        A: () => c
      });
      const s = {
        responsiveFlexItem: "rockstargames-modules-core-newswire-articleae579f6183cf73c897e68c8aae5c9d9d"
      };
      var t = r(46632);
      const c = e => {
        let {
          children: a,
          className: r,
          style: c
        } = e;
        return (0, t.jsx)("div", {
          className: [s.responsiveFlexItem, void 0 !== r ? r : ""].join(" "),
          style: c,
          children: a
        })
      }
    },
    72558: (e, a, r) => {
      "use strict";
      r.d(a, {
        A: () => u
      });
      var s = r(71403),
        t = r(89779),
        c = r(42756),
        n = r(40207),
        i = r(60285),
        d = r(31716);
      const o = {
        newswireBlock: "rockstargames-modules-core-newswire-articlea793f470884d207243d6c3caac8ad811",
        info: "rockstargames-modules-core-newswire-articled50f6d2bc5f983c05311292acb4c78a5",
        title: "rockstargames-modules-core-newswire-articlecc389449dc1495fc9c323fc2c547857d",
        newswireBlockNoSpecialOrder: "rockstargames-modules-core-newswire-articleffd167124f27c8e26a147f49c88796e5",
        preview: "rockstargames-modules-core-newswire-articlebbfbcf32c8c892ea29f4178949643475",
        previewMobile: "rockstargames-modules-core-newswire-articlef88852766488b21a28c42d230ea529a1",
        top: "rockstargames-modules-core-newswire-articlefa1a6f4c7d94b94f5af2dc1ac9af79f1",
        startAnimation: "rockstargames-modules-core-newswire-articlee380e8c67066df6f33fc018341ea96e5"
      };
      var l = r(46632);
      const u = e => {
        let {
          section: a = "",
          index: r,
          post: u,
          noSpecialOrder: m = !1,
          focused: f
        } = e;
        const {
          track: k
        } = (0, n.useGtmTrack)(), [w] = (0, t.useSearchParams)(), b = u.preview_images_parsed.newswire_block, g = {
          default: 0 !== r || m ? b.square || b.d16x9 || b._fallback : b.d16x9 || b.square || b._fallback,
          mobile: b.square || b._fallback
        }, [v, p] = (0, c.usePreloadImg)(g.default), N = {
          default: {
            backgroundImage: `url(${g.default})`
          },
          mobile: {
            backgroundImage: `url(${g.mobile})`
          }
        }, x = (0, s.useCallback)((() => {
          k({
            event: "card_click",
            card_id: u.id,
            card_name: u.name_slug.replace(/-/g, " "),
            link_url: u.url,
            position: r,
            element_placement: a
          })
        }), [u]);
        return (0, l.jsx)(i.A, {
          to: u.url,
          className: [o.newswireBlock, m ? o.newswireBlockNoSpecialOrder : "", null !== v ? o.startAnimation : ""].join(" "),
          focused: f,
          onClick: x,
          children: (0, l.jsxs)(l.Fragment, {
            children: [0 !== r || w.get("tag_id") ? (0, l.jsx)("div", {
              className: o.preview,
              style: N.default
            }) : (0, l.jsxs)(l.Fragment, {
              children: [(0, l.jsx)("div", {
                className: o.previewMobile,
                style: N.mobile
              }), (0, l.jsx)("div", {
                className: o.preview,
                style: N.default
              })]
            }), (0, l.jsxs)("div", {
              className: o.info,
              children: [(0, l.jsxs)("div", {
                className: o.top,
                children: [u.primary_tags.length ? (0, l.jsx)(d.A, {
                  title: u.primary_tags[u.primary_tags.length > 1 && 722 === u.primary_tags[0].id ? 1 : 0].name
                }) : "", (0, l.jsx)("time", {
                  dateTime: u.created,
                  children: u.created_formatted
                })]
              }), (0, l.jsx)("h5", {
                className: o.title,
                dangerouslySetInnerHTML: {
                  __html: u.title
                }
              })]
            })]
          })
        })
      }
    },
    31716: (e, a, r) => {
      "use strict";
      r.d(a, {
        A: () => n
      });
      var s = r(60285);
      const t = {
        tag: "rockstargames-modules-core-newswire-articleed77774d2704bc0ebc0ac156542ae053"
      };
      var c = r(46632);
      const n = e => {
        let {
          className: a,
          href: r,
          title: n,
          style: i
        } = e;
        const d = (0, c.jsxs)("div", {
          style: i,
          className: [t.tag, a].join(" "),
          children: [(0, c.jsx)("i", {}), n]
        });
        return void 0 !== r ? (0, c.jsx)(s.A, {
          to: r,
          children: d
        }) : d
      }
    },
    95073: (e, a, r) => {
      "use strict";
      r.d(a, {
        A: () => i
      });
      var s = r(42756),
        t = r(72558);
      const c = {
        pillBtn: "rockstargames-modules-core-newswire-articleafd0af959edb4a463c41ad4e9cc5dadc",
        selected: "rockstargames-modules-core-newswire-articlebcd59aa4a9e88d86a2cbe8d4972f8f51",
        related: "rockstargames-modules-core-newswire-articlea748ad776070dab831edc1f67f66af08",
        posts: "rockstargames-modules-core-newswire-articlec0aa38678decd13ca38886b4547efedd",
        just1post: "rockstargames-modules-core-newswire-articleb1a31ddf7fd4458ee860d354a6a0ac92"
      };
      var n = r(46632);
      const i = (0, s.withTranslations)((e => {
        let {
          posts: a,
          t: r
        } = e;
        return (0, n.jsxs)("section", {
          className: c.related,
          children: [(0, n.jsx)("h2", {
            children: r("Related Stories")
          }), (0, n.jsx)("div", {
            className: [c.posts, 1 === a.length ? c.just1post : ""].join(" "),
            children: a.map((e => (0, n.jsx)(t.A, {
              noSpecialOrder: !0,
              post: e
            }, e.id)))
          })]
        })
      }))
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
        var c = s[a] || new Set,
          n = new Set,
          i = new Set;
        for (c.forEach((function(e) {
            i.add(e)
          })); i.size > 0;) {
          var d = i;
          i = new Set, d.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              i.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = t(e, a);
          s && r.definitions.push(s)
        })), r
      }(a, "GetAudioAlbum")
    }
  }
]);