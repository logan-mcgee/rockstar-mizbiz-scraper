! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "f192f45d-1bfb-4ebb-b894-1c88aceafb21", e._sentryDebugIdIdentifier = "sentry-dbid-f192f45d-1bfb-4ebb-b894-1c88aceafb21")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "90b9af281bd1b5c2955354a97f6fab1985234888",
  packageName: "@rockstargames/sites-gta-tv",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "90b9af281bd1b5c2955354a97f6fab1985234888"
}, (self.webpackChunk_rockstargames_sites_gta_tv = self.webpackChunk_rockstargames_sites_gta_tv || []).push([
  [644], {
    7212: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        A: () => T,
        AudioPlayer: () => D,
        Badge: () => A,
        Brands: () => O,
        Button: () => R,
        ButtonGroup: () => X,
        CalloutSection: () => ue,
        Carousel: () => ee,
        ConditionalBlock: () => ne,
        CookieAB: () => be,
        CountryInputField: () => ve,
        Cta: () => je,
        DescriptionArea: () => Oe,
        DiscountsBadge: () => Ue,
        DotLoader: () => qe,
        Dropdown: () => Ye,
        Embed: () => ea,
        ExpandingPlatformButton: () => la,
        FadeInContent: () => ma,
        GameCard: () => s,
        GameSiteHeader: () => pa,
        Gen9Button: () => q,
        Gen9CoreCarousel: () => xa,
        Grid: () => Ze,
        HTMLElement: () => Ea,
        Hero: () => Ta,
        HookStore: () => se,
        ImageWithBadge: () => Fa,
        LanguageSelector: () => $a,
        LayeredImage: () => Aa,
        LoadingAnimation: () => zi,
        MultiSourceImage: () => Me,
        NewswireBlocks: () => et,
        NewswireCard: () => qa,
        NewswireList: () => Ya,
        NewswireRelated: () => Za,
        NewswireTag: () => Ua,
        OrderedList: () => st,
        PackList: () => mt,
        PackListMenu: () => jt,
        Paging: () => Ct,
        ParallaxCacheBuster: () => Tt,
        ParallaxInnerLayer: () => Et,
        ParallaxOuterLayer: () => zt,
        ParallaxWrapper: () => Lt,
        ProfileSwitcher: () => i,
        PromoModule: () => hs,
        Rating: () => js,
        ResponsiveFlexBox: () => ws,
        ResponsiveFlexItem: () => Is,
        ResponsiveGridBox: () => Ms,
        ResponsiveGridItem: () => Es,
        ResponsiveImg: () => zs,
        ResponsiveSection: () => $s,
        RockstarLogo: () => Vs,
        ScrollToTop: () => Ds,
        ScrollTracker: () => As,
        SearchBox: () => Os,
        Separator: () => Ve,
        Skeleton: () => Rs,
        SrcsetImage: () => Ga,
        TextFit: () => Re,
        ThumbsGallery: () => Ys,
        TinaModuleFetchNRender: () => Js,
        TinaWrapper: () => ei,
        TrackList: () => Ws,
        UnorderedList: () => Pe,
        UserVote: () => si,
        VideoCard: () => r,
        VideoCarousel: () => ri,
        VideoList: () => oi,
        Wasted: () => li,
        framer: () => c,
        useTinaModuleFetchByIds: () => Zs,
        withSearchbarErrorBoundary: () => ui,
        withSimpleErrorBoundary: () => ba
      });
      var s = {};
      t.r(s), t.d(s, {
        Art: () => fa,
        Link: () => ua
      });
      var i = {};
      t.r(i), t.d(i, {
        CharacterCard: () => At,
        Menu: () => _s,
        MenuButton: () => vs
      });
      var r = {};
      t.r(r), t.d(r, {
        Art: () => mi,
        Link: () => gi
      });
      var n = {};
      t.r(n), t.d(n, {
        getVariant: () => Ti,
        transitions: () => Ci,
        variants: () => Ii
      });
      var c = {};
      t.r(c), t.d(c, {
        Animations: () => n,
        LiteMotion: () => vi,
        withFadeIn: () => yi,
        withFadeUp: () => wi
      });
      var o = t(1664),
        l = t(5052),
        d = t(3832),
        m = t(5688),
        g = t(2936);
      const f = "www",
        u = "socialClub",
        _ = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        p = () => {
          let e;
          const {
            location: a
          } = window, t = a.hostname.substring(0, a.hostname.indexOf(".rockstargames.com")), s = _.findIndex((a => Object.entries(a.sites).findIndex((a => {
            let [s, i] = a;
            return i === t && (e = {
              site: s,
              subDomain: i
            }, !0)
          })) >= 0)), i = _[s >= 0 ? s : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...i,
            currentSite: e
          }
        },
        k = (e, a) => {
          e && a ? document.cookie = `${e}=${a}; domain=${v()}; path=/;` : console.log(`Couldn't set cookie (${e}) to value (${a})`)
        },
        v = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        b = [{
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
        h = b,
        x = b[1],
        y = () => {
          const {
            location: e
          } = window, a = p(), t = (e => {
            const a = h.map((e => e.subdomaincom)),
              t = e.pathname.substring(1).split("/"),
              s = "detect-locals" === t[0] ? 1 : 0;
            return -1 !== a.indexOf(t[s]) ? t[s] : null
          })(e), s = (e => {
            const a = e.search.substring(1).split("&").find((e => e.startsWith("lang")));
            return a?.split("=")[1]
          })(e), i = x, [r, n] = function(e, a) {
            let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const s = document.cookie.split("; "),
              i = `${e}=`,
              r = s.find((e => e.startsWith(i))),
              n = r?.substring(i.length, r.length);
            return n && !t || k(e, a), [n, (c = e, e => {
              k(c, e)
            })];
            var c
          }(`rockstarweb_lang.${a.cookieIdentifier}`, t ?? void 0);
          let c = i;
          return c = a.currentSite?.site === f ? h.find((e => e.subdomaincom === s)) || h.find((e => e.subdomaincom === t)) || i : h.find((e => e.iso === r)) || i, [c, n]
        };
      var N = t(5240);
      const j = e => {
        let {
          locales: a,
          lang: t,
          children: s
        } = e;
        const i = (0, o.useMemo)((() => function(e) {
            let [a, t] = e.split(/[-_]/);
            return t = t?.toLowerCase(), "cn" === t && (t = "hans"), a && t || (a = "en", t = "us"), [a, t]
          }(t)), [t]),
          r = (0, o.useMemo)((() => function(e, a) {
            return e?.[a] ?? {}
          }(a, i[1])), [t, a]);
        return (0, N.jsx)(g.c, {
          messages: r,
          locale: i[0],
          defaultLocale: "en",
          children: s
        }, i[0])
      };

      function S(e, a) {
        return t => {
          const [{
            iso: s
          }] = y();
          return (0, N.jsx)(j, {
            locales: a,
            lang: s,
            children: (0, N.jsx)(e, {
              ...t
            })
          })
        }
      }
      t(3061);
      const w = (0, l.Os)({
        aria_label_open_new_window: {
          id: "aria_label_open_new_window",
          defaultMessage: "(Opens in a new window)"
        }
      });
      var C = t(7013);
      const I = "rockstargames-sites-gta-tvff481c537a56a6fcdb1be85dfbc8944e",
        T = e => {
          let {
            children: a,
            to: t = "#",
            alt: s = "",
            autoBlank: i = !1,
            onClick: r = (() => {}),
            ...n
          } = e;
          const c = (0, m.c)(),
            o = !/^(https?|mailto):/i.test(t),
            l = /^#/.test(t),
            d = n?.target ?? (i ? "_blank" : "_self");
          let {
            t: g,
            ...f
          } = n, u = "";
          if ("aria-label" in f && f["aria-label"] && (u = "_blank" === d ? `${f["aria-label"]} ${c.formatMessage(w.aria_label_open_new_window)}` : f["aria-label"]), l) {
            const e = e => {
              e.preventDefault(), document?.querySelector(`[id='${t.replace("#","")}']`)?.scrollIntoView({
                behavior: "smooth",
                block: "center"
              }), r && r(e)
            };
            return (0, N.jsxs)("a", {
              title: s,
              href: t,
              onClick: e,
              ...f,
              "aria-label": u,
              children: [a, "_blank" === d && !u && (0, N.jsx)("span", {
                className: I,
                children: c.formatMessage(w.aria_label_open_new_window)
              })]
            })
          }
          if (o) return (0, N.jsxs)(C.NavLink, {
            title: s,
            to: t,
            onClick: e => r(e),
            ...f,
            "aria-label": u,
            children: [a, "_blank" === d && !u && (0, N.jsx)("span", {
              className: I,
              children: c.formatMessage(w.aria_label_open_new_window)
            })]
          });
          const _ = Object.keys(f).filter((e => !["activeClassName", "key", "end"].includes(e))).reduce(((e, a) => ({
            ...e,
            [a]: n[a]
          })), {});
          return "function" == typeof _?.className && delete _.className, (0, N.jsxs)("a", {
            href: t,
            title: s,
            onClick: e => r(e),
            target: d,
            ..._,
            "aria-label": u,
            children: [a, "_blank" === d && !u && (0, N.jsx)("span", {
              className: I,
              children: c.formatMessage(w.aria_label_open_new_window)
            })]
          })
        };
      var M = t(5772),
        L = t.n(M),
        E = t(3052),
        B = t(48);
      const z = {
          player: "rockstargames-sites-gta-tvbb43df423657efcc0f1f38630a24e5e8",
          fixedToBottom: "rockstargames-sites-gta-tve1f497e3ec34c2fd721b124969e27dd5",
          tracksOpen: "rockstargames-sites-gta-tve8f2736f0ae21a56045104071a7a9fd7",
          tracks: "rockstargames-sites-gta-tvea84096a931648765b1db46f708f70aa",
          iconBurger: "rockstargames-sites-gta-tvb91aad66a2102668715c5ddaaecede2e",
          trackList: "rockstargames-sites-gta-tvc44536ca7b7fa7236e86c65ae309057e",
          trackActive: "rockstargames-sites-gta-tvac7826f934fc777f58017b1a5752419a",
          trackTitle: "rockstargames-sites-gta-tvaafc522e642572d5ff93c7408b941829",
          trackIndex: "rockstargames-sites-gta-tvb880baa4707c71eb543f905816d8e952",
          controls: "rockstargames-sites-gta-tvff92c8eddfc0a0fa7bc7f444973e4f28",
          controlsCurrentBg: "rockstargames-sites-gta-tva81d9465f14d65e8e20800d7b25f77d9",
          controlsCurrentBgVisible: "rockstargames-sites-gta-tvc87bd14d2bbc9248d9c197b77454f345",
          controlsTrack: "rockstargames-sites-gta-tvc23bf574089d1af93750f6af8ebb489f",
          controlsTrackTitle: "rockstargames-sites-gta-tve4b77d29e904f9928cca1de93f5c7745",
          controlsTrackAnimating: "rockstargames-sites-gta-tvba49949a9cd8c22385708f267c625029",
          scrollText: "rockstargames-sites-gta-tvfd9c80e5afaa1ed38ce85f2c3d70eae4",
          controlsTrackArtist: "rockstargames-sites-gta-tvc93c1e5399d9fd5e96ca246fdbfb307b",
          controlsTrackBurger: "rockstargames-sites-gta-tvb4e1a16e3460b40c1aacd92afe219856",
          controlsButtons: "rockstargames-sites-gta-tvd136125994c1d0db1449fce51af559ca",
          controlsScrub: "rockstargames-sites-gta-tvd3d935648408f71928bd49d2f7c5a9ff",
          controlsPlayPause: "rockstargames-sites-gta-tvf5de7526c8cee98bdd7363fd7f2cf8ae",
          controlsPlayPausePlaying: "rockstargames-sites-gta-tvefb6194f0df966e6c8c759937d2fb826",
          controlsNextTrack: "rockstargames-sites-gta-tvf286e0ce01c5401e56dd579b076f1aae",
          controlsPrevTrack: "rockstargames-sites-gta-tva56bb7cb4b0e2de481777d1f09c3f2f2",
          controlsScrubTrack: "rockstargames-sites-gta-tvb8f38f45353fa54fcb6f9e2a3d0d5a85"
        },
        P = e => {
          let {
            src: a
          } = e;
          return (0, N.jsx)("div", {
            className: z.cover,
            style: {
              background: `url(${a}) center/cover`
            }
          })
        },
        $ = e => {
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
            f = (0, o.useRef)(null),
            u = (0, o.useRef)(null),
            [_, p] = (0, o.useState)(null),
            [k, v] = (0, o.useState)(!1),
            b = e => {
              const a = new Date(1e3 * e),
                t = a.getUTCMinutes(),
                s = a.getSeconds();
              return `${t.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`
            };
          return (0, o.useEffect)((() => {
            if (!f.current || !u.current) return;
            const e = () => {
              u.current && f.current && p(u.current.clientWidth > f.current.clientWidth)
            };
            return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e)
          }), [u, f, a]), (0, o.useEffect)((() => {
            if (!g.current || !a?.duration) return;
            let e = null;
            const t = new(L())(g.current),
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
            (t || !isNaN(e) && 0 !== e) && v(!0)
          }), [t, s?.currentTime]), (0, N.jsxs)("div", {
            className: z.controls,
            style: {
              "--track-color": c.color,
              "--track-mix-blend-mode": c.mix_blend_mode,
              "--current-pct": a.current / a.duration
            },
            children: [(0, N.jsx)("div", {
              className: [z.controlsCurrentBg, k ? z.controlsCurrentBgVisible : ""].join(" ")
            }), (0, N.jsx)("div", {
              className: z.controlsTrack,
              ref: f,
              children: (0, N.jsx)("span", {
                className: [z.controlsTrackTitle, _ ? z.controlsTrackAnimating : ""].join(" "),
                ref: u,
                children: c.title
              })
            }), (0, N.jsxs)("div", {
              className: z.controlsButtons,
              children: [(0, N.jsx)("div", {
                className: z.controlsPrevTrack,
                onClick: () => {
                  d && (l(d[0]), m(!0), i(!0))
                }
              }), (0, N.jsx)("div", {
                className: [z.controlsPlayPause, t ? z.controlsPlayPausePlaying : ""].join(" "),
                onClick: () => {
                  i(!t)
                }
              }), (0, N.jsx)("div", {
                className: z.controlsNextTrack,
                onClick: () => {
                  d && (l(d[1]), m(!0), i(!0))
                }
              })]
            }), (0, N.jsx)("div", {
              active: r ? "" : null,
              className: z.controlsTrackBurger,
              children: (0, N.jsx)("div", {
                className: z.iconBurger,
                onClick: () => {
                  n(!r)
                }
              })
            }), (0, N.jsxs)("div", {
              className: z.controlsScrub,
              children: [(0, N.jsx)("span", {
                children: b(a.current)
              }), (0, N.jsx)("div", {
                className: z.controlsScrubTrack,
                ref: g
              }), (0, N.jsx)("span", {
                children: b(a.duration)
              })]
            })]
          })
        },
        V = e => {
          let {
            tracks: a,
            trackId: t,
            setTrackId: s,
            tracksOpen: i,
            setTracksOpen: r,
            setPlaying: n,
            setAutoNext: c
          } = e;
          return (0, N.jsxs)("div", {
            className: z.tracks,
            children: [(0, N.jsx)("h4", {
              children: "Tracks"
            }), (0, N.jsx)("div", {
              className: z.trackBurger,
              onClick: () => {
                r(!i)
              }
            }), (0, N.jsx)("div", {
              className: z.trackList,
              children: a.map(((e, a) => (0, N.jsxs)("a", {
                style: {
                  "--highlight-color": e.color
                },
                className: t === e.id ? z.trackActive : "",
                onClick: () => {
                  s(e.id), n(!0), c(!0)
                },
                children: [(0, N.jsx)("span", {
                  className: z.trackIndex,
                  children: String(a + 1).padStart(2, "0")
                }), (0, N.jsx)("span", {
                  className: z.trackTitle,
                  children: e.title
                }), (0, N.jsx)("span", {
                  className: z.trackTime,
                  children: e.duration
                })]
              }, e.id)))
            })]
          })
        },
        D = e => {
          let {
            id: a,
            className: t = ""
          } = e;
          const {
            data: s
          } = (0, E.useQuery)(B.GetAudioAlbum, {
            variables: {
              id: a
            }
          }), [i, r] = (0, o.useState)(), [n, c] = (0, o.useState)(), [l, d] = (0, o.useState)(), [m, g] = (0, o.useState)(!1), [f, u] = (0, o.useState)(!1), [_, p] = (0, o.useState)(new HTMLAudioElement), [k, v] = (0, o.useState)({
            current: 0,
            duration: 0
          }), [b, h] = (0, o.useState)(!0);
          return (0, o.useEffect)((() => {
            const e = "audio",
              a = a => {
                a?.data?.rockstarAudioPlayerPlayTrackId && (c(a.data.rockstarAudioPlayerPlayTrackId), h(!1), u(!0)), f && a?.data?.attentionBlurredElsewhere && a?.data?.from !== e && u(!1)
              };
            return f && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: e
            }), window.addEventListener("message", a, !1), () => window.removeEventListener("message", a, !1)
          }), [f]), (0, o.useEffect)((() => {
            if (!_) return;
            const e = () => {
                isNaN(_.duration) || v({
                  duration: _?.duration ?? 0,
                  current: _?.currentTime ?? 0
                })
              },
              a = () => {
                b && i && c(i[1])
              };
            return _.addEventListener("loadedmetadata", e), _.addEventListener("timeupdate", e), _.addEventListener("ended", a), () => {
              _.removeEventListener("loadedmetadata", e), _.removeEventListener("timeupdate", e), _.removeEventListener("ended", a)
            }
          }), [_, i, b]), (0, o.useEffect)((() => {
            f && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: "audio"
            })
          }), [f]), (0, o.useEffect)((() => {
            _ && (f ? _.play() : _.pause(), g(!1))
          }), [f, _, l?.id]), (0, o.useEffect)((() => {
            if (!n) return;
            const {
              tracks: e
            } = s.audioAlbum, a = s.audioAlbum.tracks.findIndex((e => e.id === n));
            r([e[a - 1]?.id ?? e[e.length - 1].id, e[a + 1]?.id ?? e[0].id]), d(e[a])
          }), [n]), (0, o.useEffect)((() => {
            s && c(s.audioAlbum.tracks[0].id)
          }), [s]), l ? (0, N.jsxs)("div", {
            className: [z.player, z[t], m ? z.tracksOpen : ""].join(" "),
            children: [(0, N.jsx)("audio", {
              ref: e => {
                p(e)
              },
              src: l.mp3_src
            }), (0, N.jsx)(V, {
              tracks: s.audioAlbum.tracks,
              setTrackId: c,
              trackId: n,
              tracksOpen: m,
              setTracksOpen: g,
              setPlaying: u,
              setAutoNext: h
            }), (0, N.jsx)(P, {
              src: l.cover_src
            }), (0, N.jsx)($, {
              setTrackId: c,
              trackBounds: i,
              tracksOpen: m,
              setTracksOpen: g,
              playing: f,
              setPlaying: u,
              timing: k,
              trackData: l,
              audioRef: _,
              setAutoNext: h
            })]
          }) : null
        },
        A = e => {
          let {
            text: a,
            style: t
          } = e;
          return (0, N.jsx)("div", {
            className: "rockstargames-sites-gta-tvb61bd7f274fd6d93c4bf33a9284b6b67",
            style: t,
            children: a
          })
        },
        O = e => {
          let {
            brands: a = []
          } = e;
          return a.length ? (0, N.jsx)("div", {
            className: "rockstargames-sites-gta-tvcde08e212f23b312d5afca7f2ea1105c",
            children: a.map(((e, a) => {
              let {
                brand: t
              } = e;
              return (0, N.jsx)("div", {
                className: "rockstargames-sites-gta-tvc894fe869384587702b5370da072be86",
                "data-brand": t
              }, a)
            }))
          }) : null
        },
        F = {
          button: "rockstargames-sites-gta-tve056494c33cff1fe89431f279fdb6b9a",
          secondary: "rockstargames-sites-gta-tvd340cf27f380a4347994e59544432eb3"
        },
        R = e => {
          let {
            className: a = "",
            children: t,
            context: s = "",
            to: i,
            onClick: r,
            ...n
          } = e;
          const c = [F.button, F[s], a].join(" ");
          return i ? (0, N.jsx)(T, {
            ...n,
            to: i,
            className: c,
            onClick: r ? () => r() : () => {},
            children: t
          }) : (0, N.jsx)("button", {
            ...n,
            type: "button",
            className: c,
            onClick: r ? () => r() : () => {},
            children: t
          })
        };
      var G = t(1740);
      const H = {
          pillBtn: "rockstargames-sites-gta-tvb59962d0e68ccd73b5ee2e571528d469",
          selected: "rockstargames-sites-gta-tvf5c57dad202e0d6ff855d5a4aca2c804",
          plusButton: "rockstargames-sites-gta-tvcffaf489342637258d28f9b3b718836a",
          small: "rockstargames-sites-gta-tvb8abf927f0ba0af0d8ac0e9c77690d34",
          btnText: "rockstargames-sites-gta-tve6e56461bfc2e426c4abc5451cd17284",
          btnTexticon: "rockstargames-sites-gta-tvcef9f9ce913d167a1fe2e7118a407cdd",
          whiteBtn: "rockstargames-sites-gta-tvb257e0629b9f8e101791d7a948ed15be",
          blackBtn: "rockstargames-sites-gta-tvcb03bccaee79394858682d2ce4d08253",
          transparentBtn: "rockstargames-sites-gta-tvd0460159a17533d4d23686d7dca76794",
          iconBtn: "rockstargames-sites-gta-tvac61186c3c22346c9a4ee2cd2820d341",
          link: "rockstargames-sites-gta-tvc5920e56149b82f20f4db2ad9d397495",
          xboxone: "rockstargames-sites-gta-tva7057f2e6d398341f57bc462716d0508",
          xboxseriesxs: "rockstargames-sites-gta-tva693ab5879f34d7dea1737d3172ed4e4",
          ps4: "rockstargames-sites-gta-tva029ff88fc9aef470aaeef8053f90436",
          ps5: "rockstargames-sites-gta-tve25638751cf3e7267db23c6a401fcc36",
          pc: "rockstargames-sites-gta-tve03d92653f19a7ae3c4b3d5137bc9909"
        },
        U = e => {
          let {
            children: a,
            className: t,
            onClick: s,
            style: i
          } = e;
          return (0, N.jsx)("button", {
            className: t,
            onClick: s ? () => s() : () => {},
            style: i,
            type: "button",
            children: a
          })
        },
        W = e => {
          let {
            children: a,
            className: t,
            onClick: s,
            style: i,
            to: r
          } = e;
          return (0, N.jsx)(C.NavLink, {
            className: t,
            onClick: s ? () => s() : () => {},
            style: i,
            to: r,
            children: a
          })
        },
        q = e => {
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
          const f = [H.plusButton, H[g] ?? "", H[l] ?? "", H[s] ?? "", t].join(" "),
            u = {
              "--hvr-color": a ?? n,
              "--hvr-bg-color": n ?? a,
              "--hvr-border-color": a ?? n
            },
            _ = (0, N.jsxs)(N.Fragment, {
              children: [r ? (0, N.jsx)("img", {
                src: r,
                alt: ""
              }) : "", (0, N.jsxs)("div", {
                className: H.btnText,
                icon: i,
                children: [d, o ? (0, N.jsx)("span", {
                  children: o
                }) : ""]
              })]
            });
          if (m) {
            if (m.startsWith("http")) {
              const e = m.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, N.jsx)("span", {
                onClick: c ? () => c() : () => {},
                onKeyDown: c,
                className: f,
                role: "button",
                tabIndex: 0,
                children: (0, N.jsx)("a", {
                  href: m,
                  target: e,
                  children: _
                })
              })
            }
            return (0, N.jsx)(W, {
              className: f,
              onClick: c ? () => c() : () => {},
              style: u,
              to: m,
              children: _
            })
          }
          return (0, N.jsx)(U, {
            className: f,
            onClick: c ? () => c() : () => {},
            style: u,
            children: _
          })
        },
        X = e => {
          let {
            buttons: a = [],
            className: t
          } = e;
          return a.length ? (0, N.jsx)("div", {
            className: (0, G.classList)("rockstargames-sites-gta-tvb411a36e7fd12ab75861fe560b31b206", t),
            children: a.map(((e, a) => {
              let {
                icon: t,
                title: s,
                to: i
              } = e;
              return s ? (0, N.jsx)(q, {
                icon: t,
                text: s,
                to: i
              }, a) : ""
            }))
          }) : null
        };
      var K = t(8111),
        Y = t(2231);
      const Q = {
          deprecatedCarousel: "rockstargames-sites-gta-tveb5df7b3d51dffc4d993ca7abce4e944",
          "swiper-scrollbar-disabled": "rockstargames-sites-gta-tveb2dda6769a7c20a31e7996ff62e41f8",
          "swiper-horizontal": "rockstargames-sites-gta-tvb11093de3cb4f18ea2d59b8d4d1db44c",
          "swiper-vertical": "rockstargames-sites-gta-tvfa3209fdf995734a1aeeac2cc72cc1ea",
          renderedWithChildren: "rockstargames-sites-gta-tvc9f15e74b3166cd0db40501fcc70e868",
          panorama: "rockstargames-sites-gta-tvf2a7e77af5dff445e978fd575a567508",
          img: "rockstargames-sites-gta-tvf1d3d54c266a20fa0cbe9c342b0d98da",
          hideMobile: "rockstargames-sites-gta-tve70d5eaa273e4a0a40ee62a308491810",
          hideLarge: "rockstargames-sites-gta-tvbace2af6c822ba7b36b53923629cba0f",
          imageAreaBg: "rockstargames-sites-gta-tvf4bb071e6dad07c75b78ea21269ca662",
          infinite_false: "rockstargames-sites-gta-tvd6c3d175b843462bf23a1a1f3af6b095",
          track: "rockstargames-sites-gta-tvb5ff781c4a96bf031e8e7f5e0c9af395",
          perico: "rockstargames-sites-gta-tvbb97d296d17b7e801c6c0719a79463dd",
          dotsSlide: "rockstargames-sites-gta-tvdd55a6f93254ed13542089c6f36e0048",
          siblings: "rockstargames-sites-gta-tva59cf4385528c371a13be9962b67131b",
          active: "rockstargames-sites-gta-tvaa5e195e0c7c6336929553314d52a896",
          "swiper-preloader-spin": "rockstargames-sites-gta-tvc05cc0faa8239c85cdc7d53c7e120e8e"
        },
        Z = e => {
          let {
            item: a
          } = e;
          return (0, N.jsxs)("div", {
            children: [(0, N.jsx)(Fa, {
              image: a?.image,
              badge: a?.badge ?? a?.image?.badge,
              badgeType: "badge3",
              role: a?.role ?? a?.image?.role,
              splitter: a?.splitter ?? a?.image?.splitter,
              type: a?.type,
              ariaLabel: a?.image?.ariaLabel ?? a.description,
              style: a?.style,
              className: (0, G.classList)(Q.img, a?.className)
            }), (a?.title || a?.description) && (0, N.jsx)(Oe, {
              item: a
            })]
          })
        },
        J = e => {
          let {
            current: a,
            total: t
          } = e;
          return (0, N.jsx)("div", {
            className: "swiper-scrollbar",
            style: {
              "--current-slide": a,
              "--total-slides": t
            },
            children: (0, N.jsx)("div", {
              className: "swiper-scrollbar-drag"
            })
          })
        },
        ee = e => {
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
          const [g, f] = (0, o.useState)(0), u = (0, o.useMemo)((() => a && Array.isArray(a) ? a.map((() => (0, Y.c)())) : null), [a]);
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
          return (0, N.jsxs)("div", {
            className: (0, G.classList)(Q.deprecatedCarousel, Q[n], Q[`infinite_${!i}`], a ? Q.renderedWithChildren : "", r),
            style: s,
            children: [(0, N.jsxs)(K.wx, {
              loop: !i,
              grabCursor: !0,
              centeredSlides: d,
              centerInsufficientSlides: d,
              slidesPerView: "auto",
              speed: 700,
              breakpoints: _,
              onUpdate: () => f(0),
              onActiveIndexChange: e => f(e?.realIndex ?? 0),
              centeredSlidesBounds: m,
              children: [(0, N.jsx)("div", {
                className: Q.trackWrapper,
                children: (0, N.jsxs)("div", {
                  className: Q.track,
                  children: [t?.map((e => (0, N.jsx)(K.Ky, {
                    children: (0, N.jsx)(Z, {
                      item: e
                    })
                  }, e.key))), a && a?.map(((e, a) => e && (0, N.jsx)(K.Ky, {
                    children: e
                  }, u && u[a])))]
                })
              }), (0, N.jsx)(J, {
                current: g,
                total: a ? a.length : t.length
              })]
            }), (c?.title || c?.description) && (0, N.jsx)(Oe, {
              item: c
            })]
          })
        };
      var ae = t(5792),
        te = t(2836);
      const se = (0, t(2748).U1)(),
        ie = e => e.some((e => !e)),
        re = e => {
          let {
            condition: a = null,
            children: t
          } = e;
          const [s, i] = (0, o.useState)(!1), r = (e => {
            const [a] = (0, C.useSearchParams)(), [t, s] = (0, o.useState)(null), i = (0, te.useRockstarUser)(), {
              loggedIn: r
            } = i, {
              currentCharId: n
            } = (0, te.useRockstarUserState)(), c = function(e) {
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
              se.applyFilters("preview_conditions", e);
              const i = [];
              return e.forEach((e => {
                const {
                  value: s
                } = e;
                if (t) return "true" === a.get(s) ? (i.push(!0), !0) : (i.push(!1), !1);
                if (ie(i)) return !1;
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
              })), s(!ie(i)), () => {}
            }), [a, e, c, i, r]), t
          })(a);
          return (0, o.useEffect)((() => {
            i(r)
          }), [r]), (0, o.useMemo)((() => s ? t : null), [s])
        },
        ne = (0, ae.withTranslations)((e => {
          let {
            children: a
          } = e;
          return o.Children.map(o.Children.toArray(a), (e => (0, N.jsx)(re, {
            ...e?.props
          })))
        }));
      var ce = t(1512),
        oe = t(8652);
      const le = e => {
          let {
            className: a
          } = e;
          return (0, N.jsxs)("svg", {
            className: a,
            width: "16",
            height: "17",
            viewBox: "0 0 16 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, N.jsx)("path", {
              d: "M3.33203 8.5H12.6654",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, N.jsx)("path", {
              d: "M8 3.83331L12.6667 8.49998L8 13.1666",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })]
          })
        },
        de = {
          pillBtn: "rockstargames-sites-gta-tve3158363419b66e5afa2264e4928890c",
          selected: "rockstargames-sites-gta-tva9649249223f164eff11174ffc72616b",
          calloutContainer: "rockstargames-sites-gta-tve6bd244761fdf3ebe3888539d9942921",
          calloutSection: "rockstargames-sites-gta-tvb1b8c93299158ef7d0f9eb04e14a7a64",
          calloutHeaders: "rockstargames-sites-gta-tvc81810436a5b57307c41f4d7a704b2f7",
          calloutHeaderMargins: "rockstargames-sites-gta-tvb4e1f72dfa9b38f23017e5f8ef48b9cb",
          calloutHeader: "rockstargames-sites-gta-tvb7964754215256201dd703aedca18b6f",
          calloutSubheader: "rockstargames-sites-gta-tvac660fa7995007ed875e03a257e447d7",
          calloutVoteForm: "rockstargames-sites-gta-tvbee0795a36dd5adf822e1e50a7260f3d",
          voteButton: "rockstargames-sites-gta-tvb1baa545566a61b791b696c9ebf560ad",
          upvote: "rockstargames-sites-gta-tvb9c17ddd3e1052acb5097909ae2b07a1",
          downvote: "rockstargames-sites-gta-tvf26b53e66e552183743465cce6a8d3a8",
          active: "rockstargames-sites-gta-tvd38a1764483a36e8a1509aee5b88ec31",
          calloutButton: "rockstargames-sites-gta-tvb7eb76afce3c6e686be44c356837b627",
          calloutLink: "rockstargames-sites-gta-tvaefe6c5a233047c943a864cd56a7de2d",
          calloutLinkIcon: "rockstargames-sites-gta-tva74bf6baa632ad9b5f87efd2043cfed5",
          actionBlock: "rockstargames-sites-gta-tvcc491ddd715196ecd6ef54017ff05ec0",
          actionFooter: "rockstargames-sites-gta-tvdb26fed58ce50f4affc114670885721a"
        },
        me = e => {
          let {
            foreign_id: a,
            foreign_type: t
          } = e;
          const {
            track: s
          } = (0, te.useGtmTrack)(), {
            refetch: i
          } = (0, E.useQuery)(oe.UserGetVote, {
            skip: !0
          }), [r] = (0, E.useMutation)(oe.UserCastVote), [n, c] = (0, o.useState)(null), l = (0, o.useCallback)((e => {
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
          }), [a, t]), (0, N.jsxs)("div", {
            className: de.calloutVoteForm,
            children: [(0, N.jsx)("button", {
              "aria-label": "upvote",
              className: [de.upvote, de.voteButton, n ? de.active : ""].join(" "),
              name: "upvote",
              onClick: () => l(!0),
              type: "button"
            }), (0, N.jsx)("button", {
              "aria-label": "downvote",
              className: [de.downvote, de.voteButton, !1 === n ? de.active : ""].join(" "),
              name: "downvote",
              onClick: () => l(!1),
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
            track: i
          } = (0, te.useGtmTrack)();
          return (0, N.jsx)("a", {
            href: t,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, N.jsxs)("button", {
              className: de.calloutLink,
              type: "button",
              onClick: s ? () => i({
                ...s
              }) : () => {},
              children: [a, (0, N.jsx)(le, {
                className: de.calloutLinkIcon
              })]
            })
          })
        },
        fe = e => {
          let {
            helperText: a,
            linkText: t,
            link: s,
            trackingData: i
          } = e;
          const {
            track: r
          } = (0, te.useGtmTrack)();
          return (0, N.jsxs)("div", {
            className: de.actionFooter,
            children: [a, t && " ", t && (0, N.jsx)("a", {
              href: s ?? "",
              onClick: () => r({
                ...i
              }),
              children: t
            })]
          })
        },
        ue = (0, ae.withTranslations)((e => {
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
            trackingData: f = {},
            actionFooterLinkTrackingData: u = {},
            t: _,
            ...p
          } = e;
          const {
            loggedIn: k
          } = (0, te.useRockstarUser)(), {
            track: v
          } = (0, te.useGtmTrack)(), b = `${document.location.origin}/auth/sc-auth-login?returnUrl=${window.location.pathname}`, {
            ref: h,
            inView: x
          } = (0, ce.cD)({
            threshold: .6
          }), [y, j] = (0, o.useState)(!1);
          let S;
          if ((0, o.useEffect)((() => {
              x && !y && (v({
                event: "page_section_impression",
                event_action: "impression",
                event_category: "page_section",
                event_label: "callout section",
                element_placement: `callout section - ${p?.sectionName??p?._memoq?.header}`
              }), j(!0))
            }), [x]), !a && !t) return null;
          switch (s) {
            case "vote":
              if (!k) {
                S = (0, N.jsx)(R, {
                  to: b,
                  className: de.calloutButton,
                  onClick: f ? () => v({
                    ...f
                  }) : () => {},
                  children: "Log In"
                });
                break
              }
              S = (0, N.jsx)(me, {
                foreign_id: n,
                foreign_type: c
              });
              break;
            case "button":
              i && r && (S = (0, N.jsx)(R, {
                to: r,
                className: de.calloutButton,
                onClick: f ? () => v({
                  ...f
                }) : () => {},
                children: i
              }));
              break;
            case "link":
              i && r && (S = (0, N.jsx)(ge, {
                action_text: i,
                link: r,
                trackingData: f
              }));
              break;
            default:
              S = null
          }
          return (0, N.jsx)("div", {
            className: `${de.calloutContainer} ${l||""}`,
            ref: h,
            children: (0, N.jsxs)("div", {
              className: de.calloutSection,
              children: [(0, N.jsxs)("div", {
                className: [de.calloutHeaders, S ? de.calloutHeaderMargins : ""].join(" "),
                children: [a && (0, N.jsx)("h2", {
                  className: de.calloutHeader,
                  children: _(a)
                }), t && (0, N.jsx)("h3", {
                  className: de.calloutSubheader,
                  children: _(t)
                })]
              }), (0, N.jsxs)("div", {
                className: de.actionBlock,
                children: [S, d && (0, N.jsx)(fe, {
                  helperText: d,
                  linkText: m,
                  link: g,
                  trackingData: u
                })]
              })]
            })
          })
        }));
      var _e = t(9736),
        pe = t(4236),
        ke = t.n(pe);
      const ve = e => {
          let {
            isMulti: a,
            allowSelectAll: t,
            label: s,
            miscProps: i
          } = e;
          const [r, n] = (0, o.useState)(""), c = (0, o.useMemo)((() => ke()().getData()), []);
          return (0, N.jsx)(_e.cp, {
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
        be = e => {
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
        he = {
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
        xe = e => he[e] || null,
        ye = {
          cta: "rockstargames-sites-gta-tvbc76de01fdd1260e254c482984d2a924",
          xbox: "rockstargames-sites-gta-tvf591c5444c08121b0514f0c675da1479",
          xboxone: "rockstargames-sites-gta-tve5124beff89c5b4093a4029a9fee3367",
          xboxseriesxs: "rockstargames-sites-gta-tve52c94654eb462a8e65aa7607f5e21b5",
          ps: "rockstargames-sites-gta-tvc53b78d3d062ee8d58f63a0acb1df137",
          ps4: "rockstargames-sites-gta-tvf4a27aba1505f555d7cd8c920645245a",
          ps5: "rockstargames-sites-gta-tvb5826d3700572b9bf36874e34d5c2a22",
          pc: "rockstargames-sites-gta-tvc7ee0cfc54be00a8b152c47997ce76ac",
          switch: "rockstargames-sites-gta-tva9b276d1c119e9cd14df54c4459197b0",
          googleplay: "rockstargames-sites-gta-tva4ccd0de63b104d4aa48c8c3176618f3",
          platformIcon: "rockstargames-sites-gta-tvc4ab0a89b65025cfe63b851116fb3a32",
          applestore: "rockstargames-sites-gta-tva13111cbe8acbd75f62da1c53de2c3df",
          btnIcon: "rockstargames-sites-gta-tvcb0ad8d8dd93218dc12091b883767967",
          label: "rockstargames-sites-gta-tvb81011c72b601075ebe54d7ceaa7d2d8",
          primary: "rockstargames-sites-gta-tvdbcf41d5c23e0eaf5089021f4d41c121",
          btnContent: "rockstargames-sites-gta-tvf5e832587747dc414e10ab8e0bd843a9",
          icon: "rockstargames-sites-gta-tvc7a3f1a29594b307606d15e6827f63f9",
          "icon-left": "rockstargames-sites-gta-tvbd623c6039c3f4122936775ed4214bd4",
          "icon-right": "rockstargames-sites-gta-tvc79040e66c1f48e302291d8cf1335742",
          disabled: "rockstargames-sites-gta-tvd87326174de12b895401f738a23b177a",
          pillBtn: "rockstargames-sites-gta-tvbf9c11ff862c409ecb412254932a66d0",
          selected: "rockstargames-sites-gta-tve07887131c72b6346c408895888f4fa7"
        },
        Ne = e => {
          let {
            platform: a = ""
          } = e;
          const t = a ? xe(a) : null,
            s = t ? (0, N.jsx)("img", {
              className: ye.platformIcon,
              src: t,
              alt: "Platform Icon"
            }) : null;
          return (0, N.jsx)("span", {
            className: [ye.btnContent, ye.platformButton].join(" "),
            children: s
          })
        },
        je = e => {
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
            badgeStyle: m,
            platformItem: g,
            gtm: f = {},
            disabled: u,
            className: _
          } = e;
          const {
            track: p
          } = (0, te.useGtmTrack)(), k = (0, ae.useDataLayer)(), v = i ?? a, b = `Redirect to ${t}`, h = (0, o.useMemo)((() => {
            const e = window.location.hostname;
            let a;
            try {
              a = new URL(t)?.hostname
            } catch (t) {
              a = e
            }
            return e === a
          }), [t]), x = (0, o.useCallback)((() => {
            u || p({
              event: "cta_other",
              ...k,
              ...f,
              link_url: t ?? void 0,
              text: v ?? void 0
            })
          }), [f, t, k]), y = () => n ? (0, N.jsx)("span", {
            className: [ye.icon, `icon-${c}`].join(" "),
            style: l,
            children: (0, N.jsx)("img", {
              className: ye.btnIcon,
              src: xe(n),
              alt: `${n} icon`
            })
          }) : null;
          return (0, N.jsx)(C.NavLink, {
            to: t,
            target: h ? "_self" : "_blank",
            className: [ye.cta, "platform" === r && g ? ye[g] : "", u ? ye.disabled : "", _].join(" "),
            style: s,
            "data-variant": r,
            onClick: x,
            disabled: u,
            "aria-label": b,
            children: "platform" === r && g ? (0, N.jsx)(Ne, {
              platform: g
            }) : (0, N.jsxs)("div", {
              className: ye.btnContent,
              children: ["left" === c && y(), (0, N.jsx)("span", {
                children: v
              }), "right" === c && y(), d ? (0, N.jsx)("span", {
                className: ye.badge,
                style: m,
                children: d
              }) : null]
            })
          })
        };
      var Se = t(5652);
      const we = "rockstargames-sites-gta-tveb64520e04e486931cd65dc5b3fa61e8",
        Ce = "rockstargames-sites-gta-tvcc9a6fdcc84b758d60987ea9a5ddfd81",
        Ie = "rockstargames-sites-gta-tvee609f31f3685766122c2c6fc0ef0710",
        Te = e => {
          let {
            alt: a,
            className: s,
            src: i,
            style: r
          } = e;
          const [n, c] = (0, ae.usePreloadImg)(i);
          let o = i;
          !1 === n && (s === Ie && (o = t(1820)), o = t(3976));
          const {
            width: l,
            height: d
          } = c, m = {
            "--aspect-ratio": Number.isNaN(l / d) ? "" : l / d,
            ...r
          };
          return (0, N.jsx)("img", {
            src: o,
            className: s ?? "",
            alt: a,
            style: m
          })
        },
        Me = e => {
          let {
            className: a,
            style: s = {},
            image: i = {},
            imageStyle: r = {}
          } = e, {
            alt: n,
            src: c
          } = (0, Se.useImageParser)(i);
          return c.desktop || c.mobile || (n = "placeholder", c = {
            mobile: t(1820),
            desktop: t(3976)
          }), (0, N.jsx)("div", {
            className: i.frame ? `${i.frame} ${we}` : we,
            style: s,
            children: c?.desktop && c?.mobile ? (0, N.jsxs)(N.Fragment, {
              children: [(0, N.jsx)(Te, {
                style: {
                  ...r,
                  ...i?.style
                },
                src: c.desktop,
                alt: n,
                className: a ? `${a} ${Ce}` : Ce
              }), (0, N.jsx)(Te, {
                style: {
                  ...r,
                  ...i?.style
                },
                src: c.mobile,
                alt: n,
                className: a ? `${a} ${Ie}` : Ie
              })]
            }) : (0, N.jsx)(Te, {
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
      var Le = t(8560),
        Ee = t.n(Le);
      const Be = {
          grid: "rockstargames-sites-gta-tvac295ed5b9cb441ed17843b34e83ea17",
          itemList: "rockstargames-sites-gta-tvcaf5589ddeca00ed09213e547674b1f3",
          gtaplus: "rockstargames-sites-gta-tvb291112adcf994a0f6acadd86f73b78a",
          rdo: "rockstargames-sites-gta-tvd146e8f862baefb60e91be5aa3c17b6e",
          noImg: "rockstargames-sites-gta-tvba9b5ae08642b0213a3f04b3db9a9dac",
          gtao: "rockstargames-sites-gta-tvb6f2bdfd6a1d57b7ce840f7a56cc510b",
          custom: "rockstargames-sites-gta-tvaf89164a043648d1464686ff13363ee4",
          yellow: "rockstargames-sites-gta-tvd244b17b74fc46269e8a106a99ab0f87",
          hotPink: "rockstargames-sites-gta-tvd90b28503318563cfd6059146d1fb6b6",
          red: "rockstargames-sites-gta-tvc3f8a8706901874d906f94c626be3c1e",
          turquoise: "rockstargames-sites-gta-tvfe2ec36e92e2bb4d453fdc4b05966418",
          purple: "rockstargames-sites-gta-tvf5f7baf5b56f5b2ada053a93392bbf7a",
          teal: "rockstargames-sites-gta-tvf4a229f41cd20f181d810c311416e3f2",
          blue: "rockstargames-sites-gta-tvf6f689d687bcd482ea2cd2990fd66878",
          green: "rockstargames-sites-gta-tvab270f1b4d3ad43e7bc51393b7c5c089",
          darkRed: "rockstargames-sites-gta-tvdc24ce78d962f3472b06955bf8855103",
          darkBlue: "rockstargames-sites-gta-tvb354493baac7389b21b511009f287428",
          goldenrod: "rockstargames-sites-gta-tve4a078efee11d24c64e93ccf0744a33f",
          skull: "rockstargames-sites-gta-tvd4581a495de14e6762bb15debe5bb810"
        },
        {
          sanitize: ze
        } = Ee(),
        Pe = e => {
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
          const [m, g] = (0, o.useState)(null), f = t ? t.split("_#_") : a;
          return (0, o.useEffect)((() => {
            g(a)
          }), [a]), t || a ? l && m ? (0, N.jsx)("div", {
            className: Be.grid,
            style: {
              "--unordered-list-grid-column": l,
              "--unordered-list-grid-column-mobile": d ?? l
            },
            children: (0, N.jsx)("ul", {
              style: (0, ae.safeStyles)(i),
              className: (0, G.classList)(Be.itemList, Be.noImg, Be[s], Be[n]),
              children: m.map((e => (0, N.jsx)("li", {
                dangerouslySetInnerHTML: {
                  __html: ze(e.content)
                }
              }, e.content)))
            })
          }) : (0, N.jsx)("ul", {
            style: (0, ae.safeStyles)(i),
            className: (0, G.classList)(Be.itemList, Be.custom, c ? Be.noImg : "", s ? Be[s] : "", n ? Be[n] : "", r ?? ""),
            children: f.map((e => (0, N.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: ze(e?.content ?? e)
              }
            }, e?.content)))
          }) : null
        },
        $e = {
          hr: "rockstargames-sites-gta-tvf5cd418ab2ef6a89df6c95d2caa06ba8",
          redLine: "rockstargames-sites-gta-tvf8b44ef9bbd3e7feb22bf79cc009b16e",
          gtao: "rockstargames-sites-gta-tvc442f7264db862a7cca6d9a56dacc205"
        },
        Ve = e => {
          let {
            style: a,
            className: t = "",
            type: s
          } = e;
          return (0, N.jsx)("div", {
            style: a,
            className: [$e.hr, $e[s], t].join(" ")
          })
        },
        De = "rockstargames-sites-gta-tvfa6885b15a718acb24f48949c52e31f1",
        Ae = e => {
          let {
            to: a,
            children: t
          } = e;
          return a ? (0, N.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noreferrer",
            children: t
          }) : t
        },
        Oe = e => {
          let {
            item: a,
            className: t = ""
          } = e;
          return (0, N.jsxs)("div", {
            className: (0, G.classList)("rockstargames-sites-gta-tvef9e6981551ac5ce250ebff8b18d7a29", t),
            children: [a.title && (0, N.jsx)(Ae, {
              to: a?.href ?? a?.to,
              children: (0, N.jsx)("h3", {
                children: a.title
              })
            }), Array.isArray(a?.description?.content) ? a.description.content?.map(((e, a) => e?.unorderedList ? (0, N.jsx)(Pe, {
              columns: e.unorderedList.columns ?? null,
              style: {
                "--unordered-list-padding": "var(--grid-gap-static-sm)",
                "--unordered-list-margin-bottom": ".5rem"
              },
              noImg: !0,
              list: e.unorderedList.list
            }, a) : e?.image ? (0, N.jsx)(Me, {
              image: e.image,
              className: e?.className,
              ariaLabel: e.image?.ariaLabel
            }, a) : e?.separator ? (0, N.jsx)("div", {
              style: {
                margin: `${e.separator.spacing} 0`
              },
              children: (0, N.jsx)(Ve, {})
            }, a) : (0, N.jsx)("p", {
              children: (0, N.jsx)("span", {
                className: De,
                dangerouslySetInnerHTML: {
                  __html: e
                }
              })
            }, a))) : (0, N.jsx)("span", {
              className: De,
              dangerouslySetInnerHTML: {
                __html: a.description
              }
            })]
          })
        };
      var Fe = t(8936);
      const Re = e => {
          let {
            children: a,
            ...t
          } = e;
          const [s, i] = (0, o.useState)(!1);
          return (0, N.jsx)(Fe.cR, {
            ...t,
            onReady: () => {
              document.fonts.ready.then((() => {
                i(!0)
              }))
            },
            children: a
          })
        },
        Ge = {
          badge: "rockstargames-sites-gta-tve279e2cebfa338f34b03fd732416e836",
          badgeSizeUpdate: "rockstargames-sites-gta-tvd7362a3e27ccaad9d2aadd2f31691340",
          badge2: "rockstargames-sites-gta-tvd697f4a5f7c876d5e540a96da1e0ca3a",
          badge3: "rockstargames-sites-gta-tve1bba3cd4554abbb48a030af24bbada5"
        },
        He = e => {
          let {
            wrapper: a,
            children: t,
            role: s,
            splitter: i
          } = e;
          return i || s ? a(t) : t
        },
        Ue = e => {
          let {
            badge: a,
            badgeType: s,
            role: i,
            splitter: r
          } = e;
          const n = [];
          r ? a.split(r).map(((e, a) => n.push(e))) : n.push(a);
          let c = 100;
          return 2 == n.length && n[1].length < 4 && "off" !== n[1].toLowerCase() && 45, (0, N.jsxs)(He, {
            splitter: r,
            role: i,
            wrapper: e => (0, N.jsx)("div", {
              className: `${Ge.badge} ${s?Ge[s]:""} `,
              children: e
            }),
            children: [(0, N.jsx)(N.Fragment, {
              children: i && (0, N.jsx)(Me, {
                image: {
                  alt: i,
                  desktop: t(6572)(`./${i}.png`)
                }
              })
            }), (0, N.jsx)(Re, {
              className: `${r||i?"":Ge.badge} ${s?Ge[s]:""}`,
              min: 8,
              max: 1e3,
              mode: r || i ? "single" : "multi",
              children: n[0]
            }), (0, N.jsx)(N.Fragment, {
              children: n.shift() && r && n.length >= 1 && (0, N.jsx)(Re, {
                min: 8,
                max: 1e3,
                mode: "single",
                forceSingleModeWidth: !0,
                children: n.join(" ")
              })
            })]
          }, "badge-wrapper")
        },
        We = "rockstargames-sites-gta-tvc63cfb461217f059c8c25eec09602b30",
        qe = e => {
          let {
            color: a
          } = e;
          return (0, N.jsxs)("div", {
            className: "rockstargames-sites-gta-tva481f47ab7e8af4042a665fab5aea27c",
            style: {
              "--loader-color": a
            },
            children: [(0, N.jsx)("div", {
              className: We
            }), (0, N.jsx)("div", {
              className: We
            }), (0, N.jsx)("div", {
              className: We
            })]
          })
        };
      var Xe = t(4072);
      const Ke = {
          dropdownWrapper: "rockstargames-sites-gta-tvb951912c02de0e5e881fedd391d04810",
          items: "rockstargames-sites-gta-tvb0a8f220641417f889d4fd6039fe6bac",
          open: "rockstargames-sites-gta-tvf5eb88111734e6e70d34ef2b095c44f6",
          opener: "rockstargames-sites-gta-tvecb577af64f747d0d39cf03939ee3c73",
          secondary: "rockstargames-sites-gta-tvb64c3515fcd91f6b84410bd14640da81"
        },
        Ye = e => {
          let {
            children: a,
            className: t,
            title: s
          } = e;
          const [i, r] = (0, o.useState)(!1);
          return (0, N.jsx)(Xe.cp, {
            disabled: !i,
            children: (0, N.jsxs)("div", {
              className: [Ke.dropdownWrapper, i ? Ke.open : "", void 0 !== t ? t : ""].join(" "),
              children: [(0, N.jsx)("button", {
                className: Ke.opener,
                onClick: () => r(!i),
                children: s
              }), i && (0, N.jsx)("div", {
                className: Ke.items,
                onClick: () => r(!1),
                children: a
              })]
            })
          })
        };
      var Qe = t(5356);
      const Ze = e => {
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
          const m = (0, Se.useImageParser)(i),
            g = {
              ...r
            };
          if (m?.src?.desktop) {
            const e = "var(--grid-background-repeat, no-repeat)",
              a = "var(--grid-background-position, center)/var(--grid-background-size, cover)";
            g.background = `url(${m?.src?.desktop}) ${e} ${a}`
          }
          return (0, N.jsx)("div", {
            id: d,
            className: (0, Qe.classList)("rockstargames-sites-gta-tvf42b4606ed4a5b16b7647ad7b7eb229d", o ? "rockstargames-sites-gta-tvb00444166ce6346d7ca364a75a335ecc" : "", l),
            "data-game": "community" === n ? null : s,
            style: (0, ae.safeStyles)(g),
            "data-context": t,
            "data-template": n,
            "data-theme": c,
            children: a
          })
        },
        Je = e => {
          let {
            caption: a,
            children: t,
            ...s
          } = e;
          return a ? (0, N.jsxs)("figure", {
            ...s,
            children: [t, (0, N.jsx)("figcaption", {
              dangerouslySetInnerHTML: {
                __html: a
              }
            })]
          }) : t
        },
        ea = e => {
          let {
            componentTitle: a,
            type: t,
            items: s
          } = e;
          return s?.length ? (0, N.jsx)("div", {
            className: "rockstargames-sites-gta-tvd393ab6eb68d416b116b6281abdb5e14",
            type: t,
            children: (0, N.jsxs)(Ze, {
              children: [a && (0, N.jsx)("h3", {
                children: a
              }), (0, N.jsx)(Ze, {
                className: "rockstargames-sites-gta-tved3ee31cb8e357d795886157f95a742a",
                children: s.map(((e, a) => {
                  return e?.embed ? (0, N.jsx)(Je, {
                    caption: e?.caption,
                    children: (0, N.jsx)("div", {
                      className: "rockstargames-sites-gta-tvdcf1c30612026a517f59af64d8703bc4",
                      dangerouslySetInnerHTML: {
                        __html: (t = e.embed, t.replace(/&gt;/g, ">").replace(/&lt;/g, "<"))
                      }
                    }, `${e?.key??a}_div`)
                  }, e?.key ?? a) : e?.text ? (0, N.jsx)("p", {
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
      var aa = t(1388);
      const ta = {
          type: "spring",
          stiffness: 650,
          damping: 45
        },
        sa = {
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
            transition: sa
          }
        },
        ra = {
          open: {
            opacity: 1,
            display: "grid",
            height: "auto",
            transition: {
              opacity: sa,
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
              height: ta
            },
            transitionEnd: {
              display: "none"
            }
          }
        },
        na = {
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
            transition: ta,
            transitionEnd: {
              "--btn-hover-bg-color": "inherit",
              "--btn-hover-bg-color-noBlur": "inherit",
              "--btn-hover-font-color": "inherit",
              "--btn-hover-border-color": "inherit"
            }
          }
        },
        ca = {
          pillBtn: "rockstargames-sites-gta-tvba37d7130b54bd53bd309b0cd04717ff",
          selected: "rockstargames-sites-gta-tvc9c0bba52c010c4e3571f2702eef944b",
          container: "rockstargames-sites-gta-tvbfcd1a0671c127c9135d8c2feac75c34",
          content: "rockstargames-sites-gta-tva1cf623c9dd51dd05772a395d8311dac",
          unexpandedButton: "rockstargames-sites-gta-tvba4683b82274b0f8ca98f97fd2b0a1c9",
          expandedArea: "rockstargames-sites-gta-tvdd25aa78f935c7d4cafdb1c8bc6d7932",
          closeButton: "rockstargames-sites-gta-tvc559c930e0a5a7caa72b3de9a3362a0a",
          platformButtons: "rockstargames-sites-gta-tvd6bfc47d3110920d77ea2e70dac9c898",
          platformButton: "rockstargames-sites-gta-tvb04a9bd68b598682a5dbe99dd1a2f06d",
          xbox: "rockstargames-sites-gta-tvfe4a687dfc69ef746fcbe4184c7a9574",
          xboxone: "rockstargames-sites-gta-tvb1f46a1ff640d7398e7736e814a5ed8f",
          xboxseriesxs: "rockstargames-sites-gta-tve23b6f1412ea1ecb8a616b4f25d2888d",
          ps: "rockstargames-sites-gta-tve0b107bda3c03c1e82c94195bfbc055b",
          ps4: "rockstargames-sites-gta-tvdcf3078cbde57db42e66e6ba4c269fbe",
          ps5: "rockstargames-sites-gta-tve047116842d7619f0e04a3c9b6dbec13",
          pc: "rockstargames-sites-gta-tvdaa32798c37b9055cd280b838972e63e",
          switch: "rockstargames-sites-gta-tvae7bc564778d8af6cf5f8a0491ef7dc8",
          buttonText: "rockstargames-sites-gta-tvc2fb2fb5ec39a5c3b3c14ee6c0505b53"
        },
        oa = e => {
          let {
            buttonText: a = "",
            link: s = "",
            platform: i = "",
            target: r = null,
            onClick: n
          } = e;
          const c = r ?? (s.startsWith(document.location.origin) ? "_self" : "_blank"),
            o = [ca.platformButton, ca[i]].join(" "),
            l = i ? t(3892)(`./${i}.svg`) : null,
            d = (0, N.jsxs)(N.Fragment, {
              children: [l ? (0, N.jsx)("img", {
                src: l,
                alt: a
              }) : "", !l && (0, N.jsx)("div", {
                className: ca.buttonText,
                children: a
              })]
            });
          return s.startsWith("http") ? (0, N.jsx)("span", {
            onClick: n,
            onKeyDown: n,
            role: "link",
            tabIndex: 0,
            children: (0, N.jsx)("a", {
              href: s,
              className: o,
              target: c,
              children: d
            })
          }) : (0, N.jsx)(C.NavLink, {
            className: o,
            onClick: n,
            to: s,
            children: d
          })
        },
        la = e => {
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
            track: f
          } = (0, te.useGtmTrack)();
          return (0, N.jsxs)("div", {
            className: (0, G.classList)(ca.container, s),
            children: [(0, N.jsx)(aa.q.div, {
              className: ca.content,
              animate: m ? "open" : "close",
              variants: ia,
              children: i
            }), (0, N.jsxs)(aa.q.div, {
              onClick: () => {
                g(!m), m || f("select_platform" === n ? {
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
              className: ca.unexpandedButton,
              animate: m ? "open" : "closed",
              variants: na,
              initial: !1,
              children: [(0, N.jsx)(aa.q.div, {
                className: ca.buttonText,
                "data-expanded": m,
                children: "string" == typeof a ? a : "Subscribe"
              }), (0, N.jsxs)(aa.q.div, {
                className: ca.expandedArea,
                animate: m ? "open" : "closed",
                variants: ra,
                initial: !1,
                children: [(0, N.jsx)("img", {
                  className: ca.closeButton,
                  onClick: () => g(!1),
                  onKeyDown: e => {
                    g(!1)
                  },
                  src: t(2428),
                  alt: "Close",
                  role: "button"
                }), (0, N.jsx)("div", {
                  className: ca.platformButtons,
                  children: r.length ? r.map((e => (0, N.jsx)(oa, {
                    buttonText: e.buttonText ?? "",
                    link: e.href,
                    platform: e.platform,
                    onClick: () => (e => {
                      let {
                        href: a,
                        platform: t
                      } = e;
                      f({
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
        da = {
          animateBox: "rockstargames-sites-gta-tve9374e74c542c1028a2068dfbd1e85a3",
          fadeArea: "rockstargames-sites-gta-tva63de5cdf9849ac45a0f6b4f7617cfa5",
          visible: "rockstargames-sites-gta-tvd7458685114194d602f94e2581de0f08",
          barGrow: "rockstargames-sites-gta-tvb0f4d843b626e3741c9dd38fcb3f56b0",
          bar: "rockstargames-sites-gta-tva4b99f54f3ce3987765143d8a151360a",
          animateMe: "rockstargames-sites-gta-tvf9c3869a2a1e10490bdfbcb3ee89d7da"
        },
        ma = e => {
          let {
            children: a,
            style: t
          } = e;
          const s = (0, o.useRef)(null);
          return (0, o.useEffect)((() => {
            new IntersectionObserver((e => {
              e.forEach((e => {
                e.isIntersecting && e.target.classList.add([da.visible])
              }))
            })).observe(s?.current)
          }), []), (0, N.jsx)("div", {
            style: t,
            className: [da.fadeArea].join(" "),
            ref: s,
            children: a
          })
        },
        ga = {
          img: "rockstargames-sites-gta-tve3f505a2281df28eb1acdf2d586e7fbd",
          startAnimation: "rockstargames-sites-gta-tva27e4d6733cea4a38e469425ef32ed3a"
        },
        fa = e => {
          let {
            imgSrc: a,
            title: t
          } = e;
          const [s] = (0, ae.usePreloadImg)(a);
          return (0, N.jsx)("div", {
            role: "img",
            "aria-label": t,
            className: [ga.img, s ? ga.startAnimation : ""].join(" "),
            style: {
              backgroundImage: `url(${a})`
            }
          })
        },
        ua = e => {
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
          return (0, N.jsx)(T, {
            "data-gtm-category": "Games",
            "data-gtm-action": "Game Click-through",
            "data-gtm-label": r,
            "data-testid": `${r}-gamecard`,
            to: c,
            target: "_self",
            className: "rockstargames-sites-gta-tvfded54fb94f7325c5a0b57590585b175",
            children: (0, N.jsx)(fa, {
              imgSrc: s,
              title: a.title
            })
          })
        },
        _a = {
          gameSiteHeader: "rockstargames-sites-gta-tvcb7cada84679a7af263e1436675a518a",
          activeNavItem: "rockstargames-sites-gta-tvaa4aa7ed96facb38ed09c72eededb418",
          navHidden: "rockstargames-sites-gta-tvac1cb9d2005f287ed666d334f816f8c5",
          navContent: "rockstargames-sites-gta-tve5abd79468866e31fdad2780b169f687",
          headerNavOpen: "rockstargames-sites-gta-tvb98508d0923c5bb442c15772fbad9764",
          headerLogo: "rockstargames-sites-gta-tve666ff4f0b91dfe78991244ac1a759a5",
          bg: "rockstargames-sites-gta-tvcfc6fd456ca2f3e9db06f780f412660f"
        },
        pa = e => {
          let {
            buttonText: a = null,
            gameOverrideStyles: t,
            navLinks: s,
            cta: i = "",
            game: r
          } = e;
          const [n, c] = (0, o.useState)(!1), l = (0, E.useMutateState)(), {
            navHidden: d
          } = (0, E.useState)();
          return (0, o.useEffect)((() => {
            l({
              gameSiteNavOpen: n
            })
          }), [n]), (0, o.useEffect)((() => {
            const e = () => {
              c(!1)
            };
            return document.addEventListener("click", e), () => document.removeEventListener("click", e)
          }), []), (0, N.jsxs)("header", {
            "data-game": r,
            className: [_a.gameSiteHeader, n ? _a.headerNavOpen : "", d ? _a.navHidden : "", t.gameSiteHeader, n ? t.headerNavOpen : ""].join(" "),
            children: [(0, N.jsx)("button", {
              className: [_a.headerLogo, t.headerLogo].join(" "),
              onClick: e => {
                c(!n), e.nativeEvent.stopImmediatePropagation()
              },
              type: "button",
              "aria-label": "Open Game Site Nav",
              dangerouslySetInnerHTML: {
                __html: a
              }
            }), (0, N.jsx)("div", {
              className: _a.bg
            }), (0, N.jsx)("nav", {
              children: (0, N.jsx)("div", {
                className: _a.navContent,
                children: s
              })
            }), i]
          })
        };
      var ka = t(1403);
      class va extends o.Component {
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
          return this?.state?.error?.message ? (0, N.jsxs)("div", {
            className: "rockstargames-sites-gta-tvf903c45f8ecc18bd55f702e202f3763a",
            children: [(0, N.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, N.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      const ba = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return function(t) {
            return (0, N.jsx)(va, {
              header: a,
              children: (0, N.jsx)(e, {
                ...t
              })
            })
          }
        },
        ha = e => {
          let {
            prevRef: a,
            nextRef: t,
            onNextClicked: s,
            onPrevClicked: i
          } = e;
          return (0, N.jsxs)("div", {
            className: "rockstargames-sites-gta-tvd98f432655f19a842390597c4434db06",
            children: [(0, N.jsx)("div", {
              className: "rockstargames-sites-gta-tvc06ca360ce11f2cef7baf8c5fba05a42",
              ref: a,
              onClick: i,
              "aria-label": "Previous",
              role: "button",
              tabIndex: 0,
              onKeyUp: () => {}
            }), (0, N.jsx)("div", {
              className: "rockstargames-sites-gta-tva4f98606cdef508fbd2e69c5564a92d8",
              ref: t,
              onClick: s,
              "aria-label": "Next",
              role: "button",
              tabIndex: 0,
              onKeyUp: () => {}
            })]
          })
        },
        xa = ba((e => {
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
            titleBadge: f
          } = e;
          const {
            track: u
          } = (0, te.useGtmTrack)(), _ = (0, o.useRef)(null), p = (0, o.useRef)(null), k = (0, o.useRef)(null), [v, b] = (0, o.useState)(null), [h, x] = (0, o.useState)(!1), [y, j] = (0, o.useState)(null), [S, w] = (0, o.useState)({}), [C, I] = (0, o.useState)(), {
            ref: T,
            inView: M
          } = (0, ce.cD)({
            threshold: .6
          }), [L, E] = (0, o.useState)(!1), [B, z] = (0, o.useState)(null), [P, $] = (0, o.useState)(!1);
          (0, o.useEffect)((() => {
            const e = () => {
              $(window.innerWidth < 1024)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []);
          const V = {
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
            if (!_.current) return;
            const e = () => {
              if (_.current) {
                const e = r || Number(window.getComputedStyle(_.current).getPropertyValue("--slides-per-view")),
                  a = r ? 1 : Number(window.getComputedStyle(_.current).getPropertyValue("--slides-per-view-multiplier"));
                j(e * a)
              }
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [_, r]), (0, o.useEffect)((() => {
            if (!t) return;
            let e = !1;
            t.forEach((a => {
              "cover-card" === a?.props?.tina?.payload?.meta?.type && (e = !0, z(a))
            })), E(e);
            const a = t.map(((e, a) => "cover-card" === e?.props?.tina?.payload?.meta?.type && P ? null : (0, N.jsx)(K.Ky, {
              className: "rockstargames-sites-gta-tvf58e79e329504e170dc9cb4595ea011b",
              onFocus: () => A(a),
              children: e
            }, Symbol(a).toString())));
            b(a)
          }), [t, P]), (0, o.useEffect)((() => {
            I({
              nextEl: k.current,
              prevEl: p.current
            })
          }), [k, p]), (0, o.useEffect)((() => {
            M && !h && t && (u({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: `deck - ${i}`.toLowerCase(),
              element_placement: `deck - ${i}`.toLowerCase()
            }), x(!0))
          }), [M, t]);
          let D = "custom" === s ? {
            "--custom-aspect-ratio": g,
            ...l
          } : {
            ...l
          };
          const A = e => {
            S.slideTo(e)
          };
          return (0, N.jsxs)("div", {
            className: (0, G.classList)("rockstargames-sites-gta-tvd0c3d91603036c852633939015a6cb48", d),
            "data-size": s,
            "data-sm": m?.sm ? m?.sm : s,
            "data-md": m?.md ? m?.md : s,
            "data-lg": m?.lg ? m?.lg : s,
            "data-xl": m?.xl ? m?.xl : s,
            "data-xxl": m?.xxl ? m?.xxl : s,
            "data-has-covercard": L,
            ref: _,
            style: D,
            children: [(0, N.jsx)("div", {
              className: "rockstargames-sites-gta-tvddeb75a59ed783554b94e8298897a1fa",
              ref: T
            }), L && P && (0, N.jsx)("div", {
              className: "rockstargames-sites-gta-tvd5f00d41fdd2c864a0eb9e069cf08db0",
              children: B
            }), (0, N.jsx)("div", {
              className: "rockstargames-sites-gta-tvcdc60dbde3f8db6f466aba8a3e19fa96",
              children: (0, N.jsxs)("div", {
                className: "rockstargames-sites-gta-tvfb8e207418c783fc2f53b44c19faedca",
                children: [(0, N.jsxs)("div", {
                  className: "rockstargames-sites-gta-tvb779ba2045a88302079083935c90f7b3",
                  children: [!L && i && (0, N.jsxs)("div", {
                    className: "rockstargames-sites-gta-tvedf90c7c5ee1c79049f5a6442f14c949",
                    children: [(0, N.jsx)("h2", {
                      children: i
                    }), f && (0, N.jsx)("span", {
                      className: "rockstargames-sites-gta-tvd7a4aaeb70d68fdee39312192efb990b",
                      children: f
                    })]
                  }), (0, N.jsx)(ha, {
                    prevRef: p,
                    nextRef: k,
                    onNextClicked: () => {},
                    onPrevClicked: () => {}
                  })]
                }), a && (0, N.jsx)("div", {
                  className: "rockstargames-sites-gta-tva1007d13e3a321bb18b5fc667025d545",
                  dangerouslySetInnerHTML: {
                    __html: a
                  }
                })]
              })
            }), y ? (0, N.jsx)(K.wx, {
              slidesPerView: y,
              onInit: e => {
                w(e)
              },
              grabCursor: !0,
              navigation: C,
              modules: [ka._2],
              breakpoints: V,
              slideClass: (0, G.classList)("swiper-slide", c),
              onSlideNextTransitionEnd: () => {
                u({
                  event_action: "next",
                  event_category: "carousel",
                  event: "carousel_next",
                  event_label: i?.toLowerCase() ?? ""
                })
              },
              onSlidePrevTransitionEnd: () => {
                u({
                  event_action: "previous",
                  event_category: "carousel",
                  event: "carousel_previous",
                  event_label: i?.toLowerCase() ?? ""
                })
              },
              onSlideChangeTransitionEnd: () => {
                u({
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
        ya = {
          pillBtn: "rockstargames-sites-gta-tvd008b074498ad02717806cc094b8a780",
          selected: "rockstargames-sites-gta-tvbe9a2e37ec59e339b0d72cd8e5256703",
          hero: "rockstargames-sites-gta-tvd1346f9b98fbaac26948e361bd98b4c6",
          images: "rockstargames-sites-gta-tvc9c078a3102a96b26f1bf1f98306384f",
          background: "rockstargames-sites-gta-tva271224ca2caf56b470059cdb98d9a42",
          gradient: "rockstargames-sites-gta-tvae257e9d159ae9bd7c8685e38ba16f59",
          layered: "rockstargames-sites-gta-tvf663886f051e47ea04f097c85ae6625b",
          content: "rockstargames-sites-gta-tvf9c204f451f3a53bcc307c00eb5f907f",
          descriptions: "rockstargames-sites-gta-tvd1bbf288f3fe6c79e658764847d2890a",
          buttonGroup: "rockstargames-sites-gta-tvfb373367ffd03ba01edaf671175244ab",
          legalText: "rockstargames-sites-gta-tvf625ffdd1b33a1642aa0dec12efe7897",
          shardsCarousel: "rockstargames-sites-gta-tve999b9cecfe233bcee8cab8682fb96bf"
        },
        Na = {
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
        ja = {
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
        Sa = e => {
          let {
            title: a = "",
            mobileImg: t,
            desktopImg: s
          } = e;
          const i = (0, G.useGetCdnSource)(t ?? null),
            r = (0, G.useGetCdnSource)(s ?? i);
          return (0, N.jsx)("div", {
            className: ya.shard,
            style: {
              "--background-image-mobile": `url(${i})`,
              "--background-image-desktop": `url(${r})`
            },
            children: (0, N.jsx)("h5", {
              children: a
            })
          })
        },
        wa = e => {
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
              return e.push((0, N.jsx)(Sa, {
                title: t,
                mobileImg: i?.full_src,
                desktopImg: r?.full_src
              })), e
            }), []))
          }), [t]), s ? (0, N.jsx)("div", {
            className: ya.shardsCarousel,
            children: (0, N.jsx)(xa, {
              title: a,
              slideChildren: s,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        Ca = e => {
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
          }), t), t.length ? n.length ? (0, N.jsx)(aa.q.div, {
            variants: a ? ja : void 0,
            children: (0, N.jsxs)(la, {
              buttonText: i,
              platformsAndLinks: n,
              children: [(0, N.jsxs)(aa.q.div, {
                className: ya.descriptions,
                variants: a ? ja : void 0,
                children: [(0, N.jsx)("h2", {
                  dangerouslySetInnerHTML: {
                    __html: r
                  }
                }), (0, N.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: s
                  }
                })]
              }), !!l && !!l.length && (0, N.jsx)(aa.q.div, {
                variants: ja,
                children: (0, N.jsx)(X, {
                  buttons: l,
                  className: ya.buttonGroup
                })
              })]
            })
          }) : (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsxs)(aa.q.div, {
              className: ya.descriptions,
              variants: a ? ja : void 0,
              children: [(0, N.jsx)("h2", {
                dangerouslySetInnerHTML: {
                  __html: r
                }
              }), (0, N.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: s
                }
              })]
            }), !!l && !!l.length && (0, N.jsx)(aa.q.div, {
              variants: ja,
              children: (0, N.jsx)(X, {
                buttons: l,
                className: ya.buttonGroup
              })
            })]
          }) : (0, N.jsxs)(aa.q.div, {
            className: ya.descriptions,
            variants: a ? ja : void 0,
            children: [(0, N.jsx)("h2", {
              dangerouslySetInnerHTML: {
                __html: r
              }
            }), (0, N.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: s
              }
            })]
          })
        },
        Ia = e => {
          let {
            animated: a = !1,
            brands: t = [],
            ctas: s = [],
            description: i = "",
            expandingButtonLabel: r = "Subscribe",
            title: n = "",
            legalText: c
          } = e;
          return (0, N.jsxs)(aa.q.div, {
            className: ya.content,
            initial: "hidden",
            animate: "visible",
            variants: a ? Na : void 0,
            children: [(0, N.jsx)(aa.q.div, {
              variants: a ? ja : void 0,
              children: (0, N.jsx)(O, {
                brands: t
              })
            }), (0, N.jsx)(Ca, {
              animated: a,
              ctas: s,
              description: i,
              expandingButtonLabel: r,
              title: n
            }), c && (0, N.jsx)(aa.q.div, {
              className: ya.legalText,
              variants: a ? ja : void 0,
              children: (0, N.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: c
                }
              })
            })]
          })
        },
        Ta = e => {
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
            _ = (0, G.useGetCdnSource)(t?.mobile?.full_src ?? null),
            p = (0, G.useGetCdnSource)(t?.desktop?.full_src ?? _),
            k = (0, G.useGetCdnSource)(o?.mobile?.full_src ?? null),
            v = (0, G.useGetCdnSource)(o?.desktop?.full_src ?? k);
          return (0, N.jsxs)(aa.q.div, {
            className: (0, G.classList)(ya.hero, i),
            style: {
              "--background-image-desktop": `url(${p})`,
              "--background-image-mobile": `url(${_})`,
              "--layered-image-desktop": `url(${v})`,
              "--layered-image-mobile": `url(${k})`
            },
            initial: "hidden",
            animate: "visible",
            variants: a ? Na : void 0,
            "data-type": "hero",
            theme: g,
            children: [(0, N.jsxs)("div", {
              className: ya.images,
              children: [p && _ ? (0, N.jsx)("div", {
                className: ya.background,
                style: t?.style ?? {}
              }) : "", k && v ? (0, N.jsx)("div", {
                className: ya.layered,
                style: l ? u : {}
              }) : "", (0, N.jsx)("div", {
                className: ya.gradient
              })]
            }), (0, N.jsx)(Ia, {
              animated: a,
              ctas: r,
              description: n,
              expandingButtonLabel: c,
              title: f,
              brands: s,
              legalText: d
            }), m?.shards && (0, N.jsx)(wa, {
              ...m
            })]
          })
        };
      var Ma = t(9784),
        La = t.n(Ma);
      const Ea = e => {
          let {
            children: a,
            attributes: t = {},
            className: s = "",
            style: i = {}
          } = e;
          return (0, N.jsx)("span", {
            className: (0, G.classList)(s, t?.className, "rockstargames-sites-gta-tva7f106a8036d74ed9282a741476c6b5a"),
            style: (0, ae.safeStyles)(i ?? t?.style ?? {}),
            dangerouslySetInnerHTML: {
              __html: La().unescape(a)
            }
          })
        },
        Ba = JSON.parse('{"us":{"aria_label_open_new_window":"(Opens in a new window)","plm_nav_scroll_left":"Scroll Left","plm_nav_scroll_right":"Scroll Right","language_selector_default":"Select a Language","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","sc_link_account":"Account","sc_link_activity_feed":"Activity Feed","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell My Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_messages":"Messages","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Toggle Social Club Menu","rp_icon":"RP Category","components_track_list_title":"Tracklist","disabled_label":"Disabled","next_button_label":"Next video page","previous_button_label":"Previous video page"},"de":{"aria_label_open_new_window":"(Öffnet ein neues Fenster)","plm_nav_scroll_left":"Links scrollen","plm_nav_scroll_right":"Rechts scrollen","language_selector_default":"Eine Sprache auswählen","profile_selector_mugshot":"Verbrecherfoto von {userName}","profile_selector_profile_card":"Profildaten","profile_selector_rp_icon":"RP-Kategorie","profile_selector_switch_character":"Charakter wechseln","sc_link_account":"Konto","sc_link_activity_feed":"Aktivitäten-Feed","sc_link_cookies_policy":"Cookie-Richtlinie","sc_link_cookies_settings":"Cookie-Einstellungen","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Meine Informationen nicht verkaufen","sc_link_find_friends":"Freunde finden","sc_link_friends":"Freunde","sc_link_game_activation":"Spielaktivierung","sc_link_help":"Hilfe","sc_link_import_friends":"Freunde importieren","sc_link_join_social_club":"Registrieren","sc_link_legal":"Rechtliches","sc_link_log_out":"Abmelden","sc_link_messages":"Nachrichten","sc_link_my_friends":"Meine Freunde","sc_link_notifications":"Benachrichtigungen","sc_link_privacy_policy":"Datenschutzrichtlinien","sc_link_settings":"Einstellungen","sc_link_sign_in":"Anmelden","sc_link_support":"Support","sc_link_view_my_profile":"Mein Profil ansehen","sc_menu_drag_handle":"Menü öffnen bzw. schließen","sc_menu_toggle":"Social-Club-Menü öffnen bzw. schließen","components_track_list_title":"Trackliste","disabled_label":"Deaktiviert","next_button_label":"Nächste Videoseite","previous_button_label":"Vorherige Videoseite"},"es":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","plm_nav_scroll_left":"Desplazar hacia la izquierda","plm_nav_scroll_right":"Desplazar hacia la derecha","language_selector_default":"Selecciona un idioma","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta de perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Ajustes de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendáis mis datos","sc_link_find_friends":"Buscar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación del juego","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registrarse","sc_link_legal":"Aviso legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Ajustes","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Asistencia técnica","sc_link_view_my_profile":"Ver mi perfil","sc_menu_drag_handle":"Arrastrar el controlador del menú","sc_menu_toggle":"Cambiar el menú del Social Club","components_track_list_title":"Lista de pistas","disabled_label":"Desactivado","next_button_label":"Página de vídeo siguiente","previous_button_label":"Página de vídeo anterior"},"mx":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","plm_nav_scroll_left":"Desplazarse hacia la izquierda","plm_nav_scroll_right":"Desplazarse hacia la derecha","language_selector_default":"Seleccionar un idioma","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta del perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Muro de actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configuración de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendan mis datos","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación de juegos","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registro","sc_link_legal":"Legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Configuración","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Soporte","sc_link_view_my_profile":"Ver mi perfil","sc_menu_drag_handle":"Mover el handle del menú","sc_menu_toggle":"Cambiar menú del Social Club","components_track_list_title":"Lista de canciones","disabled_label":"Desactivado","next_button_label":"Página de video siguiente","previous_button_label":"Página de video anterior"},"fr":{"aria_label_open_new_window":"(S’ouvre dans une nouvelle fenêtre)","plm_nav_scroll_left":"Faire défiler vers la gauche","plm_nav_scroll_right":"Faire défiler vers la droite","language_selector_default":"Sélectionner une langue","profile_selector_mugshot":"Photo d\'identité : {userName}","profile_selector_profile_card":"Carte du profil","profile_selector_rp_icon":"Catégorie de RP","profile_selector_switch_character":"Changer de personnage","sc_link_account":"Compte","sc_link_activity_feed":"Fil d\'activités","sc_link_cookies_policy":"Politique en matière de cookies","sc_link_cookies_settings":"Paramètres des cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Ne pas vendre mes informations","sc_link_find_friends":"Trouver des amis","sc_link_friends":"Amis","sc_link_game_activation":"Activation de jeux","sc_link_help":"Aide","sc_link_import_friends":"Importer des amis","sc_link_join_social_club":"S’inscrire","sc_link_legal":"Mentions légales","sc_link_log_out":"Se déconnecter","sc_link_messages":"Messages","sc_link_my_friends":"Mes amis","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Charte de confidentialité","sc_link_settings":"Paramètres","sc_link_sign_in":"Se connecter","sc_link_support":"Assistance","sc_link_view_my_profile":"Voir mon profil","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Afficher le menu du Social Club","components_track_list_title":"Liste des morceaux","disabled_label":"Désactivé","next_button_label":"Page vidéo suivante","previous_button_label":"Page vidéo précédente"},"it":{"aria_label_open_new_window":"(Apri in una nuova finestra)","plm_nav_scroll_left":"Scorri a sinistra","plm_nav_scroll_right":"Scorri a destra","language_selector_default":"Seleziona una lingua","profile_selector_mugshot":"Foto segnaletica di {userName}","profile_selector_profile_card":"Scheda del profilo","profile_selector_rp_icon":"Categoria RP","profile_selector_switch_character":"Cambia personaggio","sc_link_account":"Account","sc_link_activity_feed":"Feed attività","sc_link_cookies_policy":"Politica sui cookie","sc_link_cookies_settings":"Impostazioni dei cookie","sc_link_crews":"Crew","sc_link_do_not_sell_my_information":"Non vendere le mie informazioni","sc_link_find_friends":"Trova amici","sc_link_friends":"Amici","sc_link_game_activation":"Attivazione gioco","sc_link_help":"Assistenza","sc_link_import_friends":"Importa amici","sc_link_join_social_club":"Registrati","sc_link_legal":"Note legali","sc_link_log_out":"Esci","sc_link_messages":"Messaggi","sc_link_my_friends":"I miei amici","sc_link_notifications":"Notifiche","sc_link_privacy_policy":"Politica sulla privacy","sc_link_settings":"Impostazioni","sc_link_sign_in":"Accedi","sc_link_support":"Supporto","sc_link_view_my_profile":"Visualizza il mio profilo","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Apri/chiudi il menu del Social Club","components_track_list_title":"Tracklist","disabled_label":"Disabilitato","next_button_label":"Pagina di video successiva","previous_button_label":"Pagina di video precedente"},"jp":{"aria_label_open_new_window":"(新しいウィンドウで開きます)","plm_nav_scroll_left":"左にスクロール","plm_nav_scroll_right":"右にスクロール","language_selector_default":"言語を選択","profile_selector_mugshot":"{ユーザーネーム}顔写真","profile_selector_profile_card":"プロフィールカード","profile_selector_rp_icon":"RPカテゴリー","profile_selector_switch_character":"キャラクター変更","sc_link_account":"アカウント","sc_link_activity_feed":"アクティビティフィード","sc_link_cookies_policy":"クッキーポリシー","sc_link_cookies_settings":"クッキー設定","sc_link_crews":"クルー","sc_link_do_not_sell_my_information":"個人情報を売らないでください","sc_link_find_friends":"フレンドを検索","sc_link_friends":"フレンド","sc_link_game_activation":"ゲームアクティベーション","sc_link_help":"ヘルプ","sc_link_import_friends":"フレンドをインポート","sc_link_join_social_club":"サインアップ","sc_link_legal":"利用規約","sc_link_log_out":"ログアウト","sc_link_messages":"メッセージ","sc_link_my_friends":"フレンド","sc_link_notifications":"通知","sc_link_privacy_policy":"プライバシーポリシー","sc_link_settings":"設定","sc_link_sign_in":"サインイン","sc_link_support":"サポート","sc_link_view_my_profile":"プロフィールを表示","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Social Clubメニューを切り替え","components_track_list_title":"トラックリスト","disabled_label":"無効","next_button_label":"次のビデオページ","previous_button_label":"前のビデオページ"},"kr":{"aria_label_open_new_window":"(새 창에서 열기)","plm_nav_scroll_left":"왼쪽 스크롤","plm_nav_scroll_right":"오른쪽 스크롤","language_selector_default":"언어 선택","profile_selector_mugshot":"{userName} 머그샷","profile_selector_profile_card":"프로필 카드","profile_selector_rp_icon":"RP 카테고리","profile_selector_switch_character":"캐릭터 교체","sc_link_account":"계정","sc_link_activity_feed":"활동 피드","sc_link_cookies_policy":"쿠키 정책","sc_link_cookies_settings":"쿠키 설정","sc_link_crews":"조직","sc_link_do_not_sell_my_information":"내 정보 판매 안 함","sc_link_find_friends":"친구 찾기","sc_link_friends":"친구","sc_link_game_activation":"게임 활성화","sc_link_help":"도움말","sc_link_import_friends":"친구 불러오기","sc_link_join_social_club":"가입","sc_link_legal":"법률 관련","sc_link_log_out":"로그아웃","sc_link_messages":"메시지","sc_link_my_friends":"내 친구","sc_link_notifications":"알림","sc_link_privacy_policy":"개인 정보 보호 정책","sc_link_settings":"설정","sc_link_sign_in":"로그인","sc_link_support":"지원","sc_link_view_my_profile":"내 프로필 보기","sc_menu_drag_handle":"드래그 메뉴 핸들","sc_menu_toggle":"Social Club 메뉴 켜기/끄기","components_track_list_title":"트랙리스트","disabled_label":"비활성화됨","next_button_label":"다음 비디오 페이지","previous_button_label":"이전 비디오 페이지"},"pl":{"aria_label_open_new_window":"(Otwórz w nowym oknie)","plm_nav_scroll_left":"Przesuń w lewo","plm_nav_scroll_right":"Przesuń w prawo","language_selector_default":"Wybierz język","profile_selector_mugshot":"Zdjęcie – {userName}","profile_selector_profile_card":"Karta profilu","profile_selector_rp_icon":"Poziom RP","profile_selector_switch_character":"Zmień postać","sc_link_account":"Konto","sc_link_activity_feed":"Zajęcia","sc_link_cookies_policy":"Polityka plików cookie","sc_link_cookies_settings":"Ustawienia plików cookie","sc_link_crews":"Ekipy","sc_link_do_not_sell_my_information":"Zabraniam sprzedaży moich danych","sc_link_find_friends":"Szukaj znajomych","sc_link_friends":"Znajomi","sc_link_game_activation":"Aktywacja gry","sc_link_help":"Pomoc","sc_link_import_friends":"Importuj znajomych","sc_link_join_social_club":"Zarejestruj się","sc_link_legal":"Informacje prawne","sc_link_log_out":"Wyloguj się","sc_link_messages":"Wiadomości","sc_link_my_friends":"Moi znajomi","sc_link_notifications":"Powiadomienia","sc_link_privacy_policy":"Polityka prywatności","sc_link_settings":"Ustawienia","sc_link_sign_in":"Zaloguj się","sc_link_support":"Wsparcie","sc_link_view_my_profile":"Przeglądaj profil","sc_menu_drag_handle":"Przeciągnij uchwyt menu","sc_menu_toggle":"Włącz lub wyłącz menu Social Club","components_track_list_title":"Lista utworów","disabled_label":"Wyłączone","next_button_label":"Następna strona z filmami","previous_button_label":"Poprzednia strona z filmami"},"br":{"aria_label_open_new_window":"(Abre em uma nova janela)","plm_nav_scroll_left":"Rolar para a esquerda","plm_nav_scroll_right":"Rolar para a direita","language_selector_default":"Selecione um idioma","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Cartão de perfil","profile_selector_rp_icon":"Categoria de RP","profile_selector_switch_character":"Alternar personagem","sc_link_account":"Conta","sc_link_activity_feed":"Feed de atividade","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configurações de cookies","sc_link_crews":"Comandos","sc_link_do_not_sell_my_information":"Não vendam a minha informação","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Ativação de jogos","sc_link_help":"Ajuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Inscrever-se","sc_link_legal":"Aviso legal","sc_link_log_out":"Sair","sc_link_messages":"Mensagens","sc_link_my_friends":"Meus amigos","sc_link_notifications":"Notificações","sc_link_privacy_policy":"Política de Privacidade","sc_link_settings":"Configurações","sc_link_sign_in":"Iniciar sessão","sc_link_support":"Suporte","sc_link_view_my_profile":"Visualizar meu perfil","sc_menu_drag_handle":"Arrastar título do menu","sc_menu_toggle":"Alternar menu do Social Club","components_track_list_title":"Lista de faixas","disabled_label":"Desabilitado","next_button_label":"Próxima página de vídeos","previous_button_label":"Página anterior de vídeos"},"ru":{"aria_label_open_new_window":"(ссылка откроется в новом окне)","plm_nav_scroll_left":"Пролистать влево","plm_nav_scroll_right":"Пролистать вправо","language_selector_default":"Выбрать язык","profile_selector_mugshot":"Фотография игрока {userName}","profile_selector_profile_card":"Карта профиля","profile_selector_rp_icon":"Категория опыта","profile_selector_switch_character":"Сменить персонажа","sc_link_account":"Учетная запись","sc_link_activity_feed":"Лента событий","sc_link_cookies_policy":"Политика использования файлов Cookie","sc_link_cookies_settings":"Настройки файлов Cookie","sc_link_crews":"Банды","sc_link_do_not_sell_my_information":"Я запрещаю продавать свою личную информацию","sc_link_find_friends":"Поиск друзей","sc_link_friends":"Друзья","sc_link_game_activation":"Активация игры","sc_link_help":"Помощь","sc_link_import_friends":"Импорт друзей","sc_link_join_social_club":"Регистрация","sc_link_legal":"Юридическая информация","sc_link_log_out":"Выход","sc_link_messages":"Сообщения","sc_link_my_friends":"Мои друзья","sc_link_notifications":"Уведомления","sc_link_privacy_policy":"Политика конфиденциальности","sc_link_settings":"Настройки","sc_link_sign_in":"Войти","sc_link_support":"Поддержка","sc_link_view_my_profile":"Моя учетная запись","sc_menu_drag_handle":"Перенести маркер меню","sc_menu_toggle":"Переключить меню Social Club","components_track_list_title":"Список песен","disabled_label":"Отключено","next_button_label":"Следующая страница с видео","previous_button_label":"Предыдущая страница с видео"},"hans":{"aria_label_open_new_window":"（在新窗口中打开）","plm_nav_scroll_left":"向左滚动","plm_nav_scroll_right":"向右滚动","language_selector_default":"选择一种语言","profile_selector_mugshot":"{userName} 面部照片","profile_selector_profile_card":"档案卡","profile_selector_rp_icon":"声望值类别","profile_selector_switch_character":"切换角色","sc_link_account":"账户","sc_link_activity_feed":"活动动态","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 设置","sc_link_crews":"帮会","sc_link_do_not_sell_my_information":"请勿出售我的信息","sc_link_find_friends":"查找好友","sc_link_friends":"好友","sc_link_game_activation":"游戏激活","sc_link_help":"帮助","sc_link_import_friends":"导入好友","sc_link_join_social_club":"注册","sc_link_legal":"法律声明","sc_link_log_out":"登出","sc_link_messages":"信息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隐私政策","sc_link_settings":"设置","sc_link_sign_in":"登录","sc_link_support":"支持","sc_link_view_my_profile":"查看我的档案","sc_menu_drag_handle":"拖动菜单处理","sc_menu_toggle":"切换 Social Club 菜单","components_track_list_title":"曲目列表","disabled_label":"已禁用","next_button_label":"下一页视频","previous_button_label":"上一页视频"},"tw":{"aria_label_open_new_window":"（在新視窗開啟）","plm_nav_scroll_left":"向左捲動","plm_nav_scroll_right":"向右捲動","language_selector_default":"選擇語言","profile_selector_mugshot":"{userName} 罪犯檔案照","profile_selector_profile_card":"資料卡","profile_selector_rp_icon":"聲望值類別","profile_selector_switch_character":"切換角色","sc_link_account":"帳戶","sc_link_activity_feed":"動態活動","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 設定","sc_link_crews":"幫會","sc_link_do_not_sell_my_information":"不要販售我的個人資料","sc_link_find_friends":"尋找好友","sc_link_friends":"好友","sc_link_game_activation":"遊戲啟用","sc_link_help":"幫助","sc_link_import_friends":"匯入好友","sc_link_join_social_club":"註冊","sc_link_legal":"法律聲明","sc_link_log_out":"登出","sc_link_messages":"訊息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隱私權政策","sc_link_settings":"設定","sc_link_sign_in":"登入","sc_link_support":"支援","sc_link_view_my_profile":"查看我的設定檔","sc_menu_drag_handle":"拖曳選單控點","sc_menu_toggle":"開關 Social Club 選單","components_track_list_title":"曲目清單","disabled_label":"停用","next_button_label":"下一個影片頁面","previous_button_label":"上一個影片頁面"}}'),
        za = (0, l.Os)({
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          }
        }),
        Pa = {
          pillBtn: "rockstargames-sites-gta-tvcb792ef8796eaa09f8b5c1ee0230fcd7",
          selected: "rockstargames-sites-gta-tvc951b9f5173e8a37be389854c40995ee",
          scMenuStyles: "rockstargames-sites-gta-tvfa91a55e22ad688cba0bc1210eaf4726",
          languageSelector: "rockstargames-sites-gta-tvb631f2ce92e4a89f8eddebd32e8ed30a",
          open: "rockstargames-sites-gta-tvedc598921a872174190475d0ad016d15",
          linkWrapper: "rockstargames-sites-gta-tvc4b7087d1fcbaad6967e61b84160ff79",
          links: "rockstargames-sites-gta-tvc7d345d5c7e567e0ee75b792d5bdfb88",
          selectBoxWrapper: "rockstargames-sites-gta-tve3e55a10507405de05ae92006ec0d02b",
          selectBox: "rockstargames-sites-gta-tvc646a2bff16ec3003b027857488cd612",
          selectBoxOption: "rockstargames-sites-gta-tvbcccd1077d13d7fe1585655e5c5f8363"
        },
        $a = S((e => {
          let {
            theme: a,
            languageSelectorOpened: t,
            setLanguageSelectorOpened: s
          } = e;
          const i = (0, C.useLocation)(),
            r = (0, m.c)(),
            [n, c] = y(),
            [l, g] = (0, o.useState)(!1),
            u = (0, o.useMemo)((() => p()), []),
            _ = (0, o.useCallback)((e => {
              let a = i.pathname;
              const t = a.split("/");
              return h.map((e => e.subdomaincom)).includes(t[0]) && (a = t.slice(1).join("/")), u.currentSite?.site === f ? "en" === e ? `${window.location.origin}${a}${i.search}` : `${window.location.origin}/${e}${a}${i.search}` : `${window.location.origin}${a}${i.search}`
            }), [i]),
            k = (0, o.useRef)(null),
            [v, b] = (0, o.useState)(0),
            x = matchMedia("(hover: none) and (pointer: coarse)").matches,
            j = e => {
              if (s && s(!1), n.subdomaincom === e || "none" === e) return void(s && s(!1));
              const a = h.find((a => a.subdomaincom === e));
              a && (c(a.iso), window.location.href = _(e))
            };
          return (0, o.useEffect)((() => {
            void 0 !== t && !1 === t && !0 === l && g(!1)
          }), [t]), (0, o.useEffect)((() => {
            k.current && b(k.current.scrollHeight)
          }), [k]), (0, N.jsxs)("div", {
            className: [Pa.languageSelector, l ? Pa.open : ""].join(" "),
            "data-theme": a,
            children: [x && "sc-menu" === a && (0, N.jsx)("div", {
              className: Pa.selectBoxWrapper,
              children: (0, N.jsxs)("select", {
                className: Pa.selectBox,
                onClick: e => e.stopPropagation(),
                onChange: e => {
                  j(e.currentTarget.value)
                },
                "aria-label": r.formatMessage(za.language_selector_default),
                children: [(0, N.jsx)("option", {
                  className: Pa.selectBoxOption,
                  value: "none",
                  children: (0, N.jsx)(d.c, {
                    ...za.language_selector_default
                  })
                }), h.map((e => {
                  let {
                    label: a,
                    subdomaincom: t
                  } = e;
                  return (0, N.jsx)("option", {
                    className: Pa.selectBoxOption,
                    value: t,
                    children: a
                  }, `mobile-${t}`)
                }))]
              })
            }), (!x || "sc-menu" !== a) && (0, N.jsxs)(N.Fragment, {
              children: [(0, N.jsxs)("button", {
                onClick: e => {
                  e.stopPropagation(), s && s(!l), g(!l)
                },
                type: "button",
                "aria-label": r.formatMessage(za.language_selector_default),
                children: [(0, N.jsx)("i", {}), (0, N.jsx)("span", {
                  children: (0, N.jsx)(d.c, {
                    ...za.language_selector_default
                  })
                })]
              }), (0, N.jsx)("div", {
                className: Pa.linkWrapper,
                ref: k,
                style: {
                  "--ls-linkWrapper-opened-height": `${v}px`
                },
                children: (0, N.jsx)("div", {
                  className: Pa.links,
                  children: h.map((e => {
                    let {
                      subdomaincom: a,
                      label: t
                    } = e;
                    return (0, N.jsx)(T, {
                      to: _(a),
                      onClick: () => {
                        j(a)
                      },
                      tabIndex: l ? 0 : -1,
                      children: t
                    }, `desktop-${a}`)
                  }))
                })
              })]
            })]
          })
        }), Ba),
        Va = {
          layeredImage: "rockstargames-sites-gta-tva29c233d553c5905763bb69412c1ece4",
          layersWrapper: "rockstargames-sites-gta-tvaabf78eb3e1fe545556ad0fa5639296e",
          "hero-lg": "rockstargames-sites-gta-tvca666917bdeaed43fd0a7af7dc30a0f7",
          "hero-md": "rockstargames-sites-gta-tvf0a202fcbf13f1e91157e531ae829ea3",
          "hero-sm": "rockstargames-sites-gta-tve03dbf5d16aeab81ca65f4cb7e64446f",
          contain: "rockstargames-sites-gta-tvc4c3c929b11e88540e3f19d5715393ec",
          cover: "rockstargames-sites-gta-tvb283d6381c82abf4dde21c57b8fc5f66",
          fill: "rockstargames-sites-gta-tve9d16b94c1ed476c9346cb6f48f5ad3e",
          "bg-img": "rockstargames-sites-gta-tve45fabf9c4e04bf3ee27e9c84c50c09b",
          imageLayer: "rockstargames-sites-gta-tved8d0ad18a62f087629ff5831fa0ac55",
          "layer-lg-height": "rockstargames-sites-gta-tvfaf1d5c6b2fe2ad27d4bb95ba7388f3d",
          "layer-md-height": "rockstargames-sites-gta-tvb41041f11a5ef98325948acc3dec956c",
          "layer-sm-height": "rockstargames-sites-gta-tvba7d5822aa073c9e01cd682d65c18944",
          "layer-xl-height": "rockstargames-sites-gta-tvec2399a1f7e79e9aacba81b242ad0602",
          "layer-xs-height": "rockstargames-sites-gta-tva6ec38ac99c762fcf0dd99aa2ced8f2b",
          "layer-xxl-height": "rockstargames-sites-gta-tvd7c1314e717273dfbb2acd3d5e06e585",
          "layer-lg-width": "rockstargames-sites-gta-tvca0dd7a55a5db5ee358ce51a166e5431",
          "layer-md-width": "rockstargames-sites-gta-tvbd4c246f4f0eaf7173d104ed1e7c2d06",
          "layer-sm-width": "rockstargames-sites-gta-tvfe3f49cba9cc10e4e076a43a6b36b862",
          "layer-xl-width": "rockstargames-sites-gta-tvbde3d6485ac7bb483dcca1ad4e2bbe67",
          "layer-xs-width": "rockstargames-sites-gta-tvb87efd95b330cacd4a5eaecf83528f4d",
          "layer-xxl-width": "rockstargames-sites-gta-tvac872df7985f9d591c85f97c72d451dc",
          "bottom-y": "rockstargames-sites-gta-tvd63fdb49c964c28c5e8952cd79a393a0",
          "center-x": "rockstargames-sites-gta-tvd248443eb924360a5d1d7211094ea827",
          "center-y": "rockstargames-sites-gta-tva8d87c765a51d98f0e3a9afd149ed0dc",
          "left-x": "rockstargames-sites-gta-tvdcaa6339b43850be2e14967cab730041",
          "right-x": "rockstargames-sites-gta-tvb656d800e3d134bd3a7e273a5f6d7ae6",
          "top-y": "rockstargames-sites-gta-tvadaf230f139f906eb912b58b315406ac",
          border: "rockstargames-sites-gta-tvc73e199a8978fb80895753c9a38fcdff",
          shards: "rockstargames-sites-gta-tve650a715d6f220ad49bb568768154b0e",
          shards_three: "rockstargames-sites-gta-tvb0c8be28788c6b23cea904bdc60d7e07",
          shards_two: "rockstargames-sites-gta-tve41252d3a0aee1d229f6bddc20c38d47",
          dual: "rockstargames-sites-gta-tvdb575e1d021e69ebb4265a29484e2888"
        },
        Da = e => {
          let {
            style: a,
            className: t
          } = e;
          const s = {
              ...a
            },
            i = a["--border-image-source"];
          return i && (s["--border-image-source"] = `url(${(0,G.useGetCdnSource)(i)})`), (0, N.jsx)("div", {
            className: (0, G.classList)(Va.border, t),
            style: {
              ...s
            }
          })
        },
        Aa = e => e?.images ? (0, N.jsx)("div", {
          className: (0, G.classList)(Va.layeredImage, Va[e?.variantClass], Va[e?.wrapperSizeClass]),
          style: {
            ...e?.style ?? {}
          },
          children: (0, N.jsxs)("div", {
            className: Va.layersWrapper,
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
              return (0, N.jsx)(Me, {
                image: t,
                style: {
                  zIndex: o ?? ++a
                },
                imageStyle: d,
                className: (0, G.classList)(l, g, Va.imageLayer, Va[s], Va[i], Va[r], Va[n], Va[c]),
                alt: m
              }, o ?? ++a)
            })), e?.borderImage && (0, N.jsx)(Da, {
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
          return a ? (0, N.jsx)("div", {
            className: "rockstargames-sites-gta-tvefc561ad30f5dfe75c79d939737650dc",
            children: t
          }) : t
        },
        Fa = e => {
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
          return (0, N.jsx)(Oa, {
            hero: d,
            children: (0, N.jsx)("figure", {
              children: (0, N.jsxs)("div", {
                className: (0, G.classList)("rockstargames-sites-gta-tvcab262c98c7f5bb3e982d9b075b3c2a8", d ? "rockstargames-sites-gta-tvcefd6d8859aeec1057caed28caa160c3" : "", o?.hiddenMobile ? "hiddenMobile" : "", o?.hiddenLarge ? "hiddenLarge" : "", o?.className, c),
                style: (0, ae.safeStyles)({
                  ...n,
                  ...o?.style
                }),
                ...o,
                children: [(0, N.jsx)(Me, {
                  image: r,
                  className: c
                }), (r?.badge || r?.discountTxt || a || s) && (0, N.jsx)(Ue, {
                  badge: r?.discountTxt ?? r?.badge ?? a ?? s,
                  badgeType: t,
                  splitter: r?.splitter ?? i,
                  role: r?.role ?? l
                }), r?.caption && (0, N.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: r.caption
                  }
                })]
              })
            })
          })
        },
        Ra = {
          pillBtn: "rockstargames-sites-gta-tveea0db67b0aabf28288b288845324afe",
          selected: "rockstargames-sites-gta-tvd1d25362fd730ca979d5ad79de088f89",
          multiSourceContainer: "rockstargames-sites-gta-tvdc538bbfc2f407ed9fe840097ccac819",
          multiSourceImage: "rockstargames-sites-gta-tvee782a29692a8eb06db1287a4984c243",
          animatePlaceholder: "rockstargames-sites-gta-tvfbd73f5f70c2ce64aa9c9bd398f1a3b5",
          "loader-keyframes": "rockstargames-sites-gta-tvf6040b2ae96a9b0dcdb2d283c9caff59"
        },
        Ga = e => {
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
          return (0, N.jsxs)("div", {
            className: Ra.multiSourceContainer,
            children: [!l && (0, N.jsx)("img", {
              className: [t, Ra.animatePlaceholder].join(" "),
              src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjMzMzMzMzIi8+Cjwvc3ZnPgo=",
              sizes: "(max-width: 1024px) 100vw, 1024px",
              alt: "Loading...",
              style: i
            }), (0, N.jsx)("img", {
              className: [Ra.multiSourceImage, t].join(" "),
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
        Ha = {
          tag: "rockstargames-sites-gta-tved77774d2704bc0ebc0ac156542ae053"
        },
        Ua = e => {
          let {
            className: a,
            href: t,
            title: s,
            style: i
          } = e;
          const r = (0, N.jsxs)("div", {
            style: i,
            className: [Ha.tag, a].join(" "),
            children: [(0, N.jsx)("i", {}), s]
          });
          return void 0 !== t ? (0, N.jsx)(T, {
            to: t,
            children: r
          }) : r
        },
        Wa = {
          newswireBlock: "rockstargames-sites-gta-tva793f470884d207243d6c3caac8ad811",
          info: "rockstargames-sites-gta-tvd50f6d2bc5f983c05311292acb4c78a5",
          title: "rockstargames-sites-gta-tvcc389449dc1495fc9c323fc2c547857d",
          newswireBlockNoSpecialOrder: "rockstargames-sites-gta-tvffd167124f27c8e26a147f49c88796e5",
          preview: "rockstargames-sites-gta-tvbbfbcf32c8c892ea29f4178949643475",
          previewMobile: "rockstargames-sites-gta-tvf88852766488b21a28c42d230ea529a1",
          top: "rockstargames-sites-gta-tvfa1a6f4c7d94b94f5af2dc1ac9af79f1",
          startAnimation: "rockstargames-sites-gta-tve380e8c67066df6f33fc018341ea96e5"
        },
        qa = e => {
          let {
            index: a,
            post: t,
            noSpecialOrder: s = !1,
            style: i = {}
          } = e;
          const [r] = (0, C.useSearchParams)(), n = t.preview_images_parsed.newswire_block, c = {
            default: 0 !== a || s ? n.square || n.d16x9 || n._fallback : n.d16x9 || n.square || n._fallback,
            mobile: n.square || n._fallback
          }, [o, l] = (0, ae.usePreloadImg)(c.default), [d, m] = (0, ae.usePreloadImg)(c.mobile), g = {
            default: {
              backgroundImage: `url(${c.default})`
            },
            mobile: {
              backgroundImage: `url(${c.mobile})`
            }
          };
          return (0, N.jsx)(T, {
            "data-gtm-category": "Newswire",
            "data-gtm-action": "Article Block Click",
            "data-gtm-label": `${t.title}`,
            to: t.url,
            className: [Wa.newswireBlock, s ? Wa.newswireBlockNoSpecialOrder : "", null !== o ? Wa.startAnimation : ""].join(" "),
            children: (0, N.jsxs)(N.Fragment, {
              children: [0 !== a || r.get("tag_id") ? (0, N.jsx)("div", {
                className: Wa.preview,
                style: g.default
              }) : (0, N.jsxs)(N.Fragment, {
                children: [(0, N.jsx)("div", {
                  className: Wa.previewMobile,
                  style: g.mobile
                }), (0, N.jsx)("div", {
                  className: Wa.preview,
                  style: g.default
                })]
              }), (0, N.jsxs)("div", {
                className: Wa.info,
                children: [(0, N.jsxs)("div", {
                  className: Wa.top,
                  children: [t.primary_tags.length ? (0, N.jsx)(Ua, {
                    title: t.primary_tags[t.primary_tags.length > 1 && 722 === t.primary_tags[0].id ? 1 : 0].name
                  }) : "", (0, N.jsx)("time", {
                    dateTime: t.created,
                    children: t.created_formatted
                  })]
                }), (0, N.jsx)("h5", {
                  className: Wa.title,
                  dangerouslySetInnerHTML: {
                    __html: t.title
                  }
                })]
              })]
            })
          })
        };
      var Xa = t(5492),
        Ka = t.n(Xa);
      const Ya = (0, ae.withTranslations)((e => {
          let {
            relativeTo: a = "",
            tagId: t = null,
            metaUrl: s = "/newswire",
            t: i
          } = e;
          const [r] = (0, C.useSearchParams)(), {
            tagId: n = null
          } = (0, C.useParams)(), [c, l] = (0, o.useState)(n ?? t ?? r.get("tag_id")), [d, m] = (0, o.useState)(1), [g, f] = (0, o.useState)([]), [u, _] = (0, o.useState)(null), {
            data: p
          } = (0, E.useQuery)(Ka(), {
            variables: {
              tagId: Number(c),
              page: d,
              metaUrl: s
            },
            autoSetLoading: !0
          });
          return (0, o.useEffect)((() => {
            m(1), f([]), l(n ?? t ?? r.get("tag_id"))
          }), [r.get("tag_id")]), (0, o.useEffect)((() => {
            p && p.posts && p.posts.paging && _(p.posts.paging), p && p.posts && p.posts.results && f(g.concat(p.posts.results))
          }), [p]), g.length ? (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsx)(et, {
              posts: g,
              relativeTo: a,
              noSpecialOrder: null !== c
            }), null !== u && u.nextPage ? (0, N.jsx)(R, {
              onClick: () => m(d + 1),
              disabled: !1,
              context: "secondary",
              children: i("More Stories")
            }) : ""]
          }) : null
        })),
        Qa = {
          pillBtn: "rockstargames-sites-gta-tvafd0af959edb4a463c41ad4e9cc5dadc",
          selected: "rockstargames-sites-gta-tvbcd59aa4a9e88d86a2cbe8d4972f8f51",
          related: "rockstargames-sites-gta-tva748ad776070dab831edc1f67f66af08",
          posts: "rockstargames-sites-gta-tvc0aa38678decd13ca38886b4547efedd",
          just1post: "rockstargames-sites-gta-tvb1a31ddf7fd4458ee860d354a6a0ac92"
        },
        Za = (0, ae.withTranslations)((e => {
          let {
            posts: a,
            t
          } = e;
          return (0, N.jsxs)("section", {
            className: Qa.related,
            children: [(0, N.jsx)("h2", {
              children: t("Related Stories")
            }), (0, N.jsx)("div", {
              className: [Qa.posts, 1 === a.length ? Qa.just1post : ""].join(" "),
              children: a.map((e => (0, N.jsx)(qa, {
                noSpecialOrder: !0,
                post: e
              }, e.id)))
            })]
          })
        })),
        Ja = {
          newswireBlocks: "rockstargames-sites-gta-tvc2c8eedd25de7e186655f98b2a8d8960",
          noSpecialOrder: "rockstargames-sites-gta-tvc0d0db9dfc71c9f4f959b9c017b1ae4b"
        },
        et = (0, ae.withGtmTracking)((e => {
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
          }), [t.length]), (0, N.jsx)("div", {
            className: [Ja.newswireBlocks, a ? Ja.noSpecialOrder : "", Ja.contextHome].join(" "),
            children: t.map(((e, t) => (0, N.jsx)(qa, {
              index: t,
              noSpecialOrder: a,
              post: e
            }, e.id)))
          })
        })),
        at = {
          pillBtn: "rockstargames-sites-gta-tvf87ac9a7d56545847cf4d8ca471b03e6",
          selected: "rockstargames-sites-gta-tva8ea61e57fd58bfcb99aef7e6d687045",
          grid: "rockstargames-sites-gta-tva57241f29873f89f89ab8b27994e71c3",
          itemList: "rockstargames-sites-gta-tvdaec3f5ce63d42cb07e3e724737c8361",
          gtaplus: "rockstargames-sites-gta-tvbd78cfb71ed31029ba4279325166bfab",
          rdo: "rockstargames-sites-gta-tva6244398a800ffddab72c14f717b0eab",
          noImg: "rockstargames-sites-gta-tve88f741af7d5e0529ff4fb6bb82af04f",
          gtao: "rockstargames-sites-gta-tvab60d91453348d2e4c090ef3ebb04347",
          custom: "rockstargames-sites-gta-tvc20e7ba6ceaba3afd37095b172797711",
          yellow: "rockstargames-sites-gta-tvb16672deedfe102b065925cbe0fb931c",
          hotPink: "rockstargames-sites-gta-tvd0d01601de7131d9d6d11321b4299e59",
          red: "rockstargames-sites-gta-tvd1b5397aff94d33b57674b04a3456e03",
          turquoise: "rockstargames-sites-gta-tvd6541b973ce158c8f2fb81483015211f",
          purple: "rockstargames-sites-gta-tvf3e34d902681219d4d8490eb164f7727",
          teal: "rockstargames-sites-gta-tva6c3b6b6a2395eb18a1174294f26f4ea",
          blue: "rockstargames-sites-gta-tveade6e843c5afd48d3a8959fb0b88222",
          green: "rockstargames-sites-gta-tva82c313f8f85fc6304ddb703be2fa271",
          darkRed: "rockstargames-sites-gta-tvd394c61fdce2bf8894ffb801ee680c2a",
          darkBlue: "rockstargames-sites-gta-tvf1d73cc00a3ab644aab949183a8298a7",
          goldenrod: "rockstargames-sites-gta-tvcdcb0c5076309a329da2a6e857cc3bdf",
          skull: "rockstargames-sites-gta-tvba4bd16bff2fbc40616457007b4a7442"
        },
        {
          sanitize: tt
        } = Ee(),
        st = e => {
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
          }), [a]), t || a ? l && m ? (0, N.jsx)("div", {
            className: at.grid,
            style: {
              "--ordered-list-grid-column": l,
              "--ordered-list-grid-column-mobile": d ?? l
            },
            children: (0, N.jsx)("ol", {
              style: (0, ae.safeStyles)(i),
              className: (0, G.classList)(at.itemList, at.noImg, at[s], at[n]),
              children: m.map((e => (0, N.jsx)("li", {
                dangerouslySetInnerHTML: {
                  __html: tt(e.content)
                }
              }, e.content)))
            })
          }) : (0, N.jsx)("ol", {
            style: (0, ae.safeStyles)(i),
            className: (0, G.classList)(at.itemList, at.custom, c ? at.noImg : "", s ? at[s] : "", n ? at[n] : "", r ?? ""),
            children: a.map((e => (0, N.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: tt(e?.content ?? e)
              }
            }, e?.content)))
          }) : null
        },
        it = (e, a) => {
          const t = e.tiers && e.tiers.every((e => e.isComplete)),
            s = a.tiers && a.tiers.every((e => e.isComplete));
          return t && !s ? 1 : !t && s ? -1 : 0
        },
        rt = {
          pillBtn: "rockstargames-sites-gta-tve6891f053f06919f1ef0dc72cafe9ae7",
          selected: "rockstargames-sites-gta-tve5cce3088e494e8ddb9b0cf5528697a3",
          packCardTierIndicator: "rockstargames-sites-gta-tveee874b61946e2a65886d622445e1c38",
          tierIndicator: "rockstargames-sites-gta-tvbf9ed66cb83cf9a38bfc6fbb8e105fb7",
          active: "rockstargames-sites-gta-tvcfa711252c08391d3a0f1ecd8728a61a"
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
        ct = e => {
          let {
            tiers: a = nt
          } = e;
          return (0, N.jsx)("div", {
            className: rt.packCardTierIndicator,
            children: a?.map(((e, a) => (0, N.jsx)("div", {
              className: [rt.tierIndicator, e.isComplete ? rt.active : ""].join(" ")
            }, a)))
          })
        },
        ot = {
          pillBtn: "rockstargames-sites-gta-tve2e4b892ddcbdb2e09d3c3599a7e6c56",
          selected: "rockstargames-sites-gta-tvff5c3c023fc12b68c6bf92b560c479b1",
          packCard: "rockstargames-sites-gta-tvd6ef486c5f60d41c5662b092336c1f52",
          packCardImageBox: "rockstargames-sites-gta-tveb4637cb1c81d1def1fd92252f90d675",
          packCompleted: "rockstargames-sites-gta-tvfcd5bbd0d1e3ebd45cf2cb372468e62c",
          packCardTextBox: "rockstargames-sites-gta-tva124ee1b0383d30157e84108cf10b83b",
          badge: "rockstargames-sites-gta-tvd42fb1fd7d553d75675a251df2a255ee",
          icon: "rockstargames-sites-gta-tvcbc69eda17393995ac9d41a8b4b531e8",
          label: "rockstargames-sites-gta-tvd4649f3812d37e7407503d49dcaaba04"
        },
        lt = e => {
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
          const [m, g] = (0, o.useState)(!1), [f, u] = (0, o.useState)(d);
          (0, o.useEffect)((() => {
            if (r) {
              const e = r.some((e => !e.isComplete));
              g(!e)
            }
          }), [r]);
          const _ = `${s}?im=Resize,height=${l}`;
          return (0, ae.usePreloadImg)(_, (() => u(!0))), (0, N.jsx)(C.NavLink, {
            className: [ot.packCard, i, m ? ot.packCompleted : ""].join(" "),
            to: t,
            onClick: n,
            children: (0, N.jsxs)("div", {
              className: [ot.packCardImageBox, f ? ot.packCardImageLoaded : ""].join(" "),
              style: {
                backgroundImage: `url("${_}")`
              },
              children: [m && (0, N.jsxs)("div", {
                className: ot.badge,
                children: [(0, N.jsx)("div", {
                  className: ot.icon
                }), (0, N.jsx)("div", {
                  className: ot.label,
                  children: c
                })]
              }), (0, N.jsxs)("div", {
                className: ot.packCardTextBox,
                children: [(0, N.jsx)("h4", {
                  children: a
                }), !m && (0, N.jsx)(ct, {
                  tiers: r
                })]
              })]
            })
          })
        },
        dt = {
          pillBtn: "rockstargames-sites-gta-tvc0607ec9e0a3925181496fc555721e0a",
          selected: "rockstargames-sites-gta-tvff76988869bea7d18917be00339b2434",
          packList: "rockstargames-sites-gta-tvffeeb1f272f99c5cb4711e4956c65f7f",
          headerVisible: "rockstargames-sites-gta-tvf6652e03be6ce55bd8f068900093a707",
          packCard: "rockstargames-sites-gta-tva53b37fe7ab10b353eceea86123258a1",
          packGrid: "rockstargames-sites-gta-tvb85775dc95fb3881171ee42e49076cbf"
        },
        mt = e => {
          let {
            isHeaderVisible: a,
            packListItems: t,
            packListClassName: s = dt.packList,
            packGridClassName: i = dt.packGrid,
            selectPackCard: r,
            sortFunction: n = it
          } = e;
          const c = (0, o.useRef)(null),
            l = [...t].sort(n);
          return (0, N.jsx)("div", {
            className: [s, a ? dt.headerVisible : ""].join(" "),
            "data-testid": "pack-list",
            children: (0, N.jsx)("div", {
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
                return (0, N.jsx)(lt, {
                  title: a,
                  url: t,
                  className: dt.packCard,
                  imageUrl: s,
                  tiers: i,
                  onClick: () => r(a, t)
                }, t)
              }))
            })
          })
        },
        gt = {
          pillBtn: "rockstargames-sites-gta-tve2620ca79db4bb12b74eb4adbcba56ce",
          selected: "rockstargames-sites-gta-tvd429050d220c77a1c9e8631f9b9f4f02",
          navPill: "rockstargames-sites-gta-tvc3ef0af25cfc7d1d0048148984230190"
        },
        ft = e => {
          let {
            title: a,
            onClick: t,
            selected: s
          } = e;
          return (0, N.jsx)("button", {
            type: "button",
            onClick: t,
            className: [gt.navPill, s ? gt.selected : ""].join(" "),
            children: (0, N.jsx)("div", {
              children: a
            })
          })
        };
      var ut;

      function _t() {
        return _t = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = arguments[a];
            for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s])
          }
          return e
        }, _t.apply(this, arguments)
      }
      const pt = e => o.createElement("svg", _t({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none"
      }, e), ut || (ut = o.createElement("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "m15 18-6-6 6-6"
      })));
      var kt;

      function vt() {
        return vt = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = arguments[a];
            for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s])
          }
          return e
        }, vt.apply(this, arguments)
      }
      const bt = e => o.createElement("svg", vt({
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          fill: "none"
        }, e), kt || (kt = o.createElement("path", {
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "m9 18 6-6-6-6"
        }))),
        ht = {
          pillBtn: "rockstargames-sites-gta-tvfaa583ebd1250f30b148562c5964fa46",
          selected: "rockstargames-sites-gta-tvf55ea6a51cd0de4060f152d9a070e040",
          navScrollButton: "rockstargames-sites-gta-tvb13f52032a7c6105f881b2a3764d7ba6"
        },
        xt = e => {
          let {
            direction: a,
            className: t,
            ...s
          } = e;
          return (0, N.jsxs)("button", {
            type: "button",
            className: [t, ht.navScrollButton].join(" "),
            ...s,
            children: ["left" === a && (0, N.jsx)(pt, {}), "right" === a && (0, N.jsx)(bt, {})]
          })
        },
        yt = (0, l.Os)({
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
          pillBtn: "rockstargames-sites-gta-tva06d15859ff923574165bb46a5f3d0c9",
          selected: "rockstargames-sites-gta-tvcce410d6b0f750e4332a82432812a32f",
          navMenu: "rockstargames-sites-gta-tvc5752917b36e8045f6765318dcfad3da",
          navMenuMain: "rockstargames-sites-gta-tvc507169b0a2e6c92ea16615a7740d669",
          sectionMenu: "rockstargames-sites-gta-tva874d8cdf964d1c68df9cf8fdd085844",
          sectionItems: "rockstargames-sites-gta-tva3f32f28bb1f1c6a4695c53680da9ed0",
          nextSectionNavButton: "rockstargames-sites-gta-tve26ad999829c4c68eadd9af67ba89033",
          previousSectionNavButton: "rockstargames-sites-gta-tvec50957bce6305ff1dc54a0f7d6a997b",
          previousNavButton: "rockstargames-sites-gta-tvf9530895bd80a161771d5ca70d967f65",
          nextNavButton: "rockstargames-sites-gta-tvfdd74c0f93dcc9be87ca508ab0fe469a",
          navFeaturedItems: "rockstargames-sites-gta-tvc6f0521d960314244895945154ba6c4a"
        },
        jt = e => {
          let {
            navItems: a,
            category: t,
            onNavItemClick: s,
            isOpen: i,
            isHeaderVisible: r,
            menuClass: n = Nt.navMenu,
            menuContainerClass: c = Nt.navMenuMain,
            menuSectionClass: l = Nt.sectionMenu,
            menuPrevBtnClass: d = Nt.previousNavButton,
            menuNextBtnClass: g = Nt.nextNavButton
          } = e;
          const f = (0, m.c)(),
            {
              track: u
            } = (0, te.useGtmTrack)(),
            {
              pathname: _
            } = (0, C.useLocation)(),
            p = (0, o.useMemo)((() => Math.max(a.findIndex((e => e.name === t)), 0)), [a, _]),
            [k, v] = (0, o.useState)(p),
            [b, h] = (0, o.useState)(!1),
            [x, y] = (0, o.useState)(!1),
            [j, S] = (0, o.useState)(!1),
            w = (0, o.useRef)(null),
            I = (0, o.useCallback)(((e, a) => {
              w.current && w.current.slideTo(e), v(e), M(`Secondary Nav > ${a}`)
            }), [u]),
            T = (0, o.useCallback)(((e, t) => {
              M(`Secondary Nav > ${a[k].title} > ${e}`, t), s()
            }), [a, s, k, u]),
            M = (e, a) => {
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
            L = (0, o.useCallback)((e => {
              y(e.isEnd), S(e.isBeginning)
            }), []);
          return (0, o.useEffect)((() => {
            w.current && ((w.current.wrapperEl.clientWidth || 0) > (w.current.el.clientWidth || 0) ? (h(!0), w.current.params.centeredSlides = !0, w.current.params.centeredSlidesBounds = !0) : (h(!1), w.current.params.centeredSlides = !1, w.current.params.centeredSlidesBounds = !1))
          }), [w.current?.wrapperEl.clientWidth, w.current?.el.clientWidth]), (0, N.jsx)(aa.q.div, {
            className: n,
            initial: {
              height: 0
            },
            animate: {
              height: i ? "100dvh" : 0
            },
            children: (0, N.jsxs)("div", {
              className: c,
              children: [(0, N.jsxs)("div", {
                className: l,
                children: [!j && b && (0, N.jsx)("div", {
                  className: Nt.previousSectionNavButton,
                  children: (0, N.jsx)(xt, {
                    direction: "left",
                    className: d,
                    onClick: () => w.current?.slidePrev(),
                    "aria-label": f.formatMessage(yt.plm_nav_scroll_left)
                  })
                }), (0, N.jsx)("div", {
                  className: Nt.sectionItems,
                  children: (0, N.jsx)(K.wx, {
                    onBeforeInit: e => w.current = e,
                    onInit: L,
                    className: Nt.sectionItems,
                    direction: "horizontal",
                    grabCursor: !0,
                    slidesPerView: "auto",
                    initialSlide: k,
                    onSlideChange: L,
                    onResize: L,
                    children: a.map(((e, a) => {
                      let {
                        title: t
                      } = e;
                      return (0, N.jsx)(K.Ky, {
                        children: (0, N.jsx)(ft, {
                          title: t,
                          onClick: () => I(a, t),
                          selected: k === a
                        })
                      }, t)
                    }))
                  })
                }), !x && b && (0, N.jsx)("div", {
                  className: Nt.nextSectionNavButton,
                  children: (0, N.jsx)(xt, {
                    direction: "right",
                    className: g,
                    onClick: () => w.current?.slideNext(),
                    "aria-label": f.formatMessage(yt.plm_nav_scroll_right)
                  })
                })]
              }), (0, N.jsx)(mt, {
                isHeaderVisible: r,
                packListItems: a[k]?.subNavItems || [],
                selectPackCard: T
              })]
            })
          })
        },
        St = "rockstargames-sites-gta-tvc54c374409e11d1429ce99457cbf7441",
        wt = e => {
          let {
            children: a,
            data: t,
            onPageUpdate: s,
            page: i,
            className: r
          } = e;
          return (0, N.jsx)("a", {
            href: "#",
            className: i === t.page ? `rockstargames-sites-gta-tvc0eebf4f915ff9f5cc362e22d6d7d976 ${r??""}` : "",
            onClick: e => {
              e.preventDefault(), s(i)
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
          const i = Array.from(new Array(Math.min(a.pageCount, 8)), ((e, t) => t + Math.min(Math.max(a.pageCount - 8, 1), Math.max(2, a.page - 4))));
          return (0, N.jsxs)("div", {
            className: `rockstargames-sites-gta-tva626faab2a5a03e3466dda5c79960575 ${s??""}`,
            children: [a.pageCount > 8 ? (0, N.jsxs)(N.Fragment, {
              children: [(0, N.jsx)(wt, {
                data: a,
                onPageUpdate: t,
                page: 1,
                children: "1"
              }), 2 !== i[0] ? (0, N.jsx)("div", {
                className: St,
                children: "..."
              }) : ""]
            }) : "", i.map((e => (0, N.jsx)(wt, {
              data: a,
              onPageUpdate: t,
              page: e,
              className: s,
              children: e
            }, e))), a.pageCount > 8 ? (0, N.jsxs)(N.Fragment, {
              children: [i.slice(-1)[0] + 1 < a.pageCount ? (0, N.jsx)("div", {
                className: St,
                children: "..."
              }) : "", (0, N.jsx)(wt, {
                data: a,
                onPageUpdate: t,
                page: a.pageCount,
                children: a.pageCount
              })]
            }) : ""]
          })
        };
      var It = t(7616);
      const Tt = e => {
          let {
            children: a
          } = e;
          const {
            parallaxController: t
          } = (0, It.oZ)();
          return (0, o.useLayoutEffect)((() => {
            if (!t) return;
            const e = setInterval((() => {
              t.update()
            }), 500);
            return () => clearInterval(e)
          }), [t]), a
        },
        Mt = {
          parallaxWrapper: "rockstargames-sites-gta-tvdb1ab316d17367d31cf94cdde25e463a",
          large: "rockstargames-sites-gta-tvd520d28c6e4e797aea99f61c89ad2bd8",
          medium: "rockstargames-sites-gta-tvf008365ee42d37e24e606107346b1c83",
          small: "rockstargames-sites-gta-tvcb5937d1a102ac4a66c4e373e6253946"
        },
        Lt = e => {
          let {
            scrollAxis: a = "vertical",
            size: t = "",
            style: s = {},
            children: i
          } = e;
          return (0, N.jsx)(It.qK, {
            scrollAxis: a,
            children: (0, N.jsx)(Tt, {
              children: (0, N.jsx)("div", {
                className: (0, G.classList)(Mt.parallaxWrapper, Mt[t]),
                style: s,
                "data-context": "parallax-wrapper",
                children: i ? i.map(((e, t) => (0, o.cloneElement)(e, {
                  scrollAxis: a,
                  style: {
                    ...e?.props?.style,
                    zIndex: t
                  }
                }))) : (0, N.jsx)("div", {})
              })
            })
          })
        },
        Et = e => {
          let {
            layers: a = [],
            displayClass: t = "",
            style: s = {}
          } = e;
          const i = (0, G.useGenerateCdnSource)();
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
          return (0, N.jsx)(It.Sr, {
            className: (0, G.classList)("rockstargames-sites-gta-tvb8c85703a3c76902e49a61a6afcb81bc", t),
            layers: r,
            style: s
          })
        },
        Bt = "rockstargames-sites-gta-tvc4aa8e5d29b433c400796d0c493a9a4d",
        zt = e => {
          let {
            minOffset: a = 0,
            maxOffset: t = 0,
            scrollAxis: s = "vertical",
            displayClass: i = "",
            style: r = {},
            children: n
          } = e;
          return "horizontal" === s ? (0, N.jsx)(It.mw, {
            x: [a, t],
            className: (0, G.classList)(Bt, i),
            styleOuter: r,
            children: n
          }) : (0, N.jsx)(It.mw, {
            y: [a, t],
            className: (0, G.classList)(Bt, i),
            styleOuter: r,
            children: n
          })
        },
        Pt = (e, a) => {
          switch (e) {
            case "pc":
              return "small" === a ? {
                src: t(6452),
                alt: "PC"
              } : {
                src: t(804),
                alt: "PC"
              };
            case "ps4":
              return "small" === a ? {
                src: t(4120),
                alt: "PS4"
              } : {
                src: t(564),
                alt: "PS4"
              };
            case "ps5":
              return "small" === a ? {
                src: t(3788),
                alt: "PS5"
              } : {
                src: t(2756),
                alt: "PS5"
              };
            case "xboxone":
              return "small" === a ? {
                src: t(4904),
                alt: "Xbox One"
              } : {
                src: t(2064),
                alt: "Xbox One"
              };
            case "xboxsx":
              return "small" === a ? {
                src: t(9916),
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
        $t = e => t(e < 100 ? 4184 : e > 99 && e < 500 ? 9450 : e > 499 && e < 750 ? 1216 : 5724),
        Vt = (0, l.Os)({
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
        Dt = {
          pillBtn: "rockstargames-sites-gta-tve4a42eaa9bfb682035e61ac2e2a34515",
          selected: "rockstargames-sites-gta-tveb889d8958be54a67b790d7529530986",
          scCharacterCard: "rockstargames-sites-gta-tvdf279e92086c0d3c96905b3a91b369ed",
          scAvatar: "rockstargames-sites-gta-tvc1890feda663c93b0f767890394cbdcf",
          scCharNames: "rockstargames-sites-gta-tve79d7f5515617d849d7d13cd4ff048ce",
          scCharacterStats: "rockstargames-sites-gta-tvc721f3aeef9e5ae6b98adca1253e4709",
          scUserName: "rockstargames-sites-gta-tveabff0cc0139013f5a60fea6f48c56f6",
          scRpLevel: "rockstargames-sites-gta-tvb1f87c58a800ad546200fbf17e029f35",
          scRpIcon: "rockstargames-sites-gta-tvf1e0bcba6214698c490b8201bbd850b7"
        },
        At = S((e => {
          let {
            characterData: a
          } = e;
          const s = (0, m.c)(),
            {
              platform: i,
              platformUsername: r,
              mugshotUrl: n,
              stats: c
            } = a,
            [l, d] = (0, o.useState)(n),
            g = Pt(i, "large");
          return (0, N.jsxs)("div", {
            className: Dt.scCharacterCard,
            children: [(0, N.jsx)("div", {
              className: Dt.scAvatar,
              "data-size": "small",
              children: (0, N.jsx)("img", {
                src: l,
                alt: s.formatMessage(Vt.profile_selector_mugshot, {
                  userName: r
                }),
                onError: () => {
                  d(t(1084))
                }
              })
            }), (0, N.jsx)("div", {
              className: Dt.scCharacterStats,
              children: (0, N.jsxs)("div", {
                className: Dt.scCharNames,
                children: [(0, N.jsx)("img", {
                  src: g.src,
                  alt: g.alt
                }), (0, N.jsx)("div", {
                  className: Dt.scUserName,
                  "data-size": "small",
                  children: r
                }), (0, N.jsx)("div", {
                  className: Dt.scRp,
                  children: (0, N.jsxs)("div", {
                    className: Dt.scRpLevel,
                    children: [(0, N.jsx)("img", {
                      className: Dt.scRpIcon,
                      src: $t(c.overview.rank.value),
                      alt: s.formatMessage(Vt.profile_selector_rp_icon)
                    }), (0, N.jsx)("span", {
                      children: a.stats.overview.rank.value
                    })]
                  })
                })]
              })
            })]
          })
        }), Ba),
        Ot = (0, E.makeVarNamespace)("@rockstargames/components/profile-switcher"),
        Ft = Ot("languageSelectorOpenedReactive", !1),
        Rt = e => Ft(e),
        Gt = Ot("activeSubNavIdReactive", -1),
        Ht = e => Gt(e),
        Ut = Ot("subNavExtraHeightReactive", -1),
        Wt = e => Ut(e),
        qt = Ot("scNavOpenedReactive", !0),
        Xt = e => qt(e),
        Kt = Ot("charListHiddenReactive", !0),
        Yt = e => Kt(e),
        Qt = () => {
          const e = (0, E.useReactiveVar)(Ft),
            a = (0, E.useReactiveVar)(Gt),
            t = (0, E.useReactiveVar)(Ut),
            s = (0, E.useReactiveVar)(qt),
            i = (0, E.useReactiveVar)(Kt);
          return (0, o.useEffect)((() => {
            i || (e && Rt(!1), s && (Xt(!1), Ht(-1)))
          }), [i]), (0, o.useEffect)((() => {
            !e && i && (s || Xt(!0))
          }), [e, i]), (0, o.useMemo)((() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: Rt,
            activeSubNavId: a,
            setActiveSubNavId: Ht,
            subNavExtraHeight: t,
            setSubNavExtraHeight: Wt,
            scNavOpened: s,
            setScNavOpened: Xt,
            charListHidden: i,
            setCharListHidden: Yt
          })), [e, a, t, s, i])
        };
      var Zt = t(9760),
        Jt = t.n(Zt),
        es = t(9860);
      const as = {
          event: "account_menu_click",
          element_placement: "Account Menu"
        },
        ts = e => ({
          text: e.formatMessage(Vt.sc_link_help),
          target: "_self",
          ga: {
            ...as,
            text: Vt.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          children: [{
            text: e.formatMessage(Vt.sc_link_support),
            location: {
              domain: "support",
              path: "/"
            },
            target: "_self",
            ga: {
              ...as,
              text: Vt.sc_link_support.defaultMessage
            },
            dataTestId: "supportLink"
          }, {
            text: e.formatMessage(Vt.sc_link_legal),
            location: {
              domain: f,
              path: "/legal"
            },
            target: "_self",
            ga: {
              ...as,
              text: Vt.sc_link_legal.defaultMessage
            },
            dataTestId: "legalLink"
          }, {
            text: e.formatMessage(Vt.sc_link_privacy_policy),
            location: {
              domain: f,
              path: "/privacy"
            },
            target: "_self",
            ga: {
              ...as,
              text: Vt.sc_link_privacy_policy.defaultMessage
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: e.formatMessage(Vt.sc_link_cookies_policy),
            location: {
              domain: f,
              path: "/cookies"
            },
            target: "_self",
            ga: {
              ...as,
              text: Vt.sc_link_cookies_policy.defaultMessage
            },
            dataTestId: "cookiesPolicyLink"
          }, {
            text: e.formatMessage(Vt.sc_link_cookies_settings),
            onClickCallback: e => {
              e.preventDefault(), window.OneTrust?.ToggleInfoDisplay()
            },
            target: "_self",
            ga: {
              ...as,
              text: Vt.sc_link_cookies_settings.defaultMessage
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: e.formatMessage(Vt.sc_link_do_not_sell_my_information),
            location: {
              domain: f,
              path: "/ccpa"
            },
            target: "_self",
            ga: {
              ...as,
              text: Vt.sc_link_do_not_sell_my_information.defaultMessage
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        }),
        ss = {
          pillBtn: "rockstargames-sites-gta-tveb30ffefc0c8fef449ca5348a2702622",
          selected: "rockstargames-sites-gta-tvcd058a755e77eeb55cf666fa43fadf75",
          scSubLink: "rockstargames-sites-gta-tvfdaa918acc06706cbe191dedd40974af",
          scLink: "rockstargames-sites-gta-tvcbc80932118c48d8ec14448d8913d068"
        },
        is = e => {
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
            reloadDocument: m = !1
          } = e;
          const {
            track: g
          } = (0, te.useGtmTrack)(), f = p();
          let u = s;
          i && (u = i.domain === f.currentSite?.site ? i.path : `https://${f.sites[i.domain]}.rockstargames.com${i.path}`);
          const _ = {
            ...r,
            link_url: u
          };
          return (0, N.jsxs)(C.Link, {
            className: c ? ss.scSubLink : ss.scLink,
            "data-testid": n || "menuLink",
            title: a,
            to: u,
            target: t,
            rel: "noreferrer",
            reloadDocument: m,
            tabIndex: d,
            onClick: e => {
              g(_), l(e)
            },
            children: [a, o && (0, N.jsx)("span", {
              className: ss.scLinkNotification
            })]
          })
        },
        rs = e => {
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
            setSubNavExtraHeight: f,
            reloadDocument: u = !1,
            onClickCallback: _ = (() => {})
          } = e;
          const {
            windowWidth: p,
            windowHeight: k
          } = (0, ae.useWindowResize)(), {
            track: v
          } = (0, te.useGtmTrack)(), {
            navOpen: b
          } = (0, te.useRockstarUserState)(), h = (0, o.useRef)(null), [x, y] = (0, o.useState)(0), [j, S] = (0, o.useState)(0), [w, C] = (0, o.useState)(!0);
          return (0, o.useEffect)((() => {
            m !== a && !1 === w && C(!0), m === a && C(!1)
          }), [m]), (0, o.useEffect)((() => {
            if (!h.current) return;
            y(h?.current?.scrollHeight);
            const e = window.getComputedStyle(h.current);
            if (e) {
              let a = 16 * parseInt(e.getPropertyValue("--scSubNav-opened-margin"), 10);
              Number.isNaN(a) && (a = 0), S(a)
            }
          }), [h, p, k]), d.length > 0 ? (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsxs)("button", {
              className: "rockstargames-sites-gta-tvaf10b4154b04475edc11366934576ecd",
              type: "button",
              "data-testid": l || "menuButton",
              title: t,
              tabIndex: b ? 0 : -1,
              "data-children-hidden": w,
              onClick: e => {
                e.stopPropagation(), v(n), m === a ? (g(-1), f(0)) : (g(a), f(x + j + j))
              },
              children: [(0, N.jsx)("span", {
                className: "rockstargames-sites-gta-tvfd722aa4f6d05656ee6e37f952bd13d0",
                children: t
              }), (0, N.jsx)("span", {
                className: "rockstargames-sites-gta-tvbe674f27adc299eab348b49f71429b71"
              })]
            }, t), (0, N.jsx)("nav", {
              className: "rockstargames-sites-gta-tvff1911053a3515534dd825554a85909e",
              ref: h,
              "aria-hidden": w,
              style: {
                height: w ? 0 : `${x}px`
              },
              children: d.map((e => (0, N.jsx)(is, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: w || !b ? -1 : 0
              })))
            })]
          }) : (0, N.jsx)(is, {
            text: t,
            target: s,
            href: i,
            location: r,
            ga: n,
            hasNotifications: c,
            dataTestId: l,
            isSubLink: !1,
            onClickCallback: _,
            tabIndex: b ? 0 : -1,
            reloadDocument: u
          })
        },
        ns = e => {
          let {
            sc: a
          } = e;
          const {
            windowWidth: t,
            windowHeight: s
          } = (0, ae.useWindowResize)(), i = (0, m.c)(), {
            languageSelectorOpened: r,
            setLanguageSelectorOpened: n,
            activeSubNavId: c,
            setActiveSubNavId: l,
            subNavExtraHeight: d,
            setSubNavExtraHeight: g
          } = Qt(), {
            setSelectedCharacterTuple: f,
            navOpen: u
          } = (0, te.useRockstarUserState)(), _ = (0, ae.useLocale)(), k = (0, ae.toScLocaleString)(_), [v, b] = (0, o.useState)(""), h = (0, C.useLocation)(), x = `${a.login}?returnUrl=${v}&lang=${k}`, y = `${a.signup}&returnUrl=${v}&lang=${k}`, j = (0, o.useMemo)((() => p()), []), S = (0, o.useMemo)((() => {
            const e = ((e, a, t) => [{
              text: e.formatMessage(Vt.sc_link_sign_in),
              href: a,
              ga: {
                event: "cta_login",
                text: Vt.sc_link_sign_in.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "loginLink"
            }, {
              text: e.formatMessage(Vt.sc_link_join_social_club),
              href: t,
              ga: {
                event: "cta_signup",
                text: Vt.sc_link_join_social_club.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "signUpLink"
            }, ts(e)])(i, x, y);
            return e
          }), [i, x, y, j]), [w, I] = (0, o.useState)(0), T = (0, o.createRef)(), M = () => {
            if (T.current) {
              const {
                current: e
              } = T, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), I(a + e)
              } else I(a)
            }
          };
          return (0, o.useEffect)((() => {
            const e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            b(e)
          }), [h]), (0, o.useEffect)((() => {
            f(!1)
          }), []), (0, o.useEffect)((() => {
            M(), Jt()((() => {
              setTimeout(M, 0)
            }), 300)
          }), [t, s]), (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsx)("nav", {
              className: "rockstargames-sites-gta-tvb1552e1f97b08ee4337f78fa4486ffac",
              children: (0, N.jsx)("div", {
                className: "rockstargames-sites-gta-tvc5bc9bec611f9f0514176014ce835e1e",
                "data-logged-in": "false",
                ref: T,
                style: {
                  "--scNavWrap-max-height": `${d+w}px`
                },
                children: S.map((e => (0, o.createElement)(rs, {
                  ...e,
                  activeSubNavId: c,
                  setActiveSubNavId: l,
                  setSubNavExtraHeight: g,
                  key: e.text
                })))
              })
            }), (0, N.jsx)("div", {
              className: "rockstargames-sites-gta-tva6c12c94e8656e88958552d645fe51fe",
              style: {
                visibility: u ? null : "hidden"
              },
              children: (0, N.jsx)(es.LanguageSelector, {
                theme: "sc-menu",
                languageSelectorOpened: r,
                setLanguageSelectorOpened: e => {
                  l(-1), n(e)
                },
                defaultMessage: "Select a Language"
              })
            })]
          })
        },
        cs = e => {
          let {
            characterData: a,
            setMobileCardWidth: s,
            tabIndex: i
          } = e;
          const r = (0, m.c)(),
            {
              currentCharId: n,
              setCurrentCharId: c
            } = (0, te.useRockstarUserState)(),
            {
              track: l
            } = (0, te.useGtmTrack)(),
            d = (0, o.createRef)(),
            {
              platform: g,
              platformUsername: f,
              mugshotUrl: u,
              stats: _
            } = a,
            [p, k] = (0, o.useState)(u),
            [v] = (0, o.useState)(a.index),
            b = Pt(g, "large"),
            h = n === a.index;
          return (0, o.useEffect)((() => {
            d.current && s && s(d?.current?.offsetWidth)
          }), [d]), (0, N.jsxs)("button", {
            className: "rockstargames-sites-gta-tvd76e785563451a50438064ac368aae4b",
            type: "button",
            "aria-hidden": h,
            onClick: e => {
              e.stopPropagation(), c(v);
              let a = "";
              "pc" === g ? a = "PC" : "ps4" === g ? a = "PS4" : "ps5" === g ? a = "PS5" : "xboxone" === g ? a = "Xbox One" : "xboxsx" === g && (a = "Xbox Series X|S"), l({
                event: "character_selector_select",
                event_action: "select",
                event_category: "character_selector",
                event_label: a,
                position: v
              })
            },
            ref: d,
            tabIndex: i,
            children: [(0, N.jsx)("div", {
              className: "rockstargames-sites-gta-tvbbdf69fe97471593355fc51ec9a6d13a",
              "data-size": "small",
              children: (0, N.jsx)("img", {
                src: p,
                alt: r.formatMessage(Vt.profile_selector_mugshot, {
                  userName: f
                }),
                onError: () => {
                  k(t(1084))
                }
              })
            }), (0, N.jsxs)("div", {
              className: "rockstargames-sites-gta-tvc0dc303ef48255c09faa4ad2f4e953e7",
              children: [(0, N.jsxs)("div", {
                className: "rockstargames-sites-gta-tve9fbbbcea66d86dbd58b8548a5f6bea8",
                children: [(0, N.jsx)("img", {
                  src: b.src,
                  alt: b.alt
                }), (0, N.jsx)("div", {
                  className: "rockstargames-sites-gta-tvb3726d8b480695f64fddc723c6f35205",
                  "data-size": "small",
                  children: f
                })]
              }), (0, N.jsx)("div", {
                className: "rockstargames-sites-gta-tva5e3df42966a50f3dd88bbcb57536617",
                children: (0, N.jsxs)("div", {
                  className: "rockstargames-sites-gta-tva6776312350028898320ba59145a39be",
                  children: [(0, N.jsx)("img", {
                    className: "rockstargames-sites-gta-tvb266652910ad34c0e8e097b212a958f0",
                    src: $t(_.overview.rank.value),
                    alt: r.formatMessage(Vt.profile_selector_rp_icon)
                  }), (0, N.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                })
              })]
            })]
          })
        },
        os = {
          pillBtn: "rockstargames-sites-gta-tvd9464c4b4d92881abe5578988bd68af7",
          selected: "rockstargames-sites-gta-tvbc0a950bffee0ee9e28213912da51427",
          scProfileDetails: "rockstargames-sites-gta-tvb954455f6ff25f2350e1a0960ba97d3e",
          scAvatar: "rockstargames-sites-gta-tvc15a60de0fc8df4960d84ab96caa8a62",
          scAvatarPlatform: "rockstargames-sites-gta-tva8f66dccf33827dc81107cae3196cfbe",
          scProfileStats: "rockstargames-sites-gta-tvc91f8623fa10edbeba8c79c7d6b26a28",
          scNames: "rockstargames-sites-gta-tvda83fc27513bcac6a8a31eadc89b1c2c",
          scTagsNames: "rockstargames-sites-gta-tvd7ce73d22672e2e2f59e9193c2632531",
          scUserName: "rockstargames-sites-gta-tvd5814836ce152affaa22d226819b5b12",
          scCrewName: "rockstargames-sites-gta-tvb7777817be6d756cc2d1585c1377734c",
          scCrewRankBar: "rockstargames-sites-gta-tva581d240520cf347e5ff5f6a62a36a97",
          scCrewRankBarItem: "rockstargames-sites-gta-tvbdb056c03ef06b99d69426c87cec67c5",
          scProgress: "rockstargames-sites-gta-tvdc3020fbe81a916a8da4719ef052c278",
          scRpLevel: "rockstargames-sites-gta-tvb2ea0e0d19182355913368bf7be016b8",
          scRpIcon: "rockstargames-sites-gta-tvf17a712b43b5234c07dc44f674433cf6",
          scMoney: "rockstargames-sites-gta-tvf14849be516f588e1bc9e252a109c76f",
          scCash: "rockstargames-sites-gta-tvb3e35cdc6557f7c3886700245af352dd",
          scBank: "rockstargames-sites-gta-tvec696aafed90a7a4c69dc53da0a5bb36"
        },
        ls = e => {
          let {
            character: a,
            platformTag: s
          } = e;
          const {
            data: i
          } = (0, te.useRockstarUser)(), {
            track: r
          } = (0, te.useGtmTrack)(), n = (0, m.c)(), [c, l] = (0, o.useState)([]), [d, g] = (0, o.useState)(null), [f, u] = (0, o.useState)(null), [_, p] = (0, o.useState)(!1), [k, v] = (0, o.useState)(-1), [b, h] = (0, o.useState)([]), [x, y] = (0, o.useState)(0), j = t(1084), [S, w] = (0, o.useState)("0"), [C, I] = (0, o.useState)("0"), T = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), M = () => {
            E((0, N.jsx)("img", {
              src: j,
              alt: n.formatMessage(Vt.profile_selector_mugshot, {
                userName: i.nickname
              })
            }))
          }, [L, E] = (0, o.useState)((0, N.jsx)("img", {
            className: os.scAvatarImg,
            src: a.mugshotUrl,
            alt: n.formatMessage(Vt.profile_selector_mugshot, {
              userName: i.nickname
            }),
            onError: M
          }));
          (0, o.useEffect)((() => {
            l(i.crews ?? [])
          }), [i]), (0, o.useEffect)((() => {
            E((0, N.jsx)("img", {
              src: a.mugshotUrl,
              alt: i.nickname,
              onError: M
            })), w(T(a.stats.overview.bank.value)), I(T(a.stats.overview.cash.value)), y(parseInt(a.stats.overview.rank.value))
          }), [a, i]), (0, o.useEffect)((() => {
            c && c.forEach((e => {
              !0 === e.isPrimary && (g(e.crewTag), u(e.crewColour), v(e.rankOrder), p(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && p(!0))
            }))
          }), [c]), (0, o.useEffect)((() => {
            const e = [];
            if (!_ && k > -1)
              for (let a = 5; a > k; a -= 1) e.push((0, N.jsx)("div", {
                className: os.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== f ? f : ""
                }
              }, `crewrankbar-${a}`));
            h(e)
          }), [k, _, f]);
          const B = e => {
            e.stopPropagation(), r({
              event: "character_selector_profile_click",
              event_action: "profile_click",
              event_category: "character_selector",
              event_label: s.alt,
              link_url: void 0
            })
          };
          return (0, N.jsxs)("div", {
            className: os.scProfileDetails,
            onClick: B,
            onKeyUp: B,
            role: "button",
            tabIndex: -1,
            children: [(0, N.jsxs)("div", {
              className: os.scAvatar,
              children: [L, (0, N.jsx)("div", {
                className: os.scAvatarPlatform,
                "data-platform": a.platform,
                children: (0, N.jsx)("img", {
                  src: s.src,
                  alt: s.alt
                })
              })]
            }), (0, N.jsxs)("div", {
              className: os.scProfileStats,
              children: [(0, N.jsx)("div", {
                className: os.scNames,
                children: (0, N.jsxs)("div", {
                  className: os.scTagsNames,
                  children: [(0, N.jsx)("span", {
                    className: os.scUserName,
                    children: a.platformUsername
                  }), d && (0, N.jsxs)("span", {
                    className: os.scCrewName,
                    "data-arrow-tag": _,
                    children: [d, !_ && (0, N.jsx)("div", {
                      className: os.scCrewRankBar,
                      children: b
                    })]
                  })]
                })
              }), (0, N.jsxs)("div", {
                className: os.scProgress,
                children: [(0, N.jsxs)("div", {
                  className: os.scRpLevel,
                  children: [(0, N.jsx)("img", {
                    className: os.scRpIcon,
                    src: $t(x),
                    alt: n.formatMessage(Vt.profile_selector_rp_icon)
                  }), (0, N.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                }), (0, N.jsxs)("div", {
                  className: os.scMoney,
                  children: [(0, N.jsxs)("span", {
                    className: os.scCash,
                    children: ["$", C]
                  }), (0, N.jsxs)("span", {
                    className: os.scBank,
                    children: ["$", S]
                  })]
                })]
              })]
            })]
          })
        },
        ds = (e, a) => {
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
        ms = e => {
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
            m = ds(d, !1),
            [g, f] = (0, o.useState)(!1),
            [u, _] = (0, o.useState)(0),
            [p, k] = (0, o.useState)(0),
            [v, b] = (0, o.useState)([s]),
            [h, x] = (0, o.useState)(v[0]),
            [y, j] = (0, o.useState)(252),
            [S, w] = (0, o.useState)(0),
            [C, I] = (0, o.useState)([]),
            [T, M] = (0, o.useState)([]),
            [L, E] = (0, o.useState)(!1),
            B = e => {
              if (!0 === g || !0 === l) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              k(a)
            },
            z = e => {
              if (!0 === g || 0 === p || !0 === l) return;
              const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                s = t > p ? 1 : -1,
                r = Math.abs(p - t);
              r > a ? (s > 0 ? (() => {
                if (!0 === g) return;
                f(!0);
                const e = u - 1 < 0 ? 0 : u - 1;
                _(e), x(v[e]), i && i(e)
              })() : (() => {
                if (!0 === g) return;
                f(!0);
                let e = u + 1 >= v.length ? v.length - 1 : u + 1;
                e < 0 && (e = 0), _(e), x(v[e]), i && i(e)
              })(), k(0)) : x(v[u] + r * s)
            },
            P = () => {
              !0 !== g && !0 !== l && (f(!0), !0 !== g && (x(v[u]), k(0)))
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
            w(t + a)
          }), [C]), (0, o.useEffect)((() => {
            !1 !== g && setTimeout((() => {
              f(!1)
            }), t)
          }), [g, t]), (0, o.useEffect)((() => {
            b(n.map(((e, a) => (e => {
              let a = 0;
              const t = n.length;
              return 1 === t ? .5 * m - .5 * y - 2 * s + S : (0 === e && (a = s - e * y), e === t - 1 && t > 1 && (a = t * y * -1 + (m - (s - S))), e > 0 && e < t - 1 && (a = e * y * -1 + (.5 * m - .5 * y + .5 * S)), a)
            })(a)))), 1 === n.length ? E(!0) : E(!1)
          }), [d.current, n, m]), (0, o.useEffect)((() => {
            const e = (a = u, n.map(((e, t) => {
              const s = {
                active: !1
              };
              return t === a && (s.active = !0), s
            })));
            var a;
            M(e)
          }), [n, u]), (0, o.useEffect)((() => {
            !0 !== c && !0 !== l || x(v[0])
          }), [l, c, v]), (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsx)("div", {
              className: "rockstargames-sites-gta-tvab70c3f9c67ecd69d19216a5f4de5049",
              ref: d,
              onTouchStart: B,
              onTouchMove: z,
              onTouchEnd: P,
              onMouseDown: B,
              onMouseMove: z,
              onMouseUp: P,
              onClick: () => {
                null !== r && r(u)
              },
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, N.jsx)("div", {
                className: "rockstargames-sites-gta-tva93be1084a583cafa7f3f97a8ce8a6be",
                "data-interaction-blocked": g,
                "data-single-item": L,
                style: {
                  transform: L ? null : `translateX(${h}px)`
                },
                children: n.map(((e, a) => (0, N.jsx)("div", {
                  className: "rockstargames-sites-gta-tvc013369a930e076d1729d086fb51903e",
                  ref: C[a],
                  children: e
                }, `csItem-${e?.props?.characterData?.mugshotUrl}`)))
              })
            }), T.length > 1 && !1 === c && (0, N.jsx)("div", {
              className: "rockstargames-sites-gta-tvda8cfef07bf44e9a44839e2723ec61bb",
              children: T.map((e => (0, N.jsx)("div", {
                className: "rockstargames-sites-gta-tvfe87ea0922034610a1f6cb3a4edbe195",
                "data-active": e.active
              }, e.mugshotUrl)))
            })]
          })
        },
        gs = {
          pillBtn: "rockstargames-sites-gta-tvaa374e2f7806799cb073de8a9b2a2e7d",
          selected: "rockstargames-sites-gta-tvd402a10393179390abdaf3684a02f1ba",
          scProfile: "rockstargames-sites-gta-tvdde9053261079ebfb5d95975239fe87d",
          scCharacterSelector: "rockstargames-sites-gta-tvc47913b4c686bbbc9a0c8ee6ed7666bf",
          scCharacterSelectBtn: "rockstargames-sites-gta-tva4f9dafe071f5c9a825bf57348835309",
          open: "rockstargames-sites-gta-tvb1f5708c9a0e35681c54a58f04661c1c",
          scCharacterList: "rockstargames-sites-gta-tva1d1104b9df769c9237fa1a06633ffe7",
          scNav: "rockstargames-sites-gta-tva326b0feea8d083ed2265571010d79d3",
          scLanguageSelector: "rockstargames-sites-gta-tvd19713d1362bcd54ff539975adbb2ecc",
          scNavHeader: "rockstargames-sites-gta-tvbb74821846f47bbe5fc0896364efd520",
          scNavWrap: "rockstargames-sites-gta-tva7f1e2d78519eaf099bd43c6ad07abc9"
        },
        fs = (0, ae.withTranslations)((e => {
          let {
            sc: a,
            charListHidden: t,
            hideCharacterList: s,
            refCharacterListDesktop: i,
            menuPadding: r,
            longCharList: n,
            setLongCharList: c,
            isMobileMode: l,
            setIsMobileMode: g
          } = e;
          const {
            windowWidth: f,
            windowHeight: _
          } = (0, ae.useWindowResize)(), k = (0, m.c)(), {
            languageSelectorOpened: v,
            setLanguageSelectorOpened: b,
            activeSubNavId: h,
            setActiveSubNavId: x,
            subNavExtraHeight: y,
            setSubNavExtraHeight: j,
            scNavOpened: S,
            setScNavOpened: w
          } = Qt(), [I, T] = (0, o.useState)(""), M = (0, C.useLocation)(), {
            lsSettings: L
          } = (0, ae.useRockstarWebLSSettings)(), {
            track: B
          } = (0, te.useGtmTrack)(), z = (0, E.useRockstarTokenPing)(), {
            data: P,
            loggedIn: $
          } = (0, te.useRockstarUser)(), {
            charactersNeeded: V,
            currentCharId: D,
            hasNotifications: A,
            navOpen: O,
            setCurrentCharId: F,
            setHasNotifications: R,
            setSelectedCharacterTuple: G,
            setUserData: H
          } = (0, te.useRockstarUserState)(), [U, W] = (0, o.useState)(null), [q, X] = (0, o.useState)(null), [K, Y] = (0, o.useState)(!1), [Q, Z] = (0, o.useState)(!1), [J, ee] = (0, o.useState)(0), se = (0, o.createRef)(), ie = ds(se, !1), re = (0, o.createRef)(), [ne, ce] = (0, o.useState)(0), [oe, le] = (0, o.useState)([]), [de, me] = (0, o.useState)(244), ge = (0, o.useMemo)((() => p()), []), fe = (0, o.useMemo)((() => ((e, a, t, s, i) => [{
            text: e.formatMessage(Vt.sc_link_activity_feed),
            location: {
              domain: u,
              path: "/"
            },
            target: "_self",
            ga: {
              ...as,
              text: Vt.sc_link_activity_feed.defaultMessage
            },
            dataTestId: "activityFeedLink"
          }, {
            text: e.formatMessage(Vt.sc_link_account),
            target: "_self",
            dataTestId: "accountButton",
            children: [{
              text: e.formatMessage(Vt.sc_link_view_my_profile),
              href: t.profile_link,
              target: "_self",
              ga: {
                ...as,
                text: Vt.sc_link_view_my_profile.defaultMessage
              },
              dataTestId: "viewMyProfileLink"
            }, {
              text: e.formatMessage(Vt.sc_link_messages),
              location: {
                domain: u,
                path: "/message"
              },
              target: "_self",
              ga: {
                ...as,
                text: Vt.sc_link_messages.defaultMessage
              },
              dataTestId: "messagesLink"
            }, {
              text: e.formatMessage(Vt.sc_link_game_activation),
              location: {
                domain: u,
                path: "/activate"
              },
              target: "_self",
              ga: {
                ...as,
                text: Vt.sc_link_game_activation.defaultMessage
              },
              dataTestId: "gameActivationLink"
            }]
          }, {
            text: e.formatMessage(Vt.sc_link_notifications),
            location: {
              domain: u,
              path: "/notifications"
            },
            target: "_self",
            hasNotifications: s,
            ga: {
              ...as,
              text: Vt.sc_link_notifications.defaultMessage,
              location: {
                domain: u,
                path: "/notifications"
              }
            },
            dataTestId: "notificationsLink"
          }, {
            text: e.formatMessage(Vt.sc_link_crews),
            location: {
              domain: u,
              path: `/member/${t.nickname}/crews`
            },
            target: "_self",
            ga: {
              ...as,
              text: Vt.sc_link_crews.defaultMessage
            },
            dataTestId: "crewsLink"
          }, {
            text: e.formatMessage(Vt.sc_link_friends),
            target: "_self",
            dataTestId: "friendsButton",
            children: [{
              text: e.formatMessage(Vt.sc_link_my_friends),
              location: {
                domain: u,
                path: `/member/${t.nickname}/friends`
              },
              target: "_self",
              ga: {
                ...as,
                text: Vt.sc_link_my_friends.defaultMessage
              },
              dataTestId: "myFriendsLink"
            }, {
              text: e.formatMessage(Vt.sc_link_import_friends),
              location: {
                domain: u,
                path: "/friends/import"
              },
              target: "_self",
              ga: {
                ...as,
                text: Vt.sc_link_import_friends.defaultMessage
              },
              dataTestId: "importFriendsLink"
            }, {
              text: e.formatMessage(Vt.sc_link_find_friends),
              location: {
                domain: u,
                path: "/members"
              },
              target: "_self",
              ga: {
                ...as,
                text: Vt.sc_link_import_friends.defaultMessage
              },
              dataTestId: "findFriendsLink"
            }]
          }, {
            text: e.formatMessage(Vt.sc_link_settings),
            location: {
              domain: u,
              path: "/settings"
            },
            target: "_self",
            ga: {
              ...as,
              text: Vt.sc_link_settings.defaultMessage
            },
            dataTestId: "settingsLink"
          }, ts(e), {
            text: e.formatMessage(Vt.sc_link_log_out),
            href: `${a.logout}?returnUrl=${i}`,
            target: "_self",
            reloadDocument: !0,
            ga: {
              ...as,
              text: Vt.sc_link_log_out.defaultMessage
            },
            dataTestId: "logoutButton"
          }])(k, a, P, A, I, window)), [k, a, P, A, I, ge]), ue = () => {
            Z(r + de * J < ie)
          }, _e = () => {
            if (re.current) {
              const {
                current: e
              } = re, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), ce(a + e)
              } else ce(a)
            }
          };
          return (0, o.useEffect)((() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            ge.currentSite?.site === u && (e = encodeURIComponent("/")), T(e)
          }), [M]), (0, o.useEffect)((() => {
            le(P.characters[V] ?? [])
          }), [P, V]), (0, o.useEffect)((() => {
            P && H(P)
          }), [P]), (0, o.useEffect)((() => {
            const e = P?.characters.gtao;
            if (null !== $ && !e.length) return void G(!1);
            if (null == D || !e.length) return;
            const a = e?.[D] ?? e?.[0] ?? null;
            G(!!a?.platform && [a.platform, a.characterSlot])
          }), [D, P, $]), (0, o.useEffect)((() => {
            (async () => {
              if (!P?.id) return;
              const {
                count: e
              } = await (0, ae.coreScApiFetch)("notification/count", {
                pingBearer: z
              });
              R(e > 0)
            })()
          }), [P]), (0, o.useEffect)((() => {
            ue()
          }), [de]), (0, o.useEffect)((() => {
            s(!0), g(f < 768), g(f < 768 || _ < 649)
          }), [f, _]), (0, o.useEffect)((() => {
            let e = oe.length - 1;
            e < 0 && (e = 0), ee(e);
            const a = oe.length > 0 ? oe[D] ?? oe[0] : null;
            if (!a) return;
            const t = null !== a ? Pt(a.platform, "large") : null;
            X(t), W(a), oe.length > 1 ? Y(!0) : Y(!1), c(oe.length - 1 > 3)
          }), [D, oe]), (0, o.useEffect)((() => {
            ue()
          }), [J, l, f, oe]), (0, o.useEffect)((() => {
            _e(), Jt()((() => {
              setTimeout(_e, 0)
            }), 300)
          }), [f, _]), (0, o.useEffect)((() => {
            const e = L?.currentCharId ?? 0;
            e !== D && F(Math.max(0, Math.min(e, oe.length - 1)))
          }), [oe, L]), (0, N.jsxs)(N.Fragment, {
            children: [null !== U && "gtao" === V && (0, N.jsxs)("div", {
              className: gs.scProfile,
              tabIndex: -1,
              "aria-label": k.formatMessage(Vt.profile_selector_profile_card),
              children: [(0, N.jsx)(ls, {
                s: gs,
                character: U,
                platformTag: q
              }), !0 === K && (0, N.jsxs)("div", {
                className: gs.scCharacterSelector,
                children: [(0, N.jsx)("button", {
                  className: gs.scCharacterSelectBtn,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const a = !t;
                    s(a), B({
                      event: a ? "character_selector_close" : "character_selector_open",
                      event_action: !0 === a ? "close" : "open",
                      event_category: "character_selector"
                    })
                  },
                  "data-list-closed": t,
                  children: (0, N.jsx)("span", {
                    children: (0, N.jsx)(d.c, {
                      ...Vt.profile_selector_switch_character
                    })
                  })
                }), !1 === l && (0, N.jsx)("div", {
                  className: gs.scCharacterList,
                  "data-long-list": n,
                  "aria-hidden": t,
                  ref: i,
                  children: oe.map((e => (0, N.jsx)(cs, {
                    tabIndex: t ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: me
                  }, e.mugshotUrl)))
                }), !0 === l && (0, N.jsx)("div", {
                  className: gs.scCharacterList,
                  "data-single-item": 2 === oe.length,
                  "data-swiper-disabled": Q,
                  "aria-hidden": t,
                  ref: se,
                  children: (0, N.jsx)(ms, {
                    interactionDelay: 350,
                    mobileGutterWidth: 17,
                    dragThreshold: 40,
                    slideChangeCallback: () => {
                      B({
                        event: "carousel_swipe",
                        event_category: "carousel",
                        event_action: "swipe",
                        event_label: "character_selector"
                      })
                    },
                    disablePager: Q,
                    disableSwiper: Q,
                    children: oe.filter(((e, a) => a !== D)).map((e => (0, o.createElement)(cs, {
                      characterData: e,
                      setMobileCardWidth: me,
                      key: e.mugshotUrl,
                      tabIndex: t ? -1 : 0
                    })))
                  })
                })]
              })]
            }), (0, N.jsxs)("nav", {
              className: gs.scNav,
              "aria-hidden": !O,
              children: [(0, N.jsx)("button", {
                className: gs.scNavHeader,
                type: "button",
                "data-opened": S,
                "data-nav-opened": O,
                tabIndex: S ? -1 : 0,
                onClick: e => {
                  e.stopPropagation(), S || w(!0)
                },
                "data-testid": "playerButton",
                children: (0, N.jsx)("span", {
                  children: P.nickname
                })
              }), (0, N.jsx)("div", {
                className: gs.scNavWrap,
                "data-opened": S,
                "data-logged-in": "true",
                ref: re,
                style: {
                  "--scNavWrap-max-height": `${ne+y}px`
                },
                children: fe.map(((e, a) => (0, o.createElement)(rs, {
                  ...e,
                  id: a,
                  activeSubNavId: h,
                  setActiveSubNavId: x,
                  setSubNavExtraHeight: j,
                  key: e.text
                })))
              })]
            }), (0, N.jsx)("div", {
              className: gs.scLanguageSelector,
              style: {
                visibility: O ? null : "hidden"
              },
              children: (0, N.jsx)(es.LanguageSelector, {
                theme: "sc-menu",
                languageSelectorOpened: v,
                setLanguageSelectorOpened: b
              })
            })]
          })
        })),
        us = {
          scMenu: "rockstargames-sites-gta-tvebc4c779cfe9d0b7cfd678424e57370c",
          pillBtn: "rockstargames-sites-gta-tvf333ffbc5b9f9d571b81be0a7235190d",
          selected: "rockstargames-sites-gta-tve3bdabe09c3d1b98b61f3d0484209912",
          navOpen: "rockstargames-sites-gta-tvff929155ac480a9cfa5540dfd3e70ae9",
          dragHandle: "rockstargames-sites-gta-tvba4968108b922dd8165c6e53557f5f2e",
          dragHandleBtn: "rockstargames-sites-gta-tvd362ba3eeee50f90600a413c05761431",
          scOverlay: "rockstargames-sites-gta-tvd8e443f5d0d9171449f5f1042f80aa17"
        },
        _s = S((() => {
          const {
            windowHeight: e
          } = (0, ae.useWindowResize)(), a = (0, m.c)(), {
            languageSelectorOpened: s,
            setLanguageSelectorOpened: i,
            setActiveSubNavId: r,
            scNavOpened: n,
            setScNavOpened: c,
            charListHidden: l,
            setCharListHidden: d
          } = Qt(), [g, f] = (0, o.useState)(!1), {
            setBodyIsScrollable: u
          } = (0, ae.useBodyScrollable)(), {
            navHidden: _ = !1
          } = (0, E.useState)(), {
            loggedIn: p
          } = (0, te.useRockstarUser)(), {
            currentCharId: k,
            navOpen: v,
            setNavOpen: b,
            userData: h
          } = (0, te.useRockstarUserState)(), {
            track: x
          } = (0, te.useGtmTrack)(), [y, j] = (0, o.useState)(!1), S = (0, E.useReactiveVar)(te.scConfig), w = (0, o.useRef)(), [C, I] = (0, o.useState)(0), T = (0, o.createRef)(), [M, L] = (0, o.useState)(!1), [B, z] = (0, o.useState)(0), [P, $] = (0, o.useState)(!1), {
            mutateLSSettings: V,
            lsSettings: D
          } = (0, ae.useRockstarWebLSSettings)(), A = (0, o.useCallback)((e => {
            d(e), w.current && !0 === e && (w.current.scrollTop = 0)
          }), [w]);
          return (0, o.useEffect)((() => {
            null !== k && D.currentCharId !== k && V({
              key: "currentCharId",
              value: k
            }), !1 === p ? V({
              key: "currentCharId",
              value: null
            }) : p && !h && x({
              event: "account_synced"
            })
          }), [k, p]), (0, o.useEffect)((() => {
            w.current && (!1 === l && !1 === y && (w.current.style.height = `${w.current.scrollHeight}px`), !0 === l && (w.current.style.height = null))
          }), [l, w, y]), (0, o.useEffect)((() => {
            const e = () => {
                b(!1), A(!0)
              },
              a = a => {
                "Escape" === a.code && e()
              };
            return document.addEventListener("click", e), document.addEventListener("keyup", a), () => {
              document.removeEventListener("click", e), document.removeEventListener("keyup", a)
            }
          }), []), (0, o.useEffect)((() => {
            b(!1), A(!0)
          }), [_]), (0, o.useEffect)((() => {
            if (T.current) {
              const {
                current: e
              } = T, a = window.getComputedStyle(e);
              I(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }), [T]), (0, o.useEffect)((() => {
            u(!M || !v)
          }), [v, M]), (0, o.useEffect)((() => {
            $(window.navigator.userAgent.includes("Mac"))
          }), []), (0, o.useEffect)((() => {
            T.current && f(T?.current?.scrollHeight >= e)
          }), [T, e]), (0, o.useEffect)((() => {
            v || (r(-1), i(!1))
          }), [v]), (0, o.useEffect)((() => {
            s && (l || A(!0), n && (c(!1), r(-1)))
          }), [s]), (0, o.useEffect)((() => {
            n && (s && i(!1), l || A(!0))
          }), [n]), null === p ? null : (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsxs)("div", {
              className: [us.scMenu, v ? us.navOpen : ""].join(" "),
              "data-logged-in": p,
              "data-mac-browser": P,
              "data-scroll-mode": g,
              ref: T,
              "aria-hidden": !v,
              children: [(0, N.jsx)("button", {
                className: us.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  z(a)
                },
                onTouchMove: e => {
                  if (0 === B) return;
                  const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(B - a) > 1 && (z(0), b(!1))
                },
                children: (0, N.jsx)("img", {
                  className: us.dragHandle,
                  src: t(2708),
                  alt: a.formatMessage(Vt.sc_menu_drag_handle)
                })
              }), p ? (0, N.jsx)(fs, {
                sc: S,
                charListHidden: l,
                hideCharacterList: A,
                refCharacterListDesktop: w,
                menuPadding: C,
                longCharList: y,
                setLongCharList: j,
                isMobileMode: M,
                setIsMobileMode: L
              }) : (0, N.jsx)(ns, {
                sc: S,
                navOpen: v
              })]
            }), (0, N.jsx)("div", {
              className: [us.scOverlay, v ? us.navOpen : ""].join(" "),
              "data-logged-in": p
            })]
          })
        }), Ba),
        ps = t(1084),
        ks = t(9314),
        vs = S((e => {
          let {
            setOtherHeaderDropdowns: a
          } = e;
          const t = (0, m.c)(),
            {
              data: s
            } = (0, te.useRockstarUser)(),
            {
              charactersNeeded: i,
              currentCharId: r,
              navOpen: n,
              setNavOpen: c
            } = (0, te.useRockstarUserState)(),
            {
              track: l
            } = (0, te.useGtmTrack)(),
            [d, g] = (0, o.useState)(null),
            [f, u] = (0, o.useState)(!1),
            [_, p] = (0, o.useState)(null),
            [k, v] = (0, o.useState)(!1),
            [b, h] = (0, o.useState)([]);
          (0, o.useEffect)((() => {
            h(s.characters[i] ?? [])
          }), [s, i]);
          const x = (0, o.useCallback)((e => {
            e.stopPropagation(), c(!n), l({
              event: "account_menu_click",
              element_placement: "Account Menu",
              text: n ? "close" : "open"
            })
          }), [n]);
          return (0, o.useEffect)((() => {
            const e = s?.id ?? !1,
              a = e ? (b?.[r]?.mugshotUrl ?? s?.avatar) || ps : ks,
              t = Pt(b?.[r]?.platform, "small") ?? null;
            p(t), g(a), u(e), v(!!b?.[r]?.mugshotUrl)
          }), [s, b, r, ps, ks]), (0, N.jsxs)("button", {
            className: "rockstargames-sites-gta-tvdc519cef2feb621e4715bd3fcdf09791",
            "data-img-set": k,
            "aria-label": t.formatMessage(Vt.sc_menu_toggle),
            type: "button",
            onClick: e => x(e),
            "data-testid": "avaterMenuButton",
            children: [(0, N.jsx)("img", {
              className: "rockstargames-sites-gta-tvce75eaa6d65692d36b60d31f3f660ff0",
              src: d || "",
              onError: () => {
                g(ps)
              },
              alt: s?.nickname || ""
            }), f && null !== _ && (0, N.jsx)("img", {
              className: "rockstargames-sites-gta-tvaaf21e74a659089f743bb160bdf95046",
              src: _.src,
              alt: _.alt
            }), f && (0, N.jsx)("div", {
              "data-ui-name": "avatar",
              className: "rockstargames-sites-gta-tvcf6b9e7404c64067bdfef9b79e9eb287",
              "data-platform": b?.[r]?.platform ?? null
            })]
          })
        }), Ba),
        bs = {
          pillBtn: "rockstargames-sites-gta-tvb03cc125f63972f13ae84119af852edc",
          selected: "rockstargames-sites-gta-tvfbcf46d7ef0b32e64b374eee6e3cda3e",
          promoModule: "rockstargames-sites-gta-tva586d11bf592ca821d65db7660518322",
          promoModuleImage: "rockstargames-sites-gta-tvccd749d613ceb73aedb825d77d22cd0b",
          gradient: "rockstargames-sites-gta-tve4f178a3d1e3dfef8b42f73eabd9919e",
          promoModuleContentContainer: "rockstargames-sites-gta-tvd8348a62030f7e2f3c7a53cf67bef0f1",
          left: "rockstargames-sites-gta-tve56a5b7d9a696ea8ca340cc9b67998fc",
          right: "rockstargames-sites-gta-tvc84d09e0c4466d20792d5a9016a00236",
          promoModuleTextContent: "rockstargames-sites-gta-tvbf34746d222495ab8e30cede8de42d71"
        },
        hs = e => {
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
            ref: f,
            inView: u
          } = (0, ce.cD)({
            threshold: .6
          }), {
            track: _
          } = (0, te.useGtmTrack)(), p = {
            "--promo-background": a ?? "var(--black-200)",
            "--promo-image": `url(${(0,G.useGetCdnSource)(c)})` ?? 0,
            "--promo-order": "left" === l ? "row" : "row-reverse"
          };
          return (0, o.useEffect)((() => {
            u && !m && (_({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: "promo module",
              element_placement: "promo module"
            }), g(!0))
          }), [u]), (0, N.jsxs)(aa.q.div, {
            className: bs.promoModule,
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
            ref: f,
            children: [(0, N.jsx)("div", {
              className: [bs.promoModuleImage, n ? bs.gradient : "", "left" === l ? bs.left : bs.right].join(" ")
            }), (0, N.jsxs)("div", {
              className: bs.promoModuleContentContainer,
              children: [(0, N.jsx)(O, {
                brands: t,
                className: bs.promoModuleBrands
              }), (0, N.jsxs)("div", {
                className: bs.promoModuleTextContent,
                children: [d && (0, N.jsx)("h3", {
                  children: d
                }), s && (0, N.jsx)("p", {
                  children: s
                })]
              }), i && (0, N.jsx)(q, {
                to: r,
                text: i,
                onClick: () => {
                  _({
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
      var xs = t(1532);
      const ys = {
          rating: "rockstargames-sites-gta-tva1271bbed316bf567eb67e78d2143808",
          withDescriptors: "rockstargames-sites-gta-tvcba248edc2520d3f1ad195a8495dc1f8",
          withOutDescriptors: "rockstargames-sites-gta-tvff919f7a60b854473b61075a671deb6a",
          text: "rockstargames-sites-gta-tvd47cd2b7c7415cb44cddef00b1c9b35f"
        },
        Ns = (0, l.Os)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      (0, ae.importAll)(t(2884));
      const js = ba(S((e => {
          let {
            descriptors: a = null,
            footer: s = null,
            href: i,
            img: r = null,
            titleSlug: n = null,
            style: c = {},
            className: l
          } = e;
          const [d, g] = (0, o.useState)(!1), {
            inView: f
          } = (0, ce.cD)({
            threshold: .6
          }), [u, _] = (0, o.useState)({
            img_rating: r,
            rating_descriptors: a,
            rating_footer: s,
            url_rating: i
          }), {
            track: p
          } = (0, te.useGtmTrack)(), k = (0, m.c)(), {
            data: v
          } = (0, E.useQuery)(xs.GameData, {
            variables: {
              titleSlug: n
            },
            skip: !n
          });
          if ((0, o.useEffect)((() => {
              v && _(v?.game)
            }), [v]), (0, o.useEffect)((() => {
              f && !d && u.img_rating && (p({
                event: "page_section_impression",
                event_action: "impression",
                event_category: "page_section",
                event_label: "rating",
                element_placement: "rating"
              }), g(!0))
            }), [f]), !u.img_rating) return null;
          const b = !!u.rating_descriptors;
          return (0, N.jsxs)("div", {
            className: [ys.rating, b ? ys.withDescriptors : ys.withOutDescriptors, l || ""].join(" "),
            style: (0, ae.safeStyles)(c),
            children: [(0, N.jsx)(T, {
              to: u.url_rating,
              target: "_blank",
              children: (0, N.jsx)("img", {
                alt: k.formatMessage(Ns.components_ratings_link_alt, {
                  rating: (h = u.img_rating, h.replace(/_/g, " ").split(".")[0].toUpperCase())
                }),
                src: t(0)(`./${u.img_rating}`)
              })
            }), b && (0, N.jsxs)("div", {
              className: ys.text,
              children: [(0, N.jsx)("p", {
                className: ys.descriptors,
                dangerouslySetInnerHTML: {
                  __html: u?.rating_descriptors?.split(/<br\s?\/?>/).join(", ") || ""
                }
              }), u.rating_footer && (0, N.jsx)("hr", {}), u.rating_footer && (0, N.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: u.rating_footer.replace(/ \//g, ", ")
                }
              })]
            })]
          });
          var h
        }), Ba)),
        Ss = {
          responsiveFlexBox: "rockstargames-sites-gta-tvcef355ba53827b9ec44655c80b247b2e",
          responsiveFlexItem: "rockstargames-sites-gta-tva8f5d10f689c3d40c8378e3ae8a07517",
          responsiveImage: "rockstargames-sites-gta-tvbee8268780b292e5bc0da0b497e2c28f"
        },
        ws = e => {
          let {
            children: a,
            className: t,
            style: s
          } = e;
          return (0, N.jsx)("div", {
            className: [Ss.responsiveFlexBox, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: a
          })
        },
        Cs = {
          responsiveFlexItem: "rockstargames-sites-gta-tvae579f6183cf73c897e68c8aae5c9d9d"
        },
        Is = e => {
          let {
            children: a,
            className: t,
            style: s
          } = e;
          return (0, N.jsx)("div", {
            className: [Cs.responsiveFlexItem, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: a
          })
        },
        Ts = {
          responsiveGridBox: "rockstargames-sites-gta-tva28c0b7a44e1a2d5fb257161ce36a24f",
          responsiveGridItem: "rockstargames-sites-gta-tvbeddf36313a28976090b5a8b04d2594a"
        },
        Ms = e => {
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
          return void 0 !== t && (n.gridTemplateColumns = `repeat(${t}, 1fr)`), void 0 !== i && (n.gridTemplateRows = `repeat(${i}, 1fr)`), (0, N.jsx)("div", {
            className: [Ts.responsiveGridBox, void 0 !== s ? s : ""].join(" "),
            style: n,
            children: a
          })
        },
        Ls = {
          responsiveGridBox: "rockstargames-sites-gta-tva39e7c7140ada0ab28537c8c901e816f",
          responsiveGridItem: "rockstargames-sites-gta-tvbe7a0966e2f0457c1172ac9da99020c6"
        },
        Es = e => {
          let {
            children: a,
            className: t,
            style: s
          } = e;
          return (0, N.jsx)("div", {
            className: [Ls.responsiveGridItem, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: a
          })
        },
        Bs = {
          responsiveImage: "rockstargames-sites-gta-tve31b43dce2e720669fb90bf539d22197"
        },
        zs = e => {
          let {
            src: a,
            className: t = "",
            animate: s,
            ariaLabel: i,
            style: r = {}
          } = e;
          const [n, c] = (0, ae.usePreloadImg)(a);
          return n ? (r.backgroundImage = `url(${a})`, (0, N.jsx)("div", {
            role: "img",
            "aria-label": i ?? "R* Games",
            className: [Bs.responsiveImage, s ? Bs.animateBox : "", t].join(" "),
            style: {
              ...r,
              "--aspect-ratio": c.width / c.height
            }
          })) : null
        },
        Ps = {
          responsiveSection: "rockstargames-sites-gta-tvfb7094e43a166c19080ccfe92ed7420d",
          maxWidth: "rockstargames-sites-gta-tvbdc35dbaa55c59ddd2831fd3ac05c5a7"
        },
        $s = e => {
          let {
            children: a,
            className: t,
            style: s,
            maxWidth: i
          } = e;
          return (0, N.jsx)("section", {
            className: [Ps.responsiveSection, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: i ? (0, N.jsx)("div", {
              className: Ps.maxWidth,
              children: a
            }) : a
          })
        },
        Vs = () => (0, N.jsx)(T, {
          className: "rockstargames-sites-gta-tvba0c20f78999975dfb8d9cff0de44b34",
          alt: "Rockstar Games Home",
          to: "/"
        }),
        Ds = () => {
          const {
            pathname: e
          } = (0, C.useLocation)();
          return (0, o.useEffect)((() => {
            window.scrollTo(0, 0)
          }), [e]), null
        },
        As = (0, o.forwardRef)(((e, a) => {
          const {
            threshold: t,
            callback: s,
            children: i,
            requireUser: r
          } = e, {
            track: n
          } = (0, te.useGtmTrack)(r), [c, l] = (0, o.useState)(a?.current);
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
        Os = (0, ae.withTranslations)((e => {
          let {
            t: a
          } = e;
          const [t] = (0, o.useState)(""), s = (0, C.useNavigate)(), i = (0, E.useMutateState)();
          return (0, N.jsxs)("form", {
            action: "#",
            className: "rockstargames-sites-gta-tvb82052ce07e004075e77261c373bfc50",
            onSubmit: e => {
              e.preventDefault(), i({
                navOpen: !1
              }), document.activeElement?.blur(), s(`/search?q=${e.target.q.value}`)
            },
            role: "search",
            children: [(0, N.jsx)("button", {
              type: "submit",
              role: "button",
              title: "Submit"
            }), (0, N.jsx)("input", {
              autoComplete: "off",
              defaultValue: t,
              enterKeyHint: "search",
              name: "q",
              placeholder: a("Search Rockstar Games")
            })]
          })
        })),
        Fs = {
          skeleton: "rockstargames-sites-gta-tvf963a1ae95f7f5ac2c5192c3f357b6dc",
          pulse: "rockstargames-sites-gta-tve00ed88d692bbfc1a301dcfc61a077a9",
          gen9Hero: "rockstargames-sites-gta-tvdb0b80177710d337d93bddb97b8a7dea"
        },
        Rs = e => {
          let {
            skeleton: a
          } = e;
          return a ? (0, N.jsx)("div", {
            className: [Fs.skeleton, Fs[a]].join(" ")
          }) : null
        },
        Gs = (0, l.Os)({
          components_track_list_title: {
            id: "components_track_list_title",
            defaultMessage: "Tracklist"
          }
        }),
        Hs = {
          bodySmall: "rockstargames-sites-gta-tvc048aacaedc7fb642f38c7f163c193e3"
        },
        Us = e => {
          let {
            track: a,
            artist: t
          } = e;
          return (0, N.jsxs)("div", {
            className: Hs.track,
            children: [(0, N.jsx)("p", {
              children: a
            }), (0, N.jsx)("p", {
              className: Hs.bodySmall,
              children: t
            })]
          })
        },
        Ws = S((e => {
          let {
            children: a
          } = e;
          return (0, N.jsxs)("div", {
            className: "rockstargames-sites-gta-tve6c19f2cdd68a4352e248a8324383aa2",
            children: [(0, N.jsx)("h4", {
              className: "rockstargames-sites-gta-tvcd3895fbae93ba04f1401487f6e6eddf",
              children: (0, N.jsx)(d.c, {
                ...Gs.components_track_list_title
              })
            }), (0, N.jsx)("div", {
              className: "rockstargames-sites-gta-tvef0cde8b15ded961605237d0e8328a9b",
              children: (0, N.jsx)("div", {
                className: "rockstargames-sites-gta-tvbdd54186db17d27b3daebc4b9d58e09a",
                children: o.Children.map(o.Children.toArray(a), (e => (0, N.jsx)(Us, {
                  ...e?.props
                })))
              })
            })]
          })
        }), Ba),
        qs = "rockstargames-sites-gta-tveca98eb0b5b84a0c9a2e6d952545a2d5",
        Xs = "rockstargames-sites-gta-tvd3d0b4ecd3bddba96c73f49fcca34ed8",
        Ks = {
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
        Ys = e => {
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
          } = (0, te.useGtmTrack)(), [d, m] = (0, o.useState)([ka.O4, ka.Hj, ka.eM]), [g, f] = (0, o.useState)(null), [u, _] = (0, o.useState)(null);
          return (0, o.useEffect)((() => {
            const e = [ka.O4, ka.Hj, ka.eM];
            i && e.push(ka._2), m(e)
          }), [i]), (0, o.useEffect)((() => {
            if (!r) return;
            const e = r.map(((e, a) => (0, N.jsx)(K.Ky, {
              children: e
            }, Symbol(a).toString())));
            _(e)
          }), [r]), u ? (0, N.jsxs)(aa.q.div, {
            className: "rockstargames-sites-gta-tvd4f245838b94234f21463a08a8112910",
            variants: n.parent,
            transition: c.parent,
            initial: "initial",
            animate: "animate",
            children: [(0, N.jsx)(aa.q.div, {
              className: qs,
              variants: n.main,
              transition: c.main,
              initial: "initial",
              animate: "animate",
              children: (0, N.jsx)(K.wx, {
                loop: s,
                navigation: i,
                pagination: {
                  clickable: !0
                },
                thumbs: {
                  swiper: g
                },
                modules: d,
                breakpoints: Ks,
                className: qs,
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
            }), (0, N.jsx)(aa.q.div, {
              className: Xs,
              variants: n.thumbs,
              transition: c.thumbs,
              initial: "initial",
              animate: "animate",
              children: (0, N.jsx)(K.wx, {
                threshold: 50,
                onSwiper: f,
                loop: s,
                breakpoints: Ks,
                slidesPerView: t,
                freeMode: !0,
                watchSlidesProgress: !0,
                modules: d,
                className: Xs,
                children: u
              })
            })]
          }) : null
        };
      var Qs = t(504);
      const Zs = e => {
          let {
            id: a = null,
            ids: t = null,
            setTitleDataPath: s = null,
            sync: i = !1
          } = e;
          const r = t ?? [a],
            {
              data: n
            } = (0, E.useQuery)(Qs.TinaModulesInfo, {
              variables: {
                ids: r,
                sync: i
              },
              setTitleDataPath: s,
              skip: !r.length
            });
          return n?.tinaModulesInfo ?? null
        },
        Js = ba((e => {
          let {
            components: a = {},
            id: t = null,
            ids: s = null,
            skeleton: i
          } = e;
          const r = Zs({
            id: t,
            ids: s
          });
          if (!r) return (0, N.jsx)(Rs, {
            skeleton: i
          });
          const n = r?.[0]?.tina;
          return n ? (0, N.jsx)(N.Fragment, {
            children: r.map(((e, t) => {
              let {
                tina: s
              } = e;
              return (0, N.jsx)(G.TinaParser, {
                components: a,
                tina: s,
                componentProps: {
                  tinaModulesInfo: r
                }
              }, t)
            }))
          }) : null
        })),
        ei = e => {
          let {
            children: a,
            style: t,
            theme: s
          } = e;
          const [i, r] = (0, o.useState)(s);
          return (0, o.useEffect)((() => {
            s && r(s)
          }), [s]), (0, N.jsx)("div", {
            className: "rockstargames-sites-gta-tva3cc68ab0d512c3d8835ee9abb7a51c4",
            style: t,
            "data-theme": i,
            children: a
          })
        };
      var ai = t(9168);
      const ti = {
          pillBtn: "rockstargames-sites-gta-tvae56f3a5bf16f1160a0cbc040c7611fa",
          selected: "rockstargames-sites-gta-tvd7e34a082f54f22035320df51e8b4ed9",
          userVote: "rockstargames-sites-gta-tvfd538df1ac730062880ff9ca1292dcc4",
          info: "rockstargames-sites-gta-tvdd49c22b2bd842d7e8c11ac45b3a536b",
          voteContent: "rockstargames-sites-gta-tveb3c4c0d7629a1182cd138d3d2e6e081",
          loggedOutButtons: "rockstargames-sites-gta-tvd00b4195df0f175083f6aa2a7d847d72",
          voteButtons: "rockstargames-sites-gta-tvfdd10a481e3da0f8e9511b6a577052e0",
          downVote: "rockstargames-sites-gta-tvabdbb2656b0080d66eb4d39b7e1eb38d",
          upVote: "rockstargames-sites-gta-tvea25ed07e937e2efdce0b99d076fbbe1",
          voteButtonActive: "rockstargames-sites-gta-tvc31731d09d8118c6a82fe6edb193dc50"
        },
        si = e => {
          let {
            description: a,
            foreign_id: t = document.location.pathname,
            foreign_type: s = "url",
            title: i
          } = e;
          const {
            track: r
          } = (0, te.useGtmTrack)(), {
            loggedIn: n
          } = (0, te.useRockstarUser)(), {
            refetch: c
          } = (0, E.useQuery)(ai.UserGetVote, {
            skip: !0
          }), [l] = (0, E.useMutation)(ai.UserCastVote), [d, m] = (0, o.useState)(null), g = (0, o.useCallback)((async e => {
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
          }), [t, s, n]), (0, N.jsx)("div", {
            className: ti.userVote,
            children: (0, N.jsxs)("div", {
              className: ti.voteContent,
              children: [(0, N.jsxs)("div", {
                className: ti.info,
                children: [(0, N.jsx)("h3", {
                  children: i
                }), (0, N.jsx)("p", {
                  children: a
                })]
              }), (0, N.jsxs)("div", {
                className: [ti.voteButtons, n ? "" : ti.loggedOutButtons].join(" "),
                children: [(0, N.jsx)("button", {
                  onClick: () => g(!0),
                  className: [ti.upVote, d ? ti.voteButtonActive : ""].join(" "),
                  type: "button",
                  "aria-label": "Vote up"
                }), (0, N.jsx)("button", {
                  className: [ti.downVote, !1 === d ? ti.voteButtonActive : ""].join(" "),
                  onClick: () => g(!1),
                  type: "button",
                  "aria-label": "Vote down"
                })]
              })]
            })
          })
        },
        ii = {
          carousel: "rockstargames-sites-gta-tvd8e71d378f6d4a968e8ac7d621e5f32a",
          text: "rockstargames-sites-gta-tva3f73d86b98d36a296bf8f621f1c340f",
          info: "rockstargames-sites-gta-tvf46d7fc75c302b1d3f4db01d8572bea8",
          active: "rockstargames-sites-gta-tvd26d1267cc02f841fee8a874d679aebd",
          title: "rockstargames-sites-gta-tva879dfc151f7cf8da6bf5642b51436bb",
          gameTitle: "rockstargames-sites-gta-tvb42d96124219141b4dbb454131b8c37b",
          videoTitle: "rockstargames-sites-gta-tvc5ff8983fae65d6a3d7c741360bd3606",
          cta: "rockstargames-sites-gta-tve25e320fda75ce4076c9fe68b540a2fa",
          track: "rockstargames-sites-gta-tvdd0d39c46df512d3eff8ba48e469af0a",
          disableClick: "rockstargames-sites-gta-tvb169e1b67f64de28605dd5056a740584",
          items: "rockstargames-sites-gta-tvdddc42d4babcaec339a7c1bd04420e6e",
          dragging: "rockstargames-sites-gta-tva7313e3ff4e99b5313f8698890d0dd8c",
          dots: "rockstargames-sites-gta-tve1d7433489996eb9fa890d452ebcb042"
        },
        ri = (0, ae.withLocale)((e => {
          let {
            locale: a,
            t,
            videos: s
          } = e;
          const {
            setBodyIsScrollable: i
          } = (0, ae.useBodyScrollable)(), [r, n] = (0, o.useState)(0), [c, l] = (0, o.useState)(0), d = (0, o.useRef)(null), m = (0, o.useRef)(null);
          return (0, o.useEffect)((() => {
            if (!d.current || m.current) return;
            const e = new(L())(d.current);
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
                l(e.isFinal ? 0 : e.deltaX), "panleft" !== e.additionalEvent && "panright" !== e.additionalEvent || !m.current?.classList.contains(ii.dragging) || a() && i(!1)
              },
              g = () => {
                a() && i(!0), l(0)
              },
              f = e => {
                "press" === e.type && d.current?.classList.add(`${ii.disableClick}`), "tap" === e.type && (d.current?.classList.remove(`${ii.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
              },
              u = () => {
                a() && i(!0), d.current && d.current.classList.remove(`${ii.disableClick}`)
              },
              _ = () => {
                a() && i(!0)
              };
            return m.current.addEventListener("transitionend", _), e.on("swiperight", t), e.on("swipeleft", c), e.on("pan", o), e.on("panend", g), e.on("press tap", f), e.on("pressup", u), () => {
              e.off("swiperight", t), e.off("swipeleft", c), e.off("pan", o), e.off("panend", g), e.off("press tap", f), e.off("pressup", u), m.current && m.current.removeEventListener("transitionend", _), l(0)
            }
          }), [d.current, r]), (0, N.jsxs)("section", {
            className: ii.carousel,
            children: [(0, N.jsx)("div", {
              className: ii.track,
              ref: d,
              children: (0, N.jsx)("div", {
                className: `${ii.items} ${0!==c?ii.dragging:""}`,
                ref: m,
                style: {
                  transform: `translateX(calc(-${100*r}% + ${c}px))`
                },
                children: s.map(((e, a) => (0, N.jsx)(T, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through screencap",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  className: r === a ? ii.active : "",
                  role: "link",
                  title: e.title,
                  tabIndex: r === a ? 0 : -1,
                  children: (0, N.jsx)(mi, {
                    video: e,
                    size: 1280
                  })
                }, e.id)))
              })
            }), (0, N.jsxs)("footer", {
              children: [(0, N.jsx)("div", {
                className: ii.text,
                children: s.map(((e, s) => (0, N.jsx)(T, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through footer",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  role: "link",
                  title: e.title,
                  tabIndex: r === s ? 0 : -1,
                  children: (0, N.jsxs)("div", {
                    className: [ii.info, s === r ? ii.active : ""].join(" "),
                    children: [(0, N.jsxs)("div", {
                      className: ii.title,
                      children: [(0, N.jsx)("div", {
                        className: ii.gameTitle,
                        children: `${e.game.title}${"fr_fr"===a?" ":""}`
                      }), (0, N.jsx)("h2", {
                        className: ii.videoTitle,
                        children: `${e.title}`
                      })]
                    }), (0, N.jsx)(R, {
                      className: ii.cta,
                      children: t("Watch Now")
                    })]
                  })
                }, e.id)))
              }), (0, N.jsx)("div", {
                className: ii.dots,
                children: s.map(((e, a) => (0, N.jsx)("button", {
                  "aria-label": `Slide ${a+1}`,
                  "data-gtm-category": "Marquee",
                  "data-gtm-action": "Dot click",
                  "data-gtm-label": `Dot clicked to ${a}`,
                  onClick: () => n(a),
                  className: r === a ? ii.active : "",
                  type: "button"
                }, e.id)))
              })]
            })]
          })
        })),
        ni = (0, l.Os)({
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
        ci = {
          videoList: "rockstargames-sites-gta-tva77794780421c410f7ea55ed11ae6340",
          sectionHeader: "rockstargames-sites-gta-tved556e2220733d99eae5df36ba41f9c7",
          arrowNav: "rockstargames-sites-gta-tvffeb6a2e829d49f94fea4ee7f5a0d2c8",
          items: "rockstargames-sites-gta-tvffe2263cdad39631ef304714ba89465d",
          trackWrapper: "rockstargames-sites-gta-tvcbdef484a85e8f352a06609b394d4da7",
          track: "rockstargames-sites-gta-tvf3f263effe27f3c21f2ab822b9ee5dcf",
          dragging: "rockstargames-sites-gta-tvc20488bcdf3f23bdf0c6c5b283ae08f4",
          arrow: "rockstargames-sites-gta-tvc8012415449630a832011f490b9d2b72",
          previous: "rockstargames-sites-gta-tvf30d899a31937a4cf395643951224469",
          next: "rockstargames-sites-gta-tvd9d5a85633fc0f0b7f98219d735e6e05",
          disabled: "rockstargames-sites-gta-tvc806076a1e3e23c77528ee12e32771a3"
        },
        oi = S((e => {
          let {
            vids: a,
            games: t,
            title: s,
            gameTitleNecessary: i
          } = e;
          const r = (0, m.c)(),
            n = void 0 !== t ? "games" : "videos",
            c = "videos" === n ? a : t.results,
            l = (0, o.useRef)(null),
            [d, g] = (0, o.useState)(0),
            [f, u] = (0, o.useState)(0),
            _ = e => {
              const a = Math.ceil(c.length / d);
              let t = e;
              t < 0 ? t = 0 : t >= a - 1 && (t = a - 1), u(t)
            },
            [p, k] = (0, o.useState)(0);
          let v;
          return (0, o.useEffect)((() => {
            const e = () => {
              const e = e => window.matchMedia(`(max-width: ${e})`).matches;
              let a = 4;
              e("768px") ? a = 1 : e("990px") || e("1440px") ? a = 2 : e("1920px") && (a = 3), g(a)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [d]), (0, o.useEffect)((() => {
            if (l.current) {
              const e = new(L())(l.current),
                a = () => {
                  _(f - 1), k(0)
                },
                t = () => {
                  _(f + 1), k(0)
                },
                s = e => {
                  k(e.isFinal ? 0 : e.deltaX)
                },
                i = () => {
                  k(0)
                };
              return e.on("swiperight", a), e.on("swipeleft", t), e.on("pan", s), e.on("panend", i), () => {
                e.off("swiperight", a), e.off("swipeleft", t), e.off("pan", s), e.off("panend", i), k(0)
              }
            }
            return {}
          }), [l.current, f]), v = "games" === n ? (0, N.jsx)(N.Fragment, {
            children: t.results.map((e => (0, N.jsx)(ua, {
              game: e,
              dontOverrideTo: !0,
              to: `/videos?type=game&gameId=${e.id}`
            }, e.id)))
          }) : (0, N.jsx)(N.Fragment, {
            children: a.map((e => (0, N.jsx)(gi, {
              video: e,
              gameTitleNecessary: i
            }, e.id)))
          }), (0, N.jsxs)("section", {
            className: ci.videoList,
            children: [(0, N.jsxs)("h3", {
              className: ci.sectionHeader,
              children: [s, (0, N.jsxs)("div", {
                className: ci.arrowNav,
                children: [(0, N.jsx)("button", {
                  className: [ci.arrow, ci.previous, 0 === f ? ci.disabled : ""].join(" "),
                  onClick: () => _(f - 1),
                  type: "button",
                  "aria-label": `${0===f?r.formatMessage(ni.disabled_label)+", ":""}${r.formatMessage(ni.previous_button_label)}`
                }), (0, N.jsx)("button", {
                  className: [ci.arrow, ci.next, f === Math.ceil(c.length / d) - 1 ? ci.disabled : ""].join(" "),
                  onClick: () => _(f + 1),
                  type: "button",
                  "aria-label": `${f===Math.ceil(c.length/d)-1?r.formatMessage(ni.disabled_label)+", ":""}${r.formatMessage(ni.next_button_label)}`
                })]
              })]
            }), (0, N.jsx)("div", {
              className: ci.items,
              children: (0, N.jsx)("div", {
                className: ci.trackWrapper,
                children: (0, N.jsx)("div", {
                  className: [ci.track, 0 !== p ? ci.dragging : ""].join(" "),
                  ref: l,
                  style: {
                    transform: `translateX(calc(-${100*f}% + ${p}px - (var(--standard-grid-gap) * ${f}))`,
                    gridAutoColumns: `calc(100 / ${d} * 1% - calc(var(--standard-grid-gap) * (${d-1}/${d}))`
                  },
                  children: v
                })
              })
            })]
          })
        }), Ba),
        li = (0, ae.withTranslations)((e => {
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
          }), [n]), (0, N.jsxs)("div", {
            className: "rockstargames-sites-gta-tvd988ce20c420c26fc5e455279bf94cb9",
            children: [(0, N.jsx)("h3", {
              tabIndex: -1,
              ref: n,
              children: `${i} (${r})`
            }), (0, N.jsx)(T, {
              to: "/",
              children: t("Home")
            }), "clr" !== s && (0, N.jsx)(Os, {})]
          })
        })),
        di = {
          videoPreview: "rockstargames-sites-gta-tvc6739cc628fda235abe2bafeb30ad7cf",
          card: "rockstargames-sites-gta-tvec6e68ffa1188155be202dfef3f92829",
          info: "rockstargames-sites-gta-tvab8da127fbcdb98f874bc3f1377669a2",
          title: "rockstargames-sites-gta-tve84fa4b2b140994c96a13607410d30a3",
          screencap: "rockstargames-sites-gta-tva322c3d2275cedd594a3b17800154066",
          screencapLoaded: "rockstargames-sites-gta-tvf68c57f5459778024e5a98918ae61ab2",
          gameTitle: "rockstargames-sites-gta-tvdebff452a4923aded7de826c081bab5d"
        },
        mi = e => {
          let {
            video: a,
            size: t = 640
          } = e;
          const s = `${a.screencap}?im=Resize=${t}`,
            [i] = (0, ae.usePreloadImg)(s);
          return (0, N.jsx)("div", {
            className: [di.screencap, i ? di.screencapLoaded : ""].join(" "),
            style: {
              background: `url(${s}) center/cover`
            }
          })
        },
        gi = e => {
          let {
            gameTitleNecessary: a = !0,
            openInNewWindow: t = !1,
            video: s,
            size: i,
            toExplicit: r
          } = e;
          const n = r ?? `/videos/${s.id}`,
            c = {
              className: di.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": n
            },
            o = (0, N.jsxs)("div", {
              className: di.card,
              children: [(0, N.jsx)(mi, {
                video: s,
                size: i
              }), (0, N.jsxs)("div", {
                className: di.info,
                children: [a ? (0, N.jsx)("div", {
                  className: di.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: s.game.title
                  }
                }) : "", (0, N.jsx)("h5", {
                  className: di.title,
                  dangerouslySetInnerHTML: {
                    __html: s.title
                  }
                })]
              })]
            });
          return t ? (0, N.jsx)("a", {
            href: n,
            target: "_blank",
            ...c,
            children: o
          }) : (0, N.jsx)(T, {
            to: n,
            ...c,
            children: o
          })
        };
      class fi extends o.Component {
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
          return null !== this.state.error.code ? (0, N.jsx)(li, {
            error: this.state.error
          }) : this.props.children
        }
      }
      const ui = function(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return function(t) {
          return (0, N.jsx)(fi, {
            header: a,
            children: (0, N.jsx)(e, {
              ...t
            })
          })
        }
      };
      var _i = t(1267),
        pi = t(688),
        ki = t(8016);
      const vi = (0, o.forwardRef)(((e, a) => {
          const {
            children: t,
            tag: s = "div"
          } = e, i = _i.m[s];
          return (0, N.jsx)(pi.O, {
            features: ki.i,
            children: (0, N.jsx)(i, {
              ref: a,
              ...e,
              children: t
            })
          })
        })),
        bi = {
          visible: {
            opacity: 1
          },
          hidden: {
            opacity: 0
          }
        },
        hi = {
          ease: "easeIn",
          duration: .4
        },
        xi = e => {
          let {
            children: a
          } = e;
          return (0, N.jsx)(aa.q.div, Object.assign({
            className: "rockstargames-sites-gta-tvf0ee4e641f1ac92151be887c9ebb8392",
            variants: bi,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: hi
          }, {
            children: a
          }))
        },
        yi = e => a => (0, N.jsx)(xi, {
          children: (0, N.jsx)(e, Object.assign({}, a))
        }),
        Ni = {
          visible: {
            opacity: 1,
            y: 0
          },
          hidden: {
            opacity: 0,
            y: 40
          }
        },
        ji = {
          ease: "easeIn",
          duration: .75
        },
        Si = e => {
          let {
            children: a
          } = e;
          return (0, N.jsx)(aa.q.div, {
            className: "rockstargames-sites-gta-tva479a10c5475b17a0564b60fecf98c8b",
            variants: Ni,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: ji,
            children: a
          })
        },
        wi = e => a => (0, N.jsx)(Si, {
          children: (0, N.jsx)(e, {
            ...a
          })
        }),
        Ci = {
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
        Ii = {
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
        Ti = function() {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "collapsed";
          return Ii[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "imageMask"][e]
        };
      var Mi = t(544);
      const Li = JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[300,300,0]},"a":{"k":[0,0,0]},"s":{"k":[244,244,100]}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"k":[100,100]},"p":{"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"tm","s":{"k":[{"i":{"x":[0.439],"y":[1.016]},"o":{"x":[0.561],"y":[0.015]},"n":["0p439_1p016_0p561_0p015"],"t":5,"s":[100],"e":[0]},{"t":33.0000013441176}],"ix":1},"e":{"k":[{"i":{"x":[0.439],"y":[1.017]},"o":{"x":[0.561],"y":[0.016]},"n":["0p439_1p017_0p561_0p016"],"t":0,"s":[100],"e":[0]},{"t":30.0000012219251}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"},{"ty":"st","fillEnabled":true,"c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":16},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"}],"ip":0,"op":900.000036657751,"st":0,"bm":0,"sr":1}],"v":"4.5.3","ddd":0,"ip":1.00000004073083,"op":33.0000013441175,"fr":29.9700012207031,"w":600,"h":600}'),
        Ei = JSON.parse('{"v":"5.7.3","fr":60,"ip":0,"op":64,"w":300,"h":300,"nm":"Dot_Loading","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"center","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":10,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":22,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":34,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.667,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"right","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":5,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":17,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":29,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.333,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":12,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":24,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0}],"markers":[]}'),
        Bi = {
          SPINNING: "spinning",
          THREE_DOTS: "threeDots"
        },
        zi = e => {
          let a, {
            type: t = Bi.SPINNING
          } = e;
          switch (t) {
            case Bi.THREE_DOTS:
              a = Ei;
              break;
            case Bi.SPINNING:
            default:
              a = Li
          }
          return (0, N.jsx)(Mi.c, {
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
    48: e => {
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
    8652: e => {
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
    9168: e => {
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
    5492: (e, a, t) => {
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
      s.definitions = s.definitions.concat(r(t(3784).definitions)), s.definitions = s.definitions.concat(r(t(8540).definitions));
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
    3892: (e, a, t) => {
      var s = {
        "./left.svg": 2440,
        "./pc.svg": 6584,
        "./ps.svg": 8407,
        "./ps3.svg": 1972,
        "./ps4.svg": 672,
        "./ps5.svg": 2243,
        "./right.svg": 1837,
        "./switch.svg": 9868,
        "./x.svg": 2428,
        "./xbox.svg": 8868,
        "./xboxone.svg": 8092,
        "./xboxseriesxs.svg": 3040
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
      }, i.resolve = r, e.exports = i, i.id = 3892
    },
    2884: (e, a, t) => {
      var s = {
        "./cero_a.png": 8604,
        "./cero_b.svg": 4276,
        "./cero_c.svg": 5264,
        "./cero_d.svg": 4268,
        "./cero_rp.png": 9716,
        "./cero_z.svg": 8696,
        "./djctq_10.svg": 9375,
        "./djctq_12.svg": 7056,
        "./djctq_14.svg": 2804,
        "./djctq_16.svg": 9900,
        "./djctq_18.svg": 2192,
        "./djctq_er.svg": 1732,
        "./djctq_l.svg": 4428,
        "./esrb_ao.svg": 2144,
        "./esrb_e.svg": 9492,
        "./esrb_e10plus.svg": 711,
        "./esrb_m.svg": 292,
        "./esrb_m_ao.svg": 8404,
        "./esrb_rp.svg": 9600,
        "./esrb_rplm17.svg": 4656,
        "./esrb_t.svg": 4884,
        "./fpb_13.svg": 896,
        "./fpb_16.svg": 7932,
        "./fpb_18.svg": 568,
        "./fpb_pg.svg": 6620,
        "./grac_12.svg": 1407,
        "./grac_15.svg": 4164,
        "./grac_18.svg": 4916,
        "./grac_a.svg": 7304,
        "./gsrr_0.svg": 2284,
        "./gsrr_12.svg": 2024,
        "./gsrr_15.svg": 1040,
        "./gsrr_18.svg": 6632,
        "./gsrr_6.svg": 7372,
        "./nmc_12.svg": 1423,
        "./nmc_16.svg": 2596,
        "./nmc_18.svg": 3980,
        "./nmc_21.svg": 4859,
        "./nmc_3.svg": 5140,
        "./nmc_7.svg": 6884,
        "./oflc_g.svg": 8704,
        "./oflc_m.svg": 4116,
        "./oflc_ma15.svg": 2856,
        "./oflc_pg.svg": 5888,
        "./oflc_r18.svg": 4780,
        "./pegi_12.svg": 8564,
        "./pegi_16.svg": 524,
        "./pegi_18.svg": 3173,
        "./pegi_3.svg": 100,
        "./pegi_4.svg": 64,
        "./pegi_6.svg": 5228,
        "./pegi_7.svg": 4308,
        "./pegi_rp.png": 6480,
        "./rars_0.svg": 8112,
        "./rars_12.svg": 7767,
        "./rars_16.svg": 5740,
        "./rars_18.svg": 6708,
        "./rars_6.svg": 4264,
        "./usk_0.svg": 5084,
        "./usk_12.svg": 3004,
        "./usk_16.svg": 1804,
        "./usk_18.svg": 1367,
        "./usk_6.svg": 5568,
        "./usk_rp.svg": 1336,
        "./vaci_rp.png": 6616
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
      }, i.resolve = r, e.exports = i, i.id = 2884
    },
    0: (e, a, t) => {
      var s = {
        "./cero_a.png": 8604,
        "./cero_b.svg": 4276,
        "./cero_c.svg": 5264,
        "./cero_d.svg": 4268,
        "./cero_rp.png": 9716,
        "./cero_z.svg": 8696,
        "./djctq_10.svg": 9375,
        "./djctq_12.svg": 7056,
        "./djctq_14.svg": 2804,
        "./djctq_16.svg": 9900,
        "./djctq_18.svg": 2192,
        "./djctq_er.svg": 1732,
        "./djctq_l.svg": 4428,
        "./esrb_ao.svg": 2144,
        "./esrb_e.svg": 9492,
        "./esrb_e10plus.svg": 711,
        "./esrb_m.svg": 292,
        "./esrb_m_ao.svg": 8404,
        "./esrb_rp.svg": 9600,
        "./esrb_rplm17.svg": 4656,
        "./esrb_t.svg": 4884,
        "./fpb_13.svg": 896,
        "./fpb_16.svg": 7932,
        "./fpb_18.svg": 568,
        "./fpb_pg.svg": 6620,
        "./grac_12.svg": 1407,
        "./grac_15.svg": 4164,
        "./grac_18.svg": 4916,
        "./grac_a.svg": 7304,
        "./gsrr_0.svg": 2284,
        "./gsrr_12.svg": 2024,
        "./gsrr_15.svg": 1040,
        "./gsrr_18.svg": 6632,
        "./gsrr_6.svg": 7372,
        "./nmc_12.svg": 1423,
        "./nmc_16.svg": 2596,
        "./nmc_18.svg": 3980,
        "./nmc_21.svg": 4859,
        "./nmc_3.svg": 5140,
        "./nmc_7.svg": 6884,
        "./oflc_g.svg": 8704,
        "./oflc_m.svg": 4116,
        "./oflc_ma15.svg": 2856,
        "./oflc_pg.svg": 5888,
        "./oflc_r18.svg": 4780,
        "./pegi_12.svg": 8564,
        "./pegi_16.svg": 524,
        "./pegi_18.svg": 3173,
        "./pegi_3.svg": 100,
        "./pegi_4.svg": 64,
        "./pegi_6.svg": 5228,
        "./pegi_7.svg": 4308,
        "./pegi_rp.png": 6480,
        "./rars_0.svg": 8112,
        "./rars_12.svg": 7767,
        "./rars_16.svg": 5740,
        "./rars_18.svg": 6708,
        "./rars_6.svg": 4264,
        "./usk_0.svg": 5084,
        "./usk_12.svg": 3004,
        "./usk_16.svg": 1804,
        "./usk_18.svg": 1367,
        "./usk_6.svg": 5568,
        "./usk_rp.svg": 1336,
        "./vaci_rp.png": 6616
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
      }, i.resolve = r, e.exports = i, i.id = 0
    },
    6572: (e, a, t) => {
      var s = {
        "./bounty.png": 752,
        "./collector.png": 56,
        "./moonshiner.png": 1444,
        "./naturalist.png": 3268,
        "./trader.png": 4688
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
    6584: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    8407: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27ae07e3226006749e6cb6428bc62bb1.svg"
    },
    1972: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg"
    },
    672: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg"
    },
    2243: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b12e4e9678e7a4ebea34905926feeb90.svg"
    },
    1837: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cf1b78cec82c717ea9c2155ce4093736.svg"
    },
    9868: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg"
    },
    2428: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c453a914f0b049334120adfcba614e5.svg"
    },
    8868: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f74e871585118640ffd9ce881181a176.svg"
    },
    8092: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg"
    },
    3040: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5bd8456deb2338503b8fd44786b5fa07.svg"
    },
    2708: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/44d747ec4a149ad5386114f6b5c60f2d.svg"
    },
    9314: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a29e26aa160e7be7e845708c335b3c39.svg"
    },
    1084: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    },
    6452: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5be68b0895e242db88f00aae46effad7.svg"
    },
    4120: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6054f77c4450b075b6059eda658a510d.svg"
    },
    3788: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c577e2612120d70330b797e6ee5487d9.svg"
    },
    4904: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c8ee10e269f42d96c58c1eb016717e1.svg"
    },
    9916: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61f1cfebde0508725354fa6c2bdda0b4.svg"
    },
    804: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/77896e8c17472d9127fc3a09244bcdec.svg"
    },
    564: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/941a1141a404ed211f7d23ed36ccee23.svg"
    },
    2756: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04d319f216248f3df7f9727df641b832.svg"
    },
    2064: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e18ef78074a128424a94ab6313dd332.svg"
    },
    7748: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c91f19b5ea19868e280034220acf6740.svg"
    },
    4184: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3d0b47d69ca8bee8a00a608ebd896198.svg"
    },
    9450: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2a7a3f3a2974f306eaf16cbc851622ec.svg"
    },
    5724: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c9f8a365923c42d238fc1f94659f4a7.svg"
    },
    1216: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/13287de69dbdd8bdcd042ce6285f2bae.svg"
    },
    8604: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51b141250a4851d7ec3673d88dbd20a.png"
    },
    4276: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7ac89f9e00ded04ef4b2dd3eaf3e8734.svg"
    },
    5264: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f44dd7aad9d6c62e40a11f51252f59b8.svg"
    },
    4268: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/204116b24cd9e9ab4e71af21b3a96179.svg"
    },
    9716: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/676b3908098d8b19f1019ce361af45ec.png"
    },
    8696: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/03ab76c58ed61a83bf035c923dbe32b2.svg"
    },
    9375: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f468aef6f0b5399d5c0f6b2e95b60cc5.svg"
    },
    7056: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b31c79d361cfd92e1a405dbbf4890bd.svg"
    },
    2804: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3689ac97526f00a4537e1b38ec82a074.svg"
    },
    9900: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07f9f9e93ec430813e74cbce545962c4.svg"
    },
    2192: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/608f591c35aff9d47091dd7fe9a8fb13.svg"
    },
    1732: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/198ced82807c854e92e84e23f7434c91.svg"
    },
    4428: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/edf01daa4f0392081705c17a74d8a146.svg"
    },
    2144: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c4dd58f5b5b97796b6c6177de364dd36.svg"
    },
    9492: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/201de0eb81b09ea93aa1aef2a6824b7c.svg"
    },
    711: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/534078f6307f97ce0d70e0bb885f9d77.svg"
    },
    292: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f4b0d9409df1e8a420b2118e4e601263.svg"
    },
    8404: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/092865e0ddae5190dc3c0284ee3c21bd.svg"
    },
    9600: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/80dd50a2fa9aae3b5d6effdb2d9c2661.svg"
    },
    4656: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d471eef7883043fdabe1b3ed17a72b3.svg"
    },
    4884: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/35cf853d7882b090b56837bd08127da1.svg"
    },
    896: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/72e8749316b4d1f52925b95e075e9c24.svg"
    },
    7932: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c2acdad576048f5c48b2ee6a2a2a90a3.svg"
    },
    568: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f52c5ab315a1ff90360e06372c3f2c0.svg"
    },
    6620: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d1f569db6c94b4f81417f62e91759082.svg"
    },
    1407: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fe262661c6667d97f441e045067f4a0f.svg"
    },
    4164: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b457cab77cb82e1c05ad12628414576.svg"
    },
    4916: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c66a857ab4a5f8541cace25e15716b9e.svg"
    },
    7304: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/515f2884036e870905ae53f156692721.svg"
    },
    2284: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a3931a545299e205758648bce29e5c49.svg"
    },
    2024: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/05e9f2f27883d4cbabb3d4e4e16c9c74.svg"
    },
    1040: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f2fc4de3decfa0ac007f6cbd91658a9.svg"
    },
    6632: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cd57122be57f5e3a9dc4d0a0f2503fb1.svg"
    },
    7372: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d910a48fc0914f58ca80dc0732a7677.svg"
    },
    1423: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e99540df7fd07d75b08a5fbc02d4815.svg"
    },
    2596: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/937b7a0c5a128c39addf2adeba2d2f23.svg"
    },
    3980: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/46a27d8d16855dcc2a217f48243c6d82.svg"
    },
    4859: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e5792c85d5a88a0b7c75af087e4c6ee2.svg"
    },
    5140: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4da522682784ded3799c5a6f9f8c213a.svg"
    },
    6884: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/29ea20c333709a952c2eb3a2591d435d.svg"
    },
    8704: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c66fbb7c204e32da80ccb1693d15e00.svg"
    },
    4116: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/954d63889440be17e1ebef30b7026369.svg"
    },
    2856: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2eb8777f38cbd4d721261ad736c1f2e7.svg"
    },
    5888: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6079496697e537802f8a0eb5a83d2e94.svg"
    },
    4780: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a19fbf81b03db0fda00839496a3ce5.svg"
    },
    8564: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/129ef1c1a15ffc7afb86ce282e48decb.svg"
    },
    524: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a5d9ca87a5bd107da9bb33d3d718e8.svg"
    },
    3173: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dabd13175cc0894dcb3f942d3d2dab86.svg"
    },
    100: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/64d281825da1c782681bcc096d693e32.svg"
    },
    64: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b43dddd485139df895fc531e79c75e68.svg"
    },
    5228: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c01f38f1051e751caa633d533202873c.svg"
    },
    4308: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27a26f477c8db29df4ceec4517c7f42b.svg"
    },
    6480: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a380d3ce353544a356e8ce48f8586804.png"
    },
    8112: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bba2f70e014e82b336a9f80625053089.svg"
    },
    7767: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/85250e8a0e5a5a1209f214423f6ebe43.svg"
    },
    5740: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1a94d5705ae3ddeb4c8c2fde79bfe81.svg"
    },
    6708: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a825976dddc59e33b3ce146ad6cd3d20.svg"
    },
    4264: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/01b0cd4466759aa349ac4036594ab6ae.svg"
    },
    5084: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c699f3b76c15209c8059f02507e11b5.svg"
    },
    3004: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b48e041f1412ff62c8a92dc424b59aa5.svg"
    },
    1804: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07362df5a2671c08b232a97d503cd6bf.svg"
    },
    1367: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c3fe2a9610ca8b42807dfa99073d68b3.svg"
    },
    5568: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/056d3bdf1f300bcb7efa4aebcfc5224d.svg"
    },
    1336: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/278e84e5a41407499c43a30f545da3e8.svg"
    },
    6616: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/703a546f7a5109c1e2af87a212135aad.png"
    },
    752: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48754c6fc2f75b0554098423f2bda6d1.png"
    },
    56: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e111377ba943e9eefaa9204f77c77093.png"
    },
    1444: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4639a2711d1bca49a87c302784050ee3.png"
    },
    3268: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/898794daaec68a69ef5ec4afaefe1948.png"
    },
    4688: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e77bb0f25a6ea37e8d831b12df9fa3c.png"
    },
    3976: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8787df71c723ebe44f82fd13ed216e09.jpg"
    },
    1820: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61ae357c3bfbabb5d765e9a7c794d08f.png"
    }
  }
]);
//# sourceMappingURL=bd1a1fed1bdd6912d6b584cd777322f1.js.map