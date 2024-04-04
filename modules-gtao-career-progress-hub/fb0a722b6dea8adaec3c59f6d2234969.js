! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "129968b8-ab47-4969-9980-4acbee86ff29", e._sentryDebugIdIdentifier = "sentry-dbid-129968b8-ab47-4969-9980-4acbee86ff29")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "90b9af281bd1b5c2955354a97f6fab1985234888",
  packageName: "@rockstargames/modules-gtao-career-progress-hub",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "90b9af281bd1b5c2955354a97f6fab1985234888"
}, (self.webpackChunk_rockstargames_modules_gtao_career_progress_hub = self.webpackChunk_rockstargames_modules_gtao_career_progress_hub || []).push([
  [480], {
    58568: (e, a, s) => {
      "use strict";
      s.r(a), s.d(a, {
        A: () => f,
        AudioPlayer: () => N,
        Badge: () => w,
        Brands: () => j,
        Button: () => C,
        ButtonGroup: () => B,
        CalloutSection: () => J,
        Carousel: () => A,
        ConditionalBlock: () => H,
        CookieAB: () => te,
        CountryInputField: () => re,
        Cta: () => le,
        DescriptionArea: () => je,
        DiscountsBadge: () => Me,
        DotLoader: () => Ee,
        Dropdown: () => Ve,
        Embed: () => Fe,
        ExpandingPlatformButton: () => Ke,
        FadeInContent: () => Qe,
        GameCard: () => r,
        GameSiteHeader: () => sa,
        Gen9Button: () => E,
        Gen9CoreCarousel: () => ia,
        Grid: () => De,
        HTMLElement: () => ka,
        Hero: () => pa,
        HookStore: () => R,
        ImageWithBadge: () => Ia,
        LanguageSelector: () => Na,
        LayeredImage: () => Sa,
        LoadingAnimation: () => kt,
        MultiSourceImage: () => pe,
        NewswireBlocks: () => Oa,
        NewswireCard: () => Pa,
        NewswireList: () => $a,
        NewswireRelated: () => Aa,
        NewswireTag: () => Ea,
        OrderedList: () => Ga,
        PackList: () => Za,
        PackListMenu: () => ms,
        Paging: () => fs,
        ParallaxCacheBuster: () => bs,
        ParallaxInnerLayer: () => hs,
        ParallaxOuterLayer: () => xs,
        ParallaxWrapper: () => ks,
        ProfileSwitcher: () => t,
        PromoModule: () => ir,
        Rating: () => mr,
        ResponsiveFlexBox: () => ur,
        ResponsiveFlexItem: () => pr,
        ResponsiveGridBox: () => _r,
        ResponsiveGridItem: () => hr,
        ResponsiveImg: () => xr,
        ResponsiveSection: () => Nr,
        RockstarLogo: () => wr,
        ScrollToTop: () => jr,
        ScrollTracker: () => Sr,
        SearchBox: () => Cr,
        Separator: () => ye,
        Skeleton: () => Tr,
        SrcsetImage: () => Ma,
        TextFit: () => Ce,
        ThumbsGallery: () => $r,
        TinaModuleFetchNRender: () => Fr,
        TinaWrapper: () => Or,
        TrackList: () => Br,
        UnorderedList: () => ve,
        UserVote: () => Gr,
        VideoCard: () => o,
        VideoCarousel: () => Wr,
        VideoList: () => Kr,
        Wasted: () => Yr,
        framer: () => i,
        useTinaModuleFetchByIds: () => Ar,
        withSearchbarErrorBoundary: () => at,
        withSimpleErrorBoundary: () => oa
      });
      var r = {};
      s.r(r), s.d(r, {
        Art: () => Je,
        Link: () => ea
      });
      var t = {};
      s.r(t), s.d(t, {
        CharacterCard: () => Ss,
        Menu: () => sr,
        MenuButton: () => or
      });
      var o = {};
      s.r(o), s.d(o, {
        Art: () => Zr,
        Link: () => Jr
      });
      var c = {};
      s.r(c), s.d(c, {
        getVariant: () => ut,
        transitions: () => mt,
        variants: () => gt
      });
      var i = {};
      s.r(i), s.d(i, {
        Animations: () => c,
        LiteMotion: () => st,
        withFadeIn: () => ct,
        withFadeUp: () => dt
      });
      var n = s(51664),
        l = s(41272);
      const d = (0, l.defineMessages)({
        aria_label_open_new_window: {
          id: "aria_label_open_new_window",
          defaultMessage: "(Opens in a new window)"
        }
      });
      var m = s(57013);
      const g = "rockstargames-modules-gtao-career-progress-hubff481c537a56a6fcdb1be85dfbc8944e";
      var u = s(95240);
      const f = e => {
        let {
          children: a,
          to: s = "#",
          alt: r = "",
          autoBlank: t = !1,
          onClick: o = (() => {}),
          ...c
        } = e;
        const i = (0, l.useIntl)(),
          n = !/^(https?|mailto):/i.test(s),
          f = /^#/.test(s),
          p = c?.target ?? (t ? "_blank" : "_self");
        let {
          t: b,
          ..._
        } = c, k = "";
        if ("aria-label" in _ && _["aria-label"] && (k = "_blank" === p ? `${_["aria-label"]} ${i.formatMessage(d.aria_label_open_new_window)}` : _["aria-label"]), f) {
          const e = e => {
            e.preventDefault(), document?.querySelector(`[id='${s.replace("#","")}']`)?.scrollIntoView({
              behavior: "smooth",
              block: "center"
            }), o && o(e)
          };
          return (0, u.jsxs)("a", {
            title: r,
            href: s,
            onClick: e,
            ..._,
            "aria-label": k,
            children: [a, "_blank" === p && !k && (0, u.jsx)("span", {
              className: g,
              children: i.formatMessage(d.aria_label_open_new_window)
            })]
          })
        }
        if (n) return (0, u.jsxs)(m.NavLink, {
          title: r,
          to: s,
          onClick: e => o(e),
          ..._,
          "aria-label": k,
          children: [a, "_blank" === p && !k && (0, u.jsx)("span", {
            className: g,
            children: i.formatMessage(d.aria_label_open_new_window)
          })]
        });
        const h = Object.keys(_).filter((e => !["activeClassName", "key", "end"].includes(e))).reduce(((e, a) => ({
          ...e,
          [a]: c[a]
        })), {});
        return "function" == typeof h?.className && delete h.className, (0, u.jsxs)("a", {
          href: s,
          title: r,
          onClick: e => o(e),
          target: p,
          ...h,
          "aria-label": k,
          children: [a, "_blank" === p && !k && (0, u.jsx)("span", {
            className: g,
            children: i.formatMessage(d.aria_label_open_new_window)
          })]
        })
      };
      var p = s(65772),
        b = s.n(p),
        _ = s(33052),
        k = s(90048);
      const h = {
          player: "rockstargames-modules-gtao-career-progress-hubbb43df423657efcc0f1f38630a24e5e8",
          fixedToBottom: "rockstargames-modules-gtao-career-progress-hube1f497e3ec34c2fd721b124969e27dd5",
          tracksOpen: "rockstargames-modules-gtao-career-progress-hube8f2736f0ae21a56045104071a7a9fd7",
          tracks: "rockstargames-modules-gtao-career-progress-hubea84096a931648765b1db46f708f70aa",
          iconBurger: "rockstargames-modules-gtao-career-progress-hubb91aad66a2102668715c5ddaaecede2e",
          trackList: "rockstargames-modules-gtao-career-progress-hubc44536ca7b7fa7236e86c65ae309057e",
          trackActive: "rockstargames-modules-gtao-career-progress-hubac7826f934fc777f58017b1a5752419a",
          trackTitle: "rockstargames-modules-gtao-career-progress-hubaafc522e642572d5ff93c7408b941829",
          trackIndex: "rockstargames-modules-gtao-career-progress-hubb880baa4707c71eb543f905816d8e952",
          controls: "rockstargames-modules-gtao-career-progress-hubff92c8eddfc0a0fa7bc7f444973e4f28",
          controlsCurrentBg: "rockstargames-modules-gtao-career-progress-huba81d9465f14d65e8e20800d7b25f77d9",
          controlsCurrentBgVisible: "rockstargames-modules-gtao-career-progress-hubc87bd14d2bbc9248d9c197b77454f345",
          controlsTrack: "rockstargames-modules-gtao-career-progress-hubc23bf574089d1af93750f6af8ebb489f",
          controlsTrackTitle: "rockstargames-modules-gtao-career-progress-hube4b77d29e904f9928cca1de93f5c7745",
          controlsTrackAnimating: "rockstargames-modules-gtao-career-progress-hubba49949a9cd8c22385708f267c625029",
          scrollText: "rockstargames-modules-gtao-career-progress-hubfd9c80e5afaa1ed38ce85f2c3d70eae4",
          controlsTrackArtist: "rockstargames-modules-gtao-career-progress-hubc93c1e5399d9fd5e96ca246fdbfb307b",
          controlsTrackBurger: "rockstargames-modules-gtao-career-progress-hubb4e1a16e3460b40c1aacd92afe219856",
          controlsButtons: "rockstargames-modules-gtao-career-progress-hubd136125994c1d0db1449fce51af559ca",
          controlsScrub: "rockstargames-modules-gtao-career-progress-hubd3d935648408f71928bd49d2f7c5a9ff",
          controlsPlayPause: "rockstargames-modules-gtao-career-progress-hubf5de7526c8cee98bdd7363fd7f2cf8ae",
          controlsPlayPausePlaying: "rockstargames-modules-gtao-career-progress-hubefb6194f0df966e6c8c759937d2fb826",
          controlsNextTrack: "rockstargames-modules-gtao-career-progress-hubf286e0ce01c5401e56dd579b076f1aae",
          controlsPrevTrack: "rockstargames-modules-gtao-career-progress-huba56bb7cb4b0e2de481777d1f09c3f2f2",
          controlsScrubTrack: "rockstargames-modules-gtao-career-progress-hubb8f38f45353fa54fcb6f9e2a3d0d5a85"
        },
        v = e => {
          let {
            src: a
          } = e;
          return (0, u.jsx)("div", {
            className: h.cover,
            style: {
              background: `url(${a}) center/cover`
            }
          })
        },
        x = e => {
          let {
            timing: a = {
              current: 0,
              duration: 0
            },
            playing: s,
            audioRef: r,
            setPlaying: t,
            tracksOpen: o,
            setTracksOpen: c,
            trackData: i,
            setTrackId: l,
            trackBounds: d,
            setAutoNext: m
          } = e;
          const g = (0, n.useRef)(null),
            f = (0, n.useRef)(null),
            p = (0, n.useRef)(null),
            [_, k] = (0, n.useState)(null),
            [v, x] = (0, n.useState)(!1),
            y = e => {
              const a = new Date(1e3 * e),
                s = a.getUTCMinutes(),
                r = a.getSeconds();
              return `${s.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`
            };
          return (0, n.useEffect)((() => {
            if (!f.current || !p.current) return;
            const e = () => {
              p.current && f.current && k(p.current.clientWidth > f.current.clientWidth)
            };
            return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e)
          }), [p, f, a]), (0, n.useEffect)((() => {
            if (!g.current || !a?.duration) return;
            let e = null;
            const s = new(b())(g.current),
              t = e => {
                if (g.current) {
                  const s = g.current.clientWidth;
                  if (!g.current.contains(e.srcEvent.target)) return;
                  const t = Math.max(0, e.srcEvent.offsetX),
                    o = Number(t / s * a.duration);
                  r.currentTime = o
                }
              },
              o = () => {
                e ? r.pause() : r.play()
              },
              c = () => {
                e = r.paused, r.pause()
              };
            return s.on("panstart", c), s.on("panleft", t), s.on("panright", t), s.on("panend", o), s.on("tap", t), () => {
              s.off("panstart", c), s.off("panleft", t), s.off("panright", t), s.off("panend", o), s.off("tap", t)
            }
          }), [g.current, a.duration]), (0, n.useEffect)((() => {
            const e = Number(r?.currentTime);
            (s || !isNaN(e) && 0 !== e) && x(!0)
          }), [s, r?.currentTime]), (0, u.jsxs)("div", {
            className: h.controls,
            style: {
              "--track-color": i.color,
              "--track-mix-blend-mode": i.mix_blend_mode,
              "--current-pct": a.current / a.duration
            },
            children: [(0, u.jsx)("div", {
              className: [h.controlsCurrentBg, v ? h.controlsCurrentBgVisible : ""].join(" ")
            }), (0, u.jsx)("div", {
              className: h.controlsTrack,
              ref: f,
              children: (0, u.jsx)("span", {
                className: [h.controlsTrackTitle, _ ? h.controlsTrackAnimating : ""].join(" "),
                ref: p,
                children: i.title
              })
            }), (0, u.jsxs)("div", {
              className: h.controlsButtons,
              children: [(0, u.jsx)("div", {
                className: h.controlsPrevTrack,
                onClick: () => {
                  d && (l(d[0]), m(!0), t(!0))
                }
              }), (0, u.jsx)("div", {
                className: [h.controlsPlayPause, s ? h.controlsPlayPausePlaying : ""].join(" "),
                onClick: () => {
                  t(!s)
                }
              }), (0, u.jsx)("div", {
                className: h.controlsNextTrack,
                onClick: () => {
                  d && (l(d[1]), m(!0), t(!0))
                }
              })]
            }), (0, u.jsx)("div", {
              active: o ? "" : null,
              className: h.controlsTrackBurger,
              children: (0, u.jsx)("div", {
                className: h.iconBurger,
                onClick: () => {
                  c(!o)
                }
              })
            }), (0, u.jsxs)("div", {
              className: h.controlsScrub,
              children: [(0, u.jsx)("span", {
                children: y(a.current)
              }), (0, u.jsx)("div", {
                className: h.controlsScrubTrack,
                ref: g
              }), (0, u.jsx)("span", {
                children: y(a.duration)
              })]
            })]
          })
        },
        y = e => {
          let {
            tracks: a,
            trackId: s,
            setTrackId: r,
            tracksOpen: t,
            setTracksOpen: o,
            setPlaying: c,
            setAutoNext: i
          } = e;
          return (0, u.jsxs)("div", {
            className: h.tracks,
            children: [(0, u.jsx)("h4", {
              children: "Tracks"
            }), (0, u.jsx)("div", {
              className: h.trackBurger,
              onClick: () => {
                o(!t)
              }
            }), (0, u.jsx)("div", {
              className: h.trackList,
              children: a.map(((e, a) => (0, u.jsxs)("a", {
                style: {
                  "--highlight-color": e.color
                },
                className: s === e.id ? h.trackActive : "",
                onClick: () => {
                  r(e.id), c(!0), i(!0)
                },
                children: [(0, u.jsx)("span", {
                  className: h.trackIndex,
                  children: String(a + 1).padStart(2, "0")
                }), (0, u.jsx)("span", {
                  className: h.trackTitle,
                  children: e.title
                }), (0, u.jsx)("span", {
                  className: h.trackTime,
                  children: e.duration
                })]
              }, e.id)))
            })]
          })
        },
        N = e => {
          let {
            id: a,
            className: s = ""
          } = e;
          const {
            data: r
          } = (0, _.useQuery)(k.GetAudioAlbum, {
            variables: {
              id: a
            }
          }), [t, o] = (0, n.useState)(), [c, i] = (0, n.useState)(), [l, d] = (0, n.useState)(), [m, g] = (0, n.useState)(!1), [f, p] = (0, n.useState)(!1), [b, N] = (0, n.useState)(new HTMLAudioElement), [w, j] = (0, n.useState)({
            current: 0,
            duration: 0
          }), [S, C] = (0, n.useState)(!0);
          return (0, n.useEffect)((() => {
            const e = "audio",
              a = a => {
                a?.data?.rockstarAudioPlayerPlayTrackId && (i(a.data.rockstarAudioPlayerPlayTrackId), C(!1), p(!0)), f && a?.data?.attentionBlurredElsewhere && a?.data?.from !== e && p(!1)
              };
            return f && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: e
            }), window.addEventListener("message", a, !1), () => window.removeEventListener("message", a, !1)
          }), [f]), (0, n.useEffect)((() => {
            if (!b) return;
            const e = () => {
                isNaN(b.duration) || j({
                  duration: b?.duration ?? 0,
                  current: b?.currentTime ?? 0
                })
              },
              a = () => {
                S && t && i(t[1])
              };
            return b.addEventListener("loadedmetadata", e), b.addEventListener("timeupdate", e), b.addEventListener("ended", a), () => {
              b.removeEventListener("loadedmetadata", e), b.removeEventListener("timeupdate", e), b.removeEventListener("ended", a)
            }
          }), [b, t, S]), (0, n.useEffect)((() => {
            f && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: "audio"
            })
          }), [f]), (0, n.useEffect)((() => {
            b && (f ? b.play() : b.pause(), g(!1))
          }), [f, b, l?.id]), (0, n.useEffect)((() => {
            if (!c) return;
            const {
              tracks: e
            } = r.audioAlbum, a = r.audioAlbum.tracks.findIndex((e => e.id === c));
            o([e[a - 1]?.id ?? e[e.length - 1].id, e[a + 1]?.id ?? e[0].id]), d(e[a])
          }), [c]), (0, n.useEffect)((() => {
            r && i(r.audioAlbum.tracks[0].id)
          }), [r]), l ? (0, u.jsxs)("div", {
            className: [h.player, h[s], m ? h.tracksOpen : ""].join(" "),
            children: [(0, u.jsx)("audio", {
              ref: e => {
                N(e)
              },
              src: l.mp3_src
            }), (0, u.jsx)(y, {
              tracks: r.audioAlbum.tracks,
              setTrackId: i,
              trackId: c,
              tracksOpen: m,
              setTracksOpen: g,
              setPlaying: p,
              setAutoNext: C
            }), (0, u.jsx)(v, {
              src: l.cover_src
            }), (0, u.jsx)(x, {
              setTrackId: i,
              trackBounds: t,
              tracksOpen: m,
              setTracksOpen: g,
              playing: f,
              setPlaying: p,
              timing: w,
              trackData: l,
              audioRef: b,
              setAutoNext: C
            })]
          }) : null
        },
        w = e => {
          let {
            text: a,
            style: s
          } = e;
          return (0, u.jsx)("div", {
            className: "rockstargames-modules-gtao-career-progress-hubb61bd7f274fd6d93c4bf33a9284b6b67",
            style: s,
            children: a
          })
        },
        j = e => {
          let {
            brands: a = []
          } = e;
          return a.length ? (0, u.jsx)("div", {
            className: "rockstargames-modules-gtao-career-progress-hubcde08e212f23b312d5afca7f2ea1105c",
            children: a.map(((e, a) => {
              let {
                brand: s
              } = e;
              return (0, u.jsx)("div", {
                className: "rockstargames-modules-gtao-career-progress-hubc894fe869384587702b5370da072be86",
                "data-brand": s
              }, a)
            }))
          }) : null
        },
        S = {
          button: "rockstargames-modules-gtao-career-progress-hube056494c33cff1fe89431f279fdb6b9a",
          secondary: "rockstargames-modules-gtao-career-progress-hubd340cf27f380a4347994e59544432eb3"
        },
        C = e => {
          let {
            className: a = "",
            children: s,
            context: r = "",
            to: t,
            onClick: o,
            ...c
          } = e;
          const i = [S.button, S[r], a].join(" ");
          return t ? (0, u.jsx)(f, {
            ...c,
            to: t,
            className: i,
            onClick: o ? () => o() : () => {},
            children: s
          }) : (0, u.jsx)("button", {
            ...c,
            type: "button",
            className: i,
            onClick: o ? () => o() : () => {},
            children: s
          })
        };
      var I = s(1740);
      const T = {
          pillBtn: "rockstargames-modules-gtao-career-progress-hubb59962d0e68ccd73b5ee2e571528d469",
          selected: "rockstargames-modules-gtao-career-progress-hubf5c57dad202e0d6ff855d5a4aca2c804",
          plusButton: "rockstargames-modules-gtao-career-progress-hubcffaf489342637258d28f9b3b718836a",
          small: "rockstargames-modules-gtao-career-progress-hubb8abf927f0ba0af0d8ac0e9c77690d34",
          btnText: "rockstargames-modules-gtao-career-progress-hube6e56461bfc2e426c4abc5451cd17284",
          btnTexticon: "rockstargames-modules-gtao-career-progress-hubcef9f9ce913d167a1fe2e7118a407cdd",
          whiteBtn: "rockstargames-modules-gtao-career-progress-hubb257e0629b9f8e101791d7a948ed15be",
          blackBtn: "rockstargames-modules-gtao-career-progress-hubcb03bccaee79394858682d2ce4d08253",
          transparentBtn: "rockstargames-modules-gtao-career-progress-hubd0460159a17533d4d23686d7dca76794",
          iconBtn: "rockstargames-modules-gtao-career-progress-hubac61186c3c22346c9a4ee2cd2820d341",
          link: "rockstargames-modules-gtao-career-progress-hubc5920e56149b82f20f4db2ad9d397495",
          xboxone: "rockstargames-modules-gtao-career-progress-huba7057f2e6d398341f57bc462716d0508",
          xboxseriesxs: "rockstargames-modules-gtao-career-progress-huba693ab5879f34d7dea1737d3172ed4e4",
          ps4: "rockstargames-modules-gtao-career-progress-huba029ff88fc9aef470aaeef8053f90436",
          ps5: "rockstargames-modules-gtao-career-progress-hube25638751cf3e7267db23c6a401fcc36",
          pc: "rockstargames-modules-gtao-career-progress-hube03d92653f19a7ae3c4b3d5137bc9909"
        },
        M = e => {
          let {
            children: a,
            className: s,
            onClick: r,
            style: t
          } = e;
          return (0, u.jsx)("button", {
            className: s,
            onClick: r ? () => r() : () => {},
            style: t,
            type: "button",
            children: a
          })
        },
        L = e => {
          let {
            children: a,
            className: s,
            onClick: r,
            style: t,
            to: o
          } = e;
          return (0, u.jsx)(m.NavLink, {
            className: s,
            onClick: r ? () => r() : () => {},
            style: t,
            to: o,
            children: a
          })
        },
        E = e => {
          let {
            btnColor: a = "#fff",
            className: s = "",
            consoleBtn: r,
            icon: t = "",
            img: o,
            labelColor: c = "#000",
            onClick: i,
            secondText: n,
            size: l,
            text: d,
            to: m,
            type: g = ""
          } = e;
          const f = [T.plusButton, T[g] ?? "", T[l] ?? "", T[r] ?? "", s].join(" "),
            p = {
              "--hvr-color": a ?? c,
              "--hvr-bg-color": c ?? a,
              "--hvr-border-color": a ?? c
            },
            b = (0, u.jsxs)(u.Fragment, {
              children: [o ? (0, u.jsx)("img", {
                src: o,
                alt: ""
              }) : "", (0, u.jsxs)("div", {
                className: T.btnText,
                icon: t,
                children: [d, n ? (0, u.jsx)("span", {
                  children: n
                }) : ""]
              })]
            });
          if (m) {
            if (m.startsWith("http")) {
              const e = m.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, u.jsx)("span", {
                onClick: i ? () => i() : () => {},
                onKeyDown: i,
                className: f,
                role: "button",
                tabIndex: 0,
                children: (0, u.jsx)("a", {
                  href: m,
                  target: e,
                  children: b
                })
              })
            }
            return (0, u.jsx)(L, {
              className: f,
              onClick: i ? () => i() : () => {},
              style: p,
              to: m,
              children: b
            })
          }
          return (0, u.jsx)(M, {
            className: f,
            onClick: i ? () => i() : () => {},
            style: p,
            children: b
          })
        },
        B = e => {
          let {
            buttons: a = [],
            className: s
          } = e;
          return a.length ? (0, u.jsx)("div", {
            className: (0, I.classList)("rockstargames-modules-gtao-career-progress-hubb411a36e7fd12ab75861fe560b31b206", s),
            children: a.map(((e, a) => {
              let {
                icon: s,
                title: r,
                to: t
              } = e;
              return r ? (0, u.jsx)(E, {
                icon: s,
                text: r,
                to: t
              }, a) : ""
            }))
          }) : null
        };
      var P = s(48111),
        z = s(12231);
      const V = {
          deprecatedCarousel: "rockstargames-modules-gtao-career-progress-hubeb5df7b3d51dffc4d993ca7abce4e944",
          "swiper-scrollbar-disabled": "rockstargames-modules-gtao-career-progress-hubeb2dda6769a7c20a31e7996ff62e41f8",
          "swiper-horizontal": "rockstargames-modules-gtao-career-progress-hubb11093de3cb4f18ea2d59b8d4d1db44c",
          "swiper-vertical": "rockstargames-modules-gtao-career-progress-hubfa3209fdf995734a1aeeac2cc72cc1ea",
          renderedWithChildren: "rockstargames-modules-gtao-career-progress-hubc9f15e74b3166cd0db40501fcc70e868",
          panorama: "rockstargames-modules-gtao-career-progress-hubf2a7e77af5dff445e978fd575a567508",
          img: "rockstargames-modules-gtao-career-progress-hubf1d3d54c266a20fa0cbe9c342b0d98da",
          hideMobile: "rockstargames-modules-gtao-career-progress-hube70d5eaa273e4a0a40ee62a308491810",
          hideLarge: "rockstargames-modules-gtao-career-progress-hubbace2af6c822ba7b36b53923629cba0f",
          imageAreaBg: "rockstargames-modules-gtao-career-progress-hubf4bb071e6dad07c75b78ea21269ca662",
          infinite_false: "rockstargames-modules-gtao-career-progress-hubd6c3d175b843462bf23a1a1f3af6b095",
          track: "rockstargames-modules-gtao-career-progress-hubb5ff781c4a96bf031e8e7f5e0c9af395",
          perico: "rockstargames-modules-gtao-career-progress-hubbb97d296d17b7e801c6c0719a79463dd",
          dotsSlide: "rockstargames-modules-gtao-career-progress-hubdd55a6f93254ed13542089c6f36e0048",
          siblings: "rockstargames-modules-gtao-career-progress-huba59cf4385528c371a13be9962b67131b",
          active: "rockstargames-modules-gtao-career-progress-hubaa5e195e0c7c6336929553314d52a896",
          "swiper-preloader-spin": "rockstargames-modules-gtao-career-progress-hubc05cc0faa8239c85cdc7d53c7e120e8e"
        },
        $ = e => {
          let {
            item: a
          } = e;
          return (0, u.jsxs)("div", {
            children: [(0, u.jsx)(Ia, {
              image: a?.image,
              badge: a?.badge ?? a?.image?.badge,
              badgeType: "badge3",
              role: a?.role ?? a?.image?.role,
              splitter: a?.splitter ?? a?.image?.splitter,
              type: a?.type,
              ariaLabel: a?.image?.ariaLabel ?? a.description,
              style: a?.style,
              className: (0, I.classList)(V.img, a?.className)
            }), (a?.title || a?.description) && (0, u.jsx)(je, {
              item: a
            })]
          })
        },
        D = e => {
          let {
            current: a,
            total: s
          } = e;
          return (0, u.jsx)("div", {
            className: "swiper-scrollbar",
            style: {
              "--current-slide": a,
              "--total-slides": s
            },
            children: (0, u.jsx)("div", {
              className: "swiper-scrollbar-drag"
            })
          })
        },
        A = e => {
          let {
            children: a,
            items: s = [],
            style: r = {},
            noInfiniteScroll: t = !1,
            className: o = "",
            renderTemplate: c = "standard",
            text: i,
            customSpaceBetween: l = null,
            centerSlides: d = !0,
            centeredSlidesBounds: m = !1
          } = e;
          const [g, f] = (0, n.useState)(0), p = (0, n.useMemo)((() => a && Array.isArray(a) ? a.map((() => (0, z.c)())) : null), [a]);
          if (!(s && 0 !== s?.length || a)) return null;
          const b = {
            0: {
              spaceBetween: l ?? 16
            },
            1024: {
              spaceBetween: l ?? 18
            },
            1920: {
              spaceBetween: l ?? 20
            },
            2560: {
              spaceBetween: l ?? 22
            }
          };
          return (0, u.jsxs)("div", {
            className: (0, I.classList)(V.deprecatedCarousel, V[c], V[`infinite_${!t}`], a ? V.renderedWithChildren : "", o),
            style: r,
            children: [(0, u.jsxs)(P.wx, {
              loop: !t,
              grabCursor: !0,
              centeredSlides: d,
              centerInsufficientSlides: d,
              slidesPerView: "auto",
              speed: 700,
              breakpoints: b,
              onUpdate: () => f(0),
              onActiveIndexChange: e => f(e?.realIndex ?? 0),
              centeredSlidesBounds: m,
              children: [(0, u.jsx)("div", {
                className: V.trackWrapper,
                children: (0, u.jsxs)("div", {
                  className: V.track,
                  children: [s?.map((e => (0, u.jsx)(P.Ky, {
                    children: (0, u.jsx)($, {
                      item: e
                    })
                  }, e.key))), a && a?.map(((e, a) => e && (0, u.jsx)(P.Ky, {
                    children: e
                  }, p && p[a])))]
                })
              }), (0, u.jsx)(D, {
                current: g,
                total: a ? a.length : s.length
              })]
            }), (i?.title || i?.description) && (0, u.jsx)(je, {
              item: i
            })]
          })
        };
      var F = s(45792),
        O = s(42836);
      const R = (0, s(62748).U1)(),
        U = e => e.some((e => !e)),
        G = e => {
          let {
            condition: a = null,
            children: s
          } = e;
          const [r, t] = (0, n.useState)(!1), o = (e => {
            const [a] = (0, m.useSearchParams)(), [s, r] = (0, n.useState)(null), t = (0, O.useRockstarUser)(), {
              loggedIn: o
            } = t, {
              currentCharId: c
            } = (0, O.useRockstarUserState)(), i = function(e) {
              let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "gtao";
              return (0, n.useMemo)((() => {
                const r = e?.data?.characters?.[s];
                return "1" === (r?.[a]?.stats?.overview?.hasGtaPlus?.value ?? "0")
              }), [e, s, a])
            }(t, c);
            return (0, n.useEffect)((() => {
              const s = "true" === a.get("conditionPreview");
              if (!e?.length > 0) return;
              R.applyFilters("preview_conditions", e);
              const t = [];
              return e.forEach((e => {
                const {
                  value: r
                } = e;
                if (s) return "true" === a.get(r) ? (t.push(!0), !0) : (t.push(!1), !1);
                if (U(t)) return !1;
                switch (r) {
                  case "user:is:loggedIn":
                    t.push(!0 === o);
                    break;
                  case "user:not:loggedIn":
                    t.push(!1 === o);
                    break;
                  case "user:is:gtaPlus":
                    t.push(!0 === i);
                    break;
                  case "user:not:gtaPlus":
                    t.push(!1 === i);
                    break;
                  default:
                    t.push(!1)
                }
                return null
              })), r(!U(t)), () => {}
            }), [a, e, i, t, o]), s
          })(a);
          return (0, n.useEffect)((() => {
            t(o)
          }), [o]), (0, n.useMemo)((() => r ? s : null), [r])
        },
        H = (0, F.withTranslations)((e => {
          let {
            children: a
          } = e;
          return n.Children.map(n.Children.toArray(a), (e => (0, u.jsx)(G, {
            ...e?.props
          })))
        }));
      var W = s(56572),
        q = s(58652);
      const X = e => {
          let {
            className: a
          } = e;
          return (0, u.jsxs)("svg", {
            className: a,
            width: "16",
            height: "17",
            viewBox: "0 0 16 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, u.jsx)("path", {
              d: "M3.33203 8.5H12.6654",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, u.jsx)("path", {
              d: "M8 3.83331L12.6667 8.49998L8 13.1666",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })]
          })
        },
        K = {
          pillBtn: "rockstargames-modules-gtao-career-progress-hube3158363419b66e5afa2264e4928890c",
          selected: "rockstargames-modules-gtao-career-progress-huba9649249223f164eff11174ffc72616b",
          calloutContainer: "rockstargames-modules-gtao-career-progress-hube6bd244761fdf3ebe3888539d9942921",
          calloutSection: "rockstargames-modules-gtao-career-progress-hubb1b8c93299158ef7d0f9eb04e14a7a64",
          calloutHeaders: "rockstargames-modules-gtao-career-progress-hubc81810436a5b57307c41f4d7a704b2f7",
          calloutHeaderMargins: "rockstargames-modules-gtao-career-progress-hubb4e1f72dfa9b38f23017e5f8ef48b9cb",
          calloutHeader: "rockstargames-modules-gtao-career-progress-hubb7964754215256201dd703aedca18b6f",
          calloutSubheader: "rockstargames-modules-gtao-career-progress-hubac660fa7995007ed875e03a257e447d7",
          calloutVoteForm: "rockstargames-modules-gtao-career-progress-hubbee0795a36dd5adf822e1e50a7260f3d",
          voteButton: "rockstargames-modules-gtao-career-progress-hubb1baa545566a61b791b696c9ebf560ad",
          upvote: "rockstargames-modules-gtao-career-progress-hubb9c17ddd3e1052acb5097909ae2b07a1",
          downvote: "rockstargames-modules-gtao-career-progress-hubf26b53e66e552183743465cce6a8d3a8",
          active: "rockstargames-modules-gtao-career-progress-hubd38a1764483a36e8a1509aee5b88ec31",
          calloutButton: "rockstargames-modules-gtao-career-progress-hubb7eb76afce3c6e686be44c356837b627",
          calloutLink: "rockstargames-modules-gtao-career-progress-hubaefe6c5a233047c943a864cd56a7de2d",
          calloutLinkIcon: "rockstargames-modules-gtao-career-progress-huba74bf6baa632ad9b5f87efd2043cfed5",
          actionBlock: "rockstargames-modules-gtao-career-progress-hubcc491ddd715196ecd6ef54017ff05ec0",
          actionFooter: "rockstargames-modules-gtao-career-progress-hubdb26fed58ce50f4affc114670885721a"
        },
        Y = e => {
          let {
            foreign_id: a,
            foreign_type: s
          } = e;
          const {
            track: r
          } = (0, O.useGtmTrack)(), {
            refetch: t
          } = (0, _.useQuery)(q.UserGetVote, {
            skip: !0
          }), [o] = (0, _.useMutation)(q.UserCastVote), [c, i] = (0, n.useState)(null), l = (0, n.useCallback)((e => {
            (async () => {
              if (e === c && null !== c) i(null);
              else {
                i(e), r({
                  event_action: e ? "like" : "dislike",
                  event_category: "cta",
                  event: "cta_" + (e ? "like" : "dislike"),
                  event_label: a
                });
                const t = {
                  foreignId: a,
                  foreignType: s,
                  vote: e
                };
                await o({
                  variables: t
                })
              }
            })()
          }), [a, s, c]);
          return (0, n.useEffect)((() => {
            a && s && (async () => {
              const e = await t({
                foreignId: a,
                foreignType: s
              });
              i(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [a, s]), (0, u.jsxs)("div", {
            className: K.calloutVoteForm,
            children: [(0, u.jsx)("button", {
              "aria-label": "upvote",
              className: [K.upvote, K.voteButton, c ? K.active : ""].join(" "),
              name: "upvote",
              onClick: () => l(!0),
              type: "button"
            }), (0, u.jsx)("button", {
              "aria-label": "downvote",
              className: [K.downvote, K.voteButton, !1 === c ? K.active : ""].join(" "),
              name: "downvote",
              onClick: () => l(!1),
              type: "button"
            })]
          })
        },
        Q = e => {
          let {
            action_text: a,
            link: s,
            trackingData: r
          } = e;
          const {
            track: t
          } = (0, O.useGtmTrack)();
          return (0, u.jsx)("a", {
            href: s,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, u.jsxs)("button", {
              className: K.calloutLink,
              type: "button",
              onClick: r ? () => t({
                ...r
              }) : () => {},
              children: [a, (0, u.jsx)(X, {
                className: K.calloutLinkIcon
              })]
            })
          })
        },
        Z = e => {
          let {
            helperText: a,
            linkText: s,
            link: r,
            trackingData: t
          } = e;
          const {
            track: o
          } = (0, O.useGtmTrack)();
          return (0, u.jsxs)("div", {
            className: K.actionFooter,
            children: [a, s && " ", s && (0, u.jsx)("a", {
              href: r ?? "",
              onClick: () => o({
                ...t
              }),
              children: s
            })]
          })
        },
        J = (0, F.withTranslations)((e => {
          let {
            header: a,
            subheader: s,
            type: r,
            action_text: t,
            link: o,
            foreign_id: c = document.location.pathname,
            foreign_type: i = "url",
            className: l = "",
            actionFooterHelperText: d,
            actionFooterLinkText: m,
            actionFooterLink: g,
            trackingData: f = {},
            actionFooterLinkTrackingData: p = {},
            t: b,
            ..._
          } = e;
          const {
            loggedIn: k
          } = (0, O.useRockstarUser)(), {
            track: h
          } = (0, O.useGtmTrack)(), v = `${document.location.origin}/auth/sc-auth-login?returnUrl=${window.location.pathname}`, {
            ref: x,
            inView: y
          } = (0, W.useInView)({
            threshold: .6
          }), [N, w] = (0, n.useState)(!1);
          let j;
          if ((0, n.useEffect)((() => {
              y && !N && (h({
                event: "page_section_impression",
                event_action: "impression",
                event_category: "page_section",
                event_label: "callout section",
                element_placement: `callout section - ${_?.sectionName??_?._memoq?.header}`
              }), w(!0))
            }), [y]), !a && !s) return null;
          switch (r) {
            case "vote":
              if (!k) {
                j = (0, u.jsx)(C, {
                  to: v,
                  className: K.calloutButton,
                  onClick: f ? () => h({
                    ...f
                  }) : () => {},
                  children: "Log In"
                });
                break
              }
              j = (0, u.jsx)(Y, {
                foreign_id: c,
                foreign_type: i
              });
              break;
            case "button":
              t && o && (j = (0, u.jsx)(C, {
                to: o,
                className: K.calloutButton,
                onClick: f ? () => h({
                  ...f
                }) : () => {},
                children: t
              }));
              break;
            case "link":
              t && o && (j = (0, u.jsx)(Q, {
                action_text: t,
                link: o,
                trackingData: f
              }));
              break;
            default:
              j = null
          }
          return (0, u.jsx)("div", {
            className: `${K.calloutContainer} ${l||""}`,
            ref: x,
            children: (0, u.jsxs)("div", {
              className: K.calloutSection,
              children: [(0, u.jsxs)("div", {
                className: [K.calloutHeaders, j ? K.calloutHeaderMargins : ""].join(" "),
                children: [a && (0, u.jsx)("h2", {
                  className: K.calloutHeader,
                  children: b(a)
                }), s && (0, u.jsx)("h3", {
                  className: K.calloutSubheader,
                  children: b(s)
                })]
              }), (0, u.jsxs)("div", {
                className: K.actionBlock,
                children: [j, d && (0, u.jsx)(Z, {
                  helperText: d,
                  linkText: m,
                  link: g,
                  trackingData: p
                })]
              })]
            })
          })
        }));
      var ee = s(69736),
        ae = s(44236),
        se = s.n(ae);
      const re = e => {
          let {
            isMulti: a,
            allowSelectAll: s,
            label: r,
            miscProps: t
          } = e;
          const [o, c] = (0, n.useState)(""), i = (0, n.useMemo)((() => se()().getData()), []);
          return (0, u.jsx)(ee.cp, {
            unstyled: !0,
            value: o,
            isMulti: a,
            allowSelectAll: s,
            options: i,
            placeholder: r,
            onChange: e => {
              return a = e?.target?.value, void c(a);
              var a
            },
            classNamePrefix: "country-select",
            ...t
          })
        },
        te = e => {
          let {
            cookieName: a,
            cookieValue: s,
            trueComponent: r,
            falseComponent: t
          } = e;
          const o = (e => {
              const a = document.cookie.split("; "),
                s = `${e}=`,
                r = a.find((e => e.startsWith(s)));
              return r?.substring(s.length, r.length)
            })(a),
            c = new URLSearchParams(window.location.search).get(a);
          return c && ((e, a) => {
            e && a && (document.cookie = `${e}=${a}; domain=${(()=>{const e=window.location.hostname.split(".");return e.slice(e.length-2).join(".")})()}; path=/;`)
          })(a, c), o === s || c === s ? r : t
        },
        oe = {
          ps: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1506c5bba61fa270f73c874e3d60a94f.svg",
          ps3: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg",
          ps4: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg",
          ps5: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e8f340ded0fd6b0b0d434e8c6c8b75e.svg",
          switch: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg",
          xbox: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d6d2cb861c79506282c6d6cbf1170f81.svg",
          xboxone: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg",
          xboxseriesxs: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/205366df6706c3b367fb5ff4f26ab7f3.svg",
          xbox360: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c5cee7464423693de19149a4554b3c2.svg",
          pc: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg",
          play: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/59c4aadbdbfcdb8d06d7caa54bdc9f60.svg",
          applestore: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38a6e85fa4a378c5620efa9fde8ff223.svg",
          googleplay: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ca4e52b102306a186549cfd712b1c8f8.svg",
          questionMark: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e6833fa9baf4a5382bdd84b0b7d2c03f.svg",
          default: ""
        },
        ce = e => oe[e] || null,
        ie = {
          cta: "rockstargames-modules-gtao-career-progress-hubbc76de01fdd1260e254c482984d2a924",
          xbox: "rockstargames-modules-gtao-career-progress-hubf591c5444c08121b0514f0c675da1479",
          xboxone: "rockstargames-modules-gtao-career-progress-hube5124beff89c5b4093a4029a9fee3367",
          xboxseriesxs: "rockstargames-modules-gtao-career-progress-hube52c94654eb462a8e65aa7607f5e21b5",
          ps: "rockstargames-modules-gtao-career-progress-hubc53b78d3d062ee8d58f63a0acb1df137",
          ps4: "rockstargames-modules-gtao-career-progress-hubf4a27aba1505f555d7cd8c920645245a",
          ps5: "rockstargames-modules-gtao-career-progress-hubb5826d3700572b9bf36874e34d5c2a22",
          pc: "rockstargames-modules-gtao-career-progress-hubc7ee0cfc54be00a8b152c47997ce76ac",
          switch: "rockstargames-modules-gtao-career-progress-huba9b276d1c119e9cd14df54c4459197b0",
          googleplay: "rockstargames-modules-gtao-career-progress-huba4ccd0de63b104d4aa48c8c3176618f3",
          platformIcon: "rockstargames-modules-gtao-career-progress-hubc4ab0a89b65025cfe63b851116fb3a32",
          applestore: "rockstargames-modules-gtao-career-progress-huba13111cbe8acbd75f62da1c53de2c3df",
          btnIcon: "rockstargames-modules-gtao-career-progress-hubcb0ad8d8dd93218dc12091b883767967",
          label: "rockstargames-modules-gtao-career-progress-hubb81011c72b601075ebe54d7ceaa7d2d8",
          primary: "rockstargames-modules-gtao-career-progress-hubdbcf41d5c23e0eaf5089021f4d41c121",
          btnContent: "rockstargames-modules-gtao-career-progress-hubf5e832587747dc414e10ab8e0bd843a9",
          icon: "rockstargames-modules-gtao-career-progress-hubc7a3f1a29594b307606d15e6827f63f9",
          "icon-left": "rockstargames-modules-gtao-career-progress-hubbd623c6039c3f4122936775ed4214bd4",
          "icon-right": "rockstargames-modules-gtao-career-progress-hubc79040e66c1f48e302291d8cf1335742",
          disabled: "rockstargames-modules-gtao-career-progress-hubd87326174de12b895401f738a23b177a",
          pillBtn: "rockstargames-modules-gtao-career-progress-hubbf9c11ff862c409ecb412254932a66d0",
          selected: "rockstargames-modules-gtao-career-progress-hube07887131c72b6346c408895888f4fa7"
        },
        ne = e => {
          let {
            platform: a = ""
          } = e;
          const s = a ? ce(a) : null,
            r = s ? (0, u.jsx)("img", {
              className: ie.platformIcon,
              src: s,
              alt: "Platform Icon"
            }) : null;
          return (0, u.jsx)("span", {
            className: [ie.btnContent, ie.platformButton].join(" "),
            children: r
          })
        },
        le = e => {
          let {
            children: a,
            href: s,
            style: r,
            content: t,
            variant: o = null,
            icon: c,
            iconPosition: i = "none",
            iconStyle: l,
            badge: d,
            badgeStyle: g,
            platformItem: f,
            gtm: p = {},
            disabled: b,
            className: _
          } = e;
          const {
            track: k
          } = (0, O.useGtmTrack)(), h = (0, F.useDataLayer)(), v = t ?? a, x = `Redirect to ${s}`, y = (0, n.useMemo)((() => {
            const e = window.location.hostname;
            let a;
            try {
              a = new URL(s)?.hostname
            } catch (s) {
              a = e
            }
            return e === a
          }), [s]), N = (0, n.useCallback)((() => {
            b || k({
              event: "cta_other",
              ...h,
              ...p,
              link_url: s ?? void 0,
              text: v ?? void 0
            })
          }), [p, s, h]), w = () => c ? (0, u.jsx)("span", {
            className: [ie.icon, `icon-${i}`].join(" "),
            style: l,
            children: (0, u.jsx)("img", {
              className: ie.btnIcon,
              src: ce(c),
              alt: `${c} icon`
            })
          }) : null;
          return (0, u.jsx)(m.NavLink, {
            to: s,
            target: y ? "_self" : "_blank",
            className: [ie.cta, "platform" === o && f ? ie[f] : "", b ? ie.disabled : "", _].join(" "),
            style: r,
            "data-variant": o,
            onClick: N,
            disabled: b,
            "aria-label": x,
            children: "platform" === o && f ? (0, u.jsx)(ne, {
              platform: f
            }) : (0, u.jsxs)("div", {
              className: ie.btnContent,
              children: ["left" === i && w(), (0, u.jsx)("span", {
                children: v
              }), "right" === i && w(), d ? (0, u.jsx)("span", {
                className: ie.badge,
                style: g,
                children: d
              }) : null]
            })
          })
        };
      var de = s(45652);
      const me = "rockstargames-modules-gtao-career-progress-hubeb64520e04e486931cd65dc5b3fa61e8",
        ge = "rockstargames-modules-gtao-career-progress-hubcc9a6fdcc84b758d60987ea9a5ddfd81",
        ue = "rockstargames-modules-gtao-career-progress-hubee609f31f3685766122c2c6fc0ef0710",
        fe = e => {
          let {
            alt: a,
            className: r,
            src: t,
            style: o
          } = e;
          const [c, i] = (0, F.usePreloadImg)(t);
          let n = t;
          !1 === c && (r === ue && (n = s(61820)), n = s(43976));
          const {
            width: l,
            height: d
          } = i, m = {
            "--aspect-ratio": Number.isNaN(l / d) ? "" : l / d,
            ...o
          };
          return (0, u.jsx)("img", {
            src: n,
            className: r ?? "",
            alt: a,
            style: m
          })
        },
        pe = e => {
          let {
            className: a,
            style: r = {},
            image: t = {},
            imageStyle: o = {}
          } = e, {
            alt: c,
            src: i
          } = (0, de.useImageParser)(t);
          return i.desktop || i.mobile || (c = "placeholder", i = {
            mobile: s(61820),
            desktop: s(43976)
          }), (0, u.jsx)("div", {
            className: t.frame ? `${t.frame} ${me}` : me,
            style: r,
            children: i?.desktop && i?.mobile ? (0, u.jsxs)(u.Fragment, {
              children: [(0, u.jsx)(fe, {
                style: {
                  ...o,
                  ...t?.style
                },
                src: i.desktop,
                alt: c,
                className: a ? `${a} ${ge}` : ge
              }), (0, u.jsx)(fe, {
                style: {
                  ...o,
                  ...t?.style
                },
                src: i.mobile,
                alt: c,
                className: a ? `${a} ${ue}` : ue
              })]
            }) : (0, u.jsx)(fe, {
              style: {
                ...o,
                ...t?.style
              },
              src: i?.desktop ?? i?.mobile,
              alt: c,
              className: a
            })
          })
        };
      var be = s(8560),
        _e = s.n(be);
      const ke = {
          grid: "rockstargames-modules-gtao-career-progress-hubac295ed5b9cb441ed17843b34e83ea17",
          itemList: "rockstargames-modules-gtao-career-progress-hubcaf5589ddeca00ed09213e547674b1f3",
          gtaplus: "rockstargames-modules-gtao-career-progress-hubb291112adcf994a0f6acadd86f73b78a",
          rdo: "rockstargames-modules-gtao-career-progress-hubd146e8f862baefb60e91be5aa3c17b6e",
          noImg: "rockstargames-modules-gtao-career-progress-hubba9b5ae08642b0213a3f04b3db9a9dac",
          gtao: "rockstargames-modules-gtao-career-progress-hubb6f2bdfd6a1d57b7ce840f7a56cc510b",
          custom: "rockstargames-modules-gtao-career-progress-hubaf89164a043648d1464686ff13363ee4",
          yellow: "rockstargames-modules-gtao-career-progress-hubd244b17b74fc46269e8a106a99ab0f87",
          hotPink: "rockstargames-modules-gtao-career-progress-hubd90b28503318563cfd6059146d1fb6b6",
          red: "rockstargames-modules-gtao-career-progress-hubc3f8a8706901874d906f94c626be3c1e",
          turquoise: "rockstargames-modules-gtao-career-progress-hubfe2ec36e92e2bb4d453fdc4b05966418",
          purple: "rockstargames-modules-gtao-career-progress-hubf5f7baf5b56f5b2ada053a93392bbf7a",
          teal: "rockstargames-modules-gtao-career-progress-hubf4a229f41cd20f181d810c311416e3f2",
          blue: "rockstargames-modules-gtao-career-progress-hubf6f689d687bcd482ea2cd2990fd66878",
          green: "rockstargames-modules-gtao-career-progress-hubab270f1b4d3ad43e7bc51393b7c5c089",
          darkRed: "rockstargames-modules-gtao-career-progress-hubdc24ce78d962f3472b06955bf8855103",
          darkBlue: "rockstargames-modules-gtao-career-progress-hubb354493baac7389b21b511009f287428",
          goldenrod: "rockstargames-modules-gtao-career-progress-hube4a078efee11d24c64e93ccf0744a33f",
          skull: "rockstargames-modules-gtao-career-progress-hubd4581a495de14e6762bb15debe5bb810"
        },
        {
          sanitize: he
        } = _e(),
        ve = e => {
          let {
            list: a,
            string: s,
            starColor: r,
            style: t,
            className: o,
            game: c,
            noImg: i,
            columns: l,
            mobileColumns: d
          } = e;
          const [m, g] = (0, n.useState)(null), f = s ? s.split("_#_") : a;
          return (0, n.useEffect)((() => {
            g(a)
          }), [a]), s || a ? l && m ? (0, u.jsx)("div", {
            className: ke.grid,
            style: {
              "--unordered-list-grid-column": l,
              "--unordered-list-grid-column-mobile": d ?? l
            },
            children: (0, u.jsx)("ul", {
              style: (0, F.safeStyles)(t),
              className: (0, I.classList)(ke.itemList, ke.noImg, ke[r], ke[c]),
              children: m.map((e => (0, u.jsx)("li", {
                dangerouslySetInnerHTML: {
                  __html: he(e.content)
                }
              }, e.content)))
            })
          }) : (0, u.jsx)("ul", {
            style: (0, F.safeStyles)(t),
            className: (0, I.classList)(ke.itemList, ke.custom, i ? ke.noImg : "", r ? ke[r] : "", c ? ke[c] : "", o ?? ""),
            children: f.map((e => (0, u.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: he(e?.content ?? e)
              }
            }, e?.content)))
          }) : null
        },
        xe = {
          hr: "rockstargames-modules-gtao-career-progress-hubf5cd418ab2ef6a89df6c95d2caa06ba8",
          redLine: "rockstargames-modules-gtao-career-progress-hubf8b44ef9bbd3e7feb22bf79cc009b16e",
          gtao: "rockstargames-modules-gtao-career-progress-hubc442f7264db862a7cca6d9a56dacc205"
        },
        ye = e => {
          let {
            style: a,
            className: s = "",
            type: r
          } = e;
          return (0, u.jsx)("div", {
            style: a,
            className: [xe.hr, xe[r], s].join(" ")
          })
        },
        Ne = "rockstargames-modules-gtao-career-progress-hubfa6885b15a718acb24f48949c52e31f1",
        we = e => {
          let {
            to: a,
            children: s
          } = e;
          return a ? (0, u.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noreferrer",
            children: s
          }) : s
        },
        je = e => {
          let {
            item: a,
            className: s = ""
          } = e;
          return (0, u.jsxs)("div", {
            className: (0, I.classList)("rockstargames-modules-gtao-career-progress-hubef9e6981551ac5ce250ebff8b18d7a29", s),
            children: [a.title && (0, u.jsx)(we, {
              to: a?.href ?? a?.to,
              children: (0, u.jsx)("h3", {
                children: a.title
              })
            }), Array.isArray(a?.description?.content) ? a.description.content?.map(((e, a) => e?.unorderedList ? (0, u.jsx)(ve, {
              columns: e.unorderedList.columns ?? null,
              style: {
                "--unordered-list-padding": "var(--grid-gap-static-sm)",
                "--unordered-list-margin-bottom": ".5rem"
              },
              noImg: !0,
              list: e.unorderedList.list
            }, a) : e?.image ? (0, u.jsx)(pe, {
              image: e.image,
              className: e?.className,
              ariaLabel: e.image?.ariaLabel
            }, a) : e?.separator ? (0, u.jsx)("div", {
              style: {
                margin: `${e.separator.spacing} 0`
              },
              children: (0, u.jsx)(ye, {})
            }, a) : (0, u.jsx)("p", {
              children: (0, u.jsx)("span", {
                className: Ne,
                dangerouslySetInnerHTML: {
                  __html: e
                }
              })
            }, a))) : (0, u.jsx)("span", {
              className: Ne,
              dangerouslySetInnerHTML: {
                __html: a.description
              }
            })]
          })
        };
      var Se = s(58936);
      const Ce = e => {
          let {
            children: a,
            ...s
          } = e;
          const [r, t] = (0, n.useState)(!1);
          return (0, u.jsx)(Se.cR, {
            ...s,
            onReady: () => {
              document.fonts.ready.then((() => {
                t(!0)
              }))
            },
            children: a
          })
        },
        Ie = {
          badge: "rockstargames-modules-gtao-career-progress-hube279e2cebfa338f34b03fd732416e836",
          badgeSizeUpdate: "rockstargames-modules-gtao-career-progress-hubd7362a3e27ccaad9d2aadd2f31691340",
          badge2: "rockstargames-modules-gtao-career-progress-hubd697f4a5f7c876d5e540a96da1e0ca3a",
          badge3: "rockstargames-modules-gtao-career-progress-hube1bba3cd4554abbb48a030af24bbada5"
        },
        Te = e => {
          let {
            wrapper: a,
            children: s,
            role: r,
            splitter: t
          } = e;
          return t || r ? a(s) : s
        },
        Me = e => {
          let {
            badge: a,
            badgeType: r,
            role: t,
            splitter: o
          } = e;
          const c = [];
          o ? a.split(o).map(((e, a) => c.push(e))) : c.push(a);
          let i = 100;
          return 2 == c.length && c[1].length < 4 && "off" !== c[1].toLowerCase() && 45, (0, u.jsxs)(Te, {
            splitter: o,
            role: t,
            wrapper: e => (0, u.jsx)("div", {
              className: `${Ie.badge} ${r?Ie[r]:""} `,
              children: e
            }),
            children: [(0, u.jsx)(u.Fragment, {
              children: t && (0, u.jsx)(pe, {
                image: {
                  alt: t,
                  desktop: s(6572)(`./${t}.png`)
                }
              })
            }), (0, u.jsx)(Ce, {
              className: `${o||t?"":Ie.badge} ${r?Ie[r]:""}`,
              min: 8,
              max: 1e3,
              mode: o || t ? "single" : "multi",
              children: c[0]
            }), (0, u.jsx)(u.Fragment, {
              children: c.shift() && o && c.length >= 1 && (0, u.jsx)(Ce, {
                min: 8,
                max: 1e3,
                mode: "single",
                forceSingleModeWidth: !0,
                children: c.join(" ")
              })
            })]
          }, "badge-wrapper")
        },
        Le = "rockstargames-modules-gtao-career-progress-hubc63cfb461217f059c8c25eec09602b30",
        Ee = e => {
          let {
            color: a
          } = e;
          return (0, u.jsxs)("div", {
            className: "rockstargames-modules-gtao-career-progress-huba481f47ab7e8af4042a665fab5aea27c",
            style: {
              "--loader-color": a
            },
            children: [(0, u.jsx)("div", {
              className: Le
            }), (0, u.jsx)("div", {
              className: Le
            }), (0, u.jsx)("div", {
              className: Le
            })]
          })
        };
      var Be = s(36960),
        Pe = s.n(Be);
      const ze = {
          dropdownWrapper: "rockstargames-modules-gtao-career-progress-hubb951912c02de0e5e881fedd391d04810",
          items: "rockstargames-modules-gtao-career-progress-hubb0a8f220641417f889d4fd6039fe6bac",
          open: "rockstargames-modules-gtao-career-progress-hubf5eb88111734e6e70d34ef2b095c44f6",
          opener: "rockstargames-modules-gtao-career-progress-hubecb577af64f747d0d39cf03939ee3c73",
          secondary: "rockstargames-modules-gtao-career-progress-hubb64c3515fcd91f6b84410bd14640da81"
        },
        Ve = e => {
          let {
            children: a,
            className: s,
            title: r
          } = e;
          const [t, o] = (0, n.useState)(!1);
          return (0, u.jsx)(Pe(), {
            disabled: !t,
            children: (0, u.jsxs)("div", {
              className: [ze.dropdownWrapper, t ? ze.open : "", void 0 !== s ? s : ""].join(" "),
              children: [(0, u.jsx)("button", {
                className: ze.opener,
                onClick: () => o(!t),
                children: r
              }), t && (0, u.jsx)("div", {
                className: ze.items,
                onClick: () => o(!1),
                children: a
              })]
            })
          })
        };
      var $e = s(95356);
      const De = e => {
          let {
            children: a,
            context: s = null,
            game: r,
            image: t = {},
            style: o = {},
            template: c = null,
            theme: i = null,
            reversedOnMobile: n = !1,
            className: l = "",
            id: d = null
          } = e;
          const m = (0, de.useImageParser)(t),
            g = {
              ...o
            };
          if (m?.src?.desktop) {
            const e = "var(--grid-background-repeat, no-repeat)",
              a = "var(--grid-background-position, center)/var(--grid-background-size, cover)";
            g.background = `url(${m?.src?.desktop}) ${e} ${a}`
          }
          return (0, u.jsx)("div", {
            id: d,
            className: (0, $e.classList)("rockstargames-modules-gtao-career-progress-hubf42b4606ed4a5b16b7647ad7b7eb229d", n ? "rockstargames-modules-gtao-career-progress-hubb00444166ce6346d7ca364a75a335ecc" : "", l),
            "data-game": "community" === c ? null : r,
            style: (0, F.safeStyles)(g),
            "data-context": s,
            "data-template": c,
            "data-theme": i,
            children: a
          })
        },
        Ae = e => {
          let {
            caption: a,
            children: s,
            ...r
          } = e;
          return a ? (0, u.jsxs)("figure", {
            ...r,
            children: [s, (0, u.jsx)("figcaption", {
              dangerouslySetInnerHTML: {
                __html: a
              }
            })]
          }) : s
        },
        Fe = e => {
          let {
            componentTitle: a,
            type: s,
            items: r
          } = e;
          return r?.length ? (0, u.jsx)("div", {
            className: "rockstargames-modules-gtao-career-progress-hubd393ab6eb68d416b116b6281abdb5e14",
            type: s,
            children: (0, u.jsxs)(De, {
              children: [a && (0, u.jsx)("h3", {
                children: a
              }), (0, u.jsx)(De, {
                className: "rockstargames-modules-gtao-career-progress-hubed3ee31cb8e357d795886157f95a742a",
                children: r.map(((e, a) => {
                  return e?.embed ? (0, u.jsx)(Ae, {
                    caption: e?.caption,
                    children: (0, u.jsx)("div", {
                      className: "rockstargames-modules-gtao-career-progress-hubdcf1c30612026a517f59af64d8703bc4",
                      dangerouslySetInnerHTML: {
                        __html: (s = e.embed, s.replace(/&gt;/g, ">").replace(/&lt;/g, "<"))
                      }
                    }, `${e?.key??a}_div`)
                  }, e?.key ?? a) : e?.text ? (0, u.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: e.text
                    }
                  }, e?.key ?? a) : void 0;
                  var s
                }))
              })]
            })
          }) : null
        };
      var Oe = s(50968);
      const Re = {
          type: "spring",
          stiffness: 650,
          damping: 45
        },
        Ue = {
          ease: "easeOut",
          duration: .9,
          delay: .3
        },
        Ge = {
          open: {
            opacity: 0,
            transition: {
              ease: "easeOut",
              duration: .3
            }
          },
          closed: {
            opacity: 1,
            transition: Ue
          }
        },
        He = {
          open: {
            opacity: 1,
            display: "grid",
            height: "auto",
            transition: {
              opacity: Ue,
              height: {
                type: "spring",
                stiffness: 425,
                damping: 40
              }
            }
          },
          closed: {
            opacity: 0,
            height: 0,
            transition: {
              opacity: {
                ease: "easeOut",
                duration: .1
              },
              height: Re
            },
            transitionEnd: {
              display: "none"
            }
          }
        },
        We = {
          open: {
            "--cta-border-color": "var(--white-15)",
            "--cta-background-color": "rgba(255,255,255,.1)",
            "--cta-background-color-noBlur": "var(--black-100)",
            padding: "var(--padding-sm)",
            gridGap: "var(--grid-gap-sm)",
            pointerEvents: "none",
            "--btn-hover-bg-color": "var(--black-15)",
            "--btn-hover-bg-color-noBlur": "var(--black-100)",
            "--btn-hover-font-color": "none",
            "--btn-hover-border-color": "var(--white-15)"
          },
          closed: {
            "--cta-border-color": "var(--white-100)",
            "--cta-background-color": "inherit",
            "--cta-background-color-noBlur": "inherit",
            padding: "var(--padding-sm) var(--padding-md)",
            gridGap: 0,
            transition: Re,
            transitionEnd: {
              "--btn-hover-bg-color": "inherit",
              "--btn-hover-bg-color-noBlur": "inherit",
              "--btn-hover-font-color": "inherit",
              "--btn-hover-border-color": "inherit"
            }
          }
        },
        qe = {
          pillBtn: "rockstargames-modules-gtao-career-progress-hubba37d7130b54bd53bd309b0cd04717ff",
          selected: "rockstargames-modules-gtao-career-progress-hubc9c0bba52c010c4e3571f2702eef944b",
          container: "rockstargames-modules-gtao-career-progress-hubbfcd1a0671c127c9135d8c2feac75c34",
          content: "rockstargames-modules-gtao-career-progress-huba1cf623c9dd51dd05772a395d8311dac",
          unexpandedButton: "rockstargames-modules-gtao-career-progress-hubba4683b82274b0f8ca98f97fd2b0a1c9",
          expandedArea: "rockstargames-modules-gtao-career-progress-hubdd25aa78f935c7d4cafdb1c8bc6d7932",
          closeButton: "rockstargames-modules-gtao-career-progress-hubc559c930e0a5a7caa72b3de9a3362a0a",
          platformButtons: "rockstargames-modules-gtao-career-progress-hubd6bfc47d3110920d77ea2e70dac9c898",
          platformButton: "rockstargames-modules-gtao-career-progress-hubb04a9bd68b598682a5dbe99dd1a2f06d",
          xbox: "rockstargames-modules-gtao-career-progress-hubfe4a687dfc69ef746fcbe4184c7a9574",
          xboxone: "rockstargames-modules-gtao-career-progress-hubb1f46a1ff640d7398e7736e814a5ed8f",
          xboxseriesxs: "rockstargames-modules-gtao-career-progress-hube23b6f1412ea1ecb8a616b4f25d2888d",
          ps: "rockstargames-modules-gtao-career-progress-hube0b107bda3c03c1e82c94195bfbc055b",
          ps4: "rockstargames-modules-gtao-career-progress-hubdcf3078cbde57db42e66e6ba4c269fbe",
          ps5: "rockstargames-modules-gtao-career-progress-hube047116842d7619f0e04a3c9b6dbec13",
          pc: "rockstargames-modules-gtao-career-progress-hubdaa32798c37b9055cd280b838972e63e",
          switch: "rockstargames-modules-gtao-career-progress-hubae7bc564778d8af6cf5f8a0491ef7dc8",
          buttonText: "rockstargames-modules-gtao-career-progress-hubc2fb2fb5ec39a5c3b3c14ee6c0505b53"
        },
        Xe = e => {
          let {
            buttonText: a = "",
            link: r = "",
            platform: t = "",
            target: o = null,
            onClick: c
          } = e;
          const i = o ?? (r.startsWith(document.location.origin) ? "_self" : "_blank"),
            n = [qe.platformButton, qe[t]].join(" "),
            l = t ? s(13892)(`./${t}.svg`) : null,
            d = (0, u.jsxs)(u.Fragment, {
              children: [l ? (0, u.jsx)("img", {
                src: l,
                alt: a
              }) : "", !l && (0, u.jsx)("div", {
                className: qe.buttonText,
                children: a
              })]
            });
          return r.startsWith("http") ? (0, u.jsx)("span", {
            onClick: c,
            onKeyDown: c,
            role: "link",
            tabIndex: 0,
            children: (0, u.jsx)("a", {
              href: r,
              className: n,
              target: i,
              children: d
            })
          }) : (0, u.jsx)(m.NavLink, {
            className: n,
            onClick: c,
            to: r,
            children: d
          })
        },
        Ke = e => {
          let {
            buttonText: a = "Subscribe",
            className: r,
            children: t,
            platformsAndLinks: o = [],
            trackingType: c = "buy",
            trackingParent: i,
            target: l = null,
            trackingOId: d = null
          } = e;
          const [m, g] = (0, n.useState)(!1), {
            track: f
          } = (0, O.useGtmTrack)();
          return (0, u.jsxs)("div", {
            className: (0, I.classList)(qe.container, r),
            children: [(0, u.jsx)(Oe.motion.div, {
              className: qe.content,
              animate: m ? "open" : "close",
              variants: Ge,
              children: t
            }), (0, u.jsxs)(Oe.motion.div, {
              onClick: () => {
                g(!m), m || f("select_platform" === c ? {
                  event: "select_platform",
                  event_action: "select_platform",
                  event_category: "cta",
                  event_label: i,
                  text: a?.toLowerCase() ?? "subscribe"
                } : "link_account" === c ? {
                  element_placement: i,
                  event: "cta_link_account",
                  event_action: "link_account",
                  event_category: "cta",
                  event_label: i,
                  o_id: d,
                  text: a?.toLowerCase()
                } : {
                  event: "cta_buy",
                  event_action: "buy",
                  event_category: "cta",
                  event_label: i,
                  text: a?.toLowerCase() ?? "subscribe"
                })
              },
              className: qe.unexpandedButton,
              animate: m ? "open" : "closed",
              variants: We,
              initial: !1,
              children: [(0, u.jsx)(Oe.motion.div, {
                className: qe.buttonText,
                "data-expanded": m,
                children: "string" == typeof a ? a : "Subscribe"
              }), (0, u.jsxs)(Oe.motion.div, {
                className: qe.expandedArea,
                animate: m ? "open" : "closed",
                variants: He,
                initial: !1,
                children: [(0, u.jsx)("img", {
                  className: qe.closeButton,
                  onClick: () => g(!1),
                  onKeyDown: e => {
                    g(!1)
                  },
                  src: s(72428),
                  alt: "Close",
                  role: "button"
                }), (0, u.jsx)("div", {
                  className: qe.platformButtons,
                  children: o.length ? o.map((e => (0, u.jsx)(Xe, {
                    buttonText: e.buttonText ?? "",
                    link: e.href,
                    platform: e.platform,
                    onClick: () => (e => {
                      let {
                        href: a,
                        platform: s
                      } = e;
                      f({
                        element_placement: i,
                        event: "cta_store_link",
                        event_action: "store_link",
                        event_category: "cta",
                        event_label: "expanding platform button",
                        link_url: a,
                        text: s
                      })
                    })(e),
                    target: l
                  }, `${e.key}-${e.href}-${e.platform}`))) : ""
                })]
              })]
            })]
          })
        },
        Ye = {
          animateBox: "rockstargames-modules-gtao-career-progress-hube9374e74c542c1028a2068dfbd1e85a3",
          fadeArea: "rockstargames-modules-gtao-career-progress-huba63de5cdf9849ac45a0f6b4f7617cfa5",
          visible: "rockstargames-modules-gtao-career-progress-hubd7458685114194d602f94e2581de0f08",
          barGrow: "rockstargames-modules-gtao-career-progress-hubb0f4d843b626e3741c9dd38fcb3f56b0",
          bar: "rockstargames-modules-gtao-career-progress-huba4b99f54f3ce3987765143d8a151360a",
          animateMe: "rockstargames-modules-gtao-career-progress-hubf9c3869a2a1e10490bdfbcb3ee89d7da"
        },
        Qe = e => {
          let {
            children: a,
            style: s
          } = e;
          const r = (0, n.useRef)(null);
          return (0, n.useEffect)((() => {
            new IntersectionObserver((e => {
              e.forEach((e => {
                e.isIntersecting && e.target.classList.add([Ye.visible])
              }))
            })).observe(r?.current)
          }), []), (0, u.jsx)("div", {
            style: s,
            className: [Ye.fadeArea].join(" "),
            ref: r,
            children: a
          })
        },
        Ze = {
          img: "rockstargames-modules-gtao-career-progress-hube3f505a2281df28eb1acdf2d586e7fbd",
          startAnimation: "rockstargames-modules-gtao-career-progress-huba27e4d6733cea4a38e469425ef32ed3a"
        },
        Je = e => {
          let {
            imgSrc: a,
            title: s
          } = e;
          const [r] = (0, F.usePreloadImg)(a);
          return (0, u.jsx)("div", {
            role: "img",
            "aria-label": s,
            className: [Ze.img, r ? Ze.startAnimation : ""].join(" "),
            style: {
              backgroundImage: `url(${a})`
            }
          })
        },
        ea = e => {
          let {
            game: a,
            to: s
          } = e;
          const {
            fob_640: r,
            site_in_rockstar: t = !1,
            title_slug: o
          } = a;
          let c = o;
          "V" === o && (c = "gta-v"), "GTAOnline" === o && (c = "gta-online"), "undeadnightmare" === o && (c = "reddeadredemption");
          const i = s ?? `${t?"":"/games"}/${c}`;
          return (0, u.jsx)(f, {
            "data-gtm-category": "Games",
            "data-gtm-action": "Game Click-through",
            "data-gtm-label": o,
            "data-testid": `${o}-gamecard`,
            to: i,
            target: "_self",
            className: "rockstargames-modules-gtao-career-progress-hubfded54fb94f7325c5a0b57590585b175",
            children: (0, u.jsx)(Je, {
              imgSrc: r,
              title: a.title
            })
          })
        },
        aa = {
          gameSiteHeader: "rockstargames-modules-gtao-career-progress-hubcb7cada84679a7af263e1436675a518a",
          activeNavItem: "rockstargames-modules-gtao-career-progress-hubaa4aa7ed96facb38ed09c72eededb418",
          navHidden: "rockstargames-modules-gtao-career-progress-hubac1cb9d2005f287ed666d334f816f8c5",
          navContent: "rockstargames-modules-gtao-career-progress-hube5abd79468866e31fdad2780b169f687",
          headerNavOpen: "rockstargames-modules-gtao-career-progress-hubb98508d0923c5bb442c15772fbad9764",
          headerLogo: "rockstargames-modules-gtao-career-progress-hube666ff4f0b91dfe78991244ac1a759a5",
          bg: "rockstargames-modules-gtao-career-progress-hubcfc6fd456ca2f3e9db06f780f412660f"
        },
        sa = e => {
          let {
            buttonText: a = null,
            gameOverrideStyles: s,
            navLinks: r,
            cta: t = "",
            game: o
          } = e;
          const [c, i] = (0, n.useState)(!1), l = (0, _.useMutateState)(), {
            navHidden: d
          } = (0, _.useState)();
          return (0, n.useEffect)((() => {
            l({
              gameSiteNavOpen: c
            })
          }), [c]), (0, n.useEffect)((() => {
            const e = () => {
              i(!1)
            };
            return document.addEventListener("click", e), () => document.removeEventListener("click", e)
          }), []), (0, u.jsxs)("header", {
            "data-game": o,
            className: [aa.gameSiteHeader, c ? aa.headerNavOpen : "", d ? aa.navHidden : "", s.gameSiteHeader, c ? s.headerNavOpen : ""].join(" "),
            children: [(0, u.jsx)("button", {
              className: [aa.headerLogo, s.headerLogo].join(" "),
              onClick: e => {
                i(!c), e.nativeEvent.stopImmediatePropagation()
              },
              type: "button",
              "aria-label": "Open Game Site Nav",
              dangerouslySetInnerHTML: {
                __html: a
              }
            }), (0, u.jsx)("div", {
              className: aa.bg
            }), (0, u.jsx)("nav", {
              children: (0, u.jsx)("div", {
                className: aa.navContent,
                children: r
              })
            }), t]
          })
        };
      var ra = s(31403);
      class ta extends n.Component {
        constructor(e) {
          super(e), this.state = {
            header: e.header ?? null
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
          return this?.state?.error?.message ? (0, u.jsxs)("div", {
            className: "rockstargames-modules-gtao-career-progress-hubf903c45f8ecc18bd55f702e202f3763a",
            children: [(0, u.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, u.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      const oa = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return function(s) {
            return (0, u.jsx)(ta, {
              header: a,
              children: (0, u.jsx)(e, {
                ...s
              })
            })
          }
        },
        ca = e => {
          let {
            prevRef: a,
            nextRef: s,
            onNextClicked: r,
            onPrevClicked: t
          } = e;
          return (0, u.jsxs)("div", {
            className: "rockstargames-modules-gtao-career-progress-hubd98f432655f19a842390597c4434db06",
            children: [(0, u.jsx)("div", {
              className: "rockstargames-modules-gtao-career-progress-hubc06ca360ce11f2cef7baf8c5fba05a42",
              ref: a,
              onClick: t,
              "aria-label": "Previous",
              role: "button",
              tabIndex: 0,
              onKeyUp: () => {}
            }), (0, u.jsx)("div", {
              className: "rockstargames-modules-gtao-career-progress-huba4f98606cdef508fbd2e69c5564a92d8",
              ref: s,
              onClick: r,
              "aria-label": "Next",
              role: "button",
              tabIndex: 0,
              onKeyUp: () => {}
            })]
          })
        },
        ia = oa((e => {
          let {
            description: a,
            slideChildren: s,
            size: r,
            title: t,
            customSlidesPerView: o = null,
            customSpaceBetween: c = null,
            slideClass: i,
            style: l,
            className: d,
            cardSizeBreakpoints: m = {},
            customAspectRatio: g,
            titleBadge: f
          } = e;
          const {
            track: p
          } = (0, O.useGtmTrack)(), b = (0, n.useRef)(null), _ = (0, n.useRef)(null), k = (0, n.useRef)(null), [h, v] = (0, n.useState)(null), [x, y] = (0, n.useState)(!1), [N, w] = (0, n.useState)(null), [j, S] = (0, n.useState)({}), [C, T] = (0, n.useState)(), {
            ref: M,
            inView: L
          } = (0, W.useInView)({
            threshold: .6
          }), [E, B] = (0, n.useState)(!1), [z, V] = (0, n.useState)(null), [$, D] = (0, n.useState)(!1);
          (0, n.useEffect)((() => {
            const e = () => {
              D(window.innerWidth < 1024)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []);
          const A = {
            0: {
              spaceBetween: c ?? 16
            },
            1024: {
              spaceBetween: c ?? 18
            },
            1920: {
              spaceBetween: c ?? 20
            },
            2560: {
              spaceBetween: c ?? 22
            }
          };
          (0, n.useEffect)((() => {
            if (!b.current) return;
            const e = () => {
              if (b.current) {
                const e = o || Number(window.getComputedStyle(b.current).getPropertyValue("--slides-per-view")),
                  a = o ? 1 : Number(window.getComputedStyle(b.current).getPropertyValue("--slides-per-view-multiplier"));
                w(e * a)
              }
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [b, o]), (0, n.useEffect)((() => {
            if (!s) return;
            let e = !1;
            s.forEach((a => {
              "cover-card" === a?.props?.tina?.payload?.meta?.type && (e = !0, V(a))
            })), B(e);
            const a = s.map(((e, a) => "cover-card" === e?.props?.tina?.payload?.meta?.type && $ ? null : (0, u.jsx)(P.Ky, {
              className: "rockstargames-modules-gtao-career-progress-hubf58e79e329504e170dc9cb4595ea011b",
              onFocus: () => R(a),
              children: e
            }, Symbol(a).toString())));
            v(a)
          }), [s, $]), (0, n.useEffect)((() => {
            T({
              nextEl: k.current,
              prevEl: _.current
            })
          }), [k, _]), (0, n.useEffect)((() => {
            L && !x && s && (p({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: `deck - ${t}`.toLowerCase(),
              element_placement: `deck - ${t}`.toLowerCase()
            }), y(!0))
          }), [L, s]);
          let F = "custom" === r ? {
            "--custom-aspect-ratio": g,
            ...l
          } : {
            ...l
          };
          const R = e => {
            j.slideTo(e)
          };
          return (0, u.jsxs)("div", {
            className: (0, I.classList)("rockstargames-modules-gtao-career-progress-hubd0c3d91603036c852633939015a6cb48", d),
            "data-size": r,
            "data-sm": m?.sm ? m?.sm : r,
            "data-md": m?.md ? m?.md : r,
            "data-lg": m?.lg ? m?.lg : r,
            "data-xl": m?.xl ? m?.xl : r,
            "data-xxl": m?.xxl ? m?.xxl : r,
            "data-has-covercard": E,
            ref: b,
            style: F,
            children: [(0, u.jsx)("div", {
              className: "rockstargames-modules-gtao-career-progress-hubddeb75a59ed783554b94e8298897a1fa",
              ref: M
            }), E && $ && (0, u.jsx)("div", {
              className: "rockstargames-modules-gtao-career-progress-hubd5f00d41fdd2c864a0eb9e069cf08db0",
              children: z
            }), (0, u.jsx)("div", {
              className: "rockstargames-modules-gtao-career-progress-hubcdc60dbde3f8db6f466aba8a3e19fa96",
              children: (0, u.jsxs)("div", {
                className: "rockstargames-modules-gtao-career-progress-hubfb8e207418c783fc2f53b44c19faedca",
                children: [(0, u.jsxs)("div", {
                  className: "rockstargames-modules-gtao-career-progress-hubb779ba2045a88302079083935c90f7b3",
                  children: [!E && t && (0, u.jsxs)("div", {
                    className: "rockstargames-modules-gtao-career-progress-hubedf90c7c5ee1c79049f5a6442f14c949",
                    children: [(0, u.jsx)("h2", {
                      children: t
                    }), f && (0, u.jsx)("span", {
                      className: "rockstargames-modules-gtao-career-progress-hubd7a4aaeb70d68fdee39312192efb990b",
                      children: f
                    })]
                  }), (0, u.jsx)(ca, {
                    prevRef: _,
                    nextRef: k,
                    onNextClicked: () => {},
                    onPrevClicked: () => {}
                  })]
                }), a && (0, u.jsx)("div", {
                  className: "rockstargames-modules-gtao-career-progress-huba1007d13e3a321bb18b5fc667025d545",
                  dangerouslySetInnerHTML: {
                    __html: a
                  }
                })]
              })
            }), N ? (0, u.jsx)(P.wx, {
              slidesPerView: N,
              onInit: e => {
                S(e)
              },
              grabCursor: !0,
              navigation: C,
              modules: [ra._2],
              breakpoints: A,
              slideClass: (0, I.classList)("swiper-slide", i),
              onSlideNextTransitionEnd: () => {
                p({
                  event_action: "next",
                  event_category: "carousel",
                  event: "carousel_next",
                  event_label: t?.toLowerCase() ?? ""
                })
              },
              onSlidePrevTransitionEnd: () => {
                p({
                  event_action: "previous",
                  event_category: "carousel",
                  event: "carousel_previous",
                  event_label: t?.toLowerCase() ?? ""
                })
              },
              onSlideChangeTransitionEnd: () => {
                p({
                  event_action: "swipe",
                  event_category: "carousel",
                  event: "carousel_swipe",
                  event_label: t?.toLowerCase() ?? ""
                })
              },
              children: h
            }) : ""]
          })
        }), null),
        na = {
          pillBtn: "rockstargames-modules-gtao-career-progress-hubd008b074498ad02717806cc094b8a780",
          selected: "rockstargames-modules-gtao-career-progress-hubbe9a2e37ec59e339b0d72cd8e5256703",
          hero: "rockstargames-modules-gtao-career-progress-hubd1346f9b98fbaac26948e361bd98b4c6",
          images: "rockstargames-modules-gtao-career-progress-hubc9c078a3102a96b26f1bf1f98306384f",
          background: "rockstargames-modules-gtao-career-progress-huba271224ca2caf56b470059cdb98d9a42",
          gradient: "rockstargames-modules-gtao-career-progress-hubae257e9d159ae9bd7c8685e38ba16f59",
          layered: "rockstargames-modules-gtao-career-progress-hubf663886f051e47ea04f097c85ae6625b",
          content: "rockstargames-modules-gtao-career-progress-hubf9c204f451f3a53bcc307c00eb5f907f",
          descriptions: "rockstargames-modules-gtao-career-progress-hubd1bbf288f3fe6c79e658764847d2890a",
          buttonGroup: "rockstargames-modules-gtao-career-progress-hubfb373367ffd03ba01edaf671175244ab",
          legalText: "rockstargames-modules-gtao-career-progress-hubf625ffdd1b33a1642aa0dec12efe7897",
          shardsCarousel: "rockstargames-modules-gtao-career-progress-hube999b9cecfe233bcee8cab8682fb96bf"
        },
        la = {
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
        da = {
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
        },
        ma = e => {
          let {
            title: a = "",
            mobileImg: s,
            desktopImg: r
          } = e;
          const t = (0, I.useGetCdnSource)(s ?? null),
            o = (0, I.useGetCdnSource)(r ?? t);
          return (0, u.jsx)("div", {
            className: na.shard,
            style: {
              "--background-image-mobile": `url(${t})`,
              "--background-image-desktop": `url(${o})`
            },
            children: (0, u.jsx)("h5", {
              children: a
            })
          })
        },
        ga = e => {
          let {
            title: a = "Membership Rewards",
            shards: s
          } = e;
          const [r, t] = (0, n.useState)(null);
          return (0, n.useEffect)((() => {
            s && t(s.reduce(((e, a) => {
              if (!a?.shardImg) return e;
              const {
                title: s,
                shardImg: r
              } = a, {
                mobile: t,
                desktop: o
              } = r;
              return e.push((0, u.jsx)(ma, {
                title: s,
                mobileImg: t?.full_src,
                desktopImg: o?.full_src
              })), e
            }), []))
          }), [s]), r ? (0, u.jsx)("div", {
            className: na.shardsCarousel,
            children: (0, u.jsx)(ia, {
              title: a,
              slideChildren: r,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        ua = e => {
          let {
            animated: a = !1,
            ctas: s = [],
            description: r,
            expandingButtonLabel: t = "Subscribe",
            title: o
          } = e;
          const [c, i] = (0, n.useState)([]), [l, d] = (0, n.useState)([]);
          return (0, n.useEffect)((() => {
            i(s.reduce(((e, a) => a.isInExpandingButton ? (e.push({
              href: a.href,
              platform: a.platform,
              buttonText: a.buttonText
            }), e) : e), [])), d(s.reduce(((e, a) => (a.isInExpandingButton || e.push({
              icon: a.platform ? a.platform : "",
              title: a.buttonText,
              to: a.href
            }), e)), []))
          }), s), s.length ? c.length ? (0, u.jsx)(Oe.motion.div, {
            variants: a ? da : void 0,
            children: (0, u.jsxs)(Ke, {
              buttonText: t,
              platformsAndLinks: c,
              children: [(0, u.jsxs)(Oe.motion.div, {
                className: na.descriptions,
                variants: a ? da : void 0,
                children: [(0, u.jsx)("h2", {
                  dangerouslySetInnerHTML: {
                    __html: o
                  }
                }), (0, u.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: r
                  }
                })]
              }), !!l && !!l.length && (0, u.jsx)(Oe.motion.div, {
                variants: da,
                children: (0, u.jsx)(B, {
                  buttons: l,
                  className: na.buttonGroup
                })
              })]
            })
          }) : (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsxs)(Oe.motion.div, {
              className: na.descriptions,
              variants: a ? da : void 0,
              children: [(0, u.jsx)("h2", {
                dangerouslySetInnerHTML: {
                  __html: o
                }
              }), (0, u.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: r
                }
              })]
            }), !!l && !!l.length && (0, u.jsx)(Oe.motion.div, {
              variants: da,
              children: (0, u.jsx)(B, {
                buttons: l,
                className: na.buttonGroup
              })
            })]
          }) : (0, u.jsxs)(Oe.motion.div, {
            className: na.descriptions,
            variants: a ? da : void 0,
            children: [(0, u.jsx)("h2", {
              dangerouslySetInnerHTML: {
                __html: o
              }
            }), (0, u.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: r
              }
            })]
          })
        },
        fa = e => {
          let {
            animated: a = !1,
            brands: s = [],
            ctas: r = [],
            description: t = "",
            expandingButtonLabel: o = "Subscribe",
            title: c = "",
            legalText: i
          } = e;
          return (0, u.jsxs)(Oe.motion.div, {
            className: na.content,
            initial: "hidden",
            animate: "visible",
            variants: a ? la : void 0,
            children: [(0, u.jsx)(Oe.motion.div, {
              variants: a ? da : void 0,
              children: (0, u.jsx)(j, {
                brands: s
              })
            }), (0, u.jsx)(ua, {
              animated: a,
              ctas: r,
              description: t,
              expandingButtonLabel: o,
              title: c
            }), i && (0, u.jsx)(Oe.motion.div, {
              className: na.legalText,
              variants: a ? da : void 0,
              children: (0, u.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: i
                }
              })
            })]
          })
        },
        pa = e => {
          let {
            animated: a = !1,
            backgroundImage: s,
            brands: r = [],
            className: t,
            ctas: o = [],
            description: c = "",
            expandingButtonLabel: i = "Subscribe",
            layeredImage: n,
            layeredImageSettings: l,
            legalText: d,
            shardsSection: m = {},
            theme: g = "gen9",
            title: f = ""
          } = e;
          const p = (e => {
              if (!e) return null;
              const a = {},
                s = new Map([
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
                const [r, t] = e;
                if (s.has(r)) {
                  const e = s.get(r);
                  Object.entries(t).forEach((t => {
                    const [o, c] = t;
                    if (s.has(r) && s.has(o)) {
                      const r = `${s.get(o)}${e}`;
                      a[r] = "imageWidth" !== o ? c ? `${c}px` : "0px" : c ? `${c}vw` : "100vw"
                    }
                  }))
                }
              })), a
            })(l),
            b = (0, I.useGetCdnSource)(s?.mobile?.full_src ?? null),
            _ = (0, I.useGetCdnSource)(s?.desktop?.full_src ?? b),
            k = (0, I.useGetCdnSource)(n?.mobile?.full_src ?? null),
            h = (0, I.useGetCdnSource)(n?.desktop?.full_src ?? k);
          return (0, u.jsxs)(Oe.motion.div, {
            className: (0, I.classList)(na.hero, t),
            style: {
              "--background-image-desktop": `url(${_})`,
              "--background-image-mobile": `url(${b})`,
              "--layered-image-desktop": `url(${h})`,
              "--layered-image-mobile": `url(${k})`
            },
            initial: "hidden",
            animate: "visible",
            variants: a ? la : void 0,
            "data-type": "hero",
            theme: g,
            children: [(0, u.jsxs)("div", {
              className: na.images,
              children: [_ && b ? (0, u.jsx)("div", {
                className: na.background,
                style: s?.style ?? {}
              }) : "", k && h ? (0, u.jsx)("div", {
                className: na.layered,
                style: l ? p : {}
              }) : "", (0, u.jsx)("div", {
                className: na.gradient
              })]
            }), (0, u.jsx)(fa, {
              animated: a,
              ctas: o,
              description: c,
              expandingButtonLabel: i,
              title: f,
              brands: r,
              legalText: d
            }), m?.shards && (0, u.jsx)(ga, {
              ...m
            })]
          })
        };
      var ba = s(79784),
        _a = s.n(ba);
      const ka = e => {
        let {
          children: a,
          attributes: s = {},
          className: r = "",
          style: t = {}
        } = e;
        return (0, u.jsx)("span", {
          className: (0, I.classList)(r, s?.className, "rockstargames-modules-gtao-career-progress-huba7f106a8036d74ed9282a741476c6b5a"),
          style: (0, F.safeStyles)(t ?? s?.style ?? {}),
          dangerouslySetInnerHTML: {
            __html: _a().unescape(a)
          }
        })
      };
      var ha = s(53592);
      const va = JSON.parse('{"us":{"aria_label_open_new_window":"(Opens in a new window)","plm_nav_scroll_left":"Scroll Left","plm_nav_scroll_right":"Scroll Right","language_selector_default":"Select a Language","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","sc_link_account":"Account","sc_link_activity_feed":"Activity Feed","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell My Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_messages":"Messages","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Toggle Social Club Menu","rp_icon":"RP Category","components_track_list_title":"Tracklist","disabled_label":"Disabled","next_button_label":"Next video page","previous_button_label":"Previous video page"},"de":{"aria_label_open_new_window":"(Öffnet ein neues Fenster)","plm_nav_scroll_left":"Links scrollen","plm_nav_scroll_right":"Rechts scrollen","language_selector_default":"Eine Sprache auswählen","profile_selector_mugshot":"Verbrecherfoto von {userName}","profile_selector_profile_card":"Profildaten","profile_selector_rp_icon":"RP-Kategorie","profile_selector_switch_character":"Charakter wechseln","sc_link_account":"Konto","sc_link_activity_feed":"Aktivitäten-Feed","sc_link_cookies_policy":"Cookie-Richtlinie","sc_link_cookies_settings":"Cookie-Einstellungen","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Meine Informationen nicht verkaufen","sc_link_find_friends":"Freunde finden","sc_link_friends":"Freunde","sc_link_game_activation":"Spielaktivierung","sc_link_help":"Hilfe","sc_link_import_friends":"Freunde importieren","sc_link_join_social_club":"Registrieren","sc_link_legal":"Rechtliches","sc_link_log_out":"Abmelden","sc_link_messages":"Nachrichten","sc_link_my_friends":"Meine Freunde","sc_link_notifications":"Benachrichtigungen","sc_link_privacy_policy":"Datenschutzrichtlinien","sc_link_settings":"Einstellungen","sc_link_sign_in":"Anmelden","sc_link_support":"Support","sc_link_view_my_profile":"Mein Profil ansehen","sc_menu_drag_handle":"Menü öffnen bzw. schließen","sc_menu_toggle":"Social-Club-Menü öffnen bzw. schließen","components_track_list_title":"Trackliste","disabled_label":"Deaktiviert","next_button_label":"Nächste Videoseite","previous_button_label":"Vorherige Videoseite"},"es":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","plm_nav_scroll_left":"Desplazar hacia la izquierda","plm_nav_scroll_right":"Desplazar hacia la derecha","language_selector_default":"Selecciona un idioma","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta de perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Ajustes de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendáis mis datos","sc_link_find_friends":"Buscar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación del juego","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registrarse","sc_link_legal":"Aviso legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Ajustes","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Asistencia técnica","sc_link_view_my_profile":"Ver mi perfil","sc_menu_drag_handle":"Arrastrar el controlador del menú","sc_menu_toggle":"Cambiar el menú del Social Club","components_track_list_title":"Lista de pistas","disabled_label":"Desactivado","next_button_label":"Página de vídeo siguiente","previous_button_label":"Página de vídeo anterior"},"mx":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","plm_nav_scroll_left":"Desplazarse hacia la izquierda","plm_nav_scroll_right":"Desplazarse hacia la derecha","language_selector_default":"Seleccionar un idioma","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta del perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Muro de actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configuración de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendan mis datos","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación de juegos","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registro","sc_link_legal":"Legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Configuración","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Soporte","sc_link_view_my_profile":"Ver mi perfil","sc_menu_drag_handle":"Mover el handle del menú","sc_menu_toggle":"Cambiar menú del Social Club","components_track_list_title":"Lista de canciones","disabled_label":"Desactivado","next_button_label":"Página de video siguiente","previous_button_label":"Página de video anterior"},"fr":{"aria_label_open_new_window":"(S’ouvre dans une nouvelle fenêtre)","plm_nav_scroll_left":"Faire défiler vers la gauche","plm_nav_scroll_right":"Faire défiler vers la droite","language_selector_default":"Sélectionner une langue","profile_selector_mugshot":"Photo d\'identité : {userName}","profile_selector_profile_card":"Carte du profil","profile_selector_rp_icon":"Catégorie de RP","profile_selector_switch_character":"Changer de personnage","sc_link_account":"Compte","sc_link_activity_feed":"Fil d\'activités","sc_link_cookies_policy":"Politique en matière de cookies","sc_link_cookies_settings":"Paramètres des cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Ne pas vendre mes informations","sc_link_find_friends":"Trouver des amis","sc_link_friends":"Amis","sc_link_game_activation":"Activation de jeux","sc_link_help":"Aide","sc_link_import_friends":"Importer des amis","sc_link_join_social_club":"S’inscrire","sc_link_legal":"Mentions légales","sc_link_log_out":"Se déconnecter","sc_link_messages":"Messages","sc_link_my_friends":"Mes amis","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Charte de confidentialité","sc_link_settings":"Paramètres","sc_link_sign_in":"Se connecter","sc_link_support":"Assistance","sc_link_view_my_profile":"Voir mon profil","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Afficher le menu du Social Club","components_track_list_title":"Liste des morceaux","disabled_label":"Désactivé","next_button_label":"Page vidéo suivante","previous_button_label":"Page vidéo précédente"},"it":{"aria_label_open_new_window":"(Apri in una nuova finestra)","plm_nav_scroll_left":"Scorri a sinistra","plm_nav_scroll_right":"Scorri a destra","language_selector_default":"Seleziona una lingua","profile_selector_mugshot":"Foto segnaletica di {userName}","profile_selector_profile_card":"Scheda del profilo","profile_selector_rp_icon":"Categoria RP","profile_selector_switch_character":"Cambia personaggio","sc_link_account":"Account","sc_link_activity_feed":"Feed attività","sc_link_cookies_policy":"Politica sui cookie","sc_link_cookies_settings":"Impostazioni dei cookie","sc_link_crews":"Crew","sc_link_do_not_sell_my_information":"Non vendere le mie informazioni","sc_link_find_friends":"Trova amici","sc_link_friends":"Amici","sc_link_game_activation":"Attivazione gioco","sc_link_help":"Assistenza","sc_link_import_friends":"Importa amici","sc_link_join_social_club":"Registrati","sc_link_legal":"Note legali","sc_link_log_out":"Esci","sc_link_messages":"Messaggi","sc_link_my_friends":"I miei amici","sc_link_notifications":"Notifiche","sc_link_privacy_policy":"Politica sulla privacy","sc_link_settings":"Impostazioni","sc_link_sign_in":"Accedi","sc_link_support":"Supporto","sc_link_view_my_profile":"Visualizza il mio profilo","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Apri/chiudi il menu del Social Club","components_track_list_title":"Tracklist","disabled_label":"Disabilitato","next_button_label":"Pagina di video successiva","previous_button_label":"Pagina di video precedente"},"jp":{"aria_label_open_new_window":"(新しいウィンドウで開きます)","plm_nav_scroll_left":"左にスクロール","plm_nav_scroll_right":"右にスクロール","language_selector_default":"言語を選択","profile_selector_mugshot":"{ユーザーネーム}顔写真","profile_selector_profile_card":"プロフィールカード","profile_selector_rp_icon":"RPカテゴリー","profile_selector_switch_character":"キャラクター変更","sc_link_account":"アカウント","sc_link_activity_feed":"アクティビティフィード","sc_link_cookies_policy":"クッキーポリシー","sc_link_cookies_settings":"クッキー設定","sc_link_crews":"クルー","sc_link_do_not_sell_my_information":"個人情報を売らないでください","sc_link_find_friends":"フレンドを検索","sc_link_friends":"フレンド","sc_link_game_activation":"ゲームアクティベーション","sc_link_help":"ヘルプ","sc_link_import_friends":"フレンドをインポート","sc_link_join_social_club":"サインアップ","sc_link_legal":"利用規約","sc_link_log_out":"ログアウト","sc_link_messages":"メッセージ","sc_link_my_friends":"フレンド","sc_link_notifications":"通知","sc_link_privacy_policy":"プライバシーポリシー","sc_link_settings":"設定","sc_link_sign_in":"サインイン","sc_link_support":"サポート","sc_link_view_my_profile":"プロフィールを表示","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Social Clubメニューを切り替え","components_track_list_title":"トラックリスト","disabled_label":"無効","next_button_label":"次のビデオページ","previous_button_label":"前のビデオページ"},"kr":{"aria_label_open_new_window":"(새 창에서 열기)","plm_nav_scroll_left":"왼쪽 스크롤","plm_nav_scroll_right":"오른쪽 스크롤","language_selector_default":"언어 선택","profile_selector_mugshot":"{userName} 머그샷","profile_selector_profile_card":"프로필 카드","profile_selector_rp_icon":"RP 카테고리","profile_selector_switch_character":"캐릭터 교체","sc_link_account":"계정","sc_link_activity_feed":"활동 피드","sc_link_cookies_policy":"쿠키 정책","sc_link_cookies_settings":"쿠키 설정","sc_link_crews":"조직","sc_link_do_not_sell_my_information":"내 정보 판매 안 함","sc_link_find_friends":"친구 찾기","sc_link_friends":"친구","sc_link_game_activation":"게임 활성화","sc_link_help":"도움말","sc_link_import_friends":"친구 불러오기","sc_link_join_social_club":"가입","sc_link_legal":"법률 관련","sc_link_log_out":"로그아웃","sc_link_messages":"메시지","sc_link_my_friends":"내 친구","sc_link_notifications":"알림","sc_link_privacy_policy":"개인 정보 보호 정책","sc_link_settings":"설정","sc_link_sign_in":"로그인","sc_link_support":"지원","sc_link_view_my_profile":"내 프로필 보기","sc_menu_drag_handle":"드래그 메뉴 핸들","sc_menu_toggle":"Social Club 메뉴 켜기/끄기","components_track_list_title":"트랙리스트","disabled_label":"비활성화됨","next_button_label":"다음 비디오 페이지","previous_button_label":"이전 비디오 페이지"},"pl":{"aria_label_open_new_window":"(Otwórz w nowym oknie)","plm_nav_scroll_left":"Przesuń w lewo","plm_nav_scroll_right":"Przesuń w prawo","language_selector_default":"Wybierz język","profile_selector_mugshot":"Zdjęcie – {userName}","profile_selector_profile_card":"Karta profilu","profile_selector_rp_icon":"Poziom RP","profile_selector_switch_character":"Zmień postać","sc_link_account":"Konto","sc_link_activity_feed":"Zajęcia","sc_link_cookies_policy":"Polityka plików cookie","sc_link_cookies_settings":"Ustawienia plików cookie","sc_link_crews":"Ekipy","sc_link_do_not_sell_my_information":"Zabraniam sprzedaży moich danych","sc_link_find_friends":"Szukaj znajomych","sc_link_friends":"Znajomi","sc_link_game_activation":"Aktywacja gry","sc_link_help":"Pomoc","sc_link_import_friends":"Importuj znajomych","sc_link_join_social_club":"Zarejestruj się","sc_link_legal":"Informacje prawne","sc_link_log_out":"Wyloguj się","sc_link_messages":"Wiadomości","sc_link_my_friends":"Moi znajomi","sc_link_notifications":"Powiadomienia","sc_link_privacy_policy":"Polityka prywatności","sc_link_settings":"Ustawienia","sc_link_sign_in":"Zaloguj się","sc_link_support":"Wsparcie","sc_link_view_my_profile":"Przeglądaj profil","sc_menu_drag_handle":"Przeciągnij uchwyt menu","sc_menu_toggle":"Włącz lub wyłącz menu Social Club","components_track_list_title":"Lista utworów","disabled_label":"Wyłączone","next_button_label":"Następna strona z filmami","previous_button_label":"Poprzednia strona z filmami"},"br":{"aria_label_open_new_window":"(Abre em uma nova janela)","plm_nav_scroll_left":"Rolar para a esquerda","plm_nav_scroll_right":"Rolar para a direita","language_selector_default":"Selecione um idioma","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Cartão de perfil","profile_selector_rp_icon":"Categoria de RP","profile_selector_switch_character":"Alternar personagem","sc_link_account":"Conta","sc_link_activity_feed":"Feed de atividade","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configurações de cookies","sc_link_crews":"Comandos","sc_link_do_not_sell_my_information":"Não vendam a minha informação","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Ativação de jogos","sc_link_help":"Ajuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Inscrever-se","sc_link_legal":"Aviso legal","sc_link_log_out":"Sair","sc_link_messages":"Mensagens","sc_link_my_friends":"Meus amigos","sc_link_notifications":"Notificações","sc_link_privacy_policy":"Política de Privacidade","sc_link_settings":"Configurações","sc_link_sign_in":"Iniciar sessão","sc_link_support":"Suporte","sc_link_view_my_profile":"Visualizar meu perfil","sc_menu_drag_handle":"Arrastar título do menu","sc_menu_toggle":"Alternar menu do Social Club","components_track_list_title":"Lista de faixas","disabled_label":"Desabilitado","next_button_label":"Próxima página de vídeos","previous_button_label":"Página anterior de vídeos"},"ru":{"aria_label_open_new_window":"(ссылка откроется в новом окне)","plm_nav_scroll_left":"Пролистать влево","plm_nav_scroll_right":"Пролистать вправо","language_selector_default":"Выбрать язык","profile_selector_mugshot":"Фотография игрока {userName}","profile_selector_profile_card":"Карта профиля","profile_selector_rp_icon":"Категория опыта","profile_selector_switch_character":"Сменить персонажа","sc_link_account":"Учетная запись","sc_link_activity_feed":"Лента событий","sc_link_cookies_policy":"Политика использования файлов Cookie","sc_link_cookies_settings":"Настройки файлов Cookie","sc_link_crews":"Банды","sc_link_do_not_sell_my_information":"Я запрещаю продавать свою личную информацию","sc_link_find_friends":"Поиск друзей","sc_link_friends":"Друзья","sc_link_game_activation":"Активация игры","sc_link_help":"Помощь","sc_link_import_friends":"Импорт друзей","sc_link_join_social_club":"Регистрация","sc_link_legal":"Юридическая информация","sc_link_log_out":"Выход","sc_link_messages":"Сообщения","sc_link_my_friends":"Мои друзья","sc_link_notifications":"Уведомления","sc_link_privacy_policy":"Политика конфиденциальности","sc_link_settings":"Настройки","sc_link_sign_in":"Войти","sc_link_support":"Поддержка","sc_link_view_my_profile":"Моя учетная запись","sc_menu_drag_handle":"Перенести маркер меню","sc_menu_toggle":"Переключить меню Social Club","components_track_list_title":"Список песен","disabled_label":"Отключено","next_button_label":"Следующая страница с видео","previous_button_label":"Предыдущая страница с видео"},"hans":{"aria_label_open_new_window":"（在新窗口中打开）","plm_nav_scroll_left":"向左滚动","plm_nav_scroll_right":"向右滚动","language_selector_default":"选择一种语言","profile_selector_mugshot":"{userName} 面部照片","profile_selector_profile_card":"档案卡","profile_selector_rp_icon":"声望值类别","profile_selector_switch_character":"切换角色","sc_link_account":"账户","sc_link_activity_feed":"活动动态","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 设置","sc_link_crews":"帮会","sc_link_do_not_sell_my_information":"请勿出售我的信息","sc_link_find_friends":"查找好友","sc_link_friends":"好友","sc_link_game_activation":"游戏激活","sc_link_help":"帮助","sc_link_import_friends":"导入好友","sc_link_join_social_club":"注册","sc_link_legal":"法律声明","sc_link_log_out":"登出","sc_link_messages":"信息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隐私政策","sc_link_settings":"设置","sc_link_sign_in":"登录","sc_link_support":"支持","sc_link_view_my_profile":"查看我的档案","sc_menu_drag_handle":"拖动菜单处理","sc_menu_toggle":"切换 Social Club 菜单","components_track_list_title":"曲目列表","disabled_label":"已禁用","next_button_label":"下一页视频","previous_button_label":"上一页视频"},"tw":{"aria_label_open_new_window":"（在新視窗開啟）","plm_nav_scroll_left":"向左捲動","plm_nav_scroll_right":"向右捲動","language_selector_default":"選擇語言","profile_selector_mugshot":"{userName} 罪犯檔案照","profile_selector_profile_card":"資料卡","profile_selector_rp_icon":"聲望值類別","profile_selector_switch_character":"切換角色","sc_link_account":"帳戶","sc_link_activity_feed":"動態活動","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 設定","sc_link_crews":"幫會","sc_link_do_not_sell_my_information":"不要販售我的個人資料","sc_link_find_friends":"尋找好友","sc_link_friends":"好友","sc_link_game_activation":"遊戲啟用","sc_link_help":"幫助","sc_link_import_friends":"匯入好友","sc_link_join_social_club":"註冊","sc_link_legal":"法律聲明","sc_link_log_out":"登出","sc_link_messages":"訊息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隱私權政策","sc_link_settings":"設定","sc_link_sign_in":"登入","sc_link_support":"支援","sc_link_view_my_profile":"查看我的設定檔","sc_menu_drag_handle":"拖曳選單控點","sc_menu_toggle":"開關 Social Club 選單","components_track_list_title":"曲目清單","disabled_label":"停用","next_button_label":"下一個影片頁面","previous_button_label":"上一個影片頁面"}}'),
        xa = (0, l.defineMessages)({
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          }
        }),
        ya = {
          pillBtn: "rockstargames-modules-gtao-career-progress-hubcb792ef8796eaa09f8b5c1ee0230fcd7",
          selected: "rockstargames-modules-gtao-career-progress-hubc951b9f5173e8a37be389854c40995ee",
          scMenuStyles: "rockstargames-modules-gtao-career-progress-hubfa91a55e22ad688cba0bc1210eaf4726",
          languageSelector: "rockstargames-modules-gtao-career-progress-hubb631f2ce92e4a89f8eddebd32e8ed30a",
          open: "rockstargames-modules-gtao-career-progress-hubedc598921a872174190475d0ad016d15",
          linkWrapper: "rockstargames-modules-gtao-career-progress-hubc4b7087d1fcbaad6967e61b84160ff79",
          links: "rockstargames-modules-gtao-career-progress-hubc7d345d5c7e567e0ee75b792d5bdfb88",
          selectBoxWrapper: "rockstargames-modules-gtao-career-progress-hube3e55a10507405de05ae92006ec0d02b",
          selectBox: "rockstargames-modules-gtao-career-progress-hubc646a2bff16ec3003b027857488cd612",
          selectBoxOption: "rockstargames-modules-gtao-career-progress-hubbcccd1077d13d7fe1585655e5c5f8363"
        },
        Na = (0, l.withIntl)((e => {
          let {
            theme: a,
            languageSelectorOpened: s,
            setLanguageSelectorOpened: r
          } = e;
          const t = (0, m.useLocation)(),
            o = (0, l.useIntl)(),
            [c, i] = (0, l.getLocale)(),
            [d, g] = (0, n.useState)(!1),
            p = (0, n.useMemo)((() => (0, ha.c)()), []),
            b = (0, n.useCallback)((e => {
              let a = t.pathname;
              const s = a.split("/");
              return l.locales.map((e => e.subdomaincom)).includes(s[0]) && (a = s.slice(1).join("/")), p.currentSite?.site === ha.U.www ? "en" === e ? `${window.location.origin}${a}${t.search}` : `${window.location.origin}/${e}${a}${t.search}` : `${window.location.origin}${a}${t.search}`
            }), [t]),
            _ = (0, n.useRef)(null),
            [k, h] = (0, n.useState)(0),
            v = matchMedia("(hover: none) and (pointer: coarse)").matches,
            x = e => {
              if (r && r(!1), c.subdomaincom === e || "none" === e) return void(r && r(!1));
              const a = l.locales.find((a => a.subdomaincom === e));
              a && (i(a.iso), window.location.href = b(e))
            };
          return (0, n.useEffect)((() => {
            void 0 !== s && !1 === s && !0 === d && g(!1)
          }), [s]), (0, n.useEffect)((() => {
            _.current && h(_.current.scrollHeight)
          }), [_]), (0, u.jsxs)("div", {
            className: [ya.languageSelector, d ? ya.open : ""].join(" "),
            "data-theme": a,
            children: [v && "sc-menu" === a && (0, u.jsx)("div", {
              className: ya.selectBoxWrapper,
              children: (0, u.jsxs)("select", {
                className: ya.selectBox,
                onClick: e => e.stopPropagation(),
                onChange: e => {
                  x(e.currentTarget.value)
                },
                "aria-label": o.formatMessage(xa.language_selector_default),
                children: [(0, u.jsx)("option", {
                  className: ya.selectBoxOption,
                  value: "none",
                  children: (0, u.jsx)(l.FormattedMessage, {
                    ...xa.language_selector_default
                  })
                }), l.locales.map((e => {
                  let {
                    label: a,
                    subdomaincom: s
                  } = e;
                  return (0, u.jsx)("option", {
                    className: ya.selectBoxOption,
                    value: s,
                    children: a
                  }, `mobile-${s}`)
                }))]
              })
            }), (!v || "sc-menu" !== a) && (0, u.jsxs)(u.Fragment, {
              children: [(0, u.jsxs)("button", {
                onClick: e => {
                  e.stopPropagation(), r && r(!d), g(!d)
                },
                type: "button",
                "aria-label": o.formatMessage(xa.language_selector_default),
                children: [(0, u.jsx)("i", {}), (0, u.jsx)("span", {
                  children: (0, u.jsx)(l.FormattedMessage, {
                    ...xa.language_selector_default
                  })
                })]
              }), (0, u.jsx)("div", {
                className: ya.linkWrapper,
                ref: _,
                style: {
                  "--ls-linkWrapper-opened-height": `${k}px`
                },
                children: (0, u.jsx)("div", {
                  className: ya.links,
                  children: l.locales.map((e => {
                    let {
                      subdomaincom: a,
                      label: s
                    } = e;
                    return (0, u.jsx)(f, {
                      to: b(a),
                      onClick: () => {
                        x(a)
                      },
                      tabIndex: d ? 0 : -1,
                      children: s
                    }, `desktop-${a}`)
                  }))
                })
              })]
            })]
          })
        }), va),
        wa = {
          layeredImage: "rockstargames-modules-gtao-career-progress-huba29c233d553c5905763bb69412c1ece4",
          layersWrapper: "rockstargames-modules-gtao-career-progress-hubaabf78eb3e1fe545556ad0fa5639296e",
          "hero-lg": "rockstargames-modules-gtao-career-progress-hubca666917bdeaed43fd0a7af7dc30a0f7",
          "hero-md": "rockstargames-modules-gtao-career-progress-hubf0a202fcbf13f1e91157e531ae829ea3",
          "hero-sm": "rockstargames-modules-gtao-career-progress-hube03dbf5d16aeab81ca65f4cb7e64446f",
          contain: "rockstargames-modules-gtao-career-progress-hubc4c3c929b11e88540e3f19d5715393ec",
          cover: "rockstargames-modules-gtao-career-progress-hubb283d6381c82abf4dde21c57b8fc5f66",
          fill: "rockstargames-modules-gtao-career-progress-hube9d16b94c1ed476c9346cb6f48f5ad3e",
          "bg-img": "rockstargames-modules-gtao-career-progress-hube45fabf9c4e04bf3ee27e9c84c50c09b",
          imageLayer: "rockstargames-modules-gtao-career-progress-hubed8d0ad18a62f087629ff5831fa0ac55",
          "layer-lg-height": "rockstargames-modules-gtao-career-progress-hubfaf1d5c6b2fe2ad27d4bb95ba7388f3d",
          "layer-md-height": "rockstargames-modules-gtao-career-progress-hubb41041f11a5ef98325948acc3dec956c",
          "layer-sm-height": "rockstargames-modules-gtao-career-progress-hubba7d5822aa073c9e01cd682d65c18944",
          "layer-xl-height": "rockstargames-modules-gtao-career-progress-hubec2399a1f7e79e9aacba81b242ad0602",
          "layer-xs-height": "rockstargames-modules-gtao-career-progress-huba6ec38ac99c762fcf0dd99aa2ced8f2b",
          "layer-xxl-height": "rockstargames-modules-gtao-career-progress-hubd7c1314e717273dfbb2acd3d5e06e585",
          "layer-lg-width": "rockstargames-modules-gtao-career-progress-hubca0dd7a55a5db5ee358ce51a166e5431",
          "layer-md-width": "rockstargames-modules-gtao-career-progress-hubbd4c246f4f0eaf7173d104ed1e7c2d06",
          "layer-sm-width": "rockstargames-modules-gtao-career-progress-hubfe3f49cba9cc10e4e076a43a6b36b862",
          "layer-xl-width": "rockstargames-modules-gtao-career-progress-hubbde3d6485ac7bb483dcca1ad4e2bbe67",
          "layer-xs-width": "rockstargames-modules-gtao-career-progress-hubb87efd95b330cacd4a5eaecf83528f4d",
          "layer-xxl-width": "rockstargames-modules-gtao-career-progress-hubac872df7985f9d591c85f97c72d451dc",
          "bottom-y": "rockstargames-modules-gtao-career-progress-hubd63fdb49c964c28c5e8952cd79a393a0",
          "center-x": "rockstargames-modules-gtao-career-progress-hubd248443eb924360a5d1d7211094ea827",
          "center-y": "rockstargames-modules-gtao-career-progress-huba8d87c765a51d98f0e3a9afd149ed0dc",
          "left-x": "rockstargames-modules-gtao-career-progress-hubdcaa6339b43850be2e14967cab730041",
          "right-x": "rockstargames-modules-gtao-career-progress-hubb656d800e3d134bd3a7e273a5f6d7ae6",
          "top-y": "rockstargames-modules-gtao-career-progress-hubadaf230f139f906eb912b58b315406ac",
          border: "rockstargames-modules-gtao-career-progress-hubc73e199a8978fb80895753c9a38fcdff",
          shards: "rockstargames-modules-gtao-career-progress-hube650a715d6f220ad49bb568768154b0e",
          shards_three: "rockstargames-modules-gtao-career-progress-hubb0c8be28788c6b23cea904bdc60d7e07",
          shards_two: "rockstargames-modules-gtao-career-progress-hube41252d3a0aee1d229f6bddc20c38d47",
          dual: "rockstargames-modules-gtao-career-progress-hubdb575e1d021e69ebb4265a29484e2888"
        },
        ja = e => {
          let {
            style: a,
            className: s
          } = e;
          const r = {
              ...a
            },
            t = a["--border-image-source"];
          return t && (r["--border-image-source"] = `url(${(0,I.useGetCdnSource)(t)})`), (0, u.jsx)("div", {
            className: (0, I.classList)(wa.border, s),
            style: {
              ...r
            }
          })
        },
        Sa = e => e?.images ? (0, u.jsx)("div", {
          className: (0, I.classList)(wa.layeredImage, wa[e?.variantClass], wa[e?.wrapperSizeClass]),
          style: {
            ...e?.style ?? {}
          },
          children: (0, u.jsxs)("div", {
            className: wa.layersWrapper,
            children: [e?.images?.map(((e, a) => {
              const {
                image: s,
                paddingClass: r,
                imageSizeClass: t,
                objectFitClass: o,
                positionClassX: c,
                positionClassY: i,
                zIndex: n,
                className: l,
                style: d,
                alt: m,
                displayClass: g
              } = e;
              return (0, u.jsx)(pe, {
                image: s,
                style: {
                  zIndex: n ?? ++a
                },
                imageStyle: d,
                className: (0, I.classList)(l, g, wa.imageLayer, wa[r], wa[t], wa[o], wa[c], wa[i]),
                alt: m
              }, n ?? ++a)
            })), e?.borderImage && (0, u.jsx)(ja, {
              style: e?.borderImage,
              className: e?.borderImage?.displayClass
            })]
          })
        }) : null,
        Ca = e => {
          let {
            hero: a,
            children: s
          } = e;
          return a ? (0, u.jsx)("div", {
            className: "rockstargames-modules-gtao-career-progress-hubefc561ad30f5dfe75c79d939737650dc",
            children: s
          }) : s
        },
        Ia = e => {
          let {
            badge: a = null,
            badgeType: s,
            discountTxt: r,
            splitter: t,
            image: o,
            style: c,
            className: i = "",
            attributes: n = {},
            role: l,
            hero: d = !1
          } = e;
          return (0, u.jsx)(Ca, {
            hero: d,
            children: (0, u.jsx)("figure", {
              children: (0, u.jsxs)("div", {
                className: (0, I.classList)("rockstargames-modules-gtao-career-progress-hubcab262c98c7f5bb3e982d9b075b3c2a8", d ? "rockstargames-modules-gtao-career-progress-hubcefd6d8859aeec1057caed28caa160c3" : "", n?.hiddenMobile ? "hiddenMobile" : "", n?.hiddenLarge ? "hiddenLarge" : "", n?.className, i),
                style: (0, F.safeStyles)({
                  ...c,
                  ...n?.style
                }),
                ...n,
                children: [(0, u.jsx)(pe, {
                  image: o,
                  className: i
                }), (o?.badge || o?.discountTxt || a || r) && (0, u.jsx)(Me, {
                  badge: o?.discountTxt ?? o?.badge ?? a ?? r,
                  badgeType: s,
                  splitter: o?.splitter ?? t,
                  role: o?.role ?? l
                }), o?.caption && (0, u.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: o.caption
                  }
                })]
              })
            })
          })
        },
        Ta = {
          pillBtn: "rockstargames-modules-gtao-career-progress-hubeea0db67b0aabf28288b288845324afe",
          selected: "rockstargames-modules-gtao-career-progress-hubd1d25362fd730ca979d5ad79de088f89",
          multiSourceContainer: "rockstargames-modules-gtao-career-progress-hubdc538bbfc2f407ed9fe840097ccac819",
          multiSourceImage: "rockstargames-modules-gtao-career-progress-hubee782a29692a8eb06db1287a4984c243",
          animatePlaceholder: "rockstargames-modules-gtao-career-progress-hubfbd73f5f70c2ce64aa9c9bd398f1a3b5",
          "loader-keyframes": "rockstargames-modules-gtao-career-progress-hubf6040b2ae96a9b0dcdb2d283c9caff59"
        },
        Ma = e => {
          let {
            imageUrl: a,
            className: s,
            alt: r,
            style: t,
            lazy: o = !1,
            decoding: c = "auto",
            sizes: i = [320, 480, 768, 1024, 1440, 1920, 2560]
          } = e;
          const [l, d] = (0, n.useState)(!1);
          return (0, u.jsxs)("div", {
            className: Ta.multiSourceContainer,
            children: [!l && (0, u.jsx)("img", {
              className: [s, Ta.animatePlaceholder].join(" "),
              src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjMzMzMzMzIi8+Cjwvc3ZnPgo=",
              sizes: "(max-width: 1024px) 100vw, 1024px",
              alt: "Loading...",
              style: t
            }), (0, u.jsx)("img", {
              className: [Ta.multiSourceImage, s].join(" "),
              src: `${a}?im=Resize=1920`,
              srcSet: (m = a, i.map((e => `${m}?im=Resize=${e} ${e}w`)).join(", ")),
              sizes: "(max-width: 400px) 200px, (max-width: 1920px) 100vw, 1920px",
              alt: r ?? "Multi-Source Image",
              style: t,
              onLoad: () => {
                d(!0)
              },
              loading: o ? "lazy" : "eager",
              decoding: c
            })]
          });
          var m
        },
        La = {
          tag: "rockstargames-modules-gtao-career-progress-hubed77774d2704bc0ebc0ac156542ae053"
        },
        Ea = e => {
          let {
            className: a,
            href: s,
            title: r,
            style: t
          } = e;
          const o = (0, u.jsxs)("div", {
            style: t,
            className: [La.tag, a].join(" "),
            children: [(0, u.jsx)("i", {}), r]
          });
          return void 0 !== s ? (0, u.jsx)(f, {
            to: s,
            children: o
          }) : o
        },
        Ba = {
          newswireBlock: "rockstargames-modules-gtao-career-progress-huba793f470884d207243d6c3caac8ad811",
          info: "rockstargames-modules-gtao-career-progress-hubd50f6d2bc5f983c05311292acb4c78a5",
          title: "rockstargames-modules-gtao-career-progress-hubcc389449dc1495fc9c323fc2c547857d",
          newswireBlockNoSpecialOrder: "rockstargames-modules-gtao-career-progress-hubffd167124f27c8e26a147f49c88796e5",
          preview: "rockstargames-modules-gtao-career-progress-hubbbfbcf32c8c892ea29f4178949643475",
          previewMobile: "rockstargames-modules-gtao-career-progress-hubf88852766488b21a28c42d230ea529a1",
          top: "rockstargames-modules-gtao-career-progress-hubfa1a6f4c7d94b94f5af2dc1ac9af79f1",
          startAnimation: "rockstargames-modules-gtao-career-progress-hube380e8c67066df6f33fc018341ea96e5"
        },
        Pa = e => {
          let {
            index: a,
            post: s,
            noSpecialOrder: r = !1,
            style: t = {}
          } = e;
          const [o] = (0, m.useSearchParams)(), c = s.preview_images_parsed.newswire_block, i = {
            default: 0 !== a || r ? c.square || c.d16x9 || c._fallback : c.d16x9 || c.square || c._fallback,
            mobile: c.square || c._fallback
          }, [n, l] = (0, F.usePreloadImg)(i.default), [d, g] = (0, F.usePreloadImg)(i.mobile), p = {
            default: {
              backgroundImage: `url(${i.default})`
            },
            mobile: {
              backgroundImage: `url(${i.mobile})`
            }
          };
          return (0, u.jsx)(f, {
            "data-gtm-category": "Newswire",
            "data-gtm-action": "Article Block Click",
            "data-gtm-label": `${s.title}`,
            to: s.url,
            className: [Ba.newswireBlock, r ? Ba.newswireBlockNoSpecialOrder : "", null !== n ? Ba.startAnimation : ""].join(" "),
            children: (0, u.jsxs)(u.Fragment, {
              children: [0 !== a || o.get("tag_id") ? (0, u.jsx)("div", {
                className: Ba.preview,
                style: p.default
              }) : (0, u.jsxs)(u.Fragment, {
                children: [(0, u.jsx)("div", {
                  className: Ba.previewMobile,
                  style: p.mobile
                }), (0, u.jsx)("div", {
                  className: Ba.preview,
                  style: p.default
                })]
              }), (0, u.jsxs)("div", {
                className: Ba.info,
                children: [(0, u.jsxs)("div", {
                  className: Ba.top,
                  children: [s.primary_tags.length ? (0, u.jsx)(Ea, {
                    title: s.primary_tags[s.primary_tags.length > 1 && 722 === s.primary_tags[0].id ? 1 : 0].name
                  }) : "", (0, u.jsx)("time", {
                    dateTime: s.created,
                    children: s.created_formatted
                  })]
                }), (0, u.jsx)("h5", {
                  className: Ba.title,
                  dangerouslySetInnerHTML: {
                    __html: s.title
                  }
                })]
              })]
            })
          })
        };
      var za = s(55492),
        Va = s.n(za);
      const $a = (0, F.withTranslations)((e => {
          let {
            relativeTo: a = "",
            tagId: s = null,
            metaUrl: r = "/newswire",
            t
          } = e;
          const [o] = (0, m.useSearchParams)(), {
            tagId: c = null
          } = (0, m.useParams)(), [i, l] = (0, n.useState)(c ?? s ?? o.get("tag_id")), [d, g] = (0, n.useState)(1), [f, p] = (0, n.useState)([]), [b, k] = (0, n.useState)(null), {
            data: h
          } = (0, _.useQuery)(Va(), {
            variables: {
              tagId: Number(i),
              page: d,
              metaUrl: r
            },
            autoSetLoading: !0
          });
          return (0, n.useEffect)((() => {
            g(1), p([]), l(c ?? s ?? o.get("tag_id"))
          }), [o.get("tag_id")]), (0, n.useEffect)((() => {
            h && h.posts && h.posts.paging && k(h.posts.paging), h && h.posts && h.posts.results && p(f.concat(h.posts.results))
          }), [h]), f.length ? (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)(Oa, {
              posts: f,
              relativeTo: a,
              noSpecialOrder: null !== i
            }), null !== b && b.nextPage ? (0, u.jsx)(C, {
              onClick: () => g(d + 1),
              disabled: !1,
              context: "secondary",
              children: t("More Stories")
            }) : ""]
          }) : null
        })),
        Da = {
          pillBtn: "rockstargames-modules-gtao-career-progress-hubafd0af959edb4a463c41ad4e9cc5dadc",
          selected: "rockstargames-modules-gtao-career-progress-hubbcd59aa4a9e88d86a2cbe8d4972f8f51",
          related: "rockstargames-modules-gtao-career-progress-huba748ad776070dab831edc1f67f66af08",
          posts: "rockstargames-modules-gtao-career-progress-hubc0aa38678decd13ca38886b4547efedd",
          just1post: "rockstargames-modules-gtao-career-progress-hubb1a31ddf7fd4458ee860d354a6a0ac92"
        },
        Aa = (0, F.withTranslations)((e => {
          let {
            posts: a,
            t: s
          } = e;
          return (0, u.jsxs)("section", {
            className: Da.related,
            children: [(0, u.jsx)("h2", {
              children: s("Related Stories")
            }), (0, u.jsx)("div", {
              className: [Da.posts, 1 === a.length ? Da.just1post : ""].join(" "),
              children: a.map((e => (0, u.jsx)(Pa, {
                noSpecialOrder: !0,
                post: e
              }, e.id)))
            })]
          })
        })),
        Fa = {
          newswireBlocks: "rockstargames-modules-gtao-career-progress-hubc2c8eedd25de7e186655f98b2a8d8960",
          noSpecialOrder: "rockstargames-modules-gtao-career-progress-hubc0d0db9dfc71c9f4f959b9c017b1ae4b"
        },
        Oa = (0, F.withGtmTracking)((e => {
          let {
            noSpecialOrder: a = !1,
            posts: s,
            gtmTrack: r,
            relativeTo: t
          } = e;
          return (0, n.useEffect)((() => {
            if (!s.length) return;
            const e = {
              event: "trackEvent",
              eventCategory: "Home",
              eventAction: "Newswire Impressions",
              ecommerce: {
                impressions: []
              }
            };
            s.map(((a, s) => {
              e.ecommerce.impressions.push({
                name: a.title,
                id: a.id,
                position: s + 1,
                list: "Home"
              })
            })), r(e)
          }), [s.length]), (0, u.jsx)("div", {
            className: [Fa.newswireBlocks, a ? Fa.noSpecialOrder : "", Fa.contextHome].join(" "),
            children: s.map(((e, s) => (0, u.jsx)(Pa, {
              index: s,
              noSpecialOrder: a,
              post: e
            }, e.id)))
          })
        })),
        Ra = {
          pillBtn: "rockstargames-modules-gtao-career-progress-hubf87ac9a7d56545847cf4d8ca471b03e6",
          selected: "rockstargames-modules-gtao-career-progress-huba8ea61e57fd58bfcb99aef7e6d687045",
          grid: "rockstargames-modules-gtao-career-progress-huba57241f29873f89f89ab8b27994e71c3",
          itemList: "rockstargames-modules-gtao-career-progress-hubdaec3f5ce63d42cb07e3e724737c8361",
          gtaplus: "rockstargames-modules-gtao-career-progress-hubbd78cfb71ed31029ba4279325166bfab",
          rdo: "rockstargames-modules-gtao-career-progress-huba6244398a800ffddab72c14f717b0eab",
          noImg: "rockstargames-modules-gtao-career-progress-hube88f741af7d5e0529ff4fb6bb82af04f",
          gtao: "rockstargames-modules-gtao-career-progress-hubab60d91453348d2e4c090ef3ebb04347",
          custom: "rockstargames-modules-gtao-career-progress-hubc20e7ba6ceaba3afd37095b172797711",
          yellow: "rockstargames-modules-gtao-career-progress-hubb16672deedfe102b065925cbe0fb931c",
          hotPink: "rockstargames-modules-gtao-career-progress-hubd0d01601de7131d9d6d11321b4299e59",
          red: "rockstargames-modules-gtao-career-progress-hubd1b5397aff94d33b57674b04a3456e03",
          turquoise: "rockstargames-modules-gtao-career-progress-hubd6541b973ce158c8f2fb81483015211f",
          purple: "rockstargames-modules-gtao-career-progress-hubf3e34d902681219d4d8490eb164f7727",
          teal: "rockstargames-modules-gtao-career-progress-huba6c3b6b6a2395eb18a1174294f26f4ea",
          blue: "rockstargames-modules-gtao-career-progress-hubeade6e843c5afd48d3a8959fb0b88222",
          green: "rockstargames-modules-gtao-career-progress-huba82c313f8f85fc6304ddb703be2fa271",
          darkRed: "rockstargames-modules-gtao-career-progress-hubd394c61fdce2bf8894ffb801ee680c2a",
          darkBlue: "rockstargames-modules-gtao-career-progress-hubf1d73cc00a3ab644aab949183a8298a7",
          goldenrod: "rockstargames-modules-gtao-career-progress-hubcdcb0c5076309a329da2a6e857cc3bdf",
          skull: "rockstargames-modules-gtao-career-progress-hubba4bd16bff2fbc40616457007b4a7442"
        },
        {
          sanitize: Ua
        } = _e(),
        Ga = e => {
          let {
            list: a,
            string: s,
            starColor: r,
            style: t,
            className: o,
            game: c,
            noImg: i,
            columns: l,
            mobileColumns: d
          } = e;
          const [m, g] = (0, n.useState)(null);
          return (0, n.useEffect)((() => {
            g(a)
          }), [a]), s || a ? l && m ? (0, u.jsx)("div", {
            className: Ra.grid,
            style: {
              "--ordered-list-grid-column": l,
              "--ordered-list-grid-column-mobile": d ?? l
            },
            children: (0, u.jsx)("ol", {
              style: (0, F.safeStyles)(t),
              className: (0, I.classList)(Ra.itemList, Ra.noImg, Ra[r], Ra[c]),
              children: m.map((e => (0, u.jsx)("li", {
                dangerouslySetInnerHTML: {
                  __html: Ua(e.content)
                }
              }, e.content)))
            })
          }) : (0, u.jsx)("ol", {
            style: (0, F.safeStyles)(t),
            className: (0, I.classList)(Ra.itemList, Ra.custom, i ? Ra.noImg : "", r ? Ra[r] : "", c ? Ra[c] : "", o ?? ""),
            children: a.map((e => (0, u.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: Ua(e?.content ?? e)
              }
            }, e?.content)))
          }) : null
        },
        Ha = (e, a) => {
          const s = e.tiers && e.tiers.every((e => e.isComplete)),
            r = a.tiers && a.tiers.every((e => e.isComplete));
          return s && !r ? 1 : !s && r ? -1 : 0
        },
        Wa = {
          pillBtn: "rockstargames-modules-gtao-career-progress-hube6891f053f06919f1ef0dc72cafe9ae7",
          selected: "rockstargames-modules-gtao-career-progress-hube5cce3088e494e8ddb9b0cf5528697a3",
          packCardTierIndicator: "rockstargames-modules-gtao-career-progress-hubeee874b61946e2a65886d622445e1c38",
          tierIndicator: "rockstargames-modules-gtao-career-progress-hubbf9ed66cb83cf9a38bfc6fbb8e105fb7",
          active: "rockstargames-modules-gtao-career-progress-hubcfa711252c08391d3a0f1ecd8728a61a"
        },
        qa = [{
          isComplete: !1
        }, {
          isComplete: !1
        }, {
          isComplete: !1
        }, {
          isComplete: !1
        }],
        Xa = e => {
          let {
            tiers: a = qa
          } = e;
          return (0, u.jsx)("div", {
            className: Wa.packCardTierIndicator,
            children: a?.map(((e, a) => (0, u.jsx)("div", {
              className: [Wa.tierIndicator, e.isComplete ? Wa.active : ""].join(" ")
            }, a)))
          })
        },
        Ka = {
          pillBtn: "rockstargames-modules-gtao-career-progress-hube2e4b892ddcbdb2e09d3c3599a7e6c56",
          selected: "rockstargames-modules-gtao-career-progress-hubff5c3c023fc12b68c6bf92b560c479b1",
          packCard: "rockstargames-modules-gtao-career-progress-hubd6ef486c5f60d41c5662b092336c1f52",
          packCardImageBox: "rockstargames-modules-gtao-career-progress-hubeb4637cb1c81d1def1fd92252f90d675",
          packCompleted: "rockstargames-modules-gtao-career-progress-hubfcd5bbd0d1e3ebd45cf2cb372468e62c",
          packCardTextBox: "rockstargames-modules-gtao-career-progress-huba124ee1b0383d30157e84108cf10b83b",
          badge: "rockstargames-modules-gtao-career-progress-hubd42fb1fd7d553d75675a251df2a255ee",
          icon: "rockstargames-modules-gtao-career-progress-hubcbc69eda17393995ac9d41a8b4b531e8",
          label: "rockstargames-modules-gtao-career-progress-hubd4649f3812d37e7407503d49dcaaba04"
        },
        Ya = e => {
          let {
            title: a,
            url: s,
            imageUrl: r,
            className: t,
            tiers: o,
            onClick: c,
            badgeContent: i = "Complete",
            imageSize: l = 420,
            imageLoaded: d
          } = e;
          const [g, f] = (0, n.useState)(!1), [p, b] = (0, n.useState)(d);
          (0, n.useEffect)((() => {
            if (o) {
              const e = o.some((e => !e.isComplete));
              f(!e)
            }
          }), [o]);
          const _ = `${r}?im=Resize,height=${l}`;
          return (0, F.usePreloadImg)(_, (() => b(!0))), (0, u.jsx)(m.NavLink, {
            className: [Ka.packCard, t, g ? Ka.packCompleted : ""].join(" "),
            to: s,
            onClick: c,
            children: (0, u.jsxs)("div", {
              className: [Ka.packCardImageBox, p ? Ka.packCardImageLoaded : ""].join(" "),
              style: {
                backgroundImage: `url("${_}")`
              },
              children: [g && (0, u.jsxs)("div", {
                className: Ka.badge,
                children: [(0, u.jsx)("div", {
                  className: Ka.icon
                }), (0, u.jsx)("div", {
                  className: Ka.label,
                  children: i
                })]
              }), (0, u.jsxs)("div", {
                className: Ka.packCardTextBox,
                children: [(0, u.jsx)("h4", {
                  children: a
                }), !g && (0, u.jsx)(Xa, {
                  tiers: o
                })]
              })]
            })
          })
        },
        Qa = {
          pillBtn: "rockstargames-modules-gtao-career-progress-hubc0607ec9e0a3925181496fc555721e0a",
          selected: "rockstargames-modules-gtao-career-progress-hubff76988869bea7d18917be00339b2434",
          packList: "rockstargames-modules-gtao-career-progress-hubffeeb1f272f99c5cb4711e4956c65f7f",
          headerVisible: "rockstargames-modules-gtao-career-progress-hubf6652e03be6ce55bd8f068900093a707",
          packCard: "rockstargames-modules-gtao-career-progress-huba53b37fe7ab10b353eceea86123258a1",
          packGrid: "rockstargames-modules-gtao-career-progress-hubb85775dc95fb3881171ee42e49076cbf"
        },
        Za = e => {
          let {
            isHeaderVisible: a,
            packListItems: s,
            packListClassName: r = Qa.packList,
            packGridClassName: t = Qa.packGrid,
            selectPackCard: o,
            sortFunction: c = Ha
          } = e;
          const i = (0, n.useRef)(null),
            l = [...s].sort(c);
          return (0, u.jsx)("div", {
            className: [r, a ? Qa.headerVisible : ""].join(" "),
            "data-testid": "pack-list",
            children: (0, u.jsx)("div", {
              ref: i,
              className: t,
              "data-testid": "pack-grid",
              children: l.map((e => {
                let {
                  title: a,
                  url: s,
                  imageUrl: r,
                  tiers: t
                } = e;
                return (0, u.jsx)(Ya, {
                  title: a,
                  url: s,
                  className: Qa.packCard,
                  imageUrl: r,
                  tiers: t,
                  onClick: () => o(a, s)
                }, s)
              }))
            })
          })
        },
        Ja = {
          pillBtn: "rockstargames-modules-gtao-career-progress-hube2620ca79db4bb12b74eb4adbcba56ce",
          selected: "rockstargames-modules-gtao-career-progress-hubd429050d220c77a1c9e8631f9b9f4f02",
          navPill: "rockstargames-modules-gtao-career-progress-hubc3ef0af25cfc7d1d0048148984230190"
        },
        es = e => {
          let {
            title: a,
            onClick: s,
            selected: r
          } = e;
          return (0, u.jsx)("button", {
            type: "button",
            onClick: s,
            className: [Ja.navPill, r ? Ja.selected : ""].join(" "),
            children: (0, u.jsx)("div", {
              children: a
            })
          })
        };
      var as;

      function ss() {
        return ss = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var s = arguments[a];
            for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
          }
          return e
        }, ss.apply(this, arguments)
      }
      const rs = e => n.createElement("svg", ss({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none"
      }, e), as || (as = n.createElement("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "m15 18-6-6 6-6"
      })));
      var ts;

      function os() {
        return os = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var s = arguments[a];
            for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
          }
          return e
        }, os.apply(this, arguments)
      }
      const cs = e => n.createElement("svg", os({
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          fill: "none"
        }, e), ts || (ts = n.createElement("path", {
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "m9 18 6-6-6-6"
        }))),
        is = {
          pillBtn: "rockstargames-modules-gtao-career-progress-hubfaa583ebd1250f30b148562c5964fa46",
          selected: "rockstargames-modules-gtao-career-progress-hubf55ea6a51cd0de4060f152d9a070e040",
          navScrollButton: "rockstargames-modules-gtao-career-progress-hubb13f52032a7c6105f881b2a3764d7ba6"
        },
        ns = e => {
          let {
            direction: a,
            className: s,
            ...r
          } = e;
          return (0, u.jsxs)("button", {
            type: "button",
            className: [s, is.navScrollButton].join(" "),
            ...r,
            children: ["left" === a && (0, u.jsx)(rs, {}), "right" === a && (0, u.jsx)(cs, {})]
          })
        },
        ls = (0, l.defineMessages)({
          plm_nav_scroll_left: {
            id: "plm_nav_scroll_left",
            defaultMessage: "Scroll Left"
          },
          plm_nav_scroll_right: {
            id: "plm_nav_scroll_right",
            defaultMessage: "Scroll Right"
          }
        }),
        ds = {
          pillBtn: "rockstargames-modules-gtao-career-progress-huba06d15859ff923574165bb46a5f3d0c9",
          selected: "rockstargames-modules-gtao-career-progress-hubcce410d6b0f750e4332a82432812a32f",
          navMenu: "rockstargames-modules-gtao-career-progress-hubc5752917b36e8045f6765318dcfad3da",
          navMenuMain: "rockstargames-modules-gtao-career-progress-hubc507169b0a2e6c92ea16615a7740d669",
          sectionMenu: "rockstargames-modules-gtao-career-progress-huba874d8cdf964d1c68df9cf8fdd085844",
          sectionItems: "rockstargames-modules-gtao-career-progress-huba3f32f28bb1f1c6a4695c53680da9ed0",
          nextSectionNavButton: "rockstargames-modules-gtao-career-progress-hube26ad999829c4c68eadd9af67ba89033",
          previousSectionNavButton: "rockstargames-modules-gtao-career-progress-hubec50957bce6305ff1dc54a0f7d6a997b",
          previousNavButton: "rockstargames-modules-gtao-career-progress-hubf9530895bd80a161771d5ca70d967f65",
          nextNavButton: "rockstargames-modules-gtao-career-progress-hubfdd74c0f93dcc9be87ca508ab0fe469a",
          navFeaturedItems: "rockstargames-modules-gtao-career-progress-hubc6f0521d960314244895945154ba6c4a"
        },
        ms = e => {
          let {
            navItems: a,
            category: s,
            onNavItemClick: r,
            isOpen: t,
            isHeaderVisible: o,
            menuClass: c = ds.navMenu,
            menuContainerClass: i = ds.navMenuMain,
            menuSectionClass: d = ds.sectionMenu,
            menuPrevBtnClass: g = ds.previousNavButton,
            menuNextBtnClass: f = ds.nextNavButton
          } = e;
          const p = (0, l.useIntl)(),
            {
              track: b
            } = (0, O.useGtmTrack)(),
            {
              pathname: _
            } = (0, m.useLocation)(),
            k = (0, n.useMemo)((() => Math.max(a.findIndex((e => e.name === s)), 0)), [a, _]),
            [h, v] = (0, n.useState)(k),
            [x, y] = (0, n.useState)(!1),
            [N, w] = (0, n.useState)(!1),
            [j, S] = (0, n.useState)(!1),
            C = (0, n.useRef)(null),
            I = (0, n.useCallback)(((e, a) => {
              C.current && C.current.slideTo(e), v(e), M(`Secondary Nav > ${a}`)
            }), [b]),
            T = (0, n.useCallback)(((e, s) => {
              M(`Secondary Nav > ${a[h].title} > ${e}`, s), r()
            }), [a, r, h, b]),
            M = (e, a) => {
              b({
                event: "nav_click",
                event_action: "click",
                event_category: "nav",
                event_label: e,
                text: e.split(">").pop()?.trim() || "",
                link_url: a,
                element_placement: e
              })
            },
            L = (0, n.useCallback)((e => {
              w(e.isEnd), S(e.isBeginning)
            }), []);
          return (0, n.useEffect)((() => {
            C.current && ((C.current.wrapperEl.clientWidth || 0) > (C.current.el.clientWidth || 0) ? (y(!0), C.current.params.centeredSlides = !0, C.current.params.centeredSlidesBounds = !0) : (y(!1), C.current.params.centeredSlides = !1, C.current.params.centeredSlidesBounds = !1))
          }), [C.current?.wrapperEl.clientWidth, C.current?.el.clientWidth]), (0, u.jsx)(Oe.motion.div, {
            className: c,
            initial: {
              height: 0
            },
            animate: {
              height: t ? "100dvh" : 0
            },
            children: (0, u.jsxs)("div", {
              className: i,
              children: [(0, u.jsxs)("div", {
                className: d,
                children: [!j && x && (0, u.jsx)("div", {
                  className: ds.previousSectionNavButton,
                  children: (0, u.jsx)(ns, {
                    direction: "left",
                    className: g,
                    onClick: () => C.current?.slidePrev(),
                    "aria-label": p.formatMessage(ls.plm_nav_scroll_left)
                  })
                }), (0, u.jsx)("div", {
                  className: ds.sectionItems,
                  children: (0, u.jsx)(P.wx, {
                    onBeforeInit: e => C.current = e,
                    onInit: L,
                    className: ds.sectionItems,
                    direction: "horizontal",
                    grabCursor: !0,
                    slidesPerView: "auto",
                    initialSlide: h,
                    onSlideChange: L,
                    onResize: L,
                    children: a.map(((e, a) => {
                      let {
                        title: s
                      } = e;
                      return (0, u.jsx)(P.Ky, {
                        children: (0, u.jsx)(es, {
                          title: s,
                          onClick: () => I(a, s),
                          selected: h === a
                        })
                      }, s)
                    }))
                  })
                }), !N && x && (0, u.jsx)("div", {
                  className: ds.nextSectionNavButton,
                  children: (0, u.jsx)(ns, {
                    direction: "right",
                    className: f,
                    onClick: () => C.current?.slideNext(),
                    "aria-label": p.formatMessage(ls.plm_nav_scroll_right)
                  })
                })]
              }), (0, u.jsx)(Za, {
                isHeaderVisible: o,
                packListItems: a[h]?.subNavItems || [],
                selectPackCard: T
              })]
            })
          })
        },
        gs = "rockstargames-modules-gtao-career-progress-hubc54c374409e11d1429ce99457cbf7441",
        us = e => {
          let {
            children: a,
            data: s,
            onPageUpdate: r,
            page: t,
            className: o
          } = e;
          return (0, u.jsx)("a", {
            href: "#",
            className: t === s.page ? `rockstargames-modules-gtao-career-progress-hubc0eebf4f915ff9f5cc362e22d6d7d976 ${o??""}` : "",
            onClick: e => {
              e.preventDefault(), r(t)
            },
            children: a
          })
        },
        fs = e => {
          let {
            data: a,
            onPageUpdate: s,
            className: r
          } = e;
          if (1 === a.pageCount) return null;
          const t = Array.from(new Array(Math.min(a.pageCount, 8)), ((e, s) => s + Math.min(Math.max(a.pageCount - 8, 1), Math.max(2, a.page - 4))));
          return (0, u.jsxs)("div", {
            className: `rockstargames-modules-gtao-career-progress-huba626faab2a5a03e3466dda5c79960575 ${r??""}`,
            children: [a.pageCount > 8 ? (0, u.jsxs)(u.Fragment, {
              children: [(0, u.jsx)(us, {
                data: a,
                onPageUpdate: s,
                page: 1,
                children: "1"
              }), 2 !== t[0] ? (0, u.jsx)("div", {
                className: gs,
                children: "..."
              }) : ""]
            }) : "", t.map((e => (0, u.jsx)(us, {
              data: a,
              onPageUpdate: s,
              page: e,
              className: r,
              children: e
            }, e))), a.pageCount > 8 ? (0, u.jsxs)(u.Fragment, {
              children: [t.slice(-1)[0] + 1 < a.pageCount ? (0, u.jsx)("div", {
                className: gs,
                children: "..."
              }) : "", (0, u.jsx)(us, {
                data: a,
                onPageUpdate: s,
                page: a.pageCount,
                children: a.pageCount
              })]
            }) : ""]
          })
        };
      var ps = s(77616);
      const bs = e => {
          let {
            children: a
          } = e;
          const {
            parallaxController: s
          } = (0, ps.oZ)();
          return (0, n.useLayoutEffect)((() => {
            if (!s) return;
            const e = setInterval((() => {
              s.update()
            }), 500);
            return () => clearInterval(e)
          }), [s]), a
        },
        _s = {
          parallaxWrapper: "rockstargames-modules-gtao-career-progress-hubdb1ab316d17367d31cf94cdde25e463a",
          large: "rockstargames-modules-gtao-career-progress-hubd520d28c6e4e797aea99f61c89ad2bd8",
          medium: "rockstargames-modules-gtao-career-progress-hubf008365ee42d37e24e606107346b1c83",
          small: "rockstargames-modules-gtao-career-progress-hubcb5937d1a102ac4a66c4e373e6253946"
        },
        ks = e => {
          let {
            scrollAxis: a = "vertical",
            size: s = "",
            style: r = {},
            children: t
          } = e;
          return (0, u.jsx)(ps.qK, {
            scrollAxis: a,
            children: (0, u.jsx)(bs, {
              children: (0, u.jsx)("div", {
                className: (0, I.classList)(_s.parallaxWrapper, _s[s]),
                style: r,
                "data-context": "parallax-wrapper",
                children: t ? t.map(((e, s) => (0, n.cloneElement)(e, {
                  scrollAxis: a,
                  style: {
                    ...e?.props?.style,
                    zIndex: s
                  }
                }))) : (0, u.jsx)("div", {})
              })
            })
          })
        },
        hs = e => {
          let {
            layers: a = [],
            displayClass: s = "",
            style: r = {}
          } = e;
          const t = (0, I.useGenerateCdnSource)();
          if (!a || !a[0]?.image) return null;
          const o = a.map((e => ({
            ...e,
            props: {
              style: {
                ...e.style
              }
            },
            style: void 0,
            image: t(e?.image ?? null)
          })));
          return (0, u.jsx)(ps.Sr, {
            className: (0, I.classList)("rockstargames-modules-gtao-career-progress-hubb8c85703a3c76902e49a61a6afcb81bc", s),
            layers: o,
            style: r
          })
        },
        vs = "rockstargames-modules-gtao-career-progress-hubc4aa8e5d29b433c400796d0c493a9a4d",
        xs = e => {
          let {
            minOffset: a = 0,
            maxOffset: s = 0,
            scrollAxis: r = "vertical",
            displayClass: t = "",
            style: o = {},
            children: c
          } = e;
          return "horizontal" === r ? (0, u.jsx)(ps.mw, {
            x: [a, s],
            className: (0, I.classList)(vs, t),
            styleOuter: o,
            children: c
          }) : (0, u.jsx)(ps.mw, {
            y: [a, s],
            className: (0, I.classList)(vs, t),
            styleOuter: o,
            children: c
          })
        },
        ys = (e, a) => {
          switch (e) {
            case "pc":
              return "small" === a ? {
                src: s(66452),
                alt: "PC"
              } : {
                src: s(80804),
                alt: "PC"
              };
            case "ps4":
              return "small" === a ? {
                src: s(14120),
                alt: "PS4"
              } : {
                src: s(70564),
                alt: "PS4"
              };
            case "ps5":
              return "small" === a ? {
                src: s(33788),
                alt: "PS5"
              } : {
                src: s(62756),
                alt: "PS5"
              };
            case "xboxone":
              return "small" === a ? {
                src: s(37284),
                alt: "Xbox One"
              } : {
                src: s(12064),
                alt: "Xbox One"
              };
            case "xboxsx":
              return "small" === a ? {
                src: s(19916),
                alt: "Xbox Series X|S"
              } : {
                src: s(7748),
                alt: "Xbox Series X|S"
              };
            default:
              return {
                src: "", alt: ""
              }
          }
        },
        Ns = e => s(e < 100 ? 84184 : e > 99 && e < 500 ? 69450 : e > 499 && e < 750 ? 31216 : 85724),
        ws = (0, l.defineMessages)({
          sc_link_activity_feed: {
            id: "sc_link_activity_feed",
            defaultMessage: "Activity Feed"
          },
          sc_link_account: {
            id: "sc_link_account",
            defaultMessage: "Account"
          },
          sc_link_view_my_profile: {
            id: "sc_link_view_my_profile",
            defaultMessage: "View My Profile"
          },
          sc_link_messages: {
            id: "sc_link_messages",
            defaultMessage: "Messages"
          },
          sc_link_game_activation: {
            id: "sc_link_game_activation",
            defaultMessage: "Game Activation"
          },
          sc_link_notifications: {
            id: "sc_link_notifications",
            defaultMessage: "Notifications"
          },
          sc_link_crews: {
            id: "sc_link_crews",
            defaultMessage: "Crews"
          },
          sc_link_friends: {
            id: "sc_link_friends",
            defaultMessage: "Friends"
          },
          sc_link_my_friends: {
            id: "sc_link_my_friends",
            defaultMessage: "My Friends"
          },
          sc_link_import_friends: {
            id: "sc_link_import_friends",
            defaultMessage: "Import Friends"
          },
          sc_link_find_friends: {
            id: "sc_link_find_friends",
            defaultMessage: "Find Friends"
          },
          sc_link_settings: {
            id: "sc_link_settings",
            defaultMessage: "Settings"
          },
          sc_link_help: {
            id: "sc_link_help",
            defaultMessage: "Help"
          },
          sc_link_support: {
            id: "sc_link_support",
            defaultMessage: "Support"
          },
          sc_link_legal: {
            id: "sc_link_legal",
            defaultMessage: "Legal"
          },
          sc_link_privacy_policy: {
            id: "sc_link_privacy_policy",
            defaultMessage: "Privacy Policy"
          },
          sc_link_cookies_policy: {
            id: "sc_link_cookies_policy",
            defaultMessage: "Cookies Policy"
          },
          sc_link_cookies_settings: {
            id: "sc_link_cookies_settings",
            defaultMessage: "Cookies Settings"
          },
          sc_link_do_not_sell_my_information: {
            id: "sc_link_do_not_sell_my_information",
            defaultMessage: "Do Not Sell My Information"
          },
          sc_link_log_out: {
            id: "sc_link_log_out",
            defaultMessage: "Log Out"
          },
          sc_link_sign_in: {
            id: "sc_link_sign_in",
            defaultMessage: "Sign In"
          },
          sc_link_join_social_club: {
            id: "sc_link_join_social_club",
            defaultMessage: "Sign Up"
          },
          profile_selector_switch_character: {
            id: "profile_selector_switch_character",
            defaultMessage: "Switch Character"
          },
          profile_selector_profile_card: {
            id: "profile_selector_profile_card",
            defaultMessage: "Profile Card"
          },
          profile_selector_mugshot: {
            id: "profile_selector_mugshot",
            defaultMessage: "{userName} mugshot"
          },
          profile_selector_rp_icon: {
            id: "profile_selector_rp_icon",
            defaultMessage: "RP Category"
          },
          sc_menu_drag_handle: {
            id: "sc_menu_drag_handle",
            defaultMessage: "Drag Menu Handle"
          },
          sc_menu_toggle: {
            id: "sc_menu_toggle",
            defaultMessage: "Toggle Social Club Menu"
          },
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          }
        }),
        js = {
          pillBtn: "rockstargames-modules-gtao-career-progress-hube4a42eaa9bfb682035e61ac2e2a34515",
          selected: "rockstargames-modules-gtao-career-progress-hubeb889d8958be54a67b790d7529530986",
          scCharacterCard: "rockstargames-modules-gtao-career-progress-hubdf279e92086c0d3c96905b3a91b369ed",
          scAvatar: "rockstargames-modules-gtao-career-progress-hubc1890feda663c93b0f767890394cbdcf",
          scCharNames: "rockstargames-modules-gtao-career-progress-hube79d7f5515617d849d7d13cd4ff048ce",
          scCharacterStats: "rockstargames-modules-gtao-career-progress-hubc721f3aeef9e5ae6b98adca1253e4709",
          scUserName: "rockstargames-modules-gtao-career-progress-hubeabff0cc0139013f5a60fea6f48c56f6",
          scRpLevel: "rockstargames-modules-gtao-career-progress-hubb1f87c58a800ad546200fbf17e029f35",
          scRpIcon: "rockstargames-modules-gtao-career-progress-hubf1e0bcba6214698c490b8201bbd850b7"
        },
        Ss = (0, l.withIntl)((e => {
          let {
            characterData: a
          } = e;
          const r = (0, l.useIntl)(),
            {
              platform: t,
              platformUsername: o,
              mugshotUrl: c,
              stats: i
            } = a,
            [d, m] = (0, n.useState)(c),
            g = ys(t, "large");
          return (0, u.jsxs)("div", {
            className: js.scCharacterCard,
            children: [(0, u.jsx)("div", {
              className: js.scAvatar,
              "data-size": "small",
              children: (0, u.jsx)("img", {
                src: d,
                alt: r.formatMessage(ws.profile_selector_mugshot, {
                  userName: o
                }),
                onError: () => {
                  m(s(71084))
                }
              })
            }), (0, u.jsx)("div", {
              className: js.scCharacterStats,
              children: (0, u.jsxs)("div", {
                className: js.scCharNames,
                children: [(0, u.jsx)("img", {
                  src: g.src,
                  alt: g.alt
                }), (0, u.jsx)("div", {
                  className: js.scUserName,
                  "data-size": "small",
                  children: o
                }), (0, u.jsx)("div", {
                  className: js.scRp,
                  children: (0, u.jsxs)("div", {
                    className: js.scRpLevel,
                    children: [(0, u.jsx)("img", {
                      className: js.scRpIcon,
                      src: Ns(i.overview.rank.value),
                      alt: r.formatMessage(ws.profile_selector_rp_icon)
                    }), (0, u.jsx)("span", {
                      children: a.stats.overview.rank.value
                    })]
                  })
                })]
              })
            })]
          })
        }), va),
        Cs = (0, _.makeVarNamespace)("@rockstargames/components/profile-switcher"),
        Is = Cs("languageSelectorOpenedReactive", !1),
        Ts = e => Is(e),
        Ms = Cs("activeSubNavIdReactive", -1),
        Ls = e => Ms(e),
        Es = Cs("subNavExtraHeightReactive", -1),
        Bs = e => Es(e),
        Ps = Cs("scNavOpenedReactive", !0),
        zs = e => Ps(e),
        Vs = Cs("charListHiddenReactive", !0),
        $s = e => Vs(e),
        Ds = () => {
          const e = (0, _.useReactiveVar)(Is),
            a = (0, _.useReactiveVar)(Ms),
            s = (0, _.useReactiveVar)(Es),
            r = (0, _.useReactiveVar)(Ps),
            t = (0, _.useReactiveVar)(Vs);
          return (0, n.useEffect)((() => {
            t || (e && Ts(!1), r && (zs(!1), Ls(-1)))
          }), [t]), (0, n.useEffect)((() => {
            !e && t && (r || zs(!0))
          }), [e, t]), (0, n.useMemo)((() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: Ts,
            activeSubNavId: a,
            setActiveSubNavId: Ls,
            subNavExtraHeight: s,
            setSubNavExtraHeight: Bs,
            scNavOpened: r,
            setScNavOpened: zs,
            charListHidden: t,
            setCharListHidden: $s
          })), [e, a, s, r, t])
        };
      var As = s(69760),
        Fs = s.n(As),
        Os = s(9860);
      const Rs = {
          event: "account_menu_click",
          element_placement: "Account Menu"
        },
        Us = e => ({
          text: e.formatMessage(ws.sc_link_help),
          target: "_self",
          ga: {
            ...Rs,
            text: ws.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          children: [{
            text: e.formatMessage(ws.sc_link_support),
            location: {
              domain: ha.U.support,
              path: "/"
            },
            target: "_self",
            ga: {
              ...Rs,
              text: ws.sc_link_support.defaultMessage
            },
            dataTestId: "supportLink"
          }, {
            text: e.formatMessage(ws.sc_link_legal),
            location: {
              domain: ha.U.www,
              path: "/legal"
            },
            target: "_self",
            ga: {
              ...Rs,
              text: ws.sc_link_legal.defaultMessage
            },
            dataTestId: "legalLink"
          }, {
            text: e.formatMessage(ws.sc_link_privacy_policy),
            location: {
              domain: ha.U.www,
              path: "/privacy"
            },
            target: "_self",
            ga: {
              ...Rs,
              text: ws.sc_link_privacy_policy.defaultMessage
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: e.formatMessage(ws.sc_link_cookies_policy),
            location: {
              domain: ha.U.www,
              path: "/cookies"
            },
            target: "_self",
            ga: {
              ...Rs,
              text: ws.sc_link_cookies_policy.defaultMessage
            },
            dataTestId: "cookiesPolicyLink"
          }, {
            text: e.formatMessage(ws.sc_link_cookies_settings),
            onClickCallback: e => {
              e.preventDefault(), window.OneTrust?.ToggleInfoDisplay()
            },
            target: "_self",
            ga: {
              ...Rs,
              text: ws.sc_link_cookies_settings.defaultMessage
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: e.formatMessage(ws.sc_link_do_not_sell_my_information),
            location: {
              domain: ha.U.www,
              path: "/ccpa"
            },
            target: "_self",
            ga: {
              ...Rs,
              text: ws.sc_link_do_not_sell_my_information.defaultMessage
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        }),
        Gs = {
          pillBtn: "rockstargames-modules-gtao-career-progress-hubeb30ffefc0c8fef449ca5348a2702622",
          selected: "rockstargames-modules-gtao-career-progress-hubcd058a755e77eeb55cf666fa43fadf75",
          scSubLink: "rockstargames-modules-gtao-career-progress-hubfdaa918acc06706cbe191dedd40974af",
          scLink: "rockstargames-modules-gtao-career-progress-hubcbc80932118c48d8ec14448d8913d068"
        },
        Hs = e => {
          let {
            text: a,
            target: s,
            href: r,
            location: t,
            ga: o,
            dataTestId: c,
            isSubLink: i,
            hasNotifications: n = !1,
            onClickCallback: l = (() => {}),
            tabIndex: d,
            reloadDocument: g = !1
          } = e;
          const {
            track: f
          } = (0, O.useGtmTrack)(), p = (0, ha.c)();
          let b = r;
          t && (b = t.domain === p.currentSite?.site ? t.path : `https://${p.sites[t.domain]}.rockstargames.com${t.path}`);
          const _ = {
            ...o,
            link_url: b
          };
          return (0, u.jsxs)(m.Link, {
            className: i ? Gs.scSubLink : Gs.scLink,
            "data-testid": c || "menuLink",
            title: a,
            to: b,
            target: s,
            rel: "noreferrer",
            reloadDocument: g,
            tabIndex: d,
            onClick: e => {
              f(_), l(e)
            },
            children: [a, n && (0, u.jsx)("span", {
              className: Gs.scLinkNotification
            })]
          })
        },
        Ws = e => {
          let {
            id: a,
            text: s,
            target: r,
            href: t,
            location: o,
            ga: c,
            hasNotifications: i = !1,
            dataTestId: l,
            children: d = [],
            activeSubNavId: m,
            setActiveSubNavId: g,
            setSubNavExtraHeight: f,
            reloadDocument: p = !1,
            onClickCallback: b = (() => {})
          } = e;
          const {
            windowWidth: _,
            windowHeight: k
          } = (0, F.useWindowResize)(), {
            track: h
          } = (0, O.useGtmTrack)(), {
            navOpen: v
          } = (0, O.useRockstarUserState)(), x = (0, n.useRef)(null), [y, N] = (0, n.useState)(0), [w, j] = (0, n.useState)(0), [S, C] = (0, n.useState)(!0);
          return (0, n.useEffect)((() => {
            m !== a && !1 === S && C(!0), m === a && C(!1)
          }), [m]), (0, n.useEffect)((() => {
            if (!x.current) return;
            N(x?.current?.scrollHeight);
            const e = window.getComputedStyle(x.current);
            if (e) {
              let a = 16 * parseInt(e.getPropertyValue("--scSubNav-opened-margin"), 10);
              Number.isNaN(a) && (a = 0), j(a)
            }
          }), [x, _, k]), d.length > 0 ? (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsxs)("button", {
              className: "rockstargames-modules-gtao-career-progress-hubaf10b4154b04475edc11366934576ecd",
              type: "button",
              "data-testid": l || "menuButton",
              title: s,
              tabIndex: v ? 0 : -1,
              "data-children-hidden": S,
              onClick: e => {
                e.stopPropagation(), h(c), m === a ? (g(-1), f(0)) : (g(a), f(y + w + w))
              },
              children: [(0, u.jsx)("span", {
                className: "rockstargames-modules-gtao-career-progress-hubfd722aa4f6d05656ee6e37f952bd13d0",
                children: s
              }), (0, u.jsx)("span", {
                className: "rockstargames-modules-gtao-career-progress-hubbe674f27adc299eab348b49f71429b71"
              })]
            }, s), (0, u.jsx)("nav", {
              className: "rockstargames-modules-gtao-career-progress-hubff1911053a3515534dd825554a85909e",
              ref: x,
              "aria-hidden": S,
              style: {
                height: S ? 0 : `${y}px`
              },
              children: d.map((e => (0, u.jsx)(Hs, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: S || !v ? -1 : 0
              })))
            })]
          }) : (0, u.jsx)(Hs, {
            text: s,
            target: r,
            href: t,
            location: o,
            ga: c,
            hasNotifications: i,
            dataTestId: l,
            isSubLink: !1,
            onClickCallback: b,
            tabIndex: v ? 0 : -1,
            reloadDocument: p
          })
        },
        qs = e => {
          let {
            sc: a
          } = e;
          const {
            windowWidth: s,
            windowHeight: r
          } = (0, F.useWindowResize)(), t = (0, l.useIntl)(), {
            languageSelectorOpened: o,
            setLanguageSelectorOpened: c,
            activeSubNavId: i,
            setActiveSubNavId: d,
            subNavExtraHeight: g,
            setSubNavExtraHeight: f
          } = Ds(), {
            setSelectedCharacterTuple: p,
            navOpen: b
          } = (0, O.useRockstarUserState)(), _ = (0, F.useLocale)(), k = (0, F.toScLocaleString)(_), [h, v] = (0, n.useState)(""), x = (0, m.useLocation)(), y = `${a.login}?returnUrl=${h}&lang=${k}`, N = `${a.signup}&returnUrl=${h}&lang=${k}`, w = (0, n.useMemo)((() => (0, ha.c)()), []), j = (0, n.useMemo)((() => {
            const e = ((e, a, s) => [{
              text: e.formatMessage(ws.sc_link_sign_in),
              href: a,
              ga: {
                event: "cta_login",
                text: ws.sc_link_sign_in.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "loginLink"
            }, {
              text: e.formatMessage(ws.sc_link_join_social_club),
              href: s,
              ga: {
                event: "cta_signup",
                text: ws.sc_link_join_social_club.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "signUpLink"
            }, Us(e)])(t, y, N);
            return e
          }), [t, y, N, w]), [S, C] = (0, n.useState)(0), I = (0, n.createRef)(), T = () => {
            if (I.current) {
              const {
                current: e
              } = I, a = e?.scrollHeight, s = window.getComputedStyle(e);
              if (s) {
                let e = 16 * parseInt(s.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), C(a + e)
              } else C(a)
            }
          };
          return (0, n.useEffect)((() => {
            const e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            v(e)
          }), [x]), (0, n.useEffect)((() => {
            p(!1)
          }), []), (0, n.useEffect)((() => {
            T(), Fs()((() => {
              setTimeout(T, 0)
            }), 300)
          }), [s, r]), (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)("nav", {
              className: "rockstargames-modules-gtao-career-progress-hubb1552e1f97b08ee4337f78fa4486ffac",
              children: (0, u.jsx)("div", {
                className: "rockstargames-modules-gtao-career-progress-hubc5bc9bec611f9f0514176014ce835e1e",
                "data-logged-in": "false",
                ref: I,
                style: {
                  "--scNavWrap-max-height": `${g+S}px`
                },
                children: j.map((e => (0, n.createElement)(Ws, {
                  ...e,
                  activeSubNavId: i,
                  setActiveSubNavId: d,
                  setSubNavExtraHeight: f,
                  key: e.text
                })))
              })
            }), (0, u.jsx)("div", {
              className: "rockstargames-modules-gtao-career-progress-huba6c12c94e8656e88958552d645fe51fe",
              style: {
                visibility: b ? null : "hidden"
              },
              children: (0, u.jsx)(Os.LanguageSelector, {
                theme: "sc-menu",
                languageSelectorOpened: o,
                setLanguageSelectorOpened: e => {
                  d(-1), c(e)
                },
                defaultMessage: "Select a Language"
              })
            })]
          })
        },
        Xs = e => {
          let {
            characterData: a,
            setMobileCardWidth: r,
            tabIndex: t
          } = e;
          const o = (0, l.useIntl)(),
            {
              currentCharId: c,
              setCurrentCharId: i
            } = (0, O.useRockstarUserState)(),
            {
              track: d
            } = (0, O.useGtmTrack)(),
            m = (0, n.createRef)(),
            {
              platform: g,
              platformUsername: f,
              mugshotUrl: p,
              stats: b
            } = a,
            [_, k] = (0, n.useState)(p),
            [h] = (0, n.useState)(a.index),
            v = ys(g, "large"),
            x = c === a.index;
          return (0, n.useEffect)((() => {
            m.current && r && r(m?.current?.offsetWidth)
          }), [m]), (0, u.jsxs)("button", {
            className: "rockstargames-modules-gtao-career-progress-hubd76e785563451a50438064ac368aae4b",
            type: "button",
            "aria-hidden": x,
            onClick: e => {
              e.stopPropagation(), i(h);
              let a = "";
              "pc" === g ? a = "PC" : "ps4" === g ? a = "PS4" : "ps5" === g ? a = "PS5" : "xboxone" === g ? a = "Xbox One" : "xboxsx" === g && (a = "Xbox Series X|S"), d({
                event: "character_selector_select",
                event_action: "select",
                event_category: "character_selector",
                event_label: a,
                position: h
              })
            },
            ref: m,
            tabIndex: t,
            children: [(0, u.jsx)("div", {
              className: "rockstargames-modules-gtao-career-progress-hubbbdf69fe97471593355fc51ec9a6d13a",
              "data-size": "small",
              children: (0, u.jsx)("img", {
                src: _,
                alt: o.formatMessage(ws.profile_selector_mugshot, {
                  userName: f
                }),
                onError: () => {
                  k(s(71084))
                }
              })
            }), (0, u.jsxs)("div", {
              className: "rockstargames-modules-gtao-career-progress-hubc0dc303ef48255c09faa4ad2f4e953e7",
              children: [(0, u.jsxs)("div", {
                className: "rockstargames-modules-gtao-career-progress-hube9fbbbcea66d86dbd58b8548a5f6bea8",
                children: [(0, u.jsx)("img", {
                  src: v.src,
                  alt: v.alt
                }), (0, u.jsx)("div", {
                  className: "rockstargames-modules-gtao-career-progress-hubb3726d8b480695f64fddc723c6f35205",
                  "data-size": "small",
                  children: f
                })]
              }), (0, u.jsx)("div", {
                className: "rockstargames-modules-gtao-career-progress-huba5e3df42966a50f3dd88bbcb57536617",
                children: (0, u.jsxs)("div", {
                  className: "rockstargames-modules-gtao-career-progress-huba6776312350028898320ba59145a39be",
                  children: [(0, u.jsx)("img", {
                    className: "rockstargames-modules-gtao-career-progress-hubb266652910ad34c0e8e097b212a958f0",
                    src: Ns(b.overview.rank.value),
                    alt: o.formatMessage(ws.profile_selector_rp_icon)
                  }), (0, u.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                })
              })]
            })]
          })
        },
        Ks = {
          pillBtn: "rockstargames-modules-gtao-career-progress-hubd9464c4b4d92881abe5578988bd68af7",
          selected: "rockstargames-modules-gtao-career-progress-hubbc0a950bffee0ee9e28213912da51427",
          scProfileDetails: "rockstargames-modules-gtao-career-progress-hubb954455f6ff25f2350e1a0960ba97d3e",
          scAvatar: "rockstargames-modules-gtao-career-progress-hubc15a60de0fc8df4960d84ab96caa8a62",
          scAvatarPlatform: "rockstargames-modules-gtao-career-progress-huba8f66dccf33827dc81107cae3196cfbe",
          scProfileStats: "rockstargames-modules-gtao-career-progress-hubc91f8623fa10edbeba8c79c7d6b26a28",
          scNames: "rockstargames-modules-gtao-career-progress-hubda83fc27513bcac6a8a31eadc89b1c2c",
          scTagsNames: "rockstargames-modules-gtao-career-progress-hubd7ce73d22672e2e2f59e9193c2632531",
          scUserName: "rockstargames-modules-gtao-career-progress-hubd5814836ce152affaa22d226819b5b12",
          scCrewName: "rockstargames-modules-gtao-career-progress-hubb7777817be6d756cc2d1585c1377734c",
          scCrewRankBar: "rockstargames-modules-gtao-career-progress-huba581d240520cf347e5ff5f6a62a36a97",
          scCrewRankBarItem: "rockstargames-modules-gtao-career-progress-hubbdb056c03ef06b99d69426c87cec67c5",
          scProgress: "rockstargames-modules-gtao-career-progress-hubdc3020fbe81a916a8da4719ef052c278",
          scRpLevel: "rockstargames-modules-gtao-career-progress-hubb2ea0e0d19182355913368bf7be016b8",
          scRpIcon: "rockstargames-modules-gtao-career-progress-hubf17a712b43b5234c07dc44f674433cf6",
          scMoney: "rockstargames-modules-gtao-career-progress-hubf14849be516f588e1bc9e252a109c76f",
          scCash: "rockstargames-modules-gtao-career-progress-hubb3e35cdc6557f7c3886700245af352dd",
          scBank: "rockstargames-modules-gtao-career-progress-hubec696aafed90a7a4c69dc53da0a5bb36"
        },
        Ys = e => {
          let {
            character: a,
            platformTag: r
          } = e;
          const {
            data: t
          } = (0, O.useRockstarUser)(), {
            track: o
          } = (0, O.useGtmTrack)(), c = (0, l.useIntl)(), [i, d] = (0, n.useState)([]), [m, g] = (0, n.useState)(null), [f, p] = (0, n.useState)(null), [b, _] = (0, n.useState)(!1), [k, h] = (0, n.useState)(-1), [v, x] = (0, n.useState)([]), [y, N] = (0, n.useState)(0), w = s(71084), [j, S] = (0, n.useState)("0"), [C, I] = (0, n.useState)("0"), T = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), M = () => {
            E((0, u.jsx)("img", {
              src: w,
              alt: c.formatMessage(ws.profile_selector_mugshot, {
                userName: t.nickname
              })
            }))
          }, [L, E] = (0, n.useState)((0, u.jsx)("img", {
            className: Ks.scAvatarImg,
            src: a.mugshotUrl,
            alt: c.formatMessage(ws.profile_selector_mugshot, {
              userName: t.nickname
            }),
            onError: M
          }));
          (0, n.useEffect)((() => {
            d(t.crews ?? [])
          }), [t]), (0, n.useEffect)((() => {
            E((0, u.jsx)("img", {
              src: a.mugshotUrl,
              alt: t.nickname,
              onError: M
            })), S(T(a.stats.overview.bank.value)), I(T(a.stats.overview.cash.value)), N(parseInt(a.stats.overview.rank.value))
          }), [a, t]), (0, n.useEffect)((() => {
            i && i.forEach((e => {
              !0 === e.isPrimary && (g(e.crewTag), p(e.crewColour), h(e.rankOrder), _(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && _(!0))
            }))
          }), [i]), (0, n.useEffect)((() => {
            const e = [];
            if (!b && k > -1)
              for (let a = 5; a > k; a -= 1) e.push((0, u.jsx)("div", {
                className: Ks.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== f ? f : ""
                }
              }, `crewrankbar-${a}`));
            x(e)
          }), [k, b, f]);
          const B = e => {
            e.stopPropagation(), o({
              event: "character_selector_profile_click",
              event_action: "profile_click",
              event_category: "character_selector",
              event_label: r.alt,
              link_url: void 0
            })
          };
          return (0, u.jsxs)("div", {
            className: Ks.scProfileDetails,
            onClick: B,
            onKeyUp: B,
            role: "button",
            tabIndex: -1,
            children: [(0, u.jsxs)("div", {
              className: Ks.scAvatar,
              children: [L, (0, u.jsx)("div", {
                className: Ks.scAvatarPlatform,
                "data-platform": a.platform,
                children: (0, u.jsx)("img", {
                  src: r.src,
                  alt: r.alt
                })
              })]
            }), (0, u.jsxs)("div", {
              className: Ks.scProfileStats,
              children: [(0, u.jsx)("div", {
                className: Ks.scNames,
                children: (0, u.jsxs)("div", {
                  className: Ks.scTagsNames,
                  children: [(0, u.jsx)("span", {
                    className: Ks.scUserName,
                    children: a.platformUsername
                  }), m && (0, u.jsxs)("span", {
                    className: Ks.scCrewName,
                    "data-arrow-tag": b,
                    children: [m, !b && (0, u.jsx)("div", {
                      className: Ks.scCrewRankBar,
                      children: v
                    })]
                  })]
                })
              }), (0, u.jsxs)("div", {
                className: Ks.scProgress,
                children: [(0, u.jsxs)("div", {
                  className: Ks.scRpLevel,
                  children: [(0, u.jsx)("img", {
                    className: Ks.scRpIcon,
                    src: Ns(y),
                    alt: c.formatMessage(ws.profile_selector_rp_icon)
                  }), (0, u.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                }), (0, u.jsxs)("div", {
                  className: Ks.scMoney,
                  children: [(0, u.jsxs)("span", {
                    className: Ks.scCash,
                    children: ["$", C]
                  }), (0, u.jsxs)("span", {
                    className: Ks.scBank,
                    children: ["$", j]
                  })]
                })]
              })]
            })]
          })
        },
        Qs = (e, a) => {
          const [s, r] = (0, n.useState)(0);
          return (0, n.useEffect)((() => {
            if (e.current) {
              const {
                current: s
              } = e, t = s.getBoundingClientRect(), {
                width: o
              } = t;
              let c = o;
              if (!0 === a) {
                const e = window.getComputedStyle(s);
                c += parseInt(e.marginLeft, 10) + parseInt(e.marginRight, 10)
              }
              r(c)
            }
          }), [e]), s
        },
        Zs = e => {
          let {
            dragThreshold: a = 80,
            interactionDelay: s = 1e3,
            mobileGutterWidth: r = 17,
            slideChangeCallback: t = null,
            slideClickCallback: o = null,
            children: c = [],
            disablePager: i = !1,
            disableSwiper: l = !1
          } = e;
          const d = (0, n.createRef)(),
            m = Qs(d, !1),
            [g, f] = (0, n.useState)(!1),
            [p, b] = (0, n.useState)(0),
            [_, k] = (0, n.useState)(0),
            [h, v] = (0, n.useState)([r]),
            [x, y] = (0, n.useState)(h[0]),
            [N, w] = (0, n.useState)(252),
            [j, S] = (0, n.useState)(0),
            [C, I] = (0, n.useState)([]),
            [T, M] = (0, n.useState)([]),
            [L, E] = (0, n.useState)(!1),
            B = e => {
              if (!0 === g || !0 === l) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              k(a)
            },
            P = e => {
              if (!0 === g || 0 === _ || !0 === l) return;
              const s = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                r = s > _ ? 1 : -1,
                o = Math.abs(_ - s);
              o > a ? (r > 0 ? (() => {
                if (!0 === g) return;
                f(!0);
                const e = p - 1 < 0 ? 0 : p - 1;
                b(e), y(h[e]), t && t(e)
              })() : (() => {
                if (!0 === g) return;
                f(!0);
                let e = p + 1 >= h.length ? h.length - 1 : p + 1;
                e < 0 && (e = 0), b(e), y(h[e]), t && t(e)
              })(), k(0)) : y(h[p] + o * r)
            },
            z = () => {
              !0 !== g && !0 !== l && (f(!0), !0 !== g && (y(h[p]), k(0)))
            };
          return (0, n.useEffect)((() => {
            const e = [];
            c.forEach((() => {
              e.push((0, n.createRef)())
            })), I(e)
          }), [c]), (0, n.useEffect)((() => {
            if (C.length < 1) return;
            w(C[0]?.current?.clientWidth || 0);
            const e = C[0]?.current.firstChild,
              a = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              s = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            S(s + a)
          }), [C]), (0, n.useEffect)((() => {
            !1 !== g && setTimeout((() => {
              f(!1)
            }), s)
          }), [g, s]), (0, n.useEffect)((() => {
            v(c.map(((e, a) => (e => {
              let a = 0;
              const s = c.length;
              return 1 === s ? .5 * m - .5 * N - 2 * r + j : (0 === e && (a = r - e * N), e === s - 1 && s > 1 && (a = s * N * -1 + (m - (r - j))), e > 0 && e < s - 1 && (a = e * N * -1 + (.5 * m - .5 * N + .5 * j)), a)
            })(a)))), 1 === c.length ? E(!0) : E(!1)
          }), [d.current, c, m]), (0, n.useEffect)((() => {
            const e = (a = p, c.map(((e, s) => {
              const r = {
                active: !1
              };
              return s === a && (r.active = !0), r
            })));
            var a;
            M(e)
          }), [c, p]), (0, n.useEffect)((() => {
            !0 !== i && !0 !== l || y(h[0])
          }), [l, i, h]), (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)("div", {
              className: "rockstargames-modules-gtao-career-progress-hubab70c3f9c67ecd69d19216a5f4de5049",
              ref: d,
              onTouchStart: B,
              onTouchMove: P,
              onTouchEnd: z,
              onMouseDown: B,
              onMouseMove: P,
              onMouseUp: z,
              onClick: () => {
                null !== o && o(p)
              },
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, u.jsx)("div", {
                className: "rockstargames-modules-gtao-career-progress-huba93be1084a583cafa7f3f97a8ce8a6be",
                "data-interaction-blocked": g,
                "data-single-item": L,
                style: {
                  transform: L ? null : `translateX(${x}px)`
                },
                children: c.map(((e, a) => (0, u.jsx)("div", {
                  className: "rockstargames-modules-gtao-career-progress-hubc013369a930e076d1729d086fb51903e",
                  ref: C[a],
                  children: e
                }, `csItem-${e?.props?.characterData?.mugshotUrl}`)))
              })
            }), T.length > 1 && !1 === i && (0, u.jsx)("div", {
              className: "rockstargames-modules-gtao-career-progress-hubda8cfef07bf44e9a44839e2723ec61bb",
              children: T.map((e => (0, u.jsx)("div", {
                className: "rockstargames-modules-gtao-career-progress-hubfe87ea0922034610a1f6cb3a4edbe195",
                "data-active": e.active
              }, e.mugshotUrl)))
            })]
          })
        },
        Js = {
          pillBtn: "rockstargames-modules-gtao-career-progress-hubaa374e2f7806799cb073de8a9b2a2e7d",
          selected: "rockstargames-modules-gtao-career-progress-hubd402a10393179390abdaf3684a02f1ba",
          scProfile: "rockstargames-modules-gtao-career-progress-hubdde9053261079ebfb5d95975239fe87d",
          scCharacterSelector: "rockstargames-modules-gtao-career-progress-hubc47913b4c686bbbc9a0c8ee6ed7666bf",
          scCharacterSelectBtn: "rockstargames-modules-gtao-career-progress-huba4f9dafe071f5c9a825bf57348835309",
          open: "rockstargames-modules-gtao-career-progress-hubb1f5708c9a0e35681c54a58f04661c1c",
          scCharacterList: "rockstargames-modules-gtao-career-progress-huba1d1104b9df769c9237fa1a06633ffe7",
          scNav: "rockstargames-modules-gtao-career-progress-huba326b0feea8d083ed2265571010d79d3",
          scLanguageSelector: "rockstargames-modules-gtao-career-progress-hubd19713d1362bcd54ff539975adbb2ecc",
          scNavHeader: "rockstargames-modules-gtao-career-progress-hubbb74821846f47bbe5fc0896364efd520",
          scNavWrap: "rockstargames-modules-gtao-career-progress-huba7f1e2d78519eaf099bd43c6ad07abc9"
        },
        er = (0, F.withTranslations)((e => {
          let {
            sc: a,
            charListHidden: s,
            hideCharacterList: r,
            refCharacterListDesktop: t,
            menuPadding: o,
            longCharList: c,
            setLongCharList: i,
            isMobileMode: d,
            setIsMobileMode: g
          } = e;
          const {
            windowWidth: f,
            windowHeight: p
          } = (0, F.useWindowResize)(), b = (0, l.useIntl)(), {
            languageSelectorOpened: k,
            setLanguageSelectorOpened: h,
            activeSubNavId: v,
            setActiveSubNavId: x,
            subNavExtraHeight: y,
            setSubNavExtraHeight: N,
            scNavOpened: w,
            setScNavOpened: j
          } = Ds(), [S, C] = (0, n.useState)(""), I = (0, m.useLocation)(), {
            lsSettings: T
          } = (0, F.useRockstarWebLSSettings)(), {
            track: M
          } = (0, O.useGtmTrack)(), L = (0, _.useRockstarTokenPing)(), {
            data: E,
            loggedIn: B
          } = (0, O.useRockstarUser)(), {
            charactersNeeded: P,
            currentCharId: z,
            hasNotifications: V,
            navOpen: $,
            setCurrentCharId: D,
            setHasNotifications: A,
            setSelectedCharacterTuple: R,
            setUserData: U
          } = (0, O.useRockstarUserState)(), [G, H] = (0, n.useState)(null), [W, q] = (0, n.useState)(null), [X, K] = (0, n.useState)(!1), [Y, Q] = (0, n.useState)(!1), [Z, J] = (0, n.useState)(0), ee = (0, n.createRef)(), ae = Qs(ee, !1), se = (0, n.createRef)(), [re, te] = (0, n.useState)(0), [oe, ce] = (0, n.useState)([]), [ie, ne] = (0, n.useState)(244), le = (0, n.useMemo)((() => (0, ha.c)()), []), de = (0, n.useMemo)((() => ((e, a, s, r, t) => [{
            text: e.formatMessage(ws.sc_link_activity_feed),
            location: {
              domain: ha.U.socialClub,
              path: "/"
            },
            target: "_self",
            ga: {
              ...Rs,
              text: ws.sc_link_activity_feed.defaultMessage
            },
            dataTestId: "activityFeedLink"
          }, {
            text: e.formatMessage(ws.sc_link_account),
            target: "_self",
            dataTestId: "accountButton",
            children: [{
              text: e.formatMessage(ws.sc_link_view_my_profile),
              href: s.profile_link,
              target: "_self",
              ga: {
                ...Rs,
                text: ws.sc_link_view_my_profile.defaultMessage
              },
              dataTestId: "viewMyProfileLink"
            }, {
              text: e.formatMessage(ws.sc_link_messages),
              location: {
                domain: ha.U.socialClub,
                path: "/message"
              },
              target: "_self",
              ga: {
                ...Rs,
                text: ws.sc_link_messages.defaultMessage
              },
              dataTestId: "messagesLink"
            }, {
              text: e.formatMessage(ws.sc_link_game_activation),
              location: {
                domain: ha.U.socialClub,
                path: "/activate"
              },
              target: "_self",
              ga: {
                ...Rs,
                text: ws.sc_link_game_activation.defaultMessage
              },
              dataTestId: "gameActivationLink"
            }]
          }, {
            text: e.formatMessage(ws.sc_link_notifications),
            location: {
              domain: ha.U.socialClub,
              path: "/notifications"
            },
            target: "_self",
            hasNotifications: r,
            ga: {
              ...Rs,
              text: ws.sc_link_notifications.defaultMessage,
              location: {
                domain: ha.U.socialClub,
                path: "/notifications"
              }
            },
            dataTestId: "notificationsLink"
          }, {
            text: e.formatMessage(ws.sc_link_crews),
            location: {
              domain: ha.U.socialClub,
              path: `/member/${s.nickname}/crews`
            },
            target: "_self",
            ga: {
              ...Rs,
              text: ws.sc_link_crews.defaultMessage
            },
            dataTestId: "crewsLink"
          }, {
            text: e.formatMessage(ws.sc_link_friends),
            target: "_self",
            dataTestId: "friendsButton",
            children: [{
              text: e.formatMessage(ws.sc_link_my_friends),
              location: {
                domain: ha.U.socialClub,
                path: `/member/${s.nickname}/friends`
              },
              target: "_self",
              ga: {
                ...Rs,
                text: ws.sc_link_my_friends.defaultMessage
              },
              dataTestId: "myFriendsLink"
            }, {
              text: e.formatMessage(ws.sc_link_import_friends),
              location: {
                domain: ha.U.socialClub,
                path: "/friends/import"
              },
              target: "_self",
              ga: {
                ...Rs,
                text: ws.sc_link_import_friends.defaultMessage
              },
              dataTestId: "importFriendsLink"
            }, {
              text: e.formatMessage(ws.sc_link_find_friends),
              location: {
                domain: ha.U.socialClub,
                path: "/members"
              },
              target: "_self",
              ga: {
                ...Rs,
                text: ws.sc_link_import_friends.defaultMessage
              },
              dataTestId: "findFriendsLink"
            }]
          }, {
            text: e.formatMessage(ws.sc_link_settings),
            location: {
              domain: ha.U.socialClub,
              path: "/settings"
            },
            target: "_self",
            ga: {
              ...Rs,
              text: ws.sc_link_settings.defaultMessage
            },
            dataTestId: "settingsLink"
          }, Us(e), {
            text: e.formatMessage(ws.sc_link_log_out),
            href: `${a.logout}?returnUrl=${t}`,
            target: "_self",
            reloadDocument: !0,
            ga: {
              ...Rs,
              text: ws.sc_link_log_out.defaultMessage
            },
            dataTestId: "logoutButton"
          }])(b, a, E, V, S, window)), [b, a, E, V, S, le]), me = () => {
            Q(o + ie * Z < ae)
          }, ge = () => {
            if (se.current) {
              const {
                current: e
              } = se, a = e?.scrollHeight, s = window.getComputedStyle(e);
              if (s) {
                let e = 16 * parseInt(s.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), te(a + e)
              } else te(a)
            }
          };
          return (0, n.useEffect)((() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            le.currentSite?.site === ha.U.socialClub && (e = encodeURIComponent("/")), C(e)
          }), [I]), (0, n.useEffect)((() => {
            ce(E.characters[P] ?? [])
          }), [E, P]), (0, n.useEffect)((() => {
            E && U(E)
          }), [E]), (0, n.useEffect)((() => {
            const e = E?.characters.gtao;
            if (null !== B && !e.length) return void R(!1);
            if (null == z || !e.length) return;
            const a = e?.[z] ?? e?.[0] ?? null;
            R(!!a?.platform && [a.platform, a.characterSlot])
          }), [z, E, B]), (0, n.useEffect)((() => {
            (async () => {
              if (!E?.id) return;
              const {
                count: e
              } = await (0, F.coreScApiFetch)("notification/count", {
                pingBearer: L
              });
              A(e > 0)
            })()
          }), [E]), (0, n.useEffect)((() => {
            me()
          }), [ie]), (0, n.useEffect)((() => {
            r(!0), g(f < 768), g(f < 768 || p < 649)
          }), [f, p]), (0, n.useEffect)((() => {
            let e = oe.length - 1;
            e < 0 && (e = 0), J(e);
            const a = oe.length > 0 ? oe[z] ?? oe[0] : null;
            if (!a) return;
            const s = null !== a ? ys(a.platform, "large") : null;
            q(s), H(a), oe.length > 1 ? K(!0) : K(!1), i(oe.length - 1 > 3)
          }), [z, oe]), (0, n.useEffect)((() => {
            me()
          }), [Z, d, f, oe]), (0, n.useEffect)((() => {
            ge(), Fs()((() => {
              setTimeout(ge, 0)
            }), 300)
          }), [f, p]), (0, n.useEffect)((() => {
            const e = T?.currentCharId ?? 0;
            e !== z && D(Math.max(0, Math.min(e, oe.length - 1)))
          }), [oe, T]), (0, u.jsxs)(u.Fragment, {
            children: [null !== G && "gtao" === P && (0, u.jsxs)("div", {
              className: Js.scProfile,
              tabIndex: -1,
              "aria-label": b.formatMessage(ws.profile_selector_profile_card),
              children: [(0, u.jsx)(Ys, {
                s: Js,
                character: G,
                platformTag: W
              }), !0 === X && (0, u.jsxs)("div", {
                className: Js.scCharacterSelector,
                children: [(0, u.jsx)("button", {
                  className: Js.scCharacterSelectBtn,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const a = !s;
                    r(a), M({
                      event: a ? "character_selector_close" : "character_selector_open",
                      event_action: !0 === a ? "close" : "open",
                      event_category: "character_selector"
                    })
                  },
                  "data-list-closed": s,
                  children: (0, u.jsx)("span", {
                    children: (0, u.jsx)(l.FormattedMessage, {
                      ...ws.profile_selector_switch_character
                    })
                  })
                }), !1 === d && (0, u.jsx)("div", {
                  className: Js.scCharacterList,
                  "data-long-list": c,
                  "aria-hidden": s,
                  ref: t,
                  children: oe.map((e => (0, u.jsx)(Xs, {
                    tabIndex: s ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: ne
                  }, e.mugshotUrl)))
                }), !0 === d && (0, u.jsx)("div", {
                  className: Js.scCharacterList,
                  "data-single-item": 2 === oe.length,
                  "data-swiper-disabled": Y,
                  "aria-hidden": s,
                  ref: ee,
                  children: (0, u.jsx)(Zs, {
                    interactionDelay: 350,
                    mobileGutterWidth: 17,
                    dragThreshold: 40,
                    slideChangeCallback: () => {
                      M({
                        event: "carousel_swipe",
                        event_category: "carousel",
                        event_action: "swipe",
                        event_label: "character_selector"
                      })
                    },
                    disablePager: Y,
                    disableSwiper: Y,
                    children: oe.filter(((e, a) => a !== z)).map((e => (0, n.createElement)(Xs, {
                      characterData: e,
                      setMobileCardWidth: ne,
                      key: e.mugshotUrl,
                      tabIndex: s ? -1 : 0
                    })))
                  })
                })]
              })]
            }), (0, u.jsxs)("nav", {
              className: Js.scNav,
              "aria-hidden": !$,
              children: [(0, u.jsx)("button", {
                className: Js.scNavHeader,
                type: "button",
                "data-opened": w,
                "data-nav-opened": $,
                tabIndex: w ? -1 : 0,
                onClick: e => {
                  e.stopPropagation(), w || j(!0)
                },
                "data-testid": "playerButton",
                children: (0, u.jsx)("span", {
                  children: E.nickname
                })
              }), (0, u.jsx)("div", {
                className: Js.scNavWrap,
                "data-opened": w,
                "data-logged-in": "true",
                ref: se,
                style: {
                  "--scNavWrap-max-height": `${re+y}px`
                },
                children: de.map(((e, a) => (0, n.createElement)(Ws, {
                  ...e,
                  id: a,
                  activeSubNavId: v,
                  setActiveSubNavId: x,
                  setSubNavExtraHeight: N,
                  key: e.text
                })))
              })]
            }), (0, u.jsx)("div", {
              className: Js.scLanguageSelector,
              style: {
                visibility: $ ? null : "hidden"
              },
              children: (0, u.jsx)(Os.LanguageSelector, {
                theme: "sc-menu",
                languageSelectorOpened: k,
                setLanguageSelectorOpened: h
              })
            })]
          })
        })),
        ar = {
          scMenu: "rockstargames-modules-gtao-career-progress-hubebc4c779cfe9d0b7cfd678424e57370c",
          pillBtn: "rockstargames-modules-gtao-career-progress-hubf333ffbc5b9f9d571b81be0a7235190d",
          selected: "rockstargames-modules-gtao-career-progress-hube3bdabe09c3d1b98b61f3d0484209912",
          navOpen: "rockstargames-modules-gtao-career-progress-hubff929155ac480a9cfa5540dfd3e70ae9",
          dragHandle: "rockstargames-modules-gtao-career-progress-hubba4968108b922dd8165c6e53557f5f2e",
          dragHandleBtn: "rockstargames-modules-gtao-career-progress-hubd362ba3eeee50f90600a413c05761431",
          scOverlay: "rockstargames-modules-gtao-career-progress-hubd8e443f5d0d9171449f5f1042f80aa17"
        },
        sr = (0, l.withIntl)((() => {
          const {
            windowHeight: e
          } = (0, F.useWindowResize)(), a = (0, l.useIntl)(), {
            languageSelectorOpened: r,
            setLanguageSelectorOpened: t,
            setActiveSubNavId: o,
            scNavOpened: c,
            setScNavOpened: i,
            charListHidden: d,
            setCharListHidden: m
          } = Ds(), [g, f] = (0, n.useState)(!1), {
            setBodyIsScrollable: p
          } = (0, F.useBodyScrollable)(), {
            navHidden: b = !1
          } = (0, _.useState)(), {
            loggedIn: k
          } = (0, O.useRockstarUser)(), {
            currentCharId: h,
            navOpen: v,
            setNavOpen: x,
            userData: y
          } = (0, O.useRockstarUserState)(), {
            track: N
          } = (0, O.useGtmTrack)(), [w, j] = (0, n.useState)(!1), S = (0, _.useReactiveVar)(O.scConfig), C = (0, n.useRef)(), [I, T] = (0, n.useState)(0), M = (0, n.createRef)(), [L, E] = (0, n.useState)(!1), [B, P] = (0, n.useState)(0), [z, V] = (0, n.useState)(!1), {
            mutateLSSettings: $,
            lsSettings: D
          } = (0, F.useRockstarWebLSSettings)(), A = (0, n.useCallback)((e => {
            m(e), C.current && !0 === e && (C.current.scrollTop = 0)
          }), [C]);
          return (0, n.useEffect)((() => {
            null !== h && D.currentCharId !== h && $({
              key: "currentCharId",
              value: h
            }), !1 === k ? $({
              key: "currentCharId",
              value: null
            }) : k && !y && N({
              event: "account_synced"
            })
          }), [h, k]), (0, n.useEffect)((() => {
            C.current && (!1 === d && !1 === w && (C.current.style.height = `${C.current.scrollHeight}px`), !0 === d && (C.current.style.height = null))
          }), [d, C, w]), (0, n.useEffect)((() => {
            const e = () => {
                x(!1), A(!0)
              },
              a = a => {
                "Escape" === a.code && e()
              };
            return document.addEventListener("click", e), document.addEventListener("keyup", a), () => {
              document.removeEventListener("click", e), document.removeEventListener("keyup", a)
            }
          }), []), (0, n.useEffect)((() => {
            x(!1), A(!0)
          }), [b]), (0, n.useEffect)((() => {
            if (M.current) {
              const {
                current: e
              } = M, a = window.getComputedStyle(e);
              T(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }), [M]), (0, n.useEffect)((() => {
            p(!L || !v)
          }), [v, L]), (0, n.useEffect)((() => {
            V(window.navigator.userAgent.includes("Mac"))
          }), []), (0, n.useEffect)((() => {
            M.current && f(M?.current?.scrollHeight >= e)
          }), [M, e]), (0, n.useEffect)((() => {
            v || (o(-1), t(!1))
          }), [v]), (0, n.useEffect)((() => {
            r && (d || A(!0), c && (i(!1), o(-1)))
          }), [r]), (0, n.useEffect)((() => {
            c && (r && t(!1), d || A(!0))
          }), [c]), null === k ? null : (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsxs)("div", {
              className: [ar.scMenu, v ? ar.navOpen : ""].join(" "),
              "data-logged-in": k,
              "data-mac-browser": z,
              "data-scroll-mode": g,
              ref: M,
              "aria-hidden": !v,
              children: [(0, u.jsx)("button", {
                className: ar.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  P(a)
                },
                onTouchMove: e => {
                  if (0 === B) return;
                  const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(B - a) > 1 && (P(0), x(!1))
                },
                children: (0, u.jsx)("img", {
                  className: ar.dragHandle,
                  src: s(82708),
                  alt: a.formatMessage(ws.sc_menu_drag_handle)
                })
              }), k ? (0, u.jsx)(er, {
                sc: S,
                charListHidden: d,
                hideCharacterList: A,
                refCharacterListDesktop: C,
                menuPadding: I,
                longCharList: w,
                setLongCharList: j,
                isMobileMode: L,
                setIsMobileMode: E
              }) : (0, u.jsx)(qs, {
                sc: S,
                navOpen: v
              })]
            }), (0, u.jsx)("div", {
              className: [ar.scOverlay, v ? ar.navOpen : ""].join(" "),
              "data-logged-in": k
            })]
          })
        }), va),
        rr = s(71084),
        tr = s(29314),
        or = (0, l.withIntl)((e => {
          let {
            setOtherHeaderDropdowns: a
          } = e;
          const s = (0, l.useIntl)(),
            {
              data: r
            } = (0, O.useRockstarUser)(),
            {
              charactersNeeded: t,
              currentCharId: o,
              navOpen: c,
              setNavOpen: i
            } = (0, O.useRockstarUserState)(),
            {
              track: d
            } = (0, O.useGtmTrack)(),
            [m, g] = (0, n.useState)(null),
            [f, p] = (0, n.useState)(!1),
            [b, _] = (0, n.useState)(null),
            [k, h] = (0, n.useState)(!1),
            [v, x] = (0, n.useState)([]);
          (0, n.useEffect)((() => {
            x(r.characters[t] ?? [])
          }), [r, t]);
          const y = (0, n.useCallback)((e => {
            e.stopPropagation(), i(!c), d({
              event: "account_menu_click",
              element_placement: "Account Menu",
              text: c ? "close" : "open"
            })
          }), [c]);
          return (0, n.useEffect)((() => {
            const e = r?.id ?? !1,
              a = e ? (v?.[o]?.mugshotUrl ?? r?.avatar) || rr : tr,
              s = ys(v?.[o]?.platform, "small") ?? null;
            _(s), g(a), p(e), h(!!v?.[o]?.mugshotUrl)
          }), [r, v, o, rr, tr]), (0, u.jsxs)("button", {
            className: "rockstargames-modules-gtao-career-progress-hubdc519cef2feb621e4715bd3fcdf09791",
            "data-img-set": k,
            "aria-label": s.formatMessage(ws.sc_menu_toggle),
            type: "button",
            onClick: e => y(e),
            "data-testid": "avaterMenuButton",
            children: [(0, u.jsx)("img", {
              className: "rockstargames-modules-gtao-career-progress-hubce75eaa6d65692d36b60d31f3f660ff0",
              src: m || "",
              onError: () => {
                g(rr)
              },
              alt: r?.nickname || ""
            }), f && null !== b && (0, u.jsx)("img", {
              className: "rockstargames-modules-gtao-career-progress-hubaaf21e74a659089f743bb160bdf95046",
              src: b.src,
              alt: b.alt
            }), f && (0, u.jsx)("div", {
              "data-ui-name": "avatar",
              className: "rockstargames-modules-gtao-career-progress-hubcf6b9e7404c64067bdfef9b79e9eb287",
              "data-platform": v?.[o]?.platform ?? null
            })]
          })
        }), va),
        cr = {
          pillBtn: "rockstargames-modules-gtao-career-progress-hubb03cc125f63972f13ae84119af852edc",
          selected: "rockstargames-modules-gtao-career-progress-hubfbcf46d7ef0b32e64b374eee6e3cda3e",
          promoModule: "rockstargames-modules-gtao-career-progress-huba586d11bf592ca821d65db7660518322",
          promoModuleImage: "rockstargames-modules-gtao-career-progress-hubccd749d613ceb73aedb825d77d22cd0b",
          gradient: "rockstargames-modules-gtao-career-progress-hube4f178a3d1e3dfef8b42f73eabd9919e",
          promoModuleContentContainer: "rockstargames-modules-gtao-career-progress-hubd8348a62030f7e2f3c7a53cf67bef0f1",
          left: "rockstargames-modules-gtao-career-progress-hube56a5b7d9a696ea8ca340cc9b67998fc",
          right: "rockstargames-modules-gtao-career-progress-hubc84d09e0c4466d20792d5a9016a00236",
          promoModuleTextContent: "rockstargames-modules-gtao-career-progress-hubbf34746d222495ab8e30cede8de42d71"
        },
        ir = e => {
          let {
            backgroundColor: a,
            brands: s = [],
            description: r = "",
            ctaLabel: t = "Click here",
            ctaLink: o = "https://rockstargames.com",
            gradient: c = !0,
            image: i,
            imageOrientation: l = "right",
            title: d = ""
          } = e;
          const [m, g] = (0, n.useState)(!1), {
            ref: f,
            inView: p
          } = (0, W.useInView)({
            threshold: .6
          }), {
            track: b
          } = (0, O.useGtmTrack)(), _ = {
            "--promo-background": a ?? "var(--black-200)",
            "--promo-image": `url(${(0,I.useGetCdnSource)(i)})` ?? 0,
            "--promo-order": "left" === l ? "row" : "row-reverse"
          };
          return (0, n.useEffect)((() => {
            p && !m && (b({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: "promo module",
              element_placement: "promo module"
            }), g(!0))
          }), [p]), (0, u.jsxs)(Oe.motion.div, {
            className: cr.promoModule,
            style: _,
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
            ref: f,
            children: [(0, u.jsx)("div", {
              className: [cr.promoModuleImage, c ? cr.gradient : "", "left" === l ? cr.left : cr.right].join(" ")
            }), (0, u.jsxs)("div", {
              className: cr.promoModuleContentContainer,
              children: [(0, u.jsx)(j, {
                brands: s,
                className: cr.promoModuleBrands
              }), (0, u.jsxs)("div", {
                className: cr.promoModuleTextContent,
                children: [d && (0, u.jsx)("h3", {
                  children: d
                }), r && (0, u.jsx)("p", {
                  children: r
                })]
              }), t && (0, u.jsx)(E, {
                to: o,
                text: t,
                onClick: () => {
                  b({
                    event: "cta_other",
                    event_category: "cta",
                    event_action: "other",
                    event_label: t,
                    element_placement: "promo module",
                    link_url: o,
                    text: t
                  })
                }
              })]
            })]
          })
        };
      var nr = s(1532);
      const lr = {
          rating: "rockstargames-modules-gtao-career-progress-huba1271bbed316bf567eb67e78d2143808",
          withDescriptors: "rockstargames-modules-gtao-career-progress-hubcba248edc2520d3f1ad195a8495dc1f8",
          withOutDescriptors: "rockstargames-modules-gtao-career-progress-hubff919f7a60b854473b61075a671deb6a",
          text: "rockstargames-modules-gtao-career-progress-hubd47cd2b7c7415cb44cddef00b1c9b35f"
        },
        dr = (0, l.defineMessages)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      (0, F.importAll)(s(52884));
      const mr = oa((0, l.withIntl)((e => {
          let {
            descriptors: a = null,
            footer: r = null,
            href: t,
            img: o = null,
            titleSlug: c = null,
            style: i = {},
            className: d
          } = e;
          const [m, g] = (0, n.useState)(!1), {
            inView: p
          } = (0, W.useInView)({
            threshold: .6
          }), [b, k] = (0, n.useState)({
            img_rating: o,
            rating_descriptors: a,
            rating_footer: r,
            url_rating: t
          }), {
            track: h
          } = (0, O.useGtmTrack)(), v = (0, l.useIntl)(), {
            data: x
          } = (0, _.useQuery)(nr.GameData, {
            variables: {
              titleSlug: c
            },
            skip: !c
          });
          if ((0, n.useEffect)((() => {
              x && k(x?.game)
            }), [x]), (0, n.useEffect)((() => {
              p && !m && b.img_rating && (h({
                event: "page_section_impression",
                event_action: "impression",
                event_category: "page_section",
                event_label: "rating",
                element_placement: "rating"
              }), g(!0))
            }), [p]), !b.img_rating) return null;
          const y = !!b.rating_descriptors;
          return (0, u.jsxs)("div", {
            className: [lr.rating, y ? lr.withDescriptors : lr.withOutDescriptors, d || ""].join(" "),
            style: (0, F.safeStyles)(i),
            children: [(0, u.jsx)(f, {
              to: b.url_rating,
              target: "_blank",
              children: (0, u.jsx)("img", {
                alt: v.formatMessage(dr.components_ratings_link_alt, {
                  rating: (N = b.img_rating, N.replace(/_/g, " ").split(".")[0].toUpperCase())
                }),
                src: s(7e4)(`./${b.img_rating}`)
              })
            }), y && (0, u.jsxs)("div", {
              className: lr.text,
              children: [(0, u.jsx)("p", {
                className: lr.descriptors,
                dangerouslySetInnerHTML: {
                  __html: b?.rating_descriptors?.split(/<br\s?\/?>/).join(", ") || ""
                }
              }), b.rating_footer && (0, u.jsx)("hr", {}), b.rating_footer && (0, u.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: b.rating_footer.replace(/ \//g, ", ")
                }
              })]
            })]
          });
          var N
        }), va)),
        gr = {
          responsiveFlexBox: "rockstargames-modules-gtao-career-progress-hubcef355ba53827b9ec44655c80b247b2e",
          responsiveFlexItem: "rockstargames-modules-gtao-career-progress-huba8f5d10f689c3d40c8378e3ae8a07517",
          responsiveImage: "rockstargames-modules-gtao-career-progress-hubbee8268780b292e5bc0da0b497e2c28f"
        },
        ur = e => {
          let {
            children: a,
            className: s,
            style: r
          } = e;
          return (0, u.jsx)("div", {
            className: [gr.responsiveFlexBox, void 0 !== s ? s : ""].join(" "),
            style: r,
            children: a
          })
        },
        fr = {
          responsiveFlexItem: "rockstargames-modules-gtao-career-progress-hubae579f6183cf73c897e68c8aae5c9d9d"
        },
        pr = e => {
          let {
            children: a,
            className: s,
            style: r
          } = e;
          return (0, u.jsx)("div", {
            className: [fr.responsiveFlexItem, void 0 !== s ? s : ""].join(" "),
            style: r,
            children: a
          })
        },
        br = {
          responsiveGridBox: "rockstargames-modules-gtao-career-progress-huba28c0b7a44e1a2d5fb257161ce36a24f",
          responsiveGridItem: "rockstargames-modules-gtao-career-progress-hubbeddf36313a28976090b5a8b04d2594a"
        },
        _r = e => {
          let {
            children: a,
            cols: s,
            className: r,
            rows: t,
            style: o
          } = e;
          const c = o ? {
            ...o
          } : {};
          return void 0 !== s && (c.gridTemplateColumns = `repeat(${s}, 1fr)`), void 0 !== t && (c.gridTemplateRows = `repeat(${t}, 1fr)`), (0, u.jsx)("div", {
            className: [br.responsiveGridBox, void 0 !== r ? r : ""].join(" "),
            style: c,
            children: a
          })
        },
        kr = {
          responsiveGridBox: "rockstargames-modules-gtao-career-progress-huba39e7c7140ada0ab28537c8c901e816f",
          responsiveGridItem: "rockstargames-modules-gtao-career-progress-hubbe7a0966e2f0457c1172ac9da99020c6"
        },
        hr = e => {
          let {
            children: a,
            className: s,
            style: r
          } = e;
          return (0, u.jsx)("div", {
            className: [kr.responsiveGridItem, void 0 !== s ? s : ""].join(" "),
            style: r,
            children: a
          })
        },
        vr = {
          responsiveImage: "rockstargames-modules-gtao-career-progress-hube31b43dce2e720669fb90bf539d22197"
        },
        xr = e => {
          let {
            src: a,
            className: s = "",
            animate: r,
            ariaLabel: t,
            style: o = {}
          } = e;
          const [c, i] = (0, F.usePreloadImg)(a);
          return c ? (o.backgroundImage = `url(${a})`, (0, u.jsx)("div", {
            role: "img",
            "aria-label": t ?? "R* Games",
            className: [vr.responsiveImage, r ? vr.animateBox : "", s].join(" "),
            style: {
              ...o,
              "--aspect-ratio": i.width / i.height
            }
          })) : null
        },
        yr = {
          responsiveSection: "rockstargames-modules-gtao-career-progress-hubfb7094e43a166c19080ccfe92ed7420d",
          maxWidth: "rockstargames-modules-gtao-career-progress-hubbdc35dbaa55c59ddd2831fd3ac05c5a7"
        },
        Nr = e => {
          let {
            children: a,
            className: s,
            style: r,
            maxWidth: t
          } = e;
          return (0, u.jsx)("section", {
            className: [yr.responsiveSection, void 0 !== s ? s : ""].join(" "),
            style: r,
            children: t ? (0, u.jsx)("div", {
              className: yr.maxWidth,
              children: a
            }) : a
          })
        },
        wr = () => (0, u.jsx)(f, {
          className: "rockstargames-modules-gtao-career-progress-hubba0c20f78999975dfb8d9cff0de44b34",
          alt: "Rockstar Games Home",
          to: "/"
        }),
        jr = () => {
          const {
            pathname: e
          } = (0, m.useLocation)();
          return (0, n.useEffect)((() => {
            window.scrollTo(0, 0)
          }), [e]), null
        },
        Sr = (0, n.forwardRef)(((e, a) => {
          const {
            threshold: s,
            callback: r,
            children: t,
            requireUser: o
          } = e, {
            track: c
          } = (0, O.useGtmTrack)(o), [i, l] = (0, n.useState)(a?.current);
          return (0, n.useEffect)((() => {
            a?.current && l(a.current)
          }), [a]), ((e, a, s) => {
            const [r, t] = (0, n.useState)({
              scrollDepths: e,
              scrollY: 0
            }), {
              scrollDepths: o,
              scrollY: c
            } = r;
            (0, n.useEffect)((() => {
              "undefined" != typeof window && 0 !== window.pageYOffset && t((e => ({
                ...e,
                scrollY: window.pageYOffset
              })))
            }), []), (0, n.useEffect)((() => {
              t({
                scrollDepths: e,
                scrollY: 0
              })
            }), [window.location.pathname]);
            const i = (0, n.useCallback)((() => {
              const e = document.documentElement,
                c = document.body,
                n = s?.scrollTop || e.scrollTop || c.scrollTop,
                l = s?.scrollHeight || e.scrollHeight || c.scrollHeight,
                {
                  clientHeight: d
                } = e,
                m = n / (l - d) * 100;
              if (o) {
                const e = Math.min(...o, l);
                if (m >= e) {
                  const r = o.filter((a => a !== e));
                  0 === r.length && (s ?? window).removeEventListener("scroll", i), a && a({
                    scrollY: e,
                    scrollPercent: m,
                    remainingDepths: r
                  }), t({
                    scrollY: e,
                    scrollDepths: r
                  })
                }
              } else t({
                ...r,
                scrollY: m
              })
            }), [o, s, a]);
            (0, n.useEffect)((() => {
              if ("undefined" == typeof window) return;
              const e = s ?? window;
              return e.addEventListener("scroll", i), () => e.removeEventListener("scroll", i)
            }), [i])
          })(s, (e => {
            let {
              scrollY: a
            } = e;
            c({
              event: "page_scroll",
              event_category: "page_scroll",
              event_action: a,
              scroll_depth: a
            }), "function" == typeof r && r(a)
          }), i), t
        })),
        Cr = (0, F.withTranslations)((e => {
          let {
            t: a
          } = e;
          const [s] = (0, n.useState)(""), r = (0, m.useNavigate)(), t = (0, _.useMutateState)();
          return (0, u.jsxs)("form", {
            action: "#",
            className: "rockstargames-modules-gtao-career-progress-hubb82052ce07e004075e77261c373bfc50",
            onSubmit: e => {
              e.preventDefault(), t({
                navOpen: !1
              }), document.activeElement?.blur(), r(`/search?q=${e.target.q.value}`)
            },
            role: "search",
            children: [(0, u.jsx)("button", {
              type: "submit",
              role: "button",
              title: "Submit"
            }), (0, u.jsx)("input", {
              autoComplete: "off",
              defaultValue: s,
              enterKeyHint: "search",
              name: "q",
              placeholder: a("Search Rockstar Games")
            })]
          })
        })),
        Ir = {
          skeleton: "rockstargames-modules-gtao-career-progress-hubf963a1ae95f7f5ac2c5192c3f357b6dc",
          pulse: "rockstargames-modules-gtao-career-progress-hube00ed88d692bbfc1a301dcfc61a077a9",
          gen9Hero: "rockstargames-modules-gtao-career-progress-hubdb0b80177710d337d93bddb97b8a7dea"
        },
        Tr = e => {
          let {
            skeleton: a
          } = e;
          return a ? (0, u.jsx)("div", {
            className: [Ir.skeleton, Ir[a]].join(" ")
          }) : null
        },
        Mr = (0, l.defineMessages)({
          components_track_list_title: {
            id: "components_track_list_title",
            defaultMessage: "Tracklist"
          }
        }),
        Lr = {
          bodySmall: "rockstargames-modules-gtao-career-progress-hubc048aacaedc7fb642f38c7f163c193e3"
        },
        Er = e => {
          let {
            track: a,
            artist: s
          } = e;
          return (0, u.jsxs)("div", {
            className: Lr.track,
            children: [(0, u.jsx)("p", {
              children: a
            }), (0, u.jsx)("p", {
              className: Lr.bodySmall,
              children: s
            })]
          })
        },
        Br = (0, l.withIntl)((e => {
          let {
            children: a
          } = e;
          return (0, u.jsxs)("div", {
            className: "rockstargames-modules-gtao-career-progress-hube6c19f2cdd68a4352e248a8324383aa2",
            children: [(0, u.jsx)("h4", {
              className: "rockstargames-modules-gtao-career-progress-hubcd3895fbae93ba04f1401487f6e6eddf",
              children: (0, u.jsx)(l.FormattedMessage, {
                ...Mr.components_track_list_title
              })
            }), (0, u.jsx)("div", {
              className: "rockstargames-modules-gtao-career-progress-hubef0cde8b15ded961605237d0e8328a9b",
              children: (0, u.jsx)("div", {
                className: "rockstargames-modules-gtao-career-progress-hubbdd54186db17d27b3daebc4b9d58e09a",
                children: n.Children.map(n.Children.toArray(a), (e => (0, u.jsx)(Er, {
                  ...e?.props
                })))
              })
            })]
          })
        }), va),
        Pr = "rockstargames-modules-gtao-career-progress-hubeca98eb0b5b84a0c9a2e6d952545a2d5",
        zr = "rockstargames-modules-gtao-career-progress-hubd3d0b4ecd3bddba96c73f49fcca34ed8",
        Vr = {
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
        $r = e => {
          let {
            title: a = "thumbnail gallery",
            thumbsPerView: s = 3,
            loop: r = !1,
            navigation: t = !1,
            slideChildren: o = [],
            variants: c = {
              parent: void 0,
              main: void 0,
              thumbs: void 0
            },
            transition: i = {
              parent: void 0,
              main: void 0,
              thumbs: void 0
            }
          } = e;
          const {
            track: l
          } = (0, O.useGtmTrack)(), [d, m] = (0, n.useState)([ra.O4, ra.Hj, ra.eM]), [g, f] = (0, n.useState)(null), [p, b] = (0, n.useState)(null);
          return (0, n.useEffect)((() => {
            const e = [ra.O4, ra.Hj, ra.eM];
            t && e.push(ra._2), m(e)
          }), [t]), (0, n.useEffect)((() => {
            if (!o) return;
            const e = o.map(((e, a) => (0, u.jsx)(P.Ky, {
              children: e
            }, Symbol(a).toString())));
            b(e)
          }), [o]), p ? (0, u.jsxs)(Oe.motion.div, {
            className: "rockstargames-modules-gtao-career-progress-hubd4f245838b94234f21463a08a8112910",
            variants: c.parent,
            transition: i.parent,
            initial: "initial",
            animate: "animate",
            children: [(0, u.jsx)(Oe.motion.div, {
              className: Pr,
              variants: c.main,
              transition: i.main,
              initial: "initial",
              animate: "animate",
              children: (0, u.jsx)(P.wx, {
                loop: r,
                navigation: t,
                pagination: {
                  clickable: !0
                },
                thumbs: {
                  swiper: g
                },
                modules: d,
                breakpoints: Vr,
                className: Pr,
                onSlideNextTransitionEnd: () => {
                  l({
                    event_action: "next",
                    event_category: "carousel",
                    event: "carousel_next",
                    event_label: a?.toLowerCase() ?? ""
                  })
                },
                onSlidePrevTransitionEnd: () => {
                  l({
                    event_action: "previous",
                    event_category: "carousel",
                    event: "carousel_previous",
                    event_label: a?.toLowerCase() ?? ""
                  })
                },
                onSlideChangeTransitionEnd: () => {
                  l({
                    event_action: "swipe",
                    event_category: "carousel",
                    event: "carousel_swipe",
                    event_label: a?.toLowerCase() ?? ""
                  })
                },
                children: p
              })
            }), (0, u.jsx)(Oe.motion.div, {
              className: zr,
              variants: c.thumbs,
              transition: i.thumbs,
              initial: "initial",
              animate: "animate",
              children: (0, u.jsx)(P.wx, {
                threshold: 50,
                onSwiper: f,
                loop: r,
                breakpoints: Vr,
                slidesPerView: s,
                freeMode: !0,
                watchSlidesProgress: !0,
                modules: d,
                className: zr,
                children: p
              })
            })]
          }) : null
        };
      var Dr = s(504);
      const Ar = e => {
          let {
            id: a = null,
            ids: s = null,
            setTitleDataPath: r = null,
            sync: t = !1
          } = e;
          const o = s ?? [a],
            {
              data: c
            } = (0, _.useQuery)(Dr.TinaModulesInfo, {
              variables: {
                ids: o,
                sync: t
              },
              setTitleDataPath: r,
              skip: !o.length
            });
          return c?.tinaModulesInfo ?? null
        },
        Fr = oa((e => {
          let {
            components: a = {},
            id: s = null,
            ids: r = null,
            skeleton: t
          } = e;
          const o = Ar({
            id: s,
            ids: r
          });
          if (!o) return (0, u.jsx)(Tr, {
            skeleton: t
          });
          const c = o?.[0]?.tina;
          return c ? (0, u.jsx)(u.Fragment, {
            children: o.map(((e, s) => {
              let {
                tina: r
              } = e;
              return (0, u.jsx)(I.TinaParser, {
                components: a,
                tina: r,
                componentProps: {
                  tinaModulesInfo: o
                }
              }, s)
            }))
          }) : null
        })),
        Or = e => {
          let {
            children: a,
            style: s,
            theme: r
          } = e;
          const [t, o] = (0, n.useState)(r);
          return (0, n.useEffect)((() => {
            r && o(r)
          }), [r]), (0, u.jsx)("div", {
            className: "rockstargames-modules-gtao-career-progress-huba3cc68ab0d512c3d8835ee9abb7a51c4",
            style: s,
            "data-theme": t,
            children: a
          })
        };
      var Rr = s(19168);
      const Ur = {
          pillBtn: "rockstargames-modules-gtao-career-progress-hubae56f3a5bf16f1160a0cbc040c7611fa",
          selected: "rockstargames-modules-gtao-career-progress-hubd7e34a082f54f22035320df51e8b4ed9",
          userVote: "rockstargames-modules-gtao-career-progress-hubfd538df1ac730062880ff9ca1292dcc4",
          info: "rockstargames-modules-gtao-career-progress-hubdd49c22b2bd842d7e8c11ac45b3a536b",
          voteContent: "rockstargames-modules-gtao-career-progress-hubeb3c4c0d7629a1182cd138d3d2e6e081",
          loggedOutButtons: "rockstargames-modules-gtao-career-progress-hubd00b4195df0f175083f6aa2a7d847d72",
          voteButtons: "rockstargames-modules-gtao-career-progress-hubfdd10a481e3da0f8e9511b6a577052e0",
          downVote: "rockstargames-modules-gtao-career-progress-hubabdbb2656b0080d66eb4d39b7e1eb38d",
          upVote: "rockstargames-modules-gtao-career-progress-hubea25ed07e937e2efdce0b99d076fbbe1",
          voteButtonActive: "rockstargames-modules-gtao-career-progress-hubc31731d09d8118c6a82fe6edb193dc50"
        },
        Gr = e => {
          let {
            description: a,
            foreign_id: s = document.location.pathname,
            foreign_type: r = "url",
            title: t
          } = e;
          const {
            track: o
          } = (0, O.useGtmTrack)(), {
            loggedIn: c
          } = (0, O.useRockstarUser)(), {
            refetch: i
          } = (0, _.useQuery)(Rr.UserGetVote, {
            skip: !0
          }), [l] = (0, _.useMutation)(Rr.UserCastVote), [d, m] = (0, n.useState)(null), g = (0, n.useCallback)((async e => {
            o({
              event_action: d ? "like" : "dislike",
              event_category: "cta",
              event: "cta_" + (e ? "like" : "dislike"),
              event_label: s
            });
            const a = {
                foreign_id: s,
                foreign_type: r,
                vote: e
              },
              t = await l({
                variables: a
              });
            m(t?.data?.userCastVote?.vote ?? null)
          }), [s, r]);
          return (0, n.useEffect)((() => {
            (async () => {
              if (!c || !s || !r) return;
              const e = await i({
                foreign_id: s,
                foreign_type: r
              });
              m(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [s, r, c]), (0, u.jsx)("div", {
            className: Ur.userVote,
            children: (0, u.jsxs)("div", {
              className: Ur.voteContent,
              children: [(0, u.jsxs)("div", {
                className: Ur.info,
                children: [(0, u.jsx)("h3", {
                  children: t
                }), (0, u.jsx)("p", {
                  children: a
                })]
              }), (0, u.jsxs)("div", {
                className: [Ur.voteButtons, c ? "" : Ur.loggedOutButtons].join(" "),
                children: [(0, u.jsx)("button", {
                  onClick: () => g(!0),
                  className: [Ur.upVote, d ? Ur.voteButtonActive : ""].join(" "),
                  type: "button",
                  "aria-label": "Vote up"
                }), (0, u.jsx)("button", {
                  className: [Ur.downVote, !1 === d ? Ur.voteButtonActive : ""].join(" "),
                  onClick: () => g(!1),
                  type: "button",
                  "aria-label": "Vote down"
                })]
              })]
            })
          })
        },
        Hr = {
          carousel: "rockstargames-modules-gtao-career-progress-hubd8e71d378f6d4a968e8ac7d621e5f32a",
          text: "rockstargames-modules-gtao-career-progress-huba3f73d86b98d36a296bf8f621f1c340f",
          info: "rockstargames-modules-gtao-career-progress-hubf46d7fc75c302b1d3f4db01d8572bea8",
          active: "rockstargames-modules-gtao-career-progress-hubd26d1267cc02f841fee8a874d679aebd",
          title: "rockstargames-modules-gtao-career-progress-huba879dfc151f7cf8da6bf5642b51436bb",
          gameTitle: "rockstargames-modules-gtao-career-progress-hubb42d96124219141b4dbb454131b8c37b",
          videoTitle: "rockstargames-modules-gtao-career-progress-hubc5ff8983fae65d6a3d7c741360bd3606",
          cta: "rockstargames-modules-gtao-career-progress-hube25e320fda75ce4076c9fe68b540a2fa",
          track: "rockstargames-modules-gtao-career-progress-hubdd0d39c46df512d3eff8ba48e469af0a",
          disableClick: "rockstargames-modules-gtao-career-progress-hubb169e1b67f64de28605dd5056a740584",
          items: "rockstargames-modules-gtao-career-progress-hubdddc42d4babcaec339a7c1bd04420e6e",
          dragging: "rockstargames-modules-gtao-career-progress-huba7313e3ff4e99b5313f8698890d0dd8c",
          dots: "rockstargames-modules-gtao-career-progress-hube1d7433489996eb9fa890d452ebcb042"
        },
        Wr = (0, F.withLocale)((e => {
          let {
            locale: a,
            t: s,
            videos: r
          } = e;
          const {
            setBodyIsScrollable: t
          } = (0, F.useBodyScrollable)(), [o, c] = (0, n.useState)(0), [i, l] = (0, n.useState)(0), d = (0, n.useRef)(null), m = (0, n.useRef)(null);
          return (0, n.useEffect)((() => {
            if (!d.current || m.current) return;
            const e = new(b())(d.current);
            e.get("press").set({
              time: 0
            }), e.get("tap").set({
              time: 150
            });
            const a = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
              s = () => {
                c(o - 1 < 0 ? 0 : o - 1), l(0)
              },
              i = () => {
                const e = o + 1 >= r.length - 1 ? r.length - 1 : o + 1;
                c(e), l(0)
              },
              n = e => {
                l(e.isFinal ? 0 : e.deltaX), "panleft" !== e.additionalEvent && "panright" !== e.additionalEvent || !m.current?.classList.contains(Hr.dragging) || a() && t(!1)
              },
              g = () => {
                a() && t(!0), l(0)
              },
              u = e => {
                "press" === e.type && d.current?.classList.add(`${Hr.disableClick}`), "tap" === e.type && (d.current?.classList.remove(`${Hr.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
              },
              f = () => {
                a() && t(!0), d.current && d.current.classList.remove(`${Hr.disableClick}`)
              },
              p = () => {
                a() && t(!0)
              };
            return m.current.addEventListener("transitionend", p), e.on("swiperight", s), e.on("swipeleft", i), e.on("pan", n), e.on("panend", g), e.on("press tap", u), e.on("pressup", f), () => {
              e.off("swiperight", s), e.off("swipeleft", i), e.off("pan", n), e.off("panend", g), e.off("press tap", u), e.off("pressup", f), m.current && m.current.removeEventListener("transitionend", p), l(0)
            }
          }), [d.current, o]), (0, u.jsxs)("section", {
            className: Hr.carousel,
            children: [(0, u.jsx)("div", {
              className: Hr.track,
              ref: d,
              children: (0, u.jsx)("div", {
                className: `${Hr.items} ${0!==i?Hr.dragging:""}`,
                ref: m,
                style: {
                  transform: `translateX(calc(-${100*o}% + ${i}px))`
                },
                children: r.map(((e, a) => (0, u.jsx)(f, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through screencap",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  className: o === a ? Hr.active : "",
                  role: "link",
                  title: e.title,
                  tabIndex: o === a ? 0 : -1,
                  children: (0, u.jsx)(Zr, {
                    video: e,
                    size: 1280
                  })
                }, e.id)))
              })
            }), (0, u.jsxs)("footer", {
              children: [(0, u.jsx)("div", {
                className: Hr.text,
                children: r.map(((e, r) => (0, u.jsx)(f, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through footer",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  role: "link",
                  title: e.title,
                  tabIndex: o === r ? 0 : -1,
                  children: (0, u.jsxs)("div", {
                    className: [Hr.info, r === o ? Hr.active : ""].join(" "),
                    children: [(0, u.jsxs)("div", {
                      className: Hr.title,
                      children: [(0, u.jsx)("div", {
                        className: Hr.gameTitle,
                        children: `${e.game.title}${"fr_fr"===a?" ":""}`
                      }), (0, u.jsx)("h2", {
                        className: Hr.videoTitle,
                        children: `${e.title}`
                      })]
                    }), (0, u.jsx)(C, {
                      className: Hr.cta,
                      children: s("Watch Now")
                    })]
                  })
                }, e.id)))
              }), (0, u.jsx)("div", {
                className: Hr.dots,
                children: r.map(((e, a) => (0, u.jsx)("button", {
                  "aria-label": `Slide ${a+1}`,
                  "data-gtm-category": "Marquee",
                  "data-gtm-action": "Dot click",
                  "data-gtm-label": `Dot clicked to ${a}`,
                  onClick: () => c(a),
                  className: o === a ? Hr.active : "",
                  type: "button"
                }, e.id)))
              })]
            })]
          })
        })),
        qr = (0, l.defineMessages)({
          next_button_label: {
            id: "next_button_label",
            defaultMessage: "Next video page"
          },
          previous_button_label: {
            id: "previous_button_label",
            defaultMessage: "Previous video page"
          },
          disabled_label: {
            id: "disabled_label",
            defaultMessage: "Disabled"
          }
        }),
        Xr = {
          videoList: "rockstargames-modules-gtao-career-progress-huba77794780421c410f7ea55ed11ae6340",
          sectionHeader: "rockstargames-modules-gtao-career-progress-hubed556e2220733d99eae5df36ba41f9c7",
          arrowNav: "rockstargames-modules-gtao-career-progress-hubffeb6a2e829d49f94fea4ee7f5a0d2c8",
          items: "rockstargames-modules-gtao-career-progress-hubffe2263cdad39631ef304714ba89465d",
          trackWrapper: "rockstargames-modules-gtao-career-progress-hubcbdef484a85e8f352a06609b394d4da7",
          track: "rockstargames-modules-gtao-career-progress-hubf3f263effe27f3c21f2ab822b9ee5dcf",
          dragging: "rockstargames-modules-gtao-career-progress-hubc20488bcdf3f23bdf0c6c5b283ae08f4",
          arrow: "rockstargames-modules-gtao-career-progress-hubc8012415449630a832011f490b9d2b72",
          previous: "rockstargames-modules-gtao-career-progress-hubf30d899a31937a4cf395643951224469",
          next: "rockstargames-modules-gtao-career-progress-hubd9d5a85633fc0f0b7f98219d735e6e05",
          disabled: "rockstargames-modules-gtao-career-progress-hubc806076a1e3e23c77528ee12e32771a3"
        },
        Kr = (0, l.withIntl)((e => {
          let {
            vids: a,
            games: s,
            title: r,
            gameTitleNecessary: t
          } = e;
          const o = (0, l.useIntl)(),
            c = void 0 !== s ? "games" : "videos",
            i = "videos" === c ? a : s.results,
            d = (0, n.useRef)(null),
            [m, g] = (0, n.useState)(0),
            [f, p] = (0, n.useState)(0),
            _ = e => {
              const a = Math.ceil(i.length / m);
              let s = e;
              s < 0 ? s = 0 : s >= a - 1 && (s = a - 1), p(s)
            },
            [k, h] = (0, n.useState)(0);
          let v;
          return (0, n.useEffect)((() => {
            const e = () => {
              const e = e => window.matchMedia(`(max-width: ${e})`).matches;
              let a = 4;
              e("768px") ? a = 1 : e("990px") || e("1440px") ? a = 2 : e("1920px") && (a = 3), g(a)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [m]), (0, n.useEffect)((() => {
            if (d.current) {
              const e = new(b())(d.current),
                a = () => {
                  _(f - 1), h(0)
                },
                s = () => {
                  _(f + 1), h(0)
                },
                r = e => {
                  h(e.isFinal ? 0 : e.deltaX)
                },
                t = () => {
                  h(0)
                };
              return e.on("swiperight", a), e.on("swipeleft", s), e.on("pan", r), e.on("panend", t), () => {
                e.off("swiperight", a), e.off("swipeleft", s), e.off("pan", r), e.off("panend", t), h(0)
              }
            }
            return {}
          }), [d.current, f]), v = "games" === c ? (0, u.jsx)(u.Fragment, {
            children: s.results.map((e => (0, u.jsx)(ea, {
              game: e,
              dontOverrideTo: !0,
              to: `/videos?type=game&gameId=${e.id}`
            }, e.id)))
          }) : (0, u.jsx)(u.Fragment, {
            children: a.map((e => (0, u.jsx)(Jr, {
              video: e,
              gameTitleNecessary: t
            }, e.id)))
          }), (0, u.jsxs)("section", {
            className: Xr.videoList,
            children: [(0, u.jsxs)("h3", {
              className: Xr.sectionHeader,
              children: [r, (0, u.jsxs)("div", {
                className: Xr.arrowNav,
                children: [(0, u.jsx)("button", {
                  className: [Xr.arrow, Xr.previous, 0 === f ? Xr.disabled : ""].join(" "),
                  onClick: () => _(f - 1),
                  type: "button",
                  "aria-label": `${0===f?o.formatMessage(qr.disabled_label)+", ":""}${o.formatMessage(qr.previous_button_label)}`
                }), (0, u.jsx)("button", {
                  className: [Xr.arrow, Xr.next, f === Math.ceil(i.length / m) - 1 ? Xr.disabled : ""].join(" "),
                  onClick: () => _(f + 1),
                  type: "button",
                  "aria-label": `${f===Math.ceil(i.length/m)-1?o.formatMessage(qr.disabled_label)+", ":""}${o.formatMessage(qr.next_button_label)}`
                })]
              })]
            }), (0, u.jsx)("div", {
              className: Xr.items,
              children: (0, u.jsx)("div", {
                className: Xr.trackWrapper,
                children: (0, u.jsx)("div", {
                  className: [Xr.track, 0 !== k ? Xr.dragging : ""].join(" "),
                  ref: d,
                  style: {
                    transform: `translateX(calc(-${100*f}% + ${k}px - (var(--standard-grid-gap) * ${f}))`,
                    gridAutoColumns: `calc(100 / ${m} * 1% - calc(var(--standard-grid-gap) * (${m-1}/${m}))`
                  },
                  children: v
                })
              })
            })]
          })
        }), va),
        Yr = (0, F.withTranslations)((e => {
          let {
            error: a,
            t: s,
            domain: r = ""
          } = e;
          console.error({
            error: a
          });
          let t = a?.message ?? s("error-404-new");
          t = s("error-404-new");
          const o = a?.code ?? 398,
            c = (0, n.useRef)(null);
          return (0, n.useEffect)((() => {
            c && c?.current && c.current.focus()
          }), [c]), (0, u.jsxs)("div", {
            className: "rockstargames-modules-gtao-career-progress-hubd988ce20c420c26fc5e455279bf94cb9",
            children: [(0, u.jsx)("h3", {
              tabIndex: -1,
              ref: c,
              children: `${t} (${o})`
            }), (0, u.jsx)(f, {
              to: "/",
              children: s("Home")
            }), "clr" !== r && (0, u.jsx)(Cr, {})]
          })
        })),
        Qr = {
          videoPreview: "rockstargames-modules-gtao-career-progress-hubc6739cc628fda235abe2bafeb30ad7cf",
          card: "rockstargames-modules-gtao-career-progress-hubec6e68ffa1188155be202dfef3f92829",
          info: "rockstargames-modules-gtao-career-progress-hubab8da127fbcdb98f874bc3f1377669a2",
          title: "rockstargames-modules-gtao-career-progress-hube84fa4b2b140994c96a13607410d30a3",
          screencap: "rockstargames-modules-gtao-career-progress-huba322c3d2275cedd594a3b17800154066",
          screencapLoaded: "rockstargames-modules-gtao-career-progress-hubf68c57f5459778024e5a98918ae61ab2",
          gameTitle: "rockstargames-modules-gtao-career-progress-hubdebff452a4923aded7de826c081bab5d"
        },
        Zr = e => {
          let {
            video: a,
            size: s = 640
          } = e;
          const r = `${a.screencap}?im=Resize=${s}`,
            [t] = (0, F.usePreloadImg)(r);
          return (0, u.jsx)("div", {
            className: [Qr.screencap, t ? Qr.screencapLoaded : ""].join(" "),
            style: {
              background: `url(${r}) center/cover`
            }
          })
        },
        Jr = e => {
          let {
            gameTitleNecessary: a = !0,
            openInNewWindow: s = !1,
            video: r,
            size: t,
            toExplicit: o
          } = e;
          const c = o ?? `/videos/${r.id}`,
            i = {
              className: Qr.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": c
            },
            n = (0, u.jsxs)("div", {
              className: Qr.card,
              children: [(0, u.jsx)(Zr, {
                video: r,
                size: t
              }), (0, u.jsxs)("div", {
                className: Qr.info,
                children: [a ? (0, u.jsx)("div", {
                  className: Qr.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: r.game.title
                  }
                }) : "", (0, u.jsx)("h5", {
                  className: Qr.title,
                  dangerouslySetInnerHTML: {
                    __html: r.title
                  }
                })]
              })]
            });
          return s ? (0, u.jsx)("a", {
            href: c,
            target: "_blank",
            ...i,
            children: n
          }) : (0, u.jsx)(f, {
            to: c,
            ...i,
            children: n
          })
        };
      class et extends n.Component {
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
          return {
            error: {
              message: e?.message ? e.toString() : "Something has gone horribly awry.",
              code: e?.code ?? 399
            }
          }
        }
        render() {
          return null !== this.state.error.code ? (0, u.jsx)(Yr, {
            error: this.state.error
          }) : this.props.children
        }
      }
      const at = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return function(s) {
            return (0, u.jsx)(et, {
              header: a,
              children: (0, u.jsx)(e, {
                ...s
              })
            })
          }
        },
        st = (0, n.forwardRef)(((e, a) => {
          const {
            children: s,
            tag: r = "div"
          } = e, t = Oe.m[r];
          return (0, u.jsx)(Oe.LazyMotion, {
            features: Oe.domAnimation,
            children: (0, u.jsx)(t, {
              ref: a,
              ...e,
              children: s
            })
          })
        })),
        rt = {
          visible: {
            opacity: 1
          },
          hidden: {
            opacity: 0
          }
        },
        tt = {
          ease: "easeIn",
          duration: .4
        },
        ot = e => {
          let {
            children: a
          } = e;
          return (0, u.jsx)(Oe.motion.div, Object.assign({
            className: "rockstargames-modules-gtao-career-progress-hubf0ee4e641f1ac92151be887c9ebb8392",
            variants: rt,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: tt
          }, {
            children: a
          }))
        },
        ct = e => a => (0, u.jsx)(ot, {
          children: (0, u.jsx)(e, Object.assign({}, a))
        }),
        it = {
          visible: {
            opacity: 1,
            y: 0
          },
          hidden: {
            opacity: 0,
            y: 40
          }
        },
        nt = {
          ease: "easeIn",
          duration: .75
        },
        lt = e => {
          let {
            children: a
          } = e;
          return (0, u.jsx)(Oe.motion.div, {
            className: "rockstargames-modules-gtao-career-progress-huba479a10c5475b17a0564b60fecf98c8b",
            variants: it,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: nt,
            children: a
          })
        },
        dt = e => a => (0, u.jsx)(lt, {
          children: (0, u.jsx)(e, {
            ...a
          })
        }),
        mt = {
          cardOpen: {
            ease: [.77, 0, .175, 1],
            duration: .5
          },
          afterCardOpen: {
            ease: "easeIn",
            duration: .3,
            delay: .5
          },
          fade: {
            ease: "easeIn",
            duration: .3
          },
          instantFade: {
            duration: .05
          }
        },
        gt = {
          plainCard: {
            expanded: {
              initial: {
                gridTemplateColumns: "var(--grid-template-columns-initial)",
                "--card-image-aspect-ratio": "var(--card-image-aspect-ratio-initial)",
                overflow: "visible",
                "--product-card-pricing-info-opacity": 1,
                "--product-card-pricing-info-padding": "var(--padding-sm)"
              },
              animate: {
                gridTemplateColumns: "var(--grid-template-columns-animate)",
                "--card-image-aspect-ratio": "var(--card-image-aspect-ratio-animate)",
                "--product-card-pricing-info-height": 0,
                "--product-card-pricing-info-opacity": 0,
                "--product-card-pricing-info-padding": 0,
                transitionEnd: {
                  overflow: "auto",
                  marginTop: "calc(var(--modal-padding) * -1)",
                  paddingTop: "var(--modal-padding)",
                  height: "calc(100% + var(--modal-padding))"
                }
              },
              hovered: {}
            },
            expandedContents: {
              initial: {
                opacity: 0,
                display: "var(--card-expanded-contents-display-initial)"
              },
              animate: {
                opacity: 1,
                display: "grid"
              }
            }
          },
          cardWithImageGallery: {
            expanded: {
              initial: {
                overflow: "visible",
                gridTemplateColumns: "var(--grid-template-columns-initial)",
                "--card-image-aspect-ratio": "var(--card-image-aspect-ratio-initial)",
                "--gallery-border": "0 solid transparent"
              },
              animate: {
                gridTemplateColumns: "var(--grid-template-columns-animate)",
                "--card-image-aspect-ratio": "var(--card-image-aspect-ratio-animate)",
                transitionEnd: {
                  overflow: "auto",
                  marginTop: "calc(var(--modal-padding) * -1)",
                  paddingTop: "var(--modal-padding)",
                  height: "calc(100% + var(--modal-padding))"
                }
              },
              hovered: {}
            },
            expandedContents: {
              initial: {
                opacity: 0,
                display: "none"
              },
              animate: {
                opacity: 1,
                display: "grid"
              }
            },
            gallery: {
              parent: {
                initial: {
                  gridGap: 0,
                  background: "var(--black-100)"
                },
                animate: {
                  gridGap: "var(--gallery-grid-gap)",
                  background: "var(--black-200)",
                  transitionEnd: {
                    pointerEvents: "all"
                  }
                }
              },
              main: {
                initial: {
                  "--gallery-aspect-ratio": "var(--gallery-aspect-ratio-initial)",
                  "--swiper-pagination-opacity": 0
                },
                animate: {
                  "--gallery-aspect-ratio": "var(--gallery-aspect-ratio-animate)",
                  "--swiper-pagination-opacity": 1
                }
              },
              thumbs: {
                initial: {
                  "--thumb-aspect-ratio": "1/0"
                },
                animate: {
                  "--thumb-aspect-ratio": "1/1"
                }
              }
            }
          },
          imageMask: {
            expanded: {
              initial: {
                borderRadius: "var(--border-radius-md)"
              },
              animate: {
                borderRadius: "var(--card-expanded-border-radius)"
              }
            }
          },
          foreground: {
            expanded: {
              initial: {
                width: "100%"
              },
              animate: {
                width: "var(--card-foreground-layer-width-animate)"
              }
            }
          },
          logo: {
            expanded: {
              initial: {
                "--card-logo-top-initial": "2rem",
                "--card-logo-top-animate": "0%"
              },
              animate: {
                "--card-logo-top-initial": "0rem",
                "--card-logo-top-animate": "50%",
                "--card-logo-marginTop-animate": "calc(var(--card-logo-height) * -1)",
                "--card-logo-y-animate-mobile": "-20%",
                height: "calc(var(--card-logo-height) * 2)",
                x: "var(--card-logo-animate-x)"
              },
              hovered: {}
            }
          },
          fade: {
            in: {
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              }
            },
            out: {
              initial: {
                opacity: 1
              },
              animate: {
                opacity: 0
              }
            }
          }
        },
        ut = function() {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "collapsed";
          return gt[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "imageMask"][e]
        };
      var ft = s(80544);
      const pt = JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[300,300,0]},"a":{"k":[0,0,0]},"s":{"k":[244,244,100]}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"k":[100,100]},"p":{"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"tm","s":{"k":[{"i":{"x":[0.439],"y":[1.016]},"o":{"x":[0.561],"y":[0.015]},"n":["0p439_1p016_0p561_0p015"],"t":5,"s":[100],"e":[0]},{"t":33.0000013441176}],"ix":1},"e":{"k":[{"i":{"x":[0.439],"y":[1.017]},"o":{"x":[0.561],"y":[0.016]},"n":["0p439_1p017_0p561_0p016"],"t":0,"s":[100],"e":[0]},{"t":30.0000012219251}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"},{"ty":"st","fillEnabled":true,"c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":16},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"}],"ip":0,"op":900.000036657751,"st":0,"bm":0,"sr":1}],"v":"4.5.3","ddd":0,"ip":1.00000004073083,"op":33.0000013441175,"fr":29.9700012207031,"w":600,"h":600}'),
        bt = JSON.parse('{"v":"5.7.3","fr":60,"ip":0,"op":64,"w":300,"h":300,"nm":"Dot_Loading","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"center","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":10,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":22,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":34,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.667,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"right","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":5,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":17,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":29,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.333,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":12,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":24,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0}],"markers":[]}'),
        _t = {
          SPINNING: "spinning",
          THREE_DOTS: "threeDots"
        },
        kt = e => {
          let a, {
            type: s = _t.SPINNING
          } = e;
          switch (s) {
            case _t.THREE_DOTS:
              a = bt;
              break;
            case _t.SPINNING:
            default:
              a = pt
          }
          return (0, u.jsx)(ft.c, {
            options: {
              loop: !0,
              autoplay: !0,
              animationData: a,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
              }
            },
            height: 50,
            width: 50
          })
        }
    },
    53592: (e, a, s) => {
      "use strict";
      s.d(a, {
        U: () => r,
        c: () => o
      });
      const r = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store"
        },
        t = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        o = () => {
          let e;
          const {
            location: a
          } = window, s = a.hostname.substring(0, a.hostname.indexOf(".rockstargames.com")), r = t.findIndex((a => Object.entries(a.sites).findIndex((a => {
            let [r, t] = a;
            return t === s && (e = {
              site: r,
              subDomain: t
            }, !0)
          })) >= 0)), o = t[r >= 0 ? r : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...o,
            currentSite: e
          }
        }
    },
    90048: e => {
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

      function s(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var r = e.type;
          "NamedType" === r.kind && a.add(r.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          s(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          s(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          s(e, a)
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
      var r = {};

      function t(e, a) {
        for (var s = 0; s < e.definitions.length; s++) {
          var r = e.definitions[s];
          if (r.name && r.name.value == a) return r
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), r[e.name.value] = a
        }
      })), e.exports = a, e.exports.GetAudioAlbum = function(e, a) {
        var s = {
          kind: e.kind,
          definitions: [t(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var o = r[a] || new Set,
          c = new Set,
          i = new Set;
        for (o.forEach((function(e) {
            i.add(e)
          })); i.size > 0;) {
          var n = i;
          i = new Set, n.forEach((function(e) {
            c.has(e) || (c.add(e), (r[e] || new Set).forEach((function(e) {
              i.add(e)
            })))
          }))
        }
        return c.forEach((function(a) {
          var r = t(e, a);
          r && s.definitions.push(r)
        })), s
      }(a, "GetAudioAlbum")
    },
    58652: e => {
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

      function s(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var r = e.type;
          "NamedType" === r.kind && a.add(r.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          s(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          s(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          s(e, a)
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
      var r = {};

      function t(e, a) {
        for (var s = 0; s < e.definitions.length; s++) {
          var r = e.definitions[s];
          if (r.name && r.name.value == a) return r
        }
      }

      function o(e, a) {
        var s = {
          kind: e.kind,
          definitions: [t(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var o = r[a] || new Set,
          c = new Set,
          i = new Set;
        for (o.forEach((function(e) {
            i.add(e)
          })); i.size > 0;) {
          var n = i;
          i = new Set, n.forEach((function(e) {
            c.has(e) || (c.add(e), (r[e] || new Set).forEach((function(e) {
              i.add(e)
            })))
          }))
        }
        return c.forEach((function(a) {
          var r = t(e, a);
          r && s.definitions.push(r)
        })), s
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), r[e.name.value] = a
        }
      })), e.exports = a, e.exports.UserGetVote = o(a, "UserGetVote"), e.exports.UserCastVote = o(a, "UserCastVote")
    },
    504: e => {
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
                value: "types"
              }
            },
            type: {
              kind: "ListType",
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
                  value: "types"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "types"
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
                        value: "type"
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
            value: "TinaModulesInfo"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "ids"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String"
                  }
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
                value: "sync"
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
              value: !1
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
                value: "tinaModulesInfo"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "ids"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "ids"
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
                  value: "cache"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "cache"
                  }
                }
              }],
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
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title_doc"
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
                    value: "sync_hash"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "to"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "visible"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "children"
                  },
                  arguments: [],
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
                        value: "id_hash"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "to"
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
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "_translations"
                          },
                          arguments: [],
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
                                  value: "sync"
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
                                value: "locale"
                              },
                              arguments: [],
                              directives: []
                            }, {
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
          end: 963
        }
      };

      function s(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var r = e.type;
          "NamedType" === r.kind && a.add(r.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          s(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          s(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          s(e, a)
        }))
      }
      a.loc.source = {
        body: "query TinaModulesList($types: [String], $locale: String!) {\n    tinaModulesList(types: $types, locale: $locale) {\n        results {\n            id_hash\n            id\n            title\n            type\n        }\n    }\n}\n\nquery TinaModulesInfo(\n    $ids: [String]!\n    $locale: String!\n    $sync: Boolean = false\n    $cache: Boolean = false\n) {\n    tinaModulesInfo(ids: $ids, locale: $locale, cache: $cache) {\n        id: id_hash\n        title\n        title_doc\n        type\n        sync_hash\n        to\n        visible\n        children {\n            title\n            id_hash\n            to\n            tina {\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n        tina {\n            payload\n            variables {\n                keys\n                _translations @include(if: $sync) {\n                    locale\n                    keys\n                }\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var r = {};

      function t(e, a) {
        for (var s = 0; s < e.definitions.length; s++) {
          var r = e.definitions[s];
          if (r.name && r.name.value == a) return r
        }
      }

      function o(e, a) {
        var s = {
          kind: e.kind,
          definitions: [t(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var o = r[a] || new Set,
          c = new Set,
          i = new Set;
        for (o.forEach((function(e) {
            i.add(e)
          })); i.size > 0;) {
          var n = i;
          i = new Set, n.forEach((function(e) {
            c.has(e) || (c.add(e), (r[e] || new Set).forEach((function(e) {
              i.add(e)
            })))
          }))
        }
        return c.forEach((function(a) {
          var r = t(e, a);
          r && s.definitions.push(r)
        })), s
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), r[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesList = o(a, "TinaModulesList"), e.exports.TinaModulesInfo = o(a, "TinaModulesInfo")
    },
    19168: e => {
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

      function s(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var r = e.type;
          "NamedType" === r.kind && a.add(r.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          s(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          s(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          s(e, a)
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
      var r = {};

      function t(e, a) {
        for (var s = 0; s < e.definitions.length; s++) {
          var r = e.definitions[s];
          if (r.name && r.name.value == a) return r
        }
      }

      function o(e, a) {
        var s = {
          kind: e.kind,
          definitions: [t(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var o = r[a] || new Set,
          c = new Set,
          i = new Set;
        for (o.forEach((function(e) {
            i.add(e)
          })); i.size > 0;) {
          var n = i;
          i = new Set, n.forEach((function(e) {
            c.has(e) || (c.add(e), (r[e] || new Set).forEach((function(e) {
              i.add(e)
            })))
          }))
        }
        return c.forEach((function(a) {
          var r = t(e, a);
          r && s.definitions.push(r)
        })), s
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), r[e.name.value] = a
        }
      })), e.exports = a, e.exports.UserGetVote = o(a, "UserGetVote"), e.exports.UserCastVote = o(a, "UserCastVote")
    },
    55492: (e, a, s) => {
      var r = {
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
          end: 537
        }
      };
      r.loc.source = {
        body: '#import "@rockstargames/graph-client/operations/fragments/newswire-post.graphql"\n#import "@rockstargames/graph-client/operations/fragments/paging.graphql"\n\nquery NewswireList(\n    $locale: String!\n    $page: Int!\n    $tagId: Int\n    $metaUrl: String!\n    $cache: Boolean = true\n) {\n    meta: metaUrl(url: $metaUrl, domain: "www", locale: $locale) {\n        title\n    }\n    posts(page: $page, tagId: $tagId, locale: $locale) {\n        paging {\n            ...paging\n        }\n        results {\n            ...postFields\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function o(e) {
        return e.filter((function(e) {
          if ("FragmentDefinition" !== e.kind) return !0;
          var a = e.name.value;
          return !t[a] && (t[a] = !0, !0)
        }))
      }

      function c(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          c(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          c(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          c(e, a)
        }))
      }
      r.definitions = r.definitions.concat(o(s(73784).definitions)), r.definitions = r.definitions.concat(o(s(28540).definitions));
      var i = {};

      function n(e, a) {
        for (var s = 0; s < e.definitions.length; s++) {
          var r = e.definitions[s];
          if (r.name && r.name.value == a) return r
        }
      }
      r.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          c(e, a), i[e.name.value] = a
        }
      })), e.exports = r, e.exports.NewswireList = function(e, a) {
        var s = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var r = i[a] || new Set,
          t = new Set,
          o = new Set;
        for (r.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            t.has(e) || (t.add(e), (i[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return t.forEach((function(a) {
          var r = n(e, a);
          r && s.definitions.push(r)
        })), s
      }(r, "NewswireList")
    },
    13892: (e, a, s) => {
      var r = {
        "./left.svg": 2440,
        "./pc.svg": 66584,
        "./ps.svg": 38407,
        "./ps3.svg": 31972,
        "./ps4.svg": 3052,
        "./ps5.svg": 92243,
        "./right.svg": 61837,
        "./switch.svg": 99868,
        "./x.svg": 72428,
        "./xbox.svg": 68868,
        "./xboxone.svg": 98092,
        "./xboxseriesxs.svg": 73040
      };

      function t(e) {
        var a = o(e);
        return s(a)
      }

      function o(e) {
        if (!s.o(r, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return r[e]
      }
      t.keys = function() {
        return Object.keys(r)
      }, t.resolve = o, e.exports = t, t.id = 13892
    },
    52884: (e, a, s) => {
      var r = {
        "./cero_a.png": 38604,
        "./cero_b.svg": 14276,
        "./cero_c.svg": 75264,
        "./cero_d.svg": 4268,
        "./cero_rp.png": 87336,
        "./cero_z.svg": 68696,
        "./djctq_10.svg": 29375,
        "./djctq_12.svg": 7056,
        "./djctq_14.svg": 72804,
        "./djctq_16.svg": 99900,
        "./djctq_18.svg": 72192,
        "./djctq_er.svg": 71732,
        "./djctq_l.svg": 44428,
        "./esrb_ao.svg": 42144,
        "./esrb_e.svg": 49492,
        "./esrb_e10plus.svg": 50711,
        "./esrb_m.svg": 10292,
        "./esrb_m_ao.svg": 18404,
        "./esrb_rp.svg": 29600,
        "./esrb_rplm17.svg": 44656,
        "./esrb_t.svg": 24884,
        "./fpb_13.svg": 60896,
        "./fpb_16.svg": 47932,
        "./fpb_18.svg": 92948,
        "./fpb_pg.svg": 66620,
        "./grac_12.svg": 43788,
        "./grac_15.svg": 94164,
        "./grac_18.svg": 94916,
        "./grac_a.svg": 77304,
        "./gsrr_0.svg": 92284,
        "./gsrr_12.svg": 12024,
        "./gsrr_15.svg": 51040,
        "./gsrr_18.svg": 26632,
        "./gsrr_6.svg": 17372,
        "./nmc_12.svg": 51423,
        "./nmc_16.svg": 92596,
        "./nmc_18.svg": 63980,
        "./nmc_21.svg": 7240,
        "./nmc_3.svg": 65140,
        "./nmc_7.svg": 66884,
        "./oflc_g.svg": 28704,
        "./oflc_m.svg": 74116,
        "./oflc_ma15.svg": 42856,
        "./oflc_pg.svg": 65888,
        "./oflc_r18.svg": 94780,
        "./pegi_12.svg": 18564,
        "./pegi_16.svg": 50524,
        "./pegi_18.svg": 33173,
        "./pegi_3.svg": 90100,
        "./pegi_4.svg": 20064,
        "./pegi_6.svg": 95228,
        "./pegi_7.svg": 44308,
        "./pegi_rp.png": 96480,
        "./rars_0.svg": 48112,
        "./rars_12.svg": 77767,
        "./rars_16.svg": 35740,
        "./rars_18.svg": 96708,
        "./rars_6.svg": 46644,
        "./usk_0.svg": 75084,
        "./usk_12.svg": 5384,
        "./usk_16.svg": 21804,
        "./usk_18.svg": 21367,
        "./usk_6.svg": 45568,
        "./usk_rp.svg": 46096,
        "./vaci_rp.png": 86616
      };

      function t(e) {
        var a = o(e);
        return s(a)
      }

      function o(e) {
        if (!s.o(r, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return r[e]
      }
      t.keys = function() {
        return Object.keys(r)
      }, t.resolve = o, e.exports = t, t.id = 52884
    },
    7e4: (e, a, s) => {
      var r = {
        "./cero_a.png": 38604,
        "./cero_b.svg": 14276,
        "./cero_c.svg": 75264,
        "./cero_d.svg": 4268,
        "./cero_rp.png": 87336,
        "./cero_z.svg": 68696,
        "./djctq_10.svg": 29375,
        "./djctq_12.svg": 7056,
        "./djctq_14.svg": 72804,
        "./djctq_16.svg": 99900,
        "./djctq_18.svg": 72192,
        "./djctq_er.svg": 71732,
        "./djctq_l.svg": 44428,
        "./esrb_ao.svg": 42144,
        "./esrb_e.svg": 49492,
        "./esrb_e10plus.svg": 50711,
        "./esrb_m.svg": 10292,
        "./esrb_m_ao.svg": 18404,
        "./esrb_rp.svg": 29600,
        "./esrb_rplm17.svg": 44656,
        "./esrb_t.svg": 24884,
        "./fpb_13.svg": 60896,
        "./fpb_16.svg": 47932,
        "./fpb_18.svg": 92948,
        "./fpb_pg.svg": 66620,
        "./grac_12.svg": 43788,
        "./grac_15.svg": 94164,
        "./grac_18.svg": 94916,
        "./grac_a.svg": 77304,
        "./gsrr_0.svg": 92284,
        "./gsrr_12.svg": 12024,
        "./gsrr_15.svg": 51040,
        "./gsrr_18.svg": 26632,
        "./gsrr_6.svg": 17372,
        "./nmc_12.svg": 51423,
        "./nmc_16.svg": 92596,
        "./nmc_18.svg": 63980,
        "./nmc_21.svg": 7240,
        "./nmc_3.svg": 65140,
        "./nmc_7.svg": 66884,
        "./oflc_g.svg": 28704,
        "./oflc_m.svg": 74116,
        "./oflc_ma15.svg": 42856,
        "./oflc_pg.svg": 65888,
        "./oflc_r18.svg": 94780,
        "./pegi_12.svg": 18564,
        "./pegi_16.svg": 50524,
        "./pegi_18.svg": 33173,
        "./pegi_3.svg": 90100,
        "./pegi_4.svg": 20064,
        "./pegi_6.svg": 95228,
        "./pegi_7.svg": 44308,
        "./pegi_rp.png": 96480,
        "./rars_0.svg": 48112,
        "./rars_12.svg": 77767,
        "./rars_16.svg": 35740,
        "./rars_18.svg": 96708,
        "./rars_6.svg": 46644,
        "./usk_0.svg": 75084,
        "./usk_12.svg": 5384,
        "./usk_16.svg": 21804,
        "./usk_18.svg": 21367,
        "./usk_6.svg": 45568,
        "./usk_rp.svg": 46096,
        "./vaci_rp.png": 86616
      };

      function t(e) {
        var a = o(e);
        return s(a)
      }

      function o(e) {
        if (!s.o(r, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return r[e]
      }
      t.keys = function() {
        return Object.keys(r)
      }, t.resolve = o, e.exports = t, t.id = 7e4
    },
    6572: (e, a, s) => {
      var r = {
        "./bounty.png": 30752,
        "./collector.png": 40056,
        "./moonshiner.png": 41444,
        "./naturalist.png": 73268,
        "./trader.png": 74688
      };

      function t(e) {
        var a = o(e);
        return s(a)
      }

      function o(e) {
        if (!s.o(r, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return r[e]
      }
      t.keys = function() {
        return Object.keys(r)
      }, t.resolve = o, e.exports = t, t.id = 6572
    },
    2440: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3c6134ba61610ead6af640361535e346.svg"
    },
    66584: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    38407: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27ae07e3226006749e6cb6428bc62bb1.svg"
    },
    31972: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg"
    },
    3052: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg"
    },
    92243: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b12e4e9678e7a4ebea34905926feeb90.svg"
    },
    61837: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cf1b78cec82c717ea9c2155ce4093736.svg"
    },
    99868: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg"
    },
    72428: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c453a914f0b049334120adfcba614e5.svg"
    },
    68868: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f74e871585118640ffd9ce881181a176.svg"
    },
    98092: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg"
    },
    73040: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5bd8456deb2338503b8fd44786b5fa07.svg"
    },
    82708: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/44d747ec4a149ad5386114f6b5c60f2d.svg"
    },
    29314: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a29e26aa160e7be7e845708c335b3c39.svg"
    },
    71084: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    },
    66452: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5be68b0895e242db88f00aae46effad7.svg"
    },
    14120: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6054f77c4450b075b6059eda658a510d.svg"
    },
    33788: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c577e2612120d70330b797e6ee5487d9.svg"
    },
    37284: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c8ee10e269f42d96c58c1eb016717e1.svg"
    },
    19916: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61f1cfebde0508725354fa6c2bdda0b4.svg"
    },
    80804: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/77896e8c17472d9127fc3a09244bcdec.svg"
    },
    70564: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/941a1141a404ed211f7d23ed36ccee23.svg"
    },
    62756: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04d319f216248f3df7f9727df641b832.svg"
    },
    12064: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e18ef78074a128424a94ab6313dd332.svg"
    },
    7748: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c91f19b5ea19868e280034220acf6740.svg"
    },
    84184: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3d0b47d69ca8bee8a00a608ebd896198.svg"
    },
    69450: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2a7a3f3a2974f306eaf16cbc851622ec.svg"
    },
    85724: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c9f8a365923c42d238fc1f94659f4a7.svg"
    },
    31216: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/13287de69dbdd8bdcd042ce6285f2bae.svg"
    },
    38604: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51b141250a4851d7ec3673d88dbd20a.png"
    },
    14276: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7ac89f9e00ded04ef4b2dd3eaf3e8734.svg"
    },
    75264: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f44dd7aad9d6c62e40a11f51252f59b8.svg"
    },
    4268: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/204116b24cd9e9ab4e71af21b3a96179.svg"
    },
    87336: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/676b3908098d8b19f1019ce361af45ec.png"
    },
    68696: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/03ab76c58ed61a83bf035c923dbe32b2.svg"
    },
    29375: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f468aef6f0b5399d5c0f6b2e95b60cc5.svg"
    },
    7056: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b31c79d361cfd92e1a405dbbf4890bd.svg"
    },
    72804: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3689ac97526f00a4537e1b38ec82a074.svg"
    },
    99900: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07f9f9e93ec430813e74cbce545962c4.svg"
    },
    72192: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/608f591c35aff9d47091dd7fe9a8fb13.svg"
    },
    71732: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/198ced82807c854e92e84e23f7434c91.svg"
    },
    44428: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/edf01daa4f0392081705c17a74d8a146.svg"
    },
    42144: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c4dd58f5b5b97796b6c6177de364dd36.svg"
    },
    49492: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/201de0eb81b09ea93aa1aef2a6824b7c.svg"
    },
    50711: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/534078f6307f97ce0d70e0bb885f9d77.svg"
    },
    10292: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f4b0d9409df1e8a420b2118e4e601263.svg"
    },
    18404: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/092865e0ddae5190dc3c0284ee3c21bd.svg"
    },
    29600: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/80dd50a2fa9aae3b5d6effdb2d9c2661.svg"
    },
    44656: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d471eef7883043fdabe1b3ed17a72b3.svg"
    },
    24884: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/35cf853d7882b090b56837bd08127da1.svg"
    },
    60896: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/72e8749316b4d1f52925b95e075e9c24.svg"
    },
    47932: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c2acdad576048f5c48b2ee6a2a2a90a3.svg"
    },
    92948: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f52c5ab315a1ff90360e06372c3f2c0.svg"
    },
    66620: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d1f569db6c94b4f81417f62e91759082.svg"
    },
    43788: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fe262661c6667d97f441e045067f4a0f.svg"
    },
    94164: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b457cab77cb82e1c05ad12628414576.svg"
    },
    94916: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c66a857ab4a5f8541cace25e15716b9e.svg"
    },
    77304: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/515f2884036e870905ae53f156692721.svg"
    },
    92284: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a3931a545299e205758648bce29e5c49.svg"
    },
    12024: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/05e9f2f27883d4cbabb3d4e4e16c9c74.svg"
    },
    51040: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f2fc4de3decfa0ac007f6cbd91658a9.svg"
    },
    26632: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cd57122be57f5e3a9dc4d0a0f2503fb1.svg"
    },
    17372: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d910a48fc0914f58ca80dc0732a7677.svg"
    },
    51423: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e99540df7fd07d75b08a5fbc02d4815.svg"
    },
    92596: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/937b7a0c5a128c39addf2adeba2d2f23.svg"
    },
    63980: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/46a27d8d16855dcc2a217f48243c6d82.svg"
    },
    7240: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e5792c85d5a88a0b7c75af087e4c6ee2.svg"
    },
    65140: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4da522682784ded3799c5a6f9f8c213a.svg"
    },
    66884: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/29ea20c333709a952c2eb3a2591d435d.svg"
    },
    28704: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c66fbb7c204e32da80ccb1693d15e00.svg"
    },
    74116: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/954d63889440be17e1ebef30b7026369.svg"
    },
    42856: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2eb8777f38cbd4d721261ad736c1f2e7.svg"
    },
    65888: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6079496697e537802f8a0eb5a83d2e94.svg"
    },
    94780: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a19fbf81b03db0fda00839496a3ce5.svg"
    },
    18564: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/129ef1c1a15ffc7afb86ce282e48decb.svg"
    },
    50524: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a5d9ca87a5bd107da9bb33d3d718e8.svg"
    },
    33173: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dabd13175cc0894dcb3f942d3d2dab86.svg"
    },
    90100: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/64d281825da1c782681bcc096d693e32.svg"
    },
    20064: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b43dddd485139df895fc531e79c75e68.svg"
    },
    95228: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c01f38f1051e751caa633d533202873c.svg"
    },
    44308: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27a26f477c8db29df4ceec4517c7f42b.svg"
    },
    96480: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a380d3ce353544a356e8ce48f8586804.png"
    },
    48112: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bba2f70e014e82b336a9f80625053089.svg"
    },
    77767: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/85250e8a0e5a5a1209f214423f6ebe43.svg"
    },
    35740: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1a94d5705ae3ddeb4c8c2fde79bfe81.svg"
    },
    96708: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a825976dddc59e33b3ce146ad6cd3d20.svg"
    },
    46644: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/01b0cd4466759aa349ac4036594ab6ae.svg"
    },
    75084: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c699f3b76c15209c8059f02507e11b5.svg"
    },
    5384: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b48e041f1412ff62c8a92dc424b59aa5.svg"
    },
    21804: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07362df5a2671c08b232a97d503cd6bf.svg"
    },
    21367: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c3fe2a9610ca8b42807dfa99073d68b3.svg"
    },
    45568: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/056d3bdf1f300bcb7efa4aebcfc5224d.svg"
    },
    46096: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/278e84e5a41407499c43a30f545da3e8.svg"
    },
    86616: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/703a546f7a5109c1e2af87a212135aad.png"
    },
    30752: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48754c6fc2f75b0554098423f2bda6d1.png"
    },
    40056: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e111377ba943e9eefaa9204f77c77093.png"
    },
    41444: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4639a2711d1bca49a87c302784050ee3.png"
    },
    73268: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/898794daaec68a69ef5ec4afaefe1948.png"
    },
    74688: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e77bb0f25a6ea37e8d831b12df9fa3c.png"
    },
    43976: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8787df71c723ebe44f82fd13ed216e09.jpg"
    },
    61820: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61ae357c3bfbabb5d765e9a7c794d08f.png"
    }
  }
]);
//# sourceMappingURL=fb0a722b6dea8adaec3c59f6d2234969.js.map