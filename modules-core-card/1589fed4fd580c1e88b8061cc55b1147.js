/*! For license information please see 1589fed4fd580c1e88b8061cc55b1147.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "3bb788ad-82dc-4784-8bf5-5072d616604a", e._sentryDebugIdIdentifier = "sentry-dbid-3bb788ad-82dc-4784-8bf5-5072d616604a")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "692b6956abd6177da3ac6da14c81527e5159ed6d",
  packageName: "@rockstargames/modules-core-card",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "692b6956abd6177da3ac6da14c81527e5159ed6d"
}, (self.webpackChunk_rockstargames_modules_core_card = self.webpackChunk_rockstargames_modules_core_card || []).push([
  [92, 176], {
    9576: (e, a, t) => {
      var s = t(1664),
        r = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        i = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        c = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function d(e, a, t) {
        var s, o = {},
          d = null,
          l = null;
        for (s in void 0 !== t && (d = "" + t), void 0 !== a.key && (d = "" + a.key), void 0 !== a.ref && (l = a.ref), a) n.call(a, s) && !c.hasOwnProperty(s) && (o[s] = a[s]);
        if (e && e.defaultProps)
          for (s in a = e.defaultProps) void 0 === o[s] && (o[s] = a[s]);
        return {
          $$typeof: r,
          type: e,
          key: d,
          ref: l,
          props: o,
          _owner: i.current
        }
      }
      a.Fragment = o, a.jsx = d, a.jsxs = d
    },
    5240: (e, a, t) => {
      e.exports = t(9576)
    },
    6092: (e, a, t) => {
      t.d(a, {
        c: () => o
      });
      var s = t(9860);
      var r = t(5240);
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
    9472: (e, a, t) => {
      t.d(a, {
        c: () => b
      });
      var s = t(1664),
        r = t(3660),
        o = t.n(r),
        n = t(7013),
        i = t(1740),
        c = t(9860),
        d = t(5792),
        l = t(6092),
        m = t(4186),
        p = t(9836);
      var f = t(5240);
      const {
        LiteMotion: g,
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
          children: (0, f.jsx)(c.ScrollTracker, {
            threshold: [25, 50, 75, 90, 100],
            trackRef: "long" === y ? S : H,
            children: (0, f.jsxs)(g, {
              ref: S,
              initial: x,
              animate: v,
              variants: k.expanded,
              transition: h.cardOpen,
              className: (0, i.classList)("rockstargames-modules-core-cardab2ff002fe79682e12519c4608068662", C),
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
                }), (0, f.jsx)(i.TinaParser, {
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
    4186: (e, a, t) => {
      t.d(a, {
        c: () => b
      });
      var s = t(1664),
        r = t(2840),
        o = t(5240);
      var n = t(9836),
        i = t(7104),
        c = t(5388),
        d = t(9336),
        l = t(6201),
        m = t(3124),
        p = t(1232),
        f = t(6644),
        g = t(6092);
      const u = {
          ps5: d,
          ps4: c,
          ps: i,
          xboxone: m,
          xbox: p,
          xboxseriesxs: l,
          pc: f,
          googleplay: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2ef574ea2aa502447d579267ff37e251.svg",
          applestore: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c6affc8b37ec4c75486ab6d12b2de395.svg"
        },
        h = e => {
          let {
            title: a,
            showTitle: t = !0,
            showBackground: r = !0,
            platformOptions: n,
            setPricingContainerHeight: i = (() => {})
          } = e;
          const c = (0, s.createRef)();
          return (0, s.useEffect)((() => {
            const e = () => {
              c.current && null !== i && i(c.current.clientHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [c]), (0, o.jsxs)("div", {
            className: "rockstargames-modules-core-cardf2c0c0fc07a199332ad94b05c35fc687",
            ref: c,
            "data-show-background": r,
            children: [t && (0, o.jsx)("span", {
              className: "rockstargames-modules-core-cardb15d1b8e722d56bc332e3d15d4430d97",
              children: a
            }), n?.platformsAndLinks && (0, o.jsxs)("div", {
              className: "rockstargames-modules-core-cardb2183b5b71087a21600433b0ca570130",
              children: [(0, o.jsx)(g.c, {
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
                    src: u[a]
                  }, a)
                }))
              })]
            })]
          })
        },
        b = e => {
          let {
            textOverlayProps: a,
            title: t,
            size: i,
            expandedView: c = !1,
            children: d,
            pricingOptions: l,
            setPricingContainerHeight: m,
            isCoverCard: p = !1,
            platformOptions: f
          } = e;
          const [g] = (e => {
            let {
              hasTextOverlay: a,
              tag: t,
              collapsedHasTag: n,
              description: i,
              collapsedHasDescription: c,
              size: d,
              title: l,
              expandedView: m,
              badges: p
            } = e;
            const [f, g] = (0, s.useState)(null), u = (0, s.useMemo)((() => {
              if (!a) return null;
              const e = "sm" !== d && c;
              return (0, o.jsx)(r.c, {
                title: l,
                hasTag: n,
                tag: t,
                hasDescription: e,
                description: i,
                fadesOut: m,
                badges: p
              })
            }), [a, t, n, i, c, d, l, m, p]);
            return (0, s.useEffect)((() => {
              g(u)
            }), [u]), [f, g]
          })({
            ...a,
            size: i,
            title: t,
            expandedView: c
          }), u = void 0 !== l?.hasPricingOptions || null !== f;
          return (0, o.jsxs)("header", {
            className: "rockstargames-modules-core-cardc2026bdbe4e16647d55af023c2bc6e02",
            "data-is-covercard": p,
            "data-expanded-view": c,
            children: [s.Children.map(d, (e => (0, s.cloneElement)(e, {
              title: t,
              size: i,
              expandedView: c
            }))), g, u && (0, o.jsxs)(o.Fragment, {
              children: [!0 === f?.hasPlatformOptions && (0, o.jsx)(h, {
                title: t,
                platformOptions: f,
                pricingOptions: l,
                setPricingContainerHeight: m
              }), !0 === l?.hasPricingOptions && (0, o.jsx)(n.c, {
                title: t,
                tag: l?._memoq?.tag,
                tagStyle: l?._memoq?.tagStyle || "free",
                discountPrice: l?._memoq?.discountPrice,
                originalPrice: l?._memoq?.originalPrice,
                setPricingContainerHeight: m
              })]
            })]
          })
        }
    },
    6464: (e, a, t) => {
      t.d(a, {
        c: () => b
      });
      var s = t(1664),
        r = t(9860),
        o = t(9812),
        n = t.n(o),
        i = t(1740),
        c = t(9472),
        d = t(7013),
        l = (t(968), t(2836)),
        m = t(5240);
      const p = "modal-context",
        f = [null, () => null],
        g = window?.[p] ?? (window[p] = (0, s.createContext)(f)),
        u = e => {
          let {
            id: a,
            position: t,
            title: r,
            size: o = "md",
            sectionTitle: n = "",
            expandedType: i = null,
            modalProps: c = {
              content: null,
              className: "",
              contentClassName: ""
            },
            className: p,
            children: f,
            isProductCard: u,
            cardIds: h = null,
            theme: b = "none",
            isCoverCard: x
          } = e;
          const [v, k] = (0, d.useSearchParams)(), y = (0, s.useRef)(null), [, w] = (0, s.useContext)(g), {
            track: _
          } = (0, l.useGtmTrack)(), [C, P] = (0, s.useState)(!1), T = () => {
            P(!1), w(null), k({}), _({
              event: "trackPageview"
            })
          }, j = () => {
            if (!c?.content || !y.current || !i || "linkout" === i) return;
            const e = y.current,
              s = window.getComputedStyle(e),
              n = parseInt(s.getPropertyValue("width"), 10),
              d = parseInt(s.getPropertyValue("height"), 10),
              l = e.getBoundingClientRect(),
              {
                content: m,
                className: p,
                contentClassName: f
              } = c,
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
                type: i
              }
            }), _({
              event: "trackPageview",
              link_url: window.location.href,
              card_id: a,
              card_name: r?.toLowerCase(),
              position: t
            })
          }, O = e => {
            x && "button" !== e.target.type || "linkout" !== i && (e.preventDefault(), e.stopPropagation(), a ? k({
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
            P(v.get("info") === a)
          }), [v.get("info"), a]), (0, m.jsx)("div", {
            ref: y,
            onClick: O,
            onKeyUp: e => {
              (e => {
                "Enter" === e.code && O(e)
              })(e)
            },
            className: p,
            "data-size": o,
            "data-type": i,
            "data-product": u,
            role: "button",
            tabIndex: "linkout" !== i ? 0 : -1,
            "aria-label": r,
            children: f
          })
        },
        h = {
          pillBtn: "rockstargames-modules-core-cardaa44119fde485ceaeef3593555b12f5a",
          selected: "rockstargames-modules-core-cardd5c4d1c519f8bf11965800fd72b2e1dd",
          card: "rockstargames-modules-core-cardcf103b7019a71a53fc48880b9160222d",
          content: "rockstargames-modules-core-carde5eea341012840d08036103857859d11",
          expandedContent: "rockstargames-modules-core-cardcc3f6c81c0361bd50c51602ea3cf7f7a",
          text: "rockstargames-modules-core-cardea5df0c0f1c231948b8313aca6ef715d",
          imageHolder: "rockstargames-modules-core-cardb6431dfee21f0b48025db4304cfa61eb",
          coverCardWrapper: "rockstargames-modules-core-cardb01ff5899532834181d2fdaae88c2a93"
        },
        b = e => {
          let {
            payload: a,
            prod: t,
            images: o,
            size: d,
            title: l,
            initial: p,
            animate: f,
            variants: g,
            id: b,
            position: x,
            sectionTitle: v,
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
          const S = (0, i.useTinaComponents)(),
            H = (0, s.useMemo)((() => ({
              ...S,
              HTMLElement: r.HTMLElement,
              ImageWithBadge: r.ImageWithBadge,
              Carousel: r.Carousel,
              GroupOfItems: n()
            })), [S]),
            M = (0, s.useMemo)((() => (0, m.jsx)(c.c, {
              type: k,
              components: H,
              payload: a,
              prod: t,
              images: o,
              size: d,
              title: l,
              context: y,
              textOverlayProps: C,
              initial: p,
              animate: f,
              variants: g,
              theme: j,
              cardIds: O,
              pricingOptions: z,
              id: b,
              pricingContainerHeight: E,
              isCoverCard: I,
              platformOptions: N,
              isProductCard: L,
              children: _
            })), [k, o, t, d, l, C, _, p, f, g, H, a, L]),
            B = [h.card, I ? h.coverCardWrapper : ""].join(" ");
          return (0, m.jsx)(u, {
            id: b,
            position: x,
            sectionTitle: v,
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
    4166: (e, a, t) => {
      t.d(a, {
        c: () => u
      });
      var s = t(1664),
        r = t(1740),
        o = t(5652),
        n = t(9860);
      const i = {
        layeredImageFrame: "rockstargames-modules-core-cardfab7a9d470f74ec728a8a88419dde764",
        layered: "rockstargames-modules-core-carda037270563f60546ff0d3c59cbff5c0b",
        foreground: "rockstargames-modules-core-cardae1d9a27d7ee3ef28eb020b6e4f60c84",
        imageMask: "rockstargames-modules-core-cardba7be5ee83ef3c1ae7d6c1acf5ac8048",
        logo: "rockstargames-modules-core-cardb94e4ab441f3f5a47a7fa466fcd4cdaa",
        "sm-horizontal": "rockstargames-modules-core-carda7e8eb44f974c40fc6f9820d90a1a543"
      };
      var c = t(5240);
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
        const b = (0, s.useMemo)((() => a?.length && 0 !== a.length ? a.map((e => (0, c.jsx)(d, {
          className: (0, r.classList)(i[e?.specialClass] ?? i.imageMask, i[e?.sizeClass], e.className),
          variants: m(e?.specialClass ?? "imageMask", n ? "expanded" : "collapsed"),
          initial: "initial",
          animate: "animate",
          transition: f.cardOpen,
          children: (0, c.jsx)(g, {
            image: e,
            prod: o
          })
        }, e.key))) : null), [a, u, n, o]);
        return (0, c.jsx)(d, {
          className: (0, r.classList)(i.layeredImageFrame, a.length > 1 ? i.layered : i.flat, t),
          style: l,
          initial: p.fade.in.initial,
          animate: p.fade.in.animate,
          transition: f.instantFade,
          "data-expanded-view": n,
          children: b
        })
      }
    },
    8244: (e, a, t) => {
      t.d(a, {
        c: () => n
      });
      var s = t(9860),
        r = t(2836),
        o = t(5240);
      const n = e => {
        let {
          expandedType: a,
          to: t,
          children: n,
          style: i,
          sectionTitle: c = "",
          id: d,
          cardTitle: l,
          position: m
        } = e;
        const {
          track: p
        } = (0, r.useGtmTrack)();
        return "linkout" === a && t ? (0, o.jsx)(s.A, {
          to: t,
          style: i,
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
    9836: (e, a, t) => {
      t.d(a, {
        c: () => o
      });
      var s = t(1664);
      var r = t(5240);
      const o = e => {
        let {
          title: a,
          showTitle: t = !0,
          showBackground: o = !0,
          tag: n,
          tagStyle: i,
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
          "data-show-background": o,
          children: [t && (0, r.jsx)("span", {
            className: "rockstargames-modules-core-cardf5a4d175d5f8b14624f89ca1f166a21a",
            children: a
          }), (0, r.jsxs)("div", {
            className: "rockstargames-modules-core-cardb016dbdcb8f1ee670f9119dd74deb64d",
            children: [(0, r.jsx)("span", {
              className: "rockstargames-modules-core-cardc8f913d063cfda7e8b69c68571f94cb2",
              "data-tag-style": i || "free",
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
    2840: (e, a, t) => {
      t.d(a, {
        c: () => m
      });
      var s = t(9860),
        r = t(6092);
      const o = {
        textOverlay: "rockstargames-modules-core-carde45cbf271beb53be0ac185f84ef7b8c1",
        content: "rockstargames-modules-core-cardc1ab416c07abfa2f9c2cf10ba04f026b"
      };
      var n = t(5240);
      const {
        LiteMotion: i,
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
          badges: f
        } = e;
        return (0, n.jsx)(i, {
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
            }), c && m && (0, n.jsx)("div", {
              className: o.description,
              children: m
            })]
          })
        })
      }
    },
    3084: (e, a, t) => {
      t.d(a, {
        c: () => n
      });
      var s = t(1664),
        r = t(9860),
        o = t(5240);
      const n = e => {
        let {
          images: a,
          title: t,
          expandedView: n,
          variants: i,
          transition: c
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
          variants: i,
          transition: c
        })
      }
    },
    4204: (e, a, t) => {
      t.d(a, {
        c: () => f
      });
      var s = t(1664),
        r = t(1740),
        o = t(9860),
        n = t(6464),
        i = t(4186),
        c = t(4166),
        d = t(8244);
      const l = {
        pillBtn: "rockstargames-modules-core-carde9d21a3f1d53a4f78a9d3b580a3b0235",
        selected: "rockstargames-modules-core-cardc0fdf4471085cebfbbac32e1e9ca1eb8",
        customModalContent: "rockstargames-modules-core-carda15b2faad65a444365810a7dc17d2ce6",
        content: "rockstargames-modules-core-cardf04bd7012d1fef63b3a24a423a3fded0"
      };
      var m = t(5240);
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
          to: x = null,
          tina: v = {},
          position: k = 0,
          sectionTitle: y = "",
          theme: w,
          pricingOptions: _,
          cardIds: C,
          platformOptions: P = null
        } = e;
        const T = (0, r.useTinaPayload)(),
          j = v?.payload?.meta?.cdn ?? T?.meta?.prod ?? !1,
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
          expandedCardContents: (0, m.jsx)(c.c, {
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
            to: x,
            sectionTitle: y,
            id: a,
            cardTitle: t,
            position: k,
            children: (0, m.jsx)("div", {
              className: l.content,
              "data-product": I,
              children: (0, m.jsx)(i.c, {
                title: t,
                size: O,
                textOverlayProps: u,
                pricingOptions: _,
                platformOptions: P,
                setPricingContainerHeight: E,
                children: (0, m.jsx)(c.c, {
                  images: h,
                  prod: j
                })
              })
            })
          })
        })
      }
    },
    5976: (e, a, t) => {
      t.d(a, {
        c: () => f
      });
      var s = t(1664),
        r = t(1740),
        o = t(9860),
        n = t(6464),
        i = t(4186),
        c = t(3084);
      const d = {
        pillBtn: "rockstargames-modules-core-cardd5aee085f046fe1bd57b5982a6971c8c",
        selected: "rockstargames-modules-core-carda6a039d7655ce4e6748e45af2a6f607b",
        customModalContent: "rockstargames-modules-core-cardca0929fb8857130122442f32a847f70d"
      };
      var l = t(5240);
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
          tina: x = {},
          payload: v,
          position: k = 0,
          sectionTitle: y = "",
          cardIds: w
        } = e;
        const _ = (0, r.useTinaPayload)(),
          C = v ?? _,
          P = x?.payload?.meta?.cdn ?? C?.meta?.prod ?? !1,
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
          expandedCardContents: (0, l.jsx)(c.c, {
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
            children: (0, l.jsx)(i.c, {
              title: t,
              size: j,
              textOverlayProps: u,
              children: (0, l.jsx)(c.c, {
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
    8812: (e, a, t) => {
      t.d(a, {
        c: () => n
      });
      var s = t(9860),
        r = t(1740);
      var o = t(5240);
      const n = e => {
        let {
          title: a,
          content: t,
          size: n = "md",
          badgeText: i
        } = e;
        const c = {
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
            children: [i && (0, o.jsx)("div", {
              className: "rockstargames-modules-core-carde6201ee2e74e6a5bb5a14b9fd3a80a18",
              children: i
            }), (0, o.jsxs)("div", {
              className: "rockstargames-modules-core-cardce1f20ccc7d95c91d3e2603a5b0cd597",
              children: [a && (0, o.jsx)("h3", {
                children: a
              }), (0, o.jsx)(r.TinaParser, {
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
    4896: (e, a, t) => {
      t.d(a, {
        c: () => x
      });
      var s = t(1664),
        r = t(7013),
        o = t(3660),
        n = t.n(o),
        i = t(9860),
        c = t(1740),
        d = t(4204),
        l = t(5976),
        m = t(8812);
      var p = t(5240);
      const {
        Gen9CoreCarousel: f,
        framer: g,
        useTinaModuleFetchByIds: u,
        withSimpleErrorBoundary: h
      } = i, b = {
        Card: d.c,
        CardWithImageGallery: l.c,
        TextCard: m.c,
        ...i
      }, x = g.withFadeIn(h((e => {
        let {
          cards: a = [],
          size: t,
          title: o,
          description: i,
          customSlidesPerView: d = null,
          theme: l = "none",
          cardSizeBreakpoints: m = {},
          customAspectRatio: g = "3/1",
          titleBadge: h = null
        } = e;
        const x = (0, s.useRef)(null),
          v = n().map(a, "id"),
          k = u({
            ids: v
          }),
          [y, w] = (0, s.useState)(d),
          [_] = (0, r.useSearchParams)(),
          [C, P] = (0, s.useState)(!1);
        (0, s.useEffect)((() => {
          if ("fob" === t) {
            const e = _.get("section");
            if (e && "games" === e && !C && (P(!0), x.current)) {
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
                tina: i
              } = s, d = n().clone(i);
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
                  sectionTitle: o,
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
          children: (0, p.jsx)(f, {
            description: i,
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
    },
    6644: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    7104: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1506c5bba61fa270f73c874e3d60a94f.svg"
    },
    5388: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg"
    },
    9336: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e8f340ded0fd6b0b0d434e8c6c8b75e.svg"
    },
    1232: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d6d2cb861c79506282c6d6cbf1170f81.svg"
    },
    3124: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg"
    },
    6201: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/205366df6706c3b367fb5ff4f26ab7f3.svg"
    }
  }
]);
//# sourceMappingURL=1589fed4fd580c1e88b8061cc55b1147.js.map