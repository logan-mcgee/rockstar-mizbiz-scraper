(self.webpackChunk_rockstargames_modules_core_card = self.webpackChunk_rockstargames_modules_core_card || []).push([
  [238, 556], {
    7579: (e, t, n) => {
      var a = n(8162).Symbol;
      e.exports = a
    },
    6138: (e, t, n) => {
      var a = n(7579),
        r = n(1780),
        s = n(5411),
        o = a ? a.toStringTag : void 0;
      e.exports = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : o && o in Object(e) ? r(e) : s(e)
      }
    },
    6367: (e, t, n) => {
      var a = n(8847),
        r = /^\s+/;
      e.exports = function(e) {
        return e ? e.slice(0, a(e) + 1).replace(r, "") : e
      }
    },
    8788: (e, t, n) => {
      var a = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
      e.exports = a
    },
    1780: (e, t, n) => {
      var a = n(7579),
        r = Object.prototype,
        s = r.hasOwnProperty,
        o = r.toString,
        c = a ? a.toStringTag : void 0;
      e.exports = function(e) {
        var t = s.call(e, c),
          n = e[c];
        try {
          e[c] = void 0;
          var a = !0
        } catch (e) {}
        var r = o.call(e);
        return a && (t ? e[c] = n : delete e[c]), r
      }
    },
    5411: e => {
      var t = Object.prototype.toString;
      e.exports = function(e) {
        return t.call(e)
      }
    },
    8162: (e, t, n) => {
      var a = n(8788),
        r = "object" == typeof self && self && self.Object === Object && self,
        s = a || r || Function("return this")();
      e.exports = s
    },
    8847: e => {
      var t = /\s/;
      e.exports = function(e) {
        for (var n = e.length; n-- && t.test(e.charAt(n)););
        return n
      }
    },
    2575: (e, t, n) => {
      var a = n(7934),
        r = n(3193),
        s = n(1869),
        o = Math.max,
        c = Math.min;
      e.exports = function(e, t, n) {
        var i, l, u, d, m, f, p = 0,
          v = !1,
          g = !1,
          b = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function x(t) {
          var n = i,
            a = l;
          return i = l = void 0, p = t, d = e.apply(a, n)
        }

        function h(e) {
          var n = e - f;
          return void 0 === f || n >= t || n < 0 || g && e - p >= u
        }

        function y() {
          var e = r();
          if (h(e)) return _(e);
          m = setTimeout(y, function(e) {
            var n = t - (e - f);
            return g ? c(n, u - (e - p)) : n
          }(e))
        }

        function _(e) {
          return m = void 0, b && i ? x(e) : (i = l = void 0, d)
        }

        function S() {
          var e = r(),
            n = h(e);
          if (i = arguments, l = this, f = e, n) {
            if (void 0 === m) return function(e) {
              return p = e, m = setTimeout(y, t), v ? x(e) : d
            }(f);
            if (g) return clearTimeout(m), m = setTimeout(y, t), x(f)
          }
          return void 0 === m && (m = setTimeout(y, t)), d
        }
        return t = s(t) || 0, a(n) && (v = !!n.leading, u = (g = "maxWait" in n) ? o(s(n.maxWait) || 0, t) : u, b = "trailing" in n ? !!n.trailing : b), S.cancel = function() {
          void 0 !== m && clearTimeout(m), p = 0, i = f = l = m = void 0
        }, S.flush = function() {
          return void 0 === m ? d : _(r())
        }, S
      }
    },
    7934: e => {
      e.exports = function(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
      }
    },
    8220: e => {
      e.exports = function(e) {
        return null != e && "object" == typeof e
      }
    },
    7355: (e, t, n) => {
      var a = n(6138),
        r = n(8220);
      e.exports = function(e) {
        return "symbol" == typeof e || r(e) && "[object Symbol]" == a(e)
      }
    },
    3193: (e, t, n) => {
      var a = n(8162);
      e.exports = function() {
        return a.Date.now()
      }
    },
    1869: (e, t, n) => {
      var a = n(6367),
        r = n(7934),
        s = n(7355),
        o = /^[-+]0x[0-9a-f]+$/i,
        c = /^0b[01]+$/i,
        i = /^0o[0-7]+$/i,
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
        var n = c.test(e);
        return n || i.test(e) ? l(e.slice(2), n ? 2 : 8) : o.test(e) ? NaN : +e
      }
    },
    9135: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        Card: () => O.Card,
        CardExpanded: () => a.Z,
        CardGrid: () => O.CardGrid,
        CardHeader: () => r.Z,
        CardWithImageGallery: () => O.CardWithImageGallery,
        CardWrapper: () => s.Z,
        ClrCard: () => o.Z,
        ClrCollapsedCard: () => c.Z,
        CoverCard: () => O.CoverCard,
        Deck: () => O.Deck,
        EventsDeck: () => I,
        LayeredImageFrame: () => i.Z,
        LinkoutWrapper: () => l.Z,
        TextCard: () => O.TextCard,
        TextOverlay: () => u.Z,
        ThumbsGalleryOrThumb: () => d.Z
      });
      var a = n(1132),
        r = n(8753),
        s = n(1278),
        o = n(982),
        c = n(5231),
        i = n(2984),
        l = n(5369),
        u = n(7449),
        d = n(7556),
        m = n(927),
        f = n(2575),
        p = n.n(f),
        v = n(8976),
        g = n(420),
        b = n.n(g),
        x = n(9542),
        h = n(6711),
        y = n(9929),
        _ = n(7067),
        S = n(5370),
        w = n.n(S),
        N = n(4859),
        $ = n(8845);
      var E = n(559);
      const k = (e, t) => {
          let n = getComputedStyle(e).getPropertyValue(t);
          return n = n.replace("px", "").replace("rem", "").replace("em", ""), n = n.replace("vh", "").replace("vw", "").replace("vmin", "").replace("vmax", ""), n = n.replace("ms", "").replace("s", ""), Number(n)
        },
        M = e => ({
          x: void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
          y: void 0 !== e.changedTouches ? e.changedTouches[0].screenY : e.screenY
        }),
        T = e => e.scrollHeight > e.clientHeight;
      var C = n(3705);

      function D(e, t) {
        const n = {
          ...e
        };
        return w().forOwn(e, ((e, a) => {
          if ("image" === a) {
            const e = n[a];
            n[a] = {
              ...e,
              prod: t
            }
          } else w().isObject(e) && !w().isArray(e) ? D(e, t) : w().isArray(e) && (n[a] = e.map((e => w().isObject(e) ? D(e, t) : e)))
        })), n
      }
      const j = (0, y.withTranslations)((e => {
          let {
            active: t,
            styles: n,
            title: a,
            itemNumber: r,
            inModalMode: s,
            openModalMode: o,
            element: c,
            upNext: i,
            mobileMode: l,
            refDeck: u,
            components: d,
            tina: f,
            prevPage: g,
            nextPage: b,
            transitionStyle: y,
            selectedItemNumber: _,
            carouselTitle: S,
            sharedDraggingDelta: w,
            setSharedDraggingDelta: N
          } = e;
          const {
            track: $
          } = (0, h.useGtmTrack)(), j = (0, m.createRef)(), P = (0, m.createRef)(), L = (0, m.createRef)(), I = (0, m.createRef)(), O = (0, m.createRef)(), [R, W] = (0, m.useState)(!1), [B, H] = (0, m.useState)(0), [G, z] = (0, m.useState)(0), [Z, A] = (0, m.useState)(0), [F, U] = (0, m.useState)(0), [Y, V] = (0, m.useState)(0), [X, Q] = (0, m.useState)(!1), [q, J] = (0, m.useState)(0), [K, ee] = (0, m.useState)(0), [te, ne] = (0, m.useState)(0), [ae, re] = (0, m.useState)("700"), [se, oe] = (0, m.useState)(-1), [ce, ie] = (0, m.useState)(0), [le, ue] = (0, m.useState)(0), [de, me] = (0, m.useState)(0), [fe, pe] = (0, m.useState)(!1), [ve, ge] = (0, m.useState)(""), [be, xe] = (0, m.useState)(null), [he, ye] = (0, m.useState)(!1), [_e, Se] = (0, m.useState)(null), [we, Ne] = (0, m.useState)(!1), [$e, Ee] = (0, m.useState)(!1), ke = (0, x.useTinaPayload)(), Me = f?.payload?.meta?.cdn ?? !1 ?? ke?.meta?.prod ?? !1, Te = (0, x.useTranslations)({
            payload: f?.payload,
            variables: f?.variables
          }), Ce = Te?.meta ?? {}, De = D(Te?.content?.[0], Me), je = (0, m.useMemo)((() => De?.images?.[0]?.image?.badge), [De]), Pe = (0, m.useMemo)((() => De.title ?? a ?? Ce?.title), [a, Ce?.title, De.title]), Le = (0, E.useImageParser)({
            alt: De?.images?.[0]?.image?.alt ?? "",
            ariaLabel: De?.images?.[0]?.image?.alt ?? "",
            sources: De?.images?.[0]?.image?.sources ?? [],
            prod: Me
          }), Ie = Le?.src?.mobile ?? !1, Oe = (0, m.useMemo)((() => Ce?.foreignId), [Ce]), Re = (0, m.useMemo)((() => Ce?.foreignTitle), [Ce]), [We, Be] = (0, m.useState)(0), [He, Ge] = (0, m.useState)(0), [ze, Ze] = (0, m.useState)(0), [Ae, Fe] = (0, m.useState)(0), [Ue, Ye] = (0, m.useState)(!1), [Ve, Xe] = (0, m.useState)(0), [Qe, qe] = (0, m.useState)(20), [Je, Ke] = (0, m.useState)(null), [et, tt] = (0, m.useState)(!1), nt = (0, m.useCallback)((e => {
            if (!0 === X || !s && !l || he) return;
            const t = M(e);
            Be(t.x), Ge(t.y)
          }), [X, s]), at = e => {
            nt(e)
          }, rt = e => {
            if (!0 === X || 0 === We || !s && !l || he) return;
            const t = M(e),
              n = t.x > We ? 1 : -1,
              a = Math.abs(We - t.x);
            s && !l && a > Qe ? (tt(!0), ge(n > 0 ? "prev" : "next"), ot()) : (Ye(!0), Xe(a * n), N(a * n))
          }, st = e => {
            if (!0 === X || !s && !l || he) return;
            const t = M(e),
              n = t.x > We ? 1 : -1,
              a = Math.abs(We - t.x),
              r = Math.abs(He - t.y);
            s && !l ? (ot(), ge("")) : a > Qe && r < 25 ? (tt(!0), ge(n > 0 ? "prev" : "next"), ot()) : ot()
          }, ot = () => {
            Q(!0), Be(0), Ge(0), Ye(!1), Xe(0), N(0)
          };
          return (0, m.useEffect)((() => {
            let e = q;
            R ? e = 0 : s && !l && (e = q), H(e)
          }), [R, l, s, G, F, K, te, Z, q]), (0, m.useEffect)((() => {
            W(!(!s || !l))
          }), [s, l]), (0, m.useEffect)((() => {
            s && t && $({
              event: "virtualPageview",
              display_type: l ? "mobile" : "desktop",
              view_name: `${Oe}/${Pe}`,
              source_content_id: Oe,
              source_content_name: Re
            })
          }), [s, t]), (0, m.useEffect)((() => {
            const e = p()(((e, t) => {
              let n = 18;
              if (e?.documentElement && (n = k(e?.documentElement, "--root-font-size")), le !== t.innerHeight && ue(t.innerHeight), u?.current) {
                ne(k(u.current, "--eventDeck-marginSm") * n);
                const e = n * k(u?.current, "--eventDeck-modalGutters"),
                  a = t?.innerWidth,
                  r = a - 2 * e;
                z(r), I.current && l && A(r), U(k(u.current, "--eventDeck-itemSize") * n), me(k(u.current, "--eventDeck-phaseOneTransitionDuration"));
                const s = k(u?.current, "--eventDeck-itemImageTitleMargins") * n,
                  o = P?.current?.clientHeight,
                  c = o + s;
                Number.isNaN(c) || J(c), ie(k(u?.current, "--eventDeck-headerHeight") * n)
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
          }), [u, l]), (0, m.useEffect)((() => {
            if (j.current) {
              const e = j.current.clientHeight;
              Number.isNaN(e) || ee(e)
            }
          }), [j]), (0, m.useEffect)((() => {
            if (s && l && I.current && (I.current.style.transform = "scale(1) translate3d(0, 0, 0)"), !s && l && I.current) {
              const e = 228 / G;
              I.current.style.transform = `scale(${e}) translate3d(0, 0, 0)`
            }!l && I.current && (I.current.style.transform = null)
          }), [s, l, G, Z]), (0, m.useEffect)((() => {
            const e = .5 * G,
              t = le - ce - 3 * te;
            V(G - (e < t ? e : t))
          }), [G, te, le]), (0, m.useEffect)((() => {
            "next" === ve ? (b(null, !0), ge("")) : "prev" === ve && (g(null, !0), ge(""))
          }), [ve]), (0, m.useEffect)((() => {
            Ze(0), Fe(0)
          }), [l]), (0, m.useEffect)((() => {
            l ? qe(s ? 35 : 20) : s && qe(50)
          }), [s, l]), (0, m.useEffect)((() => {
            let e = [],
              t = 0,
              a = 0;
            if (null !== n?.transform) {
              e = n.transform.split(",");
              const r = e[0].split("(");
              t = Number(r[1].replace("px", "")), Ze(t), a = Number(e[1].replace("px", "")), Fe(a)
            }
          }), [n]), (0, m.useEffect)((() => {
            if (!X) return;
            clearTimeout(be);
            const e = setTimeout((() => {
              Q(!1), Be(0)
            }), 200);
            xe(e)
          }), [X, 200]), (0, m.useEffect)((() => {
            if (!et) return;
            clearTimeout(Je);
            const e = setTimeout((() => {
              tt(!1)
            }), 1e3);
            Ke(e)
          }), [et]), (0, m.useEffect)((() => {
            s && clearTimeout(se), setTimeout((() => {
              pe(!fe)
            }), de)
          }), [s]), (0, m.useEffect)((() => (document.body.addEventListener("mouseleave", ot), () => {
            document.body.removeEventListener("mouseleave", ot)
          })), []), (0, m.useEffect)((() => {
            O.current ? Ne(T(O.current)) : Ne(!1), void 0 !== c && c.current ? Ee(T(c.current)) : Ee(!1)
          }), [c, O, t, s, fe]), De ? (0, C.jsxs)("div", {
            className: "rockstargames-modules-core-cardf724de2aaf0c24a0291b19ecd2b814b1",
            ref: c,
            "data-item-position": r,
            "data-modal-mode": s,
            "data-active-item": t,
            "data-up-next": i,
            "data-transition": Ue || 0 !== w ? "none" : y,
            "data-scrollable": $e,
            style: {
              ...n,
              transform: s && t && !l ? `translate3d(${ze+Ve}px, ${Ae}px, 0)` : l && !s ? `translate3d(${ze+w}px, ${Ae}px, 0)` : n?.transform
            },
            onClick: e => {
              et || (s ? s && !l && (r < _ ? g(e, !0) : r > _ && b(e, !0)) : o(e))
            },
            onMouseEnter: () => {
              s || W(!0), s || l || (clearTimeout(se), oe(setTimeout((() => {
                $({
                  event: "card_title_hover",
                  event_category: "card",
                  event_action: "title_hover",
                  event_label: S,
                  card_name: Pe,
                  card_id: r,
                  position: r,
                  view_name: `${Oe}/${Re}`,
                  source_content_id: Oe,
                  source_content_name: Re
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
            children: [(0, C.jsxs)("div", {
              className: "rockstargames-modules-core-cardb1df426dc9d94b7a6146afd270e52a2c",
              "data-full-header": R,
              ref: L,
              style: {
                height: s && l ? `${G}px` : null,
                width: s && l ? `${G}px` : null
              },
              children: [Ie && (0, C.jsx)("img", {
                ref: I,
                src: `${Le?.src?.mobile}?im=Resize,width=${ae}`,
                alt: Le?.alt,
                style: {
                  width: 0 !== Z && l ? `${Z}px` : null,
                  height: 0 !== Z && l ? `${Z}px` : null
                }
              }), (0, C.jsxs)("div", {
                className: "rockstargames-modules-core-cardc0c5b13abb52ee818993adb202adfdef",
                style: {
                  transform: !l || l && s ? `translate3d(0, ${B}px, 0)` : null
                },
                children: [je && (0, C.jsx)("div", {
                  className: "rockstargames-modules-core-cardac942eedea67312b608a74c187b3d41a",
                  ref: j,
                  children: (0, C.jsx)(v.Badge, {
                    text: je
                  })
                }), (0, C.jsx)("span", {
                  className: "rockstargames-modules-core-carde571b2cc54ee1ed4f6fd8e4f40eea1cc",
                  ref: P,
                  "aria-hidden": s,
                  children: Pe
                })]
              })]
            }), (0, C.jsxs)("div", {
              className: "rockstargames-modules-core-cardd364155d044c51b58145159cb03dc10a",
              ref: O,
              onScroll: () => {
                ye(!0), ot(), clearTimeout(_e);
                const e = setTimeout((() => {
                  ye(!1)
                }), 100);
                Se(e)
              },
              style: {
                top: s && l ? `${G}px` : null,
                width: s && !l && t ? `${Y}px` : null,
                touchAction: we || l ? "unset" : "none"
              },
              children: [Pe && (0, C.jsx)("span", {
                className: "rockstargames-modules-core-cardd180db136ab01f7ee17339f842a7d8c5",
                children: Pe
              }), (0, C.jsx)("div", {
                className: "rockstargames-modules-core-cardf3e9c2d41ccb3ee27908261fb6bc6172",
                children: (0, C.jsx)(x.TinaParser, {
                  components: d,
                  tina: {
                    meta: Ce,
                    payload: {
                      content: De?.content
                    }
                  }
                })
              })]
            })]
          }) : null
        })),
        P = "rockstargames-modules-core-cardb6af701d24927167fad008a243e5da98",
        L = e => {
          let {
            prevPage: t,
            prevBtnDisabled: n,
            nextPage: a,
            nextBtnDisabled: r,
            selectedItemNumber: s,
            itemsData: o,
            closeModalMode: c,
            inModalMode: i
          } = e;
          return (0, C.jsxs)(C.Fragment, {
            children: [(0, C.jsxs)("div", {
              className: "rockstargames-modules-core-cardf9204f16bee8b7aea245349d32568dcc",
              children: [(0, C.jsx)("button", {
                className: P,
                type: "button",
                onClick: t,
                disabled: n,
                "aria-label": "Previous"
              }), (0, C.jsxs)("span", {
                className: "rockstargames-modules-core-cardb74ea3c0b3198fba27655363d4c2097d",
                "aria-hidden": !i,
                "aria-label": `On page ${s+1} of ${o.length}`,
                children: [s + 1, (0, C.jsx)("span", {
                  className: "rockstargames-modules-core-cardfd374394268e76182e6e17aaa5b019bd"
                }), o.length]
              }), (0, C.jsx)("button", {
                className: P,
                type: "button",
                onClick: a,
                disabled: r,
                "aria-label": "Next"
              })]
            }), (0, C.jsx)("button", {
              className: "rockstargames-modules-core-cardfbf4e137be6c0901e0e148af9018cb75",
              type: "button",
              onClick: c,
              "aria-label": "Close",
              "aria-hidden": !i
            })]
          })
        },
        I = e => {
          const {
            setBodyIsScrollable: t
          } = (0, y.useBodyScrollable)(), {
            title: n
          } = e, {
            track: a
          } = (0, h.useGtmTrack)(), [r, s] = (0, m.useState)(!1), o = (() => {
            const {
              data: e
            } = (0, N.useQuery)($.TinaModulesList, {
              variables: {
                type: "gtao-event-card",
                orderBy: "priority",
                orderDirection: "desc"
              }
            }), t = e?.tinaModulesList?.results, n = w().map(t, "id");
            return (0, v.useTinaModuleFetchByIds)({
              ids: n
            })
          })(), [c, i] = (0, m.useState)([]), [l, u] = (0, m.useState)(null), [d, f] = (0, m.useState)(0), [g, S] = (0, m.useState)(window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth), [E, T] = (0, m.useState)(!1), D = (0, m.createRef)(), [P, I] = (0, m.useState)(null), O = (0, m.createRef)(), R = (0, m.createRef)(), [W, B] = (0, m.useState)([]), [H, G] = (0, m.useState)(!0), [z, Z] = (0, m.useState)(!1), [A, F] = (0, m.useState)([]), [U, Y] = (0, m.useState)(404), [V, X] = (0, m.useState)(808), [Q, q] = (0, m.useState)(672), [J, K] = (0, m.useState)(336), [ee, te] = (0, m.useState)(0), [ne, ae] = (0, m.useState)(0), [re, se] = (0, m.useState)(0), [oe, ce] = (0, m.useState)(0), [ie, le] = (0, m.useState)(0), [ue, de] = (0, m.useState)(!1), [me, fe] = (0, m.useState)(window.innerWidth), [pe, ve] = (0, m.useState)(0), [ge, be] = (0, m.useState)(0), [xe, he] = (0, m.useState)(0), [ye, _e] = (0, m.useState)(0), [Se, we] = (0, m.useState)(0), [Ne, $e] = (0, m.useState)(0), [Ee, ke] = (0, m.useState)(0), [Me, Te] = (0, m.useState)(-1e3), [Ce, De] = (0, m.useState)(0), [je, Pe] = (0, m.useState)(50), [Le, Ie] = (0, m.useState)(0), [Oe, Re] = (0, m.useState)(!1), [We, Be] = (0, m.useState)(768), [He, Ge] = (0, m.useState)(!1), [ze, Ze] = (0, m.useState)(!1), [Ae, Fe] = (0, m.useState)(!1), [Ue, Ye] = (0, m.useState)(!1), [Ve, Xe] = (0, m.useState)(!1), [Qe, qe] = (0, m.useState)(1e3), [Je, Ke] = (0, m.useState)(1.2), [et, tt] = (0, m.useState)(0), [nt, at] = (0, m.useState)(!1), [rt, st] = (0, m.useState)(!1), [ot, ct] = (0, m.useState)(!0), [it, lt] = (0, m.useState)(!1), [ut, dt] = (0, m.useState)(!1), [mt, ft] = (0, m.useState)(null), [pt, vt] = (0, m.useState)(100), [gt, bt] = (0, m.useState)(!1), [xt, ht] = (0, m.useState)({}), [yt, _t] = (0, m.useState)(""), [St, wt] = (0, m.useState)(0), [Nt, $t] = (0, m.useState)(!1), [Et, kt] = (0, m.useState)(!1), [Mt, Tt] = (0, m.useState)(0), [Ct, Dt] = (0, m.useState)(0), [jt, Pt] = (0, m.useState)(100), [Lt, It] = (0, m.useState)(!1), [Ot, Rt] = (0, m.useState)(!1), Wt = () => me * pe + je, Bt = () => !1 === Oe ? Je : 1, Ht = e => e === Se - 1 || e === Se + 1, Gt = () => -1 * ye, zt = function(e) {
            let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (!0 === Oe) return 0;
            const n = e.itemNumber % 2 == 0,
              a = U * Je;
            if (!0 === n && 0 !== e.itemNumber) {
              const n = k(e?.element?.current, "top");
              let r = n - re;
              return !1 === t && (r -= n), -1 * (.5 * a + r) + et
            }
            return re - .5 * a + et
          }, Zt = function(e, t) {
            let n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              a = Gt();
            !1 === n && (a = 0);
            const r = me * pe,
              s = !1 === Oe ? U * Bt() : r;
            return e.inModalMode && Oe ? -1 === t ? Wt() * (Se - e.itemNumber) * -1 - e.styles.left : Wt() * (e.itemNumber - Se) - e.styles.left : -1 === t ? -1 * e.styles.left - s - je + a : r - e.styles.left + je + a
          }, At = (e, t, n) => {
            -1 === t && (Z(!1), G(!0)), Z(!1 === n && e >= t || !0 === n && e + 1 === t), G(e <= 0)
          }, Ft = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (ut || it) return;
            if (dt(!0), ue) return void
            function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (Se + 1 >= c.length) return;
              const t = W[Se + 1]?.tina?.payload?.meta?.title ?? `card-${Se+1}`;
              a({
                event: e ? "modal_swipe" : "modal_next",
                event_category: "modal",
                event_action: e ? "swipe" : "next",
                event_label: n,
                card_name: t,
                card_id: Se + 1,
                position: Se + 1,
                view_name: `${W[Se+1].source_content_id}/${t}`,
                source_content_id: W[Se + 1].source_content_id,
                source_content_name: W[Se + 1].source_content_name
              }), At(Se + 1, c.length, !0), Oe ? Oe && B(W.map((e => {
                e.itemNumber === Se - 1 ? e.upNext = !1 : e.itemNumber === Se + 2 ? e.upNext = !0 : e.itemNumber === Se + 1 ? e.active = !0 : e.itemNumber === Se && (e.upNext = !0, e.active = !1);
                const t = e.styles.transform.replace("translate3d(", "").split(",");
                let n = Number(t[0].replace("px", ""));
                n -= Wt();
                const a = `translate3d(${n}px,${t[1]},${t[2]}`;
                return e.styles = {
                  ...e.styles,
                  transform: a
                }, e
              }))) : B(W.map((e => (e.itemNumber === Se - 1 ? e.upNext = !1 : e.itemNumber === Se + 2 ? e.upNext = !0 : e.itemNumber === Se + 1 ? (e.active = !0, e.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${Gt()}px, ${et}px, 0) scale(1)`
              }) : e.itemNumber === Se && (e.upNext = !0, e.active = !1, e.styles = {
                ...e.styles,
                transform: `translate3d(${Zt(e,-1)}px, ${zt(e)}px, 0) scale(${Bt()})`
              }), e)))), we(Se + 1)
            }(t);
            const r = xe + 1;
            if (!(r > ie))
              if (a({
                  event: t ? "carousel_swipe" : "carousel_next",
                  event_category: "carousel",
                  event_action: t ? "swipe" : "next",
                  event_label: n
                }), At(r, ie, !1), Oe) {
                let e = r * J * -1;
                e < Me && (e = Me, Z(!0), G(!1), he(ie)), he(r), B(W.map((t => (t.styles = {
                  ...t.styles,
                  transform: `translate3d(${e}px, 0, 0)`
                }, t))))
              } else {
                let e = ye - ne;
                0 === ye && (e = -1 * Q), he(r), e < Me && (e = Me, Z(!0), G(!1), he(ie)), _e(e)
              }
          }, Ut = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (ut || it) return;
            if (dt(!0), !0 === ue) return void
            function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (ut) return;
              if (Se - 1 < 0) return;
              const t = W[Se - 1]?.tina?.payload?.meta?.title ?? "card-" + (Se - 1);
              a({
                event: e ? "modal_swipe" : "modal_previous",
                event_category: "modal",
                event_action: e ? "swipe" : "previous",
                event_label: n,
                card_name: t,
                card_id: Se - 1,
                position: Se - 1,
                view_name: `${W[Se-1].source_content_id}/${t}`,
                source_content_id: W[Se - 1].source_content_id,
                source_content_name: W[Se - 1].source_content_name
              }), At(Se - 1, c.length, !0), Oe || B(W.map((e => (e.itemNumber === Se + 1 ? e.upNext = !1 : e.itemNumber === Se - 2 ? e.upNext = !0 : e.itemNumber === Se ? (e.upNext = !0, e.active = !1, e.styles = {
                ...e.styles,
                transform: `translate3d(${Zt(e,1)}px, ${zt(e)}px, 0) scale(${Bt()})`
              }) : e.itemNumber === Se - 1 && (e.active = !0, e.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${Gt()}px, ${et}px, 0) scale(1)`
              }), e)))), Oe && B(W.map((e => {
                e.itemNumber === Se + 1 ? e.upNext = !1 : e.itemNumber === Se - 2 ? e.upNext = !0 : e.itemNumber === Se ? (e.upNext = !0, e.active = !1) : e.itemNumber === Se - 1 && (e.active = !0);
                const t = e.styles.transform.replace("translate3d(", "").split(",");
                let n = Number(t[0].replace("px", ""));
                n += Wt();
                const a = `translate3d(${n}px,${t[1]},${t[2]}`;
                return e.styles = {
                  ...e.styles,
                  transform: a
                }, e
              }))), we(Se - 1)
            }(t);
            const r = xe - 1;
            if (!(r < 0))
              if (a({
                  event: t ? "carousel_swipe" : "carousel_previous",
                  event_category: "carousel",
                  event_action: t ? "swipe" : "previous",
                  event_label: n
                }), At(r, ie, !1), Oe) {
                let e = r * J * -1;
                e > 0 && (e = 0, G(!0), Z(!1), he(0)), he(r), B(W.map((t => (t.styles = {
                  ...t.styles,
                  transform: `translate3d(${e}px, 0, 0)`
                }, t))))
              } else {
                let e = ye + ne;
                he(r), (e > 0 || 0 === e || -1 * e < V) && (e = 0, G(!0), Z(!1), he(0)), _e(e), B(W.map((t => (t.styles = {
                  ...t.styles,
                  transform: `translate3d(${e}px, 0, 0)`
                }, t))))
              }
          }, Yt = e => {
            if (Nt || ue || Oe) return;
            const t = M(e);
            wt(t.x)
          }, Vt = e => {
            if (Nt || 0 === St || ue || Oe) return;
            const t = M(e),
              n = t.x > St ? 1 : -1;
            let a = Math.abs(St - t.x) * n;
            (0 === xe && 1 === n || xe === ie && -1 === n) && (a *= .35), kt(!0), Tt(a)
          }, Xt = e => {
            if (Nt || ue || Oe) return;
            const t = M(e),
              n = t.x > St ? 1 : -1,
              a = Math.abs(St - t.x);
            _t(a > jt ? n > 0 ? "prev" : "next" : ""), Qt()
          }, Qt = () => {
            $t(!0), wt(0), Tt(0), kt(!1)
          }, qt = e => {
            Et && (Xt(e), kt(!1))
          }, Jt = function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            return e.map(((e, a) => {
              let r = a * J,
                s = a;
              !1 === Oe && (s = Math.ceil(.5 * a) + 1, a > 0 && (r = 2 === s ? Q : Q + J * (s - 2)));
              const o = A[a];
              return o?.current && (o.current.scrollTop = 0), {
                ...e,
                mobileMode: Oe,
                itemNumber: a,
                columnNumber: s,
                inModalMode: !1,
                upNext: !0,
                active: !1,
                openModalMode: en,
                element: o,
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
            const e = W[Se]?.tina?.payload?.meta?.title ?? `card-${Se}`;
            if (a({
                event: "modal_close",
                event_category: "modal",
                event_action: "close",
                event_label: n,
                card_name: e,
                card_id: Se,
                position: Se,
                view_name: `${W[Se].source_content_id}/${e}`,
                source_content_id: W[Se].source_content_id,
                source_content_name: W[Se].source_content_name
              }), Oe) {
              let e = Se * J * -1;
              e < Me && (e = Me, Z(!0), G(!1), he(ie)), he(Se), At(Se, ie, !1), B(Jt(c, "cardClose", `translate3d(${e}px, 0, 0)`))
            } else {
              B(Jt(c, "cardClose"));
              const e = Math.ceil((W[Se].columnNumber + 1) / ee) - 1;
              he(e);
              let t = e * ne * -1;
              Le < ge ? (t = 0, G(!0), Z(!0), he(0)) : t < Me ? (t = Me, G(!1), Z(!0), he(ie)) : At(e, ie, !1), _e(t), we(0)
            }
            O.current.style.transform = "translateY(0px)", O.current.style.transition = "all var(--eventDeck-transitionCardClose)", at(!1), Ye(!1), de(!1), Ze(!1), Ge(!1), Xe(!1), setTimeout((() => {
              Fe(!0)
            }), Qe)
          };
          (0, m.useEffect)((() => {
            !1 !== Ae && (Fe(!1), at(!1), P.style.zIndex = null, B(W.map((e => (e.transitionStyle = "", e)))))
          }), [Ae]);
          const en = e => {
            setTimeout((() => {
              ht(e), bt(!0)
            }), 1)
          };
          (0, m.useEffect)((() => {
            if (!gt) return;
            if (bt(!1), ut) return;
            we(Number(xt.target.dataset.itemPosition)), Ze(!0), lt(!0), ot && ct(!1);
            const e = W[xt.target.dataset.itemPosition].source_content_id,
              t = W[xt.target.dataset.itemPosition].source_content_name,
              r = W[xt.target.dataset.itemPosition]?.tina?.payload?.meta?.title;
            a({
              event: "card_click",
              event_category: "card",
              event_action: "click",
              event_label: n,
              card_name: r ?? `card-${Se}`,
              card_id: xt.target.dataset.itemPosition,
              position: xt.target.dataset.itemPosition,
              view_name: `${e}/${r}`,
              source_content_id: e,
              source_content_name: t
            })
          }), [gt]), (0, m.useEffect)((() => {
            if (!ze || ue) return;
            Ze(!1);
            const e = (() => {
              const e = P?.getBoundingClientRect().top;
              return tt(-1 * (e - d)), -1 * (e - 140)
            })();
            Oe && B(W.map((e => {
              const t = e.itemNumber > Se + 3 || e.itemNumber < Se - 3;
              return e.styles = {
                ...e.styles,
                display: t ? "none" : null,
                transition: t ? "none" : null
              }, e
            }))), P.style.zIndex = "101", at(!0), O.current && (O.current.style.transition = "all var(--eventDeck-transitionCardOpen)", O.current.style.transform = `translateY(${e}px)`), Ye(!0), setTimeout((() => {
              Ge(!0)
            }), 1)
          }), [ze]);
          const tn = () => {
            B(W.map(((e, t) => {
              e.active = t === Se, e.inModalMode = !0, e.transitionStyle = "cardOpen", Oe && (e.upNext = Ht(e.itemNumber));
              const n = !Oe;
              let a = 0;
              if (Oe) {
                const e = Ne + 5 * d;
                a = window.innerHeight - e
              }
              return e.itemNumber < Se ? e.styles = {
                ...e.styles,
                height: Oe ? `${a}px` : null,
                transform: `translate3d(${Zt(e,-1,n)}px, ${et}px, 0) scale(${Bt()})`
              } : e.itemNumber > Se ? e.styles = {
                ...e.styles,
                height: Oe ? `${a}px` : null,
                transform: `translate3d(${Zt(e,1,n)}px, ${et}px, 0) scale(1)`
              } : e.itemNumber === Se && (e.styles = Oe ? {
                ...e.styles,
                height: `${a}px`,
                transform: `translate3d(${-1*e.styles.left}px, ${et}px, 0) scale(1)`
              } : {
                left: 0,
                top: 0,
                transform: `translate3d(${Gt()}px, ${et}px, 0) scale(1)`
              }), e
            })))
          };
          (0, m.useEffect)((() => {
            !1 !== He && !0 !== ue && (de(!0), Ge(!1), At(Se, W.length, !0), O.current && (O.current.style.transition = "all var(--eventDeck-transitionCardOpen)", O.current.style.transform = `translateY(${et}px)`), tn(), Oe ? (_e(0), lt(!1), st(!0)) : Xe(!0))
          }), [He]), (0, m.useEffect)((() => {
            rt && (st(!1), B(W.map((e => ("none" === e.styles.display && (e.styles.display = null, e.styles.transition = null), e)))))
          }), [rt]);
          const nn = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            B(W.map((t => {
              if (t.upNext = Ht(t.itemNumber), t.itemNumber !== Se) {
                let e = Zt(t, 1);
                t.itemNumber < Se && (e = Zt(t, -1)), t.styles = {
                  ...t.styles,
                  transform: `translate3d(${e}px, ${zt(t)}px, 0) scale(${Bt()})`
                }
              } else t.itemNumber === Se && !Oe && e && (t.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${Gt()}px, ${et}px, 0) scale(1)`
              });
              return t
            })))
          };
          (0, m.useEffect)((() => {
            !1 !== Ve && !0 !== Oe && (Xe(!1), setTimeout((() => {
              nn(), lt(!1)
            }), 1))
          }), [Ve]), (0, m.useEffect)((() => {
            B(Jt(c, ""))
          }), [Q, J, c]), (0, m.useEffect)((() => {
            const e = window.navigator?.userAgentData?.platform || window.navigator?.platform;
            It(["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(e))
          }), []), (0, m.useEffect)((() => {
            ue ? (t(!1), Lt && Rt(!0)) : Et || ue || (t(!0), Lt && Ot && Rt(!1))
          }), [ue, Et]), (0, m.useEffect)((() => {
            if (!ut) return;
            clearTimeout(mt);
            const e = setTimeout((() => {
              dt(!1)
            }), pt);
            ft(e)
          }), [ut]), (0, m.useEffect)((() => {
            E && setTimeout((() => {
              T(!1)
            }), 3e3)
          }), [E]), (0, m.useEffect)((() => {
            T(!0), _e(0), he(0);
            let e = Math.ceil(Math.ceil(Le / J) / ee);
            Oe && (e = W.length - 1), e < 0 && (e = 1), At(0, e, !1), ue && Kt()
          }), [Oe]), (0, m.useEffect)((() => {
            O.current && !ue && (O.current.style.transform = "")
          }), [O, Oe, ue]), (0, m.useEffect)((() => {
            const e = (o ?? []).map((e => {
              let t = null;
              return "FeaturedEventInfo" === e?.tina?.payload?.content[0]?._template && e?.tina?.variables?.keys?.meta && (t = e?.tina?.variables?.keys?.meta?.title), {
                ...e,
                title: t,
                source_content_id: e?.tina?.payload?.meta?.foreignId,
                source_content_name: e?.tina?.payload?.meta?.foreignTitle,
                view_name: `${e?.tina?.payload?.meta?.foreignId}/${e?.tina?.payload?.meta?.foreignTitle}`
              }
            }));
            i(e)
          }), [o]), (0, m.useEffect)((() => {
            F(c.map((() => (0, m.createRef)())))
          }), [c]), (0, m.useEffect)((() => {
            const e = e => {
              const {
                key: t
              } = e;
              "ArrowLeft" === t ? Ut(null, !1) : "ArrowRight" === t && Ft(null, !1)
            };
            return document.addEventListener("keydown", e), () => {
              document.removeEventListener("keydown", e)
            }
          }), [ut, it, ue]), (0, m.useEffect)((() => {
            if (O.current) {
              let e = 0;
              e = O?.current?.clientHeight, e += k(O?.current, "margin-top"), e += k(O?.current, "margin-bottom"), $e(e)
            }
          }), [O, R]), (0, m.useEffect)((() => {
            ue && (() => {
              const e = P?.getBoundingClientRect().top,
                t = -1 * (e - d);
              if (B(W.map((e => {
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
                const t = -1 * (e - d);
                O.current.style.transform = `translateY(${t}px)`
              }
            })()
          }), [Oe, ue, et]), (0, m.useEffect)((() => {
            Le < pe * me && 0 === xe ? (_e(0), Z(!0), G(!0)) : ye < Me ? (Z(!0), G(!1), he(ie), _e(Me)) : ye < 0 && (Z(!1), he(ie - 1)), Le > pe * me && z && Z(!1)
          }), [Me]), (0, m.useEffect)((() => {
            if (D.current) {
              I(D.current);
              const e = k(document.documentElement, "--root-font-size"),
                t = k(D.current, "--eventDeck-modalGutters") * e;
              ke(t);
              const n = me - 2 * t;
              be(n), ve(n / me);
              let a = k(D.current, "--eventDeck-modalBottomGutter");
              a *= e;
              const r = window.innerHeight - (Ne + a);
              se(.5 * n < r ? n / 4 : .5 * r);
              const s = k(D.current, "--eventDeck-mobileBreakpoint");
              Be(s);
              let o = k(D.current, "--eventDeck-itemSize");
              o *= e, Y(o);
              let i = k(D.current, "--eventDeck-modalGutterGap");
              i *= e, Pe(i);
              let d = k(D.current, "--eventDeck-insideMargin");
              d *= e;
              const m = !1 === Oe ? 2 * o + d : o + d;
              X(m), q(m + d);
              const p = o + d;
              K(p);
              let v = Math.ceil(.5 * (c.length - 1)) * p + m;
              Oe && (v = c.length * p), Ie(v), 0 !== Le && Te(-1 * Le + n);
              let g = Math.ceil(Math.ceil(v / p) / ee);
              (Oe || ue) && (g = W.length - 1), le(g);
              const b = k(D.current, "--eventDeck-itemScaleUpAmount");
              Ke(b), qe(k(D.current, "--eventDeck-cardCloseTransitionDuration")), f(k(D.current, "--eventDeck-itemImageTitleMargins") * e), null !== l && e !== l && (u(e), ue && nn()), null === l && u(e)
            }
          }), [D, c]), (0, m.useEffect)((() => {
            if (ue && !Oe) {
              nn();
              const e = P?.getBoundingClientRect().top,
                t = -1 * (e - d);
              t !== et && tt(t)
            }
          }), [g]), (0, m.useEffect)((() => {
            const e = p()((e => {
              fe(e), Re(e < We);
              const t = (1 - pe) / 2;
              De(e * t);
              const n = e - 2 * Ee,
                a = Math.round(n / J);
              te(a), ae(a * J), ce(e - e * t);
              const r = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth;
              if (r !== g && S(r), ue && r === g && !E) {
                const e = P?.getBoundingClientRect().top,
                  t = -1 * (e - d);
                t !== et && tt(t)
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
          }), [J, pe, ue, Oe]), (0, m.useEffect)((() => {
            !1 !== ue && !0 !== E && (Oe ? tn() : nn(!0))
          }), [oe, ne, je, U, me, Ce, re, et]), (0, m.useEffect)((() => {
            const e = () => {
              if (D.current && ot) {
                const e = D.current.getBoundingClientRect(),
                  t = .2 * window.innerHeight;
                window.innerHeight - e.top >= t && ct(!1)
              }
            };
            return e(), window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
          }), [D]);
          const an = (0, m.useCallback)((() => {
            if (null !== D.current && !r) {
              const {
                top: e
              } = D?.current?.getBoundingClientRect() || 0;
              e <= .6 * window.innerHeight && (a({
                event: "page_section_impression",
                event_action: "impression",
                event_category: "page_section",
                event_label: n
              }), s(!0))
            }
          }), [D]);
          (0, m.useEffect)((() => (window.addEventListener("scroll", an), () => {
            window.removeEventListener("scroll", an)
          })), [an, D]), (0, m.useEffect)((() => {
            "next" === yt ? (Ft(null, !0), _t("")) : "prev" === yt && (Ut(null, !0), _t(""))
          }), [yt]), (0, m.useEffect)((() => {
            D.current && D.current.addEventListener("mouseleave", (() => {
              Et && Qt()
            }))
          }), [D, Et]), (0, m.useEffect)((() => (document.body.addEventListener("mouseleave", qt), () => {
            document.body.removeEventListener("mouseleave", qt)
          })), [Et]), (0, m.useEffect)((() => {
            Nt && setTimeout((() => {
              $t(!1), wt(0)
            }), pt)
          }), [Nt]), (0, m.useEffect)((() => {
            Pt(Oe ? 20 : 100)
          }), [Oe]), (0, m.useEffect)((() => {
            vt(ue ? 500 : 100)
          }), [ue]);
          const rn = (0, x.useTinaComponents)(),
            sn = (0, m.useMemo)((() => ({
              ...rn,
              CardWithImageGallery: _.Z,
              HTMLElement: v.HTMLElement,
              ImageWithBadge: v.ImageWithBadge,
              Carousel: v.Carousel,
              GroupOfItems: b(),
              UnorderedList: v.UnorderedList
            })), [rn]),
            on = (0, m.useMemo)((() => W.map((e => (0, m.createElement)(j, {
              ...e,
              refDeck: D,
              key: e?.id ?? e?.sync_hash,
              components: sn,
              prevPage: Ut,
              nextPage: Ft,
              loadCssRawValue: k,
              selectedItemNumber: Se,
              carouselTitle: n,
              sharedDraggingDelta: Ct,
              setSharedDraggingDelta: Dt
            })))), [W, D, sn, Ut, Ft, Se]);
          return !on?.length || on.length <= 0 ? null : (0, C.jsxs)(C.Fragment, {
            children: [(0, C.jsx)("div", {
              className: "rockstargames-modules-core-cardff262821c1d20c77aa6f66719d5e05b5",
              "data-modal-mode": Ue,
              "aria-hidden": "true"
            }), (0, C.jsxs)("div", {
              className: "rockstargames-modules-core-cardd0ea03f3ac507cb0cc28638f1eb2d789",
              "data-modal-mode": ue,
              "data-faded": ot,
              ref: D,
              onTouchStart: Yt,
              onTouchMove: Vt,
              onTouchEnd: Xt,
              onMouseDown: Yt,
              onMouseMove: Vt,
              onMouseUp: Xt,
              tabIndex: -1,
              role: "presentation",
              children: [(0, C.jsxs)("div", {
                className: "rockstargames-modules-core-cardd4032f720cf2d5a227dc862496c24e56",
                "data-modal-mode": ue,
                ref: O,
                "data-animating": nt,
                children: [(0, C.jsx)("h2", {
                  className: "rockstargames-modules-core-cardcc17d44570c8ecd9442f3267ef7474c6",
                  children: n
                }), (0, C.jsx)(L, {
                  prevPage: Ut,
                  prevBtnDisabled: H,
                  nextPage: Ft,
                  nextBtnDisabled: z,
                  selectedItemNumber: Se,
                  itemsData: c,
                  closeModalMode: Kt,
                  inModalMode: ue
                })]
              }), (0, C.jsx)("div", {
                className: "rockstargames-modules-core-cardf2e387b979bbf1e993a1d9311a150e16",
                "data-modal-mode": ue,
                "data-is-dragging": Et,
                style: {
                  transform: `translate3d(${ye+Mt}px, 0, 0)`,
                  width: `${Le}px`
                },
                ref: R,
                children: on
              })]
            })]
          })
        };
      var O = n(8656)
    }
  }
]);