! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "a4031142-e944-4ad7-95c1-32c5a10b4174", e._sentryDebugIdIdentifier = "sentry-dbid-a4031142-e944-4ad7-95c1-32c5a10b4174")
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
  [1186], {
    60207: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r
      });
      var s = t(55140),
        i = t(73379);
      const r = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          parent: "",
          post: null
        };
        return {
          name: "listItem",
          label: "List Item",
          component: "group",
          fields: [(0, s.NameField)(e), (0, s.translatedField)({
            name: "content",
            label: "Content",
            component: "text",
            initialValues: ""
          }), (0, s.StyleField)(e)],
          defaultItem: () => (0, s.defaultItemUnique)({
            content: ""
          }),
          itemProps: e => (0, s.itemPropsWithKey)(e, {
            label: (0, i.stripHTML)(`${e?.name??e?.[s.TINA_MEMOQ_PREFIX]?.content??"New"} [List Item]`)
          })
        }
      }
    },
    28157: (e, a, t) => {
      "use strict";
      t.d(a, {
        y3: () => me,
        h7: () => J,
        E$: () => ze
      });
      var s = t(71403),
        i = t(54252),
        r = t.n(i),
        n = t(74401),
        c = t(14924),
        o = t(61651),
        d = t(42756),
        l = t(71080);
      var m = t(46632);
      const u = e => {
          let {
            hasTag: a = !1,
            tag: t = null,
            tagStyle: s = null,
            badges: i = []
          } = e;
          return a && t ? (0, m.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articlebc50cd13f1f148dd0772d2a6eee8a913",
            "data-tag-style": s,
            children: t
          }) : a && i && i?.length > 0 ? (0, m.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articled4a1a1e4fc4c16138d3c879bc1864227",
            children: i.map((e => (0, m.jsx)(l.A, {
              ...e
            }, e?.text)))
          }) : null
        },
        f = {
          textOverlay: "rockstargames-modules-core-newswire-articlea9e47a446a239de8e5bd56e77308ddc8",
          content: "rockstargames-modules-core-newswire-articled35747e86fd9b103a5160d7219f01856"
        },
        {
          LiteMotion: g,
          Animations: p
        } = c,
        {
          variants: b,
          transitions: w
        } = p,
        h = e => {
          let {
            title: a,
            hasTag: t,
            tag: s,
            hasDescription: i,
            description: r,
            fadesOut: n = !1,
            badges: c
          } = e;
          return (0, m.jsx)(g, {
            initial: b.fade.out.initial,
            animate: {
              opacity: n ? 0 : 1
            },
            transition: w.fade,
            className: f.textOverlay,
            children: (0, m.jsxs)("div", {
              className: f.content,
              children: [(0, m.jsx)(u, {
                hasTag: t,
                tag: s,
                badges: c?.filter((e => e?.isPrimary))
              }), (0, m.jsx)("h3", {
                children: a
              }), i && r && (0, m.jsx)("div", {
                className: f.description,
                children: r
              })]
            })
          })
        },
        k = e => {
          let {
            title: a,
            showTitle: t = !0,
            showBackground: i = !0,
            tag: r,
            tagStyle: n,
            discountPrice: c,
            originalPrice: o,
            setPricingContainerHeight: d = null
          } = e;
          const l = (0, s.createRef)();
          return (0, s.useEffect)((() => {
            const e = () => {
              l.current && null !== d && d(l.current.clientHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [l]), (0, m.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlef721d7192d3e29e64567a729fd8d5985",
            ref: l,
            "data-show-background": i,
            children: [t && (0, m.jsx)("span", {
              className: "rockstargames-modules-core-newswire-articlef390fe2c9338785ce412483a1bac624c",
              children: a
            }), (0, m.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articlefc5ca7a7cb4da6745e4dbef89b12bfe8",
              children: [(0, m.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articleb7ba435d2cec78951bdb0b812b098b72",
                "data-tag-style": n || "free",
                children: r
              }), (0, m.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articled8c7408e6335e53326bc70a1a065f81b",
                children: c
              }), (0, m.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articlea3632910b63514f6b49539fe45bcccb6",
                children: o
              })]
            })]
          })
        };
      var v = t(90837),
        x = t(82275),
        y = t(44338),
        j = t(67245),
        N = t(47483),
        S = t(19169),
        T = t(96165),
        P = t(73870);
      const C = {
          ps5: y,
          ps4: x,
          ps: v,
          xboxone: N,
          xbox: S,
          xboxseriesxs: j,
          nintendoswitch: P,
          pc: T,
          googleplay: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2ef574ea2aa502447d579267ff37e251.svg",
          applestore: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c6affc8b37ec4c75486ab6d12b2de395.svg"
        },
        _ = e => {
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
          }), [c]), (0, m.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlee754e3afc303a114f9e28e09c5519a30",
            ref: c,
            "data-show-background": i,
            children: [t && (0, m.jsx)("span", {
              className: "rockstargames-modules-core-newswire-articlefd98e3d7af2a583d4338d802666901a5",
              children: a
            }), r?.platformsAndLinks && (0, m.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articlecbde4b9406c59131d6d4c8d9b2291a84",
              children: [(0, m.jsx)(u, {
                hasTag: r?._memoq?.platformTag,
                tag: r?._memoq?.platformTag,
                tagStyle: r?._memoq?.platformTagStyle
              }), (0, m.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articleb7de0e1798d1a020191fbe44b67f34d2",
                children: r.platformsAndLinks.map((e => {
                  let {
                    platform: a,
                    buttonText: t
                  } = e;
                  return (0, m.jsx)("img", {
                    className: "rockstargames-modules-core-newswire-articleaa5f852c8932dcf689a97496d437f13b",
                    alt: t,
                    src: C[a]
                  }, a)
                }))
              })]
            })]
          })
        },
        I = e => {
          let {
            textOverlayProps: a,
            title: t,
            size: i,
            expandedView: r = !1,
            children: n,
            pricingOptions: c,
            setPricingContainerHeight: o,
            isCoverCard: d = !1,
            platformOptions: l
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
              expandedView: d,
              badges: l
            } = e;
            const [u, f] = (0, s.useState)(null), g = (0, s.useMemo)((() => {
              if (!a) return null;
              const e = "sm" !== c && n;
              return (0, m.jsx)(h, {
                title: o,
                hasTag: i,
                tag: t,
                hasDescription: e,
                description: r,
                fadesOut: d,
                badges: l
              })
            }), [a, t, i, r, n, c, o, d, l]);
            return (0, s.useEffect)((() => {
              f(g)
            }), [g]), [u, f]
          })({
            ...a,
            size: i,
            title: t,
            expandedView: r
          }), f = void 0 !== c?.hasPricingOptions || null !== l;
          return (0, m.jsxs)("header", {
            className: "rockstargames-modules-core-newswire-articlec525342927ce11e37cc24e653e0ffc95",
            "data-is-covercard": d,
            "data-expanded-view": r,
            children: [s.Children.map(n, (e => (0, s.cloneElement)(e, {
              title: t,
              size: i,
              expandedView: r
            }))), u, f && (0, m.jsxs)(m.Fragment, {
              children: [!0 === l?.hasPlatformOptions && (0, m.jsx)(_, {
                title: t,
                platformOptions: l,
                pricingOptions: c,
                setPricingContainerHeight: o
              }), !0 === c?.hasPricingOptions && (0, m.jsx)(k, {
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
          LiteMotion: L,
          Animations: E
        } = c,
        {
          transitions: A
        } = E,
        M = e => {
          let {
            components: a,
            payload: t,
            prod: i,
            size: c,
            title: l,
            initial: f = "initial",
            animate: g = "animate",
            variants: p,
            type: b = null,
            context: w = null,
            textOverlayProps: h,
            className: v,
            children: x,
            theme: y = "none",
            id: j,
            pricingOptions: N,
            pricingContainerHeight: S,
            isCoverCard: T,
            platformOptions: P,
            isProductCard: C = !1
          } = e;
          const _ = (0, s.useRef)(),
            E = (0, s.useRef)(),
            {
              tag: M,
              expandedHasTag: D,
              badges: z
            } = h;
          r().set(t, "meta.prod", i);
          const O = x?.props?.images.length > 0;
          let V = (0, m.jsx)("h1", {
            children: l
          });
          return T && (V = null), (0, s.useEffect)((() => {
            const e = () => {
              _.current && _.current.scrollTop > 0 && window.innerWidth >= window.innerHeight && (_.current.scrollTop = 0)
            };
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), []), (0, m.jsx)(d.DataLayerProvider, {
            card_id: j,
            card_name: l?.toLowerCase(),
            children: (0, m.jsx)(o.A, {
              threshold: [25, 50, 75, 90, 100],
              trackRef: "long" === b ? _ : E,
              children: (0, m.jsxs)(L, {
                ref: _,
                initial: f,
                animate: g,
                variants: p.expanded,
                transition: A.cardOpen,
                className: (0, n.classList)("rockstargames-modules-core-newswire-articledcb84dcfd34616fb0089133acf0c4669", v),
                "data-type": b,
                "data-size": c,
                "data-product": C,
                "data-covercard": T || !1,
                "data-context": w,
                style: {
                  "--product-card-pricing-info-height": `${S||0}px`
                },
                children: [O && (0, m.jsx)(I, {
                  size: c,
                  title: l,
                  textOverlayProps: h,
                  expandedView: !0,
                  pricingOptions: N,
                  platformOptions: P,
                  isCoverCard: T,
                  children: x
                }), (0, m.jsxs)(L, {
                  ref: E,
                  className: "rockstargames-modules-core-newswire-articleeaf357a8d0bae1199142949cbf24e7b9",
                  variants: p.expandedContents,
                  transition: A.afterCardOpen,
                  "data-theme": y,
                  children: [(0, m.jsxs)("div", {
                    className: "rockstargames-modules-core-newswire-articlefc0e079f7c184b912d5a46b037d01b0d",
                    children: [(0, m.jsx)(u, {
                      hasTag: D,
                      tag: M,
                      badges: z
                    }), V, C && (0, m.jsxs)(m.Fragment, {
                      children: [!0 === P?.hasPlatformOptions && (0, m.jsx)("div", {
                        className: "rockstargames-modules-core-newswire-articleb630c7c1f59f91f2ac304af525b6d081",
                        children: (0, m.jsx)(u, {
                          hasTag: P?.hasPlatformOptions,
                          tag: P?._memoq?.platformTag,
                          tagStyle: P?._memoq?.platformTagStyle
                        })
                      }), !0 === N?.hasPricingOptions && (0, m.jsx)(k, {
                        title: l,
                        showTitle: !1,
                        showBackground: !1,
                        tag: N?._memoq?.tag,
                        tagStyle: N?.tagStyle || "free",
                        discountPrice: N?._memoq?.discountPrice,
                        originalPrice: N?._memoq?.originalPrice
                      })]
                    })]
                  }), (0, m.jsx)(n.TinaParser, {
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
      var D = t(87839),
        z = t(8999),
        O = t(21450),
        V = t(74459),
        $ = t.n(V),
        F = t(89779),
        H = t(40207);
      const B = "modal-context",
        G = [null, () => null],
        R = window?.[B] ?? (window[B] = (0, s.createContext)(G)),
        W = e => {
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
            className: d,
            children: l,
            isProductCard: u,
            cardIds: f = null,
            theme: g = "none",
            isCoverCard: p
          } = e;
          const [b, w] = (0, F.useSearchParams)(), h = (0, s.useRef)(null), [, k] = (0, s.useContext)(R), {
            track: v
          } = (0, H.useGtmTrack)(), [x, y] = (0, s.useState)(!1), j = () => {
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
              cardIds: f,
              theme: g,
              activeId: a,
              gtm: {
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
          }), [b.get("info"), a]), (0, m.jsx)("div", {
            ref: h,
            onClick: S,
            onKeyUp: e => {
              (e => {
                "Enter" === e.code && S(e)
              })(e)
            },
            className: d,
            "data-size": r,
            "data-type": c,
            "data-product": u,
            role: "button",
            tabIndex: "linkout" !== c ? 0 : -1,
            "aria-label": i,
            children: l
          })
        },
        q = {
          pillBtn: "rockstargames-modules-core-newswire-articleebdcdd73cdde7ce5626490066de01474",
          selected: "rockstargames-modules-core-newswire-articled058244e6f29505e3c05558039370b54",
          card: "rockstargames-modules-core-newswire-articlec2685d1ff8cc088bfef4c336b1a9f8ae",
          content: "rockstargames-modules-core-newswire-articlee268650dd5a86c01be62eeb552b4e54b",
          expandedContent: "rockstargames-modules-core-newswire-articled19c433e20935d6b1eebff53baa04bb1",
          text: "rockstargames-modules-core-newswire-articlebeee7d7b941675acb2b6b9bf5caf4f33",
          imageHolder: "rockstargames-modules-core-newswire-articlec823ac57eab14be16dd87e168e610d4f",
          coverCardWrapper: "rockstargames-modules-core-newswire-articleef72671ab95bb9290b80637cb3073d29"
        },
        U = e => {
          let {
            payload: a,
            prod: t,
            images: i,
            size: r,
            title: c,
            initial: o,
            animate: d,
            variants: l,
            id: u,
            position: f,
            sectionTitle: g,
            expandedType: p,
            context: b,
            children: w,
            expandedCardContents: h,
            textOverlayProps: k = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            deckProps: v = {},
            modalProps: x = [],
            theme: y,
            cardIds: j,
            pricingOptions: N,
            platformOptions: S = null,
            pricingContainerHeight: T,
            isCoverCard: P = !1,
            isProductCard: C = !1
          } = e;
          const _ = (0, n.useTinaComponents)(),
            I = (0, s.useMemo)((() => ({
              ..._,
              HTMLElement: D.A,
              ImageWithBadge: z.A,
              Carousel: O.A,
              GroupOfItems: $()
            })), [_]),
            L = (0, s.useMemo)((() => (0, m.jsx)(M, {
              type: p,
              components: I,
              payload: a,
              prod: t,
              images: i,
              size: r,
              title: c,
              context: b,
              textOverlayProps: k,
              initial: o,
              animate: d,
              variants: l,
              theme: y,
              cardIds: j,
              pricingOptions: N,
              id: u,
              pricingContainerHeight: T,
              isCoverCard: P,
              platformOptions: S,
              isProductCard: C,
              children: h
            })), [p, i, t, r, c, k, h, o, d, l, I, a, C]),
            E = [q.card, P ? q.coverCardWrapper : ""].join(" ");
          return (0, m.jsx)(W, {
            id: u,
            position: f,
            sectionTitle: g,
            title: c,
            size: r,
            expandedType: p,
            images: i,
            deckProps: v,
            modalProps: {
              content: L,
              ...x
            },
            className: E,
            isProductCard: C,
            cardIds: j,
            theme: y,
            isCoverCard: P,
            children: w
          })
        };
      var Q = t(60285),
        K = t(2024);
      const X = {
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
        Y = e => {
          let {
            videoUrl: a,
            expandedType: t,
            children: s
          } = e;
          return a && "linkout" === t ? (0, m.jsx)(Q.A, {
            to: a,
            children: s
          }) : s
        },
        J = e => {
          let {
            className: a,
            cardType: t,
            title: s,
            image: i,
            subheader: r,
            subtitle: n,
            price: c,
            slashedPrice: o,
            badge: d = null,
            expandedType: l,
            videoUrl: u
          } = e;
          return (0, m.jsx)("div", {
            className: [X.clrCollapsedCard, a].join(" "),
            role: "button",
            tabIndex: 0,
            children: (0, m.jsx)(Y, {
              videoUrl: u,
              expandedType: l,
              children: (0, m.jsxs)("div", {
                className: X.cardContainer,
                "data-type": t,
                children: [(0, m.jsx)("div", {
                  className: X.cardMedia,
                  children: (0, m.jsx)(K.A, {
                    ...i
                  })
                }), (0, m.jsxs)("div", {
                  className: X.cardInfo,
                  children: [r && (0, m.jsx)("h6", {
                    children: r
                  }), (0, m.jsx)("h5", {
                    children: s
                  }), n && (0, m.jsx)("h6", {
                    className: X.subtitle,
                    children: n
                  }), "store" === t && (0, m.jsxs)("div", {
                    className: X.storeInfo,
                    children: [(0, m.jsx)("p", {
                      className: (() => {
                        switch (d) {
                          case "New":
                            return X.newBadge;
                          case "Sale":
                            return X.saleBadge;
                          case "Out of Stock":
                            return X.outOfStockBadge;
                          default:
                            return ""
                        }
                      })(),
                      children: d
                    }), (0, m.jsxs)("span", {
                      className: X.priceInfo,
                      children: [(0, m.jsx)("p", {
                        className: X.price,
                        children: c
                      }), (0, m.jsx)("p", {
                        className: X.slashedPrice,
                        children: o
                      })]
                    })]
                  })]
                })]
              })
            })
          })
        },
        Z = e => {
          let {
            expandedType: a,
            to: t,
            children: i,
            style: r,
            sectionTitle: n = "",
            id: c,
            cardTitle: o,
            position: d
          } = e;
          const {
            track: l
          } = (0, H.useGtmTrack)(), u = (0, s.useCallback)((() => {
            l({
              event: "card_click",
              link_url: t,
              card_id: c,
              card_name: o,
              element_placement: n.toLowerCase(),
              position: d
            })
          }), [n, t, c, o, n, d]);
          return "linkout" === a && t ? (0, m.jsx)(Q.A, {
            to: t,
            style: r,
            target: t?.startsWith("http") ? "_blank" : "_self",
            onClick: u,
            children: i
          }) : i
        };
      var ee = t(28089);
      const ae = {
          layeredImageFrame: "rockstargames-modules-core-newswire-articlef4291aa18340b383f772137ec9e0c582",
          layered: "rockstargames-modules-core-newswire-articlef48bca962431b0e1cbf30e25dfb23979",
          foreground: "rockstargames-modules-core-newswire-articleb52f487de5963cf5eab84e86c244302b",
          imageMask: "rockstargames-modules-core-newswire-articlef55d22ef90c565718cad7bf6387893a7",
          logo: "rockstargames-modules-core-newswire-articlefa6e98cbad19c314e5759f3aa0a2f9b3",
          "sm-horizontal": "rockstargames-modules-core-newswire-articleb496d31814195834a5e84fa5157ede59"
        },
        {
          LiteMotion: te,
          Animations: se
        } = c,
        {
          getVariant: ie,
          variants: re,
          transitions: ne
        } = se,
        ce = e => {
          let {
            image: a,
            i: t,
            prod: s
          } = e;
          const {
            alt: i,
            src: r
          } = (0, ee.useImageParser)({
            ...a,
            prod: s
          });
          return (0, m.jsx)("img", {
            src: r.mobile,
            alt: i ?? "",
            style: {
              "--z-index": t
            }
          })
        },
        oe = e => {
          let {
            images: a = [],
            className: t = "",
            prod: i = !1,
            expandedView: r = !1,
            style: c = {}
          } = e;
          const [o, d] = (0, s.useState)({
            height: window.innerHeight,
            width: window.innerWidth
          });
          (0, s.useEffect)((() => {
            function e() {
              d({
                height: window.innerHeight,
                width: window.innerWidth
              })
            }
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [o]);
          const l = (0, s.useMemo)((() => a?.length && 0 !== a.length ? a.map((e => (0, m.jsx)(te, {
            className: (0, n.classList)(ae[e?.specialClass] ?? ae.imageMask, ae[e?.sizeClass], e?.className),
            variants: ie(e?.specialClass ?? "imageMask", r ? "expanded" : "collapsed"),
            initial: "initial",
            animate: "animate",
            transition: ne.cardOpen,
            children: (0, m.jsx)(ce, {
              image: e,
              prod: i
            })
          }, e.key))) : null), [a, o, r, i]);
          return (0, m.jsx)(te, {
            className: (0, n.classList)(ae.layeredImageFrame, a.length > 1 ? ae.layered : ae.flat, t),
            style: c,
            initial: re.fade.in.initial,
            animate: re.fade.in.animate,
            transition: ne.instantFade,
            "data-expanded-view": r,
            children: l
          })
        },
        de = {
          clrCardModalContent: "rockstargames-modules-core-newswire-articlebfb45dddcb9390c11ba16607a49ea776",
          expandedCard: "rockstargames-modules-core-newswire-articled8a1f864c20db127067721ebe605540b",
          content: "rockstargames-modules-core-newswire-articled57eaa4a6807e67f6189ae02a1625595",
          details: "rockstargames-modules-core-newswire-articlefd05f61944281a1ef50e21bc30de10f7",
          calloutHeaders: "rockstargames-modules-core-newswire-articlef12819eca617b4b90f2cfd0c5788db65"
        },
        {
          variants: le
        } = c.Animations,
        me = e => {
          let {
            id: a,
            content: t,
            size: s = "clr",
            cardType: i = "release",
            title: r,
            subheader: c,
            subtitle: o,
            storeInfo: d = {},
            expandedType: l,
            to: u,
            image: f,
            deckProps: g,
            tina: p = {},
            position: b
          } = e;
          const w = (0, n.useTinaPayload)(),
            h = p?.payload?.meta?.cdn ?? w?.meta?.prod ?? !1,
            k = {
              image: {
                ...f,
                prod: h
              }
            },
            v = [f];
          return (0, m.jsx)(U, {
            id: a,
            title: r,
            context: "clr-card",
            size: s,
            expandedType: l,
            images: k,
            deckProps: g,
            prod: h,
            position: b,
            modalProps: {
              className: de.clrCardModal,
              contentClassName: de.clrCardModalContent
            },
            variants: le.plainCard,
            payload: {
              content: t
            },
            expandedCardContents: (0, m.jsx)(oe, {
              images: v,
              prod: h
            }),
            children: (0, m.jsx)(Z, {
              expandedType: l,
              to: u,
              style: {
                display: "flex"
              },
              children: (0, m.jsx)(J, {
                cardType: i,
                title: r,
                subheader: c,
                subtitle: o,
                image: k,
                expandedType: l,
                price: d?.price,
                slashedPrice: d?.slashedPrice,
                badge: d?.badge
              })
            })
          })
        };
      var ue = t(22545);
      const fe = e => {
        let {
          images: a,
          title: t,
          expandedView: i,
          variants: r,
          transition: n
        } = e;
        const c = (0, s.useMemo)((() => a && 0 !== a?.length ? a.map((e => e?.image?.sources ? (0, m.jsx)(z.A, {
          ...e,
          style: {
            "--object-position": e?.objectPosition ?? ""
          }
        }) : null)) : null), [a]);
        return !c?.length || c?.length < 1 ? null : 1 === c.length ? c : (0, m.jsx)(ue.A, {
          slideChildren: c,
          title: t,
          navigation: i,
          thumbsVisible: i,
          spaceBetween: 0,
          variants: r,
          transition: n
        })
      };
      var ge = t(14963),
        pe = t.n(ge),
        be = t(63672);
      const we = {
          pillBtn: "rockstargames-modules-core-newswire-articled13aae72f49e86630d46fa6e54e1fbdc",
          selected: "rockstargames-modules-core-newswire-articlebcc7bd9d9a43edf197cc46795d57249b",
          customModalContent: "rockstargames-modules-core-newswire-articleceeb11e5fc712f410c8c4879663640ef"
        },
        {
          transitions: he,
          variants: ke
        } = c.Animations;
      t(58407), t(72752), t(25180);
      var ve = t(56309),
        xe = t(94566);
      const ye = (e, a) => {
          let t = getComputedStyle(e).getPropertyValue(a);
          return t = t.replace("px", "").replace("rem", "").replace("em", ""), t = t.replace("vh", "").replace("vw", "").replace("vmin", "").replace("vmax", ""), t = t.replace("ms", "").replace("s", ""), Number(t)
        },
        je = e => ({
          x: void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
          y: void 0 !== e.changedTouches ? e.changedTouches[0].screenY : e.screenY
        }),
        Ne = e => e.scrollHeight > e.clientHeight;

      function Se(e, a) {
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
          } else r().isObject(e) && !r().isArray(e) ? Se(e, a) : r().isArray(e) && (t[s] = e.map((e => r().isObject(e) ? Se(e, a) : e)))
        })), t
      }(0, d.withTranslations)((e => {
        let {
          active: a,
          styles: t,
          title: i,
          itemNumber: r,
          inModalMode: c,
          openModalMode: o,
          element: d,
          upNext: u,
          mobileMode: f,
          refDeck: g,
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
        const N = (0, ve.useIntl)(),
          {
            track: S
          } = (0, H.useGtmTrack)(),
          T = (0, s.createRef)(),
          P = (0, s.createRef)(),
          C = (0, s.createRef)(),
          _ = (0, s.createRef)(),
          I = (0, s.createRef)(),
          [L, E] = (0, s.useState)(!1),
          [A, M] = (0, s.useState)(0),
          [D, z] = (0, s.useState)(0),
          [O, V] = (0, s.useState)(0),
          [$, F] = (0, s.useState)(0),
          [B, G] = (0, s.useState)(0),
          [R, W] = (0, s.useState)(!1),
          [q, U] = (0, s.useState)(0),
          [Q, K] = (0, s.useState)(0),
          [X, Y] = (0, s.useState)(0),
          [J, Z] = (0, s.useState)("700"),
          [ae, te] = (0, s.useState)(-1),
          [se, ie] = (0, s.useState)(0),
          [re, ne] = (0, s.useState)(0),
          [ce, oe] = (0, s.useState)(0),
          [de, le] = (0, s.useState)(!1),
          [me, ue] = (0, s.useState)(""),
          [fe, ge] = (0, s.useState)(null),
          [be, we] = (0, s.useState)(!1),
          [he, ke] = (0, s.useState)(null),
          [Te, Pe] = (0, s.useState)(!1),
          [Ce, _e] = (0, s.useState)(!1),
          Ie = (0, n.useTinaPayload)(),
          Le = b?.payload?.meta?.cdn ?? !1 ?? Ie?.meta?.prod ?? !1,
          Ee = (0, n.useTranslations)({
            payload: b?.payload,
            variables: b?.variables
          }),
          Ae = Ee?.meta ?? {},
          Me = Se(Ee?.content?.[0], Le),
          De = (0, s.useMemo)((() => Me?.images?.[0]?.image?.badge), [Me]),
          ze = (0, s.useMemo)((() => Me.title ?? i ?? Ae?.title), [i, Ae?.title, Me.title]),
          Oe = (0, ee.useImageParser)({
            alt: Me?.images?.[0]?.image?.alt ?? "",
            ariaLabel: Me?.images?.[0]?.image?.alt ?? "",
            sources: Me?.images?.[0]?.image?.sources ?? [],
            prod: Le
          }),
          Ve = Oe?.src?.mobile ?? Oe?.src?.desktop ?? !1,
          $e = (0, s.useMemo)((() => Ae?.foreignId), [Ae]),
          Fe = (0, s.useMemo)((() => Ae?.foreignTitle), [Ae]),
          [He, Be] = (0, s.useState)(0),
          [Ge, Re] = (0, s.useState)(0),
          [We, qe] = (0, s.useState)(0),
          [Ue, Qe] = (0, s.useState)(0),
          [Ke, Xe] = (0, s.useState)(!1),
          [Ye, Je] = (0, s.useState)(0),
          [Ze, ea] = (0, s.useState)(20),
          [aa, ta] = (0, s.useState)(null),
          [sa, ia] = (0, s.useState)(!1),
          ra = (0, s.useCallback)((e => {
            if (!0 === R || !c && !f || be) return;
            const a = je(e);
            Be(a.x), Re(a.y)
          }), [R, c]),
          na = e => {
            ra(e)
          },
          ca = e => {
            if (!0 === R || 0 === He || !c && !f || be) return;
            const a = je(e),
              t = a.x > He ? 1 : -1,
              s = Math.abs(He - a.x);
            c && !f && s > Ze ? (ia(!0), ue(t > 0 ? "prev" : "next"), da()) : (Xe(!0), Je(s * t), j(s * t))
          },
          oa = e => {
            if (!0 === R || !c && !f || be) return;
            const a = je(e),
              t = a.x > He ? 1 : -1,
              s = Math.abs(He - a.x),
              i = Math.abs(Ge - a.y);
            c && !f ? (da(), ue("")) : s > Ze && i < 25 ? (ia(!0), ue(t > 0 ? "prev" : "next"), da()) : da()
          },
          da = () => {
            W(!0), Be(0), Re(0), Xe(!1), Je(0), j(0)
          };
        return (0, s.useEffect)((() => {
          let e = q;
          L ? e = 0 : c && !f && (e = q), M(e)
        }), [L, f, c, D, $, Q, X, O, q]), (0, s.useEffect)((() => {
          E(!(!c || !f))
        }), [c, f]), (0, s.useEffect)((() => {
          c && a && S({
            event: "virtualPageview",
            display_type: f ? "mobile" : "desktop",
            view_name: `${$e}/${ze}`,
            source_content_id: $e,
            source_content_name: Fe
          })
        }), [c, a]), (0, s.useEffect)((() => {
          const e = pe()(((e, a) => {
            let t = 18;
            if (e?.documentElement && (t = ye(e?.documentElement, "--root-font-size")), re !== a.innerHeight && ne(a.innerHeight), g?.current) {
              Y(ye(g.current, "--eventDeck-marginSm") * t);
              const e = t * ye(g?.current, "--eventDeck-modalGutters"),
                s = a?.innerWidth,
                i = s - 2 * e;
              z(i), _.current && f && V(i), F(ye(g.current, "--eventDeck-itemSize") * t), oe(ye(g.current, "--eventDeck-phaseOneTransitionDuration"));
              const r = ye(g?.current, "--eventDeck-itemImageTitleMargins") * t,
                n = P?.current?.clientHeight,
                c = n + r;
              Number.isNaN(c) || U(c), ie(ye(g?.current, "--eventDeck-headerHeight") * t)
            }
            let s = Math.min(700, a.innerWidth);
            f || (s = 900), Z(`${s}`)
          }), 300);
          return window.addEventListener("resize", (() => {
            e(document, window)
          })), e(document, window), () => {
            window.removeEventListener("resize", (() => {
              e(document, window)
            }))
          }
        }), [g, f]), (0, s.useEffect)((() => {
          if (T.current) {
            const e = T.current.clientHeight;
            Number.isNaN(e) || K(e)
          }
        }), [T]), (0, s.useEffect)((() => {
          if (c && f && _.current && (_.current.style.transform = "scale(1) translate3d(0, 0, 0)"), !c && f && _.current) {
            const e = 228 / D;
            _.current.style.transform = `scale(${e}) translate3d(0, 0, 0)`
          }!f && _.current && (_.current.style.transform = null)
        }), [c, f, D, O]), (0, s.useEffect)((() => {
          const e = .5 * D,
            a = re - se - 3 * X;
          G(D - (e < a ? e : a))
        }), [D, X, re]), (0, s.useEffect)((() => {
          "next" === me ? (h(null, !0), ue("")) : "prev" === me && (w(null, !0), ue(""))
        }), [me]), (0, s.useEffect)((() => {
          qe(0), Qe(0)
        }), [f]), (0, s.useEffect)((() => {
          f ? ea(c ? 35 : 20) : c && ea(50)
        }), [c, f]), (0, s.useEffect)((() => {
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
          clearTimeout(fe);
          const e = setTimeout((() => {
            W(!1), Be(0)
          }), 200);
          ge(e)
        }), [R, 200]), (0, s.useEffect)((() => {
          if (!sa) return;
          clearTimeout(aa);
          const e = setTimeout((() => {
            ia(!1)
          }), 1e3);
          ta(e)
        }), [sa]), (0, s.useEffect)((() => {
          c && clearTimeout(ae), setTimeout((() => {
            le(!de)
          }), ce)
        }), [c]), (0, s.useEffect)((() => (document.body.addEventListener("mouseleave", da), () => {
          document.body.removeEventListener("mouseleave", da)
        })), []), (0, s.useEffect)((() => {
          I.current ? Pe(Ne(I.current)) : Pe(!1), void 0 !== d && d.current ? _e(Ne(d.current)) : _e(!1)
        }), [d, I, a, c, de]), Me ? (0, m.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articlec4090652e3c0a4e1979bb0a36b22b7cd",
          ref: d,
          "data-item-position": r,
          "data-modal-mode": c,
          "data-active-item": a,
          "data-up-next": u,
          "data-transition": Ke || 0 !== y ? "none" : k,
          "data-scrollable": Ce,
          style: {
            ...t,
            transform: c && a && !f ? `translate3d(${We+Ye}px, ${Ue}px, 0)` : f && !c ? `translate3d(${We+y}px, ${Ue}px, 0)` : t?.transform
          },
          onClick: e => {
            sa || (c ? c && !f && (r < v ? w(e, !0) : r > v && h(e, !0)) : o(e))
          },
          onMouseEnter: () => {
            c || E(!0), c || f || (clearTimeout(ae), te(setTimeout((() => {
              S({
                event: "card_title_hover",
                card_name: ze,
                card_id: r,
                position: r,
                view_name: `${$e}/${Fe}`,
                source_content_id: $e,
                source_content_name: Fe
              })
            }), 1e3)))
          },
          onMouseLeave: () => {
            c || E(!1), c || f || clearTimeout(ae)
          },
          onTouchStart: na,
          onTouchMove: ca,
          onTouchEnd: oa,
          onMouseDown: na,
          onMouseMove: ca,
          onMouseUp: oa,
          onKeyUp: e => {
            "Enter" === e.key && (c || o(e))
          },
          tabIndex: c ? -1 : 0,
          "aria-label": c ? N.formatMessage(xe.card.events_deck_modal_group_label) : "",
          role: c ? "dialog" : "presentation",
          children: [(0, m.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articleb9c878efb14d25c323e95f01b7a53460",
            "data-full-header": L,
            ref: C,
            style: {
              height: c && f ? `${D}px` : null,
              width: c && f ? `${D}px` : null
            },
            children: [Ve && (0, m.jsx)("img", {
              ref: _,
              src: `${Oe?.src?.mobile??Oe?.src?.desktop}?im=Resize,width=${J}`,
              alt: Oe?.alt,
              style: {
                width: 0 !== O && f ? `${O}px` : null,
                height: 0 !== O && f ? `${O}px` : null
              }
            }), (0, m.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articleba8c09e500ea0845dc20d380e8ec11ca",
              style: {
                transform: !f || f && c ? `translate3d(0, ${A}px, 0)` : null
              },
              children: [De && (0, m.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlecbbb0470197acdc4f0ec1f567f5c8a42",
                ref: T,
                children: (0, m.jsx)(l.A, {
                  text: De
                })
              }), (0, m.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articleaca2b0fbf7c1dbcbf99e53812b9abc8e",
                ref: P,
                "aria-hidden": c,
                children: ze
              })]
            })]
          }), (0, m.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlee7defd080518d58f00f72ccc94df53aa",
            ref: I,
            "aria-hidden": !c,
            onScroll: () => {
              we(!0), da(), clearTimeout(he);
              const e = setTimeout((() => {
                we(!1)
              }), 100);
              ke(e)
            },
            style: {
              top: c && f ? `${D}px` : null,
              width: c && !f && a ? `${B}px` : null,
              touchAction: Te || f ? "unset" : "none"
            },
            children: [ze && (0, m.jsx)("span", {
              className: "rockstargames-modules-core-newswire-articlea8fbffe55d92fc2f04e5e6b8f9267206",
              children: ze
            }), (0, m.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlee20bd8af5d67954447804e0e21161d3b",
              children: (0, m.jsx)(n.TinaParser, {
                components: p,
                tina: {
                  meta: Ae,
                  payload: {
                    content: Me?.content
                  }
                }
              })
            })]
          })]
        }) : null
      }));
      const Te = {
          pillBtn: "rockstargames-modules-core-newswire-articlec484e5a1bcbdd4b338bd6fe49900d6cf",
          selected: "rockstargames-modules-core-newswire-articled65c523327b32d2de08dc996cf9d7071",
          customModalContent: "rockstargames-modules-core-newswire-articlec0a9f620e5c9749f0eebe506acda4122",
          content: "rockstargames-modules-core-newswire-articlecebbc72d1229514723b9d664281b472f"
        },
        {
          variants: Pe
        } = c.Animations;
      t(39613), t(28606), t(55430), t(7607);
      const {
        variants: Ce
      } = c.Animations;
      var _e = t(60207);
      var Ie = t(20009);
      const {
        Gen9CoreCarousel: Le,
        framer: Ee,
        useTinaModuleFetchByIds: Ae,
        withSimpleErrorBoundary: Me
      } = Ie, De = {
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
            images: d = [],
            deckProps: l = {},
            to: u = null,
            tina: f = {},
            position: g = 0,
            sectionTitle: p = "",
            theme: b,
            pricingOptions: w,
            cardIds: h,
            platformOptions: k = null
          } = e;
          const v = (0, n.useTinaPayload)(),
            x = f?.payload?.meta?.cdn ?? v?.meta?.prod ?? !1,
            [y, j] = (0, s.useState)(l?.size ?? r),
            [N, S] = (0, s.useState)(0),
            T = void 0 !== w?.hasPricingOptions || void 0 !== k?.hasPlatformOptions;
          return (0, s.useEffect)((() => {
            j(l?.size ?? r)
          }), [l?.size, r]), (0, m.jsx)(U, {
            id: a,
            title: t,
            size: y,
            expandedType: c,
            images: d,
            deckProps: l,
            prod: x,
            payload: {
              content: i,
              meta: {}
            },
            variants: Pe.plainCard,
            textOverlayProps: o,
            modalProps: {
              className: Te.customModal,
              contentClassName: Te.customModalContent
            },
            expandedCardContents: (0, m.jsx)(oe, {
              images: d,
              prod: x,
              expandedView: !0
            }),
            position: g,
            sectionTitle: p,
            theme: b,
            cardIds: h,
            pricingOptions: w,
            platformOptions: k,
            pricingContainerHeight: N,
            isProductCard: T,
            children: (0, m.jsx)(Z, {
              expandedType: c,
              to: u,
              sectionTitle: p,
              id: a,
              cardTitle: t,
              position: g,
              children: (0, m.jsx)("div", {
                className: Te.content,
                "data-product": T,
                children: (0, m.jsx)(I, {
                  title: t,
                  size: y,
                  textOverlayProps: o,
                  pricingOptions: w,
                  platformOptions: k,
                  setPricingContainerHeight: S,
                  children: (0, m.jsx)(oe, {
                    images: d,
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
            images: d = [],
            deckProps: l = {},
            tina: u = {},
            payload: f,
            position: g = 0,
            sectionTitle: p = "",
            cardIds: b
          } = e;
          const w = (0, n.useTinaPayload)(),
            h = f ?? w,
            k = u?.payload?.meta?.cdn ?? h?.meta?.prod ?? !1,
            v = ((e, a) => e?.map((e => e?.image ? {
              ...e,
              image: {
                ...e.image,
                prod: a
              }
            } : e)))(d, k),
            [x, y] = (0, s.useState)(l?.size ?? r),
            {
              parent: j,
              main: N,
              thumbs: S
            } = ke?.cardWithImageGallery?.gallery ?? {};
          return (0, s.useEffect)((() => {
            y(l?.size ?? r)
          }), [l?.size, r]), (0, m.jsx)(U, {
            id: a,
            position: g,
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
            deckProps: l,
            prod: k,
            variants: ke.cardWithImageGallery,
            textOverlayProps: o,
            modalProps: {
              className: we.customModal,
              contentClassName: we.customModalContent
            },
            expandedCardContents: (0, m.jsx)(fe, {
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
                parent: he.cardOpen,
                main: he.cardOpen,
                thumbs: he.cardOpen
              }
            }),
            cardIds: b,
            children: (0, m.jsx)("div", {
              className: we.content,
              children: (0, m.jsx)(I, {
                title: t,
                size: x,
                textOverlayProps: o,
                children: (0, m.jsx)(fe, {
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
            HTMLElement: D.A,
            UnorderedList: be.A,
            ListItem: _e.A
          };
          return (0, m.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articled392587df58204b0910e721ef1f3c35c",
            "data-size": s,
            children: (0, m.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articlea002b98d034f1897c7e1f31327ff08dc",
              children: [i && (0, m.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articled9901d1bb91e1fbc1e857964083fe496",
                children: i
              }), (0, m.jsxs)("div", {
                className: "rockstargames-modules-core-newswire-articlebea322f6e3afa31355668ad164496730",
                children: [a && (0, m.jsx)("h3", {
                  children: a
                }), (0, m.jsx)(n.TinaParser, {
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
        ...Ie
      }, ze = Ee.withFadeIn(Me((e => {
        let {
          cards: a = [],
          size: t,
          name: i,
          title: c,
          description: o,
          customSlidesPerView: d = null,
          theme: l = "none",
          cardSizeBreakpoints: u = {},
          customAspectRatio: f = "3/1",
          titleBadge: g = null
        } = e;
        const p = (0, s.useRef)(null),
          b = r().map(a, "id"),
          w = Ae({
            ids: b
          }),
          [h, k] = (0, s.useState)(d),
          [v] = (0, F.useSearchParams)(),
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
            const e = d || window.getComputedStyle(p.current).getPropertyValue("--slides-per-view");
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
              } = s, d = r().clone(o);
              r().set(d, "payload.meta.id", i), a.push((0, m.jsx)(n.TinaParser, {
                components: De,
                tina: d,
                componentProps: {
                  deckProps: {
                    size: t
                  },
                  tina: d,
                  id: i,
                  position: e,
                  sectionTitle: c,
                  theme: l,
                  cardIds: b
                }
              }, i)), e += 1
            }
            return a
          }), []) : null
        }), [w, t]);
        return (0, m.jsx)("div", {
          className: "rockstargames-modules-core-newswire-articlecaf46db6464a84ad4990aed75ef74ff1",
          "data-theme": l,
          ref: p,
          children: (0, m.jsx)(Le, {
            description: o,
            size: t,
            cardSizeBreakpoints: u,
            slideChildren: j,
            title: c,
            name: i,
            customSlidesPerView: h,
            customAspectRatio: f,
            titleBadge: g
          })
        })
      })))
    },
    26043: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => m
      });
      var s = t(8999),
        i = t(37297),
        r = t(64064),
        n = t.n(r),
        c = t(31879),
        o = t.n(c);
      const d = {
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
      };
      var l = t(46632);
      const m = e => {
        let {
          alt: a = "",
          className: t = "",
          src: r = {},
          image: c = null,
          video: m = null
        } = e;
        return (0, l.jsxs)("div", {
          className: ((r?.videoPlayerId || r?.gifHash) && d.heroImage, t),
          children: [r?.mobile && (0, l.jsx)(i.A, {
            src: r.mobile,
            ariaLabel: a,
            className: [r?.desktop && d.hiddenLarge, d.responsiveImage].join(" "),
            noRatioPlease: !0
          }), r?.desktop && (0, l.jsx)(i.A, {
            src: r.desktop,
            ariaLabel: a,
            className: [r?.mobile && d.hiddenMobile, d.responsiveImage].join(" ")
          }), r?.videoPlayerId && (0, l.jsx)("div", {
            className: [d.responsiveVideo, d.trailer].join(" "),
            children: (0, l.jsx)(o(), {
              context: "site",
              autoplay: !1,
              id: r.videoPlayerId,
              hero: !0
            })
          }), r?.gifHash && (0, l.jsx)("div", {
            className: d.responsiveVideo,
            children: (0, l.jsx)(n(), {
              hash: [{
                desktop: r?.gifHash?.desktop
              }, {
                mobile: r?.gifHash?.mobile
              }]
            })
          }), c && (0, l.jsx)(s.A, {
            image: c
          }), m && (0, l.jsx)("div", {
            className: [d.responsiveVideo, d.trailer].join(" "),
            children: (0, l.jsx)(o(), {
              context: "site",
              autoplay: m?.autoplay ?? !1,
              id: m.id,
              hero: !0
            })
          })]
        })
      }
    },
    85184: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        default: () => d
      });
      var s = t(60285),
        i = t(26371),
        r = t(74401),
        n = t(42756);
      const c = {
        title: "rockstargames-modules-core-newswire-articleca3619ec694712f8ef44a0673cc5cd2a",
        main: "rockstargames-modules-core-newswire-articleb604683b1b1cf1316f5cf35ce2fe4b31",
        breadcrumbs: "rockstargames-modules-core-newswire-articled1965b8d8252ea2aaac5bde77b3bcef0"
      };
      var o = t(46632);
      const d = (0, n.withTranslations)((e => {
        let {
          children: a,
          intro: t,
          image: d = {},
          style: l = {},
          t: m,
          className: u = "",
          variant: f = null
        } = e, g = {};
        void 0 !== l.toggleInvertSeparator && (g = {
          "--breadcrumb-separator-filter-invert": l.toggleInvertSeparator ? "invert(0)" : "invert(1)"
        });
        const p = (0, n.useNewswirePost)(),
          b = {},
          w = b?.meta?.title ?? p?.title,
          h = b?.meta?.subtitle ?? p?.subtitle,
          k = h ? (0, o.jsx)("h3", {
            "data-context": "newswire-subtitle",
            children: h
          }) : "",
          v = [{
            text: m("Newswire"),
            to: "/newswire"
          }],
          {
            src: x
          } = (0, r.useImageParser)(d),
          y = (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)("time", {
              dateTime: p.created,
              children: p.created_formatted
            }), t ? (0, o.jsx)(i.A, {
              item: t
            }) : "", a]
          });
        p?.primary_tags?.length && v.push({
          text: p.primary_tags[0].name,
          to: `/newswire?tag_id=${p.primary_tags[0].id}`
        }), p?.secondary_tags?.length && v.push({
          text: p.secondary_tags[0].name,
          to: `/newswire?tag_id=${p.secondary_tags[0].id}`
        });
        const j = (0, o.jsx)("div", {
          className: c.breadcrumbs,
          children: v.map((e => (0, o.jsx)(s.A, {
            to: e.to,
            children: e.text
          }, e.to)))
        });
        return x?.desktop && (l.background = `url(${x.desktop}) center/cover no-repeat`), (0, o.jsx)("div", {
          className: [u, c.title].join(" "),
          style: {
            ...l,
            ...g
          },
          children: "separated" === f ? (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsxs)("header", {
              "data-context": "title",
              children: [j, (0, o.jsx)("h1", {
                children: w
              })]
            }), (0, o.jsxs)("footer", {
              "data-context": "title",
              children: [k, y]
            })]
          }) : (0, o.jsxs)(o.Fragment, {
            children: [j, (0, o.jsxs)("div", {
              className: c.main,
              children: [(0, o.jsx)("h1", {
                children: w
              }), k]
            }), y]
          })
        })
      }))
    },
    26750: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        AnchorLink: () => c,
        Discounts: () => _,
        Donate: () => A,
        Engagement: () => i(),
        EventInfo: () => R,
        FeaturedEventInfo: () => W,
        FontClip: () => U,
        GamingRewards: () => J,
        Gen9List: () => se,
        HeroImage: () => ie.A,
        NewswireFull: () => ce,
        NewswireTitle: () => H.default,
        PctBar: () => oe,
        Podium: () => me
      });
      var s = t(32503),
        i = t.n(s),
        r = t(71403),
        n = t(46632);
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
      var o = t(74459),
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
            }), !s && (0, n.jsx)(j, {
              items: a,
              noInfiniteScroll: i,
              perPage: 2,
              perPageMobile: 1
            })]
          })]
        })
      };
      var m = t(2024),
        u = t(63672),
        f = t(21450),
        g = t(8999),
        p = t(62550);
      const b = {
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
        w = e => {
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
        h = e => {
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
          const [o, d] = (0, r.useState)(null), [l, m] = (0, r.useState)(3), u = (0, r.useRef)(null);
          return (0, r.useEffect)((() => {
            const e = window.getComputedStyle(u.current).getPropertyValue("--divisible-desktop"),
              t = () => {
                const a = window.innerWidth;
                m(a <= 767 ? 2 : e)
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
                    className: `${b.gridItem} ${b.extraDiv}`
                  }, "limited-grid-" + a++)), e++
                } while (e % l != 0)
              }
              d(t)
            }
            return window.addEventListener("resize", t), t(), () => window.removeEventListener("resize", t)
          }), [l, u]), (0, n.jsxs)("div", {
            className: `${b.limitedGrid} ${i?b.carouselOnMobile:""}`,
            children: [(0, n.jsxs)("div", {
              ref: u,
              style: {
                "--divisible-desktop": c.desktop,
                "--divisible-mobile": c.mobile
              },
              className: `\n                    ${b.limitedGridContent}\n                    ${2===c.desktop?b.columnsDesktop2:""}\n                    ${3===c.desktop?b.columnsDesktop3:""}\n                    ${c.desktop>=4?b.columnsDesktop4:""}\n                    ${t?b.noTextFit:""}\n                    ${s?b[s]:""}\n                `,
              children: [(0, n.jsx)("div", {
                className: b.thirdLine
              }), a.content.map(((e, a) => (0, n.jsx)("div", {
                className: b.gridItem,
                children: (0, n.jsxs)(w, {
                  to: e?.href ?? e?.to,
                  children: [!t && (0, n.jsx)(p.A, {
                    className: b.gridText,
                    min: 16,
                    max: 1e3,
                    mode: "single",
                    children: e.title
                  }), (0, n.jsx)("div", {
                    className: b.imageArea,
                    children: (0, n.jsx)(g.A, {
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
              className: b.gridCarousel,
              children: (0, n.jsx)(f.A, {
                children: a.content.map(((e, a) => (0, n.jsxs)("div", {
                  children: [(0, n.jsx)("div", {
                    className: `${b.imageArea} ${b.imageAreaBg}`,
                    children: (0, n.jsx)(g.A, {
                      className: s ? b[s] : "",
                      image: e.image,
                      ariaLabel: e.ariaLabel,
                      badgeType: "badge2",
                      badge: e.badge
                    })
                  }), e.title && (0, n.jsx)("p", {
                    className: b.carouselDesc,
                    children: (0, n.jsx)(w, {
                      to: e?.href ?? e?.to,
                      children: e.title
                    })
                  })]
                }, a)))
              })
            })]
          })
        },
        k = e => {
          let {
            items: a = []
          } = e;
          if (!a.length) return null;
          let t = 0,
            s = 0;
          return a.map(((e, a) => {
            if (e.limitedList?.content || e.limitedGridList?.content) {
              const t = [];
              return e.limitedList?.content && t.push((0, n.jsx)(j, {
                items: e.limitedList.content,
                noInfiniteScroll: e?.noInfiniteScroll,
                perPage: e?.perPage
              }, e?.key ?? a)), e.limitedGridList?.content && t.push((0, n.jsx)(h, {
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
              return e.discountsList?.content && s.push((0, n.jsx)(j, {
                items: e.discountsList.content,
                noInfiniteScroll: e?.noInfiniteScroll,
                perPage: e?.perPage
              }, e?.key ?? a)), e.discountsGridList?.content && s.push((0, n.jsx)(h, {
                noTextFit: !0,
                carouselOnMobile: !0,
                type: e.type ?? e.discountsGridList.type,
                columns: e.discountsGridList.columns,
                items: e.discountsGridList
              }, e?.key ?? a)), e?.list && s.push((0, n.jsx)(u.A, {
                ...e
              })), t++, (0, n.jsxs)("div", {
                children: [1 === t && (0, n.jsx)("div", {
                  className: "rockstargames-modules-core-newswire-articlea6b9b7f63ef349c57f3045b559b9a238"
                }), s]
              }, a)
            }
            return null
          }))
        };
      var v = t(26371);
      const x = {
          discountsCarouselItem: "rockstargames-modules-core-newswire-articleb1db5637574663ac89f33762c188d7eb",
          fontUpdate: "rockstargames-modules-core-newswire-articlea32986414e2f20d413cb21db77e5ddf2",
          discountsCarousel: "rockstargames-modules-core-newswire-articlee049405f569eb7a31b675e4066e535f7",
          singleImage: "rockstargames-modules-core-newswire-articlea34b328fa3d84d357c02b025e41c0352"
        },
        y = e => {
          let {
            wrapper: a,
            children: t,
            length: s
          } = e;
          return s > 1 ? a(t) : t
        },
        j = e => {
          let {
            items: a,
            noInfiniteScroll: t = !1,
            size: s = null,
            perPage: i = null,
            customSlidesPerView: c = null,
            style: o = {}
          } = e;
          const d = (0, r.useRef)(null),
            [l, m] = (0, r.useState)(null),
            [u, p] = (0, r.useState)(s);
          return (0, r.useEffect)((() => {
            !s && i && p(1 === i ? "lg" : "sm"), s || i || (p("lg"), console.error('Error: DiscountsCarousel expects a prop "size" in order to display the correct amount of slides. Defaulting to lg.'))
          }), [s, i]), (0, r.useEffect)((() => {
            if (!d.current) return;
            const e = () => {
              const e = c || window.getComputedStyle(d.current).getPropertyValue("--slides-per-view");
              m(e)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [d, c]), a.length ? (0, n.jsx)(y, {
            length: a.length,
            wrapper: e => (0, n.jsx)("div", {
              "data-size": u,
              ref: d,
              children: (0, n.jsx)(f.A, {
                className: x.discountsCarousel,
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
              className: [x.discountsCarouselItem, 1 === a.length ? x.singleImage : ""].join(" "),
              children: [(0, n.jsx)(g.A, {
                ariaLabel: e?.ariaLabel,
                image: e?.image ?? {
                  alt: e?.alt ?? "",
                  desktop: e?.img ?? null,
                  mobile: e?.imgMobile ?? null
                },
                badge: e?.badge ?? e?.image?.badge ?? e.discountTxt,
                splitter: e?.splitter ?? e?.image?.splitter,
                badgeType: "badgeSizeUpdate"
              }), (0, n.jsx)(v.A, {
                className: x.fontUpdate,
                item: e
              })]
            }, e?.key ?? t)))
          }) : (console.error('Error: DiscountsCarousel expects a prop "items" that contains an array of objects.'), null)
        };
      var N = t(28606),
        S = t(87839);
      const T = e => {
          let {
            items: a = [],
            style: t = {}
          } = e;
          return a.length ? (0, n.jsx)(N.A, {
            style: {
              "--background-color": "#000",
              "--grid-gap-dynamic": "var(--grid-gap-static-lg)",
              "--padding-dynamic-tb": "var(--grid-gap-static-lg)",
              "--image-rounding-dynamic": "0",
              ...t
            },
            children: a.map(((e, a) => e?.title_and_description ? (0, n.jsxs)(N.A, {
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
            }, e?.key ?? a) : e?.limitedList?.content ? (0, n.jsx)(j, {
              items: e.limitedList.content,
              noInfiniteScroll: e?.noInfiniteScroll,
              perPage: e?.perPage,
              size: e?.size
            }, e?.key ?? a) : e?.discountsGridList?.content ? (0, n.jsx)(l, {
              noCarousel: !0,
              columns: e.discountsGridList?.columns,
              items: e.discountsGridList.content
            }, e?.key ?? a) : e?.content ? (0, n.jsx)(S.A, {
              ...e,
              children: e.content
            }, e?.key ?? a) : e?.list ? (0, n.jsx)(u.A, {
              ...e
            }, e?.key ?? a) : void 0))
          }) : null
        },
        P = {
          area: "rockstargames-modules-core-newswire-articlebd369197d34037ca950bc456ae0edbfa",
          btmImg: "rockstargames-modules-core-newswire-articlea96546818d0319df5a2790c88dc1f5ea",
          limitedTopImg: "rockstargames-modules-core-newswire-articlec42389be5e7c869431a648165a5cae18",
          topImg: "rockstargames-modules-core-newswire-articleaffb8cefb29b116795380aa5314d5127"
        },
        C = e => {
          let {
            items: a,
            renderTemplate: t,
            ...s
          } = e;
          switch (t) {
            case "gtav":
            case "gtao":
              return (0, n.jsx)(T, {
                items: a,
                ...s
              });
            case "grid":
              return (0, n.jsx)(l, {
                items: a,
                ...s
              });
            default:
              return (0, n.jsx)(k, {
                items: a
              })
          }
        },
        _ = e => {
          let {
            items: a,
            renderTemplate: t,
            style: s,
            ...i
          } = e;
          return (0, n.jsx)("div", {
            className: P.area,
            "data-context": "discounts",
            children: (0, n.jsxs)("div", {
              className: P.discountsContent,
              children: [(0, n.jsx)(C, {
                renderTemplate: t,
                items: a,
                props: i,
                style: s
              }), (0, n.jsx)("div", {
                className: P.btmImg
              })]
            })
          })
        };
      var I = t(61631),
        L = t.n(I);
      const E = {
          donate: "rockstargames-modules-core-newswire-articleff9f3568a504aa9435bb271c905604c6",
          largePaddingSides: "rockstargames-modules-core-newswire-articleeda019a9aff0ac7012c1f9d07452fb57"
        },
        A = e => {
          let {
            text: a
          } = e;
          const {
            sanitize: t
          } = L();
          return (0, n.jsx)("div", {
            className: [E.donate, "normalPaddingTopBottom largePaddingSides"].join(" "),
            children: (0, n.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: t(a)
              }
            })
          })
        };
      var M = t(54252),
        D = t.n(M),
        z = t(74401),
        O = t(64064),
        V = t.n(O),
        $ = t(31879),
        F = t.n($),
        H = t(85184);
      const B = {
          pillBtn: "rockstargames-modules-core-newswire-articlef9b4575485160d1ee87bf2d85c618500",
          selected: "rockstargames-modules-core-newswire-articlefc0de6978953b2e05ca6256e5df9ddeb",
          event: "rockstargames-modules-core-newswire-articledeb35a20cd305c1c3f58adf38c18a13b",
          featured: "rockstargames-modules-core-newswire-articlec9494ef21ed459fabdebc24519c1880c",
          eventInfo: "rockstargames-modules-core-newswire-articlef0f5b255059bdf027309b512d3f6b154",
          large: "rockstargames-modules-core-newswire-articlec21ddd1ba6d193681ca88e9d03509ad4",
          videoWrapper: "rockstargames-modules-core-newswire-articlefa2fc51439d229dae72eeb8818a0c0c5"
        },
        G = e => {
          let {
            images: a
          } = e;
          return a?.length ? 1 === a.length ? (0, n.jsx)(g.A, {
            ...a[0]
          }) : (0, n.jsx)(f.A, {
            items: a
          }) : null
        },
        R = e => {
          let {
            images: a,
            title: t,
            content: s,
            isFeatured: i = !1,
            className: c = null,
            videoInHeroProps: o,
            hideNewswireTitle: l = !1
          } = e;
          const m = (0, z.useTinaPayload)(),
            u = m?.meta?.prod ?? !1,
            f = (0, z.useTinaComponents)();
          D().set(m, "meta.prod", u);
          let p = o?.gifVideoProps?.hasVideoInHero || !1;
          const b = o?.htmlVideoProps?.id || !1,
            w = !!o?.htmlVideoProps?.hasHtmlVideoInHero && b;
          w && p && (p = !1);
          const h = void 0 === o || !p && !w,
            k = (0, r.useMemo)((() => ({
              ...f,
              HTMLElement: S.A,
              ImageWithBadge: g.A,
              GroupOfItems: d()
            })), [f]);
          return (0, n.jsxs)("div", {
            className: (0, z.classList)(B.event, c),
            children: [p && (0, n.jsx)("div", {
              className: B.videoWrapper,
              children: (0, n.jsx)(V(), {
                hash: {
                  desktop: o?.gifVideoProps?.hash?.desktop,
                  mobile: o?.gifVideoProps?.hash?.mobile
                },
                loop: o?.gifVideoProps?.isLooping
              })
            }), w && b && (0, n.jsx)("div", {
              className: B.videoWrapper,
              children: (0, n.jsx)(F(), {
                autoplay: o?.htmlVideoProps?.autoPlay || !1,
                id: b
              })
            }), h && (0, n.jsx)(G, {
              images: a
            }), i && (0, n.jsx)(H.default, {}), (0, n.jsxs)("div", {
              className: B.eventInfo,
              children: [!i && !l && (0, n.jsx)("h3", {
                className: B.eventTitle,
                children: t
              }), (0, n.jsx)(z.TinaParser, {
                components: k,
                tina: {
                  payload: {
                    content: s,
                    meta: {
                      prod: u
                    }
                  }
                }
              })]
            })]
          })
        },
        W = e => (0, n.jsx)(R, {
          ...e,
          className: B.featured,
          isFeatured: !0
        }),
        q = {
          clip: "rockstargames-modules-core-newswire-articlee0224b729307b43a17327188777c3c60",
          redTexture: "rockstargames-modules-core-newswire-articlebbcb053265bd42678ed1086e133ee340",
          greyTexture: "rockstargames-modules-core-newswire-articlea58880949ade673f268f021629ed7bb0"
        },
        U = e => {
          let {
            fontFamily: a = "inherit",
            fontBg: t,
            string: s
          } = e;
          return (0, n.jsx)("span", {
            style: {
              "--font-family-clip": a
            },
            className: [q.clip, q[t]].join(" "),
            children: s
          })
        };
      var Q = t(95625),
        K = t(61841),
        X = t(70396);
      const Y = {
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
        J = e => {
          let {
            headline: a,
            plainImage: s,
            top: i,
            unorderedList: r,
            bottom: c,
            rewards: o = "primeGaming",
            style: d = {}
          } = e;
          const l = (0, X.useLocale)();
          return "primeGaming" === o && ["ru", "kr", "ko_kr", "ru_ru"].includes(l) ? null : (0, n.jsx)("div", {
            className: Y.gamingWrapper,
            children: (0, n.jsx)("div", {
              className: `${Y.gamingRewards} ${Y[o]}`,
              style: d,
              children: (0, n.jsxs)(Q.A, {
                style: {
                  "--grid-align-items": "center",
                  "--grid-row-gap": "2rem"
                },
                children: [(0, n.jsxs)(K.A, {
                  children: [a && (0, n.jsx)("h3", {
                    children: a
                  }), "psPlus" === o && (0, n.jsx)("img", {
                    "aria-label": "Playstation Plus Benefit",
                    className: Y.primeGamingSocialLogo,
                    src: t(51360)
                  }), "primeGaming" === o && (0, n.jsx)("img", {
                    "aria-label": "Social Club | Prime Gaming",
                    className: Y.primeGamingSocialLogo,
                    src: t(32863)
                  }), "gtaPlus" === o && (0, n.jsx)("img", {
                    "aria-label": "GTA Plus",
                    className: Y.primeGamingSocialLogo,
                    src: t(71354)
                  }), i?.text && (0, n.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: i.text
                    }
                  }), r?.list && (0, n.jsx)("div", {
                    className: Y.listArea,
                    children: (0, n.jsx)(u.A, {
                      className: "gtaPlus" === o ? Y.plus : "",
                      ...r,
                      list: r.list,
                      ...r?.attributes
                    })
                  }), c?.text && (0, n.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: c.text
                    }
                  })]
                }), (0, n.jsx)(K.A, {
                  className: Y.rightSide,
                  children: s?.image ? (0, n.jsx)(m.A, {
                    image: s.image
                  }) : (0, n.jsx)("div", {
                    className: Y.psPlusDefaultImg
                  })
                })]
              })
            })
          })
        };
      var Z = t(28157),
        ee = t(88038),
        ae = t(58407),
        te = t(1956);
      const se = e => {
        let {
          backgroundImages: a,
          deckHash: t = "",
          perPage: s = null
        } = e;
        const [i, c] = (0, r.useState)(null), o = (0, z.useGetCdnSource)(a?.backgroundImg?.full_src ?? null), d = (0, z.useGetCdnSource)(a?.layeredImg?.full_src ?? null), l = (0, r.useRef)(null), {
          data: m,
          error: u
        } = (0, ae.useQuery)(te.TinaModulesInfo, {
          variables: {
            ids: t
          },
          skip: !t
        });
        return (0, r.useEffect)((() => {
          if (m?.tinaModulesInfo) {
            const e = m.tinaModulesInfo[0],
              {
                id: a,
                tina: t
              } = e,
              s = D().clone(t);
            D().set(s, "payload.meta.id", a), c(s)
          }
        }), [m]), m && i ? u ? (0, n.jsx)(ee.A, {
          error: u
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
              children: (0, n.jsx)(z.TinaParser, {
                components: {
                  Deck: Z.E$
                },
                tina: i
              })
            })]
          })
        }) : null
      };
      var ie = t(26043),
        re = t(37920),
        ne = t.n(re);
      const ce = e => {
          let {
            children: a,
            className: t = "",
            style: s,
            game: i
          } = e;
          return (0, r.useEffect)((() => {
            document.fonts.ready.then((() => {
              ne().balanceText()
            }))
          }), [a]), (0, n.jsx)("div", {
            className: ["newswireFull", i, t].join(" "),
            style: s,
            "data-game": i,
            children: a
          })
        },
        oe = e => {
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
        };
      var de = t(37297),
        le = t(17375);
      const me = e => {
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
          children: [c ?? (0, n.jsx)(le.A, {
            style: {
              backgroundColor: `${r}`,
              "--padding-top-bottom": "1.75rem"
            },
            className: "normalPaddingTopBottom largePaddingSides",
            children: (0, n.jsxs)(le.A, {
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
          }), (0, n.jsxs)(le.A, {
            className: [c ?? "spacing"].join(" "),
            children: [(0, n.jsx)(de.A, {
              className: "hiddenMobile",
              src: s
            }), (0, n.jsx)(de.A, {
              className: "hiddenLarge",
              src: i
            })]
          }), c ? (0, n.jsx)(le.A, {
            style: {
              backgroundColor: `${r}`,
              "--padding-top-bottom": "1.75rem"
            },
            className: "normalPaddingTopBottom largePaddingSides spacing",
            children: (0, n.jsxs)(le.A, {
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
    72752: e => {
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
    1956: e => {
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
    71354: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7563ed0414306d18d4f8401effcab31a.svg"
    },
    51360: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fd3b8222b81c51f8a6ae266c805c98a6.png"
    },
    32863: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f002a20c79ea2264ca52456194ef5b48.svg"
    }
  }
]);