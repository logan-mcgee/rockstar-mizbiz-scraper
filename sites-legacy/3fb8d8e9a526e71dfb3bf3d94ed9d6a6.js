! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "8b829c29-cae1-43b0-8ee0-5de8f62e400a", e._sentryDebugIdIdentifier = "sentry-dbid-8b829c29-cae1-43b0-8ee0-5de8f62e400a")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "692b6956abd6177da3ac6da14c81527e5159ed6d",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "692b6956abd6177da3ac6da14c81527e5159ed6d"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [952], {
    74668: (e, a, s) => {
      "use strict";
      s.r(a), s.d(a, {
        A: () => u,
        AudioPlayer: () => N,
        Badge: () => w,
        Brands: () => j,
        Button: () => C,
        ButtonGroup: () => B,
        CalloutSection: () => J,
        Carousel: () => A,
        ConditionalBlock: () => H,
        CookieAB: () => ie,
        CountryInputField: () => te,
        Cta: () => fe,
        DescriptionArea: () => Te,
        DiscountsBadge: () => Pe,
        DotLoader: () => Ve,
        Dropdown: () => Ae,
        Embed: () => Ue,
        ExpandingPlatformButton: () => Ze,
        FadeInContent: () => ea,
        GameCard: () => t,
        GameSiteHeader: () => ca,
        Gen9Button: () => E,
        Gen9CoreCarousel: () => da,
        Grid: () => Oe,
        HTMLElement: () => ya,
        Hero: () => ba,
        HookStore: () => R,
        ImageWithBadge: () => La,
        LanguageSelector: () => Sa,
        LayeredImage: () => Ta,
        LoadingAnimation: () => yi,
        MultiSourceImage: () => ve,
        NewswireBlocks: () => Ga,
        NewswireCard: () => $a,
        NewswireList: () => Fa,
        NewswireRelated: () => Ra,
        NewswireTag: () => za,
        OrderedList: () => qa,
        PackList: () => as,
        PackListMenu: () => us,
        Paging: () => ks,
        ParallaxCacheBuster: () => vs,
        ParallaxInnerLayer: () => xs,
        ParallaxOuterLayer: () => ws,
        ParallaxWrapper: () => ys,
        ProfileSwitcher: () => i,
        PromoModule: () => dt,
        Rating: () => ut,
        ResponsiveFlexBox: () => pt,
        ResponsiveFlexItem: () => bt,
        ResponsiveGridBox: () => ht,
        ResponsiveGridItem: () => xt,
        ResponsiveImg: () => wt,
        ResponsiveSection: () => St,
        RockstarLogo: () => Ct,
        ScrollToTop: () => It,
        ScrollTracker: () => Tt,
        SearchBox: () => Mt,
        Separator: () => Se,
        Skeleton: () => Et,
        SrcsetImage: () => Ba,
        TextFit: () => Le,
        ThumbsGallery: () => Ft,
        TinaModuleFetchNRender: () => Ut,
        TinaWrapper: () => Gt,
        TrackList: () => Vt,
        UnorderedList: () => we,
        UserVote: () => qt,
        VideoCard: () => c,
        VideoCarousel: () => Kt,
        VideoList: () => Zt,
        Wasted: () => Jt,
        framer: () => n,
        useTinaModuleFetchByIds: () => Rt,
        withSearchbarErrorBoundary: () => ii,
        withSimpleErrorBoundary: () => la
      });
      var t = {};
      s.r(t), s.d(t, {
        Art: () => sa,
        Link: () => ta
      });
      var i = {};
      s.r(i), s.d(i, {
        CharacterCard: () => Ts,
        Menu: () => ct,
        MenuButton: () => lt
      });
      var c = {};
      s.r(c), s.d(c, {
        Art: () => ai,
        Link: () => si
      });
      var r = {};
      s.r(r), s.d(r, {
        getVariant: () => pi,
        transitions: () => ui,
        variants: () => _i
      });
      var n = {};
      s.r(n), s.d(n, {
        Animations: () => r,
        LiteMotion: () => ci,
        withFadeIn: () => oi,
        withFadeUp: () => fi
      });
      var l = s(51664),
        o = s(41272);
      const d = (0, o.defineMessages)({
        aria_label_open_new_window: {
          id: "aria_label_open_new_window",
          defaultMessage: "(Opens in a new window)"
        }
      });
      var m = s(57013);
      const g = "rockstargames-sites-legacyff481c537a56a6fcdb1be85dfbc8944e";
      var f = s(95240);
      const u = e => {
        let {
          children: a,
          to: s = "#",
          alt: t = "",
          autoBlank: i = !1,
          onClick: c = (() => {}),
          ...r
        } = e;
        const n = (0, o.useIntl)(),
          l = !/^(https?|mailto):/i.test(s),
          u = /^#/.test(s),
          _ = r?.target ?? (i ? "_blank" : "_self");
        let {
          t: p,
          ...k
        } = r, b = "";
        if ("aria-label" in k && k["aria-label"] && (b = "_blank" === _ ? `${k["aria-label"]} ${n.formatMessage(d.aria_label_open_new_window)}` : k["aria-label"]), u) {
          const e = e => {
            e.preventDefault(), document?.querySelector(`[id='${s.replace("#","")}']`)?.scrollIntoView({
              behavior: "smooth",
              block: "center"
            }), c && c(e)
          };
          return (0, f.jsxs)("a", {
            title: t,
            href: s,
            onClick: e,
            ...k,
            "aria-label": b,
            children: [a, "_blank" === _ && !b && (0, f.jsx)("span", {
              className: g,
              children: n.formatMessage(d.aria_label_open_new_window)
            })]
          })
        }
        if (l) return (0, f.jsxs)(m.NavLink, {
          title: t,
          to: s,
          onClick: e => c(e),
          ...k,
          "aria-label": b,
          children: [a, "_blank" === _ && !b && (0, f.jsx)("span", {
            className: g,
            children: n.formatMessage(d.aria_label_open_new_window)
          })]
        });
        const v = Object.keys(k).filter((e => !["activeClassName", "key", "end"].includes(e))).reduce(((e, a) => ({
          ...e,
          [a]: r[a]
        })), {});
        return "function" == typeof v?.className && delete v.className, (0, f.jsxs)("a", {
          href: s,
          title: t,
          onClick: e => c(e),
          target: _,
          ...v,
          "aria-label": b,
          children: [a, "_blank" === _ && !b && (0, f.jsx)("span", {
            className: g,
            children: n.formatMessage(d.aria_label_open_new_window)
          })]
        })
      };
      var _ = s(65772),
        p = s.n(_),
        k = s(33052),
        b = s(90048);
      const v = {
          player: "rockstargames-sites-legacybb43df423657efcc0f1f38630a24e5e8",
          fixedToBottom: "rockstargames-sites-legacye1f497e3ec34c2fd721b124969e27dd5",
          tracksOpen: "rockstargames-sites-legacye8f2736f0ae21a56045104071a7a9fd7",
          tracks: "rockstargames-sites-legacyea84096a931648765b1db46f708f70aa",
          iconBurger: "rockstargames-sites-legacyb91aad66a2102668715c5ddaaecede2e",
          trackList: "rockstargames-sites-legacyc44536ca7b7fa7236e86c65ae309057e",
          trackActive: "rockstargames-sites-legacyac7826f934fc777f58017b1a5752419a",
          trackTitle: "rockstargames-sites-legacyaafc522e642572d5ff93c7408b941829",
          trackIndex: "rockstargames-sites-legacyb880baa4707c71eb543f905816d8e952",
          controls: "rockstargames-sites-legacyff92c8eddfc0a0fa7bc7f444973e4f28",
          controlsCurrentBg: "rockstargames-sites-legacya81d9465f14d65e8e20800d7b25f77d9",
          controlsCurrentBgVisible: "rockstargames-sites-legacyc87bd14d2bbc9248d9c197b77454f345",
          controlsTrack: "rockstargames-sites-legacyc23bf574089d1af93750f6af8ebb489f",
          controlsTrackTitle: "rockstargames-sites-legacye4b77d29e904f9928cca1de93f5c7745",
          controlsTrackAnimating: "rockstargames-sites-legacyba49949a9cd8c22385708f267c625029",
          scrollText: "rockstargames-sites-legacyfd9c80e5afaa1ed38ce85f2c3d70eae4",
          controlsTrackArtist: "rockstargames-sites-legacyc93c1e5399d9fd5e96ca246fdbfb307b",
          controlsTrackBurger: "rockstargames-sites-legacyb4e1a16e3460b40c1aacd92afe219856",
          controlsButtons: "rockstargames-sites-legacyd136125994c1d0db1449fce51af559ca",
          controlsScrub: "rockstargames-sites-legacyd3d935648408f71928bd49d2f7c5a9ff",
          controlsPlayPause: "rockstargames-sites-legacyf5de7526c8cee98bdd7363fd7f2cf8ae",
          controlsPlayPausePlaying: "rockstargames-sites-legacyefb6194f0df966e6c8c759937d2fb826",
          controlsNextTrack: "rockstargames-sites-legacyf286e0ce01c5401e56dd579b076f1aae",
          controlsPrevTrack: "rockstargames-sites-legacya56bb7cb4b0e2de481777d1f09c3f2f2",
          controlsScrubTrack: "rockstargames-sites-legacyb8f38f45353fa54fcb6f9e2a3d0d5a85"
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
        y = e => {
          let {
            timing: a = {
              current: 0,
              duration: 0
            },
            playing: s,
            audioRef: t,
            setPlaying: i,
            tracksOpen: c,
            setTracksOpen: r,
            trackData: n,
            setTrackId: o,
            trackBounds: d,
            setAutoNext: m
          } = e;
          const g = (0, l.useRef)(null),
            u = (0, l.useRef)(null),
            _ = (0, l.useRef)(null),
            [k, b] = (0, l.useState)(null),
            [h, y] = (0, l.useState)(!1),
            x = e => {
              const a = new Date(1e3 * e),
                s = a.getUTCMinutes(),
                t = a.getSeconds();
              return `${s.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`
            };
          return (0, l.useEffect)((() => {
            if (!u.current || !_.current) return;
            const e = () => {
              _.current && u.current && b(_.current.clientWidth > u.current.clientWidth)
            };
            return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e)
          }), [_, u, a]), (0, l.useEffect)((() => {
            if (!g.current || !a?.duration) return;
            let e = null;
            const s = new(p())(g.current),
              i = e => {
                if (g.current) {
                  const s = g.current.clientWidth;
                  if (!g.current.contains(e.srcEvent.target)) return;
                  const i = Math.max(0, e.srcEvent.offsetX),
                    c = Number(i / s * a.duration);
                  t.currentTime = c
                }
              },
              c = () => {
                e ? t.pause() : t.play()
              },
              r = () => {
                e = t.paused, t.pause()
              };
            return s.on("panstart", r), s.on("panleft", i), s.on("panright", i), s.on("panend", c), s.on("tap", i), () => {
              s.off("panstart", r), s.off("panleft", i), s.off("panright", i), s.off("panend", c), s.off("tap", i)
            }
          }), [g.current, a.duration]), (0, l.useEffect)((() => {
            const e = Number(t?.currentTime);
            (s || !isNaN(e) && 0 !== e) && y(!0)
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
                className: [v.controlsTrackTitle, k ? v.controlsTrackAnimating : ""].join(" "),
                ref: _,
                children: n.title
              })
            }), (0, f.jsxs)("div", {
              className: v.controlsButtons,
              children: [(0, f.jsx)("div", {
                className: v.controlsPrevTrack,
                onClick: () => {
                  d && (o(d[0]), m(!0), i(!0))
                }
              }), (0, f.jsx)("div", {
                className: [v.controlsPlayPause, s ? v.controlsPlayPausePlaying : ""].join(" "),
                onClick: () => {
                  i(!s)
                }
              }), (0, f.jsx)("div", {
                className: v.controlsNextTrack,
                onClick: () => {
                  d && (o(d[1]), m(!0), i(!0))
                }
              })]
            }), (0, f.jsx)("div", {
              active: c ? "" : null,
              className: v.controlsTrackBurger,
              children: (0, f.jsx)("div", {
                className: v.iconBurger,
                onClick: () => {
                  r(!c)
                }
              })
            }), (0, f.jsxs)("div", {
              className: v.controlsScrub,
              children: [(0, f.jsx)("span", {
                children: x(a.current)
              }), (0, f.jsx)("div", {
                className: v.controlsScrubTrack,
                ref: g
              }), (0, f.jsx)("span", {
                children: x(a.duration)
              })]
            })]
          })
        },
        x = e => {
          let {
            tracks: a,
            trackId: s,
            setTrackId: t,
            tracksOpen: i,
            setTracksOpen: c,
            setPlaying: r,
            setAutoNext: n
          } = e;
          return (0, f.jsxs)("div", {
            className: v.tracks,
            children: [(0, f.jsx)("h4", {
              children: "Tracks"
            }), (0, f.jsx)("div", {
              className: v.trackBurger,
              onClick: () => {
                c(!i)
              }
            }), (0, f.jsx)("div", {
              className: v.trackList,
              children: a.map(((e, a) => (0, f.jsxs)("a", {
                style: {
                  "--highlight-color": e.color
                },
                className: s === e.id ? v.trackActive : "",
                onClick: () => {
                  t(e.id), r(!0), n(!0)
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
          } = (0, k.useQuery)(b.GetAudioAlbum, {
            variables: {
              id: a
            }
          }), [i, c] = (0, l.useState)(), [r, n] = (0, l.useState)(), [o, d] = (0, l.useState)(), [m, g] = (0, l.useState)(!1), [u, _] = (0, l.useState)(!1), [p, N] = (0, l.useState)(new HTMLAudioElement), [w, j] = (0, l.useState)({
            current: 0,
            duration: 0
          }), [S, C] = (0, l.useState)(!0);
          return (0, l.useEffect)((() => {
            const e = "audio",
              a = a => {
                a?.data?.rockstarAudioPlayerPlayTrackId && (n(a.data.rockstarAudioPlayerPlayTrackId), C(!1), _(!0)), u && a?.data?.attentionBlurredElsewhere && a?.data?.from !== e && _(!1)
              };
            return u && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: e
            }), window.addEventListener("message", a, !1), () => window.removeEventListener("message", a, !1)
          }), [u]), (0, l.useEffect)((() => {
            if (!p) return;
            const e = () => {
                isNaN(p.duration) || j({
                  duration: p?.duration ?? 0,
                  current: p?.currentTime ?? 0
                })
              },
              a = () => {
                S && i && n(i[1])
              };
            return p.addEventListener("loadedmetadata", e), p.addEventListener("timeupdate", e), p.addEventListener("ended", a), () => {
              p.removeEventListener("loadedmetadata", e), p.removeEventListener("timeupdate", e), p.removeEventListener("ended", a)
            }
          }), [p, i, S]), (0, l.useEffect)((() => {
            u && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: "audio"
            })
          }), [u]), (0, l.useEffect)((() => {
            p && (u ? p.play() : p.pause(), g(!1))
          }), [u, p, o?.id]), (0, l.useEffect)((() => {
            if (!r) return;
            const {
              tracks: e
            } = t.audioAlbum, a = t.audioAlbum.tracks.findIndex((e => e.id === r));
            c([e[a - 1]?.id ?? e[e.length - 1].id, e[a + 1]?.id ?? e[0].id]), d(e[a])
          }), [r]), (0, l.useEffect)((() => {
            t && n(t.audioAlbum.tracks[0].id)
          }), [t]), o ? (0, f.jsxs)("div", {
            className: [v.player, v[s], m ? v.tracksOpen : ""].join(" "),
            children: [(0, f.jsx)("audio", {
              ref: e => {
                N(e)
              },
              src: o.mp3_src
            }), (0, f.jsx)(x, {
              tracks: t.audioAlbum.tracks,
              setTrackId: n,
              trackId: r,
              tracksOpen: m,
              setTracksOpen: g,
              setPlaying: _,
              setAutoNext: C
            }), (0, f.jsx)(h, {
              src: o.cover_src
            }), (0, f.jsx)(y, {
              setTrackId: n,
              trackBounds: i,
              tracksOpen: m,
              setTracksOpen: g,
              playing: u,
              setPlaying: _,
              timing: w,
              trackData: o,
              audioRef: p,
              setAutoNext: C
            })]
          }) : null
        },
        w = e => {
          let {
            text: a,
            style: s
          } = e;
          return (0, f.jsx)("div", {
            className: "rockstargames-sites-legacyb61bd7f274fd6d93c4bf33a9284b6b67",
            style: s,
            children: a
          })
        },
        j = e => {
          let {
            brands: a = []
          } = e;
          return a.length ? (0, f.jsx)("div", {
            className: "rockstargames-sites-legacycde08e212f23b312d5afca7f2ea1105c",
            children: a.map(((e, a) => {
              let {
                brand: s
              } = e;
              return (0, f.jsx)("div", {
                className: "rockstargames-sites-legacyc894fe869384587702b5370da072be86",
                "data-brand": s
              }, a)
            }))
          }) : null
        },
        S = {
          button: "rockstargames-sites-legacye056494c33cff1fe89431f279fdb6b9a",
          secondary: "rockstargames-sites-legacyd340cf27f380a4347994e59544432eb3"
        },
        C = e => {
          let {
            className: a = "",
            children: s,
            context: t = "",
            to: i,
            onClick: c,
            ...r
          } = e;
          const n = [S.button, S[t], a].join(" ");
          return i ? (0, f.jsx)(u, {
            ...r,
            to: i,
            className: n,
            onClick: c ? () => c() : () => {},
            children: s
          }) : (0, f.jsx)("button", {
            ...r,
            type: "button",
            className: n,
            onClick: c ? () => c() : () => {},
            children: s
          })
        };
      var I = s(1740);
      const T = {
          pillBtn: "rockstargames-sites-legacyb59962d0e68ccd73b5ee2e571528d469",
          selected: "rockstargames-sites-legacyf5c57dad202e0d6ff855d5a4aca2c804",
          plusButton: "rockstargames-sites-legacycffaf489342637258d28f9b3b718836a",
          small: "rockstargames-sites-legacyb8abf927f0ba0af0d8ac0e9c77690d34",
          btnText: "rockstargames-sites-legacye6e56461bfc2e426c4abc5451cd17284",
          btnTexticon: "rockstargames-sites-legacycef9f9ce913d167a1fe2e7118a407cdd",
          whiteBtn: "rockstargames-sites-legacyb257e0629b9f8e101791d7a948ed15be",
          blackBtn: "rockstargames-sites-legacycb03bccaee79394858682d2ce4d08253",
          transparentBtn: "rockstargames-sites-legacyd0460159a17533d4d23686d7dca76794",
          iconBtn: "rockstargames-sites-legacyac61186c3c22346c9a4ee2cd2820d341",
          link: "rockstargames-sites-legacyc5920e56149b82f20f4db2ad9d397495",
          xboxone: "rockstargames-sites-legacya7057f2e6d398341f57bc462716d0508",
          xboxseriesxs: "rockstargames-sites-legacya693ab5879f34d7dea1737d3172ed4e4",
          ps4: "rockstargames-sites-legacya029ff88fc9aef470aaeef8053f90436",
          ps5: "rockstargames-sites-legacye25638751cf3e7267db23c6a401fcc36",
          pc: "rockstargames-sites-legacye03d92653f19a7ae3c4b3d5137bc9909"
        },
        M = e => {
          let {
            children: a,
            className: s,
            onClick: t,
            style: i
          } = e;
          return (0, f.jsx)("button", {
            className: s,
            onClick: t ? () => t() : () => {},
            style: i,
            type: "button",
            children: a
          })
        },
        L = e => {
          let {
            children: a,
            className: s,
            onClick: t,
            style: i,
            to: c
          } = e;
          return (0, f.jsx)(m.NavLink, {
            className: s,
            onClick: t ? () => t() : () => {},
            style: i,
            to: c,
            children: a
          })
        },
        E = e => {
          let {
            btnColor: a = "#fff",
            className: s = "",
            consoleBtn: t,
            icon: i = "",
            img: c,
            labelColor: r = "#000",
            onClick: n,
            secondText: l,
            size: o,
            text: d,
            to: m,
            type: g = ""
          } = e;
          const u = [T.plusButton, T[g] ?? "", T[o] ?? "", T[t] ?? "", s].join(" "),
            _ = {
              "--hvr-color": a ?? r,
              "--hvr-bg-color": r ?? a,
              "--hvr-border-color": a ?? r
            },
            p = (0, f.jsxs)(f.Fragment, {
              children: [c ? (0, f.jsx)("img", {
                src: c,
                alt: ""
              }) : "", (0, f.jsxs)("div", {
                className: T.btnText,
                icon: i,
                children: [d, l ? (0, f.jsx)("span", {
                  children: l
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
                  children: p
                })
              })
            }
            return (0, f.jsx)(L, {
              className: u,
              onClick: n ? () => n() : () => {},
              style: _,
              to: m,
              children: p
            })
          }
          return (0, f.jsx)(M, {
            className: u,
            onClick: n ? () => n() : () => {},
            style: _,
            children: p
          })
        },
        B = e => {
          let {
            buttons: a = [],
            className: s
          } = e;
          return a.length ? (0, f.jsx)("div", {
            className: (0, I.classList)("rockstargames-sites-legacyb411a36e7fd12ab75861fe560b31b206", s),
            children: a.map(((e, a) => {
              let {
                icon: s,
                title: t,
                to: i
              } = e;
              return t ? (0, f.jsx)(E, {
                icon: s,
                text: t,
                to: i
              }, a) : ""
            }))
          }) : null
        };
      var P = s(48111),
        z = s(12231);
      const V = {
          deprecatedCarousel: "rockstargames-sites-legacyeb5df7b3d51dffc4d993ca7abce4e944",
          "swiper-scrollbar-disabled": "rockstargames-sites-legacyeb2dda6769a7c20a31e7996ff62e41f8",
          "swiper-horizontal": "rockstargames-sites-legacyb11093de3cb4f18ea2d59b8d4d1db44c",
          "swiper-vertical": "rockstargames-sites-legacyfa3209fdf995734a1aeeac2cc72cc1ea",
          renderedWithChildren: "rockstargames-sites-legacyc9f15e74b3166cd0db40501fcc70e868",
          panorama: "rockstargames-sites-legacyf2a7e77af5dff445e978fd575a567508",
          img: "rockstargames-sites-legacyf1d3d54c266a20fa0cbe9c342b0d98da",
          hideMobile: "rockstargames-sites-legacye70d5eaa273e4a0a40ee62a308491810",
          hideLarge: "rockstargames-sites-legacybace2af6c822ba7b36b53923629cba0f",
          imageAreaBg: "rockstargames-sites-legacyf4bb071e6dad07c75b78ea21269ca662",
          infinite_false: "rockstargames-sites-legacyd6c3d175b843462bf23a1a1f3af6b095",
          track: "rockstargames-sites-legacyb5ff781c4a96bf031e8e7f5e0c9af395",
          perico: "rockstargames-sites-legacybb97d296d17b7e801c6c0719a79463dd",
          dotsSlide: "rockstargames-sites-legacydd55a6f93254ed13542089c6f36e0048",
          siblings: "rockstargames-sites-legacya59cf4385528c371a13be9962b67131b",
          active: "rockstargames-sites-legacyaa5e195e0c7c6336929553314d52a896",
          "swiper-preloader-spin": "rockstargames-sites-legacyc05cc0faa8239c85cdc7d53c7e120e8e"
        },
        $ = e => {
          let {
            item: a
          } = e;
          return (0, f.jsxs)("div", {
            children: [(0, f.jsx)(La, {
              image: a?.image,
              badge: a?.badge ?? a?.image?.badge,
              badgeType: "badge3",
              role: a?.role ?? a?.image?.role,
              splitter: a?.splitter ?? a?.image?.splitter,
              type: a?.type,
              ariaLabel: a?.image?.ariaLabel ?? a.description,
              style: a?.style,
              className: (0, I.classList)(V.img, a?.className)
            }), (a?.title || a?.description) && (0, f.jsx)(Te, {
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
            noInfiniteScroll: i = !1,
            className: c = "",
            renderTemplate: r = "standard",
            text: n,
            customSpaceBetween: o = null,
            centerSlides: d = !0,
            centeredSlidesBounds: m = !1
          } = e;
          const [g, u] = (0, l.useState)(0), _ = (0, l.useMemo)((() => a && Array.isArray(a) ? a.map((() => (0, z.c)())) : null), [a]);
          if (!(s && 0 !== s?.length || a)) return null;
          const p = {
            0: {
              spaceBetween: o ?? 16
            },
            1024: {
              spaceBetween: o ?? 18
            },
            1920: {
              spaceBetween: o ?? 20
            },
            2560: {
              spaceBetween: o ?? 22
            }
          };
          return (0, f.jsxs)("div", {
            className: (0, I.classList)(V.deprecatedCarousel, V[r], V[`infinite_${!i}`], a ? V.renderedWithChildren : "", c),
            style: t,
            children: [(0, f.jsxs)(P.wx, {
              loop: !i,
              grabCursor: !0,
              centeredSlides: d,
              centerInsufficientSlides: d,
              slidesPerView: "auto",
              speed: 700,
              breakpoints: p,
              onUpdate: () => u(0),
              onActiveIndexChange: e => u(e?.realIndex ?? 0),
              centeredSlidesBounds: m,
              children: [(0, f.jsx)("div", {
                className: V.trackWrapper,
                children: (0, f.jsxs)("div", {
                  className: V.track,
                  children: [s?.map((e => (0, f.jsx)(P.Ky, {
                    children: (0, f.jsx)($, {
                      item: e
                    })
                  }, e.key))), a && a?.map(((e, a) => e && (0, f.jsx)(P.Ky, {
                    children: e
                  }, _ && _[a])))]
                })
              }), (0, f.jsx)(D, {
                current: g,
                total: a ? a.length : s.length
              })]
            }), (n?.title || n?.description) && (0, f.jsx)(Te, {
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
          const [t, i] = (0, l.useState)(!1), c = (e => {
            const [a] = (0, m.useSearchParams)(), [s, t] = (0, l.useState)(null), i = (0, O.useRockstarUser)(), {
              loggedIn: c
            } = i, {
              currentCharId: r
            } = (0, O.useRockstarUserState)(), n = function(e) {
              let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "gtao";
              return (0, l.useMemo)((() => {
                const t = e?.data?.characters?.[s];
                return "1" === (t?.[a]?.stats?.overview?.hasGtaPlus?.value ?? "0")
              }), [e, s, a])
            }(i, r);
            return (0, l.useEffect)((() => {
              const s = "true" === a.get("conditionPreview");
              if (!e?.length > 0) return;
              R.applyFilters("preview_conditions", e);
              const i = [];
              return e.forEach((e => {
                const {
                  value: t
                } = e;
                if (s) return "true" === a.get(t) ? (i.push(!0), !0) : (i.push(!1), !1);
                if (U(i)) return !1;
                switch (t) {
                  case "user:is:loggedIn":
                    i.push(!0 === c);
                    break;
                  case "user:not:loggedIn":
                    i.push(!1 === c);
                    break;
                  case "user:is:gtaPlus":
                    i.push(!0 === n);
                    break;
                  case "user:not:gtaPlus":
                    i.push(!1 === n);
                    break;
                  default:
                    i.push(!1)
                }
                return null
              })), t(!U(i)), () => {}
            }), [a, e, n, i, c]), s
          })(a);
          return (0, l.useEffect)((() => {
            i(c)
          }), [c]), (0, l.useMemo)((() => t ? s : null), [t])
        },
        H = (0, F.withTranslations)((e => {
          let {
            children: a
          } = e;
          return l.Children.map(l.Children.toArray(a), (e => (0, f.jsx)(G, {
            ...e?.props
          })))
        }));
      var W = s(60380),
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
          pillBtn: "rockstargames-sites-legacye3158363419b66e5afa2264e4928890c",
          selected: "rockstargames-sites-legacya9649249223f164eff11174ffc72616b",
          calloutContainer: "rockstargames-sites-legacye6bd244761fdf3ebe3888539d9942921",
          calloutSection: "rockstargames-sites-legacyb1b8c93299158ef7d0f9eb04e14a7a64",
          calloutHeaders: "rockstargames-sites-legacyc81810436a5b57307c41f4d7a704b2f7",
          calloutHeaderMargins: "rockstargames-sites-legacyb4e1f72dfa9b38f23017e5f8ef48b9cb",
          calloutHeader: "rockstargames-sites-legacyb7964754215256201dd703aedca18b6f",
          calloutSubheader: "rockstargames-sites-legacyac660fa7995007ed875e03a257e447d7",
          calloutVoteForm: "rockstargames-sites-legacybee0795a36dd5adf822e1e50a7260f3d",
          voteButton: "rockstargames-sites-legacyb1baa545566a61b791b696c9ebf560ad",
          upvote: "rockstargames-sites-legacyb9c17ddd3e1052acb5097909ae2b07a1",
          downvote: "rockstargames-sites-legacyf26b53e66e552183743465cce6a8d3a8",
          active: "rockstargames-sites-legacyd38a1764483a36e8a1509aee5b88ec31",
          calloutButton: "rockstargames-sites-legacyb7eb76afce3c6e686be44c356837b627",
          calloutLink: "rockstargames-sites-legacyaefe6c5a233047c943a864cd56a7de2d",
          calloutLinkIcon: "rockstargames-sites-legacya74bf6baa632ad9b5f87efd2043cfed5",
          actionBlock: "rockstargames-sites-legacycc491ddd715196ecd6ef54017ff05ec0",
          actionFooter: "rockstargames-sites-legacydb26fed58ce50f4affc114670885721a"
        },
        Y = e => {
          let {
            foreign_id: a,
            foreign_type: s
          } = e;
          const {
            track: t
          } = (0, O.useGtmTrack)(), {
            refetch: i
          } = (0, k.useQuery)(q.UserGetVote, {
            skip: !0
          }), [c] = (0, k.useMutation)(q.UserCastVote), [r, n] = (0, l.useState)(null), o = (0, l.useCallback)((e => {
            (async () => {
              if (e === r && null !== r) n(null);
              else {
                n(e), t({
                  event_action: e ? "like" : "dislike",
                  event_category: "cta",
                  event: "cta_" + (e ? "like" : "dislike"),
                  event_label: a
                });
                const i = {
                  foreignId: a,
                  foreignType: s,
                  vote: e
                };
                await c({
                  variables: i
                })
              }
            })()
          }), [a, s, r]);
          return (0, l.useEffect)((() => {
            a && s && (async () => {
              const e = await i({
                foreignId: a,
                foreignType: s
              });
              n(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [a, s]), (0, f.jsxs)("div", {
            className: K.calloutVoteForm,
            children: [(0, f.jsx)("button", {
              "aria-label": "upvote",
              className: [K.upvote, K.voteButton, r ? K.active : ""].join(" "),
              name: "upvote",
              onClick: () => o(!0),
              type: "button"
            }), (0, f.jsx)("button", {
              "aria-label": "downvote",
              className: [K.downvote, K.voteButton, !1 === r ? K.active : ""].join(" "),
              name: "downvote",
              onClick: () => o(!1),
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
            track: i
          } = (0, O.useGtmTrack)();
          return (0, f.jsx)("a", {
            href: s,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, f.jsxs)("button", {
              className: K.calloutLink,
              type: "button",
              onClick: t ? () => i({
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
            trackingData: i
          } = e;
          const {
            track: c
          } = (0, O.useGtmTrack)();
          return (0, f.jsxs)("div", {
            className: K.actionFooter,
            children: [a, s && " ", s && (0, f.jsx)("a", {
              href: t ?? "",
              onClick: () => c({
                ...i
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
            action_text: i,
            link: c,
            foreign_id: r = document.location.pathname,
            foreign_type: n = "url",
            className: o = "",
            actionFooterHelperText: d,
            actionFooterLinkText: m,
            actionFooterLink: g,
            trackingData: u = {},
            actionFooterLinkTrackingData: _ = {},
            t: p,
            ...k
          } = e;
          const {
            loggedIn: b
          } = (0, O.useRockstarUser)(), {
            track: v
          } = (0, O.useGtmTrack)(), h = `${document.location.origin}/auth/sc-auth-login?returnUrl=${window.location.pathname}`, {
            ref: y,
            inView: x
          } = (0, W.useInView)({
            threshold: .6
          }), [N, w] = (0, l.useState)(!1);
          let j;
          if ((0, l.useEffect)((() => {
              x && !N && (v({
                event: "page_section_impression",
                event_action: "impression",
                event_category: "page_section",
                event_label: "callout section",
                element_placement: `callout section - ${k?.sectionName??k?._memoq?.header}`
              }), w(!0))
            }), [x]), !a && !s) return null;
          switch (t) {
            case "vote":
              if (!b) {
                j = (0, f.jsx)(C, {
                  to: h,
                  className: K.calloutButton,
                  onClick: u ? () => v({
                    ...u
                  }) : () => {},
                  children: "Log In"
                });
                break
              }
              j = (0, f.jsx)(Y, {
                foreign_id: r,
                foreign_type: n
              });
              break;
            case "button":
              i && c && (j = (0, f.jsx)(C, {
                to: c,
                className: K.calloutButton,
                onClick: u ? () => v({
                  ...u
                }) : () => {},
                children: i
              }));
              break;
            case "link":
              i && c && (j = (0, f.jsx)(Q, {
                action_text: i,
                link: c,
                trackingData: u
              }));
              break;
            default:
              j = null
          }
          return (0, f.jsx)("div", {
            className: `${K.calloutContainer} ${o||""}`,
            ref: y,
            children: (0, f.jsxs)("div", {
              className: K.calloutSection,
              children: [(0, f.jsxs)("div", {
                className: [K.calloutHeaders, j ? K.calloutHeaderMargins : ""].join(" "),
                children: [a && (0, f.jsx)("h2", {
                  className: K.calloutHeader,
                  children: p(a)
                }), s && (0, f.jsx)("h3", {
                  className: K.calloutSubheader,
                  children: p(s)
                })]
              }), (0, f.jsxs)("div", {
                className: K.actionBlock,
                children: [j, d && (0, f.jsx)(Z, {
                  helperText: d,
                  linkText: m,
                  link: g,
                  trackingData: _
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
            miscProps: i
          } = e;
          const [c, r] = (0, l.useState)(""), n = (0, l.useMemo)((() => se()().getData()), []);
          return (0, f.jsx)(ee.cp, {
            unstyled: !0,
            value: c,
            isMulti: a,
            allowSelectAll: s,
            options: n,
            placeholder: t,
            onChange: e => {
              return a = e?.target?.value, void r(a);
              var a
            },
            classNamePrefix: "country-select",
            ...i
          })
        },
        ie = e => {
          let {
            cookieName: a,
            cookieValue: s,
            trueComponent: t,
            falseComponent: i
          } = e;
          const c = (e => {
              const a = document.cookie.split("; "),
                s = `${e}=`,
                t = a.find((e => e.startsWith(s)));
              return t?.substring(s.length, t.length)
            })(a),
            r = new URLSearchParams(window.location.search).get(a);
          return r && ((e, a) => {
            e && a && (document.cookie = `${e}=${a}; domain=${(()=>{const e=window.location.hostname.split(".");return e.slice(e.length-2).join(".")})()}; path=/;`)
          })(a, r), c === s || r === s ? t : i
        };
      var ce = s(53688),
        re = s(65388),
        ne = s(91232),
        le = s(23124);
      const oe = {
          ps: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1506c5bba61fa270f73c874e3d60a94f.svg",
          ps3: ce,
          ps4: re,
          ps5: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e8f340ded0fd6b0b0d434e8c6c8b75e.svg",
          switch: s(15588),
          xbox: ne,
          xboxone: le,
          xboxseriesxs: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/205366df6706c3b367fb5ff4f26ab7f3.svg",
          xbox360: s(82948),
          pc: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg",
          play: s(43352),
          applestore: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38a6e85fa4a378c5620efa9fde8ff223.svg",
          googleplay: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ca4e52b102306a186549cfd712b1c8f8.svg",
          questionMark: s(85872),
          default: ""
        },
        de = e => oe[e] || null,
        me = {
          cta: "rockstargames-sites-legacybc76de01fdd1260e254c482984d2a924",
          xbox: "rockstargames-sites-legacyf591c5444c08121b0514f0c675da1479",
          xboxone: "rockstargames-sites-legacye5124beff89c5b4093a4029a9fee3367",
          xboxseriesxs: "rockstargames-sites-legacye52c94654eb462a8e65aa7607f5e21b5",
          ps: "rockstargames-sites-legacyc53b78d3d062ee8d58f63a0acb1df137",
          ps4: "rockstargames-sites-legacyf4a27aba1505f555d7cd8c920645245a",
          ps5: "rockstargames-sites-legacyb5826d3700572b9bf36874e34d5c2a22",
          pc: "rockstargames-sites-legacyc7ee0cfc54be00a8b152c47997ce76ac",
          switch: "rockstargames-sites-legacya9b276d1c119e9cd14df54c4459197b0",
          googleplay: "rockstargames-sites-legacya4ccd0de63b104d4aa48c8c3176618f3",
          platformIcon: "rockstargames-sites-legacyc4ab0a89b65025cfe63b851116fb3a32",
          applestore: "rockstargames-sites-legacya13111cbe8acbd75f62da1c53de2c3df",
          btnIcon: "rockstargames-sites-legacycb0ad8d8dd93218dc12091b883767967",
          label: "rockstargames-sites-legacyb81011c72b601075ebe54d7ceaa7d2d8",
          primary: "rockstargames-sites-legacydbcf41d5c23e0eaf5089021f4d41c121",
          btnContent: "rockstargames-sites-legacyf5e832587747dc414e10ab8e0bd843a9",
          icon: "rockstargames-sites-legacyc7a3f1a29594b307606d15e6827f63f9",
          "icon-left": "rockstargames-sites-legacybd623c6039c3f4122936775ed4214bd4",
          "icon-right": "rockstargames-sites-legacyc79040e66c1f48e302291d8cf1335742",
          disabled: "rockstargames-sites-legacyd87326174de12b895401f738a23b177a",
          pillBtn: "rockstargames-sites-legacybf9c11ff862c409ecb412254932a66d0",
          selected: "rockstargames-sites-legacye07887131c72b6346c408895888f4fa7"
        },
        ge = e => {
          let {
            platform: a = ""
          } = e;
          const s = a ? de(a) : null,
            t = s ? (0, f.jsx)("img", {
              className: me.platformIcon,
              src: s,
              alt: "Platform Icon"
            }) : null;
          return (0, f.jsx)("span", {
            className: [me.btnContent, me.platformButton].join(" "),
            children: t
          })
        },
        fe = e => {
          let {
            children: a,
            href: s,
            style: t,
            content: i,
            variant: c = null,
            icon: r,
            iconPosition: n = "none",
            iconStyle: o,
            badge: d,
            badgeStyle: g,
            platformItem: u,
            gtm: _ = {},
            disabled: p,
            className: k
          } = e;
          const {
            track: b
          } = (0, O.useGtmTrack)(), v = (0, F.useDataLayer)(), h = i ?? a, y = `Redirect to ${s}`, x = (0, l.useMemo)((() => {
            const e = window.location.hostname;
            let a;
            try {
              a = new URL(s)?.hostname
            } catch (s) {
              a = e
            }
            return e === a
          }), [s]), N = (0, l.useCallback)((() => {
            p || b({
              event: "cta_other",
              ...v,
              ..._,
              link_url: s ?? void 0,
              text: h ?? void 0
            })
          }), [_, s, v]), w = () => r ? (0, f.jsx)("span", {
            className: [me.icon, `icon-${n}`].join(" "),
            style: o,
            children: (0, f.jsx)("img", {
              className: me.btnIcon,
              src: de(r),
              alt: `${r} icon`
            })
          }) : null;
          return (0, f.jsx)(m.NavLink, {
            to: s,
            target: x ? "_self" : "_blank",
            className: [me.cta, "platform" === c && u ? me[u] : "", p ? me.disabled : "", k].join(" "),
            style: t,
            "data-variant": c,
            onClick: N,
            disabled: p,
            "aria-label": y,
            children: "platform" === c && u ? (0, f.jsx)(ge, {
              platform: u
            }) : (0, f.jsxs)("div", {
              className: me.btnContent,
              children: ["left" === n && w(), (0, f.jsx)("span", {
                children: h
              }), "right" === n && w(), d ? (0, f.jsx)("span", {
                className: me.badge,
                style: g,
                children: d
              }) : null]
            })
          })
        };
      var ue = s(45652);
      const _e = "rockstargames-sites-legacyeb64520e04e486931cd65dc5b3fa61e8",
        pe = "rockstargames-sites-legacycc9a6fdcc84b758d60987ea9a5ddfd81",
        ke = "rockstargames-sites-legacyee609f31f3685766122c2c6fc0ef0710",
        be = e => {
          let {
            alt: a,
            className: t,
            src: i,
            style: c
          } = e;
          const [r, n] = (0, F.usePreloadImg)(i);
          let l = i;
          !1 === r && (t === ke && (l = s(61820)), l = s(43976));
          const {
            width: o,
            height: d
          } = n, m = {
            "--aspect-ratio": Number.isNaN(o / d) ? "" : o / d,
            ...c
          };
          return (0, f.jsx)("img", {
            src: l,
            className: t ?? "",
            alt: a,
            style: m
          })
        },
        ve = e => {
          let {
            className: a,
            style: t = {},
            image: i = {},
            imageStyle: c = {}
          } = e, {
            alt: r,
            src: n
          } = (0, ue.useImageParser)(i);
          return n.desktop || n.mobile || (r = "placeholder", n = {
            mobile: s(61820),
            desktop: s(43976)
          }), (0, f.jsx)("div", {
            className: i.frame ? `${i.frame} ${_e}` : _e,
            style: t,
            children: n?.desktop && n?.mobile ? (0, f.jsxs)(f.Fragment, {
              children: [(0, f.jsx)(be, {
                style: {
                  ...c,
                  ...i?.style
                },
                src: n.desktop,
                alt: r,
                className: a ? `${a} ${pe}` : pe
              }), (0, f.jsx)(be, {
                style: {
                  ...c,
                  ...i?.style
                },
                src: n.mobile,
                alt: r,
                className: a ? `${a} ${ke}` : ke
              })]
            }) : (0, f.jsx)(be, {
              style: {
                ...c,
                ...i?.style
              },
              src: n?.desktop ?? n?.mobile,
              alt: r,
              className: a
            })
          })
        };
      var he = s(8560),
        ye = s.n(he);
      const xe = {
          grid: "rockstargames-sites-legacyac295ed5b9cb441ed17843b34e83ea17",
          itemList: "rockstargames-sites-legacycaf5589ddeca00ed09213e547674b1f3",
          gtaplus: "rockstargames-sites-legacyb291112adcf994a0f6acadd86f73b78a",
          rdo: "rockstargames-sites-legacyd146e8f862baefb60e91be5aa3c17b6e",
          noImg: "rockstargames-sites-legacyba9b5ae08642b0213a3f04b3db9a9dac",
          gtao: "rockstargames-sites-legacyb6f2bdfd6a1d57b7ce840f7a56cc510b",
          custom: "rockstargames-sites-legacyaf89164a043648d1464686ff13363ee4",
          yellow: "rockstargames-sites-legacyd244b17b74fc46269e8a106a99ab0f87",
          hotPink: "rockstargames-sites-legacyd90b28503318563cfd6059146d1fb6b6",
          red: "rockstargames-sites-legacyc3f8a8706901874d906f94c626be3c1e",
          turquoise: "rockstargames-sites-legacyfe2ec36e92e2bb4d453fdc4b05966418",
          purple: "rockstargames-sites-legacyf5f7baf5b56f5b2ada053a93392bbf7a",
          teal: "rockstargames-sites-legacyf4a229f41cd20f181d810c311416e3f2",
          blue: "rockstargames-sites-legacyf6f689d687bcd482ea2cd2990fd66878",
          green: "rockstargames-sites-legacyab270f1b4d3ad43e7bc51393b7c5c089",
          darkRed: "rockstargames-sites-legacydc24ce78d962f3472b06955bf8855103",
          darkBlue: "rockstargames-sites-legacyb354493baac7389b21b511009f287428",
          goldenrod: "rockstargames-sites-legacye4a078efee11d24c64e93ccf0744a33f",
          skull: "rockstargames-sites-legacyd4581a495de14e6762bb15debe5bb810"
        },
        {
          sanitize: Ne
        } = ye(),
        we = e => {
          let {
            list: a,
            string: s,
            starColor: t,
            style: i,
            className: c,
            game: r,
            noImg: n,
            columns: o,
            mobileColumns: d
          } = e;
          const [m, g] = (0, l.useState)(null), u = s ? s.split("_#_") : a;
          return (0, l.useEffect)((() => {
            g(a)
          }), [a]), s || a ? o && m ? (0, f.jsx)("div", {
            className: xe.grid,
            style: {
              "--unordered-list-grid-column": o,
              "--unordered-list-grid-column-mobile": d ?? o
            },
            children: (0, f.jsx)("ul", {
              style: (0, F.safeStyles)(i),
              className: (0, I.classList)(xe.itemList, xe.noImg, xe[t], xe[r]),
              children: m.map((e => (0, f.jsx)("li", {
                dangerouslySetInnerHTML: {
                  __html: Ne(e.content)
                }
              }, e.content)))
            })
          }) : (0, f.jsx)("ul", {
            style: (0, F.safeStyles)(i),
            className: (0, I.classList)(xe.itemList, xe.custom, n ? xe.noImg : "", t ? xe[t] : "", r ? xe[r] : "", c ?? ""),
            children: u.map((e => (0, f.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: Ne(e?.content ?? e)
              }
            }, e?.content)))
          }) : null
        },
        je = {
          hr: "rockstargames-sites-legacyf5cd418ab2ef6a89df6c95d2caa06ba8",
          redLine: "rockstargames-sites-legacyf8b44ef9bbd3e7feb22bf79cc009b16e",
          gtao: "rockstargames-sites-legacyc442f7264db862a7cca6d9a56dacc205"
        },
        Se = e => {
          let {
            style: a,
            className: s = "",
            type: t
          } = e;
          return (0, f.jsx)("div", {
            style: a,
            className: [je.hr, je[t], s].join(" ")
          })
        },
        Ce = "rockstargames-sites-legacyfa6885b15a718acb24f48949c52e31f1",
        Ie = e => {
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
        Te = e => {
          let {
            item: a,
            className: s = ""
          } = e;
          return (0, f.jsxs)("div", {
            className: (0, I.classList)("rockstargames-sites-legacyef9e6981551ac5ce250ebff8b18d7a29", s),
            children: [a.title && (0, f.jsx)(Ie, {
              to: a?.href ?? a?.to,
              children: (0, f.jsx)("h3", {
                children: a.title
              })
            }), Array.isArray(a?.description?.content) ? a.description.content?.map(((e, a) => e?.unorderedList ? (0, f.jsx)(we, {
              columns: e.unorderedList.columns ?? null,
              style: {
                "--unordered-list-padding": "var(--grid-gap-static-sm)",
                "--unordered-list-margin-bottom": ".5rem"
              },
              noImg: !0,
              list: e.unorderedList.list
            }, a) : e?.image ? (0, f.jsx)(ve, {
              image: e.image,
              className: e?.className,
              ariaLabel: e.image?.ariaLabel
            }, a) : e?.separator ? (0, f.jsx)("div", {
              style: {
                margin: `${e.separator.spacing} 0`
              },
              children: (0, f.jsx)(Se, {})
            }, a) : (0, f.jsx)("p", {
              children: (0, f.jsx)("span", {
                className: Ce,
                dangerouslySetInnerHTML: {
                  __html: e
                }
              })
            }, a))) : (0, f.jsx)("span", {
              className: Ce,
              dangerouslySetInnerHTML: {
                __html: a.description
              }
            })]
          })
        };
      var Me = s(58936);
      const Le = e => {
          let {
            children: a,
            ...s
          } = e;
          const [t, i] = (0, l.useState)(!1);
          return (0, f.jsx)(Me.cR, {
            ...s,
            onReady: () => {
              document.fonts.ready.then((() => {
                i(!0)
              }))
            },
            children: a
          })
        },
        Ee = {
          badge: "rockstargames-sites-legacye279e2cebfa338f34b03fd732416e836",
          badgeSizeUpdate: "rockstargames-sites-legacyd7362a3e27ccaad9d2aadd2f31691340",
          badge2: "rockstargames-sites-legacyd697f4a5f7c876d5e540a96da1e0ca3a",
          badge3: "rockstargames-sites-legacye1bba3cd4554abbb48a030af24bbada5"
        },
        Be = e => {
          let {
            wrapper: a,
            children: s,
            role: t,
            splitter: i
          } = e;
          return i || t ? a(s) : s
        },
        Pe = e => {
          let {
            badge: a,
            badgeType: t,
            role: i,
            splitter: c
          } = e;
          const r = [];
          c ? a.split(c).map(((e, a) => r.push(e))) : r.push(a);
          let n = 100;
          return 2 == r.length && r[1].length < 4 && "off" !== r[1].toLowerCase() && 45, (0, f.jsxs)(Be, {
            splitter: c,
            role: i,
            wrapper: e => (0, f.jsx)("div", {
              className: `${Ee.badge} ${t?Ee[t]:""} `,
              children: e
            }),
            children: [(0, f.jsx)(f.Fragment, {
              children: i && (0, f.jsx)(ve, {
                image: {
                  alt: i,
                  desktop: s(6572)(`./${i}.png`)
                }
              })
            }), (0, f.jsx)(Le, {
              className: `${c||i?"":Ee.badge} ${t?Ee[t]:""}`,
              min: 8,
              max: 1e3,
              mode: c || i ? "single" : "multi",
              children: r[0]
            }), (0, f.jsx)(f.Fragment, {
              children: r.shift() && c && r.length >= 1 && (0, f.jsx)(Le, {
                min: 8,
                max: 1e3,
                mode: "single",
                forceSingleModeWidth: !0,
                children: r.join(" ")
              })
            })]
          }, "badge-wrapper")
        },
        ze = "rockstargames-sites-legacyc63cfb461217f059c8c25eec09602b30",
        Ve = e => {
          let {
            color: a
          } = e;
          return (0, f.jsxs)("div", {
            className: "rockstargames-sites-legacya481f47ab7e8af4042a665fab5aea27c",
            style: {
              "--loader-color": a
            },
            children: [(0, f.jsx)("div", {
              className: ze
            }), (0, f.jsx)("div", {
              className: ze
            }), (0, f.jsx)("div", {
              className: ze
            })]
          })
        };
      var $e = s(94072);
      const De = {
          dropdownWrapper: "rockstargames-sites-legacyb951912c02de0e5e881fedd391d04810",
          items: "rockstargames-sites-legacyb0a8f220641417f889d4fd6039fe6bac",
          open: "rockstargames-sites-legacyf5eb88111734e6e70d34ef2b095c44f6",
          opener: "rockstargames-sites-legacyecb577af64f747d0d39cf03939ee3c73",
          secondary: "rockstargames-sites-legacyb64c3515fcd91f6b84410bd14640da81"
        },
        Ae = e => {
          let {
            children: a,
            className: s,
            title: t
          } = e;
          const [i, c] = (0, l.useState)(!1);
          return (0, f.jsx)($e.cp, {
            disabled: !i,
            children: (0, f.jsxs)("div", {
              className: [De.dropdownWrapper, i ? De.open : "", void 0 !== s ? s : ""].join(" "),
              children: [(0, f.jsx)("button", {
                className: De.opener,
                onClick: () => c(!i),
                children: t
              }), i && (0, f.jsx)("div", {
                className: De.items,
                onClick: () => c(!1),
                children: a
              })]
            })
          })
        };
      var Fe = s(95356);
      const Oe = e => {
          let {
            children: a,
            context: s = null,
            game: t,
            image: i = {},
            style: c = {},
            template: r = null,
            theme: n = null,
            reversedOnMobile: l = !1,
            className: o = "",
            id: d = null
          } = e;
          const m = (0, ue.useImageParser)(i),
            g = {
              ...c
            };
          if (m?.src?.desktop) {
            const e = "var(--grid-background-repeat, no-repeat)",
              a = "var(--grid-background-position, center)/var(--grid-background-size, cover)";
            g.background = `url(${m?.src?.desktop}) ${e} ${a}`
          }
          return (0, f.jsx)("div", {
            id: d,
            className: (0, Fe.classList)("rockstargames-sites-legacyf42b4606ed4a5b16b7647ad7b7eb229d", l ? "rockstargames-sites-legacyb00444166ce6346d7ca364a75a335ecc" : "", o),
            "data-game": "community" === r ? null : t,
            style: (0, F.safeStyles)(g),
            "data-context": s,
            "data-template": r,
            "data-theme": n,
            children: a
          })
        },
        Re = e => {
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
        Ue = e => {
          let {
            componentTitle: a,
            type: s,
            items: t
          } = e;
          return t?.length ? (0, f.jsx)("div", {
            className: "rockstargames-sites-legacyd393ab6eb68d416b116b6281abdb5e14",
            type: s,
            children: (0, f.jsxs)(Oe, {
              children: [a && (0, f.jsx)("h3", {
                children: a
              }), (0, f.jsx)(Oe, {
                className: "rockstargames-sites-legacyed3ee31cb8e357d795886157f95a742a",
                children: t.map(((e, a) => {
                  return e?.embed ? (0, f.jsx)(Re, {
                    caption: e?.caption,
                    children: (0, f.jsx)("div", {
                      className: "rockstargames-sites-legacydcf1c30612026a517f59af64d8703bc4",
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
      var Ge = s(22560);
      const He = {
          type: "spring",
          stiffness: 650,
          damping: 45
        },
        We = {
          ease: "easeOut",
          duration: .9,
          delay: .3
        },
        qe = {
          open: {
            opacity: 0,
            transition: {
              ease: "easeOut",
              duration: .3
            }
          },
          closed: {
            opacity: 1,
            transition: We
          }
        },
        Xe = {
          open: {
            opacity: 1,
            display: "grid",
            height: "auto",
            transition: {
              opacity: We,
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
              height: He
            },
            transitionEnd: {
              display: "none"
            }
          }
        },
        Ke = {
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
            transition: He,
            transitionEnd: {
              "--btn-hover-bg-color": "inherit",
              "--btn-hover-bg-color-noBlur": "inherit",
              "--btn-hover-font-color": "inherit",
              "--btn-hover-border-color": "inherit"
            }
          }
        },
        Ye = {
          pillBtn: "rockstargames-sites-legacyba37d7130b54bd53bd309b0cd04717ff",
          selected: "rockstargames-sites-legacyc9c0bba52c010c4e3571f2702eef944b",
          container: "rockstargames-sites-legacybfcd1a0671c127c9135d8c2feac75c34",
          content: "rockstargames-sites-legacya1cf623c9dd51dd05772a395d8311dac",
          unexpandedButton: "rockstargames-sites-legacyba4683b82274b0f8ca98f97fd2b0a1c9",
          expandedArea: "rockstargames-sites-legacydd25aa78f935c7d4cafdb1c8bc6d7932",
          closeButton: "rockstargames-sites-legacyc559c930e0a5a7caa72b3de9a3362a0a",
          platformButtons: "rockstargames-sites-legacyd6bfc47d3110920d77ea2e70dac9c898",
          platformButton: "rockstargames-sites-legacyb04a9bd68b598682a5dbe99dd1a2f06d",
          xbox: "rockstargames-sites-legacyfe4a687dfc69ef746fcbe4184c7a9574",
          xboxone: "rockstargames-sites-legacyb1f46a1ff640d7398e7736e814a5ed8f",
          xboxseriesxs: "rockstargames-sites-legacye23b6f1412ea1ecb8a616b4f25d2888d",
          ps: "rockstargames-sites-legacye0b107bda3c03c1e82c94195bfbc055b",
          ps4: "rockstargames-sites-legacydcf3078cbde57db42e66e6ba4c269fbe",
          ps5: "rockstargames-sites-legacye047116842d7619f0e04a3c9b6dbec13",
          pc: "rockstargames-sites-legacydaa32798c37b9055cd280b838972e63e",
          switch: "rockstargames-sites-legacyae7bc564778d8af6cf5f8a0491ef7dc8",
          buttonText: "rockstargames-sites-legacyc2fb2fb5ec39a5c3b3c14ee6c0505b53"
        },
        Qe = e => {
          let {
            buttonText: a = "",
            link: t = "",
            platform: i = "",
            target: c = null,
            onClick: r
          } = e;
          const n = c ?? (t.startsWith(document.location.origin) ? "_self" : "_blank"),
            l = [Ye.platformButton, Ye[i]].join(" "),
            o = i ? s(13892)(`./${i}.svg`) : null,
            d = (0, f.jsxs)(f.Fragment, {
              children: [o ? (0, f.jsx)("img", {
                src: o,
                alt: a
              }) : "", !o && (0, f.jsx)("div", {
                className: Ye.buttonText,
                children: a
              })]
            });
          return t.startsWith("http") ? (0, f.jsx)("span", {
            onClick: r,
            onKeyDown: r,
            role: "link",
            tabIndex: 0,
            children: (0, f.jsx)("a", {
              href: t,
              className: l,
              target: n,
              children: d
            })
          }) : (0, f.jsx)(m.NavLink, {
            className: l,
            onClick: r,
            to: t,
            children: d
          })
        },
        Ze = e => {
          let {
            buttonText: a = "Subscribe",
            className: t,
            children: i,
            platformsAndLinks: c = [],
            trackingType: r = "buy",
            trackingParent: n,
            target: o = null,
            trackingOId: d = null
          } = e;
          const [m, g] = (0, l.useState)(!1), {
            track: u
          } = (0, O.useGtmTrack)();
          return (0, f.jsxs)("div", {
            className: (0, I.classList)(Ye.container, t),
            children: [(0, f.jsx)(Ge.motion.div, {
              className: Ye.content,
              animate: m ? "open" : "close",
              variants: qe,
              children: i
            }), (0, f.jsxs)(Ge.motion.div, {
              onClick: () => {
                g(!m), m || u("select_platform" === r ? {
                  event: "select_platform",
                  event_action: "select_platform",
                  event_category: "cta",
                  event_label: n,
                  text: a?.toLowerCase() ?? "subscribe"
                } : "link_account" === r ? {
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
              className: Ye.unexpandedButton,
              animate: m ? "open" : "closed",
              variants: Ke,
              initial: !1,
              children: [(0, f.jsx)(Ge.motion.div, {
                className: Ye.buttonText,
                "data-expanded": m,
                children: "string" == typeof a ? a : "Subscribe"
              }), (0, f.jsxs)(Ge.motion.div, {
                className: Ye.expandedArea,
                animate: m ? "open" : "closed",
                variants: Xe,
                initial: !1,
                children: [(0, f.jsx)("img", {
                  className: Ye.closeButton,
                  onClick: () => g(!1),
                  onKeyDown: e => {
                    g(!1)
                  },
                  src: s(72428),
                  alt: "Close",
                  role: "button"
                }), (0, f.jsx)("div", {
                  className: Ye.platformButtons,
                  children: c.length ? c.map((e => (0, f.jsx)(Qe, {
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
                    target: o
                  }, `${e.key}-${e.href}-${e.platform}`))) : ""
                })]
              })]
            })]
          })
        },
        Je = {
          animateBox: "rockstargames-sites-legacye9374e74c542c1028a2068dfbd1e85a3",
          fadeArea: "rockstargames-sites-legacya63de5cdf9849ac45a0f6b4f7617cfa5",
          visible: "rockstargames-sites-legacyd7458685114194d602f94e2581de0f08",
          barGrow: "rockstargames-sites-legacyb0f4d843b626e3741c9dd38fcb3f56b0",
          bar: "rockstargames-sites-legacya4b99f54f3ce3987765143d8a151360a",
          animateMe: "rockstargames-sites-legacyf9c3869a2a1e10490bdfbcb3ee89d7da"
        },
        ea = e => {
          let {
            children: a,
            style: s
          } = e;
          const t = (0, l.useRef)(null);
          return (0, l.useEffect)((() => {
            new IntersectionObserver((e => {
              e.forEach((e => {
                e.isIntersecting && e.target.classList.add([Je.visible])
              }))
            })).observe(t?.current)
          }), []), (0, f.jsx)("div", {
            style: s,
            className: [Je.fadeArea].join(" "),
            ref: t,
            children: a
          })
        },
        aa = {
          img: "rockstargames-sites-legacye3f505a2281df28eb1acdf2d586e7fbd",
          startAnimation: "rockstargames-sites-legacya27e4d6733cea4a38e469425ef32ed3a"
        },
        sa = e => {
          let {
            imgSrc: a,
            title: s
          } = e;
          const [t] = (0, F.usePreloadImg)(a);
          return (0, f.jsx)("div", {
            role: "img",
            "aria-label": s,
            className: [aa.img, t ? aa.startAnimation : ""].join(" "),
            style: {
              backgroundImage: `url(${a})`
            }
          })
        },
        ta = e => {
          let {
            game: a,
            to: s
          } = e;
          const {
            fob_640: t,
            site_in_rockstar: i = !1,
            title_slug: c
          } = a;
          let r = c;
          "V" === c && (r = "gta-v"), "GTAOnline" === c && (r = "gta-online"), "undeadnightmare" === c && (r = "reddeadredemption");
          const n = s ?? `${i?"":"/games"}/${r}`;
          return (0, f.jsx)(u, {
            "data-gtm-category": "Games",
            "data-gtm-action": "Game Click-through",
            "data-gtm-label": c,
            "data-testid": `${c}-gamecard`,
            to: n,
            target: "_self",
            className: "rockstargames-sites-legacyfded54fb94f7325c5a0b57590585b175",
            children: (0, f.jsx)(sa, {
              imgSrc: t,
              title: a.title
            })
          })
        },
        ia = {
          gameSiteHeader: "rockstargames-sites-legacycb7cada84679a7af263e1436675a518a",
          activeNavItem: "rockstargames-sites-legacyaa4aa7ed96facb38ed09c72eededb418",
          navHidden: "rockstargames-sites-legacyac1cb9d2005f287ed666d334f816f8c5",
          navContent: "rockstargames-sites-legacye5abd79468866e31fdad2780b169f687",
          headerNavOpen: "rockstargames-sites-legacyb98508d0923c5bb442c15772fbad9764",
          headerLogo: "rockstargames-sites-legacye666ff4f0b91dfe78991244ac1a759a5",
          bg: "rockstargames-sites-legacycfc6fd456ca2f3e9db06f780f412660f"
        },
        ca = e => {
          let {
            buttonText: a = null,
            gameOverrideStyles: s,
            navLinks: t,
            cta: i = "",
            game: c
          } = e;
          const [r, n] = (0, l.useState)(!1), o = (0, k.useMutateState)(), {
            navHidden: d
          } = (0, k.useState)();
          return (0, l.useEffect)((() => {
            o({
              gameSiteNavOpen: r
            })
          }), [r]), (0, l.useEffect)((() => {
            const e = () => {
              n(!1)
            };
            return document.addEventListener("click", e), () => document.removeEventListener("click", e)
          }), []), (0, f.jsxs)("header", {
            "data-game": c,
            className: [ia.gameSiteHeader, r ? ia.headerNavOpen : "", d ? ia.navHidden : "", s.gameSiteHeader, r ? s.headerNavOpen : ""].join(" "),
            children: [(0, f.jsx)("button", {
              className: [ia.headerLogo, s.headerLogo].join(" "),
              onClick: e => {
                n(!r), e.nativeEvent.stopImmediatePropagation()
              },
              type: "button",
              "aria-label": "Open Game Site Nav",
              dangerouslySetInnerHTML: {
                __html: a
              }
            }), (0, f.jsx)("div", {
              className: ia.bg
            }), (0, f.jsx)("nav", {
              children: (0, f.jsx)("div", {
                className: ia.navContent,
                children: t
              })
            }), i]
          })
        };
      var ra = s(31403);
      class na extends l.Component {
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
            className: "rockstargames-sites-legacyf903c45f8ecc18bd55f702e202f3763a",
            children: [(0, f.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, f.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      const la = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return function(s) {
            return (0, f.jsx)(na, {
              header: a,
              children: (0, f.jsx)(e, {
                ...s
              })
            })
          }
        },
        oa = e => {
          let {
            prevRef: a,
            nextRef: s,
            onNextClicked: t,
            onPrevClicked: i
          } = e;
          return (0, f.jsxs)("div", {
            className: "rockstargames-sites-legacyd98f432655f19a842390597c4434db06",
            children: [(0, f.jsx)("div", {
              className: "rockstargames-sites-legacyc06ca360ce11f2cef7baf8c5fba05a42",
              ref: a,
              onClick: i,
              "aria-label": "Previous",
              role: "button",
              tabIndex: 0,
              onKeyUp: () => {}
            }), (0, f.jsx)("div", {
              className: "rockstargames-sites-legacya4f98606cdef508fbd2e69c5564a92d8",
              ref: s,
              onClick: t,
              "aria-label": "Next",
              role: "button",
              tabIndex: 0,
              onKeyUp: () => {}
            })]
          })
        },
        da = la((e => {
          let {
            description: a,
            slideChildren: s,
            size: t,
            title: i,
            customSlidesPerView: c = null,
            customSpaceBetween: r = null,
            slideClass: n,
            style: o,
            className: d,
            cardSizeBreakpoints: m = {},
            customAspectRatio: g,
            titleBadge: u
          } = e;
          const {
            track: _
          } = (0, O.useGtmTrack)(), p = (0, l.useRef)(null), k = (0, l.useRef)(null), b = (0, l.useRef)(null), [v, h] = (0, l.useState)(null), [y, x] = (0, l.useState)(!1), [N, w] = (0, l.useState)(null), [j, S] = (0, l.useState)({}), [C, T] = (0, l.useState)(), {
            ref: M,
            inView: L
          } = (0, W.useInView)({
            threshold: .6
          }), [E, B] = (0, l.useState)(!1), [z, V] = (0, l.useState)(null), [$, D] = (0, l.useState)(!1);
          (0, l.useEffect)((() => {
            const e = () => {
              D(window.innerWidth < 1024)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []);
          const A = {
            0: {
              spaceBetween: r ?? 16
            },
            1024: {
              spaceBetween: r ?? 18
            },
            1920: {
              spaceBetween: r ?? 20
            },
            2560: {
              spaceBetween: r ?? 22
            }
          };
          (0, l.useEffect)((() => {
            if (!p.current) return;
            const e = () => {
              if (p.current) {
                const e = c || Number(window.getComputedStyle(p.current).getPropertyValue("--slides-per-view")),
                  a = c ? 1 : Number(window.getComputedStyle(p.current).getPropertyValue("--slides-per-view-multiplier"));
                w(e * a)
              }
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [p, c]), (0, l.useEffect)((() => {
            if (!s) return;
            let e = !1;
            s.forEach((a => {
              "cover-card" === a?.props?.tina?.payload?.meta?.type && (e = !0, V(a))
            })), B(e);
            const a = s.map(((e, a) => "cover-card" === e?.props?.tina?.payload?.meta?.type && $ ? null : (0, f.jsx)(P.Ky, {
              className: "rockstargames-sites-legacyf58e79e329504e170dc9cb4595ea011b",
              onFocus: () => R(a),
              children: e
            }, Symbol(a).toString())));
            h(a)
          }), [s, $]), (0, l.useEffect)((() => {
            T({
              nextEl: b.current,
              prevEl: k.current
            })
          }), [b, k]), (0, l.useEffect)((() => {
            L && !y && s && (_({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: `deck - ${i}`.toLowerCase(),
              element_placement: `deck - ${i}`.toLowerCase()
            }), x(!0))
          }), [L, s]);
          let F = "custom" === t ? {
            "--custom-aspect-ratio": g,
            ...o
          } : {
            ...o
          };
          const R = e => {
            j.slideTo(e)
          };
          return (0, f.jsxs)("div", {
            className: (0, I.classList)("rockstargames-sites-legacyd0c3d91603036c852633939015a6cb48", d),
            "data-size": t,
            "data-sm": m?.sm ? m?.sm : t,
            "data-md": m?.md ? m?.md : t,
            "data-lg": m?.lg ? m?.lg : t,
            "data-xl": m?.xl ? m?.xl : t,
            "data-xxl": m?.xxl ? m?.xxl : t,
            "data-has-covercard": E,
            ref: p,
            style: F,
            children: [(0, f.jsx)("div", {
              className: "rockstargames-sites-legacyddeb75a59ed783554b94e8298897a1fa",
              ref: M
            }), E && $ && (0, f.jsx)("div", {
              className: "rockstargames-sites-legacyd5f00d41fdd2c864a0eb9e069cf08db0",
              children: z
            }), (0, f.jsx)("div", {
              className: "rockstargames-sites-legacycdc60dbde3f8db6f466aba8a3e19fa96",
              children: (0, f.jsxs)("div", {
                className: "rockstargames-sites-legacyfb8e207418c783fc2f53b44c19faedca",
                children: [(0, f.jsxs)("div", {
                  className: "rockstargames-sites-legacyb779ba2045a88302079083935c90f7b3",
                  children: [!E && i && (0, f.jsxs)("div", {
                    className: "rockstargames-sites-legacyedf90c7c5ee1c79049f5a6442f14c949",
                    children: [(0, f.jsx)("h2", {
                      children: i
                    }), u && (0, f.jsx)("span", {
                      className: "rockstargames-sites-legacyd7a4aaeb70d68fdee39312192efb990b",
                      children: u
                    })]
                  }), (0, f.jsx)(oa, {
                    prevRef: k,
                    nextRef: b,
                    onNextClicked: () => {},
                    onPrevClicked: () => {}
                  })]
                }), a && (0, f.jsx)("div", {
                  className: "rockstargames-sites-legacya1007d13e3a321bb18b5fc667025d545",
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
              modules: [ra._2],
              breakpoints: A,
              slideClass: (0, I.classList)("swiper-slide", n),
              onSlideNextTransitionEnd: () => {
                _({
                  event_action: "next",
                  event_category: "carousel",
                  event: "carousel_next",
                  event_label: i?.toLowerCase() ?? ""
                })
              },
              onSlidePrevTransitionEnd: () => {
                _({
                  event_action: "previous",
                  event_category: "carousel",
                  event: "carousel_previous",
                  event_label: i?.toLowerCase() ?? ""
                })
              },
              onSlideChangeTransitionEnd: () => {
                _({
                  event_action: "swipe",
                  event_category: "carousel",
                  event: "carousel_swipe",
                  event_label: i?.toLowerCase() ?? ""
                })
              },
              children: v
            }) : ""]
          })
        }), null),
        ma = {
          pillBtn: "rockstargames-sites-legacyd008b074498ad02717806cc094b8a780",
          selected: "rockstargames-sites-legacybe9a2e37ec59e339b0d72cd8e5256703",
          hero: "rockstargames-sites-legacyd1346f9b98fbaac26948e361bd98b4c6",
          images: "rockstargames-sites-legacyc9c078a3102a96b26f1bf1f98306384f",
          background: "rockstargames-sites-legacya271224ca2caf56b470059cdb98d9a42",
          gradient: "rockstargames-sites-legacyae257e9d159ae9bd7c8685e38ba16f59",
          layered: "rockstargames-sites-legacyf663886f051e47ea04f097c85ae6625b",
          content: "rockstargames-sites-legacyf9c204f451f3a53bcc307c00eb5f907f",
          descriptions: "rockstargames-sites-legacyd1bbf288f3fe6c79e658764847d2890a",
          buttonGroup: "rockstargames-sites-legacyfb373367ffd03ba01edaf671175244ab",
          legalText: "rockstargames-sites-legacyf625ffdd1b33a1642aa0dec12efe7897",
          shardsCarousel: "rockstargames-sites-legacye999b9cecfe233bcee8cab8682fb96bf"
        },
        ga = {
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
        fa = {
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
        ua = e => {
          let {
            title: a = "",
            mobileImg: s,
            desktopImg: t
          } = e;
          const i = (0, I.useGetCdnSource)(s ?? null),
            c = (0, I.useGetCdnSource)(t ?? i);
          return (0, f.jsx)("div", {
            className: ma.shard,
            style: {
              "--background-image-mobile": `url(${i})`,
              "--background-image-desktop": `url(${c})`
            },
            children: (0, f.jsx)("h5", {
              children: a
            })
          })
        },
        _a = e => {
          let {
            title: a = "Membership Rewards",
            shards: s
          } = e;
          const [t, i] = (0, l.useState)(null);
          return (0, l.useEffect)((() => {
            s && i(s.reduce(((e, a) => {
              if (!a?.shardImg) return e;
              const {
                title: s,
                shardImg: t
              } = a, {
                mobile: i,
                desktop: c
              } = t;
              return e.push((0, f.jsx)(ua, {
                title: s,
                mobileImg: i?.full_src,
                desktopImg: c?.full_src
              })), e
            }), []))
          }), [s]), t ? (0, f.jsx)("div", {
            className: ma.shardsCarousel,
            children: (0, f.jsx)(da, {
              title: a,
              slideChildren: t,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        pa = e => {
          let {
            animated: a = !1,
            ctas: s = [],
            description: t,
            expandingButtonLabel: i = "Subscribe",
            title: c
          } = e;
          const [r, n] = (0, l.useState)([]), [o, d] = (0, l.useState)([]);
          return (0, l.useEffect)((() => {
            n(s.reduce(((e, a) => a.isInExpandingButton ? (e.push({
              href: a.href,
              platform: a.platform,
              buttonText: a.buttonText
            }), e) : e), [])), d(s.reduce(((e, a) => (a.isInExpandingButton || e.push({
              icon: a.platform ? a.platform : "",
              title: a.buttonText,
              to: a.href
            }), e)), []))
          }), s), s.length ? r.length ? (0, f.jsx)(Ge.motion.div, {
            variants: a ? fa : void 0,
            children: (0, f.jsxs)(Ze, {
              buttonText: i,
              platformsAndLinks: r,
              children: [(0, f.jsxs)(Ge.motion.div, {
                className: ma.descriptions,
                variants: a ? fa : void 0,
                children: [(0, f.jsx)("h2", {
                  dangerouslySetInnerHTML: {
                    __html: c
                  }
                }), (0, f.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: t
                  }
                })]
              }), !!o && !!o.length && (0, f.jsx)(Ge.motion.div, {
                variants: fa,
                children: (0, f.jsx)(B, {
                  buttons: o,
                  className: ma.buttonGroup
                })
              })]
            })
          }) : (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsxs)(Ge.motion.div, {
              className: ma.descriptions,
              variants: a ? fa : void 0,
              children: [(0, f.jsx)("h2", {
                dangerouslySetInnerHTML: {
                  __html: c
                }
              }), (0, f.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: t
                }
              })]
            }), !!o && !!o.length && (0, f.jsx)(Ge.motion.div, {
              variants: fa,
              children: (0, f.jsx)(B, {
                buttons: o,
                className: ma.buttonGroup
              })
            })]
          }) : (0, f.jsxs)(Ge.motion.div, {
            className: ma.descriptions,
            variants: a ? fa : void 0,
            children: [(0, f.jsx)("h2", {
              dangerouslySetInnerHTML: {
                __html: c
              }
            }), (0, f.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: t
              }
            })]
          })
        },
        ka = e => {
          let {
            animated: a = !1,
            brands: s = [],
            ctas: t = [],
            description: i = "",
            expandingButtonLabel: c = "Subscribe",
            title: r = "",
            legalText: n
          } = e;
          return (0, f.jsxs)(Ge.motion.div, {
            className: ma.content,
            initial: "hidden",
            animate: "visible",
            variants: a ? ga : void 0,
            children: [(0, f.jsx)(Ge.motion.div, {
              variants: a ? fa : void 0,
              children: (0, f.jsx)(j, {
                brands: s
              })
            }), (0, f.jsx)(pa, {
              animated: a,
              ctas: t,
              description: i,
              expandingButtonLabel: c,
              title: r
            }), n && (0, f.jsx)(Ge.motion.div, {
              className: ma.legalText,
              variants: a ? fa : void 0,
              children: (0, f.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: n
                }
              })
            })]
          })
        },
        ba = e => {
          let {
            animated: a = !1,
            backgroundImage: s,
            brands: t = [],
            className: i,
            ctas: c = [],
            description: r = "",
            expandingButtonLabel: n = "Subscribe",
            layeredImage: l,
            layeredImageSettings: o,
            legalText: d,
            shardsSection: m = {},
            theme: g = "gen9",
            title: u = ""
          } = e;
          const _ = (e => {
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
                const [t, i] = e;
                if (s.has(t)) {
                  const e = s.get(t);
                  Object.entries(i).forEach((i => {
                    const [c, r] = i;
                    if (s.has(t) && s.has(c)) {
                      const t = `${s.get(c)}${e}`;
                      a[t] = "imageWidth" !== c ? r ? `${r}px` : "0px" : r ? `${r}vw` : "100vw"
                    }
                  }))
                }
              })), a
            })(o),
            p = (0, I.useGetCdnSource)(s?.mobile?.full_src ?? null),
            k = (0, I.useGetCdnSource)(s?.desktop?.full_src ?? p),
            b = (0, I.useGetCdnSource)(l?.mobile?.full_src ?? null),
            v = (0, I.useGetCdnSource)(l?.desktop?.full_src ?? b);
          return (0, f.jsxs)(Ge.motion.div, {
            className: (0, I.classList)(ma.hero, i),
            style: {
              "--background-image-desktop": `url(${k})`,
              "--background-image-mobile": `url(${p})`,
              "--layered-image-desktop": `url(${v})`,
              "--layered-image-mobile": `url(${b})`
            },
            initial: "hidden",
            animate: "visible",
            variants: a ? ga : void 0,
            "data-type": "hero",
            theme: g,
            children: [(0, f.jsxs)("div", {
              className: ma.images,
              children: [k && p ? (0, f.jsx)("div", {
                className: ma.background,
                style: s?.style ?? {}
              }) : "", b && v ? (0, f.jsx)("div", {
                className: ma.layered,
                style: o ? _ : {}
              }) : "", (0, f.jsx)("div", {
                className: ma.gradient
              })]
            }), (0, f.jsx)(ka, {
              animated: a,
              ctas: c,
              description: r,
              expandingButtonLabel: n,
              title: u,
              brands: t,
              legalText: d
            }), m?.shards && (0, f.jsx)(_a, {
              ...m
            })]
          })
        };
      var va = s(79784),
        ha = s.n(va);
      const ya = e => {
        let {
          children: a,
          attributes: s = {},
          className: t = "",
          style: i = {}
        } = e;
        return (0, f.jsx)("span", {
          className: (0, I.classList)(t, s?.className, "rockstargames-sites-legacya7f106a8036d74ed9282a741476c6b5a"),
          style: (0, F.safeStyles)(i ?? s?.style ?? {}),
          dangerouslySetInnerHTML: {
            __html: ha().unescape(a)
          }
        })
      };
      var xa = s(53592);
      const Na = JSON.parse('{"us":{"aria_label_open_new_window":"(Opens in a new window)","plm_nav_scroll_left":"Scroll Left","plm_nav_scroll_right":"Scroll Right","language_selector_default":"Select a Language","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","sc_link_account":"Account","sc_link_activity_feed":"Activity Feed","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell My Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_messages":"Messages","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Toggle Social Club Menu","rp_icon":"RP Category","components_track_list_title":"Tracklist","disabled_label":"Disabled","next_button_label":"Next video page","previous_button_label":"Previous video page"},"de":{"aria_label_open_new_window":"(Öffnet ein neues Fenster)","plm_nav_scroll_left":"Links scrollen","plm_nav_scroll_right":"Rechts scrollen","language_selector_default":"Eine Sprache auswählen","profile_selector_mugshot":"Verbrecherfoto von {userName}","profile_selector_profile_card":"Profildaten","profile_selector_rp_icon":"RP-Kategorie","profile_selector_switch_character":"Charakter wechseln","sc_link_account":"Konto","sc_link_activity_feed":"Aktivitäten-Feed","sc_link_cookies_policy":"Cookie-Richtlinie","sc_link_cookies_settings":"Cookie-Einstellungen","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Meine Informationen nicht verkaufen","sc_link_find_friends":"Freunde finden","sc_link_friends":"Freunde","sc_link_game_activation":"Spielaktivierung","sc_link_help":"Hilfe","sc_link_import_friends":"Freunde importieren","sc_link_join_social_club":"Registrieren","sc_link_legal":"Rechtliches","sc_link_log_out":"Abmelden","sc_link_messages":"Nachrichten","sc_link_my_friends":"Meine Freunde","sc_link_notifications":"Benachrichtigungen","sc_link_privacy_policy":"Datenschutzrichtlinien","sc_link_settings":"Einstellungen","sc_link_sign_in":"Anmelden","sc_link_support":"Support","sc_link_view_my_profile":"Mein Profil ansehen","sc_menu_drag_handle":"Menü öffnen bzw. schließen","sc_menu_toggle":"Social-Club-Menü öffnen bzw. schließen","components_track_list_title":"Trackliste","disabled_label":"Deaktiviert","next_button_label":"Nächste Videoseite","previous_button_label":"Vorherige Videoseite"},"es":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","plm_nav_scroll_left":"Desplazar hacia la izquierda","plm_nav_scroll_right":"Desplazar hacia la derecha","language_selector_default":"Selecciona un idioma","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta de perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Ajustes de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendáis mis datos","sc_link_find_friends":"Buscar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación del juego","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registrarse","sc_link_legal":"Aviso legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Ajustes","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Asistencia técnica","sc_link_view_my_profile":"Ver mi perfil","sc_menu_drag_handle":"Arrastrar el controlador del menú","sc_menu_toggle":"Cambiar el menú del Social Club","components_track_list_title":"Lista de pistas","disabled_label":"Desactivado","next_button_label":"Página de vídeo siguiente","previous_button_label":"Página de vídeo anterior"},"mx":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","plm_nav_scroll_left":"Desplazarse hacia la izquierda","plm_nav_scroll_right":"Desplazarse hacia la derecha","language_selector_default":"Seleccionar un idioma","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta del perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Muro de actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configuración de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendan mis datos","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación de juegos","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registro","sc_link_legal":"Legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Configuración","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Soporte","sc_link_view_my_profile":"Ver mi perfil","sc_menu_drag_handle":"Mover el handle del menú","sc_menu_toggle":"Cambiar menú del Social Club","components_track_list_title":"Lista de canciones","disabled_label":"Desactivado","next_button_label":"Página de video siguiente","previous_button_label":"Página de video anterior"},"fr":{"aria_label_open_new_window":"(S’ouvre dans une nouvelle fenêtre)","plm_nav_scroll_left":"Faire défiler vers la gauche","plm_nav_scroll_right":"Faire défiler vers la droite","language_selector_default":"Sélectionner une langue","profile_selector_mugshot":"Photo d\'identité : {userName}","profile_selector_profile_card":"Carte du profil","profile_selector_rp_icon":"Catégorie de RP","profile_selector_switch_character":"Changer de personnage","sc_link_account":"Compte","sc_link_activity_feed":"Fil d\'activités","sc_link_cookies_policy":"Politique en matière de cookies","sc_link_cookies_settings":"Paramètres des cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Ne pas vendre mes informations","sc_link_find_friends":"Trouver des amis","sc_link_friends":"Amis","sc_link_game_activation":"Activation de jeux","sc_link_help":"Aide","sc_link_import_friends":"Importer des amis","sc_link_join_social_club":"S’inscrire","sc_link_legal":"Mentions légales","sc_link_log_out":"Se déconnecter","sc_link_messages":"Messages","sc_link_my_friends":"Mes amis","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Charte de confidentialité","sc_link_settings":"Paramètres","sc_link_sign_in":"Se connecter","sc_link_support":"Assistance","sc_link_view_my_profile":"Voir mon profil","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Afficher le menu du Social Club","components_track_list_title":"Liste des morceaux","disabled_label":"Désactivé","next_button_label":"Page vidéo suivante","previous_button_label":"Page vidéo précédente"},"it":{"aria_label_open_new_window":"(Apri in una nuova finestra)","plm_nav_scroll_left":"Scorri a sinistra","plm_nav_scroll_right":"Scorri a destra","language_selector_default":"Seleziona una lingua","profile_selector_mugshot":"Foto segnaletica di {userName}","profile_selector_profile_card":"Scheda del profilo","profile_selector_rp_icon":"Categoria RP","profile_selector_switch_character":"Cambia personaggio","sc_link_account":"Account","sc_link_activity_feed":"Feed attività","sc_link_cookies_policy":"Politica sui cookie","sc_link_cookies_settings":"Impostazioni dei cookie","sc_link_crews":"Crew","sc_link_do_not_sell_my_information":"Non vendere le mie informazioni","sc_link_find_friends":"Trova amici","sc_link_friends":"Amici","sc_link_game_activation":"Attivazione gioco","sc_link_help":"Assistenza","sc_link_import_friends":"Importa amici","sc_link_join_social_club":"Registrati","sc_link_legal":"Note legali","sc_link_log_out":"Esci","sc_link_messages":"Messaggi","sc_link_my_friends":"I miei amici","sc_link_notifications":"Notifiche","sc_link_privacy_policy":"Politica sulla privacy","sc_link_settings":"Impostazioni","sc_link_sign_in":"Accedi","sc_link_support":"Supporto","sc_link_view_my_profile":"Visualizza il mio profilo","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Apri/chiudi il menu del Social Club","components_track_list_title":"Tracklist","disabled_label":"Disabilitato","next_button_label":"Pagina di video successiva","previous_button_label":"Pagina di video precedente"},"jp":{"aria_label_open_new_window":"(新しいウィンドウで開きます)","plm_nav_scroll_left":"左にスクロール","plm_nav_scroll_right":"右にスクロール","language_selector_default":"言語を選択","profile_selector_mugshot":"{ユーザーネーム}顔写真","profile_selector_profile_card":"プロフィールカード","profile_selector_rp_icon":"RPカテゴリー","profile_selector_switch_character":"キャラクター変更","sc_link_account":"アカウント","sc_link_activity_feed":"アクティビティフィード","sc_link_cookies_policy":"クッキーポリシー","sc_link_cookies_settings":"クッキー設定","sc_link_crews":"クルー","sc_link_do_not_sell_my_information":"個人情報を売らないでください","sc_link_find_friends":"フレンドを検索","sc_link_friends":"フレンド","sc_link_game_activation":"ゲームアクティベーション","sc_link_help":"ヘルプ","sc_link_import_friends":"フレンドをインポート","sc_link_join_social_club":"サインアップ","sc_link_legal":"利用規約","sc_link_log_out":"ログアウト","sc_link_messages":"メッセージ","sc_link_my_friends":"フレンド","sc_link_notifications":"通知","sc_link_privacy_policy":"プライバシーポリシー","sc_link_settings":"設定","sc_link_sign_in":"サインイン","sc_link_support":"サポート","sc_link_view_my_profile":"プロフィールを表示","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Social Clubメニューを切り替え","components_track_list_title":"トラックリスト","disabled_label":"無効","next_button_label":"次のビデオページ","previous_button_label":"前のビデオページ"},"kr":{"aria_label_open_new_window":"(새 창에서 열기)","plm_nav_scroll_left":"왼쪽 스크롤","plm_nav_scroll_right":"오른쪽 스크롤","language_selector_default":"언어 선택","profile_selector_mugshot":"{userName} 머그샷","profile_selector_profile_card":"프로필 카드","profile_selector_rp_icon":"RP 카테고리","profile_selector_switch_character":"캐릭터 교체","sc_link_account":"계정","sc_link_activity_feed":"활동 피드","sc_link_cookies_policy":"쿠키 정책","sc_link_cookies_settings":"쿠키 설정","sc_link_crews":"조직","sc_link_do_not_sell_my_information":"내 정보 판매 안 함","sc_link_find_friends":"친구 찾기","sc_link_friends":"친구","sc_link_game_activation":"게임 활성화","sc_link_help":"도움말","sc_link_import_friends":"친구 불러오기","sc_link_join_social_club":"가입","sc_link_legal":"법률 관련","sc_link_log_out":"로그아웃","sc_link_messages":"메시지","sc_link_my_friends":"내 친구","sc_link_notifications":"알림","sc_link_privacy_policy":"개인 정보 보호 정책","sc_link_settings":"설정","sc_link_sign_in":"로그인","sc_link_support":"지원","sc_link_view_my_profile":"내 프로필 보기","sc_menu_drag_handle":"드래그 메뉴 핸들","sc_menu_toggle":"Social Club 메뉴 켜기/끄기","components_track_list_title":"트랙리스트","disabled_label":"비활성화됨","next_button_label":"다음 비디오 페이지","previous_button_label":"이전 비디오 페이지"},"pl":{"aria_label_open_new_window":"(Otwórz w nowym oknie)","plm_nav_scroll_left":"Przesuń w lewo","plm_nav_scroll_right":"Przesuń w prawo","language_selector_default":"Wybierz język","profile_selector_mugshot":"Zdjęcie – {userName}","profile_selector_profile_card":"Karta profilu","profile_selector_rp_icon":"Poziom RP","profile_selector_switch_character":"Zmień postać","sc_link_account":"Konto","sc_link_activity_feed":"Zajęcia","sc_link_cookies_policy":"Polityka plików cookie","sc_link_cookies_settings":"Ustawienia plików cookie","sc_link_crews":"Ekipy","sc_link_do_not_sell_my_information":"Zabraniam sprzedaży moich danych","sc_link_find_friends":"Szukaj znajomych","sc_link_friends":"Znajomi","sc_link_game_activation":"Aktywacja gry","sc_link_help":"Pomoc","sc_link_import_friends":"Importuj znajomych","sc_link_join_social_club":"Zarejestruj się","sc_link_legal":"Informacje prawne","sc_link_log_out":"Wyloguj się","sc_link_messages":"Wiadomości","sc_link_my_friends":"Moi znajomi","sc_link_notifications":"Powiadomienia","sc_link_privacy_policy":"Polityka prywatności","sc_link_settings":"Ustawienia","sc_link_sign_in":"Zaloguj się","sc_link_support":"Wsparcie","sc_link_view_my_profile":"Przeglądaj profil","sc_menu_drag_handle":"Przeciągnij uchwyt menu","sc_menu_toggle":"Włącz lub wyłącz menu Social Club","components_track_list_title":"Lista utworów","disabled_label":"Wyłączone","next_button_label":"Następna strona z filmami","previous_button_label":"Poprzednia strona z filmami"},"br":{"aria_label_open_new_window":"(Abre em uma nova janela)","plm_nav_scroll_left":"Rolar para a esquerda","plm_nav_scroll_right":"Rolar para a direita","language_selector_default":"Selecione um idioma","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Cartão de perfil","profile_selector_rp_icon":"Categoria de RP","profile_selector_switch_character":"Alternar personagem","sc_link_account":"Conta","sc_link_activity_feed":"Feed de atividade","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configurações de cookies","sc_link_crews":"Comandos","sc_link_do_not_sell_my_information":"Não vendam a minha informação","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Ativação de jogos","sc_link_help":"Ajuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Inscrever-se","sc_link_legal":"Aviso legal","sc_link_log_out":"Sair","sc_link_messages":"Mensagens","sc_link_my_friends":"Meus amigos","sc_link_notifications":"Notificações","sc_link_privacy_policy":"Política de Privacidade","sc_link_settings":"Configurações","sc_link_sign_in":"Iniciar sessão","sc_link_support":"Suporte","sc_link_view_my_profile":"Visualizar meu perfil","sc_menu_drag_handle":"Arrastar título do menu","sc_menu_toggle":"Alternar menu do Social Club","components_track_list_title":"Lista de faixas","disabled_label":"Desabilitado","next_button_label":"Próxima página de vídeos","previous_button_label":"Página anterior de vídeos"},"ru":{"aria_label_open_new_window":"(ссылка откроется в новом окне)","plm_nav_scroll_left":"Пролистать влево","plm_nav_scroll_right":"Пролистать вправо","language_selector_default":"Выбрать язык","profile_selector_mugshot":"Фотография игрока {userName}","profile_selector_profile_card":"Карта профиля","profile_selector_rp_icon":"Категория опыта","profile_selector_switch_character":"Сменить персонажа","sc_link_account":"Учетная запись","sc_link_activity_feed":"Лента событий","sc_link_cookies_policy":"Политика использования файлов Cookie","sc_link_cookies_settings":"Настройки файлов Cookie","sc_link_crews":"Банды","sc_link_do_not_sell_my_information":"Я запрещаю продавать свою личную информацию","sc_link_find_friends":"Поиск друзей","sc_link_friends":"Друзья","sc_link_game_activation":"Активация игры","sc_link_help":"Помощь","sc_link_import_friends":"Импорт друзей","sc_link_join_social_club":"Регистрация","sc_link_legal":"Юридическая информация","sc_link_log_out":"Выход","sc_link_messages":"Сообщения","sc_link_my_friends":"Мои друзья","sc_link_notifications":"Уведомления","sc_link_privacy_policy":"Политика конфиденциальности","sc_link_settings":"Настройки","sc_link_sign_in":"Войти","sc_link_support":"Поддержка","sc_link_view_my_profile":"Моя учетная запись","sc_menu_drag_handle":"Перенести маркер меню","sc_menu_toggle":"Переключить меню Social Club","components_track_list_title":"Список песен","disabled_label":"Отключено","next_button_label":"Следующая страница с видео","previous_button_label":"Предыдущая страница с видео"},"hans":{"aria_label_open_new_window":"（在新窗口中打开）","plm_nav_scroll_left":"向左滚动","plm_nav_scroll_right":"向右滚动","language_selector_default":"选择一种语言","profile_selector_mugshot":"{userName} 面部照片","profile_selector_profile_card":"档案卡","profile_selector_rp_icon":"声望值类别","profile_selector_switch_character":"切换角色","sc_link_account":"账户","sc_link_activity_feed":"活动动态","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 设置","sc_link_crews":"帮会","sc_link_do_not_sell_my_information":"请勿出售我的信息","sc_link_find_friends":"查找好友","sc_link_friends":"好友","sc_link_game_activation":"游戏激活","sc_link_help":"帮助","sc_link_import_friends":"导入好友","sc_link_join_social_club":"注册","sc_link_legal":"法律声明","sc_link_log_out":"登出","sc_link_messages":"信息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隐私政策","sc_link_settings":"设置","sc_link_sign_in":"登录","sc_link_support":"支持","sc_link_view_my_profile":"查看我的档案","sc_menu_drag_handle":"拖动菜单处理","sc_menu_toggle":"切换 Social Club 菜单","components_track_list_title":"曲目列表","disabled_label":"已禁用","next_button_label":"下一页视频","previous_button_label":"上一页视频"},"tw":{"aria_label_open_new_window":"（在新視窗開啟）","plm_nav_scroll_left":"向左捲動","plm_nav_scroll_right":"向右捲動","language_selector_default":"選擇語言","profile_selector_mugshot":"{userName} 罪犯檔案照","profile_selector_profile_card":"資料卡","profile_selector_rp_icon":"聲望值類別","profile_selector_switch_character":"切換角色","sc_link_account":"帳戶","sc_link_activity_feed":"動態活動","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 設定","sc_link_crews":"幫會","sc_link_do_not_sell_my_information":"不要販售我的個人資料","sc_link_find_friends":"尋找好友","sc_link_friends":"好友","sc_link_game_activation":"遊戲啟用","sc_link_help":"幫助","sc_link_import_friends":"匯入好友","sc_link_join_social_club":"註冊","sc_link_legal":"法律聲明","sc_link_log_out":"登出","sc_link_messages":"訊息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隱私權政策","sc_link_settings":"設定","sc_link_sign_in":"登入","sc_link_support":"支援","sc_link_view_my_profile":"查看我的設定檔","sc_menu_drag_handle":"拖曳選單控點","sc_menu_toggle":"開關 Social Club 選單","components_track_list_title":"曲目清單","disabled_label":"停用","next_button_label":"下一個影片頁面","previous_button_label":"上一個影片頁面"}}'),
        wa = (0, o.defineMessages)({
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          }
        }),
        ja = {
          pillBtn: "rockstargames-sites-legacycb792ef8796eaa09f8b5c1ee0230fcd7",
          selected: "rockstargames-sites-legacyc951b9f5173e8a37be389854c40995ee",
          scMenuStyles: "rockstargames-sites-legacyfa91a55e22ad688cba0bc1210eaf4726",
          languageSelector: "rockstargames-sites-legacyb631f2ce92e4a89f8eddebd32e8ed30a",
          open: "rockstargames-sites-legacyedc598921a872174190475d0ad016d15",
          linkWrapper: "rockstargames-sites-legacyc4b7087d1fcbaad6967e61b84160ff79",
          links: "rockstargames-sites-legacyc7d345d5c7e567e0ee75b792d5bdfb88",
          selectBoxWrapper: "rockstargames-sites-legacye3e55a10507405de05ae92006ec0d02b",
          selectBox: "rockstargames-sites-legacyc646a2bff16ec3003b027857488cd612",
          selectBoxOption: "rockstargames-sites-legacybcccd1077d13d7fe1585655e5c5f8363"
        },
        Sa = (0, o.withIntl)((e => {
          let {
            theme: a,
            languageSelectorOpened: s,
            setLanguageSelectorOpened: t
          } = e;
          const i = (0, m.useLocation)(),
            c = (0, o.useIntl)(),
            [r, n] = (0, o.getLocale)(),
            [d, g] = (0, l.useState)(!1),
            _ = (0, l.useMemo)((() => (0, xa.c)()), []),
            p = (0, l.useCallback)((e => {
              let a = i.pathname;
              const s = a.split("/");
              return o.locales.map((e => e.subdomaincom)).includes(s[0]) && (a = s.slice(1).join("/")), _.currentSite?.site === xa.U.www ? "en" === e ? `${window.location.origin}${a}${i.search}` : `${window.location.origin}/${e}${a}${i.search}` : `${window.location.origin}${a}${i.search}`
            }), [i]),
            k = (0, l.useRef)(null),
            [b, v] = (0, l.useState)(0),
            h = matchMedia("(hover: none) and (pointer: coarse)").matches,
            y = e => {
              if (t && t(!1), r.subdomaincom === e || "none" === e) return void(t && t(!1));
              const a = o.locales.find((a => a.subdomaincom === e));
              a && (n(a.iso), window.location.href = p(e))
            };
          return (0, l.useEffect)((() => {
            void 0 !== s && !1 === s && !0 === d && g(!1)
          }), [s]), (0, l.useEffect)((() => {
            k.current && v(k.current.scrollHeight)
          }), [k]), (0, f.jsxs)("div", {
            className: [ja.languageSelector, d ? ja.open : ""].join(" "),
            "data-theme": a,
            children: [h && "sc-menu" === a && (0, f.jsx)("div", {
              className: ja.selectBoxWrapper,
              children: (0, f.jsxs)("select", {
                className: ja.selectBox,
                onClick: e => e.stopPropagation(),
                onChange: e => {
                  y(e.currentTarget.value)
                },
                "aria-label": c.formatMessage(wa.language_selector_default),
                children: [(0, f.jsx)("option", {
                  className: ja.selectBoxOption,
                  value: "none",
                  children: (0, f.jsx)(o.FormattedMessage, {
                    ...wa.language_selector_default
                  })
                }), o.locales.map((e => {
                  let {
                    label: a,
                    subdomaincom: s
                  } = e;
                  return (0, f.jsx)("option", {
                    className: ja.selectBoxOption,
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
                "aria-label": c.formatMessage(wa.language_selector_default),
                children: [(0, f.jsx)("i", {}), (0, f.jsx)("span", {
                  children: (0, f.jsx)(o.FormattedMessage, {
                    ...wa.language_selector_default
                  })
                })]
              }), (0, f.jsx)("div", {
                className: ja.linkWrapper,
                ref: k,
                style: {
                  "--ls-linkWrapper-opened-height": `${b}px`
                },
                children: (0, f.jsx)("div", {
                  className: ja.links,
                  children: o.locales.map((e => {
                    let {
                      subdomaincom: a,
                      label: s
                    } = e;
                    return (0, f.jsx)(u, {
                      to: p(a),
                      onClick: () => {
                        y(a)
                      },
                      tabIndex: d ? 0 : -1,
                      children: s
                    }, `desktop-${a}`)
                  }))
                })
              })]
            })]
          })
        }), Na),
        Ca = {
          layeredImage: "rockstargames-sites-legacya29c233d553c5905763bb69412c1ece4",
          layersWrapper: "rockstargames-sites-legacyaabf78eb3e1fe545556ad0fa5639296e",
          "hero-lg": "rockstargames-sites-legacyca666917bdeaed43fd0a7af7dc30a0f7",
          "hero-md": "rockstargames-sites-legacyf0a202fcbf13f1e91157e531ae829ea3",
          "hero-sm": "rockstargames-sites-legacye03dbf5d16aeab81ca65f4cb7e64446f",
          contain: "rockstargames-sites-legacyc4c3c929b11e88540e3f19d5715393ec",
          cover: "rockstargames-sites-legacyb283d6381c82abf4dde21c57b8fc5f66",
          fill: "rockstargames-sites-legacye9d16b94c1ed476c9346cb6f48f5ad3e",
          "bg-img": "rockstargames-sites-legacye45fabf9c4e04bf3ee27e9c84c50c09b",
          imageLayer: "rockstargames-sites-legacyed8d0ad18a62f087629ff5831fa0ac55",
          "layer-lg-height": "rockstargames-sites-legacyfaf1d5c6b2fe2ad27d4bb95ba7388f3d",
          "layer-md-height": "rockstargames-sites-legacyb41041f11a5ef98325948acc3dec956c",
          "layer-sm-height": "rockstargames-sites-legacyba7d5822aa073c9e01cd682d65c18944",
          "layer-xl-height": "rockstargames-sites-legacyec2399a1f7e79e9aacba81b242ad0602",
          "layer-xs-height": "rockstargames-sites-legacya6ec38ac99c762fcf0dd99aa2ced8f2b",
          "layer-xxl-height": "rockstargames-sites-legacyd7c1314e717273dfbb2acd3d5e06e585",
          "layer-lg-width": "rockstargames-sites-legacyca0dd7a55a5db5ee358ce51a166e5431",
          "layer-md-width": "rockstargames-sites-legacybd4c246f4f0eaf7173d104ed1e7c2d06",
          "layer-sm-width": "rockstargames-sites-legacyfe3f49cba9cc10e4e076a43a6b36b862",
          "layer-xl-width": "rockstargames-sites-legacybde3d6485ac7bb483dcca1ad4e2bbe67",
          "layer-xs-width": "rockstargames-sites-legacyb87efd95b330cacd4a5eaecf83528f4d",
          "layer-xxl-width": "rockstargames-sites-legacyac872df7985f9d591c85f97c72d451dc",
          "bottom-y": "rockstargames-sites-legacyd63fdb49c964c28c5e8952cd79a393a0",
          "center-x": "rockstargames-sites-legacyd248443eb924360a5d1d7211094ea827",
          "center-y": "rockstargames-sites-legacya8d87c765a51d98f0e3a9afd149ed0dc",
          "left-x": "rockstargames-sites-legacydcaa6339b43850be2e14967cab730041",
          "right-x": "rockstargames-sites-legacyb656d800e3d134bd3a7e273a5f6d7ae6",
          "top-y": "rockstargames-sites-legacyadaf230f139f906eb912b58b315406ac",
          border: "rockstargames-sites-legacyc73e199a8978fb80895753c9a38fcdff",
          shards: "rockstargames-sites-legacye650a715d6f220ad49bb568768154b0e",
          shards_three: "rockstargames-sites-legacyb0c8be28788c6b23cea904bdc60d7e07",
          shards_two: "rockstargames-sites-legacye41252d3a0aee1d229f6bddc20c38d47",
          dual: "rockstargames-sites-legacydb575e1d021e69ebb4265a29484e2888"
        },
        Ia = e => {
          let {
            style: a,
            className: s
          } = e;
          const t = {
              ...a
            },
            i = a["--border-image-source"];
          return i && (t["--border-image-source"] = `url(${(0,I.useGetCdnSource)(i)})`), (0, f.jsx)("div", {
            className: (0, I.classList)(Ca.border, s),
            style: {
              ...t
            }
          })
        },
        Ta = e => e?.images ? (0, f.jsx)("div", {
          className: (0, I.classList)(Ca.layeredImage, Ca[e?.variantClass], Ca[e?.wrapperSizeClass]),
          style: {
            ...e?.style ?? {}
          },
          children: (0, f.jsxs)("div", {
            className: Ca.layersWrapper,
            children: [e?.images?.map(((e, a) => {
              const {
                image: s,
                paddingClass: t,
                imageSizeClass: i,
                objectFitClass: c,
                positionClassX: r,
                positionClassY: n,
                zIndex: l,
                className: o,
                style: d,
                alt: m,
                displayClass: g
              } = e;
              return (0, f.jsx)(ve, {
                image: s,
                style: {
                  zIndex: l ?? ++a
                },
                imageStyle: d,
                className: (0, I.classList)(o, g, Ca.imageLayer, Ca[t], Ca[i], Ca[c], Ca[r], Ca[n]),
                alt: m
              }, l ?? ++a)
            })), e?.borderImage && (0, f.jsx)(Ia, {
              style: e?.borderImage,
              className: e?.borderImage?.displayClass
            })]
          })
        }) : null,
        Ma = e => {
          let {
            hero: a,
            children: s
          } = e;
          return a ? (0, f.jsx)("div", {
            className: "rockstargames-sites-legacyefc561ad30f5dfe75c79d939737650dc",
            children: s
          }) : s
        },
        La = e => {
          let {
            badge: a = null,
            badgeType: s,
            discountTxt: t,
            splitter: i,
            image: c,
            style: r,
            className: n = "",
            attributes: l = {},
            role: o,
            hero: d = !1
          } = e;
          return (0, f.jsx)(Ma, {
            hero: d,
            children: (0, f.jsx)("figure", {
              children: (0, f.jsxs)("div", {
                className: (0, I.classList)("rockstargames-sites-legacycab262c98c7f5bb3e982d9b075b3c2a8", d ? "rockstargames-sites-legacycefd6d8859aeec1057caed28caa160c3" : "", l?.hiddenMobile ? "hiddenMobile" : "", l?.hiddenLarge ? "hiddenLarge" : "", l?.className, n),
                style: (0, F.safeStyles)({
                  ...r,
                  ...l?.style
                }),
                ...l,
                children: [(0, f.jsx)(ve, {
                  image: c,
                  className: n
                }), (c?.badge || c?.discountTxt || a || t) && (0, f.jsx)(Pe, {
                  badge: c?.discountTxt ?? c?.badge ?? a ?? t,
                  badgeType: s,
                  splitter: c?.splitter ?? i,
                  role: c?.role ?? o
                }), c?.caption && (0, f.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: c.caption
                  }
                })]
              })
            })
          })
        },
        Ea = {
          pillBtn: "rockstargames-sites-legacyeea0db67b0aabf28288b288845324afe",
          selected: "rockstargames-sites-legacyd1d25362fd730ca979d5ad79de088f89",
          multiSourceContainer: "rockstargames-sites-legacydc538bbfc2f407ed9fe840097ccac819",
          multiSourceImage: "rockstargames-sites-legacyee782a29692a8eb06db1287a4984c243",
          animatePlaceholder: "rockstargames-sites-legacyfbd73f5f70c2ce64aa9c9bd398f1a3b5",
          "loader-keyframes": "rockstargames-sites-legacyf6040b2ae96a9b0dcdb2d283c9caff59"
        },
        Ba = e => {
          let {
            imageUrl: a,
            className: s,
            alt: t,
            style: i,
            lazy: c = !1,
            decoding: r = "auto",
            sizes: n = [320, 480, 768, 1024, 1440, 1920, 2560]
          } = e;
          const [o, d] = (0, l.useState)(!1);
          return (0, f.jsxs)("div", {
            className: Ea.multiSourceContainer,
            children: [!o && (0, f.jsx)("img", {
              className: [s, Ea.animatePlaceholder].join(" "),
              src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjMzMzMzMzIi8+Cjwvc3ZnPgo=",
              sizes: "(max-width: 1024px) 100vw, 1024px",
              alt: "Loading...",
              style: i
            }), (0, f.jsx)("img", {
              className: [Ea.multiSourceImage, s].join(" "),
              src: `${a}?im=Resize=1920`,
              srcSet: (m = a, n.map((e => `${m}?im=Resize=${e} ${e}w`)).join(", ")),
              sizes: "(max-width: 400px) 200px, (max-width: 1920px) 100vw, 1920px",
              alt: t ?? "Multi-Source Image",
              style: i,
              onLoad: () => {
                d(!0)
              },
              loading: c ? "lazy" : "eager",
              decoding: r
            })]
          });
          var m
        },
        Pa = {
          tag: "rockstargames-sites-legacyed77774d2704bc0ebc0ac156542ae053"
        },
        za = e => {
          let {
            className: a,
            href: s,
            title: t,
            style: i
          } = e;
          const c = (0, f.jsxs)("div", {
            style: i,
            className: [Pa.tag, a].join(" "),
            children: [(0, f.jsx)("i", {}), t]
          });
          return void 0 !== s ? (0, f.jsx)(u, {
            to: s,
            children: c
          }) : c
        },
        Va = {
          newswireBlock: "rockstargames-sites-legacya793f470884d207243d6c3caac8ad811",
          info: "rockstargames-sites-legacyd50f6d2bc5f983c05311292acb4c78a5",
          title: "rockstargames-sites-legacycc389449dc1495fc9c323fc2c547857d",
          newswireBlockNoSpecialOrder: "rockstargames-sites-legacyffd167124f27c8e26a147f49c88796e5",
          preview: "rockstargames-sites-legacybbfbcf32c8c892ea29f4178949643475",
          previewMobile: "rockstargames-sites-legacyf88852766488b21a28c42d230ea529a1",
          top: "rockstargames-sites-legacyfa1a6f4c7d94b94f5af2dc1ac9af79f1",
          startAnimation: "rockstargames-sites-legacye380e8c67066df6f33fc018341ea96e5"
        },
        $a = e => {
          let {
            index: a,
            post: s,
            noSpecialOrder: t = !1,
            style: i = {}
          } = e;
          const [c] = (0, m.useSearchParams)(), r = s.preview_images_parsed.newswire_block, n = {
            default: 0 !== a || t ? r.square || r.d16x9 || r._fallback : r.d16x9 || r.square || r._fallback,
            mobile: r.square || r._fallback
          }, [l, o] = (0, F.usePreloadImg)(n.default), [d, g] = (0, F.usePreloadImg)(n.mobile), _ = {
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
            className: [Va.newswireBlock, t ? Va.newswireBlockNoSpecialOrder : "", null !== l ? Va.startAnimation : ""].join(" "),
            children: (0, f.jsxs)(f.Fragment, {
              children: [0 !== a || c.get("tag_id") ? (0, f.jsx)("div", {
                className: Va.preview,
                style: _.default
              }) : (0, f.jsxs)(f.Fragment, {
                children: [(0, f.jsx)("div", {
                  className: Va.previewMobile,
                  style: _.mobile
                }), (0, f.jsx)("div", {
                  className: Va.preview,
                  style: _.default
                })]
              }), (0, f.jsxs)("div", {
                className: Va.info,
                children: [(0, f.jsxs)("div", {
                  className: Va.top,
                  children: [s.primary_tags.length ? (0, f.jsx)(za, {
                    title: s.primary_tags[s.primary_tags.length > 1 && 722 === s.primary_tags[0].id ? 1 : 0].name
                  }) : "", (0, f.jsx)("time", {
                    dateTime: s.created,
                    children: s.created_formatted
                  })]
                }), (0, f.jsx)("h5", {
                  className: Va.title,
                  dangerouslySetInnerHTML: {
                    __html: s.title
                  }
                })]
              })]
            })
          })
        };
      var Da = s(55492),
        Aa = s.n(Da);
      const Fa = (0, F.withTranslations)((e => {
          let {
            relativeTo: a = "",
            tagId: s = null,
            metaUrl: t = "/newswire",
            t: i
          } = e;
          const [c] = (0, m.useSearchParams)(), {
            tagId: r = null
          } = (0, m.useParams)(), [n, o] = (0, l.useState)(r ?? s ?? c.get("tag_id")), [d, g] = (0, l.useState)(1), [u, _] = (0, l.useState)([]), [p, b] = (0, l.useState)(null), {
            data: v
          } = (0, k.useQuery)(Aa(), {
            variables: {
              tagId: Number(n),
              page: d,
              metaUrl: t
            },
            autoSetLoading: !0
          });
          return (0, l.useEffect)((() => {
            g(1), _([]), o(r ?? s ?? c.get("tag_id"))
          }), [c.get("tag_id")]), (0, l.useEffect)((() => {
            v && v.posts && v.posts.paging && b(v.posts.paging), v && v.posts && v.posts.results && _(u.concat(v.posts.results))
          }), [v]), u.length ? (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsx)(Ga, {
              posts: u,
              relativeTo: a,
              noSpecialOrder: null !== n
            }), null !== p && p.nextPage ? (0, f.jsx)(C, {
              onClick: () => g(d + 1),
              disabled: !1,
              context: "secondary",
              children: i("More Stories")
            }) : ""]
          }) : null
        })),
        Oa = {
          pillBtn: "rockstargames-sites-legacyafd0af959edb4a463c41ad4e9cc5dadc",
          selected: "rockstargames-sites-legacybcd59aa4a9e88d86a2cbe8d4972f8f51",
          related: "rockstargames-sites-legacya748ad776070dab831edc1f67f66af08",
          posts: "rockstargames-sites-legacyc0aa38678decd13ca38886b4547efedd",
          just1post: "rockstargames-sites-legacyb1a31ddf7fd4458ee860d354a6a0ac92"
        },
        Ra = (0, F.withTranslations)((e => {
          let {
            posts: a,
            t: s
          } = e;
          return (0, f.jsxs)("section", {
            className: Oa.related,
            children: [(0, f.jsx)("h2", {
              children: s("Related Stories")
            }), (0, f.jsx)("div", {
              className: [Oa.posts, 1 === a.length ? Oa.just1post : ""].join(" "),
              children: a.map((e => (0, f.jsx)($a, {
                noSpecialOrder: !0,
                post: e
              }, e.id)))
            })]
          })
        })),
        Ua = {
          newswireBlocks: "rockstargames-sites-legacyc2c8eedd25de7e186655f98b2a8d8960",
          noSpecialOrder: "rockstargames-sites-legacyc0d0db9dfc71c9f4f959b9c017b1ae4b"
        },
        Ga = (0, F.withGtmTracking)((e => {
          let {
            noSpecialOrder: a = !1,
            posts: s,
            gtmTrack: t,
            relativeTo: i
          } = e;
          return (0, l.useEffect)((() => {
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
            className: [Ua.newswireBlocks, a ? Ua.noSpecialOrder : "", Ua.contextHome].join(" "),
            children: s.map(((e, s) => (0, f.jsx)($a, {
              index: s,
              noSpecialOrder: a,
              post: e
            }, e.id)))
          })
        })),
        Ha = {
          pillBtn: "rockstargames-sites-legacyf87ac9a7d56545847cf4d8ca471b03e6",
          selected: "rockstargames-sites-legacya8ea61e57fd58bfcb99aef7e6d687045",
          grid: "rockstargames-sites-legacya57241f29873f89f89ab8b27994e71c3",
          itemList: "rockstargames-sites-legacydaec3f5ce63d42cb07e3e724737c8361",
          gtaplus: "rockstargames-sites-legacybd78cfb71ed31029ba4279325166bfab",
          rdo: "rockstargames-sites-legacya6244398a800ffddab72c14f717b0eab",
          noImg: "rockstargames-sites-legacye88f741af7d5e0529ff4fb6bb82af04f",
          gtao: "rockstargames-sites-legacyab60d91453348d2e4c090ef3ebb04347",
          custom: "rockstargames-sites-legacyc20e7ba6ceaba3afd37095b172797711",
          yellow: "rockstargames-sites-legacyb16672deedfe102b065925cbe0fb931c",
          hotPink: "rockstargames-sites-legacyd0d01601de7131d9d6d11321b4299e59",
          red: "rockstargames-sites-legacyd1b5397aff94d33b57674b04a3456e03",
          turquoise: "rockstargames-sites-legacyd6541b973ce158c8f2fb81483015211f",
          purple: "rockstargames-sites-legacyf3e34d902681219d4d8490eb164f7727",
          teal: "rockstargames-sites-legacya6c3b6b6a2395eb18a1174294f26f4ea",
          blue: "rockstargames-sites-legacyeade6e843c5afd48d3a8959fb0b88222",
          green: "rockstargames-sites-legacya82c313f8f85fc6304ddb703be2fa271",
          darkRed: "rockstargames-sites-legacyd394c61fdce2bf8894ffb801ee680c2a",
          darkBlue: "rockstargames-sites-legacyf1d73cc00a3ab644aab949183a8298a7",
          goldenrod: "rockstargames-sites-legacycdcb0c5076309a329da2a6e857cc3bdf",
          skull: "rockstargames-sites-legacyba4bd16bff2fbc40616457007b4a7442"
        },
        {
          sanitize: Wa
        } = ye(),
        qa = e => {
          let {
            list: a,
            string: s,
            starColor: t,
            style: i,
            className: c,
            game: r,
            noImg: n,
            columns: o,
            mobileColumns: d
          } = e;
          const [m, g] = (0, l.useState)(null);
          return (0, l.useEffect)((() => {
            g(a)
          }), [a]), s || a ? o && m ? (0, f.jsx)("div", {
            className: Ha.grid,
            style: {
              "--ordered-list-grid-column": o,
              "--ordered-list-grid-column-mobile": d ?? o
            },
            children: (0, f.jsx)("ol", {
              style: (0, F.safeStyles)(i),
              className: (0, I.classList)(Ha.itemList, Ha.noImg, Ha[t], Ha[r]),
              children: m.map((e => (0, f.jsx)("li", {
                dangerouslySetInnerHTML: {
                  __html: Wa(e.content)
                }
              }, e.content)))
            })
          }) : (0, f.jsx)("ol", {
            style: (0, F.safeStyles)(i),
            className: (0, I.classList)(Ha.itemList, Ha.custom, n ? Ha.noImg : "", t ? Ha[t] : "", r ? Ha[r] : "", c ?? ""),
            children: a.map((e => (0, f.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: Wa(e?.content ?? e)
              }
            }, e?.content)))
          }) : null
        },
        Xa = (e, a) => {
          const s = e.tiers && e.tiers.every((e => e.isComplete)),
            t = a.tiers && a.tiers.every((e => e.isComplete));
          return s && !t ? 1 : !s && t ? -1 : 0
        },
        Ka = {
          pillBtn: "rockstargames-sites-legacye6891f053f06919f1ef0dc72cafe9ae7",
          selected: "rockstargames-sites-legacye5cce3088e494e8ddb9b0cf5528697a3",
          packCardTierIndicator: "rockstargames-sites-legacyeee874b61946e2a65886d622445e1c38",
          tierIndicator: "rockstargames-sites-legacybf9ed66cb83cf9a38bfc6fbb8e105fb7",
          active: "rockstargames-sites-legacycfa711252c08391d3a0f1ecd8728a61a"
        },
        Ya = [{
          isComplete: !1
        }, {
          isComplete: !1
        }, {
          isComplete: !1
        }, {
          isComplete: !1
        }],
        Qa = e => {
          let {
            tiers: a = Ya
          } = e;
          return (0, f.jsx)("div", {
            className: Ka.packCardTierIndicator,
            children: a?.map(((e, a) => (0, f.jsx)("div", {
              className: [Ka.tierIndicator, e.isComplete ? Ka.active : ""].join(" ")
            }, a)))
          })
        },
        Za = {
          pillBtn: "rockstargames-sites-legacye2e4b892ddcbdb2e09d3c3599a7e6c56",
          selected: "rockstargames-sites-legacyff5c3c023fc12b68c6bf92b560c479b1",
          packCard: "rockstargames-sites-legacyd6ef486c5f60d41c5662b092336c1f52",
          packCardImageBox: "rockstargames-sites-legacyeb4637cb1c81d1def1fd92252f90d675",
          packCompleted: "rockstargames-sites-legacyfcd5bbd0d1e3ebd45cf2cb372468e62c",
          packCardTextBox: "rockstargames-sites-legacya124ee1b0383d30157e84108cf10b83b",
          badge: "rockstargames-sites-legacyd42fb1fd7d553d75675a251df2a255ee",
          icon: "rockstargames-sites-legacycbc69eda17393995ac9d41a8b4b531e8",
          label: "rockstargames-sites-legacyd4649f3812d37e7407503d49dcaaba04"
        },
        Ja = e => {
          let {
            title: a,
            url: s,
            imageUrl: t,
            className: i,
            tiers: c,
            onClick: r,
            badgeContent: n = "Complete",
            imageSize: o = 420,
            imageLoaded: d
          } = e;
          const [g, u] = (0, l.useState)(!1), [_, p] = (0, l.useState)(d);
          (0, l.useEffect)((() => {
            if (c) {
              const e = c.some((e => !e.isComplete));
              u(!e)
            }
          }), [c]);
          const k = `${t}?im=Resize,height=${o}`;
          return (0, F.usePreloadImg)(k, (() => p(!0))), (0, f.jsx)(m.NavLink, {
            className: [Za.packCard, i, g ? Za.packCompleted : ""].join(" "),
            to: s,
            onClick: r,
            children: (0, f.jsxs)("div", {
              className: [Za.packCardImageBox, _ ? Za.packCardImageLoaded : ""].join(" "),
              style: {
                backgroundImage: `url("${k}")`
              },
              children: [g && (0, f.jsxs)("div", {
                className: Za.badge,
                children: [(0, f.jsx)("div", {
                  className: Za.icon
                }), (0, f.jsx)("div", {
                  className: Za.label,
                  children: n
                })]
              }), (0, f.jsxs)("div", {
                className: Za.packCardTextBox,
                children: [(0, f.jsx)("h4", {
                  children: a
                }), !g && (0, f.jsx)(Qa, {
                  tiers: c
                })]
              })]
            })
          })
        },
        es = {
          pillBtn: "rockstargames-sites-legacyc0607ec9e0a3925181496fc555721e0a",
          selected: "rockstargames-sites-legacyff76988869bea7d18917be00339b2434",
          packList: "rockstargames-sites-legacyffeeb1f272f99c5cb4711e4956c65f7f",
          headerVisible: "rockstargames-sites-legacyf6652e03be6ce55bd8f068900093a707",
          packCard: "rockstargames-sites-legacya53b37fe7ab10b353eceea86123258a1",
          packGrid: "rockstargames-sites-legacyb85775dc95fb3881171ee42e49076cbf"
        },
        as = e => {
          let {
            isHeaderVisible: a,
            packListItems: s,
            packListClassName: t = es.packList,
            packGridClassName: i = es.packGrid,
            selectPackCard: c,
            sortFunction: r = Xa
          } = e;
          const n = (0, l.useRef)(null),
            o = [...s].sort(r);
          return (0, f.jsx)("div", {
            className: [t, a ? es.headerVisible : ""].join(" "),
            "data-testid": "pack-list",
            children: (0, f.jsx)("div", {
              ref: n,
              className: i,
              "data-testid": "pack-grid",
              children: o.map((e => {
                let {
                  title: a,
                  url: s,
                  imageUrl: t,
                  tiers: i
                } = e;
                return (0, f.jsx)(Ja, {
                  title: a,
                  url: s,
                  className: es.packCard,
                  imageUrl: t,
                  tiers: i,
                  onClick: () => c(a, s)
                }, s)
              }))
            })
          })
        },
        ss = {
          pillBtn: "rockstargames-sites-legacye2620ca79db4bb12b74eb4adbcba56ce",
          selected: "rockstargames-sites-legacyd429050d220c77a1c9e8631f9b9f4f02",
          navPill: "rockstargames-sites-legacyc3ef0af25cfc7d1d0048148984230190"
        },
        ts = e => {
          let {
            title: a,
            onClick: s,
            selected: t
          } = e;
          return (0, f.jsx)("button", {
            type: "button",
            onClick: s,
            className: [ss.navPill, t ? ss.selected : ""].join(" "),
            children: (0, f.jsx)("div", {
              children: a
            })
          })
        };
      var is;

      function cs() {
        return cs = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var s = arguments[a];
            for (var t in s) Object.prototype.hasOwnProperty.call(s, t) && (e[t] = s[t])
          }
          return e
        }, cs.apply(this, arguments)
      }
      const rs = e => l.createElement("svg", cs({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none"
      }, e), is || (is = l.createElement("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "m15 18-6-6 6-6"
      })));
      var ns;

      function ls() {
        return ls = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var s = arguments[a];
            for (var t in s) Object.prototype.hasOwnProperty.call(s, t) && (e[t] = s[t])
          }
          return e
        }, ls.apply(this, arguments)
      }
      const os = e => l.createElement("svg", ls({
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          fill: "none"
        }, e), ns || (ns = l.createElement("path", {
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "m9 18 6-6-6-6"
        }))),
        ds = {
          pillBtn: "rockstargames-sites-legacyfaa583ebd1250f30b148562c5964fa46",
          selected: "rockstargames-sites-legacyf55ea6a51cd0de4060f152d9a070e040",
          navScrollButton: "rockstargames-sites-legacyb13f52032a7c6105f881b2a3764d7ba6"
        },
        ms = e => {
          let {
            direction: a,
            className: s,
            ...t
          } = e;
          return (0, f.jsxs)("button", {
            type: "button",
            className: [s, ds.navScrollButton].join(" "),
            ...t,
            children: ["left" === a && (0, f.jsx)(rs, {}), "right" === a && (0, f.jsx)(os, {})]
          })
        },
        gs = (0, o.defineMessages)({
          plm_nav_scroll_left: {
            id: "plm_nav_scroll_left",
            defaultMessage: "Scroll Left"
          },
          plm_nav_scroll_right: {
            id: "plm_nav_scroll_right",
            defaultMessage: "Scroll Right"
          }
        }),
        fs = {
          pillBtn: "rockstargames-sites-legacya06d15859ff923574165bb46a5f3d0c9",
          selected: "rockstargames-sites-legacycce410d6b0f750e4332a82432812a32f",
          navMenu: "rockstargames-sites-legacyc5752917b36e8045f6765318dcfad3da",
          navMenuMain: "rockstargames-sites-legacyc507169b0a2e6c92ea16615a7740d669",
          sectionMenu: "rockstargames-sites-legacya874d8cdf964d1c68df9cf8fdd085844",
          sectionItems: "rockstargames-sites-legacya3f32f28bb1f1c6a4695c53680da9ed0",
          nextSectionNavButton: "rockstargames-sites-legacye26ad999829c4c68eadd9af67ba89033",
          previousSectionNavButton: "rockstargames-sites-legacyec50957bce6305ff1dc54a0f7d6a997b",
          previousNavButton: "rockstargames-sites-legacyf9530895bd80a161771d5ca70d967f65",
          nextNavButton: "rockstargames-sites-legacyfdd74c0f93dcc9be87ca508ab0fe469a",
          navFeaturedItems: "rockstargames-sites-legacyc6f0521d960314244895945154ba6c4a"
        },
        us = e => {
          let {
            navItems: a,
            category: s,
            onNavItemClick: t,
            isOpen: i,
            isHeaderVisible: c,
            menuClass: r = fs.navMenu,
            menuContainerClass: n = fs.navMenuMain,
            menuSectionClass: d = fs.sectionMenu,
            menuPrevBtnClass: g = fs.previousNavButton,
            menuNextBtnClass: u = fs.nextNavButton
          } = e;
          const _ = (0, o.useIntl)(),
            {
              track: p
            } = (0, O.useGtmTrack)(),
            {
              pathname: k
            } = (0, m.useLocation)(),
            b = (0, l.useMemo)((() => Math.max(a.findIndex((e => e.name === s)), 0)), [a, k]),
            [v, h] = (0, l.useState)(b),
            [y, x] = (0, l.useState)(!1),
            [N, w] = (0, l.useState)(!1),
            [j, S] = (0, l.useState)(!1),
            C = (0, l.useRef)(null),
            I = (0, l.useCallback)(((e, a) => {
              C.current && C.current.slideTo(e), h(e), M(`Secondary Nav > ${a}`)
            }), [p]),
            T = (0, l.useCallback)(((e, s) => {
              M(`Secondary Nav > ${a[v].title} > ${e}`, s), t()
            }), [a, t, v, p]),
            M = (e, a) => {
              p({
                event: "nav_click",
                event_action: "click",
                event_category: "nav",
                event_label: e,
                text: e.split(">").pop()?.trim() || "",
                link_url: a,
                element_placement: e
              })
            },
            L = (0, l.useCallback)((e => {
              w(e.isEnd), S(e.isBeginning)
            }), []);
          return (0, l.useEffect)((() => {
            C.current && ((C.current.wrapperEl.clientWidth || 0) > (C.current.el.clientWidth || 0) ? (x(!0), C.current.params.centeredSlides = !0, C.current.params.centeredSlidesBounds = !0) : (x(!1), C.current.params.centeredSlides = !1, C.current.params.centeredSlidesBounds = !1))
          }), [C.current?.wrapperEl.clientWidth, C.current?.el.clientWidth]), (0, f.jsx)(Ge.motion.div, {
            className: r,
            initial: {
              height: 0
            },
            animate: {
              height: i ? "100dvh" : 0
            },
            children: (0, f.jsxs)("div", {
              className: n,
              children: [(0, f.jsxs)("div", {
                className: d,
                children: [!j && y && (0, f.jsx)("div", {
                  className: fs.previousSectionNavButton,
                  children: (0, f.jsx)(ms, {
                    direction: "left",
                    className: g,
                    onClick: () => C.current?.slidePrev(),
                    "aria-label": _.formatMessage(gs.plm_nav_scroll_left)
                  })
                }), (0, f.jsx)("div", {
                  className: fs.sectionItems,
                  children: (0, f.jsx)(P.wx, {
                    onBeforeInit: e => C.current = e,
                    onInit: L,
                    className: fs.sectionItems,
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
                        children: (0, f.jsx)(ts, {
                          title: s,
                          onClick: () => I(a, s),
                          selected: v === a
                        })
                      }, s)
                    }))
                  })
                }), !N && y && (0, f.jsx)("div", {
                  className: fs.nextSectionNavButton,
                  children: (0, f.jsx)(ms, {
                    direction: "right",
                    className: u,
                    onClick: () => C.current?.slideNext(),
                    "aria-label": _.formatMessage(gs.plm_nav_scroll_right)
                  })
                })]
              }), (0, f.jsx)(as, {
                isHeaderVisible: c,
                packListItems: a[v]?.subNavItems || [],
                selectPackCard: T
              })]
            })
          })
        },
        _s = "rockstargames-sites-legacyc54c374409e11d1429ce99457cbf7441",
        ps = e => {
          let {
            children: a,
            data: s,
            onPageUpdate: t,
            page: i,
            className: c
          } = e;
          return (0, f.jsx)("a", {
            href: "#",
            className: i === s.page ? `rockstargames-sites-legacyc0eebf4f915ff9f5cc362e22d6d7d976 ${c??""}` : "",
            onClick: e => {
              e.preventDefault(), t(i)
            },
            children: a
          })
        },
        ks = e => {
          let {
            data: a,
            onPageUpdate: s,
            className: t
          } = e;
          if (1 === a.pageCount) return null;
          const i = Array.from(new Array(Math.min(a.pageCount, 8)), ((e, s) => s + Math.min(Math.max(a.pageCount - 8, 1), Math.max(2, a.page - 4))));
          return (0, f.jsxs)("div", {
            className: `rockstargames-sites-legacya626faab2a5a03e3466dda5c79960575 ${t??""}`,
            children: [a.pageCount > 8 ? (0, f.jsxs)(f.Fragment, {
              children: [(0, f.jsx)(ps, {
                data: a,
                onPageUpdate: s,
                page: 1,
                children: "1"
              }), 2 !== i[0] ? (0, f.jsx)("div", {
                className: _s,
                children: "..."
              }) : ""]
            }) : "", i.map((e => (0, f.jsx)(ps, {
              data: a,
              onPageUpdate: s,
              page: e,
              className: t,
              children: e
            }, e))), a.pageCount > 8 ? (0, f.jsxs)(f.Fragment, {
              children: [i.slice(-1)[0] + 1 < a.pageCount ? (0, f.jsx)("div", {
                className: _s,
                children: "..."
              }) : "", (0, f.jsx)(ps, {
                data: a,
                onPageUpdate: s,
                page: a.pageCount,
                children: a.pageCount
              })]
            }) : ""]
          })
        };
      var bs = s(77616);
      const vs = e => {
          let {
            children: a
          } = e;
          const {
            parallaxController: s
          } = (0, bs.oZ)();
          return (0, l.useLayoutEffect)((() => {
            if (!s) return;
            const e = setInterval((() => {
              s.update()
            }), 500);
            return () => clearInterval(e)
          }), [s]), a
        },
        hs = {
          parallaxWrapper: "rockstargames-sites-legacydb1ab316d17367d31cf94cdde25e463a",
          large: "rockstargames-sites-legacyd520d28c6e4e797aea99f61c89ad2bd8",
          medium: "rockstargames-sites-legacyf008365ee42d37e24e606107346b1c83",
          small: "rockstargames-sites-legacycb5937d1a102ac4a66c4e373e6253946"
        },
        ys = e => {
          let {
            scrollAxis: a = "vertical",
            size: s = "",
            style: t = {},
            children: i
          } = e;
          return (0, f.jsx)(bs.qK, {
            scrollAxis: a,
            children: (0, f.jsx)(vs, {
              children: (0, f.jsx)("div", {
                className: (0, I.classList)(hs.parallaxWrapper, hs[s]),
                style: t,
                "data-context": "parallax-wrapper",
                children: i ? i.map(((e, s) => (0, l.cloneElement)(e, {
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
        xs = e => {
          let {
            layers: a = [],
            displayClass: s = "",
            style: t = {}
          } = e;
          const i = (0, I.useGenerateCdnSource)();
          if (!a || !a[0]?.image) return null;
          const c = a.map((e => ({
            ...e,
            props: {
              style: {
                ...e.style
              }
            },
            style: void 0,
            image: i(e?.image ?? null)
          })));
          return (0, f.jsx)(bs.Sr, {
            className: (0, I.classList)("rockstargames-sites-legacyb8c85703a3c76902e49a61a6afcb81bc", s),
            layers: c,
            style: t
          })
        },
        Ns = "rockstargames-sites-legacyc4aa8e5d29b433c400796d0c493a9a4d",
        ws = e => {
          let {
            minOffset: a = 0,
            maxOffset: s = 0,
            scrollAxis: t = "vertical",
            displayClass: i = "",
            style: c = {},
            children: r
          } = e;
          return "horizontal" === t ? (0, f.jsx)(bs.mw, {
            x: [a, s],
            className: (0, I.classList)(Ns, i),
            styleOuter: c,
            children: r
          }) : (0, f.jsx)(bs.mw, {
            y: [a, s],
            className: (0, I.classList)(Ns, i),
            styleOuter: c,
            children: r
          })
        },
        js = (e, a) => {
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
        Ss = e => s(e < 100 ? 84184 : e > 99 && e < 500 ? 69450 : e > 499 && e < 750 ? 31216 : 85724),
        Cs = (0, o.defineMessages)({
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
        Is = {
          pillBtn: "rockstargames-sites-legacye4a42eaa9bfb682035e61ac2e2a34515",
          selected: "rockstargames-sites-legacyeb889d8958be54a67b790d7529530986",
          scCharacterCard: "rockstargames-sites-legacydf279e92086c0d3c96905b3a91b369ed",
          scAvatar: "rockstargames-sites-legacyc1890feda663c93b0f767890394cbdcf",
          scCharNames: "rockstargames-sites-legacye79d7f5515617d849d7d13cd4ff048ce",
          scCharacterStats: "rockstargames-sites-legacyc721f3aeef9e5ae6b98adca1253e4709",
          scUserName: "rockstargames-sites-legacyeabff0cc0139013f5a60fea6f48c56f6",
          scRpLevel: "rockstargames-sites-legacyb1f87c58a800ad546200fbf17e029f35",
          scRpIcon: "rockstargames-sites-legacyf1e0bcba6214698c490b8201bbd850b7"
        },
        Ts = (0, o.withIntl)((e => {
          let {
            characterData: a
          } = e;
          const t = (0, o.useIntl)(),
            {
              platform: i,
              platformUsername: c,
              mugshotUrl: r,
              stats: n
            } = a,
            [d, m] = (0, l.useState)(r),
            g = js(i, "large");
          return (0, f.jsxs)("div", {
            className: Is.scCharacterCard,
            children: [(0, f.jsx)("div", {
              className: Is.scAvatar,
              "data-size": "small",
              children: (0, f.jsx)("img", {
                src: d,
                alt: t.formatMessage(Cs.profile_selector_mugshot, {
                  userName: c
                }),
                onError: () => {
                  m(s(71084))
                }
              })
            }), (0, f.jsx)("div", {
              className: Is.scCharacterStats,
              children: (0, f.jsxs)("div", {
                className: Is.scCharNames,
                children: [(0, f.jsx)("img", {
                  src: g.src,
                  alt: g.alt
                }), (0, f.jsx)("div", {
                  className: Is.scUserName,
                  "data-size": "small",
                  children: c
                }), (0, f.jsx)("div", {
                  className: Is.scRp,
                  children: (0, f.jsxs)("div", {
                    className: Is.scRpLevel,
                    children: [(0, f.jsx)("img", {
                      className: Is.scRpIcon,
                      src: Ss(n.overview.rank.value),
                      alt: t.formatMessage(Cs.profile_selector_rp_icon)
                    }), (0, f.jsx)("span", {
                      children: a.stats.overview.rank.value
                    })]
                  })
                })]
              })
            })]
          })
        }), Na),
        Ms = (0, k.makeVarNamespace)("@rockstargames/components/profile-switcher"),
        Ls = Ms("languageSelectorOpenedReactive", !1),
        Es = e => Ls(e),
        Bs = Ms("activeSubNavIdReactive", -1),
        Ps = e => Bs(e),
        zs = Ms("subNavExtraHeightReactive", -1),
        Vs = e => zs(e),
        $s = Ms("scNavOpenedReactive", !0),
        Ds = e => $s(e),
        As = Ms("charListHiddenReactive", !0),
        Fs = e => As(e),
        Os = () => {
          const e = (0, k.useReactiveVar)(Ls),
            a = (0, k.useReactiveVar)(Bs),
            s = (0, k.useReactiveVar)(zs),
            t = (0, k.useReactiveVar)($s),
            i = (0, k.useReactiveVar)(As);
          return (0, l.useEffect)((() => {
            i || (e && Es(!1), t && (Ds(!1), Ps(-1)))
          }), [i]), (0, l.useEffect)((() => {
            !e && i && (t || Ds(!0))
          }), [e, i]), (0, l.useMemo)((() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: Es,
            activeSubNavId: a,
            setActiveSubNavId: Ps,
            subNavExtraHeight: s,
            setSubNavExtraHeight: Vs,
            scNavOpened: t,
            setScNavOpened: Ds,
            charListHidden: i,
            setCharListHidden: Fs
          })), [e, a, s, t, i])
        };
      var Rs = s(69760),
        Us = s.n(Rs),
        Gs = s(9860);
      const Hs = {
          event: "account_menu_click",
          element_placement: "Account Menu"
        },
        Ws = e => ({
          text: e.formatMessage(Cs.sc_link_help),
          target: "_self",
          ga: {
            ...Hs,
            text: Cs.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          children: [{
            text: e.formatMessage(Cs.sc_link_support),
            location: {
              domain: xa.U.support,
              path: "/"
            },
            target: "_self",
            ga: {
              ...Hs,
              text: Cs.sc_link_support.defaultMessage
            },
            dataTestId: "supportLink"
          }, {
            text: e.formatMessage(Cs.sc_link_legal),
            location: {
              domain: xa.U.www,
              path: "/legal"
            },
            target: "_self",
            ga: {
              ...Hs,
              text: Cs.sc_link_legal.defaultMessage
            },
            dataTestId: "legalLink"
          }, {
            text: e.formatMessage(Cs.sc_link_privacy_policy),
            location: {
              domain: xa.U.www,
              path: "/privacy"
            },
            target: "_self",
            ga: {
              ...Hs,
              text: Cs.sc_link_privacy_policy.defaultMessage
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: e.formatMessage(Cs.sc_link_cookies_policy),
            location: {
              domain: xa.U.www,
              path: "/cookies"
            },
            target: "_self",
            ga: {
              ...Hs,
              text: Cs.sc_link_cookies_policy.defaultMessage
            },
            dataTestId: "cookiesPolicyLink"
          }, {
            text: e.formatMessage(Cs.sc_link_cookies_settings),
            onClickCallback: e => {
              e.preventDefault(), window.OneTrust?.ToggleInfoDisplay()
            },
            target: "_self",
            ga: {
              ...Hs,
              text: Cs.sc_link_cookies_settings.defaultMessage
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: e.formatMessage(Cs.sc_link_do_not_sell_my_information),
            location: {
              domain: xa.U.www,
              path: "/ccpa"
            },
            target: "_self",
            ga: {
              ...Hs,
              text: Cs.sc_link_do_not_sell_my_information.defaultMessage
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        }),
        qs = {
          pillBtn: "rockstargames-sites-legacyeb30ffefc0c8fef449ca5348a2702622",
          selected: "rockstargames-sites-legacycd058a755e77eeb55cf666fa43fadf75",
          scSubLink: "rockstargames-sites-legacyfdaa918acc06706cbe191dedd40974af",
          scLink: "rockstargames-sites-legacycbc80932118c48d8ec14448d8913d068"
        },
        Xs = e => {
          let {
            text: a,
            target: s,
            href: t,
            location: i,
            ga: c,
            dataTestId: r,
            isSubLink: n,
            hasNotifications: l = !1,
            onClickCallback: o = (() => {}),
            tabIndex: d,
            reloadDocument: g = !1
          } = e;
          const {
            track: u
          } = (0, O.useGtmTrack)(), _ = (0, xa.c)();
          let p = t;
          i && (p = i.domain === _.currentSite?.site ? i.path : `https://${_.sites[i.domain]}.rockstargames.com${i.path}`);
          const k = {
            ...c,
            link_url: p
          };
          return (0, f.jsxs)(m.Link, {
            className: n ? qs.scSubLink : qs.scLink,
            "data-testid": r || "menuLink",
            title: a,
            to: p,
            target: s,
            rel: "noreferrer",
            reloadDocument: g,
            tabIndex: d,
            onClick: e => {
              u(k), o(e)
            },
            children: [a, l && (0, f.jsx)("span", {
              className: qs.scLinkNotification
            })]
          })
        },
        Ks = e => {
          let {
            id: a,
            text: s,
            target: t,
            href: i,
            location: c,
            ga: r,
            hasNotifications: n = !1,
            dataTestId: o,
            children: d = [],
            activeSubNavId: m,
            setActiveSubNavId: g,
            setSubNavExtraHeight: u,
            reloadDocument: _ = !1,
            onClickCallback: p = (() => {})
          } = e;
          const {
            windowWidth: k,
            windowHeight: b
          } = (0, F.useWindowResize)(), {
            track: v
          } = (0, O.useGtmTrack)(), {
            navOpen: h
          } = (0, O.useRockstarUserState)(), y = (0, l.useRef)(null), [x, N] = (0, l.useState)(0), [w, j] = (0, l.useState)(0), [S, C] = (0, l.useState)(!0);
          return (0, l.useEffect)((() => {
            m !== a && !1 === S && C(!0), m === a && C(!1)
          }), [m]), (0, l.useEffect)((() => {
            if (!y.current) return;
            N(y?.current?.scrollHeight);
            const e = window.getComputedStyle(y.current);
            if (e) {
              let a = 16 * parseInt(e.getPropertyValue("--scSubNav-opened-margin"), 10);
              Number.isNaN(a) && (a = 0), j(a)
            }
          }), [y, k, b]), d.length > 0 ? (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsxs)("button", {
              className: "rockstargames-sites-legacyaf10b4154b04475edc11366934576ecd",
              type: "button",
              "data-testid": o || "menuButton",
              title: s,
              tabIndex: h ? 0 : -1,
              "data-children-hidden": S,
              onClick: e => {
                e.stopPropagation(), v(r), m === a ? (g(-1), u(0)) : (g(a), u(x + w + w))
              },
              children: [(0, f.jsx)("span", {
                className: "rockstargames-sites-legacyfd722aa4f6d05656ee6e37f952bd13d0",
                children: s
              }), (0, f.jsx)("span", {
                className: "rockstargames-sites-legacybe674f27adc299eab348b49f71429b71"
              })]
            }, s), (0, f.jsx)("nav", {
              className: "rockstargames-sites-legacyff1911053a3515534dd825554a85909e",
              ref: y,
              "aria-hidden": S,
              style: {
                height: S ? 0 : `${x}px`
              },
              children: d.map((e => (0, f.jsx)(Xs, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: S || !h ? -1 : 0
              })))
            })]
          }) : (0, f.jsx)(Xs, {
            text: s,
            target: t,
            href: i,
            location: c,
            ga: r,
            hasNotifications: n,
            dataTestId: o,
            isSubLink: !1,
            onClickCallback: p,
            tabIndex: h ? 0 : -1,
            reloadDocument: _
          })
        },
        Ys = e => {
          let {
            sc: a
          } = e;
          const {
            windowWidth: s,
            windowHeight: t
          } = (0, F.useWindowResize)(), i = (0, o.useIntl)(), {
            languageSelectorOpened: c,
            setLanguageSelectorOpened: r,
            activeSubNavId: n,
            setActiveSubNavId: d,
            subNavExtraHeight: g,
            setSubNavExtraHeight: u
          } = Os(), {
            setSelectedCharacterTuple: _,
            navOpen: p
          } = (0, O.useRockstarUserState)(), k = (0, F.useLocale)(), b = (0, F.toScLocaleString)(k), [v, h] = (0, l.useState)(""), y = (0, m.useLocation)(), x = `${a.login}?returnUrl=${v}&lang=${b}`, N = `${a.signup}&returnUrl=${v}&lang=${b}`, w = (0, l.useMemo)((() => (0, xa.c)()), []), j = (0, l.useMemo)((() => {
            const e = ((e, a, s) => [{
              text: e.formatMessage(Cs.sc_link_sign_in),
              href: a,
              ga: {
                event: "cta_login",
                text: Cs.sc_link_sign_in.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "loginLink"
            }, {
              text: e.formatMessage(Cs.sc_link_join_social_club),
              href: s,
              ga: {
                event: "cta_signup",
                text: Cs.sc_link_join_social_club.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "signUpLink"
            }, Ws(e)])(i, x, N);
            return e
          }), [i, x, N, w]), [S, C] = (0, l.useState)(0), I = (0, l.createRef)(), T = () => {
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
          return (0, l.useEffect)((() => {
            const e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            h(e)
          }), [y]), (0, l.useEffect)((() => {
            _(!1)
          }), []), (0, l.useEffect)((() => {
            T(), Us()((() => {
              setTimeout(T, 0)
            }), 300)
          }), [s, t]), (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsx)("nav", {
              className: "rockstargames-sites-legacyb1552e1f97b08ee4337f78fa4486ffac",
              children: (0, f.jsx)("div", {
                className: "rockstargames-sites-legacyc5bc9bec611f9f0514176014ce835e1e",
                "data-logged-in": "false",
                ref: I,
                style: {
                  "--scNavWrap-max-height": `${g+S}px`
                },
                children: j.map((e => (0, l.createElement)(Ks, {
                  ...e,
                  activeSubNavId: n,
                  setActiveSubNavId: d,
                  setSubNavExtraHeight: u,
                  key: e.text
                })))
              })
            }), (0, f.jsx)("div", {
              className: "rockstargames-sites-legacya6c12c94e8656e88958552d645fe51fe",
              style: {
                visibility: p ? null : "hidden"
              },
              children: (0, f.jsx)(Gs.LanguageSelector, {
                theme: "sc-menu",
                languageSelectorOpened: c,
                setLanguageSelectorOpened: e => {
                  d(-1), r(e)
                },
                defaultMessage: "Select a Language"
              })
            })]
          })
        },
        Qs = e => {
          let {
            characterData: a,
            setMobileCardWidth: t,
            tabIndex: i
          } = e;
          const c = (0, o.useIntl)(),
            {
              currentCharId: r,
              setCurrentCharId: n
            } = (0, O.useRockstarUserState)(),
            {
              track: d
            } = (0, O.useGtmTrack)(),
            m = (0, l.createRef)(),
            {
              platform: g,
              platformUsername: u,
              mugshotUrl: _,
              stats: p
            } = a,
            [k, b] = (0, l.useState)(_),
            [v] = (0, l.useState)(a.index),
            h = js(g, "large"),
            y = r === a.index;
          return (0, l.useEffect)((() => {
            m.current && t && t(m?.current?.offsetWidth)
          }), [m]), (0, f.jsxs)("button", {
            className: "rockstargames-sites-legacyd76e785563451a50438064ac368aae4b",
            type: "button",
            "aria-hidden": y,
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
            tabIndex: i,
            children: [(0, f.jsx)("div", {
              className: "rockstargames-sites-legacybbdf69fe97471593355fc51ec9a6d13a",
              "data-size": "small",
              children: (0, f.jsx)("img", {
                src: k,
                alt: c.formatMessage(Cs.profile_selector_mugshot, {
                  userName: u
                }),
                onError: () => {
                  b(s(71084))
                }
              })
            }), (0, f.jsxs)("div", {
              className: "rockstargames-sites-legacyc0dc303ef48255c09faa4ad2f4e953e7",
              children: [(0, f.jsxs)("div", {
                className: "rockstargames-sites-legacye9fbbbcea66d86dbd58b8548a5f6bea8",
                children: [(0, f.jsx)("img", {
                  src: h.src,
                  alt: h.alt
                }), (0, f.jsx)("div", {
                  className: "rockstargames-sites-legacyb3726d8b480695f64fddc723c6f35205",
                  "data-size": "small",
                  children: u
                })]
              }), (0, f.jsx)("div", {
                className: "rockstargames-sites-legacya5e3df42966a50f3dd88bbcb57536617",
                children: (0, f.jsxs)("div", {
                  className: "rockstargames-sites-legacya6776312350028898320ba59145a39be",
                  children: [(0, f.jsx)("img", {
                    className: "rockstargames-sites-legacyb266652910ad34c0e8e097b212a958f0",
                    src: Ss(p.overview.rank.value),
                    alt: c.formatMessage(Cs.profile_selector_rp_icon)
                  }), (0, f.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                })
              })]
            })]
          })
        },
        Zs = {
          pillBtn: "rockstargames-sites-legacyd9464c4b4d92881abe5578988bd68af7",
          selected: "rockstargames-sites-legacybc0a950bffee0ee9e28213912da51427",
          scProfileDetails: "rockstargames-sites-legacyb954455f6ff25f2350e1a0960ba97d3e",
          scAvatar: "rockstargames-sites-legacyc15a60de0fc8df4960d84ab96caa8a62",
          scAvatarPlatform: "rockstargames-sites-legacya8f66dccf33827dc81107cae3196cfbe",
          scProfileStats: "rockstargames-sites-legacyc91f8623fa10edbeba8c79c7d6b26a28",
          scNames: "rockstargames-sites-legacyda83fc27513bcac6a8a31eadc89b1c2c",
          scTagsNames: "rockstargames-sites-legacyd7ce73d22672e2e2f59e9193c2632531",
          scUserName: "rockstargames-sites-legacyd5814836ce152affaa22d226819b5b12",
          scCrewName: "rockstargames-sites-legacyb7777817be6d756cc2d1585c1377734c",
          scCrewRankBar: "rockstargames-sites-legacya581d240520cf347e5ff5f6a62a36a97",
          scCrewRankBarItem: "rockstargames-sites-legacybdb056c03ef06b99d69426c87cec67c5",
          scProgress: "rockstargames-sites-legacydc3020fbe81a916a8da4719ef052c278",
          scRpLevel: "rockstargames-sites-legacyb2ea0e0d19182355913368bf7be016b8",
          scRpIcon: "rockstargames-sites-legacyf17a712b43b5234c07dc44f674433cf6",
          scMoney: "rockstargames-sites-legacyf14849be516f588e1bc9e252a109c76f",
          scCash: "rockstargames-sites-legacyb3e35cdc6557f7c3886700245af352dd",
          scBank: "rockstargames-sites-legacyec696aafed90a7a4c69dc53da0a5bb36"
        },
        Js = e => {
          let {
            character: a,
            platformTag: t
          } = e;
          const {
            data: i
          } = (0, O.useRockstarUser)(), {
            track: c
          } = (0, O.useGtmTrack)(), r = (0, o.useIntl)(), [n, d] = (0, l.useState)([]), [m, g] = (0, l.useState)(null), [u, _] = (0, l.useState)(null), [p, k] = (0, l.useState)(!1), [b, v] = (0, l.useState)(-1), [h, y] = (0, l.useState)([]), [x, N] = (0, l.useState)(0), w = s(71084), [j, S] = (0, l.useState)("0"), [C, I] = (0, l.useState)("0"), T = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), M = () => {
            E((0, f.jsx)("img", {
              src: w,
              alt: r.formatMessage(Cs.profile_selector_mugshot, {
                userName: i.nickname
              })
            }))
          }, [L, E] = (0, l.useState)((0, f.jsx)("img", {
            className: Zs.scAvatarImg,
            src: a.mugshotUrl,
            alt: r.formatMessage(Cs.profile_selector_mugshot, {
              userName: i.nickname
            }),
            onError: M
          }));
          (0, l.useEffect)((() => {
            d(i.crews ?? [])
          }), [i]), (0, l.useEffect)((() => {
            E((0, f.jsx)("img", {
              src: a.mugshotUrl,
              alt: i.nickname,
              onError: M
            })), S(T(a.stats.overview.bank.value)), I(T(a.stats.overview.cash.value)), N(parseInt(a.stats.overview.rank.value))
          }), [a, i]), (0, l.useEffect)((() => {
            n && n.forEach((e => {
              !0 === e.isPrimary && (g(e.crewTag), _(e.crewColour), v(e.rankOrder), k(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && k(!0))
            }))
          }), [n]), (0, l.useEffect)((() => {
            const e = [];
            if (!p && b > -1)
              for (let a = 5; a > b; a -= 1) e.push((0, f.jsx)("div", {
                className: Zs.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== u ? u : ""
                }
              }, `crewrankbar-${a}`));
            y(e)
          }), [b, p, u]);
          const B = e => {
            e.stopPropagation(), c({
              event: "character_selector_profile_click",
              event_action: "profile_click",
              event_category: "character_selector",
              event_label: t.alt,
              link_url: void 0
            })
          };
          return (0, f.jsxs)("div", {
            className: Zs.scProfileDetails,
            onClick: B,
            onKeyUp: B,
            role: "button",
            tabIndex: -1,
            children: [(0, f.jsxs)("div", {
              className: Zs.scAvatar,
              children: [L, (0, f.jsx)("div", {
                className: Zs.scAvatarPlatform,
                "data-platform": a.platform,
                children: (0, f.jsx)("img", {
                  src: t.src,
                  alt: t.alt
                })
              })]
            }), (0, f.jsxs)("div", {
              className: Zs.scProfileStats,
              children: [(0, f.jsx)("div", {
                className: Zs.scNames,
                children: (0, f.jsxs)("div", {
                  className: Zs.scTagsNames,
                  children: [(0, f.jsx)("span", {
                    className: Zs.scUserName,
                    children: a.platformUsername
                  }), m && (0, f.jsxs)("span", {
                    className: Zs.scCrewName,
                    "data-arrow-tag": p,
                    children: [m, !p && (0, f.jsx)("div", {
                      className: Zs.scCrewRankBar,
                      children: h
                    })]
                  })]
                })
              }), (0, f.jsxs)("div", {
                className: Zs.scProgress,
                children: [(0, f.jsxs)("div", {
                  className: Zs.scRpLevel,
                  children: [(0, f.jsx)("img", {
                    className: Zs.scRpIcon,
                    src: Ss(x),
                    alt: r.formatMessage(Cs.profile_selector_rp_icon)
                  }), (0, f.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                }), (0, f.jsxs)("div", {
                  className: Zs.scMoney,
                  children: [(0, f.jsxs)("span", {
                    className: Zs.scCash,
                    children: ["$", C]
                  }), (0, f.jsxs)("span", {
                    className: Zs.scBank,
                    children: ["$", j]
                  })]
                })]
              })]
            })]
          })
        },
        et = (e, a) => {
          const [s, t] = (0, l.useState)(0);
          return (0, l.useEffect)((() => {
            if (e.current) {
              const {
                current: s
              } = e, i = s.getBoundingClientRect(), {
                width: c
              } = i;
              let r = c;
              if (!0 === a) {
                const e = window.getComputedStyle(s);
                r += parseInt(e.marginLeft, 10) + parseInt(e.marginRight, 10)
              }
              t(r)
            }
          }), [e]), s
        },
        at = e => {
          let {
            dragThreshold: a = 80,
            interactionDelay: s = 1e3,
            mobileGutterWidth: t = 17,
            slideChangeCallback: i = null,
            slideClickCallback: c = null,
            children: r = [],
            disablePager: n = !1,
            disableSwiper: o = !1
          } = e;
          const d = (0, l.createRef)(),
            m = et(d, !1),
            [g, u] = (0, l.useState)(!1),
            [_, p] = (0, l.useState)(0),
            [k, b] = (0, l.useState)(0),
            [v, h] = (0, l.useState)([t]),
            [y, x] = (0, l.useState)(v[0]),
            [N, w] = (0, l.useState)(252),
            [j, S] = (0, l.useState)(0),
            [C, I] = (0, l.useState)([]),
            [T, M] = (0, l.useState)([]),
            [L, E] = (0, l.useState)(!1),
            B = e => {
              if (!0 === g || !0 === o) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              b(a)
            },
            P = e => {
              if (!0 === g || 0 === k || !0 === o) return;
              const s = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                t = s > k ? 1 : -1,
                c = Math.abs(k - s);
              c > a ? (t > 0 ? (() => {
                if (!0 === g) return;
                u(!0);
                const e = _ - 1 < 0 ? 0 : _ - 1;
                p(e), x(v[e]), i && i(e)
              })() : (() => {
                if (!0 === g) return;
                u(!0);
                let e = _ + 1 >= v.length ? v.length - 1 : _ + 1;
                e < 0 && (e = 0), p(e), x(v[e]), i && i(e)
              })(), b(0)) : x(v[_] + c * t)
            },
            z = () => {
              !0 !== g && !0 !== o && (u(!0), !0 !== g && (x(v[_]), b(0)))
            };
          return (0, l.useEffect)((() => {
            const e = [];
            r.forEach((() => {
              e.push((0, l.createRef)())
            })), I(e)
          }), [r]), (0, l.useEffect)((() => {
            if (C.length < 1) return;
            w(C[0]?.current?.clientWidth || 0);
            const e = C[0]?.current.firstChild,
              a = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              s = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            S(s + a)
          }), [C]), (0, l.useEffect)((() => {
            !1 !== g && setTimeout((() => {
              u(!1)
            }), s)
          }), [g, s]), (0, l.useEffect)((() => {
            h(r.map(((e, a) => (e => {
              let a = 0;
              const s = r.length;
              return 1 === s ? .5 * m - .5 * N - 2 * t + j : (0 === e && (a = t - e * N), e === s - 1 && s > 1 && (a = s * N * -1 + (m - (t - j))), e > 0 && e < s - 1 && (a = e * N * -1 + (.5 * m - .5 * N + .5 * j)), a)
            })(a)))), 1 === r.length ? E(!0) : E(!1)
          }), [d.current, r, m]), (0, l.useEffect)((() => {
            const e = (a = _, r.map(((e, s) => {
              const t = {
                active: !1
              };
              return s === a && (t.active = !0), t
            })));
            var a;
            M(e)
          }), [r, _]), (0, l.useEffect)((() => {
            !0 !== n && !0 !== o || x(v[0])
          }), [o, n, v]), (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsx)("div", {
              className: "rockstargames-sites-legacyab70c3f9c67ecd69d19216a5f4de5049",
              ref: d,
              onTouchStart: B,
              onTouchMove: P,
              onTouchEnd: z,
              onMouseDown: B,
              onMouseMove: P,
              onMouseUp: z,
              onClick: () => {
                null !== c && c(_)
              },
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, f.jsx)("div", {
                className: "rockstargames-sites-legacya93be1084a583cafa7f3f97a8ce8a6be",
                "data-interaction-blocked": g,
                "data-single-item": L,
                style: {
                  transform: L ? null : `translateX(${y}px)`
                },
                children: r.map(((e, a) => (0, f.jsx)("div", {
                  className: "rockstargames-sites-legacyc013369a930e076d1729d086fb51903e",
                  ref: C[a],
                  children: e
                }, `csItem-${e?.props?.characterData?.mugshotUrl}`)))
              })
            }), T.length > 1 && !1 === n && (0, f.jsx)("div", {
              className: "rockstargames-sites-legacyda8cfef07bf44e9a44839e2723ec61bb",
              children: T.map((e => (0, f.jsx)("div", {
                className: "rockstargames-sites-legacyfe87ea0922034610a1f6cb3a4edbe195",
                "data-active": e.active
              }, e.mugshotUrl)))
            })]
          })
        },
        st = {
          pillBtn: "rockstargames-sites-legacyaa374e2f7806799cb073de8a9b2a2e7d",
          selected: "rockstargames-sites-legacyd402a10393179390abdaf3684a02f1ba",
          scProfile: "rockstargames-sites-legacydde9053261079ebfb5d95975239fe87d",
          scCharacterSelector: "rockstargames-sites-legacyc47913b4c686bbbc9a0c8ee6ed7666bf",
          scCharacterSelectBtn: "rockstargames-sites-legacya4f9dafe071f5c9a825bf57348835309",
          open: "rockstargames-sites-legacyb1f5708c9a0e35681c54a58f04661c1c",
          scCharacterList: "rockstargames-sites-legacya1d1104b9df769c9237fa1a06633ffe7",
          scNav: "rockstargames-sites-legacya326b0feea8d083ed2265571010d79d3",
          scLanguageSelector: "rockstargames-sites-legacyd19713d1362bcd54ff539975adbb2ecc",
          scNavHeader: "rockstargames-sites-legacybb74821846f47bbe5fc0896364efd520",
          scNavWrap: "rockstargames-sites-legacya7f1e2d78519eaf099bd43c6ad07abc9"
        },
        tt = (0, F.withTranslations)((e => {
          let {
            sc: a,
            charListHidden: s,
            hideCharacterList: t,
            refCharacterListDesktop: i,
            menuPadding: c,
            longCharList: r,
            setLongCharList: n,
            isMobileMode: d,
            setIsMobileMode: g
          } = e;
          const {
            windowWidth: u,
            windowHeight: _
          } = (0, F.useWindowResize)(), p = (0, o.useIntl)(), {
            languageSelectorOpened: b,
            setLanguageSelectorOpened: v,
            activeSubNavId: h,
            setActiveSubNavId: y,
            subNavExtraHeight: x,
            setSubNavExtraHeight: N,
            scNavOpened: w,
            setScNavOpened: j
          } = Os(), [S, C] = (0, l.useState)(""), I = (0, m.useLocation)(), {
            lsSettings: T
          } = (0, F.useRockstarWebLSSettings)(), {
            track: M
          } = (0, O.useGtmTrack)(), L = (0, k.useRockstarTokenPing)(), {
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
          } = (0, O.useRockstarUserState)(), [G, H] = (0, l.useState)(null), [W, q] = (0, l.useState)(null), [X, K] = (0, l.useState)(!1), [Y, Q] = (0, l.useState)(!1), [Z, J] = (0, l.useState)(0), ee = (0, l.createRef)(), ae = et(ee, !1), se = (0, l.createRef)(), [te, ie] = (0, l.useState)(0), [ce, re] = (0, l.useState)([]), [ne, le] = (0, l.useState)(244), oe = (0, l.useMemo)((() => (0, xa.c)()), []), de = (0, l.useMemo)((() => ((e, a, s, t, i) => [{
            text: e.formatMessage(Cs.sc_link_activity_feed),
            location: {
              domain: xa.U.socialClub,
              path: "/"
            },
            target: "_self",
            ga: {
              ...Hs,
              text: Cs.sc_link_activity_feed.defaultMessage
            },
            dataTestId: "activityFeedLink"
          }, {
            text: e.formatMessage(Cs.sc_link_account),
            target: "_self",
            dataTestId: "accountButton",
            children: [{
              text: e.formatMessage(Cs.sc_link_view_my_profile),
              href: s.profile_link,
              target: "_self",
              ga: {
                ...Hs,
                text: Cs.sc_link_view_my_profile.defaultMessage
              },
              dataTestId: "viewMyProfileLink"
            }, {
              text: e.formatMessage(Cs.sc_link_messages),
              location: {
                domain: xa.U.socialClub,
                path: "/message"
              },
              target: "_self",
              ga: {
                ...Hs,
                text: Cs.sc_link_messages.defaultMessage
              },
              dataTestId: "messagesLink"
            }, {
              text: e.formatMessage(Cs.sc_link_game_activation),
              location: {
                domain: xa.U.socialClub,
                path: "/activate"
              },
              target: "_self",
              ga: {
                ...Hs,
                text: Cs.sc_link_game_activation.defaultMessage
              },
              dataTestId: "gameActivationLink"
            }]
          }, {
            text: e.formatMessage(Cs.sc_link_notifications),
            location: {
              domain: xa.U.socialClub,
              path: "/notifications"
            },
            target: "_self",
            hasNotifications: t,
            ga: {
              ...Hs,
              text: Cs.sc_link_notifications.defaultMessage,
              location: {
                domain: xa.U.socialClub,
                path: "/notifications"
              }
            },
            dataTestId: "notificationsLink"
          }, {
            text: e.formatMessage(Cs.sc_link_crews),
            location: {
              domain: xa.U.socialClub,
              path: `/member/${s.nickname}/crews`
            },
            target: "_self",
            ga: {
              ...Hs,
              text: Cs.sc_link_crews.defaultMessage
            },
            dataTestId: "crewsLink"
          }, {
            text: e.formatMessage(Cs.sc_link_friends),
            target: "_self",
            dataTestId: "friendsButton",
            children: [{
              text: e.formatMessage(Cs.sc_link_my_friends),
              location: {
                domain: xa.U.socialClub,
                path: `/member/${s.nickname}/friends`
              },
              target: "_self",
              ga: {
                ...Hs,
                text: Cs.sc_link_my_friends.defaultMessage
              },
              dataTestId: "myFriendsLink"
            }, {
              text: e.formatMessage(Cs.sc_link_import_friends),
              location: {
                domain: xa.U.socialClub,
                path: "/friends/import"
              },
              target: "_self",
              ga: {
                ...Hs,
                text: Cs.sc_link_import_friends.defaultMessage
              },
              dataTestId: "importFriendsLink"
            }, {
              text: e.formatMessage(Cs.sc_link_find_friends),
              location: {
                domain: xa.U.socialClub,
                path: "/members"
              },
              target: "_self",
              ga: {
                ...Hs,
                text: Cs.sc_link_import_friends.defaultMessage
              },
              dataTestId: "findFriendsLink"
            }]
          }, {
            text: e.formatMessage(Cs.sc_link_settings),
            location: {
              domain: xa.U.socialClub,
              path: "/settings"
            },
            target: "_self",
            ga: {
              ...Hs,
              text: Cs.sc_link_settings.defaultMessage
            },
            dataTestId: "settingsLink"
          }, Ws(e), {
            text: e.formatMessage(Cs.sc_link_log_out),
            href: `${a.logout}?returnUrl=${i}`,
            target: "_self",
            reloadDocument: !0,
            ga: {
              ...Hs,
              text: Cs.sc_link_log_out.defaultMessage
            },
            dataTestId: "logoutButton"
          }])(p, a, E, V, S, window)), [p, a, E, V, S, oe]), me = () => {
            Q(c + ne * Z < ae)
          }, ge = () => {
            if (se.current) {
              const {
                current: e
              } = se, a = e?.scrollHeight, s = window.getComputedStyle(e);
              if (s) {
                let e = 16 * parseInt(s.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), ie(a + e)
              } else ie(a)
            }
          };
          return (0, l.useEffect)((() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            oe.currentSite?.site === xa.U.socialClub && (e = encodeURIComponent("/")), C(e)
          }), [I]), (0, l.useEffect)((() => {
            re(E.characters[P] ?? [])
          }), [E, P]), (0, l.useEffect)((() => {
            E && U(E)
          }), [E]), (0, l.useEffect)((() => {
            const e = E?.characters.gtao;
            if (null !== B && !e.length) return void R(!1);
            if (null == z || !e.length) return;
            const a = e?.[z] ?? e?.[0] ?? null;
            R(!!a?.platform && [a.platform, a.characterSlot])
          }), [z, E, B]), (0, l.useEffect)((() => {
            (async () => {
              if (!E?.id) return;
              const {
                count: e
              } = await (0, F.coreScApiFetch)("notification/count", {
                pingBearer: L
              });
              A(e > 0)
            })()
          }), [E]), (0, l.useEffect)((() => {
            me()
          }), [ne]), (0, l.useEffect)((() => {
            t(!0), g(u < 768), g(u < 768 || _ < 649)
          }), [u, _]), (0, l.useEffect)((() => {
            let e = ce.length - 1;
            e < 0 && (e = 0), J(e);
            const a = ce.length > 0 ? ce[z] ?? ce[0] : null;
            if (!a) return;
            const s = null !== a ? js(a.platform, "large") : null;
            q(s), H(a), ce.length > 1 ? K(!0) : K(!1), n(ce.length - 1 > 3)
          }), [z, ce]), (0, l.useEffect)((() => {
            me()
          }), [Z, d, u, ce]), (0, l.useEffect)((() => {
            ge(), Us()((() => {
              setTimeout(ge, 0)
            }), 300)
          }), [u, _]), (0, l.useEffect)((() => {
            const e = T?.currentCharId ?? 0;
            e !== z && D(Math.max(0, Math.min(e, ce.length - 1)))
          }), [ce, T]), (0, f.jsxs)(f.Fragment, {
            children: [null !== G && "gtao" === P && (0, f.jsxs)("div", {
              className: st.scProfile,
              tabIndex: -1,
              "aria-label": p.formatMessage(Cs.profile_selector_profile_card),
              children: [(0, f.jsx)(Js, {
                s: st,
                character: G,
                platformTag: W
              }), !0 === X && (0, f.jsxs)("div", {
                className: st.scCharacterSelector,
                children: [(0, f.jsx)("button", {
                  className: st.scCharacterSelectBtn,
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
                    children: (0, f.jsx)(o.FormattedMessage, {
                      ...Cs.profile_selector_switch_character
                    })
                  })
                }), !1 === d && (0, f.jsx)("div", {
                  className: st.scCharacterList,
                  "data-long-list": r,
                  "aria-hidden": s,
                  ref: i,
                  children: ce.map((e => (0, f.jsx)(Qs, {
                    tabIndex: s ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: le
                  }, e.mugshotUrl)))
                }), !0 === d && (0, f.jsx)("div", {
                  className: st.scCharacterList,
                  "data-single-item": 2 === ce.length,
                  "data-swiper-disabled": Y,
                  "aria-hidden": s,
                  ref: ee,
                  children: (0, f.jsx)(at, {
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
                    children: ce.filter(((e, a) => a !== z)).map((e => (0, l.createElement)(Qs, {
                      characterData: e,
                      setMobileCardWidth: le,
                      key: e.mugshotUrl,
                      tabIndex: s ? -1 : 0
                    })))
                  })
                })]
              })]
            }), (0, f.jsxs)("nav", {
              className: st.scNav,
              "aria-hidden": !$,
              children: [(0, f.jsx)("button", {
                className: st.scNavHeader,
                type: "button",
                "data-opened": w,
                "data-nav-opened": $,
                tabIndex: w ? -1 : 0,
                onClick: e => {
                  e.stopPropagation(), w || j(!0)
                },
                "data-testid": "playerButton",
                children: (0, f.jsx)("span", {
                  children: E.nickname
                })
              }), (0, f.jsx)("div", {
                className: st.scNavWrap,
                "data-opened": w,
                "data-logged-in": "true",
                ref: se,
                style: {
                  "--scNavWrap-max-height": `${te+x}px`
                },
                children: de.map(((e, a) => (0, l.createElement)(Ks, {
                  ...e,
                  id: a,
                  activeSubNavId: h,
                  setActiveSubNavId: y,
                  setSubNavExtraHeight: N,
                  key: e.text
                })))
              })]
            }), (0, f.jsx)("div", {
              className: st.scLanguageSelector,
              style: {
                visibility: $ ? null : "hidden"
              },
              children: (0, f.jsx)(Gs.LanguageSelector, {
                theme: "sc-menu",
                languageSelectorOpened: b,
                setLanguageSelectorOpened: v
              })
            })]
          })
        })),
        it = {
          scMenu: "rockstargames-sites-legacyebc4c779cfe9d0b7cfd678424e57370c",
          pillBtn: "rockstargames-sites-legacyf333ffbc5b9f9d571b81be0a7235190d",
          selected: "rockstargames-sites-legacye3bdabe09c3d1b98b61f3d0484209912",
          navOpen: "rockstargames-sites-legacyff929155ac480a9cfa5540dfd3e70ae9",
          dragHandle: "rockstargames-sites-legacyba4968108b922dd8165c6e53557f5f2e",
          dragHandleBtn: "rockstargames-sites-legacyd362ba3eeee50f90600a413c05761431",
          scOverlay: "rockstargames-sites-legacyd8e443f5d0d9171449f5f1042f80aa17"
        },
        ct = (0, o.withIntl)((() => {
          const {
            windowHeight: e
          } = (0, F.useWindowResize)(), a = (0, o.useIntl)(), {
            languageSelectorOpened: t,
            setLanguageSelectorOpened: i,
            setActiveSubNavId: c,
            scNavOpened: r,
            setScNavOpened: n,
            charListHidden: d,
            setCharListHidden: m
          } = Os(), [g, u] = (0, l.useState)(!1), {
            setBodyIsScrollable: _
          } = (0, F.useBodyScrollable)(), {
            navHidden: p = !1
          } = (0, k.useState)(), {
            loggedIn: b
          } = (0, O.useRockstarUser)(), {
            currentCharId: v,
            navOpen: h,
            setNavOpen: y,
            userData: x
          } = (0, O.useRockstarUserState)(), {
            track: N
          } = (0, O.useGtmTrack)(), [w, j] = (0, l.useState)(!1), S = (0, k.useReactiveVar)(O.scConfig), C = (0, l.useRef)(), [I, T] = (0, l.useState)(0), M = (0, l.createRef)(), [L, E] = (0, l.useState)(!1), [B, P] = (0, l.useState)(0), [z, V] = (0, l.useState)(!1), {
            mutateLSSettings: $,
            lsSettings: D
          } = (0, F.useRockstarWebLSSettings)(), A = (0, l.useCallback)((e => {
            m(e), C.current && !0 === e && (C.current.scrollTop = 0)
          }), [C]);
          return (0, l.useEffect)((() => {
            null !== v && D.currentCharId !== v && $({
              key: "currentCharId",
              value: v
            }), !1 === b ? $({
              key: "currentCharId",
              value: null
            }) : b && !x && N({
              event: "account_synced"
            })
          }), [v, b]), (0, l.useEffect)((() => {
            C.current && (!1 === d && !1 === w && (C.current.style.height = `${C.current.scrollHeight}px`), !0 === d && (C.current.style.height = null))
          }), [d, C, w]), (0, l.useEffect)((() => {
            const e = () => {
                y(!1), A(!0)
              },
              a = a => {
                "Escape" === a.code && e()
              };
            return document.addEventListener("click", e), document.addEventListener("keyup", a), () => {
              document.removeEventListener("click", e), document.removeEventListener("keyup", a)
            }
          }), []), (0, l.useEffect)((() => {
            y(!1), A(!0)
          }), [p]), (0, l.useEffect)((() => {
            if (M.current) {
              const {
                current: e
              } = M, a = window.getComputedStyle(e);
              T(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }), [M]), (0, l.useEffect)((() => {
            _(!L || !h)
          }), [h, L]), (0, l.useEffect)((() => {
            V(window.navigator.userAgent.includes("Mac"))
          }), []), (0, l.useEffect)((() => {
            M.current && u(M?.current?.scrollHeight >= e)
          }), [M, e]), (0, l.useEffect)((() => {
            h || (c(-1), i(!1))
          }), [h]), (0, l.useEffect)((() => {
            t && (d || A(!0), r && (n(!1), c(-1)))
          }), [t]), (0, l.useEffect)((() => {
            r && (t && i(!1), d || A(!0))
          }), [r]), null === b ? null : (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsxs)("div", {
              className: [it.scMenu, h ? it.navOpen : ""].join(" "),
              "data-logged-in": b,
              "data-mac-browser": z,
              "data-scroll-mode": g,
              ref: M,
              "aria-hidden": !h,
              children: [(0, f.jsx)("button", {
                className: it.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  P(a)
                },
                onTouchMove: e => {
                  if (0 === B) return;
                  const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(B - a) > 1 && (P(0), y(!1))
                },
                children: (0, f.jsx)("img", {
                  className: it.dragHandle,
                  src: s(60328),
                  alt: a.formatMessage(Cs.sc_menu_drag_handle)
                })
              }), b ? (0, f.jsx)(tt, {
                sc: S,
                charListHidden: d,
                hideCharacterList: A,
                refCharacterListDesktop: C,
                menuPadding: I,
                longCharList: w,
                setLongCharList: j,
                isMobileMode: L,
                setIsMobileMode: E
              }) : (0, f.jsx)(Ys, {
                sc: S,
                navOpen: h
              })]
            }), (0, f.jsx)("div", {
              className: [it.scOverlay, h ? it.navOpen : ""].join(" "),
              "data-logged-in": b
            })]
          })
        }), Na),
        rt = s(71084),
        nt = s(29314),
        lt = (0, o.withIntl)((e => {
          let {
            setOtherHeaderDropdowns: a
          } = e;
          const s = (0, o.useIntl)(),
            {
              data: t
            } = (0, O.useRockstarUser)(),
            {
              charactersNeeded: i,
              currentCharId: c,
              navOpen: r,
              setNavOpen: n
            } = (0, O.useRockstarUserState)(),
            {
              track: d
            } = (0, O.useGtmTrack)(),
            [m, g] = (0, l.useState)(null),
            [u, _] = (0, l.useState)(!1),
            [p, k] = (0, l.useState)(null),
            [b, v] = (0, l.useState)(!1),
            [h, y] = (0, l.useState)([]);
          (0, l.useEffect)((() => {
            y(t.characters[i] ?? [])
          }), [t, i]);
          const x = (0, l.useCallback)((e => {
            e.stopPropagation(), n(!r), d({
              event: "account_menu_click",
              element_placement: "Account Menu",
              text: r ? "close" : "open"
            })
          }), [r]);
          return (0, l.useEffect)((() => {
            const e = t?.id ?? !1,
              a = e ? (h?.[c]?.mugshotUrl ?? t?.avatar) || rt : nt,
              s = js(h?.[c]?.platform, "small") ?? null;
            k(s), g(a), _(e), v(!!h?.[c]?.mugshotUrl)
          }), [t, h, c, rt, nt]), (0, f.jsxs)("button", {
            className: "rockstargames-sites-legacydc519cef2feb621e4715bd3fcdf09791",
            "data-img-set": b,
            "aria-label": s.formatMessage(Cs.sc_menu_toggle),
            type: "button",
            onClick: e => x(e),
            "data-testid": "avaterMenuButton",
            children: [(0, f.jsx)("img", {
              className: "rockstargames-sites-legacyce75eaa6d65692d36b60d31f3f660ff0",
              src: m || "",
              onError: () => {
                g(rt)
              },
              alt: t?.nickname || ""
            }), u && null !== p && (0, f.jsx)("img", {
              className: "rockstargames-sites-legacyaaf21e74a659089f743bb160bdf95046",
              src: p.src,
              alt: p.alt
            }), u && (0, f.jsx)("div", {
              "data-ui-name": "avatar",
              className: "rockstargames-sites-legacycf6b9e7404c64067bdfef9b79e9eb287",
              "data-platform": h?.[c]?.platform ?? null
            })]
          })
        }), Na),
        ot = {
          pillBtn: "rockstargames-sites-legacyb03cc125f63972f13ae84119af852edc",
          selected: "rockstargames-sites-legacyfbcf46d7ef0b32e64b374eee6e3cda3e",
          promoModule: "rockstargames-sites-legacya586d11bf592ca821d65db7660518322",
          promoModuleImage: "rockstargames-sites-legacyccd749d613ceb73aedb825d77d22cd0b",
          gradient: "rockstargames-sites-legacye4f178a3d1e3dfef8b42f73eabd9919e",
          promoModuleContentContainer: "rockstargames-sites-legacyd8348a62030f7e2f3c7a53cf67bef0f1",
          left: "rockstargames-sites-legacye56a5b7d9a696ea8ca340cc9b67998fc",
          right: "rockstargames-sites-legacyc84d09e0c4466d20792d5a9016a00236",
          promoModuleTextContent: "rockstargames-sites-legacybf34746d222495ab8e30cede8de42d71"
        },
        dt = e => {
          let {
            backgroundColor: a,
            brands: s = [],
            description: t = "",
            ctaLabel: i = "Click here",
            ctaLink: c = "https://rockstargames.com",
            gradient: r = !0,
            image: n,
            imageOrientation: o = "right",
            title: d = ""
          } = e;
          const [m, g] = (0, l.useState)(!1), {
            ref: u,
            inView: _
          } = (0, W.useInView)({
            threshold: .6
          }), {
            track: p
          } = (0, O.useGtmTrack)(), k = {
            "--promo-background": a ?? "var(--black-200)",
            "--promo-image": `url(${(0,I.useGetCdnSource)(n)})` ?? 0,
            "--promo-order": "left" === o ? "row" : "row-reverse"
          };
          return (0, l.useEffect)((() => {
            _ && !m && (p({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: "promo module",
              element_placement: "promo module"
            }), g(!0))
          }), [_]), (0, f.jsxs)(Ge.motion.div, {
            className: ot.promoModule,
            style: k,
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
              className: [ot.promoModuleImage, r ? ot.gradient : "", "left" === o ? ot.left : ot.right].join(" ")
            }), (0, f.jsxs)("div", {
              className: ot.promoModuleContentContainer,
              children: [(0, f.jsx)(j, {
                brands: s,
                className: ot.promoModuleBrands
              }), (0, f.jsxs)("div", {
                className: ot.promoModuleTextContent,
                children: [d && (0, f.jsx)("h3", {
                  children: d
                }), t && (0, f.jsx)("p", {
                  children: t
                })]
              }), i && (0, f.jsx)(E, {
                to: c,
                text: i,
                onClick: () => {
                  p({
                    event: "cta_other",
                    event_category: "cta",
                    event_action: "other",
                    event_label: i,
                    element_placement: "promo module",
                    link_url: c,
                    text: i
                  })
                }
              })]
            })]
          })
        };
      var mt = s(1532);
      const gt = {
          rating: "rockstargames-sites-legacya1271bbed316bf567eb67e78d2143808",
          withDescriptors: "rockstargames-sites-legacycba248edc2520d3f1ad195a8495dc1f8",
          withOutDescriptors: "rockstargames-sites-legacyff919f7a60b854473b61075a671deb6a",
          text: "rockstargames-sites-legacyd47cd2b7c7415cb44cddef00b1c9b35f"
        },
        ft = (0, o.defineMessages)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      (0, F.importAll)(s(52884));
      const ut = la((0, o.withIntl)((e => {
          let {
            descriptors: a = null,
            footer: t = null,
            href: i,
            img: c = null,
            titleSlug: r = null,
            style: n = {},
            className: d
          } = e;
          const [m, g] = (0, l.useState)(!1), {
            inView: _
          } = (0, W.useInView)({
            threshold: .6
          }), [p, b] = (0, l.useState)({
            img_rating: c,
            rating_descriptors: a,
            rating_footer: t,
            url_rating: i
          }), {
            track: v
          } = (0, O.useGtmTrack)(), h = (0, o.useIntl)(), {
            data: y
          } = (0, k.useQuery)(mt.GameData, {
            variables: {
              titleSlug: r
            },
            skip: !r
          });
          if ((0, l.useEffect)((() => {
              y && b(y?.game)
            }), [y]), (0, l.useEffect)((() => {
              _ && !m && p.img_rating && (v({
                event: "page_section_impression",
                event_action: "impression",
                event_category: "page_section",
                event_label: "rating",
                element_placement: "rating"
              }), g(!0))
            }), [_]), !p.img_rating) return null;
          const x = !!p.rating_descriptors;
          return (0, f.jsxs)("div", {
            className: [gt.rating, x ? gt.withDescriptors : gt.withOutDescriptors, d || ""].join(" "),
            style: (0, F.safeStyles)(n),
            children: [(0, f.jsx)(u, {
              to: p.url_rating,
              target: "_blank",
              children: (0, f.jsx)("img", {
                alt: h.formatMessage(ft.components_ratings_link_alt, {
                  rating: (N = p.img_rating, N.replace(/_/g, " ").split(".")[0].toUpperCase())
                }),
                src: s(7e4)(`./${p.img_rating}`)
              })
            }), x && (0, f.jsxs)("div", {
              className: gt.text,
              children: [(0, f.jsx)("p", {
                className: gt.descriptors,
                dangerouslySetInnerHTML: {
                  __html: p?.rating_descriptors?.split(/<br\s?\/?>/).join(", ") || ""
                }
              }), p.rating_footer && (0, f.jsx)("hr", {}), p.rating_footer && (0, f.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: p.rating_footer.replace(/ \//g, ", ")
                }
              })]
            })]
          });
          var N
        }), Na)),
        _t = {
          responsiveFlexBox: "rockstargames-sites-legacycef355ba53827b9ec44655c80b247b2e",
          responsiveFlexItem: "rockstargames-sites-legacya8f5d10f689c3d40c8378e3ae8a07517",
          responsiveImage: "rockstargames-sites-legacybee8268780b292e5bc0da0b497e2c28f"
        },
        pt = e => {
          let {
            children: a,
            className: s,
            style: t
          } = e;
          return (0, f.jsx)("div", {
            className: [_t.responsiveFlexBox, void 0 !== s ? s : ""].join(" "),
            style: t,
            children: a
          })
        },
        kt = {
          responsiveFlexItem: "rockstargames-sites-legacyae579f6183cf73c897e68c8aae5c9d9d"
        },
        bt = e => {
          let {
            children: a,
            className: s,
            style: t
          } = e;
          return (0, f.jsx)("div", {
            className: [kt.responsiveFlexItem, void 0 !== s ? s : ""].join(" "),
            style: t,
            children: a
          })
        },
        vt = {
          responsiveGridBox: "rockstargames-sites-legacya28c0b7a44e1a2d5fb257161ce36a24f",
          responsiveGridItem: "rockstargames-sites-legacybeddf36313a28976090b5a8b04d2594a"
        },
        ht = e => {
          let {
            children: a,
            cols: s,
            className: t,
            rows: i,
            style: c
          } = e;
          const r = c ? {
            ...c
          } : {};
          return void 0 !== s && (r.gridTemplateColumns = `repeat(${s}, 1fr)`), void 0 !== i && (r.gridTemplateRows = `repeat(${i}, 1fr)`), (0, f.jsx)("div", {
            className: [vt.responsiveGridBox, void 0 !== t ? t : ""].join(" "),
            style: r,
            children: a
          })
        },
        yt = {
          responsiveGridBox: "rockstargames-sites-legacya39e7c7140ada0ab28537c8c901e816f",
          responsiveGridItem: "rockstargames-sites-legacybe7a0966e2f0457c1172ac9da99020c6"
        },
        xt = e => {
          let {
            children: a,
            className: s,
            style: t
          } = e;
          return (0, f.jsx)("div", {
            className: [yt.responsiveGridItem, void 0 !== s ? s : ""].join(" "),
            style: t,
            children: a
          })
        },
        Nt = {
          responsiveImage: "rockstargames-sites-legacye31b43dce2e720669fb90bf539d22197"
        },
        wt = e => {
          let {
            src: a,
            className: s = "",
            animate: t,
            ariaLabel: i,
            style: c = {}
          } = e;
          const [r, n] = (0, F.usePreloadImg)(a);
          return r ? (c.backgroundImage = `url(${a})`, (0, f.jsx)("div", {
            role: "img",
            "aria-label": i ?? "R* Games",
            className: [Nt.responsiveImage, t ? Nt.animateBox : "", s].join(" "),
            style: {
              ...c,
              "--aspect-ratio": n.width / n.height
            }
          })) : null
        },
        jt = {
          responsiveSection: "rockstargames-sites-legacyfb7094e43a166c19080ccfe92ed7420d",
          maxWidth: "rockstargames-sites-legacybdc35dbaa55c59ddd2831fd3ac05c5a7"
        },
        St = e => {
          let {
            children: a,
            className: s,
            style: t,
            maxWidth: i
          } = e;
          return (0, f.jsx)("section", {
            className: [jt.responsiveSection, void 0 !== s ? s : ""].join(" "),
            style: t,
            children: i ? (0, f.jsx)("div", {
              className: jt.maxWidth,
              children: a
            }) : a
          })
        },
        Ct = () => (0, f.jsx)(u, {
          className: "rockstargames-sites-legacyba0c20f78999975dfb8d9cff0de44b34",
          alt: "Rockstar Games Home",
          to: "/"
        }),
        It = () => {
          const {
            pathname: e
          } = (0, m.useLocation)();
          return (0, l.useEffect)((() => {
            window.scrollTo(0, 0)
          }), [e]), null
        },
        Tt = (0, l.forwardRef)(((e, a) => {
          const {
            threshold: s,
            callback: t,
            children: i,
            requireUser: c
          } = e, {
            track: r
          } = (0, O.useGtmTrack)(c), [n, o] = (0, l.useState)(a?.current);
          return (0, l.useEffect)((() => {
            a?.current && o(a.current)
          }), [a]), ((e, a, s) => {
            const [t, i] = (0, l.useState)({
              scrollDepths: e,
              scrollY: 0
            }), {
              scrollDepths: c,
              scrollY: r
            } = t;
            (0, l.useEffect)((() => {
              "undefined" != typeof window && 0 !== window.pageYOffset && i((e => ({
                ...e,
                scrollY: window.pageYOffset
              })))
            }), []), (0, l.useEffect)((() => {
              i({
                scrollDepths: e,
                scrollY: 0
              })
            }), [window.location.pathname]);
            const n = (0, l.useCallback)((() => {
              const e = document.documentElement,
                r = document.body,
                l = s?.scrollTop || e.scrollTop || r.scrollTop,
                o = s?.scrollHeight || e.scrollHeight || r.scrollHeight,
                {
                  clientHeight: d
                } = e,
                m = l / (o - d) * 100;
              if (c) {
                const e = Math.min(...c, o);
                if (m >= e) {
                  const t = c.filter((a => a !== e));
                  0 === t.length && (s ?? window).removeEventListener("scroll", n), a && a({
                    scrollY: e,
                    scrollPercent: m,
                    remainingDepths: t
                  }), i({
                    scrollY: e,
                    scrollDepths: t
                  })
                }
              } else i({
                ...t,
                scrollY: m
              })
            }), [c, s, a]);
            (0, l.useEffect)((() => {
              if ("undefined" == typeof window) return;
              const e = s ?? window;
              return e.addEventListener("scroll", n), () => e.removeEventListener("scroll", n)
            }), [n])
          })(s, (e => {
            let {
              scrollY: a
            } = e;
            r({
              event: "page_scroll",
              event_category: "page_scroll",
              event_action: a,
              scroll_depth: a
            }), "function" == typeof t && t(a)
          }), n), i
        })),
        Mt = (0, F.withTranslations)((e => {
          let {
            t: a
          } = e;
          const [s] = (0, l.useState)(""), t = (0, m.useNavigate)(), i = (0, k.useMutateState)();
          return (0, f.jsxs)("form", {
            action: "#",
            className: "rockstargames-sites-legacyb82052ce07e004075e77261c373bfc50",
            onSubmit: e => {
              e.preventDefault(), i({
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
        Lt = {
          skeleton: "rockstargames-sites-legacyf963a1ae95f7f5ac2c5192c3f357b6dc",
          pulse: "rockstargames-sites-legacye00ed88d692bbfc1a301dcfc61a077a9",
          gen9Hero: "rockstargames-sites-legacydb0b80177710d337d93bddb97b8a7dea"
        },
        Et = e => {
          let {
            skeleton: a
          } = e;
          return a ? (0, f.jsx)("div", {
            className: [Lt.skeleton, Lt[a]].join(" ")
          }) : null
        },
        Bt = (0, o.defineMessages)({
          components_track_list_title: {
            id: "components_track_list_title",
            defaultMessage: "Tracklist"
          }
        }),
        Pt = {
          bodySmall: "rockstargames-sites-legacyc048aacaedc7fb642f38c7f163c193e3"
        },
        zt = e => {
          let {
            track: a,
            artist: s
          } = e;
          return (0, f.jsxs)("div", {
            className: Pt.track,
            children: [(0, f.jsx)("p", {
              children: a
            }), (0, f.jsx)("p", {
              className: Pt.bodySmall,
              children: s
            })]
          })
        },
        Vt = (0, o.withIntl)((e => {
          let {
            children: a
          } = e;
          return (0, f.jsxs)("div", {
            className: "rockstargames-sites-legacye6c19f2cdd68a4352e248a8324383aa2",
            children: [(0, f.jsx)("h4", {
              className: "rockstargames-sites-legacycd3895fbae93ba04f1401487f6e6eddf",
              children: (0, f.jsx)(o.FormattedMessage, {
                ...Bt.components_track_list_title
              })
            }), (0, f.jsx)("div", {
              className: "rockstargames-sites-legacyef0cde8b15ded961605237d0e8328a9b",
              children: (0, f.jsx)("div", {
                className: "rockstargames-sites-legacybdd54186db17d27b3daebc4b9d58e09a",
                children: l.Children.map(l.Children.toArray(a), (e => (0, f.jsx)(zt, {
                  ...e?.props
                })))
              })
            })]
          })
        }), Na),
        $t = "rockstargames-sites-legacyeca98eb0b5b84a0c9a2e6d952545a2d5",
        Dt = "rockstargames-sites-legacyd3d0b4ecd3bddba96c73f49fcca34ed8",
        At = {
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
        Ft = e => {
          let {
            title: a = "thumbnail gallery",
            thumbsPerView: s = 3,
            loop: t = !1,
            navigation: i = !1,
            slideChildren: c = [],
            variants: r = {
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
            track: o
          } = (0, O.useGtmTrack)(), [d, m] = (0, l.useState)([ra.O4, ra.Hj, ra.eM]), [g, u] = (0, l.useState)(null), [_, p] = (0, l.useState)(null);
          return (0, l.useEffect)((() => {
            const e = [ra.O4, ra.Hj, ra.eM];
            i && e.push(ra._2), m(e)
          }), [i]), (0, l.useEffect)((() => {
            if (!c) return;
            const e = c.map(((e, a) => (0, f.jsx)(P.Ky, {
              children: e
            }, Symbol(a).toString())));
            p(e)
          }), [c]), _ ? (0, f.jsxs)(Ge.motion.div, {
            className: "rockstargames-sites-legacyd4f245838b94234f21463a08a8112910",
            variants: r.parent,
            transition: n.parent,
            initial: "initial",
            animate: "animate",
            children: [(0, f.jsx)(Ge.motion.div, {
              className: $t,
              variants: r.main,
              transition: n.main,
              initial: "initial",
              animate: "animate",
              children: (0, f.jsx)(P.wx, {
                loop: t,
                navigation: i,
                pagination: {
                  clickable: !0
                },
                thumbs: {
                  swiper: g
                },
                modules: d,
                breakpoints: At,
                className: $t,
                onSlideNextTransitionEnd: () => {
                  o({
                    event_action: "next",
                    event_category: "carousel",
                    event: "carousel_next",
                    event_label: a?.toLowerCase() ?? ""
                  })
                },
                onSlidePrevTransitionEnd: () => {
                  o({
                    event_action: "previous",
                    event_category: "carousel",
                    event: "carousel_previous",
                    event_label: a?.toLowerCase() ?? ""
                  })
                },
                onSlideChangeTransitionEnd: () => {
                  o({
                    event_action: "swipe",
                    event_category: "carousel",
                    event: "carousel_swipe",
                    event_label: a?.toLowerCase() ?? ""
                  })
                },
                children: _
              })
            }), (0, f.jsx)(Ge.motion.div, {
              className: Dt,
              variants: r.thumbs,
              transition: n.thumbs,
              initial: "initial",
              animate: "animate",
              children: (0, f.jsx)(P.wx, {
                threshold: 50,
                onSwiper: u,
                loop: t,
                breakpoints: At,
                slidesPerView: s,
                freeMode: !0,
                watchSlidesProgress: !0,
                modules: d,
                className: Dt,
                children: _
              })
            })]
          }) : null
        };
      var Ot = s(504);
      const Rt = e => {
          let {
            id: a = null,
            ids: s = null,
            setTitleDataPath: t = null,
            sync: i = !1
          } = e;
          const c = s ?? [a],
            {
              data: r
            } = (0, k.useQuery)(Ot.TinaModulesInfo, {
              variables: {
                ids: c,
                sync: i
              },
              setTitleDataPath: t,
              skip: !c.length
            });
          return r?.tinaModulesInfo ?? null
        },
        Ut = la((e => {
          let {
            components: a = {},
            id: s = null,
            ids: t = null,
            skeleton: i
          } = e;
          const c = Rt({
            id: s,
            ids: t
          });
          if (!c) return (0, f.jsx)(Et, {
            skeleton: i
          });
          const r = c?.[0]?.tina;
          return r ? (0, f.jsx)(f.Fragment, {
            children: c.map(((e, s) => {
              let {
                tina: t
              } = e;
              return (0, f.jsx)(I.TinaParser, {
                components: a,
                tina: t,
                componentProps: {
                  tinaModulesInfo: c
                }
              }, s)
            }))
          }) : null
        })),
        Gt = e => {
          let {
            children: a,
            style: s,
            theme: t
          } = e;
          const [i, c] = (0, l.useState)(t);
          return (0, l.useEffect)((() => {
            t && c(t)
          }), [t]), (0, f.jsx)("div", {
            className: "rockstargames-sites-legacya3cc68ab0d512c3d8835ee9abb7a51c4",
            style: s,
            "data-theme": i,
            children: a
          })
        };
      var Ht = s(19168);
      const Wt = {
          pillBtn: "rockstargames-sites-legacyae56f3a5bf16f1160a0cbc040c7611fa",
          selected: "rockstargames-sites-legacyd7e34a082f54f22035320df51e8b4ed9",
          userVote: "rockstargames-sites-legacyfd538df1ac730062880ff9ca1292dcc4",
          info: "rockstargames-sites-legacydd49c22b2bd842d7e8c11ac45b3a536b",
          voteContent: "rockstargames-sites-legacyeb3c4c0d7629a1182cd138d3d2e6e081",
          loggedOutButtons: "rockstargames-sites-legacyd00b4195df0f175083f6aa2a7d847d72",
          voteButtons: "rockstargames-sites-legacyfdd10a481e3da0f8e9511b6a577052e0",
          downVote: "rockstargames-sites-legacyabdbb2656b0080d66eb4d39b7e1eb38d",
          upVote: "rockstargames-sites-legacyea25ed07e937e2efdce0b99d076fbbe1",
          voteButtonActive: "rockstargames-sites-legacyc31731d09d8118c6a82fe6edb193dc50"
        },
        qt = e => {
          let {
            description: a,
            foreign_id: s = document.location.pathname,
            foreign_type: t = "url",
            title: i
          } = e;
          const {
            track: c
          } = (0, O.useGtmTrack)(), {
            loggedIn: r
          } = (0, O.useRockstarUser)(), {
            refetch: n
          } = (0, k.useQuery)(Ht.UserGetVote, {
            skip: !0
          }), [o] = (0, k.useMutation)(Ht.UserCastVote), [d, m] = (0, l.useState)(null), g = (0, l.useCallback)((async e => {
            c({
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
              i = await o({
                variables: a
              });
            m(i?.data?.userCastVote?.vote ?? null)
          }), [s, t]);
          return (0, l.useEffect)((() => {
            (async () => {
              if (!r || !s || !t) return;
              const e = await n({
                foreign_id: s,
                foreign_type: t
              });
              m(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [s, t, r]), (0, f.jsx)("div", {
            className: Wt.userVote,
            children: (0, f.jsxs)("div", {
              className: Wt.voteContent,
              children: [(0, f.jsxs)("div", {
                className: Wt.info,
                children: [(0, f.jsx)("h3", {
                  children: i
                }), (0, f.jsx)("p", {
                  children: a
                })]
              }), (0, f.jsxs)("div", {
                className: [Wt.voteButtons, r ? "" : Wt.loggedOutButtons].join(" "),
                children: [(0, f.jsx)("button", {
                  onClick: () => g(!0),
                  className: [Wt.upVote, d ? Wt.voteButtonActive : ""].join(" "),
                  type: "button",
                  "aria-label": "Vote up"
                }), (0, f.jsx)("button", {
                  className: [Wt.downVote, !1 === d ? Wt.voteButtonActive : ""].join(" "),
                  onClick: () => g(!1),
                  type: "button",
                  "aria-label": "Vote down"
                })]
              })]
            })
          })
        },
        Xt = {
          carousel: "rockstargames-sites-legacyd8e71d378f6d4a968e8ac7d621e5f32a",
          text: "rockstargames-sites-legacya3f73d86b98d36a296bf8f621f1c340f",
          info: "rockstargames-sites-legacyf46d7fc75c302b1d3f4db01d8572bea8",
          active: "rockstargames-sites-legacyd26d1267cc02f841fee8a874d679aebd",
          title: "rockstargames-sites-legacya879dfc151f7cf8da6bf5642b51436bb",
          gameTitle: "rockstargames-sites-legacyb42d96124219141b4dbb454131b8c37b",
          videoTitle: "rockstargames-sites-legacyc5ff8983fae65d6a3d7c741360bd3606",
          cta: "rockstargames-sites-legacye25e320fda75ce4076c9fe68b540a2fa",
          track: "rockstargames-sites-legacydd0d39c46df512d3eff8ba48e469af0a",
          disableClick: "rockstargames-sites-legacyb169e1b67f64de28605dd5056a740584",
          items: "rockstargames-sites-legacydddc42d4babcaec339a7c1bd04420e6e",
          dragging: "rockstargames-sites-legacya7313e3ff4e99b5313f8698890d0dd8c",
          dots: "rockstargames-sites-legacye1d7433489996eb9fa890d452ebcb042"
        },
        Kt = (0, F.withLocale)((e => {
          let {
            locale: a,
            t: s,
            videos: t
          } = e;
          const {
            setBodyIsScrollable: i
          } = (0, F.useBodyScrollable)(), [c, r] = (0, l.useState)(0), [n, o] = (0, l.useState)(0), d = (0, l.useRef)(null), m = (0, l.useRef)(null);
          return (0, l.useEffect)((() => {
            if (!d.current || m.current) return;
            const e = new(p())(d.current);
            e.get("press").set({
              time: 0
            }), e.get("tap").set({
              time: 150
            });
            const a = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
              s = () => {
                r(c - 1 < 0 ? 0 : c - 1), o(0)
              },
              n = () => {
                const e = c + 1 >= t.length - 1 ? t.length - 1 : c + 1;
                r(e), o(0)
              },
              l = e => {
                o(e.isFinal ? 0 : e.deltaX), "panleft" !== e.additionalEvent && "panright" !== e.additionalEvent || !m.current?.classList.contains(Xt.dragging) || a() && i(!1)
              },
              g = () => {
                a() && i(!0), o(0)
              },
              f = e => {
                "press" === e.type && d.current?.classList.add(`${Xt.disableClick}`), "tap" === e.type && (d.current?.classList.remove(`${Xt.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
              },
              u = () => {
                a() && i(!0), d.current && d.current.classList.remove(`${Xt.disableClick}`)
              },
              _ = () => {
                a() && i(!0)
              };
            return m.current.addEventListener("transitionend", _), e.on("swiperight", s), e.on("swipeleft", n), e.on("pan", l), e.on("panend", g), e.on("press tap", f), e.on("pressup", u), () => {
              e.off("swiperight", s), e.off("swipeleft", n), e.off("pan", l), e.off("panend", g), e.off("press tap", f), e.off("pressup", u), m.current && m.current.removeEventListener("transitionend", _), o(0)
            }
          }), [d.current, c]), (0, f.jsxs)("section", {
            className: Xt.carousel,
            children: [(0, f.jsx)("div", {
              className: Xt.track,
              ref: d,
              children: (0, f.jsx)("div", {
                className: `${Xt.items} ${0!==n?Xt.dragging:""}`,
                ref: m,
                style: {
                  transform: `translateX(calc(-${100*c}% + ${n}px))`
                },
                children: t.map(((e, a) => (0, f.jsx)(u, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through screencap",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  className: c === a ? Xt.active : "",
                  role: "link",
                  title: e.title,
                  tabIndex: c === a ? 0 : -1,
                  children: (0, f.jsx)(ai, {
                    video: e,
                    size: 1280
                  })
                }, e.id)))
              })
            }), (0, f.jsxs)("footer", {
              children: [(0, f.jsx)("div", {
                className: Xt.text,
                children: t.map(((e, t) => (0, f.jsx)(u, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through footer",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  role: "link",
                  title: e.title,
                  tabIndex: c === t ? 0 : -1,
                  children: (0, f.jsxs)("div", {
                    className: [Xt.info, t === c ? Xt.active : ""].join(" "),
                    children: [(0, f.jsxs)("div", {
                      className: Xt.title,
                      children: [(0, f.jsx)("div", {
                        className: Xt.gameTitle,
                        children: `${e.game.title}${"fr_fr"===a?" ":""}`
                      }), (0, f.jsx)("h2", {
                        className: Xt.videoTitle,
                        children: `${e.title}`
                      })]
                    }), (0, f.jsx)(C, {
                      className: Xt.cta,
                      children: s("Watch Now")
                    })]
                  })
                }, e.id)))
              }), (0, f.jsx)("div", {
                className: Xt.dots,
                children: t.map(((e, a) => (0, f.jsx)("button", {
                  "aria-label": `Slide ${a+1}`,
                  "data-gtm-category": "Marquee",
                  "data-gtm-action": "Dot click",
                  "data-gtm-label": `Dot clicked to ${a}`,
                  onClick: () => r(a),
                  className: c === a ? Xt.active : "",
                  type: "button"
                }, e.id)))
              })]
            })]
          })
        })),
        Yt = (0, o.defineMessages)({
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
        Qt = {
          videoList: "rockstargames-sites-legacya77794780421c410f7ea55ed11ae6340",
          sectionHeader: "rockstargames-sites-legacyed556e2220733d99eae5df36ba41f9c7",
          arrowNav: "rockstargames-sites-legacyffeb6a2e829d49f94fea4ee7f5a0d2c8",
          items: "rockstargames-sites-legacyffe2263cdad39631ef304714ba89465d",
          trackWrapper: "rockstargames-sites-legacycbdef484a85e8f352a06609b394d4da7",
          track: "rockstargames-sites-legacyf3f263effe27f3c21f2ab822b9ee5dcf",
          dragging: "rockstargames-sites-legacyc20488bcdf3f23bdf0c6c5b283ae08f4",
          arrow: "rockstargames-sites-legacyc8012415449630a832011f490b9d2b72",
          previous: "rockstargames-sites-legacyf30d899a31937a4cf395643951224469",
          next: "rockstargames-sites-legacyd9d5a85633fc0f0b7f98219d735e6e05",
          disabled: "rockstargames-sites-legacyc806076a1e3e23c77528ee12e32771a3"
        },
        Zt = (0, o.withIntl)((e => {
          let {
            vids: a,
            games: s,
            title: t,
            gameTitleNecessary: i
          } = e;
          const c = (0, o.useIntl)(),
            r = void 0 !== s ? "games" : "videos",
            n = "videos" === r ? a : s.results,
            d = (0, l.useRef)(null),
            [m, g] = (0, l.useState)(0),
            [u, _] = (0, l.useState)(0),
            k = e => {
              const a = Math.ceil(n.length / m);
              let s = e;
              s < 0 ? s = 0 : s >= a - 1 && (s = a - 1), _(s)
            },
            [b, v] = (0, l.useState)(0);
          let h;
          return (0, l.useEffect)((() => {
            const e = () => {
              const e = e => window.matchMedia(`(max-width: ${e})`).matches;
              let a = 4;
              e("768px") ? a = 1 : e("990px") || e("1440px") ? a = 2 : e("1920px") && (a = 3), g(a)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [m]), (0, l.useEffect)((() => {
            if (d.current) {
              const e = new(p())(d.current),
                a = () => {
                  k(u - 1), v(0)
                },
                s = () => {
                  k(u + 1), v(0)
                },
                t = e => {
                  v(e.isFinal ? 0 : e.deltaX)
                },
                i = () => {
                  v(0)
                };
              return e.on("swiperight", a), e.on("swipeleft", s), e.on("pan", t), e.on("panend", i), () => {
                e.off("swiperight", a), e.off("swipeleft", s), e.off("pan", t), e.off("panend", i), v(0)
              }
            }
            return {}
          }), [d.current, u]), h = "games" === r ? (0, f.jsx)(f.Fragment, {
            children: s.results.map((e => (0, f.jsx)(ta, {
              game: e,
              dontOverrideTo: !0,
              to: `/videos?type=game&gameId=${e.id}`
            }, e.id)))
          }) : (0, f.jsx)(f.Fragment, {
            children: a.map((e => (0, f.jsx)(si, {
              video: e,
              gameTitleNecessary: i
            }, e.id)))
          }), (0, f.jsxs)("section", {
            className: Qt.videoList,
            children: [(0, f.jsxs)("h3", {
              className: Qt.sectionHeader,
              children: [t, (0, f.jsxs)("div", {
                className: Qt.arrowNav,
                children: [(0, f.jsx)("button", {
                  className: [Qt.arrow, Qt.previous, 0 === u ? Qt.disabled : ""].join(" "),
                  onClick: () => k(u - 1),
                  type: "button",
                  "aria-label": `${0===u?c.formatMessage(Yt.disabled_label)+", ":""}${c.formatMessage(Yt.previous_button_label)}`
                }), (0, f.jsx)("button", {
                  className: [Qt.arrow, Qt.next, u === Math.ceil(n.length / m) - 1 ? Qt.disabled : ""].join(" "),
                  onClick: () => k(u + 1),
                  type: "button",
                  "aria-label": `${u===Math.ceil(n.length/m)-1?c.formatMessage(Yt.disabled_label)+", ":""}${c.formatMessage(Yt.next_button_label)}`
                })]
              })]
            }), (0, f.jsx)("div", {
              className: Qt.items,
              children: (0, f.jsx)("div", {
                className: Qt.trackWrapper,
                children: (0, f.jsx)("div", {
                  className: [Qt.track, 0 !== b ? Qt.dragging : ""].join(" "),
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
        }), Na),
        Jt = (0, F.withTranslations)((e => {
          let {
            error: a,
            t: s,
            domain: t = ""
          } = e;
          console.error({
            error: a
          });
          let i = a?.message ?? s("error-404-new");
          i = s("error-404-new");
          const c = a?.code ?? 398,
            r = (0, l.useRef)(null);
          return (0, l.useEffect)((() => {
            r && r?.current && r.current.focus()
          }), [r]), (0, f.jsxs)("div", {
            className: "rockstargames-sites-legacyd988ce20c420c26fc5e455279bf94cb9",
            children: [(0, f.jsx)("h3", {
              tabIndex: -1,
              ref: r,
              children: `${i} (${c})`
            }), (0, f.jsx)(u, {
              to: "/",
              children: s("Home")
            }), "clr" !== t && (0, f.jsx)(Mt, {})]
          })
        })),
        ei = {
          videoPreview: "rockstargames-sites-legacyc6739cc628fda235abe2bafeb30ad7cf",
          card: "rockstargames-sites-legacyec6e68ffa1188155be202dfef3f92829",
          info: "rockstargames-sites-legacyab8da127fbcdb98f874bc3f1377669a2",
          title: "rockstargames-sites-legacye84fa4b2b140994c96a13607410d30a3",
          screencap: "rockstargames-sites-legacya322c3d2275cedd594a3b17800154066",
          screencapLoaded: "rockstargames-sites-legacyf68c57f5459778024e5a98918ae61ab2",
          gameTitle: "rockstargames-sites-legacydebff452a4923aded7de826c081bab5d"
        },
        ai = e => {
          let {
            video: a,
            size: s = 640
          } = e;
          const t = `${a.screencap}?im=Resize=${s}`,
            [i] = (0, F.usePreloadImg)(t);
          return (0, f.jsx)("div", {
            className: [ei.screencap, i ? ei.screencapLoaded : ""].join(" "),
            style: {
              background: `url(${t}) center/cover`
            }
          })
        },
        si = e => {
          let {
            gameTitleNecessary: a = !0,
            openInNewWindow: s = !1,
            video: t,
            size: i,
            toExplicit: c
          } = e;
          const r = c ?? `/videos/${t.id}`,
            n = {
              className: ei.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": r
            },
            l = (0, f.jsxs)("div", {
              className: ei.card,
              children: [(0, f.jsx)(ai, {
                video: t,
                size: i
              }), (0, f.jsxs)("div", {
                className: ei.info,
                children: [a ? (0, f.jsx)("div", {
                  className: ei.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: t.game.title
                  }
                }) : "", (0, f.jsx)("h5", {
                  className: ei.title,
                  dangerouslySetInnerHTML: {
                    __html: t.title
                  }
                })]
              })]
            });
          return s ? (0, f.jsx)("a", {
            href: r,
            target: "_blank",
            ...n,
            children: l
          }) : (0, f.jsx)(u, {
            to: r,
            ...n,
            children: l
          })
        };
      class ti extends l.Component {
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
          return null !== this.state.error.code ? (0, f.jsx)(Jt, {
            error: this.state.error
          }) : this.props.children
        }
      }
      const ii = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return function(s) {
            return (0, f.jsx)(ti, {
              header: a,
              children: (0, f.jsx)(e, {
                ...s
              })
            })
          }
        },
        ci = (0, l.forwardRef)(((e, a) => {
          const {
            children: s,
            tag: t = "div"
          } = e, i = Ge.m[t];
          return (0, f.jsx)(Ge.LazyMotion, {
            features: Ge.domAnimation,
            children: (0, f.jsx)(i, {
              ref: a,
              ...e,
              children: s
            })
          })
        })),
        ri = {
          visible: {
            opacity: 1
          },
          hidden: {
            opacity: 0
          }
        },
        ni = {
          ease: "easeIn",
          duration: .4
        },
        li = e => {
          let {
            children: a
          } = e;
          return (0, f.jsx)(Ge.motion.div, Object.assign({
            className: "rockstargames-sites-legacyf0ee4e641f1ac92151be887c9ebb8392",
            variants: ri,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: ni
          }, {
            children: a
          }))
        },
        oi = e => a => (0, f.jsx)(li, {
          children: (0, f.jsx)(e, Object.assign({}, a))
        }),
        di = {
          visible: {
            opacity: 1,
            y: 0
          },
          hidden: {
            opacity: 0,
            y: 40
          }
        },
        mi = {
          ease: "easeIn",
          duration: .75
        },
        gi = e => {
          let {
            children: a
          } = e;
          return (0, f.jsx)(Ge.motion.div, {
            className: "rockstargames-sites-legacya479a10c5475b17a0564b60fecf98c8b",
            variants: di,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: mi,
            children: a
          })
        },
        fi = e => a => (0, f.jsx)(gi, {
          children: (0, f.jsx)(e, {
            ...a
          })
        }),
        ui = {
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
        _i = {
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
        pi = function() {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "collapsed";
          return _i[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "imageMask"][e]
        };
      var ki = s(80544);
      const bi = JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[300,300,0]},"a":{"k":[0,0,0]},"s":{"k":[244,244,100]}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"k":[100,100]},"p":{"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"tm","s":{"k":[{"i":{"x":[0.439],"y":[1.016]},"o":{"x":[0.561],"y":[0.015]},"n":["0p439_1p016_0p561_0p015"],"t":5,"s":[100],"e":[0]},{"t":33.0000013441176}],"ix":1},"e":{"k":[{"i":{"x":[0.439],"y":[1.017]},"o":{"x":[0.561],"y":[0.016]},"n":["0p439_1p017_0p561_0p016"],"t":0,"s":[100],"e":[0]},{"t":30.0000012219251}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"},{"ty":"st","fillEnabled":true,"c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":16},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"}],"ip":0,"op":900.000036657751,"st":0,"bm":0,"sr":1}],"v":"4.5.3","ddd":0,"ip":1.00000004073083,"op":33.0000013441175,"fr":29.9700012207031,"w":600,"h":600}'),
        vi = JSON.parse('{"v":"5.7.3","fr":60,"ip":0,"op":64,"w":300,"h":300,"nm":"Dot_Loading","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"center","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":10,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":22,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":34,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.667,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"right","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":5,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":17,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":29,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.333,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":12,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":24,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0}],"markers":[]}'),
        hi = {
          SPINNING: "spinning",
          THREE_DOTS: "threeDots"
        },
        yi = e => {
          let a, {
            type: s = hi.SPINNING
          } = e;
          switch (s) {
            case hi.THREE_DOTS:
              a = vi;
              break;
            case hi.SPINNING:
            default:
              a = bi
          }
          return (0, f.jsx)(ki.c, {
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
        c: () => c
      });
      const t = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store"
        },
        i = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        c = () => {
          let e;
          const {
            location: a
          } = window, s = a.hostname.substring(0, a.hostname.indexOf(".rockstargames.com")), t = i.findIndex((a => Object.entries(a.sites).findIndex((a => {
            let [t, i] = a;
            return i === s && (e = {
              site: t,
              subDomain: i
            }, !0)
          })) >= 0)), c = i[t >= 0 ? t : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...c,
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

      function i(e, a) {
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
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var c = t[a] || new Set,
          r = new Set,
          n = new Set;
        for (c.forEach((function(e) {
            n.add(e)
          })); n.size > 0;) {
          var l = n;
          n = new Set, l.forEach((function(e) {
            r.has(e) || (r.add(e), (t[e] || new Set).forEach((function(e) {
              n.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var t = i(e, a);
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

      function i(e, a) {
        for (var s = 0; s < e.definitions.length; s++) {
          var t = e.definitions[s];
          if (t.name && t.name.value == a) return t
        }
      }

      function c(e, a) {
        var s = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var c = t[a] || new Set,
          r = new Set,
          n = new Set;
        for (c.forEach((function(e) {
            n.add(e)
          })); n.size > 0;) {
          var l = n;
          n = new Set, l.forEach((function(e) {
            r.has(e) || (r.add(e), (t[e] || new Set).forEach((function(e) {
              n.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var t = i(e, a);
          t && s.definitions.push(t)
        })), s
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), t[e.name.value] = a
        }
      })), e.exports = a, e.exports.UserGetVote = c(a, "UserGetVote"), e.exports.UserCastVote = c(a, "UserCastVote")
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

      function i(e, a) {
        for (var s = 0; s < e.definitions.length; s++) {
          var t = e.definitions[s];
          if (t.name && t.name.value == a) return t
        }
      }

      function c(e, a) {
        var s = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var c = t[a] || new Set,
          r = new Set,
          n = new Set;
        for (c.forEach((function(e) {
            n.add(e)
          })); n.size > 0;) {
          var l = n;
          n = new Set, l.forEach((function(e) {
            r.has(e) || (r.add(e), (t[e] || new Set).forEach((function(e) {
              n.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var t = i(e, a);
          t && s.definitions.push(t)
        })), s
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), t[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesList = c(a, "TinaModulesList"), e.exports.TinaModulesInfo = c(a, "TinaModulesInfo")
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

      function i(e, a) {
        for (var s = 0; s < e.definitions.length; s++) {
          var t = e.definitions[s];
          if (t.name && t.name.value == a) return t
        }
      }

      function c(e, a) {
        var s = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var c = t[a] || new Set,
          r = new Set,
          n = new Set;
        for (c.forEach((function(e) {
            n.add(e)
          })); n.size > 0;) {
          var l = n;
          n = new Set, l.forEach((function(e) {
            r.has(e) || (r.add(e), (t[e] || new Set).forEach((function(e) {
              n.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var t = i(e, a);
          t && s.definitions.push(t)
        })), s
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), t[e.name.value] = a
        }
      })), e.exports = a, e.exports.UserGetVote = c(a, "UserGetVote"), e.exports.UserCastVote = c(a, "UserCastVote")
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
      var i = {};

      function c(e) {
        return e.filter((function(e) {
          if ("FragmentDefinition" !== e.kind) return !0;
          var a = e.name.value;
          return !i[a] && (i[a] = !0, !0)
        }))
      }

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
      t.definitions = t.definitions.concat(c(s(73784).definitions)), t.definitions = t.definitions.concat(c(s(28540).definitions));
      var n = {};

      function l(e, a) {
        for (var s = 0; s < e.definitions.length; s++) {
          var t = e.definitions[s];
          if (t.name && t.name.value == a) return t
        }
      }
      t.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          r(e, a), n[e.name.value] = a
        }
      })), e.exports = t, e.exports.NewswireList = function(e, a) {
        var s = {
          kind: e.kind,
          definitions: [l(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var t = n[a] || new Set,
          i = new Set,
          c = new Set;
        for (t.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var r = c;
          c = new Set, r.forEach((function(e) {
            i.has(e) || (i.add(e), (n[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var t = l(e, a);
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

      function i(e) {
        var a = c(e);
        return s(a)
      }

      function c(e) {
        if (!s.o(t, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return t[e]
      }
      i.keys = function() {
        return Object.keys(t)
      }, i.resolve = c, e.exports = i, i.id = 13892
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
        "./rars_6.svg": 24264,
        "./usk_0.svg": 75084,
        "./usk_12.svg": 5384,
        "./usk_16.svg": 21804,
        "./usk_18.svg": 21367,
        "./usk_6.svg": 45568,
        "./usk_rp.svg": 46096,
        "./vaci_rp.png": 86616
      };

      function i(e) {
        var a = c(e);
        return s(a)
      }

      function c(e) {
        if (!s.o(t, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return t[e]
      }
      i.keys = function() {
        return Object.keys(t)
      }, i.resolve = c, e.exports = i, i.id = 52884
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
        "./rars_6.svg": 24264,
        "./usk_0.svg": 75084,
        "./usk_12.svg": 5384,
        "./usk_16.svg": 21804,
        "./usk_18.svg": 21367,
        "./usk_6.svg": 45568,
        "./usk_rp.svg": 46096,
        "./vaci_rp.png": 86616
      };

      function i(e) {
        var a = c(e);
        return s(a)
      }

      function c(e) {
        if (!s.o(t, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return t[e]
      }
      i.keys = function() {
        return Object.keys(t)
      }, i.resolve = c, e.exports = i, i.id = 7e4
    },
    6572: (e, a, s) => {
      var t = {
        "./bounty.png": 30752,
        "./collector.png": 40056,
        "./moonshiner.png": 41444,
        "./naturalist.png": 73268,
        "./trader.png": 74688
      };

      function i(e) {
        var a = c(e);
        return s(a)
      }

      function c(e) {
        if (!s.o(t, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return t[e]
      }
      i.keys = function() {
        return Object.keys(t)
      }, i.resolve = c, e.exports = i, i.id = 6572
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
    60328: e => {
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
    24264: e => {
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
//# sourceMappingURL=3fb8d8e9a526e71dfb3bf3d94ed9d6a6.js.map