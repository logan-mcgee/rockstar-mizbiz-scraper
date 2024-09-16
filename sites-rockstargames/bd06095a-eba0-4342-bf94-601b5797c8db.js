! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "bd06095a-eba0-4342-bf94-601b5797c8db", e._sentryDebugIdIdentifier = "sentry-dbid-bd06095a-eba0-4342-bf94-601b5797c8db")
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
  [1443], {
    61651: (e, a, o) => {
      o.d(a, {
        A: () => t
      });
      var s = o(71403),
        r = o(40207);
      const n = (0, s.forwardRef)(((e, a) => {
        const {
          threshold: o,
          callback: n,
          children: t,
          requireUser: i
        } = e, {
          track: c
        } = (0, r.useGtmTrack)(i), [_, l] = (0, s.useState)(a?.current);
        return (0, s.useEffect)((() => {
          a?.current && l(a.current)
        }), [a]), ((e, a, o) => {
          const [r, n] = (0, s.useState)({
            scrollDepths: e,
            scrollY: 0
          }), {
            scrollDepths: t,
            scrollY: i
          } = r;
          (0, s.useEffect)((() => {
            "undefined" != typeof window && 0 !== window.pageYOffset && n((e => ({
              ...e,
              scrollY: window.pageYOffset
            })))
          }), []), (0, s.useEffect)((() => {
            n({
              scrollDepths: e,
              scrollY: 0
            })
          }), [window.location.pathname]);
          const c = (0, s.useCallback)((() => {
            const e = document.documentElement,
              s = document.body,
              i = o?.scrollTop || e.scrollTop || s.scrollTop,
              _ = o?.scrollHeight || e.scrollHeight || s.scrollHeight,
              {
                clientHeight: l
              } = e,
              m = i / (_ - l) * 100;
            if (t) {
              const e = Math.min(...t, _);
              if (m >= e) {
                const s = t.filter((a => a !== e));
                0 === s.length && (o ?? window).removeEventListener("scroll", c), a && a({
                  scrollY: e,
                  scrollPercent: m,
                  remainingDepths: s
                }), n({
                  scrollY: e,
                  scrollDepths: s
                })
              }
            } else n({
              ...r,
              scrollY: m
            })
          }), [t, o, a]);
          (0, s.useEffect)((() => {
            if ("undefined" == typeof window) return;
            const e = o ?? window;
            return e.addEventListener("scroll", c), () => e.removeEventListener("scroll", c)
          }), [c])
        })(o, (e => {
          let {
            scrollY: a
          } = e;
          c({
            event: "page_scroll",
            scroll_depth: a
          }), "function" == typeof n && n(a)
        }), _), t
      }));
      n.displayName = "ScrollTracker";
      const t = n
    },
    3583: (e, a, o) => {
      o.d(a, {
        A: () => n
      });
      var s = o(71403),
        r = o(89779);
      const n = () => {
        const {
          pathname: e
        } = (0, r.useLocation)();
        return (0, s.useEffect)((() => {
          const e = document.scrollingElement || document.documentElement;
          setTimeout((() => {
            e.scrollTop = 0
          }), 0)
        }), [e]), null
      }
    },
    99718: (e, a, o) => {
      o.d(a, {
        A: () => i
      });
      var s = o(71403),
        r = o(88038),
        n = o(46632);
      class t extends s.Component {
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
          return null !== this.state.error.code ? (0, n.jsx)(r.default, {
            error: this.state.error
          }) : this.props.children
        }
      }
      const i = function(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return function(o) {
          return (0, n.jsx)(t, {
            header: a,
            children: (0, n.jsx)(e, {
              ...o
            })
          })
        }
      }
    },
    88038: (e, a, o) => {
      o.r(a), o.d(a, {
        default: () => c
      });
      var s = o(71403),
        r = o(42756),
        n = o(60285),
        t = o(37017);
      var i = o(46632);
      const c = (0, r.withTranslations)((e => {
        let {
          error: a,
          t: o,
          domain: r = ""
        } = e;
        console.error({
          error: a
        });
        let c = a?.message ?? o("error-404-new");
        c = o("error-404-new");
        const _ = a?.code ?? 398,
          l = (0, s.useRef)(null);
        return (0, s.useEffect)((() => {
          l && l?.current && l.current.focus()
        }), [l]), (0, i.jsxs)("div", {
          className: "rockstargames-sites-rockstargamesd988ce20c420c26fc5e455279bf94cb9",
          children: [(0, i.jsx)("h3", {
            tabIndex: -1,
            ref: l,
            children: `${c} (${_})`
          }), (0, i.jsx)(n.A, {
            to: "/",
            children: o("Home")
          }), "clr" !== r && (0, i.jsx)(t.A, {})]
        })
      }))
    },
    35415: (e, a, o) => {
      o.r(a), o(83142), o(80594), o(91045), o(18118), o(813), o(92306), o(74035), o(21535), o(43474), o(88863), o(17240), o(76277), o(95911), o(88372), o(20442), o(26266), o(33719), o(95938), o(45669);
      var s = o(35662),
        r = o(98010),
        n = o.n(r),
        t = o(31190),
        i = o(71403),
        c = o(75301),
        _ = o.n(c),
        l = o(90619);
      const m = "__MFE_GLOBAL_HOOK__",
        d = () => {
          const e = window;
          e[m]?.history || (e[m] = Object.assign(e[m] || {}, {
            history: (0, l.createBrowserHistory)()
          }))
        };
      var u = o(3583),
        p = o(61651),
        f = o(42756),
        g = o(56864),
        k = o.n(g),
        b = o(53181),
        y = o(74401),
        h = o(40207),
        w = o(89779);
      var v = o(46632);
      const R = e => {
          let {
            modal: a
          } = e;
          const {
            content: o,
            className: s,
            height: r,
            onClose: n,
            rect: t = {
              left: 0,
              top: 0
            },
            contentStyle: c = {},
            contentClassName: _ = "",
            width: l,
            fadeIn: m = !0,
            cardIds: d,
            activeId: u,
            theme: p,
            title: f,
            gtm: g = {},
            aspectRatio: R = "default",
            cardDimensions: x
          } = a, {
            left: j,
            top: z
          } = t, S = d?.indexOf(u), [G, P] = (0, i.useState)(d?.length || 0), {
            track: C
          } = (0, h.useGtmTrack)(), E = null !== d && (d?.length || 0) > 1 && ("flag_bg" === p || "fob" === x?.size), [I, M] = (0, w.useSearchParams)(), [N, L] = (0, i.useState)(!1), [A, B] = (0, i.useState)(!1), [D, T] = (0, i.useState)(), U = e => {
            "number" == typeof e && d && e < d.length && e > -1 && (console.log("navigating to: ", e), M({
              info: d[e].toString()
            }))
          }, V = () => {
            const e = S > -1 ? S - 1 : 0;
            U(e), C({
              event: "modal_previous",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              element_placement: f,
              position: S
            })
          }, Y = () => {
            const e = S > -1 ? S + 1 : 0;
            U(e), C({
              event: "modal_next",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              element_placement: f,
              position: S
            })
          };
          (0, i.useEffect)((() => {
            P(d?.length || 0)
          }), [d?.length]), (0, i.useEffect)((() => {
            null !== S && null !== d && U(S)
          }), [S, d]), (0, i.useEffect)((() => {
            const e = d?.findIndex((e => e === u));
            "number" == typeof e && (B(e <= 0), L(e >= G - 1))
          }), [d, u]);
          const [H] = (0, i.useState)({
            y: z,
            x: j,
            top: 0,
            left: 0,
            width: l,
            height: r,
            border: "0px solid transparent",
            background: "transparent",
            marginTop: E ? "0" : ""
          }), F = {
            opacity: 1
          }, O = (0, i.useRef)(null), X = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, K = {
            ease: "easeIn",
            duration: .3,
            delay: .5
          }, [q] = (0, i.useState)({
            x: "-50%",
            y: "-50%",
            top: "50%",
            left: "50%",
            width: "calc(100vw - (var(--modal-padding) * 2))",
            height: "var(--modal-height)",
            border: "1px solid var(--border-color, #2d2d2d)",
            background: "var(--black-100)",
            marginTop: E ? "calc(var(--modal-controlsHeight) - var(--modal-padding))" : "",
            transition: {
              x: X,
              y: X,
              top: X,
              left: X,
              width: X,
              height: X,
              border: X,
              background: {
                delay: .3
              }
            }
          }), [J, Z] = (0, i.useState)({
            initial: H,
            shown: q
          });
          (0, i.useEffect)((() => {
            Z({
              initial: H,
              shown: q
            })
          }), [H, q]), (0, i.useEffect)((() => {
            const e = e => {
              "function" == typeof n && "Escape" === e.key && (n(), C({
                event: "modal_close",
                element_placement: f,
                ...g
              }))
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []);
          const $ = () => {
              "function" == typeof n && (n(), C({
                event: "modal_close",
                element_placement: f,
                ...g
              }))
            },
            W = (e, a) => {
              if (!e || !e.children || a < 0) return null;
              for (let o = 0; o < e.children.length; o++) {
                const s = e.children[o];
                if (s.scrollHeight > s.clientHeight) return s;
                const r = W(s, a - 1);
                if (r) return r
              }
              return null
            },
            Q = e => {
              if (ae?.current?.children) {
                let a = null;
                const o = "ArrowDown" === e.key ? 25 : "ArrowUp" === e.key ? -25 : 0;
                switch (e.key) {
                  case "ArrowDown":
                  case "ArrowUp":
                    a = (e => {
                      let a = null;
                      return D?.queried ? a = D.element : (a = W(e, 2), T({
                        queried: !0,
                        element: a
                      })), a
                    })(ae.current), e.preventDefault(), a && (a.scrollTop += o)
                }
              }
            },
            ee = m ? 0 : 1,
            ae = (0, i.useRef)(null),
            oe = (0, v.jsx)(b.motion.button, {
              className: "rockstargames-sites-rockstargamesb0326cc98df99ada0e0f6821f0f0a6ad",
              "aria-label": "Close",
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: K,
              onClick: () => {
                $()
              },
              onKeyDown: Q,
              onKeyUp: Q
            });
          let se = null;
          return se = k(), (0, i.useMemo)((() => (0, v.jsx)("div", {
            className: "rockstargames-sites-rockstargamese9a8e066d320a81b61aa2c636fa0a5b5",
            "data-show-nav": E,
            "data-aspect-ratio": R,
            children: (0, v.jsx)(se, {
              children: (0, v.jsxs)("div", {
                children: [(0, v.jsx)(b.motion.div, {
                  className: "rockstargames-sites-rockstargamesc8632c630878ad16e637fe2b8db2f02c",
                  initial: {
                    opacity: 0
                  },
                  animate: F,
                  transition: X,
                  onClick: () => $()
                }), E && (0, v.jsxs)("div", {
                  className: "rockstargames-sites-rockstargameseeecb8dc782f382fc9d32d03ecc1a2a5",
                  children: [(0, v.jsxs)(b.motion.div, {
                    className: "rockstargames-sites-rockstargamesb6e3406cb9a52fc7583d5c74681e88bc",
                    initial: {
                      opacity: 0
                    },
                    animate: {
                      opacity: 1
                    },
                    transition: K,
                    children: [(0, v.jsx)("button", {
                      type: "button",
                      "aria-label": "Previous",
                      onClick: V,
                      disabled: A,
                      onKeyDown: Q,
                      onKeyUp: Q
                    }), (0, v.jsxs)("div", {
                      className: "rockstargames-sites-rockstargamesff3c13d9dc1de9af609a1f99b4c47039",
                      "data-theme": p,
                      children: [" ", S + 1, (0, v.jsx)("div", {
                        className: "rockstargames-sites-rockstargamescd9c6033ad00894881fa5451acfe15da"
                      }), d?.length, " "]
                    }), (0, v.jsx)("button", {
                      type: "button",
                      "aria-label": "Next",
                      onClick: Y,
                      disabled: N,
                      onKeyDown: Q,
                      onKeyUp: Q,
                      "data-autofocus": !0
                    })]
                  }), oe]
                }), (0, v.jsx)(b.motion.div, {
                  className: "rockstargames-sites-rockstargamesfab99cc2e2ca2e2a2158f9d41e764558",
                  ref: O,
                  initial: "initial",
                  animate: "shown",
                  variants: J,
                  transition: X,
                  style: c,
                  children: (0, v.jsxs)(b.motion.div, {
                    className: (0, y.classList)("rockstargames-sites-rockstargamesb6aa5ebf680af5d95d0e9c76ac36ed82", s),
                    children: [!E && oe, (0, v.jsx)(b.motion.div, {
                      className: (0, y.classList)("rockstargames-sites-rockstargamesd901631c0b9d817396c8352c027a2a0d", _),
                      initial: {
                        opacity: ee
                      },
                      animate: {
                        opacity: 1
                      },
                      transition: K,
                      ref: ae,
                      children: o
                    }), (0, v.jsx)("button", {
                      className: "rockstargames-sites-rockstargamesf1ecf74036b2b7fdfda3613619af40cf",
                      type: "button",
                      "aria-label": "End of modal"
                    })]
                  })
                })]
              })
            })
          })), [o, S, c])
        },
        x = "modal-context",
        j = [null, () => null],
        z = window?.[x] ?? (window[x] = (0, i.createContext)(j)),
        S = e => {
          let {
            children: a
          } = e;
          const [o, s] = (0, i.useState)(j), {
            setBodyIsLocked: r
          } = (0, f.useBodyScrollable)("ModalProvider"), n = (0, i.useMemo)((() => o?.content ? (0, v.jsx)(R, {
            modal: o
          }) : null), [o]), t = () => r(!1);
          return (0, i.useEffect)((() => (window.addEventListener("popstate", t), () => {
            window.removeEventListener("popstate", t)
          })), []), (0, i.useEffect)((() => {
            r(!!n)
          }), [n]), (0, v.jsx)(z.Provider, {
            value: [n, s],
            children: a
          })
        };
      var G = o(11716),
        P = o.n(G),
        C = o(58407),
        E = o(42158),
        I = o(52757),
        M = o(96717),
        N = o(63902),
        L = o(43426),
        A = o.n(L),
        B = o(26454),
        D = o(74611),
        T = o(70396),
        U = o(25076),
        V = o(99718);
      const Y = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const o = (0, i.lazy)(e),
            {
              setHeaderHidden: s
            } = (0, T.useRockstarLocalState)();
          return (0, i.useMemo)((() => (0, v.jsx)(i.Suspense, {
            fallback: "",
            children: (0, v.jsx)(o, {
              setHeaderHidden: s,
              ...a
            })
          })), [])
        },
        H = (0, V.A)((() => {
          const {
            setError: e,
            state: a
          } = (0, T.useRockstarLocalState)(), {
            error: s
          } = a, {
            pathname: r
          } = (0, U.useLocation)();
          (0, i.useEffect)((() => {
            e()
          }), [r]), (0, i.useEffect)((() => {
            200 !== window?.env?.responseStatusCode && e({
              code: window.env.responseStatusCode
            })
          }), []);
          const n = {
            path: "*",
            element: Y((() => Promise.resolve().then(o.bind(o, 88038))), {
              error: {
                code: window?.env?.responseStatusCode ?? 398
              }
            })
          };
          let t = [{
            path: "/",
            element: Y((() => Promise.all([o.e(1689), o.e(6855), o.e(5741), o.e(9516), o.e(1631), o.e(4049), o.e(2075), o.e(1545), o.e(4981)]).then(o.bind(o, 44981))))
          }, {
            path: "/careers-privacy",
            element: Y((() => Promise.all([o.e(9770), o.e(5476)]).then(o.bind(o, 65476))))
          }, {
            path: "/ccpa",
            element: Y((() => Promise.all([o.e(9770), o.e(1504)]).then(o.bind(o, 41504))))
          }, {
            path: "/community-guidelines",
            element: Y((() => Promise.all([o.e(9770), o.e(2880)]).then(o.bind(o, 42880))))
          }, {
            path: "/conduct",
            element: (0, v.jsx)(U.Navigate, {
              to: "/community-guidelines",
              replace: !0
            })
          }, {
            path: "/contact",
            element: Y((() => o.e(864).then(o.bind(o, 20864))))
          }, {
            path: "/cookies",
            element: Y((() => Promise.all([o.e(9770), o.e(4996)]).then(o.bind(o, 74996))))
          }, {
            path: "/corpinfo",
            element: Y((() => Promise.all([o.e(9770), o.e(1907)]).then(o.bind(o, 31907))))
          }, {
            path: "/VI",
            element: Y((() => o.e(3326).then(o.t.bind(o, 43326, 23))))
          }, {
            path: "/games",
            element: Y((() => Promise.all([o.e(1689), o.e(6855), o.e(5741), o.e(9516), o.e(1631), o.e(4049), o.e(2075), o.e(1545), o.e(9468)]).then(o.bind(o, 9468))))
          }, {
            path: "/games/:gameTitlelug",
            element: Y((() => Promise.all([o.e(1689), o.e(6855), o.e(5741), o.e(9516), o.e(1631), o.e(4049), o.e(2075), o.e(1545), o.e(9237)]).then(o.bind(o, 69237))))
          }, {
            path: "/legal",
            element: Y((() => Promise.all([o.e(9770), o.e(4150)]).then(o.bind(o, 31769))))
          }, {
            path: "/gta-v/thankyou",
            element: Y((() => Promise.resolve().then(o.bind(o, 61998))), {
              title: "v"
            })
          }, {
            path: "/standarddeviation",
            element: Y((() => o.e(760).then(o.bind(o, 70760))))
          }, {
            path: "/community_event",
            element: Y((() => Promise.all([o.e(4049), o.e(3920)]).then(o.bind(o, 4301))))
          }, {
            path: "/reddeadredemption2/*",
            element: Y((() => o.e(9147).then(o.t.bind(o, 29147, 23))))
          }, {
            path: "/reddeadredemption/*",
            element: Y((() => o.e(7538).then(o.t.bind(o, 47538, 23))))
          }, {
            path: "/bully/*",
            element: Y((() => o.e(5202).then(o.t.bind(o, 35202, 23))))
          }, {
            path: "/reddeadonline/thankyou",
            element: Y((() => Promise.resolve().then(o.bind(o, 61998))), {
              title: "rdr2"
            })
          }, {
            path: "/careers/*",
            element: Y((() => o.e(3137).then(o.t.bind(o, 53137, 23))))
          }, {
            path: "/downloads/*",
            element: Y((() => Promise.all([o.e(1631), o.e(7989)]).then(o.bind(o, 47989))))
          }, {
            path: "/reddeadonline/*",
            element: Y((() => o.e(3416).then(o.t.bind(o, 33416, 23))))
          }, {
            path: "/gifs/:hashId",
            element: Y((() => o.e(1626).then(o.t.bind(o, 41626, 23))))
          }, {
            path: "/gta-v/*",
            element: Y((() => o.e(6766).then(o.t.bind(o, 36766, 23))), {
              routeRoot: "/gta-v"
            })
          }, {
            path: "/gta-plus/*",
            element: Y((() => o.e(6766).then(o.t.bind(o, 36766, 23))), {
              routeRoot: "/gta-plus"
            })
          }, {
            path: "/gta-plus",
            element: Y((() => o.e(5427).then(o.bind(o, 85427))), {
              routeRoot: "/gta-plus"
            })
          }, {
            path: "/gta-online/*",
            element: Y((() => o.e(6766).then(o.t.bind(o, 36766, 23))), {
              routeRoot: "/gta-online"
            })
          }, {
            path: "/GTATrilogy/*",
            element: Y((() => o.e(2405).then(o.t.bind(o, 12405, 23))))
          }, {
            path: "/gtatv/*",
            element: Y((() => o.e(8987).then(o.t.bind(o, 88987, 23))))
          }, {
            path: "/manuals",
            element: Y((() => Promise.all([o.e(1458), o.e(7709)]).then(o.bind(o, 97709))))
          }, {
            path: "/manuals/music",
            element: Y((() => Promise.all([o.e(1631), o.e(1458), o.e(3798)]).then(o.bind(o, 93798))))
          }, {
            path: "/newswire",
            element: Y((() => Promise.all([o.e(2075), o.e(5275)]).then(o.bind(o, 35275))))
          }, {
            path: "/newswire/article/:articleId/:articleSlug",
            element: Y((() => o.e(5678).then(o.bind(o, 75678))))
          }, {
            path: "/newswire/article/:articleId/:articleSlug",
            element: Y((() => o.e(5678).then(o.bind(o, 75678))))
          }, {
            path: "/privacy",
            element: Y((() => Promise.all([o.e(9770), o.e(1721)]).then(o.bind(o, 11721))))
          }, {
            path: "/rockstartv/*",
            element: Y((() => o.e(8778).then(o.t.bind(o, 78778, 23))))
          }, {
            path: "/screenshot-viewer/*",
            element: Y((() => o.e(9343).then(o.t.bind(o, 39343, 23))))
          }, {
            path: "/search",
            element: Y((() => Promise.all([o.e(1689), o.e(6855), o.e(5741), o.e(9516), o.e(1631), o.e(4049), o.e(2075), o.e(1545), o.e(8046)]).then(o.bind(o, 28046))))
          }, {
            path: "/socialclubmaintenance",
            element: Y((() => o.e(4233).then(o.bind(o, 84233))))
          }, {
            path: "/unsubscribe",
            element: Y((() => Promise.all([o.e(6855), o.e(7079)]).then(o.bind(o, 87079))))
          }, {
            path: "/videos",
            element: Y((() => Promise.all([o.e(1689), o.e(6855), o.e(5741), o.e(9516), o.e(1631), o.e(4049), o.e(2075), o.e(1545), o.e(1945)]).then(o.bind(o, 91945))))
          }, {
            path: "/videos/:videoId",
            element: Y((() => Promise.all([o.e(1689), o.e(6855), o.e(5741), o.e(9516), o.e(1631), o.e(4049), o.e(2075), o.e(1545), o.e(1710)]).then(o.bind(o, 1710))))
          }, {
            ...n
          }];
          return isNaN(parseInt(s?.code)) || 200 === s?.code || (t = [n]), (0, U.useRoutes)(t)
        })),
        F = {
          main: "rockstargames-sites-rockstargamesf1aef688b1fb7db52825ffe602919893",
          gameSite: "rockstargames-sites-rockstargamesd94349e6082443747b43bfb1b3572894",
          "theme-std": "rockstargames-sites-rockstargamesc96f36a0f4271c94bc947959cc6f339d",
          headerHidden: "rockstargames-sites-rockstargamesd477842bf331a57b7775dad383937ca6",
          standalone: "rockstargames-sites-rockstargamesf25a9c90e12ca706e97edcb4d8824b69"
        },
        O = (0, s.withAutoRouteTracking)((() => {
          const {
            state: {
              headerHidden: e,
              standalone: a
            }
          } = (0, T.useRockstarLocalState)();
          return (0, i.useEffect)((() => {
            window.addEventListener("resize", (() => {
              document.body.height = window.innerHeight
            }))
          }), []), (0, v.jsx)("main", {
            role: "main",
            id: "main",
            className: [F.main, a ? F.standalone : "", e ? F.headerHidden : ""].join(" "),
            children: (0, v.jsx)(H, {})
          })
        })),
        X = ((0, C.makeVar)({
          base: "",
          navOpen: !1
        }), document.location.pathname),
        K = window.self !== window.top,
        q = {
          search: "",
          navOpen: !1,
          navHidden: !1,
          gameSiteNavOpen: !1,
          normalLogo: !0,
          loading: !1,
          headerHidden: ([].find((e => X.includes(e))) ?? []).length > 0 || K,
          customFooter: (["gta-online/license-plates"].find((e => X.includes(e))) ?? []).length > 0,
          standalone: (["/screenshot-viewer", "/VI", "/videoplayer", "/gifs"].find((e => X.includes(e))) ?? []).length > 0,
          error: {
            message: window?.errorFromServer?.message ?? null,
            code: window?.errorFromServer?.code ?? null
          },
          breadcrumb: {
            links: [],
            filter: ""
          }
        },
        J = (0, C.makeVar)(q);
      var Z = o(47832);
      const $ = {
          ...N.intlMessages,
          ...B
        },
        W = (0, C.makeVarNamespace)("rockstar-root"),
        Q = window?.env?.graphEnv ?? "prod";
      d();
      const ee = (() => {
          const e = window;
          if (e[m]?.history || d(), e[m]?.history) return e[m].history;
          throw new Error("Browser History has not been initialised")
        })(),
        ae = () => {
          const {
            state: {
              standalone: e,
              customFooter: a
            }
          } = (0, f.useRockstarLocalState)(), [o] = (0, i.useContext)(z), [{
            iso: s
          }] = (0, M.getLocale)();
          return (0, v.jsx)(M.IntlProvider, {
            locales: $,
            lang: s,
            children: (0, v.jsx)(Z.NP, {
              defaultColorScheme: "dark",
              defaultContrastMode: "normal",
              defaultPlatformScale: "desktop",
              locale: s,
              children: (0, v.jsx)(I.GtmProvider, {
                children: (0, v.jsxs)(p.A, {
                  threshold: [25, 50, 75, 90, 100],
                  children: [o, (0, v.jsx)(u.A, {}), (0, v.jsx)(O, {}), e || a ? "" : (0, v.jsx)(D.FooterNav, {})]
                })
              })
            })
          })
        },
        oe = () => (0, v.jsx)(S, {
          children: (0, v.jsx)(ae, {})
        }),
        {
          pingBearer: se
        } = (0, f.getScConfigForOrigin)(),
        re = (0, C.withReactiveState)((() => {
          const e = (0, C.useBase)(),
            {
              setLoading: a,
              setTitle: o,
              state: {
                headerHidden: s,
                standalone: r
              }
            } = (0, f.useRockstarLocalState)();
          return (0, i.useEffect)((() => {
            window.addEventListener("message", (e => {
              const s = e.data?.type ?? null;
              "graph.titleUpdate" === s && o(e.data.title), "graph.loadingUpdate" === s && a(e.data.loading)
            }))
          }), [a, o]), (0, v.jsx)(f.ResizeProvider, {
            children: (0, v.jsx)(E.ScrollProvider, {
              children: (0, v.jsxs)(I.RockstarUserProvider, {
                children: [!r && !s && (0, v.jsx)(A(), {
                  baseName: e
                }), (0, v.jsx)(_(), {
                  history: ee,
                  basename: e,
                  children: (0, v.jsx)(oe, {})
                })]
              })
            })
          })
        }), {
          state: J
        }),
        ne = (0, C.withRockstarGraph)(re, {
          env: Q,
          token: W("token", null),
          tokenPing: W("tokenPing", se),
          tokenPingExpires: W("tokenPingExpires", null),
          typePolicies: {
            ...P()
          }
        }),
        te = window?.env?.oneTrustId ?? null,
        ie = window?.env?.gtmId ?? null;
      (0, s.init)({
        id: ie
      }), n()({
        id: te,
        init: () => {
          const e = document.createElement("div");
          document.body.appendChild(e), (0, t.H)(e).render((0, v.jsx)(ne, {}))
        }
      })
    },
    26454: e => {
      e.exports = JSON.parse('{"us":{"footer_community_guidelines_label_text":"Community Guidelines","footer_contact_label_text":"Contact","footer_cookie_policy_label_text":"Cookie Policy","footer_cookie_settings_label_text":"Cookie Settings","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"London","footer_locations_new_york":"New York","footer_locations_paris":"Paris","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Community Guidelines","rockstargames_company_info_br":"Brazil","rockstargames_company_info_cz":"Czech Republic","rockstargames_company_info_de":"Germany","rockstargames_company_info_display_for_country":"Display page information for {country}","rockstargames_company_info_es":"Spain","rockstargames_company_info_fr":"France","rockstargames_company_info_it":"Italy","rockstargames_company_info_jp":"Japan","rockstargames_company_info_kr":"South Korea","rockstargames_company_info_mx":"Mexico","rockstargames_company_info_nl":"Netherlands","rockstargames_company_info_pl":"Poland","rockstargames_company_info_ru":"Russian Federation","rockstargames_company_info_sa":"Saudi Arabia","rockstargames_company_info_tw":"Taiwan","rockstargames_company_info_us":"United States","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"Download {item} {collection}","rockstargames_downloads_dimensions_label":"{width} by {height} pixels.","rockstargames_downloads_go_back":"Go back","email_settings_cta":"Update Preferences","unsubscribe_error_description":"This URL may be invalid. You can make changes to your Rockstar Games email preferences on the account settings page.","unsubscribe_error_header":"Error Unsubscribing","unsubscribe_info_description":"You will not receive any additional marketing emails from Rockstar Games. Opt back in or make additional changes to your Rockstar Games email preferences on the account settings page.","unsubscribe_info_header":"You\'re Already Unsubscribed","unsubscribe_success_description":"You will not receive any additional marketing emails from Rockstar Games. Opt back in or make additional changes to your Rockstar Games email preferences on the account settings page.","unsubscribe_success_header":"Successfully Unsubscribed"},"de":{"footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"London","footer_locations_new_york":"New York","footer_locations_paris":"Paris","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Community-Richtlinien","rockstargames_company_info_br":"Brasilien","rockstargames_company_info_cz":"Tschechische Republik","rockstargames_company_info_de":"Deutschland","rockstargames_company_info_display_for_country":"Seiteninformationen für {country} anzeigen","rockstargames_company_info_es":"Spanien","rockstargames_company_info_fr":"Frankreich","rockstargames_company_info_it":"Italien","rockstargames_company_info_jp":"Japan","rockstargames_company_info_kr":"Südkorea","rockstargames_company_info_mx":"Mexiko","rockstargames_company_info_nl":"Niederlande","rockstargames_company_info_pl":"Polen","rockstargames_company_info_ru":"Russland","rockstargames_company_info_sa":"Saudi-Arabien","rockstargames_company_info_tw":"Taiwan","rockstargames_company_info_us":"USA","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"{item} aus {collection} herunterladen","rockstargames_downloads_dimensions_label":"{width} x {height} Pixel.","rockstargames_downloads_go_back":"Zurück","email_settings_cta":"Präferenzen aktualisieren","unsubscribe_error_description":"Diese URL ist eventuell ungültig. Du kannst deine Präferenzen bezüglich E-Mails von Rockstar Games in den Einstellungen deines Kontos ändern.","unsubscribe_error_header":"Fehler beim Abbestellen","unsubscribe_info_description":"Du wirst keine zusätzlichen Marketing-E-Mails von Rockstar Games erhalten. Du kannst dich in den Einstellungen deines Kontos wieder registrieren oder deine Präferenzen bezüglich E-Mails von Rockstar Games ändern.","unsubscribe_info_header":"Du hast E-Mails bereits abbestellt","unsubscribe_success_description":"Du wirst keine zusätzlichen Marketing-E-Mails von Rockstar Games erhalten. Du kannst dich in den Einstellungen deines Kontos wieder registrieren oder deine Präferenzen bezüglich E-Mails von Rockstar Games ändern.","unsubscribe_success_header":"Erfolgreich abbestellt"},"es":{"footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"Londres","footer_locations_new_york":"Nueva York","footer_locations_paris":"París","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"¡Pide perdón, respeta a los demás!","community_guidelines_hero_title":"Directrices de la comunidad","rockstargames_company_info_br":"Brasil","rockstargames_company_info_cz":"República Checa","rockstargames_company_info_de":"Alemania","rockstargames_company_info_display_for_country":"Mostrar información para {country}","rockstargames_company_info_es":"España","rockstargames_company_info_fr":"Francia","rockstargames_company_info_it":"Italia","rockstargames_company_info_jp":"Japón","rockstargames_company_info_kr":"Corea del Sur","rockstargames_company_info_mx":"México","rockstargames_company_info_nl":"Países bajos","rockstargames_company_info_pl":"Polonia","rockstargames_company_info_ru":"Federación Rusa","rockstargames_company_info_sa":"Arabia Saudí","rockstargames_company_info_tw":"Taiwán","rockstargames_company_info_us":"Estados Unidos","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"Descargar {item} {collection}","rockstargames_downloads_dimensions_label":"{width} por {height} píxeles.","rockstargames_downloads_go_back":"Volver","email_settings_cta":"Cambiar tus preferencias","unsubscribe_error_description":"Puede que esta URL no sea válida. Puedes cambiar tus preferencias de correos electrónicos de Rockstar Games en la página de Ajustes de tu cuenta.","unsubscribe_error_header":"Error al cancelar la suscripción","unsubscribe_info_description":"Ya no recibirás más correos electrónicos comerciales de Rockstar Games. Vuelve a suscribirte o cambia tus preferencias de correos electrónicos de Rockstar Games en la página de Ajustes de tu cuenta.","unsubscribe_info_header":"Ya has cancelado tu suscripción","unsubscribe_success_description":"Ya no recibirás más correos electrónicos comerciales de Rockstar Games. Vuelve a suscribirte o cambia tus preferencias de correos electrónicos de Rockstar Games en la página de Ajustes de tu cuenta.","unsubscribe_success_header":"Has cancelado tu suscripción con éxito"},"mx":{"footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"London","footer_locations_new_york":"New York","footer_locations_paris":"Paris","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Directrices de la comunidad","rockstargames_company_info_br":"Brasil","rockstargames_company_info_cz":"República Checa","rockstargames_company_info_de":"Alemania","rockstargames_company_info_display_for_country":"Mostrar información de página de {country}","rockstargames_company_info_es":"España","rockstargames_company_info_fr":"Francia","rockstargames_company_info_it":"Italia","rockstargames_company_info_jp":"Japón","rockstargames_company_info_kr":"Corea del Sur","rockstargames_company_info_mx":"México","rockstargames_company_info_nl":"Países Bajos","rockstargames_company_info_pl":"Polonia","rockstargames_company_info_ru":"Rusia","rockstargames_company_info_sa":"Arabia Saudita","rockstargames_company_info_tw":"Taiwán","rockstargames_company_info_us":"Estados Unidos de América","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"Descargar {item} {collection}","rockstargames_downloads_dimensions_label":"{width}x{height} píxeles.","rockstargames_downloads_go_back":"Atrás","email_settings_cta":"Actualizar preferencias","unsubscribe_error_description":"La dirección URL podría ser inválida. Puedes cambiar las preferencias de tu correo de Rockstar Games en la página de configuración de cuenta.","unsubscribe_error_header":"Error al darse de baja","unsubscribe_info_description":"No recibirás más correos de publicidad de Rockstar Games. Puedes suscribirte de nuevo o hacer cambios adicionales a tu correo de Rockstar Games en la página de configuración de cuenta.","unsubscribe_info_header":"Ya te encuentras dado de baja.","unsubscribe_success_description":"No recibirás más correos de publicidad de Rockstar Games. Puedes suscribirte de nuevo o hacer cambios adicionales a tu correo de Rockstar Games en la página de configuración de cuenta.","unsubscribe_success_header":"Éxito al darse de baja."},"fr":{"footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogota","footer_locations_london":"Londres","footer_locations_new_york":"New York","footer_locations_paris":"Paris","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Règles de la communauté","rockstargames_company_info_br":"le Brésil","rockstargames_company_info_cz":"la République tchèque","rockstargames_company_info_de":"l\'Allemagne","rockstargames_company_info_display_for_country":"Afficher les informations de la page pour {country}","rockstargames_company_info_es":"l\'Espagne","rockstargames_company_info_fr":"la France","rockstargames_company_info_it":"l\'Italie","rockstargames_company_info_jp":"le Japon","rockstargames_company_info_kr":"la Corée du Sud","rockstargames_company_info_mx":"le Mexique","rockstargames_company_info_nl":"les Pays-Bas","rockstargames_company_info_pl":"la Pologne","rockstargames_company_info_ru":"la Fédération de Russie","rockstargames_company_info_sa":"l\'Arabie saoudite","rockstargames_company_info_tw":"Taïwan","rockstargames_company_info_us":"les États-Unis","rockstargames_company_info_zh":"la Chine","rockstargames_downloads_collections_download_text":"Télécharger ({collection} - {item})","rockstargames_downloads_dimensions_label":"{width}x{height} pixels.","rockstargames_downloads_go_back":"Précédent","email_settings_cta":"Mettre vos préférences à jour","unsubscribe_error_description":"Cette URL semble non valide. Vous pouvez modifier vos préférences concernant les e-mails de Rockstar Games sur la page des paramètres de votre compte.","unsubscribe_error_header":"Une erreur est survenue lors de la désinscription","unsubscribe_info_description":"Vous ne recevrez plus d\'e-mails publicitaires de la part de Rockstar Games. Réinscrivez-vous, ou effectuez d\'autres changements relatifs à vos préférences concernant les e-mails de Rockstar Games sur la page des paramètres de votre compte.","unsubscribe_info_header":"Vous êtes déjà désinscrit(e)","unsubscribe_success_description":"Vous ne recevrez plus d\'e-mails publicitaires de la part de Rockstar Games. Réinscrivez-vous, ou effectuez d\'autres changements relatifs à vos préférences concernant les e-mails de Rockstar Games sur la page des paramètres de votre compte.","unsubscribe_success_header":"Votre désinscription a été prise en compte"},"it":{"footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"Londra","footer_locations_new_york":"New York","footer_locations_paris":"Parigi","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Linee guida della comunità","rockstargames_company_info_br":"Brasile","rockstargames_company_info_cz":"Repubblica Ceca","rockstargames_company_info_de":"Germania","rockstargames_company_info_display_for_country":"Mostra informazioni sulla pagina per il paese seguente: {country}","rockstargames_company_info_es":"Spagna","rockstargames_company_info_fr":"Francia","rockstargames_company_info_it":"Italia","rockstargames_company_info_jp":"Giappone","rockstargames_company_info_kr":"Corea del Sud","rockstargames_company_info_mx":"Messico","rockstargames_company_info_nl":"Olanda","rockstargames_company_info_pl":"Polonia","rockstargames_company_info_ru":"Federazione Russa","rockstargames_company_info_sa":"Arabia Saudita","rockstargames_company_info_tw":"Taiwan","rockstargames_company_info_us":"Stati Uniti","rockstargames_company_info_zh":"Cina","rockstargames_downloads_collections_download_text":"Scarica {item} {collection}","rockstargames_downloads_dimensions_label":"{width} per {height} pixel.","rockstargames_downloads_go_back":"Torna indietro","email_settings_cta":"Aggiorna le preferenze","unsubscribe_error_description":"Questo URL potrebbe non essere valido. Puoi apportare modifiche alle preferenze relative alle email di Rockstar Games nella pagina delle impostazioni dell’account.","unsubscribe_error_header":"Errore nel tentativo di annullamento dell’iscrizione","unsubscribe_info_description":"Non riceverai più email promozionali da Rockstar Games. Puoi riabilitare le email o apportare altre modifiche alle preferenze relative alle email di Rockstar Games nella pagina delle impostazioni dell’account.","unsubscribe_info_header":"Hai già annullato l’iscrizione","unsubscribe_success_description":"Non riceverai più email promozionali da Rockstar Games. Puoi riabilitare le email o apportare altre modifiche alle preferenze relative alle email di Rockstar Games nella pagina delle impostazioni dell’account.","unsubscribe_success_header":"Iscrizione annullata con successo"},"jp":{"footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"London","footer_locations_new_york":"New York","footer_locations_paris":"Paris","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"コミュニティガイドライン","rockstargames_company_info_br":"ブラジル","rockstargames_company_info_cz":"チェコ","rockstargames_company_info_de":"ドイツ","rockstargames_company_info_display_for_country":"{country}のページを表示する","rockstargames_company_info_es":"スペイン","rockstargames_company_info_fr":"フランス","rockstargames_company_info_it":"イタリア","rockstargames_company_info_jp":"日本","rockstargames_company_info_kr":"韓国","rockstargames_company_info_mx":"メキシコ","rockstargames_company_info_nl":"オランダ","rockstargames_company_info_pl":"ポーランド","rockstargames_company_info_ru":"ロシア連邦","rockstargames_company_info_sa":"サウジアラビア","rockstargames_company_info_tw":"台湾","rockstargames_company_info_us":"アメリカ","rockstargames_company_info_zh":"中国","rockstargames_downloads_collections_download_text":"ダウンロード {item} {collection}","rockstargames_downloads_dimensions_label":"{width}×{height}ピクセル","rockstargames_downloads_go_back":"戻る","email_settings_cta":"設定を更新","unsubscribe_error_description":"このURLは無効になっている可能性があります。アカウント設定のページでロックスター・ゲームスのメール受信設定を変更できます。","unsubscribe_error_header":"登録解除時にエラー","unsubscribe_info_description":"今後はロックスター・ゲームスからマーケティングのメールを受信しません。アカウント設定のページでロックスター・ゲームスのメール受信設定をさらに変更したり、再登録ができます。","unsubscribe_info_header":"登録解除済みです","unsubscribe_success_description":"今後はロックスター・ゲームスからマーケティングのメールを受信しません。アカウント設定のページでロックスター・ゲームスのメール受信設定をさらに変更したり、再登録ができます。","unsubscribe_success_header":"登録解除が完了しました"},"kr":{"footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"London","footer_locations_new_york":"New York","footer_locations_paris":"Paris","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"커뮤니티 가이드라인","rockstargames_company_info_br":"브라질","rockstargames_company_info_cz":"체코 공화국","rockstargames_company_info_de":"독일","rockstargames_company_info_display_for_country":"페이지 내용 표시 - {country}","rockstargames_company_info_es":"스페인","rockstargames_company_info_fr":"프랑스","rockstargames_company_info_it":"이탈리아","rockstargames_company_info_jp":"일본","rockstargames_company_info_kr":"대한민국","rockstargames_company_info_mx":"멕시코","rockstargames_company_info_nl":"네덜란드","rockstargames_company_info_pl":"폴란드","rockstargames_company_info_ru":"러시아 연방","rockstargames_company_info_sa":"사우디 아라비아","rockstargames_company_info_tw":"대만","rockstargames_company_info_us":"미국","rockstargames_company_info_zh":"중국","rockstargames_downloads_collections_download_text":"{collection} {item} 다운로드","rockstargames_downloads_dimensions_label":"{width} x {height} 픽셀입니다.","rockstargames_downloads_go_back":"뒤로가기","email_settings_cta":"설정 변경","unsubscribe_error_description":"이 URL은 유효하지 않습니다. 계정 설정 페이지에서 Rockstar Games 이메일 설정을 변경할 수 있습니다.","unsubscribe_error_header":"구독 취소 오류","unsubscribe_info_description":"더 이상 Rockstar Games로부터 마케팅 이메일을 수신하지 않습니다. 다시 구독하거나 계정 설정 페이지에서 Rockstar Games 이메일 설정을 변경하십시오.","unsubscribe_info_header":"이미 구독 취소를 하였습니다","unsubscribe_success_description":"더 이상 Rockstar Games로부터 마케팅 이메일을 수신하지 않습니다. 다시 구독하거나 계정 설정 페이지에서 Rockstar Games 이메일 설정을 변경하십시오.","unsubscribe_success_header":"구독 취소 완료"},"pl":{"footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogota","footer_locations_london":"Londyn","footer_locations_new_york":"Nowy Jork","footer_locations_paris":"Paryż","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"Zachowuj się grzecznie!","community_guidelines_hero_title":"Regulamin społeczności","rockstargames_company_info_br":"Brazylia","rockstargames_company_info_cz":"Czechy","rockstargames_company_info_de":"Niemcy","rockstargames_company_info_display_for_country":"Pokaż informacje dla:","rockstargames_company_info_es":"Hiszpania","rockstargames_company_info_fr":"Francja","rockstargames_company_info_it":"Włochy","rockstargames_company_info_jp":"Japonia","rockstargames_company_info_kr":"Korea Południowa","rockstargames_company_info_mx":"Meksyk","rockstargames_company_info_nl":"Holandia","rockstargames_company_info_pl":"Polska","rockstargames_company_info_ru":"Rosja","rockstargames_company_info_sa":"Arabia Saudyjska","rockstargames_company_info_tw":"Tajwan","rockstargames_company_info_us":"Stany Zjednoczone","rockstargames_company_info_zh":"Chiny","rockstargames_downloads_collections_download_text":"Pobierz: {item} {collection}","rockstargames_downloads_dimensions_label":"{width} na {height} pikseli.","rockstargames_downloads_go_back":"Wróć","email_settings_cta":"Aktualizuj swoje preferencje","unsubscribe_error_description":"Odnośnik może być nieprawidłowy. Możesz zmienić swoje preferencje mailingowe w menu ustawień konta Rockstar Games.","unsubscribe_error_header":"Błąd podczas rezygnacji","unsubscribe_info_description":"Nie będziesz już otrzymywać wiadomości promocyjnych od Rockstar Games. Możesz zapisać się ponownie lub dokonać innych zmian preferencji mailingowych w menu ustawień konta Rockstar Games.","unsubscribe_info_header":"Subskrypcja jest już nieaktywna","unsubscribe_success_description":"Nie będziesz już otrzymywać wiadomości promocyjnych od Rockstar Games. Zapisz się ponownie lub dokonaj innych zmian preferencji mailingowych w menu ustawień konta Rockstar Games.","unsubscribe_success_header":"Zrezygnowano z subskrypcji"},"br":{"footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"Londres","footer_locations_new_york":"Nova York","footer_locations_paris":"Paris","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Diretrizes da Comunidade","rockstargames_company_info_br":"Brasil","rockstargames_company_info_cz":"República Tcheca","rockstargames_company_info_de":"Alemanha","rockstargames_company_info_display_for_country":"Exibir informações da página para {country}","rockstargames_company_info_es":"Espanha","rockstargames_company_info_fr":"França","rockstargames_company_info_it":"Itália","rockstargames_company_info_jp":"Japão","rockstargames_company_info_kr":"Coreia do Sul","rockstargames_company_info_mx":"México","rockstargames_company_info_nl":"Países Baixos","rockstargames_company_info_pl":"Polônia","rockstargames_company_info_ru":"Federação da Rússia","rockstargames_company_info_sa":"Arábia Saudita","rockstargames_company_info_tw":"Taiwan","rockstargames_company_info_us":"Estados Unidos","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"Baixar {collection} de {item}","rockstargames_downloads_dimensions_label":"{width} x {height} pixels.","rockstargames_downloads_go_back":"Voltar","email_settings_cta":"Atualizar preferências","unsubscribe_error_description":"Esta URL pode ser inválida. Você pode aplicar mudanças às suas preferências de e-mail da Rockstar Games na página de Configurações da conta.","unsubscribe_error_header":"Erro ao cancelar inscrição","unsubscribe_info_description":"Você não receberá mais e-mails de marketing da Rockstar Games. Escolha receber e-mails de marketing novamente ou aplique mudanças adicionais às suas preferências de e-mail da Rockstar Games na página de Configurações da conta.","unsubscribe_info_header":"Você já cancelou a inscrição","unsubscribe_success_description":"Você não receberá mais e-mails de marketing da Rockstar Games. Escolha receber e-mails de marketing novamente ou aplique mudanças adicionais às suas preferências de e-mail da Rockstar Games na página de Configurações da conta.","unsubscribe_success_header":"Inscrição cancelada"},"ru":{"footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Богота","footer_locations_london":"Лондон","footer_locations_new_york":"Нью-Йорк","footer_locations_paris":"Париж","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Правила сообщества","rockstargames_company_info_br":"Бразилии","rockstargames_company_info_cz":"Чехии","rockstargames_company_info_de":"Германии","rockstargames_company_info_display_for_country":"Показать содержимое страницы для {country}","rockstargames_company_info_es":"Испании","rockstargames_company_info_fr":"Франции","rockstargames_company_info_it":"Италии","rockstargames_company_info_jp":"Японии","rockstargames_company_info_kr":"Южной Кореи","rockstargames_company_info_mx":"Мексики","rockstargames_company_info_nl":"Нидерландов","rockstargames_company_info_pl":"Польши","rockstargames_company_info_ru":"России","rockstargames_company_info_sa":"Саудовской Аравии","rockstargames_company_info_tw":"Тайваня","rockstargames_company_info_us":"США","rockstargames_company_info_zh":"Китая","rockstargames_downloads_collections_download_text":"Загрузить: «{item}» из коллекции «{collection}».","rockstargames_downloads_dimensions_label":"{width} на {height} пикселей.","rockstargames_downloads_go_back":"Вернуться","email_settings_cta":"Изменить настройки","unsubscribe_error_description":"Возможно, этот адрес недействителен. Вы можете изменить настройки электронной почты Rockstar Games на странице настроек учетной записи.","unsubscribe_error_header":"Ошибка при отмене подписки","unsubscribe_info_description":"Вы больше не будете получать никаких рекламных писем от Rockstar Games. Подпишитесь заново или внесите другие изменения в настройки электронной почты Rockstar Games на странице настроек учетной записи.","unsubscribe_info_header":"Вы уже отменили подписку","unsubscribe_success_description":"Вы больше не будете получать никаких рекламных писем от Rockstar Games. Подпишитесь заново или внесите другие изменения в настройки электронной почты Rockstar Games на странице настроек учетной записи.","unsubscribe_success_header":"Подписка отменена"},"hans":{"footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"波哥大","footer_locations_london":"伦敦","footer_locations_new_york":"纽约","footer_locations_paris":"巴黎","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"说声对不起，做个好人！","community_guidelines_hero_title":"社区准则","rockstargames_company_info_br":"巴西","rockstargames_company_info_cz":"捷克","rockstargames_company_info_de":"德国","rockstargames_company_info_display_for_country":"显示{country}的页面信息","rockstargames_company_info_es":"西班牙","rockstargames_company_info_fr":"法国","rockstargames_company_info_it":"意大利","rockstargames_company_info_jp":"日本","rockstargames_company_info_kr":"韩国","rockstargames_company_info_mx":"墨西哥","rockstargames_company_info_nl":"荷兰","rockstargames_company_info_pl":"波兰","rockstargames_company_info_ru":"俄罗斯联邦","rockstargames_company_info_sa":"沙特阿拉伯","rockstargames_company_info_tw":"台湾地区","rockstargames_company_info_us":"美国","rockstargames_company_info_zh":"中国","rockstargames_downloads_collections_download_text":"下载 {item} 的 {collection}","rockstargames_downloads_dimensions_label":"{width} X {height} 像素","rockstargames_downloads_go_back":"返回","email_settings_cta":"更新偏好设置","unsubscribe_error_description":"此网址可能无效。您可以在账户设置页面更改您的 Rockstar Games 邮件偏好设置。","unsubscribe_error_header":"取消订阅出错","unsubscribe_info_description":"您将不会收到更多 Rockstar Games 营销邮件。您可以在账户设置页面重新订阅或更改您的 Rockstar Games 邮件偏好设置。","unsubscribe_info_header":"您已经取消订阅","unsubscribe_success_description":"您将不会收到更多 Rockstar Games 营销邮件。您可以在账户设置页面重新订阅或更改您的 Rockstar Games 邮件偏好设置。","unsubscribe_success_header":"取消订阅成功"},"tw":{"footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"波哥大","footer_locations_london":"倫敦","footer_locations_new_york":"紐約","footer_locations_paris":"巴黎","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"敢於道歉，友善待人！","community_guidelines_hero_title":"社群守則","rockstargames_company_info_br":"巴西","rockstargames_company_info_cz":"捷克共和國","rockstargames_company_info_de":"德國","rockstargames_company_info_display_for_country":"顯示頁面資訊：{country}","rockstargames_company_info_es":"西班牙","rockstargames_company_info_fr":"法國","rockstargames_company_info_it":"義大利","rockstargames_company_info_jp":"日本","rockstargames_company_info_kr":"南韓","rockstargames_company_info_mx":"墨西哥","rockstargames_company_info_nl":"荷蘭","rockstargames_company_info_pl":"波蘭","rockstargames_company_info_ru":"俄羅斯聯邦","rockstargames_company_info_sa":"沙烏地阿拉伯","rockstargames_company_info_tw":"台灣","rockstargames_company_info_us":"美國","rockstargames_company_info_zh":"中國","rockstargames_downloads_collections_download_text":"下載「{item}」的「{collection}」","rockstargames_downloads_dimensions_label":"像素：{width} x {height}。","rockstargames_downloads_go_back":"返回","email_settings_cta":"更新偏好設定","unsubscribe_error_description":"這個網址可能無效。您可以在帳戶設定頁面變更您的 Rockstar Games 電子郵件偏好設定。","unsubscribe_error_header":"取消訂閱錯誤","unsubscribe_info_description":"您將不會收到任何其他來自 Rockstar Games 的行銷電子郵件。在帳戶設定頁面重新訂閱，或為您的 Rockstar Games 電子郵件偏好設定進行其他變更。","unsubscribe_info_header":"您已經取消訂閱。","unsubscribe_success_description":"您將不會收到任何其他來自 Rockstar Games 的行銷電子郵件。在帳戶設定頁面重新訂閱，或為您的 Rockstar Games 電子郵件偏好設定進行其他變更。","unsubscribe_success_header":"取消訂閱成功"}}')
    }
  }
]);