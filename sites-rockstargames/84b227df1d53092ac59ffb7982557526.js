! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "250d2190-b815-4a05-8b2a-700c6986dd22", e._sentryDebugIdIdentifier = "sentry-dbid-250d2190-b815-4a05-8b2a-700c6986dd22")
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
  [192], {
    80192: (e, a, i) => {
      "use strict";
      i.r(a), i(31389), i(42664), i(34904), i(46368), i(58256), i(64932), i(87440), i(53128), i(18932), i(19520), i(24264), i(69224), i(58432), i(13144), i(77571), i(84084), i(86096), i(54012), i(38592);
      var n = i(85092),
        t = i(19548),
        s = i.n(t),
        r = i(64508),
        l = i(51664),
        d = i(81968),
        o = i.n(d),
        c = i(77508);
      const m = "__MFE_GLOBAL_HOOK__",
        u = () => {
          const e = window;
          e[m]?.history || (e[m] = Object.assign(e[m] || {}, {
            history: (0, c.createBrowserHistory)()
          }))
        };
      var k = i(9860),
        g = i(36960),
        v = i.n(g),
        f = i(50968),
        p = i(1740),
        b = i(42836),
        h = i(57013);
      var N = i(95240);
      const y = e => {
          let {
            modal: a
          } = e;
          const {
            content: i,
            className: n,
            height: t,
            onClose: s,
            rect: r = {
              left: 0,
              top: 0
            },
            contentStyle: d = {},
            contentClassName: o = "",
            width: c,
            fadeIn: m = !0,
            cardIds: u,
            theme: k,
            title: g,
            gtm: y = {},
            aspectRatio: _ = "default",
            cardDimensions: S
          } = a, {
            left: w,
            top: x
          } = r, [j, F] = (0, l.useState)(-1), {
            track: V
          } = (0, b.useGtmTrack)(), T = null !== u && (u?.length || 0) > 1 && ("flag_bg" === k || "fob" === S?.size), [I, D] = (0, h.useSearchParams)(), [A, $] = (0, l.useState)(!1), [E, C] = (0, l.useState)(!1), [L, G] = (0, l.useState)(), B = () => {
            const e = j > -1 ? j - 1 : 0;
            F(e), C(e <= 0), $(e >= (u?.length || 0) - 1), V({
              event: "modal_previous",
              event_category: "modal",
              event_action: "previous",
              event_label: "",
              position: j
            })
          }, M = () => {
            const e = j > -1 ? j + 1 : 0;
            F(e), C(e <= 0), $(e >= (u?.length || 0) - 1), V({
              event: "modal_next",
              event_category: "modal",
              event_action: "next",
              event_label: "",
              position: j
            })
          };
          (0, l.useEffect)((() => {
            null !== j && null !== u && u && j < u.length && j > -1 && D({
              info: u[j].toString()
            })
          }), [j, u]), (0, l.useEffect)((() => {
            if (null !== u && -1 === j && u && u.length > 0) {
              const e = I.get("info");
              u?.forEach(((a, i) => {
                a === e && (F(i), C(i <= 0), $(i >= (u?.length || 0) - 1))
              }))
            }
          }), [u, j]);
          const [P] = (0, l.useState)({
            y: x,
            x: w,
            top: 0,
            left: 0,
            width: c,
            height: t,
            border: "0px solid transparent",
            background: "transparent",
            marginTop: T ? "0" : ""
          }), R = {
            opacity: 1
          }, O = (0, l.useRef)(null), q = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, z = {
            ease: "easeIn",
            duration: .3,
            delay: .5
          }, [H] = (0, l.useState)({
            x: "-50%",
            y: "-50%",
            top: "50%",
            left: "50%",
            width: "calc(100vw - (var(--modal-padding) * 2))",
            height: "var(--modal-height)",
            border: "1px solid var(--border-color, #2d2d2d)",
            background: "var(--black-100)",
            marginTop: T ? "calc(var(--modal-controlsHeight) - var(--modal-padding))" : "",
            transition: {
              x: q,
              y: q,
              top: q,
              left: q,
              width: q,
              height: q,
              border: q,
              background: {
                delay: .3
              }
            }
          }), [U, Q] = (0, l.useState)({
            initial: P,
            shown: H
          });
          (0, l.useEffect)((() => {
            Q({
              initial: P,
              shown: H
            })
          }), [P, H]), (0, l.useEffect)((() => {
            const e = e => {
              "function" == typeof s && "Escape" === e.key && (s(), V({
                event: "modal_close",
                event_action: "close",
                event_category: "modal",
                event_label: g ?? void 0,
                ...y
              }))
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []);
          const K = () => {
              "function" == typeof s && (s(), V({
                event: "modal_close",
                event_action: "close",
                event_category: "modal",
                event_label: g ?? void 0,
                ...y
              }))
            },
            W = (e, a) => {
              if (!e || !e.children || a < 0) return null;
              for (let i = 0; i < e.children.length; i++) {
                const n = e.children[i];
                if (n.scrollHeight > n.clientHeight) return n;
                const t = W(n, a - 1);
                if (t) return t
              }
              return null
            },
            J = e => {
              if (X?.current?.children) {
                let a = null;
                const i = "ArrowDown" === e.key ? 25 : "ArrowUp" === e.key ? -25 : 0;
                switch (e.key) {
                  case "ArrowDown":
                  case "ArrowUp":
                    a = (e => {
                      let a = null;
                      return L?.queried ? a = L.element : (a = W(e, 2), G({
                        queried: !0,
                        element: a
                      })), a
                    })(X.current), e.preventDefault(), a && (a.scrollTop += i)
                }
              }
            },
            Y = m ? 0 : 1,
            X = (0, l.useRef)(null),
            Z = (0, N.jsx)(f.motion.button, {
              className: "rockstargames-sites-rockstargamesb0326cc98df99ada0e0f6821f0f0a6ad",
              "aria-label": "Close",
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: z,
              onClick: () => {
                K()
              },
              onKeyDown: J,
              onKeyUp: J
            });
          return (0, l.useMemo)((() => (0, N.jsx)("div", {
            className: "rockstargames-sites-rockstargamese9a8e066d320a81b61aa2c636fa0a5b5",
            "data-show-nav": T,
            "data-aspect-ratio": _,
            children: (0, N.jsxs)(v(), {
              children: [(0, N.jsx)(f.motion.div, {
                className: "rockstargames-sites-rockstargamesc8632c630878ad16e637fe2b8db2f02c",
                initial: {
                  opacity: 0
                },
                animate: R,
                transition: q,
                onClick: () => K()
              }), T && (0, N.jsxs)("div", {
                className: "rockstargames-sites-rockstargameseeecb8dc782f382fc9d32d03ecc1a2a5",
                children: [(0, N.jsxs)(f.motion.div, {
                  className: "rockstargames-sites-rockstargamesb6e3406cb9a52fc7583d5c74681e88bc",
                  initial: {
                    opacity: 0
                  },
                  animate: {
                    opacity: 1
                  },
                  transition: z,
                  children: [(0, N.jsx)("button", {
                    type: "button",
                    "aria-label": "Previous",
                    onClick: B,
                    disabled: E,
                    onKeyDown: J,
                    onKeyUp: J
                  }), (0, N.jsxs)("div", {
                    className: "rockstargames-sites-rockstargamesff3c13d9dc1de9af609a1f99b4c47039",
                    children: [" ", j + 1, (0, N.jsx)("div", {
                      className: "rockstargames-sites-rockstargamescd9c6033ad00894881fa5451acfe15da"
                    }), u?.length, " "]
                  }), (0, N.jsx)("button", {
                    type: "button",
                    "aria-label": "Next",
                    onClick: M,
                    disabled: A,
                    onKeyDown: J,
                    onKeyUp: J
                  })]
                }), Z]
              }), (0, N.jsx)(f.motion.div, {
                className: "rockstargames-sites-rockstargamesfab99cc2e2ca2e2a2158f9d41e764558",
                ref: O,
                initial: "initial",
                animate: "shown",
                variants: U,
                transition: q,
                style: d,
                children: (0, N.jsxs)(f.motion.div, {
                  className: (0, p.classList)("rockstargames-sites-rockstargamesb6aa5ebf680af5d95d0e9c76ac36ed82", n),
                  children: [!T && Z, (0, N.jsx)(f.motion.div, {
                    className: (0, p.classList)("rockstargames-sites-rockstargamesd901631c0b9d817396c8352c027a2a0d", o),
                    initial: {
                      opacity: Y
                    },
                    animate: {
                      opacity: 1
                    },
                    transition: z,
                    ref: X,
                    children: i
                  }), (0, N.jsx)("button", {
                    className: "rockstargames-sites-rockstargamesf1ecf74036b2b7fdfda3613619af40cf",
                    type: "button",
                    "aria-label": "End of modal"
                  })]
                })
              })]
            })
          })), [i, j, d])
        },
        _ = "modal-context",
        S = [null, () => null],
        w = window?.[_] ?? (window[_] = (0, l.createContext)(S)),
        x = e => {
          let {
            children: a
          } = e;
          const [i, n] = (0, l.useState)(S), t = (0, l.useMemo)((() => i?.content ? (0, N.jsx)(y, {
            modal: i
          }) : null), [i]);
          return (0, N.jsx)(w.Provider, {
            value: [t, n],
            children: a
          })
        };
      var j = i(27864),
        F = i.n(j),
        V = i(33052),
        T = i(45792),
        I = i(77715),
        D = i(42708),
        A = i(41272),
        $ = i(75016),
        E = i(42132),
        C = i.n(E),
        L = i(78656),
        G = i(3061),
        B = i(60328);
      const M = "rockstargames-sites-rockstargamesf75798e3984014f9cd35c5956e94fbb3",
        P = "rockstargames-sites-rockstargamesaa6bc8070e5e81ea0594636575db8fd6";
      var R = i(50060);
      const O = e => {
          let {
            games: a,
            t: i
          } = e;
          return (0, N.jsxs)("section", {
            className: "rockstargames-sites-rockstargamesbec4f690ea94ae150d36b6be04b7011d",
            "data-testid": "featuredGames",
            children: [(0, N.jsx)("h3", {
              className: M,
              children: (0, N.jsx)(k.A, {
                to: "newswire",
                "aria-label": i("Featured Games"),
                "data-testid": "featuredGamesHeader",
                children: i("Featured Games")
              })
            }), (0, N.jsx)("div", {
              className: P,
              children: a.map((e => (0, N.jsx)(k.GameCard.Link, {
                game: e
              }, e.id)))
            }), (0, N.jsx)(k.Button, {
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
        q = e => {
          let {
            posts: a,
            t: i
          } = e;
          return (0, N.jsxs)("section", {
            className: "rockstargames-sites-rockstargamesbc6c5d345fb1cccca402fd4a97a8bef8",
            "data-testid": "newswire",
            children: [(0, N.jsx)("h3", {
              className: M,
              children: (0, N.jsx)(k.A, {
                to: "newswire",
                "aria-label": i("Newswire"),
                "data-testid": "newswireHeader",
                children: i("Newswire")
              })
            }), (0, N.jsx)(k.NewswireBlocks, {
              className: P,
              posts: a,
              noSpecialOrder: !0
            }), (0, N.jsx)(k.Button, {
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
        z = (0, T.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            data: i
          } = (0, V.useQuery)(R.Home, {
            autoSetLoading: !0
          });
          if (!i) return null;
          const {
            games: n,
            posts: t,
            videos: s
          } = i;
          return (0, N.jsxs)("div", {
            className: "rockstargames-sites-rockstargamesdcf817f11d19ae0ef32bf4b753d292a2",
            "data-testid": "homepageBody",
            children: [(0, N.jsx)(k.VideoCarousel, {
              videos: s.results,
              t: a
            }), (0, N.jsxs)("div", {
              className: "rockstargames-sites-rockstargamesd04358d9e38bc205e1c35dee36efcaa1",
              children: [(0, N.jsx)(q, {
                posts: t.results,
                t: a
              }), (0, N.jsx)(O, {
                games: n.results,
                t: a
              })]
            })]
          })
        })),
        H = (0, A.defineMessages)({
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
      var U = i(89416),
        Q = i.n(U);
      const K = {
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
        W = (0, T.withTranslations)((e => {
          let {
            links: a,
            collectionId: i,
            name: n,
            title: t,
            label: s,
            t: r
          } = e;
          const d = (0, A.useIntl)(),
            [o, c] = (0, l.useState)(!1),
            {
              sanitize: m
            } = Q(),
            u = [11, 10, 12, 13, 14, 15].includes(i),
            g = n || r("Select Retailer"),
            f = (0, l.useRef)(),
            p = e => {
              f.current.contains(e.target) || c(!1)
            },
            b = () => {
              c(!1)
            },
            h = e => {
              e.preventDefault();
              const a = e.target.href;
              (0, T.downloadFile)(a), b()
            },
            y = e => {
              "Escape" === e.key && c(!1)
            };
          (0, l.useEffect)((() => (o ? window.addEventListener("keyup", y) : window.removeEventListener("keyup", y), () => window.removeEventListener("keyup", y))), [y, o]), Q().addHook("afterSanitizeAttributes", (function(e) {
            e.hasAttribute("target") && e.setAttribute("tabindex", o ? 0 : -1)
          })), (0, l.useEffect)((() => (o ? document.addEventListener("mousedown", p) : document.removeEventListener("mousedown", p), () => {
            document.removeEventListener("mousedown", p)
          })), [o]);
          const _ = e => {
            if (!e) return null;
            const a = e.trim().match(/(\d{1,4})x(\d{1,4})/);
            if (a) {
              const e = a[1],
                i = a[2];
              return d.formatMessage(H.rockstargames_downloads_dimensions_label, {
                width: e,
                height: i
              })
            }
            return null
          };
          return (0, N.jsx)("div", {
            ref: f,
            className: K.dropdownWrapper,
            children: (0, N.jsxs)(v(), {
              disabled: !o,
              children: [(0, N.jsx)("button", {
                className: K.header,
                onClick: () => c(!o),
                type: "select",
                "aria-label": `${s?s+", ":""}${g}`,
                children: (0, N.jsxs)("div", {
                  className: K.title,
                  children: [(0, N.jsx)("p", {
                    children: g
                  }), (0, N.jsx)("div", {
                    className: [K.caret, o ? K.open : ""].join(" ")
                  })]
                })
              }), (0, N.jsx)("ul", {
                className: [K.list, o ? K.open : ""].join(" "),
                children: u ? (0, N.jsx)(N.Fragment, {
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
                      })), (0, N.jsx)("li", {
                        className: K.item,
                        children: (0, N.jsx)(k.A, {
                          ...n,
                          tabIndex: o ? 0 : -1,
                          target: "_blank",
                          onClick: b,
                          children: e.textContent
                        })
                      }, `link_${a}`)
                    }))
                  })(a)
                }) : a.map((e => {
                  if ("thumb" !== e.label) return (0, N.jsx)("li", {
                    className: K.item,
                    children: (0, N.jsx)(k.A, {
                      to: e.src,
                      "data-gtm-category": "Downloads",
                      "data-gtm-action": `Collection : ${t}`,
                      "data-gtm-label": e.src,
                      tabIndex: o ? 0 : -1,
                      onClick: h,
                      "aria-label": _(e.label),
                      children: e.label
                    })
                  }, e.id)
                }))
              })]
            })
          })
        })),
        J = (0, T.withTranslations)((e => {
          let {
            collection: a,
            games: i,
            homepage: n = !1,
            t
          } = e;
          return (0, N.jsxs)("div", {
            className: K.collection,
            children: [(0, N.jsx)("h2", {
              className: K.sectionHeader,
              children: a.title
            }), (0, N.jsx)("div", {
              className: K.grid,
              children: i.results.map((e => (0, N.jsxs)("div", {
                className: K.downloadItem,
                children: [(0, N.jsx)("div", {
                  className: K.img,
                  style: {
                    backgroundImage: `url(${e.fob_640})`,
                    "--aspect-ratio": "64/79"
                  },
                  "aria-label": e.title
                }), (0, N.jsx)(W, {
                  collectionId: a.id,
                  links: e.downloads_game.platform,
                  label: e.title
                })]
              }, e.fob_640)))
            }), n ? (0, N.jsx)("div", {
              className: K.viewAll,
              children: (0, N.jsx)(k.Button, {
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
        Y = (0, T.withTranslations)((e => {
          let {
            collection: a,
            homepage: i = !1,
            t: n
          } = e;
          return (0, N.jsxs)("div", {
            className: K.collection,
            children: [(0, N.jsx)("h2", {
              className: K.sectionHeader,
              children: a.title
            }), (0, N.jsx)("div", {
              className: K.grid,
              children: a.apps.slice(0, i ? 4 : 100).map((e => (0, N.jsxs)("div", {
                className: K.downloadItem,
                children: [(0, N.jsx)("div", {
                  className: K.img,
                  style: {
                    backgroundImage: `url(${e.preview})`,
                    "--aspect-ratio": "1/1"
                  }
                }), (0, N.jsx)(W, {
                  collectionId: a.id,
                  links: e.platform
                })]
              }, e.id)))
            }), i ? (0, N.jsx)("div", {
              className: K.viewAll,
              children: (0, N.jsx)(k.Button, {
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
        X = e => {
          let {
            collection: a
          } = e;
          const i = (0, A.useIntl)();
          return (0, N.jsxs)("div", {
            className: K.collection,
            children: [(0, N.jsx)("h4", {
              className: K.collectionTitle,
              children: (0, N.jsx)(k.A, {
                to: "/downloads",
                children: i.formatMessage(H.rockstargames_downloads_go_back)
              })
            }), (0, N.jsx)("h2", {
              className: K.sectionHeader,
              children: a.title
            }), (0, N.jsx)("div", {
              className: K.grid,
              children: a.gold_bars.map((e => (0, N.jsxs)("div", {
                className: K.downloadItem,
                children: [(0, N.jsx)("div", {
                  className: K.img,
                  style: {
                    backgroundImage: `url(${e.preview})`,
                    "--aspect-ratio": "1/1"
                  }
                }), (0, N.jsx)(W, {
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
          const i = (0, A.useIntl)();
          return (0, N.jsxs)("div", {
            className: K.collection,
            children: [(0, N.jsx)("h4", {
              className: K.collectionTitle,
              children: (0, N.jsx)(k.A, {
                to: "/downloads",
                children: i.formatMessage(H.rockstargames_downloads_go_back)
              })
            }), (0, N.jsx)("h2", {
              className: K.sectionHeader,
              children: a.title
            }), (0, N.jsx)("div", {
              className: K.grid,
              children: a.patches.map((e => (0, N.jsx)(k.A, {
                to: e.support_url,
                target: "_blank",
                "data-gtm-category": "Downloads",
                "data-gtm-action": "Collection : Patches",
                "data-gtm-label": e.game.title,
                "aria-label": i.formatMessage(H.rockstargames_downloads_collections_download_text, {
                  item: e.game.title,
                  collection: a.title
                }),
                children: (0, N.jsx)("div", {
                  className: K.card,
                  children: (0, N.jsx)("div", {
                    className: K.img,
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
          const i = (0, A.useIntl)();
          return (0, N.jsxs)("div", {
            className: K.collection,
            children: [(0, N.jsx)("h4", {
              className: K.collectionTitle,
              children: (0, N.jsx)(k.A, {
                to: "/downloads",
                children: i.formatMessage(H.rockstargames_downloads_go_back)
              })
            }), (0, N.jsx)("h2", {
              className: K.sectionHeader,
              children: a.title
            }), (0, N.jsx)("div", {
              className: K.grid,
              children: a.shark_cards.map((e => (0, N.jsxs)("div", {
                className: K.downloadItem,
                children: [(0, N.jsx)("div", {
                  className: K.img,
                  style: {
                    backgroundImage: `url(${e.preview})`,
                    "--aspect-ratio": "7/5"
                  }
                }), (0, N.jsxs)("div", {
                  className: K.label,
                  children: [(0, N.jsx)("h5", {
                    children: e.title
                  }), (0, N.jsx)("p", {
                    children: e.desc
                  })]
                }), (0, N.jsx)(W, {
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
          const n = (0, A.useIntl)(),
            t = (0, l.useRef)(),
            s = a.title_slug,
            r = !["music", "dlc"].includes(s);
          return (0, l.useEffect)((() => {
            t?.current && t.current.focus()
          }), [t]), (0, N.jsxs)("div", {
            className: K.collection,
            ref: t,
            "aria-label": a?.title,
            role: "region",
            children: [(0, N.jsx)("h4", {
              className: K.collectionTitle,
              children: (0, N.jsx)(k.A, {
                to: "/downloads",
                children: n.formatMessage(H.rockstargames_downloads_go_back)
              })
            }), (0, N.jsx)("h2", {
              className: K.sectionHeader,
              children: a.title
            }), (0, N.jsx)("div", {
              className: K.grid,
              children: a.series.map((e => (0, N.jsx)(k.A, {
                to: `/downloads?collection=${a.id}&series=${e.id}`,
                "data-gtm-category": "Downloads",
                "data-gtm-action": `Collection : ${a.title}`,
                "data-gtm-label": e.title,
                "aria-label": n.formatMessage(H.rockstargames_downloads_collections_download_text, {
                  item: e.title,
                  collection: a.title
                }),
                children: (0, N.jsxs)("div", {
                  className: K.card,
                  children: [(0, N.jsx)("div", {
                    className: K.img,
                    style: {
                      backgroundImage: `url(${e?.musics?.[0]?.thumb??e?.dlcs?.[0]?.thumb??e.preview})`,
                      "--aspect-ratio": i
                    }
                  }), r ? (0, N.jsx)("h5", {
                    className: K.title,
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
              return (0, N.jsx)(Y, {
                collection: a
              });
            case "gamespcmac":
              return (0, N.jsx)(J, {
                collection: a,
                games: i
              });
            case "goldbars":
              return (0, N.jsx)(X, {
                collection: a
              });
            case "patches":
              return (0, N.jsx)(Z, {
                collection: a
              });
            case "sharkcards":
              return (0, N.jsx)(ee, {
                collection: a
              });
            case "dlc":
            case "music":
            case "gamescreensaver":
            case "avatars":
            case "gamewallpaper":
            case "rockstarwallpaper":
              return (0, N.jsx)(ae, {
                collection: a,
                imgRatio: n
              })
          }
        },
        ne = e => {
          let {
            collection: a
          } = e;
          return (0, N.jsx)(k.A, {
            to: `/downloads?collection=${a.id}`,
            "data-gtm-category": "Downloads",
            "data-gtm-action": "Collection : Misc",
            "data-gtm-label": a.title,
            children: (0, N.jsxs)("div", {
              className: K.card,
              children: [(0, N.jsx)("div", {
                className: K.img,
                style: {
                  "--aspect-ratio": "1/1",
                  backgroundImage: `url(${a.preview})`
                }
              }), (0, N.jsx)("h5", {
                className: K.title,
                children: a.title
              })]
            })
          })
        },
        te = (0, T.withTranslations)((e => {
          let {
            collections: a,
            t: i
          } = e;
          return (0, N.jsxs)("div", {
            className: K.collection,
            children: [(0, N.jsx)("h2", {
              className: K.sectionHeader,
              children: i("Miscellaneous")
            }), (0, N.jsx)("div", {
              className: K.grid,
              children: a.map((e => (0, N.jsx)(ne, {
                collection: e
              }, e.id)))
            })]
          })
        })),
        se = (0, T.withTranslations)((e => {
          let {
            data: {
              featured: a,
              game: i
            },
            t: n
          } = e;
          return (0, N.jsxs)("div", {
            className: K.featured,
            children: [(0, N.jsxs)("div", {
              className: [K.gridLarge, K.hero].join(" "),
              children: [(0, N.jsx)("div", {
                style: {
                  "--aspect-ratio": "1/1"
                },
                className: [K.img, K[i.title_slug]].join(" ")
              }), (0, N.jsxs)("div", {
                className: K.featuredDesc,
                children: [(0, N.jsxs)("div", {
                  className: K.text,
                  children: [(0, N.jsx)("h2", {
                    children: i.title
                  }), (0, N.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: i.description
                    }
                  })]
                }), (0, N.jsx)(k.Button, {
                  to: "https://store.rockstargames.com/game/buy-red-dead-redemption-2?_gl=1",
                  target: "_blank",
                  "data-gtm-category": "Downloads",
                  "data-gtm-action": "Featured Item",
                  "data-gtm-label": "https://store.rockstargames.com/game/buy-red-dead-redemption-2?_gl=1",
                  children: n("Download Now")
                })]
              })]
            }), (0, N.jsx)("h2", {
              className: K.sectionHeader,
              children: n("Featured Downloads")
            }), (0, N.jsx)("div", {
              className: K.gridLarge,
              children: a.map((e => (0, N.jsx)(k.A, {
                to: e.href,
                target: e.href.startsWith("http") ? "_blank" : "_self",
                "data-gtm-category": "Downloads",
                "data-gtm-action": `Featured: ${e.title_key}`,
                "data-gtm-label": e.href,
                children: (0, N.jsxs)("div", {
                  className: K.card,
                  children: [(0, N.jsx)("div", {
                    style: {
                      "--aspect-ratio": "780/373"
                    },
                    className: [K[e.name], K.img].join(" ")
                  }), (0, N.jsx)("h5", {
                    className: K.title,
                    children: n(e.title_key)
                  })]
                })
              }, e.name)))
            })]
          })
        })),
        re = (0, T.withTranslations)((e => {
          let {
            collection: a,
            imgRatio: i,
            t: n
          } = e;
          const t = a.title_slug,
            s = (0, l.useRef)();
          return (0, l.useEffect)((() => {
            s?.current && s.current.focus()
          }), [s]), (0, N.jsxs)("div", {
            ref: s,
            "aria-label": `${a.title}${a?.series?.[0]?.title?", "+a?.series?.[0]?.title:""}`,
            children: [(0, N.jsxs)("div", {
              className: [K.sectionHeader, K.series].join(" "),
              children: [(0, N.jsx)("h4", {
                className: K.collectionTitle,
                children: (0, N.jsx)(k.A, {
                  to: `/downloads?collection=${a.id}`,
                  children: a.title
                })
              }), (0, N.jsx)("h2", {
                className: K.seriesTitle,
                children: `${a?.series?.[0]?.title??""}`
              })]
            }), (0, N.jsx)("div", {
              className: K.grid,
              children: a.series.map((e => {
                let {
                  groups: s
                } = e;
                return s.map((e => (0, N.jsxs)("div", {
                  className: K.downloadItem,
                  children: [(0, N.jsx)("div", {
                    className: K.img,
                    "aria-label": e.label,
                    style: {
                      backgroundImage: `url(${e?.thumb??e?.preview})`,
                      "--aspect-ratio": i
                    }
                  }), (0, N.jsxs)("div", {
                    className: K.label,
                    children: [(0, N.jsx)("h5", {
                      children: n(e.label)
                    }), (0, N.jsx)(W, {
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
      var le = i(55380);
      const de = (0, T.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            setBreadcrumb: i
          } = (0, G.useRockstarLocalState)(), n = (0, T.useQueryParams)(), [t, s] = (0, l.useState)(null), [r, d] = (0, l.useState)(null), {
            loading: o,
            refetch: c
          } = (0, V.useQuery)(le.Downloads, {
            variables: t,
            skip: !0,
            autoSetLoading: !0
          });
          if ((0, l.useEffect)((() => {
              d(null);
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
            }), [n.get("series"), n.get("collection"), d]), (0, l.useEffect)((() => {
              let e = [{
                href: "/downloads",
                title: a("Downloads")
              }];
              return r?.collection?.id && t.withSeries && (e = [...e, {
                href: `/downloads?collection=${r.collection.id}`,
                title: r.collection.title
              }]), i(e), () => {
                i()
              }
            }), [r, t]), (0, l.useEffect)((() => {
              t && (async () => {
                const e = await c(t);
                d(e.data)
              })()
            }), [c, t]), !r || o) return null;
          if (t.withIndex) return (0, N.jsx)("div", {
            className: K.index,
            children: (0, N.jsxs)("div", {
              className: K.sections,
              children: [(0, N.jsx)(se, {
                data: r
              }), (0, N.jsx)(J, {
                homepage: !0,
                games: r.pc_mac_games,
                collection: r.collections.find((e => "gamespcmac" === e.title_slug))
              }), (0, N.jsx)(Y, {
                homepage: !0,
                collection: r.collections.find((e => "apps" === e.title_slug))
              }), (0, N.jsx)(te, {
                collections: r.collections.filter((e => !["apps", "gamespcmac", "sharkcards"].includes(e.title_slug)))
              })]
            })
          });
          if (t.withSeries) {
            const e = [6, 12, 13].includes(t.collectionId) ? "1/1" : "16/9";
            return (0, N.jsx)("div", {
              className: K.index,
              children: (0, N.jsx)(re, {
                collection: r.collection,
                imgRatio: e
              })
            })
          }
          return t.withCollection ? (0, N.jsx)("div", {
            className: K.index,
            children: (0, N.jsx)(ie, {
              collection: r.collection,
              games: r.pc_mac_games
            })
          }) : null
        })),
        oe = (0, T.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            setBreadcrumb: i,
            setNormalLogo: n
          } = (0, G.useRockstarLocalState)();
          return (0, l.useEffect)((() => (i([{
            href: "/newswire",
            title: a("Newswire")
          }], ""), () => {
            n(!0), i()
          })), []), (0, N.jsx)("div", {
            className: "rockstargames-sites-rockstargamesb7f93a0d98bb3eaac82ba7d6aef63890",
            "data-testid": "newswire-list",
            children: (0, N.jsx)(k.NewswireList, {
              t: a
            })
          })
        }));
      var ce = i(91336),
        me = i.n(ce);
      const ue = (0, T.withTranslations)((e => {
          let {
            t: a
          } = e;
          const i = (0, B.useParams)(),
            {
              setBreadcrumb: n,
              setNormalLogo: t
            } = (0, G.useRockstarLocalState)();
          return (0, l.useEffect)((() => (n([{
            href: "/newswire",
            title: a("Newswire")
          }], ""), () => {
            t(!0), n()
          })), []), (0, N.jsx)(me(), {
            idHash: String(i.articleId)
          })
        })),
        ke = "rockstargames-sites-rockstargamese6a4f8b4027dadd3be8f848d9b846bc3";
      var ge = i(98956),
        ve = i.n(ge);
      const fe = (0, T.withTranslations)((e => {
        let {
          t: a
        } = e;
        const {
          setBreadcrumb: i,
          setNormalLogo: n
        } = (0, G.useRockstarLocalState)(), t = (0, T.useQueryParams)(), [s, r] = (0, l.useState)({}), {
          data: d
        } = (0, V.useQuery)(ve(), {
          variables: s,
          skip: !Object.entries(s).length,
          autoSetLoading: !0
        }), {
          search: o
        } = (0, B.useLocation)();
        if ((0, l.useEffect)((() => {
            window.scrollTo(0, 0)
          }), [o]), (0, l.useEffect)((() => (i([{
            href: "/videos",
            title: a("Videos")
          }]), () => {
            i()
          })), []), (0, l.useEffect)((() => {
            r({
              ...s,
              type: t.get("type"),
              gameId: Number(t.get("gameId") ?? 0),
              index: null === t.get("type")
            })
          }), [t.get("type"), t.get("gameId")]), (0, l.useEffect)((() => (n(!1), () => n(!0))), []), !d) return null;
        if (d?.game && d?.gameVideos) return (0, N.jsx)("div", {
          className: ke,
          children: (0, N.jsx)(k.VideoList, {
            vids: d.gameVideos.results,
            title: a("Videos from %s").replace("%s", d.game.title)
          })
        });
        const {
          games: c,
          gtao: m,
          gtaVI: u,
          gtaosessions: g,
          latest: v,
          rdo: f
        } = d;
        return (0, N.jsx)("div", {
          className: ke,
          children: s.type ? "" : (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsx)(k.VideoCarousel, {
              videos: v.results,
              t: a
            }), (0, N.jsxs)("div", {
              className: "rockstargames-sites-rockstargamesb9a5297e3e78f65221054aa1f6d77597",
              children: [(0, N.jsx)(k.VideoList, {
                vids: u.results,
                title: a("Videos from %s").replace("%s", "Grand Theft Auto VI")
              }), (0, N.jsx)(k.VideoList, {
                vids: f.results,
                title: a("Videos from %s").replace("%s", "Red Dead Online")
              }), (0, N.jsx)(k.VideoList, {
                vids: m.results,
                title: a("Videos from %s").replace("%s", "GTA Online")
              }), (0, N.jsx)(k.VideoList, {
                vids: g.results,
                title: a("GTA Online Sessions Episodes")
              }), (0, N.jsx)(k.VideoList, {
                games: c,
                title: a("By Game")
              })]
            })]
          })
        })
      }));
      var pe = i(84644);
      const be = (0, T.withTranslations)((e => {
          let {
            t: a
          } = e;
          const i = (0, B.useNavigate)(),
            {
              setNormalLogo: n,
              setBreadcrumb: t,
              setTitle: s
            } = (0, G.useRockstarLocalState)(),
            {
              videoId: r
            } = (0, B.useParams)(),
            {
              video: d,
              related: o
            } = (0, pe.useVideoData)({
              id: Number(r)
            });
          return (0, l.useEffect)((() => (t([{
            href: "/videos",
            title: a("Videos")
          }]), n(!1), () => {
            n(!0), t()
          })), []), (0, l.useEffect)((() => {
            d && s(`${d.game.title} - ${d.title}`)
          }), [d]), d ? (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsx)(pe.PlayerWithInfo, {
              videoId: Number(r),
              videoChangeCallback: e => {
                i(`../videos/${e}`)
              }
            }), o?.results?.length ? (0, N.jsx)(k.VideoList, {
              vids: o.results,
              title: a("Related Videos")
            }) : ""]
          }) : null
        })),
        he = ((0, A.defineMessages)({}), JSON.parse('{"us":{"footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"London","footer_locations_new_york":"New York","footer_locations_paris":"Paris","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Community Guidelines","rockstargames_company_info_br":"Brazil","rockstargames_company_info_cz":"Czech Republic","rockstargames_company_info_de":"Germany","rockstargames_company_info_display_for_country":"Display page information for {country}","rockstargames_company_info_es":"Spain","rockstargames_company_info_fr":"France","rockstargames_company_info_it":"Italy","rockstargames_company_info_jp":"Japan","rockstargames_company_info_kr":"South Korea","rockstargames_company_info_mx":"Mexico","rockstargames_company_info_nl":"Netherlands","rockstargames_company_info_pl":"Poland","rockstargames_company_info_ru":"Russian Federation","rockstargames_company_info_sa":"Saudi Arabia","rockstargames_company_info_tw":"Taiwan","rockstargames_company_info_us":"United States","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"Download {item} {collection}","rockstargames_downloads_dimensions_label":"{width} by {height} pixels.","rockstargames_downloads_go_back":"Go back"},"de":{"community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Community-Richtlinien"},"es":{"community_guidelines_hero_aria_label":"¡Pide perdón, respeta a los demás!","community_guidelines_hero_title":"Directrices de la comunidad"},"mx":{"community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Directrices de la comunidad"},"fr":{"community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Règles de la communauté"},"it":{"community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Linee guida della comunità"},"jp":{"community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"コミュニティガイドライン"},"kr":{"community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"커뮤니티 가이드라인"},"pl":{"community_guidelines_hero_aria_label":"Zachowuj się grzecznie!","community_guidelines_hero_title":"Wskazówki społeczności"},"br":{"community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Diretrizes da Comunidade"},"ru":{"community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Правила сообщества"},"hans":{"community_guidelines_hero_aria_label":"说声对不起，做个好人！","community_guidelines_hero_title":"社区准则"},"tw":{"community_guidelines_hero_aria_label":"敢於道歉，友善待人！","community_guidelines_hero_title":"社群守則"}}'));
      var Ne = i(5752),
        ye = i.n(Ne);
      const _e = (0, A.withIntl)((0, T.withTranslations)((e => {
        let {
          t: a
        } = e;
        const {
          setBreadcrumb: i
        } = (0, G.useRockstarLocalState)(), {
          data: n
        } = (0, V.useQuery)(ye(), {
          autoSetLoading: !0
        }), t = n?.games ?? null;
        return (0, l.useEffect)((() => (i([{
          href: "/games",
          title: a("Games")
        }]), () => i())), [t]), t ? (0, N.jsxs)(N.Fragment, {
          children: [!1, (0, N.jsx)(N.Fragment, {
            children: (0, N.jsx)("div", {
              className: "rockstargames-sites-rockstargamese688ae11bba38a9723018b024df142ee",
              "data-testid": "gamesBody",
              children: t.results.map((e => (0, N.jsx)(k.GameCard.Link, {
                game: e
              }, e.title_slug)))
            })
          })]
        }) : null
      })), he);
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
          const r = (0, N.jsx)(N.Fragment, {
              children: t.map((e => (0, N.jsx)(k.A, {
                target: "_blank",
                to: `/game-digital-purchase?game=${a.id}&platform=${e.platform_id}`,
                children: `${e.platform_name} - Digital`
              }, e.platform_name)))
            }),
            l = (0, N.jsx)(N.Fragment, {
              children: n.map((e => (0, N.jsx)(k.A, {
                target: "_blank",
                to: e.href,
                children: `${e.platform.name} - Physical`
              }, e.href)))
            });
          if (s > 1) return (0, N.jsxs)(k.Dropdown, {
            title: i("Buy Now"),
            children: [r, l]
          });
          const d = n.length ? n[0] : t[0];
          return d?.href ? (0, N.jsx)(k.Button, {
            to: d.href,
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
          return (0, N.jsx)("h2", {
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
            t = [],
            s = ["libertycitystories", "vicecitystories"].includes(a.title_slug);
          return a.developers.map((e => {
            t.push(e.title)
          })), a.platforms.map((e => {
            n.push(e.name)
          })), (0, N.jsx)($e, {
            title: i("Specifications"),
            children: (0, N.jsxs)("div", {
              className: "rockstargames-sites-rockstargamesa3be2ad0c6089bcc99dc39a07f1c8556",
              children: [(0, N.jsx)(Ae, {
                title: i("Developer"),
                children: t.join(", ")
              }), (0, N.jsx)(Ae, {
                title: i("Platform"),
                children: n.join(", ")
              }), (0, N.jsx)(Ae, {
                title: i("Release Date"),
                children: a.release_date_in_words
              }), (0, N.jsxs)("dl", {
                className: "rockstargames-sites-rockstargamesb2e21b26b02b2f01abbfafaa61d2132f",
                children: [(0, N.jsx)("dt", {
                  children: i("Rating")
                }), (0, N.jsxs)("dd", {
                  className: "rockstargames-sites-rockstargamesbb187beb63c639e6ee81536d2ec853cc",
                  children: [(0, N.jsx)(k.Rating, {
                    href: a.url_rating,
                    img: a.img_rating,
                    descriptors: a.rating_descriptors
                  }), s ? (0, N.jsx)("div", {
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
          return (0, N.jsx)($e, {
            c: !0,
            title: i("Screens"),
            children: (0, N.jsx)("div", {
              className: "rockstargames-sites-rockstargamesdf799e57a036664e01d8b1c28918f7e7",
              children: a.map((e => (0, N.jsx)("div", {
                style: {
                  backgroundImage: `url(${e.file})`
                }
              }, e.file)))
            })
          })
        },
        Te = e => {
          let {
            game: a,
            t: i
          } = e;
          const [n, t] = (0, l.useState)(!1), s = "<br>", r = a.description.includes(s);
          return (0, N.jsx)($e, {
            className: "rockstargames-sites-rockstargamesbb3bcfffbb0324212ca756bbcf0b331d",
            title: i("Game Description"),
            children: r ? (0, N.jsxs)(N.Fragment, {
              children: [(0, N.jsx)("p", {
                children: a.description.split(s)[0]
              }), (0, N.jsx)("div", {
                "aria-live": "polite",
                children: n && (0, N.jsx)("p", {
                  children: a.description.split(s).slice(1)
                })
              }), " ", (0, N.jsx)(k.Button, {
                context: "secondary",
                onClick: () => t(!n),
                "aria-expanded": n,
                children: (0, N.jsx)("span", {
                  "aria-live": "polite",
                  children: i(n ? "Read Less" : "Read More")
                })
              })]
            }) : (0, N.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: a.description
              }
            })
          })
        },
        Ie = e => {
          let {
            game: a,
            posts: i,
            t: n
          } = e;
          return (0, N.jsxs)($e, {
            title: n("Latest News"),
            className: "rockstargames-sites-rockstargamesae6f169b7d8b535785cbab042d17b2f3",
            children: [(0, N.jsx)("div", {
              className: "rockstargames-sites-rockstargamesf4370b320e728cb6f2ebfe098d24dd9a",
              children: i.map((e => (0, N.jsx)(k.NewswireCard, {
                noSpecialOrder: !0,
                post: e
              }, e.id)))
            }), (0, N.jsx)(k.Button, {
              "data-gtm-category": "Games",
              "data-gtm-action": "Latest News",
              "data-gtm-label": `${a.title} - More Click`,
              to: `/newswire?tag_id=${a.tags[0].id}`,
              context: "secondary",
              children: n("Read more at the Rockstar Newswire")
            })]
          })
        },
        De = e => {
          let {
            game: a,
            videos: i,
            t: n
          } = e;
          return (0, N.jsxs)($e, {
            title: n("Latest Videos"),
            className: "rockstargames-sites-rockstargamesea974aced4784cc236949e23461151c5",
            children: [(0, N.jsx)("div", {
              className: "rockstargames-sites-rockstargamese1adbaf782c177537eee8ed7acdb33a9",
              children: i.map((e => (0, N.jsx)(k.VideoCard.Link, {
                video: e,
                gameTitleNecessary: !1
              }, e.id)))
            }), (0, N.jsx)(k.Button, {
              "data-gtm-category": "Games",
              "data-gtm-action": "Latest Videos",
              "data-gtm-label": `${a.title} - View All Click`,
              to: `/videos?type=game&gameId=${a.id}`,
              context: "secondary",
              children: n("See all %s videos").replace("%s", a.title)
            })]
          })
        },
        Ae = e => {
          let {
            children: a,
            title: i,
            className: n = ""
          } = e;
          return (0, N.jsxs)("dl", {
            className: n,
            children: [(0, N.jsx)("dt", {
              children: i
            }), (0, N.jsx)("dd", {
              dangerouslySetInnerHTML: {
                __html: a
              }
            })]
          })
        },
        $e = e => {
          let {
            title: a,
            className: i = "",
            children: n,
            style: t = {}
          } = e;
          return (0, N.jsxs)("section", {
            className: i,
            style: t,
            children: [a ? (0, N.jsx)("h4", {
              className: "rockstargames-sites-rockstargamesd3ae0f7bea78620d460ed1de4bfb1546",
              children: a
            }) : "", n]
          })
        },
        Ee = (0, T.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            setBreadcrumb: i,
            setTitle: n
          } = (0, G.useRockstarLocalState)(), t = (0, B.useParams)(), {
            data: s
          } = (0, V.useQuery)(we(), {
            autoSetLoading: !0,
            variables: {
              titleSlug: t.gameTitlelug
            }
          }), r = s?.game ?? null;
          return (0, l.useEffect)((() => (r && n(r.title), i([{
            href: "/games",
            title: a("Games")
          }]), () => {
            i()
          })), [r]), r ? (0, N.jsxs)("div", {
            className: "rockstargames-sites-rockstargamesf3214996ae18b839cbe8d74436e33569",
            children: [(0, N.jsxs)("div", {
              className: "rockstargames-sites-rockstargamesad748c74afaaac7ae3742ea01deb9327",
              children: [(0, N.jsxs)("div", {
                className: "rockstargames-sites-rockstargamesb12200c67941853e210bfa8ec2a2151b",
                children: [(0, N.jsx)(je, {
                  game: r,
                  t: a
                }), (0, N.jsxs)("div", {
                  className: "rockstargames-sites-rockstargamese117d55b425e388a7f3ef0036fad9045",
                  children: [(0, N.jsx)(xe, {
                    game: r,
                    t: a
                  }), r.has_official_site && (0, N.jsx)(k.Button, {
                    to: r.url_official,
                    context: "secondary",
                    target: "_blank",
                    "data-gtm-category": "Games",
                    "data-gtm-action": "Official Site Click-through",
                    "data-gtm-label": r.title,
                    children: a("Official Site")
                  })]
                })]
              }), (0, N.jsx)(k.GameCard.Art, {
                title: r.title,
                fob640: r.fob_1280,
                titleSlug: r.title_slug
              })]
            }), (0, N.jsxs)("div", {
              className: "rockstargames-sites-rockstargamesce487783cab9e36402d70d80e6d9d778",
              children: [(0, N.jsx)(Te, {
                game: r,
                t: a
              }), r.tags.length && r.tags[0].videos.length ? (0, N.jsx)(De, {
                game: r,
                videos: r.tags[0].videos,
                t: a
              }) : "", r.tags.length && r.tags[0].posts.length ? (0, N.jsx)(Ie, {
                game: r,
                posts: r.tags[0].posts,
                t: a
              }) : "", r.screens.length ? (0, N.jsx)(Ve, {
                screens: r.screens,
                t: a
              }) : "", (0, N.jsx)(Fe, {
                game: r,
                t: a
              })]
            })]
          }) : null
        }));
      var Ce = i(55120),
        Le = i(79176),
        Ge = i.n(Le);
      const Be = "rockstargames-sites-rockstargamesfb53bedab2c55d1a3c602f6d22cbf878",
        Me = e => {
          let {
            loading: a,
            searchResponse: i,
            searchTerm: n,
            activeTab: t,
            t: s
          } = e;
          const [r, l] = (0, B.useSearchParams)();
          let d;
          switch (t) {
            case "posts":
              d = i.posts.results.map((e => (0, N.jsx)(k.NewswireCard, {
                post: e,
                noSpecialOrder: !0
              }, e.id)));
              break;
            case "games":
              d = i.games.results.map((e => (0, N.jsx)(k.GameCard.Link, {
                game: e
              }, e.id)));
              break;
            case "videos":
              d = i.videos.results.map((e => (0, N.jsx)(k.VideoCard.Link, {
                video: e
              }, e.id)));
              break;
            default:
              d = null
          }
          return (0, N.jsxs)(N.Fragment, {
            children: [a ? "" : (0, N.jsx)("section", {
              className: "rockstargames-sites-rockstargamesb6a41ef752e979cced54d95e69679ae9",
              children: (0, N.jsx)("div", {
                className: "rockstargames-sites-rockstargamesc0e4a01d8eeef3f28aaaeea0249d53e8",
                children: d
              })
            }), i[t]?.paging ? (0, N.jsx)("section", {
              className: "rockstargames-sites-rockstargamesc024862ad35278cedeff9669a4045d22",
              children: (0, N.jsx)(k.Paging, {
                data: i[t].paging,
                onPageUpdate: e => {
                  l({
                    ...Object.fromEntries([...r]),
                    page: e
                  }), window.scrollTo(0, 0)
                }
              })
            }) : ""]
          })
        },
        Pe = (0, T.withTranslations)((e => {
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
            } = (0, G.useRockstarLocalState)(),
            r = (0, T.useQueryParams)(),
            [d, o] = (0, l.useState)(null),
            [c, m] = (0, l.useState)({}),
            [u, g] = (0, l.useState)(r.get("tab") ?? "games"),
            {
              data: v = {},
              loading: f
            } = (0, V.useQuery)(Ge(), {
              variables: c,
              skip: !Object.entries(c).length || !c.q,
              autoSetLoading: !0
            });
          return (0, l.useEffect)((() => {
            const e = {
              q: r.get("q"),
              page: Number(r.get("page") ?? 1),
              withGames: !0,
              withPosts: !0,
              withVideos: !0
            };
            m(e), t(r.get("q"))
          }), [r.get("q"), r.get("page"), r.get("tab"), u]), (0, l.useEffect)((() => {
            const e = Object.entries(v).find((e => {
              let [, a] = e;
              return a?.paging?.count > 0
            }))?.[0];
            g(r.get("tab") ?? e ?? "games")
          }), [v, r.get("tab")]), (0, l.useEffect)((() => {
            void 0 !== v?.games?.paging?.count && (o((v?.games?.paging?.count ?? 0) + (v?.videos?.paging?.count ?? 0) + (v?.posts?.paging?.count ?? 0)), s(v?.meta?.title.replace("%s", n)))
          }), [v, u]), Object.entries(c).length ? c.q ? null === d || f ? null : (0, N.jsx)(N.Fragment, {
            children: v[u].results.length ? (0, N.jsxs)("div", {
              className: Be,
              children: [(0, N.jsx)("section", {
                className: "rockstargames-sites-rockstargamesb54a20d6c2a28171fc3b24fa6d2df86f",
                children: (0, N.jsx)("h4", {
                  children: (0, N.jsx)(A.FormattedMessage, {
                    ...Ce.sitesRockstar.rsg_total_results_message,
                    values: {
                      Tab: (0, N.jsx)("span", {
                        className: "rockstargames-sites-rockstargamesc396a7460982460f718f495155de8358",
                        children: u
                      }),
                      Query: (0, N.jsx)("span", {
                        children: r.get("q")
                      })
                    }
                  })
                })
              }), f ? "" : (0, N.jsx)(Me, {
                searchResponse: v,
                searchTerm: n,
                activeTab: u,
                t: a
              })]
            }) : (0, N.jsx)("div", {
              className: Be,
              children: (0, N.jsxs)("section", {
                className: "rockstargames-sites-rockstargamesb408f6bebfeb1b3462c8dabcb36e0d9b",
                children: [(0, N.jsx)("div", {
                  className: "rockstargames-sites-rockstargamesc6f00c8492b7f5d1a7ae1cc143faa1ae"
                }), (0, N.jsx)("h4", {
                  children: i.formatMessage(Ce.sitesRockstar.rsg_no_results)
                })]
              })
            })
          }) : (0, N.jsx)("div", {
            className: "rockstargames-sites-rockstargamesa6b96f1aa331851eea3b9fad5cb04a8f",
            children: (0, N.jsxs)("section", {
              className: "rockstargames-sites-rockstargamescdc8dd93ce6946707dab221c0a16845e",
              children: [(0, N.jsx)("h3", {
                children: a("Search")
              }), (0, N.jsx)(k.SearchBox, {})]
            })
          }) : null
        })),
        Re = (0, A.defineMessages)({
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
        qe = i.n(Oe);
      const ze = (0, A.defineMessages)({
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
        He = {
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
      var Ue = i(79036),
        Qe = i.n(Ue);
      const Ke = (0, k.withSearchbarErrorBoundary)((e => {
          let {
            CookieSettingsModal: a,
            noCountrySelector: i,
            localeOverride: n,
            titleKey: t,
            jsonType: s
          } = e;
          const r = (0, A.useIntl)(),
            d = (0, B.useNavigate)(),
            o = (0, B.useLocation)(),
            c = (0, T.useLocale)(),
            m = (0, T.useQueryParams)(),
            u = (0, l.useRef)(),
            g = (e, a) => {
              const i = a ?? e.target.hash,
                n = document.getElementById(i.replace("#", "")),
                t = document.getElementsByName(i.replace("#", ""))?.[0],
                s = n ?? t ?? null,
                r = m.get("country");
              if (e) {
                const a = `${o.pathname}${m.get("country")?`?country=${r}`:""}${i}`;
                d(a), e.preventDefault()
              }
              s && window.scroll(0, s.offsetTop - u.current.getBoundingClientRect().height - 60)
            },
            [v, f] = (0, l.useState)({}),
            {
              data: p,
              loading: b
            } = (0, V.useQuery)(Qe(), {
              variables: v,
              skip: !Object.entries(v).length,
              autoSetLoading: !0
            });
          (0, l.useEffect)((() => {
            const e = m.get("country") ?? m.get("locale") ?? null,
              a = void 0 === i,
              t = a && null !== e ? e : a && c.split("_").length > 1 ? "hans" === c.split("_")[1] ? c.split("_")[0] : c.split("_")[1] : c,
              r = n || t || "us";
            f({
              jsonType: s,
              jsonLocale: r,
              metaUrl: `/${s}`,
              locale: r
            })
          }), [m.get("country"), m.get("locale"), n]), (0, l.useEffect)((() => {
            document.querySelectorAll(".scrollToLink").forEach((e => {
              (e => {
                if (e) {
                  const a = m.get("country"),
                    i = e.href.split("#")[1],
                    n = document.getElementsByTagName("base")[0]?.getAttribute("href");
                  e.setAttribute("href", `${n}${o.pathname.replace("/","")}${null!==a?`?country=${a}`:""}#${i}`)
                }
              })(e), e.addEventListener("click", (e => {
                g(e, !1)
              }))
            })), "" !== o.hash && setTimeout((() => {
              g(!1, o.hash)
            }), 10)
          }), [p]);
          const {
            content: h
          } = p?.companyInfo ?? "", {
            title: y
          } = p?.meta ?? t ?? "";
          return (0, N.jsxs)("div", {
            className: He.companyInfo,
            "data-locale": v.jsonLocale,
            "data-page": s,
            children: [(0, N.jsxs)("section", {
              className: He.top,
              ref: u,
              children: [(0, N.jsx)("h1", {
                children: y
              }), "undefined" !== i && i ? "" : (0, N.jsx)("nav", {
                className: He.nav,
                children: ["us", "br", "cz", "de", "es", "fr", "it", "jp", "kr", "mx", "nl", "pl", "ru", "sa", "tw", "zh"].map(((e, a) => {
                  const i = r.formatMessage(ze.rockstargames_company_info_display_for_country, {
                    country: r.formatMessage(ze[`rockstargames_company_info_${e}`])
                  });
                  return (0, N.jsx)(k.A, {
                    to: `${o.pathname}?country=${e}`,
                    className: He[e],
                    title: i,
                    children: (0, N.jsx)(k.VisuallyHidden, {
                      children: i
                    })
                  }, a)
                }))
              })]
            }), p && !b ? (0, N.jsx)("section", {
              className: He.content,
              "data-json-type": s,
              children: "cookies" === s && p ? (0, N.jsx)(qe(), {
                renderInWrapper: !1,
                components: {
                  CookieSettingsModal: a
                },
                jsx: h,
                onError: e => {
                  console.error("jsx error in companyinfo", e)
                }
              }) : (0, N.jsx)("span", {
                dangerouslySetInnerHTML: {
                  __html: h
                }
              })
            }) : ""]
          })
        })),
        We = (0, A.withIntl)((0, T.withLocale)((e => {
          let {
            locale: a
          } = e;
          const n = (0, A.useIntl)();
          return (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsx)("img", {
              src: i(47520),
              className: "rockstargames-sites-rockstargamesec30ec5e27e1ebb1542c6146f14b2e76",
              "aria-label": n.formatMessage(Re.community_guidelines_hero_aria_label)
            }), (0, N.jsx)(Ke, {
              localeOverride: a,
              jsonType: "community-guidelines",
              titleKey: "Community Guidelines"
            })]
          })
        })), he),
        Je = () => (0, N.jsx)(Ke, {
          jsonType: "corpinfo",
          titleKey: "Corporate Information",
          noCountrySelector: !0
        }),
        Ye = () => (0, N.jsx)(Ke, {
          jsonType: "eula",
          titleKey: "eula-title"
        }),
        Xe = () => (0, N.jsx)(Ke, {
          jsonType: "legal",
          titleKey: "Terms of Service"
        }),
        Ze = () => (0, N.jsx)(Ke, {
          jsonType: "careers-privacy",
          titleKey: "Privacy Policy"
        }),
        ea = () => (0, N.jsx)(Ke, {
          jsonType: "privacy",
          titleKey: "Privacy Policy"
        }),
        aa = e => {
          let {
            t: a
          } = e;
          return (0, N.jsx)(k.Button, {
            className: He.cookieSettingsButton,
            onClick: () => window.OneTrust?.ToggleInfoDisplay(),
            children: a("gdpr-settings-button-title")
          })
        },
        ia = () => (0, N.jsx)(Ke, {
          jsonType: "cookies",
          titleKey: "Cookie Policy",
          CookieSettingsModal: (0, T.withTranslations)(aa)
        }),
        na = () => (0, N.jsx)(Ke, {
          jsonType: "ccpa",
          titleKey: "ccpa-title",
          noCountrySelector: !0
        }),
        ta = {
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
        ra = i.n(sa);
      const la = (0, T.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            data: i
          } = (0, V.useQuery)(ra(), {
            autoSetLoading: !0
          });
          if (!i) return null;
          const {
            manuals: n
          } = i;
          return (0, N.jsxs)("div", {
            className: ta.manuals,
            children: [(0, N.jsx)("h2", {
              children: a("Manuals")
            }), (0, N.jsx)("div", {
              className: ta.list,
              children: n.map((e => (0, N.jsxs)("div", {
                className: ta.item,
                children: [(0, N.jsx)("div", {
                  className: ta.img,
                  style: {
                    backgroundImage: `url(${e.game.fob_640})`
                  }
                }), (0, N.jsx)(k.Dropdown, {
                  title: e.game.title,
                  className: ta.dropdown,
                  children: e.manuals_platforms.map((e => (0, N.jsxs)("p", {
                    children: [(0, N.jsx)("span", {
                      children: e.platform
                    }), e.manuals_links.map((e => (0, N.jsx)("a", {
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
        da = e => {
          let {
            detail: a
          } = e;
          const {
            sanitize: i
          } = Q();
          return (0, N.jsxs)("div", {
            className: ta.detail,
            children: [(0, N.jsx)("div", {
              dangerouslySetInnerHTML: {
                __html: i(a.content)
              }
            }), a.album_cover ? (0, N.jsx)("div", {
              className: [ta.album, ta[a.album_cover]].join(" ")
            }) : "", (0, N.jsx)(k.A, {
              to: "/",
              children: (0, N.jsx)("div", {
                className: ta.rockstar
              })
            })]
          })
        },
        oa = (0, T.withTranslations)((e => {
          let {
            stations: a,
            gameId: i,
            t: n
          } = e;
          const {
            sanitize: t
          } = Q();
          return (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsx)("h1", {
              children: n("Music Credits")
            }), a && 55 === a[0].game_id ? (0, N.jsxs)("div", {
              className: ta.warriorsCredit,
              children: [(0, N.jsx)("p", {
                children: "Score by Steve Donohoe and Neveroddoreven"
              }), (0, N.jsx)("p", {
                children: "Russell Simpson - Guitar"
              }), (0, N.jsx)("p", {
                children: "Jeff Scale - Bass"
              }), (0, N.jsx)("p", {
                children: "Brian Vella - Drums"
              }), (0, N.jsx)("p", {
                children: "Recorded at Metalworks Studios, Toronto"
              }), (0, N.jsx)("p", {
                children: "Engineered by Ian Bodzasi"
              })]
            }) : "", (0, N.jsx)("div", {
              className: [ta.list, a && 55 === a[0].game_id ? ta.warriors : ""].join(" "),
              children: a && a.map(((e, s) => (0, N.jsxs)("div", {
                className: ta.station,
                children: [55 !== e.game_id ? (0, N.jsx)("div", {
                  className: [ta.logo, ta[e.slug]].join(" ")
                }) : (0, N.jsx)("h3", {
                  children: e.title
                }), e.music_credits && e.music_credits.map((e => (0, N.jsxs)("div", {
                  className: ta.credit,
                  children: [(0, N.jsx)("h5", {
                    dangerouslySetInnerHTML: {
                      __html: t(e.title)
                    }
                  }), (0, N.jsx)("p", {
                    children: e.written_by
                  }), (0, N.jsx)("p", {
                    children: e.published_by
                  }), (0, N.jsx)("p", {
                    children: e.courtesy_of
                  }), e?.music_detail ? (0, N.jsx)("p", {
                    className: ta.additional,
                    children: (0, N.jsx)(k.A, {
                      to: `music?gameId=${i}&stationId=${a[s].id}&songId=${e.id}`,
                      children: n("Lyrics/Info")
                    })
                  }) : ""]
                }, e.title)))]
              }, e.id)))
            })]
          })
        }));
      var ca = i(73772),
        ma = i.n(ca);
      const ua = () => {
          const e = (0, T.useQueryParams)(),
            a = Number(e.get("gameId")),
            i = Number(e.get("songId")),
            n = Number(e.get("stationId"));
          let t = !1;
          const {
            data: s
          } = (0, V.useQuery)(ma(), {
            variables: {
              gameId: a
            },
            autoSetLoading: !0
          });
          if (!s) return null;
          const {
            musicStations: r
          } = s;
          return Object.keys(r).length, r.map((e => {
            e.id === n && e.music_credits.map((e => {
              e.id === i && (t = e.music_detail)
            }))
          })), (0, N.jsxs)("div", {
            className: [ta.music, 25 === a ? ta.gtaiv : 26 === a ? ta.tlad : 32 === a ? ta.bogt : 28 === a ? ta.eflc : 34 === a ? ta.vcs : ""].join(" "),
            children: [(0, N.jsx)("div", {
              className: [ta.gameLogo, 26 === a ? ta.tlad : 32 === a ? ta.bogt : 28 === a ? ta.eflc : 25 === a ? ta.gtaiv : 34 === a ? ta.vcs : 55 === a ? ta.warriors : ""].join(" ")
            }), a && r ? n && i && t ? (0, N.jsx)(da, {
              detail: t
            }) : (0, N.jsx)(oa, {
              stations: r,
              gameId: a
            }) : null]
          })
        },
        ka = (0, T.withTranslations)((e => {
          let {
            t: a
          } = e;
          return (0, N.jsxs)("div", {
            className: "rockstargames-sites-rockstargamesabdecdd87f2cf4b8194c0091fdd0b4a0",
            children: [(0, N.jsx)("section", {
              className: "rockstargames-sites-rockstargamesd13bb1cebcd96c067a01aee27efccfed",
              children: (0, N.jsx)("h1", {
                children: "Contact Us"
              })
            }), (0, N.jsxs)("section", {
              className: "rockstargames-sites-rockstargamesb58b960fc23a48600bdbc8a2777aa5f3",
              children: [(0, N.jsx)("p", {
                children: a("contact.intro")
              }), (0, N.jsxs)("p", {
                children: [(0, N.jsx)("span", {
                  children: a("contact.gtao-feedback")
                }), (0, N.jsx)("br", {}), (0, N.jsx)(k.A, {
                  to: "https://www.rockstargames.com/GTAOnline/feedback",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press GTAOnline Feedback",
                  children: "https://www.rockstargames.com/GTAOnline/feedback"
                })]
              }), (0, N.jsxs)("p", {
                children: [(0, N.jsx)("span", {
                  children: a("contact.rdo-feedback")
                }), (0, N.jsx)("br", {}), (0, N.jsx)(k.A, {
                  to: "https://www.rockstargames.com/reddeadonline/feedback",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press RDO Feedback",
                  children: "https://www.rockstargames.com/reddeadonline/feedback"
                })]
              }), (0, N.jsxs)("p", {
                children: [(0, N.jsx)("span", {
                  children: a("contact.technical")
                }), (0, N.jsx)("br", {}), (0, N.jsx)(k.A, {
                  to: "https://support.rockstargames.com/",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Support",
                  children: "https://support.rockstargames.com/"
                })]
              }), (0, N.jsxs)("p", {
                children: [(0, N.jsx)("span", {
                  children: a("contact.career")
                }), (0, N.jsx)("br", {}), (0, N.jsx)(k.A, {
                  to: "https://www.rockstargames.com/careers/",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Careers",
                  children: "https://www.rockstargames.com/careers/"
                })]
              }), (0, N.jsxs)("p", {
                children: [(0, N.jsx)("span", {
                  children: a("contact.copyright")
                }), (0, N.jsx)("br", {}), (0, N.jsx)(k.A, {
                  to: "https://support.rockstargames.com/articles/200153756/Policy-on-posting-copyrighted-Rockstar-Games-material",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Copyright Policy",
                  children: "https://support.rockstargames.com/articles/200153756/Policy-on-posting-copyrighted-Rockstar-Games-material"
                })]
              }), (0, N.jsxs)("p", {
                children: [(0, N.jsx)("span", {
                  children: a("contact.legal")
                }), (0, N.jsx)("br", {}), (0, N.jsx)(k.A, {
                  to: "mailto:Copyright@take2games.com",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Copyright Email",
                  children: "Copyright@take2games.com"
                })]
              }), (0, N.jsxs)("p", {
                children: [(0, N.jsx)("span", {
                  children: a("contact.latest")
                }), (0, N.jsx)("br", {}), (0, N.jsx)(k.A, {
                  to: "https://www.rockstargames.com/",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Rockstar Games Site",
                  children: "https://www.rockstargames.com/"
                }), (0, N.jsx)("br", {}), (0, N.jsx)(k.A, {
                  to: "https://twitter.com/RockstarGames",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Twitter Site",
                  children: "https://twitter.com/RockstarGames"
                }), (0, N.jsx)("br", {}), (0, N.jsx)(k.A, {
                  to: "https://www.instagram.com/rockstargames/",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Instagram Site",
                  children: "https://www.instagram.com/rockstargames/"
                }), (0, N.jsx)("br", {}), (0, N.jsx)(k.A, {
                  to: "https://www.facebook.com/rockstargames",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Facebook Site",
                  children: "https://www.facebook.com/rockstargames"
                }), (0, N.jsx)("br", {}), (0, N.jsx)(k.A, {
                  to: "https://www.youtube.com/user/RockstarGames",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Youtube Site",
                  children: "https://www.youtube.com/user/RockstarGames"
                })]
              }), (0, N.jsx)("br", {})]
            })]
          })
        })),
        ga = {
          maint: "rockstargames-sites-rockstargamesee5e5a68eb125090583fe5d4f8ce03df",
          content: "rockstargames-sites-rockstargamesf5aef392e680073f8fed78567c8dbb4e",
          logo: "rockstargames-sites-rockstargamesda2fe3ab2392b09ff23958abdf602eb4"
        },
        va = () => (0, N.jsx)("div", {
          className: ga.maint,
          children: (0, N.jsxs)("div", {
            className: ga.content,
            children: [(0, N.jsx)("div", {
              className: ga.logo
            }), (0, N.jsx)("p", {
              children: "The Rockstar Games Social Club is currently undergoing maintenance. Please check back soon."
            }), (0, N.jsx)("a", {
              className: ga.support,
              href: "https://support.rockstargames.com/",
              children: "https://support.rockstargames.com/"
            })]
          })
        }),
        fa = () => (0, N.jsxs)("div", {
          className: "rockstargames-sites-rockstargamesc4061150feb48d282a2363b7cbed6ac5",
          children: [(0, N.jsx)("div", {
            className: "rockstargames-sites-rockstargamesa026b866e5e33e40478c738b8a6714fd"
          }), (0, N.jsx)("h3", {
            children: "Standard Deviation is now a part of Rockstar Games."
          })]
        }),
        pa = {
          jpwrapper: "rockstargames-sites-rockstargamesba6d4394dc71688a882bb545fc08beb4",
          body: "rockstargames-sites-rockstargamesdd0895660ec10bf279836cd110070640",
          responsiveImage: "rockstargames-sites-rockstargamesfb8048b514e49776135df91d47ef29db",
          link: "rockstargames-sites-rockstargamesac320620a02a8d3897d310cf288855ab",
          bodyPadding: "rockstargames-sites-rockstargamesd13a76b87f08d8fdbc47d45cd7450dd1",
          headline_3: "rockstargames-sites-rockstargamesa12bcaa8e0eec396547de0cae798278a",
          headline_2: "rockstargames-sites-rockstargamese2c90393cdf11f29befc2038de073e48",
          disclaimer: "rockstargames-sites-rockstargamesa88581f8d3bc749026f10eb47ec6aeb2"
        },
        ba = k.framer.withFadeIn((() => (0, N.jsxs)("div", {
          className: pa.jpwrapper,
          children: [(0, N.jsx)(k.MultiSourceImage, {
            className: pa.responsiveImage,
            image: {
              desktop: i(98508)
            }
          }), (0, N.jsxs)(k.Grid, {
            className: [pa.body, pa.inner, pa.gap_sm].join(" "),
            children: [(0, N.jsx)("h1", {
              children: "GTAマネーを最大250万ドル獲得しよう"
            }), (0, N.jsxs)("p", {
              children: [(0, N.jsx)("a", {
                className: pa.link,
                href: "https://www.rockstargames.com/jp/newswire/article/175k8294o31ooo/gta-online-san-andreas-mercenaries-now-available",
                children: "「GTAオンライン：サンアンドレアスの傭兵」"
              }), "のリリースを記念して、日本のプレイヤーだけが参加できる初めてのコミュニティチャレンジを開催します。"]
            }), (0, N.jsx)("p", {
              children: "今から9月7日までに密輸貨物の売却ミッションに参加して密輸貨物をさばき、合計GTAマネー3億ドルを売り上げ、GTAマネー50万ドルを解除しましょう。"
            }), (0, N.jsx)("p", {
              children: "密輸貨物を入手すると、格納庫内のパソコンからフリートレード運送のサイトを使って売却ミッションを開始できるようになります。"
            }), (0, N.jsx)(k.MultiSourceImage, {
              image: {
                desktop: i(20372)
              }
            }), (0, N.jsx)("h1", {
              children: "お気に入りのクリエイターを応援しよう"
            }), (0, N.jsx)("p", {
              children: "YouTubeとTwitchで活躍する日本のトップクリエイターたちが、8月31日から9月3日まで4日間のライブストリーミングイベントに参加します。 クリエイターには毎日チャレンジが課せられ、成功すれば日本のプレイヤー全員に追加でGTAマネー200万ドルが贈られます。"
            }), (0, N.jsx)(k.MultiSourceImage, {
              className: pa.bodyPadding,
              image: {
                desktop: i(71452)
              }
            }), (0, N.jsx)("p", {
              children: "各チームは最近追加されたキャリア進行状況メニューを使って自分たちの成績を記録し、 条件に到達すれば下記のボーナスGTAマネーが日本のプレイヤー全員に贈られます。"
            }), (0, N.jsx)(k.MultiSourceImage, {
              className: pa.bodyPadding,
              image: {
                desktop: i(82004)
              }
            }), (0, N.jsxs)("p", {
              children: ["さらなる詳細は、", (0, N.jsx)("a", {
                href: "https://www.twitch.tv/dasoku_aniki",
                className: pa.link,
                children: "Twitch"
              }), "で8月31日午後6時(日本時間)にイベントMCの蛇足の配信を視聴してください。"]
            }), (0, N.jsx)("p", {
              className: pa.disclaimer,
              children: "チャレンジは2023年9月7日午後6時(日本時間)に終了します。日本にお住いのプレイヤーに限ります。 Social Clubアカウント1つにつき最大でGTAマネー250万ドルが贈られます。コミュニティ報酬はチャレンジ参加者限定です。 コミュニティの目標に到達した場合、報酬はゲーム内で受け取る必要があります。コンソールでオンラインをプレイするには別に有料のサブスクリプションが必要です。 規約が適用されます。可能な限り、イベント終了後72時間以内にプレイヤーのアカウントに贈られます。"
            }), (0, N.jsx)(k.Rating, {
              condensed: !0,
              titleSlug: "GTAOnline"
            })]
          })]
        }))),
        ha = {
          "gta-tv": (0, l.lazy)((() => i.e(952).then(i.t.bind(i, 49952, 23)))),
          "modules-core-gif-viewer": (0, l.lazy)((() => i.e(690).then(i.t.bind(i, 53690, 23)))),
          "modules-core-videoplayer": (0, l.lazy)((() => Promise.resolve().then(i.t.bind(i, 84644, 23)))),
          "rockstar-tv": (0, l.lazy)((() => i.e(868).then(i.t.bind(i, 86868, 23)))),
          "screenshot-viewer": (0, l.lazy)((() => i.e(948).then(i.t.bind(i, 5330, 23)))),
          "sites-careers": (0, l.lazy)((() => i.e(396).then(i.t.bind(i, 7396, 23)))),
          "sites-gta": (0, l.lazy)((() => i.e(832).then(i.t.bind(i, 8832, 23)))),
          "sites-gta-gen9": (0, l.lazy)((() => i.e(620).then(i.t.bind(i, 71620, 23)))),
          "sites-gta-trilogy": (0, l.lazy)((() => i.e(708).then(i.t.bind(i, 21708, 23)))),
          "sites-red-dead-online": (0, l.lazy)((() => i.e(140).then(i.t.bind(i, 47140, 23)))),
          "sites-red-dead-redemption": (0, l.lazy)((() => i.e(190).then(i.t.bind(i, 82190, 23)))),
          "sites-red-dead-redemption-2": (0, l.lazy)((() => i.e(735).then(i.t.bind(i, 6735, 23))))
        },
        Na = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const i = ha[e],
            {
              setHeaderHidden: n
            } = (0, G.useRockstarLocalState)();
          return (0, N.jsx)(l.Suspense, {
            fallback: "",
            children: (0, N.jsx)(i, {
              setHeaderHidden: n,
              config: a
            })
          })
        },
        ya = (0, k.withSearchbarErrorBoundary)((() => {
          const e = [{
            element: (0, N.jsx)(z, {}),
            path: "/"
          }, {
            element: (0, N.jsx)(Ze, {}),
            path: "/careers-privacy"
          }, {
            element: (0, N.jsx)(na, {}),
            path: "/ccpa"
          }, {
            element: (0, N.jsx)(We, {}),
            path: "/community-guidelines"
          }, {
            element: (0, N.jsx)(B.Navigate, {
              to: "/community-guidelines",
              replace: !0
            }),
            path: "/conduct"
          }, {
            element: (0, N.jsx)(ka, {}),
            path: "/contact"
          }, {
            element: (0, N.jsx)(ia, {}),
            path: "/cookies"
          }, {
            element: (0, N.jsx)(Je, {}),
            path: "/corpinfo"
          }, {
            element: (0, N.jsx)(Ye, {}),
            path: "/eula"
          }, {
            element: (0, N.jsx)(_e, {}),
            path: "/games"
          }, {
            element: (0, N.jsx)(Ee, {}),
            path: "/games/:gameTitlelug"
          }, {
            element: (0, N.jsx)(Xe, {}),
            path: "/legal"
          }, {
            element: (0, N.jsx)(L.Credits, {
              title: "v"
            }),
            path: "/gta-v/thankyou"
          }, {
            element: (0, N.jsx)(fa, {}),
            path: "/standarddeviation"
          }, {
            element: (0, N.jsx)(ba, {}),
            path: "/community_event"
          }, {
            element: Na("sites-red-dead-redemption-2"),
            path: "/reddeadredemption2/*"
          }, {
            element: Na("sites-red-dead-redemption"),
            path: "/reddeadredemption/*"
          }, {
            element: (0, N.jsx)(L.Credits, {
              title: "rdr2"
            }),
            path: "/reddeadonline/thankyou"
          }, {
            element: Na("sites-careers"),
            path: "/careers/*"
          }, {
            element: (0, N.jsx)(de, {}),
            path: "/downloads/*"
          }, {
            element: Na("sites-red-dead-online"),
            path: "/reddeadonline/*"
          }, {
            element: Na("modules-core-gif-viewer"),
            path: "/gifs/:hashId"
          }, {
            element: Na("sites-gta-gen9", {
              routeRoot: "/gta-v"
            }),
            path: "/gta-v/*"
          }, {
            element: Na("sites-gta-gen9", {
              routeRoot: "/gta-plus"
            }),
            path: "/gta-plus/*"
          }, {
            element: Na("sites-gta-gen9", {
              routeRoot: "/gta-online"
            }),
            path: "/gta-online/*"
          }, {
            element: Na("sites-gta-trilogy"),
            path: "/GTATrilogy/*"
          }, {
            element: Na("gta-tv"),
            path: "/gtatv/*"
          }, {
            element: (0, N.jsx)(la, {}),
            path: "/manuals"
          }, {
            element: (0, N.jsx)(ua, {}),
            path: "/manuals/music"
          }, {
            element: (0, N.jsx)(oe, {}),
            path: "/newswire"
          }, {
            element: (0, N.jsx)(ue, {}),
            path: "/newswire/article/:articleId/:articleSlug"
          }, {
            element: (0, N.jsx)(ea, {}),
            path: "/old-privacy"
          }, {
            element: (0, N.jsx)(ea, {}),
            path: "/privacy"
          }, {
            element: Na("rockstar-tv"),
            path: "/rockstartv/*"
          }, {
            element: Na("screenshot-viewer"),
            path: "/screenshot-viewer/*"
          }, {
            element: (0, N.jsx)(Pe, {}),
            path: "/search"
          }, {
            element: (0, N.jsx)(va, {}),
            path: "/socialclubmaintenance"
          }, {
            element: Na("modules-core-videoplayer"),
            path: "/videoplayer"
          }, {
            element: (0, N.jsx)(fe, {}),
            path: "/videos"
          }, {
            element: (0, N.jsx)(be, {}),
            path: "/videos/:videoId"
          }, {
            element: Na("sites-gta"),
            path: "/VI"
          }, {
            element: (0, N.jsx)(k.Wasted, {
              error: {
                code: window?.env?.responseStatusCode ?? 398
              }
            }),
            path: "*"
          }];
          return (0, B.useRoutes)(e)
        })),
        _a = {
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
          } = (0, G.useRockstarLocalState)();
          return (0, l.useEffect)((() => {
            window.addEventListener("resize", (() => {
              document.body.height = window.innerHeight
            }))
          }), []), (0, N.jsx)("main", {
            role: "main",
            id: "main",
            className: [_a.main, a ? _a.standalone : "", e ? _a.headerHidden : ""].join(" "),
            children: (0, N.jsx)(ya, {})
          })
        })),
        wa = ((0, V.makeVar)({
          base: "",
          navOpen: !1
        }), document.location.pathname),
        xa = window.self !== window.top,
        ja = {
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
        Fa = (0, V.makeVar)(ja),
        Va = (0, V.makeVarNamespace)("rockstar-root"),
        Ta = window?.env?.graphEnv ?? "prod";
      u();
      const Ia = (() => {
          const e = window;
          if (e[m]?.history || u(), e[m]?.history) return e[m].history;
          throw new Error("Browser History has not been initialised")
        })(),
        Da = () => {
          const {
            state: {
              standalone: e,
              customFooter: a
            }
          } = (0, T.useRockstarLocalState)(), [i] = (0, l.useContext)(w), [{
            iso: n
          }] = (0, A.getLocale)();
          return (0, N.jsx)(A.IntlProvider, {
            locales: $.intlMessages,
            lang: n,
            children: (0, N.jsx)(D.GtmProvider, {
              children: (0, N.jsxs)(k.ScrollTracker, {
                threshold: [25, 50, 75, 90, 100],
                children: [i, (0, N.jsx)(k.ScrollToTop, {}), (0, N.jsx)(Sa, {}), e || a ? "" : (0, N.jsx)(L.FooterNav, {})]
              })
            })
          })
        },
        Aa = () => (0, N.jsx)(x, {
          children: (0, N.jsx)(Da, {})
        }),
        {
          pingBearer: $a
        } = (0, T.getScConfigForOrigin)(),
        Ea = (0, V.withReactiveState)((() => {
          const e = (0, V.useBase)(),
            {
              setLoading: a,
              setTitle: i,
              state: {
                headerHidden: n,
                standalone: t
              }
            } = (0, T.useRockstarLocalState)();
          return (0, l.useEffect)((() => {
            window.addEventListener("message", (e => {
              const n = e.data?.type ?? null;
              "graph.titleUpdate" === n && i(e.data.title), "graph.loadingUpdate" === n && a(e.data.loading)
            }))
          }), [a, i]), (0, N.jsx)(T.ResizeProvider, {
            children: (0, N.jsx)(I.ScrollProvider, {
              children: (0, N.jsxs)(D.RockstarUserProvider, {
                children: [!t && !n && (0, N.jsx)(C(), {
                  baseName: e
                }), (0, N.jsx)(o(), {
                  history: Ia,
                  basename: e,
                  children: (0, N.jsx)(Aa, {})
                })]
              })
            })
          })
        }), {
          state: Fa
        }),
        Ca = (0, V.withRockstarGraph)(Ea, {
          env: Ta,
          token: Va("token", null),
          tokenPing: Va("tokenPing", $a),
          tokenPingExpires: Va("tokenPingExpires", null),
          typePolicies: {
            ...F()
          }
        }),
        La = window?.env?.oneTrustId ?? null,
        Ga = window?.env?.gtmId ?? null;
      (0, n.init)({
        id: Ga
      }), s()({
        id: La,
        init: () => {
          const e = document.createElement("div");
          document.body.appendChild(e), (0, r.C)(e).render((0, N.jsx)(Ca, {}))
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
          r = new Set,
          l = new Set;
        for (s.forEach((function(e) {
            l.add(e)
          })); l.size > 0;) {
          var d = l;
          l = new Set, d.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              l.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
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
      var t = {};

      function s(e) {
        return e.filter((function(e) {
          if ("FragmentDefinition" !== e.kind) return !0;
          var a = e.name.value;
          return !t[a] && (t[a] = !0, !0)
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
      n.definitions = n.definitions.concat(s(i(73784).definitions)), n.definitions = n.definitions.concat(s(i(67308).definitions));
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
          r(e, a), l[e.name.value] = a
        }
      })), e.exports = n, e.exports.Home = function(e, a) {
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
      n.definitions = n.definitions.concat(s(i(73784).definitions)), n.definitions = n.definitions.concat(s(i(67308).definitions)), n.definitions = n.definitions.concat(s(i(28540).definitions));
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
          r(e, a), l[e.name.value] = a
        }
      })), e.exports = n, e.exports.Search = function(e, a) {
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
          r = new Set,
          l = new Set;
        for (s.forEach((function(e) {
            l.add(e)
          })); l.size > 0;) {
          var d = l;
          l = new Set, d.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              l.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
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
          r = new Set,
          l = new Set;
        for (s.forEach((function(e) {
            l.add(e)
          })); l.size > 0;) {
          var d = l;
          l = new Set, d.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              l.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
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
      n.definitions = n.definitions.concat(s(i(73784).definitions)), n.definitions = n.definitions.concat(s(i(67308).definitions));
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
          r(e, a), l[e.name.value] = a
        }
      })), e.exports = n, e.exports.GameInfo = function(e, a) {
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
          r = new Set,
          l = new Set;
        for (s.forEach((function(e) {
            l.add(e)
          })); l.size > 0;) {
          var d = l;
          l = new Set, d.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              l.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
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
          r = new Set,
          l = new Set;
        for (s.forEach((function(e) {
            l.add(e)
          })); l.size > 0;) {
          var d = l;
          l = new Set, d.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              l.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
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
      var r = {};

      function l(e, a) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == a) return n
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), r[e.name.value] = a
        }
      })), e.exports = n, e.exports.VideosList = function(e, a) {
        var i = {
          kind: e.kind,
          definitions: [l(e, a)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var n = r[a] || new Set,
          t = new Set,
          s = new Set;
        for (n.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var d = s;
          s = new Set, d.forEach((function(e) {
            t.has(e) || (t.add(e), (r[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return t.forEach((function(a) {
          var n = l(e, a);
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