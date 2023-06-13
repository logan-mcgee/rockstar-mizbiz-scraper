(self.webpackChunk_rockstargames_modules_core_card = self.webpackChunk_rockstargames_modules_core_card || []).push([
  [281, 498], {
    4281: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        Card: () => I.Card,
        CardExpanded: () => n.Z,
        CardHeader: () => r.Z,
        CardWithImageGallery: () => I.CardWithImageGallery,
        CardWrapper: () => s.Z,
        CoverCard: () => I.CoverCard,
        Deck: () => I.Deck,
        EventsDeck: () => P,
        LayeredImageFrame: () => i.Z,
        LinkoutWrapper: () => o.Z,
        TextCard: () => I.TextCard,
        TextOverlay: () => c.Z,
        ThumbsGalleryOrThumb: () => l.Z
      });
      var n = a(8385),
        r = a(6634),
        s = a(1248),
        i = a(8637),
        o = a(1559),
        c = a(3201),
        l = a(4468),
        d = a(822),
        u = a(2239),
        m = a.n(u),
        f = a(8976),
        p = a(420),
        v = a.n(p),
        b = a(9542),
        y = a(6711),
        g = a(9929),
        h = a(1950),
        x = a(948),
        S = a.n(x),
        _ = a(4859),
        N = a(5404);
      var k = a(559);
      const T = (e, t) => {
          let a = getComputedStyle(e).getPropertyValue(t);
          return a = a.replace("px", "").replace("rem", "").replace("em", ""), a = a.replace("vh", "").replace("vw", "").replace("vmin", "").replace("vmax", ""), a = a.replace("ms", "").replace("s", ""), Number(a)
        },
        w = e => ({
          x: void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
          y: void 0 !== e.changedTouches ? e.changedTouches[0].screenY : e.screenY
        }),
        $ = e => e.scrollHeight > e.clientHeight;
      var M = a(9706);

      function E(e, t) {
        const a = {
          ...e
        };
        return S().forOwn(e, ((e, n) => {
          if ("image" === n) {
            const e = a[n];
            a[n] = {
              ...e,
              prod: t
            }
          } else S().isObject(e) && !S().isArray(e) ? E(e, t) : S().isArray(e) && (a[n] = e.map((e => S().isObject(e) ? E(e, t) : e)))
        })), a
      }
      const C = (0, g.withTranslations)((e => {
          let {
            active: t,
            styles: a,
            title: n,
            itemNumber: r,
            inModalMode: s,
            openModalMode: i,
            element: o,
            upNext: c,
            mobileMode: l,
            refDeck: u,
            components: p,
            tina: v,
            prevPage: g,
            nextPage: h,
            transitionStyle: x,
            selectedItemNumber: S,
            carouselTitle: _,
            sharedDraggingDelta: N,
            setSharedDraggingDelta: C
          } = e;
          const {
            track: j
          } = (0, y.useGtmTrack)(), D = (0, d.createRef)(), P = (0, d.createRef)(), I = (0, d.createRef)(), L = (0, d.createRef)(), O = (0, d.createRef)(), [B, W] = (0, d.useState)(!1), [z, H] = (0, d.useState)(0), [R, A] = (0, d.useState)(0), [F, G] = (0, d.useState)(0), [Z, V] = (0, d.useState)(0), [U, Y] = (0, d.useState)(0), [q, Q] = (0, d.useState)(!1), [X, J] = (0, d.useState)(0), [K, ee] = (0, d.useState)(0), [te, ae] = (0, d.useState)(0), [ne, re] = (0, d.useState)("700"), [se, ie] = (0, d.useState)(-1), [oe, ce] = (0, d.useState)(0), [le, de] = (0, d.useState)(0), [ue, me] = (0, d.useState)(0), [fe, pe] = (0, d.useState)(!1), [ve, be] = (0, d.useState)(""), [ye, ge] = (0, d.useState)(null), [he, xe] = (0, d.useState)(!1), [Se, _e] = (0, d.useState)(null), [Ne, ke] = (0, d.useState)(!1), [Te, we] = (0, d.useState)(!1), $e = (0, b.useTinaPayload)(), Me = v?.payload?.meta?.cdn ?? !1 ?? $e?.meta?.prod ?? !1, Ee = (0, b.useTranslations)({
            payload: v?.payload,
            variables: v?.variables
          }), Ce = Ee?.meta ?? {}, je = E(Ee?.content?.[0], Me), De = (0, d.useMemo)((() => je?.images?.[0]?.image?.badge), [je]), Pe = (0, d.useMemo)((() => n ?? Ce?.title), [n, Ce?.title]), Ie = (0, k.useImageParser)({
            alt: je?.images?.[0]?.image?.alt ?? "",
            ariaLabel: je?.images?.[0]?.image?.alt ?? "",
            sources: je?.images?.[0]?.image?.sources ?? [],
            prod: Me
          }), Le = Ie?.src?.mobile ?? !1, Oe = (0, d.useMemo)((() => Ce?.foreignId), [Ce]), Be = (0, d.useMemo)((() => Ce?.foreignTitle), [Ce]), [We, ze] = (0, d.useState)(0), [He, Re] = (0, d.useState)(0), [Ae, Fe] = (0, d.useState)(0), [Ge, Ze] = (0, d.useState)(0), [Ve, Ue] = (0, d.useState)(!1), [Ye, qe] = (0, d.useState)(0), [Qe, Xe] = (0, d.useState)(20), [Je, Ke] = (0, d.useState)(null), [et, tt] = (0, d.useState)(!1), at = (0, d.useCallback)((e => {
            if (!0 === q || !s && !l || he) return;
            const t = w(e);
            ze(t.x), Re(t.y)
          }), [q, s]), nt = e => {
            at(e)
          }, rt = e => {
            if (!0 === q || 0 === We || !s && !l || he) return;
            const t = w(e),
              a = t.x > We ? 1 : -1,
              n = Math.abs(We - t.x);
            s && !l && n > Qe ? (tt(!0), be(a > 0 ? "prev" : "next"), it()) : (Ue(!0), qe(n * a), C(n * a))
          }, st = e => {
            if (!0 === q || !s && !l || he) return;
            const t = w(e),
              a = t.x > We ? 1 : -1,
              n = Math.abs(We - t.x),
              r = Math.abs(He - t.y);
            s && !l ? (it(), be("")) : n > Qe && r < 25 ? (tt(!0), be(a > 0 ? "prev" : "next"), it()) : it()
          }, it = () => {
            Q(!0), ze(0), Re(0), Ue(!1), qe(0), C(0)
          };
          return (0, d.useEffect)((() => {
            let e = X;
            B ? e = 0 : s && !l && (e = X), H(e)
          }), [B, l, s, R, Z, K, te, F, X]), (0, d.useEffect)((() => {
            W(!(!s || !l))
          }), [s, l]), (0, d.useEffect)((() => {
            s && t && j({
              event: "virtualPageview",
              display_type: l ? "mobile" : "desktop",
              view_name: `${Oe}/${Pe}`,
              source_content_id: Oe,
              source_content_name: Be
            })
          }), [s, t]), (0, d.useEffect)((() => {
            const e = m()(((e, t) => {
              let a = 18;
              if (e?.documentElement && (a = T(e?.documentElement, "--root-font-size")), le !== t.innerHeight && de(t.innerHeight), u?.current) {
                ae(T(u.current, "--eventDeck-marginSm") * a);
                const e = a * T(u?.current, "--eventDeck-modalGutters"),
                  n = t?.innerWidth,
                  r = n - 2 * e;
                A(r), L.current && l && G(r), V(T(u.current, "--eventDeck-itemSize") * a), me(T(u.current, "--eventDeck-phaseOneTransitionDuration"));
                const s = T(u?.current, "--eventDeck-itemImageTitleMargins") * a,
                  i = P?.current?.clientHeight,
                  o = i + s;
                Number.isNaN(o) || J(o), ce(T(u?.current, "--eventDeck-headerHeight") * a)
              }
              let n = Math.min(700, t.innerWidth);
              l || (n = 900), re(`${n}`)
            }), 300);
            return window.addEventListener("resize", (() => {
              e(document, window)
            })), e(document, window), () => {
              window.removeEventListener("resize", (() => {
                e(document, window)
              }))
            }
          }), [u, l]), (0, d.useEffect)((() => {
            if (D.current) {
              const e = D.current.clientHeight;
              Number.isNaN(e) || ee(e)
            }
          }), [D]), (0, d.useEffect)((() => {
            if (s && l && L.current && (L.current.style.transform = "scale(1) translate3d(0, 0, 0)"), !s && l && L.current) {
              const e = 228 / R;
              L.current.style.transform = `scale(${e}) translate3d(0, 0, 0)`
            }!l && L.current && (L.current.style.transform = null)
          }), [s, l, R, F]), (0, d.useEffect)((() => {
            const e = .5 * R,
              t = le - oe - 3 * te;
            Y(R - (e < t ? e : t))
          }), [R, te, le]), (0, d.useEffect)((() => {
            "next" === ve ? (h(null, !0), be("")) : "prev" === ve && (g(null, !0), be(""))
          }), [ve]), (0, d.useEffect)((() => {
            Fe(0), Ze(0)
          }), [l]), (0, d.useEffect)((() => {
            l ? Xe(s ? 35 : 20) : s && Xe(50)
          }), [s, l]), (0, d.useEffect)((() => {
            let e = [],
              t = 0,
              n = 0;
            if (null !== a?.transform) {
              e = a.transform.split(",");
              const r = e[0].split("(");
              t = Number(r[1].replace("px", "")), Fe(t), n = Number(e[1].replace("px", "")), Ze(n)
            }
          }), [a]), (0, d.useEffect)((() => {
            if (!q) return;
            clearTimeout(ye);
            const e = setTimeout((() => {
              Q(!1), ze(0)
            }), 200);
            ge(e)
          }), [q, 200]), (0, d.useEffect)((() => {
            if (!et) return;
            clearTimeout(Je);
            const e = setTimeout((() => {
              tt(!1)
            }), 1e3);
            Ke(e)
          }), [et]), (0, d.useEffect)((() => {
            s && clearTimeout(se), setTimeout((() => {
              pe(!fe)
            }), ue)
          }), [s]), (0, d.useEffect)((() => (document.body.addEventListener("mouseleave", it), () => {
            document.body.removeEventListener("mouseleave", it)
          })), []), (0, d.useEffect)((() => {
            O.current ? ke($(O.current)) : ke(!1), void 0 !== o && o.current ? we($(o.current)) : we(!1)
          }), [o, O, t, s, fe]), je ? (0, M.jsxs)("div", {
            className: "_2b820ae1fad6c6effde59cc0b211a74fd79f",
            ref: o,
            "data-item-position": r,
            "data-modal-mode": s,
            "data-active-item": t,
            "data-up-next": c,
            "data-transition": Ve || 0 !== N ? "none" : x,
            "data-scrollable": Te,
            style: {
              ...a,
              transform: s && t && !l ? `translate3d(${Ae+Ye}px, ${Ge}px, 0)` : l && !s ? `translate3d(${Ae+N}px, ${Ge}px, 0)` : a?.transform
            },
            onClick: e => {
              et || (s ? s && !l && (r < S ? g(e, !0) : r > S && h(e, !0)) : i(e))
            },
            onMouseEnter: () => {
              s || W(!0), s || l || (clearTimeout(se), ie(setTimeout((() => {
                j({
                  event: "card_title_hover",
                  event_category: "card",
                  event_action: "title_hover",
                  event_label: _,
                  card_name: Pe,
                  card_id: r,
                  position: r,
                  view_name: `${Oe}/${Be}`,
                  source_content_id: Oe,
                  source_content_name: Be
                })
              }), 1e3)))
            },
            onMouseLeave: () => {
              s || W(!1), s || l || clearTimeout(se)
            },
            onTouchStart: nt,
            onTouchMove: rt,
            onTouchEnd: st,
            onMouseDown: nt,
            onMouseMove: rt,
            onMouseUp: st,
            tabIndex: -1,
            role: "presentation",
            children: [(0, M.jsxs)("div", {
              className: "_2b820ae1fad6c6effa238bf7612b7724abaa",
              "data-full-header": B,
              ref: I,
              style: {
                height: s && l ? `${R}px` : null,
                width: s && l ? `${R}px` : null
              },
              children: [Le && (0, M.jsx)("img", {
                ref: L,
                src: `${Ie?.src?.mobile}?im=Resize,width=${ne}`,
                alt: Ie?.alt,
                style: {
                  width: 0 !== F && l ? `${F}px` : null,
                  height: 0 !== F && l ? `${F}px` : null
                }
              }), (0, M.jsxs)("div", {
                className: "_2b820ae1fad6c6efd21f276146dec1dcf842",
                style: {
                  transform: !l || l && s ? `translate3d(0, ${z}px, 0)` : null
                },
                children: [De && (0, M.jsx)("div", {
                  className: "_2b820ae1fad6c6efd9c130714618614ef63c",
                  ref: D,
                  children: (0, M.jsx)(f.Badge, {
                    text: De
                  })
                }), (0, M.jsx)("span", {
                  className: "_2b820ae1fad6c6efe056f0aa82c811cbadda",
                  ref: P,
                  "aria-hidden": s,
                  children: Pe
                })]
              })]
            }), (0, M.jsxs)("div", {
              className: "_2b820ae1fad6c6eff4efaa263cba6ec12f58",
              ref: O,
              onScroll: () => {
                xe(!0), it(), clearTimeout(Se);
                const e = setTimeout((() => {
                  xe(!1)
                }), 100);
                _e(e)
              },
              style: {
                top: s && l ? `${R}px` : null,
                width: s && !l && t ? `${U}px` : null,
                touchAction: Ne || l ? "unset" : "none"
              },
              children: [Pe && (0, M.jsx)("span", {
                className: "_2b820ae1fad6c6efd784a6def5f96306e977",
                children: Pe
              }), (0, M.jsx)("div", {
                className: "_2b820ae1fad6c6efb98f5b22300490f3feb8",
                children: (0, M.jsx)(b.TinaParser, {
                  components: p,
                  tina: {
                    meta: Ce,
                    payload: {
                      content: je?.content
                    }
                  }
                })
              })]
            })]
          }) : null
        })),
        j = "_2b820ae1fad6c6efcb22b2530b90ee356a13",
        D = e => {
          let {
            prevPage: t,
            prevBtnDisabled: a,
            nextPage: n,
            nextBtnDisabled: r,
            selectedItemNumber: s,
            itemsData: i,
            closeModalMode: o,
            inModalMode: c
          } = e;
          return (0, M.jsxs)(M.Fragment, {
            children: [(0, M.jsxs)("div", {
              className: "_2b820ae1fad6c6effaa5acf4b727e1382599",
              children: [(0, M.jsx)("button", {
                className: j,
                type: "button",
                onClick: t,
                disabled: a,
                "aria-label": "Previous"
              }), (0, M.jsxs)("span", {
                className: "_2b820ae1fad6c6efdacf520118176355e3f9",
                "aria-hidden": !c,
                "aria-label": `On page ${s+1} of ${i.length}`,
                children: [s + 1, (0, M.jsx)("span", {
                  className: "_2b820ae1fad6c6eff75c0ab96a4285c2dea2"
                }), i.length]
              }), (0, M.jsx)("button", {
                className: j,
                type: "button",
                onClick: n,
                disabled: r,
                "aria-label": "Next"
              })]
            }), (0, M.jsx)("button", {
              className: "_2b820ae1fad6c6effd85da563bb161a9949a",
              type: "button",
              onClick: o,
              "aria-label": "Close",
              "aria-hidden": !c
            })]
          })
        },
        P = e => {
          let {
            title: t = "New This Week"
          } = e;
          const {
            setBodyIsScrollable: a
          } = (0, g.useBodyScrollable)(), {
            track: n
          } = (0, y.useGtmTrack)(), r = (() => {
            const {
              data: e
            } = (0, _.useQuery)(N.TinaModulesList, {
              variables: {
                type: "gtao-event-card",
                orderBy: "priority",
                orderDirection: "desc"
              }
            }), t = e?.tinaModulesList?.results, a = S().map(t, "id");
            return (0, f.useTinaModuleFetchByIds)({
              ids: a
            })
          })(), [s, i] = (0, d.useState)([]), [o, c] = (0, d.useState)(null), [l, u] = (0, d.useState)(0), [p, x] = (0, d.useState)(window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth), [k, $] = (0, d.useState)(!1), E = (0, d.createRef)(), [j, P] = (0, d.useState)(null), I = (0, d.createRef)(), L = (0, d.createRef)(), [O, B] = (0, d.useState)([]), [W, z] = (0, d.useState)(!0), [H, R] = (0, d.useState)(!1), [A, F] = (0, d.useState)([]), [G, Z] = (0, d.useState)(404), [V, U] = (0, d.useState)(808), [Y, q] = (0, d.useState)(672), [Q, X] = (0, d.useState)(336), [J, K] = (0, d.useState)(0), [ee, te] = (0, d.useState)(0), [ae, ne] = (0, d.useState)(0), [re, se] = (0, d.useState)(0), [ie, oe] = (0, d.useState)(0), [ce, le] = (0, d.useState)(!1), [de, ue] = (0, d.useState)(window.innerWidth), [me, fe] = (0, d.useState)(0), [pe, ve] = (0, d.useState)(0), [be, ye] = (0, d.useState)(0), [ge, he] = (0, d.useState)(0), [xe, Se] = (0, d.useState)(0), [_e, Ne] = (0, d.useState)(0), [ke, Te] = (0, d.useState)(0), [we, $e] = (0, d.useState)(-1e3), [Me, Ee] = (0, d.useState)(0), [Ce, je] = (0, d.useState)(50), [De, Pe] = (0, d.useState)(0), [Ie, Le] = (0, d.useState)(!1), [Oe, Be] = (0, d.useState)(768), [We, ze] = (0, d.useState)(!1), [He, Re] = (0, d.useState)(!1), [Ae, Fe] = (0, d.useState)(!1), [Ge, Ze] = (0, d.useState)(!1), [Ve, Ue] = (0, d.useState)(!1), [Ye, qe] = (0, d.useState)(1e3), [Qe, Xe] = (0, d.useState)(1.2), [Je, Ke] = (0, d.useState)(0), [et, tt] = (0, d.useState)(!1), [at, nt] = (0, d.useState)(!1), [rt, st] = (0, d.useState)(!0), [it, ot] = (0, d.useState)(!1), [ct, lt] = (0, d.useState)(!1), [dt, ut] = (0, d.useState)(null), [mt, ft] = (0, d.useState)(100), [pt, vt] = (0, d.useState)(!1), [bt, yt] = (0, d.useState)({}), [gt, ht] = (0, d.useState)(""), [xt, St] = (0, d.useState)(0), [_t, Nt] = (0, d.useState)(!1), [kt, Tt] = (0, d.useState)(!1), [wt, $t] = (0, d.useState)(0), [Mt, Et] = (0, d.useState)(0), [Ct, jt] = (0, d.useState)(100), [Dt, Pt] = (0, d.useState)(!1), [It, Lt] = (0, d.useState)(!1), Ot = () => de * me + Ce, Bt = () => !1 === Ie ? Qe : 1, Wt = e => e === xe - 1 || e === xe + 1, zt = () => -1 * ge, Ht = function(e) {
            let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (!0 === Ie) return 0;
            const a = e.itemNumber % 2 == 0,
              n = G * Qe;
            if (!0 === a && 0 !== e.itemNumber) {
              const a = T(e?.element?.current, "top");
              let r = a - ae;
              return !1 === t && (r -= a), -1 * (.5 * n + r) + Je
            }
            return ae - .5 * n + Je
          }, Rt = function(e, t) {
            let a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              n = zt();
            !1 === a && (n = 0);
            const r = de * me,
              s = !1 === Ie ? G * Bt() : r;
            return e.inModalMode && Ie ? -1 === t ? Ot() * (xe - e.itemNumber) * -1 - e.styles.left : Ot() * (e.itemNumber - xe) - e.styles.left : -1 === t ? -1 * e.styles.left - s - Ce + n : r - e.styles.left + Ce + n
          }, At = (e, t, a) => {
            -1 === t && (R(!1), z(!0)), R(!1 === a && e >= t || !0 === a && e + 1 === t), z(e <= 0)
          }, Ft = function(e) {
            let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (ct || it) return;
            if (lt(!0), ce) return void
            function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (xe + 1 >= s.length) return;
              const a = O[xe + 1]?.tina?.payload?.meta?.title ?? `card-${xe+1}`;
              n({
                event: e ? "modal_swipe" : "modal_next",
                event_category: "modal",
                event_action: e ? "swipe" : "next",
                event_label: t,
                card_name: a,
                card_id: xe + 1,
                position: xe + 1,
                view_name: `${O[xe+1].source_content_id}/${a}`,
                source_content_id: O[xe + 1].source_content_id,
                source_content_name: O[xe + 1].source_content_name
              }), At(xe + 1, s.length, !0), Ie ? Ie && B(O.map((e => {
                e.itemNumber === xe - 1 ? e.upNext = !1 : e.itemNumber === xe + 2 ? e.upNext = !0 : e.itemNumber === xe + 1 ? e.active = !0 : e.itemNumber === xe && (e.upNext = !0, e.active = !1);
                const t = e.styles.transform.replace("translate3d(", "").split(",");
                let a = Number(t[0].replace("px", ""));
                a -= Ot();
                const n = `translate3d(${a}px,${t[1]},${t[2]}`;
                return e.styles = {
                  ...e.styles,
                  transform: n
                }, e
              }))) : B(O.map((e => (e.itemNumber === xe - 1 ? e.upNext = !1 : e.itemNumber === xe + 2 ? e.upNext = !0 : e.itemNumber === xe + 1 ? (e.active = !0, e.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${zt()}px, ${Je}px, 0) scale(1)`
              }) : e.itemNumber === xe && (e.upNext = !0, e.active = !1, e.styles = {
                ...e.styles,
                transform: `translate3d(${Rt(e,-1)}px, ${Ht(e)}px, 0) scale(${Bt()})`
              }), e)))), Se(xe + 1)
            }(a);
            const r = be + 1;
            if (!(r > ie))
              if (n({
                  event: a ? "carousel_swipe" : "carousel_next",
                  event_category: "carousel",
                  event_action: a ? "swipe" : "next",
                  event_label: t
                }), At(r, ie, !1), Ie) {
                let e = r * Q * -1;
                e < we && (e = we, R(!0), z(!1), ye(ie)), ye(r), B(O.map((t => (t.styles = {
                  ...t.styles,
                  transform: `translate3d(${e}px, 0, 0)`
                }, t))))
              } else {
                let e = ge - ee;
                0 === ge && (e = -1 * Y), ye(r), e < we && (e = we, R(!0), z(!1), ye(ie)), he(e)
              }
          }, Gt = function(e) {
            let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (ct || it) return;
            if (lt(!0), !0 === ce) return void
            function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (ct) return;
              if (xe - 1 < 0) return;
              const a = O[xe - 1]?.tina?.payload?.meta?.title ?? "card-" + (xe - 1);
              n({
                event: e ? "modal_swipe" : "modal_previous",
                event_category: "modal",
                event_action: e ? "swipe" : "previous",
                event_label: t,
                card_name: a,
                card_id: xe - 1,
                position: xe - 1,
                view_name: `${O[xe-1].source_content_id}/${a}`,
                source_content_id: O[xe - 1].source_content_id,
                source_content_name: O[xe - 1].source_content_name
              }), At(xe - 1, s.length, !0), Ie || B(O.map((e => (e.itemNumber === xe + 1 ? e.upNext = !1 : e.itemNumber === xe - 2 ? e.upNext = !0 : e.itemNumber === xe ? (e.upNext = !0, e.active = !1, e.styles = {
                ...e.styles,
                transform: `translate3d(${Rt(e,1)}px, ${Ht(e)}px, 0) scale(${Bt()})`
              }) : e.itemNumber === xe - 1 && (e.active = !0, e.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${zt()}px, ${Je}px, 0) scale(1)`
              }), e)))), Ie && B(O.map((e => {
                e.itemNumber === xe + 1 ? e.upNext = !1 : e.itemNumber === xe - 2 ? e.upNext = !0 : e.itemNumber === xe ? (e.upNext = !0, e.active = !1) : e.itemNumber === xe - 1 && (e.active = !0);
                const t = e.styles.transform.replace("translate3d(", "").split(",");
                let a = Number(t[0].replace("px", ""));
                a += Ot();
                const n = `translate3d(${a}px,${t[1]},${t[2]}`;
                return e.styles = {
                  ...e.styles,
                  transform: n
                }, e
              }))), Se(xe - 1)
            }(a);
            const r = be - 1;
            if (!(r < 0))
              if (n({
                  event: a ? "carousel_swipe" : "carousel_previous",
                  event_category: "carousel",
                  event_action: a ? "swipe" : "previous",
                  event_label: t
                }), At(r, ie, !1), Ie) {
                let e = r * Q * -1;
                e > 0 && (e = 0, z(!0), R(!1), ye(0)), ye(r), B(O.map((t => (t.styles = {
                  ...t.styles,
                  transform: `translate3d(${e}px, 0, 0)`
                }, t))))
              } else {
                let e = ge + ee;
                ye(r), (e > 0 || 0 === e || -1 * e < V) && (e = 0, z(!0), R(!1), ye(0)), he(e), B(O.map((t => (t.styles = {
                  ...t.styles,
                  transform: `translate3d(${e}px, 0, 0)`
                }, t))))
              }
          }, Zt = e => {
            if (_t || ce || Ie) return;
            const t = w(e);
            St(t.x)
          }, Vt = e => {
            if (_t || 0 === xt || ce || Ie) return;
            const t = w(e),
              a = t.x > xt ? 1 : -1;
            let n = Math.abs(xt - t.x) * a;
            (0 === be && 1 === a || be === ie && -1 === a) && (n *= .35), Tt(!0), $t(n)
          }, Ut = e => {
            if (_t || ce || Ie) return;
            const t = w(e),
              a = t.x > xt ? 1 : -1,
              n = Math.abs(xt - t.x);
            ht(n > Ct ? a > 0 ? "prev" : "next" : ""), Yt()
          }, Yt = () => {
            Nt(!0), St(0), $t(0), Tt(!1)
          }, qt = e => {
            kt && (Ut(e), Tt(!1))
          }, Qt = function(e, t) {
            let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            return e.map(((e, n) => {
              let r = n * Q,
                s = n;
              !1 === Ie && (s = Math.ceil(.5 * n) + 1, n > 0 && (r = 2 === s ? Y : Y + Q * (s - 2)));
              const i = A[n];
              return i?.current && (i.current.scrollTop = 0), {
                ...e,
                mobileMode: Ie,
                itemNumber: n,
                columnNumber: s,
                inModalMode: !1,
                upNext: !0,
                active: !1,
                openModalMode: Jt,
                element: i,
                transitionStyle: t,
                styles: {
                  left: r,
                  transform: "" === a ? null : a,
                  height: null,
                  top: null
                }
              }
            }))
          }, Xt = () => {
            const e = O[xe]?.tina?.payload?.meta?.title ?? `card-${xe}`;
            if (n({
                event: "modal_close",
                event_category: "modal",
                event_action: "close",
                event_label: t,
                card_name: e,
                card_id: xe,
                position: xe,
                view_name: `${O[xe].source_content_id}/${e}`,
                source_content_id: O[xe].source_content_id,
                source_content_name: O[xe].source_content_name
              }), Ie) {
              let e = xe * Q * -1;
              e < we && (e = we, R(!0), z(!1), ye(ie)), ye(xe), At(xe, ie, !1), B(Qt(s, "cardClose", `translate3d(${e}px, 0, 0)`))
            } else {
              B(Qt(s, "cardClose"));
              const e = Math.ceil((O[xe].columnNumber + 1) / J) - 1;
              ye(e);
              let t = e * ee * -1;
              De < pe ? (t = 0, z(!0), R(!0), ye(0)) : t < we ? (t = we, z(!1), R(!0), ye(ie)) : At(e, ie, !1), he(t), Se(0)
            }
            I.current.style.transform = "translateY(0px)", I.current.style.transition = "all var(--eventDeck-transitionCardClose)", tt(!1), Ze(!1), le(!1), Re(!1), ze(!1), Ue(!1), setTimeout((() => {
              Fe(!0)
            }), Ye)
          };
          (0, d.useEffect)((() => {
            !1 !== Ae && (Fe(!1), tt(!1), j.style.zIndex = null, B(O.map((e => (e.transitionStyle = "", e)))))
          }), [Ae]);
          const Jt = e => {
            setTimeout((() => {
              yt(e), vt(!0)
            }), 1)
          };
          (0, d.useEffect)((() => {
            if (!pt) return;
            if (vt(!1), ct) return;
            Se(Number(bt.target.dataset.itemPosition)), Re(!0), ot(!0), rt && st(!1);
            const e = O[bt.target.dataset.itemPosition].source_content_id,
              a = O[bt.target.dataset.itemPosition].source_content_name,
              r = O[bt.target.dataset.itemPosition]?.tina?.payload?.meta?.title;
            n({
              event: "card_click",
              event_category: "card",
              event_action: "click",
              event_label: t,
              card_name: r ?? `card-${xe}`,
              card_id: bt.target.dataset.itemPosition,
              position: bt.target.dataset.itemPosition,
              view_name: `${e}/${r}`,
              source_content_id: e,
              source_content_name: a
            })
          }), [pt]), (0, d.useEffect)((() => {
            if (!He || ce) return;
            Re(!1);
            const e = (() => {
              const e = j?.getBoundingClientRect().top;
              return Ke(-1 * (e - l)), -1 * (e - 140)
            })();
            Ie && B(O.map((e => {
              const t = e.itemNumber > xe + 3 || e.itemNumber < xe - 3;
              return e.styles = {
                ...e.styles,
                display: t ? "none" : null,
                transition: t ? "none" : null
              }, e
            }))), j.style.zIndex = "101", tt(!0), I.current && (I.current.style.transition = "all var(--eventDeck-transitionCardOpen)", I.current.style.transform = `translateY(${e}px)`), Ze(!0), setTimeout((() => {
              ze(!0)
            }), 1)
          }), [He]);
          const Kt = () => {
            B(O.map(((e, t) => {
              e.active = t === xe, e.inModalMode = !0, e.transitionStyle = "cardOpen", Ie && (e.upNext = Wt(e.itemNumber));
              const a = !Ie;
              let n = 0;
              if (Ie) {
                const e = _e + 5 * l;
                n = window.innerHeight - e
              }
              return e.itemNumber < xe ? e.styles = {
                ...e.styles,
                height: Ie ? `${n}px` : null,
                transform: `translate3d(${Rt(e,-1,a)}px, ${Je}px, 0) scale(${Bt()})`
              } : e.itemNumber > xe ? e.styles = {
                ...e.styles,
                height: Ie ? `${n}px` : null,
                transform: `translate3d(${Rt(e,1,a)}px, ${Je}px, 0) scale(1)`
              } : e.itemNumber === xe && (e.styles = Ie ? {
                ...e.styles,
                height: `${n}px`,
                transform: `translate3d(${-1*e.styles.left}px, ${Je}px, 0) scale(1)`
              } : {
                left: 0,
                top: 0,
                transform: `translate3d(${zt()}px, ${Je}px, 0) scale(1)`
              }), e
            })))
          };
          (0, d.useEffect)((() => {
            !1 !== We && !0 !== ce && (le(!0), ze(!1), At(xe, O.length, !0), I.current && (I.current.style.transition = "all var(--eventDeck-transitionCardOpen)", I.current.style.transform = `translateY(${Je}px)`), Kt(), Ie ? (he(0), ot(!1), nt(!0)) : Ue(!0))
          }), [We]), (0, d.useEffect)((() => {
            at && (nt(!1), B(O.map((e => ("none" === e.styles.display && (e.styles.display = null, e.styles.transition = null), e)))))
          }), [at]);
          const ea = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            B(O.map((t => {
              if (t.upNext = Wt(t.itemNumber), t.itemNumber !== xe) {
                let e = Rt(t, 1);
                t.itemNumber < xe && (e = Rt(t, -1)), t.styles = {
                  ...t.styles,
                  transform: `translate3d(${e}px, ${Ht(t)}px, 0) scale(${Bt()})`
                }
              } else t.itemNumber === xe && !Ie && e && (t.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${zt()}px, ${Je}px, 0) scale(1)`
              });
              return t
            })))
          };
          (0, d.useEffect)((() => {
            !1 !== Ve && !0 !== Ie && (Ue(!1), setTimeout((() => {
              ea(), ot(!1)
            }), 1))
          }), [Ve]), (0, d.useEffect)((() => {
            B(Qt(s, ""))
          }), [Y, Q, s]), (0, d.useEffect)((() => {
            const e = window.navigator?.userAgentData?.platform || window.navigator?.platform;
            Pt(["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(e))
          }), []), (0, d.useEffect)((() => {
            ce ? (a(!1), Dt && Lt(!0)) : kt || ce || (a(!0), Dt && It && Lt(!1))
          }), [ce, kt]), (0, d.useEffect)((() => {
            if (!ct) return;
            clearTimeout(dt);
            const e = setTimeout((() => {
              lt(!1)
            }), mt);
            ut(e)
          }), [ct]), (0, d.useEffect)((() => {
            k && setTimeout((() => {
              $(!1)
            }), 3e3)
          }), [k]), (0, d.useEffect)((() => {
            $(!0), he(0), ye(0);
            let e = Math.ceil(Math.ceil(De / Q) / J);
            Ie && (e = O.length - 1), e < 0 && (e = 1), At(0, e, !1), ce && Xt()
          }), [Ie]), (0, d.useEffect)((() => {
            I.current && !ce && (I.current.style.transform = "")
          }), [I, Ie, ce]), (0, d.useEffect)((() => {
            const e = (r ?? []).map((e => ({
              ...e,
              source_content_id: e?.tina?.payload?.meta?.foreignId,
              source_content_name: e?.tina?.payload?.meta?.foreignTitle,
              view_name: `${e?.tina?.payload?.meta?.foreignId}/${e?.tina?.payload?.meta?.foreignTitle}`
            })));
            i(e)
          }), [r]), (0, d.useEffect)((() => {
            F(s.map((() => (0, d.createRef)())))
          }), [s]), (0, d.useEffect)((() => {
            const e = e => {
              const {
                key: t
              } = e;
              "ArrowLeft" === t ? Gt(null, !1) : "ArrowRight" === t && Ft(null, !1)
            };
            return document.addEventListener("keydown", e), () => {
              document.removeEventListener("keydown", e)
            }
          }), [ct, it, ce]), (0, d.useEffect)((() => {
            if (I.current) {
              let e = 0;
              e = I?.current?.clientHeight, e += T(I?.current, "margin-top"), e += T(I?.current, "margin-bottom"), Ne(e)
            }
          }), [I, L]), (0, d.useEffect)((() => {
            ce && (() => {
              const e = j?.getBoundingClientRect().top,
                t = -1 * (e - l);
              if (B(O.map((e => {
                  if (e.styles.transform) {
                    const a = e.styles.transform.split(","),
                      n = `${a[0]}, ${t}px,${a[2]}`;
                    e.styles = {
                      ...e.styles,
                      transform: n
                    }
                  }
                  return e
                }))), I.current) {
                const t = -1 * (e - l);
                I.current.style.transform = `translateY(${t}px)`
              }
            })()
          }), [Ie, ce, Je]), (0, d.useEffect)((() => {
            De < me * de && 0 === be ? (he(0), R(!0), z(!0)) : ge < we ? (R(!0), z(!1), ye(ie), he(we)) : ge < 0 && (R(!1), ye(ie - 1)), De > me * de && H && R(!1)
          }), [we]), (0, d.useEffect)((() => {
            if (E.current) {
              P(E.current);
              const e = T(document.documentElement, "--root-font-size"),
                t = T(E.current, "--eventDeck-modalGutters") * e;
              Te(t);
              const a = de - 2 * t;
              ve(a), fe(a / de);
              let n = T(E.current, "--eventDeck-modalBottomGutter");
              n *= e;
              const r = window.innerHeight - (_e + n);
              ne(.5 * a < r ? a / 4 : .5 * r);
              const i = T(E.current, "--eventDeck-mobileBreakpoint");
              Be(i);
              let l = T(E.current, "--eventDeck-itemSize");
              l *= e, Z(l);
              let d = T(E.current, "--eventDeck-modalGutterGap");
              d *= e, je(d);
              let m = T(E.current, "--eventDeck-insideMargin");
              m *= e;
              const f = !1 === Ie ? 2 * l + m : l + m;
              U(f), q(f + m);
              const p = l + m;
              X(p);
              let v = Math.ceil(.5 * (s.length - 1)) * p + f;
              Ie && (v = s.length * p), Pe(v), 0 !== De && $e(-1 * De + a);
              let b = Math.ceil(Math.ceil(v / p) / J);
              (Ie || ce) && (b = O.length - 1), oe(b);
              const y = T(E.current, "--eventDeck-itemScaleUpAmount");
              Xe(y), qe(T(E.current, "--eventDeck-cardCloseTransitionDuration")), u(T(E.current, "--eventDeck-itemImageTitleMargins") * e), null !== o && e !== o && (c(e), ce && ea()), null === o && c(e)
            }
          }), [E, s]), (0, d.useEffect)((() => {
            if (ce && !Ie) {
              ea();
              const e = j?.getBoundingClientRect().top,
                t = -1 * (e - l);
              t !== Je && Ke(t)
            }
          }), [p]), (0, d.useEffect)((() => {
            const e = m()((e => {
              ue(e), Le(e < Oe);
              const t = (1 - me) / 2;
              Ee(e * t);
              const a = e - 2 * ke,
                n = Math.round(a / Q);
              K(n), te(n * Q), se(e - e * t);
              const r = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth;
              if (r !== p && x(r), ce && r === p && !k) {
                const e = j?.getBoundingClientRect().top,
                  t = -1 * (e - l);
                t !== Je && Ke(t)
              }
            }), 300);
            return window.addEventListener("resize", (() => {
              e(window.innerWidth)
            })), window.addEventListener("scroll", (() => {
              ce && Ie && e(window.innerWidth)
            })), e(window.innerWidth), () => {
              window.removeEventListener("resize", (() => {
                e(window.innerWidth)
              }))
            }
          }), [Q, me, ce, Ie]), (0, d.useEffect)((() => {
            !1 !== ce && !0 !== k && (Ie ? Kt() : ea(!0))
          }), [re, ee, Ce, G, de, Me, ae, Je]), (0, d.useEffect)((() => {
            const e = () => {
              if (E.current && rt) {
                const e = E.current.getBoundingClientRect(),
                  t = .2 * window.innerHeight;
                window.innerHeight - e.top >= t && st(!1)
              }
            };
            return e(), window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
          }), [E]), (0, d.useEffect)((() => {
            "next" === gt ? (Ft(null, !0), ht("")) : "prev" === gt && (Gt(null, !0), ht(""))
          }), [gt]), (0, d.useEffect)((() => {
            E.current && E.current.addEventListener("mouseleave", (() => {
              kt && Yt()
            }))
          }), [E, kt]), (0, d.useEffect)((() => (document.body.addEventListener("mouseleave", qt), () => {
            document.body.removeEventListener("mouseleave", qt)
          })), [kt]), (0, d.useEffect)((() => {
            _t && setTimeout((() => {
              Nt(!1), St(0)
            }), mt)
          }), [_t]), (0, d.useEffect)((() => {
            jt(Ie ? 20 : 100)
          }), [Ie]), (0, d.useEffect)((() => {
            ft(ce ? 500 : 100)
          }), [ce]);
          const ta = (0, b.useTinaComponents)(),
            aa = (0, d.useMemo)((() => ({
              ...ta,
              CardWithImageGallery: h.Z,
              HTMLElement: f.HTMLElement,
              ImageWithBadge: f.ImageWithBadge,
              Carousel: f.Carousel,
              GroupOfItems: v(),
              UnorderedList: f.UnorderedList
            })), [ta]),
            na = (0, d.useMemo)((() => O.map((e => (0, d.createElement)(C, {
              ...e,
              refDeck: E,
              key: e?.id ?? e?.sync_hash,
              components: aa,
              prevPage: Gt,
              nextPage: Ft,
              loadCssRawValue: T,
              selectedItemNumber: xe,
              carouselTitle: t,
              sharedDraggingDelta: Mt,
              setSharedDraggingDelta: Et
            })))), [O, E, aa, Gt, Ft, xe]);
          return !na?.length || na.length <= 0 ? null : (0, M.jsxs)(M.Fragment, {
            children: [(0, M.jsx)("div", {
              className: "_2b820ae1fad6c6efc1b08e0c6762959d6e40",
              "data-modal-mode": Ge,
              "aria-hidden": "true"
            }), (0, M.jsxs)("div", {
              className: "_2b820ae1fad6c6efdd9c11d21c9d76e0f525",
              "data-modal-mode": ce,
              "data-faded": rt,
              ref: E,
              onTouchStart: Zt,
              onTouchMove: Vt,
              onTouchEnd: Ut,
              onMouseDown: Zt,
              onMouseMove: Vt,
              onMouseUp: Ut,
              tabIndex: -1,
              role: "presentation",
              children: [(0, M.jsxs)("div", {
                className: "_2b820ae1fad6c6effe4a9770ab07662ba456",
                "data-modal-mode": ce,
                ref: I,
                "data-animating": et,
                children: [(0, M.jsx)("h2", {
                  className: "_2b820ae1fad6c6efbdad5a5a38f931159788",
                  children: t
                }), (0, M.jsx)(D, {
                  prevPage: Gt,
                  prevBtnDisabled: W,
                  nextPage: Ft,
                  nextBtnDisabled: H,
                  selectedItemNumber: xe,
                  itemsData: s,
                  closeModalMode: Xt,
                  inModalMode: ce
                })]
              }), (0, M.jsx)("div", {
                className: "_2b820ae1fad6c6effe13159c37ea559619ab",
                "data-modal-mode": ce,
                "data-is-dragging": kt,
                style: {
                  transform: `translate3d(${ge+wt}px, 0, 0)`,
                  width: `${De}px`
                },
                ref: L,
                children: na
              })]
            })]
          })
        };
      var I = a(1498)
    },
    1498: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        Card: () => n.Z,
        CardGrid: () => N,
        CardWithImageGallery: () => E.Z,
        CoverCard: () => M,
        Deck: () => j.Z,
        TextCard: () => C.Z
      });
      var n = a(8421),
        r = a(822),
        s = a(948),
        i = a.n(s),
        o = a(8976),
        c = a(420),
        l = a.n(c),
        d = a(9542),
        u = a(1248);
      const m = {
        clrCollapsedCard: "_2b820ae1fad6c6eff6b60ed0528262116599",
        cardContainer: "_2b820ae1fad6c6efeb92e279865c9000b72a",
        cardInfo: "_2b820ae1fad6c6efe58bfe52c22f632dc039",
        subtitle: "_2b820ae1fad6c6efa95eca18e1ad770ea596",
        price: "_2b820ae1fad6c6efe48b1713bf2de6b8abc0",
        newBadge: "_2b820ae1fad6c6efb0aca41f30620c3d2493",
        outOfStockBadge: "_2b820ae1fad6c6efc1e731016dcfde4718af",
        saleBadge: "_2b820ae1fad6c6efb7acd2f4b0a9d92d8d5d",
        slashedPrice: "_2b820ae1fad6c6efa6c6824725dc7d6616e6",
        storeInfo: "_2b820ae1fad6c6efeee54d2e0d1b2ce5b7e3",
        priceInfo: "_2b820ae1fad6c6efda4f70065c6b04b9392e",
        cardDesc: "_2b820ae1fad6c6eff45af61905d26c0592eb"
      };
      var f = a(9706);
      const p = e => {
          let {
            videoUrl: t,
            expandedType: a,
            children: n
          } = e;
          return t && "linkout" === a ? (0, f.jsx)(o.A, {
            to: t,
            children: n
          }) : n
        },
        v = e => {
          let {
            className: t,
            cardType: a,
            title: n,
            image: r,
            subheader: s,
            subtitle: i,
            price: c,
            slashedPrice: l,
            badge: d = null,
            expandedType: u,
            videoUrl: v
          } = e;
          return (0, f.jsx)("div", {
            className: [m.clrCollapsedCard, t].join(" "),
            role: "button",
            tabIndex: 0,
            children: (0, f.jsx)(p, {
              videoUrl: v,
              expandedType: u,
              children: (0, f.jsxs)("div", {
                className: m.cardContainer,
                "data-type": a,
                children: [(0, f.jsx)("div", {
                  className: m.cardMedia,
                  children: (0, f.jsx)(o.MultiSourceImage, {
                    ...r
                  })
                }), (0, f.jsxs)("div", {
                  className: m.cardInfo,
                  children: [s && (0, f.jsx)("h6", {
                    children: s
                  }), (0, f.jsx)("h5", {
                    children: n
                  }), i && (0, f.jsx)("h6", {
                    className: m.subtitle,
                    children: i
                  }), "store" === a && (0, f.jsxs)("div", {
                    className: m.storeInfo,
                    children: [(0, f.jsx)("p", {
                      className: (() => {
                        switch (d) {
                          case "New":
                            return m.newBadge;
                          case "Sale":
                            return m.saleBadge;
                          case "Out of Stock":
                            return m.outOfStockBadge;
                          default:
                            return ""
                        }
                      })(),
                      children: d
                    }), (0, f.jsxs)("span", {
                      className: m.priceInfo,
                      children: [(0, f.jsx)("p", {
                        className: m.price,
                        children: c
                      }), (0, f.jsx)("p", {
                        className: m.slashedPrice,
                        children: l
                      })]
                    })]
                  })]
                })]
              })
            })
          })
        };
      var b = a(1559);
      const y = {
          clrCardModalContent: "_2b820ae1fad6c6efde3a11886ff7c7c01a80",
          expandedCard: "_2b820ae1fad6c6efe1a0223a78c9aa470ef6",
          content: "_2b820ae1fad6c6efd104d01f2048b62b51d8",
          details: "_2b820ae1fad6c6efcc5da9e77f92def47e14",
          calloutHeaders: "_2b820ae1fad6c6efac6438a76bed0e28cf70"
        },
        {
          variants: g
        } = o.framer.Animations,
        h = e => {
          let {
            id: t,
            content: a,
            size: n = "clr",
            cardType: r = "release",
            title: s,
            subheader: i,
            subtitle: c,
            storeInfo: l = {},
            expandedType: m,
            to: p,
            image: h,
            deckProps: x,
            tina: S = {}
          } = e;
          const _ = (0, d.useTinaPayload)(),
            N = S?.payload?.meta?.cdn ?? _?.meta?.prod ?? !1,
            k = {
              image: {
                ...h,
                prod: N
              }
            };
          return (0, f.jsx)(u.Z, {
            id: t,
            title: s,
            context: "clr-card",
            size: n,
            expandedType: m,
            images: k,
            deckProps: x,
            prod: N,
            modalProps: {
              className: y.clrCardModal,
              contentClassName: y.clrCardModalContent
            },
            variants: g.plainCard,
            payload: {
              content: a
            },
            expandedCardContents: (0, f.jsx)(o.MultiSourceImage, {
              ...k
            }),
            children: (0, f.jsx)(b.Z, {
              expandedType: m,
              to: p,
              style: {
                display: "flex"
              },
              children: (0, f.jsx)(v, {
                cardType: r,
                title: s,
                subheader: i,
                subtitle: c,
                image: k,
                expandedType: m,
                price: l?.price,
                slashedPrice: l?.slashedPrice,
                badge: l?.badge
              })
            })
          })
        };
      var x = a(4859),
        S = a(5404);

      function _(e, t) {
        const a = {
          ...e
        };
        return i().forOwn(e, ((e, n) => {
          if ("image" === n) {
            const e = a[n];
            a[n] = {
              ...e,
              prod: t
            }
          } else i().isObject(e) && !i().isArray(e) ? _(e, t) : i().isArray(e) && (a[n] = e.map((e => i().isObject(e) ? _(e, t) : e)))
        })), a || []
      }
      const N = e => {
        let {
          size: t,
          className: a
        } = e;
        const n = (0, d.useTinaComponents)(),
          s = (0, r.useMemo)((() => ({
            ...n,
            HTMLElement: o.HTMLElement,
            ImageWithBadge: o.ImageWithBadge,
            Carousel: o.Carousel,
            GroupOfItems: l(),
            ClrCard: h,
            ClrCollapsedCard: v,
            CalloutSection: o.CalloutSection,
            TrackList: o.TrackList
          })), [n]),
          c = (() => {
            const {
              data: e
            } = (0, x.useQuery)(S.TinaModulesList, {
              variables: {
                type: "clr-card",
                locale: "en_us"
              }
            }), t = e?.tinaModulesList?.results, a = i().map(t, "id");
            return (0, o.useTinaModuleFetchByIds)({
              ids: a
            })
          })(),
          u = (0, d.useTinaPayload)(),
          m = (0, r.useMemo)((() => c ? c.reduce(((e, t) => {
            if (t) {
              const {
                id: a,
                tina: n
              } = t, r = i().clone(n);
              i().set(r, "payload.meta.id", a);
              const o = r?.payload,
                c = o?.meta?.cdn ?? !1 ?? u?.meta?.prod ?? !1,
                l = _(o?.content?.[0], c),
                m = o?.meta?.title,
                p = l?._memoq?.subheader,
                v = l?.image,
                b = o?.content?.[0].expandedType,
                y = o?.content?.[0].cardType,
                g = l?.content ?? [];
              "release" === y && e.push((0, f.jsx)(d.TinaParser, {
                components: s,
                tina: r,
                componentProps: {
                  id: a,
                  tina: r,
                  title: m,
                  subheader: p,
                  image: v,
                  expandedType: b,
                  modalContent: g
                }
              }, a))
            }
            return e
          }), []) : null), [c, t]);
        return (0, f.jsx)(o.Grid, {
          className: a,
          children: m
        })
      };
      var k = a(8637);
      const T = {
          customModalContent: "_2b820ae1fad6c6eff348dacb636353b11c51",
          content: "_2b820ae1fad6c6efdf95f12ea94658664861",
          secondary: "_2b820ae1fad6c6efac4425db45829109b6bb",
          logo: "_2b820ae1fad6c6efe0170396b8c6129f37ee"
        },
        {
          variants: w
        } = o.framer.Animations,
        $ = a(5976),
        M = e => {
          let {
            id: t,
            title: a,
            content: n,
            size: s = "md",
            expandedType: i = "short",
            textOverlayProps: o = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            images: c = [],
            deckProps: l = {},
            to: m = null,
            tina: p = {}
          } = e;
          const v = (0, d.useTinaPayload)(),
            y = p?.payload?.meta?.cdn ?? v?.meta?.prod ?? !1,
            [g, h] = (0, r.useState)(l?.size ?? s),
            {
              learnMoreUrl: x,
              body: S
            } = v.content[0]._memoq;
          return (0, r.useEffect)((() => {
            h(l?.size ?? s)
          }), [l?.size, s]), (0, f.jsx)(u.Z, {
            id: t,
            title: a,
            size: g,
            expandedType: i,
            images: c,
            deckProps: l,
            prod: y,
            payload: {
              content: n,
              meta: {}
            },
            variants: w.plainCard,
            textOverlayProps: o,
            modalProps: {
              className: T.customModal,
              contentClassName: T.customModalContent
            },
            expandedCardContents: (0, f.jsx)(k.Z, {
              images: c,
              prod: y,
              expandedView: !0
            }),
            children: (0, f.jsx)(b.Z, {
              expandedType: i,
              to: m,
              children: (0, f.jsxs)("div", {
                className: T.content,
                children: [(0, f.jsx)("img", {
                  className: T.logo,
                  alt: "logo",
                  src: $
                }), (0, f.jsx)("h2", {
                  children: a
                }), (0, f.jsx)("p", {
                  children: S
                }), (0, f.jsx)("a", {
                  href: x,
                  children: "Learn more"
                })]
              })
            })
          })
        };
      var E = a(1950),
        C = a(796),
        j = a(9117)
    },
    3676: (e, t, a) => {
      var n = a(7472).Symbol;
      e.exports = n
    },
    9526: (e, t, a) => {
      var n = a(3676),
        r = a(9715),
        s = a(4368),
        i = n ? n.toStringTag : void 0;
      e.exports = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : i && i in Object(e) ? r(e) : s(e)
      }
    },
    25: (e, t, a) => {
      var n = a(2695),
        r = /^\s+/;
      e.exports = function(e) {
        return e ? e.slice(0, n(e) + 1).replace(r, "") : e
      }
    },
    7561: (e, t, a) => {
      var n = "object" == typeof a.g && a.g && a.g.Object === Object && a.g;
      e.exports = n
    },
    9715: (e, t, a) => {
      var n = a(3676),
        r = Object.prototype,
        s = r.hasOwnProperty,
        i = r.toString,
        o = n ? n.toStringTag : void 0;
      e.exports = function(e) {
        var t = s.call(e, o),
          a = e[o];
        try {
          e[o] = void 0;
          var n = !0
        } catch (e) {}
        var r = i.call(e);
        return n && (t ? e[o] = a : delete e[o]), r
      }
    },
    4368: e => {
      var t = Object.prototype.toString;
      e.exports = function(e) {
        return t.call(e)
      }
    },
    7472: (e, t, a) => {
      var n = a(7561),
        r = "object" == typeof self && self && self.Object === Object && self,
        s = n || r || Function("return this")();
      e.exports = s
    },
    2695: e => {
      var t = /\s/;
      e.exports = function(e) {
        for (var a = e.length; a-- && t.test(e.charAt(a)););
        return a
      }
    },
    2239: (e, t, a) => {
      var n = a(3477),
        r = a(8491),
        s = a(4821),
        i = Math.max,
        o = Math.min;
      e.exports = function(e, t, a) {
        var c, l, d, u, m, f, p = 0,
          v = !1,
          b = !1,
          y = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function g(t) {
          var a = c,
            n = l;
          return c = l = void 0, p = t, u = e.apply(n, a)
        }

        function h(e) {
          var a = e - f;
          return void 0 === f || a >= t || a < 0 || b && e - p >= d
        }

        function x() {
          var e = r();
          if (h(e)) return S(e);
          m = setTimeout(x, function(e) {
            var a = t - (e - f);
            return b ? o(a, d - (e - p)) : a
          }(e))
        }

        function S(e) {
          return m = void 0, y && c ? g(e) : (c = l = void 0, u)
        }

        function _() {
          var e = r(),
            a = h(e);
          if (c = arguments, l = this, f = e, a) {
            if (void 0 === m) return function(e) {
              return p = e, m = setTimeout(x, t), v ? g(e) : u
            }(f);
            if (b) return clearTimeout(m), m = setTimeout(x, t), g(f)
          }
          return void 0 === m && (m = setTimeout(x, t)), u
        }
        return t = s(t) || 0, n(a) && (v = !!a.leading, d = (b = "maxWait" in a) ? i(s(a.maxWait) || 0, t) : d, y = "trailing" in a ? !!a.trailing : y), _.cancel = function() {
          void 0 !== m && clearTimeout(m), p = 0, c = f = l = m = void 0
        }, _.flush = function() {
          return void 0 === m ? u : S(r())
        }, _
      }
    },
    3477: e => {
      e.exports = function(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
      }
    },
    61: e => {
      e.exports = function(e) {
        return null != e && "object" == typeof e
      }
    },
    6074: (e, t, a) => {
      var n = a(9526),
        r = a(61);
      e.exports = function(e) {
        return "symbol" == typeof e || r(e) && "[object Symbol]" == n(e)
      }
    },
    8491: (e, t, a) => {
      var n = a(7472);
      e.exports = function() {
        return n.Date.now()
      }
    },
    4821: (e, t, a) => {
      var n = a(25),
        r = a(3477),
        s = a(6074),
        i = /^[-+]0x[0-9a-f]+$/i,
        o = /^0b[01]+$/i,
        c = /^0o[0-7]+$/i,
        l = parseInt;
      e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (s(e)) return NaN;
        if (r(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = r(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = n(e);
        var a = o.test(e);
        return a || c.test(e) ? l(e.slice(2), a ? 2 : 8) : i.test(e) ? NaN : +e
      }
    },
    5404: e => {
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
                value: "orderBy"
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
                value: "orderDirection"
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
                  value: "orderBy"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "orderBy"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "orderDirection"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "orderDirection"
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
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "variables"
                          },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "keys"
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
            }]
          }
        }],
        loc: {
          start: 0,
          end: 495
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
        body: "query TinaModulesList(\n    $type: String\n    $orderBy: String\n    $orderDirection: String\n    $locale: String!\n) {\n    tinaModulesList(\n        type: $type\n        orderBy: $orderBy\n        orderDirection: $orderDirection\n        locale: $locale\n    ) {\n        results {\n            id: id_hash\n            name\n            type\n            tina {\n                id\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function r(e, t) {
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
          definitions: [r(e, t)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var s = n[t] || new Set,
          i = new Set,
          o = new Set;
        for (s.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            i.has(e) || (i.add(e), (n[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(t) {
          var n = r(e, t);
          n && a.definitions.push(n)
        })), a
      }(t, "TinaModulesList")
    },
    5976: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/e6f9867ec4c5e32867a8.svg"
    }
  }
]);