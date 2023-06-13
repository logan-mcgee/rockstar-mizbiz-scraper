"use strict";
(self.webpackChunk_rockstargames_components = self.webpackChunk_rockstargames_components || []).push([
  [173], {
    5173: (e, t, a) => {
      a.r(t), a.d(t, {
        ModalProvider: () => u,
        useModal: () => c
      });
      var n = a(822),
        s = a(9929),
        o = a(7363),
        i = a(9542);
      var d = a(9706);
      const l = e => {
          let {
            modal: t
          } = e;
          const {
            content: a,
            className: s,
            height: l,
            onClose: r,
            rect: c = {
              left: 0,
              top: 0
            },
            contentStyle: u = {},
            contentClassName: f = "",
            width: p
          } = t, {
            left: m,
            top: h
          } = c, [b] = (0, n.useState)({
            y: h,
            x: m,
            top: 0,
            left: 0,
            width: p,
            height: l,
            border: "0px solid transparent",
            background: "transparent"
          });
          let y = {
            opacity: 1,
            "--backdrop-blur": "50px"
          };
          y = {
            opacity: 1
          };
          const v = (0, n.useRef)(null);
          let x = {
            ease: "anticipate",
            duration: .6
          };
          x = {
            ease: [.77, 0, .175, 1],
            duration: .5
          };
          let k = {
            ease: "easeIn",
            duration: .3,
            delay: .7
          };
          k = {
            ease: "easeIn",
            duration: .3,
            delay: .5
          };
          let g = "var(--modal-padding)",
            w = "var(--modal-padding)";
          g = "-50%", w = "-50%";
          const [E] = (0, n.useState)({
            x: "-50%",
            y: "-50%",
            top: "50%",
            left: "50%",
            width: "calc(100vw - (var(--modal-padding) * 2))",
            height: "var(--modal-height)",
            border: "1px solid var(--border-color, #2d2d2d)",
            background: "var(--black-100)",
            transition: {
              x,
              y: x,
              top: x,
              left: x,
              width: x,
              height: x,
              border: x,
              background: {
                delay: .3
              }
            }
          }), [j, C] = (0, n.useState)({
            initial: b,
            shown: E
          });
          return (0, n.useEffect)((() => {
            C({
              initial: b,
              shown: E
            })
          }), [b, E]), (0, n.useEffect)((() => {
            const e = e => {
              "function" == typeof r && 27 === e.keyCode && r()
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []), (0, n.useMemo)((() => (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsx)(o.E.div, {
              className: "e1f70512631dd5a6a205bb0837fde83d182f",
              initial: {
                opacity: 0
              },
              animate: y,
              transition: x
            }), (0, d.jsx)(o.E.div, {
              className: "e1f70512631dd5a6fe0c0d0b3f72589dfd69",
              ref: v,
              initial: "initial",
              animate: "shown",
              variants: j,
              transition: x,
              style: u,
              children: (0, d.jsxs)(o.E.div, {
                className: (0, i.classList)("e1f70512631dd5a6fcc01a21ba6273e262bd", s),
                children: [(0, d.jsx)(o.E.div, {
                  className: (0, i.classList)("e1f70512631dd5a6df0821d6f0e927283e86", f),
                  initial: {
                    opacity: 0
                  },
                  animate: {
                    opacity: 1
                  },
                  transition: k,
                  children: a
                }), (0, d.jsx)(o.E.button, {
                  className: "e1f70512631dd5a6b6365baf583b9e283753",
                  initial: {
                    opacity: 0
                  },
                  animate: {
                    opacity: 1
                  },
                  transition: k,
                  onClick: () => {
                    "function" == typeof r && r()
                  }
                })]
              })
            })]
          })), [a])
        },
        r = (0, n.createContext)(null),
        c = () => (0, n.useContext)(r),
        u = e => {
          let {
            children: t
          } = e;
          const {
            setBodyIsScrollable: a
          } = (0, s.useBodyScrollable)(), [o, i] = (0, n.useState)(null), c = (0, n.useMemo)((() => o?.content ? (a(!1), (0, d.jsx)(l, {
            modal: o
          })) : (a(!0), null)), [o]);
          return (0, n.useEffect)((() => {}), [o]), (0, d.jsx)(r.Provider, {
            value: [c, i],
            children: t
          })
        }
    }
  }
]);