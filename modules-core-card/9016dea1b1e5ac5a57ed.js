"use strict";
(self.webpackChunk_rockstargames_modules_core_card = self.webpackChunk_rockstargames_modules_core_card || []).push([
  [511, 965], {
    8962: (e, t, a) => {
      a.r(t), a.d(t, {
        Card: () => k.Card,
        CardExpanded: () => i.Z,
        CardHeader: () => s.Z,
        CardWithImageGallery: () => k.CardWithImageGallery,
        CardWrapper: () => r.Z,
        Deck: () => k.Deck,
        LayeredImageFrame: () => l.Z,
        LinkoutWrapper: () => o.Z,
        NewEventCards: () => L,
        TextCard: () => k.TextCard,
        TextOverlay: () => d.Z,
        ThumbsGalleryOrThumb: () => n.Z
      });
      var i = a(9525),
        s = a(547),
        r = a(8819),
        l = a(507),
        o = a(4950),
        d = a(9838),
        n = a(7366),
        c = a(822),
        m = a(6803);
      const u = "ff6ec96acb3c5ee19c0b",
        p = "ddccca1208a570f758bc";
      var f = a(3322);
      const b = e => {
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
            element: m,
            upNext: u,
            mobileMode: p,
            viewHeight: b,
            refDeck: g
          } = e;
          const x = (0, c.createRef)(),
            h = (0, c.createRef)(),
            y = (0, c.createRef)(),
            N = (0, c.createRef)(),
            [v, E] = (0, c.useState)(!1),
            [w, S] = (0, c.useState)(0),
            [j, L] = (0, c.useState)({}),
            [k, $] = (0, c.useState)(0),
            [C, M] = (0, c.useState)(0),
            [R, T] = (0, c.useState)({}),
            [D, W] = (0, c.useState)(0),
            z = "2X CASH",
            F = (e, t) => {
              let a = getComputedStyle(e).getPropertyValue(t);
              return a = a.replace("px", "").replace("rem", "").replace("em", ""), a = a.replace("vh", "").replace("vw", "").replace("vmin", "").replace("vmax", ""), Number(a)
            },
            G = (e, t) => {
              const a = e?.documentElement ? F(e?.documentElement, "--root-font-size") : 0,
                i = a * (g?.current ? F(g?.current, "--eventDeck-modalGuttersMobile") : 0);
              M((t?.innerWidth || 0) - 2 * i), W(g?.current ? F(g?.current, "--eventDeck-itemSize") * a : 0)
            };
          return (0, c.useEffect)((() => {
            if (!0 === v && !1 === p) S(0);
            else if (h.current) {
              const e = F(h?.current, "marginBottom"),
                t = h?.current?.clientHeight;
              S(t + e)
            }
          }), [v, h, p, d]), (0, c.useEffect)((() => {
            E(!1)
          }), [t]), (0, c.useEffect)((() => {
            L({
              ...j,
              ...a
            })
          }), [a]), (0, c.useEffect)((() => {
            $(b)
          }), [b, p]), (0, c.useEffect)((() => (window.addEventListener("resize", (() => {
            G(document, window)
          })), G(document, window), () => {
            window.removeEventListener("resize", (() => {
              G(document, window)
            }))
          })), [g]), (0, c.useEffect)((() => {
            if (!1 === p) return void T({
              height: null,
              width: null
            });
            const e = !1 === d ? D : C;
            T({
              height: `${e}px`,
              width: `${e}px`
            })
          }), [d, p]), (0, f.jsxs)("div", {
            className: "a007f10ab8958a0db17e",
            ref: m,
            "data-item-position": o,
            "data-modal-mode": d,
            "data-active-item": t,
            "data-up-next": u,
            style: {
              ...j,
              ...a,
              height: a?.height || j?.height || null
            },
            role: "button",
            onClick: e => {
              !1 === d && n(e)
            },
            onMouseEnter: () => {
              !1 === d && E(!0)
            },
            onMouseLeave: () => {
              !1 === d && E(!1)
            },
            children: [(0, f.jsxs)("figure", {
              className: "f743b748bde9e9df7627",
              "data-full-header": v,
              ref: y,
              style: R,
              children: [(0, f.jsx)("img", {
                className: "e946527fad723e78e326",
                src: l,
                alt: i
              }), (0, f.jsxs)("div", {
                className: "c3e66bf7370ddd11e8c6",
                style: {
                  transform: p ? null : `translateY(${w}px)`
                },
                children: [(0, f.jsx)("div", {
                  className: "beab126e9e7e33c9ba80",
                  ref: x,
                  children: z
                }), (0, f.jsx)("span", {
                  className: "eccb79144df6a54e3202",
                  ref: h,
                  children: s
                })]
              })]
            }), (0, f.jsxs)("div", {
              className: "f917600625d1963d9f82",
              ref: N,
              style: {
                width: !0 === d && !0 === t && !1 === p ? `calc(100% - ${k}px)` : null,
                top: !0 === d && !0 === p ? `${C}px` : null
              },
              children: [(0, f.jsx)("span", {
                className: "b17ce401c431e66ba104",
                children: z
              }), (0, f.jsx)("span", {
                className: "b006d7507c3157a3c7fa",
                children: s
              }), (0, f.jsx)("p", {
                className: "f2defd467b0891f558dd",
                children: r
              })]
            })]
          })
        },
        g = a.p + "img/2eb72eb74a1f12876300.jpg",
        x = a.p + "img/9911748d41c8d682b460.jpg",
        h = a.p + "img/5b6e81f349b69d5a7c29.jpg",
        y = a.p + "img/e6b010563092abdde973.jpg",
        N = a.p + "img/1725051c465940e339e8.jpg",
        v = a.p + "img/cce45d96c091e898235f.jpg",
        E = a.p + "img/831c8e5a4d8cb9429c96.jpg",
        w = a.p + "img/3f01a1cb35c3a8b47422.jpg",
        S = a.p + "img/9a4c5bdc18539688d87c.jpg",
        j = a.p + "img/fae4cfecac99d4629602.jpg",
        L = () => {
          const [e] = (0, m.useSearchParams)(), t = e.get("items"), a = [{
            text: 0,
            title: "Example Title",
            image: g,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
          }, {
            text: 1,
            title: "GTA+ Members Can Claim the 50-Vehicle Eclipse Blvd Garage and the Emperor Vectre",
            image: x,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
          }, {
            text: 2,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: h,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
          }, {
            text: 3,
            title: "Example Title Really Long",
            image: y,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
          }, {
            text: 4,
            title: "Example Title Really Long",
            image: N,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
          }, {
            text: 5,
            title: "Example Title Really Long",
            image: v,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
          }, {
            text: 6,
            title: "Example Title Really Long",
            image: E,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
          }, {
            text: 7,
            title: "Example Title Really Long",
            image: w,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
          }, {
            text: 8,
            title: "Example Title Really Long",
            image: S,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
          }, {
            text: 9,
            title: "Example Title Really Long",
            image: j,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
          }, {
            text: 10,
            title: "Example Title Really Long",
            image: g,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
          }, {
            text: 11,
            title: "Example Title Really Long",
            image: E,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
          }, {
            text: 12,
            title: "Example Title Really Long",
            image: w,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
          }, {
            text: 13,
            title: "Example Title Really Long",
            image: S,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
          }, {
            text: 14,
            title: "Example Title Really Long",
            image: j,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
          }];
          let i = a;
          if (null !== t) {
            const e = Number(t);
            if (a.length > e) i = i.slice(0, e);
            else if (a.length < e) {
              let t = e - a.length;
              t > 15 && (t = 15);
              let s = 0;
              for (; s < t; s += 1) i.push(a[s])
            }
          }
          const s = (0, c.createRef)(),
            r = (0, c.createRef)(),
            l = (0, c.createRef)(),
            o = i.map((() => (0, c.createRef)())),
            [d, n] = (0, c.useState)([]),
            [L, k] = (0, c.useState)(!0),
            [$, C] = (0, c.useState)(!1),
            [M, R] = (0, c.useState)(404),
            [T, D] = (0, c.useState)(0),
            [W, z] = (0, c.useState)(0),
            [F, G] = (0, c.useState)(0),
            [H, _] = (0, c.useState)(0),
            [Z, A] = (0, c.useState)(0),
            [P, B] = (0, c.useState)(0),
            [V, I] = (0, c.useState)(0),
            [O, Y] = (0, c.useState)(!1),
            [U, X] = (0, c.useState)(0),
            [q, J] = (0, c.useState)(0),
            [K, Q] = (0, c.useState)(0),
            [ee, te] = (0, c.useState)(0),
            [ae, ie] = (0, c.useState)(0),
            [se, re] = (0, c.useState)(0),
            [le, oe] = (0, c.useState)(0),
            [de, ne] = (0, c.useState)(0),
            [ce, me] = (0, c.useState)(50),
            [ue, pe] = (0, c.useState)(0),
            [fe, be] = (0, c.useState)(!1),
            [ge, xe] = (0, c.useState)(768),
            [he, ye] = (0, c.useState)(!1),
            [Ne, ve] = (0, c.useState)(!1),
            [Ee, we] = (0, c.useState)(1.2),
            Se = (e, t) => {
              let a = getComputedStyle(e).getPropertyValue(t);
              return a = a.replace("px", "").replace("rem", "").replace("em", ""), a = a.replace("vh", "").replace("vw", "").replace("vmin", "").replace("vmax", ""), a = a.replace("ms", "").replace("s", ""), Number(a)
            },
            je = () => !1 === fe ? Ee : 1,
            Le = e => e === ae - 1 || e === ae + 1,
            ke = () => -1 * ee,
            $e = e => {
              if (!0 === fe) return 0;
              const t = e.itemNumber % 2 == 0,
                a = M * Ee;
              return !0 === t && 0 !== e.itemNumber ? -1 * (.5 * a + (Se(e?.element?.current, "top", window) - Z)) : Z - .5 * a
            },
            Ce = function(e, t) {
              let a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                i = ke();
              !1 === a && (i = 0);
              const s = U * q,
                r = !1 === fe ? M * je() : s;
              return -1 === t ? -1 * e.styles.left - r - ce + i : s - e.styles.left + ce + i
            },
            Me = (e, t, a) => {
              C(!1 === a && e >= t || !0 === a && e + 1 === t), k(e <= 0)
            },
            Re = () => {
              ae + 1 >= i.length || (Me(ae + 1, i.length, !0), n(d.map((e => (e.itemNumber === ae - 1 ? e.upNext = !1 : e.itemNumber === ae + 2 ? e.upNext = !0 : e.itemNumber === ae + 1 ? (e.active = !0, e.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${ke()}px, 0, 0) scale(1)`
              }) : e.itemNumber === ae && (e.upNext = !0, e.active = !1, e.styles = {
                ...e.styles,
                transform: `translate3d(${Ce(e,-1)}px, ${$e(e)}px, 0) scale(${je()})`
              }), e)))), ie(ae + 1))
            },
            Te = () => {
              ae - 1 < 0 || (Me(ae - 1, i.length, !0), n(d.map((e => (e.itemNumber === ae + 1 ? e.upNext = !1 : e.itemNumber === ae - 2 ? e.upNext = !0 : e.itemNumber === ae ? (e.upNext = !0, e.active = !1, e.styles = {
                ...e.styles,
                transform: `translate3d(${Ce(e,1)}px, ${$e(e)}px, 0) scale(${je()})`
              }) : e.itemNumber === ae - 1 && (e.active = !0, e.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${ke()}px, 0, 0) scale(1)`
              }), e)))), ie(ae - 1))
            },
            De = e => {
              ie(Number(e.target.dataset.itemPosition)), ye(!0)
            },
            We = e => {
              if (!1 === O) return;
              const {
                key: t
              } = e;
              "ArrowLeft" === t ? Te() : "ArrowRight" === t && Re()
            },
            ze = e => e.map(((e, t) => {
              let a = t * W,
                i = t;
              return !1 === fe && (i = Math.ceil(.5 * t) + 1, t > 0 && (a = 2 === i ? T : T + W * (i - 2))), {
                ...e,
                mobileMode: fe,
                itemNumber: t,
                columnNumber: i,
                inModalMode: !1,
                upNext: !0,
                active: !1,
                openModalMode: De,
                element: o[t],
                styles: {
                  left: a,
                  transform: null,
                  height: null,
                  top: null
                }
              }
            })),
            Fe = e => {
              const t = (1 - q) / 2;
              X(e), be(e < ge), ne(e * t);
              const a = e * q,
                i = !1 === fe ? Math.round(a / W) : 1;
              G(i), _(i * W), B(e - e * t)
            };
          return (0, c.useEffect)((() => {
            let e = 0,
              t = 0;
            r.current && (e = r?.current?.clientHeight, e += Se(r?.current, "margin-top"), e += Se(r?.current, "margin-bottom"), oe(e)), l.current && (t = l?.current?.clientHeight, t += Se(l?.current, "margin-top"), t += Se(l?.current, "margin-bottom"), re(t))
          }), [r, l]), (0, c.useEffect)((() => {
            if (s.current) {
              const e = Se(document.documentElement, "--root-font-size"),
                t = Se(s.current, "--eventDeck-modalGutters"),
                a = U - t * e * 2;
              J(a / U);
              let r = Se(s.current, "--eventDeck-modalBottomGutter");
              r *= e;
              const l = window.innerHeight - (le + r);
              A(.5 * a < l ? a / 4 : .5 * l);
              const o = Se(s.current, "--eventDeck-mobileBreakpoint");
              xe(o);
              let d = Se(s.current, "--eventDeck-itemSize");
              d *= e, R(d);
              let n = Se(s.current, "--eventDeck-gutterSize");
              n *= e, me(n);
              let c = Se(s.current, "--eventDeck-insideMargin");
              c *= e;
              const m = !1 === fe ? 2 * d + c : d + c;
              D(m + c);
              const u = d + c;
              z(u);
              const p = .5 * (i.length - 1) * u + m;
              pe(p), I(Math.ceil(Math.ceil(p / u) / F)), we(Se(s.current, "--eventDeck-itemScaleUpAmount"))
            }
          }), [s, i]), (0, c.useEffect)((() => {
            !1 !== O && !0 !== fe && n(d.map((e => (e.itemNumber > ae ? e.styles = {
              ...e.styles,
              transform: `translate3d(${Ce(e,1)}px, ${$e(e)}px, 0) scale(${je()})`
            } : e.itemNumber < ae && (e.styles = {
              ...e.styles,
              transform: `translate3d(${Ce(e,-1)}px, ${$e(e)}px, 0) scale(${je()})`
            }), e))))
          }), [P, H, ce, M, U, de, Z]), (0, c.useEffect)((() => {
            !1 !== he && !0 !== O && (Y(!0), ye(!1), Me(ae, i.length, !0), n(d.map(((e, t) => (e.active = t === ae, e.inModalMode = !0, !0 === fe && (e.upNext = Le(e.itemNumber)), e.itemNumber < ae ? e.styles = {
              ...e.styles,
              transform: `translate3d(${Ce(e,-1)}px, 0, 0) scale(${je()})`
            } : e.itemNumber > ae ? e.styles = {
              ...e.styles,
              transform: `translate3d(${Ce(e,1)}px, 0, 0) scale(1)`
            } : e.styles = {
              left: 0,
              top: 0,
              transform: `translate3d(${ke()}px, 0, 0) scale(1)`
            }, e)))), !1 === fe && ve(!0))
          }), [he]), (0, c.useEffect)((() => {
            !1 !== Ne && !0 !== fe && (ve(!1), setTimeout((() => {
              n(d.map((e => {
                if (e.upNext = Le(e.itemNumber), e.itemNumber !== ae) {
                  let t = Ce(e, 1);
                  e.itemNumber < ae && (t = Ce(e, -1)), e.styles = {
                    ...e.styles,
                    transform: `translate3d(${t}px, ${$e(e)}px, 0) scale(${je()})`
                  }
                }
                return e
              })))
            }), 1e3))
          }), [Ne]), (0, c.useEffect)((() => (document.addEventListener("keydown", We), () => {
            document.removeEventListener("keydown", We)
          })), [O, ae]), (0, c.useEffect)((() => (window.addEventListener("resize", (() => {
            Fe(window.innerWidth)
          })), Fe(window.innerWidth), () => {
            window.removeEventListener("resize", (() => {
              Fe(window.innerWidth)
            }))
          })), [W, r, l]), (0, c.useEffect)((() => {
            0 === U && Fe(window.innerWidth)
          }), [o]), (0, c.useEffect)((() => {
            n(ze(i))
          }), [T, W]), (0, c.useEffect)((() => {
            document.body.style.overflowY = !0 === O ? "hidden" : "auto"
          }), [O]), (0, c.useEffect)((() => {
            te(0), Q(0), Y(!1)
          }), [fe]), (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsx)("div", {
              className: u,
              children: "Fake content"
            }), (0, f.jsx)("div", {
              className: u,
              children: "Fake content"
            }), (0, f.jsx)("div", {
              className: u,
              children: "Fake content"
            }), d.length > 0 && (0, f.jsxs)(f.Fragment, {
              children: [(0, f.jsx)("div", {
                className: "f945d2cbfcac207779c0",
                "data-modal-mode": O,
                "aria-hidden": "true"
              }), (0, f.jsxs)("div", {
                className: "f7ebe8dab18da5eb080a",
                "data-modal-mode": O,
                ref: s,
                children: [(0, f.jsxs)("div", {
                  className: "f79854b7362ad0d3801f",
                  "data-modal-mode": O,
                  ref: r,
                  children: [(0, f.jsx)("h2", {
                    className: "a4ff046b36815bd8cb8d",
                    children: "New This Week"
                  }), (0, f.jsxs)("div", {
                    className: "ef40556fff4a7dd71963",
                    children: [(0, f.jsx)("button", {
                      className: p,
                      type: "button",
                      onClick: () => {
                        if (!0 === O) return void Te();
                        const e = K - 1;
                        if (e < 0) return;
                        Me(e, V, !1);
                        let t = ee + H;
                        Q(e), t > 0 && (t = 0), te(t)
                      },
                      disabled: L,
                      "aria-label": "Previous"
                    }), (0, f.jsxs)("span", {
                      className: "da8bb3b1cd50c32c7723",
                      children: [ae + 1, (0, f.jsx)("span", {
                        className: "d7c7a75d806169369012"
                      }), i.length]
                    }), (0, f.jsx)("button", {
                      className: p,
                      type: "button",
                      onClick: () => {
                        if (!0 === O) return void Re();
                        const e = K + 1,
                          t = -1 * (de + ue - (U - de));
                        if (e > V) return;
                        Me(e, V, !1);
                        let a = ee - H;
                        Q(e), a < t && (a = t), te(a)
                      },
                      disabled: $,
                      "aria-label": "Next"
                    })]
                  }), (0, f.jsx)("button", {
                    className: "f075ba4d45b0e938ee06",
                    type: "button",
                    onClick: () => {
                      n(ze(i)), Y(!1), ie(0), Me(K, V, !1)
                    },
                    "aria-label": "Close"
                  })]
                }), (0, f.jsx)("div", {
                  className: "dcf95b8ad190308f7b24",
                  "data-modal-mode": O,
                  style: {
                    transform: `translate3d(${ee}px, 0, 0)`,
                    width: `${ue}px`
                  },
                  ref: l,
                  children: d.map((e => (0, c.createElement)(b, {
                    ...e,
                    viewHeight: se,
                    refDeck: s,
                    key: e.text
                  })))
                })]
              })]
            }), (0, f.jsx)("div", {
              className: u,
              children: "Fake content"
            }), (0, f.jsx)("div", {
              className: u,
              children: "Fake content"
            }), (0, f.jsx)("div", {
              className: u,
              children: "Fake content"
            })]
          })
        };
      var k = a(4912)
    }
  }
]);