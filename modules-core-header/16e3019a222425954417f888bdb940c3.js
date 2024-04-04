! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "1297822a-c5c3-4931-ae28-c7affa5947a8", e._sentryDebugIdIdentifier = "sentry-dbid-1297822a-c5c3-4931-ae28-c7affa5947a8")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "692b6956abd6177da3ac6da14c81527e5159ed6d",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "692b6956abd6177da3ac6da14c81527e5159ed6d"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [4], {
    74416: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        A: () => g,
        AudioPlayer: () => N,
        Badge: () => S,
        Brands: () => w,
        Button: () => C,
        ButtonGroup: () => Y,
        CalloutSection: () => pe,
        Carousel: () => se,
        ConditionalBlock: () => ce,
        CookieAB: () => xe,
        CountryInputField: () => ve,
        Cta: () => je,
        DescriptionArea: () => Ae,
        DiscountsBadge: () => We,
        DotLoader: () => Je,
        Dropdown: () => Ye,
        Embed: () => aa,
        ExpandingPlatformButton: () => la,
        FadeInContent: () => ua,
        GameCard: () => s,
        GameSiteHeader: () => _a,
        Gen9Button: () => Q,
        Gen9CoreCarousel: () => ya,
        Grid: () => Ze,
        HTMLElement: () => Ea,
        Hero: () => Ma,
        HookStore: () => ie,
        ImageWithBadge: () => Aa,
        LanguageSelector: () => Ba,
        LayeredImage: () => Fa,
        LoadingAnimation: () => Er,
        MultiSourceImage: () => Ee,
        NewswireBlocks: () => et,
        NewswireCard: () => qa,
        NewswireList: () => Ka,
        NewswireRelated: () => Ya,
        NewswireTag: () => Ga,
        OrderedList: () => st,
        PackList: () => mt,
        PackListMenu: () => St,
        Paging: () => Ct,
        ParallaxCacheBuster: () => Tt,
        ParallaxInnerLayer: () => Lt,
        ParallaxOuterLayer: () => Dt,
        ParallaxWrapper: () => Et,
        ProfileSwitcher: () => r,
        PromoModule: () => vs,
        Rating: () => Ss,
        ResponsiveFlexBox: () => js,
        ResponsiveFlexItem: () => Is,
        ResponsiveGridBox: () => Ms,
        ResponsiveGridItem: () => Ls,
        ResponsiveImg: () => Ds,
        ResponsiveSection: () => Bs,
        RockstarLogo: () => $s,
        ScrollToTop: () => zs,
        ScrollTracker: () => Fs,
        SearchBox: () => Os,
        Separator: () => ze,
        Skeleton: () => Us,
        SrcsetImage: () => Ra,
        TextFit: () => Re,
        ThumbsGallery: () => Ks,
        TinaModuleFetchNRender: () => Zs,
        TinaWrapper: () => er,
        TrackList: () => Ws,
        UnorderedList: () => Be,
        UserVote: () => sr,
        VideoCard: () => i,
        VideoCarousel: () => ir,
        VideoList: () => cr,
        Wasted: () => dr,
        framer: () => o,
        useTinaModuleFetchByIds: () => Ys,
        withSearchbarErrorBoundary: () => gr,
        withSimpleErrorBoundary: () => va
      });
      var s = {};
      t.r(s), t.d(s, {
        Art: () => ga,
        Link: () => ka
      });
      var r = {};
      t.r(r), t.d(r, {
        CharacterCard: () => Ft,
        Menu: () => ks,
        MenuButton: () => bs
      });
      var i = {};
      t.r(i), t.d(i, {
        Art: () => mr,
        Link: () => ur
      });
      var n = {};
      t.r(n), t.d(n, {
        getVariant: () => jr,
        transitions: () => Sr,
        variants: () => wr
      });
      var o = {};
      t.r(o), t.d(o, {
        Animations: () => n,
        LiteMotion: () => kr,
        withFadeIn: () => hr,
        withFadeUp: () => Nr
      });
      var c = t(51664),
        d = t(41272);
      const l = (0, d.defineMessages)({
        aria_label_open_new_window: {
          id: "aria_label_open_new_window",
          defaultMessage: "(Opens in a new window)"
        }
      });
      var m = t(57013);
      const u = "rockstargames-modules-core-headerff481c537a56a6fcdb1be85dfbc8944e";
      var f = t(95240);
      const g = e => {
        let {
          children: a,
          to: t = "#",
          alt: s = "",
          autoBlank: r = !1,
          onClick: i = (() => {}),
          ...n
        } = e;
        const o = (0, d.useIntl)(),
          c = !/^(https?|mailto):/i.test(t),
          g = /^#/.test(t),
          k = n?.target ?? (r ? "_blank" : "_self");
        let {
          t: p,
          ..._
        } = n, b = "";
        if ("aria-label" in _ && _["aria-label"] && (b = "_blank" === k ? `${_["aria-label"]} ${o.formatMessage(l.aria_label_open_new_window)}` : _["aria-label"]), g) {
          const e = e => {
            e.preventDefault(), document?.querySelector(`[id='${t.replace("#","")}']`)?.scrollIntoView({
              behavior: "smooth",
              block: "center"
            }), i && i(e)
          };
          return (0, f.jsxs)("a", {
            title: s,
            href: t,
            onClick: e,
            ..._,
            "aria-label": b,
            children: [a, "_blank" === k && !b && (0, f.jsx)("span", {
              className: u,
              children: o.formatMessage(l.aria_label_open_new_window)
            })]
          })
        }
        if (c) return (0, f.jsxs)(m.NavLink, {
          title: s,
          to: t,
          onClick: e => i(e),
          ..._,
          "aria-label": b,
          children: [a, "_blank" === k && !b && (0, f.jsx)("span", {
            className: u,
            children: o.formatMessage(l.aria_label_open_new_window)
          })]
        });
        const h = Object.keys(_).filter((e => !["activeClassName", "key", "end"].includes(e))).reduce(((e, a) => ({
          ...e,
          [a]: n[a]
        })), {});
        return "function" == typeof h?.className && delete h.className, (0, f.jsxs)("a", {
          href: t,
          title: s,
          onClick: e => i(e),
          target: k,
          ...h,
          "aria-label": b,
          children: [a, "_blank" === k && !b && (0, f.jsx)("span", {
            className: u,
            children: o.formatMessage(l.aria_label_open_new_window)
          })]
        })
      };
      var k = t(65772),
        p = t.n(k),
        _ = t(61076),
        b = t(90048);
      const h = {
          player: "rockstargames-modules-core-headerbb43df423657efcc0f1f38630a24e5e8",
          fixedToBottom: "rockstargames-modules-core-headere1f497e3ec34c2fd721b124969e27dd5",
          tracksOpen: "rockstargames-modules-core-headere8f2736f0ae21a56045104071a7a9fd7",
          tracks: "rockstargames-modules-core-headerea84096a931648765b1db46f708f70aa",
          iconBurger: "rockstargames-modules-core-headerb91aad66a2102668715c5ddaaecede2e",
          trackList: "rockstargames-modules-core-headerc44536ca7b7fa7236e86c65ae309057e",
          trackActive: "rockstargames-modules-core-headerac7826f934fc777f58017b1a5752419a",
          trackTitle: "rockstargames-modules-core-headeraafc522e642572d5ff93c7408b941829",
          trackIndex: "rockstargames-modules-core-headerb880baa4707c71eb543f905816d8e952",
          controls: "rockstargames-modules-core-headerff92c8eddfc0a0fa7bc7f444973e4f28",
          controlsCurrentBg: "rockstargames-modules-core-headera81d9465f14d65e8e20800d7b25f77d9",
          controlsCurrentBgVisible: "rockstargames-modules-core-headerc87bd14d2bbc9248d9c197b77454f345",
          controlsTrack: "rockstargames-modules-core-headerc23bf574089d1af93750f6af8ebb489f",
          controlsTrackTitle: "rockstargames-modules-core-headere4b77d29e904f9928cca1de93f5c7745",
          controlsTrackAnimating: "rockstargames-modules-core-headerba49949a9cd8c22385708f267c625029",
          scrollText: "rockstargames-modules-core-headerfd9c80e5afaa1ed38ce85f2c3d70eae4",
          controlsTrackArtist: "rockstargames-modules-core-headerc93c1e5399d9fd5e96ca246fdbfb307b",
          controlsTrackBurger: "rockstargames-modules-core-headerb4e1a16e3460b40c1aacd92afe219856",
          controlsButtons: "rockstargames-modules-core-headerd136125994c1d0db1449fce51af559ca",
          controlsScrub: "rockstargames-modules-core-headerd3d935648408f71928bd49d2f7c5a9ff",
          controlsPlayPause: "rockstargames-modules-core-headerf5de7526c8cee98bdd7363fd7f2cf8ae",
          controlsPlayPausePlaying: "rockstargames-modules-core-headerefb6194f0df966e6c8c759937d2fb826",
          controlsNextTrack: "rockstargames-modules-core-headerf286e0ce01c5401e56dd579b076f1aae",
          controlsPrevTrack: "rockstargames-modules-core-headera56bb7cb4b0e2de481777d1f09c3f2f2",
          controlsScrubTrack: "rockstargames-modules-core-headerb8f38f45353fa54fcb6f9e2a3d0d5a85"
        },
        v = e => {
          let {
            src: a
          } = e;
          return (0, f.jsx)("div", {
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
            playing: t,
            audioRef: s,
            setPlaying: r,
            tracksOpen: i,
            setTracksOpen: n,
            trackData: o,
            setTrackId: d,
            trackBounds: l,
            setAutoNext: m
          } = e;
          const u = (0, c.useRef)(null),
            g = (0, c.useRef)(null),
            k = (0, c.useRef)(null),
            [_, b] = (0, c.useState)(null),
            [v, x] = (0, c.useState)(!1),
            y = e => {
              const a = new Date(1e3 * e),
                t = a.getUTCMinutes(),
                s = a.getSeconds();
              return `${t.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`
            };
          return (0, c.useEffect)((() => {
            if (!g.current || !k.current) return;
            const e = () => {
              k.current && g.current && b(k.current.clientWidth > g.current.clientWidth)
            };
            return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e)
          }), [k, g, a]), (0, c.useEffect)((() => {
            if (!u.current || !a?.duration) return;
            let e = null;
            const t = new(p())(u.current),
              r = e => {
                if (u.current) {
                  const t = u.current.clientWidth;
                  if (!u.current.contains(e.srcEvent.target)) return;
                  const r = Math.max(0, e.srcEvent.offsetX),
                    i = Number(r / t * a.duration);
                  s.currentTime = i
                }
              },
              i = () => {
                e ? s.pause() : s.play()
              },
              n = () => {
                e = s.paused, s.pause()
              };
            return t.on("panstart", n), t.on("panleft", r), t.on("panright", r), t.on("panend", i), t.on("tap", r), () => {
              t.off("panstart", n), t.off("panleft", r), t.off("panright", r), t.off("panend", i), t.off("tap", r)
            }
          }), [u.current, a.duration]), (0, c.useEffect)((() => {
            const e = Number(s?.currentTime);
            (t || !isNaN(e) && 0 !== e) && x(!0)
          }), [t, s?.currentTime]), (0, f.jsxs)("div", {
            className: h.controls,
            style: {
              "--track-color": o.color,
              "--track-mix-blend-mode": o.mix_blend_mode,
              "--current-pct": a.current / a.duration
            },
            children: [(0, f.jsx)("div", {
              className: [h.controlsCurrentBg, v ? h.controlsCurrentBgVisible : ""].join(" ")
            }), (0, f.jsx)("div", {
              className: h.controlsTrack,
              ref: g,
              children: (0, f.jsx)("span", {
                className: [h.controlsTrackTitle, _ ? h.controlsTrackAnimating : ""].join(" "),
                ref: k,
                children: o.title
              })
            }), (0, f.jsxs)("div", {
              className: h.controlsButtons,
              children: [(0, f.jsx)("div", {
                className: h.controlsPrevTrack,
                onClick: () => {
                  l && (d(l[0]), m(!0), r(!0))
                }
              }), (0, f.jsx)("div", {
                className: [h.controlsPlayPause, t ? h.controlsPlayPausePlaying : ""].join(" "),
                onClick: () => {
                  r(!t)
                }
              }), (0, f.jsx)("div", {
                className: h.controlsNextTrack,
                onClick: () => {
                  l && (d(l[1]), m(!0), r(!0))
                }
              })]
            }), (0, f.jsx)("div", {
              active: i ? "" : null,
              className: h.controlsTrackBurger,
              children: (0, f.jsx)("div", {
                className: h.iconBurger,
                onClick: () => {
                  n(!i)
                }
              })
            }), (0, f.jsxs)("div", {
              className: h.controlsScrub,
              children: [(0, f.jsx)("span", {
                children: y(a.current)
              }), (0, f.jsx)("div", {
                className: h.controlsScrubTrack,
                ref: u
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
            tracksOpen: r,
            setTracksOpen: i,
            setPlaying: n,
            setAutoNext: o
          } = e;
          return (0, f.jsxs)("div", {
            className: h.tracks,
            children: [(0, f.jsx)("h4", {
              children: "Tracks"
            }), (0, f.jsx)("div", {
              className: h.trackBurger,
              onClick: () => {
                i(!r)
              }
            }), (0, f.jsx)("div", {
              className: h.trackList,
              children: a.map(((e, a) => (0, f.jsxs)("a", {
                style: {
                  "--highlight-color": e.color
                },
                className: t === e.id ? h.trackActive : "",
                onClick: () => {
                  s(e.id), n(!0), o(!0)
                },
                children: [(0, f.jsx)("span", {
                  className: h.trackIndex,
                  children: String(a + 1).padStart(2, "0")
                }), (0, f.jsx)("span", {
                  className: h.trackTitle,
                  children: e.title
                }), (0, f.jsx)("span", {
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
            className: t = ""
          } = e;
          const {
            data: s
          } = (0, _.UL)(b.GetAudioAlbum, {
            variables: {
              id: a
            }
          }), [r, i] = (0, c.useState)(), [n, o] = (0, c.useState)(), [d, l] = (0, c.useState)(), [m, u] = (0, c.useState)(!1), [g, k] = (0, c.useState)(!1), [p, N] = (0, c.useState)(new HTMLAudioElement), [S, w] = (0, c.useState)({
            current: 0,
            duration: 0
          }), [j, C] = (0, c.useState)(!0);
          return (0, c.useEffect)((() => {
            const e = "audio",
              a = a => {
                a?.data?.rockstarAudioPlayerPlayTrackId && (o(a.data.rockstarAudioPlayerPlayTrackId), C(!1), k(!0)), g && a?.data?.attentionBlurredElsewhere && a?.data?.from !== e && k(!1)
              };
            return g && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: e
            }), window.addEventListener("message", a, !1), () => window.removeEventListener("message", a, !1)
          }), [g]), (0, c.useEffect)((() => {
            if (!p) return;
            const e = () => {
                isNaN(p.duration) || w({
                  duration: p?.duration ?? 0,
                  current: p?.currentTime ?? 0
                })
              },
              a = () => {
                j && r && o(r[1])
              };
            return p.addEventListener("loadedmetadata", e), p.addEventListener("timeupdate", e), p.addEventListener("ended", a), () => {
              p.removeEventListener("loadedmetadata", e), p.removeEventListener("timeupdate", e), p.removeEventListener("ended", a)
            }
          }), [p, r, j]), (0, c.useEffect)((() => {
            g && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: "audio"
            })
          }), [g]), (0, c.useEffect)((() => {
            p && (g ? p.play() : p.pause(), u(!1))
          }), [g, p, d?.id]), (0, c.useEffect)((() => {
            if (!n) return;
            const {
              tracks: e
            } = s.audioAlbum, a = s.audioAlbum.tracks.findIndex((e => e.id === n));
            i([e[a - 1]?.id ?? e[e.length - 1].id, e[a + 1]?.id ?? e[0].id]), l(e[a])
          }), [n]), (0, c.useEffect)((() => {
            s && o(s.audioAlbum.tracks[0].id)
          }), [s]), d ? (0, f.jsxs)("div", {
            className: [h.player, h[t], m ? h.tracksOpen : ""].join(" "),
            children: [(0, f.jsx)("audio", {
              ref: e => {
                N(e)
              },
              src: d.mp3_src
            }), (0, f.jsx)(y, {
              tracks: s.audioAlbum.tracks,
              setTrackId: o,
              trackId: n,
              tracksOpen: m,
              setTracksOpen: u,
              setPlaying: k,
              setAutoNext: C
            }), (0, f.jsx)(v, {
              src: d.cover_src
            }), (0, f.jsx)(x, {
              setTrackId: o,
              trackBounds: r,
              tracksOpen: m,
              setTracksOpen: u,
              playing: g,
              setPlaying: k,
              timing: S,
              trackData: d,
              audioRef: p,
              setAutoNext: C
            })]
          }) : null
        },
        S = e => {
          let {
            text: a,
            style: t
          } = e;
          return (0, f.jsx)("div", {
            className: "rockstargames-modules-core-headerb61bd7f274fd6d93c4bf33a9284b6b67",
            style: t,
            children: a
          })
        },
        w = e => {
          let {
            brands: a = []
          } = e;
          return a.length ? (0, f.jsx)("div", {
            className: "rockstargames-modules-core-headercde08e212f23b312d5afca7f2ea1105c",
            children: a.map(((e, a) => {
              let {
                brand: t
              } = e;
              return (0, f.jsx)("div", {
                className: "rockstargames-modules-core-headerc894fe869384587702b5370da072be86",
                "data-brand": t
              }, a)
            }))
          }) : null
        },
        j = {
          button: "rockstargames-modules-core-headere056494c33cff1fe89431f279fdb6b9a",
          secondary: "rockstargames-modules-core-headerd340cf27f380a4347994e59544432eb3"
        },
        C = e => {
          let {
            className: a = "",
            children: t,
            context: s = "",
            to: r,
            onClick: i,
            ...n
          } = e;
          const o = [j.button, j[s], a].join(" ");
          return r ? (0, f.jsx)(g, {
            ...n,
            to: r,
            className: o,
            onClick: i ? () => i() : () => {},
            children: t
          }) : (0, f.jsx)("button", {
            ...n,
            type: "button",
            className: o,
            onClick: i ? () => i() : () => {},
            children: t
          })
        },
        I = function() {
          for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++) a[t] = arguments[t];
          return [...a].filter(Boolean).join(" ")
        };
      var T = t(71612);
      const M = (0, c.createContext)(),
        {
          Provider: E
        } = M,
        L = e => {
          let {
            children: a,
            payload: t
          } = e;
          return (0, f.jsx)(E, {
            value: t,
            children: a
          })
        },
        V = () => (0, c.useContext)(M),
        D = e => {
          if (!e) return null;
          const {
            hostname: a,
            pathname: t
          } = new URL(e, (0, T.kh)(!0));
          return "/" === t ? null : (a.endsWith(".akamaized.net"), e)
        },
        P = e => {
          let {
            alt: a = null,
            mobile: t = null,
            desktop: s = null,
            ariaLabel: r = null,
            sources: i = null,
            prod: n = null
          } = e;
          const o = (0, T.y_)(),
            {
              meta: d = {}
            } = V() ?? {},
            [l, m] = (0, c.useState)(n ?? d?.cdn ?? d?.prod ?? !0);
          (0, c.useEffect)((() => {
            m(n ?? d?.cdn ?? d?.prod ?? !0)
          }), [n, d]);
          const u = (0, c.useCallback)((e => {
            const a = null !== i,
              t = e?.previewSrc ?? e ?? null;
            if (null === t || "string" != typeof t) return null;
            if (t.startsWith("http")) return D(t);
            const s = `${a?(0,T.kh)(l):""}${t}`;
            return D(s)
          }), [l, i]);
          return {
            alt: a,
            ariaLabel: r,
            src: {
              mobile: u(i?.[o]?.mobile ?? i?.en_us?.mobile ?? t),
              desktop: u(i?.[o]?.desktop ?? i?.en_us?.desktop ?? s)
            }
          }
        },
        B = e => {
          const {
            meta: a = {}
          } = V() ?? {}, [t, s] = (0, c.useState)(a?.cdn ?? a?.prod ?? !1);
          return (0, c.useEffect)((() => {
            s(a?.cdn ?? a?.prod ?? !1)
          }), [a]), null === e ? null : e?.startsWith("http") ? D(e) : D(`${(0,T.kh)(t)}${e}`)
        };
      var $ = t(73660),
        z = t.n($);
      const F = (0, c.createContext)(),
        {
          Provider: O
        } = F,
        A = e => {
          let {
            children: a,
            components: t
          } = e;
          return (0, f.jsx)(O, {
            value: t,
            children: a
          })
        };
      var U = t(51328),
        R = t.n(U);
      t(76288), t(34512);
      const H = "content";
      var G = t(12231);
      const W = e => {
          let {
            components: a,
            payload: t,
            componentProps: s = {}
          } = e;
          const r = (0, c.useMemo)((() => (z().cloneDeepWith(t, ((e, s) => {
            "_template" !== s || Number.isInteger(Number(e)) || z().get(a, e) || (console.error(`TinaParser:useComponentRenderer: Component ${e} was found in payload, but not in renderable components.`), console.error("Payload:", t), console.error("Components:", a))
          })), (e => {
            let {
              components: a,
              payload: t,
              componentProps: s
            } = e;
            const r = e => {
              let i = "";
              if (i = Array.isArray(e?.[H]) ? e[H].map((e => r(e))) : e?.[H] ?? "", !e?._template) return i;
              let n, o = e._template;
              "0" === o && (console.warn(`The _template "${o}" wasn't found in the available components. The _template "${o}" was replaced with "gen9.Hero".`, {
                availableComponents: Object.keys(a),
                payload: e
              }), o = "gen9.Hero"), n = z().get(a, o) ?? null;
              const d = [...e?.translations ?? []].reverse(),
                l = `componentProps_${(0,G.c)()}`;
              return (0, c.createElement)(n, {
                ...t?.meta,
                ...e,
                ...s,
                t: e => d.find((a => a?._key === e))?.value ?? e,
                key: l
              }, i)
            };
            return t?.[H]?.length ? r(t) : null
          })({
            components: a,
            payload: t,
            componentProps: s
          }))), [JSON.stringify(t), JSON.stringify(a)]);
          return r
        },
        q = e => {
          let {
            tina: a,
            components: t = {},
            componentProps: s = {}
          } = e;
          const r = V(),
            [i, n] = (0, c.useState)(null),
            [o, d] = (0, c.useState)(null);
          (0, c.useEffect)((() => {
            a?.payload && n(a.payload), a?.variables && d(a.variables)
          }), [a]);
          const [l] = (0, c.useState)({
            ...t,
            ...(0, c.useContext)(F) ?? {}
          }), m = (e => {
            let {
              payload: a
            } = e;
            const [t, s] = (0, c.useState)(a);
            return (0, c.useEffect)((() => {
              const e = z().debounce((() => {
                const e = JSON.parse(JSON.stringify(a));
                z().cloneDeepWith(e, ((e, a, t) => {
                  t?.mediaQueryList && (e => {
                    e?.__original_data || Object.assign(e, {
                      __original_data: {
                        ...e
                      }
                    });
                    const a = e.mediaQueryList.filter((e => {
                        let {
                          mediaQueryString: a
                        } = e;
                        return window.matchMedia(a).matches
                      })) ?? null,
                      t = Object.assign({}, ...a);
                    Object.assign(e, {
                      ...e?.__original_data,
                      ...t,
                      _template: e?._template
                    })
                  })(t)
                })), s(e)
              }), 250);
              return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
            }), [a]), t
          })({
            payload: i
          }), u = (e => {
            let {
              payload: a,
              variables: t
            } = e;
            const [s, r] = (0, c.useState)(a), [i, n] = (0, c.useState)(t);
            return (0, c.useEffect)((() => {
              const e = ((e, a) => {
                  const t = {};
                  return z().cloneDeepWith(e, ((e, s, r) => {
                    s === a && e && (t[r.key] = e)
                  })), t
                })(a, "_memoq"),
                s = JSON.parse(JSON.stringify(z().merge(JSON.parse(JSON.stringify(e)), JSON.parse(JSON.stringify(t?.keys ?? {})))));
              n(s)
            }), [JSON.stringify(a), t]), (0, c.useEffect)((() => {
              const e = JSON.parse(JSON.stringify(a)),
                t = JSON.parse(JSON.stringify(i));
              z().cloneDeepWith(e, ((e, a, s) => {
                (e => {
                  let {
                    item: a,
                    variableKey: s
                  } = e;
                  if (!a || !z().has(a, "key") || a.translated) return;
                  const r = t[a.key] ?? null;
                  if (!r) return;
                  const i = R()(r);
                  Object.keys(i).map((e => {
                    z().set(a, e, i[e])
                  })), z().set(a, "translated", !0), Object.freeze(a)
                })({
                  item: s,
                  variableKey: e
                })
              })), r(e)
            }), [JSON.stringify(a), JSON.stringify(i)]), s
          })({
            payload: i,
            variables: o
          });
          return (0, c.useMemo)((() => {
            if (!i) return null;
            const e = u,
              t = i?.meta?.prod ?? i?.meta?.cdn ?? r?.meta?.prod ?? r?.meta?.cdn ?? !1,
              n = {
                ...i,
                meta: {
                  ...i?.meta ?? {},
                  prod: t
                }
              };
            return (0, f.jsx)(L, {
              payload: n,
              children: (0, f.jsx)(A, {
                components: l,
                children: (0, f.jsx)(W, {
                  payload: e,
                  components: l,
                  componentProps: {
                    ...s,
                    tina: a
                  }
                })
              })
            })
          }), [r, i, JSON.stringify(m), JSON.stringify(u)])
        },
        J = {
          pillBtn: "rockstargames-modules-core-headerb59962d0e68ccd73b5ee2e571528d469",
          selected: "rockstargames-modules-core-headerf5c57dad202e0d6ff855d5a4aca2c804",
          plusButton: "rockstargames-modules-core-headercffaf489342637258d28f9b3b718836a",
          small: "rockstargames-modules-core-headerb8abf927f0ba0af0d8ac0e9c77690d34",
          btnText: "rockstargames-modules-core-headere6e56461bfc2e426c4abc5451cd17284",
          btnTexticon: "rockstargames-modules-core-headercef9f9ce913d167a1fe2e7118a407cdd",
          whiteBtn: "rockstargames-modules-core-headerb257e0629b9f8e101791d7a948ed15be",
          blackBtn: "rockstargames-modules-core-headercb03bccaee79394858682d2ce4d08253",
          transparentBtn: "rockstargames-modules-core-headerd0460159a17533d4d23686d7dca76794",
          iconBtn: "rockstargames-modules-core-headerac61186c3c22346c9a4ee2cd2820d341",
          link: "rockstargames-modules-core-headerc5920e56149b82f20f4db2ad9d397495",
          xboxone: "rockstargames-modules-core-headera7057f2e6d398341f57bc462716d0508",
          xboxseriesxs: "rockstargames-modules-core-headera693ab5879f34d7dea1737d3172ed4e4",
          ps4: "rockstargames-modules-core-headera029ff88fc9aef470aaeef8053f90436",
          ps5: "rockstargames-modules-core-headere25638751cf3e7267db23c6a401fcc36",
          pc: "rockstargames-modules-core-headere03d92653f19a7ae3c4b3d5137bc9909"
        },
        X = e => {
          let {
            children: a,
            className: t,
            onClick: s,
            style: r
          } = e;
          return (0, f.jsx)("button", {
            className: t,
            onClick: s ? () => s() : () => {},
            style: r,
            type: "button",
            children: a
          })
        },
        K = e => {
          let {
            children: a,
            className: t,
            onClick: s,
            style: r,
            to: i
          } = e;
          return (0, f.jsx)(m.NavLink, {
            className: t,
            onClick: s ? () => s() : () => {},
            style: r,
            to: i,
            children: a
          })
        },
        Q = e => {
          let {
            btnColor: a = "#fff",
            className: t = "",
            consoleBtn: s,
            icon: r = "",
            img: i,
            labelColor: n = "#000",
            onClick: o,
            secondText: c,
            size: d,
            text: l,
            to: m,
            type: u = ""
          } = e;
          const g = [J.plusButton, J[u] ?? "", J[d] ?? "", J[s] ?? "", t].join(" "),
            k = {
              "--hvr-color": a ?? n,
              "--hvr-bg-color": n ?? a,
              "--hvr-border-color": a ?? n
            },
            p = (0, f.jsxs)(f.Fragment, {
              children: [i ? (0, f.jsx)("img", {
                src: i,
                alt: ""
              }) : "", (0, f.jsxs)("div", {
                className: J.btnText,
                icon: r,
                children: [l, c ? (0, f.jsx)("span", {
                  children: c
                }) : ""]
              })]
            });
          if (m) {
            if (m.startsWith("http")) {
              const e = m.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, f.jsx)("span", {
                onClick: o ? () => o() : () => {},
                onKeyDown: o,
                className: g,
                role: "button",
                tabIndex: 0,
                children: (0, f.jsx)("a", {
                  href: m,
                  target: e,
                  children: p
                })
              })
            }
            return (0, f.jsx)(K, {
              className: g,
              onClick: o ? () => o() : () => {},
              style: k,
              to: m,
              children: p
            })
          }
          return (0, f.jsx)(X, {
            className: g,
            onClick: o ? () => o() : () => {},
            style: k,
            children: p
          })
        },
        Y = e => {
          let {
            buttons: a = [],
            className: t
          } = e;
          return a.length ? (0, f.jsx)("div", {
            className: I("rockstargames-modules-core-headerb411a36e7fd12ab75861fe560b31b206", t),
            children: a.map(((e, a) => {
              let {
                icon: t,
                title: s,
                to: r
              } = e;
              return s ? (0, f.jsx)(Q, {
                icon: t,
                text: s,
                to: r
              }, a) : ""
            }))
          }) : null
        };
      var Z = t(48111);
      const ee = {
          deprecatedCarousel: "rockstargames-modules-core-headereb5df7b3d51dffc4d993ca7abce4e944",
          "swiper-scrollbar-disabled": "rockstargames-modules-core-headereb2dda6769a7c20a31e7996ff62e41f8",
          "swiper-horizontal": "rockstargames-modules-core-headerb11093de3cb4f18ea2d59b8d4d1db44c",
          "swiper-vertical": "rockstargames-modules-core-headerfa3209fdf995734a1aeeac2cc72cc1ea",
          renderedWithChildren: "rockstargames-modules-core-headerc9f15e74b3166cd0db40501fcc70e868",
          panorama: "rockstargames-modules-core-headerf2a7e77af5dff445e978fd575a567508",
          img: "rockstargames-modules-core-headerf1d3d54c266a20fa0cbe9c342b0d98da",
          hideMobile: "rockstargames-modules-core-headere70d5eaa273e4a0a40ee62a308491810",
          hideLarge: "rockstargames-modules-core-headerbace2af6c822ba7b36b53923629cba0f",
          imageAreaBg: "rockstargames-modules-core-headerf4bb071e6dad07c75b78ea21269ca662",
          infinite_false: "rockstargames-modules-core-headerd6c3d175b843462bf23a1a1f3af6b095",
          track: "rockstargames-modules-core-headerb5ff781c4a96bf031e8e7f5e0c9af395",
          perico: "rockstargames-modules-core-headerbb97d296d17b7e801c6c0719a79463dd",
          dotsSlide: "rockstargames-modules-core-headerdd55a6f93254ed13542089c6f36e0048",
          siblings: "rockstargames-modules-core-headera59cf4385528c371a13be9962b67131b",
          active: "rockstargames-modules-core-headeraa5e195e0c7c6336929553314d52a896",
          "swiper-preloader-spin": "rockstargames-modules-core-headerc05cc0faa8239c85cdc7d53c7e120e8e"
        },
        ae = e => {
          let {
            item: a
          } = e;
          return (0, f.jsxs)("div", {
            children: [(0, f.jsx)(Aa, {
              image: a?.image,
              badge: a?.badge ?? a?.image?.badge,
              badgeType: "badge3",
              role: a?.role ?? a?.image?.role,
              splitter: a?.splitter ?? a?.image?.splitter,
              type: a?.type,
              ariaLabel: a?.image?.ariaLabel ?? a.description,
              style: a?.style,
              className: I(ee.img, a?.className)
            }), (a?.title || a?.description) && (0, f.jsx)(Ae, {
              item: a
            })]
          })
        },
        te = e => {
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
        se = e => {
          let {
            children: a,
            items: t = [],
            style: s = {},
            noInfiniteScroll: r = !1,
            className: i = "",
            renderTemplate: n = "standard",
            text: o,
            customSpaceBetween: d = null,
            centerSlides: l = !0,
            centeredSlidesBounds: m = !1
          } = e;
          const [u, g] = (0, c.useState)(0), k = (0, c.useMemo)((() => a && Array.isArray(a) ? a.map((() => (0, G.c)())) : null), [a]);
          if (!(t && 0 !== t?.length || a)) return null;
          const p = {
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
          return (0, f.jsxs)("div", {
            className: I(ee.deprecatedCarousel, ee[n], ee[`infinite_${!r}`], a ? ee.renderedWithChildren : "", i),
            style: s,
            children: [(0, f.jsxs)(Z.wx, {
              loop: !r,
              grabCursor: !0,
              centeredSlides: l,
              centerInsufficientSlides: l,
              slidesPerView: "auto",
              speed: 700,
              breakpoints: p,
              onUpdate: () => g(0),
              onActiveIndexChange: e => g(e?.realIndex ?? 0),
              centeredSlidesBounds: m,
              children: [(0, f.jsx)("div", {
                className: ee.trackWrapper,
                children: (0, f.jsxs)("div", {
                  className: ee.track,
                  children: [t?.map((e => (0, f.jsx)(Z.Ky, {
                    children: (0, f.jsx)(ae, {
                      item: e
                    })
                  }, e.key))), a && a?.map(((e, a) => e && (0, f.jsx)(Z.Ky, {
                    children: e
                  }, k && k[a])))]
                })
              }), (0, f.jsx)(te, {
                current: u,
                total: a ? a.length : t.length
              })]
            }), (o?.title || o?.description) && (0, f.jsx)(Ae, {
              item: o
            })]
          })
        };
      var re = t(54420);
      const ie = (0, t(62748).U1)(),
        ne = e => e.some((e => !e)),
        oe = e => {
          let {
            condition: a = null,
            children: t
          } = e;
          const [s, r] = (0, c.useState)(!1), i = (e => {
            const [a] = (0, m.useSearchParams)(), [t, s] = (0, c.useState)(null), r = (0, re.yi)(), {
              loggedIn: i
            } = r, {
              currentCharId: n
            } = (0, re.of)(), o = function(e) {
              let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "gtao";
              return (0, c.useMemo)((() => {
                const s = e?.data?.characters?.[t];
                return "1" === (s?.[a]?.stats?.overview?.hasGtaPlus?.value ?? "0")
              }), [e, t, a])
            }(r, n);
            return (0, c.useEffect)((() => {
              const t = "true" === a.get("conditionPreview");
              if (!e?.length > 0) return;
              ie.applyFilters("preview_conditions", e);
              const r = [];
              return e.forEach((e => {
                const {
                  value: s
                } = e;
                if (t) return "true" === a.get(s) ? (r.push(!0), !0) : (r.push(!1), !1);
                if (ne(r)) return !1;
                switch (s) {
                  case "user:is:loggedIn":
                    r.push(!0 === i);
                    break;
                  case "user:not:loggedIn":
                    r.push(!1 === i);
                    break;
                  case "user:is:gtaPlus":
                    r.push(!0 === o);
                    break;
                  case "user:not:gtaPlus":
                    r.push(!1 === o);
                    break;
                  default:
                    r.push(!1)
                }
                return null
              })), s(!ne(r)), () => {}
            }), [a, e, o, r, i]), t
          })(a);
          return (0, c.useEffect)((() => {
            r(i)
          }), [i]), (0, c.useMemo)((() => s ? t : null), [s])
        },
        ce = (0, T.Ux)((e => {
          let {
            children: a
          } = e;
          return c.Children.map(c.Children.toArray(a), (e => (0, f.jsx)(oe, {
            ...e?.props
          })))
        }));
      var de = t(41512),
        le = t(58652);
      const me = e => {
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
        ue = {
          pillBtn: "rockstargames-modules-core-headere3158363419b66e5afa2264e4928890c",
          selected: "rockstargames-modules-core-headera9649249223f164eff11174ffc72616b",
          calloutContainer: "rockstargames-modules-core-headere6bd244761fdf3ebe3888539d9942921",
          calloutSection: "rockstargames-modules-core-headerb1b8c93299158ef7d0f9eb04e14a7a64",
          calloutHeaders: "rockstargames-modules-core-headerc81810436a5b57307c41f4d7a704b2f7",
          calloutHeaderMargins: "rockstargames-modules-core-headerb4e1f72dfa9b38f23017e5f8ef48b9cb",
          calloutHeader: "rockstargames-modules-core-headerb7964754215256201dd703aedca18b6f",
          calloutSubheader: "rockstargames-modules-core-headerac660fa7995007ed875e03a257e447d7",
          calloutVoteForm: "rockstargames-modules-core-headerbee0795a36dd5adf822e1e50a7260f3d",
          voteButton: "rockstargames-modules-core-headerb1baa545566a61b791b696c9ebf560ad",
          upvote: "rockstargames-modules-core-headerb9c17ddd3e1052acb5097909ae2b07a1",
          downvote: "rockstargames-modules-core-headerf26b53e66e552183743465cce6a8d3a8",
          active: "rockstargames-modules-core-headerd38a1764483a36e8a1509aee5b88ec31",
          calloutButton: "rockstargames-modules-core-headerb7eb76afce3c6e686be44c356837b627",
          calloutLink: "rockstargames-modules-core-headeraefe6c5a233047c943a864cd56a7de2d",
          calloutLinkIcon: "rockstargames-modules-core-headera74bf6baa632ad9b5f87efd2043cfed5",
          actionBlock: "rockstargames-modules-core-headercc491ddd715196ecd6ef54017ff05ec0",
          actionFooter: "rockstargames-modules-core-headerdb26fed58ce50f4affc114670885721a"
        },
        fe = e => {
          let {
            foreign_id: a,
            foreign_type: t
          } = e;
          const {
            track: s
          } = (0, re.ye)(), {
            refetch: r
          } = (0, _.UL)(le.UserGetVote, {
            skip: !0
          }), [i] = (0, _.cQ)(le.UserCastVote), [n, o] = (0, c.useState)(null), d = (0, c.useCallback)((e => {
            (async () => {
              if (e === n && null !== n) o(null);
              else {
                o(e), s({
                  event_action: e ? "like" : "dislike",
                  event_category: "cta",
                  event: "cta_" + (e ? "like" : "dislike"),
                  event_label: a
                });
                const r = {
                  foreignId: a,
                  foreignType: t,
                  vote: e
                };
                await i({
                  variables: r
                })
              }
            })()
          }), [a, t, n]);
          return (0, c.useEffect)((() => {
            a && t && (async () => {
              const e = await r({
                foreignId: a,
                foreignType: t
              });
              o(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [a, t]), (0, f.jsxs)("div", {
            className: ue.calloutVoteForm,
            children: [(0, f.jsx)("button", {
              "aria-label": "upvote",
              className: [ue.upvote, ue.voteButton, n ? ue.active : ""].join(" "),
              name: "upvote",
              onClick: () => d(!0),
              type: "button"
            }), (0, f.jsx)("button", {
              "aria-label": "downvote",
              className: [ue.downvote, ue.voteButton, !1 === n ? ue.active : ""].join(" "),
              name: "downvote",
              onClick: () => d(!1),
              type: "button"
            })]
          })
        },
        ge = e => {
          let {
            action_text: a,
            link: t,
            trackingData: s
          } = e;
          const {
            track: r
          } = (0, re.ye)();
          return (0, f.jsx)("a", {
            href: t,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, f.jsxs)("button", {
              className: ue.calloutLink,
              type: "button",
              onClick: s ? () => r({
                ...s
              }) : () => {},
              children: [a, (0, f.jsx)(me, {
                className: ue.calloutLinkIcon
              })]
            })
          })
        },
        ke = e => {
          let {
            helperText: a,
            linkText: t,
            link: s,
            trackingData: r
          } = e;
          const {
            track: i
          } = (0, re.ye)();
          return (0, f.jsxs)("div", {
            className: ue.actionFooter,
            children: [a, t && " ", t && (0, f.jsx)("a", {
              href: s ?? "",
              onClick: () => i({
                ...r
              }),
              children: t
            })]
          })
        },
        pe = (0, T.Ux)((e => {
          let {
            header: a,
            subheader: t,
            type: s,
            action_text: r,
            link: i,
            foreign_id: n = document.location.pathname,
            foreign_type: o = "url",
            className: d = "",
            actionFooterHelperText: l,
            actionFooterLinkText: m,
            actionFooterLink: u,
            trackingData: g = {},
            actionFooterLinkTrackingData: k = {},
            t: p,
            ..._
          } = e;
          const {
            loggedIn: b
          } = (0, re.yi)(), {
            track: h
          } = (0, re.ye)(), v = `${document.location.origin}/auth/sc-auth-login?returnUrl=${window.location.pathname}`, {
            ref: x,
            inView: y
          } = (0, de.cD)({
            threshold: .6
          }), [N, S] = (0, c.useState)(!1);
          let w;
          if ((0, c.useEffect)((() => {
              y && !N && (h({
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
                w = (0, f.jsx)(C, {
                  to: v,
                  className: ue.calloutButton,
                  onClick: g ? () => h({
                    ...g
                  }) : () => {},
                  children: "Log In"
                });
                break
              }
              w = (0, f.jsx)(fe, {
                foreign_id: n,
                foreign_type: o
              });
              break;
            case "button":
              r && i && (w = (0, f.jsx)(C, {
                to: i,
                className: ue.calloutButton,
                onClick: g ? () => h({
                  ...g
                }) : () => {},
                children: r
              }));
              break;
            case "link":
              r && i && (w = (0, f.jsx)(ge, {
                action_text: r,
                link: i,
                trackingData: g
              }));
              break;
            default:
              w = null
          }
          return (0, f.jsx)("div", {
            className: `${ue.calloutContainer} ${d||""}`,
            ref: x,
            children: (0, f.jsxs)("div", {
              className: ue.calloutSection,
              children: [(0, f.jsxs)("div", {
                className: [ue.calloutHeaders, w ? ue.calloutHeaderMargins : ""].join(" "),
                children: [a && (0, f.jsx)("h2", {
                  className: ue.calloutHeader,
                  children: p(a)
                }), t && (0, f.jsx)("h3", {
                  className: ue.calloutSubheader,
                  children: p(t)
                })]
              }), (0, f.jsxs)("div", {
                className: ue.actionBlock,
                children: [w, l && (0, f.jsx)(ke, {
                  helperText: l,
                  linkText: m,
                  link: u,
                  trackingData: k
                })]
              })]
            })
          })
        }));
      var _e = t(69736),
        be = t(44236),
        he = t.n(be);
      const ve = e => {
          let {
            isMulti: a,
            allowSelectAll: t,
            label: s,
            miscProps: r
          } = e;
          const [i, n] = (0, c.useState)(""), o = (0, c.useMemo)((() => he()().getData()), []);
          return (0, f.jsx)(_e.cp, {
            unstyled: !0,
            value: i,
            isMulti: a,
            allowSelectAll: t,
            options: o,
            placeholder: s,
            onChange: e => {
              return a = e?.target?.value, void n(a);
              var a
            },
            classNamePrefix: "country-select",
            ...r
          })
        },
        xe = e => {
          let {
            cookieName: a,
            cookieValue: t,
            trueComponent: s,
            falseComponent: r
          } = e;
          const i = (e => {
              const a = document.cookie.split("; "),
                t = `${e}=`,
                s = a.find((e => e.startsWith(t)));
              return s?.substring(t.length, s.length)
            })(a),
            n = new URLSearchParams(window.location.search).get(a);
          return n && ((e, a) => {
            e && a && (document.cookie = `${e}=${a}; domain=${(()=>{const e=window.location.hostname.split(".");return e.slice(e.length-2).join(".")})()}; path=/;`)
          })(a, n), i === t || n === t ? s : r
        },
        ye = {
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
        Ne = e => ye[e] || null,
        Se = {
          cta: "rockstargames-modules-core-headerbc76de01fdd1260e254c482984d2a924",
          xbox: "rockstargames-modules-core-headerf591c5444c08121b0514f0c675da1479",
          xboxone: "rockstargames-modules-core-headere5124beff89c5b4093a4029a9fee3367",
          xboxseriesxs: "rockstargames-modules-core-headere52c94654eb462a8e65aa7607f5e21b5",
          ps: "rockstargames-modules-core-headerc53b78d3d062ee8d58f63a0acb1df137",
          ps4: "rockstargames-modules-core-headerf4a27aba1505f555d7cd8c920645245a",
          ps5: "rockstargames-modules-core-headerb5826d3700572b9bf36874e34d5c2a22",
          pc: "rockstargames-modules-core-headerc7ee0cfc54be00a8b152c47997ce76ac",
          switch: "rockstargames-modules-core-headera9b276d1c119e9cd14df54c4459197b0",
          googleplay: "rockstargames-modules-core-headera4ccd0de63b104d4aa48c8c3176618f3",
          platformIcon: "rockstargames-modules-core-headerc4ab0a89b65025cfe63b851116fb3a32",
          applestore: "rockstargames-modules-core-headera13111cbe8acbd75f62da1c53de2c3df",
          btnIcon: "rockstargames-modules-core-headercb0ad8d8dd93218dc12091b883767967",
          label: "rockstargames-modules-core-headerb81011c72b601075ebe54d7ceaa7d2d8",
          primary: "rockstargames-modules-core-headerdbcf41d5c23e0eaf5089021f4d41c121",
          btnContent: "rockstargames-modules-core-headerf5e832587747dc414e10ab8e0bd843a9",
          icon: "rockstargames-modules-core-headerc7a3f1a29594b307606d15e6827f63f9",
          "icon-left": "rockstargames-modules-core-headerbd623c6039c3f4122936775ed4214bd4",
          "icon-right": "rockstargames-modules-core-headerc79040e66c1f48e302291d8cf1335742",
          disabled: "rockstargames-modules-core-headerd87326174de12b895401f738a23b177a",
          pillBtn: "rockstargames-modules-core-headerbf9c11ff862c409ecb412254932a66d0",
          selected: "rockstargames-modules-core-headere07887131c72b6346c408895888f4fa7"
        },
        we = e => {
          let {
            platform: a = ""
          } = e;
          const t = a ? Ne(a) : null,
            s = t ? (0, f.jsx)("img", {
              className: Se.platformIcon,
              src: t,
              alt: "Platform Icon"
            }) : null;
          return (0, f.jsx)("span", {
            className: [Se.btnContent, Se.platformButton].join(" "),
            children: s
          })
        },
        je = e => {
          let {
            children: a,
            href: t,
            style: s,
            content: r,
            variant: i = null,
            icon: n,
            iconPosition: o = "none",
            iconStyle: d,
            badge: l,
            badgeStyle: u,
            platformItem: g,
            gtm: k = {},
            disabled: p,
            className: _
          } = e;
          const {
            track: b
          } = (0, re.ye)(), h = (0, T.sL)(), v = r ?? a, x = `Redirect to ${t}`, y = (0, c.useMemo)((() => {
            const e = window.location.hostname;
            let a;
            try {
              a = new URL(t)?.hostname
            } catch (t) {
              a = e
            }
            return e === a
          }), [t]), N = (0, c.useCallback)((() => {
            p || b({
              event: "cta_other",
              ...h,
              ...k,
              link_url: t ?? void 0,
              text: v ?? void 0
            })
          }), [k, t, h]), S = () => n ? (0, f.jsx)("span", {
            className: [Se.icon, `icon-${o}`].join(" "),
            style: d,
            children: (0, f.jsx)("img", {
              className: Se.btnIcon,
              src: Ne(n),
              alt: `${n} icon`
            })
          }) : null;
          return (0, f.jsx)(m.NavLink, {
            to: t,
            target: y ? "_self" : "_blank",
            className: [Se.cta, "platform" === i && g ? Se[g] : "", p ? Se.disabled : "", _].join(" "),
            style: s,
            "data-variant": i,
            onClick: N,
            disabled: p,
            "aria-label": x,
            children: "platform" === i && g ? (0, f.jsx)(we, {
              platform: g
            }) : (0, f.jsxs)("div", {
              className: Se.btnContent,
              children: ["left" === o && S(), (0, f.jsx)("span", {
                children: v
              }), "right" === o && S(), l ? (0, f.jsx)("span", {
                className: Se.badge,
                style: u,
                children: l
              }) : null]
            })
          })
        },
        Ce = "rockstargames-modules-core-headereb64520e04e486931cd65dc5b3fa61e8",
        Ie = "rockstargames-modules-core-headercc9a6fdcc84b758d60987ea9a5ddfd81",
        Te = "rockstargames-modules-core-headeree609f31f3685766122c2c6fc0ef0710",
        Me = e => {
          let {
            alt: a,
            className: s,
            src: r,
            style: i
          } = e;
          const [n, o] = (0, T.kJ)(r);
          let c = r;
          !1 === n && (s === Te && (c = t(61820)), c = t(43976));
          const {
            width: d,
            height: l
          } = o, m = {
            "--aspect-ratio": Number.isNaN(d / l) ? "" : d / l,
            ...i
          };
          return (0, f.jsx)("img", {
            src: c,
            className: s ?? "",
            alt: a,
            style: m
          })
        },
        Ee = e => {
          let {
            className: a,
            style: s = {},
            image: r = {},
            imageStyle: i = {}
          } = e, {
            alt: n,
            src: o
          } = P(r);
          return o.desktop || o.mobile || (n = "placeholder", o = {
            mobile: t(61820),
            desktop: t(43976)
          }), (0, f.jsx)("div", {
            className: r.frame ? `${r.frame} ${Ce}` : Ce,
            style: s,
            children: o?.desktop && o?.mobile ? (0, f.jsxs)(f.Fragment, {
              children: [(0, f.jsx)(Me, {
                style: {
                  ...i,
                  ...r?.style
                },
                src: o.desktop,
                alt: n,
                className: a ? `${a} ${Ie}` : Ie
              }), (0, f.jsx)(Me, {
                style: {
                  ...i,
                  ...r?.style
                },
                src: o.mobile,
                alt: n,
                className: a ? `${a} ${Te}` : Te
              })]
            }) : (0, f.jsx)(Me, {
              style: {
                ...i,
                ...r?.style
              },
              src: o?.desktop ?? o?.mobile,
              alt: n,
              className: a
            })
          })
        };
      var Le = t(8560),
        Ve = t.n(Le);
      const De = {
          grid: "rockstargames-modules-core-headerac295ed5b9cb441ed17843b34e83ea17",
          itemList: "rockstargames-modules-core-headercaf5589ddeca00ed09213e547674b1f3",
          gtaplus: "rockstargames-modules-core-headerb291112adcf994a0f6acadd86f73b78a",
          rdo: "rockstargames-modules-core-headerd146e8f862baefb60e91be5aa3c17b6e",
          noImg: "rockstargames-modules-core-headerba9b5ae08642b0213a3f04b3db9a9dac",
          gtao: "rockstargames-modules-core-headerb6f2bdfd6a1d57b7ce840f7a56cc510b",
          custom: "rockstargames-modules-core-headeraf89164a043648d1464686ff13363ee4",
          yellow: "rockstargames-modules-core-headerd244b17b74fc46269e8a106a99ab0f87",
          hotPink: "rockstargames-modules-core-headerd90b28503318563cfd6059146d1fb6b6",
          red: "rockstargames-modules-core-headerc3f8a8706901874d906f94c626be3c1e",
          turquoise: "rockstargames-modules-core-headerfe2ec36e92e2bb4d453fdc4b05966418",
          purple: "rockstargames-modules-core-headerf5f7baf5b56f5b2ada053a93392bbf7a",
          teal: "rockstargames-modules-core-headerf4a229f41cd20f181d810c311416e3f2",
          blue: "rockstargames-modules-core-headerf6f689d687bcd482ea2cd2990fd66878",
          green: "rockstargames-modules-core-headerab270f1b4d3ad43e7bc51393b7c5c089",
          darkRed: "rockstargames-modules-core-headerdc24ce78d962f3472b06955bf8855103",
          darkBlue: "rockstargames-modules-core-headerb354493baac7389b21b511009f287428",
          goldenrod: "rockstargames-modules-core-headere4a078efee11d24c64e93ccf0744a33f",
          skull: "rockstargames-modules-core-headerd4581a495de14e6762bb15debe5bb810"
        },
        {
          sanitize: Pe
        } = Ve(),
        Be = e => {
          let {
            list: a,
            string: t,
            starColor: s,
            style: r,
            className: i,
            game: n,
            noImg: o,
            columns: d,
            mobileColumns: l
          } = e;
          const [m, u] = (0, c.useState)(null), g = t ? t.split("_#_") : a;
          return (0, c.useEffect)((() => {
            u(a)
          }), [a]), t || a ? d && m ? (0, f.jsx)("div", {
            className: De.grid,
            style: {
              "--unordered-list-grid-column": d,
              "--unordered-list-grid-column-mobile": l ?? d
            },
            children: (0, f.jsx)("ul", {
              style: (0, T.G6)(r),
              className: I(De.itemList, De.noImg, De[s], De[n]),
              children: m.map((e => (0, f.jsx)("li", {
                dangerouslySetInnerHTML: {
                  __html: Pe(e.content)
                }
              }, e.content)))
            })
          }) : (0, f.jsx)("ul", {
            style: (0, T.G6)(r),
            className: I(De.itemList, De.custom, o ? De.noImg : "", s ? De[s] : "", n ? De[n] : "", i ?? ""),
            children: g.map((e => (0, f.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: Pe(e?.content ?? e)
              }
            }, e?.content)))
          }) : null
        },
        $e = {
          hr: "rockstargames-modules-core-headerf5cd418ab2ef6a89df6c95d2caa06ba8",
          redLine: "rockstargames-modules-core-headerf8b44ef9bbd3e7feb22bf79cc009b16e",
          gtao: "rockstargames-modules-core-headerc442f7264db862a7cca6d9a56dacc205"
        },
        ze = e => {
          let {
            style: a,
            className: t = "",
            type: s
          } = e;
          return (0, f.jsx)("div", {
            style: a,
            className: [$e.hr, $e[s], t].join(" ")
          })
        },
        Fe = "rockstargames-modules-core-headerfa6885b15a718acb24f48949c52e31f1",
        Oe = e => {
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
        Ae = e => {
          let {
            item: a,
            className: t = ""
          } = e;
          return (0, f.jsxs)("div", {
            className: I("rockstargames-modules-core-headeref9e6981551ac5ce250ebff8b18d7a29", t),
            children: [a.title && (0, f.jsx)(Oe, {
              to: a?.href ?? a?.to,
              children: (0, f.jsx)("h3", {
                children: a.title
              })
            }), Array.isArray(a?.description?.content) ? a.description.content?.map(((e, a) => e?.unorderedList ? (0, f.jsx)(Be, {
              columns: e.unorderedList.columns ?? null,
              style: {
                "--unordered-list-padding": "var(--grid-gap-static-sm)",
                "--unordered-list-margin-bottom": ".5rem"
              },
              noImg: !0,
              list: e.unorderedList.list
            }, a) : e?.image ? (0, f.jsx)(Ee, {
              image: e.image,
              className: e?.className,
              ariaLabel: e.image?.ariaLabel
            }, a) : e?.separator ? (0, f.jsx)("div", {
              style: {
                margin: `${e.separator.spacing} 0`
              },
              children: (0, f.jsx)(ze, {})
            }, a) : (0, f.jsx)("p", {
              children: (0, f.jsx)("span", {
                className: Fe,
                dangerouslySetInnerHTML: {
                  __html: e
                }
              })
            }, a))) : (0, f.jsx)("span", {
              className: Fe,
              dangerouslySetInnerHTML: {
                __html: a.description
              }
            })]
          })
        };
      var Ue = t(58936);
      const Re = e => {
          let {
            children: a,
            ...t
          } = e;
          const [s, r] = (0, c.useState)(!1);
          return (0, f.jsx)(Ue.cR, {
            ...t,
            onReady: () => {
              document.fonts.ready.then((() => {
                r(!0)
              }))
            },
            children: a
          })
        },
        He = {
          badge: "rockstargames-modules-core-headere279e2cebfa338f34b03fd732416e836",
          badgeSizeUpdate: "rockstargames-modules-core-headerd7362a3e27ccaad9d2aadd2f31691340",
          badge2: "rockstargames-modules-core-headerd697f4a5f7c876d5e540a96da1e0ca3a",
          badge3: "rockstargames-modules-core-headere1bba3cd4554abbb48a030af24bbada5"
        },
        Ge = e => {
          let {
            wrapper: a,
            children: t,
            role: s,
            splitter: r
          } = e;
          return r || s ? a(t) : t
        },
        We = e => {
          let {
            badge: a,
            badgeType: s,
            role: r,
            splitter: i
          } = e;
          const n = [];
          i ? a.split(i).map(((e, a) => n.push(e))) : n.push(a);
          let o = 100;
          return 2 == n.length && n[1].length < 4 && "off" !== n[1].toLowerCase() && 45, (0, f.jsxs)(Ge, {
            splitter: i,
            role: r,
            wrapper: e => (0, f.jsx)("div", {
              className: `${He.badge} ${s?He[s]:""} `,
              children: e
            }),
            children: [(0, f.jsx)(f.Fragment, {
              children: r && (0, f.jsx)(Ee, {
                image: {
                  alt: r,
                  desktop: t(6572)(`./${r}.png`)
                }
              })
            }), (0, f.jsx)(Re, {
              className: `${i||r?"":He.badge} ${s?He[s]:""}`,
              min: 8,
              max: 1e3,
              mode: i || r ? "single" : "multi",
              children: n[0]
            }), (0, f.jsx)(f.Fragment, {
              children: n.shift() && i && n.length >= 1 && (0, f.jsx)(Re, {
                min: 8,
                max: 1e3,
                mode: "single",
                forceSingleModeWidth: !0,
                children: n.join(" ")
              })
            })]
          }, "badge-wrapper")
        },
        qe = "rockstargames-modules-core-headerc63cfb461217f059c8c25eec09602b30",
        Je = e => {
          let {
            color: a
          } = e;
          return (0, f.jsxs)("div", {
            className: "rockstargames-modules-core-headera481f47ab7e8af4042a665fab5aea27c",
            style: {
              "--loader-color": a
            },
            children: [(0, f.jsx)("div", {
              className: qe
            }), (0, f.jsx)("div", {
              className: qe
            }), (0, f.jsx)("div", {
              className: qe
            })]
          })
        };
      var Xe = t(36960),
        Ke = t.n(Xe);
      const Qe = {
          dropdownWrapper: "rockstargames-modules-core-headerb951912c02de0e5e881fedd391d04810",
          items: "rockstargames-modules-core-headerb0a8f220641417f889d4fd6039fe6bac",
          open: "rockstargames-modules-core-headerf5eb88111734e6e70d34ef2b095c44f6",
          opener: "rockstargames-modules-core-headerecb577af64f747d0d39cf03939ee3c73",
          secondary: "rockstargames-modules-core-headerb64c3515fcd91f6b84410bd14640da81"
        },
        Ye = e => {
          let {
            children: a,
            className: t,
            title: s
          } = e;
          const [r, i] = (0, c.useState)(!1);
          return (0, f.jsx)(Ke(), {
            disabled: !r,
            children: (0, f.jsxs)("div", {
              className: [Qe.dropdownWrapper, r ? Qe.open : "", void 0 !== t ? t : ""].join(" "),
              children: [(0, f.jsx)("button", {
                className: Qe.opener,
                onClick: () => i(!r),
                children: s
              }), r && (0, f.jsx)("div", {
                className: Qe.items,
                onClick: () => i(!1),
                children: a
              })]
            })
          })
        },
        Ze = e => {
          let {
            children: a,
            context: t = null,
            game: s,
            image: r = {},
            style: i = {},
            template: n = null,
            theme: o = null,
            reversedOnMobile: c = !1,
            className: d = "",
            id: l = null
          } = e;
          const m = P(r),
            u = {
              ...i
            };
          if (m?.src?.desktop) {
            const e = "var(--grid-background-repeat, no-repeat)",
              a = "var(--grid-background-position, center)/var(--grid-background-size, cover)";
            u.background = `url(${m?.src?.desktop}) ${e} ${a}`
          }
          return (0, f.jsx)("div", {
            id: l,
            className: I("rockstargames-modules-core-headerf42b4606ed4a5b16b7647ad7b7eb229d", c ? "rockstargames-modules-core-headerb00444166ce6346d7ca364a75a335ecc" : "", d),
            "data-game": "community" === n ? null : s,
            style: (0, T.G6)(u),
            "data-context": t,
            "data-template": n,
            "data-theme": o,
            children: a
          })
        },
        ea = e => {
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
        aa = e => {
          let {
            componentTitle: a,
            type: t,
            items: s
          } = e;
          return s?.length ? (0, f.jsx)("div", {
            className: "rockstargames-modules-core-headerd393ab6eb68d416b116b6281abdb5e14",
            type: t,
            children: (0, f.jsxs)(Ze, {
              children: [a && (0, f.jsx)("h3", {
                children: a
              }), (0, f.jsx)(Ze, {
                className: "rockstargames-modules-core-headered3ee31cb8e357d795886157f95a742a",
                children: s.map(((e, a) => {
                  return e?.embed ? (0, f.jsx)(ea, {
                    caption: e?.caption,
                    children: (0, f.jsx)("div", {
                      className: "rockstargames-modules-core-headerdcf1c30612026a517f59af64d8703bc4",
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
      var ta = t(50968);
      const sa = {
          type: "spring",
          stiffness: 650,
          damping: 45
        },
        ra = {
          ease: "easeOut",
          duration: .9,
          delay: .3
        },
        ia = {
          open: {
            opacity: 0,
            transition: {
              ease: "easeOut",
              duration: .3
            }
          },
          closed: {
            opacity: 1,
            transition: ra
          }
        },
        na = {
          open: {
            opacity: 1,
            display: "grid",
            height: "auto",
            transition: {
              opacity: ra,
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
              height: sa
            },
            transitionEnd: {
              display: "none"
            }
          }
        },
        oa = {
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
            transition: sa,
            transitionEnd: {
              "--btn-hover-bg-color": "inherit",
              "--btn-hover-bg-color-noBlur": "inherit",
              "--btn-hover-font-color": "inherit",
              "--btn-hover-border-color": "inherit"
            }
          }
        },
        ca = {
          pillBtn: "rockstargames-modules-core-headerba37d7130b54bd53bd309b0cd04717ff",
          selected: "rockstargames-modules-core-headerc9c0bba52c010c4e3571f2702eef944b",
          container: "rockstargames-modules-core-headerbfcd1a0671c127c9135d8c2feac75c34",
          content: "rockstargames-modules-core-headera1cf623c9dd51dd05772a395d8311dac",
          unexpandedButton: "rockstargames-modules-core-headerba4683b82274b0f8ca98f97fd2b0a1c9",
          expandedArea: "rockstargames-modules-core-headerdd25aa78f935c7d4cafdb1c8bc6d7932",
          closeButton: "rockstargames-modules-core-headerc559c930e0a5a7caa72b3de9a3362a0a",
          platformButtons: "rockstargames-modules-core-headerd6bfc47d3110920d77ea2e70dac9c898",
          platformButton: "rockstargames-modules-core-headerb04a9bd68b598682a5dbe99dd1a2f06d",
          xbox: "rockstargames-modules-core-headerfe4a687dfc69ef746fcbe4184c7a9574",
          xboxone: "rockstargames-modules-core-headerb1f46a1ff640d7398e7736e814a5ed8f",
          xboxseriesxs: "rockstargames-modules-core-headere23b6f1412ea1ecb8a616b4f25d2888d",
          ps: "rockstargames-modules-core-headere0b107bda3c03c1e82c94195bfbc055b",
          ps4: "rockstargames-modules-core-headerdcf3078cbde57db42e66e6ba4c269fbe",
          ps5: "rockstargames-modules-core-headere047116842d7619f0e04a3c9b6dbec13",
          pc: "rockstargames-modules-core-headerdaa32798c37b9055cd280b838972e63e",
          switch: "rockstargames-modules-core-headerae7bc564778d8af6cf5f8a0491ef7dc8",
          buttonText: "rockstargames-modules-core-headerc2fb2fb5ec39a5c3b3c14ee6c0505b53"
        },
        da = e => {
          let {
            buttonText: a = "",
            link: s = "",
            platform: r = "",
            target: i = null,
            onClick: n
          } = e;
          const o = i ?? (s.startsWith(document.location.origin) ? "_self" : "_blank"),
            c = [ca.platformButton, ca[r]].join(" "),
            d = r ? t(13892)(`./${r}.svg`) : null,
            l = (0, f.jsxs)(f.Fragment, {
              children: [d ? (0, f.jsx)("img", {
                src: d,
                alt: a
              }) : "", !d && (0, f.jsx)("div", {
                className: ca.buttonText,
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
              className: c,
              target: o,
              children: l
            })
          }) : (0, f.jsx)(m.NavLink, {
            className: c,
            onClick: n,
            to: s,
            children: l
          })
        },
        la = e => {
          let {
            buttonText: a = "Subscribe",
            className: s,
            children: r,
            platformsAndLinks: i = [],
            trackingType: n = "buy",
            trackingParent: o,
            target: d = null,
            trackingOId: l = null
          } = e;
          const [m, u] = (0, c.useState)(!1), {
            track: g
          } = (0, re.ye)();
          return (0, f.jsxs)("div", {
            className: I(ca.container, s),
            children: [(0, f.jsx)(ta.motion.div, {
              className: ca.content,
              animate: m ? "open" : "close",
              variants: ia,
              children: r
            }), (0, f.jsxs)(ta.motion.div, {
              onClick: () => {
                u(!m), m || g("select_platform" === n ? {
                  event: "select_platform",
                  event_action: "select_platform",
                  event_category: "cta",
                  event_label: o,
                  text: a?.toLowerCase() ?? "subscribe"
                } : "link_account" === n ? {
                  element_placement: o,
                  event: "cta_link_account",
                  event_action: "link_account",
                  event_category: "cta",
                  event_label: o,
                  o_id: l,
                  text: a?.toLowerCase()
                } : {
                  event: "cta_buy",
                  event_action: "buy",
                  event_category: "cta",
                  event_label: o,
                  text: a?.toLowerCase() ?? "subscribe"
                })
              },
              className: ca.unexpandedButton,
              animate: m ? "open" : "closed",
              variants: oa,
              initial: !1,
              children: [(0, f.jsx)(ta.motion.div, {
                className: ca.buttonText,
                "data-expanded": m,
                children: "string" == typeof a ? a : "Subscribe"
              }), (0, f.jsxs)(ta.motion.div, {
                className: ca.expandedArea,
                animate: m ? "open" : "closed",
                variants: na,
                initial: !1,
                children: [(0, f.jsx)("img", {
                  className: ca.closeButton,
                  onClick: () => u(!1),
                  onKeyDown: e => {
                    u(!1)
                  },
                  src: t(72428),
                  alt: "Close",
                  role: "button"
                }), (0, f.jsx)("div", {
                  className: ca.platformButtons,
                  children: i.length ? i.map((e => (0, f.jsx)(da, {
                    buttonText: e.buttonText ?? "",
                    link: e.href,
                    platform: e.platform,
                    onClick: () => (e => {
                      let {
                        href: a,
                        platform: t
                      } = e;
                      g({
                        element_placement: o,
                        event: "cta_store_link",
                        event_action: "store_link",
                        event_category: "cta",
                        event_label: "expanding platform button",
                        link_url: a,
                        text: t
                      })
                    })(e),
                    target: d
                  }, `${e.key}-${e.href}-${e.platform}`))) : ""
                })]
              })]
            })]
          })
        },
        ma = {
          animateBox: "rockstargames-modules-core-headere9374e74c542c1028a2068dfbd1e85a3",
          fadeArea: "rockstargames-modules-core-headera63de5cdf9849ac45a0f6b4f7617cfa5",
          visible: "rockstargames-modules-core-headerd7458685114194d602f94e2581de0f08",
          barGrow: "rockstargames-modules-core-headerb0f4d843b626e3741c9dd38fcb3f56b0",
          bar: "rockstargames-modules-core-headera4b99f54f3ce3987765143d8a151360a",
          animateMe: "rockstargames-modules-core-headerf9c3869a2a1e10490bdfbcb3ee89d7da"
        },
        ua = e => {
          let {
            children: a,
            style: t
          } = e;
          const s = (0, c.useRef)(null);
          return (0, c.useEffect)((() => {
            new IntersectionObserver((e => {
              e.forEach((e => {
                e.isIntersecting && e.target.classList.add([ma.visible])
              }))
            })).observe(s?.current)
          }), []), (0, f.jsx)("div", {
            style: t,
            className: [ma.fadeArea].join(" "),
            ref: s,
            children: a
          })
        },
        fa = {
          img: "rockstargames-modules-core-headere3f505a2281df28eb1acdf2d586e7fbd",
          startAnimation: "rockstargames-modules-core-headera27e4d6733cea4a38e469425ef32ed3a"
        },
        ga = e => {
          let {
            imgSrc: a,
            title: t
          } = e;
          const [s] = (0, T.kJ)(a);
          return (0, f.jsx)("div", {
            role: "img",
            "aria-label": t,
            className: [fa.img, s ? fa.startAnimation : ""].join(" "),
            style: {
              backgroundImage: `url(${a})`
            }
          })
        },
        ka = e => {
          let {
            game: a,
            to: t
          } = e;
          const {
            fob_640: s,
            site_in_rockstar: r = !1,
            title_slug: i
          } = a;
          let n = i;
          "V" === i && (n = "gta-v"), "GTAOnline" === i && (n = "gta-online"), "undeadnightmare" === i && (n = "reddeadredemption");
          const o = t ?? `${r?"":"/games"}/${n}`;
          return (0, f.jsx)(g, {
            "data-gtm-category": "Games",
            "data-gtm-action": "Game Click-through",
            "data-gtm-label": i,
            "data-testid": `${i}-gamecard`,
            to: o,
            target: "_self",
            className: "rockstargames-modules-core-headerfded54fb94f7325c5a0b57590585b175",
            children: (0, f.jsx)(ga, {
              imgSrc: s,
              title: a.title
            })
          })
        },
        pa = {
          gameSiteHeader: "rockstargames-modules-core-headercb7cada84679a7af263e1436675a518a",
          activeNavItem: "rockstargames-modules-core-headeraa4aa7ed96facb38ed09c72eededb418",
          navHidden: "rockstargames-modules-core-headerac1cb9d2005f287ed666d334f816f8c5",
          navContent: "rockstargames-modules-core-headere5abd79468866e31fdad2780b169f687",
          headerNavOpen: "rockstargames-modules-core-headerb98508d0923c5bb442c15772fbad9764",
          headerLogo: "rockstargames-modules-core-headere666ff4f0b91dfe78991244ac1a759a5",
          bg: "rockstargames-modules-core-headercfc6fd456ca2f3e9db06f780f412660f"
        },
        _a = e => {
          let {
            buttonText: a = null,
            gameOverrideStyles: t,
            navLinks: s,
            cta: r = "",
            game: i
          } = e;
          const [n, o] = (0, c.useState)(!1), d = (0, _.aU)(), {
            navHidden: l
          } = (0, _.oT)();
          return (0, c.useEffect)((() => {
            d({
              gameSiteNavOpen: n
            })
          }), [n]), (0, c.useEffect)((() => {
            const e = () => {
              o(!1)
            };
            return document.addEventListener("click", e), () => document.removeEventListener("click", e)
          }), []), (0, f.jsxs)("header", {
            "data-game": i,
            className: [pa.gameSiteHeader, n ? pa.headerNavOpen : "", l ? pa.navHidden : "", t.gameSiteHeader, n ? t.headerNavOpen : ""].join(" "),
            children: [(0, f.jsx)("button", {
              className: [pa.headerLogo, t.headerLogo].join(" "),
              onClick: e => {
                o(!n), e.nativeEvent.stopImmediatePropagation()
              },
              type: "button",
              "aria-label": "Open Game Site Nav",
              dangerouslySetInnerHTML: {
                __html: a
              }
            }), (0, f.jsx)("div", {
              className: pa.bg
            }), (0, f.jsx)("nav", {
              children: (0, f.jsx)("div", {
                className: pa.navContent,
                children: s
              })
            }), r]
          })
        };
      var ba = t(31403);
      class ha extends c.Component {
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
            className: "rockstargames-modules-core-headerf903c45f8ecc18bd55f702e202f3763a",
            children: [(0, f.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, f.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      const va = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return function(t) {
            return (0, f.jsx)(ha, {
              header: a,
              children: (0, f.jsx)(e, {
                ...t
              })
            })
          }
        },
        xa = e => {
          let {
            prevRef: a,
            nextRef: t,
            onNextClicked: s,
            onPrevClicked: r
          } = e;
          return (0, f.jsxs)("div", {
            className: "rockstargames-modules-core-headerd98f432655f19a842390597c4434db06",
            children: [(0, f.jsx)("div", {
              className: "rockstargames-modules-core-headerc06ca360ce11f2cef7baf8c5fba05a42",
              ref: a,
              onClick: r,
              "aria-label": "Previous",
              role: "button",
              tabIndex: 0,
              onKeyUp: () => {}
            }), (0, f.jsx)("div", {
              className: "rockstargames-modules-core-headera4f98606cdef508fbd2e69c5564a92d8",
              ref: t,
              onClick: s,
              "aria-label": "Next",
              role: "button",
              tabIndex: 0,
              onKeyUp: () => {}
            })]
          })
        },
        ya = va((e => {
          let {
            description: a,
            slideChildren: t,
            size: s,
            title: r,
            customSlidesPerView: i = null,
            customSpaceBetween: n = null,
            slideClass: o,
            style: d,
            className: l,
            cardSizeBreakpoints: m = {},
            customAspectRatio: u,
            titleBadge: g
          } = e;
          const {
            track: k
          } = (0, re.ye)(), p = (0, c.useRef)(null), _ = (0, c.useRef)(null), b = (0, c.useRef)(null), [h, v] = (0, c.useState)(null), [x, y] = (0, c.useState)(!1), [N, S] = (0, c.useState)(null), [w, j] = (0, c.useState)({}), [C, T] = (0, c.useState)(), {
            ref: M,
            inView: E
          } = (0, de.cD)({
            threshold: .6
          }), [L, V] = (0, c.useState)(!1), [D, P] = (0, c.useState)(null), [B, $] = (0, c.useState)(!1);
          (0, c.useEffect)((() => {
            const e = () => {
              $(window.innerWidth < 1024)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []);
          const z = {
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
          (0, c.useEffect)((() => {
            if (!p.current) return;
            const e = () => {
              if (p.current) {
                const e = i || Number(window.getComputedStyle(p.current).getPropertyValue("--slides-per-view")),
                  a = i ? 1 : Number(window.getComputedStyle(p.current).getPropertyValue("--slides-per-view-multiplier"));
                S(e * a)
              }
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [p, i]), (0, c.useEffect)((() => {
            if (!t) return;
            let e = !1;
            t.forEach((a => {
              "cover-card" === a?.props?.tina?.payload?.meta?.type && (e = !0, P(a))
            })), V(e);
            const a = t.map(((e, a) => "cover-card" === e?.props?.tina?.payload?.meta?.type && B ? null : (0, f.jsx)(Z.Ky, {
              className: "rockstargames-modules-core-headerf58e79e329504e170dc9cb4595ea011b",
              onFocus: () => O(a),
              children: e
            }, Symbol(a).toString())));
            v(a)
          }), [t, B]), (0, c.useEffect)((() => {
            T({
              nextEl: b.current,
              prevEl: _.current
            })
          }), [b, _]), (0, c.useEffect)((() => {
            E && !x && t && (k({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: `deck - ${r}`.toLowerCase(),
              element_placement: `deck - ${r}`.toLowerCase()
            }), y(!0))
          }), [E, t]);
          let F = "custom" === s ? {
            "--custom-aspect-ratio": u,
            ...d
          } : {
            ...d
          };
          const O = e => {
            w.slideTo(e)
          };
          return (0, f.jsxs)("div", {
            className: I("rockstargames-modules-core-headerd0c3d91603036c852633939015a6cb48", l),
            "data-size": s,
            "data-sm": m?.sm ? m?.sm : s,
            "data-md": m?.md ? m?.md : s,
            "data-lg": m?.lg ? m?.lg : s,
            "data-xl": m?.xl ? m?.xl : s,
            "data-xxl": m?.xxl ? m?.xxl : s,
            "data-has-covercard": L,
            ref: p,
            style: F,
            children: [(0, f.jsx)("div", {
              className: "rockstargames-modules-core-headerddeb75a59ed783554b94e8298897a1fa",
              ref: M
            }), L && B && (0, f.jsx)("div", {
              className: "rockstargames-modules-core-headerd5f00d41fdd2c864a0eb9e069cf08db0",
              children: D
            }), (0, f.jsx)("div", {
              className: "rockstargames-modules-core-headercdc60dbde3f8db6f466aba8a3e19fa96",
              children: (0, f.jsxs)("div", {
                className: "rockstargames-modules-core-headerfb8e207418c783fc2f53b44c19faedca",
                children: [(0, f.jsxs)("div", {
                  className: "rockstargames-modules-core-headerb779ba2045a88302079083935c90f7b3",
                  children: [!L && r && (0, f.jsxs)("div", {
                    className: "rockstargames-modules-core-headeredf90c7c5ee1c79049f5a6442f14c949",
                    children: [(0, f.jsx)("h2", {
                      children: r
                    }), g && (0, f.jsx)("span", {
                      className: "rockstargames-modules-core-headerd7a4aaeb70d68fdee39312192efb990b",
                      children: g
                    })]
                  }), (0, f.jsx)(xa, {
                    prevRef: _,
                    nextRef: b,
                    onNextClicked: () => {},
                    onPrevClicked: () => {}
                  })]
                }), a && (0, f.jsx)("div", {
                  className: "rockstargames-modules-core-headera1007d13e3a321bb18b5fc667025d545",
                  dangerouslySetInnerHTML: {
                    __html: a
                  }
                })]
              })
            }), N ? (0, f.jsx)(Z.wx, {
              slidesPerView: N,
              onInit: e => {
                j(e)
              },
              grabCursor: !0,
              navigation: C,
              modules: [ba._2],
              breakpoints: z,
              slideClass: I("swiper-slide", o),
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
              children: h
            }) : ""]
          })
        }), null),
        Na = {
          pillBtn: "rockstargames-modules-core-headerd008b074498ad02717806cc094b8a780",
          selected: "rockstargames-modules-core-headerbe9a2e37ec59e339b0d72cd8e5256703",
          hero: "rockstargames-modules-core-headerd1346f9b98fbaac26948e361bd98b4c6",
          images: "rockstargames-modules-core-headerc9c078a3102a96b26f1bf1f98306384f",
          background: "rockstargames-modules-core-headera271224ca2caf56b470059cdb98d9a42",
          gradient: "rockstargames-modules-core-headerae257e9d159ae9bd7c8685e38ba16f59",
          layered: "rockstargames-modules-core-headerf663886f051e47ea04f097c85ae6625b",
          content: "rockstargames-modules-core-headerf9c204f451f3a53bcc307c00eb5f907f",
          descriptions: "rockstargames-modules-core-headerd1bbf288f3fe6c79e658764847d2890a",
          buttonGroup: "rockstargames-modules-core-headerfb373367ffd03ba01edaf671175244ab",
          legalText: "rockstargames-modules-core-headerf625ffdd1b33a1642aa0dec12efe7897",
          shardsCarousel: "rockstargames-modules-core-headere999b9cecfe233bcee8cab8682fb96bf"
        },
        Sa = {
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
        wa = {
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
        ja = e => {
          let {
            title: a = "",
            mobileImg: t,
            desktopImg: s
          } = e;
          const r = B(t ?? null),
            i = B(s ?? r);
          return (0, f.jsx)("div", {
            className: Na.shard,
            style: {
              "--background-image-mobile": `url(${r})`,
              "--background-image-desktop": `url(${i})`
            },
            children: (0, f.jsx)("h5", {
              children: a
            })
          })
        },
        Ca = e => {
          let {
            title: a = "Membership Rewards",
            shards: t
          } = e;
          const [s, r] = (0, c.useState)(null);
          return (0, c.useEffect)((() => {
            t && r(t.reduce(((e, a) => {
              if (!a?.shardImg) return e;
              const {
                title: t,
                shardImg: s
              } = a, {
                mobile: r,
                desktop: i
              } = s;
              return e.push((0, f.jsx)(ja, {
                title: t,
                mobileImg: r?.full_src,
                desktopImg: i?.full_src
              })), e
            }), []))
          }), [t]), s ? (0, f.jsx)("div", {
            className: Na.shardsCarousel,
            children: (0, f.jsx)(ya, {
              title: a,
              slideChildren: s,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        Ia = e => {
          let {
            animated: a = !1,
            ctas: t = [],
            description: s,
            expandingButtonLabel: r = "Subscribe",
            title: i
          } = e;
          const [n, o] = (0, c.useState)([]), [d, l] = (0, c.useState)([]);
          return (0, c.useEffect)((() => {
            o(t.reduce(((e, a) => a.isInExpandingButton ? (e.push({
              href: a.href,
              platform: a.platform,
              buttonText: a.buttonText
            }), e) : e), [])), l(t.reduce(((e, a) => (a.isInExpandingButton || e.push({
              icon: a.platform ? a.platform : "",
              title: a.buttonText,
              to: a.href
            }), e)), []))
          }), t), t.length ? n.length ? (0, f.jsx)(ta.motion.div, {
            variants: a ? wa : void 0,
            children: (0, f.jsxs)(la, {
              buttonText: r,
              platformsAndLinks: n,
              children: [(0, f.jsxs)(ta.motion.div, {
                className: Na.descriptions,
                variants: a ? wa : void 0,
                children: [(0, f.jsx)("h2", {
                  dangerouslySetInnerHTML: {
                    __html: i
                  }
                }), (0, f.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: s
                  }
                })]
              }), !!d && !!d.length && (0, f.jsx)(ta.motion.div, {
                variants: wa,
                children: (0, f.jsx)(Y, {
                  buttons: d,
                  className: Na.buttonGroup
                })
              })]
            })
          }) : (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsxs)(ta.motion.div, {
              className: Na.descriptions,
              variants: a ? wa : void 0,
              children: [(0, f.jsx)("h2", {
                dangerouslySetInnerHTML: {
                  __html: i
                }
              }), (0, f.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: s
                }
              })]
            }), !!d && !!d.length && (0, f.jsx)(ta.motion.div, {
              variants: wa,
              children: (0, f.jsx)(Y, {
                buttons: d,
                className: Na.buttonGroup
              })
            })]
          }) : (0, f.jsxs)(ta.motion.div, {
            className: Na.descriptions,
            variants: a ? wa : void 0,
            children: [(0, f.jsx)("h2", {
              dangerouslySetInnerHTML: {
                __html: i
              }
            }), (0, f.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: s
              }
            })]
          })
        },
        Ta = e => {
          let {
            animated: a = !1,
            brands: t = [],
            ctas: s = [],
            description: r = "",
            expandingButtonLabel: i = "Subscribe",
            title: n = "",
            legalText: o
          } = e;
          return (0, f.jsxs)(ta.motion.div, {
            className: Na.content,
            initial: "hidden",
            animate: "visible",
            variants: a ? Sa : void 0,
            children: [(0, f.jsx)(ta.motion.div, {
              variants: a ? wa : void 0,
              children: (0, f.jsx)(w, {
                brands: t
              })
            }), (0, f.jsx)(Ia, {
              animated: a,
              ctas: s,
              description: r,
              expandingButtonLabel: i,
              title: n
            }), o && (0, f.jsx)(ta.motion.div, {
              className: Na.legalText,
              variants: a ? wa : void 0,
              children: (0, f.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: o
                }
              })
            })]
          })
        },
        Ma = e => {
          let {
            animated: a = !1,
            backgroundImage: t,
            brands: s = [],
            className: r,
            ctas: i = [],
            description: n = "",
            expandingButtonLabel: o = "Subscribe",
            layeredImage: c,
            layeredImageSettings: d,
            legalText: l,
            shardsSection: m = {},
            theme: u = "gen9",
            title: g = ""
          } = e;
          const k = (e => {
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
                const [s, r] = e;
                if (t.has(s)) {
                  const e = t.get(s);
                  Object.entries(r).forEach((r => {
                    const [i, n] = r;
                    if (t.has(s) && t.has(i)) {
                      const s = `${t.get(i)}${e}`;
                      a[s] = "imageWidth" !== i ? n ? `${n}px` : "0px" : n ? `${n}vw` : "100vw"
                    }
                  }))
                }
              })), a
            })(d),
            p = B(t?.mobile?.full_src ?? null),
            _ = B(t?.desktop?.full_src ?? p),
            b = B(c?.mobile?.full_src ?? null),
            h = B(c?.desktop?.full_src ?? b);
          return (0, f.jsxs)(ta.motion.div, {
            className: I(Na.hero, r),
            style: {
              "--background-image-desktop": `url(${_})`,
              "--background-image-mobile": `url(${p})`,
              "--layered-image-desktop": `url(${h})`,
              "--layered-image-mobile": `url(${b})`
            },
            initial: "hidden",
            animate: "visible",
            variants: a ? Sa : void 0,
            "data-type": "hero",
            theme: u,
            children: [(0, f.jsxs)("div", {
              className: Na.images,
              children: [_ && p ? (0, f.jsx)("div", {
                className: Na.background,
                style: t?.style ?? {}
              }) : "", b && h ? (0, f.jsx)("div", {
                className: Na.layered,
                style: d ? k : {}
              }) : "", (0, f.jsx)("div", {
                className: Na.gradient
              })]
            }), (0, f.jsx)(Ta, {
              animated: a,
              ctas: i,
              description: n,
              expandingButtonLabel: o,
              title: g,
              brands: s,
              legalText: l
            }), m?.shards && (0, f.jsx)(Ca, {
              ...m
            })]
          })
        },
        Ea = e => {
          let {
            children: a,
            attributes: t = {},
            className: s = "",
            style: r = {}
          } = e;
          return (0, f.jsx)("span", {
            className: I(s, t?.className, "rockstargames-modules-core-headera7f106a8036d74ed9282a741476c6b5a"),
            style: (0, T.G6)(r ?? t?.style ?? {}),
            dangerouslySetInnerHTML: {
              __html: z().unescape(a)
            }
          })
        };
      var La = t(53592);
      const Va = JSON.parse('{"us":{"aria_label_open_new_window":"(Opens in a new window)","plm_nav_scroll_left":"Scroll Left","plm_nav_scroll_right":"Scroll Right","language_selector_default":"Select a Language","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","sc_link_account":"Account","sc_link_activity_feed":"Activity Feed","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell My Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_messages":"Messages","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Toggle Social Club Menu","rp_icon":"RP Category","components_track_list_title":"Tracklist","disabled_label":"Disabled","next_button_label":"Next video page","previous_button_label":"Previous video page"},"de":{"aria_label_open_new_window":"(Öffnet ein neues Fenster)","plm_nav_scroll_left":"Links scrollen","plm_nav_scroll_right":"Rechts scrollen","language_selector_default":"Eine Sprache auswählen","profile_selector_mugshot":"Verbrecherfoto von {userName}","profile_selector_profile_card":"Profildaten","profile_selector_rp_icon":"RP-Kategorie","profile_selector_switch_character":"Charakter wechseln","sc_link_account":"Konto","sc_link_activity_feed":"Aktivitäten-Feed","sc_link_cookies_policy":"Cookie-Richtlinie","sc_link_cookies_settings":"Cookie-Einstellungen","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Meine Informationen nicht verkaufen","sc_link_find_friends":"Freunde finden","sc_link_friends":"Freunde","sc_link_game_activation":"Spielaktivierung","sc_link_help":"Hilfe","sc_link_import_friends":"Freunde importieren","sc_link_join_social_club":"Registrieren","sc_link_legal":"Rechtliches","sc_link_log_out":"Abmelden","sc_link_messages":"Nachrichten","sc_link_my_friends":"Meine Freunde","sc_link_notifications":"Benachrichtigungen","sc_link_privacy_policy":"Datenschutzrichtlinien","sc_link_settings":"Einstellungen","sc_link_sign_in":"Anmelden","sc_link_support":"Support","sc_link_view_my_profile":"Mein Profil ansehen","sc_menu_drag_handle":"Menü öffnen bzw. schließen","sc_menu_toggle":"Social-Club-Menü öffnen bzw. schließen","components_track_list_title":"Trackliste","disabled_label":"Deaktiviert","next_button_label":"Nächste Videoseite","previous_button_label":"Vorherige Videoseite"},"es":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","plm_nav_scroll_left":"Desplazar hacia la izquierda","plm_nav_scroll_right":"Desplazar hacia la derecha","language_selector_default":"Selecciona un idioma","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta de perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Ajustes de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendáis mis datos","sc_link_find_friends":"Buscar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación del juego","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registrarse","sc_link_legal":"Aviso legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Ajustes","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Asistencia técnica","sc_link_view_my_profile":"Ver mi perfil","sc_menu_drag_handle":"Arrastrar el controlador del menú","sc_menu_toggle":"Cambiar el menú del Social Club","components_track_list_title":"Lista de pistas","disabled_label":"Desactivado","next_button_label":"Página de vídeo siguiente","previous_button_label":"Página de vídeo anterior"},"mx":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","plm_nav_scroll_left":"Desplazarse hacia la izquierda","plm_nav_scroll_right":"Desplazarse hacia la derecha","language_selector_default":"Seleccionar un idioma","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta del perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Muro de actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configuración de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendan mis datos","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación de juegos","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registro","sc_link_legal":"Legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Configuración","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Soporte","sc_link_view_my_profile":"Ver mi perfil","sc_menu_drag_handle":"Mover el handle del menú","sc_menu_toggle":"Cambiar menú del Social Club","components_track_list_title":"Lista de canciones","disabled_label":"Desactivado","next_button_label":"Página de video siguiente","previous_button_label":"Página de video anterior"},"fr":{"aria_label_open_new_window":"(S’ouvre dans une nouvelle fenêtre)","plm_nav_scroll_left":"Faire défiler vers la gauche","plm_nav_scroll_right":"Faire défiler vers la droite","language_selector_default":"Sélectionner une langue","profile_selector_mugshot":"Photo d\'identité : {userName}","profile_selector_profile_card":"Carte du profil","profile_selector_rp_icon":"Catégorie de RP","profile_selector_switch_character":"Changer de personnage","sc_link_account":"Compte","sc_link_activity_feed":"Fil d\'activités","sc_link_cookies_policy":"Politique en matière de cookies","sc_link_cookies_settings":"Paramètres des cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Ne pas vendre mes informations","sc_link_find_friends":"Trouver des amis","sc_link_friends":"Amis","sc_link_game_activation":"Activation de jeux","sc_link_help":"Aide","sc_link_import_friends":"Importer des amis","sc_link_join_social_club":"S’inscrire","sc_link_legal":"Mentions légales","sc_link_log_out":"Se déconnecter","sc_link_messages":"Messages","sc_link_my_friends":"Mes amis","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Charte de confidentialité","sc_link_settings":"Paramètres","sc_link_sign_in":"Se connecter","sc_link_support":"Assistance","sc_link_view_my_profile":"Voir mon profil","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Afficher le menu du Social Club","components_track_list_title":"Liste des morceaux","disabled_label":"Désactivé","next_button_label":"Page vidéo suivante","previous_button_label":"Page vidéo précédente"},"it":{"aria_label_open_new_window":"(Apri in una nuova finestra)","plm_nav_scroll_left":"Scorri a sinistra","plm_nav_scroll_right":"Scorri a destra","language_selector_default":"Seleziona una lingua","profile_selector_mugshot":"Foto segnaletica di {userName}","profile_selector_profile_card":"Scheda del profilo","profile_selector_rp_icon":"Categoria RP","profile_selector_switch_character":"Cambia personaggio","sc_link_account":"Account","sc_link_activity_feed":"Feed attività","sc_link_cookies_policy":"Politica sui cookie","sc_link_cookies_settings":"Impostazioni dei cookie","sc_link_crews":"Crew","sc_link_do_not_sell_my_information":"Non vendere le mie informazioni","sc_link_find_friends":"Trova amici","sc_link_friends":"Amici","sc_link_game_activation":"Attivazione gioco","sc_link_help":"Assistenza","sc_link_import_friends":"Importa amici","sc_link_join_social_club":"Registrati","sc_link_legal":"Note legali","sc_link_log_out":"Esci","sc_link_messages":"Messaggi","sc_link_my_friends":"I miei amici","sc_link_notifications":"Notifiche","sc_link_privacy_policy":"Politica sulla privacy","sc_link_settings":"Impostazioni","sc_link_sign_in":"Accedi","sc_link_support":"Supporto","sc_link_view_my_profile":"Visualizza il mio profilo","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Apri/chiudi il menu del Social Club","components_track_list_title":"Tracklist","disabled_label":"Disabilitato","next_button_label":"Pagina di video successiva","previous_button_label":"Pagina di video precedente"},"jp":{"aria_label_open_new_window":"(新しいウィンドウで開きます)","plm_nav_scroll_left":"左にスクロール","plm_nav_scroll_right":"右にスクロール","language_selector_default":"言語を選択","profile_selector_mugshot":"{ユーザーネーム}顔写真","profile_selector_profile_card":"プロフィールカード","profile_selector_rp_icon":"RPカテゴリー","profile_selector_switch_character":"キャラクター変更","sc_link_account":"アカウント","sc_link_activity_feed":"アクティビティフィード","sc_link_cookies_policy":"クッキーポリシー","sc_link_cookies_settings":"クッキー設定","sc_link_crews":"クルー","sc_link_do_not_sell_my_information":"個人情報を売らないでください","sc_link_find_friends":"フレンドを検索","sc_link_friends":"フレンド","sc_link_game_activation":"ゲームアクティベーション","sc_link_help":"ヘルプ","sc_link_import_friends":"フレンドをインポート","sc_link_join_social_club":"サインアップ","sc_link_legal":"利用規約","sc_link_log_out":"ログアウト","sc_link_messages":"メッセージ","sc_link_my_friends":"フレンド","sc_link_notifications":"通知","sc_link_privacy_policy":"プライバシーポリシー","sc_link_settings":"設定","sc_link_sign_in":"サインイン","sc_link_support":"サポート","sc_link_view_my_profile":"プロフィールを表示","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Social Clubメニューを切り替え","components_track_list_title":"トラックリスト","disabled_label":"無効","next_button_label":"次のビデオページ","previous_button_label":"前のビデオページ"},"kr":{"aria_label_open_new_window":"(새 창에서 열기)","plm_nav_scroll_left":"왼쪽 스크롤","plm_nav_scroll_right":"오른쪽 스크롤","language_selector_default":"언어 선택","profile_selector_mugshot":"{userName} 머그샷","profile_selector_profile_card":"프로필 카드","profile_selector_rp_icon":"RP 카테고리","profile_selector_switch_character":"캐릭터 교체","sc_link_account":"계정","sc_link_activity_feed":"활동 피드","sc_link_cookies_policy":"쿠키 정책","sc_link_cookies_settings":"쿠키 설정","sc_link_crews":"조직","sc_link_do_not_sell_my_information":"내 정보 판매 안 함","sc_link_find_friends":"친구 찾기","sc_link_friends":"친구","sc_link_game_activation":"게임 활성화","sc_link_help":"도움말","sc_link_import_friends":"친구 불러오기","sc_link_join_social_club":"가입","sc_link_legal":"법률 관련","sc_link_log_out":"로그아웃","sc_link_messages":"메시지","sc_link_my_friends":"내 친구","sc_link_notifications":"알림","sc_link_privacy_policy":"개인 정보 보호 정책","sc_link_settings":"설정","sc_link_sign_in":"로그인","sc_link_support":"지원","sc_link_view_my_profile":"내 프로필 보기","sc_menu_drag_handle":"드래그 메뉴 핸들","sc_menu_toggle":"Social Club 메뉴 켜기/끄기","components_track_list_title":"트랙리스트","disabled_label":"비활성화됨","next_button_label":"다음 비디오 페이지","previous_button_label":"이전 비디오 페이지"},"pl":{"aria_label_open_new_window":"(Otwórz w nowym oknie)","plm_nav_scroll_left":"Przesuń w lewo","plm_nav_scroll_right":"Przesuń w prawo","language_selector_default":"Wybierz język","profile_selector_mugshot":"Zdjęcie – {userName}","profile_selector_profile_card":"Karta profilu","profile_selector_rp_icon":"Poziom RP","profile_selector_switch_character":"Zmień postać","sc_link_account":"Konto","sc_link_activity_feed":"Zajęcia","sc_link_cookies_policy":"Polityka plików cookie","sc_link_cookies_settings":"Ustawienia plików cookie","sc_link_crews":"Ekipy","sc_link_do_not_sell_my_information":"Zabraniam sprzedaży moich danych","sc_link_find_friends":"Szukaj znajomych","sc_link_friends":"Znajomi","sc_link_game_activation":"Aktywacja gry","sc_link_help":"Pomoc","sc_link_import_friends":"Importuj znajomych","sc_link_join_social_club":"Zarejestruj się","sc_link_legal":"Informacje prawne","sc_link_log_out":"Wyloguj się","sc_link_messages":"Wiadomości","sc_link_my_friends":"Moi znajomi","sc_link_notifications":"Powiadomienia","sc_link_privacy_policy":"Polityka prywatności","sc_link_settings":"Ustawienia","sc_link_sign_in":"Zaloguj się","sc_link_support":"Wsparcie","sc_link_view_my_profile":"Przeglądaj profil","sc_menu_drag_handle":"Przeciągnij uchwyt menu","sc_menu_toggle":"Włącz lub wyłącz menu Social Club","components_track_list_title":"Lista utworów","disabled_label":"Wyłączone","next_button_label":"Następna strona z filmami","previous_button_label":"Poprzednia strona z filmami"},"br":{"aria_label_open_new_window":"(Abre em uma nova janela)","plm_nav_scroll_left":"Rolar para a esquerda","plm_nav_scroll_right":"Rolar para a direita","language_selector_default":"Selecione um idioma","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Cartão de perfil","profile_selector_rp_icon":"Categoria de RP","profile_selector_switch_character":"Alternar personagem","sc_link_account":"Conta","sc_link_activity_feed":"Feed de atividade","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configurações de cookies","sc_link_crews":"Comandos","sc_link_do_not_sell_my_information":"Não vendam a minha informação","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Ativação de jogos","sc_link_help":"Ajuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Inscrever-se","sc_link_legal":"Aviso legal","sc_link_log_out":"Sair","sc_link_messages":"Mensagens","sc_link_my_friends":"Meus amigos","sc_link_notifications":"Notificações","sc_link_privacy_policy":"Política de Privacidade","sc_link_settings":"Configurações","sc_link_sign_in":"Iniciar sessão","sc_link_support":"Suporte","sc_link_view_my_profile":"Visualizar meu perfil","sc_menu_drag_handle":"Arrastar título do menu","sc_menu_toggle":"Alternar menu do Social Club","components_track_list_title":"Lista de faixas","disabled_label":"Desabilitado","next_button_label":"Próxima página de vídeos","previous_button_label":"Página anterior de vídeos"},"ru":{"aria_label_open_new_window":"(ссылка откроется в новом окне)","plm_nav_scroll_left":"Пролистать влево","plm_nav_scroll_right":"Пролистать вправо","language_selector_default":"Выбрать язык","profile_selector_mugshot":"Фотография игрока {userName}","profile_selector_profile_card":"Карта профиля","profile_selector_rp_icon":"Категория опыта","profile_selector_switch_character":"Сменить персонажа","sc_link_account":"Учетная запись","sc_link_activity_feed":"Лента событий","sc_link_cookies_policy":"Политика использования файлов Cookie","sc_link_cookies_settings":"Настройки файлов Cookie","sc_link_crews":"Банды","sc_link_do_not_sell_my_information":"Я запрещаю продавать свою личную информацию","sc_link_find_friends":"Поиск друзей","sc_link_friends":"Друзья","sc_link_game_activation":"Активация игры","sc_link_help":"Помощь","sc_link_import_friends":"Импорт друзей","sc_link_join_social_club":"Регистрация","sc_link_legal":"Юридическая информация","sc_link_log_out":"Выход","sc_link_messages":"Сообщения","sc_link_my_friends":"Мои друзья","sc_link_notifications":"Уведомления","sc_link_privacy_policy":"Политика конфиденциальности","sc_link_settings":"Настройки","sc_link_sign_in":"Войти","sc_link_support":"Поддержка","sc_link_view_my_profile":"Моя учетная запись","sc_menu_drag_handle":"Перенести маркер меню","sc_menu_toggle":"Переключить меню Social Club","components_track_list_title":"Список песен","disabled_label":"Отключено","next_button_label":"Следующая страница с видео","previous_button_label":"Предыдущая страница с видео"},"hans":{"aria_label_open_new_window":"（在新窗口中打开）","plm_nav_scroll_left":"向左滚动","plm_nav_scroll_right":"向右滚动","language_selector_default":"选择一种语言","profile_selector_mugshot":"{userName} 面部照片","profile_selector_profile_card":"档案卡","profile_selector_rp_icon":"声望值类别","profile_selector_switch_character":"切换角色","sc_link_account":"账户","sc_link_activity_feed":"活动动态","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 设置","sc_link_crews":"帮会","sc_link_do_not_sell_my_information":"请勿出售我的信息","sc_link_find_friends":"查找好友","sc_link_friends":"好友","sc_link_game_activation":"游戏激活","sc_link_help":"帮助","sc_link_import_friends":"导入好友","sc_link_join_social_club":"注册","sc_link_legal":"法律声明","sc_link_log_out":"登出","sc_link_messages":"信息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隐私政策","sc_link_settings":"设置","sc_link_sign_in":"登录","sc_link_support":"支持","sc_link_view_my_profile":"查看我的档案","sc_menu_drag_handle":"拖动菜单处理","sc_menu_toggle":"切换 Social Club 菜单","components_track_list_title":"曲目列表","disabled_label":"已禁用","next_button_label":"下一页视频","previous_button_label":"上一页视频"},"tw":{"aria_label_open_new_window":"（在新視窗開啟）","plm_nav_scroll_left":"向左捲動","plm_nav_scroll_right":"向右捲動","language_selector_default":"選擇語言","profile_selector_mugshot":"{userName} 罪犯檔案照","profile_selector_profile_card":"資料卡","profile_selector_rp_icon":"聲望值類別","profile_selector_switch_character":"切換角色","sc_link_account":"帳戶","sc_link_activity_feed":"動態活動","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 設定","sc_link_crews":"幫會","sc_link_do_not_sell_my_information":"不要販售我的個人資料","sc_link_find_friends":"尋找好友","sc_link_friends":"好友","sc_link_game_activation":"遊戲啟用","sc_link_help":"幫助","sc_link_import_friends":"匯入好友","sc_link_join_social_club":"註冊","sc_link_legal":"法律聲明","sc_link_log_out":"登出","sc_link_messages":"訊息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隱私權政策","sc_link_settings":"設定","sc_link_sign_in":"登入","sc_link_support":"支援","sc_link_view_my_profile":"查看我的設定檔","sc_menu_drag_handle":"拖曳選單控點","sc_menu_toggle":"開關 Social Club 選單","components_track_list_title":"曲目清單","disabled_label":"停用","next_button_label":"下一個影片頁面","previous_button_label":"上一個影片頁面"}}'),
        Da = (0, d.defineMessages)({
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          }
        }),
        Pa = {
          pillBtn: "rockstargames-modules-core-headercb792ef8796eaa09f8b5c1ee0230fcd7",
          selected: "rockstargames-modules-core-headerc951b9f5173e8a37be389854c40995ee",
          scMenuStyles: "rockstargames-modules-core-headerfa91a55e22ad688cba0bc1210eaf4726",
          languageSelector: "rockstargames-modules-core-headerb631f2ce92e4a89f8eddebd32e8ed30a",
          open: "rockstargames-modules-core-headeredc598921a872174190475d0ad016d15",
          linkWrapper: "rockstargames-modules-core-headerc4b7087d1fcbaad6967e61b84160ff79",
          links: "rockstargames-modules-core-headerc7d345d5c7e567e0ee75b792d5bdfb88",
          selectBoxWrapper: "rockstargames-modules-core-headere3e55a10507405de05ae92006ec0d02b",
          selectBox: "rockstargames-modules-core-headerc646a2bff16ec3003b027857488cd612",
          selectBoxOption: "rockstargames-modules-core-headerbcccd1077d13d7fe1585655e5c5f8363"
        },
        Ba = (0, d.withIntl)((e => {
          let {
            theme: a,
            languageSelectorOpened: t,
            setLanguageSelectorOpened: s
          } = e;
          const r = (0, m.useLocation)(),
            i = (0, d.useIntl)(),
            [n, o] = (0, d.getLocale)(),
            [l, u] = (0, c.useState)(!1),
            k = (0, c.useMemo)((() => (0, La.c)()), []),
            p = (0, c.useCallback)((e => {
              let a = r.pathname;
              const t = a.split("/");
              return d.locales.map((e => e.subdomaincom)).includes(t[0]) && (a = t.slice(1).join("/")), k.currentSite?.site === La.U.www ? "en" === e ? `${window.location.origin}${a}${r.search}` : `${window.location.origin}/${e}${a}${r.search}` : `${window.location.origin}${a}${r.search}`
            }), [r]),
            _ = (0, c.useRef)(null),
            [b, h] = (0, c.useState)(0),
            v = matchMedia("(hover: none) and (pointer: coarse)").matches,
            x = e => {
              if (s && s(!1), n.subdomaincom === e || "none" === e) return void(s && s(!1));
              const a = d.locales.find((a => a.subdomaincom === e));
              a && (o(a.iso), window.location.href = p(e))
            };
          return (0, c.useEffect)((() => {
            void 0 !== t && !1 === t && !0 === l && u(!1)
          }), [t]), (0, c.useEffect)((() => {
            _.current && h(_.current.scrollHeight)
          }), [_]), (0, f.jsxs)("div", {
            className: [Pa.languageSelector, l ? Pa.open : ""].join(" "),
            "data-theme": a,
            children: [v && "sc-menu" === a && (0, f.jsx)("div", {
              className: Pa.selectBoxWrapper,
              children: (0, f.jsxs)("select", {
                className: Pa.selectBox,
                onClick: e => e.stopPropagation(),
                onChange: e => {
                  x(e.currentTarget.value)
                },
                "aria-label": i.formatMessage(Da.language_selector_default),
                children: [(0, f.jsx)("option", {
                  className: Pa.selectBoxOption,
                  value: "none",
                  children: (0, f.jsx)(d.FormattedMessage, {
                    ...Da.language_selector_default
                  })
                }), d.locales.map((e => {
                  let {
                    label: a,
                    subdomaincom: t
                  } = e;
                  return (0, f.jsx)("option", {
                    className: Pa.selectBoxOption,
                    value: t,
                    children: a
                  }, `mobile-${t}`)
                }))]
              })
            }), (!v || "sc-menu" !== a) && (0, f.jsxs)(f.Fragment, {
              children: [(0, f.jsxs)("button", {
                onClick: e => {
                  e.stopPropagation(), s && s(!l), u(!l)
                },
                type: "button",
                "aria-label": i.formatMessage(Da.language_selector_default),
                children: [(0, f.jsx)("i", {}), (0, f.jsx)("span", {
                  children: (0, f.jsx)(d.FormattedMessage, {
                    ...Da.language_selector_default
                  })
                })]
              }), (0, f.jsx)("div", {
                className: Pa.linkWrapper,
                ref: _,
                style: {
                  "--ls-linkWrapper-opened-height": `${b}px`
                },
                children: (0, f.jsx)("div", {
                  className: Pa.links,
                  children: d.locales.map((e => {
                    let {
                      subdomaincom: a,
                      label: t
                    } = e;
                    return (0, f.jsx)(g, {
                      to: p(a),
                      onClick: () => {
                        x(a)
                      },
                      tabIndex: l ? 0 : -1,
                      children: t
                    }, `desktop-${a}`)
                  }))
                })
              })]
            })]
          })
        }), Va),
        $a = {
          layeredImage: "rockstargames-modules-core-headera29c233d553c5905763bb69412c1ece4",
          layersWrapper: "rockstargames-modules-core-headeraabf78eb3e1fe545556ad0fa5639296e",
          "hero-lg": "rockstargames-modules-core-headerca666917bdeaed43fd0a7af7dc30a0f7",
          "hero-md": "rockstargames-modules-core-headerf0a202fcbf13f1e91157e531ae829ea3",
          "hero-sm": "rockstargames-modules-core-headere03dbf5d16aeab81ca65f4cb7e64446f",
          contain: "rockstargames-modules-core-headerc4c3c929b11e88540e3f19d5715393ec",
          cover: "rockstargames-modules-core-headerb283d6381c82abf4dde21c57b8fc5f66",
          fill: "rockstargames-modules-core-headere9d16b94c1ed476c9346cb6f48f5ad3e",
          "bg-img": "rockstargames-modules-core-headere45fabf9c4e04bf3ee27e9c84c50c09b",
          imageLayer: "rockstargames-modules-core-headered8d0ad18a62f087629ff5831fa0ac55",
          "layer-lg-height": "rockstargames-modules-core-headerfaf1d5c6b2fe2ad27d4bb95ba7388f3d",
          "layer-md-height": "rockstargames-modules-core-headerb41041f11a5ef98325948acc3dec956c",
          "layer-sm-height": "rockstargames-modules-core-headerba7d5822aa073c9e01cd682d65c18944",
          "layer-xl-height": "rockstargames-modules-core-headerec2399a1f7e79e9aacba81b242ad0602",
          "layer-xs-height": "rockstargames-modules-core-headera6ec38ac99c762fcf0dd99aa2ced8f2b",
          "layer-xxl-height": "rockstargames-modules-core-headerd7c1314e717273dfbb2acd3d5e06e585",
          "layer-lg-width": "rockstargames-modules-core-headerca0dd7a55a5db5ee358ce51a166e5431",
          "layer-md-width": "rockstargames-modules-core-headerbd4c246f4f0eaf7173d104ed1e7c2d06",
          "layer-sm-width": "rockstargames-modules-core-headerfe3f49cba9cc10e4e076a43a6b36b862",
          "layer-xl-width": "rockstargames-modules-core-headerbde3d6485ac7bb483dcca1ad4e2bbe67",
          "layer-xs-width": "rockstargames-modules-core-headerb87efd95b330cacd4a5eaecf83528f4d",
          "layer-xxl-width": "rockstargames-modules-core-headerac872df7985f9d591c85f97c72d451dc",
          "bottom-y": "rockstargames-modules-core-headerd63fdb49c964c28c5e8952cd79a393a0",
          "center-x": "rockstargames-modules-core-headerd248443eb924360a5d1d7211094ea827",
          "center-y": "rockstargames-modules-core-headera8d87c765a51d98f0e3a9afd149ed0dc",
          "left-x": "rockstargames-modules-core-headerdcaa6339b43850be2e14967cab730041",
          "right-x": "rockstargames-modules-core-headerb656d800e3d134bd3a7e273a5f6d7ae6",
          "top-y": "rockstargames-modules-core-headeradaf230f139f906eb912b58b315406ac",
          border: "rockstargames-modules-core-headerc73e199a8978fb80895753c9a38fcdff",
          shards: "rockstargames-modules-core-headere650a715d6f220ad49bb568768154b0e",
          shards_three: "rockstargames-modules-core-headerb0c8be28788c6b23cea904bdc60d7e07",
          shards_two: "rockstargames-modules-core-headere41252d3a0aee1d229f6bddc20c38d47",
          dual: "rockstargames-modules-core-headerdb575e1d021e69ebb4265a29484e2888"
        },
        za = e => {
          let {
            style: a,
            className: t
          } = e;
          const s = {
              ...a
            },
            r = a["--border-image-source"];
          return r && (s["--border-image-source"] = `url(${B(r)})`), (0, f.jsx)("div", {
            className: I($a.border, t),
            style: {
              ...s
            }
          })
        },
        Fa = e => e?.images ? (0, f.jsx)("div", {
          className: I($a.layeredImage, $a[e?.variantClass], $a[e?.wrapperSizeClass]),
          style: {
            ...e?.style ?? {}
          },
          children: (0, f.jsxs)("div", {
            className: $a.layersWrapper,
            children: [e?.images?.map(((e, a) => {
              const {
                image: t,
                paddingClass: s,
                imageSizeClass: r,
                objectFitClass: i,
                positionClassX: n,
                positionClassY: o,
                zIndex: c,
                className: d,
                style: l,
                alt: m,
                displayClass: u
              } = e;
              return (0, f.jsx)(Ee, {
                image: t,
                style: {
                  zIndex: c ?? ++a
                },
                imageStyle: l,
                className: I(d, u, $a.imageLayer, $a[s], $a[r], $a[i], $a[n], $a[o]),
                alt: m
              }, c ?? ++a)
            })), e?.borderImage && (0, f.jsx)(za, {
              style: e?.borderImage,
              className: e?.borderImage?.displayClass
            })]
          })
        }) : null,
        Oa = e => {
          let {
            hero: a,
            children: t
          } = e;
          return a ? (0, f.jsx)("div", {
            className: "rockstargames-modules-core-headerefc561ad30f5dfe75c79d939737650dc",
            children: t
          }) : t
        },
        Aa = e => {
          let {
            badge: a = null,
            badgeType: t,
            discountTxt: s,
            splitter: r,
            image: i,
            style: n,
            className: o = "",
            attributes: c = {},
            role: d,
            hero: l = !1
          } = e;
          return (0, f.jsx)(Oa, {
            hero: l,
            children: (0, f.jsx)("figure", {
              children: (0, f.jsxs)("div", {
                className: I("rockstargames-modules-core-headercab262c98c7f5bb3e982d9b075b3c2a8", l ? "rockstargames-modules-core-headercefd6d8859aeec1057caed28caa160c3" : "", c?.hiddenMobile ? "hiddenMobile" : "", c?.hiddenLarge ? "hiddenLarge" : "", c?.className, o),
                style: (0, T.G6)({
                  ...n,
                  ...c?.style
                }),
                ...c,
                children: [(0, f.jsx)(Ee, {
                  image: i,
                  className: o
                }), (i?.badge || i?.discountTxt || a || s) && (0, f.jsx)(We, {
                  badge: i?.discountTxt ?? i?.badge ?? a ?? s,
                  badgeType: t,
                  splitter: i?.splitter ?? r,
                  role: i?.role ?? d
                }), i?.caption && (0, f.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: i.caption
                  }
                })]
              })
            })
          })
        },
        Ua = {
          pillBtn: "rockstargames-modules-core-headereea0db67b0aabf28288b288845324afe",
          selected: "rockstargames-modules-core-headerd1d25362fd730ca979d5ad79de088f89",
          multiSourceContainer: "rockstargames-modules-core-headerdc538bbfc2f407ed9fe840097ccac819",
          multiSourceImage: "rockstargames-modules-core-headeree782a29692a8eb06db1287a4984c243",
          animatePlaceholder: "rockstargames-modules-core-headerfbd73f5f70c2ce64aa9c9bd398f1a3b5",
          "loader-keyframes": "rockstargames-modules-core-headerf6040b2ae96a9b0dcdb2d283c9caff59"
        },
        Ra = e => {
          let {
            imageUrl: a,
            className: t,
            alt: s,
            style: r,
            lazy: i = !1,
            decoding: n = "auto",
            sizes: o = [320, 480, 768, 1024, 1440, 1920, 2560]
          } = e;
          const [d, l] = (0, c.useState)(!1);
          return (0, f.jsxs)("div", {
            className: Ua.multiSourceContainer,
            children: [!d && (0, f.jsx)("img", {
              className: [t, Ua.animatePlaceholder].join(" "),
              src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjMzMzMzMzIi8+Cjwvc3ZnPgo=",
              sizes: "(max-width: 1024px) 100vw, 1024px",
              alt: "Loading...",
              style: r
            }), (0, f.jsx)("img", {
              className: [Ua.multiSourceImage, t].join(" "),
              src: `${a}?im=Resize=1920`,
              srcSet: (m = a, o.map((e => `${m}?im=Resize=${e} ${e}w`)).join(", ")),
              sizes: "(max-width: 400px) 200px, (max-width: 1920px) 100vw, 1920px",
              alt: s ?? "Multi-Source Image",
              style: r,
              onLoad: () => {
                l(!0)
              },
              loading: i ? "lazy" : "eager",
              decoding: n
            })]
          });
          var m
        },
        Ha = {
          tag: "rockstargames-modules-core-headered77774d2704bc0ebc0ac156542ae053"
        },
        Ga = e => {
          let {
            className: a,
            href: t,
            title: s,
            style: r
          } = e;
          const i = (0, f.jsxs)("div", {
            style: r,
            className: [Ha.tag, a].join(" "),
            children: [(0, f.jsx)("i", {}), s]
          });
          return void 0 !== t ? (0, f.jsx)(g, {
            to: t,
            children: i
          }) : i
        },
        Wa = {
          newswireBlock: "rockstargames-modules-core-headera793f470884d207243d6c3caac8ad811",
          info: "rockstargames-modules-core-headerd50f6d2bc5f983c05311292acb4c78a5",
          title: "rockstargames-modules-core-headercc389449dc1495fc9c323fc2c547857d",
          newswireBlockNoSpecialOrder: "rockstargames-modules-core-headerffd167124f27c8e26a147f49c88796e5",
          preview: "rockstargames-modules-core-headerbbfbcf32c8c892ea29f4178949643475",
          previewMobile: "rockstargames-modules-core-headerf88852766488b21a28c42d230ea529a1",
          top: "rockstargames-modules-core-headerfa1a6f4c7d94b94f5af2dc1ac9af79f1",
          startAnimation: "rockstargames-modules-core-headere380e8c67066df6f33fc018341ea96e5"
        },
        qa = e => {
          let {
            index: a,
            post: t,
            noSpecialOrder: s = !1,
            style: r = {}
          } = e;
          const [i] = (0, m.useSearchParams)(), n = t.preview_images_parsed.newswire_block, o = {
            default: 0 !== a || s ? n.square || n.d16x9 || n._fallback : n.d16x9 || n.square || n._fallback,
            mobile: n.square || n._fallback
          }, [c, d] = (0, T.kJ)(o.default), [l, u] = (0, T.kJ)(o.mobile), k = {
            default: {
              backgroundImage: `url(${o.default})`
            },
            mobile: {
              backgroundImage: `url(${o.mobile})`
            }
          };
          return (0, f.jsx)(g, {
            "data-gtm-category": "Newswire",
            "data-gtm-action": "Article Block Click",
            "data-gtm-label": `${t.title}`,
            to: t.url,
            className: [Wa.newswireBlock, s ? Wa.newswireBlockNoSpecialOrder : "", null !== c ? Wa.startAnimation : ""].join(" "),
            children: (0, f.jsxs)(f.Fragment, {
              children: [0 !== a || i.get("tag_id") ? (0, f.jsx)("div", {
                className: Wa.preview,
                style: k.default
              }) : (0, f.jsxs)(f.Fragment, {
                children: [(0, f.jsx)("div", {
                  className: Wa.previewMobile,
                  style: k.mobile
                }), (0, f.jsx)("div", {
                  className: Wa.preview,
                  style: k.default
                })]
              }), (0, f.jsxs)("div", {
                className: Wa.info,
                children: [(0, f.jsxs)("div", {
                  className: Wa.top,
                  children: [t.primary_tags.length ? (0, f.jsx)(Ga, {
                    title: t.primary_tags[t.primary_tags.length > 1 && 722 === t.primary_tags[0].id ? 1 : 0].name
                  }) : "", (0, f.jsx)("time", {
                    dateTime: t.created,
                    children: t.created_formatted
                  })]
                }), (0, f.jsx)("h5", {
                  className: Wa.title,
                  dangerouslySetInnerHTML: {
                    __html: t.title
                  }
                })]
              })]
            })
          })
        };
      var Ja = t(55492),
        Xa = t.n(Ja);
      const Ka = (0, T.Ux)((e => {
          let {
            relativeTo: a = "",
            tagId: t = null,
            metaUrl: s = "/newswire",
            t: r
          } = e;
          const [i] = (0, m.useSearchParams)(), {
            tagId: n = null
          } = (0, m.useParams)(), [o, d] = (0, c.useState)(n ?? t ?? i.get("tag_id")), [l, u] = (0, c.useState)(1), [g, k] = (0, c.useState)([]), [p, b] = (0, c.useState)(null), {
            data: h
          } = (0, _.UL)(Xa(), {
            variables: {
              tagId: Number(o),
              page: l,
              metaUrl: s
            },
            autoSetLoading: !0
          });
          return (0, c.useEffect)((() => {
            u(1), k([]), d(n ?? t ?? i.get("tag_id"))
          }), [i.get("tag_id")]), (0, c.useEffect)((() => {
            h && h.posts && h.posts.paging && b(h.posts.paging), h && h.posts && h.posts.results && k(g.concat(h.posts.results))
          }), [h]), g.length ? (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsx)(et, {
              posts: g,
              relativeTo: a,
              noSpecialOrder: null !== o
            }), null !== p && p.nextPage ? (0, f.jsx)(C, {
              onClick: () => u(l + 1),
              disabled: !1,
              context: "secondary",
              children: r("More Stories")
            }) : ""]
          }) : null
        })),
        Qa = {
          pillBtn: "rockstargames-modules-core-headerafd0af959edb4a463c41ad4e9cc5dadc",
          selected: "rockstargames-modules-core-headerbcd59aa4a9e88d86a2cbe8d4972f8f51",
          related: "rockstargames-modules-core-headera748ad776070dab831edc1f67f66af08",
          posts: "rockstargames-modules-core-headerc0aa38678decd13ca38886b4547efedd",
          just1post: "rockstargames-modules-core-headerb1a31ddf7fd4458ee860d354a6a0ac92"
        },
        Ya = (0, T.Ux)((e => {
          let {
            posts: a,
            t
          } = e;
          return (0, f.jsxs)("section", {
            className: Qa.related,
            children: [(0, f.jsx)("h2", {
              children: t("Related Stories")
            }), (0, f.jsx)("div", {
              className: [Qa.posts, 1 === a.length ? Qa.just1post : ""].join(" "),
              children: a.map((e => (0, f.jsx)(qa, {
                noSpecialOrder: !0,
                post: e
              }, e.id)))
            })]
          })
        })),
        Za = {
          newswireBlocks: "rockstargames-modules-core-headerc2c8eedd25de7e186655f98b2a8d8960",
          noSpecialOrder: "rockstargames-modules-core-headerc0d0db9dfc71c9f4f959b9c017b1ae4b"
        },
        et = (0, T.S6)((e => {
          let {
            noSpecialOrder: a = !1,
            posts: t,
            gtmTrack: s,
            relativeTo: r
          } = e;
          return (0, c.useEffect)((() => {
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
            className: [Za.newswireBlocks, a ? Za.noSpecialOrder : "", Za.contextHome].join(" "),
            children: t.map(((e, t) => (0, f.jsx)(qa, {
              index: t,
              noSpecialOrder: a,
              post: e
            }, e.id)))
          })
        })),
        at = {
          pillBtn: "rockstargames-modules-core-headerf87ac9a7d56545847cf4d8ca471b03e6",
          selected: "rockstargames-modules-core-headera8ea61e57fd58bfcb99aef7e6d687045",
          grid: "rockstargames-modules-core-headera57241f29873f89f89ab8b27994e71c3",
          itemList: "rockstargames-modules-core-headerdaec3f5ce63d42cb07e3e724737c8361",
          gtaplus: "rockstargames-modules-core-headerbd78cfb71ed31029ba4279325166bfab",
          rdo: "rockstargames-modules-core-headera6244398a800ffddab72c14f717b0eab",
          noImg: "rockstargames-modules-core-headere88f741af7d5e0529ff4fb6bb82af04f",
          gtao: "rockstargames-modules-core-headerab60d91453348d2e4c090ef3ebb04347",
          custom: "rockstargames-modules-core-headerc20e7ba6ceaba3afd37095b172797711",
          yellow: "rockstargames-modules-core-headerb16672deedfe102b065925cbe0fb931c",
          hotPink: "rockstargames-modules-core-headerd0d01601de7131d9d6d11321b4299e59",
          red: "rockstargames-modules-core-headerd1b5397aff94d33b57674b04a3456e03",
          turquoise: "rockstargames-modules-core-headerd6541b973ce158c8f2fb81483015211f",
          purple: "rockstargames-modules-core-headerf3e34d902681219d4d8490eb164f7727",
          teal: "rockstargames-modules-core-headera6c3b6b6a2395eb18a1174294f26f4ea",
          blue: "rockstargames-modules-core-headereade6e843c5afd48d3a8959fb0b88222",
          green: "rockstargames-modules-core-headera82c313f8f85fc6304ddb703be2fa271",
          darkRed: "rockstargames-modules-core-headerd394c61fdce2bf8894ffb801ee680c2a",
          darkBlue: "rockstargames-modules-core-headerf1d73cc00a3ab644aab949183a8298a7",
          goldenrod: "rockstargames-modules-core-headercdcb0c5076309a329da2a6e857cc3bdf",
          skull: "rockstargames-modules-core-headerba4bd16bff2fbc40616457007b4a7442"
        },
        {
          sanitize: tt
        } = Ve(),
        st = e => {
          let {
            list: a,
            string: t,
            starColor: s,
            style: r,
            className: i,
            game: n,
            noImg: o,
            columns: d,
            mobileColumns: l
          } = e;
          const [m, u] = (0, c.useState)(null);
          return (0, c.useEffect)((() => {
            u(a)
          }), [a]), t || a ? d && m ? (0, f.jsx)("div", {
            className: at.grid,
            style: {
              "--ordered-list-grid-column": d,
              "--ordered-list-grid-column-mobile": l ?? d
            },
            children: (0, f.jsx)("ol", {
              style: (0, T.G6)(r),
              className: I(at.itemList, at.noImg, at[s], at[n]),
              children: m.map((e => (0, f.jsx)("li", {
                dangerouslySetInnerHTML: {
                  __html: tt(e.content)
                }
              }, e.content)))
            })
          }) : (0, f.jsx)("ol", {
            style: (0, T.G6)(r),
            className: I(at.itemList, at.custom, o ? at.noImg : "", s ? at[s] : "", n ? at[n] : "", i ?? ""),
            children: a.map((e => (0, f.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: tt(e?.content ?? e)
              }
            }, e?.content)))
          }) : null
        },
        rt = (e, a) => {
          const t = e.tiers && e.tiers.every((e => e.isComplete)),
            s = a.tiers && a.tiers.every((e => e.isComplete));
          return t && !s ? 1 : !t && s ? -1 : 0
        },
        it = {
          pillBtn: "rockstargames-modules-core-headere6891f053f06919f1ef0dc72cafe9ae7",
          selected: "rockstargames-modules-core-headere5cce3088e494e8ddb9b0cf5528697a3",
          packCardTierIndicator: "rockstargames-modules-core-headereee874b61946e2a65886d622445e1c38",
          tierIndicator: "rockstargames-modules-core-headerbf9ed66cb83cf9a38bfc6fbb8e105fb7",
          active: "rockstargames-modules-core-headercfa711252c08391d3a0f1ecd8728a61a"
        },
        nt = [{
          isComplete: !1
        }, {
          isComplete: !1
        }, {
          isComplete: !1
        }, {
          isComplete: !1
        }],
        ot = e => {
          let {
            tiers: a = nt
          } = e;
          return (0, f.jsx)("div", {
            className: it.packCardTierIndicator,
            children: a?.map(((e, a) => (0, f.jsx)("div", {
              className: [it.tierIndicator, e.isComplete ? it.active : ""].join(" ")
            }, a)))
          })
        },
        ct = {
          pillBtn: "rockstargames-modules-core-headere2e4b892ddcbdb2e09d3c3599a7e6c56",
          selected: "rockstargames-modules-core-headerff5c3c023fc12b68c6bf92b560c479b1",
          packCard: "rockstargames-modules-core-headerd6ef486c5f60d41c5662b092336c1f52",
          packCardImageBox: "rockstargames-modules-core-headereb4637cb1c81d1def1fd92252f90d675",
          packCompleted: "rockstargames-modules-core-headerfcd5bbd0d1e3ebd45cf2cb372468e62c",
          packCardTextBox: "rockstargames-modules-core-headera124ee1b0383d30157e84108cf10b83b",
          badge: "rockstargames-modules-core-headerd42fb1fd7d553d75675a251df2a255ee",
          icon: "rockstargames-modules-core-headercbc69eda17393995ac9d41a8b4b531e8",
          label: "rockstargames-modules-core-headerd4649f3812d37e7407503d49dcaaba04"
        },
        dt = e => {
          let {
            title: a,
            url: t,
            imageUrl: s,
            className: r,
            tiers: i,
            onClick: n,
            badgeContent: o = "Complete",
            imageSize: d = 420,
            imageLoaded: l
          } = e;
          const [u, g] = (0, c.useState)(!1), [k, p] = (0, c.useState)(l);
          (0, c.useEffect)((() => {
            if (i) {
              const e = i.some((e => !e.isComplete));
              g(!e)
            }
          }), [i]);
          const _ = `${s}?im=Resize,height=${d}`;
          return (0, T.kJ)(_, (() => p(!0))), (0, f.jsx)(m.NavLink, {
            className: [ct.packCard, r, u ? ct.packCompleted : ""].join(" "),
            to: t,
            onClick: n,
            children: (0, f.jsxs)("div", {
              className: [ct.packCardImageBox, k ? ct.packCardImageLoaded : ""].join(" "),
              style: {
                backgroundImage: `url("${_}")`
              },
              children: [u && (0, f.jsxs)("div", {
                className: ct.badge,
                children: [(0, f.jsx)("div", {
                  className: ct.icon
                }), (0, f.jsx)("div", {
                  className: ct.label,
                  children: o
                })]
              }), (0, f.jsxs)("div", {
                className: ct.packCardTextBox,
                children: [(0, f.jsx)("h4", {
                  children: a
                }), !u && (0, f.jsx)(ot, {
                  tiers: i
                })]
              })]
            })
          })
        },
        lt = {
          pillBtn: "rockstargames-modules-core-headerc0607ec9e0a3925181496fc555721e0a",
          selected: "rockstargames-modules-core-headerff76988869bea7d18917be00339b2434",
          packList: "rockstargames-modules-core-headerffeeb1f272f99c5cb4711e4956c65f7f",
          headerVisible: "rockstargames-modules-core-headerf6652e03be6ce55bd8f068900093a707",
          packCard: "rockstargames-modules-core-headera53b37fe7ab10b353eceea86123258a1",
          packGrid: "rockstargames-modules-core-headerb85775dc95fb3881171ee42e49076cbf"
        },
        mt = e => {
          let {
            isHeaderVisible: a,
            packListItems: t,
            packListClassName: s = lt.packList,
            packGridClassName: r = lt.packGrid,
            selectPackCard: i,
            sortFunction: n = rt
          } = e;
          const o = (0, c.useRef)(null),
            d = [...t].sort(n);
          return (0, f.jsx)("div", {
            className: [s, a ? lt.headerVisible : ""].join(" "),
            "data-testid": "pack-list",
            children: (0, f.jsx)("div", {
              ref: o,
              className: r,
              "data-testid": "pack-grid",
              children: d.map((e => {
                let {
                  title: a,
                  url: t,
                  imageUrl: s,
                  tiers: r
                } = e;
                return (0, f.jsx)(dt, {
                  title: a,
                  url: t,
                  className: lt.packCard,
                  imageUrl: s,
                  tiers: r,
                  onClick: () => i(a, t)
                }, t)
              }))
            })
          })
        },
        ut = {
          pillBtn: "rockstargames-modules-core-headere2620ca79db4bb12b74eb4adbcba56ce",
          selected: "rockstargames-modules-core-headerd429050d220c77a1c9e8631f9b9f4f02",
          navPill: "rockstargames-modules-core-headerc3ef0af25cfc7d1d0048148984230190"
        },
        ft = e => {
          let {
            title: a,
            onClick: t,
            selected: s
          } = e;
          return (0, f.jsx)("button", {
            type: "button",
            onClick: t,
            className: [ut.navPill, s ? ut.selected : ""].join(" "),
            children: (0, f.jsx)("div", {
              children: a
            })
          })
        };
      var gt;

      function kt() {
        return kt = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = arguments[a];
            for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s])
          }
          return e
        }, kt.apply(this, arguments)
      }
      const pt = e => c.createElement("svg", kt({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none"
      }, e), gt || (gt = c.createElement("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "m15 18-6-6 6-6"
      })));
      var _t;

      function bt() {
        return bt = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = arguments[a];
            for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s])
          }
          return e
        }, bt.apply(this, arguments)
      }
      const ht = e => c.createElement("svg", bt({
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          fill: "none"
        }, e), _t || (_t = c.createElement("path", {
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "m9 18 6-6-6-6"
        }))),
        vt = {
          pillBtn: "rockstargames-modules-core-headerfaa583ebd1250f30b148562c5964fa46",
          selected: "rockstargames-modules-core-headerf55ea6a51cd0de4060f152d9a070e040",
          navScrollButton: "rockstargames-modules-core-headerb13f52032a7c6105f881b2a3764d7ba6"
        },
        xt = e => {
          let {
            direction: a,
            className: t,
            ...s
          } = e;
          return (0, f.jsxs)("button", {
            type: "button",
            className: [t, vt.navScrollButton].join(" "),
            ...s,
            children: ["left" === a && (0, f.jsx)(pt, {}), "right" === a && (0, f.jsx)(ht, {})]
          })
        },
        yt = (0, d.defineMessages)({
          plm_nav_scroll_left: {
            id: "plm_nav_scroll_left",
            defaultMessage: "Scroll Left"
          },
          plm_nav_scroll_right: {
            id: "plm_nav_scroll_right",
            defaultMessage: "Scroll Right"
          }
        }),
        Nt = {
          pillBtn: "rockstargames-modules-core-headera06d15859ff923574165bb46a5f3d0c9",
          selected: "rockstargames-modules-core-headercce410d6b0f750e4332a82432812a32f",
          navMenu: "rockstargames-modules-core-headerc5752917b36e8045f6765318dcfad3da",
          navMenuMain: "rockstargames-modules-core-headerc507169b0a2e6c92ea16615a7740d669",
          sectionMenu: "rockstargames-modules-core-headera874d8cdf964d1c68df9cf8fdd085844",
          sectionItems: "rockstargames-modules-core-headera3f32f28bb1f1c6a4695c53680da9ed0",
          nextSectionNavButton: "rockstargames-modules-core-headere26ad999829c4c68eadd9af67ba89033",
          previousSectionNavButton: "rockstargames-modules-core-headerec50957bce6305ff1dc54a0f7d6a997b",
          previousNavButton: "rockstargames-modules-core-headerf9530895bd80a161771d5ca70d967f65",
          nextNavButton: "rockstargames-modules-core-headerfdd74c0f93dcc9be87ca508ab0fe469a",
          navFeaturedItems: "rockstargames-modules-core-headerc6f0521d960314244895945154ba6c4a"
        },
        St = e => {
          let {
            navItems: a,
            category: t,
            onNavItemClick: s,
            isOpen: r,
            isHeaderVisible: i,
            menuClass: n = Nt.navMenu,
            menuContainerClass: o = Nt.navMenuMain,
            menuSectionClass: l = Nt.sectionMenu,
            menuPrevBtnClass: u = Nt.previousNavButton,
            menuNextBtnClass: g = Nt.nextNavButton
          } = e;
          const k = (0, d.useIntl)(),
            {
              track: p
            } = (0, re.ye)(),
            {
              pathname: _
            } = (0, m.useLocation)(),
            b = (0, c.useMemo)((() => Math.max(a.findIndex((e => e.name === t)), 0)), [a, _]),
            [h, v] = (0, c.useState)(b),
            [x, y] = (0, c.useState)(!1),
            [N, S] = (0, c.useState)(!1),
            [w, j] = (0, c.useState)(!1),
            C = (0, c.useRef)(null),
            I = (0, c.useCallback)(((e, a) => {
              C.current && C.current.slideTo(e), v(e), M(`Secondary Nav > ${a}`)
            }), [p]),
            T = (0, c.useCallback)(((e, t) => {
              M(`Secondary Nav > ${a[h].title} > ${e}`, t), s()
            }), [a, s, h, p]),
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
            E = (0, c.useCallback)((e => {
              S(e.isEnd), j(e.isBeginning)
            }), []);
          return (0, c.useEffect)((() => {
            C.current && ((C.current.wrapperEl.clientWidth || 0) > (C.current.el.clientWidth || 0) ? (y(!0), C.current.params.centeredSlides = !0, C.current.params.centeredSlidesBounds = !0) : (y(!1), C.current.params.centeredSlides = !1, C.current.params.centeredSlidesBounds = !1))
          }), [C.current?.wrapperEl.clientWidth, C.current?.el.clientWidth]), (0, f.jsx)(ta.motion.div, {
            className: n,
            initial: {
              height: 0
            },
            animate: {
              height: r ? "100dvh" : 0
            },
            children: (0, f.jsxs)("div", {
              className: o,
              children: [(0, f.jsxs)("div", {
                className: l,
                children: [!w && x && (0, f.jsx)("div", {
                  className: Nt.previousSectionNavButton,
                  children: (0, f.jsx)(xt, {
                    direction: "left",
                    className: u,
                    onClick: () => C.current?.slidePrev(),
                    "aria-label": k.formatMessage(yt.plm_nav_scroll_left)
                  })
                }), (0, f.jsx)("div", {
                  className: Nt.sectionItems,
                  children: (0, f.jsx)(Z.wx, {
                    onBeforeInit: e => C.current = e,
                    onInit: E,
                    className: Nt.sectionItems,
                    direction: "horizontal",
                    grabCursor: !0,
                    slidesPerView: "auto",
                    initialSlide: h,
                    onSlideChange: E,
                    onResize: E,
                    children: a.map(((e, a) => {
                      let {
                        title: t
                      } = e;
                      return (0, f.jsx)(Z.Ky, {
                        children: (0, f.jsx)(ft, {
                          title: t,
                          onClick: () => I(a, t),
                          selected: h === a
                        })
                      }, t)
                    }))
                  })
                }), !N && x && (0, f.jsx)("div", {
                  className: Nt.nextSectionNavButton,
                  children: (0, f.jsx)(xt, {
                    direction: "right",
                    className: g,
                    onClick: () => C.current?.slideNext(),
                    "aria-label": k.formatMessage(yt.plm_nav_scroll_right)
                  })
                })]
              }), (0, f.jsx)(mt, {
                isHeaderVisible: i,
                packListItems: a[h]?.subNavItems || [],
                selectPackCard: T
              })]
            })
          })
        },
        wt = "rockstargames-modules-core-headerc54c374409e11d1429ce99457cbf7441",
        jt = e => {
          let {
            children: a,
            data: t,
            onPageUpdate: s,
            page: r,
            className: i
          } = e;
          return (0, f.jsx)("a", {
            href: "#",
            className: r === t.page ? `rockstargames-modules-core-headerc0eebf4f915ff9f5cc362e22d6d7d976 ${i??""}` : "",
            onClick: e => {
              e.preventDefault(), s(r)
            },
            children: a
          })
        },
        Ct = e => {
          let {
            data: a,
            onPageUpdate: t,
            className: s
          } = e;
          if (1 === a.pageCount) return null;
          const r = Array.from(new Array(Math.min(a.pageCount, 8)), ((e, t) => t + Math.min(Math.max(a.pageCount - 8, 1), Math.max(2, a.page - 4))));
          return (0, f.jsxs)("div", {
            className: `rockstargames-modules-core-headera626faab2a5a03e3466dda5c79960575 ${s??""}`,
            children: [a.pageCount > 8 ? (0, f.jsxs)(f.Fragment, {
              children: [(0, f.jsx)(jt, {
                data: a,
                onPageUpdate: t,
                page: 1,
                children: "1"
              }), 2 !== r[0] ? (0, f.jsx)("div", {
                className: wt,
                children: "..."
              }) : ""]
            }) : "", r.map((e => (0, f.jsx)(jt, {
              data: a,
              onPageUpdate: t,
              page: e,
              className: s,
              children: e
            }, e))), a.pageCount > 8 ? (0, f.jsxs)(f.Fragment, {
              children: [r.slice(-1)[0] + 1 < a.pageCount ? (0, f.jsx)("div", {
                className: wt,
                children: "..."
              }) : "", (0, f.jsx)(jt, {
                data: a,
                onPageUpdate: t,
                page: a.pageCount,
                children: a.pageCount
              })]
            }) : ""]
          })
        };
      var It = t(77616);
      const Tt = e => {
          let {
            children: a
          } = e;
          const {
            parallaxController: t
          } = (0, It.oZ)();
          return (0, c.useLayoutEffect)((() => {
            if (!t) return;
            const e = setInterval((() => {
              t.update()
            }), 500);
            return () => clearInterval(e)
          }), [t]), a
        },
        Mt = {
          parallaxWrapper: "rockstargames-modules-core-headerdb1ab316d17367d31cf94cdde25e463a",
          large: "rockstargames-modules-core-headerd520d28c6e4e797aea99f61c89ad2bd8",
          medium: "rockstargames-modules-core-headerf008365ee42d37e24e606107346b1c83",
          small: "rockstargames-modules-core-headercb5937d1a102ac4a66c4e373e6253946"
        },
        Et = e => {
          let {
            scrollAxis: a = "vertical",
            size: t = "",
            style: s = {},
            children: r
          } = e;
          return (0, f.jsx)(It.qK, {
            scrollAxis: a,
            children: (0, f.jsx)(Tt, {
              children: (0, f.jsx)("div", {
                className: I(Mt.parallaxWrapper, Mt[t]),
                style: s,
                "data-context": "parallax-wrapper",
                children: r ? r.map(((e, t) => (0, c.cloneElement)(e, {
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
        Lt = e => {
          let {
            layers: a = [],
            displayClass: t = "",
            style: s = {}
          } = e;
          const r = (() => {
            const {
              meta: e = {}
            } = V() ?? {}, a = (0, c.useMemo)((() => e?.cdn ?? e?.prod ?? !1), [e]);
            return (0, c.useCallback)((e => e ? e?.startsWith("http") ? D(e) : D(`${(0,T.kh)(a)}${e}`) : null), [a])
          })();
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
          return (0, f.jsx)(It.Sr, {
            className: I("rockstargames-modules-core-headerb8c85703a3c76902e49a61a6afcb81bc", t),
            layers: i,
            style: s
          })
        },
        Vt = "rockstargames-modules-core-headerc4aa8e5d29b433c400796d0c493a9a4d",
        Dt = e => {
          let {
            minOffset: a = 0,
            maxOffset: t = 0,
            scrollAxis: s = "vertical",
            displayClass: r = "",
            style: i = {},
            children: n
          } = e;
          return "horizontal" === s ? (0, f.jsx)(It.mw, {
            x: [a, t],
            className: I(Vt, r),
            styleOuter: i,
            children: n
          }) : (0, f.jsx)(It.mw, {
            y: [a, t],
            className: I(Vt, r),
            styleOuter: i,
            children: n
          })
        },
        Pt = (e, a) => {
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
        Bt = e => t(e < 100 ? 84184 : e > 99 && e < 500 ? 69450 : e > 499 && e < 750 ? 31216 : 85724),
        $t = (0, d.defineMessages)({
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
        zt = {
          pillBtn: "rockstargames-modules-core-headere4a42eaa9bfb682035e61ac2e2a34515",
          selected: "rockstargames-modules-core-headereb889d8958be54a67b790d7529530986",
          scCharacterCard: "rockstargames-modules-core-headerdf279e92086c0d3c96905b3a91b369ed",
          scAvatar: "rockstargames-modules-core-headerc1890feda663c93b0f767890394cbdcf",
          scCharNames: "rockstargames-modules-core-headere79d7f5515617d849d7d13cd4ff048ce",
          scCharacterStats: "rockstargames-modules-core-headerc721f3aeef9e5ae6b98adca1253e4709",
          scUserName: "rockstargames-modules-core-headereabff0cc0139013f5a60fea6f48c56f6",
          scRpLevel: "rockstargames-modules-core-headerb1f87c58a800ad546200fbf17e029f35",
          scRpIcon: "rockstargames-modules-core-headerf1e0bcba6214698c490b8201bbd850b7"
        },
        Ft = (0, d.withIntl)((e => {
          let {
            characterData: a
          } = e;
          const s = (0, d.useIntl)(),
            {
              platform: r,
              platformUsername: i,
              mugshotUrl: n,
              stats: o
            } = a,
            [l, m] = (0, c.useState)(n),
            u = Pt(r, "large");
          return (0, f.jsxs)("div", {
            className: zt.scCharacterCard,
            children: [(0, f.jsx)("div", {
              className: zt.scAvatar,
              "data-size": "small",
              children: (0, f.jsx)("img", {
                src: l,
                alt: s.formatMessage($t.profile_selector_mugshot, {
                  userName: i
                }),
                onError: () => {
                  m(t(71084))
                }
              })
            }), (0, f.jsx)("div", {
              className: zt.scCharacterStats,
              children: (0, f.jsxs)("div", {
                className: zt.scCharNames,
                children: [(0, f.jsx)("img", {
                  src: u.src,
                  alt: u.alt
                }), (0, f.jsx)("div", {
                  className: zt.scUserName,
                  "data-size": "small",
                  children: i
                }), (0, f.jsx)("div", {
                  className: zt.scRp,
                  children: (0, f.jsxs)("div", {
                    className: zt.scRpLevel,
                    children: [(0, f.jsx)("img", {
                      className: zt.scRpIcon,
                      src: Bt(o.overview.rank.value),
                      alt: s.formatMessage($t.profile_selector_rp_icon)
                    }), (0, f.jsx)("span", {
                      children: a.stats.overview.rank.value
                    })]
                  })
                })]
              })
            })]
          })
        }), Va),
        Ot = (0, _.C2)("@rockstargames/components/profile-switcher"),
        At = Ot("languageSelectorOpenedReactive", !1),
        Ut = e => At(e),
        Rt = Ot("activeSubNavIdReactive", -1),
        Ht = e => Rt(e),
        Gt = Ot("subNavExtraHeightReactive", -1),
        Wt = e => Gt(e),
        qt = Ot("scNavOpenedReactive", !0),
        Jt = e => qt(e),
        Xt = Ot("charListHiddenReactive", !0),
        Kt = e => Xt(e),
        Qt = () => {
          const e = (0, _.gh)(At),
            a = (0, _.gh)(Rt),
            t = (0, _.gh)(Gt),
            s = (0, _.gh)(qt),
            r = (0, _.gh)(Xt);
          return (0, c.useEffect)((() => {
            r || (e && Ut(!1), s && (Jt(!1), Ht(-1)))
          }), [r]), (0, c.useEffect)((() => {
            !e && r && (s || Jt(!0))
          }), [e, r]), (0, c.useMemo)((() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: Ut,
            activeSubNavId: a,
            setActiveSubNavId: Ht,
            subNavExtraHeight: t,
            setSubNavExtraHeight: Wt,
            scNavOpened: s,
            setScNavOpened: Jt,
            charListHidden: r,
            setCharListHidden: Kt
          })), [e, a, t, s, r])
        };
      var Yt = t(69760),
        Zt = t.n(Yt),
        es = t(9860);
      const as = {
          event: "account_menu_click",
          element_placement: "Account Menu"
        },
        ts = e => ({
          text: e.formatMessage($t.sc_link_help),
          target: "_self",
          ga: {
            ...as,
            text: $t.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          children: [{
            text: e.formatMessage($t.sc_link_support),
            location: {
              domain: La.U.support,
              path: "/"
            },
            target: "_self",
            ga: {
              ...as,
              text: $t.sc_link_support.defaultMessage
            },
            dataTestId: "supportLink"
          }, {
            text: e.formatMessage($t.sc_link_legal),
            location: {
              domain: La.U.www,
              path: "/legal"
            },
            target: "_self",
            ga: {
              ...as,
              text: $t.sc_link_legal.defaultMessage
            },
            dataTestId: "legalLink"
          }, {
            text: e.formatMessage($t.sc_link_privacy_policy),
            location: {
              domain: La.U.www,
              path: "/privacy"
            },
            target: "_self",
            ga: {
              ...as,
              text: $t.sc_link_privacy_policy.defaultMessage
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: e.formatMessage($t.sc_link_cookies_policy),
            location: {
              domain: La.U.www,
              path: "/cookies"
            },
            target: "_self",
            ga: {
              ...as,
              text: $t.sc_link_cookies_policy.defaultMessage
            },
            dataTestId: "cookiesPolicyLink"
          }, {
            text: e.formatMessage($t.sc_link_cookies_settings),
            onClickCallback: e => {
              e.preventDefault(), window.OneTrust?.ToggleInfoDisplay()
            },
            target: "_self",
            ga: {
              ...as,
              text: $t.sc_link_cookies_settings.defaultMessage
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: e.formatMessage($t.sc_link_do_not_sell_my_information),
            location: {
              domain: La.U.www,
              path: "/ccpa"
            },
            target: "_self",
            ga: {
              ...as,
              text: $t.sc_link_do_not_sell_my_information.defaultMessage
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        }),
        ss = {
          pillBtn: "rockstargames-modules-core-headereb30ffefc0c8fef449ca5348a2702622",
          selected: "rockstargames-modules-core-headercd058a755e77eeb55cf666fa43fadf75",
          scSubLink: "rockstargames-modules-core-headerfdaa918acc06706cbe191dedd40974af",
          scLink: "rockstargames-modules-core-headercbc80932118c48d8ec14448d8913d068"
        },
        rs = e => {
          let {
            text: a,
            target: t,
            href: s,
            location: r,
            ga: i,
            dataTestId: n,
            isSubLink: o,
            hasNotifications: c = !1,
            onClickCallback: d = (() => {}),
            tabIndex: l,
            reloadDocument: u = !1
          } = e;
          const {
            track: g
          } = (0, re.ye)(), k = (0, La.c)();
          let p = s;
          r && (p = r.domain === k.currentSite?.site ? r.path : `https://${k.sites[r.domain]}.rockstargames.com${r.path}`);
          const _ = {
            ...i,
            link_url: p
          };
          return (0, f.jsxs)(m.Link, {
            className: o ? ss.scSubLink : ss.scLink,
            "data-testid": n || "menuLink",
            title: a,
            to: p,
            target: t,
            rel: "noreferrer",
            reloadDocument: u,
            tabIndex: l,
            onClick: e => {
              g(_), d(e)
            },
            children: [a, c && (0, f.jsx)("span", {
              className: ss.scLinkNotification
            })]
          })
        },
        is = e => {
          let {
            id: a,
            text: t,
            target: s,
            href: r,
            location: i,
            ga: n,
            hasNotifications: o = !1,
            dataTestId: d,
            children: l = [],
            activeSubNavId: m,
            setActiveSubNavId: u,
            setSubNavExtraHeight: g,
            reloadDocument: k = !1,
            onClickCallback: p = (() => {})
          } = e;
          const {
            windowWidth: _,
            windowHeight: b
          } = (0, T.bk)(), {
            track: h
          } = (0, re.ye)(), {
            navOpen: v
          } = (0, re.of)(), x = (0, c.useRef)(null), [y, N] = (0, c.useState)(0), [S, w] = (0, c.useState)(0), [j, C] = (0, c.useState)(!0);
          return (0, c.useEffect)((() => {
            m !== a && !1 === j && C(!0), m === a && C(!1)
          }), [m]), (0, c.useEffect)((() => {
            if (!x.current) return;
            N(x?.current?.scrollHeight);
            const e = window.getComputedStyle(x.current);
            if (e) {
              let a = 16 * parseInt(e.getPropertyValue("--scSubNav-opened-margin"), 10);
              Number.isNaN(a) && (a = 0), w(a)
            }
          }), [x, _, b]), l.length > 0 ? (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsxs)("button", {
              className: "rockstargames-modules-core-headeraf10b4154b04475edc11366934576ecd",
              type: "button",
              "data-testid": d || "menuButton",
              title: t,
              tabIndex: v ? 0 : -1,
              "data-children-hidden": j,
              onClick: e => {
                e.stopPropagation(), h(n), m === a ? (u(-1), g(0)) : (u(a), g(y + S + S))
              },
              children: [(0, f.jsx)("span", {
                className: "rockstargames-modules-core-headerfd722aa4f6d05656ee6e37f952bd13d0",
                children: t
              }), (0, f.jsx)("span", {
                className: "rockstargames-modules-core-headerbe674f27adc299eab348b49f71429b71"
              })]
            }, t), (0, f.jsx)("nav", {
              className: "rockstargames-modules-core-headerff1911053a3515534dd825554a85909e",
              ref: x,
              "aria-hidden": j,
              style: {
                height: j ? 0 : `${y}px`
              },
              children: l.map((e => (0, f.jsx)(rs, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: j || !v ? -1 : 0
              })))
            })]
          }) : (0, f.jsx)(rs, {
            text: t,
            target: s,
            href: r,
            location: i,
            ga: n,
            hasNotifications: o,
            dataTestId: d,
            isSubLink: !1,
            onClickCallback: p,
            tabIndex: v ? 0 : -1,
            reloadDocument: k
          })
        },
        ns = e => {
          let {
            sc: a
          } = e;
          const {
            windowWidth: t,
            windowHeight: s
          } = (0, T.bk)(), r = (0, d.useIntl)(), {
            languageSelectorOpened: i,
            setLanguageSelectorOpened: n,
            activeSubNavId: o,
            setActiveSubNavId: l,
            subNavExtraHeight: u,
            setSubNavExtraHeight: g
          } = Qt(), {
            setSelectedCharacterTuple: k,
            navOpen: p
          } = (0, re.of)(), _ = (0, T.y_)(), b = (0, T._g)(_), [h, v] = (0, c.useState)(""), x = (0, m.useLocation)(), y = `${a.login}?returnUrl=${h}&lang=${b}`, N = `${a.signup}&returnUrl=${h}&lang=${b}`, S = (0, c.useMemo)((() => (0, La.c)()), []), w = (0, c.useMemo)((() => {
            const e = ((e, a, t) => [{
              text: e.formatMessage($t.sc_link_sign_in),
              href: a,
              ga: {
                event: "cta_login",
                text: $t.sc_link_sign_in.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "loginLink"
            }, {
              text: e.formatMessage($t.sc_link_join_social_club),
              href: t,
              ga: {
                event: "cta_signup",
                text: $t.sc_link_join_social_club.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "signUpLink"
            }, ts(e)])(r, y, N);
            return e
          }), [r, y, N, S]), [j, C] = (0, c.useState)(0), I = (0, c.createRef)(), M = () => {
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
          return (0, c.useEffect)((() => {
            const e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            v(e)
          }), [x]), (0, c.useEffect)((() => {
            k(!1)
          }), []), (0, c.useEffect)((() => {
            M(), Zt()((() => {
              setTimeout(M, 0)
            }), 300)
          }), [t, s]), (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsx)("nav", {
              className: "rockstargames-modules-core-headerb1552e1f97b08ee4337f78fa4486ffac",
              children: (0, f.jsx)("div", {
                className: "rockstargames-modules-core-headerc5bc9bec611f9f0514176014ce835e1e",
                "data-logged-in": "false",
                ref: I,
                style: {
                  "--scNavWrap-max-height": `${u+j}px`
                },
                children: w.map((e => (0, c.createElement)(is, {
                  ...e,
                  activeSubNavId: o,
                  setActiveSubNavId: l,
                  setSubNavExtraHeight: g,
                  key: e.text
                })))
              })
            }), (0, f.jsx)("div", {
              className: "rockstargames-modules-core-headera6c12c94e8656e88958552d645fe51fe",
              style: {
                visibility: p ? null : "hidden"
              },
              children: (0, f.jsx)(es.LanguageSelector, {
                theme: "sc-menu",
                languageSelectorOpened: i,
                setLanguageSelectorOpened: e => {
                  l(-1), n(e)
                },
                defaultMessage: "Select a Language"
              })
            })]
          })
        },
        os = e => {
          let {
            characterData: a,
            setMobileCardWidth: s,
            tabIndex: r
          } = e;
          const i = (0, d.useIntl)(),
            {
              currentCharId: n,
              setCurrentCharId: o
            } = (0, re.of)(),
            {
              track: l
            } = (0, re.ye)(),
            m = (0, c.createRef)(),
            {
              platform: u,
              platformUsername: g,
              mugshotUrl: k,
              stats: p
            } = a,
            [_, b] = (0, c.useState)(k),
            [h] = (0, c.useState)(a.index),
            v = Pt(u, "large"),
            x = n === a.index;
          return (0, c.useEffect)((() => {
            m.current && s && s(m?.current?.offsetWidth)
          }), [m]), (0, f.jsxs)("button", {
            className: "rockstargames-modules-core-headerd76e785563451a50438064ac368aae4b",
            type: "button",
            "aria-hidden": x,
            onClick: e => {
              e.stopPropagation(), o(h);
              let a = "";
              "pc" === u ? a = "PC" : "ps4" === u ? a = "PS4" : "ps5" === u ? a = "PS5" : "xboxone" === u ? a = "Xbox One" : "xboxsx" === u && (a = "Xbox Series X|S"), l({
                event: "character_selector_select",
                event_action: "select",
                event_category: "character_selector",
                event_label: a,
                position: h
              })
            },
            ref: m,
            tabIndex: r,
            children: [(0, f.jsx)("div", {
              className: "rockstargames-modules-core-headerbbdf69fe97471593355fc51ec9a6d13a",
              "data-size": "small",
              children: (0, f.jsx)("img", {
                src: _,
                alt: i.formatMessage($t.profile_selector_mugshot, {
                  userName: g
                }),
                onError: () => {
                  b(t(71084))
                }
              })
            }), (0, f.jsxs)("div", {
              className: "rockstargames-modules-core-headerc0dc303ef48255c09faa4ad2f4e953e7",
              children: [(0, f.jsxs)("div", {
                className: "rockstargames-modules-core-headere9fbbbcea66d86dbd58b8548a5f6bea8",
                children: [(0, f.jsx)("img", {
                  src: v.src,
                  alt: v.alt
                }), (0, f.jsx)("div", {
                  className: "rockstargames-modules-core-headerb3726d8b480695f64fddc723c6f35205",
                  "data-size": "small",
                  children: g
                })]
              }), (0, f.jsx)("div", {
                className: "rockstargames-modules-core-headera5e3df42966a50f3dd88bbcb57536617",
                children: (0, f.jsxs)("div", {
                  className: "rockstargames-modules-core-headera6776312350028898320ba59145a39be",
                  children: [(0, f.jsx)("img", {
                    className: "rockstargames-modules-core-headerb266652910ad34c0e8e097b212a958f0",
                    src: Bt(p.overview.rank.value),
                    alt: i.formatMessage($t.profile_selector_rp_icon)
                  }), (0, f.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                })
              })]
            })]
          })
        },
        cs = {
          pillBtn: "rockstargames-modules-core-headerd9464c4b4d92881abe5578988bd68af7",
          selected: "rockstargames-modules-core-headerbc0a950bffee0ee9e28213912da51427",
          scProfileDetails: "rockstargames-modules-core-headerb954455f6ff25f2350e1a0960ba97d3e",
          scAvatar: "rockstargames-modules-core-headerc15a60de0fc8df4960d84ab96caa8a62",
          scAvatarPlatform: "rockstargames-modules-core-headera8f66dccf33827dc81107cae3196cfbe",
          scProfileStats: "rockstargames-modules-core-headerc91f8623fa10edbeba8c79c7d6b26a28",
          scNames: "rockstargames-modules-core-headerda83fc27513bcac6a8a31eadc89b1c2c",
          scTagsNames: "rockstargames-modules-core-headerd7ce73d22672e2e2f59e9193c2632531",
          scUserName: "rockstargames-modules-core-headerd5814836ce152affaa22d226819b5b12",
          scCrewName: "rockstargames-modules-core-headerb7777817be6d756cc2d1585c1377734c",
          scCrewRankBar: "rockstargames-modules-core-headera581d240520cf347e5ff5f6a62a36a97",
          scCrewRankBarItem: "rockstargames-modules-core-headerbdb056c03ef06b99d69426c87cec67c5",
          scProgress: "rockstargames-modules-core-headerdc3020fbe81a916a8da4719ef052c278",
          scRpLevel: "rockstargames-modules-core-headerb2ea0e0d19182355913368bf7be016b8",
          scRpIcon: "rockstargames-modules-core-headerf17a712b43b5234c07dc44f674433cf6",
          scMoney: "rockstargames-modules-core-headerf14849be516f588e1bc9e252a109c76f",
          scCash: "rockstargames-modules-core-headerb3e35cdc6557f7c3886700245af352dd",
          scBank: "rockstargames-modules-core-headerec696aafed90a7a4c69dc53da0a5bb36"
        },
        ds = e => {
          let {
            character: a,
            platformTag: s
          } = e;
          const {
            data: r
          } = (0, re.yi)(), {
            track: i
          } = (0, re.ye)(), n = (0, d.useIntl)(), [o, l] = (0, c.useState)([]), [m, u] = (0, c.useState)(null), [g, k] = (0, c.useState)(null), [p, _] = (0, c.useState)(!1), [b, h] = (0, c.useState)(-1), [v, x] = (0, c.useState)([]), [y, N] = (0, c.useState)(0), S = t(71084), [w, j] = (0, c.useState)("0"), [C, I] = (0, c.useState)("0"), T = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), M = () => {
            L((0, f.jsx)("img", {
              src: S,
              alt: n.formatMessage($t.profile_selector_mugshot, {
                userName: r.nickname
              })
            }))
          }, [E, L] = (0, c.useState)((0, f.jsx)("img", {
            className: cs.scAvatarImg,
            src: a.mugshotUrl,
            alt: n.formatMessage($t.profile_selector_mugshot, {
              userName: r.nickname
            }),
            onError: M
          }));
          (0, c.useEffect)((() => {
            l(r.crews ?? [])
          }), [r]), (0, c.useEffect)((() => {
            L((0, f.jsx)("img", {
              src: a.mugshotUrl,
              alt: r.nickname,
              onError: M
            })), j(T(a.stats.overview.bank.value)), I(T(a.stats.overview.cash.value)), N(parseInt(a.stats.overview.rank.value))
          }), [a, r]), (0, c.useEffect)((() => {
            o && o.forEach((e => {
              !0 === e.isPrimary && (u(e.crewTag), k(e.crewColour), h(e.rankOrder), _(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && _(!0))
            }))
          }), [o]), (0, c.useEffect)((() => {
            const e = [];
            if (!p && b > -1)
              for (let a = 5; a > b; a -= 1) e.push((0, f.jsx)("div", {
                className: cs.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== g ? g : ""
                }
              }, `crewrankbar-${a}`));
            x(e)
          }), [b, p, g]);
          const V = e => {
            e.stopPropagation(), i({
              event: "character_selector_profile_click",
              event_action: "profile_click",
              event_category: "character_selector",
              event_label: s.alt,
              link_url: void 0
            })
          };
          return (0, f.jsxs)("div", {
            className: cs.scProfileDetails,
            onClick: V,
            onKeyUp: V,
            role: "button",
            tabIndex: -1,
            children: [(0, f.jsxs)("div", {
              className: cs.scAvatar,
              children: [E, (0, f.jsx)("div", {
                className: cs.scAvatarPlatform,
                "data-platform": a.platform,
                children: (0, f.jsx)("img", {
                  src: s.src,
                  alt: s.alt
                })
              })]
            }), (0, f.jsxs)("div", {
              className: cs.scProfileStats,
              children: [(0, f.jsx)("div", {
                className: cs.scNames,
                children: (0, f.jsxs)("div", {
                  className: cs.scTagsNames,
                  children: [(0, f.jsx)("span", {
                    className: cs.scUserName,
                    children: a.platformUsername
                  }), m && (0, f.jsxs)("span", {
                    className: cs.scCrewName,
                    "data-arrow-tag": p,
                    children: [m, !p && (0, f.jsx)("div", {
                      className: cs.scCrewRankBar,
                      children: v
                    })]
                  })]
                })
              }), (0, f.jsxs)("div", {
                className: cs.scProgress,
                children: [(0, f.jsxs)("div", {
                  className: cs.scRpLevel,
                  children: [(0, f.jsx)("img", {
                    className: cs.scRpIcon,
                    src: Bt(y),
                    alt: n.formatMessage($t.profile_selector_rp_icon)
                  }), (0, f.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                }), (0, f.jsxs)("div", {
                  className: cs.scMoney,
                  children: [(0, f.jsxs)("span", {
                    className: cs.scCash,
                    children: ["$", C]
                  }), (0, f.jsxs)("span", {
                    className: cs.scBank,
                    children: ["$", w]
                  })]
                })]
              })]
            })]
          })
        },
        ls = (e, a) => {
          const [t, s] = (0, c.useState)(0);
          return (0, c.useEffect)((() => {
            if (e.current) {
              const {
                current: t
              } = e, r = t.getBoundingClientRect(), {
                width: i
              } = r;
              let n = i;
              if (!0 === a) {
                const e = window.getComputedStyle(t);
                n += parseInt(e.marginLeft, 10) + parseInt(e.marginRight, 10)
              }
              s(n)
            }
          }), [e]), t
        },
        ms = e => {
          let {
            dragThreshold: a = 80,
            interactionDelay: t = 1e3,
            mobileGutterWidth: s = 17,
            slideChangeCallback: r = null,
            slideClickCallback: i = null,
            children: n = [],
            disablePager: o = !1,
            disableSwiper: d = !1
          } = e;
          const l = (0, c.createRef)(),
            m = ls(l, !1),
            [u, g] = (0, c.useState)(!1),
            [k, p] = (0, c.useState)(0),
            [_, b] = (0, c.useState)(0),
            [h, v] = (0, c.useState)([s]),
            [x, y] = (0, c.useState)(h[0]),
            [N, S] = (0, c.useState)(252),
            [w, j] = (0, c.useState)(0),
            [C, I] = (0, c.useState)([]),
            [T, M] = (0, c.useState)([]),
            [E, L] = (0, c.useState)(!1),
            V = e => {
              if (!0 === u || !0 === d) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              b(a)
            },
            D = e => {
              if (!0 === u || 0 === _ || !0 === d) return;
              const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                s = t > _ ? 1 : -1,
                i = Math.abs(_ - t);
              i > a ? (s > 0 ? (() => {
                if (!0 === u) return;
                g(!0);
                const e = k - 1 < 0 ? 0 : k - 1;
                p(e), y(h[e]), r && r(e)
              })() : (() => {
                if (!0 === u) return;
                g(!0);
                let e = k + 1 >= h.length ? h.length - 1 : k + 1;
                e < 0 && (e = 0), p(e), y(h[e]), r && r(e)
              })(), b(0)) : y(h[k] + i * s)
            },
            P = () => {
              !0 !== u && !0 !== d && (g(!0), !0 !== u && (y(h[k]), b(0)))
            };
          return (0, c.useEffect)((() => {
            const e = [];
            n.forEach((() => {
              e.push((0, c.createRef)())
            })), I(e)
          }), [n]), (0, c.useEffect)((() => {
            if (C.length < 1) return;
            S(C[0]?.current?.clientWidth || 0);
            const e = C[0]?.current.firstChild,
              a = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              t = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            j(t + a)
          }), [C]), (0, c.useEffect)((() => {
            !1 !== u && setTimeout((() => {
              g(!1)
            }), t)
          }), [u, t]), (0, c.useEffect)((() => {
            v(n.map(((e, a) => (e => {
              let a = 0;
              const t = n.length;
              return 1 === t ? .5 * m - .5 * N - 2 * s + w : (0 === e && (a = s - e * N), e === t - 1 && t > 1 && (a = t * N * -1 + (m - (s - w))), e > 0 && e < t - 1 && (a = e * N * -1 + (.5 * m - .5 * N + .5 * w)), a)
            })(a)))), 1 === n.length ? L(!0) : L(!1)
          }), [l.current, n, m]), (0, c.useEffect)((() => {
            const e = (a = k, n.map(((e, t) => {
              const s = {
                active: !1
              };
              return t === a && (s.active = !0), s
            })));
            var a;
            M(e)
          }), [n, k]), (0, c.useEffect)((() => {
            !0 !== o && !0 !== d || y(h[0])
          }), [d, o, h]), (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsx)("div", {
              className: "rockstargames-modules-core-headerab70c3f9c67ecd69d19216a5f4de5049",
              ref: l,
              onTouchStart: V,
              onTouchMove: D,
              onTouchEnd: P,
              onMouseDown: V,
              onMouseMove: D,
              onMouseUp: P,
              onClick: () => {
                null !== i && i(k)
              },
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, f.jsx)("div", {
                className: "rockstargames-modules-core-headera93be1084a583cafa7f3f97a8ce8a6be",
                "data-interaction-blocked": u,
                "data-single-item": E,
                style: {
                  transform: E ? null : `translateX(${x}px)`
                },
                children: n.map(((e, a) => (0, f.jsx)("div", {
                  className: "rockstargames-modules-core-headerc013369a930e076d1729d086fb51903e",
                  ref: C[a],
                  children: e
                }, `csItem-${e?.props?.characterData?.mugshotUrl}`)))
              })
            }), T.length > 1 && !1 === o && (0, f.jsx)("div", {
              className: "rockstargames-modules-core-headerda8cfef07bf44e9a44839e2723ec61bb",
              children: T.map((e => (0, f.jsx)("div", {
                className: "rockstargames-modules-core-headerfe87ea0922034610a1f6cb3a4edbe195",
                "data-active": e.active
              }, e.mugshotUrl)))
            })]
          })
        },
        us = {
          pillBtn: "rockstargames-modules-core-headeraa374e2f7806799cb073de8a9b2a2e7d",
          selected: "rockstargames-modules-core-headerd402a10393179390abdaf3684a02f1ba",
          scProfile: "rockstargames-modules-core-headerdde9053261079ebfb5d95975239fe87d",
          scCharacterSelector: "rockstargames-modules-core-headerc47913b4c686bbbc9a0c8ee6ed7666bf",
          scCharacterSelectBtn: "rockstargames-modules-core-headera4f9dafe071f5c9a825bf57348835309",
          open: "rockstargames-modules-core-headerb1f5708c9a0e35681c54a58f04661c1c",
          scCharacterList: "rockstargames-modules-core-headera1d1104b9df769c9237fa1a06633ffe7",
          scNav: "rockstargames-modules-core-headera326b0feea8d083ed2265571010d79d3",
          scLanguageSelector: "rockstargames-modules-core-headerd19713d1362bcd54ff539975adbb2ecc",
          scNavHeader: "rockstargames-modules-core-headerbb74821846f47bbe5fc0896364efd520",
          scNavWrap: "rockstargames-modules-core-headera7f1e2d78519eaf099bd43c6ad07abc9"
        },
        fs = (0, T.Ux)((e => {
          let {
            sc: a,
            charListHidden: t,
            hideCharacterList: s,
            refCharacterListDesktop: r,
            menuPadding: i,
            longCharList: n,
            setLongCharList: o,
            isMobileMode: l,
            setIsMobileMode: u
          } = e;
          const {
            windowWidth: g,
            windowHeight: k
          } = (0, T.bk)(), p = (0, d.useIntl)(), {
            languageSelectorOpened: b,
            setLanguageSelectorOpened: h,
            activeSubNavId: v,
            setActiveSubNavId: x,
            subNavExtraHeight: y,
            setSubNavExtraHeight: N,
            scNavOpened: S,
            setScNavOpened: w
          } = Qt(), [j, C] = (0, c.useState)(""), I = (0, m.useLocation)(), {
            lsSettings: M
          } = (0, T.ym)(), {
            track: E
          } = (0, re.ye)(), L = (0, _.aI)(), {
            data: V,
            loggedIn: D
          } = (0, re.yi)(), {
            charactersNeeded: P,
            currentCharId: B,
            hasNotifications: $,
            navOpen: z,
            setCurrentCharId: F,
            setHasNotifications: O,
            setSelectedCharacterTuple: A,
            setUserData: U
          } = (0, re.of)(), [R, H] = (0, c.useState)(null), [G, W] = (0, c.useState)(null), [q, J] = (0, c.useState)(!1), [X, K] = (0, c.useState)(!1), [Q, Y] = (0, c.useState)(0), Z = (0, c.createRef)(), ee = ls(Z, !1), ae = (0, c.createRef)(), [te, se] = (0, c.useState)(0), [ie, ne] = (0, c.useState)([]), [oe, ce] = (0, c.useState)(244), de = (0, c.useMemo)((() => (0, La.c)()), []), le = (0, c.useMemo)((() => ((e, a, t, s, r) => [{
            text: e.formatMessage($t.sc_link_activity_feed),
            location: {
              domain: La.U.socialClub,
              path: "/"
            },
            target: "_self",
            ga: {
              ...as,
              text: $t.sc_link_activity_feed.defaultMessage
            },
            dataTestId: "activityFeedLink"
          }, {
            text: e.formatMessage($t.sc_link_account),
            target: "_self",
            dataTestId: "accountButton",
            children: [{
              text: e.formatMessage($t.sc_link_view_my_profile),
              href: t.profile_link,
              target: "_self",
              ga: {
                ...as,
                text: $t.sc_link_view_my_profile.defaultMessage
              },
              dataTestId: "viewMyProfileLink"
            }, {
              text: e.formatMessage($t.sc_link_messages),
              location: {
                domain: La.U.socialClub,
                path: "/message"
              },
              target: "_self",
              ga: {
                ...as,
                text: $t.sc_link_messages.defaultMessage
              },
              dataTestId: "messagesLink"
            }, {
              text: e.formatMessage($t.sc_link_game_activation),
              location: {
                domain: La.U.socialClub,
                path: "/activate"
              },
              target: "_self",
              ga: {
                ...as,
                text: $t.sc_link_game_activation.defaultMessage
              },
              dataTestId: "gameActivationLink"
            }]
          }, {
            text: e.formatMessage($t.sc_link_notifications),
            location: {
              domain: La.U.socialClub,
              path: "/notifications"
            },
            target: "_self",
            hasNotifications: s,
            ga: {
              ...as,
              text: $t.sc_link_notifications.defaultMessage,
              location: {
                domain: La.U.socialClub,
                path: "/notifications"
              }
            },
            dataTestId: "notificationsLink"
          }, {
            text: e.formatMessage($t.sc_link_crews),
            location: {
              domain: La.U.socialClub,
              path: `/member/${t.nickname}/crews`
            },
            target: "_self",
            ga: {
              ...as,
              text: $t.sc_link_crews.defaultMessage
            },
            dataTestId: "crewsLink"
          }, {
            text: e.formatMessage($t.sc_link_friends),
            target: "_self",
            dataTestId: "friendsButton",
            children: [{
              text: e.formatMessage($t.sc_link_my_friends),
              location: {
                domain: La.U.socialClub,
                path: `/member/${t.nickname}/friends`
              },
              target: "_self",
              ga: {
                ...as,
                text: $t.sc_link_my_friends.defaultMessage
              },
              dataTestId: "myFriendsLink"
            }, {
              text: e.formatMessage($t.sc_link_import_friends),
              location: {
                domain: La.U.socialClub,
                path: "/friends/import"
              },
              target: "_self",
              ga: {
                ...as,
                text: $t.sc_link_import_friends.defaultMessage
              },
              dataTestId: "importFriendsLink"
            }, {
              text: e.formatMessage($t.sc_link_find_friends),
              location: {
                domain: La.U.socialClub,
                path: "/members"
              },
              target: "_self",
              ga: {
                ...as,
                text: $t.sc_link_import_friends.defaultMessage
              },
              dataTestId: "findFriendsLink"
            }]
          }, {
            text: e.formatMessage($t.sc_link_settings),
            location: {
              domain: La.U.socialClub,
              path: "/settings"
            },
            target: "_self",
            ga: {
              ...as,
              text: $t.sc_link_settings.defaultMessage
            },
            dataTestId: "settingsLink"
          }, ts(e), {
            text: e.formatMessage($t.sc_link_log_out),
            href: `${a.logout}?returnUrl=${r}`,
            target: "_self",
            reloadDocument: !0,
            ga: {
              ...as,
              text: $t.sc_link_log_out.defaultMessage
            },
            dataTestId: "logoutButton"
          }])(p, a, V, $, j, window)), [p, a, V, $, j, de]), me = () => {
            K(i + oe * Q < ee)
          }, ue = () => {
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
          return (0, c.useEffect)((() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            de.currentSite?.site === La.U.socialClub && (e = encodeURIComponent("/")), C(e)
          }), [I]), (0, c.useEffect)((() => {
            ne(V.characters[P] ?? [])
          }), [V, P]), (0, c.useEffect)((() => {
            V && U(V)
          }), [V]), (0, c.useEffect)((() => {
            const e = V?.characters.gtao;
            if (null !== D && !e.length) return void A(!1);
            if (null == B || !e.length) return;
            const a = e?.[B] ?? e?.[0] ?? null;
            A(!!a?.platform && [a.platform, a.characterSlot])
          }), [B, V, D]), (0, c.useEffect)((() => {
            (async () => {
              if (!V?.id) return;
              const {
                count: e
              } = await (0, T.s9)("notification/count", {
                pingBearer: L
              });
              O(e > 0)
            })()
          }), [V]), (0, c.useEffect)((() => {
            me()
          }), [oe]), (0, c.useEffect)((() => {
            s(!0), u(g < 768), u(g < 768 || k < 649)
          }), [g, k]), (0, c.useEffect)((() => {
            let e = ie.length - 1;
            e < 0 && (e = 0), Y(e);
            const a = ie.length > 0 ? ie[B] ?? ie[0] : null;
            if (!a) return;
            const t = null !== a ? Pt(a.platform, "large") : null;
            W(t), H(a), ie.length > 1 ? J(!0) : J(!1), o(ie.length - 1 > 3)
          }), [B, ie]), (0, c.useEffect)((() => {
            me()
          }), [Q, l, g, ie]), (0, c.useEffect)((() => {
            ue(), Zt()((() => {
              setTimeout(ue, 0)
            }), 300)
          }), [g, k]), (0, c.useEffect)((() => {
            const e = M?.currentCharId ?? 0;
            e !== B && F(Math.max(0, Math.min(e, ie.length - 1)))
          }), [ie, M]), (0, f.jsxs)(f.Fragment, {
            children: [null !== R && "gtao" === P && (0, f.jsxs)("div", {
              className: us.scProfile,
              tabIndex: -1,
              "aria-label": p.formatMessage($t.profile_selector_profile_card),
              children: [(0, f.jsx)(ds, {
                s: us,
                character: R,
                platformTag: G
              }), !0 === q && (0, f.jsxs)("div", {
                className: us.scCharacterSelector,
                children: [(0, f.jsx)("button", {
                  className: us.scCharacterSelectBtn,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const a = !t;
                    s(a), E({
                      event: a ? "character_selector_close" : "character_selector_open",
                      event_action: !0 === a ? "close" : "open",
                      event_category: "character_selector"
                    })
                  },
                  "data-list-closed": t,
                  children: (0, f.jsx)("span", {
                    children: (0, f.jsx)(d.FormattedMessage, {
                      ...$t.profile_selector_switch_character
                    })
                  })
                }), !1 === l && (0, f.jsx)("div", {
                  className: us.scCharacterList,
                  "data-long-list": n,
                  "aria-hidden": t,
                  ref: r,
                  children: ie.map((e => (0, f.jsx)(os, {
                    tabIndex: t ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: ce
                  }, e.mugshotUrl)))
                }), !0 === l && (0, f.jsx)("div", {
                  className: us.scCharacterList,
                  "data-single-item": 2 === ie.length,
                  "data-swiper-disabled": X,
                  "aria-hidden": t,
                  ref: Z,
                  children: (0, f.jsx)(ms, {
                    interactionDelay: 350,
                    mobileGutterWidth: 17,
                    dragThreshold: 40,
                    slideChangeCallback: () => {
                      E({
                        event: "carousel_swipe",
                        event_category: "carousel",
                        event_action: "swipe",
                        event_label: "character_selector"
                      })
                    },
                    disablePager: X,
                    disableSwiper: X,
                    children: ie.filter(((e, a) => a !== B)).map((e => (0, c.createElement)(os, {
                      characterData: e,
                      setMobileCardWidth: ce,
                      key: e.mugshotUrl,
                      tabIndex: t ? -1 : 0
                    })))
                  })
                })]
              })]
            }), (0, f.jsxs)("nav", {
              className: us.scNav,
              "aria-hidden": !z,
              children: [(0, f.jsx)("button", {
                className: us.scNavHeader,
                type: "button",
                "data-opened": S,
                "data-nav-opened": z,
                tabIndex: S ? -1 : 0,
                onClick: e => {
                  e.stopPropagation(), S || w(!0)
                },
                "data-testid": "playerButton",
                children: (0, f.jsx)("span", {
                  children: V.nickname
                })
              }), (0, f.jsx)("div", {
                className: us.scNavWrap,
                "data-opened": S,
                "data-logged-in": "true",
                ref: ae,
                style: {
                  "--scNavWrap-max-height": `${te+y}px`
                },
                children: le.map(((e, a) => (0, c.createElement)(is, {
                  ...e,
                  id: a,
                  activeSubNavId: v,
                  setActiveSubNavId: x,
                  setSubNavExtraHeight: N,
                  key: e.text
                })))
              })]
            }), (0, f.jsx)("div", {
              className: us.scLanguageSelector,
              style: {
                visibility: z ? null : "hidden"
              },
              children: (0, f.jsx)(es.LanguageSelector, {
                theme: "sc-menu",
                languageSelectorOpened: b,
                setLanguageSelectorOpened: h
              })
            })]
          })
        })),
        gs = {
          scMenu: "rockstargames-modules-core-headerebc4c779cfe9d0b7cfd678424e57370c",
          pillBtn: "rockstargames-modules-core-headerf333ffbc5b9f9d571b81be0a7235190d",
          selected: "rockstargames-modules-core-headere3bdabe09c3d1b98b61f3d0484209912",
          navOpen: "rockstargames-modules-core-headerff929155ac480a9cfa5540dfd3e70ae9",
          dragHandle: "rockstargames-modules-core-headerba4968108b922dd8165c6e53557f5f2e",
          dragHandleBtn: "rockstargames-modules-core-headerd362ba3eeee50f90600a413c05761431",
          scOverlay: "rockstargames-modules-core-headerd8e443f5d0d9171449f5f1042f80aa17"
        },
        ks = (0, d.withIntl)((() => {
          const {
            windowHeight: e
          } = (0, T.bk)(), a = (0, d.useIntl)(), {
            languageSelectorOpened: s,
            setLanguageSelectorOpened: r,
            setActiveSubNavId: i,
            scNavOpened: n,
            setScNavOpened: o,
            charListHidden: l,
            setCharListHidden: m
          } = Qt(), [u, g] = (0, c.useState)(!1), {
            setBodyIsScrollable: k
          } = (0, T.Qz)(), {
            navHidden: p = !1
          } = (0, _.oT)(), {
            loggedIn: b
          } = (0, re.yi)(), {
            currentCharId: h,
            navOpen: v,
            setNavOpen: x,
            userData: y
          } = (0, re.of)(), {
            track: N
          } = (0, re.ye)(), [S, w] = (0, c.useState)(!1), j = (0, _.gh)(re.O0), C = (0, c.useRef)(), [I, M] = (0, c.useState)(0), E = (0, c.createRef)(), [L, V] = (0, c.useState)(!1), [D, P] = (0, c.useState)(0), [B, $] = (0, c.useState)(!1), {
            mutateLSSettings: z,
            lsSettings: F
          } = (0, T.ym)(), O = (0, c.useCallback)((e => {
            m(e), C.current && !0 === e && (C.current.scrollTop = 0)
          }), [C]);
          return (0, c.useEffect)((() => {
            null !== h && F.currentCharId !== h && z({
              key: "currentCharId",
              value: h
            }), !1 === b ? z({
              key: "currentCharId",
              value: null
            }) : b && !y && N({
              event: "account_synced"
            })
          }), [h, b]), (0, c.useEffect)((() => {
            C.current && (!1 === l && !1 === S && (C.current.style.height = `${C.current.scrollHeight}px`), !0 === l && (C.current.style.height = null))
          }), [l, C, S]), (0, c.useEffect)((() => {
            const e = () => {
                x(!1), O(!0)
              },
              a = a => {
                "Escape" === a.code && e()
              };
            return document.addEventListener("click", e), document.addEventListener("keyup", a), () => {
              document.removeEventListener("click", e), document.removeEventListener("keyup", a)
            }
          }), []), (0, c.useEffect)((() => {
            x(!1), O(!0)
          }), [p]), (0, c.useEffect)((() => {
            if (E.current) {
              const {
                current: e
              } = E, a = window.getComputedStyle(e);
              M(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }), [E]), (0, c.useEffect)((() => {
            k(!L || !v)
          }), [v, L]), (0, c.useEffect)((() => {
            $(window.navigator.userAgent.includes("Mac"))
          }), []), (0, c.useEffect)((() => {
            E.current && g(E?.current?.scrollHeight >= e)
          }), [E, e]), (0, c.useEffect)((() => {
            v || (i(-1), r(!1))
          }), [v]), (0, c.useEffect)((() => {
            s && (l || O(!0), n && (o(!1), i(-1)))
          }), [s]), (0, c.useEffect)((() => {
            n && (s && r(!1), l || O(!0))
          }), [n]), null === b ? null : (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsxs)("div", {
              className: [gs.scMenu, v ? gs.navOpen : ""].join(" "),
              "data-logged-in": b,
              "data-mac-browser": B,
              "data-scroll-mode": u,
              ref: E,
              "aria-hidden": !v,
              children: [(0, f.jsx)("button", {
                className: gs.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  P(a)
                },
                onTouchMove: e => {
                  if (0 === D) return;
                  const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(D - a) > 1 && (P(0), x(!1))
                },
                children: (0, f.jsx)("img", {
                  className: gs.dragHandle,
                  src: t(82708),
                  alt: a.formatMessage($t.sc_menu_drag_handle)
                })
              }), b ? (0, f.jsx)(fs, {
                sc: j,
                charListHidden: l,
                hideCharacterList: O,
                refCharacterListDesktop: C,
                menuPadding: I,
                longCharList: S,
                setLongCharList: w,
                isMobileMode: L,
                setIsMobileMode: V
              }) : (0, f.jsx)(ns, {
                sc: j,
                navOpen: v
              })]
            }), (0, f.jsx)("div", {
              className: [gs.scOverlay, v ? gs.navOpen : ""].join(" "),
              "data-logged-in": b
            })]
          })
        }), Va),
        ps = t(71084),
        _s = t(29314),
        bs = (0, d.withIntl)((e => {
          let {
            setOtherHeaderDropdowns: a
          } = e;
          const t = (0, d.useIntl)(),
            {
              data: s
            } = (0, re.yi)(),
            {
              charactersNeeded: r,
              currentCharId: i,
              navOpen: n,
              setNavOpen: o
            } = (0, re.of)(),
            {
              track: l
            } = (0, re.ye)(),
            [m, u] = (0, c.useState)(null),
            [g, k] = (0, c.useState)(!1),
            [p, _] = (0, c.useState)(null),
            [b, h] = (0, c.useState)(!1),
            [v, x] = (0, c.useState)([]);
          (0, c.useEffect)((() => {
            x(s.characters[r] ?? [])
          }), [s, r]);
          const y = (0, c.useCallback)((e => {
            e.stopPropagation(), o(!n), l({
              event: "account_menu_click",
              element_placement: "Account Menu",
              text: n ? "close" : "open"
            })
          }), [n]);
          return (0, c.useEffect)((() => {
            const e = s?.id ?? !1,
              a = e ? (v?.[i]?.mugshotUrl ?? s?.avatar) || ps : _s,
              t = Pt(v?.[i]?.platform, "small") ?? null;
            _(t), u(a), k(e), h(!!v?.[i]?.mugshotUrl)
          }), [s, v, i, ps, _s]), (0, f.jsxs)("button", {
            className: "rockstargames-modules-core-headerdc519cef2feb621e4715bd3fcdf09791",
            "data-img-set": b,
            "aria-label": t.formatMessage($t.sc_menu_toggle),
            type: "button",
            onClick: e => y(e),
            "data-testid": "avaterMenuButton",
            children: [(0, f.jsx)("img", {
              className: "rockstargames-modules-core-headerce75eaa6d65692d36b60d31f3f660ff0",
              src: m || "",
              onError: () => {
                u(ps)
              },
              alt: s?.nickname || ""
            }), g && null !== p && (0, f.jsx)("img", {
              className: "rockstargames-modules-core-headeraaf21e74a659089f743bb160bdf95046",
              src: p.src,
              alt: p.alt
            }), g && (0, f.jsx)("div", {
              "data-ui-name": "avatar",
              className: "rockstargames-modules-core-headercf6b9e7404c64067bdfef9b79e9eb287",
              "data-platform": v?.[i]?.platform ?? null
            })]
          })
        }), Va),
        hs = {
          pillBtn: "rockstargames-modules-core-headerb03cc125f63972f13ae84119af852edc",
          selected: "rockstargames-modules-core-headerfbcf46d7ef0b32e64b374eee6e3cda3e",
          promoModule: "rockstargames-modules-core-headera586d11bf592ca821d65db7660518322",
          promoModuleImage: "rockstargames-modules-core-headerccd749d613ceb73aedb825d77d22cd0b",
          gradient: "rockstargames-modules-core-headere4f178a3d1e3dfef8b42f73eabd9919e",
          promoModuleContentContainer: "rockstargames-modules-core-headerd8348a62030f7e2f3c7a53cf67bef0f1",
          left: "rockstargames-modules-core-headere56a5b7d9a696ea8ca340cc9b67998fc",
          right: "rockstargames-modules-core-headerc84d09e0c4466d20792d5a9016a00236",
          promoModuleTextContent: "rockstargames-modules-core-headerbf34746d222495ab8e30cede8de42d71"
        },
        vs = e => {
          let {
            backgroundColor: a,
            brands: t = [],
            description: s = "",
            ctaLabel: r = "Click here",
            ctaLink: i = "https://rockstargames.com",
            gradient: n = !0,
            image: o,
            imageOrientation: d = "right",
            title: l = ""
          } = e;
          const [m, u] = (0, c.useState)(!1), {
            ref: g,
            inView: k
          } = (0, de.cD)({
            threshold: .6
          }), {
            track: p
          } = (0, re.ye)(), _ = {
            "--promo-background": a ?? "var(--black-200)",
            "--promo-image": `url(${B(o)})` ?? 0,
            "--promo-order": "left" === d ? "row" : "row-reverse"
          };
          return (0, c.useEffect)((() => {
            k && !m && (p({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: "promo module",
              element_placement: "promo module"
            }), u(!0))
          }), [k]), (0, f.jsxs)(ta.motion.div, {
            className: hs.promoModule,
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
            ref: g,
            children: [(0, f.jsx)("div", {
              className: [hs.promoModuleImage, n ? hs.gradient : "", "left" === d ? hs.left : hs.right].join(" ")
            }), (0, f.jsxs)("div", {
              className: hs.promoModuleContentContainer,
              children: [(0, f.jsx)(w, {
                brands: t,
                className: hs.promoModuleBrands
              }), (0, f.jsxs)("div", {
                className: hs.promoModuleTextContent,
                children: [l && (0, f.jsx)("h3", {
                  children: l
                }), s && (0, f.jsx)("p", {
                  children: s
                })]
              }), r && (0, f.jsx)(Q, {
                to: i,
                text: r,
                onClick: () => {
                  p({
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
      var xs = t(35784);
      t(40168), t(66316);
      const ys = {
          rating: "rockstargames-modules-core-headera1271bbed316bf567eb67e78d2143808",
          withDescriptors: "rockstargames-modules-core-headercba248edc2520d3f1ad195a8495dc1f8",
          withOutDescriptors: "rockstargames-modules-core-headerff919f7a60b854473b61075a671deb6a",
          text: "rockstargames-modules-core-headerd47cd2b7c7415cb44cddef00b1c9b35f"
        },
        Ns = (0, d.defineMessages)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      (0, T.UN)(t(52884));
      const Ss = va((0, d.withIntl)((e => {
          let {
            descriptors: a = null,
            footer: s = null,
            href: r,
            img: i = null,
            titleSlug: n = null,
            style: o = {},
            className: l
          } = e;
          const [m, u] = (0, c.useState)(!1), {
            inView: k
          } = (0, de.cD)({
            threshold: .6
          }), [p, b] = (0, c.useState)({
            img_rating: i,
            rating_descriptors: a,
            rating_footer: s,
            url_rating: r
          }), {
            track: h
          } = (0, re.ye)(), v = (0, d.useIntl)(), {
            data: x
          } = (0, _.UL)(xs.GameData, {
            variables: {
              titleSlug: n
            },
            skip: !n
          });
          if ((0, c.useEffect)((() => {
              x && b(x?.game)
            }), [x]), (0, c.useEffect)((() => {
              k && !m && p.img_rating && (h({
                event: "page_section_impression",
                event_action: "impression",
                event_category: "page_section",
                event_label: "rating",
                element_placement: "rating"
              }), u(!0))
            }), [k]), !p.img_rating) return null;
          const y = !!p.rating_descriptors;
          return (0, f.jsxs)("div", {
            className: [ys.rating, y ? ys.withDescriptors : ys.withOutDescriptors, l || ""].join(" "),
            style: (0, T.G6)(o),
            children: [(0, f.jsx)(g, {
              to: p.url_rating,
              target: "_blank",
              children: (0, f.jsx)("img", {
                alt: v.formatMessage(Ns.components_ratings_link_alt, {
                  rating: (N = p.img_rating, N.replace(/_/g, " ").split(".")[0].toUpperCase())
                }),
                src: t(7e4)(`./${p.img_rating}`)
              })
            }), y && (0, f.jsxs)("div", {
              className: ys.text,
              children: [(0, f.jsx)("p", {
                className: ys.descriptors,
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
        }), Va)),
        ws = {
          responsiveFlexBox: "rockstargames-modules-core-headercef355ba53827b9ec44655c80b247b2e",
          responsiveFlexItem: "rockstargames-modules-core-headera8f5d10f689c3d40c8378e3ae8a07517",
          responsiveImage: "rockstargames-modules-core-headerbee8268780b292e5bc0da0b497e2c28f"
        },
        js = e => {
          let {
            children: a,
            className: t,
            style: s
          } = e;
          return (0, f.jsx)("div", {
            className: [ws.responsiveFlexBox, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: a
          })
        },
        Cs = {
          responsiveFlexItem: "rockstargames-modules-core-headerae579f6183cf73c897e68c8aae5c9d9d"
        },
        Is = e => {
          let {
            children: a,
            className: t,
            style: s
          } = e;
          return (0, f.jsx)("div", {
            className: [Cs.responsiveFlexItem, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: a
          })
        },
        Ts = {
          responsiveGridBox: "rockstargames-modules-core-headera28c0b7a44e1a2d5fb257161ce36a24f",
          responsiveGridItem: "rockstargames-modules-core-headerbeddf36313a28976090b5a8b04d2594a"
        },
        Ms = e => {
          let {
            children: a,
            cols: t,
            className: s,
            rows: r,
            style: i
          } = e;
          const n = i ? {
            ...i
          } : {};
          return void 0 !== t && (n.gridTemplateColumns = `repeat(${t}, 1fr)`), void 0 !== r && (n.gridTemplateRows = `repeat(${r}, 1fr)`), (0, f.jsx)("div", {
            className: [Ts.responsiveGridBox, void 0 !== s ? s : ""].join(" "),
            style: n,
            children: a
          })
        },
        Es = {
          responsiveGridBox: "rockstargames-modules-core-headera39e7c7140ada0ab28537c8c901e816f",
          responsiveGridItem: "rockstargames-modules-core-headerbe7a0966e2f0457c1172ac9da99020c6"
        },
        Ls = e => {
          let {
            children: a,
            className: t,
            style: s
          } = e;
          return (0, f.jsx)("div", {
            className: [Es.responsiveGridItem, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: a
          })
        },
        Vs = {
          responsiveImage: "rockstargames-modules-core-headere31b43dce2e720669fb90bf539d22197"
        },
        Ds = e => {
          let {
            src: a,
            className: t = "",
            animate: s,
            ariaLabel: r,
            style: i = {}
          } = e;
          const [n, o] = (0, T.kJ)(a);
          return n ? (i.backgroundImage = `url(${a})`, (0, f.jsx)("div", {
            role: "img",
            "aria-label": r ?? "R* Games",
            className: [Vs.responsiveImage, s ? Vs.animateBox : "", t].join(" "),
            style: {
              ...i,
              "--aspect-ratio": o.width / o.height
            }
          })) : null
        },
        Ps = {
          responsiveSection: "rockstargames-modules-core-headerfb7094e43a166c19080ccfe92ed7420d",
          maxWidth: "rockstargames-modules-core-headerbdc35dbaa55c59ddd2831fd3ac05c5a7"
        },
        Bs = e => {
          let {
            children: a,
            className: t,
            style: s,
            maxWidth: r
          } = e;
          return (0, f.jsx)("section", {
            className: [Ps.responsiveSection, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: r ? (0, f.jsx)("div", {
              className: Ps.maxWidth,
              children: a
            }) : a
          })
        },
        $s = () => (0, f.jsx)(g, {
          className: "rockstargames-modules-core-headerba0c20f78999975dfb8d9cff0de44b34",
          alt: "Rockstar Games Home",
          to: "/"
        }),
        zs = () => {
          const {
            pathname: e
          } = (0, m.useLocation)();
          return (0, c.useEffect)((() => {
            window.scrollTo(0, 0)
          }), [e]), null
        },
        Fs = (0, c.forwardRef)(((e, a) => {
          const {
            threshold: t,
            callback: s,
            children: r,
            requireUser: i
          } = e, {
            track: n
          } = (0, re.ye)(i), [o, d] = (0, c.useState)(a?.current);
          return (0, c.useEffect)((() => {
            a?.current && d(a.current)
          }), [a]), ((e, a, t) => {
            const [s, r] = (0, c.useState)({
              scrollDepths: e,
              scrollY: 0
            }), {
              scrollDepths: i,
              scrollY: n
            } = s;
            (0, c.useEffect)((() => {
              "undefined" != typeof window && 0 !== window.pageYOffset && r((e => ({
                ...e,
                scrollY: window.pageYOffset
              })))
            }), []), (0, c.useEffect)((() => {
              r({
                scrollDepths: e,
                scrollY: 0
              })
            }), [window.location.pathname]);
            const o = (0, c.useCallback)((() => {
              const e = document.documentElement,
                n = document.body,
                c = t?.scrollTop || e.scrollTop || n.scrollTop,
                d = t?.scrollHeight || e.scrollHeight || n.scrollHeight,
                {
                  clientHeight: l
                } = e,
                m = c / (d - l) * 100;
              if (i) {
                const e = Math.min(...i, d);
                if (m >= e) {
                  const s = i.filter((a => a !== e));
                  0 === s.length && (t ?? window).removeEventListener("scroll", o), a && a({
                    scrollY: e,
                    scrollPercent: m,
                    remainingDepths: s
                  }), r({
                    scrollY: e,
                    scrollDepths: s
                  })
                }
              } else r({
                ...s,
                scrollY: m
              })
            }), [i, t, a]);
            (0, c.useEffect)((() => {
              if ("undefined" == typeof window) return;
              const e = t ?? window;
              return e.addEventListener("scroll", o), () => e.removeEventListener("scroll", o)
            }), [o])
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
          }), o), r
        })),
        Os = (0, T.Ux)((e => {
          let {
            t: a
          } = e;
          const [t] = (0, c.useState)(""), s = (0, m.useNavigate)(), r = (0, _.aU)();
          return (0, f.jsxs)("form", {
            action: "#",
            className: "rockstargames-modules-core-headerb82052ce07e004075e77261c373bfc50",
            onSubmit: e => {
              e.preventDefault(), r({
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
        As = {
          skeleton: "rockstargames-modules-core-headerf963a1ae95f7f5ac2c5192c3f357b6dc",
          pulse: "rockstargames-modules-core-headere00ed88d692bbfc1a301dcfc61a077a9",
          gen9Hero: "rockstargames-modules-core-headerdb0b80177710d337d93bddb97b8a7dea"
        },
        Us = e => {
          let {
            skeleton: a
          } = e;
          return a ? (0, f.jsx)("div", {
            className: [As.skeleton, As[a]].join(" ")
          }) : null
        },
        Rs = (0, d.defineMessages)({
          components_track_list_title: {
            id: "components_track_list_title",
            defaultMessage: "Tracklist"
          }
        }),
        Hs = {
          bodySmall: "rockstargames-modules-core-headerc048aacaedc7fb642f38c7f163c193e3"
        },
        Gs = e => {
          let {
            track: a,
            artist: t
          } = e;
          return (0, f.jsxs)("div", {
            className: Hs.track,
            children: [(0, f.jsx)("p", {
              children: a
            }), (0, f.jsx)("p", {
              className: Hs.bodySmall,
              children: t
            })]
          })
        },
        Ws = (0, d.withIntl)((e => {
          let {
            children: a
          } = e;
          return (0, f.jsxs)("div", {
            className: "rockstargames-modules-core-headere6c19f2cdd68a4352e248a8324383aa2",
            children: [(0, f.jsx)("h4", {
              className: "rockstargames-modules-core-headercd3895fbae93ba04f1401487f6e6eddf",
              children: (0, f.jsx)(d.FormattedMessage, {
                ...Rs.components_track_list_title
              })
            }), (0, f.jsx)("div", {
              className: "rockstargames-modules-core-headeref0cde8b15ded961605237d0e8328a9b",
              children: (0, f.jsx)("div", {
                className: "rockstargames-modules-core-headerbdd54186db17d27b3daebc4b9d58e09a",
                children: c.Children.map(c.Children.toArray(a), (e => (0, f.jsx)(Gs, {
                  ...e?.props
                })))
              })
            })]
          })
        }), Va),
        qs = "rockstargames-modules-core-headereca98eb0b5b84a0c9a2e6d952545a2d5",
        Js = "rockstargames-modules-core-headerd3d0b4ecd3bddba96c73f49fcca34ed8",
        Xs = {
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
        Ks = e => {
          let {
            title: a = "thumbnail gallery",
            thumbsPerView: t = 3,
            loop: s = !1,
            navigation: r = !1,
            slideChildren: i = [],
            variants: n = {
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
            track: d
          } = (0, re.ye)(), [l, m] = (0, c.useState)([ba.O4, ba.Hj, ba.eM]), [u, g] = (0, c.useState)(null), [k, p] = (0, c.useState)(null);
          return (0, c.useEffect)((() => {
            const e = [ba.O4, ba.Hj, ba.eM];
            r && e.push(ba._2), m(e)
          }), [r]), (0, c.useEffect)((() => {
            if (!i) return;
            const e = i.map(((e, a) => (0, f.jsx)(Z.Ky, {
              children: e
            }, Symbol(a).toString())));
            p(e)
          }), [i]), k ? (0, f.jsxs)(ta.motion.div, {
            className: "rockstargames-modules-core-headerd4f245838b94234f21463a08a8112910",
            variants: n.parent,
            transition: o.parent,
            initial: "initial",
            animate: "animate",
            children: [(0, f.jsx)(ta.motion.div, {
              className: qs,
              variants: n.main,
              transition: o.main,
              initial: "initial",
              animate: "animate",
              children: (0, f.jsx)(Z.wx, {
                loop: s,
                navigation: r,
                pagination: {
                  clickable: !0
                },
                thumbs: {
                  swiper: u
                },
                modules: l,
                breakpoints: Xs,
                className: qs,
                onSlideNextTransitionEnd: () => {
                  d({
                    event_action: "next",
                    event_category: "carousel",
                    event: "carousel_next",
                    event_label: a?.toLowerCase() ?? ""
                  })
                },
                onSlidePrevTransitionEnd: () => {
                  d({
                    event_action: "previous",
                    event_category: "carousel",
                    event: "carousel_previous",
                    event_label: a?.toLowerCase() ?? ""
                  })
                },
                onSlideChangeTransitionEnd: () => {
                  d({
                    event_action: "swipe",
                    event_category: "carousel",
                    event: "carousel_swipe",
                    event_label: a?.toLowerCase() ?? ""
                  })
                },
                children: k
              })
            }), (0, f.jsx)(ta.motion.div, {
              className: Js,
              variants: n.thumbs,
              transition: o.thumbs,
              initial: "initial",
              animate: "animate",
              children: (0, f.jsx)(Z.wx, {
                threshold: 50,
                onSwiper: g,
                loop: s,
                breakpoints: Xs,
                slidesPerView: t,
                freeMode: !0,
                watchSlidesProgress: !0,
                modules: l,
                className: Js,
                children: k
              })
            })]
          }) : null
        };
      var Qs = t(504);
      const Ys = e => {
          let {
            id: a = null,
            ids: t = null,
            setTitleDataPath: s = null,
            sync: r = !1
          } = e;
          const i = t ?? [a],
            {
              data: n
            } = (0, _.UL)(Qs.TinaModulesInfo, {
              variables: {
                ids: i,
                sync: r
              },
              setTitleDataPath: s,
              skip: !i.length
            });
          return n?.tinaModulesInfo ?? null
        },
        Zs = va((e => {
          let {
            components: a = {},
            id: t = null,
            ids: s = null,
            skeleton: r
          } = e;
          const i = Ys({
            id: t,
            ids: s
          });
          if (!i) return (0, f.jsx)(Us, {
            skeleton: r
          });
          const n = i?.[0]?.tina;
          return n ? (0, f.jsx)(f.Fragment, {
            children: i.map(((e, t) => {
              let {
                tina: s
              } = e;
              return (0, f.jsx)(q, {
                components: a,
                tina: s,
                componentProps: {
                  tinaModulesInfo: i
                }
              }, t)
            }))
          }) : null
        })),
        er = e => {
          let {
            children: a,
            style: t,
            theme: s
          } = e;
          const [r, i] = (0, c.useState)(s);
          return (0, c.useEffect)((() => {
            s && i(s)
          }), [s]), (0, f.jsx)("div", {
            className: "rockstargames-modules-core-headera3cc68ab0d512c3d8835ee9abb7a51c4",
            style: t,
            "data-theme": r,
            children: a
          })
        };
      var ar = t(19168);
      const tr = {
          pillBtn: "rockstargames-modules-core-headerae56f3a5bf16f1160a0cbc040c7611fa",
          selected: "rockstargames-modules-core-headerd7e34a082f54f22035320df51e8b4ed9",
          userVote: "rockstargames-modules-core-headerfd538df1ac730062880ff9ca1292dcc4",
          info: "rockstargames-modules-core-headerdd49c22b2bd842d7e8c11ac45b3a536b",
          voteContent: "rockstargames-modules-core-headereb3c4c0d7629a1182cd138d3d2e6e081",
          loggedOutButtons: "rockstargames-modules-core-headerd00b4195df0f175083f6aa2a7d847d72",
          voteButtons: "rockstargames-modules-core-headerfdd10a481e3da0f8e9511b6a577052e0",
          downVote: "rockstargames-modules-core-headerabdbb2656b0080d66eb4d39b7e1eb38d",
          upVote: "rockstargames-modules-core-headerea25ed07e937e2efdce0b99d076fbbe1",
          voteButtonActive: "rockstargames-modules-core-headerc31731d09d8118c6a82fe6edb193dc50"
        },
        sr = e => {
          let {
            description: a,
            foreign_id: t = document.location.pathname,
            foreign_type: s = "url",
            title: r
          } = e;
          const {
            track: i
          } = (0, re.ye)(), {
            loggedIn: n
          } = (0, re.yi)(), {
            refetch: o
          } = (0, _.UL)(ar.UserGetVote, {
            skip: !0
          }), [d] = (0, _.cQ)(ar.UserCastVote), [l, m] = (0, c.useState)(null), u = (0, c.useCallback)((async e => {
            i({
              event_action: l ? "like" : "dislike",
              event_category: "cta",
              event: "cta_" + (e ? "like" : "dislike"),
              event_label: t
            });
            const a = {
                foreign_id: t,
                foreign_type: s,
                vote: e
              },
              r = await d({
                variables: a
              });
            m(r?.data?.userCastVote?.vote ?? null)
          }), [t, s]);
          return (0, c.useEffect)((() => {
            (async () => {
              if (!n || !t || !s) return;
              const e = await o({
                foreign_id: t,
                foreign_type: s
              });
              m(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [t, s, n]), (0, f.jsx)("div", {
            className: tr.userVote,
            children: (0, f.jsxs)("div", {
              className: tr.voteContent,
              children: [(0, f.jsxs)("div", {
                className: tr.info,
                children: [(0, f.jsx)("h3", {
                  children: r
                }), (0, f.jsx)("p", {
                  children: a
                })]
              }), (0, f.jsxs)("div", {
                className: [tr.voteButtons, n ? "" : tr.loggedOutButtons].join(" "),
                children: [(0, f.jsx)("button", {
                  onClick: () => u(!0),
                  className: [tr.upVote, l ? tr.voteButtonActive : ""].join(" "),
                  type: "button",
                  "aria-label": "Vote up"
                }), (0, f.jsx)("button", {
                  className: [tr.downVote, !1 === l ? tr.voteButtonActive : ""].join(" "),
                  onClick: () => u(!1),
                  type: "button",
                  "aria-label": "Vote down"
                })]
              })]
            })
          })
        },
        rr = {
          carousel: "rockstargames-modules-core-headerd8e71d378f6d4a968e8ac7d621e5f32a",
          text: "rockstargames-modules-core-headera3f73d86b98d36a296bf8f621f1c340f",
          info: "rockstargames-modules-core-headerf46d7fc75c302b1d3f4db01d8572bea8",
          active: "rockstargames-modules-core-headerd26d1267cc02f841fee8a874d679aebd",
          title: "rockstargames-modules-core-headera879dfc151f7cf8da6bf5642b51436bb",
          gameTitle: "rockstargames-modules-core-headerb42d96124219141b4dbb454131b8c37b",
          videoTitle: "rockstargames-modules-core-headerc5ff8983fae65d6a3d7c741360bd3606",
          cta: "rockstargames-modules-core-headere25e320fda75ce4076c9fe68b540a2fa",
          track: "rockstargames-modules-core-headerdd0d39c46df512d3eff8ba48e469af0a",
          disableClick: "rockstargames-modules-core-headerb169e1b67f64de28605dd5056a740584",
          items: "rockstargames-modules-core-headerdddc42d4babcaec339a7c1bd04420e6e",
          dragging: "rockstargames-modules-core-headera7313e3ff4e99b5313f8698890d0dd8c",
          dots: "rockstargames-modules-core-headere1d7433489996eb9fa890d452ebcb042"
        },
        ir = (0, T.au)((e => {
          let {
            locale: a,
            t,
            videos: s
          } = e;
          const {
            setBodyIsScrollable: r
          } = (0, T.Qz)(), [i, n] = (0, c.useState)(0), [o, d] = (0, c.useState)(0), l = (0, c.useRef)(null), m = (0, c.useRef)(null);
          return (0, c.useEffect)((() => {
            if (!l.current || m.current) return;
            const e = new(p())(l.current);
            e.get("press").set({
              time: 0
            }), e.get("tap").set({
              time: 150
            });
            const a = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
              t = () => {
                n(i - 1 < 0 ? 0 : i - 1), d(0)
              },
              o = () => {
                const e = i + 1 >= s.length - 1 ? s.length - 1 : i + 1;
                n(e), d(0)
              },
              c = e => {
                d(e.isFinal ? 0 : e.deltaX), "panleft" !== e.additionalEvent && "panright" !== e.additionalEvent || !m.current?.classList.contains(rr.dragging) || a() && r(!1)
              },
              u = () => {
                a() && r(!0), d(0)
              },
              f = e => {
                "press" === e.type && l.current?.classList.add(`${rr.disableClick}`), "tap" === e.type && (l.current?.classList.remove(`${rr.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
              },
              g = () => {
                a() && r(!0), l.current && l.current.classList.remove(`${rr.disableClick}`)
              },
              k = () => {
                a() && r(!0)
              };
            return m.current.addEventListener("transitionend", k), e.on("swiperight", t), e.on("swipeleft", o), e.on("pan", c), e.on("panend", u), e.on("press tap", f), e.on("pressup", g), () => {
              e.off("swiperight", t), e.off("swipeleft", o), e.off("pan", c), e.off("panend", u), e.off("press tap", f), e.off("pressup", g), m.current && m.current.removeEventListener("transitionend", k), d(0)
            }
          }), [l.current, i]), (0, f.jsxs)("section", {
            className: rr.carousel,
            children: [(0, f.jsx)("div", {
              className: rr.track,
              ref: l,
              children: (0, f.jsx)("div", {
                className: `${rr.items} ${0!==o?rr.dragging:""}`,
                ref: m,
                style: {
                  transform: `translateX(calc(-${100*i}% + ${o}px))`
                },
                children: s.map(((e, a) => (0, f.jsx)(g, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through screencap",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  className: i === a ? rr.active : "",
                  role: "link",
                  title: e.title,
                  tabIndex: i === a ? 0 : -1,
                  children: (0, f.jsx)(mr, {
                    video: e,
                    size: 1280
                  })
                }, e.id)))
              })
            }), (0, f.jsxs)("footer", {
              children: [(0, f.jsx)("div", {
                className: rr.text,
                children: s.map(((e, s) => (0, f.jsx)(g, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through footer",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  role: "link",
                  title: e.title,
                  tabIndex: i === s ? 0 : -1,
                  children: (0, f.jsxs)("div", {
                    className: [rr.info, s === i ? rr.active : ""].join(" "),
                    children: [(0, f.jsxs)("div", {
                      className: rr.title,
                      children: [(0, f.jsx)("div", {
                        className: rr.gameTitle,
                        children: `${e.game.title}${"fr_fr"===a?" ":""}`
                      }), (0, f.jsx)("h2", {
                        className: rr.videoTitle,
                        children: `${e.title}`
                      })]
                    }), (0, f.jsx)(C, {
                      className: rr.cta,
                      children: t("Watch Now")
                    })]
                  })
                }, e.id)))
              }), (0, f.jsx)("div", {
                className: rr.dots,
                children: s.map(((e, a) => (0, f.jsx)("button", {
                  "aria-label": `Slide ${a+1}`,
                  "data-gtm-category": "Marquee",
                  "data-gtm-action": "Dot click",
                  "data-gtm-label": `Dot clicked to ${a}`,
                  onClick: () => n(a),
                  className: i === a ? rr.active : "",
                  type: "button"
                }, e.id)))
              })]
            })]
          })
        })),
        nr = (0, d.defineMessages)({
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
        or = {
          videoList: "rockstargames-modules-core-headera77794780421c410f7ea55ed11ae6340",
          sectionHeader: "rockstargames-modules-core-headered556e2220733d99eae5df36ba41f9c7",
          arrowNav: "rockstargames-modules-core-headerffeb6a2e829d49f94fea4ee7f5a0d2c8",
          items: "rockstargames-modules-core-headerffe2263cdad39631ef304714ba89465d",
          trackWrapper: "rockstargames-modules-core-headercbdef484a85e8f352a06609b394d4da7",
          track: "rockstargames-modules-core-headerf3f263effe27f3c21f2ab822b9ee5dcf",
          dragging: "rockstargames-modules-core-headerc20488bcdf3f23bdf0c6c5b283ae08f4",
          arrow: "rockstargames-modules-core-headerc8012415449630a832011f490b9d2b72",
          previous: "rockstargames-modules-core-headerf30d899a31937a4cf395643951224469",
          next: "rockstargames-modules-core-headerd9d5a85633fc0f0b7f98219d735e6e05",
          disabled: "rockstargames-modules-core-headerc806076a1e3e23c77528ee12e32771a3"
        },
        cr = (0, d.withIntl)((e => {
          let {
            vids: a,
            games: t,
            title: s,
            gameTitleNecessary: r
          } = e;
          const i = (0, d.useIntl)(),
            n = void 0 !== t ? "games" : "videos",
            o = "videos" === n ? a : t.results,
            l = (0, c.useRef)(null),
            [m, u] = (0, c.useState)(0),
            [g, k] = (0, c.useState)(0),
            _ = e => {
              const a = Math.ceil(o.length / m);
              let t = e;
              t < 0 ? t = 0 : t >= a - 1 && (t = a - 1), k(t)
            },
            [b, h] = (0, c.useState)(0);
          let v;
          return (0, c.useEffect)((() => {
            const e = () => {
              const e = e => window.matchMedia(`(max-width: ${e})`).matches;
              let a = 4;
              e("768px") ? a = 1 : e("990px") || e("1440px") ? a = 2 : e("1920px") && (a = 3), u(a)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [m]), (0, c.useEffect)((() => {
            if (l.current) {
              const e = new(p())(l.current),
                a = () => {
                  _(g - 1), h(0)
                },
                t = () => {
                  _(g + 1), h(0)
                },
                s = e => {
                  h(e.isFinal ? 0 : e.deltaX)
                },
                r = () => {
                  h(0)
                };
              return e.on("swiperight", a), e.on("swipeleft", t), e.on("pan", s), e.on("panend", r), () => {
                e.off("swiperight", a), e.off("swipeleft", t), e.off("pan", s), e.off("panend", r), h(0)
              }
            }
            return {}
          }), [l.current, g]), v = "games" === n ? (0, f.jsx)(f.Fragment, {
            children: t.results.map((e => (0, f.jsx)(ka, {
              game: e,
              dontOverrideTo: !0,
              to: `/videos?type=game&gameId=${e.id}`
            }, e.id)))
          }) : (0, f.jsx)(f.Fragment, {
            children: a.map((e => (0, f.jsx)(ur, {
              video: e,
              gameTitleNecessary: r
            }, e.id)))
          }), (0, f.jsxs)("section", {
            className: or.videoList,
            children: [(0, f.jsxs)("h3", {
              className: or.sectionHeader,
              children: [s, (0, f.jsxs)("div", {
                className: or.arrowNav,
                children: [(0, f.jsx)("button", {
                  className: [or.arrow, or.previous, 0 === g ? or.disabled : ""].join(" "),
                  onClick: () => _(g - 1),
                  type: "button",
                  "aria-label": `${0===g?i.formatMessage(nr.disabled_label)+", ":""}${i.formatMessage(nr.previous_button_label)}`
                }), (0, f.jsx)("button", {
                  className: [or.arrow, or.next, g === Math.ceil(o.length / m) - 1 ? or.disabled : ""].join(" "),
                  onClick: () => _(g + 1),
                  type: "button",
                  "aria-label": `${g===Math.ceil(o.length/m)-1?i.formatMessage(nr.disabled_label)+", ":""}${i.formatMessage(nr.next_button_label)}`
                })]
              })]
            }), (0, f.jsx)("div", {
              className: or.items,
              children: (0, f.jsx)("div", {
                className: or.trackWrapper,
                children: (0, f.jsx)("div", {
                  className: [or.track, 0 !== b ? or.dragging : ""].join(" "),
                  ref: l,
                  style: {
                    transform: `translateX(calc(-${100*g}% + ${b}px - (var(--standard-grid-gap) * ${g}))`,
                    gridAutoColumns: `calc(100 / ${m} * 1% - calc(var(--standard-grid-gap) * (${m-1}/${m}))`
                  },
                  children: v
                })
              })
            })]
          })
        }), Va),
        dr = (0, T.Ux)((e => {
          let {
            error: a,
            t,
            domain: s = ""
          } = e;
          console.error({
            error: a
          });
          let r = a?.message ?? t("error-404-new");
          r = t("error-404-new");
          const i = a?.code ?? 398,
            n = (0, c.useRef)(null);
          return (0, c.useEffect)((() => {
            n && n?.current && n.current.focus()
          }), [n]), (0, f.jsxs)("div", {
            className: "rockstargames-modules-core-headerd988ce20c420c26fc5e455279bf94cb9",
            children: [(0, f.jsx)("h3", {
              tabIndex: -1,
              ref: n,
              children: `${r} (${i})`
            }), (0, f.jsx)(g, {
              to: "/",
              children: t("Home")
            }), "clr" !== s && (0, f.jsx)(Os, {})]
          })
        })),
        lr = {
          videoPreview: "rockstargames-modules-core-headerc6739cc628fda235abe2bafeb30ad7cf",
          card: "rockstargames-modules-core-headerec6e68ffa1188155be202dfef3f92829",
          info: "rockstargames-modules-core-headerab8da127fbcdb98f874bc3f1377669a2",
          title: "rockstargames-modules-core-headere84fa4b2b140994c96a13607410d30a3",
          screencap: "rockstargames-modules-core-headera322c3d2275cedd594a3b17800154066",
          screencapLoaded: "rockstargames-modules-core-headerf68c57f5459778024e5a98918ae61ab2",
          gameTitle: "rockstargames-modules-core-headerdebff452a4923aded7de826c081bab5d"
        },
        mr = e => {
          let {
            video: a,
            size: t = 640
          } = e;
          const s = `${a.screencap}?im=Resize=${t}`,
            [r] = (0, T.kJ)(s);
          return (0, f.jsx)("div", {
            className: [lr.screencap, r ? lr.screencapLoaded : ""].join(" "),
            style: {
              background: `url(${s}) center/cover`
            }
          })
        },
        ur = e => {
          let {
            gameTitleNecessary: a = !0,
            openInNewWindow: t = !1,
            video: s,
            size: r,
            toExplicit: i
          } = e;
          const n = i ?? `/videos/${s.id}`,
            o = {
              className: lr.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": n
            },
            c = (0, f.jsxs)("div", {
              className: lr.card,
              children: [(0, f.jsx)(mr, {
                video: s,
                size: r
              }), (0, f.jsxs)("div", {
                className: lr.info,
                children: [a ? (0, f.jsx)("div", {
                  className: lr.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: s.game.title
                  }
                }) : "", (0, f.jsx)("h5", {
                  className: lr.title,
                  dangerouslySetInnerHTML: {
                    __html: s.title
                  }
                })]
              })]
            });
          return t ? (0, f.jsx)("a", {
            href: n,
            target: "_blank",
            ...o,
            children: c
          }) : (0, f.jsx)(g, {
            to: n,
            ...o,
            children: c
          })
        };
      class fr extends c.Component {
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
          return null !== this.state.error.code ? (0, f.jsx)(dr, {
            error: this.state.error
          }) : this.props.children
        }
      }
      const gr = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return function(t) {
            return (0, f.jsx)(fr, {
              header: a,
              children: (0, f.jsx)(e, {
                ...t
              })
            })
          }
        },
        kr = (0, c.forwardRef)(((e, a) => {
          const {
            children: t,
            tag: s = "div"
          } = e, r = ta.m[s];
          return (0, f.jsx)(ta.LazyMotion, {
            features: ta.domAnimation,
            children: (0, f.jsx)(r, {
              ref: a,
              ...e,
              children: t
            })
          })
        })),
        pr = {
          visible: {
            opacity: 1
          },
          hidden: {
            opacity: 0
          }
        },
        _r = {
          ease: "easeIn",
          duration: .4
        },
        br = e => {
          let {
            children: a
          } = e;
          return (0, f.jsx)(ta.motion.div, Object.assign({
            className: "rockstargames-modules-core-headerf0ee4e641f1ac92151be887c9ebb8392",
            variants: pr,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: _r
          }, {
            children: a
          }))
        },
        hr = e => a => (0, f.jsx)(br, {
          children: (0, f.jsx)(e, Object.assign({}, a))
        }),
        vr = {
          visible: {
            opacity: 1,
            y: 0
          },
          hidden: {
            opacity: 0,
            y: 40
          }
        },
        xr = {
          ease: "easeIn",
          duration: .75
        },
        yr = e => {
          let {
            children: a
          } = e;
          return (0, f.jsx)(ta.motion.div, {
            className: "rockstargames-modules-core-headera479a10c5475b17a0564b60fecf98c8b",
            variants: vr,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: xr,
            children: a
          })
        },
        Nr = e => a => (0, f.jsx)(yr, {
          children: (0, f.jsx)(e, {
            ...a
          })
        }),
        Sr = {
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
        wr = {
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
        jr = function() {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "collapsed";
          return wr[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "imageMask"][e]
        };
      var Cr = t(80544);
      const Ir = JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[300,300,0]},"a":{"k":[0,0,0]},"s":{"k":[244,244,100]}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"k":[100,100]},"p":{"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"tm","s":{"k":[{"i":{"x":[0.439],"y":[1.016]},"o":{"x":[0.561],"y":[0.015]},"n":["0p439_1p016_0p561_0p015"],"t":5,"s":[100],"e":[0]},{"t":33.0000013441176}],"ix":1},"e":{"k":[{"i":{"x":[0.439],"y":[1.017]},"o":{"x":[0.561],"y":[0.016]},"n":["0p439_1p017_0p561_0p016"],"t":0,"s":[100],"e":[0]},{"t":30.0000012219251}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"},{"ty":"st","fillEnabled":true,"c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":16},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"}],"ip":0,"op":900.000036657751,"st":0,"bm":0,"sr":1}],"v":"4.5.3","ddd":0,"ip":1.00000004073083,"op":33.0000013441175,"fr":29.9700012207031,"w":600,"h":600}'),
        Tr = JSON.parse('{"v":"5.7.3","fr":60,"ip":0,"op":64,"w":300,"h":300,"nm":"Dot_Loading","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"center","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":10,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":22,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":34,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.667,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"right","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":5,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":17,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":29,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.333,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":12,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":24,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0}],"markers":[]}'),
        Mr = {
          SPINNING: "spinning",
          THREE_DOTS: "threeDots"
        },
        Er = e => {
          let a, {
            type: t = Mr.SPINNING
          } = e;
          switch (t) {
            case Mr.THREE_DOTS:
              a = Tr;
              break;
            case Mr.SPINNING:
            default:
              a = Ir
          }
          return (0, f.jsx)(Cr.c, {
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

      function r(e, a) {
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
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = s[a] || new Set,
          n = new Set,
          o = new Set;
        for (i.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = r(e, a);
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

      function r(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function i(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = s[a] || new Set,
          n = new Set,
          o = new Set;
        for (i.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
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

      function r(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function i(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = s[a] || new Set,
          n = new Set,
          o = new Set;
        for (i.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
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

      function r(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function i(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = s[a] || new Set,
          n = new Set,
          o = new Set;
        for (i.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.UserGetVote = i(a, "UserGetVote"), e.exports.UserCastVote = i(a, "UserCastVote")
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
      var r = {};

      function i(e) {
        return e.filter((function(e) {
          if ("FragmentDefinition" !== e.kind) return !0;
          var a = e.name.value;
          return !r[a] && (r[a] = !0, !0)
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
      s.definitions = s.definitions.concat(i(t(55104).definitions)), s.definitions = s.definitions.concat(i(t(61292).definitions));
      var o = {};

      function c(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      s.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          n(e, a), o[e.name.value] = a
        }
      })), e.exports = s, e.exports.NewswireList = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [c(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var s = o[a] || new Set,
          r = new Set,
          i = new Set;
        for (s.forEach((function(e) {
            i.add(e)
          })); i.size > 0;) {
          var n = i;
          i = new Set, n.forEach((function(e) {
            r.has(e) || (r.add(e), (o[e] || new Set).forEach((function(e) {
              i.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var s = c(e, a);
          s && t.definitions.push(s)
        })), t
      }(s, "NewswireList")
    },
    55104: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "FragmentDefinition",
          name: {
            kind: "Name",
            value: "postFields"
          },
          typeCondition: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "RockstarGames_Newswire_Model_Entity_Post_o"
            }
          },
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
                value: "url"
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
                value: "name_slug"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "created"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "created_formatted"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "primary_tags"
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
                    value: "name"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "secondary_tags"
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
                    value: "name"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "preview_images_parsed"
              },
              arguments: [],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "newswire_block"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "square"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "d16x9"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "_fallback"
                      },
                      arguments: [],
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
          end: 380
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
        body: "fragment postFields on RockstarGames_Newswire_Model_Entity_Post_o {\n    id: id_hash\n    url\n    title\n    name_slug\n    created\n    created_formatted\n    primary_tags {\n        id\n        name\n    }\n    secondary_tags {\n        id\n        name\n    }\n    preview_images_parsed {\n        newswire_block {\n            square\n            d16x9\n            _fallback\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function r(e, a) {
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
      })), e.exports = a, e.exports.postFields = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = s[a] || new Set,
          n = new Set,
          o = new Set;
        for (i.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "postFields")
    },
    61292: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "FragmentDefinition",
          name: {
            kind: "Name",
            value: "paging"
          },
          typeCondition: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "RockstarGames_Cake_Graph_Type_Paging_o"
            }
          },
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "pageCount"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "page"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "count"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "nextPage"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "prevPage"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "perPage"
              },
              arguments: [],
              directives: []
            }]
          }
        }],
        loc: {
          start: 0,
          end: 133
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
        body: "fragment paging on RockstarGames_Cake_Graph_Type_Paging_o {\n    pageCount\n    page\n    count\n    nextPage\n    prevPage\n    perPage\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function r(e, a) {
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
      })), e.exports = a, e.exports.paging = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = s[a] || new Set,
          n = new Set,
          o = new Set;
        for (i.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "paging")
    },
    35784: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "GameData"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "titleSlug"
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
                value: "withMetaTitle"
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
                value: "metaUrl"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            },
            defaultValue: {
              kind: "StringValue",
              value: "/",
              block: !1
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
                  value: "url"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "metaUrl"
                  }
                }
              }],
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
                      value: "withMetaTitle"
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
                value: "game"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "titleSlug"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "titleSlug"
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
                    value: "img_rating"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "rating_descriptors"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "rating_footer"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "url_rating"
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
          end: 398
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
        body: 'query GameData(\n    $titleSlug: String!\n    $locale: String!\n    $withMetaTitle: Boolean = false\n    $metaUrl: String = "/"\n) {\n    meta: metaUrl(locale: $locale, domain: "www", url: $metaUrl)\n        @include(if: $withMetaTitle) {\n        title\n    }\n    game(titleSlug: $titleSlug, locale: $locale) {\n        img_rating\n        rating_descriptors\n        rating_footer\n        url_rating\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function r(e, a) {
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
      })), e.exports = a, e.exports.GameData = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = s[a] || new Set,
          n = new Set,
          o = new Set;
        for (i.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "GameData")
    },
    40168: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "Meta"
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
                value: "url"
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
                  value: "url"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "url"
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
            }]
          }
        }],
        loc: {
          start: 0,
          end: 155
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
        body: 'query Meta($locale: String!, $url: String!, $cache: Boolean = true) {\n    meta: metaUrl(locale: $locale, domain: "www", url: $url) {\n        title\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function r(e, a) {
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
      })), e.exports = a, e.exports.Meta = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = s[a] || new Set,
          n = new Set,
          o = new Set;
        for (i.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "Meta")
    },
    66316: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "VideosList"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "limit"
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
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "videos"
              },
              arguments: [{
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
                  value: "limit"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "limit"
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
                        value: "game"
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
          end: 243
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
        body: "query VideosList($locale: String!, $cache: Boolean = true, $limit: Int) {\n    videos(locale: $locale, limit: $limit) {\n        results {\n            id\n            title\n            game {\n                title\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function r(e, a) {
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
      })), e.exports = a, e.exports.VideosList = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = s[a] || new Set,
          n = new Set,
          o = new Set;
        for (i.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "VideosList")
    },
    76288: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TagList"
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
                value: "context"
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
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "tagList"
              },
              arguments: [{
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
                  value: "context"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "context"
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
                    value: "name"
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
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 131
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
        body: "query TagList($locale: String!, $context: Int) {\n    tagList(locale: $locale, context: $context) {\n        name\n        id\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function r(e, a) {
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
      })), e.exports = a, e.exports.TagList = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = s[a] || new Set,
          n = new Set,
          o = new Set;
        for (i.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "TagList")
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

      function r(e) {
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 13892
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

      function r(e) {
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 52884
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

      function r(e) {
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 7e4
    },
    6572: (e, a, t) => {
      var s = {
        "./bounty.png": 30752,
        "./collector.png": 40056,
        "./moonshiner.png": 41444,
        "./naturalist.png": 73268,
        "./trader.png": 74688
      };

      function r(e) {
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
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
//# sourceMappingURL=16e3019a222425954417f888bdb940c3.js.map