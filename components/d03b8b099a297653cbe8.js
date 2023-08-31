"use strict";
(self.webpackChunk_rockstargames_components = self.webpackChunk_rockstargames_components || []).push([
  [515], {
    7515: (e, t, a) => {
      a.r(t), a.d(t, {
        ModalProvider: () => f,
        useModal: () => r
      });
      var n = a(4932),
        o = a(9270),
        s = a(9542),
        i = a(6711);
      var l = a(6160);
      const c = e => {
          let {
            modal: t
          } = e;
          const {
            content: a,
            className: c,
            height: d,
            onClose: r,
            rect: f = {
              left: 0,
              top: 0
            },
            contentStyle: b = {},
            contentClassName: u = "",
            width: m,
            fadeIn: v = !0,
            cardIds: h,
            theme: p,
            title: y,
            gtm: _ = {}
          } = t, {
            left: k,
            top: x
          } = f;
          const [g, w] = (0, n.useState)(null), {
            track: C
          } = (0, i.useGtmTrack)(), [E] = (0, n.useState)({
            y: x,
            x: k,
            top: 0,
            left: 0,
            width: m,
            height: d,
            border: "0px solid transparent",
            background: "transparent"
          }), j = {
            opacity: 1
          }, N = (0, n.useRef)(null), S = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, L = {
            ease: "easeIn",
            duration: .3,
            delay: .5
          }, [M] = (0, n.useState)({
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
          }), [I, P] = (0, n.useState)({
            initial: E,
            shown: M
          });
          (0, n.useEffect)((() => {
            P({
              initial: E,
              shown: M
            })
          }), [E, M]), (0, n.useEffect)((() => {
            const e = e => {
              "function" == typeof r && 27 === e.keyCode && (r(), C({
                event: "modal_close",
                event_action: "close",
                event_category: "modal",
                event_label: y ?? void 0,
                ..._
              }))
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []);
          const G = () => {
              "function" == typeof r && (r(), C({
                event: "modal_close",
                event_action: "close",
                event_category: "modal",
                event_label: y ?? void 0,
                ..._
              }))
            },
            R = (0, l.jsx)(o.E.button, {
              className: "_93f8151fb9eb5ac4b6365baf583b9e283753",
              "aria-label": "Close",
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: L,
              onClick: () => {
                G()
              }
            });
          return (0, n.useMemo)((() => (0, l.jsxs)("div", {
            className: "_93f8151fb9eb5ac4b1b29da799154d1b51b7",
            "data-show-nav": false,
            children: [(0, l.jsx)(o.E.div, {
              className: "_93f8151fb9eb5ac4a205bb0837fde83d182f",
              initial: {
                opacity: 0
              },
              animate: j,
              transition: S,
              onClick: () => G()
            }), false, (0, l.jsx)(o.E.div, {
              className: "_93f8151fb9eb5ac4fe0c0d0b3f72589dfd69",
              ref: N,
              initial: "initial",
              animate: "shown",
              variants: I,
              transition: S,
              style: b,
              children: (0, l.jsxs)(o.E.div, {
                className: (0, s.classList)("_93f8151fb9eb5ac4fcc01a21ba6273e262bd", c),
                children: [R, (0, l.jsx)(o.E.div, {
                  className: (0, s.classList)("_93f8151fb9eb5ac4df0821d6f0e927283e86", u),
                  initial: {
                    opacity: 0
                  },
                  animate: {
                    opacity: 1
                  },
                  transition: L,
                  children: a
                }), (0, l.jsx)("button", {
                  className: "_93f8151fb9eb5ac4f2858aa2b04e3da87391",
                  type: "button",
                  "aria-label": "End of modal"
                })]
              })
            })]
          })), [a, g, b])
        },
        d = (0, n.createContext)(null),
        r = () => (0, n.useContext)(d),
        f = e => {
          let {
            children: t
          } = e;
          const [a, o] = (0, n.useState)(null), s = (0, n.useMemo)((() => a?.content ? (0, l.jsx)(c, {
            modal: a
          }) : null), [a]);
          return (0, l.jsx)(d.Provider, {
            value: [s, o],
            children: t
          })
        }
    }
  }
]);