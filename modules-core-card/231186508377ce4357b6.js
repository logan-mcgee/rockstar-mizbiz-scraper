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
        d = a(9373),
        o = a(1204),
        c = a(4351),
        u = a(3322);
      const m = {
          Card: d.Z,
          CardWithImageGallery: o.Z,
          TextCard: c.Z
        },
        p = r.framer.withFadeIn((0, r.withSimpleErrorBoundary)((e => {
          let {
            cards: t = [],
            size: a,
            title: s,
            description: d,
            customSlidesPerView: o = null
          } = e;
          const c = (0, n.useRef)(null),
            p = i().map(t, "id"),
            f = (0, r.useTinaModuleFetchByIds)({
              ids: p
            }),
            [v, h] = (0, n.useState)(o);
          (0, n.useEffect)((() => {
            if (!c.current) return;
            const e = () => {
              const e = o || window.getComputedStyle(c.current).getPropertyValue("--slides-per-view");
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
            ref: c,
            children: (0, u.jsx)(r.Gen9CoreCarousel, {
              description: d,
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
        Z: () => p
      });
      var n = a(7311),
        s = a.n(n),
        i = a(9542),
        r = a(8976),
        l = a(9172),
        d = a(547);
      var o = a(3322);
      const {
        LiteMotion: c,
        Animations: u
      } = r.framer, {
        transitions: m
      } = u, p = e => {
        let {
          components: t,
          payload: a,
          prod: n,
          size: r,
          title: u,
          initial: p = "initial",
          animate: f = "animate",
          variants: v,
          type: h = null,
          context: x = null,
          textOverlayProps: g,
          className: y,
          children: b
        } = e;
        const {
          tag: N,
          expandedHasTag: k,
          badges: S
        } = g;
        return s().set(a, "meta.prod", n), (0, o.jsxs)(c, {
          initial: p,
          animate: f,
          variants: v.expanded,
          transition: m.cardOpen,
          className: (0, i.classList)("b26588866b3f8cf68385", y),
          "data-type": h,
          "data-size": r,
          "data-context": x,
          children: [(0, o.jsx)(d.Z, {
            size: r,
            title: u,
            textOverlayProps: g,
            expandedView: !0,
            children: b
          }), (0, o.jsxs)(c, {
            className: "c86efe7469f4c7bea32c",
            variants: v.expandedContents,
            transition: m.afterCardOpen,
            children: [(0, o.jsxs)("div", {
              className: "d606f8b2c00b2c32599e",
              children: [(0, o.jsx)(l.Z, {
                hasTag: k,
                tag: N,
                badges: S
              }), (0, o.jsx)("h1", {
                children: u
              })]
            }), (0, o.jsx)(i.TinaParser, {
              components: t,
              tina: {
                payload: a
              }
            })]
          })]
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
          children: d
        } = e;
        const [o] = (e => {
          let {
            hasTextOverlay: t,
            tag: a,
            collapsedHasTag: r,
            description: l,
            collapsedHasDescription: d,
            size: o,
            title: c,
            expandedView: u,
            badges: m
          } = e;
          const [p, f] = (0, n.useState)(null), v = (0, n.useMemo)((() => {
            if (!t) return null;
            const e = "sm" !== o && d;
            return (0, i.jsx)(s.Z, {
              title: c,
              hasTag: r,
              tag: a,
              hasDescription: e,
              description: l,
              fadesOut: u,
              badges: m
            })
          }), [t, a, r, l, d, o, c, u, m]);
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
          children: [n.Children.map(d, (e => (0, n.cloneElement)(e, {
            title: a,
            size: r,
            expandedView: l
          }))), o]
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
        d = a.n(l),
        o = a(9542),
        c = a(6711),
        u = a(9525);
      var m = a(3322);
      const p = e => {
          let {
            id: t,
            position: a,
            title: r,
            size: l = "md",
            expandedType: d = null,
            modalProps: o = {
              content: null,
              className: "",
              contentClassName: ""
            },
            className: u,
            children: p
          } = e;
          const [f, v] = (0, s.useSearchParams)(), h = (0, n.useRef)(null), [, x] = (0, i.useModal)(), {
            track: g
          } = (0, c.useGtmTrack)(), [y, b] = (0, n.useState)(!0);
          (0, n.useEffect)((() => b(!1)), []);
          const N = (0, n.useCallback)((() => {
            if (!(h.current || d && "linkout" !== d)) return;
            const e = window.getComputedStyle(h.current);
            o?.content && (b(!0), x({
              content: o.content,
              onClose: k,
              rect: h.current.getBoundingClientRect(),
              width: parseInt(e.getPropertyValue("width")),
              height: parseInt(e.getPropertyValue("height")),
              className: o?.className,
              contentClassName: o?.contentClassName
            }), g({
              event: "trackPageview",
              link_url: window.location.href,
              card_id: t,
              card_name: r?.toLowerCase()
            }), setTimeout((() => {
              h.current.style.opacity = 0
            }), 50), setTimeout((() => {
              h.current.style.opacity = 1
            }), 1e3))
          }), [h, d, o, x, v]);
          (0, n.useEffect)((() => {
            f.get("info") !== t || y || N()
          }), [f, t, N, y]);
          const k = () => {
              b(!1), v({}), g({
                event: "modal_close",
                event_category: "modal",
                event_action: "close",
                event_label: r?.toLowerCase(),
                card_id: t,
                card_name: r?.toLowerCase()
              }), g({
                event: "trackPageview"
              })
            },
            S = e => {
              if ("linkout" !== d) return e.preventDefault(), e.stopPropagation(), t ? v({
                info: t
              }) : N(), null
            };
          return (0, m.jsx)("div", {
            ref: h,
            onClick: S,
            onKeyUp: S,
            className: u,
            "data-size": l,
            "data-type": d,
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
            initial: c,
            animate: f,
            variants: v,
            id: h,
            expandedType: x,
            children: g,
            expandedCardContents: y,
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
          const S = (0, o.useTinaComponents)(),
            w = (0, n.useMemo)((() => ({
              ...S,
              HTMLElement: r.HTMLElement,
              ImageWithBadge: r.ImageWithBadge,
              Carousel: r.Carousel,
              GroupOfItems: d()
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
              initial: c,
              animate: f,
              variants: v,
              children: y
            })), [x, s, a, i, l, b, y, c, f, v, w, t]);
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
            children: g
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
      var d = a(3322);
      const {
        LiteMotion: o,
        Animations: c
      } = r.framer, {
        getVariant: u,
        variants: m,
        transitions: p
      } = c, f = e => {
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
        return (0, d.jsx)("img", {
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
          style: c = {}
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
        const x = (0, n.useMemo)((() => t?.length && 0 !== t.length ? t.map((e => (0, d.jsx)(o, {
          className: (0, s.classList)(l[e?.specialClass] ?? l.imageMask, l[e?.sizeClass], e.className),
          variants: u(e?.specialClass ?? "imageMask", r ? "expanded" : "collapsed"),
          initial: "initial",
          animate: "animate",
          transition: p.cardOpen,
          children: (0, d.jsx)(f, {
            image: e,
            prod: i
          })
        }, `${e.className}-${v.width}x${v.height}`))) : null), [t, v, r, i]);
        return (0, d.jsx)(o, {
          className: (0, s.classList)(l.layeredImageFrame, t.length > 1 ? l.layered : l.flat, a),
          style: c,
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
        Animations: d
      } = n.framer, {
        variants: o,
        transitions: c
      } = d, u = e => {
        let {
          title: t,
          hasTag: a,
          tag: n,
          hasDescription: d,
          description: u,
          fadesOut: m = !1,
          badges: p
        } = e;
        return (0, r.jsx)(l, {
          initial: o.fade.out.initial,
          animate: {
            opacity: m ? 0 : 1
          },
          transition: c.fade,
          className: i.textOverlay,
          children: (0, r.jsxs)("div", {
            className: i.content,
            children: [(0, r.jsx)(s.Z, {
              hasTag: a,
              tag: n,
              badges: p?.filter((e => e?.isPrimary))
            }), (0, r.jsx)("h3", {
              children: t
            }), d && u && (0, r.jsx)("div", {
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
          transition: d
        } = e;
        const o = (0, n.useMemo)((() => t && 0 !== t?.length ? t.map((e => e?.image?.sources ? (0, i.jsx)(s.ImageWithBadge, {
          ...e,
          style: {
            "--object-position": e?.objectPosition ?? ""
          }
        }) : null)) : null), [t]);
        return !o?.length || o?.length < 1 ? null : 1 === o.length ? o : (0, i.jsx)(s.ThumbsGallery, {
          slideChildren: o,
          title: a,
          navigation: r,
          thumbsVisible: r,
          spaceBetween: 0,
          variants: l,
          transition: d
        })
      }
    },
    7749: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        Card: () => M.Card,
        CardExpanded: () => n.Z,
        CardHeader: () => s.Z,
        CardWithImageGallery: () => M.CardWithImageGallery,
        CardWrapper: () => i.Z,
        Deck: () => M.Deck,
        EventsDeck: () => j,
        LayeredImageFrame: () => r.Z,
        LinkoutWrapper: () => l.Z,
        TextCard: () => M.TextCard,
        TextOverlay: () => d.Z,
        ThumbsGalleryOrThumb: () => o.Z
      });
      var n = a(9525),
        s = a(547),
        i = a(8819),
        r = a(507),
        l = a(4950),
        d = a(9838),
        o = a(7366),
        c = a(822),
        u = a(8976),
        m = a(420),
        p = a.n(m),
        f = a(9542),
        v = a(1204),
        h = a(7311),
        x = a.n(h),
        g = a(4859),
        y = a(5938);
      var b = a(9929),
        N = a(559);
      var k = a(3322);
      const S = (0, b.withTranslations)((e => {
          let {
            active: t,
            styles: a,
            title: n,
            itemNumber: s,
            inModalMode: i,
            openModalMode: r,
            element: l,
            upNext: d,
            mobileMode: o,
            refDeck: m,
            components: p,
            tina: v,
            prevPage: h,
            nextPage: x,
            loadCssRawValue: g,
            transitionStyle: y
          } = e;
          const b = (0, c.createRef)(),
            S = (0, c.createRef)(),
            w = (0, c.createRef)(),
            T = (0, c.createRef)(),
            [j, M] = (0, c.useState)(!1),
            [C, E] = (0, c.useState)(0),
            [P, z] = (0, c.useState)({}),
            [L, $] = (0, c.useState)(0),
            [Z, D] = (0, c.useState)({}),
            [O, I] = (0, c.useState)(0),
            [V, H] = (0, c.useState)(!1),
            [W, _] = (0, c.useState)(0),
            B = (0, f.useTranslations)({
              payload: v?.payload,
              variables: v?.variables
            }),
            F = B?.meta ?? {},
            G = B?.content?.[0],
            R = (0, c.useMemo)((() => G?.images?.[0]?.image?.badge), [G]),
            A = (0, c.useMemo)((() => n ?? F?.title), [n, F?.title]),
            U = (0, N.useImageParser)({
              alt: G?.images?.[0]?.image?.alt ?? "",
              ariaLabel: G?.images?.[0]?.image?.alt ?? "",
              sources: G?.images?.[0]?.image?.sources ?? [],
              prod: !1
            }),
            Y = U?.src?.mobile ?? !1;
          (0, c.useEffect)((() => {
            if (!0 === j && !1 === o) E(0);
            else if (S.current) {
              const e = g(S?.current, "marginBottom"),
                t = g(S?.current, "marginTop"),
                a = S?.current?.clientHeight;
              E(a + e + t)
            }
          }), [j, S, o, i]), (0, c.useEffect)((() => {
            M(!1)
          }), [t]), (0, c.useEffect)((() => {
            z({
              ...P,
              ...a
            })
          }), [a]), (0, c.useEffect)((() => {
            const e = (e, t) => {
              const a = g(e?.documentElement, "--root-font-size"),
                n = a * g(m?.current, "--eventDeck-modalGutters"),
                s = t?.innerWidth;
              $(s - 2 * n), I(g(m?.current, "--eventDeck-itemSize") * a)
            };
            return window.addEventListener("resize", (() => {
              e(document, window)
            })), e(document, window), () => {
              window.removeEventListener("resize", (() => {
                e(document, window)
              }))
            }
          }), [m, o]), (0, c.useEffect)((() => {
            if (!1 === o) return void D({
              height: null,
              width: null
            });
            const e = !1 === i ? O : L;
            D({
              height: `${e}px`,
              width: `${e}px`
            })
          }), [i, o, O]);
          const X = e => {
              if (!0 === V) return;
              const t = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              _(t)
            },
            q = e => {
              if (!0 === V || 0 === W) return;
              const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                a = t > W ? 1 : -1;
              Math.abs(W - t) > 50 && (a > 0 ? (h(), H(!0)) : (x(), H(!0)), _(0))
            },
            Q = () => {
              !0 !== V && H(!0)
            };
          return (0, c.useEffect)((() => {
            !1 !== V && setTimeout((() => {
              H(!1), _(0)
            }), 200)
          }), [V, 200]), G ? (0, k.jsxs)("div", {
            className: "fde59cc0b211a74fd79f",
            ref: l,
            "data-item-position": s,
            "data-modal-mode": i,
            "data-active-item": t,
            "data-up-next": d,
            "data-transition": y,
            style: {
              ...P,
              ...a,
              height: a?.height || P?.height || null
            },
            onClick: e => {
              i || r(e)
            },
            onMouseEnter: () => {
              i || M(!0)
            },
            onMouseLeave: () => {
              i || M(!1)
            },
            onTouchStart: X,
            onTouchMove: q,
            onTouchEnd: Q,
            onMouseDown: X,
            onMouseMove: q,
            onMouseUp: Q,
            tabIndex: -1,
            role: "presentation",
            children: [(0, k.jsxs)("div", {
              className: "fa238bf7612b7724abaa",
              "data-full-header": j,
              ref: w,
              style: {
                ...Z,
                minWidth: O,
                minHeight: O
              },
              children: [Y && (0, k.jsx)("img", {
                src: U?.src?.mobile ?? U?.src?.desktop ?? null,
                alt: U?.alt
              }), (0, k.jsxs)("div", {
                className: "d21f276146dec1dcf842",
                style: {
                  transform: o ? null : `translateY(${C}px)`
                },
                children: [R && (0, k.jsx)("div", {
                  className: "d9c130714618614ef63c",
                  ref: b,
                  children: (0, k.jsx)(u.Badge, {
                    text: R
                  })
                }), (0, k.jsx)("span", {
                  className: "e056f0aa82c811cbadda",
                  ref: S,
                  "aria-hidden": i,
                  children: A
                })]
              })]
            }), (0, k.jsxs)("div", {
              className: "f4efaa263cba6ec12f58",
              ref: T,
              style: {
                top: !0 === i && !0 === o ? `${L}px` : null
              },
              children: [A && (0, k.jsx)("span", {
                className: "d784a6def5f96306e977",
                children: A
              }), (0, k.jsx)("div", {
                className: "b98f5b22300490f3feb8",
                children: (0, k.jsx)(f.TinaParser, {
                  components: p,
                  tina: {
                    meta: F,
                    payload: {
                      content: G?.content
                    }
                  }
                })
              })]
            })]
          }) : null
        })),
        w = "cb22b2530b90ee356a13",
        T = e => {
          let {
            prevPage: t,
            prevBtnDisabled: a,
            nextPage: n,
            nextBtnDisabled: s,
            selectedItemNumber: i,
            itemsData: r,
            closeModalMode: l
          } = e;
          return (0, k.jsxs)(k.Fragment, {
            children: [(0, k.jsxs)("div", {
              className: "faa5acf4b727e1382599",
              children: [(0, k.jsx)("button", {
                className: w,
                type: "button",
                onClick: t,
                disabled: a,
                "aria-label": "Previous"
              }), (0, k.jsxs)("span", {
                className: "dacf520118176355e3f9",
                children: [i + 1, (0, k.jsx)("span", {
                  className: "f75c0ab96a4285c2dea2"
                }), r.length]
              }), (0, k.jsx)("button", {
                className: w,
                type: "button",
                onClick: n,
                disabled: s,
                "aria-label": "Next"
              })]
            }), (0, k.jsx)("button", {
              className: "fd85da563bb161a9949a",
              type: "button",
              onClick: l,
              "aria-label": "Close"
            })]
          })
        },
        j = e => {
          let {
            title: t = "New This Week"
          } = e;
          const a = (() => {
              const {
                data: e
              } = (0, g.useQuery)(y.TinaModulesList, {
                variables: {
                  type: "gtao-event-card",
                  locale: "en_us"
                }
              }), t = e?.tinaModulesList?.results, a = x().map(t, "id");
              return (0, u.useTinaModuleFetchByIds)({
                ids: a
              })
            })(),
            [n, s] = (0, c.useState)([]),
            [i, r] = (0, c.useState)(null),
            l = (0, c.createRef)(),
            [d, o] = (0, c.useState)(null),
            m = (0, c.createRef)(),
            h = (0, c.createRef)(),
            [b, N] = (0, c.useState)([]),
            [w, j] = (0, c.useState)(!0),
            [M, C] = (0, c.useState)(!1),
            [E, P] = (0, c.useState)([]),
            [z, L] = (0, c.useState)(404),
            [$, Z] = (0, c.useState)(672),
            [D, O] = (0, c.useState)(336),
            [I, V] = (0, c.useState)(0),
            [H, W] = (0, c.useState)(0),
            [_, B] = (0, c.useState)(0),
            [F, G] = (0, c.useState)(0),
            [R, A] = (0, c.useState)(0),
            [U, Y] = (0, c.useState)(!1),
            [X, q] = (0, c.useState)(window.innerWidth),
            [Q, K] = (0, c.useState)(0),
            [J, ee] = (0, c.useState)(0),
            [te, ae] = (0, c.useState)(0),
            [ne, se] = (0, c.useState)(0),
            [ie, re] = (0, c.useState)(0),
            [le, de] = (0, c.useState)(0),
            [oe, ce] = (0, c.useState)(0),
            [ue, me] = (0, c.useState)(50),
            [pe, fe] = (0, c.useState)(0),
            [ve, he] = (0, c.useState)(!1),
            [xe, ge] = (0, c.useState)(768),
            [ye, be] = (0, c.useState)(!1),
            [Ne, ke] = (0, c.useState)(!1),
            [Se, we] = (0, c.useState)(!1),
            [Te, je] = (0, c.useState)(!1),
            [Me, Ce] = (0, c.useState)(!1),
            [Ee, Pe] = (0, c.useState)(1e3),
            [ze, Le] = (0, c.useState)(1.2),
            [$e, Ze] = (0, c.useState)(0),
            [De, Oe] = (0, c.useState)(!1),
            Ie = (e, t) => {
              let a = getComputedStyle(e).getPropertyValue(t);
              return a = a.replace("px", "").replace("rem", "").replace("em", ""), a = a.replace("vh", "").replace("vw", "").replace("vmin", "").replace("vmax", ""), a = a.replace("ms", "").replace("s", ""), Number(a)
            },
            Ve = () => X * Q + ue,
            He = () => !1 === ve ? ze : 1,
            We = e => e === ne - 1 || e === ne + 1,
            _e = () => -1 * te,
            Be = function(e) {
              let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (!0 === ve) return 0;
              const a = e.itemNumber % 2 == 0,
                n = z * ze;
              if (!0 === a && 0 !== e.itemNumber) {
                const a = Ie(e?.element?.current, "top", window);
                let s = a - _;
                return !1 === t && (s -= a), -1 * (.5 * n + s) + $e
              }
              return _ - .5 * n + $e
            },
            Fe = function(e, t) {
              let a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                n = _e();
              !1 === a && (n = 0);
              const s = X * Q,
                i = !1 === ve ? z * He() : s;
              return e.inModalMode && ve ? -1 === t ? Ve() * (ne - e.itemNumber) * -1 - e.styles.left : Ve() * (e.itemNumber - ne) - e.styles.left : -1 === t ? -1 * e.styles.left - i - ue + n : s - e.styles.left + ue + n
            },
            Ge = (e, t, a) => {
              C(!1 === a && e >= t || !0 === a && e + 1 === t), j(e <= 0)
            },
            Re = () => {
              ne + 1 >= n.length || (Ge(ne + 1, n.length, !0), ve ? ve && (N(b.map((e => (e.itemNumber === ne - 1 ? e.upNext = !1 : e.itemNumber === ne + 2 ? e.upNext = !0 : e.itemNumber === ne + 1 ? e.active = !0 : e.itemNumber === ne && (e.upNext = !0, e.active = !1), e)))), ae(te - Ve())) : N(b.map((e => (e.itemNumber === ne - 1 ? e.upNext = !1 : e.itemNumber === ne + 2 ? e.upNext = !0 : e.itemNumber === ne + 1 ? (e.active = !0, e.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${_e()}px, ${$e}px, 0) scale(1)`
              }) : e.itemNumber === ne && (e.upNext = !0, e.active = !1, e.styles = {
                ...e.styles,
                transform: `translate3d(${Fe(e,-1)}px, ${Be(e)}px, 0) scale(${He()})`
              }), e)))), se(ne + 1))
            },
            Ae = () => {
              if (!0 === U) return void Re();
              const e = J + 1,
                t = X - oe;
              let a = -1 * (oe + pe - t);
              if (ve && (a = -1 * (D * b.length - t)), e > R) return;
              Ge(e, R, !1);
              let n = te - H;
              ve && (n = te - D), ee(e), n < a && (n = a, C(!0), ee(R)), ae(n)
            },
            Ue = () => {
              ne - 1 < 0 || (Ge(ne - 1, n.length, !0), ve || N(b.map((e => (e.itemNumber === ne + 1 ? e.upNext = !1 : e.itemNumber === ne - 2 ? e.upNext = !0 : e.itemNumber === ne ? (e.upNext = !0, e.active = !1, e.styles = {
                ...e.styles,
                transform: `translate3d(${Fe(e,1)}px, ${Be(e)}px, 0) scale(${He()})`
              }) : e.itemNumber === ne - 1 && (e.active = !0, e.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${_e()}px, ${$e}px, 0) scale(1)`
              }), e)))), ve && (N(b.map((e => (e.itemNumber === ne + 1 ? e.upNext = !1 : e.itemNumber === ne - 2 ? e.upNext = !0 : e.itemNumber === ne ? (e.upNext = !0, e.active = !1) : e.itemNumber === ne - 1 && (e.active = !0), e)))), ae(te + Ve())), se(ne - 1))
            },
            Ye = () => {
              if (!0 === U) return void Ue();
              const e = J - 1;
              if (e < 0) return;
              Ge(e, R, !1);
              let t = te + H;
              ve && (t = te + D), ee(e), t > 0 && (t = 0, j(!0), ee(0)), ae(t)
            },
            Xe = e => {
              if (!1 === U) return;
              const {
                key: t
              } = e;
              "ArrowLeft" === t ? Ue() : "ArrowRight" === t && Re()
            },
            qe = (e, t) => e.map(((e, a) => {
              let n = a * D,
                s = a;
              return !1 === ve && (s = Math.ceil(.5 * a) + 1, a > 0 && (n = 2 === s ? $ : $ + D * (s - 2))), {
                ...e,
                mobileMode: ve,
                itemNumber: a,
                columnNumber: s,
                inModalMode: !1,
                upNext: !0,
                active: !1,
                openModalMode: Ke,
                element: E[a],
                transitionStyle: t,
                styles: {
                  left: n,
                  transform: null,
                  height: null,
                  top: null
                }
              }
            }));
          (0, c.useEffect)((() => {
            const e = e => {
              q(e), he(e < xe);
              const t = (1 - Q) / 2;
              ce(e * t);
              const a = e - 2 * le,
                n = Math.round(a / D);
              V(n), W(n * D), G(e - e * t)
            };
            return window.addEventListener("resize", (() => {
              e(window.innerWidth)
            })), e(window.innerWidth), () => {
              window.removeEventListener("resize", (() => {
                e(window.innerWidth)
              }))
            }
          }), [D, m, h, Q]), (0, c.useEffect)((() => {
            const e = a ?? [];
            e.length, s(e)
          }), [a]), (0, c.useEffect)((() => {
            P(n.map((() => (0, c.createRef)())))
          }), [n]), (0, c.useEffect)((() => {
            let e = 0;
            m.current && (e = m?.current?.clientHeight, e += Ie(m?.current, "margin-top"), e += Ie(m?.current, "margin-bottom"), re(e))
          }), [m, h]), (0, c.useEffect)((() => {
            if (l.current) {
              o(l.current);
              const e = Ie(document.documentElement, "--root-font-size");
              null !== i && e !== i && (r(e), U && Qe()), null === i && r(e);
              const t = Ie(l.current, "--eventDeck-modalGutters") * e;
              de(t);
              const a = X - 2 * t;
              K(a / X);
              let s = Ie(l.current, "--eventDeck-modalBottomGutter");
              s *= e;
              const d = window.innerHeight - (ie + s);
              B(.5 * a < d ? a / 4 : .5 * d);
              const c = Ie(l.current, "--eventDeck-mobileBreakpoint");
              ge(c);
              let u = Ie(l.current, "--eventDeck-itemSize");
              u *= e, L(u);
              let m = Ie(l.current, "--eventDeck-modalGutterGap");
              m *= e, me(m);
              let p = Ie(l.current, "--eventDeck-insideMargin");
              p *= e;
              const f = !1 === ve ? 2 * u + p : u + p;
              Z(f + p);
              const v = u + p;
              O(v);
              const h = .5 * n.length * v + f;
              fe(h);
              let x = Math.ceil(Math.ceil(h / v) / I);
              ve && (x = b.length - 1), A(x);
              const g = Ie(l.current, "--eventDeck-itemScaleUpAmount");
              Le(g), Pe(Ie(l.current, "--eventDeck-phaseOneTransitionDuration"))
            }
          }), [l, n]);
          const Qe = () => {
            if (N(qe(n, "cardClose")), ve) ee(ne), ae(D * ne * -1), Ge(ne, R, !1);
            else {
              const e = Math.ceil((b[ne].columnNumber + 1) / I) - 1;
              ee(e), ae(e * H * -1), Ge(e, R, !1), se(0)
            }
            m.current.style.transform = "translateY(0px)", Oe(!1), je(!1), Y(!1), d.style.zIndex = null, setTimeout((() => {
              we(!0)
            }), 600)
          };
          (0, c.useEffect)((() => {
            !1 !== Se && (we(!1), Oe(!1), N(b.map((e => (e.transitionStyle = "easeInOut", e)))))
          }), [Se]);
          const Ke = e => {
            se(Number(e.target.dataset.itemPosition)), ke(!0)
          };
          (0, c.useEffect)((() => {
            if (!1 === Ne || !0 === U) return;
            ke(!1);
            const e = (() => {
              const e = -1 * (b[0].element.current.getBoundingClientRect().top - 140);
              return Ze(e - (ve ? 80 : 0)), e
            })();
            ve && N(b.map((t => (t.styles = {
              ...t.styles,
              transform: `translate3d(0, ${e}px, 0) scale(1)`
            }, t)))), d.style.zIndex = "101", Oe(!0), m.current && (m.current.style.transition = "all 0.5s ease-in-out", m.current.style.transform = `translateY(${e}px)`), je(!0), setTimeout((() => {
              be(!0)
            }), ve ? 500 : 1)
          }), [Ne]), (0, c.useEffect)((() => {
            !1 !== ye && !0 !== U && (Y(!0), be(!1), Ge(ne, b.length, !0), m.current && (m.current.style.transition = "all 0.5s cubic-bezier(0.5, 0, 0.3, 1)", m.current.style.transform = `translateY(${$e}px)`), N(b.map(((e, t) => {
              e.active = t === ne, e.inModalMode = !0, e.transitionStyle = "cardOpen", !0 === ve && (e.upNext = We(e.itemNumber));
              const a = !ve;
              if (e.itemNumber < ne) e.styles = {
                ...e.styles,
                transform: `translate3d(${Fe(e,-1,a)}px, ${$e}px, 0) scale(${He()})`
              };
              else if (e.itemNumber > ne) e.styles = {
                ...e.styles,
                transform: `translate3d(${Fe(e,1,a)}px, ${$e}px, 0) scale(1)`
              };
              else {
                let t = `translate3d(${_e()}px, ${$e}px, 0) scale(1)`;
                ve && (t = `translate3d(0px, ${$e}px, 0) scale(1)`), e.styles = {
                  left: ve ? null : 0,
                  top: 0,
                  transform: t
                }
              }
              return e
            }))), !1 === ve ? Ce(!0) : ae(0))
          }), [ye]), (0, c.useEffect)((() => {
            !1 !== Me && !0 !== ve && (Ce(!1), setTimeout((() => {
              N(b.map((e => {
                if (e.upNext = We(e.itemNumber), e.transitionStyle = "easeInOut", e.itemNumber !== ne) {
                  let t = Fe(e, 1);
                  e.itemNumber < ne && (t = Fe(e, -1)), e.styles = {
                    ...e.styles,
                    transform: `translate3d(${t}px, ${Be(e)}px, 0) scale(${He()})`
                  }
                }
                return e
              })))
            }), Ee))
          }), [Me]), (0, c.useEffect)((() => {
            !1 !== U && !0 !== ve && N(b.map((e => (e.itemNumber > ne ? e.styles = {
              ...e.styles,
              transform: `translate3d(${Fe(e,1)}px, ${Be(e)}px, 0) scale(${He()})`
            } : e.itemNumber < ne && (e.styles = {
              ...e.styles,
              transform: `translate3d(${Fe(e,-1)}px, ${Be(e)}px, 0) scale(${He()})`
            }), e))))
          }), [F, H, ue, z, X, oe, _]), (0, c.useEffect)((() => (document.addEventListener("keydown", Xe), () => {
            document.removeEventListener("keydown", Xe)
          })), [U, ne]), (0, c.useEffect)((() => {
            N(qe(n, "easeInOut"))
          }), [$, D, n]), (0, c.useEffect)((() => {
            document.body.style.overflowY = !0 === U ? "hidden" : "auto"
          }), [U]), (0, c.useEffect)((() => {
            ae(0), ee(0), Y(!1)
          }), [ve]);
          const Je = (0, f.useTinaComponents)(),
            et = (0, c.useMemo)((() => ({
              ...Je,
              CardWithImageGallery: v.Z,
              HTMLElement: u.HTMLElement,
              ImageWithBadge: u.ImageWithBadge,
              Carousel: u.Carousel,
              GroupOfItems: p(),
              UnorderedList: u.UnorderedList
            })), [Je]),
            tt = (0, c.useMemo)((() => b.map((e => (0, c.createElement)(S, {
              ...e,
              refDeck: l,
              key: e?.id ?? e?.sync_hash,
              components: et,
              prevPage: Ye,
              nextPage: Ae,
              loadCssRawValue: Ie
            })))), [b, l, et, Ye, Ae, Ie]);
          return !tt?.length || tt.length <= 0 ? null : (0, k.jsxs)(k.Fragment, {
            children: [(0, k.jsx)("div", {
              className: "c1b08e0c6762959d6e40",
              "data-modal-mode": Te,
              "aria-hidden": "true"
            }), (0, k.jsxs)("div", {
              className: "dd9c11d21c9d76e0f525",
              "data-modal-mode": U,
              ref: l,
              children: [(0, k.jsxs)("div", {
                className: "fe4a9770ab07662ba456",
                "data-modal-mode": U,
                ref: m,
                "data-animating": De,
                children: [(0, k.jsx)("h2", {
                  className: "bdad5a5a38f931159788",
                  children: t
                }), (0, k.jsx)(T, {
                  prevPage: Ye,
                  prevBtnDisabled: w,
                  nextPage: Ae,
                  nextBtnDisabled: M,
                  selectedItemNumber: ne,
                  itemsData: n,
                  closeModalMode: Qe
                })]
              }), (0, k.jsx)("div", {
                className: "fe13159c37ea559619ab",
                "data-modal-mode": U,
                style: {
                  transform: `translate3d(${te}px, 0, 0)`,
                  width: `${pe}px`
                },
                ref: h,
                children: tt
              })]
            })]
          })
        };
      var M = a(4585)
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
        d = a(507),
        o = a(4950);
      const c = {
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
          to: g = null,
          tina: y = {}
        } = e;
        const b = (0, s.useTinaPayload)(),
          N = y?.payload?.meta?.cdn ?? b?.meta?.prod ?? !1,
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
            className: c.customModal,
            contentClassName: c.customModalContent
          },
          expandedCardContents: (0, u.jsx)(d.Z, {
            images: h,
            prod: N,
            expandedView: !0
          }),
          children: (0, u.jsx)(o.Z, {
            expandedType: f,
            to: g,
            children: (0, u.jsx)("div", {
              className: c.content,
              children: (0, u.jsx)(l.Z, {
                title: a,
                size: k,
                textOverlayProps: v,
                children: (0, u.jsx)(d.Z, {
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
        d = a(7366);
      const o = {
        customModalContent: "e9e7ee7cbb3a089710cc"
      };
      var c = a(3322);
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
          tina: g = {}
        } = e;
        const [y, b] = (0, n.useState)(null), N = (0, s.useTinaPayload)();
        let k;
        k = g?.payload?.meta?.cdn ?? N?.meta?.prod ?? !1;
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
        }), [x?.size, p]), (0, c.jsx)(r.Z, {
          id: t,
          payload: {
            content: i,
            meta: {}
          },
          title: a,
          size: S,
          expandedType: f,
          images: y,
          deckProps: x,
          prod: k,
          variants: m.cardWithImageGallery,
          textOverlayProps: v,
          modalProps: {
            className: o.customModal,
            contentClassName: o.customModalContent
          },
          expandedCardContents: (0, c.jsx)(d.Z, {
            images: y,
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
          children: (0, c.jsx)("div", {
            className: o.content,
            children: (0, c.jsx)(l.Z, {
              title: a,
              size: S,
              textOverlayProps: v,
              children: (0, c.jsx)(d.Z, {
                images: y,
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
        const d = {
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
                components: d,
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
          var d = l;
          l = new Set, d.forEach((function(e) {
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