"use strict";
(self.webpackChunk_rockstargames_components = self.webpackChunk_rockstargames_components || []).push([
  [772], {
    4772: (e, a, t) => {
      t.r(a), t.d(a, {
        ModalProvider: () => c,
        useModal: () => r
      });
      var n = t(822),
        i = t(7363),
        o = t(9542);
      var s = t(3322);
      const d = (0, n.createContext)(null),
        r = () => (0, n.useContext)(d),
        l = e => {
          let {
            modal: a,
            setFinalModal: t
          } = e;
          const d = (0, n.useRef)(null),
            r = {
              ease: "anticipate",
              duration: .6
            },
            l = {
              ease: "easeIn",
              duration: .3,
              delay: .7
            },
            {
              content: c,
              className: u,
              height: h,
              onClose: m,
              rect: p = {
                left: 0,
                top: 0
              },
              contentStyle: b = {},
              contentClassName: f = "",
              width: v
            } = a,
            {
              left: x,
              top: y
            } = p,
            [g] = (0, n.useState)({
              y,
              x,
              width: v,
              height: h,
              boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
              border: "0px solid transparent",
              background: "transparent"
            }),
            [k] = (0, n.useState)({
              x: "var(--modal-padding)",
              y: "var(--modal-padding)",
              width: "calc(100vw - (var(--modal-padding) * 2))",
              height: "calc(100vh - (var(--modal-padding) * 2))",
              boxShadow: "0px 2rem 8rem rgba(0, 0, 0, 0.6)",
              border: "1px solid var(--border-color, #2d2d2d)",
              background: "var(--black-100)",
              transition: {
                x: r,
                y: r,
                width: r,
                height: r,
                boxShadow: r,
                border: r,
                background: {
                  delay: .3
                }
              }
            }),
            [w, E] = (0, n.useState)({
              initial: g,
              shown: k
            });
          return (0, n.useEffect)((() => {
            E({
              initial: g,
              shown: k
            })
          }), [g, k]), (0, n.useEffect)((() => {
            const e = e => {
              "function" == typeof m && 27 === e.keyCode && m()
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []), (0, n.useMemo)((() => (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(i.E.div, {
              className: "a205bb0837fde83d182f",
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1,
                "--backdrop-blur": "50px"
              },
              transition: r
            }), (0, s.jsx)(i.E.div, {
              className: "fe0c0d0b3f72589dfd69",
              ref: d,
              initial: "initial",
              animate: "shown",
              variants: w,
              transition: r,
              style: b,
              children: (0, s.jsxs)(i.E.div, {
                className: (0, o.classList)("fcc01a21ba6273e262bd", u),
                children: [(0, s.jsx)(i.E.div, {
                  className: (0, o.classList)("df0821d6f0e927283e86", f),
                  initial: {
                    opacity: 0
                  },
                  animate: {
                    opacity: 1
                  },
                  transition: l,
                  children: c
                }), (0, s.jsx)(i.E.button, {
                  className: "b6365baf583b9e283753",
                  initial: {
                    opacity: 0
                  },
                  animate: {
                    opacity: 1
                  },
                  transition: l,
                  onClick: () => {
                    t(null), "function" == typeof m && m()
                  }
                })]
              })
            })]
          })), [c])
        },
        c = e => {
          let {
            children: a
          } = e;
          const [t, i] = (0, n.useState)(null), [o, r] = (0, n.useState)(null);
          return (0, n.useEffect)((() => {
            r(t?.content ? (0, s.jsx)(l, {
              modal: t,
              setFinalModal: r
            }) : null)
          }), [t]), (0, s.jsx)(d.Provider, {
            value: [o, i],
            children: a
          })
        }
    }
  }
]);