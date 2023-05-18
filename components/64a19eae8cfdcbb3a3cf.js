"use strict";
(self.webpackChunk_rockstargames_components = self.webpackChunk_rockstargames_components || []).push([
  [33], {
    7033: (e, a, t) => {
      t.r(a), t.d(a, {
        ModalProvider: () => u,
        useModal: () => r
      });
      var n = t(822),
        s = t(7363),
        o = t(9929),
        i = t(9542);
      var d = t(9706);
      const l = (0, n.createContext)(null),
        r = () => (0, n.useContext)(l),
        c = e => {
          let {
            modal: a,
            setFinalModal: t,
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
              content: p,
              className: m,
              height: b,
              onClose: f,
              rect: h = {
                left: 0,
                top: 0
              },
              contentStyle: v = {},
              contentClassName: x = "",
              width: y
            } = a,
            {
              left: g,
              top: k
            } = h,
            [w] = (0, n.useState)({
              y: k,
              x: g,
              width: y,
              height: b,
              boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
              border: "0px solid transparent",
              background: "transparent"
            }),
            [S] = (0, n.useState)({
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
            [E, M] = (0, n.useState)({
              initial: w,
              shown: S
            });
          return (0, n.useEffect)((() => {
            M({
              initial: w,
              shown: S
            })
          }), [w, S]), (0, n.useEffect)((() => {
            const e = e => {
              "function" == typeof f && 27 === e.keyCode && f()
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
              variants: E,
              transition: c,
              style: v,
              children: (0, d.jsxs)(s.E.div, {
                className: (0, i.classList)("fcc01a21ba6273e262bd", m),
                children: [(0, d.jsx)(s.E.div, {
                  className: (0, i.classList)("df0821d6f0e927283e86", x),
                  initial: {
                    opacity: 0
                  },
                  animate: {
                    opacity: 1
                  },
                  transition: u,
                  children: p
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
                    t(null), o(!1), "function" == typeof f && f()
                  }
                })]
              })
            })]
          })), [p])
        },
        u = e => {
          let {
            children: a
          } = e;
          const {
            setBodyIsScrollable: t
          } = (0, o.useBodyScrollable)(), [s, i] = (0, n.useState)(null), [r, u] = (0, n.useState)(null), p = (0, n.useMemo)((() => [r, i]), [r, i]), {
            state: {
              modalIsOpen: m
            },
            setModalIsOpen: b
          } = (0, o.useRockstarLocalState)();
          return (0, n.useEffect)((() => {
            if (!s?.content) return u(null), void b(!1);
            u((0, d.jsx)(c, {
              modal: s,
              setFinalModal: u,
              setModalIsOpen: b
            })), b(!0)
          }), [s]), (0, n.useEffect)((() => {
            t(!m)
          }), [m]), (0, d.jsx)(l.Provider, {
            value: p,
            children: a
          })
        }
    }
  }
]);