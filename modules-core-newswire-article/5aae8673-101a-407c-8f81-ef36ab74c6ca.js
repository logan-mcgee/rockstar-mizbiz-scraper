! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "5aae8673-101a-407c-8f81-ef36ab74c6ca", e._sentryDebugIdIdentifier = "sentry-dbid-5aae8673-101a-407c-8f81-ef36ab74c6ca")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [884], {
    21760: (e, a, t) => {
      "use strict";
      t.d(a, {
        qQ: () => ie,
        wJ: () => W,
        WU: () => Se
      });
      var s = t(51664),
        i = t(73660),
        r = t.n(i),
        n = t(1740),
        c = t(9860),
        o = t(45792);
      var d = t(95240);
      const l = e => {
          let {
            hasTag: a = !1,
            tag: t = null,
            tagStyle: s = null,
            badges: i = []
          } = e;
          return a && t ? (0, d.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articlebc50cd13f1f148dd0772d2a6eee8a913",
            "data-tag-style": s,
            children: t
          }) : a && i && i?.length > 0 ? (0, d.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articled4a1a1e4fc4c16138d3c879bc1864227",
            children: i.map((e => (0, d.jsx)(c.Badge, {
              ...e
            }, e?.text)))
          }) : null
        },
        m = {
          textOverlay: "rockstargames-modules-core-newswire-articlea9e47a446a239de8e5bd56e77308ddc8",
          content: "rockstargames-modules-core-newswire-articled35747e86fd9b103a5160d7219f01856"
        },
        {
          LiteMotion: u,
          Animations: g
        } = c.framer,
        {
          variants: f,
          transitions: p
        } = g,
        b = e => {
          let {
            title: a,
            hasTag: t,
            tag: s,
            hasDescription: i,
            description: r,
            fadesOut: n = !1,
            badges: c
          } = e;
          return (0, d.jsx)(u, {
            initial: f.fade.out.initial,
            animate: {
              opacity: n ? 0 : 1
            },
            transition: p.fade,
            className: m.textOverlay,
            children: (0, d.jsxs)("div", {
              className: m.content,
              children: [(0, d.jsx)(l, {
                hasTag: t,
                tag: s,
                badges: c?.filter((e => e?.isPrimary))
              }), (0, d.jsx)("h3", {
                children: a
              }), i && r && (0, d.jsx)("div", {
                className: m.description,
                children: r
              })]
            })
          })
        },
        w = e => {
          let {
            title: a,
            showTitle: t = !0,
            showBackground: i = !0,
            tag: r,
            tagStyle: n,
            discountPrice: c,
            originalPrice: o,
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
          }), [m]), (0, d.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlef721d7192d3e29e64567a729fd8d5985",
            ref: m,
            "data-show-background": i,
            children: [t && (0, d.jsx)("span", {
              className: "rockstargames-modules-core-newswire-articlef390fe2c9338785ce412483a1bac624c",
              children: a
            }), (0, d.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articlefc5ca7a7cb4da6745e4dbef89b12bfe8",
              children: [(0, d.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articleb7ba435d2cec78951bdb0b812b098b72",
                "data-tag-style": n || "free",
                children: r
              }), (0, d.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articled8c7408e6335e53326bc70a1a065f81b",
                children: c
              }), (0, d.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articlea3632910b63514f6b49539fe45bcccb6",
                children: o
              })]
            })]
          })
        };
      var h = t(17104),
        k = t(65388),
        v = t(39336),
        x = t(96201),
        y = t(23124),
        j = t(91232),
        N = t(56644),
        S = t(15588);
      const T = {
          ps5: v,
          ps4: k,
          ps: h,
          xboxone: y,
          xbox: j,
          xboxseriesxs: x,
          nintendoswitch: S,
          pc: N,
          googleplay: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2ef574ea2aa502447d579267ff37e251.svg",
          applestore: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c6affc8b37ec4c75486ab6d12b2de395.svg"
        },
        P = e => {
          let {
            title: a,
            showTitle: t = !0,
            showBackground: i = !0,
            platformOptions: r,
            setPricingContainerHeight: n = (() => {})
          } = e;
          const c = (0, s.createRef)();
          return (0, s.useEffect)((() => {
            const e = () => {
              c.current && null !== n && n(c.current.clientHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [c]), (0, d.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlee754e3afc303a114f9e28e09c5519a30",
            ref: c,
            "data-show-background": i,
            children: [t && (0, d.jsx)("span", {
              className: "rockstargames-modules-core-newswire-articlefd98e3d7af2a583d4338d802666901a5",
              children: a
            }), r?.platformsAndLinks && (0, d.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articlecbde4b9406c59131d6d4c8d9b2291a84",
              children: [(0, d.jsx)(l, {
                hasTag: r?._memoq?.platformTag,
                tag: r?._memoq?.platformTag,
                tagStyle: r?._memoq?.platformTagStyle
              }), (0, d.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articleb7de0e1798d1a020191fbe44b67f34d2",
                children: r.platformsAndLinks.map((e => {
                  let {
                    platform: a,
                    buttonText: t
                  } = e;
                  return (0, d.jsx)("img", {
                    className: "rockstargames-modules-core-newswire-articleaa5f852c8932dcf689a97496d437f13b",
                    alt: t,
                    src: T[a]
                  }, a)
                }))
              })]
            })]
          })
        },
        _ = e => {
          let {
            textOverlayProps: a,
            title: t,
            size: i,
            expandedView: r = !1,
            children: n,
            pricingOptions: c,
            setPricingContainerHeight: o,
            isCoverCard: l = !1,
            platformOptions: m
          } = e;
          const [u] = (e => {
            let {
              hasTextOverlay: a,
              tag: t,
              collapsedHasTag: i,
              description: r,
              collapsedHasDescription: n,
              size: c,
              title: o,
              expandedView: l,
              badges: m
            } = e;
            const [u, g] = (0, s.useState)(null), f = (0, s.useMemo)((() => {
              if (!a) return null;
              const e = "sm" !== c && n;
              return (0, d.jsx)(b, {
                title: o,
                hasTag: i,
                tag: t,
                hasDescription: e,
                description: r,
                fadesOut: l,
                badges: m
              })
            }), [a, t, i, r, n, c, o, l, m]);
            return (0, s.useEffect)((() => {
              g(f)
            }), [f]), [u, g]
          })({
            ...a,
            size: i,
            title: t,
            expandedView: r
          }), g = void 0 !== c?.hasPricingOptions || null !== m;
          return (0, d.jsxs)("header", {
            className: "rockstargames-modules-core-newswire-articlec525342927ce11e37cc24e653e0ffc95",
            "data-is-covercard": l,
            "data-expanded-view": r,
            children: [s.Children.map(n, (e => (0, s.cloneElement)(e, {
              title: t,
              size: i,
              expandedView: r
            }))), u, g && (0, d.jsxs)(d.Fragment, {
              children: [!0 === m?.hasPlatformOptions && (0, d.jsx)(P, {
                title: t,
                platformOptions: m,
                pricingOptions: c,
                setPricingContainerHeight: o
              }), !0 === c?.hasPricingOptions && (0, d.jsx)(w, {
                title: t,
                tag: c?._memoq?.tag,
                tagStyle: c?._memoq?.tagStyle || "free",
                discountPrice: c?._memoq?.discountPrice,
                originalPrice: c?._memoq?.originalPrice,
                setPricingContainerHeight: o
              })]
            })]
          })
        },
        {
          LiteMotion: C,
          Animations: I
        } = c.framer,
        {
          transitions: L
        } = I,
        E = e => {
          let {
            components: a,
            payload: t,
            prod: i,
            size: m,
            title: u,
            initial: g = "initial",
            animate: f = "animate",
            variants: p,
            type: b = null,
            context: h = null,
            textOverlayProps: k,
            className: v,
            children: x,
            theme: y = "none",
            id: j,
            pricingOptions: N,
            pricingContainerHeight: S,
            isCoverCard: T,
            platformOptions: P,
            isProductCard: I = !1
          } = e;
          const E = (0, s.useRef)(),
            M = (0, s.useRef)(),
            {
              tag: D,
              expandedHasTag: z,
              badges: O
            } = k;
          r().set(t, "meta.prod", i);
          const V = x?.props?.images.length > 0;
          let $ = (0, d.jsx)("h1", {
            children: u
          });
          return T && ($ = null), (0, s.useEffect)((() => {
            const e = () => {
              E.current && E.current.scrollTop > 0 && window.innerWidth >= window.innerHeight && (E.current.scrollTop = 0)
            };
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), []), (0, d.jsx)(o.DataLayerProvider, {
            card_id: j,
            card_name: u?.toLowerCase(),
            children: (0, d.jsx)(c.ScrollTracker, {
              threshold: [25, 50, 75, 90, 100],
              trackRef: "long" === b ? E : M,
              children: (0, d.jsxs)(C, {
                ref: E,
                initial: g,
                animate: f,
                variants: p.expanded,
                transition: L.cardOpen,
                className: (0, n.classList)("rockstargames-modules-core-newswire-articledcb84dcfd34616fb0089133acf0c4669", v),
                "data-type": b,
                "data-size": m,
                "data-product": I,
                "data-covercard": T || !1,
                "data-context": h,
                style: {
                  "--product-card-pricing-info-height": `${S||0}px`
                },
                children: [V && (0, d.jsx)(_, {
                  size: m,
                  title: u,
                  textOverlayProps: k,
                  expandedView: !0,
                  pricingOptions: N,
                  platformOptions: P,
                  isCoverCard: T,
                  children: x
                }), (0, d.jsxs)(C, {
                  ref: M,
                  className: "rockstargames-modules-core-newswire-articleeaf357a8d0bae1199142949cbf24e7b9",
                  variants: p.expandedContents,
                  transition: L.afterCardOpen,
                  "data-theme": y,
                  children: [(0, d.jsxs)("div", {
                    className: "rockstargames-modules-core-newswire-articlefc0e079f7c184b912d5a46b037d01b0d",
                    children: [(0, d.jsx)(l, {
                      hasTag: z,
                      tag: D,
                      badges: O
                    }), $, I && (0, d.jsxs)(d.Fragment, {
                      children: [!0 === P?.hasPlatformOptions && (0, d.jsx)("div", {
                        className: "rockstargames-modules-core-newswire-articleb630c7c1f59f91f2ac304af525b6d081",
                        children: (0, d.jsx)(l, {
                          hasTag: P?.hasPlatformOptions,
                          tag: P?._memoq?.platformTag,
                          tagStyle: P?._memoq?.platformTagStyle
                        })
                      }), !0 === N?.hasPricingOptions && (0, d.jsx)(w, {
                        title: u,
                        showTitle: !1,
                        showBackground: !1,
                        tag: N?._memoq?.tag,
                        tagStyle: N?.tagStyle || "free",
                        discountPrice: N?._memoq?.discountPrice,
                        originalPrice: N?._memoq?.originalPrice
                      })]
                    })]
                  }), (0, d.jsx)(n.TinaParser, {
                    components: a,
                    tina: {
                      payload: t
                    }
                  })]
                })]
              })
            })
          })
        };
      var M = t(45364),
        D = t.n(M),
        z = t(57013),
        O = t(42836);
      const V = "modal-context",
        $ = [null, () => null],
        F = window?.[V] ?? (window[V] = (0, s.createContext)($)),
        H = e => {
          let {
            id: a,
            position: t,
            title: i,
            size: r = "md",
            sectionTitle: n = "",
            expandedType: c = null,
            modalProps: o = {
              content: null,
              className: "",
              contentClassName: ""
            },
            className: l,
            children: m,
            isProductCard: u,
            cardIds: g = null,
            theme: f = "none",
            isCoverCard: p
          } = e;
          const [b, w] = (0, z.useSearchParams)(), h = (0, s.useRef)(null), [, k] = (0, s.useContext)(F), {
            track: v
          } = (0, O.useGtmTrack)(), [x, y] = (0, s.useState)(!1), j = () => {
            y(!1), k(null), w({}), v({
              event: "trackPageview"
            })
          }, N = () => {
            if (!o?.content || !h.current || !c || "linkout" === c) return;
            const e = h.current,
              s = window.getComputedStyle(e),
              n = parseInt(s.getPropertyValue("width"), 10),
              d = parseInt(s.getPropertyValue("height"), 10),
              l = e.getBoundingClientRect(),
              {
                content: m,
                className: u,
                contentClassName: p
              } = o,
              b = "fob" === r ? "fob" : "default";
            k({
              content: m,
              onClose: j,
              rect: l,
              width: n,
              height: d,
              className: u,
              contentClassName: p,
              fadeIn: !1,
              cardIds: g,
              theme: f,
              activeId: a,
              gtm: {
                event_label: i?.toLowerCase(),
                card_id: a,
                card_name: i?.toLowerCase(),
                position: t
              },
              aspectRatio: b,
              cardDimensions: {
                size: r,
                type: c
              }
            }), v({
              event: "trackPageview",
              link_url: window.location.href,
              card_id: a,
              card_name: i?.toLowerCase(),
              position: t
            })
          }, S = e => {
            p && "button" !== e.target.type || "linkout" !== c && (e.preventDefault(), e.stopPropagation(), a ? w({
              info: a
            }) : N(), v({
              event: "card_click",
              element_placement: n?.toLowerCase(),
              event_category: "card",
              event_action: "click",
              event_label: n?.toLowerCase(),
              position: t,
              card_id: a,
              card_name: i?.toLowerCase(),
              link_url: window.location.href
            }))
          };
          return (0, s.useEffect)((() => {
            x && N()
          }), [x]), (0, s.useEffect)((() => {
            y(b.get("info") === a)
          }), [b.get("info"), a]), (0, d.jsx)("div", {
            ref: h,
            onClick: S,
            onKeyUp: e => {
              (e => {
                "Enter" === e.code && S(e)
              })(e)
            },
            className: l,
            "data-size": r,
            "data-type": c,
            "data-product": u,
            role: "button",
            tabIndex: "linkout" !== c ? 0 : -1,
            "aria-label": i,
            children: m
          })
        },
        B = {
          pillBtn: "rockstargames-modules-core-newswire-articleebdcdd73cdde7ce5626490066de01474",
          selected: "rockstargames-modules-core-newswire-articled058244e6f29505e3c05558039370b54",
          card: "rockstargames-modules-core-newswire-articlec2685d1ff8cc088bfef4c336b1a9f8ae",
          content: "rockstargames-modules-core-newswire-articlee268650dd5a86c01be62eeb552b4e54b",
          expandedContent: "rockstargames-modules-core-newswire-articled19c433e20935d6b1eebff53baa04bb1",
          text: "rockstargames-modules-core-newswire-articlebeee7d7b941675acb2b6b9bf5caf4f33",
          imageHolder: "rockstargames-modules-core-newswire-articlec823ac57eab14be16dd87e168e610d4f",
          coverCardWrapper: "rockstargames-modules-core-newswire-articleef72671ab95bb9290b80637cb3073d29"
        },
        G = e => {
          let {
            payload: a,
            prod: t,
            images: i,
            size: r,
            title: o,
            initial: l,
            animate: m,
            variants: u,
            id: g,
            position: f,
            sectionTitle: p,
            expandedType: b,
            context: w,
            children: h,
            expandedCardContents: k,
            textOverlayProps: v = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            deckProps: x = {},
            modalProps: y = [],
            theme: j,
            cardIds: N,
            pricingOptions: S,
            platformOptions: T = null,
            pricingContainerHeight: P,
            isCoverCard: _ = !1,
            isProductCard: C = !1
          } = e;
          const I = (0, n.useTinaComponents)(),
            L = (0, s.useMemo)((() => ({
              ...I,
              HTMLElement: c.HTMLElement,
              ImageWithBadge: c.ImageWithBadge,
              Carousel: c.Carousel,
              GroupOfItems: D()
            })), [I]),
            M = (0, s.useMemo)((() => (0, d.jsx)(E, {
              type: b,
              components: L,
              payload: a,
              prod: t,
              images: i,
              size: r,
              title: o,
              context: w,
              textOverlayProps: v,
              initial: l,
              animate: m,
              variants: u,
              theme: j,
              cardIds: N,
              pricingOptions: S,
              id: g,
              pricingContainerHeight: P,
              isCoverCard: _,
              platformOptions: T,
              isProductCard: C,
              children: k
            })), [b, i, t, r, o, v, k, l, m, u, L, a, C]),
            z = [B.card, _ ? B.coverCardWrapper : ""].join(" ");
          return (0, d.jsx)(H, {
            id: g,
            position: f,
            sectionTitle: p,
            title: o,
            size: r,
            expandedType: b,
            images: i,
            deckProps: x,
            modalProps: {
              content: M,
              ...y
            },
            className: z,
            isProductCard: C,
            cardIds: N,
            theme: j,
            isCoverCard: _,
            children: h
          })
        },
        A = {
          clrCollapsedCard: "rockstargames-modules-core-newswire-articlefd8a3e4025f5bdb8b4d2a3f4f4fe2134",
          cardContainer: "rockstargames-modules-core-newswire-articlee0f2a97409fc0da53eb41dd7eda2cc1d",
          cardInfo: "rockstargames-modules-core-newswire-articlef36f44f341ab5fcc53f1a40bbd5d204b",
          subtitle: "rockstargames-modules-core-newswire-articleea8380a1bfb197c92d4a5cf18dd7c0d7",
          price: "rockstargames-modules-core-newswire-articlea2f472fdf58c77bb93b0386c70af2589",
          newBadge: "rockstargames-modules-core-newswire-articlef22545e267c507119956ec5075637b95",
          outOfStockBadge: "rockstargames-modules-core-newswire-articlea2fea067473934681dd933a67f0f98bf",
          saleBadge: "rockstargames-modules-core-newswire-articlef494e92b89019387b6e8f10550637438",
          slashedPrice: "rockstargames-modules-core-newswire-articleeae1adc5a72c6de1baa46423f96c066f",
          storeInfo: "rockstargames-modules-core-newswire-articlef7c3bc06f2735e3a75db602e4aabbf5a",
          priceInfo: "rockstargames-modules-core-newswire-articleaa82e6cb0fdecc71128122e6adc37791",
          cardDesc: "rockstargames-modules-core-newswire-articlecb155936ef4888dc38c198b39541f0bd"
        },
        R = e => {
          let {
            videoUrl: a,
            expandedType: t,
            children: s
          } = e;
          return a && "linkout" === t ? (0, d.jsx)(c.A, {
            to: a,
            children: s
          }) : s
        },
        W = e => {
          let {
            className: a,
            cardType: t,
            title: s,
            image: i,
            subheader: r,
            subtitle: n,
            price: o,
            slashedPrice: l,
            badge: m = null,
            expandedType: u,
            videoUrl: g
          } = e;
          return (0, d.jsx)("div", {
            className: [A.clrCollapsedCard, a].join(" "),
            role: "button",
            tabIndex: 0,
            children: (0, d.jsx)(R, {
              videoUrl: g,
              expandedType: u,
              children: (0, d.jsxs)("div", {
                className: A.cardContainer,
                "data-type": t,
                children: [(0, d.jsx)("div", {
                  className: A.cardMedia,
                  children: (0, d.jsx)(c.MultiSourceImage, {
                    ...i
                  })
                }), (0, d.jsxs)("div", {
                  className: A.cardInfo,
                  children: [r && (0, d.jsx)("h6", {
                    children: r
                  }), (0, d.jsx)("h5", {
                    children: s
                  }), n && (0, d.jsx)("h6", {
                    className: A.subtitle,
                    children: n
                  }), "store" === t && (0, d.jsxs)("div", {
                    className: A.storeInfo,
                    children: [(0, d.jsx)("p", {
                      className: (() => {
                        switch (m) {
                          case "New":
                            return A.newBadge;
                          case "Sale":
                            return A.saleBadge;
                          case "Out of Stock":
                            return A.outOfStockBadge;
                          default:
                            return ""
                        }
                      })(),
                      children: m
                    }), (0, d.jsxs)("span", {
                      className: A.priceInfo,
                      children: [(0, d.jsx)("p", {
                        className: A.price,
                        children: o
                      }), (0, d.jsx)("p", {
                        className: A.slashedPrice,
                        children: l
                      })]
                    })]
                  })]
                })]
              })
            })
          })
        },
        q = e => {
          let {
            expandedType: a,
            to: t,
            children: i,
            style: r,
            sectionTitle: n = "",
            id: o,
            cardTitle: l,
            position: m
          } = e;
          const {
            track: u
          } = (0, O.useGtmTrack)(), g = (0, s.useCallback)((() => {
            u({
              event: "card_click",
              event_action: "click",
              event_category: "card",
              event_label: n,
              link_url: t,
              card_id: o,
              card_name: l,
              element_placement: n.toLowerCase(),
              position: m
            })
          }), [n, t, o, l, n, m]);
          return "linkout" === a && t ? (0, d.jsx)(c.A, {
            to: t,
            style: r,
            target: t?.startsWith("http") ? "_blank" : "_self",
            onClick: g,
            children: i
          }) : i
        };
      var U = t(45652);
      const Q = {
          layeredImageFrame: "rockstargames-modules-core-newswire-articlef4291aa18340b383f772137ec9e0c582",
          layered: "rockstargames-modules-core-newswire-articlef48bca962431b0e1cbf30e25dfb23979",
          foreground: "rockstargames-modules-core-newswire-articleb52f487de5963cf5eab84e86c244302b",
          imageMask: "rockstargames-modules-core-newswire-articlef55d22ef90c565718cad7bf6387893a7",
          logo: "rockstargames-modules-core-newswire-articlefa6e98cbad19c314e5759f3aa0a2f9b3",
          "sm-horizontal": "rockstargames-modules-core-newswire-articleb496d31814195834a5e84fa5157ede59"
        },
        {
          LiteMotion: Y,
          Animations: K
        } = c.framer,
        {
          getVariant: X,
          variants: J,
          transitions: Z
        } = K,
        ee = e => {
          let {
            image: a,
            i: t,
            prod: s
          } = e;
          const {
            alt: i,
            src: r
          } = (0, U.useImageParser)({
            ...a,
            prod: s
          });
          return (0, d.jsx)("img", {
            src: r.mobile,
            alt: i ?? "",
            style: {
              "--z-index": t
            }
          })
        },
        ae = e => {
          let {
            images: a = [],
            className: t = "",
            prod: i = !1,
            expandedView: r = !1,
            style: c = {}
          } = e;
          const [o, l] = (0, s.useState)({
            height: window.innerHeight,
            width: window.innerWidth
          });
          (0, s.useEffect)((() => {
            function e() {
              l({
                height: window.innerHeight,
                width: window.innerWidth
              })
            }
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [o]);
          const m = (0, s.useMemo)((() => a?.length && 0 !== a.length ? a.map((e => (0, d.jsx)(Y, {
            className: (0, n.classList)(Q[e?.specialClass] ?? Q.imageMask, Q[e?.sizeClass], e?.className),
            variants: X(e?.specialClass ?? "imageMask", r ? "expanded" : "collapsed"),
            initial: "initial",
            animate: "animate",
            transition: Z.cardOpen,
            children: (0, d.jsx)(ee, {
              image: e,
              prod: i
            })
          }, e.key))) : null), [a, o, r, i]);
          return (0, d.jsx)(Y, {
            className: (0, n.classList)(Q.layeredImageFrame, a.length > 1 ? Q.layered : Q.flat, t),
            style: c,
            initial: J.fade.in.initial,
            animate: J.fade.in.animate,
            transition: Z.instantFade,
            "data-expanded-view": r,
            children: m
          })
        },
        te = {
          clrCardModalContent: "rockstargames-modules-core-newswire-articlebfb45dddcb9390c11ba16607a49ea776",
          expandedCard: "rockstargames-modules-core-newswire-articled8a1f864c20db127067721ebe605540b",
          content: "rockstargames-modules-core-newswire-articled57eaa4a6807e67f6189ae02a1625595",
          details: "rockstargames-modules-core-newswire-articlefd05f61944281a1ef50e21bc30de10f7",
          calloutHeaders: "rockstargames-modules-core-newswire-articlef12819eca617b4b90f2cfd0c5788db65"
        },
        {
          variants: se
        } = c.framer.Animations,
        ie = e => {
          let {
            id: a,
            content: t,
            size: s = "clr",
            cardType: i = "release",
            title: r,
            subheader: c,
            subtitle: o,
            storeInfo: l = {},
            expandedType: m,
            to: u,
            image: g,
            deckProps: f,
            tina: p = {},
            position: b
          } = e;
          const w = (0, n.useTinaPayload)(),
            h = p?.payload?.meta?.cdn ?? w?.meta?.prod ?? !1,
            k = {
              image: {
                ...g,
                prod: h
              }
            },
            v = [g];
          return (0, d.jsx)(G, {
            id: a,
            title: r,
            context: "clr-card",
            size: s,
            expandedType: m,
            images: k,
            deckProps: f,
            prod: h,
            position: b,
            modalProps: {
              className: te.clrCardModal,
              contentClassName: te.clrCardModalContent
            },
            variants: se.plainCard,
            payload: {
              content: t
            },
            expandedCardContents: (0, d.jsx)(ae, {
              images: v,
              prod: h
            }),
            children: (0, d.jsx)(q, {
              expandedType: m,
              to: u,
              style: {
                display: "flex"
              },
              children: (0, d.jsx)(W, {
                cardType: i,
                title: r,
                subheader: c,
                subtitle: o,
                image: k,
                expandedType: m,
                price: l?.price,
                slashedPrice: l?.slashedPrice,
                badge: l?.badge
              })
            })
          })
        },
        re = e => {
          let {
            images: a,
            title: t,
            expandedView: i,
            variants: r,
            transition: n
          } = e;
          const o = (0, s.useMemo)((() => a && 0 !== a?.length ? a.map((e => e?.image?.sources ? (0, d.jsx)(c.ImageWithBadge, {
            ...e,
            style: {
              "--object-position": e?.objectPosition ?? ""
            }
          }) : null)) : null), [a]);
          return !o?.length || o?.length < 1 ? null : 1 === o.length ? o : (0, d.jsx)(c.ThumbsGallery, {
            slideChildren: o,
            title: t,
            navigation: i,
            thumbsVisible: i,
            spaceBetween: 0,
            variants: r,
            transition: n
          })
        };
      var ne = t(69760),
        ce = t.n(ne);
      const oe = {
          pillBtn: "rockstargames-modules-core-newswire-articled13aae72f49e86630d46fa6e54e1fbdc",
          selected: "rockstargames-modules-core-newswire-articlebcc7bd9d9a43edf197cc46795d57249b",
          customModalContent: "rockstargames-modules-core-newswire-articleceeb11e5fc712f410c8c4879663640ef"
        },
        {
          transitions: de,
          variants: le
        } = c.framer.Animations;
      t(33052), t(95660);
      var me = t(79584),
        ue = t(55120);
      const ge = (e, a) => {
          let t = getComputedStyle(e).getPropertyValue(a);
          return t = t.replace("px", "").replace("rem", "").replace("em", ""), t = t.replace("vh", "").replace("vw", "").replace("vmin", "").replace("vmax", ""), t = t.replace("ms", "").replace("s", ""), Number(t)
        },
        fe = e => ({
          x: void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
          y: void 0 !== e.changedTouches ? e.changedTouches[0].screenY : e.screenY
        }),
        pe = e => e.scrollHeight > e.clientHeight;

      function be(e, a) {
        const t = {
          ...e
        };
        return r().forOwn(e, ((e, s) => {
          if ("image" === s) {
            const e = t[s];
            t[s] = {
              ...e,
              prod: a
            }
          } else r().isObject(e) && !r().isArray(e) ? be(e, a) : r().isArray(e) && (t[s] = e.map((e => r().isObject(e) ? be(e, a) : e)))
        })), t
      }(0, o.withTranslations)((e => {
        let {
          active: a,
          styles: t,
          title: i,
          itemNumber: r,
          inModalMode: o,
          openModalMode: l,
          element: m,
          upNext: u,
          mobileMode: g,
          refDeck: f,
          components: p,
          tina: b,
          prevPage: w,
          nextPage: h,
          transitionStyle: k,
          selectedItemNumber: v,
          carouselTitle: x,
          sharedDraggingDelta: y,
          setSharedDraggingDelta: j
        } = e;
        const N = (0, me.useIntl)(),
          {
            track: S
          } = (0, O.useGtmTrack)(),
          T = (0, s.createRef)(),
          P = (0, s.createRef)(),
          _ = (0, s.createRef)(),
          C = (0, s.createRef)(),
          I = (0, s.createRef)(),
          [L, E] = (0, s.useState)(!1),
          [M, D] = (0, s.useState)(0),
          [z, V] = (0, s.useState)(0),
          [$, F] = (0, s.useState)(0),
          [H, B] = (0, s.useState)(0),
          [G, A] = (0, s.useState)(0),
          [R, W] = (0, s.useState)(!1),
          [q, Q] = (0, s.useState)(0),
          [Y, K] = (0, s.useState)(0),
          [X, J] = (0, s.useState)(0),
          [Z, ee] = (0, s.useState)("700"),
          [ae, te] = (0, s.useState)(-1),
          [se, ie] = (0, s.useState)(0),
          [re, ne] = (0, s.useState)(0),
          [oe, de] = (0, s.useState)(0),
          [le, we] = (0, s.useState)(!1),
          [he, ke] = (0, s.useState)(""),
          [ve, xe] = (0, s.useState)(null),
          [ye, je] = (0, s.useState)(!1),
          [Ne, Se] = (0, s.useState)(null),
          [Te, Pe] = (0, s.useState)(!1),
          [_e, Ce] = (0, s.useState)(!1),
          Ie = (0, n.useTinaPayload)(),
          Le = b?.payload?.meta?.cdn ?? !1 ?? Ie?.meta?.prod ?? !1,
          Ee = (0, n.useTranslations)({
            payload: b?.payload,
            variables: b?.variables
          }),
          Me = Ee?.meta ?? {},
          De = be(Ee?.content?.[0], Le),
          ze = (0, s.useMemo)((() => De?.images?.[0]?.image?.badge), [De]),
          Oe = (0, s.useMemo)((() => De.title ?? i ?? Me?.title), [i, Me?.title, De.title]),
          Ve = (0, U.useImageParser)({
            alt: De?.images?.[0]?.image?.alt ?? "",
            ariaLabel: De?.images?.[0]?.image?.alt ?? "",
            sources: De?.images?.[0]?.image?.sources ?? [],
            prod: Le
          }),
          $e = Ve?.src?.mobile ?? Ve?.src?.desktop ?? !1,
          Fe = (0, s.useMemo)((() => Me?.foreignId), [Me]),
          He = (0, s.useMemo)((() => Me?.foreignTitle), [Me]),
          [Be, Ge] = (0, s.useState)(0),
          [Ae, Re] = (0, s.useState)(0),
          [We, qe] = (0, s.useState)(0),
          [Ue, Qe] = (0, s.useState)(0),
          [Ye, Ke] = (0, s.useState)(!1),
          [Xe, Je] = (0, s.useState)(0),
          [Ze, ea] = (0, s.useState)(20),
          [aa, ta] = (0, s.useState)(null),
          [sa, ia] = (0, s.useState)(!1),
          ra = (0, s.useCallback)((e => {
            if (!0 === R || !o && !g || ye) return;
            const a = fe(e);
            Ge(a.x), Re(a.y)
          }), [R, o]),
          na = e => {
            ra(e)
          },
          ca = e => {
            if (!0 === R || 0 === Be || !o && !g || ye) return;
            const a = fe(e),
              t = a.x > Be ? 1 : -1,
              s = Math.abs(Be - a.x);
            o && !g && s > Ze ? (ia(!0), ke(t > 0 ? "prev" : "next"), da()) : (Ke(!0), Je(s * t), j(s * t))
          },
          oa = e => {
            if (!0 === R || !o && !g || ye) return;
            const a = fe(e),
              t = a.x > Be ? 1 : -1,
              s = Math.abs(Be - a.x),
              i = Math.abs(Ae - a.y);
            o && !g ? (da(), ke("")) : s > Ze && i < 25 ? (ia(!0), ke(t > 0 ? "prev" : "next"), da()) : da()
          },
          da = () => {
            W(!0), Ge(0), Re(0), Ke(!1), Je(0), j(0)
          };
        return (0, s.useEffect)((() => {
          let e = q;
          L ? e = 0 : o && !g && (e = q), D(e)
        }), [L, g, o, z, H, Y, X, $, q]), (0, s.useEffect)((() => {
          E(!(!o || !g))
        }), [o, g]), (0, s.useEffect)((() => {
          o && a && S({
            event: "virtualPageview",
            display_type: g ? "mobile" : "desktop",
            view_name: `${Fe}/${Oe}`,
            source_content_id: Fe,
            source_content_name: He
          })
        }), [o, a]), (0, s.useEffect)((() => {
          const e = ce()(((e, a) => {
            let t = 18;
            if (e?.documentElement && (t = ge(e?.documentElement, "--root-font-size")), re !== a.innerHeight && ne(a.innerHeight), f?.current) {
              J(ge(f.current, "--eventDeck-marginSm") * t);
              const e = t * ge(f?.current, "--eventDeck-modalGutters"),
                s = a?.innerWidth,
                i = s - 2 * e;
              V(i), C.current && g && F(i), B(ge(f.current, "--eventDeck-itemSize") * t), de(ge(f.current, "--eventDeck-phaseOneTransitionDuration"));
              const r = ge(f?.current, "--eventDeck-itemImageTitleMargins") * t,
                n = P?.current?.clientHeight,
                c = n + r;
              Number.isNaN(c) || Q(c), ie(ge(f?.current, "--eventDeck-headerHeight") * t)
            }
            let s = Math.min(700, a.innerWidth);
            g || (s = 900), ee(`${s}`)
          }), 300);
          return window.addEventListener("resize", (() => {
            e(document, window)
          })), e(document, window), () => {
            window.removeEventListener("resize", (() => {
              e(document, window)
            }))
          }
        }), [f, g]), (0, s.useEffect)((() => {
          if (T.current) {
            const e = T.current.clientHeight;
            Number.isNaN(e) || K(e)
          }
        }), [T]), (0, s.useEffect)((() => {
          if (o && g && C.current && (C.current.style.transform = "scale(1) translate3d(0, 0, 0)"), !o && g && C.current) {
            const e = 228 / z;
            C.current.style.transform = `scale(${e}) translate3d(0, 0, 0)`
          }!g && C.current && (C.current.style.transform = null)
        }), [o, g, z, $]), (0, s.useEffect)((() => {
          const e = .5 * z,
            a = re - se - 3 * X;
          A(z - (e < a ? e : a))
        }), [z, X, re]), (0, s.useEffect)((() => {
          "next" === he ? (h(null, !0), ke("")) : "prev" === he && (w(null, !0), ke(""))
        }), [he]), (0, s.useEffect)((() => {
          qe(0), Qe(0)
        }), [g]), (0, s.useEffect)((() => {
          g ? ea(o ? 35 : 20) : o && ea(50)
        }), [o, g]), (0, s.useEffect)((() => {
          let e = [],
            a = 0,
            s = 0;
          if (null !== t?.transform) {
            e = t.transform.split(",");
            const i = e[0].split("(");
            a = Number(i[1].replace("px", "")), qe(a), s = Number(e[1].replace("px", "")), Qe(s)
          }
        }), [t]), (0, s.useEffect)((() => {
          if (!R) return;
          clearTimeout(ve);
          const e = setTimeout((() => {
            W(!1), Ge(0)
          }), 200);
          xe(e)
        }), [R, 200]), (0, s.useEffect)((() => {
          if (!sa) return;
          clearTimeout(aa);
          const e = setTimeout((() => {
            ia(!1)
          }), 1e3);
          ta(e)
        }), [sa]), (0, s.useEffect)((() => {
          o && clearTimeout(ae), setTimeout((() => {
            we(!le)
          }), oe)
        }), [o]), (0, s.useEffect)((() => (document.body.addEventListener("mouseleave", da), () => {
          document.body.removeEventListener("mouseleave", da)
        })), []), (0, s.useEffect)((() => {
          I.current ? Pe(pe(I.current)) : Pe(!1), void 0 !== m && m.current ? Ce(pe(m.current)) : Ce(!1)
        }), [m, I, a, o, le]), De ? (0, d.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articlec4090652e3c0a4e1979bb0a36b22b7cd",
          ref: m,
          "data-item-position": r,
          "data-modal-mode": o,
          "data-active-item": a,
          "data-up-next": u,
          "data-transition": Ye || 0 !== y ? "none" : k,
          "data-scrollable": _e,
          style: {
            ...t,
            transform: o && a && !g ? `translate3d(${We+Xe}px, ${Ue}px, 0)` : g && !o ? `translate3d(${We+y}px, ${Ue}px, 0)` : t?.transform
          },
          onClick: e => {
            sa || (o ? o && !g && (r < v ? w(e, !0) : r > v && h(e, !0)) : l(e))
          },
          onMouseEnter: () => {
            o || E(!0), o || g || (clearTimeout(ae), te(setTimeout((() => {
              S({
                event: "card_title_hover",
                event_category: "card",
                event_action: "title_hover",
                event_label: x,
                card_name: Oe,
                card_id: r,
                position: r,
                view_name: `${Fe}/${He}`,
                source_content_id: Fe,
                source_content_name: He
              })
            }), 1e3)))
          },
          onMouseLeave: () => {
            o || E(!1), o || g || clearTimeout(ae)
          },
          onTouchStart: na,
          onTouchMove: ca,
          onTouchEnd: oa,
          onMouseDown: na,
          onMouseMove: ca,
          onMouseUp: oa,
          onKeyUp: e => {
            "Enter" === e.key && (o || l(e))
          },
          tabIndex: o ? -1 : 0,
          "aria-label": o ? N.formatMessage(ue.card.events_deck_modal_group_label) : "",
          role: o ? "dialog" : "presentation",
          children: [(0, d.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articleb9c878efb14d25c323e95f01b7a53460",
            "data-full-header": L,
            ref: _,
            style: {
              height: o && g ? `${z}px` : null,
              width: o && g ? `${z}px` : null
            },
            children: [$e && (0, d.jsx)("img", {
              ref: C,
              src: `${Ve?.src?.mobile??Ve?.src?.desktop}?im=Resize,width=${Z}`,
              alt: Ve?.alt,
              style: {
                width: 0 !== $ && g ? `${$}px` : null,
                height: 0 !== $ && g ? `${$}px` : null
              }
            }), (0, d.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articleba8c09e500ea0845dc20d380e8ec11ca",
              style: {
                transform: !g || g && o ? `translate3d(0, ${M}px, 0)` : null
              },
              children: [ze && (0, d.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlecbbb0470197acdc4f0ec1f567f5c8a42",
                ref: T,
                children: (0, d.jsx)(c.Badge, {
                  text: ze
                })
              }), (0, d.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articleaca2b0fbf7c1dbcbf99e53812b9abc8e",
                ref: P,
                "aria-hidden": o,
                children: Oe
              })]
            })]
          }), (0, d.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlee7defd080518d58f00f72ccc94df53aa",
            ref: I,
            "aria-hidden": !o,
            onScroll: () => {
              je(!0), da(), clearTimeout(Ne);
              const e = setTimeout((() => {
                je(!1)
              }), 100);
              Se(e)
            },
            style: {
              top: o && g ? `${z}px` : null,
              width: o && !g && a ? `${G}px` : null,
              touchAction: Te || g ? "unset" : "none"
            },
            children: [Oe && (0, d.jsx)("span", {
              className: "rockstargames-modules-core-newswire-articlea8fbffe55d92fc2f04e5e6b8f9267206",
              children: Oe
            }), (0, d.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlee20bd8af5d67954447804e0e21161d3b",
              children: (0, d.jsx)(n.TinaParser, {
                components: p,
                tina: {
                  meta: Me,
                  payload: {
                    content: De?.content
                  }
                }
              })
            })]
          })]
        }) : null
      }));
      const we = {
          pillBtn: "rockstargames-modules-core-newswire-articlec484e5a1bcbdd4b338bd6fe49900d6cf",
          selected: "rockstargames-modules-core-newswire-articled65c523327b32d2de08dc996cf9d7071",
          customModalContent: "rockstargames-modules-core-newswire-articlec0a9f620e5c9749f0eebe506acda4122",
          content: "rockstargames-modules-core-newswire-articlecebbc72d1229514723b9d664281b472f"
        },
        {
          variants: he
        } = c.framer.Animations,
        {
          variants: ke
        } = c.framer.Animations,
        {
          Gen9CoreCarousel: ve,
          framer: xe,
          useTinaModuleFetchByIds: ye,
          withSimpleErrorBoundary: je
        } = c,
        Ne = {
          Card: e => {
            let {
              id: a,
              title: t,
              content: i,
              size: r = "md",
              expandedType: c = "short",
              textOverlayProps: o = {
                hasTextOverlay: !1,
                tag: "",
                collapsedHasTag: !1,
                expandedHasTag: !1,
                description: "",
                collapsedHasDescription: !1
              },
              images: l = [],
              deckProps: m = {},
              to: u = null,
              tina: g = {},
              position: f = 0,
              sectionTitle: p = "",
              theme: b,
              pricingOptions: w,
              cardIds: h,
              platformOptions: k = null
            } = e;
            const v = (0, n.useTinaPayload)(),
              x = g?.payload?.meta?.cdn ?? v?.meta?.prod ?? !1,
              [y, j] = (0, s.useState)(m?.size ?? r),
              [N, S] = (0, s.useState)(0),
              T = void 0 !== w?.hasPricingOptions || void 0 !== k?.hasPlatformOptions;
            return (0, s.useEffect)((() => {
              j(m?.size ?? r)
            }), [m?.size, r]), (0, d.jsx)(G, {
              id: a,
              title: t,
              size: y,
              expandedType: c,
              images: l,
              deckProps: m,
              prod: x,
              payload: {
                content: i,
                meta: {}
              },
              variants: he.plainCard,
              textOverlayProps: o,
              modalProps: {
                className: we.customModal,
                contentClassName: we.customModalContent
              },
              expandedCardContents: (0, d.jsx)(ae, {
                images: l,
                prod: x,
                expandedView: !0
              }),
              position: f,
              sectionTitle: p,
              theme: b,
              cardIds: h,
              pricingOptions: w,
              platformOptions: k,
              pricingContainerHeight: N,
              isProductCard: T,
              children: (0, d.jsx)(q, {
                expandedType: c,
                to: u,
                sectionTitle: p,
                id: a,
                cardTitle: t,
                position: f,
                children: (0, d.jsx)("div", {
                  className: we.content,
                  "data-product": T,
                  children: (0, d.jsx)(_, {
                    title: t,
                    size: y,
                    textOverlayProps: o,
                    pricingOptions: w,
                    platformOptions: k,
                    setPricingContainerHeight: S,
                    children: (0, d.jsx)(ae, {
                      images: l,
                      prod: x
                    })
                  })
                })
              })
            })
          },
          CardWithImageGallery: e => {
            let {
              id: a,
              title: t,
              content: i,
              size: r = "md",
              expandedType: c = "gallery",
              textOverlayProps: o = {
                hasTextOverlay: !1,
                tag: "",
                collapsedHasTag: !1,
                expandedHasTag: !1,
                description: "",
                collapsedHasDescription: !1
              },
              images: l = [],
              deckProps: m = {},
              tina: u = {},
              payload: g,
              position: f = 0,
              sectionTitle: p = "",
              cardIds: b
            } = e;
            const w = (0, n.useTinaPayload)(),
              h = g ?? w,
              k = u?.payload?.meta?.cdn ?? h?.meta?.prod ?? !1,
              v = ((e, a) => e?.map((e => e?.image ? {
                ...e,
                image: {
                  ...e.image,
                  prod: a
                }
              } : e)))(l, k),
              [x, y] = (0, s.useState)(m?.size ?? r),
              {
                parent: j,
                main: N,
                thumbs: S
              } = le?.cardWithImageGallery?.gallery ?? {};
            return (0, s.useEffect)((() => {
              y(m?.size ?? r)
            }), [m?.size, r]), (0, d.jsx)(G, {
              id: a,
              position: f,
              sectionTitle: p,
              payload: {
                content: i,
                meta: {},
                payload: h
              },
              title: t,
              size: x,
              expandedType: c,
              images: v,
              deckProps: m,
              prod: k,
              variants: le.cardWithImageGallery,
              textOverlayProps: o,
              modalProps: {
                className: oe.customModal,
                contentClassName: oe.customModalContent
              },
              expandedCardContents: (0, d.jsx)(re, {
                images: v,
                title: t,
                navigation: !0,
                thumbsVisible: !0,
                variants: {
                  parent: j,
                  main: N,
                  thumbs: S
                },
                transition: {
                  parent: de.cardOpen,
                  main: de.cardOpen,
                  thumbs: de.cardOpen
                }
              }),
              cardIds: b,
              children: (0, d.jsx)("div", {
                className: oe.content,
                children: (0, d.jsx)(_, {
                  title: t,
                  size: x,
                  textOverlayProps: o,
                  children: (0, d.jsx)(re, {
                    images: v,
                    title: t,
                    navigation: !1,
                    thumbsVisible: !1
                  })
                })
              })
            })
          },
          TextCard: e => {
            let {
              title: a,
              content: t,
              size: s = "md",
              badgeText: i
            } = e;
            const r = {
              ...(0, n.useTinaComponents)(),
              HTMLElement: c.HTMLElement,
              UnorderedList: c.UnorderedList,
              ListItem: c.ListItem
            };
            return (0, d.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articled392587df58204b0910e721ef1f3c35c",
              "data-size": s,
              children: (0, d.jsxs)("div", {
                className: "rockstargames-modules-core-newswire-articlea002b98d034f1897c7e1f31327ff08dc",
                children: [i && (0, d.jsx)("div", {
                  className: "rockstargames-modules-core-newswire-articled9901d1bb91e1fbc1e857964083fe496",
                  children: i
                }), (0, d.jsxs)("div", {
                  className: "rockstargames-modules-core-newswire-articlebea322f6e3afa31355668ad164496730",
                  children: [a && (0, d.jsx)("h3", {
                    children: a
                  }), (0, d.jsx)(n.TinaParser, {
                    components: r,
                    tina: {
                      payload: {
                        content: t
                      }
                    }
                  })]
                })]
              })
            })
          },
          ...c
        },
        Se = xe.withFadeIn(je((e => {
          let {
            cards: a = [],
            size: t,
            name: i,
            title: c,
            description: o,
            customSlidesPerView: l = null,
            theme: m = "none",
            cardSizeBreakpoints: u = {},
            customAspectRatio: g = "3/1",
            titleBadge: f = null
          } = e;
          const p = (0, s.useRef)(null),
            b = r().map(a, "id"),
            w = ye({
              ids: b
            }),
            [h, k] = (0, s.useState)(l),
            [v] = (0, z.useSearchParams)(),
            [x, y] = (0, s.useState)(!1);
          (0, s.useEffect)((() => {
            if ("fob" === t) {
              const e = v.get("section");
              if (e && "games" === e && !x && (y(!0), p.current)) {
                const e = 100;
                window.scrollTo(0, p.current.offsetTop - e)
              }
            }
          }), []), (0, s.useEffect)((() => {
            if (!p.current) return;
            const e = () => {
              const e = l || window.getComputedStyle(p.current).getPropertyValue("--slides-per-view");
              k(e)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }));
          const j = (0, s.useMemo)((() => {
            let e = 0;
            return w ? w.reduce(((a, s) => {
              if (s) {
                const {
                  id: i,
                  tina: o
                } = s, l = r().clone(o);
                r().set(l, "payload.meta.id", i), a.push((0, d.jsx)(n.TinaParser, {
                  components: Ne,
                  tina: l,
                  componentProps: {
                    deckProps: {
                      size: t
                    },
                    tina: l,
                    id: i,
                    position: e,
                    sectionTitle: c,
                    theme: m,
                    cardIds: b
                  }
                }, i)), e += 1
              }
              return a
            }), []) : null
          }), [w, t]);
          return (0, d.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articlecaf46db6464a84ad4990aed75ef74ff1",
            "data-theme": m,
            ref: p,
            children: (0, d.jsx)(ve, {
              description: o,
              size: t,
              cardSizeBreakpoints: u,
              slideChildren: j,
              title: c,
              name: i,
              customSlidesPerView: h,
              customAspectRatio: g,
              titleBadge: f
            })
          })
        })))
    },
    91312: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        default: () => o
      });
      var s = t(9860),
        i = t(1740),
        r = t(45792);
      const n = {
        title: "rockstargames-modules-core-newswire-articleca3619ec694712f8ef44a0673cc5cd2a",
        main: "rockstargames-modules-core-newswire-articleb604683b1b1cf1316f5cf35ce2fe4b31",
        breadcrumbs: "rockstargames-modules-core-newswire-articled1965b8d8252ea2aaac5bde77b3bcef0"
      };
      var c = t(95240);
      const o = (0, r.withTranslations)((e => {
        let {
          children: a,
          intro: t,
          image: o = {},
          style: d = {},
          t: l,
          className: m = "",
          variant: u = null
        } = e, g = {};
        void 0 !== d.toggleInvertSeparator && (g = {
          "--breadcrumb-separator-filter-invert": d.toggleInvertSeparator ? "invert(0)" : "invert(1)"
        });
        const f = (0, r.useNewswirePost)(),
          p = {},
          b = p?.meta?.title ?? f?.title,
          w = p?.meta?.subtitle ?? f?.subtitle,
          h = w ? (0, c.jsx)("h3", {
            "data-context": "newswire-subtitle",
            children: w
          }) : "",
          k = [{
            text: l("Newswire"),
            to: "/newswire"
          }],
          {
            src: v
          } = (0, i.useImageParser)(o),
          x = (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsx)("time", {
              dateTime: f.created,
              children: f.created_formatted
            }), t ? (0, c.jsx)(s.DescriptionArea, {
              item: t
            }) : "", a]
          });
        f?.primary_tags?.length && k.push({
          text: f.primary_tags[0].name,
          to: `/newswire?tag_id=${f.primary_tags[0].id}`
        }), f?.secondary_tags?.length && k.push({
          text: f.secondary_tags[0].name,
          to: `/newswire?tag_id=${f.secondary_tags[0].id}`
        });
        const y = (0, c.jsx)("div", {
          className: n.breadcrumbs,
          children: k.map((e => (0, c.jsx)(s.A, {
            to: e.to,
            children: e.text
          }, e.to)))
        });
        return v?.desktop && (d.background = `url(${v.desktop}) center/cover no-repeat`), (0, c.jsx)("div", {
          className: [m, n.title].join(" "),
          style: {
            ...d,
            ...g
          },
          children: "separated" === u ? (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsxs)("header", {
              "data-context": "title",
              children: [y, (0, c.jsx)("h1", {
                children: b
              })]
            }), (0, c.jsxs)("footer", {
              "data-context": "title",
              children: [h, x]
            })]
          }) : (0, c.jsxs)(c.Fragment, {
            children: [y, (0, c.jsxs)("div", {
              className: n.main,
              children: [(0, c.jsx)("h1", {
                children: b
              }), h]
            }), x]
          })
        })
      }))
    },
    22052: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        AnchorLink: () => c,
        Discounts: () => y,
        Donate: () => T,
        Engagement: () => i(),
        EventInfo: () => V,
        FeaturedEventInfo: () => $,
        FontClip: () => H,
        GamingRewards: () => A,
        Gen9List: () => U,
        HeroImage: () => Y,
        NewswireFull: () => J,
        NewswireTitle: () => D.default,
        PctBar: () => Z,
        Podium: () => ee
      });
      var s = t(23397),
        i = t.n(s),
        r = t(51664),
        n = t(95240);
      const c = e => {
        let {
          children: a,
          hash: t
        } = e;
        const s = (0, r.useRef)(null),
          i = window.location.hash?.replace("#", "") === t ? t : null;
        return (0, r.useEffect)((() => {
          i && setTimeout((() => {
            const e = document.getElementById(i);
            e && e.scrollIntoView()
          }), 1e3)
        }), []), (0, n.jsx)("div", {
          ref: s,
          id: t,
          children: a
        })
      };
      var o = t(45364),
        d = t.n(o);
      const l = e => {
        let {
          items: a,
          columns: t = {},
          noCarousel: s = !1,
          noInfiniteScroll: i = !1,
          ...r
        } = e;
        const c = r?.style ?? {};
        return s && (t?.mobile && (c["--mobile-cols"] = t.mobile), t?.desktop && (c["--desktop-cols"] = t.desktop)), (0, n.jsxs)(n.Fragment, {
          children: [r.title && (0, n.jsx)("p", {
            className: "rockstargames-modules-core-newswire-articleaff0b1cbcafd725c58c239e5c027d99c",
            children: r.title
          }), (0, n.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlef21b886c69c9d2c51f97af89d920996b",
            children: [s && (0, n.jsx)(d(), {
              style: {
                ...c,
                "--grid-gap-dynamic": "2rem 0"
              },
              className: "rockstargames-modules-core-newswire-articlea537ee313e960643c300864d36fccce1",
              renderTemplate: "standard",
              items: a,
              ...r
            }), !s && (0, n.jsx)(h, {
              items: a,
              noInfiniteScroll: i,
              perPage: 2,
              perPageMobile: 1
            })]
          })]
        })
      };
      var m = t(9860);
      const u = {
          limitedGrid: "rockstargames-modules-core-newswire-articled84c2dff4228f60ad6d32e1b56fb9ac1",
          gridCarousel: "rockstargames-modules-core-newswire-articlec8d973199844852aadd8606029f0daa6",
          limitedGridContent: "rockstargames-modules-core-newswire-articlea4b30725303d32828a1961bb3076192c",
          columnsDesktop2: "rockstargames-modules-core-newswire-articlece7233232cec02fec6de50aaba28594f",
          thirdLine: "rockstargames-modules-core-newswire-articlef84ce65d59fb1f61fe1b21deacc57a26",
          gridItem: "rockstargames-modules-core-newswire-articled05ae610f5db877460ee429055991b66",
          columnsDesktop3: "rockstargames-modules-core-newswire-articlec65e6612bac8edac8a80ee9d2c396172",
          columnsDesktop4: "rockstargames-modules-core-newswire-articlef8b062b1ebbe2717b603826b9ef0c0d7",
          extraDiv: "rockstargames-modules-core-newswire-articleebd3336e01812c90af2651b222dae3b2",
          gridText: "rockstargames-modules-core-newswire-articlea2545673c32ee8b79508e2f3670ad7e2",
          noTextFit: "rockstargames-modules-core-newswire-articleaf290b110fcbad08b23df942e44aaf6e",
          coupons: "rockstargames-modules-core-newswire-articlef19e5694de6017a3072b9d164ea0295e",
          imageArea: "rockstargames-modules-core-newswire-articlea11e08e06479988d77fa969507768b0b",
          carouselOnMobile: "rockstargames-modules-core-newswire-articlea97e99cab39ffe39a1c67dd0e96fcb10",
          imageAreaBg: "rockstargames-modules-core-newswire-articlea3925f45e40ce0f75341e297fe1a205e",
          carouselDesc: "rockstargames-modules-core-newswire-articleea2aaab9bc960a201218f7cab12a3779"
        },
        g = e => {
          let {
            to: a,
            children: t
          } = e;
          return a ? (0, n.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noreferrer",
            children: t
          }) : t
        },
        f = e => {
          let {
            items: a,
            noTextFit: t,
            type: s,
            carouselOnMobile: i,
            columns: c = {
              desktop: 3,
              mobile: 2
            }
          } = e;
          const [o, d] = (0, r.useState)(null), [l, f] = (0, r.useState)(3), p = (0, r.useRef)(null);
          return (0, r.useEffect)((() => {
            const e = window.getComputedStyle(p.current).getPropertyValue("--divisible-desktop"),
              t = () => {
                const a = window.innerWidth;
                f(a <= 767 ? 2 : e)
              };
            if (a?.content.length && a?.content.length >= l) {
              let {
                length: e
              } = a.content;
              const t = [];
              if (e % l != 0) {
                let a = 0;
                do {
                  t.push((0, n.jsx)("div", {
                    className: `${u.gridItem} ${u.extraDiv}`
                  }, "limited-grid-" + a++)), e++
                } while (e % l != 0)
              }
              d(t)
            }
            return window.addEventListener("resize", t), t(), () => window.removeEventListener("resize", t)
          }), [l, p]), (0, n.jsxs)("div", {
            className: `${u.limitedGrid} ${i?u.carouselOnMobile:""}`,
            children: [(0, n.jsxs)("div", {
              ref: p,
              style: {
                "--divisible-desktop": c.desktop,
                "--divisible-mobile": c.mobile
              },
              className: `\n                    ${u.limitedGridContent}\n                    ${2===c.desktop?u.columnsDesktop2:""}\n                    ${3===c.desktop?u.columnsDesktop3:""}\n                    ${c.desktop>=4?u.columnsDesktop4:""}\n                    ${t?u.noTextFit:""}\n                    ${s?u[s]:""}\n                `,
              children: [(0, n.jsx)("div", {
                className: u.thirdLine
              }), a.content.map(((e, a) => (0, n.jsx)("div", {
                className: u.gridItem,
                children: (0, n.jsxs)(g, {
                  to: e?.href ?? e?.to,
                  children: [!t && (0, n.jsx)(m.TextFit, {
                    className: u.gridText,
                    min: 16,
                    max: 1e3,
                    mode: "single",
                    children: e.title
                  }), (0, n.jsx)("div", {
                    className: u.imageArea,
                    children: (0, n.jsx)(m.ImageWithBadge, {
                      image: e.image,
                      ariaLabel: e.ariaLabel,
                      badgeType: "badge2",
                      badge: e.badge
                    })
                  }), t && (0, n.jsx)("p", {
                    children: e.title
                  })]
                })
              }, a))), o]
            }), i && (0, n.jsx)("div", {
              className: u.gridCarousel,
              children: (0, n.jsx)(m.Carousel, {
                children: a.content.map(((e, a) => (0, n.jsxs)("div", {
                  children: [(0, n.jsx)("div", {
                    className: `${u.imageArea} ${u.imageAreaBg}`,
                    children: (0, n.jsx)(m.ImageWithBadge, {
                      className: s ? u[s] : "",
                      image: e.image,
                      ariaLabel: e.ariaLabel,
                      badgeType: "badge2",
                      badge: e.badge
                    })
                  }), e.title && (0, n.jsx)("p", {
                    className: u.carouselDesc,
                    children: (0, n.jsx)(g, {
                      to: e?.href ?? e?.to,
                      children: e.title
                    })
                  })]
                }, a)))
              })
            })]
          })
        },
        p = e => {
          let {
            items: a = []
          } = e;
          if (!a.length) return null;
          let t = 0,
            s = 0;
          return a.map(((e, a) => {
            if (e.limitedList?.content || e.limitedGridList?.content) {
              const t = [];
              return e.limitedList?.content && t.push((0, n.jsx)(h, {
                items: e.limitedList.content,
                noInfiniteScroll: e?.noInfiniteScroll,
                perPage: e?.perPage
              }, e?.key ?? a)), e.limitedGridList?.content && t.push((0, n.jsx)(f, {
                columns: e.limitedGridList.columns,
                items: e.limitedGridList
              }, e?.key ?? a)), s++, (0, n.jsxs)("div", {
                children: [1 === s && (0, n.jsx)("div", {
                  className: "rockstargames-modules-core-newswire-articleec69a1e1d83f2c9b2d71b4afc2e8d41e",
                  children: (0, n.jsx)("div", {
                    className: "rockstargames-modules-core-newswire-articlef28c9e814f58215db0c40753bd85a265"
                  })
                }), t]
              }, a)
            }
            if (e.discountsList?.content || e.discountsGridList?.content) {
              const s = [];
              return e.discountsList?.content && s.push((0, n.jsx)(h, {
                items: e.discountsList.content,
                noInfiniteScroll: e?.noInfiniteScroll,
                perPage: e?.perPage
              }, e?.key ?? a)), e.discountsGridList?.content && s.push((0, n.jsx)(f, {
                noTextFit: !0,
                carouselOnMobile: !0,
                type: e.type ?? e.discountsGridList.type,
                columns: e.discountsGridList.columns,
                items: e.discountsGridList
              }, e?.key ?? a)), e?.list && s.push((0, n.jsx)(m.UnorderedList, {
                ...e
              })), t++, (0, n.jsxs)("div", {
                children: [1 === t && (0, n.jsx)("div", {
                  className: "rockstargames-modules-core-newswire-articlea6b9b7f63ef349c57f3045b559b9a238"
                }), s]
              }, a)
            }
            return null
          }))
        },
        b = {
          discountsCarouselItem: "rockstargames-modules-core-newswire-articleb1db5637574663ac89f33762c188d7eb",
          fontUpdate: "rockstargames-modules-core-newswire-articlea32986414e2f20d413cb21db77e5ddf2",
          discountsCarousel: "rockstargames-modules-core-newswire-articlee049405f569eb7a31b675e4066e535f7",
          singleImage: "rockstargames-modules-core-newswire-articlea34b328fa3d84d357c02b025e41c0352"
        },
        w = e => {
          let {
            wrapper: a,
            children: t,
            length: s
          } = e;
          return s > 1 ? a(t) : t
        },
        h = e => {
          let {
            items: a,
            noInfiniteScroll: t = !1,
            size: s = null,
            perPage: i = null,
            customSlidesPerView: c = null,
            style: o = {}
          } = e;
          const d = (0, r.useRef)(null),
            [l, u] = (0, r.useState)(null),
            [g, f] = (0, r.useState)(s);
          return (0, r.useEffect)((() => {
            !s && i && f(1 === i ? "lg" : "sm"), s || i || (f("lg"), console.error('Error: DiscountsCarousel expects a prop "size" in order to display the correct amount of slides. Defaulting to lg.'))
          }), [s, i]), (0, r.useEffect)((() => {
            if (!d.current) return;
            const e = () => {
              const e = c || window.getComputedStyle(d.current).getPropertyValue("--slides-per-view");
              u(e)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [d, c]), a.length ? (0, n.jsx)(w, {
            length: a.length,
            wrapper: e => (0, n.jsx)("div", {
              "data-size": g,
              ref: d,
              children: (0, n.jsx)(m.Carousel, {
                className: b.discountsCarousel,
                noInfiniteScroll: t,
                style: {
                  ...o,
                  "--per-page": l,
                  "--carousel-column-gap": "1rem"
                },
                children: e
              })
            }),
            children: a.map(((e, t) => (0, n.jsxs)("div", {
              className: [b.discountsCarouselItem, 1 === a.length ? b.singleImage : ""].join(" "),
              children: [(0, n.jsx)(m.ImageWithBadge, {
                ariaLabel: e?.ariaLabel,
                image: e?.image ?? {
                  alt: e?.alt ?? "",
                  desktop: e?.img ?? null,
                  mobile: e?.imgMobile ?? null
                },
                badge: e?.badge ?? e?.image?.badge ?? e.discountTxt,
                splitter: e?.splitter ?? e?.image?.splitter,
                badgeType: "badgeSizeUpdate"
              }), (0, n.jsx)(m.DescriptionArea, {
                className: b.fontUpdate,
                item: e
              })]
            }, e?.key ?? t)))
          }) : (console.error('Error: DiscountsCarousel expects a prop "items" that contains an array of objects.'), null)
        },
        k = e => {
          let {
            items: a = [],
            style: t = {}
          } = e;
          return a.length ? (0, n.jsx)(m.Grid, {
            style: {
              "--background-color": "#000",
              "--grid-gap-dynamic": "var(--grid-gap-static-lg)",
              "--padding-dynamic-tb": "var(--grid-gap-static-lg)",
              "--image-rounding-dynamic": "0",
              ...t
            },
            children: a.map(((e, a) => e?.title_and_description ? (0, n.jsxs)(m.Grid, {
              context: "readable-text",
              style: {
                textAlign: "left",
                "--grid-gap-dynamic": "var(--grid-gap-static-xs)",
                background: "transparent"
              },
              children: [e?.title_and_description.title && (0, n.jsx)("h1", {
                className: "large",
                children: e.title_and_description.title
              }), e?.title_and_description.description && (0, n.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: e.title_and_description.description
                }
              })]
            }, e?.key ?? a) : e?.limitedList?.content ? (0, n.jsx)(h, {
              items: e.limitedList.content,
              noInfiniteScroll: e?.noInfiniteScroll,
              perPage: e?.perPage,
              size: e?.size
            }, e?.key ?? a) : e?.discountsGridList?.content ? (0, n.jsx)(l, {
              noCarousel: !0,
              columns: e.discountsGridList?.columns,
              items: e.discountsGridList.content
            }, e?.key ?? a) : e?.content ? (0, n.jsx)(m.HTMLElement, {
              ...e,
              children: e.content
            }, e?.key ?? a) : e?.list ? (0, n.jsx)(m.UnorderedList, {
              ...e
            }, e?.key ?? a) : void 0))
          }) : null
        },
        v = {
          area: "rockstargames-modules-core-newswire-articlebd369197d34037ca950bc456ae0edbfa",
          btmImg: "rockstargames-modules-core-newswire-articlea96546818d0319df5a2790c88dc1f5ea",
          limitedTopImg: "rockstargames-modules-core-newswire-articlec42389be5e7c869431a648165a5cae18",
          topImg: "rockstargames-modules-core-newswire-articleaffb8cefb29b116795380aa5314d5127"
        },
        x = e => {
          let {
            items: a,
            renderTemplate: t,
            ...s
          } = e;
          switch (t) {
            case "gtav":
            case "gtao":
              return (0, n.jsx)(k, {
                items: a,
                ...s
              });
            case "grid":
              return (0, n.jsx)(l, {
                items: a,
                ...s
              });
            default:
              return (0, n.jsx)(p, {
                items: a
              })
          }
        },
        y = e => {
          let {
            items: a,
            renderTemplate: t,
            style: s,
            ...i
          } = e;
          return (0, n.jsx)("div", {
            className: v.area,
            "data-context": "discounts",
            children: (0, n.jsxs)("div", {
              className: v.discountsContent,
              children: [(0, n.jsx)(x, {
                renderTemplate: t,
                items: a,
                props: i,
                style: s
              }), (0, n.jsx)("div", {
                className: v.btmImg
              })]
            })
          })
        };
      var j = t(89416),
        N = t.n(j);
      const S = {
          donate: "rockstargames-modules-core-newswire-articleff9f3568a504aa9435bb271c905604c6",
          largePaddingSides: "rockstargames-modules-core-newswire-articleeda019a9aff0ac7012c1f9d07452fb57"
        },
        T = e => {
          let {
            text: a
          } = e;
          const {
            sanitize: t
          } = N();
          return (0, n.jsx)("div", {
            className: [S.donate, "normalPaddingTopBottom largePaddingSides"].join(" "),
            children: (0, n.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: t(a)
              }
            })
          })
        };
      var P = t(73660),
        _ = t.n(P),
        C = t(1740),
        I = t(88460),
        L = t.n(I),
        E = t(84644),
        M = t.n(E),
        D = t(91312);
      const z = {
          pillBtn: "rockstargames-modules-core-newswire-articlef9b4575485160d1ee87bf2d85c618500",
          selected: "rockstargames-modules-core-newswire-articlefc0de6978953b2e05ca6256e5df9ddeb",
          event: "rockstargames-modules-core-newswire-articledeb35a20cd305c1c3f58adf38c18a13b",
          featured: "rockstargames-modules-core-newswire-articlec9494ef21ed459fabdebc24519c1880c",
          eventInfo: "rockstargames-modules-core-newswire-articlef0f5b255059bdf027309b512d3f6b154",
          large: "rockstargames-modules-core-newswire-articlec21ddd1ba6d193681ca88e9d03509ad4",
          videoWrapper: "rockstargames-modules-core-newswire-articlefa2fc51439d229dae72eeb8818a0c0c5"
        },
        O = e => {
          let {
            images: a
          } = e;
          return a?.length ? 1 === a.length ? (0, n.jsx)(m.ImageWithBadge, {
            ...a[0]
          }) : (0, n.jsx)(m.Carousel, {
            items: a
          }) : null
        },
        V = e => {
          let {
            images: a,
            title: t,
            content: s,
            isFeatured: i = !1,
            className: c = null,
            videoInHeroProps: o,
            hideNewswireTitle: l = !1
          } = e;
          const u = (0, C.useTinaPayload)(),
            g = u?.meta?.prod ?? !1,
            f = (0, C.useTinaComponents)();
          _().set(u, "meta.prod", g);
          let p = o?.gifVideoProps?.hasVideoInHero || !1;
          const b = o?.htmlVideoProps?.id || !1,
            w = !!o?.htmlVideoProps?.hasHtmlVideoInHero && b;
          w && p && (p = !1);
          const h = void 0 === o || !p && !w,
            k = (0, r.useMemo)((() => ({
              ...f,
              HTMLElement: m.HTMLElement,
              ImageWithBadge: m.ImageWithBadge,
              GroupOfItems: d()
            })), [f]);
          return (0, n.jsxs)("div", {
            className: (0, C.classList)(z.event, c),
            children: [p && (0, n.jsx)("div", {
              className: z.videoWrapper,
              children: (0, n.jsx)(L(), {
                hash: {
                  desktop: o?.gifVideoProps?.hash?.desktop,
                  mobile: o?.gifVideoProps?.hash?.mobile
                },
                loop: o?.gifVideoProps?.isLooping
              })
            }), w && b && (0, n.jsx)("div", {
              className: z.videoWrapper,
              children: (0, n.jsx)(M(), {
                autoplay: o?.htmlVideoProps?.autoPlay || !1,
                id: b
              })
            }), h && (0, n.jsx)(O, {
              images: a
            }), i && (0, n.jsx)(D.default, {}), (0, n.jsxs)("div", {
              className: z.eventInfo,
              children: [!i && !l && (0, n.jsx)("h3", {
                className: z.eventTitle,
                children: t
              }), (0, n.jsx)(C.TinaParser, {
                components: k,
                tina: {
                  payload: {
                    content: s,
                    meta: {
                      prod: g
                    }
                  }
                }
              })]
            })]
          })
        },
        $ = e => (0, n.jsx)(V, {
          ...e,
          className: z.featured,
          isFeatured: !0
        }),
        F = {
          clip: "rockstargames-modules-core-newswire-articlee0224b729307b43a17327188777c3c60",
          redTexture: "rockstargames-modules-core-newswire-articlebbcb053265bd42678ed1086e133ee340",
          greyTexture: "rockstargames-modules-core-newswire-articlea58880949ade673f268f021629ed7bb0"
        },
        H = e => {
          let {
            fontFamily: a = "inherit",
            fontBg: t,
            string: s
          } = e;
          return (0, n.jsx)("span", {
            style: {
              "--font-family-clip": a
            },
            className: [F.clip, F[t]].join(" "),
            children: s
          })
        };
      var B = t(3061);
      const G = {
          gamingWrapper: "rockstargames-modules-core-newswire-articlec33afa2532a66477387c16a5b7609e34",
          gamingRewards: "rockstargames-modules-core-newswire-articleb322b28290c4e636c9b32f29917c5142",
          psPlus: "rockstargames-modules-core-newswire-articlee23e4159dabd78b608752229f0d0b72c",
          rightSide: "rockstargames-modules-core-newswire-articlef112487054e57af59822a171d10c37a9",
          primeGamingSocialLogo: "rockstargames-modules-core-newswire-articleec4eb482f8b948a6a76705b272a8d13e",
          gtaPlus: "rockstargames-modules-core-newswire-articleacbc30267860abd5959b92dd3c096bf2",
          plus: "rockstargames-modules-core-newswire-articlec4b85ff28ea81e7439b17ff6769cffa9",
          listArea: "rockstargames-modules-core-newswire-articleaed79f67f607b829c74dccab234aca0a",
          psPlusDefaultImg: "rockstargames-modules-core-newswire-articleeb72969e58b99a2bbe3c86723f8568e4"
        },
        A = e => {
          let {
            headline: a,
            plainImage: s,
            top: i,
            unorderedList: r,
            bottom: c,
            rewards: o = "primeGaming",
            style: d = {}
          } = e;
          const l = (0, B.useLocale)();
          return "primeGaming" === o && ["ru", "kr", "ko_kr", "ru_ru"].includes(l) ? null : (0, n.jsx)("div", {
            className: G.gamingWrapper,
            children: (0, n.jsx)("div", {
              className: `${G.gamingRewards} ${G[o]}`,
              style: d,
              children: (0, n.jsxs)(m.ResponsiveGridBox, {
                style: {
                  "--grid-align-items": "center",
                  "--grid-row-gap": "2rem"
                },
                children: [(0, n.jsxs)(m.ResponsiveGridItem, {
                  children: [a && (0, n.jsx)("h3", {
                    children: a
                  }), "psPlus" === o && (0, n.jsx)("img", {
                    "aria-label": "Playstation Plus Benefit",
                    className: G.primeGamingSocialLogo,
                    src: t(43844)
                  }), "primeGaming" === o && (0, n.jsx)("img", {
                    "aria-label": "Social Club | Prime Gaming",
                    className: G.primeGamingSocialLogo,
                    src: t(26588)
                  }), "gtaPlus" === o && (0, n.jsx)("img", {
                    "aria-label": "GTA Plus",
                    className: G.primeGamingSocialLogo,
                    src: t(42100)
                  }), i?.text && (0, n.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: i.text
                    }
                  }), r?.list && (0, n.jsx)("div", {
                    className: G.listArea,
                    children: (0, n.jsx)(m.UnorderedList, {
                      className: "gtaPlus" === o ? G.plus : "",
                      ...r,
                      list: r.list,
                      ...r?.attributes
                    })
                  }), c?.text && (0, n.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: c.text
                    }
                  })]
                }), (0, n.jsx)(m.ResponsiveGridItem, {
                  className: G.rightSide,
                  children: s?.image ? (0, n.jsx)(m.MultiSourceImage, {
                    image: s.image
                  }) : (0, n.jsx)("div", {
                    className: G.psPlusDefaultImg
                  })
                })]
              })
            })
          })
        };
      var R = t(21760),
        W = t(33052),
        q = t(38680);
      const U = e => {
          let {
            backgroundImages: a,
            deckHash: t = "",
            perPage: s = null
          } = e;
          const [i, c] = (0, r.useState)(null), o = (0, C.useGetCdnSource)(a?.backgroundImg?.full_src ?? null), d = (0, C.useGetCdnSource)(a?.layeredImg?.full_src ?? null), l = (0, r.useRef)(null), {
            data: u,
            error: g
          } = (0, W.useQuery)(q.TinaModulesInfo, {
            variables: {
              ids: t
            },
            skip: !t
          });
          return (0, r.useEffect)((() => {
            if (u?.tinaModulesInfo) {
              const e = u.tinaModulesInfo[0],
                {
                  id: a,
                  tina: t
                } = e,
                s = _().clone(t);
              _().set(s, "payload.meta.id", a), c(s)
            }
          }), [u]), u && i ? g ? (0, n.jsx)(m.Wasted, {
            error: g
          }) : (0, n.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articlee274b3eb1b6b53a4a1a15a8f7e45c32b",
            ref: l,
            style: {
              "--background-image": `url(${o})`,
              "--layered-image": `url(${d})`,
              "--slides-per-view-desktop": s
            },
            children: (0, n.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articleb22f3a069f5ae8392b6f0a125b2fcc7c",
              children: [d ? (0, n.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlef24111149ce32640ed3990c565f1f663"
              }) : "", (0, n.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articled816468db56e41fe199319fd7f20b8fd",
                children: (0, n.jsx)(C.TinaParser, {
                  components: {
                    Deck: R.WU
                  },
                  tina: i
                })
              })]
            })
          }) : null
        },
        Q = {
          hiddenMobile: "rockstargames-modules-core-newswire-articlefcd9b756ec79b800e6e2a874d4952267",
          hiddenLarge: "rockstargames-modules-core-newswire-articlef1e7a1b01f98ac70ad8163ffee4ba650",
          "hidden-sm": "rockstargames-modules-core-newswire-articlef173a012951bcf6271166618a9194d95",
          "show-sm": "rockstargames-modules-core-newswire-articlec865b3fc9496eca4d2b60e4f39cb26b6",
          "hidden-md": "rockstargames-modules-core-newswire-articled373636a89b4a126bd8811fbdf6a8b5a",
          "show-md": "rockstargames-modules-core-newswire-articleb98b287d7b9a9b97f2d424a9ec06eac4",
          "hidden-lg": "rockstargames-modules-core-newswire-articleb4a5056ee672b146ba56a053c0996131",
          "show-lg": "rockstargames-modules-core-newswire-articlea053d2c98542e75ab7996394068ba96e",
          "hidden-xl": "rockstargames-modules-core-newswire-articlea67450e1f1e23eb187faf5bdd7818576",
          "show-xl": "rockstargames-modules-core-newswire-articlefdadc3b48dd33c8d314971f0c4ec768d",
          "hidden-xxl": "rockstargames-modules-core-newswire-articlea6d28df6b16a9ebd36981c24bf0385e6",
          "show-xxl": "rockstargames-modules-core-newswire-articlef16bd7eff092259aa29f77bb430c6cea",
          "full-width": "rockstargames-modules-core-newswire-articleb2703b37afddc64231bad0dbc6dc508e",
          "reverse-mobile": "rockstargames-modules-core-newswire-articlefb8f550bee051c39ae2446a313c6953d",
          "center-children": "rockstargames-modules-core-newswire-articleccd5e5d3fb737dc625dc9f865be73e58",
          "std-padding-mobile-desktop-none": "rockstargames-modules-core-newswire-articlea14d4623ce83550fabc2c0054c12e06c",
          "std-padding-desktop-mobile-none": "rockstargames-modules-core-newswire-articleeef40f8887a7a6f619111caa3133a7e0",
          "horizontal-line": "rockstargames-modules-core-newswire-articleb3c6fa2aa88993c8f208478df68b0da1",
          gold: "rockstargames-modules-core-newswire-articlef3c24bf757a12b65011514e75e247b8c",
          heroImage: "rockstargames-modules-core-newswire-articledf0381460fec48db32dff93b7840826b",
          responsiveImage: "rockstargames-modules-core-newswire-articleab6a895408f1c4da07244f72a48d14d9",
          responsiveVideo: "rockstargames-modules-core-newswire-articlea3faa88c835593aed90c0387fe1655bc"
        },
        Y = e => {
          let {
            alt: a = "",
            className: t = "",
            src: s = {},
            image: i = null,
            video: r = null
          } = e;
          return (0, n.jsxs)("div", {
            className: ((s?.videoPlayerId || s?.gifHash) && Q.heroImage, t),
            children: [s?.mobile && (0, n.jsx)(m.ResponsiveImg, {
              src: s.mobile,
              ariaLabel: a,
              className: [s?.desktop && Q.hiddenLarge, Q.responsiveImage].join(" "),
              noRatioPlease: !0
            }), s?.desktop && (0, n.jsx)(m.ResponsiveImg, {
              src: s.desktop,
              ariaLabel: a,
              className: [s?.mobile && Q.hiddenMobile, Q.responsiveImage].join(" ")
            }), s?.videoPlayerId && (0, n.jsx)("div", {
              className: [Q.responsiveVideo, Q.trailer].join(" "),
              children: (0, n.jsx)(M(), {
                context: "site",
                autoplay: !1,
                id: s.videoPlayerId,
                hero: !0
              })
            }), s?.gifHash && (0, n.jsx)("div", {
              className: Q.responsiveVideo,
              children: (0, n.jsx)(L(), {
                hash: [{
                  desktop: s?.gifHash?.desktop
                }, {
                  mobile: s?.gifHash?.mobile
                }]
              })
            }), i && (0, n.jsx)(m.ImageWithBadge, {
              image: i
            }), r && (0, n.jsx)("div", {
              className: [Q.responsiveVideo, Q.trailer].join(" "),
              children: (0, n.jsx)(M(), {
                context: "site",
                autoplay: r?.autoplay ?? !1,
                id: r.id,
                hero: !0
              })
            })]
          })
        };
      var K = t(22064),
        X = t.n(K);
      const J = e => {
          let {
            children: a,
            className: t = "",
            style: s,
            game: i
          } = e;
          return (0, r.useEffect)((() => {
            document.fonts.ready.then((() => {
              X().balanceText()
            }))
          }), [a]), (0, n.jsx)("div", {
            className: ["newswireFull", i, t].join(" "),
            style: s,
            "data-game": i,
            children: a
          })
        },
        Z = e => {
          let {
            pct: a,
            bgColor: t,
            primaryColor: s
          } = e;
          return (0, n.jsx)("div", {
            style: {
              position: "relative",
              width: "100%",
              height: "20px",
              backgroundColor: t
            },
            children: (0, n.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlebd486f774b8499df78c2751a83ceb906",
              style: {
                backgroundColor: s,
                position: "absolute",
                top: "0",
                left: "0",
                width: `${a}%`,
                height: "100%"
              }
            })
          })
        },
        ee = e => {
          let {
            title: a,
            desc: t,
            img: s,
            imgMobile: i,
            bgColor: r,
            descPositionBottom: c,
            fontColor: o = "#fff"
          } = e;
          return (0, n.jsxs)(n.Fragment, {
            children: [c ?? (0, n.jsx)(m.ResponsiveSection, {
              style: {
                backgroundColor: `${r}`,
                "--padding-top-bottom": "1.75rem"
              },
              className: "normalPaddingTopBottom largePaddingSides",
              children: (0, n.jsxs)(m.ResponsiveSection, {
                className: "maxDescArea",
                style: {
                  "--desc-h3-margin-bottom": "var(--h-rem-size)"
                },
                children: [(0, n.jsx)("h3", {
                  style: {
                    "--color-span": `${o}`
                  },
                  children: a
                }), (0, n.jsx)("p", {
                  children: t
                })]
              })
            }), (0, n.jsxs)(m.ResponsiveSection, {
              className: [c ?? "spacing"].join(" "),
              children: [(0, n.jsx)(m.ResponsiveImg, {
                className: "hiddenMobile",
                src: s
              }), (0, n.jsx)(m.ResponsiveImg, {
                className: "hiddenLarge",
                src: i
              })]
            }), c ? (0, n.jsx)(m.ResponsiveSection, {
              style: {
                backgroundColor: `${r}`,
                "--padding-top-bottom": "1.75rem"
              },
              className: "normalPaddingTopBottom largePaddingSides spacing",
              children: (0, n.jsxs)(m.ResponsiveSection, {
                className: "maxDescArea",
                style: {
                  "--desc-h3-margin-bottom": "var(--h-rem-size)"
                },
                children: [(0, n.jsx)("h3", {
                  style: {
                    "--color-span": `${o}`
                  },
                  children: a
                }), (0, n.jsx)("p", {
                  children: t
                })]
              })
            }) : null]
          })
        }
    },
    95660: e => {
      var a = {
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
                value: "orderBy"
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
                value: "orderDirection"
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
                  value: "orderBy"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "orderBy"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "orderDirection"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "orderDirection"
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
          end: 495
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: "query TinaModulesList(\n    $type: String\n    $orderBy: String\n    $orderDirection: String\n    $locale: String!\n) {\n    tinaModulesList(\n        type: $type\n        orderBy: $orderBy\n        orderDirection: $orderDirection\n        locale: $locale\n    ) {\n        results {\n            id: id_hash\n            name\n            type\n            tina {\n                id\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function i(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesList = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          n = new Set,
          c = new Set;
        for (r.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = i(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "TinaModulesList")
    },
    38680: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TinaModulesInfo"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "ids"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String"
                  }
                }
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "sync"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean"
              }
            },
            defaultValue: {
              kind: "BooleanValue",
              value: !1
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "cache"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean"
              }
            },
            defaultValue: {
              kind: "BooleanValue",
              value: !1
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
                value: "tinaModulesInfo"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "ids"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "ids"
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
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "cache"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "cache"
                  }
                }
              }],
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
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title_doc"
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
                    value: "sync_hash"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "to"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "visible"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "children"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
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
                        value: "to"
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
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "_translations"
                          },
                          arguments: [],
                          directives: [{
                            kind: "Directive",
                            name: {
                              kind: "Name",
                              value: "include"
                            },
                            arguments: [{
                              kind: "Argument",
                              name: {
                                kind: "Name",
                                value: "if"
                              },
                              value: {
                                kind: "Variable",
                                name: {
                                  kind: "Name",
                                  value: "sync"
                                }
                              }
                            }]
                          }],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "locale"
                              },
                              arguments: [],
                              directives: []
                            }, {
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
          end: 742
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: "query TinaModulesInfo(\n    $ids: [String]!\n    $locale: String!\n    $sync: Boolean = false\n    $cache: Boolean = false\n) {\n    tinaModulesInfo(ids: $ids, locale: $locale, cache: $cache) {\n        id: id_hash\n        title\n        title_doc\n        type\n        sync_hash\n        to\n        visible\n        children {\n            title\n            id_hash\n            to\n            tina {\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n        tina {\n            payload\n            variables {\n                keys\n                _translations @include(if: $sync) {\n                    locale\n                    keys\n                }\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function i(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesInfo = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          n = new Set,
          c = new Set;
        for (r.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = i(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "TinaModulesInfo")
    },
    42100: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7563ed0414306d18d4f8401effcab31a.svg"
    },
    43844: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fd3b8222b81c51f8a6ae266c805c98a6.png"
    },
    26588: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f002a20c79ea2264ca52456194ef5b48.svg"
    }
  }
]);