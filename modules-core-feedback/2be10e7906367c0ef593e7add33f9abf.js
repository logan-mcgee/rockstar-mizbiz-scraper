! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "6c1c1d0a-9ca1-4ab4-ac28-d43e52209345", e._sentryDebugIdIdentifier = "sentry-dbid-6c1c1d0a-9ca1-4ab4-ac28-d43e52209345")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "692b6956abd6177da3ac6da14c81527e5159ed6d",
  packageName: "@rockstargames/modules-core-feedback",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "692b6956abd6177da3ac6da14c81527e5159ed6d"
}, (self.webpackChunk_rockstargames_modules_core_feedback = self.webpackChunk_rockstargames_modules_core_feedback || []).push([
  [644], {
    7212: (e, a, s) => {
      "use strict";
      s.r(a), s.d(a, {
        A: () => T,
        AudioPlayer: () => D,
        Badge: () => A,
        Brands: () => O,
        Button: () => R,
        ButtonGroup: () => X,
        CalloutSection: () => ge,
        Carousel: () => ee,
        ConditionalBlock: () => ie,
        CookieAB: () => ve,
        CountryInputField: () => pe,
        Cta: () => je,
        DescriptionArea: () => Oe,
        DiscountsBadge: () => Ue,
        DotLoader: () => qe,
        Dropdown: () => Ye,
        Embed: () => ea,
        ExpandingPlatformButton: () => da,
        FadeInContent: () => ma,
        GameCard: () => t,
        GameSiteHeader: () => ba,
        Gen9Button: () => q,
        Gen9CoreCarousel: () => xa,
        Grid: () => Ze,
        HTMLElement: () => Ea,
        Hero: () => Ta,
        HookStore: () => te,
        ImageWithBadge: () => Ra,
        LanguageSelector: () => Va,
        LayeredImage: () => Oa,
        LoadingAnimation: () => Pc,
        MultiSourceImage: () => Me,
        NewswireBlocks: () => as,
        NewswireCard: () => Xa,
        NewswireList: () => Qa,
        NewswireRelated: () => Ja,
        NewswireTag: () => Wa,
        OrderedList: () => cs,
        PackList: () => fs,
        PackListMenu: () => ws,
        Paging: () => Is,
        ParallaxCacheBuster: () => Ms,
        ParallaxInnerLayer: () => Bs,
        ParallaxOuterLayer: () => Ps,
        ParallaxWrapper: () => Es,
        ProfileSwitcher: () => c,
        PromoModule: () => xt,
        Rating: () => wt,
        ResponsiveFlexBox: () => Ct,
        ResponsiveFlexItem: () => Tt,
        ResponsiveGridBox: () => Lt,
        ResponsiveGridItem: () => Bt,
        ResponsiveImg: () => Pt,
        ResponsiveSection: () => Vt,
        RockstarLogo: () => Dt,
        ScrollToTop: () => At,
        ScrollTracker: () => Ot,
        SearchBox: () => Ft,
        Separator: () => Ve,
        Skeleton: () => Gt,
        SrcsetImage: () => Ha,
        TextFit: () => Re,
        ThumbsGallery: () => Qt,
        TinaModuleFetchNRender: () => ec,
        TinaWrapper: () => ac,
        TrackList: () => qt,
        UnorderedList: () => Pe,
        UserVote: () => cc,
        VideoCard: () => r,
        VideoCarousel: () => ic,
        VideoList: () => dc,
        Wasted: () => lc,
        framer: () => o,
        useTinaModuleFetchByIds: () => Jt,
        withSearchbarErrorBoundary: () => kc,
        withSimpleErrorBoundary: () => va
      });
      var t = {};
      s.r(t), s.d(t, {
        Art: () => ua,
        Link: () => ga
      });
      var c = {};
      s.r(c), s.d(c, {
        CharacterCard: () => Os,
        Menu: () => bt,
        MenuButton: () => vt
      });
      var r = {};
      s.r(r), s.d(r, {
        Art: () => fc,
        Link: () => uc
      });
      var i = {};
      s.r(i), s.d(i, {
        getVariant: () => Mc,
        transitions: () => Ic,
        variants: () => Tc
      });
      var o = {};
      s.r(o), s.d(o, {
        Animations: () => i,
        LiteMotion: () => vc,
        withFadeIn: () => Nc,
        withFadeUp: () => Cc
      });
      var n = s(1664),
        d = s(5052),
        l = s(3832),
        m = s(5688),
        f = s(2936);
      const u = "www",
        g = "socialClub",
        k = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        b = () => {
          let e;
          const {
            location: a
          } = window, s = a.hostname.substring(0, a.hostname.indexOf(".rockstargames.com")), t = k.findIndex((a => Object.entries(a.sites).findIndex((a => {
            let [t, c] = a;
            return c === s && (e = {
              site: t,
              subDomain: c
            }, !0)
          })) >= 0)), c = k[t >= 0 ? t : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...c,
            currentSite: e
          }
        },
        _ = (e, a) => {
          e && a ? document.cookie = `${e}=${a}; domain=${p()}; path=/;` : console.log(`Couldn't set cookie (${e}) to value (${a})`)
        },
        p = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        v = [{
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
        h = v,
        x = v[1],
        y = () => {
          const {
            location: e
          } = window, a = b(), s = (e => {
            const a = h.map((e => e.subdomaincom)),
              s = e.pathname.substring(1).split("/"),
              t = "detect-locals" === s[0] ? 1 : 0;
            return -1 !== a.indexOf(s[t]) ? s[t] : null
          })(e), t = (e => {
            const a = e.search.substring(1).split("&").find((e => e.startsWith("lang")));
            return a?.split("=")[1]
          })(e), c = x, [r, i] = function(e, a) {
            let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const t = document.cookie.split("; "),
              c = `${e}=`,
              r = t.find((e => e.startsWith(c))),
              i = r?.substring(c.length, r.length);
            return i && !s || _(e, a), [i, (o = e, e => {
              _(o, e)
            })];
            var o
          }(`rockstarweb_lang.${a.cookieIdentifier}`, s ?? void 0);
          let o = c;
          return o = a.currentSite?.site === u ? h.find((e => e.subdomaincom === t)) || h.find((e => e.subdomaincom === s)) || c : h.find((e => e.iso === r)) || c, [o, i]
        };
      var N = s(5240);
      const j = e => {
        let {
          locales: a,
          lang: s,
          children: t
        } = e;
        const c = (0, n.useMemo)((() => function(e) {
            let [a, s] = e.split(/[-_]/);
            return s = s?.toLowerCase(), "cn" === s && (s = "hans"), a && s || (a = "en", s = "us"), [a, s]
          }(s)), [s]),
          r = (0, n.useMemo)((() => function(e, a) {
            return e?.[a] ?? {}
          }(a, c[1])), [s, a]);
        return (0, N.jsx)(f.c, {
          messages: r,
          locale: c[0],
          defaultLocale: "en",
          children: t
        }, c[0])
      };

      function w(e, a) {
        return s => {
          const [{
            iso: t
          }] = y();
          return (0, N.jsx)(j, {
            locales: a,
            lang: t,
            children: (0, N.jsx)(e, {
              ...s
            })
          })
        }
      }
      s(3061);
      const S = (0, d.Os)({
        aria_label_open_new_window: {
          id: "aria_label_open_new_window",
          defaultMessage: "(Opens in a new window)"
        }
      });
      var C = s(4832);
      const I = "rockstargames-modules-core-feedbackff481c537a56a6fcdb1be85dfbc8944e",
        T = e => {
          let {
            children: a,
            to: s = "#",
            alt: t = "",
            autoBlank: c = !1,
            onClick: r = (() => {}),
            ...i
          } = e;
          const o = (0, m.c)(),
            n = !/^(https?|mailto):/i.test(s),
            d = /^#/.test(s),
            l = i?.target ?? (c ? "_blank" : "_self");
          let {
            t: f,
            ...u
          } = i, g = "";
          if ("aria-label" in u && u["aria-label"] && (g = "_blank" === l ? `${u["aria-label"]} ${o.formatMessage(S.aria_label_open_new_window)}` : u["aria-label"]), d) {
            const e = e => {
              e.preventDefault(), document?.querySelector(`[id='${s.replace("#","")}']`)?.scrollIntoView({
                behavior: "smooth",
                block: "center"
              }), r && r(e)
            };
            return (0, N.jsxs)("a", {
              title: t,
              href: s,
              onClick: e,
              ...u,
              "aria-label": g,
              children: [a, "_blank" === l && !g && (0, N.jsx)("span", {
                className: I,
                children: o.formatMessage(S.aria_label_open_new_window)
              })]
            })
          }
          if (n) return (0, N.jsxs)(C.Af, {
            title: t,
            to: s,
            onClick: e => r(e),
            ...u,
            "aria-label": g,
            children: [a, "_blank" === l && !g && (0, N.jsx)("span", {
              className: I,
              children: o.formatMessage(S.aria_label_open_new_window)
            })]
          });
          const k = Object.keys(u).filter((e => !["activeClassName", "key", "end"].includes(e))).reduce(((e, a) => ({
            ...e,
            [a]: i[a]
          })), {});
          return "function" == typeof k?.className && delete k.className, (0, N.jsxs)("a", {
            href: s,
            title: t,
            onClick: e => r(e),
            target: l,
            ...k,
            "aria-label": g,
            children: [a, "_blank" === l && !g && (0, N.jsx)("span", {
              className: I,
              children: o.formatMessage(S.aria_label_open_new_window)
            })]
          })
        };
      var M = s(5772),
        L = s.n(M),
        E = s(3052),
        B = s(48);
      const z = {
          player: "rockstargames-modules-core-feedbackbb43df423657efcc0f1f38630a24e5e8",
          fixedToBottom: "rockstargames-modules-core-feedbacke1f497e3ec34c2fd721b124969e27dd5",
          tracksOpen: "rockstargames-modules-core-feedbacke8f2736f0ae21a56045104071a7a9fd7",
          tracks: "rockstargames-modules-core-feedbackea84096a931648765b1db46f708f70aa",
          iconBurger: "rockstargames-modules-core-feedbackb91aad66a2102668715c5ddaaecede2e",
          trackList: "rockstargames-modules-core-feedbackc44536ca7b7fa7236e86c65ae309057e",
          trackActive: "rockstargames-modules-core-feedbackac7826f934fc777f58017b1a5752419a",
          trackTitle: "rockstargames-modules-core-feedbackaafc522e642572d5ff93c7408b941829",
          trackIndex: "rockstargames-modules-core-feedbackb880baa4707c71eb543f905816d8e952",
          controls: "rockstargames-modules-core-feedbackff92c8eddfc0a0fa7bc7f444973e4f28",
          controlsCurrentBg: "rockstargames-modules-core-feedbacka81d9465f14d65e8e20800d7b25f77d9",
          controlsCurrentBgVisible: "rockstargames-modules-core-feedbackc87bd14d2bbc9248d9c197b77454f345",
          controlsTrack: "rockstargames-modules-core-feedbackc23bf574089d1af93750f6af8ebb489f",
          controlsTrackTitle: "rockstargames-modules-core-feedbacke4b77d29e904f9928cca1de93f5c7745",
          controlsTrackAnimating: "rockstargames-modules-core-feedbackba49949a9cd8c22385708f267c625029",
          scrollText: "rockstargames-modules-core-feedbackfd9c80e5afaa1ed38ce85f2c3d70eae4",
          controlsTrackArtist: "rockstargames-modules-core-feedbackc93c1e5399d9fd5e96ca246fdbfb307b",
          controlsTrackBurger: "rockstargames-modules-core-feedbackb4e1a16e3460b40c1aacd92afe219856",
          controlsButtons: "rockstargames-modules-core-feedbackd136125994c1d0db1449fce51af559ca",
          controlsScrub: "rockstargames-modules-core-feedbackd3d935648408f71928bd49d2f7c5a9ff",
          controlsPlayPause: "rockstargames-modules-core-feedbackf5de7526c8cee98bdd7363fd7f2cf8ae",
          controlsPlayPausePlaying: "rockstargames-modules-core-feedbackefb6194f0df966e6c8c759937d2fb826",
          controlsNextTrack: "rockstargames-modules-core-feedbackf286e0ce01c5401e56dd579b076f1aae",
          controlsPrevTrack: "rockstargames-modules-core-feedbacka56bb7cb4b0e2de481777d1f09c3f2f2",
          controlsScrubTrack: "rockstargames-modules-core-feedbackb8f38f45353fa54fcb6f9e2a3d0d5a85"
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
            playing: s,
            audioRef: t,
            setPlaying: c,
            tracksOpen: r,
            setTracksOpen: i,
            trackData: o,
            setTrackId: d,
            trackBounds: l,
            setAutoNext: m
          } = e;
          const f = (0, n.useRef)(null),
            u = (0, n.useRef)(null),
            g = (0, n.useRef)(null),
            [k, b] = (0, n.useState)(null),
            [_, p] = (0, n.useState)(!1),
            v = e => {
              const a = new Date(1e3 * e),
                s = a.getUTCMinutes(),
                t = a.getSeconds();
              return `${s.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`
            };
          return (0, n.useEffect)((() => {
            if (!u.current || !g.current) return;
            const e = () => {
              g.current && u.current && b(g.current.clientWidth > u.current.clientWidth)
            };
            return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e)
          }), [g, u, a]), (0, n.useEffect)((() => {
            if (!f.current || !a?.duration) return;
            let e = null;
            const s = new(L())(f.current),
              c = e => {
                if (f.current) {
                  const s = f.current.clientWidth;
                  if (!f.current.contains(e.srcEvent.target)) return;
                  const c = Math.max(0, e.srcEvent.offsetX),
                    r = Number(c / s * a.duration);
                  t.currentTime = r
                }
              },
              r = () => {
                e ? t.pause() : t.play()
              },
              i = () => {
                e = t.paused, t.pause()
              };
            return s.on("panstart", i), s.on("panleft", c), s.on("panright", c), s.on("panend", r), s.on("tap", c), () => {
              s.off("panstart", i), s.off("panleft", c), s.off("panright", c), s.off("panend", r), s.off("tap", c)
            }
          }), [f.current, a.duration]), (0, n.useEffect)((() => {
            const e = Number(t?.currentTime);
            (s || !isNaN(e) && 0 !== e) && p(!0)
          }), [s, t?.currentTime]), (0, N.jsxs)("div", {
            className: z.controls,
            style: {
              "--track-color": o.color,
              "--track-mix-blend-mode": o.mix_blend_mode,
              "--current-pct": a.current / a.duration
            },
            children: [(0, N.jsx)("div", {
              className: [z.controlsCurrentBg, _ ? z.controlsCurrentBgVisible : ""].join(" ")
            }), (0, N.jsx)("div", {
              className: z.controlsTrack,
              ref: u,
              children: (0, N.jsx)("span", {
                className: [z.controlsTrackTitle, k ? z.controlsTrackAnimating : ""].join(" "),
                ref: g,
                children: o.title
              })
            }), (0, N.jsxs)("div", {
              className: z.controlsButtons,
              children: [(0, N.jsx)("div", {
                className: z.controlsPrevTrack,
                onClick: () => {
                  l && (d(l[0]), m(!0), c(!0))
                }
              }), (0, N.jsx)("div", {
                className: [z.controlsPlayPause, s ? z.controlsPlayPausePlaying : ""].join(" "),
                onClick: () => {
                  c(!s)
                }
              }), (0, N.jsx)("div", {
                className: z.controlsNextTrack,
                onClick: () => {
                  l && (d(l[1]), m(!0), c(!0))
                }
              })]
            }), (0, N.jsx)("div", {
              active: r ? "" : null,
              className: z.controlsTrackBurger,
              children: (0, N.jsx)("div", {
                className: z.iconBurger,
                onClick: () => {
                  i(!r)
                }
              })
            }), (0, N.jsxs)("div", {
              className: z.controlsScrub,
              children: [(0, N.jsx)("span", {
                children: v(a.current)
              }), (0, N.jsx)("div", {
                className: z.controlsScrubTrack,
                ref: f
              }), (0, N.jsx)("span", {
                children: v(a.duration)
              })]
            })]
          })
        },
        V = e => {
          let {
            tracks: a,
            trackId: s,
            setTrackId: t,
            tracksOpen: c,
            setTracksOpen: r,
            setPlaying: i,
            setAutoNext: o
          } = e;
          return (0, N.jsxs)("div", {
            className: z.tracks,
            children: [(0, N.jsx)("h4", {
              children: "Tracks"
            }), (0, N.jsx)("div", {
              className: z.trackBurger,
              onClick: () => {
                r(!c)
              }
            }), (0, N.jsx)("div", {
              className: z.trackList,
              children: a.map(((e, a) => (0, N.jsxs)("a", {
                style: {
                  "--highlight-color": e.color
                },
                className: s === e.id ? z.trackActive : "",
                onClick: () => {
                  t(e.id), i(!0), o(!0)
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
            className: s = ""
          } = e;
          const {
            data: t
          } = (0, E.useQuery)(B.GetAudioAlbum, {
            variables: {
              id: a
            }
          }), [c, r] = (0, n.useState)(), [i, o] = (0, n.useState)(), [d, l] = (0, n.useState)(), [m, f] = (0, n.useState)(!1), [u, g] = (0, n.useState)(!1), [k, b] = (0, n.useState)(new HTMLAudioElement), [_, p] = (0, n.useState)({
            current: 0,
            duration: 0
          }), [v, h] = (0, n.useState)(!0);
          return (0, n.useEffect)((() => {
            const e = "audio",
              a = a => {
                a?.data?.rockstarAudioPlayerPlayTrackId && (o(a.data.rockstarAudioPlayerPlayTrackId), h(!1), g(!0)), u && a?.data?.attentionBlurredElsewhere && a?.data?.from !== e && g(!1)
              };
            return u && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: e
            }), window.addEventListener("message", a, !1), () => window.removeEventListener("message", a, !1)
          }), [u]), (0, n.useEffect)((() => {
            if (!k) return;
            const e = () => {
                isNaN(k.duration) || p({
                  duration: k?.duration ?? 0,
                  current: k?.currentTime ?? 0
                })
              },
              a = () => {
                v && c && o(c[1])
              };
            return k.addEventListener("loadedmetadata", e), k.addEventListener("timeupdate", e), k.addEventListener("ended", a), () => {
              k.removeEventListener("loadedmetadata", e), k.removeEventListener("timeupdate", e), k.removeEventListener("ended", a)
            }
          }), [k, c, v]), (0, n.useEffect)((() => {
            u && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: "audio"
            })
          }), [u]), (0, n.useEffect)((() => {
            k && (u ? k.play() : k.pause(), f(!1))
          }), [u, k, d?.id]), (0, n.useEffect)((() => {
            if (!i) return;
            const {
              tracks: e
            } = t.audioAlbum, a = t.audioAlbum.tracks.findIndex((e => e.id === i));
            r([e[a - 1]?.id ?? e[e.length - 1].id, e[a + 1]?.id ?? e[0].id]), l(e[a])
          }), [i]), (0, n.useEffect)((() => {
            t && o(t.audioAlbum.tracks[0].id)
          }), [t]), d ? (0, N.jsxs)("div", {
            className: [z.player, z[s], m ? z.tracksOpen : ""].join(" "),
            children: [(0, N.jsx)("audio", {
              ref: e => {
                b(e)
              },
              src: d.mp3_src
            }), (0, N.jsx)(V, {
              tracks: t.audioAlbum.tracks,
              setTrackId: o,
              trackId: i,
              tracksOpen: m,
              setTracksOpen: f,
              setPlaying: g,
              setAutoNext: h
            }), (0, N.jsx)(P, {
              src: d.cover_src
            }), (0, N.jsx)($, {
              setTrackId: o,
              trackBounds: c,
              tracksOpen: m,
              setTracksOpen: f,
              playing: u,
              setPlaying: g,
              timing: _,
              trackData: d,
              audioRef: k,
              setAutoNext: h
            })]
          }) : null
        },
        A = e => {
          let {
            text: a,
            style: s
          } = e;
          return (0, N.jsx)("div", {
            className: "rockstargames-modules-core-feedbackb61bd7f274fd6d93c4bf33a9284b6b67",
            style: s,
            children: a
          })
        },
        O = e => {
          let {
            brands: a = []
          } = e;
          return a.length ? (0, N.jsx)("div", {
            className: "rockstargames-modules-core-feedbackcde08e212f23b312d5afca7f2ea1105c",
            children: a.map(((e, a) => {
              let {
                brand: s
              } = e;
              return (0, N.jsx)("div", {
                className: "rockstargames-modules-core-feedbackc894fe869384587702b5370da072be86",
                "data-brand": s
              }, a)
            }))
          }) : null
        },
        F = {
          button: "rockstargames-modules-core-feedbacke056494c33cff1fe89431f279fdb6b9a",
          secondary: "rockstargames-modules-core-feedbackd340cf27f380a4347994e59544432eb3"
        },
        R = e => {
          let {
            className: a = "",
            children: s,
            context: t = "",
            to: c,
            onClick: r,
            ...i
          } = e;
          const o = [F.button, F[t], a].join(" ");
          return c ? (0, N.jsx)(T, {
            ...i,
            to: c,
            className: o,
            onClick: r ? () => r() : () => {},
            children: s
          }) : (0, N.jsx)("button", {
            ...i,
            type: "button",
            className: o,
            onClick: r ? () => r() : () => {},
            children: s
          })
        };
      var G = s(1740);
      const H = {
          pillBtn: "rockstargames-modules-core-feedbackb59962d0e68ccd73b5ee2e571528d469",
          selected: "rockstargames-modules-core-feedbackf5c57dad202e0d6ff855d5a4aca2c804",
          plusButton: "rockstargames-modules-core-feedbackcffaf489342637258d28f9b3b718836a",
          small: "rockstargames-modules-core-feedbackb8abf927f0ba0af0d8ac0e9c77690d34",
          btnText: "rockstargames-modules-core-feedbacke6e56461bfc2e426c4abc5451cd17284",
          btnTexticon: "rockstargames-modules-core-feedbackcef9f9ce913d167a1fe2e7118a407cdd",
          whiteBtn: "rockstargames-modules-core-feedbackb257e0629b9f8e101791d7a948ed15be",
          blackBtn: "rockstargames-modules-core-feedbackcb03bccaee79394858682d2ce4d08253",
          transparentBtn: "rockstargames-modules-core-feedbackd0460159a17533d4d23686d7dca76794",
          iconBtn: "rockstargames-modules-core-feedbackac61186c3c22346c9a4ee2cd2820d341",
          link: "rockstargames-modules-core-feedbackc5920e56149b82f20f4db2ad9d397495",
          xboxone: "rockstargames-modules-core-feedbacka7057f2e6d398341f57bc462716d0508",
          xboxseriesxs: "rockstargames-modules-core-feedbacka693ab5879f34d7dea1737d3172ed4e4",
          ps4: "rockstargames-modules-core-feedbacka029ff88fc9aef470aaeef8053f90436",
          ps5: "rockstargames-modules-core-feedbacke25638751cf3e7267db23c6a401fcc36",
          pc: "rockstargames-modules-core-feedbacke03d92653f19a7ae3c4b3d5137bc9909"
        },
        U = e => {
          let {
            children: a,
            className: s,
            onClick: t,
            style: c
          } = e;
          return (0, N.jsx)("button", {
            className: s,
            onClick: t ? () => t() : () => {},
            style: c,
            type: "button",
            children: a
          })
        },
        W = e => {
          let {
            children: a,
            className: s,
            onClick: t,
            style: c,
            to: r
          } = e;
          return (0, N.jsx)(C.Af, {
            className: s,
            onClick: t ? () => t() : () => {},
            style: c,
            to: r,
            children: a
          })
        },
        q = e => {
          let {
            btnColor: a = "#fff",
            className: s = "",
            consoleBtn: t,
            icon: c = "",
            img: r,
            labelColor: i = "#000",
            onClick: o,
            secondText: n,
            size: d,
            text: l,
            to: m,
            type: f = ""
          } = e;
          const u = [H.plusButton, H[f] ?? "", H[d] ?? "", H[t] ?? "", s].join(" "),
            g = {
              "--hvr-color": a ?? i,
              "--hvr-bg-color": i ?? a,
              "--hvr-border-color": a ?? i
            },
            k = (0, N.jsxs)(N.Fragment, {
              children: [r ? (0, N.jsx)("img", {
                src: r,
                alt: ""
              }) : "", (0, N.jsxs)("div", {
                className: H.btnText,
                icon: c,
                children: [l, n ? (0, N.jsx)("span", {
                  children: n
                }) : ""]
              })]
            });
          if (m) {
            if (m.startsWith("http")) {
              const e = m.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, N.jsx)("span", {
                onClick: o ? () => o() : () => {},
                onKeyDown: o,
                className: u,
                role: "button",
                tabIndex: 0,
                children: (0, N.jsx)("a", {
                  href: m,
                  target: e,
                  children: k
                })
              })
            }
            return (0, N.jsx)(W, {
              className: u,
              onClick: o ? () => o() : () => {},
              style: g,
              to: m,
              children: k
            })
          }
          return (0, N.jsx)(U, {
            className: u,
            onClick: o ? () => o() : () => {},
            style: g,
            children: k
          })
        },
        X = e => {
          let {
            buttons: a = [],
            className: s
          } = e;
          return a.length ? (0, N.jsx)("div", {
            className: (0, G.classList)("rockstargames-modules-core-feedbackb411a36e7fd12ab75861fe560b31b206", s),
            children: a.map(((e, a) => {
              let {
                icon: s,
                title: t,
                to: c
              } = e;
              return t ? (0, N.jsx)(q, {
                icon: s,
                text: t,
                to: c
              }, a) : ""
            }))
          }) : null
        };
      var K = s(8111),
        Y = s(2231);
      const Q = {
          deprecatedCarousel: "rockstargames-modules-core-feedbackeb5df7b3d51dffc4d993ca7abce4e944",
          "swiper-scrollbar-disabled": "rockstargames-modules-core-feedbackeb2dda6769a7c20a31e7996ff62e41f8",
          "swiper-horizontal": "rockstargames-modules-core-feedbackb11093de3cb4f18ea2d59b8d4d1db44c",
          "swiper-vertical": "rockstargames-modules-core-feedbackfa3209fdf995734a1aeeac2cc72cc1ea",
          renderedWithChildren: "rockstargames-modules-core-feedbackc9f15e74b3166cd0db40501fcc70e868",
          panorama: "rockstargames-modules-core-feedbackf2a7e77af5dff445e978fd575a567508",
          img: "rockstargames-modules-core-feedbackf1d3d54c266a20fa0cbe9c342b0d98da",
          hideMobile: "rockstargames-modules-core-feedbacke70d5eaa273e4a0a40ee62a308491810",
          hideLarge: "rockstargames-modules-core-feedbackbace2af6c822ba7b36b53923629cba0f",
          imageAreaBg: "rockstargames-modules-core-feedbackf4bb071e6dad07c75b78ea21269ca662",
          infinite_false: "rockstargames-modules-core-feedbackd6c3d175b843462bf23a1a1f3af6b095",
          track: "rockstargames-modules-core-feedbackb5ff781c4a96bf031e8e7f5e0c9af395",
          perico: "rockstargames-modules-core-feedbackbb97d296d17b7e801c6c0719a79463dd",
          dotsSlide: "rockstargames-modules-core-feedbackdd55a6f93254ed13542089c6f36e0048",
          siblings: "rockstargames-modules-core-feedbacka59cf4385528c371a13be9962b67131b",
          active: "rockstargames-modules-core-feedbackaa5e195e0c7c6336929553314d52a896",
          "swiper-preloader-spin": "rockstargames-modules-core-feedbackc05cc0faa8239c85cdc7d53c7e120e8e"
        },
        Z = e => {
          let {
            item: a
          } = e;
          return (0, N.jsxs)("div", {
            children: [(0, N.jsx)(Ra, {
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
            total: s
          } = e;
          return (0, N.jsx)("div", {
            className: "swiper-scrollbar",
            style: {
              "--current-slide": a,
              "--total-slides": s
            },
            children: (0, N.jsx)("div", {
              className: "swiper-scrollbar-drag"
            })
          })
        },
        ee = e => {
          let {
            children: a,
            items: s = [],
            style: t = {},
            noInfiniteScroll: c = !1,
            className: r = "",
            renderTemplate: i = "standard",
            text: o,
            customSpaceBetween: d = null,
            centerSlides: l = !0,
            centeredSlidesBounds: m = !1
          } = e;
          const [f, u] = (0, n.useState)(0), g = (0, n.useMemo)((() => a && Array.isArray(a) ? a.map((() => (0, Y.c)())) : null), [a]);
          if (!(s && 0 !== s?.length || a)) return null;
          const k = {
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
          return (0, N.jsxs)("div", {
            className: (0, G.classList)(Q.deprecatedCarousel, Q[i], Q[`infinite_${!c}`], a ? Q.renderedWithChildren : "", r),
            style: t,
            children: [(0, N.jsxs)(K.wx, {
              loop: !c,
              grabCursor: !0,
              centeredSlides: l,
              centerInsufficientSlides: l,
              slidesPerView: "auto",
              speed: 700,
              breakpoints: k,
              onUpdate: () => u(0),
              onActiveIndexChange: e => u(e?.realIndex ?? 0),
              centeredSlidesBounds: m,
              children: [(0, N.jsx)("div", {
                className: Q.trackWrapper,
                children: (0, N.jsxs)("div", {
                  className: Q.track,
                  children: [s?.map((e => (0, N.jsx)(K.Ky, {
                    children: (0, N.jsx)(Z, {
                      item: e
                    })
                  }, e.key))), a && a?.map(((e, a) => e && (0, N.jsx)(K.Ky, {
                    children: e
                  }, g && g[a])))]
                })
              }), (0, N.jsx)(J, {
                current: f,
                total: a ? a.length : s.length
              })]
            }), (o?.title || o?.description) && (0, N.jsx)(Oe, {
              item: o
            })]
          })
        };
      var ae = s(5792),
        se = s(2836);
      const te = (0, s(2748).U1)(),
        ce = e => e.some((e => !e)),
        re = e => {
          let {
            condition: a = null,
            children: s
          } = e;
          const [t, c] = (0, n.useState)(!1), r = (e => {
            const [a] = (0, C.k5)(), [s, t] = (0, n.useState)(null), c = (0, se.useRockstarUser)(), {
              loggedIn: r
            } = c, {
              currentCharId: i
            } = (0, se.useRockstarUserState)(), o = function(e) {
              let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "gtao";
              return (0, n.useMemo)((() => {
                const t = e?.data?.characters?.[s];
                return "1" === (t?.[a]?.stats?.overview?.hasGtaPlus?.value ?? "0")
              }), [e, s, a])
            }(c, i);
            return (0, n.useEffect)((() => {
              const s = "true" === a.get("conditionPreview");
              if (!e?.length > 0) return;
              te.applyFilters("preview_conditions", e);
              const c = [];
              return e.forEach((e => {
                const {
                  value: t
                } = e;
                if (s) return "true" === a.get(t) ? (c.push(!0), !0) : (c.push(!1), !1);
                if (ce(c)) return !1;
                switch (t) {
                  case "user:is:loggedIn":
                    c.push(!0 === r);
                    break;
                  case "user:not:loggedIn":
                    c.push(!1 === r);
                    break;
                  case "user:is:gtaPlus":
                    c.push(!0 === o);
                    break;
                  case "user:not:gtaPlus":
                    c.push(!1 === o);
                    break;
                  default:
                    c.push(!1)
                }
                return null
              })), t(!ce(c)), () => {}
            }), [a, e, o, c, r]), s
          })(a);
          return (0, n.useEffect)((() => {
            c(r)
          }), [r]), (0, n.useMemo)((() => t ? s : null), [t])
        },
        ie = (0, ae.withTranslations)((e => {
          let {
            children: a
          } = e;
          return n.Children.map(n.Children.toArray(a), (e => (0, N.jsx)(re, {
            ...e?.props
          })))
        }));
      var oe = s(1512),
        ne = s(8652);
      const de = e => {
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
        le = {
          pillBtn: "rockstargames-modules-core-feedbacke3158363419b66e5afa2264e4928890c",
          selected: "rockstargames-modules-core-feedbacka9649249223f164eff11174ffc72616b",
          calloutContainer: "rockstargames-modules-core-feedbacke6bd244761fdf3ebe3888539d9942921",
          calloutSection: "rockstargames-modules-core-feedbackb1b8c93299158ef7d0f9eb04e14a7a64",
          calloutHeaders: "rockstargames-modules-core-feedbackc81810436a5b57307c41f4d7a704b2f7",
          calloutHeaderMargins: "rockstargames-modules-core-feedbackb4e1f72dfa9b38f23017e5f8ef48b9cb",
          calloutHeader: "rockstargames-modules-core-feedbackb7964754215256201dd703aedca18b6f",
          calloutSubheader: "rockstargames-modules-core-feedbackac660fa7995007ed875e03a257e447d7",
          calloutVoteForm: "rockstargames-modules-core-feedbackbee0795a36dd5adf822e1e50a7260f3d",
          voteButton: "rockstargames-modules-core-feedbackb1baa545566a61b791b696c9ebf560ad",
          upvote: "rockstargames-modules-core-feedbackb9c17ddd3e1052acb5097909ae2b07a1",
          downvote: "rockstargames-modules-core-feedbackf26b53e66e552183743465cce6a8d3a8",
          active: "rockstargames-modules-core-feedbackd38a1764483a36e8a1509aee5b88ec31",
          calloutButton: "rockstargames-modules-core-feedbackb7eb76afce3c6e686be44c356837b627",
          calloutLink: "rockstargames-modules-core-feedbackaefe6c5a233047c943a864cd56a7de2d",
          calloutLinkIcon: "rockstargames-modules-core-feedbacka74bf6baa632ad9b5f87efd2043cfed5",
          actionBlock: "rockstargames-modules-core-feedbackcc491ddd715196ecd6ef54017ff05ec0",
          actionFooter: "rockstargames-modules-core-feedbackdb26fed58ce50f4affc114670885721a"
        },
        me = e => {
          let {
            foreign_id: a,
            foreign_type: s
          } = e;
          const {
            track: t
          } = (0, se.useGtmTrack)(), {
            refetch: c
          } = (0, E.useQuery)(ne.UserGetVote, {
            skip: !0
          }), [r] = (0, E.useMutation)(ne.UserCastVote), [i, o] = (0, n.useState)(null), d = (0, n.useCallback)((e => {
            (async () => {
              if (e === i && null !== i) o(null);
              else {
                o(e), t({
                  event_action: e ? "like" : "dislike",
                  event_category: "cta",
                  event: "cta_" + (e ? "like" : "dislike"),
                  event_label: a
                });
                const c = {
                  foreignId: a,
                  foreignType: s,
                  vote: e
                };
                await r({
                  variables: c
                })
              }
            })()
          }), [a, s, i]);
          return (0, n.useEffect)((() => {
            a && s && (async () => {
              const e = await c({
                foreignId: a,
                foreignType: s
              });
              o(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [a, s]), (0, N.jsxs)("div", {
            className: le.calloutVoteForm,
            children: [(0, N.jsx)("button", {
              "aria-label": "upvote",
              className: [le.upvote, le.voteButton, i ? le.active : ""].join(" "),
              name: "upvote",
              onClick: () => d(!0),
              type: "button"
            }), (0, N.jsx)("button", {
              "aria-label": "downvote",
              className: [le.downvote, le.voteButton, !1 === i ? le.active : ""].join(" "),
              name: "downvote",
              onClick: () => d(!1),
              type: "button"
            })]
          })
        },
        fe = e => {
          let {
            action_text: a,
            link: s,
            trackingData: t
          } = e;
          const {
            track: c
          } = (0, se.useGtmTrack)();
          return (0, N.jsx)("a", {
            href: s,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, N.jsxs)("button", {
              className: le.calloutLink,
              type: "button",
              onClick: t ? () => c({
                ...t
              }) : () => {},
              children: [a, (0, N.jsx)(de, {
                className: le.calloutLinkIcon
              })]
            })
          })
        },
        ue = e => {
          let {
            helperText: a,
            linkText: s,
            link: t,
            trackingData: c
          } = e;
          const {
            track: r
          } = (0, se.useGtmTrack)();
          return (0, N.jsxs)("div", {
            className: le.actionFooter,
            children: [a, s && " ", s && (0, N.jsx)("a", {
              href: t ?? "",
              onClick: () => r({
                ...c
              }),
              children: s
            })]
          })
        },
        ge = (0, ae.withTranslations)((e => {
          let {
            header: a,
            subheader: s,
            type: t,
            action_text: c,
            link: r,
            foreign_id: i = document.location.pathname,
            foreign_type: o = "url",
            className: d = "",
            actionFooterHelperText: l,
            actionFooterLinkText: m,
            actionFooterLink: f,
            trackingData: u = {},
            actionFooterLinkTrackingData: g = {},
            t: k,
            ...b
          } = e;
          const {
            loggedIn: _
          } = (0, se.useRockstarUser)(), {
            track: p
          } = (0, se.useGtmTrack)(), v = `${document.location.origin}/auth/sc-auth-login?returnUrl=${window.location.pathname}`, {
            ref: h,
            inView: x
          } = (0, oe.cD)({
            threshold: .6
          }), [y, j] = (0, n.useState)(!1);
          let w;
          if ((0, n.useEffect)((() => {
              x && !y && (p({
                event: "page_section_impression",
                event_action: "impression",
                event_category: "page_section",
                event_label: "callout section",
                element_placement: `callout section - ${b?.sectionName??b?._memoq?.header}`
              }), j(!0))
            }), [x]), !a && !s) return null;
          switch (t) {
            case "vote":
              if (!_) {
                w = (0, N.jsx)(R, {
                  to: v,
                  className: le.calloutButton,
                  onClick: u ? () => p({
                    ...u
                  }) : () => {},
                  children: "Log In"
                });
                break
              }
              w = (0, N.jsx)(me, {
                foreign_id: i,
                foreign_type: o
              });
              break;
            case "button":
              c && r && (w = (0, N.jsx)(R, {
                to: r,
                className: le.calloutButton,
                onClick: u ? () => p({
                  ...u
                }) : () => {},
                children: c
              }));
              break;
            case "link":
              c && r && (w = (0, N.jsx)(fe, {
                action_text: c,
                link: r,
                trackingData: u
              }));
              break;
            default:
              w = null
          }
          return (0, N.jsx)("div", {
            className: `${le.calloutContainer} ${d||""}`,
            ref: h,
            children: (0, N.jsxs)("div", {
              className: le.calloutSection,
              children: [(0, N.jsxs)("div", {
                className: [le.calloutHeaders, w ? le.calloutHeaderMargins : ""].join(" "),
                children: [a && (0, N.jsx)("h2", {
                  className: le.calloutHeader,
                  children: k(a)
                }), s && (0, N.jsx)("h3", {
                  className: le.calloutSubheader,
                  children: k(s)
                })]
              }), (0, N.jsxs)("div", {
                className: le.actionBlock,
                children: [w, l && (0, N.jsx)(ue, {
                  helperText: l,
                  linkText: m,
                  link: f,
                  trackingData: g
                })]
              })]
            })
          })
        }));
      var ke = s(9736),
        be = s(4236),
        _e = s.n(be);
      const pe = e => {
          let {
            isMulti: a,
            allowSelectAll: s,
            label: t,
            miscProps: c
          } = e;
          const [r, i] = (0, n.useState)(""), o = (0, n.useMemo)((() => _e()().getData()), []);
          return (0, N.jsx)(ke.cp, {
            unstyled: !0,
            value: r,
            isMulti: a,
            allowSelectAll: s,
            options: o,
            placeholder: t,
            onChange: e => {
              return a = e?.target?.value, void i(a);
              var a
            },
            classNamePrefix: "country-select",
            ...c
          })
        },
        ve = e => {
          let {
            cookieName: a,
            cookieValue: s,
            trueComponent: t,
            falseComponent: c
          } = e;
          const r = (e => {
              const a = document.cookie.split("; "),
                s = `${e}=`,
                t = a.find((e => e.startsWith(s)));
              return t?.substring(s.length, t.length)
            })(a),
            i = new URLSearchParams(window.location.search).get(a);
          return i && ((e, a) => {
            e && a && (document.cookie = `${e}=${a}; domain=${(()=>{const e=window.location.hostname.split(".");return e.slice(e.length-2).join(".")})()}; path=/;`)
          })(a, i), r === s || i === s ? t : c
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
          cta: "rockstargames-modules-core-feedbackbc76de01fdd1260e254c482984d2a924",
          xbox: "rockstargames-modules-core-feedbackf591c5444c08121b0514f0c675da1479",
          xboxone: "rockstargames-modules-core-feedbacke5124beff89c5b4093a4029a9fee3367",
          xboxseriesxs: "rockstargames-modules-core-feedbacke52c94654eb462a8e65aa7607f5e21b5",
          ps: "rockstargames-modules-core-feedbackc53b78d3d062ee8d58f63a0acb1df137",
          ps4: "rockstargames-modules-core-feedbackf4a27aba1505f555d7cd8c920645245a",
          ps5: "rockstargames-modules-core-feedbackb5826d3700572b9bf36874e34d5c2a22",
          pc: "rockstargames-modules-core-feedbackc7ee0cfc54be00a8b152c47997ce76ac",
          switch: "rockstargames-modules-core-feedbacka9b276d1c119e9cd14df54c4459197b0",
          googleplay: "rockstargames-modules-core-feedbacka4ccd0de63b104d4aa48c8c3176618f3",
          platformIcon: "rockstargames-modules-core-feedbackc4ab0a89b65025cfe63b851116fb3a32",
          applestore: "rockstargames-modules-core-feedbacka13111cbe8acbd75f62da1c53de2c3df",
          btnIcon: "rockstargames-modules-core-feedbackcb0ad8d8dd93218dc12091b883767967",
          label: "rockstargames-modules-core-feedbackb81011c72b601075ebe54d7ceaa7d2d8",
          primary: "rockstargames-modules-core-feedbackdbcf41d5c23e0eaf5089021f4d41c121",
          btnContent: "rockstargames-modules-core-feedbackf5e832587747dc414e10ab8e0bd843a9",
          icon: "rockstargames-modules-core-feedbackc7a3f1a29594b307606d15e6827f63f9",
          "icon-left": "rockstargames-modules-core-feedbackbd623c6039c3f4122936775ed4214bd4",
          "icon-right": "rockstargames-modules-core-feedbackc79040e66c1f48e302291d8cf1335742",
          disabled: "rockstargames-modules-core-feedbackd87326174de12b895401f738a23b177a",
          pillBtn: "rockstargames-modules-core-feedbackbf9c11ff862c409ecb412254932a66d0",
          selected: "rockstargames-modules-core-feedbacke07887131c72b6346c408895888f4fa7"
        },
        Ne = e => {
          let {
            platform: a = ""
          } = e;
          const s = a ? xe(a) : null,
            t = s ? (0, N.jsx)("img", {
              className: ye.platformIcon,
              src: s,
              alt: "Platform Icon"
            }) : null;
          return (0, N.jsx)("span", {
            className: [ye.btnContent, ye.platformButton].join(" "),
            children: t
          })
        },
        je = e => {
          let {
            children: a,
            href: s,
            style: t,
            content: c,
            variant: r = null,
            icon: i,
            iconPosition: o = "none",
            iconStyle: d,
            badge: l,
            badgeStyle: m,
            platformItem: f,
            gtm: u = {},
            disabled: g,
            className: k
          } = e;
          const {
            track: b
          } = (0, se.useGtmTrack)(), _ = (0, ae.useDataLayer)(), p = c ?? a, v = `Redirect to ${s}`, h = (0, n.useMemo)((() => {
            const e = window.location.hostname;
            let a;
            try {
              a = new URL(s)?.hostname
            } catch (s) {
              a = e
            }
            return e === a
          }), [s]), x = (0, n.useCallback)((() => {
            g || b({
              event: "cta_other",
              ..._,
              ...u,
              link_url: s ?? void 0,
              text: p ?? void 0
            })
          }), [u, s, _]), y = () => i ? (0, N.jsx)("span", {
            className: [ye.icon, `icon-${o}`].join(" "),
            style: d,
            children: (0, N.jsx)("img", {
              className: ye.btnIcon,
              src: xe(i),
              alt: `${i} icon`
            })
          }) : null;
          return (0, N.jsx)(C.Af, {
            to: s,
            target: h ? "_self" : "_blank",
            className: [ye.cta, "platform" === r && f ? ye[f] : "", g ? ye.disabled : "", k].join(" "),
            style: t,
            "data-variant": r,
            onClick: x,
            disabled: g,
            "aria-label": v,
            children: "platform" === r && f ? (0, N.jsx)(Ne, {
              platform: f
            }) : (0, N.jsxs)("div", {
              className: ye.btnContent,
              children: ["left" === o && y(), (0, N.jsx)("span", {
                children: p
              }), "right" === o && y(), l ? (0, N.jsx)("span", {
                className: ye.badge,
                style: m,
                children: l
              }) : null]
            })
          })
        };
      var we = s(5652);
      const Se = "rockstargames-modules-core-feedbackeb64520e04e486931cd65dc5b3fa61e8",
        Ce = "rockstargames-modules-core-feedbackcc9a6fdcc84b758d60987ea9a5ddfd81",
        Ie = "rockstargames-modules-core-feedbackee609f31f3685766122c2c6fc0ef0710",
        Te = e => {
          let {
            alt: a,
            className: t,
            src: c,
            style: r
          } = e;
          const [i, o] = (0, ae.usePreloadImg)(c);
          let n = c;
          !1 === i && (t === Ie && (n = s(1820)), n = s(3976));
          const {
            width: d,
            height: l
          } = o, m = {
            "--aspect-ratio": Number.isNaN(d / l) ? "" : d / l,
            ...r
          };
          return (0, N.jsx)("img", {
            src: n,
            className: t ?? "",
            alt: a,
            style: m
          })
        },
        Me = e => {
          let {
            className: a,
            style: t = {},
            image: c = {},
            imageStyle: r = {}
          } = e, {
            alt: i,
            src: o
          } = (0, we.useImageParser)(c);
          return o.desktop || o.mobile || (i = "placeholder", o = {
            mobile: s(1820),
            desktop: s(3976)
          }), (0, N.jsx)("div", {
            className: c.frame ? `${c.frame} ${Se}` : Se,
            style: t,
            children: o?.desktop && o?.mobile ? (0, N.jsxs)(N.Fragment, {
              children: [(0, N.jsx)(Te, {
                style: {
                  ...r,
                  ...c?.style
                },
                src: o.desktop,
                alt: i,
                className: a ? `${a} ${Ce}` : Ce
              }), (0, N.jsx)(Te, {
                style: {
                  ...r,
                  ...c?.style
                },
                src: o.mobile,
                alt: i,
                className: a ? `${a} ${Ie}` : Ie
              })]
            }) : (0, N.jsx)(Te, {
              style: {
                ...r,
                ...c?.style
              },
              src: o?.desktop ?? o?.mobile,
              alt: i,
              className: a
            })
          })
        };
      var Le = s(8560),
        Ee = s.n(Le);
      const Be = {
          grid: "rockstargames-modules-core-feedbackac295ed5b9cb441ed17843b34e83ea17",
          itemList: "rockstargames-modules-core-feedbackcaf5589ddeca00ed09213e547674b1f3",
          gtaplus: "rockstargames-modules-core-feedbackb291112adcf994a0f6acadd86f73b78a",
          rdo: "rockstargames-modules-core-feedbackd146e8f862baefb60e91be5aa3c17b6e",
          noImg: "rockstargames-modules-core-feedbackba9b5ae08642b0213a3f04b3db9a9dac",
          gtao: "rockstargames-modules-core-feedbackb6f2bdfd6a1d57b7ce840f7a56cc510b",
          custom: "rockstargames-modules-core-feedbackaf89164a043648d1464686ff13363ee4",
          yellow: "rockstargames-modules-core-feedbackd244b17b74fc46269e8a106a99ab0f87",
          hotPink: "rockstargames-modules-core-feedbackd90b28503318563cfd6059146d1fb6b6",
          red: "rockstargames-modules-core-feedbackc3f8a8706901874d906f94c626be3c1e",
          turquoise: "rockstargames-modules-core-feedbackfe2ec36e92e2bb4d453fdc4b05966418",
          purple: "rockstargames-modules-core-feedbackf5f7baf5b56f5b2ada053a93392bbf7a",
          teal: "rockstargames-modules-core-feedbackf4a229f41cd20f181d810c311416e3f2",
          blue: "rockstargames-modules-core-feedbackf6f689d687bcd482ea2cd2990fd66878",
          green: "rockstargames-modules-core-feedbackab270f1b4d3ad43e7bc51393b7c5c089",
          darkRed: "rockstargames-modules-core-feedbackdc24ce78d962f3472b06955bf8855103",
          darkBlue: "rockstargames-modules-core-feedbackb354493baac7389b21b511009f287428",
          goldenrod: "rockstargames-modules-core-feedbacke4a078efee11d24c64e93ccf0744a33f",
          skull: "rockstargames-modules-core-feedbackd4581a495de14e6762bb15debe5bb810"
        },
        {
          sanitize: ze
        } = Ee(),
        Pe = e => {
          let {
            list: a,
            string: s,
            starColor: t,
            style: c,
            className: r,
            game: i,
            noImg: o,
            columns: d,
            mobileColumns: l
          } = e;
          const [m, f] = (0, n.useState)(null), u = s ? s.split("_#_") : a;
          return (0, n.useEffect)((() => {
            f(a)
          }), [a]), s || a ? d && m ? (0, N.jsx)("div", {
            className: Be.grid,
            style: {
              "--unordered-list-grid-column": d,
              "--unordered-list-grid-column-mobile": l ?? d
            },
            children: (0, N.jsx)("ul", {
              style: (0, ae.safeStyles)(c),
              className: (0, G.classList)(Be.itemList, Be.noImg, Be[t], Be[i]),
              children: m.map((e => (0, N.jsx)("li", {
                dangerouslySetInnerHTML: {
                  __html: ze(e.content)
                }
              }, e.content)))
            })
          }) : (0, N.jsx)("ul", {
            style: (0, ae.safeStyles)(c),
            className: (0, G.classList)(Be.itemList, Be.custom, o ? Be.noImg : "", t ? Be[t] : "", i ? Be[i] : "", r ?? ""),
            children: u.map((e => (0, N.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: ze(e?.content ?? e)
              }
            }, e?.content)))
          }) : null
        },
        $e = {
          hr: "rockstargames-modules-core-feedbackf5cd418ab2ef6a89df6c95d2caa06ba8",
          redLine: "rockstargames-modules-core-feedbackf8b44ef9bbd3e7feb22bf79cc009b16e",
          gtao: "rockstargames-modules-core-feedbackc442f7264db862a7cca6d9a56dacc205"
        },
        Ve = e => {
          let {
            style: a,
            className: s = "",
            type: t
          } = e;
          return (0, N.jsx)("div", {
            style: a,
            className: [$e.hr, $e[t], s].join(" ")
          })
        },
        De = "rockstargames-modules-core-feedbackfa6885b15a718acb24f48949c52e31f1",
        Ae = e => {
          let {
            to: a,
            children: s
          } = e;
          return a ? (0, N.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noreferrer",
            children: s
          }) : s
        },
        Oe = e => {
          let {
            item: a,
            className: s = ""
          } = e;
          return (0, N.jsxs)("div", {
            className: (0, G.classList)("rockstargames-modules-core-feedbackef9e6981551ac5ce250ebff8b18d7a29", s),
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
      var Fe = s(8936);
      const Re = e => {
          let {
            children: a,
            ...s
          } = e;
          const [t, c] = (0, n.useState)(!1);
          return (0, N.jsx)(Fe.cR, {
            ...s,
            onReady: () => {
              document.fonts.ready.then((() => {
                c(!0)
              }))
            },
            children: a
          })
        },
        Ge = {
          badge: "rockstargames-modules-core-feedbacke279e2cebfa338f34b03fd732416e836",
          badgeSizeUpdate: "rockstargames-modules-core-feedbackd7362a3e27ccaad9d2aadd2f31691340",
          badge2: "rockstargames-modules-core-feedbackd697f4a5f7c876d5e540a96da1e0ca3a",
          badge3: "rockstargames-modules-core-feedbacke1bba3cd4554abbb48a030af24bbada5"
        },
        He = e => {
          let {
            wrapper: a,
            children: s,
            role: t,
            splitter: c
          } = e;
          return c || t ? a(s) : s
        },
        Ue = e => {
          let {
            badge: a,
            badgeType: t,
            role: c,
            splitter: r
          } = e;
          const i = [];
          r ? a.split(r).map(((e, a) => i.push(e))) : i.push(a);
          let o = 100;
          return 2 == i.length && i[1].length < 4 && "off" !== i[1].toLowerCase() && 45, (0, N.jsxs)(He, {
            splitter: r,
            role: c,
            wrapper: e => (0, N.jsx)("div", {
              className: `${Ge.badge} ${t?Ge[t]:""} `,
              children: e
            }),
            children: [(0, N.jsx)(N.Fragment, {
              children: c && (0, N.jsx)(Me, {
                image: {
                  alt: c,
                  desktop: s(6572)(`./${c}.png`)
                }
              })
            }), (0, N.jsx)(Re, {
              className: `${r||c?"":Ge.badge} ${t?Ge[t]:""}`,
              min: 8,
              max: 1e3,
              mode: r || c ? "single" : "multi",
              children: i[0]
            }), (0, N.jsx)(N.Fragment, {
              children: i.shift() && r && i.length >= 1 && (0, N.jsx)(Re, {
                min: 8,
                max: 1e3,
                mode: "single",
                forceSingleModeWidth: !0,
                children: i.join(" ")
              })
            })]
          }, "badge-wrapper")
        },
        We = "rockstargames-modules-core-feedbackc63cfb461217f059c8c25eec09602b30",
        qe = e => {
          let {
            color: a
          } = e;
          return (0, N.jsxs)("div", {
            className: "rockstargames-modules-core-feedbacka481f47ab7e8af4042a665fab5aea27c",
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
      var Xe = s(4072);
      const Ke = {
          dropdownWrapper: "rockstargames-modules-core-feedbackb951912c02de0e5e881fedd391d04810",
          items: "rockstargames-modules-core-feedbackb0a8f220641417f889d4fd6039fe6bac",
          open: "rockstargames-modules-core-feedbackf5eb88111734e6e70d34ef2b095c44f6",
          opener: "rockstargames-modules-core-feedbackecb577af64f747d0d39cf03939ee3c73",
          secondary: "rockstargames-modules-core-feedbackb64c3515fcd91f6b84410bd14640da81"
        },
        Ye = e => {
          let {
            children: a,
            className: s,
            title: t
          } = e;
          const [c, r] = (0, n.useState)(!1);
          return (0, N.jsx)(Xe.cp, {
            disabled: !c,
            children: (0, N.jsxs)("div", {
              className: [Ke.dropdownWrapper, c ? Ke.open : "", void 0 !== s ? s : ""].join(" "),
              children: [(0, N.jsx)("button", {
                className: Ke.opener,
                onClick: () => r(!c),
                children: t
              }), c && (0, N.jsx)("div", {
                className: Ke.items,
                onClick: () => r(!1),
                children: a
              })]
            })
          })
        };
      var Qe = s(5356);
      const Ze = e => {
          let {
            children: a,
            context: s = null,
            game: t,
            image: c = {},
            style: r = {},
            template: i = null,
            theme: o = null,
            reversedOnMobile: n = !1,
            className: d = "",
            id: l = null
          } = e;
          const m = (0, we.useImageParser)(c),
            f = {
              ...r
            };
          if (m?.src?.desktop) {
            const e = "var(--grid-background-repeat, no-repeat)",
              a = "var(--grid-background-position, center)/var(--grid-background-size, cover)";
            f.background = `url(${m?.src?.desktop}) ${e} ${a}`
          }
          return (0, N.jsx)("div", {
            id: l,
            className: (0, Qe.classList)("rockstargames-modules-core-feedbackf42b4606ed4a5b16b7647ad7b7eb229d", n ? "rockstargames-modules-core-feedbackb00444166ce6346d7ca364a75a335ecc" : "", d),
            "data-game": "community" === i ? null : t,
            style: (0, ae.safeStyles)(f),
            "data-context": s,
            "data-template": i,
            "data-theme": o,
            children: a
          })
        },
        Je = e => {
          let {
            caption: a,
            children: s,
            ...t
          } = e;
          return a ? (0, N.jsxs)("figure", {
            ...t,
            children: [s, (0, N.jsx)("figcaption", {
              dangerouslySetInnerHTML: {
                __html: a
              }
            })]
          }) : s
        },
        ea = e => {
          let {
            componentTitle: a,
            type: s,
            items: t
          } = e;
          return t?.length ? (0, N.jsx)("div", {
            className: "rockstargames-modules-core-feedbackd393ab6eb68d416b116b6281abdb5e14",
            type: s,
            children: (0, N.jsxs)(Ze, {
              children: [a && (0, N.jsx)("h3", {
                children: a
              }), (0, N.jsx)(Ze, {
                className: "rockstargames-modules-core-feedbacked3ee31cb8e357d795886157f95a742a",
                children: t.map(((e, a) => {
                  return e?.embed ? (0, N.jsx)(Je, {
                    caption: e?.caption,
                    children: (0, N.jsx)("div", {
                      className: "rockstargames-modules-core-feedbackdcf1c30612026a517f59af64d8703bc4",
                      dangerouslySetInnerHTML: {
                        __html: (s = e.embed, s.replace(/&gt;/g, ">").replace(/&lt;/g, "<"))
                      }
                    }, `${e?.key??a}_div`)
                  }, e?.key ?? a) : e?.text ? (0, N.jsx)("p", {
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
      var aa = s(1388);
      const sa = {
          type: "spring",
          stiffness: 650,
          damping: 45
        },
        ta = {
          ease: "easeOut",
          duration: .9,
          delay: .3
        },
        ca = {
          open: {
            opacity: 0,
            transition: {
              ease: "easeOut",
              duration: .3
            }
          },
          closed: {
            opacity: 1,
            transition: ta
          }
        },
        ra = {
          open: {
            opacity: 1,
            display: "grid",
            height: "auto",
            transition: {
              opacity: ta,
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
        ia = {
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
        oa = {
          pillBtn: "rockstargames-modules-core-feedbackba37d7130b54bd53bd309b0cd04717ff",
          selected: "rockstargames-modules-core-feedbackc9c0bba52c010c4e3571f2702eef944b",
          container: "rockstargames-modules-core-feedbackbfcd1a0671c127c9135d8c2feac75c34",
          content: "rockstargames-modules-core-feedbacka1cf623c9dd51dd05772a395d8311dac",
          unexpandedButton: "rockstargames-modules-core-feedbackba4683b82274b0f8ca98f97fd2b0a1c9",
          expandedArea: "rockstargames-modules-core-feedbackdd25aa78f935c7d4cafdb1c8bc6d7932",
          closeButton: "rockstargames-modules-core-feedbackc559c930e0a5a7caa72b3de9a3362a0a",
          platformButtons: "rockstargames-modules-core-feedbackd6bfc47d3110920d77ea2e70dac9c898",
          platformButton: "rockstargames-modules-core-feedbackb04a9bd68b598682a5dbe99dd1a2f06d",
          xbox: "rockstargames-modules-core-feedbackfe4a687dfc69ef746fcbe4184c7a9574",
          xboxone: "rockstargames-modules-core-feedbackb1f46a1ff640d7398e7736e814a5ed8f",
          xboxseriesxs: "rockstargames-modules-core-feedbacke23b6f1412ea1ecb8a616b4f25d2888d",
          ps: "rockstargames-modules-core-feedbacke0b107bda3c03c1e82c94195bfbc055b",
          ps4: "rockstargames-modules-core-feedbackdcf3078cbde57db42e66e6ba4c269fbe",
          ps5: "rockstargames-modules-core-feedbacke047116842d7619f0e04a3c9b6dbec13",
          pc: "rockstargames-modules-core-feedbackdaa32798c37b9055cd280b838972e63e",
          switch: "rockstargames-modules-core-feedbackae7bc564778d8af6cf5f8a0491ef7dc8",
          buttonText: "rockstargames-modules-core-feedbackc2fb2fb5ec39a5c3b3c14ee6c0505b53"
        },
        na = e => {
          let {
            buttonText: a = "",
            link: t = "",
            platform: c = "",
            target: r = null,
            onClick: i
          } = e;
          const o = r ?? (t.startsWith(document.location.origin) ? "_self" : "_blank"),
            n = [oa.platformButton, oa[c]].join(" "),
            d = c ? s(3892)(`./${c}.svg`) : null,
            l = (0, N.jsxs)(N.Fragment, {
              children: [d ? (0, N.jsx)("img", {
                src: d,
                alt: a
              }) : "", !d && (0, N.jsx)("div", {
                className: oa.buttonText,
                children: a
              })]
            });
          return t.startsWith("http") ? (0, N.jsx)("span", {
            onClick: i,
            onKeyDown: i,
            role: "link",
            tabIndex: 0,
            children: (0, N.jsx)("a", {
              href: t,
              className: n,
              target: o,
              children: l
            })
          }) : (0, N.jsx)(C.Af, {
            className: n,
            onClick: i,
            to: t,
            children: l
          })
        },
        da = e => {
          let {
            buttonText: a = "Subscribe",
            className: t,
            children: c,
            platformsAndLinks: r = [],
            trackingType: i = "buy",
            trackingParent: o,
            target: d = null,
            trackingOId: l = null
          } = e;
          const [m, f] = (0, n.useState)(!1), {
            track: u
          } = (0, se.useGtmTrack)();
          return (0, N.jsxs)("div", {
            className: (0, G.classList)(oa.container, t),
            children: [(0, N.jsx)(aa.q.div, {
              className: oa.content,
              animate: m ? "open" : "close",
              variants: ca,
              children: c
            }), (0, N.jsxs)(aa.q.div, {
              onClick: () => {
                f(!m), m || u("select_platform" === i ? {
                  event: "select_platform",
                  event_action: "select_platform",
                  event_category: "cta",
                  event_label: o,
                  text: a?.toLowerCase() ?? "subscribe"
                } : "link_account" === i ? {
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
              className: oa.unexpandedButton,
              animate: m ? "open" : "closed",
              variants: ia,
              initial: !1,
              children: [(0, N.jsx)(aa.q.div, {
                className: oa.buttonText,
                "data-expanded": m,
                children: "string" == typeof a ? a : "Subscribe"
              }), (0, N.jsxs)(aa.q.div, {
                className: oa.expandedArea,
                animate: m ? "open" : "closed",
                variants: ra,
                initial: !1,
                children: [(0, N.jsx)("img", {
                  className: oa.closeButton,
                  onClick: () => f(!1),
                  onKeyDown: e => {
                    f(!1)
                  },
                  src: s(2428),
                  alt: "Close",
                  role: "button"
                }), (0, N.jsx)("div", {
                  className: oa.platformButtons,
                  children: r.length ? r.map((e => (0, N.jsx)(na, {
                    buttonText: e.buttonText ?? "",
                    link: e.href,
                    platform: e.platform,
                    onClick: () => (e => {
                      let {
                        href: a,
                        platform: s
                      } = e;
                      u({
                        element_placement: o,
                        event: "cta_store_link",
                        event_action: "store_link",
                        event_category: "cta",
                        event_label: "expanding platform button",
                        link_url: a,
                        text: s
                      })
                    })(e),
                    target: d
                  }, `${e.key}-${e.href}-${e.platform}`))) : ""
                })]
              })]
            })]
          })
        },
        la = {
          animateBox: "rockstargames-modules-core-feedbacke9374e74c542c1028a2068dfbd1e85a3",
          fadeArea: "rockstargames-modules-core-feedbacka63de5cdf9849ac45a0f6b4f7617cfa5",
          visible: "rockstargames-modules-core-feedbackd7458685114194d602f94e2581de0f08",
          barGrow: "rockstargames-modules-core-feedbackb0f4d843b626e3741c9dd38fcb3f56b0",
          bar: "rockstargames-modules-core-feedbacka4b99f54f3ce3987765143d8a151360a",
          animateMe: "rockstargames-modules-core-feedbackf9c3869a2a1e10490bdfbcb3ee89d7da"
        },
        ma = e => {
          let {
            children: a,
            style: s
          } = e;
          const t = (0, n.useRef)(null);
          return (0, n.useEffect)((() => {
            new IntersectionObserver((e => {
              e.forEach((e => {
                e.isIntersecting && e.target.classList.add([la.visible])
              }))
            })).observe(t?.current)
          }), []), (0, N.jsx)("div", {
            style: s,
            className: [la.fadeArea].join(" "),
            ref: t,
            children: a
          })
        },
        fa = {
          img: "rockstargames-modules-core-feedbacke3f505a2281df28eb1acdf2d586e7fbd",
          startAnimation: "rockstargames-modules-core-feedbacka27e4d6733cea4a38e469425ef32ed3a"
        },
        ua = e => {
          let {
            imgSrc: a,
            title: s
          } = e;
          const [t] = (0, ae.usePreloadImg)(a);
          return (0, N.jsx)("div", {
            role: "img",
            "aria-label": s,
            className: [fa.img, t ? fa.startAnimation : ""].join(" "),
            style: {
              backgroundImage: `url(${a})`
            }
          })
        },
        ga = e => {
          let {
            game: a,
            to: s
          } = e;
          const {
            fob_640: t,
            site_in_rockstar: c = !1,
            title_slug: r
          } = a;
          let i = r;
          "V" === r && (i = "gta-v"), "GTAOnline" === r && (i = "gta-online"), "undeadnightmare" === r && (i = "reddeadredemption");
          const o = s ?? `${c?"":"/games"}/${i}`;
          return (0, N.jsx)(T, {
            "data-gtm-category": "Games",
            "data-gtm-action": "Game Click-through",
            "data-gtm-label": r,
            "data-testid": `${r}-gamecard`,
            to: o,
            target: "_self",
            className: "rockstargames-modules-core-feedbackfded54fb94f7325c5a0b57590585b175",
            children: (0, N.jsx)(ua, {
              imgSrc: t,
              title: a.title
            })
          })
        },
        ka = {
          gameSiteHeader: "rockstargames-modules-core-feedbackcb7cada84679a7af263e1436675a518a",
          activeNavItem: "rockstargames-modules-core-feedbackaa4aa7ed96facb38ed09c72eededb418",
          navHidden: "rockstargames-modules-core-feedbackac1cb9d2005f287ed666d334f816f8c5",
          navContent: "rockstargames-modules-core-feedbacke5abd79468866e31fdad2780b169f687",
          headerNavOpen: "rockstargames-modules-core-feedbackb98508d0923c5bb442c15772fbad9764",
          headerLogo: "rockstargames-modules-core-feedbacke666ff4f0b91dfe78991244ac1a759a5",
          bg: "rockstargames-modules-core-feedbackcfc6fd456ca2f3e9db06f780f412660f"
        },
        ba = e => {
          let {
            buttonText: a = null,
            gameOverrideStyles: s,
            navLinks: t,
            cta: c = "",
            game: r
          } = e;
          const [i, o] = (0, n.useState)(!1), d = (0, E.useMutateState)(), {
            navHidden: l
          } = (0, E.useState)();
          return (0, n.useEffect)((() => {
            d({
              gameSiteNavOpen: i
            })
          }), [i]), (0, n.useEffect)((() => {
            const e = () => {
              o(!1)
            };
            return document.addEventListener("click", e), () => document.removeEventListener("click", e)
          }), []), (0, N.jsxs)("header", {
            "data-game": r,
            className: [ka.gameSiteHeader, i ? ka.headerNavOpen : "", l ? ka.navHidden : "", s.gameSiteHeader, i ? s.headerNavOpen : ""].join(" "),
            children: [(0, N.jsx)("button", {
              className: [ka.headerLogo, s.headerLogo].join(" "),
              onClick: e => {
                o(!i), e.nativeEvent.stopImmediatePropagation()
              },
              type: "button",
              "aria-label": "Open Game Site Nav",
              dangerouslySetInnerHTML: {
                __html: a
              }
            }), (0, N.jsx)("div", {
              className: ka.bg
            }), (0, N.jsx)("nav", {
              children: (0, N.jsx)("div", {
                className: ka.navContent,
                children: t
              })
            }), c]
          })
        };
      var _a = s(1403);
      class pa extends n.Component {
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
            className: "rockstargames-modules-core-feedbackf903c45f8ecc18bd55f702e202f3763a",
            children: [(0, N.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, N.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      const va = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return function(s) {
            return (0, N.jsx)(pa, {
              header: a,
              children: (0, N.jsx)(e, {
                ...s
              })
            })
          }
        },
        ha = e => {
          let {
            prevRef: a,
            nextRef: s,
            onNextClicked: t,
            onPrevClicked: c
          } = e;
          return (0, N.jsxs)("div", {
            className: "rockstargames-modules-core-feedbackd98f432655f19a842390597c4434db06",
            children: [(0, N.jsx)("div", {
              className: "rockstargames-modules-core-feedbackc06ca360ce11f2cef7baf8c5fba05a42",
              ref: a,
              onClick: c,
              "aria-label": "Previous",
              role: "button",
              tabIndex: 0,
              onKeyUp: () => {}
            }), (0, N.jsx)("div", {
              className: "rockstargames-modules-core-feedbacka4f98606cdef508fbd2e69c5564a92d8",
              ref: s,
              onClick: t,
              "aria-label": "Next",
              role: "button",
              tabIndex: 0,
              onKeyUp: () => {}
            })]
          })
        },
        xa = va((e => {
          let {
            description: a,
            slideChildren: s,
            size: t,
            title: c,
            customSlidesPerView: r = null,
            customSpaceBetween: i = null,
            slideClass: o,
            style: d,
            className: l,
            cardSizeBreakpoints: m = {},
            customAspectRatio: f,
            titleBadge: u
          } = e;
          const {
            track: g
          } = (0, se.useGtmTrack)(), k = (0, n.useRef)(null), b = (0, n.useRef)(null), _ = (0, n.useRef)(null), [p, v] = (0, n.useState)(null), [h, x] = (0, n.useState)(!1), [y, j] = (0, n.useState)(null), [w, S] = (0, n.useState)({}), [C, I] = (0, n.useState)(), {
            ref: T,
            inView: M
          } = (0, oe.cD)({
            threshold: .6
          }), [L, E] = (0, n.useState)(!1), [B, z] = (0, n.useState)(null), [P, $] = (0, n.useState)(!1);
          (0, n.useEffect)((() => {
            const e = () => {
              $(window.innerWidth < 1024)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []);
          const V = {
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
          (0, n.useEffect)((() => {
            if (!k.current) return;
            const e = () => {
              if (k.current) {
                const e = r || Number(window.getComputedStyle(k.current).getPropertyValue("--slides-per-view")),
                  a = r ? 1 : Number(window.getComputedStyle(k.current).getPropertyValue("--slides-per-view-multiplier"));
                j(e * a)
              }
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [k, r]), (0, n.useEffect)((() => {
            if (!s) return;
            let e = !1;
            s.forEach((a => {
              "cover-card" === a?.props?.tina?.payload?.meta?.type && (e = !0, z(a))
            })), E(e);
            const a = s.map(((e, a) => "cover-card" === e?.props?.tina?.payload?.meta?.type && P ? null : (0, N.jsx)(K.Ky, {
              className: "rockstargames-modules-core-feedbackf58e79e329504e170dc9cb4595ea011b",
              onFocus: () => A(a),
              children: e
            }, Symbol(a).toString())));
            v(a)
          }), [s, P]), (0, n.useEffect)((() => {
            I({
              nextEl: _.current,
              prevEl: b.current
            })
          }), [_, b]), (0, n.useEffect)((() => {
            M && !h && s && (g({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: `deck - ${c}`.toLowerCase(),
              element_placement: `deck - ${c}`.toLowerCase()
            }), x(!0))
          }), [M, s]);
          let D = "custom" === t ? {
            "--custom-aspect-ratio": f,
            ...d
          } : {
            ...d
          };
          const A = e => {
            w.slideTo(e)
          };
          return (0, N.jsxs)("div", {
            className: (0, G.classList)("rockstargames-modules-core-feedbackd0c3d91603036c852633939015a6cb48", l),
            "data-size": t,
            "data-sm": m?.sm ? m?.sm : t,
            "data-md": m?.md ? m?.md : t,
            "data-lg": m?.lg ? m?.lg : t,
            "data-xl": m?.xl ? m?.xl : t,
            "data-xxl": m?.xxl ? m?.xxl : t,
            "data-has-covercard": L,
            ref: k,
            style: D,
            children: [(0, N.jsx)("div", {
              className: "rockstargames-modules-core-feedbackddeb75a59ed783554b94e8298897a1fa",
              ref: T
            }), L && P && (0, N.jsx)("div", {
              className: "rockstargames-modules-core-feedbackd5f00d41fdd2c864a0eb9e069cf08db0",
              children: B
            }), (0, N.jsx)("div", {
              className: "rockstargames-modules-core-feedbackcdc60dbde3f8db6f466aba8a3e19fa96",
              children: (0, N.jsxs)("div", {
                className: "rockstargames-modules-core-feedbackfb8e207418c783fc2f53b44c19faedca",
                children: [(0, N.jsxs)("div", {
                  className: "rockstargames-modules-core-feedbackb779ba2045a88302079083935c90f7b3",
                  children: [!L && c && (0, N.jsxs)("div", {
                    className: "rockstargames-modules-core-feedbackedf90c7c5ee1c79049f5a6442f14c949",
                    children: [(0, N.jsx)("h2", {
                      children: c
                    }), u && (0, N.jsx)("span", {
                      className: "rockstargames-modules-core-feedbackd7a4aaeb70d68fdee39312192efb990b",
                      children: u
                    })]
                  }), (0, N.jsx)(ha, {
                    prevRef: b,
                    nextRef: _,
                    onNextClicked: () => {},
                    onPrevClicked: () => {}
                  })]
                }), a && (0, N.jsx)("div", {
                  className: "rockstargames-modules-core-feedbacka1007d13e3a321bb18b5fc667025d545",
                  dangerouslySetInnerHTML: {
                    __html: a
                  }
                })]
              })
            }), y ? (0, N.jsx)(K.wx, {
              slidesPerView: y,
              onInit: e => {
                S(e)
              },
              grabCursor: !0,
              navigation: C,
              modules: [_a._2],
              breakpoints: V,
              slideClass: (0, G.classList)("swiper-slide", o),
              onSlideNextTransitionEnd: () => {
                g({
                  event_action: "next",
                  event_category: "carousel",
                  event: "carousel_next",
                  event_label: c?.toLowerCase() ?? ""
                })
              },
              onSlidePrevTransitionEnd: () => {
                g({
                  event_action: "previous",
                  event_category: "carousel",
                  event: "carousel_previous",
                  event_label: c?.toLowerCase() ?? ""
                })
              },
              onSlideChangeTransitionEnd: () => {
                g({
                  event_action: "swipe",
                  event_category: "carousel",
                  event: "carousel_swipe",
                  event_label: c?.toLowerCase() ?? ""
                })
              },
              children: p
            }) : ""]
          })
        }), null),
        ya = {
          pillBtn: "rockstargames-modules-core-feedbackd008b074498ad02717806cc094b8a780",
          selected: "rockstargames-modules-core-feedbackbe9a2e37ec59e339b0d72cd8e5256703",
          hero: "rockstargames-modules-core-feedbackd1346f9b98fbaac26948e361bd98b4c6",
          images: "rockstargames-modules-core-feedbackc9c078a3102a96b26f1bf1f98306384f",
          background: "rockstargames-modules-core-feedbacka271224ca2caf56b470059cdb98d9a42",
          gradient: "rockstargames-modules-core-feedbackae257e9d159ae9bd7c8685e38ba16f59",
          layered: "rockstargames-modules-core-feedbackf663886f051e47ea04f097c85ae6625b",
          content: "rockstargames-modules-core-feedbackf9c204f451f3a53bcc307c00eb5f907f",
          descriptions: "rockstargames-modules-core-feedbackd1bbf288f3fe6c79e658764847d2890a",
          buttonGroup: "rockstargames-modules-core-feedbackfb373367ffd03ba01edaf671175244ab",
          legalText: "rockstargames-modules-core-feedbackf625ffdd1b33a1642aa0dec12efe7897",
          shardsCarousel: "rockstargames-modules-core-feedbacke999b9cecfe233bcee8cab8682fb96bf"
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
        wa = e => {
          let {
            title: a = "",
            mobileImg: s,
            desktopImg: t
          } = e;
          const c = (0, G.useGetCdnSource)(s ?? null),
            r = (0, G.useGetCdnSource)(t ?? c);
          return (0, N.jsx)("div", {
            className: ya.shard,
            style: {
              "--background-image-mobile": `url(${c})`,
              "--background-image-desktop": `url(${r})`
            },
            children: (0, N.jsx)("h5", {
              children: a
            })
          })
        },
        Sa = e => {
          let {
            title: a = "Membership Rewards",
            shards: s
          } = e;
          const [t, c] = (0, n.useState)(null);
          return (0, n.useEffect)((() => {
            s && c(s.reduce(((e, a) => {
              if (!a?.shardImg) return e;
              const {
                title: s,
                shardImg: t
              } = a, {
                mobile: c,
                desktop: r
              } = t;
              return e.push((0, N.jsx)(wa, {
                title: s,
                mobileImg: c?.full_src,
                desktopImg: r?.full_src
              })), e
            }), []))
          }), [s]), t ? (0, N.jsx)("div", {
            className: ya.shardsCarousel,
            children: (0, N.jsx)(xa, {
              title: a,
              slideChildren: t,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        Ca = e => {
          let {
            animated: a = !1,
            ctas: s = [],
            description: t,
            expandingButtonLabel: c = "Subscribe",
            title: r
          } = e;
          const [i, o] = (0, n.useState)([]), [d, l] = (0, n.useState)([]);
          return (0, n.useEffect)((() => {
            o(s.reduce(((e, a) => a.isInExpandingButton ? (e.push({
              href: a.href,
              platform: a.platform,
              buttonText: a.buttonText
            }), e) : e), [])), l(s.reduce(((e, a) => (a.isInExpandingButton || e.push({
              icon: a.platform ? a.platform : "",
              title: a.buttonText,
              to: a.href
            }), e)), []))
          }), s), s.length ? i.length ? (0, N.jsx)(aa.q.div, {
            variants: a ? ja : void 0,
            children: (0, N.jsxs)(da, {
              buttonText: c,
              platformsAndLinks: i,
              children: [(0, N.jsxs)(aa.q.div, {
                className: ya.descriptions,
                variants: a ? ja : void 0,
                children: [(0, N.jsx)("h2", {
                  dangerouslySetInnerHTML: {
                    __html: r
                  }
                }), (0, N.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: t
                  }
                })]
              }), !!d && !!d.length && (0, N.jsx)(aa.q.div, {
                variants: ja,
                children: (0, N.jsx)(X, {
                  buttons: d,
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
                  __html: t
                }
              })]
            }), !!d && !!d.length && (0, N.jsx)(aa.q.div, {
              variants: ja,
              children: (0, N.jsx)(X, {
                buttons: d,
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
                __html: t
              }
            })]
          })
        },
        Ia = e => {
          let {
            animated: a = !1,
            brands: s = [],
            ctas: t = [],
            description: c = "",
            expandingButtonLabel: r = "Subscribe",
            title: i = "",
            legalText: o
          } = e;
          return (0, N.jsxs)(aa.q.div, {
            className: ya.content,
            initial: "hidden",
            animate: "visible",
            variants: a ? Na : void 0,
            children: [(0, N.jsx)(aa.q.div, {
              variants: a ? ja : void 0,
              children: (0, N.jsx)(O, {
                brands: s
              })
            }), (0, N.jsx)(Ca, {
              animated: a,
              ctas: t,
              description: c,
              expandingButtonLabel: r,
              title: i
            }), o && (0, N.jsx)(aa.q.div, {
              className: ya.legalText,
              variants: a ? ja : void 0,
              children: (0, N.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: o
                }
              })
            })]
          })
        },
        Ta = e => {
          let {
            animated: a = !1,
            backgroundImage: s,
            brands: t = [],
            className: c,
            ctas: r = [],
            description: i = "",
            expandingButtonLabel: o = "Subscribe",
            layeredImage: n,
            layeredImageSettings: d,
            legalText: l,
            shardsSection: m = {},
            theme: f = "gen9",
            title: u = ""
          } = e;
          const g = (e => {
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
                const [t, c] = e;
                if (s.has(t)) {
                  const e = s.get(t);
                  Object.entries(c).forEach((c => {
                    const [r, i] = c;
                    if (s.has(t) && s.has(r)) {
                      const t = `${s.get(r)}${e}`;
                      a[t] = "imageWidth" !== r ? i ? `${i}px` : "0px" : i ? `${i}vw` : "100vw"
                    }
                  }))
                }
              })), a
            })(d),
            k = (0, G.useGetCdnSource)(s?.mobile?.full_src ?? null),
            b = (0, G.useGetCdnSource)(s?.desktop?.full_src ?? k),
            _ = (0, G.useGetCdnSource)(n?.mobile?.full_src ?? null),
            p = (0, G.useGetCdnSource)(n?.desktop?.full_src ?? _);
          return (0, N.jsxs)(aa.q.div, {
            className: (0, G.classList)(ya.hero, c),
            style: {
              "--background-image-desktop": `url(${b})`,
              "--background-image-mobile": `url(${k})`,
              "--layered-image-desktop": `url(${p})`,
              "--layered-image-mobile": `url(${_})`
            },
            initial: "hidden",
            animate: "visible",
            variants: a ? Na : void 0,
            "data-type": "hero",
            theme: f,
            children: [(0, N.jsxs)("div", {
              className: ya.images,
              children: [b && k ? (0, N.jsx)("div", {
                className: ya.background,
                style: s?.style ?? {}
              }) : "", _ && p ? (0, N.jsx)("div", {
                className: ya.layered,
                style: d ? g : {}
              }) : "", (0, N.jsx)("div", {
                className: ya.gradient
              })]
            }), (0, N.jsx)(Ia, {
              animated: a,
              ctas: r,
              description: i,
              expandingButtonLabel: o,
              title: u,
              brands: t,
              legalText: l
            }), m?.shards && (0, N.jsx)(Sa, {
              ...m
            })]
          })
        };
      var Ma = s(9784),
        La = s.n(Ma);
      const Ea = e => {
        let {
          children: a,
          attributes: s = {},
          className: t = "",
          style: c = {}
        } = e;
        return (0, N.jsx)("span", {
          className: (0, G.classList)(t, s?.className, "rockstargames-modules-core-feedbacka7f106a8036d74ed9282a741476c6b5a"),
          style: (0, ae.safeStyles)(c ?? s?.style ?? {}),
          dangerouslySetInnerHTML: {
            __html: La().unescape(a)
          }
        })
      };
      var Ba = s(9088);
      const za = JSON.parse('{"us":{"aria_label_open_new_window":"(Opens in a new window)","plm_nav_scroll_left":"Scroll Left","plm_nav_scroll_right":"Scroll Right","language_selector_default":"Select a Language","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","sc_link_account":"Account","sc_link_activity_feed":"Activity Feed","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell My Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_messages":"Messages","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Toggle Social Club Menu","rp_icon":"RP Category","components_track_list_title":"Tracklist","disabled_label":"Disabled","next_button_label":"Next video page","previous_button_label":"Previous video page"},"de":{"aria_label_open_new_window":"(Öffnet ein neues Fenster)","plm_nav_scroll_left":"Links scrollen","plm_nav_scroll_right":"Rechts scrollen","language_selector_default":"Eine Sprache auswählen","profile_selector_mugshot":"Verbrecherfoto von {userName}","profile_selector_profile_card":"Profildaten","profile_selector_rp_icon":"RP-Kategorie","profile_selector_switch_character":"Charakter wechseln","sc_link_account":"Konto","sc_link_activity_feed":"Aktivitäten-Feed","sc_link_cookies_policy":"Cookie-Richtlinie","sc_link_cookies_settings":"Cookie-Einstellungen","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Meine Informationen nicht verkaufen","sc_link_find_friends":"Freunde finden","sc_link_friends":"Freunde","sc_link_game_activation":"Spielaktivierung","sc_link_help":"Hilfe","sc_link_import_friends":"Freunde importieren","sc_link_join_social_club":"Registrieren","sc_link_legal":"Rechtliches","sc_link_log_out":"Abmelden","sc_link_messages":"Nachrichten","sc_link_my_friends":"Meine Freunde","sc_link_notifications":"Benachrichtigungen","sc_link_privacy_policy":"Datenschutzrichtlinien","sc_link_settings":"Einstellungen","sc_link_sign_in":"Anmelden","sc_link_support":"Support","sc_link_view_my_profile":"Mein Profil ansehen","sc_menu_drag_handle":"Menü öffnen bzw. schließen","sc_menu_toggle":"Social-Club-Menü öffnen bzw. schließen","components_track_list_title":"Trackliste","disabled_label":"Deaktiviert","next_button_label":"Nächste Videoseite","previous_button_label":"Vorherige Videoseite"},"es":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","plm_nav_scroll_left":"Desplazar hacia la izquierda","plm_nav_scroll_right":"Desplazar hacia la derecha","language_selector_default":"Selecciona un idioma","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta de perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Ajustes de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendáis mis datos","sc_link_find_friends":"Buscar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación del juego","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registrarse","sc_link_legal":"Aviso legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Ajustes","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Asistencia técnica","sc_link_view_my_profile":"Ver mi perfil","sc_menu_drag_handle":"Arrastrar el controlador del menú","sc_menu_toggle":"Cambiar el menú del Social Club","components_track_list_title":"Lista de pistas","disabled_label":"Desactivado","next_button_label":"Página de vídeo siguiente","previous_button_label":"Página de vídeo anterior"},"mx":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","plm_nav_scroll_left":"Desplazarse hacia la izquierda","plm_nav_scroll_right":"Desplazarse hacia la derecha","language_selector_default":"Seleccionar un idioma","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta del perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Muro de actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configuración de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendan mis datos","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación de juegos","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registro","sc_link_legal":"Legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Configuración","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Soporte","sc_link_view_my_profile":"Ver mi perfil","sc_menu_drag_handle":"Mover el handle del menú","sc_menu_toggle":"Cambiar menú del Social Club","components_track_list_title":"Lista de canciones","disabled_label":"Desactivado","next_button_label":"Página de video siguiente","previous_button_label":"Página de video anterior"},"fr":{"aria_label_open_new_window":"(S’ouvre dans une nouvelle fenêtre)","plm_nav_scroll_left":"Faire défiler vers la gauche","plm_nav_scroll_right":"Faire défiler vers la droite","language_selector_default":"Sélectionner une langue","profile_selector_mugshot":"Photo d\'identité : {userName}","profile_selector_profile_card":"Carte du profil","profile_selector_rp_icon":"Catégorie de RP","profile_selector_switch_character":"Changer de personnage","sc_link_account":"Compte","sc_link_activity_feed":"Fil d\'activités","sc_link_cookies_policy":"Politique en matière de cookies","sc_link_cookies_settings":"Paramètres des cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Ne pas vendre mes informations","sc_link_find_friends":"Trouver des amis","sc_link_friends":"Amis","sc_link_game_activation":"Activation de jeux","sc_link_help":"Aide","sc_link_import_friends":"Importer des amis","sc_link_join_social_club":"S’inscrire","sc_link_legal":"Mentions légales","sc_link_log_out":"Se déconnecter","sc_link_messages":"Messages","sc_link_my_friends":"Mes amis","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Charte de confidentialité","sc_link_settings":"Paramètres","sc_link_sign_in":"Se connecter","sc_link_support":"Assistance","sc_link_view_my_profile":"Voir mon profil","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Afficher le menu du Social Club","components_track_list_title":"Liste des morceaux","disabled_label":"Désactivé","next_button_label":"Page vidéo suivante","previous_button_label":"Page vidéo précédente"},"it":{"aria_label_open_new_window":"(Apri in una nuova finestra)","plm_nav_scroll_left":"Scorri a sinistra","plm_nav_scroll_right":"Scorri a destra","language_selector_default":"Seleziona una lingua","profile_selector_mugshot":"Foto segnaletica di {userName}","profile_selector_profile_card":"Scheda del profilo","profile_selector_rp_icon":"Categoria RP","profile_selector_switch_character":"Cambia personaggio","sc_link_account":"Account","sc_link_activity_feed":"Feed attività","sc_link_cookies_policy":"Politica sui cookie","sc_link_cookies_settings":"Impostazioni dei cookie","sc_link_crews":"Crew","sc_link_do_not_sell_my_information":"Non vendere le mie informazioni","sc_link_find_friends":"Trova amici","sc_link_friends":"Amici","sc_link_game_activation":"Attivazione gioco","sc_link_help":"Assistenza","sc_link_import_friends":"Importa amici","sc_link_join_social_club":"Registrati","sc_link_legal":"Note legali","sc_link_log_out":"Esci","sc_link_messages":"Messaggi","sc_link_my_friends":"I miei amici","sc_link_notifications":"Notifiche","sc_link_privacy_policy":"Politica sulla privacy","sc_link_settings":"Impostazioni","sc_link_sign_in":"Accedi","sc_link_support":"Supporto","sc_link_view_my_profile":"Visualizza il mio profilo","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Apri/chiudi il menu del Social Club","components_track_list_title":"Tracklist","disabled_label":"Disabilitato","next_button_label":"Pagina di video successiva","previous_button_label":"Pagina di video precedente"},"jp":{"aria_label_open_new_window":"(新しいウィンドウで開きます)","plm_nav_scroll_left":"左にスクロール","plm_nav_scroll_right":"右にスクロール","language_selector_default":"言語を選択","profile_selector_mugshot":"{ユーザーネーム}顔写真","profile_selector_profile_card":"プロフィールカード","profile_selector_rp_icon":"RPカテゴリー","profile_selector_switch_character":"キャラクター変更","sc_link_account":"アカウント","sc_link_activity_feed":"アクティビティフィード","sc_link_cookies_policy":"クッキーポリシー","sc_link_cookies_settings":"クッキー設定","sc_link_crews":"クルー","sc_link_do_not_sell_my_information":"個人情報を売らないでください","sc_link_find_friends":"フレンドを検索","sc_link_friends":"フレンド","sc_link_game_activation":"ゲームアクティベーション","sc_link_help":"ヘルプ","sc_link_import_friends":"フレンドをインポート","sc_link_join_social_club":"サインアップ","sc_link_legal":"利用規約","sc_link_log_out":"ログアウト","sc_link_messages":"メッセージ","sc_link_my_friends":"フレンド","sc_link_notifications":"通知","sc_link_privacy_policy":"プライバシーポリシー","sc_link_settings":"設定","sc_link_sign_in":"サインイン","sc_link_support":"サポート","sc_link_view_my_profile":"プロフィールを表示","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Social Clubメニューを切り替え","components_track_list_title":"トラックリスト","disabled_label":"無効","next_button_label":"次のビデオページ","previous_button_label":"前のビデオページ"},"kr":{"aria_label_open_new_window":"(새 창에서 열기)","plm_nav_scroll_left":"왼쪽 스크롤","plm_nav_scroll_right":"오른쪽 스크롤","language_selector_default":"언어 선택","profile_selector_mugshot":"{userName} 머그샷","profile_selector_profile_card":"프로필 카드","profile_selector_rp_icon":"RP 카테고리","profile_selector_switch_character":"캐릭터 교체","sc_link_account":"계정","sc_link_activity_feed":"활동 피드","sc_link_cookies_policy":"쿠키 정책","sc_link_cookies_settings":"쿠키 설정","sc_link_crews":"조직","sc_link_do_not_sell_my_information":"내 정보 판매 안 함","sc_link_find_friends":"친구 찾기","sc_link_friends":"친구","sc_link_game_activation":"게임 활성화","sc_link_help":"도움말","sc_link_import_friends":"친구 불러오기","sc_link_join_social_club":"가입","sc_link_legal":"법률 관련","sc_link_log_out":"로그아웃","sc_link_messages":"메시지","sc_link_my_friends":"내 친구","sc_link_notifications":"알림","sc_link_privacy_policy":"개인 정보 보호 정책","sc_link_settings":"설정","sc_link_sign_in":"로그인","sc_link_support":"지원","sc_link_view_my_profile":"내 프로필 보기","sc_menu_drag_handle":"드래그 메뉴 핸들","sc_menu_toggle":"Social Club 메뉴 켜기/끄기","components_track_list_title":"트랙리스트","disabled_label":"비활성화됨","next_button_label":"다음 비디오 페이지","previous_button_label":"이전 비디오 페이지"},"pl":{"aria_label_open_new_window":"(Otwórz w nowym oknie)","plm_nav_scroll_left":"Przesuń w lewo","plm_nav_scroll_right":"Przesuń w prawo","language_selector_default":"Wybierz język","profile_selector_mugshot":"Zdjęcie – {userName}","profile_selector_profile_card":"Karta profilu","profile_selector_rp_icon":"Poziom RP","profile_selector_switch_character":"Zmień postać","sc_link_account":"Konto","sc_link_activity_feed":"Zajęcia","sc_link_cookies_policy":"Polityka plików cookie","sc_link_cookies_settings":"Ustawienia plików cookie","sc_link_crews":"Ekipy","sc_link_do_not_sell_my_information":"Zabraniam sprzedaży moich danych","sc_link_find_friends":"Szukaj znajomych","sc_link_friends":"Znajomi","sc_link_game_activation":"Aktywacja gry","sc_link_help":"Pomoc","sc_link_import_friends":"Importuj znajomych","sc_link_join_social_club":"Zarejestruj się","sc_link_legal":"Informacje prawne","sc_link_log_out":"Wyloguj się","sc_link_messages":"Wiadomości","sc_link_my_friends":"Moi znajomi","sc_link_notifications":"Powiadomienia","sc_link_privacy_policy":"Polityka prywatności","sc_link_settings":"Ustawienia","sc_link_sign_in":"Zaloguj się","sc_link_support":"Wsparcie","sc_link_view_my_profile":"Przeglądaj profil","sc_menu_drag_handle":"Przeciągnij uchwyt menu","sc_menu_toggle":"Włącz lub wyłącz menu Social Club","components_track_list_title":"Lista utworów","disabled_label":"Wyłączone","next_button_label":"Następna strona z filmami","previous_button_label":"Poprzednia strona z filmami"},"br":{"aria_label_open_new_window":"(Abre em uma nova janela)","plm_nav_scroll_left":"Rolar para a esquerda","plm_nav_scroll_right":"Rolar para a direita","language_selector_default":"Selecione um idioma","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Cartão de perfil","profile_selector_rp_icon":"Categoria de RP","profile_selector_switch_character":"Alternar personagem","sc_link_account":"Conta","sc_link_activity_feed":"Feed de atividade","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configurações de cookies","sc_link_crews":"Comandos","sc_link_do_not_sell_my_information":"Não vendam a minha informação","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Ativação de jogos","sc_link_help":"Ajuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Inscrever-se","sc_link_legal":"Aviso legal","sc_link_log_out":"Sair","sc_link_messages":"Mensagens","sc_link_my_friends":"Meus amigos","sc_link_notifications":"Notificações","sc_link_privacy_policy":"Política de Privacidade","sc_link_settings":"Configurações","sc_link_sign_in":"Iniciar sessão","sc_link_support":"Suporte","sc_link_view_my_profile":"Visualizar meu perfil","sc_menu_drag_handle":"Arrastar título do menu","sc_menu_toggle":"Alternar menu do Social Club","components_track_list_title":"Lista de faixas","disabled_label":"Desabilitado","next_button_label":"Próxima página de vídeos","previous_button_label":"Página anterior de vídeos"},"ru":{"aria_label_open_new_window":"(ссылка откроется в новом окне)","plm_nav_scroll_left":"Пролистать влево","plm_nav_scroll_right":"Пролистать вправо","language_selector_default":"Выбрать язык","profile_selector_mugshot":"Фотография игрока {userName}","profile_selector_profile_card":"Карта профиля","profile_selector_rp_icon":"Категория опыта","profile_selector_switch_character":"Сменить персонажа","sc_link_account":"Учетная запись","sc_link_activity_feed":"Лента событий","sc_link_cookies_policy":"Политика использования файлов Cookie","sc_link_cookies_settings":"Настройки файлов Cookie","sc_link_crews":"Банды","sc_link_do_not_sell_my_information":"Я запрещаю продавать свою личную информацию","sc_link_find_friends":"Поиск друзей","sc_link_friends":"Друзья","sc_link_game_activation":"Активация игры","sc_link_help":"Помощь","sc_link_import_friends":"Импорт друзей","sc_link_join_social_club":"Регистрация","sc_link_legal":"Юридическая информация","sc_link_log_out":"Выход","sc_link_messages":"Сообщения","sc_link_my_friends":"Мои друзья","sc_link_notifications":"Уведомления","sc_link_privacy_policy":"Политика конфиденциальности","sc_link_settings":"Настройки","sc_link_sign_in":"Войти","sc_link_support":"Поддержка","sc_link_view_my_profile":"Моя учетная запись","sc_menu_drag_handle":"Перенести маркер меню","sc_menu_toggle":"Переключить меню Social Club","components_track_list_title":"Список песен","disabled_label":"Отключено","next_button_label":"Следующая страница с видео","previous_button_label":"Предыдущая страница с видео"},"hans":{"aria_label_open_new_window":"（在新窗口中打开）","plm_nav_scroll_left":"向左滚动","plm_nav_scroll_right":"向右滚动","language_selector_default":"选择一种语言","profile_selector_mugshot":"{userName} 面部照片","profile_selector_profile_card":"档案卡","profile_selector_rp_icon":"声望值类别","profile_selector_switch_character":"切换角色","sc_link_account":"账户","sc_link_activity_feed":"活动动态","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 设置","sc_link_crews":"帮会","sc_link_do_not_sell_my_information":"请勿出售我的信息","sc_link_find_friends":"查找好友","sc_link_friends":"好友","sc_link_game_activation":"游戏激活","sc_link_help":"帮助","sc_link_import_friends":"导入好友","sc_link_join_social_club":"注册","sc_link_legal":"法律声明","sc_link_log_out":"登出","sc_link_messages":"信息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隐私政策","sc_link_settings":"设置","sc_link_sign_in":"登录","sc_link_support":"支持","sc_link_view_my_profile":"查看我的档案","sc_menu_drag_handle":"拖动菜单处理","sc_menu_toggle":"切换 Social Club 菜单","components_track_list_title":"曲目列表","disabled_label":"已禁用","next_button_label":"下一页视频","previous_button_label":"上一页视频"},"tw":{"aria_label_open_new_window":"（在新視窗開啟）","plm_nav_scroll_left":"向左捲動","plm_nav_scroll_right":"向右捲動","language_selector_default":"選擇語言","profile_selector_mugshot":"{userName} 罪犯檔案照","profile_selector_profile_card":"資料卡","profile_selector_rp_icon":"聲望值類別","profile_selector_switch_character":"切換角色","sc_link_account":"帳戶","sc_link_activity_feed":"動態活動","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 設定","sc_link_crews":"幫會","sc_link_do_not_sell_my_information":"不要販售我的個人資料","sc_link_find_friends":"尋找好友","sc_link_friends":"好友","sc_link_game_activation":"遊戲啟用","sc_link_help":"幫助","sc_link_import_friends":"匯入好友","sc_link_join_social_club":"註冊","sc_link_legal":"法律聲明","sc_link_log_out":"登出","sc_link_messages":"訊息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隱私權政策","sc_link_settings":"設定","sc_link_sign_in":"登入","sc_link_support":"支援","sc_link_view_my_profile":"查看我的設定檔","sc_menu_drag_handle":"拖曳選單控點","sc_menu_toggle":"開關 Social Club 選單","components_track_list_title":"曲目清單","disabled_label":"停用","next_button_label":"下一個影片頁面","previous_button_label":"上一個影片頁面"}}'),
        Pa = (0, d.Os)({
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          }
        }),
        $a = {
          pillBtn: "rockstargames-modules-core-feedbackcb792ef8796eaa09f8b5c1ee0230fcd7",
          selected: "rockstargames-modules-core-feedbackc951b9f5173e8a37be389854c40995ee",
          scMenuStyles: "rockstargames-modules-core-feedbackfa91a55e22ad688cba0bc1210eaf4726",
          languageSelector: "rockstargames-modules-core-feedbackb631f2ce92e4a89f8eddebd32e8ed30a",
          open: "rockstargames-modules-core-feedbackedc598921a872174190475d0ad016d15",
          linkWrapper: "rockstargames-modules-core-feedbackc4b7087d1fcbaad6967e61b84160ff79",
          links: "rockstargames-modules-core-feedbackc7d345d5c7e567e0ee75b792d5bdfb88",
          selectBoxWrapper: "rockstargames-modules-core-feedbacke3e55a10507405de05ae92006ec0d02b",
          selectBox: "rockstargames-modules-core-feedbackc646a2bff16ec3003b027857488cd612",
          selectBoxOption: "rockstargames-modules-core-feedbackbcccd1077d13d7fe1585655e5c5f8363"
        },
        Va = w((e => {
          let {
            theme: a,
            languageSelectorOpened: s,
            setLanguageSelectorOpened: t
          } = e;
          const c = (0, Ba.IT)(),
            r = (0, m.c)(),
            [i, o] = y(),
            [d, f] = (0, n.useState)(!1),
            g = (0, n.useMemo)((() => b()), []),
            k = (0, n.useCallback)((e => {
              let a = c.pathname;
              const s = a.split("/");
              return h.map((e => e.subdomaincom)).includes(s[0]) && (a = s.slice(1).join("/")), g.currentSite?.site === u ? "en" === e ? `${window.location.origin}${a}${c.search}` : `${window.location.origin}/${e}${a}${c.search}` : `${window.location.origin}${a}${c.search}`
            }), [c]),
            _ = (0, n.useRef)(null),
            [p, v] = (0, n.useState)(0),
            x = matchMedia("(hover: none) and (pointer: coarse)").matches,
            j = e => {
              if (t && t(!1), i.subdomaincom === e || "none" === e) return void(t && t(!1));
              const a = h.find((a => a.subdomaincom === e));
              a && (o(a.iso), window.location.href = k(e))
            };
          return (0, n.useEffect)((() => {
            void 0 !== s && !1 === s && !0 === d && f(!1)
          }), [s]), (0, n.useEffect)((() => {
            _.current && v(_.current.scrollHeight)
          }), [_]), (0, N.jsxs)("div", {
            className: [$a.languageSelector, d ? $a.open : ""].join(" "),
            "data-theme": a,
            children: [x && "sc-menu" === a && (0, N.jsx)("div", {
              className: $a.selectBoxWrapper,
              children: (0, N.jsxs)("select", {
                className: $a.selectBox,
                onClick: e => e.stopPropagation(),
                onChange: e => {
                  j(e.currentTarget.value)
                },
                "aria-label": r.formatMessage(Pa.language_selector_default),
                children: [(0, N.jsx)("option", {
                  className: $a.selectBoxOption,
                  value: "none",
                  children: (0, N.jsx)(l.c, {
                    ...Pa.language_selector_default
                  })
                }), h.map((e => {
                  let {
                    label: a,
                    subdomaincom: s
                  } = e;
                  return (0, N.jsx)("option", {
                    className: $a.selectBoxOption,
                    value: s,
                    children: a
                  }, `mobile-${s}`)
                }))]
              })
            }), (!x || "sc-menu" !== a) && (0, N.jsxs)(N.Fragment, {
              children: [(0, N.jsxs)("button", {
                onClick: e => {
                  e.stopPropagation(), t && t(!d), f(!d)
                },
                type: "button",
                "aria-label": r.formatMessage(Pa.language_selector_default),
                children: [(0, N.jsx)("i", {}), (0, N.jsx)("span", {
                  children: (0, N.jsx)(l.c, {
                    ...Pa.language_selector_default
                  })
                })]
              }), (0, N.jsx)("div", {
                className: $a.linkWrapper,
                ref: _,
                style: {
                  "--ls-linkWrapper-opened-height": `${p}px`
                },
                children: (0, N.jsx)("div", {
                  className: $a.links,
                  children: h.map((e => {
                    let {
                      subdomaincom: a,
                      label: s
                    } = e;
                    return (0, N.jsx)(T, {
                      to: k(a),
                      onClick: () => {
                        j(a)
                      },
                      tabIndex: d ? 0 : -1,
                      children: s
                    }, `desktop-${a}`)
                  }))
                })
              })]
            })]
          })
        }), za),
        Da = {
          layeredImage: "rockstargames-modules-core-feedbacka29c233d553c5905763bb69412c1ece4",
          layersWrapper: "rockstargames-modules-core-feedbackaabf78eb3e1fe545556ad0fa5639296e",
          "hero-lg": "rockstargames-modules-core-feedbackca666917bdeaed43fd0a7af7dc30a0f7",
          "hero-md": "rockstargames-modules-core-feedbackf0a202fcbf13f1e91157e531ae829ea3",
          "hero-sm": "rockstargames-modules-core-feedbacke03dbf5d16aeab81ca65f4cb7e64446f",
          contain: "rockstargames-modules-core-feedbackc4c3c929b11e88540e3f19d5715393ec",
          cover: "rockstargames-modules-core-feedbackb283d6381c82abf4dde21c57b8fc5f66",
          fill: "rockstargames-modules-core-feedbacke9d16b94c1ed476c9346cb6f48f5ad3e",
          "bg-img": "rockstargames-modules-core-feedbacke45fabf9c4e04bf3ee27e9c84c50c09b",
          imageLayer: "rockstargames-modules-core-feedbacked8d0ad18a62f087629ff5831fa0ac55",
          "layer-lg-height": "rockstargames-modules-core-feedbackfaf1d5c6b2fe2ad27d4bb95ba7388f3d",
          "layer-md-height": "rockstargames-modules-core-feedbackb41041f11a5ef98325948acc3dec956c",
          "layer-sm-height": "rockstargames-modules-core-feedbackba7d5822aa073c9e01cd682d65c18944",
          "layer-xl-height": "rockstargames-modules-core-feedbackec2399a1f7e79e9aacba81b242ad0602",
          "layer-xs-height": "rockstargames-modules-core-feedbacka6ec38ac99c762fcf0dd99aa2ced8f2b",
          "layer-xxl-height": "rockstargames-modules-core-feedbackd7c1314e717273dfbb2acd3d5e06e585",
          "layer-lg-width": "rockstargames-modules-core-feedbackca0dd7a55a5db5ee358ce51a166e5431",
          "layer-md-width": "rockstargames-modules-core-feedbackbd4c246f4f0eaf7173d104ed1e7c2d06",
          "layer-sm-width": "rockstargames-modules-core-feedbackfe3f49cba9cc10e4e076a43a6b36b862",
          "layer-xl-width": "rockstargames-modules-core-feedbackbde3d6485ac7bb483dcca1ad4e2bbe67",
          "layer-xs-width": "rockstargames-modules-core-feedbackb87efd95b330cacd4a5eaecf83528f4d",
          "layer-xxl-width": "rockstargames-modules-core-feedbackac872df7985f9d591c85f97c72d451dc",
          "bottom-y": "rockstargames-modules-core-feedbackd63fdb49c964c28c5e8952cd79a393a0",
          "center-x": "rockstargames-modules-core-feedbackd248443eb924360a5d1d7211094ea827",
          "center-y": "rockstargames-modules-core-feedbacka8d87c765a51d98f0e3a9afd149ed0dc",
          "left-x": "rockstargames-modules-core-feedbackdcaa6339b43850be2e14967cab730041",
          "right-x": "rockstargames-modules-core-feedbackb656d800e3d134bd3a7e273a5f6d7ae6",
          "top-y": "rockstargames-modules-core-feedbackadaf230f139f906eb912b58b315406ac",
          border: "rockstargames-modules-core-feedbackc73e199a8978fb80895753c9a38fcdff",
          shards: "rockstargames-modules-core-feedbacke650a715d6f220ad49bb568768154b0e",
          shards_three: "rockstargames-modules-core-feedbackb0c8be28788c6b23cea904bdc60d7e07",
          shards_two: "rockstargames-modules-core-feedbacke41252d3a0aee1d229f6bddc20c38d47",
          dual: "rockstargames-modules-core-feedbackdb575e1d021e69ebb4265a29484e2888"
        },
        Aa = e => {
          let {
            style: a,
            className: s
          } = e;
          const t = {
              ...a
            },
            c = a["--border-image-source"];
          return c && (t["--border-image-source"] = `url(${(0,G.useGetCdnSource)(c)})`), (0, N.jsx)("div", {
            className: (0, G.classList)(Da.border, s),
            style: {
              ...t
            }
          })
        },
        Oa = e => e?.images ? (0, N.jsx)("div", {
          className: (0, G.classList)(Da.layeredImage, Da[e?.variantClass], Da[e?.wrapperSizeClass]),
          style: {
            ...e?.style ?? {}
          },
          children: (0, N.jsxs)("div", {
            className: Da.layersWrapper,
            children: [e?.images?.map(((e, a) => {
              const {
                image: s,
                paddingClass: t,
                imageSizeClass: c,
                objectFitClass: r,
                positionClassX: i,
                positionClassY: o,
                zIndex: n,
                className: d,
                style: l,
                alt: m,
                displayClass: f
              } = e;
              return (0, N.jsx)(Me, {
                image: s,
                style: {
                  zIndex: n ?? ++a
                },
                imageStyle: l,
                className: (0, G.classList)(d, f, Da.imageLayer, Da[t], Da[c], Da[r], Da[i], Da[o]),
                alt: m
              }, n ?? ++a)
            })), e?.borderImage && (0, N.jsx)(Aa, {
              style: e?.borderImage,
              className: e?.borderImage?.displayClass
            })]
          })
        }) : null,
        Fa = e => {
          let {
            hero: a,
            children: s
          } = e;
          return a ? (0, N.jsx)("div", {
            className: "rockstargames-modules-core-feedbackefc561ad30f5dfe75c79d939737650dc",
            children: s
          }) : s
        },
        Ra = e => {
          let {
            badge: a = null,
            badgeType: s,
            discountTxt: t,
            splitter: c,
            image: r,
            style: i,
            className: o = "",
            attributes: n = {},
            role: d,
            hero: l = !1
          } = e;
          return (0, N.jsx)(Fa, {
            hero: l,
            children: (0, N.jsx)("figure", {
              children: (0, N.jsxs)("div", {
                className: (0, G.classList)("rockstargames-modules-core-feedbackcab262c98c7f5bb3e982d9b075b3c2a8", l ? "rockstargames-modules-core-feedbackcefd6d8859aeec1057caed28caa160c3" : "", n?.hiddenMobile ? "hiddenMobile" : "", n?.hiddenLarge ? "hiddenLarge" : "", n?.className, o),
                style: (0, ae.safeStyles)({
                  ...i,
                  ...n?.style
                }),
                ...n,
                children: [(0, N.jsx)(Me, {
                  image: r,
                  className: o
                }), (r?.badge || r?.discountTxt || a || t) && (0, N.jsx)(Ue, {
                  badge: r?.discountTxt ?? r?.badge ?? a ?? t,
                  badgeType: s,
                  splitter: r?.splitter ?? c,
                  role: r?.role ?? d
                }), r?.caption && (0, N.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: r.caption
                  }
                })]
              })
            })
          })
        },
        Ga = {
          pillBtn: "rockstargames-modules-core-feedbackeea0db67b0aabf28288b288845324afe",
          selected: "rockstargames-modules-core-feedbackd1d25362fd730ca979d5ad79de088f89",
          multiSourceContainer: "rockstargames-modules-core-feedbackdc538bbfc2f407ed9fe840097ccac819",
          multiSourceImage: "rockstargames-modules-core-feedbackee782a29692a8eb06db1287a4984c243",
          animatePlaceholder: "rockstargames-modules-core-feedbackfbd73f5f70c2ce64aa9c9bd398f1a3b5",
          "loader-keyframes": "rockstargames-modules-core-feedbackf6040b2ae96a9b0dcdb2d283c9caff59"
        },
        Ha = e => {
          let {
            imageUrl: a,
            className: s,
            alt: t,
            style: c,
            lazy: r = !1,
            decoding: i = "auto",
            sizes: o = [320, 480, 768, 1024, 1440, 1920, 2560]
          } = e;
          const [d, l] = (0, n.useState)(!1);
          return (0, N.jsxs)("div", {
            className: Ga.multiSourceContainer,
            children: [!d && (0, N.jsx)("img", {
              className: [s, Ga.animatePlaceholder].join(" "),
              src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjMzMzMzMzIi8+Cjwvc3ZnPgo=",
              sizes: "(max-width: 1024px) 100vw, 1024px",
              alt: "Loading...",
              style: c
            }), (0, N.jsx)("img", {
              className: [Ga.multiSourceImage, s].join(" "),
              src: `${a}?im=Resize=1920`,
              srcSet: (m = a, o.map((e => `${m}?im=Resize=${e} ${e}w`)).join(", ")),
              sizes: "(max-width: 400px) 200px, (max-width: 1920px) 100vw, 1920px",
              alt: t ?? "Multi-Source Image",
              style: c,
              onLoad: () => {
                l(!0)
              },
              loading: r ? "lazy" : "eager",
              decoding: i
            })]
          });
          var m
        },
        Ua = {
          tag: "rockstargames-modules-core-feedbacked77774d2704bc0ebc0ac156542ae053"
        },
        Wa = e => {
          let {
            className: a,
            href: s,
            title: t,
            style: c
          } = e;
          const r = (0, N.jsxs)("div", {
            style: c,
            className: [Ua.tag, a].join(" "),
            children: [(0, N.jsx)("i", {}), t]
          });
          return void 0 !== s ? (0, N.jsx)(T, {
            to: s,
            children: r
          }) : r
        },
        qa = {
          newswireBlock: "rockstargames-modules-core-feedbacka793f470884d207243d6c3caac8ad811",
          info: "rockstargames-modules-core-feedbackd50f6d2bc5f983c05311292acb4c78a5",
          title: "rockstargames-modules-core-feedbackcc389449dc1495fc9c323fc2c547857d",
          newswireBlockNoSpecialOrder: "rockstargames-modules-core-feedbackffd167124f27c8e26a147f49c88796e5",
          preview: "rockstargames-modules-core-feedbackbbfbcf32c8c892ea29f4178949643475",
          previewMobile: "rockstargames-modules-core-feedbackf88852766488b21a28c42d230ea529a1",
          top: "rockstargames-modules-core-feedbackfa1a6f4c7d94b94f5af2dc1ac9af79f1",
          startAnimation: "rockstargames-modules-core-feedbacke380e8c67066df6f33fc018341ea96e5"
        },
        Xa = e => {
          let {
            index: a,
            post: s,
            noSpecialOrder: t = !1,
            style: c = {}
          } = e;
          const [r] = (0, C.k5)(), i = s.preview_images_parsed.newswire_block, o = {
            default: 0 !== a || t ? i.square || i.d16x9 || i._fallback : i.d16x9 || i.square || i._fallback,
            mobile: i.square || i._fallback
          }, [n, d] = (0, ae.usePreloadImg)(o.default), [l, m] = (0, ae.usePreloadImg)(o.mobile), f = {
            default: {
              backgroundImage: `url(${o.default})`
            },
            mobile: {
              backgroundImage: `url(${o.mobile})`
            }
          };
          return (0, N.jsx)(T, {
            "data-gtm-category": "Newswire",
            "data-gtm-action": "Article Block Click",
            "data-gtm-label": `${s.title}`,
            to: s.url,
            className: [qa.newswireBlock, t ? qa.newswireBlockNoSpecialOrder : "", null !== n ? qa.startAnimation : ""].join(" "),
            children: (0, N.jsxs)(N.Fragment, {
              children: [0 !== a || r.get("tag_id") ? (0, N.jsx)("div", {
                className: qa.preview,
                style: f.default
              }) : (0, N.jsxs)(N.Fragment, {
                children: [(0, N.jsx)("div", {
                  className: qa.previewMobile,
                  style: f.mobile
                }), (0, N.jsx)("div", {
                  className: qa.preview,
                  style: f.default
                })]
              }), (0, N.jsxs)("div", {
                className: qa.info,
                children: [(0, N.jsxs)("div", {
                  className: qa.top,
                  children: [s.primary_tags.length ? (0, N.jsx)(Wa, {
                    title: s.primary_tags[s.primary_tags.length > 1 && 722 === s.primary_tags[0].id ? 1 : 0].name
                  }) : "", (0, N.jsx)("time", {
                    dateTime: s.created,
                    children: s.created_formatted
                  })]
                }), (0, N.jsx)("h5", {
                  className: qa.title,
                  dangerouslySetInnerHTML: {
                    __html: s.title
                  }
                })]
              })]
            })
          })
        };
      var Ka = s(5492),
        Ya = s.n(Ka);
      const Qa = (0, ae.withTranslations)((e => {
          let {
            relativeTo: a = "",
            tagId: s = null,
            metaUrl: t = "/newswire",
            t: c
          } = e;
          const [r] = (0, C.k5)(), {
            tagId: i = null
          } = (0, Ba.W4)(), [o, d] = (0, n.useState)(i ?? s ?? r.get("tag_id")), [l, m] = (0, n.useState)(1), [f, u] = (0, n.useState)([]), [g, k] = (0, n.useState)(null), {
            data: b
          } = (0, E.useQuery)(Ya(), {
            variables: {
              tagId: Number(o),
              page: l,
              metaUrl: t
            },
            autoSetLoading: !0
          });
          return (0, n.useEffect)((() => {
            m(1), u([]), d(i ?? s ?? r.get("tag_id"))
          }), [r.get("tag_id")]), (0, n.useEffect)((() => {
            b && b.posts && b.posts.paging && k(b.posts.paging), b && b.posts && b.posts.results && u(f.concat(b.posts.results))
          }), [b]), f.length ? (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsx)(as, {
              posts: f,
              relativeTo: a,
              noSpecialOrder: null !== o
            }), null !== g && g.nextPage ? (0, N.jsx)(R, {
              onClick: () => m(l + 1),
              disabled: !1,
              context: "secondary",
              children: c("More Stories")
            }) : ""]
          }) : null
        })),
        Za = {
          pillBtn: "rockstargames-modules-core-feedbackafd0af959edb4a463c41ad4e9cc5dadc",
          selected: "rockstargames-modules-core-feedbackbcd59aa4a9e88d86a2cbe8d4972f8f51",
          related: "rockstargames-modules-core-feedbacka748ad776070dab831edc1f67f66af08",
          posts: "rockstargames-modules-core-feedbackc0aa38678decd13ca38886b4547efedd",
          just1post: "rockstargames-modules-core-feedbackb1a31ddf7fd4458ee860d354a6a0ac92"
        },
        Ja = (0, ae.withTranslations)((e => {
          let {
            posts: a,
            t: s
          } = e;
          return (0, N.jsxs)("section", {
            className: Za.related,
            children: [(0, N.jsx)("h2", {
              children: s("Related Stories")
            }), (0, N.jsx)("div", {
              className: [Za.posts, 1 === a.length ? Za.just1post : ""].join(" "),
              children: a.map((e => (0, N.jsx)(Xa, {
                noSpecialOrder: !0,
                post: e
              }, e.id)))
            })]
          })
        })),
        es = {
          newswireBlocks: "rockstargames-modules-core-feedbackc2c8eedd25de7e186655f98b2a8d8960",
          noSpecialOrder: "rockstargames-modules-core-feedbackc0d0db9dfc71c9f4f959b9c017b1ae4b"
        },
        as = (0, ae.withGtmTracking)((e => {
          let {
            noSpecialOrder: a = !1,
            posts: s,
            gtmTrack: t,
            relativeTo: c
          } = e;
          return (0, n.useEffect)((() => {
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
          }), [s.length]), (0, N.jsx)("div", {
            className: [es.newswireBlocks, a ? es.noSpecialOrder : "", es.contextHome].join(" "),
            children: s.map(((e, s) => (0, N.jsx)(Xa, {
              index: s,
              noSpecialOrder: a,
              post: e
            }, e.id)))
          })
        })),
        ss = {
          pillBtn: "rockstargames-modules-core-feedbackf87ac9a7d56545847cf4d8ca471b03e6",
          selected: "rockstargames-modules-core-feedbacka8ea61e57fd58bfcb99aef7e6d687045",
          grid: "rockstargames-modules-core-feedbacka57241f29873f89f89ab8b27994e71c3",
          itemList: "rockstargames-modules-core-feedbackdaec3f5ce63d42cb07e3e724737c8361",
          gtaplus: "rockstargames-modules-core-feedbackbd78cfb71ed31029ba4279325166bfab",
          rdo: "rockstargames-modules-core-feedbacka6244398a800ffddab72c14f717b0eab",
          noImg: "rockstargames-modules-core-feedbacke88f741af7d5e0529ff4fb6bb82af04f",
          gtao: "rockstargames-modules-core-feedbackab60d91453348d2e4c090ef3ebb04347",
          custom: "rockstargames-modules-core-feedbackc20e7ba6ceaba3afd37095b172797711",
          yellow: "rockstargames-modules-core-feedbackb16672deedfe102b065925cbe0fb931c",
          hotPink: "rockstargames-modules-core-feedbackd0d01601de7131d9d6d11321b4299e59",
          red: "rockstargames-modules-core-feedbackd1b5397aff94d33b57674b04a3456e03",
          turquoise: "rockstargames-modules-core-feedbackd6541b973ce158c8f2fb81483015211f",
          purple: "rockstargames-modules-core-feedbackf3e34d902681219d4d8490eb164f7727",
          teal: "rockstargames-modules-core-feedbacka6c3b6b6a2395eb18a1174294f26f4ea",
          blue: "rockstargames-modules-core-feedbackeade6e843c5afd48d3a8959fb0b88222",
          green: "rockstargames-modules-core-feedbacka82c313f8f85fc6304ddb703be2fa271",
          darkRed: "rockstargames-modules-core-feedbackd394c61fdce2bf8894ffb801ee680c2a",
          darkBlue: "rockstargames-modules-core-feedbackf1d73cc00a3ab644aab949183a8298a7",
          goldenrod: "rockstargames-modules-core-feedbackcdcb0c5076309a329da2a6e857cc3bdf",
          skull: "rockstargames-modules-core-feedbackba4bd16bff2fbc40616457007b4a7442"
        },
        {
          sanitize: ts
        } = Ee(),
        cs = e => {
          let {
            list: a,
            string: s,
            starColor: t,
            style: c,
            className: r,
            game: i,
            noImg: o,
            columns: d,
            mobileColumns: l
          } = e;
          const [m, f] = (0, n.useState)(null);
          return (0, n.useEffect)((() => {
            f(a)
          }), [a]), s || a ? d && m ? (0, N.jsx)("div", {
            className: ss.grid,
            style: {
              "--ordered-list-grid-column": d,
              "--ordered-list-grid-column-mobile": l ?? d
            },
            children: (0, N.jsx)("ol", {
              style: (0, ae.safeStyles)(c),
              className: (0, G.classList)(ss.itemList, ss.noImg, ss[t], ss[i]),
              children: m.map((e => (0, N.jsx)("li", {
                dangerouslySetInnerHTML: {
                  __html: ts(e.content)
                }
              }, e.content)))
            })
          }) : (0, N.jsx)("ol", {
            style: (0, ae.safeStyles)(c),
            className: (0, G.classList)(ss.itemList, ss.custom, o ? ss.noImg : "", t ? ss[t] : "", i ? ss[i] : "", r ?? ""),
            children: a.map((e => (0, N.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: ts(e?.content ?? e)
              }
            }, e?.content)))
          }) : null
        },
        rs = (e, a) => {
          const s = e.tiers && e.tiers.every((e => e.isComplete)),
            t = a.tiers && a.tiers.every((e => e.isComplete));
          return s && !t ? 1 : !s && t ? -1 : 0
        },
        is = {
          pillBtn: "rockstargames-modules-core-feedbacke6891f053f06919f1ef0dc72cafe9ae7",
          selected: "rockstargames-modules-core-feedbacke5cce3088e494e8ddb9b0cf5528697a3",
          packCardTierIndicator: "rockstargames-modules-core-feedbackeee874b61946e2a65886d622445e1c38",
          tierIndicator: "rockstargames-modules-core-feedbackbf9ed66cb83cf9a38bfc6fbb8e105fb7",
          active: "rockstargames-modules-core-feedbackcfa711252c08391d3a0f1ecd8728a61a"
        },
        os = [{
          isComplete: !1
        }, {
          isComplete: !1
        }, {
          isComplete: !1
        }, {
          isComplete: !1
        }],
        ns = e => {
          let {
            tiers: a = os
          } = e;
          return (0, N.jsx)("div", {
            className: is.packCardTierIndicator,
            children: a?.map(((e, a) => (0, N.jsx)("div", {
              className: [is.tierIndicator, e.isComplete ? is.active : ""].join(" ")
            }, a)))
          })
        },
        ds = {
          pillBtn: "rockstargames-modules-core-feedbacke2e4b892ddcbdb2e09d3c3599a7e6c56",
          selected: "rockstargames-modules-core-feedbackff5c3c023fc12b68c6bf92b560c479b1",
          packCard: "rockstargames-modules-core-feedbackd6ef486c5f60d41c5662b092336c1f52",
          packCardImageBox: "rockstargames-modules-core-feedbackeb4637cb1c81d1def1fd92252f90d675",
          packCompleted: "rockstargames-modules-core-feedbackfcd5bbd0d1e3ebd45cf2cb372468e62c",
          packCardTextBox: "rockstargames-modules-core-feedbacka124ee1b0383d30157e84108cf10b83b",
          badge: "rockstargames-modules-core-feedbackd42fb1fd7d553d75675a251df2a255ee",
          icon: "rockstargames-modules-core-feedbackcbc69eda17393995ac9d41a8b4b531e8",
          label: "rockstargames-modules-core-feedbackd4649f3812d37e7407503d49dcaaba04"
        },
        ls = e => {
          let {
            title: a,
            url: s,
            imageUrl: t,
            className: c,
            tiers: r,
            onClick: i,
            badgeContent: o = "Complete",
            imageSize: d = 420,
            imageLoaded: l
          } = e;
          const [m, f] = (0, n.useState)(!1), [u, g] = (0, n.useState)(l);
          (0, n.useEffect)((() => {
            if (r) {
              const e = r.some((e => !e.isComplete));
              f(!e)
            }
          }), [r]);
          const k = `${t}?im=Resize,height=${d}`;
          return (0, ae.usePreloadImg)(k, (() => g(!0))), (0, N.jsx)(C.Af, {
            className: [ds.packCard, c, m ? ds.packCompleted : ""].join(" "),
            to: s,
            onClick: i,
            children: (0, N.jsxs)("div", {
              className: [ds.packCardImageBox, u ? ds.packCardImageLoaded : ""].join(" "),
              style: {
                backgroundImage: `url("${k}")`
              },
              children: [m && (0, N.jsxs)("div", {
                className: ds.badge,
                children: [(0, N.jsx)("div", {
                  className: ds.icon
                }), (0, N.jsx)("div", {
                  className: ds.label,
                  children: o
                })]
              }), (0, N.jsxs)("div", {
                className: ds.packCardTextBox,
                children: [(0, N.jsx)("h4", {
                  children: a
                }), !m && (0, N.jsx)(ns, {
                  tiers: r
                })]
              })]
            })
          })
        },
        ms = {
          pillBtn: "rockstargames-modules-core-feedbackc0607ec9e0a3925181496fc555721e0a",
          selected: "rockstargames-modules-core-feedbackff76988869bea7d18917be00339b2434",
          packList: "rockstargames-modules-core-feedbackffeeb1f272f99c5cb4711e4956c65f7f",
          headerVisible: "rockstargames-modules-core-feedbackf6652e03be6ce55bd8f068900093a707",
          packCard: "rockstargames-modules-core-feedbacka53b37fe7ab10b353eceea86123258a1",
          packGrid: "rockstargames-modules-core-feedbackb85775dc95fb3881171ee42e49076cbf"
        },
        fs = e => {
          let {
            isHeaderVisible: a,
            packListItems: s,
            packListClassName: t = ms.packList,
            packGridClassName: c = ms.packGrid,
            selectPackCard: r,
            sortFunction: i = rs
          } = e;
          const o = (0, n.useRef)(null),
            d = [...s].sort(i);
          return (0, N.jsx)("div", {
            className: [t, a ? ms.headerVisible : ""].join(" "),
            "data-testid": "pack-list",
            children: (0, N.jsx)("div", {
              ref: o,
              className: c,
              "data-testid": "pack-grid",
              children: d.map((e => {
                let {
                  title: a,
                  url: s,
                  imageUrl: t,
                  tiers: c
                } = e;
                return (0, N.jsx)(ls, {
                  title: a,
                  url: s,
                  className: ms.packCard,
                  imageUrl: t,
                  tiers: c,
                  onClick: () => r(a, s)
                }, s)
              }))
            })
          })
        },
        us = {
          pillBtn: "rockstargames-modules-core-feedbacke2620ca79db4bb12b74eb4adbcba56ce",
          selected: "rockstargames-modules-core-feedbackd429050d220c77a1c9e8631f9b9f4f02",
          navPill: "rockstargames-modules-core-feedbackc3ef0af25cfc7d1d0048148984230190"
        },
        gs = e => {
          let {
            title: a,
            onClick: s,
            selected: t
          } = e;
          return (0, N.jsx)("button", {
            type: "button",
            onClick: s,
            className: [us.navPill, t ? us.selected : ""].join(" "),
            children: (0, N.jsx)("div", {
              children: a
            })
          })
        };
      var ks;

      function bs() {
        return bs = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var s = arguments[a];
            for (var t in s) Object.prototype.hasOwnProperty.call(s, t) && (e[t] = s[t])
          }
          return e
        }, bs.apply(this, arguments)
      }
      const _s = e => n.createElement("svg", bs({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none"
      }, e), ks || (ks = n.createElement("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "m15 18-6-6 6-6"
      })));
      var ps;

      function vs() {
        return vs = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var s = arguments[a];
            for (var t in s) Object.prototype.hasOwnProperty.call(s, t) && (e[t] = s[t])
          }
          return e
        }, vs.apply(this, arguments)
      }
      const hs = e => n.createElement("svg", vs({
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          fill: "none"
        }, e), ps || (ps = n.createElement("path", {
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "m9 18 6-6-6-6"
        }))),
        xs = {
          pillBtn: "rockstargames-modules-core-feedbackfaa583ebd1250f30b148562c5964fa46",
          selected: "rockstargames-modules-core-feedbackf55ea6a51cd0de4060f152d9a070e040",
          navScrollButton: "rockstargames-modules-core-feedbackb13f52032a7c6105f881b2a3764d7ba6"
        },
        ys = e => {
          let {
            direction: a,
            className: s,
            ...t
          } = e;
          return (0, N.jsxs)("button", {
            type: "button",
            className: [s, xs.navScrollButton].join(" "),
            ...t,
            children: ["left" === a && (0, N.jsx)(_s, {}), "right" === a && (0, N.jsx)(hs, {})]
          })
        },
        Ns = (0, d.Os)({
          plm_nav_scroll_left: {
            id: "plm_nav_scroll_left",
            defaultMessage: "Scroll Left"
          },
          plm_nav_scroll_right: {
            id: "plm_nav_scroll_right",
            defaultMessage: "Scroll Right"
          }
        }),
        js = {
          pillBtn: "rockstargames-modules-core-feedbacka06d15859ff923574165bb46a5f3d0c9",
          selected: "rockstargames-modules-core-feedbackcce410d6b0f750e4332a82432812a32f",
          navMenu: "rockstargames-modules-core-feedbackc5752917b36e8045f6765318dcfad3da",
          navMenuMain: "rockstargames-modules-core-feedbackc507169b0a2e6c92ea16615a7740d669",
          sectionMenu: "rockstargames-modules-core-feedbacka874d8cdf964d1c68df9cf8fdd085844",
          sectionItems: "rockstargames-modules-core-feedbacka3f32f28bb1f1c6a4695c53680da9ed0",
          nextSectionNavButton: "rockstargames-modules-core-feedbacke26ad999829c4c68eadd9af67ba89033",
          previousSectionNavButton: "rockstargames-modules-core-feedbackec50957bce6305ff1dc54a0f7d6a997b",
          previousNavButton: "rockstargames-modules-core-feedbackf9530895bd80a161771d5ca70d967f65",
          nextNavButton: "rockstargames-modules-core-feedbackfdd74c0f93dcc9be87ca508ab0fe469a",
          navFeaturedItems: "rockstargames-modules-core-feedbackc6f0521d960314244895945154ba6c4a"
        },
        ws = e => {
          let {
            navItems: a,
            category: s,
            onNavItemClick: t,
            isOpen: c,
            isHeaderVisible: r,
            menuClass: i = js.navMenu,
            menuContainerClass: o = js.navMenuMain,
            menuSectionClass: d = js.sectionMenu,
            menuPrevBtnClass: l = js.previousNavButton,
            menuNextBtnClass: f = js.nextNavButton
          } = e;
          const u = (0, m.c)(),
            {
              track: g
            } = (0, se.useGtmTrack)(),
            {
              pathname: k
            } = (0, Ba.IT)(),
            b = (0, n.useMemo)((() => Math.max(a.findIndex((e => e.name === s)), 0)), [a, k]),
            [_, p] = (0, n.useState)(b),
            [v, h] = (0, n.useState)(!1),
            [x, y] = (0, n.useState)(!1),
            [j, w] = (0, n.useState)(!1),
            S = (0, n.useRef)(null),
            C = (0, n.useCallback)(((e, a) => {
              S.current && S.current.slideTo(e), p(e), T(`Secondary Nav > ${a}`)
            }), [g]),
            I = (0, n.useCallback)(((e, s) => {
              T(`Secondary Nav > ${a[_].title} > ${e}`, s), t()
            }), [a, t, _, g]),
            T = (e, a) => {
              g({
                event: "nav_click",
                event_action: "click",
                event_category: "nav",
                event_label: e,
                text: e.split(">").pop()?.trim() || "",
                link_url: a,
                element_placement: e
              })
            },
            M = (0, n.useCallback)((e => {
              y(e.isEnd), w(e.isBeginning)
            }), []);
          return (0, n.useEffect)((() => {
            S.current && ((S.current.wrapperEl.clientWidth || 0) > (S.current.el.clientWidth || 0) ? (h(!0), S.current.params.centeredSlides = !0, S.current.params.centeredSlidesBounds = !0) : (h(!1), S.current.params.centeredSlides = !1, S.current.params.centeredSlidesBounds = !1))
          }), [S.current?.wrapperEl.clientWidth, S.current?.el.clientWidth]), (0, N.jsx)(aa.q.div, {
            className: i,
            initial: {
              height: 0
            },
            animate: {
              height: c ? "100dvh" : 0
            },
            children: (0, N.jsxs)("div", {
              className: o,
              children: [(0, N.jsxs)("div", {
                className: d,
                children: [!j && v && (0, N.jsx)("div", {
                  className: js.previousSectionNavButton,
                  children: (0, N.jsx)(ys, {
                    direction: "left",
                    className: l,
                    onClick: () => S.current?.slidePrev(),
                    "aria-label": u.formatMessage(Ns.plm_nav_scroll_left)
                  })
                }), (0, N.jsx)("div", {
                  className: js.sectionItems,
                  children: (0, N.jsx)(K.wx, {
                    onBeforeInit: e => S.current = e,
                    onInit: M,
                    className: js.sectionItems,
                    direction: "horizontal",
                    grabCursor: !0,
                    slidesPerView: "auto",
                    initialSlide: _,
                    onSlideChange: M,
                    onResize: M,
                    children: a.map(((e, a) => {
                      let {
                        title: s
                      } = e;
                      return (0, N.jsx)(K.Ky, {
                        children: (0, N.jsx)(gs, {
                          title: s,
                          onClick: () => C(a, s),
                          selected: _ === a
                        })
                      }, s)
                    }))
                  })
                }), !x && v && (0, N.jsx)("div", {
                  className: js.nextSectionNavButton,
                  children: (0, N.jsx)(ys, {
                    direction: "right",
                    className: f,
                    onClick: () => S.current?.slideNext(),
                    "aria-label": u.formatMessage(Ns.plm_nav_scroll_right)
                  })
                })]
              }), (0, N.jsx)(fs, {
                isHeaderVisible: r,
                packListItems: a[_]?.subNavItems || [],
                selectPackCard: I
              })]
            })
          })
        },
        Ss = "rockstargames-modules-core-feedbackc54c374409e11d1429ce99457cbf7441",
        Cs = e => {
          let {
            children: a,
            data: s,
            onPageUpdate: t,
            page: c,
            className: r
          } = e;
          return (0, N.jsx)("a", {
            href: "#",
            className: c === s.page ? `rockstargames-modules-core-feedbackc0eebf4f915ff9f5cc362e22d6d7d976 ${r??""}` : "",
            onClick: e => {
              e.preventDefault(), t(c)
            },
            children: a
          })
        },
        Is = e => {
          let {
            data: a,
            onPageUpdate: s,
            className: t
          } = e;
          if (1 === a.pageCount) return null;
          const c = Array.from(new Array(Math.min(a.pageCount, 8)), ((e, s) => s + Math.min(Math.max(a.pageCount - 8, 1), Math.max(2, a.page - 4))));
          return (0, N.jsxs)("div", {
            className: `rockstargames-modules-core-feedbacka626faab2a5a03e3466dda5c79960575 ${t??""}`,
            children: [a.pageCount > 8 ? (0, N.jsxs)(N.Fragment, {
              children: [(0, N.jsx)(Cs, {
                data: a,
                onPageUpdate: s,
                page: 1,
                children: "1"
              }), 2 !== c[0] ? (0, N.jsx)("div", {
                className: Ss,
                children: "..."
              }) : ""]
            }) : "", c.map((e => (0, N.jsx)(Cs, {
              data: a,
              onPageUpdate: s,
              page: e,
              className: t,
              children: e
            }, e))), a.pageCount > 8 ? (0, N.jsxs)(N.Fragment, {
              children: [c.slice(-1)[0] + 1 < a.pageCount ? (0, N.jsx)("div", {
                className: Ss,
                children: "..."
              }) : "", (0, N.jsx)(Cs, {
                data: a,
                onPageUpdate: s,
                page: a.pageCount,
                children: a.pageCount
              })]
            }) : ""]
          })
        };
      var Ts = s(7616);
      const Ms = e => {
          let {
            children: a
          } = e;
          const {
            parallaxController: s
          } = (0, Ts.oZ)();
          return (0, n.useLayoutEffect)((() => {
            if (!s) return;
            const e = setInterval((() => {
              s.update()
            }), 500);
            return () => clearInterval(e)
          }), [s]), a
        },
        Ls = {
          parallaxWrapper: "rockstargames-modules-core-feedbackdb1ab316d17367d31cf94cdde25e463a",
          large: "rockstargames-modules-core-feedbackd520d28c6e4e797aea99f61c89ad2bd8",
          medium: "rockstargames-modules-core-feedbackf008365ee42d37e24e606107346b1c83",
          small: "rockstargames-modules-core-feedbackcb5937d1a102ac4a66c4e373e6253946"
        },
        Es = e => {
          let {
            scrollAxis: a = "vertical",
            size: s = "",
            style: t = {},
            children: c
          } = e;
          return (0, N.jsx)(Ts.qK, {
            scrollAxis: a,
            children: (0, N.jsx)(Ms, {
              children: (0, N.jsx)("div", {
                className: (0, G.classList)(Ls.parallaxWrapper, Ls[s]),
                style: t,
                "data-context": "parallax-wrapper",
                children: c ? c.map(((e, s) => (0, n.cloneElement)(e, {
                  scrollAxis: a,
                  style: {
                    ...e?.props?.style,
                    zIndex: s
                  }
                }))) : (0, N.jsx)("div", {})
              })
            })
          })
        },
        Bs = e => {
          let {
            layers: a = [],
            displayClass: s = "",
            style: t = {}
          } = e;
          const c = (0, G.useGenerateCdnSource)();
          if (!a || !a[0]?.image) return null;
          const r = a.map((e => ({
            ...e,
            props: {
              style: {
                ...e.style
              }
            },
            style: void 0,
            image: c(e?.image ?? null)
          })));
          return (0, N.jsx)(Ts.Sr, {
            className: (0, G.classList)("rockstargames-modules-core-feedbackb8c85703a3c76902e49a61a6afcb81bc", s),
            layers: r,
            style: t
          })
        },
        zs = "rockstargames-modules-core-feedbackc4aa8e5d29b433c400796d0c493a9a4d",
        Ps = e => {
          let {
            minOffset: a = 0,
            maxOffset: s = 0,
            scrollAxis: t = "vertical",
            displayClass: c = "",
            style: r = {},
            children: i
          } = e;
          return "horizontal" === t ? (0, N.jsx)(Ts.mw, {
            x: [a, s],
            className: (0, G.classList)(zs, c),
            styleOuter: r,
            children: i
          }) : (0, N.jsx)(Ts.mw, {
            y: [a, s],
            className: (0, G.classList)(zs, c),
            styleOuter: r,
            children: i
          })
        },
        $s = (e, a) => {
          switch (e) {
            case "pc":
              return "small" === a ? {
                src: s(6452),
                alt: "PC"
              } : {
                src: s(804),
                alt: "PC"
              };
            case "ps4":
              return "small" === a ? {
                src: s(4120),
                alt: "PS4"
              } : {
                src: s(564),
                alt: "PS4"
              };
            case "ps5":
              return "small" === a ? {
                src: s(3788),
                alt: "PS5"
              } : {
                src: s(2756),
                alt: "PS5"
              };
            case "xboxone":
              return "small" === a ? {
                src: s(4904),
                alt: "Xbox One"
              } : {
                src: s(2064),
                alt: "Xbox One"
              };
            case "xboxsx":
              return "small" === a ? {
                src: s(9916),
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
        Vs = e => s(e < 100 ? 4184 : e > 99 && e < 500 ? 9450 : e > 499 && e < 750 ? 1216 : 5724),
        Ds = (0, d.Os)({
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
        As = {
          pillBtn: "rockstargames-modules-core-feedbacke4a42eaa9bfb682035e61ac2e2a34515",
          selected: "rockstargames-modules-core-feedbackeb889d8958be54a67b790d7529530986",
          scCharacterCard: "rockstargames-modules-core-feedbackdf279e92086c0d3c96905b3a91b369ed",
          scAvatar: "rockstargames-modules-core-feedbackc1890feda663c93b0f767890394cbdcf",
          scCharNames: "rockstargames-modules-core-feedbacke79d7f5515617d849d7d13cd4ff048ce",
          scCharacterStats: "rockstargames-modules-core-feedbackc721f3aeef9e5ae6b98adca1253e4709",
          scUserName: "rockstargames-modules-core-feedbackeabff0cc0139013f5a60fea6f48c56f6",
          scRpLevel: "rockstargames-modules-core-feedbackb1f87c58a800ad546200fbf17e029f35",
          scRpIcon: "rockstargames-modules-core-feedbackf1e0bcba6214698c490b8201bbd850b7"
        },
        Os = w((e => {
          let {
            characterData: a
          } = e;
          const t = (0, m.c)(),
            {
              platform: c,
              platformUsername: r,
              mugshotUrl: i,
              stats: o
            } = a,
            [d, l] = (0, n.useState)(i),
            f = $s(c, "large");
          return (0, N.jsxs)("div", {
            className: As.scCharacterCard,
            children: [(0, N.jsx)("div", {
              className: As.scAvatar,
              "data-size": "small",
              children: (0, N.jsx)("img", {
                src: d,
                alt: t.formatMessage(Ds.profile_selector_mugshot, {
                  userName: r
                }),
                onError: () => {
                  l(s(1084))
                }
              })
            }), (0, N.jsx)("div", {
              className: As.scCharacterStats,
              children: (0, N.jsxs)("div", {
                className: As.scCharNames,
                children: [(0, N.jsx)("img", {
                  src: f.src,
                  alt: f.alt
                }), (0, N.jsx)("div", {
                  className: As.scUserName,
                  "data-size": "small",
                  children: r
                }), (0, N.jsx)("div", {
                  className: As.scRp,
                  children: (0, N.jsxs)("div", {
                    className: As.scRpLevel,
                    children: [(0, N.jsx)("img", {
                      className: As.scRpIcon,
                      src: Vs(o.overview.rank.value),
                      alt: t.formatMessage(Ds.profile_selector_rp_icon)
                    }), (0, N.jsx)("span", {
                      children: a.stats.overview.rank.value
                    })]
                  })
                })]
              })
            })]
          })
        }), za),
        Fs = (0, E.makeVarNamespace)("@rockstargames/components/profile-switcher"),
        Rs = Fs("languageSelectorOpenedReactive", !1),
        Gs = e => Rs(e),
        Hs = Fs("activeSubNavIdReactive", -1),
        Us = e => Hs(e),
        Ws = Fs("subNavExtraHeightReactive", -1),
        qs = e => Ws(e),
        Xs = Fs("scNavOpenedReactive", !0),
        Ks = e => Xs(e),
        Ys = Fs("charListHiddenReactive", !0),
        Qs = e => Ys(e),
        Zs = () => {
          const e = (0, E.useReactiveVar)(Rs),
            a = (0, E.useReactiveVar)(Hs),
            s = (0, E.useReactiveVar)(Ws),
            t = (0, E.useReactiveVar)(Xs),
            c = (0, E.useReactiveVar)(Ys);
          return (0, n.useEffect)((() => {
            c || (e && Gs(!1), t && (Ks(!1), Us(-1)))
          }), [c]), (0, n.useEffect)((() => {
            !e && c && (t || Ks(!0))
          }), [e, c]), (0, n.useMemo)((() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: Gs,
            activeSubNavId: a,
            setActiveSubNavId: Us,
            subNavExtraHeight: s,
            setSubNavExtraHeight: qs,
            scNavOpened: t,
            setScNavOpened: Ks,
            charListHidden: c,
            setCharListHidden: Qs
          })), [e, a, s, t, c])
        };
      var Js = s(9760),
        et = s.n(Js),
        at = s(9860);
      const st = {
          event: "account_menu_click",
          element_placement: "Account Menu"
        },
        tt = e => ({
          text: e.formatMessage(Ds.sc_link_help),
          target: "_self",
          ga: {
            ...st,
            text: Ds.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          children: [{
            text: e.formatMessage(Ds.sc_link_support),
            location: {
              domain: "support",
              path: "/"
            },
            target: "_self",
            ga: {
              ...st,
              text: Ds.sc_link_support.defaultMessage
            },
            dataTestId: "supportLink"
          }, {
            text: e.formatMessage(Ds.sc_link_legal),
            location: {
              domain: u,
              path: "/legal"
            },
            target: "_self",
            ga: {
              ...st,
              text: Ds.sc_link_legal.defaultMessage
            },
            dataTestId: "legalLink"
          }, {
            text: e.formatMessage(Ds.sc_link_privacy_policy),
            location: {
              domain: u,
              path: "/privacy"
            },
            target: "_self",
            ga: {
              ...st,
              text: Ds.sc_link_privacy_policy.defaultMessage
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: e.formatMessage(Ds.sc_link_cookies_policy),
            location: {
              domain: u,
              path: "/cookies"
            },
            target: "_self",
            ga: {
              ...st,
              text: Ds.sc_link_cookies_policy.defaultMessage
            },
            dataTestId: "cookiesPolicyLink"
          }, {
            text: e.formatMessage(Ds.sc_link_cookies_settings),
            onClickCallback: e => {
              e.preventDefault(), window.OneTrust?.ToggleInfoDisplay()
            },
            target: "_self",
            ga: {
              ...st,
              text: Ds.sc_link_cookies_settings.defaultMessage
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: e.formatMessage(Ds.sc_link_do_not_sell_my_information),
            location: {
              domain: u,
              path: "/ccpa"
            },
            target: "_self",
            ga: {
              ...st,
              text: Ds.sc_link_do_not_sell_my_information.defaultMessage
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        }),
        ct = {
          pillBtn: "rockstargames-modules-core-feedbackeb30ffefc0c8fef449ca5348a2702622",
          selected: "rockstargames-modules-core-feedbackcd058a755e77eeb55cf666fa43fadf75",
          scSubLink: "rockstargames-modules-core-feedbackfdaa918acc06706cbe191dedd40974af",
          scLink: "rockstargames-modules-core-feedbackcbc80932118c48d8ec14448d8913d068"
        },
        rt = e => {
          let {
            text: a,
            target: s,
            href: t,
            location: c,
            ga: r,
            dataTestId: i,
            isSubLink: o,
            hasNotifications: n = !1,
            onClickCallback: d = (() => {}),
            tabIndex: l,
            reloadDocument: m = !1
          } = e;
          const {
            track: f
          } = (0, se.useGtmTrack)(), u = b();
          let g = t;
          c && (g = c.domain === u.currentSite?.site ? c.path : `https://${u.sites[c.domain]}.rockstargames.com${c.path}`);
          const k = {
            ...r,
            link_url: g
          };
          return (0, N.jsxs)(C.cH, {
            className: o ? ct.scSubLink : ct.scLink,
            "data-testid": i || "menuLink",
            title: a,
            to: g,
            target: s,
            rel: "noreferrer",
            reloadDocument: m,
            tabIndex: l,
            onClick: e => {
              f(k), d(e)
            },
            children: [a, n && (0, N.jsx)("span", {
              className: ct.scLinkNotification
            })]
          })
        },
        it = e => {
          let {
            id: a,
            text: s,
            target: t,
            href: c,
            location: r,
            ga: i,
            hasNotifications: o = !1,
            dataTestId: d,
            children: l = [],
            activeSubNavId: m,
            setActiveSubNavId: f,
            setSubNavExtraHeight: u,
            reloadDocument: g = !1,
            onClickCallback: k = (() => {})
          } = e;
          const {
            windowWidth: b,
            windowHeight: _
          } = (0, ae.useWindowResize)(), {
            track: p
          } = (0, se.useGtmTrack)(), {
            navOpen: v
          } = (0, se.useRockstarUserState)(), h = (0, n.useRef)(null), [x, y] = (0, n.useState)(0), [j, w] = (0, n.useState)(0), [S, C] = (0, n.useState)(!0);
          return (0, n.useEffect)((() => {
            m !== a && !1 === S && C(!0), m === a && C(!1)
          }), [m]), (0, n.useEffect)((() => {
            if (!h.current) return;
            y(h?.current?.scrollHeight);
            const e = window.getComputedStyle(h.current);
            if (e) {
              let a = 16 * parseInt(e.getPropertyValue("--scSubNav-opened-margin"), 10);
              Number.isNaN(a) && (a = 0), w(a)
            }
          }), [h, b, _]), l.length > 0 ? (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsxs)("button", {
              className: "rockstargames-modules-core-feedbackaf10b4154b04475edc11366934576ecd",
              type: "button",
              "data-testid": d || "menuButton",
              title: s,
              tabIndex: v ? 0 : -1,
              "data-children-hidden": S,
              onClick: e => {
                e.stopPropagation(), p(i), m === a ? (f(-1), u(0)) : (f(a), u(x + j + j))
              },
              children: [(0, N.jsx)("span", {
                className: "rockstargames-modules-core-feedbackfd722aa4f6d05656ee6e37f952bd13d0",
                children: s
              }), (0, N.jsx)("span", {
                className: "rockstargames-modules-core-feedbackbe674f27adc299eab348b49f71429b71"
              })]
            }, s), (0, N.jsx)("nav", {
              className: "rockstargames-modules-core-feedbackff1911053a3515534dd825554a85909e",
              ref: h,
              "aria-hidden": S,
              style: {
                height: S ? 0 : `${x}px`
              },
              children: l.map((e => (0, N.jsx)(rt, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: S || !v ? -1 : 0
              })))
            })]
          }) : (0, N.jsx)(rt, {
            text: s,
            target: t,
            href: c,
            location: r,
            ga: i,
            hasNotifications: o,
            dataTestId: d,
            isSubLink: !1,
            onClickCallback: k,
            tabIndex: v ? 0 : -1,
            reloadDocument: g
          })
        },
        ot = e => {
          let {
            sc: a
          } = e;
          const {
            windowWidth: s,
            windowHeight: t
          } = (0, ae.useWindowResize)(), c = (0, m.c)(), {
            languageSelectorOpened: r,
            setLanguageSelectorOpened: i,
            activeSubNavId: o,
            setActiveSubNavId: d,
            subNavExtraHeight: l,
            setSubNavExtraHeight: f
          } = Zs(), {
            setSelectedCharacterTuple: u,
            navOpen: g
          } = (0, se.useRockstarUserState)(), k = (0, ae.useLocale)(), _ = (0, ae.toScLocaleString)(k), [p, v] = (0, n.useState)(""), h = (0, Ba.IT)(), x = `${a.login}?returnUrl=${p}&lang=${_}`, y = `${a.signup}&returnUrl=${p}&lang=${_}`, j = (0, n.useMemo)((() => b()), []), w = (0, n.useMemo)((() => {
            const e = ((e, a, s) => [{
              text: e.formatMessage(Ds.sc_link_sign_in),
              href: a,
              ga: {
                event: "cta_login",
                text: Ds.sc_link_sign_in.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "loginLink"
            }, {
              text: e.formatMessage(Ds.sc_link_join_social_club),
              href: s,
              ga: {
                event: "cta_signup",
                text: Ds.sc_link_join_social_club.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "signUpLink"
            }, tt(e)])(c, x, y);
            return e
          }), [c, x, y, j]), [S, C] = (0, n.useState)(0), I = (0, n.createRef)(), T = () => {
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
          return (0, n.useEffect)((() => {
            const e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            v(e)
          }), [h]), (0, n.useEffect)((() => {
            u(!1)
          }), []), (0, n.useEffect)((() => {
            T(), et()((() => {
              setTimeout(T, 0)
            }), 300)
          }), [s, t]), (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsx)("nav", {
              className: "rockstargames-modules-core-feedbackb1552e1f97b08ee4337f78fa4486ffac",
              children: (0, N.jsx)("div", {
                className: "rockstargames-modules-core-feedbackc5bc9bec611f9f0514176014ce835e1e",
                "data-logged-in": "false",
                ref: I,
                style: {
                  "--scNavWrap-max-height": `${l+S}px`
                },
                children: w.map((e => (0, n.createElement)(it, {
                  ...e,
                  activeSubNavId: o,
                  setActiveSubNavId: d,
                  setSubNavExtraHeight: f,
                  key: e.text
                })))
              })
            }), (0, N.jsx)("div", {
              className: "rockstargames-modules-core-feedbacka6c12c94e8656e88958552d645fe51fe",
              style: {
                visibility: g ? null : "hidden"
              },
              children: (0, N.jsx)(at.LanguageSelector, {
                theme: "sc-menu",
                languageSelectorOpened: r,
                setLanguageSelectorOpened: e => {
                  d(-1), i(e)
                },
                defaultMessage: "Select a Language"
              })
            })]
          })
        },
        nt = e => {
          let {
            characterData: a,
            setMobileCardWidth: t,
            tabIndex: c
          } = e;
          const r = (0, m.c)(),
            {
              currentCharId: i,
              setCurrentCharId: o
            } = (0, se.useRockstarUserState)(),
            {
              track: d
            } = (0, se.useGtmTrack)(),
            l = (0, n.createRef)(),
            {
              platform: f,
              platformUsername: u,
              mugshotUrl: g,
              stats: k
            } = a,
            [b, _] = (0, n.useState)(g),
            [p] = (0, n.useState)(a.index),
            v = $s(f, "large"),
            h = i === a.index;
          return (0, n.useEffect)((() => {
            l.current && t && t(l?.current?.offsetWidth)
          }), [l]), (0, N.jsxs)("button", {
            className: "rockstargames-modules-core-feedbackd76e785563451a50438064ac368aae4b",
            type: "button",
            "aria-hidden": h,
            onClick: e => {
              e.stopPropagation(), o(p);
              let a = "";
              "pc" === f ? a = "PC" : "ps4" === f ? a = "PS4" : "ps5" === f ? a = "PS5" : "xboxone" === f ? a = "Xbox One" : "xboxsx" === f && (a = "Xbox Series X|S"), d({
                event: "character_selector_select",
                event_action: "select",
                event_category: "character_selector",
                event_label: a,
                position: p
              })
            },
            ref: l,
            tabIndex: c,
            children: [(0, N.jsx)("div", {
              className: "rockstargames-modules-core-feedbackbbdf69fe97471593355fc51ec9a6d13a",
              "data-size": "small",
              children: (0, N.jsx)("img", {
                src: b,
                alt: r.formatMessage(Ds.profile_selector_mugshot, {
                  userName: u
                }),
                onError: () => {
                  _(s(1084))
                }
              })
            }), (0, N.jsxs)("div", {
              className: "rockstargames-modules-core-feedbackc0dc303ef48255c09faa4ad2f4e953e7",
              children: [(0, N.jsxs)("div", {
                className: "rockstargames-modules-core-feedbacke9fbbbcea66d86dbd58b8548a5f6bea8",
                children: [(0, N.jsx)("img", {
                  src: v.src,
                  alt: v.alt
                }), (0, N.jsx)("div", {
                  className: "rockstargames-modules-core-feedbackb3726d8b480695f64fddc723c6f35205",
                  "data-size": "small",
                  children: u
                })]
              }), (0, N.jsx)("div", {
                className: "rockstargames-modules-core-feedbacka5e3df42966a50f3dd88bbcb57536617",
                children: (0, N.jsxs)("div", {
                  className: "rockstargames-modules-core-feedbacka6776312350028898320ba59145a39be",
                  children: [(0, N.jsx)("img", {
                    className: "rockstargames-modules-core-feedbackb266652910ad34c0e8e097b212a958f0",
                    src: Vs(k.overview.rank.value),
                    alt: r.formatMessage(Ds.profile_selector_rp_icon)
                  }), (0, N.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                })
              })]
            })]
          })
        },
        dt = {
          pillBtn: "rockstargames-modules-core-feedbackd9464c4b4d92881abe5578988bd68af7",
          selected: "rockstargames-modules-core-feedbackbc0a950bffee0ee9e28213912da51427",
          scProfileDetails: "rockstargames-modules-core-feedbackb954455f6ff25f2350e1a0960ba97d3e",
          scAvatar: "rockstargames-modules-core-feedbackc15a60de0fc8df4960d84ab96caa8a62",
          scAvatarPlatform: "rockstargames-modules-core-feedbacka8f66dccf33827dc81107cae3196cfbe",
          scProfileStats: "rockstargames-modules-core-feedbackc91f8623fa10edbeba8c79c7d6b26a28",
          scNames: "rockstargames-modules-core-feedbackda83fc27513bcac6a8a31eadc89b1c2c",
          scTagsNames: "rockstargames-modules-core-feedbackd7ce73d22672e2e2f59e9193c2632531",
          scUserName: "rockstargames-modules-core-feedbackd5814836ce152affaa22d226819b5b12",
          scCrewName: "rockstargames-modules-core-feedbackb7777817be6d756cc2d1585c1377734c",
          scCrewRankBar: "rockstargames-modules-core-feedbacka581d240520cf347e5ff5f6a62a36a97",
          scCrewRankBarItem: "rockstargames-modules-core-feedbackbdb056c03ef06b99d69426c87cec67c5",
          scProgress: "rockstargames-modules-core-feedbackdc3020fbe81a916a8da4719ef052c278",
          scRpLevel: "rockstargames-modules-core-feedbackb2ea0e0d19182355913368bf7be016b8",
          scRpIcon: "rockstargames-modules-core-feedbackf17a712b43b5234c07dc44f674433cf6",
          scMoney: "rockstargames-modules-core-feedbackf14849be516f588e1bc9e252a109c76f",
          scCash: "rockstargames-modules-core-feedbackb3e35cdc6557f7c3886700245af352dd",
          scBank: "rockstargames-modules-core-feedbackec696aafed90a7a4c69dc53da0a5bb36"
        },
        lt = e => {
          let {
            character: a,
            platformTag: t
          } = e;
          const {
            data: c
          } = (0, se.useRockstarUser)(), {
            track: r
          } = (0, se.useGtmTrack)(), i = (0, m.c)(), [o, d] = (0, n.useState)([]), [l, f] = (0, n.useState)(null), [u, g] = (0, n.useState)(null), [k, b] = (0, n.useState)(!1), [_, p] = (0, n.useState)(-1), [v, h] = (0, n.useState)([]), [x, y] = (0, n.useState)(0), j = s(1084), [w, S] = (0, n.useState)("0"), [C, I] = (0, n.useState)("0"), T = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), M = () => {
            E((0, N.jsx)("img", {
              src: j,
              alt: i.formatMessage(Ds.profile_selector_mugshot, {
                userName: c.nickname
              })
            }))
          }, [L, E] = (0, n.useState)((0, N.jsx)("img", {
            className: dt.scAvatarImg,
            src: a.mugshotUrl,
            alt: i.formatMessage(Ds.profile_selector_mugshot, {
              userName: c.nickname
            }),
            onError: M
          }));
          (0, n.useEffect)((() => {
            d(c.crews ?? [])
          }), [c]), (0, n.useEffect)((() => {
            E((0, N.jsx)("img", {
              src: a.mugshotUrl,
              alt: c.nickname,
              onError: M
            })), S(T(a.stats.overview.bank.value)), I(T(a.stats.overview.cash.value)), y(parseInt(a.stats.overview.rank.value))
          }), [a, c]), (0, n.useEffect)((() => {
            o && o.forEach((e => {
              !0 === e.isPrimary && (f(e.crewTag), g(e.crewColour), p(e.rankOrder), b(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && b(!0))
            }))
          }), [o]), (0, n.useEffect)((() => {
            const e = [];
            if (!k && _ > -1)
              for (let a = 5; a > _; a -= 1) e.push((0, N.jsx)("div", {
                className: dt.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== u ? u : ""
                }
              }, `crewrankbar-${a}`));
            h(e)
          }), [_, k, u]);
          const B = e => {
            e.stopPropagation(), r({
              event: "character_selector_profile_click",
              event_action: "profile_click",
              event_category: "character_selector",
              event_label: t.alt,
              link_url: void 0
            })
          };
          return (0, N.jsxs)("div", {
            className: dt.scProfileDetails,
            onClick: B,
            onKeyUp: B,
            role: "button",
            tabIndex: -1,
            children: [(0, N.jsxs)("div", {
              className: dt.scAvatar,
              children: [L, (0, N.jsx)("div", {
                className: dt.scAvatarPlatform,
                "data-platform": a.platform,
                children: (0, N.jsx)("img", {
                  src: t.src,
                  alt: t.alt
                })
              })]
            }), (0, N.jsxs)("div", {
              className: dt.scProfileStats,
              children: [(0, N.jsx)("div", {
                className: dt.scNames,
                children: (0, N.jsxs)("div", {
                  className: dt.scTagsNames,
                  children: [(0, N.jsx)("span", {
                    className: dt.scUserName,
                    children: a.platformUsername
                  }), l && (0, N.jsxs)("span", {
                    className: dt.scCrewName,
                    "data-arrow-tag": k,
                    children: [l, !k && (0, N.jsx)("div", {
                      className: dt.scCrewRankBar,
                      children: v
                    })]
                  })]
                })
              }), (0, N.jsxs)("div", {
                className: dt.scProgress,
                children: [(0, N.jsxs)("div", {
                  className: dt.scRpLevel,
                  children: [(0, N.jsx)("img", {
                    className: dt.scRpIcon,
                    src: Vs(x),
                    alt: i.formatMessage(Ds.profile_selector_rp_icon)
                  }), (0, N.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                }), (0, N.jsxs)("div", {
                  className: dt.scMoney,
                  children: [(0, N.jsxs)("span", {
                    className: dt.scCash,
                    children: ["$", C]
                  }), (0, N.jsxs)("span", {
                    className: dt.scBank,
                    children: ["$", w]
                  })]
                })]
              })]
            })]
          })
        },
        mt = (e, a) => {
          const [s, t] = (0, n.useState)(0);
          return (0, n.useEffect)((() => {
            if (e.current) {
              const {
                current: s
              } = e, c = s.getBoundingClientRect(), {
                width: r
              } = c;
              let i = r;
              if (!0 === a) {
                const e = window.getComputedStyle(s);
                i += parseInt(e.marginLeft, 10) + parseInt(e.marginRight, 10)
              }
              t(i)
            }
          }), [e]), s
        },
        ft = e => {
          let {
            dragThreshold: a = 80,
            interactionDelay: s = 1e3,
            mobileGutterWidth: t = 17,
            slideChangeCallback: c = null,
            slideClickCallback: r = null,
            children: i = [],
            disablePager: o = !1,
            disableSwiper: d = !1
          } = e;
          const l = (0, n.createRef)(),
            m = mt(l, !1),
            [f, u] = (0, n.useState)(!1),
            [g, k] = (0, n.useState)(0),
            [b, _] = (0, n.useState)(0),
            [p, v] = (0, n.useState)([t]),
            [h, x] = (0, n.useState)(p[0]),
            [y, j] = (0, n.useState)(252),
            [w, S] = (0, n.useState)(0),
            [C, I] = (0, n.useState)([]),
            [T, M] = (0, n.useState)([]),
            [L, E] = (0, n.useState)(!1),
            B = e => {
              if (!0 === f || !0 === d) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              _(a)
            },
            z = e => {
              if (!0 === f || 0 === b || !0 === d) return;
              const s = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                t = s > b ? 1 : -1,
                r = Math.abs(b - s);
              r > a ? (t > 0 ? (() => {
                if (!0 === f) return;
                u(!0);
                const e = g - 1 < 0 ? 0 : g - 1;
                k(e), x(p[e]), c && c(e)
              })() : (() => {
                if (!0 === f) return;
                u(!0);
                let e = g + 1 >= p.length ? p.length - 1 : g + 1;
                e < 0 && (e = 0), k(e), x(p[e]), c && c(e)
              })(), _(0)) : x(p[g] + r * t)
            },
            P = () => {
              !0 !== f && !0 !== d && (u(!0), !0 !== f && (x(p[g]), _(0)))
            };
          return (0, n.useEffect)((() => {
            const e = [];
            i.forEach((() => {
              e.push((0, n.createRef)())
            })), I(e)
          }), [i]), (0, n.useEffect)((() => {
            if (C.length < 1) return;
            j(C[0]?.current?.clientWidth || 0);
            const e = C[0]?.current.firstChild,
              a = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              s = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            S(s + a)
          }), [C]), (0, n.useEffect)((() => {
            !1 !== f && setTimeout((() => {
              u(!1)
            }), s)
          }), [f, s]), (0, n.useEffect)((() => {
            v(i.map(((e, a) => (e => {
              let a = 0;
              const s = i.length;
              return 1 === s ? .5 * m - .5 * y - 2 * t + w : (0 === e && (a = t - e * y), e === s - 1 && s > 1 && (a = s * y * -1 + (m - (t - w))), e > 0 && e < s - 1 && (a = e * y * -1 + (.5 * m - .5 * y + .5 * w)), a)
            })(a)))), 1 === i.length ? E(!0) : E(!1)
          }), [l.current, i, m]), (0, n.useEffect)((() => {
            const e = (a = g, i.map(((e, s) => {
              const t = {
                active: !1
              };
              return s === a && (t.active = !0), t
            })));
            var a;
            M(e)
          }), [i, g]), (0, n.useEffect)((() => {
            !0 !== o && !0 !== d || x(p[0])
          }), [d, o, p]), (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsx)("div", {
              className: "rockstargames-modules-core-feedbackab70c3f9c67ecd69d19216a5f4de5049",
              ref: l,
              onTouchStart: B,
              onTouchMove: z,
              onTouchEnd: P,
              onMouseDown: B,
              onMouseMove: z,
              onMouseUp: P,
              onClick: () => {
                null !== r && r(g)
              },
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, N.jsx)("div", {
                className: "rockstargames-modules-core-feedbacka93be1084a583cafa7f3f97a8ce8a6be",
                "data-interaction-blocked": f,
                "data-single-item": L,
                style: {
                  transform: L ? null : `translateX(${h}px)`
                },
                children: i.map(((e, a) => (0, N.jsx)("div", {
                  className: "rockstargames-modules-core-feedbackc013369a930e076d1729d086fb51903e",
                  ref: C[a],
                  children: e
                }, `csItem-${e?.props?.characterData?.mugshotUrl}`)))
              })
            }), T.length > 1 && !1 === o && (0, N.jsx)("div", {
              className: "rockstargames-modules-core-feedbackda8cfef07bf44e9a44839e2723ec61bb",
              children: T.map((e => (0, N.jsx)("div", {
                className: "rockstargames-modules-core-feedbackfe87ea0922034610a1f6cb3a4edbe195",
                "data-active": e.active
              }, e.mugshotUrl)))
            })]
          })
        },
        ut = {
          pillBtn: "rockstargames-modules-core-feedbackaa374e2f7806799cb073de8a9b2a2e7d",
          selected: "rockstargames-modules-core-feedbackd402a10393179390abdaf3684a02f1ba",
          scProfile: "rockstargames-modules-core-feedbackdde9053261079ebfb5d95975239fe87d",
          scCharacterSelector: "rockstargames-modules-core-feedbackc47913b4c686bbbc9a0c8ee6ed7666bf",
          scCharacterSelectBtn: "rockstargames-modules-core-feedbacka4f9dafe071f5c9a825bf57348835309",
          open: "rockstargames-modules-core-feedbackb1f5708c9a0e35681c54a58f04661c1c",
          scCharacterList: "rockstargames-modules-core-feedbacka1d1104b9df769c9237fa1a06633ffe7",
          scNav: "rockstargames-modules-core-feedbacka326b0feea8d083ed2265571010d79d3",
          scLanguageSelector: "rockstargames-modules-core-feedbackd19713d1362bcd54ff539975adbb2ecc",
          scNavHeader: "rockstargames-modules-core-feedbackbb74821846f47bbe5fc0896364efd520",
          scNavWrap: "rockstargames-modules-core-feedbacka7f1e2d78519eaf099bd43c6ad07abc9"
        },
        gt = (0, ae.withTranslations)((e => {
          let {
            sc: a,
            charListHidden: s,
            hideCharacterList: t,
            refCharacterListDesktop: c,
            menuPadding: r,
            longCharList: i,
            setLongCharList: o,
            isMobileMode: d,
            setIsMobileMode: f
          } = e;
          const {
            windowWidth: u,
            windowHeight: k
          } = (0, ae.useWindowResize)(), _ = (0, m.c)(), {
            languageSelectorOpened: p,
            setLanguageSelectorOpened: v,
            activeSubNavId: h,
            setActiveSubNavId: x,
            subNavExtraHeight: y,
            setSubNavExtraHeight: j,
            scNavOpened: w,
            setScNavOpened: S
          } = Zs(), [C, I] = (0, n.useState)(""), T = (0, Ba.IT)(), {
            lsSettings: M
          } = (0, ae.useRockstarWebLSSettings)(), {
            track: L
          } = (0, se.useGtmTrack)(), B = (0, E.useRockstarTokenPing)(), {
            data: z,
            loggedIn: P
          } = (0, se.useRockstarUser)(), {
            charactersNeeded: $,
            currentCharId: V,
            hasNotifications: D,
            navOpen: A,
            setCurrentCharId: O,
            setHasNotifications: F,
            setSelectedCharacterTuple: R,
            setUserData: G
          } = (0, se.useRockstarUserState)(), [H, U] = (0, n.useState)(null), [W, q] = (0, n.useState)(null), [X, K] = (0, n.useState)(!1), [Y, Q] = (0, n.useState)(!1), [Z, J] = (0, n.useState)(0), ee = (0, n.createRef)(), te = mt(ee, !1), ce = (0, n.createRef)(), [re, ie] = (0, n.useState)(0), [oe, ne] = (0, n.useState)([]), [de, le] = (0, n.useState)(244), me = (0, n.useMemo)((() => b()), []), fe = (0, n.useMemo)((() => ((e, a, s, t, c) => [{
            text: e.formatMessage(Ds.sc_link_activity_feed),
            location: {
              domain: g,
              path: "/"
            },
            target: "_self",
            ga: {
              ...st,
              text: Ds.sc_link_activity_feed.defaultMessage
            },
            dataTestId: "activityFeedLink"
          }, {
            text: e.formatMessage(Ds.sc_link_account),
            target: "_self",
            dataTestId: "accountButton",
            children: [{
              text: e.formatMessage(Ds.sc_link_view_my_profile),
              href: s.profile_link,
              target: "_self",
              ga: {
                ...st,
                text: Ds.sc_link_view_my_profile.defaultMessage
              },
              dataTestId: "viewMyProfileLink"
            }, {
              text: e.formatMessage(Ds.sc_link_messages),
              location: {
                domain: g,
                path: "/message"
              },
              target: "_self",
              ga: {
                ...st,
                text: Ds.sc_link_messages.defaultMessage
              },
              dataTestId: "messagesLink"
            }, {
              text: e.formatMessage(Ds.sc_link_game_activation),
              location: {
                domain: g,
                path: "/activate"
              },
              target: "_self",
              ga: {
                ...st,
                text: Ds.sc_link_game_activation.defaultMessage
              },
              dataTestId: "gameActivationLink"
            }]
          }, {
            text: e.formatMessage(Ds.sc_link_notifications),
            location: {
              domain: g,
              path: "/notifications"
            },
            target: "_self",
            hasNotifications: t,
            ga: {
              ...st,
              text: Ds.sc_link_notifications.defaultMessage,
              location: {
                domain: g,
                path: "/notifications"
              }
            },
            dataTestId: "notificationsLink"
          }, {
            text: e.formatMessage(Ds.sc_link_crews),
            location: {
              domain: g,
              path: `/member/${s.nickname}/crews`
            },
            target: "_self",
            ga: {
              ...st,
              text: Ds.sc_link_crews.defaultMessage
            },
            dataTestId: "crewsLink"
          }, {
            text: e.formatMessage(Ds.sc_link_friends),
            target: "_self",
            dataTestId: "friendsButton",
            children: [{
              text: e.formatMessage(Ds.sc_link_my_friends),
              location: {
                domain: g,
                path: `/member/${s.nickname}/friends`
              },
              target: "_self",
              ga: {
                ...st,
                text: Ds.sc_link_my_friends.defaultMessage
              },
              dataTestId: "myFriendsLink"
            }, {
              text: e.formatMessage(Ds.sc_link_import_friends),
              location: {
                domain: g,
                path: "/friends/import"
              },
              target: "_self",
              ga: {
                ...st,
                text: Ds.sc_link_import_friends.defaultMessage
              },
              dataTestId: "importFriendsLink"
            }, {
              text: e.formatMessage(Ds.sc_link_find_friends),
              location: {
                domain: g,
                path: "/members"
              },
              target: "_self",
              ga: {
                ...st,
                text: Ds.sc_link_import_friends.defaultMessage
              },
              dataTestId: "findFriendsLink"
            }]
          }, {
            text: e.formatMessage(Ds.sc_link_settings),
            location: {
              domain: g,
              path: "/settings"
            },
            target: "_self",
            ga: {
              ...st,
              text: Ds.sc_link_settings.defaultMessage
            },
            dataTestId: "settingsLink"
          }, tt(e), {
            text: e.formatMessage(Ds.sc_link_log_out),
            href: `${a.logout}?returnUrl=${c}`,
            target: "_self",
            reloadDocument: !0,
            ga: {
              ...st,
              text: Ds.sc_link_log_out.defaultMessage
            },
            dataTestId: "logoutButton"
          }])(_, a, z, D, C, window)), [_, a, z, D, C, me]), ue = () => {
            Q(r + de * Z < te)
          }, ge = () => {
            if (ce.current) {
              const {
                current: e
              } = ce, a = e?.scrollHeight, s = window.getComputedStyle(e);
              if (s) {
                let e = 16 * parseInt(s.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), ie(a + e)
              } else ie(a)
            }
          };
          return (0, n.useEffect)((() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            me.currentSite?.site === g && (e = encodeURIComponent("/")), I(e)
          }), [T]), (0, n.useEffect)((() => {
            ne(z.characters[$] ?? [])
          }), [z, $]), (0, n.useEffect)((() => {
            z && G(z)
          }), [z]), (0, n.useEffect)((() => {
            const e = z?.characters.gtao;
            if (null !== P && !e.length) return void R(!1);
            if (null == V || !e.length) return;
            const a = e?.[V] ?? e?.[0] ?? null;
            R(!!a?.platform && [a.platform, a.characterSlot])
          }), [V, z, P]), (0, n.useEffect)((() => {
            (async () => {
              if (!z?.id) return;
              const {
                count: e
              } = await (0, ae.coreScApiFetch)("notification/count", {
                pingBearer: B
              });
              F(e > 0)
            })()
          }), [z]), (0, n.useEffect)((() => {
            ue()
          }), [de]), (0, n.useEffect)((() => {
            t(!0), f(u < 768), f(u < 768 || k < 649)
          }), [u, k]), (0, n.useEffect)((() => {
            let e = oe.length - 1;
            e < 0 && (e = 0), J(e);
            const a = oe.length > 0 ? oe[V] ?? oe[0] : null;
            if (!a) return;
            const s = null !== a ? $s(a.platform, "large") : null;
            q(s), U(a), oe.length > 1 ? K(!0) : K(!1), o(oe.length - 1 > 3)
          }), [V, oe]), (0, n.useEffect)((() => {
            ue()
          }), [Z, d, u, oe]), (0, n.useEffect)((() => {
            ge(), et()((() => {
              setTimeout(ge, 0)
            }), 300)
          }), [u, k]), (0, n.useEffect)((() => {
            const e = M?.currentCharId ?? 0;
            e !== V && O(Math.max(0, Math.min(e, oe.length - 1)))
          }), [oe, M]), (0, N.jsxs)(N.Fragment, {
            children: [null !== H && "gtao" === $ && (0, N.jsxs)("div", {
              className: ut.scProfile,
              tabIndex: -1,
              "aria-label": _.formatMessage(Ds.profile_selector_profile_card),
              children: [(0, N.jsx)(lt, {
                s: ut,
                character: H,
                platformTag: W
              }), !0 === X && (0, N.jsxs)("div", {
                className: ut.scCharacterSelector,
                children: [(0, N.jsx)("button", {
                  className: ut.scCharacterSelectBtn,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const a = !s;
                    t(a), L({
                      event: a ? "character_selector_close" : "character_selector_open",
                      event_action: !0 === a ? "close" : "open",
                      event_category: "character_selector"
                    })
                  },
                  "data-list-closed": s,
                  children: (0, N.jsx)("span", {
                    children: (0, N.jsx)(l.c, {
                      ...Ds.profile_selector_switch_character
                    })
                  })
                }), !1 === d && (0, N.jsx)("div", {
                  className: ut.scCharacterList,
                  "data-long-list": i,
                  "aria-hidden": s,
                  ref: c,
                  children: oe.map((e => (0, N.jsx)(nt, {
                    tabIndex: s ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: le
                  }, e.mugshotUrl)))
                }), !0 === d && (0, N.jsx)("div", {
                  className: ut.scCharacterList,
                  "data-single-item": 2 === oe.length,
                  "data-swiper-disabled": Y,
                  "aria-hidden": s,
                  ref: ee,
                  children: (0, N.jsx)(ft, {
                    interactionDelay: 350,
                    mobileGutterWidth: 17,
                    dragThreshold: 40,
                    slideChangeCallback: () => {
                      L({
                        event: "carousel_swipe",
                        event_category: "carousel",
                        event_action: "swipe",
                        event_label: "character_selector"
                      })
                    },
                    disablePager: Y,
                    disableSwiper: Y,
                    children: oe.filter(((e, a) => a !== V)).map((e => (0, n.createElement)(nt, {
                      characterData: e,
                      setMobileCardWidth: le,
                      key: e.mugshotUrl,
                      tabIndex: s ? -1 : 0
                    })))
                  })
                })]
              })]
            }), (0, N.jsxs)("nav", {
              className: ut.scNav,
              "aria-hidden": !A,
              children: [(0, N.jsx)("button", {
                className: ut.scNavHeader,
                type: "button",
                "data-opened": w,
                "data-nav-opened": A,
                tabIndex: w ? -1 : 0,
                onClick: e => {
                  e.stopPropagation(), w || S(!0)
                },
                "data-testid": "playerButton",
                children: (0, N.jsx)("span", {
                  children: z.nickname
                })
              }), (0, N.jsx)("div", {
                className: ut.scNavWrap,
                "data-opened": w,
                "data-logged-in": "true",
                ref: ce,
                style: {
                  "--scNavWrap-max-height": `${re+y}px`
                },
                children: fe.map(((e, a) => (0, n.createElement)(it, {
                  ...e,
                  id: a,
                  activeSubNavId: h,
                  setActiveSubNavId: x,
                  setSubNavExtraHeight: j,
                  key: e.text
                })))
              })]
            }), (0, N.jsx)("div", {
              className: ut.scLanguageSelector,
              style: {
                visibility: A ? null : "hidden"
              },
              children: (0, N.jsx)(at.LanguageSelector, {
                theme: "sc-menu",
                languageSelectorOpened: p,
                setLanguageSelectorOpened: v
              })
            })]
          })
        })),
        kt = {
          scMenu: "rockstargames-modules-core-feedbackebc4c779cfe9d0b7cfd678424e57370c",
          pillBtn: "rockstargames-modules-core-feedbackf333ffbc5b9f9d571b81be0a7235190d",
          selected: "rockstargames-modules-core-feedbacke3bdabe09c3d1b98b61f3d0484209912",
          navOpen: "rockstargames-modules-core-feedbackff929155ac480a9cfa5540dfd3e70ae9",
          dragHandle: "rockstargames-modules-core-feedbackba4968108b922dd8165c6e53557f5f2e",
          dragHandleBtn: "rockstargames-modules-core-feedbackd362ba3eeee50f90600a413c05761431",
          scOverlay: "rockstargames-modules-core-feedbackd8e443f5d0d9171449f5f1042f80aa17"
        },
        bt = w((() => {
          const {
            windowHeight: e
          } = (0, ae.useWindowResize)(), a = (0, m.c)(), {
            languageSelectorOpened: t,
            setLanguageSelectorOpened: c,
            setActiveSubNavId: r,
            scNavOpened: i,
            setScNavOpened: o,
            charListHidden: d,
            setCharListHidden: l
          } = Zs(), [f, u] = (0, n.useState)(!1), {
            setBodyIsScrollable: g
          } = (0, ae.useBodyScrollable)(), {
            navHidden: k = !1
          } = (0, E.useState)(), {
            loggedIn: b
          } = (0, se.useRockstarUser)(), {
            currentCharId: _,
            navOpen: p,
            setNavOpen: v,
            userData: h
          } = (0, se.useRockstarUserState)(), {
            track: x
          } = (0, se.useGtmTrack)(), [y, j] = (0, n.useState)(!1), w = (0, E.useReactiveVar)(se.scConfig), S = (0, n.useRef)(), [C, I] = (0, n.useState)(0), T = (0, n.createRef)(), [M, L] = (0, n.useState)(!1), [B, z] = (0, n.useState)(0), [P, $] = (0, n.useState)(!1), {
            mutateLSSettings: V,
            lsSettings: D
          } = (0, ae.useRockstarWebLSSettings)(), A = (0, n.useCallback)((e => {
            l(e), S.current && !0 === e && (S.current.scrollTop = 0)
          }), [S]);
          return (0, n.useEffect)((() => {
            null !== _ && D.currentCharId !== _ && V({
              key: "currentCharId",
              value: _
            }), !1 === b ? V({
              key: "currentCharId",
              value: null
            }) : b && !h && x({
              event: "account_synced"
            })
          }), [_, b]), (0, n.useEffect)((() => {
            S.current && (!1 === d && !1 === y && (S.current.style.height = `${S.current.scrollHeight}px`), !0 === d && (S.current.style.height = null))
          }), [d, S, y]), (0, n.useEffect)((() => {
            const e = () => {
                v(!1), A(!0)
              },
              a = a => {
                "Escape" === a.code && e()
              };
            return document.addEventListener("click", e), document.addEventListener("keyup", a), () => {
              document.removeEventListener("click", e), document.removeEventListener("keyup", a)
            }
          }), []), (0, n.useEffect)((() => {
            v(!1), A(!0)
          }), [k]), (0, n.useEffect)((() => {
            if (T.current) {
              const {
                current: e
              } = T, a = window.getComputedStyle(e);
              I(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }), [T]), (0, n.useEffect)((() => {
            g(!M || !p)
          }), [p, M]), (0, n.useEffect)((() => {
            $(window.navigator.userAgent.includes("Mac"))
          }), []), (0, n.useEffect)((() => {
            T.current && u(T?.current?.scrollHeight >= e)
          }), [T, e]), (0, n.useEffect)((() => {
            p || (r(-1), c(!1))
          }), [p]), (0, n.useEffect)((() => {
            t && (d || A(!0), i && (o(!1), r(-1)))
          }), [t]), (0, n.useEffect)((() => {
            i && (t && c(!1), d || A(!0))
          }), [i]), null === b ? null : (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsxs)("div", {
              className: [kt.scMenu, p ? kt.navOpen : ""].join(" "),
              "data-logged-in": b,
              "data-mac-browser": P,
              "data-scroll-mode": f,
              ref: T,
              "aria-hidden": !p,
              children: [(0, N.jsx)("button", {
                className: kt.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  z(a)
                },
                onTouchMove: e => {
                  if (0 === B) return;
                  const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(B - a) > 1 && (z(0), v(!1))
                },
                children: (0, N.jsx)("img", {
                  className: kt.dragHandle,
                  src: s(2708),
                  alt: a.formatMessage(Ds.sc_menu_drag_handle)
                })
              }), b ? (0, N.jsx)(gt, {
                sc: w,
                charListHidden: d,
                hideCharacterList: A,
                refCharacterListDesktop: S,
                menuPadding: C,
                longCharList: y,
                setLongCharList: j,
                isMobileMode: M,
                setIsMobileMode: L
              }) : (0, N.jsx)(ot, {
                sc: w,
                navOpen: p
              })]
            }), (0, N.jsx)("div", {
              className: [kt.scOverlay, p ? kt.navOpen : ""].join(" "),
              "data-logged-in": b
            })]
          })
        }), za),
        _t = s(1084),
        pt = s(9314),
        vt = w((e => {
          let {
            setOtherHeaderDropdowns: a
          } = e;
          const s = (0, m.c)(),
            {
              data: t
            } = (0, se.useRockstarUser)(),
            {
              charactersNeeded: c,
              currentCharId: r,
              navOpen: i,
              setNavOpen: o
            } = (0, se.useRockstarUserState)(),
            {
              track: d
            } = (0, se.useGtmTrack)(),
            [l, f] = (0, n.useState)(null),
            [u, g] = (0, n.useState)(!1),
            [k, b] = (0, n.useState)(null),
            [_, p] = (0, n.useState)(!1),
            [v, h] = (0, n.useState)([]);
          (0, n.useEffect)((() => {
            h(t.characters[c] ?? [])
          }), [t, c]);
          const x = (0, n.useCallback)((e => {
            e.stopPropagation(), o(!i), d({
              event: "account_menu_click",
              element_placement: "Account Menu",
              text: i ? "close" : "open"
            })
          }), [i]);
          return (0, n.useEffect)((() => {
            const e = t?.id ?? !1,
              a = e ? (v?.[r]?.mugshotUrl ?? t?.avatar) || _t : pt,
              s = $s(v?.[r]?.platform, "small") ?? null;
            b(s), f(a), g(e), p(!!v?.[r]?.mugshotUrl)
          }), [t, v, r, _t, pt]), (0, N.jsxs)("button", {
            className: "rockstargames-modules-core-feedbackdc519cef2feb621e4715bd3fcdf09791",
            "data-img-set": _,
            "aria-label": s.formatMessage(Ds.sc_menu_toggle),
            type: "button",
            onClick: e => x(e),
            "data-testid": "avaterMenuButton",
            children: [(0, N.jsx)("img", {
              className: "rockstargames-modules-core-feedbackce75eaa6d65692d36b60d31f3f660ff0",
              src: l || "",
              onError: () => {
                f(_t)
              },
              alt: t?.nickname || ""
            }), u && null !== k && (0, N.jsx)("img", {
              className: "rockstargames-modules-core-feedbackaaf21e74a659089f743bb160bdf95046",
              src: k.src,
              alt: k.alt
            }), u && (0, N.jsx)("div", {
              "data-ui-name": "avatar",
              className: "rockstargames-modules-core-feedbackcf6b9e7404c64067bdfef9b79e9eb287",
              "data-platform": v?.[r]?.platform ?? null
            })]
          })
        }), za),
        ht = {
          pillBtn: "rockstargames-modules-core-feedbackb03cc125f63972f13ae84119af852edc",
          selected: "rockstargames-modules-core-feedbackfbcf46d7ef0b32e64b374eee6e3cda3e",
          promoModule: "rockstargames-modules-core-feedbacka586d11bf592ca821d65db7660518322",
          promoModuleImage: "rockstargames-modules-core-feedbackccd749d613ceb73aedb825d77d22cd0b",
          gradient: "rockstargames-modules-core-feedbacke4f178a3d1e3dfef8b42f73eabd9919e",
          promoModuleContentContainer: "rockstargames-modules-core-feedbackd8348a62030f7e2f3c7a53cf67bef0f1",
          left: "rockstargames-modules-core-feedbacke56a5b7d9a696ea8ca340cc9b67998fc",
          right: "rockstargames-modules-core-feedbackc84d09e0c4466d20792d5a9016a00236",
          promoModuleTextContent: "rockstargames-modules-core-feedbackbf34746d222495ab8e30cede8de42d71"
        },
        xt = e => {
          let {
            backgroundColor: a,
            brands: s = [],
            description: t = "",
            ctaLabel: c = "Click here",
            ctaLink: r = "https://rockstargames.com",
            gradient: i = !0,
            image: o,
            imageOrientation: d = "right",
            title: l = ""
          } = e;
          const [m, f] = (0, n.useState)(!1), {
            ref: u,
            inView: g
          } = (0, oe.cD)({
            threshold: .6
          }), {
            track: k
          } = (0, se.useGtmTrack)(), b = {
            "--promo-background": a ?? "var(--black-200)",
            "--promo-image": `url(${(0,G.useGetCdnSource)(o)})` ?? 0,
            "--promo-order": "left" === d ? "row" : "row-reverse"
          };
          return (0, n.useEffect)((() => {
            g && !m && (k({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: "promo module",
              element_placement: "promo module"
            }), f(!0))
          }), [g]), (0, N.jsxs)(aa.q.div, {
            className: ht.promoModule,
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
            ref: u,
            children: [(0, N.jsx)("div", {
              className: [ht.promoModuleImage, i ? ht.gradient : "", "left" === d ? ht.left : ht.right].join(" ")
            }), (0, N.jsxs)("div", {
              className: ht.promoModuleContentContainer,
              children: [(0, N.jsx)(O, {
                brands: s,
                className: ht.promoModuleBrands
              }), (0, N.jsxs)("div", {
                className: ht.promoModuleTextContent,
                children: [l && (0, N.jsx)("h3", {
                  children: l
                }), t && (0, N.jsx)("p", {
                  children: t
                })]
              }), c && (0, N.jsx)(q, {
                to: r,
                text: c,
                onClick: () => {
                  k({
                    event: "cta_other",
                    event_category: "cta",
                    event_action: "other",
                    event_label: c,
                    element_placement: "promo module",
                    link_url: r,
                    text: c
                  })
                }
              })]
            })]
          })
        };
      var yt = s(1532);
      const Nt = {
          rating: "rockstargames-modules-core-feedbacka1271bbed316bf567eb67e78d2143808",
          withDescriptors: "rockstargames-modules-core-feedbackcba248edc2520d3f1ad195a8495dc1f8",
          withOutDescriptors: "rockstargames-modules-core-feedbackff919f7a60b854473b61075a671deb6a",
          text: "rockstargames-modules-core-feedbackd47cd2b7c7415cb44cddef00b1c9b35f"
        },
        jt = (0, d.Os)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      (0, ae.importAll)(s(2884));
      const wt = va(w((e => {
          let {
            descriptors: a = null,
            footer: t = null,
            href: c,
            img: r = null,
            titleSlug: i = null,
            style: o = {},
            className: d
          } = e;
          const [l, f] = (0, n.useState)(!1), {
            inView: u
          } = (0, oe.cD)({
            threshold: .6
          }), [g, k] = (0, n.useState)({
            img_rating: r,
            rating_descriptors: a,
            rating_footer: t,
            url_rating: c
          }), {
            track: b
          } = (0, se.useGtmTrack)(), _ = (0, m.c)(), {
            data: p
          } = (0, E.useQuery)(yt.GameData, {
            variables: {
              titleSlug: i
            },
            skip: !i
          });
          if ((0, n.useEffect)((() => {
              p && k(p?.game)
            }), [p]), (0, n.useEffect)((() => {
              u && !l && g.img_rating && (b({
                event: "page_section_impression",
                event_action: "impression",
                event_category: "page_section",
                event_label: "rating",
                element_placement: "rating"
              }), f(!0))
            }), [u]), !g.img_rating) return null;
          const v = !!g.rating_descriptors;
          return (0, N.jsxs)("div", {
            className: [Nt.rating, v ? Nt.withDescriptors : Nt.withOutDescriptors, d || ""].join(" "),
            style: (0, ae.safeStyles)(o),
            children: [(0, N.jsx)(T, {
              to: g.url_rating,
              target: "_blank",
              children: (0, N.jsx)("img", {
                alt: _.formatMessage(jt.components_ratings_link_alt, {
                  rating: (h = g.img_rating, h.replace(/_/g, " ").split(".")[0].toUpperCase())
                }),
                src: s(0)(`./${g.img_rating}`)
              })
            }), v && (0, N.jsxs)("div", {
              className: Nt.text,
              children: [(0, N.jsx)("p", {
                className: Nt.descriptors,
                dangerouslySetInnerHTML: {
                  __html: g?.rating_descriptors?.split(/<br\s?\/?>/).join(", ") || ""
                }
              }), g.rating_footer && (0, N.jsx)("hr", {}), g.rating_footer && (0, N.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: g.rating_footer.replace(/ \//g, ", ")
                }
              })]
            })]
          });
          var h
        }), za)),
        St = {
          responsiveFlexBox: "rockstargames-modules-core-feedbackcef355ba53827b9ec44655c80b247b2e",
          responsiveFlexItem: "rockstargames-modules-core-feedbacka8f5d10f689c3d40c8378e3ae8a07517",
          responsiveImage: "rockstargames-modules-core-feedbackbee8268780b292e5bc0da0b497e2c28f"
        },
        Ct = e => {
          let {
            children: a,
            className: s,
            style: t
          } = e;
          return (0, N.jsx)("div", {
            className: [St.responsiveFlexBox, void 0 !== s ? s : ""].join(" "),
            style: t,
            children: a
          })
        },
        It = {
          responsiveFlexItem: "rockstargames-modules-core-feedbackae579f6183cf73c897e68c8aae5c9d9d"
        },
        Tt = e => {
          let {
            children: a,
            className: s,
            style: t
          } = e;
          return (0, N.jsx)("div", {
            className: [It.responsiveFlexItem, void 0 !== s ? s : ""].join(" "),
            style: t,
            children: a
          })
        },
        Mt = {
          responsiveGridBox: "rockstargames-modules-core-feedbacka28c0b7a44e1a2d5fb257161ce36a24f",
          responsiveGridItem: "rockstargames-modules-core-feedbackbeddf36313a28976090b5a8b04d2594a"
        },
        Lt = e => {
          let {
            children: a,
            cols: s,
            className: t,
            rows: c,
            style: r
          } = e;
          const i = r ? {
            ...r
          } : {};
          return void 0 !== s && (i.gridTemplateColumns = `repeat(${s}, 1fr)`), void 0 !== c && (i.gridTemplateRows = `repeat(${c}, 1fr)`), (0, N.jsx)("div", {
            className: [Mt.responsiveGridBox, void 0 !== t ? t : ""].join(" "),
            style: i,
            children: a
          })
        },
        Et = {
          responsiveGridBox: "rockstargames-modules-core-feedbacka39e7c7140ada0ab28537c8c901e816f",
          responsiveGridItem: "rockstargames-modules-core-feedbackbe7a0966e2f0457c1172ac9da99020c6"
        },
        Bt = e => {
          let {
            children: a,
            className: s,
            style: t
          } = e;
          return (0, N.jsx)("div", {
            className: [Et.responsiveGridItem, void 0 !== s ? s : ""].join(" "),
            style: t,
            children: a
          })
        },
        zt = {
          responsiveImage: "rockstargames-modules-core-feedbacke31b43dce2e720669fb90bf539d22197"
        },
        Pt = e => {
          let {
            src: a,
            className: s = "",
            animate: t,
            ariaLabel: c,
            style: r = {}
          } = e;
          const [i, o] = (0, ae.usePreloadImg)(a);
          return i ? (r.backgroundImage = `url(${a})`, (0, N.jsx)("div", {
            role: "img",
            "aria-label": c ?? "R* Games",
            className: [zt.responsiveImage, t ? zt.animateBox : "", s].join(" "),
            style: {
              ...r,
              "--aspect-ratio": o.width / o.height
            }
          })) : null
        },
        $t = {
          responsiveSection: "rockstargames-modules-core-feedbackfb7094e43a166c19080ccfe92ed7420d",
          maxWidth: "rockstargames-modules-core-feedbackbdc35dbaa55c59ddd2831fd3ac05c5a7"
        },
        Vt = e => {
          let {
            children: a,
            className: s,
            style: t,
            maxWidth: c
          } = e;
          return (0, N.jsx)("section", {
            className: [$t.responsiveSection, void 0 !== s ? s : ""].join(" "),
            style: t,
            children: c ? (0, N.jsx)("div", {
              className: $t.maxWidth,
              children: a
            }) : a
          })
        },
        Dt = () => (0, N.jsx)(T, {
          className: "rockstargames-modules-core-feedbackba0c20f78999975dfb8d9cff0de44b34",
          alt: "Rockstar Games Home",
          to: "/"
        }),
        At = () => {
          const {
            pathname: e
          } = (0, Ba.IT)();
          return (0, n.useEffect)((() => {
            window.scrollTo(0, 0)
          }), [e]), null
        },
        Ot = (0, n.forwardRef)(((e, a) => {
          const {
            threshold: s,
            callback: t,
            children: c,
            requireUser: r
          } = e, {
            track: i
          } = (0, se.useGtmTrack)(r), [o, d] = (0, n.useState)(a?.current);
          return (0, n.useEffect)((() => {
            a?.current && d(a.current)
          }), [a]), ((e, a, s) => {
            const [t, c] = (0, n.useState)({
              scrollDepths: e,
              scrollY: 0
            }), {
              scrollDepths: r,
              scrollY: i
            } = t;
            (0, n.useEffect)((() => {
              "undefined" != typeof window && 0 !== window.pageYOffset && c((e => ({
                ...e,
                scrollY: window.pageYOffset
              })))
            }), []), (0, n.useEffect)((() => {
              c({
                scrollDepths: e,
                scrollY: 0
              })
            }), [window.location.pathname]);
            const o = (0, n.useCallback)((() => {
              const e = document.documentElement,
                i = document.body,
                n = s?.scrollTop || e.scrollTop || i.scrollTop,
                d = s?.scrollHeight || e.scrollHeight || i.scrollHeight,
                {
                  clientHeight: l
                } = e,
                m = n / (d - l) * 100;
              if (r) {
                const e = Math.min(...r, d);
                if (m >= e) {
                  const t = r.filter((a => a !== e));
                  0 === t.length && (s ?? window).removeEventListener("scroll", o), a && a({
                    scrollY: e,
                    scrollPercent: m,
                    remainingDepths: t
                  }), c({
                    scrollY: e,
                    scrollDepths: t
                  })
                }
              } else c({
                ...t,
                scrollY: m
              })
            }), [r, s, a]);
            (0, n.useEffect)((() => {
              if ("undefined" == typeof window) return;
              const e = s ?? window;
              return e.addEventListener("scroll", o), () => e.removeEventListener("scroll", o)
            }), [o])
          })(s, (e => {
            let {
              scrollY: a
            } = e;
            i({
              event: "page_scroll",
              event_category: "page_scroll",
              event_action: a,
              scroll_depth: a
            }), "function" == typeof t && t(a)
          }), o), c
        })),
        Ft = (0, ae.withTranslations)((e => {
          let {
            t: a
          } = e;
          const [s] = (0, n.useState)(""), t = (0, Ba.i6)(), c = (0, E.useMutateState)();
          return (0, N.jsxs)("form", {
            action: "#",
            className: "rockstargames-modules-core-feedbackb82052ce07e004075e77261c373bfc50",
            onSubmit: e => {
              e.preventDefault(), c({
                navOpen: !1
              }), document.activeElement?.blur(), t(`/search?q=${e.target.q.value}`)
            },
            role: "search",
            children: [(0, N.jsx)("button", {
              type: "submit",
              role: "button",
              title: "Submit"
            }), (0, N.jsx)("input", {
              autoComplete: "off",
              defaultValue: s,
              enterKeyHint: "search",
              name: "q",
              placeholder: a("Search Rockstar Games")
            })]
          })
        })),
        Rt = {
          skeleton: "rockstargames-modules-core-feedbackf963a1ae95f7f5ac2c5192c3f357b6dc",
          pulse: "rockstargames-modules-core-feedbacke00ed88d692bbfc1a301dcfc61a077a9",
          gen9Hero: "rockstargames-modules-core-feedbackdb0b80177710d337d93bddb97b8a7dea"
        },
        Gt = e => {
          let {
            skeleton: a
          } = e;
          return a ? (0, N.jsx)("div", {
            className: [Rt.skeleton, Rt[a]].join(" ")
          }) : null
        },
        Ht = (0, d.Os)({
          components_track_list_title: {
            id: "components_track_list_title",
            defaultMessage: "Tracklist"
          }
        }),
        Ut = {
          bodySmall: "rockstargames-modules-core-feedbackc048aacaedc7fb642f38c7f163c193e3"
        },
        Wt = e => {
          let {
            track: a,
            artist: s
          } = e;
          return (0, N.jsxs)("div", {
            className: Ut.track,
            children: [(0, N.jsx)("p", {
              children: a
            }), (0, N.jsx)("p", {
              className: Ut.bodySmall,
              children: s
            })]
          })
        },
        qt = w((e => {
          let {
            children: a
          } = e;
          return (0, N.jsxs)("div", {
            className: "rockstargames-modules-core-feedbacke6c19f2cdd68a4352e248a8324383aa2",
            children: [(0, N.jsx)("h4", {
              className: "rockstargames-modules-core-feedbackcd3895fbae93ba04f1401487f6e6eddf",
              children: (0, N.jsx)(l.c, {
                ...Ht.components_track_list_title
              })
            }), (0, N.jsx)("div", {
              className: "rockstargames-modules-core-feedbackef0cde8b15ded961605237d0e8328a9b",
              children: (0, N.jsx)("div", {
                className: "rockstargames-modules-core-feedbackbdd54186db17d27b3daebc4b9d58e09a",
                children: n.Children.map(n.Children.toArray(a), (e => (0, N.jsx)(Wt, {
                  ...e?.props
                })))
              })
            })]
          })
        }), za),
        Xt = "rockstargames-modules-core-feedbackeca98eb0b5b84a0c9a2e6d952545a2d5",
        Kt = "rockstargames-modules-core-feedbackd3d0b4ecd3bddba96c73f49fcca34ed8",
        Yt = {
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
        Qt = e => {
          let {
            title: a = "thumbnail gallery",
            thumbsPerView: s = 3,
            loop: t = !1,
            navigation: c = !1,
            slideChildren: r = [],
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
            track: d
          } = (0, se.useGtmTrack)(), [l, m] = (0, n.useState)([_a.O4, _a.Hj, _a.eM]), [f, u] = (0, n.useState)(null), [g, k] = (0, n.useState)(null);
          return (0, n.useEffect)((() => {
            const e = [_a.O4, _a.Hj, _a.eM];
            c && e.push(_a._2), m(e)
          }), [c]), (0, n.useEffect)((() => {
            if (!r) return;
            const e = r.map(((e, a) => (0, N.jsx)(K.Ky, {
              children: e
            }, Symbol(a).toString())));
            k(e)
          }), [r]), g ? (0, N.jsxs)(aa.q.div, {
            className: "rockstargames-modules-core-feedbackd4f245838b94234f21463a08a8112910",
            variants: i.parent,
            transition: o.parent,
            initial: "initial",
            animate: "animate",
            children: [(0, N.jsx)(aa.q.div, {
              className: Xt,
              variants: i.main,
              transition: o.main,
              initial: "initial",
              animate: "animate",
              children: (0, N.jsx)(K.wx, {
                loop: t,
                navigation: c,
                pagination: {
                  clickable: !0
                },
                thumbs: {
                  swiper: f
                },
                modules: l,
                breakpoints: Yt,
                className: Xt,
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
                children: g
              })
            }), (0, N.jsx)(aa.q.div, {
              className: Kt,
              variants: i.thumbs,
              transition: o.thumbs,
              initial: "initial",
              animate: "animate",
              children: (0, N.jsx)(K.wx, {
                threshold: 50,
                onSwiper: u,
                loop: t,
                breakpoints: Yt,
                slidesPerView: s,
                freeMode: !0,
                watchSlidesProgress: !0,
                modules: l,
                className: Kt,
                children: g
              })
            })]
          }) : null
        };
      var Zt = s(504);
      const Jt = e => {
          let {
            id: a = null,
            ids: s = null,
            setTitleDataPath: t = null,
            sync: c = !1
          } = e;
          const r = s ?? [a],
            {
              data: i
            } = (0, E.useQuery)(Zt.TinaModulesInfo, {
              variables: {
                ids: r,
                sync: c
              },
              setTitleDataPath: t,
              skip: !r.length
            });
          return i?.tinaModulesInfo ?? null
        },
        ec = va((e => {
          let {
            components: a = {},
            id: s = null,
            ids: t = null,
            skeleton: c
          } = e;
          const r = Jt({
            id: s,
            ids: t
          });
          if (!r) return (0, N.jsx)(Gt, {
            skeleton: c
          });
          const i = r?.[0]?.tina;
          return i ? (0, N.jsx)(N.Fragment, {
            children: r.map(((e, s) => {
              let {
                tina: t
              } = e;
              return (0, N.jsx)(G.TinaParser, {
                components: a,
                tina: t,
                componentProps: {
                  tinaModulesInfo: r
                }
              }, s)
            }))
          }) : null
        })),
        ac = e => {
          let {
            children: a,
            style: s,
            theme: t
          } = e;
          const [c, r] = (0, n.useState)(t);
          return (0, n.useEffect)((() => {
            t && r(t)
          }), [t]), (0, N.jsx)("div", {
            className: "rockstargames-modules-core-feedbacka3cc68ab0d512c3d8835ee9abb7a51c4",
            style: s,
            "data-theme": c,
            children: a
          })
        };
      var sc = s(9168);
      const tc = {
          pillBtn: "rockstargames-modules-core-feedbackae56f3a5bf16f1160a0cbc040c7611fa",
          selected: "rockstargames-modules-core-feedbackd7e34a082f54f22035320df51e8b4ed9",
          userVote: "rockstargames-modules-core-feedbackfd538df1ac730062880ff9ca1292dcc4",
          info: "rockstargames-modules-core-feedbackdd49c22b2bd842d7e8c11ac45b3a536b",
          voteContent: "rockstargames-modules-core-feedbackeb3c4c0d7629a1182cd138d3d2e6e081",
          loggedOutButtons: "rockstargames-modules-core-feedbackd00b4195df0f175083f6aa2a7d847d72",
          voteButtons: "rockstargames-modules-core-feedbackfdd10a481e3da0f8e9511b6a577052e0",
          downVote: "rockstargames-modules-core-feedbackabdbb2656b0080d66eb4d39b7e1eb38d",
          upVote: "rockstargames-modules-core-feedbackea25ed07e937e2efdce0b99d076fbbe1",
          voteButtonActive: "rockstargames-modules-core-feedbackc31731d09d8118c6a82fe6edb193dc50"
        },
        cc = e => {
          let {
            description: a,
            foreign_id: s = document.location.pathname,
            foreign_type: t = "url",
            title: c
          } = e;
          const {
            track: r
          } = (0, se.useGtmTrack)(), {
            loggedIn: i
          } = (0, se.useRockstarUser)(), {
            refetch: o
          } = (0, E.useQuery)(sc.UserGetVote, {
            skip: !0
          }), [d] = (0, E.useMutation)(sc.UserCastVote), [l, m] = (0, n.useState)(null), f = (0, n.useCallback)((async e => {
            r({
              event_action: l ? "like" : "dislike",
              event_category: "cta",
              event: "cta_" + (e ? "like" : "dislike"),
              event_label: s
            });
            const a = {
                foreign_id: s,
                foreign_type: t,
                vote: e
              },
              c = await d({
                variables: a
              });
            m(c?.data?.userCastVote?.vote ?? null)
          }), [s, t]);
          return (0, n.useEffect)((() => {
            (async () => {
              if (!i || !s || !t) return;
              const e = await o({
                foreign_id: s,
                foreign_type: t
              });
              m(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [s, t, i]), (0, N.jsx)("div", {
            className: tc.userVote,
            children: (0, N.jsxs)("div", {
              className: tc.voteContent,
              children: [(0, N.jsxs)("div", {
                className: tc.info,
                children: [(0, N.jsx)("h3", {
                  children: c
                }), (0, N.jsx)("p", {
                  children: a
                })]
              }), (0, N.jsxs)("div", {
                className: [tc.voteButtons, i ? "" : tc.loggedOutButtons].join(" "),
                children: [(0, N.jsx)("button", {
                  onClick: () => f(!0),
                  className: [tc.upVote, l ? tc.voteButtonActive : ""].join(" "),
                  type: "button",
                  "aria-label": "Vote up"
                }), (0, N.jsx)("button", {
                  className: [tc.downVote, !1 === l ? tc.voteButtonActive : ""].join(" "),
                  onClick: () => f(!1),
                  type: "button",
                  "aria-label": "Vote down"
                })]
              })]
            })
          })
        },
        rc = {
          carousel: "rockstargames-modules-core-feedbackd8e71d378f6d4a968e8ac7d621e5f32a",
          text: "rockstargames-modules-core-feedbacka3f73d86b98d36a296bf8f621f1c340f",
          info: "rockstargames-modules-core-feedbackf46d7fc75c302b1d3f4db01d8572bea8",
          active: "rockstargames-modules-core-feedbackd26d1267cc02f841fee8a874d679aebd",
          title: "rockstargames-modules-core-feedbacka879dfc151f7cf8da6bf5642b51436bb",
          gameTitle: "rockstargames-modules-core-feedbackb42d96124219141b4dbb454131b8c37b",
          videoTitle: "rockstargames-modules-core-feedbackc5ff8983fae65d6a3d7c741360bd3606",
          cta: "rockstargames-modules-core-feedbacke25e320fda75ce4076c9fe68b540a2fa",
          track: "rockstargames-modules-core-feedbackdd0d39c46df512d3eff8ba48e469af0a",
          disableClick: "rockstargames-modules-core-feedbackb169e1b67f64de28605dd5056a740584",
          items: "rockstargames-modules-core-feedbackdddc42d4babcaec339a7c1bd04420e6e",
          dragging: "rockstargames-modules-core-feedbacka7313e3ff4e99b5313f8698890d0dd8c",
          dots: "rockstargames-modules-core-feedbacke1d7433489996eb9fa890d452ebcb042"
        },
        ic = (0, ae.withLocale)((e => {
          let {
            locale: a,
            t: s,
            videos: t
          } = e;
          const {
            setBodyIsScrollable: c
          } = (0, ae.useBodyScrollable)(), [r, i] = (0, n.useState)(0), [o, d] = (0, n.useState)(0), l = (0, n.useRef)(null), m = (0, n.useRef)(null);
          return (0, n.useEffect)((() => {
            if (!l.current || m.current) return;
            const e = new(L())(l.current);
            e.get("press").set({
              time: 0
            }), e.get("tap").set({
              time: 150
            });
            const a = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
              s = () => {
                i(r - 1 < 0 ? 0 : r - 1), d(0)
              },
              o = () => {
                const e = r + 1 >= t.length - 1 ? t.length - 1 : r + 1;
                i(e), d(0)
              },
              n = e => {
                d(e.isFinal ? 0 : e.deltaX), "panleft" !== e.additionalEvent && "panright" !== e.additionalEvent || !m.current?.classList.contains(rc.dragging) || a() && c(!1)
              },
              f = () => {
                a() && c(!0), d(0)
              },
              u = e => {
                "press" === e.type && l.current?.classList.add(`${rc.disableClick}`), "tap" === e.type && (l.current?.classList.remove(`${rc.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
              },
              g = () => {
                a() && c(!0), l.current && l.current.classList.remove(`${rc.disableClick}`)
              },
              k = () => {
                a() && c(!0)
              };
            return m.current.addEventListener("transitionend", k), e.on("swiperight", s), e.on("swipeleft", o), e.on("pan", n), e.on("panend", f), e.on("press tap", u), e.on("pressup", g), () => {
              e.off("swiperight", s), e.off("swipeleft", o), e.off("pan", n), e.off("panend", f), e.off("press tap", u), e.off("pressup", g), m.current && m.current.removeEventListener("transitionend", k), d(0)
            }
          }), [l.current, r]), (0, N.jsxs)("section", {
            className: rc.carousel,
            children: [(0, N.jsx)("div", {
              className: rc.track,
              ref: l,
              children: (0, N.jsx)("div", {
                className: `${rc.items} ${0!==o?rc.dragging:""}`,
                ref: m,
                style: {
                  transform: `translateX(calc(-${100*r}% + ${o}px))`
                },
                children: t.map(((e, a) => (0, N.jsx)(T, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through screencap",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  className: r === a ? rc.active : "",
                  role: "link",
                  title: e.title,
                  tabIndex: r === a ? 0 : -1,
                  children: (0, N.jsx)(fc, {
                    video: e,
                    size: 1280
                  })
                }, e.id)))
              })
            }), (0, N.jsxs)("footer", {
              children: [(0, N.jsx)("div", {
                className: rc.text,
                children: t.map(((e, t) => (0, N.jsx)(T, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through footer",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  role: "link",
                  title: e.title,
                  tabIndex: r === t ? 0 : -1,
                  children: (0, N.jsxs)("div", {
                    className: [rc.info, t === r ? rc.active : ""].join(" "),
                    children: [(0, N.jsxs)("div", {
                      className: rc.title,
                      children: [(0, N.jsx)("div", {
                        className: rc.gameTitle,
                        children: `${e.game.title}${"fr_fr"===a?" ":""}`
                      }), (0, N.jsx)("h2", {
                        className: rc.videoTitle,
                        children: `${e.title}`
                      })]
                    }), (0, N.jsx)(R, {
                      className: rc.cta,
                      children: s("Watch Now")
                    })]
                  })
                }, e.id)))
              }), (0, N.jsx)("div", {
                className: rc.dots,
                children: t.map(((e, a) => (0, N.jsx)("button", {
                  "aria-label": `Slide ${a+1}`,
                  "data-gtm-category": "Marquee",
                  "data-gtm-action": "Dot click",
                  "data-gtm-label": `Dot clicked to ${a}`,
                  onClick: () => i(a),
                  className: r === a ? rc.active : "",
                  type: "button"
                }, e.id)))
              })]
            })]
          })
        })),
        oc = (0, d.Os)({
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
        nc = {
          videoList: "rockstargames-modules-core-feedbacka77794780421c410f7ea55ed11ae6340",
          sectionHeader: "rockstargames-modules-core-feedbacked556e2220733d99eae5df36ba41f9c7",
          arrowNav: "rockstargames-modules-core-feedbackffeb6a2e829d49f94fea4ee7f5a0d2c8",
          items: "rockstargames-modules-core-feedbackffe2263cdad39631ef304714ba89465d",
          trackWrapper: "rockstargames-modules-core-feedbackcbdef484a85e8f352a06609b394d4da7",
          track: "rockstargames-modules-core-feedbackf3f263effe27f3c21f2ab822b9ee5dcf",
          dragging: "rockstargames-modules-core-feedbackc20488bcdf3f23bdf0c6c5b283ae08f4",
          arrow: "rockstargames-modules-core-feedbackc8012415449630a832011f490b9d2b72",
          previous: "rockstargames-modules-core-feedbackf30d899a31937a4cf395643951224469",
          next: "rockstargames-modules-core-feedbackd9d5a85633fc0f0b7f98219d735e6e05",
          disabled: "rockstargames-modules-core-feedbackc806076a1e3e23c77528ee12e32771a3"
        },
        dc = w((e => {
          let {
            vids: a,
            games: s,
            title: t,
            gameTitleNecessary: c
          } = e;
          const r = (0, m.c)(),
            i = void 0 !== s ? "games" : "videos",
            o = "videos" === i ? a : s.results,
            d = (0, n.useRef)(null),
            [l, f] = (0, n.useState)(0),
            [u, g] = (0, n.useState)(0),
            k = e => {
              const a = Math.ceil(o.length / l);
              let s = e;
              s < 0 ? s = 0 : s >= a - 1 && (s = a - 1), g(s)
            },
            [b, _] = (0, n.useState)(0);
          let p;
          return (0, n.useEffect)((() => {
            const e = () => {
              const e = e => window.matchMedia(`(max-width: ${e})`).matches;
              let a = 4;
              e("768px") ? a = 1 : e("990px") || e("1440px") ? a = 2 : e("1920px") && (a = 3), f(a)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [l]), (0, n.useEffect)((() => {
            if (d.current) {
              const e = new(L())(d.current),
                a = () => {
                  k(u - 1), _(0)
                },
                s = () => {
                  k(u + 1), _(0)
                },
                t = e => {
                  _(e.isFinal ? 0 : e.deltaX)
                },
                c = () => {
                  _(0)
                };
              return e.on("swiperight", a), e.on("swipeleft", s), e.on("pan", t), e.on("panend", c), () => {
                e.off("swiperight", a), e.off("swipeleft", s), e.off("pan", t), e.off("panend", c), _(0)
              }
            }
            return {}
          }), [d.current, u]), p = "games" === i ? (0, N.jsx)(N.Fragment, {
            children: s.results.map((e => (0, N.jsx)(ga, {
              game: e,
              dontOverrideTo: !0,
              to: `/videos?type=game&gameId=${e.id}`
            }, e.id)))
          }) : (0, N.jsx)(N.Fragment, {
            children: a.map((e => (0, N.jsx)(uc, {
              video: e,
              gameTitleNecessary: c
            }, e.id)))
          }), (0, N.jsxs)("section", {
            className: nc.videoList,
            children: [(0, N.jsxs)("h3", {
              className: nc.sectionHeader,
              children: [t, (0, N.jsxs)("div", {
                className: nc.arrowNav,
                children: [(0, N.jsx)("button", {
                  className: [nc.arrow, nc.previous, 0 === u ? nc.disabled : ""].join(" "),
                  onClick: () => k(u - 1),
                  type: "button",
                  "aria-label": `${0===u?r.formatMessage(oc.disabled_label)+", ":""}${r.formatMessage(oc.previous_button_label)}`
                }), (0, N.jsx)("button", {
                  className: [nc.arrow, nc.next, u === Math.ceil(o.length / l) - 1 ? nc.disabled : ""].join(" "),
                  onClick: () => k(u + 1),
                  type: "button",
                  "aria-label": `${u===Math.ceil(o.length/l)-1?r.formatMessage(oc.disabled_label)+", ":""}${r.formatMessage(oc.next_button_label)}`
                })]
              })]
            }), (0, N.jsx)("div", {
              className: nc.items,
              children: (0, N.jsx)("div", {
                className: nc.trackWrapper,
                children: (0, N.jsx)("div", {
                  className: [nc.track, 0 !== b ? nc.dragging : ""].join(" "),
                  ref: d,
                  style: {
                    transform: `translateX(calc(-${100*u}% + ${b}px - (var(--standard-grid-gap) * ${u}))`,
                    gridAutoColumns: `calc(100 / ${l} * 1% - calc(var(--standard-grid-gap) * (${l-1}/${l}))`
                  },
                  children: p
                })
              })
            })]
          })
        }), za),
        lc = (0, ae.withTranslations)((e => {
          let {
            error: a,
            t: s,
            domain: t = ""
          } = e;
          console.error({
            error: a
          });
          let c = a?.message ?? s("error-404-new");
          c = s("error-404-new");
          const r = a?.code ?? 398,
            i = (0, n.useRef)(null);
          return (0, n.useEffect)((() => {
            i && i?.current && i.current.focus()
          }), [i]), (0, N.jsxs)("div", {
            className: "rockstargames-modules-core-feedbackd988ce20c420c26fc5e455279bf94cb9",
            children: [(0, N.jsx)("h3", {
              tabIndex: -1,
              ref: i,
              children: `${c} (${r})`
            }), (0, N.jsx)(T, {
              to: "/",
              children: s("Home")
            }), "clr" !== t && (0, N.jsx)(Ft, {})]
          })
        })),
        mc = {
          videoPreview: "rockstargames-modules-core-feedbackc6739cc628fda235abe2bafeb30ad7cf",
          card: "rockstargames-modules-core-feedbackec6e68ffa1188155be202dfef3f92829",
          info: "rockstargames-modules-core-feedbackab8da127fbcdb98f874bc3f1377669a2",
          title: "rockstargames-modules-core-feedbacke84fa4b2b140994c96a13607410d30a3",
          screencap: "rockstargames-modules-core-feedbacka322c3d2275cedd594a3b17800154066",
          screencapLoaded: "rockstargames-modules-core-feedbackf68c57f5459778024e5a98918ae61ab2",
          gameTitle: "rockstargames-modules-core-feedbackdebff452a4923aded7de826c081bab5d"
        },
        fc = e => {
          let {
            video: a,
            size: s = 640
          } = e;
          const t = `${a.screencap}?im=Resize=${s}`,
            [c] = (0, ae.usePreloadImg)(t);
          return (0, N.jsx)("div", {
            className: [mc.screencap, c ? mc.screencapLoaded : ""].join(" "),
            style: {
              background: `url(${t}) center/cover`
            }
          })
        },
        uc = e => {
          let {
            gameTitleNecessary: a = !0,
            openInNewWindow: s = !1,
            video: t,
            size: c,
            toExplicit: r
          } = e;
          const i = r ?? `/videos/${t.id}`,
            o = {
              className: mc.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": i
            },
            n = (0, N.jsxs)("div", {
              className: mc.card,
              children: [(0, N.jsx)(fc, {
                video: t,
                size: c
              }), (0, N.jsxs)("div", {
                className: mc.info,
                children: [a ? (0, N.jsx)("div", {
                  className: mc.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: t.game.title
                  }
                }) : "", (0, N.jsx)("h5", {
                  className: mc.title,
                  dangerouslySetInnerHTML: {
                    __html: t.title
                  }
                })]
              })]
            });
          return s ? (0, N.jsx)("a", {
            href: i,
            target: "_blank",
            ...o,
            children: n
          }) : (0, N.jsx)(T, {
            to: i,
            ...o,
            children: n
          })
        };
      class gc extends n.Component {
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
          return null !== this.state.error.code ? (0, N.jsx)(lc, {
            error: this.state.error
          }) : this.props.children
        }
      }
      const kc = function(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return function(s) {
          return (0, N.jsx)(gc, {
            header: a,
            children: (0, N.jsx)(e, {
              ...s
            })
          })
        }
      };
      var bc = s(1267),
        _c = s(688),
        pc = s(8016);
      const vc = (0, n.forwardRef)(((e, a) => {
          const {
            children: s,
            tag: t = "div"
          } = e, c = bc.m[t];
          return (0, N.jsx)(_c.O, {
            features: pc.i,
            children: (0, N.jsx)(c, {
              ref: a,
              ...e,
              children: s
            })
          })
        })),
        hc = {
          visible: {
            opacity: 1
          },
          hidden: {
            opacity: 0
          }
        },
        xc = {
          ease: "easeIn",
          duration: .4
        },
        yc = e => {
          let {
            children: a
          } = e;
          return (0, N.jsx)(aa.q.div, Object.assign({
            className: "rockstargames-modules-core-feedbackf0ee4e641f1ac92151be887c9ebb8392",
            variants: hc,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: xc
          }, {
            children: a
          }))
        },
        Nc = e => a => (0, N.jsx)(yc, {
          children: (0, N.jsx)(e, Object.assign({}, a))
        }),
        jc = {
          visible: {
            opacity: 1,
            y: 0
          },
          hidden: {
            opacity: 0,
            y: 40
          }
        },
        wc = {
          ease: "easeIn",
          duration: .75
        },
        Sc = e => {
          let {
            children: a
          } = e;
          return (0, N.jsx)(aa.q.div, {
            className: "rockstargames-modules-core-feedbacka479a10c5475b17a0564b60fecf98c8b",
            variants: jc,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: wc,
            children: a
          })
        },
        Cc = e => a => (0, N.jsx)(Sc, {
          children: (0, N.jsx)(e, {
            ...a
          })
        }),
        Ic = {
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
        Tc = {
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
        Mc = function() {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "collapsed";
          return Tc[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "imageMask"][e]
        };
      var Lc = s(544);
      const Ec = JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[300,300,0]},"a":{"k":[0,0,0]},"s":{"k":[244,244,100]}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"k":[100,100]},"p":{"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"tm","s":{"k":[{"i":{"x":[0.439],"y":[1.016]},"o":{"x":[0.561],"y":[0.015]},"n":["0p439_1p016_0p561_0p015"],"t":5,"s":[100],"e":[0]},{"t":33.0000013441176}],"ix":1},"e":{"k":[{"i":{"x":[0.439],"y":[1.017]},"o":{"x":[0.561],"y":[0.016]},"n":["0p439_1p017_0p561_0p016"],"t":0,"s":[100],"e":[0]},{"t":30.0000012219251}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"},{"ty":"st","fillEnabled":true,"c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":16},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"}],"ip":0,"op":900.000036657751,"st":0,"bm":0,"sr":1}],"v":"4.5.3","ddd":0,"ip":1.00000004073083,"op":33.0000013441175,"fr":29.9700012207031,"w":600,"h":600}'),
        Bc = JSON.parse('{"v":"5.7.3","fr":60,"ip":0,"op":64,"w":300,"h":300,"nm":"Dot_Loading","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"center","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":10,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":22,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":34,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.667,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"right","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":5,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":17,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":29,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.333,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":12,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":24,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0}],"markers":[]}'),
        zc = {
          SPINNING: "spinning",
          THREE_DOTS: "threeDots"
        },
        Pc = e => {
          let a, {
            type: s = zc.SPINNING
          } = e;
          switch (s) {
            case zc.THREE_DOTS:
              a = Bc;
              break;
            case zc.SPINNING:
            default:
              a = Ec
          }
          return (0, N.jsx)(Lc.c, {
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

      function c(e, a) {
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
          definitions: [c(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var r = t[a] || new Set,
          i = new Set,
          o = new Set;
        for (r.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var n = o;
          o = new Set, n.forEach((function(e) {
            i.has(e) || (i.add(e), (t[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var t = c(e, a);
          t && s.definitions.push(t)
        })), s
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

      function c(e, a) {
        for (var s = 0; s < e.definitions.length; s++) {
          var t = e.definitions[s];
          if (t.name && t.name.value == a) return t
        }
      }

      function r(e, a) {
        var s = {
          kind: e.kind,
          definitions: [c(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var r = t[a] || new Set,
          i = new Set,
          o = new Set;
        for (r.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var n = o;
          o = new Set, n.forEach((function(e) {
            i.has(e) || (i.add(e), (t[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var t = c(e, a);
          t && s.definitions.push(t)
        })), s
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), t[e.name.value] = a
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

      function c(e, a) {
        for (var s = 0; s < e.definitions.length; s++) {
          var t = e.definitions[s];
          if (t.name && t.name.value == a) return t
        }
      }

      function r(e, a) {
        var s = {
          kind: e.kind,
          definitions: [c(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var r = t[a] || new Set,
          i = new Set,
          o = new Set;
        for (r.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var n = o;
          o = new Set, n.forEach((function(e) {
            i.has(e) || (i.add(e), (t[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var t = c(e, a);
          t && s.definitions.push(t)
        })), s
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), t[e.name.value] = a
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

      function c(e, a) {
        for (var s = 0; s < e.definitions.length; s++) {
          var t = e.definitions[s];
          if (t.name && t.name.value == a) return t
        }
      }

      function r(e, a) {
        var s = {
          kind: e.kind,
          definitions: [c(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var r = t[a] || new Set,
          i = new Set,
          o = new Set;
        for (r.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var n = o;
          o = new Set, n.forEach((function(e) {
            i.has(e) || (i.add(e), (t[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var t = c(e, a);
          t && s.definitions.push(t)
        })), s
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), t[e.name.value] = a
        }
      })), e.exports = a, e.exports.UserGetVote = r(a, "UserGetVote"), e.exports.UserCastVote = r(a, "UserCastVote")
    },
    5492: (e, a, s) => {
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
      var c = {};

      function r(e) {
        return e.filter((function(e) {
          if ("FragmentDefinition" !== e.kind) return !0;
          var a = e.name.value;
          return !c[a] && (c[a] = !0, !0)
        }))
      }

      function i(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          i(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          i(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          i(e, a)
        }))
      }
      t.definitions = t.definitions.concat(r(s(3784).definitions)), t.definitions = t.definitions.concat(r(s(8540).definitions));
      var o = {};

      function n(e, a) {
        for (var s = 0; s < e.definitions.length; s++) {
          var t = e.definitions[s];
          if (t.name && t.name.value == a) return t
        }
      }
      t.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          i(e, a), o[e.name.value] = a
        }
      })), e.exports = t, e.exports.NewswireList = function(e, a) {
        var s = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var t = o[a] || new Set,
          c = new Set,
          r = new Set;
        for (t.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var i = r;
          r = new Set, i.forEach((function(e) {
            c.has(e) || (c.add(e), (o[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return c.forEach((function(a) {
          var t = n(e, a);
          t && s.definitions.push(t)
        })), s
      }(t, "NewswireList")
    },
    3892: (e, a, s) => {
      var t = {
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

      function c(e) {
        var a = r(e);
        return s(a)
      }

      function r(e) {
        if (!s.o(t, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return t[e]
      }
      c.keys = function() {
        return Object.keys(t)
      }, c.resolve = r, e.exports = c, c.id = 3892
    },
    2884: (e, a, s) => {
      var t = {
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

      function c(e) {
        var a = r(e);
        return s(a)
      }

      function r(e) {
        if (!s.o(t, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return t[e]
      }
      c.keys = function() {
        return Object.keys(t)
      }, c.resolve = r, e.exports = c, c.id = 2884
    },
    0: (e, a, s) => {
      var t = {
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

      function c(e) {
        var a = r(e);
        return s(a)
      }

      function r(e) {
        if (!s.o(t, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return t[e]
      }
      c.keys = function() {
        return Object.keys(t)
      }, c.resolve = r, e.exports = c, c.id = 0
    },
    6572: (e, a, s) => {
      var t = {
        "./bounty.png": 752,
        "./collector.png": 56,
        "./moonshiner.png": 1444,
        "./naturalist.png": 3268,
        "./trader.png": 4688
      };

      function c(e) {
        var a = r(e);
        return s(a)
      }

      function r(e) {
        if (!s.o(t, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return t[e]
      }
      c.keys = function() {
        return Object.keys(t)
      }, c.resolve = r, e.exports = c, c.id = 6572
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
//# sourceMappingURL=2be10e7906367c0ef593e7add33f9abf.js.map