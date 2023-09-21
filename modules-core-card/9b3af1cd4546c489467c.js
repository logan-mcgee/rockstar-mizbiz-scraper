"use strict";
(self.webpackChunk_rockstargames_modules_core_card = self.webpackChunk_rockstargames_modules_core_card || []).push([
  [227], {
    3502: (e, t, a) => {
      a.d(t, {
        Z: () => r
      });
      var s = a(4932);
      var i = a(6160);
      const n = {
          ps5: "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/6c6092979b344bb70ea6.svg",
          ps4: "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/399e4fadd28201f041fe.svg",
          ps: "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/f440137b017e0d8346de.svg",
          xboxone: "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/3852a2c6a70d09be710a.svg",
          xbox: "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/96b3858c446374dbe3a1.svg",
          xboxseriesxs: "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/ef962ee0eb1746b9363f.svg",
          pc: "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/af7a4b3f215a9ffd7074.svg",
          googleplay: "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/8b2e236bdc1d39d84d57.svg",
          applestore: "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/143f36ca9d03131770b4.svg"
        },
        r = e => {
          let {
            title: t,
            showTitle: a = !0,
            showBackground: r = !0,
            platformOptions: c,
            setPricingContainerHeight: d = null
          } = e;
          const o = (0, s.createRef)();
          return (0, s.useEffect)((() => {
            const e = () => {
              o.current && null !== d && d(o.current.clientHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [o]), (0, i.jsxs)("div", {
            className: "d82452706eccb7b8eeadbeed9ee274c67407",
            ref: o,
            "data-show-background": r,
            children: [a && (0, i.jsx)("span", {
              className: "d82452706eccb7b8c39fd0843036ce142f01",
              children: t
            }), c?.platformsAndLinks && (0, i.jsx)("div", {
              className: "d82452706eccb7b8c47b30ab7c09b221ba43",
              children: c.platformsAndLinks.map((e => {
                let {
                  platform: t,
                  buttonText: a
                } = e;
                return (0, i.jsx)("img", {
                  className: "d82452706eccb7b8af429680f615e05c19d7",
                  alt: a,
                  src: n[t]
                }, t)
              }))
            })]
          })
        }
    },
    2: (e, t, a) => {
      a.d(t, {
        Z: () => f
      });
      var s = a(4932),
        i = a(3653),
        n = a.n(i),
        r = a(8976),
        c = a(9542),
        d = a(498),
        o = a(3614),
        l = a(1324);
      var m = a(6160);
      const {
        Gen9CoreCarousel: p,
        framer: g,
        useTinaModuleFetchByIds: b,
        withSimpleErrorBoundary: u
      } = r, h = {
        Card: d.Z,
        CardWithImageGallery: o.Z,
        TextCard: l.Z,
        ...r
      }, f = g.withFadeIn(u((e => {
        let {
          cards: t = [],
          size: a,
          title: i,
          description: r,
          customSlidesPerView: d = null,
          theme: o = "none",
          cardSizeBreakpoints: l = {},
          customAspectRatio: g = "3/1",
          titleBadge: u = null
        } = e;
        const f = (0, s.useRef)(null),
          v = n().map(t, "id"),
          x = b({
            ids: v
          }),
          [y, w] = (0, s.useState)(d);
        (0, s.useEffect)((() => {
          if (!f.current) return;
          const e = () => {
            const e = d || window.getComputedStyle(f.current).getPropertyValue("--slides-per-view");
            w(e)
          };
          return window.addEventListener("resize", e), e(), () => {
            window.removeEventListener("resize", e)
          }
        }));
        const P = (0, s.useMemo)((() => {
          let e = 0;
          return x ? x.reduce(((t, s) => {
            if (s) {
              const {
                id: r,
                tina: d
              } = s, l = n().clone(d);
              n().set(l, "payload.meta.id", r), t.push((0, m.jsx)(c.TinaParser, {
                components: h,
                tina: l,
                componentProps: {
                  deckProps: {
                    size: a
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
            return t
          }), []) : null
        }), [x, a]);
        return (0, m.jsx)("div", {
          className: "d82452706eccb7b8cd5e4502d7fca0835dd4",
          "data-theme": o,
          ref: f,
          children: (0, m.jsx)(p, {
            description: r,
            size: a,
            cardSizeBreakpoints: l,
            slideChildren: P,
            title: i,
            customSlidesPerView: y,
            customAspectRatio: g,
            titleBadge: u
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
        Z: () => v
      });
      var s = a(4932),
        i = a(3653),
        n = a.n(i),
        r = a(3102),
        c = a(9542),
        d = a(8976),
        o = a(9929),
        l = a(5500),
        m = a(1581),
        p = a(9813),
        g = a(3502);
      var b = a(6160);
      const {
        LiteMotion: u,
        Animations: h
      } = d.framer, {
        transitions: f
      } = h, v = e => {
        let {
          components: t,
          payload: a,
          prod: i,
          size: h,
          title: v,
          initial: x = "initial",
          animate: y = "animate",
          variants: w,
          type: P = null,
          context: C = null,
          textOverlayProps: j,
          className: k,
          children: T,
          theme: O = "none",
          cardIds: _,
          id: z,
          pricingOptions: N,
          isCoverCard: Z,
          platformOptions: L
        } = e;
        const I = (0, s.useRef)(),
          E = (0, s.useRef)(),
          {
            tag: H,
            expandedHasTag: M,
            badges: S
          } = j;
        n().set(a, "meta.prod", i);
        const [, V] = (0, r.useSearchParams)(), [B, W] = (0, s.useState)(null);
        let R = void 0 !== N?.hasPricingOptions,
          A = !1;
        R = void 0 !== N?.hasPricingOptions || null !== L, A = !0;
        const D = T?.props?.images.length > 0;
        let G = (0, b.jsx)("h1", {
          children: v
        });
        return Z && (G = null), (0, s.useEffect)((() => {
          null !== B && B < _?.length && B > -1 && V({
            info: _[B]
          })
        }), [B, _]), (0, s.useEffect)((() => {
          _?.forEach(((e, t) => {
            e === z && W(t)
          }))
        }), [_, z]), (0, s.useEffect)((() => {
          const e = () => {
            I.current && I.current.scrollTop > 0 && window.innerWidth >= window.innerHeight && (I.current.scrollTop = 0)
          };
          return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
        }), []), (0, b.jsx)(o.DataLayerProvider, {
          card_id: z,
          card_name: v?.toLowerCase(),
          children: (0, b.jsx)(d.ScrollTracker, {
            threshold: [25, 50, 75, 90, 100],
            trackRef: "long" === P ? I : E,
            children: (0, b.jsxs)(u, {
              ref: I,
              initial: x,
              animate: y,
              variants: w.expanded,
              transition: f.cardOpen,
              className: (0, c.classList)("d82452706eccb7b8b26588866b3f8cf68385", k),
              "data-type": P,
              "data-size": h,
              "data-product": R || !1,
              "data-covercard": Z || !1,
              "data-context": C,
              children: [D && (0, b.jsx)(m.Z, {
                size: h,
                title: v,
                textOverlayProps: j,
                expandedView: !0,
                pricingOptions: N,
                platformOptions: L,
                isCoverCard: Z,
                children: T
              }), (0, b.jsxs)(u, {
                ref: E,
                className: "d82452706eccb7b8c86efe7469f4c7bea32c",
                variants: w.expandedContents,
                transition: f.afterCardOpen,
                "data-theme": O,
                children: [(0, b.jsxs)("div", {
                  className: "d82452706eccb7b8d606f8b2c00b2c32599e",
                  children: [(0, b.jsx)(l.Z, {
                    hasTag: M,
                    tag: H,
                    badges: S
                  }), G, R && (0, b.jsxs)(b.Fragment, {
                    children: [!0 === L?.hasPlatformOptions && (0, b.jsx)(g.Z, {
                      title: v,
                      platformOptions: L,
                      pricingOptions: N
                    }), !0 === N?.hasPricingOptions && (0, b.jsx)(p.Z, {
                      title: v,
                      showTitle: !1,
                      showBackground: !1,
                      tag: N?._memoq?.tag,
                      tagStyle: N?.tagStyle || "free",
                      discountPrice: N?._memoq?.discountPrice,
                      originalPrice: N?._memoq?.originalPrice
                    })]
                  })]
                }), (0, b.jsx)(c.TinaParser, {
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
        Z: () => d
      });
      var s = a(4932),
        i = a(4111),
        n = a(6160);
      var r = a(9813),
        c = a(3502);
      const d = e => {
        let {
          textOverlayProps: t,
          title: a,
          size: d,
          expandedView: o = !1,
          children: l,
          pricingOptions: m,
          setPricingContainerHeight: p,
          isCoverCard: g = !1,
          platformOptions: b
        } = e;
        const [u] = (e => {
          let {
            hasTextOverlay: t,
            tag: a,
            collapsedHasTag: r,
            description: c,
            collapsedHasDescription: d,
            size: o,
            title: l,
            expandedView: m,
            badges: p
          } = e;
          const [g, b] = (0, s.useState)(null), u = (0, s.useMemo)((() => {
            if (!t) return null;
            const e = "sm" !== o && d;
            return (0, n.jsx)(i.Z, {
              title: l,
              hasTag: r,
              tag: a,
              hasDescription: e,
              description: c,
              fadesOut: m,
              badges: p
            })
          }), [t, a, r, c, d, o, l, m, p]);
          return (0, s.useEffect)((() => {
            b(u)
          }), [u]), [g, b]
        })({
          ...t,
          size: d,
          title: a,
          expandedView: o
        });
        let h = void 0 !== m?.hasPricingOptions,
          f = !1;
        return h = void 0 !== m?.hasPricingOptions || null !== b, f = !0, (0, n.jsxs)("header", {
          className: "d82452706eccb7b8abf1ce2359a28e402c7a",
          "data-is-covercard": g,
          "data-expanded-view": o,
          children: [s.Children.map(l, (e => (0, s.cloneElement)(e, {
            title: a,
            size: d,
            expandedView: o
          }))), u, h && (0, n.jsxs)(n.Fragment, {
            children: [!0 === b?.hasPlatformOptions && (0, n.jsx)(c.Z, {
              title: a,
              platformOptions: b,
              pricingOptions: m,
              setPricingContainerHeight: p
            }), !0 === m?.hasPricingOptions && (0, n.jsx)(r.Z, {
              title: a,
              tag: m?._memoq?.tag,
              tagStyle: m?.tagStyle || "free",
              discountPrice: m?._memoq?.discountPrice,
              originalPrice: m?._memoq?.originalPrice
            })]
          })]
        })
      }
    },
    3684: (e, t, a) => {
      a.d(t, {
        Z: () => u
      });
      var s = a(4932),
        i = a(8976),
        n = a(420),
        r = a.n(n),
        c = a(9542),
        d = a(2794),
        o = a(3102),
        l = a(8008),
        m = a(6711),
        p = a(6160);
      const g = e => {
          let {
            id: t,
            position: a,
            title: i,
            size: n = "md",
            sectionTitle: r = "",
            expandedType: c = null,
            modalProps: d = {
              content: null,
              className: "",
              contentClassName: ""
            },
            className: g,
            children: b,
            isProductCard: u,
            cardIds: h = null,
            theme: f = "none",
            isCoverCard: v
          } = e;
          const [x, y] = (0, o.useSearchParams)(), w = (0, s.useRef)(null), [, P] = (0, l.useModal)(), {
            track: C
          } = (0, m.useGtmTrack)(), [j, k] = (0, s.useState)(!1), T = () => {
            k(!1), P(null), y({}), C({
              event: "trackPageview"
            })
          }, O = () => {
            if (!d?.content || !w.current || !c || "linkout" === c) return;
            const e = w.current,
              s = window.getComputedStyle(e),
              r = parseInt(s.getPropertyValue("width"), 10),
              o = parseInt(s.getPropertyValue("height"), 10),
              l = e.getBoundingClientRect(),
              {
                content: m,
                className: p,
                contentClassName: g
              } = d,
              b = "fob" === n ? "fob" : "default";
            P({
              content: m,
              onClose: T,
              rect: l,
              width: r,
              height: o,
              className: p,
              contentClassName: g,
              fadeIn: !1,
              cardIds: h,
              theme: f,
              gtm: {
                event_label: i?.toLowerCase(),
                card_id: t,
                card_name: i?.toLowerCase(),
                position: a
              },
              aspectRatio: b,
              cardDimensions: {
                size: n,
                type: c
              }
            }), C({
              event: "trackPageview",
              link_url: window.location.href,
              card_id: t,
              card_name: i?.toLowerCase(),
              position: a
            })
          }, _ = e => {
            v && "button" !== e.target.type || "linkout" !== c && (e.preventDefault(), e.stopPropagation(), t ? y({
              info: t
            }) : O(), C({
              event: "card_click",
              event_category: "card",
              event_action: "click",
              event_label: r?.toLowerCase(),
              position: a,
              card_id: t,
              card_name: i?.toLowerCase(),
              link_url: window.location.href
            }))
          };
          return (0, s.useEffect)((() => {
            j && O()
          }), [j]), (0, s.useEffect)((() => {
            k(x.get("info") === t)
          }), [x.get("info"), t]), (0, p.jsx)("div", {
            ref: w,
            onClick: _,
            onKeyUp: e => {
              _(e)
            },
            className: g,
            "data-size": n,
            "data-type": c,
            "data-product": u,
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
        u = e => {
          let {
            payload: t,
            prod: a,
            images: n,
            size: o,
            title: l,
            initial: m,
            animate: u,
            variants: h,
            id: f,
            position: v,
            sectionTitle: x,
            expandedType: y,
            context: w,
            children: P,
            expandedCardContents: C,
            textOverlayProps: j = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            deckProps: k = {},
            modalProps: T = [],
            theme: O,
            cardIds: _,
            pricingOptions: z,
            platformOptions: N = null,
            isCoverCard: Z = !1
          } = e;
          const L = (0, c.useTinaComponents)();
          let I = void 0 !== z?.hasPricingOptions;
          I = void 0 !== z?.hasPricingOptions || null !== N;
          const E = (0, s.useMemo)((() => ({
              ...L,
              HTMLElement: i.HTMLElement,
              ImageWithBadge: i.ImageWithBadge,
              Carousel: i.Carousel,
              GroupOfItems: r()
            })), [L]),
            H = (0, s.useMemo)((() => (0, p.jsx)(d.Z, {
              type: y,
              components: E,
              payload: t,
              prod: a,
              images: n,
              size: o,
              title: l,
              context: w,
              textOverlayProps: j,
              initial: m,
              animate: u,
              variants: h,
              theme: O,
              cardIds: _,
              pricingOptions: z,
              id: f,
              isCoverCard: Z,
              platformOptions: N,
              children: C
            })), [y, n, a, o, l, j, C, m, u, h, E, t]),
            M = [b.card, Z ? b.coverCardWrapper : ""].join(" ");
          return (0, p.jsx)(g, {
            id: f,
            position: v,
            sectionTitle: x,
            title: l,
            size: o,
            expandedType: y,
            images: n,
            deckProps: k,
            modalProps: {
              content: H,
              ...T
            },
            className: M,
            isProductCard: I,
            cardIds: _,
            theme: O,
            isCoverCard: Z,
            children: P
          })
        }
    },
    9361: (e, t, a) => {
      a.d(t, {
        Z: () => u
      });
      var s = a(4932),
        i = a(9542),
        n = a(559),
        r = a(8976);
      const c = {
        layeredImageFrame: "d82452706eccb7b8be654799b10be1d2683c",
        layered: "d82452706eccb7b8ddb6c868927fc40f5dec",
        foreground: "d82452706eccb7b8d7e710282847fb9224de",
        imageMask: "d82452706eccb7b8ffc0a2a4179a84c1734b",
        logo: "d82452706eccb7b8fa4275085d6c272146c2",
        "sm-horizontal": "d82452706eccb7b8c7c57379e39dc9e34690"
      };
      var d = a(6160);
      const {
        LiteMotion: o,
        Animations: l
      } = r.framer, {
        getVariant: m,
        variants: p,
        transitions: g
      } = l, b = e => {
        let {
          image: t,
          i: a,
          prod: s
        } = e;
        const {
          alt: i,
          src: r
        } = (0, n.useImageParser)({
          ...t,
          prod: s
        });
        return (0, d.jsx)("img", {
          src: r.mobile,
          alt: i ?? "",
          style: {
            "--z-index": a
          }
        })
      }, u = e => {
        let {
          images: t = [],
          className: a = "",
          prod: n = !1,
          expandedView: r = !1,
          style: l = {}
        } = e;
        const [u, h] = (0, s.useState)({
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
        }), [u]);
        const f = (0, s.useMemo)((() => t?.length && 0 !== t.length ? t.map((e => (0, d.jsx)(o, {
          className: (0, i.classList)(c[e?.specialClass] ?? c.imageMask, c[e?.sizeClass], e.className),
          variants: m(e?.specialClass ?? "imageMask", r ? "expanded" : "collapsed"),
          initial: "initial",
          animate: "animate",
          transition: g.cardOpen,
          children: (0, d.jsx)(b, {
            image: e,
            prod: n
          })
        }, e.key))) : null), [t, u, r, n]);
        return (0, d.jsx)(o, {
          className: (0, i.classList)(c.layeredImageFrame, t.length > 1 ? c.layered : c.flat, a),
          style: l,
          initial: p.fade.in.initial,
          animate: p.fade.in.animate,
          transition: g.instantFade,
          "data-expanded-view": r,
          children: f
        })
      }
    },
    2174: (e, t, a) => {
      a.d(t, {
        Z: () => r
      });
      var s = a(8976),
        i = a(6711),
        n = a(6160);
      const r = e => {
        let {
          expandedType: t,
          to: a,
          children: r,
          style: c,
          sectionTitle: d = "",
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
            event_label: d,
            link_url: a,
            card_id: o,
            card_name: l,
            element_placement: d,
            position: m
          }),
          children: r
        }) : r
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
          tag: r,
          tagStyle: c,
          discountPrice: d,
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
              children: r
            }), (0, i.jsx)("span", {
              className: "d82452706eccb7b8bda97786d5063ef9b8f6",
              children: d
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
      var r = a(6160);
      const {
        LiteMotion: c,
        Animations: d
      } = s.framer, {
        variants: o,
        transitions: l
      } = d, m = e => {
        let {
          title: t,
          hasTag: a,
          tag: s,
          hasDescription: d,
          description: m,
          fadesOut: p = !1,
          badges: g
        } = e;
        return (0, r.jsx)(c, {
          initial: o.fade.out.initial,
          animate: {
            opacity: p ? 0 : 1
          },
          transition: l.fade,
          className: n.textOverlay,
          children: (0, r.jsxs)("div", {
            className: n.content,
            children: [(0, r.jsx)(i.Z, {
              hasTag: a,
              tag: s,
              badges: g?.filter((e => e?.isPrimary))
            }), (0, r.jsx)("h3", {
              children: t
            }), d && m && (0, r.jsx)("div", {
              className: n.description,
              children: m
            })]
          })
        })
      }
    },
    8811: (e, t, a) => {
      a.d(t, {
        Z: () => r
      });
      var s = a(4932),
        i = a(8976),
        n = a(6160);
      const r = e => {
        let {
          images: t,
          title: a,
          expandedView: r,
          variants: c,
          transition: d
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
          navigation: r,
          thumbsVisible: r,
          spaceBetween: 0,
          variants: c,
          transition: d
        })
      }
    },
    498: (e, t, a) => {
      a.d(t, {
        Z: () => g
      });
      var s = a(4932),
        i = a(9542),
        n = a(8976),
        r = a(3684),
        c = a(1581),
        d = a(9361),
        o = a(2174);
      const l = {
        customModalContent: "d82452706eccb7b8eaaa89d602e502f9ab5a",
        content: "d82452706eccb7b8c1f66a431c932dee33fd"
      };
      var m = a(6160);
      const {
        variants: p
      } = n.framer.Animations, g = e => {
        let {
          id: t,
          title: a,
          content: n,
          size: g = "md",
          expandedType: b = "short",
          textOverlayProps: u = {
            hasTextOverlay: !1,
            tag: "",
            collapsedHasTag: !1,
            expandedHasTag: !1,
            description: "",
            collapsedHasDescription: !1
          },
          images: h = [],
          deckProps: f = {},
          to: v = null,
          tina: x = {},
          position: y = 0,
          sectionTitle: w = "",
          theme: P,
          pricingOptions: C,
          cardIds: j,
          platformOptions: k = null
        } = e;
        const T = (0, i.useTinaPayload)(),
          O = x?.payload?.meta?.cdn ?? T?.meta?.prod ?? !1,
          [_, z] = (0, s.useState)(f?.size ?? g);
        let N = void 0 !== C?.hasPricingOptions;
        return N = void 0 !== C?.hasPricingOptions || null !== k, (0, s.useEffect)((() => {
          z(f?.size ?? g)
        }), [f?.size, g]), (0, m.jsx)(r.Z, {
          id: t,
          title: a,
          size: _,
          expandedType: b,
          images: h,
          deckProps: f,
          prod: O,
          payload: {
            content: n,
            meta: {}
          },
          variants: p.plainCard,
          textOverlayProps: u,
          modalProps: {
            className: l.customModal,
            contentClassName: l.customModalContent
          },
          expandedCardContents: (0, m.jsx)(d.Z, {
            images: h,
            prod: O,
            expandedView: !0
          }),
          position: y,
          sectionTitle: w,
          theme: P,
          cardIds: j,
          pricingOptions: C,
          platformOptions: k,
          children: (0, m.jsx)(o.Z, {
            expandedType: b,
            to: v,
            sectionTitle: w,
            id: t,
            cardTitle: a,
            position: y,
            children: (0, m.jsx)("div", {
              className: l.content,
              "data-product": N,
              children: (0, m.jsx)(c.Z, {
                title: a,
                size: _,
                textOverlayProps: u,
                pricingOptions: C,
                platformOptions: k,
                children: (0, m.jsx)(d.Z, {
                  images: h,
                  prod: O
                })
              })
            })
          })
        })
      }
    },
    3614: (e, t, a) => {
      a.d(t, {
        Z: () => g
      });
      var s = a(4932),
        i = a(9542),
        n = a(8976),
        r = a(3684),
        c = a(1581),
        d = a(8811);
      const o = {
        customModalContent: "d82452706eccb7b8e9e7ee7cbb3a089710cc"
      };
      var l = a(6160);
      const {
        transitions: m,
        variants: p
      } = n.framer.Animations, g = e => {
        let {
          id: t,
          title: a,
          content: n,
          size: g = "md",
          expandedType: b = "gallery",
          textOverlayProps: u = {
            hasTextOverlay: !1,
            tag: "",
            collapsedHasTag: !1,
            expandedHasTag: !1,
            description: "",
            collapsedHasDescription: !1
          },
          images: h = [],
          deckProps: f = {},
          tina: v = {},
          payload: x,
          position: y = 0,
          sectionTitle: w = "",
          cardIds: P
        } = e;
        const C = (0, i.useTinaPayload)(),
          j = x ?? C,
          k = v?.payload?.meta?.cdn ?? j?.meta?.prod ?? !1,
          T = ((e, t) => e?.map((e => e?.image ? {
            ...e,
            image: {
              ...e.image,
              prod: t
            }
          } : e)))(h, k),
          [O, _] = (0, s.useState)(f?.size ?? g),
          {
            parent: z,
            main: N,
            thumbs: Z
          } = p?.cardWithImageGallery?.gallery ?? {};
        return (0, s.useEffect)((() => {
          _(f?.size ?? g)
        }), [f?.size, g]), (0, l.jsx)(r.Z, {
          id: t,
          position: y,
          sectionTitle: w,
          payload: {
            content: n,
            meta: {},
            payload: j
          },
          title: a,
          size: O,
          expandedType: b,
          images: T,
          deckProps: f,
          prod: k,
          variants: p.cardWithImageGallery,
          textOverlayProps: u,
          modalProps: {
            className: o.customModal,
            contentClassName: o.customModalContent
          },
          expandedCardContents: (0, l.jsx)(d.Z, {
            images: T,
            title: a,
            navigation: !0,
            thumbsVisible: !0,
            variants: {
              parent: z,
              main: N,
              thumbs: Z
            },
            transition: {
              parent: m.cardOpen,
              main: m.cardOpen,
              thumbs: m.cardOpen
            }
          }),
          cardIds: P,
          children: (0, l.jsx)("div", {
            className: o.content,
            children: (0, l.jsx)(c.Z, {
              title: a,
              size: O,
              textOverlayProps: u,
              children: (0, l.jsx)(d.Z, {
                images: T,
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
        Z: () => r
      });
      var s = a(8976),
        i = a(9542);
      var n = a(6160);
      const r = e => {
        let {
          title: t,
          content: a,
          size: r = "md",
          badgeText: c
        } = e;
        const d = {
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
            children: [c && (0, n.jsx)("div", {
              className: "d82452706eccb7b8d4d1e516f8a980e2ce3a",
              children: c
            }), (0, n.jsxs)("div", {
              className: "d82452706eccb7b8afc8dfd2b7b7731fdc0d",
              children: [t && (0, n.jsx)("h3", {
                children: t
              }), (0, n.jsx)(i.TinaParser, {
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
    }
  }
]);
//# sourceMappingURL=9b3af1cd4546c489467c.js.map