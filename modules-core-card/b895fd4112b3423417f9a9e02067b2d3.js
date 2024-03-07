/*! For license information please see b895fd4112b3423417f9a9e02067b2d3.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "03f15191-511d-41d2-a2d5-5ee08f0bc0e3", e._sentryDebugIdIdentifier = "sentry-dbid-03f15191-511d-41d2-a2d5-5ee08f0bc0e3")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "37b3ba5563fc850bb4023bb85696f8442ccaf1f5",
  packageName: "@rockstargames/modules-core-card",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "37b3ba5563fc850bb4023bb85696f8442ccaf1f5"
}, (self.webpackChunk_rockstargames_modules_core_card = self.webpackChunk_rockstargames_modules_core_card || []).push([
  [112], {
    1996: (e, a, t) => {
      var s = t(8200),
        r = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        c = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        i = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function d(e, a, t) {
        var s, o = {},
          d = null,
          l = null;
        for (s in void 0 !== t && (d = "" + t), void 0 !== a.key && (d = "" + a.key), void 0 !== a.ref && (l = a.ref), a) n.call(a, s) && !i.hasOwnProperty(s) && (o[s] = a[s]);
        if (e && e.defaultProps)
          for (s in a = e.defaultProps) void 0 === o[s] && (o[s] = a[s]);
        return {
          $$typeof: r,
          type: e,
          key: d,
          ref: l,
          props: o,
          _owner: c.current
        }
      }
      a.Fragment = o, a.jsx = d, a.jsxs = d
    },
    3480: (e, a, t) => {
      e.exports = t(1996)
    },
    1680: (e, a, t) => {
      t.d(a, {
        c: () => o
      });
      var s = t(1668);
      var r = t(3480);
      const o = e => {
        let {
          hasTag: a = !1,
          tag: t = null,
          tagStyle: o = null,
          badges: n = []
        } = e;
        return a && t ? (0, r.jsx)("div", {
          className: "rockstargames-modules-core-cardc1f82963328005cb78eb8c3962efdf55",
          "data-tag-style": o,
          children: t
        }) : a && n && n?.length > 0 ? (0, r.jsx)("div", {
          className: "rockstargames-modules-core-carde59761aece19863df990bdee04335ad7",
          children: n.map((e => (0, r.jsx)(s.Badge, {
            ...e
          }, e?.text)))
        }) : null
      }
    },
    6944: (e, a, t) => {
      t.d(a, {
        c: () => b
      });
      var s = t(8200),
        r = t(3660),
        o = t.n(r),
        n = t(3557),
        c = t(1740),
        i = t(1668),
        d = t(5792),
        l = t(1680),
        m = t(6796),
        p = t(3656);
      var f = t(3480);
      const {
        LiteMotion: g,
        Animations: u
      } = i.framer, {
        transitions: h
      } = u, b = e => {
        let {
          components: a,
          payload: t,
          prod: r,
          size: u,
          title: b,
          initial: v = "initial",
          animate: x = "animate",
          variants: k,
          type: y = null,
          context: w = null,
          textOverlayProps: _,
          className: C,
          children: P,
          theme: T = "none",
          cardIds: j,
          id: O,
          pricingOptions: z,
          pricingContainerHeight: N,
          isCoverCard: E,
          platformOptions: I,
          isProductCard: L = !1
        } = e;
        const S = (0, s.useRef)(),
          H = (0, s.useRef)(),
          {
            tag: M,
            expandedHasTag: B,
            badges: R
          } = _;
        o().set(t, "meta.prod", r);
        const [, V] = (0, n.useSearchParams)(), [D, W] = (0, s.useState)(null), q = P?.props?.images.length > 0;
        let A = (0, f.jsx)("h1", {
          children: b
        });
        return E && (A = null), (0, s.useEffect)((() => {
          null !== D && D < j?.length && D > -1 && V({
            info: j[D]
          })
        }), [D, j]), (0, s.useEffect)((() => {
          j?.forEach(((e, a) => {
            e === O && W(a)
          }))
        }), [j, O]), (0, s.useEffect)((() => {
          const e = () => {
            S.current && S.current.scrollTop > 0 && window.innerWidth >= window.innerHeight && (S.current.scrollTop = 0)
          };
          return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
        }), []), (0, f.jsx)(d.DataLayerProvider, {
          card_id: O,
          card_name: b?.toLowerCase(),
          children: (0, f.jsx)(i.ScrollTracker, {
            threshold: [25, 50, 75, 90, 100],
            trackRef: "long" === y ? S : H,
            children: (0, f.jsxs)(g, {
              ref: S,
              initial: v,
              animate: x,
              variants: k.expanded,
              transition: h.cardOpen,
              className: (0, c.classList)("rockstargames-modules-core-cardab2ff002fe79682e12519c4608068662", C),
              "data-type": y,
              "data-size": u,
              "data-product": L,
              "data-covercard": E || !1,
              "data-context": w,
              style: {
                "--product-card-pricing-info-height": `${N||0}px`
              },
              children: [q && (0, f.jsx)(m.c, {
                size: u,
                title: b,
                textOverlayProps: _,
                expandedView: !0,
                pricingOptions: z,
                platformOptions: I,
                isCoverCard: E,
                children: P
              }), (0, f.jsxs)(g, {
                ref: H,
                className: "rockstargames-modules-core-cardb89031a2a4f7d385a3a1d17e583f4dc4",
                variants: k.expandedContents,
                transition: h.afterCardOpen,
                "data-theme": T,
                children: [(0, f.jsxs)("div", {
                  className: "rockstargames-modules-core-cardfbc985f4e3df2ee4a37d472282b9cd95",
                  children: [(0, f.jsx)(l.c, {
                    hasTag: B,
                    tag: M,
                    badges: R
                  }), A, L && (0, f.jsxs)(f.Fragment, {
                    children: [!0 === I?.hasPlatformOptions && (0, f.jsx)("div", {
                      className: "rockstargames-modules-core-cardc3a31a2bbef2ccc93f46ce3486249f7a",
                      children: (0, f.jsx)(l.c, {
                        hasTag: I?.hasPlatformOptions,
                        tag: I?._memoq?.platformTag,
                        tagStyle: I?._memoq?.platformTagStyle
                      })
                    }), !0 === z?.hasPricingOptions && (0, f.jsx)(p.c, {
                      title: b,
                      showTitle: !1,
                      showBackground: !1,
                      tag: z?._memoq?.tag,
                      tagStyle: z?.tagStyle || "free",
                      discountPrice: z?._memoq?.discountPrice,
                      originalPrice: z?._memoq?.originalPrice
                    })]
                  })]
                }), (0, f.jsx)(c.TinaParser, {
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
    6796: (e, a, t) => {
      t.d(a, {
        c: () => l
      });
      var s = t(8200),
        r = t(636),
        o = t(3480);
      var n = t(3656),
        c = t(1680);
      const i = {
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
          }), [l]), (0, o.jsxs)("div", {
            className: "rockstargames-modules-core-cardf2c0c0fc07a199332ad94b05c35fc687",
            ref: l,
            "data-show-background": r,
            children: [t && (0, o.jsx)("span", {
              className: "rockstargames-modules-core-cardb15d1b8e722d56bc332e3d15d4430d97",
              children: a
            }), n?.platformsAndLinks && (0, o.jsxs)("div", {
              className: "rockstargames-modules-core-cardb2183b5b71087a21600433b0ca570130",
              children: [(0, o.jsx)(c.c, {
                hasTag: n?._memoq?.platformTag,
                tag: n?._memoq?.platformTag,
                tagStyle: n?._memoq?.platformTagStyle
              }), (0, o.jsx)("div", {
                className: "rockstargames-modules-core-carde60d377553d7ca522c0c537527004538",
                children: n.platformsAndLinks.map((e => {
                  let {
                    platform: a,
                    buttonText: t
                  } = e;
                  return (0, o.jsx)("img", {
                    className: "rockstargames-modules-core-carde861dc69c79bf2274c7a6faff03d2d43",
                    alt: t,
                    src: i[a]
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
            size: c,
            expandedView: i = !1,
            children: l,
            pricingOptions: m,
            setPricingContainerHeight: p,
            isCoverCard: f = !1,
            platformOptions: g
          } = e;
          const [u] = (e => {
            let {
              hasTextOverlay: a,
              tag: t,
              collapsedHasTag: n,
              description: c,
              collapsedHasDescription: i,
              size: d,
              title: l,
              expandedView: m,
              badges: p
            } = e;
            const [f, g] = (0, s.useState)(null), u = (0, s.useMemo)((() => {
              if (!a) return null;
              const e = "sm" !== d && i;
              return (0, o.jsx)(r.c, {
                title: l,
                hasTag: n,
                tag: t,
                hasDescription: e,
                description: c,
                fadesOut: m,
                badges: p
              })
            }), [a, t, n, c, i, d, l, m, p]);
            return (0, s.useEffect)((() => {
              g(u)
            }), [u]), [f, g]
          })({
            ...a,
            size: c,
            title: t,
            expandedView: i
          }), h = void 0 !== m?.hasPricingOptions || null !== g;
          return (0, o.jsxs)("header", {
            className: "rockstargames-modules-core-cardc2026bdbe4e16647d55af023c2bc6e02",
            "data-is-covercard": f,
            "data-expanded-view": i,
            children: [s.Children.map(l, (e => (0, s.cloneElement)(e, {
              title: t,
              size: c,
              expandedView: i
            }))), u, h && (0, o.jsxs)(o.Fragment, {
              children: [!0 === g?.hasPlatformOptions && (0, o.jsx)(d, {
                title: t,
                platformOptions: g,
                pricingOptions: m,
                setPricingContainerHeight: p
              }), !0 === m?.hasPricingOptions && (0, o.jsx)(n.c, {
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
    5992: (e, a, t) => {
      t.d(a, {
        c: () => u
      });
      var s = t(8200),
        r = t(1668),
        o = t(9812),
        n = t.n(o),
        c = t(1740),
        i = t(6944),
        d = t(3557),
        l = t(9016),
        m = t(2836),
        p = t(3480);
      const f = e => {
          let {
            id: a,
            position: t,
            title: r,
            size: o = "md",
            sectionTitle: n = "",
            expandedType: c = null,
            modalProps: i = {
              content: null,
              className: "",
              contentClassName: ""
            },
            className: f,
            children: g,
            isProductCard: u,
            cardIds: h = null,
            theme: b = "none",
            isCoverCard: v
          } = e;
          const [x, k] = (0, d.useSearchParams)(), y = (0, s.useRef)(null), [, w] = (0, l.useModal)(), {
            track: _
          } = (0, m.useGtmTrack)(), [C, P] = (0, s.useState)(!1), T = () => {
            P(!1), w(null), k({}), _({
              event: "trackPageview"
            })
          }, j = () => {
            if (!i?.content || !y.current || !c || "linkout" === c) return;
            const e = y.current,
              s = window.getComputedStyle(e),
              n = parseInt(s.getPropertyValue("width"), 10),
              d = parseInt(s.getPropertyValue("height"), 10),
              l = e.getBoundingClientRect(),
              {
                content: m,
                className: p,
                contentClassName: f
              } = i,
              g = "fob" === o ? "fob" : "default";
            w({
              content: m,
              onClose: T,
              rect: l,
              width: n,
              height: d,
              className: p,
              contentClassName: f,
              fadeIn: !1,
              cardIds: h,
              theme: b,
              gtm: {
                event_label: r?.toLowerCase(),
                card_id: a,
                card_name: r?.toLowerCase(),
                position: t
              },
              aspectRatio: g,
              cardDimensions: {
                size: o,
                type: c
              }
            }), _({
              event: "trackPageview",
              link_url: window.location.href,
              card_id: a,
              card_name: r?.toLowerCase(),
              position: t
            })
          }, O = e => {
            v && "button" !== e.target.type || "linkout" !== c && (e.preventDefault(), e.stopPropagation(), a ? k({
              info: a
            }) : j(), _({
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
            C && j()
          }), [C]), (0, s.useEffect)((() => {
            P(x.get("info") === a)
          }), [x.get("info"), a]), (0, p.jsx)("div", {
            ref: y,
            onClick: O,
            onKeyUp: e => {
              (e => {
                "Enter" === e.code && O(e)
              })(e)
            },
            className: f,
            "data-size": o,
            "data-type": c,
            "data-product": u,
            role: "button",
            tabIndex: "linkout" !== c ? 0 : -1,
            "aria-label": r,
            children: g
          })
        },
        g = {
          pillBtn: "rockstargames-modules-core-cardaa44119fde485ceaeef3593555b12f5a",
          selected: "rockstargames-modules-core-cardd5c4d1c519f8bf11965800fd72b2e1dd",
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
            images: o,
            size: d,
            title: l,
            initial: m,
            animate: u,
            variants: h,
            id: b,
            position: v,
            sectionTitle: x,
            expandedType: k,
            context: y,
            children: w,
            expandedCardContents: _,
            textOverlayProps: C = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            deckProps: P = {},
            modalProps: T = [],
            theme: j,
            cardIds: O,
            pricingOptions: z,
            platformOptions: N = null,
            pricingContainerHeight: E,
            isCoverCard: I = !1,
            isProductCard: L = !1
          } = e;
          const S = (0, c.useTinaComponents)(),
            H = (0, s.useMemo)((() => ({
              ...S,
              HTMLElement: r.HTMLElement,
              ImageWithBadge: r.ImageWithBadge,
              Carousel: r.Carousel,
              GroupOfItems: n()
            })), [S]),
            M = (0, s.useMemo)((() => (0, p.jsx)(i.c, {
              type: k,
              components: H,
              payload: a,
              prod: t,
              images: o,
              size: d,
              title: l,
              context: y,
              textOverlayProps: C,
              initial: m,
              animate: u,
              variants: h,
              theme: j,
              cardIds: O,
              pricingOptions: z,
              id: b,
              pricingContainerHeight: E,
              isCoverCard: I,
              platformOptions: N,
              isProductCard: L,
              children: _
            })), [k, o, t, d, l, C, _, m, u, h, H, a, L]),
            B = [g.card, I ? g.coverCardWrapper : ""].join(" ");
          return (0, p.jsx)(f, {
            id: b,
            position: v,
            sectionTitle: x,
            title: l,
            size: d,
            expandedType: k,
            images: o,
            deckProps: P,
            modalProps: {
              content: M,
              ...T
            },
            className: B,
            isProductCard: L,
            cardIds: O,
            theme: j,
            isCoverCard: I,
            children: w
          })
        }
    },
    4928: (e, a, t) => {
      t.d(a, {
        c: () => u
      });
      var s = t(8200),
        r = t(1740),
        o = t(5652),
        n = t(1668);
      const c = {
        layeredImageFrame: "rockstargames-modules-core-cardfab7a9d470f74ec728a8a88419dde764",
        layered: "rockstargames-modules-core-carda037270563f60546ff0d3c59cbff5c0b",
        foreground: "rockstargames-modules-core-cardae1d9a27d7ee3ef28eb020b6e4f60c84",
        imageMask: "rockstargames-modules-core-cardba7be5ee83ef3c1ae7d6c1acf5ac8048",
        logo: "rockstargames-modules-core-cardb94e4ab441f3f5a47a7fa466fcd4cdaa",
        "sm-horizontal": "rockstargames-modules-core-carda7e8eb44f974c40fc6f9820d90a1a543"
      };
      var i = t(3480);
      const {
        LiteMotion: d,
        Animations: l
      } = n.framer, {
        getVariant: m,
        variants: p,
        transitions: f
      } = l, g = e => {
        let {
          image: a,
          i: t,
          prod: s
        } = e;
        const {
          alt: r,
          src: n
        } = (0, o.useImageParser)({
          ...a,
          prod: s
        });
        return (0, i.jsx)("img", {
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
          prod: o = !1,
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
        const b = (0, s.useMemo)((() => a?.length && 0 !== a.length ? a.map((e => (0, i.jsx)(d, {
          className: (0, r.classList)(c[e?.specialClass] ?? c.imageMask, c[e?.sizeClass], e.className),
          variants: m(e?.specialClass ?? "imageMask", n ? "expanded" : "collapsed"),
          initial: "initial",
          animate: "animate",
          transition: f.cardOpen,
          children: (0, i.jsx)(g, {
            image: e,
            prod: o
          })
        }, e.key))) : null), [a, u, n, o]);
        return (0, i.jsx)(d, {
          className: (0, r.classList)(c.layeredImageFrame, a.length > 1 ? c.layered : c.flat, t),
          style: l,
          initial: p.fade.in.initial,
          animate: p.fade.in.animate,
          transition: f.instantFade,
          "data-expanded-view": n,
          children: b
        })
      }
    },
    2700: (e, a, t) => {
      t.d(a, {
        c: () => n
      });
      var s = t(1668),
        r = t(2836),
        o = t(3480);
      const n = e => {
        let {
          expandedType: a,
          to: t,
          children: n,
          style: c,
          sectionTitle: i = "",
          id: d,
          cardTitle: l,
          position: m
        } = e;
        const {
          track: p
        } = (0, r.useGtmTrack)();
        return "linkout" === a && t ? (0, o.jsx)(s.A, {
          to: t,
          style: c,
          target: t?.startsWith("http") ? "_blank" : "_self",
          onClick: () => p({
            event: "card_click",
            event_action: "click",
            event_category: "card",
            event_label: i,
            link_url: t,
            card_id: d,
            card_name: l,
            element_placement: i,
            position: m
          }),
          children: n
        }) : n
      }
    },
    3656: (e, a, t) => {
      t.d(a, {
        c: () => o
      });
      var s = t(8200);
      var r = t(3480);
      const o = e => {
        let {
          title: a,
          showTitle: t = !0,
          showBackground: o = !0,
          tag: n,
          tagStyle: c,
          discountPrice: i,
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
          "data-show-background": o,
          children: [t && (0, r.jsx)("span", {
            className: "rockstargames-modules-core-cardf5a4d175d5f8b14624f89ca1f166a21a",
            children: a
          }), (0, r.jsxs)("div", {
            className: "rockstargames-modules-core-cardb016dbdcb8f1ee670f9119dd74deb64d",
            children: [(0, r.jsx)("span", {
              className: "rockstargames-modules-core-cardc8f913d063cfda7e8b69c68571f94cb2",
              "data-tag-style": c || "free",
              children: n
            }), (0, r.jsx)("span", {
              className: "rockstargames-modules-core-cardde11a91cfb689bef823338052bb0150b",
              children: i
            }), (0, r.jsx)("span", {
              className: "rockstargames-modules-core-carddb3b0cc8f6a72273792890761d5fc07b",
              children: d
            })]
          })]
        })
      }
    },
    636: (e, a, t) => {
      t.d(a, {
        c: () => m
      });
      var s = t(1668),
        r = t(1680);
      const o = {
        textOverlay: "rockstargames-modules-core-carde45cbf271beb53be0ac185f84ef7b8c1",
        content: "rockstargames-modules-core-cardc1ab416c07abfa2f9c2cf10ba04f026b"
      };
      var n = t(3480);
      const {
        LiteMotion: c,
        Animations: i
      } = s.framer, {
        variants: d,
        transitions: l
      } = i, m = e => {
        let {
          title: a,
          hasTag: t,
          tag: s,
          hasDescription: i,
          description: m,
          fadesOut: p = !1,
          badges: f
        } = e;
        return (0, n.jsx)(c, {
          initial: d.fade.out.initial,
          animate: {
            opacity: p ? 0 : 1
          },
          transition: l.fade,
          className: o.textOverlay,
          children: (0, n.jsxs)("div", {
            className: o.content,
            children: [(0, n.jsx)(r.c, {
              hasTag: t,
              tag: s,
              badges: f?.filter((e => e?.isPrimary))
            }), (0, n.jsx)("h3", {
              children: a
            }), i && m && (0, n.jsx)("div", {
              className: o.description,
              children: m
            })]
          })
        })
      }
    },
    2352: (e, a, t) => {
      t.d(a, {
        c: () => n
      });
      var s = t(8200),
        r = t(1668),
        o = t(3480);
      const n = e => {
        let {
          images: a,
          title: t,
          expandedView: n,
          variants: c,
          transition: i
        } = e;
        const d = (0, s.useMemo)((() => a && 0 !== a?.length ? a.map((e => e?.image?.sources ? (0, o.jsx)(r.ImageWithBadge, {
          ...e,
          style: {
            "--object-position": e?.objectPosition ?? ""
          }
        }) : null)) : null), [a]);
        return !d?.length || d?.length < 1 ? null : 1 === d.length ? d : (0, o.jsx)(r.ThumbsGallery, {
          slideChildren: d,
          title: t,
          navigation: n,
          thumbsVisible: n,
          spaceBetween: 0,
          variants: c,
          transition: i
        })
      }
    },
    360: (e, a, t) => {
      t.d(a, {
        c: () => f
      });
      var s = t(8200),
        r = t(1740),
        o = t(1668),
        n = t(5992),
        c = t(6796),
        i = t(4928),
        d = t(2700);
      const l = {
        pillBtn: "rockstargames-modules-core-carde9d21a3f1d53a4f78a9d3b580a3b0235",
        selected: "rockstargames-modules-core-cardc0fdf4471085cebfbbac32e1e9ca1eb8",
        customModalContent: "rockstargames-modules-core-carda15b2faad65a444365810a7dc17d2ce6",
        content: "rockstargames-modules-core-cardf04bd7012d1fef63b3a24a423a3fded0"
      };
      var m = t(3480);
      const {
        variants: p
      } = o.framer.Animations, f = e => {
        let {
          id: a,
          title: t,
          content: o,
          size: f = "md",
          expandedType: g = "short",
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
          to: v = null,
          tina: x = {},
          position: k = 0,
          sectionTitle: y = "",
          theme: w,
          pricingOptions: _,
          cardIds: C,
          platformOptions: P = null
        } = e;
        const T = (0, r.useTinaPayload)(),
          j = x?.payload?.meta?.cdn ?? T?.meta?.prod ?? !1,
          [O, z] = (0, s.useState)(b?.size ?? f),
          [N, E] = (0, s.useState)(0),
          I = void 0 !== _?.hasPricingOptions || void 0 !== P?.hasPlatformOptions;
        return (0, s.useEffect)((() => {
          z(b?.size ?? f)
        }), [b?.size, f]), (0, m.jsx)(n.c, {
          id: a,
          title: t,
          size: O,
          expandedType: g,
          images: h,
          deckProps: b,
          prod: j,
          payload: {
            content: o,
            meta: {}
          },
          variants: p.plainCard,
          textOverlayProps: u,
          modalProps: {
            className: l.customModal,
            contentClassName: l.customModalContent
          },
          expandedCardContents: (0, m.jsx)(i.c, {
            images: h,
            prod: j,
            expandedView: !0
          }),
          position: k,
          sectionTitle: y,
          theme: w,
          cardIds: C,
          pricingOptions: _,
          platformOptions: P,
          pricingContainerHeight: N,
          isProductCard: I,
          children: (0, m.jsx)(d.c, {
            expandedType: g,
            to: v,
            sectionTitle: y,
            id: a,
            cardTitle: t,
            position: k,
            children: (0, m.jsx)("div", {
              className: l.content,
              "data-product": I,
              children: (0, m.jsx)(c.c, {
                title: t,
                size: O,
                textOverlayProps: u,
                pricingOptions: _,
                platformOptions: P,
                setPricingContainerHeight: E,
                children: (0, m.jsx)(i.c, {
                  images: h,
                  prod: j
                })
              })
            })
          })
        })
      }
    },
    4212: (e, a, t) => {
      t.d(a, {
        c: () => f
      });
      var s = t(8200),
        r = t(1740),
        o = t(1668),
        n = t(5992),
        c = t(6796),
        i = t(2352);
      const d = {
        pillBtn: "rockstargames-modules-core-cardd5aee085f046fe1bd57b5982a6971c8c",
        selected: "rockstargames-modules-core-carda6a039d7655ce4e6748e45af2a6f607b",
        customModalContent: "rockstargames-modules-core-cardca0929fb8857130122442f32a847f70d"
      };
      var l = t(3480);
      const {
        transitions: m,
        variants: p
      } = o.framer.Animations, f = e => {
        let {
          id: a,
          title: t,
          content: o,
          size: f = "md",
          expandedType: g = "gallery",
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
          tina: v = {},
          payload: x,
          position: k = 0,
          sectionTitle: y = "",
          cardIds: w
        } = e;
        const _ = (0, r.useTinaPayload)(),
          C = x ?? _,
          P = v?.payload?.meta?.cdn ?? C?.meta?.prod ?? !1,
          T = ((e, a) => e?.map((e => e?.image ? {
            ...e,
            image: {
              ...e.image,
              prod: a
            }
          } : e)))(h, P),
          [j, O] = (0, s.useState)(b?.size ?? f),
          {
            parent: z,
            main: N,
            thumbs: E
          } = p?.cardWithImageGallery?.gallery ?? {};
        return (0, s.useEffect)((() => {
          O(b?.size ?? f)
        }), [b?.size, f]), (0, l.jsx)(n.c, {
          id: a,
          position: k,
          sectionTitle: y,
          payload: {
            content: o,
            meta: {},
            payload: C
          },
          title: t,
          size: j,
          expandedType: g,
          images: T,
          deckProps: b,
          prod: P,
          variants: p.cardWithImageGallery,
          textOverlayProps: u,
          modalProps: {
            className: d.customModal,
            contentClassName: d.customModalContent
          },
          expandedCardContents: (0, l.jsx)(i.c, {
            images: T,
            title: t,
            navigation: !0,
            thumbsVisible: !0,
            variants: {
              parent: z,
              main: N,
              thumbs: E
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
            children: (0, l.jsx)(c.c, {
              title: t,
              size: j,
              textOverlayProps: u,
              children: (0, l.jsx)(i.c, {
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
    7872: (e, a, t) => {
      t.d(a, {
        c: () => n
      });
      var s = t(1668),
        r = t(1740);
      var o = t(3480);
      const n = e => {
        let {
          title: a,
          content: t,
          size: n = "md",
          badgeText: c
        } = e;
        const i = {
          ...(0, r.useTinaComponents)(),
          HTMLElement: s.HTMLElement,
          UnorderedList: s.UnorderedList,
          ListItem: s.ListItem
        };
        return (0, o.jsx)("div", {
          className: "rockstargames-modules-core-cardf9087dedff2c6a2fd349c588cf2dd568",
          "data-size": n,
          children: (0, o.jsxs)("div", {
            className: "rockstargames-modules-core-cardf913b43706e2e187899e5109e5b44ae9",
            children: [c && (0, o.jsx)("div", {
              className: "rockstargames-modules-core-carde6201ee2e74e6a5bb5a14b9fd3a80a18",
              children: c
            }), (0, o.jsxs)("div", {
              className: "rockstargames-modules-core-cardce1f20ccc7d95c91d3e2603a5b0cd597",
              children: [a && (0, o.jsx)("h3", {
                children: a
              }), (0, o.jsx)(r.TinaParser, {
                components: i,
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
    4152: (e, a, t) => {
      t.d(a, {
        c: () => v
      });
      var s = t(8200),
        r = t(3557),
        o = t(3660),
        n = t.n(o),
        c = t(1668),
        i = t(1740),
        d = t(360),
        l = t(4212),
        m = t(7872);
      var p = t(3480);
      const {
        Gen9CoreCarousel: f,
        framer: g,
        useTinaModuleFetchByIds: u,
        withSimpleErrorBoundary: h
      } = c, b = {
        Card: d.c,
        CardWithImageGallery: l.c,
        TextCard: m.c,
        ...c
      }, v = g.withFadeIn(h((e => {
        let {
          cards: a = [],
          size: t,
          title: o,
          description: c,
          customSlidesPerView: d = null,
          theme: l = "none",
          cardSizeBreakpoints: m = {},
          customAspectRatio: g = "3/1",
          titleBadge: h = null
        } = e;
        const v = (0, s.useRef)(null),
          x = n().map(a, "id"),
          k = u({
            ids: x
          }),
          [y, w] = (0, s.useState)(d),
          [_] = (0, r.useSearchParams)(),
          [C, P] = (0, s.useState)(!1);
        (0, s.useEffect)((() => {
          if ("fob" === t) {
            const e = _.get("section");
            if (e && "games" === e && !C && (P(!0), v.current)) {
              const e = 100;
              window.scrollTo(0, v.current.offsetTop - e)
            }
          }
        }), []), (0, s.useEffect)((() => {
          if (!v.current) return;
          const e = () => {
            const e = d || window.getComputedStyle(v.current).getPropertyValue("--slides-per-view");
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
                tina: c
              } = s, d = n().clone(c);
              n().set(d, "payload.meta.id", r), a.push((0, p.jsx)(i.TinaParser, {
                components: b,
                tina: d,
                componentProps: {
                  deckProps: {
                    size: t
                  },
                  tina: d,
                  id: r,
                  position: e,
                  sectionTitle: o,
                  theme: l,
                  cardIds: x
                }
              }, r)), e += 1
            }
            return a
          }), []) : null
        }), [k, t]);
        return (0, p.jsx)("div", {
          className: "rockstargames-modules-core-carde756d7ada0a1e3e90ffe947506688185",
          "data-theme": l,
          ref: v,
          children: (0, p.jsx)(f, {
            description: c,
            size: t,
            cardSizeBreakpoints: m,
            slideChildren: T,
            title: o,
            customSlidesPerView: y,
            customAspectRatio: g,
            titleBadge: h
          })
        })
      })))
    }
  }
]);
//# sourceMappingURL=b895fd4112b3423417f9a9e02067b2d3.js.map