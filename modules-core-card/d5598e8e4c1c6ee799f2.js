"use strict";
(self.webpackChunk_rockstargames_modules_core_card = self.webpackChunk_rockstargames_modules_core_card || []).push([
  [27], {
    3208: (e, a, t) => {
      t.d(a, {
        Z: () => u
      });
      var s = t(822),
        n = t(735),
        i = t.n(n),
        r = t(8976),
        d = t(9542),
        l = t(7070),
        o = t(3484),
        c = t(8453),
        m = t(5668);
      const p = {
          Card: l.Z,
          CardWithImageGallery: o.Z,
          TextCard: c.Z
        },
        u = r.framer.withFadeIn((0, r.withSimpleErrorBoundary)((e => {
          let {
            cards: a = [],
            size: t,
            title: n,
            description: l,
            customSlidesPerView: o = null
          } = e;
          const c = (0, s.useRef)(null),
            u = i().map(a, "id"),
            g = (0, r.useTinaModuleFetchByIds)({
              ids: u
            }),
            [h, x] = (0, s.useState)(o);
          (0, s.useEffect)((() => {
            if (!c.current) return;
            const e = () => {
              const e = o || window.getComputedStyle(c.current).getPropertyValue("--slides-per-view");
              x(e)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }));
          const v = (0, s.useMemo)((() => g ? g.reduce(((e, a) => {
            if (a) {
              const {
                id: s,
                tina: n
              } = a, r = i().clone(n);
              i().set(r, "payload.meta.id", s), e.push((0, m.jsx)(d.TinaParser, {
                components: p,
                tina: r,
                componentProps: {
                  deckProps: {
                    size: t
                  },
                  tina: r
                }
              }, s))
            }
            return e
          }), []) : null), [g, t]);
          return (0, m.jsx)("div", {
            ref: c,
            children: (0, m.jsx)(r.Gen9CoreCarousel, {
              description: l,
              size: t,
              slideChildren: v,
              title: n,
              customSlidesPerView: h
            })
          })
        })))
    },
    8758: (e, a, t) => {
      t.d(a, {
        Z: () => i
      });
      var s = t(8976);
      var n = t(5668);
      const i = e => {
        let {
          hasTag: a = !1,
          tag: t = null,
          badges: i = []
        } = e;
        return a && t ? (0, n.jsx)("div", {
          className: "f3c82db691085629ecd1",
          children: t
        }) : a && i && i?.length > 0 ? (0, n.jsx)("div", {
          className: "f6e8e857db521f2f02c2",
          children: i.map((e => (0, n.jsx)(s.Badge, {
            ...e
          }, e?.text)))
        }) : null
      }
    },
    2940: (e, a, t) => {
      t.d(a, {
        Z: () => u
      });
      var s = t(735),
        n = t.n(s),
        i = t(9542),
        r = t(8976),
        d = t(8758),
        l = t(4168);
      var o = t(5668);
      const {
        LiteMotion: c,
        Animations: m
      } = r.framer, {
        transitions: p
      } = m, u = e => {
        let {
          components: a,
          payload: t,
          prod: s,
          size: r,
          title: m,
          initial: u = "initial",
          animate: g = "animate",
          variants: h,
          type: x = null,
          context: v = null,
          textOverlayProps: y,
          className: f,
          children: j
        } = e;
        console.log("EXPANDED CARD", {
          components: a,
          payload: t,
          prod: s,
          size: r,
          title: m,
          initial: u,
          animate: g,
          variants: h,
          type: x,
          context: v,
          textOverlayProps: y,
          className: f,
          children: j
        });
        const {
          tag: b,
          expandedHasTag: T,
          badges: C
        } = y;
        return n().set(t, "meta.prod", s), (0, o.jsxs)(c, {
          initial: u,
          animate: g,
          variants: h.expanded,
          transition: p.cardOpen,
          className: (0, i.classList)("b26588866b3f8cf68385", f),
          "data-type": x,
          "data-size": r,
          "data-context": v,
          children: [(0, o.jsx)(l.Z, {
            size: r,
            title: m,
            textOverlayProps: y,
            expandedView: !0,
            children: j
          }), (0, o.jsxs)(c, {
            className: "c86efe7469f4c7bea32c",
            variants: h.expandedContents,
            transition: p.afterCardOpen,
            children: [(0, o.jsxs)("div", {
              className: "d606f8b2c00b2c32599e",
              children: [(0, o.jsx)(d.Z, {
                hasTag: T,
                tag: b,
                badges: C
              }), (0, o.jsx)("h1", {
                children: m
              })]
            }), (0, o.jsx)(i.TinaParser, {
              components: a,
              tina: {
                payload: t
              }
            })]
          })]
        })
      }
    },
    4168: (e, a, t) => {
      t.d(a, {
        Z: () => r
      });
      var s = t(822),
        n = t(3762),
        i = t(5668);
      const r = e => {
        let {
          textOverlayProps: a,
          title: t,
          size: r,
          expandedView: d = !1,
          children: l
        } = e;
        const [o] = (e => {
          let {
            hasTextOverlay: a,
            tag: t,
            collapsedHasTag: r,
            description: d,
            collapsedHasDescription: l,
            size: o,
            title: c,
            expandedView: m,
            badges: p
          } = e;
          const [u, g] = (0, s.useState)(null), h = (0, s.useMemo)((() => {
            if (!a) return null;
            const e = "sm" !== o && l;
            return (0, i.jsx)(n.Z, {
              title: c,
              hasTag: r,
              tag: t,
              hasDescription: e,
              description: d,
              fadesOut: m,
              badges: p
            })
          }), [a, t, r, d, l, o, c, m, p]);
          return (0, s.useEffect)((() => {
            g(h)
          }), [h]), [u, g]
        })({
          ...a,
          size: r,
          title: t,
          expandedView: d
        });
        return (0, i.jsxs)("header", {
          className: "abf1ce2359a28e402c7a",
          children: [s.Children.map(l, (e => (0, s.cloneElement)(e, {
            title: t,
            size: r,
            expandedView: d
          }))), o]
        })
      }
    },
    8079: (e, a, t) => {
      t.d(a, {
        Z: () => u
      });
      var s = t(822),
        n = t(1163),
        i = t(8008),
        r = t(8976),
        d = t(420),
        l = t.n(d),
        o = t(9542),
        c = t(2940);
      var m = t(5668);
      const p = e => {
          let {
            id: a,
            size: t = "md",
            expandedType: r = null,
            modalProps: d = {
              content: null,
              className: "",
              contentClassName: ""
            },
            className: l,
            children: o
          } = e;
          const [c, p] = (0, n.useSearchParams)(), u = (0, s.useRef)(null), [, g] = (0, i.useModal)(), h = (0, s.useCallback)((() => {
            if (!(u.current || r && "linkout" !== r)) return;
            const e = window.getComputedStyle(u.current);
            d?.content && (g({
              content: d.content,
              onClose: () => p({}),
              rect: u.current.getBoundingClientRect(),
              width: parseInt(e.getPropertyValue("width")),
              height: parseInt(e.getPropertyValue("height")),
              className: d?.className,
              contentClassName: d?.contentClassName
            }), setTimeout((() => {
              u.current.style.opacity = 0
            }), 50), setTimeout((() => {
              u.current.style.opacity = 1
            }), 1e3))
          }), [u, r, d, g, p]);
          (0, s.useEffect)((() => {
            c.get("info") === a && h()
          }), [c, a, h]);
          const x = e => {
            if ("linkout" !== r) return e.preventDefault(), e.stopPropagation(), a ? p({
              info: a
            }) : h(), null
          };
          return (0, m.jsx)("div", {
            ref: u,
            onClick: x,
            onKeyUp: x,
            className: l,
            "data-size": t,
            "data-type": r,
            role: "button",
            tabIndex: 0,
            children: o
          })
        },
        u = e => {
          let {
            payload: a,
            prod: t,
            images: n,
            size: i,
            title: d,
            initial: u,
            animate: g,
            variants: h,
            id: x,
            expandedType: v,
            children: y,
            expandedCardContents: f,
            textOverlayProps: j = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            deckProps: b = {},
            modalProps: T = []
          } = e;
          const C = (0, o.useTinaComponents)(),
            P = (0, s.useMemo)((() => ({
              ...C,
              HTMLElement: r.HTMLElement,
              ImageWithBadge: r.ImageWithBadge,
              Carousel: r.Carousel,
              GroupOfItems: l()
            })), [C]),
            w = (0, s.useMemo)((() => (0, m.jsx)(c.Z, {
              type: v,
              components: P,
              payload: a,
              prod: t,
              images: n,
              size: i,
              title: d,
              textOverlayProps: j,
              initial: u,
              animate: g,
              variants: h,
              children: f
            })), [v, n, t, i, d, j, f, u, g, h, P, a]);
          return (0, m.jsx)(p, {
            id: x,
            title: d,
            size: i,
            expandedType: v,
            images: n,
            deckProps: b,
            modalProps: {
              content: w,
              ...T
            },
            className: "d44e1aa953059f5cf739",
            children: y
          })
        }
    },
    7712: (e, a, t) => {
      t.d(a, {
        Z: () => h
      });
      var s = t(822),
        n = t(9542),
        i = t(559),
        r = t(8976);
      const d = {
        layeredImageFrame: "be654799b10be1d2683c",
        layered: "ddb6c868927fc40f5dec",
        foreground: "d7e710282847fb9224de",
        imageMask: "ffc0a2a4179a84c1734b",
        logo: "fa4275085d6c272146c2",
        "sm-horizontal": "c7c57379e39dc9e34690"
      };
      var l = t(5668);
      const {
        LiteMotion: o,
        Animations: c
      } = r.framer, {
        getVariant: m,
        variants: p,
        transitions: u
      } = c, g = e => {
        let {
          image: a,
          i: t,
          prod: s
        } = e;
        const {
          alt: n,
          src: r
        } = (0, i.useImageParser)({
          ...a,
          prod: s
        });
        return (0, l.jsx)("img", {
          src: r.mobile,
          alt: n ?? "",
          style: {
            "--z-index": t
          }
        })
      }, h = e => {
        let {
          images: a = [],
          className: t = "",
          prod: i = !1,
          expandedView: r = !1,
          style: c = {}
        } = e;
        const [h, x] = (0, s.useState)({
          height: window.innerHeight,
          width: window.innerWidth
        });
        (0, s.useEffect)((() => {
          function e() {
            x({
              height: window.innerHeight,
              width: window.innerWidth
            })
          }
          return window.addEventListener("resize", e), () => {
            window.removeEventListener("resize", e)
          }
        }), [h]);
        const v = (0, s.useMemo)((() => a?.length && 0 !== a.length ? a.map((e => (0, l.jsx)(o, {
          className: (0, n.classList)(d[e?.specialClass] ?? d.imageMask, d[e?.sizeClass], e.className),
          variants: m(e?.specialClass ?? "imageMask", r ? "expanded" : "collapsed"),
          initial: "initial",
          animate: "animate",
          transition: u.cardOpen,
          children: (0, l.jsx)(g, {
            image: e,
            prod: i
          })
        }, `${e.className}-${h.width}x${h.height}`))) : null), [a, h, r, i]);
        return (0, l.jsx)(o, {
          className: (0, n.classList)(d.layeredImageFrame, a.length > 1 ? d.layered : d.flat, t),
          style: c,
          initial: p.fade.in.initial,
          animate: p.fade.in.animate,
          transition: u.instantFade,
          children: v
        })
      }
    },
    390: (e, a, t) => {
      t.d(a, {
        Z: () => i
      });
      var s = t(8976),
        n = t(5668);
      const i = e => {
        let {
          expandedType: a,
          to: t,
          children: i
        } = e;
        return "linkout" === a && t ? (0, n.jsx)(s.A, {
          to: t,
          children: i
        }) : i
      }
    },
    3762: (e, a, t) => {
      t.d(a, {
        Z: () => m
      });
      var s = t(8976),
        n = t(8758);
      const i = {
        textOverlay: "b8bb24e78a7e5e3849fd",
        content: "a62c2da90114215ae3c8"
      };
      var r = t(5668);
      const {
        LiteMotion: d,
        Animations: l
      } = s.framer, {
        variants: o,
        transitions: c
      } = l, m = e => {
        let {
          title: a,
          hasTag: t,
          tag: s,
          hasDescription: l,
          description: m,
          fadesOut: p = !1,
          badges: u
        } = e;
        return (0, r.jsx)(d, {
          initial: o.fade.out.initial,
          animate: {
            opacity: p ? 0 : 1
          },
          transition: c.fade,
          className: i.textOverlay,
          children: (0, r.jsxs)("div", {
            className: i.content,
            children: [(0, r.jsx)(n.Z, {
              hasTag: t,
              tag: s,
              badges: u?.filter((e => e?.isPrimary))
            }), (0, r.jsx)("h3", {
              children: a
            }), l && m && (0, r.jsx)("div", {
              className: i.description,
              children: m
            })]
          })
        })
      }
    },
    3667: (e, a, t) => {
      t.d(a, {
        Z: () => r
      });
      var s = t(822),
        n = t(8976),
        i = t(5668);
      const r = e => {
        let {
          images: a,
          title: t,
          expandedView: r,
          variants: d,
          transition: l
        } = e;
        const o = (0, s.useMemo)((() => a && 0 !== a?.length ? a.map((e => e?.image?.sources ? (0, i.jsx)(n.ImageWithBadge, {
          ...e,
          style: {
            "--object-position": e?.objectPosition ?? ""
          }
        }) : null)) : null), [a]);
        return !o?.length || o?.length < 1 ? null : 1 === o.length ? o : (0, i.jsx)(n.ThumbsGallery, {
          slideChildren: o,
          title: t,
          navigation: r,
          thumbsVisible: r,
          spaceBetween: 0,
          variants: d,
          transition: l
        })
      }
    },
    7070: (e, a, t) => {
      t.d(a, {
        Z: () => u
      });
      var s = t(822),
        n = t(9542),
        i = t(8976),
        r = t(8079),
        d = t(4168),
        l = t(7712),
        o = t(390);
      const c = {
        customModalContent: "eaaa89d602e502f9ab5a"
      };
      var m = t(5668);
      const {
        variants: p
      } = i.framer.Animations, u = e => {
        let {
          id: a,
          title: t,
          content: i,
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
          images: x = [],
          deckProps: v = {},
          to: y = null,
          tina: f = {}
        } = e;
        const j = (0, n.useTinaPayload)(),
          b = f?.payload?.meta?.cdn ?? j?.meta?.prod ?? !1,
          [T, C] = (0, s.useState)(v?.size ?? u);
        return (0, s.useEffect)((() => {
          C(v?.size ?? u)
        }), [v?.size, u]), (0, m.jsx)(r.Z, {
          id: a,
          title: t,
          size: T,
          expandedType: g,
          images: x,
          deckProps: v,
          prod: b,
          payload: {
            content: i,
            meta: {}
          },
          variants: p.plainCard,
          textOverlayProps: h,
          modalProps: {
            className: c.customModal,
            contentClassName: c.customModalContent
          },
          expandedCardContents: (0, m.jsx)(l.Z, {
            images: x,
            prod: b,
            expandedView: !0
          }),
          children: (0, m.jsx)(o.Z, {
            expandedType: g,
            to: y,
            children: (0, m.jsx)("div", {
              className: c.content,
              children: (0, m.jsx)(d.Z, {
                title: t,
                size: T,
                textOverlayProps: h,
                children: (0, m.jsx)(l.Z, {
                  images: x,
                  prod: b
                })
              })
            })
          })
        })
      }
    },
    3484: (e, a, t) => {
      t.d(a, {
        Z: () => u
      });
      var s = t(822),
        n = t(9542),
        i = t(8976),
        r = t(8079),
        d = t(4168),
        l = t(3667);
      const o = {
        customModalContent: "e9e7ee7cbb3a089710cc"
      };
      var c = t(5668);
      const {
        transitions: m,
        variants: p
      } = i.framer.Animations, u = e => {
        let {
          id: a,
          title: t,
          content: i,
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
          images: x = [],
          deckProps: v = {},
          tina: y = {}
        } = e;
        const [f, j] = (0, s.useState)(null), b = (0, n.useTinaPayload)(), T = y?.payload?.meta?.cdn ?? b?.meta?.prod ?? !1, [C, P] = (0, s.useState)(v?.size ?? u), {
          parent: w,
          main: N,
          thumbs: z
        } = p?.cardWithImageGallery?.gallery ?? {};
        return (0, s.useEffect)((() => {
          const e = x?.map((e => e?.image ? {
            ...e,
            image: {
              ...e.image,
              prod: T
            }
          } : e));
          j(e)
        }), [x]), (0, s.useEffect)((() => {
          P(v?.size ?? u)
        }), [v?.size, u]), (0, c.jsx)(r.Z, {
          id: a,
          title: t,
          size: C,
          expandedType: g,
          images: f,
          deckProps: v,
          prod: T,
          payload: {
            content: i,
            meta: {}
          },
          variants: p.cardWithImageGallery,
          textOverlayProps: h,
          modalProps: {
            className: o.customModal,
            contentClassName: o.customModalContent
          },
          expandedCardContents: (0, c.jsx)(l.Z, {
            images: f,
            title: t,
            navigation: !0,
            thumbsVisible: !0,
            variants: {
              parent: w,
              main: N,
              thumbs: z
            },
            transition: {
              parent: m.cardOpen,
              main: m.cardOpen,
              thumbs: m.cardOpen
            }
          }),
          children: (0, c.jsx)("div", {
            className: o.content,
            children: (0, c.jsx)(d.Z, {
              title: t,
              size: C,
              textOverlayProps: h,
              children: (0, c.jsx)(l.Z, {
                images: f,
                title: t,
                navigation: !1,
                thumbsVisible: !1
              })
            })
          })
        })
      }
    },
    8453: (e, a, t) => {
      t.d(a, {
        Z: () => r
      });
      var s = t(8976),
        n = t(9542);
      var i = t(5668);
      const r = e => {
        let {
          title: a,
          content: t,
          size: r = "md",
          badgeText: d
        } = e;
        const l = {
          ...(0, n.useTinaComponents)(),
          HTMLElement: s.HTMLElement,
          UnorderedList: s.UnorderedList,
          ListItem: s.ListItem
        };
        return (0, i.jsx)("div", {
          className: "e881a80105cd524eb2bf",
          "data-size": r,
          children: (0, i.jsxs)("div", {
            className: "b950e84d17e2720a8c4a",
            children: [d && (0, i.jsx)("div", {
              className: "d4d1e516f8a980e2ce3a",
              children: d
            }), (0, i.jsxs)("div", {
              className: "afc8dfd2b7b7731fdc0d",
              children: [a && (0, i.jsx)("h3", {
                children: a
              }), (0, i.jsx)(n.TinaParser, {
                components: l,
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
    },
    8027: (e, a, t) => {
      t.r(a), t.d(a, {
        Card: () => s.Z,
        CardWithImageGallery: () => n.Z,
        Deck: () => h.Z,
        EventInfo: () => u,
        TextCard: () => g.Z
      });
      var s = t(7070),
        n = t(3484),
        i = t(822),
        r = t(735),
        d = t.n(r),
        l = t(8976),
        o = t(420),
        c = t.n(o),
        m = t(9542);
      var p = t(5668);
      const u = e => {
        let {
          images: a,
          title: t,
          content: s,
          textOverlayProps: n = {
            hasTextOverlay: !1,
            tag: "",
            collapsedHasTag: !1,
            expandedHasTag: !1,
            description: "",
            collapsedHasDescription: !1,
            badges: []
          }
        } = e;
        const r = (0, m.useTinaPayload)(),
          o = r?.meta?.prod ?? !1,
          u = (0, m.useTinaComponents)(),
          g = (0, i.useMemo)((() => a?.[0]), [a]);
        d().set(r, "meta.prod", o);
        const h = (0, i.useMemo)((() => ({
          ...u,
          HTMLElement: l.HTMLElement,
          ImageWithBadge: l.ImageWithBadge,
          Carousel: l.Carousel,
          GroupOfItems: c()
        })), [u]);
        return (0, p.jsxs)("div", {
          className: "e91e50dd7d33343905a6",
          children: [(0, p.jsx)(l.ImageWithBadge, {
            ...g
          }), (0, p.jsxs)("div", {
            className: "c7a8d988e09ad045d3d0",
            children: [(0, p.jsx)(l.DescriptionArea, {
              item: {
                title: t,
                description: {
                  content: [n?.description]
                }
              }
            }), (0, p.jsx)(m.TinaParser, {
              components: h,
              tina: {
                payload: {
                  content: s,
                  meta: {
                    prod: o
                  }
                }
              }
            })]
          })]
        })
      };
      var g = t(8453),
        h = t(3208)
    }
  }
]);