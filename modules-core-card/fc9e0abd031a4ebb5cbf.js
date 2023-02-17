"use strict";
(self.webpackChunk_rockstargames_modules_core_card = self.webpackChunk_rockstargames_modules_core_card || []).push([
  [923, 965], {
    2901: (e, t, a) => {
      a.r(t), a.d(t, {
        Card: () => w.Card,
        CardExpanded: () => i.Z,
        CardHeader: () => s.Z,
        CardWithImageGallery: () => w.CardWithImageGallery,
        CardWrapper: () => r.Z,
        Deck: () => w.Deck,
        LayeredImageFrame: () => l.Z,
        LinkoutWrapper: () => o.Z,
        NewEventCards: () => E,
        TextCard: () => w.TextCard,
        TextOverlay: () => d.Z,
        ThumbsGalleryOrThumb: () => n.Z
      });
      var i = a(2940),
        s = a(4168),
        r = a(8079),
        l = a(7712),
        o = a(390),
        d = a(3762),
        n = a(3667),
        m = a(822);
      const c = "ff6ec96acb3c5ee19c0b",
        u = "ddccca1208a570f758bc",
        p = a.p + "img/2eb72eb74a1f12876300.jpg",
        b = a.p + "img/9911748d41c8d682b460.jpg",
        f = a.p + "img/5b6e81f349b69d5a7c29.jpg",
        x = a.p + "img/e6b010563092abdde973.jpg",
        g = a.p + "img/1725051c465940e339e8.jpg",
        y = a.p + "img/cce45d96c091e898235f.jpg",
        N = a.p + "img/831c8e5a4d8cb9429c96.jpg",
        h = a.p + "img/3f01a1cb35c3a8b47422.jpg",
        v = a.p + "img/9a4c5bdc18539688d87c.jpg",
        j = a.p + "img/fae4cfecac99d4629602.jpg";
      var S = a(5668);
      const L = e => {
          let {
            active: t,
            styles: a,
            text: i,
            title: s,
            body: r,
            image: l,
            itemNumber: o,
            inModalMode: d,
            openModalMode: n,
            element: c,
            upNext: u,
            mobileMode: p
          } = e;
          const [b, f] = (0, m.useState)(!1), [x, g] = (0, m.useState)(0), [y, N] = (0, m.useState)({}), h = (0, m.createRef)(), v = (0, m.createRef)(), j = "2X CASH";
          return (0, m.useEffect)((() => {
            if (!0 === b) g(0);
            else {
              const e = window.getComputedStyle(v.current),
                t = Number(e.marginBottom.replace("px", "")),
                a = v.current?.clientHeight;
              g(a + t)
            }
          }), [b, v]), (0, m.useEffect)((() => {
            N(!1 === p ? a : {})
          }), [p, a]), (0, S.jsxs)("div", {
            className: "a007f10ab8958a0db17e",
            "data-item-position": o,
            "data-modal-mode": d,
            "data-active-item": t,
            "data-up-next": u,
            style: y,
            role: "button",
            tabIndex: 0,
            onClick: n,
            onKeyDown: () => {},
            ref: c,
            onMouseEnter: () => {
              f(!0)
            },
            onMouseLeave: () => {
              f(!1)
            },
            children: [(0, S.jsxs)("figure", {
              className: "f743b748bde9e9df7627",
              "data-full-header": b,
              children: [(0, S.jsx)("img", {
                className: "e946527fad723e78e326",
                src: l,
                alt: i
              }), (0, S.jsxs)("div", {
                className: "c3e66bf7370ddd11e8c6",
                style: {
                  transform: `translateY(${x}px)`
                },
                children: [(0, S.jsx)("div", {
                  className: "beab126e9e7e33c9ba80",
                  ref: h,
                  children: j
                }), (0, S.jsx)("span", {
                  className: "eccb79144df6a54e3202",
                  ref: v,
                  children: s
                })]
              })]
            }), (0, S.jsxs)("div", {
              className: "f917600625d1963d9f82",
              children: [(0, S.jsx)("span", {
                className: "b17ce401c431e66ba104",
                children: j
              }), (0, S.jsx)("span", {
                className: "b006d7507c3157a3c7fa",
                children: s
              }), (0, S.jsx)("p", {
                className: "f2defd467b0891f558dd",
                children: r
              })]
            })]
          })
        },
        E = () => {
          const e = [{
              text: 0,
              title: "Example Title",
              image: p,
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
            }, {
              text: 1,
              title: "Example Title Really Long",
              image: b,
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
            }, {
              text: 2,
              title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              image: f,
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
            }, {
              text: 3,
              title: "Example Title Really Long",
              image: x,
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
            }, {
              text: 4,
              title: "Example Title Really Long",
              image: g,
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
            }, {
              text: 5,
              title: "Example Title Really Long",
              image: y,
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
            }, {
              text: 6,
              title: "Example Title Really Long",
              image: N,
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
            }, {
              text: 7,
              title: "Example Title Really Long",
              image: h,
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
            }, {
              text: 8,
              title: "Example Title Really Long",
              image: v,
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
            }, {
              text: 9,
              title: "Example Title Really Long",
              image: j,
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
            }, {
              text: 10,
              title: "Example Title Really Long",
              image: p,
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
            }, {
              text: 6,
              title: "Example Title Really Long",
              image: N,
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
            }, {
              text: 7,
              title: "Example Title Really Long",
              image: h,
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
            }, {
              text: 8,
              title: "Example Title Really Long",
              image: v,
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
            }, {
              text: 9,
              title: "Example Title Really Long",
              image: j,
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
            }],
            t = (0, m.createRef)(),
            a = e.map((() => (0, m.createRef)())),
            [i, s] = (0, m.useState)([]),
            [r, l] = (0, m.useState)(!0),
            [o, d] = (0, m.useState)(!1),
            [n, E] = (0, m.useState)(404),
            [w, k] = (0, m.useState)(0),
            [C, T] = (0, m.useState)(0),
            [M, R] = (0, m.useState)(0),
            [Z, $] = (0, m.useState)(0),
            [W, X] = (0, m.useState)(0),
            [D, F] = (0, m.useState)(0),
            [_, Y] = (0, m.useState)(0),
            [z, I] = (0, m.useState)(!1),
            [G, H] = (0, m.useState)(0),
            [P, B] = (0, m.useState)(0),
            [K, O] = (0, m.useState)(0),
            [V, A] = (0, m.useState)(0),
            [q, J] = (0, m.useState)(0),
            [Q, U] = (0, m.useState)(0),
            [ee, te] = (0, m.useState)(50),
            [ae, ie] = (0, m.useState)(0),
            [se, re] = (0, m.useState)(!1),
            [le, oe] = (0, m.useState)(768),
            [de, ne] = (0, m.useState)(!1),
            [me, ce] = (0, m.useState)(!1),
            ue = (e, t) => {
              let a = getComputedStyle(e).getPropertyValue(t);
              return a = a.replace("px", "").replace("rem", "").replace("em", ""), a = a.replace("vh", "").replace("vw", "").replace("vmin", "").replace("vmax", ""), Number(a)
            },
            pe = () => -1 * V,
            be = e => {
              const t = window.getComputedStyle(e.element.current);
              if (!0 == (e.itemNumber % 2 == 0) && 0 !== e.itemNumber) {
                const e = Number(t.top.replace("px", ""));
                return -1 * (.5 * n + (e - W))
              }
              return W - .5 * n
            },
            fe = function(e, t) {
              let a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                s = pe();
              !1 === a && (s = 0);
              let r = n;
              if (!0 === i && (r = 1.2 * n), -1 === t) return -1 * e.styles.left - r - ee + s;
              const l = G * P;
              return l - e.styles.left + ee + s
            },
            xe = (e, t, a) => {
              d(!1 === a && e >= t || !0 === a && e + 1 === t), l(e <= 0)
            },
            ge = e => {
              J(Number(e.target.dataset.itemPosition)), ne(!0)
            },
            ye = e => e.map(((e, t) => {
              let i = 0;
              const s = Math.ceil(.5 * t) + 1;
              return t > 0 && (i = 2 === s ? w : w + C * (s - 2)), {
                ...e,
                mobileMode: se,
                itemNumber: t,
                columnNumber: s,
                inModalMode: !1,
                upNext: !0,
                active: !1,
                openModalMode: ge,
                element: a[t],
                styles: {
                  left: i
                }
              }
            })),
            Ne = e => {
              const t = (1 - P) / 2;
              H(e), re(e < le), U(e * t);
              const a = e * P,
                i = Math.round(a / C);
              R(i), $(i * C), X(.21 * e), F(e - e * t)
            };
          return (0, m.useEffect)((() => {
            if (t.current) {
              const a = ue(t.current, "--eventDeck-modalViewportWidth");
              B(.01 * a);
              const i = ue(t.current, "--eventDeck-mobileBreakpoint");
              oe(i);
              const s = ue(t.current, "--eventDeck-itemSize");
              E(s);
              const r = ue(t.current, "--eventDeck-gutterSize");
              te(r);
              const l = ue(t.current, "--eventDeck-insideMargin"),
                o = !1 === se ? 2 * s + l : s + l;
              k(o + l);
              const d = s + l;
              T(d);
              const n = .5 * (e.length - 1) * d + o;
              ie(n), Y(Math.ceil(Math.ceil(n / d) / M))
            }
          }), [t, e]), (0, m.useEffect)((() => {
            !1 !== z && s(i.map((e => (e.itemNumber > q && (e.styles = {
              ...e.styles,
              transform: `translateX(${fe(e,1,!1)}px) translateY(${be(e)}px) translateZ(0)`
            }), e))))
          }), [D, Z, ee, n, G, Q]), (0, m.useEffect)((() => {
            !1 !== de && !0 !== z && (xe(q, e.length, !0), s(i.map(((e, t) => (e.active = t === q, e.inModalMode = !0, e.itemNumber < q ? e.styles = {
              ...e.styles,
              transform: `translateX(${fe(e,-1,!0,!1)}px) translateZ(0)`
            } : e.itemNumber > q ? e.styles = {
              ...e.styles,
              transform: `translateX(${fe(e,1)}px) translateZ(0)`
            } : e.styles = {
              left: 0,
              top: 0,
              transform: `translateX(${pe()}px) translateZ(0)`
            }, e)))), I(!0), ne(!1), ce(!0))
          }), [de]), (0, m.useEffect)((() => {
            !1 !== me && (ce(!1), setTimeout((() => {
              s(i.map((e => {
                if (e.itemNumber === q - 1 || e.itemNumber === q + 1 ? e.upNext = !0 : e.itemNumber !== q && (e.upNext = !1), e.itemNumber !== q) {
                  let t = ((e, t) => {
                    const a = e.getComputedStyle(t.element.current);
                    return new WebKitCSSMatrix(a.transform).m41
                  })(window, e);
                  e.itemNumber < q && (t = fe(e, -1, !0, !0)), e.styles = {
                    ...e.styles,
                    transform: `translateX(${t}px) translateY(${be(e)}px) translateZ(0) scale(1.2)`
                  }
                }
                return e
              })))
            }), 1e3))
          }), [me]), (0, m.useEffect)((() => (window.addEventListener("resize", (() => {
            Ne(window.innerWidth)
          })), Ne(window.innerWidth), () => {
            window.removeEventListener("resize", (() => {
              Ne(window.innerWidth)
            }))
          })), [C]), (0, m.useEffect)((() => {
            0 === G && Ne(window.innerWidth)
          }), [a]), (0, m.useEffect)((() => {
            s(ye(e))
          }), [w, C]), (0, m.useEffect)((() => {
            document.body.style.overflowY = !0 === z ? "hidden" : "auto"
          }), [z]), (0, S.jsxs)(S.Fragment, {
            children: [(0, S.jsx)("div", {
              className: c,
              children: "Fake content"
            }), (0, S.jsx)("div", {
              className: "dfcb9a8692262b962df3"
            }), (0, S.jsx)("div", {
              className: c,
              children: "Fake content"
            }), (0, S.jsx)("div", {
              className: c,
              children: "Fake content"
            }), (0, S.jsx)("div", {
              className: "f945d2cbfcac207779c0",
              "data-modal-mode": z,
              "aria-hidden": "true"
            }), (0, S.jsxs)("div", {
              className: "f7ebe8dab18da5eb080a",
              "data-modal-mode": z,
              ref: t,
              children: [(0, S.jsxs)("div", {
                className: "f79854b7362ad0d3801f",
                "data-modal-mode": z,
                children: [(0, S.jsx)("h2", {
                  className: "a4ff046b36815bd8cb8d",
                  children: "New This Week"
                }), (0, S.jsxs)("div", {
                  className: "ef40556fff4a7dd71963",
                  children: [(0, S.jsx)("button", {
                    className: u,
                    type: "button",
                    onClick: () => {
                      if (!0 === z) return void(q - 1 < 0 || (xe(q - 1, e.length, !0), s(i.map((e => (e.itemNumber === q + 1 ? e.upNext = !1 : e.itemNumber === q - 2 ? e.upNext = !0 : e.itemNumber === q ? (e.active = !1, e.styles = {
                        ...e.styles,
                        transform: `translateX(${fe(e,1,!0,!0)}px) translateY(${be(e)}px) translateZ(0)`
                      }) : e.itemNumber === q - 1 && (e.active = !0, e.styles = {
                        left: 0,
                        top: 0,
                        transform: `translateX(${pe()}px) translateZ(0)`
                      }), e)))), J(q - 1)));
                      const t = K - 1;
                      if (t < 0) return;
                      xe(t, _, !1);
                      let a = V + Z;
                      O(t), a > 0 && (a = 0), A(a)
                    },
                    disabled: r,
                    "aria-label": "Previous"
                  }), (0, S.jsxs)("span", {
                    className: "da8bb3b1cd50c32c7723",
                    children: [q + 1, (0, S.jsx)("span", {
                      className: "d7c7a75d806169369012"
                    }), e.length]
                  }), (0, S.jsx)("button", {
                    className: u,
                    type: "button",
                    onClick: () => {
                      if (!0 === z) return void(q + 1 >= e.length || (xe(q + 1, e.length, !0), s(i.map((e => (e.itemNumber === q - 1 ? e.upNext = !1 : e.itemNumber === q + 2 ? e.upNext = !0 : e.itemNumber === q + 1 ? (e.active = !0, e.styles = {
                        left: 0,
                        top: 0,
                        transform: `translateX(${pe()}px) translateZ(0)`
                      }) : e.itemNumber === q && (e.active = !1, e.styles = {
                        ...e.styles,
                        transform: `translateX(${fe(e,-1,!0,!1)}px) translateY(${be(e)}px) translateZ(0)`
                      }), e)))), J(q + 1)));
                      const t = K + 1,
                        a = -1 * (Q + ae - (G - Q));
                      if (t > _) return;
                      xe(t, _, !1);
                      let r = V - Z;
                      O(t), r < a && (r = a), A(r)
                    },
                    disabled: o,
                    "aria-label": "Next"
                  })]
                }), (0, S.jsx)("button", {
                  className: "f075ba4d45b0e938ee06",
                  type: "button",
                  onClick: () => {
                    s(ye(e)), I(!1), J(0), xe(K, _, !1)
                  },
                  "aria-label": "Close"
                })]
              }), (0, S.jsx)("div", {
                className: "dcf95b8ad190308f7b24",
                "data-modal-mode": z,
                style: {
                  transform: `translateX(${V}px) translateZ(0)`,
                  width: `${ae}px`
                },
                children: i.map((e => (0, m.createElement)(L, {
                  ...e,
                  key: e.text
                })))
              })]
            }), (0, S.jsx)("div", {
              className: c,
              children: "Fake content"
            }), (0, S.jsx)("div", {
              className: c,
              children: "Fake content"
            }), (0, S.jsx)("div", {
              className: c,
              children: "Fake content"
            })]
          })
        };
      var w = a(8027)
    }
  }
]);