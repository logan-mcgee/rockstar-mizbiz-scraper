"use strict";
(self.webpackChunk_rockstargames_components = self.webpackChunk_rockstargames_components || []).push([
  [71], {
    5071: (e, a, t) => {
      t.r(a), t.d(a, {
        ModalProvider: () => u,
        useModal: () => m
      });
      var n = t(927),
        o = t(7638),
        s = t(9542),
        c = t(6711),
        l = t(4175);
      var i = t(3705);
      const d = e => {
          let {
            modal: a
          } = e;
          const {
            content: t,
            className: d,
            height: r,
            onClose: m,
            rect: u = {
              left: 0,
              top: 0
            },
            contentStyle: b = {},
            contentClassName: p = "",
            width: v,
            fadeIn: f = !0,
            cardIds: g,
            theme: h,
            title: k,
            gtm: y = {},
            aspectRatio: x = "default",
            cardDimensions: _
          } = a, {
            left: j,
            top: E
          } = u, [N, w] = (0, n.useState)(null), {
            track: C
          } = (0, c.useGtmTrack)(), S = null !== g && (g?.length || 0) > 1 && ("flag_bg" === h || "fob" === _?.size), [L, M] = (0, l.useSearchParams)(), [P, I] = (0, n.useState)(!1), [T, R] = (0, n.useState)(!1), z = () => {
            const e = N - 1;
            w(e), R(e <= 0), I(e >= (g?.length || 0) - 1), C({
              event: "modal_previous",
              event_category: "modal",
              event_action: "previous",
              event_label: "",
              position: N
            })
          }, D = () => {
            const e = N + 1;
            w(e), R(e <= 0), I(e >= (g?.length || 0) - 1), C({
              event: "modal_next",
              event_category: "modal",
              event_action: "next",
              event_label: "",
              position: N
            })
          };
          (0, n.useEffect)((() => {
            null !== N && null !== g && N < g?.length && N > -1 && M({
              info: g[N]
            })
          }), [N, g]), (0, n.useEffect)((() => {
            if (null !== g && null === N && g?.length > 0) {
              const e = L.get("info");
              g?.forEach(((a, t) => {
                a === e && (w(t), R(t <= 0), I(t >= (g?.length || 0) - 1))
              }))
            }
          }), [g, N]);
          const [G] = (0, n.useState)({
            y: E,
            x: j,
            top: 0,
            left: 0,
            width: v,
            height: r,
            border: "0px solid transparent",
            background: "transparent",
            marginTop: S ? "0" : null
          }), H = {
            opacity: 1
          }, q = (0, n.useRef)(null), A = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, B = {
            ease: "easeIn",
            duration: .3,
            delay: .5
          }, [F] = (0, n.useState)({
            x: "-50%",
            y: "-50%",
            top: "50%",
            left: "50%",
            width: "calc(100vw - (var(--modal-padding) * 2))",
            height: "var(--modal-height)",
            border: "1px solid var(--border-color, #2d2d2d)",
            background: "var(--black-100)",
            marginTop: S ? "calc(var(--modal-controlsHeight) - var(--modal-padding))" : null,
            transition: {
              x: A,
              y: A,
              top: A,
              left: A,
              width: A,
              height: A,
              border: A,
              background: {
                delay: .3
              }
            }
          }), [J, K] = (0, n.useState)({
            initial: G,
            shown: F
          });
          (0, n.useEffect)((() => {
            K({
              initial: G,
              shown: F
            })
          }), [G, F]), (0, n.useEffect)((() => {
            const e = e => {
              "function" == typeof m && 27 === e.keyCode && (m(), C({
                event: "modal_close",
                event_action: "close",
                event_category: "modal",
                event_label: k ?? void 0,
                ...y
              }))
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []);
          const O = () => {
              "function" == typeof m && (m(), C({
                event: "modal_close",
                event_action: "close",
                event_category: "modal",
                event_label: k ?? void 0,
                ...y
              }))
            },
            Q = f ? 0 : 1,
            U = (0, i.jsx)(o.E.button, {
              className: "rockstargames-componentscdbb5ba9912cec6e57ad413e8649903a",
              "aria-label": "Close",
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: B,
              onClick: () => {
                O()
              }
            });
          return (0, n.useMemo)((() => (0, i.jsxs)("div", {
            className: "rockstargames-componentsd1eb1ee15b16b69427f2206ad52db2e0",
            "data-show-nav": S,
            "data-aspect-ratio": x,
            children: [(0, i.jsx)(o.E.div, {
              className: "rockstargames-componentsfadbe8613b3b01c5dfe67211c2510fd6",
              initial: {
                opacity: 0
              },
              animate: H,
              transition: A,
              onClick: () => O()
            }), S && (0, i.jsxs)("div", {
              className: "rockstargames-componentsc7e2e5fab184469470c19ead4d58e9f0",
              children: [(0, i.jsxs)(o.E.div, {
                className: "rockstargames-componentsa5baaf5ee72808c76966af66b22de9c2",
                initial: {
                  opacity: 0
                },
                animate: {
                  opacity: 1
                },
                transition: B,
                children: [(0, i.jsx)("button", {
                  type: "button",
                  "aria-label": "Previous",
                  onClick: z,
                  disabled: T
                }), (0, i.jsxs)("div", {
                  className: "rockstargames-componentsceeda042a320c28631e133edac1eca44",
                  children: [" ", N + 1, (0, i.jsx)("div", {
                    className: "rockstargames-componentsd6503a366c2358692d800bd8af52b30e"
                  }), g?.length, " "]
                }), (0, i.jsx)("button", {
                  type: "button",
                  "aria-label": "Next",
                  onClick: D,
                  disabled: P
                })]
              }), U]
            }), (0, i.jsx)(o.E.div, {
              className: "rockstargames-componentsa8fb761c17b0f1dddba26fed96c9e3fc",
              ref: q,
              initial: "initial",
              animate: "shown",
              variants: J,
              transition: A,
              style: b,
              children: (0, i.jsxs)(o.E.div, {
                className: (0, s.classList)("rockstargames-componentsd7a436a855094ae8e1d4ad77ea75c91a", d),
                children: [!S && U, (0, i.jsx)(o.E.div, {
                  className: (0, s.classList)("rockstargames-componentseec04b856e27e31d149554e1e59c23a0", p),
                  initial: {
                    opacity: Q
                  },
                  animate: {
                    opacity: 1
                  },
                  transition: B,
                  children: t
                }), (0, i.jsx)("button", {
                  className: "rockstargames-componentsf30af84c4539ec7a3c95e7e36068bcd3",
                  type: "button",
                  "aria-label": "End of modal"
                })]
              })
            })]
          })), [t, N, b])
        },
        r = (0, n.createContext)(null),
        m = () => (0, n.useContext)(r),
        u = e => {
          let {
            children: a
          } = e;
          const [t, o] = (0, n.useState)(null), s = (0, n.useMemo)((() => t?.content ? (0, i.jsx)(d, {
            modal: t
          }) : null), [t]);
          return (0, i.jsx)(r.Provider, {
            value: [s, o],
            children: a
          })
        }
    }
  }
]);