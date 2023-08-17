"use strict";
(self.webpackChunk_rockstargames_modules_core_card = self.webpackChunk_rockstargames_modules_core_card || []).push([
  [165], {
    2: (e, a, t) => {
      t.d(a, {
        Z: () => v
      });
      var s = t(4932),
        i = t(3653),
        n = t.n(i),
        r = t(8976),
        d = t(9542),
        c = t(498),
        o = t(3614),
        l = t(1324);
      var p = t(6160);
      const {
        Gen9CoreCarousel: m,
        framer: u,
        useTinaModuleFetchByIds: b,
        withSimpleErrorBoundary: g
      } = r, h = {
        Card: c.Z,
        CardWithImageGallery: o.Z,
        TextCard: l.Z,
        ...r
      }, v = u.withFadeIn(g((e => {
        let {
          cards: a = [],
          size: t,
          title: i,
          description: r,
          customSlidesPerView: c = null,
          theme: o = "none",
          cardSizeBreakpoints: l = {},
          customAspectRatio: u = "3/1"
        } = e;
        const g = (0, s.useRef)(null),
          v = n().map(a, "id"),
          x = b({
            ids: v
          }),
          [f, y] = (0, s.useState)(c);
        (0, s.useEffect)((() => {
          if (!g.current) return;
          const e = () => {
            const e = c || window.getComputedStyle(g.current).getPropertyValue("--slides-per-view");
            y(e)
          };
          return window.addEventListener("resize", e), e(), () => {
            window.removeEventListener("resize", e)
          }
        }));
        const C = (0, s.useMemo)((() => {
          let e = 0;
          return x ? x.reduce(((a, s) => {
            if (s) {
              const {
                id: r,
                tina: c
              } = s, l = n().clone(c);
              n().set(l, "payload.meta.id", r), a.push((0, p.jsx)(d.TinaParser, {
                components: h,
                tina: l,
                componentProps: {
                  deckProps: {
                    size: t
                  },
                  tina: l,
                  id: r,
                  position: e,
                  sectionTitle: i,
                  theme: o,
                  cardIds: v
                }
              }, r)), e += 1
            }
            return a
          }), []) : null
        }), [x, t]);
        return (0, p.jsx)("div", {
          className: "d82452706eccb7b8cd5e4502d7fca0835dd4",
          "data-theme": o,
          ref: g,
          children: (0, p.jsx)(m, {
            description: r,
            size: t,
            cardSizeBreakpoints: l,
            slideChildren: C,
            title: i,
            customSlidesPerView: f,
            customAspectRatio: u
          })
        })
      })))
    },
    5500: (e, a, t) => {
      t.d(a, {
        Z: () => n
      });
      var s = t(8976);
      var i = t(6160);
      const n = e => {
        let {
          hasTag: a = !1,
          tag: t = null,
          badges: n = []
        } = e;
        return a && t ? (0, i.jsx)("div", {
          className: "d82452706eccb7b8f3c82db691085629ecd1",
          children: t
        }) : a && n && n?.length > 0 ? (0, i.jsx)("div", {
          className: "d82452706eccb7b8f6e8e857db521f2f02c2",
          children: n.map((e => (0, i.jsx)(s.Badge, {
            ...e
          }, e?.text)))
        }) : null
      }
    },
    2794: (e, a, t) => {
      t.d(a, {
        Z: () => v
      });
      var s = t(4932),
        i = t(3653),
        n = t.n(i),
        r = t(3102),
        d = t(9542),
        c = t(8976),
        o = t(9929),
        l = t(5500),
        p = t(1581),
        m = t(9813);
      var u = t(6160);
      const {
        LiteMotion: b,
        Animations: g
      } = c.framer, {
        transitions: h
      } = g, v = e => {
        let {
          components: a,
          payload: t,
          prod: i,
          size: g,
          title: v,
          initial: x = "initial",
          animate: f = "animate",
          variants: y,
          type: C = null,
          context: j = null,
          textOverlayProps: P,
          className: w,
          children: T,
          theme: k = "none",
          cardIds: _,
          id: N,
          pricingOptions: z,
          isCoverCard: O
        } = e;
        const Z = (0, s.useRef)(),
          L = (0, s.useRef)(),
          {
            tag: I,
            expandedHasTag: M,
            badges: S
          } = P;
        n().set(t, "meta.prod", i);
        const [, E] = (0, r.useSearchParams)(), [H, V] = (0, s.useState)(null), B = void 0 !== z?.hasPricingOptions, W = T?.props?.images.length > 0;
        let R = (0, u.jsx)("h1", {
          children: v
        });
        return O && (R = null), (0, s.useEffect)((() => {
          null !== H && H < _?.length && H > -1 && E({
            info: _[H]
          })
        }), [H, _]), (0, s.useEffect)((() => {
          _?.forEach(((e, a) => {
            e === N && V(a)
          }))
        }), [_, N]), (0, u.jsx)(o.DataLayerProvider, {
          card_id: N,
          card_name: v?.toLowerCase(),
          children: (0, u.jsx)(c.ScrollTracker, {
            threshold: [25, 50, 75, 90, 100],
            trackRef: "long" === C ? Z : L,
            children: (0, u.jsxs)(b, {
              ref: Z,
              initial: x,
              animate: f,
              variants: y.expanded,
              transition: h.cardOpen,
              className: (0, d.classList)("d82452706eccb7b8b26588866b3f8cf68385", w),
              "data-type": C,
              "data-size": g,
              "data-product": B || !1,
              "data-covercard": O || !1,
              "data-context": j,
              children: [W && (0, u.jsx)(p.Z, {
                size: g,
                title: v,
                textOverlayProps: P,
                expandedView: !0,
                pricingOptions: z,
                isCoverCard: O,
                children: T
              }), (0, u.jsxs)(b, {
                ref: L,
                className: "d82452706eccb7b8c86efe7469f4c7bea32c",
                variants: y.expandedContents,
                transition: h.afterCardOpen,
                "data-theme": k,
                children: [(0, u.jsxs)("div", {
                  className: "d82452706eccb7b8d606f8b2c00b2c32599e",
                  children: [(0, u.jsx)(l.Z, {
                    hasTag: M,
                    tag: I,
                    badges: S
                  }), R, B && (0, u.jsx)(m.Z, {
                    title: v,
                    showTitle: !1,
                    showBackground: !1,
                    tag: z?._memoq?.tag,
                    tagStyle: z?.tagStyle || "free",
                    discountPrice: z?._memoq?.discountPrice,
                    originalPrice: z?._memoq?.originalPrice
                  })]
                }), (0, u.jsx)(d.TinaParser, {
                  components: a,
                  tina: {
                    payload: t
                  }
                })]
              })]
            })
          })
        })
      }
    },
    1581: (e, a, t) => {
      t.d(a, {
        Z: () => d
      });
      var s = t(4932),
        i = t(4111),
        n = t(6160);
      var r = t(9813);
      const d = e => {
        let {
          textOverlayProps: a,
          title: t,
          size: d,
          expandedView: c = !1,
          children: o,
          pricingOptions: l,
          isCoverCard: p = !1
        } = e;
        const [m] = (e => {
          let {
            hasTextOverlay: a,
            tag: t,
            collapsedHasTag: r,
            description: d,
            collapsedHasDescription: c,
            size: o,
            title: l,
            expandedView: p,
            badges: m
          } = e;
          const [u, b] = (0, s.useState)(null), g = (0, s.useMemo)((() => {
            if (!a) return null;
            const e = "sm" !== o && c;
            return (0, n.jsx)(i.Z, {
              title: l,
              hasTag: r,
              tag: t,
              hasDescription: e,
              description: d,
              fadesOut: p,
              badges: m
            })
          }), [a, t, r, d, c, o, l, p, m]);
          return (0, s.useEffect)((() => {
            b(g)
          }), [g]), [u, b]
        })({
          ...a,
          size: d,
          title: t,
          expandedView: c
        }), u = void 0 !== l?.hasPricingOptions;
        return (0, n.jsxs)("header", {
          className: "d82452706eccb7b8abf1ce2359a28e402c7a",
          "data-is-covercard": p,
          children: [s.Children.map(o, (e => (0, s.cloneElement)(e, {
            title: t,
            size: d,
            expandedView: c
          }))), m, u && (0, n.jsx)(r.Z, {
            title: t,
            tag: l?._memoq?.tag,
            tagStyle: l?.tagStyle || "free",
            discountPrice: l?._memoq?.discountPrice,
            originalPrice: l?._memoq?.originalPrice
          })]
        })
      }
    },
    3684: (e, a, t) => {
      t.d(a, {
        Z: () => g
      });
      var s = t(4932),
        i = t(8976),
        n = t(420),
        r = t.n(n),
        d = t(9542),
        c = t(2794),
        o = t(3102),
        l = t(8008),
        p = t(6711),
        m = t(6160);
      const u = e => {
          let {
            id: a,
            position: t,
            title: i,
            size: n = "md",
            sectionTitle: r = "",
            expandedType: d = null,
            modalProps: c = {
              content: null,
              className: "",
              contentClassName: ""
            },
            className: u,
            children: b,
            isProductCard: g,
            cardIds: h = null,
            theme: v = "none",
            isCoverCard: x
          } = e;
          const [f, y] = (0, o.useSearchParams)(), C = (0, s.useRef)(null), [, j] = (0, l.useModal)(), {
            track: P
          } = (0, p.useGtmTrack)(), [w, T] = (0, s.useState)(!1), k = () => {
            T(!1), j(null), y({}), P({
              event: "modal_close",
              event_category: "modal",
              event_action: "close",
              event_label: i?.toLowerCase(),
              card_id: a,
              card_name: i?.toLowerCase(),
              position: t
            }), P({
              event: "trackPageview"
            })
          }, _ = () => {
            if (!c?.content || !C.current || !d || "linkout" === d) return;
            const e = C.current,
              s = window.getComputedStyle(e),
              n = parseInt(s.getPropertyValue("width"), 10),
              r = parseInt(s.getPropertyValue("height"), 10),
              o = e.getBoundingClientRect(),
              {
                content: l,
                className: p,
                contentClassName: m
              } = c;
            j({
              content: l,
              onClose: k,
              rect: o,
              width: n,
              height: r,
              className: p,
              contentClassName: m
            }), P({
              event: "trackPageview",
              link_url: window.location.href,
              card_id: a,
              card_name: i?.toLowerCase(),
              position: t
            })
          }, N = e => {
            x && "button" !== e.target.type || "linkout" !== d && (e.preventDefault(), e.stopPropagation(), a ? y({
              info: a
            }) : _(), P({
              event: "card_click",
              event_category: "card",
              event_action: "click",
              event_label: r?.toLowerCase(),
              position: t,
              card_id: a,
              card_name: i?.toLowerCase(),
              link_url: window.location.href
            }))
          };
          return (0, s.useEffect)((() => {
            w && _()
          }), [w]), (0, s.useEffect)((() => {
            T(f.get("info") === a)
          }), [f.get("info"), a]), (0, m.jsx)("div", {
            ref: C,
            onClick: N,
            onKeyUp: e => {
              N(e)
            },
            className: u,
            "data-size": n,
            "data-type": d,
            "data-product": g,
            role: "button",
            tabIndex: 0,
            "aria-label": i,
            children: b
          })
        },
        b = {
          card: "d82452706eccb7b8d44e1aa953059f5cf739",
          content: "d82452706eccb7b8ad7f915244524b0b3e74",
          expandedContent: "d82452706eccb7b8e98bb7ffca8939f0b817",
          text: "d82452706eccb7b8b2bf0078b6a4193e97ad",
          imageHolder: "d82452706eccb7b8b14d98c26bd35d8ed13b",
          coverCardWrapper: "d82452706eccb7b8c33a106136fc61bb3abe"
        },
        g = e => {
          let {
            payload: a,
            prod: t,
            images: n,
            size: o,
            title: l,
            initial: p,
            animate: g,
            variants: h,
            id: v,
            position: x,
            sectionTitle: f,
            expandedType: y,
            context: C,
            children: j,
            expandedCardContents: P,
            textOverlayProps: w = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            deckProps: T = {},
            modalProps: k = [],
            theme: _,
            cardIds: N,
            pricingOptions: z,
            isCoverCard: O = !1
          } = e;
          const Z = (0, d.useTinaComponents)(),
            L = void 0 !== z?.hasPricingOptions,
            I = (0, s.useMemo)((() => ({
              ...Z,
              HTMLElement: i.HTMLElement,
              ImageWithBadge: i.ImageWithBadge,
              Carousel: i.Carousel,
              GroupOfItems: r()
            })), [Z]),
            M = (0, s.useMemo)((() => (0, m.jsx)(c.Z, {
              type: y,
              components: I,
              payload: a,
              prod: t,
              images: n,
              size: o,
              title: l,
              context: C,
              textOverlayProps: w,
              initial: p,
              animate: g,
              variants: h,
              theme: _,
              cardIds: N,
              pricingOptions: z,
              id: v,
              isCoverCard: O,
              children: P
            })), [y, n, t, o, l, w, P, p, g, h, I, a]);
          let S = b.card;
          return S = [b.card, O ? b.coverCardWrapper : ""].join(" "), (0, m.jsx)(u, {
            id: v,
            position: x,
            sectionTitle: f,
            title: l,
            size: o,
            expandedType: y,
            images: n,
            deckProps: T,
            modalProps: {
              content: M,
              ...k
            },
            className: S,
            isProductCard: L,
            isCoverCard: O,
            children: j
          })
        }
    },
    9361: (e, a, t) => {
      t.d(a, {
        Z: () => g
      });
      var s = t(4932),
        i = t(9542),
        n = t(559),
        r = t(8976);
      const d = {
        layeredImageFrame: "d82452706eccb7b8be654799b10be1d2683c",
        layered: "d82452706eccb7b8ddb6c868927fc40f5dec",
        foreground: "d82452706eccb7b8d7e710282847fb9224de",
        imageMask: "d82452706eccb7b8ffc0a2a4179a84c1734b",
        logo: "d82452706eccb7b8fa4275085d6c272146c2",
        "sm-horizontal": "d82452706eccb7b8c7c57379e39dc9e34690"
      };
      var c = t(6160);
      const {
        LiteMotion: o,
        Animations: l
      } = r.framer, {
        getVariant: p,
        variants: m,
        transitions: u
      } = l, b = e => {
        let {
          image: a,
          i: t,
          prod: s
        } = e;
        const {
          alt: i,
          src: r
        } = (0, n.useImageParser)({
          ...a,
          prod: s
        });
        return (0, c.jsx)("img", {
          src: r.mobile,
          alt: i ?? "",
          style: {
            "--z-index": t
          }
        })
      }, g = e => {
        let {
          images: a = [],
          className: t = "",
          prod: n = !1,
          expandedView: r = !1,
          style: l = {}
        } = e;
        const [g, h] = (0, s.useState)({
          height: window.innerHeight,
          width: window.innerWidth
        });
        (0, s.useEffect)((() => {
          function e() {
            h({
              height: window.innerHeight,
              width: window.innerWidth
            })
          }
          return window.addEventListener("resize", e), () => {
            window.removeEventListener("resize", e)
          }
        }), [g]);
        const v = (0, s.useMemo)((() => a?.length && 0 !== a.length ? a.map((e => (0, c.jsx)(o, {
          className: (0, i.classList)(d[e?.specialClass] ?? d.imageMask, d[e?.sizeClass], e.className),
          variants: p(e?.specialClass ?? "imageMask", r ? "expanded" : "collapsed"),
          initial: "initial",
          animate: "animate",
          transition: u.cardOpen,
          children: (0, c.jsx)(b, {
            image: e,
            prod: n
          })
        }, e.key))) : null), [a, g, r, n]);
        return (0, c.jsx)(o, {
          className: (0, i.classList)(d.layeredImageFrame, a.length > 1 ? d.layered : d.flat, t),
          style: l,
          initial: m.fade.in.initial,
          animate: m.fade.in.animate,
          transition: u.instantFade,
          "data-expanded-view": r,
          children: v
        })
      }
    },
    2174: (e, a, t) => {
      t.d(a, {
        Z: () => r
      });
      var s = t(8976),
        i = t(6711),
        n = t(6160);
      const r = e => {
        let {
          expandedType: a,
          to: t,
          children: r,
          style: d,
          sectionTitle: c = "",
          id: o,
          cardTitle: l,
          position: p
        } = e;
        const {
          track: m
        } = (0, i.useGtmTrack)();
        return "linkout" === a && t ? (0, n.jsx)(s.A, {
          to: t,
          style: d,
          target: t?.startsWith("http") ? "_blank" : "_self",
          onClick: () => m({
            event: "card_click",
            event_action: "click",
            event_category: "card",
            event_label: c,
            link_url: t,
            card_id: o,
            card_name: l,
            element_placement: c,
            position: p
          }),
          children: r
        }) : r
      }
    },
    9813: (e, a, t) => {
      t.d(a, {
        Z: () => n
      });
      var s = t(4932);
      var i = t(6160);
      const n = e => {
        let {
          title: a,
          showTitle: t = !0,
          showBackground: n = !0,
          tag: r,
          tagStyle: d,
          discountPrice: c,
          originalPrice: o,
          setPricingContainerHeight: l = null
        } = e;
        const p = (0, s.createRef)();
        return (0, i.jsxs)("div", {
          className: "d82452706eccb7b8b87b1cad353b616da6a4",
          ref: p,
          "data-show-background": n,
          children: [t && (0, i.jsx)("span", {
            className: "d82452706eccb7b8c42eda1240c596f0d785",
            children: a
          }), (0, i.jsxs)("div", {
            className: "d82452706eccb7b8b0f482f2d0f16c294d3c",
            children: [(0, i.jsx)("span", {
              className: "d82452706eccb7b8a7aa97d72858d6ca3f16",
              "data-tag-style": d || "free",
              children: r
            }), (0, i.jsx)("span", {
              className: "d82452706eccb7b8bda97786d5063ef9b8f6",
              children: c
            }), (0, i.jsx)("span", {
              className: "d82452706eccb7b8c235f619535bec335f09",
              children: o
            })]
          })]
        })
      }
    },
    4111: (e, a, t) => {
      t.d(a, {
        Z: () => p
      });
      var s = t(8976),
        i = t(5500);
      const n = {
        textOverlay: "d82452706eccb7b8b8bb24e78a7e5e3849fd",
        content: "d82452706eccb7b8a62c2da90114215ae3c8"
      };
      var r = t(6160);
      const {
        LiteMotion: d,
        Animations: c
      } = s.framer, {
        variants: o,
        transitions: l
      } = c, p = e => {
        let {
          title: a,
          hasTag: t,
          tag: s,
          hasDescription: c,
          description: p,
          fadesOut: m = !1,
          badges: u
        } = e;
        return (0, r.jsx)(d, {
          initial: o.fade.out.initial,
          animate: {
            opacity: m ? 0 : 1
          },
          transition: l.fade,
          className: n.textOverlay,
          children: (0, r.jsxs)("div", {
            className: n.content,
            children: [(0, r.jsx)(i.Z, {
              hasTag: t,
              tag: s,
              badges: u?.filter((e => e?.isPrimary))
            }), (0, r.jsx)("h3", {
              children: a
            }), c && p && (0, r.jsx)("div", {
              className: n.description,
              children: p
            })]
          })
        })
      }
    },
    8811: (e, a, t) => {
      t.d(a, {
        Z: () => r
      });
      var s = t(4932),
        i = t(8976),
        n = t(6160);
      const r = e => {
        let {
          images: a,
          title: t,
          expandedView: r,
          variants: d,
          transition: c
        } = e;
        const o = (0, s.useMemo)((() => a && 0 !== a?.length ? a.map((e => e?.image?.sources ? (0, n.jsx)(i.ImageWithBadge, {
          ...e,
          style: {
            "--object-position": e?.objectPosition ?? ""
          }
        }) : null)) : null), [a]);
        return !o?.length || o?.length < 1 ? null : 1 === o.length ? o : (0, n.jsx)(i.ThumbsGallery, {
          slideChildren: o,
          title: t,
          navigation: r,
          thumbsVisible: r,
          spaceBetween: 0,
          variants: d,
          transition: c
        })
      }
    },
    498: (e, a, t) => {
      t.d(a, {
        Z: () => u
      });
      var s = t(4932),
        i = t(9542),
        n = t(8976),
        r = t(3684),
        d = t(1581),
        c = t(9361),
        o = t(2174);
      const l = {
        customModalContent: "d82452706eccb7b8eaaa89d602e502f9ab5a",
        content: "d82452706eccb7b8c1f66a431c932dee33fd"
      };
      var p = t(6160);
      const {
        variants: m
      } = n.framer.Animations, u = e => {
        let {
          id: a,
          title: t,
          content: n,
          size: u = "md",
          expandedType: b = "short",
          textOverlayProps: g = {
            hasTextOverlay: !1,
            tag: "",
            collapsedHasTag: !1,
            expandedHasTag: !1,
            description: "",
            collapsedHasDescription: !1
          },
          images: h = [],
          deckProps: v = {},
          to: x = null,
          tina: f = {},
          position: y = 0,
          sectionTitle: C = "",
          theme: j,
          pricingOptions: P,
          cardIds: w
        } = e;
        const T = (0, i.useTinaPayload)(),
          k = f?.payload?.meta?.cdn ?? T?.meta?.prod ?? !1,
          [_, N] = (0, s.useState)(v?.size ?? u),
          z = void 0 !== P?.hasPricingOptions;
        return (0, s.useEffect)((() => {
          N(v?.size ?? u)
        }), [v?.size, u]), (0, p.jsx)(r.Z, {
          id: a,
          title: t,
          size: _,
          expandedType: b,
          images: h,
          deckProps: v,
          prod: k,
          payload: {
            content: n,
            meta: {}
          },
          variants: m.plainCard,
          textOverlayProps: g,
          modalProps: {
            className: l.customModal,
            contentClassName: l.customModalContent
          },
          expandedCardContents: (0, p.jsx)(c.Z, {
            images: h,
            prod: k,
            expandedView: !0
          }),
          position: y,
          sectionTitle: C,
          theme: j,
          cardIds: w,
          pricingOptions: P,
          children: (0, p.jsx)(o.Z, {
            expandedType: b,
            to: x,
            sectionTitle: C,
            id: a,
            cardTitle: t,
            position: y,
            children: (0, p.jsx)("div", {
              className: l.content,
              "data-product": z,
              children: (0, p.jsx)(d.Z, {
                title: t,
                size: _,
                textOverlayProps: g,
                pricingOptions: P,
                children: (0, p.jsx)(c.Z, {
                  images: h,
                  prod: k
                })
              })
            })
          })
        })
      }
    },
    3614: (e, a, t) => {
      t.d(a, {
        Z: () => u
      });
      var s = t(4932),
        i = t(9542),
        n = t(8976),
        r = t(3684),
        d = t(1581),
        c = t(8811);
      const o = {
        customModalContent: "d82452706eccb7b8e9e7ee7cbb3a089710cc"
      };
      var l = t(6160);
      const {
        transitions: p,
        variants: m
      } = n.framer.Animations, u = e => {
        let {
          id: a,
          title: t,
          content: n,
          size: u = "md",
          expandedType: b = "gallery",
          textOverlayProps: g = {
            hasTextOverlay: !1,
            tag: "",
            collapsedHasTag: !1,
            expandedHasTag: !1,
            description: "",
            collapsedHasDescription: !1
          },
          images: h = [],
          deckProps: v = {},
          tina: x = {},
          payload: f,
          position: y = 0,
          sectionTitle: C = ""
        } = e;
        const j = (0, i.useTinaPayload)(),
          P = f ?? j,
          w = x?.payload?.meta?.cdn ?? P?.meta?.prod ?? !1,
          T = ((e, a) => e?.map((e => e?.image ? {
            ...e,
            image: {
              ...e.image,
              prod: a
            }
          } : e)))(h, w),
          [k, _] = (0, s.useState)(v?.size ?? u),
          {
            parent: N,
            main: z,
            thumbs: O
          } = m?.cardWithImageGallery?.gallery ?? {};
        return (0, s.useEffect)((() => {
          _(v?.size ?? u)
        }), [v?.size, u]), (0, l.jsx)(r.Z, {
          id: a,
          position: y,
          sectionTitle: C,
          payload: {
            content: n,
            meta: {},
            payload: P
          },
          title: t,
          size: k,
          expandedType: b,
          images: T,
          deckProps: v,
          prod: w,
          variants: m.cardWithImageGallery,
          textOverlayProps: g,
          modalProps: {
            className: o.customModal,
            contentClassName: o.customModalContent
          },
          expandedCardContents: (0, l.jsx)(c.Z, {
            images: T,
            title: t,
            navigation: !0,
            thumbsVisible: !0,
            variants: {
              parent: N,
              main: z,
              thumbs: O
            },
            transition: {
              parent: p.cardOpen,
              main: p.cardOpen,
              thumbs: p.cardOpen
            }
          }),
          children: (0, l.jsx)("div", {
            className: o.content,
            children: (0, l.jsx)(d.Z, {
              title: t,
              size: k,
              textOverlayProps: g,
              children: (0, l.jsx)(c.Z, {
                images: T,
                title: t,
                navigation: !1,
                thumbsVisible: !1
              })
            })
          })
        })
      }
    },
    1324: (e, a, t) => {
      t.d(a, {
        Z: () => r
      });
      var s = t(8976),
        i = t(9542);
      var n = t(6160);
      const r = e => {
        let {
          title: a,
          content: t,
          size: r = "md",
          badgeText: d
        } = e;
        const c = {
          ...(0, i.useTinaComponents)(),
          HTMLElement: s.HTMLElement,
          UnorderedList: s.UnorderedList,
          ListItem: s.ListItem
        };
        return (0, n.jsx)("div", {
          className: "d82452706eccb7b8e881a80105cd524eb2bf",
          "data-size": r,
          children: (0, n.jsxs)("div", {
            className: "d82452706eccb7b8b950e84d17e2720a8c4a",
            children: [d && (0, n.jsx)("div", {
              className: "d82452706eccb7b8d4d1e516f8a980e2ce3a",
              children: d
            }), (0, n.jsxs)("div", {
              className: "d82452706eccb7b8afc8dfd2b7b7731fdc0d",
              children: [a && (0, n.jsx)("h3", {
                children: a
              }), (0, n.jsx)(i.TinaParser, {
                components: c,
                tina: {
                  payload: {
                    content: t
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