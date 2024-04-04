! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "ae7060ba-5259-4cd8-b511-f3638199fd67", e._sentryDebugIdIdentifier = "sentry-dbid-ae7060ba-5259-4cd8-b511-f3638199fd67")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [226], {
    5226: (e, a, i) => {
      "use strict";
      i.r(a), i(31389), i(42664), i(34904), i(46368), i(58256), i(64932), i(87440), i(53128), i(18932), i(19520), i(24264), i(69224), i(58432), i(13144), i(77571), i(84084), i(86096), i(54012), i(38592);
      var n = i(85092),
        t = i(19548),
        s = i.n(t),
        l = i(64508),
        d = i(51664),
        r = i(81968),
        c = i.n(r),
        o = i(77508);
      const m = "__MFE_GLOBAL_HOOK__",
        u = () => {
          const e = window;
          e[m]?.history || (e[m] = Object.assign(e[m] || {}, {
            history: (0, o.createBrowserHistory)()
          }))
        };
      var k = i(9860),
        g = i(94072),
        v = i(50968),
        f = i(1740),
        b = i(42836),
        p = i(57013);
      var h = i(95240);
      const N = e => {
          let {
            modal: a
          } = e;
          const {
            content: i,
            className: n,
            height: t,
            onClose: s,
            rect: l = {
              left: 0,
              top: 0
            },
            contentStyle: r = {},
            contentClassName: c = "",
            width: o,
            fadeIn: m = !0,
            cardIds: u,
            theme: k,
            title: N,
            gtm: S = {},
            aspectRatio: w = "default",
            cardDimensions: x
          } = a, {
            left: y,
            top: j
          } = l, [F, _] = (0, d.useState)(null), {
            track: V
          } = (0, b.useGtmTrack)(), T = null !== u && (u?.length || 0) > 1 && ("flag_bg" === k || "fob" === x?.size), [I, A] = (0, p.useSearchParams)(), [D, $] = (0, d.useState)(!1), [E, C] = (0, d.useState)(!1), L = () => {
            const e = F - 1;
            _(e), C(e <= 0), $(e >= (u?.length || 0) - 1), V({
              event: "modal_previous",
              event_category: "modal",
              event_action: "previous",
              event_label: "",
              position: F
            })
          }, G = () => {
            const e = F + 1;
            _(e), C(e <= 0), $(e >= (u?.length || 0) - 1), V({
              event: "modal_next",
              event_category: "modal",
              event_action: "next",
              event_label: "",
              position: F
            })
          };
          (0, d.useEffect)((() => {
            null !== F && null !== u && F < u?.length && F > -1 && A({
              info: u[F]
            })
          }), [F, u]), (0, d.useEffect)((() => {
            if (null !== u && null === F && u?.length > 0) {
              const e = I.get("info");
              u?.forEach(((a, i) => {
                a === e && (_(i), C(i <= 0), $(i >= (u?.length || 0) - 1))
              }))
            }
          }), [u, F]);
          const [B] = (0, d.useState)({
            y: j,
            x: y,
            top: 0,
            left: 0,
            width: o,
            height: t,
            border: "0px solid transparent",
            background: "transparent",
            marginTop: T ? "0" : null
          }), P = {
            opacity: 1
          }, O = (0, d.useRef)(null), R = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, q = {
            ease: "easeIn",
            duration: .3,
            delay: .5
          }, [M] = (0, d.useState)({
            x: "-50%",
            y: "-50%",
            top: "50%",
            left: "50%",
            width: "calc(100vw - (var(--modal-padding) * 2))",
            height: "var(--modal-height)",
            border: "1px solid var(--border-color, #2d2d2d)",
            background: "var(--black-100)",
            marginTop: T ? "calc(var(--modal-controlsHeight) - var(--modal-padding))" : null,
            transition: {
              x: R,
              y: R,
              top: R,
              left: R,
              width: R,
              height: R,
              border: R,
              background: {
                delay: .3
              }
            }
          }), [H, z] = (0, d.useState)({
            initial: B,
            shown: M
          });
          (0, d.useEffect)((() => {
            z({
              initial: B,
              shown: M
            })
          }), [B, M]), (0, d.useEffect)((() => {
            const e = e => {
              "function" == typeof s && 27 === e.keyCode && (s(), V({
                event: "modal_close",
                event_action: "close",
                event_category: "modal",
                event_label: N ?? void 0,
                ...S
              }))
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []);
          const U = () => {
              "function" == typeof s && (s(), V({
                event: "modal_close",
                event_action: "close",
                event_category: "modal",
                event_label: N ?? void 0,
                ...S
              }))
            },
            Q = m ? 0 : 1,
            K = (0, h.jsx)(v.motion.button, {
              className: "rockstargames-sites-rockstargamesb0326cc98df99ada0e0f6821f0f0a6ad",
              "aria-label": "Close",
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: q,
              onClick: () => {
                U()
              }
            });
          return (0, d.useMemo)((() => (0, h.jsx)("div", {
            className: "rockstargames-sites-rockstargamese9a8e066d320a81b61aa2c636fa0a5b5",
            "data-show-nav": T,
            "data-aspect-ratio": w,
            children: (0, h.jsxs)(g.cp, {
              children: [(0, h.jsx)(v.motion.div, {
                className: "rockstargames-sites-rockstargamesc8632c630878ad16e637fe2b8db2f02c",
                initial: {
                  opacity: 0
                },
                animate: P,
                transition: R,
                onClick: () => U()
              }), T && (0, h.jsxs)("div", {
                className: "rockstargames-sites-rockstargameseeecb8dc782f382fc9d32d03ecc1a2a5",
                children: [(0, h.jsxs)(v.motion.div, {
                  className: "rockstargames-sites-rockstargamesb6e3406cb9a52fc7583d5c74681e88bc",
                  initial: {
                    opacity: 0
                  },
                  animate: {
                    opacity: 1
                  },
                  transition: q,
                  children: [(0, h.jsx)("button", {
                    type: "button",
                    "aria-label": "Previous",
                    onClick: L,
                    disabled: E
                  }), (0, h.jsxs)("div", {
                    className: "rockstargames-sites-rockstargamesff3c13d9dc1de9af609a1f99b4c47039",
                    children: [" ", F + 1, (0, h.jsx)("div", {
                      className: "rockstargames-sites-rockstargamescd9c6033ad00894881fa5451acfe15da"
                    }), u?.length, " "]
                  }), (0, h.jsx)("button", {
                    type: "button",
                    "aria-label": "Next",
                    onClick: G,
                    disabled: D
                  })]
                }), K]
              }), (0, h.jsx)(v.motion.div, {
                className: "rockstargames-sites-rockstargamesfab99cc2e2ca2e2a2158f9d41e764558",
                ref: O,
                initial: "initial",
                animate: "shown",
                variants: H,
                transition: R,
                style: r,
                children: (0, h.jsxs)(v.motion.div, {
                  className: (0, f.classList)("rockstargames-sites-rockstargamesb6aa5ebf680af5d95d0e9c76ac36ed82", n),
                  children: [!T && K, (0, h.jsx)(v.motion.div, {
                    className: (0, f.classList)("rockstargames-sites-rockstargamesd901631c0b9d817396c8352c027a2a0d", c),
                    initial: {
                      opacity: Q
                    },
                    animate: {
                      opacity: 1
                    },
                    transition: q,
                    children: i
                  }), (0, h.jsx)("button", {
                    className: "rockstargames-sites-rockstargamesf1ecf74036b2b7fdfda3613619af40cf",
                    type: "button",
                    "aria-label": "End of modal"
                  })]
                })
              })]
            })
          })), [i, F, r])
        },
        S = "modal-context",
        w = [null, () => null],
        x = window?.[S] ?? (window[S] = (0, d.createContext)(w)),
        y = e => {
          let {
            children: a
          } = e;
          const [i, n] = (0, d.useState)(w), t = (0, d.useMemo)((() => i?.content ? (0, h.jsx)(N, {
            modal: i
          }) : null), [i]);
          return (0, h.jsx)(x.Provider, {
            value: [t, n],
            children: a
          })
        };
      var j = i(27864),
        F = i.n(j),
        _ = i(33052),
        V = i(45792),
        T = i(77715),
        I = i(42708),
        A = i(41272),
        D = i(75016),
        $ = i(42132),
        E = i.n($),
        C = i(64280),
        L = i(3061);
      const G = "rockstargames-sites-rockstargamesf75798e3984014f9cd35c5956e94fbb3",
        B = "rockstargames-sites-rockstargamesaa6bc8070e5e81ea0594636575db8fd6";
      var P = i(50060);
      const O = e => {
          let {
            games: a,
            t: i
          } = e;
          return (0, h.jsxs)("section", {
            className: "rockstargames-sites-rockstargamesbec4f690ea94ae150d36b6be04b7011d",
            "data-testid": "featuredGames",
            children: [(0, h.jsx)("h3", {
              className: G,
              children: (0, h.jsx)(k.A, {
                to: "newswire",
                "aria-label": i("Featured Games"),
                "data-testid": "featuredGamesHeader",
                children: i("Featured Games")
              })
            }), (0, h.jsx)("div", {
              className: B,
              children: a.map((e => (0, h.jsx)(k.GameCard.Link, {
                game: e
              }, e.id)))
            }), (0, h.jsx)(k.Button, {
              role: "link",
              "aria-label": "Latest Games",
              "data-gtm-category": "Home",
              "data-gtm-action": "Latest Games",
              "data-gtm-label": "More Click",
              to: "games",
              context: "secondary",
              "data-testid": "viewMoreButton",
              children: i("View More")
            })]
          })
        },
        R = e => {
          let {
            posts: a,
            t: i
          } = e;
          return (0, h.jsxs)("section", {
            className: "rockstargames-sites-rockstargamesbc6c5d345fb1cccca402fd4a97a8bef8",
            "data-testid": "newswire",
            children: [(0, h.jsx)("h3", {
              className: G,
              children: (0, h.jsx)(k.A, {
                to: "newswire",
                "aria-label": i("Newswire"),
                "data-testid": "newswireHeader",
                children: i("Newswire")
              })
            }), (0, h.jsx)(k.NewswireBlocks, {
              className: B,
              posts: a,
              noSpecialOrder: !0
            }), (0, h.jsx)(k.Button, {
              role: "link",
              "aria-label": "Latest News",
              "data-gtm-category": "Home",
              "data-gtm-action": "Latest News",
              "data-gtm-label": "More Click",
              to: "newswire",
              context: "secondary",
              "data-testid": "viewMoreButton",
              children: i("View More")
            })]
          })
        },
        q = (0, V.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            data: i
          } = (0, _.useQuery)(P.Home, {
            autoSetLoading: !0
          });
          if (!i) return null;
          const {
            games: n,
            posts: t,
            videos: s
          } = i;
          return (0, h.jsxs)("div", {
            className: "rockstargames-sites-rockstargamesdcf817f11d19ae0ef32bf4b753d292a2",
            "data-testid": "homepageBody",
            children: [(0, h.jsx)(k.VideoCarousel, {
              videos: s.results,
              t: a
            }), (0, h.jsxs)("div", {
              className: "rockstargames-sites-rockstargamesd04358d9e38bc205e1c35dee36efcaa1",
              children: [(0, h.jsx)(R, {
                posts: t.results,
                t: a
              }), (0, h.jsx)(O, {
                games: n.results,
                t: a
              })]
            })]
          })
        }));
      var M = i(89416),
        H = i.n(M);
      const z = {
          index: "rockstargames-sites-rockstargamesc675b32f22774c6d23d5a37ec1a8037d",
          sectionHeader: "rockstargames-sites-rockstargamesf240706155143d40a2a3452e0d430727",
          sections: "rockstargames-sites-rockstargamesd7486593ca90a74165ea073993f5d2a4",
          grid: "rockstargames-sites-rockstargamescab2fd7eef761a0f4d84cfc9dfd81739",
          gridLarge: "rockstargames-sites-rockstargamesbf1a8fe71d8fc8ed35cc450b48422485",
          card: "rockstargames-sites-rockstargamesf6240e8f5d2a1d502d543428a6df06b5",
          downloadItem: "rockstargames-sites-rockstargamese98f402c4eb20f51ad1138b8d762ea83",
          info: "rockstargames-sites-rockstargamesa1834bca270cedafa5ef686b057ddb76",
          title: "rockstargames-sites-rockstargamesa8c9fed542ace4c9b6dc04ce1360d3aa",
          img: "rockstargames-sites-rockstargamesdb65f3b11e4192a9e37cc8be93ec4920",
          label: "rockstargames-sites-rockstargamescdd0e28e1efd5dad6a540ac04ad7833c",
          dropdownWrapper: "rockstargames-sites-rockstargamesa09626f6981b0414167996a0dba21b6c",
          header: "rockstargames-sites-rockstargamesc98f2a5fd8369584cc8224b2dd3224f3",
          list: "rockstargames-sites-rockstargamesc421478798f6f8b8a6ff99a97e42164c",
          open: "rockstargames-sites-rockstargamesc2ebe32968b09ca110e2d2de10133982",
          item: "rockstargames-sites-rockstargamesba18f7e2057898f660984ff077fffeef",
          caret: "rockstargames-sites-rockstargamesfcb487bf67b4a0fcc5e9c1ba360679f6",
          viewAll: "rockstargames-sites-rockstargamesff122fe69ebb07a0ddcada3d70eaa3a8",
          featured: "rockstargames-sites-rockstargamesfbe1499740a41473eb639778a020279f",
          hero: "rockstargames-sites-rockstargamesa119513a09de5753060b358246b02ecd",
          reddeadredemption2: "rockstargames-sites-rockstargamese3531ac98937dfe2d93a120e9c0c885c",
          launcher: "rockstargames-sites-rockstargamesa19ccd6a397060c66b2964d384553d55",
          companion: "rockstargames-sites-rockstargamesca169a041534e098674c3943d84b3751",
          "shark-cards": "rockstargames-sites-rockstargamese46203001b12ed5172c17ac6ff55fbd0",
          "gold-bars": "rockstargames-sites-rockstargamesf5993b4f80d993b0b89e83b5fa29b1e0",
          featuredDesc: "rockstargames-sites-rockstargamesd88ba962f0b8d17c8b71ede4b480bbb5",
          text: "rockstargames-sites-rockstargamesa6f9a2d411910c1d96d3173d1f08d87e",
          series: "rockstargames-sites-rockstargamesbb4919101e29ab30d4d0b552210f6ab9",
          collectionTitle: "rockstargames-sites-rockstargamese73c9de8e1b1076901d15a4c4875a5af"
        },
        U = (0, V.withTranslations)((e => {
          let {
            links: a,
            collectionId: i,
            name: n,
            title: t,
            label: s,
            t: l
          } = e;
          const [r, c] = (0, d.useState)(!1), {
            sanitize: o
          } = H(), m = n ?? l("Select Retailer"), u = (0, d.useRef)(), g = e => {
            u.current.contains(e.target) || c(!1)
          };
          return H().addHook("afterSanitizeAttributes", (function(e) {
            e.hasAttribute("target") && e.setAttribute("tabindex", r ? 0 : -1)
          })), (0, d.useEffect)((() => (r ? document.addEventListener("mousedown", g) : document.removeEventListener("mousedown", g), () => {
            document.removeEventListener("mousedown", g)
          })), [r]), (0, h.jsxs)("div", {
            ref: u,
            className: z.dropdownWrapper,
            children: [(0, h.jsx)("button", {
              className: z.header,
              onClick: () => c(!r),
              type: "select",
              "aria-label": `${s?s+", ":""}${m}`,
              children: (0, h.jsxs)("div", {
                className: z.title,
                children: [(0, h.jsx)("p", {
                  children: m
                }), (0, h.jsx)("div", {
                  className: [z.caret, r ? z.open : ""].join(" ")
                })]
              })
            }), (0, h.jsx)("ul", {
              className: [z.list, r ? z.open : ""].join(" "),
              children: [11, 10, 12, 13, 14, 15].includes(i) ? (0, h.jsx)("li", {
                className: z.item,
                dangerouslySetInnerHTML: {
                  __html: o(a, {
                    ADD_ATTR: ["target"]
                  })
                }
              }) : a.map((e => {
                if ("thumb" !== e.label) return (0, h.jsx)("li", {
                  className: z.item,
                  children: (0, h.jsx)(k.A, {
                    target: "_blank",
                    to: e.src,
                    "data-gtm-category": "Downloads",
                    "data-gtm-action": `Collection : ${t}`,
                    "data-gtm-label": e.src,
                    tabIndex: r ? 0 : -1,
                    children: e.label
                  })
                }, e.id)
              }))
            })]
          })
        })),
        Q = (0, V.withTranslations)((e => {
          let {
            collection: a,
            games: i,
            homepage: n = !1,
            t
          } = e;
          return (0, h.jsxs)("div", {
            className: z.collection,
            children: [(0, h.jsx)("h2", {
              className: z.sectionHeader,
              children: a.title
            }), (0, h.jsx)("div", {
              className: z.grid,
              children: i.results.map((e => (0, h.jsxs)("div", {
                className: z.downloadItem,
                children: [(0, h.jsx)("div", {
                  className: z.img,
                  style: {
                    backgroundImage: `url(${e.fob_640})`,
                    "--aspect-ratio": "64/79"
                  },
                  "aria-label": e.title
                }), (0, h.jsx)(U, {
                  collectionId: a.id,
                  links: e.downloads_game.platform,
                  label: e.title
                })]
              }, e.fob_640)))
            }), n ? (0, h.jsx)("div", {
              className: z.viewAll,
              children: (0, h.jsx)(k.Button, {
                role: "link",
                "aria-label": a.title,
                "data-gtm-category": "Downloads",
                "data-gtm-action": "Collection: View All",
                "data-gtm-label": a.title,
                to: "/downloads?collection=11",
                context: "secondary",
                children: t("View All")
              })
            }) : ""]
          })
        })),
        K = (0, V.withTranslations)((e => {
          let {
            collection: a,
            homepage: i = !1,
            t: n
          } = e;
          return (0, h.jsxs)("div", {
            className: z.collection,
            children: [(0, h.jsx)("h2", {
              className: z.sectionHeader,
              children: a.title
            }), (0, h.jsx)("div", {
              className: z.grid,
              children: a.apps.slice(0, i ? 4 : 100).map((e => (0, h.jsxs)("div", {
                className: z.downloadItem,
                children: [(0, h.jsx)("div", {
                  className: z.img,
                  style: {
                    backgroundImage: `url(${e.preview})`,
                    "--aspect-ratio": "1/1"
                  }
                }), (0, h.jsx)(U, {
                  collectionId: a.id,
                  links: e.platform
                })]
              }, e.id)))
            }), i ? (0, h.jsx)("div", {
              className: z.viewAll,
              children: (0, h.jsx)(k.Button, {
                role: "link",
                "aria-label": a.title,
                "data-gtm-category": "Downloads",
                "data-gtm-action": "Collection: View All",
                "data-gtm-label": a.title,
                to: "/downloads?collection=10",
                context: "secondary",
                children: n("View All")
              })
            }) : ""]
          })
        })),
        W = e => {
          let {
            collection: a
          } = e;
          return (0, h.jsxs)("div", {
            className: z.collection,
            children: [(0, h.jsx)("h2", {
              className: z.sectionHeader,
              children: a.title
            }), (0, h.jsx)("div", {
              className: z.grid,
              children: a.gold_bars.map((e => (0, h.jsxs)("div", {
                className: z.downloadItem,
                children: [(0, h.jsx)("div", {
                  className: z.img,
                  style: {
                    backgroundImage: `url(${e.preview})`,
                    "--aspect-ratio": "1/1"
                  }
                }), (0, h.jsx)(U, {
                  collectionId: a.id,
                  links: e.platform
                })]
              }, e.id)))
            })]
          })
        },
        Y = e => {
          let {
            collection: a
          } = e;
          return (0, h.jsxs)("div", {
            className: z.collection,
            children: [(0, h.jsx)("h2", {
              className: z.sectionHeader,
              children: a.title
            }), (0, h.jsx)("div", {
              className: z.grid,
              children: a.patches.map((e => (0, h.jsx)(k.A, {
                to: e.support_url,
                target: "_blank",
                "data-gtm-category": "Downloads",
                "data-gtm-action": "Collection : Patches",
                "data-gtm-label": e.game.title,
                children: (0, h.jsx)("div", {
                  className: z.card,
                  children: (0, h.jsx)("div", {
                    className: z.img,
                    style: {
                      backgroundImage: `url(${e.game.fob_640})`,
                      "--aspect-ratio": "64/79"
                    },
                    "aria-label": e.game.title
                  })
                })
              }, e.support_url)))
            })]
          })
        },
        J = e => {
          let {
            collection: a
          } = e;
          return (0, h.jsxs)("div", {
            className: z.collection,
            children: [(0, h.jsx)("h2", {
              className: z.sectionHeader,
              children: a.title
            }), (0, h.jsx)("div", {
              className: z.grid,
              children: a.shark_cards.map((e => (0, h.jsxs)("div", {
                className: z.downloadItem,
                children: [(0, h.jsx)("div", {
                  className: z.img,
                  style: {
                    backgroundImage: `url(${e.preview})`,
                    "--aspect-ratio": "7/5"
                  }
                }), (0, h.jsxs)("div", {
                  className: z.label,
                  children: [(0, h.jsx)("h5", {
                    children: e.title
                  }), (0, h.jsx)("p", {
                    children: e.desc
                  })]
                }), (0, h.jsx)(U, {
                  collectionId: a.id,
                  links: e.platform
                })]
              }, e.title)))
            })]
          })
        },
        X = e => {
          let {
            collection: a,
            imgRatio: i
          } = e;
          const n = a.title_slug,
            t = (0, d.useRef)();
          return (0, d.useEffect)((() => {
            t?.current && t.current.focus()
          }), [t]), (0, h.jsxs)("div", {
            className: z.collection,
            tabIndex: -1,
            ref: t,
            "aria-label": a?.title,
            children: [(0, h.jsx)("h2", {
              className: z.sectionHeader,
              children: a.title
            }), (0, h.jsx)("div", {
              className: z.grid,
              children: a.series.map((e => (0, h.jsx)(k.A, {
                to: `/downloads?collection=${a.id}&series=${e.id}`,
                "data-gtm-category": "Downloads",
                "data-gtm-action": `Collection : ${a.title}`,
                "data-gtm-label": e.title,
                children: (0, h.jsxs)("div", {
                  className: z.card,
                  children: [(0, h.jsx)("div", {
                    className: z.img,
                    style: {
                      backgroundImage: `url(${e?.musics?.[0]?.thumb??e?.dlcs?.[0]?.thumb??e.preview})`,
                      "--aspect-ratio": i
                    },
                    "aria-label": e.title
                  }), ["music", "dlc"].includes(n) ? "" : (0, h.jsx)("h5", {
                    className: z.title,
                    children: e.title
                  })]
                })
              }, e.id)))
            })]
          })
        },
        Z = e => {
          let {
            collection: a,
            games: i = []
          } = e;
          const n = [6, 10, 15].includes(a.id) ? "1/1" : [9, 11, 12, 13].includes(a.id) ? "64/79" : [14].includes(a.id) ? "/5" : "16/9";
          switch (a.title_slug) {
            case "apps":
              return (0, h.jsx)(K, {
                collection: a
              });
            case "gamespcmac":
              return (0, h.jsx)(Q, {
                collection: a,
                games: i
              });
            case "goldbars":
              return (0, h.jsx)(W, {
                collection: a
              });
            case "patches":
              return (0, h.jsx)(Y, {
                collection: a
              });
            case "sharkcards":
              return (0, h.jsx)(J, {
                collection: a
              });
            case "dlc":
            case "music":
            case "gamescreensaver":
            case "avatars":
            case "gamewallpaper":
            case "rockstarwallpaper":
              return (0, h.jsx)(X, {
                collection: a,
                imgRatio: n
              })
          }
        },
        ee = e => {
          let {
            collection: a
          } = e;
          return (0, h.jsx)(k.A, {
            to: `/downloads?collection=${a.id}`,
            "data-gtm-category": "Downloads",
            "data-gtm-action": "Collection : Misc",
            "data-gtm-label": a.title,
            children: (0, h.jsxs)("div", {
              className: z.card,
              children: [(0, h.jsx)("div", {
                className: z.img,
                style: {
                  "--aspect-ratio": "1/1",
                  backgroundImage: `url(${a.preview})`
                }
              }), (0, h.jsx)("h5", {
                className: z.title,
                children: a.title
              })]
            })
          })
        },
        ae = (0, V.withTranslations)((e => {
          let {
            collections: a,
            t: i
          } = e;
          return (0, h.jsxs)("div", {
            className: z.collection,
            children: [(0, h.jsx)("h2", {
              className: z.sectionHeader,
              children: i("Miscellaneous")
            }), (0, h.jsx)("div", {
              className: z.grid,
              children: a.map((e => (0, h.jsx)(ee, {
                collection: e
              }, e.id)))
            })]
          })
        })),
        ie = (0, V.withTranslations)((e => {
          let {
            data: {
              featured: a,
              game: i
            },
            t: n
          } = e;
          return (0, h.jsxs)("div", {
            className: z.featured,
            children: [(0, h.jsxs)("div", {
              className: [z.gridLarge, z.hero].join(" "),
              children: [(0, h.jsx)("div", {
                style: {
                  "--aspect-ratio": "1/1"
                },
                className: [z.img, z[i.title_slug]].join(" ")
              }), (0, h.jsxs)("div", {
                className: z.featuredDesc,
                children: [(0, h.jsxs)("div", {
                  className: z.text,
                  children: [(0, h.jsx)("h2", {
                    children: i.title
                  }), (0, h.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: i.description
                    }
                  })]
                }), (0, h.jsx)(k.Button, {
                  to: "https://store.rockstargames.com/game/buy-red-dead-redemption-2?_gl=1",
                  target: "_blank",
                  "data-gtm-category": "Downloads",
                  "data-gtm-action": "Featured Item",
                  "data-gtm-label": "https://store.rockstargames.com/game/buy-red-dead-redemption-2?_gl=1",
                  children: n("Download Now")
                })]
              })]
            }), (0, h.jsx)("h2", {
              className: z.sectionHeader,
              children: n("Featured Downloads")
            }), (0, h.jsx)("div", {
              className: z.gridLarge,
              children: a.map((e => (0, h.jsx)(k.A, {
                to: e.href,
                target: e.href.startsWith("http") ? "_blank" : "_self",
                "data-gtm-category": "Downloads",
                "data-gtm-action": `Featured: ${e.title_key}`,
                "data-gtm-label": e.href,
                children: (0, h.jsxs)("div", {
                  className: z.card,
                  children: [(0, h.jsx)("div", {
                    style: {
                      "--aspect-ratio": "780/373"
                    },
                    className: [z[e.name], z.img].join(" ")
                  }), (0, h.jsx)("h5", {
                    className: z.title,
                    children: n(e.title_key)
                  })]
                })
              }, e.name)))
            })]
          })
        })),
        ne = (0, V.withTranslations)((e => {
          let {
            collection: a,
            imgRatio: i,
            t: n
          } = e;
          const t = a.title_slug,
            s = (0, d.useRef)();
          return (0, d.useEffect)((() => {
            s?.current && s.current.focus()
          }), [s]), (0, h.jsxs)("div", {
            tabIndex: -1,
            ref: s,
            "aria-label": `${a.title}${a?.series?.[0]?.title?", "+a?.series?.[0]?.title:""}`,
            children: [(0, h.jsxs)("div", {
              className: [z.sectionHeader, z.series].join(" "),
              children: [(0, h.jsx)("h4", {
                className: z.collectionTitle,
                children: `${a.title}`
              }), (0, h.jsx)("h2", {
                className: z.seriesTitle,
                children: `${a?.series?.[0]?.title??""}`
              })]
            }), (0, h.jsx)("div", {
              className: z.grid,
              children: a.series.map((e => {
                let {
                  groups: s
                } = e;
                return s.map((e => (0, h.jsxs)("div", {
                  className: z.downloadItem,
                  children: [(0, h.jsx)("div", {
                    className: z.img,
                    style: {
                      backgroundImage: `url(${e?.thumb??e?.preview})`,
                      "--aspect-ratio": i
                    }
                  }), (0, h.jsxs)("div", {
                    className: z.label,
                    children: [(0, h.jsx)("h5", {
                      children: n(e.label)
                    }), (0, h.jsx)(U, {
                      links: "dlc" === t || "music" === t ? e.platform : "gamescreensaver" === t ? e.screensavers : "gamewallpaper" === t || "rockstarwallpaper" === t ? e.wallpapers : e.avatars,
                      collectionId: a.id,
                      label: e.label,
                      title: a.series[0].title,
                      name: ["gamewallpaper", "avatars", "rockstarwallpaper"].includes(t) ? n("Select Size") : ["gamescreensaver"].includes(t) ? n("Select") : ""
                    })]
                  })]
                }, e.id)))
              }))
            })]
          })
        }));
      var te = i(55380);
      const se = (0, V.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            setBreadcrumb: i
          } = (0, L.useRockstarLocalState)(), n = (0, V.useQueryParams)(), [t, s] = (0, d.useState)(null), [l, r] = (0, d.useState)(null), {
            loading: c,
            refetch: o
          } = (0, _.useQuery)(te.Downloads, {
            variables: t,
            skip: !0,
            autoSetLoading: !0
          });
          if ((0, d.useEffect)((() => {
              r(null);
              const e = null !== n.get("series"),
                a = {
                  seriesId: Number(n.get("series")),
                  collectionId: Number(n.get("collection")),
                  numAppsToGet: "10" === n.get("collection") ? 100 : 4,
                  numGamesToGet: "11" === n.get("collection") ? 100 : 4,
                  withIndex: null === n.get("collection") && null === n.get("series"),
                  withGames: null === n.get("collection") || "11" === n.get("collection"),
                  withCollection: null !== n.get("collection"),
                  withSeries: e,
                  withDlcs: "12" === n.get("collection"),
                  withGroups: e,
                  withMusics: "13" === n.get("collection"),
                  withGoldbars: "15" === n.get("collection"),
                  withApps: "10" === n.get("collection"),
                  withPatches: "9" === n.get("collection"),
                  withSharkCards: "14" === n.get("collection")
                };
              s(a)
            }), [n.get("series"), n.get("collection"), r]), (0, d.useEffect)((() => {
              let e = [{
                href: "/downloads",
                title: a("Downloads")
              }];
              return l?.collection?.id && t.withSeries && (e = [...e, {
                href: `/downloads?collection=${l.collection.id}`,
                title: l.collection.title
              }]), i(e), () => {
                i()
              }
            }), [l, t]), (0, d.useEffect)((() => {
              t && (async () => {
                const e = await o(t);
                r(e.data)
              })()
            }), [o, t]), !l || c) return null;
          if (t.withIndex) return (0, h.jsx)("div", {
            className: z.index,
            children: (0, h.jsxs)("div", {
              className: z.sections,
              children: [(0, h.jsx)(ie, {
                data: l
              }), (0, h.jsx)(Q, {
                homepage: !0,
                games: l.pc_mac_games,
                collection: l.collections.find((e => "gamespcmac" === e.title_slug))
              }), (0, h.jsx)(K, {
                homepage: !0,
                collection: l.collections.find((e => "apps" === e.title_slug))
              }), (0, h.jsx)(ae, {
                collections: l.collections.filter((e => !["apps", "gamespcmac", "sharkcards"].includes(e.title_slug)))
              })]
            })
          });
          if (t.withSeries) {
            const e = [6, 12, 13].includes(t.collectionId) ? "1/1" : "16/9";
            return (0, h.jsx)("div", {
              className: z.index,
              children: (0, h.jsx)(ne, {
                collection: l.collection,
                imgRatio: e
              })
            })
          }
          return t.withCollection ? (0, h.jsx)("div", {
            className: z.index,
            children: (0, h.jsx)(Z, {
              collection: l.collection,
              games: l.pc_mac_games
            })
          }) : null
        })),
        le = (0, V.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            setBreadcrumb: i,
            setNormalLogo: n
          } = (0, L.useRockstarLocalState)();
          return (0, d.useEffect)((() => (i([{
            href: "/newswire",
            title: a("Newswire")
          }], ""), () => {
            n(!0), i()
          })), []), (0, h.jsx)("div", {
            className: "rockstargames-sites-rockstargamesb7f93a0d98bb3eaac82ba7d6aef63890",
            "data-testid": "newswire-list",
            children: (0, h.jsx)(k.NewswireList, {
              t: a
            })
          })
        }));
      var de = i(91336),
        re = i.n(de);
      const ce = (0, V.withTranslations)((e => {
          let {
            t: a
          } = e;
          const i = (0, p.useParams)(),
            {
              setBreadcrumb: n,
              setNormalLogo: t
            } = (0, L.useRockstarLocalState)();
          return (0, d.useEffect)((() => (n([{
            href: "/newswire",
            title: a("Newswire")
          }], ""), () => {
            t(!0), n()
          })), []), (0, h.jsx)(re(), {
            idHash: String(i.articleId)
          })
        })),
        oe = "rockstargames-sites-rockstargamese6a4f8b4027dadd3be8f848d9b846bc3";
      var me = i(98956),
        ue = i.n(me);
      const ke = (0, V.withTranslations)((e => {
        let {
          t: a
        } = e;
        const {
          setBreadcrumb: i,
          setNormalLogo: n
        } = (0, L.useRockstarLocalState)(), t = (0, V.useQueryParams)(), [s, l] = (0, d.useState)({}), {
          data: r
        } = (0, _.useQuery)(ue(), {
          variables: s,
          skip: !Object.entries(s).length,
          autoSetLoading: !0
        }), {
          search: c
        } = (0, p.useLocation)();
        if ((0, d.useEffect)((() => {
            window.scrollTo(0, 0)
          }), [c]), (0, d.useEffect)((() => (i([{
            href: "/videos",
            title: a("Videos")
          }]), () => {
            i()
          })), []), (0, d.useEffect)((() => {
            l({
              ...s,
              type: t.get("type"),
              gameId: Number(t.get("gameId") ?? 0),
              index: null === t.get("type")
            })
          }), [t.get("type"), t.get("gameId")]), (0, d.useEffect)((() => (n(!1), () => n(!0))), []), !r) return null;
        if (r?.game && r?.gameVideos) return (0, h.jsx)("div", {
          className: oe,
          children: (0, h.jsx)(k.VideoList, {
            vids: r.gameVideos.results,
            title: a("Videos from %s").replace("%s", r.game.title)
          })
        });
        const {
          games: o,
          gtao: m,
          gtaVI: u,
          gtaosessions: g,
          latest: v,
          rdo: f
        } = r;
        return (0, h.jsx)("div", {
          className: oe,
          children: s.type ? "" : (0, h.jsxs)(h.Fragment, {
            children: [(0, h.jsx)(k.VideoCarousel, {
              videos: v.results,
              t: a
            }), (0, h.jsxs)("div", {
              className: "rockstargames-sites-rockstargamesb9a5297e3e78f65221054aa1f6d77597",
              children: [(0, h.jsx)(k.VideoList, {
                vids: u.results,
                title: a("Videos from %s").replace("%s", "Grand Theft Auto VI")
              }), (0, h.jsx)(k.VideoList, {
                vids: f.results,
                title: a("Videos from %s").replace("%s", "Red Dead Online")
              }), (0, h.jsx)(k.VideoList, {
                vids: m.results,
                title: a("Videos from %s").replace("%s", "GTA Online")
              }), (0, h.jsx)(k.VideoList, {
                vids: g.results,
                title: a("GTA Online Sessions Episodes")
              }), (0, h.jsx)(k.VideoList, {
                games: o,
                title: a("By Game")
              })]
            })]
          })
        })
      }));
      var ge = i(84644);
      const ve = (0, V.withTranslations)((e => {
        let {
          t: a
        } = e;
        const i = (0, p.useNavigate)(),
          {
            setNormalLogo: n,
            setBreadcrumb: t,
            setTitle: s
          } = (0, L.useRockstarLocalState)(),
          {
            videoId: l
          } = (0, p.useParams)(),
          {
            video: r,
            related: c
          } = (0, ge.useVideoData)({
            id: Number(l)
          });
        return (0, d.useEffect)((() => (t([{
          href: "/videos",
          title: a("Videos")
        }]), n(!1), () => {
          n(!0), t()
        })), []), (0, d.useEffect)((() => {
          r && s(`${r.game.title} - ${r.title}`)
        }), [r]), r ? (0, h.jsxs)(h.Fragment, {
          children: [(0, h.jsx)(ge.PlayerWithInfo, {
            videoId: Number(l),
            videoChangeCallback: e => {
              i(`../videos/${e}`)
            }
          }), c?.results?.length ? (0, h.jsx)(k.VideoList, {
            vids: c.results,
            title: a("Related Videos")
          }) : ""]
        }) : null
      }));
      var fe = i(8720);
      (0, A.defineMessages)({});
      const be = JSON.parse('{"us":{"community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Community Guidelines"}}');
      var pe = i(5752),
        he = i.n(pe);
      const Ne = (0, A.withIntl)((0, V.withTranslations)((e => {
        let {
          t: a
        } = e;
        const {
          setBreadcrumb: i
        } = (0, L.useRockstarLocalState)(), {
          data: n
        } = (0, _.useQuery)(he(), {
          autoSetLoading: !0
        }), t = n?.games ?? null;
        if ((0, d.useEffect)((() => (i([{
            href: "/games",
            title: a("Games")
          }]), () => i())), [t]), !t) return null;
        return (0, h.jsxs)(h.Fragment, {
          children: [!1, (0, h.jsxs)(h.Fragment, {
            children: [(0, h.jsx)(fe.CardWide, {
              containerClass: "rockstargames-sites-rockstargamesd7bc8b1b86787e675254d02b2780a8f3",
              title: "Grand Theft Auto VI",
              link: "../VI"
            }), (0, h.jsx)("div", {
              className: "rockstargames-sites-rockstargamese688ae11bba38a9723018b024df142ee",
              "data-testid": "gamesBody",
              children: t.results.map((e => (0, h.jsx)(k.GameCard.Link, {
                game: e
              }, e.title_slug)))
            })]
          })]
        })
      })), be);
      var Se = i(66296),
        we = i.n(Se);
      const xe = e => {
          let {
            game: a,
            t: i
          } = e;
          const {
            purchases: n,
            digital_purchases: t
          } = a, s = n.length + t.length;
          if (0 === s) return null;
          const l = (0, h.jsx)(h.Fragment, {
              children: t.map((e => (0, h.jsx)(k.A, {
                target: "_blank",
                to: `/game-digital-purchase?game=${a.id}&platform=${e.platform_id}`,
                children: `${e.platform_name} - Digital`
              }, e.platform_name)))
            }),
            d = (0, h.jsx)(h.Fragment, {
              children: n.map((e => (0, h.jsx)(k.A, {
                target: "_blank",
                to: e.href,
                children: `${e.platform.name} - Physical`
              }, e.href)))
            });
          if (s > 1) return (0, h.jsxs)(k.Dropdown, {
            title: i("Buy Now"),
            children: [l, d]
          });
          const r = n.length ? n[0] : t[0];
          return r?.href ? (0, h.jsx)(k.Button, {
            to: r.href,
            context: "secondary",
            target: "_blank",
            "data-gtm-category": "Games",
            "data-gtm-action": "Buy Now",
            "data-gtm-label": a.title,
            children: i("Buy Now")
          }) : null
        },
        ye = e => {
          let {
            game: a
          } = e;
          return (0, h.jsx)("h2", {
            className: "rockstargames-sites-rockstargamesd999c131d523164f20bad2d6c322c7b0",
            children: a.title
          })
        },
        je = e => {
          let {
            game: a,
            t: i
          } = e;
          const n = [],
            t = [],
            s = ["libertycitystories", "vicecitystories"].includes(a.title_slug);
          return a.developers.map((e => {
            t.push(e.title)
          })), a.platforms.map((e => {
            n.push(e.name)
          })), (0, h.jsx)(Ae, {
            title: i("Specifications"),
            children: (0, h.jsxs)("div", {
              className: "rockstargames-sites-rockstargamesa3be2ad0c6089bcc99dc39a07f1c8556",
              children: [(0, h.jsx)(Ie, {
                title: i("Developer"),
                children: t.join(", ")
              }), (0, h.jsx)(Ie, {
                title: i("Platform"),
                children: n.join(", ")
              }), (0, h.jsx)(Ie, {
                title: i("Release Date"),
                children: a.release_date_in_words
              }), (0, h.jsxs)("dl", {
                className: "rockstargames-sites-rockstargamesb2e21b26b02b2f01abbfafaa61d2132f",
                children: [(0, h.jsx)("dt", {
                  children: i("Rating")
                }), (0, h.jsxs)("dd", {
                  className: "rockstargames-sites-rockstargamesbb187beb63c639e6ee81536d2ec853cc",
                  children: [(0, h.jsx)(k.Rating, {
                    href: a.url_rating,
                    img: a.img_rating,
                    descriptors: a.rating_descriptors
                  }), s ? (0, h.jsx)("div", {
                    className: "rockstargames-sites-rockstargamesf6106c12ee39ddbd58cb459de26ba30f"
                  }) : ""]
                })]
              })]
            })
          })
        },
        Fe = e => {
          let {
            screens: a,
            t: i
          } = e;
          return (0, h.jsx)(Ae, {
            c: !0,
            title: i("Screens"),
            children: (0, h.jsx)("div", {
              className: "rockstargames-sites-rockstargamesdf799e57a036664e01d8b1c28918f7e7",
              children: a.map((e => (0, h.jsx)("div", {
                style: {
                  backgroundImage: `url(${e.file})`
                }
              }, e.file)))
            })
          })
        },
        _e = e => {
          let {
            game: a,
            t: i
          } = e;
          const [n, t] = (0, d.useState)(!1), s = "<br>", l = a.description.includes(s);
          return (0, h.jsx)(Ae, {
            className: "rockstargames-sites-rockstargamesbb3bcfffbb0324212ca756bbcf0b331d",
            title: i("Game Description"),
            children: l ? (0, h.jsxs)(h.Fragment, {
              children: [(0, h.jsx)("p", {
                children: a.description.split(s)[0]
              }), (0, h.jsx)("div", {
                "aria-live": "polite",
                children: n && (0, h.jsx)("p", {
                  children: a.description.split(s).slice(1)
                })
              }), " ", (0, h.jsx)(k.Button, {
                context: "secondary",
                onClick: () => t(!n),
                "aria-expanded": n,
                children: (0, h.jsx)("span", {
                  "aria-live": "polite",
                  children: i(n ? "Read Less" : "Read More")
                })
              })]
            }) : (0, h.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: a.description
              }
            })
          })
        },
        Ve = e => {
          let {
            game: a,
            posts: i,
            t: n
          } = e;
          return (0, h.jsxs)(Ae, {
            title: n("Latest News"),
            className: "rockstargames-sites-rockstargamesae6f169b7d8b535785cbab042d17b2f3",
            children: [(0, h.jsx)("div", {
              className: "rockstargames-sites-rockstargamesf4370b320e728cb6f2ebfe098d24dd9a",
              children: i.map((e => (0, h.jsx)(k.NewswireCard, {
                noSpecialOrder: !0,
                post: e
              }, e.id)))
            }), (0, h.jsx)(k.Button, {
              "data-gtm-category": "Games",
              "data-gtm-action": "Latest News",
              "data-gtm-label": `${a.title} - More Click`,
              to: `/newswire?tag_id=${a.tags[0].id}`,
              context: "secondary",
              children: n("Read more at the Rockstar Newswire")
            })]
          })
        },
        Te = e => {
          let {
            game: a,
            videos: i,
            t: n
          } = e;
          return (0, h.jsxs)(Ae, {
            title: n("Latest Videos"),
            className: "rockstargames-sites-rockstargamesea974aced4784cc236949e23461151c5",
            children: [(0, h.jsx)("div", {
              className: "rockstargames-sites-rockstargamese1adbaf782c177537eee8ed7acdb33a9",
              children: i.map((e => (0, h.jsx)(k.VideoCard.Link, {
                video: e,
                gameTitleNecessary: !1
              }, e.id)))
            }), (0, h.jsx)(k.Button, {
              "data-gtm-category": "Games",
              "data-gtm-action": "Latest Videos",
              "data-gtm-label": `${a.title} - View All Click`,
              to: `/videos?type=game&gameId=${a.id}`,
              context: "secondary",
              children: n("See all %s videos").replace("%s", a.title)
            })]
          })
        },
        Ie = e => {
          let {
            children: a,
            title: i,
            className: n = ""
          } = e;
          return (0, h.jsxs)("dl", {
            className: n,
            children: [(0, h.jsx)("dt", {
              children: i
            }), (0, h.jsx)("dd", {
              dangerouslySetInnerHTML: {
                __html: a
              }
            })]
          })
        },
        Ae = e => {
          let {
            title: a,
            className: i = "",
            children: n,
            style: t = {}
          } = e;
          return (0, h.jsxs)("section", {
            className: i,
            style: t,
            children: [a ? (0, h.jsx)("h4", {
              className: "rockstargames-sites-rockstargamesd3ae0f7bea78620d460ed1de4bfb1546",
              children: a
            }) : "", n]
          })
        },
        De = (0, V.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            setBreadcrumb: i,
            setTitle: n
          } = (0, L.useRockstarLocalState)(), t = (0, p.useParams)(), {
            data: s
          } = (0, _.useQuery)(we(), {
            autoSetLoading: !0,
            variables: {
              titleSlug: t.gameTitlelug
            }
          }), l = s?.game ?? null;
          return (0, d.useEffect)((() => (l && n(l.title), i([{
            href: "/games",
            title: a("Games")
          }]), () => {
            i()
          })), [l]), l ? (0, h.jsxs)("div", {
            className: "rockstargames-sites-rockstargamesf3214996ae18b839cbe8d74436e33569",
            children: [(0, h.jsxs)("div", {
              className: "rockstargames-sites-rockstargamesad748c74afaaac7ae3742ea01deb9327",
              children: [(0, h.jsxs)("div", {
                className: "rockstargames-sites-rockstargamesb12200c67941853e210bfa8ec2a2151b",
                children: [(0, h.jsx)(ye, {
                  game: l,
                  t: a
                }), (0, h.jsxs)("div", {
                  className: "rockstargames-sites-rockstargamese117d55b425e388a7f3ef0036fad9045",
                  children: [(0, h.jsx)(xe, {
                    game: l,
                    t: a
                  }), l.has_official_site && (0, h.jsx)(k.Button, {
                    to: l.url_official,
                    context: "secondary",
                    target: "_blank",
                    "data-gtm-category": "Games",
                    "data-gtm-action": "Official Site Click-through",
                    "data-gtm-label": l.title,
                    children: a("Official Site")
                  })]
                })]
              }), (0, h.jsx)(k.GameCard.Art, {
                imgSrc: l.fob_1280,
                titleSlug: l.title_slug
              })]
            }), (0, h.jsxs)("div", {
              className: "rockstargames-sites-rockstargamesce487783cab9e36402d70d80e6d9d778",
              children: [(0, h.jsx)(_e, {
                game: l,
                t: a
              }), l.tags.length && l.tags[0].videos.length ? (0, h.jsx)(Te, {
                game: l,
                videos: l.tags[0].videos,
                t: a
              }) : "", l.tags.length && l.tags[0].posts.length ? (0, h.jsx)(Ve, {
                game: l,
                posts: l.tags[0].posts,
                t: a
              }) : "", l.screens.length ? (0, h.jsx)(Fe, {
                screens: l.screens,
                t: a
              }) : "", (0, h.jsx)(je, {
                game: l,
                t: a
              })]
            })]
          }) : null
        }));
      var $e = i(55120),
        Ee = i(79176),
        Ce = i.n(Ee);
      const Le = "rockstargames-sites-rockstargamesfb53bedab2c55d1a3c602f6d22cbf878",
        Ge = e => {
          let {
            loading: a,
            searchResponse: i,
            searchTerm: n,
            activeTab: t,
            t: s
          } = e;
          const [l, d] = (0, p.useSearchParams)();
          let r;
          switch (t) {
            case "posts":
              r = i.posts.results.map((e => (0, h.jsx)(k.NewswireCard, {
                post: e,
                noSpecialOrder: !0
              }, e.id)));
              break;
            case "games":
              r = i.games.results.map((e => (0, h.jsx)(k.GameCard.Link, {
                game: e
              }, e.id)));
              break;
            case "videos":
              r = i.videos.results.map((e => (0, h.jsx)(k.VideoCard.Link, {
                video: e
              }, e.id)));
              break;
            default:
              r = null
          }
          return (0, h.jsxs)(h.Fragment, {
            children: [a ? "" : (0, h.jsx)("section", {
              className: "rockstargames-sites-rockstargamesb6a41ef752e979cced54d95e69679ae9",
              children: (0, h.jsx)("div", {
                className: "rockstargames-sites-rockstargamesc0e4a01d8eeef3f28aaaeea0249d53e8",
                children: r
              })
            }), i[t]?.paging ? (0, h.jsx)("section", {
              className: "rockstargames-sites-rockstargamesc024862ad35278cedeff9669a4045d22",
              children: (0, h.jsx)(k.Paging, {
                data: i[t].paging,
                onPageUpdate: e => {
                  d({
                    ...Object.fromEntries([...l]),
                    page: e
                  }), window.scrollTo(0, 0)
                }
              })
            }) : ""]
          })
        },
        Be = (0, V.withTranslations)((e => {
          let {
            t: a
          } = e;
          const i = (0, A.useIntl)(),
            {
              state: {
                search: n
              },
              setSearch: t,
              setTitle: s
            } = (0, L.useRockstarLocalState)(),
            l = (0, V.useQueryParams)(),
            [r, c] = (0, d.useState)(null),
            [o, m] = (0, d.useState)({}),
            [u, g] = (0, d.useState)(l.get("tab") ?? "games"),
            {
              data: v = {},
              loading: f
            } = (0, _.useQuery)(Ce(), {
              variables: o,
              skip: !Object.entries(o).length || !o.q,
              autoSetLoading: !0
            });
          return (0, d.useEffect)((() => {
            const e = {
              q: l.get("q"),
              page: Number(l.get("page") ?? 1),
              withGames: !0,
              withPosts: !0,
              withVideos: !0
            };
            m(e), t(l.get("q"))
          }), [l.get("q"), l.get("page"), l.get("tab"), u]), (0, d.useEffect)((() => {
            const e = Object.entries(v).find((e => {
              let [, a] = e;
              return a?.paging?.count > 0
            }))?.[0];
            g(l.get("tab") ?? e ?? "games")
          }), [v, l.get("tab")]), (0, d.useEffect)((() => {
            void 0 !== v?.games?.paging?.count && (c((v?.games?.paging?.count ?? 0) + (v?.videos?.paging?.count ?? 0) + (v?.posts?.paging?.count ?? 0)), s(v?.meta?.title.replace("%s", n)))
          }), [v, u]), Object.entries(o).length ? o.q ? null === r || f ? null : (0, h.jsx)(h.Fragment, {
            children: v[u].results.length ? (0, h.jsxs)("div", {
              className: Le,
              children: [(0, h.jsx)("section", {
                className: "rockstargames-sites-rockstargamesb54a20d6c2a28171fc3b24fa6d2df86f",
                children: (0, h.jsx)("h4", {
                  children: (0, h.jsx)(A.FormattedMessage, {
                    ...$e.sitesRockstar.rsg_total_results_message,
                    values: {
                      Tab: (0, h.jsx)("span", {
                        className: "rockstargames-sites-rockstargamesc396a7460982460f718f495155de8358",
                        children: u
                      }),
                      Query: (0, h.jsx)("span", {
                        children: l.get("q")
                      })
                    }
                  })
                })
              }), f ? "" : (0, h.jsx)(Ge, {
                searchResponse: v,
                searchTerm: n,
                activeTab: u,
                t: a
              })]
            }) : (0, h.jsx)("div", {
              className: Le,
              children: (0, h.jsxs)("section", {
                className: "rockstargames-sites-rockstargamesb408f6bebfeb1b3462c8dabcb36e0d9b",
                children: [(0, h.jsx)("div", {
                  className: "rockstargames-sites-rockstargamesc6f00c8492b7f5d1a7ae1cc143faa1ae"
                }), (0, h.jsx)("h4", {
                  children: i.formatMessage($e.sitesRockstar.rsg_no_results)
                })]
              })
            })
          }) : (0, h.jsx)("div", {
            className: "rockstargames-sites-rockstargamesa6b96f1aa331851eea3b9fad5cb04a8f",
            children: (0, h.jsxs)("section", {
              className: "rockstargames-sites-rockstargamescdc8dd93ce6946707dab221c0a16845e",
              children: [(0, h.jsx)("h3", {
                children: a("Search")
              }), (0, h.jsx)(k.SearchBox, {})]
            })
          }) : null
        })),
        Pe = (0, A.defineMessages)({
          community_guidelines_hero_aria_label: {
            id: "community_guidelines_hero_aria_label",
            defaultMessage: "Say Sorry, Be Nice!"
          },
          community_guidelines_hero_title: {
            id: "community_guidelines_hero_title",
            defaultMessage: "Community Guidelines"
          }
        });
      var Oe = i(33309),
        Re = i.n(Oe);
      const qe = {
        companyInfo: "rockstargames-sites-rockstargamesf943a5b3222952639b355b692cd3738d",
        top: "rockstargames-sites-rockstargamesedf5a2c3edb9d28aa5e78792b12733b5",
        content: "rockstargames-sites-rockstargamesef8cad83a641466bdee771139faed62e",
        nav: "rockstargames-sites-rockstargamesf68cfd32b045dc7e95232d7faf79a284",
        us: "rockstargames-sites-rockstargamesf1d1f759d6618c8dd40f01be8aeedc00",
        br: "rockstargames-sites-rockstargamesa598d7e1c1aecb739f2d9b06fad80918",
        cz: "rockstargames-sites-rockstargamese1625f58afa3e3fdb476a97278eb674e",
        de: "rockstargames-sites-rockstargamesf4113889029180b03cb313ec3a165a5f",
        es: "rockstargames-sites-rockstargamesc17ca09c7a65aef8aff0ff91f7bb6892",
        fr: "rockstargames-sites-rockstargamesd7d0b8fbf9d0c537c86194da1e4d1e5b",
        it: "rockstargames-sites-rockstargamesd7029ad0b1cf35481b65da9be0061cf1",
        jp: "rockstargames-sites-rockstargamesa402493348ae0ed58bc84c3b9627a5a3",
        kr: "rockstargames-sites-rockstargamesc66819179b5fd85bbc46ad9a5ab961ad",
        mx: "rockstargames-sites-rockstargamesd92adf4512ff6a95a7f23079948fa6b2",
        nl: "rockstargames-sites-rockstargamesca887a9fec01cf48dc95a367688ef8c8",
        pl: "rockstargames-sites-rockstargamese9b8aab773e489c22c1948e5b5d3b4b2",
        ru: "rockstargames-sites-rockstargamesb6ccaa11bf9d4f6dd02948f1620a40c5",
        sa: "rockstargames-sites-rockstargamese7b9353b61ab3484a46736ea041219ff",
        tw: "rockstargames-sites-rockstargamesddc2bb738d6bce068b401f506cfe93e7",
        zh: "rockstargames-sites-rockstargamese1524848cf231a25c7bf2ba45974f498",
        cookieSettingsButton: "rockstargames-sites-rockstargamesc268c7156142f3275c243f31cc232ae5",
        cookieSettingsModal: "rockstargames-sites-rockstargamesefd3f6904fd12431580823e02744ad5d",
        open: "rockstargames-sites-rockstargamesf0b2945ddb98d457b9fce95f91e28344",
        settings: "rockstargames-sites-rockstargamesda10ad30238ec98939e1bcc84f49ef6e",
        setting: "rockstargames-sites-rockstargamesd7951bf06699a3e55c9971827284450a",
        optional: "rockstargames-sites-rockstargamesbe268b47e37393ac1f8a8a3f2d82aa8e",
        dot: "rockstargames-sites-rockstargamesc8bc5f37684843cea9695d5833509e18",
        optionalOn: "rockstargames-sites-rockstargamese066e619e216c7660f555fa8fd2f5abc",
        rtl: "rockstargames-sites-rockstargamesf7037a458b3d6fd80ea26847cfea33e9"
      };
      var Me = i(79036),
        He = i.n(Me);
      const ze = (0, k.withSearchbarErrorBoundary)((e => {
          let {
            CookieSettingsModal: a,
            noCountrySelector: i,
            localeOverride: n,
            titleKey: t,
            jsonType: s
          } = e;
          const l = (0, p.useNavigate)(),
            r = (0, p.useLocation)(),
            c = (0, V.useLocale)(),
            o = (0, V.useQueryParams)(),
            m = (0, d.useRef)(),
            u = (e, a) => {
              const i = a ?? e.target.hash,
                n = document.getElementById(i.replace("#", "")),
                t = document.getElementsByName(i.replace("#", ""))?.[0],
                s = n ?? t ?? null,
                d = o.get("country");
              if (e) {
                const a = `${r.pathname}${o.get("country")?`?country=${d}`:""}${i}`;
                l(a), e.preventDefault()
              }
              s && window.scroll(0, s.offsetTop - m.current.getBoundingClientRect().height - 60)
            },
            [g, v] = (0, d.useState)({}),
            {
              data: f,
              loading: b
            } = (0, _.useQuery)(He(), {
              variables: g,
              skip: !Object.entries(g).length,
              autoSetLoading: !0
            });
          (0, d.useEffect)((() => {
            const e = o.get("country") ?? o.get("locale") ?? null,
              a = void 0 === i,
              t = a && null !== e ? e : a && c.split("_").length > 1 ? "hans" === c.split("_")[1] ? c.split("_")[0] : c.split("_")[1] : c,
              l = n || t || "us";
            v({
              jsonType: s,
              jsonLocale: l,
              metaUrl: `/${s}`,
              locale: l
            })
          }), [o.get("country"), o.get("locale"), n]), (0, d.useEffect)((() => {
            document.querySelectorAll(".scrollToLink").forEach((e => {
              (e => {
                if (e) {
                  const a = o.get("country"),
                    i = e.href.split("#")[1],
                    n = document.getElementsByTagName("base")[0]?.getAttribute("href");
                  e.setAttribute("href", `${n}${r.pathname.replace("/","")}${null!==a?`?country=${a}`:""}#${i}`)
                }
              })(e), e.addEventListener("click", (e => {
                u(e, !1)
              }))
            })), "" !== r.hash && setTimeout((() => {
              u(!1, r.hash)
            }), 10)
          }), [f]);
          const {
            content: N
          } = f?.companyInfo ?? "", {
            title: S
          } = f?.meta ?? t ?? "";
          return (0, h.jsxs)("div", {
            className: qe.companyInfo,
            "data-locale": g.jsonLocale,
            "data-page": s,
            children: [(0, h.jsxs)("section", {
              className: qe.top,
              ref: m,
              children: [(0, h.jsx)("h1", {
                children: S
              }), "undefined" !== i && i ? "" : (0, h.jsx)("nav", {
                className: qe.nav,
                children: ["us", "br", "cz", "de", "es", "fr", "it", "jp", "kr", "mx", "nl", "pl", "ru", "sa", "tw", "zh"].map(((e, a) => (0, h.jsx)(k.A, {
                  to: `${r.pathname}?country=${e}`,
                  className: qe[e]
                }, a)))
              })]
            }), f && !b ? (0, h.jsx)("section", {
              className: qe.content,
              "data-json-type": s,
              children: "cookies" === s && f ? (0, h.jsx)(Re(), {
                renderInWrapper: !1,
                components: {
                  CookieSettingsModal: a
                },
                jsx: N,
                onError: e => {
                  console.error("jsx error in companyinfo", e)
                }
              }) : (0, h.jsx)("span", {
                dangerouslySetInnerHTML: {
                  __html: N
                }
              })
            }) : ""]
          })
        })),
        Ue = (0, A.withIntl)((0, V.withLocale)((e => {
          let {
            locale: a
          } = e;
          const n = (0, A.useIntl)();
          return (0, h.jsxs)(h.Fragment, {
            children: [(0, h.jsx)("img", {
              src: i(47520),
              className: "rockstargames-sites-rockstargamesec30ec5e27e1ebb1542c6146f14b2e76",
              "aria-label": n.formatMessage(Pe.community_guidelines_hero_aria_label)
            }), (0, h.jsx)(ze, {
              localeOverride: a,
              jsonType: "community-guidelines",
              titleKey: "Community Guidelines"
            })]
          })
        })), be),
        Qe = () => (0, h.jsx)(ze, {
          jsonType: "conduct",
          titleKey: "conduct-title",
          noCountrySelector: !0
        }),
        Ke = () => (0, h.jsx)(ze, {
          jsonType: "corpinfo",
          titleKey: "Corporate Information",
          noCountrySelector: !0
        }),
        We = () => (0, h.jsx)(ze, {
          jsonType: "eula",
          titleKey: "eula-title"
        }),
        Ye = () => (0, h.jsx)(ze, {
          jsonType: "legal",
          titleKey: "Terms of Service"
        }),
        Je = () => (0, h.jsx)(ze, {
          jsonType: "careers-privacy",
          titleKey: "Privacy Policy"
        }),
        Xe = () => (0, h.jsx)(ze, {
          jsonType: "privacy",
          titleKey: "Privacy Policy"
        }),
        Ze = e => {
          let {
            t: a
          } = e;
          return (0, h.jsx)(k.Button, {
            className: qe.cookieSettingsButton,
            onClick: () => window.OneTrust?.ToggleInfoDisplay(),
            children: a("gdpr-settings-button-title")
          })
        },
        ea = () => (0, h.jsx)(ze, {
          jsonType: "cookies",
          titleKey: "Cookie Policy",
          CookieSettingsModal: (0, V.withTranslations)(Ze)
        }),
        aa = () => (0, h.jsx)(ze, {
          jsonType: "ccpa",
          titleKey: "ccpa-title",
          noCountrySelector: !0
        }),
        ia = {
          manuals: "rockstargames-sites-rockstargamesd366f1535618977c9069ab44ed0bd2d4",
          list: "rockstargames-sites-rockstargamesebdbff5c268a40fcdd09c5738f9cb3f6",
          item: "rockstargames-sites-rockstargameseddd4442eabbeb01f7a33e84439fec06",
          img: "rockstargames-sites-rockstargamesaaaf6f13ef1c4248e48b772ff13a3ec2",
          dropdown: "rockstargames-sites-rockstargamesa097e5237ea4f58077c4b173a060af63",
          items: "rockstargames-sites-rockstargamesd216c8f3cea7aa52a0425773ed8ce3de",
          detail: "rockstargames-sites-rockstargamesf96273be7a357953000cb08c1929187e",
          rockstar: "rockstargames-sites-rockstargamese6757323962a726a229c781add11aff9",
          music: "rockstargames-sites-rockstargamesb377d8c5ecc4faa508b0edd8a13cf1c7",
          gtaiv: "rockstargames-sites-rockstargamesf54af395872837e54fa5cdcc017a8b78",
          vcs: "rockstargames-sites-rockstargamesdd3c7060d7078b88a44ff7bf1522302d",
          tlad: "rockstargames-sites-rockstargamesb900b403d8ff1af48f946bbb905ddea6",
          bogt: "rockstargames-sites-rockstargamesa45583258c6a317fd0e4b1a510d4dfe5",
          eflc: "rockstargames-sites-rockstargamesdbeaa00ed7de5ffbb3bda1d5e0d2df37",
          gameLogo: "rockstargames-sites-rockstargamesf1528d3bd79039eb1c1c195fdc660bc9",
          warriors: "rockstargames-sites-rockstargamesb2ca55a944280f00f04243db15b10a5a",
          album: "rockstargames-sites-rockstargamesd54ea769accf6abc53a9fe6892d00ec3",
          driver: "rockstargames-sites-rockstargamese3ee70504a874203ed575eb6c2d53c6b",
          criticize: "rockstargames-sites-rockstargamesc7caf0bf3d0e016dd01146455020791e",
          footsteps: "rockstargames-sites-rockstargamesefd34659a5d9540e68f3a26db67a238c",
          begood: "rockstargames-sites-rockstargamesbe5d894aff9566cc3e48ec35d30098f7",
          wheelsofsteel: "rockstargames-sites-rockstargamesf4f27b9bddb1c6a74ac5d8f8002d2fdf",
          cantgetenough: "rockstargames-sites-rockstargamesb44b874e865dacac2d70385e5ed2dbe9",
          theweekend: "rockstargames-sites-rockstargamesadd852d190a421797c945110b3f6414e",
          acid: "rockstargames-sites-rockstargamesb64adb1a8a6305dd5056f3bc3ce8ca2c",
          elmalo: "rockstargames-sites-rockstargamescfacba437372d8cea5d5115625208fd4",
          ilikeit: "rockstargames-sites-rockstargamesc5178e4cadd35df860589ad3693b9847",
          migente: "rockstargames-sites-rockstargamesa690039a2d4653771385fdfb9acfb2ab",
          quimbara: "rockstargames-sites-rockstargamesfc6b7f85919fb39485ceb01da6835012",
          revolt: "rockstargames-sites-rockstargamese159095009958ab9e2bac01249607d94",
          credit: "rockstargames-sites-rockstargamesdb1580d7a4cecbbf72211cf8ffce89ca",
          additional: "rockstargames-sites-rockstargamesa0d4de92597ec0fb66cfc08a37ce554f",
          logo: "rockstargames-sites-rockstargamesc13987459881ff93489031b6438e8b3e",
          beat: "rockstargames-sites-rockstargamesf866be94c61633fbb070b541215ab178",
          "liberty-rock": "rockstargames-sites-rockstargamesdcec78bdf2af899b3c3a9e33e406d245",
          lchc: "rockstargames-sites-rockstargamesac82c4099ad92d7aa5e21a81d12a9825",
          "electro-choc": "rockstargames-sites-rockstargamese36c3a393b666cc783b6da0193941b51",
          "international-funk": "rockstargames-sites-rockstargamesf8816edff983c4c355d145eb5168dab9",
          vladivostok: "rockstargames-sites-rockstargamesee6cea3c69872da53ccc1bb8452f547c",
          vibe: "rockstargames-sites-rockstargamesd140a7bb5d71adce49ebba088ef90b1c",
          "tuff-gong": "rockstargames-sites-rockstargamesda7100a433c32b29a764548c0438ff8e",
          "san-juan": "rockstargames-sites-rockstargamesa03f6abaf495dad626d1c6203d59d3d4",
          "radio-broker": "rockstargames-sites-rockstargamesb2aa17a643b615fe152b5cf95dcd933d",
          "massive-b": "rockstargames-sites-rockstargamesa546560279ccd7024f6d0139de2e930b",
          k109: "rockstargames-sites-rockstargamese428b797ee6d106e6f5cafd5808c3a1e",
          journey: "rockstargames-sites-rockstargamesaa890f195c58ae8473b92d046379d68a",
          jnr: "rockstargames-sites-rockstargamescc35cdfae6e608e745ead0c657a71c17",
          interiors: "rockstargames-sites-rockstargamese973dd509394ab7f75be0e1333896c23",
          fusion: "rockstargames-sites-rockstargamesa0bb8d4b8f9379e6aaa963b955068656",
          classics: "rockstargames-sites-rockstargamesbb0bd1f794a6629ef7f263616ae448d3",
          "vice-city": "rockstargames-sites-rockstargamese36e9bc8f64a27c46ebaffba48737016",
          "self-actualization": "rockstargames-sites-rockstargamesf79a76b4508e55968345add724a9c53c",
          ramjam: "rockstargames-sites-rockstargamesac75e7c529e6822e3c321c2db0a93941",
          emotion: "rockstargames-sites-rockstargamesaafb2148f4cc12c97fee7c75352fc905",
          flash: "rockstargames-sites-rockstargamesd2adf88d548f3d85f426f5fce338f6ca",
          fresh: "rockstargames-sites-rockstargamesf692d050da8daca639b2bd00a2a5ad58",
          paradise: "rockstargames-sites-rockstargamese2ff9f40025bd5a3baa71f0f6aeb9ee1",
          espantoso: "rockstargames-sites-rockstargamesf5cde0476926d5717dbe5775d9d2f3c8",
          vcfl: "rockstargames-sites-rockstargamesd52d83e3218646aa702df200cda382c0",
          vrock: "rockstargames-sites-rockstargamesadb55f57e5d3fc124160809ab41ee130",
          wave: "rockstargames-sites-rockstargamesd4ab4de6125afb16136d7c34b8829cf2",
          warriorsCredit: "rockstargames-sites-rockstargamesc73dbe223b5a37cc86f32feeb506ca61"
        };
      var na = i(74976),
        ta = i.n(na);
      const sa = (0, V.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            data: i
          } = (0, _.useQuery)(ta(), {
            autoSetLoading: !0
          });
          if (!i) return null;
          const {
            manuals: n
          } = i;
          return (0, h.jsxs)("div", {
            className: ia.manuals,
            children: [(0, h.jsx)("h2", {
              children: a("Manuals")
            }), (0, h.jsx)("div", {
              className: ia.list,
              children: n.map((e => (0, h.jsxs)("div", {
                className: ia.item,
                children: [(0, h.jsx)("div", {
                  className: ia.img,
                  style: {
                    backgroundImage: `url(${e.game.fob_640})`
                  }
                }), (0, h.jsx)(k.Dropdown, {
                  title: e.game.title,
                  className: ia.dropdown,
                  children: e.manuals_platforms.map((e => (0, h.jsxs)("p", {
                    children: [(0, h.jsx)("span", {
                      children: e.platform
                    }), e.manuals_links.map((e => (0, h.jsx)("a", {
                      href: e.href,
                      target: "_blank",
                      rel: "noreferrer",
                      children: e.label
                    }, e.label)))]
                  }, e.platform)))
                })]
              }, e.id)))
            })]
          })
        })),
        la = e => {
          let {
            detail: a
          } = e;
          const {
            sanitize: i
          } = H();
          return (0, h.jsxs)("div", {
            className: ia.detail,
            children: [(0, h.jsx)("div", {
              dangerouslySetInnerHTML: {
                __html: i(a.content)
              }
            }), a.album_cover ? (0, h.jsx)("div", {
              className: [ia.album, ia[a.album_cover]].join(" ")
            }) : "", (0, h.jsx)(k.A, {
              to: "/",
              children: (0, h.jsx)("div", {
                className: ia.rockstar
              })
            })]
          })
        },
        da = (0, V.withTranslations)((e => {
          let {
            stations: a,
            gameId: i,
            t: n
          } = e;
          const {
            sanitize: t
          } = H();
          return (0, h.jsxs)(h.Fragment, {
            children: [(0, h.jsx)("h1", {
              children: n("Music Credits")
            }), a && 55 === a[0].game_id ? (0, h.jsxs)("div", {
              className: ia.warriorsCredit,
              children: [(0, h.jsx)("p", {
                children: "Score by Steve Donohoe and Neveroddoreven"
              }), (0, h.jsx)("p", {
                children: "Russell Simpson - Guitar"
              }), (0, h.jsx)("p", {
                children: "Jeff Scale - Bass"
              }), (0, h.jsx)("p", {
                children: "Brian Vella - Drums"
              }), (0, h.jsx)("p", {
                children: "Recorded at Metalworks Studios, Toronto"
              }), (0, h.jsx)("p", {
                children: "Engineered by Ian Bodzasi"
              })]
            }) : "", (0, h.jsx)("div", {
              className: [ia.list, a && 55 === a[0].game_id ? ia.warriors : ""].join(" "),
              children: a && a.map(((e, s) => (0, h.jsxs)("div", {
                className: ia.station,
                children: [55 !== e.game_id ? (0, h.jsx)("div", {
                  className: [ia.logo, ia[e.slug]].join(" ")
                }) : (0, h.jsx)("h3", {
                  children: e.title
                }), e.music_credits && e.music_credits.map((e => (0, h.jsxs)("div", {
                  className: ia.credit,
                  children: [(0, h.jsx)("h5", {
                    dangerouslySetInnerHTML: {
                      __html: t(e.title)
                    }
                  }), (0, h.jsx)("p", {
                    children: e.written_by
                  }), (0, h.jsx)("p", {
                    children: e.published_by
                  }), (0, h.jsx)("p", {
                    children: e.courtesy_of
                  }), e?.music_detail ? (0, h.jsx)("p", {
                    className: ia.additional,
                    children: (0, h.jsx)(k.A, {
                      to: `music?gameId=${i}&stationId=${a[s].id}&songId=${e.id}`,
                      children: n("Lyrics/Info")
                    })
                  }) : ""]
                }, e.title)))]
              }, e.id)))
            })]
          })
        }));
      var ra = i(73772),
        ca = i.n(ra);
      const oa = () => {
          const e = (0, V.useQueryParams)(),
            a = Number(e.get("gameId")),
            i = Number(e.get("songId")),
            n = Number(e.get("stationId"));
          let t = !1;
          const {
            data: s
          } = (0, _.useQuery)(ca(), {
            variables: {
              gameId: a
            },
            autoSetLoading: !0
          });
          if (!s) return null;
          const {
            musicStations: l
          } = s;
          return Object.keys(l).length, l.map((e => {
            e.id === n && e.music_credits.map((e => {
              e.id === i && (t = e.music_detail)
            }))
          })), (0, h.jsxs)("div", {
            className: [ia.music, 25 === a ? ia.gtaiv : 26 === a ? ia.tlad : 32 === a ? ia.bogt : 28 === a ? ia.eflc : 34 === a ? ia.vcs : ""].join(" "),
            children: [(0, h.jsx)("div", {
              className: [ia.gameLogo, 26 === a ? ia.tlad : 32 === a ? ia.bogt : 28 === a ? ia.eflc : 25 === a ? ia.gtaiv : 34 === a ? ia.vcs : 55 === a ? ia.warriors : ""].join(" ")
            }), a && l ? n && i && t ? (0, h.jsx)(la, {
              detail: t
            }) : (0, h.jsx)(da, {
              stations: l,
              gameId: a
            }) : null]
          })
        },
        ma = (0, V.withTranslations)((e => {
          let {
            t: a
          } = e;
          return (0, h.jsxs)("div", {
            className: "rockstargames-sites-rockstargamesabdecdd87f2cf4b8194c0091fdd0b4a0",
            children: [(0, h.jsx)("section", {
              className: "rockstargames-sites-rockstargamesd13bb1cebcd96c067a01aee27efccfed",
              children: (0, h.jsx)("h1", {
                children: "Contact Us"
              })
            }), (0, h.jsxs)("section", {
              className: "rockstargames-sites-rockstargamesb58b960fc23a48600bdbc8a2777aa5f3",
              children: [(0, h.jsx)("p", {
                children: a("contact.intro")
              }), (0, h.jsxs)("p", {
                children: [(0, h.jsx)("span", {
                  children: a("contact.gtao-feedback")
                }), (0, h.jsx)("br", {}), (0, h.jsx)(k.A, {
                  to: "https://www.rockstargames.com/GTAOnline/feedback",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press GTAOnline Feedback",
                  children: "https://www.rockstargames.com/GTAOnline/feedback"
                })]
              }), (0, h.jsxs)("p", {
                children: [(0, h.jsx)("span", {
                  children: a("contact.rdo-feedback")
                }), (0, h.jsx)("br", {}), (0, h.jsx)(k.A, {
                  to: "https://www.rockstargames.com/reddeadonline/feedback",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press RDO Feedback",
                  children: "https://www.rockstargames.com/reddeadonline/feedback"
                })]
              }), (0, h.jsxs)("p", {
                children: [(0, h.jsx)("span", {
                  children: a("contact.technical")
                }), (0, h.jsx)("br", {}), (0, h.jsx)(k.A, {
                  to: "https://support.rockstargames.com/",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Support",
                  children: "https://support.rockstargames.com/"
                })]
              }), (0, h.jsxs)("p", {
                children: [(0, h.jsx)("span", {
                  children: a("contact.career")
                }), (0, h.jsx)("br", {}), (0, h.jsx)(k.A, {
                  to: "https://www.rockstargames.com/careers/",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Careers",
                  children: "https://www.rockstargames.com/careers/"
                })]
              }), (0, h.jsxs)("p", {
                children: [(0, h.jsx)("span", {
                  children: a("contact.copyright")
                }), (0, h.jsx)("br", {}), (0, h.jsx)(k.A, {
                  to: "https://support.rockstargames.com/articles/200153756/Policy-on-posting-copyrighted-Rockstar-Games-material",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Copyright Policy",
                  children: "https://support.rockstargames.com/articles/200153756/Policy-on-posting-copyrighted-Rockstar-Games-material"
                })]
              }), (0, h.jsxs)("p", {
                children: [(0, h.jsx)("span", {
                  children: a("contact.legal")
                }), (0, h.jsx)("br", {}), (0, h.jsx)(k.A, {
                  to: "mailto:Copyright@take2games.com",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Copyright Email",
                  children: "Copyright@take2games.com"
                })]
              }), (0, h.jsxs)("p", {
                children: [(0, h.jsx)("span", {
                  children: a("contact.latest")
                }), (0, h.jsx)("br", {}), (0, h.jsx)(k.A, {
                  to: "https://www.rockstargames.com/",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Rockstar Games Site",
                  children: "https://www.rockstargames.com/"
                }), (0, h.jsx)("br", {}), (0, h.jsx)(k.A, {
                  to: "https://twitter.com/RockstarGames",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Twitter Site",
                  children: "https://twitter.com/RockstarGames"
                }), (0, h.jsx)("br", {}), (0, h.jsx)(k.A, {
                  to: "https://www.instagram.com/rockstargames/",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Instagram Site",
                  children: "https://www.instagram.com/rockstargames/"
                }), (0, h.jsx)("br", {}), (0, h.jsx)(k.A, {
                  to: "https://www.facebook.com/rockstargames",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Facebook Site",
                  children: "https://www.facebook.com/rockstargames"
                }), (0, h.jsx)("br", {}), (0, h.jsx)(k.A, {
                  to: "https://www.youtube.com/user/RockstarGames",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Youtube Site",
                  children: "https://www.youtube.com/user/RockstarGames"
                })]
              }), (0, h.jsx)("br", {})]
            })]
          })
        })),
        ua = {
          maint: "rockstargames-sites-rockstargamesee5e5a68eb125090583fe5d4f8ce03df",
          content: "rockstargames-sites-rockstargamesf5aef392e680073f8fed78567c8dbb4e",
          logo: "rockstargames-sites-rockstargamesda2fe3ab2392b09ff23958abdf602eb4"
        },
        ka = () => (0, h.jsx)("div", {
          className: ua.maint,
          children: (0, h.jsxs)("div", {
            className: ua.content,
            children: [(0, h.jsx)("div", {
              className: ua.logo
            }), (0, h.jsx)("p", {
              children: "The Rockstar Games Social Club is currently undergoing maintenance. Please check back soon."
            }), (0, h.jsx)("a", {
              className: ua.support,
              href: "https://support.rockstargames.com/",
              children: "https://support.rockstargames.com/"
            })]
          })
        }),
        ga = () => (0, h.jsxs)("div", {
          className: "rockstargames-sites-rockstargamesc4061150feb48d282a2363b7cbed6ac5",
          children: [(0, h.jsx)("div", {
            className: "rockstargames-sites-rockstargamesa026b866e5e33e40478c738b8a6714fd"
          }), (0, h.jsx)("h3", {
            children: "Standard Deviation is now a part of Rockstar Games."
          })]
        }),
        va = {
          jpwrapper: "rockstargames-sites-rockstargamesba6d4394dc71688a882bb545fc08beb4",
          body: "rockstargames-sites-rockstargamesdd0895660ec10bf279836cd110070640",
          responsiveImage: "rockstargames-sites-rockstargamesfb8048b514e49776135df91d47ef29db",
          link: "rockstargames-sites-rockstargamesac320620a02a8d3897d310cf288855ab",
          bodyPadding: "rockstargames-sites-rockstargamesd13a76b87f08d8fdbc47d45cd7450dd1",
          headline_3: "rockstargames-sites-rockstargamesa12bcaa8e0eec396547de0cae798278a",
          headline_2: "rockstargames-sites-rockstargamese2c90393cdf11f29befc2038de073e48",
          disclaimer: "rockstargames-sites-rockstargamesa88581f8d3bc749026f10eb47ec6aeb2"
        },
        fa = k.framer.withFadeIn((() => (0, h.jsxs)("div", {
          className: va.jpwrapper,
          children: [(0, h.jsx)(k.MultiSourceImage, {
            className: va.responsiveImage,
            image: {
              desktop: i(98508)
            }
          }), (0, h.jsxs)(k.Grid, {
            className: [va.body, va.inner, va.gap_sm].join(" "),
            children: [(0, h.jsx)("h1", {
              children: "GTAマネーを最大250万ドル獲得しよう"
            }), (0, h.jsxs)("p", {
              children: [(0, h.jsx)("a", {
                className: va.link,
                href: "https://www.rockstargames.com/jp/newswire/article/175k8294o31ooo/gta-online-san-andreas-mercenaries-now-available",
                children: "「GTAオンライン：サンアンドレアスの傭兵」"
              }), "のリリースを記念して、日本のプレイヤーだけが参加できる初めてのコミュニティチャレンジを開催します。"]
            }), (0, h.jsx)("p", {
              children: "今から9月7日までに密輸貨物の売却ミッションに参加して密輸貨物をさばき、合計GTAマネー3億ドルを売り上げ、GTAマネー50万ドルを解除しましょう。"
            }), (0, h.jsx)("p", {
              children: "密輸貨物を入手すると、格納庫内のパソコンからフリートレード運送のサイトを使って売却ミッションを開始できるようになります。"
            }), (0, h.jsx)(k.MultiSourceImage, {
              image: {
                desktop: i(20372)
              }
            }), (0, h.jsx)("h1", {
              children: "お気に入りのクリエイターを応援しよう"
            }), (0, h.jsx)("p", {
              children: "YouTubeとTwitchで活躍する日本のトップクリエイターたちが、8月31日から9月3日まで4日間のライブストリーミングイベントに参加します。 クリエイターには毎日チャレンジが課せられ、成功すれば日本のプレイヤー全員に追加でGTAマネー200万ドルが贈られます。"
            }), (0, h.jsx)(k.MultiSourceImage, {
              className: va.bodyPadding,
              image: {
                desktop: i(71452)
              }
            }), (0, h.jsx)("p", {
              children: "各チームは最近追加されたキャリア進行状況メニューを使って自分たちの成績を記録し、 条件に到達すれば下記のボーナスGTAマネーが日本のプレイヤー全員に贈られます。"
            }), (0, h.jsx)(k.MultiSourceImage, {
              className: va.bodyPadding,
              image: {
                desktop: i(82004)
              }
            }), (0, h.jsxs)("p", {
              children: ["さらなる詳細は、", (0, h.jsx)("a", {
                href: "https://www.twitch.tv/dasoku_aniki",
                className: va.link,
                children: "Twitch"
              }), "で8月31日午後6時(日本時間)にイベントMCの蛇足の配信を視聴してください。"]
            }), (0, h.jsx)("p", {
              className: va.disclaimer,
              children: "チャレンジは2023年9月7日午後6時(日本時間)に終了します。日本にお住いのプレイヤーに限ります。 Social Clubアカウント1つにつき最大でGTAマネー250万ドルが贈られます。コミュニティ報酬はチャレンジ参加者限定です。 コミュニティの目標に到達した場合、報酬はゲーム内で受け取る必要があります。コンソールでオンラインをプレイするには別に有料のサブスクリプションが必要です。 規約が適用されます。可能な限り、イベント終了後72時間以内にプレイヤーのアカウントに贈られます。"
            }), (0, h.jsx)(k.Rating, {
              condensed: !0,
              titleSlug: "GTAOnline"
            })]
          })]
        }))),
        ba = {
          "gta-tv": (0, d.lazy)((() => i.e(572).then(i.t.bind(i, 49952, 23)))),
          "modules-core-gif-viewer": (0, d.lazy)((() => i.e(690).then(i.t.bind(i, 53690, 23)))),
          "modules-core-videoplayer": (0, d.lazy)((() => Promise.resolve().then(i.t.bind(i, 84644, 23)))),
          "rockstar-tv": (0, d.lazy)((() => i.e(868).then(i.t.bind(i, 86868, 23)))),
          "screenshot-viewer": (0, d.lazy)((() => i.e(484).then(i.t.bind(i, 55484, 23)))),
          "sites-careers": (0, d.lazy)((() => i.e(396).then(i.t.bind(i, 7396, 23)))),
          "sites-gta": (0, d.lazy)((() => i.e(832).then(i.t.bind(i, 8832, 23)))),
          "sites-gta-gen9": (0, d.lazy)((() => i.e(620).then(i.t.bind(i, 71620, 23)))),
          "sites-gta-trilogy": (0, d.lazy)((() => i.e(708).then(i.t.bind(i, 21708, 23)))),
          "sites-red-dead-online": (0, d.lazy)((() => i.e(140).then(i.t.bind(i, 47140, 23)))),
          "sites-red-dead-redemption": (0, d.lazy)((() => i.e(190).then(i.t.bind(i, 82190, 23)))),
          "sites-red-dead-redemption-2": (0, d.lazy)((() => i.e(735).then(i.t.bind(i, 6735, 23))))
        },
        pa = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const i = ba[e],
            {
              setHeaderHidden: n
            } = (0, L.useRockstarLocalState)();
          return (0, h.jsx)(d.Suspense, {
            fallback: "",
            children: (0, h.jsx)(i, {
              setHeaderHidden: n,
              config: a
            })
          })
        },
        ha = (0, k.withSearchbarErrorBoundary)((() => {
          const e = [{
            element: (0, h.jsx)(q, {}),
            path: "/"
          }, {
            element: (0, h.jsx)(Je, {}),
            path: "/careers-privacy"
          }, {
            element: (0, h.jsx)(aa, {}),
            path: "/ccpa"
          }, {
            element: (0, h.jsx)(Ue, {}),
            path: "/community-guidelines"
          }, {
            element: (0, h.jsx)(Qe, {}),
            path: "/conduct"
          }, {
            element: (0, h.jsx)(ma, {}),
            path: "/contact"
          }, {
            element: (0, h.jsx)(ea, {}),
            path: "/cookies"
          }, {
            element: (0, h.jsx)(Ke, {}),
            path: "/corpinfo"
          }, {
            element: (0, h.jsx)(We, {}),
            path: "/eula"
          }, {
            element: (0, h.jsx)(Ne, {}),
            path: "/games"
          }, {
            element: (0, h.jsx)(De, {}),
            path: "/games/:gameTitlelug"
          }, {
            element: (0, h.jsx)(Ye, {}),
            path: "/legal"
          }, {
            element: (0, h.jsx)(C.Credits, {
              title: "v"
            }),
            path: "/gta-v/thankyou"
          }, {
            element: (0, h.jsx)(ga, {}),
            path: "/standarddeviation"
          }, {
            element: (0, h.jsx)(fa, {}),
            path: "/community_event"
          }, {
            element: pa("sites-red-dead-redemption-2"),
            path: "/reddeadredemption2/*"
          }, {
            element: pa("sites-red-dead-redemption"),
            path: "/reddeadredemption/*"
          }, {
            element: (0, h.jsx)(C.Credits, {
              title: "rdr2"
            }),
            path: "/reddeadonline/thankyou"
          }, {
            element: pa("sites-careers"),
            path: "/careers/*"
          }, {
            element: (0, h.jsx)(se, {}),
            path: "/downloads/*"
          }, {
            element: pa("sites-red-dead-online"),
            path: "/reddeadonline/*"
          }, {
            element: pa("modules-core-gif-viewer"),
            path: "/gifs/:hashId"
          }, {
            element: pa("sites-gta-gen9", {
              routeRoot: "/gta-v"
            }),
            path: "/gta-v/*"
          }, {
            element: pa("sites-gta-gen9", {
              routeRoot: "/gta-plus"
            }),
            path: "/gta-plus/*"
          }, {
            element: pa("sites-gta-gen9", {
              routeRoot: "/gta-online"
            }),
            path: "/gta-online/*"
          }, {
            element: pa("sites-gta-trilogy"),
            path: "/GTATrilogy/*"
          }, {
            element: pa("gta-tv"),
            path: "/gtatv/*"
          }, {
            element: (0, h.jsx)(sa, {}),
            path: "/manuals"
          }, {
            element: (0, h.jsx)(oa, {}),
            path: "/manuals/music"
          }, {
            element: (0, h.jsx)(le, {}),
            path: "/newswire"
          }, {
            element: (0, h.jsx)(ce, {}),
            path: "/newswire/article/:articleId/:articleSlug"
          }, {
            element: (0, h.jsx)(Xe, {}),
            path: "/old-privacy"
          }, {
            element: (0, h.jsx)(Xe, {}),
            path: "/privacy"
          }, {
            element: pa("rockstar-tv"),
            path: "/rockstartv/*"
          }, {
            element: pa("screenshot-viewer"),
            path: "/screenshot-viewer/*"
          }, {
            element: (0, h.jsx)(Be, {}),
            path: "/search"
          }, {
            element: (0, h.jsx)(ka, {}),
            path: "/socialclubmaintenance"
          }, {
            element: pa("modules-core-videoplayer"),
            path: "/videoplayer"
          }, {
            element: (0, h.jsx)(ke, {}),
            path: "/videos"
          }, {
            element: (0, h.jsx)(ve, {}),
            path: "/videos/:videoId"
          }, {
            element: pa("sites-gta"),
            path: "/VI"
          }, {
            element: (0, h.jsx)(k.Wasted, {
              error: {
                code: window?.env?.responseStatusCode ?? 398
              }
            }),
            path: "*"
          }];
          return (0, p.useRoutes)(e)
        })),
        Na = {
          main: "rockstargames-sites-rockstargamesf1aef688b1fb7db52825ffe602919893",
          gameSite: "rockstargames-sites-rockstargamesd94349e6082443747b43bfb1b3572894",
          "theme-std": "rockstargames-sites-rockstargamesc96f36a0f4271c94bc947959cc6f339d",
          headerHidden: "rockstargames-sites-rockstargamesd477842bf331a57b7775dad383937ca6",
          standalone: "rockstargames-sites-rockstargamesf25a9c90e12ca706e97edcb4d8824b69"
        },
        Sa = (0, n.withAutoRouteTracking)((() => {
          const {
            state: {
              headerHidden: e,
              standalone: a
            }
          } = (0, L.useRockstarLocalState)();
          return (0, d.useEffect)((() => {
            window.addEventListener("resize", (() => {
              document.body.height = window.innerHeight
            }))
          }), []), (0, h.jsx)("main", {
            role: "main",
            id: "main",
            className: [Na.main, a ? Na.standalone : "", e ? Na.headerHidden : ""].join(" "),
            children: (0, h.jsx)(ha, {})
          })
        })),
        wa = ((0, _.makeVar)({
          base: "",
          navOpen: !1
        }), document.location.pathname),
        xa = window.self !== window.top,
        ya = {
          search: "",
          navOpen: !1,
          navHidden: !1,
          gameSiteNavOpen: !1,
          normalLogo: !0,
          loading: !1,
          headerHidden: ([].find((e => wa.includes(e))) ?? []).length > 0 || xa,
          customFooter: (["gta-online/license-plates"].find((e => wa.includes(e))) ?? []).length > 0,
          standalone: (["/screenshot-viewer", "/videoplayer", "/gifs"].find((e => wa.includes(e))) ?? []).length > 0,
          error: {
            message: window?.errorFromServer?.message ?? null,
            code: window?.errorFromServer?.code ?? null
          },
          breadcrumb: {
            links: [],
            filter: ""
          }
        },
        ja = (0, _.makeVar)(ya),
        Fa = (0, _.makeVarNamespace)("rockstar-root"),
        _a = window?.env?.graphEnv ?? "prod";
      u();
      const Va = (() => {
          const e = window;
          if (e[m]?.history || u(), e[m]?.history) return e[m].history;
          throw new Error("Browser History has not been initialised")
        })(),
        Ta = () => {
          const {
            state: {
              standalone: e,
              customFooter: a
            }
          } = (0, V.useRockstarLocalState)(), [i] = (0, d.useContext)(x), [{
            iso: n
          }] = (0, A.getLocale)();
          return (0, h.jsx)(A.IntlProvider, {
            locales: D.intlMessages,
            lang: n,
            children: (0, h.jsx)(I.GtmProvider, {
              children: (0, h.jsxs)(k.ScrollTracker, {
                threshold: [25, 50, 75, 90, 100],
                children: [i, (0, h.jsx)(k.ScrollToTop, {}), (0, h.jsx)(Sa, {}), e || a ? "" : (0, h.jsx)(C.FooterNav, {})]
              })
            })
          })
        },
        Ia = () => (0, h.jsx)(y, {
          children: (0, h.jsx)(Ta, {})
        }),
        {
          pingBearer: Aa
        } = (0, V.getScConfigForOrigin)(),
        Da = (0, _.withReactiveState)((() => {
          const e = (0, _.useBase)(),
            {
              setLoading: a,
              setTitle: i,
              state: {
                headerHidden: n,
                standalone: t
              }
            } = (0, V.useRockstarLocalState)();
          return (0, d.useEffect)((() => {
            window.addEventListener("message", (e => {
              const n = e.data?.type ?? null;
              "graph.titleUpdate" === n && i(e.data.title), "graph.loadingUpdate" === n && a(e.data.loading)
            }))
          }), [a, i]), (0, h.jsx)(V.ResizeProvider, {
            children: (0, h.jsx)(T.ScrollProvider, {
              children: (0, h.jsxs)(I.RockstarUserProvider, {
                children: [!t && !n && (0, h.jsx)(E(), {
                  baseName: e
                }), (0, h.jsx)(c(), {
                  history: Va,
                  basename: e,
                  children: (0, h.jsx)(Ia, {})
                })]
              })
            })
          })
        }), {
          state: ja
        }),
        $a = (0, _.withRockstarGraph)(Da, {
          env: _a,
          token: Fa("token", null),
          tokenPing: Fa("tokenPing", Aa),
          tokenPingExpires: Fa("tokenPingExpires", null),
          typePolicies: {
            ...F()
          }
        }),
        Ea = window?.env?.oneTrustId ?? null,
        Ca = window?.env?.gtmId ?? null;
      (0, n.init)({
        id: Ca
      }), s()({
        id: Ea,
        init: () => {
          const e = document.createElement("div");
          document.body.appendChild(e), (0, l.C)(e).render((0, h.jsx)($a, {}))
        }
      })
    },
    79036: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "CompanyInfo"
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
                value: "jsonLocale"
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
                value: "jsonType"
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
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "companyInfo"
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
                    value: "jsonType"
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
                    value: "jsonLocale"
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
                    value: "type"
                  },
                  arguments: [],
                  directives: []
                }, {
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
                    value: "content"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
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
            }]
          }
        }],
        loc: {
          start: 0,
          end: 308
        }
      };

      function i(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          i(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          i(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          i(e, a)
        }))
      }
      a.loc.source = {
        body: 'query CompanyInfo(\n    $locale: String!\n    $jsonLocale: String!\n    $jsonType: String!\n    $metaUrl: String\n) {\n    companyInfo(type: $jsonType, locale: $jsonLocale) {\n        type\n        locale\n        content\n    }\n    meta: metaUrl(url: $metaUrl, domain: "www", locale: $locale) {\n        title\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function t(e, a) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == a) return n
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          i(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.CompanyInfo = function(e, a) {
        var i = {
          kind: e.kind,
          definitions: [t(e, a)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var s = n[a] || new Set,
          l = new Set,
          d = new Set;
        for (s.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var r = d;
          d = new Set, r.forEach((function(e) {
            l.has(e) || (l.add(e), (n[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return l.forEach((function(a) {
          var n = t(e, a);
          n && i.definitions.push(n)
        })), i
      }(a, "CompanyInfo")
    },
    50060: (e, a, i) => {
      var n = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "Home"
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
                  kind: "StringValue",
                  value: "/",
                  block: !1
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
                value: "games"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "limit"
                },
                value: {
                  kind: "IntValue",
                  value: "4"
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
                        value: "title_slug"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "site_in_rockstar"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "fob_640"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
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
                  value: "limit"
                },
                value: {
                  kind: "IntValue",
                  value: "6"
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
            }, {
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
                  kind: "IntValue",
                  value: "4"
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "finder"
                },
                value: {
                  kind: "StringValue",
                  value: "featured",
                  block: !1
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
                      kind: "FragmentSpread",
                      name: {
                        kind: "Name",
                        value: "videoFields"
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
          end: 675
        }
      };
      n.loc.source = {
        body: '#import "@rockstargames/graph-client/operations/fragments/newswire-post.graphql"\n#import "@rockstargames/graph-client/operations/fragments/video-fields.graphql"\n\nquery Home($locale: String!) {\n    meta: metaUrl(url: "/", domain: "www", locale: $locale) {\n        title\n    }\n    games(limit: 4, locale: $locale) {\n        results {\n            id\n            title\n            title_slug\n            site_in_rockstar\n            fob_640\n        }\n    }\n    posts(limit: 6, locale: $locale) {\n        results {\n            ...postFields\n        }\n    }\n    videos(locale: $locale, limit: 4, finder: "featured") {\n        results {\n            ...videoFields\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function s(e) {
        return e.filter((function(e) {
          if ("FragmentDefinition" !== e.kind) return !0;
          var a = e.name.value;
          return !t[a] && (t[a] = !0, !0)
        }))
      }

      function l(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && a.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          l(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          l(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          l(e, a)
        }))
      }
      n.definitions = n.definitions.concat(s(i(73784).definitions)), n.definitions = n.definitions.concat(s(i(67308).definitions));
      var d = {};

      function r(e, a) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == a) return n
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          l(e, a), d[e.name.value] = a
        }
      })), e.exports = n, e.exports.Home = function(e, a) {
        var i = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var n = d[a] || new Set,
          t = new Set,
          s = new Set;
        for (n.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var l = s;
          s = new Set, l.forEach((function(e) {
            t.has(e) || (t.add(e), (d[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return t.forEach((function(a) {
          var n = r(e, a);
          n && i.definitions.push(n)
        })), i
      }(n, "Home")
    },
    79176: (e, a, i) => {
      var n = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "Search"
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
                value: "q"
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
                value: "withPosts"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withGames"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withVideos"
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
                  kind: "StringValue",
                  value: "/search/query",
                  block: !1
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
                value: "games"
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
                  value: "q"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "q"
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
                          value: "withGames"
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
                        value: "title_slug"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "site_in_rockstar"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "fob_640"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
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
                  value: "q"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "q"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "hideExpired"
                },
                value: {
                  kind: "BooleanValue",
                  value: !1
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
                          value: "withPosts"
                        }
                      }
                    }]
                  }],
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
            }, {
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
                  value: "q"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "q"
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
                          value: "withVideos"
                        }
                      }
                    }]
                  }],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "FragmentSpread",
                      name: {
                        kind: "Name",
                        value: "videoFields"
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
          end: 1130
        }
      };
      n.loc.source = {
        body: '#import "@rockstargames/graph-client/operations/fragments/newswire-post.graphql"\n#import "@rockstargames/graph-client/operations/fragments/video-fields.graphql"\n#import "@rockstargames/graph-client/operations/fragments/paging.graphql"\n\nquery Search(\n    $locale: String!\n    $q: String!\n    $page: Int!\n    $withPosts: Boolean!\n    $withGames: Boolean!\n    $withVideos: Boolean!\n) {\n    meta: metaUrl(locale: $locale, domain: "www", url: "/search/query") {\n        title\n    }\n    games(locale: $locale, page: $page, q: $q) {\n        paging {\n            ...paging\n        }\n        results @include(if: $withGames) {\n            id\n            title\n            title_slug\n            site_in_rockstar\n            fob_640\n        }\n    }\n    posts(locale: $locale, page: $page, q: $q, hideExpired: false) {\n        paging {\n            ...paging\n        }\n        results @include(if: $withPosts) {\n            ...postFields\n        }\n    }\n    videos(locale: $locale, page: $page, q: $q) {\n        paging {\n            ...paging\n        }\n        results @include(if: $withVideos) {\n            ...videoFields\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function s(e) {
        return e.filter((function(e) {
          if ("FragmentDefinition" !== e.kind) return !0;
          var a = e.name.value;
          return !t[a] && (t[a] = !0, !0)
        }))
      }

      function l(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && a.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          l(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          l(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          l(e, a)
        }))
      }
      n.definitions = n.definitions.concat(s(i(73784).definitions)), n.definitions = n.definitions.concat(s(i(67308).definitions)), n.definitions = n.definitions.concat(s(i(28540).definitions));
      var d = {};

      function r(e, a) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == a) return n
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          l(e, a), d[e.name.value] = a
        }
      })), e.exports = n, e.exports.Search = function(e, a) {
        var i = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var n = d[a] || new Set,
          t = new Set,
          s = new Set;
        for (n.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var l = s;
          s = new Set, l.forEach((function(e) {
            t.has(e) || (t.add(e), (d[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return t.forEach((function(a) {
          var n = r(e, a);
          n && i.definitions.push(n)
        })), i
      }(n, "Search")
    },
    55380: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "Downloads"
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
                value: "collectionId"
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
                value: "seriesId"
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
                value: "numGamesToGet"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int"
              }
            },
            defaultValue: {
              kind: "IntValue",
              value: "4"
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "numAppsToGet"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int"
              }
            },
            defaultValue: {
              kind: "IntValue",
              value: "4"
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withIndex"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withCollection"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withSeries"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withGames"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withDlcs"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withMusics"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withGroups"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withGoldbars"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withApps"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withPatches"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withSharkCards"
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
                value: "game"
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
                  value: "id"
                },
                value: {
                  kind: "IntValue",
                  value: "912"
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
                      value: "withIndex"
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
                    value: "description"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title_slug"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "fob_640"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "featured"
              },
              name: {
                kind: "Name",
                value: "featuredDownloads"
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
                      value: "withIndex"
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
                    value: "title_key"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "href"
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
              alias: {
                kind: "Name",
                value: "collections"
              },
              name: {
                kind: "Name",
                value: "downloadsCollections"
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
                  value: "numAppsToGet"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "numAppsToGet"
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
                      value: "withIndex"
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
                    value: "title_slug"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "preview"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "apps"
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
                        value: "platform"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "preview"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "gold_bars"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "platform"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "preview"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "series"
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
                          value: "withSeries"
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
                        value: "preview"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "musics"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "thumb"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "dlcs"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "thumb"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "shark_cards"
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
                        value: "preview"
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
                        value: "platform"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "desc"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "pc_mac_games"
              },
              name: {
                kind: "Name",
                value: "games"
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
                    value: "numGamesToGet"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "finder"
                },
                value: {
                  kind: "StringValue",
                  value: "pcAndDownloadable",
                  block: !1
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
                      value: "withGames"
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
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title_slug"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "fob_640"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "downloads_game"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "platform"
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
              alias: {
                kind: "Name",
                value: "collection"
              },
              name: {
                kind: "Name",
                value: "downloadsCollection"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "collectionId"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "collectionId"
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
                  value: "seriesId"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "seriesId"
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
                      value: "withCollection"
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
                    value: "title_slug"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "apps"
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
                          value: "withApps"
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
                        value: "id"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "platform"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "preview"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "gold_bars"
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
                          value: "withGoldbars"
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
                        value: "platform"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "preview"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "patches"
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
                          value: "withPatches"
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
                        value: "support_url"
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
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "fob_640"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "series"
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
                        value: "preview"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "musics"
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
                              value: "withMusics"
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
                            value: "thumb"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "dlcs"
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
                              value: "withDlcs"
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
                            value: "thumb"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "groups"
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
                              value: "withGroups"
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
                            value: "id"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "thumb"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "label"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "preview"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "platform"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "screensavers"
                          },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "label"
                              },
                              arguments: [],
                              directives: []
                            }, {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "src"
                              },
                              arguments: [],
                              directives: []
                            }]
                          }
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "avatars"
                          },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "label"
                              },
                              arguments: [],
                              directives: []
                            }, {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "src"
                              },
                              arguments: [],
                              directives: []
                            }]
                          }
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "wallpapers"
                          },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "label"
                              },
                              arguments: [],
                              directives: []
                            }, {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "src"
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
                    value: "shark_cards"
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
                          value: "withSharkCards"
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
                        value: "preview"
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
                        value: "platform"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "desc"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "__typename"
                  },
                  arguments: [],
                  directives: [{
                    kind: "Directive",
                    name: {
                      kind: "Name",
                      value: "skip"
                    },
                    arguments: [{
                      kind: "Argument",
                      name: {
                        kind: "Name",
                        value: "if"
                      },
                      value: {
                        kind: "BooleanValue",
                        value: !0
                      }
                    }]
                  }]
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 3400
        }
      };

      function i(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          i(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          i(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          i(e, a)
        }))
      }
      a.loc.source = {
        body: 'query Downloads(\n    $locale: String!\n    $collectionId: Int\n    $seriesId: Int\n    $numGamesToGet: Int = 4\n    $numAppsToGet: Int = 4\n    $withIndex: Boolean!\n    $withCollection: Boolean!\n    $withSeries: Boolean!\n    $withGames: Boolean!\n    $withDlcs: Boolean!\n    $withMusics: Boolean!\n    $withGroups: Boolean!\n    $withGoldbars: Boolean!\n    $withApps: Boolean!\n    $withPatches: Boolean!\n    $withSharkCards: Boolean!\n) {\n    game(locale: $locale, id: 912) @include(if: $withIndex) {\n        id\n        title\n        description\n        title_slug\n        fob_640\n    }\n    featured: featuredDownloads @include(if: $withIndex) {\n        title_key\n        href\n        name\n    }\n    collections: downloadsCollections(\n        locale: $locale\n        numAppsToGet: $numAppsToGet\n    ) @include(if: $withIndex) {\n        id\n        title\n        title_slug\n        preview\n        apps {\n            id\n            platform\n            preview\n        }\n        gold_bars {\n            platform\n            preview\n        }\n        series @include(if: $withSeries) {\n            id\n            title\n            preview\n            musics {\n                thumb\n            }\n            dlcs {\n                thumb\n            }\n        }\n        shark_cards {\n            id\n            preview\n            title\n            platform\n            desc\n        }\n    }\n    pc_mac_games: games(\n        locale: $locale\n        limit: $numGamesToGet\n        finder: "pcAndDownloadable"\n    ) @include(if: $withGames) {\n        results {\n            title\n            title_slug\n            fob_640\n            downloads_game {\n                platform\n            }\n        }\n    }\n    collection: downloadsCollection(\n        collectionId: $collectionId\n        locale: $locale\n        seriesId: $seriesId\n    ) @include(if: $withCollection) {\n        id\n        title\n        title_slug\n        apps @include(if: $withApps) {\n            id\n            platform\n            preview\n        }\n        gold_bars @include(if: $withGoldbars) {\n            platform\n            preview\n        }\n        patches @include(if: $withPatches) {\n            support_url\n            game {\n                title\n                fob_640\n            }\n        }\n        series {\n            id\n            title\n            preview\n            musics @include(if: $withMusics) {\n                thumb\n            }\n            dlcs @include(if: $withDlcs) {\n                thumb\n            }\n            groups @include(if: $withGroups) {\n                id\n                thumb\n                label\n                preview\n                platform\n                screensavers {\n                    label\n                    src\n                }\n                avatars {\n                    label\n                    src\n                }\n                wallpapers {\n                    label\n                    src\n                }\n            }\n        }\n        shark_cards @include(if: $withSharkCards) {\n            preview\n            title\n            platform\n            desc\n        }\n        ### This makes Apollo skip caching so you can go back/forth between series and collections\n        ### without worrying about the wrong thing showing up.\n        ###\n        ### https://kamranicus.com/posts/2018-03-06-graphql-apollo-object-caching\n        __typename @skip(if: true)\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function t(e, a) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == a) return n
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          i(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.Downloads = function(e, a) {
        var i = {
          kind: e.kind,
          definitions: [t(e, a)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var s = n[a] || new Set,
          l = new Set,
          d = new Set;
        for (s.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var r = d;
          d = new Set, r.forEach((function(e) {
            l.has(e) || (l.add(e), (n[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return l.forEach((function(a) {
          var n = t(e, a);
          n && i.definitions.push(n)
        })), i
      }(a, "Downloads")
    },
    5752: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "GamesIndex"
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
                  kind: "StringValue",
                  value: "/games",
                  block: !1
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
                value: "games"
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
                  kind: "IntValue",
                  value: "100"
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
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title_slug"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "site_in_rockstar"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "fob_640"
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
          end: 291
        }
      };

      function i(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          i(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          i(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          i(e, a)
        }))
      }
      a.loc.source = {
        body: 'query GamesIndex($locale: String!) {\n    meta: metaUrl(locale: $locale, domain: "www", url: "/games") {\n        title\n    }\n    games(locale: $locale, limit: 100) {\n        results {\n            title\n            title_slug\n            site_in_rockstar\n            fob_640\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function t(e, a) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == a) return n
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          i(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.GamesIndex = function(e, a) {
        var i = {
          kind: e.kind,
          definitions: [t(e, a)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var s = n[a] || new Set,
          l = new Set,
          d = new Set;
        for (s.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var r = d;
          d = new Set, r.forEach((function(e) {
            l.has(e) || (l.add(e), (n[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return l.forEach((function(a) {
          var n = t(e, a);
          n && i.definitions.push(n)
        })), i
      }(a, "GamesIndex")
    },
    66296: (e, a, i) => {
      var n = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "GameInfo"
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
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "game"
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
                  value: "titleSlug"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "titleSlug"
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
                    value: "title_slug"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "fob_1280"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "description"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "url_official"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "release_date_in_words"
                  },
                  arguments: [],
                  directives: []
                }, {
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
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "has_official_site"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "developers"
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
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "platforms"
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
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "digital_purchases"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "platform_name"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "platform_id"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "purchases"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "href"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "platform"
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
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "screens"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "file"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "tags"
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
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "videos"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "FragmentSpread",
                          name: {
                            kind: "Name",
                            value: "videoFields"
                          },
                          directives: []
                        }]
                      }
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "posts"
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
            }]
          }
        }],
        loc: {
          start: 0,
          end: 1043
        }
      };
      n.loc.source = {
        body: '#import "@rockstargames/graph-client/operations/fragments/newswire-post.graphql"\n#import "@rockstargames/graph-client/operations/fragments/video-fields.graphql"\n\nquery GameInfo($locale: String!, $titleSlug: String!) {\n    game(locale: $locale, titleSlug: $titleSlug) {\n        id\n        title\n        title_slug\n        fob_1280\n        description\n        url_official\n        release_date_in_words\n        img_rating\n        rating_descriptors\n        rating_footer\n        url_rating\n        has_official_site\n        developers {\n            title\n        }\n        platforms {\n            name\n        }\n        digital_purchases {\n            platform_name\n            platform_id\n        }\n        purchases {\n            href\n            platform {\n                name\n            }\n        }\n        screens {\n            file\n        }\n        tags {\n            id\n            name\n            videos {\n                ...videoFields\n            }\n            posts {\n                ...postFields\n            }\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function s(e) {
        return e.filter((function(e) {
          if ("FragmentDefinition" !== e.kind) return !0;
          var a = e.name.value;
          return !t[a] && (t[a] = !0, !0)
        }))
      }

      function l(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && a.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          l(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          l(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          l(e, a)
        }))
      }
      n.definitions = n.definitions.concat(s(i(73784).definitions)), n.definitions = n.definitions.concat(s(i(67308).definitions));
      var d = {};

      function r(e, a) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == a) return n
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          l(e, a), d[e.name.value] = a
        }
      })), e.exports = n, e.exports.GameInfo = function(e, a) {
        var i = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var n = d[a] || new Set,
          t = new Set,
          s = new Set;
        for (n.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var l = s;
          s = new Set, l.forEach((function(e) {
            t.has(e) || (t.add(e), (d[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return t.forEach((function(a) {
          var n = r(e, a);
          n && i.definitions.push(n)
        })), i
      }(n, "GameInfo")
    },
    74976: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "Manuals"
          },
          variableDefinitions: [{
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
              name: {
                kind: "Name",
                value: "manuals"
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
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "fob_640"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "manuals_platforms"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "platform"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "manuals_links"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "label"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "href"
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
          end: 280
        }
      };

      function i(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          i(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          i(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          i(e, a)
        }))
      }
      a.loc.source = {
        body: "query Manuals($cache: Boolean = true) {\n    manuals {\n        id\n        game {\n            title\n            fob_640\n        }\n        manuals_platforms {\n            platform\n            manuals_links {\n                label\n                href\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function t(e, a) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == a) return n
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          i(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.Manuals = function(e, a) {
        var i = {
          kind: e.kind,
          definitions: [t(e, a)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var s = n[a] || new Set,
          l = new Set,
          d = new Set;
        for (s.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var r = d;
          d = new Set, r.forEach((function(e) {
            l.has(e) || (l.add(e), (n[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return l.forEach((function(a) {
          var n = t(e, a);
          n && i.definitions.push(n)
        })), i
      }(a, "Manuals")
    },
    73772: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "MusicStations"
          },
          variableDefinitions: [{
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
                value: "gameId"
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
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "musicStations"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "gameId"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "gameId"
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
                    value: "slug"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "music_credits"
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
                        value: "written_by"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "published_by"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "courtesy_of"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "music_detail"
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
                            value: "content"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "album_cover"
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
          end: 395
        }
      };

      function i(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          i(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          i(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          i(e, a)
        }))
      }
      a.loc.source = {
        body: "query MusicStations($cache: Boolean = true, $gameId: Int!) {\n    musicStations(gameId: $gameId) {\n        id\n        title\n        slug\n        music_credits {\n            id\n            title\n            written_by\n            published_by\n            courtesy_of\n            music_detail {\n                id\n                content\n                album_cover\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function t(e, a) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == a) return n
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          i(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.MusicStations = function(e, a) {
        var i = {
          kind: e.kind,
          definitions: [t(e, a)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var s = n[a] || new Set,
          l = new Set,
          d = new Set;
        for (s.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var r = d;
          d = new Set, r.forEach((function(e) {
            l.has(e) || (l.add(e), (n[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return l.forEach((function(a) {
          var n = t(e, a);
          n && i.definitions.push(n)
        })), i
      }(a, "MusicStations")
    },
    98956: (e, a, i) => {
      var n = {
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
                value: "gameId"
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
                value: "index"
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
                  kind: "StringValue",
                  value: "/videos",
                  block: !1
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
              alias: {
                kind: "Name",
                value: "latest"
              },
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
                  kind: "IntValue",
                  value: "3"
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "finder"
                },
                value: {
                  kind: "StringValue",
                  value: "trailers",
                  block: !1
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
                      value: "index"
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
                        value: "videoFields"
                      },
                      directives: []
                    }]
                  }
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "gtaVI"
              },
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
                  value: "gameId"
                },
                value: {
                  kind: "IntValue",
                  value: "666"
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
                      value: "index"
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
                        value: "videoFields"
                      },
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "youtubeOnly"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      alias: {
                        kind: "Name",
                        value: "youtubeId"
                      },
                      name: {
                        kind: "Name",
                        value: "youtube_id"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "rdo"
              },
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
                  value: "tagId"
                },
                value: {
                  kind: "IntValue",
                  value: "736"
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
                      value: "index"
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
                        value: "videoFields"
                      },
                      directives: []
                    }]
                  }
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "gtao"
              },
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
                  value: "tagId"
                },
                value: {
                  kind: "IntValue",
                  value: "702"
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
                      value: "index"
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
                        value: "videoFields"
                      },
                      directives: []
                    }]
                  }
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "gtaosessions"
              },
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
                  value: "finder"
                },
                value: {
                  kind: "StringValue",
                  value: "grandTheftAutoOnlineSesssionsEpisodesVideos",
                  block: !1
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
                      value: "index"
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
                        value: "videoFields"
                      },
                      directives: []
                    }]
                  }
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "games"
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
                  value: "finder"
                },
                value: {
                  kind: "StringValue",
                  value: "hasVideos",
                  block: !1
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
                      value: "index"
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
                        value: "title_slug"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "fob_640"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "gameVideos"
              },
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
                  value: "gameId"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "gameId"
                  }
                }
              }],
              directives: [{
                kind: "Directive",
                name: {
                  kind: "Name",
                  value: "skip"
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
                      value: "index"
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
                        value: "videoFields"
                      },
                      directives: []
                    }]
                  }
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
                  value: "id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "gameId"
                  }
                }
              }],
              directives: [{
                kind: "Directive",
                name: {
                  kind: "Name",
                  value: "skip"
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
                      value: "index"
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
            }]
          }
        }],
        loc: {
          start: 0,
          end: 1429
        }
      };
      n.loc.source = {
        body: '#import "@rockstargames/graph-client/operations/fragments/video-fields.graphql"\n\nquery VideosList($gameId: Int, $locale: String!, $index: Boolean!) {\n    meta: metaUrl(locale: $locale, domain: "www", url: "/videos") {\n        title\n    }\n    latest: videos(locale: $locale, limit: 3, finder: "trailers")\n        @include(if: $index) {\n        results {\n            ...videoFields\n        }\n    }\n    gtaVI: videos(locale: $locale, gameId: 666) @include(if: $index) {\n        results {\n            ...videoFields\n            youtubeOnly\n            youtubeId: youtube_id\n        }\n    }\n    rdo: videos(locale: $locale, tagId: 736) @include(if: $index) {\n        results {\n            ...videoFields\n        }\n    }\n    gtao: videos(locale: $locale, tagId: 702) @include(if: $index) {\n        results {\n            ...videoFields\n        }\n    }\n    gtaosessions: videos(\n        locale: $locale\n        finder: "grandTheftAutoOnlineSesssionsEpisodesVideos"\n    ) @include(if: $index) {\n        results {\n            ...videoFields\n        }\n    }\n    games(locale: $locale, finder: "hasVideos") @include(if: $index) {\n        results {\n            id\n            title_slug\n            fob_640\n        }\n    }\n    gameVideos: videos(locale: $locale, gameId: $gameId) @skip(if: $index) {\n        results {\n            ...videoFields\n        }\n    }\n    game(locale: $locale, id: $gameId) @skip(if: $index) {\n        title\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function s(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && a.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          s(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          s(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          s(e, a)
        }))
      }
      n.definitions = n.definitions.concat(i(67308).definitions.filter((function(e) {
        if ("FragmentDefinition" !== e.kind) return !0;
        var a = e.name.value;
        return !t[a] && (t[a] = !0, !0)
      })));
      var l = {};

      function d(e, a) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == a) return n
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), l[e.name.value] = a
        }
      })), e.exports = n, e.exports.VideosList = function(e, a) {
        var i = {
          kind: e.kind,
          definitions: [d(e, a)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var n = l[a] || new Set,
          t = new Set,
          s = new Set;
        for (n.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var r = s;
          s = new Set, r.forEach((function(e) {
            t.has(e) || (t.add(e), (l[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return t.forEach((function(a) {
          var n = d(e, a);
          n && i.definitions.push(n)
        })), i
      }(n, "VideosList")
    },
    47520: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e510dbd6f1b8319e1889a077bce3119e.jpg"
    },
    20372: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1ed2a51b04e0bb000bcf1496dcd3f784.png"
    },
    98508: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ca34dd285d3d7a6cf9a329c73a274599.jpg"
    },
    71452: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/442e7c26891ff37ae957573626516d06.png"
    },
    82004: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8ae4db5a481080ebfd341e18dbfb2277.png"
    }
  }
]);