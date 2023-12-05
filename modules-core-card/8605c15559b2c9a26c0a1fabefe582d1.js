"use strict";
(self.webpackChunk_rockstargames_modules_core_card = self.webpackChunk_rockstargames_modules_core_card || []).push([
  [919], {
    9795: (e, a, t) => {
      t.d(a, {
        Z: () => i
      });
      var s = t(8976);
      var r = t(3705);
      const i = e => {
        let {
          hasTag: a = !1,
          tag: t = null,
          tagStyle: i = null,
          badges: n = []
        } = e;
        return a && t ? (0, r.jsx)("div", {
          className: "rockstargames-modules-core-cardc1f82963328005cb78eb8c3962efdf55",
          "data-tag-style": i,
          children: t
        }) : a && n && n?.length > 0 ? (0, r.jsx)("div", {
          className: "rockstargames-modules-core-carde59761aece19863df990bdee04335ad7",
          children: n.map((e => (0, r.jsx)(s.Badge, {
            ...e
          }, e?.text)))
        }) : null
      }
    },
    1132: (e, a, t) => {
      t.d(a, {
        Z: () => b
      });
      var s = t(927),
        r = t(5370),
        i = t.n(r),
        n = t(6237),
        o = t(9542),
        c = t(8976),
        d = t(9929),
        l = t(9795),
        m = t(8753),
        p = t(2925);
      var g = t(3705);
      const {
        LiteMotion: f,
        Animations: u
      } = c.framer, {
        transitions: h
      } = u, b = e => {
        let {
          components: a,
          payload: t,
          prod: r,
          size: u,
          title: b,
          initial: x = "initial",
          animate: v = "animate",
          variants: k,
          type: y = null,
          context: w = null,
          textOverlayProps: C,
          className: P,
          children: j,
          theme: T = "none",
          cardIds: _,
          id: z,
          pricingOptions: O,
          pricingContainerHeight: N,
          isCoverCard: Z,
          platformOptions: L,
          isProductCard: H = !1
        } = e;
        const E = (0, s.useRef)(),
          S = (0, s.useRef)(),
          {
            tag: I,
            expandedHasTag: M,
            badges: V
          } = C;
        i().set(t, "meta.prod", r);
        const [, B] = (0, n.useSearchParams)(), [q, W] = (0, s.useState)(null), R = j?.props?.images.length > 0;
        let A = (0, g.jsx)("h1", {
          children: b
        });
        return Z && (A = null), (0, s.useEffect)((() => {
          null !== q && q < _?.length && q > -1 && B({
            info: _[q]
          })
        }), [q, _]), (0, s.useEffect)((() => {
          _?.forEach(((e, a) => {
            e === z && W(a)
          }))
        }), [_, z]), (0, s.useEffect)((() => {
          const e = () => {
            E.current && E.current.scrollTop > 0 && window.innerWidth >= window.innerHeight && (E.current.scrollTop = 0)
          };
          return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
        }), []), (0, g.jsx)(d.DataLayerProvider, {
          card_id: z,
          card_name: b?.toLowerCase(),
          children: (0, g.jsx)(c.ScrollTracker, {
            threshold: [25, 50, 75, 90, 100],
            trackRef: "long" === y ? E : S,
            children: (0, g.jsxs)(f, {
              ref: E,
              initial: x,
              animate: v,
              variants: k.expanded,
              transition: h.cardOpen,
              className: (0, o.classList)("rockstargames-modules-core-cardab2ff002fe79682e12519c4608068662", P),
              "data-type": y,
              "data-size": u,
              "data-product": H,
              "data-covercard": Z || !1,
              "data-context": w,
              style: {
                "--product-card-pricing-info-height": `${N||0}px`
              },
              children: [R && (0, g.jsx)(m.Z, {
                size: u,
                title: b,
                textOverlayProps: C,
                expandedView: !0,
                pricingOptions: O,
                platformOptions: L,
                isCoverCard: Z,
                children: j
              }), (0, g.jsxs)(f, {
                ref: S,
                className: "rockstargames-modules-core-cardb89031a2a4f7d385a3a1d17e583f4dc4",
                variants: k.expandedContents,
                transition: h.afterCardOpen,
                "data-theme": T,
                children: [(0, g.jsxs)("div", {
                  className: "rockstargames-modules-core-cardfbc985f4e3df2ee4a37d472282b9cd95",
                  children: [(0, g.jsx)(l.Z, {
                    hasTag: M,
                    tag: I,
                    badges: V
                  }), A, H && (0, g.jsxs)(g.Fragment, {
                    children: [!0 === L?.hasPlatformOptions && (0, g.jsx)("div", {
                      className: "rockstargames-modules-core-cardc3a31a2bbef2ccc93f46ce3486249f7a",
                      children: (0, g.jsx)(l.Z, {
                        hasTag: L?.hasPlatformOptions,
                        tag: L?._memoq?.platformTag,
                        tagStyle: L?._memoq?.platformTagStyle
                      })
                    }), !0 === O?.hasPricingOptions && (0, g.jsx)(p.Z, {
                      title: b,
                      showTitle: !1,
                      showBackground: !1,
                      tag: O?._memoq?.tag,
                      tagStyle: O?.tagStyle || "free",
                      discountPrice: O?._memoq?.discountPrice,
                      originalPrice: O?._memoq?.originalPrice
                    })]
                  })]
                }), (0, g.jsx)(o.TinaParser, {
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
    8753: (e, a, t) => {
      t.d(a, {
        Z: () => l
      });
      var s = t(927),
        r = t(7449),
        i = t(3705);
      var n = t(2925),
        o = t(9795);
      const c = {
          ps5: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e8f340ded0fd6b0b0d434e8c6c8b75e.svg",
          ps4: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg",
          ps: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1506c5bba61fa270f73c874e3d60a94f.svg",
          xboxone: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg",
          xbox: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d6d2cb861c79506282c6d6cbf1170f81.svg",
          xboxseriesxs: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/205366df6706c3b367fb5ff4f26ab7f3.svg",
          pc: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg",
          googleplay: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2ef574ea2aa502447d579267ff37e251.svg",
          applestore: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c6affc8b37ec4c75486ab6d12b2de395.svg"
        },
        d = e => {
          let {
            title: a,
            showTitle: t = !0,
            showBackground: r = !0,
            platformOptions: n,
            setPricingContainerHeight: d = (() => {})
          } = e;
          const l = (0, s.createRef)();
          return (0, s.useEffect)((() => {
            const e = () => {
              l.current && null !== d && d(l.current.clientHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [l]), (0, i.jsxs)("div", {
            className: "rockstargames-modules-core-cardf2c0c0fc07a199332ad94b05c35fc687",
            ref: l,
            "data-show-background": r,
            children: [t && (0, i.jsx)("span", {
              className: "rockstargames-modules-core-cardb15d1b8e722d56bc332e3d15d4430d97",
              children: a
            }), n?.platformsAndLinks && (0, i.jsxs)("div", {
              className: "rockstargames-modules-core-cardb2183b5b71087a21600433b0ca570130",
              children: [(0, i.jsx)(o.Z, {
                hasTag: n?._memoq?.platformTag,
                tag: n?._memoq?.platformTag,
                tagStyle: n?._memoq?.platformTagStyle
              }), (0, i.jsx)("div", {
                className: "rockstargames-modules-core-carde60d377553d7ca522c0c537527004538",
                children: n.platformsAndLinks.map((e => {
                  let {
                    platform: a,
                    buttonText: t
                  } = e;
                  return (0, i.jsx)("img", {
                    className: "rockstargames-modules-core-carde861dc69c79bf2274c7a6faff03d2d43",
                    alt: t,
                    src: c[a]
                  }, a)
                }))
              })]
            })]
          })
        },
        l = e => {
          let {
            textOverlayProps: a,
            title: t,
            size: o,
            expandedView: c = !1,
            children: l,
            pricingOptions: m,
            setPricingContainerHeight: p,
            isCoverCard: g = !1,
            platformOptions: f
          } = e;
          const [u] = (e => {
            let {
              hasTextOverlay: a,
              tag: t,
              collapsedHasTag: n,
              description: o,
              collapsedHasDescription: c,
              size: d,
              title: l,
              expandedView: m,
              badges: p
            } = e;
            const [g, f] = (0, s.useState)(null), u = (0, s.useMemo)((() => {
              if (!a) return null;
              const e = "sm" !== d && c;
              return (0, i.jsx)(r.Z, {
                title: l,
                hasTag: n,
                tag: t,
                hasDescription: e,
                description: o,
                fadesOut: m,
                badges: p
              })
            }), [a, t, n, o, c, d, l, m, p]);
            return (0, s.useEffect)((() => {
              f(u)
            }), [u]), [g, f]
          })({
            ...a,
            size: o,
            title: t,
            expandedView: c
          }), h = void 0 !== m?.hasPricingOptions || null !== f;
          return (0, i.jsxs)("header", {
            className: "rockstargames-modules-core-cardc2026bdbe4e16647d55af023c2bc6e02",
            "data-is-covercard": g,
            "data-expanded-view": c,
            children: [s.Children.map(l, (e => (0, s.cloneElement)(e, {
              title: t,
              size: o,
              expandedView: c
            }))), u, h && (0, i.jsxs)(i.Fragment, {
              children: [!0 === f?.hasPlatformOptions && (0, i.jsx)(d, {
                title: t,
                platformOptions: f,
                pricingOptions: m,
                setPricingContainerHeight: p
              }), !0 === m?.hasPricingOptions && (0, i.jsx)(n.Z, {
                title: t,
                tag: m?._memoq?.tag,
                tagStyle: m?._memoq?.tagStyle || "free",
                discountPrice: m?._memoq?.discountPrice,
                originalPrice: m?._memoq?.originalPrice,
                setPricingContainerHeight: p
              })]
            })]
          })
        }
    },
    1278: (e, a, t) => {
      t.d(a, {
        Z: () => u
      });
      var s = t(927),
        r = t(8976),
        i = t(420),
        n = t.n(i),
        o = t(9542),
        c = t(1132),
        d = t(6237),
        l = t(8008),
        m = t(6711),
        p = t(3705);
      const g = e => {
          let {
            id: a,
            position: t,
            title: r,
            size: i = "md",
            sectionTitle: n = "",
            expandedType: o = null,
            modalProps: c = {
              content: null,
              className: "",
              contentClassName: ""
            },
            className: g,
            children: f,
            isProductCard: u,
            cardIds: h = null,
            theme: b = "none",
            isCoverCard: x
          } = e;
          const [v, k] = (0, d.useSearchParams)(), y = (0, s.useRef)(null), [, w] = (0, l.useModal)(), {
            track: C
          } = (0, m.useGtmTrack)(), [P, j] = (0, s.useState)(!1), T = () => {
            j(!1), w(null), k({}), C({
              event: "trackPageview"
            })
          }, _ = () => {
            if (!c?.content || !y.current || !o || "linkout" === o) return;
            const e = y.current,
              s = window.getComputedStyle(e),
              n = parseInt(s.getPropertyValue("width"), 10),
              d = parseInt(s.getPropertyValue("height"), 10),
              l = e.getBoundingClientRect(),
              {
                content: m,
                className: p,
                contentClassName: g
              } = c,
              f = "fob" === i ? "fob" : "default";
            w({
              content: m,
              onClose: T,
              rect: l,
              width: n,
              height: d,
              className: p,
              contentClassName: g,
              fadeIn: !1,
              cardIds: h,
              theme: b,
              gtm: {
                event_label: r?.toLowerCase(),
                card_id: a,
                card_name: r?.toLowerCase(),
                position: t
              },
              aspectRatio: f,
              cardDimensions: {
                size: i,
                type: o
              }
            }), C({
              event: "trackPageview",
              link_url: window.location.href,
              card_id: a,
              card_name: r?.toLowerCase(),
              position: t
            })
          }, z = e => {
            x && "button" !== e.target.type || "linkout" !== o && (e.preventDefault(), e.stopPropagation(), a ? k({
              info: a
            }) : _(), C({
              event: "card_click",
              event_category: "card",
              event_action: "click",
              event_label: n?.toLowerCase(),
              position: t,
              card_id: a,
              card_name: r?.toLowerCase(),
              link_url: window.location.href
            }))
          };
          return (0, s.useEffect)((() => {
            P && _()
          }), [P]), (0, s.useEffect)((() => {
            j(v.get("info") === a)
          }), [v.get("info"), a]), (0, p.jsx)("div", {
            ref: y,
            onClick: z,
            onKeyUp: e => {
              (e => {
                "Enter" === e.code && z(e)
              })(e)
            },
            className: g,
            "data-size": i,
            "data-type": o,
            "data-product": u,
            role: "button",
            tabIndex: 0,
            "aria-label": r,
            children: f
          })
        },
        f = {
          card: "rockstargames-modules-core-cardcf103b7019a71a53fc48880b9160222d",
          content: "rockstargames-modules-core-carde5eea341012840d08036103857859d11",
          expandedContent: "rockstargames-modules-core-cardcc3f6c81c0361bd50c51602ea3cf7f7a",
          text: "rockstargames-modules-core-cardea5df0c0f1c231948b8313aca6ef715d",
          imageHolder: "rockstargames-modules-core-cardb6431dfee21f0b48025db4304cfa61eb",
          coverCardWrapper: "rockstargames-modules-core-cardb01ff5899532834181d2fdaae88c2a93"
        },
        u = e => {
          let {
            payload: a,
            prod: t,
            images: i,
            size: d,
            title: l,
            initial: m,
            animate: u,
            variants: h,
            id: b,
            position: x,
            sectionTitle: v,
            expandedType: k,
            context: y,
            children: w,
            expandedCardContents: C,
            textOverlayProps: P = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            deckProps: j = {},
            modalProps: T = [],
            theme: _,
            cardIds: z,
            pricingOptions: O,
            platformOptions: N = null,
            pricingContainerHeight: Z,
            isCoverCard: L = !1,
            isProductCard: H = !1
          } = e;
          const E = (0, o.useTinaComponents)(),
            S = (0, s.useMemo)((() => ({
              ...E,
              HTMLElement: r.HTMLElement,
              ImageWithBadge: r.ImageWithBadge,
              Carousel: r.Carousel,
              GroupOfItems: n()
            })), [E]),
            I = (0, s.useMemo)((() => (0, p.jsx)(c.Z, {
              type: k,
              components: S,
              payload: a,
              prod: t,
              images: i,
              size: d,
              title: l,
              context: y,
              textOverlayProps: P,
              initial: m,
              animate: u,
              variants: h,
              theme: _,
              cardIds: z,
              pricingOptions: O,
              id: b,
              pricingContainerHeight: Z,
              isCoverCard: L,
              platformOptions: N,
              isProductCard: H,
              children: C
            })), [k, i, t, d, l, P, C, m, u, h, S, a, H]),
            M = [f.card, L ? f.coverCardWrapper : ""].join(" ");
          return (0, p.jsx)(g, {
            id: b,
            position: x,
            sectionTitle: v,
            title: l,
            size: d,
            expandedType: k,
            images: i,
            deckProps: j,
            modalProps: {
              content: I,
              ...T
            },
            className: M,
            isProductCard: H,
            cardIds: z,
            theme: _,
            isCoverCard: L,
            children: w
          })
        }
    },
    2984: (e, a, t) => {
      t.d(a, {
        Z: () => u
      });
      var s = t(927),
        r = t(9542),
        i = t(559),
        n = t(8976);
      const o = {
        layeredImageFrame: "rockstargames-modules-core-cardfab7a9d470f74ec728a8a88419dde764",
        layered: "rockstargames-modules-core-carda037270563f60546ff0d3c59cbff5c0b",
        foreground: "rockstargames-modules-core-cardae1d9a27d7ee3ef28eb020b6e4f60c84",
        imageMask: "rockstargames-modules-core-cardba7be5ee83ef3c1ae7d6c1acf5ac8048",
        logo: "rockstargames-modules-core-cardb94e4ab441f3f5a47a7fa466fcd4cdaa",
        "sm-horizontal": "rockstargames-modules-core-carda7e8eb44f974c40fc6f9820d90a1a543"
      };
      var c = t(3705);
      const {
        LiteMotion: d,
        Animations: l
      } = n.framer, {
        getVariant: m,
        variants: p,
        transitions: g
      } = l, f = e => {
        let {
          image: a,
          i: t,
          prod: s
        } = e;
        const {
          alt: r,
          src: n
        } = (0, i.useImageParser)({
          ...a,
          prod: s
        });
        return (0, c.jsx)("img", {
          src: n.mobile,
          alt: r ?? "",
          style: {
            "--z-index": t
          }
        })
      }, u = e => {
        let {
          images: a = [],
          className: t = "",
          prod: i = !1,
          expandedView: n = !1,
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
        const b = (0, s.useMemo)((() => a?.length && 0 !== a.length ? a.map((e => (0, c.jsx)(d, {
          className: (0, r.classList)(o[e?.specialClass] ?? o.imageMask, o[e?.sizeClass], e.className),
          variants: m(e?.specialClass ?? "imageMask", n ? "expanded" : "collapsed"),
          initial: "initial",
          animate: "animate",
          transition: g.cardOpen,
          children: (0, c.jsx)(f, {
            image: e,
            prod: i
          })
        }, e.key))) : null), [a, u, n, i]);
        return (0, c.jsx)(d, {
          className: (0, r.classList)(o.layeredImageFrame, a.length > 1 ? o.layered : o.flat, t),
          style: l,
          initial: p.fade.in.initial,
          animate: p.fade.in.animate,
          transition: g.instantFade,
          "data-expanded-view": n,
          children: b
        })
      }
    },
    5369: (e, a, t) => {
      t.d(a, {
        Z: () => n
      });
      var s = t(8976),
        r = t(6711),
        i = t(3705);
      const n = e => {
        let {
          expandedType: a,
          to: t,
          children: n,
          style: o,
          sectionTitle: c = "",
          id: d,
          cardTitle: l,
          position: m
        } = e;
        const {
          track: p
        } = (0, r.useGtmTrack)();
        return "linkout" === a && t ? (0, i.jsx)(s.A, {
          to: t,
          style: o,
          target: t?.startsWith("http") ? "_blank" : "_self",
          onClick: () => p({
            event: "card_click",
            event_action: "click",
            event_category: "card",
            event_label: c,
            link_url: t,
            card_id: d,
            card_name: l,
            element_placement: c,
            position: m
          }),
          children: n
        }) : n
      }
    },
    2925: (e, a, t) => {
      t.d(a, {
        Z: () => i
      });
      var s = t(927);
      var r = t(3705);
      const i = e => {
        let {
          title: a,
          showTitle: t = !0,
          showBackground: i = !0,
          tag: n,
          tagStyle: o,
          discountPrice: c,
          originalPrice: d,
          setPricingContainerHeight: l = null
        } = e;
        const m = (0, s.createRef)();
        return (0, s.useEffect)((() => {
          const e = () => {
            m.current && null !== l && l(m.current.clientHeight)
          };
          return e(), window.addEventListener("resize", e), () => {
            window.removeEventListener("resize", e)
          }
        }), [m]), (0, r.jsxs)("div", {
          className: "rockstargames-modules-core-cardb33b27b9fa172992cb1ef93e5b70e353",
          ref: m,
          "data-show-background": i,
          children: [t && (0, r.jsx)("span", {
            className: "rockstargames-modules-core-cardf5a4d175d5f8b14624f89ca1f166a21a",
            children: a
          }), (0, r.jsxs)("div", {
            className: "rockstargames-modules-core-cardb016dbdcb8f1ee670f9119dd74deb64d",
            children: [(0, r.jsx)("span", {
              className: "rockstargames-modules-core-cardc8f913d063cfda7e8b69c68571f94cb2",
              "data-tag-style": o || "free",
              children: n
            }), (0, r.jsx)("span", {
              className: "rockstargames-modules-core-cardde11a91cfb689bef823338052bb0150b",
              children: c
            }), (0, r.jsx)("span", {
              className: "rockstargames-modules-core-carddb3b0cc8f6a72273792890761d5fc07b",
              children: d
            })]
          })]
        })
      }
    },
    7449: (e, a, t) => {
      t.d(a, {
        Z: () => m
      });
      var s = t(8976),
        r = t(9795);
      const i = {
        textOverlay: "rockstargames-modules-core-carde45cbf271beb53be0ac185f84ef7b8c1",
        content: "rockstargames-modules-core-cardc1ab416c07abfa2f9c2cf10ba04f026b"
      };
      var n = t(3705);
      const {
        LiteMotion: o,
        Animations: c
      } = s.framer, {
        variants: d,
        transitions: l
      } = c, m = e => {
        let {
          title: a,
          hasTag: t,
          tag: s,
          hasDescription: c,
          description: m,
          fadesOut: p = !1,
          badges: g
        } = e;
        return (0, n.jsx)(o, {
          initial: d.fade.out.initial,
          animate: {
            opacity: p ? 0 : 1
          },
          transition: l.fade,
          className: i.textOverlay,
          children: (0, n.jsxs)("div", {
            className: i.content,
            children: [(0, n.jsx)(r.Z, {
              hasTag: t,
              tag: s,
              badges: g?.filter((e => e?.isPrimary))
            }), (0, n.jsx)("h3", {
              children: a
            }), c && m && (0, n.jsx)("div", {
              className: i.description,
              children: m
            })]
          })
        })
      }
    },
    7556: (e, a, t) => {
      t.d(a, {
        Z: () => n
      });
      var s = t(927),
        r = t(8976),
        i = t(3705);
      const n = e => {
        let {
          images: a,
          title: t,
          expandedView: n,
          variants: o,
          transition: c
        } = e;
        const d = (0, s.useMemo)((() => a && 0 !== a?.length ? a.map((e => e?.image?.sources ? (0, i.jsx)(r.ImageWithBadge, {
          ...e,
          style: {
            "--object-position": e?.objectPosition ?? ""
          }
        }) : null)) : null), [a]);
        return !d?.length || d?.length < 1 ? null : 1 === d.length ? d : (0, i.jsx)(r.ThumbsGallery, {
          slideChildren: d,
          title: t,
          navigation: n,
          thumbsVisible: n,
          spaceBetween: 0,
          variants: o,
          transition: c
        })
      }
    },
    1810: (e, a, t) => {
      t.d(a, {
        Z: () => g
      });
      var s = t(927),
        r = t(9542),
        i = t(8976),
        n = t(1278),
        o = t(8753),
        c = t(2984),
        d = t(5369);
      const l = {
        customModalContent: "rockstargames-modules-core-carda15b2faad65a444365810a7dc17d2ce6",
        content: "rockstargames-modules-core-cardf04bd7012d1fef63b3a24a423a3fded0"
      };
      var m = t(3705);
      const {
        variants: p
      } = i.framer.Animations, g = e => {
        let {
          id: a,
          title: t,
          content: i,
          size: g = "md",
          expandedType: f = "short",
          textOverlayProps: u = {
            hasTextOverlay: !1,
            tag: "",
            collapsedHasTag: !1,
            expandedHasTag: !1,
            description: "",
            collapsedHasDescription: !1
          },
          images: h = [],
          deckProps: b = {},
          to: x = null,
          tina: v = {},
          position: k = 0,
          sectionTitle: y = "",
          theme: w,
          pricingOptions: C,
          cardIds: P,
          platformOptions: j = null
        } = e;
        const T = (0, r.useTinaPayload)(),
          _ = v?.payload?.meta?.cdn ?? T?.meta?.prod ?? !1,
          [z, O] = (0, s.useState)(b?.size ?? g),
          [N, Z] = (0, s.useState)(0),
          L = void 0 !== C?.hasPricingOptions || void 0 !== j?.hasPlatformOptions;
        return (0, s.useEffect)((() => {
          O(b?.size ?? g)
        }), [b?.size, g]), (0, m.jsx)(n.Z, {
          id: a,
          title: t,
          size: z,
          expandedType: f,
          images: h,
          deckProps: b,
          prod: _,
          payload: {
            content: i,
            meta: {}
          },
          variants: p.plainCard,
          textOverlayProps: u,
          modalProps: {
            className: l.customModal,
            contentClassName: l.customModalContent
          },
          expandedCardContents: (0, m.jsx)(c.Z, {
            images: h,
            prod: _,
            expandedView: !0
          }),
          position: k,
          sectionTitle: y,
          theme: w,
          cardIds: P,
          pricingOptions: C,
          platformOptions: j,
          pricingContainerHeight: N,
          isProductCard: L,
          children: (0, m.jsx)(d.Z, {
            expandedType: f,
            to: x,
            sectionTitle: y,
            id: a,
            cardTitle: t,
            position: k,
            children: (0, m.jsx)("div", {
              className: l.content,
              "data-product": L,
              children: (0, m.jsx)(o.Z, {
                title: t,
                size: z,
                textOverlayProps: u,
                pricingOptions: C,
                platformOptions: j,
                setPricingContainerHeight: Z,
                children: (0, m.jsx)(c.Z, {
                  images: h,
                  prod: _
                })
              })
            })
          })
        })
      }
    },
    7067: (e, a, t) => {
      t.d(a, {
        Z: () => g
      });
      var s = t(927),
        r = t(9542),
        i = t(8976),
        n = t(1278),
        o = t(8753),
        c = t(7556);
      const d = {
        customModalContent: "rockstargames-modules-core-cardca0929fb8857130122442f32a847f70d"
      };
      var l = t(3705);
      const {
        transitions: m,
        variants: p
      } = i.framer.Animations, g = e => {
        let {
          id: a,
          title: t,
          content: i,
          size: g = "md",
          expandedType: f = "gallery",
          textOverlayProps: u = {
            hasTextOverlay: !1,
            tag: "",
            collapsedHasTag: !1,
            expandedHasTag: !1,
            description: "",
            collapsedHasDescription: !1
          },
          images: h = [],
          deckProps: b = {},
          tina: x = {},
          payload: v,
          position: k = 0,
          sectionTitle: y = "",
          cardIds: w
        } = e;
        const C = (0, r.useTinaPayload)(),
          P = v ?? C,
          j = x?.payload?.meta?.cdn ?? P?.meta?.prod ?? !1,
          T = ((e, a) => e?.map((e => e?.image ? {
            ...e,
            image: {
              ...e.image,
              prod: a
            }
          } : e)))(h, j),
          [_, z] = (0, s.useState)(b?.size ?? g),
          {
            parent: O,
            main: N,
            thumbs: Z
          } = p?.cardWithImageGallery?.gallery ?? {};
        return (0, s.useEffect)((() => {
          z(b?.size ?? g)
        }), [b?.size, g]), (0, l.jsx)(n.Z, {
          id: a,
          position: k,
          sectionTitle: y,
          payload: {
            content: i,
            meta: {},
            payload: P
          },
          title: t,
          size: _,
          expandedType: f,
          images: T,
          deckProps: b,
          prod: j,
          variants: p.cardWithImageGallery,
          textOverlayProps: u,
          modalProps: {
            className: d.customModal,
            contentClassName: d.customModalContent
          },
          expandedCardContents: (0, l.jsx)(c.Z, {
            images: T,
            title: t,
            navigation: !0,
            thumbsVisible: !0,
            variants: {
              parent: O,
              main: N,
              thumbs: Z
            },
            transition: {
              parent: m.cardOpen,
              main: m.cardOpen,
              thumbs: m.cardOpen
            }
          }),
          cardIds: w,
          children: (0, l.jsx)("div", {
            className: d.content,
            children: (0, l.jsx)(o.Z, {
              title: t,
              size: _,
              textOverlayProps: u,
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
    5054: (e, a, t) => {
      t.d(a, {
        Z: () => n
      });
      var s = t(8976),
        r = t(9542);
      var i = t(3705);
      const n = e => {
        let {
          title: a,
          content: t,
          size: n = "md",
          badgeText: o
        } = e;
        const c = {
          ...(0, r.useTinaComponents)(),
          HTMLElement: s.HTMLElement,
          UnorderedList: s.UnorderedList,
          ListItem: s.ListItem
        };
        return (0, i.jsx)("div", {
          className: "rockstargames-modules-core-cardf9087dedff2c6a2fd349c588cf2dd568",
          "data-size": n,
          children: (0, i.jsxs)("div", {
            className: "rockstargames-modules-core-cardf913b43706e2e187899e5109e5b44ae9",
            children: [o && (0, i.jsx)("div", {
              className: "rockstargames-modules-core-carde6201ee2e74e6a5bb5a14b9fd3a80a18",
              children: o
            }), (0, i.jsxs)("div", {
              className: "rockstargames-modules-core-cardce1f20ccc7d95c91d3e2603a5b0cd597",
              children: [a && (0, i.jsx)("h3", {
                children: a
              }), (0, i.jsx)(r.TinaParser, {
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
    },
    5786: (e, a, t) => {
      t.d(a, {
        Z: () => x
      });
      var s = t(927),
        r = t(6237),
        i = t(5370),
        n = t.n(i),
        o = t(8976),
        c = t(9542),
        d = t(1810),
        l = t(7067),
        m = t(5054);
      var p = t(3705);
      const {
        Gen9CoreCarousel: g,
        framer: f,
        useTinaModuleFetchByIds: u,
        withSimpleErrorBoundary: h
      } = o, b = {
        Card: d.Z,
        CardWithImageGallery: l.Z,
        TextCard: m.Z,
        ...o
      }, x = f.withFadeIn(h((e => {
        let {
          cards: a = [],
          size: t,
          title: i,
          description: o,
          customSlidesPerView: d = null,
          theme: l = "none",
          cardSizeBreakpoints: m = {},
          customAspectRatio: f = "3/1",
          titleBadge: h = null
        } = e;
        const x = (0, s.useRef)(null),
          v = n().map(a, "id"),
          k = u({
            ids: v
          }),
          [y, w] = (0, s.useState)(d),
          [C] = (0, r.useSearchParams)(),
          [P, j] = (0, s.useState)(!1);
        (0, s.useEffect)((() => {
          if ("fob" === t) {
            const e = C.get("section");
            if (e && "games" === e && !P && (j(!0), x.current)) {
              const e = 100;
              window.scrollTo(0, x.current.offsetTop - e)
            }
          }
        }), []), (0, s.useEffect)((() => {
          if (!x.current) return;
          const e = () => {
            const e = d || window.getComputedStyle(x.current).getPropertyValue("--slides-per-view");
            w(e)
          };
          return window.addEventListener("resize", e), e(), () => {
            window.removeEventListener("resize", e)
          }
        }));
        const T = (0, s.useMemo)((() => {
          let e = 0;
          return k ? k.reduce(((a, s) => {
            if (s) {
              const {
                id: r,
                tina: o
              } = s, d = n().clone(o);
              n().set(d, "payload.meta.id", r), a.push((0, p.jsx)(c.TinaParser, {
                components: b,
                tina: d,
                componentProps: {
                  deckProps: {
                    size: t
                  },
                  tina: d,
                  id: r,
                  position: e,
                  sectionTitle: i,
                  theme: l,
                  cardIds: v
                }
              }, r)), e += 1
            }
            return a
          }), []) : null
        }), [k, t]);
        return (0, p.jsx)("div", {
          className: "rockstargames-modules-core-carde756d7ada0a1e3e90ffe947506688185",
          "data-theme": l,
          ref: x,
          children: (0, p.jsx)(g, {
            description: o,
            size: t,
            cardSizeBreakpoints: m,
            slideChildren: T,
            title: i,
            customSlidesPerView: y,
            customAspectRatio: f,
            titleBadge: h
          })
        })
      })))
    }
  }
]);