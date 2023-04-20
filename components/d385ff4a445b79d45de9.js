"use strict";
(self.webpackChunk_rockstargames_components = self.webpackChunk_rockstargames_components || []).push([
  [772], {
    4772: (e, t, a) => {
      a.r(t), a.d(t, {
        ModalProvider: () => u,
        useModal: () => r
      });
      var n = a(822),
        s = a(7363),
        o = a(3657),
        i = a(9542);
      var d = a(3322);
      const l = (0, n.createContext)(null),
        r = () => (0, n.useContext)(l),
        c = e => {
          let {
            modal: t,
            setFinalModal: a,
            setModalIsOpen: o
          } = e;
          const l = {
              opacity: 1,
              "--backdrop-blur": "50px"
            },
            r = (0, n.useRef)(null),
            c = {
              ease: "anticipate",
              duration: .6
            },
            u = {
              ease: "easeIn",
              duration: .3,
              delay: .7
            },
            {
              content: m,
              className: p,
              height: f,
              onClose: h,
              rect: b = {
                left: 0,
                top: 0
              },
              contentStyle: v = {},
              contentClassName: x = "",
              width: y
            } = t,
            {
              left: g,
              top: k
            } = b,
            [w] = (0, n.useState)({
              y: k,
              x: g,
              width: y,
              height: f,
              boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
              border: "0px solid transparent",
              background: "transparent"
            }),
            [E] = (0, n.useState)({
              x: "var(--modal-padding)",
              y: "var(--modal-padding)",
              width: "calc(100vw - (var(--modal-padding) * 2))",
              height: "calc(100vh - (var(--modal-padding) * 2))",
              boxShadow: "0px 2rem 8rem rgba(0, 0, 0, 0.6)",
              border: "1px solid var(--border-color, #2d2d2d)",
              background: "var(--black-100)",
              transition: {
                x: c,
                y: c,
                width: c,
                height: c,
                boxShadow: c,
                border: c,
                background: {
                  delay: .3
                }
              }
            }),
            [S, M] = (0, n.useState)({
              initial: w,
              shown: E
            });
          return (0, n.useEffect)((() => {
            M({
              initial: w,
              shown: E
            })
          }), [w, E]), (0, n.useEffect)((() => {
            const e = e => {
              "function" == typeof h && 27 === e.keyCode && h()
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []), (0, n.useMemo)((() => (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsx)(s.E.div, {
              className: "a205bb0837fde83d182f",
              initial: {
                opacity: 0
              },
              animate: l,
              transition: c
            }), (0, d.jsx)(s.E.div, {
              className: "fe0c0d0b3f72589dfd69",
              ref: r,
              initial: "initial",
              animate: "shown",
              variants: S,
              transition: c,
              style: v,
              children: (0, d.jsxs)(s.E.div, {
                className: (0, i.classList)("fcc01a21ba6273e262bd", p),
                children: [(0, d.jsx)(s.E.div, {
                  className: (0, i.classList)("df0821d6f0e927283e86", x),
                  initial: {
                    opacity: 0
                  },
                  animate: {
                    opacity: 1
                  },
                  transition: u,
                  children: m
                }), (0, d.jsx)(s.E.button, {
                  className: "b6365baf583b9e283753",
                  initial: {
                    opacity: 0
                  },
                  animate: {
                    opacity: 1
                  },
                  transition: u,
                  onClick: () => {
                    a(null), o(!1), "function" == typeof h && h()
                  }
                })]
              })
            })]
          })), [m])
        },
        u = e => {
          let {
            children: t
          } = e;
          const [a, s] = (0, n.useState)(null), [i, r] = (0, n.useState)(null), u = (0, n.useMemo)((() => [i, s]), [i, s]), {
            state: {
              modalIsOpen: m
            },
            setModalIsOpen: p
          } = (0, o.useRockstarLocalState)();
          return (0, n.useEffect)((() => {
            if (!a?.content) return r(null), void p(!1);
            r((0, d.jsx)(c, {
              modal: a,
              setFinalModal: r,
              setModalIsOpen: p
            })), p(!0)
          }), [a]), (0, n.useEffect)((() => {
            document.body.style.overflowY = m ? "hidden" : ""
          }), [m]), (0, d.jsx)(l.Provider, {
            value: u,
            children: t
          })
        }
    }
  }
]);