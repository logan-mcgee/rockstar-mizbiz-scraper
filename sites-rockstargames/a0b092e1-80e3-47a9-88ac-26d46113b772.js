! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "a0b092e1-80e3-47a9-88ac-26d46113b772", e._sentryDebugIdIdentifier = "sentry-dbid-a0b092e1-80e3-47a9-88ac-26d46113b772")
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
  [9105], {
    99718: (e, o, a) => {
      a.d(o, {
        A: () => i
      });
      var s = a(71403),
        r = a(88038),
        t = a(46632);
      class n extends s.Component {
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
          return null !== this.state.error.code ? (0, t.jsx)(r.default, {
            error: this.state.error
          }) : this.props.children
        }
      }
      const i = function(e) {
        let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return function(a) {
          return (0, t.jsx)(n, {
            header: o,
            children: (0, t.jsx)(e, {
              ...a
            })
          })
        }
      }
    },
    88038: (e, o, a) => {
      a.r(o), a.d(o, {
        default: () => c
      });
      var s = a(71403),
        r = a(42756),
        t = a(60285),
        n = a(37017);
      var i = a(46632);
      const c = (0, r.withTranslations)((e => {
        let {
          error: o,
          t: a,
          domain: r = ""
        } = e;
        console.error({
          error: o
        });
        let c = o?.message ?? a("error-404-new");
        c = a("error-404-new");
        const _ = o?.code ?? 398,
          l = (0, s.useRef)(null);
        return (0, s.useEffect)((() => {
          l && l?.current && l.current.focus()
        }), [l]), (0, i.jsxs)("div", {
          className: "rockstargames-sites-rockstargamesd988ce20c420c26fc5e455279bf94cb9",
          children: [(0, i.jsx)("h3", {
            tabIndex: -1,
            ref: l,
            children: `${c} (${_})`
          }), (0, i.jsx)(t.A, {
            to: "/",
            children: a("Home")
          }), "clr" !== r && (0, i.jsx)(n.A, {})]
        })
      }))
    },
    9105: (e, o, a) => {
      a.r(o), a(83142), a(80594), a(91045), a(18118), a(813), a(92306), a(74035), a(21535), a(43474), a(88863), a(17240), a(76277), a(95911), a(88372), a(20442), a(26266), a(33719), a(95938), a(45669);
      var s = a(35662),
        r = a(98010),
        t = a.n(r),
        n = a(31190),
        i = a(71403),
        c = a(75301),
        _ = a.n(c),
        l = a(90619);
      const m = "__MFE_GLOBAL_HOOK__",
        d = () => {
          const e = window;
          e[m]?.history || (e[m] = Object.assign(e[m] || {}, {
            history: (0, l.createBrowserHistory)()
          }))
        };
      var u = a(89779);
      const p = () => {
        const {
          pathname: e
        } = (0, u.useLocation)();
        return (0, i.useEffect)((() => {
          const e = document.scrollingElement || document.documentElement;
          setTimeout((() => {
            e.scrollTop = 0
          }), 0)
        }), [e]), null
      };
      var f = a(40207);
      const g = (0, i.forwardRef)(((e, o) => {
        const {
          threshold: a,
          callback: s,
          children: r,
          requireUser: t
        } = e, {
          track: n
        } = (0, f.useGtmTrack)(t), [c, _] = (0, i.useState)(o?.current);
        return (0, i.useEffect)((() => {
          o?.current && _(o.current)
        }), [o]), ((e, o, a) => {
          const [s, r] = (0, i.useState)({
            scrollDepths: e,
            scrollY: 0
          }), {
            scrollDepths: t,
            scrollY: n
          } = s;
          (0, i.useEffect)((() => {
            "undefined" != typeof window && 0 !== window.pageYOffset && r((e => ({
              ...e,
              scrollY: window.pageYOffset
            })))
          }), []), (0, i.useEffect)((() => {
            r({
              scrollDepths: e,
              scrollY: 0
            })
          }), [window.location.pathname]);
          const c = (0, i.useCallback)((() => {
            const e = document.documentElement,
              n = document.body,
              i = a?.scrollTop || e.scrollTop || n.scrollTop,
              _ = a?.scrollHeight || e.scrollHeight || n.scrollHeight,
              {
                clientHeight: l
              } = e,
              m = i / (_ - l) * 100;
            if (t) {
              const e = Math.min(...t, _);
              if (m >= e) {
                const s = t.filter((o => o !== e));
                0 === s.length && (a ?? window).removeEventListener("scroll", c), o && o({
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
          }), [t, a, o]);
          (0, i.useEffect)((() => {
            if ("undefined" == typeof window) return;
            const e = a ?? window;
            return e.addEventListener("scroll", c), () => e.removeEventListener("scroll", c)
          }), [c])
        })(a, (e => {
          let {
            scrollY: o
          } = e;
          n({
            event: "page_scroll",
            scroll_depth: o
          }), "function" == typeof s && s(o)
        }), c), r
      }));
      g.displayName = "ScrollTracker";
      const k = g;
      var b = a(42756),
        y = a(56864),
        h = a.n(y),
        w = a(53181),
        x = a(74401);
      var v = a(46632);
      const R = e => {
          let {
            modal: o
          } = e;
          const {
            content: a,
            className: s,
            height: r,
            onClose: t,
            rect: n = {
              left: 0,
              top: 0
            },
            contentStyle: c = {},
            contentClassName: _ = "",
            width: l,
            fadeIn: m = !0,
            cardIds: d,
            activeId: p,
            theme: g,
            title: k,
            gtm: b = {},
            aspectRatio: y = "default",
            cardDimensions: R
          } = o, {
            left: j,
            top: z
          } = n, C = d?.indexOf(p), [P, S] = (0, i.useState)(d?.length || 0), {
            track: G
          } = (0, f.useGtmTrack)(), E = null !== d && (d?.length || 0) > 1 && ("flag_bg" === g || "fob" === R?.size), [I, M] = (0, u.useSearchParams)(), [N, L] = (0, i.useState)(!1), [B, A] = (0, i.useState)(!1), [D, T] = (0, i.useState)(), U = e => {
            "number" == typeof e && d && e < d.length && e > -1 && (console.log("navigating to: ", e), M({
              info: d[e].toString()
            }))
          }, V = () => {
            const e = C > -1 ? C - 1 : 0;
            U(e), G({
              event: "modal_previous",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              element_placement: k,
              position: C
            })
          }, Y = () => {
            const e = C > -1 ? C + 1 : 0;
            U(e), G({
              event: "modal_next",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              element_placement: k,
              position: C
            })
          };
          (0, i.useEffect)((() => {
            S(d?.length || 0)
          }), [d?.length]), (0, i.useEffect)((() => {
            null !== C && null !== d && U(C)
          }), [C, d]), (0, i.useEffect)((() => {
            const e = d?.findIndex((e => e === p));
            "number" == typeof e && (A(e <= 0), L(e >= P - 1))
          }), [d, p]);
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
          }, O = (0, i.useRef)(null), K = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, X = {
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
              x: K,
              y: K,
              top: K,
              left: K,
              width: K,
              height: K,
              border: K,
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
              "function" == typeof t && "Escape" === e.key && (t(), G({
                event: "modal_close",
                element_placement: k,
                ...b
              }))
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []);
          const $ = () => {
              "function" == typeof t && (t(), G({
                event: "modal_close",
                element_placement: k,
                ...b
              }))
            },
            W = (e, o) => {
              if (!e || !e.children || o < 0) return null;
              for (let a = 0; a < e.children.length; a++) {
                const s = e.children[a];
                if (s.scrollHeight > s.clientHeight) return s;
                const r = W(s, o - 1);
                if (r) return r
              }
              return null
            },
            Q = e => {
              if (oe?.current?.children) {
                let o = null;
                const a = "ArrowDown" === e.key ? 25 : "ArrowUp" === e.key ? -25 : 0;
                switch (e.key) {
                  case "ArrowDown":
                  case "ArrowUp":
                    o = (e => {
                      let o = null;
                      return D?.queried ? o = D.element : (o = W(e, 2), T({
                        queried: !0,
                        element: o
                      })), o
                    })(oe.current), e.preventDefault(), o && (o.scrollTop += a)
                }
              }
            },
            ee = m ? 0 : 1,
            oe = (0, i.useRef)(null),
            ae = (0, v.jsx)(w.motion.button, {
              className: "rockstargames-sites-rockstargamesb0326cc98df99ada0e0f6821f0f0a6ad",
              "aria-label": "Close",
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: X,
              onClick: () => {
                $()
              },
              onKeyDown: Q,
              onKeyUp: Q
            });
          let se = null;
          return se = h(), (0, i.useMemo)((() => (0, v.jsx)("div", {
            className: "rockstargames-sites-rockstargamese9a8e066d320a81b61aa2c636fa0a5b5",
            "data-show-nav": E,
            "data-aspect-ratio": y,
            children: (0, v.jsx)(se, {
              children: (0, v.jsxs)("div", {
                children: [(0, v.jsx)(w.motion.div, {
                  className: "rockstargames-sites-rockstargamesc8632c630878ad16e637fe2b8db2f02c",
                  initial: {
                    opacity: 0
                  },
                  animate: F,
                  transition: K,
                  onClick: () => $()
                }), E && (0, v.jsxs)("div", {
                  className: "rockstargames-sites-rockstargameseeecb8dc782f382fc9d32d03ecc1a2a5",
                  children: [(0, v.jsxs)(w.motion.div, {
                    className: "rockstargames-sites-rockstargamesb6e3406cb9a52fc7583d5c74681e88bc",
                    initial: {
                      opacity: 0
                    },
                    animate: {
                      opacity: 1
                    },
                    transition: X,
                    children: [(0, v.jsx)("button", {
                      type: "button",
                      "aria-label": "Previous",
                      onClick: V,
                      disabled: B,
                      onKeyDown: Q,
                      onKeyUp: Q
                    }), (0, v.jsxs)("div", {
                      className: "rockstargames-sites-rockstargamesff3c13d9dc1de9af609a1f99b4c47039",
                      "data-theme": g,
                      children: [" ", C + 1, (0, v.jsx)("div", {
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
                  }), ae]
                }), (0, v.jsx)(w.motion.div, {
                  className: "rockstargames-sites-rockstargamesfab99cc2e2ca2e2a2158f9d41e764558",
                  ref: O,
                  initial: "initial",
                  animate: "shown",
                  variants: J,
                  transition: K,
                  style: c,
                  children: (0, v.jsxs)(w.motion.div, {
                    className: (0, x.classList)("rockstargames-sites-rockstargamesb6aa5ebf680af5d95d0e9c76ac36ed82", s),
                    children: [!E && ae, (0, v.jsx)(w.motion.div, {
                      className: (0, x.classList)("rockstargames-sites-rockstargamesd901631c0b9d817396c8352c027a2a0d", _),
                      initial: {
                        opacity: ee
                      },
                      animate: {
                        opacity: 1
                      },
                      transition: X,
                      ref: oe,
                      children: a
                    }), (0, v.jsx)("button", {
                      className: "rockstargames-sites-rockstargamesf1ecf74036b2b7fdfda3613619af40cf",
                      type: "button",
                      "aria-label": "End of modal"
                    })]
                  })
                })]
              })
            })
          })), [a, C, c])
        },
        j = "modal-context",
        z = [null, () => null],
        C = window?.[j] ?? (window[j] = (0, i.createContext)(z)),
        P = e => {
          let {
            children: o
          } = e;
          const [a, s] = (0, i.useState)(z), {
            setBodyIsLocked: r
          } = (0, b.useBodyScrollable)("ModalProvider"), t = (0, i.useMemo)((() => a?.content ? (0, v.jsx)(R, {
            modal: a
          }) : null), [a]), n = () => r(!1);
          return (0, i.useEffect)((() => (window.addEventListener("popstate", n), () => {
            window.removeEventListener("popstate", n)
          })), []), (0, i.useEffect)((() => {
            r(!!t)
          }), [t]), (0, v.jsx)(C.Provider, {
            value: [t, s],
            children: o
          })
        };
      var S = a(11716),
        G = a.n(S),
        E = a(58407),
        I = a(42158),
        M = a(52757),
        N = a(96717),
        L = a(63902),
        B = a(43426),
        A = a.n(B),
        D = a(26454),
        T = a(15101),
        U = a(70396),
        V = a(25076),
        Y = a(99718);
      const H = function(e) {
          let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const a = (0, i.lazy)(e),
            {
              setHeaderHidden: s
            } = (0, U.useRockstarLocalState)();
          return (0, i.useMemo)((() => (0, v.jsx)(i.Suspense, {
            fallback: "",
            children: (0, v.jsx)(a, {
              setHeaderHidden: s,
              ...o
            })
          })), [])
        },
        F = (0, Y.A)((() => {
          const {
            setError: e,
            state: o
          } = (0, U.useRockstarLocalState)(), {
            error: s
          } = o, {
            pathname: r
          } = (0, V.useLocation)();
          (0, i.useEffect)((() => {
            e()
          }), [r]), (0, i.useEffect)((() => {
            200 !== window?.env?.responseStatusCode && e({
              code: window.env.responseStatusCode
            })
          }), []);
          const t = {
            path: "*",
            element: H((() => Promise.resolve().then(a.bind(a, 88038))), {
              error: {
                code: window?.env?.responseStatusCode ?? 398
              }
            })
          };
          let n = [{
            path: "/",
            element: H((() => Promise.all([a.e(6855), a.e(9028), a.e(588), a.e(9286), a.e(8417), a.e(4558), a.e(4981)]).then(a.bind(a, 44981))))
          }, {
            path: "/careers-privacy",
            element: H((() => Promise.all([a.e(9770), a.e(5476)]).then(a.bind(a, 65476))))
          }, {
            path: "/ccpa",
            element: H((() => Promise.all([a.e(9770), a.e(1504)]).then(a.bind(a, 41504))))
          }, {
            path: "/community-guidelines",
            element: H((() => Promise.all([a.e(9770), a.e(2880)]).then(a.bind(a, 42880))))
          }, {
            path: "/conduct",
            element: (0, v.jsx)(V.Navigate, {
              to: "/community-guidelines",
              replace: !0
            })
          }, {
            path: "/contact",
            element: H((() => a.e(864).then(a.bind(a, 20864))))
          }, {
            path: "/cookies",
            element: H((() => Promise.all([a.e(9770), a.e(4996)]).then(a.bind(a, 74996))))
          }, {
            path: "/corpinfo",
            element: H((() => Promise.all([a.e(9770), a.e(1907)]).then(a.bind(a, 31907))))
          }, {
            path: "/VI",
            element: H((() => a.e(3326).then(a.t.bind(a, 43326, 23))))
          }, {
            path: "/games",
            element: H((() => Promise.all([a.e(6855), a.e(9286), a.e(9468)]).then(a.bind(a, 9468))))
          }, {
            path: "/games/:gameTitlelug",
            element: H((() => Promise.all([a.e(588), a.e(5856), a.e(6295)]).then(a.bind(a, 69237))))
          }, {
            path: "/legal",
            element: H((() => Promise.all([a.e(9770), a.e(4150)]).then(a.bind(a, 31769))))
          }, {
            path: "/gta-v/thankyou",
            element: H((() => Promise.resolve().then(a.bind(a, 61998))), {
              title: "v"
            })
          }, {
            path: "/standarddeviation",
            element: H((() => a.e(760).then(a.bind(a, 70760))))
          }, {
            path: "/community_event",
            element: H((() => Promise.all([a.e(5856), a.e(2036)]).then(a.bind(a, 40004))))
          }, {
            path: "/reddeadredemption2/*",
            element: H((() => a.e(9147).then(a.t.bind(a, 29147, 23))))
          }, {
            path: "/reddeadredemption/*",
            element: H((() => a.e(7538).then(a.t.bind(a, 47538, 23))))
          }, {
            path: "/bully/*",
            element: H((() => a.e(5202).then(a.t.bind(a, 35202, 23))))
          }, {
            path: "/reddeadonline/thankyou",
            element: H((() => Promise.resolve().then(a.bind(a, 61998))), {
              title: "rdr2"
            })
          }, {
            path: "/careers/*",
            element: H((() => a.e(3137).then(a.t.bind(a, 53137, 23))))
          }, {
            path: "/downloads/*",
            element: H((() => Promise.all([a.e(1631), a.e(7989)]).then(a.bind(a, 47989))))
          }, {
            path: "/reddeadonline/*",
            element: H((() => a.e(3416).then(a.t.bind(a, 33416, 23))))
          }, {
            path: "/gifs/:hashId",
            element: H((() => a.e(1626).then(a.t.bind(a, 41626, 23))))
          }, {
            path: "/gta-v/*",
            element: H((() => a.e(6766).then(a.t.bind(a, 36766, 23))), {
              routeRoot: "/gta-v"
            })
          }, {
            path: "/gta-plus/*",
            element: H((() => a.e(6766).then(a.t.bind(a, 36766, 23))), {
              routeRoot: "/gta-plus"
            })
          }, {
            path: "/gta-plus",
            element: H((() => a.e(5427).then(a.bind(a, 85427))), {
              routeRoot: "/gta-plus"
            })
          }, {
            path: "/gta-online/*",
            element: H((() => a.e(6766).then(a.t.bind(a, 36766, 23))), {
              routeRoot: "/gta-online"
            })
          }, {
            path: "/GTATrilogy/*",
            element: H((() => a.e(2405).then(a.t.bind(a, 12405, 23))))
          }, {
            path: "/gtatv/*",
            element: H((() => a.e(8987).then(a.t.bind(a, 88987, 23))))
          }, {
            path: "/manuals",
            element: H((() => Promise.all([a.e(1458), a.e(7709)]).then(a.bind(a, 97709))))
          }, {
            path: "/manuals/music",
            element: H((() => Promise.all([a.e(1458), a.e(1631), a.e(3798)]).then(a.bind(a, 93798))))
          }, {
            path: "/newswire",
            element: H((() => Promise.all([a.e(6855), a.e(588), a.e(9286), a.e(8417), a.e(4558), a.e(5275)]).then(a.bind(a, 35275))))
          }, {
            path: "/newswire/article/:articleId/:articleSlug",
            element: H((() => a.e(5678).then(a.bind(a, 75678))))
          }, {
            path: "/newswire/article/:articleId/:articleSlug",
            element: H((() => a.e(5678).then(a.bind(a, 75678))))
          }, {
            path: "/privacy",
            element: H((() => Promise.all([a.e(9770), a.e(1721)]).then(a.bind(a, 11721))))
          }, {
            path: "/rockstartv/*",
            element: H((() => a.e(8778).then(a.t.bind(a, 78778, 23))))
          }, {
            path: "/screenshot-viewer/*",
            element: H((() => a.e(9343).then(a.t.bind(a, 39343, 23))))
          }, {
            path: "/search",
            element: H((() => Promise.all([a.e(588), a.e(8417), a.e(5102)]).then(a.bind(a, 85102))))
          }, {
            path: "/socialclubmaintenance",
            element: H((() => a.e(4233).then(a.bind(a, 84233))))
          }, {
            path: "/unsubscribe",
            element: H((() => Promise.all([a.e(6855), a.e(7079)]).then(a.bind(a, 87079))))
          }, {
            path: "/videos",
            element: H((() => Promise.all([a.e(2370), a.e(9028), a.e(1945)]).then(a.bind(a, 91945))))
          }, {
            path: "/videos/:videoId",
            element: H((() => Promise.all([a.e(2370), a.e(1710)]).then(a.bind(a, 1710))))
          }, {
            ...t
          }];
          return isNaN(parseInt(s?.code)) || 200 === s?.code || (n = [t]), (0, V.useRoutes)(n)
        })),
        O = {
          main: "rockstargames-sites-rockstargamesf1aef688b1fb7db52825ffe602919893",
          gameSite: "rockstargames-sites-rockstargamesd94349e6082443747b43bfb1b3572894",
          "theme-std": "rockstargames-sites-rockstargamesc96f36a0f4271c94bc947959cc6f339d",
          headerHidden: "rockstargames-sites-rockstargamesd477842bf331a57b7775dad383937ca6",
          standalone: "rockstargames-sites-rockstargamesf25a9c90e12ca706e97edcb4d8824b69"
        },
        K = (0, s.withAutoRouteTracking)((() => {
          const {
            state: {
              headerHidden: e,
              standalone: o
            }
          } = (0, U.useRockstarLocalState)();
          return (0, i.useEffect)((() => {
            window.addEventListener("resize", (() => {
              document.body.height = window.innerHeight
            }))
          }), []), (0, v.jsx)("main", {
            role: "main",
            id: "main",
            className: [O.main, o ? O.standalone : "", e ? O.headerHidden : ""].join(" "),
            children: (0, v.jsx)(F, {})
          })
        })),
        X = ((0, E.makeVar)({
          base: "",
          navOpen: !1
        }), document.location.pathname),
        q = window.self !== window.top,
        J = {
          search: "",
          navOpen: !1,
          navHidden: !1,
          gameSiteNavOpen: !1,
          normalLogo: !0,
          loading: !1,
          headerHidden: ([].find((e => X.includes(e))) ?? []).length > 0 || q,
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
        Z = (0, E.makeVar)(J);
      var $ = a(28303);
      const W = {
          ...L.intlMessages,
          ...D
        },
        Q = (0, E.makeVarNamespace)("rockstar-root"),
        ee = window?.env?.graphEnv ?? "prod";
      d();
      const oe = (() => {
          const e = window;
          if (e[m]?.history || d(), e[m]?.history) return e[m].history;
          throw new Error("Browser History has not been initialised")
        })(),
        ae = () => {
          const {
            state: {
              standalone: e,
              customFooter: o
            }
          } = (0, b.useRockstarLocalState)(), [a] = (0, i.useContext)(C), [{
            iso: s
          }] = (0, N.getLocale)();
          return (0, v.jsx)(N.IntlProvider, {
            locales: W,
            lang: s,
            children: (0, v.jsx)($.NP, {
              defaultColorScheme: "dark",
              defaultContrastMode: "normal",
              defaultPlatformScale: "desktop",
              locale: s,
              children: (0, v.jsx)(M.GtmProvider, {
                children: (0, v.jsxs)(k, {
                  threshold: [25, 50, 75, 90, 100],
                  children: [a, (0, v.jsx)(p, {}), (0, v.jsx)(K, {}), e || o ? "" : (0, v.jsx)(T.FooterNav, {})]
                })
              })
            })
          })
        },
        se = () => (0, v.jsx)(P, {
          children: (0, v.jsx)(ae, {})
        }),
        {
          pingBearer: re
        } = (0, b.getScConfigForOrigin)(),
        te = (0, E.withReactiveState)((() => {
          const e = (0, E.useBase)(),
            {
              setLoading: o,
              setTitle: a,
              state: {
                headerHidden: s,
                standalone: r
              }
            } = (0, b.useRockstarLocalState)();
          return (0, i.useEffect)((() => {
            window.addEventListener("message", (e => {
              const s = e.data?.type ?? null;
              "graph.titleUpdate" === s && a(e.data.title), "graph.loadingUpdate" === s && o(e.data.loading)
            }))
          }), [o, a]), (0, v.jsx)(b.ResizeProvider, {
            children: (0, v.jsx)(I.ScrollProvider, {
              children: (0, v.jsxs)(M.RockstarUserProvider, {
                children: [!r && !s && (0, v.jsx)(A(), {
                  baseName: e
                }), (0, v.jsx)(_(), {
                  history: oe,
                  basename: e,
                  children: (0, v.jsx)(se, {})
                })]
              })
            })
          })
        }), {
          state: Z
        }),
        ne = (0, E.withRockstarGraph)(te, {
          env: ee,
          token: Q("token", null),
          tokenPing: Q("tokenPing", re),
          tokenPingExpires: Q("tokenPingExpires", null),
          typePolicies: {
            ...G()
          }
        }),
        ie = window?.env?.oneTrustId ?? null,
        ce = window?.env?.gtmId ?? null;
      (0, s.init)({
        id: ce
      }), t()({
        id: ie,
        init: () => {
          const e = document.createElement("div");
          document.body.appendChild(e), (0, n.H)(e).render((0, v.jsx)(ne, {}))
        }
      })
    },
    26454: e => {
      e.exports = JSON.parse('{"us":{"footer_community_guidelines_label_text":"Community Guidelines","footer_contact_label_text":"Contact","footer_cookie_policy_label_text":"Cookie Policy","footer_cookie_settings_label_text":"Cookie Settings","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"London","footer_locations_new_york":"New York","footer_locations_paris":"Paris","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Community Guidelines","rockstargames_company_info_br":"Brazil","rockstargames_company_info_cz":"Czech Republic","rockstargames_company_info_de":"Germany","rockstargames_company_info_display_for_country":"Display page information for {country}","rockstargames_company_info_es":"Spain","rockstargames_company_info_fr":"France","rockstargames_company_info_it":"Italy","rockstargames_company_info_jp":"Japan","rockstargames_company_info_kr":"South Korea","rockstargames_company_info_mx":"Mexico","rockstargames_company_info_nl":"Netherlands","rockstargames_company_info_pl":"Poland","rockstargames_company_info_ru":"Russian Federation","rockstargames_company_info_sa":"Saudi Arabia","rockstargames_company_info_tw":"Taiwan","rockstargames_company_info_us":"United States","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"Download {item} {collection}","rockstargames_downloads_dimensions_label":"{width} by {height} pixels.","rockstargames_downloads_go_back":"Go back","email_settings_cta":"Update Preferences","unsubscribe_error_description":"This URL may be invalid. You can make changes to your Rockstar Games email preferences on the account settings page.","unsubscribe_error_header":"Error Unsubscribing","unsubscribe_info_description":"You will not receive any additional marketing emails from Rockstar Games. Opt back in or make additional changes to your Rockstar Games email preferences on the account settings page.","unsubscribe_info_header":"You\'re Already Unsubscribed","unsubscribe_success_description":"You will not receive any additional marketing emails from Rockstar Games. Opt back in or make additional changes to your Rockstar Games email preferences on the account settings page.","unsubscribe_success_header":"Successfully Unsubscribed"},"de":{"footer_community_guidelines_label_text":"Community-Richtlinien","footer_contact_label_text":"Kontakt","footer_cookie_policy_label_text":"Cookie-Richtlinie","footer_cookie_settings_label_text":"Cookie-Einstellungen","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"London","footer_locations_new_york":"New York","footer_locations_paris":"Paris","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Community-Richtlinien","rockstargames_company_info_br":"Brasilien","rockstargames_company_info_cz":"Tschechische Republik","rockstargames_company_info_de":"Deutschland","rockstargames_company_info_display_for_country":"Seiteninformationen für {country} anzeigen","rockstargames_company_info_es":"Spanien","rockstargames_company_info_fr":"Frankreich","rockstargames_company_info_it":"Italien","rockstargames_company_info_jp":"Japan","rockstargames_company_info_kr":"Südkorea","rockstargames_company_info_mx":"Mexiko","rockstargames_company_info_nl":"Niederlande","rockstargames_company_info_pl":"Polen","rockstargames_company_info_ru":"Russland","rockstargames_company_info_sa":"Saudi-Arabien","rockstargames_company_info_tw":"Taiwan","rockstargames_company_info_us":"USA","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"{item} aus {collection} herunterladen","rockstargames_downloads_dimensions_label":"{width} x {height} Pixel.","rockstargames_downloads_go_back":"Zurück","email_settings_cta":"Präferenzen aktualisieren","unsubscribe_error_description":"Diese URL ist eventuell ungültig. Du kannst deine Präferenzen bezüglich E-Mails von Rockstar Games in den Einstellungen deines Kontos ändern.","unsubscribe_error_header":"Fehler beim Abbestellen","unsubscribe_info_description":"Du wirst keine zusätzlichen Marketing-E-Mails von Rockstar Games erhalten. Du kannst dich in den Einstellungen deines Kontos wieder registrieren oder deine Präferenzen bezüglich E-Mails von Rockstar Games ändern.","unsubscribe_info_header":"Du hast E-Mails bereits abbestellt","unsubscribe_success_description":"Du wirst keine zusätzlichen Marketing-E-Mails von Rockstar Games erhalten. Du kannst dich in den Einstellungen deines Kontos wieder registrieren oder deine Präferenzen bezüglich E-Mails von Rockstar Games ändern.","unsubscribe_success_header":"Erfolgreich abbestellt"},"es":{"footer_community_guidelines_label_text":"Directrices de la comunidad","footer_contact_label_text":"Contacto","footer_cookie_policy_label_text":"Política de cookies","footer_cookie_settings_label_text":"Ajustes de cookies","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"Londres","footer_locations_new_york":"Nueva York","footer_locations_paris":"París","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"¡Pide perdón, respeta a los demás!","community_guidelines_hero_title":"Directrices de la comunidad","rockstargames_company_info_br":"Brasil","rockstargames_company_info_cz":"República Checa","rockstargames_company_info_de":"Alemania","rockstargames_company_info_display_for_country":"Mostrar información para {country}","rockstargames_company_info_es":"España","rockstargames_company_info_fr":"Francia","rockstargames_company_info_it":"Italia","rockstargames_company_info_jp":"Japón","rockstargames_company_info_kr":"Corea del Sur","rockstargames_company_info_mx":"México","rockstargames_company_info_nl":"Países bajos","rockstargames_company_info_pl":"Polonia","rockstargames_company_info_ru":"Federación Rusa","rockstargames_company_info_sa":"Arabia Saudí","rockstargames_company_info_tw":"Taiwán","rockstargames_company_info_us":"Estados Unidos","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"Descargar {item} {collection}","rockstargames_downloads_dimensions_label":"{width} por {height} píxeles.","rockstargames_downloads_go_back":"Volver","email_settings_cta":"Cambiar tus preferencias","unsubscribe_error_description":"Puede que esta URL no sea válida. Puedes cambiar tus preferencias de correos electrónicos de Rockstar Games en la página de Ajustes de tu cuenta.","unsubscribe_error_header":"Error al cancelar la suscripción","unsubscribe_info_description":"Ya no recibirás más correos electrónicos comerciales de Rockstar Games. Vuelve a suscribirte o cambia tus preferencias de correos electrónicos de Rockstar Games en la página de Ajustes de tu cuenta.","unsubscribe_info_header":"Ya has cancelado tu suscripción","unsubscribe_success_description":"Ya no recibirás más correos electrónicos comerciales de Rockstar Games. Vuelve a suscribirte o cambia tus preferencias de correos electrónicos de Rockstar Games en la página de Ajustes de tu cuenta.","unsubscribe_success_header":"Has cancelado tu suscripción con éxito"},"mx":{"footer_community_guidelines_label_text":"Directrices de la comunidad","footer_contact_label_text":"Contacto","footer_cookie_policy_label_text":"Política de cookies","footer_cookie_settings_label_text":"Configuración de cookies","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"London","footer_locations_new_york":"New York","footer_locations_paris":"Paris","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Directrices de la comunidad","rockstargames_company_info_br":"Brasil","rockstargames_company_info_cz":"República Checa","rockstargames_company_info_de":"Alemania","rockstargames_company_info_display_for_country":"Mostrar información de página de {country}","rockstargames_company_info_es":"España","rockstargames_company_info_fr":"Francia","rockstargames_company_info_it":"Italia","rockstargames_company_info_jp":"Japón","rockstargames_company_info_kr":"Corea del Sur","rockstargames_company_info_mx":"México","rockstargames_company_info_nl":"Países Bajos","rockstargames_company_info_pl":"Polonia","rockstargames_company_info_ru":"Rusia","rockstargames_company_info_sa":"Arabia Saudita","rockstargames_company_info_tw":"Taiwán","rockstargames_company_info_us":"Estados Unidos de América","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"Descargar {item} {collection}","rockstargames_downloads_dimensions_label":"{width}x{height} píxeles.","rockstargames_downloads_go_back":"Atrás","email_settings_cta":"Actualizar preferencias","unsubscribe_error_description":"La dirección URL podría ser inválida. Puedes cambiar las preferencias de tu correo de Rockstar Games en la página de configuración de cuenta.","unsubscribe_error_header":"Error al darse de baja","unsubscribe_info_description":"No recibirás más correos de publicidad de Rockstar Games. Puedes suscribirte de nuevo o hacer cambios adicionales a tu correo de Rockstar Games en la página de configuración de cuenta.","unsubscribe_info_header":"Ya te encuentras dado de baja.","unsubscribe_success_description":"No recibirás más correos de publicidad de Rockstar Games. Puedes suscribirte de nuevo o hacer cambios adicionales a tu correo de Rockstar Games en la página de configuración de cuenta.","unsubscribe_success_header":"Éxito al darse de baja."},"fr":{"footer_community_guidelines_label_text":"Règles de la communauté","footer_contact_label_text":"Contact","footer_cookie_policy_label_text":"Politique en matière de cookies","footer_cookie_settings_label_text":"Paramètres des cookies","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogota","footer_locations_london":"Londres","footer_locations_new_york":"New York","footer_locations_paris":"Paris","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Règles de la communauté","rockstargames_company_info_br":"le Brésil","rockstargames_company_info_cz":"la République tchèque","rockstargames_company_info_de":"l\'Allemagne","rockstargames_company_info_display_for_country":"Afficher les informations de la page pour {country}","rockstargames_company_info_es":"l\'Espagne","rockstargames_company_info_fr":"la France","rockstargames_company_info_it":"l\'Italie","rockstargames_company_info_jp":"le Japon","rockstargames_company_info_kr":"la Corée du Sud","rockstargames_company_info_mx":"le Mexique","rockstargames_company_info_nl":"les Pays-Bas","rockstargames_company_info_pl":"la Pologne","rockstargames_company_info_ru":"la Fédération de Russie","rockstargames_company_info_sa":"l\'Arabie saoudite","rockstargames_company_info_tw":"Taïwan","rockstargames_company_info_us":"les États-Unis","rockstargames_company_info_zh":"la Chine","rockstargames_downloads_collections_download_text":"Télécharger ({collection} - {item})","rockstargames_downloads_dimensions_label":"{width}x{height} pixels.","rockstargames_downloads_go_back":"Précédent","email_settings_cta":"Mettre vos préférences à jour","unsubscribe_error_description":"Cette URL semble non valide. Vous pouvez modifier vos préférences concernant les e-mails de Rockstar Games sur la page des paramètres de votre compte.","unsubscribe_error_header":"Une erreur est survenue lors de la désinscription","unsubscribe_info_description":"Vous ne recevrez plus d\'e-mails publicitaires de la part de Rockstar Games. Réinscrivez-vous, ou effectuez d\'autres changements relatifs à vos préférences concernant les e-mails de Rockstar Games sur la page des paramètres de votre compte.","unsubscribe_info_header":"Vous êtes déjà désinscrit(e)","unsubscribe_success_description":"Vous ne recevrez plus d\'e-mails publicitaires de la part de Rockstar Games. Réinscrivez-vous, ou effectuez d\'autres changements relatifs à vos préférences concernant les e-mails de Rockstar Games sur la page des paramètres de votre compte.","unsubscribe_success_header":"Votre désinscription a été prise en compte"},"it":{"footer_community_guidelines_label_text":"Linee guida della comunità","footer_contact_label_text":"Contattaci","footer_cookie_policy_label_text":"Politica sui cookie","footer_cookie_settings_label_text":"Impostazioni dei cookie","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"Londra","footer_locations_new_york":"New York","footer_locations_paris":"Parigi","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Linee guida della comunità","rockstargames_company_info_br":"Brasile","rockstargames_company_info_cz":"Repubblica Ceca","rockstargames_company_info_de":"Germania","rockstargames_company_info_display_for_country":"Mostra informazioni sulla pagina per il paese seguente: {country}","rockstargames_company_info_es":"Spagna","rockstargames_company_info_fr":"Francia","rockstargames_company_info_it":"Italia","rockstargames_company_info_jp":"Giappone","rockstargames_company_info_kr":"Corea del Sud","rockstargames_company_info_mx":"Messico","rockstargames_company_info_nl":"Paesi Bassi","rockstargames_company_info_pl":"Polonia","rockstargames_company_info_ru":"Federazione Russa","rockstargames_company_info_sa":"Arabia Saudita","rockstargames_company_info_tw":"Taiwan","rockstargames_company_info_us":"Stati Uniti","rockstargames_company_info_zh":"Cina","rockstargames_downloads_collections_download_text":"Scarica {item} {collection}","rockstargames_downloads_dimensions_label":"{width} per {height} pixel.","rockstargames_downloads_go_back":"Torna indietro","email_settings_cta":"Aggiorna le preferenze","unsubscribe_error_description":"Questo URL potrebbe non essere valido. Puoi apportare modifiche alle preferenze relative alle email di Rockstar Games nella pagina delle impostazioni dell’account.","unsubscribe_error_header":"Errore nel tentativo di annullamento dell’iscrizione","unsubscribe_info_description":"Non riceverai più email promozionali da Rockstar Games. Puoi riabilitare le email o apportare altre modifiche alle preferenze relative alle email di Rockstar Games nella pagina delle impostazioni dell’account.","unsubscribe_info_header":"Hai già annullato l’iscrizione","unsubscribe_success_description":"Non riceverai più email promozionali da Rockstar Games. Puoi riabilitare le email o apportare altre modifiche alle preferenze relative alle email di Rockstar Games nella pagina delle impostazioni dell’account.","unsubscribe_success_header":"Iscrizione annullata con successo"},"jp":{"footer_community_guidelines_label_text":"コミュニティガイドライン","footer_contact_label_text":"お問い合せ","footer_cookie_policy_label_text":"クッキーポリシー","footer_cookie_settings_label_text":"クッキー設定","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"London","footer_locations_new_york":"New York","footer_locations_paris":"Paris","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"コミュニティガイドライン","rockstargames_company_info_br":"ブラジル","rockstargames_company_info_cz":"チェコ","rockstargames_company_info_de":"ドイツ","rockstargames_company_info_display_for_country":"{country}のページを表示する","rockstargames_company_info_es":"スペイン","rockstargames_company_info_fr":"フランス","rockstargames_company_info_it":"イタリア","rockstargames_company_info_jp":"日本","rockstargames_company_info_kr":"韓国","rockstargames_company_info_mx":"メキシコ","rockstargames_company_info_nl":"オランダ","rockstargames_company_info_pl":"ポーランド","rockstargames_company_info_ru":"ロシア連邦","rockstargames_company_info_sa":"サウジアラビア","rockstargames_company_info_tw":"台湾","rockstargames_company_info_us":"アメリカ","rockstargames_company_info_zh":"中国","rockstargames_downloads_collections_download_text":"ダウンロード {item} {collection}","rockstargames_downloads_dimensions_label":"{width}×{height}ピクセル","rockstargames_downloads_go_back":"戻る","email_settings_cta":"設定を更新","unsubscribe_error_description":"このURLは無効になっている可能性があります。アカウント設定のページでロックスター・ゲームスのメール受信設定を変更できます。","unsubscribe_error_header":"登録解除時にエラー","unsubscribe_info_description":"今後はロックスター・ゲームスからマーケティングのメールを受信しません。アカウント設定のページでロックスター・ゲームスのメール受信設定をさらに変更したり、再登録ができます。","unsubscribe_info_header":"登録解除済みです","unsubscribe_success_description":"今後はロックスター・ゲームスからマーケティングのメールを受信しません。アカウント設定のページでロックスター・ゲームスのメール受信設定をさらに変更したり、再登録ができます。","unsubscribe_success_header":"登録解除が完了しました"},"kr":{"footer_community_guidelines_label_text":"커뮤니티 가이드라인","footer_contact_label_text":"문의","footer_cookie_policy_label_text":"쿠키 정책","footer_cookie_settings_label_text":"쿠키 설정","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"London","footer_locations_new_york":"New York","footer_locations_paris":"Paris","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"커뮤니티 가이드라인","rockstargames_company_info_br":"브라질","rockstargames_company_info_cz":"체코 공화국","rockstargames_company_info_de":"독일","rockstargames_company_info_display_for_country":"페이지 내용 표시 - {country}","rockstargames_company_info_es":"스페인","rockstargames_company_info_fr":"프랑스","rockstargames_company_info_it":"이탈리아","rockstargames_company_info_jp":"일본","rockstargames_company_info_kr":"대한민국","rockstargames_company_info_mx":"멕시코","rockstargames_company_info_nl":"네덜란드","rockstargames_company_info_pl":"폴란드","rockstargames_company_info_ru":"러시아 연방","rockstargames_company_info_sa":"사우디 아라비아","rockstargames_company_info_tw":"대만","rockstargames_company_info_us":"미국","rockstargames_company_info_zh":"중국","rockstargames_downloads_collections_download_text":"{collection} {item} 다운로드","rockstargames_downloads_dimensions_label":"{width} x {height} 픽셀입니다.","rockstargames_downloads_go_back":"뒤로가기","email_settings_cta":"설정 변경","unsubscribe_error_description":"이 URL은 유효하지 않습니다. 계정 설정 페이지에서 Rockstar Games 이메일 설정을 변경할 수 있습니다.","unsubscribe_error_header":"구독 취소 오류","unsubscribe_info_description":"더 이상 Rockstar Games로부터 마케팅 이메일을 수신하지 않습니다. 계정 설정 페이지에서 Rockstar Games 이메일을 다시 구독하거나 설정을 변경할 수 있습니다.","unsubscribe_info_header":"이미 구독 취소를 하였습니다","unsubscribe_success_description":"더 이상 Rockstar Games로부터 마케팅 이메일을 수신하지 않습니다. 계정 설정 페이지에서 Rockstar Games 이메일을 다시 구독하거나 설정을 변경할 수 있습니다.","unsubscribe_success_header":"구독 취소 완료"},"pl":{"footer_community_guidelines_label_text":"Regulamin społeczności","footer_contact_label_text":"Kontakt","footer_cookie_policy_label_text":"Polityka plików cookie","footer_cookie_settings_label_text":"Ustawienia plików cookie","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogota","footer_locations_london":"Londyn","footer_locations_new_york":"Nowy Jork","footer_locations_paris":"Paryż","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"Zachowuj się grzecznie!","community_guidelines_hero_title":"Regulamin społeczności","rockstargames_company_info_br":"Brazylia","rockstargames_company_info_cz":"Czechy","rockstargames_company_info_de":"Niemcy","rockstargames_company_info_display_for_country":"Pokaż informacje dla:","rockstargames_company_info_es":"Hiszpania","rockstargames_company_info_fr":"Francja","rockstargames_company_info_it":"Włochy","rockstargames_company_info_jp":"Japonia","rockstargames_company_info_kr":"Korea Południowa","rockstargames_company_info_mx":"Meksyk","rockstargames_company_info_nl":"Holandia","rockstargames_company_info_pl":"Polska","rockstargames_company_info_ru":"Rosja","rockstargames_company_info_sa":"Arabia Saudyjska","rockstargames_company_info_tw":"Tajwan","rockstargames_company_info_us":"Stany Zjednoczone","rockstargames_company_info_zh":"Chiny","rockstargames_downloads_collections_download_text":"Pobierz: {item} {collection}","rockstargames_downloads_dimensions_label":"{width} na {height} pikseli.","rockstargames_downloads_go_back":"Wróć","email_settings_cta":"Aktualizuj swoje preferencje","unsubscribe_error_description":"Odnośnik może być nieprawidłowy. Możesz zmienić swoje preferencje mailingowe w menu ustawień konta Rockstar Games.","unsubscribe_error_header":"Błąd podczas rezygnacji","unsubscribe_info_description":"Nie będziesz już otrzymywać wiadomości promocyjnych od Rockstar Games. Możesz zapisać się ponownie lub dokonać innych zmian preferencji mailingowych w menu ustawień konta Rockstar Games.","unsubscribe_info_header":"Subskrypcja jest już nieaktywna","unsubscribe_success_description":"Nie będziesz już otrzymywać wiadomości promocyjnych od Rockstar Games. Zapisz się ponownie lub dokonaj innych zmian preferencji mailingowych w menu ustawień konta Rockstar Games.","unsubscribe_success_header":"Zrezygnowano z subskrypcji"},"br":{"footer_community_guidelines_label_text":"Diretrizes da Comunidade","footer_contact_label_text":"Entre em contato","footer_cookie_policy_label_text":"Política de cookies","footer_cookie_settings_label_text":"Configurações de cookies","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"Londres","footer_locations_new_york":"Nova York","footer_locations_paris":"Paris","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Diretrizes da Comunidade","rockstargames_company_info_br":"Brasil","rockstargames_company_info_cz":"República Tcheca","rockstargames_company_info_de":"Alemanha","rockstargames_company_info_display_for_country":"Exibir informações da página para {country}","rockstargames_company_info_es":"Espanha","rockstargames_company_info_fr":"França","rockstargames_company_info_it":"Itália","rockstargames_company_info_jp":"Japão","rockstargames_company_info_kr":"Coreia do Sul","rockstargames_company_info_mx":"México","rockstargames_company_info_nl":"Países Baixos","rockstargames_company_info_pl":"Polônia","rockstargames_company_info_ru":"Federação da Rússia","rockstargames_company_info_sa":"Arábia Saudita","rockstargames_company_info_tw":"Taiwan","rockstargames_company_info_us":"Estados Unidos","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"Baixar {collection} de {item}","rockstargames_downloads_dimensions_label":"{width} x {height} pixels.","rockstargames_downloads_go_back":"Voltar","email_settings_cta":"Atualizar preferências","unsubscribe_error_description":"Esta URL pode ser inválida. Você pode aplicar mudanças às suas preferências de e-mail da Rockstar Games na página de Configurações da conta.","unsubscribe_error_header":"Erro ao cancelar inscrição","unsubscribe_info_description":"Você não receberá mais e-mails de marketing da Rockstar Games. Escolha receber e-mails de marketing novamente ou aplique mudanças adicionais às suas preferências de e-mail da Rockstar Games na página de Configurações da conta.","unsubscribe_info_header":"Você já cancelou a inscrição","unsubscribe_success_description":"Você não receberá mais e-mails de marketing da Rockstar Games. Escolha receber e-mails de marketing novamente ou aplique mudanças adicionais às suas preferências de e-mail da Rockstar Games na página de Configurações da conta.","unsubscribe_success_header":"Inscrição cancelada"},"ru":{"footer_community_guidelines_label_text":"Правила сообщества","footer_contact_label_text":"Связаться с нами","footer_cookie_policy_label_text":"Политика использования файлов Cookie","footer_cookie_settings_label_text":"Настройки файлов Cookie","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Богота","footer_locations_london":"Лондон","footer_locations_new_york":"Нью-Йорк","footer_locations_paris":"Париж","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Правила сообщества","rockstargames_company_info_br":"Бразилии","rockstargames_company_info_cz":"Чехии","rockstargames_company_info_de":"Германии","rockstargames_company_info_display_for_country":"Показать содержимое страницы для {country}","rockstargames_company_info_es":"Испании","rockstargames_company_info_fr":"Франции","rockstargames_company_info_it":"Италии","rockstargames_company_info_jp":"Японии","rockstargames_company_info_kr":"Южной Кореи","rockstargames_company_info_mx":"Мексики","rockstargames_company_info_nl":"Нидерландов","rockstargames_company_info_pl":"Польши","rockstargames_company_info_ru":"России","rockstargames_company_info_sa":"Саудовской Аравии","rockstargames_company_info_tw":"Тайваня","rockstargames_company_info_us":"США","rockstargames_company_info_zh":"Китая","rockstargames_downloads_collections_download_text":"Загрузить: «{item}» из коллекции «{collection}».","rockstargames_downloads_dimensions_label":"{width} на {height} пикселей.","rockstargames_downloads_go_back":"Вернуться","email_settings_cta":"Изменить настройки","unsubscribe_error_description":"Возможно, этот адрес недействителен. Вы можете изменить настройки электронной почты Rockstar Games на странице настроек учетной записи.","unsubscribe_error_header":"Ошибка при отмене подписки","unsubscribe_info_description":"Вы больше не будете получать никаких рекламных писем от Rockstar Games. Подпишитесь заново или внесите другие изменения в настройки электронной почты Rockstar Games на странице настроек учетной записи.","unsubscribe_info_header":"Вы уже отменили подписку","unsubscribe_success_description":"Вы больше не будете получать никаких рекламных писем от Rockstar Games. Подпишитесь заново или внесите другие изменения в настройки электронной почты Rockstar Games на странице настроек учетной записи.","unsubscribe_success_header":"Подписка отменена"},"hans":{"footer_community_guidelines_label_text":"社区准则","footer_contact_label_text":"联系我们","footer_cookie_policy_label_text":"Cookie 政策","footer_cookie_settings_label_text":"Cookie 设置","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"波哥大","footer_locations_london":"伦敦","footer_locations_new_york":"纽约","footer_locations_paris":"巴黎","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"说声对不起，做个好人！","community_guidelines_hero_title":"社区准则","rockstargames_company_info_br":"巴西","rockstargames_company_info_cz":"捷克","rockstargames_company_info_de":"德国","rockstargames_company_info_display_for_country":"显示{country}的页面信息","rockstargames_company_info_es":"西班牙","rockstargames_company_info_fr":"法国","rockstargames_company_info_it":"意大利","rockstargames_company_info_jp":"日本","rockstargames_company_info_kr":"韩国","rockstargames_company_info_mx":"墨西哥","rockstargames_company_info_nl":"荷兰","rockstargames_company_info_pl":"波兰","rockstargames_company_info_ru":"俄罗斯联邦","rockstargames_company_info_sa":"沙特阿拉伯","rockstargames_company_info_tw":"台湾地区","rockstargames_company_info_us":"美国","rockstargames_company_info_zh":"中国","rockstargames_downloads_collections_download_text":"下载 {item} 的 {collection}","rockstargames_downloads_dimensions_label":"{width} X {height} 像素","rockstargames_downloads_go_back":"返回","email_settings_cta":"更新偏好设置","unsubscribe_error_description":"此网址可能无效。您可以在账户设置页面更改您的 Rockstar Games 邮件偏好设置。","unsubscribe_error_header":"取消订阅出错","unsubscribe_info_description":"您将不会收到更多 Rockstar Games 营销邮件。您可以在账户设置页面重新订阅或更改您的 Rockstar Games 邮件偏好设置。","unsubscribe_info_header":"您已经取消订阅","unsubscribe_success_description":"您将不会收到更多 Rockstar Games 营销邮件。您可以在账户设置页面重新订阅或更改您的 Rockstar Games 邮件偏好设置。","unsubscribe_success_header":"取消订阅成功"},"tw":{"footer_community_guidelines_label_text":"社群守則","footer_contact_label_text":"聯絡方式","footer_cookie_policy_label_text":"Cookie 政策","footer_cookie_settings_label_text":"Cookie 設定","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"波哥大","footer_locations_london":"倫敦","footer_locations_new_york":"紐約","footer_locations_paris":"巴黎","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"敢於道歉，友善待人！","community_guidelines_hero_title":"社群守則","rockstargames_company_info_br":"巴西","rockstargames_company_info_cz":"捷克共和國","rockstargames_company_info_de":"德國","rockstargames_company_info_display_for_country":"顯示頁面資訊：{country}","rockstargames_company_info_es":"西班牙","rockstargames_company_info_fr":"法國","rockstargames_company_info_it":"義大利","rockstargames_company_info_jp":"日本","rockstargames_company_info_kr":"南韓","rockstargames_company_info_mx":"墨西哥","rockstargames_company_info_nl":"荷蘭","rockstargames_company_info_pl":"波蘭","rockstargames_company_info_ru":"俄羅斯聯邦","rockstargames_company_info_sa":"沙烏地阿拉伯","rockstargames_company_info_tw":"台灣","rockstargames_company_info_us":"美國","rockstargames_company_info_zh":"中國","rockstargames_downloads_collections_download_text":"下載「{item}」的「{collection}」","rockstargames_downloads_dimensions_label":"像素：{width} x {height}。","rockstargames_downloads_go_back":"返回","email_settings_cta":"更新偏好設定","unsubscribe_error_description":"這個網址可能無效。您可以在帳戶設定頁面變更您的 Rockstar Games 電子郵件偏好設定。","unsubscribe_error_header":"取消訂閱錯誤","unsubscribe_info_description":"您將不會收到任何其他來自 Rockstar Games 的行銷電子郵件。在帳戶設定頁面重新訂閱，或為您的 Rockstar Games 電子郵件偏好設定進行其他變更。","unsubscribe_info_header":"您已經取消訂閱。","unsubscribe_success_description":"您將不會收到任何其他來自 Rockstar Games 的行銷電子郵件。在帳戶設定頁面重新訂閱，或為您的 Rockstar Games 電子郵件偏好設定進行其他變更。","unsubscribe_success_header":"取消訂閱成功"}}')
    }
  }
]);