(self.webpackChunk_rockstargames_components = self.webpackChunk_rockstargames_components || []).push([
  [582], {
    1683: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => m
      });
      var i = t(822),
        n = t(3046),
        s = t.n(n),
        r = t(9542),
        d = t(9929);
      const o = {
        grid: "a913315bef66f9841193",
        itemList: "b47c4ec3ee5a7b25272a",
        gtaplus: "f62d53aa88002b52a1ea",
        rdo: "cb929b69e72d0b745821",
        noImg: "d488e38df25c0b9a4c20",
        gtao: "ce5462c5860712b67002",
        custom: "a1eadd442b1479e27d60",
        yellow: "eb8d7b0da6967262905d",
        hotPink: "ef6a35989cf7f2815a81",
        red: "f16f93451d76eff119ef",
        turquoise: "b68b8022cefb15c42493",
        purple: "b81f26d04bea51236b12",
        teal: "eabe5a1697de9f60444b",
        blue: "cab0d114386be0534b0a",
        green: "e6521308cf3d4cbcd0eb",
        darkRed: "da07f0da46dc71261efb",
        darkBlue: "db540e4cd55e1fd039f6",
        goldenrod: "d2ccafcdd0dbfba68f90",
        skull: "d5f11f6a0da20e30e1cc"
      };
      var c = t(9706);
      const {
        sanitize: l
      } = s(), m = e => {
        let {
          list: a,
          string: t,
          starColor: n,
          style: s,
          className: m,
          game: u,
          noImg: g,
          columns: f,
          mobileColumns: v
        } = e;
        const [p, b] = (0, i.useState)(null), k = t ? t.split("_#_") : a;
        return (0, i.useEffect)((() => {
          b(a)
        }), [a]), t || a ? f && p ? (0, c.jsx)("div", {
          className: o.grid,
          style: {
            "--unordered-list-grid-column": f,
            "--unordered-list-grid-column-mobile": v ?? f
          },
          children: (0, c.jsx)("ul", {
            style: (0, d.safeStyles)(s),
            className: (0, r.classList)(o.itemList, o.noImg, o[n], o[u]),
            children: p.map((e => (0, c.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: l(e.content)
              }
            }, e.content)))
          })
        }) : (0, c.jsx)("ul", {
          style: (0, d.safeStyles)(s),
          className: (0, r.classList)(o.itemList, o.custom, g ? o.noImg : "", n ? o[n] : "", u ? o[u] : "", m ?? ""),
          children: k.map((e => (0, c.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: l(e?.content ?? e)
            }
          }, e?.content)))
        }) : null
      }
    },
    8582: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        A: () => c,
        AudioPlayer: () => h,
        Badge: () => x,
        Button: () => N,
        CalloutSection: () => R,
        Carousel: () => C,
        ConditionalBlock: () => $,
        Cta: () => A,
        DescriptionArea: () => K,
        DiscountsBadge: () => ie,
        DotLoader: () => se,
        Dropdown: () => de,
        Embed: () => me,
        ExpandingPlatformButton: () => xe,
        FadeInContent: () => Ne,
        GameCard: () => i,
        GameSiteHeader: () => Te,
        Gen9CoreCarousel: () => Ie,
        Grid: () => ce,
        HTMLElement: () => Qe,
        Hero: () => qe,
        HookStore: () => I,
        ImageWithBadge: () => aa,
        LanguageSelector: () => Xe,
        LayeredImage: () => Je,
        MultiSourceImage: () => U,
        NewswireBlocks: () => ua,
        NewswireCard: () => sa,
        NewswireList: () => oa,
        NewswireRelated: () => la,
        NewswireTag: () => ia,
        Paging: () => va,
        ParallaxCacheBuster: () => ba,
        ParallaxInnerLayer: () => xa,
        ParallaxOuterLayer: () => Na,
        ParallaxWrapper: () => ha,
        PromoModule: () => ja,
        Rating: () => Ta,
        ResponsiveFlexBox: () => Ea,
        ResponsiveFlexItem: () => Ia,
        ResponsiveGridBox: () => $a,
        ResponsiveGridItem: () => Fa,
        ResponsiveImg: () => Ma,
        ResponsiveSection: () => Ra,
        ScrollToTop: () => Aa,
        ScrollTracker: () => Oa,
        SearchBox: () => Pa,
        Separator: () => Y,
        Skeleton: () => Ha,
        TextFit: () => ee,
        ThumbsGallery: () => Za,
        TinaModuleFetchNRender: () => et,
        TrackList: () => Wa,
        UnorderedList: () => W.Z,
        UserVote: () => it,
        VideoCard: () => n,
        VideoCarousel: () => st,
        VideoList: () => dt,
        Wasted: () => ot,
        framer: () => r,
        useTinaModuleFetchByIds: () => Ja,
        withSearchbarErrorBoundary: () => gt,
        withSimpleErrorBoundary: () => Le
      });
      var i = {};
      t.r(i), t.d(i, {
        Art: () => je,
        Link: () => Se
      });
      var n = {};
      t.r(n), t.d(n, {
        Art: () => lt,
        Link: () => mt
      });
      var s = {};
      t.r(s), t.d(s, {
        getVariant: () => jt,
        transitions: () => Nt,
        variants: () => yt
      });
      var r = {};
      t.r(r), t.d(r, {
        Animations: () => s,
        LiteMotion: () => bt,
        withFadeIn: () => _t
      });
      var d = t(7814),
        o = t(9706);
      const c = e => {
        let {
          children: a,
          to: t = "#",
          autoBlank: i = !1,
          ...n
        } = e;
        if (!/^(https?|mailto):/i.test(t)) return (0, o.jsx)(d.NavLink, {
          to: t,
          ...n,
          children: a
        });
        const s = Object.keys(n).filter((e => !["activeClassName", "key", "end"].includes(e))).reduce(((e, a) => ({
            ...e,
            [a]: n[a]
          })), {}),
          r = n?.target ?? (i ? "_blank" : "_self");
        return "function" == typeof s?.className && delete s.className, (0, o.jsx)("a", {
          href: t,
          ...s,
          target: r,
          children: a
        })
      };
      var l = t(822),
        m = t(8423),
        u = t.n(m),
        g = t(4859),
        f = t(5652);
      const v = {
          player: "a9efacd688ca13e254dd",
          fixedToBottom: "b33c2f80bdcdf6b9ee7c",
          tracksOpen: "e75a25f36155727db838",
          tracks: "d7c74a8be89aadc3595f",
          iconBurger: "ce873a26dd48e144b892",
          trackList: "d3e94370e32846eaa545",
          trackActive: "e127fe45fc0eff968079",
          trackTitle: "cad307864ca35378b800",
          trackIndex: "c7a9a262bfd5429129b7",
          controls: "d563fea634ae63fa8476",
          controlsCurrentBg: "c253f93e74c8f7be3f3b",
          controlsCurrentBgVisible: "c94e2081c3054fe7c50e",
          controlsTrack: "ff4cbf83ca324ae4479d",
          controlsTrackTitle: "c8851680749acc180bcf",
          controlsTrackAnimating: "a649382afa34e44ae1dd",
          scrollText: "d00987b7a4162fa2ddd8",
          controlsTrackArtist: "b7d28143e0103bdf0bcd",
          controlsTrackBurger: "e34af7e018cb0e180ba1",
          controlsButtons: "bdabd26b4f7decc809eb",
          controlsScrub: "a08e136f3c61066f8754",
          controlsPlayPause: "fa0450d32d077757b403",
          controlsPlayPausePlaying: "b1324feeb35bb85cd8fb",
          controlsNextTrack: "f9f512d9ab46dcc43417",
          controlsPrevTrack: "cb5de968d220dd269971",
          controlsScrubTrack: "a63e1452e80cde998c96"
        },
        p = e => {
          let {
            src: a
          } = e;
          return (0, o.jsx)("div", {
            className: v.cover,
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
            audioRef: i,
            setPlaying: n,
            tracksOpen: s,
            setTracksOpen: r,
            trackData: d,
            setTrackId: c,
            trackBounds: m,
            setAutoNext: g
          } = e;
          const f = (0, l.useRef)(null),
            p = (0, l.useRef)(null),
            b = (0, l.useRef)(null),
            [k, h] = (0, l.useState)(null),
            [x, _] = (0, l.useState)(!1),
            N = e => {
              const a = new Date(1e3 * e),
                t = a.getUTCMinutes(),
                i = a.getSeconds();
              return `${t.toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}`
            };
          return (0, l.useEffect)((() => {
            if (!p.current || !b.current) return;
            const e = () => {
              b.current && p.current && h(b.current.clientWidth > p.current.clientWidth)
            };
            return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e)
          }), [b, p, a]), (0, l.useEffect)((() => {
            if (!f.current || !a?.duration) return;
            let e = null;
            const t = new(u())(f.current),
              n = e => {
                if (f.current) {
                  const t = f.current.clientWidth;
                  if (!f.current.contains(e.srcEvent.target)) return;
                  const n = Math.max(0, e.srcEvent.offsetX),
                    s = Number(n / t * a.duration);
                  i.currentTime = s
                }
              },
              s = () => {
                e ? i.pause() : i.play()
              },
              r = () => {
                e = i.paused, i.pause()
              };
            return t.on("panstart", r), t.on("panleft", n), t.on("panright", n), t.on("panend", s), t.on("tap", n), () => {
              t.off("panstart", r), t.off("panleft", n), t.off("panright", n), t.off("panend", s), t.off("tap", n)
            }
          }), [f.current, a.duration]), (0, l.useEffect)((() => {
            const e = Number(i?.currentTime);
            (t || !isNaN(e) && 0 !== e) && _(!0)
          }), [t, i?.currentTime]), (0, o.jsxs)("div", {
            className: v.controls,
            style: {
              "--track-color": d.color,
              "--track-mix-blend-mode": d.mix_blend_mode,
              "--current-pct": a.current / a.duration
            },
            children: [(0, o.jsx)("div", {
              className: [v.controlsCurrentBg, x ? v.controlsCurrentBgVisible : ""].join(" ")
            }), (0, o.jsx)("div", {
              className: v.controlsTrack,
              ref: p,
              children: (0, o.jsx)("span", {
                className: [v.controlsTrackTitle, k ? v.controlsTrackAnimating : ""].join(" "),
                ref: b,
                children: d.title
              })
            }), (0, o.jsxs)("div", {
              className: v.controlsButtons,
              children: [(0, o.jsx)("div", {
                className: v.controlsPrevTrack,
                onClick: () => {
                  m && (c(m[0]), g(!0), n(!0))
                }
              }), (0, o.jsx)("div", {
                className: [v.controlsPlayPause, t ? v.controlsPlayPausePlaying : ""].join(" "),
                onClick: () => {
                  n(!t)
                }
              }), (0, o.jsx)("div", {
                className: v.controlsNextTrack,
                onClick: () => {
                  m && (c(m[1]), g(!0), n(!0))
                }
              })]
            }), (0, o.jsx)("div", {
              active: s ? "" : null,
              className: v.controlsTrackBurger,
              children: (0, o.jsx)("div", {
                className: v.iconBurger,
                onClick: () => {
                  r(!s)
                }
              })
            }), (0, o.jsxs)("div", {
              className: v.controlsScrub,
              children: [(0, o.jsx)("span", {
                children: N(a.current)
              }), (0, o.jsx)("div", {
                className: v.controlsScrubTrack,
                ref: f
              }), (0, o.jsx)("span", {
                children: N(a.duration)
              })]
            })]
          })
        },
        k = e => {
          let {
            tracks: a,
            trackId: t,
            setTrackId: i,
            tracksOpen: n,
            setTracksOpen: s,
            setPlaying: r,
            setAutoNext: d
          } = e;
          return (0, o.jsxs)("div", {
            className: v.tracks,
            children: [(0, o.jsx)("h4", {
              children: "Tracks"
            }), (0, o.jsx)("div", {
              className: v.trackBurger,
              onClick: () => {
                s(!n)
              }
            }), (0, o.jsx)("div", {
              className: v.trackList,
              children: a.map(((e, a) => (0, o.jsxs)("a", {
                style: {
                  "--highlight-color": e.color
                },
                className: t === e.id ? v.trackActive : "",
                onClick: () => {
                  i(e.id), r(!0), d(!0)
                },
                children: [(0, o.jsx)("span", {
                  className: v.trackIndex,
                  children: String(a + 1).padStart(2, "0")
                }), (0, o.jsx)("span", {
                  className: v.trackTitle,
                  children: e.title
                }), (0, o.jsx)("span", {
                  className: v.trackTime,
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
            data: i
          } = (0, g.useQuery)(f.GetAudioAlbum, {
            variables: {
              id: a
            }
          }), [n, s] = (0, l.useState)(), [r, d] = (0, l.useState)(), [c, m] = (0, l.useState)(), [u, h] = (0, l.useState)(!1), [x, _] = (0, l.useState)(!1), [N, y] = (0, l.useState)(new HTMLAudioElement), [j, S] = (0, l.useState)({
            current: 0,
            duration: 0
          }), [w, T] = (0, l.useState)(!0);
          return (0, l.useEffect)((() => {
            const e = "audio",
              a = a => {
                a?.data?.rockstarAudioPlayerPlayTrackId && (d(a.data.rockstarAudioPlayerPlayTrackId), T(!1), _(!0)), x && a?.data?.attentionBlurredElsewhere && a?.data?.from !== e && _(!1)
              };
            return x && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: e
            }), window.addEventListener("message", a, !1), () => window.removeEventListener("message", a, !1)
          }), [x]), (0, l.useEffect)((() => {
            if (!N) return;
            const e = () => {
                isNaN(N.duration) || S({
                  duration: N?.duration ?? 0,
                  current: N?.currentTime ?? 0
                })
              },
              a = () => {
                w && n && d(n[1])
              };
            return N.addEventListener("loadedmetadata", e), N.addEventListener("timeupdate", e), N.addEventListener("ended", a), () => {
              N.removeEventListener("loadedmetadata", e), N.removeEventListener("timeupdate", e), N.removeEventListener("ended", a)
            }
          }), [N, n, w]), (0, l.useEffect)((() => {
            x && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: "audio"
            })
          }), [x]), (0, l.useEffect)((() => {
            N && (x ? N.play() : N.pause(), h(!1))
          }), [x, N, c?.id]), (0, l.useEffect)((() => {
            if (!r) return;
            const {
              tracks: e
            } = i.audioAlbum, a = i.audioAlbum.tracks.findIndex((e => e.id === r));
            s([e[a - 1]?.id ?? e[e.length - 1].id, e[a + 1]?.id ?? e[0].id]), m(e[a])
          }), [r]), (0, l.useEffect)((() => {
            i && d(i.audioAlbum.tracks[0].id)
          }), [i]), c ? (0, o.jsxs)("div", {
            className: [v.player, v[t], u ? v.tracksOpen : ""].join(" "),
            children: [(0, o.jsx)("audio", {
              ref: e => {
                y(e)
              },
              src: c.mp3_src
            }), (0, o.jsx)(k, {
              tracks: i.audioAlbum.tracks,
              setTrackId: d,
              trackId: r,
              tracksOpen: u,
              setTracksOpen: h,
              setPlaying: _,
              setAutoNext: T
            }), (0, o.jsx)(p, {
              src: c.cover_src
            }), (0, o.jsx)(b, {
              setTrackId: d,
              trackBounds: n,
              tracksOpen: u,
              setTracksOpen: h,
              playing: x,
              setPlaying: _,
              timing: j,
              trackData: c,
              audioRef: N,
              setAutoNext: T
            })]
          }) : null
        },
        x = e => {
          let {
            text: a,
            style: t
          } = e;
          return (0, o.jsx)("div", {
            className: "bac9ce215a30adc97fa2",
            style: t,
            children: a
          })
        },
        _ = {
          button: "f2f796c68d7aa20605b5",
          secondary: "e8cee39d13ef101955c9"
        },
        N = e => {
          let {
            className: a = "",
            children: t,
            context: i = "",
            to: n,
            ...s
          } = e;
          const r = [_.button, _[i], a].join(" ");
          return n ? (0, o.jsx)(c, {
            ...s,
            to: n,
            className: r,
            children: t
          }) : (0, o.jsx)("button", {
            ...s,
            className: r,
            children: t
          })
        };
      var y = t(9542),
        j = t(3797);
      const S = {
          deprecatedCarousel: "d7c06a375fc33ce5ed1c",
          "swiper-scrollbar-disabled": "c62806930d52b31261ad",
          "swiper-horizontal": "b62676614d97644bc5a6",
          "swiper-vertical": "cf93eb3498e93416e68c",
          renderedWithChildren: "aecba52f1282cec3e13c",
          panorama: "ef3aeec8f1f636f01a53",
          img: "fd038cafa8a7b4ccb1f2",
          hideMobile: "c19f263b217c14e3933a",
          hideLarge: "f3866b01a24a350d5f6c",
          imageAreaBg: "ad7607284e7610b66fb2",
          infinite_false: "b6601cba2bde1ff7c469",
          track: "e84cec4e15851e26d1f2",
          perico: "f7423457a949e09d5eb7",
          dotsSlide: "cc58183141c005ea1d9b",
          siblings: "e5879faad465f579025a",
          active: "d6c7eec791f446b1ae58"
        },
        w = e => {
          let {
            item: a
          } = e;
          return (0, o.jsxs)("div", {
            children: [(0, o.jsx)(aa, {
              image: a?.image,
              badge: a?.badge ?? a?.image?.badge,
              badgeType: "badge3",
              role: a?.role ?? a?.image?.role,
              splitter: a?.splitter ?? a?.image?.splitter,
              type: a?.type,
              ariaLabel: a?.image?.ariaLabel ?? a.description,
              style: a?.style,
              className: (0, y.classList)(S.img, a?.className)
            }), (a?.title || a?.description) && (0, o.jsx)(K, {
              item: a
            })]
          })
        },
        T = e => {
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
        C = e => {
          let {
            children: a,
            items: t = [],
            style: i = {},
            noInfiniteScroll: n = !1,
            className: s = "",
            renderTemplate: r = "standard",
            text: d,
            customSpaceBetween: c = null,
            centerSlides: m = !0
          } = e;
          const [u, g] = (0, l.useState)(0);
          if (!(t && 0 !== t?.length || a)) return null;
          const f = {
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
          return (0, o.jsxs)("div", {
            className: (0, y.classList)(S.deprecatedCarousel, S[r], S[`infinite_${!n}`], a ? S.renderedWithChildren : "", s),
            style: i,
            children: [(0, o.jsxs)(j.tq, {
              loop: !n,
              grabCursor: !0,
              centeredSlides: m,
              centerInsufficientSlides: m,
              slidesPerView: "auto",
              speed: 700,
              breakpoints: f,
              onActiveIndexChange: e => g(e?.realIndex ?? 0),
              children: [(0, o.jsx)("div", {
                className: S.trackWrapper,
                children: (0, o.jsxs)("div", {
                  className: S.track,
                  children: [t?.map((e => (0, o.jsx)(j.o5, {
                    children: (0, o.jsx)(w, {
                      item: e
                    })
                  }, e))), a && a?.map((e => (0, o.jsx)(j.o5, {
                    children: e
                  }, e)))]
                })
              }), (0, o.jsx)(T, {
                current: u,
                total: a ? a.length : t.length
              })]
            }), (d?.title || d?.description) && (0, o.jsx)(K, {
              item: d
            })]
          })
        };
      var E = t(9929),
        L = t(6711);
      const I = (0, t(6111).Hu)(),
        V = e => {
          let {
            condition: a = null,
            children: t
          } = e;
          const [i, n] = (0, l.useState)(!1), s = (e => {
            const [a] = (0, d.useSearchParams)(), [t, i] = (0, l.useState)(null), n = (0, L.useRockstarUser)(), {
              loggedIn: s
            } = n, r = function(e) {
              let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "gtao";
              return (0, l.useMemo)((() => {
                const t = e?.currentCharId,
                  i = e?.characters?.[a];
                return "1" === (i?.[t]?.stats?.overview?.hasGtaPlus?.value ?? "0")
              }), [e, a])
            }(n);
            return (0, l.useEffect)((() => {
              i(null);
              const n = "true" === a.get("conditionPreview");
              if (!(!e?.length > 0)) return I.applyFilters("preview_conditions", e), e.forEach((e => {
                const {
                  value: d
                } = e;
                if (n) return "true" === a.get(d) ? (i(!0), !0) : (i(!1), !1);
                if (!1 === t) return !1;
                switch (d) {
                  case "user:is:loggedIn":
                    i(!0 === s);
                    break;
                  case "user:not:loggedIn":
                    i(!1 === s);
                    break;
                  case "user:is:gtaPlus":
                    i(!0 === r);
                    break;
                  case "user:not:gtaPlus":
                    i(!1 === r);
                    break;
                  default:
                    i(!1)
                }
                return null
              })), () => {}
            }), [a, e, r, n, s]), t
          })(a);
          return (0, l.useEffect)((() => {
            n(s)
          }), [s]), (0, l.useMemo)((() => i ? t : null), [i])
        },
        $ = (0, E.withTranslations)((e => {
          let {
            children: a
          } = e;
          return l.Children.map(l.Children.toArray(a), (e => (0, o.jsx)(V, {
            ...e?.props
          })))
        }));
      var B = t(8969);
      const F = e => {
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
        z = {
          calloutContainer: "e3914a61fd9aa859a9d0",
          calloutSection: "e49bc9f67aeaa386f866",
          calloutHeaders: "b7127a98bd0551a9025e",
          calloutHeaderMargins: "f098d36c5c01b67c18b9",
          calloutHeader: "e4d1343db36be54e5ec7",
          calloutSubheader: "b7805dbb540b3ce22bfc",
          calloutVoteForm: "cf3e98f7443e4d1c0bc6",
          voteButton: "d1451ebff49a814a21ff",
          upvote: "faefbe6638749682ba0a",
          downvote: "fd1544b7df5264adbc45",
          active: "f9a08897ca235c8a14b9",
          calloutButton: "f5362716f60e13446a8e",
          calloutLink: "e22ad31b0334db688e53",
          calloutLinkIcon: "a0b361cb8442e24823f8"
        },
        M = e => {
          let {
            foreign_id: a,
            foreign_type: t
          } = e;
          const {
            track: i
          } = (0, L.useGtmTrack)(), {
            refetch: n
          } = (0, g.useQuery)(B.UserGetVote, {
            skip: !0
          }), [s] = (0, g.useMutation)(B.UserCastVote), [r, d] = (0, l.useState)(null), c = (0, l.useCallback)((e => {
            (async () => {
              if (e === r && null !== r) d(null);
              else {
                d(e), i({
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
                await s({
                  variables: n
                })
              }
            })()
          }), [a, t, r]);
          return (0, l.useEffect)((() => {
            a && t && (async () => {
              const e = await n({
                foreignId: a,
                foreignType: t
              });
              d(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [a, t]), (0, o.jsxs)("div", {
            className: z.calloutVoteForm,
            children: [(0, o.jsx)("button", {
              "aria-label": "upvote button",
              className: [z.upvote, z.voteButton, r ? z.active : ""].join(" "),
              name: "upvote",
              onClick: () => c(!0),
              type: "button"
            }), (0, o.jsx)("button", {
              "aria-label": "downvote button",
              className: [z.downvote, z.voteButton, !1 === r ? z.active : ""].join(" "),
              name: "downvote",
              onClick: () => c(!1),
              type: "button"
            })]
          })
        },
        D = e => {
          let {
            action_text: a,
            link: t
          } = e;
          return (0, o.jsx)("a", {
            href: t,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, o.jsxs)("button", {
              className: z.calloutLink,
              type: "button",
              children: [a, (0, o.jsx)(F, {
                className: z.calloutLinkIcon
              })]
            })
          })
        },
        R = (0, E.withTranslations)((e => {
          let {
            header: a,
            subheader: t,
            type: i,
            action_text: n,
            link: s,
            foreign_id: r = document.location.pathname,
            foreign_type: d = "url",
            t: c
          } = e;
          const {
            loggedIn: l
          } = (0, L.useRockstarUser)(), m = `${document.location.origin}/auth/sc-auth-login?returnUrl=${window.location.pathname}`;
          let u;
          if (!a && !t) return null;
          switch (i) {
            case "vote":
              if (!l) {
                u = (0, o.jsx)(N, {
                  to: m,
                  className: z.calloutButton,
                  children: "Log In"
                });
                break
              }
              u = (0, o.jsx)(M, {
                foreign_id: r,
                foreign_type: d
              });
              break;
            case "button":
              n && s && (u = (0, o.jsx)(N, {
                to: s,
                className: z.calloutButton,
                children: n
              }));
              break;
            case "link":
              n && s && (u = (0, o.jsx)(D, {
                action_text: n,
                link: s
              }));
              break;
            default:
              u = null
          }
          return (0, o.jsx)("div", {
            className: z.calloutContainer,
            children: (0, o.jsxs)("div", {
              className: z.calloutSection,
              children: [(0, o.jsxs)("div", {
                className: [z.calloutHeaders, u ? z.calloutHeaderMargins : ""].join(" "),
                children: [a && (0, o.jsx)("h1", {
                  className: z.calloutHeader,
                  children: c(a)
                }), t && (0, o.jsx)("h2", {
                  className: z.calloutSubheader,
                  children: c(t)
                })]
              }), u]
            })
          })
        })),
        A = e => {
          let {
            children: a,
            href: t,
            style: i
          } = e;
          return (0, o.jsx)("div", {
            className: "ac33f7c504f5254f8e80",
            style: i,
            children: (0, o.jsx)("a", {
              href: t,
              target: "_blank",
              rel: "noreferrer",
              children: a
            })
          })
        };
      var O = t(559);
      const P = "bf242a69d5229fde1671",
        G = "e5458c4a3f0cb5663be4",
        H = "c46ce1b6b8ea1aeb98cd",
        q = e => {
          let {
            alt: a,
            className: i,
            src: n,
            style: s
          } = e;
          const [r, d] = (0, E.usePreloadImg)(n);
          let c = n;
          !1 === r && (i === H && (c = t(8280)), c = t(8933));
          const l = {
            "--aspect-ratio": d.width / d.height,
            ...s
          };
          return (0, o.jsx)("img", {
            src: c,
            className: i ?? "",
            alt: a,
            style: l
          })
        },
        U = e => {
          let {
            className: a,
            style: i = {},
            image: n = {},
            imageStyle: s = {}
          } = e, {
            alt: r,
            src: d
          } = (0, O.useImageParser)(n);
          return d.desktop || d.mobile || (r = "placeholder", d = {
            mobile: t(8280),
            desktop: t(8933)
          }), (0, o.jsx)("div", {
            className: n.frame ? `${n.frame} ${P}` : P,
            style: i,
            children: d?.desktop && d?.mobile ? (0, o.jsxs)(o.Fragment, {
              children: [(0, o.jsx)(q, {
                style: {
                  ...s,
                  ...n?.style
                },
                src: d.desktop,
                alt: r,
                className: a ? `${a} ${G}` : G
              }), (0, o.jsx)(q, {
                style: {
                  ...s,
                  ...n?.style
                },
                src: d.mobile,
                alt: r,
                className: a ? `${a} ${H}` : H
              })]
            }) : (0, o.jsx)(q, {
              style: {
                ...s,
                ...n?.style
              },
              src: d?.desktop ?? d?.mobile,
              alt: r,
              className: a
            })
          })
        };
      var W = t(1683);
      const Q = {
          hr: "ae0c477489451041502f",
          redLine: "e35f43016ae1f2345302",
          gtao: "d04040a5527314201aa6"
        },
        Y = e => {
          let {
            style: a,
            className: t = "",
            type: i
          } = e;
          return (0, o.jsx)("div", {
            style: a,
            className: [Q.hr, Q[i], t].join(" ")
          })
        },
        X = "bb5b7b532ca0340c3435",
        Z = e => {
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
        K = e => {
          let {
            item: a,
            className: t = ""
          } = e;
          return (0, o.jsxs)("div", {
            className: (0, y.classList)("fd88ba706e803a317850", t),
            children: [a.title && (0, o.jsx)(Z, {
              to: a?.href ?? a?.to,
              children: (0, o.jsx)("h3", {
                children: a.title
              })
            }), Array.isArray(a?.description?.content) ? a.description.content?.map(((e, a) => e?.unorderedList ? (0, o.jsx)(W.Z, {
              columns: e.unorderedList.columns ?? null,
              style: {
                "--unordered-list-padding": "var(--grid-gap-static-sm)",
                "--unordered-list-margin-bottom": ".5rem"
              },
              noImg: !0,
              list: e.unorderedList.list
            }, a) : e?.image ? (0, o.jsx)(U, {
              image: e.image,
              className: e?.className,
              ariaLabel: e.image?.ariaLabel
            }, a) : e?.separator ? (0, o.jsx)("div", {
              style: {
                margin: `${e.separator.spacing} 0`
              },
              children: (0, o.jsx)(Y, {})
            }, a) : (0, o.jsx)("p", {
              children: (0, o.jsx)("span", {
                className: X,
                dangerouslySetInnerHTML: {
                  __html: e
                }
              })
            }, a))) : (0, o.jsx)("span", {
              className: X,
              dangerouslySetInnerHTML: {
                __html: a.description
              }
            })]
          })
        };
      var J = t(4582);
      const ee = e => {
          let {
            children: a,
            ...t
          } = e;
          const [i, n] = (0, l.useState)(!1);
          return (0, o.jsx)(J.iF, {
            ...t,
            onReady: () => {
              document.fonts.ready.then((() => {
                n(!0)
              }))
            },
            children: a
          })
        },
        ae = {
          badge: "c5c56c3e04a1851fa937",
          badgeSizeUpdate: "a316681347778ad4f119",
          badge2: "bce164d72f6012df909f",
          badge3: "a0cac400610dc1c1e2b1"
        },
        te = e => {
          let {
            wrapper: a,
            children: t,
            role: i,
            splitter: n
          } = e;
          return n || i ? a(t) : t
        },
        ie = e => {
          let {
            badge: a,
            badgeType: i,
            role: n,
            splitter: s
          } = e;
          const r = [];
          s ? a.split(s).map(((e, a) => r.push(e))) : r.push(a);
          let d = 100;
          return 2 == r.length && r[1].length < 4 && "off" !== r[1].toLowerCase() && 45, (0, o.jsxs)(te, {
            splitter: s,
            role: n,
            wrapper: e => (0, o.jsx)("div", {
              className: `${ae.badge} ${i?ae[i]:""} `,
              children: e
            }),
            children: [(0, o.jsx)(o.Fragment, {
              children: n && (0, o.jsx)(U, {
                image: {
                  alt: n,
                  desktop: t(9065)(`./${n}.png`)
                }
              })
            }), (0, o.jsx)(ee, {
              className: `${s||n?"":ae.badge} ${i?ae[i]:""}`,
              min: 8,
              max: 1e3,
              mode: s || n ? "single" : "multi",
              children: r[0]
            }), (0, o.jsx)(o.Fragment, {
              children: r.shift() && s && r.length >= 1 && (0, o.jsx)(ee, {
                min: 8,
                max: 1e3,
                mode: "single",
                forceSingleModeWidth: !0,
                children: r.join(" ")
              })
            })]
          }, "badge-wrapper")
        },
        ne = "d6ddb0500c624a198b6f",
        se = e => {
          let {
            color: a
          } = e;
          return (0, o.jsxs)("div", {
            className: "b82b84d749da9c3259ad",
            style: {
              "--loader-color": a
            },
            children: [(0, o.jsx)("div", {
              className: ne
            }), (0, o.jsx)("div", {
              className: ne
            }), (0, o.jsx)("div", {
              className: ne
            })]
          })
        },
        re = {
          dropdownWrapper: "fadfba853d9b4c486799",
          items: "cade19d95e11809396b0",
          open: "ae54547249588b7983c8",
          opener: "b845334a62d364009081",
          secondary: "a66203f2848fe6ca7929"
        },
        de = e => {
          let {
            children: a,
            className: t,
            title: i
          } = e;
          const [n, s] = (0, l.useState)(!1);
          return (0, o.jsxs)("div", {
            className: [re.dropdownWrapper, n ? re.open : "", void 0 !== t ? t : ""].join(" "),
            children: [(0, o.jsx)("button", {
              className: re.opener,
              onClick: () => s(!n),
              children: i
            }), (0, o.jsx)("div", {
              className: re.items,
              onClick: () => s(!1),
              children: a
            })]
          })
        };
      var oe = t(2324);
      const ce = e => {
          let {
            children: a,
            context: t = null,
            game: i,
            image: n = {},
            style: s = {},
            template: r = null,
            theme: d = null,
            reversedOnMobile: c = !1,
            className: l = ""
          } = e;
          const m = (0, O.useImageParser)(n),
            u = {
              ...s
            };
          return m?.src?.desktop && (u.background = `url(${m?.src?.desktop}) center/cover`), (0, o.jsx)("div", {
            className: (0, oe.classList)("c697c87f7c313df51629", c ? "ef02be9b8858c9180702" : "", l),
            "data-game": "community" === r ? null : i,
            style: (0, E.safeStyles)(u),
            "data-context": t,
            "data-template": r,
            "data-theme": d,
            children: a
          })
        },
        le = e => {
          let {
            caption: a,
            children: t,
            ...i
          } = e;
          return a ? (0, o.jsxs)("figure", {
            ...i,
            children: [t, (0, o.jsx)("figcaption", {
              dangerouslySetInnerHTML: {
                __html: a
              }
            })]
          }) : t
        },
        me = e => {
          let {
            componentTitle: a,
            type: t,
            items: i
          } = e;
          return i?.length ? (0, o.jsx)("div", {
            className: "e690331a56059fbc1bea",
            type: t,
            children: (0, o.jsxs)(ce, {
              children: [a && (0, o.jsx)("h3", {
                children: a
              }), (0, o.jsx)(ce, {
                className: "e015a00e3540621e8966",
                children: i.map(((e, a) => {
                  return e?.embed ? (0, o.jsx)(le, {
                    caption: e?.caption,
                    children: (0, o.jsx)("div", {
                      className: "a4fc1364a24525bdd78b",
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
      var ue = t(7363);
      const ge = {
          type: "spring",
          stiffness: 650,
          damping: 45
        },
        fe = {
          ease: "easeOut",
          duration: .9,
          delay: .3
        },
        ve = {
          open: {
            opacity: 0,
            transition: {
              ease: "easeOut",
              duration: .3
            }
          },
          closed: {
            opacity: 1,
            transition: fe
          }
        },
        pe = {
          open: {
            opacity: 1,
            display: "grid",
            height: "auto",
            transition: {
              opacity: fe,
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
              height: ge
            },
            transitionEnd: {
              display: "none"
            }
          }
        },
        be = {
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
            transition: ge,
            transitionEnd: {
              "--btn-hover-bg-color": "inherit",
              "--btn-hover-bg-color-noBlur": "inherit",
              "--btn-hover-font-color": "inherit",
              "--btn-hover-border-color": "inherit"
            }
          }
        },
        ke = {
          container: "be57c52943608ddf59c2",
          content: "cfe275314abbd166e236",
          unexpandedButton: "b870021e51bcabfd89b2",
          expandedArea: "fce6fc038ff582eb5846",
          closeButton: "a953e0445dcb20205a63",
          platformButtons: "c3cd96646f7f9949aae5",
          platformButton: "c66dc397b79b1a2ba66f",
          xboxone: "dc7f4998dc138ccb6aab",
          xboxseriesxs: "b449cc2f1d1635bd5df3",
          ps4: "be50474c118284a6e8bb",
          ps5: "d164d0a62b0c27eb52e0",
          pc: "c25189f8d019031cd50f",
          buttonText: "ecefe77b5da17c0a3751"
        },
        he = e => {
          let {
            buttonText: a = "",
            link: i = "",
            platform: n = "",
            onClick: s
          } = e;
          const r = i.startsWith(document.location.origin) ? "_self" : "_blank",
            c = [ke.platformButton, ke[n]].join(" "),
            l = n ? t(3631)(`./${n}.svg`) : null,
            m = (0, o.jsxs)(o.Fragment, {
              children: [l ? (0, o.jsx)("img", {
                src: l
              }) : "", (0, o.jsx)("div", {
                className: ke.buttonText,
                children: a
              })]
            });
          return i.startsWith("http") ? (0, o.jsx)("span", {
            onClick: s,
            children: (0, o.jsx)("a", {
              href: i,
              className: c,
              target: r,
              children: m
            })
          }) : (0, o.jsx)(d.NavLink, {
            className: c,
            onClick: s,
            to: i,
            children: m
          })
        },
        xe = e => {
          let {
            buttonText: a = "Subscribe",
            children: i,
            platformsAndLinks: n = []
          } = e;
          const [s, r] = (0, l.useState)(!1), {
            track: d
          } = (0, L.useGtmTrack)();
          return (0, o.jsxs)("div", {
            className: ke.container,
            children: [(0, o.jsx)(ue.E.div, {
              className: ke.content,
              animate: s ? "open" : "close",
              variants: ve,
              children: i
            }), (0, o.jsxs)(ue.E.div, {
              onClick: () => {
                r(!s)
              },
              className: ke.unexpandedButton,
              animate: s ? "open" : "closed",
              variants: be,
              initial: !1,
              children: [(0, o.jsx)(ue.E.div, {
                className: ke.buttonText,
                children: "string" == typeof a ? a : "Subscribe"
              }), (0, o.jsxs)(ue.E.div, {
                className: ke.expandedArea,
                animate: s ? "open" : "closed",
                variants: pe,
                initial: !1,
                children: [(0, o.jsx)("img", {
                  className: ke.closeButton,
                  onClick: () => r(!1),
                  src: t(9545)
                }), (0, o.jsx)("div", {
                  className: ke.platformButtons,
                  children: n.length ? n.map(((e, a) => (0, o.jsx)(he, {
                    buttonText: e.buttonText ?? "",
                    link: e.href,
                    platform: e.platform,
                    onClick: () => (e => {
                      let {
                        href: a,
                        platform: t
                      } = e;
                      d({
                        event_action: "store_link",
                        event_category: "cta",
                        event: "cta_store_link",
                        event_label: "platform button",
                        text: t,
                        link_url: a
                      })
                    })(e)
                  }, a))) : ""
                })]
              })]
            })]
          })
        },
        _e = {
          animateBox: "d79e4df595c4196a4456",
          fadeArea: "b6209d5da943d66d8b63",
          visible: "ee34ae7cf81c1083ffc9",
          barGrow: "df2b636284886da578d7",
          bar: "e839fdcdcef89badd41c",
          animateMe: "cf9b5b4b10438cc31240"
        },
        Ne = e => {
          let {
            children: a,
            style: t
          } = e;
          const i = (0, l.useRef)(null);
          return (0, l.useEffect)((() => {
            new IntersectionObserver((e => {
              e.forEach((e => {
                e.isIntersecting && e.target.classList.add([_e.visible])
              }))
            })).observe(i.current)
          }), []), (0, o.jsx)("div", {
            style: t,
            className: [_e.fadeArea].join(" "),
            ref: i,
            children: a
          })
        },
        ye = {
          img: "dc8c683c436f74586e7b",
          startAnimation: "a1b95a9bde496a003c95"
        },
        je = e => {
          let {
            imgSrc: a,
            titleSlug: t
          } = e;
          const [i] = (0, E.usePreloadImg)(a);
          return (0, o.jsx)("div", {
            role: "img",
            "aria-label": t,
            className: [ye.img, i ? ye.startAnimation : ""].join(" "),
            style: {
              backgroundImage: `url(${a})`
            }
          })
        },
        Se = e => {
          let {
            game: a,
            to: t
          } = e;
          const {
            fob_640: i,
            site_in_rockstar: n = !1,
            title_slug: s
          } = a, r = "V" === s ? "gta-v" : "GTAOnline" === s ? "gta-online" : s, d = t ?? `${n?"":"/games"}/${r}`;
          return (0, o.jsx)(c, {
            "aria-label": a,
            "data-gtm-category": "Games",
            "data-gtm-action": "Game Click-through",
            "data-gtm-label": r,
            to: d,
            target: "_self",
            className: "a1d8ee283069b56fe549",
            children: (0, o.jsx)(je, {
              imgSrc: i,
              titleSlug: r
            })
          })
        },
        we = {
          gameSiteHeader: "fe27c37cb6585d7b7d60",
          activeNavItem: "a744303e87236a7fe626",
          navHidden: "deccde34bbfbdbaadbec",
          navContent: "c4dffa014a2db58def92",
          headerNavOpen: "f29bb34557215bc90950",
          headerLogo: "f272d361dcbf5808666b",
          bg: "d8c7366f10a21fc14628"
        },
        Te = e => {
          let {
            buttonText: a = null,
            gameOverrideStyles: t,
            navLinks: i,
            cta: n = "",
            game: s
          } = e;
          const [r, d] = (0, l.useState)(!1), c = (0, g.useMutateState)(), {
            navHidden: m
          } = (0, g.useState)();
          return (0, l.useEffect)((() => {
            c({
              gameSiteNavOpen: r
            })
          }), [r]), (0, l.useEffect)((() => {
            const e = () => {
              d(!1)
            };
            return document.addEventListener("click", e), () => document.removeEventListener("click", e)
          }), []), (0, o.jsxs)("header", {
            "data-game": s,
            className: [we.gameSiteHeader, r ? we.headerNavOpen : "", m ? we.navHidden : "", t.gameSiteHeader, r ? t.headerNavOpen : ""].join(" "),
            children: [(0, o.jsx)("button", {
              className: [we.headerLogo, t.headerLogo].join(" "),
              onClick: e => {
                d(!r), e.nativeEvent.stopImmediatePropagation()
              },
              type: "button",
              "aria-label": "Open Game Site Nav",
              dangerouslySetInnerHTML: {
                __html: a
              }
            }), (0, o.jsx)("div", {
              className: we.bg
            }), (0, o.jsx)("nav", {
              children: (0, o.jsx)("div", {
                className: we.navContent,
                children: i
              })
            }), n]
          })
        };
      var Ce = t(5977);
      class Ee extends l.Component {
        constructor(e) {
          super(e), this.state = {
            header: e.header ?? null
          }
        }
        componentDidUpdate(e) {
          e.error !== this.props.error && this.setState({
            error: this.props.error
          })
        }
        static getDerivedStateFromError(e) {
          return {
            error: {
              message: e.message ?? e.toString()
            }
          }
        }
        componentDidCatch(e, a) {}
        render() {
          return this?.state?.error?.message ? (0, o.jsxs)("div", {
            className: "f5139d7f80fba982ac24",
            children: [(0, o.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, o.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      const Le = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return function(t) {
            return (0, o.jsx)(Ee, {
              header: a,
              children: (0, o.jsx)(e, {
                ...t
              })
            })
          }
        },
        Ie = Le((e => {
          let {
            description: a,
            slideChildren: t,
            size: i,
            title: n,
            customSlidesPerView: s = null,
            customSpaceBetween: r = null,
            slideClass: d,
            style: c,
            className: m
          } = e;
          const {
            track: u
          } = (0, L.useGtmTrack)(), g = (0, l.useRef)(null), f = (0, l.useRef)(null), v = (0, l.useRef)(null), [p, b] = (0, l.useState)(null), [k, h] = (0, l.useState)(null), [, x] = (0, l.useState)({}), [_, N] = (0, l.useState)(), S = {
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
          return (0, l.useEffect)((() => {
            if (!g.current) return;
            const e = () => {
              if (g.current) {
                const e = s || Number(window.getComputedStyle(g.current).getPropertyValue("--slides-per-view")),
                  a = s ? 1 : Number(window.getComputedStyle(g.current).getPropertyValue("--slides-per-view-multiplier"));
                h(e * a)
              }
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [g, s]), (0, l.useEffect)((() => {
            if (!t) return;
            const e = t.map(((e, a) => (0, o.jsx)(j.o5, {
              children: e
            }, Symbol(a).toString())));
            b(e)
          }), [t]), (0, l.useEffect)((() => {
            N({
              nextEl: v.current,
              prevEl: f.current
            })
          }), [v, f]), (0, o.jsxs)("div", {
            className: (0, y.classList)("b64388286d495640e2ab", m),
            "data-size": i,
            ref: g,
            style: c,
            children: [(0, o.jsxs)("div", {
              className: "b1b0c02e52077bb30d3f",
              children: [n && (0, o.jsx)("h2", {
                children: n
              }), (0, o.jsxs)("div", {
                className: "f342658f4bc799d5517c",
                children: [(0, o.jsx)("div", {
                  className: "ff2aff376d6a01f6cb73",
                  ref: f
                }), (0, o.jsx)("div", {
                  className: "ee9bbee58d7d850c5a49",
                  ref: v
                })]
              })]
            }), a && (0, o.jsx)("div", {
              className: "f759f04301770fdd6a1b",
              dangerouslySetInnerHTML: {
                __html: a
              }
            }), k ? (0, o.jsx)(j.tq, {
              slidesPerView: k,
              onInit: e => x(e),
              grabCursor: !0,
              navigation: _,
              modules: [Ce.W_],
              breakpoints: S,
              slideClass: (0, y.classList)("swiper-slide", d),
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
              children: p
            }) : ""]
          })
        })),
        Ve = e => {
          let {
            brands: a = []
          } = e;
          return a.length ? (0, o.jsx)("div", {
            className: "dda1d2a07edde4eed327",
            children: a.map(((e, a) => {
              let {
                brand: t
              } = e;
              return (0, o.jsx)("div", {
                className: "cfff18405900921e505b",
                "data-brand": t
              }, a)
            }))
          }) : null
        },
        $e = {
          plusButton: "aaee61f04d2d9143075b",
          small: "fd4d696b5878fef3440e",
          btnText: "bee352a145ea42995ccb",
          btnTexticon: "e08b91d4c8af486a20e5",
          whiteBtn: "f32ae245931769bf4f55",
          blackBtn: "a19d0823134f079ab324",
          transparentBtn: "f301a23e9c383f039f76",
          iconBtn: "a1a86c3fe6e2976607d0",
          link: "baca8995c81929d82d6b",
          xboxone: "c03e2fcd6af152915adc",
          xboxseriesxs: "e9e1c94bf6c22b7a8f78",
          ps4: "b621385ee067ecf61103",
          ps5: "a792db7d5dc5b891d82e",
          pc: "b61a9dd47bf807ba0925"
        },
        Be = e => {
          let {
            children: a,
            className: t,
            onClick: i,
            style: n
          } = e;
          return (0, o.jsx)("button", {
            className: t,
            onClick: i ? () => i() : () => {},
            style: n,
            type: "button",
            children: a
          })
        },
        Fe = e => {
          let {
            children: a,
            className: t,
            onClick: i,
            style: n,
            to: s
          } = e;
          return (0, o.jsx)(d.NavLink, {
            className: t,
            onClick: i ? () => i() : () => {},
            style: n,
            to: s,
            children: a
          })
        },
        ze = e => {
          let {
            btnColor: a = "#fff",
            consoleBtn: t,
            icon: i = "",
            img: n,
            labelColor: s = "#000",
            onClick: r,
            secondText: d,
            size: c,
            text: l,
            to: m,
            type: u = ""
          } = e;
          const g = [$e.plusButton, $e[u] ?? "", $e[c] ?? "", $e[t] ?? ""].join(" "),
            f = {
              "--hvr-color": a ?? s,
              "--hvr-bg-color": s ?? a,
              "--hvr-border-color": a ?? s
            },
            v = (0, o.jsxs)(o.Fragment, {
              children: [n ? (0, o.jsx)("img", {
                src: n,
                alt: ""
              }) : "", (0, o.jsxs)("div", {
                className: $e.btnText,
                icon: i,
                children: [l, d ? (0, o.jsx)("span", {
                  children: d
                }) : ""]
              })]
            });
          if (m) {
            if (m.startsWith("http")) {
              const e = m.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, o.jsx)("span", {
                onClick: r ? () => r() : () => {},
                onKeyDown: r,
                role: "button",
                tabIndex: 0,
                children: (0, o.jsx)("a", {
                  href: m,
                  className: g,
                  target: e,
                  children: v
                })
              })
            }
            return (0, o.jsx)(Fe, {
              className: g,
              onClick: r ? () => r() : () => {},
              style: f,
              to: m,
              children: v
            })
          }
          return (0, o.jsx)(Be, {
            className: g,
            onClick: r ? () => r() : () => {},
            style: f,
            children: v
          })
        },
        Me = e => {
          let {
            buttons: a = [],
            className: t
          } = e;
          return a.length ? (0, o.jsx)("div", {
            className: (0, y.classList)("f7e394d24516cf4ef277", t),
            children: a.map(((e, a) => {
              let {
                icon: t,
                title: i,
                to: n
              } = e;
              return i ? (0, o.jsx)(ze, {
                icon: t,
                text: i,
                to: n
              }, a) : ""
            }))
          }) : null
        },
        De = {
          hero: "bece3423e7348fe897dd",
          images: "e4f748c1ff815d8b9037",
          background: "b5ced9959e35f2253f74",
          gradient: "e0fe7c3119deb0390f3a",
          layered: "f0fcd0b3f97b9d26ac9a",
          content: "f80d5ef43a4ca7f8db9a",
          descriptions: "a0274a048775d56472f3",
          buttonGroup: "b3b215f6051dcab57e88",
          legalText: "fdc2ef25c828ac791dc6",
          shardsCarousel: "a10586bf7a52bd0b2244"
        },
        Re = {
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
        Ae = {
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
        Oe = e => {
          let {
            title: a = "",
            mobileImg: t,
            desktopImg: i
          } = e;
          const n = (0, y.useGetCdnSource)(t ?? null),
            s = (0, y.useGetCdnSource)(i ?? n);
          return (0, o.jsx)("div", {
            className: De.shard,
            style: {
              "--background-image-mobile": `url(${n})`,
              "--background-image-desktop": `url(${s})`
            },
            children: (0, o.jsx)("h5", {
              children: a
            })
          })
        },
        Pe = e => {
          let {
            title: a = "Membership Rewards",
            shards: t
          } = e;
          const [i, n] = (0, l.useState)(null);
          return (0, l.useEffect)((() => {
            t && n(t.reduce(((e, a) => {
              if (!a?.shardImg) return e;
              const {
                title: t,
                shardImg: i
              } = a, {
                mobile: n,
                desktop: s
              } = i;
              return e.push((0, o.jsx)(Oe, {
                title: t,
                mobileImg: n?.full_src,
                desktopImg: s?.full_src
              })), e
            }), []))
          }), [t]), i ? (0, o.jsx)("div", {
            className: De.shardsCarousel,
            children: (0, o.jsx)(Ie, {
              title: a,
              slideChildren: i,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        Ge = e => {
          let {
            animated: a = !1,
            ctas: t = [],
            description: i,
            expandingButtonLabel: n = "Subscribe",
            title: s
          } = e;
          const [r, d] = (0, l.useState)([]), [c, m] = (0, l.useState)([]);
          return (0, l.useEffect)((() => {
            d(t.reduce(((e, a) => a.isInExpandingButton ? (e.push({
              href: a.href,
              platform: a.platform,
              buttonText: a.buttonText
            }), e) : e), [])), m(t.reduce(((e, a) => (a.isInExpandingButton || e.push({
              icon: a.platform ? a.platform : "",
              title: a.buttonText,
              to: a.href
            }), e)), []))
          }), t), t.length ? r.length ? (0, o.jsx)(ue.E.div, {
            variants: a ? Ae : void 0,
            children: (0, o.jsxs)(xe, {
              buttonText: n,
              platformsAndLinks: r,
              children: [(0, o.jsxs)(ue.E.div, {
                className: De.descriptions,
                variants: a ? Ae : void 0,
                children: [(0, o.jsx)("h2", {
                  dangerouslySetInnerHTML: {
                    __html: s
                  }
                }), (0, o.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: i
                  }
                })]
              }), !!c && !!c.length && (0, o.jsx)(ue.E.div, {
                variants: Ae,
                children: (0, o.jsx)(Me, {
                  buttons: c,
                  className: De.buttonGroup
                })
              })]
            })
          }) : (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsxs)(ue.E.div, {
              className: De.descriptions,
              variants: a ? Ae : void 0,
              children: [(0, o.jsx)("h2", {
                dangerouslySetInnerHTML: {
                  __html: s
                }
              }), (0, o.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: i
                }
              })]
            }), !!c && !!c.length && (0, o.jsx)(ue.E.div, {
              variants: Ae,
              children: (0, o.jsx)(Me, {
                buttons: c,
                className: De.buttonGroup
              })
            })]
          }) : (0, o.jsxs)(ue.E.div, {
            className: De.descriptions,
            variants: a ? Ae : void 0,
            children: [(0, o.jsx)("h2", {
              dangerouslySetInnerHTML: {
                __html: s
              }
            }), (0, o.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: i
              }
            })]
          })
        },
        He = e => {
          let {
            animated: a = !1,
            brands: t = [],
            ctas: i = [],
            description: n = "",
            expandingButtonLabel: s = "Subscribe",
            title: r = "",
            legalText: d
          } = e;
          return (0, o.jsxs)(ue.E.div, {
            className: De.content,
            initial: "hidden",
            animate: "visible",
            variants: a ? Re : void 0,
            children: [(0, o.jsx)(ue.E.div, {
              variants: a ? Ae : void 0,
              children: (0, o.jsx)(Ve, {
                brands: t
              })
            }), (0, o.jsx)(Ge, {
              animated: a,
              ctas: i,
              description: n,
              expandingButtonLabel: s,
              title: r
            }), d && (0, o.jsx)(ue.E.div, {
              className: De.legalText,
              variants: a ? Ae : void 0,
              children: (0, o.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: d
                }
              })
            })]
          })
        },
        qe = e => {
          let {
            animated: a = !1,
            backgroundImage: t,
            brands: i = [],
            className: n,
            ctas: s = [],
            description: r = "",
            expandingButtonLabel: d = "Subscribe",
            layeredImage: c,
            layeredImageSettings: l,
            legalText: m,
            shardsSection: u = {},
            theme: g = "gen9",
            title: f = ""
          } = e;
          const v = (e => {
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
                const [i, n] = e;
                if (t.has(i)) {
                  const e = t.get(i);
                  Object.entries(n).forEach((n => {
                    const [s, r] = n;
                    if (t.has(i) && t.has(s)) {
                      const i = `${t.get(s)}${e}`;
                      a[i] = "imageWidth" !== s ? r ? `${r}px` : "0px" : r ? `${r}vw` : "100vw"
                    }
                  }))
                }
              })), a
            })(l),
            p = (0, y.useGetCdnSource)(t?.mobile?.full_src ?? null),
            b = (0, y.useGetCdnSource)(t?.desktop?.full_src ?? p),
            k = (0, y.useGetCdnSource)(c?.mobile?.full_src ?? null),
            h = (0, y.useGetCdnSource)(c?.desktop?.full_src ?? k);
          return (0, o.jsxs)(ue.E.div, {
            className: (0, y.classList)(De.hero, n),
            style: {
              "--background-image-desktop": `url(${b})`,
              "--background-image-mobile": `url(${p})`,
              "--layered-image-desktop": `url(${h})`,
              "--layered-image-mobile": `url(${k})`
            },
            initial: "hidden",
            animate: "visible",
            variants: a ? Re : void 0,
            "data-type": "hero",
            theme: g,
            children: [(0, o.jsxs)("div", {
              className: De.images,
              children: [b && p ? (0, o.jsx)("div", {
                className: De.background,
                style: t?.style ?? {}
              }) : "", k && h ? (0, o.jsx)("div", {
                className: De.layered,
                style: l ? v : {}
              }) : "", (0, o.jsx)("div", {
                className: De.gradient
              })]
            }), (0, o.jsx)(He, {
              animated: a,
              ctas: s,
              description: r,
              expandingButtonLabel: d,
              title: f,
              brands: i,
              legalText: m
            }), u?.shards && (0, o.jsx)(Pe, {
              ...u
            })]
          })
        };
      var Ue = t(948),
        We = t.n(Ue);
      const Qe = e => {
          let {
            children: a,
            attributes: t = {},
            className: i = "",
            style: n = {}
          } = e;
          return (0, o.jsx)("span", {
            className: (0, y.classList)(i, t?.className, "d29f95ed3bc7c6d7c617"),
            style: (0, E.safeStyles)(n ?? t?.style ?? {}),
            dangerouslySetInnerHTML: {
              __html: We().unescape(a)
            }
          })
        },
        Ye = {
          languageSelector: "f166a9ac105f2369a3dc",
          open: "dae05bdd156653f28cc6",
          linkWrapper: "b8a37e9fec4e19718bad",
          links: "d68cd45af954ada8339b"
        },
        Xe = (0, E.withTranslations)((e => {
          let {
            t: a
          } = e;
          const t = (0, d.useLocation)(),
            [i, n] = (0, l.useState)(!1),
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
            className: [Ye.languageSelector, i ? Ye.open : ""].join(" "),
            children: [(0, o.jsxs)("button", {
              onClick: () => n(!i),
              type: "button",
              "aria-label": "Language Selector",
              children: [(0, o.jsx)("i", {}), (0, o.jsx)("span", {
                children: a("current-language")
              })]
            }), (0, o.jsx)("div", {
              className: Ye.linkWrapper,
              children: (0, o.jsx)("div", {
                className: Ye.links,
                children: s.map((e => {
                  let {
                    base: a,
                    text: i
                  } = e;
                  return (0, o.jsx)(c, {
                    to: `${window.location.origin}${a}${t.pathname}${t.search}`,
                    children: i
                  }, i)
                }))
              })
            })]
          })
        })),
        Ze = {
          layeredImage: "fe055e03d755d327f68b",
          layersWrapper: "ed9fb715b12c8922091c",
          "hero-lg": "b14311c40aa111444c4f",
          "hero-md": "c03dc01fd60d629070a7",
          "hero-sm": "e4afc321441749195cbe",
          contain: "fe34b6e44a872251cd8c",
          cover: "bc38a5997d08467d0210",
          "bg-img": "e4fde483f33dda9ad1ac",
          imageLayer: "eb82e236806638e1831d",
          "layer-lg-height": "d0ba0140371ae5f1a833",
          "layer-md-height": "a3c442f71d344ee0070d",
          "layer-sm-height": "b2e3a701514d31bc7fa6",
          "layer-xl-height": "f750384c6c8f8c4a93f8",
          "layer-xs-height": "ed156fec9aec1fdad9d8",
          "layer-xxl-height": "c6339a90f75282ca4796",
          "layer-lg-width": "a5cc4ed6f65c9eecec0f",
          "layer-md-width": "d01397671439af05e861",
          "layer-sm-width": "e56480b5dd53e45ad22e",
          "layer-xl-width": "d8feacc718c48748c751",
          "layer-xs-width": "b4c7390aed100757acfb",
          "layer-xxl-width": "c9764a5f568cfc513265",
          "bottom-y": "ccddb186e7ad73398712",
          "center-x": "d1d54565cd99dc5734fa",
          "center-y": "ffaff7ec59daea41278d",
          "left-x": "e07a30de60556b257e90",
          "right-x": "f435a185c8d34ffe25d5",
          "top-y": "a09d6d2ccff606e24bfd",
          border: "a115318c6185182f4644",
          shards: "a784f35f03c2b55da23d",
          shards_three: "c3fdbf638bbef9710161",
          shards_two: "c02b70bf2011870f3b5b",
          dual: "e8db8a69d0b33f0a6fe6"
        },
        Ke = e => {
          let {
            style: a,
            className: t
          } = e;
          const i = {
              ...a
            },
            n = a["--border-image-source"];
          return n && (i["--border-image-source"] = `url(${(0,y.useGetCdnSource)(n)})`), (0, o.jsx)("div", {
            className: (0, y.classList)(Ze.border, t),
            style: {
              ...i
            }
          })
        },
        Je = e => e?.images ? (0, o.jsx)("div", {
          className: (0, y.classList)(Ze.layeredImage, Ze[e?.variantClass], Ze[e?.wrapperSizeClass]),
          style: {
            ...e?.style ?? {}
          },
          children: (0, o.jsxs)("div", {
            className: Ze.layersWrapper,
            children: [e?.images?.map(((e, a) => {
              const {
                image: t,
                paddingClass: i,
                imageSizeClass: n,
                objectFitClass: s,
                positionClassX: r,
                positionClassY: d,
                zIndex: c,
                className: l,
                style: m,
                alt: u,
                displayClass: g
              } = e;
              return (0, o.jsx)(U, {
                image: t,
                style: {
                  zIndex: c ?? ++a
                },
                imageStyle: m,
                className: (0, y.classList)(l, g, Ze.imageLayer, Ze[i], Ze[n], Ze[s], Ze[r], Ze[d]),
                alt: u
              }, c ?? ++a)
            })), e?.borderImage && (0, o.jsx)(Ke, {
              style: e?.borderImage,
              className: e?.borderImage?.displayClass
            })]
          })
        }) : null,
        ea = e => {
          let {
            hero: a,
            children: t
          } = e;
          return a ? (0, o.jsx)("div", {
            className: "d1f3fa1daee184b8bbce",
            children: t
          }) : t
        },
        aa = e => {
          let {
            badge: a = null,
            badgeType: t,
            discountTxt: i,
            splitter: n,
            image: s,
            style: r,
            className: d = "",
            attributes: c = {},
            role: l,
            hero: m = !1
          } = e;
          return (0, o.jsx)(ea, {
            hero: m,
            children: (0, o.jsx)("figure", {
              children: (0, o.jsxs)("div", {
                className: (0, y.classList)("bf489090b1d2699c92a4", m ? "e5c17109e2f485cf10fa" : "", c?.hiddenMobile ? "hiddenMobile" : "", c?.hiddenLarge ? "hiddenLarge" : "", c?.className, d),
                style: (0, E.safeStyles)({
                  ...r,
                  ...c?.style
                }),
                ...c,
                children: [(0, o.jsx)(U, {
                  image: s,
                  className: d
                }), (s?.badge || s?.discountTxt || a || i) && (0, o.jsx)(ie, {
                  badge: s?.discountTxt ?? s?.badge ?? a ?? i,
                  badgeType: t,
                  splitter: s?.splitter ?? n,
                  role: s?.role ?? l
                }), s?.caption && (0, o.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: s.caption
                  }
                })]
              })
            })
          })
        },
        ta = {
          tag: "c34ddc7e68d6e0a43aa3"
        },
        ia = e => {
          let {
            className: a,
            href: t,
            title: i,
            style: n
          } = e;
          const s = (0, o.jsxs)("div", {
            style: n,
            className: [ta.tag, a].join(" "),
            children: [(0, o.jsx)("i", {}), i]
          });
          return void 0 !== t ? (0, o.jsx)(c, {
            to: t,
            children: s
          }) : s
        },
        na = {
          newswireBlock: "a97e3c48c2de4beda1b1",
          info: "b37e339b7babb86eb265",
          title: "b536165692b314b850e2",
          newswireBlockNoSpecialOrder: "e577e50e921ab5910ff9",
          preview: "c935c727f0c9b7f71a6f",
          previewMobile: "a73fde693c4a2a4052a5",
          top: "a3662abbd063913c0a3b",
          startAnimation: "c8bf6fa8ccd8d8248584"
        },
        sa = e => {
          let {
            index: a,
            post: t,
            noSpecialOrder: i = !1,
            style: n = {}
          } = e;
          const [s] = (0, d.useSearchParams)(), r = t.preview_images_parsed.newswire_block, l = {
            default: 0 !== a || i ? r.square || r.d16x9 || r._fallback : r.d16x9 || r.square || r._fallback,
            mobile: r.square || r._fallback
          }, [m, u] = (0, E.usePreloadImg)(l.default), [g, f] = (0, E.usePreloadImg)(l.mobile), v = {
            default: {
              backgroundImage: `url(${l.default})`
            },
            mobile: {
              backgroundImage: `url(${l.mobile})`
            }
          };
          return (0, o.jsx)(c, {
            "data-gtm-category": "Newswire",
            "data-gtm-action": "Article Block Click",
            "data-gtm-label": `${t.title}`,
            to: t.url,
            className: [na.newswireBlock, i ? na.newswireBlockNoSpecialOrder : "", null !== m ? na.startAnimation : ""].join(" "),
            children: (0, o.jsxs)(o.Fragment, {
              children: [0 !== a || s.get("tag_id") ? (0, o.jsx)("div", {
                className: na.preview,
                style: v.default
              }) : (0, o.jsxs)(o.Fragment, {
                children: [(0, o.jsx)("div", {
                  className: na.previewMobile,
                  style: v.mobile
                }), (0, o.jsx)("div", {
                  className: na.preview,
                  style: v.default
                })]
              }), (0, o.jsxs)("div", {
                className: na.info,
                children: [(0, o.jsxs)("div", {
                  className: na.top,
                  children: [t.primary_tags.length ? (0, o.jsx)(ia, {
                    title: t.primary_tags[t.primary_tags.length > 1 && 722 === t.primary_tags[0].id ? 1 : 0].name
                  }) : "", (0, o.jsx)("time", {
                    dateTime: t.created,
                    children: t.created_formatted
                  })]
                }), (0, o.jsx)("h5", {
                  className: na.title,
                  dangerouslySetInnerHTML: {
                    __html: t.title
                  }
                })]
              })]
            })
          })
        };
      var ra = t(848),
        da = t.n(ra);
      const oa = (0, E.withTranslations)((e => {
          let {
            relativeTo: a = "",
            tagId: t = null,
            metaUrl: i = "/newswire",
            t: n
          } = e;
          const [s] = (0, d.useSearchParams)(), {
            tagId: r = null
          } = (0, d.useParams)(), [c, m] = (0, l.useState)(r ?? t ?? s.get("tag_id")), [u, f] = (0, l.useState)(1), [v, p] = (0, l.useState)([]), [b, k] = (0, l.useState)(null), {
            data: h
          } = (0, g.useQuery)(da(), {
            variables: {
              tagId: Number(c),
              page: u,
              metaUrl: i
            },
            autoSetLoading: !0
          });
          return (0, l.useEffect)((() => {
            f(1), p([]), m(r ?? t ?? s.get("tag_id"))
          }), [s.get("tag_id")]), (0, l.useEffect)((() => {
            h && h.posts && h.posts.paging && k(h.posts.paging), h && h.posts && h.posts.results && p(v.concat(h.posts.results))
          }), [h]), v.length ? (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(ua, {
              posts: v,
              relativeTo: a,
              noSpecialOrder: null !== c
            }), null !== b && b.nextPage ? (0, o.jsx)(N, {
              onClick: () => f(u + 1),
              disabled: !1,
              context: "secondary",
              children: n("More Stories")
            }) : ""]
          }) : null
        })),
        ca = {
          related: "dab943d0a03bc8dd3045",
          posts: "dc1a17e1a45a2aad85c4",
          just1post: "a5966adf644cfbc3adc6"
        },
        la = (0, E.withTranslations)((e => {
          let {
            posts: a,
            t
          } = e;
          return (0, o.jsxs)("section", {
            className: ca.related,
            children: [(0, o.jsx)("h2", {
              children: t("Related Stories")
            }), (0, o.jsx)("div", {
              className: [ca.posts, 1 === a.length ? ca.just1post : ""].join(" "),
              children: a.map((e => (0, o.jsx)(sa, {
                noSpecialOrder: !0,
                post: e
              }, e.id)))
            })]
          })
        })),
        ma = {
          newswireBlocks: "fc028fb629fcb496e293",
          noSpecialOrder: "bdf712cf14c051816b0b"
        },
        ua = (0, E.withGtmTracking)((e => {
          let {
            noSpecialOrder: a = !1,
            posts: t,
            gtmTrack: i,
            relativeTo: n
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
            })), i(e)
          }), [t.length]), (0, o.jsx)("div", {
            className: [ma.newswireBlocks, a ? ma.noSpecialOrder : "", ma.contextHome].join(" "),
            children: t.map(((e, t) => (0, o.jsx)(sa, {
              index: t,
              noSpecialOrder: a,
              post: e
            }, e.id)))
          })
        })),
        ga = "e5f2890c085fc047351c",
        fa = e => {
          let {
            children: a,
            data: t,
            onPageUpdate: i,
            page: n,
            className: s
          } = e;
          return (0, o.jsx)("a", {
            href: "#",
            className: n === t.page ? `e081ffd856ce7ff3aa7a ${s??""}` : "",
            onClick: e => {
              e.preventDefault(), i(n)
            },
            children: a
          })
        },
        va = e => {
          let {
            data: a,
            onPageUpdate: t,
            className: i
          } = e;
          if (1 === a.pageCount) return null;
          const n = Array.from(new Array(Math.min(a.pageCount, 8)), ((e, t) => t + Math.min(Math.max(a.pageCount - 8, 1), Math.max(2, a.page - 4))));
          return (0, o.jsxs)("div", {
            className: `a2b5d74732328a24711b ${i??""}`,
            children: [a.pageCount > 8 ? (0, o.jsxs)(o.Fragment, {
              children: [(0, o.jsx)(fa, {
                data: a,
                onPageUpdate: t,
                page: 1,
                children: "1"
              }), 2 !== n[0] ? (0, o.jsx)("div", {
                className: ga,
                children: "..."
              }) : ""]
            }) : "", n.map((e => (0, o.jsx)(fa, {
              data: a,
              onPageUpdate: t,
              page: e,
              className: i,
              children: e
            }, e))), a.pageCount > 8 ? (0, o.jsxs)(o.Fragment, {
              children: [n.slice(-1)[0] + 1 < a.pageCount ? (0, o.jsx)("div", {
                className: ga,
                children: "..."
              }) : "", (0, o.jsx)(fa, {
                data: a,
                onPageUpdate: t,
                page: a.pageCount,
                children: a.pageCount
              })]
            }) : ""]
          })
        };
      var pa = t(9917);
      const ba = e => {
          let {
            children: a
          } = e;
          const {
            parallaxController: t
          } = (0, pa.bc)();
          return (0, l.useLayoutEffect)((() => {
            if (!t) return;
            const e = setInterval((() => {
              t.update()
            }), 500);
            return () => clearInterval(e)
          }), [t]), a
        },
        ka = {
          parallaxWrapper: "aca7e7408c96c3836597",
          large: "bc4f5c2a498cd14dad61",
          medium: "bf2bfc259c1bf5ea828e",
          small: "c88305647760d3c2405f"
        },
        ha = e => {
          let {
            scrollAxis: a = "vertical",
            size: t = "",
            style: i = {},
            children: n
          } = e;
          return (0, o.jsx)(pa.Xu, {
            scrollAxis: a,
            children: (0, o.jsx)(ba, {
              children: (0, o.jsx)("div", {
                className: (0, y.classList)(ka.parallaxWrapper, ka[t]),
                style: i,
                "data-context": "parallax-wrapper",
                children: n ? n.map((e => (0, l.cloneElement)(e, {
                  scrollAxis: a
                }))) : (0, o.jsx)("div", {})
              })
            })
          })
        },
        xa = e => {
          let {
            layers: a = [],
            displayClass: t = "",
            style: i = {}
          } = e;
          if (!a || !a[0]?.image) return null;
          const n = a.map((e => ({
            ...e,
            props: {
              style: {
                ...e.style
              }
            },
            style: void 0,
            image: (0, y.useGetCdnSource)(e?.image ?? null)
          })));
          return (0, o.jsx)(pa.UG, {
            className: (0, y.classList)("ad9cd218591d2cf7dbab", t),
            layers: n,
            style: i
          })
        },
        _a = "d0b97ccb9b7b3592b1e9",
        Na = e => {
          let {
            minOffset: a = 0,
            maxOffset: t = 0,
            scrollAxis: i = "vertical",
            displayClass: n = "",
            style: s = {},
            children: r
          } = e;
          return "horizontal" === i ? (0, o.jsx)(pa.VS, {
            x: [a, t],
            className: (0, y.classList)(_a, n),
            styleOuter: s,
            children: r
          }) : (0, o.jsx)(pa.VS, {
            y: [a, t],
            className: (0, y.classList)(_a, n),
            styleOuter: s,
            children: r
          })
        },
        ya = {
          promoModule: "dc6b9943bd5638e92bf1",
          promoModuleImage: "c31e1f05a9d9e386cb59",
          gradient: "e4422c8b7198431ac1a3",
          promoModuleContentContainer: "e49fcbe7526c79fb878e",
          left: "bb87afa152b7574ddcb2",
          right: "ffb17488f0d5a5bd3860",
          promoModuleTextContent: "bb09e437d125424fff9b"
        },
        ja = e => {
          let {
            backgroundColor: a,
            brands: t = [],
            description: i = "Lorem Ipsum",
            ctaLabel: n = "Click here",
            ctaLink: s = "https://rockstargames.com",
            gradient: r = !0,
            image: d,
            imageOrientation: c = "right",
            title: l = "Lorem Ipsume!"
          } = e;
          const {
            track: m
          } = (0, L.useGtmTrack)(), u = {
            "--promo-background": a ?? "var(--black-200)",
            "--promo-image": `url(${(0,y.useGetCdnSource)(d)})` ?? 0,
            "--promo-order": "left" === c ? "row" : "row-reverse"
          };
          return (0, o.jsxs)(ue.E.div, {
            className: ya.promoModule,
            style: u,
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
            children: [(0, o.jsx)("div", {
              className: [ya.promoModuleImage, r ? ya.gradient : "", "left" === c ? ya.left : ya.right].join(" ")
            }), (0, o.jsxs)("div", {
              className: ya.promoModuleContentContainer,
              children: [(0, o.jsx)(Ve, {
                brands: t,
                className: ya.promoModuleBrands
              }), (0, o.jsxs)("div", {
                className: ya.promoModuleTextContent,
                children: [l && (0, o.jsx)("h3", {
                  children: l
                }), i && (0, o.jsx)("p", {
                  children: i
                })]
              }), n && (0, o.jsx)(ze, {
                to: s,
                text: n,
                onClick: () => {
                  m({
                    event: "cta_other",
                    event_category: "cta",
                    event_action: "other",
                    event_label: n,
                    element_placement: `promo module - ${l}`,
                    link_url: s,
                    text: n
                  })
                }
              })]
            })]
          })
        };
      var Sa = t(3761);
      const wa = {
        rating: "fb3c2b9e8611c7ddad31",
        withDescriptors: "fe0db64422f7ad32b362",
        condensed: "f21bea93263126551e84",
        text: "d935da760642ecc52de9",
        interactiveElement: "e7e7f948fb2bab349e08"
      };
      (0, E.importAll)(t(5570));
      const Ta = Le((e => {
          let {
            descriptors: a = null,
            footer: i = null,
            href: n,
            img: s = null,
            titleSlug: r = null,
            style: d = {},
            className: m,
            condensed: u
          } = e;
          const [f, v] = (0, l.useState)({
            img_rating: s,
            rating_descriptors: a,
            rating_footer: i,
            url_rating: n
          }), {
            data: p
          } = (0, g.useQuery)(Sa.GameData, {
            variables: {
              titleSlug: r
            },
            skip: !r
          });
          return (0, l.useEffect)((() => {
            p && v(p?.game)
          }), [p]), f.img_rating ? u ? (0, o.jsxs)("div", {
            className: `${wa.rating} ${wa.condensed} ${f.rating_descriptors?wa.withDescriptors:""} ${m||""}`,
            style: (0, E.safeStyles)(d),
            children: [(0, o.jsx)(c, {
              to: f.url_rating,
              target: "_blank",
              style: {
                backgroundImage: `url(${t(4593)(`./${f.img_rating}`)})`
              }
            }), f.rating_descriptors && (0, o.jsxs)("div", {
              className: wa.text,
              children: [(0, o.jsx)("p", {
                className: wa.descriptors,
                dangerouslySetInnerHTML: {
                  __html: f.rating_descriptors.replace(/<br>/g, ", ").substring(0, f.rating_descriptors.length - 2)
                }
              }), f.rating_footer && (0, o.jsx)("hr", {}), f.rating_footer && (0, o.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: f.rating_footer.replace(/ \//g, ", ")
                }
              })]
            })]
          }) : (0, o.jsxs)("div", {
            className: `${wa.rating} ${f.rating_descriptors?wa.withDescriptors:""} ${m||""}`,
            style: (0, E.safeStyles)(d),
            children: [(0, o.jsx)(c, {
              to: f.url_rating,
              target: "_blank",
              style: {
                backgroundImage: `url(${t(4593)(`./${f.img_rating}`)})`
              }
            }), f.rating_descriptors && (0, o.jsx)("p", {
              className: wa.descriptors,
              dangerouslySetInnerHTML: {
                __html: f.rating_descriptors
              }
            }), f.rating_footer && (0, o.jsx)("p", {
              className: wa.interactiveElement,
              dangerouslySetInnerHTML: {
                __html: f.rating_footer
              }
            })]
          }) : null
        })),
        Ca = {
          responsiveFlexBox: "e4465a9b663320c80468",
          responsiveFlexItem: "aa986045cb58e89e61c5",
          responsiveImage: "c046dde6984fbd4bbe65"
        },
        Ea = e => {
          let {
            children: a,
            className: t,
            style: i
          } = e;
          return (0, o.jsx)("div", {
            className: [Ca.responsiveFlexBox, void 0 !== t ? t : ""].join(" "),
            style: i,
            children: a
          })
        },
        La = {
          responsiveFlexItem: "e53c0594adfb5e74c89e"
        },
        Ia = e => {
          let {
            children: a,
            className: t,
            style: i
          } = e;
          return (0, o.jsx)("div", {
            className: [La.responsiveFlexItem, void 0 !== t ? t : ""].join(" "),
            style: i,
            children: a
          })
        },
        Va = {
          responsiveGridBox: "f6ded382294f08f6f94e",
          responsiveGridItem: "c45f810f4e651dc7b020"
        },
        $a = e => {
          let {
            children: a,
            cols: t,
            className: i,
            rows: n,
            style: s
          } = e;
          return void 0 === s && (s = {}), void 0 !== t && (s.gridTemplateColumns = `repeat(${t}, 1fr)`), void 0 !== n && (s.gridTemplateRows = `repeat(${n}, 1fr)`), (0, o.jsx)("div", {
            className: [Va.responsiveGridBox, void 0 !== i ? i : ""].join(" "),
            style: s,
            children: a
          })
        },
        Ba = {
          responsiveGridBox: "f0f3911598f858700269",
          responsiveGridItem: "e874fac9914cac099c13"
        },
        Fa = e => {
          let {
            children: a,
            className: t,
            style: i
          } = e;
          return (0, o.jsx)("div", {
            className: [Ba.responsiveGridItem, void 0 !== t ? t : ""].join(" "),
            style: i,
            children: a
          })
        },
        za = {
          responsiveImage: "da2dc19dd9dd16116d08"
        },
        Ma = e => {
          let {
            src: a,
            className: t = "",
            animate: i,
            ariaLabel: n,
            style: s = {}
          } = e;
          const [r, d] = (0, E.usePreloadImg)(a);
          return r ? (s.backgroundImage = `url(${a})`, (0, o.jsx)("div", {
            role: "img",
            "aria-label": n ?? "R* Games",
            className: [za.responsiveImage, i ? za.animateBox : "", t].join(" "),
            style: {
              ...s,
              "--aspect-ratio": d.width / d.height
            }
          })) : null
        },
        Da = {
          responsiveSection: "d06d23f23d3a5ecb6e50",
          maxWidth: "b4e4e0028c2d2643c29a"
        },
        Ra = e => {
          let {
            children: a,
            className: t,
            style: i,
            maxWidth: n
          } = e;
          return (0, o.jsx)("section", {
            className: [Da.responsiveSection, void 0 !== t ? t : ""].join(" "),
            style: i,
            children: n ? (0, o.jsx)("div", {
              className: Da.maxWidth,
              children: a
            }) : a
          })
        },
        Aa = () => {
          const {
            pathname: e
          } = (0, d.useLocation)();
          return (0, l.useEffect)((() => {
            window.scrollTo(0, 0)
          }), [e]), null
        },
        Oa = (0, l.forwardRef)(((e, a) => {
          const {
            threshold: t,
            callback: i,
            children: n
          } = e, {
            track: s
          } = (0, L.useGtmTrack)(), [r, d] = (0, l.useState)(a?.current);
          return (0, l.useEffect)((() => {
            a?.current && d(a.current)
          }), [a]), ((e, a, t) => {
            const [i, n] = (0, l.useState)({
              scrollDepths: e,
              scrollY: 0
            }), {
              scrollDepths: s,
              scrollY: r
            } = i;
            (0, l.useEffect)((() => {
              "undefined" != typeof window && 0 !== window.pageYOffset && n((e => ({
                ...e,
                scrollY: window.pageYOffset
              })))
            }), []), (0, l.useEffect)((() => {
              n({
                scrollDepths: e,
                scrollY: 0
              })
            }), [window.location.pathname]), (0, l.useEffect)((() => {
              if ("undefined" == typeof window) return;
              const e = t ?? window,
                r = () => e.removeEventListener("scroll", d),
                d = () => {
                  const e = document.documentElement,
                    d = document.body,
                    o = t?.scrollTop || e.scrollTop || d.scrollTop,
                    c = t?.scrollHeight || e.scrollHeight || d.scrollHeight,
                    {
                      clientHeight: l
                    } = e,
                    m = o / (c - l) * 100;
                  if (s) {
                    const e = Math.min(...s, c);
                    if (m >= e) {
                      const t = s.filter((a => a !== e));
                      0 === t.length && r(), a && a({
                        scrollY: e,
                        scrollPercent: m,
                        remainingDepths: t
                      }), n({
                        scrollY: e,
                        scrollDepths: t
                      })
                    }
                  } else n({
                    ...i,
                    scrollY: m
                  })
                };
              return e.addEventListener("scroll", d), r
            }), [s, r, i, t])
          })(t, (e => {
            let {
              scrollY: a
            } = e;
            s({
              event: "page_scroll",
              event_category: "page_scroll",
              event_action: a,
              scrol_depth: a
            }), "function" == typeof i && i(a)
          }), r), n
        })),
        Pa = (0, E.withTranslations)((e => {
          let {
            t: a
          } = e;
          const [t] = (0, l.useState)(""), i = (0, d.useNavigate)(), n = (0, g.useMutateState)();
          return (0, o.jsxs)("form", {
            action: "#",
            className: "d190f154b297a6c860c6",
            onSubmit: e => {
              e.preventDefault(), n({
                navOpen: !1
              }), document.activeElement?.blur(), i(`/search?q=${e.target.q.value}`)
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
        Ga = {
          skeleton: "fab0211fa18900cc53a3",
          pulse: "ed1b5302c777175acc6c",
          gen9Hero: "fae9afdda65a4353f796"
        },
        Ha = e => {
          let {
            skeleton: a
          } = e;
          return a ? (0, o.jsx)("div", {
            className: [Ga.skeleton, Ga[a]].join(" ")
          }) : null
        },
        qa = {
          bodySmall: "ee6ce2e1ba16af34ab0c"
        },
        Ua = e => {
          let {
            track: a,
            artist: t
          } = e;
          return (0, o.jsxs)("div", {
            className: qa.track,
            children: [(0, o.jsx)("p", {
              children: a
            }), (0, o.jsx)("p", {
              className: qa.bodySmall,
              children: t
            })]
          })
        },
        Wa = e => {
          let {
            children: a
          } = e;
          return (0, o.jsxs)("div", {
            className: "b3a19b796a7611f614b4",
            children: [(0, o.jsx)("h4", {
              className: "c0086f5a32f4b4d73879",
              children: "Tracklist"
            }), (0, o.jsx)("div", {
              className: "cbbee7b911cca07d19ef",
              children: (0, o.jsx)("div", {
                className: "dd4f4f3f5296eec6af3d",
                children: l.Children.map(l.Children.toArray(a), (e => (0, o.jsx)(Ua, {
                  ...e?.props
                })))
              })
            })]
          })
        },
        Qa = "a3203eaeb7aa17a50d1d",
        Ya = "da5aca5b612ae73726aa",
        Xa = {
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
        Za = e => {
          let {
            title: a = "thumbnail gallery",
            thumbsPerView: t = 3,
            loop: i = !1,
            navigation: n = !1,
            slideChildren: s = [],
            variants: r = {
              parent: void 0,
              main: void 0,
              thumbs: void 0
            },
            transition: d = {
              parent: void 0,
              main: void 0,
              thumbs: void 0
            }
          } = e;
          const {
            track: c
          } = (0, L.useGtmTrack)(), [m, u] = (0, l.useState)([Ce.Rv, Ce.o3]), [g, f] = (0, l.useState)(null), [v, p] = (0, l.useState)(null);
          return (0, l.useEffect)((() => {
            const e = [Ce.Rv, Ce.o3];
            n && e.push(Ce.W_), u(e)
          }), [n]), (0, l.useEffect)((() => {
            if (!s) return;
            const e = s.map(((e, a) => (0, o.jsx)(j.o5, {
              children: e
            }, Symbol(a).toString())));
            p(e)
          }), [s]), v ? (0, o.jsxs)(ue.E.div, {
            className: "b0678d1be99248011414",
            variants: r.parent,
            transition: d.parent,
            initial: "initial",
            animate: "animate",
            children: [(0, o.jsx)(ue.E.div, {
              className: Qa,
              variants: r.main,
              transition: d.main,
              initial: "initial",
              animate: "animate",
              children: (0, o.jsx)(j.tq, {
                loop: i,
                navigation: n,
                thumbs: {
                  swiper: g
                },
                modules: m,
                breakpoints: Xa,
                className: Qa,
                onSlideNextTransitionEnd: () => {
                  c({
                    event_action: "next",
                    event_category: "carousel",
                    event: "carousel_next",
                    event_label: a?.toLowerCase() ?? ""
                  })
                },
                onSlidePrevTransitionEnd: () => {
                  c({
                    event_action: "previous",
                    event_category: "carousel",
                    event: "carousel_previous",
                    event_label: a?.toLowerCase() ?? ""
                  })
                },
                onSlideChangeTransitionEnd: () => {
                  c({
                    event_action: "swipe",
                    event_category: "carousel",
                    event: "carousel_swipe",
                    event_label: a?.toLowerCase() ?? ""
                  })
                },
                children: v
              })
            }), (0, o.jsx)(ue.E.div, {
              className: Ya,
              variants: r.thumbs,
              transition: d.thumbs,
              initial: "initial",
              animate: "animate",
              children: (0, o.jsx)(j.tq, {
                threshold: 50,
                onSwiper: f,
                loop: i,
                breakpoints: Xa,
                slidesPerView: t,
                freeMode: !0,
                watchSlidesProgress: !0,
                modules: m,
                className: Ya,
                children: v
              })
            })]
          }) : null
        };
      var Ka = t(3732);
      const Ja = e => {
          let {
            id: a = null,
            ids: t = null,
            setTitleDataPath: i = null,
            sync: n = !1
          } = e;
          const s = t ?? [a],
            {
              data: r
            } = (0, g.useQuery)(Ka.TinaModulesInfo, {
              variables: {
                ids: s,
                sync: n
              },
              setTitleDataPath: i,
              skip: !s.length
            });
          return r?.tinaModulesInfo ?? null
        },
        et = Le((e => {
          let {
            components: a = {},
            id: t = null,
            ids: i = null,
            skeleton: n
          } = e;
          const s = Ja({
            id: t,
            ids: i
          });
          if (!s) return (0, o.jsx)(Ha, {
            skeleton: n
          });
          const r = s?.[0]?.tina;
          return r ? (0, o.jsx)(o.Fragment, {
            children: s.map(((e, t) => {
              let {
                tina: i
              } = e;
              return (0, o.jsx)(y.TinaParser, {
                components: a,
                tina: i,
                componentProps: {
                  tinaModulesInfo: s
                }
              }, t)
            }))
          }) : null
        }));
      var at = t(7604);
      const tt = {
          userVote: "b5700f09cbc9b2b23c79",
          info: "ad1b94250411ea25716e",
          voteContent: "df8160525942f733eaef",
          loggedOutButtons: "b199578f6d6c70794bf5",
          voteButtons: "fdb3b7b24a86d3935f60",
          downVote: "f56e8db24b31d902c755",
          upVote: "fb08e95d888a401bad87",
          voteButtonActive: "ae4dbdbe47f0d59447e3"
        },
        it = e => {
          let {
            description: a,
            foreign_id: t = document.location.pathname,
            foreign_type: i = "url",
            title: n
          } = e;
          const {
            track: s
          } = (0, L.useGtmTrack)(), {
            loggedIn: r
          } = (0, L.useRockstarUser)(), {
            refetch: d
          } = (0, g.useQuery)(at.UserGetVote, {
            skip: !0
          }), [c] = (0, g.useMutation)(at.UserCastVote), [m, u] = (0, l.useState)(null), f = (0, l.useCallback)((async e => {
            s({
              event_action: m ? "like" : "dislike",
              event_category: "cta",
              event: "cta_" + (e ? "like" : "dislike"),
              event_label: t
            });
            const a = {
                foreign_id: t,
                foreign_type: i,
                vote: e
              },
              n = await c({
                variables: a
              });
            u(n?.data?.userCastVote?.vote ?? null)
          }), [t, i]);
          return (0, l.useEffect)((() => {
            (async () => {
              if (!r || !t || !i) return;
              const e = await d({
                foreign_id: t,
                foreign_type: i
              });
              u(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [t, i, r]), (0, o.jsx)("div", {
            className: tt.userVote,
            children: (0, o.jsxs)("div", {
              className: tt.voteContent,
              children: [(0, o.jsxs)("div", {
                className: tt.info,
                children: [(0, o.jsx)("h3", {
                  children: n
                }), (0, o.jsx)("p", {
                  children: a
                })]
              }), (0, o.jsxs)("div", {
                className: [tt.voteButtons, r ? "" : tt.loggedOutButtons].join(" "),
                children: [(0, o.jsx)("button", {
                  onClick: () => f(!0),
                  className: [tt.upVote, m ? tt.voteButtonActive : ""].join(" "),
                  type: "button",
                  "aria-label": "Vote up"
                }), (0, o.jsx)("button", {
                  className: [tt.downVote, !1 === m ? tt.voteButtonActive : ""].join(" "),
                  onClick: () => f(!1),
                  type: "button",
                  "aria-label": "Vote down"
                })]
              })]
            })
          })
        },
        nt = {
          carousel: "df4cbe643bcdb344e8ed",
          text: "d3ebdcf6ee34d0d8705b",
          info: "af49b9b914c87b1a71ba",
          active: "b07dd615705f46f48d1c",
          title: "b754611647e7892b662b",
          gameTitle: "cffbee9a975cdcd3e17a",
          videoTitle: "e1309a6036854ee49110",
          cta: "ad98fcae5e4b7426ebe2",
          track: "cfeb3d9edccb75fcfc61",
          disableClick: "eb53aed711d78304c81a",
          items: "da6857a73ff2d80fa6fc",
          dragging: "c2aec297ba49d82429e9",
          dots: "e49d717d9755f47a7ca3"
        },
        st = (0, E.withLocale)((e => {
          let {
            locale: a,
            t,
            videos: i
          } = e;
          const {
            setBodyIsScrollable: n
          } = (0, E.useBodyScrollable)(), [s, r] = (0, l.useState)(0), [d, m] = (0, l.useState)(0), g = (0, l.useRef)(null), f = (0, l.useRef)(null);
          return (0, l.useEffect)((() => {
            if (!g.current || f.current) return;
            const e = new(u())(g.current);
            e.get("press").set({
              time: 0
            }), e.get("tap").set({
              time: 150
            });
            const a = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
              t = () => {
                r(s - 1 < 0 ? 0 : s - 1), m(0)
              },
              d = () => {
                const e = s + 1 >= i.length - 1 ? i.length - 1 : s + 1;
                r(e), m(0)
              },
              o = e => {
                m(e.isFinal ? 0 : e.deltaX), "panleft" !== e.additionalEvent && "panright" !== e.additionalEvent || !f.current?.classList.contains(nt.dragging) || a() && n(!1)
              },
              c = () => {
                a() && n(!0), m(0)
              },
              l = e => {
                "press" === e.type && g.current?.classList.add(`${nt.disableClick}`), "tap" === e.type && (g.current?.classList.remove(`${nt.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
              },
              v = () => {
                a() && n(!0), g.current && g.current.classList.remove(`${nt.disableClick}`)
              },
              p = () => {
                a() && n(!0)
              };
            return f.current.addEventListener("transitionend", p), e.on("swiperight", t), e.on("swipeleft", d), e.on("pan", o), e.on("panend", c), e.on("press tap", l), e.on("pressup", v), () => {
              e.off("swiperight", t), e.off("swipeleft", d), e.off("pan", o), e.off("panend", c), e.off("press tap", l), e.off("pressup", v), f.current && f.current.removeEventListener("transitionend", p), m(0)
            }
          }), [g.current, s]), (0, o.jsxs)("section", {
            className: nt.carousel,
            children: [(0, o.jsx)("div", {
              className: nt.track,
              ref: g,
              children: (0, o.jsx)("div", {
                className: `${nt.items} ${0!==d?nt.dragging:""}`,
                ref: f,
                style: {
                  transform: `translateX(calc(-${100*s}% + ${d}px))`
                },
                children: i.map(((e, a) => (0, o.jsx)(c, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through screencap",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  className: s === a ? nt.active : "",
                  role: "link",
                  title: e.title,
                  children: (0, o.jsx)(lt, {
                    video: e,
                    active: s === a
                  })
                }, e.id)))
              })
            }), (0, o.jsxs)("footer", {
              children: [(0, o.jsx)("div", {
                className: nt.text,
                children: i.map(((e, i) => (0, o.jsx)(c, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through footer",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  role: "link",
                  title: e.title,
                  children: (0, o.jsxs)("div", {
                    className: [nt.info, i === s ? nt.active : ""].join(" "),
                    children: [(0, o.jsxs)("div", {
                      className: nt.title,
                      children: [(0, o.jsx)("div", {
                        className: nt.gameTitle,
                        children: `${e.game.title}${"fr_fr"===a?" ":""}`
                      }), (0, o.jsx)("h2", {
                        className: nt.videoTitle,
                        children: `${e.title}`
                      })]
                    }), (0, o.jsx)(N, {
                      className: nt.cta,
                      children: t("Watch Now")
                    })]
                  })
                }, e.id)))
              }), (0, o.jsx)("div", {
                className: nt.dots,
                children: i.map(((e, a) => (0, o.jsx)("button", {
                  "aria-label": `Slide ${a}`,
                  "data-gtm-category": "Marquee",
                  "data-gtm-action": "Dot click",
                  "data-gtm-label": `Dot clicked to ${a}`,
                  onClick: () => r(a),
                  className: s === a ? nt.active : "",
                  type: "button"
                }, e.id)))
              })]
            })]
          })
        })),
        rt = {
          videoList: "ee6bbf953d025e89de3e",
          sectionHeader: "aff592c13e7c6efe9403",
          arrowNav: "c4d1686e768de3bb2a72",
          items: "a5555dcd894e6f017244",
          trackWrapper: "ea0cb5c1e9e96de1d7ba",
          track: "b093f49b66f63b976945",
          dragging: "cdce54f2f81ee8d487b9",
          arrow: "a93e9dfb22682f51e8fa",
          previous: "f72ca354ba820e8a0248",
          next: "e839ba4e0441e11b4480",
          disabled: "c37dca9479cc10f4f30e"
        },
        dt = (0, E.withTranslations)((e => {
          let {
            vids: a,
            games: t,
            title: i,
            gameTitleNecessary: n
          } = e;
          const s = void 0 !== t ? "games" : "videos",
            r = "videos" === s ? a : t.results,
            d = (0, l.useRef)(null),
            [c, m] = (0, l.useState)(0),
            [g, f] = (0, l.useState)(0),
            v = e => {
              const a = Math.ceil(r.length / c);
              e < 0 ? e = 0 : e >= a - 1 && (e = a - 1), f(e)
            },
            [p, b] = (0, l.useState)(0);
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
          }), [c]), (0, l.useEffect)((() => {
            if (d.current) {
              const e = new(u())(d.current),
                a = () => {
                  v(g - 1), b(0)
                },
                t = () => {
                  v(g + 1), b(0)
                },
                i = e => {
                  b(e.isFinal ? 0 : e.deltaX)
                },
                n = () => {
                  b(0)
                };
              return e.on("swiperight", a), e.on("swipeleft", t), e.on("pan", i), e.on("panend", n), () => {
                e.off("swiperight", a), e.off("swipeleft", t), e.off("pan", i), e.off("panend", n), b(0)
              }
            }
          }), [d.current, g]), k = "games" === s ? (0, o.jsx)(o.Fragment, {
            children: t.results.map((e => (0, o.jsx)(Se, {
              game: e,
              dontOverrideTo: !0,
              to: `/videos?type=game&gameId=${e.id}`
            }, e.id)))
          }) : (0, o.jsx)(o.Fragment, {
            children: a.map((e => (0, o.jsx)(mt, {
              video: e,
              gameTitleNecessary: n
            }, e.id)))
          }), (0, o.jsxs)("section", {
            className: rt.videoList,
            children: [(0, o.jsxs)("h3", {
              className: rt.sectionHeader,
              children: [i, (0, o.jsxs)("div", {
                className: rt.arrowNav,
                children: [(0, o.jsx)("div", {
                  className: [rt.arrow, rt.previous, 0 === g ? rt.disabled : ""].join(" "),
                  onClick: () => v(g - 1)
                }), (0, o.jsx)("div", {
                  className: [rt.arrow, rt.next, g === Math.ceil(r.length / c) - 1 ? rt.disabled : ""].join(" "),
                  onClick: () => v(g + 1)
                })]
              })]
            }), (0, o.jsx)("div", {
              className: rt.items,
              children: (0, o.jsx)("div", {
                className: rt.trackWrapper,
                children: (0, o.jsx)("div", {
                  className: [rt.track, 0 !== p ? rt.dragging : ""].join(" "),
                  ref: d,
                  style: {
                    transform: `translateX(calc(-${100*g}% + ${p}px - (var(--standard-grid-gap) * ${g}))`,
                    gridAutoColumns: `calc(100 / ${c} * 1% - calc(var(--standard-grid-gap) * (${c-1}/${c}))`
                  },
                  children: k
                })
              })
            })]
          })
        })),
        ot = (0, E.withTranslations)((e => {
          let {
            error: a,
            t
          } = e;
          const i = a?.message ?? t("error-404-new"),
            n = a?.code ?? 398;
          return (0, o.jsxs)("div", {
            className: "acc888afe9790ff737d7",
            children: [(0, o.jsx)("h3", {
              children: `${i} (${n})`
            }), (0, o.jsx)(c, {
              to: "/",
              children: t("Home")
            }), (0, o.jsx)(Pa, {})]
          })
        })),
        ct = {
          videoPreview: "f57a66c11909dd3794fc",
          card: "e76ee574eec60bb13889",
          info: "ba5ee66f0a4a93fd6686",
          title: "ea738c16af3cfa82d464",
          screencap: "d42fe4eaa72f9d83a937",
          screencapLoaded: "c0b5ce25b1edb0582326",
          gameTitle: "c05b6eea8e77156def92"
        },
        lt = e => {
          let {
            video: a
          } = e;
          const [t] = (0, E.usePreloadImg)(a.screencap);
          return (0, o.jsx)("div", {
            className: [ct.screencap, t ? ct.screencapLoaded : ""].join(" "),
            style: {
              background: `url(${a.screencap}) center/cover`
            }
          })
        },
        mt = e => {
          let {
            gameTitleNecessary: a = !0,
            openInNewWindow: t = !1,
            video: i
          } = e;
          const n = `/videos/${i.id}`,
            s = {
              className: ct.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": n
            },
            r = (0, o.jsxs)("div", {
              className: ct.card,
              children: [(0, o.jsx)(lt, {
                video: i
              }), (0, o.jsxs)("div", {
                className: ct.info,
                children: [a ? (0, o.jsx)("div", {
                  className: ct.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: i.game.title
                  }
                }) : "", (0, o.jsx)("h5", {
                  className: ct.title,
                  dangerouslySetInnerHTML: {
                    __html: i.title
                  }
                })]
              })]
            });
          return t ? (0, o.jsx)("a", {
            href: n,
            target: "_blank",
            ...s,
            children: r
          }) : (0, o.jsx)(c, {
            to: n,
            ...s,
            children: r
          })
        };
      class ut extends l.Component {
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
          return null !== this.state.error.code ? (0, o.jsx)(ot, {
            error: this.state.error
          }) : this.props.children
        }
      }
      const gt = function(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return function(t) {
          return (0, o.jsx)(ut, {
            header: a,
            children: (0, o.jsx)(e, {
              ...t
            })
          })
        }
      };
      var ft = t(2560),
        vt = t(8522),
        pt = t(1673);
      const bt = (0, l.forwardRef)(((e, a) => {
          const {
            children: t,
            tag: i = "div"
          } = e, n = ft.m[i];
          return (0, o.jsx)(vt.X, {
            features: pt.H,
            children: (0, o.jsx)(n, {
              ref: a,
              ...e,
              children: t
            })
          })
        })),
        kt = {
          visible: {
            opacity: 1
          },
          hidden: {
            opacity: 0
          }
        },
        ht = {
          ease: "easeIn",
          duration: .4
        },
        xt = e => {
          let {
            children: a
          } = e;
          return (0, o.jsx)(ue.E.div, Object.assign({
            className: "e0dc5d79dc36b7b8c013",
            variants: kt,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: ht
          }, {
            children: a
          }))
        },
        _t = e => a => (0, o.jsx)(xt, {
          children: (0, o.jsx)(e, Object.assign({}, a))
        }),
        Nt = {
          cardOpen: {
            ease: "anticipate",
            duration: .6
          },
          afterCardOpen: {
            ease: "easeIn",
            duration: .3,
            delay: .6
          },
          fade: {
            ease: "easeIn",
            duration: .3
          },
          instantFade: {
            duration: .05
          }
        },
        yt = {
          plainCard: {
            expanded: {
              initial: {
                gridTemplateColumns: "var(--grid-template-columns-initial)",
                "--card-image-aspect-ratio": "var(--card-image-aspect-ratio-initial)",
                overflow: "visible"
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
                display: "inherit"
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
                display: "inherit"
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
                  maxHeight: "100vh",
                  minHeight: "0vh"
                },
                animate: {
                  "--gallery-aspect-ratio": "var(--gallery-aspect-ratio-animate)",
                  maxHeight: "80vh",
                  minHeight: "70vh"
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
        jt = function() {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "collapsed";
          return yt[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "imageMask"][e]
        }
    },
    5652: e => {
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
          var i = e.type;
          "NamedType" === i.kind && a.add(i.name.value)
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
      var i = {};

      function n(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var i = e.definitions[t];
          if (i.name && i.name.value == a) return i
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), i[e.name.value] = a
        }
      })), e.exports = a, e.exports.GetAudioAlbum = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var s = i[a] || new Set,
          r = new Set,
          d = new Set;
        for (s.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var o = d;
          d = new Set, o.forEach((function(e) {
            r.has(e) || (r.add(e), (i[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var i = n(e, a);
          i && t.definitions.push(i)
        })), t
      }(a, "GetAudioAlbum")
    },
    8969: e => {
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
          var i = e.type;
          "NamedType" === i.kind && a.add(i.name.value)
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
      var i = {};

      function n(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var i = e.definitions[t];
          if (i.name && i.name.value == a) return i
        }
      }

      function s(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var s = i[a] || new Set,
          r = new Set,
          d = new Set;
        for (s.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var o = d;
          d = new Set, o.forEach((function(e) {
            r.has(e) || (r.add(e), (i[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var i = n(e, a);
          i && t.definitions.push(i)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), i[e.name.value] = a
        }
      })), e.exports = a, e.exports.UserGetVote = s(a, "UserGetVote"), e.exports.UserCastVote = s(a, "UserCastVote")
    },
    3732: e => {
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
          var i = e.type;
          "NamedType" === i.kind && a.add(i.name.value)
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
      var i = {};

      function n(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var i = e.definitions[t];
          if (i.name && i.name.value == a) return i
        }
      }

      function s(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var s = i[a] || new Set,
          r = new Set,
          d = new Set;
        for (s.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var o = d;
          d = new Set, o.forEach((function(e) {
            r.has(e) || (r.add(e), (i[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var i = n(e, a);
          i && t.definitions.push(i)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), i[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesList = s(a, "TinaModulesList"), e.exports.TinaModulesInfo = s(a, "TinaModulesInfo")
    },
    7604: e => {
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
          var i = e.type;
          "NamedType" === i.kind && a.add(i.name.value)
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
      var i = {};

      function n(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var i = e.definitions[t];
          if (i.name && i.name.value == a) return i
        }
      }

      function s(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var s = i[a] || new Set,
          r = new Set,
          d = new Set;
        for (s.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var o = d;
          d = new Set, o.forEach((function(e) {
            r.has(e) || (r.add(e), (i[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var i = n(e, a);
          i && t.definitions.push(i)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), i[e.name.value] = a
        }
      })), e.exports = a, e.exports.UserGetVote = s(a, "UserGetVote"), e.exports.UserCastVote = s(a, "UserCastVote")
    },
    848: (e, a, t) => {
      var i = {
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
      i.loc.source = {
        body: '#import "@rockstargames/graph-client/operations/fragments/newswire-post.graphql"\n#import "@rockstargames/graph-client/operations/fragments/paging.graphql"\n\nquery NewswireList(\n    $locale: String!\n    $page: Int!\n    $tagId: Int\n    $metaUrl: String!\n    $cache: Boolean = true\n) {\n    meta: metaUrl(url: $metaUrl, domain: "www", locale: $locale) {\n        title\n    }\n    posts(page: $page, tagId: $tagId, locale: $locale) {\n        paging {\n            ...paging\n        }\n        results {\n            ...postFields\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function s(e) {
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
      i.definitions = i.definitions.concat(s(t(6077).definitions)), i.definitions = i.definitions.concat(s(t(9349).definitions));
      var d = {};

      function o(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var i = e.definitions[t];
          if (i.name && i.name.value == a) return i
        }
      }
      i.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          r(e, a), d[e.name.value] = a
        }
      })), e.exports = i, e.exports.NewswireList = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [o(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = d[a] || new Set,
          n = new Set,
          s = new Set;
        for (i.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var r = s;
          s = new Set, r.forEach((function(e) {
            n.has(e) || (n.add(e), (d[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var i = o(e, a);
          i && t.definitions.push(i)
        })), t
      }(i, "NewswireList")
    },
    3631: (e, a, t) => {
      var i = {
        "./left.svg": 4377,
        "./pc.svg": 6475,
        "./ps4.svg": 7561,
        "./ps5.svg": 4262,
        "./right.svg": 7601,
        "./x.svg": 9545,
        "./xboxone.svg": 493,
        "./xboxseriesxs.svg": 1699
      };

      function n(e) {
        var a = s(e);
        return t(a)
      }

      function s(e) {
        if (!t.o(i, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return i[e]
      }
      n.keys = function() {
        return Object.keys(i)
      }, n.resolve = s, e.exports = n, n.id = 3631
    },
    5570: (e, a, t) => {
      var i = {
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
        "./usk_6.svg": 483,
        "Rating/img/cero_a.png": 8865,
        "Rating/img/cero_b.svg": 1314,
        "Rating/img/cero_c.svg": 2123,
        "Rating/img/cero_d.svg": 8064,
        "Rating/img/cero_z.svg": 3353,
        "Rating/img/djctq_10.svg": 6456,
        "Rating/img/djctq_12.svg": 2790,
        "Rating/img/djctq_14.svg": 9453,
        "Rating/img/djctq_16.svg": 8906,
        "Rating/img/djctq_18.svg": 6600,
        "Rating/img/djctq_er.svg": 4431,
        "Rating/img/djctq_l.svg": 7429,
        "Rating/img/esrb_ao.svg": 9851,
        "Rating/img/esrb_e.svg": 1986,
        "Rating/img/esrb_e10plus.svg": 4180,
        "Rating/img/esrb_m.svg": 8436,
        "Rating/img/esrb_m_ao.svg": 627,
        "Rating/img/esrb_rp.svg": 5507,
        "Rating/img/esrb_rplm17.svg": 4010,
        "Rating/img/esrb_t.svg": 7909,
        "Rating/img/fpb_13.svg": 7651,
        "Rating/img/fpb_16.svg": 3803,
        "Rating/img/fpb_18.svg": 1359,
        "Rating/img/fpb_pg.svg": 8185,
        "Rating/img/grac_12.svg": 873,
        "Rating/img/grac_15.svg": 9024,
        "Rating/img/grac_18.svg": 9634,
        "Rating/img/grac_a.svg": 6767,
        "Rating/img/gsrr_0.svg": 6425,
        "Rating/img/gsrr_12.svg": 8305,
        "Rating/img/gsrr_15.svg": 3310,
        "Rating/img/gsrr_18.svg": 4581,
        "Rating/img/gsrr_6.svg": 2722,
        "Rating/img/nmc_12.svg": 4380,
        "Rating/img/nmc_16.svg": 5488,
        "Rating/img/nmc_18.svg": 9322,
        "Rating/img/nmc_21.svg": 4157,
        "Rating/img/nmc_3.svg": 4323,
        "Rating/img/nmc_7.svg": 8058,
        "Rating/img/oflc_g.svg": 6833,
        "Rating/img/oflc_m.svg": 35,
        "Rating/img/oflc_ma15.svg": 4345,
        "Rating/img/oflc_pg.svg": 5360,
        "Rating/img/oflc_r18.svg": 2698,
        "Rating/img/pegi_12.svg": 2404,
        "Rating/img/pegi_16.svg": 7368,
        "Rating/img/pegi_18.svg": 2322,
        "Rating/img/pegi_3.svg": 8045,
        "Rating/img/pegi_4.svg": 9194,
        "Rating/img/pegi_6.svg": 9306,
        "Rating/img/pegi_7.svg": 4340,
        "Rating/img/rars_0.svg": 2921,
        "Rating/img/rars_12.svg": 3749,
        "Rating/img/rars_16.svg": 8127,
        "Rating/img/rars_18.svg": 2224,
        "Rating/img/rars_6.svg": 6295,
        "Rating/img/usk_0.svg": 4442,
        "Rating/img/usk_12.svg": 202,
        "Rating/img/usk_16.svg": 7597,
        "Rating/img/usk_18.svg": 1187,
        "Rating/img/usk_6.svg": 483
      };

      function n(e) {
        var a = s(e);
        return t(a)
      }

      function s(e) {
        if (!t.o(i, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return i[e]
      }
      n.keys = function() {
        return Object.keys(i)
      }, n.resolve = s, e.exports = n, n.id = 5570
    },
    4593: (e, a, t) => {
      var i = {
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

      function n(e) {
        var a = s(e);
        return t(a)
      }

      function s(e) {
        if (!t.o(i, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return i[e]
      }
      n.keys = function() {
        return Object.keys(i)
      }, n.resolve = s, e.exports = n, n.id = 4593
    },
    9065: (e, a, t) => {
      var i = {
        "./bounty.png": 3709,
        "./collector.png": 4041,
        "./moonshiner.png": 1012,
        "./naturalist.png": 1325,
        "./trader.png": 4669
      };

      function n(e) {
        var a = s(e);
        return t(a)
      }

      function s(e) {
        if (!t.o(i, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return i[e]
      }
      n.keys = function() {
        return Object.keys(i)
      }, n.resolve = s, e.exports = n, n.id = 9065
    },
    4377: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/bcaca8dc494732cb2ca1.svg"
    },
    6475: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/af7a4b3f215a9ffd7074.svg"
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
    9545: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/cd7ecd01ec2f916d6c4b.svg"
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
    8185: e => {
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