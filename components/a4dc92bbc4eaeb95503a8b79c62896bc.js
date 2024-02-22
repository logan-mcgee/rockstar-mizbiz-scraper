! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "21885c0e-22f4-468f-86e3-bf749835634d", e._sentryDebugIdIdentifier = "sentry-dbid-21885c0e-22f4-468f-86e3-bf749835634d")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "5e225a56a96343405c858680af91190e5116b19e",
  packageName: "@rockstargames/components",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "5e225a56a96343405c858680af91190e5116b19e"
}, (self.webpackChunk_rockstargames_components = self.webpackChunk_rockstargames_components || []).push([
  [708], {
    7020: (e, a, t) => {
      "use strict";
      t.d(a, {
        c: () => m
      });
      var s = t(8200),
        n = t(9416),
        c = t.n(n),
        r = t(1740),
        i = t(5792);
      const o = {
        pillBtn: "rockstargames-componentsd810fb92dfd42bc44ba286ea7f4ca3b7",
        selected: "rockstargames-componentsbaf6f0b8c58ebca5fce849d220999883",
        grid: "rockstargames-componentsdebe9dcb1f7173c7819134eb6306602e",
        itemList: "rockstargames-componentsef6c598b9b7622adff2026dec903f790",
        gtaplus: "rockstargames-componentsd4be04331b6a5f8859df9fbcefe9f96c",
        rdo: "rockstargames-componentsaff5c1a135f34b95b6caf0b4120c2a0b",
        noImg: "rockstargames-componentse22ba35cec3156e742c511e38df6b3fb",
        gtao: "rockstargames-componentsbae14e42d7d43f5b95dc42c2aad55e65",
        custom: "rockstargames-componentsb306c3d666df0f49beeb0abf1009ca57",
        yellow: "rockstargames-componentsd4194477b8d74d05b2cc47b89b7381f1",
        hotPink: "rockstargames-componentsa084561ccce9e0a8e8be22cb91351542",
        red: "rockstargames-componentse96347df2ba00dd709953604edd75075",
        turquoise: "rockstargames-componentsa8331c51f0bc357903fbcc0bcea9862e",
        purple: "rockstargames-componentsb2812084d4bc4da16ad7cd8897d23525",
        teal: "rockstargames-componentse132a6b1e366f2fec77f23bf32b497d0",
        blue: "rockstargames-componentsc8a4acf9d4576443a15fcae83d81d791",
        green: "rockstargames-componentsd9e6f12dcca597ca30e9c45921c361c2",
        darkRed: "rockstargames-componentsd735aca85c099013a14f720595aa4902",
        darkBlue: "rockstargames-componentsec3bcc6a9e1bfd4adc746d7d8bac1142",
        goldenrod: "rockstargames-componentsbe9a0d659fd5a7b58d3201c931bafd66",
        skull: "rockstargames-componentsd7be25cefb21d3912007e5ec987f35ba"
      };
      var l = t(3480);
      const {
        sanitize: d
      } = c(), m = e => {
        let {
          list: a,
          string: t,
          starColor: n,
          style: c,
          className: m,
          game: f,
          noImg: g,
          columns: p,
          mobileColumns: u
        } = e;
        const [k, _] = (0, s.useState)(null);
        return (0, s.useEffect)((() => {
          _(a)
        }), [a]), t || a ? p && k ? (0, l.jsx)("div", {
          className: o.grid,
          style: {
            "--ordered-list-grid-column": p,
            "--ordered-list-grid-column-mobile": u ?? p
          },
          children: (0, l.jsx)("ol", {
            style: (0, i.safeStyles)(c),
            className: (0, r.classList)(o.itemList, o.noImg, o[n], o[f]),
            children: k.map((e => (0, l.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: d(e.content)
              }
            }, e.content)))
          })
        }) : (0, l.jsx)("ol", {
          style: (0, i.safeStyles)(c),
          className: (0, r.classList)(o.itemList, o.custom, g ? o.noImg : "", n ? o[n] : "", f ? o[f] : "", m ?? ""),
          children: a.map((e => (0, l.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: d(e?.content ?? e)
            }
          }, e?.content)))
        }) : null
      }
    },
    4004: (e, a, t) => {
      "use strict";
      t.d(a, {
        c: () => m
      });
      var s = t(8200),
        n = t(9416),
        c = t.n(n),
        r = t(1740),
        i = t(5792);
      const o = {
        grid: "rockstargames-componentsed478db3df0bb24d8430e5f2c3db50e7",
        itemList: "rockstargames-componentsae1d16253b1fc6703f5efac102a44af0",
        gtaplus: "rockstargames-componentse738d52851f09866f9377fd4f69f4b96",
        rdo: "rockstargames-componentsc83f215f48446acad56b94eefc456562",
        noImg: "rockstargames-componentsdec6cf56e697288fc7996ac4b87ed90c",
        gtao: "rockstargames-componentscd87095d9ca8d71d00f3c28284bb0d87",
        custom: "rockstargames-componentsa086421981acea761fa1a28d49ee8487",
        yellow: "rockstargames-componentsf3d52db2471886bbb8f13bfe8afdb69d",
        hotPink: "rockstargames-componentsa145a18ae8267704d5d421de8e5878c2",
        red: "rockstargames-componentsea530c2c0d7eb752771f7c368c9037d3",
        turquoise: "rockstargames-componentsfe6c65112390936da939c92120c76056",
        purple: "rockstargames-componentse4671875cdd6d237565d851bc1626a0e",
        teal: "rockstargames-componentsf0ca3eff9617c871dd9658ae343b5619",
        blue: "rockstargames-componentsd495633df4c51a02412ce8eac7cf9e24",
        green: "rockstargames-componentsbfcd222c01908eb5cf73f035fc0b7719",
        darkRed: "rockstargames-componentsd768e1a3c301702a9573e52e3ec00bc0",
        darkBlue: "rockstargames-componentsf1d45b2ea0bb160d7bb06b45ebabe4df",
        goldenrod: "rockstargames-componentsa30641b08e9f3c2ce6608a387abf5e62",
        skull: "rockstargames-componentsa82bbef0b3177b321657177dd01be991"
      };
      var l = t(3480);
      const {
        sanitize: d
      } = c(), m = e => {
        let {
          list: a,
          string: t,
          starColor: n,
          style: c,
          className: m,
          game: f,
          noImg: g,
          columns: p,
          mobileColumns: u
        } = e;
        const [k, _] = (0, s.useState)(null), b = t ? t.split("_#_") : a;
        return (0, s.useEffect)((() => {
          _(a)
        }), [a]), t || a ? p && k ? (0, l.jsx)("div", {
          className: o.grid,
          style: {
            "--unordered-list-grid-column": p,
            "--unordered-list-grid-column-mobile": u ?? p
          },
          children: (0, l.jsx)("ul", {
            style: (0, i.safeStyles)(c),
            className: (0, r.classList)(o.itemList, o.noImg, o[n], o[f]),
            children: k.map((e => (0, l.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: d(e.content)
              }
            }, e.content)))
          })
        }) : (0, l.jsx)("ul", {
          style: (0, i.safeStyles)(c),
          className: (0, r.classList)(o.itemList, o.custom, g ? o.noImg : "", n ? o[n] : "", f ? o[f] : "", m ?? ""),
          children: b.map((e => (0, l.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: d(e?.content ?? e)
            }
          }, e?.content)))
        }) : null
      }
    },
    3168: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        A: () => m,
        AudioPlayer: () => h,
        Badge: () => x,
        Brands: () => y,
        Button: () => j,
        ButtonGroup: () => M,
        CalloutSection: () => K,
        Carousel: () => V,
        ConditionalBlock: () => O,
        CookieAB: () => ae,
        CountryInputField: () => ee,
        Cta: () => re,
        DescriptionArea: () => be,
        DiscountsBadge: () => Ne,
        DotLoader: () => Se,
        Dropdown: () => Ce,
        Embed: () => Le,
        ExpandingPlatformButton: () => Fe,
        FadeInContent: () => Re,
        GameCard: () => s,
        GameSiteHeader: () => qe,
        Gen9Button: () => T,
        Gen9CoreCarousel: () => Ze,
        Grid: () => Te,
        HTMLElement: () => la,
        Hero: () => ra,
        HookStore: () => D,
        ImageWithBadge: () => ha,
        LanguageSelector: () => ua,
        LayeredImage: () => ba,
        LoadingAnimation: () => rn,
        MultiSourceImage: () => fe,
        NewswireBlocks: () => Ba,
        NewswireCard: () => wa,
        NewswireList: () => Ta,
        NewswireRelated: () => La,
        NewswireTag: () => ja,
        OrderedList: () => Pa.c,
        PackList: () => Oa,
        PackListMenu: () => et,
        Paging: () => st,
        ParallaxCacheBuster: () => ct,
        ParallaxInnerLayer: () => ot,
        ParallaxOuterLayer: () => dt,
        ParallaxWrapper: () => it,
        ProfileSwitcher: () => n,
        PromoModule: () => Kt,
        Rating: () => Jt,
        ResponsiveFlexBox: () => as,
        ResponsiveFlexItem: () => ss,
        ResponsiveGridBox: () => cs,
        ResponsiveGridItem: () => is,
        ResponsiveImg: () => ls,
        ResponsiveSection: () => ms,
        RockstarLogo: () => fs,
        ScrollToTop: () => gs,
        ScrollTracker: () => ps,
        SearchBox: () => us,
        Separator: () => ue,
        Skeleton: () => _s,
        SrcsetImage: () => ya,
        TextFit: () => he,
        ThumbsGallery: () => Ss,
        TinaModuleFetchNRender: () => Is,
        TinaWrapper: () => Ts,
        TrackList: () => xs,
        UnorderedList: () => ge.c,
        UserVote: () => Es,
        VideoCard: () => c,
        VideoCarousel: () => Ps,
        VideoList: () => Vs,
        Wasted: () => $s,
        framer: () => i,
        useTinaModuleFetchByIds: () => Cs,
        withSearchbarErrorBoundary: () => Rs,
        withSimpleErrorBoundary: () => Ye
      });
      var s = {};
      t.r(s), t.d(s, {
        Art: () => Ge,
        Link: () => He
      });
      var n = {};
      t.r(n), t.d(n, {
        CharacterCard: () => ut,
        Menu: () => Gt,
        MenuButton: () => qt
      });
      var c = {};
      t.r(c), t.d(c, {
        Art: () => Ds,
        Link: () => Fs
      });
      var r = {};
      t.r(r), t.d(r, {
        getVariant: () => en,
        transitions: () => Zs,
        variants: () => Js
      });
      var i = {};
      t.r(i), t.d(i, {
        Animations: () => r,
        LiteMotion: () => Us,
        withFadeIn: () => qs,
        withFadeUp: () => Qs
      });
      var o = t(8200),
        l = t(3557),
        d = t(3480);
      const m = e => {
        let {
          children: a,
          to: t = "#",
          alt: s = "",
          autoBlank: n = !1,
          onClick: c = (() => {}),
          ...r
        } = e;
        const i = !/^(https?|mailto):/i.test(t);
        if (/^#/.test(t)) {
          const e = e => {
            e.preventDefault(), document?.querySelector(`[id='${t.replace("#","")}']`)?.scrollIntoView({
              behavior: "smooth",
              block: "center"
            }), c && c(e)
          };
          return (0, d.jsx)("a", {
            title: s,
            href: t,
            onClick: e,
            ...r,
            children: a
          })
        }
        if (i) return (0, d.jsx)(l.NavLink, {
          title: s,
          to: t,
          onClick: e => c(e),
          ...r,
          children: a
        });
        const o = Object.keys(r).filter((e => !["activeClassName", "key", "end"].includes(e))).reduce(((e, a) => ({
            ...e,
            [a]: r[a]
          })), {}),
          m = r?.target ?? (n ? "_blank" : "_self");
        return "function" == typeof o?.className && delete o.className, (0, d.jsx)("a", {
          href: t,
          ...o,
          title: s,
          onClick: e => c(e),
          target: m,
          children: a
        })
      };
      var f = t(7860),
        g = t.n(f),
        p = t(3052),
        u = t(436);
      const k = {
          player: "rockstargames-componentsabd7e29d2ee07dd94fa953e0164ef716",
          fixedToBottom: "rockstargames-componentsc750efebee129d411ded4b00cd9ed887",
          tracksOpen: "rockstargames-componentsfe20e15bacb6846d2b37389b5a614e5f",
          tracks: "rockstargames-componentsf5051902b8e7172836d5b6db4efcb6fc",
          iconBurger: "rockstargames-componentsec72d6a4c757a34abd57499850841075",
          trackList: "rockstargames-componentsa13514574184e984f1f8a8b4c81b4e7e",
          trackActive: "rockstargames-componentsc6b3b5568d6159751b049f7bf736248d",
          trackTitle: "rockstargames-componentseb561fc744f7fe9e22d6e9b696da44c1",
          trackIndex: "rockstargames-componentsf7542c050f2bc83a90e401262e49b8e1",
          controls: "rockstargames-componentsb37e83e605d94bdb18a062b0a8fdb69e",
          controlsCurrentBg: "rockstargames-componentsef92e21596f9c74a7cbceb410ead938a",
          controlsCurrentBgVisible: "rockstargames-componentsa1071c4abd73fd2ebbb45aed3d3bd9d3",
          controlsTrack: "rockstargames-componentsd77df94db4dd80c091161885a0d94eef",
          controlsTrackTitle: "rockstargames-componentsf64db1d49e1b31588b6e9b91cb066c78",
          controlsTrackAnimating: "rockstargames-componentsf60687f14e73fd43cf797a9052a4b8f4",
          scrollText: "rockstargames-componentsd05df94f9894fcc871956b8acf4459f0",
          controlsTrackArtist: "rockstargames-componentsf4ec03a21e950c105847443e3c0d49c0",
          controlsTrackBurger: "rockstargames-componentsdc6c26f181ecf07dee487ff63cc9da10",
          controlsButtons: "rockstargames-componentsd398656b4508c8962ee36e5756331b94",
          controlsScrub: "rockstargames-componentsa69c6bbc7e4cd0e7448cef2cf936aebf",
          controlsPlayPause: "rockstargames-componentsa0e0b6a418599a36805fa760c7bb146f",
          controlsPlayPausePlaying: "rockstargames-componentsfc246608b4db8bb7d2fe095e716e967e",
          controlsNextTrack: "rockstargames-componentsa810abacc28dca0d828ecd98996db722",
          controlsPrevTrack: "rockstargames-componentse44c8e31a2d00efe76923f9cbfa19c3c",
          controlsScrubTrack: "rockstargames-componentsf683bd5df43f5a1c83c824c9f49b9608"
        },
        _ = e => {
          let {
            src: a
          } = e;
          return (0, d.jsx)("div", {
            className: k.cover,
            style: {
              background: `url(${a}) center/cover`
            }
          })
        },
        b = e => {
          let {
            timing: a = {
              current: 0,
              duration: 0
            },
            playing: t,
            audioRef: s,
            setPlaying: n,
            tracksOpen: c,
            setTracksOpen: r,
            trackData: i,
            setTrackId: l,
            trackBounds: m,
            setAutoNext: f
          } = e;
          const p = (0, o.useRef)(null),
            u = (0, o.useRef)(null),
            _ = (0, o.useRef)(null),
            [b, v] = (0, o.useState)(null),
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
              _.current && u.current && v(_.current.clientWidth > u.current.clientWidth)
            };
            return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e)
          }), [_, u, a]), (0, o.useEffect)((() => {
            if (!p.current || !a?.duration) return;
            let e = null;
            const t = new(g())(p.current),
              n = e => {
                if (p.current) {
                  const t = p.current.clientWidth;
                  if (!p.current.contains(e.srcEvent.target)) return;
                  const n = Math.max(0, e.srcEvent.offsetX),
                    c = Number(n / t * a.duration);
                  s.currentTime = c
                }
              },
              c = () => {
                e ? s.pause() : s.play()
              },
              r = () => {
                e = s.paused, s.pause()
              };
            return t.on("panstart", r), t.on("panleft", n), t.on("panright", n), t.on("panend", c), t.on("tap", n), () => {
              t.off("panstart", r), t.off("panleft", n), t.off("panright", n), t.off("panend", c), t.off("tap", n)
            }
          }), [p.current, a.duration]), (0, o.useEffect)((() => {
            const e = Number(s?.currentTime);
            (t || !isNaN(e) && 0 !== e) && x(!0)
          }), [t, s?.currentTime]), (0, d.jsxs)("div", {
            className: k.controls,
            style: {
              "--track-color": i.color,
              "--track-mix-blend-mode": i.mix_blend_mode,
              "--current-pct": a.current / a.duration
            },
            children: [(0, d.jsx)("div", {
              className: [k.controlsCurrentBg, h ? k.controlsCurrentBgVisible : ""].join(" ")
            }), (0, d.jsx)("div", {
              className: k.controlsTrack,
              ref: u,
              children: (0, d.jsx)("span", {
                className: [k.controlsTrackTitle, b ? k.controlsTrackAnimating : ""].join(" "),
                ref: _,
                children: i.title
              })
            }), (0, d.jsxs)("div", {
              className: k.controlsButtons,
              children: [(0, d.jsx)("div", {
                className: k.controlsPrevTrack,
                onClick: () => {
                  m && (l(m[0]), f(!0), n(!0))
                }
              }), (0, d.jsx)("div", {
                className: [k.controlsPlayPause, t ? k.controlsPlayPausePlaying : ""].join(" "),
                onClick: () => {
                  n(!t)
                }
              }), (0, d.jsx)("div", {
                className: k.controlsNextTrack,
                onClick: () => {
                  m && (l(m[1]), f(!0), n(!0))
                }
              })]
            }), (0, d.jsx)("div", {
              active: c ? "" : null,
              className: k.controlsTrackBurger,
              children: (0, d.jsx)("div", {
                className: k.iconBurger,
                onClick: () => {
                  r(!c)
                }
              })
            }), (0, d.jsxs)("div", {
              className: k.controlsScrub,
              children: [(0, d.jsx)("span", {
                children: y(a.current)
              }), (0, d.jsx)("div", {
                className: k.controlsScrubTrack,
                ref: p
              }), (0, d.jsx)("span", {
                children: y(a.duration)
              })]
            })]
          })
        },
        v = e => {
          let {
            tracks: a,
            trackId: t,
            setTrackId: s,
            tracksOpen: n,
            setTracksOpen: c,
            setPlaying: r,
            setAutoNext: i
          } = e;
          return (0, d.jsxs)("div", {
            className: k.tracks,
            children: [(0, d.jsx)("h4", {
              children: "Tracks"
            }), (0, d.jsx)("div", {
              className: k.trackBurger,
              onClick: () => {
                c(!n)
              }
            }), (0, d.jsx)("div", {
              className: k.trackList,
              children: a.map(((e, a) => (0, d.jsxs)("a", {
                style: {
                  "--highlight-color": e.color
                },
                className: t === e.id ? k.trackActive : "",
                onClick: () => {
                  s(e.id), r(!0), i(!0)
                },
                children: [(0, d.jsx)("span", {
                  className: k.trackIndex,
                  children: String(a + 1).padStart(2, "0")
                }), (0, d.jsx)("span", {
                  className: k.trackTitle,
                  children: e.title
                }), (0, d.jsx)("span", {
                  className: k.trackTime,
                  children: e.duration
                })]
              }, e.id)))
            })]
          })
        },
        h = e => {
          let {
            id: a,
            className: t = ""
          } = e;
          const {
            data: s
          } = (0, p.useQuery)(u.GetAudioAlbum, {
            variables: {
              id: a
            }
          }), [n, c] = (0, o.useState)(), [r, i] = (0, o.useState)(), [l, m] = (0, o.useState)(), [f, g] = (0, o.useState)(!1), [h, x] = (0, o.useState)(!1), [y, N] = (0, o.useState)(new HTMLAudioElement), [j, S] = (0, o.useState)({
            current: 0,
            duration: 0
          }), [w, C] = (0, o.useState)(!0);
          return (0, o.useEffect)((() => {
            const e = "audio",
              a = a => {
                a?.data?.rockstarAudioPlayerPlayTrackId && (i(a.data.rockstarAudioPlayerPlayTrackId), C(!1), x(!0)), h && a?.data?.attentionBlurredElsewhere && a?.data?.from !== e && x(!1)
              };
            return h && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: e
            }), window.addEventListener("message", a, !1), () => window.removeEventListener("message", a, !1)
          }), [h]), (0, o.useEffect)((() => {
            if (!y) return;
            const e = () => {
                isNaN(y.duration) || S({
                  duration: y?.duration ?? 0,
                  current: y?.currentTime ?? 0
                })
              },
              a = () => {
                w && n && i(n[1])
              };
            return y.addEventListener("loadedmetadata", e), y.addEventListener("timeupdate", e), y.addEventListener("ended", a), () => {
              y.removeEventListener("loadedmetadata", e), y.removeEventListener("timeupdate", e), y.removeEventListener("ended", a)
            }
          }), [y, n, w]), (0, o.useEffect)((() => {
            h && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: "audio"
            })
          }), [h]), (0, o.useEffect)((() => {
            y && (h ? y.play() : y.pause(), g(!1))
          }), [h, y, l?.id]), (0, o.useEffect)((() => {
            if (!r) return;
            const {
              tracks: e
            } = s.audioAlbum, a = s.audioAlbum.tracks.findIndex((e => e.id === r));
            c([e[a - 1]?.id ?? e[e.length - 1].id, e[a + 1]?.id ?? e[0].id]), m(e[a])
          }), [r]), (0, o.useEffect)((() => {
            s && i(s.audioAlbum.tracks[0].id)
          }), [s]), l ? (0, d.jsxs)("div", {
            className: [k.player, k[t], f ? k.tracksOpen : ""].join(" "),
            children: [(0, d.jsx)("audio", {
              ref: e => {
                N(e)
              },
              src: l.mp3_src
            }), (0, d.jsx)(v, {
              tracks: s.audioAlbum.tracks,
              setTrackId: i,
              trackId: r,
              tracksOpen: f,
              setTracksOpen: g,
              setPlaying: x,
              setAutoNext: C
            }), (0, d.jsx)(_, {
              src: l.cover_src
            }), (0, d.jsx)(b, {
              setTrackId: i,
              trackBounds: n,
              tracksOpen: f,
              setTracksOpen: g,
              playing: h,
              setPlaying: x,
              timing: j,
              trackData: l,
              audioRef: y,
              setAutoNext: C
            })]
          }) : null
        },
        x = e => {
          let {
            text: a,
            style: t
          } = e;
          return (0, d.jsx)("div", {
            className: "rockstargames-componentsd1b139df2f344d8623f1761b1c22851e",
            style: t,
            children: a
          })
        },
        y = e => {
          let {
            brands: a = []
          } = e;
          return a.length ? (0, d.jsx)("div", {
            className: "rockstargames-componentsf50b14e327e838ce8adc869a5eea825e",
            children: a.map(((e, a) => {
              let {
                brand: t
              } = e;
              return (0, d.jsx)("div", {
                className: "rockstargames-componentsde14434878d3a4254243321c61af830f",
                "data-brand": t
              }, a)
            }))
          }) : null
        },
        N = {
          button: "rockstargames-componentsa4fd8cd8a46e9a1a91d5502215f3f1ae",
          secondary: "rockstargames-componentsc66fa9cf28a8e3df90b10d2c679aadf8"
        },
        j = e => {
          let {
            className: a = "",
            children: t,
            context: s = "",
            to: n,
            onClick: c,
            ...r
          } = e;
          const i = [N.button, N[s], a].join(" ");
          return n ? (0, d.jsx)(m, {
            ...r,
            to: n,
            className: i,
            onClick: c ? () => c() : () => {},
            children: t
          }) : (0, d.jsx)("button", {
            ...r,
            type: "button",
            className: i,
            onClick: c ? () => c() : () => {},
            children: t
          })
        };
      var S = t(1740);
      const w = {
          pillBtn: "rockstargames-componentsb0fe83943c276391f656cad338a5a4c4",
          selected: "rockstargames-componentsd28f856b516e7edb21850d02d86faf9c",
          plusButton: "rockstargames-componentsa29717bb19b2420d834e4fd3be491f2b",
          small: "rockstargames-componentsc5ab30d440e471cabc926c6ab1e07827",
          btnText: "rockstargames-componentsacccbcb84c6c7a18cbbccae2e0759666",
          btnTexticon: "rockstargames-componentsa29b6be987dfb622851cb24f12a5a06d",
          whiteBtn: "rockstargames-componentsb6b0da3a8bffb8785d34090155a5a55d",
          blackBtn: "rockstargames-componentsc3540b7db3446e926e7e3c589e1e8bf5",
          transparentBtn: "rockstargames-componentsa36b2de757105be63e445d2d27e09a73",
          iconBtn: "rockstargames-componentsf15b2b484d5a417bf0257ac7174e5fdf",
          link: "rockstargames-componentsc59f12ee707ae0495404fdcdc95412b1",
          xboxone: "rockstargames-componentseb03f43a4947c0a912dceae92f886f2e",
          xboxseriesxs: "rockstargames-componentse69b54a2efdbceac537675b0f993a25d",
          ps4: "rockstargames-componentsbc16a1251d724ada48701584af62e830",
          ps5: "rockstargames-componentsb50725f974e5d4fccf11de1e8b9aa53e",
          pc: "rockstargames-componentscd6872764281b209089a15347b3b2cf1"
        },
        C = e => {
          let {
            children: a,
            className: t,
            onClick: s,
            style: n
          } = e;
          return (0, d.jsx)("button", {
            className: t,
            onClick: s ? () => s() : () => {},
            style: n,
            type: "button",
            children: a
          })
        },
        I = e => {
          let {
            children: a,
            className: t,
            onClick: s,
            style: n,
            to: c
          } = e;
          return (0, d.jsx)(l.NavLink, {
            className: t,
            onClick: s ? () => s() : () => {},
            style: n,
            to: c,
            children: a
          })
        },
        T = e => {
          let {
            btnColor: a = "#fff",
            className: t = "",
            consoleBtn: s,
            icon: n = "",
            img: c,
            labelColor: r = "#000",
            onClick: i,
            secondText: o,
            size: l,
            text: m,
            to: f,
            type: g = ""
          } = e;
          const p = [w.plusButton, w[g] ?? "", w[l] ?? "", w[s] ?? "", t].join(" "),
            u = {
              "--hvr-color": a ?? r,
              "--hvr-bg-color": r ?? a,
              "--hvr-border-color": a ?? r
            },
            k = (0, d.jsxs)(d.Fragment, {
              children: [c ? (0, d.jsx)("img", {
                src: c,
                alt: ""
              }) : "", (0, d.jsxs)("div", {
                className: w.btnText,
                icon: n,
                children: [m, o ? (0, d.jsx)("span", {
                  children: o
                }) : ""]
              })]
            });
          if (f) {
            if (f.startsWith("http")) {
              const e = f.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, d.jsx)("span", {
                onClick: i ? () => i() : () => {},
                onKeyDown: i,
                className: p,
                role: "button",
                tabIndex: 0,
                children: (0, d.jsx)("a", {
                  href: f,
                  target: e,
                  children: k
                })
              })
            }
            return (0, d.jsx)(I, {
              className: p,
              onClick: i ? () => i() : () => {},
              style: u,
              to: f,
              children: k
            })
          }
          return (0, d.jsx)(C, {
            className: p,
            onClick: i ? () => i() : () => {},
            style: u,
            children: k
          })
        },
        M = e => {
          let {
            buttons: a = [],
            className: t
          } = e;
          return a.length ? (0, d.jsx)("div", {
            className: (0, S.classList)("rockstargames-componentse41a240a5f0751a81fe26be55331d947", t),
            children: a.map(((e, a) => {
              let {
                icon: t,
                title: s,
                to: n
              } = e;
              return s ? (0, d.jsx)(T, {
                icon: t,
                text: s,
                to: n
              }, a) : ""
            }))
          }) : null
        };
      var L = t(8111),
        E = t(8e3);
      const B = {
          deprecatedCarousel: "rockstargames-componentse15bfeaa67d9abeba218ec0934df1613",
          "swiper-scrollbar-disabled": "rockstargames-componentsf0cf706915727a9de2898df37d4024b0",
          "swiper-horizontal": "rockstargames-componentsac8663ca58d40e66b2b6f12d20675b2a",
          "swiper-vertical": "rockstargames-componentsb2d8e139456680bdaca6aa25392cf18f",
          renderedWithChildren: "rockstargames-componentse2ec837c877a9bd899b3a39913bc6f3b",
          panorama: "rockstargames-componentse9196dbf46df1b579e52ab9fac2424af",
          img: "rockstargames-componentsf3ae65a9b57bb6b2f1bd1cf6af9c05e5",
          hideMobile: "rockstargames-componentse9468644ee981d7dbf1f5e88a7f5452e",
          hideLarge: "rockstargames-componentsb4c36abeaf8e0bd1c36b7fc4a32b440e",
          imageAreaBg: "rockstargames-componentsf77a93d0daf81e24f6cd6ee1e2af2b28",
          infinite_false: "rockstargames-componentsf60ff4f90f5164dfec38d2726702f87b",
          track: "rockstargames-componentsdb5832b4847da61250902e813ab654d6",
          perico: "rockstargames-componentscb73e1c1d4bd52b10aa7a876e5122340",
          dotsSlide: "rockstargames-componentsf43a56d8cb7a1e8306ece0a1700427fe",
          siblings: "rockstargames-componentsc53d016c89c91533f7b17a0a723217bd",
          active: "rockstargames-componentsaab372e37edd7dbcc5c2627c026eebc2",
          "swiper-preloader-spin": "rockstargames-componentsec53a4549e5bd288f282e28b1df352a1"
        },
        P = e => {
          let {
            item: a
          } = e;
          return (0, d.jsxs)("div", {
            children: [(0, d.jsx)(ha, {
              image: a?.image,
              badge: a?.badge ?? a?.image?.badge,
              badgeType: "badge3",
              role: a?.role ?? a?.image?.role,
              splitter: a?.splitter ?? a?.image?.splitter,
              type: a?.type,
              ariaLabel: a?.image?.ariaLabel ?? a.description,
              style: a?.style,
              className: (0, S.classList)(B.img, a?.className)
            }), (a?.title || a?.description) && (0, d.jsx)(be, {
              item: a
            })]
          })
        },
        z = e => {
          let {
            current: a,
            total: t
          } = e;
          return (0, d.jsx)("div", {
            className: "swiper-scrollbar",
            style: {
              "--current-slide": a,
              "--total-slides": t
            },
            children: (0, d.jsx)("div", {
              className: "swiper-scrollbar-drag"
            })
          })
        },
        V = e => {
          let {
            children: a,
            items: t = [],
            style: s = {},
            noInfiniteScroll: n = !1,
            className: c = "",
            renderTemplate: r = "standard",
            text: i,
            customSpaceBetween: l = null,
            centerSlides: m = !0,
            centeredSlidesBounds: f = !1
          } = e;
          const [g, p] = (0, o.useState)(0), u = (0, o.useMemo)((() => a && Array.isArray(a) ? a.map((() => (0, E.v4)())) : null), [a]);
          if (!(t && 0 !== t?.length || a)) return null;
          const k = {
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
          return (0, d.jsxs)("div", {
            className: (0, S.classList)(B.deprecatedCarousel, B[r], B[`infinite_${!n}`], a ? B.renderedWithChildren : "", c),
            style: s,
            children: [(0, d.jsxs)(L.wx, {
              loop: !n,
              grabCursor: !0,
              centeredSlides: m,
              centerInsufficientSlides: m,
              slidesPerView: "auto",
              speed: 700,
              breakpoints: k,
              onUpdate: () => p(0),
              onActiveIndexChange: e => p(e?.realIndex ?? 0),
              centeredSlidesBounds: f,
              children: [(0, d.jsx)("div", {
                className: B.trackWrapper,
                children: (0, d.jsxs)("div", {
                  className: B.track,
                  children: [t?.map((e => (0, d.jsx)(L.Ky, {
                    children: (0, d.jsx)(P, {
                      item: e
                    })
                  }, e.key))), a && a?.map(((e, a) => e && (0, d.jsx)(L.Ky, {
                    children: e
                  }, u && u[a])))]
                })
              }), (0, d.jsx)(z, {
                current: g,
                total: a ? a.length : t.length
              })]
            }), (i?.title || i?.description) && (0, d.jsx)(be, {
              item: i
            })]
          })
        };
      var $ = t(5792),
        A = t(2836);
      const D = (0, t(7924).createHooks)(),
        F = e => {
          let {
            condition: a = null,
            children: t
          } = e;
          const [s, n] = (0, o.useState)(!1), c = (e => {
            const [a] = (0, l.useSearchParams)(), [t, s] = (0, o.useState)(null), n = (0, A.useRockstarUser)(), {
              loggedIn: c
            } = n, {
              currentCharId: r
            } = (0, A.useRockstarUserState)(), i = function(e) {
              let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "gtao";
              return (0, o.useMemo)((() => {
                const s = e?.data?.characters?.[t];
                return "1" === (s?.[a]?.stats?.overview?.hasGtaPlus?.value ?? "0")
              }), [e, t, a])
            }(n, r);
            return (0, o.useEffect)((() => {
              s(null);
              const n = "true" === a.get("conditionPreview");
              if (!(!e?.length > 0)) return D.applyFilters("preview_conditions", e), e.forEach((e => {
                const {
                  value: r
                } = e;
                if (n) return "true" === a.get(r) ? (s(!0), !0) : (s(!1), !1);
                if (!1 === t) return !1;
                switch (r) {
                  case "user:is:loggedIn":
                    s(!0 === c);
                    break;
                  case "user:not:loggedIn":
                    s(!1 === c);
                    break;
                  case "user:is:gtaPlus":
                    s(!0 === i);
                    break;
                  case "user:not:gtaPlus":
                    s(!1 === i);
                    break;
                  default:
                    s(!1)
                }
                return null
              })), () => {}
            }), [a, e, i, n, c]), t
          })(a);
          return (0, o.useEffect)((() => {
            n(c)
          }), [c]), (0, o.useMemo)((() => s ? t : null), [s])
        },
        O = (0, $.withTranslations)((e => {
          let {
            children: a
          } = e;
          return o.Children.map(o.Children.toArray(a), (e => (0, d.jsx)(F, {
            ...e?.props
          })))
        }));
      var R = t(2032),
        U = t(7944);
      const G = e => {
          let {
            className: a
          } = e;
          return (0, d.jsxs)("svg", {
            className: a,
            width: "16",
            height: "17",
            viewBox: "0 0 16 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, d.jsx)("path", {
              d: "M3.33203 8.5H12.6654",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, d.jsx)("path", {
              d: "M8 3.83331L12.6667 8.49998L8 13.1666",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })]
          })
        },
        H = {
          pillBtn: "rockstargames-componentse5feb58c999761e8b74659fc33b11edc",
          selected: "rockstargames-componentsf58c8c92a9197aaa0a94cf4ba43566a6",
          calloutContainer: "rockstargames-componentsa3703abcf05faaa015cfdffc3e0f5759",
          calloutSection: "rockstargames-componentsd62b6eb13c6827ec93eb4311c011870c",
          calloutHeaders: "rockstargames-componentsc3fc37dd453796f1dee1d4b8fef1960f",
          calloutHeaderMargins: "rockstargames-componentsb1a261c271839ea2e6a7799a5213c01a",
          calloutHeader: "rockstargames-componentsd5ff6c68f1022d823bf1aa8274606374",
          calloutSubheader: "rockstargames-componentsf8c6827735fa007c1a85aa058800a2ee",
          calloutVoteForm: "rockstargames-componentsf0ea206a0340bf911179fd7bd1159541",
          voteButton: "rockstargames-componentsda242ac768430bbe411d91bc36f34fcd",
          upvote: "rockstargames-componentsf369f38e2597b448c10e93f33c5f5a63",
          downvote: "rockstargames-componentsa6f386bd5b1e3bd8bfb2fe71a049b43a",
          active: "rockstargames-componentsbf08329484993cd5ed93c2250366e76a",
          calloutButton: "rockstargames-componentsa246ec414fab9978122cb3f6e4f10036",
          calloutLink: "rockstargames-componentseb13f31edd6f79f9d81667ce468c910e",
          calloutLinkIcon: "rockstargames-componentsb00b85f4606798419ba17f644adebf29",
          actionBlock: "rockstargames-componentsa2346234d571677ab32a01f2860659f5",
          actionFooter: "rockstargames-componentse6fe627360d9b3181f452e338302a107"
        },
        W = e => {
          let {
            foreign_id: a,
            foreign_type: t
          } = e;
          const {
            track: s
          } = (0, A.useGtmTrack)(), {
            refetch: n
          } = (0, p.useQuery)(U.UserGetVote, {
            skip: !0
          }), [c] = (0, p.useMutation)(U.UserCastVote), [r, i] = (0, o.useState)(null), l = (0, o.useCallback)((e => {
            (async () => {
              if (e === r && null !== r) i(null);
              else {
                i(e), s({
                  event_action: e ? "like" : "dislike",
                  event_category: "cta",
                  event: "cta_" + (e ? "like" : "dislike"),
                  event_label: a
                });
                const n = {
                  foreignId: a,
                  foreignType: t,
                  vote: e
                };
                await c({
                  variables: n
                })
              }
            })()
          }), [a, t, r]);
          return (0, o.useEffect)((() => {
            a && t && (async () => {
              const e = await n({
                foreignId: a,
                foreignType: t
              });
              i(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [a, t]), (0, d.jsxs)("div", {
            className: H.calloutVoteForm,
            children: [(0, d.jsx)("button", {
              "aria-label": "upvote",
              className: [H.upvote, H.voteButton, r ? H.active : ""].join(" "),
              name: "upvote",
              onClick: () => l(!0),
              type: "button"
            }), (0, d.jsx)("button", {
              "aria-label": "downvote",
              className: [H.downvote, H.voteButton, !1 === r ? H.active : ""].join(" "),
              name: "downvote",
              onClick: () => l(!1),
              type: "button"
            })]
          })
        },
        q = e => {
          let {
            action_text: a,
            link: t,
            trackingData: s
          } = e;
          const {
            track: n
          } = (0, A.useGtmTrack)();
          return (0, d.jsx)("a", {
            href: t,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, d.jsxs)("button", {
              className: H.calloutLink,
              type: "button",
              onClick: s ? () => n({
                ...s
              }) : () => {},
              children: [a, (0, d.jsx)(G, {
                className: H.calloutLinkIcon
              })]
            })
          })
        },
        X = e => {
          let {
            helperText: a,
            linkText: t,
            link: s,
            trackingData: n
          } = e;
          const {
            track: c
          } = (0, A.useGtmTrack)();
          return (0, d.jsxs)("div", {
            className: H.actionFooter,
            children: [a, t && " ", t && (0, d.jsx)("a", {
              href: s ?? "",
              onClick: () => c({
                ...n
              }),
              children: t
            })]
          })
        },
        K = (0, $.withTranslations)((e => {
          let {
            header: a,
            subheader: t,
            type: s,
            action_text: n,
            link: c,
            foreign_id: r = document.location.pathname,
            foreign_type: i = "url",
            className: l = "",
            actionFooterHelperText: m,
            actionFooterLinkText: f,
            actionFooterLink: g,
            trackingData: p = {},
            actionFooterLinkTrackingData: u = {},
            t: k,
            ..._
          } = e;
          const {
            loggedIn: b
          } = (0, A.useRockstarUser)(), {
            track: v
          } = (0, A.useGtmTrack)(), h = `${document.location.origin}/auth/sc-auth-login?returnUrl=${window.location.pathname}`, {
            ref: x,
            inView: y
          } = (0, R.useInView)({
            threshold: .6
          }), [N, S] = (0, o.useState)(!1);
          let w;
          if ((0, o.useEffect)((() => {
              y && !N && (v({
                event: "page_section_impression",
                event_action: "impression",
                event_category: "page_section",
                event_label: "callout section",
                element_placement: `callout section - ${_?.sectionName??_?._memoq?.header}`
              }), S(!0))
            }), [y]), !a && !t) return null;
          switch (s) {
            case "vote":
              if (!b) {
                w = (0, d.jsx)(j, {
                  to: h,
                  className: H.calloutButton,
                  onClick: p ? () => v({
                    ...p
                  }) : () => {},
                  children: "Log In"
                });
                break
              }
              w = (0, d.jsx)(W, {
                foreign_id: r,
                foreign_type: i
              });
              break;
            case "button":
              n && c && (w = (0, d.jsx)(j, {
                to: c,
                className: H.calloutButton,
                onClick: p ? () => v({
                  ...p
                }) : () => {},
                children: n
              }));
              break;
            case "link":
              n && c && (w = (0, d.jsx)(q, {
                action_text: n,
                link: c,
                trackingData: p
              }));
              break;
            default:
              w = null
          }
          return (0, d.jsx)("div", {
            className: `${H.calloutContainer} ${l||""}`,
            ref: x,
            children: (0, d.jsxs)("div", {
              className: H.calloutSection,
              children: [(0, d.jsxs)("div", {
                className: [H.calloutHeaders, w ? H.calloutHeaderMargins : ""].join(" "),
                children: [a && (0, d.jsx)("h2", {
                  className: H.calloutHeader,
                  children: k(a)
                }), t && (0, d.jsx)("h3", {
                  className: H.calloutSubheader,
                  children: k(t)
                })]
              }), (0, d.jsxs)("div", {
                className: H.actionBlock,
                children: [w, m && (0, d.jsx)(X, {
                  helperText: m,
                  linkText: f,
                  link: g,
                  trackingData: u
                })]
              })]
            })
          })
        }));
      var Y = t(1272),
        Q = t.n(Y),
        Z = t(6776),
        J = t.n(Z);
      const ee = e => {
          let {
            isMulti: a,
            allowSelectAll: t,
            label: s,
            miscProps: n
          } = e;
          const [c, r] = (0, o.useState)(""), i = (0, o.useMemo)((() => J()().getData()), []);
          return (0, d.jsx)(Q(), {
            unstyled: !0,
            value: c,
            isMulti: a,
            allowSelectAll: t,
            options: i,
            placeholder: s,
            onChange: e => {
              return a = e?.target?.value, void r(a);
              var a
            },
            classNamePrefix: "country-select",
            ...n
          })
        },
        ae = e => {
          let {
            cookieName: a,
            cookieValue: t,
            trueComponent: s,
            falseComponent: n
          } = e;
          const c = (e => {
              const a = document.cookie.split("; "),
                t = `${e}=`,
                s = a.find((e => e.startsWith(t)));
              return s?.substring(t.length, s.length)
            })(a),
            r = new URLSearchParams(window.location.search).get(a);
          return r && ((e, a) => {
            e && a && (document.cookie = `${e}=${a}; domain=${(()=>{const e=window.location.hostname.split(".");return e.slice(e.length-2).join(".")})()}; path=/;`)
          })(a, r), c === t || r === t ? s : n
        },
        te = {
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
        se = e => te[e] || null,
        ne = {
          cta: "rockstargames-componentsbe39fbdcbb3b9229e6fd8207fb9b716d",
          xbox: "rockstargames-componentsbb69ac0896f6db542346e36a15a4a2a6",
          xboxone: "rockstargames-componentsbcc2edfb2d346d958b617a06be9e7818",
          xboxseriesxs: "rockstargames-componentsb7a33ca25eabca95b92aee707747b45e",
          ps: "rockstargames-componentse5ca537b198d2bdc9e8bf51bc45dda56",
          ps4: "rockstargames-componentsdbac8dbd2c691eb0c4bd984b519f1442",
          ps5: "rockstargames-componentse520c1d520a8212142dabf4622f0a41d",
          pc: "rockstargames-componentsba654f7123a73c2f7f4cf1eb6e007d25",
          switch: "rockstargames-componentse70950189ae79e58ae1d94c4cc3c1625",
          googleplay: "rockstargames-componentsd68e8a06e9d81fa7f3d53896780346c3",
          platformIcon: "rockstargames-componentsea0f1ce19bd982385507a977fec591c8",
          applestore: "rockstargames-componentsbb18e35f5295e93bd362e93419fddae4",
          btnIcon: "rockstargames-componentsc1544cd82744081706f4f5def406d828",
          label: "rockstargames-componentsf2e903547022a38346813d8c4ac606cd",
          primary: "rockstargames-componentsb7efd254942acd5c21c297f91d5ab818",
          btnContent: "rockstargames-componentsa1fadf1cdd8ec7e3c0ad4315b8c7f66e",
          icon: "rockstargames-componentsdc22762e1eae3f953ea7dcb97173e041",
          "icon-left": "rockstargames-componentse976616192648af8434af7f580f488c4",
          "icon-right": "rockstargames-componentsbf2911524d31c435a07365163223e0b9",
          disabled: "rockstargames-componentsd30d809341f5b67393bd8788c9971249",
          pillBtn: "rockstargames-componentseb7a1c9a5d40a596465d2a69450e6724",
          selected: "rockstargames-componentsbeab424de4d563ee13b4407a0f49202c"
        },
        ce = e => {
          let {
            platform: a = ""
          } = e;
          const t = a ? se(a) : null,
            s = t ? (0, d.jsx)("img", {
              className: ne.platformIcon,
              src: t,
              alt: "Platform Icon"
            }) : null;
          return (0, d.jsx)("span", {
            className: [ne.btnContent, ne.platformButton].join(" "),
            children: s
          })
        },
        re = e => {
          let {
            children: a,
            href: t,
            style: s,
            content: n,
            variant: c = null,
            icon: r,
            iconPosition: i = "none",
            iconStyle: m,
            badge: f,
            badgeStyle: g,
            platformItem: p,
            gtm: u = {},
            disabled: k,
            className: _
          } = e;
          const {
            track: b
          } = (0, A.useGtmTrack)(), v = (0, $.useDataLayer)(), h = n ?? a, x = `Redirect to ${t}`, y = (0, o.useMemo)((() => {
            const e = window.location.hostname;
            let a;
            try {
              a = new URL(t)?.hostname
            } catch (t) {
              a = e
            }
            return e === a
          }), [t]), N = (0, o.useCallback)((() => {
            k || b({
              event: "cta_other",
              ...v,
              ...u,
              link_url: t ?? void 0,
              text: h ?? void 0
            })
          }), [u, t, v]), j = () => r ? (0, d.jsx)("span", {
            className: [ne.icon, `icon-${i}`].join(" "),
            style: m,
            children: (0, d.jsx)("img", {
              className: ne.btnIcon,
              src: se(r),
              alt: `${r} icon`
            })
          }) : null;
          return (0, d.jsx)(l.NavLink, {
            to: t,
            target: y ? "_self" : "_blank",
            className: [ne.cta, "platform" === c && p ? ne[p] : "", k ? ne.disabled : "", _].join(" "),
            style: s,
            "data-variant": c,
            onClick: N,
            disabled: k,
            "aria-label": x,
            children: "platform" === c && p ? (0, d.jsx)(ce, {
              platform: p
            }) : (0, d.jsxs)("div", {
              className: ne.btnContent,
              children: ["left" === i && j(), (0, d.jsx)("span", {
                children: h
              }), "right" === i && j(), f ? (0, d.jsx)("span", {
                className: ne.badge,
                style: g,
                children: f
              }) : null]
            })
          })
        };
      var ie = t(5652);
      const oe = "rockstargames-componentsf6ed43b225fde028df4ad1be1f6cf9b2",
        le = "rockstargames-componentscadcad87be7ddfa9f93a8d7e56c70c27",
        de = "rockstargames-componentsb4a61261f9b92ee9f88bc262c25b8db5",
        me = e => {
          let {
            alt: a,
            className: s,
            src: n,
            style: c
          } = e;
          const [r, i] = (0, $.usePreloadImg)(n);
          let o = n;
          !1 === r && (s === de && (o = t(5148)), o = t(1340));
          const l = {
            "--aspect-ratio": i.width / i.height,
            ...c
          };
          return (0, d.jsx)("img", {
            src: o,
            className: s ?? "",
            alt: a,
            style: l
          })
        },
        fe = e => {
          let {
            className: a,
            style: s = {},
            image: n = {},
            imageStyle: c = {}
          } = e, {
            alt: r,
            src: i
          } = (0, ie.useImageParser)(n);
          return i.desktop || i.mobile || (r = "placeholder", i = {
            mobile: t(5148),
            desktop: t(1340)
          }), (0, d.jsx)("div", {
            className: n.frame ? `${n.frame} ${oe}` : oe,
            style: s,
            children: i?.desktop && i?.mobile ? (0, d.jsxs)(d.Fragment, {
              children: [(0, d.jsx)(me, {
                style: {
                  ...c,
                  ...n?.style
                },
                src: i.desktop,
                alt: r,
                className: a ? `${a} ${le}` : le
              }), (0, d.jsx)(me, {
                style: {
                  ...c,
                  ...n?.style
                },
                src: i.mobile,
                alt: r,
                className: a ? `${a} ${de}` : de
              })]
            }) : (0, d.jsx)(me, {
              style: {
                ...c,
                ...n?.style
              },
              src: i?.desktop ?? i?.mobile,
              alt: r,
              className: a
            })
          })
        };
      var ge = t(4004);
      const pe = {
          hr: "rockstargames-componentsf8a3b2c8f2a22335f6e3376d656ca4fc",
          redLine: "rockstargames-componentsaf9bbd6f886f5a7006a7627cbb6e580a",
          gtao: "rockstargames-componentsba2d02287a5ca877fe016e8d0d2a6918"
        },
        ue = e => {
          let {
            style: a,
            className: t = "",
            type: s
          } = e;
          return (0, d.jsx)("div", {
            style: a,
            className: [pe.hr, pe[s], t].join(" ")
          })
        },
        ke = "rockstargames-componentsf0975df7973ad18b515ce054411ab11d",
        _e = e => {
          let {
            to: a,
            children: t
          } = e;
          return a ? (0, d.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noreferrer",
            children: t
          }) : t
        },
        be = e => {
          let {
            item: a,
            className: t = ""
          } = e;
          return (0, d.jsxs)("div", {
            className: (0, S.classList)("rockstargames-componentsfd0d7e84a734f6a4d9774b75dd083634", t),
            children: [a.title && (0, d.jsx)(_e, {
              to: a?.href ?? a?.to,
              children: (0, d.jsx)("h3", {
                children: a.title
              })
            }), Array.isArray(a?.description?.content) ? a.description.content?.map(((e, a) => e?.unorderedList ? (0, d.jsx)(ge.c, {
              columns: e.unorderedList.columns ?? null,
              style: {
                "--unordered-list-padding": "var(--grid-gap-static-sm)",
                "--unordered-list-margin-bottom": ".5rem"
              },
              noImg: !0,
              list: e.unorderedList.list
            }, a) : e?.image ? (0, d.jsx)(fe, {
              image: e.image,
              className: e?.className,
              ariaLabel: e.image?.ariaLabel
            }, a) : e?.separator ? (0, d.jsx)("div", {
              style: {
                margin: `${e.separator.spacing} 0`
              },
              children: (0, d.jsx)(ue, {})
            }, a) : (0, d.jsx)("p", {
              children: (0, d.jsx)("span", {
                className: ke,
                dangerouslySetInnerHTML: {
                  __html: e
                }
              })
            }, a))) : (0, d.jsx)("span", {
              className: ke,
              dangerouslySetInnerHTML: {
                __html: a.description
              }
            })]
          })
        };
      var ve = t(6428);
      const he = e => {
          let {
            children: a,
            ...t
          } = e;
          const [s, n] = (0, o.useState)(!1);
          return (0, d.jsx)(ve.Textfit, {
            ...t,
            onReady: () => {
              document.fonts.ready.then((() => {
                n(!0)
              }))
            },
            children: a
          })
        },
        xe = {
          badge: "rockstargames-componentsb255ec6ba1899d9b47851a077d480563",
          badgeSizeUpdate: "rockstargames-componentsf437aab1239e8cecc4e0626335d35778",
          badge2: "rockstargames-componentsffd14a47d0321c6013c06040fd382014",
          badge3: "rockstargames-componentsbc6eb2cd59bc5c25b101f4cc87538d37"
        },
        ye = e => {
          let {
            wrapper: a,
            children: t,
            role: s,
            splitter: n
          } = e;
          return n || s ? a(t) : t
        },
        Ne = e => {
          let {
            badge: a,
            badgeType: s,
            role: n,
            splitter: c
          } = e;
          const r = [];
          c ? a.split(c).map(((e, a) => r.push(e))) : r.push(a);
          let i = 100;
          return 2 == r.length && r[1].length < 4 && "off" !== r[1].toLowerCase() && 45, (0, d.jsxs)(ye, {
            splitter: c,
            role: n,
            wrapper: e => (0, d.jsx)("div", {
              className: `${xe.badge} ${s?xe[s]:""} `,
              children: e
            }),
            children: [(0, d.jsx)(d.Fragment, {
              children: n && (0, d.jsx)(fe, {
                image: {
                  alt: n,
                  desktop: t(7536)(`./${n}.png`)
                }
              })
            }), (0, d.jsx)(he, {
              className: `${c||n?"":xe.badge} ${s?xe[s]:""}`,
              min: 8,
              max: 1e3,
              mode: c || n ? "single" : "multi",
              children: r[0]
            }), (0, d.jsx)(d.Fragment, {
              children: r.shift() && c && r.length >= 1 && (0, d.jsx)(he, {
                min: 8,
                max: 1e3,
                mode: "single",
                forceSingleModeWidth: !0,
                children: r.join(" ")
              })
            })]
          }, "badge-wrapper")
        },
        je = "rockstargames-componentse59ae95c65bdeb501f86807cb3bd0939",
        Se = e => {
          let {
            color: a
          } = e;
          return (0, d.jsxs)("div", {
            className: "rockstargames-componentsbb9ff64a38e9b92229c0e2343a9a0b28",
            style: {
              "--loader-color": a
            },
            children: [(0, d.jsx)("div", {
              className: je
            }), (0, d.jsx)("div", {
              className: je
            }), (0, d.jsx)("div", {
              className: je
            })]
          })
        },
        we = {
          dropdownWrapper: "rockstargames-componentsb775232124e9901acb9b5c823beba64f",
          items: "rockstargames-componentscaa34ae3ff26d0c50fe1c3bca2294d26",
          open: "rockstargames-componentsa7c9b4acbd2af6d4589f08854adfca3e",
          opener: "rockstargames-componentsca6664cb672281a5037835ba0251cd53",
          secondary: "rockstargames-componentscdbe59933dd2f6ffac6d1aefd76cfa71"
        },
        Ce = e => {
          let {
            children: a,
            className: t,
            title: s
          } = e;
          const [n, c] = (0, o.useState)(!1);
          return (0, d.jsxs)("div", {
            className: [we.dropdownWrapper, n ? we.open : "", void 0 !== t ? t : ""].join(" "),
            children: [(0, d.jsx)("button", {
              className: we.opener,
              onClick: () => c(!n),
              children: s
            }), (0, d.jsx)("div", {
              className: we.items,
              onClick: () => c(!1),
              children: a
            })]
          })
        };
      var Ie = t(5356);
      const Te = e => {
          let {
            children: a,
            context: t = null,
            game: s,
            image: n = {},
            style: c = {},
            template: r = null,
            theme: i = null,
            reversedOnMobile: o = !1,
            className: l = ""
          } = e;
          const m = (0, ie.useImageParser)(n),
            f = {
              ...c
            };
          if (m?.src?.desktop) {
            const e = "var(--grid-background-repeat, no-repeat)",
              a = "var(--grid-background-position, center)/var(--grid-background-size, cover)";
            f.background = `url(${m?.src?.desktop}) ${e} ${a}`
          }
          return (0, d.jsx)("div", {
            className: (0, Ie.classList)("rockstargames-componentsc66ba86806f14d412203f27b13204c61", o ? "rockstargames-componentsda2f0f78b942fbdc0b92617629d4d499" : "", l),
            "data-game": "community" === r ? null : s,
            style: (0, $.safeStyles)(f),
            "data-context": t,
            "data-template": r,
            "data-theme": i,
            children: a
          })
        },
        Me = e => {
          let {
            caption: a,
            children: t,
            ...s
          } = e;
          return a ? (0, d.jsxs)("figure", {
            ...s,
            children: [t, (0, d.jsx)("figcaption", {
              dangerouslySetInnerHTML: {
                __html: a
              }
            })]
          }) : t
        },
        Le = e => {
          let {
            componentTitle: a,
            type: t,
            items: s
          } = e;
          return s?.length ? (0, d.jsx)("div", {
            className: "rockstargames-componentse1282836fd9646f998af6d71740d8973",
            type: t,
            children: (0, d.jsxs)(Te, {
              children: [a && (0, d.jsx)("h3", {
                children: a
              }), (0, d.jsx)(Te, {
                className: "rockstargames-componentsb2a9e47e4cfa6fb773f4367d3fdfdffb",
                children: s.map(((e, a) => {
                  return e?.embed ? (0, d.jsx)(Me, {
                    caption: e?.caption,
                    children: (0, d.jsx)("div", {
                      className: "rockstargames-componentscf81724e842e41b1c3e15a3ffbc64768",
                      dangerouslySetInnerHTML: {
                        __html: (t = e.embed, t.replace(/&gt;/g, ">").replace(/&lt;/g, "<"))
                      }
                    }, `${e?.key??a}_div`)
                  }, e?.key ?? a) : e?.text ? (0, d.jsx)("p", {
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
      var Ee = t(244);
      const Be = {
          type: "spring",
          stiffness: 650,
          damping: 45
        },
        Pe = {
          ease: "easeOut",
          duration: .9,
          delay: .3
        },
        ze = {
          open: {
            opacity: 0,
            transition: {
              ease: "easeOut",
              duration: .3
            }
          },
          closed: {
            opacity: 1,
            transition: Pe
          }
        },
        Ve = {
          open: {
            opacity: 1,
            display: "grid",
            height: "auto",
            transition: {
              opacity: Pe,
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
              height: Be
            },
            transitionEnd: {
              display: "none"
            }
          }
        },
        $e = {
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
            transition: Be,
            transitionEnd: {
              "--btn-hover-bg-color": "inherit",
              "--btn-hover-bg-color-noBlur": "inherit",
              "--btn-hover-font-color": "inherit",
              "--btn-hover-border-color": "inherit"
            }
          }
        },
        Ae = {
          pillBtn: "rockstargames-componentsc055205bc1170fd5322c3ef4d263d264",
          selected: "rockstargames-componentscad53509a92ffe92a1810a7fa157145d",
          container: "rockstargames-componentsde8401a35718d73ff854bccd1d8919c6",
          content: "rockstargames-componentsd9351ab21d3e266809de4b39a2e6b999",
          unexpandedButton: "rockstargames-componentsb6023ac0e62267cdc9ce43067c47a2fa",
          expandedArea: "rockstargames-componentse120f77721174ec87ede881b14ed0145",
          closeButton: "rockstargames-componentsb4a464eceaec83419375f4f55da05d18",
          platformButtons: "rockstargames-componentsbab608a7f9f59b186d5e5d97a47554c1",
          platformButton: "rockstargames-componentsac1cc1e65791635aeec9f92a4d6afe68",
          xbox: "rockstargames-componentsa830e88f5f86862817dd0453b8946b1b",
          xboxone: "rockstargames-componentsdc6f484dcdc9251ec66e7e91b433fa69",
          xboxseriesxs: "rockstargames-componentsf896bdfd6aca89fea4605146e3ddb280",
          ps4: "rockstargames-componentsa24a87c48aefd424c971235fc09da149",
          ps5: "rockstargames-componentsd48ac9c32e2500ecfe1db1733e0b3fea",
          pc: "rockstargames-componentsf95ce6a4282a1f69245aac2e0892d171",
          switch: "rockstargames-componentsc07ece91333a7bf5b4c417fbd3f8ac9e",
          buttonText: "rockstargames-componentsba10eba33247b3750338627fc88fb9d3"
        },
        De = e => {
          let {
            buttonText: a = "",
            link: s = "",
            platform: n = "",
            target: c = null,
            onClick: r
          } = e;
          const i = c ?? (s.startsWith(document.location.origin) ? "_self" : "_blank"),
            o = [Ae.platformButton, Ae[n]].join(" "),
            m = n ? t(7108)(`./${n}.svg`) : null,
            f = (0, d.jsxs)(d.Fragment, {
              children: [m ? (0, d.jsx)("img", {
                src: m,
                alt: a
              }) : "", !m && (0, d.jsx)("div", {
                className: Ae.buttonText,
                children: a
              })]
            });
          return s.startsWith("http") ? (0, d.jsx)("span", {
            onClick: r,
            onKeyDown: r,
            role: "link",
            tabIndex: 0,
            children: (0, d.jsx)("a", {
              href: s,
              className: o,
              target: i,
              children: f
            })
          }) : (0, d.jsx)(l.NavLink, {
            className: o,
            onClick: r,
            to: s,
            children: f
          })
        },
        Fe = e => {
          let {
            buttonText: a = "Subscribe",
            children: s,
            platformsAndLinks: n = [],
            trackingType: c = "buy",
            trackingParent: r,
            target: i = null
          } = e;
          const [l, m] = (0, o.useState)(!1), {
            track: f
          } = (0, A.useGtmTrack)();
          return (0, d.jsxs)("div", {
            className: Ae.container,
            children: [(0, d.jsx)(Ee.motion.div, {
              className: Ae.content,
              animate: l ? "open" : "close",
              variants: ze,
              children: s
            }), (0, d.jsxs)(Ee.motion.div, {
              onClick: () => {
                m(!l), l || f("select_platform" === c ? {
                  event_action: "select_platform",
                  event_category: "cta",
                  event: "select_platform",
                  event_label: r,
                  text: a?.toLowerCase() ?? "subscribe"
                } : "link_account" === c ? {
                  event: "cta_link_account",
                  event_category: "cta",
                  event_action: "link_account",
                  event_label: r
                } : {
                  event_action: "buy",
                  event_category: "cta",
                  event: "cta_buy",
                  event_label: r,
                  text: a?.toLowerCase() ?? "subscribe"
                })
              },
              className: Ae.unexpandedButton,
              animate: l ? "open" : "closed",
              variants: $e,
              initial: !1,
              children: [(0, d.jsx)(Ee.motion.div, {
                className: Ae.buttonText,
                children: "string" == typeof a ? a : "Subscribe"
              }), (0, d.jsxs)(Ee.motion.div, {
                className: Ae.expandedArea,
                animate: l ? "open" : "closed",
                variants: Ve,
                initial: !1,
                children: [(0, d.jsx)("img", {
                  className: Ae.closeButton,
                  onClick: () => m(!1),
                  onKeyDown: e => {
                    m(!1)
                  },
                  src: t(8704),
                  alt: "Close",
                  role: "button"
                }), (0, d.jsx)("div", {
                  className: Ae.platformButtons,
                  children: n.length ? n.map((e => (0, d.jsx)(De, {
                    buttonText: e.buttonText ?? "",
                    link: e.href,
                    platform: e.platform,
                    onClick: () => (e => {
                      let {
                        href: a,
                        platform: t
                      } = e;
                      f({
                        event_action: "store_link",
                        event_category: "cta",
                        event: "cta_store_link",
                        event_label: "expanding platform button",
                        text: t,
                        link_url: a
                      })
                    })(e),
                    target: i
                  }, `${e.key}-${e.href}-${e.platform}`))) : ""
                })]
              })]
            })]
          })
        },
        Oe = {
          animateBox: "rockstargames-componentsbdeffede001e78dee0b5045fcf215759",
          fadeArea: "rockstargames-componentse60c0d0b8a412ef87a25bcff0601d934",
          visible: "rockstargames-componentsf1026e3be9b17c93264a95314e011e26",
          barGrow: "rockstargames-componentsddce7c10c011f4c8073855dbee51c6db",
          bar: "rockstargames-componentse68b81a34b39281b39ac976917124293",
          animateMe: "rockstargames-componentsb5f3875daeee53716994ff4a15d4513e"
        },
        Re = e => {
          let {
            children: a,
            style: t
          } = e;
          const s = (0, o.useRef)(null);
          return (0, o.useEffect)((() => {
            new IntersectionObserver((e => {
              e.forEach((e => {
                e.isIntersecting && e.target.classList.add([Oe.visible])
              }))
            })).observe(s?.current)
          }), []), (0, d.jsx)("div", {
            style: t,
            className: [Oe.fadeArea].join(" "),
            ref: s,
            children: a
          })
        },
        Ue = {
          img: "rockstargames-componentsd28fb79514f182557a4adcdc0ae3cd4d",
          startAnimation: "rockstargames-componentsce6df99c485041bc3a86c61896052b72"
        },
        Ge = e => {
          let {
            imgSrc: a,
            titleSlug: t
          } = e;
          const [s] = (0, $.usePreloadImg)(a);
          return (0, d.jsx)("div", {
            role: "img",
            "aria-label": t,
            className: [Ue.img, s ? Ue.startAnimation : ""].join(" "),
            style: {
              backgroundImage: `url(${a})`
            }
          })
        },
        He = e => {
          let {
            game: a,
            to: t
          } = e;
          const {
            fob_640: s,
            site_in_rockstar: n = !1,
            title_slug: c
          } = a;
          let r = c;
          "V" === c && (r = "gta-v"), "GTAOnline" === c && (r = "gta-online"), "undeadnightmare" === c && (r = "reddeadredemption");
          const i = t ?? `${n?"":"/games"}/${r}`;
          return (0, d.jsx)(m, {
            "aria-label": a,
            "data-gtm-category": "Games",
            "data-gtm-action": "Game Click-through",
            "data-gtm-label": c,
            "data-testid": `${c}-gamecard`,
            to: i,
            target: "_self",
            className: "rockstargames-componentsead163175b3ecbafda6260fc8bfd88b2",
            children: (0, d.jsx)(Ge, {
              imgSrc: s,
              titleSlug: c
            })
          })
        },
        We = {
          gameSiteHeader: "rockstargames-componentsf27c38ae3aaaa656366568be7a7680ff",
          activeNavItem: "rockstargames-componentsf3ad0db7601d2e52de4a89b2a46fb74f",
          navHidden: "rockstargames-componentsce1c0d4ba324740f8cb3d7794e67b9cf",
          navContent: "rockstargames-componentsaba1d4335897c4bacfa0f4c91770e442",
          headerNavOpen: "rockstargames-componentse37fa9b33a9d84c54144937517c6461c",
          headerLogo: "rockstargames-componentsf7a6ef451ea21d9af97db1d190b2e955",
          bg: "rockstargames-componentsdbcbd0c4304ae2e3ee6126812fb4ee94"
        },
        qe = e => {
          let {
            buttonText: a = null,
            gameOverrideStyles: t,
            navLinks: s,
            cta: n = "",
            game: c
          } = e;
          const [r, i] = (0, o.useState)(!1), l = (0, p.useMutateState)(), {
            navHidden: m
          } = (0, p.useState)();
          return (0, o.useEffect)((() => {
            l({
              gameSiteNavOpen: r
            })
          }), [r]), (0, o.useEffect)((() => {
            const e = () => {
              i(!1)
            };
            return document.addEventListener("click", e), () => document.removeEventListener("click", e)
          }), []), (0, d.jsxs)("header", {
            "data-game": c,
            className: [We.gameSiteHeader, r ? We.headerNavOpen : "", m ? We.navHidden : "", t.gameSiteHeader, r ? t.headerNavOpen : ""].join(" "),
            children: [(0, d.jsx)("button", {
              className: [We.headerLogo, t.headerLogo].join(" "),
              onClick: e => {
                i(!r), e.nativeEvent.stopImmediatePropagation()
              },
              type: "button",
              "aria-label": "Open Game Site Nav",
              dangerouslySetInnerHTML: {
                __html: a
              }
            }), (0, d.jsx)("div", {
              className: We.bg
            }), (0, d.jsx)("nav", {
              children: (0, d.jsx)("div", {
                className: We.navContent,
                children: s
              })
            }), n]
          })
        };
      var Xe = t(1403);
      class Ke extends o.Component {
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
          return this?.state?.error?.message ? (0, d.jsxs)("div", {
            className: "rockstargames-componentsf33a81ed3f256e9c144aa4cda0d1e488",
            children: [(0, d.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, d.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      const Ye = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return function(t) {
            return (0, d.jsx)(Ke, {
              header: a,
              children: (0, d.jsx)(e, {
                ...t
              })
            })
          }
        },
        Qe = e => {
          let {
            prevRef: a,
            nextRef: t,
            onNextClicked: s,
            onPrevClicked: n
          } = e;
          return (0, d.jsxs)("div", {
            className: "rockstargames-componentsa605daa93f1e34f3276364f03e8e4c98",
            children: [(0, d.jsx)("div", {
              className: "rockstargames-componentsacf5c45538091cc0afc02972101e975c",
              ref: a,
              onClick: n,
              "aria-label": "Previous",
              role: "button",
              tabIndex: 0,
              onKeyUp: () => {}
            }), (0, d.jsx)("div", {
              className: "rockstargames-componentsb8b8ba20b8035927c16a363321ecb527",
              ref: t,
              onClick: s,
              "aria-label": "Next",
              role: "button",
              tabIndex: 0,
              onKeyUp: () => {}
            })]
          })
        },
        Ze = Ye((e => {
          let {
            description: a,
            slideChildren: t,
            size: s,
            title: n,
            customSlidesPerView: c = null,
            customSpaceBetween: r = null,
            slideClass: i,
            style: l,
            className: m,
            cardSizeBreakpoints: f = {},
            customAspectRatio: g,
            titleBadge: p
          } = e;
          const {
            track: u
          } = (0, A.useGtmTrack)(), k = (0, o.useRef)(null), _ = (0, o.useRef)(null), b = (0, o.useRef)(null), [v, h] = (0, o.useState)(null), [x, y] = (0, o.useState)(!1), [N, j] = (0, o.useState)(null), [w, C] = (0, o.useState)({}), [I, T] = (0, o.useState)(), {
            ref: M,
            inView: E
          } = (0, R.useInView)({
            threshold: .6
          }), [B, P] = (0, o.useState)(!1), [z, V] = (0, o.useState)(null), [$, D] = (0, o.useState)(!1);
          (0, o.useEffect)((() => {
            const e = () => {
              D(window.innerWidth < 1024)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []);
          const F = {
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
          (0, o.useEffect)((() => {
            if (!k.current) return;
            const e = () => {
              if (k.current) {
                const e = c || Number(window.getComputedStyle(k.current).getPropertyValue("--slides-per-view")),
                  a = c ? 1 : Number(window.getComputedStyle(k.current).getPropertyValue("--slides-per-view-multiplier"));
                j(e * a)
              }
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [k, c]), (0, o.useEffect)((() => {
            if (!t) return;
            let e = !1;
            t.forEach((a => {
              "cover-card" === a?.props?.tina?.payload?.meta?.type && (e = !0, V(a))
            })), P(e);
            const a = t.map(((e, a) => "cover-card" === e?.props?.tina?.payload?.meta?.type && $ ? null : (0, d.jsx)(L.Ky, {
              children: e
            }, Symbol(a).toString())));
            h(a)
          }), [t, $]), (0, o.useEffect)((() => {
            T({
              nextEl: b.current,
              prevEl: _.current
            })
          }), [b, _]), (0, o.useEffect)((() => {
            E && !x && t && (u({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: `deck - ${n}`.toLowerCase(),
              element_placement: `deck - ${n}`.toLowerCase()
            }), y(!0))
          }), [E, t]);
          let O = "custom" === s ? {
            "--custom-aspect-ratio": g,
            ...l
          } : {
            ...l
          };
          return (0, d.jsxs)("div", {
            className: (0, S.classList)("rockstargames-componentsb3a7aaa29b6ef23aac8133f2ae1fd6b7", m),
            "data-size": s,
            "data-sm": f?.sm ? f?.sm : s,
            "data-md": f?.md ? f?.md : s,
            "data-lg": f?.lg ? f?.lg : s,
            "data-xl": f?.xl ? f?.xl : s,
            "data-xxl": f?.xxl ? f?.xxl : s,
            "data-has-covercard": B,
            ref: k,
            style: O,
            children: [(0, d.jsx)("div", {
              className: "rockstargames-componentsf51f54a638399dffff60d4d8428837e4",
              ref: M
            }), B && $ && (0, d.jsx)("div", {
              className: "rockstargames-componentse9c2cc27bdead5c3de23967ff37d0f50",
              children: z
            }), (0, d.jsx)("div", {
              className: "rockstargames-componentscf1e71f0c17c181209e94f5cebc5631c",
              children: (0, d.jsxs)("div", {
                className: "rockstargames-componentse3676128a2d23c0cb6cd8d6c8ead6825",
                children: [(0, d.jsxs)("div", {
                  className: "rockstargames-componentsad882a0c502ecc7fe80626043f44c5c0",
                  children: [!B && n && (0, d.jsxs)("div", {
                    className: "rockstargames-componentsc8b9414a9c96a396ba5183a35491e361",
                    children: [(0, d.jsx)("h2", {
                      children: n
                    }), p && (0, d.jsx)("span", {
                      className: "rockstargames-componentsf6d4ec0614d41da309ced4301a2ae14d",
                      children: p
                    })]
                  }), (0, d.jsx)(Qe, {
                    prevRef: _,
                    nextRef: b,
                    onNextClicked: () => {},
                    onPrevClicked: () => {}
                  })]
                }), a && (0, d.jsx)("div", {
                  className: "rockstargames-componentsb6a2056c096581ee6dfc1a45dae4f0bf",
                  dangerouslySetInnerHTML: {
                    __html: a
                  }
                })]
              })
            }), N ? (0, d.jsx)(L.wx, {
              slidesPerView: N,
              onInit: e => {
                C(e)
              },
              grabCursor: !0,
              navigation: I,
              modules: [Xe._2],
              breakpoints: F,
              slideClass: (0, S.classList)("swiper-slide", i),
              onSlideNextTransitionEnd: () => {
                u({
                  event_action: "next",
                  event_category: "carousel",
                  event: "carousel_next",
                  event_label: n?.toLowerCase() ?? ""
                })
              },
              onSlidePrevTransitionEnd: () => {
                u({
                  event_action: "previous",
                  event_category: "carousel",
                  event: "carousel_previous",
                  event_label: n?.toLowerCase() ?? ""
                })
              },
              onSlideChangeTransitionEnd: () => {
                u({
                  event_action: "swipe",
                  event_category: "carousel",
                  event: "carousel_swipe",
                  event_label: n?.toLowerCase() ?? ""
                })
              },
              children: v
            }) : ""]
          })
        }), null),
        Je = {
          pillBtn: "rockstargames-componentsd1ec80b23805298cd6dea3ea52800ab0",
          selected: "rockstargames-componentsaeb8de253b4b1d02a96a183ccf8c7569",
          hero: "rockstargames-componentsf0de7eca94401887aca97de7659dd11a",
          images: "rockstargames-componentsca3c4bde4a85699dfc8aad6311a416c5",
          background: "rockstargames-componentsac386d519e499a5bccd351707172b4f1",
          gradient: "rockstargames-componentsf78df4c8247178ea2f00fe7d997a709d",
          layered: "rockstargames-componentsc514d3907da929b6f2523873df8c4c70",
          content: "rockstargames-componentsa54ea53ae6af961d54f6de6aac5e0b1f",
          descriptions: "rockstargames-componentsc19584f764f6e3d0cdd59bb2bbc76d92",
          buttonGroup: "rockstargames-componentse75cc404d2f37d009700c196f0650da9",
          legalText: "rockstargames-componentsf54370cd355f9a305f9a6181c957fb1d",
          shardsCarousel: "rockstargames-componentsd741a7d47b43c68d8555f4c0119a57bf"
        },
        ea = {
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
        aa = {
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
        ta = e => {
          let {
            title: a = "",
            mobileImg: t,
            desktopImg: s
          } = e;
          const n = (0, S.useGetCdnSource)(t ?? null),
            c = (0, S.useGetCdnSource)(s ?? n);
          return (0, d.jsx)("div", {
            className: Je.shard,
            style: {
              "--background-image-mobile": `url(${n})`,
              "--background-image-desktop": `url(${c})`
            },
            children: (0, d.jsx)("h5", {
              children: a
            })
          })
        },
        sa = e => {
          let {
            title: a = "Membership Rewards",
            shards: t
          } = e;
          const [s, n] = (0, o.useState)(null);
          return (0, o.useEffect)((() => {
            t && n(t.reduce(((e, a) => {
              if (!a?.shardImg) return e;
              const {
                title: t,
                shardImg: s
              } = a, {
                mobile: n,
                desktop: c
              } = s;
              return e.push((0, d.jsx)(ta, {
                title: t,
                mobileImg: n?.full_src,
                desktopImg: c?.full_src
              })), e
            }), []))
          }), [t]), s ? (0, d.jsx)("div", {
            className: Je.shardsCarousel,
            children: (0, d.jsx)(Ze, {
              title: a,
              slideChildren: s,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        na = e => {
          let {
            animated: a = !1,
            ctas: t = [],
            description: s,
            expandingButtonLabel: n = "Subscribe",
            title: c
          } = e;
          const [r, i] = (0, o.useState)([]), [l, m] = (0, o.useState)([]);
          return (0, o.useEffect)((() => {
            i(t.reduce(((e, a) => a.isInExpandingButton ? (e.push({
              href: a.href,
              platform: a.platform,
              buttonText: a.buttonText
            }), e) : e), [])), m(t.reduce(((e, a) => (a.isInExpandingButton || e.push({
              icon: a.platform ? a.platform : "",
              title: a.buttonText,
              to: a.href
            }), e)), []))
          }), t), t.length ? r.length ? (0, d.jsx)(Ee.motion.div, {
            variants: a ? aa : void 0,
            children: (0, d.jsxs)(Fe, {
              buttonText: n,
              platformsAndLinks: r,
              children: [(0, d.jsxs)(Ee.motion.div, {
                className: Je.descriptions,
                variants: a ? aa : void 0,
                children: [(0, d.jsx)("h2", {
                  dangerouslySetInnerHTML: {
                    __html: c
                  }
                }), (0, d.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: s
                  }
                })]
              }), !!l && !!l.length && (0, d.jsx)(Ee.motion.div, {
                variants: aa,
                children: (0, d.jsx)(M, {
                  buttons: l,
                  className: Je.buttonGroup
                })
              })]
            })
          }) : (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsxs)(Ee.motion.div, {
              className: Je.descriptions,
              variants: a ? aa : void 0,
              children: [(0, d.jsx)("h2", {
                dangerouslySetInnerHTML: {
                  __html: c
                }
              }), (0, d.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: s
                }
              })]
            }), !!l && !!l.length && (0, d.jsx)(Ee.motion.div, {
              variants: aa,
              children: (0, d.jsx)(M, {
                buttons: l,
                className: Je.buttonGroup
              })
            })]
          }) : (0, d.jsxs)(Ee.motion.div, {
            className: Je.descriptions,
            variants: a ? aa : void 0,
            children: [(0, d.jsx)("h2", {
              dangerouslySetInnerHTML: {
                __html: c
              }
            }), (0, d.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: s
              }
            })]
          })
        },
        ca = e => {
          let {
            animated: a = !1,
            brands: t = [],
            ctas: s = [],
            description: n = "",
            expandingButtonLabel: c = "Subscribe",
            title: r = "",
            legalText: i
          } = e;
          return (0, d.jsxs)(Ee.motion.div, {
            className: Je.content,
            initial: "hidden",
            animate: "visible",
            variants: a ? ea : void 0,
            children: [(0, d.jsx)(Ee.motion.div, {
              variants: a ? aa : void 0,
              children: (0, d.jsx)(y, {
                brands: t
              })
            }), (0, d.jsx)(na, {
              animated: a,
              ctas: s,
              description: n,
              expandingButtonLabel: c,
              title: r
            }), i && (0, d.jsx)(Ee.motion.div, {
              className: Je.legalText,
              variants: a ? aa : void 0,
              children: (0, d.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: i
                }
              })
            })]
          })
        },
        ra = e => {
          let {
            animated: a = !1,
            backgroundImage: t,
            brands: s = [],
            className: n,
            ctas: c = [],
            description: r = "",
            expandingButtonLabel: i = "Subscribe",
            layeredImage: o,
            layeredImageSettings: l,
            legalText: m,
            shardsSection: f = {},
            theme: g = "gen9",
            title: p = ""
          } = e;
          const u = (e => {
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
                const [s, n] = e;
                if (t.has(s)) {
                  const e = t.get(s);
                  Object.entries(n).forEach((n => {
                    const [c, r] = n;
                    if (t.has(s) && t.has(c)) {
                      const s = `${t.get(c)}${e}`;
                      a[s] = "imageWidth" !== c ? r ? `${r}px` : "0px" : r ? `${r}vw` : "100vw"
                    }
                  }))
                }
              })), a
            })(l),
            k = (0, S.useGetCdnSource)(t?.mobile?.full_src ?? null),
            _ = (0, S.useGetCdnSource)(t?.desktop?.full_src ?? k),
            b = (0, S.useGetCdnSource)(o?.mobile?.full_src ?? null),
            v = (0, S.useGetCdnSource)(o?.desktop?.full_src ?? b);
          return (0, d.jsxs)(Ee.motion.div, {
            className: (0, S.classList)(Je.hero, n),
            style: {
              "--background-image-desktop": `url(${_})`,
              "--background-image-mobile": `url(${k})`,
              "--layered-image-desktop": `url(${v})`,
              "--layered-image-mobile": `url(${b})`
            },
            initial: "hidden",
            animate: "visible",
            variants: a ? ea : void 0,
            "data-type": "hero",
            theme: g,
            children: [(0, d.jsxs)("div", {
              className: Je.images,
              children: [_ && k ? (0, d.jsx)("div", {
                className: Je.background,
                style: t?.style ?? {}
              }) : "", b && v ? (0, d.jsx)("div", {
                className: Je.layered,
                style: l ? u : {}
              }) : "", (0, d.jsx)("div", {
                className: Je.gradient
              })]
            }), (0, d.jsx)(ca, {
              animated: a,
              ctas: c,
              description: r,
              expandingButtonLabel: i,
              title: p,
              brands: s,
              legalText: m
            }), f?.shards && (0, d.jsx)(sa, {
              ...f
            })]
          })
        };
      var ia = t(3660),
        oa = t.n(ia);
      const la = e => {
        let {
          children: a,
          attributes: t = {},
          className: s = "",
          style: n = {}
        } = e;
        return (0, d.jsx)("span", {
          className: (0, S.classList)(s, t?.className, "rockstargames-componentsf938ddf11a5375276f8e733f5f4e5953"),
          style: (0, $.safeStyles)(n ?? t?.style ?? {}),
          dangerouslySetInnerHTML: {
            __html: oa().unescape(a)
          }
        })
      };
      var da = t(1512),
        ma = t(7019);
      const fa = JSON.parse('{"us":{"plm_nav_scroll_left":"Scroll Left","plm_nav_scroll_right":"Scroll Right","language_selector_default":"Select a Language","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","sc_link_account":"Account","sc_link_activity_feed":"Activity Feed","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell My Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_messages":"Messages","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Toggle Social Club Menu","components_track_list_title":"Tracklist"},"de":{"language_selector_default":"Eine Sprache auswählen","profile_selector_mugshot":"{userName} Verbrecherfoto","profile_selector_profile_card":"Profildaten","profile_selector_rp_icon":"RP-Kategorie","profile_selector_switch_character":"Charakter wechseln","sc_link_account":"Konto","sc_link_activity_feed":"Aktivitäten-Feed","sc_link_cookies_policy":"Cookie-Richtlinie","sc_link_cookies_settings":"Cookie-Einstellungen","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Meine Informationen nicht verkaufen","sc_link_find_friends":"Freunde finden","sc_link_friends":"Freunde","sc_link_game_activation":"Spielaktivierung","sc_link_help":"Hilfe","sc_link_import_friends":"Freunde importieren","sc_link_join_social_club":"Registrieren","sc_link_legal":"Rechtliches","sc_link_log_out":"Abmelden","sc_link_messages":"Nachrichten","sc_link_my_friends":"Meine Freunde","sc_link_notifications":"Benachrichtigungen","sc_link_privacy_policy":"Datenschutzrichtlinien","sc_link_settings":"Einstellungen","sc_link_sign_in":"Anmelden","sc_link_support":"Support","sc_link_view_my_profile":"Mein Profil ansehen","sc_menu_drag_handle":"Menü öffnen bzw. schließen","sc_menu_toggle":"Social-Club-Menü öffnen bzw. schließen","components_track_list_title":"Trackliste"},"es":{"language_selector_default":"Selecciona un idioma","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta de perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Ajustes de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendáis mis datos","sc_link_find_friends":"Buscar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación del juego","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registrarse","sc_link_legal":"Aviso legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Ajustes","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Asistencia técnica","sc_link_view_my_profile":"Ver mi perfil","sc_menu_drag_handle":"Arrastrar el controlador del menú","sc_menu_toggle":"Cambiar el menú del Social Club","components_track_list_title":"Lista de pistas"},"mx":{"language_selector_default":"Selecciona un idioma","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta del perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Muro de actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configuración de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendan mis datos","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación de juegos","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registrarse","sc_link_legal":"Legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Configuración","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Soporte","sc_link_view_my_profile":"Ver mi perfil","sc_menu_drag_handle":"Mover el handle del menú","sc_menu_toggle":"Cambiar menú del Social Club","components_track_list_title":"Lista de canciones"},"fr":{"language_selector_default":"Sélectionner une langue","profile_selector_mugshot":"Photo d\'identité : {userName}","profile_selector_profile_card":"Carte du profil","profile_selector_rp_icon":"Catégorie de RP","profile_selector_switch_character":"Changer de personnage","sc_link_account":"Compte","sc_link_activity_feed":"Fil d\'activités","sc_link_cookies_policy":"Politique en matière de cookies","sc_link_cookies_settings":"Paramètres des cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Ne pas vendre mes informations","sc_link_find_friends":"Trouver des amis","sc_link_friends":"Amis","sc_link_game_activation":"Activation de jeux","sc_link_help":"Aide","sc_link_import_friends":"Importer des amis","sc_link_join_social_club":"S’inscrire","sc_link_legal":"Mentions légales","sc_link_log_out":"Se déconnecter","sc_link_messages":"Messages","sc_link_my_friends":"Mes amis","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Charte de confidentialité","sc_link_settings":"Paramètres","sc_link_sign_in":"Se connecter","sc_link_support":"Assistance","sc_link_view_my_profile":"Voir mon profil","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Menu du Social Club avec/sans","components_track_list_title":"Liste des morceaux"},"it":{"language_selector_default":"Seleziona una lingua","profile_selector_mugshot":"Foto segnaletica di {userName}","profile_selector_profile_card":"Scheda del profilo","profile_selector_rp_icon":"Categoria RP","profile_selector_switch_character":"Cambia personaggio","sc_link_account":"Account","sc_link_activity_feed":"Attività dei feed","sc_link_cookies_policy":"Politica sui cookie","sc_link_cookies_settings":"Impostazioni dei cookie","sc_link_crews":"Crew","sc_link_do_not_sell_my_information":"Non vendere le mie informazioni","sc_link_find_friends":"Trova amici","sc_link_friends":"Amici","sc_link_game_activation":"Attivazione gioco","sc_link_help":"Assistenza","sc_link_import_friends":"Importa amici","sc_link_join_social_club":"Registrati","sc_link_legal":"Note legali","sc_link_log_out":"Esci","sc_link_messages":"Messaggi","sc_link_my_friends":"I miei amici","sc_link_notifications":"Notifiche","sc_link_privacy_policy":"Politica sulla privacy","sc_link_settings":"Impostazioni","sc_link_sign_in":"Accedi","sc_link_support":"Supporto","sc_link_view_my_profile":"Visualizza il mio profilo","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Apri/chiudi il menu del Social Club","components_track_list_title":"Tracklist"},"jp":{"language_selector_default":"言語を選択","profile_selector_mugshot":"{ユーザーネーム}顔写真","profile_selector_profile_card":"プロフィールカード","profile_selector_rp_icon":"RPカテゴリー","profile_selector_switch_character":"キャラクター変更","sc_link_account":"アカウント","sc_link_activity_feed":"アクティビティフィード","sc_link_cookies_policy":"クッキーポリシー","sc_link_cookies_settings":"クッキー設定","sc_link_crews":"クルー","sc_link_do_not_sell_my_information":"個人情報を売らないでください","sc_link_find_friends":"フレンドを検索","sc_link_friends":"フレンド","sc_link_game_activation":"ゲームアクティベーション","sc_link_help":"ヘルプ","sc_link_import_friends":"フレンドをインポート","sc_link_join_social_club":"サインアップ","sc_link_legal":"利用規約","sc_link_log_out":"ログアウト","sc_link_messages":"メッセージ","sc_link_my_friends":"フレンド","sc_link_notifications":"通知","sc_link_privacy_policy":"プライバシーポリシー","sc_link_settings":"設定","sc_link_sign_in":"サインイン","sc_link_support":"サポート","sc_link_view_my_profile":"プロフィールを表示","sc_menu_drag_handle":"ドラッグメニューハンドル","sc_menu_toggle":"Social Clubメニューを切り替え","components_track_list_title":"トラックリスト"},"kr":{"language_selector_default":"언어 선택","profile_selector_mugshot":"{userName} 머그샷","profile_selector_profile_card":"프로필 카드","profile_selector_rp_icon":"RP 카테고리","profile_selector_switch_character":"캐릭터 교체","sc_link_account":"계정","sc_link_activity_feed":"활동 피드","sc_link_cookies_policy":"쿠키 정책","sc_link_cookies_settings":"쿠키 설정","sc_link_crews":"조직","sc_link_do_not_sell_my_information":"내 정보 판매 안 함","sc_link_find_friends":"친구 찾기","sc_link_friends":"친구","sc_link_game_activation":"게임 활성화","sc_link_help":"도움말","sc_link_import_friends":"친구 불러오기","sc_link_join_social_club":"가입","sc_link_legal":"법률 관련","sc_link_log_out":"로그아웃","sc_link_messages":"메시지","sc_link_my_friends":"내 친구","sc_link_notifications":"알림","sc_link_privacy_policy":"개인 정보 보호 정책","sc_link_settings":"설정","sc_link_sign_in":"로그인","sc_link_support":"지원","sc_link_view_my_profile":"내 프로필 보기","sc_menu_drag_handle":"드래그 메뉴 핸들","sc_menu_toggle":"Social Club 메뉴 켜기/끄기","components_track_list_title":"트랙리스트"},"pl":{"language_selector_default":"Wybierz język","profile_selector_mugshot":"Zdjęcie – {userName}","profile_selector_profile_card":"Karta profilu","profile_selector_rp_icon":"Poziom RP","profile_selector_switch_character":"Zmień postać","sc_link_account":"Konto","sc_link_activity_feed":"Zajęcia","sc_link_cookies_policy":"Polityka plików cookie","sc_link_cookies_settings":"Ustawienia plików cookie","sc_link_crews":"Ekipy","sc_link_do_not_sell_my_information":"Zabraniam sprzedaży moich danych","sc_link_find_friends":"Szukaj znajomych","sc_link_friends":"Znajomi","sc_link_game_activation":"Aktywacja gry","sc_link_help":"Pomoc","sc_link_import_friends":"Importuj znajomych","sc_link_join_social_club":"Zarejestruj się","sc_link_legal":"Informacje prawne","sc_link_log_out":"Wyloguj się","sc_link_messages":"Wiadomości","sc_link_my_friends":"Moi znajomi","sc_link_notifications":"Powiadomienia","sc_link_privacy_policy":"Polityka prywatności","sc_link_settings":"Ustawienia","sc_link_sign_in":"Zaloguj się","sc_link_support":"Wsparcie","sc_link_view_my_profile":"Przeglądaj profil","sc_menu_drag_handle":"Przeciągnij uchwyt menu","sc_menu_toggle":"Włącz lub wyłącz menu Social Club","components_track_list_title":"Lista utworów"},"br":{"language_selector_default":"Selecione um idioma","profile_selector_mugshot":"foto de {userName}","profile_selector_profile_card":"Cartão de perfil","profile_selector_rp_icon":"Categoria de RP","profile_selector_switch_character":"Alternar personagem","sc_link_account":"Conta","sc_link_activity_feed":"Feed de Atividade","sc_link_cookies_policy":"Política de Cookies","sc_link_cookies_settings":"Configurações de Cookies","sc_link_crews":"Comandos","sc_link_do_not_sell_my_information":"Não vendam a minha informação","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Ativação de jogos","sc_link_help":"Ajuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Inscrever-se","sc_link_legal":"Aviso legal","sc_link_log_out":"Sair","sc_link_messages":"Mensagens","sc_link_my_friends":"Meus amigos","sc_link_notifications":"Notificações","sc_link_privacy_policy":"Política de Privacidade","sc_link_settings":"Configurações","sc_link_sign_in":"Iniciar sessão","sc_link_support":"Suporte","sc_link_view_my_profile":"Visualizar meu perfil","sc_menu_drag_handle":"Arrastar título do menu","sc_menu_toggle":"Alternar menu do Social Club","components_track_list_title":"Lista de faixas"},"ru":{"language_selector_default":"Выбрать язык","profile_selector_mugshot":"Фотография игрока {userName}","profile_selector_profile_card":"Карта профиля","profile_selector_rp_icon":"Категория опыта","profile_selector_switch_character":"Сменить персонажа","sc_link_account":"Учетная запись","sc_link_activity_feed":"Лента событий","sc_link_cookies_policy":"Политика использования файлов Cookie","sc_link_cookies_settings":"Настройки файлов Cookie","sc_link_crews":"Банды","sc_link_do_not_sell_my_information":"Я запрещаю продавать свою личную информацию","sc_link_find_friends":"Поиск друзей","sc_link_friends":"Друзья","sc_link_game_activation":"Активация игры","sc_link_help":"Помощь","sc_link_import_friends":"Импорт друзей","sc_link_join_social_club":"Регистрация","sc_link_legal":"Юридическая информация","sc_link_log_out":"Выход","sc_link_messages":"Сообщения","sc_link_my_friends":"Мои друзья","sc_link_notifications":"Уведомления","sc_link_privacy_policy":"Политика конфиденциальности","sc_link_settings":"Настройки","sc_link_sign_in":"Войти","sc_link_support":"Поддержка","sc_link_view_my_profile":"Моя учетная запись","sc_menu_drag_handle":"Перенести маркер меню","sc_menu_toggle":"Переключить меню Social Club","components_track_list_title":"Список песен"},"hans":{"language_selector_default":"选择一种语言","profile_selector_mugshot":"{userName} 面部照片","profile_selector_profile_card":"档案卡","profile_selector_rp_icon":"声望值类别","profile_selector_switch_character":"切换角色","sc_link_account":"账户","sc_link_activity_feed":"活动动态","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 设置","sc_link_crews":"帮会","sc_link_do_not_sell_my_information":"请勿出售我的信息","sc_link_find_friends":"查找好友","sc_link_friends":"好友","sc_link_game_activation":"游戏激活","sc_link_help":"帮助","sc_link_import_friends":"导入好友","sc_link_join_social_club":"注册","sc_link_legal":"法律声明","sc_link_log_out":"登出","sc_link_messages":"信息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隐私政策","sc_link_settings":"设置","sc_link_sign_in":"登录","sc_link_support":"支持","sc_link_view_my_profile":"查看我的档案","sc_menu_drag_handle":"拖动菜单处理","sc_menu_toggle":"切换 Social Club 菜单","components_track_list_title":"曲目列表"},"tw":{"language_selector_default":"選擇語言","profile_selector_mugshot":"{userName} 罪犯檔案照","profile_selector_profile_card":"資料卡","profile_selector_rp_icon":"聲望值類別","profile_selector_switch_character":"切換角色","sc_link_account":"帳戶","sc_link_activity_feed":"動態活動","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 設定","sc_link_crews":"幫會","sc_link_do_not_sell_my_information":"不要販售我的資料","sc_link_find_friends":"尋找好友","sc_link_friends":"好友","sc_link_game_activation":"遊戲啟用","sc_link_help":"幫助","sc_link_import_friends":"匯入好友","sc_link_join_social_club":"註冊","sc_link_legal":"法律聲明","sc_link_log_out":"登出","sc_link_messages":"訊息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隱私權政策","sc_link_settings":"設定","sc_link_sign_in":"登入","sc_link_support":"支援","sc_link_view_my_profile":"查看我的設定檔","sc_menu_drag_handle":"拖曳選單控點","sc_menu_toggle":"開關 Social Club 選單","components_track_list_title":"曲目清單"}}'),
        ga = (0, da.defineMessages)({
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          }
        }),
        pa = {
          pillBtn: "rockstargames-componentsc3eedd19b41386f91c6c9cefe0c905dc",
          selected: "rockstargames-componentsf0d7cbc2a38824357df1905e8857d388",
          scMenuStyles: "rockstargames-componentsd926e6b28cbf4824e5866f8622a7260e",
          languageSelector: "rockstargames-componentse14a60fb74372ed5ce3dab2037b0b53a",
          open: "rockstargames-componentsa5aa43385996d6dee58075ebac8ef59a",
          linkWrapper: "rockstargames-componentse03ae6cf883527264e799193b3502bf5",
          links: "rockstargames-componentse2256380df99b043f9726312862fb1a8",
          selectBoxWrapper: "rockstargames-componentsd73566739e5f1642cf8bc1495e0420d1",
          selectBox: "rockstargames-componentsdaa6ec79d09781fc643d4325314c542f",
          selectBoxOption: "rockstargames-componentsf5f53de5f32822c4b48314addb0839f4"
        },
        ua = (0, da.withIntl)((e => {
          let {
            theme: a,
            languageSelectorOpened: t,
            setLanguageSelectorOpened: s
          } = e;
          const n = (0, l.useLocation)(),
            c = (0, da.useIntl)(),
            [r, i] = (0, da.getLocale)(),
            [f, g] = (0, o.useState)(!1),
            p = (0, o.useMemo)((() => (0, ma.c)()), []),
            u = (0, o.useCallback)((e => {
              let a = n.pathname;
              const t = a.split("/");
              return da.locales.map((e => e.subdomaincom)).includes(t[0]) && (a = t.slice(1).join("/")), p.currentSite?.site === ma.U.www ? "en" === e ? `${window.location.origin}${a}${n.search}` : `${window.location.origin}/${e}${a}${n.search}` : `${window.location.origin}${a}${n.search}`
            }), [n]),
            k = (0, o.useRef)(null),
            [_, b] = (0, o.useState)(0),
            v = matchMedia("(hover: none) and (pointer: coarse)").matches,
            h = e => {
              if (s && s(!1), r.subdomaincom === e || "none" === e) return void(s && s(!1));
              const a = da.locales.find((a => a.subdomaincom === e));
              a && (i(a.iso), window.location.href = u(e))
            };
          return (0, o.useEffect)((() => {
            void 0 !== t && !1 === t && !0 === f && g(!1)
          }), [t]), (0, o.useEffect)((() => {
            k.current && b(k.current.scrollHeight)
          }), [k]), (0, d.jsxs)("div", {
            className: [pa.languageSelector, f ? pa.open : ""].join(" "),
            "data-theme": a,
            children: [v && "sc-menu" === a && (0, d.jsx)("div", {
              className: pa.selectBoxWrapper,
              children: (0, d.jsxs)("select", {
                className: pa.selectBox,
                onClick: e => e.stopPropagation(),
                onChange: e => {
                  h(e.currentTarget.value)
                },
                children: [(0, d.jsx)("option", {
                  className: pa.selectBoxOption,
                  value: "none",
                  children: (0, d.jsx)(da.FormattedMessage, {
                    ...ga.language_selector_default
                  })
                }), da.locales.map((e => {
                  let {
                    label: a,
                    subdomaincom: t
                  } = e;
                  return (0, d.jsx)("option", {
                    className: pa.selectBoxOption,
                    value: t,
                    children: a
                  }, `mobile-${t}`)
                }))]
              })
            }), (!v || "sc-menu" !== a) && (0, d.jsxs)(d.Fragment, {
              children: [(0, d.jsxs)("button", {
                onClick: e => {
                  e.stopPropagation(), s && s(!f), g(!f)
                },
                type: "button",
                "aria-label": c.formatMessage(ga.language_selector_default),
                children: [(0, d.jsx)("i", {}), (0, d.jsx)("span", {
                  children: (0, d.jsx)(da.FormattedMessage, {
                    ...ga.language_selector_default
                  })
                })]
              }), (0, d.jsx)("div", {
                className: pa.linkWrapper,
                ref: k,
                style: {
                  "--ls-linkWrapper-opened-height": `${_}px`
                },
                children: (0, d.jsx)("div", {
                  className: pa.links,
                  children: da.locales.map((e => {
                    let {
                      subdomaincom: a,
                      label: t
                    } = e;
                    return (0, d.jsx)(m, {
                      to: u(a),
                      onClick: () => {
                        h(a)
                      },
                      tabIndex: f ? 0 : -1,
                      children: t
                    }, `desktop-${a}`)
                  }))
                })
              })]
            })]
          })
        }), fa),
        ka = {
          layeredImage: "rockstargames-componentsf1a2f28c7d1ed62492810fb403c40b2c",
          layersWrapper: "rockstargames-componentsf8441f69ffcfe4080ee2b4e9fec249e1",
          "hero-lg": "rockstargames-componentsc20b598f678033b9f78e02cb505cd8a0",
          "hero-md": "rockstargames-componentsbdecfb55bbcca10fa4bc39946db1c5e0",
          "hero-sm": "rockstargames-componentsaaecec6955804ea3236bd6870fcba81d",
          contain: "rockstargames-componentsdbb57417cabb3d4d696f9605db80f551",
          cover: "rockstargames-componentsb6181cbd147b847d7261203a0caa052d",
          fill: "rockstargames-componentsa691c9cbb656107474671c843da184cc",
          "bg-img": "rockstargames-componentsb637b5dea926842ef4d8f73217b3c805",
          imageLayer: "rockstargames-componentse698c4743829f0046cb78db99893bbb6",
          "layer-lg-height": "rockstargames-componentsf398cc86cf0545291347ca89e328edbc",
          "layer-md-height": "rockstargames-componentsee664c2709836602ac8d9f80a12bbf51",
          "layer-sm-height": "rockstargames-componentscfc19f0b13c528bd5fc5ac4ca741acbb",
          "layer-xl-height": "rockstargames-componentsa87f3e95dabf9d322a52b7bb3b556ce7",
          "layer-xs-height": "rockstargames-componentsa8f7a0d9a49b9614b16cac35450f20dc",
          "layer-xxl-height": "rockstargames-componentsb3251e090234e14b52dde957b592e710",
          "layer-lg-width": "rockstargames-componentsf8b68ab66ee77b593fd5f5200f181567",
          "layer-md-width": "rockstargames-componentsb373e9b72872ab56617b5ecdeae77457",
          "layer-sm-width": "rockstargames-componentsa67488f5949aeb4c4d25a13db3f853f3",
          "layer-xl-width": "rockstargames-componentsdfec4546f88956f53ed8e525c8ff4c44",
          "layer-xs-width": "rockstargames-componentsf07390e543f3feed6e74c3863c96bc4c",
          "layer-xxl-width": "rockstargames-componentse89889a738ba343b9cb995282cfcb817",
          "bottom-y": "rockstargames-componentsae9dac0371fe66328ddf63f55399d440",
          "center-x": "rockstargames-componentsad93bb1e940a008a59f8579894211169",
          "center-y": "rockstargames-componentsace12d4759c13f74cbc2de34dedb8f10",
          "left-x": "rockstargames-componentsf57b960202d1d0fce3493afd86c7d16d",
          "right-x": "rockstargames-componentscfa0077df09340c70e8a6d1d8af3707e",
          "top-y": "rockstargames-componentsaeff549a621f9f2f42b7ba8510a22756",
          border: "rockstargames-componentsf789bb6af62037f42bf1bde186fa253a",
          shards: "rockstargames-componentsec96a34782c8dae690e77d40cfc1383c",
          shards_three: "rockstargames-componentsd5b8c68bf3800e89f503e52f1e19ad37",
          shards_two: "rockstargames-componentsa517489d376abdec0ed96460ccc81ad9",
          dual: "rockstargames-componentsbb6e0f8ba4660e96b3712faf6c54aa89"
        },
        _a = e => {
          let {
            style: a,
            className: t
          } = e;
          const s = {
              ...a
            },
            n = a["--border-image-source"];
          return n && (s["--border-image-source"] = `url(${(0,S.useGetCdnSource)(n)})`), (0, d.jsx)("div", {
            className: (0, S.classList)(ka.border, t),
            style: {
              ...s
            }
          })
        },
        ba = e => e?.images ? (0, d.jsx)("div", {
          className: (0, S.classList)(ka.layeredImage, ka[e?.variantClass], ka[e?.wrapperSizeClass]),
          style: {
            ...e?.style ?? {}
          },
          children: (0, d.jsxs)("div", {
            className: ka.layersWrapper,
            children: [e?.images?.map(((e, a) => {
              const {
                image: t,
                paddingClass: s,
                imageSizeClass: n,
                objectFitClass: c,
                positionClassX: r,
                positionClassY: i,
                zIndex: o,
                className: l,
                style: m,
                alt: f,
                displayClass: g
              } = e;
              return (0, d.jsx)(fe, {
                image: t,
                style: {
                  zIndex: o ?? ++a
                },
                imageStyle: m,
                className: (0, S.classList)(l, g, ka.imageLayer, ka[s], ka[n], ka[c], ka[r], ka[i]),
                alt: f
              }, o ?? ++a)
            })), e?.borderImage && (0, d.jsx)(_a, {
              style: e?.borderImage,
              className: e?.borderImage?.displayClass
            })]
          })
        }) : null,
        va = e => {
          let {
            hero: a,
            children: t
          } = e;
          return a ? (0, d.jsx)("div", {
            className: "rockstargames-componentsaf5742f5a161e16cb38c8bd614a7fdbf",
            children: t
          }) : t
        },
        ha = e => {
          let {
            badge: a = null,
            badgeType: t,
            discountTxt: s,
            splitter: n,
            image: c,
            style: r,
            className: i = "",
            attributes: o = {},
            role: l,
            hero: m = !1
          } = e;
          return (0, d.jsx)(va, {
            hero: m,
            children: (0, d.jsx)("figure", {
              children: (0, d.jsxs)("div", {
                className: (0, S.classList)("rockstargames-componentsab10d5a913595e2fbbe0612d75f320b8", m ? "rockstargames-componentsb8558839bcd23d06fc3453876f54199b" : "", o?.hiddenMobile ? "hiddenMobile" : "", o?.hiddenLarge ? "hiddenLarge" : "", o?.className, i),
                style: (0, $.safeStyles)({
                  ...r,
                  ...o?.style
                }),
                ...o,
                children: [(0, d.jsx)(fe, {
                  image: c,
                  className: i
                }), (c?.badge || c?.discountTxt || a || s) && (0, d.jsx)(Ne, {
                  badge: c?.discountTxt ?? c?.badge ?? a ?? s,
                  badgeType: t,
                  splitter: c?.splitter ?? n,
                  role: c?.role ?? l
                }), c?.caption && (0, d.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: c.caption
                  }
                })]
              })
            })
          })
        },
        xa = {
          pillBtn: "rockstargames-componentsf3abdb49ce66d99433761085f67775f8",
          selected: "rockstargames-componentsb6fea482554f2f426fb45d39ae6064cd",
          multiSourceContainer: "rockstargames-componentse381fc56c6aa2467c3da35e4707e738d",
          multiSourceImage: "rockstargames-componentsf49fdfd7fb9f5fac000a0d3e8a454278",
          animatePlaceholder: "rockstargames-componentsee3004f447a07ee4350e4c7f66988279",
          "loader-keyframes": "rockstargames-componentsceffe0f096f9f99f1d2c31063115c45d"
        },
        ya = e => {
          let {
            imageUrl: a,
            className: t,
            alt: s,
            style: n,
            lazy: c = !1,
            decoding: r = "auto",
            sizes: i = [320, 480, 768, 1024, 1440, 1920, 2560]
          } = e;
          const [l, m] = (0, o.useState)(!1);
          return (0, d.jsxs)("div", {
            className: xa.multiSourceContainer,
            children: [!l && (0, d.jsx)("img", {
              className: [t, xa.animatePlaceholder].join(" "),
              src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjMzMzMzMzIi8+Cjwvc3ZnPgo=",
              sizes: "(max-width: 1024px) 100vw, 1024px",
              alt: "Loading...",
              style: n
            }), (0, d.jsx)("img", {
              className: [xa.multiSourceImage, t].join(" "),
              src: `${a}?im=Resize=1920`,
              srcSet: (f = a, i.map((e => `${f}?im=Resize=${e} ${e}w`)).join(", ")),
              sizes: "(max-width: 400px) 200px, (max-width: 1920px) 100vw, 1920px",
              alt: s ?? "Multi-Source Image",
              style: n,
              onLoad: () => {
                m(!0)
              },
              loading: c ? "lazy" : "eager",
              decoding: r
            })]
          });
          var f
        },
        Na = {
          tag: "rockstargames-componentsc1e678bcb5a1e1a1be6114282f264928"
        },
        ja = e => {
          let {
            className: a,
            href: t,
            title: s,
            style: n
          } = e;
          const c = (0, d.jsxs)("div", {
            style: n,
            className: [Na.tag, a].join(" "),
            children: [(0, d.jsx)("i", {}), s]
          });
          return void 0 !== t ? (0, d.jsx)(m, {
            to: t,
            children: c
          }) : c
        },
        Sa = {
          newswireBlock: "rockstargames-componentsab12ad38cf58ad5fbb7ddff2a9e1889d",
          info: "rockstargames-componentsf54c31159d25a80251ae553245d153a3",
          title: "rockstargames-componentsc5b842792dd570d6a4fc662a012371c7",
          newswireBlockNoSpecialOrder: "rockstargames-componentsca540bd10286c6f9404244af6d161675",
          preview: "rockstargames-componentsf48d94f9b625ce1459b45e9a85bc0ccc",
          previewMobile: "rockstargames-componentsfeae4bb6be2ac66aaba0c691b1da5b70",
          top: "rockstargames-componentse273dbd6f05af08d429fbf75c4f27f83",
          startAnimation: "rockstargames-componentsdc02b8411cb8c96f531faaed38022cc3"
        },
        wa = e => {
          let {
            index: a,
            post: t,
            noSpecialOrder: s = !1,
            style: n = {}
          } = e;
          const [c] = (0, l.useSearchParams)(), r = t.preview_images_parsed.newswire_block, i = {
            default: 0 !== a || s ? r.square || r.d16x9 || r._fallback : r.d16x9 || r.square || r._fallback,
            mobile: r.square || r._fallback
          }, [o, f] = (0, $.usePreloadImg)(i.default), [g, p] = (0, $.usePreloadImg)(i.mobile), u = {
            default: {
              backgroundImage: `url(${i.default})`
            },
            mobile: {
              backgroundImage: `url(${i.mobile})`
            }
          };
          return (0, d.jsx)(m, {
            "data-gtm-category": "Newswire",
            "data-gtm-action": "Article Block Click",
            "data-gtm-label": `${t.title}`,
            to: t.url,
            className: [Sa.newswireBlock, s ? Sa.newswireBlockNoSpecialOrder : "", null !== o ? Sa.startAnimation : ""].join(" "),
            children: (0, d.jsxs)(d.Fragment, {
              children: [0 !== a || c.get("tag_id") ? (0, d.jsx)("div", {
                className: Sa.preview,
                style: u.default
              }) : (0, d.jsxs)(d.Fragment, {
                children: [(0, d.jsx)("div", {
                  className: Sa.previewMobile,
                  style: u.mobile
                }), (0, d.jsx)("div", {
                  className: Sa.preview,
                  style: u.default
                })]
              }), (0, d.jsxs)("div", {
                className: Sa.info,
                children: [(0, d.jsxs)("div", {
                  className: Sa.top,
                  children: [t.primary_tags.length ? (0, d.jsx)(ja, {
                    title: t.primary_tags[t.primary_tags.length > 1 && 722 === t.primary_tags[0].id ? 1 : 0].name
                  }) : "", (0, d.jsx)("time", {
                    dateTime: t.created,
                    children: t.created_formatted
                  })]
                }), (0, d.jsx)("h5", {
                  className: Sa.title,
                  dangerouslySetInnerHTML: {
                    __html: t.title
                  }
                })]
              })]
            })
          })
        };
      var Ca = t(1568),
        Ia = t.n(Ca);
      const Ta = (0, $.withTranslations)((e => {
          let {
            relativeTo: a = "",
            tagId: t = null,
            metaUrl: s = "/newswire",
            t: n
          } = e;
          const [c] = (0, l.useSearchParams)(), {
            tagId: r = null
          } = (0, l.useParams)(), [i, m] = (0, o.useState)(r ?? t ?? c.get("tag_id")), [f, g] = (0, o.useState)(1), [u, k] = (0, o.useState)([]), [_, b] = (0, o.useState)(null), {
            data: v
          } = (0, p.useQuery)(Ia(), {
            variables: {
              tagId: Number(i),
              page: f,
              metaUrl: s
            },
            autoSetLoading: !0
          });
          return (0, o.useEffect)((() => {
            g(1), k([]), m(r ?? t ?? c.get("tag_id"))
          }), [c.get("tag_id")]), (0, o.useEffect)((() => {
            v && v.posts && v.posts.paging && b(v.posts.paging), v && v.posts && v.posts.results && k(u.concat(v.posts.results))
          }), [v]), u.length ? (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsx)(Ba, {
              posts: u,
              relativeTo: a,
              noSpecialOrder: null !== i
            }), null !== _ && _.nextPage ? (0, d.jsx)(j, {
              onClick: () => g(f + 1),
              disabled: !1,
              context: "secondary",
              children: n("More Stories")
            }) : ""]
          }) : null
        })),
        Ma = {
          pillBtn: "rockstargames-componentsef3f3a4d41d143d21c105fb44722df5e",
          selected: "rockstargames-componentsd2fea69a448125df4778b3d0be51ee42",
          related: "rockstargames-componentse992dd17114710edcb26fbc8dc8e666d",
          posts: "rockstargames-componentsa49f6938e087663b1ac0fd1b93456487",
          just1post: "rockstargames-componentsb5303ef0b966b9d4d4486db944b9b78c"
        },
        La = (0, $.withTranslations)((e => {
          let {
            posts: a,
            t
          } = e;
          return (0, d.jsxs)("section", {
            className: Ma.related,
            children: [(0, d.jsx)("h2", {
              children: t("Related Stories")
            }), (0, d.jsx)("div", {
              className: [Ma.posts, 1 === a.length ? Ma.just1post : ""].join(" "),
              children: a.map((e => (0, d.jsx)(wa, {
                noSpecialOrder: !0,
                post: e
              }, e.id)))
            })]
          })
        })),
        Ea = {
          newswireBlocks: "rockstargames-componentsb787e2cc67a938470008b0fa3c5e57f8",
          noSpecialOrder: "rockstargames-componentse3641b4f2f8f6fa67e5d06eba31981e1"
        },
        Ba = (0, $.withGtmTracking)((e => {
          let {
            noSpecialOrder: a = !1,
            posts: t,
            gtmTrack: s,
            relativeTo: n
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
          }), [t.length]), (0, d.jsx)("div", {
            className: [Ea.newswireBlocks, a ? Ea.noSpecialOrder : "", Ea.contextHome].join(" "),
            children: t.map(((e, t) => (0, d.jsx)(wa, {
              index: t,
              noSpecialOrder: a,
              post: e
            }, e.id)))
          })
        }));
      var Pa = t(7020);
      const za = (e, a) => {
          const t = e.tiers && e.tiers.every((e => e.isComplete)),
            s = a.tiers && a.tiers.every((e => e.isComplete));
          return t && !s ? 1 : !t && s ? -1 : 0
        },
        Va = {
          pillBtn: "rockstargames-componentsda5b324a1bdb278c5223494ac5e55116",
          selected: "rockstargames-componentsbafb2b328fccf616c23307e0c55ef7c1",
          packCardTierIndicator: "rockstargames-componentsb19430706db5edf335ff477729b898d2",
          tierIndicator: "rockstargames-componentsf9c45c98b4d46bcf6b80feaf146ca442",
          active: "rockstargames-componentsf47d34c700f6df8c849fd75cab9d0efe"
        },
        $a = e => {
          let {
            tiers: a
          } = e;
          return (0, d.jsx)("div", {
            className: Va.packCardTierIndicator,
            children: a?.map(((e, a) => (0, d.jsx)("div", {
              className: [Va.tierIndicator, e.isComplete ? Va.active : ""].join(" ")
            }, a)))
          })
        },
        Aa = {
          pillBtn: "rockstargames-componentsd98a01c6935883fe6a0eb343c1b7191c",
          selected: "rockstargames-componentsc2c4a49c9b9f76641813b18bb0980d92",
          packCard: "rockstargames-componentsb8f2d3da810c8589e4e785c113645db7",
          packCardImageBox: "rockstargames-componentsa90f26fafc0042f937dd430225fa09df",
          packCardTextBox: "rockstargames-componentsb336075727a195b28ee9d7f20b64de93",
          badge: "rockstargames-componentsc133dc069e1b78af10c1f9e61fba056f",
          icon: "rockstargames-componentsa0bba9599475e1d6bc7af5150ec0acd7",
          label: "rockstargames-componentsdeaa862e4075bf9e3a1be79d6340723e"
        },
        Da = e => {
          let {
            title: a,
            url: t,
            imageUrl: s,
            className: n,
            tiers: c,
            onClick: r,
            badgeContent: i = "Complete",
            imageSize: m = 420,
            imageLoaded: f
          } = e;
          const [g, p] = (0, o.useState)(!1), [u, k] = (0, o.useState)(f);
          (0, o.useEffect)((() => {
            if (c) {
              const e = c.some((e => !e.isComplete));
              p(!e)
            }
          }), [c]);
          const _ = `${s}?im=Resize,height=${m}`;
          return (0, $.usePreloadImg)(_, (() => k(!0))), (0, d.jsx)(l.NavLink, {
            className: [Aa.packCard, n].join(" "),
            to: t,
            onClick: r,
            children: (0, d.jsxs)("div", {
              className: [Aa.packCardImageBox, u ? Aa.packCardImageLoaded : ""].join(" "),
              style: {
                backgroundImage: `url("${_}")`
              },
              children: [g && (0, d.jsxs)("div", {
                className: Aa.badge,
                children: [(0, d.jsx)("div", {
                  className: Aa.icon
                }), (0, d.jsx)("div", {
                  className: Aa.label,
                  children: i
                })]
              }), (0, d.jsxs)("div", {
                className: Aa.packCardTextBox,
                children: [(0, d.jsx)("h4", {
                  children: a
                }), !g && (0, d.jsx)($a, {
                  tiers: c
                })]
              })]
            })
          })
        },
        Fa = {
          pillBtn: "rockstargames-componentscbda74b16a7146b09f9a71b522cd3f79",
          selected: "rockstargames-componentsa9891fadd68543b391db72df22a2d606",
          packList: "rockstargames-componentsbd63f959918552380f08becb4b549e9b",
          headerVisible: "rockstargames-componentsb2b45ebef1d9bec3b25f8ea4fe15cdaf",
          packCard: "rockstargames-componentsa221ba6f68f82f13b6f018447fe007e1",
          packGrid: "rockstargames-componentsd70f5275ee282fe8e4ee21c42aac19d2"
        },
        Oa = e => {
          let {
            isHeaderVisible: a,
            packListItems: t,
            packListClassName: s = Fa.packList,
            packGridClassName: n = Fa.packGrid,
            selectPackCard: c,
            sortFunction: r = za
          } = e;
          const i = [...t].sort(r);
          return (0, d.jsx)("div", {
            className: [s, a ? Fa.headerVisible : ""].join(" "),
            "data-testid": "pack-list",
            children: (0, d.jsx)("div", {
              className: n,
              "data-testid": "pack-grid",
              children: i.map((e => {
                let {
                  title: a,
                  url: t,
                  imageUrl: s,
                  tiers: n
                } = e;
                return (0, d.jsx)(Da, {
                  title: a,
                  url: t,
                  className: Fa.packCard,
                  imageUrl: s,
                  tiers: n,
                  onClick: () => c(a, t)
                }, t)
              }))
            })
          })
        },
        Ra = {
          pillBtn: "rockstargames-componentsaba1ed94a5eff9493f940ee25391fca9",
          selected: "rockstargames-componentsb542dd43ce590ae4ccfc4aa585d1f613",
          navPill: "rockstargames-componentsdf7859eb1b59e9df3385af09ecb41d78"
        },
        Ua = e => {
          let {
            title: a,
            onClick: t,
            selected: s
          } = e;
          return (0, d.jsx)("button", {
            type: "button",
            onClick: t,
            className: [Ra.navPill, s ? Ra.selected : ""].join(" "),
            children: (0, d.jsx)("div", {
              children: a
            })
          })
        };
      var Ga;

      function Ha() {
        return Ha = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = arguments[a];
            for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s])
          }
          return e
        }, Ha.apply(this, arguments)
      }
      const Wa = e => o.createElement("svg", Ha({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none"
      }, e), Ga || (Ga = o.createElement("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "m15 18-6-6 6-6"
      })));
      var qa;

      function Xa() {
        return Xa = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = arguments[a];
            for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s])
          }
          return e
        }, Xa.apply(this, arguments)
      }
      const Ka = e => o.createElement("svg", Xa({
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          fill: "none"
        }, e), qa || (qa = o.createElement("path", {
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "m9 18 6-6-6-6"
        }))),
        Ya = {
          pillBtn: "rockstargames-componentsb285521d08f00a6f37ccea20fc40f214",
          selected: "rockstargames-componentsde174b151575ee71e8bdf1a7baa0d0b4",
          navScrollButton: "rockstargames-componentsd5be5aad8392e91704e849b1c2142042"
        },
        Qa = e => {
          let {
            direction: a,
            className: t,
            ...s
          } = e;
          return (0, d.jsxs)("button", {
            type: "button",
            className: [t, Ya.navScrollButton].join(" "),
            ...s,
            children: ["left" === a && (0, d.jsx)(Wa, {}), "right" === a && (0, d.jsx)(Ka, {})]
          })
        },
        Za = (0, da.defineMessages)({
          plm_nav_scroll_left: {
            id: "plm_nav_scroll_left",
            defaultMessage: "Scroll Left"
          },
          plm_nav_scroll_right: {
            id: "plm_nav_scroll_right",
            defaultMessage: "Scroll Right"
          }
        }),
        Ja = {
          pillBtn: "rockstargames-componentsda92e4f4c572587b5ff87dc114c5a159",
          selected: "rockstargames-componentsb74b1cd96fa4b07e75e79c49e93319cf",
          navMenu: "rockstargames-componentsb9f7ac6f3f14dce1e5022865775005f6",
          navMenuMain: "rockstargames-componentsa588080251b0ccb7b2503d78d38506d9",
          sectionMenu: "rockstargames-componentsb45bf9feaf8a64c8a1d4079fe5285de7",
          sectionItems: "rockstargames-componentsdefb437364d77385070b4d03e15ae40a",
          nextSectionNavButton: "rockstargames-componentsfca6af66f3ce95c8a896f814842397d1",
          previousSectionNavButton: "rockstargames-componentsf096bb207363356429c5a75d1fa96a6d",
          previousNavButton: "rockstargames-componentse0193e8479cbc041cf29bced5d7b1813",
          nextNavButton: "rockstargames-componentsc05228fc9de39167ad00badd39a708e5",
          navFeaturedItems: "rockstargames-componentscc0221847ee8f6d847d1870b39c7e1f0"
        },
        et = e => {
          let {
            navItems: a,
            category: t,
            onNavItemClick: s,
            isOpen: n,
            isHeaderVisible: c,
            menuClass: r = Ja.navMenu,
            menuContainerClass: i = Ja.navMenuMain,
            menuSectionClass: m = Ja.sectionMenu,
            menuPrevBtnClass: f = Ja.previousNavButton,
            menuNextBtnClass: g = Ja.nextNavButton
          } = e;
          const p = (0, da.useIntl)(),
            {
              track: u
            } = (0, A.useGtmTrack)(),
            {
              pathname: k
            } = (0, l.useLocation)(),
            _ = (0, o.useMemo)((() => Math.max(a.findIndex((e => e.name === t)), 0)), [a, k]),
            [b, v] = (0, o.useState)(_),
            [h, x] = (0, o.useState)(!1),
            [y, N] = (0, o.useState)(!1),
            [j, S] = (0, o.useState)(!1),
            w = (0, o.useRef)(null),
            C = (0, o.useCallback)(((e, a) => {
              w.current && w.current.slideTo(e), v(e), T(`Secondary Nav > ${a}`)
            }), [u]),
            I = (0, o.useCallback)(((e, t) => {
              T(`Secondary Nav > ${a[b].title} > ${e}`, t), s()
            }), [a, s, b, u]),
            T = (e, a) => {
              u({
                event: "nav_click",
                event_action: "click",
                event_category: "nav",
                event_label: e,
                text: e.split(">").pop()?.trim() || "",
                link_url: a,
                element_placement: e
              })
            },
            M = (0, o.useCallback)((e => {
              N(e.isEnd), S(e.isBeginning)
            }), []);
          return (0, o.useEffect)((() => {
            w.current && ((w.current.wrapperEl.clientWidth || 0) > (w.current.el.clientWidth || 0) ? (x(!0), w.current.params.centeredSlides = !0, w.current.params.centeredSlidesBounds = !0) : (x(!1), w.current.params.centeredSlides = !1, w.current.params.centeredSlidesBounds = !1))
          }), [w.current?.wrapperEl.clientWidth, w.current?.el.clientWidth]), (0, d.jsx)(Ee.motion.div, {
            className: r,
            initial: {
              height: 0
            },
            animate: {
              height: n ? "100dvh" : 0
            },
            children: (0, d.jsxs)("div", {
              className: i,
              children: [(0, d.jsxs)("div", {
                className: m,
                children: [!j && h && (0, d.jsx)("div", {
                  className: Ja.previousSectionNavButton,
                  children: (0, d.jsx)(Qa, {
                    direction: "left",
                    className: f,
                    onClick: () => w.current?.slidePrev(),
                    "aria-label": p.formatMessage(Za.plm_nav_scroll_left)
                  })
                }), (0, d.jsx)("div", {
                  className: Ja.sectionItems,
                  children: (0, d.jsx)(L.wx, {
                    onBeforeInit: e => w.current = e,
                    onInit: M,
                    className: Ja.sectionItems,
                    direction: "horizontal",
                    grabCursor: !0,
                    slidesPerView: "auto",
                    initialSlide: b,
                    onSlideChange: M,
                    onResize: M,
                    children: a.map(((e, a) => {
                      let {
                        title: t
                      } = e;
                      return (0, d.jsx)(L.Ky, {
                        children: (0, d.jsx)(Ua, {
                          title: t,
                          onClick: () => C(a, t),
                          selected: b === a
                        })
                      }, t)
                    }))
                  })
                }), !y && h && (0, d.jsx)("div", {
                  className: Ja.nextSectionNavButton,
                  children: (0, d.jsx)(Qa, {
                    direction: "right",
                    className: g,
                    onClick: () => w.current?.slideNext(),
                    "aria-label": p.formatMessage(Za.plm_nav_scroll_right)
                  })
                })]
              }), (0, d.jsx)(Oa, {
                isHeaderVisible: c,
                packListItems: a[b]?.subNavItems || [],
                selectPackCard: I
              })]
            })
          })
        },
        at = "rockstargames-componentsd86a3089b6f6e51c437bc17b703ac57b",
        tt = e => {
          let {
            children: a,
            data: t,
            onPageUpdate: s,
            page: n,
            className: c
          } = e;
          return (0, d.jsx)("a", {
            href: "#",
            className: n === t.page ? `rockstargames-componentsc18f44f69dad760ad748324d98f1efcd ${c??""}` : "",
            onClick: e => {
              e.preventDefault(), s(n)
            },
            children: a
          })
        },
        st = e => {
          let {
            data: a,
            onPageUpdate: t,
            className: s
          } = e;
          if (1 === a.pageCount) return null;
          const n = Array.from(new Array(Math.min(a.pageCount, 8)), ((e, t) => t + Math.min(Math.max(a.pageCount - 8, 1), Math.max(2, a.page - 4))));
          return (0, d.jsxs)("div", {
            className: `rockstargames-componentsea0618e2f79b93278088f08dde2476c4 ${s??""}`,
            children: [a.pageCount > 8 ? (0, d.jsxs)(d.Fragment, {
              children: [(0, d.jsx)(tt, {
                data: a,
                onPageUpdate: t,
                page: 1,
                children: "1"
              }), 2 !== n[0] ? (0, d.jsx)("div", {
                className: at,
                children: "..."
              }) : ""]
            }) : "", n.map((e => (0, d.jsx)(tt, {
              data: a,
              onPageUpdate: t,
              page: e,
              className: s,
              children: e
            }, e))), a.pageCount > 8 ? (0, d.jsxs)(d.Fragment, {
              children: [n.slice(-1)[0] + 1 < a.pageCount ? (0, d.jsx)("div", {
                className: at,
                children: "..."
              }) : "", (0, d.jsx)(tt, {
                data: a,
                onPageUpdate: t,
                page: a.pageCount,
                children: a.pageCount
              })]
            }) : ""]
          })
        };
      var nt = t(6400);
      const ct = e => {
          let {
            children: a
          } = e;
          const {
            parallaxController: t
          } = (0, nt.useController)();
          return (0, o.useLayoutEffect)((() => {
            if (!t) return;
            const e = setInterval((() => {
              t.update()
            }), 500);
            return () => clearInterval(e)
          }), [t]), a
        },
        rt = {
          parallaxWrapper: "rockstargames-componentsac6a811a2c026eb9d37c82e804870efc",
          large: "rockstargames-componentsa8acf06a80d716956d8490e4d8c223f7",
          medium: "rockstargames-componentsbd7e3cede84d0e9316f0577f23921911",
          small: "rockstargames-componentsd56e2c3a2b2a210394852ba9e95b4cce"
        },
        it = e => {
          let {
            scrollAxis: a = "vertical",
            size: t = "",
            style: s = {},
            children: n
          } = e;
          return (0, d.jsx)(nt.ParallaxProvider, {
            scrollAxis: a,
            children: (0, d.jsx)(ct, {
              children: (0, d.jsx)("div", {
                className: (0, S.classList)(rt.parallaxWrapper, rt[t]),
                style: s,
                "data-context": "parallax-wrapper",
                children: n ? n.map(((e, t) => (0, o.cloneElement)(e, {
                  scrollAxis: a,
                  style: {
                    ...e?.props?.style,
                    zIndex: t
                  }
                }))) : (0, d.jsx)("div", {})
              })
            })
          })
        },
        ot = e => {
          let {
            layers: a = [],
            displayClass: t = "",
            style: s = {}
          } = e;
          const n = (0, S.useGenerateCdnSource)();
          if (!a || !a[0]?.image) return null;
          const c = a.map((e => ({
            ...e,
            props: {
              style: {
                ...e.style
              }
            },
            style: void 0,
            image: n(e?.image ?? null)
          })));
          return (0, d.jsx)(nt.ParallaxBanner, {
            className: (0, S.classList)("rockstargames-componentsd97831cde902af87ada6d20331a1b381", t),
            layers: c,
            style: s
          })
        },
        lt = "rockstargames-componentsa84defbd41213ae39ad00cd983c9fdf3",
        dt = e => {
          let {
            minOffset: a = 0,
            maxOffset: t = 0,
            scrollAxis: s = "vertical",
            displayClass: n = "",
            style: c = {},
            children: r
          } = e;
          return "horizontal" === s ? (0, d.jsx)(nt.Parallax, {
            x: [a, t],
            className: (0, S.classList)(lt, n),
            styleOuter: c,
            children: r
          }) : (0, d.jsx)(nt.Parallax, {
            y: [a, t],
            className: (0, S.classList)(lt, n),
            styleOuter: c,
            children: r
          })
        },
        mt = (e, a) => {
          switch (e) {
            case "pc":
              return "small" === a ? {
                src: t(7176),
                alt: "PC"
              } : {
                src: t(5716),
                alt: "PC"
              };
            case "ps4":
              return "small" === a ? {
                src: t(9520),
                alt: "PS4"
              } : {
                src: t(7028),
                alt: "PS4"
              };
            case "ps5":
              return "small" === a ? {
                src: t(112),
                alt: "PS5"
              } : {
                src: t(7256),
                alt: "PS5"
              };
            case "xboxone":
              return "small" === a ? {
                src: t(9160),
                alt: "Xbox One"
              } : {
                src: t(1284),
                alt: "Xbox One"
              };
            case "xboxsx":
              return "small" === a ? {
                src: t(2220),
                alt: "Xbox Series X|S"
              } : {
                src: t(1556),
                alt: "Xbox Series X|S"
              };
            default:
              return {
                src: "", alt: ""
              }
          }
        },
        ft = e => t(e < 100 ? 1837 : e > 99 && e < 500 ? 4364 : e > 499 && e < 750 ? 5820 : 388),
        gt = (0, da.defineMessages)({
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
        pt = {
          pillBtn: "rockstargames-componentsc0fa3153030df94ab4c9851ecbe487fd",
          selected: "rockstargames-componentsa1cfd163b5c9dfad8f6285e37b43cceb",
          scNavWrapper: "rockstargames-componentsf04cd89cc078037da622cc686abef1d5",
          rpLevel: "rockstargames-componentsb7f9e9d89d05738747bce229fe8496c5",
          rpIcon: "rockstargames-componentsdd4cf5eae645a64f88072bf0a7613fed",
          scCharacterCard: "rockstargames-componentsf8cc5e30fb84b71315c12a45f4eec502",
          scAvatar: "rockstargames-componentse1ac10d8cc56a4278449f4e8e24ae091",
          scCharNames: "rockstargames-componentsc0364d91464a6e325410a5972a4687a6",
          scCharacterStats: "rockstargames-componentsf0ba4771ecb33f53b7cea411618d8dfc",
          scUserName: "rockstargames-componentsc44bd32337d1688423eff44caeb672de",
          scRpLevel: "rockstargames-componentsfda784a3ff5d50435bee5f2b32580ae4",
          scRpIcon: "rockstargames-componentsbdce7deeeac1aac374be67249c5efd4e"
        },
        ut = (0, da.withIntl)((e => {
          let {
            characterData: a
          } = e;
          const s = (0, da.useIntl)(),
            {
              platform: n,
              platformUsername: c,
              mugshotUrl: r,
              stats: i
            } = a,
            [l, m] = (0, o.useState)(r),
            f = mt(n, "large");
          return (0, d.jsxs)("div", {
            className: pt.scCharacterCard,
            children: [(0, d.jsx)("div", {
              className: pt.scAvatar,
              "data-size": "small",
              children: (0, d.jsx)("img", {
                src: l,
                alt: s.formatMessage(gt.profile_selector_mugshot, c),
                onError: () => {
                  m(t(6829))
                }
              })
            }), (0, d.jsx)("div", {
              className: pt.scCharacterStats,
              children: (0, d.jsxs)("div", {
                className: pt.scCharNames,
                children: [(0, d.jsx)("img", {
                  src: f.src,
                  alt: f.alt
                }), (0, d.jsx)("div", {
                  className: pt.scUserName,
                  "data-size": "small",
                  children: c
                }), (0, d.jsx)("div", {
                  className: pt.scRp,
                  children: (0, d.jsxs)("div", {
                    className: pt.scRpLevel,
                    children: [(0, d.jsx)("img", {
                      className: pt.scRpIcon,
                      src: ft(i.overview.rank.value),
                      alt: s.formatMessage(gt.profile_selector_rp_icon)
                    }), (0, d.jsx)("span", {
                      children: a.stats.overview.rank.value
                    })]
                  })
                })]
              })
            })]
          })
        }), fa),
        kt = (0, p.makeVarNamespace)("@rockstargames/components/profile-switcher"),
        _t = kt("languageSelectorOpenedReactive", !1),
        bt = e => _t(e),
        vt = kt("activeSubNavIdReactive", -1),
        ht = e => vt(e),
        xt = kt("subNavExtraHeightReactive", -1),
        yt = e => xt(e),
        Nt = kt("scNavOpenedReactive", !0),
        jt = e => Nt(e),
        St = kt("charListHiddenReactive", !0),
        wt = e => St(e),
        Ct = () => {
          const e = (0, p.useReactiveVar)(_t),
            a = (0, p.useReactiveVar)(vt),
            t = (0, p.useReactiveVar)(xt),
            s = (0, p.useReactiveVar)(Nt),
            n = (0, p.useReactiveVar)(St);
          return (0, o.useEffect)((() => {
            n || (e && bt(!1), s && (jt(!1), ht(-1)))
          }), [n]), (0, o.useEffect)((() => {
            !e && n && (s || jt(!0))
          }), [e, n]), (0, o.useMemo)((() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: bt,
            activeSubNavId: a,
            setActiveSubNavId: ht,
            subNavExtraHeight: t,
            setSubNavExtraHeight: yt,
            scNavOpened: s,
            setScNavOpened: jt,
            charListHidden: n,
            setCharListHidden: wt
          })), [e, a, t, s, n])
        };
      var It = t(8931),
        Tt = t.n(It),
        Mt = t(1668);
      const Lt = {
          event: "account_menu_click",
          element_placement: "Account Menu"
        },
        Et = (e, a, t) => ({
          text: e.formatMessage(gt.sc_link_help),
          target: "_self",
          ga: {
            ...Lt,
            text: gt.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          children: [{
            text: e.formatMessage(gt.sc_link_support),
            location: {
              domain: ma.U.support,
              path: "/"
            },
            target: "_self",
            ga: {
              ...Lt,
              text: gt.sc_link_support.defaultMessage
            },
            dataTestId: "supportLink"
          }, {
            text: e.formatMessage(gt.sc_link_legal),
            location: {
              domain: ma.U.www,
              path: "/legal"
            },
            target: "_self",
            ga: {
              ...Lt,
              text: gt.sc_link_legal.defaultMessage
            },
            dataTestId: "legalLink"
          }, {
            text: e.formatMessage(gt.sc_link_privacy_policy),
            location: {
              domain: ma.U.www,
              path: "/privacy"
            },
            target: "_self",
            ga: {
              ...Lt,
              text: gt.sc_link_privacy_policy.defaultMessage
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: e.formatMessage(gt.sc_link_cookies_policy),
            location: {
              domain: ma.U.www,
              path: "/cookies"
            },
            target: "_self",
            ga: {
              ...Lt,
              text: gt.sc_link_cookies_policy.defaultMessage
            },
            dataTestId: "cookiesPolicyLink"
          }, {
            text: e.formatMessage(gt.sc_link_cookies_settings),
            onClickCallback: e => {
              e.preventDefault(), t?.ToggleInfoDisplay()
            },
            target: "_self",
            ga: {
              ...Lt,
              text: gt.sc_link_cookies_settings.defaultMessage
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: e.formatMessage(gt.sc_link_do_not_sell_my_information),
            location: {
              domain: ma.U.www,
              path: "/ccpa"
            },
            target: "_self",
            ga: {
              ...Lt,
              text: gt.sc_link_do_not_sell_my_information.defaultMessage
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        }),
        Bt = e => {
          let {
            text: a,
            target: t,
            href: s,
            location: n,
            ga: c,
            dataTestId: r,
            isSubLink: i,
            hasNotifications: o = !1,
            onClickCallback: m = (() => {}),
            tabIndex: f
          } = e;
          const {
            track: g
          } = (0, A.useGtmTrack)(), p = (0, ma.c)();
          let u = s;
          n && (u = n.domain === p.currentSite?.site ? n.path : `https://${p.sites[n.domain]}.rockstargames.com${n.path}`);
          const k = {
            ...c,
            link_url: u
          };
          return (0, d.jsxs)(l.Link, {
            className: i ? "rockstargames-componentsb09825ca3a74afcd1e1ebf847c3e2b08" : "rockstargames-componentsa881dc499df8f3ffd723a933f4c4cf7c",
            "data-testid": r || "menuLink",
            title: a,
            to: u,
            target: t,
            rel: "noreferrer",
            tabIndex: f,
            onClick: e => {
              g(k), m(e)
            },
            children: [a, o && (0, d.jsx)("span", {
              className: "rockstargames-componentsce6a2ead47e90d0fd3b8573eca57eb1c"
            })]
          })
        },
        Pt = e => {
          let {
            id: a,
            text: t,
            target: s,
            href: n,
            location: c,
            ga: r,
            hasNotifications: i = !1,
            dataTestId: l,
            children: m = [],
            activeSubNavId: f,
            setActiveSubNavId: g,
            setSubNavExtraHeight: p,
            onClickCallback: u = (() => {})
          } = e;
          const {
            windowWidth: k,
            windowHeight: _
          } = (0, $.useWindowResize)(), {
            track: b
          } = (0, A.useGtmTrack)(), {
            navOpen: v
          } = (0, A.useRockstarUserState)(), h = (0, o.useRef)(null), [x, y] = (0, o.useState)(0), [N, j] = (0, o.useState)(0), [S, w] = (0, o.useState)(!0);
          return (0, o.useEffect)((() => {
            f !== a && !1 === S && w(!0), f === a && w(!1)
          }), [f]), (0, o.useEffect)((() => {
            if (!h.current) return;
            y(h?.current?.scrollHeight);
            const e = window.getComputedStyle(h.current);
            if (e) {
              let a = 16 * parseInt(e.getPropertyValue("--scSubNav-opened-margin"), 10);
              Number.isNaN(a) && (a = 0), j(a)
            }
          }), [h, k, _]), m.length > 0 ? (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsxs)("button", {
              className: "rockstargames-componentse8c2778a7077d79660118825518f4a6b",
              type: "button",
              "data-testid": l || "menuButton",
              title: t,
              tabIndex: v ? 0 : -1,
              "data-children-hidden": S,
              onClick: e => {
                e.stopPropagation(), b(r), f === a ? (g(-1), p(0)) : (g(a), p(x + N + N))
              },
              children: [(0, d.jsx)("span", {
                className: "rockstargames-componentse3eab869e1022334fd614fabcaa75b22",
                children: t
              }), (0, d.jsx)("span", {
                className: "rockstargames-componentsc8982f9fa3bcb022016d9530b2e9e694"
              })]
            }, t), (0, d.jsx)("nav", {
              className: "rockstargames-componentsbf5af636537478795feeda339a97eab1",
              ref: h,
              "aria-hidden": S,
              style: {
                height: S ? 0 : `${x}px`
              },
              children: m.map((e => (0, d.jsx)(Bt, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: S || !v ? -1 : 0
              })))
            })]
          }) : (0, d.jsx)(Bt, {
            text: t,
            target: s,
            href: n,
            location: c,
            ga: r,
            hasNotifications: i,
            dataTestId: l,
            isSubLink: !1,
            onClickCallback: u,
            tabIndex: v ? 0 : -1
          })
        },
        zt = e => {
          let {
            sc: a
          } = e;
          const {
            windowWidth: t,
            windowHeight: s
          } = (0, $.useWindowResize)(), n = (0, da.useIntl)(), {
            languageSelectorOpened: c,
            setLanguageSelectorOpened: r,
            activeSubNavId: i,
            setActiveSubNavId: m,
            subNavExtraHeight: f,
            setSubNavExtraHeight: g
          } = Ct(), {
            setSelectedCharacterTuple: p,
            navOpen: u
          } = (0, A.useRockstarUserState)(), k = (0, $.useLocale)(), _ = (0, $.toScLocaleString)(k), [b, v] = (0, o.useState)(""), h = (0, l.useLocation)(), x = `${a.login}?returnUrl=${b}&lang=${_}`, y = `${a.signup}&returnUrl=${b}&lang=${_}`, N = (0, o.useMemo)((() => (0, ma.c)()), []), j = (0, o.useMemo)((() => {
            const e = ((e, a, t, s, n) => [{
              text: e.formatMessage(gt.sc_link_sign_in),
              href: a,
              ga: {
                event: "cta_login",
                text: gt.sc_link_sign_in.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "loginLink"
            }, {
              text: e.formatMessage(gt.sc_link_join_social_club),
              href: t,
              ga: {
                event: "cta_signup",
                text: gt.sc_link_join_social_club.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "signUpLink"
            }, Et(e, 0, n)])(n, x, y, 0, window?.OneTrust);
            return e
          }), [n, x, y, N]), [S, w] = (0, o.useState)(0), C = (0, o.createRef)(), I = () => {
            if (C.current) {
              const {
                current: e
              } = C, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), w(a + e)
              } else w(a)
            }
          };
          return (0, o.useEffect)((() => {
            const e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            v(e)
          }), [h]), (0, o.useEffect)((() => {
            p(!1)
          }), []), (0, o.useEffect)((() => {
            I(), Tt()((() => {
              setTimeout(I, 0)
            }), 300)
          }), [t, s]), (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsx)("nav", {
              className: "rockstargames-componentsd02f3a5cc75c24926f893a7408eef7e2",
              children: (0, d.jsx)("div", {
                className: "rockstargames-componentse78c6cdcc0266e824182d18aff01a114",
                "data-logged-in": "false",
                ref: C,
                style: {
                  "--scNavWrap-max-height": `${f+S}px`
                },
                children: j.map((e => (0, o.createElement)(Pt, {
                  ...e,
                  activeSubNavId: i,
                  setActiveSubNavId: m,
                  setSubNavExtraHeight: g,
                  key: e.text
                })))
              })
            }), (0, d.jsx)("div", {
              className: "rockstargames-componentsc33d5109e477537367419d78f4fcb849",
              style: {
                visibility: u ? null : "hidden"
              },
              children: (0, d.jsx)(Mt.LanguageSelector, {
                theme: "sc-menu",
                languageSelectorOpened: c,
                setLanguageSelectorOpened: e => {
                  m(-1), r(e)
                },
                defaultMessage: "Select a Language"
              })
            })]
          })
        },
        Vt = e => {
          let {
            characterData: a,
            setMobileCardWidth: s,
            tabIndex: n
          } = e;
          const c = (0, da.useIntl)(),
            {
              currentCharId: r,
              setCurrentCharId: i
            } = (0, A.useRockstarUserState)(),
            {
              track: l
            } = (0, A.useGtmTrack)(),
            m = (0, o.createRef)(),
            {
              platform: f,
              platformUsername: g,
              mugshotUrl: p,
              stats: u
            } = a,
            [k, _] = (0, o.useState)(p),
            [b] = (0, o.useState)(a.index),
            v = mt(f, "large"),
            h = r === a.index;
          return (0, o.useEffect)((() => {
            m.current && s && s(m?.current?.offsetWidth)
          }), [m]), (0, d.jsxs)("button", {
            className: "rockstargames-componentsf899d1127ad0b649f2a2efbd2cd3f8d9",
            type: "button",
            "aria-hidden": h,
            onClick: e => {
              e.stopPropagation(), i(b);
              let a = "";
              "pc" === f ? a = "PC" : "ps4" === f ? a = "PS4" : "ps5" === f ? a = "PS5" : "xboxone" === f ? a = "Xbox One" : "xboxsx" === f && (a = "Xbox Series X|S"), l({
                event: "character_selector_select",
                event_category: "character_selector",
                event_action: "select",
                event_label: a,
                position: b
              })
            },
            ref: m,
            tabIndex: n,
            children: [(0, d.jsx)("div", {
              className: "rockstargames-componentsce85cd4fa6d178380f2354fc521cebb0",
              "data-size": "small",
              children: (0, d.jsx)("img", {
                src: k,
                alt: c.formatMessage(gt.profile_selector_mugshot, g),
                onError: () => {
                  _(t(6829))
                }
              })
            }), (0, d.jsxs)("div", {
              className: "rockstargames-componentsd2915a8bac1b23ef1bc487d0b4717ac1",
              children: [(0, d.jsxs)("div", {
                className: "rockstargames-componentsf4bfb4619b0bce63bde5b92663b81a47",
                children: [(0, d.jsx)("img", {
                  src: v.src,
                  alt: v.alt
                }), (0, d.jsx)("div", {
                  className: "rockstargames-componentsc097e0a90ba3270a1bdbbdd28f2844c6",
                  "data-size": "small",
                  children: g
                })]
              }), (0, d.jsx)("div", {
                className: "rockstargames-componentsf06f0b013048bcc39d0ebec742dcc12e",
                children: (0, d.jsxs)("div", {
                  className: "rockstargames-componentsffbdea7b6a20225e457397f1c853a2e0",
                  children: [(0, d.jsx)("img", {
                    className: "rockstargames-componentsf1b9164f5a7d314be121993eb60f02ff",
                    src: ft(u.overview.rank.value),
                    alt: c.formatMessage(gt.profile_selector_rp_icon)
                  }), (0, d.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                })
              })]
            })]
          })
        },
        $t = {
          pillBtn: "rockstargames-componentsf4f3b381f39d0b6ec48e8ef4d546df05",
          selected: "rockstargames-componentscfa2d5d46d4124e62e74921d8f4cc36a",
          scNavWrapper: "rockstargames-componentsaf262ebafdc1004a43914761582263df",
          rpLevel: "rockstargames-componentscac9b36dc6439774d0e2b4636c7cccd6",
          rpIcon: "rockstargames-componentsf50ca3080a7462e6ff6a0566732d44ba",
          scProfileDetails: "rockstargames-componentsd9b660c0c3b1b3c031bb956c1c93f682",
          scAvatar: "rockstargames-componentsf170e6a7c0d839bca006a35cf4b3a464",
          scAvatarPlatform: "rockstargames-componentsf221f9759e65c6eecac934e98af2840a",
          scProfileStats: "rockstargames-componentse96d7c31b97327a9f852a9a752bc34bc",
          scNames: "rockstargames-componentsee02d89732e7da14621077c7eff4d37a",
          scTagsNames: "rockstargames-componentsb1d0e095778ce2477cba4532a85eaf34",
          scUserName: "rockstargames-componentsd72f303d584b4e4a3f98dba7b32a0897",
          scCrewName: "rockstargames-componentsde20f4cee0022ee9dc582ff3c28872ed",
          scCrewRankBar: "rockstargames-componentse7fcc9fcf5cadd151c3aca16d493f909",
          scCrewRankBarItem: "rockstargames-componentsba0a7f95c66b722a73a665b193d26722",
          scProgress: "rockstargames-componentsc107a05696db572ec61c7899d5f05a33",
          scRpLevel: "rockstargames-componentsacf4c15ca2e2c07840490a86a65e17ec",
          scRpIcon: "rockstargames-componentsee65fa37c33f23e42d62b8be0c6f12c6",
          scMoney: "rockstargames-componentsf8f0f5f7a2e17d3f2fc033aeb4197305",
          scCash: "rockstargames-componentsc4268a4bbb546c897303f2132a0896d1",
          scBank: "rockstargames-componentsd22a4dca793190405699fa404e327afe"
        },
        At = e => {
          let {
            character: a,
            platformTag: s
          } = e;
          const {
            data: n
          } = (0, A.useRockstarUser)(), {
            track: c
          } = (0, A.useGtmTrack)(), r = (0, da.useIntl)(), [i, l] = (0, o.useState)([]), [m, f] = (0, o.useState)(null), [g, p] = (0, o.useState)(null), [u, k] = (0, o.useState)(!1), [_, b] = (0, o.useState)(-1), [v, h] = (0, o.useState)([]), [x, y] = (0, o.useState)(0), N = t(6829), [j, S] = (0, o.useState)("0"), [w, C] = (0, o.useState)("0"), I = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), T = () => {
            L((0, d.jsx)("img", {
              src: N,
              alt: r.formatMessage(gt.profile_selector_mugshot, {
                userName: n.nickname
              })
            }))
          }, [M, L] = (0, o.useState)((0, d.jsx)("img", {
            className: $t.scAvatarImg,
            src: a.mugshotUrl,
            alt: r.formatMessage(gt.profile_selector_mugshot, {
              userName: n.nickname
            }),
            onError: T
          }));
          (0, o.useEffect)((() => {
            l(n.crews ?? [])
          }), [n]), (0, o.useEffect)((() => {
            L((0, d.jsx)("img", {
              src: a.mugshotUrl,
              alt: n.nickname,
              onError: T
            })), S(I(a.stats.overview.bank.value)), C(I(a.stats.overview.cash.value)), y(a.stats.overview.rank.value)
          }), [a, n]), (0, o.useEffect)((() => {
            i && i.forEach((e => {
              !0 === e.isPrimary && (f(e.crewTag), p(e.crewColour), b(e.rankOrder), k(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && k(!0))
            }))
          }), [i]), (0, o.useEffect)((() => {
            const e = [];
            if (!u && _ > -1)
              for (let a = 5; a > _; a -= 1) e.push((0, d.jsx)("div", {
                className: $t.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== g ? g : ""
                }
              }, `crewrankbar-${a}`));
            h(e)
          }), [_, u, g]);
          const E = e => {
            e.stopPropagation(), c({
              event: "character_selector_profile_click",
              event_category: "character_selector",
              event_action: "profile_click",
              event_label: s.alt,
              link_url: void 0
            })
          };
          return (0, d.jsxs)("div", {
            className: $t.scProfileDetails,
            onClick: E,
            onKeyUp: E,
            role: "button",
            tabIndex: -1,
            children: [(0, d.jsxs)("div", {
              className: $t.scAvatar,
              children: [M, (0, d.jsx)("div", {
                className: $t.scAvatarPlatform,
                "data-platform": a.platform,
                children: (0, d.jsx)("img", {
                  src: s.src,
                  alt: s.alt
                })
              })]
            }), (0, d.jsxs)("div", {
              className: $t.scProfileStats,
              children: [(0, d.jsx)("div", {
                className: $t.scNames,
                children: (0, d.jsxs)("div", {
                  className: $t.scTagsNames,
                  children: [(0, d.jsx)("span", {
                    className: $t.scUserName,
                    children: a.platformUsername
                  }), m && (0, d.jsxs)("span", {
                    className: $t.scCrewName,
                    "data-arrow-tag": u,
                    children: [m, !u && (0, d.jsx)("div", {
                      className: $t.scCrewRankBar,
                      children: v
                    })]
                  })]
                })
              }), (0, d.jsxs)("div", {
                className: $t.scProgress,
                children: [(0, d.jsxs)("div", {
                  className: $t.scRpLevel,
                  children: [(0, d.jsx)("img", {
                    className: $t.scRpIcon,
                    src: ft(x),
                    alt: r.formatMessage(gt.profile_selector_rp_icon)
                  }), (0, d.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                }), (0, d.jsxs)("div", {
                  className: $t.scMoney,
                  children: [(0, d.jsxs)("span", {
                    className: $t.scCash,
                    children: ["$", w]
                  }), (0, d.jsxs)("span", {
                    className: $t.scBank,
                    children: ["$", j]
                  })]
                })]
              })]
            })]
          })
        },
        Dt = (e, a) => {
          const [t, s] = (0, o.useState)(0);
          return (0, o.useEffect)((() => {
            if (e.current) {
              const {
                current: t
              } = e, n = t.getBoundingClientRect(), {
                width: c
              } = n;
              let r = c;
              if (!0 === a) {
                const e = window.getComputedStyle(t);
                r += parseInt(e.marginLeft, 10) + parseInt(e.marginRight, 10)
              }
              s(r)
            }
          }), [e]), t
        },
        Ft = e => {
          let {
            dragThreshold: a = 80,
            interactionDelay: t = 1e3,
            mobileGutterWidth: s = 17,
            slideChangeCallback: n = null,
            slideClickCallback: c = null,
            children: r = [],
            disablePager: i = !1,
            disableSwiper: l = !1
          } = e;
          const m = (0, o.createRef)(),
            f = Dt(m, !1),
            [g, p] = (0, o.useState)(!1),
            [u, k] = (0, o.useState)(0),
            [_, b] = (0, o.useState)(0),
            [v, h] = (0, o.useState)([s]),
            [x, y] = (0, o.useState)(v[0]),
            [N, j] = (0, o.useState)(252),
            [S, w] = (0, o.useState)(0),
            [C, I] = (0, o.useState)([]),
            [T, M] = (0, o.useState)([]),
            [L, E] = (0, o.useState)(!1),
            B = e => {
              if (!0 === g || !0 === l) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              b(a)
            },
            P = e => {
              if (!0 === g || 0 === _ || !0 === l) return;
              const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                s = t > _ ? 1 : -1,
                c = Math.abs(_ - t);
              c > a ? (s > 0 ? (() => {
                if (!0 === g) return;
                p(!0);
                const e = u - 1 < 0 ? 0 : u - 1;
                k(e), y(v[e]), n && n(e)
              })() : (() => {
                if (!0 === g) return;
                p(!0);
                let e = u + 1 >= v.length ? v.length - 1 : u + 1;
                e < 0 && (e = 0), k(e), y(v[e]), n && n(e)
              })(), b(0)) : y(v[u] + c * s)
            },
            z = () => {
              !0 !== g && !0 !== l && (p(!0), !0 !== g && (y(v[u]), b(0)))
            };
          return (0, o.useEffect)((() => {
            const e = [];
            r.forEach((() => {
              e.push((0, o.createRef)())
            })), I(e)
          }), [r]), (0, o.useEffect)((() => {
            if (C.length < 1) return;
            j(C[0]?.current?.clientWidth || 0);
            const e = C[0]?.current.firstChild,
              a = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              t = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            w(t + a)
          }), [C]), (0, o.useEffect)((() => {
            !1 !== g && setTimeout((() => {
              p(!1)
            }), t)
          }), [g, t]), (0, o.useEffect)((() => {
            h(r.map(((e, a) => (e => {
              let a = 0;
              const t = r.length;
              return 1 === t ? .5 * f - .5 * N - 2 * s + S : (0 === e && (a = s - e * N), e === t - 1 && t > 1 && (a = t * N * -1 + (f - (s - S))), e > 0 && e < t - 1 && (a = e * N * -1 + (.5 * f - .5 * N + .5 * S)), a)
            })(a)))), 1 === r.length ? E(!0) : E(!1)
          }), [m.current, r, f]), (0, o.useEffect)((() => {
            const e = (a = u, r.map(((e, t) => {
              const s = {
                active: !1
              };
              return t === a && (s.active = !0), s
            })));
            var a;
            M(e)
          }), [r, u]), (0, o.useEffect)((() => {
            !0 !== i && !0 !== l || y(v[0])
          }), [l, i, v]), (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsx)("div", {
              className: "rockstargames-componentse17c8db80d7db403a300cbaa9c9ea87a",
              ref: m,
              onTouchStart: B,
              onTouchMove: P,
              onTouchEnd: z,
              onMouseDown: B,
              onMouseMove: P,
              onMouseUp: z,
              onClick: () => {
                null !== c && c(u)
              },
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, d.jsx)("div", {
                className: "rockstargames-componentsbbf4a3b0517bc4bc9c50484e64859fe2",
                "data-interaction-blocked": g,
                "data-single-item": L,
                style: {
                  transform: L ? null : `translateX(${x}px)`
                },
                children: r.map(((e, a) => (0, d.jsx)("div", {
                  className: "rockstargames-componentsd34474f7c86ffd91070243d726a8f136",
                  ref: C[a],
                  children: e
                }, `csItem-${e?.props?.characterData?.mugshotUrl}`)))
              })
            }), T.length > 1 && !1 === i && (0, d.jsx)("div", {
              className: "rockstargames-componentsdd5ee726efc577b883d7c4926d0ecab8",
              children: T.map((e => (0, d.jsx)("div", {
                className: "rockstargames-componentsf2481ad40d1468212637d32271adef69",
                "data-active": e.active
              }, e.mugshotUrl)))
            })]
          })
        },
        Ot = {
          pillBtn: "rockstargames-componentsc2232c50132404e0fd5107a423013072",
          selected: "rockstargames-componentsa7a1d25742ecfd267527d0b0573469b2",
          scNavWrapper: "rockstargames-componentsaf9c52948704e51243d7b17a17a7333c",
          rpLevel: "rockstargames-componentse320f697e7c0f1e6f8991fa062ae827e",
          rpIcon: "rockstargames-componentsf0939eac9ccb111179fe17058e787437",
          scProfile: "rockstargames-componentsfac3996df4764256449725b7c80f2aad",
          scCharacterSelector: "rockstargames-componentsaeeea9a01d7a1125972dcfe910b1552c",
          scCharacterSelectBtn: "rockstargames-componentsf8503f1ef140958443a62d299932a728",
          open: "rockstargames-componentse333c4702fca9c3582f86ba87511f037",
          scCharacterList: "rockstargames-componentsb0ca85c2907e389ecc35e1e77484572e",
          scNav: "rockstargames-componentsc7caaa2de10b817d82ba628e10c4dd81",
          scLanguageSelector: "rockstargames-componentsc92e3b5b9e04fd9e9ecaef4e75ec19e6",
          scNavHeader: "rockstargames-componentsb638e33516a1827be2d1e2799ebf9085",
          scNavWrap: "rockstargames-componentsc8077a99219d111ec5f8ed60ee0cce04"
        },
        Rt = (0, $.withTranslations)((e => {
          let {
            sc: a,
            charListHidden: t,
            hideCharacterList: s,
            refCharacterListDesktop: n,
            menuPadding: c,
            longCharList: r,
            setLongCharList: i,
            isMobileMode: m,
            setIsMobileMode: f
          } = e;
          const {
            windowWidth: g,
            windowHeight: u
          } = (0, $.useWindowResize)(), k = (0, da.useIntl)(), {
            languageSelectorOpened: _,
            setLanguageSelectorOpened: b,
            activeSubNavId: v,
            setActiveSubNavId: h,
            subNavExtraHeight: x,
            setSubNavExtraHeight: y,
            scNavOpened: N,
            setScNavOpened: j
          } = Ct(), [S, w] = (0, o.useState)(""), C = (0, l.useLocation)(), {
            lsSettings: I
          } = (0, $.useRockstarWebLSSettings)(), {
            track: T
          } = (0, A.useGtmTrack)(), M = (0, p.useRockstarTokenPing)(), {
            data: L,
            loggedIn: E
          } = (0, A.useRockstarUser)(), {
            charactersNeeded: B,
            currentCharId: P,
            hasNotifications: z,
            navOpen: V,
            setCurrentCharId: D,
            setHasNotifications: F,
            setSelectedCharacterTuple: O,
            setUserData: R
          } = (0, A.useRockstarUserState)(), [U, G] = (0, o.useState)(null), [H, W] = (0, o.useState)(null), [q, X] = (0, o.useState)(!1), [K, Y] = (0, o.useState)(!1), [Q, Z] = (0, o.useState)(0), J = (0, o.createRef)(), ee = Dt(J, !1), ae = (0, o.createRef)(), [te, se] = (0, o.useState)(0), [ne, ce] = (0, o.useState)([]), [re, ie] = (0, o.useState)(244), oe = (0, o.useMemo)((() => (0, ma.c)()), []), le = (0, o.useMemo)((() => {
            const e = ((e, a, t, s, n, c, r) => [{
              text: e.formatMessage(gt.sc_link_activity_feed),
              location: {
                domain: ma.U.socialClub,
                path: "/"
              },
              target: "_self",
              ga: {
                ...Lt,
                text: gt.sc_link_activity_feed.defaultMessage
              },
              dataTestId: "activityFeedLink"
            }, {
              text: e.formatMessage(gt.sc_link_account),
              target: "_self",
              dataTestId: "accountButton",
              children: [{
                text: e.formatMessage(gt.sc_link_view_my_profile),
                href: t.profile_link,
                target: "_self",
                ga: {
                  ...Lt,
                  text: gt.sc_link_view_my_profile.defaultMessage
                },
                dataTestId: "viewMyProfileLink"
              }, {
                text: e.formatMessage(gt.sc_link_messages),
                location: {
                  domain: ma.U.socialClub,
                  path: "/message"
                },
                target: "_self",
                ga: {
                  ...Lt,
                  text: gt.sc_link_messages.defaultMessage
                },
                dataTestId: "messagesLink"
              }, {
                text: e.formatMessage(gt.sc_link_game_activation),
                location: {
                  domain: ma.U.socialClub,
                  path: "/activate"
                },
                target: "_self",
                ga: {
                  ...Lt,
                  text: gt.sc_link_game_activation.defaultMessage
                },
                dataTestId: "gameActivationLink"
              }]
            }, {
              text: e.formatMessage(gt.sc_link_notifications),
              location: {
                domain: ma.U.socialClub,
                path: "/notifications"
              },
              target: "_self",
              hasNotifications: s,
              ga: {
                ...Lt,
                text: gt.sc_link_notifications.defaultMessage,
                location: {
                  domain: ma.U.socialClub,
                  path: "/notifications"
                }
              },
              dataTestId: "notificationsLink"
            }, {
              text: e.formatMessage(gt.sc_link_crews),
              location: {
                domain: ma.U.socialClub,
                path: "/crews"
              },
              target: "_self",
              ga: {
                ...Lt,
                text: gt.sc_link_crews.defaultMessage
              },
              dataTestId: "crewsLink"
            }, {
              text: e.formatMessage(gt.sc_link_friends),
              target: "_self",
              dataTestId: "friendsButton",
              children: [{
                text: e.formatMessage(gt.sc_link_my_friends),
                location: {
                  domain: ma.U.socialClub,
                  path: `/member/${t.nickname}/friends`
                },
                target: "_self",
                ga: {
                  ...Lt,
                  text: gt.sc_link_my_friends.defaultMessage
                },
                dataTestId: "myFriendsLink"
              }, {
                text: e.formatMessage(gt.sc_link_import_friends),
                location: {
                  domain: ma.U.socialClub,
                  path: "/friends/import"
                },
                target: "_self",
                ga: {
                  ...Lt,
                  text: gt.sc_link_import_friends.defaultMessage
                },
                dataTestId: "importFriendsLink"
              }, {
                text: e.formatMessage(gt.sc_link_find_friends),
                location: {
                  domain: ma.U.socialClub,
                  path: "/members"
                },
                target: "_self",
                ga: {
                  ...Lt,
                  text: gt.sc_link_import_friends.defaultMessage
                },
                dataTestId: "findFriendsLink"
              }]
            }, {
              text: e.formatMessage(gt.sc_link_settings),
              location: {
                domain: ma.U.socialClub,
                path: "/settings"
              },
              target: "_self",
              ga: {
                ...Lt,
                text: gt.sc_link_settings.defaultMessage
              },
              dataTestId: "settingsLink"
            }, Et(e, 0, c), {
              text: e.formatMessage(gt.sc_link_log_out),
              href: `${a.logout}?returnUrl=${n}`,
              target: "_self",
              ga: {
                ...Lt,
                text: gt.sc_link_log_out.defaultMessage
              },
              dataTestId: "logoutButton"
            }])(k, a, L, z, S, oe, window);
            return e
          }), [k, a, L, z, S, oe]), de = () => {
            Y(c + re * Q < ee)
          }, me = () => {
            if (ae.current) {
              const {
                current: e
              } = ae, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), se(a + e)
              } else se(a)
            }
          };
          return (0, o.useEffect)((() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            oe.currentSite?.site === ma.U.socialClub && (e = encodeURIComponent("/")), w(e)
          }), [C]), (0, o.useEffect)((() => {
            ce(L.characters[B] ?? [])
          }), [L, B]), (0, o.useEffect)((() => {
            L && R(L)
          }), [L]), (0, o.useEffect)((() => {
            const e = L?.characters.gtao;
            if (null !== E && !e.length) return void O(!1);
            if (null == P || !e.length) return;
            const a = e?.[P] ?? e?.[0] ?? null;
            O(!!a?.platform && [a.platform, a.characterSlot])
          }), [P, L, E]), (0, o.useEffect)((() => {
            (async () => {
              if (!L?.id) return;
              const e = await (0, $.coreScApiFetch)("friends/getInvites", {
                pingBearer: M
              });
              if (e) {
                const {
                  rockstarAccountList: a
                } = e, {
                  count: t
                } = await (0, $.coreScApiFetch)("notification/count", {
                  pingBearer: M
                });
                F(t > 0 || a.total > 0)
              }
            })()
          }), [L]), (0, o.useEffect)((() => {
            de()
          }), [re]), (0, o.useEffect)((() => {
            s(!0), f(g < 768), f(g < 768 || u < 649)
          }), [g, u]), (0, o.useEffect)((() => {
            let e = ne.length - 1;
            e < 0 && (e = 0), Z(e);
            const a = ne.length > 0 ? ne[P] ?? ne[0] : null;
            if (!a) return;
            const t = null !== a ? mt(a.platform, "large") : null;
            W(t), G(a), ne.length > 1 ? X(!0) : X(!1), i(ne.length - 1 > 3)
          }), [P, ne]), (0, o.useEffect)((() => {
            de()
          }), [Q, m, g, ne]), (0, o.useEffect)((() => {
            me(), Tt()((() => {
              setTimeout(me, 0)
            }), 300)
          }), [g, u]), (0, o.useEffect)((() => {
            const e = I?.currentCharId ?? 0;
            e !== P && D(Math.max(0, Math.min(e, ne.length - 1)))
          }), [ne, I]), (0, d.jsxs)(d.Fragment, {
            children: [null !== U && "gtao" === B && (0, d.jsxs)("div", {
              className: Ot.scProfile,
              tabIndex: -1,
              "aria-label": k.formatMessage(gt.profile_selector_profile_card),
              children: [(0, d.jsx)(At, {
                s: Ot,
                character: U,
                platformTag: H
              }), !0 === q && (0, d.jsxs)("div", {
                className: Ot.scCharacterSelector,
                children: [(0, d.jsx)("button", {
                  className: Ot.scCharacterSelectBtn,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const a = !t;
                    s(a), T({
                      event: a ? "character_selector_close" : "character_selector_open",
                      event_action: !0 === a ? "close" : "open",
                      event_category: "character_selector"
                    })
                  },
                  "data-list-closed": t,
                  children: (0, d.jsx)("span", {
                    children: (0, d.jsx)(da.FormattedMessage, {
                      ...gt.profile_selector_switch_character
                    })
                  })
                }), !1 === m && (0, d.jsx)("div", {
                  className: Ot.scCharacterList,
                  "data-long-list": r,
                  "aria-hidden": t,
                  ref: n,
                  children: ne.map((e => (0, d.jsx)(Vt, {
                    tabIndex: t ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: ie
                  }, e.mugshotUrl)))
                }), !0 === m && (0, d.jsx)("div", {
                  className: Ot.scCharacterList,
                  "data-single-item": 2 === ne.length,
                  "data-swiper-disabled": K,
                  "aria-hidden": t,
                  ref: J,
                  children: (0, d.jsx)(Ft, {
                    interactionDelay: 350,
                    mobileGutterWidth: 17,
                    dragThreshold: 40,
                    slideChangeCallback: () => {
                      T({
                        event: "carousel_swipe",
                        event_category: "carousel",
                        event_action: "swipe",
                        event_label: "character_selector"
                      })
                    },
                    disablePager: K,
                    disableSwiper: K,
                    children: ne.filter(((e, a) => a !== P)).map((e => (0, o.createElement)(Vt, {
                      characterData: e,
                      setMobileCardWidth: ie,
                      key: e.mugshotUrl,
                      tabIndex: t ? -1 : 0
                    })))
                  })
                })]
              })]
            }), (0, d.jsxs)("nav", {
              className: Ot.scNav,
              "aria-hidden": !V,
              children: [(0, d.jsx)("button", {
                className: Ot.scNavHeader,
                type: "button",
                "data-opened": N,
                "data-nav-opened": V,
                tabIndex: N ? -1 : 0,
                onClick: e => {
                  e.stopPropagation(), N || j(!0)
                },
                "data-testid": "playerButton",
                children: (0, d.jsx)("span", {
                  children: L.nickname
                })
              }), (0, d.jsx)("div", {
                className: Ot.scNavWrap,
                "data-opened": N,
                "data-logged-in": "true",
                ref: ae,
                style: {
                  "--scNavWrap-max-height": `${te+x}px`
                },
                children: le.map(((e, a) => (0, o.createElement)(Pt, {
                  ...e,
                  id: a,
                  activeSubNavId: v,
                  setActiveSubNavId: h,
                  setSubNavExtraHeight: y,
                  key: e.text
                })))
              })]
            }), (0, d.jsx)("div", {
              className: Ot.scLanguageSelector,
              style: {
                visibility: V ? null : "hidden"
              },
              children: (0, d.jsx)(Mt.LanguageSelector, {
                theme: "sc-menu",
                languageSelectorOpened: _,
                setLanguageSelectorOpened: b
              })
            })]
          })
        })),
        Ut = {
          scNavWrapper: "rockstargames-componentsf50589e434dcf91d986095476585174d",
          rpLevel: "rockstargames-componentsd03ba94fe41731bbf26784a880074abe",
          rpIcon: "rockstargames-componentsbf52f317332c1b1a21106ebf9b9a1b4d",
          scMenu: "rockstargames-componentsc34c7305b9f2989cf93b80ac3aafbc3e",
          pillBtn: "rockstargames-componentse7f130c3045467b94e9ebd673e278be8",
          selected: "rockstargames-componentsa3b848b41da0c4d7ede094309ec02867",
          navOpen: "rockstargames-componentsa87f30bf36e8185078b9645b8068185c",
          dragHandle: "rockstargames-componentsbdead6937fad75f234a9ec8e6da5a76f",
          dragHandleBtn: "rockstargames-componentse406513904d41e71c3d428c652ccceb6",
          scOverlay: "rockstargames-componentsf9d5a3200b2148ecf28831933abe10a0"
        },
        Gt = (0, da.withIntl)((() => {
          const {
            windowHeight: e
          } = (0, $.useWindowResize)(), a = (0, da.useIntl)(), {
            languageSelectorOpened: s,
            setLanguageSelectorOpened: n,
            setActiveSubNavId: c,
            scNavOpened: r,
            setScNavOpened: i,
            charListHidden: l,
            setCharListHidden: m
          } = Ct(), [f, g] = (0, o.useState)(!1), {
            setBodyIsScrollable: u
          } = (0, $.useBodyScrollable)(), {
            navHidden: k = !1
          } = (0, p.useState)(), {
            loggedIn: _
          } = (0, A.useRockstarUser)(), {
            currentCharId: b,
            navOpen: v,
            setNavOpen: h,
            userData: x
          } = (0, A.useRockstarUserState)(), {
            track: y
          } = (0, A.useGtmTrack)(), [N, j] = (0, o.useState)(!1), S = (0, p.useReactiveVar)(A.scConfig), w = (0, o.useRef)(), [C, I] = (0, o.useState)(0), T = (0, o.createRef)(), [M, L] = (0, o.useState)(!1), [E, B] = (0, o.useState)(0), [P, z] = (0, o.useState)(!1), {
            mutateLSSettings: V,
            lsSettings: D
          } = (0, $.useRockstarWebLSSettings)(), F = (0, o.useCallback)((e => {
            m(e), w.current && !0 === e && (w.current.scrollTop = 0)
          }), [w]);
          return (0, o.useEffect)((() => {
            null !== b && D.currentCharId !== b && V({
              key: "currentCharId",
              value: b
            }), !1 === _ ? V({
              key: "currentCharId",
              value: null
            }) : _ && x && y({
              event: "account_synced"
            })
          }), [b, _]), (0, o.useEffect)((() => {
            w.current && (!1 === l && !1 === N && (w.current.style.height = `${w.current.scrollHeight}px`), !0 === l && (w.current.style.height = null))
          }), [l, w, N]), (0, o.useEffect)((() => {
            const e = () => {
                h(!1), F(!0)
              },
              a = a => {
                "Escape" === a.code && e()
              };
            return document.addEventListener("click", e), document.addEventListener("keyup", a), () => {
              document.removeEventListener("click", e), document.removeEventListener("keyup", a)
            }
          }), []), (0, o.useEffect)((() => {
            h(!1), F(!0)
          }), [k]), (0, o.useEffect)((() => {
            if (T.current) {
              const {
                current: e
              } = T, a = window.getComputedStyle(e);
              I(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }), [T]), (0, o.useEffect)((() => {
            u(!M || !v)
          }), [v, M]), (0, o.useEffect)((() => {
            z(window.navigator.userAgent.includes("Mac"))
          }), []), (0, o.useEffect)((() => {
            T.current && g(T?.current?.scrollHeight >= e)
          }), [T, e]), (0, o.useEffect)((() => {
            v || (c(-1), n(!1))
          }), [v]), (0, o.useEffect)((() => {
            s && (l || F(!0), r && (i(!1), c(-1)))
          }), [s]), (0, o.useEffect)((() => {
            r && (s && n(!1), l || F(!0))
          }), [r]), null === _ ? null : (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsxs)("div", {
              className: [Ut.scMenu, v ? Ut.navOpen : ""].join(" "),
              "data-logged-in": _,
              "data-mac-browser": P,
              "data-scroll-mode": f,
              ref: T,
              "aria-hidden": !v,
              children: [(0, d.jsx)("button", {
                className: Ut.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  B(a)
                },
                onTouchMove: e => {
                  if (0 === E) return;
                  const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(E - a) > 1 && (B(0), h(!1))
                },
                children: (0, d.jsx)("img", {
                  className: Ut.dragHandle,
                  src: t(9796),
                  alt: a.formatMessage(gt.sc_menu_drag_handle)
                })
              }), _ ? (0, d.jsx)(Rt, {
                sc: S,
                charListHidden: l,
                hideCharacterList: F,
                refCharacterListDesktop: w,
                menuPadding: C,
                longCharList: N,
                setLongCharList: j,
                isMobileMode: M,
                setIsMobileMode: L
              }) : (0, d.jsx)(zt, {
                sc: S,
                navOpen: v
              })]
            }), (0, d.jsx)("div", {
              className: [Ut.scOverlay, v ? Ut.navOpen : ""].join(" "),
              "data-logged-in": _
            })]
          })
        }), fa),
        Ht = t(6829),
        Wt = t(9024),
        qt = (0, da.withIntl)((e => {
          let {
            setOtherHeaderDropdowns: a
          } = e;
          const t = (0, da.useIntl)(),
            {
              data: s
            } = (0, A.useRockstarUser)(),
            {
              charactersNeeded: n,
              currentCharId: c,
              navOpen: r,
              setNavOpen: i
            } = (0, A.useRockstarUserState)(),
            {
              track: l
            } = (0, A.useGtmTrack)(),
            [m, f] = (0, o.useState)(null),
            [g, p] = (0, o.useState)(!1),
            [u, k] = (0, o.useState)(null),
            [_, b] = (0, o.useState)(!1),
            [v, h] = (0, o.useState)([]);
          (0, o.useEffect)((() => {
            h(s.characters[n] ?? [])
          }), [s, n]);
          const x = (0, o.useCallback)((e => {
            e.stopPropagation(), i(!r), l({
              event: "account_menu_click",
              element_placement: "Account Menu",
              text: r ? "close" : "open"
            })
          }), [r]);
          return (0, o.useEffect)((() => {
            const e = s?.id ?? !1,
              a = e ? (v?.[c]?.mugshotUrl ?? s?.avatar) || Ht : Wt,
              t = mt(v?.[c]?.platform, "small") ?? null;
            k(t), f(a), p(e), b(!!v?.[c]?.mugshotUrl)
          }), [s, v, c, Ht, Wt]), (0, d.jsxs)("button", {
            className: "rockstargames-componentse9d1eed6731789273c2981d6b18080b6",
            "data-img-set": _,
            "aria-label": t.formatMessage(gt.sc_menu_toggle),
            type: "button",
            onClick: e => x(e),
            "data-testid": "avaterMenuButton",
            children: [(0, d.jsx)("img", {
              className: "rockstargames-componentsaa210c100e4e46d1750eb7ffe779251c",
              src: m || "",
              onError: () => {
                f(Ht)
              },
              alt: s?.nickname || ""
            }), g && null !== u && (0, d.jsx)("img", {
              className: "rockstargames-componentsab82d2c5aa7031d087e4d6d2d75c679d",
              src: u.src,
              alt: u.alt
            }), g && (0, d.jsx)("div", {
              "data-ui-name": "avatar",
              className: "rockstargames-componentsa94ccdd527d0ef7da8a880500860e465",
              "data-platform": v?.[c]?.platform ?? null
            })]
          })
        }), fa),
        Xt = {
          pillBtn: "rockstargames-componentsec4687881babff6fb8140e3057c84adf",
          selected: "rockstargames-componentsbb35d8635d729fb7a48a0271ee0beac1",
          promoModule: "rockstargames-componentsa96cf75058f24406ae69280956e81864",
          promoModuleImage: "rockstargames-componentsb6b59b287601476f0e2a16f0c432bdb6",
          gradient: "rockstargames-componentsd0268af224555225272412ec734df075",
          promoModuleContentContainer: "rockstargames-componentscbdd330f3c87cce935433ca35f1bbf41",
          left: "rockstargames-componentsd1e4a39133c7490a56595a253ceecfaa",
          right: "rockstargames-componentscb9a693453841566594ff1e66bf1a0a2",
          promoModuleTextContent: "rockstargames-componentsb3c7d9385f30c83c8b1efd8f5fb0ba3f"
        },
        Kt = e => {
          let {
            backgroundColor: a,
            brands: t = [],
            description: s = "",
            ctaLabel: n = "Click here",
            ctaLink: c = "https://rockstargames.com",
            gradient: r = !0,
            image: i,
            imageOrientation: l = "right",
            title: m = ""
          } = e;
          const [f, g] = (0, o.useState)(!1), {
            ref: p,
            inView: u
          } = (0, R.useInView)({
            threshold: .6
          }), {
            track: k
          } = (0, A.useGtmTrack)(), _ = {
            "--promo-background": a ?? "var(--black-200)",
            "--promo-image": `url(${(0,S.useGetCdnSource)(i)})` ?? 0,
            "--promo-order": "left" === l ? "row" : "row-reverse"
          };
          return (0, o.useEffect)((() => {
            u && !f && (k({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: "promo module",
              element_placement: "promo module"
            }), g(!0))
          }), [u]), (0, d.jsxs)(Ee.motion.div, {
            className: Xt.promoModule,
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
            ref: p,
            children: [(0, d.jsx)("div", {
              className: [Xt.promoModuleImage, r ? Xt.gradient : "", "left" === l ? Xt.left : Xt.right].join(" ")
            }), (0, d.jsxs)("div", {
              className: Xt.promoModuleContentContainer,
              children: [(0, d.jsx)(y, {
                brands: t,
                className: Xt.promoModuleBrands
              }), (0, d.jsxs)("div", {
                className: Xt.promoModuleTextContent,
                children: [m && (0, d.jsx)("h3", {
                  children: m
                }), s && (0, d.jsx)("p", {
                  children: s
                })]
              }), n && (0, d.jsx)(T, {
                to: c,
                text: n,
                onClick: () => {
                  k({
                    event: "cta_other",
                    event_category: "cta",
                    event_action: "other",
                    event_label: n,
                    element_placement: "promo module",
                    link_url: c,
                    text: n
                  })
                }
              })]
            })]
          })
        };
      var Yt = t(1532);
      const Qt = {
          rating: "rockstargames-componentsc004868ea6a6081b6841ea37941dc6dc",
          withDescriptors: "rockstargames-componentsc4c1846c85cbccacafd56ae4b957c2c2",
          withOutDescriptors: "rockstargames-componentse3265d7edca1582513d0fdc449236c9b",
          text: "rockstargames-componentseee91c3283b0b0f696b1792bb7176175"
        },
        Zt = (0, da.defineMessages)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      (0, $.importAll)(t(7876));
      const Jt = Ye((0, da.withIntl)((e => {
          let {
            descriptors: a = null,
            footer: s = null,
            href: n,
            img: c = null,
            titleSlug: r = null,
            style: i = {},
            className: l
          } = e;
          const [f, g] = (0, o.useState)(!1), {
            inView: u
          } = (0, R.useInView)({
            threshold: .6
          }), [k, _] = (0, o.useState)({
            img_rating: c,
            rating_descriptors: a,
            rating_footer: s,
            url_rating: n
          }), {
            track: b
          } = (0, A.useGtmTrack)(), v = (0, da.useIntl)(), {
            data: h
          } = (0, p.useQuery)(Yt.GameData, {
            variables: {
              titleSlug: r
            },
            skip: !r
          });
          if ((0, o.useEffect)((() => {
              h && _(h?.game)
            }), [h]), (0, o.useEffect)((() => {
              u && !f && k.img_rating && (b({
                event: "page_section_impression",
                event_action: "impression",
                event_category: "page_section",
                event_label: "rating",
                element_placement: "rating"
              }), g(!0))
            }), [u]), !k.img_rating) return null;
          const x = !!k.rating_descriptors;
          return (0, d.jsxs)("div", {
            className: [Qt.rating, x ? Qt.withDescriptors : Qt.withOutDescriptors, l || ""].join(" "),
            style: (0, $.safeStyles)(i),
            children: [(0, d.jsx)(m, {
              to: k.url_rating,
              target: "_blank",
              children: (0, d.jsx)("img", {
                alt: v.formatMessage(Zt.components_ratings_link_alt, {
                  rating: (y = k.img_rating, y.replace(/_/g, " ").split(".")[0].toUpperCase())
                }),
                src: t(120)(`./${k.img_rating}`)
              })
            }), x && (0, d.jsxs)("div", {
              className: Qt.text,
              children: [(0, d.jsx)("p", {
                className: Qt.descriptors,
                dangerouslySetInnerHTML: {
                  __html: k?.rating_descriptors?.split(/<br\s?\/?>/).join(", ") || ""
                }
              }), k.rating_footer && (0, d.jsx)("hr", {}), k.rating_footer && (0, d.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: k.rating_footer.replace(/ \//g, ", ")
                }
              })]
            })]
          });
          var y
        }), fa)),
        es = {
          responsiveFlexBox: "rockstargames-componentse4a3b9b6071fe50e64de8f4c9c6841d3",
          responsiveFlexItem: "rockstargames-componentsaa899ffe0d4ed9474eb2058b5884ee51",
          responsiveImage: "rockstargames-componentsaaa1a0871637276a49c581a317952643"
        },
        as = e => {
          let {
            children: a,
            className: t,
            style: s
          } = e;
          return (0, d.jsx)("div", {
            className: [es.responsiveFlexBox, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: a
          })
        },
        ts = {
          responsiveFlexItem: "rockstargames-componentse8d9468ec8cdbdcf6b00a4daedcfbab5"
        },
        ss = e => {
          let {
            children: a,
            className: t,
            style: s
          } = e;
          return (0, d.jsx)("div", {
            className: [ts.responsiveFlexItem, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: a
          })
        },
        ns = {
          responsiveGridBox: "rockstargames-componentse91d4d1de6e479c331b2bc50227fae96",
          responsiveGridItem: "rockstargames-componentsb7b98f304a0507fadedd1e3449fba010"
        },
        cs = e => {
          let {
            children: a,
            cols: t,
            className: s,
            rows: n,
            style: c
          } = e;
          const r = c ? {
            ...c
          } : {};
          return void 0 !== t && (r.gridTemplateColumns = `repeat(${t}, 1fr)`), void 0 !== n && (r.gridTemplateRows = `repeat(${n}, 1fr)`), (0, d.jsx)("div", {
            className: [ns.responsiveGridBox, void 0 !== s ? s : ""].join(" "),
            style: r,
            children: a
          })
        },
        rs = {
          responsiveGridBox: "rockstargames-componentsd2a57229e98f203a0df1d5e4dc5168e7",
          responsiveGridItem: "rockstargames-componentsa550b6abbcce0c5385bb1bbf3aaaaf89"
        },
        is = e => {
          let {
            children: a,
            className: t,
            style: s
          } = e;
          return (0, d.jsx)("div", {
            className: [rs.responsiveGridItem, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: a
          })
        },
        os = {
          responsiveImage: "rockstargames-componentscf17dc54f4db5d6644c56b416b15b33f"
        },
        ls = e => {
          let {
            src: a,
            className: t = "",
            animate: s,
            ariaLabel: n,
            style: c = {}
          } = e;
          const [r, i] = (0, $.usePreloadImg)(a);
          return r ? (c.backgroundImage = `url(${a})`, (0, d.jsx)("div", {
            role: "img",
            "aria-label": n ?? "R* Games",
            className: [os.responsiveImage, s ? os.animateBox : "", t].join(" "),
            style: {
              ...c,
              "--aspect-ratio": i.width / i.height
            }
          })) : null
        },
        ds = {
          responsiveSection: "rockstargames-componentsc5c99169fa31c5009611af9233db5968",
          maxWidth: "rockstargames-componentsd4363484ab65e013f4e7583a00c7a5f4"
        },
        ms = e => {
          let {
            children: a,
            className: t,
            style: s,
            maxWidth: n
          } = e;
          return (0, d.jsx)("section", {
            className: [ds.responsiveSection, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: n ? (0, d.jsx)("div", {
              className: ds.maxWidth,
              children: a
            }) : a
          })
        },
        fs = () => (0, d.jsx)(m, {
          className: "rockstargames-componentscc006d4ff1bfa49216622ebc92289fb0",
          alt: "Rockstar Games Home",
          to: "/"
        }),
        gs = () => {
          const {
            pathname: e
          } = (0, l.useLocation)();
          return (0, o.useEffect)((() => {
            window.scrollTo(0, 0)
          }), [e]), null
        },
        ps = (0, o.forwardRef)(((e, a) => {
          const {
            threshold: t,
            callback: s,
            children: n,
            requireUser: c
          } = e, {
            track: r
          } = (0, A.useGtmTrack)(c), [i, l] = (0, o.useState)(a?.current);
          return (0, o.useEffect)((() => {
            a?.current && l(a.current)
          }), [a]), ((e, a, t) => {
            const [s, n] = (0, o.useState)({
              scrollDepths: e,
              scrollY: 0
            }), {
              scrollDepths: c,
              scrollY: r
            } = s;
            (0, o.useEffect)((() => {
              "undefined" != typeof window && 0 !== window.pageYOffset && n((e => ({
                ...e,
                scrollY: window.pageYOffset
              })))
            }), []), (0, o.useEffect)((() => {
              n({
                scrollDepths: e,
                scrollY: 0
              })
            }), [window.location.pathname]);
            const i = (0, o.useCallback)((() => {
              const e = document.documentElement,
                r = document.body,
                o = t?.scrollTop || e.scrollTop || r.scrollTop,
                l = t?.scrollHeight || e.scrollHeight || r.scrollHeight,
                {
                  clientHeight: d
                } = e,
                m = o / (l - d) * 100;
              if (c) {
                const e = Math.min(...c, l);
                if (m >= e) {
                  const s = c.filter((a => a !== e));
                  0 === s.length && (t ?? window).removeEventListener("scroll", i), a && a({
                    scrollY: e,
                    scrollPercent: m,
                    remainingDepths: s
                  }), n({
                    scrollY: e,
                    scrollDepths: s
                  })
                }
              } else n({
                ...s,
                scrollY: m
              })
            }), [c, t, a]);
            (0, o.useEffect)((() => {
              if ("undefined" == typeof window) return;
              const e = t ?? window;
              return e.addEventListener("scroll", i), () => e.removeEventListener("scroll", i)
            }), [i])
          })(t, (e => {
            let {
              scrollY: a
            } = e;
            r({
              event: "page_scroll",
              event_category: "page_scroll",
              event_action: a,
              scroll_depth: a
            }), "function" == typeof s && s(a)
          }), i), n
        })),
        us = (0, $.withTranslations)((e => {
          let {
            t: a
          } = e;
          const [t] = (0, o.useState)(""), s = (0, l.useNavigate)(), n = (0, p.useMutateState)();
          return (0, d.jsxs)("form", {
            action: "#",
            className: "rockstargames-componentsb3a5dd3d369564e67254698a18833f98",
            onSubmit: e => {
              e.preventDefault(), n({
                navOpen: !1
              }), document.activeElement?.blur(), s(`/search?q=${e.target.q.value}`)
            },
            role: "search",
            children: [(0, d.jsx)("button", {
              type: "submit",
              role: "button",
              title: "Submit"
            }), (0, d.jsx)("input", {
              autoComplete: "off",
              defaultValue: t,
              enterKeyHint: "search",
              name: "q",
              placeholder: a("Search Rockstar Games")
            })]
          })
        })),
        ks = {
          skeleton: "rockstargames-componentsa76d39bab84e8f469972e22834204389",
          pulse: "rockstargames-componentse8aa563c46cfd0a74ea4dcfc1bb8a9e4",
          gen9Hero: "rockstargames-componentsd63bf424caff53fef09b8e4c2e20a3c3"
        },
        _s = e => {
          let {
            skeleton: a
          } = e;
          return a ? (0, d.jsx)("div", {
            className: [ks.skeleton, ks[a]].join(" ")
          }) : null
        },
        bs = (0, da.defineMessages)({
          components_track_list_title: {
            id: "components_track_list_title",
            defaultMessage: "Tracklist"
          }
        }),
        vs = {
          bodySmall: "rockstargames-componentsb9aa3afbdb37ff0aea705849df408c42"
        },
        hs = e => {
          let {
            track: a,
            artist: t
          } = e;
          return (0, d.jsxs)("div", {
            className: vs.track,
            children: [(0, d.jsx)("p", {
              children: a
            }), (0, d.jsx)("p", {
              className: vs.bodySmall,
              children: t
            })]
          })
        },
        xs = (0, da.withIntl)((e => {
          let {
            children: a
          } = e;
          return (0, d.jsxs)("div", {
            className: "rockstargames-componentsadbe1e185cd3cd1481eb242c25b0eb14",
            children: [(0, d.jsx)("h4", {
              className: "rockstargames-componentsa37f37abb5276c67d47bca88073adb3f",
              children: (0, d.jsx)(da.FormattedMessage, {
                ...bs.components_track_list_title
              })
            }), (0, d.jsx)("div", {
              className: "rockstargames-componentsc0e76cb19681f62e125f0b004c296f0a",
              children: (0, d.jsx)("div", {
                className: "rockstargames-componentsb2a58aa8f0fbec82f1c7e834739aabad",
                children: o.Children.map(o.Children.toArray(a), (e => (0, d.jsx)(hs, {
                  ...e?.props
                })))
              })
            })]
          })
        }), fa),
        ys = "rockstargames-componentsce552800b27ae8165e7d3dc5a189fe11",
        Ns = "rockstargames-componentsf1715da046f9be2e226bc9f6342294c0",
        js = {
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
        Ss = e => {
          let {
            title: a = "thumbnail gallery",
            thumbsPerView: t = 3,
            loop: s = !1,
            navigation: n = !1,
            slideChildren: c = [],
            variants: r = {
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
          } = (0, A.useGtmTrack)(), [m, f] = (0, o.useState)([Xe.O4, Xe.Hj, Xe.eM]), [g, p] = (0, o.useState)(null), [u, k] = (0, o.useState)(null);
          return (0, o.useEffect)((() => {
            const e = [Xe.O4, Xe.Hj, Xe.eM];
            n && e.push(Xe._2), f(e)
          }), [n]), (0, o.useEffect)((() => {
            if (!c) return;
            const e = c.map(((e, a) => (0, d.jsx)(L.Ky, {
              children: e
            }, Symbol(a).toString())));
            k(e)
          }), [c]), u ? (0, d.jsxs)(Ee.motion.div, {
            className: "rockstargames-componentsabb6bd9f780af17f6dcf79964e885edb",
            variants: r.parent,
            transition: i.parent,
            initial: "initial",
            animate: "animate",
            children: [(0, d.jsx)(Ee.motion.div, {
              className: ys,
              variants: r.main,
              transition: i.main,
              initial: "initial",
              animate: "animate",
              children: (0, d.jsx)(L.wx, {
                loop: s,
                navigation: n,
                pagination: {
                  clickable: !0
                },
                thumbs: {
                  swiper: g
                },
                modules: m,
                breakpoints: js,
                className: ys,
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
                children: u
              })
            }), (0, d.jsx)(Ee.motion.div, {
              className: Ns,
              variants: r.thumbs,
              transition: i.thumbs,
              initial: "initial",
              animate: "animate",
              children: (0, d.jsx)(L.wx, {
                threshold: 50,
                onSwiper: p,
                loop: s,
                breakpoints: js,
                slidesPerView: t,
                freeMode: !0,
                watchSlidesProgress: !0,
                modules: m,
                className: Ns,
                children: u
              })
            })]
          }) : null
        };
      var ws = t(3260);
      const Cs = e => {
          let {
            id: a = null,
            ids: t = null,
            setTitleDataPath: s = null,
            sync: n = !1
          } = e;
          const c = t ?? [a],
            {
              data: r
            } = (0, p.useQuery)(ws.TinaModulesInfo, {
              variables: {
                ids: c,
                sync: n
              },
              setTitleDataPath: s,
              skip: !c.length
            });
          return r?.tinaModulesInfo ?? null
        },
        Is = Ye((e => {
          let {
            components: a = {},
            id: t = null,
            ids: s = null,
            skeleton: n
          } = e;
          const c = Cs({
            id: t,
            ids: s
          });
          if (!c) return (0, d.jsx)(_s, {
            skeleton: n
          });
          const r = c?.[0]?.tina;
          return r ? (0, d.jsx)(d.Fragment, {
            children: c.map(((e, t) => {
              let {
                tina: s
              } = e;
              return (0, d.jsx)(S.TinaParser, {
                components: a,
                tina: s,
                componentProps: {
                  tinaModulesInfo: c
                }
              }, t)
            }))
          }) : null
        })),
        Ts = e => {
          let {
            children: a,
            style: t,
            theme: s
          } = e;
          const [n, c] = (0, o.useState)(s);
          return (0, o.useEffect)((() => {
            s && c(s)
          }), [s]), (0, d.jsx)("div", {
            className: "rockstargames-componentsf1a049e5eed244f3a602a9842424d1c3",
            style: t,
            "data-theme": n,
            children: a
          })
        };
      var Ms = t(9636);
      const Ls = {
          pillBtn: "rockstargames-componentsea67ce83d428f999f9d2bb8569909713",
          selected: "rockstargames-componentsbbdd3273d3d42b0b6f88fad71cd9ae1c",
          userVote: "rockstargames-componentsed30a827a4ee0c0fe965dbb8c52b61f6",
          info: "rockstargames-componentsbae3af054b3b38745be7b59e4338172e",
          voteContent: "rockstargames-componentse0f8555223a6d38a90a0cadb4d312769",
          loggedOutButtons: "rockstargames-componentsaded051bc064dd12716b093167ba0b44",
          voteButtons: "rockstargames-componentse7b91e90603eac9580ee286920e2e09d",
          downVote: "rockstargames-componentsfaadebdf7df51bea028f6686430a46d4",
          upVote: "rockstargames-componentsbf4e6863e21e200ba89eaf06cf1f70de",
          voteButtonActive: "rockstargames-componentsf470bab88d3ac74c73e2dc6aaa71e62f"
        },
        Es = e => {
          let {
            description: a,
            foreign_id: t = document.location.pathname,
            foreign_type: s = "url",
            title: n
          } = e;
          const {
            track: c
          } = (0, A.useGtmTrack)(), {
            loggedIn: r
          } = (0, A.useRockstarUser)(), {
            refetch: i
          } = (0, p.useQuery)(Ms.UserGetVote, {
            skip: !0
          }), [l] = (0, p.useMutation)(Ms.UserCastVote), [m, f] = (0, o.useState)(null), g = (0, o.useCallback)((async e => {
            c({
              event_action: m ? "like" : "dislike",
              event_category: "cta",
              event: "cta_" + (e ? "like" : "dislike"),
              event_label: t
            });
            const a = {
                foreign_id: t,
                foreign_type: s,
                vote: e
              },
              n = await l({
                variables: a
              });
            f(n?.data?.userCastVote?.vote ?? null)
          }), [t, s]);
          return (0, o.useEffect)((() => {
            (async () => {
              if (!r || !t || !s) return;
              const e = await i({
                foreign_id: t,
                foreign_type: s
              });
              f(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [t, s, r]), (0, d.jsx)("div", {
            className: Ls.userVote,
            children: (0, d.jsxs)("div", {
              className: Ls.voteContent,
              children: [(0, d.jsxs)("div", {
                className: Ls.info,
                children: [(0, d.jsx)("h3", {
                  children: n
                }), (0, d.jsx)("p", {
                  children: a
                })]
              }), (0, d.jsxs)("div", {
                className: [Ls.voteButtons, r ? "" : Ls.loggedOutButtons].join(" "),
                children: [(0, d.jsx)("button", {
                  onClick: () => g(!0),
                  className: [Ls.upVote, m ? Ls.voteButtonActive : ""].join(" "),
                  type: "button",
                  "aria-label": "Vote up"
                }), (0, d.jsx)("button", {
                  className: [Ls.downVote, !1 === m ? Ls.voteButtonActive : ""].join(" "),
                  onClick: () => g(!1),
                  type: "button",
                  "aria-label": "Vote down"
                })]
              })]
            })
          })
        },
        Bs = {
          carousel: "rockstargames-componentsf022bf9e72dc1703e9e349d33b94f1af",
          text: "rockstargames-componentsd13ac10ef642d12233ef4c9b26a9805c",
          info: "rockstargames-componentsc3600a5b5e3fb1e3a927caa4d6cfeac2",
          active: "rockstargames-componentsbcfee44b7965e4e71d26a6ba225d97a9",
          title: "rockstargames-componentsfa6298615a4fbfcd650dd8e81e36dd90",
          gameTitle: "rockstargames-componentse940e03478c4fde7d00943d360a903a1",
          videoTitle: "rockstargames-componentsd7f98fc87b5160ec7d61e909a3f72b37",
          cta: "rockstargames-componentsa040b79f6e82198f56101ca5bae4a921",
          track: "rockstargames-componentsa0527345ee96370ccb95592c6300ad6e",
          disableClick: "rockstargames-componentsdc147a259ab323176bba266cf5096e11",
          items: "rockstargames-componentsfc276a6df1a73451aeb9d27629b6b7f9",
          dragging: "rockstargames-componentsbb5ecb6b4e8e81e432a59eac0a5f4985",
          dots: "rockstargames-componentsdcabe0c33f6868691c42df0d3684d20d"
        },
        Ps = (0, $.withLocale)((e => {
          let {
            locale: a,
            t,
            videos: s
          } = e;
          const {
            setBodyIsScrollable: n
          } = (0, $.useBodyScrollable)(), [c, r] = (0, o.useState)(0), [i, l] = (0, o.useState)(0), f = (0, o.useRef)(null), p = (0, o.useRef)(null);
          return (0, o.useEffect)((() => {
            if (!f.current || p.current) return;
            const e = new(g())(f.current);
            e.get("press").set({
              time: 0
            }), e.get("tap").set({
              time: 150
            });
            const a = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
              t = () => {
                r(c - 1 < 0 ? 0 : c - 1), l(0)
              },
              i = () => {
                const e = c + 1 >= s.length - 1 ? s.length - 1 : c + 1;
                r(e), l(0)
              },
              o = e => {
                l(e.isFinal ? 0 : e.deltaX), "panleft" !== e.additionalEvent && "panright" !== e.additionalEvent || !p.current?.classList.contains(Bs.dragging) || a() && n(!1)
              },
              d = () => {
                a() && n(!0), l(0)
              },
              m = e => {
                "press" === e.type && f.current?.classList.add(`${Bs.disableClick}`), "tap" === e.type && (f.current?.classList.remove(`${Bs.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
              },
              u = () => {
                a() && n(!0), f.current && f.current.classList.remove(`${Bs.disableClick}`)
              },
              k = () => {
                a() && n(!0)
              };
            return p.current.addEventListener("transitionend", k), e.on("swiperight", t), e.on("swipeleft", i), e.on("pan", o), e.on("panend", d), e.on("press tap", m), e.on("pressup", u), () => {
              e.off("swiperight", t), e.off("swipeleft", i), e.off("pan", o), e.off("panend", d), e.off("press tap", m), e.off("pressup", u), p.current && p.current.removeEventListener("transitionend", k), l(0)
            }
          }), [f.current, c]), (0, d.jsxs)("section", {
            className: Bs.carousel,
            children: [(0, d.jsx)("div", {
              className: Bs.track,
              ref: f,
              children: (0, d.jsx)("div", {
                className: `${Bs.items} ${0!==i?Bs.dragging:""}`,
                ref: p,
                style: {
                  transform: `translateX(calc(-${100*c}% + ${i}px))`
                },
                children: s.map(((e, a) => (0, d.jsx)(m, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through screencap",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  className: c === a ? Bs.active : "",
                  role: "link",
                  title: e.title,
                  children: (0, d.jsx)(Ds, {
                    video: e,
                    size: 1280
                  })
                }, e.id)))
              })
            }), (0, d.jsxs)("footer", {
              children: [(0, d.jsx)("div", {
                className: Bs.text,
                children: s.map(((e, s) => (0, d.jsx)(m, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through footer",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  role: "link",
                  title: e.title,
                  children: (0, d.jsxs)("div", {
                    className: [Bs.info, s === c ? Bs.active : ""].join(" "),
                    children: [(0, d.jsxs)("div", {
                      className: Bs.title,
                      children: [(0, d.jsx)("div", {
                        className: Bs.gameTitle,
                        children: `${e.game.title}${"fr_fr"===a?" ":""}`
                      }), (0, d.jsx)("h2", {
                        className: Bs.videoTitle,
                        children: `${e.title}`
                      })]
                    }), (0, d.jsx)(j, {
                      className: Bs.cta,
                      children: t("Watch Now")
                    })]
                  })
                }, e.id)))
              }), (0, d.jsx)("div", {
                className: Bs.dots,
                children: s.map(((e, a) => (0, d.jsx)("button", {
                  "aria-label": `Slide ${a}`,
                  "data-gtm-category": "Marquee",
                  "data-gtm-action": "Dot click",
                  "data-gtm-label": `Dot clicked to ${a}`,
                  onClick: () => r(a),
                  className: c === a ? Bs.active : "",
                  type: "button"
                }, e.id)))
              })]
            })]
          })
        })),
        zs = {
          videoList: "rockstargames-componentse49dd5596165ea04152c8356209a1cca",
          sectionHeader: "rockstargames-componentsb3dfec0109576abb1fd036096e6b117a",
          arrowNav: "rockstargames-componentsd608a61eb851b602c357831dc1922f8d",
          items: "rockstargames-componentsccce7c0c4640718e66cef74780ddcc6a",
          trackWrapper: "rockstargames-componentsb9b46623fdd5e99802671a571e937647",
          track: "rockstargames-componentsa39107b35785fa66f77a4a31acbc5f30",
          dragging: "rockstargames-componentsc2f1bbce4e236d97a9a01273bda06fcc",
          arrow: "rockstargames-componentsd97ccb39d0e8774dcf5baf67c51bfde8",
          previous: "rockstargames-componentsccd0015c6e1766d2865b5bf0e47a20c2",
          next: "rockstargames-componentsc1fd555dd7b904ebe9f23e233c63b0b8",
          disabled: "rockstargames-componentsc9b97437b4e75cef0bb78c0c136c81e9"
        },
        Vs = (0, $.withTranslations)((e => {
          let {
            vids: a,
            games: t,
            title: s,
            gameTitleNecessary: n
          } = e;
          const c = void 0 !== t ? "games" : "videos",
            r = "videos" === c ? a : t.results,
            i = (0, o.useRef)(null),
            [l, m] = (0, o.useState)(0),
            [f, p] = (0, o.useState)(0),
            u = e => {
              const a = Math.ceil(r.length / l);
              e < 0 ? e = 0 : e >= a - 1 && (e = a - 1), p(e)
            },
            [k, _] = (0, o.useState)(0);
          let b;
          return (0, o.useEffect)((() => {
            const e = () => {
              const e = e => window.matchMedia(`(max-width: ${e})`).matches,
                a = e("768px") ? 1 : e("990px") || e("1440px") ? 2 : e("1920px") ? 3 : 4;
              m(a)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [l]), (0, o.useEffect)((() => {
            if (i.current) {
              const e = new(g())(i.current),
                a = () => {
                  u(f - 1), _(0)
                },
                t = () => {
                  u(f + 1), _(0)
                },
                s = e => {
                  _(e.isFinal ? 0 : e.deltaX)
                },
                n = () => {
                  _(0)
                };
              return e.on("swiperight", a), e.on("swipeleft", t), e.on("pan", s), e.on("panend", n), () => {
                e.off("swiperight", a), e.off("swipeleft", t), e.off("pan", s), e.off("panend", n), _(0)
              }
            }
          }), [i.current, f]), b = "games" === c ? (0, d.jsx)(d.Fragment, {
            children: t.results.map((e => (0, d.jsx)(He, {
              game: e,
              dontOverrideTo: !0,
              to: `/videos?type=game&gameId=${e.id}`
            }, e.id)))
          }) : (0, d.jsx)(d.Fragment, {
            children: a.map((e => (0, d.jsx)(Fs, {
              video: e,
              gameTitleNecessary: n
            }, e.id)))
          }), (0, d.jsxs)("section", {
            className: zs.videoList,
            children: [(0, d.jsxs)("h3", {
              className: zs.sectionHeader,
              children: [s, (0, d.jsxs)("div", {
                className: zs.arrowNav,
                children: [(0, d.jsx)("div", {
                  className: [zs.arrow, zs.previous, 0 === f ? zs.disabled : ""].join(" "),
                  onClick: () => u(f - 1)
                }), (0, d.jsx)("div", {
                  className: [zs.arrow, zs.next, f === Math.ceil(r.length / l) - 1 ? zs.disabled : ""].join(" "),
                  onClick: () => u(f + 1)
                })]
              })]
            }), (0, d.jsx)("div", {
              className: zs.items,
              children: (0, d.jsx)("div", {
                className: zs.trackWrapper,
                children: (0, d.jsx)("div", {
                  className: [zs.track, 0 !== k ? zs.dragging : ""].join(" "),
                  ref: i,
                  style: {
                    transform: `translateX(calc(-${100*f}% + ${k}px - (var(--standard-grid-gap) * ${f}))`,
                    gridAutoColumns: `calc(100 / ${l} * 1% - calc(var(--standard-grid-gap) * (${l-1}/${l}))`
                  },
                  children: b
                })
              })
            })]
          })
        })),
        $s = (0, $.withTranslations)((e => {
          let {
            error: a,
            t,
            domain: s = ""
          } = e;
          console.error({
            error: a
          });
          let n = a?.message ?? t("error-404-new");
          n = t("error-404-new");
          const c = a?.code ?? 398,
            r = (0, o.useRef)(null);
          return (0, o.useEffect)((() => {
            r && r?.current && r.current.focus()
          }), [r]), (0, d.jsxs)("div", {
            className: "rockstargames-componentsc7fe032eaf0127cb44b3aec94a930688",
            children: [(0, d.jsx)("h3", {
              tabIndex: -1,
              ref: r,
              children: `${n} (${c})`
            }), (0, d.jsx)(m, {
              to: "/",
              children: t("Home")
            }), "clr" !== s && (0, d.jsx)(us, {})]
          })
        })),
        As = {
          videoPreview: "rockstargames-componentsfe7a3e548d37991de12016a69af8e6c0",
          card: "rockstargames-componentsdaabbfc1eda1710ae7d1346162b9392e",
          info: "rockstargames-componentsa7ab9b6f9cb9bbc84106a35eb5bec944",
          title: "rockstargames-componentsa56d5941f9b96a7739afafd390605684",
          screencap: "rockstargames-componentse72a05891b15325f72b498d292d1597d",
          screencapLoaded: "rockstargames-componentsed8b59749d6b49b669bfdd77a2d05da6",
          gameTitle: "rockstargames-componentse0e54e027a19ac5f0b1e839fd68b8795"
        },
        Ds = e => {
          let {
            video: a,
            size: t = 640
          } = e;
          const s = `${a.screencap}?im=Resize=${t}`,
            [n] = (0, $.usePreloadImg)(s);
          return (0, d.jsx)("div", {
            className: [As.screencap, n ? As.screencapLoaded : ""].join(" "),
            style: {
              background: `url(${s}) center/cover`
            }
          })
        },
        Fs = e => {
          let {
            gameTitleNecessary: a = !0,
            openInNewWindow: t = !1,
            video: s,
            size: n,
            toExplicit: c
          } = e;
          const r = c ?? `/videos/${s.id}`,
            i = {
              className: As.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": r
            },
            o = (0, d.jsxs)("div", {
              className: As.card,
              children: [(0, d.jsx)(Ds, {
                video: s,
                size: n
              }), (0, d.jsxs)("div", {
                className: As.info,
                children: [a ? (0, d.jsx)("div", {
                  className: As.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: s.game.title
                  }
                }) : "", (0, d.jsx)("h5", {
                  className: As.title,
                  dangerouslySetInnerHTML: {
                    __html: s.title
                  }
                })]
              })]
            });
          return t ? (0, d.jsx)("a", {
            href: r,
            target: "_blank",
            ...i,
            children: o
          }) : (0, d.jsx)(m, {
            to: r,
            ...i,
            children: o
          })
        };
      class Os extends o.Component {
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
          return null !== this.state.error.code ? (0, d.jsx)($s, {
            error: this.state.error
          }) : this.props.children
        }
      }
      const Rs = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return function(t) {
            return (0, d.jsx)(Os, {
              header: a,
              children: (0, d.jsx)(e, {
                ...t
              })
            })
          }
        },
        Us = (0, o.forwardRef)(((e, a) => {
          const {
            children: t,
            tag: s = "div"
          } = e, n = Ee.m[s];
          return (0, d.jsx)(Ee.LazyMotion, {
            features: Ee.domAnimation,
            children: (0, d.jsx)(n, {
              ref: a,
              ...e,
              children: t
            })
          })
        })),
        Gs = {
          visible: {
            opacity: 1
          },
          hidden: {
            opacity: 0
          }
        },
        Hs = {
          ease: "easeIn",
          duration: .4
        },
        Ws = e => {
          let {
            children: a
          } = e;
          return (0, d.jsx)(Ee.motion.div, Object.assign({
            className: "rockstargames-componentsf530747be99449caf15a0155061aee75",
            variants: Gs,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: Hs
          }, {
            children: a
          }))
        },
        qs = e => a => (0, d.jsx)(Ws, {
          children: (0, d.jsx)(e, Object.assign({}, a))
        }),
        Xs = {
          visible: {
            opacity: 1,
            y: 0
          },
          hidden: {
            opacity: 0,
            y: 40
          }
        },
        Ks = {
          ease: "easeIn",
          duration: .75
        },
        Ys = e => {
          let {
            children: a
          } = e;
          return (0, d.jsx)(Ee.motion.div, {
            className: "rockstargames-componentse88740b4d3c20ab9f8656e87b324d143",
            variants: Xs,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: Ks,
            children: a
          })
        },
        Qs = e => a => (0, d.jsx)(Ys, {
          children: (0, d.jsx)(e, {
            ...a
          })
        }),
        Zs = {
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
        Js = {
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
        en = function() {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "collapsed";
          return Js[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "imageMask"][e]
        };
      var an = t(1860),
        tn = t.n(an);
      const sn = JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[300,300,0]},"a":{"k":[0,0,0]},"s":{"k":[244,244,100]}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"k":[100,100]},"p":{"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"tm","s":{"k":[{"i":{"x":[0.439],"y":[1.016]},"o":{"x":[0.561],"y":[0.015]},"n":["0p439_1p016_0p561_0p015"],"t":5,"s":[100],"e":[0]},{"t":33.0000013441176}],"ix":1},"e":{"k":[{"i":{"x":[0.439],"y":[1.017]},"o":{"x":[0.561],"y":[0.016]},"n":["0p439_1p017_0p561_0p016"],"t":0,"s":[100],"e":[0]},{"t":30.0000012219251}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"},{"ty":"st","fillEnabled":true,"c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":16},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"}],"ip":0,"op":900.000036657751,"st":0,"bm":0,"sr":1}],"v":"4.5.3","ddd":0,"ip":1.00000004073083,"op":33.0000013441175,"fr":29.9700012207031,"w":600,"h":600}'),
        nn = JSON.parse('{"v":"5.7.3","fr":60,"ip":0,"op":64,"w":300,"h":300,"nm":"Dot_Loading","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"center","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":10,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":22,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":34,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.667,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"right","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":5,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":17,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":29,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.333,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":12,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":24,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0}],"markers":[]}'),
        cn = {
          SPINNING: "spinning",
          THREE_DOTS: "threeDots"
        },
        rn = e => {
          let a, {
            type: t = cn.SPINNING
          } = e;
          switch (t) {
            case cn.THREE_DOTS:
              a = nn;
              break;
            case cn.SPINNING:
            default:
              a = sn
          }
          return (0, d.jsx)(tn(), {
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
    7019: (e, a, t) => {
      "use strict";
      t.d(a, {
        U: () => s,
        c: () => c
      });
      const s = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store"
        },
        n = [{
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
          } = window, t = a.hostname.substring(0, a.hostname.indexOf(".rockstargames.com")), s = n.findIndex((a => Object.entries(a.sites).findIndex((a => {
            let [s, n] = a;
            return n === t && (e = {
              site: s,
              subDomain: n
            }, !0)
          })) >= 0));
          return {
            ...n[s >= 0 ? s : 0],
            currentSite: e
          }
        }
    },
    436: e => {
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

      function n(e, a) {
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
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var c = s[a] || new Set,
          r = new Set,
          i = new Set;
        for (c.forEach((function(e) {
            i.add(e)
          })); i.size > 0;) {
          var o = i;
          i = new Set, o.forEach((function(e) {
            r.has(e) || (r.add(e), (s[e] || new Set).forEach((function(e) {
              i.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var s = n(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "GetAudioAlbum")
    },
    7944: e => {
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

      function n(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function c(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var c = s[a] || new Set,
          r = new Set,
          i = new Set;
        for (c.forEach((function(e) {
            i.add(e)
          })); i.size > 0;) {
          var o = i;
          i = new Set, o.forEach((function(e) {
            r.has(e) || (r.add(e), (s[e] || new Set).forEach((function(e) {
              i.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var s = n(e, a);
          s && t.definitions.push(s)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.UserGetVote = c(a, "UserGetVote"), e.exports.UserCastVote = c(a, "UserCastVote")
    },
    3260: e => {
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

      function n(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function c(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var c = s[a] || new Set,
          r = new Set,
          i = new Set;
        for (c.forEach((function(e) {
            i.add(e)
          })); i.size > 0;) {
          var o = i;
          i = new Set, o.forEach((function(e) {
            r.has(e) || (r.add(e), (s[e] || new Set).forEach((function(e) {
              i.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var s = n(e, a);
          s && t.definitions.push(s)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesList = c(a, "TinaModulesList"), e.exports.TinaModulesInfo = c(a, "TinaModulesInfo")
    },
    9636: e => {
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

      function n(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function c(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var c = s[a] || new Set,
          r = new Set,
          i = new Set;
        for (c.forEach((function(e) {
            i.add(e)
          })); i.size > 0;) {
          var o = i;
          i = new Set, o.forEach((function(e) {
            r.has(e) || (r.add(e), (s[e] || new Set).forEach((function(e) {
              i.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var s = n(e, a);
          s && t.definitions.push(s)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.UserGetVote = c(a, "UserGetVote"), e.exports.UserCastVote = c(a, "UserCastVote")
    },
    1568: (e, a, t) => {
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
      var n = {};

      function c(e) {
        return e.filter((function(e) {
          if ("FragmentDefinition" !== e.kind) return !0;
          var a = e.name.value;
          return !n[a] && (n[a] = !0, !0)
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
      s.definitions = s.definitions.concat(c(t(3784).definitions)), s.definitions = s.definitions.concat(c(t(8540).definitions));
      var i = {};

      function o(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      s.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          r(e, a), i[e.name.value] = a
        }
      })), e.exports = s, e.exports.NewswireList = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [o(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var s = i[a] || new Set,
          n = new Set,
          c = new Set;
        for (s.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var r = c;
          c = new Set, r.forEach((function(e) {
            n.has(e) || (n.add(e), (i[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = o(e, a);
          s && t.definitions.push(s)
        })), t
      }(s, "NewswireList")
    },
    7108: (e, a, t) => {
      var s = {
        "./left.svg": 2036,
        "./pc.svg": 4892,
        "./ps3.svg": 8779,
        "./ps4.svg": 3120,
        "./ps5.svg": 1864,
        "./right.svg": 4172,
        "./switch.svg": 9016,
        "./x.svg": 8704,
        "./xbox.svg": 8844,
        "./xboxone.svg": 1316,
        "./xboxseriesxs.svg": 1557
      };

      function n(e) {
        var a = c(e);
        return t(a)
      }

      function c(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      n.keys = function() {
        return Object.keys(s)
      }, n.resolve = c, e.exports = n, n.id = 7108
    },
    7876: (e, a, t) => {
      var s = {
        "./cero_a.png": 8508,
        "./cero_b.svg": 4150,
        "./cero_c.svg": 3584,
        "./cero_d.svg": 7732,
        "./cero_rp.png": 7920,
        "./cero_z.svg": 9356,
        "./djctq_10.svg": 9084,
        "./djctq_12.svg": 4380,
        "./djctq_14.svg": 9836,
        "./djctq_16.svg": 6276,
        "./djctq_18.svg": 5384,
        "./djctq_er.svg": 7368,
        "./djctq_l.svg": 2520,
        "./esrb_ao.svg": 6724,
        "./esrb_e.svg": 4372,
        "./esrb_e10plus.svg": 4368,
        "./esrb_m.svg": 5172,
        "./esrb_m_ao.svg": 9044,
        "./esrb_rp.svg": 2672,
        "./esrb_rplm17.svg": 7084,
        "./esrb_t.svg": 5740,
        "./fpb_13.svg": 2656,
        "./fpb_16.svg": 9852,
        "./fpb_18.svg": 396,
        "./fpb_pg.svg": 1177,
        "./grac_12.svg": 8512,
        "./grac_15.svg": 7636,
        "./grac_18.svg": 6884,
        "./grac_a.svg": 2744,
        "./gsrr_0.svg": 1648,
        "./gsrr_12.svg": 332,
        "./gsrr_15.svg": 5132,
        "./gsrr_18.svg": 304,
        "./gsrr_6.svg": 3220,
        "./nmc_12.svg": 9972,
        "./nmc_16.svg": 4200,
        "./nmc_18.svg": 7532,
        "./nmc_21.svg": 192,
        "./nmc_3.svg": 7672,
        "./nmc_7.svg": 9272,
        "./oflc_g.svg": 1732,
        "./oflc_m.svg": 556,
        "./oflc_ma15.svg": 6108,
        "./oflc_pg.svg": 8608,
        "./oflc_r18.svg": 5816,
        "./pegi_12.svg": 9984,
        "./pegi_16.svg": 9068,
        "./pegi_18.svg": 1332,
        "./pegi_3.svg": 8404,
        "./pegi_4.svg": 5036,
        "./pegi_6.svg": 2792,
        "./pegi_7.svg": 880,
        "./pegi_rp.png": 7292,
        "./rars_0.svg": 2568,
        "./rars_12.svg": 1136,
        "./rars_16.svg": 1748,
        "./rars_18.svg": 4556,
        "./rars_6.svg": 5496,
        "./usk_0.svg": 3816,
        "./usk_12.svg": 5168,
        "./usk_16.svg": 9464,
        "./usk_18.svg": 3440,
        "./usk_6.svg": 8448,
        "./usk_rp.svg": 9660,
        "./vaci_rp.png": 2112
      };

      function n(e) {
        var a = c(e);
        return t(a)
      }

      function c(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      n.keys = function() {
        return Object.keys(s)
      }, n.resolve = c, e.exports = n, n.id = 7876
    },
    120: (e, a, t) => {
      var s = {
        "./cero_a.png": 8508,
        "./cero_b.svg": 4150,
        "./cero_c.svg": 3584,
        "./cero_d.svg": 7732,
        "./cero_rp.png": 7920,
        "./cero_z.svg": 9356,
        "./djctq_10.svg": 9084,
        "./djctq_12.svg": 4380,
        "./djctq_14.svg": 9836,
        "./djctq_16.svg": 6276,
        "./djctq_18.svg": 5384,
        "./djctq_er.svg": 7368,
        "./djctq_l.svg": 2520,
        "./esrb_ao.svg": 6724,
        "./esrb_e.svg": 4372,
        "./esrb_e10plus.svg": 4368,
        "./esrb_m.svg": 5172,
        "./esrb_m_ao.svg": 9044,
        "./esrb_rp.svg": 2672,
        "./esrb_rplm17.svg": 7084,
        "./esrb_t.svg": 5740,
        "./fpb_13.svg": 2656,
        "./fpb_16.svg": 9852,
        "./fpb_18.svg": 396,
        "./fpb_pg.svg": 1177,
        "./grac_12.svg": 8512,
        "./grac_15.svg": 7636,
        "./grac_18.svg": 6884,
        "./grac_a.svg": 2744,
        "./gsrr_0.svg": 1648,
        "./gsrr_12.svg": 332,
        "./gsrr_15.svg": 5132,
        "./gsrr_18.svg": 304,
        "./gsrr_6.svg": 3220,
        "./nmc_12.svg": 9972,
        "./nmc_16.svg": 4200,
        "./nmc_18.svg": 7532,
        "./nmc_21.svg": 192,
        "./nmc_3.svg": 7672,
        "./nmc_7.svg": 9272,
        "./oflc_g.svg": 1732,
        "./oflc_m.svg": 556,
        "./oflc_ma15.svg": 6108,
        "./oflc_pg.svg": 8608,
        "./oflc_r18.svg": 5816,
        "./pegi_12.svg": 9984,
        "./pegi_16.svg": 9068,
        "./pegi_18.svg": 1332,
        "./pegi_3.svg": 8404,
        "./pegi_4.svg": 5036,
        "./pegi_6.svg": 2792,
        "./pegi_7.svg": 880,
        "./pegi_rp.png": 7292,
        "./rars_0.svg": 2568,
        "./rars_12.svg": 1136,
        "./rars_16.svg": 1748,
        "./rars_18.svg": 4556,
        "./rars_6.svg": 5496,
        "./usk_0.svg": 3816,
        "./usk_12.svg": 5168,
        "./usk_16.svg": 9464,
        "./usk_18.svg": 3440,
        "./usk_6.svg": 8448,
        "./usk_rp.svg": 9660,
        "./vaci_rp.png": 2112
      };

      function n(e) {
        var a = c(e);
        return t(a)
      }

      function c(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      n.keys = function() {
        return Object.keys(s)
      }, n.resolve = c, e.exports = n, n.id = 120
    },
    7536: (e, a, t) => {
      var s = {
        "./bounty.png": 4132,
        "./collector.png": 660,
        "./moonshiner.png": 1116,
        "./naturalist.png": 1628,
        "./trader.png": 7888
      };

      function n(e) {
        var a = c(e);
        return t(a)
      }

      function c(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      n.keys = function() {
        return Object.keys(s)
      }, n.resolve = c, e.exports = n, n.id = 7536
    },
    2036: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3c6134ba61610ead6af640361535e346.svg"
    },
    4892: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    8779: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg"
    },
    3120: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg"
    },
    1864: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b12e4e9678e7a4ebea34905926feeb90.svg"
    },
    4172: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cf1b78cec82c717ea9c2155ce4093736.svg"
    },
    9016: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg"
    },
    8704: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c453a914f0b049334120adfcba614e5.svg"
    },
    8844: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f74e871585118640ffd9ce881181a176.svg"
    },
    1316: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg"
    },
    1557: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5bd8456deb2338503b8fd44786b5fa07.svg"
    },
    9796: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/44d747ec4a149ad5386114f6b5c60f2d.svg"
    },
    9024: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a29e26aa160e7be7e845708c335b3c39.svg"
    },
    6829: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    },
    7176: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5be68b0895e242db88f00aae46effad7.svg"
    },
    9520: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6054f77c4450b075b6059eda658a510d.svg"
    },
    112: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c577e2612120d70330b797e6ee5487d9.svg"
    },
    9160: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c8ee10e269f42d96c58c1eb016717e1.svg"
    },
    2220: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61f1cfebde0508725354fa6c2bdda0b4.svg"
    },
    5716: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/77896e8c17472d9127fc3a09244bcdec.svg"
    },
    7028: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/941a1141a404ed211f7d23ed36ccee23.svg"
    },
    7256: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04d319f216248f3df7f9727df641b832.svg"
    },
    1284: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e18ef78074a128424a94ab6313dd332.svg"
    },
    1556: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c91f19b5ea19868e280034220acf6740.svg"
    },
    1837: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3d0b47d69ca8bee8a00a608ebd896198.svg"
    },
    4364: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2a7a3f3a2974f306eaf16cbc851622ec.svg"
    },
    388: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c9f8a365923c42d238fc1f94659f4a7.svg"
    },
    5820: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/13287de69dbdd8bdcd042ce6285f2bae.svg"
    },
    8508: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51b141250a4851d7ec3673d88dbd20a.png"
    },
    4150: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7ac89f9e00ded04ef4b2dd3eaf3e8734.svg"
    },
    3584: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f44dd7aad9d6c62e40a11f51252f59b8.svg"
    },
    7732: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/204116b24cd9e9ab4e71af21b3a96179.svg"
    },
    7920: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/676b3908098d8b19f1019ce361af45ec.png"
    },
    9356: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/03ab76c58ed61a83bf035c923dbe32b2.svg"
    },
    9084: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f468aef6f0b5399d5c0f6b2e95b60cc5.svg"
    },
    4380: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b31c79d361cfd92e1a405dbbf4890bd.svg"
    },
    9836: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3689ac97526f00a4537e1b38ec82a074.svg"
    },
    6276: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07f9f9e93ec430813e74cbce545962c4.svg"
    },
    5384: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/608f591c35aff9d47091dd7fe9a8fb13.svg"
    },
    7368: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/198ced82807c854e92e84e23f7434c91.svg"
    },
    2520: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/edf01daa4f0392081705c17a74d8a146.svg"
    },
    6724: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c4dd58f5b5b97796b6c6177de364dd36.svg"
    },
    4372: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/201de0eb81b09ea93aa1aef2a6824b7c.svg"
    },
    4368: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/534078f6307f97ce0d70e0bb885f9d77.svg"
    },
    5172: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f4b0d9409df1e8a420b2118e4e601263.svg"
    },
    9044: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/092865e0ddae5190dc3c0284ee3c21bd.svg"
    },
    2672: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/80dd50a2fa9aae3b5d6effdb2d9c2661.svg"
    },
    7084: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d471eef7883043fdabe1b3ed17a72b3.svg"
    },
    5740: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/35cf853d7882b090b56837bd08127da1.svg"
    },
    2656: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/72e8749316b4d1f52925b95e075e9c24.svg"
    },
    9852: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c2acdad576048f5c48b2ee6a2a2a90a3.svg"
    },
    396: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f52c5ab315a1ff90360e06372c3f2c0.svg"
    },
    1177: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d1f569db6c94b4f81417f62e91759082.svg"
    },
    8512: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fe262661c6667d97f441e045067f4a0f.svg"
    },
    7636: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b457cab77cb82e1c05ad12628414576.svg"
    },
    6884: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c66a857ab4a5f8541cace25e15716b9e.svg"
    },
    2744: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/515f2884036e870905ae53f156692721.svg"
    },
    1648: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a3931a545299e205758648bce29e5c49.svg"
    },
    332: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/05e9f2f27883d4cbabb3d4e4e16c9c74.svg"
    },
    5132: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f2fc4de3decfa0ac007f6cbd91658a9.svg"
    },
    304: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cd57122be57f5e3a9dc4d0a0f2503fb1.svg"
    },
    3220: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d910a48fc0914f58ca80dc0732a7677.svg"
    },
    9972: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e99540df7fd07d75b08a5fbc02d4815.svg"
    },
    4200: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/937b7a0c5a128c39addf2adeba2d2f23.svg"
    },
    7532: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/46a27d8d16855dcc2a217f48243c6d82.svg"
    },
    192: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e5792c85d5a88a0b7c75af087e4c6ee2.svg"
    },
    7672: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4da522682784ded3799c5a6f9f8c213a.svg"
    },
    9272: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/29ea20c333709a952c2eb3a2591d435d.svg"
    },
    1732: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c66fbb7c204e32da80ccb1693d15e00.svg"
    },
    556: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/954d63889440be17e1ebef30b7026369.svg"
    },
    6108: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2eb8777f38cbd4d721261ad736c1f2e7.svg"
    },
    8608: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6079496697e537802f8a0eb5a83d2e94.svg"
    },
    5816: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a19fbf81b03db0fda00839496a3ce5.svg"
    },
    9984: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/129ef1c1a15ffc7afb86ce282e48decb.svg"
    },
    9068: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a5d9ca87a5bd107da9bb33d3d718e8.svg"
    },
    1332: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dabd13175cc0894dcb3f942d3d2dab86.svg"
    },
    8404: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/64d281825da1c782681bcc096d693e32.svg"
    },
    5036: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b43dddd485139df895fc531e79c75e68.svg"
    },
    2792: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c01f38f1051e751caa633d533202873c.svg"
    },
    880: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27a26f477c8db29df4ceec4517c7f42b.svg"
    },
    7292: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a380d3ce353544a356e8ce48f8586804.png"
    },
    2568: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bba2f70e014e82b336a9f80625053089.svg"
    },
    1136: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/85250e8a0e5a5a1209f214423f6ebe43.svg"
    },
    1748: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1a94d5705ae3ddeb4c8c2fde79bfe81.svg"
    },
    4556: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a825976dddc59e33b3ce146ad6cd3d20.svg"
    },
    5496: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/01b0cd4466759aa349ac4036594ab6ae.svg"
    },
    3816: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c699f3b76c15209c8059f02507e11b5.svg"
    },
    5168: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b48e041f1412ff62c8a92dc424b59aa5.svg"
    },
    9464: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07362df5a2671c08b232a97d503cd6bf.svg"
    },
    3440: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c3fe2a9610ca8b42807dfa99073d68b3.svg"
    },
    8448: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/056d3bdf1f300bcb7efa4aebcfc5224d.svg"
    },
    9660: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/278e84e5a41407499c43a30f545da3e8.svg"
    },
    2112: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/703a546f7a5109c1e2af87a212135aad.png"
    },
    4132: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48754c6fc2f75b0554098423f2bda6d1.png"
    },
    660: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e111377ba943e9eefaa9204f77c77093.png"
    },
    1116: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4639a2711d1bca49a87c302784050ee3.png"
    },
    1628: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/898794daaec68a69ef5ec4afaefe1948.png"
    },
    7888: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e77bb0f25a6ea37e8d831b12df9fa3c.png"
    },
    1340: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8787df71c723ebe44f82fd13ed216e09.jpg"
    },
    5148: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61ae357c3bfbabb5d765e9a7c794d08f.png"
    }
  }
]);
//# sourceMappingURL=a4dc92bbc4eaeb95503a8b79c62896bc.js.map