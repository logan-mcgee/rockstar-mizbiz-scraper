! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "8d200cb3-98b4-43f3-a2eb-32b6ef0a8ac7", e._sentryDebugIdIdentifier = "sentry-dbid-8d200cb3-98b4-43f3-a2eb-32b6ef0a8ac7")
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
  [1005], {
    35508: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var s = t(62229);
      var i = t(81788),
        r = t(91029);
      const n = (0, i.withIntl)((e => {
        let {
          children: a,
          style: t,
          theme: i
        } = e;
        const [n, c] = (0, s.useState)(i);
        return (0, s.useEffect)((() => {
          i && c(i)
        }), [i]), (0, r.jsx)("div", {
          className: "rockstargames-sites-legacye5e0faf6ab9871fd60b958c6f7dcf519",
          style: t,
          "data-theme": n,
          children: a
        })
      }), {}, void 0, (e => {
        "MISSING_TRANSLATION" !== e.code && console.error(e)
      }))
    },
    23031: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r
      });
      var s = t(3533),
        i = t(26432);
      const r = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          parent: "",
          post: null
        };
        return {
          name: "listItem",
          label: "List Item",
          component: "group",
          fields: [(0, s.om)(e), (0, s.z9)({
            name: "content",
            label: "Content",
            component: "text",
            initialValues: ""
          }), (0, s.sE)(e)],
          defaultItem: () => (0, s.Q)({
            content: ""
          }),
          itemProps: e => (0, s.Rv)(e, {
            label: (0, i._e)(`${e?.name??e?.[s.Qw]?.content??"New"} [List Item]`)
          })
        }
      }
    },
    13624: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => f,
        h: () => u
      });
      var s = t(62229),
        i = t(95966),
        r = t(9623),
        n = t(24098),
        c = t(90660),
        o = t(2918);
      var l = t(91029);
      const d = e => {
          let {
            modal: a
          } = e;
          const {
            content: t,
            className: d,
            height: m,
            onClose: g,
            rect: u = {
              left: 0,
              top: 0
            },
            contentStyle: f = {},
            contentClassName: p = "",
            width: b,
            fadeIn: k = !0,
            cardIds: v,
            activeId: y,
            theme: h,
            title: _,
            gtm: x = {},
            aspectRatio: j = "default",
            cardDimensions: N
          } = a, {
            left: w,
            top: S
          } = u, C = v?.indexOf(y), [T, I] = (0, s.useState)(v?.length || 0), {
            track: L
          } = (0, o.useGtmTrack)(), P = null !== v && (v?.length || 0) > 1 && ("flag_bg" === h || "fob" === N?.size), E = window.location.href.includes("cms5"), [, z] = (0, r.useSearchParams)(), [B, V] = (0, s.useState)(!1), [D, M] = (0, s.useState)(!1), [$, A] = (0, s.useState)(), F = e => {
            "number" == typeof e && v && e < v.length && e > -1 && z({
              info: v[e].toString()
            })
          }, O = () => {
            const e = "number" == typeof C && C > -1 ? C - 1 : 0;
            F(e), L({
              event: "modal_previous",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              element_placement: _,
              position: C
            })
          }, G = () => {
            const e = "number" == typeof C && C > -1 ? C + 1 : 0;
            F(e), L({
              event: "modal_next",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              element_placement: _,
              position: C
            })
          };
          (0, s.useEffect)((() => {
            I(v?.length || 0)
          }), [v?.length]), (0, s.useEffect)((() => {
            null !== C && null !== v && F(C)
          }), [C, v]), (0, s.useEffect)((() => {
            const e = v?.findIndex((e => e === y));
            "number" == typeof e && (M(e <= 0), V(e >= T - 1))
          }), [v, y, T]);
          const [R] = (0, s.useState)({
            y: S,
            x: w,
            top: 0,
            left: 0,
            width: b,
            height: m,
            border: "0px solid transparent",
            background: "transparent",
            marginTop: P ? "0" : ""
          }), H = {
            opacity: 1
          }, q = (0, s.useRef)(null), U = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, W = {
            ease: "easeIn",
            duration: .3,
            delay: .5
          }, [K] = (0, s.useState)({
            x: "-50%",
            y: "-50%",
            top: "50%",
            left: "50%",
            width: "calc(100vw - (var(--modal-padding) * 2))",
            height: "var(--modal-height)",
            border: "1px solid var(--border-color, #2d2d2d)",
            background: "var(--black-100)",
            marginTop: P ? "calc(var(--modal-controlsHeight) - var(--modal-padding))" : "",
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
          }), [Q, Y] = (0, s.useState)({
            initial: R,
            shown: K
          });
          (0, s.useEffect)((() => {
            Y({
              initial: R,
              shown: K
            })
          }), [R, K]), (0, s.useEffect)((() => {
            const e = e => {
              "function" == typeof g && "Escape" === e.key && (g(), L({
                event: "modal_close",
                element_placement: _,
                ...x
              }))
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []);
          const X = () => {
              "function" == typeof g && (g(), L({
                event: "modal_close",
                element_placement: _,
                ...x
              }))
            },
            Z = (e, a) => {
              if (!e || !e.children || a < 0) return null;
              for (let t = 0; t < e.children.length; t++) {
                const s = e.children[t];
                if (s.scrollHeight > s.clientHeight) return s;
                const i = Z(s, a - 1);
                if (i) return i
              }
              return null
            },
            J = e => {
              if (ae?.current?.children) {
                let a = null;
                const t = "ArrowDown" === e.key ? 25 : "ArrowUp" === e.key ? -25 : 0;
                switch (e.key) {
                  case "ArrowDown":
                  case "ArrowUp":
                    a = (e => {
                      let a = null;
                      return $?.queried ? a = $.element : (a = Z(e, 2), A({
                        queried: !0,
                        element: a
                      })), a
                    })(ae.current), e.preventDefault(), a && (a.scrollTop += t)
                }
              }
            },
            ee = k ? 0 : 1,
            ae = (0, s.useRef)(null),
            te = (0, l.jsx)(c.motion.button, {
              className: "rockstargames-sites-legacyf462dceb5efde1dd4885f34f45132e3d",
              "aria-label": "Close",
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: W,
              onClick: () => {
                X()
              },
              onKeyDown: J,
              onKeyUp: J
            });
          let se = null;
          return se = E ? s.Fragment : n.Ay, (0, s.useMemo)((() => (0, l.jsx)("div", {
            className: "rockstargames-sites-legacya1a5465ff4d4669854d9beb4e863413e",
            "data-show-nav": P,
            "data-aspect-ratio": j,
            children: (0, l.jsx)(se, {
              children: (0, l.jsxs)("div", {
                children: [(0, l.jsx)(c.motion.div, {
                  className: "rockstargames-sites-legacycf4f951d4ea408858a9b48c822007342",
                  initial: {
                    opacity: 0
                  },
                  animate: H,
                  transition: U,
                  onClick: () => X()
                }), P && (0, l.jsxs)("div", {
                  className: "rockstargames-sites-legacyd5753adf78798ed2e5e2ab02678cfe1b",
                  children: [(0, l.jsxs)(c.motion.div, {
                    className: "rockstargames-sites-legacydbb0055ba799f28f1a2e41026b8781e8",
                    initial: {
                      opacity: 0
                    },
                    animate: {
                      opacity: 1
                    },
                    transition: W,
                    children: [(0, l.jsx)("button", {
                      type: "button",
                      "aria-label": "Previous",
                      onClick: O,
                      disabled: D,
                      onKeyDown: J,
                      onKeyUp: J
                    }), (0, l.jsxs)("div", {
                      className: "rockstargames-sites-legacye316695281c4c56337307741bda1371f",
                      "data-theme": h,
                      children: [" ", (C ?? 0) + 1, (0, l.jsx)("div", {
                        className: "rockstargames-sites-legacyc1ee424eae15f7b789c86e634df9e28d"
                      }), v?.length, " "]
                    }), (0, l.jsx)("button", {
                      type: "button",
                      "aria-label": "Next",
                      onClick: G,
                      disabled: B,
                      onKeyDown: J,
                      onKeyUp: J,
                      "data-autofocus": !0
                    })]
                  }), te]
                }), (0, l.jsx)(c.motion.div, {
                  className: "rockstargames-sites-legacye708da42918d8bbff9a8e1a36a2c4366",
                  ref: q,
                  initial: "initial",
                  animate: "shown",
                  variants: Q,
                  transition: U,
                  style: f,
                  children: (0, l.jsxs)(c.motion.div, {
                    className: (0, i.classList)("rockstargames-sites-legacya7d77f83f629e9ae93f6934c8ba007b0", d),
                    children: [!P && te, (0, l.jsx)(c.motion.div, {
                      className: (0, i.classList)("rockstargames-sites-legacyf26fc1babb8dd1284d4c03b3dabff714", p),
                      initial: {
                        opacity: ee
                      },
                      animate: {
                        opacity: 1
                      },
                      transition: W,
                      ref: ae,
                      children: t
                    }), (0, l.jsx)("button", {
                      className: "rockstargames-sites-legacyea8f15b1bfbda9f3efef89dc0d2ebc89",
                      type: "button",
                      "aria-label": "End of modal"
                    })]
                  })
                })]
              })
            })
          })), [t, C, f])
        },
        m = [null, () => null],
        g = (0, i.setContextItem)({
          context: (0, s.createContext)(m),
          key: "modalContext"
        }),
        u = () => (0, s.useContext)(g),
        f = e => {
          let {
            children: a
          } = e;
          const [t, r] = (0, s.useState)(m), {
            setBodyIsLocked: n
          } = (0, i.useBodyScrollable)("ModalProvider"), c = (0, s.useMemo)((() => t?.content ? (0, l.jsx)(d, {
            modal: t
          }) : null), [t]), o = () => n(!1);
          return (0, s.useEffect)((() => (window.addEventListener("popstate", o), () => {
            window.removeEventListener("popstate", o)
          })), []), (0, s.useEffect)((() => {
            n(!!c)
          }), [c]), (0, l.jsx)(g.Provider, {
            value: [c, r],
            children: a
          })
        }
    },
    9137: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => l
      });
      var s = t(23112),
        i = t.n(s);
      const r = JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[300,300,0]},"a":{"k":[0,0,0]},"s":{"k":[244,244,100]}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"k":[100,100]},"p":{"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"tm","s":{"k":[{"i":{"x":[0.439],"y":[1.016]},"o":{"x":[0.561],"y":[0.015]},"n":["0p439_1p016_0p561_0p015"],"t":5,"s":[100],"e":[0]},{"t":33.0000013441176}],"ix":1},"e":{"k":[{"i":{"x":[0.439],"y":[1.017]},"o":{"x":[0.561],"y":[0.016]},"n":["0p439_1p017_0p561_0p016"],"t":0,"s":[100],"e":[0]},{"t":30.0000012219251}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"},{"ty":"st","fillEnabled":true,"c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":16},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"}],"ip":0,"op":900.000036657751,"st":0,"bm":0,"sr":1}],"v":"4.5.3","ddd":0,"ip":1.00000004073083,"op":33.0000013441175,"fr":29.9700012207031,"w":600,"h":600}'),
        n = JSON.parse('{"v":"5.7.3","fr":60,"ip":0,"op":64,"w":300,"h":300,"nm":"Dot_Loading","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"center","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":10,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":22,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":34,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.667,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"right","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":5,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":17,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":29,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.333,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":12,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":24,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0}],"markers":[]}');
      var c = t(91029);
      const o = {
          SPINNING: "spinning",
          THREE_DOTS: "threeDots"
        },
        l = e => {
          let a, {
            type: t = o.SPINNING
          } = e;
          switch (t) {
            case o.THREE_DOTS:
              a = n;
              break;
            case o.SPINNING:
            default:
              a = r
          }
          return (0, c.jsx)(i(), {
            loop: !0,
            autoplay: !0,
            animationData: a,
            style: {
              width: "50px",
              height: "50px"
            },
            "data-testid": "loader-spinner"
          })
        }
    },
    71312: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var s = t(62229),
        i = t(2918);
      const r = (0, s.forwardRef)(((e, a) => {
        const {
          threshold: t,
          callback: r,
          children: n,
          requireUser: c
        } = e, {
          track: o
        } = (0, i.useGtmTrack)(c), [l, d] = (0, s.useState)(a?.current);
        return (0, s.useEffect)((() => {
          a?.current && d(a.current)
        }), [a]), ((e, a, t) => {
          const [i, r] = (0, s.useState)({
            scrollDepths: e,
            scrollY: 0
          }), {
            scrollDepths: n,
            scrollY: c
          } = i;
          (0, s.useEffect)((() => {
            "undefined" != typeof window && 0 !== window.pageYOffset && r((e => ({
              ...e,
              scrollY: window.pageYOffset
            })))
          }), []), (0, s.useEffect)((() => {
            r({
              scrollDepths: e,
              scrollY: 0
            })
          }), [window.location.pathname]);
          const o = (0, s.useCallback)((() => {
            const e = document.documentElement,
              s = document.body,
              c = t?.scrollTop || e.scrollTop || s.scrollTop,
              l = t?.scrollHeight || e.scrollHeight || s.scrollHeight,
              {
                clientHeight: d
              } = e,
              m = c / (l - d) * 100;
            if (n) {
              const e = Math.min(...n, l);
              if (m >= e) {
                const s = n.filter((a => a !== e));
                0 === s.length && (t ?? window).removeEventListener("scroll", o), a && a({
                  scrollY: e,
                  scrollPercent: m,
                  remainingDepths: s
                }), r({
                  scrollY: e,
                  scrollDepths: s
                })
              }
            } else r({
              ...i,
              scrollY: m
            })
          }), [n, t, a]);
          (0, s.useEffect)((() => {
            if ("undefined" == typeof window) return;
            const e = t ?? window;
            return e.addEventListener("scroll", o), () => e.removeEventListener("scroll", o)
          }), [o])
        })(t, (e => {
          let {
            scrollY: a
          } = e;
          o({
            event: "page_scroll",
            scroll_depth: a
          }), "function" == typeof r && r(a)
        }), l), n
      }));
      r.displayName = "ScrollTracker";
      const n = r
    },
    36205: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => c
      });
      var s = t(62229),
        i = t(9623),
        r = t(95966);
      var n = t(91029);
      const c = (0, r.withTranslations)((e => {
        let {
          t: a
        } = e;
        const [t] = (0, s.useState)(""), c = (0, i.useNavigate)(), o = (0, r.useMutateState)();
        return (0, n.jsxs)("form", {
          action: "#",
          className: "rockstargames-sites-legacyc9f16d9c2f4a943ae8f1f900f31b5f4b",
          onSubmit: e => {
            e.preventDefault(), o({
              navOpen: !1
            }), document.activeElement?.blur?.();
            const a = e.currentTarget.elements.namedItem("q").value;
            c(`/search?q=${a}`)
          },
          role: "search",
          children: [(0, n.jsx)("button", {
            type: "submit",
            role: "button",
            title: "Submit"
          }), (0, n.jsx)("input", {
            autoComplete: "off",
            defaultValue: t,
            enterKeyHint: "search",
            name: "q",
            placeholder: a("Search Rockstar Games")
          })]
        })
      }))
    },
    84392: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => d
      });
      var s = t(62229),
        i = t(21515),
        r = t.n(i),
        n = t(95966);
      const c = {
        pillBtn: "rockstargames-sites-legacyc1ed14af6fceaba7c99728a81676dd92",
        selected: "rockstargames-sites-legacye49b5a5fd4ab934ece172fffe9f6577e",
        grid: "rockstargames-sites-legacybe627ae18a7bd3cff72d3f11aeed67df",
        itemList: "rockstargames-sites-legacyd9620ae764026da5584e0f0a5886c992",
        gtaplus: "rockstargames-sites-legacyfbf343ed03c1bd513ea4cadc9726af76",
        rdo: "rockstargames-sites-legacyb2194fe129aa210950dcb07b88a28c13",
        noImg: "rockstargames-sites-legacybbb7247d5d7a836d755491e85639f1a3",
        gtao: "rockstargames-sites-legacyffaf58c543b36fd7fb4efec24b3564bc",
        custom: "rockstargames-sites-legacycc2c26a3dd80cf9db62c4c7f389b7859",
        yellow: "rockstargames-sites-legacyce372826eac3cc73094d69c0c5d9a530",
        hotPink: "rockstargames-sites-legacyedb9998d6516a5aa1aece9c07c1768be",
        red: "rockstargames-sites-legacyf674d6037f10af1a1fe41a83c1e5da17",
        turquoise: "rockstargames-sites-legacye211b0b8ae00897d696af259b3ddd837",
        purple: "rockstargames-sites-legacye61db4af0805bb4c9bf820c26ac8a85f",
        teal: "rockstargames-sites-legacya379d41268f4f002d5ac257f67461f1d",
        blue: "rockstargames-sites-legacybffe0939bda9e26ad14f6b01669338a8",
        green: "rockstargames-sites-legacyf9c1eebf59650cd8ee84191d8fc62874",
        darkRed: "rockstargames-sites-legacyd44e2fc53f269ccf2b8fbe032ef6cec9",
        darkBlue: "rockstargames-sites-legacye2b6f722952b5d61d2a3b725166bfc9b",
        goldenrod: "rockstargames-sites-legacya365c5895cfd6c9f94fc994d71ba402c",
        skull: "rockstargames-sites-legacyb2a1c0b367b250fe0606dffece9e1c02"
      };
      var o = t(91029);
      const {
        sanitize: l
      } = r(), d = e => {
        let {
          list: a,
          string: t,
          starColor: i,
          style: r,
          className: d,
          game: m,
          noImg: g,
          columns: u,
          mobileColumns: f
        } = e;
        const [p, b] = (0, s.useState)(null);
        if ((0, s.useEffect)((() => {
            b(a)
          }), [a]), !t && !a) return null;
        const k = {
          color: r?.color
        };
        return delete r?.color, u && p ? (0, o.jsx)("div", {
          className: c.grid,
          style: {
            "--ordered-list-grid-column": u,
            "--ordered-list-grid-column-mobile": f ?? u
          },
          children: (0, o.jsx)("ol", {
            className: (0, n.classList)(c.itemList, c.noImg, c[i], c[m]),
            style: (0, n.safeStyles)(r),
            children: p.map((e => (0, o.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: l(e.content)
              },
              style: k
            }, e.content)))
          })
        }) : (0, o.jsx)("ol", {
          style: (0, n.safeStyles)(r),
          className: (0, n.classList)(c.itemList, c.custom, g ? c.noImg : "", i ? c[i] : "", m ? c[m] : "", d ?? ""),
          children: a.map((e => (0, o.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: l(e?.content ?? e)
            }
          }, e?.content)))
        })
      }
    },
    24069: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => d
      });
      var s = t(62229),
        i = t(21515),
        r = t.n(i),
        n = t(95966);
      const c = {
        pillBtn: "rockstargames-sites-legacyd45dcc8e4008f8620987ea3033e4373d",
        selected: "rockstargames-sites-legacyde1852cf9b8b4b71bcc67f8e66552c46",
        grid: "rockstargames-sites-legacyc157d94760f0476ea06aa04da4e86727",
        itemList: "rockstargames-sites-legacya1ccd04246730848111c4868ccba6294",
        gtaplus: "rockstargames-sites-legacyc5d92b0365dc60e6b93d321e9139e9f3",
        rdo: "rockstargames-sites-legacycc490e805fe55ab86a3ec5df2a5131e3",
        noImg: "rockstargames-sites-legacyb239e263450a84fffba43a94c194d606",
        gtao: "rockstargames-sites-legacyf4bc90102d24f73cb2d45d3821bfd32e",
        custom: "rockstargames-sites-legacyef5369875ddc5d9d7ad36eadc8afab2e",
        yellow: "rockstargames-sites-legacybdb57ca410954012dfd4711c67fc2a18",
        hotPink: "rockstargames-sites-legacyfa9be84c85fca4e66b2489e1e52a2e6a",
        red: "rockstargames-sites-legacyc446b758dbe82ad97444174f4d0b4abe",
        turquoise: "rockstargames-sites-legacyb03c0798d8655dd98518b2f0dc002f06",
        purple: "rockstargames-sites-legacyf14d63f28dd73c05cf950a08d8b8f501",
        teal: "rockstargames-sites-legacya0aaa124176430b6ad4f959cf136e7a3",
        blue: "rockstargames-sites-legacydf5c0d39e32be4e6977bb1d638ed2340",
        green: "rockstargames-sites-legacyea2d0d0e1e32d8e48d79a0ad80a4c8ac",
        darkRed: "rockstargames-sites-legacya6a078bd68ef39e719c21e5db6329642",
        darkBlue: "rockstargames-sites-legacyaa460ec14f75c93c2ba386a115ea407c",
        goldenrod: "rockstargames-sites-legacya55d762df7035a2394c9ffbfcbf1a0db",
        skull: "rockstargames-sites-legacya034e7482e8f28c66ec657f72bb93749"
      };
      var o = t(91029);
      const {
        sanitize: l
      } = r(), d = e => {
        let {
          list: a,
          string: t,
          starColor: i,
          style: r,
          className: d,
          game: m,
          noImg: g,
          columns: u,
          mobileColumns: f
        } = e;
        const [p, b] = (0, s.useState)(null), k = t ? t.split("_#_") : a;
        if ((0, s.useEffect)((() => {
            b(a)
          }), [a]), !t && !a) return null;
        const v = {
          color: r?.color
        };
        return delete r?.color, u && p ? (0, o.jsx)("div", {
          className: c.grid,
          style: {
            "--unordered-list-grid-column": u,
            "--unordered-list-grid-column-mobile": f ?? u
          },
          children: (0, o.jsx)("ul", {
            className: (0, n.classList)(c.itemList, c.noImg, c[i], c[m]),
            style: (0, n.safeStyles)(r),
            children: p.map(((e, a) => (0, o.jsx)("li", {
              style: v,
              dangerouslySetInnerHTML: {
                __html: l(e.content)
              }
            }, a)))
          })
        }) : (0, o.jsx)("ul", {
          style: (0, n.safeStyles)(r),
          className: (0, n.classList)(c.itemList, c.custom, g ? c.noImg : "", i ? c[i] : "", m ? c[m] : "", d ?? ""),
          children: k.map(((e, a) => (0, o.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: l(e?.content ?? e)
            }
          }, a)))
        })
      }
    },
    3025: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => c
      });
      var s = t(62229),
        i = t(74309),
        r = t(91029);
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
          return null !== this.state.error.code ? (0, r.jsx)(i.A, {
            error: this.state.error
          }) : this.props.children
        }
      }
      const c = function(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return function(t) {
          return (0, r.jsx)(n, {
            header: a,
            children: (0, r.jsx)(e, {
              ...t
            })
          })
        }
      }
    },
    74309: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => o
      });
      var s = t(62229),
        i = t(95966),
        r = t(12363),
        n = t(36205);
      var c = t(91029);
      const o = (0, i.withTranslations)((e => {
        let {
          error: a,
          t,
          domain: i = ""
        } = e;
        console.error({
          error: a
        });
        let o = a?.message ?? t("error-404-new");
        o = t("error-404-new");
        const l = a?.code ?? 398,
          d = (0, s.useRef)(null);
        return (0, s.useEffect)((() => {
          d && d?.current && d.current.focus()
        }), [d]), (0, c.jsxs)("div", {
          className: "rockstargames-sites-legacyd0635ab9b06be2bdd2967e49648afe4e",
          children: [(0, c.jsx)("h3", {
            tabIndex: -1,
            ref: d,
            children: `${o} (${l})`
          }), (0, c.jsx)(r.A, {
            to: "/",
            children: t("Home")
          }), "clr" !== i && (0, c.jsx)(n.A, {})]
        })
      }))
    },
    10413: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => lr
      });
      var s = {};
      t.r(s), t.d(s, {
        getVariant: () => U,
        transitions: () => H,
        variants: () => q
      });
      var i = {};
      t.r(i), t.d(i, {
        Animations: () => s,
        LiteMotion: () => V,
        withFadeIn: () => A,
        withFadeUp: () => R
      });
      var r = {};
      t.r(r), t.d(r, {
        Art: () => $i,
        Link: () => Ai
      });
      var n = {};
      t.r(n), t.d(n, {
        A: () => g.A,
        AlertDialog: () => Gs,
        AudioPlayer: () => Wt,
        Badge: () => pa,
        Brands: () => Kt.A,
        Button: () => pt,
        ButtonGroup: () => Jt,
        CalloutSection: () => _t,
        Carousel: () => ra,
        ConditionalBlock: () => ss,
        CookieAB: () => ls,
        CountryInputField: () => cs,
        Cta: () => mt,
        DescriptionArea: () => ta,
        DiscountsBadge: () => Ue,
        DotLoader: () => ms,
        Dropdown: () => fs,
        Embed: () => bs,
        ExpandingPlatformButton: () => _s,
        FadeInContent: () => js,
        Gen9Button: () => Zt,
        Gen9CoreCarousel: () => ws,
        Grid: () => gt,
        HTMLElement: () => Oe,
        Hero: () => zs,
        HookStore: () => es,
        ImageWithBadge: () => Ke,
        LayeredImage: () => Ds,
        Lightbox: () => $s,
        LoadingAnimation: () => Zi.A,
        MultiSourceImage: () => E,
        NewswireBlocks: () => ei,
        NewswireCard: () => Us,
        NewswireList: () => Ys,
        NewswireRelated: () => Zs,
        NewswireTag: () => Hs,
        OrderedList: () => ai.A,
        Paging: () => ii,
        ParallaxCacheBuster: () => ni,
        ParallaxInnerLayer: () => li,
        ParallaxOuterLayer: () => mi,
        ParallaxWrapper: () => oi,
        PromoModule: () => ui,
        Rating: () => h,
        ResponsiveFlexBox: () => pi,
        ResponsiveFlexItem: () => ki,
        ResponsiveGridBox: () => yi,
        ResponsiveGridItem: () => _i,
        ResponsiveImg: () => ji,
        ResponsiveSection: () => wi,
        RockstarLogo: () => Si,
        SafeHtml: () => Ti,
        ScrollSection: () => Ii,
        ScrollToTop: () => Li,
        ScrollTracker: () => fa.A,
        SearchBox: () => Pi.A,
        Separator: () => Je,
        SrcsetImage: () => ye,
        StorybookWrapper: () => Ei,
        TextFit: () => Re,
        ThumbsGallery: () => Bt,
        TinaModuleFetchNRender: () => $e,
        TinaWrapper: () => zi.A,
        TrackList: () => wt,
        UnorderedList: () => Xe.A,
        UserVote: () => Di,
        VideoCard: () => r,
        VideoCarousel: () => Oi,
        VideoList: () => Ki,
        VisuallyHidden: () => Qi,
        Wasted: () => Yi.A,
        framer: () => i,
        useTinaModuleFetchByIds: () => Me,
        withSearchbarErrorBoundary: () => Xi.A,
        withSimpleErrorBoundary: () => p
      });
      var c = t(62229),
        o = t(81788),
        l = t(95966),
        d = t(22738),
        m = t(2918),
        g = t(12363);
      var u = t(91029);
      class f extends c.Component {
        constructor(e) {
          super(e), this.state = {
            header: e.header ?? null,
            hidden: e.hidden ?? !1
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
          return this?.state?.error?.message && this?.state?.hidden ? null : this?.state?.error?.message ? (0, u.jsxs)("div", {
            className: "rockstargames-sites-legacyd5c408a8b618087ef4bb452f96526b2b",
            children: [(0, u.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, u.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      const p = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return function(s) {
            return (0, u.jsx)(f, {
              header: a,
              hidden: t,
              children: (0, u.jsx)(e, {
                ...s
              })
            })
          }
        },
        b = {
          rating: "rockstargames-sites-legacyc3e95c84902dd75b827d3c95532e22dc",
          withDescriptors: "rockstargames-sites-legacyb98963abfc7a63295bebc6c6d15b391a",
          withOutDescriptors: "rockstargames-sites-legacyb6339480b5fd086fb0c025930bfb7dcd",
          text: "rockstargames-sites-legacybabdd6ae2ff83f380dadc6982effa011"
        },
        k = (0, o.defineMessages)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      var v = t(95520),
        y = t(65555);
      (0, l.importAll)(t(36672));
      const h = p((0, y.g)((e => {
        let {
          descriptors: a = null,
          footer: s = null,
          href: i,
          img: r = null,
          titleSlug: n = null,
          style: f = {},
          className: p
        } = e;
        const [y, h] = (0, c.useState)(!1), {
          inView: _
        } = (0, d.useInView)({
          threshold: .6
        }), [x, j] = (0, c.useState)({
          ratingDescriptors: a,
          ratingFooter: s,
          ratingImg: r,
          ratingUrl: i
        }), {
          track: N
        } = (0, m.useGtmTrack)(), w = (0, o.useIntl)(), {
          data: S
        } = (0, l.useQuery)(v.GameData, {
          variables: {
            titleSlug: n
          },
          skip: !n
        });
        if ((0, c.useEffect)((() => {
            S && j(S?.game)
          }), [S]), (0, c.useEffect)((() => {
            _ && !y && x.img_rating && (N({
              event: "page_section_impression",
              element_placement: "rating"
            }), h(!0))
          }), [_]), !x.ratingImg) return null;
        const C = !!x.ratingDescriptors;
        return (0, u.jsxs)("div", {
          className: [b.rating, C ? b.withDescriptors : b.withOutDescriptors, p || ""].join(" "),
          style: (0, l.safeStyles)(f),
          children: [(0, u.jsx)(g.A, {
            to: x.ratingUrl,
            target: "_blank",
            children: (0, u.jsx)("img", {
              alt: w.formatMessage(k.components_ratings_link_alt, {
                rating: (T = x.ratingImg, T.replace(/_/g, " ").split(".")[0].toUpperCase())
              }),
              src: t(8194)(`./${x.ratingImg}`)
            })
          }), C && (0, u.jsxs)("div", {
            className: b.text,
            children: [(0, u.jsx)("p", {
              className: b.descriptors,
              dangerouslySetInnerHTML: {
                __html: x?.ratingDescriptors?.split(/<br\s?\/?>/).join(", ") || ""
              }
            }), x.ratingFooter && (0, u.jsx)("hr", {}), x.ratingFooter && (0, u.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: x.ratingFooter.replace(/ \//g, ", ")
              }
            })]
          })]
        });
        var T
      })));
      var _ = t(84590),
        x = t.n(_),
        j = t(87330);
      const N = (0, l.setContextItem)({
          context: (0, c.createContext)(void 0),
          key: "imageGallery"
        }),
        w = e => {
          let {
            children: a
          } = e;
          const [t, s] = (0, c.useState)([]), i = e => {
            s(e)
          }, r = (0, c.useMemo)((() => ({
            collections: t,
            updateGalleryCollections: i
          })), [t]);
          return (0, u.jsx)(N.Provider, {
            value: r,
            children: a
          })
        };
      var S = t(92440),
        C = t(31879),
        T = t.n(C),
        I = t(8458);
      const L = "rockstargames-sites-legacyc8dc03880ce2e12f3fdea5b5b587f27f",
        P = e => {
          let {
            alt: a,
            className: s,
            src: i,
            style: r
          } = e;
          const [n, c] = (0, l.usePreloadImg)(i);
          let o = i;
          !1 === n && ("rockstargames-sites-legacya6a06e2d5c4f1811ea39d17312ca2e67" === s && (o = t(28839)), o = t(9333));
          const {
            width: d,
            height: m
          } = c, g = {
            "--aspect-ratio": Number.isNaN(d / m) ? "" : d / m,
            ...r
          };
          return (0, u.jsx)("img", {
            src: o,
            className: s ?? "",
            alt: a,
            style: g
          })
        },
        E = e => {
          let {
            className: a,
            style: s = {},
            image: i = {},
            imageStyle: r = {}
          } = e, {
            alt: n,
            src: c
          } = (0, I.S1)(i);
          const {
            isMobile: o
          } = (0, l.useWindowResize)();
          c.desktop || c.mobile || (n = "", c = {
            mobile: t(28839),
            desktop: t(9333)
          });
          let d = i.frame ? `${i.frame} ${L}` : L;
          return (0, u.jsx)("div", {
            className: d,
            style: s,
            children: (0, u.jsx)(P, {
              style: {
                ...r,
                ...i?.style
              },
              src: o ? c.mobile || c.desktop : c?.desktop || c?.mobile,
              alt: n,
              className: a
            })
          })
        };
      var z = t(90660);
      const B = (0, c.forwardRef)(((e, a) => {
        const {
          children: t,
          tag: s = "div"
        } = e, i = z.m[s];
        return (0, u.jsx)(z.LazyMotion, {
          features: z.domAnimation,
          children: (0, u.jsx)(i, {
            ref: a,
            ...e,
            children: t
          })
        })
      }));
      B.displayName = "LiteMotion";
      const V = B,
        D = {
          visible: {
            opacity: 1
          },
          hidden: {
            opacity: 0
          }
        },
        M = {
          ease: "easeIn",
          duration: .4
        },
        $ = e => {
          let {
            children: a
          } = e;
          return (0, u.jsx)(z.motion.div, Object.assign({
            className: "rockstargames-sites-legacyf38982805188b64825a72d2c5fac938c",
            variants: D,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: M
          }, {
            children: a
          }))
        },
        A = e => a => (0, u.jsx)($, {
          children: (0, u.jsx)(e, Object.assign({}, a))
        }),
        F = {
          visible: {
            opacity: 1,
            y: 0
          },
          hidden: {
            opacity: 0,
            y: 40
          }
        },
        O = {
          ease: "easeIn",
          duration: .75
        },
        G = e => {
          let {
            children: a
          } = e;
          return (0, u.jsx)(z.motion.div, {
            className: "rockstargames-sites-legacyc1ad787ad6429786650325edac0ffe42",
            variants: F,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: O,
            children: a
          })
        },
        R = e => a => (0, u.jsx)(G, {
          children: (0, u.jsx)(e, {
            ...a
          })
        }),
        H = {
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
        q = {
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
        U = function() {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "collapsed";
          return q[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "imageMask"][e]
        },
        W = {
          pillBtn: "rockstargames-sites-legacyc2b2a000c57ab19cace8cb18ef25ed90",
          selected: "rockstargames-sites-legacya0bae35fdcc72e1af72b07cc494f20bf",
          container: "rockstargames-sites-legacyc2560c6b045ae73dbeeeef12570be8ba",
          flipped: "rockstargames-sites-legacyc5be20966c373ac52583632312d5a32e",
          singleColumn: "rockstargames-sites-legacyc5ba7a9fc78332b803f78e404685dea8",
          large: "rockstargames-sites-legacya9e947863ed858f3047127a45c80a8d3",
          imgVideo: "rockstargames-sites-legacycf1510a0614ebf32fdf98ca33ae6214f",
          content: "rockstargames-sites-legacyd4940f1b1576161b5eb78d28d88a5e1f",
          title: "rockstargames-sites-legacycf71441c9c65230a6a161085b73b97cb",
          headerLogo: "rockstargames-sites-legacycfde78e6f54601e7fbd20572c7dbcfb8",
          blurb: "rockstargames-sites-legacyab450ba2efac19aec7dc231239e316b1",
          text: "rockstargames-sites-legacyefc80457bc220013f1f5e28c4d68271c",
          footnote: "rockstargames-sites-legacyc4186c5734b0a77bd017894a762275de",
          rdrUltra: "rockstargames-sites-legacydacbe935b88136482bbc2da111638540",
          universalCyrillic: "rockstargames-sites-legacye7fcab0d0e3c2654185559b59883e8e8"
        },
        K = A((e => {
          let {
            title: a = "",
            headerLogo: t,
            body: s,
            footnote: i,
            image: r,
            videoId: n,
            customHeaderFont: o,
            setVideoAsDefault: g,
            large: f = !1,
            image_on_right: p = !1,
            style: b = {},
            className: k = "",
            ...v
          } = e;
          const {
            track: y
          } = (0, m.useGtmTrack)(), {
            ref: h,
            inView: _
          } = (0, d.useInView)({
            threshold: .6
          }), [x, j] = (0, c.useState)(!1), [N, w] = (0, c.useState)(!1), S = o ? W[o] : "", C = t?._memoq?.maxHeight || "auto", I = t?._memoq?.maxWidth || "auto";
          return (0, c.useEffect)((() => {
            w(t?.setLogoAsDefault || !1)
          }), []), (0, c.useEffect)((() => {
            _ && !x && (y({
              event: "page_section_impression",
              element_placement: v?._memoq?.title?.toLowerCase()
            }), j(!0))
          }), [_]), (0, u.jsxs)("div", {
            className: (0, l.classList)(W.container, f ? W.large : "", p ? W.flipped : "", r ? "" : W.singleColumn, k),
            style: b,
            ref: h,
            "data-testid": "imageVideoGroupContainer",
            children: [g && n ? (0, u.jsx)(T(), {
              className: W.imgVideo,
              autoplay: !1,
              id: n
            }) : r ? (r.alt = r?.alt ?? r?._memoq?.alt ?? "", (0, u.jsx)(E, {
              className: W.imgVideo,
              image: r
            })) : null, (0, u.jsx)("div", {
              className: W.content,
              children: (0, u.jsxs)("div", {
                className: W.text,
                children: [(() => {
                  const e = t?.image,
                    s = t?.image?.alt ?? t?.image?._memoq?.alt,
                    i = a.replace(/\s+/g, "-").toLowerCase();
                  return t && (t.image.alt = s), N && e ? (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsx)(E, {
                      className: W.headerLogo,
                      image: e,
                      imageStyle: {
                        maxHeight: C,
                        maxWidth: I,
                        margin: 0
                      }
                    }), (0, u.jsx)("h2", {
                      id: `${i}-section`,
                      style: {
                        display: "none"
                      },
                      children: a
                    })]
                  }) : a && (0, u.jsx)("h2", {
                    className: [W.title, S].join(" "),
                    children: a
                  })
                })(), s ? (0, u.jsxs)(u.Fragment, {
                  children: [(0, u.jsx)("div", {
                    className: W.blurb,
                    dangerouslySetInnerHTML: {
                      __html: (L = s, L ? L.split(/\r?\n/).filter((e => e.trim())).map((e => `<p>${e}</p>`)).join("") : "")
                    }
                  }), i && (0, u.jsx)("small", {
                    className: W.footnote,
                    dangerouslySetInnerHTML: {
                      __html: i
                    }
                  })]
                }) : ""]
              })
            })]
          });
          var L
        })),
        Q = {
          pillBtn: "rockstargames-sites-legacya81e3ad6cfbe33efbd18b786a09e71fd",
          selected: "rockstargames-sites-legacya3aefd91e661c1e6dc8bbff4fd17248f",
          featureBlock: "rockstargames-sites-legacyf89ddcf04ab19186bc3f7f66bf91fda5",
          featuresContainer: "rockstargames-sites-legacyf7529c017b3481439bcc4b72b758d930"
        },
        Y = e => {
          let {
            className: a,
            id: t,
            features: s,
            backgroundImageGroup: i
          } = e;
          const r = (0, S.useGetCdnSource)(i?.desktop?.image),
            n = (0, S.useGetCdnSource)(i?.topMask?.mask),
            c = (0, S.useGetCdnSource)(i?.bottomMask?.mask),
            o = !!c,
            l = {
              "--fb-bg-image": `url(${r})`,
              "--fb-top-mask": `url(${n})`,
              "--fb-bottom-mask": `url(${c})`
            };
          return s.length ? (0, u.jsx)("section", {
            style: l,
            className: [Q.featureBlock, a ?? ""].filter((e => e)).join(" "),
            id: t ?? "",
            "data-has-mask": o,
            children: (0, u.jsx)("div", {
              className: Q.featuresContainer,
              children: s.map((e => (0, u.jsx)(K, {
                ...e
              }, e?.key)))
            })
          }) : null
        };
      var X = t(9623);

      function Z(e) {
        return e ? {
          "--gradient-start-color": ee(J(e?.startColor), e?.startOpacity),
          "--gradient-end-color": ee(J(e?.endColor), e?.endOpacity)
        } : {}
      }

      function J(e) {
        return e && /rgb\(\d\d?\d?,\s?\d\d?\d?,\s?\d\d?\d?\)/.test(e) ? e.replace(/r|g|b|a|\(|\)|/g, "").split(/,\s?/) : []
      }

      function ee(e, a) {
        return e?.length ? `rgba(${e[0]}, ${e[1]}, ${e[2]}, ${a?.length?a:1})` : ""
      }

      function ae(e) {
        return e && e.replace(/\D/g, "") || "0"
      }
      const te = {
          pillBtn: "rockstargames-sites-legacyddc407185e425f0139d10689a4a7f2a4",
          selected: "rockstargames-sites-legacybd967bb2d2679a7fb51e1044fba5bb4e",
          button: "rockstargames-sites-legacyf39fa3b1b065c2d54b2567b48a1bd6e2",
          imageBackground: "rockstargames-sites-legacyc148e1365d5c651547931ef13f8628df",
          cardArtworkIcon: "rockstargames-sites-legacyd6a600e1e3076a3eb04defd26746e0de",
          cardDownloadIcon: "rockstargames-sites-legacyd684744e5cd28e0fec26d728ba122ca8",
          cardIcon: "rockstargames-sites-legacya4df7cd077698e962c24736e36a45ddf",
          cardPlayIcon: "rockstargames-sites-legacyfd96249683f88970f0ca7231a1174193",
          cardShopIcon: "rockstargames-sites-legacyfcc1990039d0a53b7820dca2077a5d3e",
          textContainer: "rockstargames-sites-legacyb4c8ad1b23c07afac25f31d46e2b3d24",
          heading: "rockstargames-sites-legacyfa2e0d743022e096961c5300754105b1"
        },
        se = e => {
          let {
            title: a,
            subtitle: t,
            cardType: s,
            textColor: i,
            link: r,
            images: n,
            justifyContentHorizontally: c,
            justifyContentVertically: o,
            gradient: l
          } = e;
          const {
            track: d
          } = (0, m.useGtmTrack)(), g = (0, S.useGetCdnSource)(n?.mobile?.image?.full_src ?? n?.mobile?.image), f = (0, S.useGetCdnSource)(n?.desktop?.image?.full_src ?? g), p = {
            "--aspect-ratio-mobile": n?.mobile?.aspectRatio ?? "",
            "--aspect-ratio-desktop": n?.desktop?.aspectRatio ?? "",
            justifyContent: c ?? ""
          }, b = {
            justifyContent: o ?? ""
          }, k = {
            color: i ?? "",
            fontWeight: 700
          }, v = {
            ...Z(l),
            "--gradient-end-percentage": `${ae(l?.endPercentage)}%`,
            "--gradient-angle": `${ae(l?.angle)}deg`
          }, y = {
            mobile: g,
            desktop: f,
            alt: a
          };
          return (0, u.jsxs)(X.NavLink, {
            to: r ?? "",
            className: te.button,
            style: {
              ...p,
              ...v
            },
            onClick: () => {
              d({
                event: "card_click",
                element_placement: a?.toLowerCase()
              })
            },
            children: [("audio" === s || "video" === s) && (0, u.jsx)("div", {
              className: te.cardIcon
            }), (e => {
              switch (e) {
                case "audio":
                  return (0, u.jsx)("div", {
                    role: "button",
                    className: te.cardPlayIcon,
                    tabIndex: 0,
                    "aria-label": "Play Audio"
                  });
                case "video":
                  return (0, u.jsx)("div", {
                    role: "button",
                    className: te.cardPlayIcon,
                    tabIndex: 0,
                    "aria-label": "Play Video"
                  });
                case "artwork":
                  return (0, u.jsx)("div", {
                    role: "button",
                    className: te.cardArtworkIcon,
                    tabIndex: 0,
                    "aria-label": "View Artwork"
                  });
                case "download":
                  return (0, u.jsx)("div", {
                    role: "button",
                    className: te.cardDownloadIcon,
                    tabIndex: 0,
                    "aria-label": "Download Content"
                  });
                case "shopping-cart":
                  return (0, u.jsx)("div", {
                    role: "button",
                    className: te.cardShopIcon,
                    tabIndex: 0,
                    "aria-label": "Shop"
                  });
                default:
                  return null
              }
            })(s), (0, u.jsx)(E, {
              className: te.imageBackground,
              image: y
            }), (0, u.jsxs)("div", {
              className: te.textContainer,
              style: b,
              children: [(0, u.jsx)("p", {
                className: te.text,
                style: k,
                children: (0, u.jsx)("span", {
                  children: t
                })
              }), (0, u.jsx)("h3", {
                className: te.heading,
                style: k,
                children: (0, u.jsx)("span", {
                  children: a
                })
              })]
            })]
          })
        },
        ie = {
          pillBtn: "rockstargames-sites-legacycda40abc6388540c6d56ec9033e94b61",
          selected: "rockstargames-sites-legacycded5ac956b3489cbb0ad417df09e1e0",
          relatedLinksContainer: "rockstargames-sites-legacyaea1edd882fdb86e7e58bb7cb1fee3b9",
          buttonContainer: "rockstargames-sites-legacyed6e24a327462775002b2ef7f4bd4118"
        },
        re = e => {
          let {
            title: a,
            id: t,
            buttons: s = [],
            className: i,
            ...r
          } = e;
          const {
            track: n
          } = (0, m.useGtmTrack)(), {
            ref: o,
            inView: l
          } = (0, d.useInView)({
            threshold: .6
          }), [g, f] = (0, c.useState)(!1);
          return (0, c.useEffect)((() => {
            l && !g && (n({
              event: "page_section_impression",
              element_placement: `related links group - ${r?._memoq?.title}`.toLowerCase()
            }), f(!0))
          }), [l]), s?.length ? (0, u.jsxs)("section", {
            className: [ie.relatedLinksContainer, i ?? ""].filter((e => e)).join(" "),
            id: t ?? "",
            ref: o,
            children: [(0, u.jsx)("h2", {
              children: a
            }), (0, u.jsx)("div", {
              className: ie.buttonContainer,
              children: s.map((e => (0, u.jsx)(se, {
                title: e?.title,
                subtitle: e?.subtitle,
                cardType: e?.cardType,
                textColor: e?.textColor,
                link: e?.link,
                images: e?.images,
                justifyContentHorizontally: e?.justifyContentHorizontally,
                justifyContentVertically: e?.justifyContentVertically,
                gradient: e?.gradient
              }, e.key)))
            })]
          }) : null
        };
      var ne, ce = t(82849),
        oe = t(80725),
        le = t(30030);

      function de() {
        return de = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = arguments[a];
            for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s])
          }
          return e
        }, de.apply(this, arguments)
      }
      const me = e => c.createElement("svg", de({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none"
      }, e), ne || (ne = c.createElement("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "m15 18-6-6 6-6"
      })));
      var ge;

      function ue() {
        return ue = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = arguments[a];
            for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s])
          }
          return e
        }, ue.apply(this, arguments)
      }
      const fe = e => c.createElement("svg", ue({
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          fill: "none"
        }, e), ge || (ge = c.createElement("path", {
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "m9 18 6-6-6-6"
        }))),
        pe = {
          pillBtn: "rockstargames-sites-legacye3cda31f111d353a778c88ed66f1c544",
          selected: "rockstargames-sites-legacyc4f1c72a3d7b674638e6de1586cbb3d0",
          tabControlContainer: "rockstargames-sites-legacyd29afdb37670407698a75f676bd09ac8",
          tabControl: "rockstargames-sites-legacyee2f948c8cdbaa179e237743a7fed85b",
          withScroll: "rockstargames-sites-legacye1e4eea5783d71759acd15ccabe9f479",
          pills: "rockstargames-sites-legacya2f784e987ffe758b0f578d5ec371a36",
          tabButton: "rockstargames-sites-legacyf94782e892ce25e196e32e7b99a9266d",
          tabIconWrapper: "rockstargames-sites-legacyc6b99457503c7d9222883634bcebc6b8",
          tabIcon: "rockstargames-sites-legacyc7a9346aef47e925c8207d4c29dd62cf",
          tabIconActive: "rockstargames-sites-legacyc1e80852d004d7874de4d4d292a8ac35",
          tabLabel: "rockstargames-sites-legacycb2ce3c45e864cc9dd006ade09d1c177",
          tabBackground: "rockstargames-sites-legacya090bf0d15f90245f6718deb2aa6dd16",
          tabLabelActive: "rockstargames-sites-legacya0585b1b5b2432645dbe7206096ea963",
          pillButton: "rockstargames-sites-legacycf1b66cb6098d0c193d07128ad96918d",
          nextPillButton: "rockstargames-sites-legacyfecde23bcee84bcc1471dd17cb489f26",
          previousPillButton: "rockstargames-sites-legacya0f3ef7b5df6c3bec46feadcb1222379",
          nextPillIcon: "rockstargames-sites-legacyc17181cca295443a8eb5c7a6a779138d",
          previousPillIcon: "rockstargames-sites-legacye44f1ced35c7806fa8592b93edf3cd14"
        },
        be = e => {
          let {
            data: a,
            onClick: t,
            activeTab: s
          } = e;
          const {
            track: i
          } = (0, m.useGtmTrack)(), r = (0, c.useRef)(null), [n, o] = (0, c.useState)(!1), [l, d] = (0, c.useState)(!1), [g, f] = (0, c.useState)(!1), p = e => () => {
            i({
              event: "component_tab_click",
              text: a[e]?._memoq?.name?.toLowerCase() ?? void 0,
              element_placement: "image gallery"
            }), r.current && r.current.slideTo(e), t && t(e)
          }, b = e => {
            o(e.isEnd), d(e.isBeginning)
          };
          return (0, c.useEffect)((() => {
            const e = () => {
              r.current && ((r.current.wrapperEl.clientWidth || 0) > (r.current.el.clientWidth || 0) ? (f(!0), r.current.params.centeredSlides = !0, r.current.params.centeredSlidesBounds = !0) : (f(!1), r.current.params.centeredSlides = !1, r.current.params.centeredSlidesBounds = !1), b(r.current))
            };
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), []), (0, u.jsxs)("div", {
            className: pe.tabControlContainer,
            children: [!l && g && (0, u.jsx)("div", {
              className: pe.previousPillButton,
              children: (0, u.jsx)("button", {
                type: "button",
                className: [pe.previousPillIcon, pe.pillButton].join(" "),
                onClick: () => {
                  r.current && (r.current?.slidePrev(), d(r.current.isBeginning), i({
                    event: "carousel_previous",
                    element_placement: "image gallery"
                  }))
                },
                children: (0, u.jsx)(me, {})
              })
            }), (0, u.jsx)("div", {
              className: [pe.tabControl, g ? pe.withScroll : ""].join(" "),
              children: (0, u.jsx)(oe.RC, {
                onBeforeInit: e => r.current = e,
                onInit: b,
                direction: "horizontal",
                grabCursor: !0,
                slidesPerView: "auto",
                onSlideChange: b,
                onResize: b,
                className: pe.pills,
                children: a?.filter((e => {
                  let {
                    isHidden: a
                  } = e;
                  return 1 !== a
                }))?.map(((e, a) => (0, u.jsx)(oe.qr, {
                  children: (0, u.jsxs)(ce.motion.button, {
                    type: "button",
                    className: [pe.tabButton, g ? pe.withScroll : ""].join(" "),
                    onClick: p(a),
                    "aria-label": e?.name,
                    "data-testid": "pill-button",
                    children: [e?.platform ? (0, u.jsx)("span", {
                      className: pe.tabIconWrapper,
                      children: (0, u.jsx)("img", {
                        className: [pe.tabIcon, a === s ? pe.tabIconActive : ""].join(" "),
                        src: (0, le.A)(e?.platform?.toLowerCase()) || "",
                        alt: e?.platform
                      })
                    }) : (0, u.jsx)("span", {
                      className: [pe.tabLabel, a === s ? pe.tabLabelActive : ""].join(" "),
                      children: e?.name?.toUpperCase()
                    }), a === s ? (0, u.jsx)(ce.motion.div, {
                      className: pe.tabBackground,
                      layoutId: "tabBackground"
                    }) : null]
                  }, `pill-tab-${e?.name}-${e?.key}`)
                }, `pill-tab-${e?.name}-${e?.key}`)))
              })
            }), !n && g && (0, u.jsx)("div", {
              className: pe.nextPillButton,
              children: (0, u.jsx)("button", {
                type: "button",
                className: [pe.nextPillIcon, pe.pillButton].join(" "),
                onClick: () => {
                  r.current && (r.current?.slideNext(), o(r.current.isEnd), i({
                    event: "carousel_next",
                    element_placement: "image gallery"
                  }))
                },
                children: (0, u.jsx)(fe, {})
              })
            })]
          })
        };
      var ke = t(44853);
      const ve = {
          pillBtn: "rockstargames-sites-legacyc79dd3a7e7c5c11adfd19c623716576f",
          selected: "rockstargames-sites-legacyc53675ad15e2ef662362850daab33791",
          multiSourceContainer: "rockstargames-sites-legacya99f18f8581cc9aeafa5111379885ee6",
          multiSourceImage: "rockstargames-sites-legacybc42c525ec0bd93df46e1999e278e9fb",
          animatePlaceholder: "rockstargames-sites-legacyf6f51dbe7c2f79f974e9573386bba9da",
          "loader-keyframes": "rockstargames-sites-legacyc3684b80c99c860036d9337843a7be58"
        },
        ye = e => {
          let {
            imageUrl: a,
            className: t,
            alt: s,
            style: i,
            lazy: r = !1,
            decoding: n = "auto",
            sizes: o = [320, 480, 768, 1024, 1440, 1920, 2560]
          } = e;
          const [l, d] = (0, c.useState)(!1);
          return (0, u.jsxs)("div", {
            className: ve.multiSourceContainer,
            children: [!l && (0, u.jsx)("img", {
              className: [t, ve.animatePlaceholder].join(" "),
              src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjMzMzMzMzIi8+Cjwvc3ZnPgo=",
              sizes: "(max-width: 1024px) 100vw, 1024px",
              alt: "Loading...",
              style: i
            }), (0, u.jsx)("img", {
              className: [ve.multiSourceImage, t].join(" "),
              src: `${a}?im=Resize=1920`,
              srcSet: (m = a, o.map((e => `${m}?im=Resize=${e} ${e}w`)).join(", ")),
              sizes: "(max-width: 400px) 200px, (max-width: 1920px) 100vw, 1920px",
              alt: s ?? "Multi-Source Image",
              style: i,
              onLoad: () => {
                d(!0)
              },
              loading: r ? "lazy" : "eager",
              decoding: n
            })]
          });
          var m
        };
      var he = t(2765),
        _e = t.n(he);
      const xe = {
          pillBtn: "rockstargames-sites-legacye25ca7cdd8392458e825f214ab689988",
          selected: "rockstargames-sites-legacyf18da5c3982ac6dd52f034c76b4c18fc",
          overlay: "rockstargames-sites-legacyfd8515db7e49499bd602844e7b726ccf",
          masonryDialog: "rockstargames-sites-legacya1ae3e7de41be7198c2ad68c8d4222f0",
          masonryDialogWrapper: "rockstargames-sites-legacya3094271b8486273139e380499406927",
          modalSection: "rockstargames-sites-legacyf478d357c8b6b75ca8b5b48286d1e12a",
          modalContainer: "rockstargames-sites-legacyc41f4294c7fde242d7cf078564d2e69a",
          modal: "rockstargames-sites-legacya8fbf62ce23c1a65032bce5184d63baf",
          modalMultisourceImage: "rockstargames-sites-legacyf3e623b328218262f00707bcf285804a",
          galleryImage: "rockstargames-sites-legacye60d2674013c95e6bc812e00e7258e24",
          modalItem: "rockstargames-sites-legacya240109bff7b1baa2d388d154ed1934c",
          controlsWrapper: "rockstargames-sites-legacyee763bff685c3b26102c7657cfd1bfaf",
          modalControls: "rockstargames-sites-legacydd94cbb5e29c5998406db96640b0ab76",
          modalNext: "rockstargames-sites-legacye3a70831b760b5fcb0b9343c62f210d3",
          modalPrevious: "rockstargames-sites-legacyf52bccecbb1a53b1c956a6e8f254dee0",
          closeBtn: "rockstargames-sites-legacyafe327a6bfea9e55c59f7f40787276bb"
        },
        je = e => {
          let {
            navigatePrevious: a,
            navigateNext: t,
            prevDisabled: s,
            nextDisabled: i
          } = e;
          return (0, u.jsxs)("div", {
            className: xe.modalControls,
            children: [(0, u.jsx)("button", {
              type: "button",
              "aria-label": "Previous",
              className: xe.modalPrevious,
              onClick: a,
              disabled: s
            }), (0, u.jsx)("button", {
              type: "button",
              "aria-label": "Next",
              className: xe.modalNext,
              onClick: t,
              disabled: i
            })]
          })
        },
        Ne = e => {
          let {
            images: a,
            selectedImage: t,
            onClose: s
          } = e;
          const [i, r] = (0, c.useState)(a.findIndex((e => e?.image?.sources === t?.image?.sources))), [n, o] = (0, c.useState)(0 === i), [l, d] = (0, c.useState)(i + 1 >= a?.length), {
            track: g
          } = (0, m.useGtmTrack)(), f = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, p = (0, c.useCallback)((() => {
            const e = (i + 1) % a.length;
            e !== i && i !== a.length - 1 && (r(e), o(!1)), d(e === a.length - 1), g({
              event: "modal_next",
              element_placement: "image gallery modal",
              card_name: `${a[i]?.image?.name??"unnamed image"}`.toLowerCase(),
              card_id: a[i]?.key,
              position: i,
              view_name: `${a[i]?.image?.name??"unnamed image"}`.toLowerCase()
            })
          }), [i, a.length]), b = (0, c.useCallback)((() => {
            const e = (i - 1 + a.length) % a.length;
            e !== i && 0 !== i && (r(e), d(!1)), o(0 === e), g({
              event: "modal_previous",
              element_placement: "image gallery modal",
              card_name: `${a[i]?.image?.name??"unnamed image"}`.toLowerCase(),
              card_id: a[i]?.key,
              position: i,
              view_name: `${a[i]?.image?.name??"unnamed image"}`.toLowerCase()
            })
          }), [i, a.length]), k = a[i];
          return (0, c.useEffect)((() => {
            g({
              event: "trackPageview",
              view_name: `${a[i]?.image?.name??"unnamed image"}`.toLowerCase()
            })
          }), [i]), (0, c.useEffect)((() => {
            const e = e => {
              "ArrowLeft" === e.key ? b() : "ArrowRight" === e.key ? p() : "Escape" === e.key && (g({
                event: "modal_close",
                element_placement: "image gallery modal",
                card_name: `${a[i]?.image?.name??"unnamed image"}`.toLowerCase(),
                card_id: a[i]?.key,
                position: i,
                view_name: `${a[i]?.image?.name??"unnamed image"}`.toLowerCase()
              }), s())
            };
            return window.addEventListener("keydown", e), () => {
              window.removeEventListener("keydown", e)
            }
          }), [i, b, p, s]), (0, u.jsx)(ce.AnimatePresence, {
            children: (0, u.jsx)(ce.motion.div, {
              role: "presentation",
              className: xe.overlay,
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: f,
              children: (0, u.jsx)("dialog", {
                role: "presentation",
                id: "masonryDialog",
                className: xe.masonryDialog,
                onClick: e => (e => {
                  if (!e.currentTarget) return;
                  const t = e.currentTarget.getBoundingClientRect();
                  (t.left > e.clientX || t.right < e.clientX || t.top > e.clientY || t.bottom < e.clientY) && (g({
                    event: "modal_close",
                    element_placement: "image gallery modal",
                    card_name: `${a[i]?.image?.name??"unnamed image"}`.toLowerCase(),
                    card_id: a[i]?.key,
                    position: i,
                    view_name: `${a[i]?.image?.name??"unnamed image"}`.toLowerCase()
                  }), s()), e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
                })(e),
                children: (0, u.jsx)(_e(), {
                  active: !0,
                  focusTrapOptions: {
                    allowOutsideClick: !0
                  },
                  children: (0, u.jsxs)("div", {
                    className: xe.masonryDialogWrapper,
                    children: [(0, u.jsxs)(ce.motion.div, {
                      className: xe.controlsWrapper,
                      initial: {
                        opacity: 0
                      },
                      animate: {
                        opacity: 1
                      },
                      transition: {
                        ease: "easeIn",
                        duration: .3,
                        delay: .5
                      },
                      "aria-controls": "legacyImageGallery-liveRegion",
                      children: [(0, u.jsx)(je, {
                        navigatePrevious: b,
                        navigateNext: p,
                        prevDisabled: n,
                        nextDisabled: l
                      }), (0, u.jsx)("button", {
                        type: "button",
                        id: "close",
                        "aria-label": "close",
                        className: xe.closeBtn,
                        onClick: () => {
                          g({
                            event: "modal_close",
                            element_placement: "image gallery modal",
                            card_name: `${a[i]?.image?.name??"unnamed image"}`.toLowerCase(),
                            card_id: a[i]?.key,
                            position: i,
                            view_name: `${a[i]?.image?.name??"unnamed image"}`.toLowerCase()
                          }), s()
                        }
                      })]
                    }), (0, u.jsx)(ce.motion.div, {
                      className: xe.modal,
                      initial: {
                        opacity: 0,
                        scale: .5
                      },
                      animate: {
                        opacity: 1,
                        scale: 1
                      },
                      transition: f,
                      id: "legacyImageGallery-liveRegion",
                      "aria-live": "polite",
                      role: "region",
                      children: (0, u.jsx)(E, {
                        className: [xe.modalMultisourceImage, xe.galleryImage].join(" "),
                        style: {
                          width: "100%",
                          height: "100%",
                          margin: 0
                        },
                        image: {
                          alt: k?.image?._memoq?.alt || "",
                          ...k?.image
                        }
                      })
                    })]
                  })
                })
              })
            })
          })
        },
        we = e => {
          let {
            image: a,
            item: t,
            handleImageClick: s
          } = e;
          const i = (0, S.useImageParser)(a?.image),
            r = a?.image.alt ?? a?.image._memoq?.alt;
          return (0, u.jsx)(ce.motion.button, {
            className: "rockstargames-sites-legacyb7d22978314d8fd37226d991a0323771",
            onClick: () => s(a),
            variants: t,
            children: (0, u.jsx)(ye, {
              imageUrl: i?.src?.desktop,
              className: "rockstargames-sites-legacyee0f0e1390a1b77a0f1b3629dc9d700a",
              alt: r,
              sizes: [320, 480, 768, 1024, 1440],
              style: {
                width: "100%",
                height: "auto"
              }
            })
          }, `grid-item-${a?.key}`)
        },
        Se = e => {
          let {
            images: a = [],
            gallery: t = []
          } = e;
          const [s, i] = (0, c.useState)(null), {
            track: r
          } = (0, m.useGtmTrack)(), n = t.flat(2), {
            setBodyIsLocked: o
          } = (0, l.useBodyScrollable)("LegacyScreensModule"), d = e => {
            r({
              event: "card_click",
              element_placement: e?.image?.name ? e?.image?.name.toLowerCase() : void 0
            }), i(e), o(!0)
          }, g = {
            hidden: {
              opacity: 0
            },
            show: {
              opacity: 1
            }
          };
          return (0, u.jsx)("div", {
            className: "rockstargames-sites-legacye44f82d5b88e4f740c7ce9abff68ce32",
            children: (0, u.jsxs)(ce.motion.div, {
              id: "rockstargames-sites-legacya0e51de80aa05abedb46d92d84d5aee3",
              className: "rockstargames-sites-legacye33a756146e1a476184e83e6cd65d218",
              variants: {
                hidden: {
                  opacity: 0
                },
                show: {
                  opacity: 1,
                  transition: {
                    duration: .75
                  }
                }
              },
              initial: "hidden",
              animate: "show",
              children: [a?.map((e => (0, u.jsx)(we, {
                image: e,
                item: g,
                handleImageClick: d
              }, e?.key))), s && (0, ke.createPortal)((0, u.jsx)(Ne, {
                images: n,
                selectedImage: s,
                onClose: () => {
                  i(null), o(!1)
                }
              }), document.body)]
            }, `gridItemContainer_${a?.key}`)
          })
        },
        Ce = e => {
          let {
            image: a,
            item: t,
            handleImageClick: s
          } = e;
          const i = (0, S.useImageParser)(a?.image),
            r = a?.image.alt ?? a?.image._memoq?.alt;
          return (0, u.jsx)(ce.motion.button, {
            className: "rockstargames-sites-legacye3831406d3ed43e91ffdc761abd48baf",
            onClick: () => s(a),
            variants: t,
            initial: "hidden",
            animate: "show",
            children: (0, u.jsx)(ye, {
              imageUrl: i?.src?.desktop,
              className: "rockstargames-sites-legacyb63c76769804a6445d5c61da08906d1d",
              alt: r,
              sizes: [320, 480, 768, 1024, 1440]
            })
          }, `single-item-${a.key}`)
        },
        Te = e => {
          let {
            images: a = [],
            gallery: t = []
          } = e;
          const [s, i] = (0, c.useState)(null), {
            track: r
          } = (0, m.useGtmTrack)(), n = t.flat(2), {
            setBodyIsLocked: o
          } = (0, l.useBodyScrollable)("LegacyScreensModule"), d = e => {
            r({
              event: "card_click",
              card_name: s?.image?.name.toLowerCase() ? s?.image?.name.toLowerCase() : void 0,
              card_id: e.key,
              link_url: void 0,
              element_placement: "image gallery"
            }), i(e), o(!0)
          }, g = {
            hidden: {
              opacity: 0
            },
            show: {
              opacity: 1,
              transition: {
                duration: .75
              }
            }
          };
          return (0, u.jsxs)("div", {
            className: "rockstargames-sites-legacyfd374db27ae0eab70581821b83cbfaee",
            children: [a?.map((e => (0, u.jsx)(Ce, {
              image: e,
              item: g,
              handleImageClick: d
            }, e?.key))), s && (0, ke.createPortal)((0, u.jsx)(Ne, {
              images: n,
              selectedImage: s,
              onClose: () => {
                i(null), o(!1)
              }
            }), document.body)]
          })
        },
        Ie = "rockstargames-sites-legacyd0b8474d6f8f230f681db9fd3b2c723e",
        Le = e => {
          let {
            sectionsPerPage: a,
            totalSections: t,
            currentPage: s,
            previousPage: i,
            nextPage: r,
            paginationPosition: n
          } = e;
          const c = [],
            o = Math.ceil(t / a),
            l = {
              "--pagination-position": `${n}`
            };
          for (let e = 1; e <= Math.ceil(t / a); e++) c.push(e);
          return o > 1 && (0, u.jsx)("div", {
            className: "rockstargames-sites-legacyc82112cdf0749d6ddbca1e8af8933ba5",
            style: l,
            children: (0, u.jsxs)("div", {
              className: "rockstargames-sites-legacycc27e700cde982e01f186d64a5b69ce0",
              style: {
                padding: 0
              },
              children: [(0, u.jsx)("div", {
                className: Ie,
                children: (0, u.jsx)("div", {
                  role: "button",
                  onClick: i,
                  className: "rockstargames-sites-legacyfe520f32a0a3fb0a4a7199f7353a3dc7",
                  "aria-label": "Previous Page",
                  "aria-hidden": "true",
                  tabIndex: 0
                })
              }), (0, u.jsxs)("div", {
                className: "rockstargames-sites-legacydac90e667536b6e75d83f19985d38c02",
                children: [(0, u.jsx)("span", {
                  children: s
                }), (0, u.jsx)("span", {
                  className: "rockstargames-sites-legacyeedf8db50f0cec80ea4adc7215579bbc"
                }), (0, u.jsx)("span", {
                  children: o
                })]
              }), (0, u.jsx)("div", {
                className: Ie,
                children: (0, u.jsx)("div", {
                  role: "button",
                  onClick: r,
                  className: "rockstargames-sites-legacyf855de663e5b3990846c34b41b6314b5",
                  "aria-label": "Next Page",
                  "aria-hidden": "true",
                  tabIndex: 0
                })
              })]
            })
          })
        },
        Pe = {
          pillBtn: "rockstargames-sites-legacye2bf9ba86281f6148e2f9af8ea2b88a5",
          selected: "rockstargames-sites-legacybccc0cb9fc037e7151fd6ebd3f490f4e",
          tabControl: "rockstargames-sites-legacyc8b979b8dc1ff190926fc1450d4f7812",
          galleryWrapper: "rockstargames-sites-legacyb3a45082739d104c5a97b65997334b5d",
          gridItemWrapper: "rockstargames-sites-legacyd5d1166080466c13c398548f61a1dfac",
          noImagesContainer: "rockstargames-sites-legacyc8f32e7cc9d0f30be6ecff9b076cca9a",
          noImages: "rockstargames-sites-legacyc770869dc00e35d56a8e50efe3abd4aa",
          unsupportedSection: "rockstargames-sites-legacyf425b5f74300c8aa17539840bfe17b0f",
          heading: "rockstargames-sites-legacyb5491476c815e5726e194b60dc8c95eb"
        },
        Ee = () => (0, u.jsx)("div", {
          className: Pe.noImagesContainer,
          children: (0, u.jsx)("div", {
            className: Pe.noImages,
            children: (0, u.jsx)("div", {
              className: Pe.heading,
              children: (0, u.jsxs)("span", {
                className: Pe.text,
                children: [(0, u.jsx)("h3", {
                  children: "Unsupported Section Type"
                }), (0, u.jsx)("p", {
                  children: "This section type is not supported."
                })]
              })
            })
          })
        }),
        ze = e => {
          let {
            sections: a = [],
            paginationSettings: t
          } = e;
          const s = [],
            [i] = (0, c.useState)(t?.sectionsPerPage || 4),
            [r, n] = (0, c.useState)(1),
            o = r * i,
            l = o - i,
            d = a.slice(l, o);
          return 0 === a?.length ? (0, u.jsx)("div", {
            className: Pe.gallerWrapper,
            children: (0, u.jsx)("div", {
              className: Pe.noImages,
              children: (0, u.jsx)("div", {
                className: Pe.heading,
                children: (0, u.jsx)("span", {
                  className: Pe.text,
                  children: "No images available"
                })
              })
            })
          }) : (a?.map((e => s.push(e?.images))), (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)(ce.motion.div, {
              className: Pe.galleryWrapper,
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: {
                ease: "easeIn",
                duration: .5
              },
              style: {
                "--sections-per-page": i
              },
              children: d?.map(((e, a) => {
                let t;
                if ("1x1" === e?.type) t = Se;
                else {
                  if ("2x2" !== e?.type) return (0, u.jsx)(Ee, {}, `unsupported-section-${a}`);
                  t = Te
                }
                return (0, u.jsx)(t, {
                  images: e?.images,
                  gallery: s
                }, `grid-section-${e?.type}-${a})}`)
              }))
            }), t?.paginationEnabled && (0, u.jsx)(Le, {
              sectionsPerPage: i,
              totalSections: a.length,
              currentPage: r,
              previousPage: () => {
                n(1 !== r ? r - 1 : Math.ceil(a.length / i))
              },
              nextPage: () => {
                r !== Math.ceil(a.length / i) ? n(r + 1) : n(1)
              },
              paginationPosition: t?.paginationPosition || "center"
            })]
          }))
        },
        Be = {
          pillBtn: "rockstargames-sites-legacyfa4067f7c212b9182e66f2bc93c65cfd",
          selected: "rockstargames-sites-legacycba40dadb6c47b405d64798809682d81",
          sectionWrapper: "rockstargames-sites-legacyd12e654d94bea17fc29f0b0bd5c8fe71",
          sectionContent: "rockstargames-sites-legacyf4bfa37ad49decc3c7198d5a7e2572e9",
          actionBar: "rockstargames-sites-legacyc683d51d8e7b2e1fea91f6ac62e44f18",
          heading: "rockstargames-sites-legacyc66aef69aceb354b7b240000f5791d16",
          tabControl: "rockstargames-sites-legacyab100837ebbe0709a8d81fc9b0d61ff9",
          tabButton: "rockstargames-sites-legacye4eeeda9b426784c1091e4caa7a5f3e2",
          activeTabButton: "rockstargames-sites-legacydef94dba3dac9a256bbbff14fc6dcaba",
          tabLabel: "rockstargames-sites-legacya5ba429588b87c0b99c160c6c7fcc3a0",
          tabBackground: "rockstargames-sites-legacydca40305530289c575e9c4749fde11e0",
          rdrUltra: "rockstargames-sites-legacydc3d525a4168030c7699333ec998ac0b",
          universalCyrillic: "rockstargames-sites-legacyfedf88ffb43e3f74d211214ca8fa4f80",
          helveticaNow: "rockstargames-sites-legacyeeac47e8240894c3a79ec83059a78d75"
        },
        Ve = A((e => {
          let {
            imageGallery: a
          } = e;
          const {
            track: t
          } = (0, m.useGtmTrack)(), {
            ref: s,
            inView: i
          } = (0, d.useInView)({
            threshold: .6
          }), [r, n] = (0, c.useState)(!1), [o, l] = (0, c.useState)(0), g = a?.customHeaderFont ? Be[a?.customHeaderFont] : "", {
            collections: f,
            updateGalleryCollections: p
          } = (() => {
            const e = (0, c.useContext)(N);
            if (!e) throw new Error("useImageGalleryContext must be used within an ImageGalleryProvider");
            return e
          })();
          (0, c.useEffect)((() => {
            p(a?.collections)
          }), [a]), (0, c.useEffect)((() => {
            i && !r && (t({
              event: "page_section_impression",
              element_placement: `image gallery - ${f[o]?._memoq?.name}`.toLowerCase()
            }), n(!0))
          }), [i]);
          const b = f?.length > 0 && f.some((e => e?.name || e?.platform));
          return (0, u.jsx)("section", {
            className: Be.sectionWrapper,
            ref: s,
            children: (0, u.jsxs)("div", {
              className: Be.sectionContent,
              children: [(0, u.jsxs)("div", {
                className: Be.actionBar,
                children: [(0, u.jsx)("h2", {
                  className: [Be.heading, g].join(" "),
                  children: a?.title
                }), b && (0, u.jsx)(be, {
                  data: f,
                  onClick: e => {
                    l(e)
                  },
                  activeTab: o
                })]
              }), f[o]?.sections && (0, u.jsx)(ze, {
                sections: f[o]?.sections,
                paginationSettings: a?.paginationSettings
              }, f[o]?.name)]
            })
          })
        }));
      var De = t(84343);
      const Me = e => {
          let {
            id: a = null,
            ids: t = null,
            setTitleDataPath: s = null,
            sync: i = !1
          } = e;
          const r = t ?? [a],
            {
              data: n
            } = (0, l.useQuery)(De.TinaModulesInfo, {
              variables: {
                ids: r,
                sync: i
              },
              setTitleDataPath: s,
              skip: !r.length
            });
          return n?.tinaModulesInfo ?? null
        },
        $e = p((e => {
          let {
            components: a = {},
            id: t = null,
            ids: s = null
          } = e;
          const i = Me({
              id: t,
              ids: s
            }),
            r = i?.[0]?.tina;
          return r ? (0, u.jsx)(u.Fragment, {
            children: i.map(((e, t) => {
              let {
                tina: s
              } = e;
              return (0, u.jsx)(S.TinaParser, {
                components: a,
                tina: s,
                componentProps: {
                  tinaModulesInfo: i
                }
              }, t)
            }))
          }) : null
        }), {
          header: null
        });
      var Ae = t(14282),
        Fe = t.n(Ae);
      const Oe = e => {
        let {
          attributes: a = {},
          children: t,
          className: s = "",
          id: i = "",
          style: r = {}
        } = e;
        return (0, u.jsx)("span", {
          className: (0, l.classList)(s, a?.className, "rockstargames-sites-legacyc650a7a1e761d6a9f2d6ce1cd8d6f330"),
          id: i,
          style: (0, l.safeStyles)(r ?? a?.style ?? {}),
          dangerouslySetInnerHTML: {
            __html: Fe().unescape(t)
          }
        })
      };
      var Ge = t(16762);
      const Re = e => {
          let {
            children: a,
            ...t
          } = e;
          const [s, i] = (0, c.useState)(!1);
          return (0, u.jsx)(Ge.zb, {
            ...t,
            onReady: () => {
              document.fonts.ready.then((() => {
                i(!0)
              }))
            },
            children: a
          })
        },
        He = {
          badge: "rockstargames-sites-legacyb7268b0e907630904b6689af83fee8e3",
          badgeSizeUpdate: "rockstargames-sites-legacyce8632d7464b556158a1d549f653498c",
          badge2: "rockstargames-sites-legacyd08ce7145bc9562355a3984f8ccc9313",
          badge3: "rockstargames-sites-legacyc7c60cfb12b6e9be68893c60814b3ed7"
        },
        qe = e => {
          let {
            wrapper: a,
            children: t,
            role: s,
            splitter: i
          } = e;
          return i || s ? a(t) : t
        },
        Ue = e => {
          let {
            badge: a,
            badgeType: s,
            role: i,
            splitter: r
          } = e;
          const n = [];
          return r ? a.split(r).map(((e, a) => n.push(e))) : n.push(a), (0, u.jsxs)(qe, {
            splitter: r,
            role: i,
            wrapper: e => (0, u.jsx)("div", {
              className: `${He.badge} ${s?He[s]:""} `,
              children: e
            }),
            children: [(0, u.jsx)(u.Fragment, {
              children: i && (0, u.jsx)(E, {
                image: {
                  alt: i,
                  desktop: t(65287)(`./${i}.png`)
                }
              })
            }), (0, u.jsx)(Re, {
              className: `${r||i?"":He.badge} ${s?He[s]:""}`,
              min: 8,
              max: 1e3,
              mode: r || i ? "single" : "multi",
              children: n[0]
            }), (0, u.jsx)(u.Fragment, {
              children: n.shift() && r && n.length >= 1 && (0, u.jsx)(Re, {
                min: 8,
                max: 1e3,
                mode: "single",
                forceSingleModeWidth: !0,
                children: n.join(" ")
              })
            })]
          }, "badge-wrapper")
        },
        We = e => {
          let {
            hero: a,
            children: t
          } = e;
          return a ? (0, u.jsx)("div", {
            className: "rockstargames-sites-legacya429886d721550d02521f7f5c9de7f5b",
            children: t
          }) : t
        },
        Ke = e => {
          let {
            badge: a = null,
            badgeType: t,
            discountTxt: s,
            splitter: i,
            image: r,
            style: n,
            className: o = "",
            attributes: d = {},
            role: m,
            hero: g = !1
          } = e;
          const f = (0, c.useMemo)((() => {
            if (r?.badge || r?.discountTxt || a || s) return (0, u.jsx)(Ue, {
              badge: r?.discountTxt ?? r?.badge ?? a ?? s,
              badgeType: t,
              splitter: r?.splitter ?? i,
              role: r?.role ?? m
            })
          }), [a, t, s, r, m, i]);
          return (0, u.jsx)(We, {
            hero: g,
            children: (0, u.jsx)("figure", {
              children: (0, u.jsxs)("div", {
                className: (0, l.classList)("rockstargames-sites-legacyd9ac792281efe15bcd4589b028d1c27b", g ? "rockstargames-sites-legacye430c4662cd185f58259d4a8d8b322de" : "", d?.hiddenMobile ? "hiddenMobile" : "", d?.hiddenLarge ? "hiddenLarge" : "", d?.className, o),
                style: (0, l.safeStyles)({
                  ...n,
                  ...d?.style
                }),
                ...d,
                children: [(0, u.jsx)(E, {
                  image: r,
                  className: o
                }), f, r?.caption && (0, u.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: r.caption
                  }
                })]
              })
            })
          })
        };
      var Qe = t(20310);
      const Ye = {
        deprecatedCarousel: "rockstargames-sites-legacya531264d5417d2198d4e14aa72335af1",
        "swiper-scrollbar-disabled": "rockstargames-sites-legacyee2324d6dd93a95776b1e2d14d0f529d",
        "swiper-horizontal": "rockstargames-sites-legacyb823bbff86d38da8cb611a7c3367d8fe",
        "swiper-vertical": "rockstargames-sites-legacyd29252354bbbfe413678daff5223169d",
        renderedWithChildren: "rockstargames-sites-legacyad7696edafa3086969e7aaece4f09b4f",
        panorama: "rockstargames-sites-legacyff63f8addff8d036ca0b65fa495e1653",
        img: "rockstargames-sites-legacyd8e66128b4fef1ea164350cd535e2d68",
        hideMobile: "rockstargames-sites-legacyf3445a74a067bd92ff94b521cb0bdc07",
        hideLarge: "rockstargames-sites-legacya6c9173aa5a8fe31a062251352a9d711",
        imageAreaBg: "rockstargames-sites-legacydcb2b41007683141579697bb4a8658ba",
        infinite_false: "rockstargames-sites-legacyb85758ee99a52896b94130d002e821c7",
        track: "rockstargames-sites-legacyc7c21df4f7f83a73f79dd7913aa87832",
        perico: "rockstargames-sites-legacyaa50a9164fd0296b1196d441233cc348",
        dotsSlide: "rockstargames-sites-legacyb8fd11776fba32f9663bbb6292a5c901",
        siblings: "rockstargames-sites-legacyf4c50c0daadf81cd292587fcfea1339d",
        active: "rockstargames-sites-legacyfdc2ec652cbb7469f602e73cd10ef997",
        "swiper-preloader-spin": "rockstargames-sites-legacyc39b97f81c73d75dc4e013fde14aff18"
      };
      var Xe = t(24069);
      const Ze = {
          hr: "rockstargames-sites-legacydc7b1bc141e132d4ee9b7bf9d55c573a",
          redLine: "rockstargames-sites-legacyd4d968b41ef87926b0b6318e8647738b",
          gtao: "rockstargames-sites-legacyf66c75c6e882da85fef31e4211ca0be2"
        },
        Je = e => {
          let {
            style: a,
            className: t = "",
            type: s = ""
          } = e;
          return (0, u.jsx)("div", {
            style: a,
            className: [Ze.hr, Ze[s], t].join(" ")
          })
        },
        ea = "rockstargames-sites-legacyacd27eff2209196752622710f7b27558",
        aa = e => {
          let {
            to: a,
            children: t
          } = e;
          return a ? (0, u.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noreferrer",
            children: t
          }) : t
        },
        ta = e => {
          let {
            item: a,
            className: t = ""
          } = e;
          return (0, u.jsxs)("div", {
            className: (0, l.classList)("rockstargames-sites-legacyf8bc9589974046cdac4a2264be12d2df", t),
            children: [a.title && (0, u.jsx)(aa, {
              to: a?.href ?? a?.to,
              children: (0, u.jsx)("h3", {
                children: a.title
              })
            }), Array.isArray(a?.description?.content) ? a.description.content?.map(((e, a) => e?.unorderedList ? (0, u.jsx)(Xe.A, {
              columns: e.unorderedList.columns ?? null,
              style: {
                "--unordered-list-padding": "var(--grid-gap-static-sm)",
                "--unordered-list-margin-bottom": ".5rem"
              },
              noImg: !0,
              list: e.unorderedList.list
            }, a) : e?.image ? (0, u.jsx)(E, {
              image: e.image,
              className: e?.className
            }, a) : e?.separator ? (0, u.jsx)("div", {
              style: {
                margin: `${e.separator.spacing} 0`
              },
              children: (0, u.jsx)(Je, {})
            }, a) : (0, u.jsx)("p", {
              children: (0, u.jsx)("span", {
                className: ea,
                dangerouslySetInnerHTML: {
                  __html: e
                }
              })
            }, a))) : (0, u.jsx)("span", {
              className: ea,
              dangerouslySetInnerHTML: {
                __html: a.description
              }
            })]
          })
        },
        sa = e => {
          let {
            item: a
          } = e;
          return (0, u.jsxs)("div", {
            children: [(0, u.jsx)(Ke, {
              image: a?.image,
              badge: a?.badge ?? a?.image?.badge,
              badgeType: "badge3",
              role: a?.role ?? a?.image?.role,
              splitter: a?.splitter ?? a?.image?.splitter,
              type: a?.type,
              ariaLabel: a?.image?.ariaLabel ?? a.description,
              style: a?.style,
              className: (0, l.classList)(Ye.img, a?.className)
            }), (a?.title || a?.description) && (0, u.jsx)(ta, {
              item: a
            })]
          })
        },
        ia = e => {
          let {
            current: a,
            total: t
          } = e;
          return (0, u.jsx)("div", {
            className: "swiper-scrollbar",
            style: {
              "--current-slide": a,
              "--total-slides": t
            },
            children: (0, u.jsx)("div", {
              className: "swiper-scrollbar-drag"
            })
          })
        },
        ra = e => {
          let {
            children: a,
            items: t = [],
            style: s = {},
            noInfiniteScroll: i = !1,
            className: r = "",
            renderTemplate: n = "standard",
            text: o,
            customSpaceBetween: d = null,
            centerSlides: m = !0,
            centeredSlidesBounds: g = !1
          } = e;
          const [f, p] = (0, c.useState)(0), b = (0, c.useMemo)((() => a && Array.isArray(a) ? a.map((() => (0, Qe.A)())) : null), [a]);
          if (!(t && 0 !== t?.length || a)) return null;
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
          return (0, u.jsxs)("div", {
            className: (0, l.classList)(Ye.deprecatedCarousel, Ye[n], Ye[`infinite_${!i}`], a ? Ye.renderedWithChildren : "", r),
            style: s,
            children: [(0, u.jsxs)(oe.RC, {
              loop: !i,
              grabCursor: !0,
              centeredSlides: m,
              centerInsufficientSlides: m,
              slidesPerView: "auto",
              speed: 700,
              breakpoints: k,
              onUpdate: () => p(0),
              onActiveIndexChange: e => p(e?.realIndex ?? 0),
              centeredSlidesBounds: g,
              children: [(0, u.jsx)("div", {
                className: Ye.trackWrapper,
                children: (0, u.jsxs)("div", {
                  className: Ye.track,
                  children: [t?.map((e => (0, u.jsx)(oe.qr, {
                    children: (0, u.jsx)(sa, {
                      item: e
                    })
                  }, e.key))), a && a.map(((e, a) => e && (0, u.jsx)(oe.qr, {
                    children: e
                  }, b && b[a])))]
                })
              }), (0, u.jsx)(ia, {
                current: f,
                total: a ? a.length : t.length
              })]
            }), (o?.title || o?.description) && (0, u.jsx)(ta, {
              item: o
            })]
          })
        },
        na = {
          padding: "rockstargames-sites-legacyac767e959939b4d56b2358cb263d07ad",
          carouselWrapper: "rockstargames-sites-legacyfabefc39343f6c494eb3d049757d89c5",
          carouselTitle: "rockstargames-sites-legacye9e0ef1bfc3699b1e50c33dd0ce8e76a"
        },
        ca = e => {
          let {
            to: a,
            children: t
          } = e;
          return a ? (0, u.jsx)("a", {
            href: a,
            target: "_blank",
            children: t
          }) : t
        },
        oa = e => {
          let {
            items: a = [],
            text: t = {},
            style: s,
            className: i = "",
            id: r = null
          } = e;
          return a?.length ? (0, u.jsxs)("div", {
            id: r,
            "data-testid": `carousel${i&&`-${i}`}-group-of-items`,
            children: [(0, u.jsx)(ra, {
              style: s,
              className: [i, na.carouselWrapper].join(" "),
              children: a.map((e => (0, u.jsxs)("div", {
                id: e?.id ?? null,
                children: [(0, u.jsx)(Ke, {
                  image: e?.image,
                  badge: e?.badge ?? e?.image?.badge,
                  badgeType: "badge3",
                  role: e?.role ?? e?.image?.role,
                  splitter: e?.splitter ?? e?.image?.splitter,
                  type: e?.type,
                  ariaLabel: e?.image?.ariaLabel ?? e.description,
                  style: e?.style,
                  className: [na.img, e?.className].join(" ")
                }), e.title && (0, u.jsx)(ca, {
                  to: e?.to,
                  children: (0, u.jsx)("h4", {
                    className: na.carouselTitle,
                    children: e.title
                  })
                }), e.description && (0, u.jsx)("span", {
                  className: na.description,
                  dangerouslySetInnerHTML: {
                    __html: e.description
                  }
                })]
              }, e?.key ?? e?.title)))
            }), t?.title || t?.description ? (0, u.jsx)("div", {
              className: na.padding,
              style: t?.style ?? {},
              children: (0, u.jsx)(ta, {
                item: t
              })
            }) : ""]
          }) : null
        },
        la = e => {
          let {
            impressionTracking: a,
            gtm: t = {},
            children: s
          } = e;
          return a?.shouldTrack ? (0, u.jsx)(S.InViewTracker, {
            threshold: a?.threshold,
            gtm: t,
            children: s
          }) : s
        },
        da = e => {
          let {
            to: a,
            children: t
          } = e;
          return a ? (0, u.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noreferrer",
            children: t
          }) : t
        },
        ma = e => {
          let {
            item: a
          } = e;
          return a?.videoId ? (0, u.jsx)(T(), {
            context: "site",
            autoplay: !1,
            id: a.videoId
          }) : (0, u.jsx)(Ke, {
            image: a?.image,
            badge: a?.badge ?? a?.image?.badge,
            badgeType: "badge3",
            role: a?.role ?? a?.image?.role,
            splitter: a?.splitter ?? a?.image?.splitter,
            ariaLabel: a?.image?.ariaLabel,
            style: a?.style,
            className: a?.className
          })
        },
        ga = e => {
          let {
            items: a,
            style: t = {},
            className: s = "",
            id: i = null
          } = e;
          return (0, u.jsx)("div", {
            style: t,
            className: (0, l.classList)("rockstargames-sites-legacyd38af92e8657708abd3dc5295e62476c", s),
            id: i,
            "data-testid": "standard-group-of-items",
            children: a.map((e => (0, u.jsx)(la, {
              impressionTracking: e?.impressionTracking,
              gtm: e?.gtm,
              children: (0, u.jsx)(da, {
                to: e?.to,
                children: (0, u.jsxs)("div", {
                  className: (0, l.classList)("rockstargames-sites-legacya9b63d3aa2f18fa6c84b19c8993a7893", e.className),
                  style: e?.style ?? {},
                  ...e?.props,
                  children: [e?.image || e?.videoId ? (0, u.jsx)(ma, {
                    item: e
                  }) : "", e.title || e.description ? (0, u.jsx)(ta, {
                    item: e,
                    className: "rockstargames-sites-legacybc47d354556b20071313d2c1ccc3debd"
                  }) : ""]
                })
              })
            }, e.key)))
          })
        },
        ua = e => {
          let {
            children: a = null,
            text: t = {},
            items: s = [],
            renderTemplate: i = "",
            style: r = {},
            id: n = null,
            ...c
          } = e;
          if (!s.length) return null;
          switch (i) {
            case "carousel":
              return (0, u.jsx)(oa, {
                text: t,
                items: s,
                style: r,
                id: n,
                children: a
              });
            case "carousel-panorama":
              return (0, u.jsx)(oa, {
                text: t,
                items: s,
                style: r,
                className: "panorama",
                id: n,
                children: a
              });
            default:
              return (0, u.jsx)(ga, {
                items: s,
                style: r,
                id: n,
                ...c,
                children: a
              })
          }
        };
      var fa = t(71312);
      const pa = e => {
          let {
            text: a,
            style: t
          } = e;
          return (0, u.jsx)("div", {
            className: "rockstargames-sites-legacyc08a001134624b9ceb275eae413bfd3d",
            style: t,
            children: a
          })
        },
        ba = e => {
          let {
            hasTag: a = !1,
            tag: t = null,
            tagStyle: s = null,
            badges: i = []
          } = e;
          return a && t ? (0, u.jsx)("div", {
            className: "rockstargames-sites-legacyceb75d3391774f84e920e955d7a6853f",
            "data-tag-style": s,
            children: t
          }) : a && i && i?.length > 0 ? (0, u.jsx)("div", {
            className: "rockstargames-sites-legacyf83b84453472e937d57011680a564ec6",
            children: i.map((e => (0, u.jsx)(pa, {
              ...e
            }, e?.text)))
          }) : null
        },
        ka = {
          textOverlay: "rockstargames-sites-legacyca83475001f5d512b9ffcd89f1117561",
          content: "rockstargames-sites-legacyf418ed13cf5cbe3f701ce0d872b50704"
        },
        {
          LiteMotion: va,
          Animations: ya
        } = i,
        {
          variants: ha,
          transitions: _a
        } = ya,
        xa = e => {
          let {
            title: a,
            hasTag: t,
            tag: s,
            hasDescription: i,
            description: r,
            fadesOut: n = !1,
            badges: c
          } = e;
          return (0, u.jsx)(va, {
            initial: ha.fade.out.initial,
            animate: {
              opacity: n ? 0 : 1
            },
            transition: _a.fade,
            className: ka.textOverlay,
            children: (0, u.jsxs)("div", {
              className: ka.content,
              children: [(0, u.jsx)(ba, {
                hasTag: t,
                tag: s,
                badges: c?.filter((e => e?.isPrimary))
              }), (0, u.jsx)("h3", {
                children: a
              }), i && r && (0, u.jsx)("div", {
                className: ka.description,
                children: r
              })]
            })
          })
        },
        ja = e => {
          let {
            title: a,
            showTitle: t = !0,
            showBackground: s = !0,
            tag: i,
            tagStyle: r,
            discountPrice: n,
            originalPrice: o,
            setPricingContainerHeight: l = null
          } = e;
          const d = (0, c.createRef)();
          return (0, c.useEffect)((() => {
            const e = () => {
              d.current && null !== l && l(d.current.clientHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [d]), (0, u.jsxs)("div", {
            className: "rockstargames-sites-legacye419c6cd31abd635e742e635dcfd8316",
            ref: d,
            "data-show-background": s,
            children: [t && (0, u.jsx)("span", {
              className: "rockstargames-sites-legacybf415d56280a8768ee0c26e116865d5b",
              children: a
            }), (0, u.jsxs)("div", {
              className: "rockstargames-sites-legacyd98da8fc9dce6d600db165351d3a3fed",
              children: [(0, u.jsx)("span", {
                className: "rockstargames-sites-legacya5717338db21efc7eb765011d68ea73d",
                "data-tag-style": r || "free",
                children: i
              }), (0, u.jsx)("span", {
                className: "rockstargames-sites-legacycdaaa9655747e4d129d6c22080bdd33d",
                children: n
              }), (0, u.jsx)("span", {
                className: "rockstargames-sites-legacyaf3db4eb6d14c1f4ee5689b4e6386715",
                children: o
              })]
            })]
          })
        };
      var Na = t(80391),
        wa = t(28985),
        Sa = t(47240),
        Ca = t(81715),
        Ta = t(49429),
        Ia = t(32903),
        La = t(85719),
        Pa = t(55815),
        Ea = t(66787),
        za = t(11008);
      const Ba = {
          ps5: Sa,
          ps4: wa,
          ps: Na,
          xboxone: Ta,
          xbox: Ia,
          xboxseriesxs: Ca,
          nintendoswitch: za,
          pc: La,
          googleplay: Ea,
          applestore: Pa
        },
        Va = e => {
          let {
            title: a,
            showTitle: t = !0,
            showBackground: s = !0,
            platformOptions: i,
            setPricingContainerHeight: r = (() => {}),
            expandedView: n
          } = e;
          const o = (0, c.createRef)();
          return (0, c.useEffect)((() => {
            const e = () => {
              o.current && null !== r && r(o.current.clientHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [o]), (0, u.jsxs)("div", {
            className: "rockstargames-sites-legacyee81f54f31ab2cd10a67313b9689bf96",
            ref: o,
            "data-show-background": s,
            "data-show-platforms": !n,
            children: [t && (0, u.jsx)("span", {
              className: "rockstargames-sites-legacyd4ab460f0a204a588d4d4dd0a110ca36",
              children: a
            }), i?.platformsAndLinks && (0, u.jsxs)("div", {
              className: "rockstargames-sites-legacyafdc85bfd80cae52d4c1b422f1294962",
              children: [(0, u.jsx)(ba, {
                hasTag: i?._memoq?.platformTag,
                tag: i?._memoq?.platformTag,
                tagStyle: i?._memoq?.platformTagStyle
              }), (0, u.jsx)("div", {
                className: "rockstargames-sites-legacyc252412353007d9f02f19a754430b14b",
                children: i.platformsAndLinks.map((e => {
                  let {
                    platform: a,
                    buttonText: t
                  } = e;
                  return (0, u.jsx)("img", {
                    className: "rockstargames-sites-legacyff5cde8853312ffb892472d100c684cd",
                    alt: t,
                    src: Ba[a]
                  }, a)
                }))
              })]
            })]
          })
        },
        Da = e => {
          let {
            textOverlayProps: a,
            title: t,
            size: s,
            expandedView: i = !1,
            children: r,
            pricingOptions: n,
            setPricingContainerHeight: o,
            isCoverCard: l = !1,
            platformOptions: d
          } = e;
          const [m] = (e => {
            let {
              hasTextOverlay: a,
              tag: t,
              collapsedHasTag: s,
              description: i,
              collapsedHasDescription: r,
              size: n,
              title: o,
              expandedView: l,
              badges: d
            } = e;
            const [m, g] = (0, c.useState)(null), f = (0, c.useMemo)((() => {
              if (!a) return null;
              const e = "sm" !== n && r;
              return (0, u.jsx)(xa, {
                title: o,
                hasTag: s,
                tag: t,
                hasDescription: e,
                description: i,
                fadesOut: l,
                badges: d
              })
            }), [a, t, s, i, r, n, o, l, d]);
            return (0, c.useEffect)((() => {
              g(f)
            }), [f]), [m, g]
          })({
            ...a,
            size: s,
            title: t,
            expandedView: i
          }), g = void 0 !== n?.hasPricingOptions || null !== d;
          return (0, u.jsxs)("header", {
            className: "rockstargames-sites-legacycab36c59e0808c47183ef125bd12c511",
            "data-is-covercard": l,
            "data-expanded-view": i,
            children: [c.Children.map(r, (e => (0, c.cloneElement)(e, {
              title: t,
              size: s,
              expandedView: i
            }))), m, g && (0, u.jsxs)(u.Fragment, {
              children: [!0 === d?.hasPlatformOptions && (0, u.jsx)(Va, {
                title: t,
                platformOptions: d,
                pricingOptions: n,
                setPricingContainerHeight: o,
                expandedView: i
              }), !0 === n?.hasPricingOptions && (0, u.jsx)(ja, {
                title: t,
                tag: n?._memoq?.tag,
                tagStyle: n?._memoq?.tagStyle || "free",
                discountPrice: n?._memoq?.discountPrice,
                originalPrice: n?._memoq?.originalPrice,
                setPricingContainerHeight: o
              })]
            })]
          })
        },
        {
          LiteMotion: Ma,
          Animations: $a
        } = i,
        {
          transitions: Aa
        } = $a,
        Fa = e => {
          let {
            components: a,
            payload: t,
            prod: s,
            size: i,
            title: r,
            initial: n = "initial",
            animate: o = "animate",
            variants: d,
            type: m = null,
            context: g = null,
            textOverlayProps: f,
            className: p,
            children: b,
            theme: k = "none",
            id: v,
            pricingOptions: y,
            pricingContainerHeight: h,
            isCoverCard: _,
            platformOptions: x,
            isProductCard: j = !1
          } = e;
          const N = (0, c.useRef)(),
            w = (0, c.useRef)(),
            {
              tag: C,
              expandedHasTag: T,
              badges: I
            } = f;
          Fe().set(t, "meta.prod", s);
          const L = b?.props?.images.length > 0;
          let P = (0, u.jsx)("h1", {
            children: r
          });
          return _ && (P = null), (0, c.useEffect)((() => {
            const e = () => {
              N.current && N.current.scrollTop > 0 && window.innerWidth >= window.innerHeight && (N.current.scrollTop = 0)
            };
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), []), (0, u.jsx)(l.DataLayerProvider, {
            card_id: v,
            card_name: r?.toLowerCase(),
            children: (0, u.jsx)(fa.A, {
              threshold: [25, 50, 75, 90, 100],
              trackRef: "long" === m ? N : w,
              children: (0, u.jsxs)(Ma, {
                ref: N,
                initial: n,
                animate: o,
                variants: d.expanded,
                transition: Aa.cardOpen,
                className: (0, l.classList)("rockstargames-sites-legacyc2289ce1bf0de6ad8a4a8ce7e90a4b66", p),
                "data-type": m,
                "data-size": i,
                "data-product": j,
                "data-covercard": _ || !1,
                "data-context": g,
                style: {
                  "--product-card-pricing-info-height": `${h||0}px`
                },
                children: [L && (0, u.jsx)(Da, {
                  size: i,
                  title: r,
                  textOverlayProps: f,
                  expandedView: !0,
                  pricingOptions: y,
                  platformOptions: x,
                  isCoverCard: _,
                  children: b
                }), (0, u.jsxs)(Ma, {
                  ref: w,
                  className: "rockstargames-sites-legacye461568802b56e8c21b8b82d9c3a1fb4",
                  variants: d.expandedContents,
                  transition: Aa.afterCardOpen,
                  "data-theme": k,
                  children: [(0, u.jsxs)("div", {
                    className: "rockstargames-sites-legacyc4c35e83dbf962aa44c3f94b313361b3",
                    children: [(0, u.jsx)(ba, {
                      hasTag: T,
                      tag: C,
                      badges: I
                    }), P, j && (0, u.jsxs)(u.Fragment, {
                      children: [!0 === x?.hasPlatformOptions && (0, u.jsx)("div", {
                        className: "rockstargames-sites-legacycd635452588eda421bdea19f00660efc",
                        children: (0, u.jsx)(ba, {
                          hasTag: x?.hasPlatformOptions,
                          tag: x?._memoq?.platformTag,
                          tagStyle: x?._memoq?.platformTagStyle
                        })
                      }), !0 === y?.hasPricingOptions && (0, u.jsx)(ja, {
                        title: r,
                        showTitle: !1,
                        showBackground: !1,
                        tag: y?._memoq?.tag,
                        tagStyle: y?.tagStyle || "free",
                        discountPrice: y?._memoq?.discountPrice,
                        originalPrice: y?._memoq?.originalPrice
                      })]
                    })]
                  }), (0, u.jsx)(S.TinaParser, {
                    components: a,
                    tina: {
                      payload: t
                    }
                  })]
                })]
              })
            })
          })
        };
      var Oa = t(13624);
      const Ga = (0, o.defineMessages)({
          card_label_platforms: {
            id: "card_label_platforms",
            defaultMessage: "{title} on {platformList}"
          },
          card_label_tag: {
            id: "card_label_tag",
            defaultMessage: "{tag} {title}"
          },
          card_label_platforms_tag: {
            id: "card_label_platforms_tag",
            defaultMessage: "{tag} {title} on {platformList}"
          },
          card_learn_more: {
            id: "card_learn_more",
            defaultMessage: "Learn More"
          },
          events_deck_next_aria_label: {
            id: "events_deck_next_aria_label",
            defaultMessage: "Next Page of Events"
          },
          events_deck_previous_aria_label: {
            id: "events_deck_previous_aria_label",
            defaultMessage: "Previous Page of Events"
          },
          events_deck_modal_next_aria_label: {
            id: "events_deck_modal_next_aria_label",
            defaultMessage: "Next event"
          },
          events_deck_modal_previous_aria_label: {
            id: "events_deck_modal_previous_aria_label",
            defaultMessage: "Previous event"
          },
          events_deck_modal_close_label: {
            id: "events_deck_modal_close_label",
            defaultMessage: "Close"
          },
          events_deck_paging_label: {
            id: "events_deck_paging_label",
            defaultMessage: "On page {currentPage} of {totalPages}"
          },
          events_deck_modal_group_label: {
            id: "events_deck_modal_group_label",
            defaultMessage: "Event Details"
          }
        }),
        Ra = JSON.parse('{"de-DE":{"card_label_platforms":"{title} auf {platformList}","card_label_platforms_tag":"{tag} {title} auf {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Mehr erfahren","events_deck_modal_close_label":"Schließen","events_deck_modal_group_label":"Eventdetails","events_deck_modal_next_aria_label":"Nächstes Event","events_deck_modal_previous_aria_label":"Vorheriges Event","events_deck_next_aria_label":"Nächste Seite von Events","events_deck_paging_label":"Auf Seite {currentPage} von {totalPages}","events_deck_previous_aria_label":"Vorherige Seite von Events"},"en-US":{"card_label_platforms":"{title} on {platformList}","card_label_platforms_tag":"{tag} {title} on {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Learn More","events_deck_modal_close_label":"Close","events_deck_modal_group_label":"Event Details","events_deck_modal_next_aria_label":"Next event","events_deck_modal_previous_aria_label":"Previous event","events_deck_next_aria_label":"Next Page of Events","events_deck_paging_label":"On page {currentPage} of {totalPages}","events_deck_previous_aria_label":"Previous Page of Events"},"es-ES":{"card_label_platforms":"{title} para {platformList}","card_label_platforms_tag":"{tag} {title} para {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Más información","events_deck_modal_close_label":"Cerrar","events_deck_modal_group_label":"Detalles del evento","events_deck_modal_next_aria_label":"Evento siguiente","events_deck_modal_previous_aria_label":"Evento anterior","events_deck_next_aria_label":"Página siguiente de eventos","events_deck_paging_label":"Página {currentPage} de {totalPages}","events_deck_previous_aria_label":"Página anterior de eventos"},"es-MX":{"card_label_platforms":"{title} en {platformList}","card_label_platforms_tag":"{tag} {title} en {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Más información","events_deck_modal_close_label":"Cerrar","events_deck_modal_group_label":"Detalles del evento","events_deck_modal_next_aria_label":"Evento siguiente","events_deck_modal_previous_aria_label":"Evento anterior","events_deck_next_aria_label":"Página de eventos siguiente","events_deck_paging_label":"Página {currentPage} de {totalPages}","events_deck_previous_aria_label":"Página de eventos anterior"},"fr-FR":{"card_label_platforms":"{title} sur {platformList}","card_label_platforms_tag":"{tag} {title} sur {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"En savoir plus","events_deck_modal_close_label":"Fermer","events_deck_modal_group_label":"Détails de l’évènement","events_deck_modal_next_aria_label":"Évènement suivant","events_deck_modal_previous_aria_label":"Évènement précédent","events_deck_next_aria_label":"Page suivante des évènements","events_deck_paging_label":"Page {currentPage} sur {totalPages}","events_deck_previous_aria_label":"Page précédente des évènements"},"it-IT":{"card_label_platforms":"{title} su {platformList}","card_label_platforms_tag":"{tag} {title} su {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Altre informazioni","events_deck_modal_close_label":"Chiudi","events_deck_modal_group_label":"Dettagli evento","events_deck_modal_next_aria_label":"Evento successivo","events_deck_modal_previous_aria_label":"Evento precedente","events_deck_next_aria_label":"Pagina degli eventi successiva","events_deck_paging_label":"Pagina {currentPage} di {totalPages}","events_deck_previous_aria_label":"Pagina degli eventi precedente"},"ja-JP":{"card_label_platforms":"{platformList}版{title}","card_label_platforms_tag":"{tag} {platformList}版 {title}","card_label_tag":"{tag} {title}","card_learn_more":"詳細を閲覧","events_deck_modal_close_label":"閉じる","events_deck_modal_group_label":"イベントの詳細","events_deck_modal_next_aria_label":"次のイベント","events_deck_modal_previous_aria_label":"前のイベント","events_deck_next_aria_label":"次のイベントのページ","events_deck_paging_label":"{currentPage}/{totalPages}ページ","events_deck_previous_aria_label":"前のイベントのページ"},"ko-KR":{"card_label_platforms":"{platformList}용 {title}","card_label_platforms_tag":"{tag} {platformList}용 {title}","card_label_tag":"{tag} {title}","card_learn_more":"더 알아보기","events_deck_modal_close_label":"닫기","events_deck_modal_group_label":"이벤트 세부 정보","events_deck_modal_next_aria_label":"다음 이벤트","events_deck_modal_previous_aria_label":"이전 이벤트","events_deck_next_aria_label":"다음 이벤트 페이지","events_deck_paging_label":"{currentPage}/{totalPages} 페이지","events_deck_previous_aria_label":"이전 이벤트 페이지"},"pl-PL":{"card_label_platforms":"{title} na {platformList}","card_label_platforms_tag":"{tag} {title} na {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Dowiedz się więcej","events_deck_modal_close_label":"Zamknij","events_deck_modal_group_label":"Szczegóły wydarzenia","events_deck_modal_next_aria_label":"Następne wydarzenie","events_deck_modal_previous_aria_label":"Poprzednie wydarzenie","events_deck_next_aria_label":"Następna strona wydarzeń","events_deck_paging_label":"Strona {currentPage} z {totalPages}","events_deck_previous_aria_label":"Poprzednia strona wydarzeń"},"pt-BR":{"card_label_platforms":"{title} para {platformList}","card_label_platforms_tag":"{tag} {title} para {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Saiba mais","events_deck_modal_close_label":"Fechar","events_deck_modal_group_label":"Detalhes do evento","events_deck_modal_next_aria_label":"Próximo evento","events_deck_modal_previous_aria_label":"Evento anterior","events_deck_next_aria_label":"Próxima página de eventos","events_deck_paging_label":"Página {currentPage} de {totalPages}","events_deck_previous_aria_label":"Página anterior de eventos"},"ru-RU":{"card_label_platforms":"{title} на {platformList}","card_label_platforms_tag":"{title} ({tag}) на {platformList}","card_label_tag":"{title} ({tag})","card_learn_more":"Подробности","events_deck_modal_close_label":"Закрыть","events_deck_modal_group_label":"Описание события","events_deck_modal_next_aria_label":"Следующее событие","events_deck_modal_previous_aria_label":"Предыдущее событие","events_deck_next_aria_label":"Следующая страница с событиями","events_deck_paging_label":"На {currentPage}-й странице из {totalPages}","events_deck_previous_aria_label":"Предыдущая страница с событиями"},"zh-CN":{"card_label_platforms":"{platformList} 上的 {title}","card_label_platforms_tag":"{tag} {platformList} 上的 {title}","card_label_tag":"{tag} {title}","card_learn_more":"了解更多","events_deck_modal_close_label":"关闭","events_deck_modal_group_label":"活动细节","events_deck_modal_next_aria_label":"下一个活动","events_deck_modal_previous_aria_label":"上一个活动","events_deck_next_aria_label":"下一页活动","events_deck_paging_label":"在第 {currentPage} 页（共 {totalPages} 页）","events_deck_previous_aria_label":"上一页活动"},"zh-TW":{"card_label_platforms":"{platformList} 上的 {title}","card_label_platforms_tag":"{tag} {platformList} 上的 {title}","card_label_tag":"{tag} {title}","card_learn_more":"了解更多","events_deck_modal_close_label":"關閉","events_deck_modal_group_label":"活動詳情","events_deck_modal_next_aria_label":"下一個活動","events_deck_modal_previous_aria_label":"上一個活動","events_deck_next_aria_label":"下一頁活動","events_deck_paging_label":"第 {currentPage} 頁（共 {totalPages} 頁）","events_deck_previous_aria_label":"上一頁活動"}}'),
        Ha = (0, o.withIntl)((e => {
          let {
            id: a,
            position: t,
            title: s,
            size: i = "md",
            sectionTitle: r = "",
            expandedType: n = null,
            modalProps: l = {
              content: null,
              className: "",
              contentClassName: ""
            },
            className: d,
            children: g,
            isProductCard: f,
            cardIds: p = null,
            theme: b = "none",
            isCoverCard: k,
            platformOptions: v
          } = e;
          const {
            formatMessage: y,
            formatList: h
          } = (0, o.useIntl)(), [_, x] = (0, X.useSearchParams)(), j = (0, c.useRef)(null), [, N] = (0, Oa.h)(), {
            track: w
          } = (0, m.useGtmTrack)(), [S, C] = (0, c.useState)(!1), T = window.location.href.includes("cms5"), I = () => {
            C(!1), N(null), T || x({}), w({
              event: "trackPageview"
            })
          }, L = () => {
            if (!l?.content || !j.current || !n || "linkout" === n) return;
            const e = j.current,
              r = window.getComputedStyle(e),
              c = parseInt(r.getPropertyValue("width"), 10),
              o = parseInt(r.getPropertyValue("height"), 10),
              d = e.getBoundingClientRect(),
              {
                content: m,
                className: g,
                contentClassName: u
              } = l,
              f = "fob" === i ? "fob" : "default";
            N({
              content: m,
              onClose: I,
              rect: d,
              width: c,
              height: o,
              className: g,
              contentClassName: u,
              fadeIn: !1,
              cardIds: p,
              theme: b,
              activeId: a,
              gtm: {
                card_id: a,
                card_name: s?.toLowerCase(),
                position: t
              },
              aspectRatio: f,
              cardDimensions: {
                size: i,
                type: n
              }
            }), w({
              event: "trackPageview",
              link_url: window.location.href,
              card_id: a,
              card_name: s?.toLowerCase(),
              position: t
            })
          };
          (0, c.useEffect)((() => {
            S && L()
          }), [S]), (0, c.useEffect)((() => {
            C(_.get("info") === a)
          }), [_.get("info"), a]);
          const P = (0, c.useMemo)((() => {
            const e = v?._memoq?.platformTag || "";
            if (v?.platformsAndLinks?.length > 0) {
              const a = v?.platformsAndLinks?.map((e => {
                  let {
                    buttonText: a
                  } = e;
                  return a
                })),
                t = h(a, {
                  type: "conjunction"
                });
              return e ? y(Ga.card_label_platforms_tag, {
                tag: e,
                title: s,
                platformList: t
              }) : y(Ga.card_label_platforms, {
                title: s,
                platformList: t
              })
            }
            return e ? y(Ga.card_label_tag, {
              tag: e,
              title: s
            }) : s
          }), [v, s]);
          return k || "linkout" === n ? (0, u.jsx)("div", {
            ref: j,
            className: d,
            "data-size": i,
            "data-type": n,
            "data-product": f,
            role: "button",
            "aria-label": P,
            children: g
          }) : (0, u.jsx)("button", {
            ref: j,
            onClick: e => {
              e.preventDefault(), e.stopPropagation(), a ? x({
                info: a
              }) : L(), w({
                event: "card_click",
                element_placement: r?.toLowerCase(),
                position: t,
                card_id: a,
                card_name: s?.toLowerCase(),
                link_url: window.location.href
              })
            },
            className: d,
            "data-size": i,
            "data-type": n,
            "data-product": f,
            tabIndex: "linkout" !== n ? 0 : -1,
            "aria-label": P,
            type: "button",
            children: g
          })
        }), Ra),
        qa = {
          pillBtn: "rockstargames-sites-legacyf3a91bbe53323354bc84e26197787c03",
          selected: "rockstargames-sites-legacya03c60979e8d6882b5b8ce0f0301b7e9",
          card: "rockstargames-sites-legacyc49a3d41905733d6aa83dcd3463df7d5",
          content: "rockstargames-sites-legacyb41eac21ba69f02fe26f8dafa8433207",
          expandedContent: "rockstargames-sites-legacyfea5414b5f55420cfcd6c6ee12a393b3",
          text: "rockstargames-sites-legacye961062768d06292ff6cb598ae1c5e69",
          imageHolder: "rockstargames-sites-legacyd893e3eab0a5754bb28882ceb8de6b59",
          coverCardWrapper: "rockstargames-sites-legacydd482c08ed9fdc5cef20f63dd6720e13"
        },
        Ua = e => {
          let {
            payload: a,
            prod: t,
            images: s,
            size: i,
            title: r,
            initial: n,
            animate: o,
            variants: l,
            id: d,
            position: m,
            sectionTitle: g,
            expandedType: f,
            context: p,
            children: b,
            expandedCardContents: k,
            textOverlayProps: v = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            deckProps: y = {},
            modalProps: h = [],
            theme: _,
            cardIds: x,
            pricingOptions: j,
            platformOptions: N = null,
            pricingContainerHeight: w,
            isCoverCard: C = !1,
            isProductCard: T = !1
          } = e;
          const I = (0, S.useTinaComponents)(),
            L = (0, c.useMemo)((() => ({
              ...I,
              HTMLElement: Oe,
              ImageWithBadge: Ke,
              Carousel: ra,
              GroupOfItems: ua
            })), [I]),
            P = (0, c.useMemo)((() => (0, u.jsx)(Fa, {
              type: f,
              components: L,
              payload: a,
              prod: t,
              images: s,
              size: i,
              title: r,
              context: p,
              textOverlayProps: v,
              initial: n,
              animate: o,
              variants: l,
              theme: _,
              cardIds: x,
              pricingOptions: j,
              id: d,
              pricingContainerHeight: w,
              isCoverCard: C,
              platformOptions: N,
              isProductCard: T,
              children: k
            })), [f, s, t, i, r, v, k, n, o, l, L, a, T]),
            E = [qa.card, C ? qa.coverCardWrapper : ""].join(" ");
          return (0, u.jsx)(Ha, {
            id: d,
            position: m,
            sectionTitle: g,
            title: r,
            size: i,
            expandedType: f,
            images: s,
            deckProps: y,
            modalProps: {
              content: P,
              ...h
            },
            className: E,
            isProductCard: T,
            cardIds: x,
            theme: _,
            isCoverCard: C,
            platformOptions: N,
            children: b
          })
        },
        Wa = {
          layeredImageFrame: "rockstargames-sites-legacycfc6074d8b476125230142c79438a249",
          layered: "rockstargames-sites-legacya7a1d10cda2bf3de7960b4fadf2f7a4e",
          foreground: "rockstargames-sites-legacyd858cc29f8933cc96ea1b20f734c1796",
          imageMask: "rockstargames-sites-legacyd656190323ba10afc580adbf82303a8b",
          logo: "rockstargames-sites-legacyca32213b5f72baeb68ba9a21ee8a295b",
          "sm-horizontal": "rockstargames-sites-legacyf5ab2fbb234fc0631784968dc2b1da75"
        },
        {
          LiteMotion: Ka,
          Animations: Qa
        } = i,
        {
          getVariant: Ya,
          variants: Xa,
          transitions: Za
        } = Qa,
        Ja = e => {
          let {
            image: a,
            i: t,
            prod: s
          } = e;
          const {
            alt: i,
            src: r
          } = (0, I.S1)({
            ...a,
            prod: s
          });
          return (0, u.jsx)("img", {
            src: r.mobile,
            alt: i ?? "",
            style: {
              "--z-index": t
            }
          })
        },
        et = e => {
          let {
            images: a = [],
            className: t = "",
            prod: s = !1,
            expandedView: i = !1,
            style: r = {}
          } = e;
          const [n, o] = (0, c.useState)({
            height: window.innerHeight,
            width: window.innerWidth
          });
          (0, c.useEffect)((() => {
            function e() {
              o({
                height: window.innerHeight,
                width: window.innerWidth
              })
            }
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [n]);
          const d = (0, c.useMemo)((() => a?.length && 0 !== a.length ? a.map((e => (0, u.jsx)(Ka, {
            className: (0, l.classList)(Wa[e?.specialClass] ?? Wa.imageMask, Wa[e?.sizeClass], e?.className),
            variants: Ya(e?.specialClass ?? "imageMask", i ? "expanded" : "collapsed"),
            initial: "initial",
            animate: "animate",
            transition: Za.cardOpen,
            children: (0, u.jsx)(Ja, {
              image: e,
              prod: s
            })
          }, e.key))) : null), [a, n, i, s]);
          return (0, u.jsx)(Ka, {
            className: (0, l.classList)(Wa.layeredImageFrame, a.length > 1 ? Wa.layered : Wa.flat, t),
            style: r,
            initial: Xa.fade.in.initial,
            animate: Xa.fade.in.animate,
            transition: Za.instantFade,
            "data-expanded-view": i,
            children: d
          })
        },
        at = e => {
          let {
            expandedType: a,
            to: t,
            children: s,
            style: i,
            sectionTitle: r = "",
            id: n,
            cardTitle: o,
            position: l
          } = e;
          const {
            track: d
          } = (0, m.useGtmTrack)(), f = (0, c.useCallback)((() => {
            d({
              event: "card_click",
              link_url: t,
              card_id: n,
              card_name: o,
              element_placement: r.toLowerCase(),
              position: l
            })
          }), [r, t, n, o, r, l]);
          return "linkout" === a && t ? (0, u.jsx)(g.A, {
            to: t,
            style: i,
            target: t?.startsWith("http") ? "_blank" : "_self",
            onClick: f,
            children: s
          }) : s
        },
        tt = {
          pillBtn: "rockstargames-sites-legacyddaada7b150b18de710c9f77384c6537",
          selected: "rockstargames-sites-legacyb4fbb4006fc27b899dac5e522ef574e3",
          customModalContent: "rockstargames-sites-legacyfc96cdfdaeb2ad81b1b409fcb233657e",
          content: "rockstargames-sites-legacyc65ddebc8ee2173143d87e1079f2455a"
        },
        {
          variants: st
        } = s,
        it = e => {
          let {
            id: a,
            title: t,
            content: s,
            size: i = "md",
            expandedType: r = "short",
            textOverlayProps: n = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            images: o = [],
            deckProps: l = {},
            to: d = null,
            tina: m = {},
            position: g = 0,
            sectionTitle: f = "",
            theme: p,
            pricingOptions: b,
            cardIds: k,
            platformOptions: v = null
          } = e;
          const y = (0, S.useTinaPayload)(),
            h = m?.payload?.meta?.cdn ?? y?.meta?.prod ?? !1,
            [_, x] = (0, c.useState)(l?.size ?? i),
            [j, N] = (0, c.useState)(0),
            w = void 0 !== b?.hasPricingOptions || void 0 !== v?.hasPlatformOptions;
          return (0, c.useEffect)((() => {
            x(l?.size ?? i)
          }), [l?.size, i]), (0, u.jsx)(Ua, {
            id: a,
            title: t,
            size: _,
            expandedType: r,
            images: o,
            deckProps: l,
            prod: h,
            payload: {
              content: s,
              meta: {}
            },
            variants: st.plainCard,
            textOverlayProps: n,
            modalProps: {
              className: tt.customModal,
              contentClassName: tt.customModalContent
            },
            expandedCardContents: (0, u.jsx)(et, {
              images: o,
              prod: h,
              expandedView: !0
            }),
            position: g,
            sectionTitle: f,
            theme: p,
            cardIds: k,
            pricingOptions: b,
            platformOptions: v,
            pricingContainerHeight: j,
            isProductCard: w,
            children: (0, u.jsx)(at, {
              expandedType: r,
              to: d,
              sectionTitle: f,
              id: a,
              cardTitle: t,
              position: g,
              children: (0, u.jsx)("div", {
                className: tt.content,
                "data-product": w,
                children: (0, u.jsx)(Da, {
                  title: t,
                  size: _,
                  textOverlayProps: n,
                  pricingOptions: b,
                  platformOptions: v,
                  setPricingContainerHeight: N,
                  children: (0, u.jsx)(et, {
                    images: o,
                    prod: h
                  })
                })
              })
            })
          })
        },
        rt = {
          ps: Na,
          ps3: t(45302),
          ps4: wa,
          ps5: Sa,
          switch: za,
          nintendoswitch: za,
          xbox: Ia,
          xboxone: Ta,
          xboxseriesxs: Ca,
          xbox360: t(49564),
          pc: La,
          play: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/59c4aadbdbfcdb8d06d7caa54bdc9f60.svg",
          applestore: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38a6e85fa4a378c5620efa9fde8ff223.svg",
          googleplay: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ca4e52b102306a186549cfd712b1c8f8.svg",
          questionMark: t(93221),
          default: ""
        },
        nt = e => rt[e] || null,
        ct = {
          pillBtn: "rockstargames-sites-legacyf39c827be0d560f2cc376d83e3988fbc",
          selected: "rockstargames-sites-legacya63fd127fc0aab231f6740340658d647",
          "clr-button": "rockstargames-sites-legacyd4ec60c769b079ac712ea0264480d480",
          lgMax: "rockstargames-sites-legacydf956d5fc70d2129beb1406170402148",
          smMax: "rockstargames-sites-legacyfce12fc6343fbf09a5bb418bb8107f0b",
          cta: "rockstargames-sites-legacya8f295907e9b244767bb48cfc469b480",
          label: "rockstargames-sites-legacyd75a0e2af2bf8502f8647015e04e10e1",
          primary: "rockstargames-sites-legacya857266233e524e3bb96d327a2095642",
          btnContent: "rockstargames-sites-legacyd4df564f6143ae5909e2bbc95b4a7ebc",
          btnIcon: "rockstargames-sites-legacyf7afeacf3abab7856caca9ea1fad81ad",
          border: "rockstargames-sites-legacyaab360f8b5cf6965c56e5f86813b8620",
          xbox: "rockstargames-sites-legacycf162a09fdf0c180f3f5091077493d98",
          xboxone: "rockstargames-sites-legacye34e2c7fd3dd88f7e7d46f495c15a98d",
          xboxseriesxs: "rockstargames-sites-legacyf5b0bc5e5a291a3ecab7447d33a76e55",
          ps: "rockstargames-sites-legacyd439373e74d36689bc159e9a585db184",
          ps4: "rockstargames-sites-legacye49e2b4d44ce7bab7966fbd9fdfb0760",
          ps5: "rockstargames-sites-legacybaa2b83edce86fda2d9dffb2682092f7",
          pc: "rockstargames-sites-legacya1b9c83f518722f01ecb3ece3681c117",
          nintendoswitch: "rockstargames-sites-legacye646f30d1a0c9990c5178e67be93f75e",
          googleplay: "rockstargames-sites-legacyad074b742a5ce23c053880b289c2bbe6",
          platformIcon: "rockstargames-sites-legacyf25581474e97714bc974f3ab51136511",
          lgMin: "rockstargames-sites-legacye974b6c740bfac2959d5170bd2d9f3ca",
          applestore: "rockstargames-sites-legacye97115f479fca9697b140bfbfa6534f2",
          borderless: "rockstargames-sites-legacycad0684072c4a89cb09b9f79ddda6f38",
          icon: "rockstargames-sites-legacyc394fea7e071f1213a5d44f5b569bd1a",
          "icon-left": "rockstargames-sites-legacyc73b838b4f69aff2241b814ad1547c48",
          "icon-right": "rockstargames-sites-legacyf0de4560b8a1190f63a65ad1e9fd4e03",
          disabled: "rockstargames-sites-legacyd7a212b6e993966a3773c335359586d5"
        };
      var ot = t(65485),
        lt = t.n(ot);
      const dt = e => {
          let {
            platform: a = "",
            altText: t
          } = e;
          const s = a ? nt(a) : null,
            i = s ? (0, u.jsx)("img", {
              className: ct.platformIcon,
              src: s,
              alt: t
            }) : null;
          return (0, u.jsx)("span", {
            className: [ct.btnContent, ct.platformButton].join(" "),
            children: i
          })
        },
        mt = e => {
          let {
            children: a,
            href: t,
            style: s,
            content: i,
            variant: r = null,
            size: n = "medium",
            icon: o,
            iconPosition: d = "none",
            iconStyle: g,
            badge: f,
            badgeStyle: p,
            platformItem: b,
            platformStyle: k = "border",
            gtm: v = {},
            disabled: y,
            reloadDocument: h = !1,
            className: _
          } = e;
          const {
            track: x
          } = (0, m.useGtmTrack)(), j = (0, l.useDataLayer)(), N = i ?? a, w = (0, l.findPlatform)(b)?.friendlyName, S = (0, c.useMemo)((() => {
            const e = window.location.hostname;
            let a;
            try {
              a = new URL(t)?.hostname
            } catch (t) {
              a = e
            }
            return e === a
          }), [t]), C = (0, c.useCallback)((() => {
            y || x({
              event: "cta_other",
              text: N ?? void 0,
              ...j,
              ...v,
              link_url: t ?? void 0
            })
          }), [v, t, j]), T = () => o ? (0, u.jsx)("span", {
            className: [ct.icon, `icon-${d}`].join(" "),
            style: g,
            children: (0, u.jsx)("img", {
              className: ct.btnIcon,
              src: nt(o) || "",
              alt: `${o} icon`
            })
          }) : null;
          return (0, u.jsx)(X.Link, {
            to: t,
            target: S ? "_self" : "_blank",
            className: lt()(ct.cta, "platform" === r && b ? ct[b] : "", k && ct[k], y ? ct.disabled : "", _),
            style: s,
            "data-variant": r,
            "data-size": n,
            onClick: C,
            "aria-label": N,
            reloadDocument: h,
            children: "platform" === r && b ? (0, u.jsx)(dt, {
              platform: b,
              altText: w || N
            }) : (0, u.jsxs)("div", {
              className: ct.btnContent,
              children: ["left" === d && T(), (0, u.jsx)("span", {
                className: ct.label,
                children: N
              }), "right" === d && T(), f ? (0, u.jsx)("span", {
                className: ct.badge,
                style: p,
                children: f
              }) : null]
            })
          })
        },
        gt = e => {
          let {
            children: a,
            context: t = null,
            game: s,
            image: i = {},
            style: r = {},
            template: n = null,
            theme: c = null,
            reversedOnMobile: o = !1,
            className: d = "",
            id: m = null
          } = e;
          const g = (0, I.S1)(i ?? {}),
            f = {
              ...r
            };
          if (g?.src?.desktop) {
            const e = (i?.style && i?.style["--background-image-size"]) ?? "var(--grid-background-size, cover)",
              a = (i?.style && i?.style["--background-image-repeat"]) ?? "var(--grid-background-repeat, no-repeat)",
              t = `var(--grid-background-position, center)/${e??"cover"}`;
            if (f.background = `url(${g?.src?.desktop}) ${a} ${t}`, i?.style && i?.style["--linear-gradient"]) f.background = `linear-gradient(${i?.style["--linear-gradient"]}), url(${g?.src?.desktop}) ${a} ${t}`;
            else if (i?.style && i?.style["--gradient-height"]) {
              const e = i?.style["--gradient-height"] || "3",
                s = i?.style["--gradient-start-color"] || "var(--background-color, transparent)",
                r = i?.style["--gradient-end-color"] || "var(--background-color, transparent)";
              f.background = `linear-gradient(180deg, ${s}, transparent ${e}%, transparent ${100-e}%, ${r}), url(${g?.src?.desktop}) ${a} ${t}`
            }
          }
          return (0, u.jsx)("div", {
            id: m,
            className: (0, l.classList)("rockstargames-sites-legacyda87ead760b989fbe90a0b89c60b0653", o ? "rockstargames-sites-legacydfbda195073626bc6a7690dc73fba873" : "", d),
            "data-game": "community" === n ? null : s,
            style: (0, l.safeStyles)(f),
            "data-context": t,
            "data-template": n,
            "data-theme": c,
            children: a
          })
        };
      var ut = t(50828);
      const ft = {
          button: "rockstargames-sites-legacybc25ec64410308d56e4dc097e81fb129",
          secondary: "rockstargames-sites-legacya3e6439dcaa4870840298d683db4831c"
        },
        pt = e => {
          let {
            className: a = "",
            children: t,
            context: s = "",
            to: i,
            onClick: r,
            target: n = "_self",
            ...c
          } = e;
          const o = [ft.button, ft[s], a].join(" ");
          return i ? (0, u.jsx)(g.A, {
            ...c,
            to: i,
            className: o,
            onClick: r,
            target: n,
            children: t
          }) : (0, u.jsx)("button", {
            ...c,
            type: "button",
            className: o,
            onClick: r,
            children: t
          })
        },
        bt = e => {
          let {
            className: a
          } = e;
          return (0, u.jsxs)("svg", {
            className: a,
            width: "16",
            height: "17",
            viewBox: "0 0 16 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, u.jsx)("path", {
              d: "M3.33203 8.5H12.6654",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, u.jsx)("path", {
              d: "M8 3.83331L12.6667 8.49998L8 13.1666",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })]
          })
        },
        kt = {
          pillBtn: "rockstargames-sites-legacyc881ff12d1d9fb612b4ddd89178684e4",
          selected: "rockstargames-sites-legacydece7a2abb867cf09add3f7429e7383b",
          calloutContainer: "rockstargames-sites-legacye8b19ed9af6aedef68997370cd508539",
          calloutSection: "rockstargames-sites-legacyab742f2f5b6947ec0b2facff923a076f",
          calloutHeaders: "rockstargames-sites-legacye86d59dd2e0ab3c594c33eccde3e8fea",
          calloutHeaderMargins: "rockstargames-sites-legacyd7d4d815f9e36b62ef54befcc89ca296",
          calloutHeader: "rockstargames-sites-legacyfb0bbc5bcc4fb2c7d0b8152001df0497",
          calloutSubheader: "rockstargames-sites-legacyf5fe27da672cf05e64359ada500a6b7a",
          calloutVoteForm: "rockstargames-sites-legacyb5e2fa8800d39c78682d9ce8ce5e53f8",
          voteButton: "rockstargames-sites-legacyecdf609ed8d6c4039be969205b7e3ac0",
          upvote: "rockstargames-sites-legacyf8d6a685395153161827b5cf8c6ddb93",
          downvote: "rockstargames-sites-legacyb1953057e462cdf6c79a4b8e6f2fe91b",
          active: "rockstargames-sites-legacyec9f200e6987aebf6375c999eecd5dc3",
          calloutButton: "rockstargames-sites-legacyb8ed029eb7d9b09c70caa4576bbb4c5a",
          calloutLink: "rockstargames-sites-legacybc07ececd6531f5df1c8cba48c846797",
          calloutLinkIcon: "rockstargames-sites-legacydb31e98c20de15e8d5983285bd6ec92e",
          actionBlock: "rockstargames-sites-legacyb1516576d0566f12c906be9e81407ce4",
          actionFooter: "rockstargames-sites-legacyf713e165e153987c3855d93dc1614f4d"
        },
        vt = e => {
          let {
            foreign_id: a,
            foreign_type: t
          } = e;
          const {
            track: s
          } = (0, m.useGtmTrack)(), {
            refetch: i
          } = (0, l.useQuery)(ut.UserGetVote, {
            skip: !0
          }), [r] = (0, l.useMutation)(ut.UserCastVote), [n, o] = (0, c.useState)(null), d = (0, c.useCallback)((e => {
            (async () => {
              if (e === n && null !== n) o(null);
              else {
                o(e), s({
                  event: "cta_" + (e ? "like" : "dislike"),
                  text: `${t} ${a}`
                });
                const i = {
                  foreignId: a,
                  foreignType: t,
                  vote: e
                };
                await r({
                  variables: i
                })
              }
            })()
          }), [a, t, n]);
          return (0, c.useEffect)((() => {
            a && t && (async () => {
              const e = await i({
                foreignId: a,
                foreignType: t
              });
              o(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [a, t]), (0, u.jsxs)("div", {
            className: kt.calloutVoteForm,
            children: [(0, u.jsx)("button", {
              "aria-label": "upvote",
              className: [kt.upvote, kt.voteButton, n ? kt.active : ""].join(" "),
              name: "upvote",
              onClick: () => d(!0),
              type: "button"
            }), (0, u.jsx)("button", {
              "aria-label": "downvote",
              className: [kt.downvote, kt.voteButton, !1 === n ? kt.active : ""].join(" "),
              name: "downvote",
              onClick: () => d(!1),
              type: "button"
            })]
          })
        },
        yt = e => {
          let {
            action_text: a,
            link: t,
            trackingData: s
          } = e;
          const {
            track: i
          } = (0, m.useGtmTrack)();
          return (0, u.jsx)("a", {
            href: t,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, u.jsxs)("button", {
              className: kt.calloutLink,
              type: "button",
              onClick: s ? () => i({
                ...s
              }) : () => {},
              children: [a, (0, u.jsx)(bt, {
                className: kt.calloutLinkIcon
              })]
            })
          })
        },
        ht = e => {
          let {
            helperText: a,
            linkText: t,
            link: s,
            trackingData: i
          } = e;
          const {
            track: r
          } = (0, m.useGtmTrack)();
          return (0, u.jsxs)("div", {
            className: kt.actionFooter,
            children: [a, t && " ", t && (0, u.jsx)("a", {
              href: s ?? "",
              onClick: () => r({
                ...i
              }),
              children: t
            })]
          })
        },
        _t = (0, l.withTranslations)((e => {
          let {
            header: a,
            subheader: t,
            type: s,
            action_text: i,
            link: r,
            foreign_id: n = document.location.pathname,
            foreign_type: o = "url",
            className: l = "",
            actionFooterHelperText: g,
            actionFooterLinkText: f,
            actionFooterLink: p,
            trackingData: b = {},
            actionFooterLinkTrackingData: k = {},
            t: v,
            ...y
          } = e;
          const {
            loggedIn: h
          } = (0, m.useRockstarUser)(), {
            track: _
          } = (0, m.useGtmTrack)(), x = `${document.location.origin}/auth/sc-auth-login?returnUrl=${window.location.pathname}`, {
            ref: j,
            inView: N
          } = (0, d.useInView)({
            threshold: .6
          }), [w, S] = (0, c.useState)(!1);
          let C;
          if ((0, c.useEffect)((() => {
              N && !w && (_({
                event: "page_section_impression",
                element_placement: `callout section - ${y?.sectionName??y?._memoq?.header}`
              }), S(!0))
            }), [N]), !a && !t) return null;
          switch (s) {
            case "vote":
              if (!h) {
                C = (0, u.jsx)(pt, {
                  to: x,
                  className: kt.calloutButton,
                  onClick: b ? () => _({
                    ...b
                  }) : () => {},
                  children: "Log In"
                });
                break
              }
              C = (0, u.jsx)(vt, {
                foreign_id: n,
                foreign_type: o
              });
              break;
            case "button":
              i && r && (C = (0, u.jsx)(pt, {
                to: r,
                className: kt.calloutButton,
                onClick: b ? () => _({
                  ...b
                }) : () => {},
                children: i
              }));
              break;
            case "link":
              i && r && (C = (0, u.jsx)(yt, {
                action_text: i,
                link: r,
                trackingData: b
              }));
              break;
            default:
              C = null
          }
          return (0, u.jsx)("div", {
            className: `${kt.calloutContainer} ${l||""}`,
            ref: j,
            children: (0, u.jsxs)("div", {
              className: kt.calloutSection,
              children: [(0, u.jsxs)("div", {
                className: [kt.calloutHeaders, C ? kt.calloutHeaderMargins : ""].join(" "),
                children: [a && (0, u.jsx)("h2", {
                  className: kt.calloutHeader,
                  children: v(a)
                }), t && (0, u.jsx)("h3", {
                  className: kt.calloutSubheader,
                  children: v(t)
                })]
              }), (0, u.jsxs)("div", {
                className: kt.actionBlock,
                children: [C, g && (0, u.jsx)(ht, {
                  helperText: g,
                  linkText: f,
                  link: p,
                  trackingData: k
                })]
              })]
            })
          })
        })),
        xt = (0, o.defineMessages)({
          components_track_list_title: {
            id: "components_track_list_title",
            defaultMessage: "Tracklist"
          }
        }),
        jt = {
          bodySmall: "rockstargames-sites-legacydeed018133fca0148d0bf72fbe95bcd6"
        },
        Nt = e => {
          let {
            track: a,
            artist: t
          } = e;
          return (0, u.jsxs)("div", {
            className: jt.track,
            children: [(0, u.jsx)("p", {
              children: a
            }), (0, u.jsx)("p", {
              className: jt.bodySmall,
              children: t
            })]
          })
        },
        wt = (0, y.g)((e => {
          let {
            content: a = []
          } = e;
          return (0, u.jsxs)("div", {
            className: "rockstargames-sites-legacye2587587f57e43c9ca90d1e16e4a6ca6",
            children: [(0, u.jsx)("h4", {
              className: "rockstargames-sites-legacyef167f82b058360b2b6a3466ca73d7de",
              children: (0, u.jsx)(o.FormattedMessage, {
                ...xt.components_track_list_title
              })
            }), (0, u.jsx)("div", {
              className: "rockstargames-sites-legacybeaa4a0a8d9f3a6ef20ee517f222a3c2",
              children: (0, u.jsx)("div", {
                className: "rockstargames-sites-legacyc06a65e90847e8b44df20f2aceb57038",
                children: a?.map((e => (0, u.jsx)(Nt, {
                  track: e.track,
                  artist: e.artist
                }, e.key)))
              })
            })]
          })
        })),
        {
          variants: St
        } = s;
      t(46823);
      const Ct = {
          pillBtn: "rockstargames-sites-legacye810afee3cb66fbbb03c473e5aa2f5be",
          selected: "rockstargames-sites-legacye4ad62c1f330692bdb75370f5bbe66eb",
          customModalContent: "rockstargames-sites-legacyc758020ea3f5943e5f8a7d89ade3da69",
          content: "rockstargames-sites-legacydb8d475894c24c580268644776443fa6",
          secondary: "rockstargames-sites-legacyd761507b70662391f68f5018510655ea",
          logo: "rockstargames-sites-legacyf5649436402db0dddc6a55b41c5556cc"
        },
        {
          variants: Tt
        } = s,
        It = e => {
          let {
            id: a,
            logoImage: t = null,
            logoImageHeight: s = "auto",
            name: i = null,
            title: r,
            titleSizeClass: n = null,
            content: l,
            ctaText: d,
            ctaURL: m,
            size: g = "md",
            expandedType: f = "short",
            textOverlayProps: p = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            images: b = [],
            deckProps: k = {},
            to: v = null,
            tina: y = {},
            cardIds: h,
            theme: _
          } = e;
          const x = (0, o.useIntl)(),
            j = (0, S.useTranslations)({
              payload: y?.payload,
              variables: y?.variables ?? {}
            }),
            [N, w] = (0, c.useState)(k?.size ?? g),
            C = (0, S.useGetCdnSource)(t ?? null),
            T = j?.content?.[0],
            I = T?.body ?? T?._memoq?.body;
          return (0, c.useEffect)((() => {
            w(k?.size ?? g)
          }), [k?.size, g]), (0, u.jsx)(Ua, {
            id: a,
            title: r,
            sectionTitle: i || r,
            size: N,
            expandedType: f,
            images: b,
            deckProps: k,
            payload: {
              content: l,
              meta: {}
            },
            variants: Tt.plainCard,
            textOverlayProps: p,
            modalProps: {
              className: Ct.customModal,
              contentClassName: Ct.customModalContent
            },
            expandedCardContents: (0, u.jsx)(et, {
              images: b,
              expandedView: !0
            }),
            theme: _,
            cardIds: h,
            isCoverCard: !0,
            children: (0, u.jsx)(at, {
              expandedType: f,
              to: v,
              sectionTitle: i || r,
              children: (0, u.jsxs)("div", {
                className: Ct.content,
                children: [t && (0, u.jsx)("img", {
                  className: Ct.logo,
                  alt: "logo",
                  src: C,
                  style: {
                    height: `${s}`
                  }
                }), (0, u.jsx)("h2", {
                  className: n,
                  children: r
                }), I && (0, u.jsx)("p", {
                  children: I
                }), (0, u.jsx)(pt, {
                  target: "newtab" === f ? "_blank" : "_self",
                  to: m || void 0,
                  children: d || x.formatMessage(Ga.card_learn_more)
                })]
              })
            })
          })
        };
      var Lt = t(50216);
      const Pt = "rockstargames-sites-legacyb7d3d1587271986440f5870d8d02eb3b",
        Et = "rockstargames-sites-legacyfcffcc6e594fbf9a4a6e9ab5a8d034c7",
        zt = {
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
        Bt = e => {
          let {
            title: a = "thumbnail gallery",
            thumbsPerView: t = 3,
            loop: s = !1,
            navigation: i = !1,
            slideChildren: r = [],
            variants: n = {
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
            track: l
          } = (0, m.useGtmTrack)(), [d, g] = (0, c.useState)([Lt.U1, Lt.WO, Lt.dK]), [f, p] = (0, c.useState)(null), [b, k] = (0, c.useState)(null);
          return (0, c.useEffect)((() => {
            const e = [Lt.U1, Lt.WO, Lt.dK];
            i && e.push(Lt.Vx), g(e)
          }), [i]), (0, c.useEffect)((() => {
            if (!r) return;
            const e = r.map(((e, a) => (0, u.jsx)(oe.qr, {
              children: e
            }, Symbol(a).toString())));
            k(e)
          }), [r]), b ? (0, u.jsxs)(z.motion.div, {
            className: "rockstargames-sites-legacyf2d55de974817e455a162843125a8771",
            variants: n.parent,
            transition: o.parent,
            initial: "initial",
            animate: "animate",
            children: [(0, u.jsx)(z.motion.div, {
              className: Pt,
              variants: n.main,
              transition: o.main,
              initial: "initial",
              animate: "animate",
              children: (0, u.jsx)(oe.RC, {
                loop: s,
                navigation: i,
                pagination: {
                  clickable: !0
                },
                thumbs: {
                  swiper: f
                },
                modules: d,
                breakpoints: zt,
                className: Pt,
                onSlideNextTransitionEnd: () => {
                  l({
                    event: "carousel_next",
                    element_placement: a?.toLowerCase() ?? ""
                  })
                },
                onSlidePrevTransitionEnd: () => {
                  l({
                    event: "carousel_previous",
                    element_placement: a?.toLowerCase() ?? ""
                  })
                },
                onSlideChangeTransitionEnd: () => {
                  l({
                    event: "carousel_swipe",
                    element_placement: a?.toLowerCase() ?? ""
                  })
                },
                children: b
              })
            }), (0, u.jsx)(z.motion.div, {
              className: Et,
              variants: n.thumbs,
              transition: o.thumbs,
              initial: "initial",
              animate: "animate",
              children: (0, u.jsx)(oe.RC, {
                threshold: 50,
                onSwiper: p,
                loop: s,
                breakpoints: zt,
                slidesPerView: t,
                freeMode: !0,
                watchSlidesProgress: !0,
                modules: d,
                className: Et,
                children: b
              })
            })]
          }) : null
        },
        Vt = e => {
          let {
            images: a,
            title: t,
            expandedView: s,
            variants: i,
            transition: r
          } = e;
          const n = (0, c.useMemo)((() => a && 0 !== a?.length ? a.map(((e, a) => e?.image?.sources ? (0, c.createElement)(Ke, {
            ...e,
            key: a,
            style: {
              "--object-position": e?.objectPosition ?? ""
            }
          }) : null)) : null), [a]);
          return !n?.length || n?.length < 1 ? null : 1 === n.length ? n : (0, u.jsx)(Bt, {
            slideChildren: n,
            title: t,
            navigation: s,
            thumbsVisible: s,
            spaceBetween: 0,
            variants: i,
            transition: r
          })
        },
        Dt = {
          pillBtn: "rockstargames-sites-legacycf00b554598ff2d6e233a11c7c829c7d",
          selected: "rockstargames-sites-legacycbdd37e11b752cff831c5a96aeb7dbeb",
          customModalContent: "rockstargames-sites-legacyecdc3da21cda9331cebe845898b7fa7b"
        },
        {
          transitions: Mt,
          variants: $t
        } = s;
      var At = t(23031);
      var Ft = t(15409),
        Ot = t.n(Ft),
        Gt = t(65211);
      const Rt = {
          player: "rockstargames-sites-legacyc7765dd7dbdff24d38ef3326bb8a938b",
          fixedToBottom: "rockstargames-sites-legacyea802f7f67d39cfdd9625cc8de62828f",
          tracksOpen: "rockstargames-sites-legacya9a553961300b8ee030d0c90ac613c4c",
          tracks: "rockstargames-sites-legacyb4036f5fe1d1ab9674cc7c6e40f9a53c",
          iconBurger: "rockstargames-sites-legacya18e526e94dfd87e9b5696a21c1c7754",
          trackList: "rockstargames-sites-legacyc7dfe95abfbec1cdef9dfb87d9fd1a1f",
          trackActive: "rockstargames-sites-legacya74e95cb6296abf8ca92168db76fecb9",
          trackTitle: "rockstargames-sites-legacyeceb3183ee9dc74e33d4184b307ba923",
          trackIndex: "rockstargames-sites-legacyd0322571401b3a4dac22628533213ede",
          controls: "rockstargames-sites-legacyadd02ff2cfa9b26941d96126a31bc21f",
          controlsCurrentBg: "rockstargames-sites-legacycca0f086505f02983f345dfb64c2ca45",
          controlsCurrentBgVisible: "rockstargames-sites-legacyb91004149be94449c7fbfee3d24bde58",
          controlsTrack: "rockstargames-sites-legacyff717d7c9ac30041034f2c95fd3e3017",
          controlsTrackTitle: "rockstargames-sites-legacyf47edf112978c82a9bbfb2476170007f",
          controlsTrackAnimating: "rockstargames-sites-legacyf09973ae8e0457805bc0a1090d05e444",
          scrollText: "rockstargames-sites-legacyb42c9e9ba3716121d34600c92fdf4398",
          controlsTrackArtist: "rockstargames-sites-legacye0b6ffdc4c40a6992d70395cd98cb6c5",
          controlsTrackBurger: "rockstargames-sites-legacyf3106c22742d7b08e577964a56789504",
          controlsButtons: "rockstargames-sites-legacye77442300b4509fe7a0104b3fb4cecf5",
          controlsScrub: "rockstargames-sites-legacyf90cfd862377d31cb5ee1faf9249fd3c",
          controlsPlayPause: "rockstargames-sites-legacyc58746be839199f6102319efb7659a54",
          controlsPlayPausePlaying: "rockstargames-sites-legacycecadc2b92a0597a55ba5870b46706c9",
          controlsNextTrack: "rockstargames-sites-legacycd583d32f7692538f7f5d1181943c899",
          controlsPrevTrack: "rockstargames-sites-legacyd84e8c03d27a3038eb54cb7d12c8ac52",
          controlsScrubTrack: "rockstargames-sites-legacyf4bb886e9545730ccc323f43a1dfb45c"
        },
        Ht = e => {
          let {
            src: a
          } = e;
          return (0, u.jsx)("div", {
            className: Rt.cover,
            style: {
              background: `url(${a}) center/cover`
            }
          })
        },
        qt = e => {
          let {
            timing: a = {
              current: 0,
              duration: 0
            },
            playing: t,
            audioRef: s,
            setPlaying: i,
            tracksOpen: r,
            setTracksOpen: n,
            trackData: o,
            setTrackId: l,
            trackBounds: d,
            setAutoNext: m
          } = e;
          const g = (0, c.useRef)(null),
            f = (0, c.useRef)(null),
            p = (0, c.useRef)(null),
            [b, k] = (0, c.useState)(null),
            [v, y] = (0, c.useState)(!1),
            h = e => {
              const a = new Date(1e3 * e),
                t = a.getUTCMinutes(),
                s = a.getSeconds();
              return `${t.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`
            };
          return (0, c.useEffect)((() => {
            if (!f.current || !p.current) return;
            const e = () => {
              p.current && f.current && k(p.current.clientWidth > f.current.clientWidth)
            };
            return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e)
          }), [p, f, a]), (0, c.useEffect)((() => {
            if (!g.current || !a?.duration) return;
            let e = null;
            const t = new(Ot())(g.current),
              i = e => {
                if (g.current) {
                  const t = g.current.clientWidth;
                  if (!g.current.contains(e.srcEvent.target)) return;
                  const i = Math.max(0, e.srcEvent.offsetX),
                    r = Number(i / t * a.duration);
                  s.currentTime = r
                }
              },
              r = () => {
                e ? s.pause() : s.play()
              },
              n = () => {
                e = s.paused, s.pause()
              };
            return t.on("panstart", n), t.on("panleft", i), t.on("panright", i), t.on("panend", r), t.on("tap", i), () => {
              t.off("panstart", n), t.off("panleft", i), t.off("panright", i), t.off("panend", r), t.off("tap", i)
            }
          }), [g.current, a.duration]), (0, c.useEffect)((() => {
            const e = Number(s?.currentTime);
            (t || !isNaN(e) && 0 !== e) && y(!0)
          }), [t, s?.currentTime]), (0, u.jsxs)("div", {
            className: Rt.controls,
            style: {
              "--track-color": o.color,
              "--track-mix-blend-mode": o.mix_blend_mode,
              "--current-pct": a.current / a.duration
            },
            children: [(0, u.jsx)("div", {
              className: [Rt.controlsCurrentBg, v ? Rt.controlsCurrentBgVisible : ""].join(" ")
            }), (0, u.jsx)("div", {
              className: Rt.controlsTrack,
              ref: f,
              children: (0, u.jsx)("span", {
                className: [Rt.controlsTrackTitle, b ? Rt.controlsTrackAnimating : ""].join(" "),
                ref: p,
                children: o.title
              })
            }), (0, u.jsxs)("div", {
              className: Rt.controlsButtons,
              children: [(0, u.jsx)("div", {
                className: Rt.controlsPrevTrack,
                onClick: () => {
                  d && (l(d[0]), m(!0), i(!0))
                }
              }), (0, u.jsx)("div", {
                className: [Rt.controlsPlayPause, t ? Rt.controlsPlayPausePlaying : ""].join(" "),
                onClick: () => {
                  i(!t)
                }
              }), (0, u.jsx)("div", {
                className: Rt.controlsNextTrack,
                onClick: () => {
                  d && (l(d[1]), m(!0), i(!0))
                }
              })]
            }), (0, u.jsx)("div", {
              active: r ? "" : null,
              className: Rt.controlsTrackBurger,
              children: (0, u.jsx)("div", {
                className: Rt.iconBurger,
                onClick: () => {
                  n(!r)
                }
              })
            }), (0, u.jsxs)("div", {
              className: Rt.controlsScrub,
              children: [(0, u.jsx)("span", {
                children: h(a.current)
              }), (0, u.jsx)("div", {
                className: Rt.controlsScrubTrack,
                ref: g
              }), (0, u.jsx)("span", {
                children: h(a.duration)
              })]
            })]
          })
        },
        Ut = e => {
          let {
            tracks: a,
            trackId: t,
            setTrackId: s,
            tracksOpen: i,
            setTracksOpen: r,
            setPlaying: n,
            setAutoNext: c
          } = e;
          return (0, u.jsxs)("div", {
            className: Rt.tracks,
            children: [(0, u.jsx)("h4", {
              children: "Tracks"
            }), (0, u.jsx)("div", {
              className: Rt.trackBurger,
              onClick: () => {
                r(!i)
              }
            }), (0, u.jsx)("div", {
              className: Rt.trackList,
              children: a.map(((e, a) => (0, u.jsxs)("a", {
                style: {
                  "--highlight-color": e.color
                },
                className: t === e.id ? Rt.trackActive : "",
                onClick: () => {
                  s(e.id), n(!0), c(!0)
                },
                children: [(0, u.jsx)("span", {
                  className: Rt.trackIndex,
                  children: String(a + 1).padStart(2, "0")
                }), (0, u.jsx)("span", {
                  className: Rt.trackTitle,
                  children: e.title
                }), (0, u.jsx)("span", {
                  className: Rt.trackTime,
                  children: e.duration
                })]
              }, e.id)))
            })]
          })
        },
        Wt = e => {
          let {
            id: a,
            className: t = ""
          } = e;
          const {
            data: s
          } = (0, l.useQuery)(Gt.GetAudioAlbum, {
            variables: {
              id: a
            }
          }), [i, r] = (0, c.useState)(), [n, o] = (0, c.useState)(), [d, m] = (0, c.useState)(), [g, f] = (0, c.useState)(!1), [p, b] = (0, c.useState)(!1), [k, v] = (0, c.useState)(new HTMLAudioElement), [y, h] = (0, c.useState)({
            current: 0,
            duration: 0
          }), [_, x] = (0, c.useState)(!0);
          return (0, c.useEffect)((() => {
            const e = "audio",
              a = a => {
                a?.data?.rockstarAudioPlayerPlayTrackId && (o(a.data.rockstarAudioPlayerPlayTrackId), x(!1), b(!0)), p && a?.data?.attentionBlurredElsewhere && a?.data?.from !== e && b(!1)
              };
            return p && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: e
            }), window.addEventListener("message", a, !1), () => window.removeEventListener("message", a, !1)
          }), [p]), (0, c.useEffect)((() => {
            if (!k) return;
            const e = () => {
                isNaN(k.duration) || h({
                  duration: k?.duration ?? 0,
                  current: k?.currentTime ?? 0
                })
              },
              a = () => {
                _ && i && o(i[1])
              };
            return k.addEventListener("loadedmetadata", e), k.addEventListener("timeupdate", e), k.addEventListener("ended", a), () => {
              k.removeEventListener("loadedmetadata", e), k.removeEventListener("timeupdate", e), k.removeEventListener("ended", a)
            }
          }), [k, i, _]), (0, c.useEffect)((() => {
            p && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: "audio"
            })
          }), [p]), (0, c.useEffect)((() => {
            k && (p ? k.play() : k.pause(), f(!1))
          }), [p, k, d?.id]), (0, c.useEffect)((() => {
            if (!n) return;
            const {
              tracks: e
            } = s.audioAlbum, a = s.audioAlbum.tracks.findIndex((e => e.id === n));
            r([e[a - 1]?.id ?? e[e.length - 1].id, e[a + 1]?.id ?? e[0].id]), m(e[a])
          }), [n]), (0, c.useEffect)((() => {
            s && o(s.audioAlbum.tracks[0].id)
          }), [s]), d ? (0, u.jsxs)("div", {
            className: [Rt.player, Rt[t], g ? Rt.tracksOpen : ""].join(" "),
            children: [(0, u.jsx)("audio", {
              ref: e => {
                v(e)
              },
              src: d.mp3_src
            }), (0, u.jsx)(Ut, {
              tracks: s.audioAlbum.tracks,
              setTrackId: o,
              trackId: n,
              tracksOpen: g,
              setTracksOpen: f,
              setPlaying: b,
              setAutoNext: x
            }), (0, u.jsx)(Ht, {
              src: d.cover_src
            }), (0, u.jsx)(qt, {
              setTrackId: o,
              trackBounds: i,
              tracksOpen: g,
              setTracksOpen: f,
              playing: p,
              setPlaying: b,
              timing: y,
              trackData: d,
              audioRef: k,
              setAutoNext: x
            })]
          }) : null
        };
      var Kt = t(35292);
      const Qt = {
          pillBtn: "rockstargames-sites-legacya76545929bba4f1522661c9f297ea3c5",
          selected: "rockstargames-sites-legacye5b12527bec7eae7fce9642c9827cc3b",
          plusButton: "rockstargames-sites-legacyb35e9ba36ecaabe08c02c44808110761",
          small: "rockstargames-sites-legacyb3ba679464048120f8440e7ae0d14086",
          btnText: "rockstargames-sites-legacye146813e6b911567a15379239351bb9f",
          btnTexticon: "rockstargames-sites-legacyadd785fa73d6a7f8cdf490add2819974",
          whiteBtn: "rockstargames-sites-legacyd94aba4fb4bae812e14f8715816752c2",
          blackBtn: "rockstargames-sites-legacyd3207a3907ff5e6cc1498c67d5562087",
          transparentBtn: "rockstargames-sites-legacyd4515b6bf9a4c714239cac9e27932235",
          iconBtn: "rockstargames-sites-legacya305be36306fd7f0977b052ccab54910",
          link: "rockstargames-sites-legacya73b743df91203999c432aceb1093e62",
          xboxone: "rockstargames-sites-legacycadebea37980f01b56560143374013b3",
          xboxseriesxs: "rockstargames-sites-legacyc28e2bcbd4ed4fc95b67860cb7033999",
          ps4: "rockstargames-sites-legacyaf1b302b53e77d0da20f92de2973fd29",
          ps5: "rockstargames-sites-legacyb5164622a2b180ed2b04eab4d489763b",
          pc: "rockstargames-sites-legacyc4a7b17bb99afb02a9f9b9b133be7844"
        },
        Yt = e => {
          let {
            children: a,
            className: t,
            onClick: s,
            style: i,
            ariaLabel: r
          } = e;
          return (0, u.jsx)("button", {
            className: t,
            onClick: s,
            style: i,
            type: "button",
            "aria-label": r,
            children: a
          })
        },
        Xt = e => {
          let {
            children: a,
            className: t,
            onClick: s,
            style: i,
            to: r,
            ariaLabel: n
          } = e;
          return (0, u.jsx)(X.NavLink, {
            className: t,
            onClick: s,
            style: i,
            to: r,
            "aria-label": n,
            children: a
          })
        },
        Zt = e => {
          let {
            btnColor: a = "#fff",
            className: t = "",
            consoleBtn: s,
            icon: i = "",
            img: r,
            labelColor: n = "#000",
            onClick: c,
            secondText: o,
            size: l,
            text: d,
            to: m,
            type: g = "",
            ariaLabel: f
          } = e;
          const p = [Qt.plusButton, Qt[g] ?? "", Qt[l] ?? "", Qt[s] ?? "", t].join(" "),
            b = {
              "--hvr-color": a ?? n,
              "--hvr-bg-color": n ?? a,
              "--hvr-border-color": a ?? n
            },
            k = (0, u.jsxs)(u.Fragment, {
              children: [r ? (0, u.jsx)("img", {
                src: r,
                alt: ""
              }) : "", (0, u.jsxs)("div", {
                className: Qt.btnText,
                icon: i,
                children: [d, o ? (0, u.jsx)("span", {
                  children: o
                }) : ""]
              })]
            });
          if (m) {
            if (m.startsWith("http")) {
              const e = m.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, u.jsx)("span", {
                onClick: c,
                onKeyDown: c,
                className: p,
                role: "button",
                "aria-label": f,
                tabIndex: 0,
                children: (0, u.jsx)("a", {
                  href: m,
                  target: e,
                  children: k
                })
              })
            }
            return (0, u.jsx)(Xt, {
              className: p,
              onClick: c,
              style: {
                ...b
              },
              to: m,
              ariaLabel: f,
              children: k
            })
          }
          return (0, u.jsx)(Yt, {
            className: p,
            onClick: c,
            style: {
              ...b
            },
            ariaLabel: f,
            children: k
          })
        },
        Jt = e => {
          let {
            buttons: a = [],
            className: t
          } = e;
          return a.length ? (0, u.jsx)("div", {
            className: (0, l.classList)("rockstargames-sites-legacybbd74dec556da7f5c06710c72c662f8a", t),
            children: a.map(((e, a) => {
              let {
                icon: t,
                title: s,
                to: i
              } = e;
              return s ? (0, u.jsx)(Zt, {
                icon: t,
                text: s,
                to: i
              }, a) : ""
            }))
          }) : null
        },
        es = (0, t(65297).FF)(),
        as = e => e.some((e => !e)),
        ts = e => {
          let {
            condition: a = null,
            children: t
          } = e;
          const [s, i] = (0, c.useState)(!1), r = (e => {
            const [a] = (0, X.useSearchParams)(), [t, s] = (0, c.useState)(null), i = (0, m.useRockstarUser)(), {
              loggedIn: r,
              data: n
            } = i, {
              hasGtaPlus: o
            } = n ?? {};
            return (0, c.useEffect)((() => {
              const t = "true" === a.get("conditionPreview");
              if (!e?.length > 0) return;
              es.applyFilters("preview_conditions", e);
              const i = [];
              return e.forEach((e => {
                const {
                  value: s
                } = e;
                if (t) return "true" === a.get(s) ? (i.push(!0), !0) : (i.push(!1), !1);
                if (as(i)) return !1;
                switch (s) {
                  case "user:is:loggedIn":
                    i.push(!0 === r);
                    break;
                  case "user:not:loggedIn":
                    i.push(!1 === r);
                    break;
                  case "user:is:gtaPlus":
                    i.push(!0 === o);
                    break;
                  case "user:not:gtaPlus":
                    i.push(!1 === o);
                    break;
                  default:
                    i.push(!1)
                }
                return null
              })), s(!as(i)), () => {}
            }), [a, e, o, i, r]), t
          })(a);
          return (0, c.useEffect)((() => {
            i(r)
          }), [r]), (0, c.useMemo)((() => s ? t : null), [s])
        },
        ss = (0, l.withTranslations)((e => {
          let {
            children: a
          } = e;
          return c.Children.map(c.Children.toArray(a), (e => (0, u.jsx)(ts, {
            ...e?.props
          })))
        }));
      var is = t(57232),
        rs = t(89841),
        ns = t.n(rs);
      const cs = e => {
        let {
          isMulti: a,
          allowSelectAll: t,
          label: s,
          miscProps: i
        } = e;
        const [r, n] = (0, c.useState)(""), o = (0, c.useMemo)((() => ns()().getData()), []);
        return (0, u.jsx)(is.Ay, {
          unstyled: !0,
          value: r,
          isMulti: a,
          allowSelectAll: t,
          options: o,
          placeholder: s,
          onChange: e => {
            return a = e?.target?.value, void n(a);
            var a
          },
          classNamePrefix: "country-select",
          ...i
        })
      };
      var os = t(37415);
      const ls = e => {
          let {
            cookieName: a,
            cookieValue: t,
            trueComponent: s,
            falseComponent: i
          } = e;
          const r = (e => {
              const a = document.cookie.split("; "),
                t = `${e}=`,
                s = a.find((e => e.startsWith(t)));
              return s?.substring(t.length, s.length)
            })(a),
            n = new URLSearchParams(window.location.search).get(a);
          return n && ((e, a) => {
            e && a && (document.cookie = `${e}=${a}; domain=${(0,os.F)()}; path=/;`)
          })(a, n), r === t || n === t ? s : i
        },
        ds = "rockstargames-sites-legacya19bcd2b98d91e60c43b9de146e20f4e",
        ms = e => {
          let {
            color: a
          } = e;
          return (0, u.jsxs)("div", {
            className: "rockstargames-sites-legacye83fe07aa054242e9023d2f9e7a3fd25",
            style: {
              "--loader-color": a
            },
            children: [(0, u.jsx)("div", {
              className: ds
            }), (0, u.jsx)("div", {
              className: ds
            }), (0, u.jsx)("div", {
              className: ds
            })]
          })
        };
      var gs = t(24098);
      const us = {
          dropdownWrapper: "rockstargames-sites-legacybbf48ac7e790ff47ad1d5ee6fb7da4d9",
          items: "rockstargames-sites-legacya9afd60434d032bdba4ce040dbeb13b7",
          open: "rockstargames-sites-legacydf17f0cb21e0947d4f391f915bd797d2",
          opener: "rockstargames-sites-legacycb53c003fd165ccb31dee0f32edca90f",
          secondary: "rockstargames-sites-legacyfe6babf9fc35bb59a2b5225e4d6e7a50"
        },
        fs = e => {
          let {
            children: a,
            className: t,
            title: s
          } = e;
          const [i, r] = (0, c.useState)(!1);
          let n = null;
          return n = gs.Ay, (0, u.jsx)(n, {
            disabled: !i,
            children: (0, u.jsxs)("div", {
              className: [us.dropdownWrapper, i ? us.open : "", void 0 !== t ? t : ""].join(" "),
              children: [(0, u.jsx)("button", {
                className: us.opener,
                onClick: () => r(!i),
                children: s
              }), i && (0, u.jsx)("div", {
                className: us.items,
                onClick: () => r(!1),
                children: a
              })]
            })
          })
        },
        ps = e => {
          let {
            caption: a,
            children: t,
            ...s
          } = e;
          return a ? (0, u.jsxs)("figure", {
            ...s,
            children: [t, (0, u.jsx)("figcaption", {
              dangerouslySetInnerHTML: {
                __html: a
              }
            })]
          }) : t
        },
        bs = e => {
          let {
            componentTitle: a,
            type: t,
            items: s
          } = e;
          return s?.length ? (0, u.jsx)("div", {
            className: "rockstargames-sites-legacyaee2a98f97e777758e2d9bec034314ee",
            type: t,
            children: (0, u.jsxs)(gt, {
              children: [a && (0, u.jsx)("h3", {
                children: a
              }), (0, u.jsx)(gt, {
                className: "rockstargames-sites-legacydba17b5c55f8d40e2600765f1a60d6af",
                children: s.map(((e, a) => {
                  return e?.embed ? (0, u.jsx)(ps, {
                    caption: e?.caption,
                    children: (0, u.jsx)("div", {
                      className: "rockstargames-sites-legacyf0cd8278232673606f9c1715bd4950f6",
                      dangerouslySetInnerHTML: {
                        __html: (t = e.embed, t.replace(/&gt;/g, ">").replace(/&lt;/g, "<"))
                      }
                    }, `${e?.key??a}_div`)
                  }, e?.key ?? a) : e?.text ? (0, u.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: e.text
                    }
                  }, e?.key ?? a) : void 0;
                  var t
                }))
              })]
            })
          }) : null
        },
        ks = {
          open: {
            opacity: 0,
            transition: {
              ease: "easeOut",
              duration: .3
            }
          },
          closed: {
            opacity: 1,
            transition: {
              ease: "easeOut",
              duration: .9,
              delay: .3
            }
          }
        },
        vs = {
          open: {
            "--cta-border-color": "var(--white-15)",
            "--cta-background-color": "rgba(255,255,255,.1)",
            "--cta-background-color-noBlur": "var(--black-100)",
            gridGap: "var(--grid-gap-sm)",
            "--btn-hover-bg-color": "var(--black-15)",
            "--btn-hover-bg-color-noBlur": "var(--black-100)",
            "--btn-hover-font-color": "var(--white-100)",
            "--btn-hover-border-color": "var(--white-15)"
          },
          closed: {
            "--cta-border-color": "var(--white-100)",
            "--cta-background-color": "var(--black-15)",
            "--cta-background-color-noBlur": "var(--black-15)",
            gridGap: 0,
            transition: {
              type: "spring",
              stiffness: 650,
              damping: 45
            },
            transitionEnd: {
              "--btn-hover-bg-color": "var(--white-100)",
              "--btn-hover-bg-color-noBlur": "var(--white-100)",
              "--btn-hover-font-color": "var(--black-100)",
              "--btn-hover-border-color": "var(--white-100)"
            }
          }
        },
        ys = {
          pillBtn: "rockstargames-sites-legacyed7115facef4ace39e8c7486e9066fe1",
          selected: "rockstargames-sites-legacye7705468e2dbcfc45d23ef5047671698",
          container: "rockstargames-sites-legacyfc8f7fb18de952e853977b6df36af26a",
          content: "rockstargames-sites-legacyb12c469ae4536819db4253c10b2cd11d",
          expandedButton: "rockstargames-sites-legacybb945d977a4db6fdd9206dbfe8581304",
          unexpandedButton: "rockstargames-sites-legacyeaa10e0601812da4ea334974165d92ec",
          buttonText: "rockstargames-sites-legacyc240c5768c5acdd2bc6022568ef877f0",
          expandedArea: "rockstargames-sites-legacye752e3ffffce454f84c993a62a279f87",
          closeButton: "rockstargames-sites-legacyee432a5defea7b8181973d3a9ad3190b",
          platformButtons: "rockstargames-sites-legacye950c05307f67ce36d561a09027fd844",
          platformButton: "rockstargames-sites-legacyfa40c93ee13fdec88bb8dc08ce36353a",
          xbox: "rockstargames-sites-legacye6c21e19f66ac6c50547342d3dd72dd4",
          xboxone: "rockstargames-sites-legacyc03015dbaf51a94ba1826bb21f5d040f",
          xboxseriesxs: "rockstargames-sites-legacydde1b553776bdd59373d22a43479de29",
          ps: "rockstargames-sites-legacydd89bc9ad4dba162494e28c6358baa41",
          ps4: "rockstargames-sites-legacyed20f3369b590314810f7996943fdaa4",
          ps5: "rockstargames-sites-legacyf046700558956d566323b32d87c4a54f",
          pc: "rockstargames-sites-legacyffc20241c500599d4ee134fcffd66961",
          applestore: "rockstargames-sites-legacye68d88a0e9f24a2f0bcf7da8a0e1b388",
          googleplay: "rockstargames-sites-legacyd0d623dce429f6ae2fd898e1d551257e",
          switch: "rockstargames-sites-legacye8e3ea0f1d334667f3928f696308060e"
        },
        hs = e => {
          let {
            buttonText: a = "",
            link: s = "",
            platform: i = "",
            target: r = null,
            onClick: n,
            tabIndex: c
          } = e;
          const o = r ?? (s.startsWith(document.location.origin) ? "_self" : "_blank"),
            l = [ys.platformButton, ys[i]].join(" "),
            d = i ? t(5328)(`./${i}.svg`) : null,
            m = (0, u.jsxs)(u.Fragment, {
              children: [d ? (0, u.jsx)("img", {
                src: d,
                alt: a
              }) : "", !d && (0, u.jsx)("div", {
                className: ys.buttonText,
                children: a
              })]
            });
          return s.startsWith("http") ? (0, u.jsx)("a", {
            href: s,
            className: l,
            target: o,
            onClick: n,
            "aria-label": a,
            tabIndex: c,
            children: m
          }) : (0, u.jsx)(X.NavLink, {
            className: l,
            onClick: n,
            to: s,
            "aria-label": a,
            children: m
          })
        },
        _s = e => {
          let {
            variant: a,
            buttonText: s = "Subscribe",
            buttonClassName: i,
            className: r,
            children: n,
            platformsAndLinks: o = [],
            trackingType: d = "buy",
            trackingParent: g,
            target: f = null,
            trackingOId: p = null
          } = e;
          const [b, k] = (0, c.useState)(!1), [v, y] = (0, c.useState)(!1), [h, _] = (0, c.useState)(200), {
            track: x
          } = (0, m.useGtmTrack)(), j = (0, c.useRef)(null), N = (0, c.useRef)(b), w = (0, c.useRef)(null);
          (0, c.useEffect)((() => {
            N.current = b
          }), [b]), (0, c.useEffect)((() => {
            const e = e => {
              N && !j?.current?.contains(e.target) && k(!1)
            };
            return document.addEventListener("click", e), () => {
              document.removeEventListener("click", e)
            }
          }), []), (0, c.useEffect)((() => {
            const e = () => {
              b && (y(!0), k(!1))
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [b]), (0, c.useEffect)((() => {
            if (j?.current) {
              const e = 1e3 * Number(getComputedStyle(j.current).getPropertyValue("--expandingPlatformButton-expandDuration").replace("ms", "").replace("s", ""));
              _(isNaN(e) ? 200 : e)
            }
          }), []), (0, c.useEffect)((() => {
            v && setTimeout((() => {
              y(!1)
            }), h)
          }), [v]);
          const S = e => {
            let {
              href: a,
              platform: t
            } = e;
            return () => {
              x({
                element_placement: g,
                event: "cta_store_link",
                link_url: a,
                text: t
              })
            }
          };
          return (0, u.jsxs)("div", {
            className: (0, l.classList)(ys.container, r),
            children: [(0, u.jsx)(z.motion.div, {
              className: ys.content,
              animate: b ? "open" : "close",
              variants: ks,
              "aria-hidden": !!b,
              children: n
            }), (0, u.jsxs)(z.motion.div, {
              "data-variant": a,
              "data-animating": v,
              className: lt()(b ? ys.expandedButton : ys.unexpandedButton),
              animate: b ? "open" : "closed",
              variants: vs,
              initial: !1,
              ref: j,
              children: [(0, u.jsx)(z.motion.button, {
                className: lt()(ys.buttonText, i),
                "aria-expanded": b,
                onClick: () => {
                  if (y(!0), k(!b), !b) switch (d) {
                    case "select_platform":
                      x({
                        element_placement: g,
                        event: "select_platform",
                        text: s?.toLowerCase() ?? "subscribe"
                      });
                      break;
                    case "link_account":
                      x({
                        element_placement: g,
                        event: "cta_link_account",
                        o_id: p,
                        text: s?.toLowerCase()
                      });
                      break;
                    case "buy":
                      x({
                        element_placement: g,
                        event: "cta_buy",
                        text: s?.toLowerCase() ?? "subscribe"
                      });
                      break;
                    case "store_link":
                      x({
                        element_placement: g,
                        event: "cta_store_link",
                        text: s?.toLowerCase()
                      });
                      break;
                    case "other":
                      x({
                        element_placement: g,
                        event: "cta_other",
                        text: s?.toLowerCase()
                      })
                  }
                },
                tabIndex: b ? -1 : 0,
                children: "string" == typeof s ? s : "Subscribe"
              }), (0, u.jsx)("div", {
                className: ys.expandedArea,
                ref: w,
                "data-animate": b ? "open" : "closed",
                "aria-hidden": !b,
                style: {
                  height: b ? w?.current?.scrollHeight : 0
                },
                children: (0, u.jsxs)("div", {
                  children: [(0, u.jsx)("button", {
                    className: ys.closeButton,
                    onClick: () => {
                      k(!1), y(!0), x({
                        element_placement: g,
                        event: "cta_other",
                        text: "close expanding platform button"
                      })
                    },
                    "aria-label": "Close",
                    tabIndex: b ? 0 : -1,
                    children: (0, u.jsx)("img", {
                      src: t(66426),
                      alt: "Close"
                    })
                  }), (0, u.jsx)("div", {
                    className: ys.platformButtons,
                    children: o.length ? o.map((e => (0, u.jsx)(hs, {
                      buttonText: e.buttonText ?? (0, l.findPlatform)(e.platform)?.friendlyName ?? "",
                      link: e.href,
                      platform: e.platform,
                      onClick: S(e),
                      target: f,
                      tabIndex: b ? 0 : -1
                    }, `${e.key}-${e.href}-${e.platform}`))) : ""
                  })]
                })
              })]
            })]
          })
        },
        xs = {
          animateBox: "rockstargames-sites-legacyb07a3be6338e0ba4b346b072762582e3",
          fadeArea: "rockstargames-sites-legacyf47504b50907dd0fd609719dad3f62bd",
          visible: "rockstargames-sites-legacyc121e11e40215dc778fe8665eb38845d",
          barGrow: "rockstargames-sites-legacye0262d00df9ad8a47b08ae84160bfa51",
          bar: "rockstargames-sites-legacybbb7e636ac00581aed0b7e148916cc11",
          animateMe: "rockstargames-sites-legacyf7adfd0186421cac9ad0b300911cc9af"
        },
        js = e => {
          let {
            children: a,
            style: t
          } = e;
          const s = (0, c.useRef)(null);
          return (0, c.useEffect)((() => {
            new IntersectionObserver((e => {
              e.forEach((e => {
                e.isIntersecting && e.target.classList.add([xs.visible])
              }))
            })).observe(s?.current)
          }), []), (0, u.jsx)("div", {
            style: t,
            className: [xs.fadeArea].join(" "),
            ref: s,
            children: a
          })
        },
        Ns = e => {
          let {
            prevRef: a,
            nextRef: t,
            onNextClicked: s,
            onPrevClicked: i,
            onNextKeyDown: r,
            title: n
          } = e;
          return (0, u.jsxs)("div", {
            "aria-controls": `${n}-carousel`,
            "aria-label": `${n} carousel buttons`,
            className: "rockstargames-sites-legacyb8d5ef10008331a9f6d3a6bdf1690d01",
            role: "group",
            children: [(0, u.jsx)("button", {
              className: "rockstargames-sites-legacyc38cd500d52d07bd012e288dc0b4f635",
              ref: a,
              onClick: i,
              "aria-label": "Previous"
            }), (0, u.jsx)("button", {
              className: "rockstargames-sites-legacyb24ada0f7959966c6d950567eaaafce2",
              ref: t,
              onClick: s,
              onKeyDown: r,
              "aria-label": "Next"
            })]
          })
        },
        ws = p((e => {
          let {
            description: a,
            slideChildren: t,
            size: s,
            title: i,
            name: r,
            customSlidesPerView: n = null,
            customSpaceBetween: o = null,
            slideClass: g,
            style: f,
            className: p,
            cardSizeBreakpoints: b,
            customAspectRatio: k,
            titleBadge: v,
            theme: y
          } = e;
          const {
            track: h
          } = (0, m.useGtmTrack)(), _ = (0, c.useRef)(null), x = (0, c.useRef)(null), j = (0, c.useRef)(null), [N, w] = (0, c.useState)(null), [S, C] = (0, c.useState)(!1), [T, I] = (0, c.useState)(null), [L, P] = (0, c.useState)(), [E, z] = (0, c.useState)(), {
            ref: B,
            inView: V
          } = (0, d.useInView)({
            threshold: .6
          }), [D, M] = (0, c.useState)(!1), [$, A] = (0, c.useState)(null), [F, O] = (0, c.useState)(!1), [G, R] = (0, c.useState)(0), [H, q] = (0, c.useState)(0);
          (0, c.useEffect)((() => {
            const e = () => {
              O(window.innerWidth < 1024)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, c.useEffect)((() => {
            const e = () => {
              L && !(0, Ae.isEmpty)(L) && L?.height > 0 && L?.height !== G && R(L?.height)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [L]);
          const U = {
            0: {
              spaceBetween: o ?? 16
            },
            1024: {
              spaceBetween: o ?? 18
            },
            1920: {
              spaceBetween: o ?? 20
            },
            2560: {
              spaceBetween: o ?? 22
            }
          };
          (0, c.useEffect)((() => {
            if (!_.current) return;
            const e = () => {
              if (_.current) {
                const e = n || Number(window.getComputedStyle(_.current).getPropertyValue("--slides-per-view")),
                  a = n ? 1 : Number(window.getComputedStyle(_.current).getPropertyValue("--slides-per-view-multiplier"));
                I(e * a)
              }
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [_, n]), (0, c.useEffect)((() => {
            if (!t) return;
            let e = !1;
            t.forEach((a => {
              "cover-card" === a?.props?.tina?.payload?.meta?.type && (e = !0, A(a))
            })), M(e);
            const a = t.map(((e, a) => "cover-card" === e?.props?.tina?.payload?.meta?.type && F ? null : (0, u.jsx)(oe.qr, {
              className: "rockstargames-sites-legacyad67cb8db28ddf18d185f85a3d54b06f",
              onFocus: () => Q(a),
              role: "button",
              children: e
            }, e.key)));
            w(a)
          }), [t, F]), (0, c.useEffect)((() => {
            z({
              nextEl: j.current,
              prevEl: x.current
            })
          }), [j, x]), (0, c.useEffect)((() => {
            V && !S && t && (h({
              event: "page_section_impression",
              element_placement: (r || i).toLowerCase()
            }), C(!0))
          }), [V, t]);
          let W = "custom" === s ? {
            "--custom-aspect-ratio": k,
            ...f
          } : {
            ...f
          };
          const K = 0 !== G ? `${G}px` : "100%";
          W = {
            ...W,
            "--carousel-cards-height": K,
            "--carousel-nav-opacity": H
          };
          const Q = e => {
            L?.slideTo(e)
          };
          return (0, u.jsxs)("section", {
            "aria-label": i,
            className: (0, l.classList)("rockstargames-sites-legacyf20b52f7c3f9003cd00811a47a04bf10", p),
            "data-size": s,
            "data-sm": b?.sm ? b?.sm : s,
            "data-md": b?.md ? b?.md : s,
            "data-lg": b?.lg ? b?.lg : s,
            "data-xl": b?.xl ? b?.xl : s,
            "data-xxl": b?.xxl ? b?.xxl : s,
            "data-has-covercard": D,
            "data-new-carousel-nav": !0,
            id: `${i}-carousel`,
            "data-theme": y,
            ref: _,
            style: W,
            children: [(0, u.jsx)("div", {
              className: "rockstargames-sites-legacyaeafe767d91d07fab61f307b5bbffeef",
              ref: B
            }), D && F && (0, u.jsx)("div", {
              className: "rockstargames-sites-legacydef6705cfe82c4e562f3c71c78bc5248",
              children: $
            }), (0, u.jsx)("div", {
              className: "rockstargames-sites-legacyb093fac5b0d056a4a00f34d0418c6577",
              children: (0, u.jsxs)("div", {
                className: "rockstargames-sites-legacydcef10ca0aa4165afec829cc4474b8b7",
                children: [(0, u.jsxs)("div", {
                  className: "rockstargames-sites-legacyb83b41754b7e9ac95c806264014db990",
                  children: [!D && i && (0, u.jsxs)("div", {
                    className: "rockstargames-sites-legacyc8e04a547988dacbae8960776862f15f",
                    children: [(0, u.jsx)("h2", {
                      children: i
                    }), v && (0, u.jsx)("span", {
                      className: "rockstargames-sites-legacyc3de2db74771fdba023cc2b11b216955",
                      children: v
                    })]
                  }), (0, u.jsx)(Ns, {
                    prevRef: x,
                    nextRef: j,
                    onNextClicked: () => {},
                    onPrevClicked: () => {},
                    onNextKeyDown: e => {
                      if ("Tab" === e.key && !e.shiftKey) {
                        const a = L?.slides[L?.activeIndex].querySelector('a, button, [role="button"]');
                        a && a?.tabIndex > -1 && (e.preventDefault(), a.focus())
                      }
                    },
                    title: i,
                    theme: y
                  })]
                }), a && (0, u.jsx)("div", {
                  className: "rockstargames-sites-legacya1497e1cd7844ff158955c0afe2fd3b8",
                  dangerouslySetInnerHTML: {
                    __html: a
                  }
                })]
              })
            }), T ? (0, u.jsx)(oe.RC, {
              slidesPerView: T,
              onInit: e => {
                P(e);
                const a = setInterval((() => {
                  const {
                    height: t
                  } = e;
                  t > 0 && (R(t), q(1), clearInterval(a))
                }), 500)
              },
              grabCursor: !0,
              navigation: E,
              modules: [Lt.Vx],
              breakpoints: U,
              slideClass: (0, l.classList)("swiper-slide", g),
              onSlideNextTransitionEnd: () => {
                h({
                  event: "carousel_next",
                  element_placement: i?.toLowerCase() ?? ""
                })
              },
              onSlidePrevTransitionEnd: () => {
                h({
                  event: "carousel_previous",
                  element_placement: i?.toLowerCase() ?? ""
                })
              },
              onSlideChangeTransitionEnd: () => {
                h({
                  event: "carousel_swipe",
                  element_placement: i?.toLowerCase() ?? ""
                })
              },
              children: N
            }) : ""]
          })
        }), null),
        Ss = {
          pillBtn: "rockstargames-sites-legacyb89f190ffa4d32a33304ffa4b5ff73df",
          selected: "rockstargames-sites-legacyb5c12cc9810c7b3774102378f71714a1",
          hero: "rockstargames-sites-legacydccb6453f49a8e81c4ec407c39df4c79",
          images: "rockstargames-sites-legacyd5fdc650fc4f2f7441ce7c563ae9653e",
          background: "rockstargames-sites-legacyc8c90210c344650ad11d2d97258dcaab",
          gradient: "rockstargames-sites-legacyd074051a93eac66cd56c616c8ccd4c91",
          layered: "rockstargames-sites-legacyc58f0111e3765dc6116481764d0431d0",
          content: "rockstargames-sites-legacye4bb4024fb4b167423f58e02e471bf5e",
          descriptions: "rockstargames-sites-legacya54e628f4898aed20e45ad8a5e39af7f",
          buttonGroup: "rockstargames-sites-legacyb8a0dc337c7ea835340f88b0f6d14822",
          ctaBlock: "rockstargames-sites-legacyc3f1f785f5adb5cfcbf93195e21521e6",
          verticalCtaBlock: "rockstargames-sites-legacyde8ee9092175484396cd56d19aec7cbd",
          primaryBtn: "rockstargames-sites-legacyd273ee25efe0a98d789db801a1a18e97",
          secondaryBtn: "rockstargames-sites-legacyaf112e1264860cebe9be5f542d47ec27",
          btnText: "rockstargames-sites-legacye8ca7c699fe44c30cf4e542ee8b22119",
          legalText: "rockstargames-sites-legacybdbadc8b5ef295a4122905fffdde18f6",
          shardsCarousel: "rockstargames-sites-legacycd8c6fbe5139a661c2e52e9df726ca78"
        },
        Cs = {
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
        Ts = {
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
        Is = e => {
          let {
            title: a = "",
            mobileImg: t,
            desktopImg: s
          } = e;
          const i = (0, S.useGetCdnSource)(t ?? null),
            r = (0, S.useGetCdnSource)(s ?? i);
          return (0, u.jsx)("div", {
            className: Ss.shard,
            style: {
              "--background-image-mobile": `url(${i})`,
              "--background-image-desktop": `url(${r})`
            },
            children: (0, u.jsx)("h5", {
              children: a
            })
          })
        },
        Ls = e => {
          let {
            title: a = "Membership Rewards",
            name: t = "Membership Rewards",
            shards: s
          } = e;
          const [i, r] = (0, c.useState)(null);
          return (0, c.useEffect)((() => {
            s && r(s.reduce(((e, a) => {
              if (!a?.shardImg) return e;
              const {
                title: t,
                shardImg: s
              } = a, {
                mobile: i,
                desktop: r
              } = s;
              return e.push((0, u.jsx)(Is, {
                title: t,
                mobileImg: i?.full_src,
                desktopImg: r?.full_src
              })), e
            }), []))
          }), [s]), i ? (0, u.jsx)("div", {
            className: Ss.shardsCarousel,
            children: (0, u.jsx)(ws, {
              title: a,
              name: t,
              slideChildren: i,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        Ps = e => {
          let {
            animated: a = !1,
            ctas: t = [],
            expandingButtonLabel: s = "Subscribe"
          } = e;
          const [i, r] = (0, c.useState)([]), [n, o] = (0, c.useState)([]);
          return (0, c.useEffect)((() => {
            const {
              expandingButtonsArray: e,
              plainButtonsArray: a
            } = t.reduce(((e, a) => (a.isInExpandingButton ? e.expandingButtonsArray.push({
              href: a.href,
              platform: a.platform,
              buttonText: a.buttonText
            }) : e.plainButtonsArray.push({
              icon: a.platform ?? "",
              title: a.buttonText,
              to: a.href
            }), e)), {
              expandingButtonsArray: [],
              plainButtonsArray: []
            });
            r(e), o(a)
          }), [t]), i.length ? (0, u.jsx)(z.motion.div, {
            variants: a ? Ts : void 0,
            children: (0, u.jsx)(_s, {
              variant: "gen9",
              buttonText: s,
              platformsAndLinks: i,
              children: !!n.length && (0, u.jsx)(z.motion.div, {
                variants: Ts,
                children: (0, u.jsx)(Jt, {
                  buttons: n,
                  className: Ss.buttonGroup
                })
              })
            })
          }) : (0, u.jsx)(u.Fragment, {
            children: !!n.length && (0, u.jsx)(z.motion.div, {
              variants: Ts,
              children: (0, u.jsx)(Jt, {
                buttons: n,
                className: Ss.buttonGroup
              })
            })
          })
        },
        Es = e => {
          let {
            animated: a = !1,
            brands: t = [],
            cta: s = [],
            ctas: i = [],
            description: r = "",
            expandingButtonLabel: n = "Subscribe",
            legalText: c,
            stackButtons: o,
            title: l = ""
          } = e;
          return (0, u.jsxs)(z.motion.div, {
            className: Ss.content,
            initial: "hidden",
            animate: "visible",
            variants: a ? Cs : void 0,
            children: [(0, u.jsx)(z.motion.div, {
              variants: a ? Ts : void 0,
              children: (0, u.jsx)(Kt.A, {
                brands: t
              })
            }), (l || r) && (0, u.jsxs)(z.motion.div, {
              className: Ss.descriptions,
              variants: a ? Ts : void 0,
              children: [l && (0, u.jsx)("h2", {
                dangerouslySetInnerHTML: {
                  __html: l
                }
              }), r && (0, u.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: r
                }
              })]
            }), !!s.length && (0, u.jsx)("div", {
              className: o ? Ss.verticalCtaBlock : Ss.ctaBlock,
              children: (0, u.jsx)(S.TinaParser, {
                components: {
                  Cta: mt,
                  ExpandingPlatformButton: _s
                },
                tina: {
                  payload: {
                    content: s
                  }
                }
              })
            }), !!i.length && (0, u.jsx)("div", {
              className: Ss.ctaBlock,
              children: (0, u.jsx)(Ps, {
                animated: a,
                ctas: i,
                expandingButtonLabel: n
              })
            }), c && (0, u.jsx)(z.motion.div, {
              className: Ss.legalText,
              variants: a ? Ts : void 0,
              children: (0, u.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: c
                }
              })
            })]
          })
        },
        zs = e => {
          let {
            animated: a = !1,
            backgroundImage: t,
            brands: s = [],
            className: i,
            ctas: r = [],
            cta: n,
            description: o = "",
            expandingButtonLabel: d = "Subscribe",
            layeredImage: m,
            layeredImageSettings: g,
            legalText: f,
            shardsSection: p = {},
            stackButtons: b = !1,
            theme: k = "gen9",
            title: v = ""
          } = e;
          const {
            breakpoints: y,
            windowWidth: h
          } = (0, l.useWindowResize)(), _ = y.xxl.min, x = (e => {
            if (!e) return null;
            const a = {},
              t = new Map([
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
              const [s, i] = e;
              if (t.has(s)) {
                const e = t.get(s);
                Object.entries(i).forEach((i => {
                  const [r, n] = i;
                  if (t.has(s) && t.has(r)) {
                    const s = `${t.get(r)}${e}`;
                    a[s] = "imageWidth" !== r ? n ? `${n}px` : "0px" : n ? `${n}vw` : "100vw"
                  }
                }))
              }
            })), a
          })(g), j = (0, S.useGetCdnSource)(t?.mobile?.full_src ?? null), N = (0, S.useGetCdnSource)(t?.desktop?.full_src ?? j), w = (0, S.useGetCdnSource)(m?.mobile?.full_src ?? null), C = (0, S.useGetCdnSource)(m?.desktop?.full_src ?? w), T = (0, c.useMemo)((() => {
            const {
              mobileStyle: e,
              desktopStyle: a,
              style: s
            } = t ?? {};
            return {
              ...s,
              ...h >= _ ? (0, l.safeStyles)(a) : (0, l.safeStyles)(e)
            }
          }), [h, t?.style, t?.mobileStyle, t?.desktopStyle]);
          return (0, u.jsxs)(z.motion.div, {
            className: (0, l.classList)(Ss.hero, i),
            style: {
              "--background-image-desktop": `url(${N})`,
              "--background-image-mobile": `url(${j})`,
              "--layered-image-desktop": `url(${C})`,
              "--layered-image-mobile": `url(${w})`
            },
            initial: "hidden",
            animate: "visible",
            variants: a ? Cs : void 0,
            "data-type": "hero",
            theme: k,
            children: [(0, u.jsxs)("div", {
              className: Ss.images,
              children: [N && j ? (0, u.jsx)("div", {
                className: Ss.background,
                style: T ?? {}
              }) : "", w && C ? (0, u.jsx)("div", {
                className: Ss.layered,
                style: g ? x : {}
              }) : "", (0, u.jsx)("div", {
                className: Ss.gradient
              })]
            }), (0, u.jsx)(Es, {
              animated: a,
              brands: s,
              cta: n,
              ctas: r,
              description: o,
              expandingButtonLabel: d,
              legalText: f,
              stackButtons: b,
              title: v
            }), p?.shards && (0, u.jsx)(Ls, {
              ...p
            })]
          })
        },
        Bs = {
          layeredImage: "rockstargames-sites-legacyfb27e7361e78dacdcf500e0b9a2b4fce",
          layersWrapper: "rockstargames-sites-legacyaf169afca6f741daca0331a1b13fa5f1",
          "hero-lg": "rockstargames-sites-legacyb722bba74c792beb73ccdfec4506b591",
          "hero-md": "rockstargames-sites-legacyc6b26605a3817704bbf427741edb98f8",
          "hero-sm": "rockstargames-sites-legacye7b70cd5245ee850b5a2bfd048fa02c4",
          contain: "rockstargames-sites-legacyc409c9fefffbfffd091f81bdd75ab8a6",
          cover: "rockstargames-sites-legacya72cf62465acbddecc3a2cb256640fac",
          fill: "rockstargames-sites-legacyc12eb7986b09f10158c48ad4a902f2ef",
          "bg-img": "rockstargames-sites-legacyae25e5bf6793a5522c791028f396dedd",
          imageLayer: "rockstargames-sites-legacya63d213c123e7da5863c6256e847eb0f",
          "layer-lg-height": "rockstargames-sites-legacya206e14a6e055900c30ee67826330173",
          "layer-md-height": "rockstargames-sites-legacye2a2cf239dc64e006fdc9c2c3d280b8e",
          "layer-sm-height": "rockstargames-sites-legacyc947fc08bb64674c4bf0429e7914507e",
          "layer-xl-height": "rockstargames-sites-legacya4d21457b55a0626d1cf5170845ba8d6",
          "layer-xs-height": "rockstargames-sites-legacyd0f6abd48b388b8e3b18eee4bc19039d",
          "layer-xxl-height": "rockstargames-sites-legacyd74cf249eb57fb6682f07fe13fdfdb4a",
          "layer-lg-width": "rockstargames-sites-legacyfb58e41629b31453b12d8bbcc525608f",
          "layer-md-width": "rockstargames-sites-legacyf1d2c109e21746d5fa00c85e56e61b10",
          "layer-sm-width": "rockstargames-sites-legacya1289245dc6b1854c3aec5b1a8a11593",
          "layer-xl-width": "rockstargames-sites-legacye5ecbec181677eea6c9c72e02580c501",
          "layer-xs-width": "rockstargames-sites-legacyc60b1a515049d3f670d8c5a76c8a1bf6",
          "layer-xxl-width": "rockstargames-sites-legacyac03c56e2475aecafc08e873eed26566",
          "bottom-y": "rockstargames-sites-legacyd66e5203a7bd3c85b99e6caef49b2e9b",
          "center-x": "rockstargames-sites-legacycc06519a4a0d2db824b70a425c8cefd6",
          "center-y": "rockstargames-sites-legacyd6ce82f1bd5cbf6b4abe650a2738c723",
          "left-x": "rockstargames-sites-legacybb4dd9e1570a80cc01f752a2230abdac",
          "right-x": "rockstargames-sites-legacyd50c0c4bee9b09502dd611543223ed37",
          "top-y": "rockstargames-sites-legacya9cd0a03e7193a5b47c6e767e045a1ec",
          border: "rockstargames-sites-legacyaf6154339558ed7e6e46014575250492",
          shards: "rockstargames-sites-legacya0d1e1b5705f11b3b9301717bc5f6245",
          shards_three: "rockstargames-sites-legacycf01ef76b0d5cc2a7bc4f005be4eb31f",
          shards_two: "rockstargames-sites-legacyf317b17c9b0f0a27ed95ec2844857f25",
          dual: "rockstargames-sites-legacyb9c969b033c5016f95d5a70ceea22071"
        },
        Vs = e => {
          let {
            style: a,
            className: t
          } = e;
          const s = {
              ...a
            },
            i = a["--border-image-source"],
            r = (0, S.useGetCdnSource)(i || null);
          return i && (s["--border-image-source"] = `url(${r})`), (0, u.jsx)("div", {
            className: (0, l.classList)(Bs.border, t),
            style: {
              ...s
            }
          })
        },
        Ds = e => e?.images ? (0, u.jsx)("div", {
          className: (0, l.classList)(Bs.layeredImage, Bs[e?.variantClass], Bs[e?.wrapperSizeClass]),
          style: {
            ...e?.style ?? {}
          },
          children: (0, u.jsxs)("div", {
            className: Bs.layersWrapper,
            children: [e?.images?.map(((e, a) => {
              const {
                image: t,
                paddingClass: s,
                imageSizeClass: i,
                objectFitClass: r,
                positionClassX: n,
                positionClassY: c,
                zIndex: o,
                className: d,
                style: m,
                alt: g,
                displayClass: f
              } = e;
              return (0, u.jsx)(E, {
                image: t,
                style: {
                  zIndex: o ?? a + 1
                },
                imageStyle: m,
                className: (0, l.classList)(d, f, Bs.imageLayer, Bs[s], Bs[i], Bs[r], Bs[n], Bs[c]),
                alt: g
              }, o ?? a + 1)
            })), e?.borderImage && (0, u.jsx)(Vs, {
              style: e?.borderImage,
              className: e?.borderImage?.displayClass
            })]
          })
        }) : null;
      var Ms = t(39462);
      const $s = e => {
          const {
            src: a,
            thumbnail: t,
            style: s,
            showOpenButtonMobile: i,
            showOpenButton: r,
            showDownloadButtonMobile: n,
            showDownloadButton: c
          } = e, {
            isMobile: o
          } = (0, l.useWindowResize)(), d = (0, I.C1)(a), m = (0, I.C1)(t?.thumbnail ?? ""), g = {
            ...t,
            ...e,
            src: d,
            thumbnail: m,
            showOpenButton: o ? i : r,
            showDownloadButton: o ? n : c
          };
          return (0, u.jsx)("div", {
            style: s,
            className: "rockstargames-sites-legacyadbaa0167219cd891249a29faec00e8f",
            children: (0, u.jsx)(Ms.Yf, {
              ...g
            })
          })
        },
        As = {
          pillBtn: "rockstargames-sites-legacyec4cf2a0d1bf4b163356a239c9fcd2c5",
          selected: "rockstargames-sites-legacyf2bcb112e2fedaca40598307a49544c4",
          dialogButton: "rockstargames-sites-legacyad86d4b21240f743281b4922702072b0",
          primary: "rockstargames-sites-legacye4ce9e8b1c839a16acd1198dd6155b0a",
          secondary: "rockstargames-sites-legacyc2b869b762352eaa5d0adbeb70fac94c"
        },
        Fs = e => {
          let {
            button: a,
            closeDialog: t,
            style: s = "primary"
          } = e;
          const {
            buttonIcon: i,
            buttonText: r,
            extraClasses: n,
            isDisabled: c,
            isLink: o,
            link: l,
            onClick: d,
            testId: m
          } = a;
          return o ? r && (0, u.jsx)("a", {
            className: [As.dialogButton, As.link, As[s], n].join(" "),
            href: l,
            ...m && {
              "data-testid": m
            },
            children: r
          }) : (0, u.jsx)("button", {
            className: [As.dialogButton, As[s], n].join(" "),
            disabled: c,
            onClick: e => (e => {
              d && d(), t && t(), e.stopPropagation()
            })(e),
            type: "button",
            value: "cancel",
            "aria-label": r,
            ...m && {
              "data-testid": m
            },
            children: (0, u.jsxs)("span", {
              children: [r, i && (0, u.jsx)("div", {
                className: As.ctaIcon
              })]
            })
          })
        },
        Os = {
          pillBtn: "rockstargames-sites-legacyb403f298c2eff00899432c93daa15aec",
          selected: "rockstargames-sites-legacya6cab397bf3a16564fcc531ef4c16130",
          dialog: "rockstargames-sites-legacyd2c9ef0a70d425745a27c169c594199a",
          "slide-up": "rockstargames-sites-legacyb2b3117a07a11b3ec5897e4718e24373",
          "fade-in": "rockstargames-sites-legacye30057881578a38b5dc6f50854c6b56d",
          heading: "rockstargames-sites-legacydab9a8f190197c99405cebe1e9a992d6",
          message: "rockstargames-sites-legacyf7cd64be4f94a272222f88f34789734a",
          icon: "rockstargames-sites-legacybc1e57fee27452c58670e4f60e492246",
          check: "rockstargames-sites-legacyb63b9588fb98b439d19028797670c6c5",
          error: "rockstargames-sites-legacyf654f7a2bf475a939f8c05fb569bfd5e",
          mail: "rockstargames-sites-legacyb120386c4c2485c587f87173721d63be",
          content: "rockstargames-sites-legacyefe65f5c39de5d044fdc6b13c1771125",
          actions: "rockstargames-sites-legacyd35d1125eabb9ae0e941bd585003c4fc"
        },
        Gs = e => {
          let {
            icon: a,
            title: t,
            secondaryText: s,
            buttons: i,
            showDialog: r,
            onClose: n = (() => {}),
            closeOnOutsideClick: o = !0,
            extraClasses: d
          } = e;
          const m = (0, c.useRef)(null),
            {
              setBodyIsLocked: g
            } = (0, l.useBodyScrollable)("AlertDialog");
          (0, c.useEffect)((() => {
            r && m?.current && (m.current?.showModal?.(), g(!0))
          }), [r]);
          const f = () => {
            g(!1), n(), m.current?.close?.()
          };
          if (r) return (0, u.jsxs)("dialog", {
            ref: m,
            className: Os.dialog,
            onClick: e => (e => {
              if (!e.currentTarget) return;
              const a = e.currentTarget.getBoundingClientRect();
              (a.left > e.clientX || a.right < e.clientX || a.top > e.clientY || a.bottom < e.clientY) && o && (g(!1), n(), e.currentTarget.close())
            })(e),
            "data-testid": "alert-dialog",
            children: [a && (0, u.jsx)("i", {
              className: [Os.icon, Os[a]].join(" ")
            }), (0, u.jsxs)("div", {
              className: [Os.content, d?.content].join(" "),
              children: [(0, u.jsx)("h3", {
                className: [Os.heading, d?.heading].join(" "),
                children: t
              }), s && (0, u.jsx)("div", {
                className: [Os.message, d?.message].join(" "),
                dangerouslySetInnerHTML: {
                  __html: s
                }
              })]
            }), i && (0, u.jsx)("div", {
              className: Os.actions,
              children: i.slice(0, 2).map(((e, a) => (0, u.jsx)(Fs, {
                style: 0 === a ? "primary" : "secondary",
                button: e,
                closeDialog: f
              }, e.buttonText)))
            })]
          })
        },
        Rs = {
          tag: "rockstargames-sites-legacyb660bb706132d84852c02df01cc6ed5a"
        },
        Hs = e => {
          let {
            className: a,
            href: t,
            title: s,
            style: i
          } = e;
          const r = (0, u.jsxs)("div", {
            style: i,
            className: [Rs.tag, a].join(" "),
            children: [(0, u.jsx)("i", {}), s]
          });
          return void 0 !== t ? (0, u.jsx)(g.A, {
            to: t,
            children: r
          }) : r
        },
        qs = {
          newswireBlock: "rockstargames-sites-legacyb394b56c31488c36155ca82090c66e6f",
          info: "rockstargames-sites-legacyea1c51ae745531c2aeabbe3fcf603842",
          title: "rockstargames-sites-legacyf1dfe59c3d981dbe132559620885ecea",
          newswireBlockNoSpecialOrder: "rockstargames-sites-legacyc06d09374e8b5cc41f1732c691ee8e25",
          preview: "rockstargames-sites-legacyca2b587572d3c9a74cfc2fedf400ce8c",
          previewMobile: "rockstargames-sites-legacyb3d4a8cfcc371ae39ce6220d009c5954",
          top: "rockstargames-sites-legacyeee9c5d3b714a61ac265369800a6d4e0",
          startAnimation: "rockstargames-sites-legacya56af3c95449fe8452485dfb6c89fc29"
        },
        Us = e => {
          let {
            section: a = "",
            index: t,
            post: s,
            noSpecialOrder: i = !1,
            focused: r
          } = e;
          const {
            track: n
          } = (0, m.useGtmTrack)(), [o] = (0, X.useSearchParams)(), d = s.preview_images_parsed.newswire_block, f = {
            default: 0 !== t || i ? d.square || d.d16x9 || d._fallback : d.d16x9 || d.square || d._fallback,
            mobile: d.square || d._fallback
          }, [p, b] = (0, l.usePreloadImg)(f.default), k = {
            default: {
              backgroundImage: `url(${f.default})`
            },
            mobile: {
              backgroundImage: `url(${f.mobile})`
            }
          }, v = (0, c.useCallback)((() => {
            n({
              event: "card_click",
              card_id: s.id,
              card_name: s.name_slug.replace(/-/g, " "),
              link_url: s.url,
              position: t,
              element_placement: a
            })
          }), [s]);
          return (0, u.jsx)(g.A, {
            to: s.url,
            className: [qs.newswireBlock, i ? qs.newswireBlockNoSpecialOrder : "", null !== p ? qs.startAnimation : ""].join(" "),
            focused: r,
            onClick: v,
            children: (0, u.jsxs)(u.Fragment, {
              children: [0 !== t || o.get("tag_id") ? (0, u.jsx)("div", {
                className: qs.preview,
                style: k.default
              }) : (0, u.jsxs)(u.Fragment, {
                children: [(0, u.jsx)("div", {
                  className: qs.previewMobile,
                  style: k.mobile
                }), (0, u.jsx)("div", {
                  className: qs.preview,
                  style: k.default
                })]
              }), (0, u.jsxs)("div", {
                className: qs.info,
                children: [(0, u.jsxs)("div", {
                  className: qs.top,
                  children: [s.primary_tags.length ? (0, u.jsx)(Hs, {
                    title: s.primary_tags[s.primary_tags.length > 1 && 722 === s.primary_tags[0].id ? 1 : 0].name
                  }) : "", (0, u.jsx)("time", {
                    dateTime: s.created,
                    children: s.created_formatted
                  })]
                }), (0, u.jsx)("h5", {
                  className: qs.title,
                  dangerouslySetInnerHTML: {
                    __html: s.title
                  }
                })]
              })]
            })
          })
        };
      var Ws = t(19800),
        Ks = t(46368),
        Qs = t.n(Ks);
      const Ys = (0, l.withTranslations)((e => {
          let {
            section: a = "",
            relativeTo: t = "",
            tagId: s = null,
            metaUrl: i = "/newswire",
            t: r
          } = e;
          const n = (0, l.useLocale)(),
            {
              track: o
            } = (0, m.useGtmTrack)(),
            [d, g] = (0, X.useSearchParams)(),
            {
              tagId: f = null
            } = (0, X.useParams)(),
            [p, b] = (0, c.useState)(f ?? s ?? d.get("tag_id")),
            [k, v] = (0, c.useState)(1),
            [y, h] = (0, c.useState)(20),
            [_, x] = (0, c.useState)([]),
            [j, N] = (0, c.useState)(null),
            [w, {
              loading: S,
              data: C
            }] = (0, Ws._l)(Qs(), {
              variables: {
                tagId: Number(p),
                page: k,
                metaUrl: i,
                limit: y,
                locale: n
              }
            });
          return (0, c.useEffect)((() => {
            v(1), x([]), h(20), b(f ?? s ?? d.get("tag_id")), w()
          }), [d.get("tag_id"), f, s]), (0, c.useEffect)((() => {
            const e = _;
            C?.posts?.paging && N(C?.posts?.paging), C?.posts?.results && x(e.concat(C?.posts?.results))
          }), [C]), (0, c.useEffect)((() => {
            (() => {
              const e = d.get("page"),
                a = Number(e ?? 1);
              h(20 * a), w()
            })()
          }), []), _.length ? (0, u.jsxs)("div", {
            "data-testid": "newswire-list",
            children: [(0, u.jsx)(ei, {
              section: a,
              posts: _,
              relativeTo: t,
              noSpecialOrder: null !== p
            }), null !== j && j.nextPage ? (0, u.jsx)(pt, {
              className: "rockstargames-sites-legacye125d510192feb4ce2844cb97084b838",
              "data-testid": "more-stories",
              onClick: e => {
                const a = d.get("page"),
                  t = Number(a ?? k) + 1;
                v(t), 20 !== y && h(20), w(), g({
                  page: String(t)
                }, {
                  replace: !0
                }), o({
                  event: "cta_learn",
                  text: "more stories",
                  element_placement: "newswire"
                })
              },
              disabled: S,
              context: "secondary",
              children: r("More Stories")
            }) : ""]
          }) : null
        })),
        Xs = {
          pillBtn: "rockstargames-sites-legacyf2d003dd0e6a129a56ea07208548787c",
          selected: "rockstargames-sites-legacyf94728c4a438800b9abab11a8b3e3c0a",
          related: "rockstargames-sites-legacyb8a63bb419c1f2a8f94e099e1e650e48",
          posts: "rockstargames-sites-legacycfe09d4dc8447b1e606404300d040e7a",
          just1post: "rockstargames-sites-legacyd46374473ed68a4121f88b44eba06359"
        },
        Zs = (0, l.withTranslations)((e => {
          let {
            posts: a,
            t
          } = e;
          return (0, u.jsxs)("section", {
            className: Xs.related,
            children: [(0, u.jsx)("h2", {
              children: t("Related Stories")
            }), (0, u.jsx)("div", {
              className: [Xs.posts, 1 === a.length ? Xs.just1post : ""].join(" "),
              children: a.map((e => (0, u.jsx)(Us, {
                noSpecialOrder: !0,
                post: e
              }, e.id)))
            })]
          })
        })),
        Js = {
          newswireBlocks: "rockstargames-sites-legacyea687097d9239d4830bc03090f0116f2",
          noSpecialOrder: "rockstargames-sites-legacyd301334a72b626f8cc2f5b9733299e76"
        },
        ei = (0, l.withGtmTracking)((e => {
          let {
            section: a = "",
            noSpecialOrder: t = !1,
            posts: s,
            gtmTrack: i,
            relativeTo: r
          } = e;
          const [n, o] = (0, c.useState)(null);
          return (0, c.useEffect)((() => {
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
            })), i(e), o(s.length)
          }), [s.length]), (0, u.jsx)("div", {
            "data-testid": "newswire-blocks-container",
            className: [Js.newswireBlocks, t ? Js.noSpecialOrder : "", Js.contextHome].join(" "),
            children: s.map(((e, s) => (0, u.jsx)(Us, {
              section: a,
              index: s,
              noSpecialOrder: t,
              post: e,
              focused: s === n
            }, e.id)))
          })
        }));
      var ai = t(84392);
      const ti = "rockstargames-sites-legacyb013d77f453d7053bbcf06f173ff326c",
        si = e => {
          let {
            children: a,
            data: t,
            onPageUpdate: s,
            page: i,
            className: r
          } = e;
          return (0, u.jsx)("a", {
            href: "#",
            className: i === t.page ? `rockstargames-sites-legacyb577d5726806ec872ecdb8a46905734f ${r??""}` : "",
            onClick: e => {
              e.preventDefault(), s(i)
            },
            children: a
          })
        },
        ii = e => {
          let {
            data: a,
            onPageUpdate: t,
            className: s
          } = e;
          if (1 === a.pageCount) return null;
          const i = new Array(Math.min(a.pageCount, 8)),
            r = Math.max(a.pageCount - 8, 1),
            n = Math.max(2, a.page - 4),
            c = Array.from(i, ((e, a) => a + Math.min(r, n)));
          return (0, u.jsxs)("div", {
            className: `rockstargames-sites-legacye480f25872ae2a8b3fcd1e492d838301 ${s??""}`,
            children: [a.pageCount > 8 ? (0, u.jsxs)(u.Fragment, {
              children: [(0, u.jsx)(si, {
                data: a,
                onPageUpdate: t,
                page: 1,
                children: "1"
              }), 2 !== c[0] ? (0, u.jsx)("div", {
                className: ti,
                children: "..."
              }) : ""]
            }) : "", c.map((e => (0, u.jsx)(si, {
              data: a,
              onPageUpdate: t,
              page: e,
              className: s,
              children: e
            }, e))), a.pageCount > 8 ? (0, u.jsxs)(u.Fragment, {
              children: [c.slice(-1)[0] + 1 < a.pageCount ? (0, u.jsx)("div", {
                className: ti,
                children: "..."
              }) : "", (0, u.jsx)(si, {
                data: a,
                onPageUpdate: t,
                page: a.pageCount,
                children: a.pageCount
              })]
            }) : ""]
          })
        };
      var ri = t(28882);
      const ni = e => {
          let {
            children: a
          } = e;
          const {
            parallaxController: t
          } = (0, ri.as)();
          return (0, c.useLayoutEffect)((() => {
            if (!t) return;
            const e = setInterval((() => {
              t.update()
            }), 500);
            return () => clearInterval(e)
          }), [t]), a
        },
        ci = {
          parallaxWrapper: "rockstargames-sites-legacye30c08cf0e042f7fc7bed0c23c0bfb31",
          large: "rockstargames-sites-legacye15ce487b25ba576b6e2b31df308098f",
          medium: "rockstargames-sites-legacydfdaa6f63f8e8bd10576fa2debcbc1fc",
          small: "rockstargames-sites-legacyc32a973dbc862a43cc5d4a2aac19ed9b"
        },
        oi = e => {
          let {
            scrollAxis: a = "vertical",
            size: t = "",
            style: s = {},
            children: i
          } = e;
          return (0, u.jsx)(ri.zE, {
            scrollAxis: a,
            children: (0, u.jsx)(ni, {
              children: (0, u.jsx)("div", {
                className: (0, l.classList)(ci.parallaxWrapper, ci[t]),
                style: s,
                "data-context": "parallax-wrapper",
                children: i ? i.map(((e, t) => (0, c.cloneElement)(e, {
                  scrollAxis: a,
                  style: {
                    ...e?.props?.style,
                    zIndex: t
                  }
                }))) : (0, u.jsx)("div", {})
              })
            })
          })
        },
        li = e => {
          let {
            layers: a = [],
            displayClass: t = "",
            style: s = {}
          } = e;
          const i = (0, S.useGenerateCdnSource)();
          if (!a || !a[0]?.image) return null;
          const r = a.map((e => ({
            ...e,
            props: {
              style: {
                ...e.style
              }
            },
            style: void 0,
            image: i(e?.image ?? null)
          })));
          return (0, u.jsx)(ri.y, {
            className: (0, l.classList)("rockstargames-sites-legacyc1c689cf47230fa80bccc9b20515d4fa", t),
            layers: r,
            style: s
          })
        },
        di = "rockstargames-sites-legacyae8bfc3f9a519606a95144e64ee454b5",
        mi = e => {
          let {
            minOffset: a = 0,
            maxOffset: t = 0,
            scrollAxis: s = "vertical",
            displayClass: i = "",
            style: r = {},
            children: n
          } = e;
          return "horizontal" === s ? (0, u.jsx)(ri.kQ, {
            x: [a, t],
            className: (0, l.classList)(di, i),
            styleOuter: r,
            children: n
          }) : (0, u.jsx)(ri.kQ, {
            y: [a, t],
            className: (0, l.classList)(di, i),
            styleOuter: r,
            children: n
          })
        },
        gi = {
          pillBtn: "rockstargames-sites-legacyb12cdd53cc59cb42903d11d9fdceca7f",
          selected: "rockstargames-sites-legacye03b475da5ca3ded74e8c6dfd54fb476",
          promoModule: "rockstargames-sites-legacyeabbb5f24c40ef994b612515a0d0f356",
          promoModuleImage: "rockstargames-sites-legacyb8584eedfbe5a91aaf72c40ec1d619a5",
          gradient: "rockstargames-sites-legacyb78d3c0bdc9668bb3d318825467177ab",
          promoModuleContentContainer: "rockstargames-sites-legacyef7d758b0d1515fcebe6cb22271a4688",
          left: "rockstargames-sites-legacyf4448b69feb648b8b910230c6f873dbd",
          right: "rockstargames-sites-legacyb69bb02f1c00007e9b4eab8217e2f08e",
          promoModuleTextContent: "rockstargames-sites-legacyb590150a7ac01a01a493b85b7ea5cf90",
          promoModuleWrapper: "rockstargames-sites-legacyde25220583bb9220882329a113f7a5e2"
        },
        ui = e => {
          let {
            backgroundColor: a,
            brands: t = [],
            description: s = "",
            ctaLabel: i,
            ctaLink: r = "https://rockstargames.com",
            gradient: n = !0,
            image: o,
            imageOrientation: l = "right",
            title: g = "",
            name: f = ""
          } = e;
          const [p, b] = (0, c.useState)(!1), {
            ref: k,
            inView: v
          } = (0, d.useInView)({
            threshold: .6
          }), {
            track: y
          } = (0, m.useGtmTrack)(), h = {
            "--promo-background": a ?? "var(--black-200)",
            "--promo-image": `url(${(0,S.useGetCdnSource)(o)??"var(--promo-background)"})`,
            "--promo-order": "left" === l ? "row" : "row-reverse"
          };
          return (0, c.useEffect)((() => {
            v && !p && (y({
              event: "page_section_impression",
              element_placement: f
            }), b(!0))
          }), [v]), (0, u.jsx)(u.Fragment, {
            children: (0, u.jsx)("div", {
              className: gi.promoModuleWrapper,
              children: (0, u.jsxs)(z.motion.div, {
                className: gi.promoModule,
                style: {
                  ...h
                },
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
                ref: k,
                children: [(0, u.jsx)("div", {
                  className: [gi.promoModuleImage, n ? gi.gradient : "", "left" === l ? gi.left : gi.right].join(" ")
                }), (0, u.jsxs)("div", {
                  className: gi.promoModuleContentContainer,
                  children: [(0, u.jsx)(Kt.A, {
                    brands: t,
                    className: gi.promoModuleBrands
                  }), (0, u.jsxs)("div", {
                    className: gi.promoModuleTextContent,
                    children: [g && (0, u.jsx)("h3", {
                      children: g
                    }), s && (0, u.jsx)("p", {
                      children: s
                    })]
                  }), i && (0, u.jsx)(Zt, {
                    to: r,
                    text: i,
                    onClick: () => {
                      y({
                        event: "cta_other",
                        element_placement: "promo module",
                        link_url: r,
                        text: i
                      })
                    }
                  })]
                })]
              })
            })
          })
        },
        fi = {
          responsiveFlexBox: "rockstargames-sites-legacyfad65f02dd0ee292c36ec9d50b9c249a",
          responsiveFlexItem: "rockstargames-sites-legacyf5215494f66727858110c9c73e2d882a",
          responsiveImage: "rockstargames-sites-legacyd437a700a9b768227a114e70db78af03"
        },
        pi = e => {
          let {
            children: a,
            className: t,
            style: s
          } = e;
          return (0, u.jsx)("div", {
            className: [fi.responsiveFlexBox, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: a
          })
        },
        bi = {
          responsiveFlexItem: "rockstargames-sites-legacye7371144db2e94a049204d4b178416ec"
        },
        ki = e => {
          let {
            children: a,
            className: t,
            style: s
          } = e;
          return (0, u.jsx)("div", {
            className: [bi.responsiveFlexItem, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: a
          })
        },
        vi = {
          responsiveGridBox: "rockstargames-sites-legacye9ae27279428e611bbce59656759ed50",
          responsiveGridItem: "rockstargames-sites-legacyb0d14e4a5e63a903117e93a392cbfb53"
        },
        yi = e => {
          let {
            children: a,
            cols: t,
            className: s,
            rows: i,
            style: r
          } = e;
          const n = r ? {
            ...r
          } : {};
          return void 0 !== t && (n.gridTemplateColumns = `repeat(${t}, 1fr)`), void 0 !== i && (n.gridTemplateRows = `repeat(${i}, 1fr)`), (0, u.jsx)("div", {
            className: [vi.responsiveGridBox, void 0 !== s ? s : ""].join(" "),
            style: n,
            children: a
          })
        },
        hi = {
          responsiveGridBox: "rockstargames-sites-legacye721a07d53edbb90b165a7720bb32c08",
          responsiveGridItem: "rockstargames-sites-legacya32d93b6ae982b5ad473f75cf86ff085"
        },
        _i = e => {
          let {
            children: a,
            className: t,
            style: s
          } = e;
          return (0, u.jsx)("div", {
            className: [hi.responsiveGridItem, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: a
          })
        },
        xi = {
          responsiveImage: "rockstargames-sites-legacyf642b754e0efd503262ab7ca0c7b9f5b"
        },
        ji = e => {
          let {
            src: a,
            className: t = "",
            animate: s,
            ariaLabel: i,
            style: r = {}
          } = e;
          const [n, c] = (0, l.usePreloadImg)(a);
          if (!n) return null;
          r.backgroundImage = `url(${a})`;
          const o = {
            ...r
          };
          return c && (o["--aspect-ratio"] = c.width / c.height), (0, u.jsx)("div", {
            role: "img",
            "aria-label": i ?? "R* Games",
            className: [xi.responsiveImage, s ? xi.animateBox : "", t].join(" "),
            style: o
          })
        },
        Ni = {
          responsiveSection: "rockstargames-sites-legacybd7167fb3a3edaf4df4d9a576efb1170",
          maxWidth: "rockstargames-sites-legacyb2c8f49e280c2e7c204b30a4af8c13b9"
        },
        wi = e => {
          let {
            children: a,
            className: t,
            style: s,
            maxWidth: i
          } = e;
          return (0, u.jsx)("section", {
            className: [Ni.responsiveSection, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: i ? (0, u.jsx)("div", {
              className: Ni.maxWidth,
              children: a
            }) : a
          })
        },
        Si = e => {
          let {
            disableLink: a,
            className: t
          } = e;
          const s = a ? "span" : g.A;
          return (0, u.jsx)(s, {
            className: [a ? "rockstargames-sites-legacyb28a6ee32abeb20049b97677a86a4314" : "rockstargames-sites-legacya3d920a1139575706b914bc3a0100970", t || ""].join(" "),
            alt: "Rockstar Games Home",
            ...!a && {
              to: "/"
            }
          })
        };
      var Ci = t(98802);
      const Ti = e => {
          let {
            html: a
          } = e;
          return (0, u.jsx)("div", {
            children: (0, Ci.Ay)(a)
          })
        },
        Ii = e => {
          let {
            thresholds: a,
            onThresholdReached: t,
            children: s
          } = e;
          const [i, r] = (0, c.useState)([]), [n, o] = (0, c.useState)(new Set);
          return (0, c.useEffect)((() => {
            const e = Array.from(new Set(a));
            e.sort(((e, a) => e - a)), r(e)
          }), [a]), (0, u.jsxs)("div", {
            style: {
              position: "relative"
            },
            children: [i.map((e => (0, u.jsx)(d.InView, {
              threshold: e,
              onChange: a => ((e, a) => {
                e && !n.has(a) && o((e => {
                  const s = new Set(e);
                  return i.forEach((e => {
                    e <= a && !s.has(e) && (s.add(e), t(e))
                  })), s
                }))
              })(a, e),
              triggerOnce: !0,
              children: a => {
                let {
                  ref: t
                } = a;
                return (0, u.jsx)("div", {
                  ref: t,
                  style: {
                    height: "1px",
                    position: "absolute",
                    top: 100 * e + "%"
                  }
                })
              }
            }, e))), s]
          })
        },
        Li = () => {
          const {
            pathname: e
          } = (0, X.useLocation)();
          return (0, c.useEffect)((() => {
            const e = document.scrollingElement || document.documentElement;
            setTimeout((() => {
              e.scrollTop = 0
            }), 0)
          }), [e]), null
        };
      var Pi = t(36205);
      const Ei = e => {
        let {
          children: a
        } = e;
        return (0, u.jsx)("div", {
          className: "rockstargames-sites-legacyaae4d33d1eecebdc9b489f8d7a1ad708",
          children: (0, u.jsx)("div", {
            className: "rockstargames-sites-legacyc573fe5c7bdcc46c4d57ec4a2c275e3b",
            children: a
          })
        })
      };
      var zi = t(35508),
        Bi = t(48524);
      const Vi = {
          pillBtn: "rockstargames-sites-legacya0626acfa0dbdfdfd4f40b93134ac915",
          selected: "rockstargames-sites-legacyde6015fb35bdee07192c1656ba4893e3",
          userVote: "rockstargames-sites-legacyb32a59a8a63c53cc278266d726c9c5da",
          info: "rockstargames-sites-legacycee10f330f3ac6fba73fc06ac99bc951",
          voteContent: "rockstargames-sites-legacyaad01ad44bcc6161ad363910e931515f",
          loggedOutButtons: "rockstargames-sites-legacyc393b8f2d3b5b3e9204881ae6ff0fdc5",
          voteButtons: "rockstargames-sites-legacydda673f7473820d8884c017373c780f6",
          downVote: "rockstargames-sites-legacye23b13b0d0be49814d3770c10365c096",
          upVote: "rockstargames-sites-legacyb3be682e82659d45f93c2fe63ccd73ba",
          voteButtonActive: "rockstargames-sites-legacyf9e46f58f97d2b391aaf715861654cd7"
        },
        Di = e => {
          let {
            description: a,
            foreign_id: t = document.location.pathname,
            foreign_type: s = "url",
            title: i
          } = e;
          const {
            track: r
          } = (0, m.useGtmTrack)(), {
            loggedIn: n
          } = (0, m.useRockstarUser)(), {
            refetch: o
          } = (0, l.useQuery)(Bi.UserGetVote, {
            skip: !0
          }), [d] = (0, l.useMutation)(Bi.UserCastVote), [g, f] = (0, c.useState)(null), p = (0, c.useCallback)((async e => {
            r({
              event: "cta_" + (e ? "like" : "dislike"),
              text: `${s} ${t}`
            });
            const a = {
                foreign_id: t,
                foreign_type: s,
                vote: e
              },
              i = await d({
                variables: a
              });
            f(i?.data?.userCastVote?.vote ?? null)
          }), [t, s]);
          return (0, c.useEffect)((() => {
            (async () => {
              if (!n || !t || !s) return;
              const e = await o({
                foreign_id: t,
                foreign_type: s
              });
              f(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [t, s, n]), (0, u.jsx)("div", {
            className: Vi.userVote,
            children: (0, u.jsxs)("div", {
              className: Vi.voteContent,
              children: [(0, u.jsxs)("div", {
                className: Vi.info,
                children: [(0, u.jsx)("h3", {
                  children: i
                }), (0, u.jsx)("p", {
                  children: a
                })]
              }), (0, u.jsxs)("div", {
                className: [Vi.voteButtons, n ? "" : Vi.loggedOutButtons].join(" "),
                children: [(0, u.jsx)("button", {
                  onClick: () => p(!0),
                  className: [Vi.upVote, g ? Vi.voteButtonActive : ""].join(" "),
                  type: "button",
                  "aria-label": "Vote up"
                }), (0, u.jsx)("button", {
                  className: [Vi.downVote, !1 === g ? Vi.voteButtonActive : ""].join(" "),
                  onClick: () => p(!1),
                  type: "button",
                  "aria-label": "Vote down"
                })]
              })]
            })
          })
        },
        Mi = {
          videoPreview: "rockstargames-sites-legacya626ad482ff0be0336e75929516654d5",
          card: "rockstargames-sites-legacyf93031694e202c791c00e5ae3497250a",
          info: "rockstargames-sites-legacydabce30c906fad181d7cc188f1632c04",
          title: "rockstargames-sites-legacyfd87597d0f90ed6d8a2081da933f53bc",
          screencap: "rockstargames-sites-legacyfd37974f16cd1f2376fef29d4af8d948",
          screencapLoaded: "rockstargames-sites-legacyb8d4ef3e1a73c58f4002eab351d4eec2",
          gameTitle: "rockstargames-sites-legacya1fe577b937c0e16250bf38e9d775061"
        },
        $i = e => {
          let {
            video: a,
            size: t = 640
          } = e;
          const s = () => a.screencap.includes("akamai") ? `${a.screencap}?im=Resize=${t}` : a.screencap,
            [i] = (0, l.usePreloadImg)(s());
          return (0, u.jsx)("div", {
            className: [Mi.screencap, i ? Mi.screencapLoaded : ""].join(" "),
            style: {
              background: `url(${s()}) center/cover`
            }
          })
        },
        Ai = e => {
          let {
            gameTitleNecessary: a = !0,
            openInNewWindow: t = !1,
            video: s,
            size: i,
            toExplicit: r
          } = e;
          const n = r ?? `/videos/${s.id}`,
            c = {
              className: Mi.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": n
            },
            o = (0, u.jsxs)("div", {
              className: Mi.card,
              children: [(0, u.jsx)($i, {
                video: s,
                size: i
              }), (0, u.jsxs)("div", {
                className: Mi.info,
                children: [a ? (0, u.jsx)("div", {
                  className: Mi.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: s.game.title
                  }
                }) : "", (0, u.jsx)("h5", {
                  className: Mi.title,
                  dangerouslySetInnerHTML: {
                    __html: s.title
                  }
                })]
              })]
            });
          return t ? (0, u.jsx)("a", {
            href: n,
            target: "_blank",
            ...c,
            children: o
          }) : (0, u.jsx)(g.A, {
            to: n,
            ...c,
            children: o
          })
        },
        Fi = {
          carousel: "rockstargames-sites-legacybc3f1abaac4c17c0e9aaac5fccfc6f7e",
          slidesContent: "rockstargames-sites-legacyc4e301fb08e073f689a8dabd2bef9eb2",
          text: "rockstargames-sites-legacycdb5c063bfc35cfbaaaefc68a77c1b07",
          info: "rockstargames-sites-legacya4057ef942e10ebeedb1370b08c3c32b",
          active: "rockstargames-sites-legacye35688e0d87409e3aef95ffb624d94f4",
          title: "rockstargames-sites-legacye66c271fbbc8b6e431fc5d466c57479c",
          gameTitle: "rockstargames-sites-legacyb5d3df350466b14e4b419bdb479b4064",
          videoTitle: "rockstargames-sites-legacyed4138b1e7fecd4b6d29f0e1bef1fdfd",
          cta: "rockstargames-sites-legacyf40c40ed1bc4242a32bc0628eea34048",
          track: "rockstargames-sites-legacyefe7112432da76c65f293853b4c942d1",
          disableClick: "rockstargames-sites-legacyfcd11cd5895147a9e08f8f4026d68d94",
          items: "rockstargames-sites-legacyd30be9a5f31ff7fabf20969eec3200f1",
          dragging: "rockstargames-sites-legacyb335b03fce6834b86318f3d7cbf3fab6",
          dots: "rockstargames-sites-legacye0ca3ed410818f0961345606a96f03ee"
        },
        Oi = e => {
          let {
            t: a,
            videos: t
          } = e;
          const s = (0, l.useLocale)(),
            {
              track: i
            } = (0, m.useGtmTrack)(),
            {
              setBodyIsLocked: r
            } = (0, l.useBodyScrollable)("VideoCarousel"),
            [n, o] = (0, c.useState)(0),
            [d, f] = (0, c.useState)(0),
            p = (0, c.useRef)(null),
            b = (0, c.useRef)(null);
          return (0, c.useEffect)((() => {
            if (!p.current || !b.current) return;
            const e = new(Ot())(p.current);
            e.get("press").set({
              time: 0
            }), e.get("tap").set({
              time: 150
            });
            const a = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
              s = () => {
                o(n - 1 < 0 ? 0 : n - 1), f(0)
              },
              i = () => {
                const e = n + 1 >= t.length - 1 ? t.length - 1 : n + 1;
                o(e), f(0)
              },
              c = e => {
                f(e.isFinal ? 0 : e.deltaX), "panleft" !== e.additionalEvent && "panright" !== e.additionalEvent || !b.current?.classList.contains(Fi.dragging) || a() && r(!0)
              },
              l = () => {
                a() && r(!1), f(0)
              },
              d = e => {
                "press" === e.type && p.current?.classList.add(`${Fi.disableClick}`), "tap" === e.type && (p.current?.classList.remove(`${Fi.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
              },
              m = () => {
                a() && r(!1), p.current && p.current.classList.remove(`${Fi.disableClick}`)
              },
              g = () => {
                a() && r(!1)
              };
            return b.current.addEventListener("transitionend", g), e.on("swiperight", s), e.on("swipeleft", i), e.on("pan", c), e.on("panend", l), e.on("press tap", d), e.on("pressup", m), () => {
              e.off("swiperight", s), e.off("swipeleft", i), e.off("pan", c), e.off("panend", l), e.off("press tap", d), e.off("pressup", m), b.current && b.current.removeEventListener("transitionend", g), f(0)
            }
          }), [p.current, n]), (0, u.jsxs)("section", {
            className: Fi.carousel,
            children: [(0, u.jsx)("div", {
              className: Fi.track,
              ref: p,
              children: (0, u.jsx)("div", {
                className: `${Fi.items} ${0!==d?Fi.dragging:""}`,
                ref: b,
                style: {
                  transform: `translateX(calc(-${100*n}% + ${d}px))`
                },
                children: t.map(((e, a) => (0, u.jsx)(g.A, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through screencap",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  className: n === a ? Fi.active : "",
                  role: "link",
                  title: e.title,
                  tabIndex: n === a ? 0 : -1,
                  children: (0, u.jsx)($i, {
                    video: e,
                    size: 1280
                  })
                }, e.id)))
              })
            }), (0, u.jsxs)("div", {
              className: Fi.slidesContent,
              children: [(0, u.jsx)("div", {
                className: Fi.text,
                children: t.map(((e, t) => {
                  return (0, u.jsxs)(g.A, {
                    className: [Fi.info, t === n ? Fi.active : ""].join(" "),
                    "data-gtm-category": "Carousel",
                    "data-gtm-action": "Click-through footer",
                    "data-gtm-label": `/videos/${e.id}`,
                    to: `/videos/${e.id}`,
                    role: "link",
                    title: e.title,
                    tabIndex: n === t ? 0 : -1,
                    children: [(0, u.jsxs)("div", {
                      className: Fi.title,
                      children: [(0, u.jsxs)("div", {
                        className: Fi.gameTitle,
                        children: [e.game.title, "fr_fr" === s && " "]
                      }), (0, u.jsx)("h2", {
                        className: Fi.videoTitle,
                        children: e.title
                      })]
                    }), (0, u.jsx)(pt, {
                      className: Fi.cta,
                      onClick: (r = `/videos/${e.id}`, () => {
                        i({
                          event: "cta_watch_video",
                          text: "watch now",
                          link_url: r,
                          element_placement: "video carousel"
                        })
                      }),
                      children: a("Watch Now")
                    })]
                  }, e.id);
                  var r
                }))
              }), (0, u.jsx)("section", {
                className: Fi.dots,
                "aria-controls": "video-carousel",
                "aria-label": "video carousel buttons",
                role: "group",
                children: t.map(((e, a) => (0, u.jsx)("button", {
                  "aria-label": `Slide ${a+1}`,
                  "data-gtm-category": "Marquee",
                  "data-gtm-action": "Dot click",
                  "data-gtm-label": `Dot clicked to ${a}`,
                  onClick: () => o(a),
                  className: n === a ? Fi.active : "",
                  type: "button"
                }, e.id)))
              })]
            })]
          })
        },
        Gi = (0, o.defineMessages)({
          next_button_label: {
            id: "next_button_label",
            defaultMessage: "Next video page"
          },
          previous_button_label: {
            id: "previous_button_label",
            defaultMessage: "Previous video page"
          }
        }),
        Ri = {
          img: "rockstargames-sites-legacyd87037fda2ea106061c7a614036a89df",
          wide: "rockstargames-sites-legacydc444c089b89129c0a39bc61845d531f"
        };
      (0, l.importAll)(t(86751));
      const Hi = e => {
          let {
            isWideCard: a = !1,
            size: s = 640,
            title: i,
            titleSlug: r
          } = e;
          const {
            isMobile: n
          } = (0, l.useWindowResize)(), o = (0, c.useMemo)((() => {
            let e = "";
            return a && (e = n ? t(75877)(`./${r}/mobile.png`) : t(55889)(`./${r}/desktop.png`)), e || (e = t(39294)(`./${r}.jpg`), e += `?im=Resize=${s}`), e
          }), [n, r]), [d] = (0, l.usePreloadImg)(o);
          return (0, u.jsx)("div", {
            role: "img",
            "aria-label": i,
            className: [Ri.img, d ? Ri.startAnimation : "", a ? Ri.wide : ""].join(" "),
            style: {
              backgroundImage: `url(${o})`
            }
          })
        },
        qi = {
          fobLink: "rockstargames-sites-legacyd30ff40ba02b7ed14124da3ca9cd4f2b",
          wide: "rockstargames-sites-legacyc9686ec502f78b05e47568667e90bd17"
        },
        Ui = e => {
          let {
            game: a,
            to: t
          } = e;
          const {
            titleSlug: s,
            urlOfficial: i = ""
          } = a, r = ["VI"].includes(s);
          return (0, u.jsx)(g.A, {
            "data-gtm-category": "Games",
            "data-gtm-action": "Game Click-through",
            "data-gtm-label": s,
            "data-testid": `${s}-gamecard`,
            to: t ?? i,
            target: "_self",
            className: [qi.fobLink, r ? qi.wide : ""].join(" "),
            reloadDocument: r,
            children: (0, u.jsx)(Hi, {
              title: a.title,
              titleSlug: s,
              isWideCard: r
            })
          })
        },
        Wi = {
          videoList: "rockstargames-sites-legacybacddb57787eca7b621a046e6f23aaf5",
          sectionHeader: "rockstargames-sites-legacyad695c18d6276297e78924feea3e6201",
          arrowNav: "rockstargames-sites-legacyc9b73b78d75dd740e918208a9d615796",
          items: "rockstargames-sites-legacyef63b0224f0cc9fa73a9c4549ad6c7e9",
          trackWrapper: "rockstargames-sites-legacybd79ab04bc93e3bcf79be808e0a06e9b",
          partial: "rockstargames-sites-legacyab95829b388545f21071fd5bb97c25bb",
          track: "rockstargames-sites-legacya4d3877b3cf6bff0abccdc561c0fe149",
          arrow: "rockstargames-sites-legacycabb1073f7b7f75b799c87d74cfaf0ad",
          previous: "rockstargames-sites-legacyd7404262ef1f79bde0883b02110a4a5d",
          next: "rockstargames-sites-legacybfdf85a5867d26b52a0962be91170e36",
          disabled: "rockstargames-sites-legacydbe1b06efadb349825f7b9b1b2778c68"
        },
        Ki = (0, y.g)((e => {
          let {
            vids: a,
            games: t,
            title: s,
            gameTitleNecessary: i
          } = e;
          const r = (0, o.useIntl)(),
            {
              track: n
            } = (0, m.useGtmTrack)(),
            d = void 0 !== t ? "games" : "videos",
            [g, f] = (0, c.useState)(),
            [p, b] = (0, c.useState)(),
            [k, v] = (0, c.useState)(0),
            y = (0, c.useRef)(null),
            h = (0, c.useRef)(null);
          (0, c.useEffect)((() => {
            b({
              nextEl: h.current,
              prevEl: y.current
            })
          }), [h, y]), (0, c.useEffect)((() => {
            const e = () => {
              const e = e => window.matchMedia(`(max-width: ${e})`).matches;
              let a = 4;
              e("768px") ? a = 1 : e("990px") || e("1440px") ? a = 2.2 : e("1920px") && (a = 3.2), v(a)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [k]);
          const _ = e => {
            g?.slideTo(e)
          };
          let x;
          return x = "games" === d ? (0, u.jsx)(u.Fragment, {
            children: t.results.map(((e, a) => "775700as" !== e.id && (0, u.jsx)(oe.qr, {
              className: Wi.slide,
              onFocus: () => _(a),
              children: (0, u.jsx)(Ui, {
                game: e,
                dontOverrideTo: !0,
                to: `/videos?type=game&gameId=${e.id}`
              })
            }, e.id)))
          }) : (0, u.jsx)(u.Fragment, {
            children: a.map(((e, a) => (0, u.jsx)(oe.qr, {
              className: Wi.slide,
              onFocus: () => _(a),
              children: (0, u.jsx)(Ai, {
                video: e,
                gameTitleNecessary: i
              })
            }, e.id)))
          }), (0, u.jsxs)("section", {
            className: Wi.videoList,
            children: [(0, u.jsxs)("h3", {
              className: Wi.sectionHeader,
              children: [s, (0, u.jsxs)("div", {
                className: Wi.arrowNav,
                children: [(0, u.jsx)("button", {
                  className: [Wi.arrow, Wi.previous].join(" "),
                  type: "button",
                  ref: y,
                  "aria-label": r.formatMessage(Gi.previous_button_label)
                }), (0, u.jsx)("button", {
                  className: [Wi.arrow, Wi.next].join(" "),
                  type: "button",
                  ref: h,
                  "aria-label": r.formatMessage(Gi.next_button_label),
                  onKeyDown: e => {
                    if ("Tab" === e.key && !e.shiftKey) {
                      const a = g?.slides[g?.activeIndex].querySelector('a, button, [role="button"]');
                      a && (e.preventDefault(), a.focus())
                    }
                  }
                })]
              })]
            }), (0, u.jsx)("div", {
              className: [Wi.items, k % 1 != 0 ? Wi.partial : ""].join(" "),
              children: (0, u.jsx)("div", {
                className: Wi.trackWrapper,
                children: k && (0, u.jsx)(oe.RC, {
                  className: Wi.track,
                  slidesPerView: k,
                  spaceBetween: 24,
                  onInit: e => {
                    f(e)
                  },
                  grabCursor: !0,
                  navigation: p,
                  modules: [Lt.Vx],
                  slideClass: (0, l.classList)("swiper-slide"),
                  onSlideNextTransitionEnd: () => {
                    n({
                      event: "carousel_next",
                      element_placement: s?.toLowerCase() ?? ""
                    })
                  },
                  onSlidePrevTransitionEnd: () => {
                    n({
                      event: "carousel_previous",
                      element_placement: s?.toLowerCase() ?? ""
                    })
                  },
                  onSlideChangeTransitionEnd: () => {
                    n({
                      event: "carousel_swipe",
                      element_placement: s?.toLowerCase() ?? ""
                    })
                  },
                  children: x
                })
              })
            })]
          })
        })),
        Qi = e => {
          let {
            children: a,
            ...t
          } = e;
          return (0, u.jsx)("span", {
            ...t,
            className: "rockstargames-sites-legacyacd86b7f5778381df8fac4a3f7489f60",
            children: a
          })
        };
      var Yi = t(74309),
        Xi = t(3025),
        Zi = t(9137);
      const {
        Gen9CoreCarousel: Ji,
        framer: er,
        useTinaModuleFetchByIds: ar,
        withSimpleErrorBoundary: tr
      } = n, sr = {
        Card: it,
        CardWithImageGallery: e => {
          let {
            id: a,
            title: t,
            content: s,
            size: i = "md",
            expandedType: r = "gallery",
            textOverlayProps: n = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            images: o = [],
            deckProps: l = {},
            tina: d = {},
            payload: m,
            position: g = 0,
            sectionTitle: f = "",
            cardIds: p
          } = e;
          const b = (0, S.useTinaPayload)(),
            k = m ?? b,
            v = d?.payload?.meta?.cdn ?? k?.meta?.prod ?? !1,
            y = ((e, a) => e?.map((e => e?.image ? {
              ...e,
              image: {
                ...e.image,
                prod: a
              }
            } : e)))(o, v),
            [h, _] = (0, c.useState)(l?.size ?? i),
            {
              parent: x,
              main: j,
              thumbs: N
            } = $t?.cardWithImageGallery?.gallery ?? {};
          return (0, c.useEffect)((() => {
            _(l?.size ?? i)
          }), [l?.size, i]), (0, u.jsx)(Ua, {
            id: a,
            position: g,
            sectionTitle: f,
            payload: {
              content: s,
              meta: {},
              payload: k
            },
            title: t,
            size: h,
            expandedType: r,
            images: y,
            deckProps: l,
            prod: v,
            variants: $t.cardWithImageGallery,
            textOverlayProps: n,
            modalProps: {
              className: Dt.customModal,
              contentClassName: Dt.customModalContent
            },
            expandedCardContents: (0, u.jsx)(Vt, {
              images: y,
              title: t,
              navigation: !0,
              thumbsVisible: !0,
              variants: {
                parent: x,
                main: j,
                thumbs: N
              },
              transition: {
                parent: Mt.cardOpen,
                main: Mt.cardOpen,
                thumbs: Mt.cardOpen
              }
            }),
            cardIds: p,
            children: (0, u.jsx)("div", {
              className: Dt.content,
              children: (0, u.jsx)(Da, {
                title: t,
                size: h,
                textOverlayProps: n,
                children: (0, u.jsx)(Vt, {
                  images: y,
                  title: t,
                  navigation: !1,
                  thumbsVisible: !1
                })
              })
            })
          })
        },
        TextCard: e => {
          let {
            title: a,
            content: t,
            size: s = "md",
            badgeText: i
          } = e;
          const r = {
            ...(0, S.useTinaComponents)(),
            HTMLElement: Oe,
            UnorderedList: Xe.A,
            ListItem: At.A
          };
          return (0, u.jsx)("div", {
            className: "rockstargames-sites-legacycfa8d259e6ae05cd5f97d50306be5ffe",
            "data-size": s,
            children: (0, u.jsxs)("div", {
              className: "rockstargames-sites-legacya4a39548fac12526e8721ffa8813e66a",
              children: [i && (0, u.jsx)("div", {
                className: "rockstargames-sites-legacycf77e65e2af63ee114825607dde3d11e",
                children: i
              }), (0, u.jsxs)("div", {
                className: "rockstargames-sites-legacyf903ce7e605696e1bc18c4bc22274a6e",
                children: [a && (0, u.jsx)("h3", {
                  children: a
                }), (0, u.jsx)(S.TinaParser, {
                  components: r,
                  tina: {
                    payload: {
                      content: t
                    }
                  }
                })]
              })]
            })
          })
        },
        ...n
      };
      var ir = function(e) {
        return e.extraSmall = "xs", e.small = "sm", e.medium = "md", e.large = "lg", e.extraLarge = "xl", e.frontOfBox = "fob", e.custom = "custom", e
      }(ir || {});
      const rr = er.withFadeIn(tr((e => {
          let {
            cards: a = [],
            size: t,
            name: s,
            title: i,
            description: r,
            disclaimer: n,
            customSlidesPerView: o = null,
            theme: l = "none",
            cardSizeBreakpoints: d = {},
            customAspectRatio: m = "3/1",
            titleBadge: g = null,
            id: f = ""
          } = e;
          const p = (0, c.useRef)(null),
            b = Fe().map(a, "id"),
            k = ar({
              ids: b
            }),
            [v, y] = (0, c.useState)(o),
            [h] = (0, X.useSearchParams)(),
            [_, x] = (0, c.useState)(!1);
          (0, c.useEffect)((() => {
            let e;
            if (e = ir.frontOfBox, t === e) {
              const e = h.get("section");
              if (e && "games" === e && !_ && (x(!0), p.current)) {
                const e = 100;
                window.scrollTo(0, p.current.offsetTop - e)
              }
            }
          }), []), (0, c.useEffect)((() => {
            if (!p.current) return;
            const e = () => {
              const e = o || window.getComputedStyle(p.current).getPropertyValue("--slides-per-view");
              y(e)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }));
          const j = (0, c.useMemo)((() => {
            let e = 0;
            if (!k) return null;
            let a = "blank",
              s = !1;
            return k.forEach((e => {
              "cover-card" === e?.tina?.payload?.meta?.type && (a = e?.id, void 0 !== e?.tina?.payload?.content[0]?.excludeFromModal && (s = e.tina.payload.content[0].excludeFromModal))
            })), k.reduce(((r, n) => {
              if (n) {
                const {
                  id: c,
                  tina: o
                } = n, d = Fe().clone(o);
                Fe().set(d, "payload.meta.id", c);
                let m = b;
                m = b.filter((e => e !== a || e === a && !s)), r.push((0, u.jsx)(S.TinaParser, {
                  components: sr,
                  tina: d,
                  componentProps: {
                    deckProps: {
                      size: t
                    },
                    tina: d,
                    id: c,
                    position: e,
                    sectionTitle: i,
                    theme: l,
                    cardIds: m
                  }
                }, c)), e += 1
              }
              return r
            }), [])
          }), [k, t]);
          return (0, u.jsxs)("div", {
            className: "rockstargames-sites-legacycf8eaaa96e41e0c9b5a5a1745ded9986",
            "data-theme": l,
            ref: p,
            id: f,
            children: [(0, u.jsx)(Ji, {
              description: r,
              size: t,
              cardSizeBreakpoints: d,
              slideChildren: j,
              title: i,
              name: s,
              customSlidesPerView: v,
              customAspectRatio: m,
              titleBadge: g,
              theme: l
            }), n && (0, u.jsx)("div", {
              className: "rockstargames-sites-legacyd6d0f9d842469dec608825829148dff6",
              children: (0, u.jsx)("span", {
                className: "rockstargames-sites-legacye22c0580e1e1d2471b4ca2e60e6b900f",
                children: (0, u.jsx)(Ti, {
                  html: n
                })
              })
            })]
          })
        }))),
        nr = e => {
          let {
            buttonStyle: a = "borderless",
            platformsAndLinks: t = [],
            label: s = ""
          } = e;
          return (0, u.jsxs)("div", {
            className: "rockstargames-sites-legacyd68369e5750fd5a6745b7f55ecdfb95a",
            children: [s && (0, u.jsx)("div", {
              className: "rockstargames-sites-legacyb38a559f97761aa5d5f14f3048c79409",
              children: s
            }), (0, u.jsx)("div", {
              className: "rockstargames-sites-legacye81ac885e47451ab08344f0c1fa13b7c",
              children: t?.length ? t.map((e => (0, u.jsx)(mt, {
                platformItem: e.platform,
                href: e.href,
                variant: "platform",
                platformStyle: a,
                gtm: e.gtm
              }, `${e.key}-${e.href}-${e.platform}`))) : ""
            })]
          })
        },
        cr = e => {
          let {
            id: a,
            title: t,
            body: s,
            backgroundImageAndMask: i,
            expandingButton: r,
            image: n,
            buttonCollections: o,
            ...g
          } = e;
          const [f] = (0, X.useSearchParams)(), {
            key: p
          } = (0, X.useLocation)(), b = (0, l.useLocale)(), k = n?.sources?.[b] ?? n?.sources?.en_us, v = k?.mobile ?? k?.desktop, {
            track: y
          } = (0, m.useGtmTrack)(), {
            ref: h,
            inView: _,
            entry: x
          } = (0, d.useInView)({
            threshold: .6
          }), [j, N] = (0, c.useState)(!1), w = (0, S.useGetCdnSource)(v ?? null), C = (0, S.useGetCdnSource)(i?.backgroundImage?.mobile), T = (0, S.useGetCdnSource)(i?.backgroundImage?.desktop ?? C), I = (0, S.useGetCdnSource)(i?.backgroundImageMask?.mobile), L = (0, S.useGetCdnSource)(i?.backgroundImageMask?.desktop ?? I), P = !(!L && !I), E = {
            "--background-image-desktop": `url(${T})`,
            "--background-image-mobile": `url(${C})`,
            "--image-mask-desktop": `url(${L})`,
            "--image-mask-mobile": `url(${I})`,
            "--background-attachment": i?.backgroundImage?._memoq?.backgroundAttachment || "",
            "--background-clip": i?.backgroundImage?._memoq?.backgroundClip || "",
            "--background-color": i?.backgroundImage?._memoq?.backgroundColor || "",
            "--background-origin": i?.backgroundImage?._memoq?.backgroundOrigin || "",
            "--background-position": i?.backgroundImage?._memoq?.backgroundPosition || "",
            "--background-repeat": i?.backgroundImage?._memoq?.backgroundRepeat || "",
            "--background-size": i?.backgroundImage?._memoq?.backgroundSize || ""
          };
          (0, c.useEffect)((() => {
            x?.target && f.get("section") && (0, l.detectIfWeShouldAnchorSomewhere)()
          }), [p, x?.target]), (0, c.useEffect)((() => {
            _ && !j && (y({
              event: "page_section_impression",
              element_placement: g?._memoq?.title?.toLowerCase()
            }), N(!0))
          }), [_]);
          let z = (0, u.jsx)(u.Fragment, {});
          return P || (E.background = `url(${T}) center / cover no-repeat`), z = (0, u.jsxs)("div", {
            className: "rockstargames-sites-legacyadcd8d241981100755a742c74e7bd94f",
            id: a ?? "",
            ref: h,
            children: [(0, u.jsxs)("div", {
              className: "rockstargames-sites-legacybda7a52557d65b5b77591cb72cd816cd",
              children: [(0, u.jsxs)("div", {
                className: "rockstargames-sites-legacyac76b38d897113817fe23bc213c15e78",
                children: [(0, u.jsx)("h2", {
                  className: "rockstargames-sites-legacyf3a2443fd11c6b4985040c0c8b8626dd",
                  children: t
                }), s && (0, u.jsx)("div", {
                  className: "rockstargames-sites-legacydbc11e7a1290bf63806e68015190226e",
                  dangerouslySetInnerHTML: {
                    __html: (B = s, B ? B.split(/\r?\n/).filter((e => e.trim())).map((e => `<p>${e}</p>`)).join("") : "")
                  }
                })]
              }), o?.length && o.map((e => (0, u.jsx)(nr, {
                ...e
              }, `${e.key}-${e.label}`)))]
            }), (0, u.jsx)("div", {
              className: "rockstargames-sites-legacydeba9959998ba6d23ac352b4e9ecc4f6",
              children: w && (0, u.jsx)("img", {
                src: w,
                alt: "Red Dead Redemption"
              })
            })]
          }), (0, u.jsx)(ce.motion.div, {
            className: "rockstargames-sites-legacycac3b31dae278727a39f512006bda9e5",
            initial: "hidden",
            animate: "visible",
            variants: {
              visible: {
                opacity: 1,
                width: "100%",
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
            style: E,
            "data-has-mask": P,
            children: z
          });
          var B
        },
        or = {
          pillBtn: "rockstargames-sites-legacyddd61c57b98274deba1ff3133021c385",
          selected: "rockstargames-sites-legacyfaeeb24b4865af92a9d379b83295e3f7",
          legacyPageTemplate: "rockstargames-sites-legacyee87a30aaa5f73108a19c7f2e825c468",
          maxWidthContainer: "rockstargames-sites-legacyfefeb2c2da5d3a02fe39fd2219a4b3b7",
          contentWrapper: "rockstargames-sites-legacyef5fd586a3a3d71a6b742534583a024c",
          videosContainer: "rockstargames-sites-legacyf8000eec4a4f435f367d27b1d20a53de",
          videoPlayerContainer: "rockstargames-sites-legacyff18d36d928ea542eeef6bb5d05262d5",
          rdrUltra: "rockstargames-sites-legacye92ae324b26f8bcac90fd4e5fd37615c",
          universalCyrillic: "rockstargames-sites-legacya759b2acd24574b2ee2c6bfd7eec2630"
        },
        lr = e => {
          let {
            headerFont: a,
            hero: t,
            featureBlockBackgroundImageGroup: s,
            features: i,
            fob: r,
            highlightCollection: n,
            imageGallery: c,
            relatedLinks: o,
            titleSlug: d,
            backgroundFields: m,
            tinaModuleId: g,
            videoProps: f
          } = e;
          const p = a ? or[a] : "",
            b = {},
            k = {
              Deck: rr,
              CoverCard: It,
              Card: it
            },
            v = f?.id || "",
            y = (0, l.useLocale)(),
            _ = m?.style["--legacy-custom-background"] || m?.style["--legacy-background-color"] || "#161616";
          return b["--playlist-background-color"] = f?.["--playlist-background-color"], b["--template-bg-color"] = _, (0, u.jsx)(w, {
            children: (0, u.jsxs)("div", {
              className: [or.legacyPageTemplate, p].join(" "),
              "data-brand": d,
              style: b,
              children: [t && (0, u.jsx)(x(), {
                animated: t.animated,
                content: t.content,
                id: "hero",
                images: t.images,
                shardsSection: t.shardsSection,
                subHero: t.subHero,
                type: t.type
              }), i?.length && (0, u.jsx)(Y, {
                id: "features",
                features: i,
                backgroundImageGroup: s
              }), (0, u.jsxs)("div", {
                className: or.maxWidthContainer,
                children: [c?.collections?.length && (0, u.jsx)(Ve, {
                  id: "imageGallery",
                  imageGallery: c
                }), n?.highlights && (0, u.jsx)("div", {
                  className: or.contentWrapper,
                  children: (0, u.jsx)(j.Highlights, {
                    highlights: n?.highlights,
                    subtitle: n?.subtitle ?? n?._memoq?.subtitle
                  })
                }), (0, u.jsx)(u.Fragment, {
                  children: f && v && (0, u.jsxs)("div", {
                    className: or.videosContainer,
                    children: [(0, u.jsx)("h2", {
                      children: f.sectionLabel
                    }), (0, u.jsx)("div", {
                      className: or.videoPlayerContainer,
                      children: (0, u.jsx)(C.VideoWithPlaylist, {
                        tagIds: [Number(f.videoTag ?? 0)],
                        className: or.legacyVideoStyles,
                        autoplay: !1,
                        locale: y,
                        playlistTitle: f.playlistTitle,
                        currentVideoId: v
                      })
                    })]
                  })
                }), r && (0, u.jsx)(cr, {
                  id: "order",
                  ...r
                }), o && (0, u.jsx)(re, {
                  id: "relatedLinks",
                  title: o?.title,
                  buttons: o?.buttons
                })]
              }), (0, u.jsx)("div", {
                className: or.tinaModuleContainer,
                children: (0, u.jsx)($e, {
                  components: k,
                  id: g
                })
              }), (0, u.jsx)("div", {
                className: or.maxWidthContainer,
                children: d && (0, u.jsx)(h, {
                  id: "rating",
                  titleSlug: d
                })
              })]
            })
          })
        }
    },
    30030: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => b
      });
      var s = t(85719),
        i = t(80391),
        r = t(45302),
        n = t(28985),
        c = t(32903),
        o = t(49429),
        l = t(11008),
        d = t(49564),
        m = t(66787),
        g = t(55815),
        u = t(93221),
        f = t(47240);
      const p = {
          pc: s,
          ps: i,
          ps3: r,
          ps4: n,
          xbox: c,
          xboxone: o,
          switch: l,
          xbox360: d,
          googleplay: m,
          applestore: g,
          questionMark: u,
          default: "",
          xboxseriesxs: t(81715),
          ps5: f
        },
        b = e => p[e] || null
    },
    65211: e => {
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

      function i(e, a) {
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
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          n = new Set,
          c = new Set;
        for (r.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = i(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "GetAudioAlbum")
    },
    50828: e => {
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
        body: "query UserGetVote($foreignId: String!, $foreignType: String!) {\n    userGetVote(foreign_id: $foreignId, foreign_type: $foreignType) {\n        vote\n    }\n}\n\nmutation UserCastVote(\n    $foreignId: String!\n    $foreignType: String!\n    $vote: Boolean!\n) {\n    userCastVote(\n        foreign_id: $foreignId\n        foreign_type: $foreignType\n        vote: $vote\n    ) {\n        vote\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function i(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function r(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          n = new Set,
          c = new Set;
        for (r.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = i(e, a);
          s && t.definitions.push(s)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.UserGetVote = r(a, "UserGetVote"), e.exports.UserCastVote = r(a, "UserCastVote")
    },
    95520: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "GameData"
          },
          variableDefinitions: [{
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
                value: "withMetaTitle"
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
            defaultValue: {
              kind: "StringValue",
              value: "/",
              block: !1
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
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "metaUrl"
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
                      value: "withMetaTitle"
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
                  value: "titleSlug"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "titleSlug"
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
                    value: "ratingDescriptors"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingFooter"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingImg"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingUrl"
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
        body: 'query GameData(\n    $titleSlug: String!\n    $locale: String!\n    $withMetaTitle: Boolean = false\n    $metaUrl: String = "/"\n) {\n    meta: metaUrl(locale: $locale, domain: "www", url: $metaUrl)\n        @include(if: $withMetaTitle) {\n        title\n    }\n    game(titleSlug: $titleSlug, locale: $locale) {\n        ratingDescriptors\n        ratingFooter\n        ratingImg\n        ratingUrl\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function i(e, a) {
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
      })), e.exports = a, e.exports.GameData = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          n = new Set,
          c = new Set;
        for (r.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = i(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "GameData")
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

      function i(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function r(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          n = new Set,
          c = new Set;
        for (r.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = i(e, a);
          s && t.definitions.push(s)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesList = r(a, "TinaModulesList"), e.exports.TinaModulesInfo = r(a, "TinaModulesInfo")
    },
    48524: e => {
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
        body: "query UserGetVote($foreign_id: String!, $foreign_type: String!) {\n    userGetVote(foreign_id: $foreign_id, foreign_type: $foreign_type) {\n        vote\n    }\n}\n\nmutation UserCastVote(\n    $foreign_id: String!\n    $foreign_type: String!\n    $vote: Boolean!\n) {\n    userCastVote(\n        foreign_id: $foreign_id\n        foreign_type: $foreign_type\n        vote: $vote\n    ) {\n        vote\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function i(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function r(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          n = new Set,
          c = new Set;
        for (r.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = i(e, a);
          s && t.definitions.push(s)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.UserGetVote = r(a, "UserGetVote"), e.exports.UserCastVote = r(a, "UserCastVote")
    },
    46368: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "FragmentDefinition",
          name: {
            kind: "Name",
            value: "postFields"
          },
          typeCondition: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "RockstarGames_Newswire_Model_Entity_Post_o"
            }
          },
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
                value: "name_slug"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "created"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "created_formatted"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "primary_tags"
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
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "secondary_tags"
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
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "preview_images_parsed"
              },
              arguments: [],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "newswire_block"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "square"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "d16x9"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "_fallback"
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
          kind: "FragmentDefinition",
          name: {
            kind: "Name",
            value: "paging"
          },
          typeCondition: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "RockstarGames_Cake_Graph_Type_Paging_o"
            }
          },
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "pageCount"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "page"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "count"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "nextPage"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "prevPage"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "perPage"
              },
              arguments: [],
              directives: []
            }]
          }
        }, {
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
                value: "limit"
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
                    value: "limit"
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
          end: 926
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
        body: 'fragment postFields on RockstarGames_Newswire_Model_Entity_Post_o {\n    id: id_hash\n    url\n    title\n    name_slug\n    created\n    created_formatted\n    primary_tags {\n        id\n        name\n    }\n    secondary_tags {\n        id\n        name\n    }\n    preview_images_parsed {\n        newswire_block {\n            square\n            d16x9\n            _fallback\n        }\n    }\n}\nfragment paging on RockstarGames_Cake_Graph_Type_Paging_o {\n    pageCount\n    page\n    count\n    nextPage\n    prevPage\n    perPage\n}\n\nquery NewswireList(\n    $locale: String!\n    $page: Int!\n    $limit: Int\n    $tagId: Int\n    $metaUrl: String!\n    $cache: Boolean = true\n) {\n    meta: metaUrl(url: $metaUrl, domain: "www", locale: $locale) {\n        title\n    }\n    posts(page: $page, tagId: $tagId, locale: $locale, limit: $limit) {\n        paging {\n            ...paging\n        }\n        results {\n            ...postFields\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function i(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function r(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          n = new Set,
          c = new Set;
        for (r.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = i(e, a);
          s && t.definitions.push(s)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.postFields = r(a, "postFields"), e.exports.paging = r(a, "paging"), e.exports.NewswireList = r(a, "NewswireList")
    },
    46823: e => {
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
                value: "orderBy"
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
                value: "orderDirection"
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
                value: "tinaModulesList"
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
                  value: "orderBy"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "orderBy"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "orderDirection"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "orderDirection"
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
                        value: "name"
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
                            value: "id"
                          },
                          arguments: [],
                          directives: []
                        }, {
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
            }]
          }
        }],
        loc: {
          start: 0,
          end: 495
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
        body: "query TinaModulesList(\n    $type: String\n    $orderBy: String\n    $orderDirection: String\n    $locale: String!\n) {\n    tinaModulesList(\n        type: $type\n        orderBy: $orderBy\n        orderDirection: $orderDirection\n        locale: $locale\n    ) {\n        results {\n            id: id_hash\n            name\n            type\n            tina {\n                id\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function i(e, a) {
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
      })), e.exports = a, e.exports.TinaModulesList = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          n = new Set,
          c = new Set;
        for (r.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = i(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "TinaModulesList")
    },
    5328: (e, a, t) => {
      var s = {
        "./applestore.svg": 49733,
        "./googleplay.svg": 62749,
        "./left.svg": 84941,
        "./pc.svg": 39821,
        "./ps.svg": 65437,
        "./ps3.svg": 33492,
        "./ps4.svg": 65115,
        "./ps5.svg": 23146,
        "./right.svg": 80304,
        "./switch.svg": 22454,
        "./x.svg": 66426,
        "./xbox.svg": 59129,
        "./xboxone.svg": 42659,
        "./xboxseriesxs.svg": 36773
      };

      function i(e) {
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 5328
    },
    36672: (e, a, t) => {
      var s = {
        "./cero_a.png": 97558,
        "./cero_b.svg": 29362,
        "./cero_c.svg": 67299,
        "./cero_d.svg": 9020,
        "./cero_rp.png": 17065,
        "./cero_z.svg": 46554,
        "./djctq_10.svg": 51392,
        "./djctq_12.svg": 8674,
        "./djctq_14.svg": 89836,
        "./djctq_16.svg": 54222,
        "./djctq_18.svg": 58648,
        "./djctq_er.svg": 8054,
        "./djctq_l.svg": 23781,
        "./esrb_ao.svg": 89235,
        "./esrb_e.svg": 24256,
        "./esrb_e10plus.svg": 65315,
        "./esrb_m.svg": 87256,
        "./esrb_m_ao.svg": 10419,
        "./esrb_rp.svg": 89069,
        "./esrb_rplm17.svg": 95088,
        "./esrb_t.svg": 18177,
        "./fpb_13.svg": 86595,
        "./fpb_16.svg": 28414,
        "./fpb_18.svg": 81864,
        "./fpb_pg.svg": 77404,
        "./grac_12.svg": 8711,
        "./grac_15.svg": 6312,
        "./grac_18.svg": 48157,
        "./grac_19.svg": 19612,
        "./grac_a.svg": 89303,
        "./gsrr_0.svg": 67443,
        "./gsrr_12.svg": 49980,
        "./gsrr_15.svg": 24611,
        "./gsrr_18.svg": 68918,
        "./gsrr_6.svg": 63117,
        "./nmc_12.svg": 2024,
        "./nmc_16.svg": 50324,
        "./nmc_18.svg": 52466,
        "./nmc_21.svg": 3950,
        "./nmc_3.svg": 9188,
        "./nmc_7.svg": 18712,
        "./oflc_g.svg": 21022,
        "./oflc_m.svg": 22772,
        "./oflc_ma15.svg": 9815,
        "./oflc_pg.svg": 47580,
        "./oflc_r18.svg": 74432,
        "./pegi_12.svg": 15821,
        "./pegi_16.svg": 86929,
        "./pegi_18.svg": 51575,
        "./pegi_3.svg": 27351,
        "./pegi_4.svg": 82424,
        "./pegi_6.svg": 46618,
        "./pegi_7.svg": 40491,
        "./pegi_rp.png": 94293,
        "./rars_0.svg": 36855,
        "./rars_12.svg": 98952,
        "./rars_16.svg": 65044,
        "./rars_18.svg": 72690,
        "./rars_6.svg": 51913,
        "./usk_0.svg": 84406,
        "./usk_12.svg": 26151,
        "./usk_16.svg": 87707,
        "./usk_18.svg": 90717,
        "./usk_6.svg": 2696,
        "./usk_rp.svg": 21228,
        "./vaci_rp.png": 32323
      };

      function i(e) {
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 36672
    },
    8194: (e, a, t) => {
      var s = {
        "./cero_a.png": 97558,
        "./cero_b.svg": 29362,
        "./cero_c.svg": 67299,
        "./cero_d.svg": 9020,
        "./cero_rp.png": 17065,
        "./cero_z.svg": 46554,
        "./djctq_10.svg": 51392,
        "./djctq_12.svg": 8674,
        "./djctq_14.svg": 89836,
        "./djctq_16.svg": 54222,
        "./djctq_18.svg": 58648,
        "./djctq_er.svg": 8054,
        "./djctq_l.svg": 23781,
        "./esrb_ao.svg": 89235,
        "./esrb_e.svg": 24256,
        "./esrb_e10plus.svg": 65315,
        "./esrb_m.svg": 87256,
        "./esrb_m_ao.svg": 10419,
        "./esrb_rp.svg": 89069,
        "./esrb_rplm17.svg": 95088,
        "./esrb_t.svg": 18177,
        "./fpb_13.svg": 86595,
        "./fpb_16.svg": 28414,
        "./fpb_18.svg": 81864,
        "./fpb_pg.svg": 77404,
        "./grac_12.svg": 8711,
        "./grac_15.svg": 6312,
        "./grac_18.svg": 48157,
        "./grac_19.svg": 19612,
        "./grac_a.svg": 89303,
        "./gsrr_0.svg": 67443,
        "./gsrr_12.svg": 49980,
        "./gsrr_15.svg": 24611,
        "./gsrr_18.svg": 68918,
        "./gsrr_6.svg": 63117,
        "./nmc_12.svg": 2024,
        "./nmc_16.svg": 50324,
        "./nmc_18.svg": 52466,
        "./nmc_21.svg": 3950,
        "./nmc_3.svg": 9188,
        "./nmc_7.svg": 18712,
        "./oflc_g.svg": 21022,
        "./oflc_m.svg": 22772,
        "./oflc_ma15.svg": 9815,
        "./oflc_pg.svg": 47580,
        "./oflc_r18.svg": 74432,
        "./pegi_12.svg": 15821,
        "./pegi_16.svg": 86929,
        "./pegi_18.svg": 51575,
        "./pegi_3.svg": 27351,
        "./pegi_4.svg": 82424,
        "./pegi_6.svg": 46618,
        "./pegi_7.svg": 40491,
        "./pegi_rp.png": 94293,
        "./rars_0.svg": 36855,
        "./rars_12.svg": 98952,
        "./rars_16.svg": 65044,
        "./rars_18.svg": 72690,
        "./rars_6.svg": 51913,
        "./usk_0.svg": 84406,
        "./usk_12.svg": 26151,
        "./usk_16.svg": 87707,
        "./usk_18.svg": 90717,
        "./usk_6.svg": 2696,
        "./usk_rp.svg": 21228,
        "./vaci_rp.png": 32323
      };

      function i(e) {
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 8194
    },
    65287: (e, a, t) => {
      var s = {
        "./bounty.png": 7502,
        "./collector.png": 24970,
        "./moonshiner.png": 2661,
        "./naturalist.png": 16386,
        "./trader.png": 38635
      };

      function i(e) {
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 65287
    },
    86751: (e, a, t) => {
      var s = {
        "./GTAOnline.jpg": 10111,
        "./GTATrilogy.jpg": 84752,
        "./IV.jpg": 73483,
        "./V.jpg": 98754,
        "./VI/desktop.png": 3660,
        "./VI/mobile.png": 96048,
        "./agent.jpg": 78323,
        "./beaterator.jpg": 23587,
        "./bully-scholarshipedition.jpg": 67181,
        "./bully.jpg": 85332,
        "./chinatownwars.jpg": 44596,
        "./episodesfromlibertycity.jpg": 18518,
        "./grandtheftauto-gba.jpg": 7509,
        "./grandtheftauto3.jpg": 42787,
        "./gta-online.jpg": 26788,
        "./gta-v.jpg": 33143,
        "./gta.jpg": 8494,
        "./gta2.jpg": 59942,
        "./gtacomplete.jpg": 64923,
        "./gtalondon.jpg": 85256,
        "./italianjob.jpg": 42043,
        "./lanoire-vr-case-files.jpg": 52014,
        "./lanoire.jpg": 59414,
        "./lanoire_2.jpg": 52461,
        "./libertycitystories.jpg": 89273,
        "./manhunt.jpg": 95903,
        "./manhunt2.jpg": 3933,
        "./maxpayne.jpg": 77321,
        "./maxpayne2.jpg": 13095,
        "./maxpayne3.jpg": 57258,
        "./midnightclub.jpg": 12602,
        "./midnightclub2.jpg": 3818,
        "./midnightclub3.jpg": 59655,
        "./midnightclubLA-complete.jpg": 63839,
        "./midnightclubLA.jpg": 79795,
        "./oni.jpg": 24808,
        "./rdr-goty.jpg": 19552,
        "./reddeadonline.jpg": 73534,
        "./reddeadredemption.jpg": 27064,
        "./reddeadredemption2.jpg": 31248,
        "./reddeadrevolver.jpg": 79114,
        "./rockstar-games-collection-edition-1.jpg": 93573,
        "./sanandreas.jpg": 14724,
        "./skateanddestroy.jpg": 90377,
        "./smugglersrun.jpg": 73564,
        "./smugglersrun2.jpg": 22844,
        "./smugglersrunwarzones.jpg": 84715,
        "./stateofemergency.jpg": 28005,
        "./tabletennis.jpg": 84141,
        "./theballadofgaytony.jpg": 14825,
        "./thelostanddamned.jpg": 52591,
        "./thewarriors.jpg": 96148,
        "./undeadnightmare.jpg": 32830,
        "./vicecity.jpg": 91480,
        "./vicecitystories.jpg": 10869,
        "./wildmetal.jpg": 85613
      };

      function i(e) {
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 86751
    },
    39294: (e, a, t) => {
      var s = {
        "./GTAOnline.jpg": 10111,
        "./GTATrilogy.jpg": 84752,
        "./IV.jpg": 73483,
        "./V.jpg": 98754,
        "./agent.jpg": 78323,
        "./beaterator.jpg": 23587,
        "./bully-scholarshipedition.jpg": 67181,
        "./bully.jpg": 85332,
        "./chinatownwars.jpg": 44596,
        "./episodesfromlibertycity.jpg": 18518,
        "./grandtheftauto-gba.jpg": 7509,
        "./grandtheftauto3.jpg": 42787,
        "./gta-online.jpg": 26788,
        "./gta-v.jpg": 33143,
        "./gta.jpg": 8494,
        "./gta2.jpg": 59942,
        "./gtacomplete.jpg": 64923,
        "./gtalondon.jpg": 85256,
        "./italianjob.jpg": 42043,
        "./lanoire-vr-case-files.jpg": 52014,
        "./lanoire.jpg": 59414,
        "./lanoire_2.jpg": 52461,
        "./libertycitystories.jpg": 89273,
        "./manhunt.jpg": 95903,
        "./manhunt2.jpg": 3933,
        "./maxpayne.jpg": 77321,
        "./maxpayne2.jpg": 13095,
        "./maxpayne3.jpg": 57258,
        "./midnightclub.jpg": 12602,
        "./midnightclub2.jpg": 3818,
        "./midnightclub3.jpg": 59655,
        "./midnightclubLA-complete.jpg": 63839,
        "./midnightclubLA.jpg": 79795,
        "./oni.jpg": 24808,
        "./rdr-goty.jpg": 19552,
        "./reddeadonline.jpg": 73534,
        "./reddeadredemption.jpg": 27064,
        "./reddeadredemption2.jpg": 31248,
        "./reddeadrevolver.jpg": 79114,
        "./rockstar-games-collection-edition-1.jpg": 93573,
        "./sanandreas.jpg": 14724,
        "./skateanddestroy.jpg": 90377,
        "./smugglersrun.jpg": 73564,
        "./smugglersrun2.jpg": 22844,
        "./smugglersrunwarzones.jpg": 84715,
        "./stateofemergency.jpg": 28005,
        "./tabletennis.jpg": 84141,
        "./theballadofgaytony.jpg": 14825,
        "./thelostanddamned.jpg": 52591,
        "./thewarriors.jpg": 96148,
        "./undeadnightmare.jpg": 32830,
        "./vicecity.jpg": 91480,
        "./vicecitystories.jpg": 10869,
        "./wildmetal.jpg": 85613
      };

      function i(e) {
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 39294
    },
    55889: (e, a, t) => {
      var s = {
        "./VI/desktop.png": 3660
      };

      function i(e) {
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 55889
    },
    75877: (e, a, t) => {
      var s = {
        "./VI/mobile.png": 96048
      };

      function i(e) {
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 75877
    },
    49733: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c6affc8b37ec4c75486ab6d12b2de395.svg"
    },
    62749: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2ef574ea2aa502447d579267ff37e251.svg"
    },
    84941: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3c6134ba61610ead6af640361535e346.svg"
    },
    39821: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    65437: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27ae07e3226006749e6cb6428bc62bb1.svg"
    },
    33492: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg"
    },
    65115: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg"
    },
    23146: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b12e4e9678e7a4ebea34905926feeb90.svg"
    },
    80304: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cf1b78cec82c717ea9c2155ce4093736.svg"
    },
    22454: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg"
    },
    66426: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c453a914f0b049334120adfcba614e5.svg"
    },
    59129: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f74e871585118640ffd9ce881181a176.svg"
    },
    42659: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg"
    },
    36773: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5bd8456deb2338503b8fd44786b5fa07.svg"
    },
    97558: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51b141250a4851d7ec3673d88dbd20a.png"
    },
    29362: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7ac89f9e00ded04ef4b2dd3eaf3e8734.svg"
    },
    67299: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f44dd7aad9d6c62e40a11f51252f59b8.svg"
    },
    9020: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/204116b24cd9e9ab4e71af21b3a96179.svg"
    },
    17065: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/676b3908098d8b19f1019ce361af45ec.png"
    },
    46554: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/03ab76c58ed61a83bf035c923dbe32b2.svg"
    },
    51392: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f468aef6f0b5399d5c0f6b2e95b60cc5.svg"
    },
    8674: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b31c79d361cfd92e1a405dbbf4890bd.svg"
    },
    89836: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3689ac97526f00a4537e1b38ec82a074.svg"
    },
    54222: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07f9f9e93ec430813e74cbce545962c4.svg"
    },
    58648: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/608f591c35aff9d47091dd7fe9a8fb13.svg"
    },
    8054: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/198ced82807c854e92e84e23f7434c91.svg"
    },
    23781: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/edf01daa4f0392081705c17a74d8a146.svg"
    },
    89235: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c4dd58f5b5b97796b6c6177de364dd36.svg"
    },
    24256: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/201de0eb81b09ea93aa1aef2a6824b7c.svg"
    },
    65315: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/534078f6307f97ce0d70e0bb885f9d77.svg"
    },
    87256: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f4b0d9409df1e8a420b2118e4e601263.svg"
    },
    10419: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/092865e0ddae5190dc3c0284ee3c21bd.svg"
    },
    89069: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/80dd50a2fa9aae3b5d6effdb2d9c2661.svg"
    },
    95088: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d471eef7883043fdabe1b3ed17a72b3.svg"
    },
    18177: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/35cf853d7882b090b56837bd08127da1.svg"
    },
    86595: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/72e8749316b4d1f52925b95e075e9c24.svg"
    },
    28414: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c2acdad576048f5c48b2ee6a2a2a90a3.svg"
    },
    81864: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f52c5ab315a1ff90360e06372c3f2c0.svg"
    },
    77404: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d1f569db6c94b4f81417f62e91759082.svg"
    },
    8711: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fe262661c6667d97f441e045067f4a0f.svg"
    },
    6312: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b457cab77cb82e1c05ad12628414576.svg"
    },
    48157: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1a3660d76f39527a79f8a49bb27a74be.svg"
    },
    19612: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1a3660d76f39527a79f8a49bb27a74be.svg"
    },
    89303: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/515f2884036e870905ae53f156692721.svg"
    },
    67443: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a3931a545299e205758648bce29e5c49.svg"
    },
    49980: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/05e9f2f27883d4cbabb3d4e4e16c9c74.svg"
    },
    24611: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f2fc4de3decfa0ac007f6cbd91658a9.svg"
    },
    68918: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cd57122be57f5e3a9dc4d0a0f2503fb1.svg"
    },
    63117: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d910a48fc0914f58ca80dc0732a7677.svg"
    },
    2024: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e99540df7fd07d75b08a5fbc02d4815.svg"
    },
    50324: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/937b7a0c5a128c39addf2adeba2d2f23.svg"
    },
    52466: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/46a27d8d16855dcc2a217f48243c6d82.svg"
    },
    3950: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e5792c85d5a88a0b7c75af087e4c6ee2.svg"
    },
    9188: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4da522682784ded3799c5a6f9f8c213a.svg"
    },
    18712: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/29ea20c333709a952c2eb3a2591d435d.svg"
    },
    21022: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c66fbb7c204e32da80ccb1693d15e00.svg"
    },
    22772: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/954d63889440be17e1ebef30b7026369.svg"
    },
    9815: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2eb8777f38cbd4d721261ad736c1f2e7.svg"
    },
    47580: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6079496697e537802f8a0eb5a83d2e94.svg"
    },
    74432: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a19fbf81b03db0fda00839496a3ce5.svg"
    },
    15821: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/129ef1c1a15ffc7afb86ce282e48decb.svg"
    },
    86929: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a5d9ca87a5bd107da9bb33d3d718e8.svg"
    },
    51575: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dabd13175cc0894dcb3f942d3d2dab86.svg"
    },
    27351: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/64d281825da1c782681bcc096d693e32.svg"
    },
    82424: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b43dddd485139df895fc531e79c75e68.svg"
    },
    46618: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c01f38f1051e751caa633d533202873c.svg"
    },
    40491: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27a26f477c8db29df4ceec4517c7f42b.svg"
    },
    94293: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a380d3ce353544a356e8ce48f8586804.png"
    },
    36855: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bba2f70e014e82b336a9f80625053089.svg"
    },
    98952: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/85250e8a0e5a5a1209f214423f6ebe43.svg"
    },
    65044: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1a94d5705ae3ddeb4c8c2fde79bfe81.svg"
    },
    72690: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a825976dddc59e33b3ce146ad6cd3d20.svg"
    },
    51913: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/01b0cd4466759aa349ac4036594ab6ae.svg"
    },
    84406: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c699f3b76c15209c8059f02507e11b5.svg"
    },
    26151: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b48e041f1412ff62c8a92dc424b59aa5.svg"
    },
    87707: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07362df5a2671c08b232a97d503cd6bf.svg"
    },
    90717: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c3fe2a9610ca8b42807dfa99073d68b3.svg"
    },
    2696: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/056d3bdf1f300bcb7efa4aebcfc5224d.svg"
    },
    21228: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/278e84e5a41407499c43a30f545da3e8.svg"
    },
    32323: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/703a546f7a5109c1e2af87a212135aad.png"
    },
    7502: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48754c6fc2f75b0554098423f2bda6d1.png"
    },
    24970: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e111377ba943e9eefaa9204f77c77093.png"
    },
    2661: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4639a2711d1bca49a87c302784050ee3.png"
    },
    16386: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/898794daaec68a69ef5ec4afaefe1948.png"
    },
    38635: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e77bb0f25a6ea37e8d831b12df9fa3c.png"
    },
    10111: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    84752: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/214a1cd1a2e7bb8f9b1e5d3846ca2993.jpg"
    },
    73483: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b01707ef5603a26c1f542088f8f7c09.jpg"
    },
    98754: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    },
    3660: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1aba112359a3d6747ad694a8c02a07c.png"
    },
    96048: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/26f95aa7677031d8cd56ea75250c7bdd.png"
    },
    78323: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d66bfe06a724f04c0941073de283297.jpg"
    },
    23587: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b95ab415fdd8bec89099d433d23e3c7.jpg"
    },
    67181: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5704d117b387578dfebe1290e556f963.jpg"
    },
    85332: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f58d386594d32f34c887da75032c5be.jpg"
    },
    44596: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a8074783730a47af2fe5c2b67ddf7d31.jpg"
    },
    18518: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0281770395dc77e41c1f40559a3d5989.jpg"
    },
    7509: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/15b671d990b1f3f941c6359b3235abf3.jpg"
    },
    42787: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/81001f378e085cd20f8ee0182e23cb7c.jpg"
    },
    26788: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    33143: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    },
    8494: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f34231941013a609948485830c84c072.jpg"
    },
    59942: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48371205a1d87d858baa85712d1f91bb.jpg"
    },
    64923: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/089fe525338554e2120a1aaaf81766d6.jpg"
    },
    85256: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc4dbe3e1d52c3fc405579090868d08.jpg"
    },
    42043: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/809c3d6f72a6752f0ebcc6c92d43db67.jpg"
    },
    52014: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b13400360d3873aa5ed169d38da1ff9f.jpg"
    },
    59414: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b1034f3c525b39db31d9017268a0aeb5.jpg"
    },
    52461: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b1034f3c525b39db31d9017268a0aeb5.jpg"
    },
    89273: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ab528316ca7d31c2b041b62c4ce5dd36.jpg"
    },
    95903: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fa649a5d6b52121271093a7c564cc56a.jpg"
    },
    3933: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/116555df6799e584310484375c97a43f.jpg"
    },
    77321: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fd74a091e2e5765c8769668cc515e494.jpg"
    },
    13095: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e7d916fcce2bbe9b6419f914f290597.jpg"
    },
    57258: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0f31b4df90bff5bab740485f2d4b8253.jpg"
    },
    12602: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dd4b0f40e745f4347c822594da56a119.jpg"
    },
    3818: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/774943ec47ce732040f48df3943a0a7c.jpg"
    },
    59655: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e8ae1f733bc7d3b05c506de67f4b4f7f.jpg"
    },
    63839: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a549b321910f5308200496f1893c2a5f.jpg"
    },
    79795: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/659db20d7a19cc70a0510c7d197cedf3.jpg"
    },
    24808: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8977d6b170f295068d78c5bbb7b6f02d.jpg"
    },
    19552: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61a79de8dea0228576a18068e4f2660a.jpg"
    },
    73534: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc01cf29aa31b9d15a5d06483a0a1a3.jpg"
    },
    27064: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5aa471f90eaff248e0fbef79400cbbf3.jpg"
    },
    31248: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/082b847bcab37655faf903149f80f1e4.jpg"
    },
    79114: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d3ee871568fd751956d5ea1242a4f2d.jpg"
    },
    93573: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f79f3baf4a020b34cf9d3cf29d71f4e.jpg"
    },
    14724: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bbcbd2a2bb65ddad76e831c91c17b421.jpg"
    },
    90377: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a69bebbefae64314172002dd2bae0a34.jpg"
    },
    73564: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4393d2466a2f8931669e345898541812.jpg"
    },
    22844: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4a1657ff0ab4e3d45469556ba2f899c3.jpg"
    },
    84715: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/16e65ca64eafabe331ef1d2bef9c6f16.jpg"
    },
    28005: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/404be4f04081372768bb660a6c1991ba.jpg"
    },
    84141: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5df3b2d018d1e8e9b424b9eaebc86b16.jpg"
    },
    14825: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14448aca4ceaab8680323ce19c963d68.jpg"
    },
    52591: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f9b044c847e4c971c6ac5d096fe3e0eb.jpg"
    },
    96148: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5239707dea0f2f4ea8351f64e6b5a921.jpg"
    },
    32830: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14312e604f0637a2afd376dd571345d9.jpg"
    },
    91480: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6bf5412b358a42300603159932412051.jpg"
    },
    10869: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c82125e0b20342dba2008b0dcc6d55f6.jpg"
    },
    85613: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d0b53035bf66e851116bd0244ba6ace.jpg"
    },
    9333: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8787df71c723ebe44f82fd13ed216e09.jpg"
    },
    28839: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61ae357c3bfbabb5d765e9a7c794d08f.png"
    },
    55815: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c6affc8b37ec4c75486ab6d12b2de395.svg"
    },
    66787: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2ef574ea2aa502447d579267ff37e251.svg"
    },
    85719: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    80391: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1506c5bba61fa270f73c874e3d60a94f.svg"
    },
    47240: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e8f340ded0fd6b0b0d434e8c6c8b75e.svg"
    },
    81715: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/205366df6706c3b367fb5ff4f26ab7f3.svg"
    }
  }
]);