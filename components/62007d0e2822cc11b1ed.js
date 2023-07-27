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
            contentClassName: u = "",
            width: b
          } = t, {
            left: h,
            top: m
          } = r;
          const [p, v] = (0, n.useState)(null), [y] = (0, n.useState)({
            y: m,
            x: h,
            top: 0,
            left: 0,
            width: b,
            height: c,
            border: "0px solid transparent",
            background: "transparent"
          }), k = {
            opacity: 1
          }, x = (0, n.useRef)(null), w = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, g = {
            ease: "easeIn",
            duration: .3,
            delay: .5
          }, [E] = (0, n.useState)({
            x: "-50%",
            y: "-50%",
            top: "50%",
            left: "50%",
            width: "calc(100vw - (var(--modal-padding) * 2))",
            height: "var(--modal-height)",
            border: "1px solid var(--border-color, #2d2d2d)",
            background: "var(--black-100)",
            transition: {
              x: w,
              y: w,
              top: w,
              left: w,
              width: w,
              height: w,
              border: w,
              background: {
                delay: .3
              }
            }
          }), [_, C] = (0, n.useState)({
            initial: y,
            shown: E
          });
          (0, n.useEffect)((() => {
            C({
              initial: y,
              shown: E
            })
          }), [y, E]), (0, n.useEffect)((() => {
            const e = e => {
              "function" == typeof d && 27 === e.keyCode && d()
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []);
          const j = () => "function" == typeof d ? d() : null;
          return (0, n.useMemo)((() => (0, l.jsxs)("div", {
            className: "_93f8151fb9eb5ac4b1b29da799154d1b51b7",
            "data-show-nav": false,
            children: [(0, l.jsx)(o.E.div, {
              className: "_93f8151fb9eb5ac4a205bb0837fde83d182f",
              initial: {
                opacity: 0
              },
              animate: k,
              transition: w,
              onClick: () => j()
            }), false, (0, l.jsx)(o.E.div, {
              className: "_93f8151fb9eb5ac4fe0c0d0b3f72589dfd69",
              ref: x,
              initial: "initial",
              animate: "shown",
              variants: _,
              transition: w,
              style: f,
              children: (0, l.jsxs)(o.E.div, {
                className: (0, i.classList)("_93f8151fb9eb5ac4fcc01a21ba6273e262bd", s),
                children: [(0, l.jsx)(o.E.div, {
                  className: (0, i.classList)("_93f8151fb9eb5ac4df0821d6f0e927283e86", u),
                  initial: {
                    opacity: 0
                  },
                  animate: {
                    opacity: 1
                  },
                  transition: g,
                  children: a
                }), (0, l.jsx)(o.E.button, {
                  className: "_93f8151fb9eb5ac4b6365baf583b9e283753",
                  initial: {
                    opacity: 0
                  },
                  animate: {
                    opacity: 1
                  },
                  transition: g,
                  onClick: () => {
                    j()
                  }
                })]
              })
            })]
          })), [a, p, f])
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