"use strict";
(self.webpackChunk_rockstargames_components = self.webpackChunk_rockstargames_components || []).push([
  [515], {
    7515: (e, t, a) => {
      a.r(t), a.d(t, {
        ModalProvider: () => f,
        useModal: () => r
      });
      var n = a(4932),
        s = a(9929),
        o = a(9270),
        i = a(9542);
      var l = a(6160);
      const c = e => {
          let {
            modal: t
          } = e;
          const {
            content: a,
            className: s,
            height: c,
            onClose: d,
            rect: r = {
              left: 0,
              top: 0
            },
            contentStyle: f = {},
            contentClassName: b = "",
            width: u
          } = t, {
            left: h,
            top: m
          } = r;
          const [p] = (0, n.useState)({
            y: m,
            x: h,
            top: 0,
            left: 0,
            width: u,
            height: c,
            border: "0px solid transparent",
            background: "transparent"
          }), v = {
            opacity: 1
          }, y = (0, n.useRef)(null), k = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, x = {
            ease: "easeIn",
            duration: .3,
            delay: .5
          }, [w] = (0, n.useState)({
            x: "-50%",
            y: "-50%",
            top: "50%",
            left: "50%",
            width: "calc(100vw - (var(--modal-padding) * 2))",
            height: "var(--modal-height)",
            border: "1px solid var(--border-color, #2d2d2d)",
            background: "var(--black-100)",
            transition: {
              x: k,
              y: k,
              top: k,
              left: k,
              width: k,
              height: k,
              border: k,
              background: {
                delay: .3
              }
            }
          }), [g, E] = (0, n.useState)({
            initial: p,
            shown: w
          });
          (0, n.useEffect)((() => {
            E({
              initial: p,
              shown: w
            })
          }), [p, w]), (0, n.useEffect)((() => {
            const e = e => {
              "function" == typeof d && 27 === e.keyCode && d()
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []);
          const _ = () => "function" == typeof d ? d() : null;
          return (0, n.useMemo)((() => (0, l.jsxs)("div", {
            className: "_93f8151fb9eb5ac4b1b29da799154d1b51b7",
            "data-show-nav": false,
            children: [(0, l.jsx)(o.E.div, {
              className: "_93f8151fb9eb5ac4a205bb0837fde83d182f",
              initial: {
                opacity: 0
              },
              animate: v,
              transition: k,
              onClick: () => _()
            }), false, (0, l.jsx)(o.E.div, {
              className: "_93f8151fb9eb5ac4fe0c0d0b3f72589dfd69",
              ref: y,
              initial: "initial",
              animate: "shown",
              variants: g,
              transition: k,
              style: f,
              children: (0, l.jsxs)(o.E.div, {
                className: (0, i.classList)("_93f8151fb9eb5ac4fcc01a21ba6273e262bd", s),
                children: [(0, l.jsx)(o.E.div, {
                  className: (0, i.classList)("_93f8151fb9eb5ac4df0821d6f0e927283e86", b),
                  initial: {
                    opacity: 0
                  },
                  animate: {
                    opacity: 1
                  },
                  transition: x,
                  children: a
                }), (0, l.jsx)(o.E.button, {
                  className: "_93f8151fb9eb5ac4b6365baf583b9e283753",
                  initial: {
                    opacity: 0
                  },
                  animate: {
                    opacity: 1
                  },
                  transition: x,
                  onClick: () => {
                    _()
                  }
                })]
              })
            })]
          })), [a, cardPosition, f])
        },
        d = (0, n.createContext)(null),
        r = () => (0, n.useContext)(d),
        f = e => {
          let {
            children: t
          } = e;
          const {
            setBodyIsScrollable: a
          } = (0, s.useBodyScrollable)(), [o, i] = (0, n.useState)(null), r = (0, n.useMemo)((() => o?.content ? (a(!1), (0, l.jsx)(c, {
            modal: o
          })) : (a(!0), null)), [o]);
          return (0, n.useEffect)((() => {}), [o]), (0, l.jsx)(d.Provider, {
            value: [r, i],
            children: t
          })
        }
    }
  }
]);