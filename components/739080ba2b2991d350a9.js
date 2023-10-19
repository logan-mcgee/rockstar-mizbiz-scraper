(self.webpackChunk_rockstargames_components = self.webpackChunk_rockstargames_components || []).push([
  [703], {
    4739: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => m
      });
      var n = t(927),
        i = t(7192),
        s = t.n(i),
        d = t(9542),
        r = t(9929);
      const c = {
        grid: "c81dee7fd0870f89c89161c6ad22d2dc691e",
        itemList: "c81dee7fd0870f89aeed45e36e2fc223fb9b",
        gtaplus: "c81dee7fd0870f89a94d8221792ee3d1ee37",
        rdo: "c81dee7fd0870f89c9104bac1ba9fe88116a",
        noImg: "c81dee7fd0870f89f86567dc9c46964ed881",
        gtao: "c81dee7fd0870f89f25978c2a77052c2267c",
        custom: "c81dee7fd0870f89c2246e99cd35a0f82086",
        yellow: "c81dee7fd0870f89a0002aff4143a00a57e4",
        hotPink: "c81dee7fd0870f89c6db845149d2b9d0344b",
        red: "c81dee7fd0870f89a9c7659c95e05538c243",
        turquoise: "c81dee7fd0870f89a5dfc4f60b3837df9ba9",
        purple: "c81dee7fd0870f89bb00befaa9ddecaa642a",
        teal: "c81dee7fd0870f89a3c59c6aaa744688a0c0",
        blue: "c81dee7fd0870f89b64557dc83a6418e621b",
        green: "c81dee7fd0870f89dcb28fe6e466a3c0a91e",
        darkRed: "c81dee7fd0870f89eea2f560977905393a6a",
        darkBlue: "c81dee7fd0870f89e465ba0afc74d677584c",
        goldenrod: "c81dee7fd0870f89fd1ceddbe0451d6077f6",
        skull: "c81dee7fd0870f89f8bb4c9647138419a301"
      };
      var o = t(5770);
      const {
        sanitize: l
      } = s(), m = e => {
        let {
          list: a,
          string: t,
          starColor: i,
          style: s,
          className: m,
          game: f,
          noImg: u,
          columns: g,
          mobileColumns: p
        } = e;
        const [v, b] = (0, n.useState)(null);
        return (0, n.useEffect)((() => {
          b(a)
        }), [a]), t || a ? g && v ? (0, o.jsx)("div", {
          className: c.grid,
          style: {
            "--ordered-list-grid-column": g,
            "--ordered-list-grid-column-mobile": p ?? g
          },
          children: (0, o.jsx)("ol", {
            style: (0, r.safeStyles)(s),
            className: (0, d.classList)(c.itemList, c.noImg, c[i], c[f]),
            children: v.map((e => (0, o.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: l(e.content)
              }
            }, e.content)))
          })
        }) : (0, o.jsx)("ol", {
          style: (0, r.safeStyles)(s),
          className: (0, d.classList)(c.itemList, c.custom, u ? c.noImg : "", i ? c[i] : "", f ? c[f] : "", m ?? ""),
          children: a.map((e => (0, o.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: l(e?.content ?? e)
            }
          }, e?.content)))
        }) : null
      }
    },
    6475: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => m
      });
      var n = t(927),
        i = t(7192),
        s = t.n(i),
        d = t(9542),
        r = t(9929);
      const c = {
        grid: "c81dee7fd0870f89a913315bef66f9841193",
        itemList: "c81dee7fd0870f89b47c4ec3ee5a7b25272a",
        gtaplus: "c81dee7fd0870f89f62d53aa88002b52a1ea",
        rdo: "c81dee7fd0870f89cb929b69e72d0b745821",
        noImg: "c81dee7fd0870f89d488e38df25c0b9a4c20",
        gtao: "c81dee7fd0870f89ce5462c5860712b67002",
        custom: "c81dee7fd0870f89a1eadd442b1479e27d60",
        yellow: "c81dee7fd0870f89eb8d7b0da6967262905d",
        hotPink: "c81dee7fd0870f89ef6a35989cf7f2815a81",
        red: "c81dee7fd0870f89f16f93451d76eff119ef",
        turquoise: "c81dee7fd0870f89b68b8022cefb15c42493",
        purple: "c81dee7fd0870f89b81f26d04bea51236b12",
        teal: "c81dee7fd0870f89eabe5a1697de9f60444b",
        blue: "c81dee7fd0870f89cab0d114386be0534b0a",
        green: "c81dee7fd0870f89e6521308cf3d4cbcd0eb",
        darkRed: "c81dee7fd0870f89da07f0da46dc71261efb",
        darkBlue: "c81dee7fd0870f89db540e4cd55e1fd039f6",
        goldenrod: "c81dee7fd0870f89d2ccafcdd0dbfba68f90",
        skull: "c81dee7fd0870f89d5f11f6a0da20e30e1cc"
      };
      var o = t(5770);
      const {
        sanitize: l
      } = s(), m = e => {
        let {
          list: a,
          string: t,
          starColor: i,
          style: s,
          className: m,
          game: f,
          noImg: u,
          columns: g,
          mobileColumns: p
        } = e;
        const [v, b] = (0, n.useState)(null), k = t ? t.split("_#_") : a;
        return (0, n.useEffect)((() => {
          b(a)
        }), [a]), t || a ? g && v ? (0, o.jsx)("div", {
          className: c.grid,
          style: {
            "--unordered-list-grid-column": g,
            "--unordered-list-grid-column-mobile": p ?? g
          },
          children: (0, o.jsx)("ul", {
            style: (0, r.safeStyles)(s),
            className: (0, d.classList)(c.itemList, c.noImg, c[i], c[f]),
            children: v.map((e => (0, o.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: l(e.content)
              }
            }, e.content)))
          })
        }) : (0, o.jsx)("ul", {
          style: (0, r.safeStyles)(s),
          className: (0, d.classList)(c.itemList, c.custom, u ? c.noImg : "", i ? c[i] : "", f ? c[f] : "", m ?? ""),
          children: k.map((e => (0, o.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: l(e?.content ?? e)
            }
          }, e?.content)))
        }) : null
      }
    },
    2541: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        A: () => o,
        AudioPlayer: () => h,
        Badge: () => x,
        Brands: () => y,
        Button: () => N,
        ButtonGroup: () => E,
        CalloutSection: () => Y,
        Carousel: () => z,
        ConditionalBlock: () => P,
        CookieAB: () => J,
        CountryInputField: () => K,
        Cta: () => ne,
        DescriptionArea: () => pe,
        DiscountsBadge: () => xe,
        DotLoader: () => _e,
        Dropdown: () => je,
        Embed: () => Ce,
        ExpandingPlatformButton: () => Fe,
        FadeInContent: () => Ae,
        GameCard: () => n,
        GameSiteHeader: () => Ue,
        Gen9Button: () => C,
        Gen9CoreCarousel: () => Ze,
        Grid: () => we,
        HTMLElement: () => da,
        Hero: () => na,
        HookStore: () => M,
        ImageWithBadge: () => ua,
        LanguageSelector: () => ca,
        LayeredImage: () => ma,
        LoadingAnimation: () => en,
        MultiSourceImage: () => oe,
        NewswireBlocks: () => wa,
        NewswireCard: () => ha,
        NewswireList: () => _a,
        NewswireRelated: () => ja,
        NewswireTag: () => ba,
        OrderedList: () => Ta.Z,
        Paging: () => Ia,
        ParallaxCacheBuster: () => Va,
        ParallaxInnerLayer: () => za,
        ParallaxOuterLayer: () => Fa,
        ParallaxWrapper: () => $a,
        PromoModule: () => Aa,
        Rating: () => qa,
        ResponsiveFlexBox: () => Ya,
        ResponsiveFlexItem: () => Qa,
        ResponsiveGridBox: () => Ka,
        ResponsiveGridItem: () => et,
        ResponsiveImg: () => tt,
        ResponsiveSection: () => it,
        RockstarLogo: () => st,
        ScrollToTop: () => dt,
        ScrollTracker: () => rt,
        SearchBox: () => ct,
        Separator: () => fe,
        Skeleton: () => lt,
        SrcsetImage: () => pa,
        TextFit: () => be,
        ThumbsGallery: () => bt,
        TinaModuleFetchNRender: () => xt,
        TinaWrapper: () => yt,
        TrackList: () => ut,
        UnorderedList: () => le.Z,
        UserVote: () => jt,
        VideoCard: () => i,
        VideoCarousel: () => wt,
        VideoList: () => Ct,
        Wasted: () => Et,
        framer: () => d,
        useTinaModuleFetchByIds: () => ht,
        withSearchbarErrorBoundary: () => $t,
        withSimpleErrorBoundary: () => We
      });
      var n = {};
      t.r(n), t.d(n, {
        Art: () => Ge,
        Link: () => Oe
      });
      var i = {};
      t.r(i), t.d(i, {
        Art: () => Lt,
        Link: () => Vt
      });
      var s = {};
      t.r(s), t.d(s, {
        getVariant: () => Zt,
        transitions: () => Wt,
        variants: () => Yt
      });
      var d = {};
      t.r(d), t.d(d, {
        Animations: () => s,
        LiteMotion: () => Mt,
        withFadeIn: () => Ot,
        withFadeUp: () => qt
      });
      var r = t(6602),
        c = t(5770);
      const o = e => {
        let {
          children: a,
          to: t = "#",
          alt: n = "",
          autoBlank: i = !1,
          onClick: s = (() => {}),
          ...d
        } = e;
        const o = !/^(https?|mailto):/i.test(t);
        if (/^#/.test(t)) {
          const e = e => {
            e.preventDefault(), document?.querySelector(`[id='${t.replace("#","")}']`)?.scrollIntoView({
              behavior: "smooth",
              block: "center"
            }), s && s(e)
          };
          return (0, c.jsx)("a", {
            title: n,
            href: t,
            onClick: e,
            ...d,
            children: a
          })
        }
        if (o) return (0, c.jsx)(r.NavLink, {
          title: n,
          to: t,
          onClick: e => s(e),
          ...d,
          children: a
        });
        const l = Object.keys(d).filter((e => !["activeClassName", "key", "end"].includes(e))).reduce(((e, a) => ({
            ...e,
            [a]: d[a]
          })), {}),
          m = d?.target ?? (i ? "_blank" : "_self");
        return "function" == typeof l?.className && delete l.className, (0, c.jsx)("a", {
          href: t,
          ...l,
          title: n,
          onClick: e => s(e),
          target: m,
          children: a
        })
      };
      var l = t(927),
        m = t(7286),
        f = t.n(m),
        u = t(4859),
        g = t(9602);
      const p = {
          player: "c81dee7fd0870f89a9efacd688ca13e254dd",
          fixedToBottom: "c81dee7fd0870f89b33c2f80bdcdf6b9ee7c",
          tracksOpen: "c81dee7fd0870f89e75a25f36155727db838",
          tracks: "c81dee7fd0870f89d7c74a8be89aadc3595f",
          iconBurger: "c81dee7fd0870f89ce873a26dd48e144b892",
          trackList: "c81dee7fd0870f89d3e94370e32846eaa545",
          trackActive: "c81dee7fd0870f89e127fe45fc0eff968079",
          trackTitle: "c81dee7fd0870f89cad307864ca35378b800",
          trackIndex: "c81dee7fd0870f89c7a9a262bfd5429129b7",
          controls: "c81dee7fd0870f89d563fea634ae63fa8476",
          controlsCurrentBg: "c81dee7fd0870f89c253f93e74c8f7be3f3b",
          controlsCurrentBgVisible: "c81dee7fd0870f89c94e2081c3054fe7c50e",
          controlsTrack: "c81dee7fd0870f89ff4cbf83ca324ae4479d",
          controlsTrackTitle: "c81dee7fd0870f89c8851680749acc180bcf",
          controlsTrackAnimating: "c81dee7fd0870f89a649382afa34e44ae1dd",
          scrollText: "c81dee7fd0870f89d00987b7a4162fa2ddd8",
          controlsTrackArtist: "c81dee7fd0870f89b7d28143e0103bdf0bcd",
          controlsTrackBurger: "c81dee7fd0870f89e34af7e018cb0e180ba1",
          controlsButtons: "c81dee7fd0870f89bdabd26b4f7decc809eb",
          controlsScrub: "c81dee7fd0870f89a08e136f3c61066f8754",
          controlsPlayPause: "c81dee7fd0870f89fa0450d32d077757b403",
          controlsPlayPausePlaying: "c81dee7fd0870f89b1324feeb35bb85cd8fb",
          controlsNextTrack: "c81dee7fd0870f89f9f512d9ab46dcc43417",
          controlsPrevTrack: "c81dee7fd0870f89cb5de968d220dd269971",
          controlsScrubTrack: "c81dee7fd0870f89a63e1452e80cde998c96"
        },
        v = e => {
          let {
            src: a
          } = e;
          return (0, c.jsx)("div", {
            className: p.cover,
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
            audioRef: n,
            setPlaying: i,
            tracksOpen: s,
            setTracksOpen: d,
            trackData: r,
            setTrackId: o,
            trackBounds: m,
            setAutoNext: u
          } = e;
          const g = (0, l.useRef)(null),
            v = (0, l.useRef)(null),
            b = (0, l.useRef)(null),
            [k, h] = (0, l.useState)(null),
            [x, y] = (0, l.useState)(!1),
            _ = e => {
              const a = new Date(1e3 * e),
                t = a.getUTCMinutes(),
                n = a.getSeconds();
              return `${t.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}`
            };
          return (0, l.useEffect)((() => {
            if (!v.current || !b.current) return;
            const e = () => {
              b.current && v.current && h(b.current.clientWidth > v.current.clientWidth)
            };
            return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e)
          }), [b, v, a]), (0, l.useEffect)((() => {
            if (!g.current || !a?.duration) return;
            let e = null;
            const t = new(f())(g.current),
              i = e => {
                if (g.current) {
                  const t = g.current.clientWidth;
                  if (!g.current.contains(e.srcEvent.target)) return;
                  const i = Math.max(0, e.srcEvent.offsetX),
                    s = Number(i / t * a.duration);
                  n.currentTime = s
                }
              },
              s = () => {
                e ? n.pause() : n.play()
              },
              d = () => {
                e = n.paused, n.pause()
              };
            return t.on("panstart", d), t.on("panleft", i), t.on("panright", i), t.on("panend", s), t.on("tap", i), () => {
              t.off("panstart", d), t.off("panleft", i), t.off("panright", i), t.off("panend", s), t.off("tap", i)
            }
          }), [g.current, a.duration]), (0, l.useEffect)((() => {
            const e = Number(n?.currentTime);
            (t || !isNaN(e) && 0 !== e) && y(!0)
          }), [t, n?.currentTime]), (0, c.jsxs)("div", {
            className: p.controls,
            style: {
              "--track-color": r.color,
              "--track-mix-blend-mode": r.mix_blend_mode,
              "--current-pct": a.current / a.duration
            },
            children: [(0, c.jsx)("div", {
              className: [p.controlsCurrentBg, x ? p.controlsCurrentBgVisible : ""].join(" ")
            }), (0, c.jsx)("div", {
              className: p.controlsTrack,
              ref: v,
              children: (0, c.jsx)("span", {
                className: [p.controlsTrackTitle, k ? p.controlsTrackAnimating : ""].join(" "),
                ref: b,
                children: r.title
              })
            }), (0, c.jsxs)("div", {
              className: p.controlsButtons,
              children: [(0, c.jsx)("div", {
                className: p.controlsPrevTrack,
                onClick: () => {
                  m && (o(m[0]), u(!0), i(!0))
                }
              }), (0, c.jsx)("div", {
                className: [p.controlsPlayPause, t ? p.controlsPlayPausePlaying : ""].join(" "),
                onClick: () => {
                  i(!t)
                }
              }), (0, c.jsx)("div", {
                className: p.controlsNextTrack,
                onClick: () => {
                  m && (o(m[1]), u(!0), i(!0))
                }
              })]
            }), (0, c.jsx)("div", {
              active: s ? "" : null,
              className: p.controlsTrackBurger,
              children: (0, c.jsx)("div", {
                className: p.iconBurger,
                onClick: () => {
                  d(!s)
                }
              })
            }), (0, c.jsxs)("div", {
              className: p.controlsScrub,
              children: [(0, c.jsx)("span", {
                children: _(a.current)
              }), (0, c.jsx)("div", {
                className: p.controlsScrubTrack,
                ref: g
              }), (0, c.jsx)("span", {
                children: _(a.duration)
              })]
            })]
          })
        },
        k = e => {
          let {
            tracks: a,
            trackId: t,
            setTrackId: n,
            tracksOpen: i,
            setTracksOpen: s,
            setPlaying: d,
            setAutoNext: r
          } = e;
          return (0, c.jsxs)("div", {
            className: p.tracks,
            children: [(0, c.jsx)("h4", {
              children: "Tracks"
            }), (0, c.jsx)("div", {
              className: p.trackBurger,
              onClick: () => {
                s(!i)
              }
            }), (0, c.jsx)("div", {
              className: p.trackList,
              children: a.map(((e, a) => (0, c.jsxs)("a", {
                style: {
                  "--highlight-color": e.color
                },
                className: t === e.id ? p.trackActive : "",
                onClick: () => {
                  n(e.id), d(!0), r(!0)
                },
                children: [(0, c.jsx)("span", {
                  className: p.trackIndex,
                  children: String(a + 1).padStart(2, "0")
                }), (0, c.jsx)("span", {
                  className: p.trackTitle,
                  children: e.title
                }), (0, c.jsx)("span", {
                  className: p.trackTime,
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
            data: n
          } = (0, u.useQuery)(g.GetAudioAlbum, {
            variables: {
              id: a
            }
          }), [i, s] = (0, l.useState)(), [d, r] = (0, l.useState)(), [o, m] = (0, l.useState)(), [f, h] = (0, l.useState)(!1), [x, y] = (0, l.useState)(!1), [_, N] = (0, l.useState)(new HTMLAudioElement), [j, S] = (0, l.useState)({
            current: 0,
            duration: 0
          }), [w, T] = (0, l.useState)(!0);
          return (0, l.useEffect)((() => {
            const e = "audio",
              a = a => {
                a?.data?.rockstarAudioPlayerPlayTrackId && (r(a.data.rockstarAudioPlayerPlayTrackId), T(!1), y(!0)), x && a?.data?.attentionBlurredElsewhere && a?.data?.from !== e && y(!1)
              };
            return x && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: e
            }), window.addEventListener("message", a, !1), () => window.removeEventListener("message", a, !1)
          }), [x]), (0, l.useEffect)((() => {
            if (!_) return;
            const e = () => {
                isNaN(_.duration) || S({
                  duration: _?.duration ?? 0,
                  current: _?.currentTime ?? 0
                })
              },
              a = () => {
                w && i && r(i[1])
              };
            return _.addEventListener("loadedmetadata", e), _.addEventListener("timeupdate", e), _.addEventListener("ended", a), () => {
              _.removeEventListener("loadedmetadata", e), _.removeEventListener("timeupdate", e), _.removeEventListener("ended", a)
            }
          }), [_, i, w]), (0, l.useEffect)((() => {
            x && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: "audio"
            })
          }), [x]), (0, l.useEffect)((() => {
            _ && (x ? _.play() : _.pause(), h(!1))
          }), [x, _, o?.id]), (0, l.useEffect)((() => {
            if (!d) return;
            const {
              tracks: e
            } = n.audioAlbum, a = n.audioAlbum.tracks.findIndex((e => e.id === d));
            s([e[a - 1]?.id ?? e[e.length - 1].id, e[a + 1]?.id ?? e[0].id]), m(e[a])
          }), [d]), (0, l.useEffect)((() => {
            n && r(n.audioAlbum.tracks[0].id)
          }), [n]), o ? (0, c.jsxs)("div", {
            className: [p.player, p[t], f ? p.tracksOpen : ""].join(" "),
            children: [(0, c.jsx)("audio", {
              ref: e => {
                N(e)
              },
              src: o.mp3_src
            }), (0, c.jsx)(k, {
              tracks: n.audioAlbum.tracks,
              setTrackId: r,
              trackId: d,
              tracksOpen: f,
              setTracksOpen: h,
              setPlaying: y,
              setAutoNext: T
            }), (0, c.jsx)(v, {
              src: o.cover_src
            }), (0, c.jsx)(b, {
              setTrackId: r,
              trackBounds: i,
              tracksOpen: f,
              setTracksOpen: h,
              playing: x,
              setPlaying: y,
              timing: j,
              trackData: o,
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
          return (0, c.jsx)("div", {
            className: "c81dee7fd0870f89bac9ce215a30adc97fa2",
            style: t,
            children: a
          })
        },
        y = e => {
          let {
            brands: a = []
          } = e;
          return a.length ? (0, c.jsx)("div", {
            className: "c81dee7fd0870f89dda1d2a07edde4eed327",
            children: a.map(((e, a) => {
              let {
                brand: t
              } = e;
              return (0, c.jsx)("div", {
                className: "c81dee7fd0870f89cfff18405900921e505b",
                "data-brand": t
              }, a)
            }))
          }) : null
        },
        _ = {
          button: "c81dee7fd0870f89f2f796c68d7aa20605b5",
          secondary: "c81dee7fd0870f89e8cee39d13ef101955c9"
        },
        N = e => {
          let {
            className: a = "",
            children: t,
            context: n = "",
            to: i,
            onClick: s,
            ...d
          } = e;
          const r = [_.button, _[n], a].join(" ");
          return i ? (0, c.jsx)(o, {
            ...d,
            to: i,
            className: r,
            onClick: s ? () => s() : () => {},
            children: t
          }) : (0, c.jsx)("button", {
            ...d,
            type: "button",
            className: r,
            onClick: s ? () => s() : () => {},
            children: t
          })
        };
      var j = t(9542);
      const S = {
          plusButton: "c81dee7fd0870f89aaee61f04d2d9143075b",
          small: "c81dee7fd0870f89fd4d696b5878fef3440e",
          btnText: "c81dee7fd0870f89bee352a145ea42995ccb",
          btnTexticon: "c81dee7fd0870f89e08b91d4c8af486a20e5",
          whiteBtn: "c81dee7fd0870f89f32ae245931769bf4f55",
          blackBtn: "c81dee7fd0870f89a19d0823134f079ab324",
          transparentBtn: "c81dee7fd0870f89f301a23e9c383f039f76",
          iconBtn: "c81dee7fd0870f89a1a86c3fe6e2976607d0",
          link: "c81dee7fd0870f89baca8995c81929d82d6b",
          xboxone: "c81dee7fd0870f89c03e2fcd6af152915adc",
          xboxseriesxs: "c81dee7fd0870f89e9e1c94bf6c22b7a8f78",
          ps4: "c81dee7fd0870f89b621385ee067ecf61103",
          ps5: "c81dee7fd0870f89a792db7d5dc5b891d82e",
          pc: "c81dee7fd0870f89b61a9dd47bf807ba0925"
        },
        w = e => {
          let {
            children: a,
            className: t,
            onClick: n,
            style: i
          } = e;
          return (0, c.jsx)("button", {
            className: t,
            onClick: n ? () => n() : () => {},
            style: i,
            type: "button",
            children: a
          })
        },
        T = e => {
          let {
            children: a,
            className: t,
            onClick: n,
            style: i,
            to: s
          } = e;
          return (0, c.jsx)(r.NavLink, {
            className: t,
            onClick: n ? () => n() : () => {},
            style: i,
            to: s,
            children: a
          })
        },
        C = e => {
          let {
            btnColor: a = "#fff",
            className: t = "",
            consoleBtn: n,
            icon: i = "",
            img: s,
            labelColor: d = "#000",
            onClick: r,
            secondText: o,
            size: l,
            text: m,
            to: f,
            type: u = ""
          } = e;
          const g = [S.plusButton, S[u] ?? "", S[l] ?? "", S[n] ?? "", t].join(" "),
            p = {
              "--hvr-color": a ?? d,
              "--hvr-bg-color": d ?? a,
              "--hvr-border-color": a ?? d
            },
            v = (0, c.jsxs)(c.Fragment, {
              children: [s ? (0, c.jsx)("img", {
                src: s,
                alt: ""
              }) : "", (0, c.jsxs)("div", {
                className: S.btnText,
                icon: i,
                children: [m, o ? (0, c.jsx)("span", {
                  children: o
                }) : ""]
              })]
            });
          if (f) {
            if (f.startsWith("http")) {
              const e = f.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, c.jsx)("span", {
                onClick: r ? () => r() : () => {},
                onKeyDown: r,
                className: g,
                role: "button",
                tabIndex: 0,
                children: (0, c.jsx)("a", {
                  href: f,
                  target: e,
                  children: v
                })
              })
            }
            return (0, c.jsx)(T, {
              className: g,
              onClick: r ? () => r() : () => {},
              style: p,
              to: f,
              children: v
            })
          }
          return (0, c.jsx)(w, {
            className: g,
            onClick: r ? () => r() : () => {},
            style: p,
            children: v
          })
        },
        E = e => {
          let {
            buttons: a = [],
            className: t
          } = e;
          return a.length ? (0, c.jsx)("div", {
            className: (0, j.classList)("c81dee7fd0870f89f7e394d24516cf4ef277", t),
            children: a.map(((e, a) => {
              let {
                icon: t,
                title: n,
                to: i
              } = e;
              return n ? (0, c.jsx)(C, {
                icon: t,
                text: n,
                to: i
              }, a) : ""
            }))
          }) : null
        };
      var I = t(2895),
        L = t(6240);
      const V = {
          deprecatedCarousel: "c81dee7fd0870f89d7c06a375fc33ce5ed1c",
          "swiper-scrollbar-disabled": "c81dee7fd0870f89c62806930d52b31261ad",
          "swiper-horizontal": "c81dee7fd0870f89b62676614d97644bc5a6",
          "swiper-vertical": "c81dee7fd0870f89cf93eb3498e93416e68c",
          renderedWithChildren: "c81dee7fd0870f89aecba52f1282cec3e13c",
          panorama: "c81dee7fd0870f89ef3aeec8f1f636f01a53",
          img: "c81dee7fd0870f89fd038cafa8a7b4ccb1f2",
          hideMobile: "c81dee7fd0870f89c19f263b217c14e3933a",
          hideLarge: "c81dee7fd0870f89f3866b01a24a350d5f6c",
          imageAreaBg: "c81dee7fd0870f89ad7607284e7610b66fb2",
          infinite_false: "c81dee7fd0870f89b6601cba2bde1ff7c469",
          track: "c81dee7fd0870f89e84cec4e15851e26d1f2",
          perico: "c81dee7fd0870f89f7423457a949e09d5eb7",
          dotsSlide: "c81dee7fd0870f89cc58183141c005ea1d9b",
          siblings: "c81dee7fd0870f89e5879faad465f579025a",
          active: "c81dee7fd0870f89d6c7eec791f446b1ae58"
        },
        B = e => {
          let {
            item: a
          } = e;
          return (0, c.jsxs)("div", {
            children: [(0, c.jsx)(ua, {
              image: a?.image,
              badge: a?.badge ?? a?.image?.badge,
              badgeType: "badge3",
              role: a?.role ?? a?.image?.role,
              splitter: a?.splitter ?? a?.image?.splitter,
              type: a?.type,
              ariaLabel: a?.image?.ariaLabel ?? a.description,
              style: a?.style,
              className: (0, j.classList)(V.img, a?.className)
            }), (a?.title || a?.description) && (0, c.jsx)(pe, {
              item: a
            })]
          })
        },
        $ = e => {
          let {
            current: a,
            total: t
          } = e;
          return (0, c.jsx)("div", {
            className: "swiper-scrollbar",
            style: {
              "--current-slide": a,
              "--total-slides": t
            },
            children: (0, c.jsx)("div", {
              className: "swiper-scrollbar-drag"
            })
          })
        },
        z = e => {
          let {
            children: a,
            items: t = [],
            style: n = {},
            noInfiniteScroll: i = !1,
            className: s = "",
            renderTemplate: d = "standard",
            text: r,
            customSpaceBetween: o = null,
            centerSlides: m = !0,
            centeredSlidesBounds: f = !1
          } = e;
          const [u, g] = (0, l.useState)(0), p = (0, l.useMemo)((() => a && Array.isArray(a) ? a.map((() => (0, L.Z)())) : null), [a]);
          if (!(t && 0 !== t?.length || a)) return null;
          const v = {
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
          return (0, c.jsxs)("div", {
            className: (0, j.classList)(V.deprecatedCarousel, V[d], V[`infinite_${!i}`], a ? V.renderedWithChildren : "", s),
            style: n,
            children: [(0, c.jsxs)(I.tq, {
              loop: !i,
              grabCursor: !0,
              centeredSlides: m,
              centerInsufficientSlides: m,
              slidesPerView: "auto",
              speed: 700,
              breakpoints: v,
              onActiveIndexChange: e => g(e?.realIndex ?? 0),
              centeredSlidesBounds: f,
              children: [(0, c.jsx)("div", {
                className: V.trackWrapper,
                children: (0, c.jsxs)("div", {
                  className: V.track,
                  children: [t?.map((e => (0, c.jsx)(I.o5, {
                    children: (0, c.jsx)(B, {
                      item: e
                    })
                  }, e))), a && a?.map(((e, a) => e && (0, c.jsx)(I.o5, {
                    children: e
                  }, p && p[a])))]
                })
              }), (0, c.jsx)($, {
                current: u,
                total: a ? a.length : t.length
              })]
            }), (r?.title || r?.description) && (0, c.jsx)(pe, {
              item: r
            })]
          })
        };
      var D = t(9929),
        F = t(6711);
      const M = (0, t(99).Hu)(),
        A = e => {
          let {
            condition: a = null,
            children: t
          } = e;
          const [n, i] = (0, l.useState)(!1), s = (e => {
            const [a] = (0, r.useSearchParams)(), [t, n] = (0, l.useState)(null), i = (0, F.useRockstarUser)(), {
              loggedIn: s
            } = i, {
              currentCharId: d
            } = (0, F.useRockstarUserState)(), c = function(e) {
              let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "gtao";
              return (0, l.useMemo)((() => {
                const n = e?.data?.characters?.[t];
                return "1" === (n?.[a]?.stats?.overview?.hasGtaPlus?.value ?? "0")
              }), [e, t, a])
            }(i, d);
            return (0, l.useEffect)((() => {
              n(null);
              const i = "true" === a.get("conditionPreview");
              if (!(!e?.length > 0)) return M.applyFilters("preview_conditions", e), e.forEach((e => {
                const {
                  value: d
                } = e;
                if (i) return "true" === a.get(d) ? (n(!0), !0) : (n(!1), !1);
                if (!1 === t) return !1;
                switch (d) {
                  case "user:is:loggedIn":
                    n(!0 === s);
                    break;
                  case "user:not:loggedIn":
                    n(!1 === s);
                    break;
                  case "user:is:gtaPlus":
                    n(!0 === c);
                    break;
                  case "user:not:gtaPlus":
                    n(!1 === c);
                    break;
                  default:
                    n(!1)
                }
                return null
              })), () => {}
            }), [a, e, c, i, s]), t
          })(a);
          return (0, l.useEffect)((() => {
            i(s)
          }), [s]), (0, l.useMemo)((() => n ? t : null), [n])
        },
        P = (0, D.withTranslations)((e => {
          let {
            children: a
          } = e;
          return l.Children.map(l.Children.toArray(a), (e => (0, c.jsx)(A, {
            ...e?.props
          })))
        }));
      var G = t(6809),
        O = t(2632);
      const H = e => {
          let {
            className: a
          } = e;
          return (0, c.jsxs)("svg", {
            className: a,
            width: "16",
            height: "17",
            viewBox: "0 0 16 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, c.jsx)("path", {
              d: "M3.33203 8.5H12.6654",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, c.jsx)("path", {
              d: "M8 3.83331L12.6667 8.49998L8 13.1666",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })]
          })
        },
        U = {
          calloutContainer: "c81dee7fd0870f89e3914a61fd9aa859a9d0",
          calloutSection: "c81dee7fd0870f89e49bc9f67aeaa386f866",
          calloutHeaders: "c81dee7fd0870f89b7127a98bd0551a9025e",
          calloutHeaderMargins: "c81dee7fd0870f89f098d36c5c01b67c18b9",
          calloutHeader: "c81dee7fd0870f89e4d1343db36be54e5ec7",
          calloutSubheader: "c81dee7fd0870f89b7805dbb540b3ce22bfc",
          calloutVoteForm: "c81dee7fd0870f89cf3e98f7443e4d1c0bc6",
          voteButton: "c81dee7fd0870f89d1451ebff49a814a21ff",
          upvote: "c81dee7fd0870f89faefbe6638749682ba0a",
          downvote: "c81dee7fd0870f89fd1544b7df5264adbc45",
          active: "c81dee7fd0870f89f9a08897ca235c8a14b9",
          calloutButton: "c81dee7fd0870f89f5362716f60e13446a8e",
          calloutLink: "c81dee7fd0870f89e22ad31b0334db688e53",
          calloutLinkIcon: "c81dee7fd0870f89a0b361cb8442e24823f8",
          actionBlock: "c81dee7fd0870f89da64af383807e9bbe536",
          actionFooter: "c81dee7fd0870f89e6ddb362e46376185e51"
        },
        R = e => {
          let {
            foreign_id: a,
            foreign_type: t
          } = e;
          const {
            track: n
          } = (0, F.useGtmTrack)(), {
            refetch: i
          } = (0, u.useQuery)(O.UserGetVote, {
            skip: !0
          }), [s] = (0, u.useMutation)(O.UserCastVote), [d, r] = (0, l.useState)(null), o = (0, l.useCallback)((e => {
            (async () => {
              if (e === d && null !== d) r(null);
              else {
                r(e), n({
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
                await s({
                  variables: i
                })
              }
            })()
          }), [a, t, d]);
          return (0, l.useEffect)((() => {
            a && t && (async () => {
              const e = await i({
                foreignId: a,
                foreignType: t
              });
              r(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [a, t]), (0, c.jsxs)("div", {
            className: U.calloutVoteForm,
            children: [(0, c.jsx)("button", {
              "aria-label": "upvote",
              className: [U.upvote, U.voteButton, d ? U.active : ""].join(" "),
              name: "upvote",
              onClick: () => o(!0),
              type: "button"
            }), (0, c.jsx)("button", {
              "aria-label": "downvote",
              className: [U.downvote, U.voteButton, !1 === d ? U.active : ""].join(" "),
              name: "downvote",
              onClick: () => o(!1),
              type: "button"
            })]
          })
        },
        q = e => {
          let {
            action_text: a,
            link: t,
            trackingData: n
          } = e;
          const {
            track: i
          } = (0, F.useGtmTrack)();
          return (0, c.jsx)("a", {
            href: t,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, c.jsxs)("button", {
              className: U.calloutLink,
              type: "button",
              onClick: n ? () => i({
                ...n
              }) : () => {},
              children: [a, (0, c.jsx)(H, {
                className: U.calloutLinkIcon
              })]
            })
          })
        },
        W = e => {
          let {
            helperText: a,
            linkText: t,
            link: n,
            trackingData: i
          } = e;
          const {
            track: s
          } = (0, F.useGtmTrack)();
          return (0, c.jsxs)("div", {
            className: U.actionFooter,
            children: [a, t && " ", t && (0, c.jsx)("a", {
              href: n ?? "",
              onClick: () => s({
                ...i
              }),
              children: t
            })]
          })
        },
        Y = (0, D.withTranslations)((e => {
          let {
            header: a,
            subheader: t,
            type: n,
            action_text: i,
            link: s,
            foreign_id: d = document.location.pathname,
            foreign_type: r = "url",
            className: o = "",
            actionFooterHelperText: m,
            actionFooterLinkText: f,
            actionFooterLink: u,
            trackingData: g = {},
            actionFooterLinkTrackingData: p = {},
            t: v
          } = e;
          const {
            loggedIn: b
          } = (0, F.useRockstarUser)(), {
            track: k
          } = (0, F.useGtmTrack)(), h = `${document.location.origin}/auth/sc-auth-login?returnUrl=${window.location.pathname}`, {
            ref: x,
            inView: y
          } = (0, G.YD)({
            threshold: .6
          }), [_, j] = (0, l.useState)(!1);
          let S;
          if ((0, l.useEffect)((() => {
              y && !_ && (k({
                event: "page_section_impression",
                event_action: "impression",
                event_category: "page_section",
                event_label: "callout section",
                element_placement: "callout section"
              }), j(!0))
            }), [y]), !a && !t) return null;
          switch (n) {
            case "vote":
              if (!b) {
                S = (0, c.jsx)(N, {
                  to: h,
                  className: U.calloutButton,
                  onClick: g ? () => k({
                    ...g
                  }) : () => {},
                  children: "Log In"
                });
                break
              }
              S = (0, c.jsx)(R, {
                foreign_id: d,
                foreign_type: r
              });
              break;
            case "button":
              i && s && (S = (0, c.jsx)(N, {
                to: s,
                className: U.calloutButton,
                onClick: g ? () => k({
                  ...g
                }) : () => {},
                children: i
              }));
              break;
            case "link":
              i && s && (S = (0, c.jsx)(q, {
                action_text: i,
                link: s,
                trackingData: g
              }));
              break;
            default:
              S = null
          }
          return (0, c.jsx)("div", {
            className: `${U.calloutContainer} ${o||""}`,
            ref: x,
            children: (0, c.jsxs)("div", {
              className: U.calloutSection,
              children: [(0, c.jsxs)("div", {
                className: [U.calloutHeaders, S ? U.calloutHeaderMargins : ""].join(" "),
                children: [a && (0, c.jsx)("h1", {
                  className: U.calloutHeader,
                  children: v(a)
                }), t && (0, c.jsx)("h2", {
                  className: U.calloutSubheader,
                  children: v(t)
                })]
              }), (0, c.jsxs)("div", {
                className: U.actionBlock,
                children: [S, m && (0, c.jsx)(W, {
                  helperText: m,
                  linkText: f,
                  link: u,
                  trackingData: p
                })]
              })]
            })
          })
        }));
      var Z = t(9133),
        Q = t(8447),
        X = t.n(Q);
      const K = e => {
          let {
            isMulti: a,
            allowSelectAll: t,
            label: n,
            miscProps: i
          } = e;
          const [s, d] = (0, l.useState)(""), r = (0, l.useMemo)((() => X()().getData()), []);
          return (0, c.jsx)(Z.ZP, {
            unstyled: !0,
            value: s,
            isMulti: a,
            allowSelectAll: t,
            options: r,
            placeholder: n,
            onChange: e => {
              return a = e?.target?.value, void d(a);
              var a
            },
            classNamePrefix: "country-select",
            ...i
          })
        },
        J = e => {
          let {
            cookieName: a,
            cookieValue: t,
            trueComponent: n,
            falseComponent: i
          } = e;
          const s = (e => {
              const a = document.cookie.split("; "),
                t = `${e}=`,
                n = a.find((e => e.startsWith(t)));
              return n?.substring(t.length, n.length)
            })(a),
            d = new URLSearchParams(window.location.search).get(a);
          return d && ((e, a) => {
            e && a && (document.cookie = `${e}=${a}; domain=${(()=>{const e=window.location.hostname.split(".");return e.slice(e.length-2).join(".")})()}; path=/;`)
          })(a, d), s === t || d === t ? n : i
        },
        ee = {
          ps: "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/f440137b017e0d8346de.svg",
          ps3: "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/c362395c2a7ba52d8e93.svg",
          ps4: "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/399e4fadd28201f041fe.svg",
          ps5: "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/6c6092979b344bb70ea6.svg",
          switch: "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/fc5864f34c72e5763bea.svg",
          xbox: "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/96b3858c446374dbe3a1.svg",
          xboxone: "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/3852a2c6a70d09be710a.svg",
          xboxseriesxs: "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/ef962ee0eb1746b9363f.svg",
          xbox360: "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/3ab3afe4e696bde1c015.svg",
          pc: "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/af7a4b3f215a9ffd7074.svg",
          play: "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/3ffdb1e004aa0d8bde9d.svg",
          applestore: "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/36f080306901cc2d0b77.svg",
          googleplay: "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/f8d68313a152407ac2cb.svg",
          questionMark: "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/e17029ee821cf4c19a4b.svg",
          default: ""
        },
        ae = {
          cta: "c81dee7fd0870f89ac33f7c504f5254f8e80",
          xbox: "c81dee7fd0870f89e4d53f93af9a551a8f1e",
          xboxone: "c81dee7fd0870f89ac1ed06ce72d8779fe3c",
          xboxseriesxs: "c81dee7fd0870f89e486c6915fdad3d0d58b",
          ps: "c81dee7fd0870f89c5e2b24d089be9c9e698",
          ps4: "c81dee7fd0870f89b92c4ed75a97418d3463",
          ps5: "c81dee7fd0870f89fd9b33cbebecbffa019c",
          pc: "c81dee7fd0870f89ec25b4170dd37471e0b3",
          switch: "c81dee7fd0870f89d8244eabc67dc26103c8",
          googleplay: "c81dee7fd0870f89aa9a86ce6b3178793b58",
          platformIcon: "c81dee7fd0870f89a73cc112e668f07114e8",
          applestore: "c81dee7fd0870f89e75a9a7d271fa20297bb",
          btnContent: "c81dee7fd0870f89d6baee65fb8e05c8d1e8",
          icon: "c81dee7fd0870f89f15eda8c4ecb442d2800",
          "icon-left": "c81dee7fd0870f89b228820853178a620eba",
          "icon-right": "c81dee7fd0870f89a96b7472082442d0edfb",
          disabled: "c81dee7fd0870f89f9b4e8606cd7cebfd4de"
        },
        te = e => {
          let {
            platform: a = ""
          } = e;
          const t = a ? ee[a] || null : null,
            n = t ? (0, c.jsx)("img", {
              className: ae.platformIcon,
              src: t,
              alt: "Platform Icon"
            }) : null;
          return (0, c.jsx)("span", {
            className: [ae.btnContent, ae.platformButton].join(" "),
            children: n
          })
        },
        ne = e => {
          let {
            children: a,
            href: t,
            style: n,
            content: i,
            variant: s = null,
            icon: d,
            iconPosition: r = "none",
            iconStyle: o,
            badge: m,
            badgeStyle: f,
            platformItem: u,
            gtm: g = {},
            disabled: p
          } = e;
          const {
            track: v
          } = (0, F.useGtmTrack)(), b = (0, D.useDataLayer)(), k = i ?? a, h = `Redirect to ${t}`, x = (0, l.useCallback)((() => {
            if (!p) {
              const e = window.location.hostname,
                a = new URL(t).hostname;
              v({
                event: "cta_other",
                ...b,
                ...g,
                link_url: t ?? void 0,
                text: k ?? void 0
              }), e === a ? window.location.href = t : window.open(t, "_blank")
            }
          }), [g, t, b]), y = () => d ? (0, c.jsx)("span", {
            className: [ae.icon, `icon-${r}`].join(" "),
            style: o,
            children: (0, c.jsx)("img", {
              className: ae.btnIcon,
              src: d,
              alt: "Button Icon"
            })
          }) : null;
          return (0, c.jsx)("button", {
            className: [ae.cta, "platform" === s && u ? ae[u] : "", p ? ae.disabled : ""].join(" "),
            style: n,
            "data-variant": s,
            type: "button",
            onClick: x,
            disabled: p,
            "aria-label": h,
            children: "platform" === s && u ? (0, c.jsx)(te, {
              platform: u
            }) : (0, c.jsxs)("div", {
              className: ae.btnContent,
              children: ["left" === r && y(), (0, c.jsx)("span", {
                children: k
              }), "right" === r && y(), m ? (0, c.jsx)("span", {
                className: ae.badge,
                style: f,
                children: m
              }) : null]
            })
          })
        };
      var ie = t(559);
      const se = "c81dee7fd0870f89bf242a69d5229fde1671",
        de = "c81dee7fd0870f89e5458c4a3f0cb5663be4",
        re = "c81dee7fd0870f89c46ce1b6b8ea1aeb98cd",
        ce = e => {
          let {
            alt: a,
            className: n,
            src: i,
            style: s
          } = e;
          const [d, r] = (0, D.usePreloadImg)(i);
          let o = i;
          !1 === d && (n === re && (o = t(8280)), o = t(8933));
          const l = {
            "--aspect-ratio": r.width / r.height,
            ...s
          };
          return (0, c.jsx)("img", {
            src: o,
            className: n ?? "",
            alt: a,
            style: l
          })
        },
        oe = e => {
          let {
            className: a,
            style: n = {},
            image: i = {},
            imageStyle: s = {}
          } = e, {
            alt: d,
            src: r
          } = (0, ie.useImageParser)(i);
          return r.desktop || r.mobile || (d = "placeholder", r = {
            mobile: t(8280),
            desktop: t(8933)
          }), (0, c.jsx)("div", {
            className: i.frame ? `${i.frame} ${se}` : se,
            style: n,
            children: r?.desktop && r?.mobile ? (0, c.jsxs)(c.Fragment, {
              children: [(0, c.jsx)(ce, {
                style: {
                  ...s,
                  ...i?.style
                },
                src: r.desktop,
                alt: d,
                className: a ? `${a} ${de}` : de
              }), (0, c.jsx)(ce, {
                style: {
                  ...s,
                  ...i?.style
                },
                src: r.mobile,
                alt: d,
                className: a ? `${a} ${re}` : re
              })]
            }) : (0, c.jsx)(ce, {
              style: {
                ...s,
                ...i?.style
              },
              src: r?.desktop ?? r?.mobile,
              alt: d,
              className: a
            })
          })
        };
      var le = t(6475);
      const me = {
          hr: "c81dee7fd0870f89ae0c477489451041502f",
          redLine: "c81dee7fd0870f89e35f43016ae1f2345302",
          gtao: "c81dee7fd0870f89d04040a5527314201aa6"
        },
        fe = e => {
          let {
            style: a,
            className: t = "",
            type: n
          } = e;
          return (0, c.jsx)("div", {
            style: a,
            className: [me.hr, me[n], t].join(" ")
          })
        },
        ue = "c81dee7fd0870f89bb5b7b532ca0340c3435",
        ge = e => {
          let {
            to: a,
            children: t
          } = e;
          return a ? (0, c.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noreferrer",
            children: t
          }) : t
        },
        pe = e => {
          let {
            item: a,
            className: t = ""
          } = e;
          return (0, c.jsxs)("div", {
            className: (0, j.classList)("c81dee7fd0870f89fd88ba706e803a317850", t),
            children: [a.title && (0, c.jsx)(ge, {
              to: a?.href ?? a?.to,
              children: (0, c.jsx)("h3", {
                children: a.title
              })
            }), Array.isArray(a?.description?.content) ? a.description.content?.map(((e, a) => e?.unorderedList ? (0, c.jsx)(le.Z, {
              columns: e.unorderedList.columns ?? null,
              style: {
                "--unordered-list-padding": "var(--grid-gap-static-sm)",
                "--unordered-list-margin-bottom": ".5rem"
              },
              noImg: !0,
              list: e.unorderedList.list
            }, a) : e?.image ? (0, c.jsx)(oe, {
              image: e.image,
              className: e?.className,
              ariaLabel: e.image?.ariaLabel
            }, a) : e?.separator ? (0, c.jsx)("div", {
              style: {
                margin: `${e.separator.spacing} 0`
              },
              children: (0, c.jsx)(fe, {})
            }, a) : (0, c.jsx)("p", {
              children: (0, c.jsx)("span", {
                className: ue,
                dangerouslySetInnerHTML: {
                  __html: e
                }
              })
            }, a))) : (0, c.jsx)("span", {
              className: ue,
              dangerouslySetInnerHTML: {
                __html: a.description
              }
            })]
          })
        };
      var ve = t(2625);
      const be = e => {
          let {
            children: a,
            ...t
          } = e;
          const [n, i] = (0, l.useState)(!1);
          return (0, c.jsx)(ve.iF, {
            ...t,
            onReady: () => {
              document.fonts.ready.then((() => {
                i(!0)
              }))
            },
            children: a
          })
        },
        ke = {
          badge: "c81dee7fd0870f89c5c56c3e04a1851fa937",
          badgeSizeUpdate: "c81dee7fd0870f89a316681347778ad4f119",
          badge2: "c81dee7fd0870f89bce164d72f6012df909f",
          badge3: "c81dee7fd0870f89a0cac400610dc1c1e2b1"
        },
        he = e => {
          let {
            wrapper: a,
            children: t,
            role: n,
            splitter: i
          } = e;
          return i || n ? a(t) : t
        },
        xe = e => {
          let {
            badge: a,
            badgeType: n,
            role: i,
            splitter: s
          } = e;
          const d = [];
          s ? a.split(s).map(((e, a) => d.push(e))) : d.push(a);
          let r = 100;
          return 2 == d.length && d[1].length < 4 && "off" !== d[1].toLowerCase() && 45, (0, c.jsxs)(he, {
            splitter: s,
            role: i,
            wrapper: e => (0, c.jsx)("div", {
              className: `${ke.badge} ${n?ke[n]:""} `,
              children: e
            }),
            children: [(0, c.jsx)(c.Fragment, {
              children: i && (0, c.jsx)(oe, {
                image: {
                  alt: i,
                  desktop: t(9065)(`./${i}.png`)
                }
              })
            }), (0, c.jsx)(be, {
              className: `${s||i?"":ke.badge} ${n?ke[n]:""}`,
              min: 8,
              max: 1e3,
              mode: s || i ? "single" : "multi",
              children: d[0]
            }), (0, c.jsx)(c.Fragment, {
              children: d.shift() && s && d.length >= 1 && (0, c.jsx)(be, {
                min: 8,
                max: 1e3,
                mode: "single",
                forceSingleModeWidth: !0,
                children: d.join(" ")
              })
            })]
          }, "badge-wrapper")
        },
        ye = "c81dee7fd0870f89d6ddb0500c624a198b6f",
        _e = e => {
          let {
            color: a
          } = e;
          return (0, c.jsxs)("div", {
            className: "c81dee7fd0870f89b82b84d749da9c3259ad",
            style: {
              "--loader-color": a
            },
            children: [(0, c.jsx)("div", {
              className: ye
            }), (0, c.jsx)("div", {
              className: ye
            }), (0, c.jsx)("div", {
              className: ye
            })]
          })
        },
        Ne = {
          dropdownWrapper: "c81dee7fd0870f89fadfba853d9b4c486799",
          items: "c81dee7fd0870f89cade19d95e11809396b0",
          open: "c81dee7fd0870f89ae54547249588b7983c8",
          opener: "c81dee7fd0870f89b845334a62d364009081",
          secondary: "c81dee7fd0870f89a66203f2848fe6ca7929"
        },
        je = e => {
          let {
            children: a,
            className: t,
            title: n
          } = e;
          const [i, s] = (0, l.useState)(!1);
          return (0, c.jsxs)("div", {
            className: [Ne.dropdownWrapper, i ? Ne.open : "", void 0 !== t ? t : ""].join(" "),
            children: [(0, c.jsx)("button", {
              className: Ne.opener,
              onClick: () => s(!i),
              children: n
            }), (0, c.jsx)("div", {
              className: Ne.items,
              onClick: () => s(!1),
              children: a
            })]
          })
        };
      var Se = t(2324);
      const we = e => {
          let {
            children: a,
            context: t = null,
            game: n,
            image: i = {},
            style: s = {},
            template: d = null,
            theme: r = null,
            reversedOnMobile: o = !1,
            className: l = ""
          } = e;
          const m = (0, ie.useImageParser)(i),
            f = {
              ...s
            };
          if (m?.src?.desktop) {
            const e = "var(--grid-background-repeat, no-repeat)",
              a = "var(--grid-background-position, center)/var(--grid-background-size, cover)";
            f.background = `url(${m?.src?.desktop}) ${e} ${a}`
          }
          return (0, c.jsx)("div", {
            className: (0, Se.classList)("c81dee7fd0870f89c697c87f7c313df51629", o ? "c81dee7fd0870f89ef02be9b8858c9180702" : "", l),
            "data-game": "community" === d ? null : n,
            style: (0, D.safeStyles)(f),
            "data-context": t,
            "data-template": d,
            "data-theme": r,
            children: a
          })
        },
        Te = e => {
          let {
            caption: a,
            children: t,
            ...n
          } = e;
          return a ? (0, c.jsxs)("figure", {
            ...n,
            children: [t, (0, c.jsx)("figcaption", {
              dangerouslySetInnerHTML: {
                __html: a
              }
            })]
          }) : t
        },
        Ce = e => {
          let {
            componentTitle: a,
            type: t,
            items: n
          } = e;
          return n?.length ? (0, c.jsx)("div", {
            className: "c81dee7fd0870f89e690331a56059fbc1bea",
            type: t,
            children: (0, c.jsxs)(we, {
              children: [a && (0, c.jsx)("h3", {
                children: a
              }), (0, c.jsx)(we, {
                className: "c81dee7fd0870f89e015a00e3540621e8966",
                children: n.map(((e, a) => {
                  return e?.embed ? (0, c.jsx)(Te, {
                    caption: e?.caption,
                    children: (0, c.jsx)("div", {
                      className: "c81dee7fd0870f89a4fc1364a24525bdd78b",
                      dangerouslySetInnerHTML: {
                        __html: (t = e.embed, t.replace(/&gt;/g, ">").replace(/&lt;/g, "<"))
                      }
                    }, `${e?.key??a}_div`)
                  }, e?.key ?? a) : e?.text ? (0, c.jsx)("p", {
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
      const Ie = {
          type: "spring",
          stiffness: 650,
          damping: 45
        },
        Le = {
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
            transition: Le
          }
        },
        Be = {
          open: {
            opacity: 1,
            display: "grid",
            height: "auto",
            transition: {
              opacity: Le,
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
              height: Ie
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
            transition: Ie,
            transitionEnd: {
              "--btn-hover-bg-color": "inherit",
              "--btn-hover-bg-color-noBlur": "inherit",
              "--btn-hover-font-color": "inherit",
              "--btn-hover-border-color": "inherit"
            }
          }
        },
        ze = {
          container: "c81dee7fd0870f89be57c52943608ddf59c2",
          content: "c81dee7fd0870f89cfe275314abbd166e236",
          unexpandedButton: "c81dee7fd0870f89b870021e51bcabfd89b2",
          expandedArea: "c81dee7fd0870f89fce6fc038ff582eb5846",
          closeButton: "c81dee7fd0870f89a953e0445dcb20205a63",
          platformButtons: "c81dee7fd0870f89c3cd96646f7f9949aae5",
          platformButton: "c81dee7fd0870f89c66dc397b79b1a2ba66f",
          xbox: "c81dee7fd0870f89af926eb5468682419225",
          xboxone: "c81dee7fd0870f89dc7f4998dc138ccb6aab",
          xboxseriesxs: "c81dee7fd0870f89b449cc2f1d1635bd5df3",
          ps4: "c81dee7fd0870f89be50474c118284a6e8bb",
          ps5: "c81dee7fd0870f89d164d0a62b0c27eb52e0",
          pc: "c81dee7fd0870f89c25189f8d019031cd50f",
          switch: "c81dee7fd0870f89c0fafd02c2d647495517",
          buttonText: "c81dee7fd0870f89ecefe77b5da17c0a3751"
        },
        De = e => {
          let {
            buttonText: a = "",
            link: n = "",
            platform: i = "",
            target: s = null,
            onClick: d
          } = e;
          const o = s ?? (n.startsWith(document.location.origin) ? "_self" : "_blank"),
            l = [ze.platformButton, ze[i]].join(" "),
            m = i ? t(3631)(`./${i}.svg`) : null,
            f = (0, c.jsxs)(c.Fragment, {
              children: [m ? (0, c.jsx)("img", {
                src: m,
                alt: a
              }) : "", (0, c.jsx)("div", {
                className: ze.buttonText,
                children: a
              })]
            });
          return n.startsWith("http") ? (0, c.jsx)("span", {
            onClick: d,
            onKeyDown: d,
            role: "link",
            tabIndex: 0,
            children: (0, c.jsx)("a", {
              href: n,
              className: l,
              target: o,
              children: f
            })
          }) : (0, c.jsx)(r.NavLink, {
            className: l,
            onClick: d,
            to: n,
            children: f
          })
        },
        Fe = e => {
          let {
            buttonText: a = "Subscribe",
            children: n,
            platformsAndLinks: i = [],
            trackingType: s = "buy",
            trackingParent: d,
            target: r = null
          } = e;
          const [o, m] = (0, l.useState)(!1), {
            track: f
          } = (0, F.useGtmTrack)();
          return (0, c.jsxs)("div", {
            className: ze.container,
            children: [(0, c.jsx)(Ee.E.div, {
              className: ze.content,
              animate: o ? "open" : "close",
              variants: Ve,
              children: n
            }), (0, c.jsxs)(Ee.E.div, {
              onClick: () => {
                m(!o), o || f("select_platform" === s ? {
                  event_action: "select_platform",
                  event_category: "cta",
                  event: "select_platform",
                  event_label: d,
                  text: a?.toLowerCase() ?? "subscribe"
                } : "link_account" === s ? {
                  event: "cta_link_account",
                  event_category: "cta",
                  event_action: "link_account",
                  event_label: d
                } : {
                  event_action: "buy",
                  event_category: "cta",
                  event: "cta_buy",
                  event_label: d,
                  text: a?.toLowerCase() ?? "subscribe"
                })
              },
              className: ze.unexpandedButton,
              animate: o ? "open" : "closed",
              variants: $e,
              initial: !1,
              children: [(0, c.jsx)(Ee.E.div, {
                className: ze.buttonText,
                children: "string" == typeof a ? a : "Subscribe"
              }), (0, c.jsxs)(Ee.E.div, {
                className: ze.expandedArea,
                animate: o ? "open" : "closed",
                variants: Be,
                initial: !1,
                children: [(0, c.jsx)("img", {
                  className: ze.closeButton,
                  onClick: () => m(!1),
                  onKeyDown: e => {
                    m(!1)
                  },
                  src: t(9545),
                  alt: "Close",
                  role: "button"
                }), (0, c.jsx)("div", {
                  className: ze.platformButtons,
                  children: i.length ? i.map((e => (0, c.jsx)(De, {
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
                    target: r
                  }, `${e.key}-${e.href}-${e.platform}`))) : ""
                })]
              })]
            })]
          })
        },
        Me = {
          animateBox: "c81dee7fd0870f89d79e4df595c4196a4456",
          fadeArea: "c81dee7fd0870f89b6209d5da943d66d8b63",
          visible: "c81dee7fd0870f89ee34ae7cf81c1083ffc9",
          barGrow: "c81dee7fd0870f89df2b636284886da578d7",
          bar: "c81dee7fd0870f89e839fdcdcef89badd41c",
          animateMe: "c81dee7fd0870f89cf9b5b4b10438cc31240"
        },
        Ae = e => {
          let {
            children: a,
            style: t
          } = e;
          const n = (0, l.useRef)(null);
          return (0, l.useEffect)((() => {
            new IntersectionObserver((e => {
              e.forEach((e => {
                e.isIntersecting && e.target.classList.add([Me.visible])
              }))
            })).observe(n?.current)
          }), []), (0, c.jsx)("div", {
            style: t,
            className: [Me.fadeArea].join(" "),
            ref: n,
            children: a
          })
        },
        Pe = {
          img: "c81dee7fd0870f89dc8c683c436f74586e7b",
          startAnimation: "c81dee7fd0870f89a1b95a9bde496a003c95"
        },
        Ge = e => {
          let {
            imgSrc: a,
            titleSlug: t
          } = e;
          const [n] = (0, D.usePreloadImg)(a);
          return (0, c.jsx)("div", {
            role: "img",
            "aria-label": t,
            className: [Pe.img, n ? Pe.startAnimation : ""].join(" "),
            style: {
              backgroundImage: `url(${a})`
            }
          })
        },
        Oe = e => {
          let {
            game: a,
            to: t
          } = e;
          const {
            fob_640: n,
            site_in_rockstar: i = !1,
            title_slug: s
          } = a;
          let d = s;
          "V" === s && (d = "gta-v"), "GTAOnline" === s && (d = "gta-online"), "undeadnightmare" === s && (d = "reddeadredemption");
          const r = t ?? `${i?"":"/games"}/${d}`;
          return (0, c.jsx)(o, {
            "aria-label": a,
            "data-gtm-category": "Games",
            "data-gtm-action": "Game Click-through",
            "data-gtm-label": s,
            to: r,
            target: "_self",
            className: "c81dee7fd0870f89a1d8ee283069b56fe549",
            children: (0, c.jsx)(Ge, {
              imgSrc: n,
              titleSlug: s
            })
          })
        },
        He = {
          gameSiteHeader: "c81dee7fd0870f89fe27c37cb6585d7b7d60",
          activeNavItem: "c81dee7fd0870f89a744303e87236a7fe626",
          navHidden: "c81dee7fd0870f89deccde34bbfbdbaadbec",
          navContent: "c81dee7fd0870f89c4dffa014a2db58def92",
          headerNavOpen: "c81dee7fd0870f89f29bb34557215bc90950",
          headerLogo: "c81dee7fd0870f89f272d361dcbf5808666b",
          bg: "c81dee7fd0870f89d8c7366f10a21fc14628"
        },
        Ue = e => {
          let {
            buttonText: a = null,
            gameOverrideStyles: t,
            navLinks: n,
            cta: i = "",
            game: s
          } = e;
          const [d, r] = (0, l.useState)(!1), o = (0, u.useMutateState)(), {
            navHidden: m
          } = (0, u.useState)();
          return (0, l.useEffect)((() => {
            o({
              gameSiteNavOpen: d
            })
          }), [d]), (0, l.useEffect)((() => {
            const e = () => {
              r(!1)
            };
            return document.addEventListener("click", e), () => document.removeEventListener("click", e)
          }), []), (0, c.jsxs)("header", {
            "data-game": s,
            className: [He.gameSiteHeader, d ? He.headerNavOpen : "", m ? He.navHidden : "", t.gameSiteHeader, d ? t.headerNavOpen : ""].join(" "),
            children: [(0, c.jsx)("button", {
              className: [He.headerLogo, t.headerLogo].join(" "),
              onClick: e => {
                r(!d), e.nativeEvent.stopImmediatePropagation()
              },
              type: "button",
              "aria-label": "Open Game Site Nav",
              dangerouslySetInnerHTML: {
                __html: a
              }
            }), (0, c.jsx)("div", {
              className: He.bg
            }), (0, c.jsx)("nav", {
              children: (0, c.jsx)("div", {
                className: He.navContent,
                children: n
              })
            }), i]
          })
        };
      var Re = t(4963);
      class qe extends l.Component {
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
          return this?.state?.error?.message ? (0, c.jsxs)("div", {
            className: "c81dee7fd0870f89f5139d7f80fba982ac24",
            children: [(0, c.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, c.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      const We = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return function(t) {
            return (0, c.jsx)(qe, {
              header: a,
              children: (0, c.jsx)(e, {
                ...t
              })
            })
          }
        },
        Ye = e => {
          let {
            prevRef: a,
            nextRef: t,
            onNextClicked: n,
            onPrevClicked: i
          } = e;
          return (0, c.jsxs)("div", {
            className: "c81dee7fd0870f89f342658f4bc799d5517c",
            children: [(0, c.jsx)("div", {
              className: "c81dee7fd0870f89ff2aff376d6a01f6cb73",
              ref: a,
              onClick: i,
              "aria-label": "Previous",
              role: "button",
              tabIndex: 0,
              onKeyUp: () => {}
            }), (0, c.jsx)("div", {
              className: "c81dee7fd0870f89ee9bbee58d7d850c5a49",
              ref: t,
              onClick: n,
              "aria-label": "Next",
              role: "button",
              tabIndex: 0,
              onKeyUp: () => {}
            })]
          })
        },
        Ze = We((e => {
          let {
            description: a,
            slideChildren: t,
            size: n,
            title: i,
            customSlidesPerView: s = null,
            customSpaceBetween: d = null,
            slideClass: r,
            style: o,
            className: m,
            cardSizeBreakpoints: f = {},
            customAspectRatio: u,
            titleBadge: g
          } = e;
          const {
            track: p
          } = (0, F.useGtmTrack)(), v = (0, l.useRef)(null), b = (0, l.useRef)(null), k = (0, l.useRef)(null), [h, x] = (0, l.useState)(null), [y, _] = (0, l.useState)(!1), [N, S] = (0, l.useState)(null), [w, T] = (0, l.useState)({}), [C, E] = (0, l.useState)(), {
            ref: L,
            inView: V
          } = (0, G.YD)({
            threshold: .6
          }), [B, $] = (0, l.useState)(!1), [z, D] = (0, l.useState)(null), [M, A] = (0, l.useState)(!1);
          (0, l.useEffect)((() => {
            const e = () => {
              A(window.innerWidth < 1024)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []);
          const P = {
            0: {
              spaceBetween: d ?? 16
            },
            1024: {
              spaceBetween: d ?? 18
            },
            1920: {
              spaceBetween: d ?? 20
            },
            2560: {
              spaceBetween: d ?? 22
            }
          };
          (0, l.useEffect)((() => {
            if (!v.current) return;
            const e = () => {
              if (v.current) {
                const e = s || Number(window.getComputedStyle(v.current).getPropertyValue("--slides-per-view")),
                  a = s ? 1 : Number(window.getComputedStyle(v.current).getPropertyValue("--slides-per-view-multiplier"));
                S(e * a)
              }
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [v, s]), (0, l.useEffect)((() => {
            if (!t) return;
            let e = !1;
            t.forEach((a => {
              "cover-card" === a?.props?.tina?.payload?.meta?.type && (e = !0, D(a))
            })), $(e);
            const a = t.map(((e, a) => "cover-card" === e?.props?.tina?.payload?.meta?.type && M ? null : (0, c.jsx)(I.o5, {
              children: e
            }, Symbol(a).toString())));
            x(a)
          }), [t, M]), (0, l.useEffect)((() => {
            E({
              nextEl: k.current,
              prevEl: b.current
            })
          }), [k, b]), (0, l.useEffect)((() => {
            V && !y && t && (p({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: `deck - ${i}`.toLowerCase(),
              element_placement: `deck - ${i}`.toLowerCase()
            }), _(!0))
          }), [V, t]);
          const O = "custom" === n ? {
            "--custom-aspect-ratio": u,
            ...o
          } : {
            ...o
          };
          return (0, c.jsxs)("div", {
            className: (0, j.classList)("c81dee7fd0870f89b64388286d495640e2ab", m),
            "data-size": n,
            "data-sm": f?.sm ? f?.sm : n,
            "data-md": f?.md ? f?.md : n,
            "data-lg": f?.lg ? f?.lg : n,
            "data-xl": f?.xl ? f?.xl : n,
            "data-xxl": f?.xxl ? f?.xxl : n,
            "data-has-covercard": B,
            ref: v,
            style: O,
            children: [(0, c.jsx)("div", {
              className: "c81dee7fd0870f89e5cc113d03c02f2bc75f",
              ref: L
            }), B && M && (0, c.jsx)("div", {
              className: "c81dee7fd0870f89a5a7fd063761a9f5821c",
              children: z
            }), (0, c.jsxs)("div", {
              className: "c81dee7fd0870f89b1b0c02e52077bb30d3f",
              children: [(0, c.jsxs)("div", {
                className: "c81dee7fd0870f89c317036cad59ac2c6e5b",
                children: [!B && (0, c.jsxs)("div", {
                  className: "c81dee7fd0870f89ae2914403608eaaf3ded",
                  children: [i && (0, c.jsxs)("div", {
                    className: "c81dee7fd0870f89e0562bd484f4f36f9eea",
                    children: [(0, c.jsx)("h2", {
                      children: i
                    }), g && (0, c.jsx)("span", {
                      className: "c81dee7fd0870f89cb885d993a265a5b37f2",
                      children: g
                    })]
                  }), (0, c.jsx)(Ye, {
                    prevRef: b,
                    nextRef: k,
                    onNextClicked: () => {},
                    onPrevClicked: () => {}
                  })]
                }), a && (0, c.jsx)("div", {
                  className: "c81dee7fd0870f89f759f04301770fdd6a1b",
                  dangerouslySetInnerHTML: {
                    __html: a
                  }
                })]
              }), B && (0, c.jsx)(Ye, {
                prevRef: b,
                nextRef: k,
                onNextClicked: () => {
                  w.slideNext()
                },
                onPrevClicked: () => {
                  w.slidePrev()
                }
              })]
            }), N ? (0, c.jsx)(I.tq, {
              slidesPerView: N,
              onInit: e => T(e),
              grabCursor: !0,
              navigation: C,
              modules: [Re.W_],
              breakpoints: P,
              slideClass: (0, j.classList)("swiper-slide", r),
              onSlideNextTransitionEnd: () => {
                p({
                  event_action: "next",
                  event_category: "carousel",
                  event: "carousel_next",
                  event_label: i?.toLowerCase() ?? ""
                })
              },
              onSlidePrevTransitionEnd: () => {
                p({
                  event_action: "previous",
                  event_category: "carousel",
                  event: "carousel_previous",
                  event_label: i?.toLowerCase() ?? ""
                })
              },
              onSlideChangeTransitionEnd: () => {
                p({
                  event_action: "swipe",
                  event_category: "carousel",
                  event: "carousel_swipe",
                  event_label: i?.toLowerCase() ?? ""
                })
              },
              children: h
            }) : ""]
          })
        }), null),
        Qe = {
          hero: "c81dee7fd0870f89bece3423e7348fe897dd",
          images: "c81dee7fd0870f89e4f748c1ff815d8b9037",
          background: "c81dee7fd0870f89b5ced9959e35f2253f74",
          gradient: "c81dee7fd0870f89e0fe7c3119deb0390f3a",
          layered: "c81dee7fd0870f89f0fcd0b3f97b9d26ac9a",
          content: "c81dee7fd0870f89f80d5ef43a4ca7f8db9a",
          descriptions: "c81dee7fd0870f89a0274a048775d56472f3",
          buttonGroup: "c81dee7fd0870f89b3b215f6051dcab57e88",
          legalText: "c81dee7fd0870f89fdc2ef25c828ac791dc6",
          shardsCarousel: "c81dee7fd0870f89a10586bf7a52bd0b2244"
        },
        Xe = {
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
        Ke = {
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
        Je = e => {
          let {
            title: a = "",
            mobileImg: t,
            desktopImg: n
          } = e;
          const i = (0, j.useGetCdnSource)(t ?? null),
            s = (0, j.useGetCdnSource)(n ?? i);
          return (0, c.jsx)("div", {
            className: Qe.shard,
            style: {
              "--background-image-mobile": `url(${i})`,
              "--background-image-desktop": `url(${s})`
            },
            children: (0, c.jsx)("h5", {
              children: a
            })
          })
        },
        ea = e => {
          let {
            title: a = "Membership Rewards",
            shards: t
          } = e;
          const [n, i] = (0, l.useState)(null);
          return (0, l.useEffect)((() => {
            t && i(t.reduce(((e, a) => {
              if (!a?.shardImg) return e;
              const {
                title: t,
                shardImg: n
              } = a, {
                mobile: i,
                desktop: s
              } = n;
              return e.push((0, c.jsx)(Je, {
                title: t,
                mobileImg: i?.full_src,
                desktopImg: s?.full_src
              })), e
            }), []))
          }), [t]), n ? (0, c.jsx)("div", {
            className: Qe.shardsCarousel,
            children: (0, c.jsx)(Ze, {
              title: a,
              slideChildren: n,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        aa = e => {
          let {
            animated: a = !1,
            ctas: t = [],
            description: n,
            expandingButtonLabel: i = "Subscribe",
            title: s
          } = e;
          const [d, r] = (0, l.useState)([]), [o, m] = (0, l.useState)([]);
          return (0, l.useEffect)((() => {
            r(t.reduce(((e, a) => a.isInExpandingButton ? (e.push({
              href: a.href,
              platform: a.platform,
              buttonText: a.buttonText
            }), e) : e), [])), m(t.reduce(((e, a) => (a.isInExpandingButton || e.push({
              icon: a.platform ? a.platform : "",
              title: a.buttonText,
              to: a.href
            }), e)), []))
          }), t), t.length ? d.length ? (0, c.jsx)(Ee.E.div, {
            variants: a ? Ke : void 0,
            children: (0, c.jsxs)(Fe, {
              buttonText: i,
              platformsAndLinks: d,
              children: [(0, c.jsxs)(Ee.E.div, {
                className: Qe.descriptions,
                variants: a ? Ke : void 0,
                children: [(0, c.jsx)("h2", {
                  dangerouslySetInnerHTML: {
                    __html: s
                  }
                }), (0, c.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: n
                  }
                })]
              }), !!o && !!o.length && (0, c.jsx)(Ee.E.div, {
                variants: Ke,
                children: (0, c.jsx)(E, {
                  buttons: o,
                  className: Qe.buttonGroup
                })
              })]
            })
          }) : (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsxs)(Ee.E.div, {
              className: Qe.descriptions,
              variants: a ? Ke : void 0,
              children: [(0, c.jsx)("h2", {
                dangerouslySetInnerHTML: {
                  __html: s
                }
              }), (0, c.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: n
                }
              })]
            }), !!o && !!o.length && (0, c.jsx)(Ee.E.div, {
              variants: Ke,
              children: (0, c.jsx)(E, {
                buttons: o,
                className: Qe.buttonGroup
              })
            })]
          }) : (0, c.jsxs)(Ee.E.div, {
            className: Qe.descriptions,
            variants: a ? Ke : void 0,
            children: [(0, c.jsx)("h2", {
              dangerouslySetInnerHTML: {
                __html: s
              }
            }), (0, c.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: n
              }
            })]
          })
        },
        ta = e => {
          let {
            animated: a = !1,
            brands: t = [],
            ctas: n = [],
            description: i = "",
            expandingButtonLabel: s = "Subscribe",
            title: d = "",
            legalText: r
          } = e;
          return (0, c.jsxs)(Ee.E.div, {
            className: Qe.content,
            initial: "hidden",
            animate: "visible",
            variants: a ? Xe : void 0,
            children: [(0, c.jsx)(Ee.E.div, {
              variants: a ? Ke : void 0,
              children: (0, c.jsx)(y, {
                brands: t
              })
            }), (0, c.jsx)(aa, {
              animated: a,
              ctas: n,
              description: i,
              expandingButtonLabel: s,
              title: d
            }), r && (0, c.jsx)(Ee.E.div, {
              className: Qe.legalText,
              variants: a ? Ke : void 0,
              children: (0, c.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: r
                }
              })
            })]
          })
        },
        na = e => {
          let {
            animated: a = !1,
            backgroundImage: t,
            brands: n = [],
            className: i,
            ctas: s = [],
            description: d = "",
            expandingButtonLabel: r = "Subscribe",
            layeredImage: o,
            layeredImageSettings: l,
            legalText: m,
            shardsSection: f = {},
            theme: u = "gen9",
            title: g = ""
          } = e;
          const p = (e => {
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
                const [n, i] = e;
                if (t.has(n)) {
                  const e = t.get(n);
                  Object.entries(i).forEach((i => {
                    const [s, d] = i;
                    if (t.has(n) && t.has(s)) {
                      const n = `${t.get(s)}${e}`;
                      a[n] = "imageWidth" !== s ? d ? `${d}px` : "0px" : d ? `${d}vw` : "100vw"
                    }
                  }))
                }
              })), a
            })(l),
            v = (0, j.useGetCdnSource)(t?.mobile?.full_src ?? null),
            b = (0, j.useGetCdnSource)(t?.desktop?.full_src ?? v),
            k = (0, j.useGetCdnSource)(o?.mobile?.full_src ?? null),
            h = (0, j.useGetCdnSource)(o?.desktop?.full_src ?? k);
          return (0, c.jsxs)(Ee.E.div, {
            className: (0, j.classList)(Qe.hero, i),
            style: {
              "--background-image-desktop": `url(${b})`,
              "--background-image-mobile": `url(${v})`,
              "--layered-image-desktop": `url(${h})`,
              "--layered-image-mobile": `url(${k})`
            },
            initial: "hidden",
            animate: "visible",
            variants: a ? Xe : void 0,
            "data-type": "hero",
            theme: u,
            children: [(0, c.jsxs)("div", {
              className: Qe.images,
              children: [b && v ? (0, c.jsx)("div", {
                className: Qe.background,
                style: t?.style ?? {}
              }) : "", k && h ? (0, c.jsx)("div", {
                className: Qe.layered,
                style: l ? p : {}
              }) : "", (0, c.jsx)("div", {
                className: Qe.gradient
              })]
            }), (0, c.jsx)(ta, {
              animated: a,
              ctas: s,
              description: d,
              expandingButtonLabel: r,
              title: g,
              brands: n,
              legalText: m
            }), f?.shards && (0, c.jsx)(ea, {
              ...f
            })]
          })
        };
      var ia = t(3448),
        sa = t.n(ia);
      const da = e => {
          let {
            children: a,
            attributes: t = {},
            className: n = "",
            style: i = {}
          } = e;
          return (0, c.jsx)("span", {
            className: (0, j.classList)(n, t?.className, "c81dee7fd0870f89d29f95ed3bc7c6d7c617"),
            style: (0, D.safeStyles)(i ?? t?.style ?? {}),
            dangerouslySetInnerHTML: {
              __html: sa().unescape(a)
            }
          })
        },
        ra = {
          languageSelector: "c81dee7fd0870f89f166a9ac105f2369a3dc",
          open: "c81dee7fd0870f89dae05bdd156653f28cc6",
          linkWrapper: "c81dee7fd0870f89b8a37e9fec4e19718bad",
          links: "c81dee7fd0870f89d68cd45af954ada8339b"
        },
        ca = (0, D.withTranslations)((e => {
          let {
            t: a
          } = e;
          const t = (0, r.useLocation)(),
            [n, i] = (0, l.useState)(!1),
            s = [{
              base: "",
              text: a("English")
            }, {
              base: "/de",
              text: a("Deutsch")
            }, {
              base: "/fr",
              text: a("Français")
            }, {
              base: "/it",
              text: a("Italiano")
            }, {
              base: "/jp",
              text: a("日本語")
            }, {
              base: "/ru",
              text: a("Pусский")
            }, {
              base: "/es",
              text: a("Español (España)")
            }, {
              base: "/mx",
              text: a("Español (México)")
            }, {
              base: "/br",
              text: a("Português")
            }, {
              base: "/kr",
              text: a("한국어")
            }, {
              base: "/zh",
              text: a("中文（简体）")
            }, {
              base: "/tw",
              text: a("中文（繁體）")
            }, {
              base: "/pl",
              text: a("Polski")
            }];
          return (0, c.jsxs)("div", {
            className: [ra.languageSelector, n ? ra.open : ""].join(" "),
            children: [(0, c.jsxs)("button", {
              onClick: () => i(!n),
              type: "button",
              "aria-label": "Language Selector",
              children: [(0, c.jsx)("i", {}), (0, c.jsx)("span", {
                children: a("current-language")
              })]
            }), (0, c.jsx)("div", {
              className: ra.linkWrapper,
              children: (0, c.jsx)("div", {
                className: ra.links,
                children: s.map((e => {
                  let {
                    base: a,
                    text: n
                  } = e;
                  return (0, c.jsx)(o, {
                    to: `${window.location.origin}${a}${t.pathname}${t.search}`,
                    children: n
                  }, n)
                }))
              })
            })]
          })
        })),
        oa = {
          layeredImage: "c81dee7fd0870f89fe055e03d755d327f68b",
          layersWrapper: "c81dee7fd0870f89ed9fb715b12c8922091c",
          "hero-lg": "c81dee7fd0870f89b14311c40aa111444c4f",
          "hero-md": "c81dee7fd0870f89c03dc01fd60d629070a7",
          "hero-sm": "c81dee7fd0870f89e4afc321441749195cbe",
          contain: "c81dee7fd0870f89fe34b6e44a872251cd8c",
          cover: "c81dee7fd0870f89bc38a5997d08467d0210",
          fill: "c81dee7fd0870f89d5b4434d674523aeecbe",
          "bg-img": "c81dee7fd0870f89e4fde483f33dda9ad1ac",
          imageLayer: "c81dee7fd0870f89eb82e236806638e1831d",
          "layer-lg-height": "c81dee7fd0870f89d0ba0140371ae5f1a833",
          "layer-md-height": "c81dee7fd0870f89a3c442f71d344ee0070d",
          "layer-sm-height": "c81dee7fd0870f89b2e3a701514d31bc7fa6",
          "layer-xl-height": "c81dee7fd0870f89f750384c6c8f8c4a93f8",
          "layer-xs-height": "c81dee7fd0870f89ed156fec9aec1fdad9d8",
          "layer-xxl-height": "c81dee7fd0870f89c6339a90f75282ca4796",
          "layer-lg-width": "c81dee7fd0870f89a5cc4ed6f65c9eecec0f",
          "layer-md-width": "c81dee7fd0870f89d01397671439af05e861",
          "layer-sm-width": "c81dee7fd0870f89e56480b5dd53e45ad22e",
          "layer-xl-width": "c81dee7fd0870f89d8feacc718c48748c751",
          "layer-xs-width": "c81dee7fd0870f89b4c7390aed100757acfb",
          "layer-xxl-width": "c81dee7fd0870f89c9764a5f568cfc513265",
          "bottom-y": "c81dee7fd0870f89ccddb186e7ad73398712",
          "center-x": "c81dee7fd0870f89d1d54565cd99dc5734fa",
          "center-y": "c81dee7fd0870f89ffaff7ec59daea41278d",
          "left-x": "c81dee7fd0870f89e07a30de60556b257e90",
          "right-x": "c81dee7fd0870f89f435a185c8d34ffe25d5",
          "top-y": "c81dee7fd0870f89a09d6d2ccff606e24bfd",
          border: "c81dee7fd0870f89a115318c6185182f4644",
          shards: "c81dee7fd0870f89a784f35f03c2b55da23d",
          shards_three: "c81dee7fd0870f89c3fdbf638bbef9710161",
          shards_two: "c81dee7fd0870f89c02b70bf2011870f3b5b",
          dual: "c81dee7fd0870f89e8db8a69d0b33f0a6fe6"
        },
        la = e => {
          let {
            style: a,
            className: t
          } = e;
          const n = {
              ...a
            },
            i = a["--border-image-source"];
          return i && (n["--border-image-source"] = `url(${(0,j.useGetCdnSource)(i)})`), (0, c.jsx)("div", {
            className: (0, j.classList)(oa.border, t),
            style: {
              ...n
            }
          })
        },
        ma = e => e?.images ? (0, c.jsx)("div", {
          className: (0, j.classList)(oa.layeredImage, oa[e?.variantClass], oa[e?.wrapperSizeClass]),
          style: {
            ...e?.style ?? {}
          },
          children: (0, c.jsxs)("div", {
            className: oa.layersWrapper,
            children: [e?.images?.map(((e, a) => {
              const {
                image: t,
                paddingClass: n,
                imageSizeClass: i,
                objectFitClass: s,
                positionClassX: d,
                positionClassY: r,
                zIndex: o,
                className: l,
                style: m,
                alt: f,
                displayClass: u
              } = e;
              return (0, c.jsx)(oe, {
                image: t,
                style: {
                  zIndex: o ?? ++a
                },
                imageStyle: m,
                className: (0, j.classList)(l, u, oa.imageLayer, oa[n], oa[i], oa[s], oa[d], oa[r]),
                alt: f
              }, o ?? ++a)
            })), e?.borderImage && (0, c.jsx)(la, {
              style: e?.borderImage,
              className: e?.borderImage?.displayClass
            })]
          })
        }) : null,
        fa = e => {
          let {
            hero: a,
            children: t
          } = e;
          return a ? (0, c.jsx)("div", {
            className: "c81dee7fd0870f89d1f3fa1daee184b8bbce",
            children: t
          }) : t
        },
        ua = e => {
          let {
            badge: a = null,
            badgeType: t,
            discountTxt: n,
            splitter: i,
            image: s,
            style: d,
            className: r = "",
            attributes: o = {},
            role: l,
            hero: m = !1
          } = e;
          return (0, c.jsx)(fa, {
            hero: m,
            children: (0, c.jsx)("figure", {
              children: (0, c.jsxs)("div", {
                className: (0, j.classList)("c81dee7fd0870f89bf489090b1d2699c92a4", m ? "c81dee7fd0870f89e5c17109e2f485cf10fa" : "", o?.hiddenMobile ? "hiddenMobile" : "", o?.hiddenLarge ? "hiddenLarge" : "", o?.className, r),
                style: (0, D.safeStyles)({
                  ...d,
                  ...o?.style
                }),
                ...o,
                children: [(0, c.jsx)(oe, {
                  image: s,
                  className: r
                }), (s?.badge || s?.discountTxt || a || n) && (0, c.jsx)(xe, {
                  badge: s?.discountTxt ?? s?.badge ?? a ?? n,
                  badgeType: t,
                  splitter: s?.splitter ?? i,
                  role: s?.role ?? l
                }), s?.caption && (0, c.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: s.caption
                  }
                })]
              })
            })
          })
        },
        ga = {
          multiSourceContainer: "c81dee7fd0870f89a286c96ead55565c9ec6",
          multiSourceImage: "c81dee7fd0870f89e29a46d7ad9aca9bbcc5",
          animatePlaceholder: "c81dee7fd0870f89ee2cde56cd8662f21104",
          "loader-keyframes": "c81dee7fd0870f89c638010855d392e29c00"
        },
        pa = e => {
          let {
            imageUrl: a,
            className: t,
            alt: n,
            style: i,
            lazy: s = !1,
            decoding: d = "auto",
            sizes: r = [320, 480, 768, 1024, 1440, 1920, 2560]
          } = e;
          const [o, m] = (0, l.useState)(!1);
          return (0, c.jsxs)("div", {
            className: ga.multiSourceContainer,
            children: [!o && (0, c.jsx)("img", {
              className: [t, ga.animatePlaceholder].join(" "),
              src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjMzMzMzMzIi8+Cjwvc3ZnPgo=",
              sizes: "(max-width: 1024px) 100vw, 1024px",
              alt: "Loading...",
              style: i
            }), (0, c.jsx)("img", {
              className: [ga.multiSourceImage, t].join(" "),
              src: `${a}?im=Resize=1920`,
              srcSet: (f = a, r.map((e => `${f}?im=Resize=${e} ${e}w`)).join(", ")),
              sizes: "(max-width: 400px) 200px, (max-width: 1920px) 100vw, 1920px",
              alt: n ?? "Multi-Source Image",
              style: i,
              onLoad: () => {
                m(!0)
              },
              loading: s ? "lazy" : "eager",
              decoding: d
            })]
          });
          var f
        },
        va = {
          tag: "c81dee7fd0870f89c34ddc7e68d6e0a43aa3"
        },
        ba = e => {
          let {
            className: a,
            href: t,
            title: n,
            style: i
          } = e;
          const s = (0, c.jsxs)("div", {
            style: i,
            className: [va.tag, a].join(" "),
            children: [(0, c.jsx)("i", {}), n]
          });
          return void 0 !== t ? (0, c.jsx)(o, {
            to: t,
            children: s
          }) : s
        },
        ka = {
          newswireBlock: "c81dee7fd0870f89a97e3c48c2de4beda1b1",
          info: "c81dee7fd0870f89b37e339b7babb86eb265",
          title: "c81dee7fd0870f89b536165692b314b850e2",
          newswireBlockNoSpecialOrder: "c81dee7fd0870f89e577e50e921ab5910ff9",
          preview: "c81dee7fd0870f89c935c727f0c9b7f71a6f",
          previewMobile: "c81dee7fd0870f89a73fde693c4a2a4052a5",
          top: "c81dee7fd0870f89a3662abbd063913c0a3b",
          startAnimation: "c81dee7fd0870f89c8bf6fa8ccd8d8248584"
        },
        ha = e => {
          let {
            index: a,
            post: t,
            noSpecialOrder: n = !1,
            style: i = {}
          } = e;
          const [s] = (0, r.useSearchParams)(), d = t.preview_images_parsed.newswire_block, l = {
            default: 0 !== a || n ? d.square || d.d16x9 || d._fallback : d.d16x9 || d.square || d._fallback,
            mobile: d.square || d._fallback
          }, [m, f] = (0, D.usePreloadImg)(l.default), [u, g] = (0, D.usePreloadImg)(l.mobile), p = {
            default: {
              backgroundImage: `url(${l.default})`
            },
            mobile: {
              backgroundImage: `url(${l.mobile})`
            }
          };
          return (0, c.jsx)(o, {
            "data-gtm-category": "Newswire",
            "data-gtm-action": "Article Block Click",
            "data-gtm-label": `${t.title}`,
            to: t.url,
            className: [ka.newswireBlock, n ? ka.newswireBlockNoSpecialOrder : "", null !== m ? ka.startAnimation : ""].join(" "),
            children: (0, c.jsxs)(c.Fragment, {
              children: [0 !== a || s.get("tag_id") ? (0, c.jsx)("div", {
                className: ka.preview,
                style: p.default
              }) : (0, c.jsxs)(c.Fragment, {
                children: [(0, c.jsx)("div", {
                  className: ka.previewMobile,
                  style: p.mobile
                }), (0, c.jsx)("div", {
                  className: ka.preview,
                  style: p.default
                })]
              }), (0, c.jsxs)("div", {
                className: ka.info,
                children: [(0, c.jsxs)("div", {
                  className: ka.top,
                  children: [t.primary_tags.length ? (0, c.jsx)(ba, {
                    title: t.primary_tags[t.primary_tags.length > 1 && 722 === t.primary_tags[0].id ? 1 : 0].name
                  }) : "", (0, c.jsx)("time", {
                    dateTime: t.created,
                    children: t.created_formatted
                  })]
                }), (0, c.jsx)("h5", {
                  className: ka.title,
                  dangerouslySetInnerHTML: {
                    __html: t.title
                  }
                })]
              })]
            })
          })
        };
      var xa = t(9514),
        ya = t.n(xa);
      const _a = (0, D.withTranslations)((e => {
          let {
            relativeTo: a = "",
            tagId: t = null,
            metaUrl: n = "/newswire",
            t: i
          } = e;
          const [s] = (0, r.useSearchParams)(), {
            tagId: d = null
          } = (0, r.useParams)(), [o, m] = (0, l.useState)(d ?? t ?? s.get("tag_id")), [f, g] = (0, l.useState)(1), [p, v] = (0, l.useState)([]), [b, k] = (0, l.useState)(null), {
            data: h
          } = (0, u.useQuery)(ya(), {
            variables: {
              tagId: Number(o),
              page: f,
              metaUrl: n
            },
            autoSetLoading: !0
          });
          return (0, l.useEffect)((() => {
            g(1), v([]), m(d ?? t ?? s.get("tag_id"))
          }), [s.get("tag_id")]), (0, l.useEffect)((() => {
            h && h.posts && h.posts.paging && k(h.posts.paging), h && h.posts && h.posts.results && v(p.concat(h.posts.results))
          }), [h]), p.length ? (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsx)(wa, {
              posts: p,
              relativeTo: a,
              noSpecialOrder: null !== o
            }), null !== b && b.nextPage ? (0, c.jsx)(N, {
              onClick: () => g(f + 1),
              disabled: !1,
              context: "secondary",
              children: i("More Stories")
            }) : ""]
          }) : null
        })),
        Na = {
          related: "c81dee7fd0870f89dab943d0a03bc8dd3045",
          posts: "c81dee7fd0870f89dc1a17e1a45a2aad85c4",
          just1post: "c81dee7fd0870f89a5966adf644cfbc3adc6"
        },
        ja = (0, D.withTranslations)((e => {
          let {
            posts: a,
            t
          } = e;
          return (0, c.jsxs)("section", {
            className: Na.related,
            children: [(0, c.jsx)("h2", {
              children: t("Related Stories")
            }), (0, c.jsx)("div", {
              className: [Na.posts, 1 === a.length ? Na.just1post : ""].join(" "),
              children: a.map((e => (0, c.jsx)(ha, {
                noSpecialOrder: !0,
                post: e
              }, e.id)))
            })]
          })
        })),
        Sa = {
          newswireBlocks: "c81dee7fd0870f89fc028fb629fcb496e293",
          noSpecialOrder: "c81dee7fd0870f89bdf712cf14c051816b0b"
        },
        wa = (0, D.withGtmTracking)((e => {
          let {
            noSpecialOrder: a = !1,
            posts: t,
            gtmTrack: n,
            relativeTo: i
          } = e;
          return (0, l.useEffect)((() => {
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
            })), n(e)
          }), [t.length]), (0, c.jsx)("div", {
            className: [Sa.newswireBlocks, a ? Sa.noSpecialOrder : "", Sa.contextHome].join(" "),
            children: t.map(((e, t) => (0, c.jsx)(ha, {
              index: t,
              noSpecialOrder: a,
              post: e
            }, e.id)))
          })
        }));
      var Ta = t(4739);
      const Ca = "c81dee7fd0870f89e5f2890c085fc047351c",
        Ea = e => {
          let {
            children: a,
            data: t,
            onPageUpdate: n,
            page: i,
            className: s
          } = e;
          return (0, c.jsx)("a", {
            href: "#",
            className: i === t.page ? `c81dee7fd0870f89e081ffd856ce7ff3aa7a ${s??""}` : "",
            onClick: e => {
              e.preventDefault(), n(i)
            },
            children: a
          })
        },
        Ia = e => {
          let {
            data: a,
            onPageUpdate: t,
            className: n
          } = e;
          if (1 === a.pageCount) return null;
          const i = Array.from(new Array(Math.min(a.pageCount, 8)), ((e, t) => t + Math.min(Math.max(a.pageCount - 8, 1), Math.max(2, a.page - 4))));
          return (0, c.jsxs)("div", {
            className: `c81dee7fd0870f89a2b5d74732328a24711b ${n??""}`,
            children: [a.pageCount > 8 ? (0, c.jsxs)(c.Fragment, {
              children: [(0, c.jsx)(Ea, {
                data: a,
                onPageUpdate: t,
                page: 1,
                children: "1"
              }), 2 !== i[0] ? (0, c.jsx)("div", {
                className: Ca,
                children: "..."
              }) : ""]
            }) : "", i.map((e => (0, c.jsx)(Ea, {
              data: a,
              onPageUpdate: t,
              page: e,
              className: n,
              children: e
            }, e))), a.pageCount > 8 ? (0, c.jsxs)(c.Fragment, {
              children: [i.slice(-1)[0] + 1 < a.pageCount ? (0, c.jsx)("div", {
                className: Ca,
                children: "..."
              }) : "", (0, c.jsx)(Ea, {
                data: a,
                onPageUpdate: t,
                page: a.pageCount,
                children: a.pageCount
              })]
            }) : ""]
          })
        };
      var La = t(4960);
      const Va = e => {
          let {
            children: a
          } = e;
          const {
            parallaxController: t
          } = (0, La.bc)();
          return (0, l.useLayoutEffect)((() => {
            if (!t) return;
            const e = setInterval((() => {
              t.update()
            }), 500);
            return () => clearInterval(e)
          }), [t]), a
        },
        Ba = {
          parallaxWrapper: "c81dee7fd0870f89aca7e7408c96c3836597",
          large: "c81dee7fd0870f89bc4f5c2a498cd14dad61",
          medium: "c81dee7fd0870f89bf2bfc259c1bf5ea828e",
          small: "c81dee7fd0870f89c88305647760d3c2405f"
        },
        $a = e => {
          let {
            scrollAxis: a = "vertical",
            size: t = "",
            style: n = {},
            children: i
          } = e;
          return (0, c.jsx)(La.Xu, {
            scrollAxis: a,
            children: (0, c.jsx)(Va, {
              children: (0, c.jsx)("div", {
                className: (0, j.classList)(Ba.parallaxWrapper, Ba[t]),
                style: n,
                "data-context": "parallax-wrapper",
                children: i ? i.map(((e, t) => (0, l.cloneElement)(e, {
                  scrollAxis: a,
                  style: {
                    ...e?.props?.style,
                    zIndex: t
                  }
                }))) : (0, c.jsx)("div", {})
              })
            })
          })
        },
        za = e => {
          let {
            layers: a = [],
            displayClass: t = "",
            style: n = {}
          } = e;
          const i = (0, j.useGenerateCdnSource)();
          if (!a || !a[0]?.image) return null;
          const s = a.map((e => ({
            ...e,
            props: {
              style: {
                ...e.style
              }
            },
            style: void 0,
            image: i(e?.image ?? null)
          })));
          return (0, c.jsx)(La.UG, {
            className: (0, j.classList)("c81dee7fd0870f89ad9cd218591d2cf7dbab", t),
            layers: s,
            style: n
          })
        },
        Da = "c81dee7fd0870f89d0b97ccb9b7b3592b1e9",
        Fa = e => {
          let {
            minOffset: a = 0,
            maxOffset: t = 0,
            scrollAxis: n = "vertical",
            displayClass: i = "",
            style: s = {},
            children: d
          } = e;
          return "horizontal" === n ? (0, c.jsx)(La.VS, {
            x: [a, t],
            className: (0, j.classList)(Da, i),
            styleOuter: s,
            children: d
          }) : (0, c.jsx)(La.VS, {
            y: [a, t],
            className: (0, j.classList)(Da, i),
            styleOuter: s,
            children: d
          })
        },
        Ma = {
          promoModule: "c81dee7fd0870f89dc6b9943bd5638e92bf1",
          promoModuleImage: "c81dee7fd0870f89c31e1f05a9d9e386cb59",
          gradient: "c81dee7fd0870f89e4422c8b7198431ac1a3",
          promoModuleContentContainer: "c81dee7fd0870f89e49fcbe7526c79fb878e",
          left: "c81dee7fd0870f89bb87afa152b7574ddcb2",
          right: "c81dee7fd0870f89ffb17488f0d5a5bd3860",
          promoModuleTextContent: "c81dee7fd0870f89bb09e437d125424fff9b"
        },
        Aa = e => {
          let {
            backgroundColor: a,
            brands: t = [],
            description: n = "",
            ctaLabel: i = "Click here",
            ctaLink: s = "https://rockstargames.com",
            gradient: d = !0,
            image: r,
            imageOrientation: o = "right",
            title: m = ""
          } = e;
          const [f, u] = (0, l.useState)(!1), {
            ref: g,
            inView: p
          } = (0, G.YD)({
            threshold: .6
          }), {
            track: v
          } = (0, F.useGtmTrack)(), b = {
            "--promo-background": a ?? "var(--black-200)",
            "--promo-image": `url(${(0,j.useGetCdnSource)(r)})` ?? 0,
            "--promo-order": "left" === o ? "row" : "row-reverse"
          };
          return (0, l.useEffect)((() => {
            p && !f && (v({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: "promo module",
              element_placement: "promo module"
            }), u(!0))
          }), [p]), (0, c.jsxs)(Ee.E.div, {
            className: Ma.promoModule,
            style: b,
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
            ref: g,
            children: [(0, c.jsx)("div", {
              className: [Ma.promoModuleImage, d ? Ma.gradient : "", "left" === o ? Ma.left : Ma.right].join(" ")
            }), (0, c.jsxs)("div", {
              className: Ma.promoModuleContentContainer,
              children: [(0, c.jsx)(y, {
                brands: t,
                className: Ma.promoModuleBrands
              }), (0, c.jsxs)("div", {
                className: Ma.promoModuleTextContent,
                children: [m && (0, c.jsx)("h3", {
                  children: m
                }), n && (0, c.jsx)("p", {
                  children: n
                })]
              }), i && (0, c.jsx)(C, {
                to: s,
                text: i,
                onClick: () => {
                  v({
                    event: "cta_other",
                    event_category: "cta",
                    event_action: "other",
                    event_label: i,
                    element_placement: "promo module",
                    link_url: s,
                    text: i
                  })
                }
              })]
            })]
          })
        };
      var Pa = t(3761),
        Ga = t(7306),
        Oa = t(8600),
        Ha = t(794);
      t(3657);
      const Ua = (0, Ga.vU)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          },
          components_track_list_title: {
            id: "components_track_list_title",
            defaultMessage: "Tracklist"
          }
        }),
        Ra = {
          rating: "c81dee7fd0870f89fb3c2b9e8611c7ddad31",
          withDescriptors: "c81dee7fd0870f89fe0db64422f7ad32b362",
          withOutDescriptors: "c81dee7fd0870f89be8b79703bc2dbd5a25c",
          text: "c81dee7fd0870f89d935da760642ecc52de9"
        };
      (0, D.importAll)(t(5570));
      const qa = We((e => {
          let {
            descriptors: a = null,
            footer: n = null,
            href: i,
            img: s = null,
            titleSlug: d = null,
            style: r = {},
            className: m
          } = e;
          const [f, g] = (0, l.useState)(!1), {
            inView: p
          } = (0, G.YD)({
            threshold: .6
          }), [v, b] = (0, l.useState)({
            img_rating: s,
            rating_descriptors: a,
            rating_footer: n,
            url_rating: i
          }), {
            track: k
          } = (0, F.useGtmTrack)(), h = (0, Ha.Z)(), {
            data: x
          } = (0, u.useQuery)(Pa.GameData, {
            variables: {
              titleSlug: d
            },
            skip: !d
          });
          if ((0, l.useEffect)((() => {
              x && b(x?.game)
            }), [x]), (0, l.useEffect)((() => {
              p && !f && v.img_rating && (k({
                event: "page_section_impression",
                event_action: "impression",
                event_category: "page_section",
                event_label: "rating",
                element_placement: "rating"
              }), g(!0))
            }), [p]), !v.img_rating) return null;
          const y = !!v.rating_descriptors;
          return (0, c.jsxs)("div", {
            className: [Ra.rating, y ? Ra.withDescriptors : Ra.withOutDescriptors, m || ""].join(" "),
            style: (0, D.safeStyles)(r),
            children: [(0, c.jsx)(o, {
              to: v.url_rating,
              target: "_blank",
              children: (0, c.jsx)("img", {
                alt: h.formatMessage(Ua.components_ratings_link_alt, {
                  rating: (_ = v.img_rating, _.replace(/_/g, " ").split(".")[0].toUpperCase())
                }),
                src: t(4593)(`./${v.img_rating}`)
              })
            }), y && (0, c.jsxs)("div", {
              className: Ra.text,
              children: [(0, c.jsx)("p", {
                className: Ra.descriptors,
                dangerouslySetInnerHTML: {
                  __html: v.rating_descriptors.replace(/<br>/g, ", ").substring(0, v.rating_descriptors.length - 2)
                }
              }), v.rating_footer && (0, c.jsx)("hr", {}), v.rating_footer && (0, c.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: v.rating_footer.replace(/ \//g, ", ")
                }
              })]
            })]
          });
          var _
        })),
        Wa = {
          responsiveFlexBox: "c81dee7fd0870f89e4465a9b663320c80468",
          responsiveFlexItem: "c81dee7fd0870f89aa986045cb58e89e61c5",
          responsiveImage: "c81dee7fd0870f89c046dde6984fbd4bbe65"
        },
        Ya = e => {
          let {
            children: a,
            className: t,
            style: n
          } = e;
          return (0, c.jsx)("div", {
            className: [Wa.responsiveFlexBox, void 0 !== t ? t : ""].join(" "),
            style: n,
            children: a
          })
        },
        Za = {
          responsiveFlexItem: "c81dee7fd0870f89e53c0594adfb5e74c89e"
        },
        Qa = e => {
          let {
            children: a,
            className: t,
            style: n
          } = e;
          return (0, c.jsx)("div", {
            className: [Za.responsiveFlexItem, void 0 !== t ? t : ""].join(" "),
            style: n,
            children: a
          })
        },
        Xa = {
          responsiveGridBox: "c81dee7fd0870f89f6ded382294f08f6f94e",
          responsiveGridItem: "c81dee7fd0870f89c45f810f4e651dc7b020"
        },
        Ka = e => {
          let {
            children: a,
            cols: t,
            className: n,
            rows: i,
            style: s
          } = e;
          return void 0 === s && (s = {}), void 0 !== t && (s.gridTemplateColumns = `repeat(${t}, 1fr)`), void 0 !== i && (s.gridTemplateRows = `repeat(${i}, 1fr)`), (0, c.jsx)("div", {
            className: [Xa.responsiveGridBox, void 0 !== n ? n : ""].join(" "),
            style: s,
            children: a
          })
        },
        Ja = {
          responsiveGridBox: "c81dee7fd0870f89f0f3911598f858700269",
          responsiveGridItem: "c81dee7fd0870f89e874fac9914cac099c13"
        },
        et = e => {
          let {
            children: a,
            className: t,
            style: n
          } = e;
          return (0, c.jsx)("div", {
            className: [Ja.responsiveGridItem, void 0 !== t ? t : ""].join(" "),
            style: n,
            children: a
          })
        },
        at = {
          responsiveImage: "c81dee7fd0870f89da2dc19dd9dd16116d08"
        },
        tt = e => {
          let {
            src: a,
            className: t = "",
            animate: n,
            ariaLabel: i,
            style: s = {}
          } = e;
          const [d, r] = (0, D.usePreloadImg)(a);
          return d ? (s.backgroundImage = `url(${a})`, (0, c.jsx)("div", {
            role: "img",
            "aria-label": i ?? "R* Games",
            className: [at.responsiveImage, n ? at.animateBox : "", t].join(" "),
            style: {
              ...s,
              "--aspect-ratio": r.width / r.height
            }
          })) : null
        },
        nt = {
          responsiveSection: "c81dee7fd0870f89d06d23f23d3a5ecb6e50",
          maxWidth: "c81dee7fd0870f89b4e4e0028c2d2643c29a"
        },
        it = e => {
          let {
            children: a,
            className: t,
            style: n,
            maxWidth: i
          } = e;
          return (0, c.jsx)("section", {
            className: [nt.responsiveSection, void 0 !== t ? t : ""].join(" "),
            style: n,
            children: i ? (0, c.jsx)("div", {
              className: nt.maxWidth,
              children: a
            }) : a
          })
        },
        st = () => (0, c.jsx)(o, {
          className: "c81dee7fd0870f89ea893b17b58c097a0539",
          alt: "Rockstar Games Home",
          to: "/"
        }),
        dt = () => {
          const {
            pathname: e
          } = (0, r.useLocation)();
          return (0, l.useEffect)((() => {
            window.scrollTo(0, 0)
          }), [e]), null
        },
        rt = (0, l.forwardRef)(((e, a) => {
          const {
            threshold: t,
            callback: n,
            children: i,
            requireUser: s
          } = e, {
            track: d
          } = (0, F.useGtmTrack)(s), [r, c] = (0, l.useState)(a?.current);
          return (0, l.useEffect)((() => {
            a?.current && c(a.current)
          }), [a]), ((e, a, t) => {
            const [n, i] = (0, l.useState)({
              scrollDepths: e,
              scrollY: 0
            }), {
              scrollDepths: s,
              scrollY: d
            } = n;
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
            const r = (0, l.useCallback)((() => {
              const e = document.documentElement,
                d = document.body,
                c = t?.scrollTop || e.scrollTop || d.scrollTop,
                o = t?.scrollHeight || e.scrollHeight || d.scrollHeight,
                {
                  clientHeight: l
                } = e,
                m = c / (o - l) * 100;
              if (s) {
                const e = Math.min(...s, o);
                if (m >= e) {
                  const n = s.filter((a => a !== e));
                  0 === n.length && (t ?? window).removeEventListener("scroll", r), a && a({
                    scrollY: e,
                    scrollPercent: m,
                    remainingDepths: n
                  }), i({
                    scrollY: e,
                    scrollDepths: n
                  })
                }
              } else i({
                ...n,
                scrollY: m
              })
            }), [s, t, a]);
            (0, l.useEffect)((() => {
              if ("undefined" == typeof window) return;
              const e = t ?? window;
              return e.addEventListener("scroll", r), () => e.removeEventListener("scroll", r)
            }), [r])
          })(t, (e => {
            let {
              scrollY: a
            } = e;
            d({
              event: "page_scroll",
              event_category: "page_scroll",
              event_action: a,
              scroll_depth: a
            }), "function" == typeof n && n(a)
          }), r), i
        })),
        ct = (0, D.withTranslations)((e => {
          let {
            t: a
          } = e;
          const [t] = (0, l.useState)(""), n = (0, r.useNavigate)(), i = (0, u.useMutateState)();
          return (0, c.jsxs)("form", {
            action: "#",
            className: "c81dee7fd0870f89d190f154b297a6c860c6",
            onSubmit: e => {
              e.preventDefault(), i({
                navOpen: !1
              }), document.activeElement?.blur(), n(`/search?q=${e.target.q.value}`)
            },
            role: "search",
            children: [(0, c.jsx)("button", {
              type: "submit",
              role: "button",
              title: "Submit"
            }), (0, c.jsx)("input", {
              autoComplete: "off",
              defaultValue: t,
              enterKeyHint: "search",
              name: "q",
              placeholder: a("Search Rockstar Games")
            })]
          })
        })),
        ot = {
          skeleton: "c81dee7fd0870f89fab0211fa18900cc53a3",
          pulse: "c81dee7fd0870f89ed1b5302c777175acc6c",
          gen9Hero: "c81dee7fd0870f89fae9afdda65a4353f796"
        },
        lt = e => {
          let {
            skeleton: a
          } = e;
          return a ? (0, c.jsx)("div", {
            className: [ot.skeleton, ot[a]].join(" ")
          }) : null
        },
        mt = {
          bodySmall: "c81dee7fd0870f89ee6ce2e1ba16af34ab0c"
        },
        ft = e => {
          let {
            track: a,
            artist: t
          } = e;
          return (0, c.jsxs)("div", {
            className: mt.track,
            children: [(0, c.jsx)("p", {
              children: a
            }), (0, c.jsx)("p", {
              className: mt.bodySmall,
              children: t
            })]
          })
        },
        ut = e => {
          let {
            children: a
          } = e;
          return (0, c.jsxs)("div", {
            className: "c81dee7fd0870f89b3a19b796a7611f614b4",
            children: [(0, c.jsx)("h4", {
              className: "c81dee7fd0870f89c0086f5a32f4b4d73879",
              children: (0, c.jsx)(Oa.Z, {
                ...Ua.components_track_list_title
              })
            }), (0, c.jsx)("div", {
              className: "c81dee7fd0870f89cbbee7b911cca07d19ef",
              children: (0, c.jsx)("div", {
                className: "c81dee7fd0870f89dd4f4f3f5296eec6af3d",
                children: l.Children.map(l.Children.toArray(a), (e => (0, c.jsx)(ft, {
                  ...e?.props
                })))
              })
            })]
          })
        },
        gt = "c81dee7fd0870f89a3203eaeb7aa17a50d1d",
        pt = "c81dee7fd0870f89da5aca5b612ae73726aa",
        vt = {
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
        bt = e => {
          let {
            title: a = "thumbnail gallery",
            thumbsPerView: t = 3,
            loop: n = !1,
            navigation: i = !1,
            slideChildren: s = [],
            variants: d = {
              parent: void 0,
              main: void 0,
              thumbs: void 0
            },
            transition: r = {
              parent: void 0,
              main: void 0,
              thumbs: void 0
            }
          } = e;
          const {
            track: o
          } = (0, F.useGtmTrack)(), [m, f] = (0, l.useState)([Re.Rv, Re.o3, Re.tl]), [u, g] = (0, l.useState)(null), [p, v] = (0, l.useState)(null);
          return (0, l.useEffect)((() => {
            const e = [Re.Rv, Re.o3, Re.tl];
            i && e.push(Re.W_), f(e)
          }), [i]), (0, l.useEffect)((() => {
            if (!s) return;
            const e = s.map(((e, a) => (0, c.jsx)(I.o5, {
              children: e
            }, Symbol(a).toString())));
            v(e)
          }), [s]), p ? (0, c.jsxs)(Ee.E.div, {
            className: "c81dee7fd0870f89b0678d1be99248011414",
            variants: d.parent,
            transition: r.parent,
            initial: "initial",
            animate: "animate",
            children: [(0, c.jsx)(Ee.E.div, {
              className: gt,
              variants: d.main,
              transition: r.main,
              initial: "initial",
              animate: "animate",
              children: (0, c.jsx)(I.tq, {
                loop: n,
                navigation: i,
                pagination: {
                  clickable: !0
                },
                thumbs: {
                  swiper: u
                },
                modules: m,
                breakpoints: vt,
                className: gt,
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
                children: p
              })
            }), (0, c.jsx)(Ee.E.div, {
              className: pt,
              variants: d.thumbs,
              transition: r.thumbs,
              initial: "initial",
              animate: "animate",
              children: (0, c.jsx)(I.tq, {
                threshold: 50,
                onSwiper: g,
                loop: n,
                breakpoints: vt,
                slidesPerView: t,
                freeMode: !0,
                watchSlidesProgress: !0,
                modules: m,
                className: pt,
                children: p
              })
            })]
          }) : null
        };
      var kt = t(5066);
      const ht = e => {
          let {
            id: a = null,
            ids: t = null,
            setTitleDataPath: n = null,
            sync: i = !1
          } = e;
          const s = t ?? [a],
            {
              data: d
            } = (0, u.useQuery)(kt.TinaModulesInfo, {
              variables: {
                ids: s,
                sync: i
              },
              setTitleDataPath: n,
              skip: !s.length
            });
          return d?.tinaModulesInfo ?? null
        },
        xt = We((e => {
          let {
            components: a = {},
            id: t = null,
            ids: n = null,
            skeleton: i
          } = e;
          const s = ht({
            id: t,
            ids: n
          });
          if (!s) return (0, c.jsx)(lt, {
            skeleton: i
          });
          const d = s?.[0]?.tina;
          return d ? (0, c.jsx)(c.Fragment, {
            children: s.map(((e, t) => {
              let {
                tina: n
              } = e;
              return (0, c.jsx)(j.TinaParser, {
                components: a,
                tina: n,
                componentProps: {
                  tinaModulesInfo: s
                }
              }, t)
            }))
          }) : null
        })),
        yt = e => {
          let {
            children: a,
            style: t,
            theme: n
          } = e;
          const [i, s] = (0, l.useState)(n);
          return (0, l.useEffect)((() => {
            n && s(n)
          }), [n]), (0, c.jsx)("div", {
            className: "c81dee7fd0870f89e801cba24942f489915c",
            style: t,
            "data-theme": i,
            children: a
          })
        };
      var _t = t(7571);
      const Nt = {
          userVote: "c81dee7fd0870f89b5700f09cbc9b2b23c79",
          info: "c81dee7fd0870f89ad1b94250411ea25716e",
          voteContent: "c81dee7fd0870f89df8160525942f733eaef",
          loggedOutButtons: "c81dee7fd0870f89b199578f6d6c70794bf5",
          voteButtons: "c81dee7fd0870f89fdb3b7b24a86d3935f60",
          downVote: "c81dee7fd0870f89f56e8db24b31d902c755",
          upVote: "c81dee7fd0870f89fb08e95d888a401bad87",
          voteButtonActive: "c81dee7fd0870f89ae4dbdbe47f0d59447e3"
        },
        jt = e => {
          let {
            description: a,
            foreign_id: t = document.location.pathname,
            foreign_type: n = "url",
            title: i
          } = e;
          const {
            track: s
          } = (0, F.useGtmTrack)(), {
            loggedIn: d
          } = (0, F.useRockstarUser)(), {
            refetch: r
          } = (0, u.useQuery)(_t.UserGetVote, {
            skip: !0
          }), [o] = (0, u.useMutation)(_t.UserCastVote), [m, f] = (0, l.useState)(null), g = (0, l.useCallback)((async e => {
            s({
              event_action: m ? "like" : "dislike",
              event_category: "cta",
              event: "cta_" + (e ? "like" : "dislike"),
              event_label: t
            });
            const a = {
                foreign_id: t,
                foreign_type: n,
                vote: e
              },
              i = await o({
                variables: a
              });
            f(i?.data?.userCastVote?.vote ?? null)
          }), [t, n]);
          return (0, l.useEffect)((() => {
            (async () => {
              if (!d || !t || !n) return;
              const e = await r({
                foreign_id: t,
                foreign_type: n
              });
              f(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [t, n, d]), (0, c.jsx)("div", {
            className: Nt.userVote,
            children: (0, c.jsxs)("div", {
              className: Nt.voteContent,
              children: [(0, c.jsxs)("div", {
                className: Nt.info,
                children: [(0, c.jsx)("h3", {
                  children: i
                }), (0, c.jsx)("p", {
                  children: a
                })]
              }), (0, c.jsxs)("div", {
                className: [Nt.voteButtons, d ? "" : Nt.loggedOutButtons].join(" "),
                children: [(0, c.jsx)("button", {
                  onClick: () => g(!0),
                  className: [Nt.upVote, m ? Nt.voteButtonActive : ""].join(" "),
                  type: "button",
                  "aria-label": "Vote up"
                }), (0, c.jsx)("button", {
                  className: [Nt.downVote, !1 === m ? Nt.voteButtonActive : ""].join(" "),
                  onClick: () => g(!1),
                  type: "button",
                  "aria-label": "Vote down"
                })]
              })]
            })
          })
        },
        St = {
          carousel: "c81dee7fd0870f89df4cbe643bcdb344e8ed",
          text: "c81dee7fd0870f89d3ebdcf6ee34d0d8705b",
          info: "c81dee7fd0870f89af49b9b914c87b1a71ba",
          active: "c81dee7fd0870f89b07dd615705f46f48d1c",
          title: "c81dee7fd0870f89b754611647e7892b662b",
          gameTitle: "c81dee7fd0870f89cffbee9a975cdcd3e17a",
          videoTitle: "c81dee7fd0870f89e1309a6036854ee49110",
          cta: "c81dee7fd0870f89ad98fcae5e4b7426ebe2",
          track: "c81dee7fd0870f89cfeb3d9edccb75fcfc61",
          disableClick: "c81dee7fd0870f89eb53aed711d78304c81a",
          items: "c81dee7fd0870f89da6857a73ff2d80fa6fc",
          dragging: "c81dee7fd0870f89c2aec297ba49d82429e9",
          dots: "c81dee7fd0870f89e49d717d9755f47a7ca3"
        },
        wt = (0, D.withLocale)((e => {
          let {
            locale: a,
            t,
            videos: n
          } = e;
          const {
            setBodyIsScrollable: i
          } = (0, D.useBodyScrollable)(), [s, d] = (0, l.useState)(0), [r, m] = (0, l.useState)(0), u = (0, l.useRef)(null), g = (0, l.useRef)(null);
          return (0, l.useEffect)((() => {
            if (!u.current || g.current) return;
            const e = new(f())(u.current);
            e.get("press").set({
              time: 0
            }), e.get("tap").set({
              time: 150
            });
            const a = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
              t = () => {
                d(s - 1 < 0 ? 0 : s - 1), m(0)
              },
              r = () => {
                const e = s + 1 >= n.length - 1 ? n.length - 1 : s + 1;
                d(e), m(0)
              },
              c = e => {
                m(e.isFinal ? 0 : e.deltaX), "panleft" !== e.additionalEvent && "panright" !== e.additionalEvent || !g.current?.classList.contains(St.dragging) || a() && i(!1)
              },
              o = () => {
                a() && i(!0), m(0)
              },
              l = e => {
                "press" === e.type && u.current?.classList.add(`${St.disableClick}`), "tap" === e.type && (u.current?.classList.remove(`${St.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
              },
              p = () => {
                a() && i(!0), u.current && u.current.classList.remove(`${St.disableClick}`)
              },
              v = () => {
                a() && i(!0)
              };
            return g.current.addEventListener("transitionend", v), e.on("swiperight", t), e.on("swipeleft", r), e.on("pan", c), e.on("panend", o), e.on("press tap", l), e.on("pressup", p), () => {
              e.off("swiperight", t), e.off("swipeleft", r), e.off("pan", c), e.off("panend", o), e.off("press tap", l), e.off("pressup", p), g.current && g.current.removeEventListener("transitionend", v), m(0)
            }
          }), [u.current, s]), (0, c.jsxs)("section", {
            className: St.carousel,
            children: [(0, c.jsx)("div", {
              className: St.track,
              ref: u,
              children: (0, c.jsx)("div", {
                className: `${St.items} ${0!==r?St.dragging:""}`,
                ref: g,
                style: {
                  transform: `translateX(calc(-${100*s}% + ${r}px))`
                },
                children: n.map(((e, a) => (0, c.jsx)(o, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through screencap",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  className: s === a ? St.active : "",
                  role: "link",
                  title: e.title,
                  children: (0, c.jsx)(Lt, {
                    video: e,
                    active: s === a
                  })
                }, e.id)))
              })
            }), (0, c.jsxs)("footer", {
              children: [(0, c.jsx)("div", {
                className: St.text,
                children: n.map(((e, n) => (0, c.jsx)(o, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through footer",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  role: "link",
                  title: e.title,
                  children: (0, c.jsxs)("div", {
                    className: [St.info, n === s ? St.active : ""].join(" "),
                    children: [(0, c.jsxs)("div", {
                      className: St.title,
                      children: [(0, c.jsx)("div", {
                        className: St.gameTitle,
                        children: `${e.game.title}${"fr_fr"===a?" ":""}`
                      }), (0, c.jsx)("h2", {
                        className: St.videoTitle,
                        children: `${e.title}`
                      })]
                    }), (0, c.jsx)(N, {
                      className: St.cta,
                      children: t("Watch Now")
                    })]
                  })
                }, e.id)))
              }), (0, c.jsx)("div", {
                className: St.dots,
                children: n.map(((e, a) => (0, c.jsx)("button", {
                  "aria-label": `Slide ${a}`,
                  "data-gtm-category": "Marquee",
                  "data-gtm-action": "Dot click",
                  "data-gtm-label": `Dot clicked to ${a}`,
                  onClick: () => d(a),
                  className: s === a ? St.active : "",
                  type: "button"
                }, e.id)))
              })]
            })]
          })
        })),
        Tt = {
          videoList: "c81dee7fd0870f89ee6bbf953d025e89de3e",
          sectionHeader: "c81dee7fd0870f89aff592c13e7c6efe9403",
          arrowNav: "c81dee7fd0870f89c4d1686e768de3bb2a72",
          items: "c81dee7fd0870f89a5555dcd894e6f017244",
          trackWrapper: "c81dee7fd0870f89ea0cb5c1e9e96de1d7ba",
          track: "c81dee7fd0870f89b093f49b66f63b976945",
          dragging: "c81dee7fd0870f89cdce54f2f81ee8d487b9",
          arrow: "c81dee7fd0870f89a93e9dfb22682f51e8fa",
          previous: "c81dee7fd0870f89f72ca354ba820e8a0248",
          next: "c81dee7fd0870f89e839ba4e0441e11b4480",
          disabled: "c81dee7fd0870f89c37dca9479cc10f4f30e"
        },
        Ct = (0, D.withTranslations)((e => {
          let {
            vids: a,
            games: t,
            title: n,
            gameTitleNecessary: i
          } = e;
          const s = void 0 !== t ? "games" : "videos",
            d = "videos" === s ? a : t.results,
            r = (0, l.useRef)(null),
            [o, m] = (0, l.useState)(0),
            [u, g] = (0, l.useState)(0),
            p = e => {
              const a = Math.ceil(d.length / o);
              e < 0 ? e = 0 : e >= a - 1 && (e = a - 1), g(e)
            },
            [v, b] = (0, l.useState)(0);
          let k;
          return (0, l.useEffect)((() => {
            const e = () => {
              const e = e => window.matchMedia(`(max-width: ${e})`).matches,
                a = e("768px") ? 1 : e("990px") || e("1440px") ? 2 : e("1920px") ? 3 : 4;
              m(a)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [o]), (0, l.useEffect)((() => {
            if (r.current) {
              const e = new(f())(r.current),
                a = () => {
                  p(u - 1), b(0)
                },
                t = () => {
                  p(u + 1), b(0)
                },
                n = e => {
                  b(e.isFinal ? 0 : e.deltaX)
                },
                i = () => {
                  b(0)
                };
              return e.on("swiperight", a), e.on("swipeleft", t), e.on("pan", n), e.on("panend", i), () => {
                e.off("swiperight", a), e.off("swipeleft", t), e.off("pan", n), e.off("panend", i), b(0)
              }
            }
          }), [r.current, u]), k = "games" === s ? (0, c.jsx)(c.Fragment, {
            children: t.results.map((e => (0, c.jsx)(Oe, {
              game: e,
              dontOverrideTo: !0,
              to: `/videos?type=game&gameId=${e.id}`
            }, e.id)))
          }) : (0, c.jsx)(c.Fragment, {
            children: a.map((e => (0, c.jsx)(Vt, {
              video: e,
              gameTitleNecessary: i
            }, e.id)))
          }), (0, c.jsxs)("section", {
            className: Tt.videoList,
            children: [(0, c.jsxs)("h3", {
              className: Tt.sectionHeader,
              children: [n, (0, c.jsxs)("div", {
                className: Tt.arrowNav,
                children: [(0, c.jsx)("div", {
                  className: [Tt.arrow, Tt.previous, 0 === u ? Tt.disabled : ""].join(" "),
                  onClick: () => p(u - 1)
                }), (0, c.jsx)("div", {
                  className: [Tt.arrow, Tt.next, u === Math.ceil(d.length / o) - 1 ? Tt.disabled : ""].join(" "),
                  onClick: () => p(u + 1)
                })]
              })]
            }), (0, c.jsx)("div", {
              className: Tt.items,
              children: (0, c.jsx)("div", {
                className: Tt.trackWrapper,
                children: (0, c.jsx)("div", {
                  className: [Tt.track, 0 !== v ? Tt.dragging : ""].join(" "),
                  ref: r,
                  style: {
                    transform: `translateX(calc(-${100*u}% + ${v}px - (var(--standard-grid-gap) * ${u}))`,
                    gridAutoColumns: `calc(100 / ${o} * 1% - calc(var(--standard-grid-gap) * (${o-1}/${o}))`
                  },
                  children: k
                })
              })
            })]
          })
        })),
        Et = (0, D.withTranslations)((e => {
          let {
            error: a,
            t,
            domain: n = ""
          } = e;
          console.error({
            error: a
          });
          let i = a?.message ?? t("error-404-new");
          i = t("error-404-new");
          const s = a?.code ?? 398;
          return (0, c.jsxs)("div", {
            className: "c81dee7fd0870f89acc888afe9790ff737d7",
            children: [(0, c.jsx)("h3", {
              children: `${i} (${s})`
            }), (0, c.jsx)(o, {
              to: "/",
              children: t("Home")
            }), "clr" !== n && (0, c.jsx)(ct, {})]
          })
        })),
        It = {
          videoPreview: "c81dee7fd0870f89f57a66c11909dd3794fc",
          card: "c81dee7fd0870f89e76ee574eec60bb13889",
          info: "c81dee7fd0870f89ba5ee66f0a4a93fd6686",
          title: "c81dee7fd0870f89ea738c16af3cfa82d464",
          screencap: "c81dee7fd0870f89d42fe4eaa72f9d83a937",
          screencapLoaded: "c81dee7fd0870f89c0b5ce25b1edb0582326",
          gameTitle: "c81dee7fd0870f89c05b6eea8e77156def92"
        },
        Lt = e => {
          let {
            video: a
          } = e;
          const [t] = (0, D.usePreloadImg)(a.screencap);
          return (0, c.jsx)("div", {
            className: [It.screencap, t ? It.screencapLoaded : ""].join(" "),
            style: {
              background: `url(${a.screencap}) center/cover`
            }
          })
        },
        Vt = e => {
          let {
            gameTitleNecessary: a = !0,
            openInNewWindow: t = !1,
            video: n
          } = e;
          const i = `/videos/${n.id}`,
            s = {
              className: It.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": i
            },
            d = (0, c.jsxs)("div", {
              className: It.card,
              children: [(0, c.jsx)(Lt, {
                video: n
              }), (0, c.jsxs)("div", {
                className: It.info,
                children: [a ? (0, c.jsx)("div", {
                  className: It.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: n.game.title
                  }
                }) : "", (0, c.jsx)("h5", {
                  className: It.title,
                  dangerouslySetInnerHTML: {
                    __html: n.title
                  }
                })]
              })]
            });
          return t ? (0, c.jsx)("a", {
            href: i,
            target: "_blank",
            ...s,
            children: d
          }) : (0, c.jsx)(o, {
            to: i,
            ...s,
            children: d
          })
        };
      class Bt extends l.Component {
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
          return null !== this.state.error.code ? (0, c.jsx)(Et, {
            error: this.state.error
          }) : this.props.children
        }
      }
      const $t = function(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return function(t) {
          return (0, c.jsx)(Bt, {
            header: a,
            children: (0, c.jsx)(e, {
              ...t
            })
          })
        }
      };
      var zt = t(1085),
        Dt = t(9683),
        Ft = t(423);
      const Mt = (0, l.forwardRef)(((e, a) => {
          const {
            children: t,
            tag: n = "div"
          } = e, i = zt.m[n];
          return (0, c.jsx)(Dt.X, {
            features: Ft.H,
            children: (0, c.jsx)(i, {
              ref: a,
              ...e,
              children: t
            })
          })
        })),
        At = {
          visible: {
            opacity: 1
          },
          hidden: {
            opacity: 0
          }
        },
        Pt = {
          ease: "easeIn",
          duration: .4
        },
        Gt = e => {
          let {
            children: a
          } = e;
          return (0, c.jsx)(Ee.E.div, Object.assign({
            className: "c81dee7fd0870f89e0dc5d79dc36b7b8c013",
            variants: At,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: Pt
          }, {
            children: a
          }))
        },
        Ot = e => a => (0, c.jsx)(Gt, {
          children: (0, c.jsx)(e, Object.assign({}, a))
        }),
        Ht = {
          visible: {
            opacity: 1,
            y: 0
          },
          hidden: {
            opacity: 0,
            y: 40
          }
        },
        Ut = {
          ease: "easeIn",
          duration: .75
        },
        Rt = e => {
          let {
            children: a
          } = e;
          return (0, c.jsx)(Ee.E.div, {
            className: "c81dee7fd0870f89df9075608452635d71d4",
            variants: Ht,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: Ut,
            children: a
          })
        },
        qt = e => a => (0, c.jsx)(Rt, {
          children: (0, c.jsx)(e, {
            ...a
          })
        }),
        Wt = {
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
        Yt = {
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
        Zt = function() {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "collapsed";
          return Yt[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "imageMask"][e]
        };
      var Qt = t(5710);
      const Xt = JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[300,300,0]},"a":{"k":[0,0,0]},"s":{"k":[244,244,100]}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"k":[100,100]},"p":{"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"tm","s":{"k":[{"i":{"x":[0.439],"y":[1.016]},"o":{"x":[0.561],"y":[0.015]},"n":["0p439_1p016_0p561_0p015"],"t":5,"s":[100],"e":[0]},{"t":33.0000013441176}],"ix":1},"e":{"k":[{"i":{"x":[0.439],"y":[1.017]},"o":{"x":[0.561],"y":[0.016]},"n":["0p439_1p017_0p561_0p016"],"t":0,"s":[100],"e":[0]},{"t":30.0000012219251}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"},{"ty":"st","fillEnabled":true,"c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":16},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"}],"ip":0,"op":900.000036657751,"st":0,"bm":0,"sr":1}],"v":"4.5.3","ddd":0,"ip":1.00000004073083,"op":33.0000013441175,"fr":29.9700012207031,"w":600,"h":600}'),
        Kt = JSON.parse('{"v":"5.7.3","fr":60,"ip":0,"op":64,"w":300,"h":300,"nm":"Dot_Loading","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"center","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":10,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":22,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":34,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.667,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"right","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":5,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":17,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":29,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.333,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":12,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":24,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0}],"markers":[]}'),
        Jt = {
          SPINNING: "spinning",
          THREE_DOTS: "threeDots"
        },
        en = e => {
          let a, {
            type: t = Jt.SPINNING
          } = e;
          switch (t) {
            case Jt.THREE_DOTS:
              a = Kt;
              break;
            case Jt.SPINNING:
            default:
              a = Xt
          }
          return (0, c.jsx)(Qt.Z, {
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
    9602: e => {
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
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
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
      var n = {};

      function i(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var n = e.definitions[t];
          if (n.name && n.name.value == a) return n
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.GetAudioAlbum = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var s = n[a] || new Set,
          d = new Set,
          r = new Set;
        for (s.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var c = r;
          r = new Set, c.forEach((function(e) {
            d.has(e) || (d.add(e), (n[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return d.forEach((function(a) {
          var n = i(e, a);
          n && t.definitions.push(n)
        })), t
      }(a, "GetAudioAlbum")
    },
    2632: e => {
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
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
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
      var n = {};

      function i(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var n = e.definitions[t];
          if (n.name && n.name.value == a) return n
        }
      }

      function s(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var s = n[a] || new Set,
          d = new Set,
          r = new Set;
        for (s.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var c = r;
          r = new Set, c.forEach((function(e) {
            d.has(e) || (d.add(e), (n[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return d.forEach((function(a) {
          var n = i(e, a);
          n && t.definitions.push(n)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.UserGetVote = s(a, "UserGetVote"), e.exports.UserCastVote = s(a, "UserCastVote")
    },
    5066: e => {
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
                    value: "tina_uploads"
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
                        value: "type"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "directory"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      alias: {
                        kind: "Name",
                        value: "filename"
                      },
                      name: {
                        kind: "Name",
                        value: "input_filename"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      alias: {
                        kind: "Name",
                        value: "hashed_filename"
                      },
                      name: {
                        kind: "Name",
                        value: "filename"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      alias: {
                        kind: "Name",
                        value: "previewSrc"
                      },
                      name: {
                        kind: "Name",
                        value: "preview_src"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "full_src"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "prod"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "created_by"
                      },
                      arguments: [],
                      directives: []
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
          end: 1222
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
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
        body: "query TinaModulesList($types: [String], $locale: String!) {\n    tinaModulesList(types: $types, locale: $locale) {\n        results {\n            id_hash\n            id\n            title\n            type\n        }\n    }\n}\n\nquery TinaModulesInfo(\n    $ids: [String]!\n    $locale: String!\n    $sync: Boolean = false\n    $cache: Boolean = false\n) {\n    tinaModulesInfo(ids: $ids, locale: $locale, cache: $cache) {\n        id: id_hash\n        title\n        title_doc\n        type\n        sync_hash\n        to\n        visible\n        children {\n            title\n            id_hash\n            to\n            tina {\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n        tina_uploads {\n            id\n            type\n            directory\n            filename: input_filename\n            hashed_filename: filename\n            previewSrc: preview_src\n            full_src\n            prod\n            created_by\n        }\n        tina {\n            payload\n            variables {\n                keys\n                _translations @include(if: $sync) {\n                    locale\n                    keys\n                }\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function i(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var n = e.definitions[t];
          if (n.name && n.name.value == a) return n
        }
      }

      function s(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var s = n[a] || new Set,
          d = new Set,
          r = new Set;
        for (s.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var c = r;
          r = new Set, c.forEach((function(e) {
            d.has(e) || (d.add(e), (n[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return d.forEach((function(a) {
          var n = i(e, a);
          n && t.definitions.push(n)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesList = s(a, "TinaModulesList"), e.exports.TinaModulesInfo = s(a, "TinaModulesInfo")
    },
    7571: e => {
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
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
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
      var n = {};

      function i(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var n = e.definitions[t];
          if (n.name && n.name.value == a) return n
        }
      }

      function s(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var s = n[a] || new Set,
          d = new Set,
          r = new Set;
        for (s.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var c = r;
          r = new Set, c.forEach((function(e) {
            d.has(e) || (d.add(e), (n[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return d.forEach((function(a) {
          var n = i(e, a);
          n && t.definitions.push(n)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.UserGetVote = s(a, "UserGetVote"), e.exports.UserCastVote = s(a, "UserCastVote")
    },
    9514: (e, a, t) => {
      var n = {
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
      n.loc.source = {
        body: '#import "@rockstargames/graph-client/operations/fragments/newswire-post.graphql"\n#import "@rockstargames/graph-client/operations/fragments/paging.graphql"\n\nquery NewswireList(\n    $locale: String!\n    $page: Int!\n    $tagId: Int\n    $metaUrl: String!\n    $cache: Boolean = true\n) {\n    meta: metaUrl(url: $metaUrl, domain: "www", locale: $locale) {\n        title\n    }\n    posts(page: $page, tagId: $tagId, locale: $locale) {\n        paging {\n            ...paging\n        }\n        results {\n            ...postFields\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var i = {};

      function s(e) {
        return e.filter((function(e) {
          if ("FragmentDefinition" !== e.kind) return !0;
          var a = e.name.value;
          return !i[a] && (i[a] = !0, !0)
        }))
      }

      function d(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var t = e.type;
          "NamedType" === t.kind && a.add(t.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          d(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          d(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          d(e, a)
        }))
      }
      n.definitions = n.definitions.concat(s(t(6077).definitions)), n.definitions = n.definitions.concat(s(t(9349).definitions));
      var r = {};

      function c(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var n = e.definitions[t];
          if (n.name && n.name.value == a) return n
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          d(e, a), r[e.name.value] = a
        }
      })), e.exports = n, e.exports.NewswireList = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [c(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var n = r[a] || new Set,
          i = new Set,
          s = new Set;
        for (n.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var d = s;
          s = new Set, d.forEach((function(e) {
            i.has(e) || (i.add(e), (r[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var n = c(e, a);
          n && t.definitions.push(n)
        })), t
      }(n, "NewswireList")
    },
    3631: (e, a, t) => {
      var n = {
        "./left.svg": 4377,
        "./pc.svg": 7170,
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

      function i(e) {
        var a = s(e);
        return t(a)
      }

      function s(e) {
        if (!t.o(n, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return n[e]
      }
      i.keys = function() {
        return Object.keys(n)
      }, i.resolve = s, e.exports = i, i.id = 3631
    },
    5570: (e, a, t) => {
      var n = {
        "./cero_a.png": 8865,
        "./cero_b.svg": 1314,
        "./cero_c.svg": 2123,
        "./cero_d.svg": 8064,
        "./cero_z.svg": 3353,
        "./djctq_10.svg": 6456,
        "./djctq_12.svg": 2790,
        "./djctq_14.svg": 9453,
        "./djctq_16.svg": 8906,
        "./djctq_18.svg": 6600,
        "./djctq_er.svg": 4177,
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
        "./nmc_3.svg": 3628,
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
        "./rars_0.svg": 2921,
        "./rars_12.svg": 3749,
        "./rars_16.svg": 8127,
        "./rars_18.svg": 2224,
        "./rars_6.svg": 6295,
        "./usk_0.svg": 4442,
        "./usk_12.svg": 202,
        "./usk_16.svg": 7597,
        "./usk_18.svg": 1187,
        "./usk_6.svg": 483
      };

      function i(e) {
        var a = s(e);
        return t(a)
      }

      function s(e) {
        if (!t.o(n, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return n[e]
      }
      i.keys = function() {
        return Object.keys(n)
      }, i.resolve = s, e.exports = i, i.id = 5570
    },
    4593: (e, a, t) => {
      var n = {
        "./cero_a.png": 8865,
        "./cero_b.svg": 1314,
        "./cero_c.svg": 2123,
        "./cero_d.svg": 8064,
        "./cero_z.svg": 3353,
        "./djctq_10.svg": 6456,
        "./djctq_12.svg": 2790,
        "./djctq_14.svg": 9453,
        "./djctq_16.svg": 8906,
        "./djctq_18.svg": 6600,
        "./djctq_er.svg": 4177,
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
        "./nmc_3.svg": 3628,
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
        "./rars_0.svg": 2921,
        "./rars_12.svg": 3749,
        "./rars_16.svg": 8127,
        "./rars_18.svg": 2224,
        "./rars_6.svg": 6295,
        "./usk_0.svg": 4442,
        "./usk_12.svg": 202,
        "./usk_16.svg": 7597,
        "./usk_18.svg": 1187,
        "./usk_6.svg": 483
      };

      function i(e) {
        var a = s(e);
        return t(a)
      }

      function s(e) {
        if (!t.o(n, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return n[e]
      }
      i.keys = function() {
        return Object.keys(n)
      }, i.resolve = s, e.exports = i, i.id = 4593
    },
    9065: (e, a, t) => {
      var n = {
        "./bounty.png": 3709,
        "./collector.png": 4041,
        "./moonshiner.png": 1012,
        "./naturalist.png": 1325,
        "./trader.png": 4669
      };

      function i(e) {
        var a = s(e);
        return t(a)
      }

      function s(e) {
        if (!t.o(n, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return n[e]
      }
      i.keys = function() {
        return Object.keys(n)
      }, i.resolve = s, e.exports = i, i.id = 9065
    },
    4377: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/bcaca8dc494732cb2ca1.svg"
    },
    7170: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/af7a4b3f215a9ffd7074.svg"
    },
    73: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/c362395c2a7ba52d8e93.svg"
    },
    7561: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/399e4fadd28201f041fe.svg"
    },
    4262: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/fa23bf61b10367b5ae17.svg"
    },
    7601: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/3b3e471f51bfbca10f05.svg"
    },
    4394: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/fc5864f34c72e5763bea.svg"
    },
    9545: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/cd7ecd01ec2f916d6c4b.svg"
    },
    7012: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/59632b3673146be461a4.svg"
    },
    493: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/3852a2c6a70d09be710a.svg"
    },
    1699: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/1b0d3aef02ce7792cd29.svg"
    },
    8865: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/8c7a9cd5ec41c111d3b6.png"
    },
    1314: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/67093e1a302f3ea0283a.svg"
    },
    2123: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/8ec150b1b482ad8d0a7b.svg"
    },
    8064: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/20b20fda68e332e63fa6.svg"
    },
    3353: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/c6995970d8e01c2c4dd9.svg"
    },
    6456: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/35a89dc2383567dda431.svg"
    },
    2790: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/6c30d58988e83ad29205.svg"
    },
    9453: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/a5b1afad363b1b7735c5.svg"
    },
    8906: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/50e0ab20aa0e59e7fcac.svg"
    },
    6600: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/fa7f2386e30086817d31.svg"
    },
    4177: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/4d1d1cf797164efc892c.svg"
    },
    7429: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/528950a2be1731688d72.svg"
    },
    9851: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/963570be2bfdcc0ca89e.svg"
    },
    1986: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/c10e71ab00b0c2b2dccf.svg"
    },
    4180: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/f1eb8161649818ceacf6.svg"
    },
    8436: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/a816ad46b6f08d4414b8.svg"
    },
    627: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/f85fb23fb7ed1804f4f6.svg"
    },
    5507: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/1b1cd49a8418385edac5.svg"
    },
    4010: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/9a11758343d2a632ed68.svg"
    },
    7909: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/24d49820dabbd2748db5.svg"
    },
    7651: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/86943948e18e1e8c54f9.svg"
    },
    3803: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/98229a0570fde1ef76ed.svg"
    },
    1359: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/5283dd0687946eae809f.svg"
    },
    8185: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/ac083be354061985f3d5.svg"
    },
    873: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/f5fb073c243268c3633d.svg"
    },
    9024: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/33df2d0dcce33e5a29b8.svg"
    },
    9634: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/29109a7ae103c4891306.svg"
    },
    6767: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/bc851ba17da36dd3fbdf.svg"
    },
    6425: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/e84a35ae24296e235a52.svg"
    },
    8305: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/04a48aa65ce5f49fbdbd.svg"
    },
    3310: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/3650c9bd50ec49d4ae36.svg"
    },
    4581: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/3b5a79aab7050b6cd2a1.svg"
    },
    2722: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/24b09a27f4a290d2efd2.svg"
    },
    4380: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/95b097164843052b3d4c.svg"
    },
    5488: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/553191a65708e0897bbd.svg"
    },
    9322: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/66898cb8600ecca9e820.svg"
    },
    4157: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/60dddf79806105dcd7d6.svg"
    },
    3628: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/a16c3988b9d1266fc06f.svg"
    },
    5171: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/79a826bad9c6b552cef6.svg"
    },
    6833: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/a69758e8859b31e27a91.svg"
    },
    35: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/ddc5135e44be59b6788a.svg"
    },
    4345: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/317c7f37447e59b012b8.svg"
    },
    5360: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/7091eba4cdc3b6266b25.svg"
    },
    2698: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/ae70a62c313eb59b85f8.svg"
    },
    2404: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/b738b9917ed897df12eb.svg"
    },
    7368: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/4bebb076dd4d5af34534.svg"
    },
    2322: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/0793ba431e6cb3b4ebd4.svg"
    },
    8045: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/ea994098378db0c3ba36.svg"
    },
    9194: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/ca00a1681d9193d035f3.svg"
    },
    9306: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/9a7d212e208c1e328c2b.svg"
    },
    4340: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/0cba9268ea4237822a99.svg"
    },
    2921: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/a822667d13903e1af53a.svg"
    },
    3749: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/c6438516049c1946a96f.svg"
    },
    8127: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/00a5e040d20521981056.svg"
    },
    2224: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/3494668fa10dfee7d641.svg"
    },
    6295: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/abf2a4c12282038ee2eb.svg"
    },
    4442: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/cd3705c8cf30610c1cec.svg"
    },
    202: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/645ca113a9a32413e0b8.svg"
    },
    7597: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/4b9d0e0092ae12adef9b.svg"
    },
    1187: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/f8c03943e3cfbb624fc7.svg"
    },
    483: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/985b14d49bbd8590cd5a.svg"
    },
    3709: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/64eec66255502324f132.png"
    },
    4041: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/9537e3e382ba4f6f5495.png"
    },
    1012: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/bb0fcc3f660c6509722f.png"
    },
    1325: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/6951b0d6464a85060b39.png"
    },
    4669: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/7afad682fc3513291147.png"
    },
    8933: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/238d47d94df76c60c0d5.jpg"
    },
    8280: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/3bf9319f08a1027930f9.png"
    }
  }
]);