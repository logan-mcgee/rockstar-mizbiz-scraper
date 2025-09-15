try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "fe1496b0-83ad-4e98-af2b-b179f348ecd9", e._sentryDebugIdIdentifier = "sentry-dbid-fe1496b0-83ad-4e98-af2b-b179f348ecd9")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "e75daf86583d2f46160d46d6e78dabbc975e828b",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "e75daf86583d2f46160d46d6e78dabbc975e828b"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [1432], {
    6392: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cf1b78cec82c717ea9c2155ce4093736.svg"
    },
    13924: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => u
      });
      var s = t(42295),
        n = t(62229),
        i = t(16188),
        r = t.n(i),
        c = t(14200),
        o = t(99803),
        d = t(94848),
        l = t(34725),
        m = t(2918);
      const g = ({
          guide: e,
          parentTitle: a,
          index: t
        }) => {
          const {
            track: n
          } = (0, m.useGtmTrack)();
          let i = {
            hero: {}
          };
          r().cloneDeepWith(e, ((e, a) => {
            "images" === a && (i = e)
          }));
          const {
            src: o
          } = (0, l.S1)(i?.thumb ?? {});
          return (0, s.jsx)(c.A, {
            to: e.to,
            onClick: () => {
              n({
                event: "card_click",
                card_id: e.id,
                card_name: e.title.toLowerCase(),
                link_url: e.to,
                position: t,
                element_placement: a?.toLowerCase()
              })
            },
            "aria-label": e.title,
            children: (0, s.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9be3c33ee48383e4d42e8166cff70d981",
              children: [(0, s.jsx)("div", {
                style: {
                  "--aspect-ratio": 1,
                  background: `url(${o?.mobile}) no-repeat center/cover`
                }
              }), (0, s.jsx)("h4", {
                children: e.title
              })]
            })
          })
        },
        u = ({
          guides: e = {},
          tinaModulesInfo: a,
          title: t
        }) => {
          const i = r().map(e, "guide_id"),
            c = (0, d.X)({
              ids: i
            }),
            l = a?.[0]?.title ?? t,
            [m, u] = (0, n.useState)(null);
          return (0, n.useEffect)((() => {
            const e = c?.map(((e, a) => (0, s.jsx)(g, {
              guide: e,
              parentTitle: l,
              index: a
            }, e.id)));
            u(e)
          }), [c]), (0, s.jsx)(o.A, {
            size: "lg",
            slideChildren: m,
            title: l
          })
        }
    },
    14967: () => {},
    15777: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        getVideoUrl: () => s
      });
      const s = e => e ? `/assets/videos/${e}.mp4` : "/assets/videos/default.mp4"
    },
    17054: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        BrandMessage: () => i,
        BuyNow: () => r.A,
        ClaimCountdown: () => o,
        CommunityChallenges: () => l(),
        Disclaimer: () => f.A,
        DiscoverCallout: () => u.A,
        ElevatorPitch: () => F,
        FAQ: () => b.Ay,
        Guide: () => p.A,
        GuideGroup: () => v.A,
        GuideIntro: () => k.A,
        GuideNavDesktop: () => h.A,
        GuideSection: () => x.A,
        Hero: () => B,
        HeroVideo: () => G.default,
        ImageTextGroup: () => ie.A,
        ImageTextGroupGroup: () => re.A,
        LinkoutSection: () => ce.A,
        Logo: () => de,
        SectionTitle: () => le,
        StickyColumn: () => U,
        Summary: () => K,
        SummaryCard: () => Z,
        Tile: () => ae,
        TinaWrapper: () => me.A,
        TitleImage: () => H,
        TwitchDrops: () => g(),
        ValueProp: () => ne,
        VideoPlayerWrapper: () => ge.A
      });
      var s = t(42295),
        n = t(60133);
      const i = ({
        brand: e,
        headline_left: a,
        headline_right: t,
        info: i
      }) => (0, s.jsxs)("div", {
        className: "rockstargames-sites-gta-gen9d21f3c9d6952c874ebdfb8c59fccf4c4",
        children: [(0, s.jsx)(n.A, {
          brands: [{
            brand: e
          }]
        }), (0, s.jsxs)("div", {
          className: "rockstargames-sites-gta-gen9d723a3483ffbe40280b0faa62d665775",
          children: [(0, s.jsxs)("h2", {
            children: [a, " ", (0, s.jsx)("span", {
              children: t
            })]
          }), (0, s.jsx)("p", {
            children: i
          })]
        })]
      });
      var r = t(66603),
        c = t(62229);
      const o = ({
        left: e,
        right: a
      }) => {
        const [t, n] = (0, c.useState)(""), [i, r] = (0, c.useState)(!1);
        return (0, s.jsxs)("div", {
          className: "rockstargames-sites-gta-gen9d4cf2b6544a73290a36c0d5978306345",
          children: [(0, s.jsxs)("h2", {
            "aria-hidden": i,
            onMouseOver: () => {
              r(!0), n(`${e} ${a}`)
            },
            onMouseOut: () => {
              r(!1), n("")
            },
            onFocus: () => {},
            onBlur: () => {},
            tabIndex: 0,
            children: [e, " ", (0, s.jsx)("span", {
              children: a
            })]
          }), (0, s.jsx)("h2", {
            role: "status",
            "aria-live": "polite",
            className: "rockstargames-sites-gta-gen9d409f137f998638736d516816d888018",
            children: t
          })]
        })
      };
      var d = t(5162),
        l = t.n(d),
        m = t(19570),
        g = t.n(m),
        u = t(20920),
        f = t(61324),
        b = t(96911),
        p = t(48705),
        v = t(13924),
        k = t(86417),
        h = t(58014),
        x = t(32464),
        y = t(99803),
        j = t(98357),
        _ = t(35136),
        N = t(92440),
        S = t(4572),
        w = t.n(S),
        C = t(18042);
      const T = {
          background: "rockstargames-sites-gta-gen9b6a24a872b9dcca29c2421e6abe261a7",
          buttonGroup: "rockstargames-sites-gta-gen9aeb3db441fb9d0e5e56872ef4c76e135",
          content: "rockstargames-sites-gta-gen9cdcca1527294056f1f6bed47b5e496cf",
          descriptions: "rockstargames-sites-gta-gen9e24370ef2696c6b295c2c8e1a32fd937",
          gradient: "rockstargames-sites-gta-gen9caf8df2a786db534f194eafe8e8869f4",
          hero: "rockstargames-sites-gta-gen9b2ba83d95e58e4e8ee5db947901752d6",
          images: "rockstargames-sites-gta-gen9ec42922139eb8af3babbed410b5c0985",
          layered: "rockstargames-sites-gta-gen9eccf2d8a9d0ec4cf6c087231ae7a0d7f",
          legalText: "rockstargames-sites-gta-gen9d2b6a425930fddaf41a3062887bda824",
          pillBtn: "rockstargames-sites-gta-gen9f8fcdee83ef906b0f73b6019eb716dd5",
          selected: "rockstargames-sites-gta-gen9bcd79ce88b14ac303755975890cba503",
          shardsCarousel: "rockstargames-sites-gta-gen9c75e522b68f2112d11ece94bb89f2d26"
        },
        I = ({
          title: e = "",
          mobileImg: a,
          desktopImg: t
        }) => {
          const n = (0, N.useGetCdnSource)(a ?? null),
            i = (0, N.useGetCdnSource)(t ?? n);
          return (0, s.jsx)("div", {
            className: T.shard,
            style: {
              "--background-image-mobile": `url(${n})`,
              "--background-image-desktop": `url(${i})`
            },
            children: (0, s.jsx)("h5", {
              children: e
            })
          })
        },
        A = ({
          title: e = "Membership Rewards",
          shards: a
        }) => {
          const [t, n] = (0, c.useState)(null);
          return (0, c.useEffect)((() => {
            a && n(a.map((e => {
              if (!e?.shardImg) return;
              const {
                title: a,
                shardImg: t
              } = e, {
                mobile: n,
                desktop: i
              } = t;
              return (0, s.jsx)(I, {
                title: a,
                mobileImg: n?.full_src,
                desktopImg: i?.full_src
              }, a)
            })))
          }), [a]), t ? (0, s.jsx)("div", {
            className: T.shardsCarousel,
            children: (0, s.jsx)(y.A, {
              title: e,
              slideChildren: t,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        B = ({
          brands: e = [],
          backgroundImg: a,
          layeredImg: t,
          ctas: i = [],
          expandingButtonLabel: r = "Subscribe",
          platformsAndLinks: c = [],
          description: o,
          title: d,
          legalText: l,
          shardsSection: m = {},
          className: g
        }) => {
          const u = (0, N.useGetCdnSource)(a?.mobile?.full_src ?? null),
            f = (0, N.useGetCdnSource)(a?.desktop?.full_src ?? u),
            b = (0, N.useGetCdnSource)(t?.mobile?.full_src ?? null),
            p = (0, N.useGetCdnSource)(t?.desktop?.full_src ?? b),
            v = {
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
            k = {
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
            };
          return (0, s.jsxs)(_.motion.div, {
            className: w()(T.hero, g),
            style: {
              "--background-image-desktop": `url(${f})`,
              "--background-image-mobile": `url(${u})`,
              "--layered-image-desktop": `url(${p})`,
              "--layered-image-mobile": `url(${b})`
            },
            initial: "hidden",
            animate: "visible",
            variants: v,
            children: [(0, s.jsxs)("div", {
              "data-testid": "hero",
              className: T.images,
              children: [f && u ? (0, s.jsx)("div", {
                className: T.background,
                style: a?.style ?? {}
              }) : "", b && p ? (0, s.jsx)("div", {
                className: T.layered
              }) : "", (0, s.jsx)("div", {
                className: T.gradient
              })]
            }), (0, s.jsxs)(_.motion.div, {
              className: T.content,
              initial: "hidden",
              animate: "visible",
              variants: v,
              children: [(0, s.jsx)(_.motion.div, {
                variants: k,
                children: (0, s.jsx)(n.A, {
                  brands: e
                })
              }), c.length ? (0, s.jsx)(_.motion.div, {
                variants: k,
                children: (0, s.jsx)(j.A, {
                  buttonText: r,
                  platformsAndLinks: c,
                  children: (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)(_.motion.div, {
                      className: T.descriptions,
                      variants: k,
                      children: [(0, s.jsx)("h1", {
                        dangerouslySetInnerHTML: {
                          __html: d
                        }
                      }), (0, s.jsx)("p", {
                        dangerouslySetInnerHTML: {
                          __html: o
                        }
                      })]
                    }), i.length > 0 && (0, s.jsx)(_.motion.div, {
                      variants: k,
                      children: (0, s.jsx)(C.A, {
                        buttons: i,
                        className: T.buttonGroup
                      })
                    })]
                  })
                })
              }) : (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsxs)(_.motion.div, {
                  className: T.descriptions,
                  variants: k,
                  children: [(0, s.jsx)("h1", {
                    dangerouslySetInnerHTML: {
                      __html: d
                    }
                  }), (0, s.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: o
                    }
                  })]
                }), i.length > 0 && (0, s.jsx)(_.motion.div, {
                  variants: k,
                  children: (0, s.jsx)(C.A, {
                    buttons: i,
                    className: T.buttonGroup
                  })
                })]
              }), l && (0, s.jsx)(_.motion.div, {
                className: T.legalText,
                variants: k,
                children: (0, s.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: l
                  }
                })
              })]
            }), m?.shards && (0, s.jsx)(A, {
              ...m
            })]
          })
        };
      var M = t(19913),
        V = t(26732),
        E = t(81788),
        L = t(83550);
      const P = (0, E.defineMessages)({
          elevator_pitch_link_console_account: {
            id: "elevator_pitch_link_console_account",
            description: "Message prompting user to join now",
            defaultMessage: "Join Now"
          },
          elevator_pitch_member_benefit_label: {
            id: "elevator_pitch_member_benefit_label",
            description: "Message prompting user to see the member benefits",
            defaultMessage: "Member Benefits"
          },
          elevator_pitch_available_on: {
            id: "elevator_pitch_available_on",
            description: "Prepend for platforms that the feature is available on. Will be accompanied by platforms and Icons",
            defaultMessage: "Only available on"
          },
          elevator_pitch_available_on_ps5: {
            id: "elevator_pitch_available_on_ps5",
            description: "Platform name used in ARIA labels: Playstation 5",
            defaultMessage: "PlayStation5"
          },
          elevator_pitch_available_on_xbox: {
            id: "elevator_pitch_available_on_xbox",
            description: "Platform name used in ARIA labels: Xbox Series X / S",
            defaultMessage: "Xbox Series X|S"
          },
          elevator_pitch_available_on_pc: {
            id: "elevator_pitch_available_on_pc",
            description: "Platform name used in ARIA labels: PC",
            defaultMessage: "PC"
          }
        }),
        R = {
          btnText: "rockstargames-sites-gta-gen9a48e1ee8d3e12b36e5469bd8b24bb342",
          buttonGroup: "rockstargames-sites-gta-gen9abe920c537da9aaa8a38353cae9cd093",
          ctaLinks: "rockstargames-sites-gta-gen9a801bf5e3d5213212fe0e1264294968d",
          ctaLinksContainer: "rockstargames-sites-gta-gen9cdf9ce1e4b24a6540b83c9cd42505afd",
          description: "rockstargames-sites-gta-gen9d575caf276ffc565a582234883a22fba",
          disclaimer: "rockstargames-sites-gta-gen9e2c438b9e54b2e4c4e5213fa1d49cbfc",
          elevatorPitch: "rockstargames-sites-gta-gen9fd513cc9af6a88e972723736ef93f309",
          elevatorPitchBtn: "rockstargames-sites-gta-gen9ea94a548f3be7c6be018fa5e62c65287",
          linkAccountButton: "rockstargames-sites-gta-gen9bdb769082c100b8d37e37ca7634eb68f",
          pillBtn: "rockstargames-sites-gta-gen9f15dc7913c94ea4e398f088bbc03d15b",
          pitch: "rockstargames-sites-gta-gen9f0bb897d6f7c86814c51f8eb1ffe6180",
          platformGroup: "rockstargames-sites-gta-gen9fa05409f0a6a3600d949d0952ddcbdec",
          platforms: "rockstargames-sites-gta-gen9e1fbcf677768ab9422c80de67e3ad23b",
          primaryBtn: "rockstargames-sites-gta-gen9cc051ed56e6be4c08ee1d979b9d7c304",
          secondaryBtn: "rockstargames-sites-gta-gen9cbf9ba643d59f5ef26cd1e9261992aa5",
          selected: "rockstargames-sites-gta-gen9f922b6fe161b6643bd6187741167c0bd",
          text: "rockstargames-sites-gta-gen9ef5cd6ccfa26e83f3b9f7ebd57a006b8",
          title: "rockstargames-sites-gta-gen9f618930e007937580dd35c92daa718c7",
          unexpandedButton: "rockstargames-sites-gta-gen9e5c4359b73f73c8a3ad7548a7ea472cf"
        },
        F = ({
          title: e,
          description: a,
          disclaimer: t,
          cta: n
        }) => {
          const {
            formatMessage: i
          } = (0, E.useIntl)();
          return (0, s.jsxs)("div", {
            className: R.elevatorPitch,
            "data-testid": "elevator-pitch",
            children: [(0, s.jsxs)("div", {
              className: R.pitch,
              children: [(0, s.jsx)("h2", {
                className: R.title,
                children: e
              }), (0, s.jsx)("p", {
                className: R.description,
                children: a
              })]
            }), (0, s.jsxs)("div", {
              className: R.ctaLinksContainer,
              children: [(0, s.jsxs)("div", {
                className: R.ctaLinks,
                children: [(0, s.jsx)("div", {
                  className: R.buttonGroup,
                  children: n && (0, s.jsx)(N.TinaParser, {
                    components: {
                      Cta: M.A,
                      ExpandingPlatformButton: j.A,
                      Gen9Button: V.A
                    },
                    tina: {
                      payload: {
                        content: n
                      }
                    }
                  })
                }), (0, s.jsxs)("div", {
                  className: R.platformGroup,
                  children: [(0, s.jsx)("div", {
                    className: R.text,
                    children: (0, s.jsx)(E.FormattedMessage, {
                      ...P.elevator_pitch_available_on
                    })
                  }), (0, s.jsxs)("div", {
                    className: R.platforms,
                    children: [(0, s.jsx)("img", {
                      className: R.platformIcon,
                      src: (0, L.A)("ps5") || "",
                      alt: i(P.elevator_pitch_available_on_ps5)
                    }), (0, s.jsx)("img", {
                      className: R.platformIcon,
                      src: (0, L.A)("xboxseriesxs") || "",
                      alt: i(P.elevator_pitch_available_on_xbox)
                    }), (0, s.jsx)("img", {
                      className: R.platformIcon,
                      src: (0, L.A)("pcalt") || "",
                      alt: i(P.elevator_pitch_available_on_pc)
                    })]
                  })]
                })]
              }), t && (0, s.jsx)("div", {
                className: R.disclaimer,
                children: (0, s.jsx)("p", {
                  children: t
                })
              })]
            })]
          })
        };
      var G = t(77030),
        D = t(95966),
        $ = t(55322);
      const H = ({
        imageSrc: e,
        imgTitle: a,
        description: t,
        cta: n
      }) => {
        const i = (0, N.useGetCdnSource)(e) ?? null,
          {
            isTablet: r
          } = (0, D.useWindowResize)(),
          [o, d] = (0, c.useState)(0);
        return (0, c.useEffect)((() => {
          d(r ? .5 * window.innerHeight : .25 * window.innerHeight)
        }), [r, window.innerHeight]), (0, s.jsxs)("figure", {
          className: "rockstargames-sites-gta-gen9da9cf7137b4554af52a7376b73f95862",
          children: [(0, s.jsx)("div", {
            className: "rockstargames-sites-gta-gen9dac75c91cfffebce99e959a7ff449c0b",
            style: {
              "--background-image": `url(${i})`
            },
            children: (0, s.jsx)("span", {
              className: w()("rockstargames-sites-gta-gen9d78d21271d0368e3cb992e18424ce364", "rockstargames-sites-gta-gen9eaac6b80bfbb8510c8d196db8dab1f2b"),
              children: (0, s.jsx)($.A, {
                mode: "multi",
                className: "rockstargames-sites-gta-gen9f290924e1a03efbb505d8c6febcbf732",
                forceSingleModeWidth: !0,
                max: o,
                children: (0, s.jsx)("div", {
                  className: "rockstargames-sites-gta-gen9ac5bf2f3514347bbf41536621f9ee6ea",
                  dangerouslySetInnerHTML: a ? {
                    __html: a
                  } : void 0
                })
              })
            })
          }), (0, s.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9f234ffc786a24e0aa0639fe21c7c62e9",
            children: [t && (0, s.jsx)("p", {
              className: "rockstargames-sites-gta-gen9d98ba885b836b9e46851139e2d002223",
              children: t
            }), n && (0, s.jsx)("div", {
              className: "rockstargames-sites-gta-gen9cc90f09a8f9111ac26c5b02800b0f50d",
              children: (0, s.jsx)(N.TinaParser, {
                components: {
                  Cta: M.A,
                  ExpandingPlatformButton: j.A
                },
                tina: {
                  payload: {
                    content: n
                  }
                }
              })
            })]
          })]
        })
      };
      var O = t(39252),
        z = t(2918),
        q = t(55799);
      const W = {
          gridLayout: "rockstargames-sites-gta-gen9abd3a002d12c82304f1a16828d437d2d",
          leftColumn: "rockstargames-sites-gta-gen9bf750e5ac4ef4fcf0adea8d9c120912b",
          pillBtn: "rockstargames-sites-gta-gen9f77482349780a53d7275882506f3ac08",
          rightColumn: "rockstargames-sites-gta-gen9ba7a36b77781558b65eb7017d6135313",
          selected: "rockstargames-sites-gta-gen9c6936d8eaa450f600430217c2d7ad0d0",
          shadow: "rockstargames-sites-gta-gen9d581bd44cf40ff5de24b09f1ac44fad8",
          stickyBlock: "rockstargames-sites-gta-gen9e33eb2f23d42103d1f82d95db615109f"
        },
        X = e => {
          const [a, t] = (0, c.useState)(void 0);
          return (0, c.useEffect)((() => {
            t(!!e)
          }), [e]), a
        },
        U = ({
          title: e,
          leftColumn: a,
          rightColumn: t,
          disableStickyOnDesktop: n,
          disableStickyOnMobile: i,
          id: r = ""
        }) => {
          const {
            track: o
          } = (0, z.useGtmTrack)(), {
            isTablet: d
          } = (0, D.useWindowResize)(), {
            ref: l
          } = (0, q.useInView)({
            threshold: .6,
            triggerOnce: !0,
            onChange: a => {
              a && o({
                event: "page_section_impression",
                element_placement: e?.toLowerCase()
              })
            }
          }), m = (0, c.useRef)(null), g = (0, c.useRef)(null), u = X(n), f = X(i), b = (0, N.useTinaComponents)(), p = (0, c.useMemo)((() => ({
            ...b,
            HTMLElement
          })), [b]);
          return ((e, a, t) => {
            const s = (0, c.useCallback)((() => {
              if (e && a.current && t.current) {
                const e = a.current.getBoundingClientRect().bottom,
                  s = t.current.getBoundingClientRect().top;
                t.current.style.marginTop = s <= e ? "" + (e - s) : "0"
              }
            }), [e, a, t]);
            (0, c.useEffect)((() => (window.addEventListener("scroll", s), window.addEventListener("resize", s), () => {
              window.removeEventListener("scroll", s), window.removeEventListener("resize", s)
            })), [s])
          })(d, m, g), (0, s.jsx)(O.A, {
            thresholds: [.5, 1],
            onThresholdReached: a => {
              o({
                event: "page_section_scroll",
                element_placement: e?.toLowerCase(),
                scroll_depth: 100 * a + "%"
              })
            },
            children: (0, s.jsxs)("div", {
              className: w()(W.gridLayout),
              id: r,
              children: [(0, s.jsx)("div", {
                ref: m,
                className: W.leftColumn,
                style: {
                  "--desktop-position": u ? "relative" : "sticky",
                  "--mobile-position": f ? "relative" : "sticky"
                },
                children: (0, s.jsx)("div", {
                  ref: l,
                  className: W.stickyBlock,
                  children: a && (0, s.jsx)(N.TinaParser, {
                    components: p,
                    tina: {
                      payload: {
                        content: a
                      }
                    }
                  })
                })
              }), (0, s.jsx)("div", {
                ref: g,
                className: w()(W.rightColumn, d ? W.shadow : null, W.borderGrey),
                children: t && (0, s.jsx)(N.TinaParser, {
                  components: p,
                  tina: {
                    payload: {
                      content: t
                    }
                  }
                })
              })]
            })
          })
        };
      var Y = t(93935);
      const Q = {
          benefitsContent: "rockstargames-sites-gta-gen9ddd53cff975d47544bde967e76d3b836",
          benefitsGroup: "rockstargames-sites-gta-gen9a88643cacc40499dd691cc923172eb81",
          benefitsWrapper: "rockstargames-sites-gta-gen9b9539a1e050b68a2244211811661ecef",
          description: "rockstargames-sites-gta-gen9f2c9a205fc4aaa2b53af1a3fbe5e7939",
          heading: "rockstargames-sites-gta-gen9d88696b727ef1969236c84f9812c872e",
          pillBtn: "rockstargames-sites-gta-gen9d2ddae0a995ad44289d2241ff9e30894",
          selected: "rockstargames-sites-gta-gen9df0a538b69dc0efa837e83454b438455",
          summaryBenefits: "rockstargames-sites-gta-gen9cc53a5d0b0b5a8f7aec586c7dcb0ebe8",
          summaryContent: "rockstargames-sites-gta-gen9a9b923feebb7047e79194478184e82b9",
          title: "rockstargames-sites-gta-gen9be825d3a95aaed519872e47144792232",
          titleHeading: "rockstargames-sites-gta-gen9e08e0549551793e2a2770450f25c4b8d"
        },
        K = ({
          benefits: e
        }) => e?.length ? (0, s.jsx)("section", {
          className: w()(Q.scrollableBlock, Q.benefitsWrapper),
          children: (0, s.jsx)("div", {
            className: Q.benefitsGroup,
            children: e.map((e => (0, s.jsxs)("div", {
              className: Q.benefitsContent,
              children: [(0, s.jsx)("h3", {
                className: Q.heading,
                children: e.title
              }), (0, s.jsx)(Y.A, {
                columns: e.columns ?? null,
                noImg: !0,
                list: e.list
              })]
            }, e.title)))
          })
        }) : null,
        Z = ({
          title: e,
          description: a,
          imgSrc: t,
          cta: n
        }) => {
          const i = (0, N.useGetCdnSource)(t?.mobile),
            r = (0, N.useGetCdnSource)(t?.desktop) || i;
          return (0, s.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9f5c2b4f08055afcd61341203c35ce5cc",
            role: "article",
            children: [(0, s.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9c5aed97481686103bcd6dd9233b232b8",
              children: [(0, s.jsxs)("header", {
                className: "rockstargames-sites-gta-gen9f3656c1e04b56ff20d3eef229d4d0241",
                children: [e && (0, s.jsx)("h2", {
                  className: "rockstargames-sites-gta-gen9d8afc706fb49b6338cb7cf29b8e3caf6",
                  children: e
                }), a && (0, s.jsx)("p", {
                  className: "rockstargames-sites-gta-gen9ba52cdd62b667ad47773b106c3c61cc0",
                  children: a
                })]
              }), n && (0, s.jsx)("div", {
                className: "rockstargames-sites-gta-gen9c805527c48a7bc06e6cd0b7b852c21c7",
                children: (0, s.jsx)(N.TinaParser, {
                  components: {
                    Cta: M.A,
                    ExpandingPlatformButton: j.A,
                    Gen9Button: V.A
                  },
                  tina: {
                    payload: {
                      content: n
                    }
                  }
                })
              })]
            }), t && (0, s.jsx)("div", {
              className: "rockstargames-sites-gta-gen9ffc2fea677e762c4d129fdf2455458b0",
              children: (0, s.jsx)("img", {
                src: r,
                alt: e
              })
            })]
          })
        },
        J = {
          btn__primary: "rockstargames-sites-gta-gen9f7cd84191ce7292388285221268bb216",
          contain: "rockstargames-sites-gta-gen9cf954fb41e5ae1eb6a3e34bf8056be13",
          cta: "rockstargames-sites-gta-gen9c5283b6a7f210b689b3266a3c2d0532b",
          ctaBlock: "rockstargames-sites-gta-gen9b357dfce2cbbbaaddba0922bf6aa4349",
          fullBleed: "rockstargames-sites-gta-gen9fe35d4b3501cddd0a7f8bc53b458d8d0",
          pillBtn: "rockstargames-sites-gta-gen9ccbeeaf2adb368ba639f6cf57439c93c",
          selected: "rockstargames-sites-gta-gen9e78c91f6d4f5b4795c02540af8f24464",
          tile: "rockstargames-sites-gta-gen9a55121701981a0fa5d48172268c48e15",
          "tile--large": "rockstargames-sites-gta-gen9abad2ab70da5961f0cd93a0ec0584a25",
          "tile--medium": "rockstargames-sites-gta-gen9be75e3368953489da1733298f9d9ecf9",
          "tile--right": "rockstargames-sites-gta-gen9fd8f438da705d0651f99137f64c2e451",
          "tile--small": "rockstargames-sites-gta-gen9b743dddc76f7a11f2e038f0f53bf0e23",
          tile__content: "rockstargames-sites-gta-gen9a9d7d7cb57c3428c037aba5371209bbd",
          tile__description: "rockstargames-sites-gta-gen9d0b5b4ec670ef2e69a9a29905750c758",
          tile__image: "rockstargames-sites-gta-gen9bcc24445ba035f3331f4305d4b95a2d0",
          tile__title: "rockstargames-sites-gta-gen9dc139eed59a46cb43994bd9ab230b1b9"
        },
        ee = ({
          title: e,
          description: a,
          cta: t,
          imgSrc: n,
          imgPosition: i = "top",
          cardSize: r = "medium",
          enableFullBleed: c,
          background: o = "var(--foundry-alias-color-background-bold-layer-2)",
          backgroundSize: d = "cover",
          backgroundImage: l,
          backgroundPosition: m = "center",
          backgroundRepeat: g = "no-repeat",
          customStyles: u
        }) => {
          const f = (0, N.useGetCdnSource)(n?.mobile ?? null),
            b = (0, N.useGetCdnSource)(n?.desktop ?? f),
            p = (0, N.useGetCdnSource)(l ?? null),
            v = {
              background: o,
              backgroundSize: d,
              backgroundImage: l ? `url(${p})` : void 0,
              backgroundPosition: m,
              backgroundRepeat: g,
              ...u
            };
          return (0, s.jsxs)("article", {
            className: w()(J.tile, [J[`tile--${r}`]], [J[c ? "fullBleed" : "contain"]], [J[`tile--${i}`]]),
            style: {
              ...v
            },
            children: [n && (0, s.jsx)("div", {
              role: "img",
              className: J.tile__image,
              "aria-label": n?.imgAlt || n?._memoq?.imgAlt,
              style: {
                "--background-image-desktop": `url(${b})`,
                "--background-image-mobile": `url(${f})`
              }
            }), (0, s.jsxs)("div", {
              className: w()(J.tile__content),
              children: [e && (0, s.jsx)("h2", {
                className: J.tile__title,
                children: e
              }), a && (0, s.jsx)("p", {
                className: J.tile__description,
                children: a
              }), t && (0, s.jsx)("div", {
                className: J.ctaBlock,
                children: (0, s.jsx)(N.TinaParser, {
                  components: {
                    Cta: M.A,
                    ExpandingPlatformButton: j.A
                  },
                  tina: {
                    payload: {
                      content: t
                    }
                  }
                })
              })]
            })]
          })
        },
        ae = (0, c.memo)(ee),
        te = ({
          src: e,
          alt: a
        }) => {
          const t = (0, N.useGetCdnSource)(e ?? null);
          return (0, s.jsx)("div", {
            className: "rockstargames-sites-gta-gen9bafb4e6a158f4ed0bc68089ef275ad94",
            children: (0, s.jsx)("img", {
              src: t,
              alt: a
            })
          })
        },
        se = (0, c.memo)(te),
        ne = ({
          name: e,
          valueProps: a,
          enableAnimation: t
        }) => {
          const {
            track: n
          } = (0, z.useGtmTrack)(), {
            ref: i
          } = (0, q.useInView)({
            threshold: .6,
            triggerOnce: !0,
            onChange: a => {
              a && n({
                event: "page_section_impression",
                element_placement: e.toLowerCase()
              })
            }
          }), [r, o] = (0, c.useState)([]);
          (0, c.useEffect)((() => {
            o(a.map((({
              jumpToSectionId: e = ""
            }) => e)))
          }), [a]);
          const d = (0, c.useCallback)((a => {
            const t = a + 1;
            n({
              event: "card_click",
              card_id: t.toString(),
              card_name: `Card ${t}`,
              position: t,
              element_placement: e.toLowerCase()
            });
            const s = document?.getElementById(r[a] || "") || null;
            if (s) {
              const e = 20;
              window?.scrollTo({
                top: s?.getBoundingClientRect()?.top + window?.scrollY - e,
                behavior: "smooth"
              })
            }
          }), [a, r]);
          return (0, s.jsx)("div", {
            ref: i,
            "data-animate": t,
            className: "rockstargames-sites-gta-gen9ee4924ba29def53eb12a10d11c8f705d",
            children: a.map(((e, a) => (0, s.jsxs)("button", {
              className: "rockstargames-sites-gta-gen9f971bd8827552a1baadea8776cdada8a",
              onClick: () => d(a),
              children: [e?.iconImgSrc && (0, s.jsx)("div", {
                className: "rockstargames-sites-gta-gen9cce42e1c4264e5b1460e981b29b85809",
                children: (0, s.jsx)(se, {
                  src: e?.iconImgSrc,
                  alt: e?.iconAlt || e?.title || "Icon"
                })
              }), (0, s.jsx)("h3", {
                className: "rockstargames-sites-gta-gen9fef730bb1272030876b06f9275276637",
                children: e?.title
              })]
            }, e?.key)))
          })
        };
      var ie = t(27754),
        re = t(65057),
        ce = t(34112);
      const oe = {},
        de = ({
          brand: e
        }) => (0, s.jsx)("div", {
          className: oe[e]
        }),
        le = () => (0, s.jsx)("h2", {
          children: "Section"
        });
      var me = t(25268),
        ge = t(61938)
    },
    18042: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => c
      });
      var s = t(42295),
        n = t(4572),
        i = t.n(n),
        r = t(82105);
      const c = ({
        buttons: e = [],
        className: a
      }) => e.length ? (0, s.jsx)("div", {
        className: i()("rockstargames-sites-gta-gen9d5cf39b0f935ff4f022f65634a36ef76", a),
        children: e.map((({
          icon: e,
          to: a,
          title: t,
          gtm: n
        }, i) => t ? (0, s.jsx)(r.A, {
          className: "white",
          text: t,
          to: a,
          icon: e,
          gtm: n
        }, i) : ""))
      }) : null
    },
    20920: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => v
      });
      var s = t(42295),
        n = t(62229),
        i = t(13581),
        r = t.n(i),
        c = t(27654),
        o = t(76236),
        d = t(81788),
        l = t(95966),
        m = t(26732),
        g = t(72408),
        u = t(2918),
        f = t(17954);
      const b = (0, d.defineMessages)({
          discover_callout_cards_aria: {
            id: "discover_callout_cards_aria",
            description: "aria label for the discover callout cards.",
            defaultMessage: "Pack Cards"
          },
          discover_callout_mugshot: {
            id: "discover_callout_mugshot",
            description: "The alt tag for the player characters mugshot.",
            defaultMessage: "{userName} mugshot"
          },
          discover_callout_heading: {
            id: "discover_callout_heading",
            description: "The Discover Callout section heading.",
            defaultMessage: "Career Progress"
          },
          discover_callout_description: {
            id: "discover_callout_description",
            description: "The Discover Callout section description.",
            defaultMessage: "See all the challenges you've completed in your GTA Online Career.  You can also discover new ones and earn valuable rewards as you rise through the criminal ranks."
          },
          discover_callout_cta_label: {
            id: "discover_callout_cta_label",
            description: "The Discover Callout CTA label",
            defaultMessage: "Track Progress"
          }
        }),
        p = "rockstargames-sites-gta-gen9e69747aa5d7adb3304425cd1943479d9";
      r().registerPlugin(o.u), r().registerPlugin(c.useGSAP);
      const v = ({
        backgroundColor: e,
        cardsOrientation: a = "left"
      }) => {
        const [i, r] = (0, n.useState)(""), [c, o] = (0, n.useState)(void 0), {
          currentCharId: v
        } = (0, u.useRockstarUserState)(), {
          data: k
        } = (0, u.useRockstarUser)(), {
          track: h
        } = (0, u.useGtmTrack)(), {
          windowWidth: x
        } = (0, l.useWindowResize)(), y = (0, d.useIntl)(), j = {
          "--promo-background": e ?? "var(--black-200)",
          "--promo-order": "left" === a ? "row" : "row-reverse"
        }, _ = t(40844), N = () => {}, S = (0, f.A)().data, w = !!S?.length, C = (0, n.useMemo)((() => w ? (e => {
          const a = [];
          let t = 0;
          for (let s = 0; s < e.length && t < 12; s++) {
            const n = s % 3;
            Array.isArray(a[n]) || (a[n] = []), a[n].push(e[s]), t++
          }
          return a
        })(S.reduce(((e, a) => e.concat(a.subNavItems.filter((e => e.discoverSafe)))), []).sort(((e, a) => {
          const t = new Date(e.createdAt),
            s = new Date(a.createdAt);
          return e.createdAt && a.createdAt ? s.getTime() - t.getTime() : e.createdAt ? -1 : a.createdAt ? 1 : 0
        }))) : []), [w, S]), T = (0, n.useMemo)((() => (0, s.jsx)("img", {
          alt: y.formatMessage(b.discover_callout_mugshot, {
            userName: k?.nickname
          }),
          className: "rockstargames-sites-gta-gen9b44dd13add379d566cc2778f2bbb6e62",
          src: i || _,
          onError: N
        })), [i, _, y, k]), I = {
          event: "cta_learn",
          text: "track progress",
          link_url: "/gta-online/career-progress",
          element_placement: "discover page"
        };
        return (0, n.useEffect)((() => {
          const e = document.querySelector(`.${p}`);
          e?.clientHeight && o(e.clientHeight)
        }), [x]), (0, n.useEffect)((() => {
          if (k) {
            const {
              characters: e
            } = k;
            r(e?.gtao[v]?.mugshotUrl || "")
          }
        }), [v, k]), (0, s.jsx)("div", {
          className: "rockstargames-sites-gta-gen9ef7bcdb43f351229c9a05ad1d621316c",
          children: (0, s.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9ef1462c6a58b59c70b18e542a70fb76e",
            style: j,
            children: [(0, s.jsx)("div", {
              className: "rockstargames-sites-gta-gen9dda4d1a66f24aa33e90a377b72aec436",
              "aria-label": y.formatMessage(b.discover_callout_cards_aria),
              children: w ? (0, s.jsx)("div", {
                className: "rockstargames-sites-gta-gen9ed41109354440ae1158df0c4d1912f3f",
                children: w && C.map(((e, a) => (0, s.jsxs)("div", {
                  className: "rockstargames-sites-gta-gen9c07e974cea0a798e32895669634748a3",
                  style: {
                    "--packCard-height": c ? `${c}px` : "100px"
                  },
                  tabIndex: -1,
                  children: [e.map((e => (0, s.jsx)("img", {
                    className: p,
                    src: e.images.brand,
                    alt: e.title,
                    tabIndex: -1,
                    "aria-hidden": !0
                  }, e.title))), e.map((e => (0, s.jsx)("img", {
                    className: p,
                    src: e.images.brand,
                    alt: e.title,
                    tabIndex: -1,
                    "aria-hidden": !0
                  }, e.title)))]
                }, a)))
              }) : (0, s.jsx)("div", {
                className: "rockstargames-sites-gta-gen9bd76302b4217a870b53bbe88f88d4da0",
                children: (0, s.jsx)(g.A, {
                  type: "SPINNING"
                })
              })
            }), (0, s.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9c58b655f2403e317825d3d191c6e36db",
              children: [T, (0, s.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9a09a68decb58285a04d030c5954b79ac",
                children: [(0, s.jsx)("h3", {
                  className: "rockstargames-sites-gta-gen9ff663b63b31dd02b90f4953cd210c4dd",
                  children: y.formatMessage(b.discover_callout_heading)
                }), (0, s.jsx)("p", {
                  children: y.formatMessage(b.discover_callout_description)
                })]
              }), (0, s.jsx)(m.A, {
                to: "/gta-online/career-progress",
                text: y.formatMessage(b.discover_callout_cta_label),
                onClick: I && (() => h({
                  ...I
                }))
              })]
            })]
          })
        })
      }
    },
    25268: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r
      });
      var s = t(42295),
        n = t(62229);
      var i = t(95966);
      const r = ({
        children: e,
        style: a,
        theme: t
      }) => {
        const [r, c] = (0, n.useState)(t);
        return (0, n.useEffect)((() => {
          t && c(t)
        }), [t]), (0, s.jsx)("div", {
          className: "rockstargames-sites-gta-gen9bdd63bd70824357b0aedc604c0fe628d",
          style: (0, i.safeStyles)(a),
          "data-theme": r,
          children: e
        })
      }
    },
    26002: (e, a, t) => {
      var s = {
        "./assets": 89366,
        "./assets/": 89366,
        "./assets/index": 89366,
        "./assets/index.ts": 89366,
        "./assets/videos/default.mp4": 49202,
        "./assets/videos/vinewood-club.mp4": 98897,
        "./components": 79803,
        "./components/": 79803,
        "./components/index": 79803,
        "./components/index.ts": 79803,
        "./components/pause": 40382,
        "./components/pause/": 40382,
        "./components/pause/index": 40382,
        "./components/pause/index.tsx": 40382,
        "./components/pause/types": 54451,
        "./components/pause/types.ts": 54451,
        "./components/play": 79846,
        "./components/play/": 79846,
        "./components/play/index": 79846,
        "./components/play/index.tsx": 79846,
        "./components/play/types": 39291,
        "./components/play/types.ts": 39291,
        "./hero-video": 77030,
        "./hero-video.less": 74720,
        "./hero-video.test": 93318,
        "./hero-video.test.tsx": 93318,
        "./hero-video.tsx": 77030,
        "./hero-video.utils": 15777,
        "./hero-video.utils.ts": 15777,
        "./tina": 76462,
        "./tina.ts": 76462,
        "./utils": 54884,
        "./utils/": 54884,
        "./utils/get-video-url": 68926,
        "./utils/get-video-url.ts": 68926,
        "./utils/index": 54884,
        "./utils/index.ts": 54884,
        "./utils/is-reduced-motion-preferred": 90088,
        "./utils/is-reduced-motion-preferred.ts": 90088,
        "./utils/video-hero.local-messages": 70782,
        "./utils/video-hero.local-messages.ts": 70782
      };

      function n(e) {
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
      n.keys = function() {
        return Object.keys(s)
      }, n.resolve = i, e.exports = n, n.id = 26002
    },
    26732: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => o
      });
      var s = t(42295),
        n = t(9623);
      const i = {
          blackBtn: "rockstargames-sites-gta-gen9d3207a3907ff5e6cc1498c67d5562087",
          btnText: "rockstargames-sites-gta-gen9e146813e6b911567a15379239351bb9f",
          btnTexticon: "rockstargames-sites-gta-gen9add785fa73d6a7f8cdf490add2819974",
          iconBtn: "rockstargames-sites-gta-gen9a305be36306fd7f0977b052ccab54910",
          link: "rockstargames-sites-gta-gen9a73b743df91203999c432aceb1093e62",
          pc: "rockstargames-sites-gta-gen9c4a7b17bb99afb02a9f9b9b133be7844",
          pillBtn: "rockstargames-sites-gta-gen9a76545929bba4f1522661c9f297ea3c5",
          plusButton: "rockstargames-sites-gta-gen9b35e9ba36ecaabe08c02c44808110761",
          ps4: "rockstargames-sites-gta-gen9af1b302b53e77d0da20f92de2973fd29",
          ps5: "rockstargames-sites-gta-gen9b5164622a2b180ed2b04eab4d489763b",
          selected: "rockstargames-sites-gta-gen9e5b12527bec7eae7fce9642c9827cc3b",
          small: "rockstargames-sites-gta-gen9b3ba679464048120f8440e7ae0d14086",
          transparentBtn: "rockstargames-sites-gta-gen9d4515b6bf9a4c714239cac9e27932235",
          whiteBtn: "rockstargames-sites-gta-gen9d94aba4fb4bae812e14f8715816752c2",
          xboxone: "rockstargames-sites-gta-gen9cadebea37980f01b56560143374013b3",
          xboxseriesxs: "rockstargames-sites-gta-gen9c28e2bcbd4ed4fc95b67860cb7033999"
        },
        r = ({
          children: e,
          className: a,
          onClick: t,
          style: n,
          ariaLabel: i
        }) => (0, s.jsx)("button", {
          className: a,
          onClick: t,
          style: n,
          type: "button",
          "aria-label": i,
          children: e
        }),
        c = ({
          children: e,
          className: a,
          onClick: t,
          style: i,
          to: r,
          ariaLabel: c
        }) => (0, s.jsx)(n.NavLink, {
          className: a,
          onClick: t,
          style: i,
          to: r,
          "aria-label": c,
          children: e
        }),
        o = ({
          btnColor: e = "#fff",
          className: a = "",
          consoleBtn: t,
          icon: n = "",
          img: o,
          labelColor: d = "#000",
          onClick: l,
          secondText: m,
          size: g,
          text: u,
          to: f,
          type: b = "",
          ariaLabel: p
        }) => {
          const v = [i.plusButton, i[b] ?? "", i[g] ?? "", i[t] ?? "", a].join(" "),
            k = {
              "--hvr-color": e ?? d,
              "--hvr-bg-color": d ?? e,
              "--hvr-border-color": e ?? d
            },
            h = (0, s.jsxs)(s.Fragment, {
              children: [o ? (0, s.jsx)("img", {
                src: o,
                alt: ""
              }) : "", (0, s.jsxs)("div", {
                className: i.btnText,
                icon: n,
                children: [u, m ? (0, s.jsx)("span", {
                  children: m
                }) : ""]
              })]
            });
          if (f) {
            if (f.startsWith("http")) {
              const e = f.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, s.jsx)("span", {
                onClick: l,
                onKeyDown: l,
                className: v,
                role: "button",
                "aria-label": p,
                tabIndex: 0,
                children: (0, s.jsx)("a", {
                  href: f,
                  target: e,
                  children: h
                })
              })
            }
            return (0, s.jsx)(c, {
              className: v,
              onClick: l,
              style: {
                ...k
              },
              to: f,
              ariaLabel: p,
              children: h
            })
          }
          return (0, s.jsx)(r, {
            className: v,
            onClick: l,
            style: {
              ...k
            },
            ariaLabel: p,
            children: h
          })
        }
    },
    27754: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => f
      });
      var s = t(42295),
        n = t(62229),
        i = t(95359),
        r = t(92440),
        c = t(4572),
        o = t.n(c),
        d = t(2918),
        l = t(55799),
        m = t(18042),
        g = t(60133),
        u = t(61324);
      const f = i.withFadeIn((({
        brands: e = [],
        content: a,
        ctas: t = [],
        disclaimer: i,
        image: c,
        large: f = !1,
        title: b,
        image_on_right: p = !1,
        style: v = {},
        className: k = "",
        ...h
      }) => {
        const {
          track: x
        } = (0, d.useGtmTrack)(), {
          ref: y,
          inView: j
        } = (0, l.useInView)({
          threshold: .6
        }), [_, N] = (0, n.useState)(!1), S = (0, r.useGetCdnSource)(c?.full_src ?? null) ?? null;
        return (0, n.useEffect)((() => {
          j && !_ && (x({
            event: "page_section_impression",
            element_placement: h?._memoq?.title?.toLowerCase()
          }), N(!0))
        }), [j]), (0, s.jsxs)("div", {
          className: o()("rockstargames-sites-gta-gen9b09712e85b51f933525d87904ebf185e", f ? "rockstargames-sites-gta-gen9f5c869e4888e96b514f87807325e7406" : "", p ? "rockstargames-sites-gta-gen9e51e69f0d127f928e3d110181772bfd3" : "", S ? "" : "rockstargames-sites-gta-gen9dbc2e238c4fb4c3263efcc2f5dc091fa", k),
          style: v,
          ref: y,
          children: [S ? (0, s.jsx)("div", {
            className: "rockstargames-sites-gta-gen9df7cc2db44ca7c6cff22b7fb452352dc",
            style: {
              background: `url(${S}) no-repeat center/cover`
            }
          }) : "", (0, s.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9a95bcbbeab940098ba29db3fb16c5efb",
            children: [(0, s.jsx)(g.A, {
              brands: e
            }), (0, s.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9f311b2fc36099e756cef43769555fe37",
              children: [(0, s.jsx)("h2", {
                className: "rockstargames-sites-gta-gen9e459e77309d23d24c3d27b8b9def51cd",
                children: b
              }), a ? (0, s.jsx)("div", {
                className: "rockstargames-sites-gta-gen9c38707849c98f1402c294212a6d60bf8",
                dangerouslySetInnerHTML: {
                  __html: a
                }
              }) : ""]
            }), (0, s.jsx)(m.A, {
              ctas: t
            }), (0, s.jsx)(u.A, {
              disclaimer: i
            })]
          })]
        })
      }))
    },
    30107: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg"
    },
    32464: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => c
      });
      var s = t(42295),
        n = t(62229),
        i = t(55799),
        r = t(85870);
      const c = ({
        style: e,
        children: a,
        __anchor: t = null
      }) => {
        const {
          announcePresence: c
        } = (0, r.Yh)(), {
          ref: o,
          inView: d
        } = (0, i.useInView)({
          rootMargin: "0px 0px -700px 0px",
          threshold: 0,
          delay: 850
        });
        return (0, n.useEffect)((() => {
          c(t)
        }), [t]), (0, n.useEffect)((() => {
          d && c(t)
        }), [d]), (0, s.jsx)("span", {
          style: e,
          className: "rockstargames-sites-gta-gen9e2fa43158653af56030934673d242e25",
          name: t,
          ref: o,
          children: a
        })
      }
    },
    33458: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b12e4e9678e7a4ebea34905926feeb90.svg"
    },
    34112: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => o
      });
      var s = t(42295),
        n = t(14200),
        i = t(4572),
        r = t.n(i);
      const c = {
          cta: "rockstargames-sites-gta-gen9c0247664a3a72139c46a532fa45f0b2f",
          linkoutSection: "rockstargames-sites-gta-gen9c0189aa00161ef858fc360d8a3ee31c4",
          pillBtn: "rockstargames-sites-gta-gen9c5a05e60c5daa6250d9022bc30a0ffd9",
          selected: "rockstargames-sites-gta-gen9c6e5b27a17c6f72f82ccac3a6349ecda"
        },
        o = ({
          text: e,
          cta: a,
          to: i,
          className: o = "",
          style: d = {}
        }) => (0, s.jsxs)(n.A, {
          className: r()(c.linkoutSection, o),
          to: i,
          style: d,
          children: [e && (0, s.jsx)("div", {
            className: c.text,
            children: e
          }), a && (0, s.jsxs)("div", {
            className: c.cta,
            children: [a, " ", (0, s.jsx)("img", {
              src: t(81018)
            })]
          })]
        })
    },
    39252: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r
      });
      var s = t(42295),
        n = t(62229),
        i = t(55799);
      const r = ({
        thresholds: e,
        onThresholdReached: a,
        children: t
      }) => {
        const [r, c] = (0, n.useState)([]), [o, d] = (0, n.useState)(new Set);
        return (0, n.useEffect)((() => {
          const a = Array.from(new Set(e));
          a.sort(((e, a) => e - a)), c(a)
        }), [e]), (0, s.jsxs)("div", {
          style: {
            position: "relative"
          },
          children: [r.map((e => (0, s.jsx)(i.InView, {
            threshold: e,
            onChange: t => ((e, t) => {
              e && !o.has(t) && d((e => {
                const s = new Set(e);
                return r.forEach((e => {
                  e <= t && !s.has(e) && (s.add(e), a(e))
                })), s
              }))
            })(t, e),
            triggerOnce: !0,
            children: ({
              ref: a
            }) => (0, s.jsx)("div", {
              ref: a,
              style: {
                height: "1px",
                position: "absolute",
                top: 100 * e + "%"
              }
            })
          }, e))), t]
        })
      }
    },
    39291: (e, a, t) => {
      "use strict";
      t.r(a)
    },
    40382: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        default: () => n
      });
      var s = t(42295);
      const n = ({
        alt: e = "",
        className: a = "",
        clipRule: t = "evenodd",
        fill: n = "white",
        fillRule: i = "evenodd",
        height: r = "20",
        viewBox: c = "0 0 20 20",
        width: o = "20"
      }) => (0, s.jsxs)("svg", {
        className: a,
        height: r,
        width: o,
        viewBox: c,
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, s.jsx)("title", {
          children: e
        }), (0, s.jsx)("path", {
          fillRule: i,
          clipRule: t,
          d: "M4.16797 3.33333C4.16797 2.8731 4.54106 2.5 5.0013 2.5H8.33464C8.79487 2.5 9.16797 2.8731 9.16797 3.33333V16.6667C9.16797 17.1269 8.79487 17.5 8.33464 17.5H5.0013C4.54106 17.5 4.16797 17.1269 4.16797 16.6667V3.33333Z",
          fill: n
        }), (0, s.jsx)("path", {
          fillRule: i,
          clipRule: t,
          d: "M10.8346 3.33333C10.8346 2.8731 11.2077 2.5 11.668 2.5H15.0013C15.4615 2.5 15.8346 2.8731 15.8346 3.33333V16.6667C15.8346 17.1269 15.4615 17.5 15.0013 17.5H11.668C11.2077 17.5 10.8346 17.1269 10.8346 16.6667V3.33333Z",
          fill: n
        })]
      })
    },
    40844: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    },
    44527: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TinaModulesTree"
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
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
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
                value: "tinaModulesTree"
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
                    value: "tree"
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
          end: 213
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
        body: "query TinaModulesTree($id: String, $locale: String!) {\n    tinaModulesTree(id: $id, locale: $locale) {\n        tree {\n            title\n            children {\n                title\n            }\n        }\n    }\n}\n",
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
      })), e.exports = a, e.exports.TinaModulesTree = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = s[a] || new Set,
          r = new Set,
          c = new Set;
        for (i.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            r.has(e) || (r.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var s = n(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "TinaModulesTree")
    },
    47185: (e, a, t) => {
      "use strict";
      t.d(a, {
        B: () => l,
        Y: () => d
      });
      var s = t(42295),
        n = t(62229),
        i = t(9623),
        r = t(95966),
        c = t(85870);
      const o = (0, r.setContextItem)({
          context: (0, n.createContext)(),
          key: "gen9Data"
        }),
        d = () => (0, n.useContext)(o),
        l = ({
          children: e
        }) => {
          const [a, t] = (0, n.useState)(null), [d] = (0, i.useSearchParams)(), {
            setActiveSection: l
          } = (0, c.E_)(), {
            pauseUserShouldSeeMore: m
          } = (0, r.useScroll)(), g = (0, n.useCallback)((e => {
            if (e !== d.get("section")) return void l(e);
            const a = document.getElementsByName(d.get("section"))?.[0];
            a && (m(), l(d.get("section")), a.scrollIntoView({
              behavior: "auto"
            }))
          }), [d.get("section"), a]);
          (0, n.useEffect)((() => {
            d.get("section") && g(d.get("section"))
          }), [d.get("section")]);
          const u = (0, n.useMemo)((() => ({
            announcePresence: g,
            section: a,
            setSection: t
          })), [g, a, t]);
          return (0, s.jsx)(o.Provider, {
            value: u,
            children: e
          })
        }
    },
    48705: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => i
      });
      var s = t(42295),
        n = t(47185);
      const i = ({
        children: e,
        style: a
      }) => (0, s.jsx)(n.B, {
        children: (0, s.jsx)("div", {
          className: "rockstargames-sites-gta-gen9f98b9fd72a955107202bbabd74bd3b47",
          style: a,
          "data-type": "guide",
          children: (0, s.jsx)("div", {
            className: "rockstargames-sites-gta-gen9ec205c6bdb78dfec571c38eb7fa1bf7d",
            children: e
          })
        })
      })
    },
    49202: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/video/7cfb24053cf0c7ee3c6454923c53ac28.mp4"
    },
    54451: (e, a, t) => {
      "use strict";
      t.r(a)
    },
    54884: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        getVideoUrl: () => n.getVideoUrl,
        isReducedMotionPreferred: () => s.isReducedMotionPreferred,
        messages: () => i.default
      });
      var s = t(90088),
        n = t(68926),
        i = t(70782)
    },
    55322: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r
      });
      var s = t(42295),
        n = t(62229),
        i = t(64740);
      const r = ({
        children: e,
        ...a
      }) => {
        const [t, r] = (0, n.useState)(!1);
        return (0, s.jsx)(i.zb, {
          ...a,
          onReady: () => {
            document.fonts.ready.then((() => {
              r(!0)
            }))
          },
          children: e
        })
      }
    },
    58014: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => k
      });
      var s = t(42295),
        n = t(62229),
        i = t(9623),
        r = t(16188),
        c = t.n(r),
        o = t(35136),
        d = t(14200),
        l = t(2918),
        m = t(85870);
      const g = {
          activeSection: "rockstargames-sites-gta-gen9e66ed2c434929d07a41d7019123da090",
          "focus-visible": "rockstargames-sites-gta-gen9c707b1917997b797449bb89a15a803b5",
          guide: "rockstargames-sites-gta-gen9b6f1057e3bd5c447f72a0f00fa9632bc",
          guideLink: "rockstargames-sites-gta-gen9b3285d9633fb6fbf931c857d897f19d4",
          guideLinkCurrent: "rockstargames-sites-gta-gen9edcad0840b5bebf39b5304ec183f70a2",
          guideList: "rockstargames-sites-gta-gen9ca8f0699653b08699348f5bef86c240c",
          guideNav: "rockstargames-sites-gta-gen9df1f6e9822c286cb164d47ff7eaedf07",
          guideSectionLink: "rockstargames-sites-gta-gen9e187495979c04c463c979a6ece536e03",
          headerHidden: "rockstargames-sites-gta-gen9baf6b529fe7eee619ab1e3f09b328245",
          hideSection: "rockstargames-sites-gta-gen9b233dad1b29078fc9fb1f641e49ab6a2",
          pillBtn: "rockstargames-sites-gta-gen9aa77a5ebc89b1f82d5b2d2b285dbb5f9",
          sections: "rockstargames-sites-gta-gen9a02853141523b5f14a0ed182d7908a21",
          selected: "rockstargames-sites-gta-gen9d90123bfede42f33615d4b38c7fa4bd5",
          topLevelButton: "rockstargames-sites-gta-gen9f33dd3d212718aed806c47e8d3708e26"
        },
        u = {
          ease: "easeInOut",
          duration: .3
        },
        f = {
          closed: {
            opacity: 0,
            height: "0px"
          },
          open: {
            opacity: 1,
            height: "auto"
          }
        },
        b = ({
          to: e,
          title: a,
          id_hash: t,
          query: i
        }) => {
          const {
            track: r
          } = (0, l.useGtmTrack)(), [c, o] = (0, n.useState)(t === i), {
            state: u
          } = (0, m.E_)(), {
            activeSection: f
          } = u;
          return (0, n.useEffect)((() => o(i !== f ? f === t : i === t)), [f]), (0, s.jsx)(d.A, {
            to: e,
            className: [g.guideSectionLink, c ? g.activeSection : ""].join(" "),
            onClick: () => {
              r({
                event: "nav_click",
                element_placement: "guide nav"
              })
            },
            children: a
          }, e)
        },
        p = ({
          sections: e,
          open: a
        }) => {
          const [t] = (0, i.useSearchParams)();
          return (0, s.jsx)("div", {
            className: [g.sections, !a && g.hideSection].join(" "),
            children: e?.map((({
              id_hash: e,
              title: a,
              to: n
            }, i) => (0, s.jsx)(b, {
              id_hash: e,
              query: t,
              title: a,
              to: n
            }, i)))
          })
        },
        v = ({
          currentId: e,
          group: a
        }) => {
          const [t, i] = (0, n.useState)(null), [r, l] = (0, n.useState)(null), {
            state: b
          } = (0, m.E_)(), {
            activeSection: v
          } = b;
          return (0, n.useEffect)((() => {
            const t = c().findIndex(a?.children, (({
              id_hash: a
            }) => a === e));
            l(t), i(-1 !== t)
          }), [e, v, a]), (0, s.jsxs)("div", {
            className: g.guideList,
            children: [(0, s.jsx)("button", {
              className: [g.topLevelButton, g.guideLink, t && g.guideLinkCurrent].join(" "),
              type: "button",
              onClick: () => i(!t),
              children: a.title
            }), (0, s.jsx)(o.motion.nav, {
              animate: t ? "open" : "closed",
              variants: f,
              transition: u,
              children: a?.children?.map((({
                children: a,
                id_hash: n,
                title: i,
                to: c
              }, o) => (0, s.jsxs)("div", {
                className: g.guide,
                children: [(0, s.jsx)(d.A, {
                  className: [g.guideLink, e === n ? g.guideLinkCurrent : ""].join(" "),
                  to: c,
                  tabIndex: t ? 0 : 1,
                  children: i
                }), o === r && a?.length ? (0, s.jsx)(p, {
                  sections: a,
                  open: t
                }) : ""]
              }, i)))
            })]
          })
        },
        k = ({
          currentId: e
        }) => {
          const a = (0, m.hY)(),
            {
              state: {
                headerHeight: t,
                headerHidden: n
              }
            } = (0, m.E_)();
          return (0, s.jsx)("div", {
            className: [g.guideNav, n ? g.headerHidden : ""].join(" "),
            style: {
              "--header-height": `${t}px`
            },
            children: a?.map((a => (0, s.jsx)(v, {
              currentId: e,
              group: a
            }, a.id_hash)))
          })
        }
    },
    60133: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var s = t(42295);
      const n = ({
        brands: e = []
      }) => e.length ? (0, s.jsx)("div", {
        className: "rockstargames-sites-gta-gen9f6238fa20ad55d94e2baee6252cacc9a",
        children: e.map((({
          brand: e
        }, a) => (0, s.jsx)("div", {
          className: "rockstargames-sites-gta-gen9cdf9bbf4599d4c4643bc18a37b5fa601",
          "data-brand": e
        }, a)))
      }) : null
    },
    61324: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r
      });
      var s = t(42295),
        n = t(4572),
        i = t.n(n);
      const r = ({
        disclaimer: e,
        text: a = null,
        title: t,
        className: n = "",
        style: r = {}
      }) => {
        const c = a ?? e?.text ?? null,
          o = t ? `<h5>${t}</h5>${c}` : c;
        return c ? (0, s.jsx)("div", {
          className: i()("rockstargames-sites-gta-gen9ea50fcaddd007d5cdd83d75dc493e28b", n),
          dangerouslySetInnerHTML: {
            __html: o
          },
          style: r
        }) : null
      }
    },
    61938: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r
      });
      var s = t(42295),
        n = t(31879),
        i = t.n(n);
      const r = ({
        id: e
      }) => (0, s.jsx)("div", {
        className: "rockstargames-sites-gta-gen9ded9c0fd97227bbcd0fa5f6428ef97cb",
        children: (0, s.jsx)(i(), {
          autoplay: !0,
          context: "embed",
          id: e,
          endBehavior: "stillframe",
          wrapper: !1,
          titleCrop: "2rem"
        })
      })
    },
    65057: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => l
      });
      var s = t(42295),
        n = t(62229),
        i = t(92440),
        r = t(4572),
        c = t.n(r),
        o = t(27754);
      const d = {
          bg: "rockstargames-sites-gta-gen9fe31091801f368e4eeb6684e524eed32",
          bgDesktop: "rockstargames-sites-gta-gen9b9ebdf005a46f0e015fa89c970a2b202",
          bgMobile: "rockstargames-sites-gta-gen9c6d304e39f531af3c0f1298edb0530d8",
          imageTextGroupGroup: "rockstargames-sites-gta-gen9f22a5b5471bded3e25267063bb4acd13",
          pillBtn: "rockstargames-sites-gta-gen9d051bf4df024b07268d4435f76e4c05b",
          selected: "rockstargames-sites-gta-gen9d477d8e21699718c3b861f3215ee7d3c"
        },
        l = ({
          bg: e,
          image_text_groups: a = [],
          style: t = {},
          className: r = ""
        }) => {
          const l = (0, i.useGetCdnSource)(e?.image?.mobile?.full_src ?? null),
            m = (0, i.useGetCdnSource)(e?.image?.desktop?.full_src ?? null) ?? l;
          return a.length ? (0, s.jsxs)("div", {
            className: c()(d.imageTextGroupGroup, r),
            style: t,
            children: [l ? (0, s.jsx)("div", {
              className: [d.bgMobile, d.bg].join(" "),
              style: {
                background: `url(${l}) no-repeat center/cover`
              }
            }) : "", m ? (0, s.jsx)("div", {
              className: [d.bgDesktop, d.bg].join(" "),
              style: {
                background: `url(${m}) no-repeat center/cover`
              }
            }) : "", a.map(((e, a) => (0, n.createElement)(o.A, {
              ...e,
              key: a
            })))]
          }) : null
        }
    },
    65957: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    66603: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => h
      });
      var s = t(42295),
        n = t(62229),
        i = t(35136),
        r = t(95359),
        c = t(29315),
        o = t(2918),
        d = t(55799),
        l = t(92440),
        m = t(24162),
        g = t(7545),
        u = t(82105);
      const f = {
        addedInfo: "rockstargames-sites-gta-gen9ecebdfbbb8664273e60cf5b0124abe06",
        backgroundImage: "rockstargames-sites-gta-gen9d32ec6c5086cedcceae1d072aee4e056",
        bottomText: "rockstargames-sites-gta-gen9c5ffa779bb09039356fe8883b4fcac22",
        btnArea: "rockstargames-sites-gta-gen9df5ebafc18cd32806cae851c9f6dec49",
        buyNowArea: "rockstargames-sites-gta-gen9b12dd0413eee1cad648d006aca06d858",
        card: "rockstargames-sites-gta-gen9ad0ad646806352ae0a799fec0ba233b3",
        closeBtn: "rockstargames-sites-gta-gen9e4a30069b67e78d17d8b259fd6fbebf9",
        closed: "rockstargames-sites-gta-gen9d0d5bbebcc175ad1df63c09efd45a148",
        content: "rockstargames-sites-gta-gen9bda7a52557d65b5b77591cb72cd816cd",
        contentGrid: "rockstargames-sites-gta-gen9a39b9b077c1e79d0da875a297e83fdff",
        ctaBtn: "rockstargames-sites-gta-gen9ddc663b4618b40b41a0448e187c8eeec",
        ctaBtnText: "rockstargames-sites-gta-gen9a4aaa62eabc82bb4cb94fd3d7ac7ffa5",
        foregroundImage: "rockstargames-sites-gta-gen9c08169fa5e30f0ab58d83b95b6547b50",
        imageGroup: "rockstargames-sites-gta-gen9e4ac1266f37004b14c4410e015e505d0",
        imgDesktop: "rockstargames-sites-gta-gen9c3829d9fc2bc7587466bf64199ca83c9",
        imgMobile: "rockstargames-sites-gta-gen9b0ed43ba8b973198107dd81517c432c5",
        linkList: "rockstargames-sites-gta-gen9b74531e8a5ef761ba8892f5b8f90c735",
        linksArea: "rockstargames-sites-gta-gen9e189b898f0dd25d9af82c5b311dafb1f",
        nextBtn: "rockstargames-sites-gta-gen9b7b5802c64ea1aad5e4c769bca1f5132",
        pillBtn: "rockstargames-sites-gta-gen9f1a2211e41cad20f60731249de0174f6",
        platforms: "rockstargames-sites-gta-gen9fcb7a2232b11627c161d301f7ff13d11",
        prevBtn: "rockstargames-sites-gta-gen9e31eb460f8d416b1d1e621eb14129b13",
        responsiveImages: "rockstargames-sites-gta-gen9a7369afacbaea1cb98000a7ef486f54c",
        selected: "rockstargames-sites-gta-gen9ffa153ee7956b1766e65c6fbcedb9563",
        titleArea: "rockstargames-sites-gta-gen9d6a81af377181410bef0ef4cf3b35add",
        topArea: "rockstargames-sites-gta-gen9ca61c1420b75faf8d3edc65b1c737f5e"
      };
      var b = t(70129);
      const p = ({
          className: e,
          images: a
        }) => {
          const t = (0, l.useGetCdnSource)(a?.mobile?.full_src ?? null),
            n = (0, l.useGetCdnSource)(a?.desktop?.full_src ?? t);
          return (0, s.jsxs)("div", {
            className: [e, f.responsiveImages].join(" "),
            children: [t ? (0, s.jsx)("div", {
              className: f.imgMobile,
              style: {
                background: `url(${t}) no-repeat center/cover`
              }
            }) : "", n ? (0, s.jsx)("div", {
              className: f.imgDesktop,
              style: {
                background: `url(${n}) no-repeat center/cover`
              }
            }) : ""]
          })
        },
        v = ({
          addedInfo: e = null,
          buynowbtn: a = null,
          description: r = null,
          images: c,
          links: d = [],
          title: l = null
        }) => {
          const {
            track: g
          } = (0, o.useGtmTrack)(), [v, k] = (0, n.useState)(!1), h = (0, n.useRef)(null), x = {
            type: "spring",
            stiffness: 425,
            damping: 40
          }, y = {
            type: "spring",
            stiffness: 650,
            damping: 45
          }, j = {
            ease: "easeOut",
            duration: .9,
            delay: .3
          }, _ = {
            open: {
              opacity: 0,
              transition: {
                ease: "easeOut",
                duration: .3
              }
            },
            closed: {
              opacity: 1,
              transition: j
            }
          }, N = {
            open: {
              opacity: 1,
              display: "grid",
              height: "auto",
              transition: {
                opacity: j,
                height: x
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
                height: y
              },
              transitionEnd: {
                display: "none"
              }
            }
          }, S = {
            open: {
              cursor: "default",
              "--cta-border-color": "var(--white-15)",
              "--cta-background-color": "rgba(255,255,255,.1)",
              "--cta-background-color-noBlur": "var(--black-100)",
              gridGap: "var(--grid-gap-sm)",
              transition: x,
              paddingBottom: "var(--card-padding)",
              "--btn-hover-bg-color": "rgba(255,255,255,.1)",
              "--btn-hover-bg-color-noBlur": "var(--black-100)",
              "--btn-hover-font-color": "none",
              "--btn-hover-border-color": "var(--white-15)"
            },
            closed: {
              "--cta-border-color": "var(--white-100)",
              "--cta-background-color": "inherit",
              "--cta-background-color-noBlur": "inherit",
              gridGap: 0,
              transition: y,
              transitionEnd: {
                "--btn-hover-bg-color": "inherit",
                "--btn-hover-bg-color-noBlur": "inherit",
                "--btn-hover-font-color": "inherit",
                "--btn-hover-border-color": "inherit"
              }
            }
          };
          return (0, s.jsx)(m.qr, {
            children: (0, s.jsxs)("div", {
              className: f.card,
              children: [(0, s.jsxs)("div", {
                className: f.imageGroup,
                children: [(0, s.jsx)(p, {
                  className: f.backgroundImage,
                  images: c?.background
                }), (0, s.jsx)(p, {
                  className: f.foregroundImage,
                  images: c?.foreground
                })]
              }), (0, s.jsxs)("div", {
                className: f.content,
                children: [(0, s.jsxs)(i.motion.div, {
                  className: f.contentGrid,
                  animate: v ? "open" : "closed",
                  variants: _,
                  children: [(0, s.jsxs)("div", {
                    className: f.titleArea,
                    children: [(0, s.jsx)("h2", {
                      dangerouslySetInnerHTML: {
                        __html: l
                      }
                    }), (0, s.jsx)("p", {
                      dangerouslySetInnerHTML: {
                        __html: r
                      }
                    })]
                  }), d.length ? (0, s.jsx)("div", {
                    className: f.platforms,
                    children: d.map(((e, a) => (0, s.jsx)("div", {
                      className: f[e.platform],
                      children: e.platform ? (0, s.jsx)("img", {
                        src: t(85394)(`./${e.platform}.svg`),
                        alt: `${"xboxone"===e.platform?"xbox one":e.platform}`
                      }) : ""
                    }, `${e.platform+a}`)))
                  }) : ""]
                }), e ? (0, s.jsx)(i.motion.p, {
                  className: f.addedInfo,
                  dangerouslySetInnerHTML: {
                    __html: e
                  },
                  animate: v ? "open" : "closed",
                  variants: _
                }) : "", a ? (0, s.jsxs)(i.motion.div, {
                  className: [f.ctaBtn, b.Ay.plusButton, v ? "" : f.closed].join(" "),
                  animate: v ? "open" : "closed",
                  variants: S,
                  initial: !1,
                  children: [(0, s.jsx)(i.motion.button, {
                    className: [f.ctaBtnText, b.Ay.btnText].join(" "),
                    animate: v ? "open" : "closed",
                    variants: {
                      open: {
                        pointerEvents: "none",
                        cursor: "default",
                        paddingTop: "var(--card-padding)",
                        paddingBottom: "0",
                        paddingLeft: "var(--card-padding)",
                        paddingRight: "var(--card-padding)"
                      },
                      closed: {
                        cursor: "pointer",
                        paddingTop: "var(--padding-sm)",
                        paddingBottom: "var(--padding-sm)",
                        paddingLeft: "var(--padding-md)",
                        paddingRight: "var(--padding-md)"
                      }
                    },
                    initial: !1,
                    onClick: () => {
                      g({
                        event: "select_platform",
                        text: "select platform",
                        element_placement: `buy now > ${l?.toLowerCase()}`
                      }), k(!v)
                    },
                    onAnimationComplete: () => {
                      h?.current?.focus()
                    },
                    children: a
                  }), v && (0, s.jsx)("button", {
                    type: "button",
                    className: f.closeBtn,
                    onClick: () => {
                      g({
                        event: "cta_other",
                        text: "close",
                        element_placement: `buy now > ${l?.toLowerCase()} > select platform`
                      }), k(!1)
                    },
                    "aria-hidden": !v,
                    ref: h,
                    children: (0, s.jsx)("img", {
                      src: t(70930),
                      alt: "Close menu button"
                    })
                  }), (0, s.jsx)(i.motion.div, {
                    className: [f.linksArea, v ? f.showLinks : ""].join(" "),
                    animate: v ? "open" : "closed",
                    variants: N,
                    initial: !1,
                    children: (0, s.jsx)("div", {
                      className: f.linkList,
                      children: d.length ? d.map(((e, a) => {
                        return (0, s.jsx)(u.A, {
                          type: "blackBtn",
                          size: "large",
                          img: t(85394)(`./${e.platform}.svg`),
                          consoleBtn: e.platform,
                          to: e.href,
                          altText: e?.altText,
                          onClick: (n = e.platform, i = e.href, () => {
                            g({
                              event: "cta_store_link",
                              text: n,
                              link_url: i,
                              element_placement: `buy now > ${l?.toLowerCase()} > select platform`
                            })
                          }),
                          "aria-hidden": !v
                        }, `${e.platform+a}`);
                        var n, i
                      })) : ""
                    })
                  })]
                }) : ""]
              })]
            })
          })
        };
      v.displayName = "SwiperSlide";
      const k = {
          0: {
            slidesPerView: 1,
            spaceBetween: 16,
            enabled: !0
          },
          768: {
            slidesPerView: 1.25,
            spaceBetween: 16,
            enabled: !0
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 18,
            enabled: !1
          },
          1920: {
            slidesPerView: 2,
            spaceBetween: 20,
            enabled: !1
          },
          2560: {
            slidesPerView: 2,
            spaceBetween: 22,
            enabled: !1
          }
        },
        h = r.withFadeIn((0, c.A)((({
          cards: e = [],
          bottomText: a,
          topText: t,
          ...i
        }) => {
          const {
            track: r
          } = (0, o.useGtmTrack)(), {
            ref: c,
            inView: l
          } = (0, d.useInView)({
            threshold: .6
          }), [u, b] = (0, n.useState)(!1);
          return (0, n.useEffect)((() => {
            l && !u && (r({
              event: "page_section_impression",
              element_placement: i?._memoq?.topText?.toLowerCase()
            }), b(!0))
          }), [l]), (0, s.jsxs)("div", {
            className: f.buyNowArea,
            ref: c,
            children: [(0, s.jsxs)("div", {
              className: f.topArea,
              children: [t ? (0, s.jsx)("h2", {
                children: t
              }) : "", (0, s.jsxs)("div", {
                className: f.btnArea,
                children: [(0, s.jsx)("div", {
                  className: f.prevBtn
                }), (0, s.jsx)("div", {
                  className: f.nextBtn
                })]
              })]
            }), e?.length ? (0, s.jsx)(m.RC, {
              grabCursor: !0,
              navigation: {
                nextEl: `.${f.nextBtn}`,
                prevEl: `.${f.prevBtn}`
              },
              onSlideNextTransitionEnd: () => {
                r({
                  event: "carousel_next",
                  element_placement: t?.toLowerCase() ?? ""
                })
              },
              onSlidePrevTransitionEnd: () => {
                r({
                  event: "carousel_previous",
                  element_placement: t?.toLowerCase() ?? ""
                })
              },
              onSlideChangeTransitionEnd: () => {
                r({
                  event: "carousel_swipe",
                  element_placement: t?.toLowerCase() ?? ""
                })
              },
              modules: [g.Vx],
              breakpoints: k,
              children: e.map((e => (0, n.createElement)(v, {
                ...e,
                key: JSON.stringify(e)
              }))) ?? ""
            }) : "", a ? (0, s.jsx)("p", {
              className: f.bottomText,
              children: a
            }) : ""]
          })
        })))
    },
    68926: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        getVideoUrl: () => s
      });
      const s = e => e ? `/assets/videos/${e}.mp4` : "/assets/videos/default.mp4"
    },
    70129: (e, a, t) => {
      "use strict";
      t.d(a, {
        Ay: () => s
      });
      const s = {
        blackBtn: "rockstargames-sites-gta-gen9bbd36af2983e15984f3d2fa86129628f",
        btnText: "rockstargames-sites-gta-gen9e4f5dc32465e33ed6130d534797e872d",
        btnTexticon: "rockstargames-sites-gta-gen9c56c801a4897f1a22bb198809026c4af",
        iconBtn: "rockstargames-sites-gta-gen9c0f3776450e9060231d6d337875f9c5b",
        link: "rockstargames-sites-gta-gen9b674c52b22c36a24354be5d90f57b9d4",
        pc: "rockstargames-sites-gta-gen9ca151f4cfae57e062233ee5279d44ad4",
        pillBtn: "rockstargames-sites-gta-gen9f15ebf4bd284c6bf502680beaff4673f",
        plusButton: "rockstargames-sites-gta-gen9d4a62e4f78c35665195e12dd5a2144f5",
        ps4: "rockstargames-sites-gta-gen9a20ae3e61b8916d13f90dc35e5aaf916",
        ps5: "rockstargames-sites-gta-gen9a2713e909f1d2dff9938b778ee8fd11b",
        selected: "rockstargames-sites-gta-gen9d256197abeb6fc349fcc27d01f21866e",
        small: "rockstargames-sites-gta-gen9c2a7ad87320bd484347d2304919b377f",
        transparentBtn: "rockstargames-sites-gta-gen9faacc07dbc90b60f23c2b5b754f019bb",
        whiteBtn: "rockstargames-sites-gta-gen9e07aef349a8e5e5c36b76566c83c4c79",
        xboxone: "rockstargames-sites-gta-gen9f75f6748656bc069f9d20f9f2183ec6e",
        xboxseriesxs: "rockstargames-sites-gta-gen9ea41ca8dd514fd714b8ed6d951bf006d"
      }
    },
    70782: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        default: () => s
      });
      const s = (0, t(81788).defineMessages)({
        video_hero_support_message: {
          id: "video_hero_support_message",
          description: "Video Hero description when video unavailable or not supported",
          defaultMessage: "Your browser does not support video reproduction."
        },
        video_hero_play_button_label: {
          id: "video_hero_play_button_label",
          description: "Play video button",
          defaultMessage: "Play button"
        },
        video_hero_pause_button_label: {
          id: "video_hero_pause_button_label",
          description: "Pause video button",
          defaultMessage: "Pause button"
        }
      })
    },
    70930: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c453a914f0b049334120adfcba614e5.svg"
    },
    71395: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg"
    },
    74720: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        default: () => b,
        heroBackgroundImg: () => s,
        heroCTA: () => n,
        heroContainer: () => i,
        heroContent: () => r,
        heroContentImg: () => c,
        heroContentWrapper: () => o,
        heroOverlay: () => d,
        heroVideo: () => l,
        heroVideoPlayPauseBtn: () => m,
        heroVideoWrapper: () => g,
        pillBtn: () => u,
        selected: () => f
      });
      var s = "rockstargames-sites-gta-gen9e92c7660caabd22b2f06e10b65ff5973",
        n = "rockstargames-sites-gta-gen9e5850d65d78ee941581350c10927c108",
        i = "rockstargames-sites-gta-gen9de61f9f0fbf4ae3e3b07b26d7c10a639",
        r = "rockstargames-sites-gta-gen9d5a3173e27bff888207a7723eb2b63a9",
        c = "rockstargames-sites-gta-gen9f42b599db347bf5fe648d2378e513fd7",
        o = "rockstargames-sites-gta-gen9ccf0d483e03e6a559024c925f53acb62",
        d = "rockstargames-sites-gta-gen9a97e06257d4710e044371f38ce00dccb",
        l = "rockstargames-sites-gta-gen9b85fcf4842e5aa328e802d6d9adbc2f2",
        m = "rockstargames-sites-gta-gen9a31a09aae4f84e779f576d40766f35cb",
        g = "rockstargames-sites-gta-gen9d4b7b248ee11d241ed4a5037fcbfb292",
        u = "rockstargames-sites-gta-gen9c61c7a18f75fc8ad8a63e6ecc2e0038f",
        f = "rockstargames-sites-gta-gen9b9cd5815545327a81bd18b8d31a24430";
      const b = {
        heroBackgroundImg: s,
        heroCTA: n,
        heroContainer: i,
        heroContent: r,
        heroContentImg: c,
        heroContentWrapper: o,
        heroOverlay: d,
        heroVideo: l,
        heroVideoPlayPauseBtn: m,
        heroVideoWrapper: g,
        pillBtn: u,
        selected: f
      }
    },
    76462: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        default: () => c
      });
      var s = t(42783),
        n = t(34725);
      const i = ({
          label: e
        }) => [{
          value: "",
          label: e
        }, {
          value: "image",
          label: "Image"
        }, {
          value: "video",
          label: "Video"
        }],
        r = ({
          label: e
        }) => [{
          value: "",
          label: e
        }, {
          value: "vinewood-club",
          label: "Vinewood Club"
        }],
        c = () => ({
          label: "Hero Video",
          name: "content",
          component: "group",
          fields: [(0, s.om)(), {
            label: "Variant",
            name: "variant",
            description: "Set the variant for the Hero",
            component: "select",
            options: i({
              label: "-- Select Variant --"
            })
          }, {
            label: "Video",
            name: "videoSrc",
            description: "Select video for the Hero",
            component: "select",
            options: r({
              label: "-- Select A Video --"
            })
          }, {
            name: "fallbackImg",
            label: "Fallback Image",
            component: "image",
            clearable: !0,
            previewSrc: n.z0,
            parse: n.qg,
            uploadDir: n.XC
          }, (0, s.z9)({
            label: "Fallback Image Alt Tag",
            name: "fallbackImgAlt",
            component: "text"
          }), {
            name: "contentImgSrc",
            label: "Content Image",
            component: "image",
            clearable: !0,
            previewSrc: n.z0,
            parse: n.qg,
            uploadDir: n.XC
          }, (0, s.z9)({
            label: "Content Image Alt Tag",
            name: "contentImgAlt",
            component: "text"
          }), (0, s.z9)({
            label: "Heading",
            name: "heading",
            component: "text"
          }), (0, s.z9)({
            label: "SubHeading",
            name: "subheading",
            component: "text"
          }), (0, s.z9)({
            label: "CTA text",
            name: "ctaText",
            description: 'Treated as button text (eg. "View More")',
            component: "text"
          }), {
            label: "CTA link",
            name: "ctaLink",
            component: "text"
          }, (0, s.bY)({
            filter: "heroVideo"
          }), (0, s.sE)({
            filter: "heroVideo"
          })],
          defaultItem: () => (0, s.Q)(),
          itemProps: e => (0, s.Rv)(e, {
            label: `[Hero Video]: ${e?.[s.Qw]?.name??e?.name??"New"}`
          })
        })
    },
    77030: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        default: () => g
      });
      var s = t(42295),
        n = t(62229),
        i = t(92440),
        r = t(2918),
        c = t(81788),
        o = t(15777),
        d = t(54884),
        l = t(79803),
        m = t(74720);
      const g = ({
        variant: e,
        videoSrc: a,
        fallbackImg: g,
        fallbackImgAlt: u,
        contentImgSrc: f,
        contentImgAlt: b,
        heading: p,
        subheading: v,
        ctaText: k,
        ctaLink: h,
        overlayColor: x
      }) => {
        const {
          track: y
        } = (0, r.useGtmTrack)(), j = (0, n.useRef)(null), [_, N] = (0, n.useState)(!1), S = (0, d.isReducedMotionPreferred)(), w = (0, i.useGetCdnSource)(f?.full_src ?? ""), C = (0, i.useGetCdnSource)(g), T = (0, o.getVideoUrl)(a), {
          formatMessage: I
        } = (0, c.useIntl)(), A = "image" === e || S;
        let B;
        (0, n.useEffect)((() => {
          const e = () => N(!0),
            a = () => N(!1),
            t = j.current;
          return t && (t.addEventListener("play", e), t.addEventListener("pause", a)), () => {
            t && (t.removeEventListener("play", e), t.removeEventListener("pause", a))
          }
        }), []);
        try {
          B = T ? t(26002)(`.${T}`) : "mock-video-url.mp4"
        } catch (e) {
          console.error("Error loading video: ", e)
        }
        return (0, s.jsxs)("div", {
          className: m.default.heroContainer,
          children: [(0, s.jsx)("div", {
            className: m.default.heroVideoWrapper,
            children: "image" === e || S ? (0, s.jsx)("img", {
              className: m.default.heroBackgroundImg,
              src: C,
              alt: u
            }) : (0, s.jsxs)(s.Fragment, {
              children: [(0, s.jsxs)("video", {
                ref: j,
                "data-testid": "hero-video",
                className: m.default.heroVideo,
                autoPlay: !0,
                loop: !0,
                muted: !0,
                playsInline: !0,
                children: [(0, s.jsx)("source", {
                  src: B,
                  type: "video/mp4"
                }), I(d.messages.video_hero_support_message)]
              }), (0, s.jsx)("button", {
                role: "button",
                className: m.default.heroVideoPlayPauseBtn,
                onClick: () => {
                  if (!A && j.current) {
                    let e = "";
                    _ ? (j.current.pause(), e = "toggle pause") : (j.current.play(), e = "toggle play"), y({
                      event: "cta_other",
                      text: e,
                      element_placement: "hero"
                    }), N(!_)
                  }
                },
                "aria-hidden": !0,
                children: _ ? (0, s.jsx)(l.Pause, {
                  alt: I(d.messages.video_hero_pause_button_label),
                  height: "24",
                  width: "24"
                }) : (0, s.jsx)(l.Play, {
                  alt: I(d.messages.video_hero_play_button_label),
                  height: "24",
                  width: "24"
                })
              })]
            })
          }), (0, s.jsx)("div", {
            className: m.default.heroOverlay,
            style: {
              "--overlay-bg": x ?? "var(--gradient-black-200-bottom, linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%))"
            }
          }), (f || p || v || k) && (0, s.jsx)("div", {
            className: m.default.heroContentWrapper,
            children: (0, s.jsxs)("div", {
              className: m.default.heroContent,
              children: [f && (0, s.jsx)("img", {
                className: m.default.heroContentImg,
                src: w ?? f,
                alt: b
              }), p && (0, s.jsx)("h1", {
                children: p
              }), v && (0, s.jsx)("h2", {
                children: v
              }), h && (0, s.jsx)("a", {
                href: h,
                className: m.default.heroCTA,
                children: k
              })]
            })
          })]
        })
      }
    },
    79803: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        Pause: () => n.default,
        Play: () => s.default
      });
      var s = t(79846),
        n = t(40382)
    },
    79846: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        default: () => n
      });
      var s = t(42295);
      const n = ({
        alt: e = "",
        className: a = "",
        clipRule: t = "evenodd",
        fill: n = "white",
        fillRule: i = "evenodd",
        height: r = "20",
        viewBox: c = "0 0 20 20",
        width: o = "20"
      }) => (0, s.jsxs)("svg", {
        className: a,
        height: r,
        width: o,
        viewBox: c,
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, s.jsx)("title", {
          children: e
        }), (0, s.jsx)("path", {
          fillRule: i,
          clipRule: t,
          d: "M3.76604 1.76853C4.0336 1.62246 4.35957 1.63413 4.616 1.79898L16.2827 9.29898C16.5212 9.45231 16.6654 9.71641 16.6654 9.99996C16.6654 10.2835 16.5212 10.5476 16.2827 10.7009L4.616 18.2009C4.35957 18.3658 4.0336 18.3775 3.76604 18.2314C3.49848 18.0853 3.33203 17.8048 3.33203 17.5V2.49996C3.33203 2.19512 3.49848 1.91461 3.76604 1.76853Z",
          fill: n
        })]
      })
    },
    80237: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5bd8456deb2338503b8fd44786b5fa07.svg"
    },
    81018: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1e50aff7a4148673983e493ca815454e.svg"
    },
    82105: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => d
      });
      var s = t(42295),
        n = t(9623),
        i = t(2918),
        r = t(70129);
      const c = ({
          children: e,
          className: a,
          onClick: t,
          style: n,
          innerRef: i = null
        }) => (0, s.jsx)("button", {
          className: a,
          onClick: t,
          style: n,
          type: "button",
          ref: i,
          children: e
        }),
        o = ({
          children: e,
          className: a,
          onClick: t,
          style: i,
          to: r
        }) => (0, s.jsx)(n.NavLink, {
          className: a,
          onClick: t,
          style: i,
          to: r,
          children: e
        }),
        d = ({
          altText: e = "",
          text: a,
          onClick: t,
          btnColor: n = "#fff",
          labelColor: d = "#000",
          type: l = "",
          icon: m,
          size: g,
          secondText: u,
          consoleBtn: f = !1,
          img: b,
          to: p = !1,
          gtm: v,
          innerRef: k = null
        }) => {
          const {
            track: h
          } = (0, i.useGtmTrack)(), x = [r.Ay.plusButton, r.Ay[l] ?? "", r.Ay[g] ?? "", r.Ay[f] ?? ""].join(" "), y = {
            "--hvr-color": n ?? d,
            "--hvr-bg-color": d ?? n,
            "--hvr-border-color": n ?? d
          }, j = (0, s.jsxs)(s.Fragment, {
            children: [b ? (0, s.jsx)("img", {
              src: b,
              alt: e || a
            }) : "", (0, s.jsxs)("div", {
              className: r.Ay.btnText,
              icon: m,
              children: [a, u ? (0, s.jsx)("span", {
                children: u
              }) : ""]
            })]
          }), _ = e => {
            t?.(e), v && h({
              event: "cta_other",
              text: a,
              ...v,
              link_url: p || ""
            })
          };
          if (p) {
            if (p.startsWith("http")) {
              const e = p.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, s.jsx)("span", {
                children: (0, s.jsx)("a", {
                  href: p,
                  className: x,
                  target: e,
                  onClick: _,
                  children: j
                })
              })
            }
            return (0, s.jsx)(o, {
              className: x,
              onClick: _,
              style: y,
              to: p,
              children: j
            })
          }
          return (0, s.jsx)(c, {
            className: x,
            onClick: _,
            style: y,
            innerRef: k,
            children: j
          })
        }
    },
    84343: e => {
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
                            value: "id"
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
                          }]
                        }, {
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
          end: 1002
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
        body: "query TinaModulesList($types: [String], $locale: String!) {\n    tinaModulesList(types: $types, locale: $locale) {\n        results {\n            id_hash\n            id\n            title\n            type\n        }\n    }\n}\n\nquery TinaModulesInfo(\n    $ids: [String]!\n    $locale: String!\n    $sync: Boolean = false\n    $cache: Boolean = false\n) {\n    tinaModulesInfo(ids: $ids, locale: $locale, cache: $cache) {\n        id: id_hash\n        title\n        title_doc\n        type\n        sync_hash\n        to\n        visible\n        children {\n            title\n            id_hash\n            to\n            tina {\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n        tina {\n            payload\n            variables {\n                id @include(if: $sync)\n                keys\n                _translations @include(if: $sync) {\n                    locale\n                    keys\n                }\n            }\n        }\n    }\n}\n",
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

      function i(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = s[a] || new Set,
          r = new Set,
          c = new Set;
        for (i.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            r.has(e) || (r.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
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
      })), e.exports = a, e.exports.TinaModulesList = i(a, "TinaModulesList"), e.exports.TinaModulesInfo = i(a, "TinaModulesInfo")
    },
    85394: (e, a, t) => {
      var s = {
        "./left.svg": 92085,
        "./pc.svg": 65957,
        "./ps4.svg": 71395,
        "./ps5.svg": 33458,
        "./right.svg": 6392,
        "./x.svg": 70930,
        "./xboxone.svg": 30107,
        "./xboxseriesxs.svg": 80237
      };

      function n(e) {
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
      n.keys = function() {
        return Object.keys(s)
      }, n.resolve = i, e.exports = n, n.id = 85394
    },
    85870: (e, a, t) => {
      "use strict";
      t.d(a, {
        E_: () => i,
        Yh: () => r.Y,
        qj: () => g,
        hY: () => o,
        hI: () => l
      });
      var s = t(95966);
      const n = (0, s.makeVar)({
          brand: null,
          headerHeight: 0,
          headerHidden: !1,
          mobileNavOpen: !1,
          activeSection: null
        }),
        i = () => {
          const e = (0, s.useReactiveVar)(n),
            a = e => {
              const a = {
                ...n(),
                ...e
              };
              n(a)
            };
          return {
            state: e,
            setBrand: e => {
              a({
                brand: e
              })
            },
            setHeaderHeight: e => {
              a({
                headerHeight: e
              })
            },
            setMobileNavOpen: e => {
              a({
                mobileNavOpen: e
              })
            },
            setActiveSection: e => {
              a({
                activeSection: e
              })
            }
          }
        };
      var r = t(47185),
        c = t(86505);
      const o = () => {
        const {
          data: e
        } = (0, s.useQuery)(c.TinaModulesTree, {
          variables: {
            type: "gen9-guide-group"
          }
        });
        return e?.tinaModulesTree ?? null
      };
      var d = t(62229);
      const l = () => {
        const [e] = (0, d.useState)([{
          title: "Overview",
          to: "/gta-v"
        }, {
          title: "GTA Online",
          to: "/gta-online",
          activeExact: !0
        }, {
          title: "GTA+",
          to: "/gta-plus"
        }, {
          title: "Guides",
          to: "/gta-online/guides",
          children_key: "guides"
        }, {
          title: "Support",
          to: "https://support.rockstargames.com"
        }]);
        return e
      };
      t(2918);
      var m = t(44527);
      const g = (e, a = " > ") => {
        const [t, n] = (0, d.useState)(null), {
          data: i
        } = (0, s.useQuery)(m.TinaModulesTree, {
          variables: {
            id: e
          },
          skip: !e
        });
        return (0, d.useEffect)((() => {
          const e = i?.tinaModulesTree?.[0]?.tree ?? null;
          e && n(e.map((({
            title: e
          }) => e)).join(a))
        }), [i, a, e]), t
      }
    },
    86417: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => d
      });
      var s = t(42295),
        n = t(92440),
        i = t(9623),
        r = t(85870);
      const c = () => {
          const {
            guideId: e
          } = (0, i.useParams)(), a = (0, r.qj)(e, "<span></span>");
          return a ? (0, s.jsx)("div", {
            className: "rockstargames-sites-gta-gen9e0c1980d28737900798ff21f14b0f211",
            dangerouslySetInnerHTML: {
              __html: `Guides<span></span>${a}`
            }
          }) : null
        },
        o = ({
          hero: e
        }) => {
          const {
            alt: a,
            src: t = {}
          } = (0, n.useImageParser)(e) ?? {}, {
            mobile: i
          } = t;
          if (i) return (0, s.jsx)("div", {
            "aria-label": a,
            className: "rockstargames-sites-gta-gen9a1ce0dc6b03347ab2f672aa8af2fc31d",
            role: "img",
            style: {
              background: `url(${i}) no-repeat center/contain`
            }
          })
        },
        d = ({
          blurb: e,
          hero: a,
          title: t
        }) => (0, s.jsxs)(s.Fragment, {
          children: [a ? (0, s.jsx)(o, {
            hero: a
          }) : "", (0, s.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9c248846cb1d6e783e8af7b9e4282325a",
            children: [(0, s.jsx)(c, {}), (0, s.jsx)("h1", {
              children: t
            }), e && (0, s.jsx)("span", {
              className: "rockstargames-sites-gta-gen9c521ae65eeab1356dbd0371d68019439",
              dangerouslySetInnerHTML: {
                __html: e
              }
            })]
          })]
        })
    },
    86505: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TinaModulesTree"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "type"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
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
                value: "tinaModulesTree"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "type"
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
                    value: "id_hash"
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
                        value: "to"
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
                            value: "to"
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
          end: 331
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
        body: "query TinaModulesTree($type: String, $locale: String!) {\n    tinaModulesTree(type: $type, locale: $locale) {\n        title\n        id_hash\n        children {\n            title\n            to\n            id_hash\n            children {\n                title\n                to\n                id_hash\n            }\n        }\n    }\n}\n",
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
      })), e.exports = a, e.exports.TinaModulesTree = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = s[a] || new Set,
          r = new Set,
          c = new Set;
        for (i.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            r.has(e) || (r.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var s = n(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "TinaModulesTree")
    },
    89366: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        vinewoodClub: () => s
      });
      var s = t(98897)
    },
    90088: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        isReducedMotionPreferred: () => s
      });
      const s = () => !("undefined" == typeof window || !window.matchMedia) && window.matchMedia("(prefers-reduced-motion: reduce)").matches
    },
    92085: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3c6134ba61610ead6af640361535e346.svg"
    },
    93318: (e, a, t) => {
      "use strict";
      t.r(a);
      var s = t(42295),
        n = t(68240),
        i = t(2918),
        r = t(92440),
        c = t(54884),
        o = t(15777),
        d = t(77030);
      jest.mock("@rsgweb/locale-tools", (() => ({
        ...jest.requireActual("@rsgweb/locale-tools"),
        useIntl: () => ({
          formatMessage: ({
            defaultMessage: e
          }) => e
        })
      }))), jest.mock("@rsgweb/rockstar-account", (() => ({
        useGtmTrack: jest.fn()
      }))), jest.mock("@rsgweb/tina", (() => ({
        useGetCdnSource: jest.fn()
      }))), jest.mock("./hero-video.utils", (() => ({
        getVideoUrl: jest.fn()
      }))), jest.mock("./utils", (() => ({
        isReducedMotionPreferred: jest.fn(),
        messages: {
          video_hero_support_message: {
            defaultMessage: "Your browser does not support the video tag"
          },
          video_hero_play_button_label: {
            defaultMessage: "Play Video"
          },
          video_hero_pause_button_label: {
            defaultMessage: "Pause Video"
          }
        }
      }))), describe("HeroVideo", (() => {
        const e = jest.fn(),
          a = jest.fn(),
          t = jest.fn(),
          l = jest.fn();
        beforeAll((() => {
          Object.defineProperty(HTMLMediaElement.prototype, "play", {
            configurable: !0,
            writable: !0,
            value: jest.fn()
          }), Object.defineProperty(HTMLMediaElement.prototype, "pause", {
            configurable: !0,
            writable: !0,
            value: jest.fn()
          }), Object.defineProperty(HTMLMediaElement.prototype, "addEventListener", {
            configurable: !0,
            writable: !0,
            value: jest.fn()
          }), Object.defineProperty(HTMLMediaElement.prototype, "removeEventListener", {
            configurable: !0,
            writable: !0,
            value: jest.fn()
          })
        })), beforeEach((() => {
          i.useGtmTrack.mockReturnValue({
            track: e
          }), r.useGetCdnSource.mockImplementation(a), o.getVideoUrl.mockImplementation(t), c.isReducedMotionPreferred.mockImplementation(l), e.mockClear(), a.mockClear(), t.mockClear(), l.mockClear()
        })), test("it renders fallback image when variant is image", (() => {
          l.mockReturnValue(!1), t.mockReturnValue("mock-video-url.mp4"), a.mockReturnValue("fallback.jpg"), (0, n.XX)((0, s.jsx)(d.default, {
            variant: "image",
            videoSrc: "mock-video-url.mp4",
            fallbackImg: "fallback.jpg",
            fallbackImgAlt: "Fallback Image"
          }));
          const e = n.nj.getByAltText("Fallback Image");
          expect(e).toBeInTheDocument(), expect(e).toHaveAttribute("src", "fallback.jpg")
        })), test("it renders video when variant is video and reduced notion is not preferred", (() => {
          l.mockReturnValue(!1), t.mockReturnValue("mock-video-url.mp4"), a.mockReturnValue("fallback.jpg"), (0, n.XX)((0, s.jsx)(d.default, {
            variant: "video",
            videoSrc: "mock-video-url.mp4",
            fallbackImg: "fallback.jpg",
            fallbackImgAlt: "Fallback Image"
          }));
          const e = n.nj.getByTestId("hero-video");
          expect(e).toBeInTheDocument()
        })), test("it toggles play/pause state when play/pause button is clicked", (() => {
          l.mockReturnValue(!1), t.mockReturnValue("mock-video-url.mp4"), a.mockReturnValue("fallback.jpg"), (0, n.XX)((0, s.jsx)(d.default, {
            variant: "video",
            videoSrc: "mock-video-url.mp4",
            fallbackImg: "fallback.jpg",
            fallbackImgAlt: "Fallback Image"
          }));
          const i = n.nj.getByRole("button", {
              hidden: !0
            }),
            r = n.nj.getByTestId("hero-video");
          n.rC.click(i), expect(r.play).toHaveBeenCalled(), expect(e).toHaveBeenCalledWith(expect.objectContaining({
            text: "toggle play"
          })), n.rC.click(i), expect(r.pause).toHaveBeenCalled(), expect(e).toHaveBeenCalledWith(expect.objectContaining({
            text: "toggle pause"
          }))
        })), test("it renders video play/pause button with correct icon", (() => {
          l.mockReturnValue(!1), t.mockReturnValue("mock-video-url.mp4"), a.mockReturnValue("fallback.jpg"), (0, n.XX)((0, s.jsx)(d.default, {
            variant: "video",
            videoSrc: "mock-video-url.mp4",
            fallbackImg: "fallback.jpg",
            fallbackImgAlt: "Fallback Image"
          }));
          const e = n.nj.getByRole("button", {
            hidden: !0
          });
          expect(n.nj.getByTitle("Play Video")).toBeInTheDocument(), n.rC.click(e), expect(n.nj.getByTitle("Pause Video")).toBeInTheDocument(), n.rC.click(e), expect(n.nj.getByTitle("Play Video")).toBeInTheDocument()
        })), test("it attaches and remove event listeners correctly", (() => {
          l.mockReturnValue(!1), t.mockReturnValue("mock-video-url.mp4");
          const {
            unmount: e
          } = (0, n.XX)((0, s.jsx)(d.default, {
            variant: "video",
            videoSrc: "mock-video-url.mp4",
            fallbackImg: "fallback.jpg",
            fallbackImgAlt: "Fallback Image"
          })), a = n.nj.getByTestId("hero-video");
          expect(a.addEventListener).toHaveBeenCalledWith("play", expect.any(Function)), expect(a.addEventListener).toHaveBeenCalledWith("pause", expect.any(Function)), e(), expect(a.removeEventListener).toHaveBeenCalledWith("play", expect.any(Function)), expect(a.removeEventListener).toHaveBeenCalledWith("pause", expect.any(Function))
        })), test("it does not render video when reduced motion is preferred", (() => {
          l.mockReturnValue(!0), t.mockReturnValue("mock-video-url.mp4"), a.mockReturnValue("fallback.jpg"), (0, n.XX)((0, s.jsx)(d.default, {
            variant: "video",
            videoSrc: "mock-video-url.mp4",
            fallbackImg: "fallback.jpg",
            fallbackImgAlt: "Fallback Image"
          }));
          const e = n.nj.getByAltText("Fallback Image");
          expect(e).toBeInTheDocument(), expect(n.nj.queryByTestId("hero-video")).toBeNull()
        }))
      }))
    },
    93935: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => g
      });
      var s = t(42295),
        n = t(62229),
        i = t(27785),
        r = t.n(i),
        c = t(95966),
        o = t(4572),
        d = t.n(o);
      const l = {
          blue: "rockstargames-sites-gta-gen9df5c0d39e32be4e6977bb1d638ed2340",
          custom: "rockstargames-sites-gta-gen9ef5369875ddc5d9d7ad36eadc8afab2e",
          darkBlue: "rockstargames-sites-gta-gen9aa460ec14f75c93c2ba386a115ea407c",
          darkRed: "rockstargames-sites-gta-gen9a6a078bd68ef39e719c21e5db6329642",
          goldenrod: "rockstargames-sites-gta-gen9a55d762df7035a2394c9ffbfcbf1a0db",
          green: "rockstargames-sites-gta-gen9ea2d0d0e1e32d8e48d79a0ad80a4c8ac",
          grid: "rockstargames-sites-gta-gen9c157d94760f0476ea06aa04da4e86727",
          gtao: "rockstargames-sites-gta-gen9f4bc90102d24f73cb2d45d3821bfd32e",
          gtaplus: "rockstargames-sites-gta-gen9c5d92b0365dc60e6b93d321e9139e9f3",
          hotPink: "rockstargames-sites-gta-gen9fa9be84c85fca4e66b2489e1e52a2e6a",
          itemList: "rockstargames-sites-gta-gen9a1ccd04246730848111c4868ccba6294",
          noImg: "rockstargames-sites-gta-gen9b239e263450a84fffba43a94c194d606",
          pillBtn: "rockstargames-sites-gta-gen9d45dcc8e4008f8620987ea3033e4373d",
          purple: "rockstargames-sites-gta-gen9f14d63f28dd73c05cf950a08d8b8f501",
          rdo: "rockstargames-sites-gta-gen9cc490e805fe55ab86a3ec5df2a5131e3",
          red: "rockstargames-sites-gta-gen9c446b758dbe82ad97444174f4d0b4abe",
          selected: "rockstargames-sites-gta-gen9de1852cf9b8b4b71bcc67f8e66552c46",
          skull: "rockstargames-sites-gta-gen9a034e7482e8f28c66ec657f72bb93749",
          teal: "rockstargames-sites-gta-gen9a0aaa124176430b6ad4f959cf136e7a3",
          turquoise: "rockstargames-sites-gta-gen9b03c0798d8655dd98518b2f0dc002f06",
          yellow: "rockstargames-sites-gta-gen9bdb57ca410954012dfd4711c67fc2a18"
        },
        {
          sanitize: m
        } = r(),
        g = ({
          list: e,
          string: a,
          starColor: t,
          style: i,
          className: r,
          game: o,
          noImg: g,
          columns: u,
          mobileColumns: f
        }) => {
          const [b, p] = (0, n.useState)(null), v = a ? a.split("_#_") : e;
          if ((0, n.useEffect)((() => {
              p(e)
            }), [e]), !a && !e) return null;
          const k = {
            color: i?.color
          };
          return delete i?.color, u && b ? (0, s.jsx)("div", {
            className: l.grid,
            style: {
              "--unordered-list-grid-column": u,
              "--unordered-list-grid-column-mobile": f ?? u
            },
            children: (0, s.jsx)("ul", {
              className: d()(l.itemList, l.noImg, l[t], l[o]),
              style: (0, c.safeStyles)(i),
              children: b.map(((e, a) => (0, s.jsx)("li", {
                style: k,
                dangerouslySetInnerHTML: {
                  __html: m(e.content)
                }
              }, a)))
            })
          }) : (0, s.jsx)("ul", {
            style: (0, c.safeStyles)(i),
            className: d()(l.itemList, l.custom, g ? l.noImg : "", t ? l[t] : "", o ? l[o] : "", r ?? ""),
            children: v.map(((e, a) => (0, s.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: m(e?.content ?? e)
              }
            }, a)))
          })
        }
    },
    94848: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => d,
        X: () => o
      });
      var s = t(42295),
        n = t(92440),
        i = t(95966),
        r = t(29315),
        c = t(84343);
      const o = ({
          id: e = null,
          ids: a = null,
          setTitleDataPath: t = null,
          sync: s = !1
        }) => {
          const n = a ?? [e],
            {
              data: r
            } = (0, i.useQuery)(c.TinaModulesInfo, {
              variables: {
                ids: n,
                sync: s
              },
              setTitleDataPath: t,
              skip: !n.length
            });
          return r?.tinaModulesInfo ?? null
        },
        d = (0, r.A)((({
          components: e = {},
          id: a = null,
          ids: t = null
        }) => {
          const i = o({
              id: a,
              ids: t
            }),
            r = i?.[0]?.tina;
          return r ? (0, s.jsx)(s.Fragment, {
            children: i.map((({
              tina: a
            }, t) => (0, s.jsx)(n.TinaParser, {
              components: e,
              tina: a,
              componentProps: {
                tinaModulesInfo: i
              }
            }, t)))
          }) : null
        }), {
          header: null
        })
    },
    95359: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        Animations: () => s,
        LiteMotion: () => o,
        withFadeIn: () => g,
        withFadeUp: () => p
      });
      var s = {};
      t.r(s), t.d(s, {
        getVariant: () => h,
        transitions: () => v,
        variants: () => k
      });
      var n = t(42295),
        i = t(62229),
        r = t(62665);
      const c = (0, i.forwardRef)(((e, a) => {
        const {
          children: t,
          tag: s = "div"
        } = e, i = r.m[s];
        return (0, n.jsx)(r.LazyMotion, {
          features: r.domAnimation,
          children: (0, n.jsx)(i, {
            ref: a,
            ...e,
            children: t
          })
        })
      }));
      c.displayName = "LiteMotion";
      const o = c,
        d = {
          visible: {
            opacity: 1
          },
          hidden: {
            opacity: 0
          }
        },
        l = {
          ease: "easeIn",
          duration: .4
        },
        m = ({
          children: e
        }) => (0, n.jsx)(r.motion.div, Object.assign({
          className: "rockstargames-sites-gta-gen9f38982805188b64825a72d2c5fac938c",
          variants: d,
          initial: "hidden",
          whileInView: "visible",
          viewport: {
            margin: "-20%",
            once: !0
          },
          transition: l
        }, {
          children: e
        })),
        g = e => a => (0, n.jsx)(m, {
          children: (0, n.jsx)(e, Object.assign({}, a))
        }),
        u = {
          visible: {
            opacity: 1,
            y: 0
          },
          hidden: {
            opacity: 0,
            y: 40
          }
        },
        f = {
          ease: "easeIn",
          duration: .75
        },
        b = ({
          children: e
        }) => (0, n.jsx)(r.motion.div, {
          className: "rockstargames-sites-gta-gen9c1ad787ad6429786650325edac0ffe42",
          variants: u,
          initial: "hidden",
          whileInView: "visible",
          viewport: {
            margin: "-20%",
            once: !0
          },
          transition: f,
          children: e
        }),
        p = e => a => (0, n.jsx)(b, {
          children: (0, n.jsx)(e, {
            ...a
          })
        }),
        v = {
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
        k = {
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
        h = (e = "imageMask", a = "collapsed") => k[e][a]
    },
    96911: (e, a, t) => {
      "use strict";
      t.d(a, {
        Ay: () => b
      });
      var s = t(42295),
        n = t(62229),
        i = t(33106),
        r = t(29315),
        c = t(2918),
        o = t(55799),
        d = t(70454),
        l = t(4572),
        m = t.n(l);
      const g = {
          accordionChevron: "rockstargames-sites-gta-gen9a81c4eaf24da2e2a56167e74d7dd2788",
          accordionContent: "rockstargames-sites-gta-gen9aeccf4ca42937ce2d8d76a76c9ebdc7a",
          accordionContentText: "rockstargames-sites-gta-gen9e09d630fa3fc716d9b3f34bbb6b7c6a9",
          accordionItem: "rockstargames-sites-gta-gen9cabc7dcd339f3f63c172cf5881ecca07",
          accordionRoot: "rockstargames-sites-gta-gen9ff4c276ff3fe3172dd6ce28527ff9b5d",
          accordionTrigger: "rockstargames-sites-gta-gen9be1438706665e822882826c90033fd09",
          disclaimer: "rockstargames-sites-gta-gen9d2203c1c27236b40e99e957046216284",
          faq: "rockstargames-sites-gta-gen9fe88e61686d4803b6c47536d34f1244e",
          faqArea: "rockstargames-sites-gta-gen9a52b40a67d08a800219e3f5240ddb18d",
          pillBtn: "rockstargames-sites-gta-gen9f6996f4c3f7191c2ab9f2d8a7ac4d378",
          selected: "rockstargames-sites-gta-gen9a094d48286b9bf724d77a89550401953",
          slideDown: "rockstargames-sites-gta-gen9b4f19bd4c09e3ed85ea80968f28075ae",
          slideUp: "rockstargames-sites-gta-gen9ac7cf56e2d7d02e4555f2f9e3feb547e",
          viewMore: "rockstargames-sites-gta-gen9d26903b16012ce40de048c5650eb2778",
          viewMoreContent: "rockstargames-sites-gta-gen9a9b36e5fbf98c429906018a41776b230"
        },
        u = (0, n.forwardRef)((({
          children: e,
          className: a,
          ...t
        }, n) => (0, s.jsx)(d.Header, {
          className: g.accordionHeader,
          children: (0, s.jsxs)(d.Trigger, {
            ref: n,
            className: m()(g.accordionTrigger, a),
            ...t,
            children: [e, (0, s.jsx)(i.ChevronDownIcon, {
              className: g.accordionChevron,
              "aria-hidden": !0
            })]
          })
        }))),
        f = (0, n.forwardRef)((({
          children: e,
          className: a,
          ...t
        }, n) => (0, s.jsx)(d.Content, {
          className: m()(g.accordionContent, a),
          ...t,
          ref: n,
          children: (0, s.jsx)("div", {
            className: g.accordionContentText,
            children: e
          })
        }))),
        b = (0, r.A)((({
          buttonTxt: e,
          description: a,
          disclaimer: t,
          faqList: i = [],
          initialLength: r = 6,
          addedLength: l = 6,
          title: m,
          tinaModulesInfo: b,
          style: p
        }) => {
          const {
            track: v
          } = (0, c.useGtmTrack)(), [k, h] = (0, n.useState)(r), [x, y] = (0, n.useState)(void 0), [j, _] = (0, n.useState)(!1), N = (0, n.useRef)(null), S = (0, n.useRef)([]), {
            ref: w
          } = (0, o.useInView)({
            threshold: .6,
            triggerOnce: !0,
            onChange: e => {
              e && v({
                event: "page_section_impression",
                element_placement: "faqs"
              })
            }
          });
          return (0, n.useEffect)((() => {
            if (j) {
              const e = k - l;
              S.current[e] && S.current[e].focus(), _(!1)
            }
          }), [k]), (0, s.jsxs)("div", {
            ref: w,
            className: g.faq,
            style: p,
            children: [(0, s.jsxs)("div", {
              className: g.faqArea,
              children: [m && (0, s.jsxs)("div", {
                children: [(0, s.jsx)("h3", {
                  children: b?.[0]?.title ?? m
                }), (0, s.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: a
                  }
                })]
              }), (0, s.jsx)(d.Root, {
                className: g.accordionRoot,
                type: "single",
                collapsible: !0,
                value: x,
                onValueChange: e => {
                  let a = "",
                    t = null;
                  e ? (a = "cta_expand", t = parseInt(e, 10)) : (a = "cta_collapse", t = parseInt(x, 10)), v({
                    event: a,
                    text: `faq ${t}`,
                    position: t,
                    element_placement: "faqs"
                  }), y(e)
                },
                children: i.length ? i.slice(0, k).map((({
                  question: e,
                  answer: a
                }, t) => (0, s.jsxs)(d.Item, {
                  className: g.accordionItem,
                  value: (t + 1).toString(),
                  children: [(0, s.jsx)(u, {
                    ref: e => S.current[t] = e,
                    children: e
                  }), (0, s.jsx)(f, {
                    children: (0, s.jsx)("p", {
                      dangerouslySetInnerHTML: {
                        __html: a
                      }
                    })
                  })]
                }, t))) : ""
              }), i.length > k && (0, s.jsx)("div", {
                className: g.viewMoreContent,
                children: (0, s.jsxs)("button", {
                  className: g.viewMore,
                  onClick: () => {
                    v({
                      event: "view_all",
                      text: "view more",
                      element_placement: "faqs"
                    }), h((e => e + l)), _(!0)
                  },
                  ref: N,
                  children: [(0, s.jsx)("span", {
                    children: e
                  }), (0, s.jsx)("img", {
                    src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dd73beaf06cda8c7936703f23f90bd6f.svg",
                    alt: ""
                  })]
                })
              })]
            }), t && (0, s.jsx)("div", {
              className: g.disclaimer,
              dangerouslySetInnerHTML: {
                __html: t
              }
            })]
          })
        }))
    },
    98897: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/video/f7da4ca1b248290693c7cdfc89b8c369.mp4"
    },
    99803: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => f
      });
      var s = t(42295),
        n = t(62229),
        i = t(16188),
        r = t(55799),
        c = t(7545),
        o = t(24162),
        d = t(2918),
        l = t(4572),
        m = t.n(l),
        g = t(29315);
      const u = ({
          prevRef: e,
          nextRef: a,
          onNextClicked: t,
          onPrevClicked: n,
          onNextKeyDown: i,
          title: r,
          testId: c
        }) => (0, s.jsxs)("div", {
          "aria-controls": `${r}-carousel`,
          "aria-label": `${r} carousel buttons`,
          className: "rockstargames-sites-gta-gen9b8d5ef10008331a9f6d3a6bdf1690d01",
          role: "group",
          "data-testid": `${c}-controls`,
          children: [(0, s.jsx)("button", {
            className: "rockstargames-sites-gta-gen9c38cd500d52d07bd012e288dc0b4f635",
            ref: e,
            onClick: n,
            "aria-label": "Previous"
          }), (0, s.jsx)("button", {
            className: "rockstargames-sites-gta-gen9b24ada0f7959966c6d950567eaaafce2",
            ref: a,
            onClick: t,
            onKeyDown: i,
            "aria-label": "Next"
          })]
        }),
        f = (0, g.A)((({
          description: e,
          slideChildren: a,
          size: t,
          title: l,
          name: g,
          customSlidesPerView: f = null,
          customSpaceBetween: b = null,
          slideClass: p,
          style: v,
          className: k,
          cardSizeBreakpoints: h,
          customAspectRatio: x,
          titleBadge: y,
          theme: j
        }) => {
          const {
            track: _
          } = (0, d.useGtmTrack)(), N = (0, n.useRef)(null), S = (0, n.useRef)(null), w = (0, n.useRef)(null), [C, T] = (0, n.useState)(null), [I, A] = (0, n.useState)(!1), [B, M] = (0, n.useState)(null), [V, E] = (0, n.useState)(), [L, P] = (0, n.useState)(), {
            ref: R,
            inView: F
          } = (0, r.useInView)({
            threshold: .6
          }), [G, D] = (0, n.useState)(!1), [$, H] = (0, n.useState)(null), [O, z] = (0, n.useState)(!1), [q, W] = (0, n.useState)(0), [X, U] = (0, n.useState)(0);
          (0, n.useEffect)((() => {
            const e = () => {
              z(window.innerWidth < 1024)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, n.useEffect)((() => {
            const e = () => {
              V && !(0, i.isEmpty)(V) && V?.height > 0 && V?.height !== q && W(V?.height)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [V]);
          const Y = {
            0: {
              spaceBetween: b ?? 16
            },
            1024: {
              spaceBetween: b ?? 18
            },
            1920: {
              spaceBetween: b ?? 20
            },
            2560: {
              spaceBetween: b ?? 22
            }
          };
          (0, n.useEffect)((() => {
            if (!N.current) return;
            const e = () => {
              if (N.current) {
                const e = f || Number(window.getComputedStyle(N.current).getPropertyValue("--slides-per-view")),
                  a = f ? 1 : Number(window.getComputedStyle(N.current).getPropertyValue("--slides-per-view-multiplier"));
                M(e * a)
              }
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [N, f]), (0, n.useEffect)((() => {
            if (!a) return;
            let e = !1;
            a.forEach((a => {
              "cover-card" === a?.props?.tina?.payload?.meta?.type && (e = !0, H(a))
            })), D(e);
            const t = a.map(((e, a) => "cover-card" === e?.props?.tina?.payload?.meta?.type && O ? null : (0, s.jsx)(o.qr, {
              className: "rockstargames-sites-gta-gen9ad67cb8db28ddf18d185f85a3d54b06f",
              onFocus: () => Z(a),
              role: "button",
              children: e
            }, e.key)));
            T(t)
          }), [a, O]), (0, n.useEffect)((() => {
            P({
              nextEl: w.current,
              prevEl: S.current
            })
          }), [w, S]), (0, n.useEffect)((() => {
            F && !I && a && (_({
              event: "page_section_impression",
              element_placement: (g || l).toLowerCase()
            }), A(!0))
          }), [F, a]);
          let Q = "custom" === t ? {
            "--custom-aspect-ratio": x,
            ...v
          } : {
            ...v
          };
          const K = 0 !== q ? `${q}px` : "100%";
          Q = {
            ...Q,
            "--carousel-cards-height": K,
            "--carousel-nav-opacity": X
          };
          const Z = e => {
              V?.slideTo(e)
            },
            J = `${l.trim().toLowerCase().replace(/\s+/g,"-")}-deck`;
          return (0, s.jsxs)("section", {
            "aria-label": l,
            className: m()("rockstargames-sites-gta-gen9f20b52f7c3f9003cd00811a47a04bf10", k),
            "data-size": t,
            "data-testid": J,
            "data-sm": h?.sm ? h?.sm : t,
            "data-md": h?.md ? h?.md : t,
            "data-lg": h?.lg ? h?.lg : t,
            "data-xl": h?.xl ? h?.xl : t,
            "data-xxl": h?.xxl ? h?.xxl : t,
            "data-has-covercard": G,
            "data-new-carousel-nav": !0,
            id: `${l}-carousel`,
            "data-theme": j,
            ref: N,
            style: Q,
            children: [(0, s.jsx)("div", {
              className: "rockstargames-sites-gta-gen9aeafe767d91d07fab61f307b5bbffeef",
              ref: R
            }), G && O && (0, s.jsx)("div", {
              className: "rockstargames-sites-gta-gen9def6705cfe82c4e562f3c71c78bc5248",
              children: $
            }), (0, s.jsx)("div", {
              className: "rockstargames-sites-gta-gen9b093fac5b0d056a4a00f34d0418c6577",
              children: (0, s.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9dcef10ca0aa4165afec829cc4474b8b7",
                children: [(0, s.jsxs)("div", {
                  className: "rockstargames-sites-gta-gen9b83b41754b7e9ac95c806264014db990",
                  children: [!G && l && (0, s.jsxs)("div", {
                    className: "rockstargames-sites-gta-gen9c8e04a547988dacbae8960776862f15f",
                    children: [(0, s.jsx)("h2", {
                      children: l
                    }), y && (0, s.jsx)("span", {
                      className: "rockstargames-sites-gta-gen9c3de2db74771fdba023cc2b11b216955",
                      children: y
                    })]
                  }), (0, s.jsx)(u, {
                    prevRef: S,
                    nextRef: w,
                    onNextClicked: () => {},
                    onPrevClicked: () => {},
                    onNextKeyDown: e => {
                      if ("Tab" === e.key && !e.shiftKey) {
                        const a = V?.slides[V?.activeIndex].querySelector('a, button, [role="button"]');
                        a && a?.tabIndex > -1 && (e.preventDefault(), a.focus())
                      }
                    },
                    title: l,
                    theme: j
                  })]
                }), e && (0, s.jsx)("div", {
                  className: "rockstargames-sites-gta-gen9a1497e1cd7844ff158955c0afe2fd3b8",
                  dangerouslySetInnerHTML: {
                    __html: e
                  }
                })]
              })
            }), B ? (0, s.jsx)(o.RC, {
              slidesPerView: B,
              onInit: e => {
                E(e);
                const a = setInterval((() => {
                  const {
                    height: t
                  } = e;
                  t > 0 && (W(t), U(1), clearInterval(a))
                }), 500)
              },
              grabCursor: !0,
              navigation: L,
              modules: [c.Vx],
              breakpoints: Y,
              slideClass: m()("swiper-slide", p),
              onSlideNextTransitionEnd: () => {
                _({
                  event: "carousel_next",
                  element_placement: l?.toLowerCase() ?? ""
                })
              },
              onSlidePrevTransitionEnd: () => {
                _({
                  event: "carousel_previous",
                  element_placement: l?.toLowerCase() ?? ""
                })
              },
              onSlideChangeTransitionEnd: () => {
                _({
                  event: "carousel_swipe",
                  element_placement: l?.toLowerCase() ?? ""
                })
              },
              children: C
            }) : ""]
          })
        }), null)
    }
  }
]);