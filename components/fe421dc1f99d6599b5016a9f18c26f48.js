(self.webpackChunk_rockstargames_components = self.webpackChunk_rockstargames_components || []).push([
  [190], {
    9997: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => m
      });
      var s = t(927),
        n = t(9885),
        r = t.n(n),
        o = t(9542),
        i = t(9929);
      const c = {
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
      var d = t(3705);
      const {
        sanitize: l
      } = r(), m = e => {
        let {
          list: a,
          string: t,
          starColor: n,
          style: r,
          className: m,
          game: p,
          noImg: g,
          columns: f,
          mobileColumns: u
        } = e;
        const [b, k] = (0, s.useState)(null);
        return (0, s.useEffect)((() => {
          k(a)
        }), [a]), t || a ? f && b ? (0, d.jsx)("div", {
          className: c.grid,
          style: {
            "--ordered-list-grid-column": f,
            "--ordered-list-grid-column-mobile": u ?? f
          },
          children: (0, d.jsx)("ol", {
            style: (0, i.safeStyles)(r),
            className: (0, o.classList)(c.itemList, c.noImg, c[n], c[p]),
            children: b.map((e => (0, d.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: l(e.content)
              }
            }, e.content)))
          })
        }) : (0, d.jsx)("ol", {
          style: (0, i.safeStyles)(r),
          className: (0, o.classList)(c.itemList, c.custom, g ? c.noImg : "", n ? c[n] : "", p ? c[p] : "", m ?? ""),
          children: a.map((e => (0, d.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: l(e?.content ?? e)
            }
          }, e?.content)))
        }) : null
      }
    },
    4457: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => m
      });
      var s = t(927),
        n = t(9885),
        r = t.n(n),
        o = t(9542),
        i = t(9929);
      const c = {
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
      var d = t(3705);
      const {
        sanitize: l
      } = r(), m = e => {
        let {
          list: a,
          string: t,
          starColor: n,
          style: r,
          className: m,
          game: p,
          noImg: g,
          columns: f,
          mobileColumns: u
        } = e;
        const [b, k] = (0, s.useState)(null), v = t ? t.split("_#_") : a;
        return (0, s.useEffect)((() => {
          k(a)
        }), [a]), t || a ? f && b ? (0, d.jsx)("div", {
          className: c.grid,
          style: {
            "--unordered-list-grid-column": f,
            "--unordered-list-grid-column-mobile": u ?? f
          },
          children: (0, d.jsx)("ul", {
            style: (0, i.safeStyles)(r),
            className: (0, o.classList)(c.itemList, c.noImg, c[n], c[p]),
            children: b.map((e => (0, d.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: l(e.content)
              }
            }, e.content)))
          })
        }) : (0, d.jsx)("ul", {
          style: (0, i.safeStyles)(r),
          className: (0, o.classList)(c.itemList, c.custom, g ? c.noImg : "", n ? c[n] : "", p ? c[p] : "", m ?? ""),
          children: v.map((e => (0, d.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: l(e?.content ?? e)
            }
          }, e?.content)))
        }) : null
      }
    },
    9832: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        A: () => l,
        AudioPlayer: () => h,
        Badge: () => x,
        Brands: () => y,
        Button: () => N,
        ButtonGroup: () => I,
        CalloutSection: () => Z,
        Carousel: () => z,
        ConditionalBlock: () => P,
        CookieAB: () => J,
        CountryInputField: () => K,
        Cta: () => ne,
        DescriptionArea: () => be,
        DiscountsBadge: () => ye,
        DotLoader: () => Ne,
        Dropdown: () => Se,
        Embed: () => Ie,
        ExpandingPlatformButton: () => Fe,
        FadeInContent: () => Pe,
        GameCard: () => s,
        GameSiteHeader: () => Ue,
        Gen9Button: () => C,
        Gen9CoreCarousel: () => Qe,
        Grid: () => Te,
        HTMLElement: () => ia,
        Hero: () => na,
        HookStore: () => F,
        ImageWithBadge: () => wa,
        LanguageSelector: () => ya,
        LayeredImage: () => ja,
        LoadingAnimation: () => ls,
        MultiSourceImage: () => le,
        NewswireBlocks: () => Aa,
        NewswireCard: () => Va,
        NewswireList: () => za,
        NewswireRelated: () => Ma,
        NewswireTag: () => Ea,
        OrderedList: () => Pa.Z,
        Paging: () => Ha,
        ParallaxCacheBuster: () => Ua,
        ParallaxInnerLayer: () => Za,
        ParallaxOuterLayer: () => Qa,
        ParallaxWrapper: () => qa,
        PromoModule: () => Ka,
        Rating: () => tt,
        ResponsiveFlexBox: () => nt,
        ResponsiveFlexItem: () => ot,
        ResponsiveGridBox: () => ct,
        ResponsiveGridItem: () => lt,
        ResponsiveImg: () => pt,
        ResponsiveSection: () => ft,
        RockstarLogo: () => ut,
        ScrollToTop: () => bt,
        ScrollTracker: () => kt,
        SearchBox: () => vt,
        Separator: () => ge,
        Skeleton: () => xt,
        SrcsetImage: () => Ca,
        TextFit: () => ve,
        ThumbsGallery: () => Tt,
        TinaModuleFetchNRender: () => Et,
        TinaWrapper: () => Lt,
        TrackList: () => Nt,
        UnorderedList: () => me.Z,
        UserVote: () => Bt,
        VideoCard: () => n,
        VideoCarousel: () => Dt,
        VideoList: () => Ft,
        Wasted: () => At,
        framer: () => o,
        useTinaModuleFetchByIds: () => It,
        withSearchbarErrorBoundary: () => Rt,
        withSimpleErrorBoundary: () => Ze
      });
      var s = {};
      t.r(s), t.d(s, {
        Art: () => Oe,
        Link: () => He
      });
      var n = {};
      t.r(n), t.d(n, {
        Art: () => Gt,
        Link: () => Ot
      });
      var r = {};
      t.r(r), t.d(r, {
        getVariant: () => rs,
        transitions: () => ss,
        variants: () => ns
      });
      var o = {};
      t.r(o), t.d(o, {
        Animations: () => r,
        LiteMotion: () => Zt,
        withFadeIn: () => Kt,
        withFadeUp: () => ts
      });
      var i = t(927),
        c = t(4175),
        d = t(3705);
      const l = e => {
        let {
          children: a,
          to: t = "#",
          alt: s = "",
          autoBlank: n = !1,
          onClick: r = (() => {}),
          ...o
        } = e;
        const i = !/^(https?|mailto):/i.test(t);
        if (/^#/.test(t)) {
          const e = e => {
            e.preventDefault(), document?.querySelector(`[id='${t.replace("#","")}']`)?.scrollIntoView({
              behavior: "smooth",
              block: "center"
            }), r && r(e)
          };
          return (0, d.jsx)("a", {
            title: s,
            href: t,
            onClick: e,
            ...o,
            children: a
          })
        }
        if (i) return (0, d.jsx)(c.NavLink, {
          title: s,
          to: t,
          onClick: e => r(e),
          ...o,
          children: a
        });
        const l = Object.keys(o).filter((e => !["activeClassName", "key", "end"].includes(e))).reduce(((e, a) => ({
            ...e,
            [a]: o[a]
          })), {}),
          m = o?.target ?? (n ? "_blank" : "_self");
        return "function" == typeof l?.className && delete l.className, (0, d.jsx)("a", {
          href: t,
          ...l,
          title: s,
          onClick: e => r(e),
          target: m,
          children: a
        })
      };
      var m = t(6588),
        p = t.n(m),
        g = t(4859),
        f = t(7715);
      const u = {
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
        b = e => {
          let {
            src: a
          } = e;
          return (0, d.jsx)("div", {
            className: u.cover,
            style: {
              background: `url(${a}) center/cover`
            }
          })
        },
        k = e => {
          let {
            timing: a = {
              current: 0,
              duration: 0
            },
            playing: t,
            audioRef: s,
            setPlaying: n,
            tracksOpen: r,
            setTracksOpen: o,
            trackData: c,
            setTrackId: l,
            trackBounds: m,
            setAutoNext: g
          } = e;
          const f = (0, i.useRef)(null),
            b = (0, i.useRef)(null),
            k = (0, i.useRef)(null),
            [v, h] = (0, i.useState)(null),
            [x, y] = (0, i.useState)(!1),
            _ = e => {
              const a = new Date(1e3 * e),
                t = a.getUTCMinutes(),
                s = a.getSeconds();
              return `${t.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`
            };
          return (0, i.useEffect)((() => {
            if (!b.current || !k.current) return;
            const e = () => {
              k.current && b.current && h(k.current.clientWidth > b.current.clientWidth)
            };
            return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e)
          }), [k, b, a]), (0, i.useEffect)((() => {
            if (!f.current || !a?.duration) return;
            let e = null;
            const t = new(p())(f.current),
              n = e => {
                if (f.current) {
                  const t = f.current.clientWidth;
                  if (!f.current.contains(e.srcEvent.target)) return;
                  const n = Math.max(0, e.srcEvent.offsetX),
                    r = Number(n / t * a.duration);
                  s.currentTime = r
                }
              },
              r = () => {
                e ? s.pause() : s.play()
              },
              o = () => {
                e = s.paused, s.pause()
              };
            return t.on("panstart", o), t.on("panleft", n), t.on("panright", n), t.on("panend", r), t.on("tap", n), () => {
              t.off("panstart", o), t.off("panleft", n), t.off("panright", n), t.off("panend", r), t.off("tap", n)
            }
          }), [f.current, a.duration]), (0, i.useEffect)((() => {
            const e = Number(s?.currentTime);
            (t || !isNaN(e) && 0 !== e) && y(!0)
          }), [t, s?.currentTime]), (0, d.jsxs)("div", {
            className: u.controls,
            style: {
              "--track-color": c.color,
              "--track-mix-blend-mode": c.mix_blend_mode,
              "--current-pct": a.current / a.duration
            },
            children: [(0, d.jsx)("div", {
              className: [u.controlsCurrentBg, x ? u.controlsCurrentBgVisible : ""].join(" ")
            }), (0, d.jsx)("div", {
              className: u.controlsTrack,
              ref: b,
              children: (0, d.jsx)("span", {
                className: [u.controlsTrackTitle, v ? u.controlsTrackAnimating : ""].join(" "),
                ref: k,
                children: c.title
              })
            }), (0, d.jsxs)("div", {
              className: u.controlsButtons,
              children: [(0, d.jsx)("div", {
                className: u.controlsPrevTrack,
                onClick: () => {
                  m && (l(m[0]), g(!0), n(!0))
                }
              }), (0, d.jsx)("div", {
                className: [u.controlsPlayPause, t ? u.controlsPlayPausePlaying : ""].join(" "),
                onClick: () => {
                  n(!t)
                }
              }), (0, d.jsx)("div", {
                className: u.controlsNextTrack,
                onClick: () => {
                  m && (l(m[1]), g(!0), n(!0))
                }
              })]
            }), (0, d.jsx)("div", {
              active: r ? "" : null,
              className: u.controlsTrackBurger,
              children: (0, d.jsx)("div", {
                className: u.iconBurger,
                onClick: () => {
                  o(!r)
                }
              })
            }), (0, d.jsxs)("div", {
              className: u.controlsScrub,
              children: [(0, d.jsx)("span", {
                children: _(a.current)
              }), (0, d.jsx)("div", {
                className: u.controlsScrubTrack,
                ref: f
              }), (0, d.jsx)("span", {
                children: _(a.duration)
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
            setTracksOpen: r,
            setPlaying: o,
            setAutoNext: i
          } = e;
          return (0, d.jsxs)("div", {
            className: u.tracks,
            children: [(0, d.jsx)("h4", {
              children: "Tracks"
            }), (0, d.jsx)("div", {
              className: u.trackBurger,
              onClick: () => {
                r(!n)
              }
            }), (0, d.jsx)("div", {
              className: u.trackList,
              children: a.map(((e, a) => (0, d.jsxs)("a", {
                style: {
                  "--highlight-color": e.color
                },
                className: t === e.id ? u.trackActive : "",
                onClick: () => {
                  s(e.id), o(!0), i(!0)
                },
                children: [(0, d.jsx)("span", {
                  className: u.trackIndex,
                  children: String(a + 1).padStart(2, "0")
                }), (0, d.jsx)("span", {
                  className: u.trackTitle,
                  children: e.title
                }), (0, d.jsx)("span", {
                  className: u.trackTime,
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
          } = (0, g.useQuery)(f.GetAudioAlbum, {
            variables: {
              id: a
            }
          }), [n, r] = (0, i.useState)(), [o, c] = (0, i.useState)(), [l, m] = (0, i.useState)(), [p, h] = (0, i.useState)(!1), [x, y] = (0, i.useState)(!1), [_, N] = (0, i.useState)(new HTMLAudioElement), [j, S] = (0, i.useState)({
            current: 0,
            duration: 0
          }), [w, T] = (0, i.useState)(!0);
          return (0, i.useEffect)((() => {
            const e = "audio",
              a = a => {
                a?.data?.rockstarAudioPlayerPlayTrackId && (c(a.data.rockstarAudioPlayerPlayTrackId), T(!1), y(!0)), x && a?.data?.attentionBlurredElsewhere && a?.data?.from !== e && y(!1)
              };
            return x && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: e
            }), window.addEventListener("message", a, !1), () => window.removeEventListener("message", a, !1)
          }), [x]), (0, i.useEffect)((() => {
            if (!_) return;
            const e = () => {
                isNaN(_.duration) || S({
                  duration: _?.duration ?? 0,
                  current: _?.currentTime ?? 0
                })
              },
              a = () => {
                w && n && c(n[1])
              };
            return _.addEventListener("loadedmetadata", e), _.addEventListener("timeupdate", e), _.addEventListener("ended", a), () => {
              _.removeEventListener("loadedmetadata", e), _.removeEventListener("timeupdate", e), _.removeEventListener("ended", a)
            }
          }), [_, n, w]), (0, i.useEffect)((() => {
            x && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: "audio"
            })
          }), [x]), (0, i.useEffect)((() => {
            _ && (x ? _.play() : _.pause(), h(!1))
          }), [x, _, l?.id]), (0, i.useEffect)((() => {
            if (!o) return;
            const {
              tracks: e
            } = s.audioAlbum, a = s.audioAlbum.tracks.findIndex((e => e.id === o));
            r([e[a - 1]?.id ?? e[e.length - 1].id, e[a + 1]?.id ?? e[0].id]), m(e[a])
          }), [o]), (0, i.useEffect)((() => {
            s && c(s.audioAlbum.tracks[0].id)
          }), [s]), l ? (0, d.jsxs)("div", {
            className: [u.player, u[t], p ? u.tracksOpen : ""].join(" "),
            children: [(0, d.jsx)("audio", {
              ref: e => {
                N(e)
              },
              src: l.mp3_src
            }), (0, d.jsx)(v, {
              tracks: s.audioAlbum.tracks,
              setTrackId: c,
              trackId: o,
              tracksOpen: p,
              setTracksOpen: h,
              setPlaying: y,
              setAutoNext: T
            }), (0, d.jsx)(b, {
              src: l.cover_src
            }), (0, d.jsx)(k, {
              setTrackId: c,
              trackBounds: n,
              tracksOpen: p,
              setTracksOpen: h,
              playing: x,
              setPlaying: y,
              timing: j,
              trackData: l,
              audioRef: _,
              setAutoNext: T
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
        _ = {
          button: "rockstargames-componentsa4fd8cd8a46e9a1a91d5502215f3f1ae",
          secondary: "rockstargames-componentsc66fa9cf28a8e3df90b10d2c679aadf8"
        },
        N = e => {
          let {
            className: a = "",
            children: t,
            context: s = "",
            to: n,
            onClick: r,
            ...o
          } = e;
          const i = [_.button, _[s], a].join(" ");
          return n ? (0, d.jsx)(l, {
            ...o,
            to: n,
            className: i,
            onClick: r ? () => r() : () => {},
            children: t
          }) : (0, d.jsx)("button", {
            ...o,
            type: "button",
            className: i,
            onClick: r ? () => r() : () => {},
            children: t
          })
        };
      var j = t(9542);
      const S = {
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
        w = e => {
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
        T = e => {
          let {
            children: a,
            className: t,
            onClick: s,
            style: n,
            to: r
          } = e;
          return (0, d.jsx)(c.NavLink, {
            className: t,
            onClick: s ? () => s() : () => {},
            style: n,
            to: r,
            children: a
          })
        },
        C = e => {
          let {
            btnColor: a = "#fff",
            className: t = "",
            consoleBtn: s,
            icon: n = "",
            img: r,
            labelColor: o = "#000",
            onClick: i,
            secondText: c,
            size: l,
            text: m,
            to: p,
            type: g = ""
          } = e;
          const f = [S.plusButton, S[g] ?? "", S[l] ?? "", S[s] ?? "", t].join(" "),
            u = {
              "--hvr-color": a ?? o,
              "--hvr-bg-color": o ?? a,
              "--hvr-border-color": a ?? o
            },
            b = (0, d.jsxs)(d.Fragment, {
              children: [r ? (0, d.jsx)("img", {
                src: r,
                alt: ""
              }) : "", (0, d.jsxs)("div", {
                className: S.btnText,
                icon: n,
                children: [m, c ? (0, d.jsx)("span", {
                  children: c
                }) : ""]
              })]
            });
          if (p) {
            if (p.startsWith("http")) {
              const e = p.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, d.jsx)("span", {
                onClick: i ? () => i() : () => {},
                onKeyDown: i,
                className: f,
                role: "button",
                tabIndex: 0,
                children: (0, d.jsx)("a", {
                  href: p,
                  target: e,
                  children: b
                })
              })
            }
            return (0, d.jsx)(T, {
              className: f,
              onClick: i ? () => i() : () => {},
              style: u,
              to: p,
              children: b
            })
          }
          return (0, d.jsx)(w, {
            className: f,
            onClick: i ? () => i() : () => {},
            style: u,
            children: b
          })
        },
        I = e => {
          let {
            buttons: a = [],
            className: t
          } = e;
          return a.length ? (0, d.jsx)("div", {
            className: (0, j.classList)("rockstargames-componentse41a240a5f0751a81fe26be55331d947", t),
            children: a.map(((e, a) => {
              let {
                icon: t,
                title: s,
                to: n
              } = e;
              return s ? (0, d.jsx)(C, {
                icon: t,
                text: s,
                to: n
              }, a) : ""
            }))
          }) : null
        };
      var E = t(2965),
        L = t(8061);
      const V = {
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
          active: "rockstargames-componentsaab372e37edd7dbcc5c2627c026eebc2"
        },
        $ = e => {
          let {
            item: a
          } = e;
          return (0, d.jsxs)("div", {
            children: [(0, d.jsx)(wa, {
              image: a?.image,
              badge: a?.badge ?? a?.image?.badge,
              badgeType: "badge3",
              role: a?.role ?? a?.image?.role,
              splitter: a?.splitter ?? a?.image?.splitter,
              type: a?.type,
              ariaLabel: a?.image?.ariaLabel ?? a.description,
              style: a?.style,
              className: (0, j.classList)(V.img, a?.className)
            }), (a?.title || a?.description) && (0, d.jsx)(be, {
              item: a
            })]
          })
        },
        B = e => {
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
        z = e => {
          let {
            children: a,
            items: t = [],
            style: s = {},
            noInfiniteScroll: n = !1,
            className: r = "",
            renderTemplate: o = "standard",
            text: c,
            customSpaceBetween: l = null,
            centerSlides: m = !0,
            centeredSlidesBounds: p = !1
          } = e;
          const [g, f] = (0, i.useState)(0), u = (0, i.useMemo)((() => a && Array.isArray(a) ? a.map((() => (0, L.Z)())) : null), [a]);
          if (!(t && 0 !== t?.length || a)) return null;
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
          return (0, d.jsxs)("div", {
            className: (0, j.classList)(V.deprecatedCarousel, V[o], V[`infinite_${!n}`], a ? V.renderedWithChildren : "", r),
            style: s,
            children: [(0, d.jsxs)(E.tq, {
              loop: !n,
              grabCursor: !0,
              centeredSlides: m,
              centerInsufficientSlides: m,
              slidesPerView: "auto",
              speed: 700,
              breakpoints: b,
              onActiveIndexChange: e => f(e?.realIndex ?? 0),
              centeredSlidesBounds: p,
              children: [(0, d.jsx)("div", {
                className: V.trackWrapper,
                children: (0, d.jsxs)("div", {
                  className: V.track,
                  children: [t?.map((e => (0, d.jsx)(E.o5, {
                    children: (0, d.jsx)($, {
                      item: e
                    })
                  }, e))), a && a?.map(((e, a) => e && (0, d.jsx)(E.o5, {
                    children: e
                  }, u && u[a])))]
                })
              }), (0, d.jsx)(B, {
                current: g,
                total: a ? a.length : t.length
              })]
            }), (c?.title || c?.description) && (0, d.jsx)(be, {
              item: c
            })]
          })
        };
      var D = t(9929),
        M = t(6711);
      const F = (0, t(2).Hu)(),
        A = e => {
          let {
            condition: a = null,
            children: t
          } = e;
          const [s, n] = (0, i.useState)(!1), r = (e => {
            const [a] = (0, c.useSearchParams)(), [t, s] = (0, i.useState)(null), n = (0, M.useRockstarUser)(), {
              loggedIn: r
            } = n, {
              currentCharId: o
            } = (0, M.useRockstarUserState)(), d = function(e) {
              let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "gtao";
              return (0, i.useMemo)((() => {
                const s = e?.data?.characters?.[t];
                return "1" === (s?.[a]?.stats?.overview?.hasGtaPlus?.value ?? "0")
              }), [e, t, a])
            }(n, o);
            return (0, i.useEffect)((() => {
              s(null);
              const n = "true" === a.get("conditionPreview");
              if (!(!e?.length > 0)) return F.applyFilters("preview_conditions", e), e.forEach((e => {
                const {
                  value: o
                } = e;
                if (n) return "true" === a.get(o) ? (s(!0), !0) : (s(!1), !1);
                if (!1 === t) return !1;
                switch (o) {
                  case "user:is:loggedIn":
                    s(!0 === r);
                    break;
                  case "user:not:loggedIn":
                    s(!1 === r);
                    break;
                  case "user:is:gtaPlus":
                    s(!0 === d);
                    break;
                  case "user:not:gtaPlus":
                    s(!1 === d);
                    break;
                  default:
                    s(!1)
                }
                return null
              })), () => {}
            }), [a, e, d, n, r]), t
          })(a);
          return (0, i.useEffect)((() => {
            n(r)
          }), [r]), (0, i.useMemo)((() => s ? t : null), [s])
        },
        P = (0, D.withTranslations)((e => {
          let {
            children: a
          } = e;
          return i.Children.map(i.Children.toArray(a), (e => (0, d.jsx)(A, {
            ...e?.props
          })))
        }));
      var G = t(6809),
        O = t(7627);
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
        R = {
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
        U = e => {
          let {
            foreign_id: a,
            foreign_type: t
          } = e;
          const {
            track: s
          } = (0, M.useGtmTrack)(), {
            refetch: n
          } = (0, g.useQuery)(O.UserGetVote, {
            skip: !0
          }), [r] = (0, g.useMutation)(O.UserCastVote), [o, c] = (0, i.useState)(null), l = (0, i.useCallback)((e => {
            (async () => {
              if (e === o && null !== o) c(null);
              else {
                c(e), s({
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
                await r({
                  variables: n
                })
              }
            })()
          }), [a, t, o]);
          return (0, i.useEffect)((() => {
            a && t && (async () => {
              const e = await n({
                foreignId: a,
                foreignType: t
              });
              c(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [a, t]), (0, d.jsxs)("div", {
            className: R.calloutVoteForm,
            children: [(0, d.jsx)("button", {
              "aria-label": "upvote",
              className: [R.upvote, R.voteButton, o ? R.active : ""].join(" "),
              name: "upvote",
              onClick: () => l(!0),
              type: "button"
            }), (0, d.jsx)("button", {
              "aria-label": "downvote",
              className: [R.downvote, R.voteButton, !1 === o ? R.active : ""].join(" "),
              name: "downvote",
              onClick: () => l(!1),
              type: "button"
            })]
          })
        },
        W = e => {
          let {
            action_text: a,
            link: t,
            trackingData: s
          } = e;
          const {
            track: n
          } = (0, M.useGtmTrack)();
          return (0, d.jsx)("a", {
            href: t,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, d.jsxs)("button", {
              className: R.calloutLink,
              type: "button",
              onClick: s ? () => n({
                ...s
              }) : () => {},
              children: [a, (0, d.jsx)(H, {
                className: R.calloutLinkIcon
              })]
            })
          })
        },
        q = e => {
          let {
            helperText: a,
            linkText: t,
            link: s,
            trackingData: n
          } = e;
          const {
            track: r
          } = (0, M.useGtmTrack)();
          return (0, d.jsxs)("div", {
            className: R.actionFooter,
            children: [a, t && " ", t && (0, d.jsx)("a", {
              href: s ?? "",
              onClick: () => r({
                ...n
              }),
              children: t
            })]
          })
        },
        Z = (0, D.withTranslations)((e => {
          let {
            header: a,
            subheader: t,
            type: s,
            action_text: n,
            link: r,
            foreign_id: o = document.location.pathname,
            foreign_type: c = "url",
            className: l = "",
            actionFooterHelperText: m,
            actionFooterLinkText: p,
            actionFooterLink: g,
            trackingData: f = {},
            actionFooterLinkTrackingData: u = {},
            t: b
          } = e;
          const {
            loggedIn: k
          } = (0, M.useRockstarUser)(), {
            track: v
          } = (0, M.useGtmTrack)(), h = `${document.location.origin}/auth/sc-auth-login?returnUrl=${window.location.pathname}`, {
            ref: x,
            inView: y
          } = (0, G.YD)({
            threshold: .6
          }), [_, j] = (0, i.useState)(!1);
          let S;
          if ((0, i.useEffect)((() => {
              y && !_ && (v({
                event: "page_section_impression",
                event_action: "impression",
                event_category: "page_section",
                event_label: "callout section",
                element_placement: `callout section - ${a}`
              }), j(!0))
            }), [y]), !a && !t) return null;
          switch (s) {
            case "vote":
              if (!k) {
                S = (0, d.jsx)(N, {
                  to: h,
                  className: R.calloutButton,
                  onClick: f ? () => v({
                    ...f
                  }) : () => {},
                  children: "Log In"
                });
                break
              }
              S = (0, d.jsx)(U, {
                foreign_id: o,
                foreign_type: c
              });
              break;
            case "button":
              n && r && (S = (0, d.jsx)(N, {
                to: r,
                className: R.calloutButton,
                onClick: f ? () => v({
                  ...f
                }) : () => {},
                children: n
              }));
              break;
            case "link":
              n && r && (S = (0, d.jsx)(W, {
                action_text: n,
                link: r,
                trackingData: f
              }));
              break;
            default:
              S = null
          }
          return (0, d.jsx)("div", {
            className: `${R.calloutContainer} ${l||""}`,
            ref: x,
            children: (0, d.jsxs)("div", {
              className: R.calloutSection,
              children: [(0, d.jsxs)("div", {
                className: [R.calloutHeaders, S ? R.calloutHeaderMargins : ""].join(" "),
                children: [a && (0, d.jsx)("h1", {
                  className: R.calloutHeader,
                  children: b(a)
                }), t && (0, d.jsx)("h2", {
                  className: R.calloutSubheader,
                  children: b(t)
                })]
              }), (0, d.jsxs)("div", {
                className: R.actionBlock,
                children: [S, m && (0, d.jsx)(q, {
                  helperText: m,
                  linkText: p,
                  link: g,
                  trackingData: u
                })]
              })]
            })
          })
        }));
      var Y = t(9484),
        Q = t(2187),
        X = t.n(Q);
      const K = e => {
          let {
            isMulti: a,
            allowSelectAll: t,
            label: s,
            miscProps: n
          } = e;
          const [r, o] = (0, i.useState)(""), c = (0, i.useMemo)((() => X()().getData()), []);
          return (0, d.jsx)(Y.ZP, {
            unstyled: !0,
            value: r,
            isMulti: a,
            allowSelectAll: t,
            options: c,
            placeholder: s,
            onChange: e => {
              return a = e?.target?.value, void o(a);
              var a
            },
            classNamePrefix: "country-select",
            ...n
          })
        },
        J = e => {
          let {
            cookieName: a,
            cookieValue: t,
            trueComponent: s,
            falseComponent: n
          } = e;
          const r = (e => {
              const a = document.cookie.split("; "),
                t = `${e}=`,
                s = a.find((e => e.startsWith(t)));
              return s?.substring(t.length, s.length)
            })(a),
            o = new URLSearchParams(window.location.search).get(a);
          return o && ((e, a) => {
            e && a && (document.cookie = `${e}=${a}; domain=${(()=>{const e=window.location.hostname.split(".");return e.slice(e.length-2).join(".")})()}; path=/;`)
          })(a, o), r === t || o === t ? s : n
        },
        ee = {
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
        ae = e => ee[e] || null,
        te = {
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
          disabled: "rockstargames-componentsd30d809341f5b67393bd8788c9971249"
        },
        se = e => {
          let {
            platform: a = ""
          } = e;
          const t = a ? ae(a) : null,
            s = t ? (0, d.jsx)("img", {
              className: te.platformIcon,
              src: t,
              alt: "Platform Icon"
            }) : null;
          return (0, d.jsx)("span", {
            className: [te.btnContent, te.platformButton].join(" "),
            children: s
          })
        },
        ne = e => {
          let {
            children: a,
            href: t,
            style: s,
            content: n,
            variant: r = null,
            icon: o,
            iconPosition: c = "none",
            iconStyle: l,
            badge: m,
            badgeStyle: p,
            platformItem: g,
            gtm: f = {},
            disabled: u,
            className: b
          } = e;
          const {
            track: k
          } = (0, M.useGtmTrack)(), v = (0, D.useDataLayer)(), h = n ?? a, x = `Redirect to ${t}`, y = (0, i.useCallback)((() => {
            if (!u) {
              const e = window.location.hostname;
              let a;
              try {
                a = new URL(t)?.hostname
              } catch (t) {
                a = e
              }
              k({
                event: "cta_other",
                ...v,
                ...f,
                link_url: t ?? void 0,
                text: h ?? void 0
              }), e === a ? window.location.href = t : window.open(t, "_blank")
            }
          }), [f, t, v]), _ = () => o ? (0, d.jsx)("span", {
            className: [te.icon, `icon-${c}`].join(" "),
            style: l,
            children: (0, d.jsx)("img", {
              className: te.btnIcon,
              src: ae(o),
              alt: `${o} icon`
            })
          }) : null;
          return (0, d.jsx)("button", {
            className: [te.cta, "platform" === r && g ? te[g] : "", u ? te.disabled : "", b].join(" "),
            style: s,
            "data-variant": r,
            type: "button",
            onClick: y,
            disabled: u,
            "aria-label": x,
            children: "platform" === r && g ? (0, d.jsx)(se, {
              platform: g
            }) : (0, d.jsxs)("div", {
              className: te.btnContent,
              children: ["left" === c && _(), (0, d.jsx)("span", {
                children: h
              }), "right" === c && _(), m ? (0, d.jsx)("span", {
                className: te.badge,
                style: p,
                children: m
              }) : null]
            })
          })
        };
      var re = t(559);
      const oe = "rockstargames-componentsf6ed43b225fde028df4ad1be1f6cf9b2",
        ie = "rockstargames-componentscadcad87be7ddfa9f93a8d7e56c70c27",
        ce = "rockstargames-componentsb4a61261f9b92ee9f88bc262c25b8db5",
        de = e => {
          let {
            alt: a,
            className: s,
            src: n,
            style: r
          } = e;
          const [o, i] = (0, D.usePreloadImg)(n);
          let c = n;
          !1 === o && (s === ce && (c = t(8280)), c = t(8933));
          const l = {
            "--aspect-ratio": i.width / i.height,
            ...r
          };
          return (0, d.jsx)("img", {
            src: c,
            className: s ?? "",
            alt: a,
            style: l
          })
        },
        le = e => {
          let {
            className: a,
            style: s = {},
            image: n = {},
            imageStyle: r = {}
          } = e, {
            alt: o,
            src: i
          } = (0, re.useImageParser)(n);
          return i.desktop || i.mobile || (o = "placeholder", i = {
            mobile: t(8280),
            desktop: t(8933)
          }), (0, d.jsx)("div", {
            className: n.frame ? `${n.frame} ${oe}` : oe,
            style: s,
            children: i?.desktop && i?.mobile ? (0, d.jsxs)(d.Fragment, {
              children: [(0, d.jsx)(de, {
                style: {
                  ...r,
                  ...n?.style
                },
                src: i.desktop,
                alt: o,
                className: a ? `${a} ${ie}` : ie
              }), (0, d.jsx)(de, {
                style: {
                  ...r,
                  ...n?.style
                },
                src: i.mobile,
                alt: o,
                className: a ? `${a} ${ce}` : ce
              })]
            }) : (0, d.jsx)(de, {
              style: {
                ...r,
                ...n?.style
              },
              src: i?.desktop ?? i?.mobile,
              alt: o,
              className: a
            })
          })
        };
      var me = t(4457);
      const pe = {
          hr: "rockstargames-componentsf8a3b2c8f2a22335f6e3376d656ca4fc",
          redLine: "rockstargames-componentsaf9bbd6f886f5a7006a7627cbb6e580a",
          gtao: "rockstargames-componentsba2d02287a5ca877fe016e8d0d2a6918"
        },
        ge = e => {
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
        fe = "rockstargames-componentsf0975df7973ad18b515ce054411ab11d",
        ue = e => {
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
            className: (0, j.classList)("rockstargames-componentsfd0d7e84a734f6a4d9774b75dd083634", t),
            children: [a.title && (0, d.jsx)(ue, {
              to: a?.href ?? a?.to,
              children: (0, d.jsx)("h3", {
                children: a.title
              })
            }), Array.isArray(a?.description?.content) ? a.description.content?.map(((e, a) => e?.unorderedList ? (0, d.jsx)(me.Z, {
              columns: e.unorderedList.columns ?? null,
              style: {
                "--unordered-list-padding": "var(--grid-gap-static-sm)",
                "--unordered-list-margin-bottom": ".5rem"
              },
              noImg: !0,
              list: e.unorderedList.list
            }, a) : e?.image ? (0, d.jsx)(le, {
              image: e.image,
              className: e?.className,
              ariaLabel: e.image?.ariaLabel
            }, a) : e?.separator ? (0, d.jsx)("div", {
              style: {
                margin: `${e.separator.spacing} 0`
              },
              children: (0, d.jsx)(ge, {})
            }, a) : (0, d.jsx)("p", {
              children: (0, d.jsx)("span", {
                className: fe,
                dangerouslySetInnerHTML: {
                  __html: e
                }
              })
            }, a))) : (0, d.jsx)("span", {
              className: fe,
              dangerouslySetInnerHTML: {
                __html: a.description
              }
            })]
          })
        };
      var ke = t(8507);
      const ve = e => {
          let {
            children: a,
            ...t
          } = e;
          const [s, n] = (0, i.useState)(!1);
          return (0, d.jsx)(ke.iF, {
            ...t,
            onReady: () => {
              document.fonts.ready.then((() => {
                n(!0)
              }))
            },
            children: a
          })
        },
        he = {
          badge: "rockstargames-componentsb255ec6ba1899d9b47851a077d480563",
          badgeSizeUpdate: "rockstargames-componentsf437aab1239e8cecc4e0626335d35778",
          badge2: "rockstargames-componentsffd14a47d0321c6013c06040fd382014",
          badge3: "rockstargames-componentsbc6eb2cd59bc5c25b101f4cc87538d37"
        },
        xe = e => {
          let {
            wrapper: a,
            children: t,
            role: s,
            splitter: n
          } = e;
          return n || s ? a(t) : t
        },
        ye = e => {
          let {
            badge: a,
            badgeType: s,
            role: n,
            splitter: r
          } = e;
          const o = [];
          r ? a.split(r).map(((e, a) => o.push(e))) : o.push(a);
          let i = 100;
          return 2 == o.length && o[1].length < 4 && "off" !== o[1].toLowerCase() && 45, (0, d.jsxs)(xe, {
            splitter: r,
            role: n,
            wrapper: e => (0, d.jsx)("div", {
              className: `${he.badge} ${s?he[s]:""} `,
              children: e
            }),
            children: [(0, d.jsx)(d.Fragment, {
              children: n && (0, d.jsx)(le, {
                image: {
                  alt: n,
                  desktop: t(9065)(`./${n}.png`)
                }
              })
            }), (0, d.jsx)(ve, {
              className: `${r||n?"":he.badge} ${s?he[s]:""}`,
              min: 8,
              max: 1e3,
              mode: r || n ? "single" : "multi",
              children: o[0]
            }), (0, d.jsx)(d.Fragment, {
              children: o.shift() && r && o.length >= 1 && (0, d.jsx)(ve, {
                min: 8,
                max: 1e3,
                mode: "single",
                forceSingleModeWidth: !0,
                children: o.join(" ")
              })
            })]
          }, "badge-wrapper")
        },
        _e = "rockstargames-componentse59ae95c65bdeb501f86807cb3bd0939",
        Ne = e => {
          let {
            color: a
          } = e;
          return (0, d.jsxs)("div", {
            className: "rockstargames-componentsbb9ff64a38e9b92229c0e2343a9a0b28",
            style: {
              "--loader-color": a
            },
            children: [(0, d.jsx)("div", {
              className: _e
            }), (0, d.jsx)("div", {
              className: _e
            }), (0, d.jsx)("div", {
              className: _e
            })]
          })
        },
        je = {
          dropdownWrapper: "rockstargames-componentsb775232124e9901acb9b5c823beba64f",
          items: "rockstargames-componentscaa34ae3ff26d0c50fe1c3bca2294d26",
          open: "rockstargames-componentsa7c9b4acbd2af6d4589f08854adfca3e",
          opener: "rockstargames-componentsca6664cb672281a5037835ba0251cd53",
          secondary: "rockstargames-componentscdbe59933dd2f6ffac6d1aefd76cfa71"
        },
        Se = e => {
          let {
            children: a,
            className: t,
            title: s
          } = e;
          const [n, r] = (0, i.useState)(!1);
          return (0, d.jsxs)("div", {
            className: [je.dropdownWrapper, n ? je.open : "", void 0 !== t ? t : ""].join(" "),
            children: [(0, d.jsx)("button", {
              className: je.opener,
              onClick: () => r(!n),
              children: s
            }), (0, d.jsx)("div", {
              className: je.items,
              onClick: () => r(!1),
              children: a
            })]
          })
        };
      var we = t(2324);
      const Te = e => {
          let {
            children: a,
            context: t = null,
            game: s,
            image: n = {},
            style: r = {},
            template: o = null,
            theme: i = null,
            reversedOnMobile: c = !1,
            className: l = ""
          } = e;
          const m = (0, re.useImageParser)(n),
            p = {
              ...r
            };
          if (m?.src?.desktop) {
            const e = "var(--grid-background-repeat, no-repeat)",
              a = "var(--grid-background-position, center)/var(--grid-background-size, cover)";
            p.background = `url(${m?.src?.desktop}) ${e} ${a}`
          }
          return (0, d.jsx)("div", {
            className: (0, we.classList)("rockstargames-componentsc66ba86806f14d412203f27b13204c61", c ? "rockstargames-componentsda2f0f78b942fbdc0b92617629d4d499" : "", l),
            "data-game": "community" === o ? null : s,
            style: (0, D.safeStyles)(p),
            "data-context": t,
            "data-template": o,
            "data-theme": i,
            children: a
          })
        },
        Ce = e => {
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
        Ie = e => {
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
                  return e?.embed ? (0, d.jsx)(Ce, {
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
      var Ee = t(7638);
      const Le = {
          type: "spring",
          stiffness: 650,
          damping: 45
        },
        Ve = {
          ease: "easeOut",
          duration: .9,
          delay: .3
        },
        $e = {
          open: {
            opacity: 0,
            transition: {
              ease: "easeOut",
              duration: .3
            }
          },
          closed: {
            opacity: 1,
            transition: Ve
          }
        },
        Be = {
          open: {
            opacity: 1,
            display: "grid",
            height: "auto",
            transition: {
              opacity: Ve,
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
              height: Le
            },
            transitionEnd: {
              display: "none"
            }
          }
        },
        ze = {
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
            transition: Le,
            transitionEnd: {
              "--btn-hover-bg-color": "inherit",
              "--btn-hover-bg-color-noBlur": "inherit",
              "--btn-hover-font-color": "inherit",
              "--btn-hover-border-color": "inherit"
            }
          }
        },
        De = {
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
        Me = e => {
          let {
            buttonText: a = "",
            link: s = "",
            platform: n = "",
            target: r = null,
            onClick: o
          } = e;
          const i = r ?? (s.startsWith(document.location.origin) ? "_self" : "_blank"),
            l = [De.platformButton, De[n]].join(" "),
            m = n ? t(3631)(`./${n}.svg`) : null,
            p = (0, d.jsxs)(d.Fragment, {
              children: [m ? (0, d.jsx)("img", {
                src: m,
                alt: a
              }) : "", (0, d.jsx)("div", {
                className: De.buttonText,
                children: a
              })]
            });
          return s.startsWith("http") ? (0, d.jsx)("span", {
            onClick: o,
            onKeyDown: o,
            role: "link",
            tabIndex: 0,
            children: (0, d.jsx)("a", {
              href: s,
              className: l,
              target: i,
              children: p
            })
          }) : (0, d.jsx)(c.NavLink, {
            className: l,
            onClick: o,
            to: s,
            children: p
          })
        },
        Fe = e => {
          let {
            buttonText: a = "Subscribe",
            children: s,
            platformsAndLinks: n = [],
            trackingType: r = "buy",
            trackingParent: o,
            target: c = null
          } = e;
          const [l, m] = (0, i.useState)(!1), {
            track: p
          } = (0, M.useGtmTrack)();
          return (0, d.jsxs)("div", {
            className: De.container,
            children: [(0, d.jsx)(Ee.E.div, {
              className: De.content,
              animate: l ? "open" : "close",
              variants: $e,
              children: s
            }), (0, d.jsxs)(Ee.E.div, {
              onClick: () => {
                m(!l), l || p("select_platform" === r ? {
                  event_action: "select_platform",
                  event_category: "cta",
                  event: "select_platform",
                  event_label: o,
                  text: a?.toLowerCase() ?? "subscribe"
                } : "link_account" === r ? {
                  event: "cta_link_account",
                  event_category: "cta",
                  event_action: "link_account",
                  event_label: o
                } : {
                  event_action: "buy",
                  event_category: "cta",
                  event: "cta_buy",
                  event_label: o,
                  text: a?.toLowerCase() ?? "subscribe"
                })
              },
              className: De.unexpandedButton,
              animate: l ? "open" : "closed",
              variants: ze,
              initial: !1,
              children: [(0, d.jsx)(Ee.E.div, {
                className: De.buttonText,
                children: "string" == typeof a ? a : "Subscribe"
              }), (0, d.jsxs)(Ee.E.div, {
                className: De.expandedArea,
                animate: l ? "open" : "closed",
                variants: Be,
                initial: !1,
                children: [(0, d.jsx)("img", {
                  className: De.closeButton,
                  onClick: () => m(!1),
                  onKeyDown: e => {
                    m(!1)
                  },
                  src: t(9545),
                  alt: "Close",
                  role: "button"
                }), (0, d.jsx)("div", {
                  className: De.platformButtons,
                  children: n.length ? n.map((e => (0, d.jsx)(Me, {
                    buttonText: e.buttonText ?? "",
                    link: e.href,
                    platform: e.platform,
                    onClick: () => (e => {
                      let {
                        href: a,
                        platform: t
                      } = e;
                      p({
                        event_action: "store_link",
                        event_category: "cta",
                        event: "cta_store_link",
                        event_label: "expanding platform button",
                        text: t,
                        link_url: a
                      })
                    })(e),
                    target: c
                  }, `${e.key}-${e.href}-${e.platform}`))) : ""
                })]
              })]
            })]
          })
        },
        Ae = {
          animateBox: "rockstargames-componentsbdeffede001e78dee0b5045fcf215759",
          fadeArea: "rockstargames-componentse60c0d0b8a412ef87a25bcff0601d934",
          visible: "rockstargames-componentsf1026e3be9b17c93264a95314e011e26",
          barGrow: "rockstargames-componentsddce7c10c011f4c8073855dbee51c6db",
          bar: "rockstargames-componentse68b81a34b39281b39ac976917124293",
          animateMe: "rockstargames-componentsb5f3875daeee53716994ff4a15d4513e"
        },
        Pe = e => {
          let {
            children: a,
            style: t
          } = e;
          const s = (0, i.useRef)(null);
          return (0, i.useEffect)((() => {
            new IntersectionObserver((e => {
              e.forEach((e => {
                e.isIntersecting && e.target.classList.add([Ae.visible])
              }))
            })).observe(s?.current)
          }), []), (0, d.jsx)("div", {
            style: t,
            className: [Ae.fadeArea].join(" "),
            ref: s,
            children: a
          })
        },
        Ge = {
          img: "rockstargames-componentsd28fb79514f182557a4adcdc0ae3cd4d",
          startAnimation: "rockstargames-componentsce6df99c485041bc3a86c61896052b72"
        },
        Oe = e => {
          let {
            imgSrc: a,
            titleSlug: t
          } = e;
          const [s] = (0, D.usePreloadImg)(a);
          return (0, d.jsx)("div", {
            role: "img",
            "aria-label": t,
            className: [Ge.img, s ? Ge.startAnimation : ""].join(" "),
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
            title_slug: r
          } = a;
          let o = r;
          "V" === r && (o = "gta-v"), "GTAOnline" === r && (o = "gta-online"), "undeadnightmare" === r && (o = "reddeadredemption");
          const i = t ?? `${n?"":"/games"}/${o}`;
          return (0, d.jsx)(l, {
            "aria-label": a,
            "data-gtm-category": "Games",
            "data-gtm-action": "Game Click-through",
            "data-gtm-label": r,
            "data-testid": `${r}-gamecard`,
            to: i,
            target: "_self",
            className: "rockstargames-componentsead163175b3ecbafda6260fc8bfd88b2",
            children: (0, d.jsx)(Oe, {
              imgSrc: s,
              titleSlug: r
            })
          })
        },
        Re = {
          gameSiteHeader: "rockstargames-componentsf27c38ae3aaaa656366568be7a7680ff",
          activeNavItem: "rockstargames-componentsf3ad0db7601d2e52de4a89b2a46fb74f",
          navHidden: "rockstargames-componentsce1c0d4ba324740f8cb3d7794e67b9cf",
          navContent: "rockstargames-componentsaba1d4335897c4bacfa0f4c91770e442",
          headerNavOpen: "rockstargames-componentse37fa9b33a9d84c54144937517c6461c",
          headerLogo: "rockstargames-componentsf7a6ef451ea21d9af97db1d190b2e955",
          bg: "rockstargames-componentsdbcbd0c4304ae2e3ee6126812fb4ee94"
        },
        Ue = e => {
          let {
            buttonText: a = null,
            gameOverrideStyles: t,
            navLinks: s,
            cta: n = "",
            game: r
          } = e;
          const [o, c] = (0, i.useState)(!1), l = (0, g.useMutateState)(), {
            navHidden: m
          } = (0, g.useState)();
          return (0, i.useEffect)((() => {
            l({
              gameSiteNavOpen: o
            })
          }), [o]), (0, i.useEffect)((() => {
            const e = () => {
              c(!1)
            };
            return document.addEventListener("click", e), () => document.removeEventListener("click", e)
          }), []), (0, d.jsxs)("header", {
            "data-game": r,
            className: [Re.gameSiteHeader, o ? Re.headerNavOpen : "", m ? Re.navHidden : "", t.gameSiteHeader, o ? t.headerNavOpen : ""].join(" "),
            children: [(0, d.jsx)("button", {
              className: [Re.headerLogo, t.headerLogo].join(" "),
              onClick: e => {
                c(!o), e.nativeEvent.stopImmediatePropagation()
              },
              type: "button",
              "aria-label": "Open Game Site Nav",
              dangerouslySetInnerHTML: {
                __html: a
              }
            }), (0, d.jsx)("div", {
              className: Re.bg
            }), (0, d.jsx)("nav", {
              children: (0, d.jsx)("div", {
                className: Re.navContent,
                children: s
              })
            }), n]
          })
        };
      var We = t(3824);
      class qe extends i.Component {
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
      const Ze = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return function(t) {
            return (0, d.jsx)(qe, {
              header: a,
              children: (0, d.jsx)(e, {
                ...t
              })
            })
          }
        },
        Ye = e => {
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
        Qe = Ze((e => {
          let {
            description: a,
            slideChildren: t,
            size: s,
            title: n,
            customSlidesPerView: r = null,
            customSpaceBetween: o = null,
            slideClass: c,
            style: l,
            className: m,
            cardSizeBreakpoints: p = {},
            customAspectRatio: g,
            titleBadge: f
          } = e;
          const {
            track: u
          } = (0, M.useGtmTrack)(), b = (0, i.useRef)(null), k = (0, i.useRef)(null), v = (0, i.useRef)(null), [h, x] = (0, i.useState)(null), [y, _] = (0, i.useState)(!1), [N, S] = (0, i.useState)(null), [w, T] = (0, i.useState)({}), [C, I] = (0, i.useState)(), {
            ref: L,
            inView: V
          } = (0, G.YD)({
            threshold: .6
          }), [$, B] = (0, i.useState)(!1), [z, D] = (0, i.useState)(null), [F, A] = (0, i.useState)(!1);
          (0, i.useEffect)((() => {
            const e = () => {
              A(window.innerWidth < 1024)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []);
          const P = {
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
          (0, i.useEffect)((() => {
            if (!b.current) return;
            const e = () => {
              if (b.current) {
                const e = r || Number(window.getComputedStyle(b.current).getPropertyValue("--slides-per-view")),
                  a = r ? 1 : Number(window.getComputedStyle(b.current).getPropertyValue("--slides-per-view-multiplier"));
                S(e * a)
              }
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [b, r]), (0, i.useEffect)((() => {
            if (!t) return;
            let e = !1;
            t.forEach((a => {
              "cover-card" === a?.props?.tina?.payload?.meta?.type && (e = !0, D(a))
            })), B(e);
            const a = t.map(((e, a) => "cover-card" === e?.props?.tina?.payload?.meta?.type && F ? null : (0, d.jsx)(E.o5, {
              children: e
            }, Symbol(a).toString())));
            x(a)
          }), [t, F]), (0, i.useEffect)((() => {
            I({
              nextEl: v.current,
              prevEl: k.current
            })
          }), [v, k]), (0, i.useEffect)((() => {
            V && !y && t && (u({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: `deck - ${n}`.toLowerCase(),
              element_placement: `deck - ${n}`.toLowerCase()
            }), _(!0))
          }), [V, t]);
          let O = "custom" === s ? {
            "--custom-aspect-ratio": g,
            ...l
          } : {
            ...l
          };
          return (0, d.jsxs)("div", {
            className: (0, j.classList)("rockstargames-componentsb3a7aaa29b6ef23aac8133f2ae1fd6b7", m),
            "data-size": s,
            "data-sm": p?.sm ? p?.sm : s,
            "data-md": p?.md ? p?.md : s,
            "data-lg": p?.lg ? p?.lg : s,
            "data-xl": p?.xl ? p?.xl : s,
            "data-xxl": p?.xxl ? p?.xxl : s,
            "data-has-covercard": $,
            ref: b,
            style: O,
            children: [(0, d.jsx)("div", {
              className: "rockstargames-componentsf51f54a638399dffff60d4d8428837e4",
              ref: L
            }), $ && F && (0, d.jsx)("div", {
              className: "rockstargames-componentse9c2cc27bdead5c3de23967ff37d0f50",
              children: z
            }), (0, d.jsx)("div", {
              className: "rockstargames-componentscf1e71f0c17c181209e94f5cebc5631c",
              children: (0, d.jsxs)("div", {
                className: "rockstargames-componentse3676128a2d23c0cb6cd8d6c8ead6825",
                children: [(0, d.jsxs)("div", {
                  className: "rockstargames-componentsad882a0c502ecc7fe80626043f44c5c0",
                  children: [!$ && n && (0, d.jsxs)("div", {
                    className: "rockstargames-componentsc8b9414a9c96a396ba5183a35491e361",
                    children: [(0, d.jsx)("h2", {
                      children: n
                    }), f && (0, d.jsx)("span", {
                      className: "rockstargames-componentsf6d4ec0614d41da309ced4301a2ae14d",
                      children: f
                    })]
                  }), (0, d.jsx)(Ye, {
                    prevRef: k,
                    nextRef: v,
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
            }), N ? (0, d.jsx)(E.tq, {
              slidesPerView: N,
              onInit: e => {
                T(e)
              },
              grabCursor: !0,
              navigation: C,
              modules: [We.W_],
              breakpoints: P,
              slideClass: (0, j.classList)("swiper-slide", c),
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
              children: h
            }) : ""]
          })
        }), null),
        Xe = {
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
        Ke = {
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
        Je = {
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
        ea = e => {
          let {
            title: a = "",
            mobileImg: t,
            desktopImg: s
          } = e;
          const n = (0, j.useGetCdnSource)(t ?? null),
            r = (0, j.useGetCdnSource)(s ?? n);
          return (0, d.jsx)("div", {
            className: Xe.shard,
            style: {
              "--background-image-mobile": `url(${n})`,
              "--background-image-desktop": `url(${r})`
            },
            children: (0, d.jsx)("h5", {
              children: a
            })
          })
        },
        aa = e => {
          let {
            title: a = "Membership Rewards",
            shards: t
          } = e;
          const [s, n] = (0, i.useState)(null);
          return (0, i.useEffect)((() => {
            t && n(t.reduce(((e, a) => {
              if (!a?.shardImg) return e;
              const {
                title: t,
                shardImg: s
              } = a, {
                mobile: n,
                desktop: r
              } = s;
              return e.push((0, d.jsx)(ea, {
                title: t,
                mobileImg: n?.full_src,
                desktopImg: r?.full_src
              })), e
            }), []))
          }), [t]), s ? (0, d.jsx)("div", {
            className: Xe.shardsCarousel,
            children: (0, d.jsx)(Qe, {
              title: a,
              slideChildren: s,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        ta = e => {
          let {
            animated: a = !1,
            ctas: t = [],
            description: s,
            expandingButtonLabel: n = "Subscribe",
            title: r
          } = e;
          const [o, c] = (0, i.useState)([]), [l, m] = (0, i.useState)([]);
          return (0, i.useEffect)((() => {
            c(t.reduce(((e, a) => a.isInExpandingButton ? (e.push({
              href: a.href,
              platform: a.platform,
              buttonText: a.buttonText
            }), e) : e), [])), m(t.reduce(((e, a) => (a.isInExpandingButton || e.push({
              icon: a.platform ? a.platform : "",
              title: a.buttonText,
              to: a.href
            }), e)), []))
          }), t), t.length ? o.length ? (0, d.jsx)(Ee.E.div, {
            variants: a ? Je : void 0,
            children: (0, d.jsxs)(Fe, {
              buttonText: n,
              platformsAndLinks: o,
              children: [(0, d.jsxs)(Ee.E.div, {
                className: Xe.descriptions,
                variants: a ? Je : void 0,
                children: [(0, d.jsx)("h2", {
                  dangerouslySetInnerHTML: {
                    __html: r
                  }
                }), (0, d.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: s
                  }
                })]
              }), !!l && !!l.length && (0, d.jsx)(Ee.E.div, {
                variants: Je,
                children: (0, d.jsx)(I, {
                  buttons: l,
                  className: Xe.buttonGroup
                })
              })]
            })
          }) : (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsxs)(Ee.E.div, {
              className: Xe.descriptions,
              variants: a ? Je : void 0,
              children: [(0, d.jsx)("h2", {
                dangerouslySetInnerHTML: {
                  __html: r
                }
              }), (0, d.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: s
                }
              })]
            }), !!l && !!l.length && (0, d.jsx)(Ee.E.div, {
              variants: Je,
              children: (0, d.jsx)(I, {
                buttons: l,
                className: Xe.buttonGroup
              })
            })]
          }) : (0, d.jsxs)(Ee.E.div, {
            className: Xe.descriptions,
            variants: a ? Je : void 0,
            children: [(0, d.jsx)("h2", {
              dangerouslySetInnerHTML: {
                __html: r
              }
            }), (0, d.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: s
              }
            })]
          })
        },
        sa = e => {
          let {
            animated: a = !1,
            brands: t = [],
            ctas: s = [],
            description: n = "",
            expandingButtonLabel: r = "Subscribe",
            title: o = "",
            legalText: i
          } = e;
          return (0, d.jsxs)(Ee.E.div, {
            className: Xe.content,
            initial: "hidden",
            animate: "visible",
            variants: a ? Ke : void 0,
            children: [(0, d.jsx)(Ee.E.div, {
              variants: a ? Je : void 0,
              children: (0, d.jsx)(y, {
                brands: t
              })
            }), (0, d.jsx)(ta, {
              animated: a,
              ctas: s,
              description: n,
              expandingButtonLabel: r,
              title: o
            }), i && (0, d.jsx)(Ee.E.div, {
              className: Xe.legalText,
              variants: a ? Je : void 0,
              children: (0, d.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: i
                }
              })
            })]
          })
        },
        na = e => {
          let {
            animated: a = !1,
            backgroundImage: t,
            brands: s = [],
            className: n,
            ctas: r = [],
            description: o = "",
            expandingButtonLabel: i = "Subscribe",
            layeredImage: c,
            layeredImageSettings: l,
            legalText: m,
            shardsSection: p = {},
            theme: g = "gen9",
            title: f = ""
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
                    const [r, o] = n;
                    if (t.has(s) && t.has(r)) {
                      const s = `${t.get(r)}${e}`;
                      a[s] = "imageWidth" !== r ? o ? `${o}px` : "0px" : o ? `${o}vw` : "100vw"
                    }
                  }))
                }
              })), a
            })(l),
            b = (0, j.useGetCdnSource)(t?.mobile?.full_src ?? null),
            k = (0, j.useGetCdnSource)(t?.desktop?.full_src ?? b),
            v = (0, j.useGetCdnSource)(c?.mobile?.full_src ?? null),
            h = (0, j.useGetCdnSource)(c?.desktop?.full_src ?? v);
          return (0, d.jsxs)(Ee.E.div, {
            className: (0, j.classList)(Xe.hero, n),
            style: {
              "--background-image-desktop": `url(${k})`,
              "--background-image-mobile": `url(${b})`,
              "--layered-image-desktop": `url(${h})`,
              "--layered-image-mobile": `url(${v})`
            },
            initial: "hidden",
            animate: "visible",
            variants: a ? Ke : void 0,
            "data-type": "hero",
            theme: g,
            children: [(0, d.jsxs)("div", {
              className: Xe.images,
              children: [k && b ? (0, d.jsx)("div", {
                className: Xe.background,
                style: t?.style ?? {}
              }) : "", v && h ? (0, d.jsx)("div", {
                className: Xe.layered,
                style: l ? u : {}
              }) : "", (0, d.jsx)("div", {
                className: Xe.gradient
              })]
            }), (0, d.jsx)(sa, {
              animated: a,
              ctas: r,
              description: o,
              expandingButtonLabel: i,
              title: f,
              brands: s,
              legalText: m
            }), p?.shards && (0, d.jsx)(aa, {
              ...p
            })]
          })
        };
      var ra = t(5370),
        oa = t.n(ra);
      const ia = e => {
        let {
          children: a,
          attributes: t = {},
          className: s = "",
          style: n = {}
        } = e;
        return (0, d.jsx)("span", {
          className: (0, j.classList)(s, t?.className, "rockstargames-componentsf938ddf11a5375276f8e733f5f4e5953"),
          style: (0, D.safeStyles)(n ?? t?.style ?? {}),
          dangerouslySetInnerHTML: {
            __html: oa().unescape(a)
          }
        })
      };
      var ca = t(9089),
        da = t(2204);
      t(3657);
      const la = [{
          label: "Deutsch",
          subdomain: "de",
          subdomaincom: "de",
          support: "de",
          iso: "de-DE"
        }, {
          label: "English",
          subdomain: "en-US",
          subdomaincom: "en",
          support: "us",
          iso: "en-US"
        }, {
          label: "Español",
          subdomain: "es",
          subdomaincom: "es",
          support: "es",
          iso: "es-ES"
        }, {
          label: "Español Latinoamérica",
          subdomain: "es-mx",
          subdomaincom: "mx",
          support: "es-mx",
          iso: "es-MX"
        }, {
          label: "Français",
          subdomain: "fr",
          subdomaincom: "fr",
          support: "fr",
          iso: "fr-FR"
        }, {
          label: "Italiano",
          subdomain: "it",
          subdomaincom: "it",
          support: "it",
          iso: "it-IT"
        }, {
          label: "日本語",
          subdomain: "ja",
          subdomaincom: "jp",
          support: "jp",
          iso: "ja-JP"
        }, {
          label: "한국어",
          subdomain: "ko",
          subdomaincom: "kr",
          support: "kr",
          iso: "ko-KR"
        }, {
          label: "Polski",
          subdomain: "pl",
          subdomaincom: "pl",
          support: "pl",
          iso: "pl-PL"
        }, {
          label: "Português do Brasil",
          subdomain: "pt",
          subdomaincom: "br",
          support: "br",
          iso: "pt-BR"
        }, {
          label: "Русский",
          subdomain: "ru",
          subdomaincom: "ru",
          support: "ru",
          iso: "ru-RU"
        }, {
          label: "繁體中文",
          subdomain: "zh",
          subdomaincom: "tw",
          support: "tw",
          iso: "zh-TW"
        }, {
          label: "简体中文",
          subdomain: "zh-cn",
          subdomaincom: "zh",
          support: "zh",
          iso: "zh-CN"
        }],
        ma = la,
        pa = la[1],
        ga = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        fa = () => {
          let e;
          const {
            location: a
          } = window, t = a.hostname.substring(0, a.hostname.indexOf(".rockstargames.com")), s = ga.findIndex((a => Object.entries(a.sites).findIndex((a => {
            let [s, n] = a;
            return n === t && (e = {
              site: s,
              subDomain: n
            }, !0)
          })) >= 0));
          return {
            ...ga[s >= 0 ? s : 0],
            currentSite: e
          }
        },
        ua = (e, a) => {
          e && a ? document.cookie = `${e}=${a}; domain=${ba()}; path=/;` : console.log(`Couldn't set cookie (${e}) to value (${a})`)
        },
        ba = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        ka = () => {
          const {
            location: e
          } = window, a = fa(), t = (e => {
            const a = ma.map((e => e.subdomaincom)),
              t = e.pathname.substring(1).split("/"),
              s = "detect-locals" === t[0] ? 1 : 0;
            return -1 !== a.indexOf(t[s]) ? t[s] : null
          })(e), s = (e => {
            const a = e.search.substring(1).split("&").find((e => e.startsWith("lang")));
            return a?.split("=")[1]
          })(e), n = pa, [r, o] = function(e, a) {
            let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const s = document.cookie.split("; "),
              n = `${e}=`,
              r = s.find((e => e.startsWith(n))),
              o = r?.substring(n.length, r.length);
            return o && !t || ua(e, a), [o, (i = e, e => {
              ua(i, e)
            })];
            var i
          }(`rockstarweb_lang.${a.cookieIdentifier}`, t ?? void 0);
          let i = n;
          return i = "www" === a.currentSite?.site ? ma.find((e => e.subdomaincom === s)) || ma.find((e => e.subdomaincom === t)) || n : ma.find((e => e.iso === r)) || n, [i, o]
        },
        va = {
          scMenuStyles: "rockstargames-componentsd926e6b28cbf4824e5866f8622a7260e",
          languageSelector: "rockstargames-componentse14a60fb74372ed5ce3dab2037b0b53a",
          open: "rockstargames-componentsa5aa43385996d6dee58075ebac8ef59a",
          linkWrapper: "rockstargames-componentse03ae6cf883527264e799193b3502bf5",
          links: "rockstargames-componentse2256380df99b043f9726312862fb1a8",
          selectBoxWrapper: "rockstargames-componentsd73566739e5f1642cf8bc1495e0420d1",
          selectBox: "rockstargames-componentsdaa6ec79d09781fc643d4325314c542f",
          selectBoxOption: "rockstargames-componentsf5f53de5f32822c4b48314addb0839f4"
        },
        ha = "Select a Language";
      let xa;
      xa = e => {
        let {
          theme: a,
          languageSelectorOpened: t,
          setLanguageSelectorOpened: s,
          defaultMessage: n
        } = e;
        const r = (0, c.useLocation)(),
          o = (0, da.Z)(),
          [m, p] = ka(),
          [g, f] = (0, i.useState)(!1),
          u = (0, i.useMemo)((() => fa()), []),
          b = (0, i.useCallback)((e => {
            let a = r.pathname;
            const t = a.split("/");
            return ma.map((e => e.subdomaincom)).includes(t[0]) && (a = t.slice(1).join("/")), "www" === u.currentSite?.site ? "en" === e ? `${window.location.origin}${a}${r.search}` : `${window.location.origin}/${e}${a}${r.search}` : `${window.location.origin}${a}${r.search}`
          }), [r]);
        let k = !1;
        k = !0;
        const v = (0, i.useRef)(null),
          [h, x] = (0, i.useState)(0),
          y = matchMedia("(hover: none) and (pointer: coarse)").matches,
          _ = e => {
            if (s && s(!1), m.subdomaincom === e || "none" === e) return void(s && s(!1));
            const a = ma.find((a => a.subdomaincom === e));
            a && (p(a.iso), window.location.href = b(e))
          };
        return (0, i.useEffect)((() => {
          void 0 !== t && !1 === t && !0 === g && f(!1)
        }), [t]), (0, i.useEffect)((() => {
          v.current && x(v.current.scrollHeight)
        }), [v]), (0, d.jsxs)("div", {
          className: [va.languageSelector, g ? va.open : ""].join(" "),
          "data-theme": a,
          children: [(0, d.jsxs)(d.Fragment, {
            children: [y && "sc-menu" === a && (0, d.jsx)("div", {
              className: va.selectBoxWrapper,
              children: (0, d.jsxs)("select", {
                className: va.selectBox,
                onClick: e => e.stopPropagation(),
                onChange: e => {
                  _(e.currentTarget.value)
                },
                children: [(0, d.jsx)("option", {
                  className: va.selectBoxOption,
                  value: "none",
                  children: n ? (0, d.jsx)(ca.Z, {
                    ...n
                  }) : ha
                }), ma.map((e => {
                  let {
                    label: a,
                    subdomaincom: t
                  } = e;
                  return (0, d.jsx)("option", {
                    className: va.selectBoxOption,
                    value: t,
                    children: a
                  }, `mobile-${t}`)
                }))]
              })
            }), (!y || "sc-menu" !== a) && (0, d.jsxs)(d.Fragment, {
              children: [(0, d.jsxs)("button", {
                onClick: e => {
                  e.stopPropagation(), s && s(!g), f(!g)
                },
                type: "button",
                "aria-label": n ? o.formatMessage(n) : ha,
                children: [(0, d.jsx)("i", {}), (0, d.jsx)("span", {
                  children: n ? (0, d.jsx)(ca.Z, {
                    ...n
                  }) : ha
                })]
              }), (0, d.jsx)("div", {
                className: va.linkWrapper,
                ref: v,
                style: {
                  "--ls-linkWrapper-opened-height": `${h}px`
                },
                children: (0, d.jsx)("div", {
                  className: va.links,
                  children: ma.map((e => {
                    let {
                      subdomaincom: a,
                      label: t
                    } = e;
                    return (0, d.jsx)(l, {
                      to: b(a),
                      onClick: () => {
                        _(a)
                      },
                      tabIndex: g ? 0 : -1,
                      children: t
                    }, `desktop-${a}`)
                  }))
                })
              })]
            })]
          }), !1]
        })
      };
      const ya = xa,
        _a = {
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
        Na = e => {
          let {
            style: a,
            className: t
          } = e;
          const s = {
              ...a
            },
            n = a["--border-image-source"];
          return n && (s["--border-image-source"] = `url(${(0,j.useGetCdnSource)(n)})`), (0, d.jsx)("div", {
            className: (0, j.classList)(_a.border, t),
            style: {
              ...s
            }
          })
        },
        ja = e => e?.images ? (0, d.jsx)("div", {
          className: (0, j.classList)(_a.layeredImage, _a[e?.variantClass], _a[e?.wrapperSizeClass]),
          style: {
            ...e?.style ?? {}
          },
          children: (0, d.jsxs)("div", {
            className: _a.layersWrapper,
            children: [e?.images?.map(((e, a) => {
              const {
                image: t,
                paddingClass: s,
                imageSizeClass: n,
                objectFitClass: r,
                positionClassX: o,
                positionClassY: i,
                zIndex: c,
                className: l,
                style: m,
                alt: p,
                displayClass: g
              } = e;
              return (0, d.jsx)(le, {
                image: t,
                style: {
                  zIndex: c ?? ++a
                },
                imageStyle: m,
                className: (0, j.classList)(l, g, _a.imageLayer, _a[s], _a[n], _a[r], _a[o], _a[i]),
                alt: p
              }, c ?? ++a)
            })), e?.borderImage && (0, d.jsx)(Na, {
              style: e?.borderImage,
              className: e?.borderImage?.displayClass
            })]
          })
        }) : null,
        Sa = e => {
          let {
            hero: a,
            children: t
          } = e;
          return a ? (0, d.jsx)("div", {
            className: "rockstargames-componentsaf5742f5a161e16cb38c8bd614a7fdbf",
            children: t
          }) : t
        },
        wa = e => {
          let {
            badge: a = null,
            badgeType: t,
            discountTxt: s,
            splitter: n,
            image: r,
            style: o,
            className: i = "",
            attributes: c = {},
            role: l,
            hero: m = !1
          } = e;
          return (0, d.jsx)(Sa, {
            hero: m,
            children: (0, d.jsx)("figure", {
              children: (0, d.jsxs)("div", {
                className: (0, j.classList)("rockstargames-componentsab10d5a913595e2fbbe0612d75f320b8", m ? "rockstargames-componentsb8558839bcd23d06fc3453876f54199b" : "", c?.hiddenMobile ? "hiddenMobile" : "", c?.hiddenLarge ? "hiddenLarge" : "", c?.className, i),
                style: (0, D.safeStyles)({
                  ...o,
                  ...c?.style
                }),
                ...c,
                children: [(0, d.jsx)(le, {
                  image: r,
                  className: i
                }), (r?.badge || r?.discountTxt || a || s) && (0, d.jsx)(ye, {
                  badge: r?.discountTxt ?? r?.badge ?? a ?? s,
                  badgeType: t,
                  splitter: r?.splitter ?? n,
                  role: r?.role ?? l
                }), r?.caption && (0, d.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: r.caption
                  }
                })]
              })
            })
          })
        },
        Ta = {
          multiSourceContainer: "rockstargames-componentse381fc56c6aa2467c3da35e4707e738d",
          multiSourceImage: "rockstargames-componentsf49fdfd7fb9f5fac000a0d3e8a454278",
          animatePlaceholder: "rockstargames-componentsee3004f447a07ee4350e4c7f66988279",
          "loader-keyframes": "rockstargames-componentsceffe0f096f9f99f1d2c31063115c45d"
        },
        Ca = e => {
          let {
            imageUrl: a,
            className: t,
            alt: s,
            style: n,
            lazy: r = !1,
            decoding: o = "auto",
            sizes: c = [320, 480, 768, 1024, 1440, 1920, 2560]
          } = e;
          const [l, m] = (0, i.useState)(!1);
          return (0, d.jsxs)("div", {
            className: Ta.multiSourceContainer,
            children: [!l && (0, d.jsx)("img", {
              className: [t, Ta.animatePlaceholder].join(" "),
              src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjMzMzMzMzIi8+Cjwvc3ZnPgo=",
              sizes: "(max-width: 1024px) 100vw, 1024px",
              alt: "Loading...",
              style: n
            }), (0, d.jsx)("img", {
              className: [Ta.multiSourceImage, t].join(" "),
              src: `${a}?im=Resize=1920`,
              srcSet: (p = a, c.map((e => `${p}?im=Resize=${e} ${e}w`)).join(", ")),
              sizes: "(max-width: 400px) 200px, (max-width: 1920px) 100vw, 1920px",
              alt: s ?? "Multi-Source Image",
              style: n,
              onLoad: () => {
                m(!0)
              },
              loading: r ? "lazy" : "eager",
              decoding: o
            })]
          });
          var p
        },
        Ia = {
          tag: "rockstargames-componentsc1e678bcb5a1e1a1be6114282f264928"
        },
        Ea = e => {
          let {
            className: a,
            href: t,
            title: s,
            style: n
          } = e;
          const r = (0, d.jsxs)("div", {
            style: n,
            className: [Ia.tag, a].join(" "),
            children: [(0, d.jsx)("i", {}), s]
          });
          return void 0 !== t ? (0, d.jsx)(l, {
            to: t,
            children: r
          }) : r
        },
        La = {
          newswireBlock: "rockstargames-componentsab12ad38cf58ad5fbb7ddff2a9e1889d",
          info: "rockstargames-componentsf54c31159d25a80251ae553245d153a3",
          title: "rockstargames-componentsc5b842792dd570d6a4fc662a012371c7",
          newswireBlockNoSpecialOrder: "rockstargames-componentsca540bd10286c6f9404244af6d161675",
          preview: "rockstargames-componentsf48d94f9b625ce1459b45e9a85bc0ccc",
          previewMobile: "rockstargames-componentsfeae4bb6be2ac66aaba0c691b1da5b70",
          top: "rockstargames-componentse273dbd6f05af08d429fbf75c4f27f83",
          startAnimation: "rockstargames-componentsdc02b8411cb8c96f531faaed38022cc3"
        },
        Va = e => {
          let {
            index: a,
            post: t,
            noSpecialOrder: s = !1,
            style: n = {}
          } = e;
          const [r] = (0, c.useSearchParams)(), o = t.preview_images_parsed.newswire_block, i = {
            default: 0 !== a || s ? o.square || o.d16x9 || o._fallback : o.d16x9 || o.square || o._fallback,
            mobile: o.square || o._fallback
          }, [m, p] = (0, D.usePreloadImg)(i.default), [g, f] = (0, D.usePreloadImg)(i.mobile), u = {
            default: {
              backgroundImage: `url(${i.default})`
            },
            mobile: {
              backgroundImage: `url(${i.mobile})`
            }
          };
          return (0, d.jsx)(l, {
            "data-gtm-category": "Newswire",
            "data-gtm-action": "Article Block Click",
            "data-gtm-label": `${t.title}`,
            to: t.url,
            className: [La.newswireBlock, s ? La.newswireBlockNoSpecialOrder : "", null !== m ? La.startAnimation : ""].join(" "),
            children: (0, d.jsxs)(d.Fragment, {
              children: [0 !== a || r.get("tag_id") ? (0, d.jsx)("div", {
                className: La.preview,
                style: u.default
              }) : (0, d.jsxs)(d.Fragment, {
                children: [(0, d.jsx)("div", {
                  className: La.previewMobile,
                  style: u.mobile
                }), (0, d.jsx)("div", {
                  className: La.preview,
                  style: u.default
                })]
              }), (0, d.jsxs)("div", {
                className: La.info,
                children: [(0, d.jsxs)("div", {
                  className: La.top,
                  children: [t.primary_tags.length ? (0, d.jsx)(Ea, {
                    title: t.primary_tags[t.primary_tags.length > 1 && 722 === t.primary_tags[0].id ? 1 : 0].name
                  }) : "", (0, d.jsx)("time", {
                    dateTime: t.created,
                    children: t.created_formatted
                  })]
                }), (0, d.jsx)("h5", {
                  className: La.title,
                  dangerouslySetInnerHTML: {
                    __html: t.title
                  }
                })]
              })]
            })
          })
        };
      var $a = t(4917),
        Ba = t.n($a);
      const za = (0, D.withTranslations)((e => {
          let {
            relativeTo: a = "",
            tagId: t = null,
            metaUrl: s = "/newswire",
            t: n
          } = e;
          const [r] = (0, c.useSearchParams)(), {
            tagId: o = null
          } = (0, c.useParams)(), [l, m] = (0, i.useState)(o ?? t ?? r.get("tag_id")), [p, f] = (0, i.useState)(1), [u, b] = (0, i.useState)([]), [k, v] = (0, i.useState)(null), {
            data: h
          } = (0, g.useQuery)(Ba(), {
            variables: {
              tagId: Number(l),
              page: p,
              metaUrl: s
            },
            autoSetLoading: !0
          });
          return (0, i.useEffect)((() => {
            f(1), b([]), m(o ?? t ?? r.get("tag_id"))
          }), [r.get("tag_id")]), (0, i.useEffect)((() => {
            h && h.posts && h.posts.paging && v(h.posts.paging), h && h.posts && h.posts.results && b(u.concat(h.posts.results))
          }), [h]), u.length ? (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsx)(Aa, {
              posts: u,
              relativeTo: a,
              noSpecialOrder: null !== l
            }), null !== k && k.nextPage ? (0, d.jsx)(N, {
              onClick: () => f(p + 1),
              disabled: !1,
              context: "secondary",
              children: n("More Stories")
            }) : ""]
          }) : null
        })),
        Da = {
          related: "rockstargames-componentse992dd17114710edcb26fbc8dc8e666d",
          posts: "rockstargames-componentsa49f6938e087663b1ac0fd1b93456487",
          just1post: "rockstargames-componentsb5303ef0b966b9d4d4486db944b9b78c"
        },
        Ma = (0, D.withTranslations)((e => {
          let {
            posts: a,
            t
          } = e;
          return (0, d.jsxs)("section", {
            className: Da.related,
            children: [(0, d.jsx)("h2", {
              children: t("Related Stories")
            }), (0, d.jsx)("div", {
              className: [Da.posts, 1 === a.length ? Da.just1post : ""].join(" "),
              children: a.map((e => (0, d.jsx)(Va, {
                noSpecialOrder: !0,
                post: e
              }, e.id)))
            })]
          })
        })),
        Fa = {
          newswireBlocks: "rockstargames-componentsb787e2cc67a938470008b0fa3c5e57f8",
          noSpecialOrder: "rockstargames-componentse3641b4f2f8f6fa67e5d06eba31981e1"
        },
        Aa = (0, D.withGtmTracking)((e => {
          let {
            noSpecialOrder: a = !1,
            posts: t,
            gtmTrack: s,
            relativeTo: n
          } = e;
          return (0, i.useEffect)((() => {
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
            className: [Fa.newswireBlocks, a ? Fa.noSpecialOrder : "", Fa.contextHome].join(" "),
            children: t.map(((e, t) => (0, d.jsx)(Va, {
              index: t,
              noSpecialOrder: a,
              post: e
            }, e.id)))
          })
        }));
      var Pa = t(9997);
      const Ga = "rockstargames-componentsd86a3089b6f6e51c437bc17b703ac57b",
        Oa = e => {
          let {
            children: a,
            data: t,
            onPageUpdate: s,
            page: n,
            className: r
          } = e;
          return (0, d.jsx)("a", {
            href: "#",
            className: n === t.page ? `rockstargames-componentsc18f44f69dad760ad748324d98f1efcd ${r??""}` : "",
            onClick: e => {
              e.preventDefault(), s(n)
            },
            children: a
          })
        },
        Ha = e => {
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
              children: [(0, d.jsx)(Oa, {
                data: a,
                onPageUpdate: t,
                page: 1,
                children: "1"
              }), 2 !== n[0] ? (0, d.jsx)("div", {
                className: Ga,
                children: "..."
              }) : ""]
            }) : "", n.map((e => (0, d.jsx)(Oa, {
              data: a,
              onPageUpdate: t,
              page: e,
              className: s,
              children: e
            }, e))), a.pageCount > 8 ? (0, d.jsxs)(d.Fragment, {
              children: [n.slice(-1)[0] + 1 < a.pageCount ? (0, d.jsx)("div", {
                className: Ga,
                children: "..."
              }) : "", (0, d.jsx)(Oa, {
                data: a,
                onPageUpdate: t,
                page: a.pageCount,
                children: a.pageCount
              })]
            }) : ""]
          })
        };
      var Ra = t(6147);
      const Ua = e => {
          let {
            children: a
          } = e;
          const {
            parallaxController: t
          } = (0, Ra.bc)();
          return (0, i.useLayoutEffect)((() => {
            if (!t) return;
            const e = setInterval((() => {
              t.update()
            }), 500);
            return () => clearInterval(e)
          }), [t]), a
        },
        Wa = {
          parallaxWrapper: "rockstargames-componentsac6a811a2c026eb9d37c82e804870efc",
          large: "rockstargames-componentsa8acf06a80d716956d8490e4d8c223f7",
          medium: "rockstargames-componentsbd7e3cede84d0e9316f0577f23921911",
          small: "rockstargames-componentsd56e2c3a2b2a210394852ba9e95b4cce"
        },
        qa = e => {
          let {
            scrollAxis: a = "vertical",
            size: t = "",
            style: s = {},
            children: n
          } = e;
          return (0, d.jsx)(Ra.Xu, {
            scrollAxis: a,
            children: (0, d.jsx)(Ua, {
              children: (0, d.jsx)("div", {
                className: (0, j.classList)(Wa.parallaxWrapper, Wa[t]),
                style: s,
                "data-context": "parallax-wrapper",
                children: n ? n.map(((e, t) => (0, i.cloneElement)(e, {
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
        Za = e => {
          let {
            layers: a = [],
            displayClass: t = "",
            style: s = {}
          } = e;
          const n = (0, j.useGenerateCdnSource)();
          if (!a || !a[0]?.image) return null;
          const r = a.map((e => ({
            ...e,
            props: {
              style: {
                ...e.style
              }
            },
            style: void 0,
            image: n(e?.image ?? null)
          })));
          return (0, d.jsx)(Ra.UG, {
            className: (0, j.classList)("rockstargames-componentsd97831cde902af87ada6d20331a1b381", t),
            layers: r,
            style: s
          })
        },
        Ya = "rockstargames-componentsa84defbd41213ae39ad00cd983c9fdf3",
        Qa = e => {
          let {
            minOffset: a = 0,
            maxOffset: t = 0,
            scrollAxis: s = "vertical",
            displayClass: n = "",
            style: r = {},
            children: o
          } = e;
          return "horizontal" === s ? (0, d.jsx)(Ra.VS, {
            x: [a, t],
            className: (0, j.classList)(Ya, n),
            styleOuter: r,
            children: o
          }) : (0, d.jsx)(Ra.VS, {
            y: [a, t],
            className: (0, j.classList)(Ya, n),
            styleOuter: r,
            children: o
          })
        },
        Xa = {
          promoModule: "rockstargames-componentsa96cf75058f24406ae69280956e81864",
          promoModuleImage: "rockstargames-componentsb6b59b287601476f0e2a16f0c432bdb6",
          gradient: "rockstargames-componentsd0268af224555225272412ec734df075",
          promoModuleContentContainer: "rockstargames-componentscbdd330f3c87cce935433ca35f1bbf41",
          left: "rockstargames-componentsd1e4a39133c7490a56595a253ceecfaa",
          right: "rockstargames-componentscb9a693453841566594ff1e66bf1a0a2",
          promoModuleTextContent: "rockstargames-componentsb3c7d9385f30c83c8b1efd8f5fb0ba3f"
        },
        Ka = e => {
          let {
            backgroundColor: a,
            brands: t = [],
            description: s = "",
            ctaLabel: n = "Click here",
            ctaLink: r = "https://rockstargames.com",
            gradient: o = !0,
            image: c,
            imageOrientation: l = "right",
            title: m = ""
          } = e;
          const [p, g] = (0, i.useState)(!1), {
            ref: f,
            inView: u
          } = (0, G.YD)({
            threshold: .6
          }), {
            track: b
          } = (0, M.useGtmTrack)(), k = {
            "--promo-background": a ?? "var(--black-200)",
            "--promo-image": `url(${(0,j.useGetCdnSource)(c)})` ?? 0,
            "--promo-order": "left" === l ? "row" : "row-reverse"
          };
          return (0, i.useEffect)((() => {
            u && !p && (b({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: "promo module",
              element_placement: "promo module"
            }), g(!0))
          }), [u]), (0, d.jsxs)(Ee.E.div, {
            className: Xa.promoModule,
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
            ref: f,
            children: [(0, d.jsx)("div", {
              className: [Xa.promoModuleImage, o ? Xa.gradient : "", "left" === l ? Xa.left : Xa.right].join(" ")
            }), (0, d.jsxs)("div", {
              className: Xa.promoModuleContentContainer,
              children: [(0, d.jsx)(y, {
                brands: t,
                className: Xa.promoModuleBrands
              }), (0, d.jsxs)("div", {
                className: Xa.promoModuleTextContent,
                children: [m && (0, d.jsx)("h3", {
                  children: m
                }), s && (0, d.jsx)("p", {
                  children: s
                })]
              }), n && (0, d.jsx)(C, {
                to: r,
                text: n,
                onClick: () => {
                  b({
                    event: "cta_other",
                    event_category: "cta",
                    event_action: "other",
                    event_label: n,
                    element_placement: "promo module",
                    link_url: r,
                    text: n
                  })
                }
              })]
            })]
          })
        };
      var Ja = t(3761),
        et = t(3111);
      const at = {
        rating: "rockstargames-componentsc004868ea6a6081b6841ea37941dc6dc",
        withDescriptors: "rockstargames-componentsc4c1846c85cbccacafd56ae4b957c2c2",
        withOutDescriptors: "rockstargames-componentse3265d7edca1582513d0fdc449236c9b",
        text: "rockstargames-componentseee91c3283b0b0f696b1792bb7176175"
      };
      (0, D.importAll)(t(5570));
      const tt = Ze((e => {
          let {
            descriptors: a = null,
            footer: s = null,
            href: n,
            img: r = null,
            titleSlug: o = null,
            style: c = {},
            className: m
          } = e;
          const [p, f] = (0, i.useState)(!1), {
            inView: u
          } = (0, G.YD)({
            threshold: .6
          }), [b, k] = (0, i.useState)({
            img_rating: r,
            rating_descriptors: a,
            rating_footer: s,
            url_rating: n
          }), {
            track: v
          } = (0, M.useGtmTrack)(), h = (0, da.Z)(), {
            data: x
          } = (0, g.useQuery)(Ja.GameData, {
            variables: {
              titleSlug: o
            },
            skip: !o
          });
          if ((0, i.useEffect)((() => {
              x && k(x?.game)
            }), [x]), (0, i.useEffect)((() => {
              u && !p && b.img_rating && (v({
                event: "page_section_impression",
                event_action: "impression",
                event_category: "page_section",
                event_label: "rating",
                element_placement: "rating"
              }), f(!0))
            }), [u]), !b.img_rating) return null;
          const y = !!b.rating_descriptors;
          return (0, d.jsxs)("div", {
            className: [at.rating, y ? at.withDescriptors : at.withOutDescriptors, m || ""].join(" "),
            style: (0, D.safeStyles)(c),
            children: [(0, d.jsx)(l, {
              to: b.url_rating,
              target: "_blank",
              children: (0, d.jsx)("img", {
                alt: h.formatMessage(et.components.components_ratings_link_alt, {
                  rating: (_ = b.img_rating, _.replace(/_/g, " ").split(".")[0].toUpperCase())
                }),
                src: t(4593)(`./${b.img_rating}`)
              })
            }), y && (0, d.jsxs)("div", {
              className: at.text,
              children: [(0, d.jsx)("p", {
                className: at.descriptors,
                dangerouslySetInnerHTML: {
                  __html: b?.rating_descriptors?.split(/<br\s?\/?>/).join(", ") || ""
                }
              }), b.rating_footer && (0, d.jsx)("hr", {}), b.rating_footer && (0, d.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: b.rating_footer.replace(/ \//g, ", ")
                }
              })]
            })]
          });
          var _
        })),
        st = {
          responsiveFlexBox: "rockstargames-componentse4a3b9b6071fe50e64de8f4c9c6841d3",
          responsiveFlexItem: "rockstargames-componentsaa899ffe0d4ed9474eb2058b5884ee51",
          responsiveImage: "rockstargames-componentsaaa1a0871637276a49c581a317952643"
        },
        nt = e => {
          let {
            children: a,
            className: t,
            style: s
          } = e;
          return (0, d.jsx)("div", {
            className: [st.responsiveFlexBox, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: a
          })
        },
        rt = {
          responsiveFlexItem: "rockstargames-componentse8d9468ec8cdbdcf6b00a4daedcfbab5"
        },
        ot = e => {
          let {
            children: a,
            className: t,
            style: s
          } = e;
          return (0, d.jsx)("div", {
            className: [rt.responsiveFlexItem, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: a
          })
        },
        it = {
          responsiveGridBox: "rockstargames-componentse91d4d1de6e479c331b2bc50227fae96",
          responsiveGridItem: "rockstargames-componentsb7b98f304a0507fadedd1e3449fba010"
        },
        ct = e => {
          let {
            children: a,
            cols: t,
            className: s,
            rows: n,
            style: r
          } = e;
          return void 0 === r && (r = {}), void 0 !== t && (r.gridTemplateColumns = `repeat(${t}, 1fr)`), void 0 !== n && (r.gridTemplateRows = `repeat(${n}, 1fr)`), (0, d.jsx)("div", {
            className: [it.responsiveGridBox, void 0 !== s ? s : ""].join(" "),
            style: r,
            children: a
          })
        },
        dt = {
          responsiveGridBox: "rockstargames-componentsd2a57229e98f203a0df1d5e4dc5168e7",
          responsiveGridItem: "rockstargames-componentsa550b6abbcce0c5385bb1bbf3aaaaf89"
        },
        lt = e => {
          let {
            children: a,
            className: t,
            style: s
          } = e;
          return (0, d.jsx)("div", {
            className: [dt.responsiveGridItem, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: a
          })
        },
        mt = {
          responsiveImage: "rockstargames-componentscf17dc54f4db5d6644c56b416b15b33f"
        },
        pt = e => {
          let {
            src: a,
            className: t = "",
            animate: s,
            ariaLabel: n,
            style: r = {}
          } = e;
          const [o, i] = (0, D.usePreloadImg)(a);
          return o ? (r.backgroundImage = `url(${a})`, (0, d.jsx)("div", {
            role: "img",
            "aria-label": n ?? "R* Games",
            className: [mt.responsiveImage, s ? mt.animateBox : "", t].join(" "),
            style: {
              ...r,
              "--aspect-ratio": i.width / i.height
            }
          })) : null
        },
        gt = {
          responsiveSection: "rockstargames-componentsc5c99169fa31c5009611af9233db5968",
          maxWidth: "rockstargames-componentsd4363484ab65e013f4e7583a00c7a5f4"
        },
        ft = e => {
          let {
            children: a,
            className: t,
            style: s,
            maxWidth: n
          } = e;
          return (0, d.jsx)("section", {
            className: [gt.responsiveSection, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: n ? (0, d.jsx)("div", {
              className: gt.maxWidth,
              children: a
            }) : a
          })
        },
        ut = () => (0, d.jsx)(l, {
          className: "rockstargames-componentscc006d4ff1bfa49216622ebc92289fb0",
          alt: "Rockstar Games Home",
          to: "/"
        }),
        bt = () => {
          const {
            pathname: e
          } = (0, c.useLocation)();
          return (0, i.useEffect)((() => {
            window.scrollTo(0, 0)
          }), [e]), null
        },
        kt = (0, i.forwardRef)(((e, a) => {
          const {
            threshold: t,
            callback: s,
            children: n,
            requireUser: r
          } = e, {
            track: o
          } = (0, M.useGtmTrack)(r), [c, d] = (0, i.useState)(a?.current);
          return (0, i.useEffect)((() => {
            a?.current && d(a.current)
          }), [a]), ((e, a, t) => {
            const [s, n] = (0, i.useState)({
              scrollDepths: e,
              scrollY: 0
            }), {
              scrollDepths: r,
              scrollY: o
            } = s;
            (0, i.useEffect)((() => {
              "undefined" != typeof window && 0 !== window.pageYOffset && n((e => ({
                ...e,
                scrollY: window.pageYOffset
              })))
            }), []), (0, i.useEffect)((() => {
              n({
                scrollDepths: e,
                scrollY: 0
              })
            }), [window.location.pathname]);
            const c = (0, i.useCallback)((() => {
              const e = document.documentElement,
                o = document.body,
                i = t?.scrollTop || e.scrollTop || o.scrollTop,
                d = t?.scrollHeight || e.scrollHeight || o.scrollHeight,
                {
                  clientHeight: l
                } = e,
                m = i / (d - l) * 100;
              if (r) {
                const e = Math.min(...r, d);
                if (m >= e) {
                  const s = r.filter((a => a !== e));
                  0 === s.length && (t ?? window).removeEventListener("scroll", c), a && a({
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
            }), [r, t, a]);
            (0, i.useEffect)((() => {
              if ("undefined" == typeof window) return;
              const e = t ?? window;
              return e.addEventListener("scroll", c), () => e.removeEventListener("scroll", c)
            }), [c])
          })(t, (e => {
            let {
              scrollY: a
            } = e;
            o({
              event: "page_scroll",
              event_category: "page_scroll",
              event_action: a,
              scroll_depth: a
            }), "function" == typeof s && s(a)
          }), c), n
        })),
        vt = (0, D.withTranslations)((e => {
          let {
            t: a
          } = e;
          const [t] = (0, i.useState)(""), s = (0, c.useNavigate)(), n = (0, g.useMutateState)();
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
        ht = {
          skeleton: "rockstargames-componentsa76d39bab84e8f469972e22834204389",
          pulse: "rockstargames-componentse8aa563c46cfd0a74ea4dcfc1bb8a9e4",
          gen9Hero: "rockstargames-componentsd63bf424caff53fef09b8e4c2e20a3c3"
        },
        xt = e => {
          let {
            skeleton: a
          } = e;
          return a ? (0, d.jsx)("div", {
            className: [ht.skeleton, ht[a]].join(" ")
          }) : null
        },
        yt = {
          bodySmall: "rockstargames-componentsb9aa3afbdb37ff0aea705849df408c42"
        },
        _t = e => {
          let {
            track: a,
            artist: t
          } = e;
          return (0, d.jsxs)("div", {
            className: yt.track,
            children: [(0, d.jsx)("p", {
              children: a
            }), (0, d.jsx)("p", {
              className: yt.bodySmall,
              children: t
            })]
          })
        },
        Nt = e => {
          let {
            children: a
          } = e;
          return (0, d.jsxs)("div", {
            className: "rockstargames-componentsadbe1e185cd3cd1481eb242c25b0eb14",
            children: [(0, d.jsx)("h4", {
              className: "rockstargames-componentsa37f37abb5276c67d47bca88073adb3f",
              children: (0, d.jsx)(ca.Z, {
                ...et.components.components_track_list_title
              })
            }), (0, d.jsx)("div", {
              className: "rockstargames-componentsc0e76cb19681f62e125f0b004c296f0a",
              children: (0, d.jsx)("div", {
                className: "rockstargames-componentsb2a58aa8f0fbec82f1c7e834739aabad",
                children: i.Children.map(i.Children.toArray(a), (e => (0, d.jsx)(_t, {
                  ...e?.props
                })))
              })
            })]
          })
        },
        jt = "rockstargames-componentsce552800b27ae8165e7d3dc5a189fe11",
        St = "rockstargames-componentsf1715da046f9be2e226bc9f6342294c0",
        wt = {
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
        Tt = e => {
          let {
            title: a = "thumbnail gallery",
            thumbsPerView: t = 3,
            loop: s = !1,
            navigation: n = !1,
            slideChildren: r = [],
            variants: o = {
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
          } = (0, M.useGtmTrack)(), [m, p] = (0, i.useState)([We.Rv, We.o3, We.tl]), [g, f] = (0, i.useState)(null), [u, b] = (0, i.useState)(null);
          return (0, i.useEffect)((() => {
            const e = [We.Rv, We.o3, We.tl];
            n && e.push(We.W_), p(e)
          }), [n]), (0, i.useEffect)((() => {
            if (!r) return;
            const e = r.map(((e, a) => (0, d.jsx)(E.o5, {
              children: e
            }, Symbol(a).toString())));
            b(e)
          }), [r]), u ? (0, d.jsxs)(Ee.E.div, {
            className: "rockstargames-componentsabb6bd9f780af17f6dcf79964e885edb",
            variants: o.parent,
            transition: c.parent,
            initial: "initial",
            animate: "animate",
            children: [(0, d.jsx)(Ee.E.div, {
              className: jt,
              variants: o.main,
              transition: c.main,
              initial: "initial",
              animate: "animate",
              children: (0, d.jsx)(E.tq, {
                loop: s,
                navigation: n,
                pagination: {
                  clickable: !0
                },
                thumbs: {
                  swiper: g
                },
                modules: m,
                breakpoints: wt,
                className: jt,
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
            }), (0, d.jsx)(Ee.E.div, {
              className: St,
              variants: o.thumbs,
              transition: c.thumbs,
              initial: "initial",
              animate: "animate",
              children: (0, d.jsx)(E.tq, {
                threshold: 50,
                onSwiper: f,
                loop: s,
                breakpoints: wt,
                slidesPerView: t,
                freeMode: !0,
                watchSlidesProgress: !0,
                modules: m,
                className: St,
                children: u
              })
            })]
          }) : null
        };
      var Ct = t(2968);
      const It = e => {
          let {
            id: a = null,
            ids: t = null,
            setTitleDataPath: s = null,
            sync: n = !1
          } = e;
          const r = t ?? [a],
            {
              data: o
            } = (0, g.useQuery)(Ct.TinaModulesInfo, {
              variables: {
                ids: r,
                sync: n
              },
              setTitleDataPath: s,
              skip: !r.length
            });
          return o?.tinaModulesInfo ?? null
        },
        Et = Ze((e => {
          let {
            components: a = {},
            id: t = null,
            ids: s = null,
            skeleton: n
          } = e;
          const r = It({
            id: t,
            ids: s
          });
          if (!r) return (0, d.jsx)(xt, {
            skeleton: n
          });
          const o = r?.[0]?.tina;
          return o ? (0, d.jsx)(d.Fragment, {
            children: r.map(((e, t) => {
              let {
                tina: s
              } = e;
              return (0, d.jsx)(j.TinaParser, {
                components: a,
                tina: s,
                componentProps: {
                  tinaModulesInfo: r
                }
              }, t)
            }))
          }) : null
        })),
        Lt = e => {
          let {
            children: a,
            style: t,
            theme: s
          } = e;
          const [n, r] = (0, i.useState)(s);
          return (0, i.useEffect)((() => {
            s && r(s)
          }), [s]), (0, d.jsx)("div", {
            className: "rockstargames-componentsf1a049e5eed244f3a602a9842424d1c3",
            style: t,
            "data-theme": n,
            children: a
          })
        };
      var Vt = t(9714);
      const $t = {
          userVote: "rockstargames-componentsed30a827a4ee0c0fe965dbb8c52b61f6",
          info: "rockstargames-componentsbae3af054b3b38745be7b59e4338172e",
          voteContent: "rockstargames-componentse0f8555223a6d38a90a0cadb4d312769",
          loggedOutButtons: "rockstargames-componentsaded051bc064dd12716b093167ba0b44",
          voteButtons: "rockstargames-componentse7b91e90603eac9580ee286920e2e09d",
          downVote: "rockstargames-componentsfaadebdf7df51bea028f6686430a46d4",
          upVote: "rockstargames-componentsbf4e6863e21e200ba89eaf06cf1f70de",
          voteButtonActive: "rockstargames-componentsf470bab88d3ac74c73e2dc6aaa71e62f"
        },
        Bt = e => {
          let {
            description: a,
            foreign_id: t = document.location.pathname,
            foreign_type: s = "url",
            title: n
          } = e;
          const {
            track: r
          } = (0, M.useGtmTrack)(), {
            loggedIn: o
          } = (0, M.useRockstarUser)(), {
            refetch: c
          } = (0, g.useQuery)(Vt.UserGetVote, {
            skip: !0
          }), [l] = (0, g.useMutation)(Vt.UserCastVote), [m, p] = (0, i.useState)(null), f = (0, i.useCallback)((async e => {
            r({
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
            p(n?.data?.userCastVote?.vote ?? null)
          }), [t, s]);
          return (0, i.useEffect)((() => {
            (async () => {
              if (!o || !t || !s) return;
              const e = await c({
                foreign_id: t,
                foreign_type: s
              });
              p(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [t, s, o]), (0, d.jsx)("div", {
            className: $t.userVote,
            children: (0, d.jsxs)("div", {
              className: $t.voteContent,
              children: [(0, d.jsxs)("div", {
                className: $t.info,
                children: [(0, d.jsx)("h3", {
                  children: n
                }), (0, d.jsx)("p", {
                  children: a
                })]
              }), (0, d.jsxs)("div", {
                className: [$t.voteButtons, o ? "" : $t.loggedOutButtons].join(" "),
                children: [(0, d.jsx)("button", {
                  onClick: () => f(!0),
                  className: [$t.upVote, m ? $t.voteButtonActive : ""].join(" "),
                  type: "button",
                  "aria-label": "Vote up"
                }), (0, d.jsx)("button", {
                  className: [$t.downVote, !1 === m ? $t.voteButtonActive : ""].join(" "),
                  onClick: () => f(!1),
                  type: "button",
                  "aria-label": "Vote down"
                })]
              })]
            })
          })
        },
        zt = {
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
        Dt = (0, D.withLocale)((e => {
          let {
            locale: a,
            t,
            videos: s
          } = e;
          const {
            setBodyIsScrollable: n
          } = (0, D.useBodyScrollable)(), [r, o] = (0, i.useState)(0), [c, m] = (0, i.useState)(0), g = (0, i.useRef)(null), f = (0, i.useRef)(null);
          return (0, i.useEffect)((() => {
            if (!g.current || f.current) return;
            const e = new(p())(g.current);
            e.get("press").set({
              time: 0
            }), e.get("tap").set({
              time: 150
            });
            const a = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
              t = () => {
                o(r - 1 < 0 ? 0 : r - 1), m(0)
              },
              i = () => {
                const e = r + 1 >= s.length - 1 ? s.length - 1 : r + 1;
                o(e), m(0)
              },
              c = e => {
                m(e.isFinal ? 0 : e.deltaX), "panleft" !== e.additionalEvent && "panright" !== e.additionalEvent || !f.current?.classList.contains(zt.dragging) || a() && n(!1)
              },
              d = () => {
                a() && n(!0), m(0)
              },
              l = e => {
                "press" === e.type && g.current?.classList.add(`${zt.disableClick}`), "tap" === e.type && (g.current?.classList.remove(`${zt.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
              },
              u = () => {
                a() && n(!0), g.current && g.current.classList.remove(`${zt.disableClick}`)
              },
              b = () => {
                a() && n(!0)
              };
            return f.current.addEventListener("transitionend", b), e.on("swiperight", t), e.on("swipeleft", i), e.on("pan", c), e.on("panend", d), e.on("press tap", l), e.on("pressup", u), () => {
              e.off("swiperight", t), e.off("swipeleft", i), e.off("pan", c), e.off("panend", d), e.off("press tap", l), e.off("pressup", u), f.current && f.current.removeEventListener("transitionend", b), m(0)
            }
          }), [g.current, r]), (0, d.jsxs)("section", {
            className: zt.carousel,
            children: [(0, d.jsx)("div", {
              className: zt.track,
              ref: g,
              children: (0, d.jsx)("div", {
                className: `${zt.items} ${0!==c?zt.dragging:""}`,
                ref: f,
                style: {
                  transform: `translateX(calc(-${100*r}% + ${c}px))`
                },
                children: s.map(((e, a) => (0, d.jsx)(l, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through screencap",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  className: r === a ? zt.active : "",
                  role: "link",
                  title: e.title,
                  children: (0, d.jsx)(Gt, {
                    video: e,
                    size: 1280
                  })
                }, e.id)))
              })
            }), (0, d.jsxs)("footer", {
              children: [(0, d.jsx)("div", {
                className: zt.text,
                children: s.map(((e, s) => (0, d.jsx)(l, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through footer",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  role: "link",
                  title: e.title,
                  children: (0, d.jsxs)("div", {
                    className: [zt.info, s === r ? zt.active : ""].join(" "),
                    children: [(0, d.jsxs)("div", {
                      className: zt.title,
                      children: [(0, d.jsx)("div", {
                        className: zt.gameTitle,
                        children: `${e.game.title}${"fr_fr"===a?" ":""}`
                      }), (0, d.jsx)("h2", {
                        className: zt.videoTitle,
                        children: `${e.title}`
                      })]
                    }), (0, d.jsx)(N, {
                      className: zt.cta,
                      children: t("Watch Now")
                    })]
                  })
                }, e.id)))
              }), (0, d.jsx)("div", {
                className: zt.dots,
                children: s.map(((e, a) => (0, d.jsx)("button", {
                  "aria-label": `Slide ${a}`,
                  "data-gtm-category": "Marquee",
                  "data-gtm-action": "Dot click",
                  "data-gtm-label": `Dot clicked to ${a}`,
                  onClick: () => o(a),
                  className: r === a ? zt.active : "",
                  type: "button"
                }, e.id)))
              })]
            })]
          })
        })),
        Mt = {
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
        Ft = (0, D.withTranslations)((e => {
          let {
            vids: a,
            games: t,
            title: s,
            gameTitleNecessary: n
          } = e;
          const r = void 0 !== t ? "games" : "videos",
            o = "videos" === r ? a : t.results,
            c = (0, i.useRef)(null),
            [l, m] = (0, i.useState)(0),
            [g, f] = (0, i.useState)(0),
            u = e => {
              const a = Math.ceil(o.length / l);
              e < 0 ? e = 0 : e >= a - 1 && (e = a - 1), f(e)
            },
            [b, k] = (0, i.useState)(0);
          let v;
          return (0, i.useEffect)((() => {
            const e = () => {
              const e = e => window.matchMedia(`(max-width: ${e})`).matches,
                a = e("768px") ? 1 : e("990px") || e("1440px") ? 2 : e("1920px") ? 3 : 4;
              m(a)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [l]), (0, i.useEffect)((() => {
            if (c.current) {
              const e = new(p())(c.current),
                a = () => {
                  u(g - 1), k(0)
                },
                t = () => {
                  u(g + 1), k(0)
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
          }), [c.current, g]), v = "games" === r ? (0, d.jsx)(d.Fragment, {
            children: t.results.map((e => (0, d.jsx)(He, {
              game: e,
              dontOverrideTo: !0,
              to: `/videos?type=game&gameId=${e.id}`
            }, e.id)))
          }) : (0, d.jsx)(d.Fragment, {
            children: a.map((e => (0, d.jsx)(Ot, {
              video: e,
              gameTitleNecessary: n
            }, e.id)))
          }), (0, d.jsxs)("section", {
            className: Mt.videoList,
            children: [(0, d.jsxs)("h3", {
              className: Mt.sectionHeader,
              children: [s, (0, d.jsxs)("div", {
                className: Mt.arrowNav,
                children: [(0, d.jsx)("div", {
                  className: [Mt.arrow, Mt.previous, 0 === g ? Mt.disabled : ""].join(" "),
                  onClick: () => u(g - 1)
                }), (0, d.jsx)("div", {
                  className: [Mt.arrow, Mt.next, g === Math.ceil(o.length / l) - 1 ? Mt.disabled : ""].join(" "),
                  onClick: () => u(g + 1)
                })]
              })]
            }), (0, d.jsx)("div", {
              className: Mt.items,
              children: (0, d.jsx)("div", {
                className: Mt.trackWrapper,
                children: (0, d.jsx)("div", {
                  className: [Mt.track, 0 !== b ? Mt.dragging : ""].join(" "),
                  ref: c,
                  style: {
                    transform: `translateX(calc(-${100*g}% + ${b}px - (var(--standard-grid-gap) * ${g}))`,
                    gridAutoColumns: `calc(100 / ${l} * 1% - calc(var(--standard-grid-gap) * (${l-1}/${l}))`
                  },
                  children: v
                })
              })
            })]
          })
        })),
        At = (0, D.withTranslations)((e => {
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
          const r = a?.code ?? 398;
          return (0, d.jsxs)("div", {
            className: "rockstargames-componentsc7fe032eaf0127cb44b3aec94a930688",
            children: [(0, d.jsx)("h3", {
              children: `${n} (${r})`
            }), (0, d.jsx)(l, {
              to: "/",
              children: t("Home")
            }), "clr" !== s && (0, d.jsx)(vt, {})]
          })
        })),
        Pt = {
          videoPreview: "rockstargames-componentsfe7a3e548d37991de12016a69af8e6c0",
          card: "rockstargames-componentsdaabbfc1eda1710ae7d1346162b9392e",
          info: "rockstargames-componentsa7ab9b6f9cb9bbc84106a35eb5bec944",
          title: "rockstargames-componentsa56d5941f9b96a7739afafd390605684",
          screencap: "rockstargames-componentse72a05891b15325f72b498d292d1597d",
          screencapLoaded: "rockstargames-componentsed8b59749d6b49b669bfdd77a2d05da6",
          gameTitle: "rockstargames-componentse0e54e027a19ac5f0b1e839fd68b8795"
        },
        Gt = e => {
          let {
            video: a,
            size: t = 640
          } = e;
          const s = `${a.screencap}?im=Resize=${t}`,
            [n] = (0, D.usePreloadImg)(s);
          return (0, d.jsx)("div", {
            className: [Pt.screencap, n ? Pt.screencapLoaded : ""].join(" "),
            style: {
              background: `url(${s}) center/cover`
            }
          })
        },
        Ot = e => {
          let {
            gameTitleNecessary: a = !0,
            openInNewWindow: t = !1,
            video: s,
            size: n
          } = e;
          const r = `/videos/${s.id}`,
            o = {
              className: Pt.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": r
            },
            i = (0, d.jsxs)("div", {
              className: Pt.card,
              children: [(0, d.jsx)(Gt, {
                video: s,
                size: n
              }), (0, d.jsxs)("div", {
                className: Pt.info,
                children: [a ? (0, d.jsx)("div", {
                  className: Pt.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: s.game.title
                  }
                }) : "", (0, d.jsx)("h5", {
                  className: Pt.title,
                  dangerouslySetInnerHTML: {
                    __html: s.title
                  }
                })]
              })]
            });
          return t ? (0, d.jsx)("a", {
            href: r,
            target: "_blank",
            ...o,
            children: i
          }) : (0, d.jsx)(l, {
            to: r,
            ...o,
            children: i
          })
        };
      class Ht extends i.Component {
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
          return null !== this.state.error.code ? (0, d.jsx)(At, {
            error: this.state.error
          }) : this.props.children
        }
      }
      const Rt = function(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return function(t) {
          return (0, d.jsx)(Ht, {
            header: a,
            children: (0, d.jsx)(e, {
              ...t
            })
          })
        }
      };
      var Ut = t(1085),
        Wt = t(9683),
        qt = t(423);
      const Zt = (0, i.forwardRef)(((e, a) => {
          const {
            children: t,
            tag: s = "div"
          } = e, n = Ut.m[s];
          return (0, d.jsx)(Wt.X, {
            features: qt.H,
            children: (0, d.jsx)(n, {
              ref: a,
              ...e,
              children: t
            })
          })
        })),
        Yt = {
          visible: {
            opacity: 1
          },
          hidden: {
            opacity: 0
          }
        },
        Qt = {
          ease: "easeIn",
          duration: .4
        },
        Xt = e => {
          let {
            children: a
          } = e;
          return (0, d.jsx)(Ee.E.div, Object.assign({
            className: "rockstargames-componentsf530747be99449caf15a0155061aee75",
            variants: Yt,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: Qt
          }, {
            children: a
          }))
        },
        Kt = e => a => (0, d.jsx)(Xt, {
          children: (0, d.jsx)(e, Object.assign({}, a))
        }),
        Jt = {
          visible: {
            opacity: 1,
            y: 0
          },
          hidden: {
            opacity: 0,
            y: 40
          }
        },
        es = {
          ease: "easeIn",
          duration: .75
        },
        as = e => {
          let {
            children: a
          } = e;
          return (0, d.jsx)(Ee.E.div, {
            className: "rockstargames-componentse88740b4d3c20ab9f8656e87b324d143",
            variants: Jt,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: es,
            children: a
          })
        },
        ts = e => a => (0, d.jsx)(as, {
          children: (0, d.jsx)(e, {
            ...a
          })
        }),
        ss = {
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
        ns = {
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
        rs = function() {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "collapsed";
          return ns[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "imageMask"][e]
        };
      var os = t(400);
      const is = JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[300,300,0]},"a":{"k":[0,0,0]},"s":{"k":[244,244,100]}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"k":[100,100]},"p":{"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"tm","s":{"k":[{"i":{"x":[0.439],"y":[1.016]},"o":{"x":[0.561],"y":[0.015]},"n":["0p439_1p016_0p561_0p015"],"t":5,"s":[100],"e":[0]},{"t":33.0000013441176}],"ix":1},"e":{"k":[{"i":{"x":[0.439],"y":[1.017]},"o":{"x":[0.561],"y":[0.016]},"n":["0p439_1p017_0p561_0p016"],"t":0,"s":[100],"e":[0]},{"t":30.0000012219251}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"},{"ty":"st","fillEnabled":true,"c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":16},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"}],"ip":0,"op":900.000036657751,"st":0,"bm":0,"sr":1}],"v":"4.5.3","ddd":0,"ip":1.00000004073083,"op":33.0000013441175,"fr":29.9700012207031,"w":600,"h":600}'),
        cs = JSON.parse('{"v":"5.7.3","fr":60,"ip":0,"op":64,"w":300,"h":300,"nm":"Dot_Loading","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"center","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":10,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":22,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":34,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.667,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"right","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":5,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":17,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":29,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.333,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":12,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":24,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0}],"markers":[]}'),
        ds = {
          SPINNING: "spinning",
          THREE_DOTS: "threeDots"
        },
        ls = e => {
          let a, {
            type: t = ds.SPINNING
          } = e;
          switch (t) {
            case ds.THREE_DOTS:
              a = cs;
              break;
            case ds.SPINNING:
            default:
              a = is
          }
          return (0, d.jsx)(os.Z, {
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
    7715: e => {
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
        var r = s[a] || new Set,
          o = new Set,
          i = new Set;
        for (r.forEach((function(e) {
            i.add(e)
          })); i.size > 0;) {
          var c = i;
          i = new Set, c.forEach((function(e) {
            o.has(e) || (o.add(e), (s[e] || new Set).forEach((function(e) {
              i.add(e)
            })))
          }))
        }
        return o.forEach((function(a) {
          var s = n(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "GetAudioAlbum")
    },
    7627: e => {
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

      function r(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          o = new Set,
          i = new Set;
        for (r.forEach((function(e) {
            i.add(e)
          })); i.size > 0;) {
          var c = i;
          i = new Set, c.forEach((function(e) {
            o.has(e) || (o.add(e), (s[e] || new Set).forEach((function(e) {
              i.add(e)
            })))
          }))
        }
        return o.forEach((function(a) {
          var s = n(e, a);
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
    2968: e => {
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

      function r(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          o = new Set,
          i = new Set;
        for (r.forEach((function(e) {
            i.add(e)
          })); i.size > 0;) {
          var c = i;
          i = new Set, c.forEach((function(e) {
            o.has(e) || (o.add(e), (s[e] || new Set).forEach((function(e) {
              i.add(e)
            })))
          }))
        }
        return o.forEach((function(a) {
          var s = n(e, a);
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
    9714: e => {
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

      function r(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          o = new Set,
          i = new Set;
        for (r.forEach((function(e) {
            i.add(e)
          })); i.size > 0;) {
          var c = i;
          i = new Set, c.forEach((function(e) {
            o.has(e) || (o.add(e), (s[e] || new Set).forEach((function(e) {
              i.add(e)
            })))
          }))
        }
        return o.forEach((function(a) {
          var s = n(e, a);
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
    4917: (e, a, t) => {
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

      function r(e) {
        return e.filter((function(e) {
          if ("FragmentDefinition" !== e.kind) return !0;
          var a = e.name.value;
          return !n[a] && (n[a] = !0, !0)
        }))
      }

      function o(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var t = e.type;
          "NamedType" === t.kind && a.add(t.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          o(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          o(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          o(e, a)
        }))
      }
      s.definitions = s.definitions.concat(r(t(6077).definitions)), s.definitions = s.definitions.concat(r(t(9349).definitions));
      var i = {};

      function c(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      s.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          o(e, a), i[e.name.value] = a
        }
      })), e.exports = s, e.exports.NewswireList = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [c(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var s = i[a] || new Set,
          n = new Set,
          r = new Set;
        for (s.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var o = r;
          r = new Set, o.forEach((function(e) {
            n.has(e) || (n.add(e), (i[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = c(e, a);
          s && t.definitions.push(s)
        })), t
      }(s, "NewswireList")
    },
    3631: (e, a, t) => {
      var s = {
        "./left.svg": 4377,
        "./pc.svg": 6475,
        "./ps3.svg": 73,
        "./ps4.svg": 7561,
        "./ps5.svg": 4262,
        "./right.svg": 7601,
        "./switch.svg": 4394,
        "./x.svg": 9545,
        "./xbox.svg": 7012,
        "./xboxone.svg": 493,
        "./xboxseriesxs.svg": 1699
      };

      function n(e) {
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
      n.keys = function() {
        return Object.keys(s)
      }, n.resolve = r, e.exports = n, n.id = 3631
    },
    5570: (e, a, t) => {
      var s = {
        "./cero_a.png": 8865,
        "./cero_b.svg": 1314,
        "./cero_c.svg": 2123,
        "./cero_d.svg": 8064,
        "./cero_rp.png": 9063,
        "./cero_z.svg": 3353,
        "./djctq_10.svg": 6456,
        "./djctq_12.svg": 2790,
        "./djctq_14.svg": 9453,
        "./djctq_16.svg": 8906,
        "./djctq_18.svg": 6600,
        "./djctq_er.svg": 4431,
        "./djctq_l.svg": 7429,
        "./esrb_ao.svg": 9851,
        "./esrb_e.svg": 1986,
        "./esrb_e10plus.svg": 4180,
        "./esrb_m.svg": 8436,
        "./esrb_m_ao.svg": 627,
        "./esrb_rp.svg": 5507,
        "./esrb_rplm17.svg": 4010,
        "./esrb_t.svg": 7909,
        "./fpb_13.svg": 7651,
        "./fpb_16.svg": 3803,
        "./fpb_18.svg": 1359,
        "./fpb_pg.svg": 8185,
        "./grac_12.svg": 873,
        "./grac_15.svg": 9024,
        "./grac_18.svg": 9634,
        "./grac_a.svg": 6767,
        "./gsrr_0.svg": 6425,
        "./gsrr_12.svg": 8305,
        "./gsrr_15.svg": 3310,
        "./gsrr_18.svg": 4581,
        "./gsrr_6.svg": 2722,
        "./nmc_12.svg": 4380,
        "./nmc_16.svg": 5488,
        "./nmc_18.svg": 9322,
        "./nmc_21.svg": 4157,
        "./nmc_3.svg": 4323,
        "./nmc_7.svg": 5171,
        "./oflc_g.svg": 6833,
        "./oflc_m.svg": 35,
        "./oflc_ma15.svg": 4345,
        "./oflc_pg.svg": 5360,
        "./oflc_r18.svg": 2698,
        "./pegi_12.svg": 2404,
        "./pegi_16.svg": 7368,
        "./pegi_18.svg": 2322,
        "./pegi_3.svg": 8045,
        "./pegi_4.svg": 9194,
        "./pegi_6.svg": 9306,
        "./pegi_7.svg": 4340,
        "./pegi_rp.png": 8982,
        "./rars_0.svg": 2921,
        "./rars_12.svg": 3749,
        "./rars_16.svg": 8127,
        "./rars_18.svg": 2224,
        "./rars_6.svg": 6295,
        "./usk_0.svg": 4442,
        "./usk_12.svg": 202,
        "./usk_16.svg": 7597,
        "./usk_18.svg": 1187,
        "./usk_6.svg": 483,
        "./usk_rp.svg": 7152,
        "./vaci_rp.png": 4147
      };

      function n(e) {
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
      n.keys = function() {
        return Object.keys(s)
      }, n.resolve = r, e.exports = n, n.id = 5570
    },
    4593: (e, a, t) => {
      var s = {
        "./cero_a.png": 8865,
        "./cero_b.svg": 1314,
        "./cero_c.svg": 2123,
        "./cero_d.svg": 8064,
        "./cero_rp.png": 9063,
        "./cero_z.svg": 3353,
        "./djctq_10.svg": 6456,
        "./djctq_12.svg": 2790,
        "./djctq_14.svg": 9453,
        "./djctq_16.svg": 8906,
        "./djctq_18.svg": 6600,
        "./djctq_er.svg": 4431,
        "./djctq_l.svg": 7429,
        "./esrb_ao.svg": 9851,
        "./esrb_e.svg": 1986,
        "./esrb_e10plus.svg": 4180,
        "./esrb_m.svg": 8436,
        "./esrb_m_ao.svg": 627,
        "./esrb_rp.svg": 5507,
        "./esrb_rplm17.svg": 4010,
        "./esrb_t.svg": 7909,
        "./fpb_13.svg": 7651,
        "./fpb_16.svg": 3803,
        "./fpb_18.svg": 1359,
        "./fpb_pg.svg": 8185,
        "./grac_12.svg": 873,
        "./grac_15.svg": 9024,
        "./grac_18.svg": 9634,
        "./grac_a.svg": 6767,
        "./gsrr_0.svg": 6425,
        "./gsrr_12.svg": 8305,
        "./gsrr_15.svg": 3310,
        "./gsrr_18.svg": 4581,
        "./gsrr_6.svg": 2722,
        "./nmc_12.svg": 4380,
        "./nmc_16.svg": 5488,
        "./nmc_18.svg": 9322,
        "./nmc_21.svg": 4157,
        "./nmc_3.svg": 4323,
        "./nmc_7.svg": 5171,
        "./oflc_g.svg": 6833,
        "./oflc_m.svg": 35,
        "./oflc_ma15.svg": 4345,
        "./oflc_pg.svg": 5360,
        "./oflc_r18.svg": 2698,
        "./pegi_12.svg": 2404,
        "./pegi_16.svg": 7368,
        "./pegi_18.svg": 2322,
        "./pegi_3.svg": 8045,
        "./pegi_4.svg": 9194,
        "./pegi_6.svg": 9306,
        "./pegi_7.svg": 4340,
        "./pegi_rp.png": 8982,
        "./rars_0.svg": 2921,
        "./rars_12.svg": 3749,
        "./rars_16.svg": 8127,
        "./rars_18.svg": 2224,
        "./rars_6.svg": 6295,
        "./usk_0.svg": 4442,
        "./usk_12.svg": 202,
        "./usk_16.svg": 7597,
        "./usk_18.svg": 1187,
        "./usk_6.svg": 483,
        "./usk_rp.svg": 7152,
        "./vaci_rp.png": 4147
      };

      function n(e) {
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
      n.keys = function() {
        return Object.keys(s)
      }, n.resolve = r, e.exports = n, n.id = 4593
    },
    9065: (e, a, t) => {
      var s = {
        "./bounty.png": 3709,
        "./collector.png": 4041,
        "./moonshiner.png": 1012,
        "./naturalist.png": 1325,
        "./trader.png": 4669
      };

      function n(e) {
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
      n.keys = function() {
        return Object.keys(s)
      }, n.resolve = r, e.exports = n, n.id = 9065
    },
    4377: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3c6134ba61610ead6af640361535e346.svg"
    },
    6475: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    73: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg"
    },
    7561: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg"
    },
    4262: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b12e4e9678e7a4ebea34905926feeb90.svg"
    },
    7601: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cf1b78cec82c717ea9c2155ce4093736.svg"
    },
    4394: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg"
    },
    9545: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c453a914f0b049334120adfcba614e5.svg"
    },
    7012: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f74e871585118640ffd9ce881181a176.svg"
    },
    493: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg"
    },
    1699: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5bd8456deb2338503b8fd44786b5fa07.svg"
    },
    8865: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51b141250a4851d7ec3673d88dbd20a.png"
    },
    1314: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/62cd2c266d677467735bd0e7c35fc07d.svg"
    },
    2123: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/96e2f780356b81450e02ec721e3c7f57.svg"
    },
    8064: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/16ba95f97d23ba2c8c73b59495f90cdf.svg"
    },
    9063: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/676b3908098d8b19f1019ce361af45ec.png"
    },
    3353: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1f0055474ca057f3fab93aab4a63325.svg"
    },
    6456: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ab6153e374b885a02f2cc1380dcca146.svg"
    },
    2790: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/073e7a413a027ccd5b0700d8903df35c.svg"
    },
    9453: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccfd53e1d7346a0677e0653a8e97f3e4.svg"
    },
    8906: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f08b80d1a42d97fbdff2c2db9a6de1a2.svg"
    },
    6600: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a6aed34c22e1f8ef61f38c808f081ebc.svg"
    },
    4431: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0166b43466735de342f0dac5295cd193.svg"
    },
    7429: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b3c5e193228e689548c438c8fa57dea.svg"
    },
    9851: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c4dd58f5b5b97796b6c6177de364dd36.svg"
    },
    1986: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/201de0eb81b09ea93aa1aef2a6824b7c.svg"
    },
    4180: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/534078f6307f97ce0d70e0bb885f9d77.svg"
    },
    8436: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f4b0d9409df1e8a420b2118e4e601263.svg"
    },
    627: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dc9154a7d22161125d95101e255dc09a.svg"
    },
    5507: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/80dd50a2fa9aae3b5d6effdb2d9c2661.svg"
    },
    4010: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61f24a9d7cc8c3c42955fd17e4c47b8c.svg"
    },
    7909: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/35cf853d7882b090b56837bd08127da1.svg"
    },
    7651: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d9e1c49497350c48ef4a42a38e9006fd.svg"
    },
    3803: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dc265fc3d2a6d902b080bd9ed6d5cc00.svg"
    },
    1359: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/db100c679bd0d5fb670900bc5492486d.svg"
    },
    8185: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c16ca9475385093710a51ace101b0273.svg"
    },
    873: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1f1d86acb2f6722f9bb4d16a563e4bd3.svg"
    },
    9024: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/478d3a3012984f6a58eeea7f33f5f7e8.svg"
    },
    9634: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d5cd0f82f6694431a580a25537946b2c.svg"
    },
    6767: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/229675cb3b6d359b68a24b0d863f65fa.svg"
    },
    6425: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5c44630695e1bdc8e41e1e812f6124b2.svg"
    },
    8305: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/09e0c200ba4d0a1afdd1436b67bcae8f.svg"
    },
    3310: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/64b8f5d5e0ebf1b373d428ddb9662abb.svg"
    },
    4581: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e3ab94ec8c45ca9037b7dc72a7332f29.svg"
    },
    2722: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/58358c92b8a55353b5c0b4386d95e572.svg"
    },
    4380: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9bc7a0f78693c9813b1c67e6f38fab08.svg"
    },
    5488: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/44f3c56a373f1be85bb063e147294978.svg"
    },
    9322: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1128a526bdba2bf29a6b58c728c064f5.svg"
    },
    4157: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8fc35d81a776bc0b4e704adbdef9faad.svg"
    },
    4323: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/faf5ad053cd5ecab7a21decee2dc9771.svg"
    },
    5171: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d93b217bee965a06071dc2cd5a7ff33.svg"
    },
    6833: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b09d24a1274365100f8393f5dff81e48.svg"
    },
    35: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0bc6aed32521309143e498e13c635fd7.svg"
    },
    4345: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/310e473666419388ba34e89291de6512.svg"
    },
    5360: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bbeb819f9d25d687062aab0f8c18b16f.svg"
    },
    2698: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/59a6ba7ed2027da5635a7cfec40b78ff.svg"
    },
    2404: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/198f755ceae880fb88646111acc8ed16.svg"
    },
    7368: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8f07578e729bf968a70116b0c3974889.svg"
    },
    2322: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dec923748ffd047a6e98576bd2af9bd9.svg"
    },
    8045: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/39c7fd5b50ae8512366ce78228f4d447.svg"
    },
    9194: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e38552fd53e9840e863eea6787551c9.svg"
    },
    9306: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ce6a057fb760840b4f5d8654ef28550c.svg"
    },
    4340: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/caec52daa668bf39bce12bbef32290fa.svg"
    },
    8982: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a380d3ce353544a356e8ce48f8586804.png"
    },
    2921: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2583ed174e341e7d325ef2abe3c9a9a1.svg"
    },
    3749: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/119d27e33ea983bdc14570b776f59241.svg"
    },
    8127: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/138e36d0438f03eb742a570366c56ddc.svg"
    },
    2224: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/aff6ebf2baed2547f9b2c30ae00a1c2f.svg"
    },
    6295: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/aff09306fc421ea8bf1b4058f1588177.svg"
    },
    4442: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7f637f93e9513c015e2c8ec7a8ed10eb.svg"
    },
    202: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38b3e9ccc5a4d27023aa0d8f6d5f8300.svg"
    },
    7597: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a98a745c1c28a12c21ff45784dd0670c.svg"
    },
    1187: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d1d3ba96bf0a5ef26489b077fdfb447a.svg"
    },
    483: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a4b48a64eff8f222f63d75eb75fb5aba.svg"
    },
    7152: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/278e84e5a41407499c43a30f545da3e8.svg"
    },
    4147: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/703a546f7a5109c1e2af87a212135aad.png"
    },
    3709: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48754c6fc2f75b0554098423f2bda6d1.png"
    },
    4041: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e111377ba943e9eefaa9204f77c77093.png"
    },
    1012: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4639a2711d1bca49a87c302784050ee3.png"
    },
    1325: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/898794daaec68a69ef5ec4afaefe1948.png"
    },
    4669: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e77bb0f25a6ea37e8d831b12df9fa3c.png"
    },
    8933: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8787df71c723ebe44f82fd13ed216e09.jpg"
    },
    8280: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61ae357c3bfbabb5d765e9a7c794d08f.png"
    }
  }
]);