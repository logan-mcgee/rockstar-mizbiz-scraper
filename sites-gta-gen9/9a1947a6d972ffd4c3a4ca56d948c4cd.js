! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "11685993-c89a-463d-a3cc-b32d24d27051", e._sentryDebugIdIdentifier = "sentry-dbid-11685993-c89a-463d-a3cc-b32d24d27051")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "90b9af281bd1b5c2955354a97f6fab1985234888",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "90b9af281bd1b5c2955354a97f6fab1985234888"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [751], {
    5492: (e, n, a) => {
      "use strict";
      a.r(n), a.d(n, {
        default: () => K
      });
      var t = a(1664),
        i = a(4072),
        s = a(9696),
        o = a(1740),
        l = a(2836),
        d = a(7013);
      var r = a(5240);
      const c = e => {
          let {
            modal: n
          } = e;
          const {
            content: a,
            className: c,
            height: u,
            onClose: m,
            rect: f = {
              left: 0,
              top: 0
            },
            contentStyle: v = {},
            contentClassName: k = "",
            width: g,
            fadeIn: b = !0,
            cardIds: p,
            theme: h,
            title: y,
            gtm: N = {},
            aspectRatio: S = "default",
            cardDimensions: w
          } = n, {
            left: _,
            top: x
          } = f, [j, E] = (0, t.useState)(null), {
            track: F
          } = (0, l.useGtmTrack)(), T = null !== p && (p?.length || 0) > 1 && ("flag_bg" === h || "fob" === w?.size), [V, D] = (0, d.useSearchParams)(), [I, M] = (0, t.useState)(!1), [B, C] = (0, t.useState)(!1), $ = () => {
            const e = j - 1;
            E(e), C(e <= 0), M(e >= (p?.length || 0) - 1), F({
              event: "modal_previous",
              event_category: "modal",
              event_action: "previous",
              event_label: "",
              position: j
            })
          }, A = () => {
            const e = j + 1;
            E(e), C(e <= 0), M(e >= (p?.length || 0) - 1), F({
              event: "modal_next",
              event_category: "modal",
              event_action: "next",
              event_label: "",
              position: j
            })
          };
          (0, t.useEffect)((() => {
            null !== j && null !== p && j < p?.length && j > -1 && D({
              info: p[j]
            })
          }), [j, p]), (0, t.useEffect)((() => {
            if (null !== p && null === j && p?.length > 0) {
              const e = V.get("info");
              p?.forEach(((n, a) => {
                n === e && (E(a), C(a <= 0), M(a >= (p?.length || 0) - 1))
              }))
            }
          }), [p, j]);
          const [O] = (0, t.useState)({
            y: x,
            x: _,
            top: 0,
            left: 0,
            width: g,
            height: u,
            border: "0px solid transparent",
            background: "transparent",
            marginTop: T ? "0" : null
          }), P = {
            opacity: 1
          }, L = (0, t.useRef)(null), U = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, G = {
            ease: "easeIn",
            duration: .3,
            delay: .5
          }, [H] = (0, t.useState)({
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
              x: U,
              y: U,
              top: U,
              left: U,
              width: U,
              height: U,
              border: U,
              background: {
                delay: .3
              }
            }
          }), [q, Q] = (0, t.useState)({
            initial: O,
            shown: H
          });
          (0, t.useEffect)((() => {
            Q({
              initial: O,
              shown: H
            })
          }), [O, H]), (0, t.useEffect)((() => {
            const e = e => {
              "function" == typeof m && 27 === e.keyCode && (m(), F({
                event: "modal_close",
                event_action: "close",
                event_category: "modal",
                event_label: y ?? void 0,
                ...N
              }))
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []);
          const R = () => {
              "function" == typeof m && (m(), F({
                event: "modal_close",
                event_action: "close",
                event_category: "modal",
                event_label: y ?? void 0,
                ...N
              }))
            },
            W = b ? 0 : 1,
            K = (0, r.jsx)(s.motion.button, {
              className: "rockstargames-sites-gta-gen9b0326cc98df99ada0e0f6821f0f0a6ad",
              "aria-label": "Close",
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: G,
              onClick: () => {
                R()
              }
            });
          return (0, t.useMemo)((() => (0, r.jsx)("div", {
            className: "rockstargames-sites-gta-gen9e9a8e066d320a81b61aa2c636fa0a5b5",
            "data-show-nav": T,
            "data-aspect-ratio": S,
            children: (0, r.jsxs)(i.cp, {
              children: [(0, r.jsx)(s.motion.div, {
                className: "rockstargames-sites-gta-gen9c8632c630878ad16e637fe2b8db2f02c",
                initial: {
                  opacity: 0
                },
                animate: P,
                transition: U,
                onClick: () => R()
              }), T && (0, r.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9eeecb8dc782f382fc9d32d03ecc1a2a5",
                children: [(0, r.jsxs)(s.motion.div, {
                  className: "rockstargames-sites-gta-gen9b6e3406cb9a52fc7583d5c74681e88bc",
                  initial: {
                    opacity: 0
                  },
                  animate: {
                    opacity: 1
                  },
                  transition: G,
                  children: [(0, r.jsx)("button", {
                    type: "button",
                    "aria-label": "Previous",
                    onClick: $,
                    disabled: B
                  }), (0, r.jsxs)("div", {
                    className: "rockstargames-sites-gta-gen9ff3c13d9dc1de9af609a1f99b4c47039",
                    children: [" ", j + 1, (0, r.jsx)("div", {
                      className: "rockstargames-sites-gta-gen9cd9c6033ad00894881fa5451acfe15da"
                    }), p?.length, " "]
                  }), (0, r.jsx)("button", {
                    type: "button",
                    "aria-label": "Next",
                    onClick: A,
                    disabled: I
                  })]
                }), K]
              }), (0, r.jsx)(s.motion.div, {
                className: "rockstargames-sites-gta-gen9fab99cc2e2ca2e2a2158f9d41e764558",
                ref: L,
                initial: "initial",
                animate: "shown",
                variants: q,
                transition: U,
                style: v,
                children: (0, r.jsxs)(s.motion.div, {
                  className: (0, o.classList)("rockstargames-sites-gta-gen9b6aa5ebf680af5d95d0e9c76ac36ed82", c),
                  children: [!T && K, (0, r.jsx)(s.motion.div, {
                    className: (0, o.classList)("rockstargames-sites-gta-gen9d901631c0b9d817396c8352c027a2a0d", k),
                    initial: {
                      opacity: W
                    },
                    animate: {
                      opacity: 1
                    },
                    transition: G,
                    children: a
                  }), (0, r.jsx)("button", {
                    className: "rockstargames-sites-gta-gen9f1ecf74036b2b7fdfda3613619af40cf",
                    type: "button",
                    "aria-label": "End of modal"
                  })]
                })
              })]
            })
          })), [a, j, v])
        },
        u = "modal-context",
        m = [null, () => null],
        f = window?.[u] ?? (window[u] = (0, t.createContext)(m)),
        v = e => {
          let {
            children: n
          } = e;
          const [a, i] = (0, t.useState)(m), s = (0, t.useMemo)((() => a?.content ? (0, r.jsx)(c, {
            modal: a
          }) : null), [a]);
          return (0, r.jsx)(f.Provider, {
            value: [s, i],
            children: n
          })
        };
      var k = a(5416),
        g = a(9860),
        b = a(5792);
      const p = {
          pillBtn: "rockstargames-sites-gta-gen9de6a134c9245d58a11473eb55bd5acb1",
          selected: "rockstargames-sites-gta-gen9a78625dd99b3b7e1f813f9edd11b5d55",
          mobileNav: "rockstargames-sites-gta-gen9d84f65970dcf088120c73ce75722e823",
          mobileNavOpen: "rockstargames-sites-gta-gen9f9ca04b26905897a1bd181dedf274082",
          activeLink: "rockstargames-sites-gta-gen9fdeda17c572603d3f44074da466a065a"
        },
        h = (0, b.withTranslations)((e => {
          let {
            t: n
          } = e;
          const a = (0, k.WS)(),
            {
              track: i
            } = (0, l.useGtmTrack)(),
            {
              state: {
                headerHeight: s,
                mobileNavOpen: o
              },
              setMobileNavOpen: d
            } = (0, k.KM)();
          return (0, t.useEffect)((() => {
            const e = e => {
              let {
                keyCode: n
              } = e;
              27 === n && d(!1)
            };
            return document.addEventListener("keydown", e, !1), () => {
              document.removeEventListener("keydown", e, !1)
            }
          }), []), (0, r.jsx)("nav", {
            className: [p.mobileNav, o ? p.mobileNavOpen : ""].join(" "),
            style: {
              "--header-height": `${s}px`
            },
            children: a.map((e => {
              let {
                activeExact: a,
                title: t,
                to: s
              } = e;
              return (0, r.jsx)(g.A, {
                end: a,
                to: s,
                target: s.startsWith("http") ? "_blank" : "_self",
                className: e => {
                  let {
                    isActive: n
                  } = e;
                  return n ? p.activeLink : null
                },
                onClick: () => function() {
                  let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                  i({
                    event: "nav_click",
                    event_category: "nav",
                    event_action: "click",
                    event_label: (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toLowerCase(),
                    link_url: e
                  })
                }(n(t), s),
                children: n(t)
              }, s)
            }))
          })
        }));
      var y = a(1960),
        N = a(3052),
        S = a(3300),
        w = a(7276),
        _ = a(880),
        x = a(8800);
      const j = {
          BuyNow: S.c,
          TinaWrapper: w.c
        },
        E = () => {
          const {
            setBodyIsScrollable: e
          } = (0, b.useBodyScrollable)(), {
            track: n
          } = (0, l.useGtmTrack)(), [a, i] = (0, y.useSearchParams)(), {
            data: s
          } = (0, N.useQuery)(x.BuyNowQ, {
            variables: {
              ids: ["6a84"]
            }
          }), [d, c] = (0, t.useContext)(f);
          return (0, t.useEffect)((() => {
            e(!d)
          }), [d]), (0, t.useEffect)((() => {
            const e = "order" !== a.get("info") && "trailer" !== a.get("info") && (t = a.get("videoId"), /^\d+$/.test(t));
            var t;
            if (a.get("info") || a.get("videoId")) {
              if (e) {
                const e = (0, r.jsx)(_.c, {
                    id: a.get("videoId")
                  }),
                  t = {
                    left: window.innerWidth / 2,
                    top: window.innerHeight / 2
                  };
                c({
                  content: e,
                  rect: t,
                  contentStyle: {
                    overflow: "hidden"
                  },
                  onClose: () => {
                    i({}), n({
                      event_action: "close",
                      event_category: "modal",
                      event: "modal_close",
                      event_label: a.get("videoId")
                    })
                  }
                }), n({
                  event: "trackPageview",
                  card_id: a.get("videoId"),
                  card_name: "video"
                })
              }
            } else c(null)
          }), [a]), (0, t.useEffect)((() => {
            if ("order" !== a.get("info") || !s) return;
            const e = s?.tinaModulesInfo?.[0].tina,
              t = (0, r.jsx)(o.TinaParser, {
                components: {
                  gen9: j
                },
                tina: e
              }),
              l = {
                left: window.innerWidth / 2,
                top: window.innerHeight / 2
              };
            c({
              content: t,
              contentStyle: {
                "--modal-content-max-width": "100%",
                "--modal-content-padding": "calc(var(--modal-padding) + var(--padding-md)) var(--padding-lg) var(--padding-lg)"
              },
              rect: l,
              onClose: () => {
                i({}), n({
                  event_action: "close",
                  event_category: "modal",
                  event: "modal_close",
                  event_label: "buy now"
                })
              }
            }), n({
              event: "trackPageview",
              card_id: "order",
              card_name: "order"
            })
          }), [s, a.get("info")]), (0, t.useEffect)((() => {
            if ("trailer" !== a.get("info")) return;
            const e = (0, r.jsx)(_.c, {
                id: 12258
              }),
              t = {
                left: window.innerWidth / 2,
                top: window.innerHeight / 2
              };
            c({
              content: e,
              rect: t,
              contentStyle: {
                overflow: "hidden"
              },
              onClose: () => {
                i({}), n({
                  event_action: "close",
                  event_category: "modal",
                  event: "modal_close",
                  event_label: "trailer"
                })
              }
            }), n({
              event: "trackPageview",
              card_id: "trailer",
              card_name: "trailer"
            })
          }), [a.get("info")]), d
        };
      var F = a(6924),
        T = a.n(F),
        V = a(9572),
        D = a.n(V),
        I = a(5820);
      const M = () => {
        const {
          setBrand: e
        } = (0, k.KM)();
        return (0, t.useEffect)((() => {
          e("gtao")
        }), []), (0, r.jsx)("span", {
          className: "rockstargames-sites-gta-gen9f070763a1255e4312a53341b5fd10fbc",
          children: (0, r.jsx)(D(), {
            query: I.FeedbackSteps,
            mutation: I.SubmitFeedback,
            type: "gtao"
          })
        })
      };
      var B = a(4552),
        C = a(3660),
        $ = a.n(C);
      const A = {
          pillBtn: "rockstargames-sites-gta-gen9aeebc224bd5adfd96a98f9736ee33079",
          selected: "rockstargames-sites-gta-gen9edbd3978d17b9c2b7bc65ff7a5ebdb5b",
          guideNavMobile: "rockstargames-sites-gta-gen9dc8c1ccf7688e80181a16b7b473a312b",
          guideNavMobileContent: "rockstargames-sites-gta-gen9e3de050ace77d95d7776b954bee219bd",
          sections: "rockstargames-sites-gta-gen9b5aebbbb5f6341a92b3202462cfb9f6f",
          activeSection: "rockstargames-sites-gta-gen9f30de8480b4801fa119e54ae7141ee0c",
          sectionsOpen: "rockstargames-sites-gta-gen9ffd5c0107796ecaf1116e380395f148e"
        },
        O = e => {
          let {
            currentId: n
          } = e;
          const {
            track: a
          } = (0, l.useGtmTrack)(), i = (0, k.ye)(), [s, o] = (0, t.useState)(!1), [d, c] = (0, t.useState)(null), [u, m] = (0, t.useState)(null), [f] = (0, y.useSearchParams)();
          if ((0, t.useEffect)((() => {
              $().cloneDeepWith(i, ((e, a, t) => {
                n === e && c(t?.children ?? null)
              }))
            }), [n, i, f.get("section")]), (0, t.useEffect)((() => {
              m(null), $().cloneDeepWith(d, ((e, n, a) => {
                "id_hash" === n && f.get("section") === e && m(a)
              }))
            }), [d, f.get("section")]), !d) return null;
          const v = () => {
            o(!1), a({
              event: "nav_click",
              event_category: "nav",
              event_action: "click"
            })
          };
          return (0, r.jsx)("div", {
            className: A.guideNavMobile,
            children: (0, r.jsxs)("div", {
              className: A.guideNavMobileContent,
              children: [(0, r.jsx)("div", {
                className: [A.sections, s ? A.sectionsOpen : ""].join(" "),
                children: d.map((e => {
                  let {
                    id_hash: n,
                    title: a,
                    to: t
                  } = e;
                  return (0, r.jsx)(g.A, {
                    className: n === u?.id_hash ? A.activeSection : "",
                    to: t,
                    onClick: v,
                    children: a
                  }, t)
                }))
              }), (0, r.jsx)("button", {
                type: "button",
                onClick: () => o(!s),
                children: "Jump To"
              })]
            })
          })
        };
      var P = a(3276);
      const L = (0, g.withSimpleErrorBoundary)((() => {
        const {
          setBrand: e
        } = (0, k.KM)();
        (0, t.useEffect)((() => {
          e("gtao")
        }), []);
        const {
          guideId: n
        } = (0, y.useParams)(), a = (0, g.useTinaModuleFetchByIds)({
          ids: [n],
          setTitleDataPath: "tinaModulesInfo[0].title_doc"
        })?.[0] ?? {};
        return (0, t.useMemo)((() => {
          if (!a) return null;
          const {
            tina: e,
            type: t
          } = a;
          if (t && "gen9-guide" !== t) throw Error("Invalid type, a guide is needed.");
          return (0, r.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9eaeb117af03214aa0f78fd85d4028bb7",
            children: [(0, r.jsx)(B.c, {
              currentId: n
            }), e ? (0, r.jsx)(o.TinaParser, {
              components: P.componentsForTinaParserGuide,
              tina: e
            }) : "", (0, r.jsx)(O, {
              currentId: n
            })]
          })
        }), [JSON.stringify(a)])
      }));
      var U = a(6372);
      const G = (0, g.withSimpleErrorBoundary)((e => {
          let {
            componentsForTinaParser: n,
            root: a,
            url: i
          } = e;
          const {
            data: s
          } = (0, N.useQuery)(U.MetaUrlInfo, {
            variables: {
              url: i
            },
            setTitleDataPath: "metaUrlInfo.title"
          }), {
            setBrand: l
          } = (0, k.KM)(), [d, c] = (0, t.useState)(null);
          return (0, t.useEffect)((() => {
            const e = s?.metaUrlInfo?.tina ?? null,
              n = e?.payload?.meta?.brand ?? null;
            n && l(n), e && c(e)
          }), [s]), d ? (0, r.jsx)("div", {
            "data-root": a,
            className: "rockstargames-sites-gta-gen9f7e42e7491093e80b413a2892ed61ffe",
            children: (0, r.jsx)(o.TinaParser, {
              components: n,
              tina: d
            })
          }) : null
        })),
        H = ["/gta-v", "/gta-online", "/gta-online/guides", "/gta-online/prime-plus-offer", "/gta-plus", "/gta-plus/legal", "/gta-online/license-plates", "/gta-online/heists/lsdw", "/gta-online/heists/cayo-perico-heist", "/gta-online/heists/diamond-casino-heist", "/gta-online/heists/doomsday-heist", "/gta-online/heists/original-heists", "/gta-online/businesses/drug-wars", "/gta-online/businesses/the-contract", "/gta-online/businesses/after-hours", "/gta-online/businesses/smugglers-run", "/gta-online/businesses/gunrunning", "/gta-online/businesses/bikers", "/gta-online/businesses/finance-and-felony", "/gta-online/businesses/import-export", "/gta-online/businesses/chop-shop", "/gta-online/recreation/los-santos-tuners", "/gta-online/recreation/diamond-casino-resort", "/gta-online/contact-missions/operation-paper-trail", "/gta-online/contact-missions/san-andreas-mercenaries", "/gta-online/contact-missions/superyacht-life", "/gta-online/contact-missions/last-play", "/gta-online/contact-missions/premium-deluxe-repo", "/gta-online/contact-missions/dispatch-services", "/gta-online/contact-missions/lowriders", "/gta-online/contact-missions/dlc-1-2023", "/gta-online/contact-missions/cluckin-bell-farm-raid", "/gta-online/series-modes/arena-war", "/gta-online/series-modes/survivals", "/gta-online/series-modes/racing", "/gta-online/series-modes/adversary-modes", "/gta-online/series-modes/deathmatches", "/gta-online/special-interests/vehicles-enthusiast", "/gta-online/special-interests/weapons-expert"],
        q = e => {
          let {
            root: n
          } = e;
          const {
            pathname: a
          } = (0, y.useLocation)();
          return (0, t.useMemo)((() => {
            const e = a.replace(/\/$/, "");
            return H.includes(e) ? (0, r.jsx)(G, {
              componentsForTinaParser: P.componentsForTinaParser,
              root: n,
              url: e
            }) : null
          }), [a])
        },
        Q = (0, g.withSearchbarErrorBoundary)((e => {
          let {
            routeRoot: n
          } = e;
          const a = [{
            path: "/",
            element: (0, r.jsx)(q, {
              root: n
            })
          }, {
            path: "/feedback",
            element: (0, r.jsx)(M, {})
          }, {
            path: "/guides",
            element: (0, r.jsx)(q, {
              root: n
            })
          }, {
            path: "/guides/:guideId",
            element: (0, r.jsx)(L, {})
          }, {
            path: "/heists/:section",
            element: (0, r.jsx)(q, {
              root: n
            })
          }, {
            path: "/businesses/:section",
            element: (0, r.jsx)(q, {
              root: n
            })
          }, {
            path: "/recreation/:section",
            element: (0, r.jsx)(q, {
              root: n
            })
          }, {
            path: "/contact-missions/:section",
            element: (0, r.jsx)(q, {
              root: n
            })
          }, {
            path: "/series-modes/:section",
            element: (0, r.jsx)(q, {
              root: n
            })
          }, {
            path: "/special-interests/:section",
            element: (0, r.jsx)(q, {
              root: n
            })
          }, {
            path: "/legal",
            element: (0, r.jsx)(q, {
              root: n
            })
          }, {
            path: "/prime-plus-offer",
            eßent: (0, r.jsx)(q, {
              root: n
            })
          }, {
            path: "/license-plates",
            element: (0, r.jsx)(T(), {})
          }, {
            path: "*",
            element: (0, r.jsx)(g.Wasted, {
              error: {
                code: window?.env?.responseStatusCode ?? 398
              }
            })
          }];
          return (0, y.useRoutes)(a)
        })),
        R = e => {
          let {
            config: n
          } = e;
          const {
            state: {
              headerHeight: a
            }
          } = (0, k.KM)();
          return (0, r.jsx)("div", {
            id: "content",
            className: "rockstargames-sites-gta-gen9b0093976ff3d5d9725a25fa8bf9ef956",
            children: (0, r.jsx)(Q, {
              routeRoot: n?.routeRoot
            })
          })
        },
        W = e => {
          let {
            config: n,
            setHeaderHidden: a
          } = e;
          const {
            setBrand: i
          } = (0, k.KM)(), {
            setCharactersNeeded: s
          } = (0, l.useRockstarUserState)();
          return (0, t.useLayoutEffect)((() => (i("gtao"), s("gtao"), () => {
            s(null)
          })), []), (0, r.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9deaacbee4aef528355067efdd6b118c2",
            children: [(0, r.jsx)(E, {}), (0, r.jsx)(h, {}), (0, r.jsx)(R, {
              config: n
            })]
          })
        },
        K = e => {
          let {
            config: n,
            setHeaderHidden: a
          } = e;
          return (0, r.jsx)(v, {
            children: (0, r.jsx)(W, {
              config: n,
              setHeaderHidden: a
            })
          })
        }
    },
    7132: (e, n, a) => {
      "use strict";
      a.r(n), a.d(n, {
        default: () => t
      });
      const t = a(5492).default
    },
    5820: e => {
      var n = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "mutation",
          name: {
            kind: "Name",
            value: "SubmitFeedback"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "content"
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
                value: "feedback_step"
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
                value: "submittal"
              },
              name: {
                kind: "Name",
                value: "gtaoFeedbackSubmit"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "content"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "content"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "feedback_step"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "feedback_step"
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
                }]
              }
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "FeedbackSteps"
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
                value: "step"
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
                  kind: "StringValue",
                  value: "/GTAOnline/feedback",
                  block: !1
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "fallbackUrl"
                },
                value: {
                  kind: "StringValue",
                  value: "/GTAOnline/",
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
                value: "tree"
              },
              name: {
                kind: "Name",
                value: "gtaoFeedbackSteps"
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
                  value: "step"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "step"
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
                    value: "path"
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
                        value: "id_hash"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "feedback_type"
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
                        }, {
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
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "next"
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
                        value: "message"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "feedback_type"
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
          end: 856
        }
      };

      function a(e, n) {
        if ("FragmentSpread" === e.kind) n.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var t = e.type;
          "NamedType" === t.kind && n.add(t.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, n)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, n)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, n)
        }))
      }
      n.loc.source = {
        body: 'mutation SubmitFeedback(\n    $content: String!\n    $feedback_step: Int!\n    $cache: Boolean = true\n) {\n    submittal: gtaoFeedbackSubmit(\n        content: $content\n        feedback_step: $feedback_step\n    ) {\n        id\n    }\n}\n\nquery FeedbackSteps($locale: String!, $step: String, $cache: Boolean = true) {\n    meta: metaUrl(\n        locale: $locale\n        domain: "www"\n        url: "/GTAOnline/feedback"\n        fallbackUrl: "/GTAOnline/"\n    ) {\n        title\n    }\n    tree: gtaoFeedbackSteps(locale: $locale, step: $step) {\n        path {\n            id\n            id_hash\n            feedback_type {\n                name\n                title\n            }\n        }\n        next {\n            id_hash\n            message\n            feedback_type {\n                name\n                title\n                href\n            }\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function i(e, n) {
        for (var a = 0; a < e.definitions.length; a++) {
          var t = e.definitions[a];
          if (t.name && t.name.value == n) return t
        }
      }

      function s(e, n) {
        var a = {
          kind: e.kind,
          definitions: [i(e, n)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var s = t[n] || new Set,
          o = new Set,
          l = new Set;
        for (s.forEach((function(e) {
            l.add(e)
          })); l.size > 0;) {
          var d = l;
          l = new Set, d.forEach((function(e) {
            o.has(e) || (o.add(e), (t[e] || new Set).forEach((function(e) {
              l.add(e)
            })))
          }))
        }
        return o.forEach((function(n) {
          var t = i(e, n);
          t && a.definitions.push(t)
        })), a
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var n = new Set;
          a(e, n), t[e.name.value] = n
        }
      })), e.exports = n, e.exports.SubmitFeedback = s(n, "SubmitFeedback"), e.exports.FeedbackSteps = s(n, "FeedbackSteps")
    },
    8800: e => {
      var n = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "BuyNowQ"
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
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
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
            }]
          }
        }],
        loc: {
          start: 0,
          end: 213
        }
      };

      function a(e, n) {
        if ("FragmentSpread" === e.kind) n.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var t = e.type;
          "NamedType" === t.kind && n.add(t.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, n)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, n)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, n)
        }))
      }
      n.loc.source = {
        body: "query BuyNowQ($ids: [String]!, $locale: String!) {\n    tinaModulesInfo(ids: $ids, locale: $locale) {\n        tina {\n            payload\n            variables {\n                keys\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function i(e, n) {
        for (var a = 0; a < e.definitions.length; a++) {
          var t = e.definitions[a];
          if (t.name && t.name.value == n) return t
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var n = new Set;
          a(e, n), t[e.name.value] = n
        }
      })), e.exports = n, e.exports.BuyNowQ = function(e, n) {
        var a = {
          kind: e.kind,
          definitions: [i(e, n)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var s = t[n] || new Set,
          o = new Set,
          l = new Set;
        for (s.forEach((function(e) {
            l.add(e)
          })); l.size > 0;) {
          var d = l;
          l = new Set, d.forEach((function(e) {
            o.has(e) || (o.add(e), (t[e] || new Set).forEach((function(e) {
              l.add(e)
            })))
          }))
        }
        return o.forEach((function(n) {
          var t = i(e, n);
          t && a.definitions.push(t)
        })), a
      }(n, "BuyNowQ")
    },
    6372: e => {
      var n = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "MetaUrlInfo"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "url"
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
              name: {
                kind: "Name",
                value: "metaUrlInfo"
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
                    value: "url"
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
                    value: "description"
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
                    value: "keywords"
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
            }]
          }
        }],
        loc: {
          start: 0,
          end: 323
        }
      };

      function a(e, n) {
        if ("FragmentSpread" === e.kind) n.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var t = e.type;
          "NamedType" === t.kind && n.add(t.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, n)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, n)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, n)
        }))
      }
      n.loc.source = {
        body: "query MetaUrlInfo($url: String, $locale: String!, $cache: Boolean = true) {\n    metaUrlInfo(url: $url, locale: $locale, cache: $cache) {\n        url\n        title\n        description\n        id\n        keywords\n        tina {\n            payload\n            variables {\n                keys\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function i(e, n) {
        for (var a = 0; a < e.definitions.length; a++) {
          var t = e.definitions[a];
          if (t.name && t.name.value == n) return t
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var n = new Set;
          a(e, n), t[e.name.value] = n
        }
      })), e.exports = n, e.exports.MetaUrlInfo = function(e, n) {
        var a = {
          kind: e.kind,
          definitions: [i(e, n)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var s = t[n] || new Set,
          o = new Set,
          l = new Set;
        for (s.forEach((function(e) {
            l.add(e)
          })); l.size > 0;) {
          var d = l;
          l = new Set, d.forEach((function(e) {
            o.has(e) || (o.add(e), (t[e] || new Set).forEach((function(e) {
              l.add(e)
            })))
          }))
        }
        return o.forEach((function(n) {
          var t = i(e, n);
          t && a.definitions.push(t)
        })), a
      }(n, "MetaUrlInfo")
    }
  }
]);
//# sourceMappingURL=9a1947a6d972ffd4c3a4ca56d948c4cd.js.map