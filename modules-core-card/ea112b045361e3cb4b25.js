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
        m = a(3322);
      const u = {
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
              i().set(r, "payload.meta.id", n), e.push((0, m.jsx)(l.TinaParser, {
                components: u,
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
          return (0, m.jsx)("div", {
            ref: c,
            children: (0, m.jsx)(r.Gen9CoreCarousel, {
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
        Animations: m
      } = r.framer, {
        transitions: u
      } = m, p = e => {
        let {
          components: t,
          payload: a,
          prod: n,
          size: r,
          title: m,
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
          badges: w
        } = g;
        return s().set(a, "meta.prod", n), (0, o.jsxs)(c, {
          initial: p,
          animate: f,
          variants: v.expanded,
          transition: u.cardOpen,
          className: (0, i.classList)("b26588866b3f8cf68385", y),
          "data-type": h,
          "data-size": r,
          "data-context": x,
          children: [(0, o.jsx)(d.Z, {
            size: r,
            title: m,
            textOverlayProps: g,
            expandedView: !0,
            children: b
          }), (0, o.jsxs)(c, {
            className: "c86efe7469f4c7bea32c",
            variants: v.expandedContents,
            transition: u.afterCardOpen,
            children: [(0, o.jsxs)("div", {
              className: "d606f8b2c00b2c32599e",
              children: [(0, o.jsx)(l.Z, {
                hasTag: k,
                tag: N,
                badges: w
              }), (0, o.jsx)("h1", {
                children: m
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
            expandedView: m,
            badges: u
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
              fadesOut: m,
              badges: u
            })
          }), [t, a, r, l, d, o, c, m, u]);
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
        s = a(6803),
        i = a(8008),
        r = a(8976),
        l = a(420),
        d = a.n(l),
        o = a(9542),
        c = a(6711),
        m = a(9525);
      var u = a(3322);
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
            className: m,
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
            w = e => {
              if ("linkout" !== d) return e.preventDefault(), e.stopPropagation(), t ? v({
                info: t
              }) : N(), null
            };
          return (0, u.jsx)("div", {
            ref: h,
            onClick: w,
            onKeyUp: w,
            className: m,
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
          const w = (0, o.useTinaComponents)(),
            S = (0, n.useMemo)((() => ({
              ...w,
              HTMLElement: r.HTMLElement,
              ImageWithBadge: r.ImageWithBadge,
              Carousel: r.Carousel,
              GroupOfItems: d()
            })), [w]),
            j = (0, n.useMemo)((() => (0, u.jsx)(m.Z, {
              type: x,
              components: S,
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
            })), [x, s, a, i, l, b, y, c, f, v, S, t]);
          return (0, u.jsx)(p, {
            id: h,
            title: l,
            size: i,
            expandedType: x,
            images: s,
            deckProps: N,
            modalProps: {
              content: j,
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
        getVariant: m,
        variants: u,
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
          variants: m(e?.specialClass ?? "imageMask", r ? "expanded" : "collapsed"),
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
          initial: u.fade.in.initial,
          animate: u.fade.in.animate,
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
        Z: () => m
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
      } = d, m = e => {
        let {
          title: t,
          hasTag: a,
          tag: n,
          hasDescription: d,
          description: m,
          fadesOut: u = !1,
          badges: p
        } = e;
        return (0, r.jsx)(l, {
          initial: o.fade.out.initial,
          animate: {
            opacity: u ? 0 : 1
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
            }), d && m && (0, r.jsx)("div", {
              className: i.description,
              children: m
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
        Card: () => C.Card,
        CardExpanded: () => n.Z,
        CardHeader: () => s.Z,
        CardWithImageGallery: () => C.CardWithImageGallery,
        CardWrapper: () => i.Z,
        Deck: () => C.Deck,
        EventsDeck: () => M,
        LayeredImageFrame: () => r.Z,
        LinkoutWrapper: () => l.Z,
        TextCard: () => C.TextCard,
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
        m = a(8976),
        u = a(420),
        p = a.n(u),
        f = a(9542),
        v = a(1204),
        h = a(7311),
        x = a.n(h),
        g = a(4859),
        y = a(5938);
      var b = a(9929),
        N = a(559);
      const k = "d93abf8c854bf70e6ae4";
      var w = a(3322);
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
            viewHeight: u,
            refDeck: p,
            components: v,
            tina: h,
            prevPage: x,
            nextPage: g,
            loadCssRawValue: y,
            transitionStyle: b
          } = e;
          const k = (0, c.createRef)(),
            S = (0, c.createRef)(),
            j = (0, c.createRef)(),
            T = (0, c.createRef)(),
            [M, C] = (0, c.useState)(!1),
            [E, P] = (0, c.useState)(0),
            [z, L] = (0, c.useState)({}),
            [Z, $] = (0, c.useState)(0),
            [D, O] = (0, c.useState)(0),
            [I, H] = (0, c.useState)({}),
            [V, W] = (0, c.useState)(0),
            [_, B] = (0, c.useState)(!1),
            [F, G] = (0, c.useState)(0),
            R = (0, f.useTranslations)({
              payload: h?.payload,
              variables: h?.variables
            }),
            A = R?.meta ?? {},
            U = R?.content?.[0],
            Y = (0, c.useMemo)((() => U?.images?.[0]?.image?.badge), [U]),
            X = (0, c.useMemo)((() => n ?? A?.title), [n, A?.title]),
            q = (0, N.useImageParser)({
              alt: U?.images?.[0]?.image?.alt ?? "",
              ariaLabel: U?.images?.[0]?.image?.alt ?? "",
              sources: U?.images?.[0]?.image?.sources ?? [],
              prod: !1
            }),
            Q = q?.src?.mobile ?? q?.src?.desktop ?? !1;
          (0, c.useEffect)((() => {
            if (!0 === M && !1 === o) P(0);
            else if (S.current) {
              const e = y(S?.current, "marginBottom"),
                t = S?.current?.clientHeight;
              P(t + e)
            }
          }), [M, S, o, i]), (0, c.useEffect)((() => {
            C(!1)
          }), [t]), (0, c.useEffect)((() => {
            L({
              ...z,
              ...a
            })
          }), [a]), (0, c.useEffect)((() => {
            $(u)
          }), [u, o]), (0, c.useEffect)((() => {
            const e = (e, t) => {
              const a = y(e?.documentElement, "--root-font-size"),
                n = a * y(p?.current, "--eventDeck-modalGutters"),
                s = t?.innerWidth;
              O(s - 2 * n), W(y(p?.current, "--eventDeck-itemSize") * a)
            };
            return window.addEventListener("resize", (() => {
              e(document, window)
            })), e(document, window), () => {
              window.removeEventListener("resize", (() => {
                e(document, window)
              }))
            }
          }), [p, o]), (0, c.useEffect)((() => {
            if (!1 === o) return void H({
              height: null,
              width: null
            });
            const e = !1 === i ? V : D;
            H({
              height: `${e}px`,
              width: `${e}px`
            })
          }), [i, o, V]);
          const K = e => {
              if (!0 === _) return;
              const t = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              G(t)
            },
            J = e => {
              if (!0 === _ || 0 === F) return;
              const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                a = t > F ? 1 : -1;
              Math.abs(F - t) > 50 && (a > 0 ? (x(), B(!0)) : (g(), B(!0)), G(0))
            },
            ee = () => {
              !0 !== _ && B(!0)
            };
          return (0, c.useEffect)((() => {
            !1 !== _ && setTimeout((() => {
              B(!1), G(0)
            }), 200)
          }), [_, 200]), U ? (0, w.jsxs)("div", {
            className: "fde59cc0b211a74fd79f",
            ref: l,
            "data-item-position": s,
            "data-modal-mode": i,
            "data-active-item": t,
            "data-up-next": d,
            "data-transition": b,
            style: {
              ...z,
              ...a,
              height: a?.height || z?.height || null
            },
            onClick: e => {
              i || r(e)
            },
            onMouseEnter: () => {
              i || C(!0)
            },
            onMouseLeave: () => {
              i || C(!1)
            },
            onTouchStart: K,
            onTouchMove: J,
            onTouchEnd: ee,
            onMouseDown: K,
            onMouseMove: J,
            onMouseUp: ee,
            tabIndex: -1,
            role: "presentation",
            children: [(0, w.jsxs)("div", {
              className: "fa238bf7612b7724abaa",
              "data-full-header": M,
              ref: j,
              style: {
                ...I,
                minWidth: V,
                minHeight: V
              },
              children: [Q && (0, w.jsx)("img", {
                src: q?.src?.mobile ?? q?.src?.desktop ?? null,
                alt: q?.alt
              }), (0, w.jsxs)("div", {
                className: "d21f276146dec1dcf842",
                style: {
                  transform: o ? null : `translateY(${E}px)`
                },
                children: [Y && (0, w.jsx)("div", {
                  className: "d9c130714618614ef63c",
                  ref: k,
                  children: (0, w.jsx)(m.Badge, {
                    text: Y
                  })
                }), (0, w.jsx)("span", {
                  className: "e056f0aa82c811cbadda",
                  ref: S,
                  "aria-hidden": i,
                  children: X
                })]
              })]
            }), (0, w.jsxs)("div", {
              className: "f4efaa263cba6ec12f58",
              ref: T,
              style: {
                width: !0 === i && !0 === t && !1 === o ? `calc(100% - ${Z}px)` : null,
                top: !0 === i && !0 === o ? `${D}px` : null
              },
              children: [X && (0, w.jsx)("span", {
                className: "d784a6def5f96306e977",
                children: X
              }), (0, w.jsx)("div", {
                className: "b98f5b22300490f3feb8",
                children: (0, w.jsx)(f.TinaParser, {
                  components: v,
                  tina: {
                    meta: A,
                    payload: {
                      content: U?.content
                    }
                  }
                })
              })]
            })]
          }) : null
        })),
        j = "cb22b2530b90ee356a13",
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
          return (0, w.jsxs)(w.Fragment, {
            children: [(0, w.jsxs)("div", {
              className: "faa5acf4b727e1382599",
              children: [(0, w.jsx)("button", {
                className: j,
                type: "button",
                onClick: t,
                disabled: a,
                "aria-label": "Previous"
              }), (0, w.jsxs)("span", {
                className: "dacf520118176355e3f9",
                children: [i + 1, (0, w.jsx)("span", {
                  className: "f75c0ab96a4285c2dea2"
                }), r.length]
              }), (0, w.jsx)("button", {
                className: j,
                type: "button",
                onClick: n,
                disabled: s,
                "aria-label": "Next"
              })]
            }), (0, w.jsx)("button", {
              className: "fd85da563bb161a9949a",
              type: "button",
              onClick: l,
              "aria-label": "Close"
            })]
          })
        },
        M = e => {
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
              return (0, m.useTinaModuleFetchByIds)({
                ids: a
              })
            })(),
            [n, s] = (0, c.useState)([]),
            i = (0, c.createRef)(),
            [r, l] = (0, c.useState)(null),
            d = (0, c.createRef)(),
            o = (0, c.createRef)(),
            [u, h] = (0, c.useState)([]),
            [b, N] = (0, c.useState)(!0),
            [j, M] = (0, c.useState)(!1),
            [C, E] = (0, c.useState)([]),
            [P, z] = (0, c.useState)(404),
            [L, Z] = (0, c.useState)(0),
            [$, D] = (0, c.useState)(0),
            [O, I] = (0, c.useState)(0),
            [H, V] = (0, c.useState)(0),
            [W, _] = (0, c.useState)(0),
            [B, F] = (0, c.useState)(0),
            [G, R] = (0, c.useState)(0),
            [A, U] = (0, c.useState)(!1),
            [Y, X] = (0, c.useState)(window.innerWidth),
            [q, Q] = (0, c.useState)(0),
            [K, J] = (0, c.useState)(0),
            [ee, te] = (0, c.useState)(0),
            [ae, ne] = (0, c.useState)(0),
            [se, ie] = (0, c.useState)(0),
            [re, le] = (0, c.useState)(0),
            [de, oe] = (0, c.useState)(0),
            [ce, me] = (0, c.useState)(0),
            [ue, pe] = (0, c.useState)(50),
            [fe, ve] = (0, c.useState)(0),
            [he, xe] = (0, c.useState)(!1),
            [ge, ye] = (0, c.useState)(768),
            [be, Ne] = (0, c.useState)(!1),
            [ke, we] = (0, c.useState)(!1),
            [Se, je] = (0, c.useState)(!1),
            [Te, Me] = (0, c.useState)(!1),
            [Ce, Ee] = (0, c.useState)(!1),
            [Pe, ze] = (0, c.useState)(!1),
            [Le, Ze] = (0, c.useState)(1e3),
            [$e, De] = (0, c.useState)(1.2),
            [Oe, Ie] = (0, c.useState)(0),
            [He, Ve] = (0, c.useState)(!1),
            We = (e, t) => {
              let a = getComputedStyle(e).getPropertyValue(t);
              return a = a.replace("px", "").replace("rem", "").replace("em", ""), a = a.replace("vh", "").replace("vw", "").replace("vmin", "").replace("vmax", ""), a = a.replace("ms", "").replace("s", ""), Number(a)
            },
            _e = () => Y * q + ue,
            Be = () => !1 === he ? $e : 1,
            Fe = e => e === ae - 1 || e === ae + 1,
            Ge = () => -1 * ee,
            Re = function(e) {
              let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (!0 === he) return 0;
              const a = e.itemNumber % 2 == 0,
                n = P * $e;
              if (!0 === a && 0 !== e.itemNumber) {
                const a = We(e?.element?.current, "top", window);
                let s = a - W;
                return !1 === t && (s -= a), -1 * (.5 * n + s) + Oe
              }
              return W - .5 * n + Oe
            },
            Ae = function(e, t) {
              let a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                n = Ge();
              !1 === a && (n = 0);
              const s = Y * q,
                i = !1 === he ? P * Be() : s;
              return e.inModalMode && he ? -1 === t ? _e() * (ae - e.itemNumber) * -1 - e.styles.left : _e() * (e.itemNumber - ae) - e.styles.left : -1 === t ? -1 * e.styles.left - i - ue + n : s - e.styles.left + ue + n
            },
            Ue = (e, t, a) => {
              M(!1 === a && e >= t || !0 === a && e + 1 === t), N(e <= 0)
            },
            Ye = () => {
              ae + 1 >= n.length || (Ue(ae + 1, n.length, !0), he ? he && (h(u.map((e => (e.itemNumber === ae - 1 ? e.upNext = !1 : e.itemNumber === ae + 2 ? e.upNext = !0 : e.itemNumber === ae + 1 ? e.active = !0 : e.itemNumber === ae && (e.upNext = !0, e.active = !1), e)))), te(ee - _e())) : h(u.map((e => (e.itemNumber === ae - 1 ? e.upNext = !1 : e.itemNumber === ae + 2 ? e.upNext = !0 : e.itemNumber === ae + 1 ? (e.active = !0, e.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${Ge()}px, ${Re(e,!1)}px, 0) scale(1)`
              }) : e.itemNumber === ae && (e.upNext = !0, e.active = !1, e.styles = {
                ...e.styles,
                transform: `translate3d(${Ae(e,-1)}px, ${Re(e)}px, 0) scale(${Be()})`
              }), e)))), ne(ae + 1))
            },
            Xe = () => {
              if (!0 === A) return void Ye();
              const e = K + 1,
                t = Y - ce;
              let a = -1 * (ce + fe - t);
              if (he && (a = -1 * ($ * u.length - t)), e > G) return;
              Ue(e, G, !1);
              let n = ee - H;
              he && (n = ee - $), J(e), n < a && (n = a, M(!0), J(G)), te(n)
            },
            qe = () => {
              ae - 1 < 0 || (Ue(ae - 1, n.length, !0), he || h(u.map((e => (e.itemNumber === ae + 1 ? e.upNext = !1 : e.itemNumber === ae - 2 ? e.upNext = !0 : e.itemNumber === ae ? (e.upNext = !0, e.active = !1, e.styles = {
                ...e.styles,
                transform: `translate3d(${Ae(e,1)}px, ${Re(e)}px, 0) scale(${Be()})`
              }) : e.itemNumber === ae - 1 && (e.active = !0, e.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${Ge()}px, ${Re(e,!1)}px, 0) scale(1)`
              }), e)))), he && (h(u.map((e => (e.itemNumber === ae + 1 ? e.upNext = !1 : e.itemNumber === ae - 2 ? e.upNext = !0 : e.itemNumber === ae ? (e.upNext = !0, e.active = !1) : e.itemNumber === ae - 1 && (e.active = !0), e)))), te(ee + _e())), ne(ae - 1))
            },
            Qe = () => {
              if (!0 === A) return void qe();
              const e = K - 1;
              if (e < 0) return;
              Ue(e, G, !1);
              let t = ee + H;
              he && (t = ee + $), J(e), t > 0 && (t = 0, N(!0), J(0)), te(t)
            },
            Ke = e => {
              if (!1 === A) return;
              const {
                key: t
              } = e;
              "ArrowLeft" === t ? qe() : "ArrowRight" === t && Ye()
            },
            Je = (e, t) => e.map(((e, a) => {
              let n = a * $,
                s = a;
              return !1 === he && (s = Math.ceil(.5 * a) + 1, a > 0 && (n = 2 === s ? L : L + $ * (s - 2))), {
                ...e,
                mobileMode: he,
                itemNumber: a,
                columnNumber: s,
                inModalMode: !1,
                upNext: !0,
                active: !1,
                openModalMode: et,
                element: C[a],
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
              X(e), xe(e < ge);
              const t = (1 - q) / 2;
              me(e * t);
              const a = e - 2 * de,
                n = Math.round(a / $);
              I(n), V(n * $), F(e - e * t)
            };
            return window.addEventListener("resize", (() => {
              e(window.innerWidth)
            })), e(window.innerWidth), () => {
              window.removeEventListener("resize", (() => {
                e(window.innerWidth)
              }))
            }
          }), [$, d, o, q]), (0, c.useEffect)((() => {
            s(a ?? [])
          }), [a]), (0, c.useEffect)((() => {
            E(n.map((() => (0, c.createRef)())))
          }), [n]), (0, c.useEffect)((() => {
            let e = 0,
              t = 0;
            d.current && (e = d?.current?.clientHeight, e += We(d?.current, "margin-top"), e += We(d?.current, "margin-bottom"), le(e)), o.current && (t = o?.current?.clientHeight, t += We(o?.current, "margin-top"), t += We(o?.current, "margin-bottom"), ie(t))
          }), [d, o]), (0, c.useEffect)((() => {
            if (i.current) {
              l(i.current);
              const e = We(document.documentElement, "--root-font-size"),
                t = We(i.current, "--eventDeck-modalGutters") * e;
              oe(t);
              const a = Y - 2 * t;
              Q(a / Y);
              let s = We(i.current, "--eventDeck-modalBottomGutter");
              s *= e;
              const r = window.innerHeight - (re + s);
              _(.5 * a < r ? a / 4 : .5 * r);
              const d = We(i.current, "--eventDeck-mobileBreakpoint");
              ye(d);
              let o = We(i.current, "--eventDeck-itemSize");
              o *= e, z(o);
              let c = We(i.current, "--eventDeck-modalGutterGap");
              c *= e, pe(c);
              let m = We(i.current, "--eventDeck-insideMargin");
              m *= e;
              const p = !1 === he ? 2 * o + m : o + m;
              Z(p + m);
              const f = o + m;
              D(f);
              const v = .5 * n.length * f + p;
              ve(v);
              let h = Math.ceil(Math.ceil(v / f) / O);
              he && (h = u.length - 1), R(h);
              const x = We(i.current, "--eventDeck-itemScaleUpAmount");
              De(x), Ze(We(i.current, "--eventDeck-phaseOneTransitionDuration"))
            }
          }), [i, n]), (0, c.useEffect)((() => {
            !1 !== Se && (je(!1), d.current.style.transform = "translateY(0px)", d.current.style.opacity = "1", Ve(!1))
          }), [Se]);
          const et = e => {
            ne(Number(e.target.dataset.itemPosition)), he && te(0), we(!0)
          };
          (0, c.useEffect)((() => {
            if (!1 === ke || !0 === A) return;
            we(!1);
            const e = u[0].element.current.getBoundingClientRect().top;
            Ie(-1 * (e - 140)), r.style.zIndex = "101", d.current.style.transition = "none", d.current.style.opacity = "0", Ee(!0), setTimeout((() => {
              Ne(!0)
            }), 1)
          }), [ke]), (0, c.useEffect)((() => {
            !1 !== be && !0 !== A && (U(!0), Ne(!1), Ue(ae, u.length, !0), d.current.style.transform = `translateY(${Oe}px)`, d.current.style.opacity = "1", h(u.map(((e, t) => (e.active = t === ae, e.inModalMode = !0, e.transitionStyle = "cardOpen", !0 === he && (e.upNext = Fe(e.itemNumber)), e.itemNumber < ae ? e.styles = {
              ...e.styles,
              transform: `translate3d(${Ae(e,-1)}px, ${Oe}px, 0) scale(${Be()})`
            } : e.itemNumber > ae ? e.styles = {
              ...e.styles,
              transform: `translate3d(${Ae(e,1)}px, ${Oe}px, 0) scale(1)`
            } : e.styles = {
              left: 0,
              top: 0,
              transform: `translate3d(${Ge()}px, ${Oe}px, 0) scale(1)`
            }, e)))), !1 === he && ze(!0))
          }), [be]), (0, c.useEffect)((() => {
            !1 !== Pe && !0 !== he && (ze(!1), setTimeout((() => {
              h(u.map((e => {
                if (e.upNext = Fe(e.itemNumber), e.transitionStyle = "easeInOut", e.itemNumber !== ae) {
                  let t = Ae(e, 1);
                  e.itemNumber < ae && (t = Ae(e, -1)), e.styles = {
                    ...e.styles,
                    transform: `translate3d(${t}px, ${Re(e)}px, 0) scale(${Be()})`
                  }
                }
                return e
              })))
            }), Le))
          }), [Pe]), (0, c.useEffect)((() => {
            !1 !== A && !0 !== he && h(u.map((e => (e.itemNumber > ae ? e.styles = {
              ...e.styles,
              transform: `translate3d(${Ae(e,1)}px, ${Re(e)}px, 0) scale(${Be()})`
            } : e.itemNumber < ae && (e.styles = {
              ...e.styles,
              transform: `translate3d(${Ae(e,-1)}px, ${Re(e)}px, 0) scale(${Be()})`
            }), e))))
          }), [B, H, ue, P, Y, ce, W]), (0, c.useEffect)((() => (document.addEventListener("keydown", Ke), () => {
            document.removeEventListener("keydown", Ke)
          })), [A, ae]), (0, c.useEffect)((() => {
            h(Je(n, "easeInOut"))
          }), [L, $, n]), (0, c.useEffect)((() => {
            document.body.style.overflowY = !0 === A ? "hidden" : "auto"
          }), [A]), (0, c.useEffect)((() => {
            te(0), J(0), U(!1)
          }), [he]);
          const tt = (0, f.useTinaComponents)(),
            at = (0, c.useMemo)((() => ({
              ...tt,
              CardWithImageGallery: v.Z,
              HTMLElement: m.HTMLElement,
              ImageWithBadge: m.ImageWithBadge,
              Carousel: m.Carousel,
              GroupOfItems: p(),
              UnorderedList: m.UnorderedList
            })), [tt]),
            nt = (0, c.useMemo)((() => u.map((e => (0, c.createElement)(S, {
              ...e,
              viewHeight: se,
              refDeck: i,
              key: e?.id ?? e?.sync_hash,
              components: at,
              prevPage: Qe,
              nextPage: Xe,
              loadCssRawValue: We
            })))), [u, se, i, at, Qe, Xe, We]);
          return !nt?.length || nt.length <= 0 ? null : (0, w.jsxs)(w.Fragment, {
            children: [(0, w.jsx)("div", {
              className: k,
              "data-modal-mode": A,
              "aria-hidden": "true"
            }), (0, w.jsx)("div", {
              className: k,
              "data-modal-mode": A,
              "aria-hidden": "true"
            }), (0, w.jsx)("div", {
              className: k,
              "data-modal-mode": A,
              "aria-hidden": "true"
            }), (0, w.jsx)("div", {
              className: k,
              "data-modal-mode": A,
              "aria-hidden": "true"
            }), (0, w.jsx)("div", {
              className: "c1b08e0c6762959d6e40",
              "data-modal-mode": Ce,
              "aria-hidden": "true"
            }), (0, w.jsxs)("div", {
              className: "dd9c11d21c9d76e0f525",
              "data-modal-mode": A,
              ref: i,
              children: [(0, w.jsxs)("div", {
                className: "fe4a9770ab07662ba456",
                "data-modal-mode": A,
                ref: d,
                "data-animating": He,
                children: [(0, w.jsx)("h2", {
                  className: "bdad5a5a38f931159788",
                  children: t
                }), (0, w.jsx)(T, {
                  prevPage: Qe,
                  prevBtnDisabled: b,
                  nextPage: Xe,
                  nextBtnDisabled: j,
                  selectedItemNumber: ae,
                  itemsData: n,
                  closeModalMode: () => {
                    if (h(Je(n, "cardClose")), he) J(ae), te($ * ae * -1), Ue(ae, G, !1);
                    else {
                      const e = Math.ceil((u[ae].columnNumber + 1) / O) - 1;
                      J(e), te(e * H * -1), Ue(e, G, !1), ne(0)
                    }
                    r.style.transform = "translateY(0)", Ve(!0), d.current.style.opacity = "0", Ee(!1), U(!1), setTimeout((() => {
                      je(!0)
                    }), 600)
                  }
                })]
              }), (0, w.jsx)("div", {
                className: "fe13159c37ea559619ab",
                "data-modal-mode": A,
                style: {
                  transform: `translate3d(${ee}px, 0, 0)`,
                  width: `${fe}px`
                },
                ref: o,
                children: nt
              })]
            }), (0, w.jsx)("div", {
              className: k,
              "data-modal-mode": A,
              "aria-hidden": "true"
            }), (0, w.jsx)("div", {
              className: k,
              "data-modal-mode": A,
              "aria-hidden": "true"
            }), (0, w.jsx)("div", {
              className: k,
              "data-modal-mode": A,
              "aria-hidden": "true"
            }), (0, w.jsx)("div", {
              className: k,
              "data-modal-mode": A,
              "aria-hidden": "true"
            })]
          })
        };
      var C = a(4585)
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
      var m = a(3322);
      const {
        variants: u
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
          [k, w] = (0, n.useState)(x?.size ?? p);
        return (0, n.useEffect)((() => {
          w(x?.size ?? p)
        }), [x?.size, p]), (0, m.jsx)(r.Z, {
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
          variants: u.plainCard,
          textOverlayProps: v,
          modalProps: {
            className: c.customModal,
            contentClassName: c.customModalContent
          },
          expandedCardContents: (0, m.jsx)(d.Z, {
            images: h,
            prod: N,
            expandedView: !0
          }),
          children: (0, m.jsx)(o.Z, {
            expandedType: f,
            to: g,
            children: (0, m.jsx)("div", {
              className: c.content,
              children: (0, m.jsx)(l.Z, {
                title: a,
                size: k,
                textOverlayProps: v,
                children: (0, m.jsx)(d.Z, {
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
        transitions: m,
        variants: u
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
        const [w, S] = (0, n.useState)(x?.size ?? p), {
          parent: j,
          main: T,
          thumbs: M
        } = u?.cardWithImageGallery?.gallery ?? {};
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
          S(x?.size ?? p)
        }), [x?.size, p]), (0, c.jsx)(r.Z, {
          id: t,
          payload: {
            content: i,
            meta: {}
          },
          title: a,
          size: w,
          expandedType: f,
          images: y,
          deckProps: x,
          prod: k,
          variants: u.cardWithImageGallery,
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
              parent: j,
              main: T,
              thumbs: M
            },
            transition: {
              parent: m.cardOpen,
              main: m.cardOpen,
              thumbs: m.cardOpen
            }
          }),
          children: (0, c.jsx)("div", {
            className: o.content,
            children: (0, c.jsx)(l.Z, {
              title: a,
              size: w,
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