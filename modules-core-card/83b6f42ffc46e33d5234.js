"use strict";
(self.webpackChunk_rockstargames_modules_core_card = self.webpackChunk_rockstargames_modules_core_card || []).push([
  [24, 965], {
    7234: (e, t, a) => {
      a.r(t), a.d(t, {
        Card: () => G.Card,
        CardExpanded: () => i.Z,
        CardHeader: () => s.Z,
        CardWithImageGallery: () => G.CardWithImageGallery,
        CardWrapper: () => r.Z,
        Deck: () => G.Deck,
        EventsDeck: () => B,
        LayeredImageFrame: () => l.Z,
        LinkoutWrapper: () => o.Z,
        TextCard: () => G.TextCard,
        TextOverlay: () => n.Z,
        ThumbsGalleryOrThumb: () => d.Z
      });
      var i = a(9525),
        s = a(547),
        r = a(8819),
        l = a(507),
        o = a(4950),
        n = a(9838),
        d = a(7366),
        m = a(822),
        c = a(6803),
        u = a(8976),
        p = a(420),
        b = a.n(p),
        f = a(9542),
        g = a(1204);
      const x = "ed17b4a4a4d4870ae56d",
        h = "ab39eebc03685c4f986a",
        N = "f213084594141dceb0c4",
        y = "d3e4d3e5ce9f0f2ef473",
        v = "a940c0c9ba98d3a88a19";
      var E = a(3322);
      const w = e => {
          const {
            active: t,
            styles: a,
            text: i,
            title: s,
            body: r,
            image: l,
            itemNumber: o,
            inModalMode: n,
            openModalMode: d,
            element: c,
            upNext: u,
            mobileMode: p,
            viewHeight: b,
            refDeck: f
          } = e, g = (0, m.createRef)(), x = (0, m.createRef)(), h = (0, m.createRef)(), N = (0, m.createRef)(), [y, v] = (0, m.useState)(!1), [w, S] = (0, m.useState)(0), [j, L] = (0, m.useState)({}), [k, M] = (0, m.useState)(0), [C, $] = (0, m.useState)(0), [T, R] = (0, m.useState)({}), [D, W] = (0, m.useState)(0), B = "2X CASH", G = (e, t) => {
            let a = getComputedStyle(e).getPropertyValue(t);
            return a = a.replace("px", "").replace("rem", "").replace("em", ""), a = a.replace("vh", "").replace("vw", "").replace("vmin", "").replace("vmax", ""), Number(a)
          }, H = (e, t) => {
            const a = e?.documentElement ? G(e?.documentElement, "--root-font-size") : 0,
              i = a * (f?.current ? G(f?.current, "--eventDeck-modalGuttersMobile") : 0);
            $((t?.innerWidth || 0) - 2 * i), W(f?.current ? G(f?.current, "--eventDeck-itemSize") * a : 0)
          };
          return (0, m.useEffect)((() => {
            if (!0 === y && !1 === p) S(0);
            else if (x.current) {
              const e = G(x?.current, "marginBottom"),
                t = x?.current?.clientHeight;
              S(t + e)
            }
          }), [y, x, p, n]), (0, m.useEffect)((() => {
            v(!1)
          }), [t]), (0, m.useEffect)((() => {
            L({
              ...j,
              ...a
            })
          }), [a]), (0, m.useEffect)((() => {
            M(b)
          }), [b, p]), (0, m.useEffect)((() => (window.addEventListener("resize", (() => {
            H(document, window)
          })), H(document, window), () => {
            window.removeEventListener("resize", (() => {
              H(document, window)
            }))
          })), [f]), (0, m.useEffect)((() => {
            if (!1 === p) return void R({
              height: null,
              width: null
            });
            const e = !1 === n ? D : C;
            R({
              height: `${e}px`,
              width: `${e}px`
            })
          }), [n, p]), (0, E.jsxs)("div", {
            className: "fde59cc0b211a74fd79f",
            ref: c,
            "data-item-position": o,
            "data-modal-mode": n,
            "data-active-item": t,
            "data-up-next": u,
            style: {
              ...j,
              ...a,
              height: a?.height || j?.height || null
            },
            role: "button",
            onClick: e => {
              !1 === n && d(e)
            },
            onMouseEnter: () => {
              !1 === n && v(!0)
            },
            onMouseLeave: () => {
              !1 === n && v(!1)
            },
            children: [(0, E.jsxs)("figure", {
              className: "fa238bf7612b7724abaa",
              "data-full-header": y,
              ref: h,
              style: T,
              children: [(0, E.jsx)("img", {
                className: "f4e66768fabf9ba7abd5",
                src: l,
                alt: i
              }), (0, E.jsxs)("div", {
                className: "d21f276146dec1dcf842",
                style: {
                  transform: p ? null : `translateY(${w}px)`
                },
                children: [(0, E.jsx)("div", {
                  className: "d9c130714618614ef63c",
                  ref: g,
                  children: B
                }), (0, E.jsx)("span", {
                  className: "e056f0aa82c811cbadda",
                  ref: x,
                  children: s
                })]
              })]
            }), (0, E.jsxs)("div", {
              className: "f4efaa263cba6ec12f58",
              ref: N,
              style: {
                width: !0 === n && !0 === t && !1 === p ? `calc(100% - ${k}px)` : null,
                top: !0 === n && !0 === p ? `${C}px` : null
              },
              children: [(0, E.jsx)("span", {
                className: "d4743b00b93d13770f9b",
                children: B
              }), (0, E.jsx)("span", {
                className: "d784a6def5f96306e977",
                children: s
              }), (0, E.jsx)("p", {
                className: "b98f5b22300490f3feb8",
                children: r
              })]
            })]
          })
        },
        S = a.p + "img/2eb72eb74a1f12876300.jpg",
        j = a.p + "img/9911748d41c8d682b460.jpg",
        L = a.p + "img/5b6e81f349b69d5a7c29.jpg",
        k = a.p + "img/e6b010563092abdde973.jpg",
        M = a.p + "img/1725051c465940e339e8.jpg",
        C = a.p + "img/cce45d96c091e898235f.jpg",
        $ = a.p + "img/831c8e5a4d8cb9429c96.jpg",
        T = a.p + "img/3f01a1cb35c3a8b47422.jpg",
        R = a.p + "img/9a4c5bdc18539688d87c.jpg",
        D = a.p + "img/fae4cfecac99d4629602.jpg",
        W = e => {
          let {
            prevPage: t,
            prevBtnDisabled: a,
            nextPage: i,
            nextBtnDisabled: s,
            selectedItemNumber: r,
            itemsData: l,
            closeModalMode: o
          } = e;
          return (0, E.jsxs)(E.Fragment, {
            children: [(0, E.jsxs)("div", {
              className: x,
              children: [(0, E.jsx)("button", {
                className: h,
                type: "button",
                onClick: t,
                disabled: a,
                "aria-label": "Previous"
              }), (0, E.jsxs)("span", {
                className: N,
                children: [r + 1, (0, E.jsx)("span", {
                  className: y
                }), l.length]
              }), (0, E.jsx)("button", {
                className: h,
                type: "button",
                onClick: i,
                disabled: s,
                "aria-label": "Next"
              })]
            }), (0, E.jsx)("button", {
              className: v,
              type: "button",
              onClick: o,
              "aria-label": "Close"
            })]
          })
        },
        B = e => {
          let {
            title: t = "New This Week"
          } = e;
          const [a] = (0, c.useSearchParams)(), i = a.get("items"), s = [{
            text: 0,
            title: "Example Title",
            image: S,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
          }, {
            text: 1,
            title: "GTA+ Members Can Claim the 50-Vehicle Eclipse Blvd Garage and the Emperor Vectre",
            image: j,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
          }, {
            text: 2,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: L,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
          }, {
            text: 3,
            title: "Example Title Really Long",
            image: k,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
          }, {
            text: 4,
            title: "Example Title Really Long",
            image: M,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
          }, {
            text: 5,
            title: "Example Title Really Long",
            image: C,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
          }, {
            text: 6,
            title: "Example Title Really Long",
            image: $,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
          }, {
            text: 7,
            title: "Example Title Really Long",
            image: T,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
          }, {
            text: 8,
            title: "Example Title Really Long",
            image: R,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
          }, {
            text: 9,
            title: "Example Title Really Long",
            image: D,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
          }, {
            text: 10,
            title: "Example Title Really Long",
            image: S,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
          }, {
            text: 11,
            title: "Example Title Really Long",
            image: $,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
          }, {
            text: 12,
            title: "Example Title Really Long",
            image: T,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
          }, {
            text: 13,
            title: "Example Title Really Long",
            image: R,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
          }, {
            text: 14,
            title: "Example Title Really Long",
            image: D,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
          }];
          let r = s;
          if (null !== i) {
            const e = Number(i);
            if (s.length > e) r = r.slice(0, e);
            else if (s.length < e) {
              let t = e - s.length;
              t > 15 && (t = 15);
              let a = 0;
              for (; a < t; a += 1) r.push(s[a])
            }
          }
          const l = (0, m.createRef)(),
            o = (0, m.createRef)(),
            n = (0, m.createRef)(),
            d = r.map((() => (0, m.createRef)())),
            [p, B] = (0, m.useState)([]),
            [G, H] = (0, m.useState)(!0),
            [P, z] = (0, m.useState)(!1),
            [I, Z] = (0, m.useState)(404),
            [_, A] = (0, m.useState)(0),
            [V, F] = (0, m.useState)(0),
            [O, Y] = (0, m.useState)(0),
            [U, X] = (0, m.useState)(0),
            [q, J] = (0, m.useState)(0),
            [K, Q] = (0, m.useState)(0),
            [ee, te] = (0, m.useState)(0),
            [ae, ie] = (0, m.useState)(!1),
            [se, re] = (0, m.useState)(0),
            [le, oe] = (0, m.useState)(0),
            [ne, de] = (0, m.useState)(0),
            [me, ce] = (0, m.useState)(0),
            [ue, pe] = (0, m.useState)(0),
            [be, fe] = (0, m.useState)(0),
            [ge, xe] = (0, m.useState)(0),
            [he, Ne] = (0, m.useState)(0),
            [ye, ve] = (0, m.useState)(50),
            [Ee, we] = (0, m.useState)(0),
            [Se, je] = (0, m.useState)(!1),
            [Le, ke] = (0, m.useState)(768),
            [Me, Ce] = (0, m.useState)(!1),
            [$e, Te] = (0, m.useState)(!1),
            [Re, De] = (0, m.useState)(1.2),
            We = (e, t) => {
              let a = getComputedStyle(e).getPropertyValue(t);
              return a = a.replace("px", "").replace("rem", "").replace("em", ""), a = a.replace("vh", "").replace("vw", "").replace("vmin", "").replace("vmax", ""), a = a.replace("ms", "").replace("s", ""), Number(a)
            },
            Be = () => se * le + ye,
            Ge = () => !1 === Se ? Re : 1,
            He = e => e === ue - 1 || e === ue + 1,
            Pe = () => -1 * me,
            ze = e => {
              if (!0 === Se) return 0;
              const t = e.itemNumber % 2 == 0,
                a = I * Re;
              return !0 === t && 0 !== e.itemNumber ? -1 * (.5 * a + (We(e?.element?.current, "top", window) - q)) : q - .5 * a
            },
            Ie = function(e, t) {
              let a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                i = Pe();
              !1 === a && (i = 0);
              const s = se * le,
                r = !1 === Se ? I * Ge() : s;
              return e.inModalMode && Se ? -1 === t ? Be() * (ue - e.itemNumber) * -1 - e.styles.left : Be() * (e.itemNumber - ue) - e.styles.left : -1 === t ? -1 * e.styles.left - r - ye + i : s - e.styles.left + ye + i
            },
            Ze = (e, t, a) => {
              z(!1 === a && e >= t || !0 === a && e + 1 === t), H(e <= 0)
            },
            _e = () => {
              ue + 1 >= r.length || (Ze(ue + 1, r.length, !0), Se || B(p.map((e => (e.itemNumber === ue - 1 ? e.upNext = !1 : e.itemNumber === ue + 2 ? e.upNext = !0 : e.itemNumber === ue + 1 ? (e.active = !0, e.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${Pe()}px, 0, 0) scale(1)`
              }) : e.itemNumber === ue && (e.upNext = !0, e.active = !1, e.styles = {
                ...e.styles,
                transform: `translate3d(${Ie(e,-1)}px, ${ze(e)}px, 0) scale(${Ge()})`
              }), e)))), Se && (B(p.map((e => (e.itemNumber === ue - 1 ? e.upNext = !1 : e.itemNumber === ue + 2 ? e.upNext = !0 : e.itemNumber === ue + 1 ? e.active = !0 : e.itemNumber === ue && (e.upNext = !0, e.active = !1), e)))), ce(me - Be())), pe(ue + 1))
            },
            Ae = () => {
              if (!0 === ae) return void _e();
              const e = ne + 1,
                t = -1 * (he + Ee - (se - he));
              if (e > ee) return;
              Ze(e, ee, !1);
              let a = me - U;
              de(e), a < t && (a = t), ce(a)
            },
            Ve = () => {
              ue - 1 < 0 || (Ze(ue - 1, r.length, !0), Se || B(p.map((e => (e.itemNumber === ue + 1 ? e.upNext = !1 : e.itemNumber === ue - 2 ? e.upNext = !0 : e.itemNumber === ue ? (e.upNext = !0, e.active = !1, e.styles = {
                ...e.styles,
                transform: `translate3d(${Ie(e,1)}px, ${ze(e)}px, 0) scale(${Ge()})`
              }) : e.itemNumber === ue - 1 && (e.active = !0, e.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${Pe()}px, 0, 0) scale(1)`
              }), e)))), Se && (B(p.map((e => (e.itemNumber === ue + 1 ? e.upNext = !1 : e.itemNumber === ue - 2 ? e.upNext = !0 : e.itemNumber === ue ? (e.upNext = !0, e.active = !1) : e.itemNumber === ue - 1 && (e.active = !0), e)))), ce(me + Be())), pe(ue - 1))
            },
            Fe = () => {
              if (!0 === ae) return void Ve();
              const e = ne - 1;
              if (e < 0) return;
              Ze(e, ee, !1);
              let t = me + U;
              de(e), t > 0 && (t = 0), ce(t)
            },
            Oe = e => {
              pe(Number(e.target.dataset.itemPosition)), Se && ce(0), Ce(!0)
            },
            Ye = () => {
              B(Xe(r)), ce(0), ie(!1), pe(0), Ze(ne, ee, !1)
            },
            Ue = e => {
              if (!1 === ae) return;
              const {
                key: t
              } = e;
              "ArrowLeft" === t ? Ve() : "ArrowRight" === t && _e()
            },
            Xe = e => e.map(((e, t) => {
              let a = t * V,
                i = t;
              return !1 === Se && (i = Math.ceil(.5 * t) + 1, t > 0 && (a = 2 === i ? _ : _ + V * (i - 2))), {
                ...e,
                mobileMode: Se,
                itemNumber: t,
                columnNumber: i,
                inModalMode: !1,
                upNext: !0,
                active: !1,
                openModalMode: Oe,
                element: d[t],
                styles: {
                  left: a,
                  transform: null,
                  height: null,
                  top: null
                }
              }
            })),
            qe = e => {
              const t = (1 - le) / 2;
              re(e), je(e < Le), Ne(e * t);
              const a = e * le,
                i = !1 === Se ? Math.round(a / V) : 1;
              Y(i), X(i * V), Q(e - e * t)
            };
          (0, m.useEffect)((() => {
            let e = 0,
              t = 0;
            o.current && (e = o?.current?.clientHeight, e += We(o?.current, "margin-top"), e += We(o?.current, "margin-bottom"), xe(e)), n.current && (t = n?.current?.clientHeight, t += We(n?.current, "margin-top"), t += We(n?.current, "margin-bottom"), fe(t))
          }), [o, n]), (0, m.useEffect)((() => {
            if (l.current) {
              const e = We(document.documentElement, "--root-font-size"),
                t = We(l.current, "--eventDeck-modalGutters"),
                a = se - t * e * 2;
              oe(a / se);
              let i = We(l.current, "--eventDeck-modalBottomGutter");
              i *= e;
              const s = window.innerHeight - (ge + i);
              J(.5 * a < s ? a / 4 : .5 * s);
              const o = We(l.current, "--eventDeck-mobileBreakpoint");
              ke(o);
              let n = We(l.current, "--eventDeck-itemSize");
              n *= e, Z(n);
              let d = We(l.current, "--eventDeck-gutterSize");
              d *= e, ve(d);
              let m = We(l.current, "--eventDeck-insideMargin");
              m *= e;
              const c = !1 === Se ? 2 * n + m : n + m;
              A(c + m);
              const u = n + m;
              F(u);
              const p = .5 * (r.length - 1) * u + c;
              we(p), te(Math.ceil(Math.ceil(p / u) / O));
              const b = We(l.current, "--eventDeck-itemScaleUpAmount");
              De(b)
            }
          }), [l, r]), (0, m.useEffect)((() => {
            !1 !== ae && !0 !== Se && B(p.map((e => (e.itemNumber > ue ? e.styles = {
              ...e.styles,
              transform: `translate3d(${Ie(e,1)}px, ${ze(e)}px, 0) scale(${Ge()})`
            } : e.itemNumber < ue && (e.styles = {
              ...e.styles,
              transform: `translate3d(${Ie(e,-1)}px, ${ze(e)}px, 0) scale(${Ge()})`
            }), e))))
          }), [K, U, ye, I, se, he, q]), (0, m.useEffect)((() => {
            !1 !== Me && !0 !== ae && (ie(!0), Ce(!1), Ze(ue, p.length, !0), B(p.map(((e, t) => (e.active = t === ue, e.inModalMode = !0, !0 === Se && (e.upNext = He(e.itemNumber)), e.itemNumber < ue ? e.styles = {
              ...e.styles,
              transform: `translate3d(${Ie(e,-1)}px, 0, 0) scale(${Ge()})`
            } : e.itemNumber > ue ? e.styles = {
              ...e.styles,
              transform: `translate3d(${Ie(e,1)}px, 0, 0) scale(1)`
            } : e.styles = {
              left: 0,
              top: 0,
              transform: `translate3d(${Pe()}px, 0, 0) scale(1)`
            }, e)))), !1 === Se && Te(!0))
          }), [Me]), (0, m.useEffect)((() => {
            !1 !== $e && !0 !== Se && (Te(!1), setTimeout((() => {
              B(p.map((e => {
                if (e.upNext = He(e.itemNumber), e.itemNumber !== ue) {
                  let t = Ie(e, 1);
                  e.itemNumber < ue && (t = Ie(e, -1)), e.styles = {
                    ...e.styles,
                    transform: `translate3d(${t}px, ${ze(e)}px, 0) scale(${Ge()})`
                  }
                }
                return e
              })))
            }), 1e3))
          }), [$e]), (0, m.useEffect)((() => (document.addEventListener("keydown", Ue), () => {
            document.removeEventListener("keydown", Ue)
          })), [ae, ue]), (0, m.useEffect)((() => (window.addEventListener("resize", (() => {
            qe(window.innerWidth)
          })), qe(window.innerWidth), () => {
            window.removeEventListener("resize", (() => {
              qe(window.innerWidth)
            }))
          })), [V, o, n]), (0, m.useEffect)((() => {
            0 === se && qe(window.innerWidth)
          }), [d]), (0, m.useEffect)((() => {
            B(Xe(r))
          }), [_, V]), (0, m.useEffect)((() => {
            document.body.style.overflowY = !0 === ae ? "hidden" : "auto"
          }), [ae]), (0, m.useEffect)((() => {
            ce(0), de(0), ie(!1)
          }), [Se]);
          const Je = (0, f.useTinaComponents)(),
            Ke = (0, m.useMemo)((() => ({
              ...Je,
              CardWithImageGallery: g.Z,
              HTMLElement: u.HTMLElement,
              ImageWithBadge: u.ImageWithBadge,
              Carousel: u.Carousel,
              GroupOfItems: b()
            })), [Je]);
          return !p?.length || p.length <= 0 ? null : (0, E.jsxs)(E.Fragment, {
            children: [(0, E.jsx)("div", {
              className: "cea2cd0b7399fcd5a0ce",
              "data-modal-mode": ae,
              "aria-hidden": "true"
            }), (0, E.jsxs)("div", {
              className: "dd9c11d21c9d76e0f525",
              "data-modal-mode": ae,
              ref: l,
              children: [(0, E.jsxs)("div", {
                className: "fe4a9770ab07662ba456",
                "data-modal-mode": ae,
                ref: o,
                children: [(0, E.jsx)("h2", {
                  className: "bdad5a5a38f931159788",
                  children: t
                }), (0, E.jsx)(W, {
                  prevPage: Fe,
                  prevBtnDisabled: G,
                  nextPage: Ae,
                  nextBtnDisabled: P,
                  selectedItemNumber: ue,
                  itemsData: r,
                  closeModalMode: Ye
                }), (0, E.jsxs)("div", {
                  className: x,
                  children: [(0, E.jsx)("button", {
                    className: h,
                    type: "button",
                    onClick: Fe,
                    disabled: G,
                    "aria-label": "Previous"
                  }), (0, E.jsxs)("span", {
                    className: N,
                    children: [ue + 1, (0, E.jsx)("span", {
                      className: y
                    }), r.length]
                  }), (0, E.jsx)("button", {
                    className: h,
                    type: "button",
                    onClick: Ae,
                    disabled: P,
                    "aria-label": "Next"
                  })]
                }), (0, E.jsx)("button", {
                  className: v,
                  type: "button",
                  onClick: Ye,
                  "aria-label": "Close"
                })]
              }), (0, E.jsx)("div", {
                className: "fe13159c37ea559619ab",
                "data-modal-mode": ae,
                style: {
                  transform: `translate3d(${me}px, 0, 0)`,
                  width: `${Ee}px`
                },
                ref: n,
                children: p.map((e => (0, m.createElement)(w, {
                  ...e,
                  viewHeight: be,
                  refDeck: l,
                  key: e.text,
                  components: Ke
                })))
              })]
            })]
          })
        };
      var G = a(4912)
    }
  }
]);