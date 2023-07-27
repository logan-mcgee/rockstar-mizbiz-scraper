"use strict";
(self.webpackChunk_rockstargames_modules_core_card = self.webpackChunk_rockstargames_modules_core_card || []).push([
  [165], {
    2: (e, t, a) => {
      a.d(t, {
        Z: () => x
      });
      var s = a(4932),
        i = a(3653),
        n = a.n(i),
        d = a(8976),
        c = a(9542),
        r = a(498),
        o = a(3614),
        l = a(1324);
      var m = a(6160);
      const {
        Gen9CoreCarousel: p,
        framer: u,
        useTinaModuleFetchByIds: g,
        withSimpleErrorBoundary: h
      } = d, b = {
        Card: r.Z,
        CardWithImageGallery: o.Z,
        TextCard: l.Z,
        ...d
      }, x = u.withFadeIn(h((e => {
        let {
          cards: t = [],
          size: a,
          title: i,
          description: d,
          customSlidesPerView: r = null,
          theme: o = "none",
          cardSizeBreakpoints: l = {},
          customAspectRatio: u = "3/1"
        } = e;
        const h = (0, s.useRef)(null),
          x = n().map(t, "id"),
          v = g({
            ids: x
          }),
          [f, y] = (0, s.useState)(r);
        (0, s.useEffect)((() => {
          if (!h.current) return;
          const e = () => {
            const e = r || window.getComputedStyle(h.current).getPropertyValue("--slides-per-view");
            y(e)
          };
          return window.addEventListener("resize", e), e(), () => {
            window.removeEventListener("resize", e)
          }
        }));
        const j = (0, s.useMemo)((() => {
          let e = 0;
          return v ? v.reduce(((t, s) => {
            if (s) {
              const {
                id: d,
                tina: r
              } = s, l = n().clone(r);
              n().set(l, "payload.meta.id", d), t.push((0, m.jsx)(c.TinaParser, {
                components: b,
                tina: l,
                componentProps: {
                  deckProps: {
                    size: a
                  },
                  tina: l,
                  id: d,
                  position: e,
                  sectionTitle: i,
                  theme: o,
                  cardIds: x
                }
              }, d)), e += 1
            }
            return t
          }), []) : null
        }), [v, a]);
        return (0, m.jsx)("div", {
          className: "d82452706eccb7b8cd5e4502d7fca0835dd4",
          "data-theme": o,
          ref: h,
          children: (0, m.jsx)(p, {
            description: d,
            size: a,
            cardSizeBreakpoints: l,
            slideChildren: j,
            title: i,
            customSlidesPerView: f,
            customAspectRatio: u
          })
        })
      })))
    },
    5500: (e, t, a) => {
      a.d(t, {
        Z: () => n
      });
      var s = a(8976);
      var i = a(6160);
      const n = e => {
        let {
          hasTag: t = !1,
          tag: a = null,
          badges: n = []
        } = e;
        return t && a ? (0, i.jsx)("div", {
          className: "d82452706eccb7b8f3c82db691085629ecd1",
          children: a
        }) : t && n && n?.length > 0 ? (0, i.jsx)("div", {
          className: "d82452706eccb7b8f6e8e857db521f2f02c2",
          children: n.map((e => (0, i.jsx)(s.Badge, {
            ...e
          }, e?.text)))
        }) : null
      }
    },
    2794: (e, t, a) => {
      a.d(t, {
        Z: () => x
      });
      var s = a(4932),
        i = a(3653),
        n = a.n(i),
        d = a(3102),
        c = a(9542),
        r = a(8976),
        o = a(9929),
        l = a(5500),
        m = a(1581),
        p = a(9813);
      var u = a(6160);
      const {
        LiteMotion: g,
        Animations: h
      } = r.framer, {
        transitions: b
      } = h, x = e => {
        let {
          components: t,
          payload: a,
          prod: i,
          size: h,
          title: x,
          initial: v = "initial",
          animate: f = "animate",
          variants: y,
          type: j = null,
          context: w = null,
          textOverlayProps: T,
          className: P,
          children: C,
          theme: k = "none",
          cardIds: _,
          id: N,
          pricingOptions: z
        } = e;
        const O = (0, s.useRef)(),
          Z = (0, s.useRef)(),
          {
            tag: L,
            expandedHasTag: I,
            badges: M
          } = T;
        n().set(a, "meta.prod", i);
        const [, S] = (0, d.useSearchParams)(), [E, H] = (0, s.useState)(null), V = void 0 !== z;
        return (0, s.useEffect)((() => {
          null !== E && E < _?.length && E > -1 && S({
            info: _[E]
          })
        }), [E, _]), (0, s.useEffect)((() => {
          _?.forEach(((e, t) => {
            e === N && H(t)
          }))
        }), [_, N]), (0, u.jsx)(o.DataLayerProvider, {
          card_id: N,
          card_name: x?.toLowerCase(),
          children: (0, u.jsx)(r.ScrollTracker, {
            threshold: [25, 50, 75, 90, 100],
            trackRef: "long" === j ? O : Z,
            children: (0, u.jsxs)(g, {
              ref: O,
              initial: v,
              animate: f,
              variants: y.expanded,
              transition: b.cardOpen,
              className: (0, c.classList)("d82452706eccb7b8b26588866b3f8cf68385", P),
              "data-type": j,
              "data-size": h,
              "data-product": V || !1,
              "data-context": w,
              children: [(0, u.jsx)(m.Z, {
                size: h,
                title: x,
                textOverlayProps: T,
                expandedView: !0,
                pricingOptions: z,
                children: C
              }), (0, u.jsxs)(g, {
                ref: Z,
                className: "d82452706eccb7b8c86efe7469f4c7bea32c",
                variants: y.expandedContents,
                transition: b.afterCardOpen,
                "data-theme": k,
                children: [(0, u.jsxs)("div", {
                  className: "d82452706eccb7b8d606f8b2c00b2c32599e",
                  children: [(0, u.jsx)(l.Z, {
                    hasTag: I,
                    tag: L,
                    badges: M
                  }), (0, u.jsx)("h1", {
                    children: x
                  }), V && (0, u.jsx)(p.Z, {
                    title: x,
                    showTitle: !1,
                    showBackground: !1,
                    tag: z?._memoq?.tag,
                    tagStyle: z?.tagStyle || "free",
                    discountPrice: z?._memoq?.discountPrice,
                    originalPrice: z?._memoq?.originalPrice
                  })]
                }), (0, u.jsx)(c.TinaParser, {
                  components: t,
                  tina: {
                    payload: a
                  }
                })]
              })]
            })
          })
        })
      }
    },
    1581: (e, t, a) => {
      a.d(t, {
        Z: () => c
      });
      var s = a(4932),
        i = a(4111),
        n = a(6160);
      var d = a(9813);
      const c = e => {
        let {
          textOverlayProps: t,
          title: a,
          size: c,
          expandedView: r = !1,
          children: o,
          pricingOptions: l
        } = e;
        const [m] = (e => {
          let {
            hasTextOverlay: t,
            tag: a,
            collapsedHasTag: d,
            description: c,
            collapsedHasDescription: r,
            size: o,
            title: l,
            expandedView: m,
            badges: p
          } = e;
          const [u, g] = (0, s.useState)(null), h = (0, s.useMemo)((() => {
            if (!t) return null;
            const e = "sm" !== o && r;
            return (0, n.jsx)(i.Z, {
              title: l,
              hasTag: d,
              tag: a,
              hasDescription: e,
              description: c,
              fadesOut: m,
              badges: p
            })
          }), [t, a, d, c, r, o, l, m, p]);
          return (0, s.useEffect)((() => {
            g(h)
          }), [h]), [u, g]
        })({
          ...t,
          size: c,
          title: a,
          expandedView: r
        }), p = void 0 !== l;
        return (0, n.jsxs)("header", {
          className: "d82452706eccb7b8abf1ce2359a28e402c7a",
          children: [s.Children.map(o, (e => (0, s.cloneElement)(e, {
            title: a,
            size: c,
            expandedView: r
          }))), m, p && (0, n.jsx)(d.Z, {
            title: a,
            tag: l?._memoq?.tag,
            tagStyle: l?.tagStyle || "free",
            discountPrice: l?._memoq?.discountPrice,
            originalPrice: l?._memoq?.originalPrice
          })]
        })
      }
    },
    3684: (e, t, a) => {
      a.d(t, {
        Z: () => g
      });
      var s = a(4932),
        i = a(8976),
        n = a(420),
        d = a.n(n),
        c = a(9542),
        r = a(2794),
        o = a(3102),
        l = a(8008),
        m = a(6711),
        p = a(6160);
      const u = e => {
          let {
            id: t,
            position: a,
            title: i,
            size: n = "md",
            sectionTitle: d = "",
            expandedType: c = null,
            modalProps: r = {
              content: null,
              className: "",
              contentClassName: ""
            },
            className: u,
            children: g,
            isProductCard: h,
            cardIds: b = null,
            theme: x = "none"
          } = e;
          const [v, f] = (0, o.useSearchParams)(), y = (0, s.useRef)(null), [, j] = (0, l.useModal)(), {
            track: w
          } = (0, m.useGtmTrack)(), [T, P] = (0, s.useState)(!1), C = () => {
            P(!1), j(null), f({}), w({
              event: "modal_close",
              event_category: "modal",
              event_action: "close",
              event_label: i?.toLowerCase(),
              card_id: t,
              card_name: i?.toLowerCase(),
              position: a
            }), w({
              event: "trackPageview"
            })
          }, k = () => {
            if (!r?.content || !y.current || !c || "linkout" === c) return;
            const e = y.current,
              s = window.getComputedStyle(e),
              n = parseInt(s.getPropertyValue("width"), 10),
              d = parseInt(s.getPropertyValue("height"), 10),
              o = e.getBoundingClientRect(),
              {
                content: l,
                className: m,
                contentClassName: p
              } = r;
            j({
              content: l,
              onClose: C,
              rect: o,
              width: n,
              height: d,
              className: m,
              contentClassName: p
            }), w({
              event: "trackPageview",
              link_url: window.location.href,
              card_id: t,
              card_name: i?.toLowerCase(),
              position: a
            })
          }, _ = e => {
            "linkout" !== c && (e.preventDefault(), e.stopPropagation(), t ? f({
              info: t
            }) : k(), w({
              event: "card_click",
              event_category: "card",
              event_action: "click",
              event_label: d?.toLowerCase(),
              position: a,
              card_id: t,
              card_name: i?.toLowerCase(),
              link_url: window.location.href
            }))
          };
          return (0, s.useEffect)((() => {
            T && k()
          }), [T]), (0, s.useEffect)((() => {
            P(v.get("info") === t)
          }), [v.get("info"), t]), (0, p.jsx)("div", {
            ref: y,
            onClick: _,
            onKeyUp: e => {
              _(e)
            },
            className: u,
            "data-size": n,
            "data-type": c,
            "data-product": h,
            role: "button",
            tabIndex: 0,
            "aria-label": i,
            children: g
          })
        },
        g = e => {
          let {
            payload: t,
            prod: a,
            images: n,
            size: o,
            title: l,
            initial: m,
            animate: g,
            variants: h,
            id: b,
            position: x,
            sectionTitle: v,
            expandedType: f,
            context: y,
            children: j,
            expandedCardContents: w,
            textOverlayProps: T = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            deckProps: P = {},
            modalProps: C = [],
            theme: k,
            cardIds: _,
            pricingOptions: N
          } = e;
          const z = (0, c.useTinaComponents)(),
            O = void 0 !== N,
            Z = (0, s.useMemo)((() => ({
              ...z,
              HTMLElement: i.HTMLElement,
              ImageWithBadge: i.ImageWithBadge,
              Carousel: i.Carousel,
              GroupOfItems: d()
            })), [z]),
            L = (0, s.useMemo)((() => (0, p.jsx)(r.Z, {
              type: f,
              components: Z,
              payload: t,
              prod: a,
              images: n,
              size: o,
              title: l,
              context: y,
              textOverlayProps: T,
              initial: m,
              animate: g,
              variants: h,
              theme: k,
              cardIds: _,
              pricingOptions: N,
              id: b,
              children: w
            })), [f, n, a, o, l, T, w, m, g, h, Z, t]);
          return (0, p.jsx)(u, {
            id: b,
            position: x,
            sectionTitle: v,
            title: l,
            size: o,
            expandedType: f,
            images: n,
            deckProps: P,
            modalProps: {
              content: L,
              ...C
            },
            className: "d82452706eccb7b8d44e1aa953059f5cf739",
            isProductCard: O,
            children: j
          })
        }
    },
    9361: (e, t, a) => {
      a.d(t, {
        Z: () => h
      });
      var s = a(4932),
        i = a(9542),
        n = a(559),
        d = a(8976);
      const c = {
        layeredImageFrame: "d82452706eccb7b8be654799b10be1d2683c",
        layered: "d82452706eccb7b8ddb6c868927fc40f5dec",
        foreground: "d82452706eccb7b8d7e710282847fb9224de",
        imageMask: "d82452706eccb7b8ffc0a2a4179a84c1734b",
        logo: "d82452706eccb7b8fa4275085d6c272146c2",
        "sm-horizontal": "d82452706eccb7b8c7c57379e39dc9e34690"
      };
      var r = a(6160);
      const {
        LiteMotion: o,
        Animations: l
      } = d.framer, {
        getVariant: m,
        variants: p,
        transitions: u
      } = l, g = e => {
        let {
          image: t,
          i: a,
          prod: s
        } = e;
        const {
          alt: i,
          src: d
        } = (0, n.useImageParser)({
          ...t,
          prod: s
        });
        return (0, r.jsx)("img", {
          src: d.mobile,
          alt: i ?? "",
          style: {
            "--z-index": a
          }
        })
      }, h = e => {
        let {
          images: t = [],
          className: a = "",
          prod: n = !1,
          expandedView: d = !1,
          style: l = {}
        } = e;
        const [h, b] = (0, s.useState)({
          height: window.innerHeight,
          width: window.innerWidth
        });
        (0, s.useEffect)((() => {
          function e() {
            b({
              height: window.innerHeight,
              width: window.innerWidth
            })
          }
          return window.addEventListener("resize", e), () => {
            window.removeEventListener("resize", e)
          }
        }), [h]);
        const x = (0, s.useMemo)((() => t?.length && 0 !== t.length ? t.map((e => (0, r.jsx)(o, {
          className: (0, i.classList)(c[e?.specialClass] ?? c.imageMask, c[e?.sizeClass], e.className),
          variants: m(e?.specialClass ?? "imageMask", d ? "expanded" : "collapsed"),
          initial: "initial",
          animate: "animate",
          transition: u.cardOpen,
          children: (0, r.jsx)(g, {
            image: e,
            prod: n
          })
        }, e.key))) : null), [t, h, d, n]);
        return (0, r.jsx)(o, {
          className: (0, i.classList)(c.layeredImageFrame, t.length > 1 ? c.layered : c.flat, a),
          style: l,
          initial: p.fade.in.initial,
          animate: p.fade.in.animate,
          transition: u.instantFade,
          "data-expanded-view": d,
          children: x
        })
      }
    },
    2174: (e, t, a) => {
      a.d(t, {
        Z: () => d
      });
      var s = a(8976),
        i = a(6711),
        n = a(6160);
      const d = e => {
        let {
          expandedType: t,
          to: a,
          children: d,
          style: c,
          sectionTitle: r = "",
          id: o,
          cardTitle: l,
          position: m
        } = e;
        const {
          track: p
        } = (0, i.useGtmTrack)();
        return "linkout" === t && a ? (0, n.jsx)(s.A, {
          to: a,
          style: c,
          target: a?.startsWith("http") ? "_blank" : "_self",
          onClick: () => p({
            event: "card_click",
            event_action: "click",
            event_category: "card",
            event_label: r,
            link_url: a,
            card_id: o,
            card_name: l,
            element_placement: r,
            position: m
          }),
          children: d
        }) : d
      }
    },
    9813: (e, t, a) => {
      a.d(t, {
        Z: () => n
      });
      var s = a(4932);
      var i = a(6160);
      const n = e => {
        let {
          title: t,
          showTitle: a = !0,
          showBackground: n = !0,
          tag: d,
          tagStyle: c,
          discountPrice: r,
          originalPrice: o,
          setPricingContainerHeight: l = null
        } = e;
        const m = (0, s.createRef)();
        return (0, i.jsxs)("div", {
          className: "d82452706eccb7b8b87b1cad353b616da6a4",
          ref: m,
          "data-show-background": n,
          children: [a && (0, i.jsx)("span", {
            className: "d82452706eccb7b8c42eda1240c596f0d785",
            children: t
          }), (0, i.jsxs)("div", {
            className: "d82452706eccb7b8b0f482f2d0f16c294d3c",
            children: [(0, i.jsx)("span", {
              className: "d82452706eccb7b8a7aa97d72858d6ca3f16",
              "data-tag-style": c || "free",
              children: d
            }), (0, i.jsx)("span", {
              className: "d82452706eccb7b8bda97786d5063ef9b8f6",
              children: r
            }), (0, i.jsx)("span", {
              className: "d82452706eccb7b8c235f619535bec335f09",
              children: o
            })]
          })]
        })
      }
    },
    4111: (e, t, a) => {
      a.d(t, {
        Z: () => m
      });
      var s = a(8976),
        i = a(5500);
      const n = {
        textOverlay: "d82452706eccb7b8b8bb24e78a7e5e3849fd",
        content: "d82452706eccb7b8a62c2da90114215ae3c8"
      };
      var d = a(6160);
      const {
        LiteMotion: c,
        Animations: r
      } = s.framer, {
        variants: o,
        transitions: l
      } = r, m = e => {
        let {
          title: t,
          hasTag: a,
          tag: s,
          hasDescription: r,
          description: m,
          fadesOut: p = !1,
          badges: u
        } = e;
        return (0, d.jsx)(c, {
          initial: o.fade.out.initial,
          animate: {
            opacity: p ? 0 : 1
          },
          transition: l.fade,
          className: n.textOverlay,
          children: (0, d.jsxs)("div", {
            className: n.content,
            children: [(0, d.jsx)(i.Z, {
              hasTag: a,
              tag: s,
              badges: u?.filter((e => e?.isPrimary))
            }), (0, d.jsx)("h3", {
              children: t
            }), r && m && (0, d.jsx)("div", {
              className: n.description,
              children: m
            })]
          })
        })
      }
    },
    8811: (e, t, a) => {
      a.d(t, {
        Z: () => d
      });
      var s = a(4932),
        i = a(8976),
        n = a(6160);
      const d = e => {
        let {
          images: t,
          title: a,
          expandedView: d,
          variants: c,
          transition: r
        } = e;
        const o = (0, s.useMemo)((() => t && 0 !== t?.length ? t.map((e => e?.image?.sources ? (0, n.jsx)(i.ImageWithBadge, {
          ...e,
          style: {
            "--object-position": e?.objectPosition ?? ""
          }
        }) : null)) : null), [t]);
        return !o?.length || o?.length < 1 ? null : 1 === o.length ? o : (0, n.jsx)(i.ThumbsGallery, {
          slideChildren: o,
          title: a,
          navigation: d,
          thumbsVisible: d,
          spaceBetween: 0,
          variants: c,
          transition: r
        })
      }
    },
    498: (e, t, a) => {
      a.d(t, {
        Z: () => u
      });
      var s = a(4932),
        i = a(9542),
        n = a(8976),
        d = a(3684),
        c = a(1581),
        r = a(9361),
        o = a(2174);
      const l = {
        customModalContent: "d82452706eccb7b8eaaa89d602e502f9ab5a",
        content: "d82452706eccb7b8c1f66a431c932dee33fd"
      };
      var m = a(6160);
      const {
        variants: p
      } = n.framer.Animations, u = e => {
        let {
          id: t,
          title: a,
          content: n,
          size: u = "md",
          expandedType: g = "short",
          textOverlayProps: h = {
            hasTextOverlay: !1,
            tag: "",
            collapsedHasTag: !1,
            expandedHasTag: !1,
            description: "",
            collapsedHasDescription: !1
          },
          images: b = [],
          deckProps: x = {},
          to: v = null,
          tina: f = {},
          position: y = 0,
          sectionTitle: j = "",
          theme: w,
          pricingOptions: T,
          cardIds: P
        } = e;
        const C = (0, i.useTinaPayload)(),
          k = f?.payload?.meta?.cdn ?? C?.meta?.prod ?? !1,
          [_, N] = (0, s.useState)(x?.size ?? u),
          z = void 0 !== T;
        return (0, s.useEffect)((() => {
          N(x?.size ?? u)
        }), [x?.size, u]), (0, m.jsx)(d.Z, {
          id: t,
          title: a,
          size: _,
          expandedType: g,
          images: b,
          deckProps: x,
          prod: k,
          payload: {
            content: n,
            meta: {}
          },
          variants: p.plainCard,
          textOverlayProps: h,
          modalProps: {
            className: l.customModal,
            contentClassName: l.customModalContent
          },
          expandedCardContents: (0, m.jsx)(r.Z, {
            images: b,
            prod: k,
            expandedView: !0
          }),
          position: y,
          sectionTitle: j,
          theme: w,
          cardIds: P,
          pricingOptions: T,
          children: (0, m.jsx)(o.Z, {
            expandedType: g,
            to: v,
            sectionTitle: j,
            id: t,
            cardTitle: a,
            position: y,
            children: (0, m.jsx)("div", {
              className: l.content,
              "data-product": z,
              children: (0, m.jsx)(c.Z, {
                title: a,
                size: _,
                textOverlayProps: h,
                pricingOptions: T,
                children: (0, m.jsx)(r.Z, {
                  images: b,
                  prod: k
                })
              })
            })
          })
        })
      }
    },
    3614: (e, t, a) => {
      a.d(t, {
        Z: () => u
      });
      var s = a(4932),
        i = a(9542),
        n = a(8976),
        d = a(3684),
        c = a(1581),
        r = a(8811);
      const o = {
        customModalContent: "d82452706eccb7b8e9e7ee7cbb3a089710cc"
      };
      var l = a(6160);
      const {
        transitions: m,
        variants: p
      } = n.framer.Animations, u = e => {
        let {
          id: t,
          title: a,
          content: n,
          size: u = "md",
          expandedType: g = "gallery",
          textOverlayProps: h = {
            hasTextOverlay: !1,
            tag: "",
            collapsedHasTag: !1,
            expandedHasTag: !1,
            description: "",
            collapsedHasDescription: !1
          },
          images: b = [],
          deckProps: x = {},
          tina: v = {},
          payload: f,
          position: y = 0,
          sectionTitle: j = ""
        } = e;
        const w = (0, i.useTinaPayload)(),
          T = f ?? w,
          P = v?.payload?.meta?.cdn ?? T?.meta?.prod ?? !1,
          C = ((e, t) => e?.map((e => e?.image ? {
            ...e,
            image: {
              ...e.image,
              prod: t
            }
          } : e)))(b, P),
          [k, _] = (0, s.useState)(x?.size ?? u),
          {
            parent: N,
            main: z,
            thumbs: O
          } = p?.cardWithImageGallery?.gallery ?? {};
        return (0, s.useEffect)((() => {
          _(x?.size ?? u)
        }), [x?.size, u]), (0, l.jsx)(d.Z, {
          id: t,
          position: y,
          sectionTitle: j,
          payload: {
            content: n,
            meta: {},
            payload: T
          },
          title: a,
          size: k,
          expandedType: g,
          images: C,
          deckProps: x,
          prod: P,
          variants: p.cardWithImageGallery,
          textOverlayProps: h,
          modalProps: {
            className: o.customModal,
            contentClassName: o.customModalContent
          },
          expandedCardContents: (0, l.jsx)(r.Z, {
            images: C,
            title: a,
            navigation: !0,
            thumbsVisible: !0,
            variants: {
              parent: N,
              main: z,
              thumbs: O
            },
            transition: {
              parent: m.cardOpen,
              main: m.cardOpen,
              thumbs: m.cardOpen
            }
          }),
          children: (0, l.jsx)("div", {
            className: o.content,
            children: (0, l.jsx)(c.Z, {
              title: a,
              size: k,
              textOverlayProps: h,
              children: (0, l.jsx)(r.Z, {
                images: C,
                title: a,
                navigation: !1,
                thumbsVisible: !1
              })
            })
          })
        })
      }
    },
    1324: (e, t, a) => {
      a.d(t, {
        Z: () => d
      });
      var s = a(8976),
        i = a(9542);
      var n = a(6160);
      const d = e => {
        let {
          title: t,
          content: a,
          size: d = "md",
          badgeText: c
        } = e;
        const r = {
          ...(0, i.useTinaComponents)(),
          HTMLElement: s.HTMLElement,
          UnorderedList: s.UnorderedList,
          ListItem: s.ListItem
        };
        return (0, n.jsx)("div", {
          className: "d82452706eccb7b8e881a80105cd524eb2bf",
          "data-size": d,
          children: (0, n.jsxs)("div", {
            className: "d82452706eccb7b8b950e84d17e2720a8c4a",
            children: [c && (0, n.jsx)("div", {
              className: "d82452706eccb7b8d4d1e516f8a980e2ce3a",
              children: c
            }), (0, n.jsxs)("div", {
              className: "d82452706eccb7b8afc8dfd2b7b7731fdc0d",
              children: [t && (0, n.jsx)("h3", {
                children: t
              }), (0, n.jsx)(i.TinaParser, {
                components: r,
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
    }
  }
]);