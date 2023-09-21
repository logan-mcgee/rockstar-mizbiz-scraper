"use strict";
(self.webpackChunk_rockstargames_components = self.webpackChunk_rockstargames_components || []).push([
  [515], {
    7515: (e, a, t) => {
      t.r(a), t.d(a, {
        ModalProvider: () => f,
        useModal: () => b
      });
      var n = t(4932),
        l = t(9270),
        o = t(9542),
        s = t(6711),
        i = t(1424);
      var c = t(6160);
      const d = e => {
          let {
            modal: a
          } = e;
          const {
            content: t,
            className: d,
            height: r,
            onClose: b,
            rect: f = {
              left: 0,
              top: 0
            },
            contentStyle: u = {},
            contentClassName: m = "",
            width: v,
            fadeIn: h = !0,
            cardIds: p,
            theme: _,
            title: g,
            gtm: y = {},
            aspectRatio: x = "default",
            cardDimensions: k
          } = a, {
            left: j,
            top: E
          } = f, [N, w] = (0, n.useState)(null), {
            track: C
          } = (0, s.useGtmTrack)();
          let S = null !== p && "flag_bg" === _;
          S = null !== p && (p?.length || 0) > 1 && ("flag_bg" === _ || "fob" === k?.size);
          const [L, M] = (0, i.useSearchParams)(), [P, I] = (0, n.useState)(!1), [T, R] = (0, n.useState)(!1), z = () => {
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
              p?.forEach(((a, t) => {
                a === e && (w(t), R(t <= 0), I(t >= (p?.length || 0) - 1))
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
              "function" == typeof b && 27 === e.keyCode && (b(), C({
                event: "modal_close",
                event_action: "close",
                event_category: "modal",
                event_label: g ?? void 0,
                ...y
              }))
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []);
          const O = () => {
              "function" == typeof b && (b(), C({
                event: "modal_close",
                event_action: "close",
                event_category: "modal",
                event_label: g ?? void 0,
                ...y
              }))
            },
            Q = (0, c.jsx)(l.E.button, {
              className: "_93f8151fb9eb5ac4b6365baf583b9e283753",
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
          return (0, n.useMemo)((() => (0, c.jsxs)("div", {
            className: "_93f8151fb9eb5ac4b1b29da799154d1b51b7",
            "data-show-nav": S,
            "data-aspect-ratio": x,
            children: [(0, c.jsx)(l.E.div, {
              className: "_93f8151fb9eb5ac4a205bb0837fde83d182f",
              initial: {
                opacity: 0
              },
              animate: H,
              transition: A,
              onClick: () => O()
            }), S && (0, c.jsxs)("div", {
              className: "_93f8151fb9eb5ac4a170a8ff8afa41c02b8d",
              children: [(0, c.jsxs)(l.E.div, {
                className: "_93f8151fb9eb5ac4e497f927dc015e9b9629",
                initial: {
                  opacity: 0
                },
                animate: {
                  opacity: 1
                },
                transition: B,
                children: [(0, c.jsx)("button", {
                  type: "button",
                  "aria-label": "Previous",
                  onClick: z,
                  disabled: T
                }), (0, c.jsxs)("div", {
                  className: "_93f8151fb9eb5ac4bea33fae7718c7fbfdb0",
                  children: [" ", N + 1, (0, c.jsx)("div", {
                    className: "_93f8151fb9eb5ac4cb551a1570b2a1e5f5ee"
                  }), p?.length, " "]
                }), (0, c.jsx)("button", {
                  type: "button",
                  "aria-label": "Next",
                  onClick: D,
                  disabled: P
                })]
              }), Q]
            }), (0, c.jsx)(l.E.div, {
              className: "_93f8151fb9eb5ac4fe0c0d0b3f72589dfd69",
              ref: q,
              initial: "initial",
              animate: "shown",
              variants: J,
              transition: A,
              style: u,
              children: (0, c.jsxs)(l.E.div, {
                className: (0, o.classList)("_93f8151fb9eb5ac4fcc01a21ba6273e262bd", d),
                children: [!S && Q, (0, c.jsx)(l.E.div, {
                  className: (0, o.classList)("_93f8151fb9eb5ac4df0821d6f0e927283e86", m),
                  initial: {
                    opacity: 0
                  },
                  animate: {
                    opacity: 1
                  },
                  transition: B,
                  children: t
                }), (0, c.jsx)("button", {
                  className: "_93f8151fb9eb5ac4f2858aa2b04e3da87391",
                  type: "button",
                  "aria-label": "End of modal"
                })]
              })
            })]
          })), [t, N, u])
        },
        r = (0, n.createContext)(null),
        b = () => (0, n.useContext)(r),
        f = e => {
          let {
            children: a
          } = e;
          const [t, l] = (0, n.useState)(null), o = (0, n.useMemo)((() => t?.content ? (0, c.jsx)(d, {
            modal: t
          }) : null), [t]);
          return (0, c.jsx)(r.Provider, {
            value: [o, l],
            children: a
          })
        }
    }
  }
]);
//# sourceMappingURL=420da3d1eb30fa358e82.js.map