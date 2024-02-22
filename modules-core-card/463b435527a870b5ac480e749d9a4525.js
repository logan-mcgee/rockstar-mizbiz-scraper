! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b307a4c1-dc80-4b01-930d-fc7b880fbabb", e._sentryDebugIdIdentifier = "sentry-dbid-b307a4c1-dc80-4b01-930d-fc7b880fbabb")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "5e225a56a96343405c858680af91190e5116b19e",
  packageName: "@rockstargames/modules-core-card",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "5e225a56a96343405c858680af91190e5116b19e"
}, (self.webpackChunk_rockstargames_modules_core_card = self.webpackChunk_rockstargames_modules_core_card || []).push([
  [700, 788], {
    6208: (e, t, a) => {
      var n = a(496).Symbol;
      e.exports = n
    },
    4175: (e, t, a) => {
      var n = a(6208),
        r = a(1172),
        s = a(3720),
        o = n ? n.toStringTag : void 0;
      e.exports = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : o && o in Object(e) ? r(e) : s(e)
      }
    },
    5248: (e, t, a) => {
      var n = a(7908),
        r = /^\s+/;
      e.exports = function(e) {
        return e ? e.slice(0, n(e) + 1).replace(r, "") : e
      }
    },
    748: (e, t, a) => {
      var n = "object" == typeof a.g && a.g && a.g.Object === Object && a.g;
      e.exports = n
    },
    1172: (e, t, a) => {
      var n = a(6208),
        r = Object.prototype,
        s = r.hasOwnProperty,
        o = r.toString,
        c = n ? n.toStringTag : void 0;
      e.exports = function(e) {
        var t = s.call(e, c),
          a = e[c];
        try {
          e[c] = void 0;
          var n = !0
        } catch (e) {}
        var r = o.call(e);
        return n && (t ? e[c] = a : delete e[c]), r
      }
    },
    3720: e => {
      var t = Object.prototype.toString;
      e.exports = function(e) {
        return t.call(e)
      }
    },
    496: (e, t, a) => {
      var n = a(748),
        r = "object" == typeof self && self && self.Object === Object && self,
        s = n || r || Function("return this")();
      e.exports = s
    },
    7908: e => {
      var t = /\s/;
      e.exports = function(e) {
        for (var a = e.length; a-- && t.test(e.charAt(a)););
        return a
      }
    },
    8931: (e, t, a) => {
      var n = a(576),
        r = a(6772),
        s = a(8912),
        o = Math.max,
        c = Math.min;
      e.exports = function(e, t, a) {
        var i, d, l, u, m, f, p = 0,
          v = !1,
          b = !1,
          g = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function y(t) {
          var a = i,
            n = d;
          return i = d = void 0, p = t, u = e.apply(n, a)
        }

        function h(e) {
          var a = e - f;
          return void 0 === f || a >= t || a < 0 || b && e - p >= l
        }

        function x() {
          var e = r();
          if (h(e)) return k(e);
          m = setTimeout(x, function(e) {
            var a = t - (e - f);
            return b ? c(a, l - (e - p)) : a
          }(e))
        }

        function k(e) {
          return m = void 0, g && i ? y(e) : (i = d = void 0, u)
        }

        function _() {
          var e = r(),
            a = h(e);
          if (i = arguments, d = this, f = e, a) {
            if (void 0 === m) return function(e) {
              return p = e, m = setTimeout(x, t), v ? y(e) : u
            }(f);
            if (b) return clearTimeout(m), m = setTimeout(x, t), y(f)
          }
          return void 0 === m && (m = setTimeout(x, t)), u
        }
        return t = s(t) || 0, n(a) && (v = !!a.leading, l = (b = "maxWait" in a) ? o(s(a.maxWait) || 0, t) : l, g = "trailing" in a ? !!a.trailing : g), _.cancel = function() {
          void 0 !== m && clearTimeout(m), p = 0, i = f = d = m = void 0
        }, _.flush = function() {
          return void 0 === m ? u : k(r())
        }, _
      }
    },
    576: e => {
      e.exports = function(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
      }
    },
    9480: e => {
      e.exports = function(e) {
        return null != e && "object" == typeof e
      }
    },
    8128: (e, t, a) => {
      var n = a(4175),
        r = a(9480);
      e.exports = function(e) {
        return "symbol" == typeof e || r(e) && "[object Symbol]" == n(e)
      }
    },
    6772: (e, t, a) => {
      var n = a(496);
      e.exports = function() {
        return n.Date.now()
      }
    },
    8912: (e, t, a) => {
      var n = a(5248),
        r = a(576),
        s = a(8128),
        o = /^[-+]0x[0-9a-f]+$/i,
        c = /^0b[01]+$/i,
        i = /^0o[0-7]+$/i,
        d = parseInt;
      e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (s(e)) return NaN;
        if (r(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = r(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = n(e);
        var a = c.test(e);
        return a || i.test(e) ? d(e.slice(2), a ? 2 : 8) : o.test(e) ? NaN : +e
      }
    },
    1884: (e, t, a) => {
      "use strict";
      a.d(t, {
        c: () => m
      });
      var n = a(1740),
        r = a(1668),
        s = a(5992),
        o = a(9152),
        c = a(2700),
        i = a(4928);
      const d = {
        clrCardModalContent: "rockstargames-modules-core-carddc0e7500dcde84410e1ca036d13bf1eb",
        expandedCard: "rockstargames-modules-core-cardf147f821bee843f25ba323d0d35b681b",
        content: "rockstargames-modules-core-cardc2d60013d6991b99bb296d88c03a8c4a",
        details: "rockstargames-modules-core-carde6a197aa0a3e8c65ce07dcbfdb3073ef",
        calloutHeaders: "rockstargames-modules-core-carda9c077266e78cdc09780c09894f2116d"
      };
      var l = a(3480);
      const {
        variants: u
      } = r.framer.Animations, m = e => {
        let {
          id: t,
          content: a,
          size: r = "clr",
          cardType: m = "release",
          title: f,
          subheader: p,
          subtitle: v,
          storeInfo: b = {},
          expandedType: g,
          to: y,
          image: h,
          deckProps: x,
          tina: k = {},
          position: _
        } = e;
        const S = (0, n.useTinaPayload)(),
          N = k?.payload?.meta?.cdn ?? S?.meta?.prod ?? !1,
          w = {
            image: {
              ...h,
              prod: N
            }
          },
          T = [h];
        return (0, l.jsx)(s.c, {
          id: t,
          title: f,
          context: "clr-card",
          size: r,
          expandedType: g,
          images: w,
          deckProps: x,
          prod: N,
          position: _,
          modalProps: {
            className: d.clrCardModal,
            contentClassName: d.clrCardModalContent
          },
          variants: u.plainCard,
          payload: {
            content: a
          },
          expandedCardContents: (0, l.jsx)(i.c, {
            images: T,
            prod: N
          }),
          children: (0, l.jsx)(c.c, {
            expandedType: g,
            to: y,
            style: {
              display: "flex"
            },
            children: (0, l.jsx)(o.c, {
              cardType: m,
              title: f,
              subheader: p,
              subtitle: v,
              image: w,
              expandedType: g,
              price: b?.price,
              slashedPrice: b?.slashedPrice,
              badge: b?.badge
            })
          })
        })
      }
    },
    9152: (e, t, a) => {
      "use strict";
      a.d(t, {
        c: () => c
      });
      var n = a(1668);
      const r = {
        clrCollapsedCard: "rockstargames-modules-core-cardfd6d292ed40cb13ff7d5c26bbeaf9a94",
        cardContainer: "rockstargames-modules-core-cardcc0578014981d1fb5033a246d6dfa958",
        cardInfo: "rockstargames-modules-core-cardfb052b5cc68e62fcbb7114c919aaac20",
        subtitle: "rockstargames-modules-core-carda6c4691e1cd8be86470ac15de966b104",
        price: "rockstargames-modules-core-cardf962cc2f9a0feb49ef73ed4a05923287",
        newBadge: "rockstargames-modules-core-cardb928049e372b0f2256447fb89846bc87",
        outOfStockBadge: "rockstargames-modules-core-cardee6e3af24146dc74c5b1fc3ccc22cbb6",
        saleBadge: "rockstargames-modules-core-cardba67a879a69b4a896ecce094f14bea97",
        slashedPrice: "rockstargames-modules-core-cardbe4898385c3d568d5cc8f78c188eb9d6",
        storeInfo: "rockstargames-modules-core-cardfa7cd7c59e912b860208ca099d7aa49f",
        priceInfo: "rockstargames-modules-core-cardaeeca54c5cd613d8acf128a88a61eeb8",
        cardDesc: "rockstargames-modules-core-cardb34bc203e1757ed47d6d39b6ea3c2b84"
      };
      var s = a(3480);
      const o = e => {
          let {
            videoUrl: t,
            expandedType: a,
            children: r
          } = e;
          return t && "linkout" === a ? (0, s.jsx)(n.A, {
            to: t,
            children: r
          }) : r
        },
        c = e => {
          let {
            className: t,
            cardType: a,
            title: c,
            image: i,
            subheader: d,
            subtitle: l,
            price: u,
            slashedPrice: m,
            badge: f = null,
            expandedType: p,
            videoUrl: v
          } = e;
          return (0, s.jsx)("div", {
            className: [r.clrCollapsedCard, t].join(" "),
            role: "button",
            tabIndex: 0,
            children: (0, s.jsx)(o, {
              videoUrl: v,
              expandedType: p,
              children: (0, s.jsxs)("div", {
                className: r.cardContainer,
                "data-type": a,
                children: [(0, s.jsx)("div", {
                  className: r.cardMedia,
                  children: (0, s.jsx)(n.MultiSourceImage, {
                    ...i
                  })
                }), (0, s.jsxs)("div", {
                  className: r.cardInfo,
                  children: [d && (0, s.jsx)("h6", {
                    children: d
                  }), (0, s.jsx)("h5", {
                    children: c
                  }), l && (0, s.jsx)("h6", {
                    className: r.subtitle,
                    children: l
                  }), "store" === a && (0, s.jsxs)("div", {
                    className: r.storeInfo,
                    children: [(0, s.jsx)("p", {
                      className: (() => {
                        switch (f) {
                          case "New":
                            return r.newBadge;
                          case "Sale":
                            return r.saleBadge;
                          case "Out of Stock":
                            return r.outOfStockBadge;
                          default:
                            return ""
                        }
                      })(),
                      children: f
                    }), (0, s.jsxs)("span", {
                      className: r.priceInfo,
                      children: [(0, s.jsx)("p", {
                        className: r.price,
                        children: u
                      }), (0, s.jsx)("p", {
                        className: r.slashedPrice,
                        children: m
                      })]
                    })]
                  })]
                })]
              })
            })
          })
        }
    },
    9040: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        Card: () => W.Card,
        CardExpanded: () => n.c,
        CardGrid: () => W.CardGrid,
        CardHeader: () => r.c,
        CardWithImageGallery: () => W.CardWithImageGallery,
        CardWrapper: () => s.c,
        ClrCard: () => o.c,
        ClrCollapsedCard: () => c.c,
        CoverCard: () => W.CoverCard,
        Deck: () => W.Deck,
        EventsDeck: () => O,
        LayeredImageFrame: () => i.c,
        LinkoutWrapper: () => d.c,
        TextCard: () => W.TextCard,
        TextOverlay: () => l.c,
        ThumbsGalleryOrThumb: () => u.c
      });
      var n = a(6944),
        r = a(6796),
        s = a(5992),
        o = a(1884),
        c = a(9152),
        i = a(4928),
        d = a(2700),
        l = a(636),
        u = a(2352),
        m = a(8200),
        f = a(8931),
        p = a.n(f),
        v = a(1668),
        b = a(9812),
        g = a.n(b),
        y = a(1740),
        h = a(2836),
        x = a(5792),
        k = a(4212),
        _ = a(3660),
        S = a.n(_),
        N = a(3052),
        w = a(1204);
      var T = a(1512),
        M = a(5120),
        C = a(5652);
      const E = (e, t) => {
          let a = getComputedStyle(e).getPropertyValue(t);
          return a = a.replace("px", "").replace("rem", "").replace("em", ""), a = a.replace("vh", "").replace("vw", "").replace("vmin", "").replace("vmax", ""), a = a.replace("ms", "").replace("s", ""), Number(a)
        },
        $ = e => ({
          x: void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
          y: void 0 !== e.changedTouches ? e.changedTouches[0].screenY : e.screenY
        }),
        j = e => e.scrollHeight > e.clientHeight;
      var D = a(3480);

      function I(e, t) {
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
          } else S().isObject(e) && !S().isArray(e) ? I(e, t) : S().isArray(e) && (a[n] = e.map((e => S().isObject(e) ? I(e, t) : e)))
        })), a
      }
      const P = (0, x.withTranslations)((e => {
          let {
            active: t,
            styles: a,
            title: n,
            itemNumber: r,
            inModalMode: s,
            openModalMode: o,
            element: c,
            upNext: i,
            mobileMode: d,
            refDeck: l,
            components: u,
            tina: f,
            prevPage: b,
            nextPage: g,
            transitionStyle: x,
            selectedItemNumber: k,
            carouselTitle: _,
            sharedDraggingDelta: S,
            setSharedDraggingDelta: N
          } = e;
          const w = (0, T.useIntl)(),
            {
              track: P
            } = (0, h.useGtmTrack)(),
            L = (0, m.createRef)(),
            B = (0, m.createRef)(),
            O = (0, m.createRef)(),
            W = (0, m.createRef)(),
            z = (0, m.createRef)(),
            [G, R] = (0, m.useState)(!1),
            [H, A] = (0, m.useState)(0),
            [F, V] = (0, m.useState)(0),
            [U, q] = (0, m.useState)(0),
            [Y, Q] = (0, m.useState)(0),
            [X, K] = (0, m.useState)(0),
            [J, Z] = (0, m.useState)(!1),
            [ee, te] = (0, m.useState)(0),
            [ae, ne] = (0, m.useState)(0),
            [re, se] = (0, m.useState)(0),
            [oe, ce] = (0, m.useState)("700"),
            [ie, de] = (0, m.useState)(-1),
            [le, ue] = (0, m.useState)(0),
            [me, fe] = (0, m.useState)(0),
            [pe, ve] = (0, m.useState)(0),
            [be, ge] = (0, m.useState)(!1),
            [ye, he] = (0, m.useState)(""),
            [xe, ke] = (0, m.useState)(null),
            [_e, Se] = (0, m.useState)(!1),
            [Ne, we] = (0, m.useState)(null),
            [Te, Me] = (0, m.useState)(!1),
            [Ce, Ee] = (0, m.useState)(!1),
            $e = (0, y.useTinaPayload)(),
            je = f?.payload?.meta?.cdn ?? !1 ?? $e?.meta?.prod ?? !1,
            De = (0, y.useTranslations)({
              payload: f?.payload,
              variables: f?.variables
            }),
            Ie = De?.meta ?? {},
            Pe = I(De?.content?.[0], je),
            Le = (0, m.useMemo)((() => Pe?.images?.[0]?.image?.badge), [Pe]),
            Be = (0, m.useMemo)((() => Pe.title ?? n ?? Ie?.title), [n, Ie?.title, Pe.title]),
            Oe = (0, C.useImageParser)({
              alt: Pe?.images?.[0]?.image?.alt ?? "",
              ariaLabel: Pe?.images?.[0]?.image?.alt ?? "",
              sources: Pe?.images?.[0]?.image?.sources ?? [],
              prod: je
            }),
            We = Oe?.src?.mobile ?? !1,
            ze = (0, m.useMemo)((() => Ie?.foreignId), [Ie]),
            Ge = (0, m.useMemo)((() => Ie?.foreignTitle), [Ie]),
            [Re, He] = (0, m.useState)(0),
            [Ae, Fe] = (0, m.useState)(0),
            [Ve, Ue] = (0, m.useState)(0),
            [qe, Ye] = (0, m.useState)(0),
            [Qe, Xe] = (0, m.useState)(!1),
            [Ke, Je] = (0, m.useState)(0),
            [Ze, et] = (0, m.useState)(20),
            [tt, at] = (0, m.useState)(null),
            [nt, rt] = (0, m.useState)(!1),
            st = (0, m.useCallback)((e => {
              if (!0 === J || !s && !d || _e) return;
              const t = $(e);
              He(t.x), Fe(t.y)
            }), [J, s]),
            ot = e => {
              st(e)
            },
            ct = e => {
              if (!0 === J || 0 === Re || !s && !d || _e) return;
              const t = $(e),
                a = t.x > Re ? 1 : -1,
                n = Math.abs(Re - t.x);
              s && !d && n > Ze ? (rt(!0), he(a > 0 ? "prev" : "next"), dt()) : (Xe(!0), Je(n * a), N(n * a))
            },
            it = e => {
              if (!0 === J || !s && !d || _e) return;
              const t = $(e),
                a = t.x > Re ? 1 : -1,
                n = Math.abs(Re - t.x),
                r = Math.abs(Ae - t.y);
              s && !d ? (dt(), he("")) : n > Ze && r < 25 ? (rt(!0), he(a > 0 ? "prev" : "next"), dt()) : dt()
            },
            dt = () => {
              Z(!0), He(0), Fe(0), Xe(!1), Je(0), N(0)
            };
          return (0, m.useEffect)((() => {
            let e = ee;
            G ? e = 0 : s && !d && (e = ee), A(e)
          }), [G, d, s, F, Y, ae, re, U, ee]), (0, m.useEffect)((() => {
            R(!(!s || !d))
          }), [s, d]), (0, m.useEffect)((() => {
            s && t && P({
              event: "virtualPageview",
              display_type: d ? "mobile" : "desktop",
              view_name: `${ze}/${Be}`,
              source_content_id: ze,
              source_content_name: Ge
            })
          }), [s, t]), (0, m.useEffect)((() => {
            const e = p()(((e, t) => {
              let a = 18;
              if (e?.documentElement && (a = E(e?.documentElement, "--root-font-size")), me !== t.innerHeight && fe(t.innerHeight), l?.current) {
                se(E(l.current, "--eventDeck-marginSm") * a);
                const e = a * E(l?.current, "--eventDeck-modalGutters"),
                  n = t?.innerWidth,
                  r = n - 2 * e;
                V(r), W.current && d && q(r), Q(E(l.current, "--eventDeck-itemSize") * a), ve(E(l.current, "--eventDeck-phaseOneTransitionDuration"));
                const s = E(l?.current, "--eventDeck-itemImageTitleMargins") * a,
                  o = B?.current?.clientHeight,
                  c = o + s;
                Number.isNaN(c) || te(c), ue(E(l?.current, "--eventDeck-headerHeight") * a)
              }
              let n = Math.min(700, t.innerWidth);
              d || (n = 900), ce(`${n}`)
            }), 300);
            return window.addEventListener("resize", (() => {
              e(document, window)
            })), e(document, window), () => {
              window.removeEventListener("resize", (() => {
                e(document, window)
              }))
            }
          }), [l, d]), (0, m.useEffect)((() => {
            if (L.current) {
              const e = L.current.clientHeight;
              Number.isNaN(e) || ne(e)
            }
          }), [L]), (0, m.useEffect)((() => {
            if (s && d && W.current && (W.current.style.transform = "scale(1) translate3d(0, 0, 0)"), !s && d && W.current) {
              const e = 228 / F;
              W.current.style.transform = `scale(${e}) translate3d(0, 0, 0)`
            }!d && W.current && (W.current.style.transform = null)
          }), [s, d, F, U]), (0, m.useEffect)((() => {
            const e = .5 * F,
              t = me - le - 3 * re;
            K(F - (e < t ? e : t))
          }), [F, re, me]), (0, m.useEffect)((() => {
            "next" === ye ? (g(null, !0), he("")) : "prev" === ye && (b(null, !0), he(""))
          }), [ye]), (0, m.useEffect)((() => {
            Ue(0), Ye(0)
          }), [d]), (0, m.useEffect)((() => {
            d ? et(s ? 35 : 20) : s && et(50)
          }), [s, d]), (0, m.useEffect)((() => {
            let e = [],
              t = 0,
              n = 0;
            if (null !== a?.transform) {
              e = a.transform.split(",");
              const r = e[0].split("(");
              t = Number(r[1].replace("px", "")), Ue(t), n = Number(e[1].replace("px", "")), Ye(n)
            }
          }), [a]), (0, m.useEffect)((() => {
            if (!J) return;
            clearTimeout(xe);
            const e = setTimeout((() => {
              Z(!1), He(0)
            }), 200);
            ke(e)
          }), [J, 200]), (0, m.useEffect)((() => {
            if (!nt) return;
            clearTimeout(tt);
            const e = setTimeout((() => {
              rt(!1)
            }), 1e3);
            at(e)
          }), [nt]), (0, m.useEffect)((() => {
            s && clearTimeout(ie), setTimeout((() => {
              ge(!be)
            }), pe)
          }), [s]), (0, m.useEffect)((() => (document.body.addEventListener("mouseleave", dt), () => {
            document.body.removeEventListener("mouseleave", dt)
          })), []), (0, m.useEffect)((() => {
            z.current ? Me(j(z.current)) : Me(!1), void 0 !== c && c.current ? Ee(j(c.current)) : Ee(!1)
          }), [c, z, t, s, be]), Pe ? (0, D.jsxs)("div", {
            className: "rockstargames-modules-core-cardf724de2aaf0c24a0291b19ecd2b814b1",
            ref: c,
            "data-item-position": r,
            "data-modal-mode": s,
            "data-active-item": t,
            "data-up-next": i,
            "data-transition": Qe || 0 !== S ? "none" : x,
            "data-scrollable": Ce,
            style: {
              ...a,
              transform: s && t && !d ? `translate3d(${Ve+Ke}px, ${qe}px, 0)` : d && !s ? `translate3d(${Ve+S}px, ${qe}px, 0)` : a?.transform
            },
            onClick: e => {
              nt || (s ? s && !d && (r < k ? b(e, !0) : r > k && g(e, !0)) : o(e))
            },
            onMouseEnter: () => {
              s || R(!0), s || d || (clearTimeout(ie), de(setTimeout((() => {
                P({
                  event: "card_title_hover",
                  event_category: "card",
                  event_action: "title_hover",
                  event_label: _,
                  card_name: Be,
                  card_id: r,
                  position: r,
                  view_name: `${ze}/${Ge}`,
                  source_content_id: ze,
                  source_content_name: Ge
                })
              }), 1e3)))
            },
            onMouseLeave: () => {
              s || R(!1), s || d || clearTimeout(ie)
            },
            onTouchStart: ot,
            onTouchMove: ct,
            onTouchEnd: it,
            onMouseDown: ot,
            onMouseMove: ct,
            onMouseUp: it,
            onKeyUp: e => {
              "Enter" === e.key && (s || o(e))
            },
            tabIndex: s ? -1 : 0,
            "aria-label": s ? w.formatMessage(M.card.events_deck_modal_group_label) : "",
            role: s ? "dialog" : "presentation",
            children: [(0, D.jsxs)("div", {
              className: "rockstargames-modules-core-cardb1df426dc9d94b7a6146afd270e52a2c",
              "data-full-header": G,
              ref: O,
              style: {
                height: s && d ? `${F}px` : null,
                width: s && d ? `${F}px` : null
              },
              children: [We && (0, D.jsx)("img", {
                ref: W,
                src: `${Oe?.src?.mobile}?im=Resize,width=${oe}`,
                alt: Oe?.alt,
                style: {
                  width: 0 !== U && d ? `${U}px` : null,
                  height: 0 !== U && d ? `${U}px` : null
                }
              }), (0, D.jsxs)("div", {
                className: "rockstargames-modules-core-cardc0c5b13abb52ee818993adb202adfdef",
                style: {
                  transform: !d || d && s ? `translate3d(0, ${H}px, 0)` : null
                },
                children: [Le && (0, D.jsx)("div", {
                  className: "rockstargames-modules-core-cardac942eedea67312b608a74c187b3d41a",
                  ref: L,
                  children: (0, D.jsx)(v.Badge, {
                    text: Le
                  })
                }), (0, D.jsx)("span", {
                  className: "rockstargames-modules-core-carde571b2cc54ee1ed4f6fd8e4f40eea1cc",
                  ref: B,
                  "aria-hidden": s,
                  children: Be
                })]
              })]
            }), (0, D.jsxs)("div", {
              className: "rockstargames-modules-core-cardd364155d044c51b58145159cb03dc10a",
              ref: z,
              "aria-hidden": !s,
              onScroll: () => {
                Se(!0), dt(), clearTimeout(Ne);
                const e = setTimeout((() => {
                  Se(!1)
                }), 100);
                we(e)
              },
              style: {
                top: s && d ? `${F}px` : null,
                width: s && !d && t ? `${X}px` : null,
                touchAction: Te || d ? "unset" : "none"
              },
              children: [Be && (0, D.jsx)("span", {
                className: "rockstargames-modules-core-cardd180db136ab01f7ee17339f842a7d8c5",
                children: Be
              }), (0, D.jsx)("div", {
                className: "rockstargames-modules-core-cardf3e9c2d41ccb3ee27908261fb6bc6172",
                children: (0, D.jsx)(y.TinaParser, {
                  components: u,
                  tina: {
                    meta: Ie,
                    payload: {
                      content: Pe?.content
                    }
                  }
                })
              })]
            })]
          }) : null
        })),
        L = "rockstargames-modules-core-cardb6af701d24927167fad008a243e5da98",
        B = e => {
          let {
            prevPage: t,
            prevBtnDisabled: a,
            nextPage: n,
            nextBtnDisabled: r,
            selectedItemNumber: s,
            itemsData: o,
            closeModalMode: c,
            inModalMode: i
          } = e;
          const d = (0, T.useIntl)();
          return (0, D.jsxs)(D.Fragment, {
            children: [(0, D.jsxs)("div", {
              className: "rockstargames-modules-core-cardf9204f16bee8b7aea245349d32568dcc",
              children: [(0, D.jsx)("button", {
                className: L,
                type: "button",
                onClick: t,
                disabled: a,
                "aria-label": i ? d.formatMessage(M.card.events_deck_modal_previous_aria_label) : d.formatMessage(M.card.events_deck_previous_aria_label)
              }), (0, D.jsxs)("span", {
                className: "rockstargames-modules-core-cardb74ea3c0b3198fba27655363d4c2097d",
                "aria-hidden": !i,
                "aria-label": d.formatMessage(M.card.events_deck_paging_label, {
                  currentPage: s + 1,
                  totalPages: o.length
                }),
                children: [s + 1, (0, D.jsx)("span", {
                  className: "rockstargames-modules-core-cardfd374394268e76182e6e17aaa5b019bd"
                }), o.length]
              }), (0, D.jsx)("button", {
                className: L,
                type: "button",
                onClick: n,
                disabled: r,
                "aria-label": i ? d.formatMessage(M.card.events_deck_modal_next_aria_label) : d.formatMessage(M.card.events_deck_next_aria_label)
              })]
            }), (0, D.jsx)("button", {
              className: "rockstargames-modules-core-cardfbf4e137be6c0901e0e148af9018cb75",
              type: "button",
              onClick: c,
              "aria-label": d.formatMessage(M.card.events_deck_modal_close_label),
              "aria-hidden": !i,
              tabIndex: i ? 0 : -1
            })]
          })
        },
        O = e => {
          const {
            setBodyIsScrollable: t
          } = (0, x.useBodyScrollable)(), {
            title: a
          } = e, {
            track: n
          } = (0, h.useGtmTrack)(), [r, s] = (0, m.useState)(!1), o = (() => {
            const {
              data: e
            } = (0, N.useQuery)(w.TinaModulesList, {
              variables: {
                type: "gtao-event-card",
                orderBy: "priority",
                orderDirection: "desc"
              }
            }), t = e?.tinaModulesList?.results, a = S().map(t, "id");
            return (0, v.useTinaModuleFetchByIds)({
              ids: a
            })
          })(), [c, i] = (0, m.useState)([]), [d, l] = (0, m.useState)(null), [u, f] = (0, m.useState)(0), [b, _] = (0, m.useState)(window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth), [T, M] = (0, m.useState)(!1), C = (0, m.createRef)(), [j, I] = (0, m.useState)(null), L = (0, m.createRef)(), O = (0, m.createRef)(), [W, z] = (0, m.useState)([]), [G, R] = (0, m.useState)(!0), [H, A] = (0, m.useState)(!1), [F, V] = (0, m.useState)([]), [U, q] = (0, m.useState)(404), [Y, Q] = (0, m.useState)(808), [X, K] = (0, m.useState)(672), [J, Z] = (0, m.useState)(336), [ee, te] = (0, m.useState)(0), [ae, ne] = (0, m.useState)(0), [re, se] = (0, m.useState)(0), [oe, ce] = (0, m.useState)(0), [ie, de] = (0, m.useState)(0), [le, ue] = (0, m.useState)(!1), [me, fe] = (0, m.useState)(window.innerWidth), [pe, ve] = (0, m.useState)(0), [be, ge] = (0, m.useState)(0), [ye, he] = (0, m.useState)(0), [xe, ke] = (0, m.useState)(0), [_e, Se] = (0, m.useState)(0), [Ne, we] = (0, m.useState)(0), [Te, Me] = (0, m.useState)(0), [Ce, Ee] = (0, m.useState)(-1e3), [$e, je] = (0, m.useState)(0), [De, Ie] = (0, m.useState)(50), [Pe, Le] = (0, m.useState)(0), [Be, Oe] = (0, m.useState)(!1), [We, ze] = (0, m.useState)(768), [Ge, Re] = (0, m.useState)(!1), [He, Ae] = (0, m.useState)(!1), [Fe, Ve] = (0, m.useState)(!1), [Ue, qe] = (0, m.useState)(!1), [Ye, Qe] = (0, m.useState)(!1), [Xe, Ke] = (0, m.useState)(1e3), [Je, Ze] = (0, m.useState)(1.2), [et, tt] = (0, m.useState)(0), [at, nt] = (0, m.useState)(!1), [rt, st] = (0, m.useState)(!1), [ot, ct] = (0, m.useState)(!0), [it, dt] = (0, m.useState)(!1), [lt, ut] = (0, m.useState)(!1), [mt, ft] = (0, m.useState)(null), [pt, vt] = (0, m.useState)(100), [bt, gt] = (0, m.useState)(!1), [yt, ht] = (0, m.useState)({}), [xt, kt] = (0, m.useState)(""), [_t, St] = (0, m.useState)(0), [Nt, wt] = (0, m.useState)(!1), [Tt, Mt] = (0, m.useState)(!1), [Ct, Et] = (0, m.useState)(0), [$t, jt] = (0, m.useState)(0), [Dt, It] = (0, m.useState)(100), [Pt, Lt] = (0, m.useState)(!1), [Bt, Ot] = (0, m.useState)(!1), Wt = () => me * pe + De, zt = () => !1 === Be ? Je : 1, Gt = e => e === _e - 1 || e === _e + 1, Rt = () => -1 * xe, Ht = function(e) {
            let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (!0 === Be) return 0;
            const a = e.itemNumber % 2 == 0,
              n = U * Je;
            if (!0 === a && 0 !== e.itemNumber) {
              const a = E(e?.element?.current, "top");
              let r = a - re;
              return !1 === t && (r -= a), -1 * (.5 * n + r) + et
            }
            return re - .5 * n + et
          }, At = function(e, t) {
            let a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              n = Rt();
            !1 === a && (n = 0);
            const r = me * pe,
              s = !1 === Be ? U * zt() : r;
            return e.inModalMode && Be ? -1 === t ? Wt() * (_e - e.itemNumber) * -1 - e.styles.left : Wt() * (e.itemNumber - _e) - e.styles.left : -1 === t ? -1 * e.styles.left - s - De + n : r - e.styles.left + De + n
          }, Ft = (e, t, a) => {
            -1 === t && (A(!1), R(!0)), A(!1 === a && e >= t || !0 === a && e + 1 === t), R(e <= 0)
          }, Vt = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (lt || it) return;
            if (ut(!0), le) return void
            function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (_e + 1 >= c.length) return;
              const t = W[_e + 1]?.tina?.payload?.meta?.title ?? `card-${_e+1}`;
              n({
                event: e ? "modal_swipe" : "modal_next",
                event_category: "modal",
                event_action: e ? "swipe" : "next",
                event_label: a,
                card_name: t,
                card_id: _e + 1,
                position: _e + 1,
                view_name: `${W[_e+1].source_content_id}/${t}`,
                source_content_id: W[_e + 1].source_content_id,
                source_content_name: W[_e + 1].source_content_name
              }), Ft(_e + 1, c.length, !0), Be ? Be && z(W.map((e => {
                e.itemNumber === _e - 1 ? e.upNext = !1 : e.itemNumber === _e + 2 ? e.upNext = !0 : e.itemNumber === _e + 1 ? e.active = !0 : e.itemNumber === _e && (e.upNext = !0, e.active = !1);
                const t = e.styles.transform.replace("translate3d(", "").split(",");
                let a = Number(t[0].replace("px", ""));
                a -= Wt();
                const n = `translate3d(${a}px,${t[1]},${t[2]}`;
                return e.styles = {
                  ...e.styles,
                  transform: n
                }, e
              }))) : z(W.map((e => (e.itemNumber === _e - 1 ? e.upNext = !1 : e.itemNumber === _e + 2 ? e.upNext = !0 : e.itemNumber === _e + 1 ? (e.active = !0, e.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${Rt()}px, ${et}px, 0) scale(1)`
              }) : e.itemNumber === _e && (e.upNext = !0, e.active = !1, e.styles = {
                ...e.styles,
                transform: `translate3d(${At(e,-1)}px, ${Ht(e)}px, 0) scale(${zt()})`
              }), e)))), Se(_e + 1)
            }(t);
            const r = ye + 1;
            if (!(r > ie))
              if (n({
                  event: t ? "carousel_swipe" : "carousel_next",
                  event_category: "carousel",
                  event_action: t ? "swipe" : "next",
                  event_label: a
                }), Ft(r, ie, !1), Be) {
                let e = r * J * -1;
                e < Ce && (e = Ce, A(!0), R(!1), he(ie)), he(r), z(W.map((t => (t.styles = {
                  ...t.styles,
                  transform: `translate3d(${e}px, 0, 0)`
                }, t))))
              } else {
                let e = xe - ae;
                0 === xe && (e = -1 * X), he(r), e < Ce && (e = Ce, A(!0), R(!1), he(ie)), ke(e)
              }
          }, Ut = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (lt || it) return;
            if (ut(!0), !0 === le) return void
            function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (lt) return;
              if (_e - 1 < 0) return;
              const t = W[_e - 1]?.tina?.payload?.meta?.title ?? "card-" + (_e - 1);
              n({
                event: e ? "modal_swipe" : "modal_previous",
                event_category: "modal",
                event_action: e ? "swipe" : "previous",
                event_label: a,
                card_name: t,
                card_id: _e - 1,
                position: _e - 1,
                view_name: `${W[_e-1].source_content_id}/${t}`,
                source_content_id: W[_e - 1].source_content_id,
                source_content_name: W[_e - 1].source_content_name
              }), Ft(_e - 1, c.length, !0), Be || z(W.map((e => (e.itemNumber === _e + 1 ? e.upNext = !1 : e.itemNumber === _e - 2 ? e.upNext = !0 : e.itemNumber === _e ? (e.upNext = !0, e.active = !1, e.styles = {
                ...e.styles,
                transform: `translate3d(${At(e,1)}px, ${Ht(e)}px, 0) scale(${zt()})`
              }) : e.itemNumber === _e - 1 && (e.active = !0, e.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${Rt()}px, ${et}px, 0) scale(1)`
              }), e)))), Be && z(W.map((e => {
                e.itemNumber === _e + 1 ? e.upNext = !1 : e.itemNumber === _e - 2 ? e.upNext = !0 : e.itemNumber === _e ? (e.upNext = !0, e.active = !1) : e.itemNumber === _e - 1 && (e.active = !0);
                const t = e.styles.transform.replace("translate3d(", "").split(",");
                let a = Number(t[0].replace("px", ""));
                a += Wt();
                const n = `translate3d(${a}px,${t[1]},${t[2]}`;
                return e.styles = {
                  ...e.styles,
                  transform: n
                }, e
              }))), Se(_e - 1)
            }(t);
            const r = ye - 1;
            if (!(r < 0))
              if (n({
                  event: t ? "carousel_swipe" : "carousel_previous",
                  event_category: "carousel",
                  event_action: t ? "swipe" : "previous",
                  event_label: a
                }), Ft(r, ie, !1), Be) {
                let e = r * J * -1;
                e > 0 && (e = 0, R(!0), A(!1), he(0)), he(r), z(W.map((t => (t.styles = {
                  ...t.styles,
                  transform: `translate3d(${e}px, 0, 0)`
                }, t))))
              } else {
                let e = xe + ae;
                he(r), (e > 0 || 0 === e || -1 * e < Y) && (e = 0, R(!0), A(!1), he(0)), ke(e), z(W.map((t => (t.styles = {
                  ...t.styles,
                  transform: `translate3d(${e}px, 0, 0)`
                }, t))))
              }
          }, qt = e => {
            if (Nt || le || Be) return;
            const t = $(e);
            St(t.x)
          }, Yt = e => {
            if (Nt || 0 === _t || le || Be) return;
            const t = $(e),
              a = t.x > _t ? 1 : -1;
            let n = Math.abs(_t - t.x) * a;
            (0 === ye && 1 === a || ye === ie && -1 === a) && (n *= .35), Mt(!0), Et(n)
          }, Qt = e => {
            if (Nt || le || Be) return;
            const t = $(e),
              a = t.x > _t ? 1 : -1,
              n = Math.abs(_t - t.x);
            kt(n > Dt ? a > 0 ? "prev" : "next" : ""), Xt()
          }, Xt = () => {
            wt(!0), St(0), Et(0), Mt(!1)
          }, Kt = e => {
            Tt && (Qt(e), Mt(!1))
          }, Jt = function(e, t) {
            let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            return e.map(((e, n) => {
              let r = n * J,
                s = n;
              !1 === Be && (s = Math.ceil(.5 * n) + 1, n > 0 && (r = 2 === s ? X : X + J * (s - 2)));
              const o = F[n];
              return o?.current && (o.current.scrollTop = 0), {
                ...e,
                mobileMode: Be,
                itemNumber: n,
                columnNumber: s,
                inModalMode: !1,
                upNext: !0,
                active: !1,
                openModalMode: ea,
                element: o,
                transitionStyle: t,
                styles: {
                  left: r,
                  transform: "" === a ? null : a,
                  height: null,
                  top: null
                }
              }
            }))
          }, Zt = () => {
            const e = W[_e]?.tina?.payload?.meta?.title ?? `card-${_e}`;
            if (n({
                event: "modal_close",
                event_category: "modal",
                event_action: "close",
                event_label: a,
                card_name: e,
                card_id: _e,
                position: _e,
                view_name: `${W[_e].source_content_id}/${e}`,
                source_content_id: W[_e].source_content_id,
                source_content_name: W[_e].source_content_name
              }), Be) {
              let e = _e * J * -1;
              e < Ce && (e = Ce, A(!0), R(!1), he(ie)), he(_e), Ft(_e, ie, !1), z(Jt(c, "cardClose", `translate3d(${e}px, 0, 0)`))
            } else {
              z(Jt(c, "cardClose"));
              const e = Math.ceil((W[_e].columnNumber + 1) / ee) - 1;
              he(e);
              let t = e * ae * -1;
              Pe < be ? (t = 0, R(!0), A(!0), he(0)) : t < Ce ? (t = Ce, R(!1), A(!0), he(ie)) : Ft(e, ie, !1), ke(t), Se(0)
            }
            L.current.style.transform = "translateY(0px)", L.current.style.transition = "all var(--eventDeck-transitionCardClose)", nt(!1), qe(!1), ue(!1), Ae(!1), Re(!1), Qe(!1), setTimeout((() => {
              Ve(!0)
            }), Xe)
          };
          (0, m.useEffect)((() => {
            !1 !== Fe && (Ve(!1), nt(!1), j.style.zIndex = null, z(W.map((e => (e.transitionStyle = "", e)))))
          }), [Fe]);
          const ea = e => {
            setTimeout((() => {
              ht(e), gt(!0)
            }), 1)
          };
          (0, m.useEffect)((() => {
            if (!bt) return;
            if (gt(!1), lt) return;
            Se(Number(yt.target.dataset.itemPosition)), Ae(!0), dt(!0), ot && ct(!1);
            const e = W[yt.target.dataset.itemPosition].source_content_id,
              t = W[yt.target.dataset.itemPosition].source_content_name,
              r = W[yt.target.dataset.itemPosition]?.tina?.payload?.meta?.title;
            n({
              event: "card_click",
              event_category: "card",
              event_action: "click",
              event_label: a,
              card_name: r ?? `card-${_e}`,
              card_id: yt.target.dataset.itemPosition,
              position: yt.target.dataset.itemPosition,
              view_name: `${e}/${r}`,
              source_content_id: e,
              source_content_name: t
            })
          }), [bt]), (0, m.useEffect)((() => {
            if (!He || le) return;
            Ae(!1);
            const e = (() => {
              const e = j?.getBoundingClientRect().top;
              return tt(-1 * (e - u)), -1 * (e - 140)
            })();
            Be && z(W.map((e => {
              const t = e.itemNumber > _e + 3 || e.itemNumber < _e - 3;
              return e.styles = {
                ...e.styles,
                display: t ? "none" : null,
                transition: t ? "none" : null
              }, e
            }))), j.style.zIndex = "101", nt(!0), L.current && (L.current.style.transition = "all var(--eventDeck-transitionCardOpen)", L.current.style.transform = `translateY(${e}px)`), qe(!0), setTimeout((() => {
              Re(!0)
            }), 1)
          }), [He]);
          const ta = () => {
            z(W.map(((e, t) => {
              e.active = t === _e, e.inModalMode = !0, e.transitionStyle = "cardOpen", Be && (e.upNext = Gt(e.itemNumber));
              const a = !Be;
              let n = 0;
              if (Be) {
                const e = Ne + 5 * u;
                n = window.innerHeight - e
              }
              return e.itemNumber < _e ? e.styles = {
                ...e.styles,
                height: Be ? `${n}px` : null,
                transform: `translate3d(${At(e,-1,a)}px, ${et}px, 0) scale(${zt()})`
              } : e.itemNumber > _e ? e.styles = {
                ...e.styles,
                height: Be ? `${n}px` : null,
                transform: `translate3d(${At(e,1,a)}px, ${et}px, 0) scale(1)`
              } : e.itemNumber === _e && (e.styles = Be ? {
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
          (0, m.useEffect)((() => {
            !1 !== Ge && !0 !== le && (ue(!0), Re(!1), Ft(_e, W.length, !0), L.current && (L.current.style.transition = "all var(--eventDeck-transitionCardOpen)", L.current.style.transform = `translateY(${et}px)`), ta(), Be ? (ke(0), dt(!1), st(!0)) : Qe(!0))
          }), [Ge]), (0, m.useEffect)((() => {
            rt && (st(!1), z(W.map((e => ("none" === e.styles.display && (e.styles.display = null, e.styles.transition = null), e)))))
          }), [rt]);
          const aa = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            z(W.map((t => {
              if (t.upNext = Gt(t.itemNumber), t.itemNumber !== _e) {
                let e = At(t, 1);
                t.itemNumber < _e && (e = At(t, -1)), t.styles = {
                  ...t.styles,
                  transform: `translate3d(${e}px, ${Ht(t)}px, 0) scale(${zt()})`
                }
              } else t.itemNumber === _e && !Be && e && (t.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${Rt()}px, ${et}px, 0) scale(1)`
              });
              return t
            })))
          };
          (0, m.useEffect)((() => {
            !1 !== Ye && !0 !== Be && (Qe(!1), setTimeout((() => {
              aa(), dt(!1)
            }), 1))
          }), [Ye]), (0, m.useEffect)((() => {
            z(Jt(c, ""))
          }), [X, J, c]), (0, m.useEffect)((() => {
            const e = window.navigator?.userAgentData?.platform || window.navigator?.platform;
            Lt(["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(e))
          }), []), (0, m.useEffect)((() => {
            le ? (t(!1), Pt && Ot(!0)) : Tt || le || (t(!0), Pt && Bt && Ot(!1))
          }), [le, Tt]), (0, m.useEffect)((() => {
            if (!lt) return;
            clearTimeout(mt);
            const e = setTimeout((() => {
              ut(!1)
            }), pt);
            ft(e)
          }), [lt]), (0, m.useEffect)((() => {
            T && setTimeout((() => {
              M(!1)
            }), 3e3)
          }), [T]), (0, m.useEffect)((() => {
            M(!0), ke(0), he(0);
            let e = Math.ceil(Math.ceil(Pe / J) / ee);
            Be && (e = W.length - 1), e < 0 && (e = 1), Ft(0, e, !1), le && Zt()
          }), [Be]), (0, m.useEffect)((() => {
            L.current && !le && (L.current.style.transform = "")
          }), [L, Be, le]), (0, m.useEffect)((() => {
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
            V(c.map((() => (0, m.createRef)())))
          }), [c]), (0, m.useEffect)((() => {
            const e = e => {
              const {
                key: t
              } = e;
              "ArrowLeft" === t ? Ut(null, !1) : "ArrowRight" === t && Vt(null, !1)
            };
            return document.addEventListener("keydown", e), () => {
              document.removeEventListener("keydown", e)
            }
          }), [lt, it, le]), (0, m.useEffect)((() => {
            if (L.current) {
              let e = 0;
              e = L?.current?.clientHeight, e += E(L?.current, "margin-top"), e += E(L?.current, "margin-bottom"), we(e)
            }
          }), [L, O]), (0, m.useEffect)((() => {
            le && (() => {
              const e = j?.getBoundingClientRect().top,
                t = -1 * (e - u);
              if (z(W.map((e => {
                  if (e.styles.transform) {
                    const a = e.styles.transform.split(","),
                      n = `${a[0]}, ${t}px,${a[2]}`;
                    e.styles = {
                      ...e.styles,
                      transform: n
                    }
                  }
                  return e
                }))), L.current) {
                const t = -1 * (e - u);
                L.current.style.transform = `translateY(${t}px)`
              }
            })()
          }), [Be, le, et]), (0, m.useEffect)((() => {
            Pe < pe * me && 0 === ye ? (ke(0), A(!0), R(!0)) : xe < Ce ? (A(!0), R(!1), he(ie), ke(Ce)) : xe < 0 && (A(!1), he(ie - 1)), Pe > pe * me && H && A(!1)
          }), [Ce]), (0, m.useEffect)((() => {
            if (C.current) {
              I(C.current);
              const e = E(document.documentElement, "--root-font-size"),
                t = E(C.current, "--eventDeck-modalGutters") * e;
              Me(t);
              const a = me - 2 * t;
              ge(a), ve(a / me);
              let n = E(C.current, "--eventDeck-modalBottomGutter");
              n *= e;
              const r = window.innerHeight - (Ne + n);
              se(.5 * a < r ? a / 4 : .5 * r);
              const s = E(C.current, "--eventDeck-mobileBreakpoint");
              ze(s);
              let o = E(C.current, "--eventDeck-itemSize");
              o *= e, q(o);
              let i = E(C.current, "--eventDeck-modalGutterGap");
              i *= e, Ie(i);
              let u = E(C.current, "--eventDeck-insideMargin");
              u *= e;
              const m = !1 === Be ? 2 * o + u : o + u;
              Q(m), K(m + u);
              const p = o + u;
              Z(p);
              let v = Math.ceil(.5 * (c.length - 1)) * p + m;
              Be && (v = c.length * p), Le(v), 0 !== Pe && Ee(-1 * Pe + a);
              let b = Math.ceil(Math.ceil(v / p) / ee);
              (Be || le) && (b = W.length - 1), de(b);
              const g = E(C.current, "--eventDeck-itemScaleUpAmount");
              Ze(g), Ke(E(C.current, "--eventDeck-cardCloseTransitionDuration")), f(E(C.current, "--eventDeck-itemImageTitleMargins") * e), null !== d && e !== d && (l(e), le && aa()), null === d && l(e)
            }
          }), [C, c]), (0, m.useEffect)((() => {
            if (le && !Be) {
              aa();
              const e = j?.getBoundingClientRect().top,
                t = -1 * (e - u);
              t !== et && tt(t)
            }
          }), [b]), (0, m.useEffect)((() => {
            const e = p()((e => {
              fe(e), Oe(e < We);
              const t = (1 - pe) / 2;
              je(e * t);
              const a = e - 2 * Te,
                n = Math.round(a / J);
              te(n), ne(n * J), ce(e - e * t);
              const r = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth;
              if (r !== b && _(r), le && r === b && !T) {
                const e = j?.getBoundingClientRect().top,
                  t = -1 * (e - u);
                t !== et && tt(t)
              }
            }), 300);
            return window.addEventListener("resize", (() => {
              e(window.innerWidth)
            })), window.addEventListener("scroll", (() => {
              le && Be && e(window.innerWidth)
            })), e(window.innerWidth), () => {
              window.removeEventListener("resize", (() => {
                e(window.innerWidth)
              }))
            }
          }), [J, pe, le, Be]), (0, m.useEffect)((() => {
            !1 !== le && !0 !== T && (Be ? ta() : aa(!0))
          }), [oe, ae, De, U, me, $e, re, et]), (0, m.useEffect)((() => {
            const e = () => {
              if (C.current && ot) {
                const e = C.current.getBoundingClientRect(),
                  t = .2 * window.innerHeight;
                window.innerHeight - e.top >= t && ct(!1)
              }
            };
            return e(), window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
          }), [C]);
          const na = (0, m.useCallback)((() => {
            if (null !== C.current && !r) {
              const {
                top: t
              } = C?.current?.getBoundingClientRect() || 0;
              t <= .6 * window.innerHeight && (n({
                event: "page_section_impression",
                event_action: "impression",
                event_category: "page_section",
                event_label: a,
                element_placement: `events deck - ${e?._memoq?.title}`
              }), s(!0))
            }
          }), [C]);
          (0, m.useEffect)((() => (window.addEventListener("scroll", na), () => {
            window.removeEventListener("scroll", na)
          })), [na, C]), (0, m.useEffect)((() => {
            "next" === xt ? (Vt(null, !0), kt("")) : "prev" === xt && (Ut(null, !0), kt(""))
          }), [xt]), (0, m.useEffect)((() => {
            C.current && C.current.addEventListener("mouseleave", (() => {
              Tt && Xt()
            }))
          }), [C, Tt]), (0, m.useEffect)((() => (document.body.addEventListener("mouseleave", Kt), () => {
            document.body.removeEventListener("mouseleave", Kt)
          })), [Tt]), (0, m.useEffect)((() => {
            Nt && setTimeout((() => {
              wt(!1), St(0)
            }), pt)
          }), [Nt]), (0, m.useEffect)((() => {
            It(Be ? 20 : 100)
          }), [Be]), (0, m.useEffect)((() => {
            vt(le ? 500 : 100)
          }), [le]);
          const ra = (0, y.useTinaComponents)(),
            sa = (0, m.useMemo)((() => ({
              ...ra,
              CardWithImageGallery: k.c,
              HTMLElement: v.HTMLElement,
              ImageWithBadge: v.ImageWithBadge,
              Carousel: v.Carousel,
              GroupOfItems: g(),
              UnorderedList: v.UnorderedList
            })), [ra]),
            oa = (0, m.useMemo)((() => W.map((e => (0, m.createElement)(P, {
              ...e,
              refDeck: C,
              key: e?.id ?? e?.sync_hash,
              components: sa,
              prevPage: Ut,
              nextPage: Vt,
              loadCssRawValue: E,
              selectedItemNumber: _e,
              carouselTitle: a,
              sharedDraggingDelta: $t,
              setSharedDraggingDelta: jt
            })))), [W, C, sa, Ut, Vt, _e]);
          return !oa?.length || oa.length <= 0 ? null : (0, D.jsxs)(D.Fragment, {
            children: [(0, D.jsx)("div", {
              className: "rockstargames-modules-core-cardff262821c1d20c77aa6f66719d5e05b5",
              "data-modal-mode": Ue,
              "aria-hidden": "true"
            }), (0, D.jsxs)("div", {
              className: "rockstargames-modules-core-cardd0ea03f3ac507cb0cc28638f1eb2d789",
              "data-modal-mode": le,
              "data-faded": ot,
              ref: C,
              onTouchStart: qt,
              onTouchMove: Yt,
              onTouchEnd: Qt,
              onMouseDown: qt,
              onMouseMove: Yt,
              onMouseUp: Qt,
              tabIndex: -1,
              role: "presentation",
              children: [(0, D.jsxs)("div", {
                className: "rockstargames-modules-core-cardd4032f720cf2d5a227dc862496c24e56",
                "data-modal-mode": le,
                ref: L,
                "data-animating": at,
                children: [(0, D.jsx)("h2", {
                  className: "rockstargames-modules-core-cardcc17d44570c8ecd9442f3267ef7474c6",
                  children: a
                }), (0, D.jsx)(B, {
                  prevPage: Ut,
                  prevBtnDisabled: G,
                  nextPage: Vt,
                  nextBtnDisabled: H,
                  selectedItemNumber: _e,
                  itemsData: c,
                  closeModalMode: Zt,
                  inModalMode: le
                })]
              }), (0, D.jsx)("div", {
                className: "rockstargames-modules-core-cardf2e387b979bbf1e993a1d9311a150e16",
                "data-modal-mode": le,
                "data-is-dragging": Tt,
                style: {
                  transform: `translate3d(${xe+Ct}px, 0, 0)`,
                  width: `${Pe}px`
                },
                ref: O,
                children: oa
              })]
            })]
          })
        };
      var W = a(6648)
    },
    6648: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        Card: () => n.c,
        CardGrid: () => g,
        CardWide: () => x,
        CardWithImageGallery: () => E.c,
        CoverCard: () => C,
        Deck: () => j.c,
        TextCard: () => $.c
      });
      var n = a(360),
        r = a(8200),
        s = a(3660),
        o = a.n(s),
        c = a(1668),
        i = a(9812),
        d = a.n(i),
        l = a(1740),
        u = a(1884),
        m = a(9152),
        f = a(3052),
        p = a(1204);
      var v = a(3480);

      function b(e, t) {
        const a = {
          ...e
        };
        return o().forOwn(e, ((e, n) => {
          if ("image" === n) {
            const e = a[n];
            a[n] = {
              ...e,
              prod: t
            }
          } else o().isObject(e) && !o().isArray(e) ? b(e, t) : o().isArray(e) && (a[n] = e.map((e => o().isObject(e) ? b(e, t) : e)))
        })), a || []
      }
      const g = e => {
        let {
          size: t,
          className: a
        } = e;
        const n = (0, l.useTinaComponents)(),
          s = (0, r.useMemo)((() => ({
            ...n,
            HTMLElement: c.HTMLElement,
            ImageWithBadge: c.ImageWithBadge,
            Carousel: c.Carousel,
            Cta: c.Cta,
            GroupOfItems: d(),
            Grid: c.Grid,
            ClrCard: u.c,
            ClrCollapsedCard: m.c,
            CalloutSection: c.CalloutSection,
            TrackList: c.TrackList
          })), [n]),
          i = (() => {
            const {
              data: e
            } = (0, f.useQuery)(p.TinaModulesList, {
              variables: {
                type: "clr-card",
                locale: "en_us",
                orderDirection: "desc",
                orderBy: "created"
              }
            }), t = e?.tinaModulesList?.results, a = o().map(t, "id");
            return (0, c.useTinaModuleFetchByIds)({
              ids: a
            })
          })(),
          g = (0, l.useTinaPayload)(),
          y = (0, r.useMemo)((() => i ? i.reduce(((e, t) => {
            if (t) {
              const {
                id: a,
                tina: n
              } = t, r = o().clone(n);
              o().set(r, "payload.meta.id", a);
              const c = r?.payload,
                i = c?.meta?.cdn ?? !1 ?? g?.meta?.prod ?? !1,
                d = b(c?.content?.[0], i),
                u = c?.meta?.title,
                m = d?._memoq?.subheader,
                f = d?.image,
                p = c?.content?.[0].expandedType,
                y = c?.content?.[0].cardType,
                h = d?.content ?? [];
              "release" === y && e.push((0, v.jsx)(l.TinaParser, {
                components: s,
                tina: r,
                componentProps: {
                  id: a,
                  tina: r,
                  title: u,
                  subheader: m,
                  image: f,
                  expandedType: p,
                  modalContent: h
                }
              }, a))
            }
            return e
          }), []) : null), [i, t]);
        return (0, v.jsx)(c.Grid, {
          className: a,
          children: y
        })
      };
      var y = a(8952);
      const h = {
          pillBtn: "rockstargames-modules-core-cardbd88ef1aaf8b49461677d4d97306f35d",
          selected: "rockstargames-modules-core-cardf42b53431437947c43561959abf79491",
          cardWideContainer: "rockstargames-modules-core-cardd87ea8e8472f569ce05472af1c929903",
          cardWide: "rockstargames-modules-core-cardc3a0e9c010c26326b49aadd4163cd8c1",
          cardWideContent: "rockstargames-modules-core-cardf7f18a1484cb133006ddf25280f61dec"
        },
        x = e => {
          let {
            link: t,
            containerClass: a
          } = e;
          const n = (0, r.useRef)(null);
          return (0, v.jsx)(y.NavLink, {
            to: t,
            className: [h.cardWideContainer, a].join(" "),
            rel: "noopener noreferrer",
            "aria-label": "GTA VI Destination Page",
            children: (0, v.jsx)("div", {
              ref: n,
              className: h.cardWide,
              children: (0, v.jsx)("div", {
                className: h.cardWideContent,
                style: {
                  "--background-image-desktop": "url(https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1aba112359a3d6747ad694a8c02a07c.png)",
                  "--background-image-mobile": "url(https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/26f95aa7677031d8cd56ea75250c7bdd.png)"
                }
              })
            })
          })
        };
      var k = a(1512),
        _ = a(5120),
        S = a(4928),
        N = a(5992),
        w = a(2700);
      const T = {
          pillBtn: "rockstargames-modules-core-carda56c6df6234fdecc1eb63ff63868bcdc",
          selected: "rockstargames-modules-core-cardf1662a1d515a6c37c1e47875f82f10dc",
          customModalContent: "rockstargames-modules-core-cardea6d587c92bce0027521c69627bc1fed",
          content: "rockstargames-modules-core-cardd4e4fb6769eee0c3082457bfd1d2ab47",
          secondary: "rockstargames-modules-core-cardb39dce39f6d0abb78444740ed1e71e5a",
          logo: "rockstargames-modules-core-carda5a09a383b5be586ab9cd8db4065d28b"
        },
        {
          variants: M
        } = c.framer.Animations,
        C = e => {
          let {
            id: t,
            logoImage: a = null,
            title: n,
            titleSizeClass: s = null,
            content: o,
            size: c = "md",
            expandedType: i = "short",
            textOverlayProps: d = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            images: u = [],
            deckProps: m = {},
            to: f = null,
            tina: p = {},
            cardIds: b,
            theme: g
          } = e;
          const y = (0, l.useTinaPayload)(),
            h = p?.payload?.meta?.cdn ?? y?.meta?.prod ?? !1,
            [x, C] = (0, r.useState)(m?.size ?? c),
            E = (0, l.useGetCdnSource)(a ?? null);
          let $ = null;
          return y.content && ($ = y?.content[0]?._memoq ? y?.content[0]?._memoq?.body : null), (0, r.useEffect)((() => {
            C(m?.size ?? c)
          }), [m?.size, c]), (0, v.jsx)(N.c, {
            id: t,
            title: n,
            size: x,
            expandedType: i,
            images: u,
            deckProps: m,
            prod: h,
            payload: {
              content: o,
              meta: {}
            },
            variants: M.plainCard,
            textOverlayProps: d,
            modalProps: {
              className: T.customModal,
              contentClassName: T.customModalContent
            },
            expandedCardContents: (0, v.jsx)(S.c, {
              images: u,
              prod: h,
              expandedView: !0
            }),
            theme: g,
            cardIds: b,
            isCoverCard: !0,
            children: (0, v.jsx)(w.c, {
              expandedType: i,
              to: f,
              children: (0, v.jsxs)("div", {
                className: T.content,
                children: [a && (0, v.jsx)("img", {
                  className: T.logo,
                  alt: "logo",
                  src: E
                }), (0, v.jsx)("h2", {
                  className: s,
                  children: n
                }), null !== $ && (0, v.jsx)("p", {
                  children: $
                }), (0, v.jsx)("button", {
                  type: "button",
                  children: (0, v.jsx)(k.FormattedMessage, {
                    ..._.card.card_learn_more
                  })
                })]
              })
            })
          })
        };
      var E = a(4212),
        $ = a(7872),
        j = a(4152)
    },
    1204: e => {
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
          o = new Set,
          c = new Set;
        for (s.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var i = c;
          c = new Set, i.forEach((function(e) {
            o.has(e) || (o.add(e), (n[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return o.forEach((function(t) {
          var n = r(e, t);
          n && a.definitions.push(n)
        })), a
      }(t, "TinaModulesList")
    }
  }
]);
//# sourceMappingURL=463b435527a870b5ac480e749d9a4525.js.map