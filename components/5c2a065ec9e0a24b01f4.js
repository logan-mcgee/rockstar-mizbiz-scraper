"use strict";
(self.webpackChunk_rockstargames_components = self.webpackChunk_rockstargames_components || []).push([
  [515], {
    7515: (e, t, a) => {
      a.r(t), a.d(t, {
        ModalProvider: () => f,
        useModal: () => b
      });
      var n = a(4932),
        o = a(9929),
        s = a(9270),
        l = a(9542),
        i = a(6711);
      var c = a(6160);
      const d = e => {
          let {
            modal: t
          } = e;
          const {
            content: a,
            className: o,
            height: d,
            onClose: r,
            rect: b = {
              left: 0,
              top: 0
            },
            contentStyle: f = {},
            contentClassName: u = "",
            width: m,
            fadeIn: v = !0,
            cardIds: h,
            theme: p,
            title: y
          } = t, {
            left: _,
            top: k
          } = b;
          const [x, g] = (0, n.useState)(null), {
            track: w
          } = (0, i.useGtmTrack)(), [C] = (0, n.useState)({
            y: k,
            x: _,
            top: 0,
            left: 0,
            width: m,
            height: d,
            border: "0px solid transparent",
            background: "transparent"
          }), E = {
            opacity: 1
          }, j = (0, n.useRef)(null), N = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, S = {
            ease: "easeIn",
            duration: .3,
            delay: .5
          }, [I] = (0, n.useState)({
            x: "-50%",
            y: "-50%",
            top: "50%",
            left: "50%",
            width: "calc(100vw - (var(--modal-padding) * 2))",
            height: "var(--modal-height)",
            border: "1px solid var(--border-color, #2d2d2d)",
            background: "var(--black-100)",
            transition: {
              x: N,
              y: N,
              top: N,
              left: N,
              width: N,
              height: N,
              border: N,
              background: {
                delay: .3
              }
            }
          }), [L, M] = (0, n.useState)({
            initial: C,
            shown: I
          });
          (0, n.useEffect)((() => {
            M({
              initial: C,
              shown: I
            })
          }), [C, I]), (0, n.useEffect)((() => {
            const e = e => {
              "function" == typeof r && 27 === e.keyCode && (r(), w({
                event: "modal_close",
                event_action: "close",
                event_category: "modal",
                event_label: y ?? void 0
              }))
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []);
          const B = () => {
              "function" == typeof r && (r(), w({
                event: "modal_close",
                event_action: "close",
                event_category: "modal",
                event_label: y ?? void 0
              }))
            },
            P = (0, c.jsx)(s.E.button, {
              className: "_93f8151fb9eb5ac4b6365baf583b9e283753",
              "aria-label": "Close",
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: S,
              onClick: () => {
                B()
              }
            });
          return (0, n.useMemo)((() => (0, c.jsxs)("div", {
            className: "_93f8151fb9eb5ac4b1b29da799154d1b51b7",
            "data-show-nav": false,
            children: [(0, c.jsx)(s.E.div, {
              className: "_93f8151fb9eb5ac4a205bb0837fde83d182f",
              initial: {
                opacity: 0
              },
              animate: E,
              transition: N,
              onClick: () => B()
            }), false, (0, c.jsx)(s.E.div, {
              className: "_93f8151fb9eb5ac4fe0c0d0b3f72589dfd69",
              ref: j,
              initial: "initial",
              animate: "shown",
              variants: L,
              transition: N,
              style: f,
              children: (0, c.jsxs)(s.E.div, {
                className: (0, l.classList)("_93f8151fb9eb5ac4fcc01a21ba6273e262bd", o),
                children: [P, (0, c.jsx)(s.E.div, {
                  className: (0, l.classList)("_93f8151fb9eb5ac4df0821d6f0e927283e86", u),
                  initial: {
                    opacity: 0
                  },
                  animate: {
                    opacity: 1
                  },
                  transition: S,
                  children: a
                }), (0, c.jsx)("button", {
                  className: "_93f8151fb9eb5ac4f2858aa2b04e3da87391",
                  type: "button",
                  "aria-label": "End of modal"
                })]
              })
            })]
          })), [a, x, f])
        },
        r = (0, n.createContext)(null),
        b = () => (0, n.useContext)(r),
        f = e => {
          let {
            children: t
          } = e;
          const {
            setBodyIsScrollable: a
          } = (0, o.useBodyScrollable)(), [s, l] = (0, n.useState)(null), i = (0, n.useMemo)((() => s?.content ? (a(!1), (0, c.jsx)(d, {
            modal: s
          })) : (a(!0), null)), [s]);
          return (0, c.jsx)(r.Provider, {
            value: [i, l],
            children: t
          })
        }
    }
  }
]);