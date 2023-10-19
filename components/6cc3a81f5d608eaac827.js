"use strict";
(self.webpackChunk_rockstargames_components = self.webpackChunk_rockstargames_components || []).push([
  [94], {
    1094: (e, t, a) => {
      a.r(t), a.d(t, {
        ModalProvider: () => u,
        useModal: () => f
      });
      var n = a(927),
        o = a(7638),
        l = a(9542),
        s = a(6711),
        i = a(6602);
      var d = a(5770);
      const c = e => {
          let {
            modal: t
          } = e;
          const {
            content: a,
            className: c,
            height: r,
            onClose: f,
            rect: u = {
              left: 0,
              top: 0
            },
            contentStyle: b = {},
            contentClassName: m = "",
            width: v,
            fadeIn: h = !0,
            cardIds: p,
            theme: g,
            title: y,
            gtm: x = {},
            aspectRatio: _ = "default",
            cardDimensions: k
          } = t, {
            left: j,
            top: E
          } = u, [N, w] = (0, n.useState)(null), {
            track: C
          } = (0, s.useGtmTrack)(), S = null !== p && (p?.length || 0) > 1 && ("flag_bg" === g || "fob" === k?.size), [L, M] = (0, i.useSearchParams)(), [P, I] = (0, n.useState)(!1), [T, R] = (0, n.useState)(!1), z = () => {
            const e = N - 1;
            w(e), R(e <= 0), I(e >= (p?.length || 0) - 1), C({
              event: "modal_previous",
              event_category: "modal",
              event_action: "previous",
              event_label: "",
              position: N
            })
          }, D = () => {
            const e = N + 1;
            w(e), R(e <= 0), I(e >= (p?.length || 0) - 1), C({
              event: "modal_next",
              event_category: "modal",
              event_action: "next",
              event_label: "",
              position: N
            })
          };
          (0, n.useEffect)((() => {
            null !== N && null !== p && N < p?.length && N > -1 && M({
              info: p[N]
            })
          }), [N, p]), (0, n.useEffect)((() => {
            if (null !== p && null === N && p?.length > 0) {
              const e = L.get("info");
              p?.forEach(((t, a) => {
                t === e && (w(a), R(a <= 0), I(a >= (p?.length || 0) - 1))
              }))
            }
          }), [p, N]);
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
              "function" == typeof f && 27 === e.keyCode && (f(), C({
                event: "modal_close",
                event_action: "close",
                event_category: "modal",
                event_label: y ?? void 0,
                ...x
              }))
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []);
          const O = () => {
            "function" == typeof f && (f(), C({
              event: "modal_close",
              event_action: "close",
              event_category: "modal",
              event_label: y ?? void 0,
              ...x
            }))
          };
          let Q = 0;
          Q = h ? 0 : 1;
          const U = (0, d.jsx)(o.E.button, {
            className: "c81dee7fd0870f89b6365baf583b9e283753",
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
          return (0, n.useMemo)((() => (0, d.jsxs)("div", {
            className: "c81dee7fd0870f89b1b29da799154d1b51b7",
            "data-show-nav": S,
            "data-aspect-ratio": _,
            children: [(0, d.jsx)(o.E.div, {
              className: "c81dee7fd0870f89a205bb0837fde83d182f",
              initial: {
                opacity: 0
              },
              animate: H,
              transition: A,
              onClick: () => O()
            }), S && (0, d.jsxs)("div", {
              className: "c81dee7fd0870f89a170a8ff8afa41c02b8d",
              children: [(0, d.jsxs)(o.E.div, {
                className: "c81dee7fd0870f89e497f927dc015e9b9629",
                initial: {
                  opacity: 0
                },
                animate: {
                  opacity: 1
                },
                transition: B,
                children: [(0, d.jsx)("button", {
                  type: "button",
                  "aria-label": "Previous",
                  onClick: z,
                  disabled: T
                }), (0, d.jsxs)("div", {
                  className: "c81dee7fd0870f89bea33fae7718c7fbfdb0",
                  children: [" ", N + 1, (0, d.jsx)("div", {
                    className: "c81dee7fd0870f89cb551a1570b2a1e5f5ee"
                  }), p?.length, " "]
                }), (0, d.jsx)("button", {
                  type: "button",
                  "aria-label": "Next",
                  onClick: D,
                  disabled: P
                })]
              }), U]
            }), (0, d.jsx)(o.E.div, {
              className: "c81dee7fd0870f89fe0c0d0b3f72589dfd69",
              ref: q,
              initial: "initial",
              animate: "shown",
              variants: J,
              transition: A,
              style: b,
              children: (0, d.jsxs)(o.E.div, {
                className: (0, l.classList)("c81dee7fd0870f89fcc01a21ba6273e262bd", c),
                children: [!S && U, (0, d.jsx)(o.E.div, {
                  className: (0, l.classList)("c81dee7fd0870f89df0821d6f0e927283e86", m),
                  initial: {
                    opacity: Q
                  },
                  animate: {
                    opacity: 1
                  },
                  transition: B,
                  children: a
                }), (0, d.jsx)("button", {
                  className: "c81dee7fd0870f89f2858aa2b04e3da87391",
                  type: "button",
                  "aria-label": "End of modal"
                })]
              })
            })]
          })), [a, N, b])
        },
        r = (0, n.createContext)(null),
        f = () => (0, n.useContext)(r),
        u = e => {
          let {
            children: t
          } = e;
          const [a, o] = (0, n.useState)(null), l = (0, n.useMemo)((() => a?.content ? (0, d.jsx)(c, {
            modal: a
          }) : null), [a]);
          return (0, d.jsx)(r.Provider, {
            value: [l, o],
            children: t
          })
        }
    }
  }
]);