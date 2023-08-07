(self.webpackChunk_rockstargames_modules_core_card = self.webpackChunk_rockstargames_modules_core_card || []).push([
  [228, 568], {
    5379: (e, t, a) => {
      var n = a(1983).Symbol;
      e.exports = n
    },
    2002: (e, t, a) => {
      var n = a(5379),
        r = a(3029),
        s = a(7776),
        i = n ? n.toStringTag : void 0;
      e.exports = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : i && i in Object(e) ? r(e) : s(e)
      }
    },
    9680: (e, t, a) => {
      var n = a(4309),
        r = /^\s+/;
      e.exports = function(e) {
        return e ? e.slice(0, n(e) + 1).replace(r, "") : e
      }
    },
    7795: (e, t, a) => {
      var n = "object" == typeof a.g && a.g && a.g.Object === Object && a.g;
      e.exports = n
    },
    3029: (e, t, a) => {
      var n = a(5379),
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
    7776: e => {
      var t = Object.prototype.toString;
      e.exports = function(e) {
        return t.call(e)
      }
    },
    1983: (e, t, a) => {
      var n = a(7795),
        r = "object" == typeof self && self && self.Object === Object && self,
        s = n || r || Function("return this")();
      e.exports = s
    },
    4309: e => {
      var t = /\s/;
      e.exports = function(e) {
        for (var a = e.length; a-- && t.test(e.charAt(a)););
        return a
      }
    },
    2816: (e, t, a) => {
      var n = a(3221),
        r = a(6354),
        s = a(3330),
        i = Math.max,
        o = Math.min;
      e.exports = function(e, t, a) {
        var l, c, d, u, m, f, p = 0,
          v = !1,
          b = !1,
          g = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function y(t) {
          var a = l,
            n = c;
          return l = c = void 0, p = t, u = e.apply(n, a)
        }

        function h(e) {
          var a = e - f;
          return void 0 === f || a >= t || a < 0 || b && e - p >= d
        }

        function x() {
          var e = r();
          if (h(e)) return _(e);
          m = setTimeout(x, function(e) {
            var a = t - (e - f);
            return b ? o(a, d - (e - p)) : a
          }(e))
        }

        function _(e) {
          return m = void 0, g && l ? y(e) : (l = c = void 0, u)
        }

        function S() {
          var e = r(),
            a = h(e);
          if (l = arguments, c = this, f = e, a) {
            if (void 0 === m) return function(e) {
              return p = e, m = setTimeout(x, t), v ? y(e) : u
            }(f);
            if (b) return clearTimeout(m), m = setTimeout(x, t), y(f)
          }
          return void 0 === m && (m = setTimeout(x, t)), u
        }
        return t = s(t) || 0, n(a) && (v = !!a.leading, d = (b = "maxWait" in a) ? i(s(a.maxWait) || 0, t) : d, g = "trailing" in a ? !!a.trailing : g), S.cancel = function() {
          void 0 !== m && clearTimeout(m), p = 0, l = f = c = m = void 0
        }, S.flush = function() {
          return void 0 === m ? u : _(r())
        }, S
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
    5495: (e, t, a) => {
      var n = a(2002),
        r = a(1285);
      e.exports = function(e) {
        return "symbol" == typeof e || r(e) && "[object Symbol]" == n(e)
      }
    },
    6354: (e, t, a) => {
      var n = a(1983);
      e.exports = function() {
        return n.Date.now()
      }
    },
    3330: (e, t, a) => {
      var n = a(9680),
        r = a(3221),
        s = a(5495),
        i = /^[-+]0x[0-9a-f]+$/i,
        o = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        c = parseInt;
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
        return a || l.test(e) ? c(e.slice(2), a ? 2 : 8) : i.test(e) ? NaN : +e
      }
    },
    9228: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        Card: () => L.Card,
        CardExpanded: () => n.Z,
        CardHeader: () => r.Z,
        CardWithImageGallery: () => L.CardWithImageGallery,
        CardWrapper: () => s.Z,
        CoverCard: () => L.CoverCard,
        Deck: () => L.Deck,
        EventsDeck: () => P,
        LayeredImageFrame: () => i.Z,
        LinkoutWrapper: () => o.Z,
        TextCard: () => L.TextCard,
        TextOverlay: () => l.Z,
        ThumbsGalleryOrThumb: () => c.Z
      });
      var n = a(2794),
        r = a(1581),
        s = a(3684),
        i = a(9361),
        o = a(2174),
        l = a(4111),
        c = a(8811),
        d = a(4932),
        u = a(2816),
        m = a.n(u),
        f = a(8976),
        p = a(420),
        v = a.n(p),
        b = a(9542),
        g = a(6711),
        y = a(9929),
        h = a(3614),
        x = a(3653),
        _ = a.n(x),
        S = a(4859),
        N = a(3385);
      var k = a(559);
      const w = (e, t) => {
          let a = getComputedStyle(e).getPropertyValue(t);
          return a = a.replace("px", "").replace("rem", "").replace("em", ""), a = a.replace("vh", "").replace("vw", "").replace("vmin", "").replace("vmax", ""), a = a.replace("ms", "").replace("s", ""), Number(a)
        },
        T = e => ({
          x: void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
          y: void 0 !== e.changedTouches ? e.changedTouches[0].screenY : e.screenY
        }),
        E = e => e.scrollHeight > e.clientHeight;
      var $ = a(6160);

      function M(e, t) {
        const a = {
          ...e
        };
        return _().forOwn(e, ((e, n) => {
          if ("image" === n) {
            const e = a[n];
            a[n] = {
              ...e,
              prod: t
            }
          } else _().isObject(e) && !_().isArray(e) ? M(e, t) : _().isArray(e) && (a[n] = e.map((e => _().isObject(e) ? M(e, t) : e)))
        })), a
      }
      const C = (0, y.withTranslations)((e => {
          let {
            active: t,
            styles: a,
            title: n,
            itemNumber: r,
            inModalMode: s,
            openModalMode: i,
            element: o,
            upNext: l,
            mobileMode: c,
            refDeck: u,
            components: p,
            tina: v,
            prevPage: y,
            nextPage: h,
            transitionStyle: x,
            selectedItemNumber: _,
            carouselTitle: S,
            sharedDraggingDelta: N,
            setSharedDraggingDelta: C
          } = e;
          const {
            track: j
          } = (0, g.useGtmTrack)(), D = (0, d.createRef)(), P = (0, d.createRef)(), L = (0, d.createRef)(), I = (0, d.createRef)(), B = (0, d.createRef)(), [O, W] = (0, d.useState)(!1), [H, z] = (0, d.useState)(0), [R, G] = (0, d.useState)(0), [F, Z] = (0, d.useState)(0), [A, V] = (0, d.useState)(0), [U, Y] = (0, d.useState)(0), [q, Q] = (0, d.useState)(!1), [X, J] = (0, d.useState)(0), [K, ee] = (0, d.useState)(0), [te, ae] = (0, d.useState)(0), [ne, re] = (0, d.useState)("700"), [se, ie] = (0, d.useState)(-1), [oe, le] = (0, d.useState)(0), [ce, de] = (0, d.useState)(0), [ue, me] = (0, d.useState)(0), [fe, pe] = (0, d.useState)(!1), [ve, be] = (0, d.useState)(""), [ge, ye] = (0, d.useState)(null), [he, xe] = (0, d.useState)(!1), [_e, Se] = (0, d.useState)(null), [Ne, ke] = (0, d.useState)(!1), [we, Te] = (0, d.useState)(!1), Ee = (0, b.useTinaPayload)(), $e = v?.payload?.meta?.cdn ?? !1 ?? Ee?.meta?.prod ?? !1, Me = (0, b.useTranslations)({
            payload: v?.payload,
            variables: v?.variables
          }), Ce = Me?.meta ?? {}, je = M(Me?.content?.[0], $e), De = (0, d.useMemo)((() => je?.images?.[0]?.image?.badge), [je]), Pe = (0, d.useMemo)((() => je.title ?? n ?? Ce?.title), [n, Ce?.title, je.title]), Le = (0, k.useImageParser)({
            alt: je?.images?.[0]?.image?.alt ?? "",
            ariaLabel: je?.images?.[0]?.image?.alt ?? "",
            sources: je?.images?.[0]?.image?.sources ?? [],
            prod: $e
          }), Ie = Le?.src?.mobile ?? !1, Be = (0, d.useMemo)((() => Ce?.foreignId), [Ce]), Oe = (0, d.useMemo)((() => Ce?.foreignTitle), [Ce]), [We, He] = (0, d.useState)(0), [ze, Re] = (0, d.useState)(0), [Ge, Fe] = (0, d.useState)(0), [Ze, Ae] = (0, d.useState)(0), [Ve, Ue] = (0, d.useState)(!1), [Ye, qe] = (0, d.useState)(0), [Qe, Xe] = (0, d.useState)(20), [Je, Ke] = (0, d.useState)(null), [et, tt] = (0, d.useState)(!1), at = (0, d.useCallback)((e => {
            if (!0 === q || !s && !c || he) return;
            const t = T(e);
            He(t.x), Re(t.y)
          }), [q, s]), nt = e => {
            at(e)
          }, rt = e => {
            if (!0 === q || 0 === We || !s && !c || he) return;
            const t = T(e),
              a = t.x > We ? 1 : -1,
              n = Math.abs(We - t.x);
            s && !c && n > Qe ? (tt(!0), be(a > 0 ? "prev" : "next"), it()) : (Ue(!0), qe(n * a), C(n * a))
          }, st = e => {
            if (!0 === q || !s && !c || he) return;
            const t = T(e),
              a = t.x > We ? 1 : -1,
              n = Math.abs(We - t.x),
              r = Math.abs(ze - t.y);
            s && !c ? (it(), be("")) : n > Qe && r < 25 ? (tt(!0), be(a > 0 ? "prev" : "next"), it()) : it()
          }, it = () => {
            Q(!0), He(0), Re(0), Ue(!1), qe(0), C(0)
          };
          return (0, d.useEffect)((() => {
            let e = X;
            O ? e = 0 : s && !c && (e = X), z(e)
          }), [O, c, s, R, A, K, te, F, X]), (0, d.useEffect)((() => {
            W(!(!s || !c))
          }), [s, c]), (0, d.useEffect)((() => {
            s && t && j({
              event: "virtualPageview",
              display_type: c ? "mobile" : "desktop",
              view_name: `${Be}/${Pe}`,
              source_content_id: Be,
              source_content_name: Oe
            })
          }), [s, t]), (0, d.useEffect)((() => {
            const e = m()(((e, t) => {
              let a = 18;
              if (e?.documentElement && (a = w(e?.documentElement, "--root-font-size")), ce !== t.innerHeight && de(t.innerHeight), u?.current) {
                ae(w(u.current, "--eventDeck-marginSm") * a);
                const e = a * w(u?.current, "--eventDeck-modalGutters"),
                  n = t?.innerWidth,
                  r = n - 2 * e;
                G(r), I.current && c && Z(r), V(w(u.current, "--eventDeck-itemSize") * a), me(w(u.current, "--eventDeck-phaseOneTransitionDuration"));
                const s = w(u?.current, "--eventDeck-itemImageTitleMargins") * a,
                  i = P?.current?.clientHeight,
                  o = i + s;
                Number.isNaN(o) || J(o), le(w(u?.current, "--eventDeck-headerHeight") * a)
              }
              let n = Math.min(700, t.innerWidth);
              c || (n = 900), re(`${n}`)
            }), 300);
            return window.addEventListener("resize", (() => {
              e(document, window)
            })), e(document, window), () => {
              window.removeEventListener("resize", (() => {
                e(document, window)
              }))
            }
          }), [u, c]), (0, d.useEffect)((() => {
            if (D.current) {
              const e = D.current.clientHeight;
              Number.isNaN(e) || ee(e)
            }
          }), [D]), (0, d.useEffect)((() => {
            if (s && c && I.current && (I.current.style.transform = "scale(1) translate3d(0, 0, 0)"), !s && c && I.current) {
              const e = 228 / R;
              I.current.style.transform = `scale(${e}) translate3d(0, 0, 0)`
            }!c && I.current && (I.current.style.transform = null)
          }), [s, c, R, F]), (0, d.useEffect)((() => {
            const e = .5 * R,
              t = ce - oe - 3 * te;
            Y(R - (e < t ? e : t))
          }), [R, te, ce]), (0, d.useEffect)((() => {
            "next" === ve ? (h(null, !0), be("")) : "prev" === ve && (y(null, !0), be(""))
          }), [ve]), (0, d.useEffect)((() => {
            Fe(0), Ae(0)
          }), [c]), (0, d.useEffect)((() => {
            c ? Xe(s ? 35 : 20) : s && Xe(50)
          }), [s, c]), (0, d.useEffect)((() => {
            let e = [],
              t = 0,
              n = 0;
            if (null !== a?.transform) {
              e = a.transform.split(",");
              const r = e[0].split("(");
              t = Number(r[1].replace("px", "")), Fe(t), n = Number(e[1].replace("px", "")), Ae(n)
            }
          }), [a]), (0, d.useEffect)((() => {
            if (!q) return;
            clearTimeout(ge);
            const e = setTimeout((() => {
              Q(!1), He(0)
            }), 200);
            ye(e)
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
            B.current ? ke(E(B.current)) : ke(!1), void 0 !== o && o.current ? Te(E(o.current)) : Te(!1)
          }), [o, B, t, s, fe]), je ? (0, $.jsxs)("div", {
            className: "_2b820ae1fad6c6effde59cc0b211a74fd79f",
            ref: o,
            "data-item-position": r,
            "data-modal-mode": s,
            "data-active-item": t,
            "data-up-next": l,
            "data-transition": Ve || 0 !== N ? "none" : x,
            "data-scrollable": we,
            style: {
              ...a,
              transform: s && t && !c ? `translate3d(${Ge+Ye}px, ${Ze}px, 0)` : c && !s ? `translate3d(${Ge+N}px, ${Ze}px, 0)` : a?.transform
            },
            onClick: e => {
              et || (s ? s && !c && (r < _ ? y(e, !0) : r > _ && h(e, !0)) : i(e))
            },
            onMouseEnter: () => {
              s || W(!0), s || c || (clearTimeout(se), ie(setTimeout((() => {
                j({
                  event: "card_title_hover",
                  event_category: "card",
                  event_action: "title_hover",
                  event_label: S,
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
              s || W(!1), s || c || clearTimeout(se)
            },
            onTouchStart: nt,
            onTouchMove: rt,
            onTouchEnd: st,
            onMouseDown: nt,
            onMouseMove: rt,
            onMouseUp: st,
            tabIndex: -1,
            role: "presentation",
            children: [(0, $.jsxs)("div", {
              className: "_2b820ae1fad6c6effa238bf7612b7724abaa",
              "data-full-header": O,
              ref: L,
              style: {
                height: s && c ? `${R}px` : null,
                width: s && c ? `${R}px` : null
              },
              children: [Ie && (0, $.jsx)("img", {
                ref: I,
                src: `${Le?.src?.mobile}?im=Resize,width=${ne}`,
                alt: Le?.alt,
                style: {
                  width: 0 !== F && c ? `${F}px` : null,
                  height: 0 !== F && c ? `${F}px` : null
                }
              }), (0, $.jsxs)("div", {
                className: "_2b820ae1fad6c6efd21f276146dec1dcf842",
                style: {
                  transform: !c || c && s ? `translate3d(0, ${H}px, 0)` : null
                },
                children: [De && (0, $.jsx)("div", {
                  className: "_2b820ae1fad6c6efd9c130714618614ef63c",
                  ref: D,
                  children: (0, $.jsx)(f.Badge, {
                    text: De
                  })
                }), (0, $.jsx)("span", {
                  className: "_2b820ae1fad6c6efe056f0aa82c811cbadda",
                  ref: P,
                  "aria-hidden": s,
                  children: Pe
                })]
              })]
            }), (0, $.jsxs)("div", {
              className: "_2b820ae1fad6c6eff4efaa263cba6ec12f58",
              ref: B,
              onScroll: () => {
                xe(!0), it(), clearTimeout(_e);
                const e = setTimeout((() => {
                  xe(!1)
                }), 100);
                Se(e)
              },
              style: {
                top: s && c ? `${R}px` : null,
                width: s && !c && t ? `${U}px` : null,
                touchAction: Ne || c ? "unset" : "none"
              },
              children: [Pe && (0, $.jsx)("span", {
                className: "_2b820ae1fad6c6efd784a6def5f96306e977",
                children: Pe
              }), (0, $.jsx)("div", {
                className: "_2b820ae1fad6c6efb98f5b22300490f3feb8",
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
            inModalMode: l
          } = e;
          return (0, $.jsxs)($.Fragment, {
            children: [(0, $.jsxs)("div", {
              className: "_2b820ae1fad6c6effaa5acf4b727e1382599",
              children: [(0, $.jsx)("button", {
                className: j,
                type: "button",
                onClick: t,
                disabled: a,
                "aria-label": "Previous"
              }), (0, $.jsxs)("span", {
                className: "_2b820ae1fad6c6efdacf520118176355e3f9",
                "aria-hidden": !l,
                "aria-label": `On page ${s+1} of ${i.length}`,
                children: [s + 1, (0, $.jsx)("span", {
                  className: "_2b820ae1fad6c6eff75c0ab96a4285c2dea2"
                }), i.length]
              }), (0, $.jsx)("button", {
                className: j,
                type: "button",
                onClick: n,
                disabled: r,
                "aria-label": "Next"
              })]
            }), (0, $.jsx)("button", {
              className: "_2b820ae1fad6c6effd85da563bb161a9949a",
              type: "button",
              onClick: o,
              "aria-label": "Close",
              "aria-hidden": !l
            })]
          })
        },
        P = e => {
          const {
            setBodyIsScrollable: t
          } = (0, y.useBodyScrollable)(), {
            title: a
          } = e, {
            track: n
          } = (0, g.useGtmTrack)(), [r, s] = (0, d.useState)(!1), i = (() => {
            const {
              data: e
            } = (0, S.useQuery)(N.TinaModulesList, {
              variables: {
                type: "gtao-event-card",
                orderBy: "priority",
                orderDirection: "desc"
              }
            }), t = e?.tinaModulesList?.results, a = _().map(t, "id");
            return (0, f.useTinaModuleFetchByIds)({
              ids: a
            })
          })(), [o, l] = (0, d.useState)([]), [c, u] = (0, d.useState)(null), [p, x] = (0, d.useState)(0), [k, E] = (0, d.useState)(window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth), [M, j] = (0, d.useState)(!1), P = (0, d.createRef)(), [L, I] = (0, d.useState)(null), B = (0, d.createRef)(), O = (0, d.createRef)(), [W, H] = (0, d.useState)([]), [z, R] = (0, d.useState)(!0), [G, F] = (0, d.useState)(!1), [Z, A] = (0, d.useState)([]), [V, U] = (0, d.useState)(404), [Y, q] = (0, d.useState)(808), [Q, X] = (0, d.useState)(672), [J, K] = (0, d.useState)(336), [ee, te] = (0, d.useState)(0), [ae, ne] = (0, d.useState)(0), [re, se] = (0, d.useState)(0), [ie, oe] = (0, d.useState)(0), [le, ce] = (0, d.useState)(0), [de, ue] = (0, d.useState)(!1), [me, fe] = (0, d.useState)(window.innerWidth), [pe, ve] = (0, d.useState)(0), [be, ge] = (0, d.useState)(0), [ye, he] = (0, d.useState)(0), [xe, _e] = (0, d.useState)(0), [Se, Ne] = (0, d.useState)(0), [ke, we] = (0, d.useState)(0), [Te, Ee] = (0, d.useState)(0), [$e, Me] = (0, d.useState)(-1e3), [Ce, je] = (0, d.useState)(0), [De, Pe] = (0, d.useState)(50), [Le, Ie] = (0, d.useState)(0), [Be, Oe] = (0, d.useState)(!1), [We, He] = (0, d.useState)(768), [ze, Re] = (0, d.useState)(!1), [Ge, Fe] = (0, d.useState)(!1), [Ze, Ae] = (0, d.useState)(!1), [Ve, Ue] = (0, d.useState)(!1), [Ye, qe] = (0, d.useState)(!1), [Qe, Xe] = (0, d.useState)(1e3), [Je, Ke] = (0, d.useState)(1.2), [et, tt] = (0, d.useState)(0), [at, nt] = (0, d.useState)(!1), [rt, st] = (0, d.useState)(!1), [it, ot] = (0, d.useState)(!0), [lt, ct] = (0, d.useState)(!1), [dt, ut] = (0, d.useState)(!1), [mt, ft] = (0, d.useState)(null), [pt, vt] = (0, d.useState)(100), [bt, gt] = (0, d.useState)(!1), [yt, ht] = (0, d.useState)({}), [xt, _t] = (0, d.useState)(""), [St, Nt] = (0, d.useState)(0), [kt, wt] = (0, d.useState)(!1), [Tt, Et] = (0, d.useState)(!1), [$t, Mt] = (0, d.useState)(0), [Ct, jt] = (0, d.useState)(0), [Dt, Pt] = (0, d.useState)(100), [Lt, It] = (0, d.useState)(!1), [Bt, Ot] = (0, d.useState)(!1), Wt = () => me * pe + De, Ht = () => !1 === Be ? Je : 1, zt = e => e === Se - 1 || e === Se + 1, Rt = () => -1 * xe, Gt = function(e) {
            let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (!0 === Be) return 0;
            const a = e.itemNumber % 2 == 0,
              n = V * Je;
            if (!0 === a && 0 !== e.itemNumber) {
              const a = w(e?.element?.current, "top");
              let r = a - re;
              return !1 === t && (r -= a), -1 * (.5 * n + r) + et
            }
            return re - .5 * n + et
          }, Ft = function(e, t) {
            let a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              n = Rt();
            !1 === a && (n = 0);
            const r = me * pe,
              s = !1 === Be ? V * Ht() : r;
            return e.inModalMode && Be ? -1 === t ? Wt() * (Se - e.itemNumber) * -1 - e.styles.left : Wt() * (e.itemNumber - Se) - e.styles.left : -1 === t ? -1 * e.styles.left - s - De + n : r - e.styles.left + De + n
          }, Zt = (e, t, a) => {
            -1 === t && (F(!1), R(!0)), F(!1 === a && e >= t || !0 === a && e + 1 === t), R(e <= 0)
          }, At = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (dt || lt) return;
            if (ut(!0), de) return void
            function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (Se + 1 >= o.length) return;
              const t = W[Se + 1]?.tina?.payload?.meta?.title ?? `card-${Se+1}`;
              n({
                event: e ? "modal_swipe" : "modal_next",
                event_category: "modal",
                event_action: e ? "swipe" : "next",
                event_label: a,
                card_name: t,
                card_id: Se + 1,
                position: Se + 1,
                view_name: `${W[Se+1].source_content_id}/${t}`,
                source_content_id: W[Se + 1].source_content_id,
                source_content_name: W[Se + 1].source_content_name
              }), Zt(Se + 1, o.length, !0), Be ? Be && H(W.map((e => {
                e.itemNumber === Se - 1 ? e.upNext = !1 : e.itemNumber === Se + 2 ? e.upNext = !0 : e.itemNumber === Se + 1 ? e.active = !0 : e.itemNumber === Se && (e.upNext = !0, e.active = !1);
                const t = e.styles.transform.replace("translate3d(", "").split(",");
                let a = Number(t[0].replace("px", ""));
                a -= Wt();
                const n = `translate3d(${a}px,${t[1]},${t[2]}`;
                return e.styles = {
                  ...e.styles,
                  transform: n
                }, e
              }))) : H(W.map((e => (e.itemNumber === Se - 1 ? e.upNext = !1 : e.itemNumber === Se + 2 ? e.upNext = !0 : e.itemNumber === Se + 1 ? (e.active = !0, e.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${Rt()}px, ${et}px, 0) scale(1)`
              }) : e.itemNumber === Se && (e.upNext = !0, e.active = !1, e.styles = {
                ...e.styles,
                transform: `translate3d(${Ft(e,-1)}px, ${Gt(e)}px, 0) scale(${Ht()})`
              }), e)))), Ne(Se + 1)
            }(t);
            const r = ye + 1;
            if (!(r > le))
              if (n({
                  event: t ? "carousel_swipe" : "carousel_next",
                  event_category: "carousel",
                  event_action: t ? "swipe" : "next",
                  event_label: a
                }), Zt(r, le, !1), Be) {
                let e = r * J * -1;
                e < $e && (e = $e, F(!0), R(!1), he(le)), he(r), H(W.map((t => (t.styles = {
                  ...t.styles,
                  transform: `translate3d(${e}px, 0, 0)`
                }, t))))
              } else {
                let e = xe - ae;
                0 === xe && (e = -1 * Q), he(r), e < $e && (e = $e, F(!0), R(!1), he(le)), _e(e)
              }
          }, Vt = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (dt || lt) return;
            if (ut(!0), !0 === de) return void
            function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (dt) return;
              if (Se - 1 < 0) return;
              const t = W[Se - 1]?.tina?.payload?.meta?.title ?? "card-" + (Se - 1);
              n({
                event: e ? "modal_swipe" : "modal_previous",
                event_category: "modal",
                event_action: e ? "swipe" : "previous",
                event_label: a,
                card_name: t,
                card_id: Se - 1,
                position: Se - 1,
                view_name: `${W[Se-1].source_content_id}/${t}`,
                source_content_id: W[Se - 1].source_content_id,
                source_content_name: W[Se - 1].source_content_name
              }), Zt(Se - 1, o.length, !0), Be || H(W.map((e => (e.itemNumber === Se + 1 ? e.upNext = !1 : e.itemNumber === Se - 2 ? e.upNext = !0 : e.itemNumber === Se ? (e.upNext = !0, e.active = !1, e.styles = {
                ...e.styles,
                transform: `translate3d(${Ft(e,1)}px, ${Gt(e)}px, 0) scale(${Ht()})`
              }) : e.itemNumber === Se - 1 && (e.active = !0, e.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${Rt()}px, ${et}px, 0) scale(1)`
              }), e)))), Be && H(W.map((e => {
                e.itemNumber === Se + 1 ? e.upNext = !1 : e.itemNumber === Se - 2 ? e.upNext = !0 : e.itemNumber === Se ? (e.upNext = !0, e.active = !1) : e.itemNumber === Se - 1 && (e.active = !0);
                const t = e.styles.transform.replace("translate3d(", "").split(",");
                let a = Number(t[0].replace("px", ""));
                a += Wt();
                const n = `translate3d(${a}px,${t[1]},${t[2]}`;
                return e.styles = {
                  ...e.styles,
                  transform: n
                }, e
              }))), Ne(Se - 1)
            }(t);
            const r = ye - 1;
            if (!(r < 0))
              if (n({
                  event: t ? "carousel_swipe" : "carousel_previous",
                  event_category: "carousel",
                  event_action: t ? "swipe" : "previous",
                  event_label: a
                }), Zt(r, le, !1), Be) {
                let e = r * J * -1;
                e > 0 && (e = 0, R(!0), F(!1), he(0)), he(r), H(W.map((t => (t.styles = {
                  ...t.styles,
                  transform: `translate3d(${e}px, 0, 0)`
                }, t))))
              } else {
                let e = xe + ae;
                he(r), (e > 0 || 0 === e || -1 * e < Y) && (e = 0, R(!0), F(!1), he(0)), _e(e), H(W.map((t => (t.styles = {
                  ...t.styles,
                  transform: `translate3d(${e}px, 0, 0)`
                }, t))))
              }
          }, Ut = e => {
            if (kt || de || Be) return;
            const t = T(e);
            Nt(t.x)
          }, Yt = e => {
            if (kt || 0 === St || de || Be) return;
            const t = T(e),
              a = t.x > St ? 1 : -1;
            let n = Math.abs(St - t.x) * a;
            (0 === ye && 1 === a || ye === le && -1 === a) && (n *= .35), Et(!0), Mt(n)
          }, qt = e => {
            if (kt || de || Be) return;
            const t = T(e),
              a = t.x > St ? 1 : -1,
              n = Math.abs(St - t.x);
            _t(n > Dt ? a > 0 ? "prev" : "next" : ""), Qt()
          }, Qt = () => {
            wt(!0), Nt(0), Mt(0), Et(!1)
          }, Xt = e => {
            Tt && (qt(e), Et(!1))
          }, Jt = function(e, t) {
            let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            return e.map(((e, n) => {
              let r = n * J,
                s = n;
              !1 === Be && (s = Math.ceil(.5 * n) + 1, n > 0 && (r = 2 === s ? Q : Q + J * (s - 2)));
              const i = Z[n];
              return i?.current && (i.current.scrollTop = 0), {
                ...e,
                mobileMode: Be,
                itemNumber: n,
                columnNumber: s,
                inModalMode: !1,
                upNext: !0,
                active: !1,
                openModalMode: ea,
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
          }, Kt = () => {
            const e = W[Se]?.tina?.payload?.meta?.title ?? `card-${Se}`;
            if (n({
                event: "modal_close",
                event_category: "modal",
                event_action: "close",
                event_label: a,
                card_name: e,
                card_id: Se,
                position: Se,
                view_name: `${W[Se].source_content_id}/${e}`,
                source_content_id: W[Se].source_content_id,
                source_content_name: W[Se].source_content_name
              }), Be) {
              let e = Se * J * -1;
              e < $e && (e = $e, F(!0), R(!1), he(le)), he(Se), Zt(Se, le, !1), H(Jt(o, "cardClose", `translate3d(${e}px, 0, 0)`))
            } else {
              H(Jt(o, "cardClose"));
              const e = Math.ceil((W[Se].columnNumber + 1) / ee) - 1;
              he(e);
              let t = e * ae * -1;
              Le < be ? (t = 0, R(!0), F(!0), he(0)) : t < $e ? (t = $e, R(!1), F(!0), he(le)) : Zt(e, le, !1), _e(t), Ne(0)
            }
            B.current.style.transform = "translateY(0px)", B.current.style.transition = "all var(--eventDeck-transitionCardClose)", nt(!1), Ue(!1), ue(!1), Fe(!1), Re(!1), qe(!1), setTimeout((() => {
              Ae(!0)
            }), Qe)
          };
          (0, d.useEffect)((() => {
            !1 !== Ze && (Ae(!1), nt(!1), L.style.zIndex = null, H(W.map((e => (e.transitionStyle = "", e)))))
          }), [Ze]);
          const ea = e => {
            setTimeout((() => {
              ht(e), gt(!0)
            }), 1)
          };
          (0, d.useEffect)((() => {
            if (!bt) return;
            if (gt(!1), dt) return;
            Ne(Number(yt.target.dataset.itemPosition)), Fe(!0), ct(!0), it && ot(!1);
            const e = W[yt.target.dataset.itemPosition].source_content_id,
              t = W[yt.target.dataset.itemPosition].source_content_name,
              r = W[yt.target.dataset.itemPosition]?.tina?.payload?.meta?.title;
            n({
              event: "card_click",
              event_category: "card",
              event_action: "click",
              event_label: a,
              card_name: r ?? `card-${Se}`,
              card_id: yt.target.dataset.itemPosition,
              position: yt.target.dataset.itemPosition,
              view_name: `${e}/${r}`,
              source_content_id: e,
              source_content_name: t
            })
          }), [bt]), (0, d.useEffect)((() => {
            if (!Ge || de) return;
            Fe(!1);
            const e = (() => {
              const e = L?.getBoundingClientRect().top;
              return tt(-1 * (e - p)), -1 * (e - 140)
            })();
            Be && H(W.map((e => {
              const t = e.itemNumber > Se + 3 || e.itemNumber < Se - 3;
              return e.styles = {
                ...e.styles,
                display: t ? "none" : null,
                transition: t ? "none" : null
              }, e
            }))), L.style.zIndex = "101", nt(!0), B.current && (B.current.style.transition = "all var(--eventDeck-transitionCardOpen)", B.current.style.transform = `translateY(${e}px)`), Ue(!0), setTimeout((() => {
              Re(!0)
            }), 1)
          }), [Ge]);
          const ta = () => {
            H(W.map(((e, t) => {
              e.active = t === Se, e.inModalMode = !0, e.transitionStyle = "cardOpen", Be && (e.upNext = zt(e.itemNumber));
              const a = !Be;
              let n = 0;
              if (Be) {
                const e = ke + 5 * p;
                n = window.innerHeight - e
              }
              return e.itemNumber < Se ? e.styles = {
                ...e.styles,
                height: Be ? `${n}px` : null,
                transform: `translate3d(${Ft(e,-1,a)}px, ${et}px, 0) scale(${Ht()})`
              } : e.itemNumber > Se ? e.styles = {
                ...e.styles,
                height: Be ? `${n}px` : null,
                transform: `translate3d(${Ft(e,1,a)}px, ${et}px, 0) scale(1)`
              } : e.itemNumber === Se && (e.styles = Be ? {
                ...e.styles,
                height: `${n}px`,
                transform: `translate3d(${-1*e.styles.left}px, ${et}px, 0) scale(1)`
              } : {
                left: 0,
                top: 0,
                transform: `translate3d(${Rt()}px, ${et}px, 0) scale(1)`
              }), e
            })))
          };
          (0, d.useEffect)((() => {
            !1 !== ze && !0 !== de && (ue(!0), Re(!1), Zt(Se, W.length, !0), B.current && (B.current.style.transition = "all var(--eventDeck-transitionCardOpen)", B.current.style.transform = `translateY(${et}px)`), ta(), Be ? (_e(0), ct(!1), st(!0)) : qe(!0))
          }), [ze]), (0, d.useEffect)((() => {
            rt && (st(!1), H(W.map((e => ("none" === e.styles.display && (e.styles.display = null, e.styles.transition = null), e)))))
          }), [rt]);
          const aa = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            H(W.map((t => {
              if (t.upNext = zt(t.itemNumber), t.itemNumber !== Se) {
                let e = Ft(t, 1);
                t.itemNumber < Se && (e = Ft(t, -1)), t.styles = {
                  ...t.styles,
                  transform: `translate3d(${e}px, ${Gt(t)}px, 0) scale(${Ht()})`
                }
              } else t.itemNumber === Se && !Be && e && (t.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${Rt()}px, ${et}px, 0) scale(1)`
              });
              return t
            })))
          };
          (0, d.useEffect)((() => {
            !1 !== Ye && !0 !== Be && (qe(!1), setTimeout((() => {
              aa(), ct(!1)
            }), 1))
          }), [Ye]), (0, d.useEffect)((() => {
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
            j(!0), _e(0), he(0);
            let e = Math.ceil(Math.ceil(Le / J) / ee);
            Be && (e = W.length - 1), e < 0 && (e = 1), Zt(0, e, !1), de && Kt()
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
            l(e)
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
          }), [dt, lt, de]), (0, d.useEffect)((() => {
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
                    const a = e.styles.transform.split(","),
                      n = `${a[0]}, ${t}px,${a[2]}`;
                    e.styles = {
                      ...e.styles,
                      transform: n
                    }
                  }
                  return e
                }))), B.current) {
                const t = -1 * (e - p);
                B.current.style.transform = `translateY(${t}px)`
              }
            })()
          }), [Be, de, et]), (0, d.useEffect)((() => {
            Le < pe * me && 0 === ye ? (_e(0), F(!0), R(!0)) : xe < $e ? (F(!0), R(!1), he(le), _e($e)) : xe < 0 && (F(!1), he(le - 1)), Le > pe * me && G && F(!1)
          }), [$e]), (0, d.useEffect)((() => {
            if (P.current) {
              I(P.current);
              const e = w(document.documentElement, "--root-font-size"),
                t = w(P.current, "--eventDeck-modalGutters") * e;
              Ee(t);
              const a = me - 2 * t;
              ge(a), ve(a / me);
              let n = w(P.current, "--eventDeck-modalBottomGutter");
              n *= e;
              const r = window.innerHeight - (ke + n);
              se(.5 * a < r ? a / 4 : .5 * r);
              const s = w(P.current, "--eventDeck-mobileBreakpoint");
              He(s);
              let i = w(P.current, "--eventDeck-itemSize");
              i *= e, U(i);
              let l = w(P.current, "--eventDeck-modalGutterGap");
              l *= e, Pe(l);
              let d = w(P.current, "--eventDeck-insideMargin");
              d *= e;
              const m = !1 === Be ? 2 * i + d : i + d;
              q(m), X(m + d);
              const f = i + d;
              K(f);
              let p = Math.ceil(.5 * (o.length - 1)) * f + m;
              Be && (p = o.length * f), Ie(p), 0 !== Le && Me(-1 * Le + a);
              let v = Math.ceil(Math.ceil(p / f) / ee);
              (Be || de) && (v = W.length - 1), ce(v);
              const b = w(P.current, "--eventDeck-itemScaleUpAmount");
              Ke(b), Xe(w(P.current, "--eventDeck-cardCloseTransitionDuration")), x(w(P.current, "--eventDeck-itemImageTitleMargins") * e), null !== c && e !== c && (u(e), de && aa()), null === c && u(e)
            }
          }), [P, o]), (0, d.useEffect)((() => {
            if (de && !Be) {
              aa();
              const e = L?.getBoundingClientRect().top,
                t = -1 * (e - p);
              t !== et && tt(t)
            }
          }), [k]), (0, d.useEffect)((() => {
            const e = m()((e => {
              fe(e), Oe(e < We);
              const t = (1 - pe) / 2;
              je(e * t);
              const a = e - 2 * Te,
                n = Math.round(a / J);
              te(n), ne(n * J), oe(e - e * t);
              const r = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth;
              if (r !== k && E(r), de && r === k && !M) {
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
            !1 !== de && !0 !== M && (Be ? ta() : aa(!0))
          }), [ie, ae, De, V, me, Ce, re, et]), (0, d.useEffect)((() => {
            const e = () => {
              if (P.current && it) {
                const e = P.current.getBoundingClientRect(),
                  t = .2 * window.innerHeight;
                window.innerHeight - e.top >= t && ot(!1)
              }
            };
            return e(), window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
          }), [P]);
          const na = (0, d.useCallback)((() => {
            if (null !== P.current && !r) {
              const {
                top: e
              } = P?.current?.getBoundingClientRect() || 0;
              e <= .6 * window.innerHeight && (n({
                event: "page_section_impression",
                event_action: "impression",
                event_category: "page_section",
                event_label: a
              }), s(!0))
            }
          }), [P]);
          (0, d.useEffect)((() => (window.addEventListener("scroll", na), () => {
            window.removeEventListener("scroll", na)
          })), [na, P]), (0, d.useEffect)((() => {
            "next" === xt ? (At(null, !0), _t("")) : "prev" === xt && (Vt(null, !0), _t(""))
          }), [xt]), (0, d.useEffect)((() => {
            P.current && P.current.addEventListener("mouseleave", (() => {
              Tt && Qt()
            }))
          }), [P, Tt]), (0, d.useEffect)((() => (document.body.addEventListener("mouseleave", Xt), () => {
            document.body.removeEventListener("mouseleave", Xt)
          })), [Tt]), (0, d.useEffect)((() => {
            kt && setTimeout((() => {
              wt(!1), Nt(0)
            }), pt)
          }), [kt]), (0, d.useEffect)((() => {
            Pt(Be ? 20 : 100)
          }), [Be]), (0, d.useEffect)((() => {
            vt(de ? 500 : 100)
          }), [de]);
          const ra = (0, b.useTinaComponents)(),
            sa = (0, d.useMemo)((() => ({
              ...ra,
              CardWithImageGallery: h.Z,
              HTMLElement: f.HTMLElement,
              ImageWithBadge: f.ImageWithBadge,
              Carousel: f.Carousel,
              GroupOfItems: v(),
              UnorderedList: f.UnorderedList
            })), [ra]),
            ia = (0, d.useMemo)((() => W.map((e => (0, d.createElement)(C, {
              ...e,
              refDeck: P,
              key: e?.id ?? e?.sync_hash,
              components: sa,
              prevPage: Vt,
              nextPage: At,
              loadCssRawValue: w,
              selectedItemNumber: Se,
              carouselTitle: a,
              sharedDraggingDelta: Ct,
              setSharedDraggingDelta: jt
            })))), [W, P, sa, Vt, At, Se]);
          return !ia?.length || ia.length <= 0 ? null : (0, $.jsxs)($.Fragment, {
            children: [(0, $.jsx)("div", {
              className: "_2b820ae1fad6c6efc1b08e0c6762959d6e40",
              "data-modal-mode": Ve,
              "aria-hidden": "true"
            }), (0, $.jsxs)("div", {
              className: "_2b820ae1fad6c6efdd9c11d21c9d76e0f525",
              "data-modal-mode": de,
              "data-faded": it,
              ref: P,
              onTouchStart: Ut,
              onTouchMove: Yt,
              onTouchEnd: qt,
              onMouseDown: Ut,
              onMouseMove: Yt,
              onMouseUp: qt,
              tabIndex: -1,
              role: "presentation",
              children: [(0, $.jsxs)("div", {
                className: "_2b820ae1fad6c6effe4a9770ab07662ba456",
                "data-modal-mode": de,
                ref: B,
                "data-animating": at,
                children: [(0, $.jsx)("h2", {
                  className: "_2b820ae1fad6c6efbdad5a5a38f931159788",
                  children: a
                }), (0, $.jsx)(D, {
                  prevPage: Vt,
                  prevBtnDisabled: z,
                  nextPage: At,
                  nextBtnDisabled: G,
                  selectedItemNumber: Se,
                  itemsData: o,
                  closeModalMode: Kt,
                  inModalMode: de
                })]
              }), (0, $.jsx)("div", {
                className: "_2b820ae1fad6c6effe13159c37ea559619ab",
                "data-modal-mode": de,
                "data-is-dragging": Tt,
                style: {
                  transform: `translate3d(${xe+$t}px, 0, 0)`,
                  width: `${Le}px`
                },
                ref: O,
                children: ia
              })]
            })]
          })
        };
      var L = a(568)
    },
    568: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        Card: () => n.Z,
        CardGrid: () => k,
        CardWithImageGallery: () => M.Z,
        CoverCard: () => $,
        Deck: () => j.Z,
        TextCard: () => C.Z
      });
      var n = a(498),
        r = a(4932),
        s = a(3653),
        i = a.n(s),
        o = a(8976),
        l = a(420),
        c = a.n(l),
        d = a(9542),
        u = a(3684);
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
      var f = a(6160);
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
            price: l,
            slashedPrice: c,
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
                        children: l
                      }), (0, f.jsx)("p", {
                        className: m.slashedPrice,
                        children: c
                      })]
                    })]
                  })]
                })]
              })
            })
          })
        };
      var b = a(2174),
        g = a(9361);
      const y = {
          clrCardModalContent: "_2b820ae1fad6c6efde3a11886ff7c7c01a80",
          expandedCard: "_2b820ae1fad6c6efe1a0223a78c9aa470ef6",
          content: "_2b820ae1fad6c6efd104d01f2048b62b51d8",
          details: "_2b820ae1fad6c6efcc5da9e77f92def47e14",
          calloutHeaders: "_2b820ae1fad6c6efac6438a76bed0e28cf70"
        },
        {
          variants: h
        } = o.framer.Animations,
        x = e => {
          let {
            id: t,
            content: a,
            size: n = "clr",
            cardType: r = "release",
            title: s,
            subheader: i,
            subtitle: o,
            storeInfo: l = {},
            expandedType: c,
            to: m,
            image: p,
            deckProps: x,
            tina: _ = {},
            position: S
          } = e;
          const N = (0, d.useTinaPayload)(),
            k = _?.payload?.meta?.cdn ?? N?.meta?.prod ?? !1,
            w = {
              image: {
                ...p,
                prod: k
              }
            },
            T = [p];
          return (0, f.jsx)(u.Z, {
            id: t,
            title: s,
            context: "clr-card",
            size: n,
            expandedType: c,
            images: w,
            deckProps: x,
            prod: k,
            position: S,
            modalProps: {
              className: y.clrCardModal,
              contentClassName: y.clrCardModalContent
            },
            variants: h.plainCard,
            payload: {
              content: a
            },
            expandedCardContents: (0, f.jsx)(g.Z, {
              images: T,
              prod: k
            }),
            children: (0, f.jsx)(b.Z, {
              expandedType: c,
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
                expandedType: c,
                price: l?.price,
                slashedPrice: l?.slashedPrice,
                badge: l?.badge
              })
            })
          })
        };
      var _ = a(4859),
        S = a(3385);

      function N(e, t) {
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
          } else i().isObject(e) && !i().isArray(e) ? N(e, t) : i().isArray(e) && (a[n] = e.map((e => i().isObject(e) ? N(e, t) : e)))
        })), a || []
      }
      const k = e => {
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
              Cta: o.Cta,
              GroupOfItems: c(),
              Grid: o.Grid,
              ClrCard: x,
              ClrCollapsedCard: v,
              CalloutSection: o.CalloutSection,
              TrackList: o.TrackList
            })), [n]),
            l = (() => {
              const {
                data: e
              } = (0, _.useQuery)(S.TinaModulesList, {
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
            m = (0, r.useMemo)((() => l ? l.reduce(((e, t) => {
              if (t) {
                const {
                  id: a,
                  tina: n
                } = t, r = i().clone(n);
                i().set(r, "payload.meta.id", a);
                const o = r?.payload,
                  l = o?.meta?.cdn ?? !1 ?? u?.meta?.prod ?? !1,
                  c = N(o?.content?.[0], l),
                  m = o?.meta?.title,
                  p = c?._memoq?.subheader,
                  v = c?.image,
                  b = o?.content?.[0].expandedType,
                  g = o?.content?.[0].cardType,
                  y = c?.content ?? [];
                "release" === g && e.push((0, f.jsx)(d.TinaParser, {
                  components: s,
                  tina: r,
                  componentProps: {
                    id: a,
                    tina: r,
                    title: m,
                    subheader: p,
                    image: v,
                    expandedType: b,
                    modalContent: y
                  }
                }, a))
              }
              return e
            }), []) : null), [l, t]);
          return (0, f.jsx)(o.Grid, {
            className: a,
            children: m
          })
        },
        w = {
          customModalContent: "_2b820ae1fad6c6eff348dacb636353b11c51",
          content: "_2b820ae1fad6c6efdf95f12ea94658664861",
          secondary: "_2b820ae1fad6c6efac4425db45829109b6bb",
          logo: "_2b820ae1fad6c6efe0170396b8c6129f37ee"
        },
        {
          variants: T
        } = o.framer.Animations,
        E = a(5976),
        $ = e => {
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
            images: l = [],
            deckProps: c = {},
            to: m = null,
            tina: p = {}
          } = e;
          const v = (0, d.useTinaPayload)(),
            y = p?.payload?.meta?.cdn ?? v?.meta?.prod ?? !1,
            [h, x] = (0, r.useState)(c?.size ?? s),
            {
              learnMoreUrl: _,
              body: S
            } = v.content[0]._memoq;
          return (0, r.useEffect)((() => {
            x(c?.size ?? s)
          }), [c?.size, s]), (0, f.jsx)(u.Z, {
            id: t,
            title: a,
            size: h,
            expandedType: i,
            images: l,
            deckProps: c,
            prod: y,
            payload: {
              content: n,
              meta: {}
            },
            variants: T.plainCard,
            textOverlayProps: o,
            modalProps: {
              className: w.customModal,
              contentClassName: w.customModalContent
            },
            expandedCardContents: (0, f.jsx)(g.Z, {
              images: l,
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
                  src: E
                }), (0, f.jsx)("h2", {
                  children: a
                }), (0, f.jsx)("p", {
                  children: S
                }), (0, f.jsx)("a", {
                  href: _,
                  children: "Learn more"
                })]
              })
            })
          })
        };
      var M = a(3614),
        C = a(1324),
        j = a(2)
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
          var l = o;
          o = new Set, l.forEach((function(e) {
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