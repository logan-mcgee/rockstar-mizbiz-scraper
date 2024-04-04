! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "94e91910-9659-46ef-ad0e-eb4f7d4b6fc2", e._sentryDebugIdIdentifier = "sentry-dbid-94e91910-9659-46ef-ad0e-eb4f7d4b6fc2")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta = self.webpackChunk_rockstargames_sites_gta || []).push([
  [480], {
    58568: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        A: () => u,
        AudioPlayer: () => N,
        Badge: () => j,
        Brands: () => w,
        Button: () => C,
        ButtonGroup: () => B,
        CalloutSection: () => J,
        Carousel: () => A,
        ConditionalBlock: () => H,
        CookieAB: () => ie,
        CountryInputField: () => se,
        Cta: () => le,
        DescriptionArea: () => we,
        DiscountsBadge: () => Me,
        DotLoader: () => Ee,
        Dropdown: () => $e,
        Embed: () => Fe,
        ExpandingPlatformButton: () => Ke,
        FadeInContent: () => Qe,
        GameCard: () => s,
        GameSiteHeader: () => ta,
        Gen9Button: () => E,
        Gen9CoreCarousel: () => ca,
        Grid: () => De,
        HTMLElement: () => ba,
        Hero: () => _a,
        HookStore: () => R,
        ImageWithBadge: () => Ia,
        LanguageSelector: () => Na,
        LayeredImage: () => Sa,
        LoadingAnimation: () => xi,
        MultiSourceImage: () => _e,
        NewswireBlocks: () => Oa,
        NewswireCard: () => Pa,
        NewswireList: () => Va,
        NewswireRelated: () => Aa,
        NewswireTag: () => Ea,
        OrderedList: () => Ga,
        PackList: () => Za,
        PackListMenu: () => mt,
        Paging: () => ut,
        ParallaxCacheBuster: () => pt,
        ParallaxInnerLayer: () => vt,
        ParallaxOuterLayer: () => xt,
        ParallaxWrapper: () => bt,
        ProfileSwitcher: () => i,
        PromoModule: () => cs,
        Rating: () => ms,
        ResponsiveFlexBox: () => fs,
        ResponsiveFlexItem: () => _s,
        ResponsiveGridBox: () => ks,
        ResponsiveGridItem: () => vs,
        ResponsiveImg: () => xs,
        ResponsiveSection: () => Ns,
        RockstarLogo: () => js,
        ScrollToTop: () => ws,
        ScrollTracker: () => Ss,
        SearchBox: () => Cs,
        Separator: () => ye,
        Skeleton: () => Ts,
        SrcsetImage: () => Ma,
        TextFit: () => Ce,
        ThumbsGallery: () => Vs,
        TinaModuleFetchNRender: () => Fs,
        TinaWrapper: () => Os,
        TrackList: () => Bs,
        UnorderedList: () => he,
        UserVote: () => Gs,
        VideoCard: () => r,
        VideoCarousel: () => Ws,
        VideoList: () => Ks,
        Wasted: () => Ys,
        framer: () => c,
        useTinaModuleFetchByIds: () => As,
        withSearchbarErrorBoundary: () => ai,
        withSimpleErrorBoundary: () => ra
      });
      var s = {};
      t.r(s), t.d(s, {
        Art: () => Je,
        Link: () => ea
      });
      var i = {};
      t.r(i), t.d(i, {
        CharacterCard: () => St,
        Menu: () => ts,
        MenuButton: () => rs
      });
      var r = {};
      t.r(r), t.d(r, {
        Art: () => Zs,
        Link: () => Js
      });
      var n = {};
      t.r(n), t.d(n, {
        getVariant: () => pi,
        transitions: () => ui,
        variants: () => _i
      });
      var c = {};
      t.r(c), t.d(c, {
        Animations: () => n,
        LiteMotion: () => ri,
        withFadeIn: () => li,
        withFadeUp: () => fi
      });
      var o = t(51664),
        l = t(41272);
      const d = (0, l.defineMessages)({
        aria_label_open_new_window: {
          id: "aria_label_open_new_window",
          defaultMessage: "(Opens in a new window)"
        }
      });
      var m = t(57013);
      const g = "rockstargames-sites-gtaff481c537a56a6fcdb1be85dfbc8944e";
      var f = t(95240);
      const u = e => {
        let {
          children: a,
          to: t = "#",
          alt: s = "",
          autoBlank: i = !1,
          onClick: r = (() => {}),
          ...n
        } = e;
        const c = (0, l.useIntl)(),
          o = !/^(https?|mailto):/i.test(t),
          u = /^#/.test(t),
          _ = n?.target ?? (i ? "_blank" : "_self");
        let {
          t: p,
          ...k
        } = n, b = "";
        if ("aria-label" in k && k["aria-label"] && (b = "_blank" === _ ? `${k["aria-label"]} ${c.formatMessage(d.aria_label_open_new_window)}` : k["aria-label"]), u) {
          const e = e => {
            e.preventDefault(), document?.querySelector(`[id='${t.replace("#","")}']`)?.scrollIntoView({
              behavior: "smooth",
              block: "center"
            }), r && r(e)
          };
          return (0, f.jsxs)("a", {
            title: s,
            href: t,
            onClick: e,
            ...k,
            "aria-label": b,
            children: [a, "_blank" === _ && !b && (0, f.jsx)("span", {
              className: g,
              children: c.formatMessage(d.aria_label_open_new_window)
            })]
          })
        }
        if (o) return (0, f.jsxs)(m.NavLink, {
          title: s,
          to: t,
          onClick: e => r(e),
          ...k,
          "aria-label": b,
          children: [a, "_blank" === _ && !b && (0, f.jsx)("span", {
            className: g,
            children: c.formatMessage(d.aria_label_open_new_window)
          })]
        });
        const v = Object.keys(k).filter((e => !["activeClassName", "key", "end"].includes(e))).reduce(((e, a) => ({
          ...e,
          [a]: n[a]
        })), {});
        return "function" == typeof v?.className && delete v.className, (0, f.jsxs)("a", {
          href: t,
          title: s,
          onClick: e => r(e),
          target: _,
          ...v,
          "aria-label": b,
          children: [a, "_blank" === _ && !b && (0, f.jsx)("span", {
            className: g,
            children: c.formatMessage(d.aria_label_open_new_window)
          })]
        })
      };
      var _ = t(65772),
        p = t.n(_),
        k = t(33052),
        b = t(90048);
      const v = {
          player: "rockstargames-sites-gtabb43df423657efcc0f1f38630a24e5e8",
          fixedToBottom: "rockstargames-sites-gtae1f497e3ec34c2fd721b124969e27dd5",
          tracksOpen: "rockstargames-sites-gtae8f2736f0ae21a56045104071a7a9fd7",
          tracks: "rockstargames-sites-gtaea84096a931648765b1db46f708f70aa",
          iconBurger: "rockstargames-sites-gtab91aad66a2102668715c5ddaaecede2e",
          trackList: "rockstargames-sites-gtac44536ca7b7fa7236e86c65ae309057e",
          trackActive: "rockstargames-sites-gtaac7826f934fc777f58017b1a5752419a",
          trackTitle: "rockstargames-sites-gtaaafc522e642572d5ff93c7408b941829",
          trackIndex: "rockstargames-sites-gtab880baa4707c71eb543f905816d8e952",
          controls: "rockstargames-sites-gtaff92c8eddfc0a0fa7bc7f444973e4f28",
          controlsCurrentBg: "rockstargames-sites-gtaa81d9465f14d65e8e20800d7b25f77d9",
          controlsCurrentBgVisible: "rockstargames-sites-gtac87bd14d2bbc9248d9c197b77454f345",
          controlsTrack: "rockstargames-sites-gtac23bf574089d1af93750f6af8ebb489f",
          controlsTrackTitle: "rockstargames-sites-gtae4b77d29e904f9928cca1de93f5c7745",
          controlsTrackAnimating: "rockstargames-sites-gtaba49949a9cd8c22385708f267c625029",
          scrollText: "rockstargames-sites-gtafd9c80e5afaa1ed38ce85f2c3d70eae4",
          controlsTrackArtist: "rockstargames-sites-gtac93c1e5399d9fd5e96ca246fdbfb307b",
          controlsTrackBurger: "rockstargames-sites-gtab4e1a16e3460b40c1aacd92afe219856",
          controlsButtons: "rockstargames-sites-gtad136125994c1d0db1449fce51af559ca",
          controlsScrub: "rockstargames-sites-gtad3d935648408f71928bd49d2f7c5a9ff",
          controlsPlayPause: "rockstargames-sites-gtaf5de7526c8cee98bdd7363fd7f2cf8ae",
          controlsPlayPausePlaying: "rockstargames-sites-gtaefb6194f0df966e6c8c759937d2fb826",
          controlsNextTrack: "rockstargames-sites-gtaf286e0ce01c5401e56dd579b076f1aae",
          controlsPrevTrack: "rockstargames-sites-gtaa56bb7cb4b0e2de481777d1f09c3f2f2",
          controlsScrubTrack: "rockstargames-sites-gtab8f38f45353fa54fcb6f9e2a3d0d5a85"
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
            playing: t,
            audioRef: s,
            setPlaying: i,
            tracksOpen: r,
            setTracksOpen: n,
            trackData: c,
            setTrackId: l,
            trackBounds: d,
            setAutoNext: m
          } = e;
          const g = (0, o.useRef)(null),
            u = (0, o.useRef)(null),
            _ = (0, o.useRef)(null),
            [k, b] = (0, o.useState)(null),
            [h, x] = (0, o.useState)(!1),
            y = e => {
              const a = new Date(1e3 * e),
                t = a.getUTCMinutes(),
                s = a.getSeconds();
              return `${t.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`
            };
          return (0, o.useEffect)((() => {
            if (!u.current || !_.current) return;
            const e = () => {
              _.current && u.current && b(_.current.clientWidth > u.current.clientWidth)
            };
            return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e)
          }), [_, u, a]), (0, o.useEffect)((() => {
            if (!g.current || !a?.duration) return;
            let e = null;
            const t = new(p())(g.current),
              i = e => {
                if (g.current) {
                  const t = g.current.clientWidth;
                  if (!g.current.contains(e.srcEvent.target)) return;
                  const i = Math.max(0, e.srcEvent.offsetX),
                    r = Number(i / t * a.duration);
                  s.currentTime = r
                }
              },
              r = () => {
                e ? s.pause() : s.play()
              },
              n = () => {
                e = s.paused, s.pause()
              };
            return t.on("panstart", n), t.on("panleft", i), t.on("panright", i), t.on("panend", r), t.on("tap", i), () => {
              t.off("panstart", n), t.off("panleft", i), t.off("panright", i), t.off("panend", r), t.off("tap", i)
            }
          }), [g.current, a.duration]), (0, o.useEffect)((() => {
            const e = Number(s?.currentTime);
            (t || !isNaN(e) && 0 !== e) && x(!0)
          }), [t, s?.currentTime]), (0, f.jsxs)("div", {
            className: v.controls,
            style: {
              "--track-color": c.color,
              "--track-mix-blend-mode": c.mix_blend_mode,
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
                children: c.title
              })
            }), (0, f.jsxs)("div", {
              className: v.controlsButtons,
              children: [(0, f.jsx)("div", {
                className: v.controlsPrevTrack,
                onClick: () => {
                  d && (l(d[0]), m(!0), i(!0))
                }
              }), (0, f.jsx)("div", {
                className: [v.controlsPlayPause, t ? v.controlsPlayPausePlaying : ""].join(" "),
                onClick: () => {
                  i(!t)
                }
              }), (0, f.jsx)("div", {
                className: v.controlsNextTrack,
                onClick: () => {
                  d && (l(d[1]), m(!0), i(!0))
                }
              })]
            }), (0, f.jsx)("div", {
              active: r ? "" : null,
              className: v.controlsTrackBurger,
              children: (0, f.jsx)("div", {
                className: v.iconBurger,
                onClick: () => {
                  n(!r)
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
            trackId: t,
            setTrackId: s,
            tracksOpen: i,
            setTracksOpen: r,
            setPlaying: n,
            setAutoNext: c
          } = e;
          return (0, f.jsxs)("div", {
            className: v.tracks,
            children: [(0, f.jsx)("h4", {
              children: "Tracks"
            }), (0, f.jsx)("div", {
              className: v.trackBurger,
              onClick: () => {
                r(!i)
              }
            }), (0, f.jsx)("div", {
              className: v.trackList,
              children: a.map(((e, a) => (0, f.jsxs)("a", {
                style: {
                  "--highlight-color": e.color
                },
                className: t === e.id ? v.trackActive : "",
                onClick: () => {
                  s(e.id), n(!0), c(!0)
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
            className: t = ""
          } = e;
          const {
            data: s
          } = (0, k.useQuery)(b.GetAudioAlbum, {
            variables: {
              id: a
            }
          }), [i, r] = (0, o.useState)(), [n, c] = (0, o.useState)(), [l, d] = (0, o.useState)(), [m, g] = (0, o.useState)(!1), [u, _] = (0, o.useState)(!1), [p, N] = (0, o.useState)(new HTMLAudioElement), [j, w] = (0, o.useState)({
            current: 0,
            duration: 0
          }), [S, C] = (0, o.useState)(!0);
          return (0, o.useEffect)((() => {
            const e = "audio",
              a = a => {
                a?.data?.rockstarAudioPlayerPlayTrackId && (c(a.data.rockstarAudioPlayerPlayTrackId), C(!1), _(!0)), u && a?.data?.attentionBlurredElsewhere && a?.data?.from !== e && _(!1)
              };
            return u && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: e
            }), window.addEventListener("message", a, !1), () => window.removeEventListener("message", a, !1)
          }), [u]), (0, o.useEffect)((() => {
            if (!p) return;
            const e = () => {
                isNaN(p.duration) || w({
                  duration: p?.duration ?? 0,
                  current: p?.currentTime ?? 0
                })
              },
              a = () => {
                S && i && c(i[1])
              };
            return p.addEventListener("loadedmetadata", e), p.addEventListener("timeupdate", e), p.addEventListener("ended", a), () => {
              p.removeEventListener("loadedmetadata", e), p.removeEventListener("timeupdate", e), p.removeEventListener("ended", a)
            }
          }), [p, i, S]), (0, o.useEffect)((() => {
            u && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: "audio"
            })
          }), [u]), (0, o.useEffect)((() => {
            p && (u ? p.play() : p.pause(), g(!1))
          }), [u, p, l?.id]), (0, o.useEffect)((() => {
            if (!n) return;
            const {
              tracks: e
            } = s.audioAlbum, a = s.audioAlbum.tracks.findIndex((e => e.id === n));
            r([e[a - 1]?.id ?? e[e.length - 1].id, e[a + 1]?.id ?? e[0].id]), d(e[a])
          }), [n]), (0, o.useEffect)((() => {
            s && c(s.audioAlbum.tracks[0].id)
          }), [s]), l ? (0, f.jsxs)("div", {
            className: [v.player, v[t], m ? v.tracksOpen : ""].join(" "),
            children: [(0, f.jsx)("audio", {
              ref: e => {
                N(e)
              },
              src: l.mp3_src
            }), (0, f.jsx)(y, {
              tracks: s.audioAlbum.tracks,
              setTrackId: c,
              trackId: n,
              tracksOpen: m,
              setTracksOpen: g,
              setPlaying: _,
              setAutoNext: C
            }), (0, f.jsx)(h, {
              src: l.cover_src
            }), (0, f.jsx)(x, {
              setTrackId: c,
              trackBounds: i,
              tracksOpen: m,
              setTracksOpen: g,
              playing: u,
              setPlaying: _,
              timing: j,
              trackData: l,
              audioRef: p,
              setAutoNext: C
            })]
          }) : null
        },
        j = e => {
          let {
            text: a,
            style: t
          } = e;
          return (0, f.jsx)("div", {
            className: "rockstargames-sites-gtab61bd7f274fd6d93c4bf33a9284b6b67",
            style: t,
            children: a
          })
        },
        w = e => {
          let {
            brands: a = []
          } = e;
          return a.length ? (0, f.jsx)("div", {
            className: "rockstargames-sites-gtacde08e212f23b312d5afca7f2ea1105c",
            children: a.map(((e, a) => {
              let {
                brand: t
              } = e;
              return (0, f.jsx)("div", {
                className: "rockstargames-sites-gtac894fe869384587702b5370da072be86",
                "data-brand": t
              }, a)
            }))
          }) : null
        },
        S = {
          button: "rockstargames-sites-gtae056494c33cff1fe89431f279fdb6b9a",
          secondary: "rockstargames-sites-gtad340cf27f380a4347994e59544432eb3"
        },
        C = e => {
          let {
            className: a = "",
            children: t,
            context: s = "",
            to: i,
            onClick: r,
            ...n
          } = e;
          const c = [S.button, S[s], a].join(" ");
          return i ? (0, f.jsx)(u, {
            ...n,
            to: i,
            className: c,
            onClick: r ? () => r() : () => {},
            children: t
          }) : (0, f.jsx)("button", {
            ...n,
            type: "button",
            className: c,
            onClick: r ? () => r() : () => {},
            children: t
          })
        };
      var I = t(1740);
      const T = {
          pillBtn: "rockstargames-sites-gtab59962d0e68ccd73b5ee2e571528d469",
          selected: "rockstargames-sites-gtaf5c57dad202e0d6ff855d5a4aca2c804",
          plusButton: "rockstargames-sites-gtacffaf489342637258d28f9b3b718836a",
          small: "rockstargames-sites-gtab8abf927f0ba0af0d8ac0e9c77690d34",
          btnText: "rockstargames-sites-gtae6e56461bfc2e426c4abc5451cd17284",
          btnTexticon: "rockstargames-sites-gtacef9f9ce913d167a1fe2e7118a407cdd",
          whiteBtn: "rockstargames-sites-gtab257e0629b9f8e101791d7a948ed15be",
          blackBtn: "rockstargames-sites-gtacb03bccaee79394858682d2ce4d08253",
          transparentBtn: "rockstargames-sites-gtad0460159a17533d4d23686d7dca76794",
          iconBtn: "rockstargames-sites-gtaac61186c3c22346c9a4ee2cd2820d341",
          link: "rockstargames-sites-gtac5920e56149b82f20f4db2ad9d397495",
          xboxone: "rockstargames-sites-gtaa7057f2e6d398341f57bc462716d0508",
          xboxseriesxs: "rockstargames-sites-gtaa693ab5879f34d7dea1737d3172ed4e4",
          ps4: "rockstargames-sites-gtaa029ff88fc9aef470aaeef8053f90436",
          ps5: "rockstargames-sites-gtae25638751cf3e7267db23c6a401fcc36",
          pc: "rockstargames-sites-gtae03d92653f19a7ae3c4b3d5137bc9909"
        },
        M = e => {
          let {
            children: a,
            className: t,
            onClick: s,
            style: i
          } = e;
          return (0, f.jsx)("button", {
            className: t,
            onClick: s ? () => s() : () => {},
            style: i,
            type: "button",
            children: a
          })
        },
        L = e => {
          let {
            children: a,
            className: t,
            onClick: s,
            style: i,
            to: r
          } = e;
          return (0, f.jsx)(m.NavLink, {
            className: t,
            onClick: s ? () => s() : () => {},
            style: i,
            to: r,
            children: a
          })
        },
        E = e => {
          let {
            btnColor: a = "#fff",
            className: t = "",
            consoleBtn: s,
            icon: i = "",
            img: r,
            labelColor: n = "#000",
            onClick: c,
            secondText: o,
            size: l,
            text: d,
            to: m,
            type: g = ""
          } = e;
          const u = [T.plusButton, T[g] ?? "", T[l] ?? "", T[s] ?? "", t].join(" "),
            _ = {
              "--hvr-color": a ?? n,
              "--hvr-bg-color": n ?? a,
              "--hvr-border-color": a ?? n
            },
            p = (0, f.jsxs)(f.Fragment, {
              children: [r ? (0, f.jsx)("img", {
                src: r,
                alt: ""
              }) : "", (0, f.jsxs)("div", {
                className: T.btnText,
                icon: i,
                children: [d, o ? (0, f.jsx)("span", {
                  children: o
                }) : ""]
              })]
            });
          if (m) {
            if (m.startsWith("http")) {
              const e = m.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, f.jsx)("span", {
                onClick: c ? () => c() : () => {},
                onKeyDown: c,
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
              onClick: c ? () => c() : () => {},
              style: _,
              to: m,
              children: p
            })
          }
          return (0, f.jsx)(M, {
            className: u,
            onClick: c ? () => c() : () => {},
            style: _,
            children: p
          })
        },
        B = e => {
          let {
            buttons: a = [],
            className: t
          } = e;
          return a.length ? (0, f.jsx)("div", {
            className: (0, I.classList)("rockstargames-sites-gtab411a36e7fd12ab75861fe560b31b206", t),
            children: a.map(((e, a) => {
              let {
                icon: t,
                title: s,
                to: i
              } = e;
              return s ? (0, f.jsx)(E, {
                icon: t,
                text: s,
                to: i
              }, a) : ""
            }))
          }) : null
        };
      var P = t(48111),
        z = t(12231);
      const $ = {
          deprecatedCarousel: "rockstargames-sites-gtaeb5df7b3d51dffc4d993ca7abce4e944",
          "swiper-scrollbar-disabled": "rockstargames-sites-gtaeb2dda6769a7c20a31e7996ff62e41f8",
          "swiper-horizontal": "rockstargames-sites-gtab11093de3cb4f18ea2d59b8d4d1db44c",
          "swiper-vertical": "rockstargames-sites-gtafa3209fdf995734a1aeeac2cc72cc1ea",
          renderedWithChildren: "rockstargames-sites-gtac9f15e74b3166cd0db40501fcc70e868",
          panorama: "rockstargames-sites-gtaf2a7e77af5dff445e978fd575a567508",
          img: "rockstargames-sites-gtaf1d3d54c266a20fa0cbe9c342b0d98da",
          hideMobile: "rockstargames-sites-gtae70d5eaa273e4a0a40ee62a308491810",
          hideLarge: "rockstargames-sites-gtabace2af6c822ba7b36b53923629cba0f",
          imageAreaBg: "rockstargames-sites-gtaf4bb071e6dad07c75b78ea21269ca662",
          infinite_false: "rockstargames-sites-gtad6c3d175b843462bf23a1a1f3af6b095",
          track: "rockstargames-sites-gtab5ff781c4a96bf031e8e7f5e0c9af395",
          perico: "rockstargames-sites-gtabb97d296d17b7e801c6c0719a79463dd",
          dotsSlide: "rockstargames-sites-gtadd55a6f93254ed13542089c6f36e0048",
          siblings: "rockstargames-sites-gtaa59cf4385528c371a13be9962b67131b",
          active: "rockstargames-sites-gtaaa5e195e0c7c6336929553314d52a896",
          "swiper-preloader-spin": "rockstargames-sites-gtac05cc0faa8239c85cdc7d53c7e120e8e"
        },
        V = e => {
          let {
            item: a
          } = e;
          return (0, f.jsxs)("div", {
            children: [(0, f.jsx)(Ia, {
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
            total: t
          } = e;
          return (0, f.jsx)("div", {
            className: "swiper-scrollbar",
            style: {
              "--current-slide": a,
              "--total-slides": t
            },
            children: (0, f.jsx)("div", {
              className: "swiper-scrollbar-drag"
            })
          })
        },
        A = e => {
          let {
            children: a,
            items: t = [],
            style: s = {},
            noInfiniteScroll: i = !1,
            className: r = "",
            renderTemplate: n = "standard",
            text: c,
            customSpaceBetween: l = null,
            centerSlides: d = !0,
            centeredSlidesBounds: m = !1
          } = e;
          const [g, u] = (0, o.useState)(0), _ = (0, o.useMemo)((() => a && Array.isArray(a) ? a.map((() => (0, z.c)())) : null), [a]);
          if (!(t && 0 !== t?.length || a)) return null;
          const p = {
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
            className: (0, I.classList)($.deprecatedCarousel, $[n], $[`infinite_${!i}`], a ? $.renderedWithChildren : "", r),
            style: s,
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
                className: $.trackWrapper,
                children: (0, f.jsxs)("div", {
                  className: $.track,
                  children: [t?.map((e => (0, f.jsx)(P.Ky, {
                    children: (0, f.jsx)(V, {
                      item: e
                    })
                  }, e.key))), a && a?.map(((e, a) => e && (0, f.jsx)(P.Ky, {
                    children: e
                  }, _ && _[a])))]
                })
              }), (0, f.jsx)(D, {
                current: g,
                total: a ? a.length : t.length
              })]
            }), (c?.title || c?.description) && (0, f.jsx)(we, {
              item: c
            })]
          })
        };
      var F = t(45792),
        O = t(42836);
      const R = (0, t(62748).U1)(),
        U = e => e.some((e => !e)),
        G = e => {
          let {
            condition: a = null,
            children: t
          } = e;
          const [s, i] = (0, o.useState)(!1), r = (e => {
            const [a] = (0, m.useSearchParams)(), [t, s] = (0, o.useState)(null), i = (0, O.useRockstarUser)(), {
              loggedIn: r
            } = i, {
              currentCharId: n
            } = (0, O.useRockstarUserState)(), c = function(e) {
              let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "gtao";
              return (0, o.useMemo)((() => {
                const s = e?.data?.characters?.[t];
                return "1" === (s?.[a]?.stats?.overview?.hasGtaPlus?.value ?? "0")
              }), [e, t, a])
            }(i, n);
            return (0, o.useEffect)((() => {
              const t = "true" === a.get("conditionPreview");
              if (!e?.length > 0) return;
              R.applyFilters("preview_conditions", e);
              const i = [];
              return e.forEach((e => {
                const {
                  value: s
                } = e;
                if (t) return "true" === a.get(s) ? (i.push(!0), !0) : (i.push(!1), !1);
                if (U(i)) return !1;
                switch (s) {
                  case "user:is:loggedIn":
                    i.push(!0 === r);
                    break;
                  case "user:not:loggedIn":
                    i.push(!1 === r);
                    break;
                  case "user:is:gtaPlus":
                    i.push(!0 === c);
                    break;
                  case "user:not:gtaPlus":
                    i.push(!1 === c);
                    break;
                  default:
                    i.push(!1)
                }
                return null
              })), s(!U(i)), () => {}
            }), [a, e, c, i, r]), t
          })(a);
          return (0, o.useEffect)((() => {
            i(r)
          }), [r]), (0, o.useMemo)((() => s ? t : null), [s])
        },
        H = (0, F.withTranslations)((e => {
          let {
            children: a
          } = e;
          return o.Children.map(o.Children.toArray(a), (e => (0, f.jsx)(G, {
            ...e?.props
          })))
        }));
      var W = t(41512),
        q = t(58652);
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
          pillBtn: "rockstargames-sites-gtae3158363419b66e5afa2264e4928890c",
          selected: "rockstargames-sites-gtaa9649249223f164eff11174ffc72616b",
          calloutContainer: "rockstargames-sites-gtae6bd244761fdf3ebe3888539d9942921",
          calloutSection: "rockstargames-sites-gtab1b8c93299158ef7d0f9eb04e14a7a64",
          calloutHeaders: "rockstargames-sites-gtac81810436a5b57307c41f4d7a704b2f7",
          calloutHeaderMargins: "rockstargames-sites-gtab4e1f72dfa9b38f23017e5f8ef48b9cb",
          calloutHeader: "rockstargames-sites-gtab7964754215256201dd703aedca18b6f",
          calloutSubheader: "rockstargames-sites-gtaac660fa7995007ed875e03a257e447d7",
          calloutVoteForm: "rockstargames-sites-gtabee0795a36dd5adf822e1e50a7260f3d",
          voteButton: "rockstargames-sites-gtab1baa545566a61b791b696c9ebf560ad",
          upvote: "rockstargames-sites-gtab9c17ddd3e1052acb5097909ae2b07a1",
          downvote: "rockstargames-sites-gtaf26b53e66e552183743465cce6a8d3a8",
          active: "rockstargames-sites-gtad38a1764483a36e8a1509aee5b88ec31",
          calloutButton: "rockstargames-sites-gtab7eb76afce3c6e686be44c356837b627",
          calloutLink: "rockstargames-sites-gtaaefe6c5a233047c943a864cd56a7de2d",
          calloutLinkIcon: "rockstargames-sites-gtaa74bf6baa632ad9b5f87efd2043cfed5",
          actionBlock: "rockstargames-sites-gtacc491ddd715196ecd6ef54017ff05ec0",
          actionFooter: "rockstargames-sites-gtadb26fed58ce50f4affc114670885721a"
        },
        Y = e => {
          let {
            foreign_id: a,
            foreign_type: t
          } = e;
          const {
            track: s
          } = (0, O.useGtmTrack)(), {
            refetch: i
          } = (0, k.useQuery)(q.UserGetVote, {
            skip: !0
          }), [r] = (0, k.useMutation)(q.UserCastVote), [n, c] = (0, o.useState)(null), l = (0, o.useCallback)((e => {
            (async () => {
              if (e === n && null !== n) c(null);
              else {
                c(e), s({
                  event_action: e ? "like" : "dislike",
                  event_category: "cta",
                  event: "cta_" + (e ? "like" : "dislike"),
                  event_label: a
                });
                const i = {
                  foreignId: a,
                  foreignType: t,
                  vote: e
                };
                await r({
                  variables: i
                })
              }
            })()
          }), [a, t, n]);
          return (0, o.useEffect)((() => {
            a && t && (async () => {
              const e = await i({
                foreignId: a,
                foreignType: t
              });
              c(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [a, t]), (0, f.jsxs)("div", {
            className: K.calloutVoteForm,
            children: [(0, f.jsx)("button", {
              "aria-label": "upvote",
              className: [K.upvote, K.voteButton, n ? K.active : ""].join(" "),
              name: "upvote",
              onClick: () => l(!0),
              type: "button"
            }), (0, f.jsx)("button", {
              "aria-label": "downvote",
              className: [K.downvote, K.voteButton, !1 === n ? K.active : ""].join(" "),
              name: "downvote",
              onClick: () => l(!1),
              type: "button"
            })]
          })
        },
        Q = e => {
          let {
            action_text: a,
            link: t,
            trackingData: s
          } = e;
          const {
            track: i
          } = (0, O.useGtmTrack)();
          return (0, f.jsx)("a", {
            href: t,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, f.jsxs)("button", {
              className: K.calloutLink,
              type: "button",
              onClick: s ? () => i({
                ...s
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
            linkText: t,
            link: s,
            trackingData: i
          } = e;
          const {
            track: r
          } = (0, O.useGtmTrack)();
          return (0, f.jsxs)("div", {
            className: K.actionFooter,
            children: [a, t && " ", t && (0, f.jsx)("a", {
              href: s ?? "",
              onClick: () => r({
                ...i
              }),
              children: t
            })]
          })
        },
        J = (0, F.withTranslations)((e => {
          let {
            header: a,
            subheader: t,
            type: s,
            action_text: i,
            link: r,
            foreign_id: n = document.location.pathname,
            foreign_type: c = "url",
            className: l = "",
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
                element_placement: `callout section - ${k?.sectionName??k?._memoq?.header}`
              }), j(!0))
            }), [y]), !a && !t) return null;
          switch (s) {
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
                foreign_id: n,
                foreign_type: c
              });
              break;
            case "button":
              i && r && (w = (0, f.jsx)(C, {
                to: r,
                className: K.calloutButton,
                onClick: u ? () => v({
                  ...u
                }) : () => {},
                children: i
              }));
              break;
            case "link":
              i && r && (w = (0, f.jsx)(Q, {
                action_text: i,
                link: r,
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
                  children: p(a)
                }), t && (0, f.jsx)("h3", {
                  className: K.calloutSubheader,
                  children: p(t)
                })]
              }), (0, f.jsxs)("div", {
                className: K.actionBlock,
                children: [w, d && (0, f.jsx)(Z, {
                  helperText: d,
                  linkText: m,
                  link: g,
                  trackingData: _
                })]
              })]
            })
          })
        }));
      var ee = t(69736),
        ae = t(44236),
        te = t.n(ae);
      const se = e => {
          let {
            isMulti: a,
            allowSelectAll: t,
            label: s,
            miscProps: i
          } = e;
          const [r, n] = (0, o.useState)(""), c = (0, o.useMemo)((() => te()().getData()), []);
          return (0, f.jsx)(ee.cp, {
            unstyled: !0,
            value: r,
            isMulti: a,
            allowSelectAll: t,
            options: c,
            placeholder: s,
            onChange: e => {
              return a = e?.target?.value, void n(a);
              var a
            },
            classNamePrefix: "country-select",
            ...i
          })
        },
        ie = e => {
          let {
            cookieName: a,
            cookieValue: t,
            trueComponent: s,
            falseComponent: i
          } = e;
          const r = (e => {
              const a = document.cookie.split("; "),
                t = `${e}=`,
                s = a.find((e => e.startsWith(t)));
              return s?.substring(t.length, s.length)
            })(a),
            n = new URLSearchParams(window.location.search).get(a);
          return n && ((e, a) => {
            e && a && (document.cookie = `${e}=${a}; domain=${(()=>{const e=window.location.hostname.split(".");return e.slice(e.length-2).join(".")})()}; path=/;`)
          })(a, n), r === t || n === t ? s : i
        },
        re = {
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
        ne = e => re[e] || null,
        ce = {
          cta: "rockstargames-sites-gtabc76de01fdd1260e254c482984d2a924",
          xbox: "rockstargames-sites-gtaf591c5444c08121b0514f0c675da1479",
          xboxone: "rockstargames-sites-gtae5124beff89c5b4093a4029a9fee3367",
          xboxseriesxs: "rockstargames-sites-gtae52c94654eb462a8e65aa7607f5e21b5",
          ps: "rockstargames-sites-gtac53b78d3d062ee8d58f63a0acb1df137",
          ps4: "rockstargames-sites-gtaf4a27aba1505f555d7cd8c920645245a",
          ps5: "rockstargames-sites-gtab5826d3700572b9bf36874e34d5c2a22",
          pc: "rockstargames-sites-gtac7ee0cfc54be00a8b152c47997ce76ac",
          switch: "rockstargames-sites-gtaa9b276d1c119e9cd14df54c4459197b0",
          googleplay: "rockstargames-sites-gtaa4ccd0de63b104d4aa48c8c3176618f3",
          platformIcon: "rockstargames-sites-gtac4ab0a89b65025cfe63b851116fb3a32",
          applestore: "rockstargames-sites-gtaa13111cbe8acbd75f62da1c53de2c3df",
          btnIcon: "rockstargames-sites-gtacb0ad8d8dd93218dc12091b883767967",
          label: "rockstargames-sites-gtab81011c72b601075ebe54d7ceaa7d2d8",
          primary: "rockstargames-sites-gtadbcf41d5c23e0eaf5089021f4d41c121",
          btnContent: "rockstargames-sites-gtaf5e832587747dc414e10ab8e0bd843a9",
          icon: "rockstargames-sites-gtac7a3f1a29594b307606d15e6827f63f9",
          "icon-left": "rockstargames-sites-gtabd623c6039c3f4122936775ed4214bd4",
          "icon-right": "rockstargames-sites-gtac79040e66c1f48e302291d8cf1335742",
          disabled: "rockstargames-sites-gtad87326174de12b895401f738a23b177a",
          pillBtn: "rockstargames-sites-gtabf9c11ff862c409ecb412254932a66d0",
          selected: "rockstargames-sites-gtae07887131c72b6346c408895888f4fa7"
        },
        oe = e => {
          let {
            platform: a = ""
          } = e;
          const t = a ? ne(a) : null,
            s = t ? (0, f.jsx)("img", {
              className: ce.platformIcon,
              src: t,
              alt: "Platform Icon"
            }) : null;
          return (0, f.jsx)("span", {
            className: [ce.btnContent, ce.platformButton].join(" "),
            children: s
          })
        },
        le = e => {
          let {
            children: a,
            href: t,
            style: s,
            content: i,
            variant: r = null,
            icon: n,
            iconPosition: c = "none",
            iconStyle: l,
            badge: d,
            badgeStyle: g,
            platformItem: u,
            gtm: _ = {},
            disabled: p,
            className: k
          } = e;
          const {
            track: b
          } = (0, O.useGtmTrack)(), v = (0, F.useDataLayer)(), h = i ?? a, x = `Redirect to ${t}`, y = (0, o.useMemo)((() => {
            const e = window.location.hostname;
            let a;
            try {
              a = new URL(t)?.hostname
            } catch (t) {
              a = e
            }
            return e === a
          }), [t]), N = (0, o.useCallback)((() => {
            p || b({
              event: "cta_other",
              ...v,
              ..._,
              link_url: t ?? void 0,
              text: h ?? void 0
            })
          }), [_, t, v]), j = () => n ? (0, f.jsx)("span", {
            className: [ce.icon, `icon-${c}`].join(" "),
            style: l,
            children: (0, f.jsx)("img", {
              className: ce.btnIcon,
              src: ne(n),
              alt: `${n} icon`
            })
          }) : null;
          return (0, f.jsx)(m.NavLink, {
            to: t,
            target: y ? "_self" : "_blank",
            className: [ce.cta, "platform" === r && u ? ce[u] : "", p ? ce.disabled : "", k].join(" "),
            style: s,
            "data-variant": r,
            onClick: N,
            disabled: p,
            "aria-label": x,
            children: "platform" === r && u ? (0, f.jsx)(oe, {
              platform: u
            }) : (0, f.jsxs)("div", {
              className: ce.btnContent,
              children: ["left" === c && j(), (0, f.jsx)("span", {
                children: h
              }), "right" === c && j(), d ? (0, f.jsx)("span", {
                className: ce.badge,
                style: g,
                children: d
              }) : null]
            })
          })
        };
      var de = t(45652);
      const me = "rockstargames-sites-gtaeb64520e04e486931cd65dc5b3fa61e8",
        ge = "rockstargames-sites-gtacc9a6fdcc84b758d60987ea9a5ddfd81",
        fe = "rockstargames-sites-gtaee609f31f3685766122c2c6fc0ef0710",
        ue = e => {
          let {
            alt: a,
            className: s,
            src: i,
            style: r
          } = e;
          const [n, c] = (0, F.usePreloadImg)(i);
          let o = i;
          !1 === n && (s === fe && (o = t(61820)), o = t(43976));
          const {
            width: l,
            height: d
          } = c, m = {
            "--aspect-ratio": Number.isNaN(l / d) ? "" : l / d,
            ...r
          };
          return (0, f.jsx)("img", {
            src: o,
            className: s ?? "",
            alt: a,
            style: m
          })
        },
        _e = e => {
          let {
            className: a,
            style: s = {},
            image: i = {},
            imageStyle: r = {}
          } = e, {
            alt: n,
            src: c
          } = (0, de.useImageParser)(i);
          return c.desktop || c.mobile || (n = "placeholder", c = {
            mobile: t(61820),
            desktop: t(43976)
          }), (0, f.jsx)("div", {
            className: i.frame ? `${i.frame} ${me}` : me,
            style: s,
            children: c?.desktop && c?.mobile ? (0, f.jsxs)(f.Fragment, {
              children: [(0, f.jsx)(ue, {
                style: {
                  ...r,
                  ...i?.style
                },
                src: c.desktop,
                alt: n,
                className: a ? `${a} ${ge}` : ge
              }), (0, f.jsx)(ue, {
                style: {
                  ...r,
                  ...i?.style
                },
                src: c.mobile,
                alt: n,
                className: a ? `${a} ${fe}` : fe
              })]
            }) : (0, f.jsx)(ue, {
              style: {
                ...r,
                ...i?.style
              },
              src: c?.desktop ?? c?.mobile,
              alt: n,
              className: a
            })
          })
        };
      var pe = t(8560),
        ke = t.n(pe);
      const be = {
          grid: "rockstargames-sites-gtaac295ed5b9cb441ed17843b34e83ea17",
          itemList: "rockstargames-sites-gtacaf5589ddeca00ed09213e547674b1f3",
          gtaplus: "rockstargames-sites-gtab291112adcf994a0f6acadd86f73b78a",
          rdo: "rockstargames-sites-gtad146e8f862baefb60e91be5aa3c17b6e",
          noImg: "rockstargames-sites-gtaba9b5ae08642b0213a3f04b3db9a9dac",
          gtao: "rockstargames-sites-gtab6f2bdfd6a1d57b7ce840f7a56cc510b",
          custom: "rockstargames-sites-gtaaf89164a043648d1464686ff13363ee4",
          yellow: "rockstargames-sites-gtad244b17b74fc46269e8a106a99ab0f87",
          hotPink: "rockstargames-sites-gtad90b28503318563cfd6059146d1fb6b6",
          red: "rockstargames-sites-gtac3f8a8706901874d906f94c626be3c1e",
          turquoise: "rockstargames-sites-gtafe2ec36e92e2bb4d453fdc4b05966418",
          purple: "rockstargames-sites-gtaf5f7baf5b56f5b2ada053a93392bbf7a",
          teal: "rockstargames-sites-gtaf4a229f41cd20f181d810c311416e3f2",
          blue: "rockstargames-sites-gtaf6f689d687bcd482ea2cd2990fd66878",
          green: "rockstargames-sites-gtaab270f1b4d3ad43e7bc51393b7c5c089",
          darkRed: "rockstargames-sites-gtadc24ce78d962f3472b06955bf8855103",
          darkBlue: "rockstargames-sites-gtab354493baac7389b21b511009f287428",
          goldenrod: "rockstargames-sites-gtae4a078efee11d24c64e93ccf0744a33f",
          skull: "rockstargames-sites-gtad4581a495de14e6762bb15debe5bb810"
        },
        {
          sanitize: ve
        } = ke(),
        he = e => {
          let {
            list: a,
            string: t,
            starColor: s,
            style: i,
            className: r,
            game: n,
            noImg: c,
            columns: l,
            mobileColumns: d
          } = e;
          const [m, g] = (0, o.useState)(null), u = t ? t.split("_#_") : a;
          return (0, o.useEffect)((() => {
            g(a)
          }), [a]), t || a ? l && m ? (0, f.jsx)("div", {
            className: be.grid,
            style: {
              "--unordered-list-grid-column": l,
              "--unordered-list-grid-column-mobile": d ?? l
            },
            children: (0, f.jsx)("ul", {
              style: (0, F.safeStyles)(i),
              className: (0, I.classList)(be.itemList, be.noImg, be[s], be[n]),
              children: m.map((e => (0, f.jsx)("li", {
                dangerouslySetInnerHTML: {
                  __html: ve(e.content)
                }
              }, e.content)))
            })
          }) : (0, f.jsx)("ul", {
            style: (0, F.safeStyles)(i),
            className: (0, I.classList)(be.itemList, be.custom, c ? be.noImg : "", s ? be[s] : "", n ? be[n] : "", r ?? ""),
            children: u.map((e => (0, f.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: ve(e?.content ?? e)
              }
            }, e?.content)))
          }) : null
        },
        xe = {
          hr: "rockstargames-sites-gtaf5cd418ab2ef6a89df6c95d2caa06ba8",
          redLine: "rockstargames-sites-gtaf8b44ef9bbd3e7feb22bf79cc009b16e",
          gtao: "rockstargames-sites-gtac442f7264db862a7cca6d9a56dacc205"
        },
        ye = e => {
          let {
            style: a,
            className: t = "",
            type: s
          } = e;
          return (0, f.jsx)("div", {
            style: a,
            className: [xe.hr, xe[s], t].join(" ")
          })
        },
        Ne = "rockstargames-sites-gtafa6885b15a718acb24f48949c52e31f1",
        je = e => {
          let {
            to: a,
            children: t
          } = e;
          return a ? (0, f.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noreferrer",
            children: t
          }) : t
        },
        we = e => {
          let {
            item: a,
            className: t = ""
          } = e;
          return (0, f.jsxs)("div", {
            className: (0, I.classList)("rockstargames-sites-gtaef9e6981551ac5ce250ebff8b18d7a29", t),
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
            }, a) : e?.image ? (0, f.jsx)(_e, {
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
      var Se = t(58936);
      const Ce = e => {
          let {
            children: a,
            ...t
          } = e;
          const [s, i] = (0, o.useState)(!1);
          return (0, f.jsx)(Se.cR, {
            ...t,
            onReady: () => {
              document.fonts.ready.then((() => {
                i(!0)
              }))
            },
            children: a
          })
        },
        Ie = {
          badge: "rockstargames-sites-gtae279e2cebfa338f34b03fd732416e836",
          badgeSizeUpdate: "rockstargames-sites-gtad7362a3e27ccaad9d2aadd2f31691340",
          badge2: "rockstargames-sites-gtad697f4a5f7c876d5e540a96da1e0ca3a",
          badge3: "rockstargames-sites-gtae1bba3cd4554abbb48a030af24bbada5"
        },
        Te = e => {
          let {
            wrapper: a,
            children: t,
            role: s,
            splitter: i
          } = e;
          return i || s ? a(t) : t
        },
        Me = e => {
          let {
            badge: a,
            badgeType: s,
            role: i,
            splitter: r
          } = e;
          const n = [];
          r ? a.split(r).map(((e, a) => n.push(e))) : n.push(a);
          let c = 100;
          return 2 == n.length && n[1].length < 4 && "off" !== n[1].toLowerCase() && 45, (0, f.jsxs)(Te, {
            splitter: r,
            role: i,
            wrapper: e => (0, f.jsx)("div", {
              className: `${Ie.badge} ${s?Ie[s]:""} `,
              children: e
            }),
            children: [(0, f.jsx)(f.Fragment, {
              children: i && (0, f.jsx)(_e, {
                image: {
                  alt: i,
                  desktop: t(6572)(`./${i}.png`)
                }
              })
            }), (0, f.jsx)(Ce, {
              className: `${r||i?"":Ie.badge} ${s?Ie[s]:""}`,
              min: 8,
              max: 1e3,
              mode: r || i ? "single" : "multi",
              children: n[0]
            }), (0, f.jsx)(f.Fragment, {
              children: n.shift() && r && n.length >= 1 && (0, f.jsx)(Ce, {
                min: 8,
                max: 1e3,
                mode: "single",
                forceSingleModeWidth: !0,
                children: n.join(" ")
              })
            })]
          }, "badge-wrapper")
        },
        Le = "rockstargames-sites-gtac63cfb461217f059c8c25eec09602b30",
        Ee = e => {
          let {
            color: a
          } = e;
          return (0, f.jsxs)("div", {
            className: "rockstargames-sites-gtaa481f47ab7e8af4042a665fab5aea27c",
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
      var Be = t(36960),
        Pe = t.n(Be);
      const ze = {
          dropdownWrapper: "rockstargames-sites-gtab951912c02de0e5e881fedd391d04810",
          items: "rockstargames-sites-gtab0a8f220641417f889d4fd6039fe6bac",
          open: "rockstargames-sites-gtaf5eb88111734e6e70d34ef2b095c44f6",
          opener: "rockstargames-sites-gtaecb577af64f747d0d39cf03939ee3c73",
          secondary: "rockstargames-sites-gtab64c3515fcd91f6b84410bd14640da81"
        },
        $e = e => {
          let {
            children: a,
            className: t,
            title: s
          } = e;
          const [i, r] = (0, o.useState)(!1);
          return (0, f.jsx)(Pe(), {
            disabled: !i,
            children: (0, f.jsxs)("div", {
              className: [ze.dropdownWrapper, i ? ze.open : "", void 0 !== t ? t : ""].join(" "),
              children: [(0, f.jsx)("button", {
                className: ze.opener,
                onClick: () => r(!i),
                children: s
              }), i && (0, f.jsx)("div", {
                className: ze.items,
                onClick: () => r(!1),
                children: a
              })]
            })
          })
        };
      var Ve = t(95356);
      const De = e => {
          let {
            children: a,
            context: t = null,
            game: s,
            image: i = {},
            style: r = {},
            template: n = null,
            theme: c = null,
            reversedOnMobile: o = !1,
            className: l = "",
            id: d = null
          } = e;
          const m = (0, de.useImageParser)(i),
            g = {
              ...r
            };
          if (m?.src?.desktop) {
            const e = "var(--grid-background-repeat, no-repeat)",
              a = "var(--grid-background-position, center)/var(--grid-background-size, cover)";
            g.background = `url(${m?.src?.desktop}) ${e} ${a}`
          }
          return (0, f.jsx)("div", {
            id: d,
            className: (0, Ve.classList)("rockstargames-sites-gtaf42b4606ed4a5b16b7647ad7b7eb229d", o ? "rockstargames-sites-gtab00444166ce6346d7ca364a75a335ecc" : "", l),
            "data-game": "community" === n ? null : s,
            style: (0, F.safeStyles)(g),
            "data-context": t,
            "data-template": n,
            "data-theme": c,
            children: a
          })
        },
        Ae = e => {
          let {
            caption: a,
            children: t,
            ...s
          } = e;
          return a ? (0, f.jsxs)("figure", {
            ...s,
            children: [t, (0, f.jsx)("figcaption", {
              dangerouslySetInnerHTML: {
                __html: a
              }
            })]
          }) : t
        },
        Fe = e => {
          let {
            componentTitle: a,
            type: t,
            items: s
          } = e;
          return s?.length ? (0, f.jsx)("div", {
            className: "rockstargames-sites-gtad393ab6eb68d416b116b6281abdb5e14",
            type: t,
            children: (0, f.jsxs)(De, {
              children: [a && (0, f.jsx)("h3", {
                children: a
              }), (0, f.jsx)(De, {
                className: "rockstargames-sites-gtaed3ee31cb8e357d795886157f95a742a",
                children: s.map(((e, a) => {
                  return e?.embed ? (0, f.jsx)(Ae, {
                    caption: e?.caption,
                    children: (0, f.jsx)("div", {
                      className: "rockstargames-sites-gtadcf1c30612026a517f59af64d8703bc4",
                      dangerouslySetInnerHTML: {
                        __html: (t = e.embed, t.replace(/&gt;/g, ">").replace(/&lt;/g, "<"))
                      }
                    }, `${e?.key??a}_div`)
                  }, e?.key ?? a) : e?.text ? (0, f.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: e.text
                    }
                  }, e?.key ?? a) : void 0;
                  var t
                }))
              })]
            })
          }) : null
        };
      var Oe = t(21388);
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
          pillBtn: "rockstargames-sites-gtaba37d7130b54bd53bd309b0cd04717ff",
          selected: "rockstargames-sites-gtac9c0bba52c010c4e3571f2702eef944b",
          container: "rockstargames-sites-gtabfcd1a0671c127c9135d8c2feac75c34",
          content: "rockstargames-sites-gtaa1cf623c9dd51dd05772a395d8311dac",
          unexpandedButton: "rockstargames-sites-gtaba4683b82274b0f8ca98f97fd2b0a1c9",
          expandedArea: "rockstargames-sites-gtadd25aa78f935c7d4cafdb1c8bc6d7932",
          closeButton: "rockstargames-sites-gtac559c930e0a5a7caa72b3de9a3362a0a",
          platformButtons: "rockstargames-sites-gtad6bfc47d3110920d77ea2e70dac9c898",
          platformButton: "rockstargames-sites-gtab04a9bd68b598682a5dbe99dd1a2f06d",
          xbox: "rockstargames-sites-gtafe4a687dfc69ef746fcbe4184c7a9574",
          xboxone: "rockstargames-sites-gtab1f46a1ff640d7398e7736e814a5ed8f",
          xboxseriesxs: "rockstargames-sites-gtae23b6f1412ea1ecb8a616b4f25d2888d",
          ps: "rockstargames-sites-gtae0b107bda3c03c1e82c94195bfbc055b",
          ps4: "rockstargames-sites-gtadcf3078cbde57db42e66e6ba4c269fbe",
          ps5: "rockstargames-sites-gtae047116842d7619f0e04a3c9b6dbec13",
          pc: "rockstargames-sites-gtadaa32798c37b9055cd280b838972e63e",
          switch: "rockstargames-sites-gtaae7bc564778d8af6cf5f8a0491ef7dc8",
          buttonText: "rockstargames-sites-gtac2fb2fb5ec39a5c3b3c14ee6c0505b53"
        },
        Xe = e => {
          let {
            buttonText: a = "",
            link: s = "",
            platform: i = "",
            target: r = null,
            onClick: n
          } = e;
          const c = r ?? (s.startsWith(document.location.origin) ? "_self" : "_blank"),
            o = [qe.platformButton, qe[i]].join(" "),
            l = i ? t(13892)(`./${i}.svg`) : null,
            d = (0, f.jsxs)(f.Fragment, {
              children: [l ? (0, f.jsx)("img", {
                src: l,
                alt: a
              }) : "", !l && (0, f.jsx)("div", {
                className: qe.buttonText,
                children: a
              })]
            });
          return s.startsWith("http") ? (0, f.jsx)("span", {
            onClick: n,
            onKeyDown: n,
            role: "link",
            tabIndex: 0,
            children: (0, f.jsx)("a", {
              href: s,
              className: o,
              target: c,
              children: d
            })
          }) : (0, f.jsx)(m.NavLink, {
            className: o,
            onClick: n,
            to: s,
            children: d
          })
        },
        Ke = e => {
          let {
            buttonText: a = "Subscribe",
            className: s,
            children: i,
            platformsAndLinks: r = [],
            trackingType: n = "buy",
            trackingParent: c,
            target: l = null,
            trackingOId: d = null
          } = e;
          const [m, g] = (0, o.useState)(!1), {
            track: u
          } = (0, O.useGtmTrack)();
          return (0, f.jsxs)("div", {
            className: (0, I.classList)(qe.container, s),
            children: [(0, f.jsx)(Oe.q.div, {
              className: qe.content,
              animate: m ? "open" : "close",
              variants: Ge,
              children: i
            }), (0, f.jsxs)(Oe.q.div, {
              onClick: () => {
                g(!m), m || u("select_platform" === n ? {
                  event: "select_platform",
                  event_action: "select_platform",
                  event_category: "cta",
                  event_label: c,
                  text: a?.toLowerCase() ?? "subscribe"
                } : "link_account" === n ? {
                  element_placement: c,
                  event: "cta_link_account",
                  event_action: "link_account",
                  event_category: "cta",
                  event_label: c,
                  o_id: d,
                  text: a?.toLowerCase()
                } : {
                  event: "cta_buy",
                  event_action: "buy",
                  event_category: "cta",
                  event_label: c,
                  text: a?.toLowerCase() ?? "subscribe"
                })
              },
              className: qe.unexpandedButton,
              animate: m ? "open" : "closed",
              variants: We,
              initial: !1,
              children: [(0, f.jsx)(Oe.q.div, {
                className: qe.buttonText,
                "data-expanded": m,
                children: "string" == typeof a ? a : "Subscribe"
              }), (0, f.jsxs)(Oe.q.div, {
                className: qe.expandedArea,
                animate: m ? "open" : "closed",
                variants: He,
                initial: !1,
                children: [(0, f.jsx)("img", {
                  className: qe.closeButton,
                  onClick: () => g(!1),
                  onKeyDown: e => {
                    g(!1)
                  },
                  src: t(72428),
                  alt: "Close",
                  role: "button"
                }), (0, f.jsx)("div", {
                  className: qe.platformButtons,
                  children: r.length ? r.map((e => (0, f.jsx)(Xe, {
                    buttonText: e.buttonText ?? "",
                    link: e.href,
                    platform: e.platform,
                    onClick: () => (e => {
                      let {
                        href: a,
                        platform: t
                      } = e;
                      u({
                        element_placement: c,
                        event: "cta_store_link",
                        event_action: "store_link",
                        event_category: "cta",
                        event_label: "expanding platform button",
                        link_url: a,
                        text: t
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
          animateBox: "rockstargames-sites-gtae9374e74c542c1028a2068dfbd1e85a3",
          fadeArea: "rockstargames-sites-gtaa63de5cdf9849ac45a0f6b4f7617cfa5",
          visible: "rockstargames-sites-gtad7458685114194d602f94e2581de0f08",
          barGrow: "rockstargames-sites-gtab0f4d843b626e3741c9dd38fcb3f56b0",
          bar: "rockstargames-sites-gtaa4b99f54f3ce3987765143d8a151360a",
          animateMe: "rockstargames-sites-gtaf9c3869a2a1e10490bdfbcb3ee89d7da"
        },
        Qe = e => {
          let {
            children: a,
            style: t
          } = e;
          const s = (0, o.useRef)(null);
          return (0, o.useEffect)((() => {
            new IntersectionObserver((e => {
              e.forEach((e => {
                e.isIntersecting && e.target.classList.add([Ye.visible])
              }))
            })).observe(s?.current)
          }), []), (0, f.jsx)("div", {
            style: t,
            className: [Ye.fadeArea].join(" "),
            ref: s,
            children: a
          })
        },
        Ze = {
          img: "rockstargames-sites-gtae3f505a2281df28eb1acdf2d586e7fbd",
          startAnimation: "rockstargames-sites-gtaa27e4d6733cea4a38e469425ef32ed3a"
        },
        Je = e => {
          let {
            imgSrc: a,
            title: t
          } = e;
          const [s] = (0, F.usePreloadImg)(a);
          return (0, f.jsx)("div", {
            role: "img",
            "aria-label": t,
            className: [Ze.img, s ? Ze.startAnimation : ""].join(" "),
            style: {
              backgroundImage: `url(${a})`
            }
          })
        },
        ea = e => {
          let {
            game: a,
            to: t
          } = e;
          const {
            fob_640: s,
            site_in_rockstar: i = !1,
            title_slug: r
          } = a;
          let n = r;
          "V" === r && (n = "gta-v"), "GTAOnline" === r && (n = "gta-online"), "undeadnightmare" === r && (n = "reddeadredemption");
          const c = t ?? `${i?"":"/games"}/${n}`;
          return (0, f.jsx)(u, {
            "data-gtm-category": "Games",
            "data-gtm-action": "Game Click-through",
            "data-gtm-label": r,
            "data-testid": `${r}-gamecard`,
            to: c,
            target: "_self",
            className: "rockstargames-sites-gtafded54fb94f7325c5a0b57590585b175",
            children: (0, f.jsx)(Je, {
              imgSrc: s,
              title: a.title
            })
          })
        },
        aa = {
          gameSiteHeader: "rockstargames-sites-gtacb7cada84679a7af263e1436675a518a",
          activeNavItem: "rockstargames-sites-gtaaa4aa7ed96facb38ed09c72eededb418",
          navHidden: "rockstargames-sites-gtaac1cb9d2005f287ed666d334f816f8c5",
          navContent: "rockstargames-sites-gtae5abd79468866e31fdad2780b169f687",
          headerNavOpen: "rockstargames-sites-gtab98508d0923c5bb442c15772fbad9764",
          headerLogo: "rockstargames-sites-gtae666ff4f0b91dfe78991244ac1a759a5",
          bg: "rockstargames-sites-gtacfc6fd456ca2f3e9db06f780f412660f"
        },
        ta = e => {
          let {
            buttonText: a = null,
            gameOverrideStyles: t,
            navLinks: s,
            cta: i = "",
            game: r
          } = e;
          const [n, c] = (0, o.useState)(!1), l = (0, k.useMutateState)(), {
            navHidden: d
          } = (0, k.useState)();
          return (0, o.useEffect)((() => {
            l({
              gameSiteNavOpen: n
            })
          }), [n]), (0, o.useEffect)((() => {
            const e = () => {
              c(!1)
            };
            return document.addEventListener("click", e), () => document.removeEventListener("click", e)
          }), []), (0, f.jsxs)("header", {
            "data-game": r,
            className: [aa.gameSiteHeader, n ? aa.headerNavOpen : "", d ? aa.navHidden : "", t.gameSiteHeader, n ? t.headerNavOpen : ""].join(" "),
            children: [(0, f.jsx)("button", {
              className: [aa.headerLogo, t.headerLogo].join(" "),
              onClick: e => {
                c(!n), e.nativeEvent.stopImmediatePropagation()
              },
              type: "button",
              "aria-label": "Open Game Site Nav",
              dangerouslySetInnerHTML: {
                __html: a
              }
            }), (0, f.jsx)("div", {
              className: aa.bg
            }), (0, f.jsx)("nav", {
              children: (0, f.jsx)("div", {
                className: aa.navContent,
                children: s
              })
            }), i]
          })
        };
      var sa = t(31403);
      class ia extends o.Component {
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
            className: "rockstargames-sites-gtaf903c45f8ecc18bd55f702e202f3763a",
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
          return function(t) {
            return (0, f.jsx)(ia, {
              header: a,
              children: (0, f.jsx)(e, {
                ...t
              })
            })
          }
        },
        na = e => {
          let {
            prevRef: a,
            nextRef: t,
            onNextClicked: s,
            onPrevClicked: i
          } = e;
          return (0, f.jsxs)("div", {
            className: "rockstargames-sites-gtad98f432655f19a842390597c4434db06",
            children: [(0, f.jsx)("div", {
              className: "rockstargames-sites-gtac06ca360ce11f2cef7baf8c5fba05a42",
              ref: a,
              onClick: i,
              "aria-label": "Previous",
              role: "button",
              tabIndex: 0,
              onKeyUp: () => {}
            }), (0, f.jsx)("div", {
              className: "rockstargames-sites-gtaa4f98606cdef508fbd2e69c5564a92d8",
              ref: t,
              onClick: s,
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
            slideChildren: t,
            size: s,
            title: i,
            customSlidesPerView: r = null,
            customSpaceBetween: n = null,
            slideClass: c,
            style: l,
            className: d,
            cardSizeBreakpoints: m = {},
            customAspectRatio: g,
            titleBadge: u
          } = e;
          const {
            track: _
          } = (0, O.useGtmTrack)(), p = (0, o.useRef)(null), k = (0, o.useRef)(null), b = (0, o.useRef)(null), [v, h] = (0, o.useState)(null), [x, y] = (0, o.useState)(!1), [N, j] = (0, o.useState)(null), [w, S] = (0, o.useState)({}), [C, T] = (0, o.useState)(), {
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
              spaceBetween: n ?? 16
            },
            1024: {
              spaceBetween: n ?? 18
            },
            1920: {
              spaceBetween: n ?? 20
            },
            2560: {
              spaceBetween: n ?? 22
            }
          };
          (0, o.useEffect)((() => {
            if (!p.current) return;
            const e = () => {
              if (p.current) {
                const e = r || Number(window.getComputedStyle(p.current).getPropertyValue("--slides-per-view")),
                  a = r ? 1 : Number(window.getComputedStyle(p.current).getPropertyValue("--slides-per-view-multiplier"));
                j(e * a)
              }
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [p, r]), (0, o.useEffect)((() => {
            if (!t) return;
            let e = !1;
            t.forEach((a => {
              "cover-card" === a?.props?.tina?.payload?.meta?.type && (e = !0, $(a))
            })), B(e);
            const a = t.map(((e, a) => "cover-card" === e?.props?.tina?.payload?.meta?.type && V ? null : (0, f.jsx)(P.Ky, {
              className: "rockstargames-sites-gtaf58e79e329504e170dc9cb4595ea011b",
              onFocus: () => R(a),
              children: e
            }, Symbol(a).toString())));
            h(a)
          }), [t, V]), (0, o.useEffect)((() => {
            T({
              nextEl: b.current,
              prevEl: k.current
            })
          }), [b, k]), (0, o.useEffect)((() => {
            L && !x && t && (_({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: `deck - ${i}`.toLowerCase(),
              element_placement: `deck - ${i}`.toLowerCase()
            }), y(!0))
          }), [L, t]);
          let F = "custom" === s ? {
            "--custom-aspect-ratio": g,
            ...l
          } : {
            ...l
          };
          const R = e => {
            w.slideTo(e)
          };
          return (0, f.jsxs)("div", {
            className: (0, I.classList)("rockstargames-sites-gtad0c3d91603036c852633939015a6cb48", d),
            "data-size": s,
            "data-sm": m?.sm ? m?.sm : s,
            "data-md": m?.md ? m?.md : s,
            "data-lg": m?.lg ? m?.lg : s,
            "data-xl": m?.xl ? m?.xl : s,
            "data-xxl": m?.xxl ? m?.xxl : s,
            "data-has-covercard": E,
            ref: p,
            style: F,
            children: [(0, f.jsx)("div", {
              className: "rockstargames-sites-gtaddeb75a59ed783554b94e8298897a1fa",
              ref: M
            }), E && V && (0, f.jsx)("div", {
              className: "rockstargames-sites-gtad5f00d41fdd2c864a0eb9e069cf08db0",
              children: z
            }), (0, f.jsx)("div", {
              className: "rockstargames-sites-gtacdc60dbde3f8db6f466aba8a3e19fa96",
              children: (0, f.jsxs)("div", {
                className: "rockstargames-sites-gtafb8e207418c783fc2f53b44c19faedca",
                children: [(0, f.jsxs)("div", {
                  className: "rockstargames-sites-gtab779ba2045a88302079083935c90f7b3",
                  children: [!E && i && (0, f.jsxs)("div", {
                    className: "rockstargames-sites-gtaedf90c7c5ee1c79049f5a6442f14c949",
                    children: [(0, f.jsx)("h2", {
                      children: i
                    }), u && (0, f.jsx)("span", {
                      className: "rockstargames-sites-gtad7a4aaeb70d68fdee39312192efb990b",
                      children: u
                    })]
                  }), (0, f.jsx)(na, {
                    prevRef: k,
                    nextRef: b,
                    onNextClicked: () => {},
                    onPrevClicked: () => {}
                  })]
                }), a && (0, f.jsx)("div", {
                  className: "rockstargames-sites-gtaa1007d13e3a321bb18b5fc667025d545",
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
              slideClass: (0, I.classList)("swiper-slide", c),
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
        oa = {
          pillBtn: "rockstargames-sites-gtad008b074498ad02717806cc094b8a780",
          selected: "rockstargames-sites-gtabe9a2e37ec59e339b0d72cd8e5256703",
          hero: "rockstargames-sites-gtad1346f9b98fbaac26948e361bd98b4c6",
          images: "rockstargames-sites-gtac9c078a3102a96b26f1bf1f98306384f",
          background: "rockstargames-sites-gtaa271224ca2caf56b470059cdb98d9a42",
          gradient: "rockstargames-sites-gtaae257e9d159ae9bd7c8685e38ba16f59",
          layered: "rockstargames-sites-gtaf663886f051e47ea04f097c85ae6625b",
          content: "rockstargames-sites-gtaf9c204f451f3a53bcc307c00eb5f907f",
          descriptions: "rockstargames-sites-gtad1bbf288f3fe6c79e658764847d2890a",
          buttonGroup: "rockstargames-sites-gtafb373367ffd03ba01edaf671175244ab",
          legalText: "rockstargames-sites-gtaf625ffdd1b33a1642aa0dec12efe7897",
          shardsCarousel: "rockstargames-sites-gtae999b9cecfe233bcee8cab8682fb96bf"
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
            mobileImg: t,
            desktopImg: s
          } = e;
          const i = (0, I.useGetCdnSource)(t ?? null),
            r = (0, I.useGetCdnSource)(s ?? i);
          return (0, f.jsx)("div", {
            className: oa.shard,
            style: {
              "--background-image-mobile": `url(${i})`,
              "--background-image-desktop": `url(${r})`
            },
            children: (0, f.jsx)("h5", {
              children: a
            })
          })
        },
        ga = e => {
          let {
            title: a = "Membership Rewards",
            shards: t
          } = e;
          const [s, i] = (0, o.useState)(null);
          return (0, o.useEffect)((() => {
            t && i(t.reduce(((e, a) => {
              if (!a?.shardImg) return e;
              const {
                title: t,
                shardImg: s
              } = a, {
                mobile: i,
                desktop: r
              } = s;
              return e.push((0, f.jsx)(ma, {
                title: t,
                mobileImg: i?.full_src,
                desktopImg: r?.full_src
              })), e
            }), []))
          }), [t]), s ? (0, f.jsx)("div", {
            className: oa.shardsCarousel,
            children: (0, f.jsx)(ca, {
              title: a,
              slideChildren: s,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        fa = e => {
          let {
            animated: a = !1,
            ctas: t = [],
            description: s,
            expandingButtonLabel: i = "Subscribe",
            title: r
          } = e;
          const [n, c] = (0, o.useState)([]), [l, d] = (0, o.useState)([]);
          return (0, o.useEffect)((() => {
            c(t.reduce(((e, a) => a.isInExpandingButton ? (e.push({
              href: a.href,
              platform: a.platform,
              buttonText: a.buttonText
            }), e) : e), [])), d(t.reduce(((e, a) => (a.isInExpandingButton || e.push({
              icon: a.platform ? a.platform : "",
              title: a.buttonText,
              to: a.href
            }), e)), []))
          }), t), t.length ? n.length ? (0, f.jsx)(Oe.q.div, {
            variants: a ? da : void 0,
            children: (0, f.jsxs)(Ke, {
              buttonText: i,
              platformsAndLinks: n,
              children: [(0, f.jsxs)(Oe.q.div, {
                className: oa.descriptions,
                variants: a ? da : void 0,
                children: [(0, f.jsx)("h2", {
                  dangerouslySetInnerHTML: {
                    __html: r
                  }
                }), (0, f.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: s
                  }
                })]
              }), !!l && !!l.length && (0, f.jsx)(Oe.q.div, {
                variants: da,
                children: (0, f.jsx)(B, {
                  buttons: l,
                  className: oa.buttonGroup
                })
              })]
            })
          }) : (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsxs)(Oe.q.div, {
              className: oa.descriptions,
              variants: a ? da : void 0,
              children: [(0, f.jsx)("h2", {
                dangerouslySetInnerHTML: {
                  __html: r
                }
              }), (0, f.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: s
                }
              })]
            }), !!l && !!l.length && (0, f.jsx)(Oe.q.div, {
              variants: da,
              children: (0, f.jsx)(B, {
                buttons: l,
                className: oa.buttonGroup
              })
            })]
          }) : (0, f.jsxs)(Oe.q.div, {
            className: oa.descriptions,
            variants: a ? da : void 0,
            children: [(0, f.jsx)("h2", {
              dangerouslySetInnerHTML: {
                __html: r
              }
            }), (0, f.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: s
              }
            })]
          })
        },
        ua = e => {
          let {
            animated: a = !1,
            brands: t = [],
            ctas: s = [],
            description: i = "",
            expandingButtonLabel: r = "Subscribe",
            title: n = "",
            legalText: c
          } = e;
          return (0, f.jsxs)(Oe.q.div, {
            className: oa.content,
            initial: "hidden",
            animate: "visible",
            variants: a ? la : void 0,
            children: [(0, f.jsx)(Oe.q.div, {
              variants: a ? da : void 0,
              children: (0, f.jsx)(w, {
                brands: t
              })
            }), (0, f.jsx)(fa, {
              animated: a,
              ctas: s,
              description: i,
              expandingButtonLabel: r,
              title: n
            }), c && (0, f.jsx)(Oe.q.div, {
              className: oa.legalText,
              variants: a ? da : void 0,
              children: (0, f.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: c
                }
              })
            })]
          })
        },
        _a = e => {
          let {
            animated: a = !1,
            backgroundImage: t,
            brands: s = [],
            className: i,
            ctas: r = [],
            description: n = "",
            expandingButtonLabel: c = "Subscribe",
            layeredImage: o,
            layeredImageSettings: l,
            legalText: d,
            shardsSection: m = {},
            theme: g = "gen9",
            title: u = ""
          } = e;
          const _ = (e => {
              if (!e) return null;
              const a = {},
                t = new Map([
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
                const [s, i] = e;
                if (t.has(s)) {
                  const e = t.get(s);
                  Object.entries(i).forEach((i => {
                    const [r, n] = i;
                    if (t.has(s) && t.has(r)) {
                      const s = `${t.get(r)}${e}`;
                      a[s] = "imageWidth" !== r ? n ? `${n}px` : "0px" : n ? `${n}vw` : "100vw"
                    }
                  }))
                }
              })), a
            })(l),
            p = (0, I.useGetCdnSource)(t?.mobile?.full_src ?? null),
            k = (0, I.useGetCdnSource)(t?.desktop?.full_src ?? p),
            b = (0, I.useGetCdnSource)(o?.mobile?.full_src ?? null),
            v = (0, I.useGetCdnSource)(o?.desktop?.full_src ?? b);
          return (0, f.jsxs)(Oe.q.div, {
            className: (0, I.classList)(oa.hero, i),
            style: {
              "--background-image-desktop": `url(${k})`,
              "--background-image-mobile": `url(${p})`,
              "--layered-image-desktop": `url(${v})`,
              "--layered-image-mobile": `url(${b})`
            },
            initial: "hidden",
            animate: "visible",
            variants: a ? la : void 0,
            "data-type": "hero",
            theme: g,
            children: [(0, f.jsxs)("div", {
              className: oa.images,
              children: [k && p ? (0, f.jsx)("div", {
                className: oa.background,
                style: t?.style ?? {}
              }) : "", b && v ? (0, f.jsx)("div", {
                className: oa.layered,
                style: l ? _ : {}
              }) : "", (0, f.jsx)("div", {
                className: oa.gradient
              })]
            }), (0, f.jsx)(ua, {
              animated: a,
              ctas: r,
              description: n,
              expandingButtonLabel: c,
              title: u,
              brands: s,
              legalText: d
            }), m?.shards && (0, f.jsx)(ga, {
              ...m
            })]
          })
        };
      var pa = t(79784),
        ka = t.n(pa);
      const ba = e => {
        let {
          children: a,
          attributes: t = {},
          className: s = "",
          style: i = {}
        } = e;
        return (0, f.jsx)("span", {
          className: (0, I.classList)(s, t?.className, "rockstargames-sites-gtaa7f106a8036d74ed9282a741476c6b5a"),
          style: (0, F.safeStyles)(i ?? t?.style ?? {}),
          dangerouslySetInnerHTML: {
            __html: ka().unescape(a)
          }
        })
      };
      var va = t(53592);
      const ha = JSON.parse('{"us":{"aria_label_open_new_window":"(Opens in a new window)","plm_nav_scroll_left":"Scroll Left","plm_nav_scroll_right":"Scroll Right","language_selector_default":"Select a Language","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","sc_link_account":"Account","sc_link_activity_feed":"Activity Feed","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell My Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_messages":"Messages","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Toggle Social Club Menu","rp_icon":"RP Category","components_track_list_title":"Tracklist","disabled_label":"Disabled","next_button_label":"Next video page","previous_button_label":"Previous video page"},"de":{"aria_label_open_new_window":"(Öffnet ein neues Fenster)","plm_nav_scroll_left":"Links scrollen","plm_nav_scroll_right":"Rechts scrollen","language_selector_default":"Eine Sprache auswählen","profile_selector_mugshot":"Verbrecherfoto von {userName}","profile_selector_profile_card":"Profildaten","profile_selector_rp_icon":"RP-Kategorie","profile_selector_switch_character":"Charakter wechseln","sc_link_account":"Konto","sc_link_activity_feed":"Aktivitäten-Feed","sc_link_cookies_policy":"Cookie-Richtlinie","sc_link_cookies_settings":"Cookie-Einstellungen","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Meine Informationen nicht verkaufen","sc_link_find_friends":"Freunde finden","sc_link_friends":"Freunde","sc_link_game_activation":"Spielaktivierung","sc_link_help":"Hilfe","sc_link_import_friends":"Freunde importieren","sc_link_join_social_club":"Registrieren","sc_link_legal":"Rechtliches","sc_link_log_out":"Abmelden","sc_link_messages":"Nachrichten","sc_link_my_friends":"Meine Freunde","sc_link_notifications":"Benachrichtigungen","sc_link_privacy_policy":"Datenschutzrichtlinien","sc_link_settings":"Einstellungen","sc_link_sign_in":"Anmelden","sc_link_support":"Support","sc_link_view_my_profile":"Mein Profil ansehen","sc_menu_drag_handle":"Menü öffnen bzw. schließen","sc_menu_toggle":"Social-Club-Menü öffnen bzw. schließen","components_track_list_title":"Trackliste","disabled_label":"Deaktiviert","next_button_label":"Nächste Videoseite","previous_button_label":"Vorherige Videoseite"},"es":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","plm_nav_scroll_left":"Desplazar hacia la izquierda","plm_nav_scroll_right":"Desplazar hacia la derecha","language_selector_default":"Selecciona un idioma","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta de perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Ajustes de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendáis mis datos","sc_link_find_friends":"Buscar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación del juego","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registrarse","sc_link_legal":"Aviso legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Ajustes","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Asistencia técnica","sc_link_view_my_profile":"Ver mi perfil","sc_menu_drag_handle":"Arrastrar el controlador del menú","sc_menu_toggle":"Cambiar el menú del Social Club","components_track_list_title":"Lista de pistas","disabled_label":"Desactivado","next_button_label":"Página de vídeo siguiente","previous_button_label":"Página de vídeo anterior"},"mx":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","plm_nav_scroll_left":"Desplazarse hacia la izquierda","plm_nav_scroll_right":"Desplazarse hacia la derecha","language_selector_default":"Seleccionar un idioma","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta del perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Muro de actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configuración de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendan mis datos","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación de juegos","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registro","sc_link_legal":"Legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Configuración","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Soporte","sc_link_view_my_profile":"Ver mi perfil","sc_menu_drag_handle":"Mover el handle del menú","sc_menu_toggle":"Cambiar menú del Social Club","components_track_list_title":"Lista de canciones","disabled_label":"Desactivado","next_button_label":"Página de video siguiente","previous_button_label":"Página de video anterior"},"fr":{"aria_label_open_new_window":"(S’ouvre dans une nouvelle fenêtre)","plm_nav_scroll_left":"Faire défiler vers la gauche","plm_nav_scroll_right":"Faire défiler vers la droite","language_selector_default":"Sélectionner une langue","profile_selector_mugshot":"Photo d\'identité : {userName}","profile_selector_profile_card":"Carte du profil","profile_selector_rp_icon":"Catégorie de RP","profile_selector_switch_character":"Changer de personnage","sc_link_account":"Compte","sc_link_activity_feed":"Fil d\'activités","sc_link_cookies_policy":"Politique en matière de cookies","sc_link_cookies_settings":"Paramètres des cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Ne pas vendre mes informations","sc_link_find_friends":"Trouver des amis","sc_link_friends":"Amis","sc_link_game_activation":"Activation de jeux","sc_link_help":"Aide","sc_link_import_friends":"Importer des amis","sc_link_join_social_club":"S’inscrire","sc_link_legal":"Mentions légales","sc_link_log_out":"Se déconnecter","sc_link_messages":"Messages","sc_link_my_friends":"Mes amis","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Charte de confidentialité","sc_link_settings":"Paramètres","sc_link_sign_in":"Se connecter","sc_link_support":"Assistance","sc_link_view_my_profile":"Voir mon profil","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Afficher le menu du Social Club","components_track_list_title":"Liste des morceaux","disabled_label":"Désactivé","next_button_label":"Page vidéo suivante","previous_button_label":"Page vidéo précédente"},"it":{"aria_label_open_new_window":"(Apri in una nuova finestra)","plm_nav_scroll_left":"Scorri a sinistra","plm_nav_scroll_right":"Scorri a destra","language_selector_default":"Seleziona una lingua","profile_selector_mugshot":"Foto segnaletica di {userName}","profile_selector_profile_card":"Scheda del profilo","profile_selector_rp_icon":"Categoria RP","profile_selector_switch_character":"Cambia personaggio","sc_link_account":"Account","sc_link_activity_feed":"Feed attività","sc_link_cookies_policy":"Politica sui cookie","sc_link_cookies_settings":"Impostazioni dei cookie","sc_link_crews":"Crew","sc_link_do_not_sell_my_information":"Non vendere le mie informazioni","sc_link_find_friends":"Trova amici","sc_link_friends":"Amici","sc_link_game_activation":"Attivazione gioco","sc_link_help":"Assistenza","sc_link_import_friends":"Importa amici","sc_link_join_social_club":"Registrati","sc_link_legal":"Note legali","sc_link_log_out":"Esci","sc_link_messages":"Messaggi","sc_link_my_friends":"I miei amici","sc_link_notifications":"Notifiche","sc_link_privacy_policy":"Politica sulla privacy","sc_link_settings":"Impostazioni","sc_link_sign_in":"Accedi","sc_link_support":"Supporto","sc_link_view_my_profile":"Visualizza il mio profilo","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Apri/chiudi il menu del Social Club","components_track_list_title":"Tracklist","disabled_label":"Disabilitato","next_button_label":"Pagina di video successiva","previous_button_label":"Pagina di video precedente"},"jp":{"aria_label_open_new_window":"(新しいウィンドウで開きます)","plm_nav_scroll_left":"左にスクロール","plm_nav_scroll_right":"右にスクロール","language_selector_default":"言語を選択","profile_selector_mugshot":"{ユーザーネーム}顔写真","profile_selector_profile_card":"プロフィールカード","profile_selector_rp_icon":"RPカテゴリー","profile_selector_switch_character":"キャラクター変更","sc_link_account":"アカウント","sc_link_activity_feed":"アクティビティフィード","sc_link_cookies_policy":"クッキーポリシー","sc_link_cookies_settings":"クッキー設定","sc_link_crews":"クルー","sc_link_do_not_sell_my_information":"個人情報を売らないでください","sc_link_find_friends":"フレンドを検索","sc_link_friends":"フレンド","sc_link_game_activation":"ゲームアクティベーション","sc_link_help":"ヘルプ","sc_link_import_friends":"フレンドをインポート","sc_link_join_social_club":"サインアップ","sc_link_legal":"利用規約","sc_link_log_out":"ログアウト","sc_link_messages":"メッセージ","sc_link_my_friends":"フレンド","sc_link_notifications":"通知","sc_link_privacy_policy":"プライバシーポリシー","sc_link_settings":"設定","sc_link_sign_in":"サインイン","sc_link_support":"サポート","sc_link_view_my_profile":"プロフィールを表示","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Social Clubメニューを切り替え","components_track_list_title":"トラックリスト","disabled_label":"無効","next_button_label":"次のビデオページ","previous_button_label":"前のビデオページ"},"kr":{"aria_label_open_new_window":"(새 창에서 열기)","plm_nav_scroll_left":"왼쪽 스크롤","plm_nav_scroll_right":"오른쪽 스크롤","language_selector_default":"언어 선택","profile_selector_mugshot":"{userName} 머그샷","profile_selector_profile_card":"프로필 카드","profile_selector_rp_icon":"RP 카테고리","profile_selector_switch_character":"캐릭터 교체","sc_link_account":"계정","sc_link_activity_feed":"활동 피드","sc_link_cookies_policy":"쿠키 정책","sc_link_cookies_settings":"쿠키 설정","sc_link_crews":"조직","sc_link_do_not_sell_my_information":"내 정보 판매 안 함","sc_link_find_friends":"친구 찾기","sc_link_friends":"친구","sc_link_game_activation":"게임 활성화","sc_link_help":"도움말","sc_link_import_friends":"친구 불러오기","sc_link_join_social_club":"가입","sc_link_legal":"법률 관련","sc_link_log_out":"로그아웃","sc_link_messages":"메시지","sc_link_my_friends":"내 친구","sc_link_notifications":"알림","sc_link_privacy_policy":"개인 정보 보호 정책","sc_link_settings":"설정","sc_link_sign_in":"로그인","sc_link_support":"지원","sc_link_view_my_profile":"내 프로필 보기","sc_menu_drag_handle":"드래그 메뉴 핸들","sc_menu_toggle":"Social Club 메뉴 켜기/끄기","components_track_list_title":"트랙리스트","disabled_label":"비활성화됨","next_button_label":"다음 비디오 페이지","previous_button_label":"이전 비디오 페이지"},"pl":{"aria_label_open_new_window":"(Otwórz w nowym oknie)","plm_nav_scroll_left":"Przesuń w lewo","plm_nav_scroll_right":"Przesuń w prawo","language_selector_default":"Wybierz język","profile_selector_mugshot":"Zdjęcie – {userName}","profile_selector_profile_card":"Karta profilu","profile_selector_rp_icon":"Poziom RP","profile_selector_switch_character":"Zmień postać","sc_link_account":"Konto","sc_link_activity_feed":"Zajęcia","sc_link_cookies_policy":"Polityka plików cookie","sc_link_cookies_settings":"Ustawienia plików cookie","sc_link_crews":"Ekipy","sc_link_do_not_sell_my_information":"Zabraniam sprzedaży moich danych","sc_link_find_friends":"Szukaj znajomych","sc_link_friends":"Znajomi","sc_link_game_activation":"Aktywacja gry","sc_link_help":"Pomoc","sc_link_import_friends":"Importuj znajomych","sc_link_join_social_club":"Zarejestruj się","sc_link_legal":"Informacje prawne","sc_link_log_out":"Wyloguj się","sc_link_messages":"Wiadomości","sc_link_my_friends":"Moi znajomi","sc_link_notifications":"Powiadomienia","sc_link_privacy_policy":"Polityka prywatności","sc_link_settings":"Ustawienia","sc_link_sign_in":"Zaloguj się","sc_link_support":"Wsparcie","sc_link_view_my_profile":"Przeglądaj profil","sc_menu_drag_handle":"Przeciągnij uchwyt menu","sc_menu_toggle":"Włącz lub wyłącz menu Social Club","components_track_list_title":"Lista utworów","disabled_label":"Wyłączone","next_button_label":"Następna strona z filmami","previous_button_label":"Poprzednia strona z filmami"},"br":{"aria_label_open_new_window":"(Abre em uma nova janela)","plm_nav_scroll_left":"Rolar para a esquerda","plm_nav_scroll_right":"Rolar para a direita","language_selector_default":"Selecione um idioma","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Cartão de perfil","profile_selector_rp_icon":"Categoria de RP","profile_selector_switch_character":"Alternar personagem","sc_link_account":"Conta","sc_link_activity_feed":"Feed de atividade","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configurações de cookies","sc_link_crews":"Comandos","sc_link_do_not_sell_my_information":"Não vendam a minha informação","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Ativação de jogos","sc_link_help":"Ajuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Inscrever-se","sc_link_legal":"Aviso legal","sc_link_log_out":"Sair","sc_link_messages":"Mensagens","sc_link_my_friends":"Meus amigos","sc_link_notifications":"Notificações","sc_link_privacy_policy":"Política de Privacidade","sc_link_settings":"Configurações","sc_link_sign_in":"Iniciar sessão","sc_link_support":"Suporte","sc_link_view_my_profile":"Visualizar meu perfil","sc_menu_drag_handle":"Arrastar título do menu","sc_menu_toggle":"Alternar menu do Social Club","components_track_list_title":"Lista de faixas","disabled_label":"Desabilitado","next_button_label":"Próxima página de vídeos","previous_button_label":"Página anterior de vídeos"},"ru":{"aria_label_open_new_window":"(ссылка откроется в новом окне)","plm_nav_scroll_left":"Пролистать влево","plm_nav_scroll_right":"Пролистать вправо","language_selector_default":"Выбрать язык","profile_selector_mugshot":"Фотография игрока {userName}","profile_selector_profile_card":"Карта профиля","profile_selector_rp_icon":"Категория опыта","profile_selector_switch_character":"Сменить персонажа","sc_link_account":"Учетная запись","sc_link_activity_feed":"Лента событий","sc_link_cookies_policy":"Политика использования файлов Cookie","sc_link_cookies_settings":"Настройки файлов Cookie","sc_link_crews":"Банды","sc_link_do_not_sell_my_information":"Я запрещаю продавать свою личную информацию","sc_link_find_friends":"Поиск друзей","sc_link_friends":"Друзья","sc_link_game_activation":"Активация игры","sc_link_help":"Помощь","sc_link_import_friends":"Импорт друзей","sc_link_join_social_club":"Регистрация","sc_link_legal":"Юридическая информация","sc_link_log_out":"Выход","sc_link_messages":"Сообщения","sc_link_my_friends":"Мои друзья","sc_link_notifications":"Уведомления","sc_link_privacy_policy":"Политика конфиденциальности","sc_link_settings":"Настройки","sc_link_sign_in":"Войти","sc_link_support":"Поддержка","sc_link_view_my_profile":"Моя учетная запись","sc_menu_drag_handle":"Перенести маркер меню","sc_menu_toggle":"Переключить меню Social Club","components_track_list_title":"Список песен","disabled_label":"Отключено","next_button_label":"Следующая страница с видео","previous_button_label":"Предыдущая страница с видео"},"hans":{"aria_label_open_new_window":"（在新窗口中打开）","plm_nav_scroll_left":"向左滚动","plm_nav_scroll_right":"向右滚动","language_selector_default":"选择一种语言","profile_selector_mugshot":"{userName} 面部照片","profile_selector_profile_card":"档案卡","profile_selector_rp_icon":"声望值类别","profile_selector_switch_character":"切换角色","sc_link_account":"账户","sc_link_activity_feed":"活动动态","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 设置","sc_link_crews":"帮会","sc_link_do_not_sell_my_information":"请勿出售我的信息","sc_link_find_friends":"查找好友","sc_link_friends":"好友","sc_link_game_activation":"游戏激活","sc_link_help":"帮助","sc_link_import_friends":"导入好友","sc_link_join_social_club":"注册","sc_link_legal":"法律声明","sc_link_log_out":"登出","sc_link_messages":"信息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隐私政策","sc_link_settings":"设置","sc_link_sign_in":"登录","sc_link_support":"支持","sc_link_view_my_profile":"查看我的档案","sc_menu_drag_handle":"拖动菜单处理","sc_menu_toggle":"切换 Social Club 菜单","components_track_list_title":"曲目列表","disabled_label":"已禁用","next_button_label":"下一页视频","previous_button_label":"上一页视频"},"tw":{"aria_label_open_new_window":"（在新視窗開啟）","plm_nav_scroll_left":"向左捲動","plm_nav_scroll_right":"向右捲動","language_selector_default":"選擇語言","profile_selector_mugshot":"{userName} 罪犯檔案照","profile_selector_profile_card":"資料卡","profile_selector_rp_icon":"聲望值類別","profile_selector_switch_character":"切換角色","sc_link_account":"帳戶","sc_link_activity_feed":"動態活動","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 設定","sc_link_crews":"幫會","sc_link_do_not_sell_my_information":"不要販售我的個人資料","sc_link_find_friends":"尋找好友","sc_link_friends":"好友","sc_link_game_activation":"遊戲啟用","sc_link_help":"幫助","sc_link_import_friends":"匯入好友","sc_link_join_social_club":"註冊","sc_link_legal":"法律聲明","sc_link_log_out":"登出","sc_link_messages":"訊息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隱私權政策","sc_link_settings":"設定","sc_link_sign_in":"登入","sc_link_support":"支援","sc_link_view_my_profile":"查看我的設定檔","sc_menu_drag_handle":"拖曳選單控點","sc_menu_toggle":"開關 Social Club 選單","components_track_list_title":"曲目清單","disabled_label":"停用","next_button_label":"下一個影片頁面","previous_button_label":"上一個影片頁面"}}'),
        xa = (0, l.defineMessages)({
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          }
        }),
        ya = {
          pillBtn: "rockstargames-sites-gtacb792ef8796eaa09f8b5c1ee0230fcd7",
          selected: "rockstargames-sites-gtac951b9f5173e8a37be389854c40995ee",
          scMenuStyles: "rockstargames-sites-gtafa91a55e22ad688cba0bc1210eaf4726",
          languageSelector: "rockstargames-sites-gtab631f2ce92e4a89f8eddebd32e8ed30a",
          open: "rockstargames-sites-gtaedc598921a872174190475d0ad016d15",
          linkWrapper: "rockstargames-sites-gtac4b7087d1fcbaad6967e61b84160ff79",
          links: "rockstargames-sites-gtac7d345d5c7e567e0ee75b792d5bdfb88",
          selectBoxWrapper: "rockstargames-sites-gtae3e55a10507405de05ae92006ec0d02b",
          selectBox: "rockstargames-sites-gtac646a2bff16ec3003b027857488cd612",
          selectBoxOption: "rockstargames-sites-gtabcccd1077d13d7fe1585655e5c5f8363"
        },
        Na = (0, l.withIntl)((e => {
          let {
            theme: a,
            languageSelectorOpened: t,
            setLanguageSelectorOpened: s
          } = e;
          const i = (0, m.useLocation)(),
            r = (0, l.useIntl)(),
            [n, c] = (0, l.getLocale)(),
            [d, g] = (0, o.useState)(!1),
            _ = (0, o.useMemo)((() => (0, va.c)()), []),
            p = (0, o.useCallback)((e => {
              let a = i.pathname;
              const t = a.split("/");
              return l.locales.map((e => e.subdomaincom)).includes(t[0]) && (a = t.slice(1).join("/")), _.currentSite?.site === va.U.www ? "en" === e ? `${window.location.origin}${a}${i.search}` : `${window.location.origin}/${e}${a}${i.search}` : `${window.location.origin}${a}${i.search}`
            }), [i]),
            k = (0, o.useRef)(null),
            [b, v] = (0, o.useState)(0),
            h = matchMedia("(hover: none) and (pointer: coarse)").matches,
            x = e => {
              if (s && s(!1), n.subdomaincom === e || "none" === e) return void(s && s(!1));
              const a = l.locales.find((a => a.subdomaincom === e));
              a && (c(a.iso), window.location.href = p(e))
            };
          return (0, o.useEffect)((() => {
            void 0 !== t && !1 === t && !0 === d && g(!1)
          }), [t]), (0, o.useEffect)((() => {
            k.current && v(k.current.scrollHeight)
          }), [k]), (0, f.jsxs)("div", {
            className: [ya.languageSelector, d ? ya.open : ""].join(" "),
            "data-theme": a,
            children: [h && "sc-menu" === a && (0, f.jsx)("div", {
              className: ya.selectBoxWrapper,
              children: (0, f.jsxs)("select", {
                className: ya.selectBox,
                onClick: e => e.stopPropagation(),
                onChange: e => {
                  x(e.currentTarget.value)
                },
                "aria-label": r.formatMessage(xa.language_selector_default),
                children: [(0, f.jsx)("option", {
                  className: ya.selectBoxOption,
                  value: "none",
                  children: (0, f.jsx)(l.FormattedMessage, {
                    ...xa.language_selector_default
                  })
                }), l.locales.map((e => {
                  let {
                    label: a,
                    subdomaincom: t
                  } = e;
                  return (0, f.jsx)("option", {
                    className: ya.selectBoxOption,
                    value: t,
                    children: a
                  }, `mobile-${t}`)
                }))]
              })
            }), (!h || "sc-menu" !== a) && (0, f.jsxs)(f.Fragment, {
              children: [(0, f.jsxs)("button", {
                onClick: e => {
                  e.stopPropagation(), s && s(!d), g(!d)
                },
                type: "button",
                "aria-label": r.formatMessage(xa.language_selector_default),
                children: [(0, f.jsx)("i", {}), (0, f.jsx)("span", {
                  children: (0, f.jsx)(l.FormattedMessage, {
                    ...xa.language_selector_default
                  })
                })]
              }), (0, f.jsx)("div", {
                className: ya.linkWrapper,
                ref: k,
                style: {
                  "--ls-linkWrapper-opened-height": `${b}px`
                },
                children: (0, f.jsx)("div", {
                  className: ya.links,
                  children: l.locales.map((e => {
                    let {
                      subdomaincom: a,
                      label: t
                    } = e;
                    return (0, f.jsx)(u, {
                      to: p(a),
                      onClick: () => {
                        x(a)
                      },
                      tabIndex: d ? 0 : -1,
                      children: t
                    }, `desktop-${a}`)
                  }))
                })
              })]
            })]
          })
        }), ha),
        ja = {
          layeredImage: "rockstargames-sites-gtaa29c233d553c5905763bb69412c1ece4",
          layersWrapper: "rockstargames-sites-gtaaabf78eb3e1fe545556ad0fa5639296e",
          "hero-lg": "rockstargames-sites-gtaca666917bdeaed43fd0a7af7dc30a0f7",
          "hero-md": "rockstargames-sites-gtaf0a202fcbf13f1e91157e531ae829ea3",
          "hero-sm": "rockstargames-sites-gtae03dbf5d16aeab81ca65f4cb7e64446f",
          contain: "rockstargames-sites-gtac4c3c929b11e88540e3f19d5715393ec",
          cover: "rockstargames-sites-gtab283d6381c82abf4dde21c57b8fc5f66",
          fill: "rockstargames-sites-gtae9d16b94c1ed476c9346cb6f48f5ad3e",
          "bg-img": "rockstargames-sites-gtae45fabf9c4e04bf3ee27e9c84c50c09b",
          imageLayer: "rockstargames-sites-gtaed8d0ad18a62f087629ff5831fa0ac55",
          "layer-lg-height": "rockstargames-sites-gtafaf1d5c6b2fe2ad27d4bb95ba7388f3d",
          "layer-md-height": "rockstargames-sites-gtab41041f11a5ef98325948acc3dec956c",
          "layer-sm-height": "rockstargames-sites-gtaba7d5822aa073c9e01cd682d65c18944",
          "layer-xl-height": "rockstargames-sites-gtaec2399a1f7e79e9aacba81b242ad0602",
          "layer-xs-height": "rockstargames-sites-gtaa6ec38ac99c762fcf0dd99aa2ced8f2b",
          "layer-xxl-height": "rockstargames-sites-gtad7c1314e717273dfbb2acd3d5e06e585",
          "layer-lg-width": "rockstargames-sites-gtaca0dd7a55a5db5ee358ce51a166e5431",
          "layer-md-width": "rockstargames-sites-gtabd4c246f4f0eaf7173d104ed1e7c2d06",
          "layer-sm-width": "rockstargames-sites-gtafe3f49cba9cc10e4e076a43a6b36b862",
          "layer-xl-width": "rockstargames-sites-gtabde3d6485ac7bb483dcca1ad4e2bbe67",
          "layer-xs-width": "rockstargames-sites-gtab87efd95b330cacd4a5eaecf83528f4d",
          "layer-xxl-width": "rockstargames-sites-gtaac872df7985f9d591c85f97c72d451dc",
          "bottom-y": "rockstargames-sites-gtad63fdb49c964c28c5e8952cd79a393a0",
          "center-x": "rockstargames-sites-gtad248443eb924360a5d1d7211094ea827",
          "center-y": "rockstargames-sites-gtaa8d87c765a51d98f0e3a9afd149ed0dc",
          "left-x": "rockstargames-sites-gtadcaa6339b43850be2e14967cab730041",
          "right-x": "rockstargames-sites-gtab656d800e3d134bd3a7e273a5f6d7ae6",
          "top-y": "rockstargames-sites-gtaadaf230f139f906eb912b58b315406ac",
          border: "rockstargames-sites-gtac73e199a8978fb80895753c9a38fcdff",
          shards: "rockstargames-sites-gtae650a715d6f220ad49bb568768154b0e",
          shards_three: "rockstargames-sites-gtab0c8be28788c6b23cea904bdc60d7e07",
          shards_two: "rockstargames-sites-gtae41252d3a0aee1d229f6bddc20c38d47",
          dual: "rockstargames-sites-gtadb575e1d021e69ebb4265a29484e2888"
        },
        wa = e => {
          let {
            style: a,
            className: t
          } = e;
          const s = {
              ...a
            },
            i = a["--border-image-source"];
          return i && (s["--border-image-source"] = `url(${(0,I.useGetCdnSource)(i)})`), (0, f.jsx)("div", {
            className: (0, I.classList)(ja.border, t),
            style: {
              ...s
            }
          })
        },
        Sa = e => e?.images ? (0, f.jsx)("div", {
          className: (0, I.classList)(ja.layeredImage, ja[e?.variantClass], ja[e?.wrapperSizeClass]),
          style: {
            ...e?.style ?? {}
          },
          children: (0, f.jsxs)("div", {
            className: ja.layersWrapper,
            children: [e?.images?.map(((e, a) => {
              const {
                image: t,
                paddingClass: s,
                imageSizeClass: i,
                objectFitClass: r,
                positionClassX: n,
                positionClassY: c,
                zIndex: o,
                className: l,
                style: d,
                alt: m,
                displayClass: g
              } = e;
              return (0, f.jsx)(_e, {
                image: t,
                style: {
                  zIndex: o ?? ++a
                },
                imageStyle: d,
                className: (0, I.classList)(l, g, ja.imageLayer, ja[s], ja[i], ja[r], ja[n], ja[c]),
                alt: m
              }, o ?? ++a)
            })), e?.borderImage && (0, f.jsx)(wa, {
              style: e?.borderImage,
              className: e?.borderImage?.displayClass
            })]
          })
        }) : null,
        Ca = e => {
          let {
            hero: a,
            children: t
          } = e;
          return a ? (0, f.jsx)("div", {
            className: "rockstargames-sites-gtaefc561ad30f5dfe75c79d939737650dc",
            children: t
          }) : t
        },
        Ia = e => {
          let {
            badge: a = null,
            badgeType: t,
            discountTxt: s,
            splitter: i,
            image: r,
            style: n,
            className: c = "",
            attributes: o = {},
            role: l,
            hero: d = !1
          } = e;
          return (0, f.jsx)(Ca, {
            hero: d,
            children: (0, f.jsx)("figure", {
              children: (0, f.jsxs)("div", {
                className: (0, I.classList)("rockstargames-sites-gtacab262c98c7f5bb3e982d9b075b3c2a8", d ? "rockstargames-sites-gtacefd6d8859aeec1057caed28caa160c3" : "", o?.hiddenMobile ? "hiddenMobile" : "", o?.hiddenLarge ? "hiddenLarge" : "", o?.className, c),
                style: (0, F.safeStyles)({
                  ...n,
                  ...o?.style
                }),
                ...o,
                children: [(0, f.jsx)(_e, {
                  image: r,
                  className: c
                }), (r?.badge || r?.discountTxt || a || s) && (0, f.jsx)(Me, {
                  badge: r?.discountTxt ?? r?.badge ?? a ?? s,
                  badgeType: t,
                  splitter: r?.splitter ?? i,
                  role: r?.role ?? l
                }), r?.caption && (0, f.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: r.caption
                  }
                })]
              })
            })
          })
        },
        Ta = {
          pillBtn: "rockstargames-sites-gtaeea0db67b0aabf28288b288845324afe",
          selected: "rockstargames-sites-gtad1d25362fd730ca979d5ad79de088f89",
          multiSourceContainer: "rockstargames-sites-gtadc538bbfc2f407ed9fe840097ccac819",
          multiSourceImage: "rockstargames-sites-gtaee782a29692a8eb06db1287a4984c243",
          animatePlaceholder: "rockstargames-sites-gtafbd73f5f70c2ce64aa9c9bd398f1a3b5",
          "loader-keyframes": "rockstargames-sites-gtaf6040b2ae96a9b0dcdb2d283c9caff59"
        },
        Ma = e => {
          let {
            imageUrl: a,
            className: t,
            alt: s,
            style: i,
            lazy: r = !1,
            decoding: n = "auto",
            sizes: c = [320, 480, 768, 1024, 1440, 1920, 2560]
          } = e;
          const [l, d] = (0, o.useState)(!1);
          return (0, f.jsxs)("div", {
            className: Ta.multiSourceContainer,
            children: [!l && (0, f.jsx)("img", {
              className: [t, Ta.animatePlaceholder].join(" "),
              src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjMzMzMzMzIi8+Cjwvc3ZnPgo=",
              sizes: "(max-width: 1024px) 100vw, 1024px",
              alt: "Loading...",
              style: i
            }), (0, f.jsx)("img", {
              className: [Ta.multiSourceImage, t].join(" "),
              src: `${a}?im=Resize=1920`,
              srcSet: (m = a, c.map((e => `${m}?im=Resize=${e} ${e}w`)).join(", ")),
              sizes: "(max-width: 400px) 200px, (max-width: 1920px) 100vw, 1920px",
              alt: s ?? "Multi-Source Image",
              style: i,
              onLoad: () => {
                d(!0)
              },
              loading: r ? "lazy" : "eager",
              decoding: n
            })]
          });
          var m
        },
        La = {
          tag: "rockstargames-sites-gtaed77774d2704bc0ebc0ac156542ae053"
        },
        Ea = e => {
          let {
            className: a,
            href: t,
            title: s,
            style: i
          } = e;
          const r = (0, f.jsxs)("div", {
            style: i,
            className: [La.tag, a].join(" "),
            children: [(0, f.jsx)("i", {}), s]
          });
          return void 0 !== t ? (0, f.jsx)(u, {
            to: t,
            children: r
          }) : r
        },
        Ba = {
          newswireBlock: "rockstargames-sites-gtaa793f470884d207243d6c3caac8ad811",
          info: "rockstargames-sites-gtad50f6d2bc5f983c05311292acb4c78a5",
          title: "rockstargames-sites-gtacc389449dc1495fc9c323fc2c547857d",
          newswireBlockNoSpecialOrder: "rockstargames-sites-gtaffd167124f27c8e26a147f49c88796e5",
          preview: "rockstargames-sites-gtabbfbcf32c8c892ea29f4178949643475",
          previewMobile: "rockstargames-sites-gtaf88852766488b21a28c42d230ea529a1",
          top: "rockstargames-sites-gtafa1a6f4c7d94b94f5af2dc1ac9af79f1",
          startAnimation: "rockstargames-sites-gtae380e8c67066df6f33fc018341ea96e5"
        },
        Pa = e => {
          let {
            index: a,
            post: t,
            noSpecialOrder: s = !1,
            style: i = {}
          } = e;
          const [r] = (0, m.useSearchParams)(), n = t.preview_images_parsed.newswire_block, c = {
            default: 0 !== a || s ? n.square || n.d16x9 || n._fallback : n.d16x9 || n.square || n._fallback,
            mobile: n.square || n._fallback
          }, [o, l] = (0, F.usePreloadImg)(c.default), [d, g] = (0, F.usePreloadImg)(c.mobile), _ = {
            default: {
              backgroundImage: `url(${c.default})`
            },
            mobile: {
              backgroundImage: `url(${c.mobile})`
            }
          };
          return (0, f.jsx)(u, {
            "data-gtm-category": "Newswire",
            "data-gtm-action": "Article Block Click",
            "data-gtm-label": `${t.title}`,
            to: t.url,
            className: [Ba.newswireBlock, s ? Ba.newswireBlockNoSpecialOrder : "", null !== o ? Ba.startAnimation : ""].join(" "),
            children: (0, f.jsxs)(f.Fragment, {
              children: [0 !== a || r.get("tag_id") ? (0, f.jsx)("div", {
                className: Ba.preview,
                style: _.default
              }) : (0, f.jsxs)(f.Fragment, {
                children: [(0, f.jsx)("div", {
                  className: Ba.previewMobile,
                  style: _.mobile
                }), (0, f.jsx)("div", {
                  className: Ba.preview,
                  style: _.default
                })]
              }), (0, f.jsxs)("div", {
                className: Ba.info,
                children: [(0, f.jsxs)("div", {
                  className: Ba.top,
                  children: [t.primary_tags.length ? (0, f.jsx)(Ea, {
                    title: t.primary_tags[t.primary_tags.length > 1 && 722 === t.primary_tags[0].id ? 1 : 0].name
                  }) : "", (0, f.jsx)("time", {
                    dateTime: t.created,
                    children: t.created_formatted
                  })]
                }), (0, f.jsx)("h5", {
                  className: Ba.title,
                  dangerouslySetInnerHTML: {
                    __html: t.title
                  }
                })]
              })]
            })
          })
        };
      var za = t(55492),
        $a = t.n(za);
      const Va = (0, F.withTranslations)((e => {
          let {
            relativeTo: a = "",
            tagId: t = null,
            metaUrl: s = "/newswire",
            t: i
          } = e;
          const [r] = (0, m.useSearchParams)(), {
            tagId: n = null
          } = (0, m.useParams)(), [c, l] = (0, o.useState)(n ?? t ?? r.get("tag_id")), [d, g] = (0, o.useState)(1), [u, _] = (0, o.useState)([]), [p, b] = (0, o.useState)(null), {
            data: v
          } = (0, k.useQuery)($a(), {
            variables: {
              tagId: Number(c),
              page: d,
              metaUrl: s
            },
            autoSetLoading: !0
          });
          return (0, o.useEffect)((() => {
            g(1), _([]), l(n ?? t ?? r.get("tag_id"))
          }), [r.get("tag_id")]), (0, o.useEffect)((() => {
            v && v.posts && v.posts.paging && b(v.posts.paging), v && v.posts && v.posts.results && _(u.concat(v.posts.results))
          }), [v]), u.length ? (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsx)(Oa, {
              posts: u,
              relativeTo: a,
              noSpecialOrder: null !== c
            }), null !== p && p.nextPage ? (0, f.jsx)(C, {
              onClick: () => g(d + 1),
              disabled: !1,
              context: "secondary",
              children: i("More Stories")
            }) : ""]
          }) : null
        })),
        Da = {
          pillBtn: "rockstargames-sites-gtaafd0af959edb4a463c41ad4e9cc5dadc",
          selected: "rockstargames-sites-gtabcd59aa4a9e88d86a2cbe8d4972f8f51",
          related: "rockstargames-sites-gtaa748ad776070dab831edc1f67f66af08",
          posts: "rockstargames-sites-gtac0aa38678decd13ca38886b4547efedd",
          just1post: "rockstargames-sites-gtab1a31ddf7fd4458ee860d354a6a0ac92"
        },
        Aa = (0, F.withTranslations)((e => {
          let {
            posts: a,
            t
          } = e;
          return (0, f.jsxs)("section", {
            className: Da.related,
            children: [(0, f.jsx)("h2", {
              children: t("Related Stories")
            }), (0, f.jsx)("div", {
              className: [Da.posts, 1 === a.length ? Da.just1post : ""].join(" "),
              children: a.map((e => (0, f.jsx)(Pa, {
                noSpecialOrder: !0,
                post: e
              }, e.id)))
            })]
          })
        })),
        Fa = {
          newswireBlocks: "rockstargames-sites-gtac2c8eedd25de7e186655f98b2a8d8960",
          noSpecialOrder: "rockstargames-sites-gtac0d0db9dfc71c9f4f959b9c017b1ae4b"
        },
        Oa = (0, F.withGtmTracking)((e => {
          let {
            noSpecialOrder: a = !1,
            posts: t,
            gtmTrack: s,
            relativeTo: i
          } = e;
          return (0, o.useEffect)((() => {
            if (!t.length) return;
            const e = {
              event: "trackEvent",
              eventCategory: "Home",
              eventAction: "Newswire Impressions",
              ecommerce: {
                impressions: []
              }
            };
            t.map(((a, t) => {
              e.ecommerce.impressions.push({
                name: a.title,
                id: a.id,
                position: t + 1,
                list: "Home"
              })
            })), s(e)
          }), [t.length]), (0, f.jsx)("div", {
            className: [Fa.newswireBlocks, a ? Fa.noSpecialOrder : "", Fa.contextHome].join(" "),
            children: t.map(((e, t) => (0, f.jsx)(Pa, {
              index: t,
              noSpecialOrder: a,
              post: e
            }, e.id)))
          })
        })),
        Ra = {
          pillBtn: "rockstargames-sites-gtaf87ac9a7d56545847cf4d8ca471b03e6",
          selected: "rockstargames-sites-gtaa8ea61e57fd58bfcb99aef7e6d687045",
          grid: "rockstargames-sites-gtaa57241f29873f89f89ab8b27994e71c3",
          itemList: "rockstargames-sites-gtadaec3f5ce63d42cb07e3e724737c8361",
          gtaplus: "rockstargames-sites-gtabd78cfb71ed31029ba4279325166bfab",
          rdo: "rockstargames-sites-gtaa6244398a800ffddab72c14f717b0eab",
          noImg: "rockstargames-sites-gtae88f741af7d5e0529ff4fb6bb82af04f",
          gtao: "rockstargames-sites-gtaab60d91453348d2e4c090ef3ebb04347",
          custom: "rockstargames-sites-gtac20e7ba6ceaba3afd37095b172797711",
          yellow: "rockstargames-sites-gtab16672deedfe102b065925cbe0fb931c",
          hotPink: "rockstargames-sites-gtad0d01601de7131d9d6d11321b4299e59",
          red: "rockstargames-sites-gtad1b5397aff94d33b57674b04a3456e03",
          turquoise: "rockstargames-sites-gtad6541b973ce158c8f2fb81483015211f",
          purple: "rockstargames-sites-gtaf3e34d902681219d4d8490eb164f7727",
          teal: "rockstargames-sites-gtaa6c3b6b6a2395eb18a1174294f26f4ea",
          blue: "rockstargames-sites-gtaeade6e843c5afd48d3a8959fb0b88222",
          green: "rockstargames-sites-gtaa82c313f8f85fc6304ddb703be2fa271",
          darkRed: "rockstargames-sites-gtad394c61fdce2bf8894ffb801ee680c2a",
          darkBlue: "rockstargames-sites-gtaf1d73cc00a3ab644aab949183a8298a7",
          goldenrod: "rockstargames-sites-gtacdcb0c5076309a329da2a6e857cc3bdf",
          skull: "rockstargames-sites-gtaba4bd16bff2fbc40616457007b4a7442"
        },
        {
          sanitize: Ua
        } = ke(),
        Ga = e => {
          let {
            list: a,
            string: t,
            starColor: s,
            style: i,
            className: r,
            game: n,
            noImg: c,
            columns: l,
            mobileColumns: d
          } = e;
          const [m, g] = (0, o.useState)(null);
          return (0, o.useEffect)((() => {
            g(a)
          }), [a]), t || a ? l && m ? (0, f.jsx)("div", {
            className: Ra.grid,
            style: {
              "--ordered-list-grid-column": l,
              "--ordered-list-grid-column-mobile": d ?? l
            },
            children: (0, f.jsx)("ol", {
              style: (0, F.safeStyles)(i),
              className: (0, I.classList)(Ra.itemList, Ra.noImg, Ra[s], Ra[n]),
              children: m.map((e => (0, f.jsx)("li", {
                dangerouslySetInnerHTML: {
                  __html: Ua(e.content)
                }
              }, e.content)))
            })
          }) : (0, f.jsx)("ol", {
            style: (0, F.safeStyles)(i),
            className: (0, I.classList)(Ra.itemList, Ra.custom, c ? Ra.noImg : "", s ? Ra[s] : "", n ? Ra[n] : "", r ?? ""),
            children: a.map((e => (0, f.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: Ua(e?.content ?? e)
              }
            }, e?.content)))
          }) : null
        },
        Ha = (e, a) => {
          const t = e.tiers && e.tiers.every((e => e.isComplete)),
            s = a.tiers && a.tiers.every((e => e.isComplete));
          return t && !s ? 1 : !t && s ? -1 : 0
        },
        Wa = {
          pillBtn: "rockstargames-sites-gtae6891f053f06919f1ef0dc72cafe9ae7",
          selected: "rockstargames-sites-gtae5cce3088e494e8ddb9b0cf5528697a3",
          packCardTierIndicator: "rockstargames-sites-gtaeee874b61946e2a65886d622445e1c38",
          tierIndicator: "rockstargames-sites-gtabf9ed66cb83cf9a38bfc6fbb8e105fb7",
          active: "rockstargames-sites-gtacfa711252c08391d3a0f1ecd8728a61a"
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
          return (0, f.jsx)("div", {
            className: Wa.packCardTierIndicator,
            children: a?.map(((e, a) => (0, f.jsx)("div", {
              className: [Wa.tierIndicator, e.isComplete ? Wa.active : ""].join(" ")
            }, a)))
          })
        },
        Ka = {
          pillBtn: "rockstargames-sites-gtae2e4b892ddcbdb2e09d3c3599a7e6c56",
          selected: "rockstargames-sites-gtaff5c3c023fc12b68c6bf92b560c479b1",
          packCard: "rockstargames-sites-gtad6ef486c5f60d41c5662b092336c1f52",
          packCardImageBox: "rockstargames-sites-gtaeb4637cb1c81d1def1fd92252f90d675",
          packCompleted: "rockstargames-sites-gtafcd5bbd0d1e3ebd45cf2cb372468e62c",
          packCardTextBox: "rockstargames-sites-gtaa124ee1b0383d30157e84108cf10b83b",
          badge: "rockstargames-sites-gtad42fb1fd7d553d75675a251df2a255ee",
          icon: "rockstargames-sites-gtacbc69eda17393995ac9d41a8b4b531e8",
          label: "rockstargames-sites-gtad4649f3812d37e7407503d49dcaaba04"
        },
        Ya = e => {
          let {
            title: a,
            url: t,
            imageUrl: s,
            className: i,
            tiers: r,
            onClick: n,
            badgeContent: c = "Complete",
            imageSize: l = 420,
            imageLoaded: d
          } = e;
          const [g, u] = (0, o.useState)(!1), [_, p] = (0, o.useState)(d);
          (0, o.useEffect)((() => {
            if (r) {
              const e = r.some((e => !e.isComplete));
              u(!e)
            }
          }), [r]);
          const k = `${s}?im=Resize,height=${l}`;
          return (0, F.usePreloadImg)(k, (() => p(!0))), (0, f.jsx)(m.NavLink, {
            className: [Ka.packCard, i, g ? Ka.packCompleted : ""].join(" "),
            to: t,
            onClick: n,
            children: (0, f.jsxs)("div", {
              className: [Ka.packCardImageBox, _ ? Ka.packCardImageLoaded : ""].join(" "),
              style: {
                backgroundImage: `url("${k}")`
              },
              children: [g && (0, f.jsxs)("div", {
                className: Ka.badge,
                children: [(0, f.jsx)("div", {
                  className: Ka.icon
                }), (0, f.jsx)("div", {
                  className: Ka.label,
                  children: c
                })]
              }), (0, f.jsxs)("div", {
                className: Ka.packCardTextBox,
                children: [(0, f.jsx)("h4", {
                  children: a
                }), !g && (0, f.jsx)(Xa, {
                  tiers: r
                })]
              })]
            })
          })
        },
        Qa = {
          pillBtn: "rockstargames-sites-gtac0607ec9e0a3925181496fc555721e0a",
          selected: "rockstargames-sites-gtaff76988869bea7d18917be00339b2434",
          packList: "rockstargames-sites-gtaffeeb1f272f99c5cb4711e4956c65f7f",
          headerVisible: "rockstargames-sites-gtaf6652e03be6ce55bd8f068900093a707",
          packCard: "rockstargames-sites-gtaa53b37fe7ab10b353eceea86123258a1",
          packGrid: "rockstargames-sites-gtab85775dc95fb3881171ee42e49076cbf"
        },
        Za = e => {
          let {
            isHeaderVisible: a,
            packListItems: t,
            packListClassName: s = Qa.packList,
            packGridClassName: i = Qa.packGrid,
            selectPackCard: r,
            sortFunction: n = Ha
          } = e;
          const c = (0, o.useRef)(null),
            l = [...t].sort(n);
          return (0, f.jsx)("div", {
            className: [s, a ? Qa.headerVisible : ""].join(" "),
            "data-testid": "pack-list",
            children: (0, f.jsx)("div", {
              ref: c,
              className: i,
              "data-testid": "pack-grid",
              children: l.map((e => {
                let {
                  title: a,
                  url: t,
                  imageUrl: s,
                  tiers: i
                } = e;
                return (0, f.jsx)(Ya, {
                  title: a,
                  url: t,
                  className: Qa.packCard,
                  imageUrl: s,
                  tiers: i,
                  onClick: () => r(a, t)
                }, t)
              }))
            })
          })
        },
        Ja = {
          pillBtn: "rockstargames-sites-gtae2620ca79db4bb12b74eb4adbcba56ce",
          selected: "rockstargames-sites-gtad429050d220c77a1c9e8631f9b9f4f02",
          navPill: "rockstargames-sites-gtac3ef0af25cfc7d1d0048148984230190"
        },
        et = e => {
          let {
            title: a,
            onClick: t,
            selected: s
          } = e;
          return (0, f.jsx)("button", {
            type: "button",
            onClick: t,
            className: [Ja.navPill, s ? Ja.selected : ""].join(" "),
            children: (0, f.jsx)("div", {
              children: a
            })
          })
        };
      var at;

      function tt() {
        return tt = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = arguments[a];
            for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s])
          }
          return e
        }, tt.apply(this, arguments)
      }
      const st = e => o.createElement("svg", tt({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none"
      }, e), at || (at = o.createElement("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "m15 18-6-6 6-6"
      })));
      var it;

      function rt() {
        return rt = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = arguments[a];
            for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s])
          }
          return e
        }, rt.apply(this, arguments)
      }
      const nt = e => o.createElement("svg", rt({
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          fill: "none"
        }, e), it || (it = o.createElement("path", {
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "m9 18 6-6-6-6"
        }))),
        ct = {
          pillBtn: "rockstargames-sites-gtafaa583ebd1250f30b148562c5964fa46",
          selected: "rockstargames-sites-gtaf55ea6a51cd0de4060f152d9a070e040",
          navScrollButton: "rockstargames-sites-gtab13f52032a7c6105f881b2a3764d7ba6"
        },
        ot = e => {
          let {
            direction: a,
            className: t,
            ...s
          } = e;
          return (0, f.jsxs)("button", {
            type: "button",
            className: [t, ct.navScrollButton].join(" "),
            ...s,
            children: ["left" === a && (0, f.jsx)(st, {}), "right" === a && (0, f.jsx)(nt, {})]
          })
        },
        lt = (0, l.defineMessages)({
          plm_nav_scroll_left: {
            id: "plm_nav_scroll_left",
            defaultMessage: "Scroll Left"
          },
          plm_nav_scroll_right: {
            id: "plm_nav_scroll_right",
            defaultMessage: "Scroll Right"
          }
        }),
        dt = {
          pillBtn: "rockstargames-sites-gtaa06d15859ff923574165bb46a5f3d0c9",
          selected: "rockstargames-sites-gtacce410d6b0f750e4332a82432812a32f",
          navMenu: "rockstargames-sites-gtac5752917b36e8045f6765318dcfad3da",
          navMenuMain: "rockstargames-sites-gtac507169b0a2e6c92ea16615a7740d669",
          sectionMenu: "rockstargames-sites-gtaa874d8cdf964d1c68df9cf8fdd085844",
          sectionItems: "rockstargames-sites-gtaa3f32f28bb1f1c6a4695c53680da9ed0",
          nextSectionNavButton: "rockstargames-sites-gtae26ad999829c4c68eadd9af67ba89033",
          previousSectionNavButton: "rockstargames-sites-gtaec50957bce6305ff1dc54a0f7d6a997b",
          previousNavButton: "rockstargames-sites-gtaf9530895bd80a161771d5ca70d967f65",
          nextNavButton: "rockstargames-sites-gtafdd74c0f93dcc9be87ca508ab0fe469a",
          navFeaturedItems: "rockstargames-sites-gtac6f0521d960314244895945154ba6c4a"
        },
        mt = e => {
          let {
            navItems: a,
            category: t,
            onNavItemClick: s,
            isOpen: i,
            isHeaderVisible: r,
            menuClass: n = dt.navMenu,
            menuContainerClass: c = dt.navMenuMain,
            menuSectionClass: d = dt.sectionMenu,
            menuPrevBtnClass: g = dt.previousNavButton,
            menuNextBtnClass: u = dt.nextNavButton
          } = e;
          const _ = (0, l.useIntl)(),
            {
              track: p
            } = (0, O.useGtmTrack)(),
            {
              pathname: k
            } = (0, m.useLocation)(),
            b = (0, o.useMemo)((() => Math.max(a.findIndex((e => e.name === t)), 0)), [a, k]),
            [v, h] = (0, o.useState)(b),
            [x, y] = (0, o.useState)(!1),
            [N, j] = (0, o.useState)(!1),
            [w, S] = (0, o.useState)(!1),
            C = (0, o.useRef)(null),
            I = (0, o.useCallback)(((e, a) => {
              C.current && C.current.slideTo(e), h(e), M(`Secondary Nav > ${a}`)
            }), [p]),
            T = (0, o.useCallback)(((e, t) => {
              M(`Secondary Nav > ${a[v].title} > ${e}`, t), s()
            }), [a, s, v, p]),
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
            L = (0, o.useCallback)((e => {
              j(e.isEnd), S(e.isBeginning)
            }), []);
          return (0, o.useEffect)((() => {
            C.current && ((C.current.wrapperEl.clientWidth || 0) > (C.current.el.clientWidth || 0) ? (y(!0), C.current.params.centeredSlides = !0, C.current.params.centeredSlidesBounds = !0) : (y(!1), C.current.params.centeredSlides = !1, C.current.params.centeredSlidesBounds = !1))
          }), [C.current?.wrapperEl.clientWidth, C.current?.el.clientWidth]), (0, f.jsx)(Oe.q.div, {
            className: n,
            initial: {
              height: 0
            },
            animate: {
              height: i ? "100dvh" : 0
            },
            children: (0, f.jsxs)("div", {
              className: c,
              children: [(0, f.jsxs)("div", {
                className: d,
                children: [!w && x && (0, f.jsx)("div", {
                  className: dt.previousSectionNavButton,
                  children: (0, f.jsx)(ot, {
                    direction: "left",
                    className: g,
                    onClick: () => C.current?.slidePrev(),
                    "aria-label": _.formatMessage(lt.plm_nav_scroll_left)
                  })
                }), (0, f.jsx)("div", {
                  className: dt.sectionItems,
                  children: (0, f.jsx)(P.wx, {
                    onBeforeInit: e => C.current = e,
                    onInit: L,
                    className: dt.sectionItems,
                    direction: "horizontal",
                    grabCursor: !0,
                    slidesPerView: "auto",
                    initialSlide: v,
                    onSlideChange: L,
                    onResize: L,
                    children: a.map(((e, a) => {
                      let {
                        title: t
                      } = e;
                      return (0, f.jsx)(P.Ky, {
                        children: (0, f.jsx)(et, {
                          title: t,
                          onClick: () => I(a, t),
                          selected: v === a
                        })
                      }, t)
                    }))
                  })
                }), !N && x && (0, f.jsx)("div", {
                  className: dt.nextSectionNavButton,
                  children: (0, f.jsx)(ot, {
                    direction: "right",
                    className: u,
                    onClick: () => C.current?.slideNext(),
                    "aria-label": _.formatMessage(lt.plm_nav_scroll_right)
                  })
                })]
              }), (0, f.jsx)(Za, {
                isHeaderVisible: r,
                packListItems: a[v]?.subNavItems || [],
                selectPackCard: T
              })]
            })
          })
        },
        gt = "rockstargames-sites-gtac54c374409e11d1429ce99457cbf7441",
        ft = e => {
          let {
            children: a,
            data: t,
            onPageUpdate: s,
            page: i,
            className: r
          } = e;
          return (0, f.jsx)("a", {
            href: "#",
            className: i === t.page ? `rockstargames-sites-gtac0eebf4f915ff9f5cc362e22d6d7d976 ${r??""}` : "",
            onClick: e => {
              e.preventDefault(), s(i)
            },
            children: a
          })
        },
        ut = e => {
          let {
            data: a,
            onPageUpdate: t,
            className: s
          } = e;
          if (1 === a.pageCount) return null;
          const i = Array.from(new Array(Math.min(a.pageCount, 8)), ((e, t) => t + Math.min(Math.max(a.pageCount - 8, 1), Math.max(2, a.page - 4))));
          return (0, f.jsxs)("div", {
            className: `rockstargames-sites-gtaa626faab2a5a03e3466dda5c79960575 ${s??""}`,
            children: [a.pageCount > 8 ? (0, f.jsxs)(f.Fragment, {
              children: [(0, f.jsx)(ft, {
                data: a,
                onPageUpdate: t,
                page: 1,
                children: "1"
              }), 2 !== i[0] ? (0, f.jsx)("div", {
                className: gt,
                children: "..."
              }) : ""]
            }) : "", i.map((e => (0, f.jsx)(ft, {
              data: a,
              onPageUpdate: t,
              page: e,
              className: s,
              children: e
            }, e))), a.pageCount > 8 ? (0, f.jsxs)(f.Fragment, {
              children: [i.slice(-1)[0] + 1 < a.pageCount ? (0, f.jsx)("div", {
                className: gt,
                children: "..."
              }) : "", (0, f.jsx)(ft, {
                data: a,
                onPageUpdate: t,
                page: a.pageCount,
                children: a.pageCount
              })]
            }) : ""]
          })
        };
      var _t = t(77616);
      const pt = e => {
          let {
            children: a
          } = e;
          const {
            parallaxController: t
          } = (0, _t.oZ)();
          return (0, o.useLayoutEffect)((() => {
            if (!t) return;
            const e = setInterval((() => {
              t.update()
            }), 500);
            return () => clearInterval(e)
          }), [t]), a
        },
        kt = {
          parallaxWrapper: "rockstargames-sites-gtadb1ab316d17367d31cf94cdde25e463a",
          large: "rockstargames-sites-gtad520d28c6e4e797aea99f61c89ad2bd8",
          medium: "rockstargames-sites-gtaf008365ee42d37e24e606107346b1c83",
          small: "rockstargames-sites-gtacb5937d1a102ac4a66c4e373e6253946"
        },
        bt = e => {
          let {
            scrollAxis: a = "vertical",
            size: t = "",
            style: s = {},
            children: i
          } = e;
          return (0, f.jsx)(_t.qK, {
            scrollAxis: a,
            children: (0, f.jsx)(pt, {
              children: (0, f.jsx)("div", {
                className: (0, I.classList)(kt.parallaxWrapper, kt[t]),
                style: s,
                "data-context": "parallax-wrapper",
                children: i ? i.map(((e, t) => (0, o.cloneElement)(e, {
                  scrollAxis: a,
                  style: {
                    ...e?.props?.style,
                    zIndex: t
                  }
                }))) : (0, f.jsx)("div", {})
              })
            })
          })
        },
        vt = e => {
          let {
            layers: a = [],
            displayClass: t = "",
            style: s = {}
          } = e;
          const i = (0, I.useGenerateCdnSource)();
          if (!a || !a[0]?.image) return null;
          const r = a.map((e => ({
            ...e,
            props: {
              style: {
                ...e.style
              }
            },
            style: void 0,
            image: i(e?.image ?? null)
          })));
          return (0, f.jsx)(_t.Sr, {
            className: (0, I.classList)("rockstargames-sites-gtab8c85703a3c76902e49a61a6afcb81bc", t),
            layers: r,
            style: s
          })
        },
        ht = "rockstargames-sites-gtac4aa8e5d29b433c400796d0c493a9a4d",
        xt = e => {
          let {
            minOffset: a = 0,
            maxOffset: t = 0,
            scrollAxis: s = "vertical",
            displayClass: i = "",
            style: r = {},
            children: n
          } = e;
          return "horizontal" === s ? (0, f.jsx)(_t.mw, {
            x: [a, t],
            className: (0, I.classList)(ht, i),
            styleOuter: r,
            children: n
          }) : (0, f.jsx)(_t.mw, {
            y: [a, t],
            className: (0, I.classList)(ht, i),
            styleOuter: r,
            children: n
          })
        },
        yt = (e, a) => {
          switch (e) {
            case "pc":
              return "small" === a ? {
                src: t(66452),
                alt: "PC"
              } : {
                src: t(80804),
                alt: "PC"
              };
            case "ps4":
              return "small" === a ? {
                src: t(14120),
                alt: "PS4"
              } : {
                src: t(70564),
                alt: "PS4"
              };
            case "ps5":
              return "small" === a ? {
                src: t(33788),
                alt: "PS5"
              } : {
                src: t(62756),
                alt: "PS5"
              };
            case "xboxone":
              return "small" === a ? {
                src: t(37284),
                alt: "Xbox One"
              } : {
                src: t(12064),
                alt: "Xbox One"
              };
            case "xboxsx":
              return "small" === a ? {
                src: t(19916),
                alt: "Xbox Series X|S"
              } : {
                src: t(7748),
                alt: "Xbox Series X|S"
              };
            default:
              return {
                src: "", alt: ""
              }
          }
        },
        Nt = e => t(e < 100 ? 84184 : e > 99 && e < 500 ? 69450 : e > 499 && e < 750 ? 31216 : 85724),
        jt = (0, l.defineMessages)({
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
        wt = {
          pillBtn: "rockstargames-sites-gtae4a42eaa9bfb682035e61ac2e2a34515",
          selected: "rockstargames-sites-gtaeb889d8958be54a67b790d7529530986",
          scCharacterCard: "rockstargames-sites-gtadf279e92086c0d3c96905b3a91b369ed",
          scAvatar: "rockstargames-sites-gtac1890feda663c93b0f767890394cbdcf",
          scCharNames: "rockstargames-sites-gtae79d7f5515617d849d7d13cd4ff048ce",
          scCharacterStats: "rockstargames-sites-gtac721f3aeef9e5ae6b98adca1253e4709",
          scUserName: "rockstargames-sites-gtaeabff0cc0139013f5a60fea6f48c56f6",
          scRpLevel: "rockstargames-sites-gtab1f87c58a800ad546200fbf17e029f35",
          scRpIcon: "rockstargames-sites-gtaf1e0bcba6214698c490b8201bbd850b7"
        },
        St = (0, l.withIntl)((e => {
          let {
            characterData: a
          } = e;
          const s = (0, l.useIntl)(),
            {
              platform: i,
              platformUsername: r,
              mugshotUrl: n,
              stats: c
            } = a,
            [d, m] = (0, o.useState)(n),
            g = yt(i, "large");
          return (0, f.jsxs)("div", {
            className: wt.scCharacterCard,
            children: [(0, f.jsx)("div", {
              className: wt.scAvatar,
              "data-size": "small",
              children: (0, f.jsx)("img", {
                src: d,
                alt: s.formatMessage(jt.profile_selector_mugshot, {
                  userName: r
                }),
                onError: () => {
                  m(t(71084))
                }
              })
            }), (0, f.jsx)("div", {
              className: wt.scCharacterStats,
              children: (0, f.jsxs)("div", {
                className: wt.scCharNames,
                children: [(0, f.jsx)("img", {
                  src: g.src,
                  alt: g.alt
                }), (0, f.jsx)("div", {
                  className: wt.scUserName,
                  "data-size": "small",
                  children: r
                }), (0, f.jsx)("div", {
                  className: wt.scRp,
                  children: (0, f.jsxs)("div", {
                    className: wt.scRpLevel,
                    children: [(0, f.jsx)("img", {
                      className: wt.scRpIcon,
                      src: Nt(c.overview.rank.value),
                      alt: s.formatMessage(jt.profile_selector_rp_icon)
                    }), (0, f.jsx)("span", {
                      children: a.stats.overview.rank.value
                    })]
                  })
                })]
              })
            })]
          })
        }), ha),
        Ct = (0, k.makeVarNamespace)("@rockstargames/components/profile-switcher"),
        It = Ct("languageSelectorOpenedReactive", !1),
        Tt = e => It(e),
        Mt = Ct("activeSubNavIdReactive", -1),
        Lt = e => Mt(e),
        Et = Ct("subNavExtraHeightReactive", -1),
        Bt = e => Et(e),
        Pt = Ct("scNavOpenedReactive", !0),
        zt = e => Pt(e),
        $t = Ct("charListHiddenReactive", !0),
        Vt = e => $t(e),
        Dt = () => {
          const e = (0, k.useReactiveVar)(It),
            a = (0, k.useReactiveVar)(Mt),
            t = (0, k.useReactiveVar)(Et),
            s = (0, k.useReactiveVar)(Pt),
            i = (0, k.useReactiveVar)($t);
          return (0, o.useEffect)((() => {
            i || (e && Tt(!1), s && (zt(!1), Lt(-1)))
          }), [i]), (0, o.useEffect)((() => {
            !e && i && (s || zt(!0))
          }), [e, i]), (0, o.useMemo)((() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: Tt,
            activeSubNavId: a,
            setActiveSubNavId: Lt,
            subNavExtraHeight: t,
            setSubNavExtraHeight: Bt,
            scNavOpened: s,
            setScNavOpened: zt,
            charListHidden: i,
            setCharListHidden: Vt
          })), [e, a, t, s, i])
        };
      var At = t(69760),
        Ft = t.n(At),
        Ot = t(9860);
      const Rt = {
          event: "account_menu_click",
          element_placement: "Account Menu"
        },
        Ut = e => ({
          text: e.formatMessage(jt.sc_link_help),
          target: "_self",
          ga: {
            ...Rt,
            text: jt.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          children: [{
            text: e.formatMessage(jt.sc_link_support),
            location: {
              domain: va.U.support,
              path: "/"
            },
            target: "_self",
            ga: {
              ...Rt,
              text: jt.sc_link_support.defaultMessage
            },
            dataTestId: "supportLink"
          }, {
            text: e.formatMessage(jt.sc_link_legal),
            location: {
              domain: va.U.www,
              path: "/legal"
            },
            target: "_self",
            ga: {
              ...Rt,
              text: jt.sc_link_legal.defaultMessage
            },
            dataTestId: "legalLink"
          }, {
            text: e.formatMessage(jt.sc_link_privacy_policy),
            location: {
              domain: va.U.www,
              path: "/privacy"
            },
            target: "_self",
            ga: {
              ...Rt,
              text: jt.sc_link_privacy_policy.defaultMessage
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: e.formatMessage(jt.sc_link_cookies_policy),
            location: {
              domain: va.U.www,
              path: "/cookies"
            },
            target: "_self",
            ga: {
              ...Rt,
              text: jt.sc_link_cookies_policy.defaultMessage
            },
            dataTestId: "cookiesPolicyLink"
          }, {
            text: e.formatMessage(jt.sc_link_cookies_settings),
            onClickCallback: e => {
              e.preventDefault(), window.OneTrust?.ToggleInfoDisplay()
            },
            target: "_self",
            ga: {
              ...Rt,
              text: jt.sc_link_cookies_settings.defaultMessage
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: e.formatMessage(jt.sc_link_do_not_sell_my_information),
            location: {
              domain: va.U.www,
              path: "/ccpa"
            },
            target: "_self",
            ga: {
              ...Rt,
              text: jt.sc_link_do_not_sell_my_information.defaultMessage
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        }),
        Gt = {
          pillBtn: "rockstargames-sites-gtaeb30ffefc0c8fef449ca5348a2702622",
          selected: "rockstargames-sites-gtacd058a755e77eeb55cf666fa43fadf75",
          scSubLink: "rockstargames-sites-gtafdaa918acc06706cbe191dedd40974af",
          scLink: "rockstargames-sites-gtacbc80932118c48d8ec14448d8913d068"
        },
        Ht = e => {
          let {
            text: a,
            target: t,
            href: s,
            location: i,
            ga: r,
            dataTestId: n,
            isSubLink: c,
            hasNotifications: o = !1,
            onClickCallback: l = (() => {}),
            tabIndex: d,
            reloadDocument: g = !1
          } = e;
          const {
            track: u
          } = (0, O.useGtmTrack)(), _ = (0, va.c)();
          let p = s;
          i && (p = i.domain === _.currentSite?.site ? i.path : `https://${_.sites[i.domain]}.rockstargames.com${i.path}`);
          const k = {
            ...r,
            link_url: p
          };
          return (0, f.jsxs)(m.Link, {
            className: c ? Gt.scSubLink : Gt.scLink,
            "data-testid": n || "menuLink",
            title: a,
            to: p,
            target: t,
            rel: "noreferrer",
            reloadDocument: g,
            tabIndex: d,
            onClick: e => {
              u(k), l(e)
            },
            children: [a, o && (0, f.jsx)("span", {
              className: Gt.scLinkNotification
            })]
          })
        },
        Wt = e => {
          let {
            id: a,
            text: t,
            target: s,
            href: i,
            location: r,
            ga: n,
            hasNotifications: c = !1,
            dataTestId: l,
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
          }), [x, k, b]), d.length > 0 ? (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsxs)("button", {
              className: "rockstargames-sites-gtaaf10b4154b04475edc11366934576ecd",
              type: "button",
              "data-testid": l || "menuButton",
              title: t,
              tabIndex: h ? 0 : -1,
              "data-children-hidden": S,
              onClick: e => {
                e.stopPropagation(), v(n), m === a ? (g(-1), u(0)) : (g(a), u(y + j + j))
              },
              children: [(0, f.jsx)("span", {
                className: "rockstargames-sites-gtafd722aa4f6d05656ee6e37f952bd13d0",
                children: t
              }), (0, f.jsx)("span", {
                className: "rockstargames-sites-gtabe674f27adc299eab348b49f71429b71"
              })]
            }, t), (0, f.jsx)("nav", {
              className: "rockstargames-sites-gtaff1911053a3515534dd825554a85909e",
              ref: x,
              "aria-hidden": S,
              style: {
                height: S ? 0 : `${y}px`
              },
              children: d.map((e => (0, f.jsx)(Ht, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: S || !h ? -1 : 0
              })))
            })]
          }) : (0, f.jsx)(Ht, {
            text: t,
            target: s,
            href: i,
            location: r,
            ga: n,
            hasNotifications: c,
            dataTestId: l,
            isSubLink: !1,
            onClickCallback: p,
            tabIndex: h ? 0 : -1,
            reloadDocument: _
          })
        },
        qt = e => {
          let {
            sc: a
          } = e;
          const {
            windowWidth: t,
            windowHeight: s
          } = (0, F.useWindowResize)(), i = (0, l.useIntl)(), {
            languageSelectorOpened: r,
            setLanguageSelectorOpened: n,
            activeSubNavId: c,
            setActiveSubNavId: d,
            subNavExtraHeight: g,
            setSubNavExtraHeight: u
          } = Dt(), {
            setSelectedCharacterTuple: _,
            navOpen: p
          } = (0, O.useRockstarUserState)(), k = (0, F.useLocale)(), b = (0, F.toScLocaleString)(k), [v, h] = (0, o.useState)(""), x = (0, m.useLocation)(), y = `${a.login}?returnUrl=${v}&lang=${b}`, N = `${a.signup}&returnUrl=${v}&lang=${b}`, j = (0, o.useMemo)((() => (0, va.c)()), []), w = (0, o.useMemo)((() => {
            const e = ((e, a, t) => [{
              text: e.formatMessage(jt.sc_link_sign_in),
              href: a,
              ga: {
                event: "cta_login",
                text: jt.sc_link_sign_in.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "loginLink"
            }, {
              text: e.formatMessage(jt.sc_link_join_social_club),
              href: t,
              ga: {
                event: "cta_signup",
                text: jt.sc_link_join_social_club.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "signUpLink"
            }, Ut(e)])(i, y, N);
            return e
          }), [i, y, N, j]), [S, C] = (0, o.useState)(0), I = (0, o.createRef)(), T = () => {
            if (I.current) {
              const {
                current: e
              } = I, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), C(a + e)
              } else C(a)
            }
          };
          return (0, o.useEffect)((() => {
            const e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            h(e)
          }), [x]), (0, o.useEffect)((() => {
            _(!1)
          }), []), (0, o.useEffect)((() => {
            T(), Ft()((() => {
              setTimeout(T, 0)
            }), 300)
          }), [t, s]), (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsx)("nav", {
              className: "rockstargames-sites-gtab1552e1f97b08ee4337f78fa4486ffac",
              children: (0, f.jsx)("div", {
                className: "rockstargames-sites-gtac5bc9bec611f9f0514176014ce835e1e",
                "data-logged-in": "false",
                ref: I,
                style: {
                  "--scNavWrap-max-height": `${g+S}px`
                },
                children: w.map((e => (0, o.createElement)(Wt, {
                  ...e,
                  activeSubNavId: c,
                  setActiveSubNavId: d,
                  setSubNavExtraHeight: u,
                  key: e.text
                })))
              })
            }), (0, f.jsx)("div", {
              className: "rockstargames-sites-gtaa6c12c94e8656e88958552d645fe51fe",
              style: {
                visibility: p ? null : "hidden"
              },
              children: (0, f.jsx)(Ot.LanguageSelector, {
                theme: "sc-menu",
                languageSelectorOpened: r,
                setLanguageSelectorOpened: e => {
                  d(-1), n(e)
                },
                defaultMessage: "Select a Language"
              })
            })]
          })
        },
        Xt = e => {
          let {
            characterData: a,
            setMobileCardWidth: s,
            tabIndex: i
          } = e;
          const r = (0, l.useIntl)(),
            {
              currentCharId: n,
              setCurrentCharId: c
            } = (0, O.useRockstarUserState)(),
            {
              track: d
            } = (0, O.useGtmTrack)(),
            m = (0, o.createRef)(),
            {
              platform: g,
              platformUsername: u,
              mugshotUrl: _,
              stats: p
            } = a,
            [k, b] = (0, o.useState)(_),
            [v] = (0, o.useState)(a.index),
            h = yt(g, "large"),
            x = n === a.index;
          return (0, o.useEffect)((() => {
            m.current && s && s(m?.current?.offsetWidth)
          }), [m]), (0, f.jsxs)("button", {
            className: "rockstargames-sites-gtad76e785563451a50438064ac368aae4b",
            type: "button",
            "aria-hidden": x,
            onClick: e => {
              e.stopPropagation(), c(v);
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
              className: "rockstargames-sites-gtabbdf69fe97471593355fc51ec9a6d13a",
              "data-size": "small",
              children: (0, f.jsx)("img", {
                src: k,
                alt: r.formatMessage(jt.profile_selector_mugshot, {
                  userName: u
                }),
                onError: () => {
                  b(t(71084))
                }
              })
            }), (0, f.jsxs)("div", {
              className: "rockstargames-sites-gtac0dc303ef48255c09faa4ad2f4e953e7",
              children: [(0, f.jsxs)("div", {
                className: "rockstargames-sites-gtae9fbbbcea66d86dbd58b8548a5f6bea8",
                children: [(0, f.jsx)("img", {
                  src: h.src,
                  alt: h.alt
                }), (0, f.jsx)("div", {
                  className: "rockstargames-sites-gtab3726d8b480695f64fddc723c6f35205",
                  "data-size": "small",
                  children: u
                })]
              }), (0, f.jsx)("div", {
                className: "rockstargames-sites-gtaa5e3df42966a50f3dd88bbcb57536617",
                children: (0, f.jsxs)("div", {
                  className: "rockstargames-sites-gtaa6776312350028898320ba59145a39be",
                  children: [(0, f.jsx)("img", {
                    className: "rockstargames-sites-gtab266652910ad34c0e8e097b212a958f0",
                    src: Nt(p.overview.rank.value),
                    alt: r.formatMessage(jt.profile_selector_rp_icon)
                  }), (0, f.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                })
              })]
            })]
          })
        },
        Kt = {
          pillBtn: "rockstargames-sites-gtad9464c4b4d92881abe5578988bd68af7",
          selected: "rockstargames-sites-gtabc0a950bffee0ee9e28213912da51427",
          scProfileDetails: "rockstargames-sites-gtab954455f6ff25f2350e1a0960ba97d3e",
          scAvatar: "rockstargames-sites-gtac15a60de0fc8df4960d84ab96caa8a62",
          scAvatarPlatform: "rockstargames-sites-gtaa8f66dccf33827dc81107cae3196cfbe",
          scProfileStats: "rockstargames-sites-gtac91f8623fa10edbeba8c79c7d6b26a28",
          scNames: "rockstargames-sites-gtada83fc27513bcac6a8a31eadc89b1c2c",
          scTagsNames: "rockstargames-sites-gtad7ce73d22672e2e2f59e9193c2632531",
          scUserName: "rockstargames-sites-gtad5814836ce152affaa22d226819b5b12",
          scCrewName: "rockstargames-sites-gtab7777817be6d756cc2d1585c1377734c",
          scCrewRankBar: "rockstargames-sites-gtaa581d240520cf347e5ff5f6a62a36a97",
          scCrewRankBarItem: "rockstargames-sites-gtabdb056c03ef06b99d69426c87cec67c5",
          scProgress: "rockstargames-sites-gtadc3020fbe81a916a8da4719ef052c278",
          scRpLevel: "rockstargames-sites-gtab2ea0e0d19182355913368bf7be016b8",
          scRpIcon: "rockstargames-sites-gtaf17a712b43b5234c07dc44f674433cf6",
          scMoney: "rockstargames-sites-gtaf14849be516f588e1bc9e252a109c76f",
          scCash: "rockstargames-sites-gtab3e35cdc6557f7c3886700245af352dd",
          scBank: "rockstargames-sites-gtaec696aafed90a7a4c69dc53da0a5bb36"
        },
        Yt = e => {
          let {
            character: a,
            platformTag: s
          } = e;
          const {
            data: i
          } = (0, O.useRockstarUser)(), {
            track: r
          } = (0, O.useGtmTrack)(), n = (0, l.useIntl)(), [c, d] = (0, o.useState)([]), [m, g] = (0, o.useState)(null), [u, _] = (0, o.useState)(null), [p, k] = (0, o.useState)(!1), [b, v] = (0, o.useState)(-1), [h, x] = (0, o.useState)([]), [y, N] = (0, o.useState)(0), j = t(71084), [w, S] = (0, o.useState)("0"), [C, I] = (0, o.useState)("0"), T = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), M = () => {
            E((0, f.jsx)("img", {
              src: j,
              alt: n.formatMessage(jt.profile_selector_mugshot, {
                userName: i.nickname
              })
            }))
          }, [L, E] = (0, o.useState)((0, f.jsx)("img", {
            className: Kt.scAvatarImg,
            src: a.mugshotUrl,
            alt: n.formatMessage(jt.profile_selector_mugshot, {
              userName: i.nickname
            }),
            onError: M
          }));
          (0, o.useEffect)((() => {
            d(i.crews ?? [])
          }), [i]), (0, o.useEffect)((() => {
            E((0, f.jsx)("img", {
              src: a.mugshotUrl,
              alt: i.nickname,
              onError: M
            })), S(T(a.stats.overview.bank.value)), I(T(a.stats.overview.cash.value)), N(parseInt(a.stats.overview.rank.value))
          }), [a, i]), (0, o.useEffect)((() => {
            c && c.forEach((e => {
              !0 === e.isPrimary && (g(e.crewTag), _(e.crewColour), v(e.rankOrder), k(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && k(!0))
            }))
          }), [c]), (0, o.useEffect)((() => {
            const e = [];
            if (!p && b > -1)
              for (let a = 5; a > b; a -= 1) e.push((0, f.jsx)("div", {
                className: Kt.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== u ? u : ""
                }
              }, `crewrankbar-${a}`));
            x(e)
          }), [b, p, u]);
          const B = e => {
            e.stopPropagation(), r({
              event: "character_selector_profile_click",
              event_action: "profile_click",
              event_category: "character_selector",
              event_label: s.alt,
              link_url: void 0
            })
          };
          return (0, f.jsxs)("div", {
            className: Kt.scProfileDetails,
            onClick: B,
            onKeyUp: B,
            role: "button",
            tabIndex: -1,
            children: [(0, f.jsxs)("div", {
              className: Kt.scAvatar,
              children: [L, (0, f.jsx)("div", {
                className: Kt.scAvatarPlatform,
                "data-platform": a.platform,
                children: (0, f.jsx)("img", {
                  src: s.src,
                  alt: s.alt
                })
              })]
            }), (0, f.jsxs)("div", {
              className: Kt.scProfileStats,
              children: [(0, f.jsx)("div", {
                className: Kt.scNames,
                children: (0, f.jsxs)("div", {
                  className: Kt.scTagsNames,
                  children: [(0, f.jsx)("span", {
                    className: Kt.scUserName,
                    children: a.platformUsername
                  }), m && (0, f.jsxs)("span", {
                    className: Kt.scCrewName,
                    "data-arrow-tag": p,
                    children: [m, !p && (0, f.jsx)("div", {
                      className: Kt.scCrewRankBar,
                      children: h
                    })]
                  })]
                })
              }), (0, f.jsxs)("div", {
                className: Kt.scProgress,
                children: [(0, f.jsxs)("div", {
                  className: Kt.scRpLevel,
                  children: [(0, f.jsx)("img", {
                    className: Kt.scRpIcon,
                    src: Nt(y),
                    alt: n.formatMessage(jt.profile_selector_rp_icon)
                  }), (0, f.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                }), (0, f.jsxs)("div", {
                  className: Kt.scMoney,
                  children: [(0, f.jsxs)("span", {
                    className: Kt.scCash,
                    children: ["$", C]
                  }), (0, f.jsxs)("span", {
                    className: Kt.scBank,
                    children: ["$", w]
                  })]
                })]
              })]
            })]
          })
        },
        Qt = (e, a) => {
          const [t, s] = (0, o.useState)(0);
          return (0, o.useEffect)((() => {
            if (e.current) {
              const {
                current: t
              } = e, i = t.getBoundingClientRect(), {
                width: r
              } = i;
              let n = r;
              if (!0 === a) {
                const e = window.getComputedStyle(t);
                n += parseInt(e.marginLeft, 10) + parseInt(e.marginRight, 10)
              }
              s(n)
            }
          }), [e]), t
        },
        Zt = e => {
          let {
            dragThreshold: a = 80,
            interactionDelay: t = 1e3,
            mobileGutterWidth: s = 17,
            slideChangeCallback: i = null,
            slideClickCallback: r = null,
            children: n = [],
            disablePager: c = !1,
            disableSwiper: l = !1
          } = e;
          const d = (0, o.createRef)(),
            m = Qt(d, !1),
            [g, u] = (0, o.useState)(!1),
            [_, p] = (0, o.useState)(0),
            [k, b] = (0, o.useState)(0),
            [v, h] = (0, o.useState)([s]),
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
              if (!0 === g || 0 === k || !0 === l) return;
              const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                s = t > k ? 1 : -1,
                r = Math.abs(k - t);
              r > a ? (s > 0 ? (() => {
                if (!0 === g) return;
                u(!0);
                const e = _ - 1 < 0 ? 0 : _ - 1;
                p(e), y(v[e]), i && i(e)
              })() : (() => {
                if (!0 === g) return;
                u(!0);
                let e = _ + 1 >= v.length ? v.length - 1 : _ + 1;
                e < 0 && (e = 0), p(e), y(v[e]), i && i(e)
              })(), b(0)) : y(v[_] + r * s)
            },
            z = () => {
              !0 !== g && !0 !== l && (u(!0), !0 !== g && (y(v[_]), b(0)))
            };
          return (0, o.useEffect)((() => {
            const e = [];
            n.forEach((() => {
              e.push((0, o.createRef)())
            })), I(e)
          }), [n]), (0, o.useEffect)((() => {
            if (C.length < 1) return;
            j(C[0]?.current?.clientWidth || 0);
            const e = C[0]?.current.firstChild,
              a = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              t = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            S(t + a)
          }), [C]), (0, o.useEffect)((() => {
            !1 !== g && setTimeout((() => {
              u(!1)
            }), t)
          }), [g, t]), (0, o.useEffect)((() => {
            h(n.map(((e, a) => (e => {
              let a = 0;
              const t = n.length;
              return 1 === t ? .5 * m - .5 * N - 2 * s + w : (0 === e && (a = s - e * N), e === t - 1 && t > 1 && (a = t * N * -1 + (m - (s - w))), e > 0 && e < t - 1 && (a = e * N * -1 + (.5 * m - .5 * N + .5 * w)), a)
            })(a)))), 1 === n.length ? E(!0) : E(!1)
          }), [d.current, n, m]), (0, o.useEffect)((() => {
            const e = (a = _, n.map(((e, t) => {
              const s = {
                active: !1
              };
              return t === a && (s.active = !0), s
            })));
            var a;
            M(e)
          }), [n, _]), (0, o.useEffect)((() => {
            !0 !== c && !0 !== l || y(v[0])
          }), [l, c, v]), (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsx)("div", {
              className: "rockstargames-sites-gtaab70c3f9c67ecd69d19216a5f4de5049",
              ref: d,
              onTouchStart: B,
              onTouchMove: P,
              onTouchEnd: z,
              onMouseDown: B,
              onMouseMove: P,
              onMouseUp: z,
              onClick: () => {
                null !== r && r(_)
              },
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, f.jsx)("div", {
                className: "rockstargames-sites-gtaa93be1084a583cafa7f3f97a8ce8a6be",
                "data-interaction-blocked": g,
                "data-single-item": L,
                style: {
                  transform: L ? null : `translateX(${x}px)`
                },
                children: n.map(((e, a) => (0, f.jsx)("div", {
                  className: "rockstargames-sites-gtac013369a930e076d1729d086fb51903e",
                  ref: C[a],
                  children: e
                }, `csItem-${e?.props?.characterData?.mugshotUrl}`)))
              })
            }), T.length > 1 && !1 === c && (0, f.jsx)("div", {
              className: "rockstargames-sites-gtada8cfef07bf44e9a44839e2723ec61bb",
              children: T.map((e => (0, f.jsx)("div", {
                className: "rockstargames-sites-gtafe87ea0922034610a1f6cb3a4edbe195",
                "data-active": e.active
              }, e.mugshotUrl)))
            })]
          })
        },
        Jt = {
          pillBtn: "rockstargames-sites-gtaaa374e2f7806799cb073de8a9b2a2e7d",
          selected: "rockstargames-sites-gtad402a10393179390abdaf3684a02f1ba",
          scProfile: "rockstargames-sites-gtadde9053261079ebfb5d95975239fe87d",
          scCharacterSelector: "rockstargames-sites-gtac47913b4c686bbbc9a0c8ee6ed7666bf",
          scCharacterSelectBtn: "rockstargames-sites-gtaa4f9dafe071f5c9a825bf57348835309",
          open: "rockstargames-sites-gtab1f5708c9a0e35681c54a58f04661c1c",
          scCharacterList: "rockstargames-sites-gtaa1d1104b9df769c9237fa1a06633ffe7",
          scNav: "rockstargames-sites-gtaa326b0feea8d083ed2265571010d79d3",
          scLanguageSelector: "rockstargames-sites-gtad19713d1362bcd54ff539975adbb2ecc",
          scNavHeader: "rockstargames-sites-gtabb74821846f47bbe5fc0896364efd520",
          scNavWrap: "rockstargames-sites-gtaa7f1e2d78519eaf099bd43c6ad07abc9"
        },
        es = (0, F.withTranslations)((e => {
          let {
            sc: a,
            charListHidden: t,
            hideCharacterList: s,
            refCharacterListDesktop: i,
            menuPadding: r,
            longCharList: n,
            setLongCharList: c,
            isMobileMode: d,
            setIsMobileMode: g
          } = e;
          const {
            windowWidth: u,
            windowHeight: _
          } = (0, F.useWindowResize)(), p = (0, l.useIntl)(), {
            languageSelectorOpened: b,
            setLanguageSelectorOpened: v,
            activeSubNavId: h,
            setActiveSubNavId: x,
            subNavExtraHeight: y,
            setSubNavExtraHeight: N,
            scNavOpened: j,
            setScNavOpened: w
          } = Dt(), [S, C] = (0, o.useState)(""), I = (0, m.useLocation)(), {
            lsSettings: T
          } = (0, F.useRockstarWebLSSettings)(), {
            track: M
          } = (0, O.useGtmTrack)(), L = (0, k.useRockstarTokenPing)(), {
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
          } = (0, O.useRockstarUserState)(), [G, H] = (0, o.useState)(null), [W, q] = (0, o.useState)(null), [X, K] = (0, o.useState)(!1), [Y, Q] = (0, o.useState)(!1), [Z, J] = (0, o.useState)(0), ee = (0, o.createRef)(), ae = Qt(ee, !1), te = (0, o.createRef)(), [se, ie] = (0, o.useState)(0), [re, ne] = (0, o.useState)([]), [ce, oe] = (0, o.useState)(244), le = (0, o.useMemo)((() => (0, va.c)()), []), de = (0, o.useMemo)((() => ((e, a, t, s, i) => [{
            text: e.formatMessage(jt.sc_link_activity_feed),
            location: {
              domain: va.U.socialClub,
              path: "/"
            },
            target: "_self",
            ga: {
              ...Rt,
              text: jt.sc_link_activity_feed.defaultMessage
            },
            dataTestId: "activityFeedLink"
          }, {
            text: e.formatMessage(jt.sc_link_account),
            target: "_self",
            dataTestId: "accountButton",
            children: [{
              text: e.formatMessage(jt.sc_link_view_my_profile),
              href: t.profile_link,
              target: "_self",
              ga: {
                ...Rt,
                text: jt.sc_link_view_my_profile.defaultMessage
              },
              dataTestId: "viewMyProfileLink"
            }, {
              text: e.formatMessage(jt.sc_link_messages),
              location: {
                domain: va.U.socialClub,
                path: "/message"
              },
              target: "_self",
              ga: {
                ...Rt,
                text: jt.sc_link_messages.defaultMessage
              },
              dataTestId: "messagesLink"
            }, {
              text: e.formatMessage(jt.sc_link_game_activation),
              location: {
                domain: va.U.socialClub,
                path: "/activate"
              },
              target: "_self",
              ga: {
                ...Rt,
                text: jt.sc_link_game_activation.defaultMessage
              },
              dataTestId: "gameActivationLink"
            }]
          }, {
            text: e.formatMessage(jt.sc_link_notifications),
            location: {
              domain: va.U.socialClub,
              path: "/notifications"
            },
            target: "_self",
            hasNotifications: s,
            ga: {
              ...Rt,
              text: jt.sc_link_notifications.defaultMessage,
              location: {
                domain: va.U.socialClub,
                path: "/notifications"
              }
            },
            dataTestId: "notificationsLink"
          }, {
            text: e.formatMessage(jt.sc_link_crews),
            location: {
              domain: va.U.socialClub,
              path: `/member/${t.nickname}/crews`
            },
            target: "_self",
            ga: {
              ...Rt,
              text: jt.sc_link_crews.defaultMessage
            },
            dataTestId: "crewsLink"
          }, {
            text: e.formatMessage(jt.sc_link_friends),
            target: "_self",
            dataTestId: "friendsButton",
            children: [{
              text: e.formatMessage(jt.sc_link_my_friends),
              location: {
                domain: va.U.socialClub,
                path: `/member/${t.nickname}/friends`
              },
              target: "_self",
              ga: {
                ...Rt,
                text: jt.sc_link_my_friends.defaultMessage
              },
              dataTestId: "myFriendsLink"
            }, {
              text: e.formatMessage(jt.sc_link_import_friends),
              location: {
                domain: va.U.socialClub,
                path: "/friends/import"
              },
              target: "_self",
              ga: {
                ...Rt,
                text: jt.sc_link_import_friends.defaultMessage
              },
              dataTestId: "importFriendsLink"
            }, {
              text: e.formatMessage(jt.sc_link_find_friends),
              location: {
                domain: va.U.socialClub,
                path: "/members"
              },
              target: "_self",
              ga: {
                ...Rt,
                text: jt.sc_link_import_friends.defaultMessage
              },
              dataTestId: "findFriendsLink"
            }]
          }, {
            text: e.formatMessage(jt.sc_link_settings),
            location: {
              domain: va.U.socialClub,
              path: "/settings"
            },
            target: "_self",
            ga: {
              ...Rt,
              text: jt.sc_link_settings.defaultMessage
            },
            dataTestId: "settingsLink"
          }, Ut(e), {
            text: e.formatMessage(jt.sc_link_log_out),
            href: `${a.logout}?returnUrl=${i}`,
            target: "_self",
            reloadDocument: !0,
            ga: {
              ...Rt,
              text: jt.sc_link_log_out.defaultMessage
            },
            dataTestId: "logoutButton"
          }])(p, a, E, $, S, window)), [p, a, E, $, S, le]), me = () => {
            Q(r + ce * Z < ae)
          }, ge = () => {
            if (te.current) {
              const {
                current: e
              } = te, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), ie(a + e)
              } else ie(a)
            }
          };
          return (0, o.useEffect)((() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            le.currentSite?.site === va.U.socialClub && (e = encodeURIComponent("/")), C(e)
          }), [I]), (0, o.useEffect)((() => {
            ne(E.characters[P] ?? [])
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
          }), [ce]), (0, o.useEffect)((() => {
            s(!0), g(u < 768), g(u < 768 || _ < 649)
          }), [u, _]), (0, o.useEffect)((() => {
            let e = re.length - 1;
            e < 0 && (e = 0), J(e);
            const a = re.length > 0 ? re[z] ?? re[0] : null;
            if (!a) return;
            const t = null !== a ? yt(a.platform, "large") : null;
            q(t), H(a), re.length > 1 ? K(!0) : K(!1), c(re.length - 1 > 3)
          }), [z, re]), (0, o.useEffect)((() => {
            me()
          }), [Z, d, u, re]), (0, o.useEffect)((() => {
            ge(), Ft()((() => {
              setTimeout(ge, 0)
            }), 300)
          }), [u, _]), (0, o.useEffect)((() => {
            const e = T?.currentCharId ?? 0;
            e !== z && D(Math.max(0, Math.min(e, re.length - 1)))
          }), [re, T]), (0, f.jsxs)(f.Fragment, {
            children: [null !== G && "gtao" === P && (0, f.jsxs)("div", {
              className: Jt.scProfile,
              tabIndex: -1,
              "aria-label": p.formatMessage(jt.profile_selector_profile_card),
              children: [(0, f.jsx)(Yt, {
                s: Jt,
                character: G,
                platformTag: W
              }), !0 === X && (0, f.jsxs)("div", {
                className: Jt.scCharacterSelector,
                children: [(0, f.jsx)("button", {
                  className: Jt.scCharacterSelectBtn,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const a = !t;
                    s(a), M({
                      event: a ? "character_selector_close" : "character_selector_open",
                      event_action: !0 === a ? "close" : "open",
                      event_category: "character_selector"
                    })
                  },
                  "data-list-closed": t,
                  children: (0, f.jsx)("span", {
                    children: (0, f.jsx)(l.FormattedMessage, {
                      ...jt.profile_selector_switch_character
                    })
                  })
                }), !1 === d && (0, f.jsx)("div", {
                  className: Jt.scCharacterList,
                  "data-long-list": n,
                  "aria-hidden": t,
                  ref: i,
                  children: re.map((e => (0, f.jsx)(Xt, {
                    tabIndex: t ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: oe
                  }, e.mugshotUrl)))
                }), !0 === d && (0, f.jsx)("div", {
                  className: Jt.scCharacterList,
                  "data-single-item": 2 === re.length,
                  "data-swiper-disabled": Y,
                  "aria-hidden": t,
                  ref: ee,
                  children: (0, f.jsx)(Zt, {
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
                    children: re.filter(((e, a) => a !== z)).map((e => (0, o.createElement)(Xt, {
                      characterData: e,
                      setMobileCardWidth: oe,
                      key: e.mugshotUrl,
                      tabIndex: t ? -1 : 0
                    })))
                  })
                })]
              })]
            }), (0, f.jsxs)("nav", {
              className: Jt.scNav,
              "aria-hidden": !V,
              children: [(0, f.jsx)("button", {
                className: Jt.scNavHeader,
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
                className: Jt.scNavWrap,
                "data-opened": j,
                "data-logged-in": "true",
                ref: te,
                style: {
                  "--scNavWrap-max-height": `${se+y}px`
                },
                children: de.map(((e, a) => (0, o.createElement)(Wt, {
                  ...e,
                  id: a,
                  activeSubNavId: h,
                  setActiveSubNavId: x,
                  setSubNavExtraHeight: N,
                  key: e.text
                })))
              })]
            }), (0, f.jsx)("div", {
              className: Jt.scLanguageSelector,
              style: {
                visibility: V ? null : "hidden"
              },
              children: (0, f.jsx)(Ot.LanguageSelector, {
                theme: "sc-menu",
                languageSelectorOpened: b,
                setLanguageSelectorOpened: v
              })
            })]
          })
        })),
        as = {
          scMenu: "rockstargames-sites-gtaebc4c779cfe9d0b7cfd678424e57370c",
          pillBtn: "rockstargames-sites-gtaf333ffbc5b9f9d571b81be0a7235190d",
          selected: "rockstargames-sites-gtae3bdabe09c3d1b98b61f3d0484209912",
          navOpen: "rockstargames-sites-gtaff929155ac480a9cfa5540dfd3e70ae9",
          dragHandle: "rockstargames-sites-gtaba4968108b922dd8165c6e53557f5f2e",
          dragHandleBtn: "rockstargames-sites-gtad362ba3eeee50f90600a413c05761431",
          scOverlay: "rockstargames-sites-gtad8e443f5d0d9171449f5f1042f80aa17"
        },
        ts = (0, l.withIntl)((() => {
          const {
            windowHeight: e
          } = (0, F.useWindowResize)(), a = (0, l.useIntl)(), {
            languageSelectorOpened: s,
            setLanguageSelectorOpened: i,
            setActiveSubNavId: r,
            scNavOpened: n,
            setScNavOpened: c,
            charListHidden: d,
            setCharListHidden: m
          } = Dt(), [g, u] = (0, o.useState)(!1), {
            setBodyIsScrollable: _
          } = (0, F.useBodyScrollable)(), {
            navHidden: p = !1
          } = (0, k.useState)(), {
            loggedIn: b
          } = (0, O.useRockstarUser)(), {
            currentCharId: v,
            navOpen: h,
            setNavOpen: x,
            userData: y
          } = (0, O.useRockstarUserState)(), {
            track: N
          } = (0, O.useGtmTrack)(), [j, w] = (0, o.useState)(!1), S = (0, k.useReactiveVar)(O.scConfig), C = (0, o.useRef)(), [I, T] = (0, o.useState)(0), M = (0, o.createRef)(), [L, E] = (0, o.useState)(!1), [B, P] = (0, o.useState)(0), [z, $] = (0, o.useState)(!1), {
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
          }), [p]), (0, o.useEffect)((() => {
            if (M.current) {
              const {
                current: e
              } = M, a = window.getComputedStyle(e);
              T(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }), [M]), (0, o.useEffect)((() => {
            _(!L || !h)
          }), [h, L]), (0, o.useEffect)((() => {
            $(window.navigator.userAgent.includes("Mac"))
          }), []), (0, o.useEffect)((() => {
            M.current && u(M?.current?.scrollHeight >= e)
          }), [M, e]), (0, o.useEffect)((() => {
            h || (r(-1), i(!1))
          }), [h]), (0, o.useEffect)((() => {
            s && (d || A(!0), n && (c(!1), r(-1)))
          }), [s]), (0, o.useEffect)((() => {
            n && (s && i(!1), d || A(!0))
          }), [n]), null === b ? null : (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsxs)("div", {
              className: [as.scMenu, h ? as.navOpen : ""].join(" "),
              "data-logged-in": b,
              "data-mac-browser": z,
              "data-scroll-mode": g,
              ref: M,
              "aria-hidden": !h,
              children: [(0, f.jsx)("button", {
                className: as.dragHandleBtn,
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
                  className: as.dragHandle,
                  src: t(82708),
                  alt: a.formatMessage(jt.sc_menu_drag_handle)
                })
              }), b ? (0, f.jsx)(es, {
                sc: S,
                charListHidden: d,
                hideCharacterList: A,
                refCharacterListDesktop: C,
                menuPadding: I,
                longCharList: j,
                setLongCharList: w,
                isMobileMode: L,
                setIsMobileMode: E
              }) : (0, f.jsx)(qt, {
                sc: S,
                navOpen: h
              })]
            }), (0, f.jsx)("div", {
              className: [as.scOverlay, h ? as.navOpen : ""].join(" "),
              "data-logged-in": b
            })]
          })
        }), ha),
        ss = t(71084),
        is = t(29314),
        rs = (0, l.withIntl)((e => {
          let {
            setOtherHeaderDropdowns: a
          } = e;
          const t = (0, l.useIntl)(),
            {
              data: s
            } = (0, O.useRockstarUser)(),
            {
              charactersNeeded: i,
              currentCharId: r,
              navOpen: n,
              setNavOpen: c
            } = (0, O.useRockstarUserState)(),
            {
              track: d
            } = (0, O.useGtmTrack)(),
            [m, g] = (0, o.useState)(null),
            [u, _] = (0, o.useState)(!1),
            [p, k] = (0, o.useState)(null),
            [b, v] = (0, o.useState)(!1),
            [h, x] = (0, o.useState)([]);
          (0, o.useEffect)((() => {
            x(s.characters[i] ?? [])
          }), [s, i]);
          const y = (0, o.useCallback)((e => {
            e.stopPropagation(), c(!n), d({
              event: "account_menu_click",
              element_placement: "Account Menu",
              text: n ? "close" : "open"
            })
          }), [n]);
          return (0, o.useEffect)((() => {
            const e = s?.id ?? !1,
              a = e ? (h?.[r]?.mugshotUrl ?? s?.avatar) || ss : is,
              t = yt(h?.[r]?.platform, "small") ?? null;
            k(t), g(a), _(e), v(!!h?.[r]?.mugshotUrl)
          }), [s, h, r, ss, is]), (0, f.jsxs)("button", {
            className: "rockstargames-sites-gtadc519cef2feb621e4715bd3fcdf09791",
            "data-img-set": b,
            "aria-label": t.formatMessage(jt.sc_menu_toggle),
            type: "button",
            onClick: e => y(e),
            "data-testid": "avaterMenuButton",
            children: [(0, f.jsx)("img", {
              className: "rockstargames-sites-gtace75eaa6d65692d36b60d31f3f660ff0",
              src: m || "",
              onError: () => {
                g(ss)
              },
              alt: s?.nickname || ""
            }), u && null !== p && (0, f.jsx)("img", {
              className: "rockstargames-sites-gtaaaf21e74a659089f743bb160bdf95046",
              src: p.src,
              alt: p.alt
            }), u && (0, f.jsx)("div", {
              "data-ui-name": "avatar",
              className: "rockstargames-sites-gtacf6b9e7404c64067bdfef9b79e9eb287",
              "data-platform": h?.[r]?.platform ?? null
            })]
          })
        }), ha),
        ns = {
          pillBtn: "rockstargames-sites-gtab03cc125f63972f13ae84119af852edc",
          selected: "rockstargames-sites-gtafbcf46d7ef0b32e64b374eee6e3cda3e",
          promoModule: "rockstargames-sites-gtaa586d11bf592ca821d65db7660518322",
          promoModuleImage: "rockstargames-sites-gtaccd749d613ceb73aedb825d77d22cd0b",
          gradient: "rockstargames-sites-gtae4f178a3d1e3dfef8b42f73eabd9919e",
          promoModuleContentContainer: "rockstargames-sites-gtad8348a62030f7e2f3c7a53cf67bef0f1",
          left: "rockstargames-sites-gtae56a5b7d9a696ea8ca340cc9b67998fc",
          right: "rockstargames-sites-gtac84d09e0c4466d20792d5a9016a00236",
          promoModuleTextContent: "rockstargames-sites-gtabf34746d222495ab8e30cede8de42d71"
        },
        cs = e => {
          let {
            backgroundColor: a,
            brands: t = [],
            description: s = "",
            ctaLabel: i = "Click here",
            ctaLink: r = "https://rockstargames.com",
            gradient: n = !0,
            image: c,
            imageOrientation: l = "right",
            title: d = ""
          } = e;
          const [m, g] = (0, o.useState)(!1), {
            ref: u,
            inView: _
          } = (0, W.cD)({
            threshold: .6
          }), {
            track: p
          } = (0, O.useGtmTrack)(), k = {
            "--promo-background": a ?? "var(--black-200)",
            "--promo-image": `url(${(0,I.useGetCdnSource)(c)})` ?? 0,
            "--promo-order": "left" === l ? "row" : "row-reverse"
          };
          return (0, o.useEffect)((() => {
            _ && !m && (p({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: "promo module",
              element_placement: "promo module"
            }), g(!0))
          }), [_]), (0, f.jsxs)(Oe.q.div, {
            className: ns.promoModule,
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
              className: [ns.promoModuleImage, n ? ns.gradient : "", "left" === l ? ns.left : ns.right].join(" ")
            }), (0, f.jsxs)("div", {
              className: ns.promoModuleContentContainer,
              children: [(0, f.jsx)(w, {
                brands: t,
                className: ns.promoModuleBrands
              }), (0, f.jsxs)("div", {
                className: ns.promoModuleTextContent,
                children: [d && (0, f.jsx)("h3", {
                  children: d
                }), s && (0, f.jsx)("p", {
                  children: s
                })]
              }), i && (0, f.jsx)(E, {
                to: r,
                text: i,
                onClick: () => {
                  p({
                    event: "cta_other",
                    event_category: "cta",
                    event_action: "other",
                    event_label: i,
                    element_placement: "promo module",
                    link_url: r,
                    text: i
                  })
                }
              })]
            })]
          })
        };
      var os = t(1532);
      const ls = {
          rating: "rockstargames-sites-gtaa1271bbed316bf567eb67e78d2143808",
          withDescriptors: "rockstargames-sites-gtacba248edc2520d3f1ad195a8495dc1f8",
          withOutDescriptors: "rockstargames-sites-gtaff919f7a60b854473b61075a671deb6a",
          text: "rockstargames-sites-gtad47cd2b7c7415cb44cddef00b1c9b35f"
        },
        ds = (0, l.defineMessages)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      (0, F.importAll)(t(52884));
      const ms = ra((0, l.withIntl)((e => {
          let {
            descriptors: a = null,
            footer: s = null,
            href: i,
            img: r = null,
            titleSlug: n = null,
            style: c = {},
            className: d
          } = e;
          const [m, g] = (0, o.useState)(!1), {
            inView: _
          } = (0, W.cD)({
            threshold: .6
          }), [p, b] = (0, o.useState)({
            img_rating: r,
            rating_descriptors: a,
            rating_footer: s,
            url_rating: i
          }), {
            track: v
          } = (0, O.useGtmTrack)(), h = (0, l.useIntl)(), {
            data: x
          } = (0, k.useQuery)(os.GameData, {
            variables: {
              titleSlug: n
            },
            skip: !n
          });
          if ((0, o.useEffect)((() => {
              x && b(x?.game)
            }), [x]), (0, o.useEffect)((() => {
              _ && !m && p.img_rating && (v({
                event: "page_section_impression",
                event_action: "impression",
                event_category: "page_section",
                event_label: "rating",
                element_placement: "rating"
              }), g(!0))
            }), [_]), !p.img_rating) return null;
          const y = !!p.rating_descriptors;
          return (0, f.jsxs)("div", {
            className: [ls.rating, y ? ls.withDescriptors : ls.withOutDescriptors, d || ""].join(" "),
            style: (0, F.safeStyles)(c),
            children: [(0, f.jsx)(u, {
              to: p.url_rating,
              target: "_blank",
              children: (0, f.jsx)("img", {
                alt: h.formatMessage(ds.components_ratings_link_alt, {
                  rating: (N = p.img_rating, N.replace(/_/g, " ").split(".")[0].toUpperCase())
                }),
                src: t(7e4)(`./${p.img_rating}`)
              })
            }), y && (0, f.jsxs)("div", {
              className: ls.text,
              children: [(0, f.jsx)("p", {
                className: ls.descriptors,
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
        }), ha)),
        gs = {
          responsiveFlexBox: "rockstargames-sites-gtacef355ba53827b9ec44655c80b247b2e",
          responsiveFlexItem: "rockstargames-sites-gtaa8f5d10f689c3d40c8378e3ae8a07517",
          responsiveImage: "rockstargames-sites-gtabee8268780b292e5bc0da0b497e2c28f"
        },
        fs = e => {
          let {
            children: a,
            className: t,
            style: s
          } = e;
          return (0, f.jsx)("div", {
            className: [gs.responsiveFlexBox, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: a
          })
        },
        us = {
          responsiveFlexItem: "rockstargames-sites-gtaae579f6183cf73c897e68c8aae5c9d9d"
        },
        _s = e => {
          let {
            children: a,
            className: t,
            style: s
          } = e;
          return (0, f.jsx)("div", {
            className: [us.responsiveFlexItem, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: a
          })
        },
        ps = {
          responsiveGridBox: "rockstargames-sites-gtaa28c0b7a44e1a2d5fb257161ce36a24f",
          responsiveGridItem: "rockstargames-sites-gtabeddf36313a28976090b5a8b04d2594a"
        },
        ks = e => {
          let {
            children: a,
            cols: t,
            className: s,
            rows: i,
            style: r
          } = e;
          const n = r ? {
            ...r
          } : {};
          return void 0 !== t && (n.gridTemplateColumns = `repeat(${t}, 1fr)`), void 0 !== i && (n.gridTemplateRows = `repeat(${i}, 1fr)`), (0, f.jsx)("div", {
            className: [ps.responsiveGridBox, void 0 !== s ? s : ""].join(" "),
            style: n,
            children: a
          })
        },
        bs = {
          responsiveGridBox: "rockstargames-sites-gtaa39e7c7140ada0ab28537c8c901e816f",
          responsiveGridItem: "rockstargames-sites-gtabe7a0966e2f0457c1172ac9da99020c6"
        },
        vs = e => {
          let {
            children: a,
            className: t,
            style: s
          } = e;
          return (0, f.jsx)("div", {
            className: [bs.responsiveGridItem, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: a
          })
        },
        hs = {
          responsiveImage: "rockstargames-sites-gtae31b43dce2e720669fb90bf539d22197"
        },
        xs = e => {
          let {
            src: a,
            className: t = "",
            animate: s,
            ariaLabel: i,
            style: r = {}
          } = e;
          const [n, c] = (0, F.usePreloadImg)(a);
          return n ? (r.backgroundImage = `url(${a})`, (0, f.jsx)("div", {
            role: "img",
            "aria-label": i ?? "R* Games",
            className: [hs.responsiveImage, s ? hs.animateBox : "", t].join(" "),
            style: {
              ...r,
              "--aspect-ratio": c.width / c.height
            }
          })) : null
        },
        ys = {
          responsiveSection: "rockstargames-sites-gtafb7094e43a166c19080ccfe92ed7420d",
          maxWidth: "rockstargames-sites-gtabdc35dbaa55c59ddd2831fd3ac05c5a7"
        },
        Ns = e => {
          let {
            children: a,
            className: t,
            style: s,
            maxWidth: i
          } = e;
          return (0, f.jsx)("section", {
            className: [ys.responsiveSection, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: i ? (0, f.jsx)("div", {
              className: ys.maxWidth,
              children: a
            }) : a
          })
        },
        js = () => (0, f.jsx)(u, {
          className: "rockstargames-sites-gtaba0c20f78999975dfb8d9cff0de44b34",
          alt: "Rockstar Games Home",
          to: "/"
        }),
        ws = () => {
          const {
            pathname: e
          } = (0, m.useLocation)();
          return (0, o.useEffect)((() => {
            window.scrollTo(0, 0)
          }), [e]), null
        },
        Ss = (0, o.forwardRef)(((e, a) => {
          const {
            threshold: t,
            callback: s,
            children: i,
            requireUser: r
          } = e, {
            track: n
          } = (0, O.useGtmTrack)(r), [c, l] = (0, o.useState)(a?.current);
          return (0, o.useEffect)((() => {
            a?.current && l(a.current)
          }), [a]), ((e, a, t) => {
            const [s, i] = (0, o.useState)({
              scrollDepths: e,
              scrollY: 0
            }), {
              scrollDepths: r,
              scrollY: n
            } = s;
            (0, o.useEffect)((() => {
              "undefined" != typeof window && 0 !== window.pageYOffset && i((e => ({
                ...e,
                scrollY: window.pageYOffset
              })))
            }), []), (0, o.useEffect)((() => {
              i({
                scrollDepths: e,
                scrollY: 0
              })
            }), [window.location.pathname]);
            const c = (0, o.useCallback)((() => {
              const e = document.documentElement,
                n = document.body,
                o = t?.scrollTop || e.scrollTop || n.scrollTop,
                l = t?.scrollHeight || e.scrollHeight || n.scrollHeight,
                {
                  clientHeight: d
                } = e,
                m = o / (l - d) * 100;
              if (r) {
                const e = Math.min(...r, l);
                if (m >= e) {
                  const s = r.filter((a => a !== e));
                  0 === s.length && (t ?? window).removeEventListener("scroll", c), a && a({
                    scrollY: e,
                    scrollPercent: m,
                    remainingDepths: s
                  }), i({
                    scrollY: e,
                    scrollDepths: s
                  })
                }
              } else i({
                ...s,
                scrollY: m
              })
            }), [r, t, a]);
            (0, o.useEffect)((() => {
              if ("undefined" == typeof window) return;
              const e = t ?? window;
              return e.addEventListener("scroll", c), () => e.removeEventListener("scroll", c)
            }), [c])
          })(t, (e => {
            let {
              scrollY: a
            } = e;
            n({
              event: "page_scroll",
              event_category: "page_scroll",
              event_action: a,
              scroll_depth: a
            }), "function" == typeof s && s(a)
          }), c), i
        })),
        Cs = (0, F.withTranslations)((e => {
          let {
            t: a
          } = e;
          const [t] = (0, o.useState)(""), s = (0, m.useNavigate)(), i = (0, k.useMutateState)();
          return (0, f.jsxs)("form", {
            action: "#",
            className: "rockstargames-sites-gtab82052ce07e004075e77261c373bfc50",
            onSubmit: e => {
              e.preventDefault(), i({
                navOpen: !1
              }), document.activeElement?.blur(), s(`/search?q=${e.target.q.value}`)
            },
            role: "search",
            children: [(0, f.jsx)("button", {
              type: "submit",
              role: "button",
              title: "Submit"
            }), (0, f.jsx)("input", {
              autoComplete: "off",
              defaultValue: t,
              enterKeyHint: "search",
              name: "q",
              placeholder: a("Search Rockstar Games")
            })]
          })
        })),
        Is = {
          skeleton: "rockstargames-sites-gtaf963a1ae95f7f5ac2c5192c3f357b6dc",
          pulse: "rockstargames-sites-gtae00ed88d692bbfc1a301dcfc61a077a9",
          gen9Hero: "rockstargames-sites-gtadb0b80177710d337d93bddb97b8a7dea"
        },
        Ts = e => {
          let {
            skeleton: a
          } = e;
          return a ? (0, f.jsx)("div", {
            className: [Is.skeleton, Is[a]].join(" ")
          }) : null
        },
        Ms = (0, l.defineMessages)({
          components_track_list_title: {
            id: "components_track_list_title",
            defaultMessage: "Tracklist"
          }
        }),
        Ls = {
          bodySmall: "rockstargames-sites-gtac048aacaedc7fb642f38c7f163c193e3"
        },
        Es = e => {
          let {
            track: a,
            artist: t
          } = e;
          return (0, f.jsxs)("div", {
            className: Ls.track,
            children: [(0, f.jsx)("p", {
              children: a
            }), (0, f.jsx)("p", {
              className: Ls.bodySmall,
              children: t
            })]
          })
        },
        Bs = (0, l.withIntl)((e => {
          let {
            children: a
          } = e;
          return (0, f.jsxs)("div", {
            className: "rockstargames-sites-gtae6c19f2cdd68a4352e248a8324383aa2",
            children: [(0, f.jsx)("h4", {
              className: "rockstargames-sites-gtacd3895fbae93ba04f1401487f6e6eddf",
              children: (0, f.jsx)(l.FormattedMessage, {
                ...Ms.components_track_list_title
              })
            }), (0, f.jsx)("div", {
              className: "rockstargames-sites-gtaef0cde8b15ded961605237d0e8328a9b",
              children: (0, f.jsx)("div", {
                className: "rockstargames-sites-gtabdd54186db17d27b3daebc4b9d58e09a",
                children: o.Children.map(o.Children.toArray(a), (e => (0, f.jsx)(Es, {
                  ...e?.props
                })))
              })
            })]
          })
        }), ha),
        Ps = "rockstargames-sites-gtaeca98eb0b5b84a0c9a2e6d952545a2d5",
        zs = "rockstargames-sites-gtad3d0b4ecd3bddba96c73f49fcca34ed8",
        $s = {
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
        Vs = e => {
          let {
            title: a = "thumbnail gallery",
            thumbsPerView: t = 3,
            loop: s = !1,
            navigation: i = !1,
            slideChildren: r = [],
            variants: n = {
              parent: void 0,
              main: void 0,
              thumbs: void 0
            },
            transition: c = {
              parent: void 0,
              main: void 0,
              thumbs: void 0
            }
          } = e;
          const {
            track: l
          } = (0, O.useGtmTrack)(), [d, m] = (0, o.useState)([sa.O4, sa.Hj, sa.eM]), [g, u] = (0, o.useState)(null), [_, p] = (0, o.useState)(null);
          return (0, o.useEffect)((() => {
            const e = [sa.O4, sa.Hj, sa.eM];
            i && e.push(sa._2), m(e)
          }), [i]), (0, o.useEffect)((() => {
            if (!r) return;
            const e = r.map(((e, a) => (0, f.jsx)(P.Ky, {
              children: e
            }, Symbol(a).toString())));
            p(e)
          }), [r]), _ ? (0, f.jsxs)(Oe.q.div, {
            className: "rockstargames-sites-gtad4f245838b94234f21463a08a8112910",
            variants: n.parent,
            transition: c.parent,
            initial: "initial",
            animate: "animate",
            children: [(0, f.jsx)(Oe.q.div, {
              className: Ps,
              variants: n.main,
              transition: c.main,
              initial: "initial",
              animate: "animate",
              children: (0, f.jsx)(P.wx, {
                loop: s,
                navigation: i,
                pagination: {
                  clickable: !0
                },
                thumbs: {
                  swiper: g
                },
                modules: d,
                breakpoints: $s,
                className: Ps,
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
                children: _
              })
            }), (0, f.jsx)(Oe.q.div, {
              className: zs,
              variants: n.thumbs,
              transition: c.thumbs,
              initial: "initial",
              animate: "animate",
              children: (0, f.jsx)(P.wx, {
                threshold: 50,
                onSwiper: u,
                loop: s,
                breakpoints: $s,
                slidesPerView: t,
                freeMode: !0,
                watchSlidesProgress: !0,
                modules: d,
                className: zs,
                children: _
              })
            })]
          }) : null
        };
      var Ds = t(504);
      const As = e => {
          let {
            id: a = null,
            ids: t = null,
            setTitleDataPath: s = null,
            sync: i = !1
          } = e;
          const r = t ?? [a],
            {
              data: n
            } = (0, k.useQuery)(Ds.TinaModulesInfo, {
              variables: {
                ids: r,
                sync: i
              },
              setTitleDataPath: s,
              skip: !r.length
            });
          return n?.tinaModulesInfo ?? null
        },
        Fs = ra((e => {
          let {
            components: a = {},
            id: t = null,
            ids: s = null,
            skeleton: i
          } = e;
          const r = As({
            id: t,
            ids: s
          });
          if (!r) return (0, f.jsx)(Ts, {
            skeleton: i
          });
          const n = r?.[0]?.tina;
          return n ? (0, f.jsx)(f.Fragment, {
            children: r.map(((e, t) => {
              let {
                tina: s
              } = e;
              return (0, f.jsx)(I.TinaParser, {
                components: a,
                tina: s,
                componentProps: {
                  tinaModulesInfo: r
                }
              }, t)
            }))
          }) : null
        })),
        Os = e => {
          let {
            children: a,
            style: t,
            theme: s
          } = e;
          const [i, r] = (0, o.useState)(s);
          return (0, o.useEffect)((() => {
            s && r(s)
          }), [s]), (0, f.jsx)("div", {
            className: "rockstargames-sites-gtaa3cc68ab0d512c3d8835ee9abb7a51c4",
            style: t,
            "data-theme": i,
            children: a
          })
        };
      var Rs = t(19168);
      const Us = {
          pillBtn: "rockstargames-sites-gtaae56f3a5bf16f1160a0cbc040c7611fa",
          selected: "rockstargames-sites-gtad7e34a082f54f22035320df51e8b4ed9",
          userVote: "rockstargames-sites-gtafd538df1ac730062880ff9ca1292dcc4",
          info: "rockstargames-sites-gtadd49c22b2bd842d7e8c11ac45b3a536b",
          voteContent: "rockstargames-sites-gtaeb3c4c0d7629a1182cd138d3d2e6e081",
          loggedOutButtons: "rockstargames-sites-gtad00b4195df0f175083f6aa2a7d847d72",
          voteButtons: "rockstargames-sites-gtafdd10a481e3da0f8e9511b6a577052e0",
          downVote: "rockstargames-sites-gtaabdbb2656b0080d66eb4d39b7e1eb38d",
          upVote: "rockstargames-sites-gtaea25ed07e937e2efdce0b99d076fbbe1",
          voteButtonActive: "rockstargames-sites-gtac31731d09d8118c6a82fe6edb193dc50"
        },
        Gs = e => {
          let {
            description: a,
            foreign_id: t = document.location.pathname,
            foreign_type: s = "url",
            title: i
          } = e;
          const {
            track: r
          } = (0, O.useGtmTrack)(), {
            loggedIn: n
          } = (0, O.useRockstarUser)(), {
            refetch: c
          } = (0, k.useQuery)(Rs.UserGetVote, {
            skip: !0
          }), [l] = (0, k.useMutation)(Rs.UserCastVote), [d, m] = (0, o.useState)(null), g = (0, o.useCallback)((async e => {
            r({
              event_action: d ? "like" : "dislike",
              event_category: "cta",
              event: "cta_" + (e ? "like" : "dislike"),
              event_label: t
            });
            const a = {
                foreign_id: t,
                foreign_type: s,
                vote: e
              },
              i = await l({
                variables: a
              });
            m(i?.data?.userCastVote?.vote ?? null)
          }), [t, s]);
          return (0, o.useEffect)((() => {
            (async () => {
              if (!n || !t || !s) return;
              const e = await c({
                foreign_id: t,
                foreign_type: s
              });
              m(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [t, s, n]), (0, f.jsx)("div", {
            className: Us.userVote,
            children: (0, f.jsxs)("div", {
              className: Us.voteContent,
              children: [(0, f.jsxs)("div", {
                className: Us.info,
                children: [(0, f.jsx)("h3", {
                  children: i
                }), (0, f.jsx)("p", {
                  children: a
                })]
              }), (0, f.jsxs)("div", {
                className: [Us.voteButtons, n ? "" : Us.loggedOutButtons].join(" "),
                children: [(0, f.jsx)("button", {
                  onClick: () => g(!0),
                  className: [Us.upVote, d ? Us.voteButtonActive : ""].join(" "),
                  type: "button",
                  "aria-label": "Vote up"
                }), (0, f.jsx)("button", {
                  className: [Us.downVote, !1 === d ? Us.voteButtonActive : ""].join(" "),
                  onClick: () => g(!1),
                  type: "button",
                  "aria-label": "Vote down"
                })]
              })]
            })
          })
        },
        Hs = {
          carousel: "rockstargames-sites-gtad8e71d378f6d4a968e8ac7d621e5f32a",
          text: "rockstargames-sites-gtaa3f73d86b98d36a296bf8f621f1c340f",
          info: "rockstargames-sites-gtaf46d7fc75c302b1d3f4db01d8572bea8",
          active: "rockstargames-sites-gtad26d1267cc02f841fee8a874d679aebd",
          title: "rockstargames-sites-gtaa879dfc151f7cf8da6bf5642b51436bb",
          gameTitle: "rockstargames-sites-gtab42d96124219141b4dbb454131b8c37b",
          videoTitle: "rockstargames-sites-gtac5ff8983fae65d6a3d7c741360bd3606",
          cta: "rockstargames-sites-gtae25e320fda75ce4076c9fe68b540a2fa",
          track: "rockstargames-sites-gtadd0d39c46df512d3eff8ba48e469af0a",
          disableClick: "rockstargames-sites-gtab169e1b67f64de28605dd5056a740584",
          items: "rockstargames-sites-gtadddc42d4babcaec339a7c1bd04420e6e",
          dragging: "rockstargames-sites-gtaa7313e3ff4e99b5313f8698890d0dd8c",
          dots: "rockstargames-sites-gtae1d7433489996eb9fa890d452ebcb042"
        },
        Ws = (0, F.withLocale)((e => {
          let {
            locale: a,
            t,
            videos: s
          } = e;
          const {
            setBodyIsScrollable: i
          } = (0, F.useBodyScrollable)(), [r, n] = (0, o.useState)(0), [c, l] = (0, o.useState)(0), d = (0, o.useRef)(null), m = (0, o.useRef)(null);
          return (0, o.useEffect)((() => {
            if (!d.current || m.current) return;
            const e = new(p())(d.current);
            e.get("press").set({
              time: 0
            }), e.get("tap").set({
              time: 150
            });
            const a = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
              t = () => {
                n(r - 1 < 0 ? 0 : r - 1), l(0)
              },
              c = () => {
                const e = r + 1 >= s.length - 1 ? s.length - 1 : r + 1;
                n(e), l(0)
              },
              o = e => {
                l(e.isFinal ? 0 : e.deltaX), "panleft" !== e.additionalEvent && "panright" !== e.additionalEvent || !m.current?.classList.contains(Hs.dragging) || a() && i(!1)
              },
              g = () => {
                a() && i(!0), l(0)
              },
              f = e => {
                "press" === e.type && d.current?.classList.add(`${Hs.disableClick}`), "tap" === e.type && (d.current?.classList.remove(`${Hs.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
              },
              u = () => {
                a() && i(!0), d.current && d.current.classList.remove(`${Hs.disableClick}`)
              },
              _ = () => {
                a() && i(!0)
              };
            return m.current.addEventListener("transitionend", _), e.on("swiperight", t), e.on("swipeleft", c), e.on("pan", o), e.on("panend", g), e.on("press tap", f), e.on("pressup", u), () => {
              e.off("swiperight", t), e.off("swipeleft", c), e.off("pan", o), e.off("panend", g), e.off("press tap", f), e.off("pressup", u), m.current && m.current.removeEventListener("transitionend", _), l(0)
            }
          }), [d.current, r]), (0, f.jsxs)("section", {
            className: Hs.carousel,
            children: [(0, f.jsx)("div", {
              className: Hs.track,
              ref: d,
              children: (0, f.jsx)("div", {
                className: `${Hs.items} ${0!==c?Hs.dragging:""}`,
                ref: m,
                style: {
                  transform: `translateX(calc(-${100*r}% + ${c}px))`
                },
                children: s.map(((e, a) => (0, f.jsx)(u, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through screencap",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  className: r === a ? Hs.active : "",
                  role: "link",
                  title: e.title,
                  tabIndex: r === a ? 0 : -1,
                  children: (0, f.jsx)(Zs, {
                    video: e,
                    size: 1280
                  })
                }, e.id)))
              })
            }), (0, f.jsxs)("footer", {
              children: [(0, f.jsx)("div", {
                className: Hs.text,
                children: s.map(((e, s) => (0, f.jsx)(u, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through footer",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  role: "link",
                  title: e.title,
                  tabIndex: r === s ? 0 : -1,
                  children: (0, f.jsxs)("div", {
                    className: [Hs.info, s === r ? Hs.active : ""].join(" "),
                    children: [(0, f.jsxs)("div", {
                      className: Hs.title,
                      children: [(0, f.jsx)("div", {
                        className: Hs.gameTitle,
                        children: `${e.game.title}${"fr_fr"===a?" ":""}`
                      }), (0, f.jsx)("h2", {
                        className: Hs.videoTitle,
                        children: `${e.title}`
                      })]
                    }), (0, f.jsx)(C, {
                      className: Hs.cta,
                      children: t("Watch Now")
                    })]
                  })
                }, e.id)))
              }), (0, f.jsx)("div", {
                className: Hs.dots,
                children: s.map(((e, a) => (0, f.jsx)("button", {
                  "aria-label": `Slide ${a+1}`,
                  "data-gtm-category": "Marquee",
                  "data-gtm-action": "Dot click",
                  "data-gtm-label": `Dot clicked to ${a}`,
                  onClick: () => n(a),
                  className: r === a ? Hs.active : "",
                  type: "button"
                }, e.id)))
              })]
            })]
          })
        })),
        qs = (0, l.defineMessages)({
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
        Xs = {
          videoList: "rockstargames-sites-gtaa77794780421c410f7ea55ed11ae6340",
          sectionHeader: "rockstargames-sites-gtaed556e2220733d99eae5df36ba41f9c7",
          arrowNav: "rockstargames-sites-gtaffeb6a2e829d49f94fea4ee7f5a0d2c8",
          items: "rockstargames-sites-gtaffe2263cdad39631ef304714ba89465d",
          trackWrapper: "rockstargames-sites-gtacbdef484a85e8f352a06609b394d4da7",
          track: "rockstargames-sites-gtaf3f263effe27f3c21f2ab822b9ee5dcf",
          dragging: "rockstargames-sites-gtac20488bcdf3f23bdf0c6c5b283ae08f4",
          arrow: "rockstargames-sites-gtac8012415449630a832011f490b9d2b72",
          previous: "rockstargames-sites-gtaf30d899a31937a4cf395643951224469",
          next: "rockstargames-sites-gtad9d5a85633fc0f0b7f98219d735e6e05",
          disabled: "rockstargames-sites-gtac806076a1e3e23c77528ee12e32771a3"
        },
        Ks = (0, l.withIntl)((e => {
          let {
            vids: a,
            games: t,
            title: s,
            gameTitleNecessary: i
          } = e;
          const r = (0, l.useIntl)(),
            n = void 0 !== t ? "games" : "videos",
            c = "videos" === n ? a : t.results,
            d = (0, o.useRef)(null),
            [m, g] = (0, o.useState)(0),
            [u, _] = (0, o.useState)(0),
            k = e => {
              const a = Math.ceil(c.length / m);
              let t = e;
              t < 0 ? t = 0 : t >= a - 1 && (t = a - 1), _(t)
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
              const e = new(p())(d.current),
                a = () => {
                  k(u - 1), v(0)
                },
                t = () => {
                  k(u + 1), v(0)
                },
                s = e => {
                  v(e.isFinal ? 0 : e.deltaX)
                },
                i = () => {
                  v(0)
                };
              return e.on("swiperight", a), e.on("swipeleft", t), e.on("pan", s), e.on("panend", i), () => {
                e.off("swiperight", a), e.off("swipeleft", t), e.off("pan", s), e.off("panend", i), v(0)
              }
            }
            return {}
          }), [d.current, u]), h = "games" === n ? (0, f.jsx)(f.Fragment, {
            children: t.results.map((e => (0, f.jsx)(ea, {
              game: e,
              dontOverrideTo: !0,
              to: `/videos?type=game&gameId=${e.id}`
            }, e.id)))
          }) : (0, f.jsx)(f.Fragment, {
            children: a.map((e => (0, f.jsx)(Js, {
              video: e,
              gameTitleNecessary: i
            }, e.id)))
          }), (0, f.jsxs)("section", {
            className: Xs.videoList,
            children: [(0, f.jsxs)("h3", {
              className: Xs.sectionHeader,
              children: [s, (0, f.jsxs)("div", {
                className: Xs.arrowNav,
                children: [(0, f.jsx)("button", {
                  className: [Xs.arrow, Xs.previous, 0 === u ? Xs.disabled : ""].join(" "),
                  onClick: () => k(u - 1),
                  type: "button",
                  "aria-label": `${0===u?r.formatMessage(qs.disabled_label)+", ":""}${r.formatMessage(qs.previous_button_label)}`
                }), (0, f.jsx)("button", {
                  className: [Xs.arrow, Xs.next, u === Math.ceil(c.length / m) - 1 ? Xs.disabled : ""].join(" "),
                  onClick: () => k(u + 1),
                  type: "button",
                  "aria-label": `${u===Math.ceil(c.length/m)-1?r.formatMessage(qs.disabled_label)+", ":""}${r.formatMessage(qs.next_button_label)}`
                })]
              })]
            }), (0, f.jsx)("div", {
              className: Xs.items,
              children: (0, f.jsx)("div", {
                className: Xs.trackWrapper,
                children: (0, f.jsx)("div", {
                  className: [Xs.track, 0 !== b ? Xs.dragging : ""].join(" "),
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
        }), ha),
        Ys = (0, F.withTranslations)((e => {
          let {
            error: a,
            t,
            domain: s = ""
          } = e;
          console.error({
            error: a
          });
          let i = a?.message ?? t("error-404-new");
          i = t("error-404-new");
          const r = a?.code ?? 398,
            n = (0, o.useRef)(null);
          return (0, o.useEffect)((() => {
            n && n?.current && n.current.focus()
          }), [n]), (0, f.jsxs)("div", {
            className: "rockstargames-sites-gtad988ce20c420c26fc5e455279bf94cb9",
            children: [(0, f.jsx)("h3", {
              tabIndex: -1,
              ref: n,
              children: `${i} (${r})`
            }), (0, f.jsx)(u, {
              to: "/",
              children: t("Home")
            }), "clr" !== s && (0, f.jsx)(Cs, {})]
          })
        })),
        Qs = {
          videoPreview: "rockstargames-sites-gtac6739cc628fda235abe2bafeb30ad7cf",
          card: "rockstargames-sites-gtaec6e68ffa1188155be202dfef3f92829",
          info: "rockstargames-sites-gtaab8da127fbcdb98f874bc3f1377669a2",
          title: "rockstargames-sites-gtae84fa4b2b140994c96a13607410d30a3",
          screencap: "rockstargames-sites-gtaa322c3d2275cedd594a3b17800154066",
          screencapLoaded: "rockstargames-sites-gtaf68c57f5459778024e5a98918ae61ab2",
          gameTitle: "rockstargames-sites-gtadebff452a4923aded7de826c081bab5d"
        },
        Zs = e => {
          let {
            video: a,
            size: t = 640
          } = e;
          const s = `${a.screencap}?im=Resize=${t}`,
            [i] = (0, F.usePreloadImg)(s);
          return (0, f.jsx)("div", {
            className: [Qs.screencap, i ? Qs.screencapLoaded : ""].join(" "),
            style: {
              background: `url(${s}) center/cover`
            }
          })
        },
        Js = e => {
          let {
            gameTitleNecessary: a = !0,
            openInNewWindow: t = !1,
            video: s,
            size: i,
            toExplicit: r
          } = e;
          const n = r ?? `/videos/${s.id}`,
            c = {
              className: Qs.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": n
            },
            o = (0, f.jsxs)("div", {
              className: Qs.card,
              children: [(0, f.jsx)(Zs, {
                video: s,
                size: i
              }), (0, f.jsxs)("div", {
                className: Qs.info,
                children: [a ? (0, f.jsx)("div", {
                  className: Qs.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: s.game.title
                  }
                }) : "", (0, f.jsx)("h5", {
                  className: Qs.title,
                  dangerouslySetInnerHTML: {
                    __html: s.title
                  }
                })]
              })]
            });
          return t ? (0, f.jsx)("a", {
            href: n,
            target: "_blank",
            ...c,
            children: o
          }) : (0, f.jsx)(u, {
            to: n,
            ...c,
            children: o
          })
        };
      class ei extends o.Component {
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
          return null !== this.state.error.code ? (0, f.jsx)(Ys, {
            error: this.state.error
          }) : this.props.children
        }
      }
      const ai = function(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return function(t) {
          return (0, f.jsx)(ei, {
            header: a,
            children: (0, f.jsx)(e, {
              ...t
            })
          })
        }
      };
      var ti = t(1267),
        si = t(20688),
        ii = t(48016);
      const ri = (0, o.forwardRef)(((e, a) => {
          const {
            children: t,
            tag: s = "div"
          } = e, i = ti.m[s];
          return (0, f.jsx)(si.O, {
            features: ii.i,
            children: (0, f.jsx)(i, {
              ref: a,
              ...e,
              children: t
            })
          })
        })),
        ni = {
          visible: {
            opacity: 1
          },
          hidden: {
            opacity: 0
          }
        },
        ci = {
          ease: "easeIn",
          duration: .4
        },
        oi = e => {
          let {
            children: a
          } = e;
          return (0, f.jsx)(Oe.q.div, Object.assign({
            className: "rockstargames-sites-gtaf0ee4e641f1ac92151be887c9ebb8392",
            variants: ni,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: ci
          }, {
            children: a
          }))
        },
        li = e => a => (0, f.jsx)(oi, {
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
          return (0, f.jsx)(Oe.q.div, {
            className: "rockstargames-sites-gtaa479a10c5475b17a0564b60fecf98c8b",
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
      var ki = t(80544);
      const bi = JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[300,300,0]},"a":{"k":[0,0,0]},"s":{"k":[244,244,100]}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"k":[100,100]},"p":{"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"tm","s":{"k":[{"i":{"x":[0.439],"y":[1.016]},"o":{"x":[0.561],"y":[0.015]},"n":["0p439_1p016_0p561_0p015"],"t":5,"s":[100],"e":[0]},{"t":33.0000013441176}],"ix":1},"e":{"k":[{"i":{"x":[0.439],"y":[1.017]},"o":{"x":[0.561],"y":[0.016]},"n":["0p439_1p017_0p561_0p016"],"t":0,"s":[100],"e":[0]},{"t":30.0000012219251}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"},{"ty":"st","fillEnabled":true,"c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":16},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"}],"ip":0,"op":900.000036657751,"st":0,"bm":0,"sr":1}],"v":"4.5.3","ddd":0,"ip":1.00000004073083,"op":33.0000013441175,"fr":29.9700012207031,"w":600,"h":600}'),
        vi = JSON.parse('{"v":"5.7.3","fr":60,"ip":0,"op":64,"w":300,"h":300,"nm":"Dot_Loading","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"center","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":10,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":22,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":34,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.667,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"right","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":5,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":17,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":29,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.333,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":12,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":24,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0}],"markers":[]}'),
        hi = {
          SPINNING: "spinning",
          THREE_DOTS: "threeDots"
        },
        xi = e => {
          let a, {
            type: t = hi.SPINNING
          } = e;
          switch (t) {
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

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
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
        body: "query GetAudioAlbum($id: Int!, $locale: String!) {\n    audioAlbum(id: $id, locale: $locale) {\n        title\n        tracks {\n            id\n            cover_src\n            mp3_src\n            title\n            color\n            mix_blend_mode\n            duration\n            artist {\n                name\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function i(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.GetAudioAlbum = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          n = new Set,
          c = new Set;
        for (r.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = i(e, a);
          s && t.definitions.push(s)
        })), t
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

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
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
        body: "query UserGetVote($foreignId: String!, $foreignType: String!) {\n    userGetVote(foreign_id: $foreignId, foreign_type: $foreignType) {\n        vote\n    }\n}\n\nmutation UserCastVote(\n    $foreignId: String!\n    $foreignType: String!\n    $vote: Boolean!\n) {\n    userCastVote(\n        foreign_id: $foreignId\n        foreign_type: $foreignType\n        vote: $vote\n    ) {\n        vote\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function i(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function r(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          n = new Set,
          c = new Set;
        for (r.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = i(e, a);
          s && t.definitions.push(s)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.UserGetVote = r(a, "UserGetVote"), e.exports.UserCastVote = r(a, "UserCastVote")
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

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
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
        body: "query TinaModulesList($types: [String], $locale: String!) {\n    tinaModulesList(types: $types, locale: $locale) {\n        results {\n            id_hash\n            id\n            title\n            type\n        }\n    }\n}\n\nquery TinaModulesInfo(\n    $ids: [String]!\n    $locale: String!\n    $sync: Boolean = false\n    $cache: Boolean = false\n) {\n    tinaModulesInfo(ids: $ids, locale: $locale, cache: $cache) {\n        id: id_hash\n        title\n        title_doc\n        type\n        sync_hash\n        to\n        visible\n        children {\n            title\n            id_hash\n            to\n            tina {\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n        tina {\n            payload\n            variables {\n                keys\n                _translations @include(if: $sync) {\n                    locale\n                    keys\n                }\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function i(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function r(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          n = new Set,
          c = new Set;
        for (r.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = i(e, a);
          s && t.definitions.push(s)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesList = r(a, "TinaModulesList"), e.exports.TinaModulesInfo = r(a, "TinaModulesInfo")
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

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
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
        body: "query UserGetVote($foreign_id: String!, $foreign_type: String!) {\n    userGetVote(foreign_id: $foreign_id, foreign_type: $foreign_type) {\n        vote\n    }\n}\n\nmutation UserCastVote(\n    $foreign_id: String!\n    $foreign_type: String!\n    $vote: Boolean!\n) {\n    userCastVote(\n        foreign_id: $foreign_id\n        foreign_type: $foreign_type\n        vote: $vote\n    ) {\n        vote\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function i(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function r(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          n = new Set,
          c = new Set;
        for (r.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = i(e, a);
          s && t.definitions.push(s)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.UserGetVote = r(a, "UserGetVote"), e.exports.UserCastVote = r(a, "UserCastVote")
    },
    55492: (e, a, t) => {
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
      s.loc.source = {
        body: '#import "@rockstargames/graph-client/operations/fragments/newswire-post.graphql"\n#import "@rockstargames/graph-client/operations/fragments/paging.graphql"\n\nquery NewswireList(\n    $locale: String!\n    $page: Int!\n    $tagId: Int\n    $metaUrl: String!\n    $cache: Boolean = true\n) {\n    meta: metaUrl(url: $metaUrl, domain: "www", locale: $locale) {\n        title\n    }\n    posts(page: $page, tagId: $tagId, locale: $locale) {\n        paging {\n            ...paging\n        }\n        results {\n            ...postFields\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var i = {};

      function r(e) {
        return e.filter((function(e) {
          if ("FragmentDefinition" !== e.kind) return !0;
          var a = e.name.value;
          return !i[a] && (i[a] = !0, !0)
        }))
      }

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
      s.definitions = s.definitions.concat(r(t(73784).definitions)), s.definitions = s.definitions.concat(r(t(28540).definitions));
      var c = {};

      function o(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      s.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          n(e, a), c[e.name.value] = a
        }
      })), e.exports = s, e.exports.NewswireList = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [o(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var s = c[a] || new Set,
          i = new Set,
          r = new Set;
        for (s.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var n = r;
          r = new Set, n.forEach((function(e) {
            i.has(e) || (i.add(e), (c[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var s = o(e, a);
          s && t.definitions.push(s)
        })), t
      }(s, "NewswireList")
    },
    13892: (e, a, t) => {
      var s = {
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
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 13892
    },
    52884: (e, a, t) => {
      var s = {
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

      function i(e) {
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 52884
    },
    7e4: (e, a, t) => {
      var s = {
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

      function i(e) {
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 7e4
    },
    6572: (e, a, t) => {
      var s = {
        "./bounty.png": 30752,
        "./collector.png": 40056,
        "./moonshiner.png": 41444,
        "./naturalist.png": 73268,
        "./trader.png": 74688
      };

      function i(e) {
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 6572
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