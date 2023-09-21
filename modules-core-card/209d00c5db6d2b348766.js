(self.webpackChunk_rockstargames_modules_core_card = self.webpackChunk_rockstargames_modules_core_card || []).push([
  [228, 8], {
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
        E = e => e.scrollHeight > e.clientHeight;
      var $ = n(6160);

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
          } = (0, g.useGtmTrack)(), D = (0, d.createRef)(), P = (0, d.createRef)(), L = (0, d.createRef)(), I = (0, d.createRef)(), B = (0, d.createRef)(), [O, W] = (0, d.useState)(!1), [H, z] = (0, d.useState)(0), [R, G] = (0, d.useState)(0), [Z, F] = (0, d.useState)(0), [A, V] = (0, d.useState)(0), [U, q] = (0, d.useState)(0), [Y, Q] = (0, d.useState)(!1), [X, J] = (0, d.useState)(0), [K, ee] = (0, d.useState)(0), [te, ne] = (0, d.useState)(0), [ae, re] = (0, d.useState)("700"), [se, ie] = (0, d.useState)(-1), [oe, ce] = (0, d.useState)(0), [le, de] = (0, d.useState)(0), [ue, me] = (0, d.useState)(0), [fe, pe] = (0, d.useState)(!1), [ve, be] = (0, d.useState)(""), [ge, ye] = (0, d.useState)(null), [he, xe] = (0, d.useState)(!1), [Se, Ne] = (0, d.useState)(null), [ke, _e] = (0, d.useState)(!1), [we, Te] = (0, d.useState)(!1), Ee = (0, b.useTinaPayload)(), $e = v?.payload?.meta?.cdn ?? !1 ?? Ee?.meta?.prod ?? !1, Me = (0, b.useTranslations)({
            payload: v?.payload,
            variables: v?.variables
          }), Ce = Me?.meta ?? {}, je = M(Me?.content?.[0], $e), De = (0, d.useMemo)((() => je?.images?.[0]?.image?.badge), [je]), Pe = (0, d.useMemo)((() => je.title ?? a ?? Ce?.title), [a, Ce?.title, je.title]), Le = (0, _.useImageParser)({
            alt: je?.images?.[0]?.image?.alt ?? "",
            ariaLabel: je?.images?.[0]?.image?.alt ?? "",
            sources: je?.images?.[0]?.image?.sources ?? [],
            prod: $e
          }), Ie = Le?.src?.mobile ?? !1, Be = (0, d.useMemo)((() => Ce?.foreignId), [Ce]), Oe = (0, d.useMemo)((() => Ce?.foreignTitle), [Ce]), [We, He] = (0, d.useState)(0), [ze, Re] = (0, d.useState)(0), [Ge, Ze] = (0, d.useState)(0), [Fe, Ae] = (0, d.useState)(0), [Ve, Ue] = (0, d.useState)(!1), [qe, Ye] = (0, d.useState)(0), [Qe, Xe] = (0, d.useState)(20), [Je, Ke] = (0, d.useState)(null), [et, tt] = (0, d.useState)(!1), nt = (0, d.useCallback)((e => {
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
          }), [O, l, s, R, A, K, te, Z, X]), (0, d.useEffect)((() => {
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
                G(r), I.current && l && F(r), V(w(u.current, "--eventDeck-itemSize") * n), me(w(u.current, "--eventDeck-phaseOneTransitionDuration"));
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
            Ze(0), Ae(0)
          }), [l]), (0, d.useEffect)((() => {
            l ? Xe(s ? 35 : 20) : s && Xe(50)
          }), [s, l]), (0, d.useEffect)((() => {
            let e = [],
              t = 0,
              a = 0;
            if (null !== n?.transform) {
              e = n.transform.split(",");
              const r = e[0].split("(");
              t = Number(r[1].replace("px", "")), Ze(t), a = Number(e[1].replace("px", "")), Ae(a)
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
            B.current ? _e(E(B.current)) : _e(!1), void 0 !== o && o.current ? Te(E(o.current)) : Te(!1)
          }), [o, B, t, s, fe]), je ? (0, $.jsxs)("div", {
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
              transform: s && t && !l ? `translate3d(${Ge+qe}px, ${Fe}px, 0)` : l && !s ? `translate3d(${Ge+k}px, ${Fe}px, 0)` : n?.transform
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
            children: [(0, $.jsxs)("div", {
              className: "d82452706eccb7b8fa238bf7612b7724abaa",
              "data-full-header": O,
              ref: L,
              style: {
                height: s && l ? `${R}px` : null,
                width: s && l ? `${R}px` : null
              },
              children: [Ie && (0, $.jsx)("img", {
                ref: I,
                src: `${Le?.src?.mobile}?im=Resize,width=${ae}`,
                alt: Le?.alt,
                style: {
                  width: 0 !== Z && l ? `${Z}px` : null,
                  height: 0 !== Z && l ? `${Z}px` : null
                }
              }), (0, $.jsxs)("div", {
                className: "d82452706eccb7b8d21f276146dec1dcf842",
                style: {
                  transform: !l || l && s ? `translate3d(0, ${H}px, 0)` : null
                },
                children: [De && (0, $.jsx)("div", {
                  className: "d82452706eccb7b8d9c130714618614ef63c",
                  ref: D,
                  children: (0, $.jsx)(f.Badge, {
                    text: De
                  })
                }), (0, $.jsx)("span", {
                  className: "d82452706eccb7b8e056f0aa82c811cbadda",
                  ref: P,
                  "aria-hidden": s,
                  children: Pe
                })]
              })]
            }), (0, $.jsxs)("div", {
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
              children: [Pe && (0, $.jsx)("span", {
                className: "d82452706eccb7b8d784a6def5f96306e977",
                children: Pe
              }), (0, $.jsx)("div", {
                className: "d82452706eccb7b8b98f5b22300490f3feb8",
                children: (0, $.jsx)(b.TinaParser, {
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
          return (0, $.jsxs)($.Fragment, {
            children: [(0, $.jsxs)("div", {
              className: "d82452706eccb7b8faa5acf4b727e1382599",
              children: [(0, $.jsx)("button", {
                className: j,
                type: "button",
                onClick: t,
                disabled: n,
                "aria-label": "Previous"
              }), (0, $.jsxs)("span", {
                className: "d82452706eccb7b8dacf520118176355e3f9",
                "aria-hidden": !c,
                "aria-label": `On page ${s+1} of ${i.length}`,
                children: [s + 1, (0, $.jsx)("span", {
                  className: "d82452706eccb7b8f75c0ab96a4285c2dea2"
                }), i.length]
              }), (0, $.jsx)("button", {
                className: j,
                type: "button",
                onClick: a,
                disabled: r,
                "aria-label": "Next"
              })]
            }), (0, $.jsx)("button", {
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
          } = e, {
            track: a
          } = (0, g.useGtmTrack)(), [r, s] = (0, d.useState)(!1), i = (() => {
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
          })(), [o, c] = (0, d.useState)([]), [l, u] = (0, d.useState)(null), [p, x] = (0, d.useState)(0), [_, E] = (0, d.useState)(window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth), [M, j] = (0, d.useState)(!1), P = (0, d.createRef)(), [L, I] = (0, d.useState)(null), B = (0, d.createRef)(), O = (0, d.createRef)(), [W, H] = (0, d.useState)([]), [z, R] = (0, d.useState)(!0), [G, Z] = (0, d.useState)(!1), [F, A] = (0, d.useState)([]), [V, U] = (0, d.useState)(404), [q, Y] = (0, d.useState)(808), [Q, X] = (0, d.useState)(672), [J, K] = (0, d.useState)(336), [ee, te] = (0, d.useState)(0), [ne, ae] = (0, d.useState)(0), [re, se] = (0, d.useState)(0), [ie, oe] = (0, d.useState)(0), [ce, le] = (0, d.useState)(0), [de, ue] = (0, d.useState)(!1), [me, fe] = (0, d.useState)(window.innerWidth), [pe, ve] = (0, d.useState)(0), [be, ge] = (0, d.useState)(0), [ye, he] = (0, d.useState)(0), [xe, Se] = (0, d.useState)(0), [Ne, ke] = (0, d.useState)(0), [_e, we] = (0, d.useState)(0), [Te, Ee] = (0, d.useState)(0), [$e, Me] = (0, d.useState)(-1e3), [Ce, je] = (0, d.useState)(0), [De, Pe] = (0, d.useState)(50), [Le, Ie] = (0, d.useState)(0), [Be, Oe] = (0, d.useState)(!1), [We, He] = (0, d.useState)(768), [ze, Re] = (0, d.useState)(!1), [Ge, Ze] = (0, d.useState)(!1), [Fe, Ae] = (0, d.useState)(!1), [Ve, Ue] = (0, d.useState)(!1), [qe, Ye] = (0, d.useState)(!1), [Qe, Xe] = (0, d.useState)(1e3), [Je, Ke] = (0, d.useState)(1.2), [et, tt] = (0, d.useState)(0), [nt, at] = (0, d.useState)(!1), [rt, st] = (0, d.useState)(!1), [it, ot] = (0, d.useState)(!0), [ct, lt] = (0, d.useState)(!1), [dt, ut] = (0, d.useState)(!1), [mt, ft] = (0, d.useState)(null), [pt, vt] = (0, d.useState)(100), [bt, gt] = (0, d.useState)(!1), [yt, ht] = (0, d.useState)({}), [xt, St] = (0, d.useState)(""), [Nt, kt] = (0, d.useState)(0), [_t, wt] = (0, d.useState)(!1), [Tt, Et] = (0, d.useState)(!1), [$t, Mt] = (0, d.useState)(0), [Ct, jt] = (0, d.useState)(0), [Dt, Pt] = (0, d.useState)(100), [Lt, It] = (0, d.useState)(!1), [Bt, Ot] = (0, d.useState)(!1), Wt = () => me * pe + De, Ht = () => !1 === Be ? Je : 1, zt = e => e === Ne - 1 || e === Ne + 1, Rt = () => -1 * xe, Gt = function(e) {
            let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (!0 === Be) return 0;
            const n = e.itemNumber % 2 == 0,
              a = V * Je;
            if (!0 === n && 0 !== e.itemNumber) {
              const n = w(e?.element?.current, "top");
              let r = n - re;
              return !1 === t && (r -= n), -1 * (.5 * a + r) + et
            }
            return re - .5 * a + et
          }, Zt = function(e, t) {
            let n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              a = Rt();
            !1 === n && (a = 0);
            const r = me * pe,
              s = !1 === Be ? V * Ht() : r;
            return e.inModalMode && Be ? -1 === t ? Wt() * (Ne - e.itemNumber) * -1 - e.styles.left : Wt() * (e.itemNumber - Ne) - e.styles.left : -1 === t ? -1 * e.styles.left - s - De + a : r - e.styles.left + De + a
          }, Ft = (e, t, n) => {
            -1 === t && (Z(!1), R(!0)), Z(!1 === n && e >= t || !0 === n && e + 1 === t), R(e <= 0)
          }, At = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (dt || ct) return;
            if (ut(!0), de) return void
            function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (Ne + 1 >= o.length) return;
              const t = W[Ne + 1]?.tina?.payload?.meta?.title ?? `card-${Ne+1}`;
              a({
                event: e ? "modal_swipe" : "modal_next",
                event_category: "modal",
                event_action: e ? "swipe" : "next",
                event_label: n,
                card_name: t,
                card_id: Ne + 1,
                position: Ne + 1,
                view_name: `${W[Ne+1].source_content_id}/${t}`,
                source_content_id: W[Ne + 1].source_content_id,
                source_content_name: W[Ne + 1].source_content_name
              }), Ft(Ne + 1, o.length, !0), Be ? Be && H(W.map((e => {
                e.itemNumber === Ne - 1 ? e.upNext = !1 : e.itemNumber === Ne + 2 ? e.upNext = !0 : e.itemNumber === Ne + 1 ? e.active = !0 : e.itemNumber === Ne && (e.upNext = !0, e.active = !1);
                const t = e.styles.transform.replace("translate3d(", "").split(",");
                let n = Number(t[0].replace("px", ""));
                n -= Wt();
                const a = `translate3d(${n}px,${t[1]},${t[2]}`;
                return e.styles = {
                  ...e.styles,
                  transform: a
                }, e
              }))) : H(W.map((e => (e.itemNumber === Ne - 1 ? e.upNext = !1 : e.itemNumber === Ne + 2 ? e.upNext = !0 : e.itemNumber === Ne + 1 ? (e.active = !0, e.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${Rt()}px, ${et}px, 0) scale(1)`
              }) : e.itemNumber === Ne && (e.upNext = !0, e.active = !1, e.styles = {
                ...e.styles,
                transform: `translate3d(${Zt(e,-1)}px, ${Gt(e)}px, 0) scale(${Ht()})`
              }), e)))), ke(Ne + 1)
            }(t);
            const r = ye + 1;
            if (!(r > ce))
              if (a({
                  event: t ? "carousel_swipe" : "carousel_next",
                  event_category: "carousel",
                  event_action: t ? "swipe" : "next",
                  event_label: n
                }), Ft(r, ce, !1), Be) {
                let e = r * J * -1;
                e < $e && (e = $e, Z(!0), R(!1), he(ce)), he(r), H(W.map((t => (t.styles = {
                  ...t.styles,
                  transform: `translate3d(${e}px, 0, 0)`
                }, t))))
              } else {
                let e = xe - ne;
                0 === xe && (e = -1 * Q), he(r), e < $e && (e = $e, Z(!0), R(!1), he(ce)), Se(e)
              }
          }, Vt = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (dt || ct) return;
            if (ut(!0), !0 === de) return void
            function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (dt) return;
              if (Ne - 1 < 0) return;
              const t = W[Ne - 1]?.tina?.payload?.meta?.title ?? "card-" + (Ne - 1);
              a({
                event: e ? "modal_swipe" : "modal_previous",
                event_category: "modal",
                event_action: e ? "swipe" : "previous",
                event_label: n,
                card_name: t,
                card_id: Ne - 1,
                position: Ne - 1,
                view_name: `${W[Ne-1].source_content_id}/${t}`,
                source_content_id: W[Ne - 1].source_content_id,
                source_content_name: W[Ne - 1].source_content_name
              }), Ft(Ne - 1, o.length, !0), Be || H(W.map((e => (e.itemNumber === Ne + 1 ? e.upNext = !1 : e.itemNumber === Ne - 2 ? e.upNext = !0 : e.itemNumber === Ne ? (e.upNext = !0, e.active = !1, e.styles = {
                ...e.styles,
                transform: `translate3d(${Zt(e,1)}px, ${Gt(e)}px, 0) scale(${Ht()})`
              }) : e.itemNumber === Ne - 1 && (e.active = !0, e.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${Rt()}px, ${et}px, 0) scale(1)`
              }), e)))), Be && H(W.map((e => {
                e.itemNumber === Ne + 1 ? e.upNext = !1 : e.itemNumber === Ne - 2 ? e.upNext = !0 : e.itemNumber === Ne ? (e.upNext = !0, e.active = !1) : e.itemNumber === Ne - 1 && (e.active = !0);
                const t = e.styles.transform.replace("translate3d(", "").split(",");
                let n = Number(t[0].replace("px", ""));
                n += Wt();
                const a = `translate3d(${n}px,${t[1]},${t[2]}`;
                return e.styles = {
                  ...e.styles,
                  transform: a
                }, e
              }))), ke(Ne - 1)
            }(t);
            const r = ye - 1;
            if (!(r < 0))
              if (a({
                  event: t ? "carousel_swipe" : "carousel_previous",
                  event_category: "carousel",
                  event_action: t ? "swipe" : "previous",
                  event_label: n
                }), Ft(r, ce, !1), Be) {
                let e = r * J * -1;
                e > 0 && (e = 0, R(!0), Z(!1), he(0)), he(r), H(W.map((t => (t.styles = {
                  ...t.styles,
                  transform: `translate3d(${e}px, 0, 0)`
                }, t))))
              } else {
                let e = xe + ne;
                he(r), (e > 0 || 0 === e || -1 * e < q) && (e = 0, R(!0), Z(!1), he(0)), Se(e), H(W.map((t => (t.styles = {
                  ...t.styles,
                  transform: `translate3d(${e}px, 0, 0)`
                }, t))))
              }
          }, Ut = e => {
            if (_t || de || Be) return;
            const t = T(e);
            kt(t.x)
          }, qt = e => {
            if (_t || 0 === Nt || de || Be) return;
            const t = T(e),
              n = t.x > Nt ? 1 : -1;
            let a = Math.abs(Nt - t.x) * n;
            (0 === ye && 1 === n || ye === ce && -1 === n) && (a *= .35), Et(!0), Mt(a)
          }, Yt = e => {
            if (_t || de || Be) return;
            const t = T(e),
              n = t.x > Nt ? 1 : -1,
              a = Math.abs(Nt - t.x);
            St(a > Dt ? n > 0 ? "prev" : "next" : ""), Qt()
          }, Qt = () => {
            wt(!0), kt(0), Mt(0), Et(!1)
          }, Xt = e => {
            Tt && (Yt(e), Et(!1))
          }, Jt = function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            return e.map(((e, a) => {
              let r = a * J,
                s = a;
              !1 === Be && (s = Math.ceil(.5 * a) + 1, a > 0 && (r = 2 === s ? Q : Q + J * (s - 2)));
              const i = F[a];
              return i?.current && (i.current.scrollTop = 0), {
                ...e,
                mobileMode: Be,
                itemNumber: a,
                columnNumber: s,
                inModalMode: !1,
                upNext: !0,
                active: !1,
                openModalMode: en,
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
          }, Kt = () => {
            const e = W[Ne]?.tina?.payload?.meta?.title ?? `card-${Ne}`;
            if (a({
                event: "modal_close",
                event_category: "modal",
                event_action: "close",
                event_label: n,
                card_name: e,
                card_id: Ne,
                position: Ne,
                view_name: `${W[Ne].source_content_id}/${e}`,
                source_content_id: W[Ne].source_content_id,
                source_content_name: W[Ne].source_content_name
              }), Be) {
              let e = Ne * J * -1;
              e < $e && (e = $e, Z(!0), R(!1), he(ce)), he(Ne), Ft(Ne, ce, !1), H(Jt(o, "cardClose", `translate3d(${e}px, 0, 0)`))
            } else {
              H(Jt(o, "cardClose"));
              const e = Math.ceil((W[Ne].columnNumber + 1) / ee) - 1;
              he(e);
              let t = e * ne * -1;
              Le < be ? (t = 0, R(!0), Z(!0), he(0)) : t < $e ? (t = $e, R(!1), Z(!0), he(ce)) : Ft(e, ce, !1), Se(t), ke(0)
            }
            B.current.style.transform = "translateY(0px)", B.current.style.transition = "all var(--eventDeck-transitionCardClose)", at(!1), Ue(!1), ue(!1), Ze(!1), Re(!1), Ye(!1), setTimeout((() => {
              Ae(!0)
            }), Qe)
          };
          (0, d.useEffect)((() => {
            !1 !== Fe && (Ae(!1), at(!1), L.style.zIndex = null, H(W.map((e => (e.transitionStyle = "", e)))))
          }), [Fe]);
          const en = e => {
            setTimeout((() => {
              ht(e), gt(!0)
            }), 1)
          };
          (0, d.useEffect)((() => {
            if (!bt) return;
            if (gt(!1), dt) return;
            ke(Number(yt.target.dataset.itemPosition)), Ze(!0), lt(!0), it && ot(!1);
            const e = W[yt.target.dataset.itemPosition].source_content_id,
              t = W[yt.target.dataset.itemPosition].source_content_name,
              r = W[yt.target.dataset.itemPosition]?.tina?.payload?.meta?.title;
            a({
              event: "card_click",
              event_category: "card",
              event_action: "click",
              event_label: n,
              card_name: r ?? `card-${Ne}`,
              card_id: yt.target.dataset.itemPosition,
              position: yt.target.dataset.itemPosition,
              view_name: `${e}/${r}`,
              source_content_id: e,
              source_content_name: t
            })
          }), [bt]), (0, d.useEffect)((() => {
            if (!Ge || de) return;
            Ze(!1);
            const e = (() => {
              const e = L?.getBoundingClientRect().top;
              return tt(-1 * (e - p)), -1 * (e - 140)
            })();
            Be && H(W.map((e => {
              const t = e.itemNumber > Ne + 3 || e.itemNumber < Ne - 3;
              return e.styles = {
                ...e.styles,
                display: t ? "none" : null,
                transition: t ? "none" : null
              }, e
            }))), L.style.zIndex = "101", at(!0), B.current && (B.current.style.transition = "all var(--eventDeck-transitionCardOpen)", B.current.style.transform = `translateY(${e}px)`), Ue(!0), setTimeout((() => {
              Re(!0)
            }), 1)
          }), [Ge]);
          const tn = () => {
            H(W.map(((e, t) => {
              e.active = t === Ne, e.inModalMode = !0, e.transitionStyle = "cardOpen", Be && (e.upNext = zt(e.itemNumber));
              const n = !Be;
              let a = 0;
              if (Be) {
                const e = _e + 5 * p;
                a = window.innerHeight - e
              }
              return e.itemNumber < Ne ? e.styles = {
                ...e.styles,
                height: Be ? `${a}px` : null,
                transform: `translate3d(${Zt(e,-1,n)}px, ${et}px, 0) scale(${Ht()})`
              } : e.itemNumber > Ne ? e.styles = {
                ...e.styles,
                height: Be ? `${a}px` : null,
                transform: `translate3d(${Zt(e,1,n)}px, ${et}px, 0) scale(1)`
              } : e.itemNumber === Ne && (e.styles = Be ? {
                ...e.styles,
                height: `${a}px`,
                transform: `translate3d(${-1*e.styles.left}px, ${et}px, 0) scale(1)`
              } : {
                left: 0,
                top: 0,
                transform: `translate3d(${Rt()}px, ${et}px, 0) scale(1)`
              }), e
            })))
          };
          (0, d.useEffect)((() => {
            !1 !== ze && !0 !== de && (ue(!0), Re(!1), Ft(Ne, W.length, !0), B.current && (B.current.style.transition = "all var(--eventDeck-transitionCardOpen)", B.current.style.transform = `translateY(${et}px)`), tn(), Be ? (Se(0), lt(!1), st(!0)) : Ye(!0))
          }), [ze]), (0, d.useEffect)((() => {
            rt && (st(!1), H(W.map((e => ("none" === e.styles.display && (e.styles.display = null, e.styles.transition = null), e)))))
          }), [rt]);
          const nn = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            H(W.map((t => {
              if (t.upNext = zt(t.itemNumber), t.itemNumber !== Ne) {
                let e = Zt(t, 1);
                t.itemNumber < Ne && (e = Zt(t, -1)), t.styles = {
                  ...t.styles,
                  transform: `translate3d(${e}px, ${Gt(t)}px, 0) scale(${Ht()})`
                }
              } else t.itemNumber === Ne && !Be && e && (t.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${Rt()}px, ${et}px, 0) scale(1)`
              });
              return t
            })))
          };
          (0, d.useEffect)((() => {
            !1 !== qe && !0 !== Be && (Ye(!1), setTimeout((() => {
              nn(), lt(!1)
            }), 1))
          }), [qe]), (0, d.useEffect)((() => {
            H(Jt(o, ""))
          }), [Q, J, o]), (0, d.useEffect)((() => {
            const e = window.navigator?.userAgentData?.platform || window.navigator?.platform;
            It(["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(e))
          }), []), (0, d.useEffect)((() => {
            de ? (t(!1), Lt && Ot(!0)) : Tt || de || (t(!0), Lt && Bt && Ot(!1))
          }), [de, Tt]), (0, d.useEffect)((() => {
            if (!dt) return;
            clearTimeout(mt);
            const e = setTimeout((() => {
              ut(!1)
            }), pt);
            ft(e)
          }), [dt]), (0, d.useEffect)((() => {
            M && setTimeout((() => {
              j(!1)
            }), 3e3)
          }), [M]), (0, d.useEffect)((() => {
            j(!0), Se(0), he(0);
            let e = Math.ceil(Math.ceil(Le / J) / ee);
            Be && (e = W.length - 1), e < 0 && (e = 1), Ft(0, e, !1), de && Kt()
          }), [Be]), (0, d.useEffect)((() => {
            B.current && !de && (B.current.style.transform = "")
          }), [B, Be, de]), (0, d.useEffect)((() => {
            const e = (i ?? []).map((e => {
              let t = null;
              return "FeaturedEventInfo" === e?.tina?.payload?.content[0]?._template && e?.tina?.variables?.keys?.meta && (t = e?.tina?.variables?.keys?.meta?.title), {
                ...e,
                title: t,
                source_content_id: e?.tina?.payload?.meta?.foreignId,
                source_content_name: e?.tina?.payload?.meta?.foreignTitle,
                view_name: `${e?.tina?.payload?.meta?.foreignId}/${e?.tina?.payload?.meta?.foreignTitle}`
              }
            }));
            c(e)
          }), [i]), (0, d.useEffect)((() => {
            A(o.map((() => (0, d.createRef)())))
          }), [o]), (0, d.useEffect)((() => {
            const e = e => {
              const {
                key: t
              } = e;
              "ArrowLeft" === t ? Vt(null, !1) : "ArrowRight" === t && At(null, !1)
            };
            return document.addEventListener("keydown", e), () => {
              document.removeEventListener("keydown", e)
            }
          }), [dt, ct, de]), (0, d.useEffect)((() => {
            if (B.current) {
              let e = 0;
              e = B?.current?.clientHeight, e += w(B?.current, "margin-top"), e += w(B?.current, "margin-bottom"), we(e)
            }
          }), [B, O]), (0, d.useEffect)((() => {
            de && (() => {
              const e = L?.getBoundingClientRect().top,
                t = -1 * (e - p);
              if (H(W.map((e => {
                  if (e.styles.transform) {
                    const n = e.styles.transform.split(","),
                      a = `${n[0]}, ${t}px,${n[2]}`;
                    e.styles = {
                      ...e.styles,
                      transform: a
                    }
                  }
                  return e
                }))), B.current) {
                const t = -1 * (e - p);
                B.current.style.transform = `translateY(${t}px)`
              }
            })()
          }), [Be, de, et]), (0, d.useEffect)((() => {
            Le < pe * me && 0 === ye ? (Se(0), Z(!0), R(!0)) : xe < $e ? (Z(!0), R(!1), he(ce), Se($e)) : xe < 0 && (Z(!1), he(ce - 1)), Le > pe * me && G && Z(!1)
          }), [$e]), (0, d.useEffect)((() => {
            if (P.current) {
              I(P.current);
              const e = w(document.documentElement, "--root-font-size"),
                t = w(P.current, "--eventDeck-modalGutters") * e;
              Ee(t);
              const n = me - 2 * t;
              ge(n), ve(n / me);
              let a = w(P.current, "--eventDeck-modalBottomGutter");
              a *= e;
              const r = window.innerHeight - (_e + a);
              se(.5 * n < r ? n / 4 : .5 * r);
              const s = w(P.current, "--eventDeck-mobileBreakpoint");
              He(s);
              let i = w(P.current, "--eventDeck-itemSize");
              i *= e, U(i);
              let c = w(P.current, "--eventDeck-modalGutterGap");
              c *= e, Pe(c);
              let d = w(P.current, "--eventDeck-insideMargin");
              d *= e;
              const m = !1 === Be ? 2 * i + d : i + d;
              Y(m), X(m + d);
              const f = i + d;
              K(f);
              let p = Math.ceil(.5 * (o.length - 1)) * f + m;
              Be && (p = o.length * f), Ie(p), 0 !== Le && Me(-1 * Le + n);
              let v = Math.ceil(Math.ceil(p / f) / ee);
              (Be || de) && (v = W.length - 1), le(v);
              const b = w(P.current, "--eventDeck-itemScaleUpAmount");
              Ke(b), Xe(w(P.current, "--eventDeck-cardCloseTransitionDuration")), x(w(P.current, "--eventDeck-itemImageTitleMargins") * e), null !== l && e !== l && (u(e), de && nn()), null === l && u(e)
            }
          }), [P, o]), (0, d.useEffect)((() => {
            if (de && !Be) {
              nn();
              const e = L?.getBoundingClientRect().top,
                t = -1 * (e - p);
              t !== et && tt(t)
            }
          }), [_]), (0, d.useEffect)((() => {
            const e = m()((e => {
              fe(e), Oe(e < We);
              const t = (1 - pe) / 2;
              je(e * t);
              const n = e - 2 * Te,
                a = Math.round(n / J);
              te(a), ae(a * J), oe(e - e * t);
              const r = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth;
              if (r !== _ && E(r), de && r === _ && !M) {
                const e = L?.getBoundingClientRect().top,
                  t = -1 * (e - p);
                t !== et && tt(t)
              }
            }), 300);
            return window.addEventListener("resize", (() => {
              e(window.innerWidth)
            })), window.addEventListener("scroll", (() => {
              de && Be && e(window.innerWidth)
            })), e(window.innerWidth), () => {
              window.removeEventListener("resize", (() => {
                e(window.innerWidth)
              }))
            }
          }), [J, pe, de, Be]), (0, d.useEffect)((() => {
            !1 !== de && !0 !== M && (Be ? tn() : nn(!0))
          }), [ie, ne, De, V, me, Ce, re, et]), (0, d.useEffect)((() => {
            const e = () => {
              if (P.current && it) {
                const e = P.current.getBoundingClientRect(),
                  t = .2 * window.innerHeight;
                window.innerHeight - e.top >= t && ot(!1)
              }
            };
            return e(), window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
          }), [P]);
          const an = (0, d.useCallback)((() => {
            if (null !== P.current && !r) {
              const {
                top: e
              } = P?.current?.getBoundingClientRect() || 0;
              e <= .6 * window.innerHeight && (a({
                event: "page_section_impression",
                event_action: "impression",
                event_category: "page_section",
                event_label: n
              }), s(!0))
            }
          }), [P]);
          (0, d.useEffect)((() => (window.addEventListener("scroll", an), () => {
            window.removeEventListener("scroll", an)
          })), [an, P]), (0, d.useEffect)((() => {
            "next" === xt ? (At(null, !0), St("")) : "prev" === xt && (Vt(null, !0), St(""))
          }), [xt]), (0, d.useEffect)((() => {
            P.current && P.current.addEventListener("mouseleave", (() => {
              Tt && Qt()
            }))
          }), [P, Tt]), (0, d.useEffect)((() => (document.body.addEventListener("mouseleave", Xt), () => {
            document.body.removeEventListener("mouseleave", Xt)
          })), [Tt]), (0, d.useEffect)((() => {
            _t && setTimeout((() => {
              wt(!1), kt(0)
            }), pt)
          }), [_t]), (0, d.useEffect)((() => {
            Pt(Be ? 20 : 100)
          }), [Be]), (0, d.useEffect)((() => {
            vt(de ? 500 : 100)
          }), [de]);
          const rn = (0, b.useTinaComponents)(),
            sn = (0, d.useMemo)((() => ({
              ...rn,
              CardWithImageGallery: h.Z,
              HTMLElement: f.HTMLElement,
              ImageWithBadge: f.ImageWithBadge,
              Carousel: f.Carousel,
              GroupOfItems: v(),
              UnorderedList: f.UnorderedList
            })), [rn]),
            on = (0, d.useMemo)((() => W.map((e => (0, d.createElement)(C, {
              ...e,
              refDeck: P,
              key: e?.id ?? e?.sync_hash,
              components: sn,
              prevPage: Vt,
              nextPage: At,
              loadCssRawValue: w,
              selectedItemNumber: Ne,
              carouselTitle: n,
              sharedDraggingDelta: Ct,
              setSharedDraggingDelta: jt
            })))), [W, P, sn, Vt, At, Ne]);
          return !on?.length || on.length <= 0 ? null : (0, $.jsxs)($.Fragment, {
            children: [(0, $.jsx)("div", {
              className: "d82452706eccb7b8c1b08e0c6762959d6e40",
              "data-modal-mode": Ve,
              "aria-hidden": "true"
            }), (0, $.jsxs)("div", {
              className: "d82452706eccb7b8dd9c11d21c9d76e0f525",
              "data-modal-mode": de,
              "data-faded": it,
              ref: P,
              onTouchStart: Ut,
              onTouchMove: qt,
              onTouchEnd: Yt,
              onMouseDown: Ut,
              onMouseMove: qt,
              onMouseUp: Yt,
              tabIndex: -1,
              role: "presentation",
              children: [(0, $.jsxs)("div", {
                className: "d82452706eccb7b8fe4a9770ab07662ba456",
                "data-modal-mode": de,
                ref: B,
                "data-animating": nt,
                children: [(0, $.jsx)("h2", {
                  className: "d82452706eccb7b8bdad5a5a38f931159788",
                  children: n
                }), (0, $.jsx)(D, {
                  prevPage: Vt,
                  prevBtnDisabled: z,
                  nextPage: At,
                  nextBtnDisabled: G,
                  selectedItemNumber: Ne,
                  itemsData: o,
                  closeModalMode: Kt,
                  inModalMode: de
                })]
              }), (0, $.jsx)("div", {
                className: "d82452706eccb7b8fe13159c37ea559619ab",
                "data-modal-mode": de,
                "data-is-dragging": Tt,
                style: {
                  transform: `translate3d(${xe+$t}px, 0, 0)`,
                  width: `${Le}px`
                },
                ref: O,
                children: on
              })]
            })]
          })
        };
      var L = n(3008)
    },
    3008: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        Card: () => a.Z,
        CardGrid: () => _,
        CardWithImageGallery: () => D.Z,
        CoverCard: () => j,
        Deck: () => L.Z,
        TextCard: () => P.Z
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
            tina: S = {},
            position: N
          } = e;
          const k = (0, d.useTinaPayload)(),
            _ = S?.payload?.meta?.cdn ?? k?.meta?.prod ?? !1,
            w = {
              image: {
                ...p,
                prod: _
              }
            },
            T = [p];
          return (0, f.jsx)(u.Z, {
            id: t,
            title: s,
            context: "clr-card",
            size: a,
            expandedType: l,
            images: w,
            deckProps: x,
            prod: _,
            position: N,
            modalProps: {
              className: y.clrCardModal,
              contentClassName: y.clrCardModalContent
            },
            variants: h.plainCard,
            payload: {
              content: n
            },
            expandedCardContents: (0, f.jsx)(g.Z, {
              images: T,
              prod: _
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
                image: w,
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
                locale: "en_us",
                orderDirection: "desc",
                orderBy: "created"
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
      };
      var w = n(5217),
        T = n(3086);
      n(3657);
      const E = (0, w.vU)({
          card_learn_more: {
            id: "card_learn_more",
            description: "Label for learn more buttons.",
            defaultMessage: "Learn More"
          }
        }),
        $ = {
          customModalContent: "d82452706eccb7b8f348dacb636353b11c51",
          content: "d82452706eccb7b8df95f12ea94658664861",
          secondary: "d82452706eccb7b8ac4425db45829109b6bb",
          logo: "d82452706eccb7b8e0170396b8c6129f37ee"
        },
        {
          variants: M
        } = o.framer.Animations,
        C = n(5976),
        j = e => {
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
            tina: p = {},
            cardIds: v,
            theme: y
          } = e;
          const h = (0, d.useTinaPayload)(),
            x = p?.payload?.meta?.cdn ?? h?.meta?.prod ?? !1,
            [S, N] = (0, r.useState)(l?.size ?? s);
          let k = null;
          return h.content && (k = h?.content[0]?._memoq ? h?.content[0]?._memoq?.body : null), (0, r.useEffect)((() => {
            N(l?.size ?? s)
          }), [l?.size, s]), (0, f.jsx)(u.Z, {
            id: t,
            title: n,
            size: S,
            expandedType: i,
            images: c,
            deckProps: l,
            prod: x,
            payload: {
              content: a,
              meta: {}
            },
            variants: M.plainCard,
            textOverlayProps: o,
            modalProps: {
              className: $.customModal,
              contentClassName: $.customModalContent
            },
            expandedCardContents: (0, f.jsx)(g.Z, {
              images: c,
              prod: x,
              expandedView: !0
            }),
            theme: y,
            cardIds: v,
            isCoverCard: !0,
            children: (0, f.jsx)(b.Z, {
              expandedType: i,
              to: m,
              children: (0, f.jsxs)("div", {
                className: $.content,
                children: [(0, f.jsx)("img", {
                  className: $.logo,
                  alt: "logo",
                  src: C
                }), (0, f.jsx)("h2", {
                  children: n
                }), null !== k && (0, f.jsx)("p", {
                  children: k
                }), (0, f.jsx)("button", {
                  type: "button",
                  children: (0, f.jsx)(T.Z, {
                    ...E.card_learn_more
                  })
                })]
              })
            })
          })
        };
      var D = n(3614),
        P = n(1324),
        L = n(2)
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
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/e6f9867ec4c5e32867a8.svg"
    }
  }
]);
//# sourceMappingURL=209d00c5db6d2b348766.js.map