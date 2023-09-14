"use strict";
(self.webpackChunk_rockstargames_components = self.webpackChunk_rockstargames_components || []).push([
  [515], {
    7515: (e, a, t) => {
      t.r(a), t.d(a, {
        ModalProvider: () => b,
        useModal: () => r
      });
      var n = t(4932),
        s = t(9270),
        o = t(9542),
        i = t(6711);
      var l = t(6160);
      const c = e => {
          let {
            modal: a
          } = e;
          const {
            content: t,
            className: c,
            height: d,
            onClose: r,
            rect: b = {
              left: 0,
              top: 0
            },
            contentStyle: f = {},
            contentClassName: u = "",
            width: v,
            fadeIn: m = !0,
            cardIds: h,
            theme: p,
            title: x,
            gtm: y = {}
          } = a, {
            left: _,
            top: k
          } = b, [N, w] = (0, n.useState)(null), {
            track: g
          } = (0, i.useGtmTrack)(), [j] = (0, n.useState)({
            y: k,
            x: _,
            top: 0,
            left: 0,
            width: v,
            height: d,
            border: "0px solid transparent",
            background: "transparent"
          }), C = {
            opacity: 1
          }, E = (0, n.useRef)(null), S = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, B = {
            ease: "easeIn",
            duration: .3,
            delay: .5
          }, [L] = (0, n.useState)({
            x: "-50%",
            y: "-50%",
            top: "50%",
            left: "50%",
            width: "calc(100vw - (var(--modal-padding) * 2))",
            height: "var(--modal-height)",
            border: "1px solid var(--border-color, #2d2d2d)",
            background: "var(--black-100)",
            transition: {
              x: S,
              y: S,
              top: S,
              left: S,
              width: S,
              height: S,
              border: S,
              background: {
                delay: .3
              }
            }
          }), [M, P] = (0, n.useState)({
            initial: j,
            shown: L
          });
          (0, n.useEffect)((() => {
            P({
              initial: j,
              shown: L
            })
          }), [j, L]), (0, n.useEffect)((() => {
            const e = e => {
              "function" == typeof r && 27 === e.keyCode && (r(), g({
                event: "modal_close",
                event_action: "close",
                event_category: "modal",
                event_label: x ?? void 0,
                ...y
              }))
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []);
          const I = () => {
              "function" == typeof r && (r(), g({
                event: "modal_close",
                event_action: "close",
                event_category: "modal",
                event_label: x ?? void 0,
                ...y
              }))
            },
            D = (0, l.jsx)(s.E.button, {
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
                I()
              }
            });
          return (0, n.useMemo)((() => (0, l.jsxs)("div", {
            className: "_93f8151fb9eb5ac4b1b29da799154d1b51b7",
            "data-show-nav": showNavButtons,
            children: [(0, l.jsx)(s.E.div, {
              className: "_93f8151fb9eb5ac4a205bb0837fde83d182f",
              initial: {
                opacity: 0
              },
              animate: C,
              transition: S,
              onClick: () => I()
            }), showNavButtons && (0, l.jsxs)("div", {
              className: "_93f8151fb9eb5ac4a170a8ff8afa41c02b8d",
              children: [(0, l.jsxs)(s.E.div, {
                className: "_93f8151fb9eb5ac4e497f927dc015e9b9629",
                initial: {
                  opacity: 0
                },
                animate: {
                  opacity: 1
                },
                transition: B,
                children: [(0, l.jsx)("button", {
                  type: "button",
                  "aria-label": "Previous",
                  onClick: handlePrev,
                  disabled: prevBtnDisabled
                }), (0, l.jsxs)("div", {
                  className: "_93f8151fb9eb5ac4bea33fae7718c7fbfdb0",
                  children: [" ", N + 1, (0, l.jsx)("div", {
                    className: "_93f8151fb9eb5ac4cb551a1570b2a1e5f5ee"
                  }), h?.length, " "]
                }), (0, l.jsx)("button", {
                  type: "button",
                  "aria-label": "Next",
                  onClick: handleNext,
                  disabled: nextBtnDisabled
                })]
              }), D]
            }), (0, l.jsx)(s.E.div, {
              className: "_93f8151fb9eb5ac4fe0c0d0b3f72589dfd69",
              ref: E,
              initial: "initial",
              animate: "shown",
              variants: M,
              transition: S,
              style: f,
              children: (0, l.jsxs)(s.E.div, {
                className: (0, o.classList)("_93f8151fb9eb5ac4fcc01a21ba6273e262bd", c),
                children: [!showNavButtons && D, (0, l.jsx)(s.E.div, {
                  className: (0, o.classList)("_93f8151fb9eb5ac4df0821d6f0e927283e86", u),
                  initial: {
                    opacity: 0
                  },
                  animate: {
                    opacity: 1
                  },
                  transition: B,
                  children: t
                }), (0, l.jsx)("button", {
                  className: "_93f8151fb9eb5ac4f2858aa2b04e3da87391",
                  type: "button",
                  "aria-label": "End of modal"
                })]
              })
            })]
          })), [t, N, f])
        },
        d = (0, n.createContext)(null),
        r = () => (0, n.useContext)(d),
        b = e => {
          let {
            children: a
          } = e;
          const [t, s] = (0, n.useState)(null), o = (0, n.useMemo)((() => t?.content ? (0, l.jsx)(c, {
            modal: t
          }) : null), [t]);
          return (0, l.jsx)(d.Provider, {
            value: [o, s],
            children: a
          })
        }
    }
  }
]);
//# sourceMappingURL=ea584db3e20c49f22c9f.js.map