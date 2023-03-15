(self.webpackChunk_rockstargames_modules_core_card = self.webpackChunk_rockstargames_modules_core_card || []).push([
  [238, 965], {
    3080: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        Card: () => W.Card,
        CardExpanded: () => n.Z,
        CardHeader: () => s.Z,
        CardWithImageGallery: () => W.CardWithImageGallery,
        CardWrapper: () => i.Z,
        Deck: () => W.Deck,
        EventsDeck: () => P,
        LayeredImageFrame: () => r.Z,
        LinkoutWrapper: () => l.Z,
        TextCard: () => W.TextCard,
        TextOverlay: () => o.Z,
        ThumbsGalleryOrThumb: () => d.Z
      });
      var n = a(9525),
        s = a(547),
        i = a(8819),
        r = a(507),
        l = a(4950),
        o = a(9838),
        d = a(7366),
        c = a(822),
        u = a(8976),
        m = a(420),
        f = a.n(m),
        p = a(9542),
        v = a(3923),
        h = a(1204),
        b = a(7311),
        N = a.n(b),
        g = a(4859),
        x = a(5938);
      var k = a(9929);
      const y = "ed17b4a4a4d4870ae56d",
        S = "ab39eebc03685c4f986a",
        w = "f213084594141dceb0c4",
        M = "d3e4d3e5ce9f0f2ef473",
        E = "a940c0c9ba98d3a88a19";
      var j = a(3322);
      const {
        transitions: T,
        variants: $
      } = u.framer.Animations, D = e => {
        let {
          images: t = [],
          title: a = null,
          payload: n = {},
          inModalMode: s = !1
        } = e;
        const [i, r] = (0, c.useState)([]), {
          parent: l,
          main: o,
          thumbs: u
        } = $?.cardWithImageGallery?.gallery ?? {}, m = (0, p.useTinaPayload)(), f = n ?? m, v = f?.meta?.cdn ?? f?.meta?.prod ?? !1;
        if ((0, c.useEffect)((() => {
            const e = t?.map((e => e?.image ? {
              ...e,
              image: {
                ...e.image,
                prod: v
              }
            } : e));
            r(e)
          }), [t]), !i?.length) return null;
        const h = s ? {
          variants: {
            parent: l,
            main: o,
            thumbs: u
          },
          transition: {
            parent: T.cardOpen,
            main: T.cardOpen,
            thumbs: T.cardOpen
          }
        } : null;
        return (0, j.jsx)(d.Z, {
          className: "f4e66768fabf9ba7abd5",
          images: i,
          title: a,
          navigation: !1,
          thumbsVisible: !1,
          ...h
        })
      }, C = (0, k.withTranslations)((e => {
        let {
          active: t,
          styles: a,
          title: n,
          itemNumber: s,
          inModalMode: i,
          openModalMode: r,
          element: l,
          upNext: o,
          mobileMode: d,
          viewHeight: m,
          refDeck: f,
          components: v,
          tina: h,
          prevPage: b,
          nextPage: N,
          loadCssRawValue: g
        } = e;
        const x = (0, c.createRef)(),
          k = (0, c.createRef)(),
          y = (0, c.createRef)(),
          S = (0, c.createRef)(),
          [w, M] = (0, c.useState)(!1),
          [E, T] = (0, c.useState)(0),
          [$, C] = (0, c.useState)({}),
          [L, P] = (0, c.useState)(0),
          [W, F] = (0, c.useState)(0),
          [I, _] = (0, c.useState)({}),
          [B, R] = (0, c.useState)(0),
          [V, z] = (0, c.useState)(!1),
          [G, Z] = (0, c.useState)(0),
          H = h?.payload ?? {},
          O = H?.meta ?? {},
          A = H?.content?.[0],
          X = (0, c.useMemo)((() => A?.images?.[0]?.image?.badge), [A]),
          q = (0, c.useMemo)((() => n ?? O?.title), [n, O?.title]);
        console.log("card content", A);
        const Q = (e, t) => {
          const a = e?.documentElement ? g(e?.documentElement, "--root-font-size") : 0,
            n = a * (f?.current ? g(f?.current, "--eventDeck-modalGuttersMobile") : 0);
          F((t?.innerWidth || 0) - 2 * n), R(f?.current ? g(f?.current, "--eventDeck-itemSize") * a : 0)
        };
        (0, c.useEffect)((() => {
          if (!0 === w && !1 === d) T(0);
          else if (k.current) {
            const e = g(k?.current, "marginBottom"),
              t = k?.current?.clientHeight;
            T(t + e)
          }
        }), [w, k, d, i]), (0, c.useEffect)((() => {
          M(!1)
        }), [t]), (0, c.useEffect)((() => {
          C({
            ...$,
            ...a
          })
        }), [a]), (0, c.useEffect)((() => {
          P(m)
        }), [m, d]), (0, c.useEffect)((() => (window.addEventListener("resize", (() => {
          Q(document, window)
        })), Q(document, window), () => {
          window.removeEventListener("resize", (() => {
            Q(document, window)
          }))
        })), [f]), (0, c.useEffect)((() => {
          if (!1 === d) return void _({
            height: null,
            width: null
          });
          const e = !1 === i ? B : W;
          _({
            height: `${e}px`,
            width: `${e}px`
          })
        }), [i, d]);
        const U = e => {
            if (!0 === V) return;
            const t = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
            Z(t)
          },
          Y = e => {
            if (!0 === V || 0 === G) return;
            const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
              a = t > G ? 1 : -1;
            Math.abs(G - t) > 50 && (a > 0 ? (b(), z(!0)) : (N(), z(!0)), Z(0))
          },
          J = e => {
            if (!0 === V) return;
            z(!0);
            const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
            Math.abs(G - t) < 10 && r(e)
          };
        return (0, c.useEffect)((() => {
          !1 !== V && setTimeout((() => {
            z(!1), Z(0)
          }), 350)
        }), [V, 350]), A ? (0, j.jsxs)("div", {
          className: "fde59cc0b211a74fd79f",
          ref: l,
          "data-item-position": s,
          "data-modal-mode": i,
          "data-active-item": t,
          "data-up-next": o,
          style: {
            ...$,
            ...a,
            height: a?.height || $?.height || null
          },
          onClick: e => {
            i || V || r(e)
          },
          onMouseEnter: () => {
            i || M(!0)
          },
          onMouseLeave: () => {
            i || M(!1)
          },
          onTouchStart: U,
          onTouchMove: Y,
          onTouchEnd: J,
          onMouseDown: U,
          onMouseMove: Y,
          onMouseUp: J,
          tabIndex: -1,
          role: "presentation",
          children: [(0, j.jsxs)("figure", {
            className: "fa238bf7612b7724abaa",
            "data-full-header": w,
            ref: y,
            style: I,
            children: [(0, j.jsx)(D, {
              images: A?.images,
              title: n,
              payload: H,
              inModalMode: i
            }), (0, j.jsxs)("div", {
              className: "d21f276146dec1dcf842",
              style: {
                transform: d ? null : `translateY(${E}px)`
              },
              children: [X && (0, j.jsx)("div", {
                className: "d9c130714618614ef63c",
                ref: x,
                children: (0, j.jsx)(u.Badge, {
                  text: X
                })
              }), (0, j.jsx)("span", {
                className: "e056f0aa82c811cbadda",
                ref: k,
                "aria-hidden": i,
                children: q
              })]
            })]
          }), (0, j.jsxs)("div", {
            className: "f4efaa263cba6ec12f58",
            ref: S,
            style: {
              width: !0 === i && !0 === t && !1 === d ? `calc(100% - ${L}px)` : null,
              top: !0 === i && !0 === d ? `${W}px` : null
            },
            children: [q && (0, j.jsx)("span", {
              className: "d784a6def5f96306e977",
              children: q
            }), (0, j.jsx)("div", {
              className: "b98f5b22300490f3feb8",
              children: (0, j.jsx)(p.TinaParser, {
                components: v,
                tina: {
                  meta: O,
                  payload: {
                    content: A?.content
                  }
                }
              })
            })]
          })]
        }) : null
      })), L = e => {
        let {
          prevPage: t,
          prevBtnDisabled: a,
          nextPage: n,
          nextBtnDisabled: s,
          selectedItemNumber: i,
          itemsData: r,
          closeModalMode: l
        } = e;
        return (0, j.jsxs)(j.Fragment, {
          children: [(0, j.jsxs)("div", {
            className: y,
            children: [(0, j.jsx)("button", {
              className: S,
              type: "button",
              onClick: t,
              disabled: a,
              "aria-label": "Previous"
            }), (0, j.jsxs)("span", {
              className: w,
              children: [i + 1, (0, j.jsx)("span", {
                className: M
              }), r.length]
            }), (0, j.jsx)("button", {
              className: S,
              type: "button",
              onClick: n,
              disabled: s,
              "aria-label": "Next"
            })]
          }), (0, j.jsx)("button", {
            className: E,
            type: "button",
            onClick: l,
            "aria-label": "Close"
          }), (0, j.jsxs)("div", {
            className: y,
            children: [(0, j.jsx)("button", {
              className: S,
              type: "button",
              onClick: t,
              disabled: a,
              "aria-label": "Previous"
            }), (0, j.jsxs)("span", {
              className: w,
              children: [i + 1, (0, j.jsx)("span", {
                className: M
              }), r.length]
            }), (0, j.jsx)("button", {
              className: S,
              type: "button",
              onClick: n,
              disabled: s,
              "aria-label": "Next"
            })]
          }), (0, j.jsx)("button", {
            className: E,
            type: "button",
            onClick: l,
            "aria-label": "Close"
          })]
        })
      }, P = e => {
        let {
          title: t = "New This Week"
        } = e;
        const a = (() => {
            const {
              data: e
            } = (0, g.useQuery)(x.TinaModulesList, {
              variables: {
                type: "gtao-event-card",
                locale: "en_us"
              }
            }), t = e?.tinaModulesList?.results, a = N().map(t, "id");
            return (0, u.useTinaModuleFetchByIds)({
              ids: a
            })
          })(),
          [n, s] = (0, c.useState)([]);
        (0, c.useEffect)((() => {
          s(a ?? [])
        }), [a]);
        const i = (0, c.createRef)(),
          r = (0, c.createRef)(),
          l = (0, c.createRef)(),
          [o, d] = (0, c.useState)([]),
          [m, b] = (0, c.useState)(!0),
          [k, y] = (0, c.useState)(!1),
          [S, w] = (0, c.useState)([]);
        (0, c.useEffect)((() => {
          w(n.map((() => (0, c.createRef)())))
        }), [n]);
        const [M, E] = (0, c.useState)(404), [T, $] = (0, c.useState)(0), [D, P] = (0, c.useState)(0), [W, F] = (0, c.useState)(0), [I, _] = (0, c.useState)(0), [B, R] = (0, c.useState)(0), [V, z] = (0, c.useState)(0), [G, Z] = (0, c.useState)(0), [H, O] = (0, c.useState)(!1), [A, X] = (0, c.useState)(0), [q, Q] = (0, c.useState)(0), [U, Y] = (0, c.useState)(0), [J, K] = (0, c.useState)(0), [ee, te] = (0, c.useState)(0), [ae, ne] = (0, c.useState)(0), [se, ie] = (0, c.useState)(0), [re, le] = (0, c.useState)(0), [oe, de] = (0, c.useState)(50), [ce, ue] = (0, c.useState)(0), [me, fe] = (0, c.useState)(!1), [pe, ve] = (0, c.useState)(768), [he, be] = (0, c.useState)(!1), [Ne, ge] = (0, c.useState)(!1), [xe, ke] = (0, c.useState)(1.2), ye = (e, t) => {
          let a = getComputedStyle(e).getPropertyValue(t);
          return a = a.replace("px", "").replace("rem", "").replace("em", ""), a = a.replace("vh", "").replace("vw", "").replace("vmin", "").replace("vmax", ""), a = a.replace("ms", "").replace("s", ""), Number(a)
        }, Se = () => A * q + oe, we = () => !1 === me ? xe : 1, Me = e => e === ee - 1 || e === ee + 1, Ee = () => -1 * J, je = e => {
          if (!0 === me) return 0;
          const t = e.itemNumber % 2 == 0,
            a = M * xe;
          return !0 === t && 0 !== e.itemNumber ? -1 * (.5 * a + (ye(e?.element?.current, "top", window) - B)) : B - .5 * a
        }, Te = function(e, t) {
          let a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            n = Ee();
          !1 === a && (n = 0);
          const s = A * q,
            i = !1 === me ? M * we() : s;
          return e.inModalMode && me ? -1 === t ? Se() * (ee - e.itemNumber) * -1 - e.styles.left : Se() * (e.itemNumber - ee) - e.styles.left : -1 === t ? -1 * e.styles.left - i - oe + n : s - e.styles.left + oe + n
        }, $e = (e, t, a) => {
          y(!1 === a && e >= t || !0 === a && e + 1 === t), b(e <= 0)
        }, De = () => {
          ee + 1 >= n.length || ($e(ee + 1, n.length, !0), me || d(o.map((e => (e.itemNumber === ee - 1 ? e.upNext = !1 : e.itemNumber === ee + 2 ? e.upNext = !0 : e.itemNumber === ee + 1 ? (e.active = !0, e.styles = {
            left: 0,
            top: 0,
            transform: `translate3d(${Ee()}px, 0, 0) scale(1)`
          }) : e.itemNumber === ee && (e.upNext = !0, e.active = !1, e.styles = {
            ...e.styles,
            transform: `translate3d(${Te(e,-1)}px, ${je(e)}px, 0) scale(${we()})`
          }), e)))), me && (d(o.map((e => (e.itemNumber === ee - 1 ? e.upNext = !1 : e.itemNumber === ee + 2 ? e.upNext = !0 : e.itemNumber === ee + 1 ? e.active = !0 : e.itemNumber === ee && (e.upNext = !0, e.active = !1), e)))), K(J - Se())), te(ee + 1))
        }, Ce = () => {
          if (!0 === H) return void De();
          const e = U + 1,
            t = A - re;
          let a = -1 * (re + ce - t);
          if (me && (a = -1 * (D * o.length - t)), e > G) return;
          $e(e, G, !1);
          let n = J - I;
          me && (n = J - D), Y(e), n < a && (n = a), K(n)
        }, Le = () => {
          ee - 1 < 0 || ($e(ee - 1, n.length, !0), me || d(o.map((e => (e.itemNumber === ee + 1 ? e.upNext = !1 : e.itemNumber === ee - 2 ? e.upNext = !0 : e.itemNumber === ee ? (e.upNext = !0, e.active = !1, e.styles = {
            ...e.styles,
            transform: `translate3d(${Te(e,1)}px, ${je(e)}px, 0) scale(${we()})`
          }) : e.itemNumber === ee - 1 && (e.active = !0, e.styles = {
            left: 0,
            top: 0,
            transform: `translate3d(${Ee()}px, 0, 0) scale(1)`
          }), e)))), me && (d(o.map((e => (e.itemNumber === ee + 1 ? e.upNext = !1 : e.itemNumber === ee - 2 ? e.upNext = !0 : e.itemNumber === ee ? (e.upNext = !0, e.active = !1) : e.itemNumber === ee - 1 && (e.active = !0), e)))), K(J + Se())), te(ee - 1))
        }, Pe = () => {
          if (!0 === H) return void Le();
          const e = U - 1;
          if (e < 0) return;
          $e(e, G, !1);
          let t = J + I;
          Y(e), t > 0 && (t = 0), K(t)
        }, We = e => {
          te(Number(e.target.dataset.itemPosition)), me && K(0), be(!0)
        }, Fe = e => {
          if (!1 === H) return;
          const {
            key: t
          } = e;
          "ArrowLeft" === t ? Le() : "ArrowRight" === t && De()
        }, Ie = e => e.map(((e, t) => {
          let a = t * D,
            n = t;
          return !1 === me && (n = Math.ceil(.5 * t) + 1, t > 0 && (a = 2 === n ? T : T + D * (n - 2))), {
            ...e,
            mobileMode: me,
            itemNumber: t,
            columnNumber: n,
            inModalMode: !1,
            upNext: !0,
            active: !1,
            openModalMode: We,
            element: S[t],
            styles: {
              left: a,
              transform: null,
              height: null,
              top: null
            }
          }
        })), _e = e => {
          const t = (1 - q) / 2;
          X(e), fe(e < pe), le(e * t);
          const a = e * q,
            n = Math.round(a / D);
          F(n), _(n * D), z(e - e * t)
        };
        (0, c.useEffect)((() => {
          let e = 0,
            t = 0;
          r.current && (e = r?.current?.clientHeight, e += ye(r?.current, "margin-top"), e += ye(r?.current, "margin-bottom"), ie(e)), l.current && (t = l?.current?.clientHeight, t += ye(l?.current, "margin-top"), t += ye(l?.current, "margin-bottom"), ne(t))
        }), [r, l]), (0, c.useEffect)((() => {
          if (i.current) {
            const e = ye(document.documentElement, "--root-font-size"),
              t = ye(i.current, "--eventDeck-modalGutters"),
              a = A - t * e * 2;
            Q(a / A);
            let s = ye(i.current, "--eventDeck-modalBottomGutter");
            s *= e;
            const r = window.innerHeight - (se + s);
            R(.5 * a < r ? a / 4 : .5 * r);
            const l = ye(i.current, "--eventDeck-mobileBreakpoint");
            ve(l);
            let d = ye(i.current, "--eventDeck-itemSize");
            d *= e, E(d);
            let c = ye(i.current, "--eventDeck-gutterSize");
            c *= e, de(c);
            let u = ye(i.current, "--eventDeck-insideMargin");
            u *= e;
            const m = !1 === me ? 2 * d + u : d + u;
            $(m + u);
            const f = d + u;
            P(f);
            const p = .5 * (n.length - 1) * f + m;
            ue(p);
            let v = Math.ceil(Math.ceil(p / f) / W);
            me && (v = o.length - 1), Z(v);
            const h = ye(i.current, "--eventDeck-itemScaleUpAmount");
            ke(h)
          }
        }), [i, n]), (0, c.useEffect)((() => {
          !1 !== H && !0 !== me && d(o.map((e => (e.itemNumber > ee ? e.styles = {
            ...e.styles,
            transform: `translate3d(${Te(e,1)}px, ${je(e)}px, 0) scale(${we()})`
          } : e.itemNumber < ee && (e.styles = {
            ...e.styles,
            transform: `translate3d(${Te(e,-1)}px, ${je(e)}px, 0) scale(${we()})`
          }), e))))
        }), [V, I, oe, M, A, re, B]), (0, c.useEffect)((() => {
          !1 !== he && !0 !== H && (O(!0), be(!1), $e(ee, o.length, !0), d(o.map(((e, t) => (e.active = t === ee, e.inModalMode = !0, !0 === me && (e.upNext = Me(e.itemNumber)), e.itemNumber < ee ? e.styles = {
            ...e.styles,
            transform: `translate3d(${Te(e,-1)}px, 0, 0) scale(${we()})`
          } : e.itemNumber > ee ? e.styles = {
            ...e.styles,
            transform: `translate3d(${Te(e,1)}px, 0, 0) scale(1)`
          } : e.styles = {
            left: 0,
            top: 0,
            transform: `translate3d(${Ee()}px, 0, 0) scale(1)`
          }, e)))), !1 === me && ge(!0))
        }), [he]), (0, c.useEffect)((() => {
          !1 !== Ne && !0 !== me && (ge(!1), setTimeout((() => {
            d(o.map((e => {
              if (e.upNext = Me(e.itemNumber), e.itemNumber !== ee) {
                let t = Te(e, 1);
                e.itemNumber < ee && (t = Te(e, -1)), e.styles = {
                  ...e.styles,
                  transform: `translate3d(${t}px, ${je(e)}px, 0) scale(${we()})`
                }
              }
              return e
            })))
          }), 1e3))
        }), [Ne]), (0, c.useEffect)((() => (document.addEventListener("keydown", Fe), () => {
          document.removeEventListener("keydown", Fe)
        })), [H, ee]), (0, c.useEffect)((() => (window.addEventListener("resize", (() => {
          _e(window.innerWidth)
        })), _e(window.innerWidth), () => {
          window.removeEventListener("resize", (() => {
            _e(window.innerWidth)
          }))
        })), [D, r, l, q]), (0, c.useEffect)((() => {
          0 === A && _e(window.innerWidth)
        }), [S]), (0, c.useEffect)((() => {
          d(Ie(n))
        }), [T, D, n]), (0, c.useEffect)((() => {
          document.body.style.overflowY = !0 === H ? "hidden" : "auto"
        }), [H]), (0, c.useEffect)((() => {
          K(0), Y(0), O(!1)
        }), [me]);
        const Be = (0, p.useTinaComponents)(),
          Re = (0, c.useMemo)((() => ({
            ...Be,
            CardWithImageGallery: h.Z,
            EventInfo: v.Z,
            HTMLElement: u.HTMLElement,
            ImageWithBadge: u.ImageWithBadge,
            Carousel: u.Carousel,
            GroupOfItems: f()
          })), [Be]),
          Ve = (0, c.useMemo)((() => o.map((e => (0, c.createElement)(C, {
            ...e,
            viewHeight: ae,
            refDeck: i,
            key: e?.id ?? e?.sync_hash,
            components: Re,
            prevPage: Pe,
            nextPage: Ce,
            loadCssRawValue: ye
          })))), [o, ae, i, Re, Pe, Ce, ye]);
        return !Ve?.length || Ve.length <= 0 ? null : (0, j.jsxs)(j.Fragment, {
          children: [(0, j.jsx)("div", {
            className: "cea2cd0b7399fcd5a0ce",
            "data-modal-mode": H,
            "aria-hidden": "true"
          }), (0, j.jsxs)("div", {
            className: "dd9c11d21c9d76e0f525",
            "data-modal-mode": H,
            ref: i,
            children: [(0, j.jsxs)("div", {
              className: "fe4a9770ab07662ba456",
              "data-modal-mode": H,
              ref: r,
              children: [(0, j.jsx)("h2", {
                className: "bdad5a5a38f931159788",
                children: t
              }), (0, j.jsx)(L, {
                prevPage: Pe,
                prevBtnDisabled: m,
                nextPage: Ce,
                nextBtnDisabled: k,
                selectedItemNumber: ee,
                itemsData: n,
                closeModalMode: () => {
                  d(Ie(n)), K(0), O(!1), te(0), $e(U, G, !1)
                }
              })]
            }), (0, j.jsx)("div", {
              className: "fe13159c37ea559619ab",
              "data-modal-mode": H,
              style: {
                transform: `translate3d(${J}px, 0, 0)`,
                width: `${ce}px`
              },
              ref: l,
              children: Ve
            })]
          })]
        })
      };
      var W = a(4585)
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
          var n = e.type;
          "NamedType" === n.kind && t.add(n.name.value)
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
      var n = {};

      function s(e, t) {
        for (var a = 0; a < e.definitions.length; a++) {
          var n = e.definitions[a];
          if (n.name && n.name.value == t) return n
        }
      }
      t.definitions.forEach((function(e) {
        if (e.name) {
          var t = new Set;
          a(e, t), n[e.name.value] = t
        }
      })), e.exports = t, e.exports.TinaModulesList = function(e, t) {
        var a = {
          kind: e.kind,
          definitions: [s(e, t)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var i = n[t] || new Set,
          r = new Set,
          l = new Set;
        for (i.forEach((function(e) {
            l.add(e)
          })); l.size > 0;) {
          var o = l;
          l = new Set, o.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              l.add(e)
            })))
          }))
        }
        return r.forEach((function(t) {
          var n = s(e, t);
          n && a.definitions.push(n)
        })), a
      }(t, "TinaModulesList")
    }
  }
]);