(self.webpackChunk_rockstargames_components = self.webpackChunk_rockstargames_components || []).push([
  [648], {
    3699: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => m
      });
      var n = t(4932),
        i = t(3205),
        s = t.n(i),
        r = t(9542),
        c = t(9929);
      const o = {
        grid: "_93f8151fb9eb5ac4a913315bef66f9841193",
        itemList: "_93f8151fb9eb5ac4b47c4ec3ee5a7b25272a",
        gtaplus: "_93f8151fb9eb5ac4f62d53aa88002b52a1ea",
        rdo: "_93f8151fb9eb5ac4cb929b69e72d0b745821",
        noImg: "_93f8151fb9eb5ac4d488e38df25c0b9a4c20",
        gtao: "_93f8151fb9eb5ac4ce5462c5860712b67002",
        custom: "_93f8151fb9eb5ac4a1eadd442b1479e27d60",
        yellow: "_93f8151fb9eb5ac4eb8d7b0da6967262905d",
        hotPink: "_93f8151fb9eb5ac4ef6a35989cf7f2815a81",
        red: "_93f8151fb9eb5ac4f16f93451d76eff119ef",
        turquoise: "_93f8151fb9eb5ac4b68b8022cefb15c42493",
        purple: "_93f8151fb9eb5ac4b81f26d04bea51236b12",
        teal: "_93f8151fb9eb5ac4eabe5a1697de9f60444b",
        blue: "_93f8151fb9eb5ac4cab0d114386be0534b0a",
        green: "_93f8151fb9eb5ac4e6521308cf3d4cbcd0eb",
        darkRed: "_93f8151fb9eb5ac4da07f0da46dc71261efb",
        darkBlue: "_93f8151fb9eb5ac4db540e4cd55e1fd039f6",
        goldenrod: "_93f8151fb9eb5ac4d2ccafcdd0dbfba68f90",
        skull: "_93f8151fb9eb5ac4d5f11f6a0da20e30e1cc"
      };
      var l = t(6160);
      const {
        sanitize: d
      } = s(), m = e => {
        let {
          list: a,
          string: t,
          starColor: i,
          style: s,
          className: m,
          game: f,
          noImg: u,
          columns: b,
          mobileColumns: g
        } = e;
        const [p, v] = (0, n.useState)(null), k = t ? t.split("_#_") : a;
        return (0, n.useEffect)((() => {
          v(a)
        }), [a]), t || a ? b && p ? (0, l.jsx)("div", {
          className: o.grid,
          style: {
            "--unordered-list-grid-column": b,
            "--unordered-list-grid-column-mobile": g ?? b
          },
          children: (0, l.jsx)("ul", {
            style: (0, c.safeStyles)(s),
            className: (0, r.classList)(o.itemList, o.noImg, o[i], o[f]),
            children: p.map((e => (0, l.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: d(e.content)
              }
            }, e.content)))
          })
        }) : (0, l.jsx)("ul", {
          style: (0, c.safeStyles)(s),
          className: (0, r.classList)(o.itemList, o.custom, u ? o.noImg : "", i ? o[i] : "", f ? o[f] : "", m ?? ""),
          children: k.map((e => (0, l.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: d(e?.content ?? e)
            }
          }, e?.content)))
        }) : null
      }
    },
    8648: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        A: () => l,
        AudioPlayer: () => h,
        Badge: () => _,
        Brands: () => x,
        Button: () => N,
        ButtonGroup: () => E,
        CalloutSection: () => Y,
        Carousel: () => F,
        ConditionalBlock: () => G,
        CountryInputField: () => K,
        Cta: () => J,
        DescriptionArea: () => me,
        DiscountsBadge: () => pe,
        DotLoader: () => ke,
        Dropdown: () => _e,
        Embed: () => je,
        ExpandingPlatformButton: () => Be,
        FadeInContent: () => Fe,
        GameCard: () => n,
        GameSiteHeader: () => Ge,
        Gen9Button: () => C,
        Gen9CoreCarousel: () => qe,
        Grid: () => ye,
        HTMLElement: () => ta,
        Hero: () => Je,
        HookStore: () => A,
        ImageWithBadge: () => la,
        LanguageSelector: () => ia,
        LayeredImage: () => ca,
        LoadingAnimation: () => qt,
        MultiSourceImage: () => se,
        NewswireBlocks: () => _a,
        NewswireCard: () => ua,
        NewswireList: () => pa,
        NewswireRelated: () => ka,
        NewswireTag: () => ma,
        Paging: () => Na,
        ParallaxCacheBuster: () => Sa,
        ParallaxInnerLayer: () => Ca,
        ParallaxOuterLayer: () => La,
        ParallaxWrapper: () => Ta,
        PromoModule: () => Va,
        Rating: () => za,
        ResponsiveFlexBox: () => Ma,
        ResponsiveFlexItem: () => Pa,
        ResponsiveGridBox: () => Ha,
        ResponsiveGridItem: () => qa,
        ResponsiveImg: () => Wa,
        ResponsiveSection: () => Qa,
        RockstarLogo: () => Xa,
        ScrollToTop: () => Za,
        ScrollTracker: () => Ka,
        SearchBox: () => Ja,
        Separator: () => oe,
        Skeleton: () => at,
        TextFit: () => ue,
        ThumbsGallery: () => ot,
        TinaModuleFetchNRender: () => mt,
        TinaWrapper: () => ft,
        TrackList: () => it,
        UnorderedList: () => re.Z,
        UserVote: () => gt,
        VideoCard: () => i,
        VideoCarousel: () => vt,
        VideoList: () => ht,
        Wasted: () => _t,
        framer: () => r,
        useTinaModuleFetchByIds: () => dt,
        withSearchbarErrorBoundary: () => St,
        withSimpleErrorBoundary: () => He
      });
      var n = {};
      t.r(n), t.d(n, {
        Art: () => ze,
        Link: () => Ae
      });
      var i = {};
      t.r(i), t.d(i, {
        Art: () => yt,
        Link: () => Nt
      });
      var s = {};
      t.r(s), t.d(s, {
        getVariant: () => Gt,
        transitions: () => At,
        variants: () => Mt
      });
      var r = {};
      t.r(r), t.d(r, {
        Animations: () => s,
        LiteMotion: () => Et,
        withFadeIn: () => Bt,
        withFadeUp: () => zt
      });
      var c = t(1424),
        o = t(6160);
      const l = e => {
        let {
          children: a,
          to: t = "#",
          alt: n = "",
          autoBlank: i = !1,
          onClick: s = (() => {}),
          ...r
        } = e;
        const l = !/^(https?|mailto):/i.test(t);
        if (/^#/.test(t)) {
          const e = e => {
            e.preventDefault(), document?.querySelector(`[id='${t.replace("#","")}']`)?.scrollIntoView({
              behavior: "smooth",
              block: "center"
            }), s && s(e)
          };
          return (0, o.jsx)("a", {
            title: n,
            href: t,
            onClick: e,
            ...r,
            children: a
          })
        }
        if (l) return (0, o.jsx)(c.NavLink, {
          title: n,
          to: t,
          onClick: e => s(e),
          ...r,
          children: a
        });
        const d = Object.keys(r).filter((e => !["activeClassName", "key", "end"].includes(e))).reduce(((e, a) => ({
            ...e,
            [a]: r[a]
          })), {}),
          m = r?.target ?? (i ? "_blank" : "_self");
        return "function" == typeof d?.className && delete d.className, (0, o.jsx)("a", {
          href: t,
          ...d,
          title: n,
          onClick: e => s(e),
          target: m,
          children: a
        })
      };
      var d = t(4932),
        m = t(6716),
        f = t.n(m),
        u = t(4859),
        b = t(5873);
      const g = {
          player: "_93f8151fb9eb5ac4a9efacd688ca13e254dd",
          fixedToBottom: "_93f8151fb9eb5ac4b33c2f80bdcdf6b9ee7c",
          tracksOpen: "_93f8151fb9eb5ac4e75a25f36155727db838",
          tracks: "_93f8151fb9eb5ac4d7c74a8be89aadc3595f",
          iconBurger: "_93f8151fb9eb5ac4ce873a26dd48e144b892",
          trackList: "_93f8151fb9eb5ac4d3e94370e32846eaa545",
          trackActive: "_93f8151fb9eb5ac4e127fe45fc0eff968079",
          trackTitle: "_93f8151fb9eb5ac4cad307864ca35378b800",
          trackIndex: "_93f8151fb9eb5ac4c7a9a262bfd5429129b7",
          controls: "_93f8151fb9eb5ac4d563fea634ae63fa8476",
          controlsCurrentBg: "_93f8151fb9eb5ac4c253f93e74c8f7be3f3b",
          controlsCurrentBgVisible: "_93f8151fb9eb5ac4c94e2081c3054fe7c50e",
          controlsTrack: "_93f8151fb9eb5ac4ff4cbf83ca324ae4479d",
          controlsTrackTitle: "_93f8151fb9eb5ac4c8851680749acc180bcf",
          controlsTrackAnimating: "_93f8151fb9eb5ac4a649382afa34e44ae1dd",
          scrollText: "_93f8151fb9eb5ac4d00987b7a4162fa2ddd8",
          controlsTrackArtist: "_93f8151fb9eb5ac4b7d28143e0103bdf0bcd",
          controlsTrackBurger: "_93f8151fb9eb5ac4e34af7e018cb0e180ba1",
          controlsButtons: "_93f8151fb9eb5ac4bdabd26b4f7decc809eb",
          controlsScrub: "_93f8151fb9eb5ac4a08e136f3c61066f8754",
          controlsPlayPause: "_93f8151fb9eb5ac4fa0450d32d077757b403",
          controlsPlayPausePlaying: "_93f8151fb9eb5ac4b1324feeb35bb85cd8fb",
          controlsNextTrack: "_93f8151fb9eb5ac4f9f512d9ab46dcc43417",
          controlsPrevTrack: "_93f8151fb9eb5ac4cb5de968d220dd269971",
          controlsScrubTrack: "_93f8151fb9eb5ac4a63e1452e80cde998c96"
        },
        p = e => {
          let {
            src: a
          } = e;
          return (0, o.jsx)("div", {
            className: g.cover,
            style: {
              background: `url(${a}) center/cover`
            }
          })
        },
        v = e => {
          let {
            timing: a = {
              current: 0,
              duration: 0
            },
            playing: t,
            audioRef: n,
            setPlaying: i,
            tracksOpen: s,
            setTracksOpen: r,
            trackData: c,
            setTrackId: l,
            trackBounds: m,
            setAutoNext: u
          } = e;
          const b = (0, d.useRef)(null),
            p = (0, d.useRef)(null),
            v = (0, d.useRef)(null),
            [k, h] = (0, d.useState)(null),
            [_, x] = (0, d.useState)(!1),
            y = e => {
              const a = new Date(1e3 * e),
                t = a.getUTCMinutes(),
                n = a.getSeconds();
              return `${t.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}`
            };
          return (0, d.useEffect)((() => {
            if (!p.current || !v.current) return;
            const e = () => {
              v.current && p.current && h(v.current.clientWidth > p.current.clientWidth)
            };
            return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e)
          }), [v, p, a]), (0, d.useEffect)((() => {
            if (!b.current || !a?.duration) return;
            let e = null;
            const t = new(f())(b.current),
              i = e => {
                if (b.current) {
                  const t = b.current.clientWidth;
                  if (!b.current.contains(e.srcEvent.target)) return;
                  const i = Math.max(0, e.srcEvent.offsetX),
                    s = Number(i / t * a.duration);
                  n.currentTime = s
                }
              },
              s = () => {
                e ? n.pause() : n.play()
              },
              r = () => {
                e = n.paused, n.pause()
              };
            return t.on("panstart", r), t.on("panleft", i), t.on("panright", i), t.on("panend", s), t.on("tap", i), () => {
              t.off("panstart", r), t.off("panleft", i), t.off("panright", i), t.off("panend", s), t.off("tap", i)
            }
          }), [b.current, a.duration]), (0, d.useEffect)((() => {
            const e = Number(n?.currentTime);
            (t || !isNaN(e) && 0 !== e) && x(!0)
          }), [t, n?.currentTime]), (0, o.jsxs)("div", {
            className: g.controls,
            style: {
              "--track-color": c.color,
              "--track-mix-blend-mode": c.mix_blend_mode,
              "--current-pct": a.current / a.duration
            },
            children: [(0, o.jsx)("div", {
              className: [g.controlsCurrentBg, _ ? g.controlsCurrentBgVisible : ""].join(" ")
            }), (0, o.jsx)("div", {
              className: g.controlsTrack,
              ref: p,
              children: (0, o.jsx)("span", {
                className: [g.controlsTrackTitle, k ? g.controlsTrackAnimating : ""].join(" "),
                ref: v,
                children: c.title
              })
            }), (0, o.jsxs)("div", {
              className: g.controlsButtons,
              children: [(0, o.jsx)("div", {
                className: g.controlsPrevTrack,
                onClick: () => {
                  m && (l(m[0]), u(!0), i(!0))
                }
              }), (0, o.jsx)("div", {
                className: [g.controlsPlayPause, t ? g.controlsPlayPausePlaying : ""].join(" "),
                onClick: () => {
                  i(!t)
                }
              }), (0, o.jsx)("div", {
                className: g.controlsNextTrack,
                onClick: () => {
                  m && (l(m[1]), u(!0), i(!0))
                }
              })]
            }), (0, o.jsx)("div", {
              active: s ? "" : null,
              className: g.controlsTrackBurger,
              children: (0, o.jsx)("div", {
                className: g.iconBurger,
                onClick: () => {
                  r(!s)
                }
              })
            }), (0, o.jsxs)("div", {
              className: g.controlsScrub,
              children: [(0, o.jsx)("span", {
                children: y(a.current)
              }), (0, o.jsx)("div", {
                className: g.controlsScrubTrack,
                ref: b
              }), (0, o.jsx)("span", {
                children: y(a.duration)
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
            setPlaying: r,
            setAutoNext: c
          } = e;
          return (0, o.jsxs)("div", {
            className: g.tracks,
            children: [(0, o.jsx)("h4", {
              children: "Tracks"
            }), (0, o.jsx)("div", {
              className: g.trackBurger,
              onClick: () => {
                s(!i)
              }
            }), (0, o.jsx)("div", {
              className: g.trackList,
              children: a.map(((e, a) => (0, o.jsxs)("a", {
                style: {
                  "--highlight-color": e.color
                },
                className: t === e.id ? g.trackActive : "",
                onClick: () => {
                  n(e.id), r(!0), c(!0)
                },
                children: [(0, o.jsx)("span", {
                  className: g.trackIndex,
                  children: String(a + 1).padStart(2, "0")
                }), (0, o.jsx)("span", {
                  className: g.trackTitle,
                  children: e.title
                }), (0, o.jsx)("span", {
                  className: g.trackTime,
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
          } = (0, u.useQuery)(b.GetAudioAlbum, {
            variables: {
              id: a
            }
          }), [i, s] = (0, d.useState)(), [r, c] = (0, d.useState)(), [l, m] = (0, d.useState)(), [f, h] = (0, d.useState)(!1), [_, x] = (0, d.useState)(!1), [y, N] = (0, d.useState)(new HTMLAudioElement), [j, S] = (0, d.useState)({
            current: 0,
            duration: 0
          }), [w, T] = (0, d.useState)(!0);
          return (0, d.useEffect)((() => {
            const e = "audio",
              a = a => {
                a?.data?.rockstarAudioPlayerPlayTrackId && (c(a.data.rockstarAudioPlayerPlayTrackId), T(!1), x(!0)), _ && a?.data?.attentionBlurredElsewhere && a?.data?.from !== e && x(!1)
              };
            return _ && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: e
            }), window.addEventListener("message", a, !1), () => window.removeEventListener("message", a, !1)
          }), [_]), (0, d.useEffect)((() => {
            if (!y) return;
            const e = () => {
                isNaN(y.duration) || S({
                  duration: y?.duration ?? 0,
                  current: y?.currentTime ?? 0
                })
              },
              a = () => {
                w && i && c(i[1])
              };
            return y.addEventListener("loadedmetadata", e), y.addEventListener("timeupdate", e), y.addEventListener("ended", a), () => {
              y.removeEventListener("loadedmetadata", e), y.removeEventListener("timeupdate", e), y.removeEventListener("ended", a)
            }
          }), [y, i, w]), (0, d.useEffect)((() => {
            _ && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: "audio"
            })
          }), [_]), (0, d.useEffect)((() => {
            y && (_ ? y.play() : y.pause(), h(!1))
          }), [_, y, l?.id]), (0, d.useEffect)((() => {
            if (!r) return;
            const {
              tracks: e
            } = n.audioAlbum, a = n.audioAlbum.tracks.findIndex((e => e.id === r));
            s([e[a - 1]?.id ?? e[e.length - 1].id, e[a + 1]?.id ?? e[0].id]), m(e[a])
          }), [r]), (0, d.useEffect)((() => {
            n && c(n.audioAlbum.tracks[0].id)
          }), [n]), l ? (0, o.jsxs)("div", {
            className: [g.player, g[t], f ? g.tracksOpen : ""].join(" "),
            children: [(0, o.jsx)("audio", {
              ref: e => {
                N(e)
              },
              src: l.mp3_src
            }), (0, o.jsx)(k, {
              tracks: n.audioAlbum.tracks,
              setTrackId: c,
              trackId: r,
              tracksOpen: f,
              setTracksOpen: h,
              setPlaying: x,
              setAutoNext: T
            }), (0, o.jsx)(p, {
              src: l.cover_src
            }), (0, o.jsx)(v, {
              setTrackId: c,
              trackBounds: i,
              tracksOpen: f,
              setTracksOpen: h,
              playing: _,
              setPlaying: x,
              timing: j,
              trackData: l,
              audioRef: y,
              setAutoNext: T
            })]
          }) : null
        },
        _ = e => {
          let {
            text: a,
            style: t
          } = e;
          return (0, o.jsx)("div", {
            className: "_93f8151fb9eb5ac4bac9ce215a30adc97fa2",
            style: t,
            children: a
          })
        },
        x = e => {
          let {
            brands: a = []
          } = e;
          return a.length ? (0, o.jsx)("div", {
            className: "_93f8151fb9eb5ac4dda1d2a07edde4eed327",
            children: a.map(((e, a) => {
              let {
                brand: t
              } = e;
              return (0, o.jsx)("div", {
                className: "_93f8151fb9eb5ac4cfff18405900921e505b",
                "data-brand": t
              }, a)
            }))
          }) : null
        },
        y = {
          button: "_93f8151fb9eb5ac4f2f796c68d7aa20605b5",
          secondary: "_93f8151fb9eb5ac4e8cee39d13ef101955c9"
        },
        N = e => {
          let {
            className: a = "",
            children: t,
            context: n = "",
            to: i,
            onClick: s,
            ...r
          } = e;
          const c = [y.button, y[n], a].join(" ");
          return i ? (0, o.jsx)(l, {
            ...r,
            to: i,
            className: c,
            onClick: s ? () => s() : () => {},
            children: t
          }) : (0, o.jsx)("button", {
            ...r,
            type: "button",
            className: c,
            onClick: s ? () => s() : () => {},
            children: t
          })
        };
      var j = t(9542);
      const S = {
          plusButton: "_93f8151fb9eb5ac4aaee61f04d2d9143075b",
          small: "_93f8151fb9eb5ac4fd4d696b5878fef3440e",
          btnText: "_93f8151fb9eb5ac4bee352a145ea42995ccb",
          btnTexticon: "_93f8151fb9eb5ac4e08b91d4c8af486a20e5",
          whiteBtn: "_93f8151fb9eb5ac4f32ae245931769bf4f55",
          blackBtn: "_93f8151fb9eb5ac4a19d0823134f079ab324",
          transparentBtn: "_93f8151fb9eb5ac4f301a23e9c383f039f76",
          iconBtn: "_93f8151fb9eb5ac4a1a86c3fe6e2976607d0",
          link: "_93f8151fb9eb5ac4baca8995c81929d82d6b",
          xboxone: "_93f8151fb9eb5ac4c03e2fcd6af152915adc",
          xboxseriesxs: "_93f8151fb9eb5ac4e9e1c94bf6c22b7a8f78",
          ps4: "_93f8151fb9eb5ac4b621385ee067ecf61103",
          ps5: "_93f8151fb9eb5ac4a792db7d5dc5b891d82e",
          pc: "_93f8151fb9eb5ac4b61a9dd47bf807ba0925"
        },
        w = e => {
          let {
            children: a,
            className: t,
            onClick: n,
            style: i
          } = e;
          return (0, o.jsx)("button", {
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
          return (0, o.jsx)(c.NavLink, {
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
            labelColor: r = "#000",
            onClick: c,
            secondText: l,
            size: d,
            text: m,
            to: f,
            type: u = ""
          } = e;
          const b = [S.plusButton, S[u] ?? "", S[d] ?? "", S[n] ?? "", t].join(" "),
            g = {
              "--hvr-color": a ?? r,
              "--hvr-bg-color": r ?? a,
              "--hvr-border-color": a ?? r
            },
            p = (0, o.jsxs)(o.Fragment, {
              children: [s ? (0, o.jsx)("img", {
                src: s,
                alt: ""
              }) : "", (0, o.jsxs)("div", {
                className: S.btnText,
                icon: i,
                children: [m, l ? (0, o.jsx)("span", {
                  children: l
                }) : ""]
              })]
            });
          if (f) {
            if (f.startsWith("http")) {
              const e = f.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, o.jsx)("span", {
                onClick: c ? () => c() : () => {},
                onKeyDown: c,
                className: b,
                role: "button",
                tabIndex: 0,
                children: (0, o.jsx)("a", {
                  href: f,
                  target: e,
                  children: p
                })
              })
            }
            return (0, o.jsx)(T, {
              className: b,
              onClick: c ? () => c() : () => {},
              style: g,
              to: f,
              children: p
            })
          }
          return (0, o.jsx)(w, {
            className: b,
            onClick: c ? () => c() : () => {},
            style: g,
            children: p
          })
        },
        E = e => {
          let {
            buttons: a = [],
            className: t
          } = e;
          return a.length ? (0, o.jsx)("div", {
            className: (0, j.classList)("_93f8151fb9eb5ac4f7e394d24516cf4ef277", t),
            children: a.map(((e, a) => {
              let {
                icon: t,
                title: n,
                to: i
              } = e;
              return n ? (0, o.jsx)(C, {
                icon: t,
                text: n,
                to: i
              }, a) : ""
            }))
          }) : null
        };
      var L = t(822),
        I = t(8272);
      const V = {
          deprecatedCarousel: "_93f8151fb9eb5ac4d7c06a375fc33ce5ed1c",
          "swiper-scrollbar-disabled": "_93f8151fb9eb5ac4c62806930d52b31261ad",
          "swiper-horizontal": "_93f8151fb9eb5ac4b62676614d97644bc5a6",
          "swiper-vertical": "_93f8151fb9eb5ac4cf93eb3498e93416e68c",
          renderedWithChildren: "_93f8151fb9eb5ac4aecba52f1282cec3e13c",
          panorama: "_93f8151fb9eb5ac4ef3aeec8f1f636f01a53",
          img: "_93f8151fb9eb5ac4fd038cafa8a7b4ccb1f2",
          hideMobile: "_93f8151fb9eb5ac4c19f263b217c14e3933a",
          hideLarge: "_93f8151fb9eb5ac4f3866b01a24a350d5f6c",
          imageAreaBg: "_93f8151fb9eb5ac4ad7607284e7610b66fb2",
          infinite_false: "_93f8151fb9eb5ac4b6601cba2bde1ff7c469",
          track: "_93f8151fb9eb5ac4e84cec4e15851e26d1f2",
          perico: "_93f8151fb9eb5ac4f7423457a949e09d5eb7",
          dotsSlide: "_93f8151fb9eb5ac4cc58183141c005ea1d9b",
          siblings: "_93f8151fb9eb5ac4e5879faad465f579025a",
          active: "_93f8151fb9eb5ac4d6c7eec791f446b1ae58"
        },
        B = e => {
          let {
            item: a
          } = e;
          return (0, o.jsxs)("div", {
            children: [(0, o.jsx)(la, {
              image: a?.image,
              badge: a?.badge ?? a?.image?.badge,
              badgeType: "badge3",
              role: a?.role ?? a?.image?.role,
              splitter: a?.splitter ?? a?.image?.splitter,
              type: a?.type,
              ariaLabel: a?.image?.ariaLabel ?? a.description,
              style: a?.style,
              className: (0, j.classList)(V.img, a?.className)
            }), (a?.title || a?.description) && (0, o.jsx)(me, {
              item: a
            })]
          })
        },
        $ = e => {
          let {
            current: a,
            total: t
          } = e;
          return (0, o.jsx)("div", {
            className: "swiper-scrollbar",
            style: {
              "--current-slide": a,
              "--total-slides": t
            },
            children: (0, o.jsx)("div", {
              className: "swiper-scrollbar-drag"
            })
          })
        },
        F = e => {
          let {
            children: a,
            items: t = [],
            style: n = {},
            noInfiniteScroll: i = !1,
            className: s = "",
            renderTemplate: r = "standard",
            text: c,
            customSpaceBetween: l = null,
            centerSlides: m = !0,
            centeredSlidesBounds: f = !1
          } = e;
          const [u, b] = (0, d.useState)(0), g = (0, d.useMemo)((() => a && Array.isArray(a) ? a.map((() => (0, I.Z)())) : null), [a]);
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
          return (0, o.jsxs)("div", {
            className: (0, j.classList)(V.deprecatedCarousel, V[r], V[`infinite_${!i}`], a ? V.renderedWithChildren : "", s),
            style: n,
            children: [(0, o.jsxs)(L.tq, {
              loop: !i,
              grabCursor: !0,
              centeredSlides: m,
              centerInsufficientSlides: m,
              slidesPerView: "auto",
              speed: 700,
              breakpoints: p,
              onActiveIndexChange: e => b(e?.realIndex ?? 0),
              centeredSlidesBounds: f,
              children: [(0, o.jsx)("div", {
                className: V.trackWrapper,
                children: (0, o.jsxs)("div", {
                  className: V.track,
                  children: [t?.map((e => (0, o.jsx)(L.o5, {
                    children: (0, o.jsx)(B, {
                      item: e
                    })
                  }, e))), a && a?.map(((e, a) => e && (0, o.jsx)(L.o5, {
                    children: e
                  }, g && g[a])))]
                })
              }), (0, o.jsx)($, {
                current: u,
                total: a ? a.length : t.length
              })]
            }), (c?.title || c?.description) && (0, o.jsx)(me, {
              item: c
            })]
          })
        };
      var D = t(9929),
        z = t(6711);
      const A = (0, t(454).Hu)(),
        M = e => {
          let {
            condition: a = null,
            children: t
          } = e;
          const [n, i] = (0, d.useState)(!1), s = (e => {
            const [a] = (0, c.useSearchParams)(), [t, n] = (0, d.useState)(null), i = (0, z.useRockstarUser)(), {
              loggedIn: s
            } = i, {
              currentCharId: r
            } = (0, z.useRockstarUserState)(), o = function(e) {
              let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "gtao";
              return (0, d.useMemo)((() => {
                const n = e?.data?.characters?.[t];
                return "1" === (n?.[a]?.stats?.overview?.hasGtaPlus?.value ?? "0")
              }), [e, t, a])
            }(i, r);
            return (0, d.useEffect)((() => {
              n(null);
              const i = "true" === a.get("conditionPreview");
              if (!(!e?.length > 0)) return A.applyFilters("preview_conditions", e), e.forEach((e => {
                const {
                  value: r
                } = e;
                if (i) return "true" === a.get(r) ? (n(!0), !0) : (n(!1), !1);
                if (!1 === t) return !1;
                switch (r) {
                  case "user:is:loggedIn":
                    n(!0 === s);
                    break;
                  case "user:not:loggedIn":
                    n(!1 === s);
                    break;
                  case "user:is:gtaPlus":
                    n(!0 === o);
                    break;
                  case "user:not:gtaPlus":
                    n(!1 === o);
                    break;
                  default:
                    n(!1)
                }
                return null
              })), () => {}
            }), [a, e, o, i, s]), t
          })(a);
          return (0, d.useEffect)((() => {
            i(s)
          }), [s]), (0, d.useMemo)((() => n ? t : null), [n])
        },
        G = (0, D.withTranslations)((e => {
          let {
            children: a
          } = e;
          return d.Children.map(d.Children.toArray(a), (e => (0, o.jsx)(M, {
            ...e?.props
          })))
        }));
      var P = t(4385),
        O = t(2346);
      const H = e => {
          let {
            className: a
          } = e;
          return (0, o.jsxs)("svg", {
            className: a,
            width: "16",
            height: "17",
            viewBox: "0 0 16 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, o.jsx)("path", {
              d: "M3.33203 8.5H12.6654",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, o.jsx)("path", {
              d: "M8 3.83331L12.6667 8.49998L8 13.1666",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })]
          })
        },
        U = {
          calloutContainer: "_93f8151fb9eb5ac4e3914a61fd9aa859a9d0",
          calloutSection: "_93f8151fb9eb5ac4e49bc9f67aeaa386f866",
          calloutHeaders: "_93f8151fb9eb5ac4b7127a98bd0551a9025e",
          calloutHeaderMargins: "_93f8151fb9eb5ac4f098d36c5c01b67c18b9",
          calloutHeader: "_93f8151fb9eb5ac4e4d1343db36be54e5ec7",
          calloutSubheader: "_93f8151fb9eb5ac4b7805dbb540b3ce22bfc",
          calloutVoteForm: "_93f8151fb9eb5ac4cf3e98f7443e4d1c0bc6",
          voteButton: "_93f8151fb9eb5ac4d1451ebff49a814a21ff",
          upvote: "_93f8151fb9eb5ac4faefbe6638749682ba0a",
          downvote: "_93f8151fb9eb5ac4fd1544b7df5264adbc45",
          active: "_93f8151fb9eb5ac4f9a08897ca235c8a14b9",
          calloutButton: "_93f8151fb9eb5ac4f5362716f60e13446a8e",
          calloutLink: "_93f8151fb9eb5ac4e22ad31b0334db688e53",
          calloutLinkIcon: "_93f8151fb9eb5ac4a0b361cb8442e24823f8",
          actionBlock: "_93f8151fb9eb5ac4da64af383807e9bbe536",
          actionFooter: "_93f8151fb9eb5ac4e6ddb362e46376185e51"
        },
        q = e => {
          let {
            foreign_id: a,
            foreign_type: t
          } = e;
          const {
            track: n
          } = (0, z.useGtmTrack)(), {
            refetch: i
          } = (0, u.useQuery)(O.UserGetVote, {
            skip: !0
          }), [s] = (0, u.useMutation)(O.UserCastVote), [r, c] = (0, d.useState)(null), l = (0, d.useCallback)((e => {
            (async () => {
              if (e === r && null !== r) c(null);
              else {
                c(e), n({
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
          }), [a, t, r]);
          return (0, d.useEffect)((() => {
            a && t && (async () => {
              const e = await i({
                foreignId: a,
                foreignType: t
              });
              c(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [a, t]), (0, o.jsxs)("div", {
            className: U.calloutVoteForm,
            children: [(0, o.jsx)("button", {
              "aria-label": "upvote",
              className: [U.upvote, U.voteButton, r ? U.active : ""].join(" "),
              name: "upvote",
              onClick: () => l(!0),
              type: "button"
            }), (0, o.jsx)("button", {
              "aria-label": "downvote",
              className: [U.downvote, U.voteButton, !1 === r ? U.active : ""].join(" "),
              name: "downvote",
              onClick: () => l(!1),
              type: "button"
            })]
          })
        },
        R = e => {
          let {
            action_text: a,
            link: t,
            trackingData: n
          } = e;
          const {
            track: i
          } = (0, z.useGtmTrack)();
          return (0, o.jsx)("a", {
            href: t,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, o.jsxs)("button", {
              className: U.calloutLink,
              type: "button",
              onClick: n ? () => i({
                ...n
              }) : () => {},
              children: [a, (0, o.jsx)(H, {
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
          } = (0, z.useGtmTrack)();
          return (0, o.jsxs)("div", {
            className: U.actionFooter,
            children: [a, t && " ", t && (0, o.jsx)("a", {
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
            foreign_id: r = document.location.pathname,
            foreign_type: c = "url",
            className: l = "",
            actionFooterHelperText: m,
            actionFooterLinkText: f,
            actionFooterLink: u,
            trackingData: b = {},
            actionFooterLinkTrackingData: g = {},
            t: p
          } = e;
          const {
            loggedIn: v
          } = (0, z.useRockstarUser)(), {
            track: k
          } = (0, z.useGtmTrack)(), h = `${document.location.origin}/auth/sc-auth-login?returnUrl=${window.location.pathname}`, {
            ref: _,
            inView: x
          } = (0, P.YD)({
            threshold: .6
          }), [y, j] = (0, d.useState)(!1);
          let S;
          if ((0, d.useEffect)((() => {
              x && !y && (k({
                event: "page_section_impression",
                event_action: "impression",
                event_category: "page_section",
                event_label: "callout section",
                element_placement: "callout section"
              }), j(!0))
            }), [x]), !a && !t) return null;
          switch (n) {
            case "vote":
              if (!v) {
                S = (0, o.jsx)(N, {
                  to: h,
                  className: U.calloutButton,
                  onClick: b ? () => k({
                    ...b
                  }) : () => {},
                  children: "Log In"
                });
                break
              }
              S = (0, o.jsx)(q, {
                foreign_id: r,
                foreign_type: c
              });
              break;
            case "button":
              i && s && (S = (0, o.jsx)(N, {
                to: s,
                className: U.calloutButton,
                onClick: b ? () => k({
                  ...b
                }) : () => {},
                children: i
              }));
              break;
            case "link":
              i && s && (S = (0, o.jsx)(R, {
                action_text: i,
                link: s,
                trackingData: b
              }));
              break;
            default:
              S = null
          }
          return (0, o.jsx)("div", {
            className: `${U.calloutContainer} ${l||""}`,
            ref: _,
            children: (0, o.jsxs)("div", {
              className: U.calloutSection,
              children: [(0, o.jsxs)("div", {
                className: [U.calloutHeaders, S ? U.calloutHeaderMargins : ""].join(" "),
                children: [a && (0, o.jsx)("h1", {
                  className: U.calloutHeader,
                  children: p(a)
                }), t && (0, o.jsx)("h2", {
                  className: U.calloutSubheader,
                  children: p(t)
                })]
              }), (0, o.jsxs)("div", {
                className: U.actionBlock,
                children: [S, m && (0, o.jsx)(W, {
                  helperText: m,
                  linkText: f,
                  link: u,
                  trackingData: g
                })]
              })]
            })
          })
        }));
      var Q = t(9285),
        X = t(5633),
        Z = t.n(X);
      const K = e => {
          let {
            isMulti: a,
            allowSelectAll: t,
            label: n,
            miscProps: i
          } = e;
          const [s, r] = (0, d.useState)(""), c = (0, d.useMemo)((() => Z()().getData()), []);
          return (0, o.jsx)(Q.ZP, {
            unstyled: !0,
            value: s,
            isMulti: a,
            allowSelectAll: t,
            options: c,
            placeholder: n,
            onChange: e => {
              return a = e?.target?.value, void r(a);
              var a
            },
            classNamePrefix: "country-select",
            ...i
          })
        },
        J = e => {
          let {
            children: a,
            href: t,
            style: n,
            content: i,
            variant: s = null,
            gtm: r = {}
          } = e;
          const {
            track: c
          } = (0, z.useGtmTrack)(), l = (0, D.useDataLayer)(), m = i ?? a, f = (0, d.useCallback)((() => {
            c({
              event: "cta_other",
              ...l,
              ...r,
              link_url: t ?? void 0,
              text: m ?? void 0
            })
          }), [r, t, l]);
          return (0, o.jsx)("div", {
            className: "_93f8151fb9eb5ac4ac33f7c504f5254f8e80",
            style: n,
            "data-variant": s,
            role: "button",
            onClick: f,
            onKeyDown: f,
            tabIndex: 0,
            children: (0, o.jsx)("a", {
              href: t,
              target: "_blank",
              rel: "noreferrer",
              children: m
            })
          })
        };
      var ee = t(559);
      const ae = "_93f8151fb9eb5ac4bf242a69d5229fde1671",
        te = "_93f8151fb9eb5ac4e5458c4a3f0cb5663be4",
        ne = "_93f8151fb9eb5ac4c46ce1b6b8ea1aeb98cd",
        ie = e => {
          let {
            alt: a,
            className: n,
            src: i,
            style: s
          } = e;
          const [r, c] = (0, D.usePreloadImg)(i);
          let l = i;
          !1 === r && (n === ne && (l = t(8280)), l = t(8933));
          const d = {
            "--aspect-ratio": c.width / c.height,
            ...s
          };
          return (0, o.jsx)("img", {
            src: l,
            className: n ?? "",
            alt: a,
            style: d
          })
        },
        se = e => {
          let {
            className: a,
            style: n = {},
            image: i = {},
            imageStyle: s = {}
          } = e, {
            alt: r,
            src: c
          } = (0, ee.useImageParser)(i);
          return c.desktop || c.mobile || (r = "placeholder", c = {
            mobile: t(8280),
            desktop: t(8933)
          }), (0, o.jsx)("div", {
            className: i.frame ? `${i.frame} ${ae}` : ae,
            style: n,
            children: c?.desktop && c?.mobile ? (0, o.jsxs)(o.Fragment, {
              children: [(0, o.jsx)(ie, {
                style: {
                  ...s,
                  ...i?.style
                },
                src: c.desktop,
                alt: r,
                className: a ? `${a} ${te}` : te
              }), (0, o.jsx)(ie, {
                style: {
                  ...s,
                  ...i?.style
                },
                src: c.mobile,
                alt: r,
                className: a ? `${a} ${ne}` : ne
              })]
            }) : (0, o.jsx)(ie, {
              style: {
                ...s,
                ...i?.style
              },
              src: c?.desktop ?? c?.mobile,
              alt: r,
              className: a
            })
          })
        };
      var re = t(3699);
      const ce = {
          hr: "_93f8151fb9eb5ac4ae0c477489451041502f",
          redLine: "_93f8151fb9eb5ac4e35f43016ae1f2345302",
          gtao: "_93f8151fb9eb5ac4d04040a5527314201aa6"
        },
        oe = e => {
          let {
            style: a,
            className: t = "",
            type: n
          } = e;
          return (0, o.jsx)("div", {
            style: a,
            className: [ce.hr, ce[n], t].join(" ")
          })
        },
        le = "_93f8151fb9eb5ac4bb5b7b532ca0340c3435",
        de = e => {
          let {
            to: a,
            children: t
          } = e;
          return a ? (0, o.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noreferrer",
            children: t
          }) : t
        },
        me = e => {
          let {
            item: a,
            className: t = ""
          } = e;
          return (0, o.jsxs)("div", {
            className: (0, j.classList)("_93f8151fb9eb5ac4fd88ba706e803a317850", t),
            children: [a.title && (0, o.jsx)(de, {
              to: a?.href ?? a?.to,
              children: (0, o.jsx)("h3", {
                children: a.title
              })
            }), Array.isArray(a?.description?.content) ? a.description.content?.map(((e, a) => e?.unorderedList ? (0, o.jsx)(re.Z, {
              columns: e.unorderedList.columns ?? null,
              style: {
                "--unordered-list-padding": "var(--grid-gap-static-sm)",
                "--unordered-list-margin-bottom": ".5rem"
              },
              noImg: !0,
              list: e.unorderedList.list
            }, a) : e?.image ? (0, o.jsx)(se, {
              image: e.image,
              className: e?.className,
              ariaLabel: e.image?.ariaLabel
            }, a) : e?.separator ? (0, o.jsx)("div", {
              style: {
                margin: `${e.separator.spacing} 0`
              },
              children: (0, o.jsx)(oe, {})
            }, a) : (0, o.jsx)("p", {
              children: (0, o.jsx)("span", {
                className: le,
                dangerouslySetInnerHTML: {
                  __html: e
                }
              })
            }, a))) : (0, o.jsx)("span", {
              className: le,
              dangerouslySetInnerHTML: {
                __html: a.description
              }
            })]
          })
        };
      var fe = t(5439);
      const ue = e => {
          let {
            children: a,
            ...t
          } = e;
          const [n, i] = (0, d.useState)(!1);
          return (0, o.jsx)(fe.iF, {
            ...t,
            onReady: () => {
              document.fonts.ready.then((() => {
                i(!0)
              }))
            },
            children: a
          })
        },
        be = {
          badge: "_93f8151fb9eb5ac4c5c56c3e04a1851fa937",
          badgeSizeUpdate: "_93f8151fb9eb5ac4a316681347778ad4f119",
          badge2: "_93f8151fb9eb5ac4bce164d72f6012df909f",
          badge3: "_93f8151fb9eb5ac4a0cac400610dc1c1e2b1"
        },
        ge = e => {
          let {
            wrapper: a,
            children: t,
            role: n,
            splitter: i
          } = e;
          return i || n ? a(t) : t
        },
        pe = e => {
          let {
            badge: a,
            badgeType: n,
            role: i,
            splitter: s
          } = e;
          const r = [];
          s ? a.split(s).map(((e, a) => r.push(e))) : r.push(a);
          let c = 100;
          return 2 == r.length && r[1].length < 4 && "off" !== r[1].toLowerCase() && 45, (0, o.jsxs)(ge, {
            splitter: s,
            role: i,
            wrapper: e => (0, o.jsx)("div", {
              className: `${be.badge} ${n?be[n]:""} `,
              children: e
            }),
            children: [(0, o.jsx)(o.Fragment, {
              children: i && (0, o.jsx)(se, {
                image: {
                  alt: i,
                  desktop: t(9065)(`./${i}.png`)
                }
              })
            }), (0, o.jsx)(ue, {
              className: `${s||i?"":be.badge} ${n?be[n]:""}`,
              min: 8,
              max: 1e3,
              mode: s || i ? "single" : "multi",
              children: r[0]
            }), (0, o.jsx)(o.Fragment, {
              children: r.shift() && s && r.length >= 1 && (0, o.jsx)(ue, {
                min: 8,
                max: 1e3,
                mode: "single",
                forceSingleModeWidth: !0,
                children: r.join(" ")
              })
            })]
          }, "badge-wrapper")
        },
        ve = "_93f8151fb9eb5ac4d6ddb0500c624a198b6f",
        ke = e => {
          let {
            color: a
          } = e;
          return (0, o.jsxs)("div", {
            className: "_93f8151fb9eb5ac4b82b84d749da9c3259ad",
            style: {
              "--loader-color": a
            },
            children: [(0, o.jsx)("div", {
              className: ve
            }), (0, o.jsx)("div", {
              className: ve
            }), (0, o.jsx)("div", {
              className: ve
            })]
          })
        },
        he = {
          dropdownWrapper: "_93f8151fb9eb5ac4fadfba853d9b4c486799",
          items: "_93f8151fb9eb5ac4cade19d95e11809396b0",
          open: "_93f8151fb9eb5ac4ae54547249588b7983c8",
          opener: "_93f8151fb9eb5ac4b845334a62d364009081",
          secondary: "_93f8151fb9eb5ac4a66203f2848fe6ca7929"
        },
        _e = e => {
          let {
            children: a,
            className: t,
            title: n
          } = e;
          const [i, s] = (0, d.useState)(!1);
          return (0, o.jsxs)("div", {
            className: [he.dropdownWrapper, i ? he.open : "", void 0 !== t ? t : ""].join(" "),
            children: [(0, o.jsx)("button", {
              className: he.opener,
              onClick: () => s(!i),
              children: n
            }), (0, o.jsx)("div", {
              className: he.items,
              onClick: () => s(!1),
              children: a
            })]
          })
        };
      var xe = t(2324);
      const ye = e => {
          let {
            children: a,
            context: t = null,
            game: n,
            image: i = {},
            style: s = {},
            template: r = null,
            theme: c = null,
            reversedOnMobile: l = !1,
            className: d = ""
          } = e;
          const m = (0, ee.useImageParser)(i),
            f = {
              ...s
            };
          if (m?.src?.desktop) {
            const e = "var(--grid-background-repeat, no-repeat)",
              a = "var(--grid-background-position, center)/var(--grid-background-size, cover)";
            f.background = `url(${m?.src?.desktop}) ${e} ${a}`
          }
          return (0, o.jsx)("div", {
            className: (0, xe.classList)("_93f8151fb9eb5ac4c697c87f7c313df51629", l ? "_93f8151fb9eb5ac4ef02be9b8858c9180702" : "", d),
            "data-game": "community" === r ? null : n,
            style: (0, D.safeStyles)(f),
            "data-context": t,
            "data-template": r,
            "data-theme": c,
            children: a
          })
        },
        Ne = e => {
          let {
            caption: a,
            children: t,
            ...n
          } = e;
          return a ? (0, o.jsxs)("figure", {
            ...n,
            children: [t, (0, o.jsx)("figcaption", {
              dangerouslySetInnerHTML: {
                __html: a
              }
            })]
          }) : t
        },
        je = e => {
          let {
            componentTitle: a,
            type: t,
            items: n
          } = e;
          return n?.length ? (0, o.jsx)("div", {
            className: "_93f8151fb9eb5ac4e690331a56059fbc1bea",
            type: t,
            children: (0, o.jsxs)(ye, {
              children: [a && (0, o.jsx)("h3", {
                children: a
              }), (0, o.jsx)(ye, {
                className: "_93f8151fb9eb5ac4e015a00e3540621e8966",
                children: n.map(((e, a) => {
                  return e?.embed ? (0, o.jsx)(Ne, {
                    caption: e?.caption,
                    children: (0, o.jsx)("div", {
                      className: "_93f8151fb9eb5ac4a4fc1364a24525bdd78b",
                      dangerouslySetInnerHTML: {
                        __html: (t = e.embed, t.replace(/&gt;/g, ">").replace(/&lt;/g, "<"))
                      }
                    }, `${e?.key??a}_div`)
                  }, e?.key ?? a) : e?.text ? (0, o.jsx)("p", {
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
      var Se = t(9270);
      const we = {
          type: "spring",
          stiffness: 650,
          damping: 45
        },
        Te = {
          ease: "easeOut",
          duration: .9,
          delay: .3
        },
        Ce = {
          open: {
            opacity: 0,
            transition: {
              ease: "easeOut",
              duration: .3
            }
          },
          closed: {
            opacity: 1,
            transition: Te
          }
        },
        Ee = {
          open: {
            opacity: 1,
            display: "grid",
            height: "auto",
            transition: {
              opacity: Te,
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
              height: we
            },
            transitionEnd: {
              display: "none"
            }
          }
        },
        Le = {
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
            transition: we,
            transitionEnd: {
              "--btn-hover-bg-color": "inherit",
              "--btn-hover-bg-color-noBlur": "inherit",
              "--btn-hover-font-color": "inherit",
              "--btn-hover-border-color": "inherit"
            }
          }
        },
        Ie = {
          container: "_93f8151fb9eb5ac4be57c52943608ddf59c2",
          content: "_93f8151fb9eb5ac4cfe275314abbd166e236",
          unexpandedButton: "_93f8151fb9eb5ac4b870021e51bcabfd89b2",
          expandedArea: "_93f8151fb9eb5ac4fce6fc038ff582eb5846",
          closeButton: "_93f8151fb9eb5ac4a953e0445dcb20205a63",
          platformButtons: "_93f8151fb9eb5ac4c3cd96646f7f9949aae5",
          platformButton: "_93f8151fb9eb5ac4c66dc397b79b1a2ba66f",
          xbox: "_93f8151fb9eb5ac4af926eb5468682419225",
          xboxone: "_93f8151fb9eb5ac4dc7f4998dc138ccb6aab",
          xboxseriesxs: "_93f8151fb9eb5ac4b449cc2f1d1635bd5df3",
          ps4: "_93f8151fb9eb5ac4be50474c118284a6e8bb",
          ps5: "_93f8151fb9eb5ac4d164d0a62b0c27eb52e0",
          pc: "_93f8151fb9eb5ac4c25189f8d019031cd50f",
          switch: "_93f8151fb9eb5ac4c0fafd02c2d647495517",
          buttonText: "_93f8151fb9eb5ac4ecefe77b5da17c0a3751"
        },
        Ve = e => {
          let {
            buttonText: a = "",
            link: n = "",
            platform: i = "",
            onClick: s
          } = e;
          const r = n.startsWith(document.location.origin) ? "_self" : "_blank",
            l = [Ie.platformButton, Ie[i]].join(" "),
            d = i ? t(3631)(`./${i}.svg`) : null,
            m = (0, o.jsxs)(o.Fragment, {
              children: [d ? (0, o.jsx)("img", {
                src: d,
                alt: a
              }) : "", (0, o.jsx)("div", {
                className: Ie.buttonText,
                children: a
              })]
            });
          return n.startsWith("http") ? (0, o.jsx)("span", {
            onClick: s,
            onKeyDown: s,
            role: "link",
            tabIndex: 0,
            children: (0, o.jsx)("a", {
              href: n,
              className: l,
              target: r,
              children: m
            })
          }) : (0, o.jsx)(c.NavLink, {
            className: l,
            onClick: s,
            to: n,
            children: m
          })
        },
        Be = e => {
          let {
            buttonText: a = "Subscribe",
            children: n,
            platformsAndLinks: i = []
          } = e;
          const [s, r] = (0, d.useState)(!1), {
            track: c
          } = (0, z.useGtmTrack)();
          return (0, o.jsxs)("div", {
            className: Ie.container,
            children: [(0, o.jsx)(Se.E.div, {
              className: Ie.content,
              animate: s ? "open" : "close",
              variants: Ce,
              children: n
            }), (0, o.jsxs)(Se.E.div, {
              onClick: () => {
                r(!s), s || c({
                  event_action: "buy",
                  event_category: "cta",
                  event: "cta_buy",
                  event_label: "platform button",
                  text: a?.toLowerCase() ?? "subscribe"
                })
              },
              className: Ie.unexpandedButton,
              animate: s ? "open" : "closed",
              variants: Le,
              initial: !1,
              children: [(0, o.jsx)(Se.E.div, {
                className: Ie.buttonText,
                children: "string" == typeof a ? a : "Subscribe"
              }), (0, o.jsxs)(Se.E.div, {
                className: Ie.expandedArea,
                animate: s ? "open" : "closed",
                variants: Ee,
                initial: !1,
                children: [(0, o.jsx)("img", {
                  className: Ie.closeButton,
                  onClick: () => r(!1),
                  onKeyDown: e => {
                    r(!1)
                  },
                  src: t(9545),
                  alt: "Close",
                  role: "button"
                }), (0, o.jsx)("div", {
                  className: Ie.platformButtons,
                  children: i.length ? i.map((e => (0, o.jsx)(Ve, {
                    buttonText: e.buttonText ?? "",
                    link: e.href,
                    platform: e.platform,
                    onClick: () => (e => {
                      let {
                        href: a,
                        platform: t
                      } = e;
                      c({
                        event_action: "store_link",
                        event_category: "cta",
                        event: "cta_store_link",
                        event_label: "platform button",
                        text: t,
                        link_url: a
                      })
                    })(e)
                  }, e.href))) : ""
                })]
              })]
            })]
          })
        },
        $e = {
          animateBox: "_93f8151fb9eb5ac4d79e4df595c4196a4456",
          fadeArea: "_93f8151fb9eb5ac4b6209d5da943d66d8b63",
          visible: "_93f8151fb9eb5ac4ee34ae7cf81c1083ffc9",
          barGrow: "_93f8151fb9eb5ac4df2b636284886da578d7",
          bar: "_93f8151fb9eb5ac4e839fdcdcef89badd41c",
          animateMe: "_93f8151fb9eb5ac4cf9b5b4b10438cc31240"
        },
        Fe = e => {
          let {
            children: a,
            style: t
          } = e;
          const n = (0, d.useRef)(null);
          return (0, d.useEffect)((() => {
            new IntersectionObserver((e => {
              e.forEach((e => {
                e.isIntersecting && e.target.classList.add([$e.visible])
              }))
            })).observe(n?.current)
          }), []), (0, o.jsx)("div", {
            style: t,
            className: [$e.fadeArea].join(" "),
            ref: n,
            children: a
          })
        },
        De = {
          img: "_93f8151fb9eb5ac4dc8c683c436f74586e7b",
          startAnimation: "_93f8151fb9eb5ac4a1b95a9bde496a003c95"
        },
        ze = e => {
          let {
            imgSrc: a,
            titleSlug: t
          } = e;
          const [n] = (0, D.usePreloadImg)(a);
          return (0, o.jsx)("div", {
            role: "img",
            "aria-label": t,
            className: [De.img, n ? De.startAnimation : ""].join(" "),
            style: {
              backgroundImage: `url(${a})`
            }
          })
        },
        Ae = e => {
          let {
            game: a,
            to: t
          } = e;
          const {
            fob_640: n,
            site_in_rockstar: i = !1,
            title_slug: s
          } = a, r = "V" === s ? "gta-v" : "GTAOnline" === s ? "gta-online" : s, c = t ?? `${i?"":"/games"}/${r}`;
          return (0, o.jsx)(l, {
            "aria-label": a,
            "data-gtm-category": "Games",
            "data-gtm-action": "Game Click-through",
            "data-gtm-label": r,
            to: c,
            target: "_self",
            className: "_93f8151fb9eb5ac4a1d8ee283069b56fe549",
            children: (0, o.jsx)(ze, {
              imgSrc: n,
              titleSlug: r
            })
          })
        },
        Me = {
          gameSiteHeader: "_93f8151fb9eb5ac4fe27c37cb6585d7b7d60",
          activeNavItem: "_93f8151fb9eb5ac4a744303e87236a7fe626",
          navHidden: "_93f8151fb9eb5ac4deccde34bbfbdbaadbec",
          navContent: "_93f8151fb9eb5ac4c4dffa014a2db58def92",
          headerNavOpen: "_93f8151fb9eb5ac4f29bb34557215bc90950",
          headerLogo: "_93f8151fb9eb5ac4f272d361dcbf5808666b",
          bg: "_93f8151fb9eb5ac4d8c7366f10a21fc14628"
        },
        Ge = e => {
          let {
            buttonText: a = null,
            gameOverrideStyles: t,
            navLinks: n,
            cta: i = "",
            game: s
          } = e;
          const [r, c] = (0, d.useState)(!1), l = (0, u.useMutateState)(), {
            navHidden: m
          } = (0, u.useState)();
          return (0, d.useEffect)((() => {
            l({
              gameSiteNavOpen: r
            })
          }), [r]), (0, d.useEffect)((() => {
            const e = () => {
              c(!1)
            };
            return document.addEventListener("click", e), () => document.removeEventListener("click", e)
          }), []), (0, o.jsxs)("header", {
            "data-game": s,
            className: [Me.gameSiteHeader, r ? Me.headerNavOpen : "", m ? Me.navHidden : "", t.gameSiteHeader, r ? t.headerNavOpen : ""].join(" "),
            children: [(0, o.jsx)("button", {
              className: [Me.headerLogo, t.headerLogo].join(" "),
              onClick: e => {
                c(!r), e.nativeEvent.stopImmediatePropagation()
              },
              type: "button",
              "aria-label": "Open Game Site Nav",
              dangerouslySetInnerHTML: {
                __html: a
              }
            }), (0, o.jsx)("div", {
              className: Me.bg
            }), (0, o.jsx)("nav", {
              children: (0, o.jsx)("div", {
                className: Me.navContent,
                children: n
              })
            }), i]
          })
        };
      var Pe = t(7131);
      class Oe extends d.Component {
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
          return this?.state?.error?.message ? (0, o.jsxs)("div", {
            className: "_93f8151fb9eb5ac4f5139d7f80fba982ac24",
            children: [(0, o.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, o.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      const He = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return function(t) {
            return (0, o.jsx)(Oe, {
              header: a,
              children: (0, o.jsx)(e, {
                ...t
              })
            })
          }
        },
        Ue = {
          gen9Carousel: "_93f8151fb9eb5ac4b64388286d495640e2ab",
          btnArea: "_93f8151fb9eb5ac4f342658f4bc799d5517c",
          analyticsTracker: "_93f8151fb9eb5ac4e5cc113d03c02f2bc75f",
          info: "_93f8151fb9eb5ac4b1b0c02e52077bb30d3f",
          description: "_93f8151fb9eb5ac4f759f04301770fdd6a1b",
          nextBtn: "_93f8151fb9eb5ac4ee9bbee58d7d850c5a49",
          prevBtn: "_93f8151fb9eb5ac4ff2aff376d6a01f6cb73"
        },
        qe = He((e => {
          let {
            description: a,
            slideChildren: t,
            size: n,
            title: i,
            customSlidesPerView: s = null,
            customSpaceBetween: r = null,
            slideClass: c,
            style: l,
            className: m,
            cardSizeBreakpoints: f = {},
            customAspectRatio: u
          } = e;
          const {
            track: b
          } = (0, z.useGtmTrack)(), g = (0, d.useRef)(null), p = (0, d.useRef)(null), v = (0, d.useRef)(null), [k, h] = (0, d.useState)(null), [_, x] = (0, d.useState)(!1), [y, N] = (0, d.useState)(null), [, S] = (0, d.useState)({}), [w, T] = (0, d.useState)(), {
            ref: C,
            inView: E
          } = (0, P.YD)({
            threshold: .6
          }), I = {
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
          (0, d.useEffect)((() => {
            if (!g.current) return;
            const e = () => {
              if (g.current) {
                const e = s || Number(window.getComputedStyle(g.current).getPropertyValue("--slides-per-view")),
                  a = s ? 1 : Number(window.getComputedStyle(g.current).getPropertyValue("--slides-per-view-multiplier"));
                N(e * a)
              }
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [g, s]), (0, d.useEffect)((() => {
            if (!t) return;
            const e = t.map(((e, a) => (0, o.jsx)(L.o5, {
              children: e
            }, Symbol(a).toString())));
            h(e)
          }), [t]), (0, d.useEffect)((() => {
            T({
              nextEl: v.current,
              prevEl: p.current
            })
          }), [v, p]), (0, d.useEffect)((() => {
            E && !_ && t && (b({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: `deck - ${i}`.toLowerCase(),
              element_placement: `deck - ${i}`.toLowerCase()
            }), x(!0))
          }), [E, t]);
          const V = "custom" === n ? {
            "--custom-aspect-ratio": u,
            ...l
          } : {
            ...l
          };
          return (0, o.jsxs)("div", {
            className: (0, j.classList)(Ue.gen9Carousel, m),
            "data-size": n,
            "data-sm": f?.sm ? f?.sm : n,
            "data-md": f?.md ? f?.md : n,
            "data-lg": f?.lg ? f?.lg : n,
            "data-xl": f?.xl ? f?.xl : n,
            "data-xxl": f?.xxl ? f?.xxl : n,
            ref: g,
            style: V,
            children: [(0, o.jsx)("div", {
              className: Ue.analyticsTracker,
              ref: C
            }), (0, o.jsxs)("div", {
              className: Ue.info,
              children: [(0, o.jsxs)("div", {
                className: Ue.titleWrapper,
                children: [i && (0, o.jsx)("h2", {
                  children: i
                }), a && (0, o.jsx)("div", {
                  className: Ue.description,
                  dangerouslySetInnerHTML: {
                    __html: a
                  }
                })]
              }), (0, o.jsxs)("div", {
                className: Ue.btnArea,
                children: [(0, o.jsx)("div", {
                  className: Ue.prevBtn,
                  ref: p,
                  "aria-label": "Previous"
                }), (0, o.jsx)("div", {
                  className: Ue.nextBtn,
                  ref: v,
                  "aria-label": "Next"
                })]
              })]
            }), y ? (0, o.jsx)(L.tq, {
              slidesPerView: y,
              onInit: e => S(e),
              grabCursor: !0,
              navigation: w,
              modules: [Pe.W_],
              breakpoints: I,
              slideClass: (0, j.classList)("swiper-slide", c),
              onSlideNextTransitionEnd: () => {
                b({
                  event_action: "next",
                  event_category: "carousel",
                  event: "carousel_next",
                  event_label: i?.toLowerCase() ?? ""
                })
              },
              onSlidePrevTransitionEnd: () => {
                b({
                  event_action: "previous",
                  event_category: "carousel",
                  event: "carousel_previous",
                  event_label: i?.toLowerCase() ?? ""
                })
              },
              onSlideChangeTransitionEnd: () => {
                b({
                  event_action: "swipe",
                  event_category: "carousel",
                  event: "carousel_swipe",
                  event_label: i?.toLowerCase() ?? ""
                })
              },
              children: k
            }) : ""]
          })
        }), null),
        Re = {
          hero: "_93f8151fb9eb5ac4bece3423e7348fe897dd",
          images: "_93f8151fb9eb5ac4e4f748c1ff815d8b9037",
          background: "_93f8151fb9eb5ac4b5ced9959e35f2253f74",
          gradient: "_93f8151fb9eb5ac4e0fe7c3119deb0390f3a",
          layered: "_93f8151fb9eb5ac4f0fcd0b3f97b9d26ac9a",
          content: "_93f8151fb9eb5ac4f80d5ef43a4ca7f8db9a",
          descriptions: "_93f8151fb9eb5ac4a0274a048775d56472f3",
          buttonGroup: "_93f8151fb9eb5ac4b3b215f6051dcab57e88",
          legalText: "_93f8151fb9eb5ac4fdc2ef25c828ac791dc6",
          shardsCarousel: "_93f8151fb9eb5ac4a10586bf7a52bd0b2244"
        },
        We = {
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
        Ye = {
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
        Qe = e => {
          let {
            title: a = "",
            mobileImg: t,
            desktopImg: n
          } = e;
          const i = (0, j.useGetCdnSource)(t ?? null),
            s = (0, j.useGetCdnSource)(n ?? i);
          return (0, o.jsx)("div", {
            className: Re.shard,
            style: {
              "--background-image-mobile": `url(${i})`,
              "--background-image-desktop": `url(${s})`
            },
            children: (0, o.jsx)("h5", {
              children: a
            })
          })
        },
        Xe = e => {
          let {
            title: a = "Membership Rewards",
            shards: t
          } = e;
          const [n, i] = (0, d.useState)(null);
          return (0, d.useEffect)((() => {
            t && i(t.reduce(((e, a) => {
              if (!a?.shardImg) return e;
              const {
                title: t,
                shardImg: n
              } = a, {
                mobile: i,
                desktop: s
              } = n;
              return e.push((0, o.jsx)(Qe, {
                title: t,
                mobileImg: i?.full_src,
                desktopImg: s?.full_src
              })), e
            }), []))
          }), [t]), n ? (0, o.jsx)("div", {
            className: Re.shardsCarousel,
            children: (0, o.jsx)(qe, {
              title: a,
              slideChildren: n,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        Ze = e => {
          let {
            animated: a = !1,
            ctas: t = [],
            description: n,
            expandingButtonLabel: i = "Subscribe",
            title: s
          } = e;
          const [r, c] = (0, d.useState)([]), [l, m] = (0, d.useState)([]);
          return (0, d.useEffect)((() => {
            c(t.reduce(((e, a) => a.isInExpandingButton ? (e.push({
              href: a.href,
              platform: a.platform,
              buttonText: a.buttonText
            }), e) : e), [])), m(t.reduce(((e, a) => (a.isInExpandingButton || e.push({
              icon: a.platform ? a.platform : "",
              title: a.buttonText,
              to: a.href
            }), e)), []))
          }), t), t.length ? r.length ? (0, o.jsx)(Se.E.div, {
            variants: a ? Ye : void 0,
            children: (0, o.jsxs)(Be, {
              buttonText: i,
              platformsAndLinks: r,
              children: [(0, o.jsxs)(Se.E.div, {
                className: Re.descriptions,
                variants: a ? Ye : void 0,
                children: [(0, o.jsx)("h2", {
                  dangerouslySetInnerHTML: {
                    __html: s
                  }
                }), (0, o.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: n
                  }
                })]
              }), !!l && !!l.length && (0, o.jsx)(Se.E.div, {
                variants: Ye,
                children: (0, o.jsx)(E, {
                  buttons: l,
                  className: Re.buttonGroup
                })
              })]
            })
          }) : (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsxs)(Se.E.div, {
              className: Re.descriptions,
              variants: a ? Ye : void 0,
              children: [(0, o.jsx)("h2", {
                dangerouslySetInnerHTML: {
                  __html: s
                }
              }), (0, o.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: n
                }
              })]
            }), !!l && !!l.length && (0, o.jsx)(Se.E.div, {
              variants: Ye,
              children: (0, o.jsx)(E, {
                buttons: l,
                className: Re.buttonGroup
              })
            })]
          }) : (0, o.jsxs)(Se.E.div, {
            className: Re.descriptions,
            variants: a ? Ye : void 0,
            children: [(0, o.jsx)("h2", {
              dangerouslySetInnerHTML: {
                __html: s
              }
            }), (0, o.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: n
              }
            })]
          })
        },
        Ke = e => {
          let {
            animated: a = !1,
            brands: t = [],
            ctas: n = [],
            description: i = "",
            expandingButtonLabel: s = "Subscribe",
            title: r = "",
            legalText: c
          } = e;
          return (0, o.jsxs)(Se.E.div, {
            className: Re.content,
            initial: "hidden",
            animate: "visible",
            variants: a ? We : void 0,
            children: [(0, o.jsx)(Se.E.div, {
              variants: a ? Ye : void 0,
              children: (0, o.jsx)(x, {
                brands: t
              })
            }), (0, o.jsx)(Ze, {
              animated: a,
              ctas: n,
              description: i,
              expandingButtonLabel: s,
              title: r
            }), c && (0, o.jsx)(Se.E.div, {
              className: Re.legalText,
              variants: a ? Ye : void 0,
              children: (0, o.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: c
                }
              })
            })]
          })
        },
        Je = e => {
          let {
            animated: a = !1,
            backgroundImage: t,
            brands: n = [],
            className: i,
            ctas: s = [],
            description: r = "",
            expandingButtonLabel: c = "Subscribe",
            layeredImage: l,
            layeredImageSettings: d,
            legalText: m,
            shardsSection: f = {},
            theme: u = "gen9",
            title: b = ""
          } = e;
          const g = (e => {
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
                    const [s, r] = i;
                    if (t.has(n) && t.has(s)) {
                      const n = `${t.get(s)}${e}`;
                      a[n] = "imageWidth" !== s ? r ? `${r}px` : "0px" : r ? `${r}vw` : "100vw"
                    }
                  }))
                }
              })), a
            })(d),
            p = (0, j.useGetCdnSource)(t?.mobile?.full_src ?? null),
            v = (0, j.useGetCdnSource)(t?.desktop?.full_src ?? p),
            k = (0, j.useGetCdnSource)(l?.mobile?.full_src ?? null),
            h = (0, j.useGetCdnSource)(l?.desktop?.full_src ?? k);
          return (0, o.jsxs)(Se.E.div, {
            className: (0, j.classList)(Re.hero, i),
            style: {
              "--background-image-desktop": `url(${v})`,
              "--background-image-mobile": `url(${p})`,
              "--layered-image-desktop": `url(${h})`,
              "--layered-image-mobile": `url(${k})`
            },
            initial: "hidden",
            animate: "visible",
            variants: a ? We : void 0,
            "data-type": "hero",
            theme: u,
            children: [(0, o.jsxs)("div", {
              className: Re.images,
              children: [v && p ? (0, o.jsx)("div", {
                className: Re.background,
                style: t?.style ?? {}
              }) : "", k && h ? (0, o.jsx)("div", {
                className: Re.layered,
                style: d ? g : {}
              }) : "", (0, o.jsx)("div", {
                className: Re.gradient
              })]
            }), (0, o.jsx)(Ke, {
              animated: a,
              ctas: s,
              description: r,
              expandingButtonLabel: c,
              title: b,
              brands: n,
              legalText: m
            }), f?.shards && (0, o.jsx)(Xe, {
              ...f
            })]
          })
        };
      var ea = t(3653),
        aa = t.n(ea);
      const ta = e => {
          let {
            children: a,
            attributes: t = {},
            className: n = "",
            style: i = {}
          } = e;
          return (0, o.jsx)("span", {
            className: (0, j.classList)(n, t?.className, "_93f8151fb9eb5ac4d29f95ed3bc7c6d7c617"),
            style: (0, D.safeStyles)(i ?? t?.style ?? {}),
            dangerouslySetInnerHTML: {
              __html: aa().unescape(a)
            }
          })
        },
        na = {
          languageSelector: "_93f8151fb9eb5ac4f166a9ac105f2369a3dc",
          open: "_93f8151fb9eb5ac4dae05bdd156653f28cc6",
          linkWrapper: "_93f8151fb9eb5ac4b8a37e9fec4e19718bad",
          links: "_93f8151fb9eb5ac4d68cd45af954ada8339b"
        },
        ia = (0, D.withTranslations)((e => {
          let {
            t: a
          } = e;
          const t = (0, c.useLocation)(),
            [n, i] = (0, d.useState)(!1),
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
          return (0, o.jsxs)("div", {
            className: [na.languageSelector, n ? na.open : ""].join(" "),
            children: [(0, o.jsxs)("button", {
              onClick: () => i(!n),
              type: "button",
              "aria-label": "Language Selector",
              children: [(0, o.jsx)("i", {}), (0, o.jsx)("span", {
                children: a("current-language")
              })]
            }), (0, o.jsx)("div", {
              className: na.linkWrapper,
              children: (0, o.jsx)("div", {
                className: na.links,
                children: s.map((e => {
                  let {
                    base: a,
                    text: n
                  } = e;
                  return (0, o.jsx)(l, {
                    to: `${window.location.origin}${a}${t.pathname}${t.search}`,
                    children: n
                  }, n)
                }))
              })
            })]
          })
        })),
        sa = {
          layeredImage: "_93f8151fb9eb5ac4fe055e03d755d327f68b",
          layersWrapper: "_93f8151fb9eb5ac4ed9fb715b12c8922091c",
          "hero-lg": "_93f8151fb9eb5ac4b14311c40aa111444c4f",
          "hero-md": "_93f8151fb9eb5ac4c03dc01fd60d629070a7",
          "hero-sm": "_93f8151fb9eb5ac4e4afc321441749195cbe",
          contain: "_93f8151fb9eb5ac4fe34b6e44a872251cd8c",
          cover: "_93f8151fb9eb5ac4bc38a5997d08467d0210",
          fill: "_93f8151fb9eb5ac4d5b4434d674523aeecbe",
          "bg-img": "_93f8151fb9eb5ac4e4fde483f33dda9ad1ac",
          imageLayer: "_93f8151fb9eb5ac4eb82e236806638e1831d",
          "layer-lg-height": "_93f8151fb9eb5ac4d0ba0140371ae5f1a833",
          "layer-md-height": "_93f8151fb9eb5ac4a3c442f71d344ee0070d",
          "layer-sm-height": "_93f8151fb9eb5ac4b2e3a701514d31bc7fa6",
          "layer-xl-height": "_93f8151fb9eb5ac4f750384c6c8f8c4a93f8",
          "layer-xs-height": "_93f8151fb9eb5ac4ed156fec9aec1fdad9d8",
          "layer-xxl-height": "_93f8151fb9eb5ac4c6339a90f75282ca4796",
          "layer-lg-width": "_93f8151fb9eb5ac4a5cc4ed6f65c9eecec0f",
          "layer-md-width": "_93f8151fb9eb5ac4d01397671439af05e861",
          "layer-sm-width": "_93f8151fb9eb5ac4e56480b5dd53e45ad22e",
          "layer-xl-width": "_93f8151fb9eb5ac4d8feacc718c48748c751",
          "layer-xs-width": "_93f8151fb9eb5ac4b4c7390aed100757acfb",
          "layer-xxl-width": "_93f8151fb9eb5ac4c9764a5f568cfc513265",
          "bottom-y": "_93f8151fb9eb5ac4ccddb186e7ad73398712",
          "center-x": "_93f8151fb9eb5ac4d1d54565cd99dc5734fa",
          "center-y": "_93f8151fb9eb5ac4ffaff7ec59daea41278d",
          "left-x": "_93f8151fb9eb5ac4e07a30de60556b257e90",
          "right-x": "_93f8151fb9eb5ac4f435a185c8d34ffe25d5",
          "top-y": "_93f8151fb9eb5ac4a09d6d2ccff606e24bfd",
          border: "_93f8151fb9eb5ac4a115318c6185182f4644",
          shards: "_93f8151fb9eb5ac4a784f35f03c2b55da23d",
          shards_three: "_93f8151fb9eb5ac4c3fdbf638bbef9710161",
          shards_two: "_93f8151fb9eb5ac4c02b70bf2011870f3b5b",
          dual: "_93f8151fb9eb5ac4e8db8a69d0b33f0a6fe6"
        },
        ra = e => {
          let {
            style: a,
            className: t
          } = e;
          const n = {
              ...a
            },
            i = a["--border-image-source"];
          return i && (n["--border-image-source"] = `url(${(0,j.useGetCdnSource)(i)})`), (0, o.jsx)("div", {
            className: (0, j.classList)(sa.border, t),
            style: {
              ...n
            }
          })
        },
        ca = e => e?.images ? (0, o.jsx)("div", {
          className: (0, j.classList)(sa.layeredImage, sa[e?.variantClass], sa[e?.wrapperSizeClass]),
          style: {
            ...e?.style ?? {}
          },
          children: (0, o.jsxs)("div", {
            className: sa.layersWrapper,
            children: [e?.images?.map(((e, a) => {
              const {
                image: t,
                paddingClass: n,
                imageSizeClass: i,
                objectFitClass: s,
                positionClassX: r,
                positionClassY: c,
                zIndex: l,
                className: d,
                style: m,
                alt: f,
                displayClass: u
              } = e;
              return (0, o.jsx)(se, {
                image: t,
                style: {
                  zIndex: l ?? ++a
                },
                imageStyle: m,
                className: (0, j.classList)(d, u, sa.imageLayer, sa[n], sa[i], sa[s], sa[r], sa[c]),
                alt: f
              }, l ?? ++a)
            })), e?.borderImage && (0, o.jsx)(ra, {
              style: e?.borderImage,
              className: e?.borderImage?.displayClass
            })]
          })
        }) : null,
        oa = e => {
          let {
            hero: a,
            children: t
          } = e;
          return a ? (0, o.jsx)("div", {
            className: "_93f8151fb9eb5ac4d1f3fa1daee184b8bbce",
            children: t
          }) : t
        },
        la = e => {
          let {
            badge: a = null,
            badgeType: t,
            discountTxt: n,
            splitter: i,
            image: s,
            style: r,
            className: c = "",
            attributes: l = {},
            role: d,
            hero: m = !1
          } = e;
          return (0, o.jsx)(oa, {
            hero: m,
            children: (0, o.jsx)("figure", {
              children: (0, o.jsxs)("div", {
                className: (0, j.classList)("_93f8151fb9eb5ac4bf489090b1d2699c92a4", m ? "_93f8151fb9eb5ac4e5c17109e2f485cf10fa" : "", l?.hiddenMobile ? "hiddenMobile" : "", l?.hiddenLarge ? "hiddenLarge" : "", l?.className, c),
                style: (0, D.safeStyles)({
                  ...r,
                  ...l?.style
                }),
                ...l,
                children: [(0, o.jsx)(se, {
                  image: s,
                  className: c
                }), (s?.badge || s?.discountTxt || a || n) && (0, o.jsx)(pe, {
                  badge: s?.discountTxt ?? s?.badge ?? a ?? n,
                  badgeType: t,
                  splitter: s?.splitter ?? i,
                  role: s?.role ?? d
                }), s?.caption && (0, o.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: s.caption
                  }
                })]
              })
            })
          })
        },
        da = {
          tag: "_93f8151fb9eb5ac4c34ddc7e68d6e0a43aa3"
        },
        ma = e => {
          let {
            className: a,
            href: t,
            title: n,
            style: i
          } = e;
          const s = (0, o.jsxs)("div", {
            style: i,
            className: [da.tag, a].join(" "),
            children: [(0, o.jsx)("i", {}), n]
          });
          return void 0 !== t ? (0, o.jsx)(l, {
            to: t,
            children: s
          }) : s
        },
        fa = {
          newswireBlock: "_93f8151fb9eb5ac4a97e3c48c2de4beda1b1",
          info: "_93f8151fb9eb5ac4b37e339b7babb86eb265",
          title: "_93f8151fb9eb5ac4b536165692b314b850e2",
          newswireBlockNoSpecialOrder: "_93f8151fb9eb5ac4e577e50e921ab5910ff9",
          preview: "_93f8151fb9eb5ac4c935c727f0c9b7f71a6f",
          previewMobile: "_93f8151fb9eb5ac4a73fde693c4a2a4052a5",
          top: "_93f8151fb9eb5ac4a3662abbd063913c0a3b",
          startAnimation: "_93f8151fb9eb5ac4c8bf6fa8ccd8d8248584"
        },
        ua = e => {
          let {
            index: a,
            post: t,
            noSpecialOrder: n = !1,
            style: i = {}
          } = e;
          const [s] = (0, c.useSearchParams)(), r = t.preview_images_parsed.newswire_block, d = {
            default: 0 !== a || n ? r.square || r.d16x9 || r._fallback : r.d16x9 || r.square || r._fallback,
            mobile: r.square || r._fallback
          }, [m, f] = (0, D.usePreloadImg)(d.default), [u, b] = (0, D.usePreloadImg)(d.mobile), g = {
            default: {
              backgroundImage: `url(${d.default})`
            },
            mobile: {
              backgroundImage: `url(${d.mobile})`
            }
          };
          return (0, o.jsx)(l, {
            "data-gtm-category": "Newswire",
            "data-gtm-action": "Article Block Click",
            "data-gtm-label": `${t.title}`,
            to: t.url,
            className: [fa.newswireBlock, n ? fa.newswireBlockNoSpecialOrder : "", null !== m ? fa.startAnimation : ""].join(" "),
            children: (0, o.jsxs)(o.Fragment, {
              children: [0 !== a || s.get("tag_id") ? (0, o.jsx)("div", {
                className: fa.preview,
                style: g.default
              }) : (0, o.jsxs)(o.Fragment, {
                children: [(0, o.jsx)("div", {
                  className: fa.previewMobile,
                  style: g.mobile
                }), (0, o.jsx)("div", {
                  className: fa.preview,
                  style: g.default
                })]
              }), (0, o.jsxs)("div", {
                className: fa.info,
                children: [(0, o.jsxs)("div", {
                  className: fa.top,
                  children: [t.primary_tags.length ? (0, o.jsx)(ma, {
                    title: t.primary_tags[t.primary_tags.length > 1 && 722 === t.primary_tags[0].id ? 1 : 0].name
                  }) : "", (0, o.jsx)("time", {
                    dateTime: t.created,
                    children: t.created_formatted
                  })]
                }), (0, o.jsx)("h5", {
                  className: fa.title,
                  dangerouslySetInnerHTML: {
                    __html: t.title
                  }
                })]
              })]
            })
          })
        };
      var ba = t(3651),
        ga = t.n(ba);
      const pa = (0, D.withTranslations)((e => {
          let {
            relativeTo: a = "",
            tagId: t = null,
            metaUrl: n = "/newswire",
            t: i
          } = e;
          const [s] = (0, c.useSearchParams)(), {
            tagId: r = null
          } = (0, c.useParams)(), [l, m] = (0, d.useState)(r ?? t ?? s.get("tag_id")), [f, b] = (0, d.useState)(1), [g, p] = (0, d.useState)([]), [v, k] = (0, d.useState)(null), {
            data: h
          } = (0, u.useQuery)(ga(), {
            variables: {
              tagId: Number(l),
              page: f,
              metaUrl: n
            },
            autoSetLoading: !0
          });
          return (0, d.useEffect)((() => {
            b(1), p([]), m(r ?? t ?? s.get("tag_id"))
          }), [s.get("tag_id")]), (0, d.useEffect)((() => {
            h && h.posts && h.posts.paging && k(h.posts.paging), h && h.posts && h.posts.results && p(g.concat(h.posts.results))
          }), [h]), g.length ? (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(_a, {
              posts: g,
              relativeTo: a,
              noSpecialOrder: null !== l
            }), null !== v && v.nextPage ? (0, o.jsx)(N, {
              onClick: () => b(f + 1),
              disabled: !1,
              context: "secondary",
              children: i("More Stories")
            }) : ""]
          }) : null
        })),
        va = {
          related: "_93f8151fb9eb5ac4dab943d0a03bc8dd3045",
          posts: "_93f8151fb9eb5ac4dc1a17e1a45a2aad85c4",
          just1post: "_93f8151fb9eb5ac4a5966adf644cfbc3adc6"
        },
        ka = (0, D.withTranslations)((e => {
          let {
            posts: a,
            t
          } = e;
          return (0, o.jsxs)("section", {
            className: va.related,
            children: [(0, o.jsx)("h2", {
              children: t("Related Stories")
            }), (0, o.jsx)("div", {
              className: [va.posts, 1 === a.length ? va.just1post : ""].join(" "),
              children: a.map((e => (0, o.jsx)(ua, {
                noSpecialOrder: !0,
                post: e
              }, e.id)))
            })]
          })
        })),
        ha = {
          newswireBlocks: "_93f8151fb9eb5ac4fc028fb629fcb496e293",
          noSpecialOrder: "_93f8151fb9eb5ac4bdf712cf14c051816b0b"
        },
        _a = (0, D.withGtmTracking)((e => {
          let {
            noSpecialOrder: a = !1,
            posts: t,
            gtmTrack: n,
            relativeTo: i
          } = e;
          return (0, d.useEffect)((() => {
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
          }), [t.length]), (0, o.jsx)("div", {
            className: [ha.newswireBlocks, a ? ha.noSpecialOrder : "", ha.contextHome].join(" "),
            children: t.map(((e, t) => (0, o.jsx)(ua, {
              index: t,
              noSpecialOrder: a,
              post: e
            }, e.id)))
          })
        })),
        xa = "_93f8151fb9eb5ac4e5f2890c085fc047351c",
        ya = e => {
          let {
            children: a,
            data: t,
            onPageUpdate: n,
            page: i,
            className: s
          } = e;
          return (0, o.jsx)("a", {
            href: "#",
            className: i === t.page ? `_93f8151fb9eb5ac4e081ffd856ce7ff3aa7a ${s??""}` : "",
            onClick: e => {
              e.preventDefault(), n(i)
            },
            children: a
          })
        },
        Na = e => {
          let {
            data: a,
            onPageUpdate: t,
            className: n
          } = e;
          if (1 === a.pageCount) return null;
          const i = Array.from(new Array(Math.min(a.pageCount, 8)), ((e, t) => t + Math.min(Math.max(a.pageCount - 8, 1), Math.max(2, a.page - 4))));
          return (0, o.jsxs)("div", {
            className: `_93f8151fb9eb5ac4a2b5d74732328a24711b ${n??""}`,
            children: [a.pageCount > 8 ? (0, o.jsxs)(o.Fragment, {
              children: [(0, o.jsx)(ya, {
                data: a,
                onPageUpdate: t,
                page: 1,
                children: "1"
              }), 2 !== i[0] ? (0, o.jsx)("div", {
                className: xa,
                children: "..."
              }) : ""]
            }) : "", i.map((e => (0, o.jsx)(ya, {
              data: a,
              onPageUpdate: t,
              page: e,
              className: n,
              children: e
            }, e))), a.pageCount > 8 ? (0, o.jsxs)(o.Fragment, {
              children: [i.slice(-1)[0] + 1 < a.pageCount ? (0, o.jsx)("div", {
                className: xa,
                children: "..."
              }) : "", (0, o.jsx)(ya, {
                data: a,
                onPageUpdate: t,
                page: a.pageCount,
                children: a.pageCount
              })]
            }) : ""]
          })
        };
      var ja = t(2345);
      const Sa = e => {
          let {
            children: a
          } = e;
          const {
            parallaxController: t
          } = (0, ja.bc)();
          return (0, d.useLayoutEffect)((() => {
            if (!t) return;
            const e = setInterval((() => {
              t.update()
            }), 500);
            return () => clearInterval(e)
          }), [t]), a
        },
        wa = {
          parallaxWrapper: "_93f8151fb9eb5ac4aca7e7408c96c3836597",
          large: "_93f8151fb9eb5ac4bc4f5c2a498cd14dad61",
          medium: "_93f8151fb9eb5ac4bf2bfc259c1bf5ea828e",
          small: "_93f8151fb9eb5ac4c88305647760d3c2405f"
        },
        Ta = e => {
          let {
            scrollAxis: a = "vertical",
            size: t = "",
            style: n = {},
            children: i
          } = e;
          return (0, o.jsx)(ja.Xu, {
            scrollAxis: a,
            children: (0, o.jsx)(Sa, {
              children: (0, o.jsx)("div", {
                className: (0, j.classList)(wa.parallaxWrapper, wa[t]),
                style: n,
                "data-context": "parallax-wrapper",
                children: i ? i.map((e => (0, d.cloneElement)(e, {
                  scrollAxis: a
                }))) : (0, o.jsx)("div", {})
              })
            })
          })
        },
        Ca = e => {
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
          return (0, o.jsx)(ja.UG, {
            className: (0, j.classList)("_93f8151fb9eb5ac4ad9cd218591d2cf7dbab", t),
            layers: s,
            style: n
          })
        },
        Ea = "_93f8151fb9eb5ac4d0b97ccb9b7b3592b1e9",
        La = e => {
          let {
            minOffset: a = 0,
            maxOffset: t = 0,
            scrollAxis: n = "vertical",
            displayClass: i = "",
            style: s = {},
            children: r
          } = e;
          return "horizontal" === n ? (0, o.jsx)(ja.VS, {
            x: [a, t],
            className: (0, j.classList)(Ea, i),
            styleOuter: s,
            children: r
          }) : (0, o.jsx)(ja.VS, {
            y: [a, t],
            className: (0, j.classList)(Ea, i),
            styleOuter: s,
            children: r
          })
        },
        Ia = {
          promoModule: "_93f8151fb9eb5ac4dc6b9943bd5638e92bf1",
          promoModuleImage: "_93f8151fb9eb5ac4c31e1f05a9d9e386cb59",
          gradient: "_93f8151fb9eb5ac4e4422c8b7198431ac1a3",
          promoModuleContentContainer: "_93f8151fb9eb5ac4e49fcbe7526c79fb878e",
          left: "_93f8151fb9eb5ac4bb87afa152b7574ddcb2",
          right: "_93f8151fb9eb5ac4ffb17488f0d5a5bd3860",
          promoModuleTextContent: "_93f8151fb9eb5ac4bb09e437d125424fff9b"
        },
        Va = e => {
          let {
            backgroundColor: a,
            brands: t = [],
            description: n = "",
            ctaLabel: i = "Click here",
            ctaLink: s = "https://rockstargames.com",
            gradient: r = !0,
            image: c,
            imageOrientation: l = "right",
            title: m = ""
          } = e;
          const [f, u] = (0, d.useState)(!1), {
            ref: b,
            inView: g
          } = (0, P.YD)({
            threshold: .6
          }), {
            track: p
          } = (0, z.useGtmTrack)(), v = {
            "--promo-background": a ?? "var(--black-200)",
            "--promo-image": `url(${(0,j.useGetCdnSource)(c)})` ?? 0,
            "--promo-order": "left" === l ? "row" : "row-reverse"
          };
          return (0, d.useEffect)((() => {
            g && !f && (p({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: "promo module",
              element_placement: "promo module"
            }), u(!0))
          }), [g]), (0, o.jsxs)(Se.E.div, {
            className: Ia.promoModule,
            style: v,
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
            ref: b,
            children: [(0, o.jsx)("div", {
              className: [Ia.promoModuleImage, r ? Ia.gradient : "", "left" === l ? Ia.left : Ia.right].join(" ")
            }), (0, o.jsxs)("div", {
              className: Ia.promoModuleContentContainer,
              children: [(0, o.jsx)(x, {
                brands: t,
                className: Ia.promoModuleBrands
              }), (0, o.jsxs)("div", {
                className: Ia.promoModuleTextContent,
                children: [m && (0, o.jsx)("h3", {
                  children: m
                }), n && (0, o.jsx)("p", {
                  children: n
                })]
              }), i && (0, o.jsx)(C, {
                to: s,
                text: i,
                onClick: () => {
                  p({
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
      var Ba = t(3761),
        $a = t(1570);
      const Fa = (0, $a.defineMessages)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            description: "Ratings link alt text",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        }),
        Da = {
          rating: "_93f8151fb9eb5ac4fb3c2b9e8611c7ddad31",
          withDescriptors: "_93f8151fb9eb5ac4fe0db64422f7ad32b362",
          condensed: "_93f8151fb9eb5ac4f21bea93263126551e84",
          text: "_93f8151fb9eb5ac4d935da760642ecc52de9",
          interactiveElement: "_93f8151fb9eb5ac4e7e7f948fb2bab349e08"
        };
      (0, D.importAll)(t(5570));
      const za = He((e => {
          let {
            descriptors: a = null,
            footer: n = null,
            href: i,
            img: s = null,
            titleSlug: r = null,
            style: c = {},
            className: m,
            condensed: f
          } = e;
          const [b, g] = (0, d.useState)(!1), {
            ref: p,
            inView: v
          } = (0, P.YD)({
            threshold: .6
          }), [k, h] = (0, d.useState)({
            img_rating: s,
            rating_descriptors: a,
            rating_footer: n,
            url_rating: i
          }), {
            track: _
          } = (0, z.useGtmTrack)(), x = (0, $a.useIntl)(), {
            data: y
          } = (0, u.useQuery)(Ba.GameData, {
            variables: {
              titleSlug: r
            },
            skip: !r
          });
          (0, d.useEffect)((() => {
            y && h(y?.game)
          }), [y]), (0, d.useEffect)((() => {
            v && !b && k.img_rating && (_({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: "rating",
              element_placement: "rating"
            }), g(!0))
          }), [v]);
          const N = e => e.replace(/_/g, " ").split(".")[0].toUpperCase();
          return k.img_rating ? f ? (0, o.jsxs)("div", {
            className: `${Da.rating} ${Da.condensed} ${k.rating_descriptors?Da.withDescriptors:""} ${m||""}`,
            style: (0, D.safeStyles)(c),
            children: [(0, o.jsx)(l, {
              to: k.url_rating,
              target: "_blank",
              alt: x.formatMessage(Fa.components_ratings_link_alt, {
                rating: N(k.img_rating)
              }),
              style: {
                backgroundImage: `url(${t(4593)(`./${k.img_rating}`)})`
              }
            }), k.rating_descriptors && (0, o.jsxs)("div", {
              className: Da.text,
              children: [(0, o.jsx)("p", {
                className: Da.descriptors,
                dangerouslySetInnerHTML: {
                  __html: k.rating_descriptors.replace(/<br>/g, ", ").substring(0, k.rating_descriptors.length - 2)
                }
              }), k.rating_footer && (0, o.jsx)("hr", {}), k.rating_footer && (0, o.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: k.rating_footer.replace(/ \//g, ", ")
                }
              })]
            })]
          }) : (0, o.jsxs)("div", {
            className: `${Da.rating} ${k.rating_descriptors?Da.withDescriptors:""} ${m||""}`,
            style: (0, D.safeStyles)(c),
            ref: p,
            children: [(0, o.jsx)(l, {
              to: k.url_rating,
              alt: x.formatMessage(Fa.components_ratings_link_alt, {
                rating: N(k.img_rating)
              }),
              target: "_blank",
              style: {
                backgroundImage: `url(${t(4593)(`./${k.img_rating}`)})`
              }
            }), k.rating_descriptors && (0, o.jsx)("p", {
              className: Da.descriptors,
              dangerouslySetInnerHTML: {
                __html: k.rating_descriptors
              }
            }), k.rating_footer && (0, o.jsx)("p", {
              className: Da.interactiveElement,
              dangerouslySetInnerHTML: {
                __html: k.rating_footer
              }
            })]
          }) : null
        })),
        Aa = {
          responsiveFlexBox: "_93f8151fb9eb5ac4e4465a9b663320c80468",
          responsiveFlexItem: "_93f8151fb9eb5ac4aa986045cb58e89e61c5",
          responsiveImage: "_93f8151fb9eb5ac4c046dde6984fbd4bbe65"
        },
        Ma = e => {
          let {
            children: a,
            className: t,
            style: n
          } = e;
          return (0, o.jsx)("div", {
            className: [Aa.responsiveFlexBox, void 0 !== t ? t : ""].join(" "),
            style: n,
            children: a
          })
        },
        Ga = {
          responsiveFlexItem: "_93f8151fb9eb5ac4e53c0594adfb5e74c89e"
        },
        Pa = e => {
          let {
            children: a,
            className: t,
            style: n
          } = e;
          return (0, o.jsx)("div", {
            className: [Ga.responsiveFlexItem, void 0 !== t ? t : ""].join(" "),
            style: n,
            children: a
          })
        },
        Oa = {
          responsiveGridBox: "_93f8151fb9eb5ac4f6ded382294f08f6f94e",
          responsiveGridItem: "_93f8151fb9eb5ac4c45f810f4e651dc7b020"
        },
        Ha = e => {
          let {
            children: a,
            cols: t,
            className: n,
            rows: i,
            style: s
          } = e;
          return void 0 === s && (s = {}), void 0 !== t && (s.gridTemplateColumns = `repeat(${t}, 1fr)`), void 0 !== i && (s.gridTemplateRows = `repeat(${i}, 1fr)`), (0, o.jsx)("div", {
            className: [Oa.responsiveGridBox, void 0 !== n ? n : ""].join(" "),
            style: s,
            children: a
          })
        },
        Ua = {
          responsiveGridBox: "_93f8151fb9eb5ac4f0f3911598f858700269",
          responsiveGridItem: "_93f8151fb9eb5ac4e874fac9914cac099c13"
        },
        qa = e => {
          let {
            children: a,
            className: t,
            style: n
          } = e;
          return (0, o.jsx)("div", {
            className: [Ua.responsiveGridItem, void 0 !== t ? t : ""].join(" "),
            style: n,
            children: a
          })
        },
        Ra = {
          responsiveImage: "_93f8151fb9eb5ac4da2dc19dd9dd16116d08"
        },
        Wa = e => {
          let {
            src: a,
            className: t = "",
            animate: n,
            ariaLabel: i,
            style: s = {}
          } = e;
          const [r, c] = (0, D.usePreloadImg)(a);
          return r ? (s.backgroundImage = `url(${a})`, (0, o.jsx)("div", {
            role: "img",
            "aria-label": i ?? "R* Games",
            className: [Ra.responsiveImage, n ? Ra.animateBox : "", t].join(" "),
            style: {
              ...s,
              "--aspect-ratio": c.width / c.height
            }
          })) : null
        },
        Ya = {
          responsiveSection: "_93f8151fb9eb5ac4d06d23f23d3a5ecb6e50",
          maxWidth: "_93f8151fb9eb5ac4b4e4e0028c2d2643c29a"
        },
        Qa = e => {
          let {
            children: a,
            className: t,
            style: n,
            maxWidth: i
          } = e;
          return (0, o.jsx)("section", {
            className: [Ya.responsiveSection, void 0 !== t ? t : ""].join(" "),
            style: n,
            children: i ? (0, o.jsx)("div", {
              className: Ya.maxWidth,
              children: a
            }) : a
          })
        },
        Xa = () => (0, o.jsx)(l, {
          className: "_93f8151fb9eb5ac4ea893b17b58c097a0539",
          alt: "Rockstar Games Home",
          to: "/"
        }),
        Za = () => {
          const {
            pathname: e
          } = (0, c.useLocation)();
          return (0, d.useEffect)((() => {
            window.scrollTo(0, 0)
          }), [e]), null
        },
        Ka = (0, d.forwardRef)(((e, a) => {
          const {
            threshold: t,
            callback: n,
            children: i,
            requireUser: s
          } = e, {
            track: r
          } = (0, z.useGtmTrack)(s), [c, o] = (0, d.useState)(a?.current);
          return (0, d.useEffect)((() => {
            a?.current && o(a.current)
          }), [a]), ((e, a, t) => {
            const [n, i] = (0, d.useState)({
              scrollDepths: e,
              scrollY: 0
            }), {
              scrollDepths: s,
              scrollY: r
            } = n;
            (0, d.useEffect)((() => {
              "undefined" != typeof window && 0 !== window.pageYOffset && i((e => ({
                ...e,
                scrollY: window.pageYOffset
              })))
            }), []), (0, d.useEffect)((() => {
              i({
                scrollDepths: e,
                scrollY: 0
              })
            }), [window.location.pathname]);
            const c = (0, d.useCallback)((() => {
              const e = document.documentElement,
                r = document.body,
                o = t?.scrollTop || e.scrollTop || r.scrollTop,
                l = t?.scrollHeight || e.scrollHeight || r.scrollHeight,
                {
                  clientHeight: d
                } = e,
                m = o / (l - d) * 100;
              if (s) {
                const e = Math.min(...s, l);
                if (m >= e) {
                  const n = s.filter((a => a !== e));
                  0 === n.length && (t ?? window).removeEventListener("scroll", c), a && a({
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
            (0, d.useEffect)((() => {
              if ("undefined" == typeof window) return;
              const e = t ?? window;
              return e.addEventListener("scroll", c), () => e.removeEventListener("scroll", c)
            }), [c])
          })(t, (e => {
            let {
              scrollY: a
            } = e;
            r({
              event: "page_scroll",
              event_category: "page_scroll",
              event_action: a,
              scroll_depth: a
            }), "function" == typeof n && n(a)
          }), c), i
        })),
        Ja = (0, D.withTranslations)((e => {
          let {
            t: a
          } = e;
          const [t] = (0, d.useState)(""), n = (0, c.useNavigate)(), i = (0, u.useMutateState)();
          return (0, o.jsxs)("form", {
            action: "#",
            className: "_93f8151fb9eb5ac4d190f154b297a6c860c6",
            onSubmit: e => {
              e.preventDefault(), i({
                navOpen: !1
              }), document.activeElement?.blur(), n(`/search?q=${e.target.q.value}`)
            },
            role: "search",
            children: [(0, o.jsx)("button", {
              type: "submit",
              role: "button",
              title: "Submit"
            }), (0, o.jsx)("input", {
              autoComplete: "off",
              defaultValue: t,
              enterKeyHint: "search",
              name: "q",
              placeholder: a("Search Rockstar Games")
            })]
          })
        })),
        et = {
          skeleton: "_93f8151fb9eb5ac4fab0211fa18900cc53a3",
          pulse: "_93f8151fb9eb5ac4ed1b5302c777175acc6c",
          gen9Hero: "_93f8151fb9eb5ac4fae9afdda65a4353f796"
        },
        at = e => {
          let {
            skeleton: a
          } = e;
          return a ? (0, o.jsx)("div", {
            className: [et.skeleton, et[a]].join(" ")
          }) : null
        },
        tt = {
          bodySmall: "_93f8151fb9eb5ac4ee6ce2e1ba16af34ab0c"
        },
        nt = e => {
          let {
            track: a,
            artist: t
          } = e;
          return (0, o.jsxs)("div", {
            className: tt.track,
            children: [(0, o.jsx)("p", {
              children: a
            }), (0, o.jsx)("p", {
              className: tt.bodySmall,
              children: t
            })]
          })
        },
        it = e => {
          let {
            children: a
          } = e;
          return (0, o.jsxs)("div", {
            className: "_93f8151fb9eb5ac4b3a19b796a7611f614b4",
            children: [(0, o.jsx)("h4", {
              className: "_93f8151fb9eb5ac4c0086f5a32f4b4d73879",
              children: "Tracklist"
            }), (0, o.jsx)("div", {
              className: "_93f8151fb9eb5ac4cbbee7b911cca07d19ef",
              children: (0, o.jsx)("div", {
                className: "_93f8151fb9eb5ac4dd4f4f3f5296eec6af3d",
                children: d.Children.map(d.Children.toArray(a), (e => (0, o.jsx)(nt, {
                  ...e?.props
                })))
              })
            })]
          })
        },
        st = "_93f8151fb9eb5ac4a3203eaeb7aa17a50d1d",
        rt = "_93f8151fb9eb5ac4da5aca5b612ae73726aa",
        ct = {
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
        ot = e => {
          let {
            title: a = "thumbnail gallery",
            thumbsPerView: t = 3,
            loop: n = !1,
            navigation: i = !1,
            slideChildren: s = [],
            variants: r = {
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
          } = (0, z.useGtmTrack)(), [m, f] = (0, d.useState)([Pe.Rv, Pe.o3, Pe.tl]), [u, b] = (0, d.useState)(null), [g, p] = (0, d.useState)(null);
          return (0, d.useEffect)((() => {
            const e = [Pe.Rv, Pe.o3, Pe.tl];
            i && e.push(Pe.W_), f(e)
          }), [i]), (0, d.useEffect)((() => {
            if (!s) return;
            const e = s.map(((e, a) => (0, o.jsx)(L.o5, {
              children: e
            }, Symbol(a).toString())));
            p(e)
          }), [s]), g ? (0, o.jsxs)(Se.E.div, {
            className: "_93f8151fb9eb5ac4b0678d1be99248011414",
            variants: r.parent,
            transition: c.parent,
            initial: "initial",
            animate: "animate",
            children: [(0, o.jsx)(Se.E.div, {
              className: st,
              variants: r.main,
              transition: c.main,
              initial: "initial",
              animate: "animate",
              children: (0, o.jsx)(L.tq, {
                loop: n,
                navigation: i,
                pagination: {
                  clickable: !0
                },
                thumbs: {
                  swiper: u
                },
                modules: m,
                breakpoints: ct,
                className: st,
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
                children: g
              })
            }), (0, o.jsx)(Se.E.div, {
              className: rt,
              variants: r.thumbs,
              transition: c.thumbs,
              initial: "initial",
              animate: "animate",
              children: (0, o.jsx)(L.tq, {
                threshold: 50,
                onSwiper: b,
                loop: n,
                breakpoints: ct,
                slidesPerView: t,
                freeMode: !0,
                watchSlidesProgress: !0,
                modules: m,
                className: rt,
                children: g
              })
            })]
          }) : null
        };
      var lt = t(4658);
      const dt = e => {
          let {
            id: a = null,
            ids: t = null,
            setTitleDataPath: n = null,
            sync: i = !1
          } = e;
          const s = t ?? [a],
            {
              data: r
            } = (0, u.useQuery)(lt.TinaModulesInfo, {
              variables: {
                ids: s,
                sync: i
              },
              setTitleDataPath: n,
              skip: !s.length
            });
          return r?.tinaModulesInfo ?? null
        },
        mt = He((e => {
          let {
            components: a = {},
            id: t = null,
            ids: n = null,
            skeleton: i
          } = e;
          const s = dt({
            id: t,
            ids: n
          });
          if (!s) return (0, o.jsx)(at, {
            skeleton: i
          });
          const r = s?.[0]?.tina;
          return r ? (0, o.jsx)(o.Fragment, {
            children: s.map(((e, t) => {
              let {
                tina: n
              } = e;
              return (0, o.jsx)(j.TinaParser, {
                components: a,
                tina: n,
                componentProps: {
                  tinaModulesInfo: s
                }
              }, t)
            }))
          }) : null
        })),
        ft = e => {
          let {
            children: a,
            style: t,
            theme: n
          } = e;
          const [i, s] = (0, d.useState)(n);
          return (0, d.useEffect)((() => {
            n && s(n)
          }), [n]), (0, o.jsx)("div", {
            className: "_93f8151fb9eb5ac4e801cba24942f489915c",
            style: t,
            "data-theme": i,
            children: a
          })
        };
      var ut = t(1683);
      const bt = {
          userVote: "_93f8151fb9eb5ac4b5700f09cbc9b2b23c79",
          info: "_93f8151fb9eb5ac4ad1b94250411ea25716e",
          voteContent: "_93f8151fb9eb5ac4df8160525942f733eaef",
          loggedOutButtons: "_93f8151fb9eb5ac4b199578f6d6c70794bf5",
          voteButtons: "_93f8151fb9eb5ac4fdb3b7b24a86d3935f60",
          downVote: "_93f8151fb9eb5ac4f56e8db24b31d902c755",
          upVote: "_93f8151fb9eb5ac4fb08e95d888a401bad87",
          voteButtonActive: "_93f8151fb9eb5ac4ae4dbdbe47f0d59447e3"
        },
        gt = e => {
          let {
            description: a,
            foreign_id: t = document.location.pathname,
            foreign_type: n = "url",
            title: i
          } = e;
          const {
            track: s
          } = (0, z.useGtmTrack)(), {
            loggedIn: r
          } = (0, z.useRockstarUser)(), {
            refetch: c
          } = (0, u.useQuery)(ut.UserGetVote, {
            skip: !0
          }), [l] = (0, u.useMutation)(ut.UserCastVote), [m, f] = (0, d.useState)(null), b = (0, d.useCallback)((async e => {
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
              i = await l({
                variables: a
              });
            f(i?.data?.userCastVote?.vote ?? null)
          }), [t, n]);
          return (0, d.useEffect)((() => {
            (async () => {
              if (!r || !t || !n) return;
              const e = await c({
                foreign_id: t,
                foreign_type: n
              });
              f(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [t, n, r]), (0, o.jsx)("div", {
            className: bt.userVote,
            children: (0, o.jsxs)("div", {
              className: bt.voteContent,
              children: [(0, o.jsxs)("div", {
                className: bt.info,
                children: [(0, o.jsx)("h3", {
                  children: i
                }), (0, o.jsx)("p", {
                  children: a
                })]
              }), (0, o.jsxs)("div", {
                className: [bt.voteButtons, r ? "" : bt.loggedOutButtons].join(" "),
                children: [(0, o.jsx)("button", {
                  onClick: () => b(!0),
                  className: [bt.upVote, m ? bt.voteButtonActive : ""].join(" "),
                  type: "button",
                  "aria-label": "Vote up"
                }), (0, o.jsx)("button", {
                  className: [bt.downVote, !1 === m ? bt.voteButtonActive : ""].join(" "),
                  onClick: () => b(!1),
                  type: "button",
                  "aria-label": "Vote down"
                })]
              })]
            })
          })
        },
        pt = {
          carousel: "_93f8151fb9eb5ac4df4cbe643bcdb344e8ed",
          text: "_93f8151fb9eb5ac4d3ebdcf6ee34d0d8705b",
          info: "_93f8151fb9eb5ac4af49b9b914c87b1a71ba",
          active: "_93f8151fb9eb5ac4b07dd615705f46f48d1c",
          title: "_93f8151fb9eb5ac4b754611647e7892b662b",
          gameTitle: "_93f8151fb9eb5ac4cffbee9a975cdcd3e17a",
          videoTitle: "_93f8151fb9eb5ac4e1309a6036854ee49110",
          cta: "_93f8151fb9eb5ac4ad98fcae5e4b7426ebe2",
          track: "_93f8151fb9eb5ac4cfeb3d9edccb75fcfc61",
          disableClick: "_93f8151fb9eb5ac4eb53aed711d78304c81a",
          items: "_93f8151fb9eb5ac4da6857a73ff2d80fa6fc",
          dragging: "_93f8151fb9eb5ac4c2aec297ba49d82429e9",
          dots: "_93f8151fb9eb5ac4e49d717d9755f47a7ca3"
        },
        vt = (0, D.withLocale)((e => {
          let {
            locale: a,
            t,
            videos: n
          } = e;
          const {
            setBodyIsScrollable: i
          } = (0, D.useBodyScrollable)(), [s, r] = (0, d.useState)(0), [c, m] = (0, d.useState)(0), u = (0, d.useRef)(null), b = (0, d.useRef)(null);
          return (0, d.useEffect)((() => {
            if (!u.current || b.current) return;
            const e = new(f())(u.current);
            e.get("press").set({
              time: 0
            }), e.get("tap").set({
              time: 150
            });
            const a = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
              t = () => {
                r(s - 1 < 0 ? 0 : s - 1), m(0)
              },
              c = () => {
                const e = s + 1 >= n.length - 1 ? n.length - 1 : s + 1;
                r(e), m(0)
              },
              o = e => {
                m(e.isFinal ? 0 : e.deltaX), "panleft" !== e.additionalEvent && "panright" !== e.additionalEvent || !b.current?.classList.contains(pt.dragging) || a() && i(!1)
              },
              l = () => {
                a() && i(!0), m(0)
              },
              d = e => {
                "press" === e.type && u.current?.classList.add(`${pt.disableClick}`), "tap" === e.type && (u.current?.classList.remove(`${pt.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
              },
              g = () => {
                a() && i(!0), u.current && u.current.classList.remove(`${pt.disableClick}`)
              },
              p = () => {
                a() && i(!0)
              };
            return b.current.addEventListener("transitionend", p), e.on("swiperight", t), e.on("swipeleft", c), e.on("pan", o), e.on("panend", l), e.on("press tap", d), e.on("pressup", g), () => {
              e.off("swiperight", t), e.off("swipeleft", c), e.off("pan", o), e.off("panend", l), e.off("press tap", d), e.off("pressup", g), b.current && b.current.removeEventListener("transitionend", p), m(0)
            }
          }), [u.current, s]), (0, o.jsxs)("section", {
            className: pt.carousel,
            children: [(0, o.jsx)("div", {
              className: pt.track,
              ref: u,
              children: (0, o.jsx)("div", {
                className: `${pt.items} ${0!==c?pt.dragging:""}`,
                ref: b,
                style: {
                  transform: `translateX(calc(-${100*s}% + ${c}px))`
                },
                children: n.map(((e, a) => (0, o.jsx)(l, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through screencap",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  className: s === a ? pt.active : "",
                  role: "link",
                  title: e.title,
                  children: (0, o.jsx)(yt, {
                    video: e,
                    active: s === a
                  })
                }, e.id)))
              })
            }), (0, o.jsxs)("footer", {
              children: [(0, o.jsx)("div", {
                className: pt.text,
                children: n.map(((e, n) => (0, o.jsx)(l, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through footer",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  role: "link",
                  title: e.title,
                  children: (0, o.jsxs)("div", {
                    className: [pt.info, n === s ? pt.active : ""].join(" "),
                    children: [(0, o.jsxs)("div", {
                      className: pt.title,
                      children: [(0, o.jsx)("div", {
                        className: pt.gameTitle,
                        children: `${e.game.title}${"fr_fr"===a?" ":""}`
                      }), (0, o.jsx)("h2", {
                        className: pt.videoTitle,
                        children: `${e.title}`
                      })]
                    }), (0, o.jsx)(N, {
                      className: pt.cta,
                      children: t("Watch Now")
                    })]
                  })
                }, e.id)))
              }), (0, o.jsx)("div", {
                className: pt.dots,
                children: n.map(((e, a) => (0, o.jsx)("button", {
                  "aria-label": `Slide ${a}`,
                  "data-gtm-category": "Marquee",
                  "data-gtm-action": "Dot click",
                  "data-gtm-label": `Dot clicked to ${a}`,
                  onClick: () => r(a),
                  className: s === a ? pt.active : "",
                  type: "button"
                }, e.id)))
              })]
            })]
          })
        })),
        kt = {
          videoList: "_93f8151fb9eb5ac4ee6bbf953d025e89de3e",
          sectionHeader: "_93f8151fb9eb5ac4aff592c13e7c6efe9403",
          arrowNav: "_93f8151fb9eb5ac4c4d1686e768de3bb2a72",
          items: "_93f8151fb9eb5ac4a5555dcd894e6f017244",
          trackWrapper: "_93f8151fb9eb5ac4ea0cb5c1e9e96de1d7ba",
          track: "_93f8151fb9eb5ac4b093f49b66f63b976945",
          dragging: "_93f8151fb9eb5ac4cdce54f2f81ee8d487b9",
          arrow: "_93f8151fb9eb5ac4a93e9dfb22682f51e8fa",
          previous: "_93f8151fb9eb5ac4f72ca354ba820e8a0248",
          next: "_93f8151fb9eb5ac4e839ba4e0441e11b4480",
          disabled: "_93f8151fb9eb5ac4c37dca9479cc10f4f30e"
        },
        ht = (0, D.withTranslations)((e => {
          let {
            vids: a,
            games: t,
            title: n,
            gameTitleNecessary: i
          } = e;
          const s = void 0 !== t ? "games" : "videos",
            r = "videos" === s ? a : t.results,
            c = (0, d.useRef)(null),
            [l, m] = (0, d.useState)(0),
            [u, b] = (0, d.useState)(0),
            g = e => {
              const a = Math.ceil(r.length / l);
              e < 0 ? e = 0 : e >= a - 1 && (e = a - 1), b(e)
            },
            [p, v] = (0, d.useState)(0);
          let k;
          return (0, d.useEffect)((() => {
            const e = () => {
              const e = e => window.matchMedia(`(max-width: ${e})`).matches,
                a = e("768px") ? 1 : e("990px") || e("1440px") ? 2 : e("1920px") ? 3 : 4;
              m(a)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [l]), (0, d.useEffect)((() => {
            if (c.current) {
              const e = new(f())(c.current),
                a = () => {
                  g(u - 1), v(0)
                },
                t = () => {
                  g(u + 1), v(0)
                },
                n = e => {
                  v(e.isFinal ? 0 : e.deltaX)
                },
                i = () => {
                  v(0)
                };
              return e.on("swiperight", a), e.on("swipeleft", t), e.on("pan", n), e.on("panend", i), () => {
                e.off("swiperight", a), e.off("swipeleft", t), e.off("pan", n), e.off("panend", i), v(0)
              }
            }
          }), [c.current, u]), k = "games" === s ? (0, o.jsx)(o.Fragment, {
            children: t.results.map((e => (0, o.jsx)(Ae, {
              game: e,
              dontOverrideTo: !0,
              to: `/videos?type=game&gameId=${e.id}`
            }, e.id)))
          }) : (0, o.jsx)(o.Fragment, {
            children: a.map((e => (0, o.jsx)(Nt, {
              video: e,
              gameTitleNecessary: i
            }, e.id)))
          }), (0, o.jsxs)("section", {
            className: kt.videoList,
            children: [(0, o.jsxs)("h3", {
              className: kt.sectionHeader,
              children: [n, (0, o.jsxs)("div", {
                className: kt.arrowNav,
                children: [(0, o.jsx)("div", {
                  className: [kt.arrow, kt.previous, 0 === u ? kt.disabled : ""].join(" "),
                  onClick: () => g(u - 1)
                }), (0, o.jsx)("div", {
                  className: [kt.arrow, kt.next, u === Math.ceil(r.length / l) - 1 ? kt.disabled : ""].join(" "),
                  onClick: () => g(u + 1)
                })]
              })]
            }), (0, o.jsx)("div", {
              className: kt.items,
              children: (0, o.jsx)("div", {
                className: kt.trackWrapper,
                children: (0, o.jsx)("div", {
                  className: [kt.track, 0 !== p ? kt.dragging : ""].join(" "),
                  ref: c,
                  style: {
                    transform: `translateX(calc(-${100*u}% + ${p}px - (var(--standard-grid-gap) * ${u}))`,
                    gridAutoColumns: `calc(100 / ${l} * 1% - calc(var(--standard-grid-gap) * (${l-1}/${l}))`
                  },
                  children: k
                })
              })
            })]
          })
        })),
        _t = (0, D.withTranslations)((e => {
          let {
            error: a,
            t,
            domain: n = ""
          } = e;
          const i = a?.message ?? t("error-404-new"),
            s = a?.code ?? 398;
          return (0, o.jsxs)("div", {
            className: "_93f8151fb9eb5ac4acc888afe9790ff737d7",
            children: [(0, o.jsx)("h3", {
              children: `${i} (${s})`
            }), (0, o.jsx)(l, {
              to: "/",
              children: t("Home")
            }), "clr" !== n && (0, o.jsx)(Ja, {})]
          })
        })),
        xt = {
          videoPreview: "_93f8151fb9eb5ac4f57a66c11909dd3794fc",
          card: "_93f8151fb9eb5ac4e76ee574eec60bb13889",
          info: "_93f8151fb9eb5ac4ba5ee66f0a4a93fd6686",
          title: "_93f8151fb9eb5ac4ea738c16af3cfa82d464",
          screencap: "_93f8151fb9eb5ac4d42fe4eaa72f9d83a937",
          screencapLoaded: "_93f8151fb9eb5ac4c0b5ce25b1edb0582326",
          gameTitle: "_93f8151fb9eb5ac4c05b6eea8e77156def92"
        },
        yt = e => {
          let {
            video: a
          } = e;
          const [t] = (0, D.usePreloadImg)(a.screencap);
          return (0, o.jsx)("div", {
            className: [xt.screencap, t ? xt.screencapLoaded : ""].join(" "),
            style: {
              background: `url(${a.screencap}) center/cover`
            }
          })
        },
        Nt = e => {
          let {
            gameTitleNecessary: a = !0,
            openInNewWindow: t = !1,
            video: n
          } = e;
          const i = `/videos/${n.id}`,
            s = {
              className: xt.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": i
            },
            r = (0, o.jsxs)("div", {
              className: xt.card,
              children: [(0, o.jsx)(yt, {
                video: n
              }), (0, o.jsxs)("div", {
                className: xt.info,
                children: [a ? (0, o.jsx)("div", {
                  className: xt.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: n.game.title
                  }
                }) : "", (0, o.jsx)("h5", {
                  className: xt.title,
                  dangerouslySetInnerHTML: {
                    __html: n.title
                  }
                })]
              })]
            });
          return t ? (0, o.jsx)("a", {
            href: i,
            target: "_blank",
            ...s,
            children: r
          }) : (0, o.jsx)(l, {
            to: i,
            ...s,
            children: r
          })
        };
      class jt extends d.Component {
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
          return null !== this.state.error.code ? (0, o.jsx)(_t, {
            error: this.state.error
          }) : this.props.children
        }
      }
      const St = function(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return function(t) {
          return (0, o.jsx)(jt, {
            header: a,
            children: (0, o.jsx)(e, {
              ...t
            })
          })
        }
      };
      var wt = t(7644),
        Tt = t(5476),
        Ct = t(6502);
      const Et = (0, d.forwardRef)(((e, a) => {
          const {
            children: t,
            tag: n = "div"
          } = e, i = wt.m[n];
          return (0, o.jsx)(Tt.X, {
            features: Ct.H,
            children: (0, o.jsx)(i, {
              ref: a,
              ...e,
              children: t
            })
          })
        })),
        Lt = {
          visible: {
            opacity: 1
          },
          hidden: {
            opacity: 0
          }
        },
        It = {
          ease: "easeIn",
          duration: .4
        },
        Vt = e => {
          let {
            children: a
          } = e;
          return (0, o.jsx)(Se.E.div, Object.assign({
            className: "_93f8151fb9eb5ac4e0dc5d79dc36b7b8c013",
            variants: Lt,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: It
          }, {
            children: a
          }))
        },
        Bt = e => a => (0, o.jsx)(Vt, {
          children: (0, o.jsx)(e, Object.assign({}, a))
        }),
        $t = {
          visible: {
            opacity: 1,
            y: 0
          },
          hidden: {
            opacity: 0,
            y: 40
          }
        },
        Ft = {
          ease: "easeIn",
          duration: .75
        },
        Dt = e => {
          let {
            children: a
          } = e;
          return (0, o.jsx)(Se.E.div, {
            className: "_93f8151fb9eb5ac4df9075608452635d71d4",
            variants: $t,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: Ft,
            children: a
          })
        },
        zt = e => a => (0, o.jsx)(Dt, {
          children: (0, o.jsx)(e, {
            ...a
          })
        }),
        At = {
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
        Mt = {
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
        Gt = function() {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "collapsed";
          return Mt[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "imageMask"][e]
        };
      var Pt = t(1322);
      const Ot = JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[300,300,0]},"a":{"k":[0,0,0]},"s":{"k":[244,244,100]}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"k":[100,100]},"p":{"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"tm","s":{"k":[{"i":{"x":[0.439],"y":[1.016]},"o":{"x":[0.561],"y":[0.015]},"n":["0p439_1p016_0p561_0p015"],"t":5,"s":[100],"e":[0]},{"t":33.0000013441176}],"ix":1},"e":{"k":[{"i":{"x":[0.439],"y":[1.017]},"o":{"x":[0.561],"y":[0.016]},"n":["0p439_1p017_0p561_0p016"],"t":0,"s":[100],"e":[0]},{"t":30.0000012219251}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"},{"ty":"st","fillEnabled":true,"c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":16},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"}],"ip":0,"op":900.000036657751,"st":0,"bm":0,"sr":1}],"v":"4.5.3","ddd":0,"ip":1.00000004073083,"op":33.0000013441175,"fr":29.9700012207031,"w":600,"h":600}'),
        Ht = JSON.parse('{"v":"5.7.3","fr":60,"ip":0,"op":64,"w":300,"h":300,"nm":"Dot_Loading","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"center","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":10,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":22,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":34,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.667,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"right","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":5,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":17,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":29,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.333,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":12,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":24,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0}],"markers":[]}'),
        Ut = {
          SPINNING: "spinning",
          THREE_DOTS: "threeDots"
        },
        qt = e => {
          let a, {
            type: t = Ut.SPINNING
          } = e;
          switch (t) {
            case Ut.THREE_DOTS:
              a = Ht;
              break;
            case Ut.SPINNING:
            default:
              a = Ot
          }
          return (0, o.jsx)(Pt.Z, {
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
    5873: e => {
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
          r = new Set,
          c = new Set;
        for (s.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var n = i(e, a);
          n && t.definitions.push(n)
        })), t
      }(a, "GetAudioAlbum")
    },
    2346: e => {
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
          r = new Set,
          c = new Set;
        for (s.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
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
    4658: e => {
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
          r = new Set,
          c = new Set;
        for (s.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
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
    1683: e => {
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
          r = new Set,
          c = new Set;
        for (s.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
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
    3651: (e, a, t) => {
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
      n.definitions = n.definitions.concat(s(t(6077).definitions)), n.definitions = n.definitions.concat(s(t(9349).definitions));
      var c = {};

      function o(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var n = e.definitions[t];
          if (n.name && n.name.value == a) return n
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          r(e, a), c[e.name.value] = a
        }
      })), e.exports = n, e.exports.NewswireList = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [o(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var n = c[a] || new Set,
          i = new Set,
          s = new Set;
        for (n.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var r = s;
          s = new Set, r.forEach((function(e) {
            i.has(e) || (i.add(e), (c[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var n = o(e, a);
          n && t.definitions.push(n)
        })), t
      }(n, "NewswireList")
    },
    3631: (e, a, t) => {
      var n = {
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
        "./fpb_pg.svg": 4245,
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
        "./nmc_7.svg": 8058,
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
        "./fpb_pg.svg": 4245,
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
        "./nmc_7.svg": 8058,
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
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/bcaca8dc494732cb2ca1.svg"
    },
    6475: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/af7a4b3f215a9ffd7074.svg"
    },
    73: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/c362395c2a7ba52d8e93.svg"
    },
    7561: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/399e4fadd28201f041fe.svg"
    },
    4262: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/fa23bf61b10367b5ae17.svg"
    },
    7601: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/3b3e471f51bfbca10f05.svg"
    },
    4394: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/fc5864f34c72e5763bea.svg"
    },
    9545: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/cd7ecd01ec2f916d6c4b.svg"
    },
    7012: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/59632b3673146be461a4.svg"
    },
    493: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/3852a2c6a70d09be710a.svg"
    },
    1699: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/1b0d3aef02ce7792cd29.svg"
    },
    8865: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/8c7a9cd5ec41c111d3b6.png"
    },
    1314: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/67093e1a302f3ea0283a.svg"
    },
    2123: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/8ec150b1b482ad8d0a7b.svg"
    },
    8064: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/20b20fda68e332e63fa6.svg"
    },
    3353: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/c6995970d8e01c2c4dd9.svg"
    },
    6456: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/35a89dc2383567dda431.svg"
    },
    2790: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/6c30d58988e83ad29205.svg"
    },
    9453: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/a5b1afad363b1b7735c5.svg"
    },
    8906: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/50e0ab20aa0e59e7fcac.svg"
    },
    6600: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/fa7f2386e30086817d31.svg"
    },
    4431: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/4d1d1cf797164efc892c.svg"
    },
    7429: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/528950a2be1731688d72.svg"
    },
    9851: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/963570be2bfdcc0ca89e.svg"
    },
    1986: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/c10e71ab00b0c2b2dccf.svg"
    },
    4180: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/f1eb8161649818ceacf6.svg"
    },
    8436: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/a816ad46b6f08d4414b8.svg"
    },
    627: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/f85fb23fb7ed1804f4f6.svg"
    },
    5507: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/1b1cd49a8418385edac5.svg"
    },
    4010: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/9a11758343d2a632ed68.svg"
    },
    7909: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/24d49820dabbd2748db5.svg"
    },
    7651: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/86943948e18e1e8c54f9.svg"
    },
    3803: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/98229a0570fde1ef76ed.svg"
    },
    1359: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/5283dd0687946eae809f.svg"
    },
    4245: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/ac083be354061985f3d5.svg"
    },
    873: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/f5fb073c243268c3633d.svg"
    },
    9024: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/33df2d0dcce33e5a29b8.svg"
    },
    9634: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/29109a7ae103c4891306.svg"
    },
    6767: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/bc851ba17da36dd3fbdf.svg"
    },
    6425: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/e84a35ae24296e235a52.svg"
    },
    8305: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/04a48aa65ce5f49fbdbd.svg"
    },
    3310: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/3650c9bd50ec49d4ae36.svg"
    },
    4581: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/3b5a79aab7050b6cd2a1.svg"
    },
    2722: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/24b09a27f4a290d2efd2.svg"
    },
    4380: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/95b097164843052b3d4c.svg"
    },
    5488: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/553191a65708e0897bbd.svg"
    },
    9322: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/66898cb8600ecca9e820.svg"
    },
    4157: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/60dddf79806105dcd7d6.svg"
    },
    4323: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/a16c3988b9d1266fc06f.svg"
    },
    8058: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/79a826bad9c6b552cef6.svg"
    },
    6833: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/a69758e8859b31e27a91.svg"
    },
    35: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/ddc5135e44be59b6788a.svg"
    },
    4345: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/317c7f37447e59b012b8.svg"
    },
    5360: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/7091eba4cdc3b6266b25.svg"
    },
    2698: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/ae70a62c313eb59b85f8.svg"
    },
    2404: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/b738b9917ed897df12eb.svg"
    },
    7368: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/4bebb076dd4d5af34534.svg"
    },
    2322: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/0793ba431e6cb3b4ebd4.svg"
    },
    8045: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/ea994098378db0c3ba36.svg"
    },
    9194: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/ca00a1681d9193d035f3.svg"
    },
    9306: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/9a7d212e208c1e328c2b.svg"
    },
    4340: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/0cba9268ea4237822a99.svg"
    },
    2921: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/a822667d13903e1af53a.svg"
    },
    3749: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/c6438516049c1946a96f.svg"
    },
    8127: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/00a5e040d20521981056.svg"
    },
    2224: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/3494668fa10dfee7d641.svg"
    },
    6295: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/abf2a4c12282038ee2eb.svg"
    },
    4442: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/cd3705c8cf30610c1cec.svg"
    },
    202: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/645ca113a9a32413e0b8.svg"
    },
    7597: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/4b9d0e0092ae12adef9b.svg"
    },
    1187: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/f8c03943e3cfbb624fc7.svg"
    },
    483: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/985b14d49bbd8590cd5a.svg"
    },
    3709: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/64eec66255502324f132.png"
    },
    4041: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/9537e3e382ba4f6f5495.png"
    },
    1012: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/bb0fcc3f660c6509722f.png"
    },
    1325: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/6951b0d6464a85060b39.png"
    },
    4669: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/7afad682fc3513291147.png"
    },
    8933: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/238d47d94df76c60c0d5.jpg"
    },
    8280: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/3bf9319f08a1027930f9.png"
    }
  }
]);