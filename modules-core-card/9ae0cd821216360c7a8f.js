"use strict";
(self.webpackChunk_rockstargames_modules_core_card = self.webpackChunk_rockstargames_modules_core_card || []).push([
  [279], {
    7454: (e, a, t) => {
      t.d(a, {
        Z: () => u
      });
      var s = t(822),
        n = t(7311),
        i = t.n(n),
        r = t(8976),
        d = t(9542),
        l = t(9373),
        o = t(1204),
        c = t(4351),
        m = t(3322);
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
            x = (0, r.useTinaModuleFetchByIds)({
              ids: u
            }),
            [g, h] = (0, s.useState)(o);
          (0, s.useEffect)((() => {
            if (!c.current) return;
            const e = () => {
              const e = o || window.getComputedStyle(c.current).getPropertyValue("--slides-per-view");
              h(e)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }));
          const v = (0, s.useMemo)((() => x ? x.reduce(((e, a) => {
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
          }), []) : null), [x, t]);
          return (0, m.jsx)("div", {
            ref: c,
            children: (0, m.jsx)(r.Gen9CoreCarousel, {
              description: l,
              size: t,
              slideChildren: v,
              title: n,
              customSlidesPerView: g
            })
          })
        })))
    },
    8279: (e, a, t) => {
      t.r(a);
      var s = t(6803),
        n = t(3468),
        i = t.n(n),
        r = t(4859),
        d = t(9373),
        l = t(7454),
        o = t(3322);
      const c = (0, r.withRockstarGraph)(l.Z, {
        env: "local"
      });
      i().render((0, o.jsx)(s.BrowserRouter, {
        basename: "/",
        children: (0, o.jsxs)("div", {
          "data-game": "gtao",
          children: [(0, o.jsxs)(c, {
            size: "sm",
            title: "Small Cards",
            children: [(0, o.jsx)(d.Z, {
              size: "sm"
            }), (0, o.jsx)(d.Z, {
              size: "sm"
            }), (0, o.jsx)(d.Z, {
              size: "sm"
            }), (0, o.jsx)(d.Z, {
              size: "sm"
            }), (0, o.jsx)(d.Z, {
              size: "sm"
            })]
          }), (0, o.jsxs)(c, {
            size: "md",
            title: "Medium Cards",
            children: [(0, o.jsx)(d.Z, {
              size: "md",
              collapsedHasTag: !0
            }), (0, o.jsx)(d.Z, {
              size: "md",
              collapsedHasTag: !0
            }), (0, o.jsx)(d.Z, {
              size: "md",
              collapsedHasTag: !0
            }), (0, o.jsx)(d.Z, {
              size: "md",
              collapsedHasTag: !0
            }), (0, o.jsx)(d.Z, {
              size: "md",
              collapsedHasTag: !0
            })]
          }), (0, o.jsxs)(c, {
            size: "lg",
            title: "Large Cards",
            children: [(0, o.jsx)(d.Z, {
              size: "lg",
              expandedType: "long"
            }), (0, o.jsx)(d.Z, {
              size: "lg",
              expandedType: "long"
            }), (0, o.jsx)(d.Z, {
              size: "lg",
              expandedType: "long"
            }), (0, o.jsx)(d.Z, {
              size: "lg",
              expandedType: "long"
            }), (0, o.jsx)(d.Z, {
              size: "lg",
              expandedType: "long"
            })]
          })]
        })
      }), document.getElementById("module"))
    },
    9172: (e, a, t) => {
      t.d(a, {
        Z: () => i
      });
      var s = t(8976);
      var n = t(3322);
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
    9525: (e, a, t) => {
      t.d(a, {
        Z: () => u
      });
      var s = t(7311),
        n = t.n(s),
        i = t(9542),
        r = t(8976),
        d = t(9172),
        l = t(547);
      var o = t(3322);
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
          animate: x = "animate",
          variants: g,
          type: h = null,
          context: v = null,
          textOverlayProps: y,
          className: f,
          children: j
        } = e;
        const {
          tag: z,
          expandedHasTag: T,
          badges: b
        } = y;
        return n().set(t, "meta.prod", s), (0, o.jsxs)(c, {
          initial: u,
          animate: x,
          variants: g.expanded,
          transition: p.cardOpen,
          className: (0, i.classList)("b26588866b3f8cf68385", f),
          "data-type": h,
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
            variants: g.expandedContents,
            transition: p.afterCardOpen,
            children: [(0, o.jsxs)("div", {
              className: "d606f8b2c00b2c32599e",
              children: [(0, o.jsx)(d.Z, {
                hasTag: T,
                tag: z,
                badges: b
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
    547: (e, a, t) => {
      t.d(a, {
        Z: () => r
      });
      var s = t(822),
        n = t(9838),
        i = t(3322);
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
          const [u, x] = (0, s.useState)(null), g = (0, s.useMemo)((() => {
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
            x(g)
          }), [g]), [u, x]
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
    8819: (e, a, t) => {
      t.d(a, {
        Z: () => u
      });
      var s = t(822),
        n = t(6803),
        i = t(8008),
        r = t(8976),
        d = t(420),
        l = t.n(d),
        o = t(9542),
        c = t(9525);
      var m = t(3322);
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
          const [c, p] = (0, n.useSearchParams)(), u = (0, s.useRef)(null), [, x] = (0, i.useModal)(), g = (0, s.useCallback)((() => {
            if (!(u.current || r && "linkout" !== r)) return;
            const e = window.getComputedStyle(u.current);
            d?.content && (x({
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
          }), [u, r, d, x, p]);
          (0, s.useEffect)((() => {
            c.get("info") === a && g()
          }), [c, a, g]);
          const h = e => {
            if ("linkout" !== r) return e.preventDefault(), e.stopPropagation(), a ? p({
              info: a
            }) : g(), null
          };
          return (0, m.jsx)("div", {
            ref: u,
            onClick: h,
            onKeyUp: h,
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
            animate: x,
            variants: g,
            id: h,
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
            deckProps: z = {},
            modalProps: T = []
          } = e;
          const b = (0, o.useTinaComponents)(),
            Z = (0, s.useMemo)((() => ({
              ...b,
              HTMLElement: r.HTMLElement,
              ImageWithBadge: r.ImageWithBadge,
              Carousel: r.Carousel,
              GroupOfItems: l()
            })), [b]),
            C = (0, s.useMemo)((() => (0, m.jsx)(c.Z, {
              type: v,
              components: Z,
              payload: a,
              prod: t,
              images: n,
              size: i,
              title: d,
              textOverlayProps: j,
              initial: u,
              animate: x,
              variants: g,
              children: f
            })), [v, n, t, i, d, j, f, u, x, g, Z, a]);
          return (0, m.jsx)(p, {
            id: h,
            title: d,
            size: i,
            expandedType: v,
            images: n,
            deckProps: z,
            modalProps: {
              content: C,
              ...T
            },
            className: "d44e1aa953059f5cf739",
            children: y
          })
        }
    },
    507: (e, a, t) => {
      t.d(a, {
        Z: () => g
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
      var l = t(3322);
      const {
        LiteMotion: o,
        Animations: c
      } = r.framer, {
        getVariant: m,
        variants: p,
        transitions: u
      } = c, x = e => {
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
      }, g = e => {
        let {
          images: a = [],
          className: t = "",
          prod: i = !1,
          expandedView: r = !1,
          style: c = {}
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
        const v = (0, s.useMemo)((() => a?.length && 0 !== a.length ? a.map((e => (0, l.jsx)(o, {
          className: (0, n.classList)(d[e?.specialClass] ?? d.imageMask, d[e?.sizeClass], e.className),
          variants: m(e?.specialClass ?? "imageMask", r ? "expanded" : "collapsed"),
          initial: "initial",
          animate: "animate",
          transition: u.cardOpen,
          children: (0, l.jsx)(x, {
            image: e,
            prod: i
          })
        }, `${e.className}-${g.width}x${g.height}`))) : null), [a, g, r, i]);
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
    4950: (e, a, t) => {
      t.d(a, {
        Z: () => i
      });
      var s = t(8976),
        n = t(3322);
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
    9838: (e, a, t) => {
      t.d(a, {
        Z: () => m
      });
      var s = t(8976),
        n = t(9172);
      const i = {
        textOverlay: "b8bb24e78a7e5e3849fd",
        content: "a62c2da90114215ae3c8"
      };
      var r = t(3322);
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
    7366: (e, a, t) => {
      t.d(a, {
        Z: () => r
      });
      var s = t(822),
        n = t(8976),
        i = t(3322);
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
    9373: (e, a, t) => {
      t.d(a, {
        Z: () => u
      });
      var s = t(822),
        n = t(9542),
        i = t(8976),
        r = t(8819),
        d = t(547),
        l = t(507),
        o = t(4950);
      const c = {
        customModalContent: "eaaa89d602e502f9ab5a"
      };
      var m = t(3322);
      const {
        variants: p
      } = i.framer.Animations, u = e => {
        let {
          id: a,
          title: t,
          content: i,
          size: u = "md",
          expandedType: x = "short",
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
          to: y = null,
          tina: f = {}
        } = e;
        const j = (0, n.useTinaPayload)(),
          z = f?.payload?.meta?.cdn ?? j?.meta?.prod ?? !1,
          [T, b] = (0, s.useState)(v?.size ?? u);
        return (0, s.useEffect)((() => {
          b(v?.size ?? u)
        }), [v?.size, u]), (0, m.jsx)(r.Z, {
          id: a,
          title: t,
          size: T,
          expandedType: x,
          images: h,
          deckProps: v,
          prod: z,
          payload: {
            content: i,
            meta: {}
          },
          variants: p.plainCard,
          textOverlayProps: g,
          modalProps: {
            className: c.customModal,
            contentClassName: c.customModalContent
          },
          expandedCardContents: (0, m.jsx)(l.Z, {
            images: h,
            prod: z,
            expandedView: !0
          }),
          children: (0, m.jsx)(o.Z, {
            expandedType: x,
            to: y,
            children: (0, m.jsx)("div", {
              className: c.content,
              children: (0, m.jsx)(d.Z, {
                title: t,
                size: T,
                textOverlayProps: g,
                children: (0, m.jsx)(l.Z, {
                  images: h,
                  prod: z
                })
              })
            })
          })
        })
      }
    },
    1204: (e, a, t) => {
      t.d(a, {
        Z: () => u
      });
      var s = t(822),
        n = t(9542),
        i = t(8976),
        r = t(8819),
        d = t(547),
        l = t(7366);
      const o = {
        customModalContent: "e9e7ee7cbb3a089710cc"
      };
      var c = t(3322);
      const {
        transitions: m,
        variants: p
      } = i.framer.Animations, u = e => {
        let {
          id: a,
          title: t,
          content: i,
          size: u = "md",
          expandedType: x = "gallery",
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
          tina: y = {}
        } = e;
        const [f, j] = (0, s.useState)(null), z = (0, n.useTinaPayload)();
        let T;
        T = y?.payload?.meta?.cdn ?? z?.meta?.prod ?? !1;
        const [b, Z] = (0, s.useState)(v?.size ?? u), {
          parent: C,
          main: w,
          thumbs: P
        } = p?.cardWithImageGallery?.gallery ?? {};
        return (0, s.useEffect)((() => {
          const e = h?.map((e => e?.image ? {
            ...e,
            image: {
              ...e.image,
              prod: T
            }
          } : e));
          j(e)
        }), [h]), (0, s.useEffect)((() => {
          Z(v?.size ?? u)
        }), [v?.size, u]), (0, c.jsx)(r.Z, {
          id: a,
          payload: {
            content: i,
            meta: {}
          },
          title: t,
          size: b,
          expandedType: x,
          images: f,
          deckProps: v,
          prod: T,
          variants: p.cardWithImageGallery,
          textOverlayProps: g,
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
              parent: C,
              main: w,
              thumbs: P
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
              size: b,
              textOverlayProps: g,
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
    4351: (e, a, t) => {
      t.d(a, {
        Z: () => r
      });
      var s = t(8976),
        n = t(9542);
      var i = t(3322);
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
    }
  }
]);