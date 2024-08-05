! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "e01c2324-5d82-40a6-bc17-07cd1a6f29d6", e._sentryDebugIdIdentifier = "sentry-dbid-e01c2324-5d82-40a6-bc17-07cd1a6f29d6")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [8], {
    93665: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => p,
        h: () => k
      });
      var n = t(71403),
        i = t(15688),
        s = t(80791),
        r = t(74401),
        o = t(40207),
        l = t(89779);
      var d = t(46632);
      const c = e => {
          let {
            modal: a
          } = e;
          const {
            content: t,
            className: c,
            height: u,
            onClose: m,
            rect: f = {
              left: 0,
              top: 0
            },
            contentStyle: k = {},
            contentClassName: p = "",
            width: h,
            fadeIn: y = !0,
            cardIds: g,
            activeId: x,
            theme: v,
            title: b,
            gtm: w = {},
            aspectRatio: S = "default",
            cardDimensions: N
          } = a, {
            left: E,
            top: _
          } = f, [D, j] = (0, n.useState)(-1), [I, V] = (0, n.useState)(g?.length || 0), {
            track: T
          } = (0, o.useGtmTrack)(), A = null !== g && (g?.length || 0) > 1 && ("flag_bg" === v || "fob" === N?.size), [F, G] = (0, l.useSearchParams)(), [M, P] = (0, n.useState)(!1), [C, U] = (0, n.useState)(!1), [B, H] = (0, n.useState)(), $ = () => {
            const e = D > -1 ? D - 1 : 0;
            j(e), U(e <= 0), P(e >= I - 1), T({
              event: "modal_previous",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              element_placement: b,
              position: D
            })
          }, L = () => {
            const e = D > -1 ? D + 1 : 0;
            j(e), U(e <= 0), P(e >= I - 1), T({
              event: "modal_next",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              element_placement: b,
              position: D
            })
          };
          (0, n.useEffect)((() => {
            V(g?.length || 0)
          }), [g?.length]), (0, n.useEffect)((() => {
            null !== D && null !== g && g && D < g.length && D > -1 && G({
              info: g[D].toString()
            })
          }), [D, g]), (0, n.useEffect)((() => {
            const e = g?.indexOf(x);
            e && j(e)
          }), [x, g]), (0, n.useEffect)((() => {
            if (null !== g && -1 === D && g && g.length > 0) {
              const e = F.get("info");
              g?.forEach(((a, t) => {
                a === e && (j(t), U(t <= 0), P(t >= I - 1))
              }))
            }
          }), [g, D]);
          const [R] = (0, n.useState)({
            y: _,
            x: E,
            top: 0,
            left: 0,
            width: h,
            height: u,
            border: "0px solid transparent",
            background: "transparent",
            marginTop: A ? "0" : ""
          }), O = {
            opacity: 1
          }, q = (0, n.useRef)(null), K = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, z = {
            ease: "easeIn",
            duration: .3,
            delay: .5
          }, [J] = (0, n.useState)({
            x: "-50%",
            y: "-50%",
            top: "50%",
            left: "50%",
            width: "calc(100vw - (var(--modal-padding) * 2))",
            height: "var(--modal-height)",
            border: "1px solid var(--border-color, #2d2d2d)",
            background: "var(--black-100)",
            marginTop: A ? "calc(var(--modal-controlsHeight) - var(--modal-padding))" : "",
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
          }), [Q, W] = (0, n.useState)({
            initial: R,
            shown: J
          });
          (0, n.useEffect)((() => {
            W({
              initial: R,
              shown: J
            })
          }), [R, J]), (0, n.useEffect)((() => {
            const e = e => {
              "function" == typeof m && "Escape" === e.key && (m(), T({
                event: "modal_close",
                element_placement: b,
                ...w
              }))
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []);
          const Y = () => {
              "function" == typeof m && (m(), T({
                event: "modal_close",
                element_placement: b,
                ...w
              }))
            },
            Z = (e, a) => {
              if (!e || !e.children || a < 0) return null;
              for (let t = 0; t < e.children.length; t++) {
                const n = e.children[t];
                if (n.scrollHeight > n.clientHeight) return n;
                const i = Z(n, a - 1);
                if (i) return i
              }
              return null
            },
            X = e => {
              if (ae?.current?.children) {
                let a = null;
                const t = "ArrowDown" === e.key ? 25 : "ArrowUp" === e.key ? -25 : 0;
                switch (e.key) {
                  case "ArrowDown":
                  case "ArrowUp":
                    a = (e => {
                      let a = null;
                      return B?.queried ? a = B.element : (a = Z(e, 2), H({
                        queried: !0,
                        element: a
                      })), a
                    })(ae.current), e.preventDefault(), a && (a.scrollTop += t)
                }
              }
            },
            ee = y ? 0 : 1,
            ae = (0, n.useRef)(null),
            te = (0, d.jsx)(s.motion.button, {
              className: "rockstargames-sites-legacyb0326cc98df99ada0e0f6821f0f0a6ad",
              "aria-label": "Close",
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: z,
              onClick: () => {
                Y()
              },
              onKeyDown: X,
              onKeyUp: X
            });
          let ne = null;
          return ne = i.Ay, (0, n.useMemo)((() => (0, d.jsx)("div", {
            className: "rockstargames-sites-legacye9a8e066d320a81b61aa2c636fa0a5b5",
            "data-show-nav": A,
            "data-aspect-ratio": S,
            children: (0, d.jsx)(ne, {
              children: (0, d.jsxs)("div", {
                children: [(0, d.jsx)(s.motion.div, {
                  className: "rockstargames-sites-legacyc8632c630878ad16e637fe2b8db2f02c",
                  initial: {
                    opacity: 0
                  },
                  animate: O,
                  transition: K,
                  onClick: () => Y()
                }), A && (0, d.jsxs)("div", {
                  className: "rockstargames-sites-legacyeeecb8dc782f382fc9d32d03ecc1a2a5",
                  children: [(0, d.jsxs)(s.motion.div, {
                    className: "rockstargames-sites-legacyb6e3406cb9a52fc7583d5c74681e88bc",
                    initial: {
                      opacity: 0
                    },
                    animate: {
                      opacity: 1
                    },
                    transition: z,
                    children: [(0, d.jsx)("button", {
                      type: "button",
                      "aria-label": "Previous",
                      onClick: $,
                      disabled: C,
                      onKeyDown: X,
                      onKeyUp: X
                    }), (0, d.jsxs)("div", {
                      className: "rockstargames-sites-legacyff3c13d9dc1de9af609a1f99b4c47039",
                      children: [" ", D + 1, (0, d.jsx)("div", {
                        className: "rockstargames-sites-legacycd9c6033ad00894881fa5451acfe15da"
                      }), g?.length, " "]
                    }), (0, d.jsx)("button", {
                      type: "button",
                      "aria-label": "Next",
                      onClick: L,
                      disabled: M,
                      onKeyDown: X,
                      onKeyUp: X,
                      "data-autofocus": !0
                    })]
                  }), te]
                }), (0, d.jsx)(s.motion.div, {
                  className: "rockstargames-sites-legacyfab99cc2e2ca2e2a2158f9d41e764558",
                  ref: q,
                  initial: "initial",
                  animate: "shown",
                  variants: Q,
                  transition: K,
                  style: k,
                  children: (0, d.jsxs)(s.motion.div, {
                    className: (0, r.classList)("rockstargames-sites-legacyb6aa5ebf680af5d95d0e9c76ac36ed82", c),
                    children: [!A && te, (0, d.jsx)(s.motion.div, {
                      className: (0, r.classList)("rockstargames-sites-legacyd901631c0b9d817396c8352c027a2a0d", p),
                      initial: {
                        opacity: ee
                      },
                      animate: {
                        opacity: 1
                      },
                      transition: z,
                      ref: ae,
                      children: t
                    }), (0, d.jsx)("button", {
                      className: "rockstargames-sites-legacyf1ecf74036b2b7fdfda3613619af40cf",
                      type: "button",
                      "aria-label": "End of modal"
                    })]
                  })
                })]
              })
            })
          })), [t, D, k])
        },
        u = "modal-context",
        m = [null, () => null],
        f = window?.[u] ?? (window[u] = (0, n.createContext)(m)),
        k = () => (0, n.useContext)(f),
        p = e => {
          let {
            children: a
          } = e;
          const [t, i] = (0, n.useState)(m), s = (0, n.useMemo)((() => t?.content ? (0, d.jsx)(c, {
            modal: t
          }) : null), [t]);
          return (0, d.jsx)(f.Provider, {
            value: [s, i],
            children: a
          })
        }
    },
    73008: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        default: () => _
      });
      var n = t(25076),
        i = t(71403),
        s = t(42756),
        r = t(60285),
        o = t(89779),
        l = t(58407);
      var d = t(46632);
      const c = (0, s.withTranslations)((e => {
          let {
            t: a
          } = e;
          const [t] = (0, i.useState)(""), n = (0, o.useNavigate)(), s = (0, l.useMutateState)();
          return (0, d.jsxs)("form", {
            action: "#",
            className: "rockstargames-sites-legacyb82052ce07e004075e77261c373bfc50",
            onSubmit: e => {
              e.preventDefault(), s({
                navOpen: !1
              }), document.activeElement?.blur(), n(`/search?q=${e.target.q.value}`)
            },
            role: "search",
            children: [(0, d.jsx)("button", {
              type: "submit",
              role: "button",
              title: "Submit"
            }), (0, d.jsx)("input", {
              autoComplete: "off",
              defaultValue: t,
              enterKeyHint: "search",
              name: "q",
              placeholder: a("Search Rockstar Games")
            })]
          })
        })),
        u = (0, s.withTranslations)((e => {
          let {
            error: a,
            t,
            domain: n = ""
          } = e;
          console.error({
            error: a
          });
          let s = a?.message ?? t("error-404-new");
          s = t("error-404-new");
          const o = a?.code ?? 398,
            l = (0, i.useRef)(null);
          return (0, i.useEffect)((() => {
            l && l?.current && l.current.focus()
          }), [l]), (0, d.jsxs)("div", {
            className: "rockstargames-sites-legacyd988ce20c420c26fc5e455279bf94cb9",
            children: [(0, d.jsx)("h3", {
              tabIndex: -1,
              ref: l,
              children: `${s} (${o})`
            }), (0, d.jsx)(r.A, {
              to: "/",
              children: t("Home")
            }), "clr" !== n && (0, d.jsx)(c, {})]
          })
        }));
      class m extends i.Component {
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
          return null !== this.state.error.code ? (0, d.jsx)(u, {
            error: this.state.error
          }) : this.props.children
        }
      }
      var f = t(72006);
      const k = JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[300,300,0]},"a":{"k":[0,0,0]},"s":{"k":[244,244,100]}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"k":[100,100]},"p":{"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"tm","s":{"k":[{"i":{"x":[0.439],"y":[1.016]},"o":{"x":[0.561],"y":[0.015]},"n":["0p439_1p016_0p561_0p015"],"t":5,"s":[100],"e":[0]},{"t":33.0000013441176}],"ix":1},"e":{"k":[{"i":{"x":[0.439],"y":[1.017]},"o":{"x":[0.561],"y":[0.016]},"n":["0p439_1p017_0p561_0p016"],"t":0,"s":[100],"e":[0]},{"t":30.0000012219251}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"},{"ty":"st","fillEnabled":true,"c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":16},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"}],"ip":0,"op":900.000036657751,"st":0,"bm":0,"sr":1}],"v":"4.5.3","ddd":0,"ip":1.00000004073083,"op":33.0000013441175,"fr":29.9700012207031,"w":600,"h":600}'),
        p = JSON.parse('{"v":"5.7.3","fr":60,"ip":0,"op":64,"w":300,"h":300,"nm":"Dot_Loading","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"center","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":10,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":22,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":34,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.667,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"right","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":5,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":17,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":29,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.333,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":12,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":24,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0}],"markers":[]}'),
        h = {
          SPINNING: "spinning",
          THREE_DOTS: "threeDots"
        },
        y = e => {
          let a, {
            type: t = h.SPINNING
          } = e;
          switch (t) {
            case h.THREE_DOTS:
              a = p;
              break;
            case h.SPINNING:
            default:
              a = k
          }
          const n = {
            loop: !0,
            autoplay: !0,
            animationData: a,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
          };
          return (0, d.jsx)(f.A, {
            options: n,
            height: 50,
            width: 50
          })
        };
      var g = t(93665),
        x = t(74401),
        v = t(31879),
        b = t(97655),
        w = t(24247);
      const S = (0, s.withTranslations)((e => {
        let {
          t: a
        } = e;
        const [, t] = (0, g.h)(), [r, o] = (0, n.useSearchParams)(), {
          pathname: c
        } = (0, n.useLocation)(), {
          data: m,
          loading: f
        } = (0, l.useQuery)(b.MetaUrlInfo, {
          variables: {
            url: c.replace(/\/$/, "")
          },
          setTitleDataPath: "metaUrlInfo.title"
        }), k = (0, s.useLocale)(), p = m?.metaUrlInfo?.tina;
        return (0, i.useEffect)((() => {
          const e = r.get("video");
          if (!e || !p) return void t(null);
          const n = Number(p?.payload?.content[0].content[0]?.tag ?? 0);
          let i;
          i = 40 === n && ["pt_br", "zh_tw", "zh_hans", "ko_kr", "ru_ru", "ja_jp", "pl_pl"].includes(k) ? "en_us" : k;
          const s = (0, d.jsx)(v.VideoWithPlaylist, {
              tagIds: [n],
              locale: i,
              playlistTitle: a("Up Next"),
              groupTypes: ["trailer", "feature"],
              currentVideoId: e,
              isModal: !0
            }),
            l = {
              left: window.innerWidth / 2,
              top: window.innerHeight / 2
            };
          t({
            content: s,
            rect: l,
            onClose: () => {
              o({})
            },
            title: "Video Modal",
            contentClassName: "rockstargames-sites-legacya1b74831bac97f1749e525bcc2aeccb2"
          })
        }), [r.get("video"), k, p]), (0, i.useEffect)((() => () => t(null)), []), f || p ? f ? (0, d.jsx)("div", {
          className: "rockstargames-sites-legacye7319efabeddf6cdc8c95f038912d0c1",
          children: (0, d.jsx)(y, {})
        }) : (0, d.jsx)(x.TinaParser, {
          components: w.componentsForTinaParser,
          tina: p
        }) : (0, d.jsx)(u, {})
      }));
      var N = t(99124);
      const E = e => {
          let {
            children: a,
            brand: t,
            setHeaderHidden: n
          } = e;
          const {
            setState: s
          } = (0, N.IJ)();
          return (0, i.useLayoutEffect)((() => {
            s("brand", t)
          }), []), (0, d.jsx)("div", {
            className: "rockstargames-sites-legacyfa85682f753d59e768dbb3eedf01a62a",
            "data-brand": t,
            children: a
          })
        },
        _ = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return function(t) {
            return (0, d.jsx)(m, {
              header: a,
              children: (0, d.jsx)(e, {
                ...t
              })
            })
          }
        }((e => {
          let {
            setHeaderHidden: a
          } = e;
          const t = [{
            path: "/",
            element: (0, d.jsx)(S, {})
          }, {
            path: "*",
            element: (0, d.jsx)(u, {
              error: {
                code: window?.env?.responseStatusCode ?? 398
              }
            })
          }];
          return (0, d.jsx)(E, {
            brand: "reddeadredemption",
            setHeaderHidden: a,
            children: (0, n.useRoutes)(t)
          })
        }))
    },
    97655: e => {
      var a = {
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

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
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
        body: "query MetaUrlInfo($url: String, $locale: String!, $cache: Boolean = true) {\n    metaUrlInfo(url: $url, locale: $locale, cache: $cache) {\n        url\n        title\n        description\n        id\n        keywords\n        tina {\n            payload\n            variables {\n                keys\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function i(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var n = e.definitions[t];
          if (n.name && n.name.value == a) return n
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.MetaUrlInfo = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var s = n[a] || new Set,
          r = new Set,
          o = new Set;
        for (s.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var l = o;
          o = new Set, l.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var n = i(e, a);
          n && t.definitions.push(n)
        })), t
      }(a, "MetaUrlInfo")
    }
  }
]);