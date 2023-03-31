(self.webpackChunk_rockstargames_modules_core_card = self.webpackChunk_rockstargames_modules_core_card || []).push([
  [749, 585], {
    7454: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => p
      });
      var n = a(822),
        s = a(7311),
        i = a.n(s),
        r = a(8976),
        l = a(9542),
        o = a(9373),
        c = a(1204),
        d = a(4351),
        u = a(3322);
      const m = {
          Card: o.Z,
          CardWithImageGallery: c.Z,
          TextCard: d.Z
        },
        p = r.framer.withFadeIn((0, r.withSimpleErrorBoundary)((e => {
          let {
            cards: t = [],
            size: a,
            title: s,
            description: o,
            customSlidesPerView: c = null
          } = e;
          const d = (0, n.useRef)(null),
            p = i().map(t, "id"),
            f = (0, r.useTinaModuleFetchByIds)({
              ids: p
            }),
            [v, h] = (0, n.useState)(c);
          (0, n.useEffect)((() => {
            if (!d.current) return;
            const e = () => {
              const e = c || window.getComputedStyle(d.current).getPropertyValue("--slides-per-view");
              h(e)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }));
          const x = (0, n.useMemo)((() => f ? f.reduce(((e, t) => {
            if (t) {
              const {
                id: n,
                tina: s
              } = t, r = i().clone(s);
              i().set(r, "payload.meta.id", n), e.push((0, u.jsx)(l.TinaParser, {
                components: m,
                tina: r,
                componentProps: {
                  deckProps: {
                    size: a
                  },
                  tina: r
                }
              }, n))
            }
            return e
          }), []) : null), [f, a]);
          return (0, u.jsx)("div", {
            ref: d,
            children: (0, u.jsx)(r.Gen9CoreCarousel, {
              description: o,
              size: a,
              slideChildren: x,
              title: s,
              customSlidesPerView: v
            })
          })
        })))
    },
    9172: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => i
      });
      var n = a(8976);
      var s = a(3322);
      const i = e => {
        let {
          hasTag: t = !1,
          tag: a = null,
          badges: i = []
        } = e;
        return t && a ? (0, s.jsx)("div", {
          className: "f3c82db691085629ecd1",
          children: a
        }) : t && i && i?.length > 0 ? (0, s.jsx)("div", {
          className: "f6e8e857db521f2f02c2",
          children: i.map((e => (0, s.jsx)(n.Badge, {
            ...e
          }, e?.text)))
        }) : null
      }
    },
    9525: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => v
      });
      var n = a(822),
        s = a(7311),
        i = a.n(s),
        r = a(9542),
        l = a(8976),
        o = a(9172),
        c = a(547);
      var d = a(3322);
      const {
        LiteMotion: u,
        Animations: m
      } = l.framer, {
        transitions: p
      } = m, f = e => {
        let t, {
          threshold: a,
          trackRef: n,
          callback: s,
          children: i
        } = e;
        return t = !1, i
      }, v = e => {
        let {
          components: t,
          payload: a,
          prod: s,
          size: l,
          title: m,
          initial: v = "initial",
          animate: h = "animate",
          variants: x,
          type: y = null,
          context: g = null,
          textOverlayProps: b,
          className: N,
          children: k
        } = e;
        const S = (0, n.useRef)(),
          w = (0, n.useRef)(),
          {
            tag: T,
            expandedHasTag: j,
            badges: M
          } = b;
        return i().set(a, "meta.prod", s), (0, d.jsx)(f, {
          threshold: [25, 50, 75, 90, 100],
          trackRef: "long" === y ? S : w,
          children: (0, d.jsxs)(u, {
            ref: S,
            initial: v,
            animate: h,
            variants: x.expanded,
            transition: p.cardOpen,
            className: (0, r.classList)("b26588866b3f8cf68385", N),
            "data-type": y,
            "data-size": l,
            "data-context": g,
            children: [(0, d.jsx)(c.Z, {
              size: l,
              title: m,
              textOverlayProps: b,
              expandedView: !0,
              children: k
            }), (0, d.jsxs)(u, {
              ref: w,
              className: "c86efe7469f4c7bea32c",
              variants: x.expandedContents,
              transition: p.afterCardOpen,
              children: [(0, d.jsxs)("div", {
                className: "d606f8b2c00b2c32599e",
                children: [(0, d.jsx)(o.Z, {
                  hasTag: j,
                  tag: T,
                  badges: M
                }), (0, d.jsx)("h1", {
                  children: m
                })]
              }), (0, d.jsx)(r.TinaParser, {
                components: t,
                tina: {
                  payload: a
                }
              })]
            })]
          })
        })
      }
    },
    547: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => r
      });
      var n = a(822),
        s = a(9838),
        i = a(3322);
      const r = e => {
        let {
          textOverlayProps: t,
          title: a,
          size: r,
          expandedView: l = !1,
          children: o
        } = e;
        const [c] = (e => {
          let {
            hasTextOverlay: t,
            tag: a,
            collapsedHasTag: r,
            description: l,
            collapsedHasDescription: o,
            size: c,
            title: d,
            expandedView: u,
            badges: m
          } = e;
          const [p, f] = (0, n.useState)(null), v = (0, n.useMemo)((() => {
            if (!t) return null;
            const e = "sm" !== c && o;
            return (0, i.jsx)(s.Z, {
              title: d,
              hasTag: r,
              tag: a,
              hasDescription: e,
              description: l,
              fadesOut: u,
              badges: m
            })
          }), [t, a, r, l, o, c, d, u, m]);
          return (0, n.useEffect)((() => {
            f(v)
          }), [v]), [p, f]
        })({
          ...t,
          size: r,
          title: a,
          expandedView: l
        });
        return (0, i.jsxs)("header", {
          className: "abf1ce2359a28e402c7a",
          children: [n.Children.map(o, (e => (0, n.cloneElement)(e, {
            title: a,
            size: r,
            expandedView: l
          }))), c]
        })
      }
    },
    8819: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => f
      });
      var n = a(822),
        s = a(7814),
        i = a(8008),
        r = a(8976),
        l = a(420),
        o = a.n(l),
        c = a(9542),
        d = a(6711),
        u = a(9525);
      var m = a(3322);
      const p = e => {
          let {
            id: t,
            position: a,
            title: r,
            size: l = "md",
            expandedType: o = null,
            modalProps: c = {
              content: null,
              className: "",
              contentClassName: ""
            },
            className: u,
            children: p
          } = e;
          const [f, v] = (0, s.useSearchParams)(), h = (0, n.useRef)(null), [, x] = (0, i.useModal)(), {
            track: y
          } = (0, d.useGtmTrack)(), [g, b] = (0, n.useState)(!0);
          (0, n.useEffect)((() => b(!1)), []);
          const N = (0, n.useCallback)((() => {
            if (!(h.current || o && "linkout" !== o)) return;
            const e = window.getComputedStyle(h.current);
            c?.content && (b(!0), x({
              content: c.content,
              onClose: k,
              rect: h.current.getBoundingClientRect(),
              width: parseInt(e.getPropertyValue("width")),
              height: parseInt(e.getPropertyValue("height")),
              className: c?.className,
              contentClassName: c?.contentClassName
            }), y({
              event: "trackPageview",
              link_url: window.location.href,
              card_id: t,
              card_name: r?.toLowerCase()
            }), setTimeout((() => {
              h.current.style.opacity = 0
            }), 50), setTimeout((() => {
              h.current.style.opacity = 1
            }), 1e3))
          }), [h, o, c, x, v]);
          (0, n.useEffect)((() => {
            f.get("info") !== t || g || N()
          }), [f, t, N, g]);
          const k = () => {
              b(!1), v({}), y({
                event: "modal_close",
                event_category: "modal",
                event_action: "close",
                event_label: r?.toLowerCase(),
                card_id: t,
                card_name: r?.toLowerCase()
              }), y({
                event: "trackPageview"
              })
            },
            S = e => {
              if ("linkout" !== o) return e.preventDefault(), e.stopPropagation(), t ? v({
                info: t
              }) : N(), null
            };
          return (0, m.jsx)("div", {
            ref: h,
            onClick: S,
            onKeyUp: S,
            className: u,
            "data-size": l,
            "data-type": o,
            role: "button",
            tabIndex: 0,
            children: p
          })
        },
        f = e => {
          let {
            payload: t,
            prod: a,
            images: s,
            size: i,
            title: l,
            initial: d,
            animate: f,
            variants: v,
            id: h,
            expandedType: x,
            children: y,
            expandedCardContents: g,
            textOverlayProps: b = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            deckProps: N = {},
            modalProps: k = []
          } = e;
          const S = (0, c.useTinaComponents)(),
            w = (0, n.useMemo)((() => ({
              ...S,
              HTMLElement: r.HTMLElement,
              ImageWithBadge: r.ImageWithBadge,
              Carousel: r.Carousel,
              GroupOfItems: o()
            })), [S]),
            T = (0, n.useMemo)((() => (0, m.jsx)(u.Z, {
              type: x,
              components: w,
              payload: t,
              prod: a,
              images: s,
              size: i,
              title: l,
              textOverlayProps: b,
              initial: d,
              animate: f,
              variants: v,
              children: g
            })), [x, s, a, i, l, b, g, d, f, v, w, t]);
          return (0, m.jsx)(p, {
            id: h,
            title: l,
            size: i,
            expandedType: x,
            images: s,
            deckProps: N,
            modalProps: {
              content: T,
              ...k
            },
            className: "d44e1aa953059f5cf739",
            children: y
          })
        }
    },
    507: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => v
      });
      var n = a(822),
        s = a(9542),
        i = a(559),
        r = a(8976);
      const l = {
        layeredImageFrame: "be654799b10be1d2683c",
        layered: "ddb6c868927fc40f5dec",
        foreground: "d7e710282847fb9224de",
        imageMask: "ffc0a2a4179a84c1734b",
        logo: "fa4275085d6c272146c2",
        "sm-horizontal": "c7c57379e39dc9e34690"
      };
      var o = a(3322);
      const {
        LiteMotion: c,
        Animations: d
      } = r.framer, {
        getVariant: u,
        variants: m,
        transitions: p
      } = d, f = e => {
        let {
          image: t,
          i: a,
          prod: n
        } = e;
        const {
          alt: s,
          src: r
        } = (0, i.useImageParser)({
          ...t,
          prod: n
        });
        return (0, o.jsx)("img", {
          src: r.mobile,
          alt: s ?? "",
          style: {
            "--z-index": a
          }
        })
      }, v = e => {
        let {
          images: t = [],
          className: a = "",
          prod: i = !1,
          expandedView: r = !1,
          style: d = {}
        } = e;
        const [v, h] = (0, n.useState)({
          height: window.innerHeight,
          width: window.innerWidth
        });
        (0, n.useEffect)((() => {
          function e() {
            h({
              height: window.innerHeight,
              width: window.innerWidth
            })
          }
          return window.addEventListener("resize", e), () => {
            window.removeEventListener("resize", e)
          }
        }), [v]);
        const x = (0, n.useMemo)((() => t?.length && 0 !== t.length ? t.map((e => (0, o.jsx)(c, {
          className: (0, s.classList)(l[e?.specialClass] ?? l.imageMask, l[e?.sizeClass], e.className),
          variants: u(e?.specialClass ?? "imageMask", r ? "expanded" : "collapsed"),
          initial: "initial",
          animate: "animate",
          transition: p.cardOpen,
          children: (0, o.jsx)(f, {
            image: e,
            prod: i
          })
        }, `${e.className}-${v.width}x${v.height}`))) : null), [t, v, r, i]);
        return (0, o.jsx)(c, {
          className: (0, s.classList)(l.layeredImageFrame, t.length > 1 ? l.layered : l.flat, a),
          style: d,
          initial: m.fade.in.initial,
          animate: m.fade.in.animate,
          transition: p.instantFade,
          children: x
        })
      }
    },
    4950: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => i
      });
      var n = a(8976),
        s = a(3322);
      const i = e => {
        let {
          expandedType: t,
          to: a,
          children: i
        } = e;
        return "linkout" === t && a ? (0, s.jsx)(n.A, {
          to: a,
          children: i
        }) : i
      }
    },
    9838: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => u
      });
      var n = a(8976),
        s = a(9172);
      const i = {
        textOverlay: "b8bb24e78a7e5e3849fd",
        content: "a62c2da90114215ae3c8"
      };
      var r = a(3322);
      const {
        LiteMotion: l,
        Animations: o
      } = n.framer, {
        variants: c,
        transitions: d
      } = o, u = e => {
        let {
          title: t,
          hasTag: a,
          tag: n,
          hasDescription: o,
          description: u,
          fadesOut: m = !1,
          badges: p
        } = e;
        return (0, r.jsx)(l, {
          initial: c.fade.out.initial,
          animate: {
            opacity: m ? 0 : 1
          },
          transition: d.fade,
          className: i.textOverlay,
          children: (0, r.jsxs)("div", {
            className: i.content,
            children: [(0, r.jsx)(s.Z, {
              hasTag: a,
              tag: n,
              badges: p?.filter((e => e?.isPrimary))
            }), (0, r.jsx)("h3", {
              children: t
            }), o && u && (0, r.jsx)("div", {
              className: i.description,
              children: u
            })]
          })
        })
      }
    },
    7366: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => r
      });
      var n = a(822),
        s = a(8976),
        i = a(3322);
      const r = e => {
        let {
          images: t,
          title: a,
          expandedView: r,
          variants: l,
          transition: o
        } = e;
        const c = (0, n.useMemo)((() => t && 0 !== t?.length ? t.map((e => e?.image?.sources ? (0, i.jsx)(s.ImageWithBadge, {
          ...e,
          style: {
            "--object-position": e?.objectPosition ?? ""
          }
        }) : null)) : null), [t]);
        return !c?.length || c?.length < 1 ? null : 1 === c.length ? c : (0, i.jsx)(s.ThumbsGallery, {
          slideChildren: c,
          title: a,
          navigation: r,
          thumbsVisible: r,
          spaceBetween: 0,
          variants: l,
          transition: o
        })
      }
    },
    7749: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        Card: () => $.Card,
        CardExpanded: () => n.Z,
        CardHeader: () => s.Z,
        CardWithImageGallery: () => $.CardWithImageGallery,
        CardWrapper: () => i.Z,
        Deck: () => $.Deck,
        EventsDeck: () => P,
        LayeredImageFrame: () => r.Z,
        LinkoutWrapper: () => l.Z,
        TextCard: () => $.TextCard,
        TextOverlay: () => o.Z,
        ThumbsGalleryOrThumb: () => c.Z
      });
      var n = a(9525),
        s = a(547),
        i = a(8819),
        r = a(507),
        l = a(4950),
        o = a(9838),
        c = a(7366),
        d = a(822),
        u = a(8673),
        m = a.n(u),
        p = a(7814),
        f = a(8976),
        v = a(420),
        h = a.n(v),
        x = a(9542),
        y = a(1204),
        g = a(7311),
        b = a.n(g),
        N = a(4859),
        k = a(5938);
      var S = a(9929),
        w = a(559);
      var T = a(3322);

      function j(e, t) {
        const a = {
          ...e
        };
        return b().forOwn(e, ((e, n) => {
          if ("image" === n) {
            const e = a[n];
            a[n] = {
              ...e,
              prod: t
            }
          } else b().isObject(e) && !b().isArray(e) ? j(e, t) : b().isArray(e) && (a[n] = e.map((e => b().isObject(e) ? j(e, t) : e)))
        })), a
      }
      const M = (0, S.withTranslations)((e => {
          let {
            active: t,
            styles: a,
            title: n,
            itemNumber: s,
            inModalMode: i,
            openModalMode: r,
            element: l,
            upNext: o,
            mobileMode: c,
            refDeck: u,
            components: p,
            tina: v,
            prevPage: h,
            nextPage: y,
            loadCssRawValue: g,
            transitionStyle: b
          } = e;
          const N = (0, d.createRef)(),
            k = (0, d.createRef)(),
            S = (0, d.createRef)(),
            M = (0, d.createRef)(),
            C = (0, d.createRef)(),
            [E, P] = (0, d.useState)(!1),
            [$, O] = (0, d.useState)(0),
            [z, L] = (0, d.useState)(0),
            [D, Z] = (0, d.useState)(0),
            [I, W] = (0, d.useState)(!1),
            [V, R] = (0, d.useState)(0),
            [H, B] = (0, d.useState)(0),
            [F, _] = (0, d.useState)("700"),
            G = (0, x.useTinaPayload)(),
            A = v?.payload?.meta?.cdn ?? !1 ?? G?.meta?.prod ?? !1,
            U = (0, x.useTranslations)({
              payload: v?.payload,
              variables: v?.variables
            }),
            Y = U?.meta ?? {},
            X = j(U?.content?.[0], A),
            q = (0, d.useMemo)((() => X?.images?.[0]?.image?.badge), [X]),
            Q = (0, d.useMemo)((() => n ?? Y?.title), [n, Y?.title]),
            K = (0, w.useImageParser)({
              alt: X?.images?.[0]?.image?.alt ?? "",
              ariaLabel: X?.images?.[0]?.image?.alt ?? "",
              sources: X?.images?.[0]?.image?.sources ?? [],
              prod: A
            }),
            J = K?.src?.mobile ?? !1;
          (0, d.useEffect)((() => {
            O(E && !c ? 0 : H)
          }), [E, c]), (0, d.useEffect)((() => {
            const e = m()(((e, t) => {
              let a = 18;
              if (e?.documentElement && (a = g(e?.documentElement, "--root-font-size")), u?.current) {
                const e = a * g(u?.current, "--eventDeck-modalGutters"),
                  n = t?.innerWidth;
                L(n - 2 * e), M.current && c && 0 === D && Z(M.current.clientWidth);
                const s = g(u?.current, "--eventDeck-itemImageTitleMargins") * a,
                  i = k?.current?.clientHeight;
                B(i + s), O(i + s)
              }
              let n = Math.min(700, t.innerWidth);
              c || (n = 900), _(`${n}`)
            }), 300);
            return window.addEventListener("resize", (() => {
              e(document, window)
            })), e(document, window), () => {
              window.removeEventListener("resize", (() => {
                e(document, window)
              }))
            }
          }), [u, c]), (0, d.useEffect)((() => {
            if (!0 === i && !0 === c && M.current) {
              const e = z / D;
              M.current.style.transform = `scale(${e}) translate3d(0, 0, 0)`
            }!1 === i && !0 === c && M.current && (M.current.style.transform = "scale(1) translate3d(0, 0, 0)"), !c && M.current && (M.current.style.transform = null)
          }), [i, c]);
          const ee = e => {
              if (!0 === I) return;
              const t = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              R(t)
            },
            te = e => {
              if (!0 === I || 0 === V) return;
              const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                a = t > V ? 1 : -1;
              Math.abs(V - t) > 50 && (a > 0 ? (h(), W(!0)) : (y(), W(!0)), R(0))
            },
            ae = () => {
              !0 !== I && W(!0)
            };
          return (0, d.useEffect)((() => {
            I && setTimeout((() => {
              W(!1), R(0)
            }), 200)
          }), [I, 200]), X ? (0, T.jsxs)("div", {
            className: "fde59cc0b211a74fd79f",
            ref: l,
            "data-item-position": s,
            "data-modal-mode": i,
            "data-active-item": t,
            "data-up-next": o,
            "data-transition": b,
            style: a,
            onClick: e => {
              i || r(e)
            },
            onMouseEnter: () => {
              i || P(!0)
            },
            onMouseLeave: () => {
              i || P(!1)
            },
            onTouchStart: ee,
            onTouchMove: te,
            onTouchEnd: ae,
            onMouseDown: ee,
            onMouseMove: te,
            onMouseUp: ae,
            tabIndex: -1,
            role: "presentation",
            children: [(0, T.jsxs)("div", {
              className: "fa238bf7612b7724abaa",
              "data-full-header": E,
              ref: S,
              style: {
                height: !0 === i && !0 === c ? `${z}px` : null
              },
              children: [J && (0, T.jsx)("img", {
                ref: M,
                src: `${K?.src?.mobile}?im=Resize,width=${F}`,
                alt: K?.alt,
                style: {
                  width: 0 !== D && c ? `${D}px` : null,
                  height: 0 !== D && c ? `${D}px` : null
                }
              }), (0, T.jsxs)("div", {
                className: "d21f276146dec1dcf842",
                style: {
                  transform: c ? null : `translateY(${$}px)`
                },
                children: [q && (0, T.jsx)("div", {
                  className: "d9c130714618614ef63c",
                  ref: N,
                  children: (0, T.jsx)(f.Badge, {
                    text: q
                  })
                }), (0, T.jsx)("span", {
                  className: "e056f0aa82c811cbadda",
                  ref: k,
                  "aria-hidden": i,
                  children: Q
                })]
              })]
            }), (0, T.jsxs)("div", {
              className: "f4efaa263cba6ec12f58",
              ref: C,
              style: {
                top: !0 === i && !0 === c ? `${z}px` : null
              },
              children: [Q && (0, T.jsx)("span", {
                className: "d784a6def5f96306e977",
                children: Q
              }), (0, T.jsx)("div", {
                className: "b98f5b22300490f3feb8",
                children: (0, T.jsx)(x.TinaParser, {
                  components: p,
                  tina: {
                    meta: Y,
                    payload: {
                      content: X?.content
                    }
                  }
                })
              })]
            })]
          }) : null
        })),
        C = "cb22b2530b90ee356a13",
        E = e => {
          let {
            prevPage: t,
            prevBtnDisabled: a,
            nextPage: n,
            nextBtnDisabled: s,
            selectedItemNumber: i,
            itemsData: r,
            closeModalMode: l
          } = e;
          return (0, T.jsxs)(T.Fragment, {
            children: [(0, T.jsxs)("div", {
              className: "faa5acf4b727e1382599",
              children: [(0, T.jsx)("button", {
                className: C,
                type: "button",
                onClick: t,
                disabled: a,
                "aria-label": "Previous"
              }), (0, T.jsxs)("span", {
                className: "dacf520118176355e3f9",
                children: [i + 1, (0, T.jsx)("span", {
                  className: "f75c0ab96a4285c2dea2"
                }), r.length]
              }), (0, T.jsx)("button", {
                className: C,
                type: "button",
                onClick: n,
                disabled: s,
                "aria-label": "Next"
              })]
            }), (0, T.jsx)("button", {
              className: "fd85da563bb161a9949a",
              type: "button",
              onClick: l,
              "aria-label": "Close"
            })]
          })
        },
        P = e => {
          let {
            title: t = "New This Week"
          } = e;
          const [a] = (0, p.useSearchParams)(), n = a.get("totalCards"), s = a.get("steps"), i = (() => {
            const {
              data: e
            } = (0, N.useQuery)(k.TinaModulesList, {
              variables: {
                type: "gtao-event-card",
                locale: "en_us"
              }
            }), t = e?.tinaModulesList?.results, a = b().map(t, "id");
            return (0, f.useTinaModuleFetchByIds)({
              ids: a
            })
          })(), [r, l] = (0, d.useState)([]), [o, c] = (0, d.useState)(null), [u, v] = (0, d.useState)(0), [g, S] = (0, d.useState)(window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth), [w, j] = (0, d.useState)(!1), C = (0, d.createRef)(), [P, $] = (0, d.useState)(null), O = (0, d.createRef)(), z = (0, d.createRef)(), [L, D] = (0, d.useState)([]), [Z, I] = (0, d.useState)(!0), [W, V] = (0, d.useState)(!1), [R, H] = (0, d.useState)([]), [B, F] = (0, d.useState)(404), [_, G] = (0, d.useState)(672), [A, U] = (0, d.useState)(336), [Y, X] = (0, d.useState)(0), [q, Q] = (0, d.useState)(0), [K, J] = (0, d.useState)(0), [ee, te] = (0, d.useState)(0), [ae, ne] = (0, d.useState)(0), [se, ie] = (0, d.useState)(!1), [re, le] = (0, d.useState)(window.innerWidth), [oe, ce] = (0, d.useState)(0), [de, ue] = (0, d.useState)(0), [me, pe] = (0, d.useState)(0), [fe, ve] = (0, d.useState)(0), [he, xe] = (0, d.useState)(0), [ye, ge] = (0, d.useState)(0), [be, Ne] = (0, d.useState)(-1e3), [ke, Se] = (0, d.useState)(0), [we, Te] = (0, d.useState)(50), [je, Me] = (0, d.useState)(0), [Ce, Ee] = (0, d.useState)(!1), [Pe, $e] = (0, d.useState)(768), [Oe, ze] = (0, d.useState)(!1), [Le, De] = (0, d.useState)(!1), [Ze, Ie] = (0, d.useState)(!1), [We, Ve] = (0, d.useState)(!1), [Re, He] = (0, d.useState)(!1), [Be, Fe] = (0, d.useState)(1e3), [_e, Ge] = (0, d.useState)(1.2), [Ae, Ue] = (0, d.useState)(0), [Ye, Xe] = (0, d.useState)(!1), [qe, Qe] = (0, d.useState)(!1), [Ke, Je] = (0, d.useState)(!1), [et, tt] = (0, d.useState)(!1), [at, nt] = (0, d.useState)(null), st = (e, t) => {
            let a = getComputedStyle(e).getPropertyValue(t);
            return a = a.replace("px", "").replace("rem", "").replace("em", ""), a = a.replace("vh", "").replace("vw", "").replace("vmin", "").replace("vmax", ""), a = a.replace("ms", "").replace("s", ""), Number(a)
          }, it = () => re * oe + we, rt = () => !1 === Ce ? _e : 1, lt = e => e === fe - 1 || e === fe + 1, ot = () => -1 * me;
          (0, d.useEffect)((() => {
            se && (() => {
              const e = P?.getBoundingClientRect().top,
                t = -1 * (e - u);
              if (D(L.map((e => {
                  if (e.styles.transform) {
                    const a = e.styles.transform.split(","),
                      n = `${a[0]}, ${t}px,${a[2]}`;
                    e.styles = {
                      ...e.styles,
                      transform: n
                    }
                  }
                  return e
                }))), O.current) {
                const t = -1 * (e - u);
                O.current.style.transform = `translateY(${t}px)`
              }
            })()
          }), [Ce, se, Ae]);
          const ct = function(e) {
              let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (!0 === Ce) return 0;
              const a = e.itemNumber % 2 == 0,
                n = B * _e;
              if (!0 === a && 0 !== e.itemNumber) {
                const a = st(e?.element?.current, "top");
                let s = a - K;
                return !1 === t && (s -= a), -1 * (.5 * n + s) + Ae
              }
              return K - .5 * n + Ae
            },
            dt = function(e, t) {
              let a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                n = ot();
              !1 === a && (n = 0);
              const s = re * oe,
                i = !1 === Ce ? B * rt() : s;
              return e.inModalMode && Ce ? -1 === t ? it() * (fe - e.itemNumber) * -1 - e.styles.left : it() * (e.itemNumber - fe) - e.styles.left : -1 === t ? -1 * e.styles.left - i - we + n : s - e.styles.left + we + n
            },
            ut = (e, t, a) => {
              V(!1 === a && e >= t || !0 === a && e + 1 === t), I(e <= 0)
            },
            mt = () => {
              if (et || Ke) return;
              if (tt(!0), se) return void(fe + 1 >= r.length || (ut(fe + 1, r.length, !0), Ce ? Ce && D(L.map((e => {
                e.itemNumber === fe - 1 ? e.upNext = !1 : e.itemNumber === fe + 2 ? e.upNext = !0 : e.itemNumber === fe + 1 ? e.active = !0 : e.itemNumber === fe && (e.upNext = !0, e.active = !1);
                const t = e.styles.transform.replace("translate3d(", "").split(",");
                let a = Number(t[0].replace("px", ""));
                a -= it();
                const n = `translate3d(${a}px,${t[1]},${t[2]}`;
                return e.styles = {
                  ...e.styles,
                  transform: n
                }, e
              }))) : D(L.map((e => (e.itemNumber === fe - 1 ? e.upNext = !1 : e.itemNumber === fe + 2 ? e.upNext = !0 : e.itemNumber === fe + 1 ? (e.active = !0, e.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${ot()}px, ${Ae}px, 0) scale(1)`
              }) : e.itemNumber === fe && (e.upNext = !0, e.active = !1, e.styles = {
                ...e.styles,
                transform: `translate3d(${dt(e,-1)}px, ${ct(e)}px, 0) scale(${rt()})`
              }), e)))), ve(fe + 1)));
              const e = de + 1;
              if (!(e > ae))
                if (ut(e, ae, !1), Ce) {
                  let t = e * A * -1;
                  t < be && (t = be, V(!0), I(!1), ue(ae)), ue(e), D(L.map((e => (e.styles = {
                    ...e.styles,
                    transform: `translate3d(${t}px, 0, 0)`
                  }, e))))
                } else {
                  let t = me - q;
                  Ce && (t = me - A), ue(e), t < be && (t = be, V(!0), I(!1), ue(ae)), pe(t)
                }
            },
            pt = () => {
              if (et || Ke) return;
              if (tt(!0), !0 === se) return void(et || (tt(!0), fe - 1 < 0 || (ut(fe - 1, r.length, !0), Ce || D(L.map((e => (e.itemNumber === fe + 1 ? e.upNext = !1 : e.itemNumber === fe - 2 ? e.upNext = !0 : e.itemNumber === fe ? (e.upNext = !0, e.active = !1, e.styles = {
                ...e.styles,
                transform: `translate3d(${dt(e,1)}px, ${ct(e)}px, 0) scale(${rt()})`
              }) : e.itemNumber === fe - 1 && (e.active = !0, e.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${ot()}px, ${Ae}px, 0) scale(1)`
              }), e)))), Ce && D(L.map((e => {
                e.itemNumber === fe + 1 ? e.upNext = !1 : e.itemNumber === fe - 2 ? e.upNext = !0 : e.itemNumber === fe ? (e.upNext = !0, e.active = !1) : e.itemNumber === fe - 1 && (e.active = !0);
                const t = e.styles.transform.replace("translate3d(", "").split(",");
                let a = Number(t[0].replace("px", ""));
                a += it();
                const n = `translate3d(${a}px,${t[1]},${t[2]}`;
                return e.styles = {
                  ...e.styles,
                  transform: n
                }, e
              }))), ve(fe - 1))));
              const e = de - 1;
              if (!(e < 0))
                if (ut(e, ae, !1), Ce) {
                  let t = e * A * -1;
                  t > 0 && (t = 0, I(!0), ue(0)), ue(e), D(L.map((e => (e.styles = {
                    ...e.styles,
                    transform: `translate3d(${t}px, 0, 0)`
                  }, e))))
                } else {
                  let t = me + q;
                  Ce && (t = me + A), ue(e), t > 0 && (t = 0, I(!0), V(!1), ue(0)), pe(t)
                }
            },
            ft = function(e, t) {
              let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
              return e.map(((e, n) => {
                let s = n * A,
                  i = n;
                !1 === Ce && (i = Math.ceil(.5 * n) + 1, n > 0 && (s = 2 === i ? _ : _ + A * (i - 2)));
                const r = R[n];
                return r?.current && (r.current.scrollTop = 0), {
                  ...e,
                  mobileMode: Ce,
                  itemNumber: n,
                  columnNumber: i,
                  inModalMode: !1,
                  upNext: !0,
                  active: !1,
                  openModalMode: ht,
                  element: r,
                  transitionStyle: t,
                  styles: {
                    left: s,
                    transform: "" === a ? null : a,
                    height: null,
                    top: null
                  }
                }
              }))
            },
            vt = () => {
              if (Ce) {
                let e = fe * A * -1;
                e < be && (e = be, V(!0), I(!1), ue(ae)), ue(fe), ut(fe, ae, !1), D(ft(r, "cardClose", `translate3d(${e}px, 0, 0)`))
              } else {
                D(ft(r, "cardClose"));
                const e = Math.ceil((L[fe].columnNumber + 1) / Y) - 1;
                ue(e);
                let t = e * q * -1;
                t < be ? (t = be, I(!1), V(!0), ue(ae)) : ut(e, ae, !1), pe(t), ve(0)
              }
              O.current.style.transform = "translateY(0px)", Xe(!1), Ve(!1), ie(!1), De(!1), ze(!1), He(!1), P.style.zIndex = null, setTimeout((() => {
                Ie(!0)
              }), 600)
            };
          (0, d.useEffect)((() => {
            !1 !== Ze && (Ie(!1), Xe(!1), D(L.map((e => (e.transitionStyle = "easeInOut", e)))))
          }), [Ze]);
          const ht = e => {
            ve(Number(e.target.dataset.itemPosition)), De(!0), Je(!0)
          };
          (0, d.useEffect)((() => {
            if (!1 === Le || !0 === se) return;
            De(!1);
            const e = (() => {
              const e = P?.getBoundingClientRect().top;
              return Ue(-1 * (e - u)), -1 * (e - 140)
            })();
            Ce && "2" === s ? D(L.map((t => {
              const a = t.itemNumber > fe + 3 || t.itemNumber < fe - 3;
              let n = 0;
              if (t.styles.transform) {
                const e = t.styles.transform.replace("translate3d(", "").split(",");
                n = Number(e[0].replace("px", ""))
              }
              return t.styles = {
                ...t.styles,
                transform: `translate3d(${n}px, ${e}px, 0) scale(1)`,
                display: a ? "none" : null,
                transition: a ? "none" : null
              }, t
            }))) : Ce && D(L.map((e => {
              const t = e.itemNumber > fe + 3 || e.itemNumber < fe - 3;
              return e.styles = {
                ...e.styles,
                display: t ? "none" : null,
                transition: t ? "none" : null
              }, e
            }))), P.style.zIndex = "101", Xe(!0), O.current && (O.current.style.transition = "all 0.5s ease-in-out", O.current.style.transform = `translateY(${e}px)`), Ve(!0), setTimeout((() => {
              ze(!0)
            }), Ce && "2" === s ? 500 : 1)
          }), [Le]);
          const xt = () => {
            D(L.map(((e, t) => {
              e.active = t === fe, e.inModalMode = !0, e.transitionStyle = "cardOpen", !0 === Ce && (e.upNext = lt(e.itemNumber));
              const a = !Ce;
              return e.itemNumber < fe ? e.styles = {
                ...e.styles,
                transform: `translate3d(${dt(e,-1,a)}px, ${Ae}px, 0) scale(${rt()})`
              } : e.itemNumber > fe ? e.styles = {
                ...e.styles,
                transform: `translate3d(${dt(e,1,a)}px, ${Ae}px, 0) scale(1)`
              } : e.itemNumber === fe && (e.styles = Ce ? {
                ...e.styles,
                transform: `translate3d(${-1*e.styles.left}px, ${Ae}px, 0) scale(1)`
              } : {
                left: 0,
                top: 0,
                transform: `translate3d(${ot()}px, ${Ae}px, 0) scale(1)`
              }), e
            })))
          };
          (0, d.useEffect)((() => {
            !1 !== Oe && !0 !== se && (ie(!0), ze(!1), ut(fe, L.length, !0), O.current && (O.current.style.transition = "all 0.5s cubic-bezier(0.5, 0, 0.3, 1)", O.current.style.transform = `translateY(${Ae}px)`), xt(), !1 === Ce ? He(!0) : (pe(0), Je(!1), Qe(!0)))
          }), [Oe]), (0, d.useEffect)((() => {
            qe && (Qe(!1), D(L.map((e => ("none" === e.styles.display && (e.styles.display = null, e.styles.transition = null), e)))))
          }), [qe]);
          const yt = () => {
            D(L.map((e => {
              if (e.upNext = lt(e.itemNumber), e.transitionStyle = "easeInOut", e.itemNumber !== fe) {
                let t = dt(e, 1);
                e.itemNumber < fe && (t = dt(e, -1)), e.styles = {
                  ...e.styles,
                  transform: `translate3d(${t}px, ${ct(e)}px, 0) scale(${rt()})`
                }
              }
              return e
            })))
          };
          (0, d.useEffect)((() => {
            !1 !== Re && !0 !== Ce && (He(!1), setTimeout((() => {
              yt(), Je(!1)
            }), Be))
          }), [Re]), (0, d.useEffect)((() => {
            D(ft(r, "easeInOut"))
          }), [_, A, r]), (0, d.useEffect)((() => {
            !0 === se ? (document.body.style.overflowY = "hidden", document.body.style.height = "100%") : (document.body.style.overflowY = "auto", document.body.style.height = "auto")
          }), [se]), (0, d.useEffect)((() => {
            if (!et) return;
            clearTimeout(at);
            const e = setTimeout((() => {
              tt(!1)
            }), 600);
            nt(e)
          }), [et]), (0, d.useEffect)((() => {
            w && setTimeout((() => {
              j(!1)
            }), 3e3)
          }), [w]), (0, d.useEffect)((() => {
            j(!0), pe(0), ue(0);
            let e = Math.ceil(Math.ceil(je / A) / Y);
            Ce && (e = L.length - 1), ut(0, e, !1), se && vt()
          }), [Ce]), (0, d.useEffect)((() => {
            let e = i ?? [];
            n && e.length > n && (e = e.slice(0, n)), l(e)
          }), [i]), (0, d.useEffect)((() => {
            H(r.map((() => (0, d.createRef)())))
          }), [r]), (0, d.useEffect)((() => {
            const e = e => {
              const {
                key: t
              } = e;
              "ArrowLeft" === t ? pt() : "ArrowRight" === t && mt()
            };
            return document.addEventListener("keydown", e), () => {
              document.removeEventListener("keydown", e)
            }
          }), [et, Ke, se]), (0, d.useEffect)((() => {
            if (O.current) {
              let e = 0;
              e = O?.current?.clientHeight, e += st(O?.current, "margin-top"), e += st(O?.current, "margin-bottom"), xe(e)
            }
          }), [O, z]), (0, d.useEffect)((() => {
            if (C.current) {
              $(C.current);
              const e = st(document.documentElement, "--root-font-size"),
                t = st(C.current, "--eventDeck-modalGutters") * e;
              ge(t);
              const a = re - 2 * t;
              ce(a / re), Ne(-1 * je + a);
              let n = st(C.current, "--eventDeck-modalBottomGutter");
              n *= e;
              const s = window.innerHeight - (he + n);
              J(.5 * a < s ? a / 4 : .5 * s);
              const i = st(C.current, "--eventDeck-mobileBreakpoint");
              $e(i);
              let l = st(C.current, "--eventDeck-itemSize");
              l *= e, F(l);
              let d = st(C.current, "--eventDeck-modalGutterGap");
              d *= e, Te(d);
              let u = st(C.current, "--eventDeck-insideMargin");
              u *= e;
              const m = !1 === Ce ? 2 * l + u : l + u;
              G(m + u);
              const p = l + u;
              U(p);
              let f = .5 * r.length * p + m;
              Ce && (f = r.length * p), Me(f);
              let h = Math.ceil(Math.ceil(f / p) / Y);
              (Ce || se) && (h = L.length - 1), ne(h);
              const x = st(C.current, "--eventDeck-itemScaleUpAmount");
              Ge(x), Fe(st(C.current, "--eventDeck-phaseOneTransitionDuration")), v(st(C.current, "--eventDeck-itemImageTitleMargins") * e), null !== o && e !== o && (c(e), se && yt()), null === o && c(e)
            }
          }), [C, r]), (0, d.useEffect)((() => {
            const e = m()(((e, t) => {
              le(e), Ee(e < Pe);
              const a = (1 - oe) / 2;
              Se(e * a);
              const n = e - 2 * ye,
                s = Math.round(n / A);
              X(s), Q(s * A), te(e - e * a);
              const i = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth;
              if (i !== g && (S(i), t && !Ce && yt()), t && i === g && !w) {
                const e = P?.getBoundingClientRect().top,
                  t = -1 * (e - u);
                t !== Ae && Ue(t)
              }
            }), 300);
            return window.addEventListener("resize", (() => {
              e(window.innerWidth, se)
            })), e(window.innerWidth, se), () => {
              window.removeEventListener("resize", (() => {
                e(window.innerWidth, se)
              }))
            }
          }), [A, oe, se]), (0, d.useEffect)((() => {
            !1 !== se && !0 !== w && (Ce ? xt() : yt())
          }), [ee, q, we, B, re, ke, K]);
          const gt = (0, x.useTinaComponents)(),
            bt = (0, d.useMemo)((() => ({
              ...gt,
              CardWithImageGallery: y.Z,
              HTMLElement: f.HTMLElement,
              ImageWithBadge: f.ImageWithBadge,
              Carousel: f.Carousel,
              GroupOfItems: h(),
              UnorderedList: f.UnorderedList
            })), [gt]),
            Nt = (0, d.useMemo)((() => L.map((e => (0, d.createElement)(M, {
              ...e,
              refDeck: C,
              key: e?.id ?? e?.sync_hash,
              components: bt,
              prevPage: pt,
              nextPage: mt,
              loadCssRawValue: st
            })))), [L, C, bt, pt, mt, st]);
          return !Nt?.length || Nt.length <= 0 ? null : (0, T.jsxs)(T.Fragment, {
            children: [(0, T.jsx)("div", {
              className: "c1b08e0c6762959d6e40",
              "data-modal-mode": We,
              "aria-hidden": "true"
            }), (0, T.jsxs)("div", {
              className: "dd9c11d21c9d76e0f525",
              "data-modal-mode": se,
              ref: C,
              children: [(0, T.jsxs)("div", {
                className: "fe4a9770ab07662ba456",
                "data-modal-mode": se,
                ref: O,
                "data-animating": Ye,
                children: [(0, T.jsx)("h2", {
                  className: "bdad5a5a38f931159788",
                  children: t
                }), (0, T.jsx)(E, {
                  prevPage: pt,
                  prevBtnDisabled: Z,
                  nextPage: mt,
                  nextBtnDisabled: W,
                  selectedItemNumber: fe,
                  itemsData: r,
                  closeModalMode: vt
                })]
              }), (0, T.jsx)("div", {
                className: "fe13159c37ea559619ab",
                "data-modal-mode": se,
                style: {
                  transform: `translate3d(${me}px, 0, 0)`,
                  width: `${je}px`
                },
                ref: z,
                children: Nt
              })]
            })]
          })
        };
      var $ = a(4585)
    },
    9373: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => p
      });
      var n = a(822),
        s = a(9542),
        i = a(8976),
        r = a(8819),
        l = a(547),
        o = a(507),
        c = a(4950);
      const d = {
        customModalContent: "eaaa89d602e502f9ab5a"
      };
      var u = a(3322);
      const {
        variants: m
      } = i.framer.Animations, p = e => {
        let {
          id: t,
          title: a,
          content: i,
          size: p = "md",
          expandedType: f = "short",
          textOverlayProps: v = {
            hasTextOverlay: !1,
            tag: "",
            collapsedHasTag: !1,
            expandedHasTag: !1,
            description: "",
            collapsedHasDescription: !1
          },
          images: h = [],
          deckProps: x = {},
          to: y = null,
          tina: g = {}
        } = e;
        const b = (0, s.useTinaPayload)(),
          N = g?.payload?.meta?.cdn ?? b?.meta?.prod ?? !1,
          [k, S] = (0, n.useState)(x?.size ?? p);
        return (0, n.useEffect)((() => {
          S(x?.size ?? p)
        }), [x?.size, p]), (0, u.jsx)(r.Z, {
          id: t,
          title: a,
          size: k,
          expandedType: f,
          images: h,
          deckProps: x,
          prod: N,
          payload: {
            content: i,
            meta: {}
          },
          variants: m.plainCard,
          textOverlayProps: v,
          modalProps: {
            className: d.customModal,
            contentClassName: d.customModalContent
          },
          expandedCardContents: (0, u.jsx)(o.Z, {
            images: h,
            prod: N,
            expandedView: !0
          }),
          children: (0, u.jsx)(c.Z, {
            expandedType: f,
            to: y,
            children: (0, u.jsx)("div", {
              className: d.content,
              children: (0, u.jsx)(l.Z, {
                title: a,
                size: k,
                textOverlayProps: v,
                children: (0, u.jsx)(o.Z, {
                  images: h,
                  prod: N
                })
              })
            })
          })
        })
      }
    },
    1204: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => p
      });
      var n = a(822),
        s = a(9542),
        i = a(8976),
        r = a(8819),
        l = a(547),
        o = a(7366);
      const c = {
        customModalContent: "e9e7ee7cbb3a089710cc"
      };
      var d = a(3322);
      const {
        transitions: u,
        variants: m
      } = i.framer.Animations, p = e => {
        let {
          id: t,
          title: a,
          content: i,
          size: p = "md",
          expandedType: f = "gallery",
          textOverlayProps: v = {
            hasTextOverlay: !1,
            tag: "",
            collapsedHasTag: !1,
            expandedHasTag: !1,
            description: "",
            collapsedHasDescription: !1
          },
          images: h = [],
          deckProps: x = {},
          tina: y = {}
        } = e;
        const [g, b] = (0, n.useState)(null), N = (0, s.useTinaPayload)();
        let k;
        k = y?.payload?.meta?.cdn ?? N?.meta?.prod ?? !1;
        const [S, w] = (0, n.useState)(x?.size ?? p), {
          parent: T,
          main: j,
          thumbs: M
        } = m?.cardWithImageGallery?.gallery ?? {};
        return (0, n.useEffect)((() => {
          const e = h?.map((e => e?.image ? {
            ...e,
            image: {
              ...e.image,
              prod: k
            }
          } : e));
          b(e)
        }), [h]), (0, n.useEffect)((() => {
          w(x?.size ?? p)
        }), [x?.size, p]), (0, d.jsx)(r.Z, {
          id: t,
          payload: {
            content: i,
            meta: {}
          },
          title: a,
          size: S,
          expandedType: f,
          images: g,
          deckProps: x,
          prod: k,
          variants: m.cardWithImageGallery,
          textOverlayProps: v,
          modalProps: {
            className: c.customModal,
            contentClassName: c.customModalContent
          },
          expandedCardContents: (0, d.jsx)(o.Z, {
            images: g,
            title: a,
            navigation: !0,
            thumbsVisible: !0,
            variants: {
              parent: T,
              main: j,
              thumbs: M
            },
            transition: {
              parent: u.cardOpen,
              main: u.cardOpen,
              thumbs: u.cardOpen
            }
          }),
          children: (0, d.jsx)("div", {
            className: c.content,
            children: (0, d.jsx)(l.Z, {
              title: a,
              size: S,
              textOverlayProps: v,
              children: (0, d.jsx)(o.Z, {
                images: g,
                title: a,
                navigation: !1,
                thumbsVisible: !1
              })
            })
          })
        })
      }
    },
    4351: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => r
      });
      var n = a(8976),
        s = a(9542);
      var i = a(3322);
      const r = e => {
        let {
          title: t,
          content: a,
          size: r = "md",
          badgeText: l
        } = e;
        const o = {
          ...(0, s.useTinaComponents)(),
          HTMLElement: n.HTMLElement,
          UnorderedList: n.UnorderedList,
          ListItem: n.ListItem
        };
        return (0, i.jsx)("div", {
          className: "e881a80105cd524eb2bf",
          "data-size": r,
          children: (0, i.jsxs)("div", {
            className: "b950e84d17e2720a8c4a",
            children: [l && (0, i.jsx)("div", {
              className: "d4d1e516f8a980e2ce3a",
              children: l
            }), (0, i.jsxs)("div", {
              className: "afc8dfd2b7b7731fdc0d",
              children: [t && (0, i.jsx)("h3", {
                children: t
              }), (0, i.jsx)(s.TinaParser, {
                components: o,
                tina: {
                  payload: {
                    content: a
                  }
                }
              })]
            })]
          })
        })
      }
    },
    4585: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        Card: () => n.Z,
        CardWithImageGallery: () => s.Z,
        Deck: () => r.Z,
        TextCard: () => i.Z
      });
      var n = a(9373),
        s = a(1204),
        i = a(4351),
        r = a(7454)
    },
    8231: (e, t, a) => {
      var n = a(1715).Symbol;
      e.exports = n
    },
    8970: (e, t, a) => {
      var n = a(8231),
        s = a(9762),
        i = a(4511),
        r = n ? n.toStringTag : void 0;
      e.exports = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : r && r in Object(e) ? s(e) : i(e)
      }
    },
    9284: (e, t, a) => {
      var n = a(8217),
        s = /^\s+/;
      e.exports = function(e) {
        return e ? e.slice(0, n(e) + 1).replace(s, "") : e
      }
    },
    8477: (e, t, a) => {
      var n = "object" == typeof a.g && a.g && a.g.Object === Object && a.g;
      e.exports = n
    },
    9762: (e, t, a) => {
      var n = a(8231),
        s = Object.prototype,
        i = s.hasOwnProperty,
        r = s.toString,
        l = n ? n.toStringTag : void 0;
      e.exports = function(e) {
        var t = i.call(e, l),
          a = e[l];
        try {
          e[l] = void 0;
          var n = !0
        } catch (e) {}
        var s = r.call(e);
        return n && (t ? e[l] = a : delete e[l]), s
      }
    },
    4511: e => {
      var t = Object.prototype.toString;
      e.exports = function(e) {
        return t.call(e)
      }
    },
    1715: (e, t, a) => {
      var n = a(8477),
        s = "object" == typeof self && self && self.Object === Object && self,
        i = n || s || Function("return this")();
      e.exports = i
    },
    8217: e => {
      var t = /\s/;
      e.exports = function(e) {
        for (var a = e.length; a-- && t.test(e.charAt(a)););
        return a
      }
    },
    8673: (e, t, a) => {
      var n = a(4078),
        s = a(1923),
        i = a(9789),
        r = Math.max,
        l = Math.min;
      e.exports = function(e, t, a) {
        var o, c, d, u, m, p, f = 0,
          v = !1,
          h = !1,
          x = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function y(t) {
          var a = o,
            n = c;
          return o = c = void 0, f = t, u = e.apply(n, a)
        }

        function g(e) {
          var a = e - p;
          return void 0 === p || a >= t || a < 0 || h && e - f >= d
        }

        function b() {
          var e = s();
          if (g(e)) return N(e);
          m = setTimeout(b, function(e) {
            var a = t - (e - p);
            return h ? l(a, d - (e - f)) : a
          }(e))
        }

        function N(e) {
          return m = void 0, x && o ? y(e) : (o = c = void 0, u)
        }

        function k() {
          var e = s(),
            a = g(e);
          if (o = arguments, c = this, p = e, a) {
            if (void 0 === m) return function(e) {
              return f = e, m = setTimeout(b, t), v ? y(e) : u
            }(p);
            if (h) return clearTimeout(m), m = setTimeout(b, t), y(p)
          }
          return void 0 === m && (m = setTimeout(b, t)), u
        }
        return t = i(t) || 0, n(a) && (v = !!a.leading, d = (h = "maxWait" in a) ? r(i(a.maxWait) || 0, t) : d, x = "trailing" in a ? !!a.trailing : x), k.cancel = function() {
          void 0 !== m && clearTimeout(m), f = 0, o = p = c = m = void 0
        }, k.flush = function() {
          return void 0 === m ? u : N(s())
        }, k
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
    151: (e, t, a) => {
      var n = a(8970),
        s = a(9842);
      e.exports = function(e) {
        return "symbol" == typeof e || s(e) && "[object Symbol]" == n(e)
      }
    },
    1923: (e, t, a) => {
      var n = a(1715);
      e.exports = function() {
        return n.Date.now()
      }
    },
    9789: (e, t, a) => {
      var n = a(9284),
        s = a(4078),
        i = a(151),
        r = /^[-+]0x[0-9a-f]+$/i,
        l = /^0b[01]+$/i,
        o = /^0o[0-7]+$/i,
        c = parseInt;
      e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (i(e)) return NaN;
        if (s(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = s(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = n(e);
        var a = l.test(e);
        return a || o.test(e) ? c(e.slice(2), a ? 2 : 8) : r.test(e) ? NaN : +e
      }
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
          end: 350
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
        body: "query TinaModulesList($type: String, $locale: String!) {\n    tinaModulesList(type: $type, locale: $locale) {\n        results {\n            id: id_hash\n            name\n            type\n            tina {\n                id\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n    }\n}\n",
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