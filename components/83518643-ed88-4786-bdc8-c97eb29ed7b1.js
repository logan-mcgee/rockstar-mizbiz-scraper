! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "83518643-ed88-4786-bdc8-c97eb29ed7b1", e._sentryDebugIdIdentifier = "sentry-dbid-83518643-ed88-4786-bdc8-c97eb29ed7b1")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/components",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_components = self.webpackChunk_rockstargames_components || []).push([
  [92], {
    7020: (e, a, t) => {
      "use strict";
      t.d(a, {
        c: () => m
      });
      var s = t(8200),
        n = t(9416),
        c = t.n(n),
        i = t(1740),
        o = t(5792);
      const r = {
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
        const [_, k] = (0, s.useState)(null);
        return (0, s.useEffect)((() => {
          k(a)
        }), [a]), t || a ? p && _ ? (0, l.jsx)("div", {
          className: r.grid,
          style: {
            "--ordered-list-grid-column": p,
            "--ordered-list-grid-column-mobile": u ?? p
          },
          children: (0, l.jsx)("ol", {
            style: (0, o.safeStyles)(c),
            className: (0, i.classList)(r.itemList, r.noImg, r[n], r[f]),
            children: _.map((e => (0, l.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: d(e.content)
              }
            }, e.content)))
          })
        }) : (0, l.jsx)("ol", {
          style: (0, o.safeStyles)(c),
          className: (0, i.classList)(r.itemList, r.custom, g ? r.noImg : "", n ? r[n] : "", f ? r[f] : "", m ?? ""),
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
        i = t(1740),
        o = t(5792);
      const r = {
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
        const [_, k] = (0, s.useState)(null), b = t ? t.split("_#_") : a;
        return (0, s.useEffect)((() => {
          k(a)
        }), [a]), t || a ? p && _ ? (0, l.jsx)("div", {
          className: r.grid,
          style: {
            "--unordered-list-grid-column": p,
            "--unordered-list-grid-column-mobile": u ?? p
          },
          children: (0, l.jsx)("ul", {
            style: (0, o.safeStyles)(c),
            className: (0, i.classList)(r.itemList, r.noImg, r[n], r[f]),
            children: _.map((e => (0, l.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: d(e.content)
              }
            }, e.content)))
          })
        }) : (0, l.jsx)("ul", {
          style: (0, o.safeStyles)(c),
          className: (0, i.classList)(r.itemList, r.custom, g ? r.noImg : "", n ? r[n] : "", f ? r[f] : "", m ?? ""),
          children: b.map((e => (0, l.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: d(e?.content ?? e)
            }
          }, e?.content)))
        }) : null
      }
    },
    3442: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        A: () => m,
        AudioPlayer: () => h,
        Badge: () => x,
        Brands: () => y,
        Button: () => j,
        ButtonGroup: () => M,
        CalloutSection: () => Y,
        Carousel: () => V,
        ConditionalBlock: () => R,
        CookieAB: () => te,
        CountryInputField: () => ae,
        Cta: () => oe,
        DescriptionArea: () => ve,
        DiscountsBadge: () => je,
        DotLoader: () => we,
        Dropdown: () => Ie,
        Embed: () => Ee,
        ExpandingPlatformButton: () => Oe,
        FadeInContent: () => Ue,
        GameCard: () => s,
        GameSiteHeader: () => Xe,
        Gen9Button: () => T,
        Gen9CoreCarousel: () => Je,
        Grid: () => Me,
        HTMLElement: () => da,
        Hero: () => oa,
        HookStore: () => A,
        ImageWithBadge: () => xa,
        LanguageSelector: () => _a,
        LayeredImage: () => va,
        LoadingAnimation: () => ln,
        MultiSourceImage: () => ge,
        NewswireBlocks: () => Pa,
        NewswireCard: () => Ca,
        NewswireList: () => Ma,
        NewswireRelated: () => Ea,
        NewswireTag: () => Sa,
        OrderedList: () => za.c,
        PackList: () => Ra,
        PackListMenu: () => at,
        Paging: () => nt,
        ParallaxCacheBuster: () => it,
        ParallaxInnerLayer: () => lt,
        ParallaxOuterLayer: () => mt,
        ParallaxWrapper: () => rt,
        ProfileSwitcher: () => n,
        PromoModule: () => Qt,
        Rating: () => as,
        ResponsiveFlexBox: () => ss,
        ResponsiveFlexItem: () => cs,
        ResponsiveGridBox: () => os,
        ResponsiveGridItem: () => ls,
        ResponsiveImg: () => ms,
        ResponsiveSection: () => gs,
        RockstarLogo: () => ps,
        ScrollToTop: () => us,
        ScrollTracker: () => _s,
        SearchBox: () => ks,
        Separator: () => _e,
        Skeleton: () => vs,
        SrcsetImage: () => Na,
        TextFit: () => xe,
        ThumbsGallery: () => Cs,
        TinaModuleFetchNRender: () => Ms,
        TinaWrapper: () => Ls,
        TrackList: () => Ns,
        UnorderedList: () => pe.c,
        UserVote: () => Ps,
        VideoCard: () => c,
        VideoCarousel: () => Vs,
        VideoList: () => Ds,
        Wasted: () => As,
        framer: () => o,
        useTinaModuleFetchByIds: () => Ts,
        withSearchbarErrorBoundary: () => Gs,
        withSimpleErrorBoundary: () => Qe
      });
      var s = {};
      t.r(s), t.d(s, {
        Art: () => He,
        Link: () => We
      });
      var n = {};
      t.r(n), t.d(n, {
        CharacterCard: () => _t,
        Menu: () => Wt,
        MenuButton: () => Kt
      });
      var c = {};
      t.r(c), t.d(c, {
        Art: () => Os,
        Link: () => Rs
      });
      var i = {};
      t.r(i), t.d(i, {
        getVariant: () => tn,
        transitions: () => en,
        variants: () => an
      });
      var o = {};
      t.r(o), t.d(o, {
        Animations: () => i,
        LiteMotion: () => Hs,
        withFadeIn: () => Ks,
        withFadeUp: () => Js
      });
      var r = t(8200),
        l = t(3557),
        d = t(3480);
      const m = e => {
        let {
          children: a,
          to: t = "#",
          alt: s = "",
          autoBlank: n = !1,
          onClick: c = (() => {}),
          ...i
        } = e;
        const o = !/^(https?|mailto):/i.test(t);
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
            ...i,
            children: a
          })
        }
        if (o) return (0, d.jsx)(l.NavLink, {
          title: s,
          to: t,
          onClick: e => c(e),
          ...i,
          children: a
        });
        const r = Object.keys(i).filter((e => !["activeClassName", "key", "end"].includes(e))).reduce(((e, a) => ({
            ...e,
            [a]: i[a]
          })), {}),
          m = i?.target ?? (n ? "_blank" : "_self");
        return "function" == typeof r?.className && delete r.className, (0, d.jsx)("a", {
          href: t,
          ...r,
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
      const _ = {
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
        k = e => {
          let {
            src: a
          } = e;
          return (0, d.jsx)("div", {
            className: _.cover,
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
            setTracksOpen: i,
            trackData: o,
            setTrackId: l,
            trackBounds: m,
            setAutoNext: f
          } = e;
          const p = (0, r.useRef)(null),
            u = (0, r.useRef)(null),
            k = (0, r.useRef)(null),
            [b, v] = (0, r.useState)(null),
            [h, x] = (0, r.useState)(!1),
            y = e => {
              const a = new Date(1e3 * e),
                t = a.getUTCMinutes(),
                s = a.getSeconds();
              return `${t.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`
            };
          return (0, r.useEffect)((() => {
            if (!u.current || !k.current) return;
            const e = () => {
              k.current && u.current && v(k.current.clientWidth > u.current.clientWidth)
            };
            return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e)
          }), [k, u, a]), (0, r.useEffect)((() => {
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
              i = () => {
                e = s.paused, s.pause()
              };
            return t.on("panstart", i), t.on("panleft", n), t.on("panright", n), t.on("panend", c), t.on("tap", n), () => {
              t.off("panstart", i), t.off("panleft", n), t.off("panright", n), t.off("panend", c), t.off("tap", n)
            }
          }), [p.current, a.duration]), (0, r.useEffect)((() => {
            const e = Number(s?.currentTime);
            (t || !isNaN(e) && 0 !== e) && x(!0)
          }), [t, s?.currentTime]), (0, d.jsxs)("div", {
            className: _.controls,
            style: {
              "--track-color": o.color,
              "--track-mix-blend-mode": o.mix_blend_mode,
              "--current-pct": a.current / a.duration
            },
            children: [(0, d.jsx)("div", {
              className: [_.controlsCurrentBg, h ? _.controlsCurrentBgVisible : ""].join(" ")
            }), (0, d.jsx)("div", {
              className: _.controlsTrack,
              ref: u,
              children: (0, d.jsx)("span", {
                className: [_.controlsTrackTitle, b ? _.controlsTrackAnimating : ""].join(" "),
                ref: k,
                children: o.title
              })
            }), (0, d.jsxs)("div", {
              className: _.controlsButtons,
              children: [(0, d.jsx)("div", {
                className: _.controlsPrevTrack,
                onClick: () => {
                  m && (l(m[0]), f(!0), n(!0))
                }
              }), (0, d.jsx)("div", {
                className: [_.controlsPlayPause, t ? _.controlsPlayPausePlaying : ""].join(" "),
                onClick: () => {
                  n(!t)
                }
              }), (0, d.jsx)("div", {
                className: _.controlsNextTrack,
                onClick: () => {
                  m && (l(m[1]), f(!0), n(!0))
                }
              })]
            }), (0, d.jsx)("div", {
              active: c ? "" : null,
              className: _.controlsTrackBurger,
              children: (0, d.jsx)("div", {
                className: _.iconBurger,
                onClick: () => {
                  i(!c)
                }
              })
            }), (0, d.jsxs)("div", {
              className: _.controlsScrub,
              children: [(0, d.jsx)("span", {
                children: y(a.current)
              }), (0, d.jsx)("div", {
                className: _.controlsScrubTrack,
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
            setPlaying: i,
            setAutoNext: o
          } = e;
          return (0, d.jsxs)("div", {
            className: _.tracks,
            children: [(0, d.jsx)("h4", {
              children: "Tracks"
            }), (0, d.jsx)("div", {
              className: _.trackBurger,
              onClick: () => {
                c(!n)
              }
            }), (0, d.jsx)("div", {
              className: _.trackList,
              children: a.map(((e, a) => (0, d.jsxs)("a", {
                style: {
                  "--highlight-color": e.color
                },
                className: t === e.id ? _.trackActive : "",
                onClick: () => {
                  s(e.id), i(!0), o(!0)
                },
                children: [(0, d.jsx)("span", {
                  className: _.trackIndex,
                  children: String(a + 1).padStart(2, "0")
                }), (0, d.jsx)("span", {
                  className: _.trackTitle,
                  children: e.title
                }), (0, d.jsx)("span", {
                  className: _.trackTime,
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
          }), [n, c] = (0, r.useState)(), [i, o] = (0, r.useState)(), [l, m] = (0, r.useState)(), [f, g] = (0, r.useState)(!1), [h, x] = (0, r.useState)(!1), [y, N] = (0, r.useState)(new HTMLAudioElement), [j, S] = (0, r.useState)({
            current: 0,
            duration: 0
          }), [w, C] = (0, r.useState)(!0);
          return (0, r.useEffect)((() => {
            const e = "audio",
              a = a => {
                a?.data?.rockstarAudioPlayerPlayTrackId && (o(a.data.rockstarAudioPlayerPlayTrackId), C(!1), x(!0)), h && a?.data?.attentionBlurredElsewhere && a?.data?.from !== e && x(!1)
              };
            return h && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: e
            }), window.addEventListener("message", a, !1), () => window.removeEventListener("message", a, !1)
          }), [h]), (0, r.useEffect)((() => {
            if (!y) return;
            const e = () => {
                isNaN(y.duration) || S({
                  duration: y?.duration ?? 0,
                  current: y?.currentTime ?? 0
                })
              },
              a = () => {
                w && n && o(n[1])
              };
            return y.addEventListener("loadedmetadata", e), y.addEventListener("timeupdate", e), y.addEventListener("ended", a), () => {
              y.removeEventListener("loadedmetadata", e), y.removeEventListener("timeupdate", e), y.removeEventListener("ended", a)
            }
          }), [y, n, w]), (0, r.useEffect)((() => {
            h && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: "audio"
            })
          }), [h]), (0, r.useEffect)((() => {
            y && (h ? y.play() : y.pause(), g(!1))
          }), [h, y, l?.id]), (0, r.useEffect)((() => {
            if (!i) return;
            const {
              tracks: e
            } = s.audioAlbum, a = s.audioAlbum.tracks.findIndex((e => e.id === i));
            c([e[a - 1]?.id ?? e[e.length - 1].id, e[a + 1]?.id ?? e[0].id]), m(e[a])
          }), [i]), (0, r.useEffect)((() => {
            s && o(s.audioAlbum.tracks[0].id)
          }), [s]), l ? (0, d.jsxs)("div", {
            className: [_.player, _[t], f ? _.tracksOpen : ""].join(" "),
            children: [(0, d.jsx)("audio", {
              ref: e => {
                N(e)
              },
              src: l.mp3_src
            }), (0, d.jsx)(v, {
              tracks: s.audioAlbum.tracks,
              setTrackId: o,
              trackId: i,
              tracksOpen: f,
              setTracksOpen: g,
              setPlaying: x,
              setAutoNext: C
            }), (0, d.jsx)(k, {
              src: l.cover_src
            }), (0, d.jsx)(b, {
              setTrackId: o,
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
            ...i
          } = e;
          const o = [N.button, N[s], a].join(" ");
          return n ? (0, d.jsx)(m, {
            ...i,
            to: n,
            className: o,
            onClick: c ? () => c() : () => {},
            children: t
          }) : (0, d.jsx)("button", {
            ...i,
            type: "button",
            className: o,
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
            labelColor: i = "#000",
            onClick: o,
            secondText: r,
            size: l,
            text: m,
            to: f,
            type: g = ""
          } = e;
          const p = [w.plusButton, w[g] ?? "", w[l] ?? "", w[s] ?? "", t].join(" "),
            u = {
              "--hvr-color": a ?? i,
              "--hvr-bg-color": i ?? a,
              "--hvr-border-color": a ?? i
            },
            _ = (0, d.jsxs)(d.Fragment, {
              children: [c ? (0, d.jsx)("img", {
                src: c,
                alt: ""
              }) : "", (0, d.jsxs)("div", {
                className: w.btnText,
                icon: n,
                children: [m, r ? (0, d.jsx)("span", {
                  children: r
                }) : ""]
              })]
            });
          if (f) {
            if (f.startsWith("http")) {
              const e = f.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, d.jsx)("span", {
                onClick: o ? () => o() : () => {},
                onKeyDown: o,
                className: p,
                role: "button",
                tabIndex: 0,
                children: (0, d.jsx)("a", {
                  href: f,
                  target: e,
                  children: _
                })
              })
            }
            return (0, d.jsx)(I, {
              className: p,
              onClick: o ? () => o() : () => {},
              style: u,
              to: f,
              children: _
            })
          }
          return (0, d.jsx)(C, {
            className: p,
            onClick: o ? () => o() : () => {},
            style: u,
            children: _
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
            children: [(0, d.jsx)(xa, {
              image: a?.image,
              badge: a?.badge ?? a?.image?.badge,
              badgeType: "badge3",
              role: a?.role ?? a?.image?.role,
              splitter: a?.splitter ?? a?.image?.splitter,
              type: a?.type,
              ariaLabel: a?.image?.ariaLabel ?? a.description,
              style: a?.style,
              className: (0, S.classList)(B.img, a?.className)
            }), (a?.title || a?.description) && (0, d.jsx)(ve, {
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
            renderTemplate: i = "standard",
            text: o,
            customSpaceBetween: l = null,
            centerSlides: m = !0,
            centeredSlidesBounds: f = !1
          } = e;
          const [g, p] = (0, r.useState)(0), u = (0, r.useMemo)((() => a && Array.isArray(a) ? a.map((() => (0, E.v4)())) : null), [a]);
          if (!(t && 0 !== t?.length || a)) return null;
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
          return (0, d.jsxs)("div", {
            className: (0, S.classList)(B.deprecatedCarousel, B[i], B[`infinite_${!n}`], a ? B.renderedWithChildren : "", c),
            style: s,
            children: [(0, d.jsxs)(L.wx, {
              loop: !n,
              grabCursor: !0,
              centeredSlides: m,
              centerInsufficientSlides: m,
              slidesPerView: "auto",
              speed: 700,
              breakpoints: _,
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
            }), (o?.title || o?.description) && (0, d.jsx)(ve, {
              item: o
            })]
          })
        };
      var $ = t(5792),
        D = t(2836);
      const A = (0, t(7924).createHooks)(),
        F = e => e.some((e => !e)),
        O = e => {
          let {
            condition: a = null,
            children: t
          } = e;
          const [s, n] = (0, r.useState)(!1), c = (e => {
            const [a] = (0, l.useSearchParams)(), [t, s] = (0, r.useState)(null), n = (0, D.useRockstarUser)(), {
              loggedIn: c
            } = n, {
              currentCharId: i
            } = (0, D.useRockstarUserState)(), o = function(e) {
              let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "gtao";
              return (0, r.useMemo)((() => {
                const s = e?.data?.characters?.[t];
                return "1" === (s?.[a]?.stats?.overview?.hasGtaPlus?.value ?? "0")
              }), [e, t, a])
            }(n, i);
            return (0, r.useEffect)((() => {
              const t = "true" === a.get("conditionPreview");
              if (!e?.length > 0) return;
              A.applyFilters("preview_conditions", e);
              const n = [];
              return e.forEach((e => {
                const {
                  value: s
                } = e;
                if (t) return "true" === a.get(s) ? (n.push(!0), !0) : (n.push(!1), !1);
                if (F(n)) return !1;
                switch (s) {
                  case "user:is:loggedIn":
                    n.push(!0 === c);
                    break;
                  case "user:not:loggedIn":
                    n.push(!1 === c);
                    break;
                  case "user:is:gtaPlus":
                    n.push(!0 === o);
                    break;
                  case "user:not:gtaPlus":
                    n.push(!1 === o);
                    break;
                  default:
                    n.push(!1)
                }
                return null
              })), s(!F(n)), () => {}
            }), [a, e, o, n, c]), t
          })(a);
          return (0, r.useEffect)((() => {
            n(c)
          }), [c]), (0, r.useMemo)((() => s ? t : null), [s])
        },
        R = (0, $.withTranslations)((e => {
          let {
            children: a
          } = e;
          return r.Children.map(r.Children.toArray(a), (e => (0, d.jsx)(O, {
            ...e?.props
          })))
        }));
      var U = t(2032),
        G = t(7944);
      const H = e => {
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
        W = {
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
        q = e => {
          let {
            foreign_id: a,
            foreign_type: t
          } = e;
          const {
            track: s
          } = (0, D.useGtmTrack)(), {
            refetch: n
          } = (0, p.useQuery)(G.UserGetVote, {
            skip: !0
          }), [c] = (0, p.useMutation)(G.UserCastVote), [i, o] = (0, r.useState)(null), l = (0, r.useCallback)((e => {
            (async () => {
              if (e === i && null !== i) o(null);
              else {
                o(e), s({
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
          }), [a, t, i]);
          return (0, r.useEffect)((() => {
            a && t && (async () => {
              const e = await n({
                foreignId: a,
                foreignType: t
              });
              o(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [a, t]), (0, d.jsxs)("div", {
            className: W.calloutVoteForm,
            children: [(0, d.jsx)("button", {
              "aria-label": "upvote",
              className: [W.upvote, W.voteButton, i ? W.active : ""].join(" "),
              name: "upvote",
              onClick: () => l(!0),
              type: "button"
            }), (0, d.jsx)("button", {
              "aria-label": "downvote",
              className: [W.downvote, W.voteButton, !1 === i ? W.active : ""].join(" "),
              name: "downvote",
              onClick: () => l(!1),
              type: "button"
            })]
          })
        },
        X = e => {
          let {
            action_text: a,
            link: t,
            trackingData: s
          } = e;
          const {
            track: n
          } = (0, D.useGtmTrack)();
          return (0, d.jsx)("a", {
            href: t,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, d.jsxs)("button", {
              className: W.calloutLink,
              type: "button",
              onClick: s ? () => n({
                ...s
              }) : () => {},
              children: [a, (0, d.jsx)(H, {
                className: W.calloutLinkIcon
              })]
            })
          })
        },
        K = e => {
          let {
            helperText: a,
            linkText: t,
            link: s,
            trackingData: n
          } = e;
          const {
            track: c
          } = (0, D.useGtmTrack)();
          return (0, d.jsxs)("div", {
            className: W.actionFooter,
            children: [a, t && " ", t && (0, d.jsx)("a", {
              href: s ?? "",
              onClick: () => c({
                ...n
              }),
              children: t
            })]
          })
        },
        Y = (0, $.withTranslations)((e => {
          let {
            header: a,
            subheader: t,
            type: s,
            action_text: n,
            link: c,
            foreign_id: i = document.location.pathname,
            foreign_type: o = "url",
            className: l = "",
            actionFooterHelperText: m,
            actionFooterLinkText: f,
            actionFooterLink: g,
            trackingData: p = {},
            actionFooterLinkTrackingData: u = {},
            t: _,
            ...k
          } = e;
          const {
            loggedIn: b
          } = (0, D.useRockstarUser)(), {
            track: v
          } = (0, D.useGtmTrack)(), h = `${document.location.origin}/auth/sc-auth-login?returnUrl=${window.location.pathname}`, {
            ref: x,
            inView: y
          } = (0, U.useInView)({
            threshold: .6
          }), [N, S] = (0, r.useState)(!1);
          let w;
          if ((0, r.useEffect)((() => {
              y && !N && (v({
                event: "page_section_impression",
                event_action: "impression",
                event_category: "page_section",
                event_label: "callout section",
                element_placement: `callout section - ${k?.sectionName??k?._memoq?.header}`
              }), S(!0))
            }), [y]), !a && !t) return null;
          switch (s) {
            case "vote":
              if (!b) {
                w = (0, d.jsx)(j, {
                  to: h,
                  className: W.calloutButton,
                  onClick: p ? () => v({
                    ...p
                  }) : () => {},
                  children: "Log In"
                });
                break
              }
              w = (0, d.jsx)(q, {
                foreign_id: i,
                foreign_type: o
              });
              break;
            case "button":
              n && c && (w = (0, d.jsx)(j, {
                to: c,
                className: W.calloutButton,
                onClick: p ? () => v({
                  ...p
                }) : () => {},
                children: n
              }));
              break;
            case "link":
              n && c && (w = (0, d.jsx)(X, {
                action_text: n,
                link: c,
                trackingData: p
              }));
              break;
            default:
              w = null
          }
          return (0, d.jsx)("div", {
            className: `${W.calloutContainer} ${l||""}`,
            ref: x,
            children: (0, d.jsxs)("div", {
              className: W.calloutSection,
              children: [(0, d.jsxs)("div", {
                className: [W.calloutHeaders, w ? W.calloutHeaderMargins : ""].join(" "),
                children: [a && (0, d.jsx)("h2", {
                  className: W.calloutHeader,
                  children: _(a)
                }), t && (0, d.jsx)("h3", {
                  className: W.calloutSubheader,
                  children: _(t)
                })]
              }), (0, d.jsxs)("div", {
                className: W.actionBlock,
                children: [w, m && (0, d.jsx)(K, {
                  helperText: m,
                  linkText: f,
                  link: g,
                  trackingData: u
                })]
              })]
            })
          })
        }));
      var Q = t(1272),
        Z = t.n(Q),
        J = t(6776),
        ee = t.n(J);
      const ae = e => {
          let {
            isMulti: a,
            allowSelectAll: t,
            label: s,
            miscProps: n
          } = e;
          const [c, i] = (0, r.useState)(""), o = (0, r.useMemo)((() => ee()().getData()), []);
          return (0, d.jsx)(Z(), {
            unstyled: !0,
            value: c,
            isMulti: a,
            allowSelectAll: t,
            options: o,
            placeholder: s,
            onChange: e => {
              return a = e?.target?.value, void i(a);
              var a
            },
            classNamePrefix: "country-select",
            ...n
          })
        },
        te = e => {
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
            i = new URLSearchParams(window.location.search).get(a);
          return i && ((e, a) => {
            e && a && (document.cookie = `${e}=${a}; domain=${(()=>{const e=window.location.hostname.split(".");return e.slice(e.length-2).join(".")})()}; path=/;`)
          })(a, i), c === t || i === t ? s : n
        },
        se = {
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
        ne = e => se[e] || null,
        ce = {
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
        ie = e => {
          let {
            platform: a = ""
          } = e;
          const t = a ? ne(a) : null,
            s = t ? (0, d.jsx)("img", {
              className: ce.platformIcon,
              src: t,
              alt: "Platform Icon"
            }) : null;
          return (0, d.jsx)("span", {
            className: [ce.btnContent, ce.platformButton].join(" "),
            children: s
          })
        },
        oe = e => {
          let {
            children: a,
            href: t,
            style: s,
            content: n,
            variant: c = null,
            icon: i,
            iconPosition: o = "none",
            iconStyle: m,
            badge: f,
            badgeStyle: g,
            platformItem: p,
            gtm: u = {},
            disabled: _,
            className: k
          } = e;
          const {
            track: b
          } = (0, D.useGtmTrack)(), v = (0, $.useDataLayer)(), h = n ?? a, x = `Redirect to ${t}`, y = (0, r.useMemo)((() => {
            const e = window.location.hostname;
            let a;
            try {
              a = new URL(t)?.hostname
            } catch (t) {
              a = e
            }
            return e === a
          }), [t]), N = (0, r.useCallback)((() => {
            _ || b({
              event: "cta_other",
              ...v,
              ...u,
              link_url: t ?? void 0,
              text: h ?? void 0
            })
          }), [u, t, v]), j = () => i ? (0, d.jsx)("span", {
            className: [ce.icon, `icon-${o}`].join(" "),
            style: m,
            children: (0, d.jsx)("img", {
              className: ce.btnIcon,
              src: ne(i),
              alt: `${i} icon`
            })
          }) : null;
          return (0, d.jsx)(l.NavLink, {
            to: t,
            target: y ? "_self" : "_blank",
            className: [ce.cta, "platform" === c && p ? ce[p] : "", _ ? ce.disabled : "", k].join(" "),
            style: s,
            "data-variant": c,
            onClick: N,
            disabled: _,
            "aria-label": x,
            children: "platform" === c && p ? (0, d.jsx)(ie, {
              platform: p
            }) : (0, d.jsxs)("div", {
              className: ce.btnContent,
              children: ["left" === o && j(), (0, d.jsx)("span", {
                children: h
              }), "right" === o && j(), f ? (0, d.jsx)("span", {
                className: ce.badge,
                style: g,
                children: f
              }) : null]
            })
          })
        };
      var re = t(5652);
      const le = "rockstargames-componentsf6ed43b225fde028df4ad1be1f6cf9b2",
        de = "rockstargames-componentscadcad87be7ddfa9f93a8d7e56c70c27",
        me = "rockstargames-componentsb4a61261f9b92ee9f88bc262c25b8db5",
        fe = e => {
          let {
            alt: a,
            className: s,
            src: n,
            style: c
          } = e;
          const [i, o] = (0, $.usePreloadImg)(n);
          let r = n;
          !1 === i && (s === me && (r = t(5148)), r = t(1340));
          const {
            width: l,
            height: m
          } = o, f = {
            "--aspect-ratio": Number.isNaN(l / m) ? "" : l / m,
            ...c
          };
          return (0, d.jsx)("img", {
            src: r,
            className: s ?? "",
            alt: a,
            style: f
          })
        },
        ge = e => {
          let {
            className: a,
            style: s = {},
            image: n = {},
            imageStyle: c = {}
          } = e, {
            alt: i,
            src: o
          } = (0, re.useImageParser)(n);
          return o.desktop || o.mobile || (i = "placeholder", o = {
            mobile: t(5148),
            desktop: t(1340)
          }), (0, d.jsx)("div", {
            className: n.frame ? `${n.frame} ${le}` : le,
            style: s,
            children: o?.desktop && o?.mobile ? (0, d.jsxs)(d.Fragment, {
              children: [(0, d.jsx)(fe, {
                style: {
                  ...c,
                  ...n?.style
                },
                src: o.desktop,
                alt: i,
                className: a ? `${a} ${de}` : de
              }), (0, d.jsx)(fe, {
                style: {
                  ...c,
                  ...n?.style
                },
                src: o.mobile,
                alt: i,
                className: a ? `${a} ${me}` : me
              })]
            }) : (0, d.jsx)(fe, {
              style: {
                ...c,
                ...n?.style
              },
              src: o?.desktop ?? o?.mobile,
              alt: i,
              className: a
            })
          })
        };
      var pe = t(4004);
      const ue = {
          hr: "rockstargames-componentsf8a3b2c8f2a22335f6e3376d656ca4fc",
          redLine: "rockstargames-componentsaf9bbd6f886f5a7006a7627cbb6e580a",
          gtao: "rockstargames-componentsba2d02287a5ca877fe016e8d0d2a6918"
        },
        _e = e => {
          let {
            style: a,
            className: t = "",
            type: s
          } = e;
          return (0, d.jsx)("div", {
            style: a,
            className: [ue.hr, ue[s], t].join(" ")
          })
        },
        ke = "rockstargames-componentsf0975df7973ad18b515ce054411ab11d",
        be = e => {
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
        ve = e => {
          let {
            item: a,
            className: t = ""
          } = e;
          return (0, d.jsxs)("div", {
            className: (0, S.classList)("rockstargames-componentsfd0d7e84a734f6a4d9774b75dd083634", t),
            children: [a.title && (0, d.jsx)(be, {
              to: a?.href ?? a?.to,
              children: (0, d.jsx)("h3", {
                children: a.title
              })
            }), Array.isArray(a?.description?.content) ? a.description.content?.map(((e, a) => e?.unorderedList ? (0, d.jsx)(pe.c, {
              columns: e.unorderedList.columns ?? null,
              style: {
                "--unordered-list-padding": "var(--grid-gap-static-sm)",
                "--unordered-list-margin-bottom": ".5rem"
              },
              noImg: !0,
              list: e.unorderedList.list
            }, a) : e?.image ? (0, d.jsx)(ge, {
              image: e.image,
              className: e?.className,
              ariaLabel: e.image?.ariaLabel
            }, a) : e?.separator ? (0, d.jsx)("div", {
              style: {
                margin: `${e.separator.spacing} 0`
              },
              children: (0, d.jsx)(_e, {})
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
      var he = t(6428);
      const xe = e => {
          let {
            children: a,
            ...t
          } = e;
          const [s, n] = (0, r.useState)(!1);
          return (0, d.jsx)(he.Textfit, {
            ...t,
            onReady: () => {
              document.fonts.ready.then((() => {
                n(!0)
              }))
            },
            children: a
          })
        },
        ye = {
          badge: "rockstargames-componentsb255ec6ba1899d9b47851a077d480563",
          badgeSizeUpdate: "rockstargames-componentsf437aab1239e8cecc4e0626335d35778",
          badge2: "rockstargames-componentsffd14a47d0321c6013c06040fd382014",
          badge3: "rockstargames-componentsbc6eb2cd59bc5c25b101f4cc87538d37"
        },
        Ne = e => {
          let {
            wrapper: a,
            children: t,
            role: s,
            splitter: n
          } = e;
          return n || s ? a(t) : t
        },
        je = e => {
          let {
            badge: a,
            badgeType: s,
            role: n,
            splitter: c
          } = e;
          const i = [];
          c ? a.split(c).map(((e, a) => i.push(e))) : i.push(a);
          let o = 100;
          return 2 == i.length && i[1].length < 4 && "off" !== i[1].toLowerCase() && 45, (0, d.jsxs)(Ne, {
            splitter: c,
            role: n,
            wrapper: e => (0, d.jsx)("div", {
              className: `${ye.badge} ${s?ye[s]:""} `,
              children: e
            }),
            children: [(0, d.jsx)(d.Fragment, {
              children: n && (0, d.jsx)(ge, {
                image: {
                  alt: n,
                  desktop: t(7536)(`./${n}.png`)
                }
              })
            }), (0, d.jsx)(xe, {
              className: `${c||n?"":ye.badge} ${s?ye[s]:""}`,
              min: 8,
              max: 1e3,
              mode: c || n ? "single" : "multi",
              children: i[0]
            }), (0, d.jsx)(d.Fragment, {
              children: i.shift() && c && i.length >= 1 && (0, d.jsx)(xe, {
                min: 8,
                max: 1e3,
                mode: "single",
                forceSingleModeWidth: !0,
                children: i.join(" ")
              })
            })]
          }, "badge-wrapper")
        },
        Se = "rockstargames-componentse59ae95c65bdeb501f86807cb3bd0939",
        we = e => {
          let {
            color: a
          } = e;
          return (0, d.jsxs)("div", {
            className: "rockstargames-componentsbb9ff64a38e9b92229c0e2343a9a0b28",
            style: {
              "--loader-color": a
            },
            children: [(0, d.jsx)("div", {
              className: Se
            }), (0, d.jsx)("div", {
              className: Se
            }), (0, d.jsx)("div", {
              className: Se
            })]
          })
        },
        Ce = {
          dropdownWrapper: "rockstargames-componentsb775232124e9901acb9b5c823beba64f",
          items: "rockstargames-componentscaa34ae3ff26d0c50fe1c3bca2294d26",
          open: "rockstargames-componentsa7c9b4acbd2af6d4589f08854adfca3e",
          opener: "rockstargames-componentsca6664cb672281a5037835ba0251cd53",
          secondary: "rockstargames-componentscdbe59933dd2f6ffac6d1aefd76cfa71"
        },
        Ie = e => {
          let {
            children: a,
            className: t,
            title: s
          } = e;
          const [n, c] = (0, r.useState)(!1);
          return (0, d.jsxs)("div", {
            className: [Ce.dropdownWrapper, n ? Ce.open : "", void 0 !== t ? t : ""].join(" "),
            children: [(0, d.jsx)("button", {
              className: Ce.opener,
              onClick: () => c(!n),
              children: s
            }), (0, d.jsx)("div", {
              className: Ce.items,
              onClick: () => c(!1),
              children: a
            })]
          })
        };
      var Te = t(5356);
      const Me = e => {
          let {
            children: a,
            context: t = null,
            game: s,
            image: n = {},
            style: c = {},
            template: i = null,
            theme: o = null,
            reversedOnMobile: r = !1,
            className: l = "",
            id: m = null
          } = e;
          const f = (0, re.useImageParser)(n),
            g = {
              ...c
            };
          if (f?.src?.desktop) {
            const e = "var(--grid-background-repeat, no-repeat)",
              a = "var(--grid-background-position, center)/var(--grid-background-size, cover)";
            g.background = `url(${f?.src?.desktop}) ${e} ${a}`
          }
          return (0, d.jsx)("div", {
            id: m,
            className: (0, Te.classList)("rockstargames-componentsc66ba86806f14d412203f27b13204c61", r ? "rockstargames-componentsda2f0f78b942fbdc0b92617629d4d499" : "", l),
            "data-game": "community" === i ? null : s,
            style: (0, $.safeStyles)(g),
            "data-context": t,
            "data-template": i,
            "data-theme": o,
            children: a
          })
        },
        Le = e => {
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
        Ee = e => {
          let {
            componentTitle: a,
            type: t,
            items: s
          } = e;
          return s?.length ? (0, d.jsx)("div", {
            className: "rockstargames-componentse1282836fd9646f998af6d71740d8973",
            type: t,
            children: (0, d.jsxs)(Me, {
              children: [a && (0, d.jsx)("h3", {
                children: a
              }), (0, d.jsx)(Me, {
                className: "rockstargames-componentsb2a9e47e4cfa6fb773f4367d3fdfdffb",
                children: s.map(((e, a) => {
                  return e?.embed ? (0, d.jsx)(Le, {
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
      var Be = t(244);
      const Pe = {
          type: "spring",
          stiffness: 650,
          damping: 45
        },
        ze = {
          ease: "easeOut",
          duration: .9,
          delay: .3
        },
        Ve = {
          open: {
            opacity: 0,
            transition: {
              ease: "easeOut",
              duration: .3
            }
          },
          closed: {
            opacity: 1,
            transition: ze
          }
        },
        $e = {
          open: {
            opacity: 1,
            display: "grid",
            height: "auto",
            transition: {
              opacity: ze,
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
              height: Pe
            },
            transitionEnd: {
              display: "none"
            }
          }
        },
        De = {
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
            transition: Pe,
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
          ps: "rockstargames-componentsc00b8026e2ae29b8dfb75107bed561d4",
          ps4: "rockstargames-componentsa24a87c48aefd424c971235fc09da149",
          ps5: "rockstargames-componentsd48ac9c32e2500ecfe1db1733e0b3fea",
          pc: "rockstargames-componentsf95ce6a4282a1f69245aac2e0892d171",
          switch: "rockstargames-componentsc07ece91333a7bf5b4c417fbd3f8ac9e",
          buttonText: "rockstargames-componentsba10eba33247b3750338627fc88fb9d3"
        },
        Fe = e => {
          let {
            buttonText: a = "",
            link: s = "",
            platform: n = "",
            target: c = null,
            onClick: i
          } = e;
          const o = c ?? (s.startsWith(document.location.origin) ? "_self" : "_blank"),
            r = [Ae.platformButton, Ae[n]].join(" "),
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
            onClick: i,
            onKeyDown: i,
            role: "link",
            tabIndex: 0,
            children: (0, d.jsx)("a", {
              href: s,
              className: r,
              target: o,
              children: f
            })
          }) : (0, d.jsx)(l.NavLink, {
            className: r,
            onClick: i,
            to: s,
            children: f
          })
        },
        Oe = e => {
          let {
            buttonText: a = "Subscribe",
            children: s,
            platformsAndLinks: n = [],
            trackingType: c = "buy",
            trackingParent: i,
            target: o = null,
            trackingOId: l = null
          } = e;
          const [m, f] = (0, r.useState)(!1), {
            track: g
          } = (0, D.useGtmTrack)();
          return (0, d.jsxs)("div", {
            className: Ae.container,
            children: [(0, d.jsx)(Be.motion.div, {
              className: Ae.content,
              animate: m ? "open" : "close",
              variants: Ve,
              children: s
            }), (0, d.jsxs)(Be.motion.div, {
              onClick: () => {
                f(!m), m || g("select_platform" === c ? {
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
                  o_id: l,
                  text: a?.toLowerCase()
                } : {
                  event: "cta_buy",
                  event_action: "buy",
                  event_category: "cta",
                  event_label: i,
                  text: a?.toLowerCase() ?? "subscribe"
                })
              },
              className: Ae.unexpandedButton,
              animate: m ? "open" : "closed",
              variants: De,
              initial: !1,
              children: [(0, d.jsx)(Be.motion.div, {
                className: Ae.buttonText,
                "data-expanded": m,
                children: "string" == typeof a ? a : "Subscribe"
              }), (0, d.jsxs)(Be.motion.div, {
                className: Ae.expandedArea,
                animate: m ? "open" : "closed",
                variants: $e,
                initial: !1,
                children: [(0, d.jsx)("img", {
                  className: Ae.closeButton,
                  onClick: () => f(!1),
                  onKeyDown: e => {
                    f(!1)
                  },
                  src: t(8704),
                  alt: "Close",
                  role: "button"
                }), (0, d.jsx)("div", {
                  className: Ae.platformButtons,
                  children: n.length ? n.map((e => (0, d.jsx)(Fe, {
                    buttonText: e.buttonText ?? "",
                    link: e.href,
                    platform: e.platform,
                    onClick: () => (e => {
                      let {
                        href: a,
                        platform: t
                      } = e;
                      g({
                        element_placement: i,
                        event: "cta_store_link",
                        event_action: "store_link",
                        event_category: "cta",
                        event_label: "expanding platform button",
                        link_url: a,
                        text: t
                      })
                    })(e),
                    target: o
                  }, `${e.key}-${e.href}-${e.platform}`))) : ""
                })]
              })]
            })]
          })
        },
        Re = {
          animateBox: "rockstargames-componentsbdeffede001e78dee0b5045fcf215759",
          fadeArea: "rockstargames-componentse60c0d0b8a412ef87a25bcff0601d934",
          visible: "rockstargames-componentsf1026e3be9b17c93264a95314e011e26",
          barGrow: "rockstargames-componentsddce7c10c011f4c8073855dbee51c6db",
          bar: "rockstargames-componentse68b81a34b39281b39ac976917124293",
          animateMe: "rockstargames-componentsb5f3875daeee53716994ff4a15d4513e"
        },
        Ue = e => {
          let {
            children: a,
            style: t
          } = e;
          const s = (0, r.useRef)(null);
          return (0, r.useEffect)((() => {
            new IntersectionObserver((e => {
              e.forEach((e => {
                e.isIntersecting && e.target.classList.add([Re.visible])
              }))
            })).observe(s?.current)
          }), []), (0, d.jsx)("div", {
            style: t,
            className: [Re.fadeArea].join(" "),
            ref: s,
            children: a
          })
        },
        Ge = {
          img: "rockstargames-componentsd28fb79514f182557a4adcdc0ae3cd4d",
          startAnimation: "rockstargames-componentsce6df99c485041bc3a86c61896052b72"
        },
        He = e => {
          let {
            imgSrc: a,
            title: t
          } = e;
          const [s] = (0, $.usePreloadImg)(a);
          return (0, d.jsx)("div", {
            role: "img",
            "aria-label": t,
            className: [Ge.img, s ? Ge.startAnimation : ""].join(" "),
            style: {
              backgroundImage: `url(${a})`
            }
          })
        },
        We = e => {
          let {
            game: a,
            to: t
          } = e;
          const {
            fob_640: s,
            site_in_rockstar: n = !1,
            title_slug: c
          } = a;
          let i = c;
          "V" === c && (i = "gta-v"), "GTAOnline" === c && (i = "gta-online"), "undeadnightmare" === c && (i = "reddeadredemption");
          const o = t ?? `${n?"":"/games"}/${i}`;
          return (0, d.jsx)(m, {
            "data-gtm-category": "Games",
            "data-gtm-action": "Game Click-through",
            "data-gtm-label": c,
            "data-testid": `${c}-gamecard`,
            to: o,
            target: "_self",
            className: "rockstargames-componentsead163175b3ecbafda6260fc8bfd88b2",
            children: (0, d.jsx)(He, {
              imgSrc: s,
              title: a.title
            })
          })
        },
        qe = {
          gameSiteHeader: "rockstargames-componentsf27c38ae3aaaa656366568be7a7680ff",
          activeNavItem: "rockstargames-componentsf3ad0db7601d2e52de4a89b2a46fb74f",
          navHidden: "rockstargames-componentsce1c0d4ba324740f8cb3d7794e67b9cf",
          navContent: "rockstargames-componentsaba1d4335897c4bacfa0f4c91770e442",
          headerNavOpen: "rockstargames-componentse37fa9b33a9d84c54144937517c6461c",
          headerLogo: "rockstargames-componentsf7a6ef451ea21d9af97db1d190b2e955",
          bg: "rockstargames-componentsdbcbd0c4304ae2e3ee6126812fb4ee94"
        },
        Xe = e => {
          let {
            buttonText: a = null,
            gameOverrideStyles: t,
            navLinks: s,
            cta: n = "",
            game: c
          } = e;
          const [i, o] = (0, r.useState)(!1), l = (0, p.useMutateState)(), {
            navHidden: m
          } = (0, p.useState)();
          return (0, r.useEffect)((() => {
            l({
              gameSiteNavOpen: i
            })
          }), [i]), (0, r.useEffect)((() => {
            const e = () => {
              o(!1)
            };
            return document.addEventListener("click", e), () => document.removeEventListener("click", e)
          }), []), (0, d.jsxs)("header", {
            "data-game": c,
            className: [qe.gameSiteHeader, i ? qe.headerNavOpen : "", m ? qe.navHidden : "", t.gameSiteHeader, i ? t.headerNavOpen : ""].join(" "),
            children: [(0, d.jsx)("button", {
              className: [qe.headerLogo, t.headerLogo].join(" "),
              onClick: e => {
                o(!i), e.nativeEvent.stopImmediatePropagation()
              },
              type: "button",
              "aria-label": "Open Game Site Nav",
              dangerouslySetInnerHTML: {
                __html: a
              }
            }), (0, d.jsx)("div", {
              className: qe.bg
            }), (0, d.jsx)("nav", {
              children: (0, d.jsx)("div", {
                className: qe.navContent,
                children: s
              })
            }), n]
          })
        };
      var Ke = t(1403);
      class Ye extends r.Component {
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
      const Qe = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return function(t) {
            return (0, d.jsx)(Ye, {
              header: a,
              children: (0, d.jsx)(e, {
                ...t
              })
            })
          }
        },
        Ze = e => {
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
        Je = Qe((e => {
          let {
            description: a,
            slideChildren: t,
            size: s,
            title: n,
            customSlidesPerView: c = null,
            customSpaceBetween: i = null,
            slideClass: o,
            style: l,
            className: m,
            cardSizeBreakpoints: f = {},
            customAspectRatio: g,
            titleBadge: p
          } = e;
          const {
            track: u
          } = (0, D.useGtmTrack)(), _ = (0, r.useRef)(null), k = (0, r.useRef)(null), b = (0, r.useRef)(null), [v, h] = (0, r.useState)(null), [x, y] = (0, r.useState)(!1), [N, j] = (0, r.useState)(null), [w, C] = (0, r.useState)({}), [I, T] = (0, r.useState)(), {
            ref: M,
            inView: E
          } = (0, U.useInView)({
            threshold: .6
          }), [B, P] = (0, r.useState)(!1), [z, V] = (0, r.useState)(null), [$, A] = (0, r.useState)(!1);
          (0, r.useEffect)((() => {
            const e = () => {
              A(window.innerWidth < 1024)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []);
          const F = {
            0: {
              spaceBetween: i ?? 16
            },
            1024: {
              spaceBetween: i ?? 18
            },
            1920: {
              spaceBetween: i ?? 20
            },
            2560: {
              spaceBetween: i ?? 22
            }
          };
          (0, r.useEffect)((() => {
            if (!_.current) return;
            const e = () => {
              if (_.current) {
                const e = c || Number(window.getComputedStyle(_.current).getPropertyValue("--slides-per-view")),
                  a = c ? 1 : Number(window.getComputedStyle(_.current).getPropertyValue("--slides-per-view-multiplier"));
                j(e * a)
              }
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [_, c]), (0, r.useEffect)((() => {
            if (!t) return;
            let e = !1;
            t.forEach((a => {
              "cover-card" === a?.props?.tina?.payload?.meta?.type && (e = !0, V(a))
            })), P(e);
            const a = t.map(((e, a) => "cover-card" === e?.props?.tina?.payload?.meta?.type && $ ? null : (0, d.jsx)(L.Ky, {
              className: "rockstargames-componentse725cd3522d4e81abc03576ceef987fa",
              onFocus: () => R(a),
              children: e
            }, Symbol(a).toString())));
            h(a)
          }), [t, $]), (0, r.useEffect)((() => {
            T({
              nextEl: b.current,
              prevEl: k.current
            })
          }), [b, k]), (0, r.useEffect)((() => {
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
          const R = e => {
            w.slideTo(e)
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
            ref: _,
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
                  }), (0, d.jsx)(Ze, {
                    prevRef: k,
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
              modules: [Ke._2],
              breakpoints: F,
              slideClass: (0, S.classList)("swiper-slide", o),
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
        ea = {
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
        aa = {
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
        ta = {
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
        sa = e => {
          let {
            title: a = "",
            mobileImg: t,
            desktopImg: s
          } = e;
          const n = (0, S.useGetCdnSource)(t ?? null),
            c = (0, S.useGetCdnSource)(s ?? n);
          return (0, d.jsx)("div", {
            className: ea.shard,
            style: {
              "--background-image-mobile": `url(${n})`,
              "--background-image-desktop": `url(${c})`
            },
            children: (0, d.jsx)("h5", {
              children: a
            })
          })
        },
        na = e => {
          let {
            title: a = "Membership Rewards",
            shards: t
          } = e;
          const [s, n] = (0, r.useState)(null);
          return (0, r.useEffect)((() => {
            t && n(t.reduce(((e, a) => {
              if (!a?.shardImg) return e;
              const {
                title: t,
                shardImg: s
              } = a, {
                mobile: n,
                desktop: c
              } = s;
              return e.push((0, d.jsx)(sa, {
                title: t,
                mobileImg: n?.full_src,
                desktopImg: c?.full_src
              })), e
            }), []))
          }), [t]), s ? (0, d.jsx)("div", {
            className: ea.shardsCarousel,
            children: (0, d.jsx)(Je, {
              title: a,
              slideChildren: s,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        ca = e => {
          let {
            animated: a = !1,
            ctas: t = [],
            description: s,
            expandingButtonLabel: n = "Subscribe",
            title: c
          } = e;
          const [i, o] = (0, r.useState)([]), [l, m] = (0, r.useState)([]);
          return (0, r.useEffect)((() => {
            o(t.reduce(((e, a) => a.isInExpandingButton ? (e.push({
              href: a.href,
              platform: a.platform,
              buttonText: a.buttonText
            }), e) : e), [])), m(t.reduce(((e, a) => (a.isInExpandingButton || e.push({
              icon: a.platform ? a.platform : "",
              title: a.buttonText,
              to: a.href
            }), e)), []))
          }), t), t.length ? i.length ? (0, d.jsx)(Be.motion.div, {
            variants: a ? ta : void 0,
            children: (0, d.jsxs)(Oe, {
              buttonText: n,
              platformsAndLinks: i,
              children: [(0, d.jsxs)(Be.motion.div, {
                className: ea.descriptions,
                variants: a ? ta : void 0,
                children: [(0, d.jsx)("h2", {
                  dangerouslySetInnerHTML: {
                    __html: c
                  }
                }), (0, d.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: s
                  }
                })]
              }), !!l && !!l.length && (0, d.jsx)(Be.motion.div, {
                variants: ta,
                children: (0, d.jsx)(M, {
                  buttons: l,
                  className: ea.buttonGroup
                })
              })]
            })
          }) : (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsxs)(Be.motion.div, {
              className: ea.descriptions,
              variants: a ? ta : void 0,
              children: [(0, d.jsx)("h2", {
                dangerouslySetInnerHTML: {
                  __html: c
                }
              }), (0, d.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: s
                }
              })]
            }), !!l && !!l.length && (0, d.jsx)(Be.motion.div, {
              variants: ta,
              children: (0, d.jsx)(M, {
                buttons: l,
                className: ea.buttonGroup
              })
            })]
          }) : (0, d.jsxs)(Be.motion.div, {
            className: ea.descriptions,
            variants: a ? ta : void 0,
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
        ia = e => {
          let {
            animated: a = !1,
            brands: t = [],
            ctas: s = [],
            description: n = "",
            expandingButtonLabel: c = "Subscribe",
            title: i = "",
            legalText: o
          } = e;
          return (0, d.jsxs)(Be.motion.div, {
            className: ea.content,
            initial: "hidden",
            animate: "visible",
            variants: a ? aa : void 0,
            children: [(0, d.jsx)(Be.motion.div, {
              variants: a ? ta : void 0,
              children: (0, d.jsx)(y, {
                brands: t
              })
            }), (0, d.jsx)(ca, {
              animated: a,
              ctas: s,
              description: n,
              expandingButtonLabel: c,
              title: i
            }), o && (0, d.jsx)(Be.motion.div, {
              className: ea.legalText,
              variants: a ? ta : void 0,
              children: (0, d.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: o
                }
              })
            })]
          })
        },
        oa = e => {
          let {
            animated: a = !1,
            backgroundImage: t,
            brands: s = [],
            className: n,
            ctas: c = [],
            description: i = "",
            expandingButtonLabel: o = "Subscribe",
            layeredImage: r,
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
                    const [c, i] = n;
                    if (t.has(s) && t.has(c)) {
                      const s = `${t.get(c)}${e}`;
                      a[s] = "imageWidth" !== c ? i ? `${i}px` : "0px" : i ? `${i}vw` : "100vw"
                    }
                  }))
                }
              })), a
            })(l),
            _ = (0, S.useGetCdnSource)(t?.mobile?.full_src ?? null),
            k = (0, S.useGetCdnSource)(t?.desktop?.full_src ?? _),
            b = (0, S.useGetCdnSource)(r?.mobile?.full_src ?? null),
            v = (0, S.useGetCdnSource)(r?.desktop?.full_src ?? b);
          return (0, d.jsxs)(Be.motion.div, {
            className: (0, S.classList)(ea.hero, n),
            style: {
              "--background-image-desktop": `url(${k})`,
              "--background-image-mobile": `url(${_})`,
              "--layered-image-desktop": `url(${v})`,
              "--layered-image-mobile": `url(${b})`
            },
            initial: "hidden",
            animate: "visible",
            variants: a ? aa : void 0,
            "data-type": "hero",
            theme: g,
            children: [(0, d.jsxs)("div", {
              className: ea.images,
              children: [k && _ ? (0, d.jsx)("div", {
                className: ea.background,
                style: t?.style ?? {}
              }) : "", b && v ? (0, d.jsx)("div", {
                className: ea.layered,
                style: l ? u : {}
              }) : "", (0, d.jsx)("div", {
                className: ea.gradient
              })]
            }), (0, d.jsx)(ia, {
              animated: a,
              ctas: c,
              description: i,
              expandingButtonLabel: o,
              title: p,
              brands: s,
              legalText: m
            }), f?.shards && (0, d.jsx)(na, {
              ...f
            })]
          })
        };
      var ra = t(3660),
        la = t.n(ra);
      const da = e => {
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
            __html: la().unescape(a)
          }
        })
      };
      var ma = t(696),
        fa = t(7019);
      const ga = JSON.parse('{"us":{"plm_nav_scroll_left":"Scroll Left","plm_nav_scroll_right":"Scroll Right","language_selector_default":"Select a Language","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","sc_link_account":"Account","sc_link_activity_feed":"Activity Feed","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell My Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_messages":"Messages","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Toggle Social Club Menu","components_track_list_title":"Tracklist","disabled_label":"Disabled","next_button_label":"Next video page","previous_button_label":"Previous video page"},"de":{"plm_nav_scroll_left":"Links scrollen","plm_nav_scroll_right":"Rechts scrollen","language_selector_default":"Eine Sprache auswählen","profile_selector_mugshot":"Verbrecherfoto von {userName}","profile_selector_profile_card":"Profildaten","profile_selector_rp_icon":"RP-Kategorie","profile_selector_switch_character":"Charakter wechseln","sc_link_account":"Konto","sc_link_activity_feed":"Aktivitäten-Feed","sc_link_cookies_policy":"Cookie-Richtlinie","sc_link_cookies_settings":"Cookie-Einstellungen","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Meine Informationen nicht verkaufen","sc_link_find_friends":"Freunde finden","sc_link_friends":"Freunde","sc_link_game_activation":"Spielaktivierung","sc_link_help":"Hilfe","sc_link_import_friends":"Freunde importieren","sc_link_join_social_club":"Registrieren","sc_link_legal":"Rechtliches","sc_link_log_out":"Abmelden","sc_link_messages":"Nachrichten","sc_link_my_friends":"Meine Freunde","sc_link_notifications":"Benachrichtigungen","sc_link_privacy_policy":"Datenschutzrichtlinien","sc_link_settings":"Einstellungen","sc_link_sign_in":"Anmelden","sc_link_support":"Support","sc_link_view_my_profile":"Mein Profil ansehen","sc_menu_drag_handle":"Menü öffnen bzw. schließen","sc_menu_toggle":"Social-Club-Menü öffnen bzw. schließen","components_track_list_title":"Trackliste","disabled_label":"Deaktiviert","next_button_label":"Nächste Videoseite","previous_button_label":"Vorherige Videoseite"},"es":{"plm_nav_scroll_left":"Desplazar hacia la izquierda","plm_nav_scroll_right":"Desplazar hacia la derecha","language_selector_default":"Selecciona un idioma","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta de perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Ajustes de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendáis mis datos","sc_link_find_friends":"Buscar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación del juego","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registrarse","sc_link_legal":"Aviso legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Ajustes","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Asistencia técnica","sc_link_view_my_profile":"Ver mi perfil","sc_menu_drag_handle":"Arrastrar el controlador del menú","sc_menu_toggle":"Cambiar el menú del Social Club","components_track_list_title":"Lista de pistas","disabled_label":"Desactivado","next_button_label":"Página de vídeo siguiente","previous_button_label":"Página de vídeo anterior"},"mx":{"plm_nav_scroll_left":"Desplazarse hacia la izquierda","plm_nav_scroll_right":"Desplazarse hacia la derecha","language_selector_default":"Seleccionar un idioma","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta del perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Muro de actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configuración de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendan mis datos","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación de juegos","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registro","sc_link_legal":"Legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Configuración","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Soporte","sc_link_view_my_profile":"Ver mi perfil","sc_menu_drag_handle":"Mover el handle del menú","sc_menu_toggle":"Cambiar menú del Social Club","components_track_list_title":"Lista de canciones","disabled_label":"Desactivado","next_button_label":"Página de video siguiente","previous_button_label":"Página de video anterior"},"fr":{"plm_nav_scroll_left":"Faire défiler vers la gauche","plm_nav_scroll_right":"Faire défiler vers la droite","language_selector_default":"Sélectionner une langue","profile_selector_mugshot":"Photo d\'identité : {userName}","profile_selector_profile_card":"Carte du profil","profile_selector_rp_icon":"Catégorie de RP","profile_selector_switch_character":"Changer de personnage","sc_link_account":"Compte","sc_link_activity_feed":"Fil d\'activités","sc_link_cookies_policy":"Politique en matière de cookies","sc_link_cookies_settings":"Paramètres des cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Ne pas vendre mes informations","sc_link_find_friends":"Trouver des amis","sc_link_friends":"Amis","sc_link_game_activation":"Activation de jeux","sc_link_help":"Aide","sc_link_import_friends":"Importer des amis","sc_link_join_social_club":"S’inscrire","sc_link_legal":"Mentions légales","sc_link_log_out":"Se déconnecter","sc_link_messages":"Messages","sc_link_my_friends":"Mes amis","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Charte de confidentialité","sc_link_settings":"Paramètres","sc_link_sign_in":"Se connecter","sc_link_support":"Assistance","sc_link_view_my_profile":"Voir mon profil","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Afficher le menu du Social Club","components_track_list_title":"Liste des morceaux","disabled_label":"Désactivé","next_button_label":"Page vidéo suivante","previous_button_label":"Page vidéo précédente"},"it":{"plm_nav_scroll_left":"Scorri a sinistra","plm_nav_scroll_right":"Scorri a destra","language_selector_default":"Seleziona una lingua","profile_selector_mugshot":"Foto segnaletica di {userName}","profile_selector_profile_card":"Scheda del profilo","profile_selector_rp_icon":"Categoria RP","profile_selector_switch_character":"Cambia personaggio","sc_link_account":"Account","sc_link_activity_feed":"Feed attività","sc_link_cookies_policy":"Politica sui cookie","sc_link_cookies_settings":"Impostazioni dei cookie","sc_link_crews":"Crew","sc_link_do_not_sell_my_information":"Non vendere le mie informazioni","sc_link_find_friends":"Trova amici","sc_link_friends":"Amici","sc_link_game_activation":"Attivazione gioco","sc_link_help":"Assistenza","sc_link_import_friends":"Importa amici","sc_link_join_social_club":"Registrati","sc_link_legal":"Note legali","sc_link_log_out":"Esci","sc_link_messages":"Messaggi","sc_link_my_friends":"I miei amici","sc_link_notifications":"Notifiche","sc_link_privacy_policy":"Politica sulla privacy","sc_link_settings":"Impostazioni","sc_link_sign_in":"Accedi","sc_link_support":"Supporto","sc_link_view_my_profile":"Visualizza il mio profilo","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Apri/chiudi il menu del Social Club","components_track_list_title":"Tracklist","disabled_label":"Disabilitato","next_button_label":"Pagina di video successiva","previous_button_label":"Pagina di video precedente"},"jp":{"plm_nav_scroll_left":"左にスクロール","plm_nav_scroll_right":"右にスクロール","language_selector_default":"言語を選択","profile_selector_mugshot":"{ユーザーネーム}顔写真","profile_selector_profile_card":"プロフィールカード","profile_selector_rp_icon":"RPカテゴリー","profile_selector_switch_character":"キャラクター変更","sc_link_account":"アカウント","sc_link_activity_feed":"アクティビティフィード","sc_link_cookies_policy":"クッキーポリシー","sc_link_cookies_settings":"クッキー設定","sc_link_crews":"クルー","sc_link_do_not_sell_my_information":"個人情報を売らないでください","sc_link_find_friends":"フレンドを検索","sc_link_friends":"フレンド","sc_link_game_activation":"ゲームアクティベーション","sc_link_help":"ヘルプ","sc_link_import_friends":"フレンドをインポート","sc_link_join_social_club":"サインアップ","sc_link_legal":"利用規約","sc_link_log_out":"ログアウト","sc_link_messages":"メッセージ","sc_link_my_friends":"フレンド","sc_link_notifications":"通知","sc_link_privacy_policy":"プライバシーポリシー","sc_link_settings":"設定","sc_link_sign_in":"サインイン","sc_link_support":"サポート","sc_link_view_my_profile":"プロフィールを表示","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Social Clubメニューを切り替え","components_track_list_title":"トラックリスト","disabled_label":"無効","next_button_label":"次のビデオページ","previous_button_label":"前のビデオページ"},"kr":{"plm_nav_scroll_left":"왼쪽 스크롤","plm_nav_scroll_right":"오른쪽 스크롤","language_selector_default":"언어 선택","profile_selector_mugshot":"{userName} 머그샷","profile_selector_profile_card":"프로필 카드","profile_selector_rp_icon":"RP 카테고리","profile_selector_switch_character":"캐릭터 교체","sc_link_account":"계정","sc_link_activity_feed":"활동 피드","sc_link_cookies_policy":"쿠키 정책","sc_link_cookies_settings":"쿠키 설정","sc_link_crews":"조직","sc_link_do_not_sell_my_information":"내 정보 판매 안 함","sc_link_find_friends":"친구 찾기","sc_link_friends":"친구","sc_link_game_activation":"게임 활성화","sc_link_help":"도움말","sc_link_import_friends":"친구 불러오기","sc_link_join_social_club":"가입","sc_link_legal":"법률 관련","sc_link_log_out":"로그아웃","sc_link_messages":"메시지","sc_link_my_friends":"내 친구","sc_link_notifications":"알림","sc_link_privacy_policy":"개인 정보 보호 정책","sc_link_settings":"설정","sc_link_sign_in":"로그인","sc_link_support":"지원","sc_link_view_my_profile":"내 프로필 보기","sc_menu_drag_handle":"드래그 메뉴 핸들","sc_menu_toggle":"Social Club 메뉴 켜기/끄기","components_track_list_title":"트랙리스트","disabled_label":"비활성화됨","next_button_label":"다음 비디오 페이지","previous_button_label":"이전 비디오 페이지"},"pl":{"plm_nav_scroll_left":"Przesuń w lewo","plm_nav_scroll_right":"Przesuń w prawo","language_selector_default":"Wybierz język","profile_selector_mugshot":"Zdjęcie – {userName}","profile_selector_profile_card":"Karta profilu","profile_selector_rp_icon":"Poziom RP","profile_selector_switch_character":"Zmień postać","sc_link_account":"Konto","sc_link_activity_feed":"Zajęcia","sc_link_cookies_policy":"Polityka plików cookie","sc_link_cookies_settings":"Ustawienia plików cookie","sc_link_crews":"Ekipy","sc_link_do_not_sell_my_information":"Zabraniam sprzedaży moich danych","sc_link_find_friends":"Szukaj znajomych","sc_link_friends":"Znajomi","sc_link_game_activation":"Aktywacja gry","sc_link_help":"Pomoc","sc_link_import_friends":"Importuj znajomych","sc_link_join_social_club":"Zarejestruj się","sc_link_legal":"Informacje prawne","sc_link_log_out":"Wyloguj się","sc_link_messages":"Wiadomości","sc_link_my_friends":"Moi znajomi","sc_link_notifications":"Powiadomienia","sc_link_privacy_policy":"Polityka prywatności","sc_link_settings":"Ustawienia","sc_link_sign_in":"Zaloguj się","sc_link_support":"Wsparcie","sc_link_view_my_profile":"Przeglądaj profil","sc_menu_drag_handle":"Przeciągnij uchwyt menu","sc_menu_toggle":"Włącz lub wyłącz menu Social Club","components_track_list_title":"Lista utworów","disabled_label":"Wyłączone","next_button_label":"Następna strona z filmami","previous_button_label":"Poprzednia strona z filmami"},"br":{"plm_nav_scroll_left":"Rolar para a esquerda","plm_nav_scroll_right":"Rolar para a direita","language_selector_default":"Selecione um idioma","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Cartão de perfil","profile_selector_rp_icon":"Categoria de RP","profile_selector_switch_character":"Alternar personagem","sc_link_account":"Conta","sc_link_activity_feed":"Feed de atividade","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configurações de cookies","sc_link_crews":"Comandos","sc_link_do_not_sell_my_information":"Não vendam a minha informação","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Ativação de jogos","sc_link_help":"Ajuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Inscrever-se","sc_link_legal":"Aviso legal","sc_link_log_out":"Sair","sc_link_messages":"Mensagens","sc_link_my_friends":"Meus amigos","sc_link_notifications":"Notificações","sc_link_privacy_policy":"Política de Privacidade","sc_link_settings":"Configurações","sc_link_sign_in":"Iniciar sessão","sc_link_support":"Suporte","sc_link_view_my_profile":"Visualizar meu perfil","sc_menu_drag_handle":"Arrastar título do menu","sc_menu_toggle":"Alternar menu do Social Club","components_track_list_title":"Lista de faixas","disabled_label":"Desabilitado","next_button_label":"Próxima página de vídeos","previous_button_label":"Página anterior de vídeos"},"ru":{"plm_nav_scroll_left":"Пролистать влево","plm_nav_scroll_right":"Пролистать вправо","language_selector_default":"Выбрать язык","profile_selector_mugshot":"Фотография игрока {userName}","profile_selector_profile_card":"Карта профиля","profile_selector_rp_icon":"Категория опыта","profile_selector_switch_character":"Сменить персонажа","sc_link_account":"Учетная запись","sc_link_activity_feed":"Лента событий","sc_link_cookies_policy":"Политика использования файлов Cookie","sc_link_cookies_settings":"Настройки файлов Cookie","sc_link_crews":"Банды","sc_link_do_not_sell_my_information":"Я запрещаю продавать свою личную информацию","sc_link_find_friends":"Поиск друзей","sc_link_friends":"Друзья","sc_link_game_activation":"Активация игры","sc_link_help":"Помощь","sc_link_import_friends":"Импорт друзей","sc_link_join_social_club":"Регистрация","sc_link_legal":"Юридическая информация","sc_link_log_out":"Выход","sc_link_messages":"Сообщения","sc_link_my_friends":"Мои друзья","sc_link_notifications":"Уведомления","sc_link_privacy_policy":"Политика конфиденциальности","sc_link_settings":"Настройки","sc_link_sign_in":"Войти","sc_link_support":"Поддержка","sc_link_view_my_profile":"Моя учетная запись","sc_menu_drag_handle":"Перенести маркер меню","sc_menu_toggle":"Переключить меню Social Club","components_track_list_title":"Список песен","disabled_label":"Отключено","next_button_label":"Следующая страница с видео","previous_button_label":"Предыдущая страница с видео"},"hans":{"plm_nav_scroll_left":"向左滚动","plm_nav_scroll_right":"向右滚动","language_selector_default":"选择一种语言","profile_selector_mugshot":"{userName} 面部照片","profile_selector_profile_card":"档案卡","profile_selector_rp_icon":"声望值类别","profile_selector_switch_character":"切换角色","sc_link_account":"账户","sc_link_activity_feed":"活动动态","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 设置","sc_link_crews":"帮会","sc_link_do_not_sell_my_information":"请勿出售我的信息","sc_link_find_friends":"查找好友","sc_link_friends":"好友","sc_link_game_activation":"游戏激活","sc_link_help":"帮助","sc_link_import_friends":"导入好友","sc_link_join_social_club":"注册","sc_link_legal":"法律声明","sc_link_log_out":"登出","sc_link_messages":"信息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隐私政策","sc_link_settings":"设置","sc_link_sign_in":"登录","sc_link_support":"支持","sc_link_view_my_profile":"查看我的档案","sc_menu_drag_handle":"拖动菜单处理","sc_menu_toggle":"切换 Social Club 菜单","components_track_list_title":"曲目列表","disabled_label":"已禁用","next_button_label":"下一页视频","previous_button_label":"上一页视频"},"tw":{"plm_nav_scroll_left":"向左捲動","plm_nav_scroll_right":"向右捲動","language_selector_default":"選擇語言","profile_selector_mugshot":"{userName} 罪犯檔案照","profile_selector_profile_card":"資料卡","profile_selector_rp_icon":"聲望值類別","profile_selector_switch_character":"切換角色","sc_link_account":"帳戶","sc_link_activity_feed":"動態活動","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 設定","sc_link_crews":"幫會","sc_link_do_not_sell_my_information":"不要販售我的個人資料","sc_link_find_friends":"尋找好友","sc_link_friends":"好友","sc_link_game_activation":"遊戲啟用","sc_link_help":"幫助","sc_link_import_friends":"匯入好友","sc_link_join_social_club":"註冊","sc_link_legal":"法律聲明","sc_link_log_out":"登出","sc_link_messages":"訊息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隱私權政策","sc_link_settings":"設定","sc_link_sign_in":"登入","sc_link_support":"支援","sc_link_view_my_profile":"查看我的設定檔","sc_menu_drag_handle":"拖曳選單控點","sc_menu_toggle":"開關 Social Club 選單","components_track_list_title":"曲目清單","disabled_label":"停用","next_button_label":"下一個影片頁面","previous_button_label":"上一個影片頁面"}}'),
        pa = (0, ma.defineMessages)({
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          }
        }),
        ua = {
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
        _a = (0, ma.withIntl)((e => {
          let {
            theme: a,
            languageSelectorOpened: t,
            setLanguageSelectorOpened: s
          } = e;
          const n = (0, l.useLocation)(),
            c = (0, ma.useIntl)(),
            [i, o] = (0, ma.getLocale)(),
            [f, g] = (0, r.useState)(!1),
            p = (0, r.useMemo)((() => (0, fa.c)()), []),
            u = (0, r.useCallback)((e => {
              let a = n.pathname;
              const t = a.split("/");
              return ma.locales.map((e => e.subdomaincom)).includes(t[0]) && (a = t.slice(1).join("/")), p.currentSite?.site === fa.U.www ? "en" === e ? `${window.location.origin}${a}${n.search}` : `${window.location.origin}/${e}${a}${n.search}` : `${window.location.origin}${a}${n.search}`
            }), [n]),
            _ = (0, r.useRef)(null),
            [k, b] = (0, r.useState)(0),
            v = matchMedia("(hover: none) and (pointer: coarse)").matches,
            h = e => {
              if (s && s(!1), i.subdomaincom === e || "none" === e) return void(s && s(!1));
              const a = ma.locales.find((a => a.subdomaincom === e));
              a && (o(a.iso), window.location.href = u(e))
            };
          return (0, r.useEffect)((() => {
            void 0 !== t && !1 === t && !0 === f && g(!1)
          }), [t]), (0, r.useEffect)((() => {
            _.current && b(_.current.scrollHeight)
          }), [_]), (0, d.jsxs)("div", {
            className: [ua.languageSelector, f ? ua.open : ""].join(" "),
            "data-theme": a,
            children: [v && "sc-menu" === a && (0, d.jsx)("div", {
              className: ua.selectBoxWrapper,
              children: (0, d.jsxs)("select", {
                className: ua.selectBox,
                onClick: e => e.stopPropagation(),
                onChange: e => {
                  h(e.currentTarget.value)
                },
                children: [(0, d.jsx)("option", {
                  className: ua.selectBoxOption,
                  value: "none",
                  children: (0, d.jsx)(ma.FormattedMessage, {
                    ...pa.language_selector_default
                  })
                }), ma.locales.map((e => {
                  let {
                    label: a,
                    subdomaincom: t
                  } = e;
                  return (0, d.jsx)("option", {
                    className: ua.selectBoxOption,
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
                "aria-label": c.formatMessage(pa.language_selector_default),
                children: [(0, d.jsx)("i", {}), (0, d.jsx)("span", {
                  children: (0, d.jsx)(ma.FormattedMessage, {
                    ...pa.language_selector_default
                  })
                })]
              }), (0, d.jsx)("div", {
                className: ua.linkWrapper,
                ref: _,
                style: {
                  "--ls-linkWrapper-opened-height": `${k}px`
                },
                children: (0, d.jsx)("div", {
                  className: ua.links,
                  children: ma.locales.map((e => {
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
        }), ga),
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
        ba = e => {
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
        va = e => e?.images ? (0, d.jsx)("div", {
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
                positionClassX: i,
                positionClassY: o,
                zIndex: r,
                className: l,
                style: m,
                alt: f,
                displayClass: g
              } = e;
              return (0, d.jsx)(ge, {
                image: t,
                style: {
                  zIndex: r ?? ++a
                },
                imageStyle: m,
                className: (0, S.classList)(l, g, ka.imageLayer, ka[s], ka[n], ka[c], ka[i], ka[o]),
                alt: f
              }, r ?? ++a)
            })), e?.borderImage && (0, d.jsx)(ba, {
              style: e?.borderImage,
              className: e?.borderImage?.displayClass
            })]
          })
        }) : null,
        ha = e => {
          let {
            hero: a,
            children: t
          } = e;
          return a ? (0, d.jsx)("div", {
            className: "rockstargames-componentsaf5742f5a161e16cb38c8bd614a7fdbf",
            children: t
          }) : t
        },
        xa = e => {
          let {
            badge: a = null,
            badgeType: t,
            discountTxt: s,
            splitter: n,
            image: c,
            style: i,
            className: o = "",
            attributes: r = {},
            role: l,
            hero: m = !1
          } = e;
          return (0, d.jsx)(ha, {
            hero: m,
            children: (0, d.jsx)("figure", {
              children: (0, d.jsxs)("div", {
                className: (0, S.classList)("rockstargames-componentsab10d5a913595e2fbbe0612d75f320b8", m ? "rockstargames-componentsb8558839bcd23d06fc3453876f54199b" : "", r?.hiddenMobile ? "hiddenMobile" : "", r?.hiddenLarge ? "hiddenLarge" : "", r?.className, o),
                style: (0, $.safeStyles)({
                  ...i,
                  ...r?.style
                }),
                ...r,
                children: [(0, d.jsx)(ge, {
                  image: c,
                  className: o
                }), (c?.badge || c?.discountTxt || a || s) && (0, d.jsx)(je, {
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
        ya = {
          pillBtn: "rockstargames-componentsf3abdb49ce66d99433761085f67775f8",
          selected: "rockstargames-componentsb6fea482554f2f426fb45d39ae6064cd",
          multiSourceContainer: "rockstargames-componentse381fc56c6aa2467c3da35e4707e738d",
          multiSourceImage: "rockstargames-componentsf49fdfd7fb9f5fac000a0d3e8a454278",
          animatePlaceholder: "rockstargames-componentsee3004f447a07ee4350e4c7f66988279",
          "loader-keyframes": "rockstargames-componentsceffe0f096f9f99f1d2c31063115c45d"
        },
        Na = e => {
          let {
            imageUrl: a,
            className: t,
            alt: s,
            style: n,
            lazy: c = !1,
            decoding: i = "auto",
            sizes: o = [320, 480, 768, 1024, 1440, 1920, 2560]
          } = e;
          const [l, m] = (0, r.useState)(!1);
          return (0, d.jsxs)("div", {
            className: ya.multiSourceContainer,
            children: [!l && (0, d.jsx)("img", {
              className: [t, ya.animatePlaceholder].join(" "),
              src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjMzMzMzMzIi8+Cjwvc3ZnPgo=",
              sizes: "(max-width: 1024px) 100vw, 1024px",
              alt: "Loading...",
              style: n
            }), (0, d.jsx)("img", {
              className: [ya.multiSourceImage, t].join(" "),
              src: `${a}?im=Resize=1920`,
              srcSet: (f = a, o.map((e => `${f}?im=Resize=${e} ${e}w`)).join(", ")),
              sizes: "(max-width: 400px) 200px, (max-width: 1920px) 100vw, 1920px",
              alt: s ?? "Multi-Source Image",
              style: n,
              onLoad: () => {
                m(!0)
              },
              loading: c ? "lazy" : "eager",
              decoding: i
            })]
          });
          var f
        },
        ja = {
          tag: "rockstargames-componentsc1e678bcb5a1e1a1be6114282f264928"
        },
        Sa = e => {
          let {
            className: a,
            href: t,
            title: s,
            style: n
          } = e;
          const c = (0, d.jsxs)("div", {
            style: n,
            className: [ja.tag, a].join(" "),
            children: [(0, d.jsx)("i", {}), s]
          });
          return void 0 !== t ? (0, d.jsx)(m, {
            to: t,
            children: c
          }) : c
        },
        wa = {
          newswireBlock: "rockstargames-componentsab12ad38cf58ad5fbb7ddff2a9e1889d",
          info: "rockstargames-componentsf54c31159d25a80251ae553245d153a3",
          title: "rockstargames-componentsc5b842792dd570d6a4fc662a012371c7",
          newswireBlockNoSpecialOrder: "rockstargames-componentsca540bd10286c6f9404244af6d161675",
          preview: "rockstargames-componentsf48d94f9b625ce1459b45e9a85bc0ccc",
          previewMobile: "rockstargames-componentsfeae4bb6be2ac66aaba0c691b1da5b70",
          top: "rockstargames-componentse273dbd6f05af08d429fbf75c4f27f83",
          startAnimation: "rockstargames-componentsdc02b8411cb8c96f531faaed38022cc3"
        },
        Ca = e => {
          let {
            index: a,
            post: t,
            noSpecialOrder: s = !1,
            style: n = {}
          } = e;
          const [c] = (0, l.useSearchParams)(), i = t.preview_images_parsed.newswire_block, o = {
            default: 0 !== a || s ? i.square || i.d16x9 || i._fallback : i.d16x9 || i.square || i._fallback,
            mobile: i.square || i._fallback
          }, [r, f] = (0, $.usePreloadImg)(o.default), [g, p] = (0, $.usePreloadImg)(o.mobile), u = {
            default: {
              backgroundImage: `url(${o.default})`
            },
            mobile: {
              backgroundImage: `url(${o.mobile})`
            }
          };
          return (0, d.jsx)(m, {
            "data-gtm-category": "Newswire",
            "data-gtm-action": "Article Block Click",
            "data-gtm-label": `${t.title}`,
            to: t.url,
            className: [wa.newswireBlock, s ? wa.newswireBlockNoSpecialOrder : "", null !== r ? wa.startAnimation : ""].join(" "),
            children: (0, d.jsxs)(d.Fragment, {
              children: [0 !== a || c.get("tag_id") ? (0, d.jsx)("div", {
                className: wa.preview,
                style: u.default
              }) : (0, d.jsxs)(d.Fragment, {
                children: [(0, d.jsx)("div", {
                  className: wa.previewMobile,
                  style: u.mobile
                }), (0, d.jsx)("div", {
                  className: wa.preview,
                  style: u.default
                })]
              }), (0, d.jsxs)("div", {
                className: wa.info,
                children: [(0, d.jsxs)("div", {
                  className: wa.top,
                  children: [t.primary_tags.length ? (0, d.jsx)(Sa, {
                    title: t.primary_tags[t.primary_tags.length > 1 && 722 === t.primary_tags[0].id ? 1 : 0].name
                  }) : "", (0, d.jsx)("time", {
                    dateTime: t.created,
                    children: t.created_formatted
                  })]
                }), (0, d.jsx)("h5", {
                  className: wa.title,
                  dangerouslySetInnerHTML: {
                    __html: t.title
                  }
                })]
              })]
            })
          })
        };
      var Ia = t(1568),
        Ta = t.n(Ia);
      const Ma = (0, $.withTranslations)((e => {
          let {
            relativeTo: a = "",
            tagId: t = null,
            metaUrl: s = "/newswire",
            t: n
          } = e;
          const [c] = (0, l.useSearchParams)(), {
            tagId: i = null
          } = (0, l.useParams)(), [o, m] = (0, r.useState)(i ?? t ?? c.get("tag_id")), [f, g] = (0, r.useState)(1), [u, _] = (0, r.useState)([]), [k, b] = (0, r.useState)(null), {
            data: v
          } = (0, p.useQuery)(Ta(), {
            variables: {
              tagId: Number(o),
              page: f,
              metaUrl: s
            },
            autoSetLoading: !0
          });
          return (0, r.useEffect)((() => {
            g(1), _([]), m(i ?? t ?? c.get("tag_id"))
          }), [c.get("tag_id")]), (0, r.useEffect)((() => {
            v && v.posts && v.posts.paging && b(v.posts.paging), v && v.posts && v.posts.results && _(u.concat(v.posts.results))
          }), [v]), u.length ? (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsx)(Pa, {
              posts: u,
              relativeTo: a,
              noSpecialOrder: null !== o
            }), null !== k && k.nextPage ? (0, d.jsx)(j, {
              onClick: () => g(f + 1),
              disabled: !1,
              context: "secondary",
              children: n("More Stories")
            }) : ""]
          }) : null
        })),
        La = {
          pillBtn: "rockstargames-componentsef3f3a4d41d143d21c105fb44722df5e",
          selected: "rockstargames-componentsd2fea69a448125df4778b3d0be51ee42",
          related: "rockstargames-componentse992dd17114710edcb26fbc8dc8e666d",
          posts: "rockstargames-componentsa49f6938e087663b1ac0fd1b93456487",
          just1post: "rockstargames-componentsb5303ef0b966b9d4d4486db944b9b78c"
        },
        Ea = (0, $.withTranslations)((e => {
          let {
            posts: a,
            t
          } = e;
          return (0, d.jsxs)("section", {
            className: La.related,
            children: [(0, d.jsx)("h2", {
              children: t("Related Stories")
            }), (0, d.jsx)("div", {
              className: [La.posts, 1 === a.length ? La.just1post : ""].join(" "),
              children: a.map((e => (0, d.jsx)(Ca, {
                noSpecialOrder: !0,
                post: e
              }, e.id)))
            })]
          })
        })),
        Ba = {
          newswireBlocks: "rockstargames-componentsb787e2cc67a938470008b0fa3c5e57f8",
          noSpecialOrder: "rockstargames-componentse3641b4f2f8f6fa67e5d06eba31981e1"
        },
        Pa = (0, $.withGtmTracking)((e => {
          let {
            noSpecialOrder: a = !1,
            posts: t,
            gtmTrack: s,
            relativeTo: n
          } = e;
          return (0, r.useEffect)((() => {
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
            className: [Ba.newswireBlocks, a ? Ba.noSpecialOrder : "", Ba.contextHome].join(" "),
            children: t.map(((e, t) => (0, d.jsx)(Ca, {
              index: t,
              noSpecialOrder: a,
              post: e
            }, e.id)))
          })
        }));
      var za = t(7020);
      const Va = (e, a) => {
          const t = e.tiers && e.tiers.every((e => e.isComplete)),
            s = a.tiers && a.tiers.every((e => e.isComplete));
          return t && !s ? 1 : !t && s ? -1 : 0
        },
        $a = {
          pillBtn: "rockstargames-componentsda5b324a1bdb278c5223494ac5e55116",
          selected: "rockstargames-componentsbafb2b328fccf616c23307e0c55ef7c1",
          packCardTierIndicator: "rockstargames-componentsb19430706db5edf335ff477729b898d2",
          tierIndicator: "rockstargames-componentsf9c45c98b4d46bcf6b80feaf146ca442",
          active: "rockstargames-componentsf47d34c700f6df8c849fd75cab9d0efe"
        },
        Da = e => {
          let {
            tiers: a
          } = e;
          return (0, d.jsx)("div", {
            className: $a.packCardTierIndicator,
            children: a?.map(((e, a) => (0, d.jsx)("div", {
              className: [$a.tierIndicator, e.isComplete ? $a.active : ""].join(" ")
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
        Fa = e => {
          let {
            title: a,
            url: t,
            imageUrl: s,
            className: n,
            tiers: c,
            onClick: i,
            badgeContent: o = "Complete",
            imageSize: m = 420,
            imageLoaded: f
          } = e;
          const [g, p] = (0, r.useState)(!1), [u, _] = (0, r.useState)(f);
          (0, r.useEffect)((() => {
            if (c) {
              const e = c.some((e => !e.isComplete));
              p(!e)
            }
          }), [c]);
          const k = `${s}?im=Resize,height=${m}`;
          return (0, $.usePreloadImg)(k, (() => _(!0))), (0, d.jsx)(l.NavLink, {
            className: [Aa.packCard, n].join(" "),
            to: t,
            onClick: i,
            children: (0, d.jsxs)("div", {
              className: [Aa.packCardImageBox, u ? Aa.packCardImageLoaded : ""].join(" "),
              style: {
                backgroundImage: `url("${k}")`
              },
              children: [g && (0, d.jsxs)("div", {
                className: Aa.badge,
                children: [(0, d.jsx)("div", {
                  className: Aa.icon
                }), (0, d.jsx)("div", {
                  className: Aa.label,
                  children: o
                })]
              }), (0, d.jsxs)("div", {
                className: Aa.packCardTextBox,
                children: [(0, d.jsx)("h4", {
                  children: a
                }), !g && (0, d.jsx)(Da, {
                  tiers: c
                })]
              })]
            })
          })
        },
        Oa = {
          pillBtn: "rockstargames-componentscbda74b16a7146b09f9a71b522cd3f79",
          selected: "rockstargames-componentsa9891fadd68543b391db72df22a2d606",
          packList: "rockstargames-componentsbd63f959918552380f08becb4b549e9b",
          headerVisible: "rockstargames-componentsb2b45ebef1d9bec3b25f8ea4fe15cdaf",
          packCard: "rockstargames-componentsa221ba6f68f82f13b6f018447fe007e1",
          packGrid: "rockstargames-componentsd70f5275ee282fe8e4ee21c42aac19d2"
        },
        Ra = e => {
          let {
            isHeaderVisible: a,
            packListItems: t,
            packListClassName: s = Oa.packList,
            packGridClassName: n = Oa.packGrid,
            selectPackCard: c,
            sortFunction: i = Va
          } = e;
          const o = [...t].sort(i);
          return (0, d.jsx)("div", {
            className: [s, a ? Oa.headerVisible : ""].join(" "),
            "data-testid": "pack-list",
            children: (0, d.jsx)("div", {
              className: n,
              "data-testid": "pack-grid",
              children: o.map((e => {
                let {
                  title: a,
                  url: t,
                  imageUrl: s,
                  tiers: n
                } = e;
                return (0, d.jsx)(Fa, {
                  title: a,
                  url: t,
                  className: Oa.packCard,
                  imageUrl: s,
                  tiers: n,
                  onClick: () => c(a, t)
                }, t)
              }))
            })
          })
        },
        Ua = {
          pillBtn: "rockstargames-componentsaba1ed94a5eff9493f940ee25391fca9",
          selected: "rockstargames-componentsb542dd43ce590ae4ccfc4aa585d1f613",
          navPill: "rockstargames-componentsdf7859eb1b59e9df3385af09ecb41d78"
        },
        Ga = e => {
          let {
            title: a,
            onClick: t,
            selected: s
          } = e;
          return (0, d.jsx)("button", {
            type: "button",
            onClick: t,
            className: [Ua.navPill, s ? Ua.selected : ""].join(" "),
            children: (0, d.jsx)("div", {
              children: a
            })
          })
        };
      var Ha;

      function Wa() {
        return Wa = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = arguments[a];
            for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s])
          }
          return e
        }, Wa.apply(this, arguments)
      }
      const qa = e => r.createElement("svg", Wa({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none"
      }, e), Ha || (Ha = r.createElement("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "m15 18-6-6 6-6"
      })));
      var Xa;

      function Ka() {
        return Ka = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = arguments[a];
            for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s])
          }
          return e
        }, Ka.apply(this, arguments)
      }
      const Ya = e => r.createElement("svg", Ka({
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          fill: "none"
        }, e), Xa || (Xa = r.createElement("path", {
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "m9 18 6-6-6-6"
        }))),
        Qa = {
          pillBtn: "rockstargames-componentsb285521d08f00a6f37ccea20fc40f214",
          selected: "rockstargames-componentsde174b151575ee71e8bdf1a7baa0d0b4",
          navScrollButton: "rockstargames-componentsd5be5aad8392e91704e849b1c2142042"
        },
        Za = e => {
          let {
            direction: a,
            className: t,
            ...s
          } = e;
          return (0, d.jsxs)("button", {
            type: "button",
            className: [t, Qa.navScrollButton].join(" "),
            ...s,
            children: ["left" === a && (0, d.jsx)(qa, {}), "right" === a && (0, d.jsx)(Ya, {})]
          })
        },
        Ja = (0, ma.defineMessages)({
          plm_nav_scroll_left: {
            id: "plm_nav_scroll_left",
            defaultMessage: "Scroll Left"
          },
          plm_nav_scroll_right: {
            id: "plm_nav_scroll_right",
            defaultMessage: "Scroll Right"
          }
        }),
        et = {
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
        at = e => {
          let {
            navItems: a,
            category: t,
            onNavItemClick: s,
            isOpen: n,
            isHeaderVisible: c,
            menuClass: i = et.navMenu,
            menuContainerClass: o = et.navMenuMain,
            menuSectionClass: m = et.sectionMenu,
            menuPrevBtnClass: f = et.previousNavButton,
            menuNextBtnClass: g = et.nextNavButton
          } = e;
          const p = (0, ma.useIntl)(),
            {
              track: u
            } = (0, D.useGtmTrack)(),
            {
              pathname: _
            } = (0, l.useLocation)(),
            k = (0, r.useMemo)((() => Math.max(a.findIndex((e => e.name === t)), 0)), [a, _]),
            [b, v] = (0, r.useState)(k),
            [h, x] = (0, r.useState)(!1),
            [y, N] = (0, r.useState)(!1),
            [j, S] = (0, r.useState)(!1),
            w = (0, r.useRef)(null),
            C = (0, r.useCallback)(((e, a) => {
              w.current && w.current.slideTo(e), v(e), T(`Secondary Nav > ${a}`)
            }), [u]),
            I = (0, r.useCallback)(((e, t) => {
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
            M = (0, r.useCallback)((e => {
              N(e.isEnd), S(e.isBeginning)
            }), []);
          return (0, r.useEffect)((() => {
            w.current && ((w.current.wrapperEl.clientWidth || 0) > (w.current.el.clientWidth || 0) ? (x(!0), w.current.params.centeredSlides = !0, w.current.params.centeredSlidesBounds = !0) : (x(!1), w.current.params.centeredSlides = !1, w.current.params.centeredSlidesBounds = !1))
          }), [w.current?.wrapperEl.clientWidth, w.current?.el.clientWidth]), (0, d.jsx)(Be.motion.div, {
            className: i,
            initial: {
              height: 0
            },
            animate: {
              height: n ? "100dvh" : 0
            },
            children: (0, d.jsxs)("div", {
              className: o,
              children: [(0, d.jsxs)("div", {
                className: m,
                children: [!j && h && (0, d.jsx)("div", {
                  className: et.previousSectionNavButton,
                  children: (0, d.jsx)(Za, {
                    direction: "left",
                    className: f,
                    onClick: () => w.current?.slidePrev(),
                    "aria-label": p.formatMessage(Ja.plm_nav_scroll_left)
                  })
                }), (0, d.jsx)("div", {
                  className: et.sectionItems,
                  children: (0, d.jsx)(L.wx, {
                    onBeforeInit: e => w.current = e,
                    onInit: M,
                    className: et.sectionItems,
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
                        children: (0, d.jsx)(Ga, {
                          title: t,
                          onClick: () => C(a, t),
                          selected: b === a
                        })
                      }, t)
                    }))
                  })
                }), !y && h && (0, d.jsx)("div", {
                  className: et.nextSectionNavButton,
                  children: (0, d.jsx)(Za, {
                    direction: "right",
                    className: g,
                    onClick: () => w.current?.slideNext(),
                    "aria-label": p.formatMessage(Ja.plm_nav_scroll_right)
                  })
                })]
              }), (0, d.jsx)(Ra, {
                isHeaderVisible: c,
                packListItems: a[b]?.subNavItems || [],
                selectPackCard: I
              })]
            })
          })
        },
        tt = "rockstargames-componentsd86a3089b6f6e51c437bc17b703ac57b",
        st = e => {
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
        nt = e => {
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
              children: [(0, d.jsx)(st, {
                data: a,
                onPageUpdate: t,
                page: 1,
                children: "1"
              }), 2 !== n[0] ? (0, d.jsx)("div", {
                className: tt,
                children: "..."
              }) : ""]
            }) : "", n.map((e => (0, d.jsx)(st, {
              data: a,
              onPageUpdate: t,
              page: e,
              className: s,
              children: e
            }, e))), a.pageCount > 8 ? (0, d.jsxs)(d.Fragment, {
              children: [n.slice(-1)[0] + 1 < a.pageCount ? (0, d.jsx)("div", {
                className: tt,
                children: "..."
              }) : "", (0, d.jsx)(st, {
                data: a,
                onPageUpdate: t,
                page: a.pageCount,
                children: a.pageCount
              })]
            }) : ""]
          })
        };
      var ct = t(6400);
      const it = e => {
          let {
            children: a
          } = e;
          const {
            parallaxController: t
          } = (0, ct.useController)();
          return (0, r.useLayoutEffect)((() => {
            if (!t) return;
            const e = setInterval((() => {
              t.update()
            }), 500);
            return () => clearInterval(e)
          }), [t]), a
        },
        ot = {
          parallaxWrapper: "rockstargames-componentsac6a811a2c026eb9d37c82e804870efc",
          large: "rockstargames-componentsa8acf06a80d716956d8490e4d8c223f7",
          medium: "rockstargames-componentsbd7e3cede84d0e9316f0577f23921911",
          small: "rockstargames-componentsd56e2c3a2b2a210394852ba9e95b4cce"
        },
        rt = e => {
          let {
            scrollAxis: a = "vertical",
            size: t = "",
            style: s = {},
            children: n
          } = e;
          return (0, d.jsx)(ct.ParallaxProvider, {
            scrollAxis: a,
            children: (0, d.jsx)(it, {
              children: (0, d.jsx)("div", {
                className: (0, S.classList)(ot.parallaxWrapper, ot[t]),
                style: s,
                "data-context": "parallax-wrapper",
                children: n ? n.map(((e, t) => (0, r.cloneElement)(e, {
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
        lt = e => {
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
          return (0, d.jsx)(ct.ParallaxBanner, {
            className: (0, S.classList)("rockstargames-componentsd97831cde902af87ada6d20331a1b381", t),
            layers: c,
            style: s
          })
        },
        dt = "rockstargames-componentsa84defbd41213ae39ad00cd983c9fdf3",
        mt = e => {
          let {
            minOffset: a = 0,
            maxOffset: t = 0,
            scrollAxis: s = "vertical",
            displayClass: n = "",
            style: c = {},
            children: i
          } = e;
          return "horizontal" === s ? (0, d.jsx)(ct.Parallax, {
            x: [a, t],
            className: (0, S.classList)(dt, n),
            styleOuter: c,
            children: i
          }) : (0, d.jsx)(ct.Parallax, {
            y: [a, t],
            className: (0, S.classList)(dt, n),
            styleOuter: c,
            children: i
          })
        },
        ft = (e, a) => {
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
        gt = e => t(e < 100 ? 1837 : e > 99 && e < 500 ? 4364 : e > 499 && e < 750 ? 5820 : 388),
        pt = (0, ma.defineMessages)({
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
        ut = {
          pillBtn: "rockstargames-componentsc0fa3153030df94ab4c9851ecbe487fd",
          selected: "rockstargames-componentsa1cfd163b5c9dfad8f6285e37b43cceb",
          scCharacterCard: "rockstargames-componentsf8cc5e30fb84b71315c12a45f4eec502",
          scAvatar: "rockstargames-componentse1ac10d8cc56a4278449f4e8e24ae091",
          scCharNames: "rockstargames-componentsc0364d91464a6e325410a5972a4687a6",
          scCharacterStats: "rockstargames-componentsf0ba4771ecb33f53b7cea411618d8dfc",
          scUserName: "rockstargames-componentsc44bd32337d1688423eff44caeb672de",
          scRpLevel: "rockstargames-componentsfda784a3ff5d50435bee5f2b32580ae4",
          scRpIcon: "rockstargames-componentsbdce7deeeac1aac374be67249c5efd4e"
        },
        _t = (0, ma.withIntl)((e => {
          let {
            characterData: a
          } = e;
          const s = (0, ma.useIntl)(),
            {
              platform: n,
              platformUsername: c,
              mugshotUrl: i,
              stats: o
            } = a,
            [l, m] = (0, r.useState)(i),
            f = ft(n, "large");
          return (0, d.jsxs)("div", {
            className: ut.scCharacterCard,
            children: [(0, d.jsx)("div", {
              className: ut.scAvatar,
              "data-size": "small",
              children: (0, d.jsx)("img", {
                src: l,
                alt: s.formatMessage(pt.profile_selector_mugshot, {
                  userName: c
                }),
                onError: () => {
                  m(t(6829))
                }
              })
            }), (0, d.jsx)("div", {
              className: ut.scCharacterStats,
              children: (0, d.jsxs)("div", {
                className: ut.scCharNames,
                children: [(0, d.jsx)("img", {
                  src: f.src,
                  alt: f.alt
                }), (0, d.jsx)("div", {
                  className: ut.scUserName,
                  "data-size": "small",
                  children: c
                }), (0, d.jsx)("div", {
                  className: ut.scRp,
                  children: (0, d.jsxs)("div", {
                    className: ut.scRpLevel,
                    children: [(0, d.jsx)("img", {
                      className: ut.scRpIcon,
                      src: gt(o.overview.rank.value),
                      alt: s.formatMessage(pt.profile_selector_rp_icon)
                    }), (0, d.jsx)("span", {
                      children: a.stats.overview.rank.value
                    })]
                  })
                })]
              })
            })]
          })
        }), ga),
        kt = (0, p.makeVarNamespace)("@rockstargames/components/profile-switcher"),
        bt = kt("languageSelectorOpenedReactive", !1),
        vt = e => bt(e),
        ht = kt("activeSubNavIdReactive", -1),
        xt = e => ht(e),
        yt = kt("subNavExtraHeightReactive", -1),
        Nt = e => yt(e),
        jt = kt("scNavOpenedReactive", !0),
        St = e => jt(e),
        wt = kt("charListHiddenReactive", !0),
        Ct = e => wt(e),
        It = () => {
          const e = (0, p.useReactiveVar)(bt),
            a = (0, p.useReactiveVar)(ht),
            t = (0, p.useReactiveVar)(yt),
            s = (0, p.useReactiveVar)(jt),
            n = (0, p.useReactiveVar)(wt);
          return (0, r.useEffect)((() => {
            n || (e && vt(!1), s && (St(!1), xt(-1)))
          }), [n]), (0, r.useEffect)((() => {
            !e && n && (s || St(!0))
          }), [e, n]), (0, r.useMemo)((() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: vt,
            activeSubNavId: a,
            setActiveSubNavId: xt,
            subNavExtraHeight: t,
            setSubNavExtraHeight: Nt,
            scNavOpened: s,
            setScNavOpened: St,
            charListHidden: n,
            setCharListHidden: Ct
          })), [e, a, t, s, n])
        };
      var Tt = t(8931),
        Mt = t.n(Tt),
        Lt = t(1668);
      const Et = {
          event: "account_menu_click",
          element_placement: "Account Menu"
        },
        Bt = e => ({
          text: e.formatMessage(pt.sc_link_help),
          target: "_self",
          ga: {
            ...Et,
            text: pt.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          children: [{
            text: e.formatMessage(pt.sc_link_support),
            location: {
              domain: fa.U.support,
              path: "/"
            },
            target: "_self",
            ga: {
              ...Et,
              text: pt.sc_link_support.defaultMessage
            },
            dataTestId: "supportLink"
          }, {
            text: e.formatMessage(pt.sc_link_legal),
            location: {
              domain: fa.U.www,
              path: "/legal"
            },
            target: "_self",
            ga: {
              ...Et,
              text: pt.sc_link_legal.defaultMessage
            },
            dataTestId: "legalLink"
          }, {
            text: e.formatMessage(pt.sc_link_privacy_policy),
            location: {
              domain: fa.U.www,
              path: "/privacy"
            },
            target: "_self",
            ga: {
              ...Et,
              text: pt.sc_link_privacy_policy.defaultMessage
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: e.formatMessage(pt.sc_link_cookies_policy),
            location: {
              domain: fa.U.www,
              path: "/cookies"
            },
            target: "_self",
            ga: {
              ...Et,
              text: pt.sc_link_cookies_policy.defaultMessage
            },
            dataTestId: "cookiesPolicyLink"
          }, {
            text: e.formatMessage(pt.sc_link_cookies_settings),
            onClickCallback: e => {
              e.preventDefault(), window.OneTrust?.ToggleInfoDisplay()
            },
            target: "_self",
            ga: {
              ...Et,
              text: pt.sc_link_cookies_settings.defaultMessage
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: e.formatMessage(pt.sc_link_do_not_sell_my_information),
            location: {
              domain: fa.U.www,
              path: "/ccpa"
            },
            target: "_self",
            ga: {
              ...Et,
              text: pt.sc_link_do_not_sell_my_information.defaultMessage
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        }),
        Pt = {
          pillBtn: "rockstargames-componentsc3b6f2981b06087c23badfeac4f54c90",
          selected: "rockstargames-componentsdc25adef8e588acc0d78df656b87d1cc",
          scSubLink: "rockstargames-componentse927e96203c4220eb4d249461d089542",
          scLink: "rockstargames-componentsf3bc75f4a8d113fbccd20bcb22defbd0"
        },
        zt = e => {
          let {
            text: a,
            target: t,
            href: s,
            location: n,
            ga: c,
            dataTestId: i,
            isSubLink: o,
            hasNotifications: r = !1,
            onClickCallback: m = (() => {}),
            tabIndex: f,
            reloadDocument: g = !1
          } = e;
          const {
            track: p
          } = (0, D.useGtmTrack)(), u = (0, fa.c)();
          let _ = s;
          n && (_ = n.domain === u.currentSite?.site ? n.path : `https://${u.sites[n.domain]}.rockstargames.com${n.path}`);
          const k = {
            ...c,
            link_url: _
          };
          return (0, d.jsxs)(l.Link, {
            className: o ? Pt.scSubLink : Pt.scLink,
            "data-testid": i || "menuLink",
            title: a,
            to: _,
            target: t,
            rel: "noreferrer",
            reloadDocument: g,
            tabIndex: f,
            onClick: e => {
              p(k), m(e)
            },
            children: [a, r && (0, d.jsx)("span", {
              className: Pt.scLinkNotification
            })]
          })
        },
        Vt = e => {
          let {
            id: a,
            text: t,
            target: s,
            href: n,
            location: c,
            ga: i,
            hasNotifications: o = !1,
            dataTestId: l,
            children: m = [],
            activeSubNavId: f,
            setActiveSubNavId: g,
            setSubNavExtraHeight: p,
            reloadDocument: u = !1,
            onClickCallback: _ = (() => {})
          } = e;
          const {
            windowWidth: k,
            windowHeight: b
          } = (0, $.useWindowResize)(), {
            track: v
          } = (0, D.useGtmTrack)(), {
            navOpen: h
          } = (0, D.useRockstarUserState)(), x = (0, r.useRef)(null), [y, N] = (0, r.useState)(0), [j, S] = (0, r.useState)(0), [w, C] = (0, r.useState)(!0);
          return (0, r.useEffect)((() => {
            f !== a && !1 === w && C(!0), f === a && C(!1)
          }), [f]), (0, r.useEffect)((() => {
            if (!x.current) return;
            N(x?.current?.scrollHeight);
            const e = window.getComputedStyle(x.current);
            if (e) {
              let a = 16 * parseInt(e.getPropertyValue("--scSubNav-opened-margin"), 10);
              Number.isNaN(a) && (a = 0), S(a)
            }
          }), [x, k, b]), m.length > 0 ? (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsxs)("button", {
              className: "rockstargames-componentse8c2778a7077d79660118825518f4a6b",
              type: "button",
              "data-testid": l || "menuButton",
              title: t,
              tabIndex: h ? 0 : -1,
              "data-children-hidden": w,
              onClick: e => {
                e.stopPropagation(), v(i), f === a ? (g(-1), p(0)) : (g(a), p(y + j + j))
              },
              children: [(0, d.jsx)("span", {
                className: "rockstargames-componentse3eab869e1022334fd614fabcaa75b22",
                children: t
              }), (0, d.jsx)("span", {
                className: "rockstargames-componentsc8982f9fa3bcb022016d9530b2e9e694"
              })]
            }, t), (0, d.jsx)("nav", {
              className: "rockstargames-componentsbf5af636537478795feeda339a97eab1",
              ref: x,
              "aria-hidden": w,
              style: {
                height: w ? 0 : `${y}px`
              },
              children: m.map((e => (0, d.jsx)(zt, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: w || !h ? -1 : 0
              })))
            })]
          }) : (0, d.jsx)(zt, {
            text: t,
            target: s,
            href: n,
            location: c,
            ga: i,
            hasNotifications: o,
            dataTestId: l,
            isSubLink: !1,
            onClickCallback: _,
            tabIndex: h ? 0 : -1,
            reloadDocument: u
          })
        },
        $t = e => {
          let {
            sc: a
          } = e;
          const {
            windowWidth: t,
            windowHeight: s
          } = (0, $.useWindowResize)(), n = (0, ma.useIntl)(), {
            languageSelectorOpened: c,
            setLanguageSelectorOpened: i,
            activeSubNavId: o,
            setActiveSubNavId: m,
            subNavExtraHeight: f,
            setSubNavExtraHeight: g
          } = It(), {
            setSelectedCharacterTuple: p,
            navOpen: u
          } = (0, D.useRockstarUserState)(), _ = (0, $.useLocale)(), k = (0, $.toScLocaleString)(_), [b, v] = (0, r.useState)(""), h = (0, l.useLocation)(), x = `${a.login}?returnUrl=${b}&lang=${k}`, y = `${a.signup}&returnUrl=${b}&lang=${k}`, N = (0, r.useMemo)((() => (0, fa.c)()), []), j = (0, r.useMemo)((() => {
            const e = ((e, a, t) => [{
              text: e.formatMessage(pt.sc_link_sign_in),
              href: a,
              ga: {
                event: "cta_login",
                text: pt.sc_link_sign_in.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "loginLink"
            }, {
              text: e.formatMessage(pt.sc_link_join_social_club),
              href: t,
              ga: {
                event: "cta_signup",
                text: pt.sc_link_join_social_club.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "signUpLink"
            }, Bt(e)])(n, x, y);
            return e
          }), [n, x, y, N]), [S, w] = (0, r.useState)(0), C = (0, r.createRef)(), I = () => {
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
          return (0, r.useEffect)((() => {
            const e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            v(e)
          }), [h]), (0, r.useEffect)((() => {
            p(!1)
          }), []), (0, r.useEffect)((() => {
            I(), Mt()((() => {
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
                children: j.map((e => (0, r.createElement)(Vt, {
                  ...e,
                  activeSubNavId: o,
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
              children: (0, d.jsx)(Lt.LanguageSelector, {
                theme: "sc-menu",
                languageSelectorOpened: c,
                setLanguageSelectorOpened: e => {
                  m(-1), i(e)
                },
                defaultMessage: "Select a Language"
              })
            })]
          })
        },
        Dt = e => {
          let {
            characterData: a,
            setMobileCardWidth: s,
            tabIndex: n
          } = e;
          const c = (0, ma.useIntl)(),
            {
              currentCharId: i,
              setCurrentCharId: o
            } = (0, D.useRockstarUserState)(),
            {
              track: l
            } = (0, D.useGtmTrack)(),
            m = (0, r.createRef)(),
            {
              platform: f,
              platformUsername: g,
              mugshotUrl: p,
              stats: u
            } = a,
            [_, k] = (0, r.useState)(p),
            [b] = (0, r.useState)(a.index),
            v = ft(f, "large"),
            h = i === a.index;
          return (0, r.useEffect)((() => {
            m.current && s && s(m?.current?.offsetWidth)
          }), [m]), (0, d.jsxs)("button", {
            className: "rockstargames-componentsf899d1127ad0b649f2a2efbd2cd3f8d9",
            type: "button",
            "aria-hidden": h,
            onClick: e => {
              e.stopPropagation(), o(b);
              let a = "";
              "pc" === f ? a = "PC" : "ps4" === f ? a = "PS4" : "ps5" === f ? a = "PS5" : "xboxone" === f ? a = "Xbox One" : "xboxsx" === f && (a = "Xbox Series X|S"), l({
                event: "character_selector_select",
                event_action: "select",
                event_category: "character_selector",
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
                src: _,
                alt: c.formatMessage(pt.profile_selector_mugshot, {
                  userName: g
                }),
                onError: () => {
                  k(t(6829))
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
                    src: gt(u.overview.rank.value),
                    alt: c.formatMessage(pt.profile_selector_rp_icon)
                  }), (0, d.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                })
              })]
            })]
          })
        },
        At = {
          pillBtn: "rockstargames-componentsf4f3b381f39d0b6ec48e8ef4d546df05",
          selected: "rockstargames-componentscfa2d5d46d4124e62e74921d8f4cc36a",
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
        Ft = e => {
          let {
            character: a,
            platformTag: s
          } = e;
          const {
            data: n
          } = (0, D.useRockstarUser)(), {
            track: c
          } = (0, D.useGtmTrack)(), i = (0, ma.useIntl)(), [o, l] = (0, r.useState)([]), [m, f] = (0, r.useState)(null), [g, p] = (0, r.useState)(null), [u, _] = (0, r.useState)(!1), [k, b] = (0, r.useState)(-1), [v, h] = (0, r.useState)([]), [x, y] = (0, r.useState)(0), N = t(6829), [j, S] = (0, r.useState)("0"), [w, C] = (0, r.useState)("0"), I = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), T = () => {
            L((0, d.jsx)("img", {
              src: N,
              alt: i.formatMessage(pt.profile_selector_mugshot, {
                userName: n.nickname
              })
            }))
          }, [M, L] = (0, r.useState)((0, d.jsx)("img", {
            className: At.scAvatarImg,
            src: a.mugshotUrl,
            alt: i.formatMessage(pt.profile_selector_mugshot, {
              userName: n.nickname
            }),
            onError: T
          }));
          (0, r.useEffect)((() => {
            l(n.crews ?? [])
          }), [n]), (0, r.useEffect)((() => {
            L((0, d.jsx)("img", {
              src: a.mugshotUrl,
              alt: n.nickname,
              onError: T
            })), S(I(a.stats.overview.bank.value)), C(I(a.stats.overview.cash.value)), y(a.stats.overview.rank.value)
          }), [a, n]), (0, r.useEffect)((() => {
            o && o.forEach((e => {
              !0 === e.isPrimary && (f(e.crewTag), p(e.crewColour), b(e.rankOrder), _(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && _(!0))
            }))
          }), [o]), (0, r.useEffect)((() => {
            const e = [];
            if (!u && k > -1)
              for (let a = 5; a > k; a -= 1) e.push((0, d.jsx)("div", {
                className: At.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== g ? g : ""
                }
              }, `crewrankbar-${a}`));
            h(e)
          }), [k, u, g]);
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
            className: At.scProfileDetails,
            onClick: E,
            onKeyUp: E,
            role: "button",
            tabIndex: -1,
            children: [(0, d.jsxs)("div", {
              className: At.scAvatar,
              children: [M, (0, d.jsx)("div", {
                className: At.scAvatarPlatform,
                "data-platform": a.platform,
                children: (0, d.jsx)("img", {
                  src: s.src,
                  alt: s.alt
                })
              })]
            }), (0, d.jsxs)("div", {
              className: At.scProfileStats,
              children: [(0, d.jsx)("div", {
                className: At.scNames,
                children: (0, d.jsxs)("div", {
                  className: At.scTagsNames,
                  children: [(0, d.jsx)("span", {
                    className: At.scUserName,
                    children: a.platformUsername
                  }), m && (0, d.jsxs)("span", {
                    className: At.scCrewName,
                    "data-arrow-tag": u,
                    children: [m, !u && (0, d.jsx)("div", {
                      className: At.scCrewRankBar,
                      children: v
                    })]
                  })]
                })
              }), (0, d.jsxs)("div", {
                className: At.scProgress,
                children: [(0, d.jsxs)("div", {
                  className: At.scRpLevel,
                  children: [(0, d.jsx)("img", {
                    className: At.scRpIcon,
                    src: gt(x),
                    alt: i.formatMessage(pt.profile_selector_rp_icon)
                  }), (0, d.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                }), (0, d.jsxs)("div", {
                  className: At.scMoney,
                  children: [(0, d.jsxs)("span", {
                    className: At.scCash,
                    children: ["$", w]
                  }), (0, d.jsxs)("span", {
                    className: At.scBank,
                    children: ["$", j]
                  })]
                })]
              })]
            })]
          })
        },
        Ot = (e, a) => {
          const [t, s] = (0, r.useState)(0);
          return (0, r.useEffect)((() => {
            if (e.current) {
              const {
                current: t
              } = e, n = t.getBoundingClientRect(), {
                width: c
              } = n;
              let i = c;
              if (!0 === a) {
                const e = window.getComputedStyle(t);
                i += parseInt(e.marginLeft, 10) + parseInt(e.marginRight, 10)
              }
              s(i)
            }
          }), [e]), t
        },
        Rt = e => {
          let {
            dragThreshold: a = 80,
            interactionDelay: t = 1e3,
            mobileGutterWidth: s = 17,
            slideChangeCallback: n = null,
            slideClickCallback: c = null,
            children: i = [],
            disablePager: o = !1,
            disableSwiper: l = !1
          } = e;
          const m = (0, r.createRef)(),
            f = Ot(m, !1),
            [g, p] = (0, r.useState)(!1),
            [u, _] = (0, r.useState)(0),
            [k, b] = (0, r.useState)(0),
            [v, h] = (0, r.useState)([s]),
            [x, y] = (0, r.useState)(v[0]),
            [N, j] = (0, r.useState)(252),
            [S, w] = (0, r.useState)(0),
            [C, I] = (0, r.useState)([]),
            [T, M] = (0, r.useState)([]),
            [L, E] = (0, r.useState)(!1),
            B = e => {
              if (!0 === g || !0 === l) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              b(a)
            },
            P = e => {
              if (!0 === g || 0 === k || !0 === l) return;
              const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                s = t > k ? 1 : -1,
                c = Math.abs(k - t);
              c > a ? (s > 0 ? (() => {
                if (!0 === g) return;
                p(!0);
                const e = u - 1 < 0 ? 0 : u - 1;
                _(e), y(v[e]), n && n(e)
              })() : (() => {
                if (!0 === g) return;
                p(!0);
                let e = u + 1 >= v.length ? v.length - 1 : u + 1;
                e < 0 && (e = 0), _(e), y(v[e]), n && n(e)
              })(), b(0)) : y(v[u] + c * s)
            },
            z = () => {
              !0 !== g && !0 !== l && (p(!0), !0 !== g && (y(v[u]), b(0)))
            };
          return (0, r.useEffect)((() => {
            const e = [];
            i.forEach((() => {
              e.push((0, r.createRef)())
            })), I(e)
          }), [i]), (0, r.useEffect)((() => {
            if (C.length < 1) return;
            j(C[0]?.current?.clientWidth || 0);
            const e = C[0]?.current.firstChild,
              a = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              t = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            w(t + a)
          }), [C]), (0, r.useEffect)((() => {
            !1 !== g && setTimeout((() => {
              p(!1)
            }), t)
          }), [g, t]), (0, r.useEffect)((() => {
            h(i.map(((e, a) => (e => {
              let a = 0;
              const t = i.length;
              return 1 === t ? .5 * f - .5 * N - 2 * s + S : (0 === e && (a = s - e * N), e === t - 1 && t > 1 && (a = t * N * -1 + (f - (s - S))), e > 0 && e < t - 1 && (a = e * N * -1 + (.5 * f - .5 * N + .5 * S)), a)
            })(a)))), 1 === i.length ? E(!0) : E(!1)
          }), [m.current, i, f]), (0, r.useEffect)((() => {
            const e = (a = u, i.map(((e, t) => {
              const s = {
                active: !1
              };
              return t === a && (s.active = !0), s
            })));
            var a;
            M(e)
          }), [i, u]), (0, r.useEffect)((() => {
            !0 !== o && !0 !== l || y(v[0])
          }), [l, o, v]), (0, d.jsxs)(d.Fragment, {
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
                children: i.map(((e, a) => (0, d.jsx)("div", {
                  className: "rockstargames-componentsd34474f7c86ffd91070243d726a8f136",
                  ref: C[a],
                  children: e
                }, `csItem-${e?.props?.characterData?.mugshotUrl}`)))
              })
            }), T.length > 1 && !1 === o && (0, d.jsx)("div", {
              className: "rockstargames-componentsdd5ee726efc577b883d7c4926d0ecab8",
              children: T.map((e => (0, d.jsx)("div", {
                className: "rockstargames-componentsf2481ad40d1468212637d32271adef69",
                "data-active": e.active
              }, e.mugshotUrl)))
            })]
          })
        },
        Ut = {
          pillBtn: "rockstargames-componentsc2232c50132404e0fd5107a423013072",
          selected: "rockstargames-componentsa7a1d25742ecfd267527d0b0573469b2",
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
        Gt = (0, $.withTranslations)((e => {
          let {
            sc: a,
            charListHidden: t,
            hideCharacterList: s,
            refCharacterListDesktop: n,
            menuPadding: c,
            longCharList: i,
            setLongCharList: o,
            isMobileMode: m,
            setIsMobileMode: f
          } = e;
          const {
            windowWidth: g,
            windowHeight: u
          } = (0, $.useWindowResize)(), _ = (0, ma.useIntl)(), {
            languageSelectorOpened: k,
            setLanguageSelectorOpened: b,
            activeSubNavId: v,
            setActiveSubNavId: h,
            subNavExtraHeight: x,
            setSubNavExtraHeight: y,
            scNavOpened: N,
            setScNavOpened: j
          } = It(), [S, w] = (0, r.useState)(""), C = (0, l.useLocation)(), {
            lsSettings: I
          } = (0, $.useRockstarWebLSSettings)(), {
            track: T
          } = (0, D.useGtmTrack)(), M = (0, p.useRockstarTokenPing)(), {
            data: L,
            loggedIn: E
          } = (0, D.useRockstarUser)(), {
            charactersNeeded: B,
            currentCharId: P,
            hasNotifications: z,
            navOpen: V,
            setCurrentCharId: A,
            setHasNotifications: F,
            setSelectedCharacterTuple: O,
            setUserData: R
          } = (0, D.useRockstarUserState)(), [U, G] = (0, r.useState)(null), [H, W] = (0, r.useState)(null), [q, X] = (0, r.useState)(!1), [K, Y] = (0, r.useState)(!1), [Q, Z] = (0, r.useState)(0), J = (0, r.createRef)(), ee = Ot(J, !1), ae = (0, r.createRef)(), [te, se] = (0, r.useState)(0), [ne, ce] = (0, r.useState)([]), [ie, oe] = (0, r.useState)(244), re = (0, r.useMemo)((() => (0, fa.c)()), []), le = (0, r.useMemo)((() => ((e, a, t, s, n) => [{
            text: e.formatMessage(pt.sc_link_activity_feed),
            location: {
              domain: fa.U.socialClub,
              path: "/"
            },
            target: "_self",
            ga: {
              ...Et,
              text: pt.sc_link_activity_feed.defaultMessage
            },
            dataTestId: "activityFeedLink"
          }, {
            text: e.formatMessage(pt.sc_link_account),
            target: "_self",
            dataTestId: "accountButton",
            children: [{
              text: e.formatMessage(pt.sc_link_view_my_profile),
              href: t.profile_link,
              target: "_self",
              ga: {
                ...Et,
                text: pt.sc_link_view_my_profile.defaultMessage
              },
              dataTestId: "viewMyProfileLink"
            }, {
              text: e.formatMessage(pt.sc_link_messages),
              location: {
                domain: fa.U.socialClub,
                path: "/message"
              },
              target: "_self",
              ga: {
                ...Et,
                text: pt.sc_link_messages.defaultMessage
              },
              dataTestId: "messagesLink"
            }, {
              text: e.formatMessage(pt.sc_link_game_activation),
              location: {
                domain: fa.U.socialClub,
                path: "/activate"
              },
              target: "_self",
              ga: {
                ...Et,
                text: pt.sc_link_game_activation.defaultMessage
              },
              dataTestId: "gameActivationLink"
            }]
          }, {
            text: e.formatMessage(pt.sc_link_notifications),
            location: {
              domain: fa.U.socialClub,
              path: "/notifications"
            },
            target: "_self",
            hasNotifications: s,
            ga: {
              ...Et,
              text: pt.sc_link_notifications.defaultMessage,
              location: {
                domain: fa.U.socialClub,
                path: "/notifications"
              }
            },
            dataTestId: "notificationsLink"
          }, {
            text: e.formatMessage(pt.sc_link_crews),
            location: {
              domain: fa.U.socialClub,
              path: `/member/${t.nickname}/crews`
            },
            target: "_self",
            ga: {
              ...Et,
              text: pt.sc_link_crews.defaultMessage
            },
            dataTestId: "crewsLink"
          }, {
            text: e.formatMessage(pt.sc_link_friends),
            target: "_self",
            dataTestId: "friendsButton",
            children: [{
              text: e.formatMessage(pt.sc_link_my_friends),
              location: {
                domain: fa.U.socialClub,
                path: `/member/${t.nickname}/friends`
              },
              target: "_self",
              ga: {
                ...Et,
                text: pt.sc_link_my_friends.defaultMessage
              },
              dataTestId: "myFriendsLink"
            }, {
              text: e.formatMessage(pt.sc_link_import_friends),
              location: {
                domain: fa.U.socialClub,
                path: "/friends/import"
              },
              target: "_self",
              ga: {
                ...Et,
                text: pt.sc_link_import_friends.defaultMessage
              },
              dataTestId: "importFriendsLink"
            }, {
              text: e.formatMessage(pt.sc_link_find_friends),
              location: {
                domain: fa.U.socialClub,
                path: "/members"
              },
              target: "_self",
              ga: {
                ...Et,
                text: pt.sc_link_import_friends.defaultMessage
              },
              dataTestId: "findFriendsLink"
            }]
          }, {
            text: e.formatMessage(pt.sc_link_settings),
            location: {
              domain: fa.U.socialClub,
              path: "/settings"
            },
            target: "_self",
            ga: {
              ...Et,
              text: pt.sc_link_settings.defaultMessage
            },
            dataTestId: "settingsLink"
          }, Bt(e), {
            text: e.formatMessage(pt.sc_link_log_out),
            href: `${a.logout}?returnUrl=${n}`,
            target: "_self",
            reloadDocument: !0,
            ga: {
              ...Et,
              text: pt.sc_link_log_out.defaultMessage
            },
            dataTestId: "logoutButton"
          }])(_, a, L, z, S, window)), [_, a, L, z, S, re]), de = () => {
            Y(c + ie * Q < ee)
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
          return (0, r.useEffect)((() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            re.currentSite?.site === fa.U.socialClub && (e = encodeURIComponent("/")), w(e)
          }), [C]), (0, r.useEffect)((() => {
            ce(L.characters[B] ?? [])
          }), [L, B]), (0, r.useEffect)((() => {
            L && R(L)
          }), [L]), (0, r.useEffect)((() => {
            const e = L?.characters.gtao;
            if (null !== E && !e.length) return void O(!1);
            if (null == P || !e.length) return;
            const a = e?.[P] ?? e?.[0] ?? null;
            O(!!a?.platform && [a.platform, a.characterSlot])
          }), [P, L, E]), (0, r.useEffect)((() => {
            (async () => {
              if (!L?.id) return;
              const {
                count: e
              } = await (0, $.coreScApiFetch)("notification/count", {
                pingBearer: M
              });
              F(e > 0)
            })()
          }), [L]), (0, r.useEffect)((() => {
            de()
          }), [ie]), (0, r.useEffect)((() => {
            s(!0), f(g < 768), f(g < 768 || u < 649)
          }), [g, u]), (0, r.useEffect)((() => {
            let e = ne.length - 1;
            e < 0 && (e = 0), Z(e);
            const a = ne.length > 0 ? ne[P] ?? ne[0] : null;
            if (!a) return;
            const t = null !== a ? ft(a.platform, "large") : null;
            W(t), G(a), ne.length > 1 ? X(!0) : X(!1), o(ne.length - 1 > 3)
          }), [P, ne]), (0, r.useEffect)((() => {
            de()
          }), [Q, m, g, ne]), (0, r.useEffect)((() => {
            me(), Mt()((() => {
              setTimeout(me, 0)
            }), 300)
          }), [g, u]), (0, r.useEffect)((() => {
            const e = I?.currentCharId ?? 0;
            e !== P && A(Math.max(0, Math.min(e, ne.length - 1)))
          }), [ne, I]), (0, d.jsxs)(d.Fragment, {
            children: [null !== U && "gtao" === B && (0, d.jsxs)("div", {
              className: Ut.scProfile,
              tabIndex: -1,
              "aria-label": _.formatMessage(pt.profile_selector_profile_card),
              children: [(0, d.jsx)(Ft, {
                s: Ut,
                character: U,
                platformTag: H
              }), !0 === q && (0, d.jsxs)("div", {
                className: Ut.scCharacterSelector,
                children: [(0, d.jsx)("button", {
                  className: Ut.scCharacterSelectBtn,
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
                    children: (0, d.jsx)(ma.FormattedMessage, {
                      ...pt.profile_selector_switch_character
                    })
                  })
                }), !1 === m && (0, d.jsx)("div", {
                  className: Ut.scCharacterList,
                  "data-long-list": i,
                  "aria-hidden": t,
                  ref: n,
                  children: ne.map((e => (0, d.jsx)(Dt, {
                    tabIndex: t ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: oe
                  }, e.mugshotUrl)))
                }), !0 === m && (0, d.jsx)("div", {
                  className: Ut.scCharacterList,
                  "data-single-item": 2 === ne.length,
                  "data-swiper-disabled": K,
                  "aria-hidden": t,
                  ref: J,
                  children: (0, d.jsx)(Rt, {
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
                    children: ne.filter(((e, a) => a !== P)).map((e => (0, r.createElement)(Dt, {
                      characterData: e,
                      setMobileCardWidth: oe,
                      key: e.mugshotUrl,
                      tabIndex: t ? -1 : 0
                    })))
                  })
                })]
              })]
            }), (0, d.jsxs)("nav", {
              className: Ut.scNav,
              "aria-hidden": !V,
              children: [(0, d.jsx)("button", {
                className: Ut.scNavHeader,
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
                className: Ut.scNavWrap,
                "data-opened": N,
                "data-logged-in": "true",
                ref: ae,
                style: {
                  "--scNavWrap-max-height": `${te+x}px`
                },
                children: le.map(((e, a) => (0, r.createElement)(Vt, {
                  ...e,
                  id: a,
                  activeSubNavId: v,
                  setActiveSubNavId: h,
                  setSubNavExtraHeight: y,
                  key: e.text
                })))
              })]
            }), (0, d.jsx)("div", {
              className: Ut.scLanguageSelector,
              style: {
                visibility: V ? null : "hidden"
              },
              children: (0, d.jsx)(Lt.LanguageSelector, {
                theme: "sc-menu",
                languageSelectorOpened: k,
                setLanguageSelectorOpened: b
              })
            })]
          })
        })),
        Ht = {
          scMenu: "rockstargames-componentsc34c7305b9f2989cf93b80ac3aafbc3e",
          pillBtn: "rockstargames-componentse7f130c3045467b94e9ebd673e278be8",
          selected: "rockstargames-componentsa3b848b41da0c4d7ede094309ec02867",
          navOpen: "rockstargames-componentsa87f30bf36e8185078b9645b8068185c",
          dragHandle: "rockstargames-componentsbdead6937fad75f234a9ec8e6da5a76f",
          dragHandleBtn: "rockstargames-componentse406513904d41e71c3d428c652ccceb6",
          scOverlay: "rockstargames-componentsf9d5a3200b2148ecf28831933abe10a0"
        },
        Wt = (0, ma.withIntl)((() => {
          const {
            windowHeight: e
          } = (0, $.useWindowResize)(), a = (0, ma.useIntl)(), {
            languageSelectorOpened: s,
            setLanguageSelectorOpened: n,
            setActiveSubNavId: c,
            scNavOpened: i,
            setScNavOpened: o,
            charListHidden: l,
            setCharListHidden: m
          } = It(), [f, g] = (0, r.useState)(!1), {
            setBodyIsScrollable: u
          } = (0, $.useBodyScrollable)(), {
            navHidden: _ = !1
          } = (0, p.useState)(), {
            loggedIn: k
          } = (0, D.useRockstarUser)(), {
            currentCharId: b,
            navOpen: v,
            setNavOpen: h,
            userData: x
          } = (0, D.useRockstarUserState)(), {
            track: y
          } = (0, D.useGtmTrack)(), [N, j] = (0, r.useState)(!1), S = (0, p.useReactiveVar)(D.scConfig), w = (0, r.useRef)(), [C, I] = (0, r.useState)(0), T = (0, r.createRef)(), [M, L] = (0, r.useState)(!1), [E, B] = (0, r.useState)(0), [P, z] = (0, r.useState)(!1), {
            mutateLSSettings: V,
            lsSettings: A
          } = (0, $.useRockstarWebLSSettings)(), F = (0, r.useCallback)((e => {
            m(e), w.current && !0 === e && (w.current.scrollTop = 0)
          }), [w]);
          return (0, r.useEffect)((() => {
            null !== b && A.currentCharId !== b && V({
              key: "currentCharId",
              value: b
            }), !1 === k ? V({
              key: "currentCharId",
              value: null
            }) : k && !x && y({
              event: "account_synced"
            })
          }), [b, k]), (0, r.useEffect)((() => {
            w.current && (!1 === l && !1 === N && (w.current.style.height = `${w.current.scrollHeight}px`), !0 === l && (w.current.style.height = null))
          }), [l, w, N]), (0, r.useEffect)((() => {
            const e = () => {
                h(!1), F(!0)
              },
              a = a => {
                "Escape" === a.code && e()
              };
            return document.addEventListener("click", e), document.addEventListener("keyup", a), () => {
              document.removeEventListener("click", e), document.removeEventListener("keyup", a)
            }
          }), []), (0, r.useEffect)((() => {
            h(!1), F(!0)
          }), [_]), (0, r.useEffect)((() => {
            if (T.current) {
              const {
                current: e
              } = T, a = window.getComputedStyle(e);
              I(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }), [T]), (0, r.useEffect)((() => {
            u(!M || !v)
          }), [v, M]), (0, r.useEffect)((() => {
            z(window.navigator.userAgent.includes("Mac"))
          }), []), (0, r.useEffect)((() => {
            T.current && g(T?.current?.scrollHeight >= e)
          }), [T, e]), (0, r.useEffect)((() => {
            v || (c(-1), n(!1))
          }), [v]), (0, r.useEffect)((() => {
            s && (l || F(!0), i && (o(!1), c(-1)))
          }), [s]), (0, r.useEffect)((() => {
            i && (s && n(!1), l || F(!0))
          }), [i]), null === k ? null : (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsxs)("div", {
              className: [Ht.scMenu, v ? Ht.navOpen : ""].join(" "),
              "data-logged-in": k,
              "data-mac-browser": P,
              "data-scroll-mode": f,
              ref: T,
              "aria-hidden": !v,
              children: [(0, d.jsx)("button", {
                className: Ht.dragHandleBtn,
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
                  className: Ht.dragHandle,
                  src: t(9796),
                  alt: a.formatMessage(pt.sc_menu_drag_handle)
                })
              }), k ? (0, d.jsx)(Gt, {
                sc: S,
                charListHidden: l,
                hideCharacterList: F,
                refCharacterListDesktop: w,
                menuPadding: C,
                longCharList: N,
                setLongCharList: j,
                isMobileMode: M,
                setIsMobileMode: L
              }) : (0, d.jsx)($t, {
                sc: S,
                navOpen: v
              })]
            }), (0, d.jsx)("div", {
              className: [Ht.scOverlay, v ? Ht.navOpen : ""].join(" "),
              "data-logged-in": k
            })]
          })
        }), ga),
        qt = t(6829),
        Xt = t(9024),
        Kt = (0, ma.withIntl)((e => {
          let {
            setOtherHeaderDropdowns: a
          } = e;
          const t = (0, ma.useIntl)(),
            {
              data: s
            } = (0, D.useRockstarUser)(),
            {
              charactersNeeded: n,
              currentCharId: c,
              navOpen: i,
              setNavOpen: o
            } = (0, D.useRockstarUserState)(),
            {
              track: l
            } = (0, D.useGtmTrack)(),
            [m, f] = (0, r.useState)(null),
            [g, p] = (0, r.useState)(!1),
            [u, _] = (0, r.useState)(null),
            [k, b] = (0, r.useState)(!1),
            [v, h] = (0, r.useState)([]);
          (0, r.useEffect)((() => {
            h(s.characters[n] ?? [])
          }), [s, n]);
          const x = (0, r.useCallback)((e => {
            e.stopPropagation(), o(!i), l({
              event: "account_menu_click",
              element_placement: "Account Menu",
              text: i ? "close" : "open"
            })
          }), [i]);
          return (0, r.useEffect)((() => {
            const e = s?.id ?? !1,
              a = e ? (v?.[c]?.mugshotUrl ?? s?.avatar) || qt : Xt,
              t = ft(v?.[c]?.platform, "small") ?? null;
            _(t), f(a), p(e), b(!!v?.[c]?.mugshotUrl)
          }), [s, v, c, qt, Xt]), (0, d.jsxs)("button", {
            className: "rockstargames-componentse9d1eed6731789273c2981d6b18080b6",
            "data-img-set": k,
            "aria-label": t.formatMessage(pt.sc_menu_toggle),
            type: "button",
            onClick: e => x(e),
            "data-testid": "avaterMenuButton",
            children: [(0, d.jsx)("img", {
              className: "rockstargames-componentsaa210c100e4e46d1750eb7ffe779251c",
              src: m || "",
              onError: () => {
                f(qt)
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
        }), ga),
        Yt = {
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
        Qt = e => {
          let {
            backgroundColor: a,
            brands: t = [],
            description: s = "",
            ctaLabel: n = "Click here",
            ctaLink: c = "https://rockstargames.com",
            gradient: i = !0,
            image: o,
            imageOrientation: l = "right",
            title: m = ""
          } = e;
          const [f, g] = (0, r.useState)(!1), {
            ref: p,
            inView: u
          } = (0, U.useInView)({
            threshold: .6
          }), {
            track: _
          } = (0, D.useGtmTrack)(), k = {
            "--promo-background": a ?? "var(--black-200)",
            "--promo-image": `url(${(0,S.useGetCdnSource)(o)})` ?? 0,
            "--promo-order": "left" === l ? "row" : "row-reverse"
          };
          return (0, r.useEffect)((() => {
            u && !f && (_({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: "promo module",
              element_placement: "promo module"
            }), g(!0))
          }), [u]), (0, d.jsxs)(Be.motion.div, {
            className: Yt.promoModule,
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
            ref: p,
            children: [(0, d.jsx)("div", {
              className: [Yt.promoModuleImage, i ? Yt.gradient : "", "left" === l ? Yt.left : Yt.right].join(" ")
            }), (0, d.jsxs)("div", {
              className: Yt.promoModuleContentContainer,
              children: [(0, d.jsx)(y, {
                brands: t,
                className: Yt.promoModuleBrands
              }), (0, d.jsxs)("div", {
                className: Yt.promoModuleTextContent,
                children: [m && (0, d.jsx)("h3", {
                  children: m
                }), s && (0, d.jsx)("p", {
                  children: s
                })]
              }), n && (0, d.jsx)(T, {
                to: c,
                text: n,
                onClick: () => {
                  _({
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
      var Zt = t(1532);
      const Jt = {
          rating: "rockstargames-componentsc004868ea6a6081b6841ea37941dc6dc",
          withDescriptors: "rockstargames-componentsc4c1846c85cbccacafd56ae4b957c2c2",
          withOutDescriptors: "rockstargames-componentse3265d7edca1582513d0fdc449236c9b",
          text: "rockstargames-componentseee91c3283b0b0f696b1792bb7176175"
        },
        es = (0, ma.defineMessages)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      (0, $.importAll)(t(7876));
      const as = Qe((0, ma.withIntl)((e => {
          let {
            descriptors: a = null,
            footer: s = null,
            href: n,
            img: c = null,
            titleSlug: i = null,
            style: o = {},
            className: l
          } = e;
          const [f, g] = (0, r.useState)(!1), {
            inView: u
          } = (0, U.useInView)({
            threshold: .6
          }), [_, k] = (0, r.useState)({
            img_rating: c,
            rating_descriptors: a,
            rating_footer: s,
            url_rating: n
          }), {
            track: b
          } = (0, D.useGtmTrack)(), v = (0, ma.useIntl)(), {
            data: h
          } = (0, p.useQuery)(Zt.GameData, {
            variables: {
              titleSlug: i
            },
            skip: !i
          });
          if ((0, r.useEffect)((() => {
              h && k(h?.game)
            }), [h]), (0, r.useEffect)((() => {
              u && !f && _.img_rating && (b({
                event: "page_section_impression",
                event_action: "impression",
                event_category: "page_section",
                event_label: "rating",
                element_placement: "rating"
              }), g(!0))
            }), [u]), !_.img_rating) return null;
          const x = !!_.rating_descriptors;
          return (0, d.jsxs)("div", {
            className: [Jt.rating, x ? Jt.withDescriptors : Jt.withOutDescriptors, l || ""].join(" "),
            style: (0, $.safeStyles)(o),
            children: [(0, d.jsx)(m, {
              to: _.url_rating,
              target: "_blank",
              children: (0, d.jsx)("img", {
                alt: v.formatMessage(es.components_ratings_link_alt, {
                  rating: (y = _.img_rating, y.replace(/_/g, " ").split(".")[0].toUpperCase())
                }),
                src: t(120)(`./${_.img_rating}`)
              })
            }), x && (0, d.jsxs)("div", {
              className: Jt.text,
              children: [(0, d.jsx)("p", {
                className: Jt.descriptors,
                dangerouslySetInnerHTML: {
                  __html: _?.rating_descriptors?.split(/<br\s?\/?>/).join(", ") || ""
                }
              }), _.rating_footer && (0, d.jsx)("hr", {}), _.rating_footer && (0, d.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: _.rating_footer.replace(/ \//g, ", ")
                }
              })]
            })]
          });
          var y
        }), ga)),
        ts = {
          responsiveFlexBox: "rockstargames-componentse4a3b9b6071fe50e64de8f4c9c6841d3",
          responsiveFlexItem: "rockstargames-componentsaa899ffe0d4ed9474eb2058b5884ee51",
          responsiveImage: "rockstargames-componentsaaa1a0871637276a49c581a317952643"
        },
        ss = e => {
          let {
            children: a,
            className: t,
            style: s
          } = e;
          return (0, d.jsx)("div", {
            className: [ts.responsiveFlexBox, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: a
          })
        },
        ns = {
          responsiveFlexItem: "rockstargames-componentse8d9468ec8cdbdcf6b00a4daedcfbab5"
        },
        cs = e => {
          let {
            children: a,
            className: t,
            style: s
          } = e;
          return (0, d.jsx)("div", {
            className: [ns.responsiveFlexItem, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: a
          })
        },
        is = {
          responsiveGridBox: "rockstargames-componentse91d4d1de6e479c331b2bc50227fae96",
          responsiveGridItem: "rockstargames-componentsb7b98f304a0507fadedd1e3449fba010"
        },
        os = e => {
          let {
            children: a,
            cols: t,
            className: s,
            rows: n,
            style: c
          } = e;
          const i = c ? {
            ...c
          } : {};
          return void 0 !== t && (i.gridTemplateColumns = `repeat(${t}, 1fr)`), void 0 !== n && (i.gridTemplateRows = `repeat(${n}, 1fr)`), (0, d.jsx)("div", {
            className: [is.responsiveGridBox, void 0 !== s ? s : ""].join(" "),
            style: i,
            children: a
          })
        },
        rs = {
          responsiveGridBox: "rockstargames-componentsd2a57229e98f203a0df1d5e4dc5168e7",
          responsiveGridItem: "rockstargames-componentsa550b6abbcce0c5385bb1bbf3aaaaf89"
        },
        ls = e => {
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
        ds = {
          responsiveImage: "rockstargames-componentscf17dc54f4db5d6644c56b416b15b33f"
        },
        ms = e => {
          let {
            src: a,
            className: t = "",
            animate: s,
            ariaLabel: n,
            style: c = {}
          } = e;
          const [i, o] = (0, $.usePreloadImg)(a);
          return i ? (c.backgroundImage = `url(${a})`, (0, d.jsx)("div", {
            role: "img",
            "aria-label": n ?? "R* Games",
            className: [ds.responsiveImage, s ? ds.animateBox : "", t].join(" "),
            style: {
              ...c,
              "--aspect-ratio": o.width / o.height
            }
          })) : null
        },
        fs = {
          responsiveSection: "rockstargames-componentsc5c99169fa31c5009611af9233db5968",
          maxWidth: "rockstargames-componentsd4363484ab65e013f4e7583a00c7a5f4"
        },
        gs = e => {
          let {
            children: a,
            className: t,
            style: s,
            maxWidth: n
          } = e;
          return (0, d.jsx)("section", {
            className: [fs.responsiveSection, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: n ? (0, d.jsx)("div", {
              className: fs.maxWidth,
              children: a
            }) : a
          })
        },
        ps = () => (0, d.jsx)(m, {
          className: "rockstargames-componentscc006d4ff1bfa49216622ebc92289fb0",
          alt: "Rockstar Games Home",
          to: "/"
        }),
        us = () => {
          const {
            pathname: e
          } = (0, l.useLocation)();
          return (0, r.useEffect)((() => {
            window.scrollTo(0, 0)
          }), [e]), null
        },
        _s = (0, r.forwardRef)(((e, a) => {
          const {
            threshold: t,
            callback: s,
            children: n,
            requireUser: c
          } = e, {
            track: i
          } = (0, D.useGtmTrack)(c), [o, l] = (0, r.useState)(a?.current);
          return (0, r.useEffect)((() => {
            a?.current && l(a.current)
          }), [a]), ((e, a, t) => {
            const [s, n] = (0, r.useState)({
              scrollDepths: e,
              scrollY: 0
            }), {
              scrollDepths: c,
              scrollY: i
            } = s;
            (0, r.useEffect)((() => {
              "undefined" != typeof window && 0 !== window.pageYOffset && n((e => ({
                ...e,
                scrollY: window.pageYOffset
              })))
            }), []), (0, r.useEffect)((() => {
              n({
                scrollDepths: e,
                scrollY: 0
              })
            }), [window.location.pathname]);
            const o = (0, r.useCallback)((() => {
              const e = document.documentElement,
                i = document.body,
                r = t?.scrollTop || e.scrollTop || i.scrollTop,
                l = t?.scrollHeight || e.scrollHeight || i.scrollHeight,
                {
                  clientHeight: d
                } = e,
                m = r / (l - d) * 100;
              if (c) {
                const e = Math.min(...c, l);
                if (m >= e) {
                  const s = c.filter((a => a !== e));
                  0 === s.length && (t ?? window).removeEventListener("scroll", o), a && a({
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
            (0, r.useEffect)((() => {
              if ("undefined" == typeof window) return;
              const e = t ?? window;
              return e.addEventListener("scroll", o), () => e.removeEventListener("scroll", o)
            }), [o])
          })(t, (e => {
            let {
              scrollY: a
            } = e;
            i({
              event: "page_scroll",
              event_category: "page_scroll",
              event_action: a,
              scroll_depth: a
            }), "function" == typeof s && s(a)
          }), o), n
        })),
        ks = (0, $.withTranslations)((e => {
          let {
            t: a
          } = e;
          const [t] = (0, r.useState)(""), s = (0, l.useNavigate)(), n = (0, p.useMutateState)();
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
        bs = {
          skeleton: "rockstargames-componentsa76d39bab84e8f469972e22834204389",
          pulse: "rockstargames-componentse8aa563c46cfd0a74ea4dcfc1bb8a9e4",
          gen9Hero: "rockstargames-componentsd63bf424caff53fef09b8e4c2e20a3c3"
        },
        vs = e => {
          let {
            skeleton: a
          } = e;
          return a ? (0, d.jsx)("div", {
            className: [bs.skeleton, bs[a]].join(" ")
          }) : null
        },
        hs = (0, ma.defineMessages)({
          components_track_list_title: {
            id: "components_track_list_title",
            defaultMessage: "Tracklist"
          }
        }),
        xs = {
          bodySmall: "rockstargames-componentsb9aa3afbdb37ff0aea705849df408c42"
        },
        ys = e => {
          let {
            track: a,
            artist: t
          } = e;
          return (0, d.jsxs)("div", {
            className: xs.track,
            children: [(0, d.jsx)("p", {
              children: a
            }), (0, d.jsx)("p", {
              className: xs.bodySmall,
              children: t
            })]
          })
        },
        Ns = (0, ma.withIntl)((e => {
          let {
            children: a
          } = e;
          return (0, d.jsxs)("div", {
            className: "rockstargames-componentsadbe1e185cd3cd1481eb242c25b0eb14",
            children: [(0, d.jsx)("h4", {
              className: "rockstargames-componentsa37f37abb5276c67d47bca88073adb3f",
              children: (0, d.jsx)(ma.FormattedMessage, {
                ...hs.components_track_list_title
              })
            }), (0, d.jsx)("div", {
              className: "rockstargames-componentsc0e76cb19681f62e125f0b004c296f0a",
              children: (0, d.jsx)("div", {
                className: "rockstargames-componentsb2a58aa8f0fbec82f1c7e834739aabad",
                children: r.Children.map(r.Children.toArray(a), (e => (0, d.jsx)(ys, {
                  ...e?.props
                })))
              })
            })]
          })
        }), ga),
        js = "rockstargames-componentsce552800b27ae8165e7d3dc5a189fe11",
        Ss = "rockstargames-componentsf1715da046f9be2e226bc9f6342294c0",
        ws = {
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
        Cs = e => {
          let {
            title: a = "thumbnail gallery",
            thumbsPerView: t = 3,
            loop: s = !1,
            navigation: n = !1,
            slideChildren: c = [],
            variants: i = {
              parent: void 0,
              main: void 0,
              thumbs: void 0
            },
            transition: o = {
              parent: void 0,
              main: void 0,
              thumbs: void 0
            }
          } = e;
          const {
            track: l
          } = (0, D.useGtmTrack)(), [m, f] = (0, r.useState)([Ke.O4, Ke.Hj, Ke.eM]), [g, p] = (0, r.useState)(null), [u, _] = (0, r.useState)(null);
          return (0, r.useEffect)((() => {
            const e = [Ke.O4, Ke.Hj, Ke.eM];
            n && e.push(Ke._2), f(e)
          }), [n]), (0, r.useEffect)((() => {
            if (!c) return;
            const e = c.map(((e, a) => (0, d.jsx)(L.Ky, {
              children: e
            }, Symbol(a).toString())));
            _(e)
          }), [c]), u ? (0, d.jsxs)(Be.motion.div, {
            className: "rockstargames-componentsabb6bd9f780af17f6dcf79964e885edb",
            variants: i.parent,
            transition: o.parent,
            initial: "initial",
            animate: "animate",
            children: [(0, d.jsx)(Be.motion.div, {
              className: js,
              variants: i.main,
              transition: o.main,
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
                breakpoints: ws,
                className: js,
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
            }), (0, d.jsx)(Be.motion.div, {
              className: Ss,
              variants: i.thumbs,
              transition: o.thumbs,
              initial: "initial",
              animate: "animate",
              children: (0, d.jsx)(L.wx, {
                threshold: 50,
                onSwiper: p,
                loop: s,
                breakpoints: ws,
                slidesPerView: t,
                freeMode: !0,
                watchSlidesProgress: !0,
                modules: m,
                className: Ss,
                children: u
              })
            })]
          }) : null
        };
      var Is = t(3260);
      const Ts = e => {
          let {
            id: a = null,
            ids: t = null,
            setTitleDataPath: s = null,
            sync: n = !1
          } = e;
          const c = t ?? [a],
            {
              data: i
            } = (0, p.useQuery)(Is.TinaModulesInfo, {
              variables: {
                ids: c,
                sync: n
              },
              setTitleDataPath: s,
              skip: !c.length
            });
          return i?.tinaModulesInfo ?? null
        },
        Ms = Qe((e => {
          let {
            components: a = {},
            id: t = null,
            ids: s = null,
            skeleton: n
          } = e;
          const c = Ts({
            id: t,
            ids: s
          });
          if (!c) return (0, d.jsx)(vs, {
            skeleton: n
          });
          const i = c?.[0]?.tina;
          return i ? (0, d.jsx)(d.Fragment, {
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
        Ls = e => {
          let {
            children: a,
            style: t,
            theme: s
          } = e;
          const [n, c] = (0, r.useState)(s);
          return (0, r.useEffect)((() => {
            s && c(s)
          }), [s]), (0, d.jsx)("div", {
            className: "rockstargames-componentsf1a049e5eed244f3a602a9842424d1c3",
            style: t,
            "data-theme": n,
            children: a
          })
        };
      var Es = t(9636);
      const Bs = {
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
        Ps = e => {
          let {
            description: a,
            foreign_id: t = document.location.pathname,
            foreign_type: s = "url",
            title: n
          } = e;
          const {
            track: c
          } = (0, D.useGtmTrack)(), {
            loggedIn: i
          } = (0, D.useRockstarUser)(), {
            refetch: o
          } = (0, p.useQuery)(Es.UserGetVote, {
            skip: !0
          }), [l] = (0, p.useMutation)(Es.UserCastVote), [m, f] = (0, r.useState)(null), g = (0, r.useCallback)((async e => {
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
          return (0, r.useEffect)((() => {
            (async () => {
              if (!i || !t || !s) return;
              const e = await o({
                foreign_id: t,
                foreign_type: s
              });
              f(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [t, s, i]), (0, d.jsx)("div", {
            className: Bs.userVote,
            children: (0, d.jsxs)("div", {
              className: Bs.voteContent,
              children: [(0, d.jsxs)("div", {
                className: Bs.info,
                children: [(0, d.jsx)("h3", {
                  children: n
                }), (0, d.jsx)("p", {
                  children: a
                })]
              }), (0, d.jsxs)("div", {
                className: [Bs.voteButtons, i ? "" : Bs.loggedOutButtons].join(" "),
                children: [(0, d.jsx)("button", {
                  onClick: () => g(!0),
                  className: [Bs.upVote, m ? Bs.voteButtonActive : ""].join(" "),
                  type: "button",
                  "aria-label": "Vote up"
                }), (0, d.jsx)("button", {
                  className: [Bs.downVote, !1 === m ? Bs.voteButtonActive : ""].join(" "),
                  onClick: () => g(!1),
                  type: "button",
                  "aria-label": "Vote down"
                })]
              })]
            })
          })
        },
        zs = {
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
        Vs = (0, $.withLocale)((e => {
          let {
            locale: a,
            t,
            videos: s
          } = e;
          const {
            setBodyIsScrollable: n
          } = (0, $.useBodyScrollable)(), [c, i] = (0, r.useState)(0), [o, l] = (0, r.useState)(0), f = (0, r.useRef)(null), p = (0, r.useRef)(null);
          return (0, r.useEffect)((() => {
            if (!f.current || p.current) return;
            const e = new(g())(f.current);
            e.get("press").set({
              time: 0
            }), e.get("tap").set({
              time: 150
            });
            const a = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
              t = () => {
                i(c - 1 < 0 ? 0 : c - 1), l(0)
              },
              o = () => {
                const e = c + 1 >= s.length - 1 ? s.length - 1 : c + 1;
                i(e), l(0)
              },
              r = e => {
                l(e.isFinal ? 0 : e.deltaX), "panleft" !== e.additionalEvent && "panright" !== e.additionalEvent || !p.current?.classList.contains(zs.dragging) || a() && n(!1)
              },
              d = () => {
                a() && n(!0), l(0)
              },
              m = e => {
                "press" === e.type && f.current?.classList.add(`${zs.disableClick}`), "tap" === e.type && (f.current?.classList.remove(`${zs.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
              },
              u = () => {
                a() && n(!0), f.current && f.current.classList.remove(`${zs.disableClick}`)
              },
              _ = () => {
                a() && n(!0)
              };
            return p.current.addEventListener("transitionend", _), e.on("swiperight", t), e.on("swipeleft", o), e.on("pan", r), e.on("panend", d), e.on("press tap", m), e.on("pressup", u), () => {
              e.off("swiperight", t), e.off("swipeleft", o), e.off("pan", r), e.off("panend", d), e.off("press tap", m), e.off("pressup", u), p.current && p.current.removeEventListener("transitionend", _), l(0)
            }
          }), [f.current, c]), (0, d.jsxs)("section", {
            className: zs.carousel,
            children: [(0, d.jsx)("div", {
              className: zs.track,
              ref: f,
              children: (0, d.jsx)("div", {
                className: `${zs.items} ${0!==o?zs.dragging:""}`,
                ref: p,
                style: {
                  transform: `translateX(calc(-${100*c}% + ${o}px))`
                },
                children: s.map(((e, a) => (0, d.jsx)(m, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through screencap",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  className: c === a ? zs.active : "",
                  role: "link",
                  title: e.title,
                  tabIndex: c === a ? 0 : -1,
                  children: (0, d.jsx)(Os, {
                    video: e,
                    size: 1280
                  })
                }, e.id)))
              })
            }), (0, d.jsxs)("footer", {
              children: [(0, d.jsx)("div", {
                className: zs.text,
                children: s.map(((e, s) => (0, d.jsx)(m, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through footer",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  role: "link",
                  title: e.title,
                  tabIndex: c === s ? 0 : -1,
                  children: (0, d.jsxs)("div", {
                    className: [zs.info, s === c ? zs.active : ""].join(" "),
                    children: [(0, d.jsxs)("div", {
                      className: zs.title,
                      children: [(0, d.jsx)("div", {
                        className: zs.gameTitle,
                        children: `${e.game.title}${"fr_fr"===a?" ":""}`
                      }), (0, d.jsx)("h2", {
                        className: zs.videoTitle,
                        children: `${e.title}`
                      })]
                    }), (0, d.jsx)(j, {
                      className: zs.cta,
                      children: t("Watch Now")
                    })]
                  })
                }, e.id)))
              }), (0, d.jsx)("div", {
                className: zs.dots,
                children: s.map(((e, a) => (0, d.jsx)("button", {
                  "aria-label": `Slide ${a}`,
                  "data-gtm-category": "Marquee",
                  "data-gtm-action": "Dot click",
                  "data-gtm-label": `Dot clicked to ${a}`,
                  onClick: () => i(a),
                  className: c === a ? zs.active : "",
                  type: "button"
                }, e.id)))
              })]
            })]
          })
        })),
        $s = {
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
        Ds = (0, $.withTranslations)((e => {
          let {
            vids: a,
            games: t,
            title: s,
            gameTitleNecessary: n
          } = e;
          const c = void 0 !== t ? "games" : "videos",
            i = "videos" === c ? a : t.results,
            o = (0, r.useRef)(null),
            [l, m] = (0, r.useState)(0),
            [f, p] = (0, r.useState)(0),
            u = e => {
              const a = Math.ceil(i.length / l);
              e < 0 ? e = 0 : e >= a - 1 && (e = a - 1), p(e)
            },
            [_, k] = (0, r.useState)(0);
          let b;
          return (0, r.useEffect)((() => {
            const e = () => {
              const e = e => window.matchMedia(`(max-width: ${e})`).matches,
                a = e("768px") ? 1 : e("990px") || e("1440px") ? 2 : e("1920px") ? 3 : 4;
              m(a)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [l]), (0, r.useEffect)((() => {
            if (o.current) {
              const e = new(g())(o.current),
                a = () => {
                  u(f - 1), k(0)
                },
                t = () => {
                  u(f + 1), k(0)
                },
                s = e => {
                  k(e.isFinal ? 0 : e.deltaX)
                },
                n = () => {
                  k(0)
                };
              return e.on("swiperight", a), e.on("swipeleft", t), e.on("pan", s), e.on("panend", n), () => {
                e.off("swiperight", a), e.off("swipeleft", t), e.off("pan", s), e.off("panend", n), k(0)
              }
            }
          }), [o.current, f]), b = "games" === c ? (0, d.jsx)(d.Fragment, {
            children: t.results.map((e => (0, d.jsx)(We, {
              game: e,
              dontOverrideTo: !0,
              to: `/videos?type=game&gameId=${e.id}`
            }, e.id)))
          }) : (0, d.jsx)(d.Fragment, {
            children: a.map((e => (0, d.jsx)(Rs, {
              video: e,
              gameTitleNecessary: n
            }, e.id)))
          }), (0, d.jsxs)("section", {
            className: $s.videoList,
            children: [(0, d.jsxs)("h3", {
              className: $s.sectionHeader,
              children: [s, (0, d.jsxs)("div", {
                className: $s.arrowNav,
                children: [(0, d.jsx)("div", {
                  className: [$s.arrow, $s.previous, 0 === f ? $s.disabled : ""].join(" "),
                  onClick: () => u(f - 1)
                }), (0, d.jsx)("div", {
                  className: [$s.arrow, $s.next, f === Math.ceil(i.length / l) - 1 ? $s.disabled : ""].join(" "),
                  onClick: () => u(f + 1)
                })]
              })]
            }), (0, d.jsx)("div", {
              className: $s.items,
              children: (0, d.jsx)("div", {
                className: $s.trackWrapper,
                children: (0, d.jsx)("div", {
                  className: [$s.track, 0 !== _ ? $s.dragging : ""].join(" "),
                  ref: o,
                  style: {
                    transform: `translateX(calc(-${100*f}% + ${_}px - (var(--standard-grid-gap) * ${f}))`,
                    gridAutoColumns: `calc(100 / ${l} * 1% - calc(var(--standard-grid-gap) * (${l-1}/${l}))`
                  },
                  children: b
                })
              })
            })]
          })
        })),
        As = (0, $.withTranslations)((e => {
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
            i = (0, r.useRef)(null);
          return (0, r.useEffect)((() => {
            i && i?.current && i.current.focus()
          }), [i]), (0, d.jsxs)("div", {
            className: "rockstargames-componentsc7fe032eaf0127cb44b3aec94a930688",
            children: [(0, d.jsx)("h3", {
              tabIndex: -1,
              ref: i,
              children: `${n} (${c})`
            }), (0, d.jsx)(m, {
              to: "/",
              children: t("Home")
            }), "clr" !== s && (0, d.jsx)(ks, {})]
          })
        })),
        Fs = {
          videoPreview: "rockstargames-componentsfe7a3e548d37991de12016a69af8e6c0",
          card: "rockstargames-componentsdaabbfc1eda1710ae7d1346162b9392e",
          info: "rockstargames-componentsa7ab9b6f9cb9bbc84106a35eb5bec944",
          title: "rockstargames-componentsa56d5941f9b96a7739afafd390605684",
          screencap: "rockstargames-componentse72a05891b15325f72b498d292d1597d",
          screencapLoaded: "rockstargames-componentsed8b59749d6b49b669bfdd77a2d05da6",
          gameTitle: "rockstargames-componentse0e54e027a19ac5f0b1e839fd68b8795"
        },
        Os = e => {
          let {
            video: a,
            size: t = 640
          } = e;
          const s = `${a.screencap}?im=Resize=${t}`,
            [n] = (0, $.usePreloadImg)(s);
          return (0, d.jsx)("div", {
            className: [Fs.screencap, n ? Fs.screencapLoaded : ""].join(" "),
            style: {
              background: `url(${s}) center/cover`
            }
          })
        },
        Rs = e => {
          let {
            gameTitleNecessary: a = !0,
            openInNewWindow: t = !1,
            video: s,
            size: n,
            toExplicit: c
          } = e;
          const i = c ?? `/videos/${s.id}`,
            o = {
              className: Fs.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": i
            },
            r = (0, d.jsxs)("div", {
              className: Fs.card,
              children: [(0, d.jsx)(Os, {
                video: s,
                size: n
              }), (0, d.jsxs)("div", {
                className: Fs.info,
                children: [a ? (0, d.jsx)("div", {
                  className: Fs.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: s.game.title
                  }
                }) : "", (0, d.jsx)("h5", {
                  className: Fs.title,
                  dangerouslySetInnerHTML: {
                    __html: s.title
                  }
                })]
              })]
            });
          return t ? (0, d.jsx)("a", {
            href: i,
            target: "_blank",
            ...o,
            children: r
          }) : (0, d.jsx)(m, {
            to: i,
            ...o,
            children: r
          })
        };
      class Us extends r.Component {
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
          return null !== this.state.error.code ? (0, d.jsx)(As, {
            error: this.state.error
          }) : this.props.children
        }
      }
      const Gs = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return function(t) {
            return (0, d.jsx)(Us, {
              header: a,
              children: (0, d.jsx)(e, {
                ...t
              })
            })
          }
        },
        Hs = (0, r.forwardRef)(((e, a) => {
          const {
            children: t,
            tag: s = "div"
          } = e, n = Be.m[s];
          return (0, d.jsx)(Be.LazyMotion, {
            features: Be.domAnimation,
            children: (0, d.jsx)(n, {
              ref: a,
              ...e,
              children: t
            })
          })
        })),
        Ws = {
          visible: {
            opacity: 1
          },
          hidden: {
            opacity: 0
          }
        },
        qs = {
          ease: "easeIn",
          duration: .4
        },
        Xs = e => {
          let {
            children: a
          } = e;
          return (0, d.jsx)(Be.motion.div, Object.assign({
            className: "rockstargames-componentsf530747be99449caf15a0155061aee75",
            variants: Ws,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: qs
          }, {
            children: a
          }))
        },
        Ks = e => a => (0, d.jsx)(Xs, {
          children: (0, d.jsx)(e, Object.assign({}, a))
        }),
        Ys = {
          visible: {
            opacity: 1,
            y: 0
          },
          hidden: {
            opacity: 0,
            y: 40
          }
        },
        Qs = {
          ease: "easeIn",
          duration: .75
        },
        Zs = e => {
          let {
            children: a
          } = e;
          return (0, d.jsx)(Be.motion.div, {
            className: "rockstargames-componentse88740b4d3c20ab9f8656e87b324d143",
            variants: Ys,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: Qs,
            children: a
          })
        },
        Js = e => a => (0, d.jsx)(Zs, {
          children: (0, d.jsx)(e, {
            ...a
          })
        }),
        en = {
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
        an = {
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
        tn = function() {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "collapsed";
          return an[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "imageMask"][e]
        };
      var sn = t(1860),
        nn = t.n(sn);
      const cn = JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[300,300,0]},"a":{"k":[0,0,0]},"s":{"k":[244,244,100]}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"k":[100,100]},"p":{"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"tm","s":{"k":[{"i":{"x":[0.439],"y":[1.016]},"o":{"x":[0.561],"y":[0.015]},"n":["0p439_1p016_0p561_0p015"],"t":5,"s":[100],"e":[0]},{"t":33.0000013441176}],"ix":1},"e":{"k":[{"i":{"x":[0.439],"y":[1.017]},"o":{"x":[0.561],"y":[0.016]},"n":["0p439_1p017_0p561_0p016"],"t":0,"s":[100],"e":[0]},{"t":30.0000012219251}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"},{"ty":"st","fillEnabled":true,"c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":16},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"}],"ip":0,"op":900.000036657751,"st":0,"bm":0,"sr":1}],"v":"4.5.3","ddd":0,"ip":1.00000004073083,"op":33.0000013441175,"fr":29.9700012207031,"w":600,"h":600}'),
        on = JSON.parse('{"v":"5.7.3","fr":60,"ip":0,"op":64,"w":300,"h":300,"nm":"Dot_Loading","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"center","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":10,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":22,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":34,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.667,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"right","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":5,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":17,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":29,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.333,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":12,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":24,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0}],"markers":[]}'),
        rn = {
          SPINNING: "spinning",
          THREE_DOTS: "threeDots"
        },
        ln = e => {
          let a, {
            type: t = rn.SPINNING
          } = e;
          switch (t) {
            case rn.THREE_DOTS:
              a = on;
              break;
            case rn.SPINNING:
            default:
              a = cn
          }
          return (0, d.jsx)(nn(), {
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
          i = new Set,
          o = new Set;
        for (c.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var r = o;
          o = new Set, r.forEach((function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
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
          i = new Set,
          o = new Set;
        for (c.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var r = o;
          o = new Set, r.forEach((function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
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
          i = new Set,
          o = new Set;
        for (c.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var r = o;
          o = new Set, r.forEach((function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
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
          i = new Set,
          o = new Set;
        for (c.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var r = o;
          o = new Set, r.forEach((function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
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

      function i(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var t = e.type;
          "NamedType" === t.kind && a.add(t.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          i(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          i(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          i(e, a)
        }))
      }
      s.definitions = s.definitions.concat(c(t(3784).definitions)), s.definitions = s.definitions.concat(c(t(8540).definitions));
      var o = {};

      function r(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      s.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          i(e, a), o[e.name.value] = a
        }
      })), e.exports = s, e.exports.NewswireList = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var s = o[a] || new Set,
          n = new Set,
          c = new Set;
        for (s.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var i = c;
          c = new Set, i.forEach((function(e) {
            n.has(e) || (n.add(e), (o[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }(s, "NewswireList")
    },
    7108: (e, a, t) => {
      var s = {
        "./left.svg": 2036,
        "./pc.svg": 4892,
        "./ps.svg": 156,
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
    156: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27ae07e3226006749e6cb6428bc62bb1.svg"
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