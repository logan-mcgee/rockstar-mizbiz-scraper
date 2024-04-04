! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "47edc926-2fdd-4de0-9076-dc6f2db02e22", e._sentryDebugIdIdentifier = "sentry-dbid-47edc926-2fdd-4de0-9076-dc6f2db02e22")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "90b9af281bd1b5c2955354a97f6fab1985234888",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "90b9af281bd1b5c2955354a97f6fab1985234888"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [480], {
    58568: (e, a, s) => {
      "use strict";
      s.r(a), s.d(a, {
        A: () => u,
        AudioPlayer: () => N,
        Badge: () => j,
        Brands: () => w,
        Button: () => C,
        ButtonGroup: () => B,
        CalloutSection: () => J,
        Carousel: () => A,
        ConditionalBlock: () => H,
        CookieAB: () => re,
        CountryInputField: () => te,
        Cta: () => le,
        DescriptionArea: () => we,
        DiscountsBadge: () => Me,
        DotLoader: () => Ee,
        Dropdown: () => ze,
        Embed: () => Ae,
        ExpandingPlatformButton: () => Xe,
        FadeInContent: () => Ye,
        GameCard: () => t,
        GameSiteHeader: () => aa,
        Gen9Button: () => E,
        Gen9CoreCarousel: () => ca,
        Grid: () => Ve,
        HTMLElement: () => pa,
        Hero: () => ua,
        HookStore: () => R,
        ImageWithBadge: () => Ca,
        LanguageSelector: () => ya,
        LayeredImage: () => wa,
        LoadingAnimation: () => pr,
        MultiSourceImage: () => ke,
        NewswireBlocks: () => Fa,
        NewswireCard: () => Ba,
        NewswireList: () => $a,
        NewswireRelated: () => Da,
        NewswireTag: () => La,
        OrderedList: () => Ua,
        PackList: () => Qa,
        PackListMenu: () => ds,
        Paging: () => fs,
        ParallaxCacheBuster: () => ks,
        ParallaxInnerLayer: () => bs,
        ParallaxOuterLayer: () => hs,
        ParallaxWrapper: () => ps,
        ProfileSwitcher: () => r,
        PromoModule: () => ct,
        Rating: () => dt,
        ResponsiveFlexBox: () => gt,
        ResponsiveFlexItem: () => ut,
        ResponsiveGridBox: () => _t,
        ResponsiveGridItem: () => bt,
        ResponsiveImg: () => ht,
        ResponsiveSection: () => yt,
        RockstarLogo: () => Nt,
        ScrollToTop: () => jt,
        ScrollTracker: () => wt,
        SearchBox: () => St,
        Separator: () => ye,
        Skeleton: () => It,
        SrcsetImage: () => Ta,
        TextFit: () => Ce,
        ThumbsGallery: () => $t,
        TinaModuleFetchNRender: () => At,
        TinaWrapper: () => Ft,
        TrackList: () => Et,
        UnorderedList: () => he,
        UserVote: () => Ut,
        VideoCard: () => i,
        VideoCarousel: () => Ht,
        VideoList: () => Xt,
        Wasted: () => Kt,
        framer: () => n,
        useTinaModuleFetchByIds: () => Dt,
        withSearchbarErrorBoundary: () => er,
        withSimpleErrorBoundary: () => ra
      });
      var t = {};
      s.r(t), s.d(t, {
        Art: () => Ze,
        Link: () => Je
      });
      var r = {};
      s.r(r), s.d(r, {
        CharacterCard: () => ws,
        Menu: () => at,
        MenuButton: () => rt
      });
      var i = {};
      s.r(i), s.d(i, {
        Art: () => Qt,
        Link: () => Zt
      });
      var c = {};
      s.r(c), s.d(c, {
        getVariant: () => gr,
        transitions: () => dr,
        variants: () => mr
      });
      var n = {};
      s.r(n), s.d(n, {
        Animations: () => c,
        LiteMotion: () => ar,
        withFadeIn: () => ir,
        withFadeUp: () => lr
      });
      var o = s(51664),
        l = s(41272);
      const d = (0, l.defineMessages)({
        aria_label_open_new_window: {
          id: "aria_label_open_new_window",
          defaultMessage: "(Opens in a new window)"
        }
      });
      var m = s(57013);
      const g = "rockstargames-sites-rockstargamesff481c537a56a6fcdb1be85dfbc8944e";
      var f = s(95240);
      const u = e => {
        let {
          children: a,
          to: s = "#",
          alt: t = "",
          autoBlank: r = !1,
          onClick: i = (() => {}),
          ...c
        } = e;
        const n = (0, l.useIntl)(),
          o = !/^(https?|mailto):/i.test(s),
          u = /^#/.test(s),
          k = c?.target ?? (r ? "_blank" : "_self");
        let {
          t: _,
          ...p
        } = c, b = "";
        if ("aria-label" in p && p["aria-label"] && (b = "_blank" === k ? `${p["aria-label"]} ${n.formatMessage(d.aria_label_open_new_window)}` : p["aria-label"]), u) {
          const e = e => {
            e.preventDefault(), document?.querySelector(`[id='${s.replace("#","")}']`)?.scrollIntoView({
              behavior: "smooth",
              block: "center"
            }), i && i(e)
          };
          return (0, f.jsxs)("a", {
            title: t,
            href: s,
            onClick: e,
            ...p,
            "aria-label": b,
            children: [a, "_blank" === k && !b && (0, f.jsx)("span", {
              className: g,
              children: n.formatMessage(d.aria_label_open_new_window)
            })]
          })
        }
        if (o) return (0, f.jsxs)(m.NavLink, {
          title: t,
          to: s,
          onClick: e => i(e),
          ...p,
          "aria-label": b,
          children: [a, "_blank" === k && !b && (0, f.jsx)("span", {
            className: g,
            children: n.formatMessage(d.aria_label_open_new_window)
          })]
        });
        const v = Object.keys(p).filter((e => !["activeClassName", "key", "end"].includes(e))).reduce(((e, a) => ({
          ...e,
          [a]: c[a]
        })), {});
        return "function" == typeof v?.className && delete v.className, (0, f.jsxs)("a", {
          href: s,
          title: t,
          onClick: e => i(e),
          target: k,
          ...v,
          "aria-label": b,
          children: [a, "_blank" === k && !b && (0, f.jsx)("span", {
            className: g,
            children: n.formatMessage(d.aria_label_open_new_window)
          })]
        })
      };
      var k = s(65772),
        _ = s.n(k),
        p = s(33052),
        b = s(90048);
      const v = {
          player: "rockstargames-sites-rockstargamesbb43df423657efcc0f1f38630a24e5e8",
          fixedToBottom: "rockstargames-sites-rockstargamese1f497e3ec34c2fd721b124969e27dd5",
          tracksOpen: "rockstargames-sites-rockstargamese8f2736f0ae21a56045104071a7a9fd7",
          tracks: "rockstargames-sites-rockstargamesea84096a931648765b1db46f708f70aa",
          iconBurger: "rockstargames-sites-rockstargamesb91aad66a2102668715c5ddaaecede2e",
          trackList: "rockstargames-sites-rockstargamesc44536ca7b7fa7236e86c65ae309057e",
          trackActive: "rockstargames-sites-rockstargamesac7826f934fc777f58017b1a5752419a",
          trackTitle: "rockstargames-sites-rockstargamesaafc522e642572d5ff93c7408b941829",
          trackIndex: "rockstargames-sites-rockstargamesb880baa4707c71eb543f905816d8e952",
          controls: "rockstargames-sites-rockstargamesff92c8eddfc0a0fa7bc7f444973e4f28",
          controlsCurrentBg: "rockstargames-sites-rockstargamesa81d9465f14d65e8e20800d7b25f77d9",
          controlsCurrentBgVisible: "rockstargames-sites-rockstargamesc87bd14d2bbc9248d9c197b77454f345",
          controlsTrack: "rockstargames-sites-rockstargamesc23bf574089d1af93750f6af8ebb489f",
          controlsTrackTitle: "rockstargames-sites-rockstargamese4b77d29e904f9928cca1de93f5c7745",
          controlsTrackAnimating: "rockstargames-sites-rockstargamesba49949a9cd8c22385708f267c625029",
          scrollText: "rockstargames-sites-rockstargamesfd9c80e5afaa1ed38ce85f2c3d70eae4",
          controlsTrackArtist: "rockstargames-sites-rockstargamesc93c1e5399d9fd5e96ca246fdbfb307b",
          controlsTrackBurger: "rockstargames-sites-rockstargamesb4e1a16e3460b40c1aacd92afe219856",
          controlsButtons: "rockstargames-sites-rockstargamesd136125994c1d0db1449fce51af559ca",
          controlsScrub: "rockstargames-sites-rockstargamesd3d935648408f71928bd49d2f7c5a9ff",
          controlsPlayPause: "rockstargames-sites-rockstargamesf5de7526c8cee98bdd7363fd7f2cf8ae",
          controlsPlayPausePlaying: "rockstargames-sites-rockstargamesefb6194f0df966e6c8c759937d2fb826",
          controlsNextTrack: "rockstargames-sites-rockstargamesf286e0ce01c5401e56dd579b076f1aae",
          controlsPrevTrack: "rockstargames-sites-rockstargamesa56bb7cb4b0e2de481777d1f09c3f2f2",
          controlsScrubTrack: "rockstargames-sites-rockstargamesb8f38f45353fa54fcb6f9e2a3d0d5a85"
        },
        h = e => {
          let {
            src: a
          } = e;
          return (0, f.jsx)("div", {
            className: v.cover,
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
            audioRef: t,
            setPlaying: r,
            tracksOpen: i,
            setTracksOpen: c,
            trackData: n,
            setTrackId: l,
            trackBounds: d,
            setAutoNext: m
          } = e;
          const g = (0, o.useRef)(null),
            u = (0, o.useRef)(null),
            k = (0, o.useRef)(null),
            [p, b] = (0, o.useState)(null),
            [h, x] = (0, o.useState)(!1),
            y = e => {
              const a = new Date(1e3 * e),
                s = a.getUTCMinutes(),
                t = a.getSeconds();
              return `${s.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`
            };
          return (0, o.useEffect)((() => {
            if (!u.current || !k.current) return;
            const e = () => {
              k.current && u.current && b(k.current.clientWidth > u.current.clientWidth)
            };
            return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e)
          }), [k, u, a]), (0, o.useEffect)((() => {
            if (!g.current || !a?.duration) return;
            let e = null;
            const s = new(_())(g.current),
              r = e => {
                if (g.current) {
                  const s = g.current.clientWidth;
                  if (!g.current.contains(e.srcEvent.target)) return;
                  const r = Math.max(0, e.srcEvent.offsetX),
                    i = Number(r / s * a.duration);
                  t.currentTime = i
                }
              },
              i = () => {
                e ? t.pause() : t.play()
              },
              c = () => {
                e = t.paused, t.pause()
              };
            return s.on("panstart", c), s.on("panleft", r), s.on("panright", r), s.on("panend", i), s.on("tap", r), () => {
              s.off("panstart", c), s.off("panleft", r), s.off("panright", r), s.off("panend", i), s.off("tap", r)
            }
          }), [g.current, a.duration]), (0, o.useEffect)((() => {
            const e = Number(t?.currentTime);
            (s || !isNaN(e) && 0 !== e) && x(!0)
          }), [s, t?.currentTime]), (0, f.jsxs)("div", {
            className: v.controls,
            style: {
              "--track-color": n.color,
              "--track-mix-blend-mode": n.mix_blend_mode,
              "--current-pct": a.current / a.duration
            },
            children: [(0, f.jsx)("div", {
              className: [v.controlsCurrentBg, h ? v.controlsCurrentBgVisible : ""].join(" ")
            }), (0, f.jsx)("div", {
              className: v.controlsTrack,
              ref: u,
              children: (0, f.jsx)("span", {
                className: [v.controlsTrackTitle, p ? v.controlsTrackAnimating : ""].join(" "),
                ref: k,
                children: n.title
              })
            }), (0, f.jsxs)("div", {
              className: v.controlsButtons,
              children: [(0, f.jsx)("div", {
                className: v.controlsPrevTrack,
                onClick: () => {
                  d && (l(d[0]), m(!0), r(!0))
                }
              }), (0, f.jsx)("div", {
                className: [v.controlsPlayPause, s ? v.controlsPlayPausePlaying : ""].join(" "),
                onClick: () => {
                  r(!s)
                }
              }), (0, f.jsx)("div", {
                className: v.controlsNextTrack,
                onClick: () => {
                  d && (l(d[1]), m(!0), r(!0))
                }
              })]
            }), (0, f.jsx)("div", {
              active: i ? "" : null,
              className: v.controlsTrackBurger,
              children: (0, f.jsx)("div", {
                className: v.iconBurger,
                onClick: () => {
                  c(!i)
                }
              })
            }), (0, f.jsxs)("div", {
              className: v.controlsScrub,
              children: [(0, f.jsx)("span", {
                children: y(a.current)
              }), (0, f.jsx)("div", {
                className: v.controlsScrubTrack,
                ref: g
              }), (0, f.jsx)("span", {
                children: y(a.duration)
              })]
            })]
          })
        },
        y = e => {
          let {
            tracks: a,
            trackId: s,
            setTrackId: t,
            tracksOpen: r,
            setTracksOpen: i,
            setPlaying: c,
            setAutoNext: n
          } = e;
          return (0, f.jsxs)("div", {
            className: v.tracks,
            children: [(0, f.jsx)("h4", {
              children: "Tracks"
            }), (0, f.jsx)("div", {
              className: v.trackBurger,
              onClick: () => {
                i(!r)
              }
            }), (0, f.jsx)("div", {
              className: v.trackList,
              children: a.map(((e, a) => (0, f.jsxs)("a", {
                style: {
                  "--highlight-color": e.color
                },
                className: s === e.id ? v.trackActive : "",
                onClick: () => {
                  t(e.id), c(!0), n(!0)
                },
                children: [(0, f.jsx)("span", {
                  className: v.trackIndex,
                  children: String(a + 1).padStart(2, "0")
                }), (0, f.jsx)("span", {
                  className: v.trackTitle,
                  children: e.title
                }), (0, f.jsx)("span", {
                  className: v.trackTime,
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
            data: t
          } = (0, p.useQuery)(b.GetAudioAlbum, {
            variables: {
              id: a
            }
          }), [r, i] = (0, o.useState)(), [c, n] = (0, o.useState)(), [l, d] = (0, o.useState)(), [m, g] = (0, o.useState)(!1), [u, k] = (0, o.useState)(!1), [_, N] = (0, o.useState)(new HTMLAudioElement), [j, w] = (0, o.useState)({
            current: 0,
            duration: 0
          }), [S, C] = (0, o.useState)(!0);
          return (0, o.useEffect)((() => {
            const e = "audio",
              a = a => {
                a?.data?.rockstarAudioPlayerPlayTrackId && (n(a.data.rockstarAudioPlayerPlayTrackId), C(!1), k(!0)), u && a?.data?.attentionBlurredElsewhere && a?.data?.from !== e && k(!1)
              };
            return u && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: e
            }), window.addEventListener("message", a, !1), () => window.removeEventListener("message", a, !1)
          }), [u]), (0, o.useEffect)((() => {
            if (!_) return;
            const e = () => {
                isNaN(_.duration) || w({
                  duration: _?.duration ?? 0,
                  current: _?.currentTime ?? 0
                })
              },
              a = () => {
                S && r && n(r[1])
              };
            return _.addEventListener("loadedmetadata", e), _.addEventListener("timeupdate", e), _.addEventListener("ended", a), () => {
              _.removeEventListener("loadedmetadata", e), _.removeEventListener("timeupdate", e), _.removeEventListener("ended", a)
            }
          }), [_, r, S]), (0, o.useEffect)((() => {
            u && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: "audio"
            })
          }), [u]), (0, o.useEffect)((() => {
            _ && (u ? _.play() : _.pause(), g(!1))
          }), [u, _, l?.id]), (0, o.useEffect)((() => {
            if (!c) return;
            const {
              tracks: e
            } = t.audioAlbum, a = t.audioAlbum.tracks.findIndex((e => e.id === c));
            i([e[a - 1]?.id ?? e[e.length - 1].id, e[a + 1]?.id ?? e[0].id]), d(e[a])
          }), [c]), (0, o.useEffect)((() => {
            t && n(t.audioAlbum.tracks[0].id)
          }), [t]), l ? (0, f.jsxs)("div", {
            className: [v.player, v[s], m ? v.tracksOpen : ""].join(" "),
            children: [(0, f.jsx)("audio", {
              ref: e => {
                N(e)
              },
              src: l.mp3_src
            }), (0, f.jsx)(y, {
              tracks: t.audioAlbum.tracks,
              setTrackId: n,
              trackId: c,
              tracksOpen: m,
              setTracksOpen: g,
              setPlaying: k,
              setAutoNext: C
            }), (0, f.jsx)(h, {
              src: l.cover_src
            }), (0, f.jsx)(x, {
              setTrackId: n,
              trackBounds: r,
              tracksOpen: m,
              setTracksOpen: g,
              playing: u,
              setPlaying: k,
              timing: j,
              trackData: l,
              audioRef: _,
              setAutoNext: C
            })]
          }) : null
        },
        j = e => {
          let {
            text: a,
            style: s
          } = e;
          return (0, f.jsx)("div", {
            className: "rockstargames-sites-rockstargamesb61bd7f274fd6d93c4bf33a9284b6b67",
            style: s,
            children: a
          })
        },
        w = e => {
          let {
            brands: a = []
          } = e;
          return a.length ? (0, f.jsx)("div", {
            className: "rockstargames-sites-rockstargamescde08e212f23b312d5afca7f2ea1105c",
            children: a.map(((e, a) => {
              let {
                brand: s
              } = e;
              return (0, f.jsx)("div", {
                className: "rockstargames-sites-rockstargamesc894fe869384587702b5370da072be86",
                "data-brand": s
              }, a)
            }))
          }) : null
        },
        S = {
          button: "rockstargames-sites-rockstargamese056494c33cff1fe89431f279fdb6b9a",
          secondary: "rockstargames-sites-rockstargamesd340cf27f380a4347994e59544432eb3"
        },
        C = e => {
          let {
            className: a = "",
            children: s,
            context: t = "",
            to: r,
            onClick: i,
            ...c
          } = e;
          const n = [S.button, S[t], a].join(" ");
          return r ? (0, f.jsx)(u, {
            ...c,
            to: r,
            className: n,
            onClick: i ? () => i() : () => {},
            children: s
          }) : (0, f.jsx)("button", {
            ...c,
            type: "button",
            className: n,
            onClick: i ? () => i() : () => {},
            children: s
          })
        };
      var I = s(1740);
      const T = {
          pillBtn: "rockstargames-sites-rockstargamesb59962d0e68ccd73b5ee2e571528d469",
          selected: "rockstargames-sites-rockstargamesf5c57dad202e0d6ff855d5a4aca2c804",
          plusButton: "rockstargames-sites-rockstargamescffaf489342637258d28f9b3b718836a",
          small: "rockstargames-sites-rockstargamesb8abf927f0ba0af0d8ac0e9c77690d34",
          btnText: "rockstargames-sites-rockstargamese6e56461bfc2e426c4abc5451cd17284",
          btnTexticon: "rockstargames-sites-rockstargamescef9f9ce913d167a1fe2e7118a407cdd",
          whiteBtn: "rockstargames-sites-rockstargamesb257e0629b9f8e101791d7a948ed15be",
          blackBtn: "rockstargames-sites-rockstargamescb03bccaee79394858682d2ce4d08253",
          transparentBtn: "rockstargames-sites-rockstargamesd0460159a17533d4d23686d7dca76794",
          iconBtn: "rockstargames-sites-rockstargamesac61186c3c22346c9a4ee2cd2820d341",
          link: "rockstargames-sites-rockstargamesc5920e56149b82f20f4db2ad9d397495",
          xboxone: "rockstargames-sites-rockstargamesa7057f2e6d398341f57bc462716d0508",
          xboxseriesxs: "rockstargames-sites-rockstargamesa693ab5879f34d7dea1737d3172ed4e4",
          ps4: "rockstargames-sites-rockstargamesa029ff88fc9aef470aaeef8053f90436",
          ps5: "rockstargames-sites-rockstargamese25638751cf3e7267db23c6a401fcc36",
          pc: "rockstargames-sites-rockstargamese03d92653f19a7ae3c4b3d5137bc9909"
        },
        M = e => {
          let {
            children: a,
            className: s,
            onClick: t,
            style: r
          } = e;
          return (0, f.jsx)("button", {
            className: s,
            onClick: t ? () => t() : () => {},
            style: r,
            type: "button",
            children: a
          })
        },
        L = e => {
          let {
            children: a,
            className: s,
            onClick: t,
            style: r,
            to: i
          } = e;
          return (0, f.jsx)(m.NavLink, {
            className: s,
            onClick: t ? () => t() : () => {},
            style: r,
            to: i,
            children: a
          })
        },
        E = e => {
          let {
            btnColor: a = "#fff",
            className: s = "",
            consoleBtn: t,
            icon: r = "",
            img: i,
            labelColor: c = "#000",
            onClick: n,
            secondText: o,
            size: l,
            text: d,
            to: m,
            type: g = ""
          } = e;
          const u = [T.plusButton, T[g] ?? "", T[l] ?? "", T[t] ?? "", s].join(" "),
            k = {
              "--hvr-color": a ?? c,
              "--hvr-bg-color": c ?? a,
              "--hvr-border-color": a ?? c
            },
            _ = (0, f.jsxs)(f.Fragment, {
              children: [i ? (0, f.jsx)("img", {
                src: i,
                alt: ""
              }) : "", (0, f.jsxs)("div", {
                className: T.btnText,
                icon: r,
                children: [d, o ? (0, f.jsx)("span", {
                  children: o
                }) : ""]
              })]
            });
          if (m) {
            if (m.startsWith("http")) {
              const e = m.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, f.jsx)("span", {
                onClick: n ? () => n() : () => {},
                onKeyDown: n,
                className: u,
                role: "button",
                tabIndex: 0,
                children: (0, f.jsx)("a", {
                  href: m,
                  target: e,
                  children: _
                })
              })
            }
            return (0, f.jsx)(L, {
              className: u,
              onClick: n ? () => n() : () => {},
              style: k,
              to: m,
              children: _
            })
          }
          return (0, f.jsx)(M, {
            className: u,
            onClick: n ? () => n() : () => {},
            style: k,
            children: _
          })
        },
        B = e => {
          let {
            buttons: a = [],
            className: s
          } = e;
          return a.length ? (0, f.jsx)("div", {
            className: (0, I.classList)("rockstargames-sites-rockstargamesb411a36e7fd12ab75861fe560b31b206", s),
            children: a.map(((e, a) => {
              let {
                icon: s,
                title: t,
                to: r
              } = e;
              return t ? (0, f.jsx)(E, {
                icon: s,
                text: t,
                to: r
              }, a) : ""
            }))
          }) : null
        };
      var P = s(48111),
        z = s(12231);
      const $ = {
          deprecatedCarousel: "rockstargames-sites-rockstargameseb5df7b3d51dffc4d993ca7abce4e944",
          "swiper-scrollbar-disabled": "rockstargames-sites-rockstargameseb2dda6769a7c20a31e7996ff62e41f8",
          "swiper-horizontal": "rockstargames-sites-rockstargamesb11093de3cb4f18ea2d59b8d4d1db44c",
          "swiper-vertical": "rockstargames-sites-rockstargamesfa3209fdf995734a1aeeac2cc72cc1ea",
          renderedWithChildren: "rockstargames-sites-rockstargamesc9f15e74b3166cd0db40501fcc70e868",
          panorama: "rockstargames-sites-rockstargamesf2a7e77af5dff445e978fd575a567508",
          img: "rockstargames-sites-rockstargamesf1d3d54c266a20fa0cbe9c342b0d98da",
          hideMobile: "rockstargames-sites-rockstargamese70d5eaa273e4a0a40ee62a308491810",
          hideLarge: "rockstargames-sites-rockstargamesbace2af6c822ba7b36b53923629cba0f",
          imageAreaBg: "rockstargames-sites-rockstargamesf4bb071e6dad07c75b78ea21269ca662",
          infinite_false: "rockstargames-sites-rockstargamesd6c3d175b843462bf23a1a1f3af6b095",
          track: "rockstargames-sites-rockstargamesb5ff781c4a96bf031e8e7f5e0c9af395",
          perico: "rockstargames-sites-rockstargamesbb97d296d17b7e801c6c0719a79463dd",
          dotsSlide: "rockstargames-sites-rockstargamesdd55a6f93254ed13542089c6f36e0048",
          siblings: "rockstargames-sites-rockstargamesa59cf4385528c371a13be9962b67131b",
          active: "rockstargames-sites-rockstargamesaa5e195e0c7c6336929553314d52a896",
          "swiper-preloader-spin": "rockstargames-sites-rockstargamesc05cc0faa8239c85cdc7d53c7e120e8e"
        },
        V = e => {
          let {
            item: a
          } = e;
          return (0, f.jsxs)("div", {
            children: [(0, f.jsx)(Ca, {
              image: a?.image,
              badge: a?.badge ?? a?.image?.badge,
              badgeType: "badge3",
              role: a?.role ?? a?.image?.role,
              splitter: a?.splitter ?? a?.image?.splitter,
              type: a?.type,
              ariaLabel: a?.image?.ariaLabel ?? a.description,
              style: a?.style,
              className: (0, I.classList)($.img, a?.className)
            }), (a?.title || a?.description) && (0, f.jsx)(we, {
              item: a
            })]
          })
        },
        D = e => {
          let {
            current: a,
            total: s
          } = e;
          return (0, f.jsx)("div", {
            className: "swiper-scrollbar",
            style: {
              "--current-slide": a,
              "--total-slides": s
            },
            children: (0, f.jsx)("div", {
              className: "swiper-scrollbar-drag"
            })
          })
        },
        A = e => {
          let {
            children: a,
            items: s = [],
            style: t = {},
            noInfiniteScroll: r = !1,
            className: i = "",
            renderTemplate: c = "standard",
            text: n,
            customSpaceBetween: l = null,
            centerSlides: d = !0,
            centeredSlidesBounds: m = !1
          } = e;
          const [g, u] = (0, o.useState)(0), k = (0, o.useMemo)((() => a && Array.isArray(a) ? a.map((() => (0, z.c)())) : null), [a]);
          if (!(s && 0 !== s?.length || a)) return null;
          const _ = {
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
          return (0, f.jsxs)("div", {
            className: (0, I.classList)($.deprecatedCarousel, $[c], $[`infinite_${!r}`], a ? $.renderedWithChildren : "", i),
            style: t,
            children: [(0, f.jsxs)(P.wx, {
              loop: !r,
              grabCursor: !0,
              centeredSlides: d,
              centerInsufficientSlides: d,
              slidesPerView: "auto",
              speed: 700,
              breakpoints: _,
              onUpdate: () => u(0),
              onActiveIndexChange: e => u(e?.realIndex ?? 0),
              centeredSlidesBounds: m,
              children: [(0, f.jsx)("div", {
                className: $.trackWrapper,
                children: (0, f.jsxs)("div", {
                  className: $.track,
                  children: [s?.map((e => (0, f.jsx)(P.Ky, {
                    children: (0, f.jsx)(V, {
                      item: e
                    })
                  }, e.key))), a && a?.map(((e, a) => e && (0, f.jsx)(P.Ky, {
                    children: e
                  }, k && k[a])))]
                })
              }), (0, f.jsx)(D, {
                current: g,
                total: a ? a.length : s.length
              })]
            }), (n?.title || n?.description) && (0, f.jsx)(we, {
              item: n
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
          const [t, r] = (0, o.useState)(!1), i = (e => {
            const [a] = (0, m.useSearchParams)(), [s, t] = (0, o.useState)(null), r = (0, O.useRockstarUser)(), {
              loggedIn: i
            } = r, {
              currentCharId: c
            } = (0, O.useRockstarUserState)(), n = function(e) {
              let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "gtao";
              return (0, o.useMemo)((() => {
                const t = e?.data?.characters?.[s];
                return "1" === (t?.[a]?.stats?.overview?.hasGtaPlus?.value ?? "0")
              }), [e, s, a])
            }(r, c);
            return (0, o.useEffect)((() => {
              const s = "true" === a.get("conditionPreview");
              if (!e?.length > 0) return;
              R.applyFilters("preview_conditions", e);
              const r = [];
              return e.forEach((e => {
                const {
                  value: t
                } = e;
                if (s) return "true" === a.get(t) ? (r.push(!0), !0) : (r.push(!1), !1);
                if (U(r)) return !1;
                switch (t) {
                  case "user:is:loggedIn":
                    r.push(!0 === i);
                    break;
                  case "user:not:loggedIn":
                    r.push(!1 === i);
                    break;
                  case "user:is:gtaPlus":
                    r.push(!0 === n);
                    break;
                  case "user:not:gtaPlus":
                    r.push(!1 === n);
                    break;
                  default:
                    r.push(!1)
                }
                return null
              })), t(!U(r)), () => {}
            }), [a, e, n, r, i]), s
          })(a);
          return (0, o.useEffect)((() => {
            r(i)
          }), [i]), (0, o.useMemo)((() => t ? s : null), [t])
        },
        H = (0, F.withTranslations)((e => {
          let {
            children: a
          } = e;
          return o.Children.map(o.Children.toArray(a), (e => (0, f.jsx)(G, {
            ...e?.props
          })))
        }));
      var W = s(41512),
        q = s(58652);
      const X = e => {
          let {
            className: a
          } = e;
          return (0, f.jsxs)("svg", {
            className: a,
            width: "16",
            height: "17",
            viewBox: "0 0 16 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, f.jsx)("path", {
              d: "M3.33203 8.5H12.6654",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, f.jsx)("path", {
              d: "M8 3.83331L12.6667 8.49998L8 13.1666",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })]
          })
        },
        K = {
          pillBtn: "rockstargames-sites-rockstargamese3158363419b66e5afa2264e4928890c",
          selected: "rockstargames-sites-rockstargamesa9649249223f164eff11174ffc72616b",
          calloutContainer: "rockstargames-sites-rockstargamese6bd244761fdf3ebe3888539d9942921",
          calloutSection: "rockstargames-sites-rockstargamesb1b8c93299158ef7d0f9eb04e14a7a64",
          calloutHeaders: "rockstargames-sites-rockstargamesc81810436a5b57307c41f4d7a704b2f7",
          calloutHeaderMargins: "rockstargames-sites-rockstargamesb4e1f72dfa9b38f23017e5f8ef48b9cb",
          calloutHeader: "rockstargames-sites-rockstargamesb7964754215256201dd703aedca18b6f",
          calloutSubheader: "rockstargames-sites-rockstargamesac660fa7995007ed875e03a257e447d7",
          calloutVoteForm: "rockstargames-sites-rockstargamesbee0795a36dd5adf822e1e50a7260f3d",
          voteButton: "rockstargames-sites-rockstargamesb1baa545566a61b791b696c9ebf560ad",
          upvote: "rockstargames-sites-rockstargamesb9c17ddd3e1052acb5097909ae2b07a1",
          downvote: "rockstargames-sites-rockstargamesf26b53e66e552183743465cce6a8d3a8",
          active: "rockstargames-sites-rockstargamesd38a1764483a36e8a1509aee5b88ec31",
          calloutButton: "rockstargames-sites-rockstargamesb7eb76afce3c6e686be44c356837b627",
          calloutLink: "rockstargames-sites-rockstargamesaefe6c5a233047c943a864cd56a7de2d",
          calloutLinkIcon: "rockstargames-sites-rockstargamesa74bf6baa632ad9b5f87efd2043cfed5",
          actionBlock: "rockstargames-sites-rockstargamescc491ddd715196ecd6ef54017ff05ec0",
          actionFooter: "rockstargames-sites-rockstargamesdb26fed58ce50f4affc114670885721a"
        },
        Y = e => {
          let {
            foreign_id: a,
            foreign_type: s
          } = e;
          const {
            track: t
          } = (0, O.useGtmTrack)(), {
            refetch: r
          } = (0, p.useQuery)(q.UserGetVote, {
            skip: !0
          }), [i] = (0, p.useMutation)(q.UserCastVote), [c, n] = (0, o.useState)(null), l = (0, o.useCallback)((e => {
            (async () => {
              if (e === c && null !== c) n(null);
              else {
                n(e), t({
                  event_action: e ? "like" : "dislike",
                  event_category: "cta",
                  event: "cta_" + (e ? "like" : "dislike"),
                  event_label: a
                });
                const r = {
                  foreignId: a,
                  foreignType: s,
                  vote: e
                };
                await i({
                  variables: r
                })
              }
            })()
          }), [a, s, c]);
          return (0, o.useEffect)((() => {
            a && s && (async () => {
              const e = await r({
                foreignId: a,
                foreignType: s
              });
              n(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [a, s]), (0, f.jsxs)("div", {
            className: K.calloutVoteForm,
            children: [(0, f.jsx)("button", {
              "aria-label": "upvote",
              className: [K.upvote, K.voteButton, c ? K.active : ""].join(" "),
              name: "upvote",
              onClick: () => l(!0),
              type: "button"
            }), (0, f.jsx)("button", {
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
            trackingData: t
          } = e;
          const {
            track: r
          } = (0, O.useGtmTrack)();
          return (0, f.jsx)("a", {
            href: s,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, f.jsxs)("button", {
              className: K.calloutLink,
              type: "button",
              onClick: t ? () => r({
                ...t
              }) : () => {},
              children: [a, (0, f.jsx)(X, {
                className: K.calloutLinkIcon
              })]
            })
          })
        },
        Z = e => {
          let {
            helperText: a,
            linkText: s,
            link: t,
            trackingData: r
          } = e;
          const {
            track: i
          } = (0, O.useGtmTrack)();
          return (0, f.jsxs)("div", {
            className: K.actionFooter,
            children: [a, s && " ", s && (0, f.jsx)("a", {
              href: t ?? "",
              onClick: () => i({
                ...r
              }),
              children: s
            })]
          })
        },
        J = (0, F.withTranslations)((e => {
          let {
            header: a,
            subheader: s,
            type: t,
            action_text: r,
            link: i,
            foreign_id: c = document.location.pathname,
            foreign_type: n = "url",
            className: l = "",
            actionFooterHelperText: d,
            actionFooterLinkText: m,
            actionFooterLink: g,
            trackingData: u = {},
            actionFooterLinkTrackingData: k = {},
            t: _,
            ...p
          } = e;
          const {
            loggedIn: b
          } = (0, O.useRockstarUser)(), {
            track: v
          } = (0, O.useGtmTrack)(), h = `${document.location.origin}/auth/sc-auth-login?returnUrl=${window.location.pathname}`, {
            ref: x,
            inView: y
          } = (0, W.cD)({
            threshold: .6
          }), [N, j] = (0, o.useState)(!1);
          let w;
          if ((0, o.useEffect)((() => {
              y && !N && (v({
                event: "page_section_impression",
                event_action: "impression",
                event_category: "page_section",
                event_label: "callout section",
                element_placement: `callout section - ${p?.sectionName??p?._memoq?.header}`
              }), j(!0))
            }), [y]), !a && !s) return null;
          switch (t) {
            case "vote":
              if (!b) {
                w = (0, f.jsx)(C, {
                  to: h,
                  className: K.calloutButton,
                  onClick: u ? () => v({
                    ...u
                  }) : () => {},
                  children: "Log In"
                });
                break
              }
              w = (0, f.jsx)(Y, {
                foreign_id: c,
                foreign_type: n
              });
              break;
            case "button":
              r && i && (w = (0, f.jsx)(C, {
                to: i,
                className: K.calloutButton,
                onClick: u ? () => v({
                  ...u
                }) : () => {},
                children: r
              }));
              break;
            case "link":
              r && i && (w = (0, f.jsx)(Q, {
                action_text: r,
                link: i,
                trackingData: u
              }));
              break;
            default:
              w = null
          }
          return (0, f.jsx)("div", {
            className: `${K.calloutContainer} ${l||""}`,
            ref: x,
            children: (0, f.jsxs)("div", {
              className: K.calloutSection,
              children: [(0, f.jsxs)("div", {
                className: [K.calloutHeaders, w ? K.calloutHeaderMargins : ""].join(" "),
                children: [a && (0, f.jsx)("h2", {
                  className: K.calloutHeader,
                  children: _(a)
                }), s && (0, f.jsx)("h3", {
                  className: K.calloutSubheader,
                  children: _(s)
                })]
              }), (0, f.jsxs)("div", {
                className: K.actionBlock,
                children: [w, d && (0, f.jsx)(Z, {
                  helperText: d,
                  linkText: m,
                  link: g,
                  trackingData: k
                })]
              })]
            })
          })
        }));
      var ee = s(69736),
        ae = s(44236),
        se = s.n(ae);
      const te = e => {
          let {
            isMulti: a,
            allowSelectAll: s,
            label: t,
            miscProps: r
          } = e;
          const [i, c] = (0, o.useState)(""), n = (0, o.useMemo)((() => se()().getData()), []);
          return (0, f.jsx)(ee.cp, {
            unstyled: !0,
            value: i,
            isMulti: a,
            allowSelectAll: s,
            options: n,
            placeholder: t,
            onChange: e => {
              return a = e?.target?.value, void c(a);
              var a
            },
            classNamePrefix: "country-select",
            ...r
          })
        },
        re = e => {
          let {
            cookieName: a,
            cookieValue: s,
            trueComponent: t,
            falseComponent: r
          } = e;
          const i = (e => {
              const a = document.cookie.split("; "),
                s = `${e}=`,
                t = a.find((e => e.startsWith(s)));
              return t?.substring(s.length, t.length)
            })(a),
            c = new URLSearchParams(window.location.search).get(a);
          return c && ((e, a) => {
            e && a && (document.cookie = `${e}=${a}; domain=${(()=>{const e=window.location.hostname.split(".");return e.slice(e.length-2).join(".")})()}; path=/;`)
          })(a, c), i === s || c === s ? t : r
        },
        ie = {
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
        ce = e => ie[e] || null,
        ne = {
          cta: "rockstargames-sites-rockstargamesbc76de01fdd1260e254c482984d2a924",
          xbox: "rockstargames-sites-rockstargamesf591c5444c08121b0514f0c675da1479",
          xboxone: "rockstargames-sites-rockstargamese5124beff89c5b4093a4029a9fee3367",
          xboxseriesxs: "rockstargames-sites-rockstargamese52c94654eb462a8e65aa7607f5e21b5",
          ps: "rockstargames-sites-rockstargamesc53b78d3d062ee8d58f63a0acb1df137",
          ps4: "rockstargames-sites-rockstargamesf4a27aba1505f555d7cd8c920645245a",
          ps5: "rockstargames-sites-rockstargamesb5826d3700572b9bf36874e34d5c2a22",
          pc: "rockstargames-sites-rockstargamesc7ee0cfc54be00a8b152c47997ce76ac",
          switch: "rockstargames-sites-rockstargamesa9b276d1c119e9cd14df54c4459197b0",
          googleplay: "rockstargames-sites-rockstargamesa4ccd0de63b104d4aa48c8c3176618f3",
          platformIcon: "rockstargames-sites-rockstargamesc4ab0a89b65025cfe63b851116fb3a32",
          applestore: "rockstargames-sites-rockstargamesa13111cbe8acbd75f62da1c53de2c3df",
          btnIcon: "rockstargames-sites-rockstargamescb0ad8d8dd93218dc12091b883767967",
          label: "rockstargames-sites-rockstargamesb81011c72b601075ebe54d7ceaa7d2d8",
          primary: "rockstargames-sites-rockstargamesdbcf41d5c23e0eaf5089021f4d41c121",
          btnContent: "rockstargames-sites-rockstargamesf5e832587747dc414e10ab8e0bd843a9",
          icon: "rockstargames-sites-rockstargamesc7a3f1a29594b307606d15e6827f63f9",
          "icon-left": "rockstargames-sites-rockstargamesbd623c6039c3f4122936775ed4214bd4",
          "icon-right": "rockstargames-sites-rockstargamesc79040e66c1f48e302291d8cf1335742",
          disabled: "rockstargames-sites-rockstargamesd87326174de12b895401f738a23b177a",
          pillBtn: "rockstargames-sites-rockstargamesbf9c11ff862c409ecb412254932a66d0",
          selected: "rockstargames-sites-rockstargamese07887131c72b6346c408895888f4fa7"
        },
        oe = e => {
          let {
            platform: a = ""
          } = e;
          const s = a ? ce(a) : null,
            t = s ? (0, f.jsx)("img", {
              className: ne.platformIcon,
              src: s,
              alt: "Platform Icon"
            }) : null;
          return (0, f.jsx)("span", {
            className: [ne.btnContent, ne.platformButton].join(" "),
            children: t
          })
        },
        le = e => {
          let {
            children: a,
            href: s,
            style: t,
            content: r,
            variant: i = null,
            icon: c,
            iconPosition: n = "none",
            iconStyle: l,
            badge: d,
            badgeStyle: g,
            platformItem: u,
            gtm: k = {},
            disabled: _,
            className: p
          } = e;
          const {
            track: b
          } = (0, O.useGtmTrack)(), v = (0, F.useDataLayer)(), h = r ?? a, x = `Redirect to ${s}`, y = (0, o.useMemo)((() => {
            const e = window.location.hostname;
            let a;
            try {
              a = new URL(s)?.hostname
            } catch (s) {
              a = e
            }
            return e === a
          }), [s]), N = (0, o.useCallback)((() => {
            _ || b({
              event: "cta_other",
              ...v,
              ...k,
              link_url: s ?? void 0,
              text: h ?? void 0
            })
          }), [k, s, v]), j = () => c ? (0, f.jsx)("span", {
            className: [ne.icon, `icon-${n}`].join(" "),
            style: l,
            children: (0, f.jsx)("img", {
              className: ne.btnIcon,
              src: ce(c),
              alt: `${c} icon`
            })
          }) : null;
          return (0, f.jsx)(m.NavLink, {
            to: s,
            target: y ? "_self" : "_blank",
            className: [ne.cta, "platform" === i && u ? ne[u] : "", _ ? ne.disabled : "", p].join(" "),
            style: t,
            "data-variant": i,
            onClick: N,
            disabled: _,
            "aria-label": x,
            children: "platform" === i && u ? (0, f.jsx)(oe, {
              platform: u
            }) : (0, f.jsxs)("div", {
              className: ne.btnContent,
              children: ["left" === n && j(), (0, f.jsx)("span", {
                children: h
              }), "right" === n && j(), d ? (0, f.jsx)("span", {
                className: ne.badge,
                style: g,
                children: d
              }) : null]
            })
          })
        };
      var de = s(45652);
      const me = "rockstargames-sites-rockstargameseb64520e04e486931cd65dc5b3fa61e8",
        ge = "rockstargames-sites-rockstargamescc9a6fdcc84b758d60987ea9a5ddfd81",
        fe = "rockstargames-sites-rockstargamesee609f31f3685766122c2c6fc0ef0710",
        ue = e => {
          let {
            alt: a,
            className: t,
            src: r,
            style: i
          } = e;
          const [c, n] = (0, F.usePreloadImg)(r);
          let o = r;
          !1 === c && (t === fe && (o = s(61820)), o = s(43976));
          const {
            width: l,
            height: d
          } = n, m = {
            "--aspect-ratio": Number.isNaN(l / d) ? "" : l / d,
            ...i
          };
          return (0, f.jsx)("img", {
            src: o,
            className: t ?? "",
            alt: a,
            style: m
          })
        },
        ke = e => {
          let {
            className: a,
            style: t = {},
            image: r = {},
            imageStyle: i = {}
          } = e, {
            alt: c,
            src: n
          } = (0, de.useImageParser)(r);
          return n.desktop || n.mobile || (c = "placeholder", n = {
            mobile: s(61820),
            desktop: s(43976)
          }), (0, f.jsx)("div", {
            className: r.frame ? `${r.frame} ${me}` : me,
            style: t,
            children: n?.desktop && n?.mobile ? (0, f.jsxs)(f.Fragment, {
              children: [(0, f.jsx)(ue, {
                style: {
                  ...i,
                  ...r?.style
                },
                src: n.desktop,
                alt: c,
                className: a ? `${a} ${ge}` : ge
              }), (0, f.jsx)(ue, {
                style: {
                  ...i,
                  ...r?.style
                },
                src: n.mobile,
                alt: c,
                className: a ? `${a} ${fe}` : fe
              })]
            }) : (0, f.jsx)(ue, {
              style: {
                ...i,
                ...r?.style
              },
              src: n?.desktop ?? n?.mobile,
              alt: c,
              className: a
            })
          })
        };
      var _e = s(89416),
        pe = s.n(_e);
      const be = {
          grid: "rockstargames-sites-rockstargamesac295ed5b9cb441ed17843b34e83ea17",
          itemList: "rockstargames-sites-rockstargamescaf5589ddeca00ed09213e547674b1f3",
          gtaplus: "rockstargames-sites-rockstargamesb291112adcf994a0f6acadd86f73b78a",
          rdo: "rockstargames-sites-rockstargamesd146e8f862baefb60e91be5aa3c17b6e",
          noImg: "rockstargames-sites-rockstargamesba9b5ae08642b0213a3f04b3db9a9dac",
          gtao: "rockstargames-sites-rockstargamesb6f2bdfd6a1d57b7ce840f7a56cc510b",
          custom: "rockstargames-sites-rockstargamesaf89164a043648d1464686ff13363ee4",
          yellow: "rockstargames-sites-rockstargamesd244b17b74fc46269e8a106a99ab0f87",
          hotPink: "rockstargames-sites-rockstargamesd90b28503318563cfd6059146d1fb6b6",
          red: "rockstargames-sites-rockstargamesc3f8a8706901874d906f94c626be3c1e",
          turquoise: "rockstargames-sites-rockstargamesfe2ec36e92e2bb4d453fdc4b05966418",
          purple: "rockstargames-sites-rockstargamesf5f7baf5b56f5b2ada053a93392bbf7a",
          teal: "rockstargames-sites-rockstargamesf4a229f41cd20f181d810c311416e3f2",
          blue: "rockstargames-sites-rockstargamesf6f689d687bcd482ea2cd2990fd66878",
          green: "rockstargames-sites-rockstargamesab270f1b4d3ad43e7bc51393b7c5c089",
          darkRed: "rockstargames-sites-rockstargamesdc24ce78d962f3472b06955bf8855103",
          darkBlue: "rockstargames-sites-rockstargamesb354493baac7389b21b511009f287428",
          goldenrod: "rockstargames-sites-rockstargamese4a078efee11d24c64e93ccf0744a33f",
          skull: "rockstargames-sites-rockstargamesd4581a495de14e6762bb15debe5bb810"
        },
        {
          sanitize: ve
        } = pe(),
        he = e => {
          let {
            list: a,
            string: s,
            starColor: t,
            style: r,
            className: i,
            game: c,
            noImg: n,
            columns: l,
            mobileColumns: d
          } = e;
          const [m, g] = (0, o.useState)(null), u = s ? s.split("_#_") : a;
          return (0, o.useEffect)((() => {
            g(a)
          }), [a]), s || a ? l && m ? (0, f.jsx)("div", {
            className: be.grid,
            style: {
              "--unordered-list-grid-column": l,
              "--unordered-list-grid-column-mobile": d ?? l
            },
            children: (0, f.jsx)("ul", {
              style: (0, F.safeStyles)(r),
              className: (0, I.classList)(be.itemList, be.noImg, be[t], be[c]),
              children: m.map((e => (0, f.jsx)("li", {
                dangerouslySetInnerHTML: {
                  __html: ve(e.content)
                }
              }, e.content)))
            })
          }) : (0, f.jsx)("ul", {
            style: (0, F.safeStyles)(r),
            className: (0, I.classList)(be.itemList, be.custom, n ? be.noImg : "", t ? be[t] : "", c ? be[c] : "", i ?? ""),
            children: u.map((e => (0, f.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: ve(e?.content ?? e)
              }
            }, e?.content)))
          }) : null
        },
        xe = {
          hr: "rockstargames-sites-rockstargamesf5cd418ab2ef6a89df6c95d2caa06ba8",
          redLine: "rockstargames-sites-rockstargamesf8b44ef9bbd3e7feb22bf79cc009b16e",
          gtao: "rockstargames-sites-rockstargamesc442f7264db862a7cca6d9a56dacc205"
        },
        ye = e => {
          let {
            style: a,
            className: s = "",
            type: t
          } = e;
          return (0, f.jsx)("div", {
            style: a,
            className: [xe.hr, xe[t], s].join(" ")
          })
        },
        Ne = "rockstargames-sites-rockstargamesfa6885b15a718acb24f48949c52e31f1",
        je = e => {
          let {
            to: a,
            children: s
          } = e;
          return a ? (0, f.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noreferrer",
            children: s
          }) : s
        },
        we = e => {
          let {
            item: a,
            className: s = ""
          } = e;
          return (0, f.jsxs)("div", {
            className: (0, I.classList)("rockstargames-sites-rockstargamesef9e6981551ac5ce250ebff8b18d7a29", s),
            children: [a.title && (0, f.jsx)(je, {
              to: a?.href ?? a?.to,
              children: (0, f.jsx)("h3", {
                children: a.title
              })
            }), Array.isArray(a?.description?.content) ? a.description.content?.map(((e, a) => e?.unorderedList ? (0, f.jsx)(he, {
              columns: e.unorderedList.columns ?? null,
              style: {
                "--unordered-list-padding": "var(--grid-gap-static-sm)",
                "--unordered-list-margin-bottom": ".5rem"
              },
              noImg: !0,
              list: e.unorderedList.list
            }, a) : e?.image ? (0, f.jsx)(ke, {
              image: e.image,
              className: e?.className,
              ariaLabel: e.image?.ariaLabel
            }, a) : e?.separator ? (0, f.jsx)("div", {
              style: {
                margin: `${e.separator.spacing} 0`
              },
              children: (0, f.jsx)(ye, {})
            }, a) : (0, f.jsx)("p", {
              children: (0, f.jsx)("span", {
                className: Ne,
                dangerouslySetInnerHTML: {
                  __html: e
                }
              })
            }, a))) : (0, f.jsx)("span", {
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
          const [t, r] = (0, o.useState)(!1);
          return (0, f.jsx)(Se.cR, {
            ...s,
            onReady: () => {
              document.fonts.ready.then((() => {
                r(!0)
              }))
            },
            children: a
          })
        },
        Ie = {
          badge: "rockstargames-sites-rockstargamese279e2cebfa338f34b03fd732416e836",
          badgeSizeUpdate: "rockstargames-sites-rockstargamesd7362a3e27ccaad9d2aadd2f31691340",
          badge2: "rockstargames-sites-rockstargamesd697f4a5f7c876d5e540a96da1e0ca3a",
          badge3: "rockstargames-sites-rockstargamese1bba3cd4554abbb48a030af24bbada5"
        },
        Te = e => {
          let {
            wrapper: a,
            children: s,
            role: t,
            splitter: r
          } = e;
          return r || t ? a(s) : s
        },
        Me = e => {
          let {
            badge: a,
            badgeType: t,
            role: r,
            splitter: i
          } = e;
          const c = [];
          i ? a.split(i).map(((e, a) => c.push(e))) : c.push(a);
          let n = 100;
          return 2 == c.length && c[1].length < 4 && "off" !== c[1].toLowerCase() && 45, (0, f.jsxs)(Te, {
            splitter: i,
            role: r,
            wrapper: e => (0, f.jsx)("div", {
              className: `${Ie.badge} ${t?Ie[t]:""} `,
              children: e
            }),
            children: [(0, f.jsx)(f.Fragment, {
              children: r && (0, f.jsx)(ke, {
                image: {
                  alt: r,
                  desktop: s(6572)(`./${r}.png`)
                }
              })
            }), (0, f.jsx)(Ce, {
              className: `${i||r?"":Ie.badge} ${t?Ie[t]:""}`,
              min: 8,
              max: 1e3,
              mode: i || r ? "single" : "multi",
              children: c[0]
            }), (0, f.jsx)(f.Fragment, {
              children: c.shift() && i && c.length >= 1 && (0, f.jsx)(Ce, {
                min: 8,
                max: 1e3,
                mode: "single",
                forceSingleModeWidth: !0,
                children: c.join(" ")
              })
            })]
          }, "badge-wrapper")
        },
        Le = "rockstargames-sites-rockstargamesc63cfb461217f059c8c25eec09602b30",
        Ee = e => {
          let {
            color: a
          } = e;
          return (0, f.jsxs)("div", {
            className: "rockstargames-sites-rockstargamesa481f47ab7e8af4042a665fab5aea27c",
            style: {
              "--loader-color": a
            },
            children: [(0, f.jsx)("div", {
              className: Le
            }), (0, f.jsx)("div", {
              className: Le
            }), (0, f.jsx)("div", {
              className: Le
            })]
          })
        };
      var Be = s(94072);
      const Pe = {
          dropdownWrapper: "rockstargames-sites-rockstargamesb951912c02de0e5e881fedd391d04810",
          items: "rockstargames-sites-rockstargamesb0a8f220641417f889d4fd6039fe6bac",
          open: "rockstargames-sites-rockstargamesf5eb88111734e6e70d34ef2b095c44f6",
          opener: "rockstargames-sites-rockstargamesecb577af64f747d0d39cf03939ee3c73",
          secondary: "rockstargames-sites-rockstargamesb64c3515fcd91f6b84410bd14640da81"
        },
        ze = e => {
          let {
            children: a,
            className: s,
            title: t
          } = e;
          const [r, i] = (0, o.useState)(!1);
          return (0, f.jsx)(Be.cp, {
            disabled: !r,
            children: (0, f.jsxs)("div", {
              className: [Pe.dropdownWrapper, r ? Pe.open : "", void 0 !== s ? s : ""].join(" "),
              children: [(0, f.jsx)("button", {
                className: Pe.opener,
                onClick: () => i(!r),
                children: t
              }), r && (0, f.jsx)("div", {
                className: Pe.items,
                onClick: () => i(!1),
                children: a
              })]
            })
          })
        };
      var $e = s(95356);
      const Ve = e => {
          let {
            children: a,
            context: s = null,
            game: t,
            image: r = {},
            style: i = {},
            template: c = null,
            theme: n = null,
            reversedOnMobile: o = !1,
            className: l = "",
            id: d = null
          } = e;
          const m = (0, de.useImageParser)(r),
            g = {
              ...i
            };
          if (m?.src?.desktop) {
            const e = "var(--grid-background-repeat, no-repeat)",
              a = "var(--grid-background-position, center)/var(--grid-background-size, cover)";
            g.background = `url(${m?.src?.desktop}) ${e} ${a}`
          }
          return (0, f.jsx)("div", {
            id: d,
            className: (0, $e.classList)("rockstargames-sites-rockstargamesf42b4606ed4a5b16b7647ad7b7eb229d", o ? "rockstargames-sites-rockstargamesb00444166ce6346d7ca364a75a335ecc" : "", l),
            "data-game": "community" === c ? null : t,
            style: (0, F.safeStyles)(g),
            "data-context": s,
            "data-template": c,
            "data-theme": n,
            children: a
          })
        },
        De = e => {
          let {
            caption: a,
            children: s,
            ...t
          } = e;
          return a ? (0, f.jsxs)("figure", {
            ...t,
            children: [s, (0, f.jsx)("figcaption", {
              dangerouslySetInnerHTML: {
                __html: a
              }
            })]
          }) : s
        },
        Ae = e => {
          let {
            componentTitle: a,
            type: s,
            items: t
          } = e;
          return t?.length ? (0, f.jsx)("div", {
            className: "rockstargames-sites-rockstargamesd393ab6eb68d416b116b6281abdb5e14",
            type: s,
            children: (0, f.jsxs)(Ve, {
              children: [a && (0, f.jsx)("h3", {
                children: a
              }), (0, f.jsx)(Ve, {
                className: "rockstargames-sites-rockstargamesed3ee31cb8e357d795886157f95a742a",
                children: t.map(((e, a) => {
                  return e?.embed ? (0, f.jsx)(De, {
                    caption: e?.caption,
                    children: (0, f.jsx)("div", {
                      className: "rockstargames-sites-rockstargamesdcf1c30612026a517f59af64d8703bc4",
                      dangerouslySetInnerHTML: {
                        __html: (s = e.embed, s.replace(/&gt;/g, ">").replace(/&lt;/g, "<"))
                      }
                    }, `${e?.key??a}_div`)
                  }, e?.key ?? a) : e?.text ? (0, f.jsx)("p", {
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
      var Fe = s(50968);
      const Oe = {
          type: "spring",
          stiffness: 650,
          damping: 45
        },
        Re = {
          ease: "easeOut",
          duration: .9,
          delay: .3
        },
        Ue = {
          open: {
            opacity: 0,
            transition: {
              ease: "easeOut",
              duration: .3
            }
          },
          closed: {
            opacity: 1,
            transition: Re
          }
        },
        Ge = {
          open: {
            opacity: 1,
            display: "grid",
            height: "auto",
            transition: {
              opacity: Re,
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
              height: Oe
            },
            transitionEnd: {
              display: "none"
            }
          }
        },
        He = {
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
            transition: Oe,
            transitionEnd: {
              "--btn-hover-bg-color": "inherit",
              "--btn-hover-bg-color-noBlur": "inherit",
              "--btn-hover-font-color": "inherit",
              "--btn-hover-border-color": "inherit"
            }
          }
        },
        We = {
          pillBtn: "rockstargames-sites-rockstargamesba37d7130b54bd53bd309b0cd04717ff",
          selected: "rockstargames-sites-rockstargamesc9c0bba52c010c4e3571f2702eef944b",
          container: "rockstargames-sites-rockstargamesbfcd1a0671c127c9135d8c2feac75c34",
          content: "rockstargames-sites-rockstargamesa1cf623c9dd51dd05772a395d8311dac",
          unexpandedButton: "rockstargames-sites-rockstargamesba4683b82274b0f8ca98f97fd2b0a1c9",
          expandedArea: "rockstargames-sites-rockstargamesdd25aa78f935c7d4cafdb1c8bc6d7932",
          closeButton: "rockstargames-sites-rockstargamesc559c930e0a5a7caa72b3de9a3362a0a",
          platformButtons: "rockstargames-sites-rockstargamesd6bfc47d3110920d77ea2e70dac9c898",
          platformButton: "rockstargames-sites-rockstargamesb04a9bd68b598682a5dbe99dd1a2f06d",
          xbox: "rockstargames-sites-rockstargamesfe4a687dfc69ef746fcbe4184c7a9574",
          xboxone: "rockstargames-sites-rockstargamesb1f46a1ff640d7398e7736e814a5ed8f",
          xboxseriesxs: "rockstargames-sites-rockstargamese23b6f1412ea1ecb8a616b4f25d2888d",
          ps: "rockstargames-sites-rockstargamese0b107bda3c03c1e82c94195bfbc055b",
          ps4: "rockstargames-sites-rockstargamesdcf3078cbde57db42e66e6ba4c269fbe",
          ps5: "rockstargames-sites-rockstargamese047116842d7619f0e04a3c9b6dbec13",
          pc: "rockstargames-sites-rockstargamesdaa32798c37b9055cd280b838972e63e",
          switch: "rockstargames-sites-rockstargamesae7bc564778d8af6cf5f8a0491ef7dc8",
          buttonText: "rockstargames-sites-rockstargamesc2fb2fb5ec39a5c3b3c14ee6c0505b53"
        },
        qe = e => {
          let {
            buttonText: a = "",
            link: t = "",
            platform: r = "",
            target: i = null,
            onClick: c
          } = e;
          const n = i ?? (t.startsWith(document.location.origin) ? "_self" : "_blank"),
            o = [We.platformButton, We[r]].join(" "),
            l = r ? s(13892)(`./${r}.svg`) : null,
            d = (0, f.jsxs)(f.Fragment, {
              children: [l ? (0, f.jsx)("img", {
                src: l,
                alt: a
              }) : "", !l && (0, f.jsx)("div", {
                className: We.buttonText,
                children: a
              })]
            });
          return t.startsWith("http") ? (0, f.jsx)("span", {
            onClick: c,
            onKeyDown: c,
            role: "link",
            tabIndex: 0,
            children: (0, f.jsx)("a", {
              href: t,
              className: o,
              target: n,
              children: d
            })
          }) : (0, f.jsx)(m.NavLink, {
            className: o,
            onClick: c,
            to: t,
            children: d
          })
        },
        Xe = e => {
          let {
            buttonText: a = "Subscribe",
            className: t,
            children: r,
            platformsAndLinks: i = [],
            trackingType: c = "buy",
            trackingParent: n,
            target: l = null,
            trackingOId: d = null
          } = e;
          const [m, g] = (0, o.useState)(!1), {
            track: u
          } = (0, O.useGtmTrack)();
          return (0, f.jsxs)("div", {
            className: (0, I.classList)(We.container, t),
            children: [(0, f.jsx)(Fe.motion.div, {
              className: We.content,
              animate: m ? "open" : "close",
              variants: Ue,
              children: r
            }), (0, f.jsxs)(Fe.motion.div, {
              onClick: () => {
                g(!m), m || u("select_platform" === c ? {
                  event: "select_platform",
                  event_action: "select_platform",
                  event_category: "cta",
                  event_label: n,
                  text: a?.toLowerCase() ?? "subscribe"
                } : "link_account" === c ? {
                  element_placement: n,
                  event: "cta_link_account",
                  event_action: "link_account",
                  event_category: "cta",
                  event_label: n,
                  o_id: d,
                  text: a?.toLowerCase()
                } : {
                  event: "cta_buy",
                  event_action: "buy",
                  event_category: "cta",
                  event_label: n,
                  text: a?.toLowerCase() ?? "subscribe"
                })
              },
              className: We.unexpandedButton,
              animate: m ? "open" : "closed",
              variants: He,
              initial: !1,
              children: [(0, f.jsx)(Fe.motion.div, {
                className: We.buttonText,
                "data-expanded": m,
                children: "string" == typeof a ? a : "Subscribe"
              }), (0, f.jsxs)(Fe.motion.div, {
                className: We.expandedArea,
                animate: m ? "open" : "closed",
                variants: Ge,
                initial: !1,
                children: [(0, f.jsx)("img", {
                  className: We.closeButton,
                  onClick: () => g(!1),
                  onKeyDown: e => {
                    g(!1)
                  },
                  src: s(72428),
                  alt: "Close",
                  role: "button"
                }), (0, f.jsx)("div", {
                  className: We.platformButtons,
                  children: i.length ? i.map((e => (0, f.jsx)(qe, {
                    buttonText: e.buttonText ?? "",
                    link: e.href,
                    platform: e.platform,
                    onClick: () => (e => {
                      let {
                        href: a,
                        platform: s
                      } = e;
                      u({
                        element_placement: n,
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
        Ke = {
          animateBox: "rockstargames-sites-rockstargamese9374e74c542c1028a2068dfbd1e85a3",
          fadeArea: "rockstargames-sites-rockstargamesa63de5cdf9849ac45a0f6b4f7617cfa5",
          visible: "rockstargames-sites-rockstargamesd7458685114194d602f94e2581de0f08",
          barGrow: "rockstargames-sites-rockstargamesb0f4d843b626e3741c9dd38fcb3f56b0",
          bar: "rockstargames-sites-rockstargamesa4b99f54f3ce3987765143d8a151360a",
          animateMe: "rockstargames-sites-rockstargamesf9c3869a2a1e10490bdfbcb3ee89d7da"
        },
        Ye = e => {
          let {
            children: a,
            style: s
          } = e;
          const t = (0, o.useRef)(null);
          return (0, o.useEffect)((() => {
            new IntersectionObserver((e => {
              e.forEach((e => {
                e.isIntersecting && e.target.classList.add([Ke.visible])
              }))
            })).observe(t?.current)
          }), []), (0, f.jsx)("div", {
            style: s,
            className: [Ke.fadeArea].join(" "),
            ref: t,
            children: a
          })
        },
        Qe = {
          img: "rockstargames-sites-rockstargamese3f505a2281df28eb1acdf2d586e7fbd",
          startAnimation: "rockstargames-sites-rockstargamesa27e4d6733cea4a38e469425ef32ed3a"
        },
        Ze = e => {
          let {
            imgSrc: a,
            title: s
          } = e;
          const [t] = (0, F.usePreloadImg)(a);
          return (0, f.jsx)("div", {
            role: "img",
            "aria-label": s,
            className: [Qe.img, t ? Qe.startAnimation : ""].join(" "),
            style: {
              backgroundImage: `url(${a})`
            }
          })
        },
        Je = e => {
          let {
            game: a,
            to: s
          } = e;
          const {
            fob_640: t,
            site_in_rockstar: r = !1,
            title_slug: i
          } = a;
          let c = i;
          "V" === i && (c = "gta-v"), "GTAOnline" === i && (c = "gta-online"), "undeadnightmare" === i && (c = "reddeadredemption");
          const n = s ?? `${r?"":"/games"}/${c}`;
          return (0, f.jsx)(u, {
            "data-gtm-category": "Games",
            "data-gtm-action": "Game Click-through",
            "data-gtm-label": i,
            "data-testid": `${i}-gamecard`,
            to: n,
            target: "_self",
            className: "rockstargames-sites-rockstargamesfded54fb94f7325c5a0b57590585b175",
            children: (0, f.jsx)(Ze, {
              imgSrc: t,
              title: a.title
            })
          })
        },
        ea = {
          gameSiteHeader: "rockstargames-sites-rockstargamescb7cada84679a7af263e1436675a518a",
          activeNavItem: "rockstargames-sites-rockstargamesaa4aa7ed96facb38ed09c72eededb418",
          navHidden: "rockstargames-sites-rockstargamesac1cb9d2005f287ed666d334f816f8c5",
          navContent: "rockstargames-sites-rockstargamese5abd79468866e31fdad2780b169f687",
          headerNavOpen: "rockstargames-sites-rockstargamesb98508d0923c5bb442c15772fbad9764",
          headerLogo: "rockstargames-sites-rockstargamese666ff4f0b91dfe78991244ac1a759a5",
          bg: "rockstargames-sites-rockstargamescfc6fd456ca2f3e9db06f780f412660f"
        },
        aa = e => {
          let {
            buttonText: a = null,
            gameOverrideStyles: s,
            navLinks: t,
            cta: r = "",
            game: i
          } = e;
          const [c, n] = (0, o.useState)(!1), l = (0, p.useMutateState)(), {
            navHidden: d
          } = (0, p.useState)();
          return (0, o.useEffect)((() => {
            l({
              gameSiteNavOpen: c
            })
          }), [c]), (0, o.useEffect)((() => {
            const e = () => {
              n(!1)
            };
            return document.addEventListener("click", e), () => document.removeEventListener("click", e)
          }), []), (0, f.jsxs)("header", {
            "data-game": i,
            className: [ea.gameSiteHeader, c ? ea.headerNavOpen : "", d ? ea.navHidden : "", s.gameSiteHeader, c ? s.headerNavOpen : ""].join(" "),
            children: [(0, f.jsx)("button", {
              className: [ea.headerLogo, s.headerLogo].join(" "),
              onClick: e => {
                n(!c), e.nativeEvent.stopImmediatePropagation()
              },
              type: "button",
              "aria-label": "Open Game Site Nav",
              dangerouslySetInnerHTML: {
                __html: a
              }
            }), (0, f.jsx)("div", {
              className: ea.bg
            }), (0, f.jsx)("nav", {
              children: (0, f.jsx)("div", {
                className: ea.navContent,
                children: t
              })
            }), r]
          })
        };
      var sa = s(31403);
      class ta extends o.Component {
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
          return this?.state?.error?.message ? (0, f.jsxs)("div", {
            className: "rockstargames-sites-rockstargamesf903c45f8ecc18bd55f702e202f3763a",
            children: [(0, f.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, f.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      const ra = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return function(s) {
            return (0, f.jsx)(ta, {
              header: a,
              children: (0, f.jsx)(e, {
                ...s
              })
            })
          }
        },
        ia = e => {
          let {
            prevRef: a,
            nextRef: s,
            onNextClicked: t,
            onPrevClicked: r
          } = e;
          return (0, f.jsxs)("div", {
            className: "rockstargames-sites-rockstargamesd98f432655f19a842390597c4434db06",
            children: [(0, f.jsx)("div", {
              className: "rockstargames-sites-rockstargamesc06ca360ce11f2cef7baf8c5fba05a42",
              ref: a,
              onClick: r,
              "aria-label": "Previous",
              role: "button",
              tabIndex: 0,
              onKeyUp: () => {}
            }), (0, f.jsx)("div", {
              className: "rockstargames-sites-rockstargamesa4f98606cdef508fbd2e69c5564a92d8",
              ref: s,
              onClick: t,
              "aria-label": "Next",
              role: "button",
              tabIndex: 0,
              onKeyUp: () => {}
            })]
          })
        },
        ca = ra((e => {
          let {
            description: a,
            slideChildren: s,
            size: t,
            title: r,
            customSlidesPerView: i = null,
            customSpaceBetween: c = null,
            slideClass: n,
            style: l,
            className: d,
            cardSizeBreakpoints: m = {},
            customAspectRatio: g,
            titleBadge: u
          } = e;
          const {
            track: k
          } = (0, O.useGtmTrack)(), _ = (0, o.useRef)(null), p = (0, o.useRef)(null), b = (0, o.useRef)(null), [v, h] = (0, o.useState)(null), [x, y] = (0, o.useState)(!1), [N, j] = (0, o.useState)(null), [w, S] = (0, o.useState)({}), [C, T] = (0, o.useState)(), {
            ref: M,
            inView: L
          } = (0, W.cD)({
            threshold: .6
          }), [E, B] = (0, o.useState)(!1), [z, $] = (0, o.useState)(null), [V, D] = (0, o.useState)(!1);
          (0, o.useEffect)((() => {
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
          (0, o.useEffect)((() => {
            if (!_.current) return;
            const e = () => {
              if (_.current) {
                const e = i || Number(window.getComputedStyle(_.current).getPropertyValue("--slides-per-view")),
                  a = i ? 1 : Number(window.getComputedStyle(_.current).getPropertyValue("--slides-per-view-multiplier"));
                j(e * a)
              }
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [_, i]), (0, o.useEffect)((() => {
            if (!s) return;
            let e = !1;
            s.forEach((a => {
              "cover-card" === a?.props?.tina?.payload?.meta?.type && (e = !0, $(a))
            })), B(e);
            const a = s.map(((e, a) => "cover-card" === e?.props?.tina?.payload?.meta?.type && V ? null : (0, f.jsx)(P.Ky, {
              className: "rockstargames-sites-rockstargamesf58e79e329504e170dc9cb4595ea011b",
              onFocus: () => R(a),
              children: e
            }, Symbol(a).toString())));
            h(a)
          }), [s, V]), (0, o.useEffect)((() => {
            T({
              nextEl: b.current,
              prevEl: p.current
            })
          }), [b, p]), (0, o.useEffect)((() => {
            L && !x && s && (k({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: `deck - ${r}`.toLowerCase(),
              element_placement: `deck - ${r}`.toLowerCase()
            }), y(!0))
          }), [L, s]);
          let F = "custom" === t ? {
            "--custom-aspect-ratio": g,
            ...l
          } : {
            ...l
          };
          const R = e => {
            w.slideTo(e)
          };
          return (0, f.jsxs)("div", {
            className: (0, I.classList)("rockstargames-sites-rockstargamesd0c3d91603036c852633939015a6cb48", d),
            "data-size": t,
            "data-sm": m?.sm ? m?.sm : t,
            "data-md": m?.md ? m?.md : t,
            "data-lg": m?.lg ? m?.lg : t,
            "data-xl": m?.xl ? m?.xl : t,
            "data-xxl": m?.xxl ? m?.xxl : t,
            "data-has-covercard": E,
            ref: _,
            style: F,
            children: [(0, f.jsx)("div", {
              className: "rockstargames-sites-rockstargamesddeb75a59ed783554b94e8298897a1fa",
              ref: M
            }), E && V && (0, f.jsx)("div", {
              className: "rockstargames-sites-rockstargamesd5f00d41fdd2c864a0eb9e069cf08db0",
              children: z
            }), (0, f.jsx)("div", {
              className: "rockstargames-sites-rockstargamescdc60dbde3f8db6f466aba8a3e19fa96",
              children: (0, f.jsxs)("div", {
                className: "rockstargames-sites-rockstargamesfb8e207418c783fc2f53b44c19faedca",
                children: [(0, f.jsxs)("div", {
                  className: "rockstargames-sites-rockstargamesb779ba2045a88302079083935c90f7b3",
                  children: [!E && r && (0, f.jsxs)("div", {
                    className: "rockstargames-sites-rockstargamesedf90c7c5ee1c79049f5a6442f14c949",
                    children: [(0, f.jsx)("h2", {
                      children: r
                    }), u && (0, f.jsx)("span", {
                      className: "rockstargames-sites-rockstargamesd7a4aaeb70d68fdee39312192efb990b",
                      children: u
                    })]
                  }), (0, f.jsx)(ia, {
                    prevRef: p,
                    nextRef: b,
                    onNextClicked: () => {},
                    onPrevClicked: () => {}
                  })]
                }), a && (0, f.jsx)("div", {
                  className: "rockstargames-sites-rockstargamesa1007d13e3a321bb18b5fc667025d545",
                  dangerouslySetInnerHTML: {
                    __html: a
                  }
                })]
              })
            }), N ? (0, f.jsx)(P.wx, {
              slidesPerView: N,
              onInit: e => {
                S(e)
              },
              grabCursor: !0,
              navigation: C,
              modules: [sa._2],
              breakpoints: A,
              slideClass: (0, I.classList)("swiper-slide", n),
              onSlideNextTransitionEnd: () => {
                k({
                  event_action: "next",
                  event_category: "carousel",
                  event: "carousel_next",
                  event_label: r?.toLowerCase() ?? ""
                })
              },
              onSlidePrevTransitionEnd: () => {
                k({
                  event_action: "previous",
                  event_category: "carousel",
                  event: "carousel_previous",
                  event_label: r?.toLowerCase() ?? ""
                })
              },
              onSlideChangeTransitionEnd: () => {
                k({
                  event_action: "swipe",
                  event_category: "carousel",
                  event: "carousel_swipe",
                  event_label: r?.toLowerCase() ?? ""
                })
              },
              children: v
            }) : ""]
          })
        }), null),
        na = {
          pillBtn: "rockstargames-sites-rockstargamesd008b074498ad02717806cc094b8a780",
          selected: "rockstargames-sites-rockstargamesbe9a2e37ec59e339b0d72cd8e5256703",
          hero: "rockstargames-sites-rockstargamesd1346f9b98fbaac26948e361bd98b4c6",
          images: "rockstargames-sites-rockstargamesc9c078a3102a96b26f1bf1f98306384f",
          background: "rockstargames-sites-rockstargamesa271224ca2caf56b470059cdb98d9a42",
          gradient: "rockstargames-sites-rockstargamesae257e9d159ae9bd7c8685e38ba16f59",
          layered: "rockstargames-sites-rockstargamesf663886f051e47ea04f097c85ae6625b",
          content: "rockstargames-sites-rockstargamesf9c204f451f3a53bcc307c00eb5f907f",
          descriptions: "rockstargames-sites-rockstargamesd1bbf288f3fe6c79e658764847d2890a",
          buttonGroup: "rockstargames-sites-rockstargamesfb373367ffd03ba01edaf671175244ab",
          legalText: "rockstargames-sites-rockstargamesf625ffdd1b33a1642aa0dec12efe7897",
          shardsCarousel: "rockstargames-sites-rockstargamese999b9cecfe233bcee8cab8682fb96bf"
        },
        oa = {
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
        la = {
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
        da = e => {
          let {
            title: a = "",
            mobileImg: s,
            desktopImg: t
          } = e;
          const r = (0, I.useGetCdnSource)(s ?? null),
            i = (0, I.useGetCdnSource)(t ?? r);
          return (0, f.jsx)("div", {
            className: na.shard,
            style: {
              "--background-image-mobile": `url(${r})`,
              "--background-image-desktop": `url(${i})`
            },
            children: (0, f.jsx)("h5", {
              children: a
            })
          })
        },
        ma = e => {
          let {
            title: a = "Membership Rewards",
            shards: s
          } = e;
          const [t, r] = (0, o.useState)(null);
          return (0, o.useEffect)((() => {
            s && r(s.reduce(((e, a) => {
              if (!a?.shardImg) return e;
              const {
                title: s,
                shardImg: t
              } = a, {
                mobile: r,
                desktop: i
              } = t;
              return e.push((0, f.jsx)(da, {
                title: s,
                mobileImg: r?.full_src,
                desktopImg: i?.full_src
              })), e
            }), []))
          }), [s]), t ? (0, f.jsx)("div", {
            className: na.shardsCarousel,
            children: (0, f.jsx)(ca, {
              title: a,
              slideChildren: t,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        ga = e => {
          let {
            animated: a = !1,
            ctas: s = [],
            description: t,
            expandingButtonLabel: r = "Subscribe",
            title: i
          } = e;
          const [c, n] = (0, o.useState)([]), [l, d] = (0, o.useState)([]);
          return (0, o.useEffect)((() => {
            n(s.reduce(((e, a) => a.isInExpandingButton ? (e.push({
              href: a.href,
              platform: a.platform,
              buttonText: a.buttonText
            }), e) : e), [])), d(s.reduce(((e, a) => (a.isInExpandingButton || e.push({
              icon: a.platform ? a.platform : "",
              title: a.buttonText,
              to: a.href
            }), e)), []))
          }), s), s.length ? c.length ? (0, f.jsx)(Fe.motion.div, {
            variants: a ? la : void 0,
            children: (0, f.jsxs)(Xe, {
              buttonText: r,
              platformsAndLinks: c,
              children: [(0, f.jsxs)(Fe.motion.div, {
                className: na.descriptions,
                variants: a ? la : void 0,
                children: [(0, f.jsx)("h2", {
                  dangerouslySetInnerHTML: {
                    __html: i
                  }
                }), (0, f.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: t
                  }
                })]
              }), !!l && !!l.length && (0, f.jsx)(Fe.motion.div, {
                variants: la,
                children: (0, f.jsx)(B, {
                  buttons: l,
                  className: na.buttonGroup
                })
              })]
            })
          }) : (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsxs)(Fe.motion.div, {
              className: na.descriptions,
              variants: a ? la : void 0,
              children: [(0, f.jsx)("h2", {
                dangerouslySetInnerHTML: {
                  __html: i
                }
              }), (0, f.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: t
                }
              })]
            }), !!l && !!l.length && (0, f.jsx)(Fe.motion.div, {
              variants: la,
              children: (0, f.jsx)(B, {
                buttons: l,
                className: na.buttonGroup
              })
            })]
          }) : (0, f.jsxs)(Fe.motion.div, {
            className: na.descriptions,
            variants: a ? la : void 0,
            children: [(0, f.jsx)("h2", {
              dangerouslySetInnerHTML: {
                __html: i
              }
            }), (0, f.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: t
              }
            })]
          })
        },
        fa = e => {
          let {
            animated: a = !1,
            brands: s = [],
            ctas: t = [],
            description: r = "",
            expandingButtonLabel: i = "Subscribe",
            title: c = "",
            legalText: n
          } = e;
          return (0, f.jsxs)(Fe.motion.div, {
            className: na.content,
            initial: "hidden",
            animate: "visible",
            variants: a ? oa : void 0,
            children: [(0, f.jsx)(Fe.motion.div, {
              variants: a ? la : void 0,
              children: (0, f.jsx)(w, {
                brands: s
              })
            }), (0, f.jsx)(ga, {
              animated: a,
              ctas: t,
              description: r,
              expandingButtonLabel: i,
              title: c
            }), n && (0, f.jsx)(Fe.motion.div, {
              className: na.legalText,
              variants: a ? la : void 0,
              children: (0, f.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: n
                }
              })
            })]
          })
        },
        ua = e => {
          let {
            animated: a = !1,
            backgroundImage: s,
            brands: t = [],
            className: r,
            ctas: i = [],
            description: c = "",
            expandingButtonLabel: n = "Subscribe",
            layeredImage: o,
            layeredImageSettings: l,
            legalText: d,
            shardsSection: m = {},
            theme: g = "gen9",
            title: u = ""
          } = e;
          const k = (e => {
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
                const [t, r] = e;
                if (s.has(t)) {
                  const e = s.get(t);
                  Object.entries(r).forEach((r => {
                    const [i, c] = r;
                    if (s.has(t) && s.has(i)) {
                      const t = `${s.get(i)}${e}`;
                      a[t] = "imageWidth" !== i ? c ? `${c}px` : "0px" : c ? `${c}vw` : "100vw"
                    }
                  }))
                }
              })), a
            })(l),
            _ = (0, I.useGetCdnSource)(s?.mobile?.full_src ?? null),
            p = (0, I.useGetCdnSource)(s?.desktop?.full_src ?? _),
            b = (0, I.useGetCdnSource)(o?.mobile?.full_src ?? null),
            v = (0, I.useGetCdnSource)(o?.desktop?.full_src ?? b);
          return (0, f.jsxs)(Fe.motion.div, {
            className: (0, I.classList)(na.hero, r),
            style: {
              "--background-image-desktop": `url(${p})`,
              "--background-image-mobile": `url(${_})`,
              "--layered-image-desktop": `url(${v})`,
              "--layered-image-mobile": `url(${b})`
            },
            initial: "hidden",
            animate: "visible",
            variants: a ? oa : void 0,
            "data-type": "hero",
            theme: g,
            children: [(0, f.jsxs)("div", {
              className: na.images,
              children: [p && _ ? (0, f.jsx)("div", {
                className: na.background,
                style: s?.style ?? {}
              }) : "", b && v ? (0, f.jsx)("div", {
                className: na.layered,
                style: l ? k : {}
              }) : "", (0, f.jsx)("div", {
                className: na.gradient
              })]
            }), (0, f.jsx)(fa, {
              animated: a,
              ctas: i,
              description: c,
              expandingButtonLabel: n,
              title: u,
              brands: t,
              legalText: d
            }), m?.shards && (0, f.jsx)(ma, {
              ...m
            })]
          })
        };
      var ka = s(79784),
        _a = s.n(ka);
      const pa = e => {
        let {
          children: a,
          attributes: s = {},
          className: t = "",
          style: r = {}
        } = e;
        return (0, f.jsx)("span", {
          className: (0, I.classList)(t, s?.className, "rockstargames-sites-rockstargamesa7f106a8036d74ed9282a741476c6b5a"),
          style: (0, F.safeStyles)(r ?? s?.style ?? {}),
          dangerouslySetInnerHTML: {
            __html: _a().unescape(a)
          }
        })
      };
      var ba = s(53592);
      const va = JSON.parse('{"us":{"aria_label_open_new_window":"(Opens in a new window)","plm_nav_scroll_left":"Scroll Left","plm_nav_scroll_right":"Scroll Right","language_selector_default":"Select a Language","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","sc_link_account":"Account","sc_link_activity_feed":"Activity Feed","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell My Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_messages":"Messages","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Toggle Social Club Menu","rp_icon":"RP Category","components_track_list_title":"Tracklist","disabled_label":"Disabled","next_button_label":"Next video page","previous_button_label":"Previous video page"},"de":{"aria_label_open_new_window":"(Öffnet ein neues Fenster)","plm_nav_scroll_left":"Links scrollen","plm_nav_scroll_right":"Rechts scrollen","language_selector_default":"Eine Sprache auswählen","profile_selector_mugshot":"Verbrecherfoto von {userName}","profile_selector_profile_card":"Profildaten","profile_selector_rp_icon":"RP-Kategorie","profile_selector_switch_character":"Charakter wechseln","sc_link_account":"Konto","sc_link_activity_feed":"Aktivitäten-Feed","sc_link_cookies_policy":"Cookie-Richtlinie","sc_link_cookies_settings":"Cookie-Einstellungen","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Meine Informationen nicht verkaufen","sc_link_find_friends":"Freunde finden","sc_link_friends":"Freunde","sc_link_game_activation":"Spielaktivierung","sc_link_help":"Hilfe","sc_link_import_friends":"Freunde importieren","sc_link_join_social_club":"Registrieren","sc_link_legal":"Rechtliches","sc_link_log_out":"Abmelden","sc_link_messages":"Nachrichten","sc_link_my_friends":"Meine Freunde","sc_link_notifications":"Benachrichtigungen","sc_link_privacy_policy":"Datenschutzrichtlinien","sc_link_settings":"Einstellungen","sc_link_sign_in":"Anmelden","sc_link_support":"Support","sc_link_view_my_profile":"Mein Profil ansehen","sc_menu_drag_handle":"Menü öffnen bzw. schließen","sc_menu_toggle":"Social-Club-Menü öffnen bzw. schließen","components_track_list_title":"Trackliste","disabled_label":"Deaktiviert","next_button_label":"Nächste Videoseite","previous_button_label":"Vorherige Videoseite"},"es":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","plm_nav_scroll_left":"Desplazar hacia la izquierda","plm_nav_scroll_right":"Desplazar hacia la derecha","language_selector_default":"Selecciona un idioma","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta de perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Ajustes de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendáis mis datos","sc_link_find_friends":"Buscar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación del juego","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registrarse","sc_link_legal":"Aviso legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Ajustes","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Asistencia técnica","sc_link_view_my_profile":"Ver mi perfil","sc_menu_drag_handle":"Arrastrar el controlador del menú","sc_menu_toggle":"Cambiar el menú del Social Club","components_track_list_title":"Lista de pistas","disabled_label":"Desactivado","next_button_label":"Página de vídeo siguiente","previous_button_label":"Página de vídeo anterior"},"mx":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","plm_nav_scroll_left":"Desplazarse hacia la izquierda","plm_nav_scroll_right":"Desplazarse hacia la derecha","language_selector_default":"Seleccionar un idioma","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta del perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Muro de actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configuración de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendan mis datos","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación de juegos","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registro","sc_link_legal":"Legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Configuración","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Soporte","sc_link_view_my_profile":"Ver mi perfil","sc_menu_drag_handle":"Mover el handle del menú","sc_menu_toggle":"Cambiar menú del Social Club","components_track_list_title":"Lista de canciones","disabled_label":"Desactivado","next_button_label":"Página de video siguiente","previous_button_label":"Página de video anterior"},"fr":{"aria_label_open_new_window":"(S’ouvre dans une nouvelle fenêtre)","plm_nav_scroll_left":"Faire défiler vers la gauche","plm_nav_scroll_right":"Faire défiler vers la droite","language_selector_default":"Sélectionner une langue","profile_selector_mugshot":"Photo d\'identité : {userName}","profile_selector_profile_card":"Carte du profil","profile_selector_rp_icon":"Catégorie de RP","profile_selector_switch_character":"Changer de personnage","sc_link_account":"Compte","sc_link_activity_feed":"Fil d\'activités","sc_link_cookies_policy":"Politique en matière de cookies","sc_link_cookies_settings":"Paramètres des cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Ne pas vendre mes informations","sc_link_find_friends":"Trouver des amis","sc_link_friends":"Amis","sc_link_game_activation":"Activation de jeux","sc_link_help":"Aide","sc_link_import_friends":"Importer des amis","sc_link_join_social_club":"S’inscrire","sc_link_legal":"Mentions légales","sc_link_log_out":"Se déconnecter","sc_link_messages":"Messages","sc_link_my_friends":"Mes amis","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Charte de confidentialité","sc_link_settings":"Paramètres","sc_link_sign_in":"Se connecter","sc_link_support":"Assistance","sc_link_view_my_profile":"Voir mon profil","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Afficher le menu du Social Club","components_track_list_title":"Liste des morceaux","disabled_label":"Désactivé","next_button_label":"Page vidéo suivante","previous_button_label":"Page vidéo précédente"},"it":{"aria_label_open_new_window":"(Apri in una nuova finestra)","plm_nav_scroll_left":"Scorri a sinistra","plm_nav_scroll_right":"Scorri a destra","language_selector_default":"Seleziona una lingua","profile_selector_mugshot":"Foto segnaletica di {userName}","profile_selector_profile_card":"Scheda del profilo","profile_selector_rp_icon":"Categoria RP","profile_selector_switch_character":"Cambia personaggio","sc_link_account":"Account","sc_link_activity_feed":"Feed attività","sc_link_cookies_policy":"Politica sui cookie","sc_link_cookies_settings":"Impostazioni dei cookie","sc_link_crews":"Crew","sc_link_do_not_sell_my_information":"Non vendere le mie informazioni","sc_link_find_friends":"Trova amici","sc_link_friends":"Amici","sc_link_game_activation":"Attivazione gioco","sc_link_help":"Assistenza","sc_link_import_friends":"Importa amici","sc_link_join_social_club":"Registrati","sc_link_legal":"Note legali","sc_link_log_out":"Esci","sc_link_messages":"Messaggi","sc_link_my_friends":"I miei amici","sc_link_notifications":"Notifiche","sc_link_privacy_policy":"Politica sulla privacy","sc_link_settings":"Impostazioni","sc_link_sign_in":"Accedi","sc_link_support":"Supporto","sc_link_view_my_profile":"Visualizza il mio profilo","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Apri/chiudi il menu del Social Club","components_track_list_title":"Tracklist","disabled_label":"Disabilitato","next_button_label":"Pagina di video successiva","previous_button_label":"Pagina di video precedente"},"jp":{"aria_label_open_new_window":"(新しいウィンドウで開きます)","plm_nav_scroll_left":"左にスクロール","plm_nav_scroll_right":"右にスクロール","language_selector_default":"言語を選択","profile_selector_mugshot":"{ユーザーネーム}顔写真","profile_selector_profile_card":"プロフィールカード","profile_selector_rp_icon":"RPカテゴリー","profile_selector_switch_character":"キャラクター変更","sc_link_account":"アカウント","sc_link_activity_feed":"アクティビティフィード","sc_link_cookies_policy":"クッキーポリシー","sc_link_cookies_settings":"クッキー設定","sc_link_crews":"クルー","sc_link_do_not_sell_my_information":"個人情報を売らないでください","sc_link_find_friends":"フレンドを検索","sc_link_friends":"フレンド","sc_link_game_activation":"ゲームアクティベーション","sc_link_help":"ヘルプ","sc_link_import_friends":"フレンドをインポート","sc_link_join_social_club":"サインアップ","sc_link_legal":"利用規約","sc_link_log_out":"ログアウト","sc_link_messages":"メッセージ","sc_link_my_friends":"フレンド","sc_link_notifications":"通知","sc_link_privacy_policy":"プライバシーポリシー","sc_link_settings":"設定","sc_link_sign_in":"サインイン","sc_link_support":"サポート","sc_link_view_my_profile":"プロフィールを表示","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Social Clubメニューを切り替え","components_track_list_title":"トラックリスト","disabled_label":"無効","next_button_label":"次のビデオページ","previous_button_label":"前のビデオページ"},"kr":{"aria_label_open_new_window":"(새 창에서 열기)","plm_nav_scroll_left":"왼쪽 스크롤","plm_nav_scroll_right":"오른쪽 스크롤","language_selector_default":"언어 선택","profile_selector_mugshot":"{userName} 머그샷","profile_selector_profile_card":"프로필 카드","profile_selector_rp_icon":"RP 카테고리","profile_selector_switch_character":"캐릭터 교체","sc_link_account":"계정","sc_link_activity_feed":"활동 피드","sc_link_cookies_policy":"쿠키 정책","sc_link_cookies_settings":"쿠키 설정","sc_link_crews":"조직","sc_link_do_not_sell_my_information":"내 정보 판매 안 함","sc_link_find_friends":"친구 찾기","sc_link_friends":"친구","sc_link_game_activation":"게임 활성화","sc_link_help":"도움말","sc_link_import_friends":"친구 불러오기","sc_link_join_social_club":"가입","sc_link_legal":"법률 관련","sc_link_log_out":"로그아웃","sc_link_messages":"메시지","sc_link_my_friends":"내 친구","sc_link_notifications":"알림","sc_link_privacy_policy":"개인 정보 보호 정책","sc_link_settings":"설정","sc_link_sign_in":"로그인","sc_link_support":"지원","sc_link_view_my_profile":"내 프로필 보기","sc_menu_drag_handle":"드래그 메뉴 핸들","sc_menu_toggle":"Social Club 메뉴 켜기/끄기","components_track_list_title":"트랙리스트","disabled_label":"비활성화됨","next_button_label":"다음 비디오 페이지","previous_button_label":"이전 비디오 페이지"},"pl":{"aria_label_open_new_window":"(Otwórz w nowym oknie)","plm_nav_scroll_left":"Przesuń w lewo","plm_nav_scroll_right":"Przesuń w prawo","language_selector_default":"Wybierz język","profile_selector_mugshot":"Zdjęcie – {userName}","profile_selector_profile_card":"Karta profilu","profile_selector_rp_icon":"Poziom RP","profile_selector_switch_character":"Zmień postać","sc_link_account":"Konto","sc_link_activity_feed":"Zajęcia","sc_link_cookies_policy":"Polityka plików cookie","sc_link_cookies_settings":"Ustawienia plików cookie","sc_link_crews":"Ekipy","sc_link_do_not_sell_my_information":"Zabraniam sprzedaży moich danych","sc_link_find_friends":"Szukaj znajomych","sc_link_friends":"Znajomi","sc_link_game_activation":"Aktywacja gry","sc_link_help":"Pomoc","sc_link_import_friends":"Importuj znajomych","sc_link_join_social_club":"Zarejestruj się","sc_link_legal":"Informacje prawne","sc_link_log_out":"Wyloguj się","sc_link_messages":"Wiadomości","sc_link_my_friends":"Moi znajomi","sc_link_notifications":"Powiadomienia","sc_link_privacy_policy":"Polityka prywatności","sc_link_settings":"Ustawienia","sc_link_sign_in":"Zaloguj się","sc_link_support":"Wsparcie","sc_link_view_my_profile":"Przeglądaj profil","sc_menu_drag_handle":"Przeciągnij uchwyt menu","sc_menu_toggle":"Włącz lub wyłącz menu Social Club","components_track_list_title":"Lista utworów","disabled_label":"Wyłączone","next_button_label":"Następna strona z filmami","previous_button_label":"Poprzednia strona z filmami"},"br":{"aria_label_open_new_window":"(Abre em uma nova janela)","plm_nav_scroll_left":"Rolar para a esquerda","plm_nav_scroll_right":"Rolar para a direita","language_selector_default":"Selecione um idioma","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Cartão de perfil","profile_selector_rp_icon":"Categoria de RP","profile_selector_switch_character":"Alternar personagem","sc_link_account":"Conta","sc_link_activity_feed":"Feed de atividade","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configurações de cookies","sc_link_crews":"Comandos","sc_link_do_not_sell_my_information":"Não vendam a minha informação","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Ativação de jogos","sc_link_help":"Ajuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Inscrever-se","sc_link_legal":"Aviso legal","sc_link_log_out":"Sair","sc_link_messages":"Mensagens","sc_link_my_friends":"Meus amigos","sc_link_notifications":"Notificações","sc_link_privacy_policy":"Política de Privacidade","sc_link_settings":"Configurações","sc_link_sign_in":"Iniciar sessão","sc_link_support":"Suporte","sc_link_view_my_profile":"Visualizar meu perfil","sc_menu_drag_handle":"Arrastar título do menu","sc_menu_toggle":"Alternar menu do Social Club","components_track_list_title":"Lista de faixas","disabled_label":"Desabilitado","next_button_label":"Próxima página de vídeos","previous_button_label":"Página anterior de vídeos"},"ru":{"aria_label_open_new_window":"(ссылка откроется в новом окне)","plm_nav_scroll_left":"Пролистать влево","plm_nav_scroll_right":"Пролистать вправо","language_selector_default":"Выбрать язык","profile_selector_mugshot":"Фотография игрока {userName}","profile_selector_profile_card":"Карта профиля","profile_selector_rp_icon":"Категория опыта","profile_selector_switch_character":"Сменить персонажа","sc_link_account":"Учетная запись","sc_link_activity_feed":"Лента событий","sc_link_cookies_policy":"Политика использования файлов Cookie","sc_link_cookies_settings":"Настройки файлов Cookie","sc_link_crews":"Банды","sc_link_do_not_sell_my_information":"Я запрещаю продавать свою личную информацию","sc_link_find_friends":"Поиск друзей","sc_link_friends":"Друзья","sc_link_game_activation":"Активация игры","sc_link_help":"Помощь","sc_link_import_friends":"Импорт друзей","sc_link_join_social_club":"Регистрация","sc_link_legal":"Юридическая информация","sc_link_log_out":"Выход","sc_link_messages":"Сообщения","sc_link_my_friends":"Мои друзья","sc_link_notifications":"Уведомления","sc_link_privacy_policy":"Политика конфиденциальности","sc_link_settings":"Настройки","sc_link_sign_in":"Войти","sc_link_support":"Поддержка","sc_link_view_my_profile":"Моя учетная запись","sc_menu_drag_handle":"Перенести маркер меню","sc_menu_toggle":"Переключить меню Social Club","components_track_list_title":"Список песен","disabled_label":"Отключено","next_button_label":"Следующая страница с видео","previous_button_label":"Предыдущая страница с видео"},"hans":{"aria_label_open_new_window":"（在新窗口中打开）","plm_nav_scroll_left":"向左滚动","plm_nav_scroll_right":"向右滚动","language_selector_default":"选择一种语言","profile_selector_mugshot":"{userName} 面部照片","profile_selector_profile_card":"档案卡","profile_selector_rp_icon":"声望值类别","profile_selector_switch_character":"切换角色","sc_link_account":"账户","sc_link_activity_feed":"活动动态","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 设置","sc_link_crews":"帮会","sc_link_do_not_sell_my_information":"请勿出售我的信息","sc_link_find_friends":"查找好友","sc_link_friends":"好友","sc_link_game_activation":"游戏激活","sc_link_help":"帮助","sc_link_import_friends":"导入好友","sc_link_join_social_club":"注册","sc_link_legal":"法律声明","sc_link_log_out":"登出","sc_link_messages":"信息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隐私政策","sc_link_settings":"设置","sc_link_sign_in":"登录","sc_link_support":"支持","sc_link_view_my_profile":"查看我的档案","sc_menu_drag_handle":"拖动菜单处理","sc_menu_toggle":"切换 Social Club 菜单","components_track_list_title":"曲目列表","disabled_label":"已禁用","next_button_label":"下一页视频","previous_button_label":"上一页视频"},"tw":{"aria_label_open_new_window":"（在新視窗開啟）","plm_nav_scroll_left":"向左捲動","plm_nav_scroll_right":"向右捲動","language_selector_default":"選擇語言","profile_selector_mugshot":"{userName} 罪犯檔案照","profile_selector_profile_card":"資料卡","profile_selector_rp_icon":"聲望值類別","profile_selector_switch_character":"切換角色","sc_link_account":"帳戶","sc_link_activity_feed":"動態活動","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 設定","sc_link_crews":"幫會","sc_link_do_not_sell_my_information":"不要販售我的個人資料","sc_link_find_friends":"尋找好友","sc_link_friends":"好友","sc_link_game_activation":"遊戲啟用","sc_link_help":"幫助","sc_link_import_friends":"匯入好友","sc_link_join_social_club":"註冊","sc_link_legal":"法律聲明","sc_link_log_out":"登出","sc_link_messages":"訊息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隱私權政策","sc_link_settings":"設定","sc_link_sign_in":"登入","sc_link_support":"支援","sc_link_view_my_profile":"查看我的設定檔","sc_menu_drag_handle":"拖曳選單控點","sc_menu_toggle":"開關 Social Club 選單","components_track_list_title":"曲目清單","disabled_label":"停用","next_button_label":"下一個影片頁面","previous_button_label":"上一個影片頁面"}}'),
        ha = (0, l.defineMessages)({
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          }
        }),
        xa = {
          pillBtn: "rockstargames-sites-rockstargamescb792ef8796eaa09f8b5c1ee0230fcd7",
          selected: "rockstargames-sites-rockstargamesc951b9f5173e8a37be389854c40995ee",
          scMenuStyles: "rockstargames-sites-rockstargamesfa91a55e22ad688cba0bc1210eaf4726",
          languageSelector: "rockstargames-sites-rockstargamesb631f2ce92e4a89f8eddebd32e8ed30a",
          open: "rockstargames-sites-rockstargamesedc598921a872174190475d0ad016d15",
          linkWrapper: "rockstargames-sites-rockstargamesc4b7087d1fcbaad6967e61b84160ff79",
          links: "rockstargames-sites-rockstargamesc7d345d5c7e567e0ee75b792d5bdfb88",
          selectBoxWrapper: "rockstargames-sites-rockstargamese3e55a10507405de05ae92006ec0d02b",
          selectBox: "rockstargames-sites-rockstargamesc646a2bff16ec3003b027857488cd612",
          selectBoxOption: "rockstargames-sites-rockstargamesbcccd1077d13d7fe1585655e5c5f8363"
        },
        ya = (0, l.withIntl)((e => {
          let {
            theme: a,
            languageSelectorOpened: s,
            setLanguageSelectorOpened: t
          } = e;
          const r = (0, m.useLocation)(),
            i = (0, l.useIntl)(),
            [c, n] = (0, l.getLocale)(),
            [d, g] = (0, o.useState)(!1),
            k = (0, o.useMemo)((() => (0, ba.c)()), []),
            _ = (0, o.useCallback)((e => {
              let a = r.pathname;
              const s = a.split("/");
              return l.locales.map((e => e.subdomaincom)).includes(s[0]) && (a = s.slice(1).join("/")), k.currentSite?.site === ba.U.www ? "en" === e ? `${window.location.origin}${a}${r.search}` : `${window.location.origin}/${e}${a}${r.search}` : `${window.location.origin}${a}${r.search}`
            }), [r]),
            p = (0, o.useRef)(null),
            [b, v] = (0, o.useState)(0),
            h = matchMedia("(hover: none) and (pointer: coarse)").matches,
            x = e => {
              if (t && t(!1), c.subdomaincom === e || "none" === e) return void(t && t(!1));
              const a = l.locales.find((a => a.subdomaincom === e));
              a && (n(a.iso), window.location.href = _(e))
            };
          return (0, o.useEffect)((() => {
            void 0 !== s && !1 === s && !0 === d && g(!1)
          }), [s]), (0, o.useEffect)((() => {
            p.current && v(p.current.scrollHeight)
          }), [p]), (0, f.jsxs)("div", {
            className: [xa.languageSelector, d ? xa.open : ""].join(" "),
            "data-theme": a,
            children: [h && "sc-menu" === a && (0, f.jsx)("div", {
              className: xa.selectBoxWrapper,
              children: (0, f.jsxs)("select", {
                className: xa.selectBox,
                onClick: e => e.stopPropagation(),
                onChange: e => {
                  x(e.currentTarget.value)
                },
                "aria-label": i.formatMessage(ha.language_selector_default),
                children: [(0, f.jsx)("option", {
                  className: xa.selectBoxOption,
                  value: "none",
                  children: (0, f.jsx)(l.FormattedMessage, {
                    ...ha.language_selector_default
                  })
                }), l.locales.map((e => {
                  let {
                    label: a,
                    subdomaincom: s
                  } = e;
                  return (0, f.jsx)("option", {
                    className: xa.selectBoxOption,
                    value: s,
                    children: a
                  }, `mobile-${s}`)
                }))]
              })
            }), (!h || "sc-menu" !== a) && (0, f.jsxs)(f.Fragment, {
              children: [(0, f.jsxs)("button", {
                onClick: e => {
                  e.stopPropagation(), t && t(!d), g(!d)
                },
                type: "button",
                "aria-label": i.formatMessage(ha.language_selector_default),
                children: [(0, f.jsx)("i", {}), (0, f.jsx)("span", {
                  children: (0, f.jsx)(l.FormattedMessage, {
                    ...ha.language_selector_default
                  })
                })]
              }), (0, f.jsx)("div", {
                className: xa.linkWrapper,
                ref: p,
                style: {
                  "--ls-linkWrapper-opened-height": `${b}px`
                },
                children: (0, f.jsx)("div", {
                  className: xa.links,
                  children: l.locales.map((e => {
                    let {
                      subdomaincom: a,
                      label: s
                    } = e;
                    return (0, f.jsx)(u, {
                      to: _(a),
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
        Na = {
          layeredImage: "rockstargames-sites-rockstargamesa29c233d553c5905763bb69412c1ece4",
          layersWrapper: "rockstargames-sites-rockstargamesaabf78eb3e1fe545556ad0fa5639296e",
          "hero-lg": "rockstargames-sites-rockstargamesca666917bdeaed43fd0a7af7dc30a0f7",
          "hero-md": "rockstargames-sites-rockstargamesf0a202fcbf13f1e91157e531ae829ea3",
          "hero-sm": "rockstargames-sites-rockstargamese03dbf5d16aeab81ca65f4cb7e64446f",
          contain: "rockstargames-sites-rockstargamesc4c3c929b11e88540e3f19d5715393ec",
          cover: "rockstargames-sites-rockstargamesb283d6381c82abf4dde21c57b8fc5f66",
          fill: "rockstargames-sites-rockstargamese9d16b94c1ed476c9346cb6f48f5ad3e",
          "bg-img": "rockstargames-sites-rockstargamese45fabf9c4e04bf3ee27e9c84c50c09b",
          imageLayer: "rockstargames-sites-rockstargamesed8d0ad18a62f087629ff5831fa0ac55",
          "layer-lg-height": "rockstargames-sites-rockstargamesfaf1d5c6b2fe2ad27d4bb95ba7388f3d",
          "layer-md-height": "rockstargames-sites-rockstargamesb41041f11a5ef98325948acc3dec956c",
          "layer-sm-height": "rockstargames-sites-rockstargamesba7d5822aa073c9e01cd682d65c18944",
          "layer-xl-height": "rockstargames-sites-rockstargamesec2399a1f7e79e9aacba81b242ad0602",
          "layer-xs-height": "rockstargames-sites-rockstargamesa6ec38ac99c762fcf0dd99aa2ced8f2b",
          "layer-xxl-height": "rockstargames-sites-rockstargamesd7c1314e717273dfbb2acd3d5e06e585",
          "layer-lg-width": "rockstargames-sites-rockstargamesca0dd7a55a5db5ee358ce51a166e5431",
          "layer-md-width": "rockstargames-sites-rockstargamesbd4c246f4f0eaf7173d104ed1e7c2d06",
          "layer-sm-width": "rockstargames-sites-rockstargamesfe3f49cba9cc10e4e076a43a6b36b862",
          "layer-xl-width": "rockstargames-sites-rockstargamesbde3d6485ac7bb483dcca1ad4e2bbe67",
          "layer-xs-width": "rockstargames-sites-rockstargamesb87efd95b330cacd4a5eaecf83528f4d",
          "layer-xxl-width": "rockstargames-sites-rockstargamesac872df7985f9d591c85f97c72d451dc",
          "bottom-y": "rockstargames-sites-rockstargamesd63fdb49c964c28c5e8952cd79a393a0",
          "center-x": "rockstargames-sites-rockstargamesd248443eb924360a5d1d7211094ea827",
          "center-y": "rockstargames-sites-rockstargamesa8d87c765a51d98f0e3a9afd149ed0dc",
          "left-x": "rockstargames-sites-rockstargamesdcaa6339b43850be2e14967cab730041",
          "right-x": "rockstargames-sites-rockstargamesb656d800e3d134bd3a7e273a5f6d7ae6",
          "top-y": "rockstargames-sites-rockstargamesadaf230f139f906eb912b58b315406ac",
          border: "rockstargames-sites-rockstargamesc73e199a8978fb80895753c9a38fcdff",
          shards: "rockstargames-sites-rockstargamese650a715d6f220ad49bb568768154b0e",
          shards_three: "rockstargames-sites-rockstargamesb0c8be28788c6b23cea904bdc60d7e07",
          shards_two: "rockstargames-sites-rockstargamese41252d3a0aee1d229f6bddc20c38d47",
          dual: "rockstargames-sites-rockstargamesdb575e1d021e69ebb4265a29484e2888"
        },
        ja = e => {
          let {
            style: a,
            className: s
          } = e;
          const t = {
              ...a
            },
            r = a["--border-image-source"];
          return r && (t["--border-image-source"] = `url(${(0,I.useGetCdnSource)(r)})`), (0, f.jsx)("div", {
            className: (0, I.classList)(Na.border, s),
            style: {
              ...t
            }
          })
        },
        wa = e => e?.images ? (0, f.jsx)("div", {
          className: (0, I.classList)(Na.layeredImage, Na[e?.variantClass], Na[e?.wrapperSizeClass]),
          style: {
            ...e?.style ?? {}
          },
          children: (0, f.jsxs)("div", {
            className: Na.layersWrapper,
            children: [e?.images?.map(((e, a) => {
              const {
                image: s,
                paddingClass: t,
                imageSizeClass: r,
                objectFitClass: i,
                positionClassX: c,
                positionClassY: n,
                zIndex: o,
                className: l,
                style: d,
                alt: m,
                displayClass: g
              } = e;
              return (0, f.jsx)(ke, {
                image: s,
                style: {
                  zIndex: o ?? ++a
                },
                imageStyle: d,
                className: (0, I.classList)(l, g, Na.imageLayer, Na[t], Na[r], Na[i], Na[c], Na[n]),
                alt: m
              }, o ?? ++a)
            })), e?.borderImage && (0, f.jsx)(ja, {
              style: e?.borderImage,
              className: e?.borderImage?.displayClass
            })]
          })
        }) : null,
        Sa = e => {
          let {
            hero: a,
            children: s
          } = e;
          return a ? (0, f.jsx)("div", {
            className: "rockstargames-sites-rockstargamesefc561ad30f5dfe75c79d939737650dc",
            children: s
          }) : s
        },
        Ca = e => {
          let {
            badge: a = null,
            badgeType: s,
            discountTxt: t,
            splitter: r,
            image: i,
            style: c,
            className: n = "",
            attributes: o = {},
            role: l,
            hero: d = !1
          } = e;
          return (0, f.jsx)(Sa, {
            hero: d,
            children: (0, f.jsx)("figure", {
              children: (0, f.jsxs)("div", {
                className: (0, I.classList)("rockstargames-sites-rockstargamescab262c98c7f5bb3e982d9b075b3c2a8", d ? "rockstargames-sites-rockstargamescefd6d8859aeec1057caed28caa160c3" : "", o?.hiddenMobile ? "hiddenMobile" : "", o?.hiddenLarge ? "hiddenLarge" : "", o?.className, n),
                style: (0, F.safeStyles)({
                  ...c,
                  ...o?.style
                }),
                ...o,
                children: [(0, f.jsx)(ke, {
                  image: i,
                  className: n
                }), (i?.badge || i?.discountTxt || a || t) && (0, f.jsx)(Me, {
                  badge: i?.discountTxt ?? i?.badge ?? a ?? t,
                  badgeType: s,
                  splitter: i?.splitter ?? r,
                  role: i?.role ?? l
                }), i?.caption && (0, f.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: i.caption
                  }
                })]
              })
            })
          })
        },
        Ia = {
          pillBtn: "rockstargames-sites-rockstargameseea0db67b0aabf28288b288845324afe",
          selected: "rockstargames-sites-rockstargamesd1d25362fd730ca979d5ad79de088f89",
          multiSourceContainer: "rockstargames-sites-rockstargamesdc538bbfc2f407ed9fe840097ccac819",
          multiSourceImage: "rockstargames-sites-rockstargamesee782a29692a8eb06db1287a4984c243",
          animatePlaceholder: "rockstargames-sites-rockstargamesfbd73f5f70c2ce64aa9c9bd398f1a3b5",
          "loader-keyframes": "rockstargames-sites-rockstargamesf6040b2ae96a9b0dcdb2d283c9caff59"
        },
        Ta = e => {
          let {
            imageUrl: a,
            className: s,
            alt: t,
            style: r,
            lazy: i = !1,
            decoding: c = "auto",
            sizes: n = [320, 480, 768, 1024, 1440, 1920, 2560]
          } = e;
          const [l, d] = (0, o.useState)(!1);
          return (0, f.jsxs)("div", {
            className: Ia.multiSourceContainer,
            children: [!l && (0, f.jsx)("img", {
              className: [s, Ia.animatePlaceholder].join(" "),
              src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjMzMzMzMzIi8+Cjwvc3ZnPgo=",
              sizes: "(max-width: 1024px) 100vw, 1024px",
              alt: "Loading...",
              style: r
            }), (0, f.jsx)("img", {
              className: [Ia.multiSourceImage, s].join(" "),
              src: `${a}?im=Resize=1920`,
              srcSet: (m = a, n.map((e => `${m}?im=Resize=${e} ${e}w`)).join(", ")),
              sizes: "(max-width: 400px) 200px, (max-width: 1920px) 100vw, 1920px",
              alt: t ?? "Multi-Source Image",
              style: r,
              onLoad: () => {
                d(!0)
              },
              loading: i ? "lazy" : "eager",
              decoding: c
            })]
          });
          var m
        },
        Ma = {
          tag: "rockstargames-sites-rockstargamesed77774d2704bc0ebc0ac156542ae053"
        },
        La = e => {
          let {
            className: a,
            href: s,
            title: t,
            style: r
          } = e;
          const i = (0, f.jsxs)("div", {
            style: r,
            className: [Ma.tag, a].join(" "),
            children: [(0, f.jsx)("i", {}), t]
          });
          return void 0 !== s ? (0, f.jsx)(u, {
            to: s,
            children: i
          }) : i
        },
        Ea = {
          newswireBlock: "rockstargames-sites-rockstargamesa793f470884d207243d6c3caac8ad811",
          info: "rockstargames-sites-rockstargamesd50f6d2bc5f983c05311292acb4c78a5",
          title: "rockstargames-sites-rockstargamescc389449dc1495fc9c323fc2c547857d",
          newswireBlockNoSpecialOrder: "rockstargames-sites-rockstargamesffd167124f27c8e26a147f49c88796e5",
          preview: "rockstargames-sites-rockstargamesbbfbcf32c8c892ea29f4178949643475",
          previewMobile: "rockstargames-sites-rockstargamesf88852766488b21a28c42d230ea529a1",
          top: "rockstargames-sites-rockstargamesfa1a6f4c7d94b94f5af2dc1ac9af79f1",
          startAnimation: "rockstargames-sites-rockstargamese380e8c67066df6f33fc018341ea96e5"
        },
        Ba = e => {
          let {
            index: a,
            post: s,
            noSpecialOrder: t = !1,
            style: r = {}
          } = e;
          const [i] = (0, m.useSearchParams)(), c = s.preview_images_parsed.newswire_block, n = {
            default: 0 !== a || t ? c.square || c.d16x9 || c._fallback : c.d16x9 || c.square || c._fallback,
            mobile: c.square || c._fallback
          }, [o, l] = (0, F.usePreloadImg)(n.default), [d, g] = (0, F.usePreloadImg)(n.mobile), k = {
            default: {
              backgroundImage: `url(${n.default})`
            },
            mobile: {
              backgroundImage: `url(${n.mobile})`
            }
          };
          return (0, f.jsx)(u, {
            "data-gtm-category": "Newswire",
            "data-gtm-action": "Article Block Click",
            "data-gtm-label": `${s.title}`,
            to: s.url,
            className: [Ea.newswireBlock, t ? Ea.newswireBlockNoSpecialOrder : "", null !== o ? Ea.startAnimation : ""].join(" "),
            children: (0, f.jsxs)(f.Fragment, {
              children: [0 !== a || i.get("tag_id") ? (0, f.jsx)("div", {
                className: Ea.preview,
                style: k.default
              }) : (0, f.jsxs)(f.Fragment, {
                children: [(0, f.jsx)("div", {
                  className: Ea.previewMobile,
                  style: k.mobile
                }), (0, f.jsx)("div", {
                  className: Ea.preview,
                  style: k.default
                })]
              }), (0, f.jsxs)("div", {
                className: Ea.info,
                children: [(0, f.jsxs)("div", {
                  className: Ea.top,
                  children: [s.primary_tags.length ? (0, f.jsx)(La, {
                    title: s.primary_tags[s.primary_tags.length > 1 && 722 === s.primary_tags[0].id ? 1 : 0].name
                  }) : "", (0, f.jsx)("time", {
                    dateTime: s.created,
                    children: s.created_formatted
                  })]
                }), (0, f.jsx)("h5", {
                  className: Ea.title,
                  dangerouslySetInnerHTML: {
                    __html: s.title
                  }
                })]
              })]
            })
          })
        };
      var Pa = s(55492),
        za = s.n(Pa);
      const $a = (0, F.withTranslations)((e => {
          let {
            relativeTo: a = "",
            tagId: s = null,
            metaUrl: t = "/newswire",
            t: r
          } = e;
          const [i] = (0, m.useSearchParams)(), {
            tagId: c = null
          } = (0, m.useParams)(), [n, l] = (0, o.useState)(c ?? s ?? i.get("tag_id")), [d, g] = (0, o.useState)(1), [u, k] = (0, o.useState)([]), [_, b] = (0, o.useState)(null), {
            data: v
          } = (0, p.useQuery)(za(), {
            variables: {
              tagId: Number(n),
              page: d,
              metaUrl: t
            },
            autoSetLoading: !0
          });
          return (0, o.useEffect)((() => {
            g(1), k([]), l(c ?? s ?? i.get("tag_id"))
          }), [i.get("tag_id")]), (0, o.useEffect)((() => {
            v && v.posts && v.posts.paging && b(v.posts.paging), v && v.posts && v.posts.results && k(u.concat(v.posts.results))
          }), [v]), u.length ? (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsx)(Fa, {
              posts: u,
              relativeTo: a,
              noSpecialOrder: null !== n
            }), null !== _ && _.nextPage ? (0, f.jsx)(C, {
              onClick: () => g(d + 1),
              disabled: !1,
              context: "secondary",
              children: r("More Stories")
            }) : ""]
          }) : null
        })),
        Va = {
          pillBtn: "rockstargames-sites-rockstargamesafd0af959edb4a463c41ad4e9cc5dadc",
          selected: "rockstargames-sites-rockstargamesbcd59aa4a9e88d86a2cbe8d4972f8f51",
          related: "rockstargames-sites-rockstargamesa748ad776070dab831edc1f67f66af08",
          posts: "rockstargames-sites-rockstargamesc0aa38678decd13ca38886b4547efedd",
          just1post: "rockstargames-sites-rockstargamesb1a31ddf7fd4458ee860d354a6a0ac92"
        },
        Da = (0, F.withTranslations)((e => {
          let {
            posts: a,
            t: s
          } = e;
          return (0, f.jsxs)("section", {
            className: Va.related,
            children: [(0, f.jsx)("h2", {
              children: s("Related Stories")
            }), (0, f.jsx)("div", {
              className: [Va.posts, 1 === a.length ? Va.just1post : ""].join(" "),
              children: a.map((e => (0, f.jsx)(Ba, {
                noSpecialOrder: !0,
                post: e
              }, e.id)))
            })]
          })
        })),
        Aa = {
          newswireBlocks: "rockstargames-sites-rockstargamesc2c8eedd25de7e186655f98b2a8d8960",
          noSpecialOrder: "rockstargames-sites-rockstargamesc0d0db9dfc71c9f4f959b9c017b1ae4b"
        },
        Fa = (0, F.withGtmTracking)((e => {
          let {
            noSpecialOrder: a = !1,
            posts: s,
            gtmTrack: t,
            relativeTo: r
          } = e;
          return (0, o.useEffect)((() => {
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
            })), t(e)
          }), [s.length]), (0, f.jsx)("div", {
            className: [Aa.newswireBlocks, a ? Aa.noSpecialOrder : "", Aa.contextHome].join(" "),
            children: s.map(((e, s) => (0, f.jsx)(Ba, {
              index: s,
              noSpecialOrder: a,
              post: e
            }, e.id)))
          })
        })),
        Oa = {
          pillBtn: "rockstargames-sites-rockstargamesf87ac9a7d56545847cf4d8ca471b03e6",
          selected: "rockstargames-sites-rockstargamesa8ea61e57fd58bfcb99aef7e6d687045",
          grid: "rockstargames-sites-rockstargamesa57241f29873f89f89ab8b27994e71c3",
          itemList: "rockstargames-sites-rockstargamesdaec3f5ce63d42cb07e3e724737c8361",
          gtaplus: "rockstargames-sites-rockstargamesbd78cfb71ed31029ba4279325166bfab",
          rdo: "rockstargames-sites-rockstargamesa6244398a800ffddab72c14f717b0eab",
          noImg: "rockstargames-sites-rockstargamese88f741af7d5e0529ff4fb6bb82af04f",
          gtao: "rockstargames-sites-rockstargamesab60d91453348d2e4c090ef3ebb04347",
          custom: "rockstargames-sites-rockstargamesc20e7ba6ceaba3afd37095b172797711",
          yellow: "rockstargames-sites-rockstargamesb16672deedfe102b065925cbe0fb931c",
          hotPink: "rockstargames-sites-rockstargamesd0d01601de7131d9d6d11321b4299e59",
          red: "rockstargames-sites-rockstargamesd1b5397aff94d33b57674b04a3456e03",
          turquoise: "rockstargames-sites-rockstargamesd6541b973ce158c8f2fb81483015211f",
          purple: "rockstargames-sites-rockstargamesf3e34d902681219d4d8490eb164f7727",
          teal: "rockstargames-sites-rockstargamesa6c3b6b6a2395eb18a1174294f26f4ea",
          blue: "rockstargames-sites-rockstargameseade6e843c5afd48d3a8959fb0b88222",
          green: "rockstargames-sites-rockstargamesa82c313f8f85fc6304ddb703be2fa271",
          darkRed: "rockstargames-sites-rockstargamesd394c61fdce2bf8894ffb801ee680c2a",
          darkBlue: "rockstargames-sites-rockstargamesf1d73cc00a3ab644aab949183a8298a7",
          goldenrod: "rockstargames-sites-rockstargamescdcb0c5076309a329da2a6e857cc3bdf",
          skull: "rockstargames-sites-rockstargamesba4bd16bff2fbc40616457007b4a7442"
        },
        {
          sanitize: Ra
        } = pe(),
        Ua = e => {
          let {
            list: a,
            string: s,
            starColor: t,
            style: r,
            className: i,
            game: c,
            noImg: n,
            columns: l,
            mobileColumns: d
          } = e;
          const [m, g] = (0, o.useState)(null);
          return (0, o.useEffect)((() => {
            g(a)
          }), [a]), s || a ? l && m ? (0, f.jsx)("div", {
            className: Oa.grid,
            style: {
              "--ordered-list-grid-column": l,
              "--ordered-list-grid-column-mobile": d ?? l
            },
            children: (0, f.jsx)("ol", {
              style: (0, F.safeStyles)(r),
              className: (0, I.classList)(Oa.itemList, Oa.noImg, Oa[t], Oa[c]),
              children: m.map((e => (0, f.jsx)("li", {
                dangerouslySetInnerHTML: {
                  __html: Ra(e.content)
                }
              }, e.content)))
            })
          }) : (0, f.jsx)("ol", {
            style: (0, F.safeStyles)(r),
            className: (0, I.classList)(Oa.itemList, Oa.custom, n ? Oa.noImg : "", t ? Oa[t] : "", c ? Oa[c] : "", i ?? ""),
            children: a.map((e => (0, f.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: Ra(e?.content ?? e)
              }
            }, e?.content)))
          }) : null
        },
        Ga = (e, a) => {
          const s = e.tiers && e.tiers.every((e => e.isComplete)),
            t = a.tiers && a.tiers.every((e => e.isComplete));
          return s && !t ? 1 : !s && t ? -1 : 0
        },
        Ha = {
          pillBtn: "rockstargames-sites-rockstargamese6891f053f06919f1ef0dc72cafe9ae7",
          selected: "rockstargames-sites-rockstargamese5cce3088e494e8ddb9b0cf5528697a3",
          packCardTierIndicator: "rockstargames-sites-rockstargameseee874b61946e2a65886d622445e1c38",
          tierIndicator: "rockstargames-sites-rockstargamesbf9ed66cb83cf9a38bfc6fbb8e105fb7",
          active: "rockstargames-sites-rockstargamescfa711252c08391d3a0f1ecd8728a61a"
        },
        Wa = [{
          isComplete: !1
        }, {
          isComplete: !1
        }, {
          isComplete: !1
        }, {
          isComplete: !1
        }],
        qa = e => {
          let {
            tiers: a = Wa
          } = e;
          return (0, f.jsx)("div", {
            className: Ha.packCardTierIndicator,
            children: a?.map(((e, a) => (0, f.jsx)("div", {
              className: [Ha.tierIndicator, e.isComplete ? Ha.active : ""].join(" ")
            }, a)))
          })
        },
        Xa = {
          pillBtn: "rockstargames-sites-rockstargamese2e4b892ddcbdb2e09d3c3599a7e6c56",
          selected: "rockstargames-sites-rockstargamesff5c3c023fc12b68c6bf92b560c479b1",
          packCard: "rockstargames-sites-rockstargamesd6ef486c5f60d41c5662b092336c1f52",
          packCardImageBox: "rockstargames-sites-rockstargameseb4637cb1c81d1def1fd92252f90d675",
          packCompleted: "rockstargames-sites-rockstargamesfcd5bbd0d1e3ebd45cf2cb372468e62c",
          packCardTextBox: "rockstargames-sites-rockstargamesa124ee1b0383d30157e84108cf10b83b",
          badge: "rockstargames-sites-rockstargamesd42fb1fd7d553d75675a251df2a255ee",
          icon: "rockstargames-sites-rockstargamescbc69eda17393995ac9d41a8b4b531e8",
          label: "rockstargames-sites-rockstargamesd4649f3812d37e7407503d49dcaaba04"
        },
        Ka = e => {
          let {
            title: a,
            url: s,
            imageUrl: t,
            className: r,
            tiers: i,
            onClick: c,
            badgeContent: n = "Complete",
            imageSize: l = 420,
            imageLoaded: d
          } = e;
          const [g, u] = (0, o.useState)(!1), [k, _] = (0, o.useState)(d);
          (0, o.useEffect)((() => {
            if (i) {
              const e = i.some((e => !e.isComplete));
              u(!e)
            }
          }), [i]);
          const p = `${t}?im=Resize,height=${l}`;
          return (0, F.usePreloadImg)(p, (() => _(!0))), (0, f.jsx)(m.NavLink, {
            className: [Xa.packCard, r, g ? Xa.packCompleted : ""].join(" "),
            to: s,
            onClick: c,
            children: (0, f.jsxs)("div", {
              className: [Xa.packCardImageBox, k ? Xa.packCardImageLoaded : ""].join(" "),
              style: {
                backgroundImage: `url("${p}")`
              },
              children: [g && (0, f.jsxs)("div", {
                className: Xa.badge,
                children: [(0, f.jsx)("div", {
                  className: Xa.icon
                }), (0, f.jsx)("div", {
                  className: Xa.label,
                  children: n
                })]
              }), (0, f.jsxs)("div", {
                className: Xa.packCardTextBox,
                children: [(0, f.jsx)("h4", {
                  children: a
                }), !g && (0, f.jsx)(qa, {
                  tiers: i
                })]
              })]
            })
          })
        },
        Ya = {
          pillBtn: "rockstargames-sites-rockstargamesc0607ec9e0a3925181496fc555721e0a",
          selected: "rockstargames-sites-rockstargamesff76988869bea7d18917be00339b2434",
          packList: "rockstargames-sites-rockstargamesffeeb1f272f99c5cb4711e4956c65f7f",
          headerVisible: "rockstargames-sites-rockstargamesf6652e03be6ce55bd8f068900093a707",
          packCard: "rockstargames-sites-rockstargamesa53b37fe7ab10b353eceea86123258a1",
          packGrid: "rockstargames-sites-rockstargamesb85775dc95fb3881171ee42e49076cbf"
        },
        Qa = e => {
          let {
            isHeaderVisible: a,
            packListItems: s,
            packListClassName: t = Ya.packList,
            packGridClassName: r = Ya.packGrid,
            selectPackCard: i,
            sortFunction: c = Ga
          } = e;
          const n = (0, o.useRef)(null),
            l = [...s].sort(c);
          return (0, f.jsx)("div", {
            className: [t, a ? Ya.headerVisible : ""].join(" "),
            "data-testid": "pack-list",
            children: (0, f.jsx)("div", {
              ref: n,
              className: r,
              "data-testid": "pack-grid",
              children: l.map((e => {
                let {
                  title: a,
                  url: s,
                  imageUrl: t,
                  tiers: r
                } = e;
                return (0, f.jsx)(Ka, {
                  title: a,
                  url: s,
                  className: Ya.packCard,
                  imageUrl: t,
                  tiers: r,
                  onClick: () => i(a, s)
                }, s)
              }))
            })
          })
        },
        Za = {
          pillBtn: "rockstargames-sites-rockstargamese2620ca79db4bb12b74eb4adbcba56ce",
          selected: "rockstargames-sites-rockstargamesd429050d220c77a1c9e8631f9b9f4f02",
          navPill: "rockstargames-sites-rockstargamesc3ef0af25cfc7d1d0048148984230190"
        },
        Ja = e => {
          let {
            title: a,
            onClick: s,
            selected: t
          } = e;
          return (0, f.jsx)("button", {
            type: "button",
            onClick: s,
            className: [Za.navPill, t ? Za.selected : ""].join(" "),
            children: (0, f.jsx)("div", {
              children: a
            })
          })
        };
      var es;

      function as() {
        return as = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var s = arguments[a];
            for (var t in s) Object.prototype.hasOwnProperty.call(s, t) && (e[t] = s[t])
          }
          return e
        }, as.apply(this, arguments)
      }
      const ss = e => o.createElement("svg", as({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none"
      }, e), es || (es = o.createElement("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "m15 18-6-6 6-6"
      })));
      var ts;

      function rs() {
        return rs = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var s = arguments[a];
            for (var t in s) Object.prototype.hasOwnProperty.call(s, t) && (e[t] = s[t])
          }
          return e
        }, rs.apply(this, arguments)
      }
      const is = e => o.createElement("svg", rs({
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          fill: "none"
        }, e), ts || (ts = o.createElement("path", {
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "m9 18 6-6-6-6"
        }))),
        cs = {
          pillBtn: "rockstargames-sites-rockstargamesfaa583ebd1250f30b148562c5964fa46",
          selected: "rockstargames-sites-rockstargamesf55ea6a51cd0de4060f152d9a070e040",
          navScrollButton: "rockstargames-sites-rockstargamesb13f52032a7c6105f881b2a3764d7ba6"
        },
        ns = e => {
          let {
            direction: a,
            className: s,
            ...t
          } = e;
          return (0, f.jsxs)("button", {
            type: "button",
            className: [s, cs.navScrollButton].join(" "),
            ...t,
            children: ["left" === a && (0, f.jsx)(ss, {}), "right" === a && (0, f.jsx)(is, {})]
          })
        },
        os = (0, l.defineMessages)({
          plm_nav_scroll_left: {
            id: "plm_nav_scroll_left",
            defaultMessage: "Scroll Left"
          },
          plm_nav_scroll_right: {
            id: "plm_nav_scroll_right",
            defaultMessage: "Scroll Right"
          }
        }),
        ls = {
          pillBtn: "rockstargames-sites-rockstargamesa06d15859ff923574165bb46a5f3d0c9",
          selected: "rockstargames-sites-rockstargamescce410d6b0f750e4332a82432812a32f",
          navMenu: "rockstargames-sites-rockstargamesc5752917b36e8045f6765318dcfad3da",
          navMenuMain: "rockstargames-sites-rockstargamesc507169b0a2e6c92ea16615a7740d669",
          sectionMenu: "rockstargames-sites-rockstargamesa874d8cdf964d1c68df9cf8fdd085844",
          sectionItems: "rockstargames-sites-rockstargamesa3f32f28bb1f1c6a4695c53680da9ed0",
          nextSectionNavButton: "rockstargames-sites-rockstargamese26ad999829c4c68eadd9af67ba89033",
          previousSectionNavButton: "rockstargames-sites-rockstargamesec50957bce6305ff1dc54a0f7d6a997b",
          previousNavButton: "rockstargames-sites-rockstargamesf9530895bd80a161771d5ca70d967f65",
          nextNavButton: "rockstargames-sites-rockstargamesfdd74c0f93dcc9be87ca508ab0fe469a",
          navFeaturedItems: "rockstargames-sites-rockstargamesc6f0521d960314244895945154ba6c4a"
        },
        ds = e => {
          let {
            navItems: a,
            category: s,
            onNavItemClick: t,
            isOpen: r,
            isHeaderVisible: i,
            menuClass: c = ls.navMenu,
            menuContainerClass: n = ls.navMenuMain,
            menuSectionClass: d = ls.sectionMenu,
            menuPrevBtnClass: g = ls.previousNavButton,
            menuNextBtnClass: u = ls.nextNavButton
          } = e;
          const k = (0, l.useIntl)(),
            {
              track: _
            } = (0, O.useGtmTrack)(),
            {
              pathname: p
            } = (0, m.useLocation)(),
            b = (0, o.useMemo)((() => Math.max(a.findIndex((e => e.name === s)), 0)), [a, p]),
            [v, h] = (0, o.useState)(b),
            [x, y] = (0, o.useState)(!1),
            [N, j] = (0, o.useState)(!1),
            [w, S] = (0, o.useState)(!1),
            C = (0, o.useRef)(null),
            I = (0, o.useCallback)(((e, a) => {
              C.current && C.current.slideTo(e), h(e), M(`Secondary Nav > ${a}`)
            }), [_]),
            T = (0, o.useCallback)(((e, s) => {
              M(`Secondary Nav > ${a[v].title} > ${e}`, s), t()
            }), [a, t, v, _]),
            M = (e, a) => {
              _({
                event: "nav_click",
                event_action: "click",
                event_category: "nav",
                event_label: e,
                text: e.split(">").pop()?.trim() || "",
                link_url: a,
                element_placement: e
              })
            },
            L = (0, o.useCallback)((e => {
              j(e.isEnd), S(e.isBeginning)
            }), []);
          return (0, o.useEffect)((() => {
            C.current && ((C.current.wrapperEl.clientWidth || 0) > (C.current.el.clientWidth || 0) ? (y(!0), C.current.params.centeredSlides = !0, C.current.params.centeredSlidesBounds = !0) : (y(!1), C.current.params.centeredSlides = !1, C.current.params.centeredSlidesBounds = !1))
          }), [C.current?.wrapperEl.clientWidth, C.current?.el.clientWidth]), (0, f.jsx)(Fe.motion.div, {
            className: c,
            initial: {
              height: 0
            },
            animate: {
              height: r ? "100dvh" : 0
            },
            children: (0, f.jsxs)("div", {
              className: n,
              children: [(0, f.jsxs)("div", {
                className: d,
                children: [!w && x && (0, f.jsx)("div", {
                  className: ls.previousSectionNavButton,
                  children: (0, f.jsx)(ns, {
                    direction: "left",
                    className: g,
                    onClick: () => C.current?.slidePrev(),
                    "aria-label": k.formatMessage(os.plm_nav_scroll_left)
                  })
                }), (0, f.jsx)("div", {
                  className: ls.sectionItems,
                  children: (0, f.jsx)(P.wx, {
                    onBeforeInit: e => C.current = e,
                    onInit: L,
                    className: ls.sectionItems,
                    direction: "horizontal",
                    grabCursor: !0,
                    slidesPerView: "auto",
                    initialSlide: v,
                    onSlideChange: L,
                    onResize: L,
                    children: a.map(((e, a) => {
                      let {
                        title: s
                      } = e;
                      return (0, f.jsx)(P.Ky, {
                        children: (0, f.jsx)(Ja, {
                          title: s,
                          onClick: () => I(a, s),
                          selected: v === a
                        })
                      }, s)
                    }))
                  })
                }), !N && x && (0, f.jsx)("div", {
                  className: ls.nextSectionNavButton,
                  children: (0, f.jsx)(ns, {
                    direction: "right",
                    className: u,
                    onClick: () => C.current?.slideNext(),
                    "aria-label": k.formatMessage(os.plm_nav_scroll_right)
                  })
                })]
              }), (0, f.jsx)(Qa, {
                isHeaderVisible: i,
                packListItems: a[v]?.subNavItems || [],
                selectPackCard: T
              })]
            })
          })
        },
        ms = "rockstargames-sites-rockstargamesc54c374409e11d1429ce99457cbf7441",
        gs = e => {
          let {
            children: a,
            data: s,
            onPageUpdate: t,
            page: r,
            className: i
          } = e;
          return (0, f.jsx)("a", {
            href: "#",
            className: r === s.page ? `rockstargames-sites-rockstargamesc0eebf4f915ff9f5cc362e22d6d7d976 ${i??""}` : "",
            onClick: e => {
              e.preventDefault(), t(r)
            },
            children: a
          })
        },
        fs = e => {
          let {
            data: a,
            onPageUpdate: s,
            className: t
          } = e;
          if (1 === a.pageCount) return null;
          const r = Array.from(new Array(Math.min(a.pageCount, 8)), ((e, s) => s + Math.min(Math.max(a.pageCount - 8, 1), Math.max(2, a.page - 4))));
          return (0, f.jsxs)("div", {
            className: `rockstargames-sites-rockstargamesa626faab2a5a03e3466dda5c79960575 ${t??""}`,
            children: [a.pageCount > 8 ? (0, f.jsxs)(f.Fragment, {
              children: [(0, f.jsx)(gs, {
                data: a,
                onPageUpdate: s,
                page: 1,
                children: "1"
              }), 2 !== r[0] ? (0, f.jsx)("div", {
                className: ms,
                children: "..."
              }) : ""]
            }) : "", r.map((e => (0, f.jsx)(gs, {
              data: a,
              onPageUpdate: s,
              page: e,
              className: t,
              children: e
            }, e))), a.pageCount > 8 ? (0, f.jsxs)(f.Fragment, {
              children: [r.slice(-1)[0] + 1 < a.pageCount ? (0, f.jsx)("div", {
                className: ms,
                children: "..."
              }) : "", (0, f.jsx)(gs, {
                data: a,
                onPageUpdate: s,
                page: a.pageCount,
                children: a.pageCount
              })]
            }) : ""]
          })
        };
      var us = s(77616);
      const ks = e => {
          let {
            children: a
          } = e;
          const {
            parallaxController: s
          } = (0, us.oZ)();
          return (0, o.useLayoutEffect)((() => {
            if (!s) return;
            const e = setInterval((() => {
              s.update()
            }), 500);
            return () => clearInterval(e)
          }), [s]), a
        },
        _s = {
          parallaxWrapper: "rockstargames-sites-rockstargamesdb1ab316d17367d31cf94cdde25e463a",
          large: "rockstargames-sites-rockstargamesd520d28c6e4e797aea99f61c89ad2bd8",
          medium: "rockstargames-sites-rockstargamesf008365ee42d37e24e606107346b1c83",
          small: "rockstargames-sites-rockstargamescb5937d1a102ac4a66c4e373e6253946"
        },
        ps = e => {
          let {
            scrollAxis: a = "vertical",
            size: s = "",
            style: t = {},
            children: r
          } = e;
          return (0, f.jsx)(us.qK, {
            scrollAxis: a,
            children: (0, f.jsx)(ks, {
              children: (0, f.jsx)("div", {
                className: (0, I.classList)(_s.parallaxWrapper, _s[s]),
                style: t,
                "data-context": "parallax-wrapper",
                children: r ? r.map(((e, s) => (0, o.cloneElement)(e, {
                  scrollAxis: a,
                  style: {
                    ...e?.props?.style,
                    zIndex: s
                  }
                }))) : (0, f.jsx)("div", {})
              })
            })
          })
        },
        bs = e => {
          let {
            layers: a = [],
            displayClass: s = "",
            style: t = {}
          } = e;
          const r = (0, I.useGenerateCdnSource)();
          if (!a || !a[0]?.image) return null;
          const i = a.map((e => ({
            ...e,
            props: {
              style: {
                ...e.style
              }
            },
            style: void 0,
            image: r(e?.image ?? null)
          })));
          return (0, f.jsx)(us.Sr, {
            className: (0, I.classList)("rockstargames-sites-rockstargamesb8c85703a3c76902e49a61a6afcb81bc", s),
            layers: i,
            style: t
          })
        },
        vs = "rockstargames-sites-rockstargamesc4aa8e5d29b433c400796d0c493a9a4d",
        hs = e => {
          let {
            minOffset: a = 0,
            maxOffset: s = 0,
            scrollAxis: t = "vertical",
            displayClass: r = "",
            style: i = {},
            children: c
          } = e;
          return "horizontal" === t ? (0, f.jsx)(us.mw, {
            x: [a, s],
            className: (0, I.classList)(vs, r),
            styleOuter: i,
            children: c
          }) : (0, f.jsx)(us.mw, {
            y: [a, s],
            className: (0, I.classList)(vs, r),
            styleOuter: i,
            children: c
          })
        },
        xs = (e, a) => {
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
        ys = e => s(e < 100 ? 84184 : e > 99 && e < 500 ? 69450 : e > 499 && e < 750 ? 31216 : 85724),
        Ns = (0, l.defineMessages)({
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
          pillBtn: "rockstargames-sites-rockstargamese4a42eaa9bfb682035e61ac2e2a34515",
          selected: "rockstargames-sites-rockstargameseb889d8958be54a67b790d7529530986",
          scCharacterCard: "rockstargames-sites-rockstargamesdf279e92086c0d3c96905b3a91b369ed",
          scAvatar: "rockstargames-sites-rockstargamesc1890feda663c93b0f767890394cbdcf",
          scCharNames: "rockstargames-sites-rockstargamese79d7f5515617d849d7d13cd4ff048ce",
          scCharacterStats: "rockstargames-sites-rockstargamesc721f3aeef9e5ae6b98adca1253e4709",
          scUserName: "rockstargames-sites-rockstargameseabff0cc0139013f5a60fea6f48c56f6",
          scRpLevel: "rockstargames-sites-rockstargamesb1f87c58a800ad546200fbf17e029f35",
          scRpIcon: "rockstargames-sites-rockstargamesf1e0bcba6214698c490b8201bbd850b7"
        },
        ws = (0, l.withIntl)((e => {
          let {
            characterData: a
          } = e;
          const t = (0, l.useIntl)(),
            {
              platform: r,
              platformUsername: i,
              mugshotUrl: c,
              stats: n
            } = a,
            [d, m] = (0, o.useState)(c),
            g = xs(r, "large");
          return (0, f.jsxs)("div", {
            className: js.scCharacterCard,
            children: [(0, f.jsx)("div", {
              className: js.scAvatar,
              "data-size": "small",
              children: (0, f.jsx)("img", {
                src: d,
                alt: t.formatMessage(Ns.profile_selector_mugshot, {
                  userName: i
                }),
                onError: () => {
                  m(s(71084))
                }
              })
            }), (0, f.jsx)("div", {
              className: js.scCharacterStats,
              children: (0, f.jsxs)("div", {
                className: js.scCharNames,
                children: [(0, f.jsx)("img", {
                  src: g.src,
                  alt: g.alt
                }), (0, f.jsx)("div", {
                  className: js.scUserName,
                  "data-size": "small",
                  children: i
                }), (0, f.jsx)("div", {
                  className: js.scRp,
                  children: (0, f.jsxs)("div", {
                    className: js.scRpLevel,
                    children: [(0, f.jsx)("img", {
                      className: js.scRpIcon,
                      src: ys(n.overview.rank.value),
                      alt: t.formatMessage(Ns.profile_selector_rp_icon)
                    }), (0, f.jsx)("span", {
                      children: a.stats.overview.rank.value
                    })]
                  })
                })]
              })
            })]
          })
        }), va),
        Ss = (0, p.makeVarNamespace)("@rockstargames/components/profile-switcher"),
        Cs = Ss("languageSelectorOpenedReactive", !1),
        Is = e => Cs(e),
        Ts = Ss("activeSubNavIdReactive", -1),
        Ms = e => Ts(e),
        Ls = Ss("subNavExtraHeightReactive", -1),
        Es = e => Ls(e),
        Bs = Ss("scNavOpenedReactive", !0),
        Ps = e => Bs(e),
        zs = Ss("charListHiddenReactive", !0),
        $s = e => zs(e),
        Vs = () => {
          const e = (0, p.useReactiveVar)(Cs),
            a = (0, p.useReactiveVar)(Ts),
            s = (0, p.useReactiveVar)(Ls),
            t = (0, p.useReactiveVar)(Bs),
            r = (0, p.useReactiveVar)(zs);
          return (0, o.useEffect)((() => {
            r || (e && Is(!1), t && (Ps(!1), Ms(-1)))
          }), [r]), (0, o.useEffect)((() => {
            !e && r && (t || Ps(!0))
          }), [e, r]), (0, o.useMemo)((() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: Is,
            activeSubNavId: a,
            setActiveSubNavId: Ms,
            subNavExtraHeight: s,
            setSubNavExtraHeight: Es,
            scNavOpened: t,
            setScNavOpened: Ps,
            charListHidden: r,
            setCharListHidden: $s
          })), [e, a, s, t, r])
        };
      var Ds = s(69760),
        As = s.n(Ds),
        Fs = s(9860);
      const Os = {
          event: "account_menu_click",
          element_placement: "Account Menu"
        },
        Rs = e => ({
          text: e.formatMessage(Ns.sc_link_help),
          target: "_self",
          ga: {
            ...Os,
            text: Ns.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          children: [{
            text: e.formatMessage(Ns.sc_link_support),
            location: {
              domain: ba.U.support,
              path: "/"
            },
            target: "_self",
            ga: {
              ...Os,
              text: Ns.sc_link_support.defaultMessage
            },
            dataTestId: "supportLink"
          }, {
            text: e.formatMessage(Ns.sc_link_legal),
            location: {
              domain: ba.U.www,
              path: "/legal"
            },
            target: "_self",
            ga: {
              ...Os,
              text: Ns.sc_link_legal.defaultMessage
            },
            dataTestId: "legalLink"
          }, {
            text: e.formatMessage(Ns.sc_link_privacy_policy),
            location: {
              domain: ba.U.www,
              path: "/privacy"
            },
            target: "_self",
            ga: {
              ...Os,
              text: Ns.sc_link_privacy_policy.defaultMessage
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: e.formatMessage(Ns.sc_link_cookies_policy),
            location: {
              domain: ba.U.www,
              path: "/cookies"
            },
            target: "_self",
            ga: {
              ...Os,
              text: Ns.sc_link_cookies_policy.defaultMessage
            },
            dataTestId: "cookiesPolicyLink"
          }, {
            text: e.formatMessage(Ns.sc_link_cookies_settings),
            onClickCallback: e => {
              e.preventDefault(), window.OneTrust?.ToggleInfoDisplay()
            },
            target: "_self",
            ga: {
              ...Os,
              text: Ns.sc_link_cookies_settings.defaultMessage
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: e.formatMessage(Ns.sc_link_do_not_sell_my_information),
            location: {
              domain: ba.U.www,
              path: "/ccpa"
            },
            target: "_self",
            ga: {
              ...Os,
              text: Ns.sc_link_do_not_sell_my_information.defaultMessage
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        }),
        Us = {
          pillBtn: "rockstargames-sites-rockstargameseb30ffefc0c8fef449ca5348a2702622",
          selected: "rockstargames-sites-rockstargamescd058a755e77eeb55cf666fa43fadf75",
          scSubLink: "rockstargames-sites-rockstargamesfdaa918acc06706cbe191dedd40974af",
          scLink: "rockstargames-sites-rockstargamescbc80932118c48d8ec14448d8913d068"
        },
        Gs = e => {
          let {
            text: a,
            target: s,
            href: t,
            location: r,
            ga: i,
            dataTestId: c,
            isSubLink: n,
            hasNotifications: o = !1,
            onClickCallback: l = (() => {}),
            tabIndex: d,
            reloadDocument: g = !1
          } = e;
          const {
            track: u
          } = (0, O.useGtmTrack)(), k = (0, ba.c)();
          let _ = t;
          r && (_ = r.domain === k.currentSite?.site ? r.path : `https://${k.sites[r.domain]}.rockstargames.com${r.path}`);
          const p = {
            ...i,
            link_url: _
          };
          return (0, f.jsxs)(m.Link, {
            className: n ? Us.scSubLink : Us.scLink,
            "data-testid": c || "menuLink",
            title: a,
            to: _,
            target: s,
            rel: "noreferrer",
            reloadDocument: g,
            tabIndex: d,
            onClick: e => {
              u(p), l(e)
            },
            children: [a, o && (0, f.jsx)("span", {
              className: Us.scLinkNotification
            })]
          })
        },
        Hs = e => {
          let {
            id: a,
            text: s,
            target: t,
            href: r,
            location: i,
            ga: c,
            hasNotifications: n = !1,
            dataTestId: l,
            children: d = [],
            activeSubNavId: m,
            setActiveSubNavId: g,
            setSubNavExtraHeight: u,
            reloadDocument: k = !1,
            onClickCallback: _ = (() => {})
          } = e;
          const {
            windowWidth: p,
            windowHeight: b
          } = (0, F.useWindowResize)(), {
            track: v
          } = (0, O.useGtmTrack)(), {
            navOpen: h
          } = (0, O.useRockstarUserState)(), x = (0, o.useRef)(null), [y, N] = (0, o.useState)(0), [j, w] = (0, o.useState)(0), [S, C] = (0, o.useState)(!0);
          return (0, o.useEffect)((() => {
            m !== a && !1 === S && C(!0), m === a && C(!1)
          }), [m]), (0, o.useEffect)((() => {
            if (!x.current) return;
            N(x?.current?.scrollHeight);
            const e = window.getComputedStyle(x.current);
            if (e) {
              let a = 16 * parseInt(e.getPropertyValue("--scSubNav-opened-margin"), 10);
              Number.isNaN(a) && (a = 0), w(a)
            }
          }), [x, p, b]), d.length > 0 ? (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsxs)("button", {
              className: "rockstargames-sites-rockstargamesaf10b4154b04475edc11366934576ecd",
              type: "button",
              "data-testid": l || "menuButton",
              title: s,
              tabIndex: h ? 0 : -1,
              "data-children-hidden": S,
              onClick: e => {
                e.stopPropagation(), v(c), m === a ? (g(-1), u(0)) : (g(a), u(y + j + j))
              },
              children: [(0, f.jsx)("span", {
                className: "rockstargames-sites-rockstargamesfd722aa4f6d05656ee6e37f952bd13d0",
                children: s
              }), (0, f.jsx)("span", {
                className: "rockstargames-sites-rockstargamesbe674f27adc299eab348b49f71429b71"
              })]
            }, s), (0, f.jsx)("nav", {
              className: "rockstargames-sites-rockstargamesff1911053a3515534dd825554a85909e",
              ref: x,
              "aria-hidden": S,
              style: {
                height: S ? 0 : `${y}px`
              },
              children: d.map((e => (0, f.jsx)(Gs, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: S || !h ? -1 : 0
              })))
            })]
          }) : (0, f.jsx)(Gs, {
            text: s,
            target: t,
            href: r,
            location: i,
            ga: c,
            hasNotifications: n,
            dataTestId: l,
            isSubLink: !1,
            onClickCallback: _,
            tabIndex: h ? 0 : -1,
            reloadDocument: k
          })
        },
        Ws = e => {
          let {
            sc: a
          } = e;
          const {
            windowWidth: s,
            windowHeight: t
          } = (0, F.useWindowResize)(), r = (0, l.useIntl)(), {
            languageSelectorOpened: i,
            setLanguageSelectorOpened: c,
            activeSubNavId: n,
            setActiveSubNavId: d,
            subNavExtraHeight: g,
            setSubNavExtraHeight: u
          } = Vs(), {
            setSelectedCharacterTuple: k,
            navOpen: _
          } = (0, O.useRockstarUserState)(), p = (0, F.useLocale)(), b = (0, F.toScLocaleString)(p), [v, h] = (0, o.useState)(""), x = (0, m.useLocation)(), y = `${a.login}?returnUrl=${v}&lang=${b}`, N = `${a.signup}&returnUrl=${v}&lang=${b}`, j = (0, o.useMemo)((() => (0, ba.c)()), []), w = (0, o.useMemo)((() => {
            const e = ((e, a, s) => [{
              text: e.formatMessage(Ns.sc_link_sign_in),
              href: a,
              ga: {
                event: "cta_login",
                text: Ns.sc_link_sign_in.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "loginLink"
            }, {
              text: e.formatMessage(Ns.sc_link_join_social_club),
              href: s,
              ga: {
                event: "cta_signup",
                text: Ns.sc_link_join_social_club.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "signUpLink"
            }, Rs(e)])(r, y, N);
            return e
          }), [r, y, N, j]), [S, C] = (0, o.useState)(0), I = (0, o.createRef)(), T = () => {
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
          return (0, o.useEffect)((() => {
            const e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            h(e)
          }), [x]), (0, o.useEffect)((() => {
            k(!1)
          }), []), (0, o.useEffect)((() => {
            T(), As()((() => {
              setTimeout(T, 0)
            }), 300)
          }), [s, t]), (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsx)("nav", {
              className: "rockstargames-sites-rockstargamesb1552e1f97b08ee4337f78fa4486ffac",
              children: (0, f.jsx)("div", {
                className: "rockstargames-sites-rockstargamesc5bc9bec611f9f0514176014ce835e1e",
                "data-logged-in": "false",
                ref: I,
                style: {
                  "--scNavWrap-max-height": `${g+S}px`
                },
                children: w.map((e => (0, o.createElement)(Hs, {
                  ...e,
                  activeSubNavId: n,
                  setActiveSubNavId: d,
                  setSubNavExtraHeight: u,
                  key: e.text
                })))
              })
            }), (0, f.jsx)("div", {
              className: "rockstargames-sites-rockstargamesa6c12c94e8656e88958552d645fe51fe",
              style: {
                visibility: _ ? null : "hidden"
              },
              children: (0, f.jsx)(Fs.LanguageSelector, {
                theme: "sc-menu",
                languageSelectorOpened: i,
                setLanguageSelectorOpened: e => {
                  d(-1), c(e)
                },
                defaultMessage: "Select a Language"
              })
            })]
          })
        },
        qs = e => {
          let {
            characterData: a,
            setMobileCardWidth: t,
            tabIndex: r
          } = e;
          const i = (0, l.useIntl)(),
            {
              currentCharId: c,
              setCurrentCharId: n
            } = (0, O.useRockstarUserState)(),
            {
              track: d
            } = (0, O.useGtmTrack)(),
            m = (0, o.createRef)(),
            {
              platform: g,
              platformUsername: u,
              mugshotUrl: k,
              stats: _
            } = a,
            [p, b] = (0, o.useState)(k),
            [v] = (0, o.useState)(a.index),
            h = xs(g, "large"),
            x = c === a.index;
          return (0, o.useEffect)((() => {
            m.current && t && t(m?.current?.offsetWidth)
          }), [m]), (0, f.jsxs)("button", {
            className: "rockstargames-sites-rockstargamesd76e785563451a50438064ac368aae4b",
            type: "button",
            "aria-hidden": x,
            onClick: e => {
              e.stopPropagation(), n(v);
              let a = "";
              "pc" === g ? a = "PC" : "ps4" === g ? a = "PS4" : "ps5" === g ? a = "PS5" : "xboxone" === g ? a = "Xbox One" : "xboxsx" === g && (a = "Xbox Series X|S"), d({
                event: "character_selector_select",
                event_action: "select",
                event_category: "character_selector",
                event_label: a,
                position: v
              })
            },
            ref: m,
            tabIndex: r,
            children: [(0, f.jsx)("div", {
              className: "rockstargames-sites-rockstargamesbbdf69fe97471593355fc51ec9a6d13a",
              "data-size": "small",
              children: (0, f.jsx)("img", {
                src: p,
                alt: i.formatMessage(Ns.profile_selector_mugshot, {
                  userName: u
                }),
                onError: () => {
                  b(s(71084))
                }
              })
            }), (0, f.jsxs)("div", {
              className: "rockstargames-sites-rockstargamesc0dc303ef48255c09faa4ad2f4e953e7",
              children: [(0, f.jsxs)("div", {
                className: "rockstargames-sites-rockstargamese9fbbbcea66d86dbd58b8548a5f6bea8",
                children: [(0, f.jsx)("img", {
                  src: h.src,
                  alt: h.alt
                }), (0, f.jsx)("div", {
                  className: "rockstargames-sites-rockstargamesb3726d8b480695f64fddc723c6f35205",
                  "data-size": "small",
                  children: u
                })]
              }), (0, f.jsx)("div", {
                className: "rockstargames-sites-rockstargamesa5e3df42966a50f3dd88bbcb57536617",
                children: (0, f.jsxs)("div", {
                  className: "rockstargames-sites-rockstargamesa6776312350028898320ba59145a39be",
                  children: [(0, f.jsx)("img", {
                    className: "rockstargames-sites-rockstargamesb266652910ad34c0e8e097b212a958f0",
                    src: ys(_.overview.rank.value),
                    alt: i.formatMessage(Ns.profile_selector_rp_icon)
                  }), (0, f.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                })
              })]
            })]
          })
        },
        Xs = {
          pillBtn: "rockstargames-sites-rockstargamesd9464c4b4d92881abe5578988bd68af7",
          selected: "rockstargames-sites-rockstargamesbc0a950bffee0ee9e28213912da51427",
          scProfileDetails: "rockstargames-sites-rockstargamesb954455f6ff25f2350e1a0960ba97d3e",
          scAvatar: "rockstargames-sites-rockstargamesc15a60de0fc8df4960d84ab96caa8a62",
          scAvatarPlatform: "rockstargames-sites-rockstargamesa8f66dccf33827dc81107cae3196cfbe",
          scProfileStats: "rockstargames-sites-rockstargamesc91f8623fa10edbeba8c79c7d6b26a28",
          scNames: "rockstargames-sites-rockstargamesda83fc27513bcac6a8a31eadc89b1c2c",
          scTagsNames: "rockstargames-sites-rockstargamesd7ce73d22672e2e2f59e9193c2632531",
          scUserName: "rockstargames-sites-rockstargamesd5814836ce152affaa22d226819b5b12",
          scCrewName: "rockstargames-sites-rockstargamesb7777817be6d756cc2d1585c1377734c",
          scCrewRankBar: "rockstargames-sites-rockstargamesa581d240520cf347e5ff5f6a62a36a97",
          scCrewRankBarItem: "rockstargames-sites-rockstargamesbdb056c03ef06b99d69426c87cec67c5",
          scProgress: "rockstargames-sites-rockstargamesdc3020fbe81a916a8da4719ef052c278",
          scRpLevel: "rockstargames-sites-rockstargamesb2ea0e0d19182355913368bf7be016b8",
          scRpIcon: "rockstargames-sites-rockstargamesf17a712b43b5234c07dc44f674433cf6",
          scMoney: "rockstargames-sites-rockstargamesf14849be516f588e1bc9e252a109c76f",
          scCash: "rockstargames-sites-rockstargamesb3e35cdc6557f7c3886700245af352dd",
          scBank: "rockstargames-sites-rockstargamesec696aafed90a7a4c69dc53da0a5bb36"
        },
        Ks = e => {
          let {
            character: a,
            platformTag: t
          } = e;
          const {
            data: r
          } = (0, O.useRockstarUser)(), {
            track: i
          } = (0, O.useGtmTrack)(), c = (0, l.useIntl)(), [n, d] = (0, o.useState)([]), [m, g] = (0, o.useState)(null), [u, k] = (0, o.useState)(null), [_, p] = (0, o.useState)(!1), [b, v] = (0, o.useState)(-1), [h, x] = (0, o.useState)([]), [y, N] = (0, o.useState)(0), j = s(71084), [w, S] = (0, o.useState)("0"), [C, I] = (0, o.useState)("0"), T = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), M = () => {
            E((0, f.jsx)("img", {
              src: j,
              alt: c.formatMessage(Ns.profile_selector_mugshot, {
                userName: r.nickname
              })
            }))
          }, [L, E] = (0, o.useState)((0, f.jsx)("img", {
            className: Xs.scAvatarImg,
            src: a.mugshotUrl,
            alt: c.formatMessage(Ns.profile_selector_mugshot, {
              userName: r.nickname
            }),
            onError: M
          }));
          (0, o.useEffect)((() => {
            d(r.crews ?? [])
          }), [r]), (0, o.useEffect)((() => {
            E((0, f.jsx)("img", {
              src: a.mugshotUrl,
              alt: r.nickname,
              onError: M
            })), S(T(a.stats.overview.bank.value)), I(T(a.stats.overview.cash.value)), N(parseInt(a.stats.overview.rank.value))
          }), [a, r]), (0, o.useEffect)((() => {
            n && n.forEach((e => {
              !0 === e.isPrimary && (g(e.crewTag), k(e.crewColour), v(e.rankOrder), p(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && p(!0))
            }))
          }), [n]), (0, o.useEffect)((() => {
            const e = [];
            if (!_ && b > -1)
              for (let a = 5; a > b; a -= 1) e.push((0, f.jsx)("div", {
                className: Xs.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== u ? u : ""
                }
              }, `crewrankbar-${a}`));
            x(e)
          }), [b, _, u]);
          const B = e => {
            e.stopPropagation(), i({
              event: "character_selector_profile_click",
              event_action: "profile_click",
              event_category: "character_selector",
              event_label: t.alt,
              link_url: void 0
            })
          };
          return (0, f.jsxs)("div", {
            className: Xs.scProfileDetails,
            onClick: B,
            onKeyUp: B,
            role: "button",
            tabIndex: -1,
            children: [(0, f.jsxs)("div", {
              className: Xs.scAvatar,
              children: [L, (0, f.jsx)("div", {
                className: Xs.scAvatarPlatform,
                "data-platform": a.platform,
                children: (0, f.jsx)("img", {
                  src: t.src,
                  alt: t.alt
                })
              })]
            }), (0, f.jsxs)("div", {
              className: Xs.scProfileStats,
              children: [(0, f.jsx)("div", {
                className: Xs.scNames,
                children: (0, f.jsxs)("div", {
                  className: Xs.scTagsNames,
                  children: [(0, f.jsx)("span", {
                    className: Xs.scUserName,
                    children: a.platformUsername
                  }), m && (0, f.jsxs)("span", {
                    className: Xs.scCrewName,
                    "data-arrow-tag": _,
                    children: [m, !_ && (0, f.jsx)("div", {
                      className: Xs.scCrewRankBar,
                      children: h
                    })]
                  })]
                })
              }), (0, f.jsxs)("div", {
                className: Xs.scProgress,
                children: [(0, f.jsxs)("div", {
                  className: Xs.scRpLevel,
                  children: [(0, f.jsx)("img", {
                    className: Xs.scRpIcon,
                    src: ys(y),
                    alt: c.formatMessage(Ns.profile_selector_rp_icon)
                  }), (0, f.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                }), (0, f.jsxs)("div", {
                  className: Xs.scMoney,
                  children: [(0, f.jsxs)("span", {
                    className: Xs.scCash,
                    children: ["$", C]
                  }), (0, f.jsxs)("span", {
                    className: Xs.scBank,
                    children: ["$", w]
                  })]
                })]
              })]
            })]
          })
        },
        Ys = (e, a) => {
          const [s, t] = (0, o.useState)(0);
          return (0, o.useEffect)((() => {
            if (e.current) {
              const {
                current: s
              } = e, r = s.getBoundingClientRect(), {
                width: i
              } = r;
              let c = i;
              if (!0 === a) {
                const e = window.getComputedStyle(s);
                c += parseInt(e.marginLeft, 10) + parseInt(e.marginRight, 10)
              }
              t(c)
            }
          }), [e]), s
        },
        Qs = e => {
          let {
            dragThreshold: a = 80,
            interactionDelay: s = 1e3,
            mobileGutterWidth: t = 17,
            slideChangeCallback: r = null,
            slideClickCallback: i = null,
            children: c = [],
            disablePager: n = !1,
            disableSwiper: l = !1
          } = e;
          const d = (0, o.createRef)(),
            m = Ys(d, !1),
            [g, u] = (0, o.useState)(!1),
            [k, _] = (0, o.useState)(0),
            [p, b] = (0, o.useState)(0),
            [v, h] = (0, o.useState)([t]),
            [x, y] = (0, o.useState)(v[0]),
            [N, j] = (0, o.useState)(252),
            [w, S] = (0, o.useState)(0),
            [C, I] = (0, o.useState)([]),
            [T, M] = (0, o.useState)([]),
            [L, E] = (0, o.useState)(!1),
            B = e => {
              if (!0 === g || !0 === l) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              b(a)
            },
            P = e => {
              if (!0 === g || 0 === p || !0 === l) return;
              const s = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                t = s > p ? 1 : -1,
                i = Math.abs(p - s);
              i > a ? (t > 0 ? (() => {
                if (!0 === g) return;
                u(!0);
                const e = k - 1 < 0 ? 0 : k - 1;
                _(e), y(v[e]), r && r(e)
              })() : (() => {
                if (!0 === g) return;
                u(!0);
                let e = k + 1 >= v.length ? v.length - 1 : k + 1;
                e < 0 && (e = 0), _(e), y(v[e]), r && r(e)
              })(), b(0)) : y(v[k] + i * t)
            },
            z = () => {
              !0 !== g && !0 !== l && (u(!0), !0 !== g && (y(v[k]), b(0)))
            };
          return (0, o.useEffect)((() => {
            const e = [];
            c.forEach((() => {
              e.push((0, o.createRef)())
            })), I(e)
          }), [c]), (0, o.useEffect)((() => {
            if (C.length < 1) return;
            j(C[0]?.current?.clientWidth || 0);
            const e = C[0]?.current.firstChild,
              a = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              s = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            S(s + a)
          }), [C]), (0, o.useEffect)((() => {
            !1 !== g && setTimeout((() => {
              u(!1)
            }), s)
          }), [g, s]), (0, o.useEffect)((() => {
            h(c.map(((e, a) => (e => {
              let a = 0;
              const s = c.length;
              return 1 === s ? .5 * m - .5 * N - 2 * t + w : (0 === e && (a = t - e * N), e === s - 1 && s > 1 && (a = s * N * -1 + (m - (t - w))), e > 0 && e < s - 1 && (a = e * N * -1 + (.5 * m - .5 * N + .5 * w)), a)
            })(a)))), 1 === c.length ? E(!0) : E(!1)
          }), [d.current, c, m]), (0, o.useEffect)((() => {
            const e = (a = k, c.map(((e, s) => {
              const t = {
                active: !1
              };
              return s === a && (t.active = !0), t
            })));
            var a;
            M(e)
          }), [c, k]), (0, o.useEffect)((() => {
            !0 !== n && !0 !== l || y(v[0])
          }), [l, n, v]), (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsx)("div", {
              className: "rockstargames-sites-rockstargamesab70c3f9c67ecd69d19216a5f4de5049",
              ref: d,
              onTouchStart: B,
              onTouchMove: P,
              onTouchEnd: z,
              onMouseDown: B,
              onMouseMove: P,
              onMouseUp: z,
              onClick: () => {
                null !== i && i(k)
              },
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, f.jsx)("div", {
                className: "rockstargames-sites-rockstargamesa93be1084a583cafa7f3f97a8ce8a6be",
                "data-interaction-blocked": g,
                "data-single-item": L,
                style: {
                  transform: L ? null : `translateX(${x}px)`
                },
                children: c.map(((e, a) => (0, f.jsx)("div", {
                  className: "rockstargames-sites-rockstargamesc013369a930e076d1729d086fb51903e",
                  ref: C[a],
                  children: e
                }, `csItem-${e?.props?.characterData?.mugshotUrl}`)))
              })
            }), T.length > 1 && !1 === n && (0, f.jsx)("div", {
              className: "rockstargames-sites-rockstargamesda8cfef07bf44e9a44839e2723ec61bb",
              children: T.map((e => (0, f.jsx)("div", {
                className: "rockstargames-sites-rockstargamesfe87ea0922034610a1f6cb3a4edbe195",
                "data-active": e.active
              }, e.mugshotUrl)))
            })]
          })
        },
        Zs = {
          pillBtn: "rockstargames-sites-rockstargamesaa374e2f7806799cb073de8a9b2a2e7d",
          selected: "rockstargames-sites-rockstargamesd402a10393179390abdaf3684a02f1ba",
          scProfile: "rockstargames-sites-rockstargamesdde9053261079ebfb5d95975239fe87d",
          scCharacterSelector: "rockstargames-sites-rockstargamesc47913b4c686bbbc9a0c8ee6ed7666bf",
          scCharacterSelectBtn: "rockstargames-sites-rockstargamesa4f9dafe071f5c9a825bf57348835309",
          open: "rockstargames-sites-rockstargamesb1f5708c9a0e35681c54a58f04661c1c",
          scCharacterList: "rockstargames-sites-rockstargamesa1d1104b9df769c9237fa1a06633ffe7",
          scNav: "rockstargames-sites-rockstargamesa326b0feea8d083ed2265571010d79d3",
          scLanguageSelector: "rockstargames-sites-rockstargamesd19713d1362bcd54ff539975adbb2ecc",
          scNavHeader: "rockstargames-sites-rockstargamesbb74821846f47bbe5fc0896364efd520",
          scNavWrap: "rockstargames-sites-rockstargamesa7f1e2d78519eaf099bd43c6ad07abc9"
        },
        Js = (0, F.withTranslations)((e => {
          let {
            sc: a,
            charListHidden: s,
            hideCharacterList: t,
            refCharacterListDesktop: r,
            menuPadding: i,
            longCharList: c,
            setLongCharList: n,
            isMobileMode: d,
            setIsMobileMode: g
          } = e;
          const {
            windowWidth: u,
            windowHeight: k
          } = (0, F.useWindowResize)(), _ = (0, l.useIntl)(), {
            languageSelectorOpened: b,
            setLanguageSelectorOpened: v,
            activeSubNavId: h,
            setActiveSubNavId: x,
            subNavExtraHeight: y,
            setSubNavExtraHeight: N,
            scNavOpened: j,
            setScNavOpened: w
          } = Vs(), [S, C] = (0, o.useState)(""), I = (0, m.useLocation)(), {
            lsSettings: T
          } = (0, F.useRockstarWebLSSettings)(), {
            track: M
          } = (0, O.useGtmTrack)(), L = (0, p.useRockstarTokenPing)(), {
            data: E,
            loggedIn: B
          } = (0, O.useRockstarUser)(), {
            charactersNeeded: P,
            currentCharId: z,
            hasNotifications: $,
            navOpen: V,
            setCurrentCharId: D,
            setHasNotifications: A,
            setSelectedCharacterTuple: R,
            setUserData: U
          } = (0, O.useRockstarUserState)(), [G, H] = (0, o.useState)(null), [W, q] = (0, o.useState)(null), [X, K] = (0, o.useState)(!1), [Y, Q] = (0, o.useState)(!1), [Z, J] = (0, o.useState)(0), ee = (0, o.createRef)(), ae = Ys(ee, !1), se = (0, o.createRef)(), [te, re] = (0, o.useState)(0), [ie, ce] = (0, o.useState)([]), [ne, oe] = (0, o.useState)(244), le = (0, o.useMemo)((() => (0, ba.c)()), []), de = (0, o.useMemo)((() => ((e, a, s, t, r) => [{
            text: e.formatMessage(Ns.sc_link_activity_feed),
            location: {
              domain: ba.U.socialClub,
              path: "/"
            },
            target: "_self",
            ga: {
              ...Os,
              text: Ns.sc_link_activity_feed.defaultMessage
            },
            dataTestId: "activityFeedLink"
          }, {
            text: e.formatMessage(Ns.sc_link_account),
            target: "_self",
            dataTestId: "accountButton",
            children: [{
              text: e.formatMessage(Ns.sc_link_view_my_profile),
              href: s.profile_link,
              target: "_self",
              ga: {
                ...Os,
                text: Ns.sc_link_view_my_profile.defaultMessage
              },
              dataTestId: "viewMyProfileLink"
            }, {
              text: e.formatMessage(Ns.sc_link_messages),
              location: {
                domain: ba.U.socialClub,
                path: "/message"
              },
              target: "_self",
              ga: {
                ...Os,
                text: Ns.sc_link_messages.defaultMessage
              },
              dataTestId: "messagesLink"
            }, {
              text: e.formatMessage(Ns.sc_link_game_activation),
              location: {
                domain: ba.U.socialClub,
                path: "/activate"
              },
              target: "_self",
              ga: {
                ...Os,
                text: Ns.sc_link_game_activation.defaultMessage
              },
              dataTestId: "gameActivationLink"
            }]
          }, {
            text: e.formatMessage(Ns.sc_link_notifications),
            location: {
              domain: ba.U.socialClub,
              path: "/notifications"
            },
            target: "_self",
            hasNotifications: t,
            ga: {
              ...Os,
              text: Ns.sc_link_notifications.defaultMessage,
              location: {
                domain: ba.U.socialClub,
                path: "/notifications"
              }
            },
            dataTestId: "notificationsLink"
          }, {
            text: e.formatMessage(Ns.sc_link_crews),
            location: {
              domain: ba.U.socialClub,
              path: `/member/${s.nickname}/crews`
            },
            target: "_self",
            ga: {
              ...Os,
              text: Ns.sc_link_crews.defaultMessage
            },
            dataTestId: "crewsLink"
          }, {
            text: e.formatMessage(Ns.sc_link_friends),
            target: "_self",
            dataTestId: "friendsButton",
            children: [{
              text: e.formatMessage(Ns.sc_link_my_friends),
              location: {
                domain: ba.U.socialClub,
                path: `/member/${s.nickname}/friends`
              },
              target: "_self",
              ga: {
                ...Os,
                text: Ns.sc_link_my_friends.defaultMessage
              },
              dataTestId: "myFriendsLink"
            }, {
              text: e.formatMessage(Ns.sc_link_import_friends),
              location: {
                domain: ba.U.socialClub,
                path: "/friends/import"
              },
              target: "_self",
              ga: {
                ...Os,
                text: Ns.sc_link_import_friends.defaultMessage
              },
              dataTestId: "importFriendsLink"
            }, {
              text: e.formatMessage(Ns.sc_link_find_friends),
              location: {
                domain: ba.U.socialClub,
                path: "/members"
              },
              target: "_self",
              ga: {
                ...Os,
                text: Ns.sc_link_import_friends.defaultMessage
              },
              dataTestId: "findFriendsLink"
            }]
          }, {
            text: e.formatMessage(Ns.sc_link_settings),
            location: {
              domain: ba.U.socialClub,
              path: "/settings"
            },
            target: "_self",
            ga: {
              ...Os,
              text: Ns.sc_link_settings.defaultMessage
            },
            dataTestId: "settingsLink"
          }, Rs(e), {
            text: e.formatMessage(Ns.sc_link_log_out),
            href: `${a.logout}?returnUrl=${r}`,
            target: "_self",
            reloadDocument: !0,
            ga: {
              ...Os,
              text: Ns.sc_link_log_out.defaultMessage
            },
            dataTestId: "logoutButton"
          }])(_, a, E, $, S, window)), [_, a, E, $, S, le]), me = () => {
            Q(i + ne * Z < ae)
          }, ge = () => {
            if (se.current) {
              const {
                current: e
              } = se, a = e?.scrollHeight, s = window.getComputedStyle(e);
              if (s) {
                let e = 16 * parseInt(s.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), re(a + e)
              } else re(a)
            }
          };
          return (0, o.useEffect)((() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            le.currentSite?.site === ba.U.socialClub && (e = encodeURIComponent("/")), C(e)
          }), [I]), (0, o.useEffect)((() => {
            ce(E.characters[P] ?? [])
          }), [E, P]), (0, o.useEffect)((() => {
            E && U(E)
          }), [E]), (0, o.useEffect)((() => {
            const e = E?.characters.gtao;
            if (null !== B && !e.length) return void R(!1);
            if (null == z || !e.length) return;
            const a = e?.[z] ?? e?.[0] ?? null;
            R(!!a?.platform && [a.platform, a.characterSlot])
          }), [z, E, B]), (0, o.useEffect)((() => {
            (async () => {
              if (!E?.id) return;
              const {
                count: e
              } = await (0, F.coreScApiFetch)("notification/count", {
                pingBearer: L
              });
              A(e > 0)
            })()
          }), [E]), (0, o.useEffect)((() => {
            me()
          }), [ne]), (0, o.useEffect)((() => {
            t(!0), g(u < 768), g(u < 768 || k < 649)
          }), [u, k]), (0, o.useEffect)((() => {
            let e = ie.length - 1;
            e < 0 && (e = 0), J(e);
            const a = ie.length > 0 ? ie[z] ?? ie[0] : null;
            if (!a) return;
            const s = null !== a ? xs(a.platform, "large") : null;
            q(s), H(a), ie.length > 1 ? K(!0) : K(!1), n(ie.length - 1 > 3)
          }), [z, ie]), (0, o.useEffect)((() => {
            me()
          }), [Z, d, u, ie]), (0, o.useEffect)((() => {
            ge(), As()((() => {
              setTimeout(ge, 0)
            }), 300)
          }), [u, k]), (0, o.useEffect)((() => {
            const e = T?.currentCharId ?? 0;
            e !== z && D(Math.max(0, Math.min(e, ie.length - 1)))
          }), [ie, T]), (0, f.jsxs)(f.Fragment, {
            children: [null !== G && "gtao" === P && (0, f.jsxs)("div", {
              className: Zs.scProfile,
              tabIndex: -1,
              "aria-label": _.formatMessage(Ns.profile_selector_profile_card),
              children: [(0, f.jsx)(Ks, {
                s: Zs,
                character: G,
                platformTag: W
              }), !0 === X && (0, f.jsxs)("div", {
                className: Zs.scCharacterSelector,
                children: [(0, f.jsx)("button", {
                  className: Zs.scCharacterSelectBtn,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const a = !s;
                    t(a), M({
                      event: a ? "character_selector_close" : "character_selector_open",
                      event_action: !0 === a ? "close" : "open",
                      event_category: "character_selector"
                    })
                  },
                  "data-list-closed": s,
                  children: (0, f.jsx)("span", {
                    children: (0, f.jsx)(l.FormattedMessage, {
                      ...Ns.profile_selector_switch_character
                    })
                  })
                }), !1 === d && (0, f.jsx)("div", {
                  className: Zs.scCharacterList,
                  "data-long-list": c,
                  "aria-hidden": s,
                  ref: r,
                  children: ie.map((e => (0, f.jsx)(qs, {
                    tabIndex: s ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: oe
                  }, e.mugshotUrl)))
                }), !0 === d && (0, f.jsx)("div", {
                  className: Zs.scCharacterList,
                  "data-single-item": 2 === ie.length,
                  "data-swiper-disabled": Y,
                  "aria-hidden": s,
                  ref: ee,
                  children: (0, f.jsx)(Qs, {
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
                    children: ie.filter(((e, a) => a !== z)).map((e => (0, o.createElement)(qs, {
                      characterData: e,
                      setMobileCardWidth: oe,
                      key: e.mugshotUrl,
                      tabIndex: s ? -1 : 0
                    })))
                  })
                })]
              })]
            }), (0, f.jsxs)("nav", {
              className: Zs.scNav,
              "aria-hidden": !V,
              children: [(0, f.jsx)("button", {
                className: Zs.scNavHeader,
                type: "button",
                "data-opened": j,
                "data-nav-opened": V,
                tabIndex: j ? -1 : 0,
                onClick: e => {
                  e.stopPropagation(), j || w(!0)
                },
                "data-testid": "playerButton",
                children: (0, f.jsx)("span", {
                  children: E.nickname
                })
              }), (0, f.jsx)("div", {
                className: Zs.scNavWrap,
                "data-opened": j,
                "data-logged-in": "true",
                ref: se,
                style: {
                  "--scNavWrap-max-height": `${te+y}px`
                },
                children: de.map(((e, a) => (0, o.createElement)(Hs, {
                  ...e,
                  id: a,
                  activeSubNavId: h,
                  setActiveSubNavId: x,
                  setSubNavExtraHeight: N,
                  key: e.text
                })))
              })]
            }), (0, f.jsx)("div", {
              className: Zs.scLanguageSelector,
              style: {
                visibility: V ? null : "hidden"
              },
              children: (0, f.jsx)(Fs.LanguageSelector, {
                theme: "sc-menu",
                languageSelectorOpened: b,
                setLanguageSelectorOpened: v
              })
            })]
          })
        })),
        et = {
          scMenu: "rockstargames-sites-rockstargamesebc4c779cfe9d0b7cfd678424e57370c",
          pillBtn: "rockstargames-sites-rockstargamesf333ffbc5b9f9d571b81be0a7235190d",
          selected: "rockstargames-sites-rockstargamese3bdabe09c3d1b98b61f3d0484209912",
          navOpen: "rockstargames-sites-rockstargamesff929155ac480a9cfa5540dfd3e70ae9",
          dragHandle: "rockstargames-sites-rockstargamesba4968108b922dd8165c6e53557f5f2e",
          dragHandleBtn: "rockstargames-sites-rockstargamesd362ba3eeee50f90600a413c05761431",
          scOverlay: "rockstargames-sites-rockstargamesd8e443f5d0d9171449f5f1042f80aa17"
        },
        at = (0, l.withIntl)((() => {
          const {
            windowHeight: e
          } = (0, F.useWindowResize)(), a = (0, l.useIntl)(), {
            languageSelectorOpened: t,
            setLanguageSelectorOpened: r,
            setActiveSubNavId: i,
            scNavOpened: c,
            setScNavOpened: n,
            charListHidden: d,
            setCharListHidden: m
          } = Vs(), [g, u] = (0, o.useState)(!1), {
            setBodyIsScrollable: k
          } = (0, F.useBodyScrollable)(), {
            navHidden: _ = !1
          } = (0, p.useState)(), {
            loggedIn: b
          } = (0, O.useRockstarUser)(), {
            currentCharId: v,
            navOpen: h,
            setNavOpen: x,
            userData: y
          } = (0, O.useRockstarUserState)(), {
            track: N
          } = (0, O.useGtmTrack)(), [j, w] = (0, o.useState)(!1), S = (0, p.useReactiveVar)(O.scConfig), C = (0, o.useRef)(), [I, T] = (0, o.useState)(0), M = (0, o.createRef)(), [L, E] = (0, o.useState)(!1), [B, P] = (0, o.useState)(0), [z, $] = (0, o.useState)(!1), {
            mutateLSSettings: V,
            lsSettings: D
          } = (0, F.useRockstarWebLSSettings)(), A = (0, o.useCallback)((e => {
            m(e), C.current && !0 === e && (C.current.scrollTop = 0)
          }), [C]);
          return (0, o.useEffect)((() => {
            null !== v && D.currentCharId !== v && V({
              key: "currentCharId",
              value: v
            }), !1 === b ? V({
              key: "currentCharId",
              value: null
            }) : b && !y && N({
              event: "account_synced"
            })
          }), [v, b]), (0, o.useEffect)((() => {
            C.current && (!1 === d && !1 === j && (C.current.style.height = `${C.current.scrollHeight}px`), !0 === d && (C.current.style.height = null))
          }), [d, C, j]), (0, o.useEffect)((() => {
            const e = () => {
                x(!1), A(!0)
              },
              a = a => {
                "Escape" === a.code && e()
              };
            return document.addEventListener("click", e), document.addEventListener("keyup", a), () => {
              document.removeEventListener("click", e), document.removeEventListener("keyup", a)
            }
          }), []), (0, o.useEffect)((() => {
            x(!1), A(!0)
          }), [_]), (0, o.useEffect)((() => {
            if (M.current) {
              const {
                current: e
              } = M, a = window.getComputedStyle(e);
              T(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }), [M]), (0, o.useEffect)((() => {
            k(!L || !h)
          }), [h, L]), (0, o.useEffect)((() => {
            $(window.navigator.userAgent.includes("Mac"))
          }), []), (0, o.useEffect)((() => {
            M.current && u(M?.current?.scrollHeight >= e)
          }), [M, e]), (0, o.useEffect)((() => {
            h || (i(-1), r(!1))
          }), [h]), (0, o.useEffect)((() => {
            t && (d || A(!0), c && (n(!1), i(-1)))
          }), [t]), (0, o.useEffect)((() => {
            c && (t && r(!1), d || A(!0))
          }), [c]), null === b ? null : (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsxs)("div", {
              className: [et.scMenu, h ? et.navOpen : ""].join(" "),
              "data-logged-in": b,
              "data-mac-browser": z,
              "data-scroll-mode": g,
              ref: M,
              "aria-hidden": !h,
              children: [(0, f.jsx)("button", {
                className: et.dragHandleBtn,
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
                children: (0, f.jsx)("img", {
                  className: et.dragHandle,
                  src: s(82708),
                  alt: a.formatMessage(Ns.sc_menu_drag_handle)
                })
              }), b ? (0, f.jsx)(Js, {
                sc: S,
                charListHidden: d,
                hideCharacterList: A,
                refCharacterListDesktop: C,
                menuPadding: I,
                longCharList: j,
                setLongCharList: w,
                isMobileMode: L,
                setIsMobileMode: E
              }) : (0, f.jsx)(Ws, {
                sc: S,
                navOpen: h
              })]
            }), (0, f.jsx)("div", {
              className: [et.scOverlay, h ? et.navOpen : ""].join(" "),
              "data-logged-in": b
            })]
          })
        }), va),
        st = s(71084),
        tt = s(29314),
        rt = (0, l.withIntl)((e => {
          let {
            setOtherHeaderDropdowns: a
          } = e;
          const s = (0, l.useIntl)(),
            {
              data: t
            } = (0, O.useRockstarUser)(),
            {
              charactersNeeded: r,
              currentCharId: i,
              navOpen: c,
              setNavOpen: n
            } = (0, O.useRockstarUserState)(),
            {
              track: d
            } = (0, O.useGtmTrack)(),
            [m, g] = (0, o.useState)(null),
            [u, k] = (0, o.useState)(!1),
            [_, p] = (0, o.useState)(null),
            [b, v] = (0, o.useState)(!1),
            [h, x] = (0, o.useState)([]);
          (0, o.useEffect)((() => {
            x(t.characters[r] ?? [])
          }), [t, r]);
          const y = (0, o.useCallback)((e => {
            e.stopPropagation(), n(!c), d({
              event: "account_menu_click",
              element_placement: "Account Menu",
              text: c ? "close" : "open"
            })
          }), [c]);
          return (0, o.useEffect)((() => {
            const e = t?.id ?? !1,
              a = e ? (h?.[i]?.mugshotUrl ?? t?.avatar) || st : tt,
              s = xs(h?.[i]?.platform, "small") ?? null;
            p(s), g(a), k(e), v(!!h?.[i]?.mugshotUrl)
          }), [t, h, i, st, tt]), (0, f.jsxs)("button", {
            className: "rockstargames-sites-rockstargamesdc519cef2feb621e4715bd3fcdf09791",
            "data-img-set": b,
            "aria-label": s.formatMessage(Ns.sc_menu_toggle),
            type: "button",
            onClick: e => y(e),
            "data-testid": "avaterMenuButton",
            children: [(0, f.jsx)("img", {
              className: "rockstargames-sites-rockstargamesce75eaa6d65692d36b60d31f3f660ff0",
              src: m || "",
              onError: () => {
                g(st)
              },
              alt: t?.nickname || ""
            }), u && null !== _ && (0, f.jsx)("img", {
              className: "rockstargames-sites-rockstargamesaaf21e74a659089f743bb160bdf95046",
              src: _.src,
              alt: _.alt
            }), u && (0, f.jsx)("div", {
              "data-ui-name": "avatar",
              className: "rockstargames-sites-rockstargamescf6b9e7404c64067bdfef9b79e9eb287",
              "data-platform": h?.[i]?.platform ?? null
            })]
          })
        }), va),
        it = {
          pillBtn: "rockstargames-sites-rockstargamesb03cc125f63972f13ae84119af852edc",
          selected: "rockstargames-sites-rockstargamesfbcf46d7ef0b32e64b374eee6e3cda3e",
          promoModule: "rockstargames-sites-rockstargamesa586d11bf592ca821d65db7660518322",
          promoModuleImage: "rockstargames-sites-rockstargamesccd749d613ceb73aedb825d77d22cd0b",
          gradient: "rockstargames-sites-rockstargamese4f178a3d1e3dfef8b42f73eabd9919e",
          promoModuleContentContainer: "rockstargames-sites-rockstargamesd8348a62030f7e2f3c7a53cf67bef0f1",
          left: "rockstargames-sites-rockstargamese56a5b7d9a696ea8ca340cc9b67998fc",
          right: "rockstargames-sites-rockstargamesc84d09e0c4466d20792d5a9016a00236",
          promoModuleTextContent: "rockstargames-sites-rockstargamesbf34746d222495ab8e30cede8de42d71"
        },
        ct = e => {
          let {
            backgroundColor: a,
            brands: s = [],
            description: t = "",
            ctaLabel: r = "Click here",
            ctaLink: i = "https://rockstargames.com",
            gradient: c = !0,
            image: n,
            imageOrientation: l = "right",
            title: d = ""
          } = e;
          const [m, g] = (0, o.useState)(!1), {
            ref: u,
            inView: k
          } = (0, W.cD)({
            threshold: .6
          }), {
            track: _
          } = (0, O.useGtmTrack)(), p = {
            "--promo-background": a ?? "var(--black-200)",
            "--promo-image": `url(${(0,I.useGetCdnSource)(n)})` ?? 0,
            "--promo-order": "left" === l ? "row" : "row-reverse"
          };
          return (0, o.useEffect)((() => {
            k && !m && (_({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: "promo module",
              element_placement: "promo module"
            }), g(!0))
          }), [k]), (0, f.jsxs)(Fe.motion.div, {
            className: it.promoModule,
            style: p,
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
            ref: u,
            children: [(0, f.jsx)("div", {
              className: [it.promoModuleImage, c ? it.gradient : "", "left" === l ? it.left : it.right].join(" ")
            }), (0, f.jsxs)("div", {
              className: it.promoModuleContentContainer,
              children: [(0, f.jsx)(w, {
                brands: s,
                className: it.promoModuleBrands
              }), (0, f.jsxs)("div", {
                className: it.promoModuleTextContent,
                children: [d && (0, f.jsx)("h3", {
                  children: d
                }), t && (0, f.jsx)("p", {
                  children: t
                })]
              }), r && (0, f.jsx)(E, {
                to: i,
                text: r,
                onClick: () => {
                  _({
                    event: "cta_other",
                    event_category: "cta",
                    event_action: "other",
                    event_label: r,
                    element_placement: "promo module",
                    link_url: i,
                    text: r
                  })
                }
              })]
            })]
          })
        };
      var nt = s(1532);
      const ot = {
          rating: "rockstargames-sites-rockstargamesa1271bbed316bf567eb67e78d2143808",
          withDescriptors: "rockstargames-sites-rockstargamescba248edc2520d3f1ad195a8495dc1f8",
          withOutDescriptors: "rockstargames-sites-rockstargamesff919f7a60b854473b61075a671deb6a",
          text: "rockstargames-sites-rockstargamesd47cd2b7c7415cb44cddef00b1c9b35f"
        },
        lt = (0, l.defineMessages)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      (0, F.importAll)(s(52884));
      const dt = ra((0, l.withIntl)((e => {
          let {
            descriptors: a = null,
            footer: t = null,
            href: r,
            img: i = null,
            titleSlug: c = null,
            style: n = {},
            className: d
          } = e;
          const [m, g] = (0, o.useState)(!1), {
            inView: k
          } = (0, W.cD)({
            threshold: .6
          }), [_, b] = (0, o.useState)({
            img_rating: i,
            rating_descriptors: a,
            rating_footer: t,
            url_rating: r
          }), {
            track: v
          } = (0, O.useGtmTrack)(), h = (0, l.useIntl)(), {
            data: x
          } = (0, p.useQuery)(nt.GameData, {
            variables: {
              titleSlug: c
            },
            skip: !c
          });
          if ((0, o.useEffect)((() => {
              x && b(x?.game)
            }), [x]), (0, o.useEffect)((() => {
              k && !m && _.img_rating && (v({
                event: "page_section_impression",
                event_action: "impression",
                event_category: "page_section",
                event_label: "rating",
                element_placement: "rating"
              }), g(!0))
            }), [k]), !_.img_rating) return null;
          const y = !!_.rating_descriptors;
          return (0, f.jsxs)("div", {
            className: [ot.rating, y ? ot.withDescriptors : ot.withOutDescriptors, d || ""].join(" "),
            style: (0, F.safeStyles)(n),
            children: [(0, f.jsx)(u, {
              to: _.url_rating,
              target: "_blank",
              children: (0, f.jsx)("img", {
                alt: h.formatMessage(lt.components_ratings_link_alt, {
                  rating: (N = _.img_rating, N.replace(/_/g, " ").split(".")[0].toUpperCase())
                }),
                src: s(7e4)(`./${_.img_rating}`)
              })
            }), y && (0, f.jsxs)("div", {
              className: ot.text,
              children: [(0, f.jsx)("p", {
                className: ot.descriptors,
                dangerouslySetInnerHTML: {
                  __html: _?.rating_descriptors?.split(/<br\s?\/?>/).join(", ") || ""
                }
              }), _.rating_footer && (0, f.jsx)("hr", {}), _.rating_footer && (0, f.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: _.rating_footer.replace(/ \//g, ", ")
                }
              })]
            })]
          });
          var N
        }), va)),
        mt = {
          responsiveFlexBox: "rockstargames-sites-rockstargamescef355ba53827b9ec44655c80b247b2e",
          responsiveFlexItem: "rockstargames-sites-rockstargamesa8f5d10f689c3d40c8378e3ae8a07517",
          responsiveImage: "rockstargames-sites-rockstargamesbee8268780b292e5bc0da0b497e2c28f"
        },
        gt = e => {
          let {
            children: a,
            className: s,
            style: t
          } = e;
          return (0, f.jsx)("div", {
            className: [mt.responsiveFlexBox, void 0 !== s ? s : ""].join(" "),
            style: t,
            children: a
          })
        },
        ft = {
          responsiveFlexItem: "rockstargames-sites-rockstargamesae579f6183cf73c897e68c8aae5c9d9d"
        },
        ut = e => {
          let {
            children: a,
            className: s,
            style: t
          } = e;
          return (0, f.jsx)("div", {
            className: [ft.responsiveFlexItem, void 0 !== s ? s : ""].join(" "),
            style: t,
            children: a
          })
        },
        kt = {
          responsiveGridBox: "rockstargames-sites-rockstargamesa28c0b7a44e1a2d5fb257161ce36a24f",
          responsiveGridItem: "rockstargames-sites-rockstargamesbeddf36313a28976090b5a8b04d2594a"
        },
        _t = e => {
          let {
            children: a,
            cols: s,
            className: t,
            rows: r,
            style: i
          } = e;
          const c = i ? {
            ...i
          } : {};
          return void 0 !== s && (c.gridTemplateColumns = `repeat(${s}, 1fr)`), void 0 !== r && (c.gridTemplateRows = `repeat(${r}, 1fr)`), (0, f.jsx)("div", {
            className: [kt.responsiveGridBox, void 0 !== t ? t : ""].join(" "),
            style: c,
            children: a
          })
        },
        pt = {
          responsiveGridBox: "rockstargames-sites-rockstargamesa39e7c7140ada0ab28537c8c901e816f",
          responsiveGridItem: "rockstargames-sites-rockstargamesbe7a0966e2f0457c1172ac9da99020c6"
        },
        bt = e => {
          let {
            children: a,
            className: s,
            style: t
          } = e;
          return (0, f.jsx)("div", {
            className: [pt.responsiveGridItem, void 0 !== s ? s : ""].join(" "),
            style: t,
            children: a
          })
        },
        vt = {
          responsiveImage: "rockstargames-sites-rockstargamese31b43dce2e720669fb90bf539d22197"
        },
        ht = e => {
          let {
            src: a,
            className: s = "",
            animate: t,
            ariaLabel: r,
            style: i = {}
          } = e;
          const [c, n] = (0, F.usePreloadImg)(a);
          return c ? (i.backgroundImage = `url(${a})`, (0, f.jsx)("div", {
            role: "img",
            "aria-label": r ?? "R* Games",
            className: [vt.responsiveImage, t ? vt.animateBox : "", s].join(" "),
            style: {
              ...i,
              "--aspect-ratio": n.width / n.height
            }
          })) : null
        },
        xt = {
          responsiveSection: "rockstargames-sites-rockstargamesfb7094e43a166c19080ccfe92ed7420d",
          maxWidth: "rockstargames-sites-rockstargamesbdc35dbaa55c59ddd2831fd3ac05c5a7"
        },
        yt = e => {
          let {
            children: a,
            className: s,
            style: t,
            maxWidth: r
          } = e;
          return (0, f.jsx)("section", {
            className: [xt.responsiveSection, void 0 !== s ? s : ""].join(" "),
            style: t,
            children: r ? (0, f.jsx)("div", {
              className: xt.maxWidth,
              children: a
            }) : a
          })
        },
        Nt = () => (0, f.jsx)(u, {
          className: "rockstargames-sites-rockstargamesba0c20f78999975dfb8d9cff0de44b34",
          alt: "Rockstar Games Home",
          to: "/"
        }),
        jt = () => {
          const {
            pathname: e
          } = (0, m.useLocation)();
          return (0, o.useEffect)((() => {
            window.scrollTo(0, 0)
          }), [e]), null
        },
        wt = (0, o.forwardRef)(((e, a) => {
          const {
            threshold: s,
            callback: t,
            children: r,
            requireUser: i
          } = e, {
            track: c
          } = (0, O.useGtmTrack)(i), [n, l] = (0, o.useState)(a?.current);
          return (0, o.useEffect)((() => {
            a?.current && l(a.current)
          }), [a]), ((e, a, s) => {
            const [t, r] = (0, o.useState)({
              scrollDepths: e,
              scrollY: 0
            }), {
              scrollDepths: i,
              scrollY: c
            } = t;
            (0, o.useEffect)((() => {
              "undefined" != typeof window && 0 !== window.pageYOffset && r((e => ({
                ...e,
                scrollY: window.pageYOffset
              })))
            }), []), (0, o.useEffect)((() => {
              r({
                scrollDepths: e,
                scrollY: 0
              })
            }), [window.location.pathname]);
            const n = (0, o.useCallback)((() => {
              const e = document.documentElement,
                c = document.body,
                o = s?.scrollTop || e.scrollTop || c.scrollTop,
                l = s?.scrollHeight || e.scrollHeight || c.scrollHeight,
                {
                  clientHeight: d
                } = e,
                m = o / (l - d) * 100;
              if (i) {
                const e = Math.min(...i, l);
                if (m >= e) {
                  const t = i.filter((a => a !== e));
                  0 === t.length && (s ?? window).removeEventListener("scroll", n), a && a({
                    scrollY: e,
                    scrollPercent: m,
                    remainingDepths: t
                  }), r({
                    scrollY: e,
                    scrollDepths: t
                  })
                }
              } else r({
                ...t,
                scrollY: m
              })
            }), [i, s, a]);
            (0, o.useEffect)((() => {
              if ("undefined" == typeof window) return;
              const e = s ?? window;
              return e.addEventListener("scroll", n), () => e.removeEventListener("scroll", n)
            }), [n])
          })(s, (e => {
            let {
              scrollY: a
            } = e;
            c({
              event: "page_scroll",
              event_category: "page_scroll",
              event_action: a,
              scroll_depth: a
            }), "function" == typeof t && t(a)
          }), n), r
        })),
        St = (0, F.withTranslations)((e => {
          let {
            t: a
          } = e;
          const [s] = (0, o.useState)(""), t = (0, m.useNavigate)(), r = (0, p.useMutateState)();
          return (0, f.jsxs)("form", {
            action: "#",
            className: "rockstargames-sites-rockstargamesb82052ce07e004075e77261c373bfc50",
            onSubmit: e => {
              e.preventDefault(), r({
                navOpen: !1
              }), document.activeElement?.blur(), t(`/search?q=${e.target.q.value}`)
            },
            role: "search",
            children: [(0, f.jsx)("button", {
              type: "submit",
              role: "button",
              title: "Submit"
            }), (0, f.jsx)("input", {
              autoComplete: "off",
              defaultValue: s,
              enterKeyHint: "search",
              name: "q",
              placeholder: a("Search Rockstar Games")
            })]
          })
        })),
        Ct = {
          skeleton: "rockstargames-sites-rockstargamesf963a1ae95f7f5ac2c5192c3f357b6dc",
          pulse: "rockstargames-sites-rockstargamese00ed88d692bbfc1a301dcfc61a077a9",
          gen9Hero: "rockstargames-sites-rockstargamesdb0b80177710d337d93bddb97b8a7dea"
        },
        It = e => {
          let {
            skeleton: a
          } = e;
          return a ? (0, f.jsx)("div", {
            className: [Ct.skeleton, Ct[a]].join(" ")
          }) : null
        },
        Tt = (0, l.defineMessages)({
          components_track_list_title: {
            id: "components_track_list_title",
            defaultMessage: "Tracklist"
          }
        }),
        Mt = {
          bodySmall: "rockstargames-sites-rockstargamesc048aacaedc7fb642f38c7f163c193e3"
        },
        Lt = e => {
          let {
            track: a,
            artist: s
          } = e;
          return (0, f.jsxs)("div", {
            className: Mt.track,
            children: [(0, f.jsx)("p", {
              children: a
            }), (0, f.jsx)("p", {
              className: Mt.bodySmall,
              children: s
            })]
          })
        },
        Et = (0, l.withIntl)((e => {
          let {
            children: a
          } = e;
          return (0, f.jsxs)("div", {
            className: "rockstargames-sites-rockstargamese6c19f2cdd68a4352e248a8324383aa2",
            children: [(0, f.jsx)("h4", {
              className: "rockstargames-sites-rockstargamescd3895fbae93ba04f1401487f6e6eddf",
              children: (0, f.jsx)(l.FormattedMessage, {
                ...Tt.components_track_list_title
              })
            }), (0, f.jsx)("div", {
              className: "rockstargames-sites-rockstargamesef0cde8b15ded961605237d0e8328a9b",
              children: (0, f.jsx)("div", {
                className: "rockstargames-sites-rockstargamesbdd54186db17d27b3daebc4b9d58e09a",
                children: o.Children.map(o.Children.toArray(a), (e => (0, f.jsx)(Lt, {
                  ...e?.props
                })))
              })
            })]
          })
        }), va),
        Bt = "rockstargames-sites-rockstargameseca98eb0b5b84a0c9a2e6d952545a2d5",
        Pt = "rockstargames-sites-rockstargamesd3d0b4ecd3bddba96c73f49fcca34ed8",
        zt = {
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
        $t = e => {
          let {
            title: a = "thumbnail gallery",
            thumbsPerView: s = 3,
            loop: t = !1,
            navigation: r = !1,
            slideChildren: i = [],
            variants: c = {
              parent: void 0,
              main: void 0,
              thumbs: void 0
            },
            transition: n = {
              parent: void 0,
              main: void 0,
              thumbs: void 0
            }
          } = e;
          const {
            track: l
          } = (0, O.useGtmTrack)(), [d, m] = (0, o.useState)([sa.O4, sa.Hj, sa.eM]), [g, u] = (0, o.useState)(null), [k, _] = (0, o.useState)(null);
          return (0, o.useEffect)((() => {
            const e = [sa.O4, sa.Hj, sa.eM];
            r && e.push(sa._2), m(e)
          }), [r]), (0, o.useEffect)((() => {
            if (!i) return;
            const e = i.map(((e, a) => (0, f.jsx)(P.Ky, {
              children: e
            }, Symbol(a).toString())));
            _(e)
          }), [i]), k ? (0, f.jsxs)(Fe.motion.div, {
            className: "rockstargames-sites-rockstargamesd4f245838b94234f21463a08a8112910",
            variants: c.parent,
            transition: n.parent,
            initial: "initial",
            animate: "animate",
            children: [(0, f.jsx)(Fe.motion.div, {
              className: Bt,
              variants: c.main,
              transition: n.main,
              initial: "initial",
              animate: "animate",
              children: (0, f.jsx)(P.wx, {
                loop: t,
                navigation: r,
                pagination: {
                  clickable: !0
                },
                thumbs: {
                  swiper: g
                },
                modules: d,
                breakpoints: zt,
                className: Bt,
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
                children: k
              })
            }), (0, f.jsx)(Fe.motion.div, {
              className: Pt,
              variants: c.thumbs,
              transition: n.thumbs,
              initial: "initial",
              animate: "animate",
              children: (0, f.jsx)(P.wx, {
                threshold: 50,
                onSwiper: u,
                loop: t,
                breakpoints: zt,
                slidesPerView: s,
                freeMode: !0,
                watchSlidesProgress: !0,
                modules: d,
                className: Pt,
                children: k
              })
            })]
          }) : null
        };
      var Vt = s(504);
      const Dt = e => {
          let {
            id: a = null,
            ids: s = null,
            setTitleDataPath: t = null,
            sync: r = !1
          } = e;
          const i = s ?? [a],
            {
              data: c
            } = (0, p.useQuery)(Vt.TinaModulesInfo, {
              variables: {
                ids: i,
                sync: r
              },
              setTitleDataPath: t,
              skip: !i.length
            });
          return c?.tinaModulesInfo ?? null
        },
        At = ra((e => {
          let {
            components: a = {},
            id: s = null,
            ids: t = null,
            skeleton: r
          } = e;
          const i = Dt({
            id: s,
            ids: t
          });
          if (!i) return (0, f.jsx)(It, {
            skeleton: r
          });
          const c = i?.[0]?.tina;
          return c ? (0, f.jsx)(f.Fragment, {
            children: i.map(((e, s) => {
              let {
                tina: t
              } = e;
              return (0, f.jsx)(I.TinaParser, {
                components: a,
                tina: t,
                componentProps: {
                  tinaModulesInfo: i
                }
              }, s)
            }))
          }) : null
        })),
        Ft = e => {
          let {
            children: a,
            style: s,
            theme: t
          } = e;
          const [r, i] = (0, o.useState)(t);
          return (0, o.useEffect)((() => {
            t && i(t)
          }), [t]), (0, f.jsx)("div", {
            className: "rockstargames-sites-rockstargamesa3cc68ab0d512c3d8835ee9abb7a51c4",
            style: s,
            "data-theme": r,
            children: a
          })
        };
      var Ot = s(19168);
      const Rt = {
          pillBtn: "rockstargames-sites-rockstargamesae56f3a5bf16f1160a0cbc040c7611fa",
          selected: "rockstargames-sites-rockstargamesd7e34a082f54f22035320df51e8b4ed9",
          userVote: "rockstargames-sites-rockstargamesfd538df1ac730062880ff9ca1292dcc4",
          info: "rockstargames-sites-rockstargamesdd49c22b2bd842d7e8c11ac45b3a536b",
          voteContent: "rockstargames-sites-rockstargameseb3c4c0d7629a1182cd138d3d2e6e081",
          loggedOutButtons: "rockstargames-sites-rockstargamesd00b4195df0f175083f6aa2a7d847d72",
          voteButtons: "rockstargames-sites-rockstargamesfdd10a481e3da0f8e9511b6a577052e0",
          downVote: "rockstargames-sites-rockstargamesabdbb2656b0080d66eb4d39b7e1eb38d",
          upVote: "rockstargames-sites-rockstargamesea25ed07e937e2efdce0b99d076fbbe1",
          voteButtonActive: "rockstargames-sites-rockstargamesc31731d09d8118c6a82fe6edb193dc50"
        },
        Ut = e => {
          let {
            description: a,
            foreign_id: s = document.location.pathname,
            foreign_type: t = "url",
            title: r
          } = e;
          const {
            track: i
          } = (0, O.useGtmTrack)(), {
            loggedIn: c
          } = (0, O.useRockstarUser)(), {
            refetch: n
          } = (0, p.useQuery)(Ot.UserGetVote, {
            skip: !0
          }), [l] = (0, p.useMutation)(Ot.UserCastVote), [d, m] = (0, o.useState)(null), g = (0, o.useCallback)((async e => {
            i({
              event_action: d ? "like" : "dislike",
              event_category: "cta",
              event: "cta_" + (e ? "like" : "dislike"),
              event_label: s
            });
            const a = {
                foreign_id: s,
                foreign_type: t,
                vote: e
              },
              r = await l({
                variables: a
              });
            m(r?.data?.userCastVote?.vote ?? null)
          }), [s, t]);
          return (0, o.useEffect)((() => {
            (async () => {
              if (!c || !s || !t) return;
              const e = await n({
                foreign_id: s,
                foreign_type: t
              });
              m(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [s, t, c]), (0, f.jsx)("div", {
            className: Rt.userVote,
            children: (0, f.jsxs)("div", {
              className: Rt.voteContent,
              children: [(0, f.jsxs)("div", {
                className: Rt.info,
                children: [(0, f.jsx)("h3", {
                  children: r
                }), (0, f.jsx)("p", {
                  children: a
                })]
              }), (0, f.jsxs)("div", {
                className: [Rt.voteButtons, c ? "" : Rt.loggedOutButtons].join(" "),
                children: [(0, f.jsx)("button", {
                  onClick: () => g(!0),
                  className: [Rt.upVote, d ? Rt.voteButtonActive : ""].join(" "),
                  type: "button",
                  "aria-label": "Vote up"
                }), (0, f.jsx)("button", {
                  className: [Rt.downVote, !1 === d ? Rt.voteButtonActive : ""].join(" "),
                  onClick: () => g(!1),
                  type: "button",
                  "aria-label": "Vote down"
                })]
              })]
            })
          })
        },
        Gt = {
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
        },
        Ht = (0, F.withLocale)((e => {
          let {
            locale: a,
            t: s,
            videos: t
          } = e;
          const {
            setBodyIsScrollable: r
          } = (0, F.useBodyScrollable)(), [i, c] = (0, o.useState)(0), [n, l] = (0, o.useState)(0), d = (0, o.useRef)(null), m = (0, o.useRef)(null);
          return (0, o.useEffect)((() => {
            if (!d.current || m.current) return;
            const e = new(_())(d.current);
            e.get("press").set({
              time: 0
            }), e.get("tap").set({
              time: 150
            });
            const a = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
              s = () => {
                c(i - 1 < 0 ? 0 : i - 1), l(0)
              },
              n = () => {
                const e = i + 1 >= t.length - 1 ? t.length - 1 : i + 1;
                c(e), l(0)
              },
              o = e => {
                l(e.isFinal ? 0 : e.deltaX), "panleft" !== e.additionalEvent && "panright" !== e.additionalEvent || !m.current?.classList.contains(Gt.dragging) || a() && r(!1)
              },
              g = () => {
                a() && r(!0), l(0)
              },
              f = e => {
                "press" === e.type && d.current?.classList.add(`${Gt.disableClick}`), "tap" === e.type && (d.current?.classList.remove(`${Gt.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
              },
              u = () => {
                a() && r(!0), d.current && d.current.classList.remove(`${Gt.disableClick}`)
              },
              k = () => {
                a() && r(!0)
              };
            return m.current.addEventListener("transitionend", k), e.on("swiperight", s), e.on("swipeleft", n), e.on("pan", o), e.on("panend", g), e.on("press tap", f), e.on("pressup", u), () => {
              e.off("swiperight", s), e.off("swipeleft", n), e.off("pan", o), e.off("panend", g), e.off("press tap", f), e.off("pressup", u), m.current && m.current.removeEventListener("transitionend", k), l(0)
            }
          }), [d.current, i]), (0, f.jsxs)("section", {
            className: Gt.carousel,
            children: [(0, f.jsx)("div", {
              className: Gt.track,
              ref: d,
              children: (0, f.jsx)("div", {
                className: `${Gt.items} ${0!==n?Gt.dragging:""}`,
                ref: m,
                style: {
                  transform: `translateX(calc(-${100*i}% + ${n}px))`
                },
                children: t.map(((e, a) => (0, f.jsx)(u, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through screencap",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  className: i === a ? Gt.active : "",
                  role: "link",
                  title: e.title,
                  tabIndex: i === a ? 0 : -1,
                  children: (0, f.jsx)(Qt, {
                    video: e,
                    size: 1280
                  })
                }, e.id)))
              })
            }), (0, f.jsxs)("footer", {
              children: [(0, f.jsx)("div", {
                className: Gt.text,
                children: t.map(((e, t) => (0, f.jsx)(u, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through footer",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  role: "link",
                  title: e.title,
                  tabIndex: i === t ? 0 : -1,
                  children: (0, f.jsxs)("div", {
                    className: [Gt.info, t === i ? Gt.active : ""].join(" "),
                    children: [(0, f.jsxs)("div", {
                      className: Gt.title,
                      children: [(0, f.jsx)("div", {
                        className: Gt.gameTitle,
                        children: `${e.game.title}${"fr_fr"===a?" ":""}`
                      }), (0, f.jsx)("h2", {
                        className: Gt.videoTitle,
                        children: `${e.title}`
                      })]
                    }), (0, f.jsx)(C, {
                      className: Gt.cta,
                      children: s("Watch Now")
                    })]
                  })
                }, e.id)))
              }), (0, f.jsx)("div", {
                className: Gt.dots,
                children: t.map(((e, a) => (0, f.jsx)("button", {
                  "aria-label": `Slide ${a+1}`,
                  "data-gtm-category": "Marquee",
                  "data-gtm-action": "Dot click",
                  "data-gtm-label": `Dot clicked to ${a}`,
                  onClick: () => c(a),
                  className: i === a ? Gt.active : "",
                  type: "button"
                }, e.id)))
              })]
            })]
          })
        })),
        Wt = (0, l.defineMessages)({
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
        qt = {
          videoList: "rockstargames-sites-rockstargamesa77794780421c410f7ea55ed11ae6340",
          sectionHeader: "rockstargames-sites-rockstargamesed556e2220733d99eae5df36ba41f9c7",
          arrowNav: "rockstargames-sites-rockstargamesffeb6a2e829d49f94fea4ee7f5a0d2c8",
          items: "rockstargames-sites-rockstargamesffe2263cdad39631ef304714ba89465d",
          trackWrapper: "rockstargames-sites-rockstargamescbdef484a85e8f352a06609b394d4da7",
          track: "rockstargames-sites-rockstargamesf3f263effe27f3c21f2ab822b9ee5dcf",
          dragging: "rockstargames-sites-rockstargamesc20488bcdf3f23bdf0c6c5b283ae08f4",
          arrow: "rockstargames-sites-rockstargamesc8012415449630a832011f490b9d2b72",
          previous: "rockstargames-sites-rockstargamesf30d899a31937a4cf395643951224469",
          next: "rockstargames-sites-rockstargamesd9d5a85633fc0f0b7f98219d735e6e05",
          disabled: "rockstargames-sites-rockstargamesc806076a1e3e23c77528ee12e32771a3"
        },
        Xt = (0, l.withIntl)((e => {
          let {
            vids: a,
            games: s,
            title: t,
            gameTitleNecessary: r
          } = e;
          const i = (0, l.useIntl)(),
            c = void 0 !== s ? "games" : "videos",
            n = "videos" === c ? a : s.results,
            d = (0, o.useRef)(null),
            [m, g] = (0, o.useState)(0),
            [u, k] = (0, o.useState)(0),
            p = e => {
              const a = Math.ceil(n.length / m);
              let s = e;
              s < 0 ? s = 0 : s >= a - 1 && (s = a - 1), k(s)
            },
            [b, v] = (0, o.useState)(0);
          let h;
          return (0, o.useEffect)((() => {
            const e = () => {
              const e = e => window.matchMedia(`(max-width: ${e})`).matches;
              let a = 4;
              e("768px") ? a = 1 : e("990px") || e("1440px") ? a = 2 : e("1920px") && (a = 3), g(a)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [m]), (0, o.useEffect)((() => {
            if (d.current) {
              const e = new(_())(d.current),
                a = () => {
                  p(u - 1), v(0)
                },
                s = () => {
                  p(u + 1), v(0)
                },
                t = e => {
                  v(e.isFinal ? 0 : e.deltaX)
                },
                r = () => {
                  v(0)
                };
              return e.on("swiperight", a), e.on("swipeleft", s), e.on("pan", t), e.on("panend", r), () => {
                e.off("swiperight", a), e.off("swipeleft", s), e.off("pan", t), e.off("panend", r), v(0)
              }
            }
            return {}
          }), [d.current, u]), h = "games" === c ? (0, f.jsx)(f.Fragment, {
            children: s.results.map((e => (0, f.jsx)(Je, {
              game: e,
              dontOverrideTo: !0,
              to: `/videos?type=game&gameId=${e.id}`
            }, e.id)))
          }) : (0, f.jsx)(f.Fragment, {
            children: a.map((e => (0, f.jsx)(Zt, {
              video: e,
              gameTitleNecessary: r
            }, e.id)))
          }), (0, f.jsxs)("section", {
            className: qt.videoList,
            children: [(0, f.jsxs)("h3", {
              className: qt.sectionHeader,
              children: [t, (0, f.jsxs)("div", {
                className: qt.arrowNav,
                children: [(0, f.jsx)("button", {
                  className: [qt.arrow, qt.previous, 0 === u ? qt.disabled : ""].join(" "),
                  onClick: () => p(u - 1),
                  type: "button",
                  "aria-label": `${0===u?i.formatMessage(Wt.disabled_label)+", ":""}${i.formatMessage(Wt.previous_button_label)}`
                }), (0, f.jsx)("button", {
                  className: [qt.arrow, qt.next, u === Math.ceil(n.length / m) - 1 ? qt.disabled : ""].join(" "),
                  onClick: () => p(u + 1),
                  type: "button",
                  "aria-label": `${u===Math.ceil(n.length/m)-1?i.formatMessage(Wt.disabled_label)+", ":""}${i.formatMessage(Wt.next_button_label)}`
                })]
              })]
            }), (0, f.jsx)("div", {
              className: qt.items,
              children: (0, f.jsx)("div", {
                className: qt.trackWrapper,
                children: (0, f.jsx)("div", {
                  className: [qt.track, 0 !== b ? qt.dragging : ""].join(" "),
                  ref: d,
                  style: {
                    transform: `translateX(calc(-${100*u}% + ${b}px - (var(--standard-grid-gap) * ${u}))`,
                    gridAutoColumns: `calc(100 / ${m} * 1% - calc(var(--standard-grid-gap) * (${m-1}/${m}))`
                  },
                  children: h
                })
              })
            })]
          })
        }), va),
        Kt = (0, F.withTranslations)((e => {
          let {
            error: a,
            t: s,
            domain: t = ""
          } = e;
          console.error({
            error: a
          });
          let r = a?.message ?? s("error-404-new");
          r = s("error-404-new");
          const i = a?.code ?? 398,
            c = (0, o.useRef)(null);
          return (0, o.useEffect)((() => {
            c && c?.current && c.current.focus()
          }), [c]), (0, f.jsxs)("div", {
            className: "rockstargames-sites-rockstargamesd988ce20c420c26fc5e455279bf94cb9",
            children: [(0, f.jsx)("h3", {
              tabIndex: -1,
              ref: c,
              children: `${r} (${i})`
            }), (0, f.jsx)(u, {
              to: "/",
              children: s("Home")
            }), "clr" !== t && (0, f.jsx)(St, {})]
          })
        })),
        Yt = {
          videoPreview: "rockstargames-sites-rockstargamesc6739cc628fda235abe2bafeb30ad7cf",
          card: "rockstargames-sites-rockstargamesec6e68ffa1188155be202dfef3f92829",
          info: "rockstargames-sites-rockstargamesab8da127fbcdb98f874bc3f1377669a2",
          title: "rockstargames-sites-rockstargamese84fa4b2b140994c96a13607410d30a3",
          screencap: "rockstargames-sites-rockstargamesa322c3d2275cedd594a3b17800154066",
          screencapLoaded: "rockstargames-sites-rockstargamesf68c57f5459778024e5a98918ae61ab2",
          gameTitle: "rockstargames-sites-rockstargamesdebff452a4923aded7de826c081bab5d"
        },
        Qt = e => {
          let {
            video: a,
            size: s = 640
          } = e;
          const t = `${a.screencap}?im=Resize=${s}`,
            [r] = (0, F.usePreloadImg)(t);
          return (0, f.jsx)("div", {
            className: [Yt.screencap, r ? Yt.screencapLoaded : ""].join(" "),
            style: {
              background: `url(${t}) center/cover`
            }
          })
        },
        Zt = e => {
          let {
            gameTitleNecessary: a = !0,
            openInNewWindow: s = !1,
            video: t,
            size: r,
            toExplicit: i
          } = e;
          const c = i ?? `/videos/${t.id}`,
            n = {
              className: Yt.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": c
            },
            o = (0, f.jsxs)("div", {
              className: Yt.card,
              children: [(0, f.jsx)(Qt, {
                video: t,
                size: r
              }), (0, f.jsxs)("div", {
                className: Yt.info,
                children: [a ? (0, f.jsx)("div", {
                  className: Yt.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: t.game.title
                  }
                }) : "", (0, f.jsx)("h5", {
                  className: Yt.title,
                  dangerouslySetInnerHTML: {
                    __html: t.title
                  }
                })]
              })]
            });
          return s ? (0, f.jsx)("a", {
            href: c,
            target: "_blank",
            ...n,
            children: o
          }) : (0, f.jsx)(u, {
            to: c,
            ...n,
            children: o
          })
        };
      class Jt extends o.Component {
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
          return null !== this.state.error.code ? (0, f.jsx)(Kt, {
            error: this.state.error
          }) : this.props.children
        }
      }
      const er = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return function(s) {
            return (0, f.jsx)(Jt, {
              header: a,
              children: (0, f.jsx)(e, {
                ...s
              })
            })
          }
        },
        ar = (0, o.forwardRef)(((e, a) => {
          const {
            children: s,
            tag: t = "div"
          } = e, r = Fe.m[t];
          return (0, f.jsx)(Fe.LazyMotion, {
            features: Fe.domAnimation,
            children: (0, f.jsx)(r, {
              ref: a,
              ...e,
              children: s
            })
          })
        })),
        sr = {
          visible: {
            opacity: 1
          },
          hidden: {
            opacity: 0
          }
        },
        tr = {
          ease: "easeIn",
          duration: .4
        },
        rr = e => {
          let {
            children: a
          } = e;
          return (0, f.jsx)(Fe.motion.div, Object.assign({
            className: "rockstargames-sites-rockstargamesf0ee4e641f1ac92151be887c9ebb8392",
            variants: sr,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: tr
          }, {
            children: a
          }))
        },
        ir = e => a => (0, f.jsx)(rr, {
          children: (0, f.jsx)(e, Object.assign({}, a))
        }),
        cr = {
          visible: {
            opacity: 1,
            y: 0
          },
          hidden: {
            opacity: 0,
            y: 40
          }
        },
        nr = {
          ease: "easeIn",
          duration: .75
        },
        or = e => {
          let {
            children: a
          } = e;
          return (0, f.jsx)(Fe.motion.div, {
            className: "rockstargames-sites-rockstargamesa479a10c5475b17a0564b60fecf98c8b",
            variants: cr,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: nr,
            children: a
          })
        },
        lr = e => a => (0, f.jsx)(or, {
          children: (0, f.jsx)(e, {
            ...a
          })
        }),
        dr = {
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
        mr = {
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
        gr = function() {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "collapsed";
          return mr[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "imageMask"][e]
        };
      var fr = s(80544);
      const ur = JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[300,300,0]},"a":{"k":[0,0,0]},"s":{"k":[244,244,100]}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"k":[100,100]},"p":{"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"tm","s":{"k":[{"i":{"x":[0.439],"y":[1.016]},"o":{"x":[0.561],"y":[0.015]},"n":["0p439_1p016_0p561_0p015"],"t":5,"s":[100],"e":[0]},{"t":33.0000013441176}],"ix":1},"e":{"k":[{"i":{"x":[0.439],"y":[1.017]},"o":{"x":[0.561],"y":[0.016]},"n":["0p439_1p017_0p561_0p016"],"t":0,"s":[100],"e":[0]},{"t":30.0000012219251}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"},{"ty":"st","fillEnabled":true,"c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":16},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"}],"ip":0,"op":900.000036657751,"st":0,"bm":0,"sr":1}],"v":"4.5.3","ddd":0,"ip":1.00000004073083,"op":33.0000013441175,"fr":29.9700012207031,"w":600,"h":600}'),
        kr = JSON.parse('{"v":"5.7.3","fr":60,"ip":0,"op":64,"w":300,"h":300,"nm":"Dot_Loading","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"center","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":10,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":22,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":34,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.667,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"right","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":5,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":17,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":29,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.333,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":12,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":24,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0}],"markers":[]}'),
        _r = {
          SPINNING: "spinning",
          THREE_DOTS: "threeDots"
        },
        pr = e => {
          let a, {
            type: s = _r.SPINNING
          } = e;
          switch (s) {
            case _r.THREE_DOTS:
              a = kr;
              break;
            case _r.SPINNING:
            default:
              a = ur
          }
          return (0, f.jsx)(fr.c, {
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
        U: () => t,
        c: () => i
      });
      const t = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store"
        },
        r = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        i = () => {
          let e;
          const {
            location: a
          } = window, s = a.hostname.substring(0, a.hostname.indexOf(".rockstargames.com")), t = r.findIndex((a => Object.entries(a.sites).findIndex((a => {
            let [t, r] = a;
            return r === s && (e = {
              site: t,
              subDomain: r
            }, !0)
          })) >= 0)), i = r[t >= 0 ? t : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...i,
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
          var t = e.type;
          "NamedType" === t.kind && a.add(t.name.value)
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
      var t = {};

      function r(e, a) {
        for (var s = 0; s < e.definitions.length; s++) {
          var t = e.definitions[s];
          if (t.name && t.name.value == a) return t
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), t[e.name.value] = a
        }
      })), e.exports = a, e.exports.GetAudioAlbum = function(e, a) {
        var s = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var i = t[a] || new Set,
          c = new Set,
          n = new Set;
        for (i.forEach((function(e) {
            n.add(e)
          })); n.size > 0;) {
          var o = n;
          n = new Set, o.forEach((function(e) {
            c.has(e) || (c.add(e), (t[e] || new Set).forEach((function(e) {
              n.add(e)
            })))
          }))
        }
        return c.forEach((function(a) {
          var t = r(e, a);
          t && s.definitions.push(t)
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
          var t = e.type;
          "NamedType" === t.kind && a.add(t.name.value)
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
      var t = {};

      function r(e, a) {
        for (var s = 0; s < e.definitions.length; s++) {
          var t = e.definitions[s];
          if (t.name && t.name.value == a) return t
        }
      }

      function i(e, a) {
        var s = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var i = t[a] || new Set,
          c = new Set,
          n = new Set;
        for (i.forEach((function(e) {
            n.add(e)
          })); n.size > 0;) {
          var o = n;
          n = new Set, o.forEach((function(e) {
            c.has(e) || (c.add(e), (t[e] || new Set).forEach((function(e) {
              n.add(e)
            })))
          }))
        }
        return c.forEach((function(a) {
          var t = r(e, a);
          t && s.definitions.push(t)
        })), s
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), t[e.name.value] = a
        }
      })), e.exports = a, e.exports.UserGetVote = i(a, "UserGetVote"), e.exports.UserCastVote = i(a, "UserCastVote")
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
          var t = e.type;
          "NamedType" === t.kind && a.add(t.name.value)
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
      var t = {};

      function r(e, a) {
        for (var s = 0; s < e.definitions.length; s++) {
          var t = e.definitions[s];
          if (t.name && t.name.value == a) return t
        }
      }

      function i(e, a) {
        var s = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var i = t[a] || new Set,
          c = new Set,
          n = new Set;
        for (i.forEach((function(e) {
            n.add(e)
          })); n.size > 0;) {
          var o = n;
          n = new Set, o.forEach((function(e) {
            c.has(e) || (c.add(e), (t[e] || new Set).forEach((function(e) {
              n.add(e)
            })))
          }))
        }
        return c.forEach((function(a) {
          var t = r(e, a);
          t && s.definitions.push(t)
        })), s
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), t[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesList = i(a, "TinaModulesList"), e.exports.TinaModulesInfo = i(a, "TinaModulesInfo")
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
          var t = e.type;
          "NamedType" === t.kind && a.add(t.name.value)
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
      var t = {};

      function r(e, a) {
        for (var s = 0; s < e.definitions.length; s++) {
          var t = e.definitions[s];
          if (t.name && t.name.value == a) return t
        }
      }

      function i(e, a) {
        var s = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var i = t[a] || new Set,
          c = new Set,
          n = new Set;
        for (i.forEach((function(e) {
            n.add(e)
          })); n.size > 0;) {
          var o = n;
          n = new Set, o.forEach((function(e) {
            c.has(e) || (c.add(e), (t[e] || new Set).forEach((function(e) {
              n.add(e)
            })))
          }))
        }
        return c.forEach((function(a) {
          var t = r(e, a);
          t && s.definitions.push(t)
        })), s
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), t[e.name.value] = a
        }
      })), e.exports = a, e.exports.UserGetVote = i(a, "UserGetVote"), e.exports.UserCastVote = i(a, "UserCastVote")
    },
    55492: (e, a, s) => {
      var t = {
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
      t.loc.source = {
        body: '#import "@rockstargames/graph-client/operations/fragments/newswire-post.graphql"\n#import "@rockstargames/graph-client/operations/fragments/paging.graphql"\n\nquery NewswireList(\n    $locale: String!\n    $page: Int!\n    $tagId: Int\n    $metaUrl: String!\n    $cache: Boolean = true\n) {\n    meta: metaUrl(url: $metaUrl, domain: "www", locale: $locale) {\n        title\n    }\n    posts(page: $page, tagId: $tagId, locale: $locale) {\n        paging {\n            ...paging\n        }\n        results {\n            ...postFields\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var r = {};

      function i(e) {
        return e.filter((function(e) {
          if ("FragmentDefinition" !== e.kind) return !0;
          var a = e.name.value;
          return !r[a] && (r[a] = !0, !0)
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
      t.definitions = t.definitions.concat(i(s(73784).definitions)), t.definitions = t.definitions.concat(i(s(28540).definitions));
      var n = {};

      function o(e, a) {
        for (var s = 0; s < e.definitions.length; s++) {
          var t = e.definitions[s];
          if (t.name && t.name.value == a) return t
        }
      }
      t.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          c(e, a), n[e.name.value] = a
        }
      })), e.exports = t, e.exports.NewswireList = function(e, a) {
        var s = {
          kind: e.kind,
          definitions: [o(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var t = n[a] || new Set,
          r = new Set,
          i = new Set;
        for (t.forEach((function(e) {
            i.add(e)
          })); i.size > 0;) {
          var c = i;
          i = new Set, c.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              i.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var t = o(e, a);
          t && s.definitions.push(t)
        })), s
      }(t, "NewswireList")
    },
    13892: (e, a, s) => {
      var t = {
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

      function r(e) {
        var a = i(e);
        return s(a)
      }

      function i(e) {
        if (!s.o(t, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return t[e]
      }
      r.keys = function() {
        return Object.keys(t)
      }, r.resolve = i, e.exports = r, r.id = 13892
    },
    52884: (e, a, s) => {
      var t = {
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

      function r(e) {
        var a = i(e);
        return s(a)
      }

      function i(e) {
        if (!s.o(t, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return t[e]
      }
      r.keys = function() {
        return Object.keys(t)
      }, r.resolve = i, e.exports = r, r.id = 52884
    },
    7e4: (e, a, s) => {
      var t = {
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

      function r(e) {
        var a = i(e);
        return s(a)
      }

      function i(e) {
        if (!s.o(t, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return t[e]
      }
      r.keys = function() {
        return Object.keys(t)
      }, r.resolve = i, e.exports = r, r.id = 7e4
    },
    6572: (e, a, s) => {
      var t = {
        "./bounty.png": 30752,
        "./collector.png": 40056,
        "./moonshiner.png": 41444,
        "./naturalist.png": 73268,
        "./trader.png": 74688
      };

      function r(e) {
        var a = i(e);
        return s(a)
      }

      function i(e) {
        if (!s.o(t, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return t[e]
      }
      r.keys = function() {
        return Object.keys(t)
      }, r.resolve = i, e.exports = r, r.id = 6572
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
//# sourceMappingURL=bdf80c76ccabb5653311e7517369285c.js.map