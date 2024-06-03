! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "c4e69022-5bdc-4218-9d97-1763b2c7d8b9", e._sentryDebugIdIdentifier = "sentry-dbid-c4e69022-5bdc-4218-9d97-1763b2c7d8b9")
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
  [700], {
    30700: (e, a, i) => {
      "use strict";
      i.r(a), i(31389), i(42664), i(34904), i(46368), i(58256), i(64932), i(87440), i(53128), i(18932), i(19520), i(24264), i(69224), i(58432), i(13144), i(77571), i(84084), i(86096), i(54012), i(38592);
      var n = i(85092),
        s = i(19548),
        t = i.n(s),
        r = i(64508),
        o = i(51664),
        c = i(81968),
        l = i.n(c),
        d = i(77508);
      const m = "__MFE_GLOBAL_HOOK__",
        u = () => {
          const e = window;
          e[m]?.history || (e[m] = Object.assign(e[m] || {}, {
            history: (0, d.createBrowserHistory)()
          }))
        };
      var k = i(9860),
        g = i(36960),
        f = i.n(g),
        _ = i(50968),
        v = i(1740),
        p = i(42836),
        b = i(57013);
      var h = i(95240);
      const y = e => {
          let {
            modal: a
          } = e;
          const {
            content: i,
            className: n,
            height: s,
            onClose: t,
            rect: r = {
              left: 0,
              top: 0
            },
            contentStyle: c = {},
            contentClassName: l = "",
            width: d,
            fadeIn: m = !0,
            cardIds: u,
            theme: k,
            title: g,
            gtm: y = {},
            aspectRatio: N = "default",
            cardDimensions: w
          } = a, {
            left: S,
            top: x
          } = r, [j, F] = (0, o.useState)(-1), {
            track: V
          } = (0, p.useGtmTrack)(), I = null !== u && (u?.length || 0) > 1 && ("flag_bg" === k || "fob" === w?.size), [A, T] = (0, b.useSearchParams)(), [D, G] = (0, o.useState)(!1), [R, E] = (0, o.useState)(!1), [C, $] = (0, o.useState)(), M = () => {
            const e = j > -1 ? j - 1 : 0;
            F(e), E(e <= 0), G(e >= (u?.length || 0) - 1), V({
              event: "modal_previous",
              event_category: "modal",
              event_action: "previous",
              event_label: "",
              position: j
            })
          }, z = () => {
            const e = j > -1 ? j + 1 : 0;
            F(e), E(e <= 0), G(e >= (u?.length || 0) - 1), V({
              event: "modal_next",
              event_category: "modal",
              event_action: "next",
              event_label: "",
              position: j
            })
          };
          (0, o.useEffect)((() => {
            null !== j && null !== u && u && j < u.length && j > -1 && T({
              info: u[j].toString()
            })
          }), [j, u]), (0, o.useEffect)((() => {
            if (null !== u && -1 === j && u && u.length > 0) {
              const e = A.get("info");
              u?.forEach(((a, i) => {
                a === e && (F(i), E(i <= 0), G(i >= (u?.length || 0) - 1))
              }))
            }
          }), [u, j]);
          const [L] = (0, o.useState)({
            y: x,
            x: S,
            top: 0,
            left: 0,
            width: d,
            height: s,
            border: "0px solid transparent",
            background: "transparent",
            marginTop: I ? "0" : ""
          }), B = {
            opacity: 1
          }, P = (0, o.useRef)(null), O = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, q = {
            ease: "easeIn",
            duration: .3,
            delay: .5
          }, [U] = (0, o.useState)({
            x: "-50%",
            y: "-50%",
            top: "50%",
            left: "50%",
            width: "calc(100vw - (var(--modal-padding) * 2))",
            height: "var(--modal-height)",
            border: "1px solid var(--border-color, #2d2d2d)",
            background: "var(--black-100)",
            marginTop: I ? "calc(var(--modal-controlsHeight) - var(--modal-padding))" : "",
            transition: {
              x: O,
              y: O,
              top: O,
              left: O,
              width: O,
              height: O,
              border: O,
              background: {
                delay: .3
              }
            }
          }), [H, Q] = (0, o.useState)({
            initial: L,
            shown: U
          });
          (0, o.useEffect)((() => {
            Q({
              initial: L,
              shown: U
            })
          }), [L, U]), (0, o.useEffect)((() => {
            const e = e => {
              "function" == typeof t && "Escape" === e.key && (t(), V({
                event: "modal_close",
                event_action: "close",
                event_category: "modal",
                event_label: g ?? void 0,
                ...y
              }))
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []);
          const Y = () => {
              "function" == typeof t && (t(), V({
                event: "modal_close",
                event_action: "close",
                event_category: "modal",
                event_label: g ?? void 0,
                ...y
              }))
            },
            K = (e, a) => {
              if (!e || !e.children || a < 0) return null;
              for (let i = 0; i < e.children.length; i++) {
                const n = e.children[i];
                if (n.scrollHeight > n.clientHeight) return n;
                const s = K(n, a - 1);
                if (s) return s
              }
              return null
            },
            X = e => {
              if (W?.current?.children) {
                let a = null;
                const i = "ArrowDown" === e.key ? 25 : "ArrowUp" === e.key ? -25 : 0;
                switch (e.key) {
                  case "ArrowDown":
                  case "ArrowUp":
                    a = (e => {
                      let a = null;
                      return C?.queried ? a = C.element : (a = K(e, 2), $({
                        queried: !0,
                        element: a
                      })), a
                    })(W.current), e.preventDefault(), a && (a.scrollTop += i)
                }
              }
            },
            J = m ? 0 : 1,
            W = (0, o.useRef)(null),
            Z = (0, h.jsx)(_.motion.button, {
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
                Y()
              },
              onKeyDown: X,
              onKeyUp: X
            });
          return (0, o.useMemo)((() => (0, h.jsx)("div", {
            className: "rockstargames-sites-rockstargamese9a8e066d320a81b61aa2c636fa0a5b5",
            "data-show-nav": I,
            "data-aspect-ratio": N,
            children: (0, h.jsxs)(f(), {
              children: [(0, h.jsx)(_.motion.div, {
                className: "rockstargames-sites-rockstargamesc8632c630878ad16e637fe2b8db2f02c",
                initial: {
                  opacity: 0
                },
                animate: B,
                transition: O,
                onClick: () => Y()
              }), I && (0, h.jsxs)("div", {
                className: "rockstargames-sites-rockstargameseeecb8dc782f382fc9d32d03ecc1a2a5",
                children: [(0, h.jsxs)(_.motion.div, {
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
                    onClick: M,
                    disabled: R,
                    onKeyDown: X,
                    onKeyUp: X
                  }), (0, h.jsxs)("div", {
                    className: "rockstargames-sites-rockstargamesff3c13d9dc1de9af609a1f99b4c47039",
                    children: [" ", j + 1, (0, h.jsx)("div", {
                      className: "rockstargames-sites-rockstargamescd9c6033ad00894881fa5451acfe15da"
                    }), u?.length, " "]
                  }), (0, h.jsx)("button", {
                    type: "button",
                    "aria-label": "Next",
                    onClick: z,
                    disabled: D,
                    onKeyDown: X,
                    onKeyUp: X
                  })]
                }), Z]
              }), (0, h.jsx)(_.motion.div, {
                className: "rockstargames-sites-rockstargamesfab99cc2e2ca2e2a2158f9d41e764558",
                ref: P,
                initial: "initial",
                animate: "shown",
                variants: H,
                transition: O,
                style: c,
                children: (0, h.jsxs)(_.motion.div, {
                  className: (0, v.classList)("rockstargames-sites-rockstargamesb6aa5ebf680af5d95d0e9c76ac36ed82", n),
                  children: [!I && Z, (0, h.jsx)(_.motion.div, {
                    className: (0, v.classList)("rockstargames-sites-rockstargamesd901631c0b9d817396c8352c027a2a0d", l),
                    initial: {
                      opacity: J
                    },
                    animate: {
                      opacity: 1
                    },
                    transition: q,
                    ref: W,
                    children: i
                  }), (0, h.jsx)("button", {
                    className: "rockstargames-sites-rockstargamesf1ecf74036b2b7fdfda3613619af40cf",
                    type: "button",
                    "aria-label": "End of modal"
                  })]
                })
              })]
            })
          })), [i, j, c])
        },
        N = "modal-context",
        w = [null, () => null],
        S = window?.[N] ?? (window[N] = (0, o.createContext)(w)),
        x = e => {
          let {
            children: a
          } = e;
          const [i, n] = (0, o.useState)(w), s = (0, o.useMemo)((() => i?.content ? (0, h.jsx)(y, {
            modal: i
          }) : null), [i]);
          return (0, h.jsx)(S.Provider, {
            value: [s, n],
            children: a
          })
        };
      var j = i(27864),
        F = i.n(j),
        V = i(33052),
        I = i(45792),
        A = i(77715),
        T = i(42708),
        D = i(41272),
        G = i(75016),
        R = i(42132),
        E = i.n(R),
        C = i(20104),
        $ = i(3061),
        M = i(60328);
      const z = "rockstargames-sites-rockstargamesf75798e3984014f9cd35c5956e94fbb3",
        L = "rockstargames-sites-rockstargamesaa6bc8070e5e81ea0594636575db8fd6";
      var B = i(50060);
      const P = e => {
          let {
            games: a,
            t: i
          } = e;
          return (0, h.jsxs)("section", {
            className: "rockstargames-sites-rockstargamesbec4f690ea94ae150d36b6be04b7011d",
            "data-testid": "featuredGames",
            children: [(0, h.jsx)("h3", {
              className: z,
              children: (0, h.jsx)(k.A, {
                to: "newswire",
                "aria-label": i("Featured Games"),
                "data-testid": "featuredGamesHeader",
                children: i("Featured Games")
              })
            }), (0, h.jsx)("div", {
              className: L,
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
        O = e => {
          let {
            posts: a,
            t: i
          } = e;
          return (0, h.jsxs)("section", {
            className: "rockstargames-sites-rockstargamesbc6c5d345fb1cccca402fd4a97a8bef8",
            "data-testid": "newswire",
            children: [(0, h.jsx)("h3", {
              className: z,
              children: (0, h.jsx)(k.A, {
                to: "newswire",
                "aria-label": i("Newswire"),
                "data-testid": "newswireHeader",
                children: i("Newswire")
              })
            }), (0, h.jsx)(k.NewswireBlocks, {
              className: L,
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
        q = (0, I.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            data: i
          } = (0, V.useQuery)(B.Home, {
            autoSetLoading: !0
          });
          if (!i) return null;
          const {
            games: n,
            posts: s,
            videos: t
          } = i;
          return (0, h.jsxs)("div", {
            className: "rockstargames-sites-rockstargamesdcf817f11d19ae0ef32bf4b753d292a2",
            "data-testid": "homepageBody",
            children: [(0, h.jsx)(k.VideoCarousel, {
              videos: t.results,
              t: a
            }), (0, h.jsxs)("div", {
              className: "rockstargames-sites-rockstargamesd04358d9e38bc205e1c35dee36efcaa1",
              children: [(0, h.jsx)(O, {
                posts: s.results,
                t: a
              }), (0, h.jsx)(P, {
                games: n.results,
                t: a
              })]
            })]
          })
        })),
        U = (0, D.defineMessages)({
          rockstargames_downloads_collections_download_text: {
            id: "rockstargames_downloads_collections_download_text",
            defaultMessage: "Download {item} {collection}"
          },
          rockstargames_downloads_go_back: {
            id: "rockstargames_downloads_go_back",
            defaultMessage: "Go back"
          },
          rockstargames_downloads_dimensions_label: {
            id: "rockstargames_downloads_dimensions_label",
            defaultMessage: "{width} by {height} pixels."
          }
        });
      var H = i(89416),
        Q = i.n(H);
      const Y = {
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
          collection: "rockstargames-sites-rockstargamesc0cebee239c777d036b26ed19d6ea64b",
          series: "rockstargames-sites-rockstargamesbb4919101e29ab30d4d0b552210f6ab9",
          collectionTitle: "rockstargames-sites-rockstargamese73c9de8e1b1076901d15a4c4875a5af"
        },
        K = (0, I.withTranslations)((e => {
          let {
            links: a,
            collectionId: i,
            name: n,
            title: s,
            label: t,
            t: r
          } = e;
          const c = (0, D.useIntl)(),
            [l, d] = (0, o.useState)(!1),
            {
              sanitize: m
            } = Q(),
            u = [11, 10, 12, 13, 14, 15].includes(i),
            g = n || r("Select Retailer"),
            _ = (0, o.useRef)(),
            v = e => {
              _.current.contains(e.target) || d(!1)
            },
            p = () => {
              d(!1)
            },
            b = e => {
              e.preventDefault();
              const a = e.target.href;
              (0, I.downloadFile)(a), p()
            },
            y = e => {
              "Escape" === e.key && d(!1)
            };
          (0, o.useEffect)((() => (l ? window.addEventListener("keyup", y) : window.removeEventListener("keyup", y), () => window.removeEventListener("keyup", y))), [y, l]), Q().addHook("afterSanitizeAttributes", (function(e) {
            e.hasAttribute("target") && e.setAttribute("tabindex", l ? 0 : -1)
          })), (0, o.useEffect)((() => (l ? document.addEventListener("mousedown", v) : document.removeEventListener("mousedown", v), () => {
            document.removeEventListener("mousedown", v)
          })), [l]);
          const N = e => {
            if (!e) return null;
            const a = e.trim().match(/(\d{1,4})x(\d{1,4})/);
            if (a) {
              const e = a[1],
                i = a[2];
              return c.formatMessage(U.rockstargames_downloads_dimensions_label, {
                width: e,
                height: i
              })
            }
            return null
          };
          return (0, h.jsx)("div", {
            ref: _,
            className: Y.dropdownWrapper,
            children: (0, h.jsxs)(f(), {
              disabled: !l,
              children: [(0, h.jsx)("button", {
                className: Y.header,
                onClick: () => d(!l),
                type: "select",
                "aria-label": `${t?t+", ":""}${g}`,
                children: (0, h.jsxs)("div", {
                  className: Y.title,
                  children: [(0, h.jsx)("p", {
                    children: g
                  }), (0, h.jsx)("div", {
                    className: [Y.caret, l ? Y.open : ""].join(" ")
                  })]
                })
              }), (0, h.jsx)("ul", {
                className: [Y.list, l ? Y.open : ""].join(" "),
                children: u ? (0, h.jsx)(h.Fragment, {
                  children: (e => {
                    const a = (new DOMParser).parseFromString(m(e, {
                      ADD_ATTR: ["target"]
                    }), "text/html");
                    return Array.from(a.querySelectorAll("a")).map(((e, a) => {
                      const i = Array.from(e.attributes),
                        n = {};
                      return i.forEach((e => {
                        let a = e.name;
                        switch (a) {
                          case "href":
                            a = "to";
                            break;
                          case "tabindex":
                            a = "tabIndex"
                        }
                        n[a] = e.value
                      })), (0, h.jsx)("li", {
                        className: Y.item,
                        children: (0, h.jsx)(k.A, {
                          ...n,
                          tabIndex: l ? 0 : -1,
                          target: "_blank",
                          onClick: p,
                          children: e.textContent
                        })
                      }, `link_${a}`)
                    }))
                  })(a)
                }) : a.map((e => {
                  if ("thumb" !== e.label) return (0, h.jsx)("li", {
                    className: Y.item,
                    children: (0, h.jsx)(k.A, {
                      to: e.src,
                      "data-gtm-category": "Downloads",
                      "data-gtm-action": `Collection : ${s}`,
                      "data-gtm-label": e.src,
                      tabIndex: l ? 0 : -1,
                      onClick: b,
                      "aria-label": N(e.label),
                      children: e.label
                    })
                  }, e.id)
                }))
              })]
            })
          })
        })),
        X = (0, I.withTranslations)((e => {
          let {
            collection: a,
            games: i,
            homepage: n = !1,
            t: s
          } = e;
          return (0, h.jsxs)("div", {
            className: Y.collection,
            children: [(0, h.jsx)("h2", {
              className: Y.sectionHeader,
              children: a.title
            }), (0, h.jsx)("div", {
              className: Y.grid,
              children: i.results.map((e => (0, h.jsxs)("div", {
                className: Y.downloadItem,
                children: [(0, h.jsx)("div", {
                  className: Y.img,
                  style: {
                    backgroundImage: `url(${e.fob_640})`,
                    "--aspect-ratio": "64/79"
                  },
                  "aria-label": e.title
                }), (0, h.jsx)(K, {
                  collectionId: a.id,
                  links: e.downloads_game.platform,
                  label: e.title
                })]
              }, e.fob_640)))
            }), n ? (0, h.jsx)("div", {
              className: Y.viewAll,
              children: (0, h.jsx)(k.Button, {
                role: "link",
                "aria-label": a.title,
                "data-gtm-category": "Downloads",
                "data-gtm-action": "Collection: View All",
                "data-gtm-label": a.title,
                to: "/downloads?collection=11",
                context: "secondary",
                children: s("View All")
              })
            }) : ""]
          })
        })),
        J = (0, I.withTranslations)((e => {
          let {
            collection: a,
            homepage: i = !1,
            t: n
          } = e;
          return (0, h.jsxs)("div", {
            className: Y.collection,
            children: [(0, h.jsx)("h2", {
              className: Y.sectionHeader,
              children: a.title
            }), (0, h.jsx)("div", {
              className: Y.grid,
              children: a.apps.slice(0, i ? 4 : 100).map((e => (0, h.jsxs)("div", {
                className: Y.downloadItem,
                children: [(0, h.jsx)("div", {
                  className: Y.img,
                  style: {
                    backgroundImage: `url(${e.preview})`,
                    "--aspect-ratio": "1/1"
                  }
                }), (0, h.jsx)(K, {
                  collectionId: a.id,
                  links: e.platform
                })]
              }, e.id)))
            }), i ? (0, h.jsx)("div", {
              className: Y.viewAll,
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
          const i = (0, D.useIntl)();
          return (0, h.jsxs)("div", {
            className: Y.collection,
            children: [(0, h.jsx)("h4", {
              className: Y.collectionTitle,
              children: (0, h.jsx)(k.A, {
                to: "/downloads",
                children: i.formatMessage(U.rockstargames_downloads_go_back)
              })
            }), (0, h.jsx)("h2", {
              className: Y.sectionHeader,
              children: a.title
            }), (0, h.jsx)("div", {
              className: Y.grid,
              children: a.gold_bars.map((e => (0, h.jsxs)("div", {
                className: Y.downloadItem,
                children: [(0, h.jsx)("div", {
                  className: Y.img,
                  style: {
                    backgroundImage: `url(${e.preview})`,
                    "--aspect-ratio": "1/1"
                  }
                }), (0, h.jsx)(K, {
                  collectionId: a.id,
                  links: e.platform
                })]
              }, e.preview)))
            })]
          })
        },
        Z = e => {
          let {
            collection: a
          } = e;
          const i = (0, D.useIntl)();
          return (0, h.jsxs)("div", {
            className: Y.collection,
            children: [(0, h.jsx)("h4", {
              className: Y.collectionTitle,
              children: (0, h.jsx)(k.A, {
                to: "/downloads",
                children: i.formatMessage(U.rockstargames_downloads_go_back)
              })
            }), (0, h.jsx)("h2", {
              className: Y.sectionHeader,
              children: a.title
            }), (0, h.jsx)("div", {
              className: Y.grid,
              children: a.patches.map((e => (0, h.jsx)(k.A, {
                to: e.support_url,
                target: "_blank",
                "data-gtm-category": "Downloads",
                "data-gtm-action": "Collection : Patches",
                "data-gtm-label": e.game.title,
                "aria-label": i.formatMessage(U.rockstargames_downloads_collections_download_text, {
                  item: e.game.title,
                  collection: a.title
                }),
                children: (0, h.jsx)("div", {
                  className: Y.card,
                  children: (0, h.jsx)("div", {
                    className: Y.img,
                    style: {
                      backgroundImage: `url(${e.game.fob_640})`,
                      "--aspect-ratio": "64/79"
                    }
                  })
                })
              }, e.support_url)))
            })]
          })
        },
        ee = e => {
          let {
            collection: a
          } = e;
          const i = (0, D.useIntl)();
          return (0, h.jsxs)("div", {
            className: Y.collection,
            children: [(0, h.jsx)("h4", {
              className: Y.collectionTitle,
              children: (0, h.jsx)(k.A, {
                to: "/downloads",
                children: i.formatMessage(U.rockstargames_downloads_go_back)
              })
            }), (0, h.jsx)("h2", {
              className: Y.sectionHeader,
              children: a.title
            }), (0, h.jsx)("div", {
              className: Y.grid,
              children: a.shark_cards.map((e => (0, h.jsxs)("div", {
                className: Y.downloadItem,
                children: [(0, h.jsx)("div", {
                  className: Y.img,
                  style: {
                    backgroundImage: `url(${e.preview})`,
                    "--aspect-ratio": "7/5"
                  }
                }), (0, h.jsxs)("div", {
                  className: Y.label,
                  children: [(0, h.jsx)("h5", {
                    children: e.title
                  }), (0, h.jsx)("p", {
                    children: e.desc
                  })]
                }), (0, h.jsx)(K, {
                  collectionId: a.id,
                  links: e.platform
                })]
              }, e.title)))
            })]
          })
        },
        ae = e => {
          let {
            collection: a,
            imgRatio: i
          } = e;
          const n = (0, D.useIntl)(),
            s = (0, o.useRef)(),
            t = a.title_slug,
            r = !["music", "dlc"].includes(t);
          return (0, o.useEffect)((() => {
            s?.current && s.current.focus()
          }), [s]), (0, h.jsxs)("div", {
            className: Y.collection,
            ref: s,
            "aria-label": a?.title,
            role: "region",
            children: [(0, h.jsx)("h4", {
              className: Y.collectionTitle,
              children: (0, h.jsx)(k.A, {
                to: "/downloads",
                children: n.formatMessage(U.rockstargames_downloads_go_back)
              })
            }), (0, h.jsx)("h2", {
              className: Y.sectionHeader,
              children: a.title
            }), (0, h.jsx)("div", {
              className: Y.grid,
              children: a.series.map((e => (0, h.jsx)(k.A, {
                to: `/downloads?collection=${a.id}&series=${e.id}`,
                "data-gtm-category": "Downloads",
                "data-gtm-action": `Collection : ${a.title}`,
                "data-gtm-label": e.title,
                "aria-label": n.formatMessage(U.rockstargames_downloads_collections_download_text, {
                  item: e.title,
                  collection: a.title
                }),
                children: (0, h.jsxs)("div", {
                  className: Y.card,
                  children: [(0, h.jsx)("div", {
                    className: Y.img,
                    style: {
                      backgroundImage: `url(${e?.musics?.[0]?.thumb??e?.dlcs?.[0]?.thumb??e.preview})`,
                      "--aspect-ratio": i
                    }
                  }), r ? (0, h.jsx)("h5", {
                    className: Y.title,
                    "aria-hidden": !0,
                    children: e.title
                  }) : ""]
                })
              }, e.id)))
            })]
          })
        },
        ie = e => {
          let {
            collection: a,
            games: i = []
          } = e;
          const n = [6, 10, 15].includes(a.id) ? "1/1" : [9, 11, 12, 13].includes(a.id) ? "64/79" : [14].includes(a.id) ? "/5" : "16/9";
          switch (a.title_slug) {
            case "apps":
              return (0, h.jsx)(J, {
                collection: a
              });
            case "gamespcmac":
              return (0, h.jsx)(X, {
                collection: a,
                games: i
              });
            case "goldbars":
              return (0, h.jsx)(W, {
                collection: a
              });
            case "patches":
              return (0, h.jsx)(Z, {
                collection: a
              });
            case "sharkcards":
              return (0, h.jsx)(ee, {
                collection: a
              });
            case "dlc":
            case "music":
            case "gamescreensaver":
            case "avatars":
            case "gamewallpaper":
            case "rockstarwallpaper":
              return (0, h.jsx)(ae, {
                collection: a,
                imgRatio: n
              })
          }
        },
        ne = e => {
          let {
            collection: a
          } = e;
          return (0, h.jsx)(k.A, {
            to: `/downloads?collection=${a.id}`,
            "data-gtm-category": "Downloads",
            "data-gtm-action": "Collection : Misc",
            "data-gtm-label": a.title,
            children: (0, h.jsxs)("div", {
              className: Y.card,
              children: [(0, h.jsx)("div", {
                className: Y.img,
                style: {
                  "--aspect-ratio": "1/1",
                  backgroundImage: `url(${a.preview})`
                }
              }), (0, h.jsx)("h5", {
                className: Y.title,
                children: a.title
              })]
            })
          })
        },
        se = (0, I.withTranslations)((e => {
          let {
            collections: a,
            t: i
          } = e;
          return (0, h.jsxs)("div", {
            className: Y.collection,
            children: [(0, h.jsx)("h2", {
              className: Y.sectionHeader,
              children: i("Miscellaneous")
            }), (0, h.jsx)("div", {
              className: Y.grid,
              children: a.map((e => (0, h.jsx)(ne, {
                collection: e
              }, e.id)))
            })]
          })
        })),
        te = (0, I.withTranslations)((e => {
          let {
            data: {
              featured: a,
              game: i
            },
            t: n
          } = e;
          return (0, h.jsxs)("div", {
            className: Y.featured,
            children: [(0, h.jsxs)("div", {
              className: [Y.gridLarge, Y.hero].join(" "),
              children: [(0, h.jsx)("div", {
                style: {
                  "--aspect-ratio": "1/1"
                },
                className: [Y.img, Y[i.title_slug]].join(" ")
              }), (0, h.jsxs)("div", {
                className: Y.featuredDesc,
                children: [(0, h.jsxs)("div", {
                  className: Y.text,
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
              className: Y.sectionHeader,
              children: n("Featured Downloads")
            }), (0, h.jsx)("div", {
              className: Y.gridLarge,
              children: a.map((e => (0, h.jsx)(k.A, {
                to: e.href,
                target: e.href.startsWith("http") ? "_blank" : "_self",
                "data-gtm-category": "Downloads",
                "data-gtm-action": `Featured: ${e.title_key}`,
                "data-gtm-label": e.href,
                children: (0, h.jsxs)("div", {
                  className: Y.card,
                  children: [(0, h.jsx)("div", {
                    style: {
                      "--aspect-ratio": "780/373"
                    },
                    className: [Y[e.name], Y.img].join(" ")
                  }), (0, h.jsx)("h5", {
                    className: Y.title,
                    children: n(e.title_key)
                  })]
                })
              }, e.name)))
            })]
          })
        })),
        re = (0, I.withTranslations)((e => {
          let {
            collection: a,
            imgRatio: i,
            t: n
          } = e;
          const s = a.title_slug,
            t = (0, o.useRef)();
          return (0, o.useEffect)((() => {
            t?.current && t.current.focus()
          }), [t]), (0, h.jsxs)("div", {
            ref: t,
            "aria-label": `${a.title}${a?.series?.[0]?.title?", "+a?.series?.[0]?.title:""}`,
            children: [(0, h.jsxs)("div", {
              className: [Y.sectionHeader, Y.series].join(" "),
              children: [(0, h.jsx)("h4", {
                className: Y.collectionTitle,
                children: (0, h.jsx)(k.A, {
                  to: `/downloads?collection=${a.id}`,
                  children: a.title
                })
              }), (0, h.jsx)("h2", {
                className: Y.seriesTitle,
                children: `${a?.series?.[0]?.title??""}`
              })]
            }), (0, h.jsx)("div", {
              className: Y.grid,
              children: a.series.map((e => {
                let {
                  groups: t
                } = e;
                return t.map((e => (0, h.jsxs)("div", {
                  className: Y.downloadItem,
                  children: [(0, h.jsx)("div", {
                    className: Y.img,
                    "aria-label": e.label,
                    style: {
                      backgroundImage: `url(${e?.thumb??e?.preview})`,
                      "--aspect-ratio": i
                    }
                  }), (0, h.jsxs)("div", {
                    className: Y.label,
                    children: [(0, h.jsx)("h5", {
                      children: n(e.label)
                    }), (0, h.jsx)(K, {
                      links: "dlc" === s || "music" === s ? e.platform : "gamescreensaver" === s ? e.screensavers : "gamewallpaper" === s || "rockstarwallpaper" === s ? e.wallpapers : e.avatars,
                      collectionId: a.id,
                      label: e.label,
                      title: a.series[0].title,
                      name: ["gamewallpaper", "avatars", "rockstarwallpaper"].includes(s) ? n("Select Size") : ["gamescreensaver"].includes(s) ? n("Select") : ""
                    })]
                  })]
                }, e.id)))
              }))
            })]
          })
        }));
      var oe = i(55380);
      const ce = (0, I.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            setBreadcrumb: i
          } = (0, $.useRockstarLocalState)(), n = (0, I.useQueryParams)(), [s, t] = (0, o.useState)(null), [r, c] = (0, o.useState)(null), {
            loading: l,
            refetch: d
          } = (0, V.useQuery)(oe.Downloads, {
            variables: s,
            skip: !0,
            autoSetLoading: !0
          });
          if ((0, o.useEffect)((() => {
              c(null);
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
              t(a)
            }), [n.get("series"), n.get("collection"), c]), (0, o.useEffect)((() => {
              let e = [{
                href: "/downloads",
                title: a("Downloads")
              }];
              return r?.collection?.id && s.withSeries && (e = [...e, {
                href: `/downloads?collection=${r.collection.id}`,
                title: r.collection.title
              }]), i(e), () => {
                i()
              }
            }), [r, s]), (0, o.useEffect)((() => {
              s && (async () => {
                const e = await d(s);
                c(e.data)
              })()
            }), [d, s]), !r || l) return null;
          if (s.withIndex) return (0, h.jsx)("div", {
            className: Y.index,
            children: (0, h.jsxs)("div", {
              className: Y.sections,
              children: [(0, h.jsx)(te, {
                data: r
              }), (0, h.jsx)(X, {
                homepage: !0,
                games: r.pc_mac_games,
                collection: r.collections.find((e => "gamespcmac" === e.title_slug))
              }), (0, h.jsx)(J, {
                homepage: !0,
                collection: r.collections.find((e => "apps" === e.title_slug))
              }), (0, h.jsx)(se, {
                collections: r.collections.filter((e => !["apps", "gamespcmac", "sharkcards"].includes(e.title_slug)))
              })]
            })
          });
          if (s.withSeries) {
            const e = [6, 12, 13].includes(s.collectionId) ? "1/1" : "16/9";
            return (0, h.jsx)("div", {
              className: Y.index,
              children: (0, h.jsx)(re, {
                collection: r.collection,
                imgRatio: e
              })
            })
          }
          return s.withCollection ? (0, h.jsx)("div", {
            className: Y.index,
            children: (0, h.jsx)(ie, {
              collection: r.collection,
              games: r.pc_mac_games
            })
          }) : null
        })),
        le = (0, I.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            setBreadcrumb: i,
            setNormalLogo: n
          } = (0, $.useRockstarLocalState)();
          return (0, o.useEffect)((() => (i([{
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
        me = i.n(de);
      const ue = (0, I.withTranslations)((e => {
          let {
            t: a
          } = e;
          const i = (0, M.useParams)(),
            {
              setBreadcrumb: n,
              setNormalLogo: s
            } = (0, $.useRockstarLocalState)();
          return (0, o.useEffect)((() => (n([{
            href: "/newswire",
            title: a("Newswire")
          }], ""), () => {
            s(!0), n()
          })), []), (0, h.jsx)(me(), {
            idHash: String(i.articleId)
          })
        })),
        ke = "rockstargames-sites-rockstargamese6a4f8b4027dadd3be8f848d9b846bc3";
      var ge = i(98956),
        fe = i.n(ge);
      const _e = (0, I.withTranslations)((e => {
        let {
          t: a
        } = e;
        const {
          setBreadcrumb: i,
          setNormalLogo: n
        } = (0, $.useRockstarLocalState)(), s = (0, I.useQueryParams)(), [t, r] = (0, o.useState)({}), {
          data: c
        } = (0, V.useQuery)(fe(), {
          variables: t,
          skip: !Object.entries(t).length,
          autoSetLoading: !0
        }), {
          search: l
        } = (0, M.useLocation)();
        if ((0, o.useEffect)((() => {
            window.scrollTo(0, 0)
          }), [l]), (0, o.useEffect)((() => (i([{
            href: "/videos",
            title: a("Videos")
          }]), () => {
            i()
          })), []), (0, o.useEffect)((() => {
            r({
              ...t,
              type: s.get("type"),
              gameId: Number(s.get("gameId") ?? 0),
              index: null === s.get("type")
            })
          }), [s.get("type"), s.get("gameId")]), (0, o.useEffect)((() => (n(!1), () => n(!0))), []), !c) return null;
        if (c?.game && c?.gameVideos) return (0, h.jsx)("div", {
          className: ke,
          children: (0, h.jsx)(k.VideoList, {
            vids: c.gameVideos.results,
            title: a("Videos from %s").replace("%s", c.game.title)
          })
        });
        const {
          games: d,
          gtao: m,
          gtaVI: u,
          gtaosessions: g,
          latest: f,
          rdo: _
        } = c;
        return (0, h.jsx)("div", {
          className: ke,
          children: t.type ? "" : (0, h.jsxs)(h.Fragment, {
            children: [(0, h.jsx)(k.VideoCarousel, {
              videos: f.results,
              t: a
            }), (0, h.jsxs)("div", {
              className: "rockstargames-sites-rockstargamesb9a5297e3e78f65221054aa1f6d77597",
              children: [(0, h.jsx)(k.VideoList, {
                vids: u.results,
                title: a("Videos from %s").replace("%s", "Grand Theft Auto VI")
              }), (0, h.jsx)(k.VideoList, {
                vids: _.results,
                title: a("Videos from %s").replace("%s", "Red Dead Online")
              }), (0, h.jsx)(k.VideoList, {
                vids: m.results,
                title: a("Videos from %s").replace("%s", "GTA Online")
              }), (0, h.jsx)(k.VideoList, {
                vids: g.results,
                title: a("GTA Online Sessions Episodes")
              }), (0, h.jsx)(k.VideoList, {
                games: d,
                title: a("By Game")
              })]
            })]
          })
        })
      }));
      var ve = i(84644);
      const pe = (0, I.withTranslations)((e => {
          let {
            t: a
          } = e;
          const i = (0, M.useNavigate)(),
            {
              setNormalLogo: n,
              setBreadcrumb: s,
              setTitle: t
            } = (0, $.useRockstarLocalState)(),
            {
              videoId: r
            } = (0, M.useParams)(),
            {
              video: c,
              related: l
            } = (0, ve.useVideoData)({
              id: Number(r)
            });
          return (0, o.useEffect)((() => (s([{
            href: "/videos",
            title: a("Videos")
          }]), n(!1), () => {
            n(!0), s()
          })), []), (0, o.useEffect)((() => {
            c && t(`${c.game.title} - ${c.title}`)
          }), [c]), c ? (0, h.jsxs)(h.Fragment, {
            children: [(0, h.jsx)(ve.PlayerWithInfo, {
              videoId: Number(r),
              videoChangeCallback: e => {
                i(`../videos/${e}`)
              }
            }), l?.results?.length ? (0, h.jsx)(k.VideoList, {
              vids: l.results,
              title: a("Related Videos")
            }) : ""]
          }) : null
        })),
        be = ((0, D.defineMessages)({}), JSON.parse('{"us":{"footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"London","footer_locations_new_york":"New York","footer_locations_paris":"Paris","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Community Guidelines","rockstargames_company_info_br":"Brazil","rockstargames_company_info_cz":"Czech Republic","rockstargames_company_info_de":"Germany","rockstargames_company_info_display_for_country":"Display page information for {country}","rockstargames_company_info_es":"Spain","rockstargames_company_info_fr":"France","rockstargames_company_info_it":"Italy","rockstargames_company_info_jp":"Japan","rockstargames_company_info_kr":"South Korea","rockstargames_company_info_mx":"Mexico","rockstargames_company_info_nl":"Netherlands","rockstargames_company_info_pl":"Poland","rockstargames_company_info_ru":"Russian Federation","rockstargames_company_info_sa":"Saudi Arabia","rockstargames_company_info_tw":"Taiwan","rockstargames_company_info_us":"United States","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"Download {item} {collection}","rockstargames_downloads_dimensions_label":"{width} by {height} pixels.","rockstargames_downloads_go_back":"Go back","email_settings_cta":"Update Preferences","unsubscribe_error_description":"This URL may be invalid. You can make changes to your Rockstar Games email preferences on the account settings page.","unsubscribe_error_header":"Error Unsubscribing","unsubscribe_info_description":"You will not receive any additional marketing emails from Rockstar Games. Opt back in or make additional changes to your Rockstar Games email preferences on the account settings page.","unsubscribe_info_header":"You\'re Already Unsubscribed","unsubscribe_success_description":"You will not receive any additional marketing emails from Rockstar Games. Opt back in or make additional changes to your Rockstar Games email preferences on the account settings page.","unsubscribe_success_header":"Successfully Unsubscribed"},"de":{"footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"London","footer_locations_new_york":"New York","footer_locations_paris":"Paris","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Community-Richtlinien","rockstargames_company_info_br":"Brasilien","rockstargames_company_info_cz":"Tschechische Republik","rockstargames_company_info_de":"Deutschland","rockstargames_company_info_display_for_country":"Seiteninformationen für {country} anzeigen","rockstargames_company_info_es":"Spanien","rockstargames_company_info_fr":"Frankreich","rockstargames_company_info_it":"Italien","rockstargames_company_info_jp":"Japan","rockstargames_company_info_kr":"Südkorea","rockstargames_company_info_mx":"Mexiko","rockstargames_company_info_nl":"Niederlande","rockstargames_company_info_pl":"Polen","rockstargames_company_info_ru":"Russland","rockstargames_company_info_sa":"Saudi-Arabien","rockstargames_company_info_tw":"Taiwan","rockstargames_company_info_us":"USA","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"{item} aus {collection} herunterladen","rockstargames_downloads_dimensions_label":"{width} x {height} Pixel.","rockstargames_downloads_go_back":"Zurück","email_settings_cta":"Präferenzen aktualisieren","unsubscribe_error_description":"Diese URL ist eventuell ungültig. Du kannst deine Präferenzen bezüglich E-Mails von Rockstar Games in den Einstellungen deines Kontos ändern.","unsubscribe_error_header":"Fehler beim Abbestellen","unsubscribe_info_description":"Du wirst keine zusätzlichen Marketing-E-Mails von Rockstar Games erhalten. Du kannst dich in den Einstellungen deines Kontos wieder registrieren oder deine Präferenzen bezüglich E-Mails von Rockstar Games ändern.","unsubscribe_info_header":"Du hast E-Mails bereits abbestellt","unsubscribe_success_description":"Du wirst keine zusätzlichen Marketing-E-Mails von Rockstar Games erhalten. Du kannst dich in den Einstellungen deines Kontos wieder registrieren oder deine Präferenzen bezüglich E-Mails von Rockstar Games ändern.","unsubscribe_success_header":"Erfolgreich abbestellt"},"es":{"footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"Londres","footer_locations_new_york":"Nueva York","footer_locations_paris":"París","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"¡Pide perdón, respeta a los demás!","community_guidelines_hero_title":"Directrices de la comunidad","rockstargames_company_info_br":"Brasil","rockstargames_company_info_cz":"República Checa","rockstargames_company_info_de":"Alemania","rockstargames_company_info_display_for_country":"Mostrar información para {country}","rockstargames_company_info_es":"España","rockstargames_company_info_fr":"Francia","rockstargames_company_info_it":"Italia","rockstargames_company_info_jp":"Japón","rockstargames_company_info_kr":"Corea del Sur","rockstargames_company_info_mx":"México","rockstargames_company_info_nl":"Países bajos","rockstargames_company_info_pl":"Polonia","rockstargames_company_info_ru":"Federación Rusa","rockstargames_company_info_sa":"Arabia Saudí","rockstargames_company_info_tw":"Taiwán","rockstargames_company_info_us":"Estados Unidos","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"Descargar {item} {collection}","rockstargames_downloads_dimensions_label":"{width} por {height} píxeles.","rockstargames_downloads_go_back":"Volver","email_settings_cta":"Actualizar tus preferencias","unsubscribe_error_description":"Puede que este URL no sea válido. Puedes cambiar tus preferencias de correos electrónicos de Rockstar Games en la página de Ajustes en tu cuenta.","unsubscribe_error_header":"Error al cancelar la subscripción","unsubscribe_info_description":"Ya no recibirás más correos electrónicos comerciales de Rockstar Games. Vuelve a subscribirte o cambia tus preferencias de correos electrónicos de Rockstar Games en la página de Ajustes de tu cuenta.","unsubscribe_info_header":"Ya has cancelado tu subscripción","unsubscribe_success_description":"Ya no recibirás más correos electrónicos comerciales de Rockstar Games. Vuelve a subscribirte o cambia tus preferencias de correos electrónicos de Rockstar Games en la página de Ajustes de tu cuenta.","unsubscribe_success_header":"Has cancelado tu subscripción con éxito"},"mx":{"footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"London","footer_locations_new_york":"New York","footer_locations_paris":"Paris","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Directrices de la comunidad","rockstargames_company_info_br":"Brasil","rockstargames_company_info_cz":"República Checa","rockstargames_company_info_de":"Alemania","rockstargames_company_info_display_for_country":"Mostrar información de página de {country}","rockstargames_company_info_es":"España","rockstargames_company_info_fr":"Francia","rockstargames_company_info_it":"Italia","rockstargames_company_info_jp":"Japón","rockstargames_company_info_kr":"Corea del Sur","rockstargames_company_info_mx":"México","rockstargames_company_info_nl":"Países Bajos","rockstargames_company_info_pl":"Polonia","rockstargames_company_info_ru":"Rusia","rockstargames_company_info_sa":"Arabia Saudita","rockstargames_company_info_tw":"Taiwán","rockstargames_company_info_us":"Estados Unidos de América","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"Descargar {item} {collection}","rockstargames_downloads_dimensions_label":"{width}x{height} píxeles.","rockstargames_downloads_go_back":"Atrás","email_settings_cta":"Actualizar preferencias","unsubscribe_error_description":"La dirección URL podría ser inválida. Puedes cambiar las preferencias de tu correo de Rockstar Games en la página de configuración de cuenta.","unsubscribe_error_header":"Error al darse de baja","unsubscribe_info_description":"No recibirás más correos de publicidad de Rockstar Games. Puedes suscribirte de nuevo o hacer cambios adicionales a tu correo de Rockstar Games en la página de configuración de cuenta.","unsubscribe_info_header":"Ya te encuentras dado de baja.","unsubscribe_success_description":"No recibirás más correos de publicidad de Rockstar Games. Puedes suscribirte de nuevo o hacer cambios adicionales a tu correo de Rockstar Games en la página de configuración de cuenta.","unsubscribe_success_header":"Éxito al darse de baja."},"fr":{"footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogota","footer_locations_london":"Londres","footer_locations_new_york":"New York","footer_locations_paris":"Paris","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Règles de la communauté","rockstargames_company_info_br":"le Brésil","rockstargames_company_info_cz":"la République tchèque","rockstargames_company_info_de":"l\'Allemagne","rockstargames_company_info_display_for_country":"Afficher les informations de la page pour {country}","rockstargames_company_info_es":"l\'Espagne","rockstargames_company_info_fr":"la France","rockstargames_company_info_it":"l\'Italie","rockstargames_company_info_jp":"le Japon","rockstargames_company_info_kr":"la Corée du Sud","rockstargames_company_info_mx":"le Mexique","rockstargames_company_info_nl":"les Pays-Bas","rockstargames_company_info_pl":"la Pologne","rockstargames_company_info_ru":"la Fédération de Russie","rockstargames_company_info_sa":"l\'Arabie saoudite","rockstargames_company_info_tw":"Taïwan","rockstargames_company_info_us":"les États-Unis","rockstargames_company_info_zh":"la Chine","rockstargames_downloads_collections_download_text":"Télécharger ({collection} - {item})","rockstargames_downloads_dimensions_label":"{width}x{height} pixels.","rockstargames_downloads_go_back":"Précédent","email_settings_cta":"Mettre vos préférences à jour","unsubscribe_error_description":"Cette URL semble non valide. Vous pouvez modifier vos préférences concernant les e-mails de Rockstar Games sur la page des paramètres de votre compte.","unsubscribe_error_header":"Une erreur est survenue lors de la désinscription","unsubscribe_info_description":"Vous ne recevrez plus d\'e-mails publicitaires de la part de Rockstar Games. Réinscrivez-vous, ou effectuez d\'autres changements relatifs à vos préférences concernant les e-mails de Rockstar Games sur la page des paramètres de votre compte.","unsubscribe_info_header":"Vous êtes déjà désinscrit(e)","unsubscribe_success_description":"Vous ne recevrez plus d\'e-mails publicitaires de la part de Rockstar Games. Réinscrivez-vous, ou effectuez d\'autres changements relatifs à vos préférences concernant les e-mails de Rockstar Games sur la page des paramètres de votre compte.","unsubscribe_success_header":"Votre désinscription a été prise en compte"},"it":{"footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"Londra","footer_locations_new_york":"New York","footer_locations_paris":"Parigi","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Linee guida della comunità","rockstargames_company_info_br":"Brasile","rockstargames_company_info_cz":"Repubblica Ceca","rockstargames_company_info_de":"Germania","rockstargames_company_info_display_for_country":"Mostra informazioni sulla pagina per il paese seguente: {country}","rockstargames_company_info_es":"Spagna","rockstargames_company_info_fr":"Francia","rockstargames_company_info_it":"Italia","rockstargames_company_info_jp":"Giappone","rockstargames_company_info_kr":"Corea del Sud","rockstargames_company_info_mx":"Messico","rockstargames_company_info_nl":"Olanda","rockstargames_company_info_pl":"Polonia","rockstargames_company_info_ru":"Federazione Russa","rockstargames_company_info_sa":"Arabia Saudita","rockstargames_company_info_tw":"Taiwan","rockstargames_company_info_us":"Stati Uniti","rockstargames_company_info_zh":"Cina","rockstargames_downloads_collections_download_text":"Scarica {item} {collection}","rockstargames_downloads_dimensions_label":"{width} per {height} pixel.","rockstargames_downloads_go_back":"Torna indietro","email_settings_cta":"Aggiorna le preferenze","unsubscribe_error_description":"Questo URL potrebbe non essere valido. Puoi apportare modifiche alle preferenze relative alle email di Rockstar Games nella pagina delle impostazioni dell’account.","unsubscribe_error_header":"Errore nel tentativo di revoca di iscrizione","unsubscribe_info_description":"Non riceverai più email promozionali da Rockstar Games. Puoi riabilitare le email o apportare altre modifiche alle preferenze relative alle email di Rockstar Games nella pagina delle impostazioni dell’account.","unsubscribe_info_header":"Hai già revocato l’iscrizione","unsubscribe_success_description":"Non riceverai più email promozionali da Rockstar Games. Puoi riabilitare le email o apportare altre modifiche alle preferenze relative alle email di Rockstar Games nella pagina delle impostazioni dell’account.","unsubscribe_success_header":"Iscrizione revocata con successo"},"jp":{"footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"London","footer_locations_new_york":"New York","footer_locations_paris":"Paris","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"コミュニティガイドライン","rockstargames_company_info_br":"ブラジル","rockstargames_company_info_cz":"チェコ","rockstargames_company_info_de":"ドイツ","rockstargames_company_info_display_for_country":"{country}のページを表示する","rockstargames_company_info_es":"スペイン","rockstargames_company_info_fr":"フランス","rockstargames_company_info_it":"イタリア","rockstargames_company_info_jp":"日本","rockstargames_company_info_kr":"韓国","rockstargames_company_info_mx":"メキシコ","rockstargames_company_info_nl":"オランダ","rockstargames_company_info_pl":"ポーランド","rockstargames_company_info_ru":"ロシア連邦","rockstargames_company_info_sa":"サウジアラビア","rockstargames_company_info_tw":"台湾","rockstargames_company_info_us":"アメリカ","rockstargames_company_info_zh":"中国","rockstargames_downloads_collections_download_text":"ダウンロード {item} {collection}","rockstargames_downloads_dimensions_label":"{width}×{height}ピクセル","rockstargames_downloads_go_back":"戻る","email_settings_cta":"設定を更新","unsubscribe_error_description":"このURLは無効です。アカウント設定のページでロックスター・ゲームスのメール受信設定を変更できます。","unsubscribe_error_header":"登録解除時にエラー","unsubscribe_info_description":"今後はロックスター・ゲームスからマーケティングのメールを受信しません。アカウント設定のページでロックスター・ゲームスのメール受信設定をさらに変更したり、再登録ができます。","unsubscribe_info_header":"登録解除済みです","unsubscribe_success_description":"今後はロックスター・ゲームスからマーケティングのメールを受信しません。アカウント設定のページでロックスター・ゲームスのメール受信設定をさらに変更したり、再登録ができます。","unsubscribe_success_header":"登録解除済みです"},"kr":{"footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"London","footer_locations_new_york":"New York","footer_locations_paris":"Paris","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"커뮤니티 가이드라인","rockstargames_company_info_br":"브라질","rockstargames_company_info_cz":"체코 공화국","rockstargames_company_info_de":"독일","rockstargames_company_info_display_for_country":"페이지 내용 표시 - {country}","rockstargames_company_info_es":"스페인","rockstargames_company_info_fr":"프랑스","rockstargames_company_info_it":"이탈리아","rockstargames_company_info_jp":"일본","rockstargames_company_info_kr":"대한민국","rockstargames_company_info_mx":"멕시코","rockstargames_company_info_nl":"네덜란드","rockstargames_company_info_pl":"폴란드","rockstargames_company_info_ru":"러시아 연방","rockstargames_company_info_sa":"사우디 아라비아","rockstargames_company_info_tw":"대만","rockstargames_company_info_us":"미국","rockstargames_company_info_zh":"중국","rockstargames_downloads_collections_download_text":"{collection} {item} 다운로드","rockstargames_downloads_dimensions_label":"{width} x {height} 픽셀입니다.","rockstargames_downloads_go_back":"뒤로가기","email_settings_cta":"설정 변경","unsubscribe_error_description":"이 URL은 유효하지 않습니다. 계정 설정 페이지에서 Rockstar Games 이메일 설정을 변경할 수 있습니다.","unsubscribe_error_header":"구독 취소 오류","unsubscribe_info_description":"더 이상 Rockstar Games로부터 마케팅 이메일을 수신하지 않습니다. 다시 구독하거나 계정 설정 페이지에서 Rockstar Games 이메일 설정을 변경하십시오.","unsubscribe_info_header":"이미 구독 취소를 하였습니다","unsubscribe_success_description":"더 이상 Rockstar Games로부터 마케팅 이메일을 수신하지 않습니다. 계정 설정 페이지에서 다시 구독하거나 Rockstar Games 이메일 설정을 변경하십시오.","unsubscribe_success_header":"구독 취소 완료"},"pl":{"footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogota","footer_locations_london":"Londyn","footer_locations_new_york":"Nowy Jork","footer_locations_paris":"Paryż","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"Zachowuj się grzecznie!","community_guidelines_hero_title":"Regulamin społeczności","rockstargames_company_info_br":"Brazylia","rockstargames_company_info_cz":"Czechy","rockstargames_company_info_de":"Niemcy","rockstargames_company_info_display_for_country":"Pokaż informacje dla:","rockstargames_company_info_es":"Hiszpania","rockstargames_company_info_fr":"Francja","rockstargames_company_info_it":"Włochy","rockstargames_company_info_jp":"Japonia","rockstargames_company_info_kr":"Korea Południowa","rockstargames_company_info_mx":"Meksyk","rockstargames_company_info_nl":"Holandia","rockstargames_company_info_pl":"Polska","rockstargames_company_info_ru":"Rosja","rockstargames_company_info_sa":"Arabia Saudyjska","rockstargames_company_info_tw":"Tajwan","rockstargames_company_info_us":"Stany Zjednoczone","rockstargames_company_info_zh":"Chiny","rockstargames_downloads_collections_download_text":"Pobierz: {item} {collection}","rockstargames_downloads_dimensions_label":"{width} na {height} pikseli.","rockstargames_downloads_go_back":"Wróć","email_settings_cta":"Aktualizuj swoje preferencje","unsubscribe_error_description":"Odnośnik może być nieprawidłowy. Możesz zmienić swoje preferencje mailingowe w menu ustawień konta Rockstar Games.","unsubscribe_error_header":"Błąd podczas rezygnacji","unsubscribe_info_description":"Nie będziesz już otrzymywać wiadomości promocyjnych od Rockstar Games. Możesz zapisać się ponownie lub dokonać innych zmian preferencji mailingowych w menu ustawień konta Rockstar Games.","unsubscribe_info_header":"Subskrypcja jest już nieaktywna","unsubscribe_success_description":"Nie będziesz już otrzymywać wiadomości promocyjnych od Rockstar Games. Zapisz się ponownie lub dokonaj innych zmian preferencji mailingowych w menu ustawień konta Rockstar Games.","unsubscribe_success_header":"Zrezygnowano z subskrypcji"},"br":{"footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"Londres","footer_locations_new_york":"Nova York","footer_locations_paris":"Paris","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Diretrizes da Comunidade","rockstargames_company_info_br":"Brasil","rockstargames_company_info_cz":"República Tcheca","rockstargames_company_info_de":"Alemanha","rockstargames_company_info_display_for_country":"Exibir informações da página para {country}","rockstargames_company_info_es":"Espanha","rockstargames_company_info_fr":"França","rockstargames_company_info_it":"Itália","rockstargames_company_info_jp":"Japão","rockstargames_company_info_kr":"Coreia do Sul","rockstargames_company_info_mx":"México","rockstargames_company_info_nl":"Países Baixos","rockstargames_company_info_pl":"Polônia","rockstargames_company_info_ru":"Federação da Rússia","rockstargames_company_info_sa":"Arábia Saudita","rockstargames_company_info_tw":"Taiwan","rockstargames_company_info_us":"Estados Unidos","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"Baixar {collection} de {item}","rockstargames_downloads_dimensions_label":"{width} x {height} pixels.","rockstargames_downloads_go_back":"Voltar","email_settings_cta":"Atualizar preferências","unsubscribe_error_description":"Esta URL pode ser inválida. Você pode aplicar mudanças às suas preferências de e-mail da Rockstar Games na página de Configurações da conta.","unsubscribe_error_header":"Erro ao cancelar inscrição","unsubscribe_info_description":"Você não receberá mais e-mails de marketing da Rockstar Games. Escolha receber e-mails de marketing novamente ou aplique mudanças adicionais às suas preferências de e-mail da Rockstar Games na página de Configurações da conta.","unsubscribe_info_header":"Você já cancelou a inscrição","unsubscribe_success_description":"Você não receberá mais e-mails de marketing da Rockstar Games. Escolha receber e-mails de marketing novamente ou aplique mudanças adicionais às suas preferências de e-mail da Rockstar Games na página de Configurações da conta.","unsubscribe_success_header":"Inscrição cancelada"},"ru":{"footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Богота","footer_locations_london":"Лондон","footer_locations_new_york":"Нью-Йорк","footer_locations_paris":"Париж","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Правила сообщества","rockstargames_company_info_br":"Бразилии","rockstargames_company_info_cz":"Чехии","rockstargames_company_info_de":"Германии","rockstargames_company_info_display_for_country":"Показать содержимое страницы для {country}","rockstargames_company_info_es":"Испании","rockstargames_company_info_fr":"Франции","rockstargames_company_info_it":"Италии","rockstargames_company_info_jp":"Японии","rockstargames_company_info_kr":"Южной Кореи","rockstargames_company_info_mx":"Мексики","rockstargames_company_info_nl":"Нидерландов","rockstargames_company_info_pl":"Польши","rockstargames_company_info_ru":"России","rockstargames_company_info_sa":"Саудовской Аравии","rockstargames_company_info_tw":"Тайваня","rockstargames_company_info_us":"США","rockstargames_company_info_zh":"Китая","rockstargames_downloads_collections_download_text":"Загрузить: «{item}» из коллекции «{collection}».","rockstargames_downloads_dimensions_label":"{width} на {height} пикселей.","rockstargames_downloads_go_back":"Вернуться","email_settings_cta":"Изменить настройки","unsubscribe_error_description":"Возможно, этот адрес недействителен. Вы можете изменить настройки электронной почты Rockstar Games на странице настроек учетной записи.","unsubscribe_error_header":"Ошибка при отмене подписки","unsubscribe_info_description":"Вы больше не будете получать никаких рекламных писем от Rockstar Games. Подпишитесь заново или продолжайте вносить изменения в настройки электронной почты Rockstar Games на странице настроек учетной записи.","unsubscribe_info_header":"Вы уже отменили подписку","unsubscribe_success_description":"Вы больше не будете получать никаких рекламных писем от Rockstar Games. Подпишитесь заново или продолжайте вносить изменения в настройки электронной почты Rockstar Games на странице настроек учетной записи.","unsubscribe_success_header":"Подписка отменена"},"hans":{"footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"波哥大","footer_locations_london":"伦敦","footer_locations_new_york":"纽约","footer_locations_paris":"巴黎","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"说声对不起，做个好人！","community_guidelines_hero_title":"社区准则","rockstargames_company_info_br":"巴西","rockstargames_company_info_cz":"捷克","rockstargames_company_info_de":"德国","rockstargames_company_info_display_for_country":"显示{country}的页面信息","rockstargames_company_info_es":"西班牙","rockstargames_company_info_fr":"法国","rockstargames_company_info_it":"意大利","rockstargames_company_info_jp":"日本","rockstargames_company_info_kr":"韩国","rockstargames_company_info_mx":"墨西哥","rockstargames_company_info_nl":"荷兰","rockstargames_company_info_pl":"波兰","rockstargames_company_info_ru":"俄罗斯联邦","rockstargames_company_info_sa":"沙特阿拉伯","rockstargames_company_info_tw":"台湾地区","rockstargames_company_info_us":"美国","rockstargames_company_info_zh":"中国","rockstargames_downloads_collections_download_text":"下载 {item} 的 {collection}","rockstargames_downloads_dimensions_label":"{width} X {height} 像素","rockstargames_downloads_go_back":"返回","email_settings_cta":"更新偏好设置","unsubscribe_error_description":"此网址可能无效。您可以在账户设置页面更改您的 Rockstar Games 邮件偏好设置。","unsubscribe_error_header":"取消订阅出错","unsubscribe_info_description":"您将不会收到更多 Rockstar Games 营销邮件。您可以在账户设置页面重新订阅或更改您的 Rockstar Games 邮件偏好设置。","unsubscribe_info_header":"您已经取消订阅","unsubscribe_success_description":"您将不会收到更多 Rockstar Games 营销邮件。您可以在账户设置页面重新订阅或更改您的 Rockstar Games 邮件偏好设置。","unsubscribe_success_header":"取消订阅成功"},"tw":{"footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"波哥大","footer_locations_london":"倫敦","footer_locations_new_york":"紐約","footer_locations_paris":"巴黎","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"敢於道歉，友善待人！","community_guidelines_hero_title":"社群守則","rockstargames_company_info_br":"巴西","rockstargames_company_info_cz":"捷克共和國","rockstargames_company_info_de":"德國","rockstargames_company_info_display_for_country":"顯示頁面資訊：{country}","rockstargames_company_info_es":"西班牙","rockstargames_company_info_fr":"法國","rockstargames_company_info_it":"義大利","rockstargames_company_info_jp":"日本","rockstargames_company_info_kr":"南韓","rockstargames_company_info_mx":"墨西哥","rockstargames_company_info_nl":"荷蘭","rockstargames_company_info_pl":"波蘭","rockstargames_company_info_ru":"俄羅斯聯邦","rockstargames_company_info_sa":"沙烏地阿拉伯","rockstargames_company_info_tw":"台灣","rockstargames_company_info_us":"美國","rockstargames_company_info_zh":"中國","rockstargames_downloads_collections_download_text":"下載「{item}」的「{collection}」","rockstargames_downloads_dimensions_label":"像素：{width} x {height}。","rockstargames_downloads_go_back":"返回","email_settings_cta":"更新偏好設定","unsubscribe_error_description":"這個網址可能無效。您可以在帳戶設定頁面變更您的 Rockstar Games 電子郵件偏好設定。","unsubscribe_error_header":"取消訂閱錯誤","unsubscribe_info_description":"您將不會收到任何其他來自 Rockstar Games 的行銷電子郵件。在帳戶設定頁面重新訂閱或為您的 Rockstar Games 電子郵件偏好設定進行其他變更。","unsubscribe_info_header":"您已經取消訂閱。","unsubscribe_success_description":"您將不會收到任何其他來自 Rockstar Games 的行銷電子郵件。在帳戶設定頁面重新訂閱或為您的 Rockstar Games 電子郵件偏好設定進行其他變更。","unsubscribe_success_header":"取消訂閱成功"}}'));
      var he = i(5752),
        ye = i.n(he);
      const Ne = (0, D.withIntl)((0, I.withTranslations)((e => {
        let {
          t: a
        } = e;
        const {
          setBreadcrumb: i
        } = (0, $.useRockstarLocalState)(), {
          data: n
        } = (0, V.useQuery)(ye(), {
          autoSetLoading: !0
        }), s = n?.games ?? null;
        return (0, o.useEffect)((() => (i([{
          href: "/games",
          title: a("Games")
        }]), () => i())), [s]), s ? (0, h.jsxs)(h.Fragment, {
          children: [!1, (0, h.jsx)(h.Fragment, {
            children: (0, h.jsx)("div", {
              className: "rockstargames-sites-rockstargamese688ae11bba38a9723018b024df142ee",
              "data-testid": "gamesBody",
              children: s.results.map((e => (0, h.jsx)(k.GameCard.Link, {
                game: e
              }, e.title_slug)))
            })
          })]
        }) : null
      })), be);
      var we = i(66296),
        Se = i.n(we);
      const xe = e => {
          let {
            game: a,
            t: i
          } = e;
          const {
            purchases: n,
            digital_purchases: s
          } = a, t = n.length + s.length;
          if (0 === t) return null;
          const r = (0, h.jsx)(h.Fragment, {
              children: s.map((e => (0, h.jsx)(k.A, {
                target: "_blank",
                to: `/game-digital-purchase?game=${a.id}&platform=${e.platform_id}`,
                children: `${e.platform_name} - Digital`
              }, e.platform_name)))
            }),
            o = (0, h.jsx)(h.Fragment, {
              children: n.map((e => (0, h.jsx)(k.A, {
                target: "_blank",
                to: e.href,
                children: `${e.platform.name} - Physical`
              }, e.href)))
            });
          if (t > 1) return (0, h.jsxs)(k.Dropdown, {
            title: i("Buy Now"),
            children: [r, o]
          });
          const c = n.length ? n[0] : s[0];
          return c?.href ? (0, h.jsx)(k.Button, {
            to: c.href,
            context: "secondary",
            target: "_blank",
            "data-gtm-category": "Games",
            "data-gtm-action": "Buy Now",
            "data-gtm-label": a.title,
            children: i("Buy Now")
          }) : null
        },
        je = e => {
          let {
            game: a
          } = e;
          return (0, h.jsx)("h2", {
            className: "rockstargames-sites-rockstargamesd999c131d523164f20bad2d6c322c7b0",
            children: a.title
          })
        },
        Fe = e => {
          let {
            game: a,
            t: i
          } = e;
          const n = [],
            s = [],
            t = ["libertycitystories", "vicecitystories"].includes(a.title_slug);
          return a.developers.map((e => {
            s.push(e.title)
          })), a.platforms.map((e => {
            n.push(e.name)
          })), (0, h.jsx)(Ge, {
            title: i("Specifications"),
            children: (0, h.jsxs)("div", {
              className: "rockstargames-sites-rockstargamesa3be2ad0c6089bcc99dc39a07f1c8556",
              children: [(0, h.jsx)(De, {
                title: i("Developer"),
                children: s.join(", ")
              }), (0, h.jsx)(De, {
                title: i("Platform"),
                children: n.join(", ")
              }), (0, h.jsx)(De, {
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
                  }), t ? (0, h.jsx)("div", {
                    className: "rockstargames-sites-rockstargamesf6106c12ee39ddbd58cb459de26ba30f"
                  }) : ""]
                })]
              })]
            })
          })
        },
        Ve = e => {
          let {
            screens: a,
            t: i
          } = e;
          return (0, h.jsx)(Ge, {
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
        Ie = e => {
          let {
            game: a,
            t: i
          } = e;
          const [n, s] = (0, o.useState)(!1), t = "<br>", r = a.description.includes(t);
          return (0, h.jsx)(Ge, {
            className: "rockstargames-sites-rockstargamesbb3bcfffbb0324212ca756bbcf0b331d",
            title: i("Game Description"),
            children: r ? (0, h.jsxs)(h.Fragment, {
              children: [(0, h.jsx)("p", {
                children: a.description.split(t)[0]
              }), (0, h.jsx)("div", {
                "aria-live": "polite",
                children: n && (0, h.jsx)("p", {
                  children: a.description.split(t).slice(1)
                })
              }), " ", (0, h.jsx)(k.Button, {
                context: "secondary",
                onClick: () => s(!n),
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
        Ae = e => {
          let {
            game: a,
            posts: i,
            t: n
          } = e;
          return (0, h.jsxs)(Ge, {
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
          return (0, h.jsxs)(Ge, {
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
        De = e => {
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
        Ge = e => {
          let {
            title: a,
            className: i = "",
            children: n,
            style: s = {}
          } = e;
          return (0, h.jsxs)("section", {
            className: i,
            style: s,
            children: [a ? (0, h.jsx)("h4", {
              className: "rockstargames-sites-rockstargamesd3ae0f7bea78620d460ed1de4bfb1546",
              children: a
            }) : "", n]
          })
        },
        Re = (0, I.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            setBreadcrumb: i,
            setTitle: n
          } = (0, $.useRockstarLocalState)(), s = (0, M.useParams)(), {
            data: t
          } = (0, V.useQuery)(Se(), {
            autoSetLoading: !0,
            variables: {
              titleSlug: s.gameTitlelug
            }
          }), r = t?.game ?? null;
          return (0, o.useEffect)((() => (r && n(r.title), i([{
            href: "/games",
            title: a("Games")
          }]), () => {
            i()
          })), [r]), r ? (0, h.jsxs)("div", {
            className: "rockstargames-sites-rockstargamesf3214996ae18b839cbe8d74436e33569",
            children: [(0, h.jsxs)("div", {
              className: "rockstargames-sites-rockstargamesad748c74afaaac7ae3742ea01deb9327",
              children: [(0, h.jsxs)("div", {
                className: "rockstargames-sites-rockstargamesb12200c67941853e210bfa8ec2a2151b",
                children: [(0, h.jsx)(je, {
                  game: r,
                  t: a
                }), (0, h.jsxs)("div", {
                  className: "rockstargames-sites-rockstargamese117d55b425e388a7f3ef0036fad9045",
                  children: [(0, h.jsx)(xe, {
                    game: r,
                    t: a
                  }), r.has_official_site && (0, h.jsx)(k.Button, {
                    to: r.url_official,
                    context: "secondary",
                    target: "_blank",
                    "data-gtm-category": "Games",
                    "data-gtm-action": "Official Site Click-through",
                    "data-gtm-label": r.title,
                    children: a("Official Site")
                  })]
                })]
              }), (0, h.jsx)(k.GameCard.Art, {
                title: r.title,
                fob640: r.fob_1280,
                titleSlug: r.title_slug
              })]
            }), (0, h.jsxs)("div", {
              className: "rockstargames-sites-rockstargamesce487783cab9e36402d70d80e6d9d778",
              children: [(0, h.jsx)(Ie, {
                game: r,
                t: a
              }), r.tags.length && r.tags[0].videos.length ? (0, h.jsx)(Te, {
                game: r,
                videos: r.tags[0].videos,
                t: a
              }) : "", r.tags.length && r.tags[0].posts.length ? (0, h.jsx)(Ae, {
                game: r,
                posts: r.tags[0].posts,
                t: a
              }) : "", r.screens.length ? (0, h.jsx)(Ve, {
                screens: r.screens,
                t: a
              }) : "", (0, h.jsx)(Fe, {
                game: r,
                t: a
              })]
            })]
          }) : null
        }));
      var Ee = i(55120),
        Ce = i(79176),
        $e = i.n(Ce);
      const Me = "rockstargames-sites-rockstargamesfb53bedab2c55d1a3c602f6d22cbf878",
        ze = e => {
          let {
            loading: a,
            searchResponse: i,
            searchTerm: n,
            activeTab: s,
            t
          } = e;
          const [r, o] = (0, M.useSearchParams)();
          let c;
          switch (s) {
            case "posts":
              c = i.posts.results.map((e => (0, h.jsx)(k.NewswireCard, {
                post: e,
                noSpecialOrder: !0
              }, e.id)));
              break;
            case "games":
              c = i.games.results.map((e => (0, h.jsx)(k.GameCard.Link, {
                game: e
              }, e.id)));
              break;
            case "videos":
              c = i.videos.results.map((e => (0, h.jsx)(k.VideoCard.Link, {
                video: e
              }, e.id)));
              break;
            default:
              c = null
          }
          return (0, h.jsxs)(h.Fragment, {
            children: [a ? "" : (0, h.jsx)("section", {
              className: "rockstargames-sites-rockstargamesb6a41ef752e979cced54d95e69679ae9",
              children: (0, h.jsx)("div", {
                className: "rockstargames-sites-rockstargamesc0e4a01d8eeef3f28aaaeea0249d53e8",
                children: c
              })
            }), i[s]?.paging ? (0, h.jsx)("section", {
              className: "rockstargames-sites-rockstargamesc024862ad35278cedeff9669a4045d22",
              children: (0, h.jsx)(k.Paging, {
                data: i[s].paging,
                onPageUpdate: e => {
                  o({
                    ...Object.fromEntries([...r]),
                    page: e
                  }), window.scrollTo(0, 0)
                }
              })
            }) : ""]
          })
        },
        Le = (0, I.withTranslations)((e => {
          let {
            t: a
          } = e;
          const i = (0, D.useIntl)(),
            {
              state: {
                search: n
              },
              setSearch: s,
              setTitle: t
            } = (0, $.useRockstarLocalState)(),
            r = (0, I.useQueryParams)(),
            [c, l] = (0, o.useState)(null),
            [d, m] = (0, o.useState)({}),
            [u, g] = (0, o.useState)(r.get("tab") ?? "games"),
            {
              data: f = {},
              loading: _
            } = (0, V.useQuery)($e(), {
              variables: d,
              skip: !Object.entries(d).length || !d.q,
              autoSetLoading: !0
            });
          return (0, o.useEffect)((() => {
            const e = {
              q: r.get("q"),
              page: Number(r.get("page") ?? 1),
              withGames: !0,
              withPosts: !0,
              withVideos: !0
            };
            m(e), s(r.get("q"))
          }), [r.get("q"), r.get("page"), r.get("tab"), u]), (0, o.useEffect)((() => {
            const e = Object.entries(f).find((e => {
              let [, a] = e;
              return a?.paging?.count > 0
            }))?.[0];
            g(r.get("tab") ?? e ?? "games")
          }), [f, r.get("tab")]), (0, o.useEffect)((() => {
            void 0 !== f?.games?.paging?.count && (l((f?.games?.paging?.count ?? 0) + (f?.videos?.paging?.count ?? 0) + (f?.posts?.paging?.count ?? 0)), t(f?.meta?.title.replace("%s", n)))
          }), [f, u]), Object.entries(d).length ? d.q ? null === c || _ ? null : (0, h.jsx)(h.Fragment, {
            children: f[u].results.length ? (0, h.jsxs)("div", {
              className: Me,
              children: [(0, h.jsx)("section", {
                className: "rockstargames-sites-rockstargamesb54a20d6c2a28171fc3b24fa6d2df86f",
                children: (0, h.jsx)("h4", {
                  children: (0, h.jsx)(D.FormattedMessage, {
                    ...Ee.sitesRockstar.rsg_total_results_message,
                    values: {
                      Tab: (0, h.jsx)("span", {
                        className: "rockstargames-sites-rockstargamesc396a7460982460f718f495155de8358",
                        children: u
                      }),
                      Query: (0, h.jsx)("span", {
                        children: r.get("q")
                      })
                    }
                  })
                })
              }), _ ? "" : (0, h.jsx)(ze, {
                searchResponse: f,
                searchTerm: n,
                activeTab: u,
                t: a
              })]
            }) : (0, h.jsx)("div", {
              className: Me,
              children: (0, h.jsxs)("section", {
                className: "rockstargames-sites-rockstargamesb408f6bebfeb1b3462c8dabcb36e0d9b",
                children: [(0, h.jsx)("div", {
                  className: "rockstargames-sites-rockstargamesc6f00c8492b7f5d1a7ae1cc143faa1ae"
                }), (0, h.jsx)("h4", {
                  children: i.formatMessage(Ee.sitesRockstar.rsg_no_results)
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
        Be = (0, D.defineMessages)({
          community_guidelines_hero_aria_label: {
            id: "community_guidelines_hero_aria_label",
            defaultMessage: "Say Sorry, Be Nice!"
          },
          community_guidelines_hero_title: {
            id: "community_guidelines_hero_title",
            defaultMessage: "Community Guidelines"
          }
        });
      var Pe = i(33309),
        Oe = i.n(Pe);
      const qe = (0, D.defineMessages)({
          rockstargames_company_info_us: {
            id: "rockstargames_company_info_us",
            defaultMessage: "United States"
          },
          rockstargames_company_info_br: {
            id: "rockstargames_company_info_br",
            defaultMessage: "Brazil"
          },
          rockstargames_company_info_cz: {
            id: "rockstargames_company_info_cz",
            defaultMessage: "Czech Republic"
          },
          rockstargames_company_info_de: {
            id: "rockstargames_company_info_de",
            defaultMessage: "Germany"
          },
          rockstargames_company_info_es: {
            id: "rockstargames_company_info_es",
            defaultMessage: "Spain"
          },
          rockstargames_company_info_fr: {
            id: "rockstargames_company_info_fr",
            defaultMessage: "France"
          },
          rockstargames_company_info_it: {
            id: "rockstargames_company_info_it",
            defaultMessage: "Italy"
          },
          rockstargames_company_info_jp: {
            id: "rockstargames_company_info_jp",
            defaultMessage: "Japan"
          },
          rockstargames_company_info_kr: {
            id: "rockstargames_company_info_kr",
            defaultMessage: "South Korea"
          },
          rockstargames_company_info_mx: {
            id: "rockstargames_company_info_mx",
            defaultMessage: "Mexico"
          },
          rockstargames_company_info_nl: {
            id: "rockstargames_company_info_nl",
            defaultMessage: "Netherlands"
          },
          rockstargames_company_info_pl: {
            id: "rockstargames_company_info_pl",
            defaultMessage: "Poland"
          },
          rockstargames_company_info_ru: {
            id: "rockstargames_company_info_ru",
            defaultMessage: "Russian Federation"
          },
          rockstargames_company_info_sa: {
            id: "rockstargames_company_info_sa",
            defaultMessage: "Saudi Arabia"
          },
          rockstargames_company_info_tw: {
            id: "rockstargames_company_info_tw",
            defaultMessage: "Taiwan"
          },
          rockstargames_company_info_zh: {
            id: "rockstargames_company_info_zh",
            defaultMessage: "China"
          },
          rockstargames_company_info_display_for_country: {
            id: "rockstargames_company_info_display_for_country",
            defaultMessage: "Display page information for {country}"
          }
        }),
        Ue = {
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
      var He = i(79036),
        Qe = i.n(He);
      const Ye = (0, k.withSearchbarErrorBoundary)((e => {
          let {
            CookieSettingsModal: a,
            noCountrySelector: i,
            localeOverride: n,
            titleKey: s,
            jsonType: t
          } = e;
          const r = (0, D.useIntl)(),
            c = (0, M.useNavigate)(),
            l = (0, M.useLocation)(),
            d = (0, I.useLocale)(),
            m = (0, I.useQueryParams)(),
            u = (0, o.useRef)(),
            g = (e, a) => {
              const i = a ?? e.target.hash,
                n = document.getElementById(i.replace("#", "")),
                s = document.getElementsByName(i.replace("#", ""))?.[0],
                t = n ?? s ?? null,
                r = m.get("country");
              if (e) {
                const a = `${l.pathname}${m.get("country")?`?country=${r}`:""}${i}`;
                c(a), e.preventDefault()
              }
              t && window.scroll(0, t.offsetTop - u.current.getBoundingClientRect().height - 60)
            },
            [f, _] = (0, o.useState)({}),
            {
              data: v,
              loading: p
            } = (0, V.useQuery)(Qe(), {
              variables: f,
              skip: !Object.entries(f).length,
              autoSetLoading: !0
            });
          (0, o.useEffect)((() => {
            const e = m.get("country") ?? m.get("locale") ?? null,
              a = void 0 === i,
              s = a && null !== e ? e : a && d.split("_").length > 1 ? "hans" === d.split("_")[1] ? d.split("_")[0] : d.split("_")[1] : d,
              r = n || s || "us";
            _({
              jsonType: t,
              jsonLocale: r,
              metaUrl: `/${t}`,
              locale: r
            })
          }), [m.get("country"), m.get("locale"), n]), (0, o.useEffect)((() => {
            document.querySelectorAll(".scrollToLink").forEach((e => {
              (e => {
                if (e) {
                  const a = m.get("country"),
                    i = e.href.split("#")[1],
                    n = document.getElementsByTagName("base")[0]?.getAttribute("href");
                  e.setAttribute("href", `${n}${l.pathname.replace("/","")}${null!==a?`?country=${a}`:""}#${i}`)
                }
              })(e), e.addEventListener("click", (e => {
                g(e, !1)
              }))
            })), "" !== l.hash && setTimeout((() => {
              g(!1, l.hash)
            }), 10)
          }), [v]);
          const {
            content: b
          } = v?.companyInfo ?? "", {
            title: y
          } = v?.meta ?? s ?? "";
          return (0, h.jsxs)("div", {
            className: Ue.companyInfo,
            "data-locale": f.jsonLocale,
            "data-page": t,
            children: [(0, h.jsxs)("section", {
              className: Ue.top,
              ref: u,
              children: [(0, h.jsx)("h1", {
                children: y
              }), "undefined" !== i && i ? "" : (0, h.jsx)("nav", {
                className: Ue.nav,
                children: ["us", "br", "cz", "de", "es", "fr", "it", "jp", "kr", "mx", "nl", "pl", "ru", "sa", "tw", "zh"].map(((e, a) => {
                  const i = r.formatMessage(qe.rockstargames_company_info_display_for_country, {
                    country: r.formatMessage(qe[`rockstargames_company_info_${e}`])
                  });
                  return (0, h.jsx)(k.A, {
                    to: `${l.pathname}?country=${e}`,
                    className: Ue[e],
                    title: i,
                    children: (0, h.jsx)(k.VisuallyHidden, {
                      children: i
                    })
                  }, a)
                }))
              })]
            }), v && !p ? (0, h.jsx)("section", {
              className: Ue.content,
              "data-json-type": t,
              children: "cookies" === t && v ? (0, h.jsx)(Oe(), {
                renderInWrapper: !1,
                components: {
                  CookieSettingsModal: a
                },
                jsx: b,
                onError: e => {
                  console.error("jsx error in companyinfo", e)
                }
              }) : (0, h.jsx)("span", {
                dangerouslySetInnerHTML: {
                  __html: b
                }
              })
            }) : ""]
          })
        })),
        Ke = (0, D.withIntl)((0, I.withLocale)((e => {
          let {
            locale: a
          } = e;
          const n = (0, D.useIntl)();
          return (0, h.jsxs)(h.Fragment, {
            children: [(0, h.jsx)("img", {
              src: i(47520),
              className: "rockstargames-sites-rockstargamesec30ec5e27e1ebb1542c6146f14b2e76",
              "aria-label": n.formatMessage(Be.community_guidelines_hero_aria_label)
            }), (0, h.jsx)(Ye, {
              localeOverride: a,
              jsonType: "community-guidelines",
              titleKey: "Community Guidelines"
            })]
          })
        })), be),
        Xe = () => (0, h.jsx)(Ye, {
          jsonType: "corpinfo",
          titleKey: "Corporate Information",
          noCountrySelector: !0
        }),
        Je = () => (0, h.jsx)(Ye, {
          jsonType: "legal",
          titleKey: "Terms of Service"
        }),
        We = () => (0, h.jsx)(Ye, {
          jsonType: "careers-privacy",
          titleKey: "Privacy Policy"
        }),
        Ze = () => (0, h.jsx)(Ye, {
          jsonType: "privacy",
          titleKey: "Privacy Policy"
        }),
        ea = e => {
          let {
            t: a
          } = e;
          return (0, h.jsx)(k.Button, {
            className: Ue.cookieSettingsButton,
            onClick: () => window.OneTrust?.ToggleInfoDisplay(),
            children: a("gdpr-settings-button-title")
          })
        },
        aa = () => (0, h.jsx)(Ye, {
          jsonType: "cookies",
          titleKey: "Cookie Policy",
          CookieSettingsModal: (0, I.withTranslations)(ea)
        }),
        ia = () => (0, h.jsx)(Ye, {
          jsonType: "ccpa",
          titleKey: "ccpa-title",
          noCountrySelector: !0
        }),
        na = {
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
      var sa = i(74976),
        ta = i.n(sa);
      const ra = (0, I.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            data: i
          } = (0, V.useQuery)(ta(), {
            autoSetLoading: !0
          });
          if (!i) return null;
          const {
            manuals: n
          } = i;
          return (0, h.jsxs)("div", {
            className: na.manuals,
            children: [(0, h.jsx)("h2", {
              children: a("Manuals")
            }), (0, h.jsx)("div", {
              className: na.list,
              children: n.map((e => (0, h.jsxs)("div", {
                className: na.item,
                children: [(0, h.jsx)("div", {
                  className: na.img,
                  style: {
                    backgroundImage: `url(${e.game.fob_640})`
                  }
                }), (0, h.jsx)(k.Dropdown, {
                  title: e.game.title,
                  className: na.dropdown,
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
        oa = e => {
          let {
            detail: a
          } = e;
          const {
            sanitize: i
          } = Q();
          return (0, h.jsxs)("div", {
            className: na.detail,
            children: [(0, h.jsx)("div", {
              dangerouslySetInnerHTML: {
                __html: i(a.content)
              }
            }), a.album_cover ? (0, h.jsx)("div", {
              className: [na.album, na[a.album_cover]].join(" ")
            }) : "", (0, h.jsx)(k.A, {
              to: "/",
              children: (0, h.jsx)("div", {
                className: na.rockstar
              })
            })]
          })
        },
        ca = (0, I.withTranslations)((e => {
          let {
            stations: a,
            gameId: i,
            t: n
          } = e;
          const {
            sanitize: s
          } = Q();
          return (0, h.jsxs)(h.Fragment, {
            children: [(0, h.jsx)("h1", {
              children: n("Music Credits")
            }), a && 55 === a[0].game_id ? (0, h.jsxs)("div", {
              className: na.warriorsCredit,
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
              className: [na.list, a && 55 === a[0].game_id ? na.warriors : ""].join(" "),
              children: a && a.map(((e, t) => (0, h.jsxs)("div", {
                className: na.station,
                children: [55 !== e.game_id ? (0, h.jsx)("div", {
                  className: [na.logo, na[e.slug]].join(" ")
                }) : (0, h.jsx)("h3", {
                  children: e.title
                }), e.music_credits && e.music_credits.map((e => (0, h.jsxs)("div", {
                  className: na.credit,
                  children: [(0, h.jsx)("h5", {
                    dangerouslySetInnerHTML: {
                      __html: s(e.title)
                    }
                  }), (0, h.jsx)("p", {
                    children: e.written_by
                  }), (0, h.jsx)("p", {
                    children: e.published_by
                  }), (0, h.jsx)("p", {
                    children: e.courtesy_of
                  }), e?.music_detail ? (0, h.jsx)("p", {
                    className: na.additional,
                    children: (0, h.jsx)(k.A, {
                      to: `music?gameId=${i}&stationId=${a[t].id}&songId=${e.id}`,
                      children: n("Lyrics/Info")
                    })
                  }) : ""]
                }, e.title)))]
              }, e.id)))
            })]
          })
        }));
      var la = i(73772),
        da = i.n(la);
      const ma = () => {
          const e = (0, I.useQueryParams)(),
            a = Number(e.get("gameId")),
            i = Number(e.get("songId")),
            n = Number(e.get("stationId"));
          let s = !1;
          const {
            data: t
          } = (0, V.useQuery)(da(), {
            variables: {
              gameId: a
            },
            autoSetLoading: !0
          });
          if (!t) return null;
          const {
            musicStations: r
          } = t;
          return Object.keys(r).length, r.map((e => {
            e.id === n && e.music_credits.map((e => {
              e.id === i && (s = e.music_detail)
            }))
          })), (0, h.jsxs)("div", {
            className: [na.music, 25 === a ? na.gtaiv : 26 === a ? na.tlad : 32 === a ? na.bogt : 28 === a ? na.eflc : 34 === a ? na.vcs : ""].join(" "),
            children: [(0, h.jsx)("div", {
              className: [na.gameLogo, 26 === a ? na.tlad : 32 === a ? na.bogt : 28 === a ? na.eflc : 25 === a ? na.gtaiv : 34 === a ? na.vcs : 55 === a ? na.warriors : ""].join(" ")
            }), a && r ? n && i && s ? (0, h.jsx)(oa, {
              detail: s
            }) : (0, h.jsx)(ca, {
              stations: r,
              gameId: a
            }) : null]
          })
        },
        ua = (0, I.withTranslations)((e => {
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
        ka = {
          maint: "rockstargames-sites-rockstargamesee5e5a68eb125090583fe5d4f8ce03df",
          content: "rockstargames-sites-rockstargamesf5aef392e680073f8fed78567c8dbb4e",
          logo: "rockstargames-sites-rockstargamesda2fe3ab2392b09ff23958abdf602eb4"
        },
        ga = () => (0, h.jsx)("div", {
          className: ka.maint,
          children: (0, h.jsxs)("div", {
            className: ka.content,
            children: [(0, h.jsx)("div", {
              className: ka.logo
            }), (0, h.jsx)("p", {
              children: "The Rockstar Games Social Club is currently undergoing maintenance. Please check back soon."
            }), (0, h.jsx)("a", {
              className: ka.support,
              href: "https://support.rockstargames.com/",
              children: "https://support.rockstargames.com/"
            })]
          })
        }),
        fa = () => (0, h.jsxs)("div", {
          className: "rockstargames-sites-rockstargamesc4061150feb48d282a2363b7cbed6ac5",
          children: [(0, h.jsx)("div", {
            className: "rockstargames-sites-rockstargamesa026b866e5e33e40478c738b8a6714fd"
          }), (0, h.jsx)("h3", {
            children: "Standard Deviation is now a part of Rockstar Games."
          })]
        }),
        _a = {
          jpwrapper: "rockstargames-sites-rockstargamesba6d4394dc71688a882bb545fc08beb4",
          body: "rockstargames-sites-rockstargamesdd0895660ec10bf279836cd110070640",
          responsiveImage: "rockstargames-sites-rockstargamesfb8048b514e49776135df91d47ef29db",
          link: "rockstargames-sites-rockstargamesac320620a02a8d3897d310cf288855ab",
          bodyPadding: "rockstargames-sites-rockstargamesd13a76b87f08d8fdbc47d45cd7450dd1",
          headline_3: "rockstargames-sites-rockstargamesa12bcaa8e0eec396547de0cae798278a",
          headline_2: "rockstargames-sites-rockstargamese2c90393cdf11f29befc2038de073e48",
          disclaimer: "rockstargames-sites-rockstargamesa88581f8d3bc749026f10eb47ec6aeb2"
        },
        va = k.framer.withFadeIn((() => (0, h.jsxs)("div", {
          className: _a.jpwrapper,
          children: [(0, h.jsx)(k.MultiSourceImage, {
            className: _a.responsiveImage,
            image: {
              desktop: i(98508)
            }
          }), (0, h.jsxs)(k.Grid, {
            className: [_a.body, _a.inner, _a.gap_sm].join(" "),
            children: [(0, h.jsx)("h1", {
              children: "GTAマネーを最大250万ドル獲得しよう"
            }), (0, h.jsxs)("p", {
              children: [(0, h.jsx)("a", {
                className: _a.link,
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
              className: _a.bodyPadding,
              image: {
                desktop: i(71452)
              }
            }), (0, h.jsx)("p", {
              children: "各チームは最近追加されたキャリア進行状況メニューを使って自分たちの成績を記録し、 条件に到達すれば下記のボーナスGTAマネーが日本のプレイヤー全員に贈られます。"
            }), (0, h.jsx)(k.MultiSourceImage, {
              className: _a.bodyPadding,
              image: {
                desktop: i(82004)
              }
            }), (0, h.jsxs)("p", {
              children: ["さらなる詳細は、", (0, h.jsx)("a", {
                href: "https://www.twitch.tv/dasoku_aniki",
                className: _a.link,
                children: "Twitch"
              }), "で8月31日午後6時(日本時間)にイベントMCの蛇足の配信を視聴してください。"]
            }), (0, h.jsx)("p", {
              className: _a.disclaimer,
              children: "チャレンジは2023年9月7日午後6時(日本時間)に終了します。日本にお住いのプレイヤーに限ります。 Social Clubアカウント1つにつき最大でGTAマネー250万ドルが贈られます。コミュニティ報酬はチャレンジ参加者限定です。 コミュニティの目標に到達した場合、報酬はゲーム内で受け取る必要があります。コンソールでオンラインをプレイするには別に有料のサブスクリプションが必要です。 規約が適用されます。可能な限り、イベント終了後72時間以内にプレイヤーのアカウントに贈られます。"
            }), (0, h.jsx)(k.Rating, {
              condensed: !0,
              titleSlug: "GTAOnline"
            })]
          })]
        }))),
        pa = (0, D.defineMessages)({
          unsubscribe_success_header: {
            id: "unsubscribe_success_header",
            defaultMessage: "Successfully Unsubscribed"
          },
          unsubscribe_info_header: {
            id: "unsubscribe_info_header",
            defaultMessage: "You're Already Unsubscribed"
          },
          unsubscribe_error_header: {
            id: "unsubscribe_error_header",
            defaultMessage: "Error Unsubscribing"
          },
          unsubscribe_success_description: {
            id: "unsubscribe_success_description",
            defaultMessage: "You will not receive any additional marketing emails from Rockstar Games. Opt back in or make additional changes to your Rockstar Games email preferences on the account settings page."
          },
          unsubscribe_info_description: {
            id: "unsubscribe_info_description",
            defaultMessage: "You will not receive any additional marketing emails from Rockstar Games. Opt back in or make additional changes to your Rockstar Games email preferences on the account settings page."
          },
          unsubscribe_error_description: {
            id: "unsubscribe_error_description",
            defaultMessage: "This URL may be invalid. You can make changes to your Rockstar Games email preferences on the account settings page."
          },
          email_settings_cta: {
            id: "email_settings_cta",
            defaultMessage: "Update Preferences"
          }
        }),
        ba = {
          container: "rockstargames-sites-rockstargamesec870dfb536235bd7aa6333cdbd47b18",
          dialogModal: "rockstargames-sites-rockstargamesafb2793530a9c355979762cf109389bc",
          pillBtn: "rockstargames-sites-rockstargamesa91a63c702436d7d074161542743303f",
          selected: "rockstargames-sites-rockstargamesbcd32eeec95fb5b59e3901cfa7307c76",
          textContent: "rockstargames-sites-rockstargamesc1f2db1ccac37725a54b9986f518efcc",
          heading: "rockstargames-sites-rockstargamesbc826625d1e794a5daf9e37a6622e309",
          description: "rockstargames-sites-rockstargamesa1921013a6692ab9d3867df15efb7cec",
          errorIcon: "rockstargames-sites-rockstargamesf7b87767fc544a8e7b91655796367e89",
          successIcon: "rockstargames-sites-rockstargamesb0577d88ad20962e591709a28d77b664",
          infoIcon: "rockstargames-sites-rockstargamesc6551367635546f0aa5ae9cfc95466cf"
        },
        {
          host: ha
        } = (0, I.getScConfigForOrigin)(),
        ya = (0, D.withIntl)((() => {
          const e = (0, D.useIntl)(),
            {
              track: a
            } = (0, p.useGtmTrack)(),
            [i, n] = (0, o.useState)(""),
            s = `https://${ha}.rockstargames.com/settings/email`,
            t = (0, V.useRockstarTokenPing)(),
            [r] = (0, M.useSearchParams)(),
            c = {
              event: "cta_other",
              text: pa.email_settings_cta.defaultMessage,
              link_url: s,
              element_placement: "Unsubscribe"
            },
            l = {
              "109.200.3": "info"
            };
          return (0, o.useEffect)((() => {
            (async () => {
              const e = r.get("token");
              if (!e) return void n("error");
              const a = await (0, I.coreScApiFetch)("marketing/unsubscribe", {
                  fetchOptions: {
                    method: "POST"
                  },
                  pingBearer: t,
                  requireBearerToken: !1,
                  query: {
                    token: e
                  }
                }) ?? [],
                i = a?.error?.code;
              a?.status ? n("success") : i && !a?.status && n(l[i] || "error")
            })()
          }), [r.get("token")]), (0, o.useEffect)((() => {
            i && a({
              event: "virtualPageview",
              view_name: pa[`unsubscribe_${i}_header`].defaultMessage
            })
          }), [i]), (0, h.jsx)("div", {
            className: ba.container,
            children: i ? (0, h.jsxs)("div", {
              className: ba.dialogModal,
              children: [(0, h.jsx)("div", {
                className: ba[`${i}Icon`]
              }), (0, h.jsxs)("div", {
                className: ba.textContent,
                children: [(0, h.jsx)("h3", {
                  className: ba.heading,
                  children: e.formatMessage(pa[`unsubscribe_${i}_header`])
                }), (0, h.jsx)("div", {
                  className: ba.description,
                  children: e.formatMessage(pa[`unsubscribe_${i}_description`])
                })]
              }), (0, h.jsx)("div", {
                children: (0, h.jsx)(k.Button, {
                  to: s,
                  onClick: c ? () => a({
                    ...c
                  }) : () => {},
                  children: e.formatMessage(pa.email_settings_cta)
                })
              })]
            }) : (0, h.jsx)(k.LoadingAnimation, {})
          })
        }), be),
        Na = {
          "gta-tv": (0, o.lazy)((() => i.e(952).then(i.t.bind(i, 49952, 23)))),
          "modules-core-gif-viewer": (0, o.lazy)((() => i.e(690).then(i.t.bind(i, 53690, 23)))),
          "modules-core-videoplayer": (0, o.lazy)((() => Promise.resolve().then(i.t.bind(i, 84644, 23)))),
          "rockstar-tv": (0, o.lazy)((() => i.e(868).then(i.t.bind(i, 86868, 23)))),
          "screenshot-viewer": (0, o.lazy)((() => i.e(948).then(i.t.bind(i, 5330, 23)))),
          "sites-careers": (0, o.lazy)((() => i.e(396).then(i.t.bind(i, 7396, 23)))),
          "sites-gta": (0, o.lazy)((() => i.e(832).then(i.t.bind(i, 8832, 23)))),
          "sites-gta-gen9": (0, o.lazy)((() => i.e(620).then(i.t.bind(i, 71620, 23)))),
          "sites-gta-trilogy": (0, o.lazy)((() => i.e(708).then(i.t.bind(i, 21708, 23)))),
          "sites-red-dead-online": (0, o.lazy)((() => i.e(140).then(i.t.bind(i, 47140, 23)))),
          "sites-red-dead-redemption": (0, o.lazy)((() => i.e(190).then(i.t.bind(i, 82190, 23)))),
          "sites-red-dead-redemption-2": (0, o.lazy)((() => i.e(735).then(i.t.bind(i, 6735, 23))))
        },
        wa = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const i = Na[e],
            {
              setHeaderHidden: n
            } = (0, $.useRockstarLocalState)();
          return (0, h.jsx)(o.Suspense, {
            fallback: "",
            children: (0, h.jsx)(i, {
              setHeaderHidden: n,
              config: a
            })
          })
        },
        Sa = (0, k.withSearchbarErrorBoundary)((() => {
          const e = [{
            element: (0, h.jsx)(q, {}),
            path: "/"
          }, {
            element: (0, h.jsx)(We, {}),
            path: "/careers-privacy"
          }, {
            element: (0, h.jsx)(ia, {}),
            path: "/ccpa"
          }, {
            element: (0, h.jsx)(Ke, {}),
            path: "/community-guidelines"
          }, {
            element: (0, h.jsx)(M.Navigate, {
              to: "/community-guidelines",
              replace: !0
            }),
            path: "/conduct"
          }, {
            element: (0, h.jsx)(ua, {}),
            path: "/contact"
          }, {
            element: (0, h.jsx)(aa, {}),
            path: "/cookies"
          }, {
            element: (0, h.jsx)(Xe, {}),
            path: "/corpinfo"
          }, {
            element: (0, h.jsx)(Ne, {}),
            path: "/games"
          }, {
            element: (0, h.jsx)(Re, {}),
            path: "/games/:gameTitlelug"
          }, {
            element: (0, h.jsx)(Je, {}),
            path: "/legal"
          }, {
            element: (0, h.jsx)(C.Credits, {
              title: "v"
            }),
            path: "/gta-v/thankyou"
          }, {
            element: (0, h.jsx)(fa, {}),
            path: "/standarddeviation"
          }, {
            element: (0, h.jsx)(va, {}),
            path: "/community_event"
          }, {
            element: wa("sites-red-dead-redemption-2"),
            path: "/reddeadredemption2/*"
          }, {
            element: wa("sites-red-dead-redemption"),
            path: "/reddeadredemption/*"
          }, {
            element: (0, h.jsx)(C.Credits, {
              title: "rdr2"
            }),
            path: "/reddeadonline/thankyou"
          }, {
            element: wa("sites-careers"),
            path: "/careers/*"
          }, {
            element: (0, h.jsx)(ce, {}),
            path: "/downloads/*"
          }, {
            element: wa("sites-red-dead-online"),
            path: "/reddeadonline/*"
          }, {
            element: wa("modules-core-gif-viewer"),
            path: "/gifs/:hashId"
          }, {
            element: wa("sites-gta-gen9", {
              routeRoot: "/gta-v"
            }),
            path: "/gta-v/*"
          }, {
            element: wa("sites-gta-gen9", {
              routeRoot: "/gta-plus"
            }),
            path: "/gta-plus/*"
          }, {
            element: wa("sites-gta-gen9", {
              routeRoot: "/gta-online"
            }),
            path: "/gta-online/*"
          }, {
            element: wa("sites-gta-trilogy"),
            path: "/GTATrilogy/*"
          }, {
            element: wa("gta-tv"),
            path: "/gtatv/*"
          }, {
            element: (0, h.jsx)(ra, {}),
            path: "/manuals"
          }, {
            element: (0, h.jsx)(ma, {}),
            path: "/manuals/music"
          }, {
            element: (0, h.jsx)(le, {}),
            path: "/newswire"
          }, {
            element: (0, h.jsx)(ue, {}),
            path: "/newswire/article/:articleId/:articleSlug"
          }, {
            element: (0, h.jsx)(Ze, {}),
            path: "/old-privacy"
          }, {
            element: (0, h.jsx)(Ze, {}),
            path: "/privacy"
          }, {
            element: wa("rockstar-tv"),
            path: "/rockstartv/*"
          }, {
            element: wa("screenshot-viewer"),
            path: "/screenshot-viewer/*"
          }, {
            element: (0, h.jsx)(Le, {}),
            path: "/search"
          }, {
            element: (0, h.jsx)(ga, {}),
            path: "/socialclubmaintenance"
          }, {
            element: wa("modules-core-videoplayer"),
            path: "/videoplayer"
          }, {
            element: (0, h.jsx)(ya, {}),
            path: "/unsubscribe"
          }, {
            element: (0, h.jsx)(_e, {}),
            path: "/videos"
          }, {
            element: (0, h.jsx)(pe, {}),
            path: "/videos/:videoId"
          }, {
            element: wa("sites-gta"),
            path: "/VI"
          }, {
            element: (0, h.jsx)(k.Wasted, {
              error: {
                code: window?.env?.responseStatusCode ?? 398
              }
            }),
            path: "*"
          }];
          return (0, M.useRoutes)(e)
        })),
        xa = {
          main: "rockstargames-sites-rockstargamesf1aef688b1fb7db52825ffe602919893",
          gameSite: "rockstargames-sites-rockstargamesd94349e6082443747b43bfb1b3572894",
          "theme-std": "rockstargames-sites-rockstargamesc96f36a0f4271c94bc947959cc6f339d",
          headerHidden: "rockstargames-sites-rockstargamesd477842bf331a57b7775dad383937ca6",
          standalone: "rockstargames-sites-rockstargamesf25a9c90e12ca706e97edcb4d8824b69"
        },
        ja = (0, n.withAutoRouteTracking)((() => {
          const {
            state: {
              headerHidden: e,
              standalone: a
            }
          } = (0, $.useRockstarLocalState)();
          return (0, o.useEffect)((() => {
            window.addEventListener("resize", (() => {
              document.body.height = window.innerHeight
            }))
          }), []), (0, h.jsx)("main", {
            role: "main",
            id: "main",
            className: [xa.main, a ? xa.standalone : "", e ? xa.headerHidden : ""].join(" "),
            children: (0, h.jsx)(Sa, {})
          })
        })),
        Fa = ((0, V.makeVar)({
          base: "",
          navOpen: !1
        }), document.location.pathname),
        Va = window.self !== window.top,
        Ia = {
          search: "",
          navOpen: !1,
          navHidden: !1,
          gameSiteNavOpen: !1,
          normalLogo: !0,
          loading: !1,
          headerHidden: ([].find((e => Fa.includes(e))) ?? []).length > 0 || Va,
          customFooter: (["gta-online/license-plates"].find((e => Fa.includes(e))) ?? []).length > 0,
          standalone: (["/screenshot-viewer", "/videoplayer", "/gifs"].find((e => Fa.includes(e))) ?? []).length > 0,
          error: {
            message: window?.errorFromServer?.message ?? null,
            code: window?.errorFromServer?.code ?? null
          },
          breadcrumb: {
            links: [],
            filter: ""
          }
        },
        Aa = (0, V.makeVar)(Ia),
        Ta = (0, V.makeVarNamespace)("rockstar-root"),
        Da = window?.env?.graphEnv ?? "prod";
      u();
      const Ga = (() => {
          const e = window;
          if (e[m]?.history || u(), e[m]?.history) return e[m].history;
          throw new Error("Browser History has not been initialised")
        })(),
        Ra = () => {
          const {
            state: {
              standalone: e,
              customFooter: a
            }
          } = (0, I.useRockstarLocalState)(), [i] = (0, o.useContext)(S), [{
            iso: n
          }] = (0, D.getLocale)();
          return (0, h.jsx)(D.IntlProvider, {
            locales: G.intlMessages,
            lang: n,
            children: (0, h.jsx)(T.GtmProvider, {
              children: (0, h.jsxs)(k.ScrollTracker, {
                threshold: [25, 50, 75, 90, 100],
                children: [i, (0, h.jsx)(k.ScrollToTop, {}), (0, h.jsx)(ja, {}), e || a ? "" : (0, h.jsx)(C.FooterNav, {})]
              })
            })
          })
        },
        Ea = () => (0, h.jsx)(x, {
          children: (0, h.jsx)(Ra, {})
        }),
        {
          pingBearer: Ca
        } = (0, I.getScConfigForOrigin)(),
        $a = (0, V.withReactiveState)((() => {
          const e = (0, V.useBase)(),
            {
              setLoading: a,
              setTitle: i,
              state: {
                headerHidden: n,
                standalone: s
              }
            } = (0, I.useRockstarLocalState)();
          return (0, o.useEffect)((() => {
            window.addEventListener("message", (e => {
              const n = e.data?.type ?? null;
              "graph.titleUpdate" === n && i(e.data.title), "graph.loadingUpdate" === n && a(e.data.loading)
            }))
          }), [a, i]), (0, h.jsx)(I.ResizeProvider, {
            children: (0, h.jsx)(A.ScrollProvider, {
              children: (0, h.jsxs)(T.RockstarUserProvider, {
                children: [!s && !n && (0, h.jsx)(E(), {
                  baseName: e
                }), (0, h.jsx)(l(), {
                  history: Ga,
                  basename: e,
                  children: (0, h.jsx)(Ea, {})
                })]
              })
            })
          })
        }), {
          state: Aa
        }),
        Ma = (0, V.withRockstarGraph)($a, {
          env: Da,
          token: Ta("token", null),
          tokenPing: Ta("tokenPing", Ca),
          tokenPingExpires: Ta("tokenPingExpires", null),
          typePolicies: {
            ...F()
          }
        }),
        za = window?.env?.oneTrustId ?? null,
        La = window?.env?.gtmId ?? null;
      (0, n.init)({
        id: La
      }), t()({
        id: za,
        init: () => {
          const e = document.createElement("div");
          document.body.appendChild(e), (0, r.C)(e).render((0, h.jsx)(Ma, {}))
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

      function s(e, a) {
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
          definitions: [s(e, a)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var t = n[a] || new Set,
          r = new Set,
          o = new Set;
        for (t.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var n = s(e, a);
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
                  value: "5"
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
        body: '#import "@rockstargames/graph-client/operations/fragments/newswire-post.graphql"\n#import "@rockstargames/graph-client/operations/fragments/video-fields.graphql"\n\nquery Home($locale: String!) {\n    meta: metaUrl(url: "/", domain: "www", locale: $locale) {\n        title\n    }\n    games(limit: 5, locale: $locale) {\n        results {\n            id\n            title\n            title_slug\n            site_in_rockstar\n            fob_640\n        }\n    }\n    posts(limit: 6, locale: $locale) {\n        results {\n            ...postFields\n        }\n    }\n    videos(locale: $locale, limit: 4, finder: "featured") {\n        results {\n            ...videoFields\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function t(e) {
        return e.filter((function(e) {
          if ("FragmentDefinition" !== e.kind) return !0;
          var a = e.name.value;
          return !s[a] && (s[a] = !0, !0)
        }))
      }

      function r(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && a.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          r(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          r(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          r(e, a)
        }))
      }
      n.definitions = n.definitions.concat(t(i(73784).definitions)), n.definitions = n.definitions.concat(t(i(67308).definitions));
      var o = {};

      function c(e, a) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == a) return n
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          r(e, a), o[e.name.value] = a
        }
      })), e.exports = n, e.exports.Home = function(e, a) {
        var i = {
          kind: e.kind,
          definitions: [c(e, a)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var n = o[a] || new Set,
          s = new Set,
          t = new Set;
        for (n.forEach((function(e) {
            t.add(e)
          })); t.size > 0;) {
          var r = t;
          t = new Set, r.forEach((function(e) {
            s.has(e) || (s.add(e), (o[e] || new Set).forEach((function(e) {
              t.add(e)
            })))
          }))
        }
        return s.forEach((function(a) {
          var n = c(e, a);
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
      var s = {};

      function t(e) {
        return e.filter((function(e) {
          if ("FragmentDefinition" !== e.kind) return !0;
          var a = e.name.value;
          return !s[a] && (s[a] = !0, !0)
        }))
      }

      function r(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && a.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          r(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          r(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          r(e, a)
        }))
      }
      n.definitions = n.definitions.concat(t(i(73784).definitions)), n.definitions = n.definitions.concat(t(i(67308).definitions)), n.definitions = n.definitions.concat(t(i(28540).definitions));
      var o = {};

      function c(e, a) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == a) return n
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          r(e, a), o[e.name.value] = a
        }
      })), e.exports = n, e.exports.Search = function(e, a) {
        var i = {
          kind: e.kind,
          definitions: [c(e, a)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var n = o[a] || new Set,
          s = new Set,
          t = new Set;
        for (n.forEach((function(e) {
            t.add(e)
          })); t.size > 0;) {
          var r = t;
          t = new Set, r.forEach((function(e) {
            s.has(e) || (s.add(e), (o[e] || new Set).forEach((function(e) {
              t.add(e)
            })))
          }))
        }
        return s.forEach((function(a) {
          var n = c(e, a);
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

      function s(e, a) {
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
          definitions: [s(e, a)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var t = n[a] || new Set,
          r = new Set,
          o = new Set;
        for (t.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var n = s(e, a);
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

      function s(e, a) {
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
          definitions: [s(e, a)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var t = n[a] || new Set,
          r = new Set,
          o = new Set;
        for (t.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var n = s(e, a);
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
      var s = {};

      function t(e) {
        return e.filter((function(e) {
          if ("FragmentDefinition" !== e.kind) return !0;
          var a = e.name.value;
          return !s[a] && (s[a] = !0, !0)
        }))
      }

      function r(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && a.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          r(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          r(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          r(e, a)
        }))
      }
      n.definitions = n.definitions.concat(t(i(73784).definitions)), n.definitions = n.definitions.concat(t(i(67308).definitions));
      var o = {};

      function c(e, a) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == a) return n
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          r(e, a), o[e.name.value] = a
        }
      })), e.exports = n, e.exports.GameInfo = function(e, a) {
        var i = {
          kind: e.kind,
          definitions: [c(e, a)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var n = o[a] || new Set,
          s = new Set,
          t = new Set;
        for (n.forEach((function(e) {
            t.add(e)
          })); t.size > 0;) {
          var r = t;
          t = new Set, r.forEach((function(e) {
            s.has(e) || (s.add(e), (o[e] || new Set).forEach((function(e) {
              t.add(e)
            })))
          }))
        }
        return s.forEach((function(a) {
          var n = c(e, a);
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

      function s(e, a) {
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
          definitions: [s(e, a)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var t = n[a] || new Set,
          r = new Set,
          o = new Set;
        for (t.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var n = s(e, a);
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

      function s(e, a) {
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
          definitions: [s(e, a)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var t = n[a] || new Set,
          r = new Set,
          o = new Set;
        for (t.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var n = s(e, a);
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
      var s = {};

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
      n.definitions = n.definitions.concat(i(67308).definitions.filter((function(e) {
        if ("FragmentDefinition" !== e.kind) return !0;
        var a = e.name.value;
        return !s[a] && (s[a] = !0, !0)
      })));
      var r = {};

      function o(e, a) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == a) return n
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), r[e.name.value] = a
        }
      })), e.exports = n, e.exports.VideosList = function(e, a) {
        var i = {
          kind: e.kind,
          definitions: [o(e, a)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var n = r[a] || new Set,
          s = new Set,
          t = new Set;
        for (n.forEach((function(e) {
            t.add(e)
          })); t.size > 0;) {
          var c = t;
          t = new Set, c.forEach((function(e) {
            s.has(e) || (s.add(e), (r[e] || new Set).forEach((function(e) {
              t.add(e)
            })))
          }))
        }
        return s.forEach((function(a) {
          var n = o(e, a);
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