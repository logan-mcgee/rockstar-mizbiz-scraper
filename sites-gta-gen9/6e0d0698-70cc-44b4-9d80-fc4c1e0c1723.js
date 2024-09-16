! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "6e0d0698-70cc-44b4-9d80-fc4c1e0c1723", e._sentryDebugIdIdentifier = "sentry-dbid-6e0d0698-70cc-44b4-9d80-fc4c1e0c1723")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [5490], {
    14522: (e, a, t) => {
      "use strict";
      t.d(a, {
        H: () => l,
        r: () => o
      });
      var s = t(71403),
        r = t(49948),
        n = t(40207),
        i = t(46632);
      const c = e => {
          let {
            impressionTracking: a,
            gtm: t = {},
            children: s
          } = e;
          return a?.shouldTrack ? (0, i.jsx)(l, {
            threshold: a?.threshold,
            gtm: t,
            children: s
          }) : s
        },
        o = (e, a) => t => ((e, a, t) => (0, i.jsx)(c, {
          impressionTracking: t?.impressionTracking,
          gtm: t?.gtm,
          children: (0, i.jsx)(e, {
            ...a
          })
        }))(e, t, a),
        d = {
          event: "page_section_impression",
          element_placement: null
        },
        l = e => {
          let {
            threshold: a = .6,
            children: t,
            gtm: c = {}
          } = e;
          const {
            track: o
          } = (0, n.useGtmTrack)(), {
            ref: l,
            inView: g
          } = (0, r.useInView)({
            threshold: a,
            trackVisibility: !0,
            delay: 100
          }), [m, f] = (0, s.useState)(!1);
          return (0, s.useEffect)((() => {
            g && !m && (o({
              ...d,
              ...c
            }), f(!0))
          }), [g, l]), (0, i.jsx)("section", {
            ref: l,
            children: t
          })
        }
    },
    26889: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => v
      });
      var s = t(71403),
        r = t(26040),
        n = t(75638);
      const i = (e, a) => {
        const t = e.tiers && e.tiers.every((e => e.isComplete)),
          s = a.tiers && a.tiers.every((e => e.isComplete));
        return t && !s ? 1 : !t && s ? -1 : 0
      };
      var c = t(96717);
      const o = (0, c.defineMessages)({
        pl_card_badge_content_complete: {
          id: "pl_card_badge_content_complete",
          defaultMessage: "Complete"
        }
      });
      var d = t(89779),
        l = t(40207),
        g = t(42756);
      const m = {
        pillBtn: "rockstargames-sites-gta-gen9e6891f053f06919f1ef0dc72cafe9ae7",
        selected: "rockstargames-sites-gta-gen9e5cce3088e494e8ddb9b0cf5528697a3",
        packCardTierIndicator: "rockstargames-sites-gta-gen9eee874b61946e2a65886d622445e1c38",
        tierIndicator: "rockstargames-sites-gta-gen9bf9ed66cb83cf9a38bfc6fbb8e105fb7",
        active: "rockstargames-sites-gta-gen9cfa711252c08391d3a0f1ecd8728a61a"
      };
      var f = t(46632);
      const u = e => {
          let {
            tiers: a
          } = e;
          return (0, f.jsx)("div", {
            className: m.packCardTierIndicator,
            children: a?.map(((e, a) => (0, f.jsx)("div", {
              className: [m.tierIndicator, e.isComplete ? m.active : ""].join(" ")
            }, a)))
          })
        },
        p = {
          pillBtn: "rockstargames-sites-gta-gen9e2e4b892ddcbdb2e09d3c3599a7e6c56",
          selected: "rockstargames-sites-gta-gen9ff5c3c023fc12b68c6bf92b560c479b1",
          packCard: "rockstargames-sites-gta-gen9d6ef486c5f60d41c5662b092336c1f52",
          packCardImageBox: "rockstargames-sites-gta-gen9eb4637cb1c81d1def1fd92252f90d675",
          packCompleted: "rockstargames-sites-gta-gen9fcd5bbd0d1e3ebd45cf2cb372468e62c",
          packCardTextBox: "rockstargames-sites-gta-gen9a124ee1b0383d30157e84108cf10b83b",
          badge: "rockstargames-sites-gta-gen9d42fb1fd7d553d75675a251df2a255ee",
          icon: "rockstargames-sites-gta-gen9cbc69eda17393995ac9d41a8b4b531e8",
          label: "rockstargames-sites-gta-gen9d4649f3812d37e7407503d49dcaaba04"
        },
        b = [{
          isComplete: !1
        }, {
          isComplete: !1
        }, {
          isComplete: !1
        }, {
          isComplete: !1
        }],
        k = e => {
          let {
            title: a,
            url: t,
            images: r,
            className: n,
            tiers: i,
            onClick: m,
            imageSize: k = 420,
            imageLoaded: h
          } = e;
          const {
            isMobile: v
          } = (0, g.useWindowResize)(), {
            loggedIn: j
          } = (0, l.useRockstarUser)(), {
            selectedCharacterTuple: _
          } = (0, l.useRockstarUserState)(), [x, y] = (0, s.useState)(!1), [N, w] = (0, s.useState)(h), [S, C] = (0, s.useState)(!1), A = (0, c.useIntl)(), T = !!i?.length;
          (0, s.useEffect)((() => {
            if (Array.isArray(_)) {
              const e = _?.[0];
              C((0, g.getGen9Consoles)().includes(e))
            }
          }), [String(_)]), (0, s.useEffect)((() => {
            if (i && i.length > 0) {
              const e = i.some((e => !e.isComplete));
              y(!e)
            } else y(!1)
          }), [i]);
          const I = `${v?r?.mobile:r?.desktop}?im=Resize,height=${k}`;
          return (0, g.usePreloadImg)(I, (() => w(!0))), (0, f.jsx)(d.NavLink, {
            className: [p.packCard, n, x ? p.packCompleted : ""].join(" "),
            to: t,
            onClick: m,
            children: (0, f.jsxs)("div", {
              className: [p.packCardImageBox, N ? p.packCardImageLoaded : ""].join(" "),
              style: {
                "--background-image": `url(${I})`
              },
              children: [x && (0, f.jsxs)("div", {
                className: p.badge,
                children: [(0, f.jsx)("div", {
                  className: p.icon
                }), (0, f.jsx)("div", {
                  className: p.label,
                  children: A.formatMessage(o.pl_card_badge_content_complete)
                })]
              }), (0, f.jsxs)("div", {
                className: p.packCardTextBox,
                children: [(0, f.jsx)("h4", {
                  children: a
                }), j && !x && S && (0, f.jsx)(u, {
                  tiers: T ? i : b
                })]
              })]
            })
          })
        },
        h = {
          pillBtn: "rockstargames-sites-gta-gen9c0607ec9e0a3925181496fc555721e0a",
          selected: "rockstargames-sites-gta-gen9ff76988869bea7d18917be00339b2434",
          packList: "rockstargames-sites-gta-gen9ffeeb1f272f99c5cb4711e4956c65f7f",
          headerVisible: "rockstargames-sites-gta-gen9f6652e03be6ce55bd8f068900093a707",
          packCard: "rockstargames-sites-gta-gen9a53b37fe7ab10b353eceea86123258a1",
          packGrid: "rockstargames-sites-gta-gen9b85775dc95fb3881171ee42e49076cbf"
        };
      r.gsap.registerPlugin(n.useGSAP);
      const v = e => {
        let {
          isHeaderVisible: a,
          packListItems: t,
          packCardClassName: c = h.packCard,
          packListClassName: o = h.packList,
          packGridClassName: d = h.packGrid,
          selectPackCard: l,
          sortFunction: g = i
        } = e;
        const m = (0, s.useRef)(null),
          u = [...t].sort(g),
          [p, b] = (0, s.useState)(),
          [v, j] = (0, s.useState)(!1);
        return (0, s.useEffect)((() => {
          if (!0 === v) return;
          clearTimeout(p);
          const e = setTimeout((() => {
            j(!0)
          }), 1e3);
          b(e)
        }), []), (0, n.useGSAP)((() => {
          if (!1 !== v && m?.current) {
            const e = m.current.children;
            r.gsap.to(e, {
              opacity: 1,
              y: 0,
              duration: .5,
              stagger: .05,
              ease: r.Power2.easeInOut
            })
          }
        }), {
          dependencies: [v, t],
          scope: m,
          revertOnUpdate: !0
        }), (0, f.jsx)("div", {
          className: [o, a ? h.headerVisible : ""].join(" "),
          "data-testid": "pack-list",
          children: (0, f.jsx)("div", {
            ref: m,
            className: d,
            "data-testid": "pack-grid",
            children: u.map(((e, a) => {
              let {
                id: t,
                name: s,
                title: r,
                url: n,
                images: i,
                tiers: o
              } = e;
              return (0, f.jsx)(k, {
                title: r,
                url: n,
                className: c,
                images: i,
                tiers: o,
                onClick: () => ((e, a, t, s, r) => {
                  l(e, a, t, s, r)
                })(s, r, n, t, a)
              }, r)
            }))
          })
        })
      }
    },
    83082: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => d
      });
      var s = t(71403),
        r = t(27926),
        n = t(40207),
        i = t(1197),
        c = t(26889);
      var o = t(46632);
      const d = e => {
        let {
          navItems: a,
          onNavItemClick: t,
          isOpen: d,
          isHeaderVisible: l
        } = e;
        const {
          track: g
        } = (0, n.useGtmTrack)(), [m, f] = (0, s.useState)(0), u = (0, s.useCallback)(((e, s) => {
          p(`Secondary Nav > ${a[m].title} > ${e}`, s), t()
        }), [a, t, m, g]), p = (e, a) => {
          g({
            event: "nav_click",
            text: e.split(">").pop()?.trim() || "",
            link_url: a,
            element_placement: e
          })
        };
        return (0, o.jsx)(r.motion.div, {
          className: "rockstargames-sites-gta-gen9aa2ce15f29ac99fe06895664698bb6cc",
          initial: {
            height: 0
          },
          animate: {
            height: d ? "100dvh" : 0
          },
          transition: {
            ease: "easeInOut",
            duration: .4
          },
          children: (0, o.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9f2f85d11f6ee99282db61467ebdbd00f",
            children: [(0, o.jsx)("div", {
              className: "rockstargames-sites-gta-gen9c5288c05172905ec86e3fb56c010d6d3",
              children: (0, o.jsx)(i.A, {
                navItems: a,
                category: a[m]?.name,
                setCategory: f,
                nextChipBtnClass: "rockstargames-sites-gta-gen9c8a45e31d035c8e867358deea365ceac",
                prevChipBtnClass: "rockstargames-sites-gta-gen9e9684050ab2f4aa408ae565c740cf50c"
              })
            }), (0, o.jsx)("div", {
              className: "rockstargames-sites-gta-gen9f1adea94eb32de966a0e622247370f4e",
              children: (0, o.jsx)(c.A, {
                isHeaderVisible: l,
                packListItems: a[m]?.subNavItems ?? [],
                selectPackCard: u
              })
            })]
          })
        })
      }
    },
    37017: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => o
      });
      var s = t(71403),
        r = t(89779),
        n = t(58407),
        i = t(42756);
      var c = t(46632);
      const o = (0, i.withTranslations)((e => {
        let {
          t: a
        } = e;
        const [t] = (0, s.useState)(""), i = (0, r.useNavigate)(), o = (0, n.useMutateState)();
        return (0, c.jsxs)("form", {
          action: "#",
          className: "rockstargames-sites-gta-gen9b82052ce07e004075e77261c373bfc50",
          onSubmit: e => {
            e.preventDefault(), o({
              navOpen: !1
            }), document.activeElement?.blur(), i(`/search?q=${e.target.q.value}`)
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
      }))
    },
    99718: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => c
      });
      var s = t(71403),
        r = t(88038),
        n = t(46632);
      class i extends s.Component {
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
          return null !== this.state.error.code ? (0, n.jsx)(r.A, {
            error: this.state.error
          }) : this.props.children
        }
      }
      const c = function(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return function(t) {
          return (0, n.jsx)(i, {
            header: a,
            children: (0, n.jsx)(e, {
              ...t
            })
          })
        }
      }
    },
    88038: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => o
      });
      var s = t(71403),
        r = t(42756),
        n = t(60285),
        i = t(37017);
      var c = t(46632);
      const o = (0, r.withTranslations)((e => {
        let {
          error: a,
          t,
          domain: r = ""
        } = e;
        console.error({
          error: a
        });
        let o = a?.message ?? t("error-404-new");
        o = t("error-404-new");
        const d = a?.code ?? 398,
          l = (0, s.useRef)(null);
        return (0, s.useEffect)((() => {
          l && l?.current && l.current.focus()
        }), [l]), (0, c.jsxs)("div", {
          className: "rockstargames-sites-gta-gen9d988ce20c420c26fc5e455279bf94cb9",
          children: [(0, c.jsx)("h3", {
            tabIndex: -1,
            ref: l,
            children: `${o} (${d})`
          }), (0, c.jsx)(n.A, {
            to: "/",
            children: t("Home")
          }), "clr" !== r && (0, c.jsx)(i.A, {})]
        })
      }))
    },
    25490: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        A: () => r.A,
        AudioPlayer: () => p,
        Badge: () => b.A,
        Brands: () => k.A,
        Button: () => h.A,
        ButtonGroup: () => v.A,
        CalloutSection: () => x.A,
        Carousel: () => j.A,
        ConditionalBlock: () => _.A,
        CookieAB: () => C,
        CountryInputField: () => S,
        Cta: () => A.A,
        DescriptionArea: () => T.A,
        DiscountsBadge: () => I.A,
        DotLoader: () => E,
        Dropdown: () => B,
        Embed: () => $,
        ExpandingPlatformButton: () => V.A,
        FadeInContent: () => G,
        GameSiteHeader: () => R,
        Gen9Button: () => W.A,
        Gen9CoreCarousel: () => H.A,
        Grid: () => P.A,
        HTMLElement: () => X.A,
        Hero: () => q.A,
        HookStore: () => U.A,
        ImageWithBadge: () => ae.A,
        InViewTracker: () => re.H,
        LanguageSelector: () => Q.A,
        LayeredImage: () => ee,
        LoadingAnimation: () => Ca.A,
        MultiSourceImage: () => Z.A,
        NewswireBlocks: () => he,
        NewswireCard: () => ge,
        NewswireList: () => ue,
        NewswireRelated: () => be,
        NewswireTag: () => de,
        OrderedList: () => ve.A,
        PackList: () => je.A,
        PackListMenu: () => _e.A,
        Paging: () => Ne,
        ParallaxCacheBuster: () => Ae.A,
        ParallaxInnerLayer: () => Se.A,
        ParallaxOuterLayer: () => Ce.A,
        ParallaxWrapper: () => we.A,
        ProfileSwitcher: () => Te,
        PromoModule: () => Ie.A,
        Rating: () => Le.A,
        ResponsiveFlexBox: () => ze,
        ResponsiveFlexItem: () => Be,
        ResponsiveGridBox: () => Oe,
        ResponsiveGridItem: () => Ve,
        ResponsiveImg: () => Ge,
        ResponsiveSection: () => Re,
        RockstarLogo: () => We,
        SafeHtml: () => Ue,
        ScrollSection: () => qe.A,
        ScrollToTop: () => Xe,
        ScrollTracker: () => Qe.A,
        SearchBox: () => Ye.A,
        Separator: () => Ze.A,
        Skeleton: () => Ke.A,
        SrcsetImage: () => se,
        TextFit: () => Je.A,
        ThumbsGallery: () => aa.A,
        TinaModuleFetchNRender: () => ta.A,
        TinaWrapper: () => sa,
        TrackList: () => ea.A,
        UnorderedList: () => ra.A,
        UserVote: () => na.A,
        VideoCard: () => s,
        VideoCarousel: () => la,
        VideoList: () => _a,
        VisuallyHidden: () => xa,
        Wasted: () => ya.A,
        framer: () => Sa,
        useTinaModuleFetchByIds: () => ta.X,
        withInViewTracker: () => re.r,
        withSearchbarErrorBoundary: () => Na.A,
        withSimpleErrorBoundary: () => wa.A
      });
      var s = {};
      t.r(s), t.d(s, {
        Art: () => ca,
        Link: () => oa
      });
      var r = t(60285),
        n = t(71403),
        i = t(59028),
        c = t.n(i),
        o = t(58407),
        d = t(83178);
      const l = {
        player: "rockstargames-sites-gta-gen9bb43df423657efcc0f1f38630a24e5e8",
        fixedToBottom: "rockstargames-sites-gta-gen9e1f497e3ec34c2fd721b124969e27dd5",
        tracksOpen: "rockstargames-sites-gta-gen9e8f2736f0ae21a56045104071a7a9fd7",
        tracks: "rockstargames-sites-gta-gen9ea84096a931648765b1db46f708f70aa",
        iconBurger: "rockstargames-sites-gta-gen9b91aad66a2102668715c5ddaaecede2e",
        trackList: "rockstargames-sites-gta-gen9c44536ca7b7fa7236e86c65ae309057e",
        trackActive: "rockstargames-sites-gta-gen9ac7826f934fc777f58017b1a5752419a",
        trackTitle: "rockstargames-sites-gta-gen9aafc522e642572d5ff93c7408b941829",
        trackIndex: "rockstargames-sites-gta-gen9b880baa4707c71eb543f905816d8e952",
        controls: "rockstargames-sites-gta-gen9ff92c8eddfc0a0fa7bc7f444973e4f28",
        controlsCurrentBg: "rockstargames-sites-gta-gen9a81d9465f14d65e8e20800d7b25f77d9",
        controlsCurrentBgVisible: "rockstargames-sites-gta-gen9c87bd14d2bbc9248d9c197b77454f345",
        controlsTrack: "rockstargames-sites-gta-gen9c23bf574089d1af93750f6af8ebb489f",
        controlsTrackTitle: "rockstargames-sites-gta-gen9e4b77d29e904f9928cca1de93f5c7745",
        controlsTrackAnimating: "rockstargames-sites-gta-gen9ba49949a9cd8c22385708f267c625029",
        scrollText: "rockstargames-sites-gta-gen9fd9c80e5afaa1ed38ce85f2c3d70eae4",
        controlsTrackArtist: "rockstargames-sites-gta-gen9c93c1e5399d9fd5e96ca246fdbfb307b",
        controlsTrackBurger: "rockstargames-sites-gta-gen9b4e1a16e3460b40c1aacd92afe219856",
        controlsButtons: "rockstargames-sites-gta-gen9d136125994c1d0db1449fce51af559ca",
        controlsScrub: "rockstargames-sites-gta-gen9d3d935648408f71928bd49d2f7c5a9ff",
        controlsPlayPause: "rockstargames-sites-gta-gen9f5de7526c8cee98bdd7363fd7f2cf8ae",
        controlsPlayPausePlaying: "rockstargames-sites-gta-gen9efb6194f0df966e6c8c759937d2fb826",
        controlsNextTrack: "rockstargames-sites-gta-gen9f286e0ce01c5401e56dd579b076f1aae",
        controlsPrevTrack: "rockstargames-sites-gta-gen9a56bb7cb4b0e2de481777d1f09c3f2f2",
        controlsScrubTrack: "rockstargames-sites-gta-gen9b8f38f45353fa54fcb6f9e2a3d0d5a85"
      };
      var g = t(46632);
      const m = e => {
          let {
            src: a
          } = e;
          return (0, g.jsx)("div", {
            className: l.cover,
            style: {
              background: `url(${a}) center/cover`
            }
          })
        },
        f = e => {
          let {
            timing: a = {
              current: 0,
              duration: 0
            },
            playing: t,
            audioRef: s,
            setPlaying: r,
            tracksOpen: i,
            setTracksOpen: o,
            trackData: d,
            setTrackId: m,
            trackBounds: f,
            setAutoNext: u
          } = e;
          const p = (0, n.useRef)(null),
            b = (0, n.useRef)(null),
            k = (0, n.useRef)(null),
            [h, v] = (0, n.useState)(null),
            [j, _] = (0, n.useState)(!1),
            x = e => {
              const a = new Date(1e3 * e),
                t = a.getUTCMinutes(),
                s = a.getSeconds();
              return `${t.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`
            };
          return (0, n.useEffect)((() => {
            if (!b.current || !k.current) return;
            const e = () => {
              k.current && b.current && v(k.current.clientWidth > b.current.clientWidth)
            };
            return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e)
          }), [k, b, a]), (0, n.useEffect)((() => {
            if (!p.current || !a?.duration) return;
            let e = null;
            const t = new(c())(p.current),
              r = e => {
                if (p.current) {
                  const t = p.current.clientWidth;
                  if (!p.current.contains(e.srcEvent.target)) return;
                  const r = Math.max(0, e.srcEvent.offsetX),
                    n = Number(r / t * a.duration);
                  s.currentTime = n
                }
              },
              n = () => {
                e ? s.pause() : s.play()
              },
              i = () => {
                e = s.paused, s.pause()
              };
            return t.on("panstart", i), t.on("panleft", r), t.on("panright", r), t.on("panend", n), t.on("tap", r), () => {
              t.off("panstart", i), t.off("panleft", r), t.off("panright", r), t.off("panend", n), t.off("tap", r)
            }
          }), [p.current, a.duration]), (0, n.useEffect)((() => {
            const e = Number(s?.currentTime);
            (t || !isNaN(e) && 0 !== e) && _(!0)
          }), [t, s?.currentTime]), (0, g.jsxs)("div", {
            className: l.controls,
            style: {
              "--track-color": d.color,
              "--track-mix-blend-mode": d.mix_blend_mode,
              "--current-pct": a.current / a.duration
            },
            children: [(0, g.jsx)("div", {
              className: [l.controlsCurrentBg, j ? l.controlsCurrentBgVisible : ""].join(" ")
            }), (0, g.jsx)("div", {
              className: l.controlsTrack,
              ref: b,
              children: (0, g.jsx)("span", {
                className: [l.controlsTrackTitle, h ? l.controlsTrackAnimating : ""].join(" "),
                ref: k,
                children: d.title
              })
            }), (0, g.jsxs)("div", {
              className: l.controlsButtons,
              children: [(0, g.jsx)("div", {
                className: l.controlsPrevTrack,
                onClick: () => {
                  f && (m(f[0]), u(!0), r(!0))
                }
              }), (0, g.jsx)("div", {
                className: [l.controlsPlayPause, t ? l.controlsPlayPausePlaying : ""].join(" "),
                onClick: () => {
                  r(!t)
                }
              }), (0, g.jsx)("div", {
                className: l.controlsNextTrack,
                onClick: () => {
                  f && (m(f[1]), u(!0), r(!0))
                }
              })]
            }), (0, g.jsx)("div", {
              active: i ? "" : null,
              className: l.controlsTrackBurger,
              children: (0, g.jsx)("div", {
                className: l.iconBurger,
                onClick: () => {
                  o(!i)
                }
              })
            }), (0, g.jsxs)("div", {
              className: l.controlsScrub,
              children: [(0, g.jsx)("span", {
                children: x(a.current)
              }), (0, g.jsx)("div", {
                className: l.controlsScrubTrack,
                ref: p
              }), (0, g.jsx)("span", {
                children: x(a.duration)
              })]
            })]
          })
        },
        u = e => {
          let {
            tracks: a,
            trackId: t,
            setTrackId: s,
            tracksOpen: r,
            setTracksOpen: n,
            setPlaying: i,
            setAutoNext: c
          } = e;
          return (0, g.jsxs)("div", {
            className: l.tracks,
            children: [(0, g.jsx)("h4", {
              children: "Tracks"
            }), (0, g.jsx)("div", {
              className: l.trackBurger,
              onClick: () => {
                n(!r)
              }
            }), (0, g.jsx)("div", {
              className: l.trackList,
              children: a.map(((e, a) => (0, g.jsxs)("a", {
                style: {
                  "--highlight-color": e.color
                },
                className: t === e.id ? l.trackActive : "",
                onClick: () => {
                  s(e.id), i(!0), c(!0)
                },
                children: [(0, g.jsx)("span", {
                  className: l.trackIndex,
                  children: String(a + 1).padStart(2, "0")
                }), (0, g.jsx)("span", {
                  className: l.trackTitle,
                  children: e.title
                }), (0, g.jsx)("span", {
                  className: l.trackTime,
                  children: e.duration
                })]
              }, e.id)))
            })]
          })
        },
        p = e => {
          let {
            id: a,
            className: t = ""
          } = e;
          const {
            data: s
          } = (0, o.useQuery)(d.GetAudioAlbum, {
            variables: {
              id: a
            }
          }), [r, i] = (0, n.useState)(), [c, p] = (0, n.useState)(), [b, k] = (0, n.useState)(), [h, v] = (0, n.useState)(!1), [j, _] = (0, n.useState)(!1), [x, y] = (0, n.useState)(new HTMLAudioElement), [N, w] = (0, n.useState)({
            current: 0,
            duration: 0
          }), [S, C] = (0, n.useState)(!0);
          return (0, n.useEffect)((() => {
            const e = "audio",
              a = a => {
                a?.data?.rockstarAudioPlayerPlayTrackId && (p(a.data.rockstarAudioPlayerPlayTrackId), C(!1), _(!0)), j && a?.data?.attentionBlurredElsewhere && a?.data?.from !== e && _(!1)
              };
            return j && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: e
            }), window.addEventListener("message", a, !1), () => window.removeEventListener("message", a, !1)
          }), [j]), (0, n.useEffect)((() => {
            if (!x) return;
            const e = () => {
                isNaN(x.duration) || w({
                  duration: x?.duration ?? 0,
                  current: x?.currentTime ?? 0
                })
              },
              a = () => {
                S && r && p(r[1])
              };
            return x.addEventListener("loadedmetadata", e), x.addEventListener("timeupdate", e), x.addEventListener("ended", a), () => {
              x.removeEventListener("loadedmetadata", e), x.removeEventListener("timeupdate", e), x.removeEventListener("ended", a)
            }
          }), [x, r, S]), (0, n.useEffect)((() => {
            j && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: "audio"
            })
          }), [j]), (0, n.useEffect)((() => {
            x && (j ? x.play() : x.pause(), v(!1))
          }), [j, x, b?.id]), (0, n.useEffect)((() => {
            if (!c) return;
            const {
              tracks: e
            } = s.audioAlbum, a = s.audioAlbum.tracks.findIndex((e => e.id === c));
            i([e[a - 1]?.id ?? e[e.length - 1].id, e[a + 1]?.id ?? e[0].id]), k(e[a])
          }), [c]), (0, n.useEffect)((() => {
            s && p(s.audioAlbum.tracks[0].id)
          }), [s]), b ? (0, g.jsxs)("div", {
            className: [l.player, l[t], h ? l.tracksOpen : ""].join(" "),
            children: [(0, g.jsx)("audio", {
              ref: e => {
                y(e)
              },
              src: b.mp3_src
            }), (0, g.jsx)(u, {
              tracks: s.audioAlbum.tracks,
              setTrackId: p,
              trackId: c,
              tracksOpen: h,
              setTracksOpen: v,
              setPlaying: _,
              setAutoNext: C
            }), (0, g.jsx)(m, {
              src: b.cover_src
            }), (0, g.jsx)(f, {
              setTrackId: p,
              trackBounds: r,
              tracksOpen: h,
              setTracksOpen: v,
              playing: j,
              setPlaying: _,
              timing: N,
              trackData: b,
              audioRef: x,
              setAutoNext: C
            })]
          }) : null
        };
      var b = t(71080),
        k = t(34634),
        h = t(22778),
        v = t(32331),
        j = t(21450),
        _ = t(91318),
        x = t(55430),
        y = t(42921),
        N = t(86634),
        w = t.n(N);
      const S = e => {
          let {
            isMulti: a,
            allowSelectAll: t,
            label: s,
            miscProps: r
          } = e;
          const [i, c] = (0, n.useState)(""), o = (0, n.useMemo)((() => w()().getData()), []);
          return (0, g.jsx)(y.Ay, {
            unstyled: !0,
            value: i,
            isMulti: a,
            allowSelectAll: t,
            options: o,
            placeholder: s,
            onChange: e => {
              return a = e?.target?.value, void c(a);
              var a
            },
            classNamePrefix: "country-select",
            ...r
          })
        },
        C = e => {
          let {
            cookieName: a,
            cookieValue: t,
            trueComponent: s,
            falseComponent: r
          } = e;
          const n = (e => {
              const a = document.cookie.split("; "),
                t = `${e}=`,
                s = a.find((e => e.startsWith(t)));
              return s?.substring(t.length, s.length)
            })(a),
            i = new URLSearchParams(window.location.search).get(a);
          return i && ((e, a) => {
            e && a && (document.cookie = `${e}=${a}; domain=${(()=>{const e=window.location.hostname.split(".");return e.slice(e.length-2).join(".")})()}; path=/;`)
          })(a, i), n === t || i === t ? s : r
        };
      var A = t(31090),
        T = t(26371),
        I = t(52328);
      const L = "rockstargames-sites-gta-gen9c63cfb461217f059c8c25eec09602b30",
        E = e => {
          let {
            color: a
          } = e;
          return (0, g.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9a481f47ab7e8af4042a665fab5aea27c",
            style: {
              "--loader-color": a
            },
            children: [(0, g.jsx)("div", {
              className: L
            }), (0, g.jsx)("div", {
              className: L
            }), (0, g.jsx)("div", {
              className: L
            })]
          })
        };
      var z = t(64205);
      const M = {
          dropdownWrapper: "rockstargames-sites-gta-gen9b951912c02de0e5e881fedd391d04810",
          items: "rockstargames-sites-gta-gen9b0a8f220641417f889d4fd6039fe6bac",
          open: "rockstargames-sites-gta-gen9f5eb88111734e6e70d34ef2b095c44f6",
          opener: "rockstargames-sites-gta-gen9ecb577af64f747d0d39cf03939ee3c73",
          secondary: "rockstargames-sites-gta-gen9b64c3515fcd91f6b84410bd14640da81"
        },
        B = e => {
          let {
            children: a,
            className: t,
            title: s
          } = e;
          const [r, i] = (0, n.useState)(!1);
          let c = null;
          return c = z.Ay, (0, g.jsx)(c, {
            disabled: !r,
            children: (0, g.jsxs)("div", {
              className: [M.dropdownWrapper, r ? M.open : "", void 0 !== t ? t : ""].join(" "),
              children: [(0, g.jsx)("button", {
                className: M.opener,
                onClick: () => i(!r),
                children: s
              }), r && (0, g.jsx)("div", {
                className: M.items,
                onClick: () => i(!1),
                children: a
              })]
            })
          })
        };
      var P = t(28606);
      const O = e => {
          let {
            caption: a,
            children: t,
            ...s
          } = e;
          return a ? (0, g.jsxs)("figure", {
            ...s,
            children: [t, (0, g.jsx)("figcaption", {
              dangerouslySetInnerHTML: {
                __html: a
              }
            })]
          }) : t
        },
        $ = e => {
          let {
            componentTitle: a,
            type: t,
            items: s
          } = e;
          return s?.length ? (0, g.jsx)("div", {
            className: "rockstargames-sites-gta-gen9d393ab6eb68d416b116b6281abdb5e14",
            type: t,
            children: (0, g.jsxs)(P.A, {
              children: [a && (0, g.jsx)("h3", {
                children: a
              }), (0, g.jsx)(P.A, {
                className: "rockstargames-sites-gta-gen9ed3ee31cb8e357d795886157f95a742a",
                children: s.map(((e, a) => {
                  return e?.embed ? (0, g.jsx)(O, {
                    caption: e?.caption,
                    children: (0, g.jsx)("div", {
                      className: "rockstargames-sites-gta-gen9dcf1c30612026a517f59af64d8703bc4",
                      dangerouslySetInnerHTML: {
                        __html: (t = e.embed, t.replace(/&gt;/g, ">").replace(/&lt;/g, "<"))
                      }
                    }, `${e?.key??a}_div`)
                  }, e?.key ?? a) : e?.text ? (0, g.jsx)("p", {
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
      var V = t(39695);
      const D = {
          animateBox: "rockstargames-sites-gta-gen9e9374e74c542c1028a2068dfbd1e85a3",
          fadeArea: "rockstargames-sites-gta-gen9a63de5cdf9849ac45a0f6b4f7617cfa5",
          visible: "rockstargames-sites-gta-gen9d7458685114194d602f94e2581de0f08",
          barGrow: "rockstargames-sites-gta-gen9b0f4d843b626e3741c9dd38fcb3f56b0",
          bar: "rockstargames-sites-gta-gen9a4b99f54f3ce3987765143d8a151360a",
          animateMe: "rockstargames-sites-gta-gen9f9c3869a2a1e10490bdfbcb3ee89d7da"
        },
        G = e => {
          let {
            children: a,
            style: t
          } = e;
          const s = (0, n.useRef)(null);
          return (0, n.useEffect)((() => {
            new IntersectionObserver((e => {
              e.forEach((e => {
                e.isIntersecting && e.target.classList.add([D.visible])
              }))
            })).observe(s?.current)
          }), []), (0, g.jsx)("div", {
            style: t,
            className: [D.fadeArea].join(" "),
            ref: s,
            children: a
          })
        },
        F = {
          gameSiteHeader: "rockstargames-sites-gta-gen9cb7cada84679a7af263e1436675a518a",
          activeNavItem: "rockstargames-sites-gta-gen9aa4aa7ed96facb38ed09c72eededb418",
          navHidden: "rockstargames-sites-gta-gen9ac1cb9d2005f287ed666d334f816f8c5",
          navContent: "rockstargames-sites-gta-gen9e5abd79468866e31fdad2780b169f687",
          headerNavOpen: "rockstargames-sites-gta-gen9b98508d0923c5bb442c15772fbad9764",
          headerLogo: "rockstargames-sites-gta-gen9e666ff4f0b91dfe78991244ac1a759a5",
          bg: "rockstargames-sites-gta-gen9cfc6fd456ca2f3e9db06f780f412660f"
        },
        R = e => {
          let {
            buttonText: a = null,
            gameOverrideStyles: t,
            navLinks: s,
            cta: r = "",
            game: i
          } = e;
          const [c, d] = (0, n.useState)(!1), l = (0, o.useMutateState)(), {
            navHidden: m
          } = (0, o.useState)();
          return (0, n.useEffect)((() => {
            l({
              gameSiteNavOpen: c
            })
          }), [c]), (0, n.useEffect)((() => {
            const e = () => {
              d(!1)
            };
            return document.addEventListener("click", e), () => document.removeEventListener("click", e)
          }), []), (0, g.jsxs)("header", {
            "data-game": i,
            className: [F.gameSiteHeader, c ? F.headerNavOpen : "", m ? F.navHidden : "", t.gameSiteHeader, c ? t.headerNavOpen : ""].join(" "),
            children: [(0, g.jsx)("button", {
              className: [F.headerLogo, t.headerLogo].join(" "),
              onClick: e => {
                d(!c), e.nativeEvent.stopImmediatePropagation()
              },
              type: "button",
              "aria-label": "Open Game Site Nav",
              dangerouslySetInnerHTML: {
                __html: a
              }
            }), (0, g.jsx)("div", {
              className: F.bg
            }), (0, g.jsx)("nav", {
              children: (0, g.jsx)("div", {
                className: F.navContent,
                children: s
              })
            }), r]
          })
        };
      var W = t(62811),
        H = t(68340),
        U = t(39149),
        q = t(95137),
        X = t(87839),
        Q = t(42341),
        Y = t(74401),
        Z = t(2024);
      const K = {
          layeredImage: "rockstargames-sites-gta-gen9a29c233d553c5905763bb69412c1ece4",
          layersWrapper: "rockstargames-sites-gta-gen9aabf78eb3e1fe545556ad0fa5639296e",
          "hero-lg": "rockstargames-sites-gta-gen9ca666917bdeaed43fd0a7af7dc30a0f7",
          "hero-md": "rockstargames-sites-gta-gen9f0a202fcbf13f1e91157e531ae829ea3",
          "hero-sm": "rockstargames-sites-gta-gen9e03dbf5d16aeab81ca65f4cb7e64446f",
          contain: "rockstargames-sites-gta-gen9c4c3c929b11e88540e3f19d5715393ec",
          cover: "rockstargames-sites-gta-gen9b283d6381c82abf4dde21c57b8fc5f66",
          fill: "rockstargames-sites-gta-gen9e9d16b94c1ed476c9346cb6f48f5ad3e",
          "bg-img": "rockstargames-sites-gta-gen9e45fabf9c4e04bf3ee27e9c84c50c09b",
          imageLayer: "rockstargames-sites-gta-gen9ed8d0ad18a62f087629ff5831fa0ac55",
          "layer-lg-height": "rockstargames-sites-gta-gen9faf1d5c6b2fe2ad27d4bb95ba7388f3d",
          "layer-md-height": "rockstargames-sites-gta-gen9b41041f11a5ef98325948acc3dec956c",
          "layer-sm-height": "rockstargames-sites-gta-gen9ba7d5822aa073c9e01cd682d65c18944",
          "layer-xl-height": "rockstargames-sites-gta-gen9ec2399a1f7e79e9aacba81b242ad0602",
          "layer-xs-height": "rockstargames-sites-gta-gen9a6ec38ac99c762fcf0dd99aa2ced8f2b",
          "layer-xxl-height": "rockstargames-sites-gta-gen9d7c1314e717273dfbb2acd3d5e06e585",
          "layer-lg-width": "rockstargames-sites-gta-gen9ca0dd7a55a5db5ee358ce51a166e5431",
          "layer-md-width": "rockstargames-sites-gta-gen9bd4c246f4f0eaf7173d104ed1e7c2d06",
          "layer-sm-width": "rockstargames-sites-gta-gen9fe3f49cba9cc10e4e076a43a6b36b862",
          "layer-xl-width": "rockstargames-sites-gta-gen9bde3d6485ac7bb483dcca1ad4e2bbe67",
          "layer-xs-width": "rockstargames-sites-gta-gen9b87efd95b330cacd4a5eaecf83528f4d",
          "layer-xxl-width": "rockstargames-sites-gta-gen9ac872df7985f9d591c85f97c72d451dc",
          "bottom-y": "rockstargames-sites-gta-gen9d63fdb49c964c28c5e8952cd79a393a0",
          "center-x": "rockstargames-sites-gta-gen9d248443eb924360a5d1d7211094ea827",
          "center-y": "rockstargames-sites-gta-gen9a8d87c765a51d98f0e3a9afd149ed0dc",
          "left-x": "rockstargames-sites-gta-gen9dcaa6339b43850be2e14967cab730041",
          "right-x": "rockstargames-sites-gta-gen9b656d800e3d134bd3a7e273a5f6d7ae6",
          "top-y": "rockstargames-sites-gta-gen9adaf230f139f906eb912b58b315406ac",
          border: "rockstargames-sites-gta-gen9c73e199a8978fb80895753c9a38fcdff",
          shards: "rockstargames-sites-gta-gen9e650a715d6f220ad49bb568768154b0e",
          shards_three: "rockstargames-sites-gta-gen9b0c8be28788c6b23cea904bdc60d7e07",
          shards_two: "rockstargames-sites-gta-gen9e41252d3a0aee1d229f6bddc20c38d47",
          dual: "rockstargames-sites-gta-gen9db575e1d021e69ebb4265a29484e2888"
        },
        J = e => {
          let {
            style: a,
            className: t
          } = e;
          const s = {
              ...a
            },
            r = a["--border-image-source"],
            n = (0, Y.useGetCdnSource)(r || null);
          return r && (s["--border-image-source"] = `url(${n})`), (0, g.jsx)("div", {
            className: (0, Y.classList)(K.border, t),
            style: {
              ...s
            }
          })
        },
        ee = e => e?.images ? (0, g.jsx)("div", {
          className: (0, Y.classList)(K.layeredImage, K[e?.variantClass], K[e?.wrapperSizeClass]),
          style: {
            ...e?.style ?? {}
          },
          children: (0, g.jsxs)("div", {
            className: K.layersWrapper,
            children: [e?.images?.map(((e, a) => {
              const {
                image: t,
                paddingClass: s,
                imageSizeClass: r,
                objectFitClass: n,
                positionClassX: i,
                positionClassY: c,
                zIndex: o,
                className: d,
                style: l,
                alt: m,
                displayClass: f
              } = e;
              return (0, g.jsx)(Z.A, {
                image: t,
                style: {
                  zIndex: o ?? a + 1
                },
                imageStyle: l,
                className: (0, Y.classList)(d, f, K.imageLayer, K[s], K[r], K[n], K[i], K[c]),
                alt: m
              }, o ?? a + 1)
            })), e?.borderImage && (0, g.jsx)(J, {
              style: e?.borderImage,
              className: e?.borderImage?.displayClass
            })]
          })
        }) : null;
      var ae = t(8999);
      const te = {
          pillBtn: "rockstargames-sites-gta-gen9eea0db67b0aabf28288b288845324afe",
          selected: "rockstargames-sites-gta-gen9d1d25362fd730ca979d5ad79de088f89",
          multiSourceContainer: "rockstargames-sites-gta-gen9dc538bbfc2f407ed9fe840097ccac819",
          multiSourceImage: "rockstargames-sites-gta-gen9ee782a29692a8eb06db1287a4984c243",
          animatePlaceholder: "rockstargames-sites-gta-gen9fbd73f5f70c2ce64aa9c9bd398f1a3b5",
          "loader-keyframes": "rockstargames-sites-gta-gen9f6040b2ae96a9b0dcdb2d283c9caff59"
        },
        se = e => {
          let {
            imageUrl: a,
            className: t,
            alt: s,
            style: r,
            lazy: i = !1,
            decoding: c = "auto",
            sizes: o = [320, 480, 768, 1024, 1440, 1920, 2560]
          } = e;
          const [d, l] = (0, n.useState)(!1);
          return (0, g.jsxs)("div", {
            className: te.multiSourceContainer,
            children: [!d && (0, g.jsx)("img", {
              className: [t, te.animatePlaceholder].join(" "),
              src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjMzMzMzMzIi8+Cjwvc3ZnPgo=",
              sizes: "(max-width: 1024px) 100vw, 1024px",
              alt: "Loading...",
              style: r
            }), (0, g.jsx)("img", {
              className: [te.multiSourceImage, t].join(" "),
              src: `${a}?im=Resize=1920`,
              srcSet: (m = a, o.map((e => `${m}?im=Resize=${e} ${e}w`)).join(", ")),
              sizes: "(max-width: 400px) 200px, (max-width: 1920px) 100vw, 1920px",
              alt: s ?? "Multi-Source Image",
              style: r,
              onLoad: () => {
                l(!0)
              },
              loading: i ? "lazy" : "eager",
              decoding: c
            })]
          });
          var m
        };
      var re = t(14522),
        ne = t(42756),
        ie = t(89779),
        ce = t(40207);
      const oe = {
          tag: "rockstargames-sites-gta-gen9ed77774d2704bc0ebc0ac156542ae053"
        },
        de = e => {
          let {
            className: a,
            href: t,
            title: s,
            style: n
          } = e;
          const i = (0, g.jsxs)("div", {
            style: n,
            className: [oe.tag, a].join(" "),
            children: [(0, g.jsx)("i", {}), s]
          });
          return void 0 !== t ? (0, g.jsx)(r.A, {
            to: t,
            children: i
          }) : i
        },
        le = {
          newswireBlock: "rockstargames-sites-gta-gen9a793f470884d207243d6c3caac8ad811",
          info: "rockstargames-sites-gta-gen9d50f6d2bc5f983c05311292acb4c78a5",
          title: "rockstargames-sites-gta-gen9cc389449dc1495fc9c323fc2c547857d",
          newswireBlockNoSpecialOrder: "rockstargames-sites-gta-gen9ffd167124f27c8e26a147f49c88796e5",
          preview: "rockstargames-sites-gta-gen9bbfbcf32c8c892ea29f4178949643475",
          previewMobile: "rockstargames-sites-gta-gen9f88852766488b21a28c42d230ea529a1",
          top: "rockstargames-sites-gta-gen9fa1a6f4c7d94b94f5af2dc1ac9af79f1",
          startAnimation: "rockstargames-sites-gta-gen9e380e8c67066df6f33fc018341ea96e5"
        },
        ge = e => {
          let {
            section: a = "",
            index: t,
            post: s,
            noSpecialOrder: i = !1,
            focused: c
          } = e;
          const {
            track: o
          } = (0, ce.useGtmTrack)(), [d] = (0, ie.useSearchParams)(), l = s.preview_images_parsed.newswire_block, m = {
            default: 0 !== t || i ? l.square || l.d16x9 || l._fallback : l.d16x9 || l.square || l._fallback,
            mobile: l.square || l._fallback
          }, [f, u] = (0, ne.usePreloadImg)(m.default), p = {
            default: {
              backgroundImage: `url(${m.default})`
            },
            mobile: {
              backgroundImage: `url(${m.mobile})`
            }
          }, b = (0, n.useCallback)((() => {
            o({
              event: "card_click",
              card_id: s.id,
              card_name: s.name_slug.replace(/-/g, " "),
              link_url: s.url,
              position: t,
              element_placement: a
            })
          }), [s]);
          return (0, g.jsx)(r.A, {
            to: s.url,
            className: [le.newswireBlock, i ? le.newswireBlockNoSpecialOrder : "", null !== f ? le.startAnimation : ""].join(" "),
            focused: c,
            onClick: b,
            children: (0, g.jsxs)(g.Fragment, {
              children: [0 !== t || d.get("tag_id") ? (0, g.jsx)("div", {
                className: le.preview,
                style: p.default
              }) : (0, g.jsxs)(g.Fragment, {
                children: [(0, g.jsx)("div", {
                  className: le.previewMobile,
                  style: p.mobile
                }), (0, g.jsx)("div", {
                  className: le.preview,
                  style: p.default
                })]
              }), (0, g.jsxs)("div", {
                className: le.info,
                children: [(0, g.jsxs)("div", {
                  className: le.top,
                  children: [s.primary_tags.length ? (0, g.jsx)(de, {
                    title: s.primary_tags[s.primary_tags.length > 1 && 722 === s.primary_tags[0].id ? 1 : 0].name
                  }) : "", (0, g.jsx)("time", {
                    dateTime: s.created,
                    children: s.created_formatted
                  })]
                }), (0, g.jsx)("h5", {
                  className: le.title,
                  dangerouslySetInnerHTML: {
                    __html: s.title
                  }
                })]
              })]
            })
          })
        };
      var me = t(31955),
        fe = t.n(me);
      const ue = (0, ne.withTranslations)((e => {
          let {
            section: a = "",
            relativeTo: t = "",
            tagId: s = null,
            metaUrl: r = "/newswire",
            t: i
          } = e;
          const {
            track: c
          } = (0, ce.useGtmTrack)(), [d] = (0, ie.useSearchParams)(), {
            tagId: l = null
          } = (0, ie.useParams)(), [m, f] = (0, n.useState)(l ?? s ?? d.get("tag_id")), [u, p] = (0, n.useState)(1), [b, k] = (0, n.useState)([]), [v, j] = (0, n.useState)(null), {
            data: _
          } = (0, o.useQuery)(fe(), {
            variables: {
              tagId: Number(m),
              page: u,
              metaUrl: r
            },
            autoSetLoading: !0
          });
          return (0, n.useEffect)((() => {
            p(1), k([]), f(l ?? s ?? d.get("tag_id"))
          }), [d.get("tag_id")]), (0, n.useEffect)((() => {
            _ && _.posts && _.posts.paging && j(_.posts.paging), _ && _.posts && _.posts.results && k(b.concat(_.posts.results))
          }), [_]), b.length ? (0, g.jsxs)(g.Fragment, {
            children: [(0, g.jsx)(he, {
              section: a,
              posts: b,
              relativeTo: t,
              noSpecialOrder: null !== m
            }), null !== v && v.nextPage ? (0, g.jsx)(h.A, {
              onClick: e => {
                p(u + 1), c({
                  event: "cta_learn",
                  text: "more stories",
                  element_placement: "newswire"
                })
              },
              disabled: !1,
              context: "secondary",
              children: i("More Stories")
            }) : ""]
          }) : null
        })),
        pe = {
          pillBtn: "rockstargames-sites-gta-gen9afd0af959edb4a463c41ad4e9cc5dadc",
          selected: "rockstargames-sites-gta-gen9bcd59aa4a9e88d86a2cbe8d4972f8f51",
          related: "rockstargames-sites-gta-gen9a748ad776070dab831edc1f67f66af08",
          posts: "rockstargames-sites-gta-gen9c0aa38678decd13ca38886b4547efedd",
          just1post: "rockstargames-sites-gta-gen9b1a31ddf7fd4458ee860d354a6a0ac92"
        },
        be = (0, ne.withTranslations)((e => {
          let {
            posts: a,
            t
          } = e;
          return (0, g.jsxs)("section", {
            className: pe.related,
            children: [(0, g.jsx)("h2", {
              children: t("Related Stories")
            }), (0, g.jsx)("div", {
              className: [pe.posts, 1 === a.length ? pe.just1post : ""].join(" "),
              children: a.map((e => (0, g.jsx)(ge, {
                noSpecialOrder: !0,
                post: e
              }, e.id)))
            })]
          })
        })),
        ke = {
          newswireBlocks: "rockstargames-sites-gta-gen9c2c8eedd25de7e186655f98b2a8d8960",
          noSpecialOrder: "rockstargames-sites-gta-gen9c0d0db9dfc71c9f4f959b9c017b1ae4b"
        },
        he = (0, ne.withGtmTracking)((e => {
          let {
            section: a = "",
            noSpecialOrder: t = !1,
            posts: s,
            gtmTrack: r,
            relativeTo: i
          } = e;
          const [c, o] = (0, n.useState)(null);
          return (0, n.useEffect)((() => {
            if (!s.length) return;
            const e = {
              event: "view_item_list",
              ecommerce: {
                impressions: []
              }
            };
            s.map(((t, s) => {
              e.ecommerce.impressions.push({
                name: t.title,
                id: t.id,
                position: s + 1,
                list: a
              })
            })), r(e), o(s.length)
          }), [s.length]), (0, g.jsx)("div", {
            className: [ke.newswireBlocks, t ? ke.noSpecialOrder : "", ke.contextHome].join(" "),
            children: s.map(((e, s) => (0, g.jsx)(ge, {
              section: a,
              index: s,
              noSpecialOrder: t,
              post: e,
              focused: s === c
            }, e.id)))
          })
        }));
      var ve = t(22941),
        je = t(26889),
        _e = t(83082);
      const xe = "rockstargames-sites-gta-gen9c54c374409e11d1429ce99457cbf7441",
        ye = e => {
          let {
            children: a,
            data: t,
            onPageUpdate: s,
            page: r,
            className: n
          } = e;
          return (0, g.jsx)("a", {
            href: "#",
            className: r === t.page ? `rockstargames-sites-gta-gen9c0eebf4f915ff9f5cc362e22d6d7d976 ${n??""}` : "",
            onClick: e => {
              e.preventDefault(), s(r)
            },
            children: a
          })
        },
        Ne = e => {
          let {
            data: a,
            onPageUpdate: t,
            className: s
          } = e;
          if (1 === a.pageCount) return null;
          const r = Array.from(new Array(Math.min(a.pageCount, 8)), ((e, t) => t + Math.min(Math.max(a.pageCount - 8, 1), Math.max(2, a.page - 4))));
          return (0, g.jsxs)("div", {
            className: `rockstargames-sites-gta-gen9a626faab2a5a03e3466dda5c79960575 ${s??""}`,
            children: [a.pageCount > 8 ? (0, g.jsxs)(g.Fragment, {
              children: [(0, g.jsx)(ye, {
                data: a,
                onPageUpdate: t,
                page: 1,
                children: "1"
              }), 2 !== r[0] ? (0, g.jsx)("div", {
                className: xe,
                children: "..."
              }) : ""]
            }) : "", r.map((e => (0, g.jsx)(ye, {
              data: a,
              onPageUpdate: t,
              page: e,
              className: s,
              children: e
            }, e))), a.pageCount > 8 ? (0, g.jsxs)(g.Fragment, {
              children: [r.slice(-1)[0] + 1 < a.pageCount ? (0, g.jsx)("div", {
                className: xe,
                children: "..."
              }) : "", (0, g.jsx)(ye, {
                data: a,
                onPageUpdate: t,
                page: a.pageCount,
                children: a.pageCount
              })]
            }) : ""]
          })
        };
      var we = t(28553),
        Se = t(70373),
        Ce = t(57300),
        Ae = t(70350),
        Te = t(86503),
        Ie = t(53623),
        Le = t(84079);
      const Ee = {
          responsiveFlexBox: "rockstargames-sites-gta-gen9cef355ba53827b9ec44655c80b247b2e",
          responsiveFlexItem: "rockstargames-sites-gta-gen9a8f5d10f689c3d40c8378e3ae8a07517",
          responsiveImage: "rockstargames-sites-gta-gen9bee8268780b292e5bc0da0b497e2c28f"
        },
        ze = e => {
          let {
            children: a,
            className: t,
            style: s
          } = e;
          return (0, g.jsx)("div", {
            className: [Ee.responsiveFlexBox, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: a
          })
        },
        Me = {
          responsiveFlexItem: "rockstargames-sites-gta-gen9ae579f6183cf73c897e68c8aae5c9d9d"
        },
        Be = e => {
          let {
            children: a,
            className: t,
            style: s
          } = e;
          return (0, g.jsx)("div", {
            className: [Me.responsiveFlexItem, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: a
          })
        },
        Pe = {
          responsiveGridBox: "rockstargames-sites-gta-gen9a28c0b7a44e1a2d5fb257161ce36a24f",
          responsiveGridItem: "rockstargames-sites-gta-gen9beddf36313a28976090b5a8b04d2594a"
        },
        Oe = e => {
          let {
            children: a,
            cols: t,
            className: s,
            rows: r,
            style: n
          } = e;
          const i = n ? {
            ...n
          } : {};
          return void 0 !== t && (i.gridTemplateColumns = `repeat(${t}, 1fr)`), void 0 !== r && (i.gridTemplateRows = `repeat(${r}, 1fr)`), (0, g.jsx)("div", {
            className: [Pe.responsiveGridBox, void 0 !== s ? s : ""].join(" "),
            style: i,
            children: a
          })
        },
        $e = {
          responsiveGridBox: "rockstargames-sites-gta-gen9a39e7c7140ada0ab28537c8c901e816f",
          responsiveGridItem: "rockstargames-sites-gta-gen9be7a0966e2f0457c1172ac9da99020c6"
        },
        Ve = e => {
          let {
            children: a,
            className: t,
            style: s
          } = e;
          return (0, g.jsx)("div", {
            className: [$e.responsiveGridItem, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: a
          })
        },
        De = {
          responsiveImage: "rockstargames-sites-gta-gen9e31b43dce2e720669fb90bf539d22197"
        },
        Ge = e => {
          let {
            src: a,
            className: t = "",
            animate: s,
            ariaLabel: r,
            style: n = {}
          } = e;
          const [i, c] = (0, ne.usePreloadImg)(a);
          return i ? (n.backgroundImage = `url(${a})`, (0, g.jsx)("div", {
            role: "img",
            "aria-label": r ?? "R* Games",
            className: [De.responsiveImage, s ? De.animateBox : "", t].join(" "),
            style: {
              ...n,
              "--aspect-ratio": c.width / c.height
            }
          })) : null
        },
        Fe = {
          responsiveSection: "rockstargames-sites-gta-gen9fb7094e43a166c19080ccfe92ed7420d",
          maxWidth: "rockstargames-sites-gta-gen9bdc35dbaa55c59ddd2831fd3ac05c5a7"
        },
        Re = e => {
          let {
            children: a,
            className: t,
            style: s,
            maxWidth: r
          } = e;
          return (0, g.jsx)("section", {
            className: [Fe.responsiveSection, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: r ? (0, g.jsx)("div", {
              className: Fe.maxWidth,
              children: a
            }) : a
          })
        },
        We = () => (0, g.jsx)(r.A, {
          className: "rockstargames-sites-gta-gen9ba0c20f78999975dfb8d9cff0de44b34",
          alt: "Rockstar Games Home",
          to: "/"
        });
      var He = t(55636);
      const Ue = e => {
        let {
          html: a
        } = e;
        return (0, g.jsx)("div", {
          children: (0, He.Ay)(a)
        })
      };
      var qe = t(80256);
      const Xe = () => {
        const {
          pathname: e
        } = (0, ie.useLocation)();
        return (0, n.useEffect)((() => {
          const e = document.scrollingElement || document.documentElement;
          setTimeout((() => {
            e.scrollTop = 0
          }), 0)
        }), [e]), null
      };
      var Qe = t(61651),
        Ye = t(37017),
        Ze = t(63303),
        Ke = t(52983),
        Je = t(62550),
        ea = t(7607),
        aa = t(22545),
        ta = t(25180);
      const sa = e => {
        let {
          children: a,
          style: t,
          theme: s
        } = e;
        const [r, i] = (0, n.useState)(s);
        return (0, n.useEffect)((() => {
          s && i(s)
        }), [s]), (0, g.jsx)("div", {
          className: "rockstargames-sites-gta-gen9a3cc68ab0d512c3d8835ee9abb7a51c4",
          style: t,
          "data-theme": r,
          children: a
        })
      };
      var ra = t(63672),
        na = t(10931);
      const ia = {
          videoPreview: "rockstargames-sites-gta-gen9c6739cc628fda235abe2bafeb30ad7cf",
          card: "rockstargames-sites-gta-gen9ec6e68ffa1188155be202dfef3f92829",
          info: "rockstargames-sites-gta-gen9ab8da127fbcdb98f874bc3f1377669a2",
          title: "rockstargames-sites-gta-gen9e84fa4b2b140994c96a13607410d30a3",
          screencap: "rockstargames-sites-gta-gen9a322c3d2275cedd594a3b17800154066",
          screencapLoaded: "rockstargames-sites-gta-gen9f68c57f5459778024e5a98918ae61ab2",
          gameTitle: "rockstargames-sites-gta-gen9debff452a4923aded7de826c081bab5d"
        },
        ca = e => {
          let {
            video: a,
            size: t = 640
          } = e;
          const s = () => a.screencap.includes("akamai") ? `${a.screencap}?im=Resize=${t}` : a.screencap,
            [r] = (0, ne.usePreloadImg)(s());
          return (0, g.jsx)("div", {
            className: [ia.screencap, r ? ia.screencapLoaded : ""].join(" "),
            style: {
              background: `url(${s()}) center/cover`
            }
          })
        },
        oa = e => {
          let {
            gameTitleNecessary: a = !0,
            openInNewWindow: t = !1,
            video: s,
            size: n,
            toExplicit: i
          } = e;
          const c = i ?? `/videos/${s.id}`,
            o = {
              className: ia.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": c
            },
            d = (0, g.jsxs)("div", {
              className: ia.card,
              children: [(0, g.jsx)(ca, {
                video: s,
                size: n
              }), (0, g.jsxs)("div", {
                className: ia.info,
                children: [a ? (0, g.jsx)("div", {
                  className: ia.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: s.game.title
                  }
                }) : "", (0, g.jsx)("h5", {
                  className: ia.title,
                  dangerouslySetInnerHTML: {
                    __html: s.title
                  }
                })]
              })]
            });
          return t ? (0, g.jsx)("a", {
            href: c,
            target: "_blank",
            ...o,
            children: d
          }) : (0, g.jsx)(r.A, {
            to: c,
            ...o,
            children: d
          })
        },
        da = {
          carousel: "rockstargames-sites-gta-gen9d8e71d378f6d4a968e8ac7d621e5f32a",
          text: "rockstargames-sites-gta-gen9a3f73d86b98d36a296bf8f621f1c340f",
          info: "rockstargames-sites-gta-gen9f46d7fc75c302b1d3f4db01d8572bea8",
          active: "rockstargames-sites-gta-gen9d26d1267cc02f841fee8a874d679aebd",
          title: "rockstargames-sites-gta-gen9a879dfc151f7cf8da6bf5642b51436bb",
          gameTitle: "rockstargames-sites-gta-gen9b42d96124219141b4dbb454131b8c37b",
          videoTitle: "rockstargames-sites-gta-gen9c5ff8983fae65d6a3d7c741360bd3606",
          cta: "rockstargames-sites-gta-gen9e25e320fda75ce4076c9fe68b540a2fa",
          track: "rockstargames-sites-gta-gen9dd0d39c46df512d3eff8ba48e469af0a",
          disableClick: "rockstargames-sites-gta-gen9b169e1b67f64de28605dd5056a740584",
          items: "rockstargames-sites-gta-gen9dddc42d4babcaec339a7c1bd04420e6e",
          dragging: "rockstargames-sites-gta-gen9a7313e3ff4e99b5313f8698890d0dd8c",
          dots: "rockstargames-sites-gta-gen9e1d7433489996eb9fa890d452ebcb042"
        },
        la = (0, ne.withLocale)((e => {
          let {
            locale: a,
            t,
            videos: s
          } = e;
          const {
            track: i
          } = (0, ce.useGtmTrack)(), {
            setBodyIsLocked: o
          } = (0, ne.useBodyScrollable)("VideoCarousel"), [d, l] = (0, n.useState)(0), [m, f] = (0, n.useState)(0), u = (0, n.useRef)(null), p = (0, n.useRef)(null);
          return (0, n.useEffect)((() => {
            if (!u.current || !p.current) return;
            const e = new(c())(u.current);
            e.get("press").set({
              time: 0
            }), e.get("tap").set({
              time: 150
            });
            const a = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
              t = () => {
                l(d - 1 < 0 ? 0 : d - 1), f(0)
              },
              r = () => {
                const e = d + 1 >= s.length - 1 ? s.length - 1 : d + 1;
                l(e), f(0)
              },
              n = e => {
                f(e.isFinal ? 0 : e.deltaX), "panleft" !== e.additionalEvent && "panright" !== e.additionalEvent || !p.current?.classList.contains(da.dragging) || a() && o(!0)
              },
              i = () => {
                a() && o(!1), f(0)
              },
              g = e => {
                "press" === e.type && u.current?.classList.add(`${da.disableClick}`), "tap" === e.type && (u.current?.classList.remove(`${da.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
              },
              m = () => {
                a() && o(!1), u.current && u.current.classList.remove(`${da.disableClick}`)
              },
              b = () => {
                a() && o(!1)
              };
            return p.current.addEventListener("transitionend", b), e.on("swiperight", t), e.on("swipeleft", r), e.on("pan", n), e.on("panend", i), e.on("press tap", g), e.on("pressup", m), () => {
              e.off("swiperight", t), e.off("swipeleft", r), e.off("pan", n), e.off("panend", i), e.off("press tap", g), e.off("pressup", m), p.current && p.current.removeEventListener("transitionend", b), f(0)
            }
          }), [u.current, d]), (0, g.jsxs)("section", {
            className: da.carousel,
            children: [(0, g.jsx)("div", {
              className: da.track,
              ref: u,
              children: (0, g.jsx)("div", {
                className: `${da.items} ${0!==m?da.dragging:""}`,
                ref: p,
                style: {
                  transform: `translateX(calc(-${100*d}% + ${m}px))`
                },
                children: s.map(((e, a) => (0, g.jsx)(r.A, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through screencap",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  className: d === a ? da.active : "",
                  role: "link",
                  title: e.title,
                  tabIndex: d === a ? 0 : -1,
                  children: (0, g.jsx)(ca, {
                    video: e,
                    size: 1280
                  })
                }, e.id)))
              })
            }), (0, g.jsxs)("footer", {
              children: [(0, g.jsx)("div", {
                className: da.text,
                children: s.map(((e, s) => {
                  return (0, g.jsxs)(r.A, {
                    className: [da.info, s === d ? da.active : ""].join(" "),
                    "data-gtm-category": "Carousel",
                    "data-gtm-action": "Click-through footer",
                    "data-gtm-label": `/videos/${e.id}`,
                    to: `/videos/${e.id}`,
                    role: "link",
                    title: e.title,
                    tabIndex: d === s ? 0 : -1,
                    children: [(0, g.jsxs)("div", {
                      className: da.title,
                      children: [(0, g.jsxs)("div", {
                        className: da.gameTitle,
                        children: [e.game.title, "fr_fr" === a && " "]
                      }), (0, g.jsx)("h2", {
                        className: da.videoTitle,
                        children: e.title
                      })]
                    }), (0, g.jsx)(h.A, {
                      className: da.cta,
                      onClick: (n = `/videos/${e.id}`, () => {
                        i({
                          event: "cta_watch_video",
                          text: "watch now",
                          link_url: n,
                          element_placement: "video carousel"
                        })
                      }),
                      children: t("Watch Now")
                    })]
                  }, e.id);
                  var n
                }))
              }), (0, g.jsx)("div", {
                className: da.dots,
                children: s.map(((e, a) => (0, g.jsx)("button", {
                  "aria-label": `Slide ${a+1}`,
                  "data-gtm-category": "Marquee",
                  "data-gtm-action": "Dot click",
                  "data-gtm-label": `Dot clicked to ${a}`,
                  onClick: () => l(a),
                  className: d === a ? da.active : "",
                  type: "button"
                }, e.id)))
              })]
            })]
          })
        }));
      var ga = t(81902),
        ma = t(89269),
        fa = t(96717),
        ua = t(20066);
      const pa = (0, fa.defineMessages)({
          next_button_label: {
            id: "next_button_label",
            defaultMessage: "Next video page"
          },
          previous_button_label: {
            id: "previous_button_label",
            defaultMessage: "Previous video page"
          }
        }),
        ba = {
          img: "rockstargames-sites-gta-gen9e3f505a2281df28eb1acdf2d586e7fbd",
          wide: "rockstargames-sites-gta-gen9c3a6d60e0087f92bbf7062fe2f36e200"
        };
      (0, ne.importAll)(t(43202));
      const ka = e => {
          let {
            isWideCard: a = !1,
            size: s = 640,
            title: r,
            titleSlug: i
          } = e;
          const {
            isMobile: c
          } = (0, ne.useWindowResize)(), o = (0, n.useMemo)((() => {
            let e = "";
            return a && (e = c ? t(17426)(`./${i}/mobile.png`) : t(65392)(`./${i}/desktop.png`)), e || (e = t(32781)(`./${i}.jpg`), e += `?im=Resize=${s}`), e
          }), [c, i]), [d] = (0, ne.usePreloadImg)(o);
          return (0, g.jsx)("div", {
            role: "img",
            "aria-label": r,
            className: [ba.img, d ? ba.startAnimation : "", a ? ba.wide : ""].join(" "),
            style: {
              backgroundImage: `url(${o})`
            }
          })
        },
        ha = {
          fobLink: "rockstargames-sites-gta-gen9fded54fb94f7325c5a0b57590585b175",
          wide: "rockstargames-sites-gta-gen9a9b41f96042bda8a8c77b7b7b10f84d5"
        },
        va = e => {
          let {
            game: a,
            to: t
          } = e;
          const {
            titleSlug: s,
            urlOfficial: n = ""
          } = a, i = ["VI"].includes(s);
          return (0, g.jsx)(r.A, {
            "data-gtm-category": "Games",
            "data-gtm-action": "Game Click-through",
            "data-gtm-label": s,
            "data-testid": `${s}-gamecard`,
            to: t ?? n,
            target: "_self",
            className: [ha.fobLink, i ? ha.wide : ""].join(" "),
            children: (0, g.jsx)(ka, {
              title: a.title,
              titleSlug: s,
              isWideCard: i
            })
          })
        },
        ja = {
          videoList: "rockstargames-sites-gta-gen9a77794780421c410f7ea55ed11ae6340",
          sectionHeader: "rockstargames-sites-gta-gen9ed556e2220733d99eae5df36ba41f9c7",
          arrowNav: "rockstargames-sites-gta-gen9ffeb6a2e829d49f94fea4ee7f5a0d2c8",
          items: "rockstargames-sites-gta-gen9ffe2263cdad39631ef304714ba89465d",
          trackWrapper: "rockstargames-sites-gta-gen9cbdef484a85e8f352a06609b394d4da7",
          partial: "rockstargames-sites-gta-gen9b33af3fff1e38a693bdc09f20d8e6f81",
          track: "rockstargames-sites-gta-gen9f3f263effe27f3c21f2ab822b9ee5dcf",
          arrow: "rockstargames-sites-gta-gen9c8012415449630a832011f490b9d2b72",
          previous: "rockstargames-sites-gta-gen9f30d899a31937a4cf395643951224469",
          next: "rockstargames-sites-gta-gen9d9d5a85633fc0f0b7f98219d735e6e05",
          disabled: "rockstargames-sites-gta-gen9c806076a1e3e23c77528ee12e32771a3"
        },
        _a = (0, fa.withIntl)((e => {
          let {
            vids: a,
            games: t,
            title: s,
            gameTitleNecessary: r
          } = e;
          const i = (0, fa.useIntl)(),
            {
              track: c
            } = (0, ce.useGtmTrack)(),
            o = void 0 !== t ? "games" : "videos",
            [d, l] = (0, n.useState)(),
            [m, f] = (0, n.useState)(),
            [u, p] = (0, n.useState)(0),
            b = (0, n.useRef)(null),
            k = (0, n.useRef)(null);
          (0, n.useEffect)((() => {
            f({
              nextEl: k.current,
              prevEl: b.current
            })
          }), [k, b]), (0, n.useEffect)((() => {
            const e = () => {
              const e = e => window.matchMedia(`(max-width: ${e})`).matches;
              let a = 4;
              e("768px") ? a = 1 : e("990px") || e("1440px") ? a = 2.2 : e("1920px") && (a = 3.2), p(a)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [u]);
          const h = e => {
            d?.slideTo(e)
          };
          let v;
          return v = "games" === o ? (0, g.jsx)(g.Fragment, {
            children: t.results.map(((e, a) => "775700as" !== e.id && (0, g.jsx)(ga.qr, {
              className: ja.slide,
              onFocus: () => h(a),
              children: (0, g.jsx)(va, {
                game: e,
                dontOverrideTo: !0,
                to: `/videos?type=game&gameId=${e.id}`
              })
            }, e.id)))
          }) : (0, g.jsx)(g.Fragment, {
            children: a.map(((e, a) => (0, g.jsx)(ga.qr, {
              className: ja.slide,
              onFocus: () => h(a),
              children: (0, g.jsx)(oa, {
                video: e,
                gameTitleNecessary: r
              })
            }, e.id)))
          }), (0, g.jsxs)("section", {
            className: ja.videoList,
            children: [(0, g.jsxs)("h3", {
              className: ja.sectionHeader,
              children: [s, (0, g.jsxs)("div", {
                className: ja.arrowNav,
                children: [(0, g.jsx)("button", {
                  className: [ja.arrow, ja.previous].join(" "),
                  type: "button",
                  ref: b,
                  "aria-label": i.formatMessage(pa.previous_button_label)
                }), (0, g.jsx)("button", {
                  className: [ja.arrow, ja.next].join(" "),
                  type: "button",
                  ref: k,
                  "aria-label": i.formatMessage(pa.next_button_label),
                  onKeyDown: e => {
                    if ("Tab" === e.key && !e.shiftKey) {
                      const a = d?.slides[d?.activeIndex].querySelector('a, button, [role="button"]');
                      a && (e.preventDefault(), a.focus())
                    }
                  }
                })]
              })]
            }), (0, g.jsx)("div", {
              className: [ja.items, u % 1 != 0 ? ja.partial : ""].join(" "),
              children: (0, g.jsx)("div", {
                className: ja.trackWrapper,
                children: u && (0, g.jsx)(ga.RC, {
                  className: ja.track,
                  slidesPerView: u,
                  spaceBetween: 24,
                  onInit: e => {
                    l(e)
                  },
                  grabCursor: !0,
                  navigation: m,
                  modules: [ma.Vx],
                  slideClass: (0, Y.classList)("swiper-slide"),
                  onSlideNextTransitionEnd: () => {
                    c({
                      event: "carousel_next",
                      element_placement: s?.toLowerCase() ?? ""
                    })
                  },
                  onSlidePrevTransitionEnd: () => {
                    c({
                      event: "carousel_previous",
                      element_placement: s?.toLowerCase() ?? ""
                    })
                  },
                  onSlideChangeTransitionEnd: () => {
                    c({
                      event: "carousel_swipe",
                      element_placement: s?.toLowerCase() ?? ""
                    })
                  },
                  children: v
                })
              })
            })]
          })
        }), ua),
        xa = e => {
          let {
            children: a,
            ...t
          } = e;
          return (0, g.jsx)("span", {
            ...t,
            className: "rockstargames-sites-gta-gen9f7f61ab4bc6dd2a49f80662ead7d8a51",
            children: a
          })
        };
      var ya = t(88038),
        Na = t(99718),
        wa = t(47252),
        Sa = t(355),
        Ca = t(26177)
    },
    1197: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => x
      });
      var s = t(71403),
        r = t(81902),
        n = t(89779),
        i = t(96717),
        c = t(74401),
        o = t(40207);
      const d = {
        pillBtn: "rockstargames-sites-gta-gen9db4bf6cb61b2370932e4811235d51afa",
        selected: "rockstargames-sites-gta-gen9b691088f1c9719532c68ca7b97487e5b",
        chipButton: "rockstargames-sites-gta-gen9bfe6fefc1068ed81c8b38519a854285f"
      };
      var l = t(46632);
      const g = e => {
        let {
          title: a,
          onClick: t,
          selected: s
        } = e;
        return (0, l.jsx)("button", {
          type: "button",
          onClick: t,
          tabIndex: 0,
          "aria-label": a,
          className: [d.chipButton, s ? d.selected : ""].join(" "),
          children: (0, l.jsx)("div", {
            children: a
          })
        })
      };
      var m;

      function f() {
        return f = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = arguments[a];
            for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s])
          }
          return e
        }, f.apply(this, arguments)
      }
      const u = e => s.createElement("svg", f({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none"
      }, e), m || (m = s.createElement("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "m15 18-6-6 6-6"
      })));
      var p;

      function b() {
        return b = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = arguments[a];
            for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s])
          }
          return e
        }, b.apply(this, arguments)
      }
      const k = e => s.createElement("svg", b({
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          fill: "none"
        }, e), p || (p = s.createElement("path", {
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "m9 18 6-6-6-6"
        }))),
        h = {
          pillBtn: "rockstargames-sites-gta-gen9f5c8cbcdc2408c602e1d5c5ef98091a1",
          selected: "rockstargames-sites-gta-gen9f05732bff172f32532936ffdf636a215",
          navScrollButton: "rockstargames-sites-gta-gen9ef8ca38f98b731ff5dfe07937b1bbe34"
        },
        v = e => {
          let {
            direction: a,
            className: t,
            ...s
          } = e;
          return (0, l.jsxs)("button", {
            type: "button",
            className: [t, h.navScrollButton].join(" "),
            ...s,
            children: ["left" === a && (0, l.jsx)(u, {}), "right" === a && (0, l.jsx)(k, {})]
          })
        };
      var j = t(22137);
      const _ = {
          pillBtn: "rockstargames-sites-gta-gen9c07e609b8b71ab690ceb8c0ce0a10e3b",
          selected: "rockstargames-sites-gta-gen9b7277764b073fb1731f97500d63602dd",
          chipsContainer: "rockstargames-sites-gta-gen9b12cbbc254604b2d0a9e23a794cc306b",
          chips: "rockstargames-sites-gta-gen9fde4c31ca848c29a1064a0fee3686f93",
          nextChipNavButton: "rockstargames-sites-gta-gen9e753e2314e48a7d59ead26e77cac50aa",
          previousChipNavButton: "rockstargames-sites-gta-gen9ce3553d0304e228596f67c2308240648",
          nextNavIcon: "rockstargames-sites-gta-gen9ef938f00847374bd89f70d0e5b1f97a8",
          previousNavIcon: "rockstargames-sites-gta-gen9f750c5a49886ae190c14e52aa026a417"
        },
        x = e => {
          let {
            navItems: a,
            category: t,
            setCategory: d,
            chipsContainerClass: m = _.chipsContainer,
            previousChipButtonClass: f = "",
            nextChipBtnClass: u = ""
          } = e;
          const p = (0, i.useIntl)(),
            {
              track: b
            } = (0, o.useGtmTrack)(),
            {
              pathname: k
            } = (0, n.useLocation)(),
            h = (0, s.useMemo)((() => Math.max(a.findIndex((e => e.name === t)), 0)), [a, k]),
            [x, y] = (0, s.useState)(h),
            [N, w] = (0, s.useState)(!1),
            [S, C] = (0, s.useState)(!1),
            [A, T] = (0, s.useState)(!1),
            I = (0, s.useRef)(null),
            L = (0, s.useRef)(null),
            E = (0, s.useRef)(null),
            z = (0, s.useCallback)(((e, a) => {
              E.current && E.current.slideTo(e), y(e), M(`Career Progress Nav > ${a}`)
            }), [b]),
            M = (e, a) => {
              b({
                event: "component_tab_click",
                text: e.split(">").pop()?.trim() || "",
                link_url: a,
                element_placement: e
              })
            };
          (0, s.useEffect)((() => {
            d(x)
          }), [x]);
          const B = e => {
            e.isEnd ? C(!0) : C(!1), e.isBeginning ? T(!0) : T(!1)
          };
          return (0, s.useEffect)((() => {
            E.current && ((E.current.wrapperEl.clientWidth || 0) > (E.current.el.clientWidth || 0) ? (w(!0), E.current.params.centeredSlides = !0, E.current.params.centeredSlidesBounds = !0) : (w(!1), E.current.params.centeredSlides = !1, E.current.params.centeredSlidesBounds = !1))
          }), [E.current?.wrapperEl.clientWidth, E.current?.el.clientWidth]), (0, l.jsxs)("div", {
            className: m,
            children: [!A && N && (0, l.jsx)("div", {
              ref: L,
              className: (0, c.classList)(_.previousChipNavButton, f),
              children: (0, l.jsx)(v, {
                direction: "left",
                className: _.previousNavIcon,
                onClick: () => {
                  E.current && (E.current?.slidePrev(), E.current.isBeginning ? T(!0) : T(!1), b({
                    event: "carousel_previous",
                    element_placement: "career progress page"
                  }))
                },
                "aria-label": p.formatMessage(j.D.pln_scroll_left)
              })
            }), (0, l.jsx)("div", {
              className: _.chips,
              children: (0, l.jsx)(r.RC, {
                onBeforeInit: e => E.current = e,
                onInit: B,
                className: _.chips,
                direction: "horizontal",
                grabCursor: !0,
                slidesPerView: "auto",
                initialSlide: x,
                onSlideChange: B,
                onResize: B,
                children: a.map(((e, a) => {
                  let {
                    title: t
                  } = e;
                  return (0, l.jsx)(r.qr, {
                    children: (0, l.jsx)(g, {
                      title: t,
                      onClick: () => z(a, t),
                      selected: x === a
                    })
                  }, t)
                }))
              })
            }), !S && N && (0, l.jsx)("div", {
              ref: I,
              className: (0, c.classList)(_.nextChipNavButton, u),
              children: (0, l.jsx)(v, {
                direction: "right",
                className: _.nextNavIcon,
                onClick: () => {
                  E.current && (E.current?.slideNext(), E.current.isEnd ? C(!0) : C(!1), b({
                    event: "carousel_next",
                    element_placement: "career progress page"
                  }))
                },
                "aria-label": p.formatMessage(j.D.pln_scroll_right)
              })
            })]
          })
        }
    },
    22137: (e, a, t) => {
      "use strict";
      t.d(a, {
        D: () => s
      });
      const s = (0, t(96717).defineMessages)({
        pln_career_progress_unavailable: {
          id: "pln_career_progress_unavailable",
          defaultMessage: "Sorry, career progress pack cards are currently unavailable."
        },
        pln_career_progress_all_chip_title: {
          id: "pln_career_progress_all_chip_title",
          defaultMessage: "All"
        },
        pln_career_progress_header_signin_label: {
          id: "pln_career_progress_header_signin_label",
          defaultMessage: "Sign In"
        },
        pln_career_progress_header_signup_label: {
          id: "pln_career_progress_header_signup_label",
          defaultMessage: "Create An Account"
        },
        pln_career_progress_header_signup_account: {
          id: "pln_career_progress_header_signup_account",
          defaultMessage: "Don't have an account?"
        },
        pln_career_progress_link_console_account: {
          id: "pln_career_progress_link_console_account",
          defaultMessage: "Link A Game Account"
        },
        pln_career_progress_link_console_account_title: {
          id: "pln_career_progress_link_console_account_title",
          defaultMessage: "Link a GTA Online Character"
        },
        pln_career_progress_link_console_account_description: {
          id: "pln_career_progress_link_console_account_description",
          defaultMessage: "We couldn't find a GTA Online character linked to your Rockstar Games account. Link one or switch to a different Rockstar Games account."
        },
        pln_career_progress_header_tooltip_aria_label: {
          id: "pln_career_progress_header_tooltip_aria_label",
          defaultMessage: "Tiers Info tooltip"
        },
        pln_career_progress_header_title: {
          id: "pln_career_progress_header_title",
          defaultMessage: "Career Progress"
        },
        pln_career_progress_header_body: {
          id: "pln_career_progress_header_body",
          defaultMessage: "Learn more about a huge range of Grand Theft Auto Online updates, and discover special challenges and rewards only available on PS5 and Xbox Series X|S."
        },
        pln_career_progress_header_body_gen9: {
          id: "pln_career_progress_header_body_gen9",
          defaultMessage: "See all the challenges you've completed in your GTA Online Career. You can also discover new ones and earn valuable rewards as you rise through the criminal ranks."
        },
        pln_career_progress_percentage_chart_title: {
          id: "pln_career_progress_percentage_chart_title",
          defaultMessage: "Complete"
        },
        pln_career_progress_percentage_chart_title_full: {
          id: "pln_career_progress_percentage_chart_title_full",
          defaultMessage: "Your career progress is {percentage}% completed."
        },
        pln_scroll_left: {
          id: "pln_scroll_left",
          defaultMessage: "Scroll Left"
        },
        pln_scroll_right: {
          id: "pln_scroll_right",
          defaultMessage: "Scroll Right"
        }
      })
    },
    83178: e => {
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
        var n = s[a] || new Set,
          i = new Set,
          c = new Set;
        for (n.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "GetAudioAlbum")
    },
    31955: (e, a, t) => {
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

      function n(e) {
        return e.filter((function(e) {
          if ("FragmentDefinition" !== e.kind) return !0;
          var a = e.name.value;
          return !r[a] && (r[a] = !0, !0)
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
      s.definitions = s.definitions.concat(n(t(90588).definitions)), s.definitions = s.definitions.concat(n(t(78417).definitions));
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
          i(e, a), c[e.name.value] = a
        }
      })), e.exports = s, e.exports.NewswireList = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [o(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var s = c[a] || new Set,
          r = new Set,
          n = new Set;
        for (s.forEach((function(e) {
            n.add(e)
          })); n.size > 0;) {
          var i = n;
          n = new Set, i.forEach((function(e) {
            r.has(e) || (r.add(e), (c[e] || new Set).forEach((function(e) {
              n.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var s = o(e, a);
          s && t.definitions.push(s)
        })), t
      }(s, "NewswireList")
    },
    43202: (e, a, t) => {
      var s = {
        "./GTAOnline.jpg": 10046,
        "./GTATrilogy.jpg": 58679,
        "./IV.jpg": 60104,
        "./V.jpg": 15007,
        "./VI/desktop.png": 94699,
        "./VI/mobile.png": 17821,
        "./agent.jpg": 65682,
        "./beaterator.jpg": 45024,
        "./bully-scholarshipedition.jpg": 38910,
        "./bully.jpg": 58205,
        "./chinatownwars.jpg": 48057,
        "./episodesfromlibertycity.jpg": 97955,
        "./grandtheftauto-gba.jpg": 99826,
        "./grandtheftauto3.jpg": 23686,
        "./gta-online.jpg": 34747,
        "./gta-v.jpg": 44342,
        "./gta.jpg": 4019,
        "./gta2.jpg": 32217,
        "./gtacomplete.jpg": 63970,
        "./gtalondon.jpg": 63201,
        "./italianjob.jpg": 27976,
        "./lanoire-vr-case-files.jpg": 57743,
        "./lanoire.jpg": 61451,
        "./lanoire_2.jpg": 67680,
        "./libertycitystories.jpg": 76766,
        "./manhunt.jpg": 61490,
        "./manhunt2.jpg": 85010,
        "./maxpayne.jpg": 85006,
        "./maxpayne2.jpg": 77126,
        "./maxpayne3.jpg": 15651,
        "./midnightclub.jpg": 57741,
        "./midnightclub2.jpg": 85171,
        "./midnightclub3.jpg": 22006,
        "./midnightclubLA-complete.jpg": 89550,
        "./midnightclubLA.jpg": 56204,
        "./oni.jpg": 94417,
        "./rdr-goty.jpg": 56647,
        "./reddeadonline.jpg": 31271,
        "./reddeadredemption.jpg": 51789,
        "./reddeadredemption2.jpg": 7891,
        "./reddeadrevolver.jpg": 73195,
        "./rockstar-games-collection-edition-1.jpg": 93564,
        "./sanandreas.jpg": 9655,
        "./skateanddestroy.jpg": 61748,
        "./smugglersrun.jpg": 40499,
        "./smugglersrun2.jpg": 7737,
        "./smugglersrunwarzones.jpg": 39528,
        "./stateofemergency.jpg": 55582,
        "./tabletennis.jpg": 20724,
        "./theballadofgaytony.jpg": 14786,
        "./thelostanddamned.jpg": 74540,
        "./thewarriors.jpg": 80173,
        "./undeadnightmare.jpg": 81919,
        "./vicecity.jpg": 31527,
        "./vicecitystories.jpg": 43048,
        "./wildmetal.jpg": 51652
      };

      function r(e) {
        var a = n(e);
        return t(a)
      }

      function n(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = n, e.exports = r, r.id = 43202
    },
    32781: (e, a, t) => {
      var s = {
        "./GTAOnline.jpg": 10046,
        "./GTATrilogy.jpg": 58679,
        "./IV.jpg": 60104,
        "./V.jpg": 15007,
        "./agent.jpg": 65682,
        "./beaterator.jpg": 45024,
        "./bully-scholarshipedition.jpg": 38910,
        "./bully.jpg": 58205,
        "./chinatownwars.jpg": 48057,
        "./episodesfromlibertycity.jpg": 97955,
        "./grandtheftauto-gba.jpg": 99826,
        "./grandtheftauto3.jpg": 23686,
        "./gta-online.jpg": 34747,
        "./gta-v.jpg": 44342,
        "./gta.jpg": 4019,
        "./gta2.jpg": 32217,
        "./gtacomplete.jpg": 63970,
        "./gtalondon.jpg": 63201,
        "./italianjob.jpg": 27976,
        "./lanoire-vr-case-files.jpg": 57743,
        "./lanoire.jpg": 61451,
        "./lanoire_2.jpg": 67680,
        "./libertycitystories.jpg": 76766,
        "./manhunt.jpg": 61490,
        "./manhunt2.jpg": 85010,
        "./maxpayne.jpg": 85006,
        "./maxpayne2.jpg": 77126,
        "./maxpayne3.jpg": 15651,
        "./midnightclub.jpg": 57741,
        "./midnightclub2.jpg": 85171,
        "./midnightclub3.jpg": 22006,
        "./midnightclubLA-complete.jpg": 89550,
        "./midnightclubLA.jpg": 56204,
        "./oni.jpg": 94417,
        "./rdr-goty.jpg": 56647,
        "./reddeadonline.jpg": 31271,
        "./reddeadredemption.jpg": 51789,
        "./reddeadredemption2.jpg": 7891,
        "./reddeadrevolver.jpg": 73195,
        "./rockstar-games-collection-edition-1.jpg": 93564,
        "./sanandreas.jpg": 9655,
        "./skateanddestroy.jpg": 61748,
        "./smugglersrun.jpg": 40499,
        "./smugglersrun2.jpg": 7737,
        "./smugglersrunwarzones.jpg": 39528,
        "./stateofemergency.jpg": 55582,
        "./tabletennis.jpg": 20724,
        "./theballadofgaytony.jpg": 14786,
        "./thelostanddamned.jpg": 74540,
        "./thewarriors.jpg": 80173,
        "./undeadnightmare.jpg": 81919,
        "./vicecity.jpg": 31527,
        "./vicecitystories.jpg": 43048,
        "./wildmetal.jpg": 51652
      };

      function r(e) {
        var a = n(e);
        return t(a)
      }

      function n(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = n, e.exports = r, r.id = 32781
    },
    65392: (e, a, t) => {
      var s = {
        "./VI/desktop.png": 94699
      };

      function r(e) {
        var a = n(e);
        return t(a)
      }

      function n(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = n, e.exports = r, r.id = 65392
    },
    17426: (e, a, t) => {
      var s = {
        "./VI/mobile.png": 17821
      };

      function r(e) {
        var a = n(e);
        return t(a)
      }

      function n(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = n, e.exports = r, r.id = 17426
    },
    10046: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    58679: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/214a1cd1a2e7bb8f9b1e5d3846ca2993.jpg"
    },
    60104: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b01707ef5603a26c1f542088f8f7c09.jpg"
    },
    15007: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    },
    94699: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1aba112359a3d6747ad694a8c02a07c.png"
    },
    17821: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/26f95aa7677031d8cd56ea75250c7bdd.png"
    },
    65682: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d66bfe06a724f04c0941073de283297.jpg"
    },
    45024: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b95ab415fdd8bec89099d433d23e3c7.jpg"
    },
    38910: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5704d117b387578dfebe1290e556f963.jpg"
    },
    58205: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f58d386594d32f34c887da75032c5be.jpg"
    },
    48057: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a8074783730a47af2fe5c2b67ddf7d31.jpg"
    },
    97955: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0281770395dc77e41c1f40559a3d5989.jpg"
    },
    99826: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/15b671d990b1f3f941c6359b3235abf3.jpg"
    },
    23686: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/81001f378e085cd20f8ee0182e23cb7c.jpg"
    },
    34747: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    44342: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    },
    4019: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f34231941013a609948485830c84c072.jpg"
    },
    32217: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48371205a1d87d858baa85712d1f91bb.jpg"
    },
    63970: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/089fe525338554e2120a1aaaf81766d6.jpg"
    },
    63201: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc4dbe3e1d52c3fc405579090868d08.jpg"
    },
    27976: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/809c3d6f72a6752f0ebcc6c92d43db67.jpg"
    },
    57743: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b13400360d3873aa5ed169d38da1ff9f.jpg"
    },
    61451: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b1034f3c525b39db31d9017268a0aeb5.jpg"
    },
    67680: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b1034f3c525b39db31d9017268a0aeb5.jpg"
    },
    76766: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ab528316ca7d31c2b041b62c4ce5dd36.jpg"
    },
    61490: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fa649a5d6b52121271093a7c564cc56a.jpg"
    },
    85010: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/116555df6799e584310484375c97a43f.jpg"
    },
    85006: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fd74a091e2e5765c8769668cc515e494.jpg"
    },
    77126: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e7d916fcce2bbe9b6419f914f290597.jpg"
    },
    15651: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0f31b4df90bff5bab740485f2d4b8253.jpg"
    },
    57741: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dd4b0f40e745f4347c822594da56a119.jpg"
    },
    85171: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/774943ec47ce732040f48df3943a0a7c.jpg"
    },
    22006: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e8ae1f733bc7d3b05c506de67f4b4f7f.jpg"
    },
    89550: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a549b321910f5308200496f1893c2a5f.jpg"
    },
    56204: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/659db20d7a19cc70a0510c7d197cedf3.jpg"
    },
    94417: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8977d6b170f295068d78c5bbb7b6f02d.jpg"
    },
    56647: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61a79de8dea0228576a18068e4f2660a.jpg"
    },
    31271: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc01cf29aa31b9d15a5d06483a0a1a3.jpg"
    },
    51789: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5aa471f90eaff248e0fbef79400cbbf3.jpg"
    },
    7891: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/082b847bcab37655faf903149f80f1e4.jpg"
    },
    73195: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d3ee871568fd751956d5ea1242a4f2d.jpg"
    },
    93564: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f79f3baf4a020b34cf9d3cf29d71f4e.jpg"
    },
    9655: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bbcbd2a2bb65ddad76e831c91c17b421.jpg"
    },
    61748: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a69bebbefae64314172002dd2bae0a34.jpg"
    },
    40499: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4393d2466a2f8931669e345898541812.jpg"
    },
    7737: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4a1657ff0ab4e3d45469556ba2f899c3.jpg"
    },
    39528: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/16e65ca64eafabe331ef1d2bef9c6f16.jpg"
    },
    55582: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/404be4f04081372768bb660a6c1991ba.jpg"
    },
    20724: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5df3b2d018d1e8e9b424b9eaebc86b16.jpg"
    },
    14786: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14448aca4ceaab8680323ce19c963d68.jpg"
    },
    74540: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f9b044c847e4c971c6ac5d096fe3e0eb.jpg"
    },
    80173: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5239707dea0f2f4ea8351f64e6b5a921.jpg"
    },
    81919: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14312e604f0637a2afd376dd571345d9.jpg"
    },
    31527: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6bf5412b358a42300603159932412051.jpg"
    },
    43048: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c82125e0b20342dba2008b0dcc6d55f6.jpg"
    },
    51652: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d0b53035bf66e851116bd0244ba6ace.jpg"
    }
  }
]);