"use strict";
(self.webpackChunk_rockstargames_modules_core_card = self.webpackChunk_rockstargames_modules_core_card || []).push([
  [219], {
    9117: (e, a, t) => {
      t.d(a, {
        Z: () => f
      });
      var s = t(822),
        i = t(948),
        n = t.n(i),
        d = t(8976),
        r = t(9542),
        c = t(8421),
        o = t(1950),
        l = t(796);
      var m = t(9706);
      const p = {
          Card: c.Z,
          CardWithImageGallery: o.Z,
          TextCard: l.Z
        },
        f = d.framer.withFadeIn((0, d.withSimpleErrorBoundary)((e => {
          let {
            cards: a = [],
            size: t,
            title: i,
            description: c,
            customSlidesPerView: o = null,
            theme: l = "none",
            cardSizeBreakpoints: f = {},
            customAspectRatio: u = "3/1"
          } = e;
          const g = (0, s.useRef)(null),
            h = n().map(a, "id"),
            x = (0, d.useTinaModuleFetchByIds)({
              ids: h
            }),
            [v, b] = (0, s.useState)(o);
          (0, s.useEffect)((() => {
            if (!g.current) return;
            const e = () => {
              const e = o || window.getComputedStyle(g.current).getPropertyValue("--slides-per-view");
              b(e)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }));
          const y = (0, s.useMemo)((() => {
            let e = 0;
            return x ? x.reduce(((a, s) => {
              if (s) {
                const {
                  id: d,
                  tina: c
                } = s, o = n().clone(c);
                n().set(o, "payload.meta.id", d), a.push((0, m.jsx)(r.TinaParser, {
                  components: p,
                  tina: o,
                  componentProps: {
                    deckProps: {
                      size: t
                    },
                    tina: o,
                    id: d,
                    position: e,
                    sectionTitle: i,
                    theme: l,
                    cardIds: h
                  }
                }, d)), e += 1
              }
              return a
            }), []) : null
          }), [x, t]);
          return (0, m.jsx)("div", {
            className: "_2b820ae1fad6c6efcd5e4502d7fca0835dd4",
            "data-theme": l,
            ref: g,
            children: (0, m.jsx)(d.Gen9CoreCarousel, {
              description: c,
              size: t,
              cardSizeBreakpoints: f,
              slideChildren: y,
              title: i,
              customSlidesPerView: v,
              customAspectRatio: u
            })
          })
        })))
    },
    5232: (e, a, t) => {
      t.d(a, {
        Z: () => n
      });
      var s = t(8976);
      var i = t(9706);
      const n = e => {
        let {
          hasTag: a = !1,
          tag: t = null,
          badges: n = []
        } = e;
        return a && t ? (0, i.jsx)("div", {
          className: "_2b820ae1fad6c6eff3c82db691085629ecd1",
          children: t
        }) : a && n && n?.length > 0 ? (0, i.jsx)("div", {
          className: "_2b820ae1fad6c6eff6e8e857db521f2f02c2",
          children: n.map((e => (0, i.jsx)(s.Badge, {
            ...e
          }, e?.text)))
        }) : null
      }
    },
    8385: (e, a, t) => {
      t.d(a, {
        Z: () => v
      });
      var s = t(822),
        i = t(948),
        n = t.n(i),
        d = t(9542),
        r = t(8976),
        c = t(6711),
        o = t(2310),
        l = t(5232),
        m = t(6634),
        p = t(5474);
      var f = t(9706);
      const {
        LiteMotion: u,
        Animations: g
      } = r.framer, {
        transitions: h
      } = g, x = e => {
        let a, {
          threshold: t,
          trackRef: s,
          callback: i,
          children: n
        } = e;
        return a = !0, (0, f.jsx)(r.ScrollTracker, {
          threshold: t,
          ref: s,
          callback: i,
          children: n
        })
      }, v = e => {
        let {
          components: a,
          payload: t,
          prod: i,
          size: r,
          title: g,
          initial: v = "initial",
          animate: b = "animate",
          variants: y,
          type: _ = null,
          context: j = null,
          textOverlayProps: T,
          className: w,
          children: P,
          theme: C = "none",
          cardIds: k,
          id: N,
          pricingOptions: z
        } = e;
        const O = (0, s.useRef)(),
          Z = (0, s.useRef)(),
          {
            tag: M,
            expandedHasTag: I,
            badges: L
          } = T;
        n().set(t, "meta.prod", i);
        const S = void 0 !== z;
        let E = !1;
        E = !0;
        const {
          track: H
        } = (0, c.useGtmTrack)(), [, V] = (0, o.useSearchParams)(), [B, G] = (0, s.useState)(null);
        return (0, s.useEffect)((() => {
          B && B < k?.length && B > -1 && V({
            info: k[B]
          })
        }), [B, k]), (0, s.useEffect)((() => {
          k?.forEach(((e, a) => {
            e === N && G(a)
          }))
        }), [k, N]), (0, f.jsx)(x, {
          threshold: [25, 50, 75, 90, 100],
          trackRef: "long" === _ ? O : Z,
          children: (0, f.jsxs)(u, {
            ref: O,
            initial: v,
            animate: b,
            variants: y.expanded,
            transition: h.cardOpen,
            className: (0, d.classList)("_2b820ae1fad6c6efb26588866b3f8cf68385", w),
            "data-type": _,
            "data-size": r,
            "data-product": S || !1,
            "data-context": j,
            children: [(0, f.jsx)(m.Z, {
              size: r,
              title: g,
              textOverlayProps: T,
              expandedView: !0,
              pricingOptions: z,
              children: P
            }), (0, f.jsxs)(u, {
              ref: Z,
              className: "_2b820ae1fad6c6efc86efe7469f4c7bea32c",
              variants: y.expandedContents,
              transition: h.afterCardOpen,
              "data-theme": C,
              children: [(0, f.jsxs)("div", {
                className: "_2b820ae1fad6c6efd606f8b2c00b2c32599e",
                children: [(0, f.jsx)(l.Z, {
                  hasTag: I,
                  tag: M,
                  badges: L
                }), (0, f.jsx)("h1", {
                  children: g
                }), S && (0, f.jsx)(p.Z, {
                  title: g,
                  showTitle: !1,
                  showBackground: !1,
                  tag: z?._memoq?.tag,
                  tagStyle: z?.tagStyle || "free",
                  discountPrice: z?._memoq?.discountPrice,
                  originalPrice: z?._memoq?.originalPrice
                })]
              }), (0, f.jsx)(d.TinaParser, {
                components: a,
                tina: {
                  payload: t
                }
              }), "flag_bg" === C && (0, f.jsxs)("div", {
                className: "_2b820ae1fad6c6efdf3ad7ff663e07fc1b64",
                children: [(0, f.jsx)("button", {
                  type: "button",
                  "aria-label": "Previous",
                  onClick: () => {
                    G(B - 1), H({
                      event: "modal_previous",
                      event_category: "modal",
                      event_action: "previous",
                      event_label: "",
                      position: B
                    })
                  },
                  disabled: B <= 0
                }), (0, f.jsxs)("div", {
                  className: "_2b820ae1fad6c6efc888c2ecb7e3d9694540",
                  children: [" ", B + 1, (0, f.jsx)("div", {
                    className: "_2b820ae1fad6c6efe7f54f854e666dd833f7"
                  }), k.length, " "]
                }), (0, f.jsx)("button", {
                  type: "button",
                  "aria-label": "Next",
                  onClick: () => {
                    G(B + 1), H({
                      event: "modal_next",
                      event_category: "modal",
                      event_action: "next",
                      event_label: "",
                      position: B
                    })
                  },
                  disabled: B >= k.length - 1
                })]
              })]
            })]
          })
        })
      }
    },
    6634: (e, a, t) => {
      t.d(a, {
        Z: () => r
      });
      var s = t(822),
        i = t(3201),
        n = t(9706);
      var d = t(5474);
      const r = e => {
        let {
          textOverlayProps: a,
          title: t,
          size: r,
          expandedView: c = !1,
          children: o,
          pricingOptions: l
        } = e;
        const [m] = (e => {
          let {
            hasTextOverlay: a,
            tag: t,
            collapsedHasTag: d,
            description: r,
            collapsedHasDescription: c,
            size: o,
            title: l,
            expandedView: m,
            badges: p
          } = e;
          const [f, u] = (0, s.useState)(null), g = (0, s.useMemo)((() => {
            if (!a) return null;
            const e = "sm" !== o && c;
            return (0, n.jsx)(i.Z, {
              title: l,
              hasTag: d,
              tag: t,
              hasDescription: e,
              description: r,
              fadesOut: m,
              badges: p
            })
          }), [a, t, d, r, c, o, l, m, p]);
          return (0, s.useEffect)((() => {
            u(g)
          }), [g]), [f, u]
        })({
          ...a,
          size: r,
          title: t,
          expandedView: c
        });
        let p = !1;
        return p = void 0 !== l, (0, n.jsxs)("header", {
          className: "_2b820ae1fad6c6efabf1ce2359a28e402c7a",
          children: [s.Children.map(o, (e => (0, s.cloneElement)(e, {
            title: t,
            size: r,
            expandedView: c
          }))), m, p && (0, n.jsx)(d.Z, {
            title: t,
            tag: l?._memoq?.tag,
            tagStyle: l?.tagStyle || "free",
            discountPrice: l?._memoq?.discountPrice,
            originalPrice: l?._memoq?.originalPrice
          })]
        })
      }
    },
    1248: (e, a, t) => {
      t.d(a, {
        Z: () => u
      });
      var s = t(822),
        i = t(8976),
        n = t(420),
        d = t.n(n),
        r = t(9542),
        c = t(8385),
        o = t(2310),
        l = t(8008),
        m = t(6711),
        p = t(9706);
      const f = e => {
          let {
            id: a,
            position: t,
            title: i,
            size: n = "md",
            sectionTitle: d = "",
            expandedType: r = null,
            modalProps: c = {
              content: null,
              className: "",
              contentClassName: ""
            },
            className: f,
            children: u,
            isProductCard: g
          } = e;
          const [h, x] = (0, o.useSearchParams)(), v = (0, s.useRef)(null), [, b] = (0, l.useModal)(), {
            track: y
          } = (0, m.useGtmTrack)(), [_, j] = (0, s.useState)(!1), T = () => {
            j(!1), b(null), x({}), y({
              event: "modal_close",
              event_category: "modal",
              event_action: "close",
              event_label: i?.toLowerCase(),
              card_id: a,
              card_name: i?.toLowerCase(),
              position: t
            }), y({
              event: "trackPageview"
            })
          }, w = () => {
            if (!c?.content || !v.current || !r || "linkout" === r) return;
            const e = v.current,
              s = window.getComputedStyle(e),
              n = parseInt(s.getPropertyValue("width"), 10),
              d = parseInt(s.getPropertyValue("height"), 10),
              o = e.getBoundingClientRect(),
              {
                content: l,
                className: m,
                contentClassName: p
              } = c;
            b({
              content: l,
              onClose: T,
              rect: o,
              width: n,
              height: d,
              className: m,
              contentClassName: p
            }), y({
              event: "trackPageview",
              link_url: window.location.href,
              card_id: a,
              card_name: i?.toLowerCase(),
              position: t
            })
          }, P = e => {
            "linkout" !== r && (e.preventDefault(), e.stopPropagation(), a ? x({
              info: a
            }) : w(), y({
              event: "card_click",
              event_category: "card",
              event_action: "click",
              event_label: d?.toLowerCase(),
              position: t,
              card_id: a,
              card_name: i?.toLowerCase(),
              link_url: window.location.href
            }))
          };
          return (0, s.useEffect)((() => {
            _ && w()
          }), [_]), (0, s.useEffect)((() => {
            j(h.get("info") === a)
          }), [h.get("info"), a]), (0, p.jsx)("div", {
            ref: v,
            onClick: P,
            onKeyUp: P,
            className: f,
            "data-size": n,
            "data-type": r,
            "data-product": g,
            role: "button",
            tabIndex: 0,
            children: u
          })
        },
        u = e => {
          let {
            payload: a,
            prod: t,
            images: n,
            size: o,
            title: l,
            initial: m,
            animate: u,
            variants: g,
            id: h,
            position: x,
            sectionTitle: v,
            expandedType: b,
            context: y,
            children: _,
            expandedCardContents: j,
            textOverlayProps: T = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            deckProps: w = {},
            modalProps: P = [],
            theme: C,
            cardIds: k,
            pricingOptions: N
          } = e;
          const z = (0, r.useTinaComponents)(),
            O = void 0 !== N,
            Z = (0, s.useMemo)((() => ({
              ...z,
              HTMLElement: i.HTMLElement,
              ImageWithBadge: i.ImageWithBadge,
              Carousel: i.Carousel,
              GroupOfItems: d()
            })), [z]),
            M = (0, s.useMemo)((() => (0, p.jsx)(c.Z, {
              type: b,
              components: Z,
              payload: a,
              prod: t,
              images: n,
              size: o,
              title: l,
              context: y,
              textOverlayProps: T,
              initial: m,
              animate: u,
              variants: g,
              theme: C,
              cardIds: k,
              pricingOptions: N,
              id: h,
              children: j
            })), [b, n, t, o, l, T, j, m, u, g, Z, a]);
          return (0, p.jsx)(f, {
            id: h,
            position: x,
            sectionTitle: v,
            title: l,
            size: o,
            expandedType: b,
            images: n,
            deckProps: w,
            modalProps: {
              content: M,
              ...P
            },
            className: "_2b820ae1fad6c6efd44e1aa953059f5cf739",
            isProductCard: O,
            children: _
          })
        }
    },
    8637: (e, a, t) => {
      t.d(a, {
        Z: () => g
      });
      var s = t(822),
        i = t(9542),
        n = t(559),
        d = t(8976);
      const r = {
        layeredImageFrame: "_2b820ae1fad6c6efbe654799b10be1d2683c",
        layered: "_2b820ae1fad6c6efddb6c868927fc40f5dec",
        foreground: "_2b820ae1fad6c6efd7e710282847fb9224de",
        imageMask: "_2b820ae1fad6c6efffc0a2a4179a84c1734b",
        logo: "_2b820ae1fad6c6effa4275085d6c272146c2",
        "sm-horizontal": "_2b820ae1fad6c6efc7c57379e39dc9e34690"
      };
      var c = t(9706);
      const {
        LiteMotion: o,
        Animations: l
      } = d.framer, {
        getVariant: m,
        variants: p,
        transitions: f
      } = l, u = e => {
        let {
          image: a,
          i: t,
          prod: s
        } = e;
        const {
          alt: i,
          src: d
        } = (0, n.useImageParser)({
          ...a,
          prod: s
        });
        return (0, c.jsx)("img", {
          src: d.mobile,
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
          expandedView: d = !1,
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
        const x = (0, s.useMemo)((() => a?.length && 0 !== a.length ? a.map((e => (0, c.jsx)(o, {
          className: (0, i.classList)(r[e?.specialClass] ?? r.imageMask, r[e?.sizeClass], e.className),
          variants: m(e?.specialClass ?? "imageMask", d ? "expanded" : "collapsed"),
          initial: "initial",
          animate: "animate",
          transition: f.cardOpen,
          children: (0, c.jsx)(u, {
            image: e,
            prod: n
          })
        }, e.key))) : null), [a, g, d, n]);
        return (0, c.jsx)(o, {
          className: (0, i.classList)(r.layeredImageFrame, a.length > 1 ? r.layered : r.flat, t),
          style: l,
          initial: p.fade.in.initial,
          animate: p.fade.in.animate,
          transition: f.instantFade,
          "data-expanded-view": d,
          children: x
        })
      }
    },
    1559: (e, a, t) => {
      t.d(a, {
        Z: () => d
      });
      var s = t(8976),
        i = t(6711),
        n = t(9706);
      const d = e => {
        let {
          expandedType: a,
          to: t,
          children: d,
          style: r,
          sectionTitle: c = "",
          id: o,
          cardTitle: l,
          position: m
        } = e;
        const {
          track: p
        } = (0, i.useGtmTrack)();
        return "linkout" === a && t ? (0, n.jsx)(s.A, {
          to: t,
          style: r,
          onClick: () => p({
            event: "card_click",
            event_action: "click",
            event_category: "card",
            event_label: c,
            link_url: t,
            card_id: o,
            card_name: l,
            element_placement: c,
            position: m
          }),
          children: d
        }) : d
      }
    },
    5474: (e, a, t) => {
      t.d(a, {
        Z: () => i
      });
      var s = t(9706);
      const i = e => {
        let {
          title: a,
          showTitle: t = !0,
          showBackground: i = !0,
          tag: n,
          tagStyle: d,
          discountPrice: r,
          originalPrice: c
        } = e;
        return (0, s.jsxs)("div", {
          className: "_2b820ae1fad6c6efb87b1cad353b616da6a4",
          "data-show-background": i,
          children: [t && (0, s.jsx)("span", {
            className: "_2b820ae1fad6c6efc42eda1240c596f0d785",
            children: a
          }), (0, s.jsxs)("div", {
            className: "_2b820ae1fad6c6efb0f482f2d0f16c294d3c",
            children: [(0, s.jsx)("span", {
              className: "_2b820ae1fad6c6efa7aa97d72858d6ca3f16",
              "data-tag-style": d || "free",
              children: n
            }), (0, s.jsx)("span", {
              className: "_2b820ae1fad6c6efbda97786d5063ef9b8f6",
              children: r
            }), (0, s.jsx)("span", {
              className: "_2b820ae1fad6c6efc235f619535bec335f09",
              children: c
            })]
          })]
        })
      }
    },
    3201: (e, a, t) => {
      t.d(a, {
        Z: () => m
      });
      var s = t(8976),
        i = t(5232);
      const n = {
        textOverlay: "_2b820ae1fad6c6efb8bb24e78a7e5e3849fd",
        content: "_2b820ae1fad6c6efa62c2da90114215ae3c8"
      };
      var d = t(9706);
      const {
        LiteMotion: r,
        Animations: c
      } = s.framer, {
        variants: o,
        transitions: l
      } = c, m = e => {
        let {
          title: a,
          hasTag: t,
          tag: s,
          hasDescription: c,
          description: m,
          fadesOut: p = !1,
          badges: f
        } = e;
        return (0, d.jsx)(r, {
          initial: o.fade.out.initial,
          animate: {
            opacity: p ? 0 : 1
          },
          transition: l.fade,
          className: n.textOverlay,
          children: (0, d.jsxs)("div", {
            className: n.content,
            children: [(0, d.jsx)(i.Z, {
              hasTag: t,
              tag: s,
              badges: f?.filter((e => e?.isPrimary))
            }), (0, d.jsx)("h3", {
              children: a
            }), c && m && (0, d.jsx)("div", {
              className: n.description,
              children: m
            })]
          })
        })
      }
    },
    4468: (e, a, t) => {
      t.d(a, {
        Z: () => d
      });
      var s = t(822),
        i = t(8976),
        n = t(9706);
      const d = e => {
        let {
          images: a,
          title: t,
          expandedView: d,
          variants: r,
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
          navigation: d,
          thumbsVisible: d,
          spaceBetween: 0,
          variants: r,
          transition: c
        })
      }
    },
    8421: (e, a, t) => {
      t.d(a, {
        Z: () => f
      });
      var s = t(822),
        i = t(9542),
        n = t(8976),
        d = t(1248),
        r = t(6634),
        c = t(8637),
        o = t(1559);
      const l = {
        customModalContent: "_2b820ae1fad6c6efeaaa89d602e502f9ab5a",
        content: "_2b820ae1fad6c6efc1f66a431c932dee33fd"
      };
      var m = t(9706);
      const {
        variants: p
      } = n.framer.Animations, f = e => {
        let {
          id: a,
          title: t,
          content: n,
          size: f = "md",
          expandedType: u = "short",
          textOverlayProps: g = {
            hasTextOverlay: !1,
            tag: "",
            collapsedHasTag: !1,
            expandedHasTag: !1,
            description: "",
            collapsedHasDescription: !1
          },
          images: h = [],
          deckProps: x = {},
          to: v = null,
          tina: b = {},
          position: y = 0,
          sectionTitle: _ = "",
          theme: j,
          pricingOptions: T,
          cardIds: w
        } = e;
        const P = (0, i.useTinaPayload)(),
          C = b?.payload?.meta?.cdn ?? P?.meta?.prod ?? !1,
          [k, N] = (0, s.useState)(x?.size ?? f),
          z = void 0 !== T;
        return (0, s.useEffect)((() => {
          N(x?.size ?? f)
        }), [x?.size, f]), (0, m.jsx)(d.Z, {
          id: a,
          title: t,
          size: k,
          expandedType: u,
          images: h,
          deckProps: x,
          prod: C,
          payload: {
            content: n,
            meta: {}
          },
          variants: p.plainCard,
          textOverlayProps: g,
          modalProps: {
            className: l.customModal,
            contentClassName: l.customModalContent
          },
          expandedCardContents: (0, m.jsx)(c.Z, {
            images: h,
            prod: C,
            expandedView: !0
          }),
          position: y,
          sectionTitle: _,
          theme: j,
          cardIds: w,
          pricingOptions: T,
          children: (0, m.jsx)(o.Z, {
            expandedType: u,
            to: v,
            sectionTitle: _,
            id: a,
            cardTitle: t,
            position: y,
            children: (0, m.jsx)("div", {
              className: l.content,
              "data-product": z,
              children: (0, m.jsx)(r.Z, {
                title: t,
                size: k,
                textOverlayProps: g,
                pricingOptions: T,
                children: (0, m.jsx)(c.Z, {
                  images: h,
                  prod: C
                })
              })
            })
          })
        })
      }
    },
    1950: (e, a, t) => {
      t.d(a, {
        Z: () => f
      });
      var s = t(822),
        i = t(9542),
        n = t(8976),
        d = t(1248),
        r = t(6634),
        c = t(4468);
      const o = {
        customModalContent: "_2b820ae1fad6c6efe9e7ee7cbb3a089710cc"
      };
      var l = t(9706);
      const {
        transitions: m,
        variants: p
      } = n.framer.Animations, f = e => {
        let {
          id: a,
          title: t,
          content: n,
          size: f = "md",
          expandedType: u = "gallery",
          textOverlayProps: g = {
            hasTextOverlay: !1,
            tag: "",
            collapsedHasTag: !1,
            expandedHasTag: !1,
            description: "",
            collapsedHasDescription: !1
          },
          images: h = [],
          deckProps: x = {},
          tina: v = {},
          payload: b,
          position: y = 0,
          sectionTitle: _ = ""
        } = e;
        const j = (0, i.useTinaPayload)(),
          T = b ?? j;
        let w;
        w = v?.payload?.meta?.cdn ?? T?.meta?.prod ?? !1;
        const P = ((e, a) => e?.map((e => e?.image ? {
            ...e,
            image: {
              ...e.image,
              prod: a
            }
          } : e)))(h, w),
          [C, k] = (0, s.useState)(x?.size ?? f),
          {
            parent: N,
            main: z,
            thumbs: O
          } = p?.cardWithImageGallery?.gallery ?? {};
        return (0, s.useEffect)((() => {
          k(x?.size ?? f)
        }), [x?.size, f]), (0, l.jsx)(d.Z, {
          id: a,
          position: y,
          sectionTitle: _,
          payload: {
            content: n,
            meta: {},
            payload: T
          },
          title: t,
          size: C,
          expandedType: u,
          images: P,
          deckProps: x,
          prod: w,
          variants: p.cardWithImageGallery,
          textOverlayProps: g,
          modalProps: {
            className: o.customModal,
            contentClassName: o.customModalContent
          },
          expandedCardContents: (0, l.jsx)(c.Z, {
            images: P,
            title: t,
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
            children: (0, l.jsx)(r.Z, {
              title: t,
              size: C,
              textOverlayProps: g,
              children: (0, l.jsx)(c.Z, {
                images: P,
                title: t,
                navigation: !1,
                thumbsVisible: !1
              })
            })
          })
        })
      }
    },
    796: (e, a, t) => {
      t.d(a, {
        Z: () => d
      });
      var s = t(8976),
        i = t(9542);
      var n = t(9706);
      const d = e => {
        let {
          title: a,
          content: t,
          size: d = "md",
          badgeText: r
        } = e;
        const c = {
          ...(0, i.useTinaComponents)(),
          HTMLElement: s.HTMLElement,
          UnorderedList: s.UnorderedList,
          ListItem: s.ListItem
        };
        return (0, n.jsx)("div", {
          className: "_2b820ae1fad6c6efe881a80105cd524eb2bf",
          "data-size": d,
          children: (0, n.jsxs)("div", {
            className: "_2b820ae1fad6c6efb950e84d17e2720a8c4a",
            children: [r && (0, n.jsx)("div", {
              className: "_2b820ae1fad6c6efd4d1e516f8a980e2ce3a",
              children: r
            }), (0, n.jsxs)("div", {
              className: "_2b820ae1fad6c6efafc8dfd2b7b7731fdc0d",
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