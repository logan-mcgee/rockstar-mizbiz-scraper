(self.webpackChunk_rockstargames_modules_core_card = self.webpackChunk_rockstargames_modules_core_card || []).push([
  [310, 686], {
    7749: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        Card: () => C.Card,
        CardExpanded: () => a.Z,
        CardHeader: () => s.Z,
        CardWithImageGallery: () => C.CardWithImageGallery,
        CardWrapper: () => r.Z,
        Deck: () => C.Deck,
        EventsDeck: () => D,
        LayeredImageFrame: () => o.Z,
        LinkoutWrapper: () => i.Z,
        TextCard: () => C.TextCard,
        TextOverlay: () => l.Z,
        ThumbsGalleryOrThumb: () => c.Z
      });
      var a = n(9525),
        s = n(547),
        r = n(8819),
        o = n(507),
        i = n(4950),
        l = n(9838),
        c = n(7366),
        u = n(822),
        d = n(8673),
        m = n.n(d),
        f = n(8976),
        p = n(420),
        v = n.n(p),
        x = n(9542),
        h = n(6711),
        b = n(1204),
        y = n(7311),
        g = n.n(y),
        N = n(4859),
        S = n(5938);
      var w = n(9929),
        $ = n(559);
      const E = "d93abf8c854bf70e6ae4";
      var M = n(3322);

      function T(e, t) {
        const n = {
          ...e
        };
        return g().forOwn(e, ((e, a) => {
          if ("image" === a) {
            const e = n[a];
            n[a] = {
              ...e,
              prod: t
            }
          } else g().isObject(e) && !g().isArray(e) ? T(e, t) : g().isArray(e) && (n[a] = e.map((e => g().isObject(e) ? T(e, t) : e)))
        })), n
      }
      const j = (0, w.withTranslations)((e => {
          let {
            active: t,
            styles: n,
            title: a,
            itemNumber: s,
            inModalMode: r,
            openModalMode: o,
            element: i,
            upNext: l,
            mobileMode: c,
            refDeck: d,
            components: p,
            tina: v,
            prevPage: b,
            nextPage: y,
            loadCssRawValue: g,
            transitionStyle: N,
            selectedItemNumber: S
          } = e;
          const {
            track: w
          } = (0, h.useGtmTrack)(), E = (0, u.createRef)(), j = (0, u.createRef)(), _ = (0, u.createRef)(), k = (0, u.createRef)(), D = (0, u.createRef)(), [C, I] = (0, u.useState)(!1), [O, P] = (0, u.useState)(0), [W, L] = (0, u.useState)(0), [R, B] = (0, u.useState)(0), [H, G] = (0, u.useState)(0), [z, A] = (0, u.useState)(0), [X, Z] = (0, u.useState)(!1), [U, F] = (0, u.useState)(0), [Y, V] = (0, u.useState)(0), [Q, q] = (0, u.useState)(0), [J, K] = (0, u.useState)(0), [ee, te] = (0, u.useState)("700"), [ne, ae] = (0, u.useState)(-1), [se, re] = (0, u.useState)(0), [oe, ie] = (0, u.useState)(0), [le, ce] = (0, u.useState)(""), ue = (0, x.useTinaPayload)(), de = v?.payload?.meta?.cdn ?? !1 ?? ue?.meta?.prod ?? !1, me = (0, x.useTranslations)({
            payload: v?.payload,
            variables: v?.variables
          }), fe = me?.meta ?? {}, pe = T(me?.content?.[0], de), ve = (0, u.useMemo)((() => pe?.images?.[0]?.image?.badge), [pe]), xe = (0, u.useMemo)((() => a ?? fe?.title), [a, fe?.title]), he = (0, $.useImageParser)({
            alt: pe?.images?.[0]?.image?.alt ?? "",
            ariaLabel: pe?.images?.[0]?.image?.alt ?? "",
            sources: pe?.images?.[0]?.image?.sources ?? [],
            prod: de
          }), be = he?.src?.mobile ?? !1, ye = (0, u.useMemo)((() => fe?.foreignId), [fe]), ge = (0, u.useMemo)((() => fe?.foreignTitle), [fe]);
          (0, u.useEffect)((() => {
            let e = Q + J;
            null == ve && (e = 0);
            let t = H - e;
            0 !== s || c || (t = 2 * H + J - e), C && !c ? t -= Y : r && !c ? t = .5 * W - e : c && (t = W - 48), P(t)
          }), [C, c, r, W, H, Q, J, R]), (0, u.useEffect)((() => {
            I(!(!r || !c))
          }), [r, c]), (0, u.useEffect)((() => {
            r && t && w({
              event: "virtualPageview",
              display_type: c ? "mobile" : "desktop",
              view_name: `${ye}/${ge}`
            })
          }), [r, t]), (0, u.useEffect)((() => {
            const e = m()(((e, t) => {
              let n = 18;
              if (e?.documentElement && (n = g(e?.documentElement, "--root-font-size")), oe !== t.innerHeight && ie(t.innerHeight), d?.current) {
                K(g(d.current, "--eventDeck-marginSm") * n);
                const e = n * g(d?.current, "--eventDeck-modalGutters"),
                  a = t?.innerWidth;
                L(a - 2 * e), k.current && c && 0 === R && B(k.current.clientWidth), G(g(d.current, "--eventDeck-itemSize") * n);
                const s = g(d?.current, "--eventDeck-itemImageTitleMargins") * n,
                  r = j?.current?.clientHeight,
                  o = r + s;
                Number.isNaN(o) || V(o), re(g(d?.current, "--eventDeck-headerHeight") * n)
              }
              let a = Math.min(700, t.innerWidth);
              c || (a = 900), te(`${a}`)
            }), 300);
            return window.addEventListener("resize", (() => {
              e(document, window)
            })), e(document, window), () => {
              window.removeEventListener("resize", (() => {
                e(document, window)
              }))
            }
          }), [d, c]), (0, u.useEffect)((() => {
            if (E.current) {
              const e = E.current.clientHeight;
              Number.isNaN(e) || q(e)
            }
          }), [E]), (0, u.useEffect)((() => {
            if (!0 === r && !0 === c && k.current) {
              const e = W / R;
              k.current.style.transform = `scale(${e}) translate3d(0, 0, 0)`
            }!1 === r && !0 === c && k.current && (k.current.style.transform = "scale(1) translate3d(0, 0, 0)"), !c && k.current && (k.current.style.transform = null)
          }), [r, c]), (0, u.useEffect)((() => {
            const e = .5 * W,
              t = oe - se - 3 * J;
            A(W - (e < t ? e : t))
          }), [W, J, oe]), (0, u.useEffect)((() => {
            "next" === le ? (y(null, !0), ce("")) : "prev" === le && (b(null, !0), ce(""))
          }), [le]);
          const Ne = e => {
              if (!0 === X || !r) return;
              const t = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              F(t)
            },
            Se = e => {
              if (!0 === X || 0 === U || !r) return;
              const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                n = t > U ? 1 : -1;
              Math.abs(U - t) > 35 && (ce(n > 0 ? "prev" : "next"), Z(!0), F(0))
            },
            we = () => {
              !0 !== X && r && (Z(!0), F(0), ce(""))
            };
          (0, u.useEffect)((() => {
            X && setTimeout((() => {
              Z(!1), F(0)
            }), 200)
          }), [X, 200]);
          return (0, u.useEffect)((() => {
            r && clearTimeout(ne)
          }), [r]), pe ? (0, M.jsxs)("div", {
            className: "fde59cc0b211a74fd79f",
            ref: i,
            "data-item-position": s,
            "data-modal-mode": r,
            "data-active-item": t,
            "data-up-next": l,
            "data-transition": N,
            style: n,
            onClick: e => {
              r ? r && !c && (s < S ? b(e, !0) : s > S && y(e, !0)) : o(e)
            },
            onMouseEnter: () => {
              r || I(!0), r || c || (clearTimeout(ne), ae(setTimeout((() => {
                w({
                  event: "carousel_title_hover",
                  event_category: "carousel",
                  event_action: "title_hover",
                  event_label: xe,
                  card_name: xe,
                  card_id: s,
                  position: s
                })
              }), 1e3)))
            },
            onMouseLeave: () => {
              r || I(!1), r || c || clearTimeout(ne)
            },
            onTouchStart: Ne,
            onTouchMove: Se,
            onTouchEnd: we,
            onMouseDown: Ne,
            onMouseMove: Se,
            onMouseUp: we,
            tabIndex: -1,
            role: "presentation",
            children: [(0, M.jsxs)("div", {
              className: "fa238bf7612b7724abaa",
              "data-full-header": C,
              ref: _,
              style: {
                height: r && c ? `${W}px` : null,
                width: r && c ? `${W}px` : null
              },
              children: [be && (0, M.jsx)("img", {
                ref: k,
                src: `${he?.src?.mobile}?im=Resize,width=${ee}`,
                alt: he?.alt,
                style: {
                  width: 0 !== R && c ? `${R}px` : null,
                  height: 0 !== R && c ? `${R}px` : null
                }
              }), (0, M.jsxs)("div", {
                className: "d21f276146dec1dcf842",
                style: {
                  transform: !c || c && r ? `translate3d(0, ${O}px, 0)` : null
                },
                children: [ve && (0, M.jsx)("div", {
                  className: "d9c130714618614ef63c",
                  ref: E,
                  children: (0, M.jsx)(f.Badge, {
                    text: ve
                  })
                }), (0, M.jsx)("span", {
                  className: "e056f0aa82c811cbadda",
                  ref: j,
                  "aria-hidden": r,
                  children: xe
                })]
              })]
            }), (0, M.jsxs)("div", {
              className: "f4efaa263cba6ec12f58",
              ref: D,
              style: {
                top: r && c ? `${W}px` : null,
                width: r && !c && t ? `${z}px` : null
              },
              children: [xe && (0, M.jsx)("span", {
                className: "d784a6def5f96306e977",
                children: xe
              }), (0, M.jsx)("div", {
                className: "b98f5b22300490f3feb8",
                children: (0, M.jsx)(x.TinaParser, {
                  components: p,
                  tina: {
                    meta: fe,
                    payload: {
                      content: pe?.content
                    }
                  }
                })
              })]
            })]
          }) : null
        })),
        _ = "cb22b2530b90ee356a13",
        k = e => {
          let {
            prevPage: t,
            prevBtnDisabled: n,
            nextPage: a,
            nextBtnDisabled: s,
            selectedItemNumber: r,
            itemsData: o,
            closeModalMode: i
          } = e;
          return (0, M.jsxs)(M.Fragment, {
            children: [(0, M.jsxs)("div", {
              className: "faa5acf4b727e1382599",
              children: [(0, M.jsx)("button", {
                className: _,
                type: "button",
                onClick: t,
                disabled: n,
                "aria-label": "Previous"
              }), (0, M.jsxs)("span", {
                className: "dacf520118176355e3f9",
                children: [r + 1, (0, M.jsx)("span", {
                  className: "f75c0ab96a4285c2dea2"
                }), o.length]
              }), (0, M.jsx)("button", {
                className: _,
                type: "button",
                onClick: a,
                disabled: s,
                "aria-label": "Next"
              })]
            }), (0, M.jsx)("button", {
              className: "fd85da563bb161a9949a",
              type: "button",
              onClick: i,
              "aria-label": "Close"
            })]
          })
        },
        D = e => {
          let {
            title: t = "New This Week"
          } = e;
          const {
            track: n
          } = (0, h.useGtmTrack)(), a = (() => {
            const {
              data: e
            } = (0, N.useQuery)(S.TinaModulesList, {
              variables: {
                type: "gtao-event-card",
                orderBy: "priority",
                orderDirection: "desc"
              }
            }), t = e?.tinaModulesList?.results, n = g().map(t, "id");
            return (0, f.useTinaModuleFetchByIds)({
              ids: n
            })
          })(), [s, r] = (0, u.useState)([]), [o, i] = (0, u.useState)(null), [l, c] = (0, u.useState)(0), [d, p] = (0, u.useState)(window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth), [y, w] = (0, u.useState)(!1), $ = (0, u.createRef)(), [T, _] = (0, u.useState)(null), D = (0, u.createRef)(), C = (0, u.createRef)(), [I, O] = (0, u.useState)([]), [P, W] = (0, u.useState)(!0), [L, R] = (0, u.useState)(!1), [B, H] = (0, u.useState)([]), [G, z] = (0, u.useState)(404), [A, X] = (0, u.useState)(672), [Z, U] = (0, u.useState)(336), [F, Y] = (0, u.useState)(0), [V, Q] = (0, u.useState)(0), [q, J] = (0, u.useState)(0), [K, ee] = (0, u.useState)(0), [te, ne] = (0, u.useState)(0), [ae, se] = (0, u.useState)(!1), [re, oe] = (0, u.useState)(window.innerWidth), [ie, le] = (0, u.useState)(0), [ce, ue] = (0, u.useState)(0), [de, me] = (0, u.useState)(0), [fe, pe] = (0, u.useState)(0), [ve, xe] = (0, u.useState)(0), [he, be] = (0, u.useState)(0), [ye, ge] = (0, u.useState)(-1e3), [Ne, Se] = (0, u.useState)(0), [we, $e] = (0, u.useState)(50), [Ee, Me] = (0, u.useState)(0), [Te, je] = (0, u.useState)(!1), [_e, ke] = (0, u.useState)(768), [De, Ce] = (0, u.useState)(!1), [Ie, Oe] = (0, u.useState)(!1), [Pe, We] = (0, u.useState)(!1), [Le, Re] = (0, u.useState)(!1), [Be, He] = (0, u.useState)(!1), [Ge, ze] = (0, u.useState)(1e3), [Ae, Xe] = (0, u.useState)(1e3), [Ze, Ue] = (0, u.useState)(1.2), [Fe, Ye] = (0, u.useState)(0), [Ve, Qe] = (0, u.useState)(!1), [qe, Je] = (0, u.useState)(!1), [Ke, et] = (0, u.useState)(!0), [tt, nt] = (0, u.useState)(!1), [at, st] = (0, u.useState)(!1), [rt, ot] = (0, u.useState)(null), [it, lt] = (0, u.useState)(""), [ct, ut] = (0, u.useState)(0), [dt, mt] = (0, u.useState)(!1), ft = (e, t) => {
            let n = getComputedStyle(e).getPropertyValue(t);
            return n = n.replace("px", "").replace("rem", "").replace("em", ""), n = n.replace("vh", "").replace("vw", "").replace("vmin", "").replace("vmax", ""), n = n.replace("ms", "").replace("s", ""), Number(n)
          }, pt = () => re * ie + we, vt = () => !1 === Te ? Ze : 1, xt = e => e === fe - 1 || e === fe + 1, ht = () => -1 * de;
          (0, u.useEffect)((() => {
            ae && (() => {
              const e = T?.getBoundingClientRect().top,
                t = -1 * (e - l);
              if (O(I.map((e => {
                  if (e.styles.transform) {
                    const n = e.styles.transform.split(","),
                      a = `${n[0]}, ${t}px,${n[2]}`;
                    e.styles = {
                      ...e.styles,
                      transform: a
                    }
                  }
                  return e
                }))), D.current) {
                const t = -1 * (e - l);
                D.current.style.transform = `translateY(${t}px)`
              }
            })()
          }), [Te, ae, Fe]);
          const bt = function(e) {
              let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (!0 === Te) return 0;
              const n = e.itemNumber % 2 == 0,
                a = G * Ze;
              if (!0 === n && 0 !== e.itemNumber) {
                const n = ft(e?.element?.current, "top");
                let s = n - q;
                return !1 === t && (s -= n), -1 * (.5 * a + s) + Fe
              }
              return q - .5 * a + Fe
            },
            yt = function(e, t) {
              let n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                a = ht();
              !1 === n && (a = 0);
              const s = re * ie,
                r = !1 === Te ? G * vt() : s;
              return e.inModalMode && Te ? -1 === t ? pt() * (fe - e.itemNumber) * -1 - e.styles.left : pt() * (e.itemNumber - fe) - e.styles.left : -1 === t ? -1 * e.styles.left - r - we + a : s - e.styles.left + we + a
            },
            gt = (e, t, n) => {
              -1 === t && (R(!1), W(!0)), R(!1 === n && e >= t || !0 === n && e + 1 === t), W(e <= 0)
            },
            Nt = function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              fe + 1 >= s.length || (n({
                event: e ? "modal_swipe" : "modal_next",
                event_category: "modal",
                event_action: "next",
                event_label: t,
                card_name: I[fe + 1]?.tina?.payload?.meta?.title ?? `card-${fe+1}`,
                card_id: fe + 1,
                position: fe + 1
              }), gt(fe + 1, s.length, !0), Te ? Te && O(I.map((e => {
                e.itemNumber === fe - 1 ? e.upNext = !1 : e.itemNumber === fe + 2 ? e.upNext = !0 : e.itemNumber === fe + 1 ? e.active = !0 : e.itemNumber === fe && (e.upNext = !0, e.active = !1);
                const t = e.styles.transform.replace("translate3d(", "").split(",");
                let n = Number(t[0].replace("px", ""));
                n -= pt();
                const a = `translate3d(${n}px,${t[1]},${t[2]}`;
                return e.styles = {
                  ...e.styles,
                  transform: a
                }, e
              }))) : O(I.map((e => (e.itemNumber === fe - 1 ? e.upNext = !1 : e.itemNumber === fe + 2 ? e.upNext = !0 : e.itemNumber === fe + 1 ? (e.active = !0, e.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${ht()}px, ${Fe}px, 0) scale(1)`
              }) : e.itemNumber === fe && (e.upNext = !0, e.active = !1, e.styles = {
                ...e.styles,
                transform: `translate3d(${yt(e,-1)}px, ${bt(e)}px, 0) scale(${vt()})`
              }), e)))), pe(fe + 1))
            },
            St = function(e) {
              let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (at || tt) return;
              if (st(!0), ae) return void Nt(a);
              const s = ce + 1;
              if (!(s > te))
                if (n({
                    event: a ? "swipe" : "carousel_next",
                    event_category: "carousel",
                    event_action: "next",
                    event_label: t
                  }), gt(s, te, !1), Te) {
                  let e = s * Z * -1;
                  e < ye && (e = ye, R(!0), W(!1), ue(te)), ue(s), O(I.map((t => (t.styles = {
                    ...t.styles,
                    transform: `translate3d(${e}px, 0, 0)`
                  }, t))))
                } else {
                  let e = de - V;
                  ue(s), e < ye && (e = ye, R(!0), W(!1), ue(te)), me(e)
                }
            },
            wt = function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              at || (st(!0), fe - 1 < 0 || (n({
                event: e ? "modal_swipe" : "modal_previous",
                event_category: "modal",
                event_action: "previous",
                event_label: t,
                card_name: I[fe - 1]?.tina?.payload?.meta?.title ?? "card-" + (fe - 1),
                card_id: fe - 1,
                position: fe - 1
              }), gt(fe - 1, s.length, !0), Te || O(I.map((e => (e.itemNumber === fe + 1 ? e.upNext = !1 : e.itemNumber === fe - 2 ? e.upNext = !0 : e.itemNumber === fe ? (e.upNext = !0, e.active = !1, e.styles = {
                ...e.styles,
                transform: `translate3d(${yt(e,1)}px, ${bt(e)}px, 0) scale(${vt()})`
              }) : e.itemNumber === fe - 1 && (e.active = !0, e.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${ht()}px, ${Fe}px, 0) scale(1)`
              }), e)))), Te && O(I.map((e => {
                e.itemNumber === fe + 1 ? e.upNext = !1 : e.itemNumber === fe - 2 ? e.upNext = !0 : e.itemNumber === fe ? (e.upNext = !0, e.active = !1) : e.itemNumber === fe - 1 && (e.active = !0);
                const t = e.styles.transform.replace("translate3d(", "").split(",");
                let n = Number(t[0].replace("px", ""));
                n += pt();
                const a = `translate3d(${n}px,${t[1]},${t[2]}`;
                return e.styles = {
                  ...e.styles,
                  transform: a
                }, e
              }))), pe(fe - 1)))
            },
            $t = function(e) {
              let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (at || tt) return;
              if (st(!0), !0 === ae) return void wt(a);
              const s = ce - 1;
              if (!(s < 0))
                if (n({
                    event: a ? "swipe" : "carousel_previous",
                    event_category: "carousel",
                    event_action: "previous",
                    event_label: t
                  }), gt(s, te, !1), Te) {
                  let e = s * Z * -1;
                  e > 0 && (e = 0, W(!0), R(!1), ue(0)), ue(s), O(I.map((t => (t.styles = {
                    ...t.styles,
                    transform: `translate3d(${e}px, 0, 0)`
                  }, t))))
                } else {
                  let e = de + V;
                  Te && (e = de + Z), ue(s), e > 0 && (e = 0, W(!0), R(!1), ue(0)), me(e)
                }
            },
            Et = function(e, t) {
              let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
              return e.map(((e, a) => {
                let s = a * Z,
                  r = a;
                !1 === Te && (r = Math.ceil(.5 * a) + 1, a > 0 && (s = 2 === r ? A : A + Z * (r - 2)));
                const o = B[a];
                return o?.current && (o.current.scrollTop = 0), {
                  ...e,
                  mobileMode: Te,
                  itemNumber: a,
                  columnNumber: r,
                  inModalMode: !1,
                  upNext: !0,
                  active: !1,
                  openModalMode: Tt,
                  element: o,
                  transitionStyle: t,
                  styles: {
                    left: s,
                    transform: "" === n ? null : n,
                    height: null,
                    top: null
                  }
                }
              }))
            },
            Mt = () => {
              if (n({
                  event: "modal_close",
                  event_category: "modal",
                  event_action: "close",
                  event_label: t,
                  card_name: I[fe]?.tina?.payload?.meta?.title ?? `card-${fe}`,
                  card_id: fe,
                  position: fe
                }), Te) {
                let e = fe * Z * -1;
                e < ye && (e = ye, R(!0), W(!1), ue(te)), ue(fe), gt(fe, te, !1), O(Et(s, "cardClose", `translate3d(${e}px, 0, 0)`))
              } else {
                O(Et(s, "cardClose"));
                const e = Math.ceil((I[fe].columnNumber + 1) / F) - 1;
                ue(e);
                let t = e * V * -1;
                t < ye ? (t = ye, W(!1), R(!0), ue(te)) : gt(e, te, !1), me(t), pe(0)
              }
              D.current.style.transform = "translateY(0px)", Qe(!1), Re(!1), se(!1), Oe(!1), Ce(!1), He(!1), setTimeout((() => {
                We(!0)
              }), Ae)
            };
          (0, u.useEffect)((() => {
            !1 !== Pe && (We(!1), Qe(!1), T.style.zIndex = null, O(I.map((e => (e.transitionStyle = "easeInOut", e)))))
          }), [Pe]);
          const Tt = e => {
            pe(Number(e.target.dataset.itemPosition)), Oe(!0), nt(!0), Ke && et(!1), n({
              event: "card_click",
              event_category: "card",
              event_action: "click",
              event_label: I[e.target.dataset.itemPosition]?.tina?.payload?.meta?.title ?? `card-${fe}`,
              card_name: I[e.target.dataset.itemPosition]?.tina?.payload?.meta?.title ?? `card-${fe}`,
              card_id: e.target.dataset.itemPosition,
              position: e.target.dataset.itemPosition
            })
          };
          (0, u.useEffect)((() => {
            if (!1 === Ie || !0 === ae) return;
            Oe(!1);
            const e = (() => {
              const e = T?.getBoundingClientRect().top;
              return Ye(-1 * (e - l)), -1 * (e - 140)
            })();
            Te && O(I.map((e => {
              const t = e.itemNumber > fe + 3 || e.itemNumber < fe - 3;
              return e.styles = {
                ...e.styles,
                display: t ? "none" : null,
                transition: t ? "none" : null
              }, e
            }))), T.style.zIndex = "101", Qe(!0), D.current && (D.current.style.transition = "all var(--eventDeck-transitionCardOpen)", D.current.style.transform = `translateY(${e}px)`), Re(!0), setTimeout((() => {
              Ce(!0)
            }), 1)
          }), [Ie]);
          const jt = () => {
            O(I.map(((e, t) => {
              e.active = t === fe, e.inModalMode = !0, e.transitionStyle = "cardOpen", Te && (e.upNext = xt(e.itemNumber));
              const n = !Te;
              let a = 0;
              if (Te) {
                const e = ve + 5 * l;
                a = window.innerHeight - e
              }
              return e.itemNumber < fe ? e.styles = {
                ...e.styles,
                height: Te ? `${a}px` : null,
                transform: `translate3d(${yt(e,-1,n)}px, ${Fe}px, 0) scale(${vt()})`
              } : e.itemNumber > fe ? e.styles = {
                ...e.styles,
                height: Te ? `${a}px` : null,
                transform: `translate3d(${yt(e,1,n)}px, ${Fe}px, 0) scale(1)`
              } : e.itemNumber === fe && (e.styles = Te ? {
                ...e.styles,
                height: `${a}px`,
                transform: `translate3d(${-1*e.styles.left}px, ${Fe}px, 0) scale(1)`
              } : {
                left: 0,
                top: 0,
                transform: `translate3d(${ht()}px, ${Fe}px, 0) scale(1)`
              }), e
            })))
          };
          (0, u.useEffect)((() => {
            !1 !== De && !0 !== ae && (se(!0), Ce(!1), gt(fe, I.length, !0), D.current && (D.current.style.transition = "all var(--eventDeck-transitionCardOpen)", D.current.style.transform = `translateY(${Fe}px)`), jt(), !1 === Te ? He(!0) : (me(0), nt(!1), Je(!0)))
          }), [De]), (0, u.useEffect)((() => {
            qe && (Je(!1), O(I.map((e => ("none" === e.styles.display && (e.styles.display = null, e.styles.transition = null), e)))))
          }), [qe]);
          const _t = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            O(I.map((t => {
              if (t.upNext = xt(t.itemNumber), t.transitionStyle = "easeInOut", t.itemNumber !== fe) {
                let e = yt(t, 1);
                t.itemNumber < fe && (e = yt(t, -1)), t.styles = {
                  ...t.styles,
                  transform: `translate3d(${e}px, ${bt(t)}px, 0) scale(${vt()})`
                }
              } else t.itemNumber === fe && !Te && e && (t.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${ht()}px, ${Fe}px, 0) scale(1)`
              });
              return t
            })))
          };
          (0, u.useEffect)((() => {
            !1 !== Be && !0 !== Te && (He(!1), setTimeout((() => {
              _t(), nt(!1)
            }), Ge))
          }), [Be]), (0, u.useEffect)((() => {
            O(Et(s, "easeInOut"))
          }), [A, Z, s]), (0, u.useEffect)((() => {
            !0 === ae ? (document.body.style.touchAction = "none", document.body.style.overflow = "hidden") : (document.body.style.touchAction = "auto", document.body.style.overflow = "auto")
          }), [ae]), (0, u.useEffect)((() => {
            if (!at) return;
            clearTimeout(rt);
            const e = setTimeout((() => {
              st(!1)
            }), 600);
            ot(e)
          }), [at]), (0, u.useEffect)((() => {
            y && setTimeout((() => {
              w(!1)
            }), 3e3)
          }), [y]), (0, u.useEffect)((() => {
            w(!0), me(0), ue(0);
            let e = Math.ceil(Math.ceil(Ee / Z) / F);
            Te && (e = I.length - 1), e < 0 && (e = 1), gt(0, e, !1), ae && Mt()
          }), [Te]), (0, u.useEffect)((() => {
            r(a ?? [])
          }), [a]), (0, u.useEffect)((() => {
            H(s.map((() => (0, u.createRef)())))
          }), [s]), (0, u.useEffect)((() => {
            const e = e => {
              const {
                key: t
              } = e;
              "ArrowLeft" === t ? $t(null, !1) : "ArrowRight" === t && St(null, !1)
            };
            return document.addEventListener("keydown", e), () => {
              document.removeEventListener("keydown", e)
            }
          }), [at, tt, ae]), (0, u.useEffect)((() => {
            if (D.current) {
              let e = 0;
              e = D?.current?.clientHeight, e += ft(D?.current, "margin-top"), e += ft(D?.current, "margin-bottom"), xe(e)
            }
          }), [D, C]), (0, u.useEffect)((() => {
            de < ye ? (R(!0), W(!1), ue(te), me(ye)) : de < 0 && (R(!1), ue(te - 1))
          }), [ye]), (0, u.useEffect)((() => {
            if ($.current) {
              _($.current);
              const e = ft(document.documentElement, "--root-font-size"),
                t = ft($.current, "--eventDeck-modalGutters") * e;
              be(t);
              const n = re - 2 * t;
              le(n / re);
              let a = ft($.current, "--eventDeck-modalBottomGutter");
              a *= e;
              const r = window.innerHeight - (ve + a);
              J(.5 * n < r ? n / 4 : .5 * r);
              const l = ft($.current, "--eventDeck-mobileBreakpoint");
              ke(l);
              let u = ft($.current, "--eventDeck-itemSize");
              u *= e, z(u);
              let d = ft($.current, "--eventDeck-modalGutterGap");
              d *= e, $e(d);
              let m = ft($.current, "--eventDeck-insideMargin");
              m *= e;
              const f = !1 === Te ? 2 * u + m : u + m;
              X(f + m);
              const p = u + m;
              U(p);
              let v = Math.ceil(.5 * (s.length - 1)) * p + f;
              Te && (v = s.length * p), Me(v), 0 !== Ee && ge(-1 * Ee + n);
              let x = Math.ceil(Math.ceil(v / p) / F);
              (Te || ae) && (x = I.length - 1), ne(x);
              const h = ft($.current, "--eventDeck-itemScaleUpAmount");
              Ue(h), ze(ft($.current, "--eventDeck-phaseOneTransitionDuration")), Xe(ft($.current, "--eventDeck-cardCloseTransitionDuration")), c(ft($.current, "--eventDeck-itemImageTitleMargins") * e), null !== o && e !== o && (i(e), ae && _t()), null === o && i(e)
            }
          }), [$, s]), (0, u.useEffect)((() => {
            if (ae && !Te) {
              _t();
              const e = T?.getBoundingClientRect().top,
                t = -1 * (e - l);
              t !== Fe && Ye(t)
            }
          }), [d]), (0, u.useEffect)((() => {
            const e = m()((e => {
              oe(e), je(e < _e);
              const t = (1 - ie) / 2;
              Se(e * t);
              const n = e - 2 * he,
                a = Math.round(n / Z);
              Y(a), Q(a * Z), ee(e - e * t);
              const s = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth;
              if (s !== d && p(s), ae && s === d && !y) {
                const e = T?.getBoundingClientRect().top,
                  t = -1 * (e - l);
                t !== Fe && Ye(t)
              }
            }), 300);
            return window.addEventListener("resize", (() => {
              e(window.innerWidth)
            })), window.addEventListener("scroll", (() => {
              ae && Te && e(window.innerWidth)
            })), e(window.innerWidth), () => {
              window.removeEventListener("resize", (() => {
                e(window.innerWidth)
              }))
            }
          }), [Z, ie, ae, Te]), (0, u.useEffect)((() => {
            !1 !== ae && !0 !== y && (Te ? jt() : _t(!0))
          }), [K, V, we, G, re, Ne, q, Fe]), (0, u.useEffect)((() => {
            const e = () => {
              if ($.current && Ke) {
                const e = $.current.getBoundingClientRect(),
                  t = .2 * window.innerHeight;
                window.innerHeight - e.top >= t && et(!1)
              }
            };
            return e(), window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
          }), [$]), (0, u.useEffect)((() => {
            "next" === it ? (St(null, !0), lt("")) : "prev" === it && ($t(null, !0), lt(""))
          }), [it]);
          const kt = e => {
              if (dt || ae) return;
              const t = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              ut(t)
            },
            Dt = e => {
              if (dt || 0 === ct || ae) return;
              const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                n = t > ct ? 1 : -1;
              Math.abs(ct - t) > 20 && (lt(n > 0 ? "prev" : "next"), mt(!0), ut(0))
            },
            Ct = () => {
              dt || ae || (mt(!0), ut(0), lt(""))
            };
          (0, u.useEffect)((() => {
            dt && setTimeout((() => {
              mt(!1), ut(0)
            }), 600)
          }), [dt]);
          const It = (0, x.useTinaComponents)(),
            Ot = (0, u.useMemo)((() => ({
              ...It,
              CardWithImageGallery: b.Z,
              HTMLElement: f.HTMLElement,
              ImageWithBadge: f.ImageWithBadge,
              Carousel: f.Carousel,
              GroupOfItems: v(),
              UnorderedList: f.UnorderedList
            })), [It]),
            Pt = (0, u.useMemo)((() => I.map((e => (0, u.createElement)(j, {
              ...e,
              refDeck: $,
              key: e?.id ?? e?.sync_hash,
              components: Ot,
              prevPage: $t,
              nextPage: St,
              loadCssRawValue: ft,
              selectedItemNumber: fe
            })))), [I, $, Ot, $t, St, ft, fe]);
          return !Pt?.length || Pt.length <= 0 ? null : (0, M.jsxs)(M.Fragment, {
            children: [(0, M.jsx)("div", {
              className: E
            }), (0, M.jsx)("div", {
              className: E
            }), (0, M.jsx)("div", {
              className: E
            }), (0, M.jsx)("div", {
              className: E
            }), (0, M.jsx)("div", {
              className: E
            }), (0, M.jsx)("div", {
              className: E
            }), (0, M.jsx)("div", {
              className: E
            }), (0, M.jsx)("div", {
              className: "c1b08e0c6762959d6e40",
              "data-modal-mode": Le,
              "aria-hidden": "true"
            }), (0, M.jsxs)("div", {
              className: "dd9c11d21c9d76e0f525",
              "data-modal-mode": ae,
              "data-faded": Ke,
              ref: $,
              onTouchStart: kt,
              onTouchMove: Dt,
              onTouchEnd: Ct,
              onMouseDown: kt,
              onMouseMove: Dt,
              onMouseUp: Ct,
              tabIndex: -1,
              role: "presentation",
              children: [(0, M.jsxs)("div", {
                className: "fe4a9770ab07662ba456",
                "data-modal-mode": ae,
                ref: D,
                "data-animating": Ve,
                children: [(0, M.jsx)("h2", {
                  className: "bdad5a5a38f931159788",
                  children: t
                }), (0, M.jsx)(k, {
                  prevPage: $t,
                  prevBtnDisabled: P,
                  nextPage: St,
                  nextBtnDisabled: L,
                  selectedItemNumber: fe,
                  itemsData: s,
                  closeModalMode: Mt
                })]
              }), (0, M.jsx)("div", {
                className: "fe13159c37ea559619ab",
                "data-modal-mode": ae,
                style: {
                  transform: `translate3d(${de}px, 0, 0)`,
                  width: `${Ee}px`
                },
                ref: C,
                children: Pt
              })]
            }), (0, M.jsx)("div", {
              className: E
            }), (0, M.jsx)("div", {
              className: E
            }), (0, M.jsx)("div", {
              className: E
            }), (0, M.jsx)("div", {
              className: E
            }), (0, M.jsx)("div", {
              className: E
            })]
          })
        };
      var C = n(7210)
    },
    8231: (e, t, n) => {
      var a = n(1715).Symbol;
      e.exports = a
    },
    8970: (e, t, n) => {
      var a = n(8231),
        s = n(9762),
        r = n(4511),
        o = a ? a.toStringTag : void 0;
      e.exports = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : o && o in Object(e) ? s(e) : r(e)
      }
    },
    9284: (e, t, n) => {
      var a = n(8217),
        s = /^\s+/;
      e.exports = function(e) {
        return e ? e.slice(0, a(e) + 1).replace(s, "") : e
      }
    },
    8477: (e, t, n) => {
      var a = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
      e.exports = a
    },
    9762: (e, t, n) => {
      var a = n(8231),
        s = Object.prototype,
        r = s.hasOwnProperty,
        o = s.toString,
        i = a ? a.toStringTag : void 0;
      e.exports = function(e) {
        var t = r.call(e, i),
          n = e[i];
        try {
          e[i] = void 0;
          var a = !0
        } catch (e) {}
        var s = o.call(e);
        return a && (t ? e[i] = n : delete e[i]), s
      }
    },
    4511: e => {
      var t = Object.prototype.toString;
      e.exports = function(e) {
        return t.call(e)
      }
    },
    1715: (e, t, n) => {
      var a = n(8477),
        s = "object" == typeof self && self && self.Object === Object && self,
        r = a || s || Function("return this")();
      e.exports = r
    },
    8217: e => {
      var t = /\s/;
      e.exports = function(e) {
        for (var n = e.length; n-- && t.test(e.charAt(n)););
        return n
      }
    },
    8673: (e, t, n) => {
      var a = n(4078),
        s = n(1923),
        r = n(9789),
        o = Math.max,
        i = Math.min;
      e.exports = function(e, t, n) {
        var l, c, u, d, m, f, p = 0,
          v = !1,
          x = !1,
          h = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function b(t) {
          var n = l,
            a = c;
          return l = c = void 0, p = t, d = e.apply(a, n)
        }

        function y(e) {
          var n = e - f;
          return void 0 === f || n >= t || n < 0 || x && e - p >= u
        }

        function g() {
          var e = s();
          if (y(e)) return N(e);
          m = setTimeout(g, function(e) {
            var n = t - (e - f);
            return x ? i(n, u - (e - p)) : n
          }(e))
        }

        function N(e) {
          return m = void 0, h && l ? b(e) : (l = c = void 0, d)
        }

        function S() {
          var e = s(),
            n = y(e);
          if (l = arguments, c = this, f = e, n) {
            if (void 0 === m) return function(e) {
              return p = e, m = setTimeout(g, t), v ? b(e) : d
            }(f);
            if (x) return clearTimeout(m), m = setTimeout(g, t), b(f)
          }
          return void 0 === m && (m = setTimeout(g, t)), d
        }
        return t = r(t) || 0, a(n) && (v = !!n.leading, u = (x = "maxWait" in n) ? o(r(n.maxWait) || 0, t) : u, h = "trailing" in n ? !!n.trailing : h), S.cancel = function() {
          void 0 !== m && clearTimeout(m), p = 0, l = f = c = m = void 0
        }, S.flush = function() {
          return void 0 === m ? d : N(s())
        }, S
      }
    },
    4078: e => {
      e.exports = function(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
      }
    },
    9842: e => {
      e.exports = function(e) {
        return null != e && "object" == typeof e
      }
    },
    151: (e, t, n) => {
      var a = n(8970),
        s = n(9842);
      e.exports = function(e) {
        return "symbol" == typeof e || s(e) && "[object Symbol]" == a(e)
      }
    },
    1923: (e, t, n) => {
      var a = n(1715);
      e.exports = function() {
        return a.Date.now()
      }
    },
    9789: (e, t, n) => {
      var a = n(9284),
        s = n(4078),
        r = n(151),
        o = /^[-+]0x[0-9a-f]+$/i,
        i = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        c = parseInt;
      e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (r(e)) return NaN;
        if (s(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = s(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = a(e);
        var n = i.test(e);
        return n || l.test(e) ? c(e.slice(2), n ? 2 : 8) : o.test(e) ? NaN : +e
      }
    }
  }
]);