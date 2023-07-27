(self.webpackChunk_rockstargames_modules_core_card = self.webpackChunk_rockstargames_modules_core_card || []).push([
  [228, 568], {
    5379: (e, t, n) => {
      var a = n(1983).Symbol;
      e.exports = a
    },
    2002: (e, t, n) => {
      var a = n(5379),
        r = n(3029),
        s = n(7776),
        i = a ? a.toStringTag : void 0;
      e.exports = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : i && i in Object(e) ? r(e) : s(e)
      }
    },
    9680: (e, t, n) => {
      var a = n(4309),
        r = /^\s+/;
      e.exports = function(e) {
        return e ? e.slice(0, a(e) + 1).replace(r, "") : e
      }
    },
    7795: (e, t, n) => {
      var a = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
      e.exports = a
    },
    3029: (e, t, n) => {
      var a = n(5379),
        r = Object.prototype,
        s = r.hasOwnProperty,
        i = r.toString,
        o = a ? a.toStringTag : void 0;
      e.exports = function(e) {
        var t = s.call(e, o),
          n = e[o];
        try {
          e[o] = void 0;
          var a = !0
        } catch (e) {}
        var r = i.call(e);
        return a && (t ? e[o] = n : delete e[o]), r
      }
    },
    7776: e => {
      var t = Object.prototype.toString;
      e.exports = function(e) {
        return t.call(e)
      }
    },
    1983: (e, t, n) => {
      var a = n(7795),
        r = "object" == typeof self && self && self.Object === Object && self,
        s = a || r || Function("return this")();
      e.exports = s
    },
    4309: e => {
      var t = /\s/;
      e.exports = function(e) {
        for (var n = e.length; n-- && t.test(e.charAt(n)););
        return n
      }
    },
    2816: (e, t, n) => {
      var a = n(3221),
        r = n(6354),
        s = n(3330),
        i = Math.max,
        o = Math.min;
      e.exports = function(e, t, n) {
        var c, l, d, u, m, f, p = 0,
          v = !1,
          b = !1,
          g = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function y(t) {
          var n = c,
            a = l;
          return c = l = void 0, p = t, u = e.apply(a, n)
        }

        function h(e) {
          var n = e - f;
          return void 0 === f || n >= t || n < 0 || b && e - p >= d
        }

        function x() {
          var e = r();
          if (h(e)) return S(e);
          m = setTimeout(x, function(e) {
            var n = t - (e - f);
            return b ? o(n, d - (e - p)) : n
          }(e))
        }

        function S(e) {
          return m = void 0, g && c ? y(e) : (c = l = void 0, u)
        }

        function N() {
          var e = r(),
            n = h(e);
          if (c = arguments, l = this, f = e, n) {
            if (void 0 === m) return function(e) {
              return p = e, m = setTimeout(x, t), v ? y(e) : u
            }(f);
            if (b) return clearTimeout(m), m = setTimeout(x, t), y(f)
          }
          return void 0 === m && (m = setTimeout(x, t)), u
        }
        return t = s(t) || 0, a(n) && (v = !!n.leading, d = (b = "maxWait" in n) ? i(s(n.maxWait) || 0, t) : d, g = "trailing" in n ? !!n.trailing : g), N.cancel = function() {
          void 0 !== m && clearTimeout(m), p = 0, c = f = l = m = void 0
        }, N.flush = function() {
          return void 0 === m ? u : S(r())
        }, N
      }
    },
    3221: e => {
      e.exports = function(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
      }
    },
    1285: e => {
      e.exports = function(e) {
        return null != e && "object" == typeof e
      }
    },
    5495: (e, t, n) => {
      var a = n(2002),
        r = n(1285);
      e.exports = function(e) {
        return "symbol" == typeof e || r(e) && "[object Symbol]" == a(e)
      }
    },
    6354: (e, t, n) => {
      var a = n(1983);
      e.exports = function() {
        return a.Date.now()
      }
    },
    3330: (e, t, n) => {
      var a = n(9680),
        r = n(3221),
        s = n(5495),
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
        e = a(e);
        var n = o.test(e);
        return n || c.test(e) ? l(e.slice(2), n ? 2 : 8) : i.test(e) ? NaN : +e
      }
    },
    9228: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        Card: () => L.Card,
        CardExpanded: () => a.Z,
        CardHeader: () => r.Z,
        CardWithImageGallery: () => L.CardWithImageGallery,
        CardWrapper: () => s.Z,
        CoverCard: () => L.CoverCard,
        Deck: () => L.Deck,
        EventsDeck: () => P,
        LayeredImageFrame: () => i.Z,
        LinkoutWrapper: () => o.Z,
        TextCard: () => L.TextCard,
        TextOverlay: () => c.Z,
        ThumbsGalleryOrThumb: () => l.Z
      });
      var a = n(2794),
        r = n(1581),
        s = n(3684),
        i = n(9361),
        o = n(2174),
        c = n(4111),
        l = n(8811),
        d = n(4932),
        u = n(2816),
        m = n.n(u),
        f = n(8976),
        p = n(420),
        v = n.n(p),
        b = n(9542),
        g = n(6711),
        y = n(9929),
        h = n(3614),
        x = n(3653),
        S = n.n(x),
        N = n(4859),
        k = n(3385);
      var _ = n(559);
      const w = (e, t) => {
          let n = getComputedStyle(e).getPropertyValue(t);
          return n = n.replace("px", "").replace("rem", "").replace("em", ""), n = n.replace("vh", "").replace("vw", "").replace("vmin", "").replace("vmax", ""), n = n.replace("ms", "").replace("s", ""), Number(n)
        },
        T = e => ({
          x: void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
          y: void 0 !== e.changedTouches ? e.changedTouches[0].screenY : e.screenY
        }),
        $ = e => e.scrollHeight > e.clientHeight;
      var E = n(6160);

      function M(e, t) {
        const n = {
          ...e
        };
        return S().forOwn(e, ((e, a) => {
          if ("image" === a) {
            const e = n[a];
            n[a] = {
              ...e,
              prod: t
            }
          } else S().isObject(e) && !S().isArray(e) ? M(e, t) : S().isArray(e) && (n[a] = e.map((e => S().isObject(e) ? M(e, t) : e)))
        })), n
      }
      const C = (0, y.withTranslations)((e => {
          let {
            active: t,
            styles: n,
            title: a,
            itemNumber: r,
            inModalMode: s,
            openModalMode: i,
            element: o,
            upNext: c,
            mobileMode: l,
            refDeck: u,
            components: p,
            tina: v,
            prevPage: y,
            nextPage: h,
            transitionStyle: x,
            selectedItemNumber: S,
            carouselTitle: N,
            sharedDraggingDelta: k,
            setSharedDraggingDelta: C
          } = e;
          const {
            track: j
          } = (0, g.useGtmTrack)(), D = (0, d.createRef)(), P = (0, d.createRef)(), L = (0, d.createRef)(), I = (0, d.createRef)(), B = (0, d.createRef)(), [O, W] = (0, d.useState)(!1), [H, z] = (0, d.useState)(0), [R, G] = (0, d.useState)(0), [Z, A] = (0, d.useState)(0), [F, V] = (0, d.useState)(0), [U, q] = (0, d.useState)(0), [Y, Q] = (0, d.useState)(!1), [X, J] = (0, d.useState)(0), [K, ee] = (0, d.useState)(0), [te, ne] = (0, d.useState)(0), [ae, re] = (0, d.useState)("700"), [se, ie] = (0, d.useState)(-1), [oe, ce] = (0, d.useState)(0), [le, de] = (0, d.useState)(0), [ue, me] = (0, d.useState)(0), [fe, pe] = (0, d.useState)(!1), [ve, be] = (0, d.useState)(""), [ge, ye] = (0, d.useState)(null), [he, xe] = (0, d.useState)(!1), [Se, Ne] = (0, d.useState)(null), [ke, _e] = (0, d.useState)(!1), [we, Te] = (0, d.useState)(!1), $e = (0, b.useTinaPayload)(), Ee = v?.payload?.meta?.cdn ?? !1 ?? $e?.meta?.prod ?? !1, Me = (0, b.useTranslations)({
            payload: v?.payload,
            variables: v?.variables
          }), Ce = Me?.meta ?? {}, je = M(Me?.content?.[0], Ee), De = (0, d.useMemo)((() => je?.images?.[0]?.image?.badge), [je]), Pe = (0, d.useMemo)((() => a ?? Ce?.title), [a, Ce?.title]), Le = (0, _.useImageParser)({
            alt: je?.images?.[0]?.image?.alt ?? "",
            ariaLabel: je?.images?.[0]?.image?.alt ?? "",
            sources: je?.images?.[0]?.image?.sources ?? [],
            prod: Ee
          }), Ie = Le?.src?.mobile ?? !1, Be = (0, d.useMemo)((() => Ce?.foreignId), [Ce]), Oe = (0, d.useMemo)((() => Ce?.foreignTitle), [Ce]), [We, He] = (0, d.useState)(0), [ze, Re] = (0, d.useState)(0), [Ge, Ze] = (0, d.useState)(0), [Ae, Fe] = (0, d.useState)(0), [Ve, Ue] = (0, d.useState)(!1), [qe, Ye] = (0, d.useState)(0), [Qe, Xe] = (0, d.useState)(20), [Je, Ke] = (0, d.useState)(null), [et, tt] = (0, d.useState)(!1), nt = (0, d.useCallback)((e => {
            if (!0 === Y || !s && !l || he) return;
            const t = T(e);
            He(t.x), Re(t.y)
          }), [Y, s]), at = e => {
            nt(e)
          }, rt = e => {
            if (!0 === Y || 0 === We || !s && !l || he) return;
            const t = T(e),
              n = t.x > We ? 1 : -1,
              a = Math.abs(We - t.x);
            s && !l && a > Qe ? (tt(!0), be(n > 0 ? "prev" : "next"), it()) : (Ue(!0), Ye(a * n), C(a * n))
          }, st = e => {
            if (!0 === Y || !s && !l || he) return;
            const t = T(e),
              n = t.x > We ? 1 : -1,
              a = Math.abs(We - t.x),
              r = Math.abs(ze - t.y);
            s && !l ? (it(), be("")) : a > Qe && r < 25 ? (tt(!0), be(n > 0 ? "prev" : "next"), it()) : it()
          }, it = () => {
            Q(!0), He(0), Re(0), Ue(!1), Ye(0), C(0)
          };
          return (0, d.useEffect)((() => {
            let e = X;
            O ? e = 0 : s && !l && (e = X), z(e)
          }), [O, l, s, R, F, K, te, Z, X]), (0, d.useEffect)((() => {
            W(!(!s || !l))
          }), [s, l]), (0, d.useEffect)((() => {
            s && t && j({
              event: "virtualPageview",
              display_type: l ? "mobile" : "desktop",
              view_name: `${Be}/${Pe}`,
              source_content_id: Be,
              source_content_name: Oe
            })
          }), [s, t]), (0, d.useEffect)((() => {
            const e = m()(((e, t) => {
              let n = 18;
              if (e?.documentElement && (n = w(e?.documentElement, "--root-font-size")), le !== t.innerHeight && de(t.innerHeight), u?.current) {
                ne(w(u.current, "--eventDeck-marginSm") * n);
                const e = n * w(u?.current, "--eventDeck-modalGutters"),
                  a = t?.innerWidth,
                  r = a - 2 * e;
                G(r), I.current && l && A(r), V(w(u.current, "--eventDeck-itemSize") * n), me(w(u.current, "--eventDeck-phaseOneTransitionDuration"));
                const s = w(u?.current, "--eventDeck-itemImageTitleMargins") * n,
                  i = P?.current?.clientHeight,
                  o = i + s;
                Number.isNaN(o) || J(o), ce(w(u?.current, "--eventDeck-headerHeight") * n)
              }
              let a = Math.min(700, t.innerWidth);
              l || (a = 900), re(`${a}`)
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
            if (s && l && I.current && (I.current.style.transform = "scale(1) translate3d(0, 0, 0)"), !s && l && I.current) {
              const e = 228 / R;
              I.current.style.transform = `scale(${e}) translate3d(0, 0, 0)`
            }!l && I.current && (I.current.style.transform = null)
          }), [s, l, R, Z]), (0, d.useEffect)((() => {
            const e = .5 * R,
              t = le - oe - 3 * te;
            q(R - (e < t ? e : t))
          }), [R, te, le]), (0, d.useEffect)((() => {
            "next" === ve ? (h(null, !0), be("")) : "prev" === ve && (y(null, !0), be(""))
          }), [ve]), (0, d.useEffect)((() => {
            Ze(0), Fe(0)
          }), [l]), (0, d.useEffect)((() => {
            l ? Xe(s ? 35 : 20) : s && Xe(50)
          }), [s, l]), (0, d.useEffect)((() => {
            let e = [],
              t = 0,
              a = 0;
            if (null !== n?.transform) {
              e = n.transform.split(",");
              const r = e[0].split("(");
              t = Number(r[1].replace("px", "")), Ze(t), a = Number(e[1].replace("px", "")), Fe(a)
            }
          }), [n]), (0, d.useEffect)((() => {
            if (!Y) return;
            clearTimeout(ge);
            const e = setTimeout((() => {
              Q(!1), He(0)
            }), 200);
            ye(e)
          }), [Y, 200]), (0, d.useEffect)((() => {
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
            B.current ? _e($(B.current)) : _e(!1), void 0 !== o && o.current ? Te($(o.current)) : Te(!1)
          }), [o, B, t, s, fe]), je ? (0, E.jsxs)("div", {
            className: "d82452706eccb7b8fde59cc0b211a74fd79f",
            ref: o,
            "data-item-position": r,
            "data-modal-mode": s,
            "data-active-item": t,
            "data-up-next": c,
            "data-transition": Ve || 0 !== k ? "none" : x,
            "data-scrollable": we,
            style: {
              ...n,
              transform: s && t && !l ? `translate3d(${Ge+qe}px, ${Ae}px, 0)` : l && !s ? `translate3d(${Ge+k}px, ${Ae}px, 0)` : n?.transform
            },
            onClick: e => {
              et || (s ? s && !l && (r < S ? y(e, !0) : r > S && h(e, !0)) : i(e))
            },
            onMouseEnter: () => {
              s || W(!0), s || l || (clearTimeout(se), ie(setTimeout((() => {
                j({
                  event: "card_title_hover",
                  event_category: "card",
                  event_action: "title_hover",
                  event_label: N,
                  card_name: Pe,
                  card_id: r,
                  position: r,
                  view_name: `${Be}/${Oe}`,
                  source_content_id: Be,
                  source_content_name: Oe
                })
              }), 1e3)))
            },
            onMouseLeave: () => {
              s || W(!1), s || l || clearTimeout(se)
            },
            onTouchStart: at,
            onTouchMove: rt,
            onTouchEnd: st,
            onMouseDown: at,
            onMouseMove: rt,
            onMouseUp: st,
            tabIndex: -1,
            role: "presentation",
            children: [(0, E.jsxs)("div", {
              className: "d82452706eccb7b8fa238bf7612b7724abaa",
              "data-full-header": O,
              ref: L,
              style: {
                height: s && l ? `${R}px` : null,
                width: s && l ? `${R}px` : null
              },
              children: [Ie && (0, E.jsx)("img", {
                ref: I,
                src: `${Le?.src?.mobile}?im=Resize,width=${ae}`,
                alt: Le?.alt,
                style: {
                  width: 0 !== Z && l ? `${Z}px` : null,
                  height: 0 !== Z && l ? `${Z}px` : null
                }
              }), (0, E.jsxs)("div", {
                className: "d82452706eccb7b8d21f276146dec1dcf842",
                style: {
                  transform: !l || l && s ? `translate3d(0, ${H}px, 0)` : null
                },
                children: [De && (0, E.jsx)("div", {
                  className: "d82452706eccb7b8d9c130714618614ef63c",
                  ref: D,
                  children: (0, E.jsx)(f.Badge, {
                    text: De
                  })
                }), (0, E.jsx)("span", {
                  className: "d82452706eccb7b8e056f0aa82c811cbadda",
                  ref: P,
                  "aria-hidden": s,
                  children: Pe
                })]
              })]
            }), (0, E.jsxs)("div", {
              className: "d82452706eccb7b8f4efaa263cba6ec12f58",
              ref: B,
              onScroll: () => {
                xe(!0), it(), clearTimeout(Se);
                const e = setTimeout((() => {
                  xe(!1)
                }), 100);
                Ne(e)
              },
              style: {
                top: s && l ? `${R}px` : null,
                width: s && !l && t ? `${U}px` : null,
                touchAction: ke || l ? "unset" : "none"
              },
              children: [Pe && (0, E.jsx)("span", {
                className: "d82452706eccb7b8d784a6def5f96306e977",
                children: Pe
              }), (0, E.jsx)("div", {
                className: "d82452706eccb7b8b98f5b22300490f3feb8",
                children: (0, E.jsx)(b.TinaParser, {
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
        j = "d82452706eccb7b8cb22b2530b90ee356a13",
        D = e => {
          let {
            prevPage: t,
            prevBtnDisabled: n,
            nextPage: a,
            nextBtnDisabled: r,
            selectedItemNumber: s,
            itemsData: i,
            closeModalMode: o,
            inModalMode: c
          } = e;
          return (0, E.jsxs)(E.Fragment, {
            children: [(0, E.jsxs)("div", {
              className: "d82452706eccb7b8faa5acf4b727e1382599",
              children: [(0, E.jsx)("button", {
                className: j,
                type: "button",
                onClick: t,
                disabled: n,
                "aria-label": "Previous"
              }), (0, E.jsxs)("span", {
                className: "d82452706eccb7b8dacf520118176355e3f9",
                "aria-hidden": !c,
                "aria-label": `On page ${s+1} of ${i.length}`,
                children: [s + 1, (0, E.jsx)("span", {
                  className: "d82452706eccb7b8f75c0ab96a4285c2dea2"
                }), i.length]
              }), (0, E.jsx)("button", {
                className: j,
                type: "button",
                onClick: a,
                disabled: r,
                "aria-label": "Next"
              })]
            }), (0, E.jsx)("button", {
              className: "d82452706eccb7b8fd85da563bb161a9949a",
              type: "button",
              onClick: o,
              "aria-label": "Close",
              "aria-hidden": !c
            })]
          })
        },
        P = e => {
          const {
            setBodyIsScrollable: t
          } = (0, y.useBodyScrollable)(), {
            title: n
          } = e, a = e?._memoq?.title || n, {
            track: r
          } = (0, g.useGtmTrack)(), [s, i] = (0, d.useState)(!1), o = (() => {
            const {
              data: e
            } = (0, N.useQuery)(k.TinaModulesList, {
              variables: {
                type: "gtao-event-card",
                orderBy: "priority",
                orderDirection: "desc"
              }
            }), t = e?.tinaModulesList?.results, n = S().map(t, "id");
            return (0, f.useTinaModuleFetchByIds)({
              ids: n
            })
          })(), [c, l] = (0, d.useState)([]), [u, p] = (0, d.useState)(null), [x, _] = (0, d.useState)(0), [$, M] = (0, d.useState)(window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth), [j, P] = (0, d.useState)(!1), L = (0, d.createRef)(), [I, B] = (0, d.useState)(null), O = (0, d.createRef)(), W = (0, d.createRef)(), [H, z] = (0, d.useState)([]), [R, G] = (0, d.useState)(!0), [Z, A] = (0, d.useState)(!1), [F, V] = (0, d.useState)([]), [U, q] = (0, d.useState)(404), [Y, Q] = (0, d.useState)(808), [X, J] = (0, d.useState)(672), [K, ee] = (0, d.useState)(336), [te, ne] = (0, d.useState)(0), [ae, re] = (0, d.useState)(0), [se, ie] = (0, d.useState)(0), [oe, ce] = (0, d.useState)(0), [le, de] = (0, d.useState)(0), [ue, me] = (0, d.useState)(!1), [fe, pe] = (0, d.useState)(window.innerWidth), [ve, be] = (0, d.useState)(0), [ge, ye] = (0, d.useState)(0), [he, xe] = (0, d.useState)(0), [Se, Ne] = (0, d.useState)(0), [ke, _e] = (0, d.useState)(0), [we, Te] = (0, d.useState)(0), [$e, Ee] = (0, d.useState)(0), [Me, Ce] = (0, d.useState)(-1e3), [je, De] = (0, d.useState)(0), [Pe, Le] = (0, d.useState)(50), [Ie, Be] = (0, d.useState)(0), [Oe, We] = (0, d.useState)(!1), [He, ze] = (0, d.useState)(768), [Re, Ge] = (0, d.useState)(!1), [Ze, Ae] = (0, d.useState)(!1), [Fe, Ve] = (0, d.useState)(!1), [Ue, qe] = (0, d.useState)(!1), [Ye, Qe] = (0, d.useState)(!1), [Xe, Je] = (0, d.useState)(1e3), [Ke, et] = (0, d.useState)(1.2), [tt, nt] = (0, d.useState)(0), [at, rt] = (0, d.useState)(!1), [st, it] = (0, d.useState)(!1), [ot, ct] = (0, d.useState)(!0), [lt, dt] = (0, d.useState)(!1), [ut, mt] = (0, d.useState)(!1), [ft, pt] = (0, d.useState)(null), [vt, bt] = (0, d.useState)(100), [gt, yt] = (0, d.useState)(!1), [ht, xt] = (0, d.useState)({}), [St, Nt] = (0, d.useState)(""), [kt, _t] = (0, d.useState)(0), [wt, Tt] = (0, d.useState)(!1), [$t, Et] = (0, d.useState)(!1), [Mt, Ct] = (0, d.useState)(0), [jt, Dt] = (0, d.useState)(0), [Pt, Lt] = (0, d.useState)(100), [It, Bt] = (0, d.useState)(!1), [Ot, Wt] = (0, d.useState)(!1), Ht = () => fe * ve + Pe, zt = () => !1 === Oe ? Ke : 1, Rt = e => e === ke - 1 || e === ke + 1, Gt = () => -1 * Se, Zt = function(e) {
            let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (!0 === Oe) return 0;
            const n = e.itemNumber % 2 == 0,
              a = U * Ke;
            if (!0 === n && 0 !== e.itemNumber) {
              const n = w(e?.element?.current, "top");
              let r = n - se;
              return !1 === t && (r -= n), -1 * (.5 * a + r) + tt
            }
            return se - .5 * a + tt
          }, At = function(e, t) {
            let n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              a = Gt();
            !1 === n && (a = 0);
            const r = fe * ve,
              s = !1 === Oe ? U * zt() : r;
            return e.inModalMode && Oe ? -1 === t ? Ht() * (ke - e.itemNumber) * -1 - e.styles.left : Ht() * (e.itemNumber - ke) - e.styles.left : -1 === t ? -1 * e.styles.left - s - Pe + a : r - e.styles.left + Pe + a
          }, Ft = (e, t, n) => {
            -1 === t && (A(!1), G(!0)), A(!1 === n && e >= t || !0 === n && e + 1 === t), G(e <= 0)
          }, Vt = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (ut || lt) return;
            if (mt(!0), ue) return void
            function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (ke + 1 >= c.length) return;
              const t = H[ke + 1]?.tina?.payload?.meta?.title ?? `card-${ke+1}`;
              r({
                event: e ? "modal_swipe" : "modal_next",
                event_category: "modal",
                event_action: e ? "swipe" : "next",
                event_label: n,
                card_name: t,
                card_id: ke + 1,
                position: ke + 1,
                view_name: `${H[ke+1].source_content_id}/${t}`,
                source_content_id: H[ke + 1].source_content_id,
                source_content_name: H[ke + 1].source_content_name
              }), Ft(ke + 1, c.length, !0), Oe ? Oe && z(H.map((e => {
                e.itemNumber === ke - 1 ? e.upNext = !1 : e.itemNumber === ke + 2 ? e.upNext = !0 : e.itemNumber === ke + 1 ? e.active = !0 : e.itemNumber === ke && (e.upNext = !0, e.active = !1);
                const t = e.styles.transform.replace("translate3d(", "").split(",");
                let n = Number(t[0].replace("px", ""));
                n -= Ht();
                const a = `translate3d(${n}px,${t[1]},${t[2]}`;
                return e.styles = {
                  ...e.styles,
                  transform: a
                }, e
              }))) : z(H.map((e => (e.itemNumber === ke - 1 ? e.upNext = !1 : e.itemNumber === ke + 2 ? e.upNext = !0 : e.itemNumber === ke + 1 ? (e.active = !0, e.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${Gt()}px, ${tt}px, 0) scale(1)`
              }) : e.itemNumber === ke && (e.upNext = !0, e.active = !1, e.styles = {
                ...e.styles,
                transform: `translate3d(${At(e,-1)}px, ${Zt(e)}px, 0) scale(${zt()})`
              }), e)))), _e(ke + 1)
            }(t);
            const a = he + 1;
            if (!(a > le))
              if (r({
                  event: t ? "carousel_swipe" : "carousel_next",
                  event_category: "carousel",
                  event_action: t ? "swipe" : "next",
                  event_label: n
                }), Ft(a, le, !1), Oe) {
                let e = a * K * -1;
                e < Me && (e = Me, A(!0), G(!1), xe(le)), xe(a), z(H.map((t => (t.styles = {
                  ...t.styles,
                  transform: `translate3d(${e}px, 0, 0)`
                }, t))))
              } else {
                let e = Se - ae;
                0 === Se && (e = -1 * X), xe(a), e < Me && (e = Me, A(!0), G(!1), xe(le)), Ne(e)
              }
          }, Ut = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (ut || lt) return;
            if (mt(!0), !0 === ue) return void
            function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (ut) return;
              if (ke - 1 < 0) return;
              const t = H[ke - 1]?.tina?.payload?.meta?.title ?? "card-" + (ke - 1);
              r({
                event: e ? "modal_swipe" : "modal_previous",
                event_category: "modal",
                event_action: e ? "swipe" : "previous",
                event_label: n,
                card_name: t,
                card_id: ke - 1,
                position: ke - 1,
                view_name: `${H[ke-1].source_content_id}/${t}`,
                source_content_id: H[ke - 1].source_content_id,
                source_content_name: H[ke - 1].source_content_name
              }), Ft(ke - 1, c.length, !0), Oe || z(H.map((e => (e.itemNumber === ke + 1 ? e.upNext = !1 : e.itemNumber === ke - 2 ? e.upNext = !0 : e.itemNumber === ke ? (e.upNext = !0, e.active = !1, e.styles = {
                ...e.styles,
                transform: `translate3d(${At(e,1)}px, ${Zt(e)}px, 0) scale(${zt()})`
              }) : e.itemNumber === ke - 1 && (e.active = !0, e.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${Gt()}px, ${tt}px, 0) scale(1)`
              }), e)))), Oe && z(H.map((e => {
                e.itemNumber === ke + 1 ? e.upNext = !1 : e.itemNumber === ke - 2 ? e.upNext = !0 : e.itemNumber === ke ? (e.upNext = !0, e.active = !1) : e.itemNumber === ke - 1 && (e.active = !0);
                const t = e.styles.transform.replace("translate3d(", "").split(",");
                let n = Number(t[0].replace("px", ""));
                n += Ht();
                const a = `translate3d(${n}px,${t[1]},${t[2]}`;
                return e.styles = {
                  ...e.styles,
                  transform: a
                }, e
              }))), _e(ke - 1)
            }(t);
            const a = he - 1;
            if (!(a < 0))
              if (r({
                  event: t ? "carousel_swipe" : "carousel_previous",
                  event_category: "carousel",
                  event_action: t ? "swipe" : "previous",
                  event_label: n
                }), Ft(a, le, !1), Oe) {
                let e = a * K * -1;
                e > 0 && (e = 0, G(!0), A(!1), xe(0)), xe(a), z(H.map((t => (t.styles = {
                  ...t.styles,
                  transform: `translate3d(${e}px, 0, 0)`
                }, t))))
              } else {
                let e = Se + ae;
                xe(a), (e > 0 || 0 === e || -1 * e < Y) && (e = 0, G(!0), A(!1), xe(0)), Ne(e), z(H.map((t => (t.styles = {
                  ...t.styles,
                  transform: `translate3d(${e}px, 0, 0)`
                }, t))))
              }
          }, qt = e => {
            if (wt || ue || Oe) return;
            const t = T(e);
            _t(t.x)
          }, Yt = e => {
            if (wt || 0 === kt || ue || Oe) return;
            const t = T(e),
              n = t.x > kt ? 1 : -1;
            let a = Math.abs(kt - t.x) * n;
            (0 === he && 1 === n || he === le && -1 === n) && (a *= .35), Et(!0), Ct(a)
          }, Qt = e => {
            if (wt || ue || Oe) return;
            const t = T(e),
              n = t.x > kt ? 1 : -1,
              a = Math.abs(kt - t.x);
            Nt(a > Pt ? n > 0 ? "prev" : "next" : ""), Xt()
          }, Xt = () => {
            Tt(!0), _t(0), Ct(0), Et(!1)
          }, Jt = e => {
            $t && (Qt(e), Et(!1))
          }, Kt = function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            return e.map(((e, a) => {
              let r = a * K,
                s = a;
              !1 === Oe && (s = Math.ceil(.5 * a) + 1, a > 0 && (r = 2 === s ? X : X + K * (s - 2)));
              const i = F[a];
              return i?.current && (i.current.scrollTop = 0), {
                ...e,
                mobileMode: Oe,
                itemNumber: a,
                columnNumber: s,
                inModalMode: !1,
                upNext: !0,
                active: !1,
                openModalMode: tn,
                element: i,
                transitionStyle: t,
                styles: {
                  left: r,
                  transform: "" === n ? null : n,
                  height: null,
                  top: null
                }
              }
            }))
          }, en = () => {
            const e = H[ke]?.tina?.payload?.meta?.title ?? `card-${ke}`;
            if (r({
                event: "modal_close",
                event_category: "modal",
                event_action: "close",
                event_label: n,
                card_name: e,
                card_id: ke,
                position: ke,
                view_name: `${H[ke].source_content_id}/${e}`,
                source_content_id: H[ke].source_content_id,
                source_content_name: H[ke].source_content_name
              }), Oe) {
              let e = ke * K * -1;
              e < Me && (e = Me, A(!0), G(!1), xe(le)), xe(ke), Ft(ke, le, !1), z(Kt(c, "cardClose", `translate3d(${e}px, 0, 0)`))
            } else {
              z(Kt(c, "cardClose"));
              const e = Math.ceil((H[ke].columnNumber + 1) / te) - 1;
              xe(e);
              let t = e * ae * -1;
              Ie < ge ? (t = 0, G(!0), A(!0), xe(0)) : t < Me ? (t = Me, G(!1), A(!0), xe(le)) : Ft(e, le, !1), Ne(t), _e(0)
            }
            O.current.style.transform = "translateY(0px)", O.current.style.transition = "all var(--eventDeck-transitionCardClose)", rt(!1), qe(!1), me(!1), Ae(!1), Ge(!1), Qe(!1), setTimeout((() => {
              Ve(!0)
            }), Xe)
          };
          (0, d.useEffect)((() => {
            !1 !== Fe && (Ve(!1), rt(!1), I.style.zIndex = null, z(H.map((e => (e.transitionStyle = "", e)))))
          }), [Fe]);
          const tn = e => {
            setTimeout((() => {
              xt(e), yt(!0)
            }), 1)
          };
          (0, d.useEffect)((() => {
            if (!gt) return;
            if (yt(!1), ut) return;
            _e(Number(ht.target.dataset.itemPosition)), Ae(!0), dt(!0), ot && ct(!1);
            const e = H[ht.target.dataset.itemPosition].source_content_id,
              t = H[ht.target.dataset.itemPosition].source_content_name,
              a = H[ht.target.dataset.itemPosition]?.tina?.payload?.meta?.title;
            r({
              event: "card_click",
              event_category: "card",
              event_action: "click",
              event_label: n,
              card_name: a ?? `card-${ke}`,
              card_id: ht.target.dataset.itemPosition,
              position: ht.target.dataset.itemPosition,
              view_name: `${e}/${a}`,
              source_content_id: e,
              source_content_name: t
            })
          }), [gt]), (0, d.useEffect)((() => {
            if (!Ze || ue) return;
            Ae(!1);
            const e = (() => {
              const e = I?.getBoundingClientRect().top;
              return nt(-1 * (e - x)), -1 * (e - 140)
            })();
            Oe && z(H.map((e => {
              const t = e.itemNumber > ke + 3 || e.itemNumber < ke - 3;
              return e.styles = {
                ...e.styles,
                display: t ? "none" : null,
                transition: t ? "none" : null
              }, e
            }))), I.style.zIndex = "101", rt(!0), O.current && (O.current.style.transition = "all var(--eventDeck-transitionCardOpen)", O.current.style.transform = `translateY(${e}px)`), qe(!0), setTimeout((() => {
              Ge(!0)
            }), 1)
          }), [Ze]);
          const nn = () => {
            z(H.map(((e, t) => {
              e.active = t === ke, e.inModalMode = !0, e.transitionStyle = "cardOpen", Oe && (e.upNext = Rt(e.itemNumber));
              const n = !Oe;
              let a = 0;
              if (Oe) {
                const e = we + 5 * x;
                a = window.innerHeight - e
              }
              return e.itemNumber < ke ? e.styles = {
                ...e.styles,
                height: Oe ? `${a}px` : null,
                transform: `translate3d(${At(e,-1,n)}px, ${tt}px, 0) scale(${zt()})`
              } : e.itemNumber > ke ? e.styles = {
                ...e.styles,
                height: Oe ? `${a}px` : null,
                transform: `translate3d(${At(e,1,n)}px, ${tt}px, 0) scale(1)`
              } : e.itemNumber === ke && (e.styles = Oe ? {
                ...e.styles,
                height: `${a}px`,
                transform: `translate3d(${-1*e.styles.left}px, ${tt}px, 0) scale(1)`
              } : {
                left: 0,
                top: 0,
                transform: `translate3d(${Gt()}px, ${tt}px, 0) scale(1)`
              }), e
            })))
          };
          (0, d.useEffect)((() => {
            !1 !== Re && !0 !== ue && (me(!0), Ge(!1), Ft(ke, H.length, !0), O.current && (O.current.style.transition = "all var(--eventDeck-transitionCardOpen)", O.current.style.transform = `translateY(${tt}px)`), nn(), Oe ? (Ne(0), dt(!1), it(!0)) : Qe(!0))
          }), [Re]), (0, d.useEffect)((() => {
            st && (it(!1), z(H.map((e => ("none" === e.styles.display && (e.styles.display = null, e.styles.transition = null), e)))))
          }), [st]);
          const an = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            z(H.map((t => {
              if (t.upNext = Rt(t.itemNumber), t.itemNumber !== ke) {
                let e = At(t, 1);
                t.itemNumber < ke && (e = At(t, -1)), t.styles = {
                  ...t.styles,
                  transform: `translate3d(${e}px, ${Zt(t)}px, 0) scale(${zt()})`
                }
              } else t.itemNumber === ke && !Oe && e && (t.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${Gt()}px, ${tt}px, 0) scale(1)`
              });
              return t
            })))
          };
          (0, d.useEffect)((() => {
            !1 !== Ye && !0 !== Oe && (Qe(!1), setTimeout((() => {
              an(), dt(!1)
            }), 1))
          }), [Ye]), (0, d.useEffect)((() => {
            z(Kt(c, ""))
          }), [X, K, c]), (0, d.useEffect)((() => {
            const e = window.navigator?.userAgentData?.platform || window.navigator?.platform;
            Bt(["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(e))
          }), []), (0, d.useEffect)((() => {
            ue ? (t(!1), It && Wt(!0)) : $t || ue || (t(!0), It && Ot && Wt(!1))
          }), [ue, $t]), (0, d.useEffect)((() => {
            if (!ut) return;
            clearTimeout(ft);
            const e = setTimeout((() => {
              mt(!1)
            }), vt);
            pt(e)
          }), [ut]), (0, d.useEffect)((() => {
            j && setTimeout((() => {
              P(!1)
            }), 3e3)
          }), [j]), (0, d.useEffect)((() => {
            P(!0), Ne(0), xe(0);
            let e = Math.ceil(Math.ceil(Ie / K) / te);
            Oe && (e = H.length - 1), e < 0 && (e = 1), Ft(0, e, !1), ue && en()
          }), [Oe]), (0, d.useEffect)((() => {
            O.current && !ue && (O.current.style.transform = "")
          }), [O, Oe, ue]), (0, d.useEffect)((() => {
            const e = (o ?? []).map((e => ({
              ...e,
              source_content_id: e?.tina?.payload?.meta?.foreignId,
              source_content_name: e?.tina?.payload?.meta?.foreignTitle,
              view_name: `${e?.tina?.payload?.meta?.foreignId}/${e?.tina?.payload?.meta?.foreignTitle}`
            })));
            l(e)
          }), [o]), (0, d.useEffect)((() => {
            V(c.map((() => (0, d.createRef)())))
          }), [c]), (0, d.useEffect)((() => {
            const e = e => {
              const {
                key: t
              } = e;
              "ArrowLeft" === t ? Ut(null, !1) : "ArrowRight" === t && Vt(null, !1)
            };
            return document.addEventListener("keydown", e), () => {
              document.removeEventListener("keydown", e)
            }
          }), [ut, lt, ue]), (0, d.useEffect)((() => {
            if (O.current) {
              let e = 0;
              e = O?.current?.clientHeight, e += w(O?.current, "margin-top"), e += w(O?.current, "margin-bottom"), Te(e)
            }
          }), [O, W]), (0, d.useEffect)((() => {
            ue && (() => {
              const e = I?.getBoundingClientRect().top,
                t = -1 * (e - x);
              if (z(H.map((e => {
                  if (e.styles.transform) {
                    const n = e.styles.transform.split(","),
                      a = `${n[0]}, ${t}px,${n[2]}`;
                    e.styles = {
                      ...e.styles,
                      transform: a
                    }
                  }
                  return e
                }))), O.current) {
                const t = -1 * (e - x);
                O.current.style.transform = `translateY(${t}px)`
              }
            })()
          }), [Oe, ue, tt]), (0, d.useEffect)((() => {
            Ie < ve * fe && 0 === he ? (Ne(0), A(!0), G(!0)) : Se < Me ? (A(!0), G(!1), xe(le), Ne(Me)) : Se < 0 && (A(!1), xe(le - 1)), Ie > ve * fe && Z && A(!1)
          }), [Me]), (0, d.useEffect)((() => {
            if (L.current) {
              B(L.current);
              const e = w(document.documentElement, "--root-font-size"),
                t = w(L.current, "--eventDeck-modalGutters") * e;
              Ee(t);
              const n = fe - 2 * t;
              ye(n), be(n / fe);
              let a = w(L.current, "--eventDeck-modalBottomGutter");
              a *= e;
              const r = window.innerHeight - (we + a);
              ie(.5 * n < r ? n / 4 : .5 * r);
              const s = w(L.current, "--eventDeck-mobileBreakpoint");
              ze(s);
              let i = w(L.current, "--eventDeck-itemSize");
              i *= e, q(i);
              let o = w(L.current, "--eventDeck-modalGutterGap");
              o *= e, Le(o);
              let l = w(L.current, "--eventDeck-insideMargin");
              l *= e;
              const d = !1 === Oe ? 2 * i + l : i + l;
              Q(d), J(d + l);
              const m = i + l;
              ee(m);
              let f = Math.ceil(.5 * (c.length - 1)) * m + d;
              Oe && (f = c.length * m), Be(f), 0 !== Ie && Ce(-1 * Ie + n);
              let v = Math.ceil(Math.ceil(f / m) / te);
              (Oe || ue) && (v = H.length - 1), de(v);
              const b = w(L.current, "--eventDeck-itemScaleUpAmount");
              et(b), Je(w(L.current, "--eventDeck-cardCloseTransitionDuration")), _(w(L.current, "--eventDeck-itemImageTitleMargins") * e), null !== u && e !== u && (p(e), ue && an()), null === u && p(e)
            }
          }), [L, c]), (0, d.useEffect)((() => {
            if (ue && !Oe) {
              an();
              const e = I?.getBoundingClientRect().top,
                t = -1 * (e - x);
              t !== tt && nt(t)
            }
          }), [$]), (0, d.useEffect)((() => {
            const e = m()((e => {
              pe(e), We(e < He);
              const t = (1 - ve) / 2;
              De(e * t);
              const n = e - 2 * $e,
                a = Math.round(n / K);
              ne(a), re(a * K), ce(e - e * t);
              const r = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth;
              if (r !== $ && M(r), ue && r === $ && !j) {
                const e = I?.getBoundingClientRect().top,
                  t = -1 * (e - x);
                t !== tt && nt(t)
              }
            }), 300);
            return window.addEventListener("resize", (() => {
              e(window.innerWidth)
            })), window.addEventListener("scroll", (() => {
              ue && Oe && e(window.innerWidth)
            })), e(window.innerWidth), () => {
              window.removeEventListener("resize", (() => {
                e(window.innerWidth)
              }))
            }
          }), [K, ve, ue, Oe]), (0, d.useEffect)((() => {
            !1 !== ue && !0 !== j && (Oe ? nn() : an(!0))
          }), [oe, ae, Pe, U, fe, je, se, tt]), (0, d.useEffect)((() => {
            const e = () => {
              if (L.current && ot) {
                const e = L.current.getBoundingClientRect(),
                  t = .2 * window.innerHeight;
                window.innerHeight - e.top >= t && ct(!1)
              }
            };
            return e(), window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
          }), [L]);
          const rn = (0, d.useCallback)((() => {
            if (null !== L.current && !s) {
              const {
                top: e
              } = L?.current?.getBoundingClientRect() || 0;
              e <= .6 * window.innerHeight && (r({
                event: "page_section_impression",
                event_action: "impression",
                event_category: "page_section",
                event_label: n
              }), i(!0))
            }
          }), [L]);
          (0, d.useEffect)((() => (window.addEventListener("scroll", rn), () => {
            window.removeEventListener("scroll", rn)
          })), [rn, L]), (0, d.useEffect)((() => {
            "next" === St ? (Vt(null, !0), Nt("")) : "prev" === St && (Ut(null, !0), Nt(""))
          }), [St]), (0, d.useEffect)((() => {
            L.current && L.current.addEventListener("mouseleave", (() => {
              $t && Xt()
            }))
          }), [L, $t]), (0, d.useEffect)((() => (document.body.addEventListener("mouseleave", Jt), () => {
            document.body.removeEventListener("mouseleave", Jt)
          })), [$t]), (0, d.useEffect)((() => {
            wt && setTimeout((() => {
              Tt(!1), _t(0)
            }), vt)
          }), [wt]), (0, d.useEffect)((() => {
            Lt(Oe ? 20 : 100)
          }), [Oe]), (0, d.useEffect)((() => {
            bt(ue ? 500 : 100)
          }), [ue]);
          const sn = (0, b.useTinaComponents)(),
            on = (0, d.useMemo)((() => ({
              ...sn,
              CardWithImageGallery: h.Z,
              HTMLElement: f.HTMLElement,
              ImageWithBadge: f.ImageWithBadge,
              Carousel: f.Carousel,
              GroupOfItems: v(),
              UnorderedList: f.UnorderedList
            })), [sn]),
            cn = (0, d.useMemo)((() => H.map((e => (0, d.createElement)(C, {
              ...e,
              refDeck: L,
              key: e?.id ?? e?.sync_hash,
              components: on,
              prevPage: Ut,
              nextPage: Vt,
              loadCssRawValue: w,
              selectedItemNumber: ke,
              carouselTitle: n,
              sharedDraggingDelta: jt,
              setSharedDraggingDelta: Dt
            })))), [H, L, on, Ut, Vt, ke]);
          return !cn?.length || cn.length <= 0 ? null : (0, E.jsxs)(E.Fragment, {
            children: [(0, E.jsx)("div", {
              className: "d82452706eccb7b8c1b08e0c6762959d6e40",
              "data-modal-mode": Ue,
              "aria-hidden": "true"
            }), (0, E.jsxs)("div", {
              className: "d82452706eccb7b8dd9c11d21c9d76e0f525",
              "data-modal-mode": ue,
              "data-faded": ot,
              ref: L,
              onTouchStart: qt,
              onTouchMove: Yt,
              onTouchEnd: Qt,
              onMouseDown: qt,
              onMouseMove: Yt,
              onMouseUp: Qt,
              tabIndex: -1,
              role: "presentation",
              children: [(0, E.jsxs)("div", {
                className: "d82452706eccb7b8fe4a9770ab07662ba456",
                "data-modal-mode": ue,
                ref: O,
                "data-animating": at,
                children: [(0, E.jsx)("h2", {
                  className: "d82452706eccb7b8bdad5a5a38f931159788",
                  children: a
                }), (0, E.jsx)(D, {
                  prevPage: Ut,
                  prevBtnDisabled: R,
                  nextPage: Vt,
                  nextBtnDisabled: Z,
                  selectedItemNumber: ke,
                  itemsData: c,
                  closeModalMode: en,
                  inModalMode: ue
                })]
              }), (0, E.jsx)("div", {
                className: "d82452706eccb7b8fe13159c37ea559619ab",
                "data-modal-mode": ue,
                "data-is-dragging": $t,
                style: {
                  transform: `translate3d(${Se+Mt}px, 0, 0)`,
                  width: `${Ie}px`
                },
                ref: W,
                children: cn
              })]
            })]
          })
        };
      var L = n(568)
    },
    568: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        Card: () => a.Z,
        CardGrid: () => _,
        CardWithImageGallery: () => M.Z,
        CoverCard: () => E,
        Deck: () => j.Z,
        TextCard: () => C.Z
      });
      var a = n(498),
        r = n(4932),
        s = n(3653),
        i = n.n(s),
        o = n(8976),
        c = n(420),
        l = n.n(c),
        d = n(9542),
        u = n(3684);
      const m = {
        clrCollapsedCard: "d82452706eccb7b8f6b60ed0528262116599",
        cardContainer: "d82452706eccb7b8eb92e279865c9000b72a",
        cardInfo: "d82452706eccb7b8e58bfe52c22f632dc039",
        subtitle: "d82452706eccb7b8a95eca18e1ad770ea596",
        price: "d82452706eccb7b8e48b1713bf2de6b8abc0",
        newBadge: "d82452706eccb7b8b0aca41f30620c3d2493",
        outOfStockBadge: "d82452706eccb7b8c1e731016dcfde4718af",
        saleBadge: "d82452706eccb7b8b7acd2f4b0a9d92d8d5d",
        slashedPrice: "d82452706eccb7b8a6c6824725dc7d6616e6",
        storeInfo: "d82452706eccb7b8eee54d2e0d1b2ce5b7e3",
        priceInfo: "d82452706eccb7b8da4f70065c6b04b9392e",
        cardDesc: "d82452706eccb7b8f45af61905d26c0592eb"
      };
      var f = n(6160);
      const p = e => {
          let {
            videoUrl: t,
            expandedType: n,
            children: a
          } = e;
          return t && "linkout" === n ? (0, f.jsx)(o.A, {
            to: t,
            children: a
          }) : a
        },
        v = e => {
          let {
            className: t,
            cardType: n,
            title: a,
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
                "data-type": n,
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
                    children: a
                  }), i && (0, f.jsx)("h6", {
                    className: m.subtitle,
                    children: i
                  }), "store" === n && (0, f.jsxs)("div", {
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
      var b = n(2174),
        g = n(9361);
      const y = {
          clrCardModalContent: "d82452706eccb7b8de3a11886ff7c7c01a80",
          expandedCard: "d82452706eccb7b8e1a0223a78c9aa470ef6",
          content: "d82452706eccb7b8d104d01f2048b62b51d8",
          details: "d82452706eccb7b8cc5da9e77f92def47e14",
          calloutHeaders: "d82452706eccb7b8ac6438a76bed0e28cf70"
        },
        {
          variants: h
        } = o.framer.Animations,
        x = e => {
          let {
            id: t,
            content: n,
            size: a = "clr",
            cardType: r = "release",
            title: s,
            subheader: i,
            subtitle: o,
            storeInfo: c = {},
            expandedType: l,
            to: m,
            image: p,
            deckProps: x,
            tina: S = {}
          } = e;
          const N = (0, d.useTinaPayload)(),
            k = S?.payload?.meta?.cdn ?? N?.meta?.prod ?? !1,
            _ = {
              image: {
                ...p,
                prod: k
              }
            },
            w = [p];
          return (0, f.jsx)(u.Z, {
            id: t,
            title: s,
            context: "clr-card",
            size: a,
            expandedType: l,
            images: _,
            deckProps: x,
            prod: k,
            modalProps: {
              className: y.clrCardModal,
              contentClassName: y.clrCardModalContent
            },
            variants: h.plainCard,
            payload: {
              content: n
            },
            expandedCardContents: (0, f.jsx)(g.Z, {
              images: w,
              prod: k
            }),
            children: (0, f.jsx)(b.Z, {
              expandedType: l,
              to: m,
              style: {
                display: "flex"
              },
              children: (0, f.jsx)(v, {
                cardType: r,
                title: s,
                subheader: i,
                subtitle: o,
                image: _,
                expandedType: l,
                price: c?.price,
                slashedPrice: c?.slashedPrice,
                badge: c?.badge
              })
            })
          })
        };
      var S = n(4859),
        N = n(3385);

      function k(e, t) {
        const n = {
          ...e
        };
        return i().forOwn(e, ((e, a) => {
          if ("image" === a) {
            const e = n[a];
            n[a] = {
              ...e,
              prod: t
            }
          } else i().isObject(e) && !i().isArray(e) ? k(e, t) : i().isArray(e) && (n[a] = e.map((e => i().isObject(e) ? k(e, t) : e)))
        })), n || []
      }
      const _ = e => {
          let {
            size: t,
            className: n
          } = e;
          const a = (0, d.useTinaComponents)(),
            s = (0, r.useMemo)((() => ({
              ...a,
              HTMLElement: o.HTMLElement,
              ImageWithBadge: o.ImageWithBadge,
              Carousel: o.Carousel,
              Cta: o.Cta,
              GroupOfItems: l(),
              Grid: o.Grid,
              ClrCard: x,
              ClrCollapsedCard: v,
              CalloutSection: o.CalloutSection,
              TrackList: o.TrackList
            })), [a]),
            c = (() => {
              const {
                data: e
              } = (0, S.useQuery)(N.TinaModulesList, {
                variables: {
                  type: "clr-card",
                  locale: "en_us"
                }
              }), t = e?.tinaModulesList?.results, n = i().map(t, "id");
              return (0, o.useTinaModuleFetchByIds)({
                ids: n
              })
            })(),
            u = (0, d.useTinaPayload)(),
            m = (0, r.useMemo)((() => c ? c.reduce(((e, t) => {
              if (t) {
                const {
                  id: n,
                  tina: a
                } = t, r = i().clone(a);
                i().set(r, "payload.meta.id", n);
                const o = r?.payload,
                  c = o?.meta?.cdn ?? !1 ?? u?.meta?.prod ?? !1,
                  l = k(o?.content?.[0], c),
                  m = o?.meta?.title,
                  p = l?._memoq?.subheader,
                  v = l?.image,
                  b = o?.content?.[0].expandedType,
                  g = o?.content?.[0].cardType,
                  y = l?.content ?? [];
                "release" === g && e.push((0, f.jsx)(d.TinaParser, {
                  components: s,
                  tina: r,
                  componentProps: {
                    id: n,
                    tina: r,
                    title: m,
                    subheader: p,
                    image: v,
                    expandedType: b,
                    modalContent: y
                  }
                }, n))
              }
              return e
            }), []) : null), [c, t]);
          return (0, f.jsx)(o.Grid, {
            className: n,
            children: m
          })
        },
        w = {
          customModalContent: "d82452706eccb7b8f348dacb636353b11c51",
          content: "d82452706eccb7b8df95f12ea94658664861",
          secondary: "d82452706eccb7b8ac4425db45829109b6bb",
          logo: "d82452706eccb7b8e0170396b8c6129f37ee"
        },
        {
          variants: T
        } = o.framer.Animations,
        $ = n(5976),
        E = e => {
          let {
            id: t,
            title: n,
            content: a,
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
            [h, x] = (0, r.useState)(l?.size ?? s),
            {
              learnMoreUrl: S,
              body: N
            } = v.content[0]._memoq;
          return (0, r.useEffect)((() => {
            x(l?.size ?? s)
          }), [l?.size, s]), (0, f.jsx)(u.Z, {
            id: t,
            title: n,
            size: h,
            expandedType: i,
            images: c,
            deckProps: l,
            prod: y,
            payload: {
              content: a,
              meta: {}
            },
            variants: T.plainCard,
            textOverlayProps: o,
            modalProps: {
              className: w.customModal,
              contentClassName: w.customModalContent
            },
            expandedCardContents: (0, f.jsx)(g.Z, {
              images: c,
              prod: y,
              expandedView: !0
            }),
            children: (0, f.jsx)(b.Z, {
              expandedType: i,
              to: m,
              children: (0, f.jsxs)("div", {
                className: w.content,
                children: [(0, f.jsx)("img", {
                  className: w.logo,
                  alt: "logo",
                  src: $
                }), (0, f.jsx)("h2", {
                  children: n
                }), (0, f.jsx)("p", {
                  children: N
                }), (0, f.jsx)("a", {
                  href: S,
                  children: "Learn more"
                })]
              })
            })
          })
        };
      var M = n(3614),
        C = n(1324),
        j = n(2)
    },
    3385: e => {
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

      function n(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var a = e.type;
          "NamedType" === a.kind && t.add(a.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          n(e, t)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          n(e, t)
        })), e.definitions && e.definitions.forEach((function(e) {
          n(e, t)
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
      var a = {};

      function r(e, t) {
        for (var n = 0; n < e.definitions.length; n++) {
          var a = e.definitions[n];
          if (a.name && a.name.value == t) return a
        }
      }
      t.definitions.forEach((function(e) {
        if (e.name) {
          var t = new Set;
          n(e, t), a[e.name.value] = t
        }
      })), e.exports = t, e.exports.TinaModulesList = function(e, t) {
        var n = {
          kind: e.kind,
          definitions: [r(e, t)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var s = a[t] || new Set,
          i = new Set,
          o = new Set;
        for (s.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            i.has(e) || (i.add(e), (a[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(t) {
          var a = r(e, t);
          a && n.definitions.push(a)
        })), n
      }(t, "TinaModulesList")
    },
    5976: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/e6f9867ec4c5e32867a8.svg"
    }
  }
]);