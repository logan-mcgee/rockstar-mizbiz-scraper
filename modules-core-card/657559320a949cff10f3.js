(self.webpackChunk_rockstargames_modules_core_card = self.webpackChunk_rockstargames_modules_core_card || []).push([
  [367, 965], {
    8440: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        Card: () => V.Card,
        CardExpanded: () => i.Z,
        CardHeader: () => n.Z,
        CardWithImageGallery: () => V.CardWithImageGallery,
        CardWrapper: () => s.Z,
        Deck: () => V.Deck,
        EventsDeck: () => P,
        LayeredImageFrame: () => l.Z,
        LinkoutWrapper: () => r.Z,
        TextCard: () => V.TextCard,
        TextOverlay: () => o.Z,
        ThumbsGalleryOrThumb: () => d.Z
      });
      var i = a(9525),
        n = a(547),
        s = a(8819),
        l = a(507),
        r = a(4950),
        o = a(9838),
        d = a(7366),
        c = a(822),
        m = a(6803),
        u = a(8976),
        p = a(420),
        f = a.n(p),
        b = a(9542),
        g = a(1204),
        v = a(7311),
        x = a.n(v),
        h = a(4859),
        y = a(5938);
      const N = "ed17b4a4a4d4870ae56d",
        k = "ab39eebc03685c4f986a",
        S = "f213084594141dceb0c4",
        E = "d3e4d3e5ce9f0f2ef473",
        w = "a940c0c9ba98d3a88a19";
      var L = a(3322);
      const j = e => {
          console.log("props", e);
          const {
            active: t,
            styles: a,
            text: i,
            title: n,
            body: s,
            image: l,
            itemNumber: r,
            inModalMode: o,
            openModalMode: d,
            element: m,
            upNext: u,
            mobileMode: p,
            viewHeight: f,
            refDeck: b
          } = e, g = (0, c.createRef)(), v = (0, c.createRef)(), x = (0, c.createRef)(), h = (0, c.createRef)(), [y, N] = (0, c.useState)(!1), [k, S] = (0, c.useState)(0), [E, w] = (0, c.useState)({}), [j, M] = (0, c.useState)(0), [T, $] = (0, c.useState)(0), [C, D] = (0, c.useState)({}), [R, F] = (0, c.useState)(0), W = "2X CASH", B = (e, t) => {
            let a = getComputedStyle(e).getPropertyValue(t);
            return a = a.replace("px", "").replace("rem", "").replace("em", ""), a = a.replace("vh", "").replace("vw", "").replace("vmin", "").replace("vmax", ""), Number(a)
          }, G = (e, t) => {
            const a = e?.documentElement ? B(e?.documentElement, "--root-font-size") : 0,
              i = a * (b?.current ? B(b?.current, "--eventDeck-modalGuttersMobile") : 0);
            $((t?.innerWidth || 0) - 2 * i), F(b?.current ? B(b?.current, "--eventDeck-itemSize") * a : 0)
          };
          return (0, c.useEffect)((() => {
            if (!0 === y && !1 === p) S(0);
            else if (v.current) {
              const e = B(v?.current, "marginBottom"),
                t = v?.current?.clientHeight;
              S(t + e)
            }
          }), [y, v, p, o]), (0, c.useEffect)((() => {
            N(!1)
          }), [t]), (0, c.useEffect)((() => {
            w({
              ...E,
              ...a
            })
          }), [a]), (0, c.useEffect)((() => {
            M(f)
          }), [f, p]), (0, c.useEffect)((() => (window.addEventListener("resize", (() => {
            G(document, window)
          })), G(document, window), () => {
            window.removeEventListener("resize", (() => {
              G(document, window)
            }))
          })), [b]), (0, c.useEffect)((() => {
            if (!1 === p) return void D({
              height: null,
              width: null
            });
            const e = !1 === o ? R : T;
            D({
              height: `${e}px`,
              width: `${e}px`
            })
          }), [o, p]), (0, L.jsxs)("div", {
            className: "fde59cc0b211a74fd79f",
            ref: m,
            "data-item-position": r,
            "data-modal-mode": o,
            "data-active-item": t,
            "data-up-next": u,
            style: {
              ...E,
              ...a,
              height: a?.height || E?.height || null
            },
            role: "button",
            onClick: e => {
              !1 === o && d(e)
            },
            onMouseEnter: () => {
              !1 === o && N(!0)
            },
            onMouseLeave: () => {
              !1 === o && N(!1)
            },
            children: [(0, L.jsxs)("figure", {
              className: "fa238bf7612b7724abaa",
              "data-full-header": y,
              ref: x,
              style: C,
              children: [(0, L.jsx)("img", {
                className: "f4e66768fabf9ba7abd5",
                src: l,
                alt: i
              }), (0, L.jsxs)("div", {
                className: "d21f276146dec1dcf842",
                style: {
                  transform: p ? null : `translateY(${k}px)`
                },
                children: [(0, L.jsx)("div", {
                  className: "d9c130714618614ef63c",
                  ref: g,
                  children: W
                }), (0, L.jsx)("span", {
                  className: "e056f0aa82c811cbadda",
                  ref: v,
                  children: n
                })]
              })]
            }), (0, L.jsxs)("div", {
              className: "f4efaa263cba6ec12f58",
              ref: h,
              style: {
                width: !0 === o && !0 === t && !1 === p ? `calc(100% - ${j}px)` : null,
                top: !0 === o && !0 === p ? `${T}px` : null
              },
              children: [(0, L.jsx)("span", {
                className: "d4743b00b93d13770f9b",
                children: W
              }), (0, L.jsx)("span", {
                className: "d784a6def5f96306e977",
                children: n
              }), (0, L.jsx)("p", {
                className: "b98f5b22300490f3feb8",
                children: s
              })]
            })]
          })
        },
        M = a.p + "img/2eb72eb74a1f12876300.jpg",
        T = a.p + "img/9911748d41c8d682b460.jpg",
        $ = a.p + "img/5b6e81f349b69d5a7c29.jpg",
        C = a.p + "img/e6b010563092abdde973.jpg",
        D = a.p + "img/1725051c465940e339e8.jpg",
        R = a.p + "img/cce45d96c091e898235f.jpg",
        F = a.p + "img/831c8e5a4d8cb9429c96.jpg",
        W = a.p + "img/3f01a1cb35c3a8b47422.jpg",
        B = a.p + "img/9a4c5bdc18539688d87c.jpg",
        G = a.p + "img/fae4cfecac99d4629602.jpg",
        I = e => {
          let {
            prevPage: t,
            prevBtnDisabled: a,
            nextPage: i,
            nextBtnDisabled: n,
            selectedItemNumber: s,
            itemsData: l,
            closeModalMode: r
          } = e;
          return (0, L.jsxs)(L.Fragment, {
            children: [(0, L.jsxs)("div", {
              className: N,
              children: [(0, L.jsx)("button", {
                className: k,
                type: "button",
                onClick: t,
                disabled: a,
                "aria-label": "Previous"
              }), (0, L.jsxs)("span", {
                className: S,
                children: [s + 1, (0, L.jsx)("span", {
                  className: E
                }), l.length]
              }), (0, L.jsx)("button", {
                className: k,
                type: "button",
                onClick: i,
                disabled: n,
                "aria-label": "Next"
              })]
            }), (0, L.jsx)("button", {
              className: w,
              type: "button",
              onClick: r,
              "aria-label": "Close"
            })]
          })
        },
        P = e => {
          let {
            title: t = "New This Week"
          } = e;
          const [a] = (0, m.useSearchParams)(), i = a.get("items"), n = [{
            text: 0,
            title: "Example Title",
            image: M,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
          }, {
            text: 1,
            title: "GTA+ Members Can Claim the 50-Vehicle Eclipse Blvd Garage and the Emperor Vectre",
            image: T,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
          }, {
            text: 2,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: $,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
          }, {
            text: 3,
            title: "Example Title Really Long",
            image: C,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
          }, {
            text: 4,
            title: "Example Title Really Long",
            image: D,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
          }, {
            text: 5,
            title: "Example Title Really Long",
            image: R,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
          }, {
            text: 6,
            title: "Example Title Really Long",
            image: F,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
          }, {
            text: 7,
            title: "Example Title Really Long",
            image: W,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
          }, {
            text: 8,
            title: "Example Title Really Long",
            image: B,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
          }, {
            text: 9,
            title: "Example Title Really Long",
            image: G,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
          }, {
            text: 10,
            title: "Example Title Really Long",
            image: M,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
          }, {
            text: 11,
            title: "Example Title Really Long",
            image: F,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
          }, {
            text: 12,
            title: "Example Title Really Long",
            image: W,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
          }, {
            text: 13,
            title: "Example Title Really Long",
            image: B,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
          }, {
            text: 14,
            title: "Example Title Really Long",
            image: G,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."
          }];
          let s = n;
          if (null !== i) {
            const e = Number(i);
            if (n.length > e) s = s.slice(0, e);
            else if (n.length < e) {
              let t = e - n.length;
              t > 15 && (t = 15);
              let a = 0;
              for (; a < t; a += 1) s.push(n[a])
            }
          }
          const l = (() => {
            const {
              data: e
            } = (0, h.useQuery)(y.TinaModulesList, {
              variables: {
                type: "gtao-event-card",
                locale: "en_us"
              }
            }), t = e?.tinaModulesList?.results, a = x().map(t, "id");
            return (0, u.useTinaModuleFetchByIds)({
              ids: a
            })
          })();
          console.log("tinaModulesInfo", l);
          const r = (0, c.createRef)(),
            o = (0, c.createRef)(),
            d = (0, c.createRef)(),
            p = s.map((() => (0, c.createRef)())),
            [v, P] = (0, c.useState)([]),
            [V, _] = (0, c.useState)(!0),
            [z, H] = (0, c.useState)(!1),
            [Z, A] = (0, c.useState)(404),
            [O, q] = (0, c.useState)(0),
            [Q, Y] = (0, c.useState)(0),
            [U, X] = (0, c.useState)(0),
            [J, K] = (0, c.useState)(0),
            [ee, te] = (0, c.useState)(0),
            [ae, ie] = (0, c.useState)(0),
            [ne, se] = (0, c.useState)(0),
            [le, re] = (0, c.useState)(!1),
            [oe, de] = (0, c.useState)(0),
            [ce, me] = (0, c.useState)(0),
            [ue, pe] = (0, c.useState)(0),
            [fe, be] = (0, c.useState)(0),
            [ge, ve] = (0, c.useState)(0),
            [xe, he] = (0, c.useState)(0),
            [ye, Ne] = (0, c.useState)(0),
            [ke, Se] = (0, c.useState)(0),
            [Ee, we] = (0, c.useState)(50),
            [Le, je] = (0, c.useState)(0),
            [Me, Te] = (0, c.useState)(!1),
            [$e, Ce] = (0, c.useState)(768),
            [De, Re] = (0, c.useState)(!1),
            [Fe, We] = (0, c.useState)(!1),
            [Be, Ge] = (0, c.useState)(1.2),
            Ie = (e, t) => {
              let a = getComputedStyle(e).getPropertyValue(t);
              return a = a.replace("px", "").replace("rem", "").replace("em", ""), a = a.replace("vh", "").replace("vw", "").replace("vmin", "").replace("vmax", ""), a = a.replace("ms", "").replace("s", ""), Number(a)
            },
            Pe = () => !1 === Me ? Be : 1,
            Ve = e => e === ge - 1 || e === ge + 1,
            _e = () => -1 * fe,
            ze = e => {
              if (!0 === Me) return 0;
              const t = e.itemNumber % 2 == 0,
                a = Z * Be;
              return !0 === t && 0 !== e.itemNumber ? -1 * (.5 * a + (Ie(e?.element?.current, "top", window) - ee)) : ee - .5 * a
            },
            He = function(e, t) {
              let a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                i = _e();
              !1 === a && (i = 0);
              const n = oe * ce,
                s = !1 === Me ? Z * Pe() : n;
              return -1 === t ? -1 * e.styles.left - s - Ee + i : n - e.styles.left + Ee + i
            },
            Ze = (e, t, a) => {
              H(!1 === a && e >= t || !0 === a && e + 1 === t), _(e <= 0)
            },
            Ae = () => {
              ge + 1 >= s.length || (Ze(ge + 1, s.length, !0), P(v.map((e => (e.itemNumber === ge - 1 ? e.upNext = !1 : e.itemNumber === ge + 2 ? e.upNext = !0 : e.itemNumber === ge + 1 ? (e.active = !0, e.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${_e()}px, 0, 0) scale(1)`
              }) : e.itemNumber === ge && (e.upNext = !0, e.active = !1, e.styles = {
                ...e.styles,
                transform: `translate3d(${He(e,-1)}px, ${ze(e)}px, 0) scale(${Pe()})`
              }), e)))), ve(ge + 1))
            },
            Oe = () => {
              if (!0 === le) return void Ae();
              const e = ue + 1,
                t = -1 * (ke + Le - (oe - ke));
              if (e > ne) return;
              Ze(e, ne, !1);
              let a = fe - J;
              pe(e), a < t && (a = t), be(a)
            },
            qe = () => {
              ge - 1 < 0 || (Ze(ge - 1, s.length, !0), P(v.map((e => (e.itemNumber === ge + 1 ? e.upNext = !1 : e.itemNumber === ge - 2 ? e.upNext = !0 : e.itemNumber === ge ? (e.upNext = !0, e.active = !1, e.styles = {
                ...e.styles,
                transform: `translate3d(${He(e,1)}px, ${ze(e)}px, 0) scale(${Pe()})`
              }) : e.itemNumber === ge - 1 && (e.active = !0, e.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${_e()}px, 0, 0) scale(1)`
              }), e)))), ve(ge - 1))
            },
            Qe = () => {
              if (!0 === le) return void qe();
              const e = ue - 1;
              if (e < 0) return;
              Ze(e, ne, !1);
              let t = fe + J;
              pe(e), t > 0 && (t = 0), be(t)
            },
            Ye = e => {
              ve(Number(e.target.dataset.itemPosition)), Re(!0)
            },
            Ue = () => {
              P(Je(s)), re(!1), ve(0), Ze(ue, ne, !1)
            },
            Xe = e => {
              if (!1 === le) return;
              const {
                key: t
              } = e;
              "ArrowLeft" === t ? qe() : "ArrowRight" === t && Ae()
            },
            Je = e => e.map(((e, t) => {
              let a = t * Q,
                i = t;
              return !1 === Me && (i = Math.ceil(.5 * t) + 1, t > 0 && (a = 2 === i ? O : O + Q * (i - 2))), {
                ...e,
                mobileMode: Me,
                itemNumber: t,
                columnNumber: i,
                inModalMode: !1,
                upNext: !0,
                active: !1,
                openModalMode: Ye,
                element: p[t],
                styles: {
                  left: a,
                  transform: null,
                  height: null,
                  top: null
                }
              }
            })),
            Ke = e => {
              const t = (1 - ce) / 2;
              de(e), Te(e < $e), Se(e * t);
              const a = e * ce,
                i = !1 === Me ? Math.round(a / Q) : 1;
              X(i), K(i * Q), ie(e - e * t)
            };
          (0, c.useEffect)((() => {
            let e = 0,
              t = 0;
            o.current && (e = o?.current?.clientHeight, e += Ie(o?.current, "margin-top"), e += Ie(o?.current, "margin-bottom"), Ne(e)), d.current && (t = d?.current?.clientHeight, t += Ie(d?.current, "margin-top"), t += Ie(d?.current, "margin-bottom"), he(t))
          }), [o, d]), (0, c.useEffect)((() => {
            if (r.current) {
              const e = Ie(document.documentElement, "--root-font-size"),
                t = Ie(r.current, "--eventDeck-modalGutters"),
                a = oe - t * e * 2;
              me(a / oe);
              let i = Ie(r.current, "--eventDeck-modalBottomGutter");
              i *= e;
              const n = window.innerHeight - (ye + i);
              te(.5 * a < n ? a / 4 : .5 * n);
              const l = Ie(r.current, "--eventDeck-mobileBreakpoint");
              Ce(l);
              let o = Ie(r.current, "--eventDeck-itemSize");
              o *= e, A(o);
              let d = Ie(r.current, "--eventDeck-gutterSize");
              d *= e, we(d);
              let c = Ie(r.current, "--eventDeck-insideMargin");
              c *= e;
              const m = !1 === Me ? 2 * o + c : o + c;
              q(m + c);
              const u = o + c;
              Y(u);
              const p = .5 * (s.length - 1) * u + m;
              je(p), se(Math.ceil(Math.ceil(p / u) / U)), Ge(Ie(r.current, "--eventDeck-itemScaleUpAmount"))
            }
          }), [r, s]), (0, c.useEffect)((() => {
            !1 !== le && !0 !== Me && P(v.map((e => (e.itemNumber > ge ? e.styles = {
              ...e.styles,
              transform: `translate3d(${He(e,1)}px, ${ze(e)}px, 0) scale(${Pe()})`
            } : e.itemNumber < ge && (e.styles = {
              ...e.styles,
              transform: `translate3d(${He(e,-1)}px, ${ze(e)}px, 0) scale(${Pe()})`
            }), e))))
          }), [ae, J, Ee, Z, oe, ke, ee]), (0, c.useEffect)((() => {
            !1 !== De && !0 !== le && (re(!0), Re(!1), Ze(ge, s.length, !0), P(v.map(((e, t) => (e.active = t === ge, e.inModalMode = !0, !0 === Me && (e.upNext = Ve(e.itemNumber)), e.itemNumber < ge ? e.styles = {
              ...e.styles,
              transform: `translate3d(${He(e,-1)}px, 0, 0) scale(${Pe()})`
            } : e.itemNumber > ge ? e.styles = {
              ...e.styles,
              transform: `translate3d(${He(e,1)}px, 0, 0) scale(1)`
            } : e.styles = {
              left: 0,
              top: 0,
              transform: `translate3d(${_e()}px, 0, 0) scale(1)`
            }, e)))), !1 === Me && We(!0))
          }), [De]), (0, c.useEffect)((() => {
            !1 !== Fe && !0 !== Me && (We(!1), setTimeout((() => {
              P(v.map((e => {
                if (e.upNext = Ve(e.itemNumber), e.itemNumber !== ge) {
                  let t = He(e, 1);
                  e.itemNumber < ge && (t = He(e, -1)), e.styles = {
                    ...e.styles,
                    transform: `translate3d(${t}px, ${ze(e)}px, 0) scale(${Pe()})`
                  }
                }
                return e
              })))
            }), 1e3))
          }), [Fe]), (0, c.useEffect)((() => (document.addEventListener("keydown", Xe), () => {
            document.removeEventListener("keydown", Xe)
          })), [le, ge]), (0, c.useEffect)((() => (window.addEventListener("resize", (() => {
            Ke(window.innerWidth)
          })), Ke(window.innerWidth), () => {
            window.removeEventListener("resize", (() => {
              Ke(window.innerWidth)
            }))
          })), [Q, o, d]), (0, c.useEffect)((() => {
            0 === oe && Ke(window.innerWidth)
          }), [p]), (0, c.useEffect)((() => {
            P(Je(s))
          }), [O, Q]), (0, c.useEffect)((() => {
            document.body.style.overflowY = !0 === le ? "hidden" : "auto"
          }), [le]), (0, c.useEffect)((() => {
            be(0), pe(0), re(!1)
          }), [Me]);
          const et = (0, b.useTinaComponents)(),
            tt = (0, c.useMemo)((() => ({
              ...et,
              CardWithImageGallery: g.Z,
              HTMLElement: u.HTMLElement,
              ImageWithBadge: u.ImageWithBadge,
              Carousel: u.Carousel,
              GroupOfItems: f()
            })), [et]);
          return !v?.length || v.length <= 0 ? null : (0, L.jsxs)(L.Fragment, {
            children: [(0, L.jsx)("div", {
              className: "cea2cd0b7399fcd5a0ce",
              "data-modal-mode": le,
              "aria-hidden": "true"
            }), (0, L.jsxs)("div", {
              className: "dd9c11d21c9d76e0f525",
              "data-modal-mode": le,
              ref: r,
              children: [(0, L.jsxs)("div", {
                className: "fe4a9770ab07662ba456",
                "data-modal-mode": le,
                ref: o,
                children: [(0, L.jsx)("h2", {
                  className: "bdad5a5a38f931159788",
                  children: t
                }), (0, L.jsx)(I, {
                  prevPage: Qe,
                  prevBtnDisabled: V,
                  nextPage: Oe,
                  nextBtnDisabled: z,
                  selectedItemNumber: ge,
                  itemsData: s,
                  closeModalMode: Ue
                }), (0, L.jsxs)("div", {
                  className: N,
                  children: [(0, L.jsx)("button", {
                    className: k,
                    type: "button",
                    onClick: Qe,
                    disabled: V,
                    "aria-label": "Previous"
                  }), (0, L.jsxs)("span", {
                    className: S,
                    children: [ge + 1, (0, L.jsx)("span", {
                      className: E
                    }), s.length]
                  }), (0, L.jsx)("button", {
                    className: k,
                    type: "button",
                    onClick: Oe,
                    disabled: z,
                    "aria-label": "Next"
                  })]
                }), (0, L.jsx)("button", {
                  className: w,
                  type: "button",
                  onClick: Ue,
                  "aria-label": "Close"
                })]
              }), (0, L.jsx)("div", {
                className: "fe13159c37ea559619ab",
                "data-modal-mode": le,
                style: {
                  transform: `translate3d(${fe}px, 0, 0)`,
                  width: `${Le}px`
                },
                ref: d,
                children: v.map((e => (0, c.createElement)(j, {
                  ...e,
                  viewHeight: xe,
                  refDeck: r,
                  key: e.text,
                  components: tt
                })))
              })]
            })]
          })
        };
      var V = a(4912)
    },
    5938: e => {
      var t = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TinaModulesList"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "type"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "locale"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "tinaModulesList"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "type"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "results"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      alias: {
                        kind: "Name",
                        value: "id"
                      },
                      name: {
                        kind: "Name",
                        value: "id_hash"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "name"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "type"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "tina"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "id"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "payload"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 279
        }
      };

      function a(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && t.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, t)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, t)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, t)
        }))
      }
      t.loc.source = {
        body: "query TinaModulesList($type: String, $locale: String!) {\n    tinaModulesList(type: $type, locale: $locale) {\n        results {\n            id: id_hash\n            name\n            type\n            tina {\n                id\n                payload\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var i = {};

      function n(e, t) {
        for (var a = 0; a < e.definitions.length; a++) {
          var i = e.definitions[a];
          if (i.name && i.name.value == t) return i
        }
      }
      t.definitions.forEach((function(e) {
        if (e.name) {
          var t = new Set;
          a(e, t), i[e.name.value] = t
        }
      })), e.exports = t, e.exports.TinaModulesList = function(e, t) {
        var a = {
          kind: e.kind,
          definitions: [n(e, t)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var s = i[t] || new Set,
          l = new Set,
          r = new Set;
        for (s.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var o = r;
          r = new Set, o.forEach((function(e) {
            l.has(e) || (l.add(e), (i[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return l.forEach((function(t) {
          var i = n(e, t);
          i && a.definitions.push(i)
        })), a
      }(t, "TinaModulesList")
    }
  }
]);