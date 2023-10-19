"use strict";
(self.webpackChunk_rockstargames_modules_core_card = self.webpackChunk_rockstargames_modules_core_card || []).push([
  [496], {
    454: (e, a, t) => {
      t.d(a, {
        Z: () => n
      });
      var s = t(8976);
      var i = t(5770);
      const n = e => {
        let {
          hasTag: a = !1,
          tag: t = null,
          tagStyle: n = null,
          badges: r = []
        } = e;
        return a && t ? (0, i.jsx)("div", {
          className: "f3cc5628ab9066a1f3c82db691085629ecd1",
          "data-tag-style": n,
          children: t
        }) : a && r && r?.length > 0 ? (0, i.jsx)("div", {
          className: "f3cc5628ab9066a1f6e8e857db521f2f02c2",
          children: r.map((e => (0, i.jsx)(s.Badge, {
            ...e
          }, e?.text)))
        }) : null
      }
    },
    956: (e, a, t) => {
      t.d(a, {
        Z: () => b
      });
      var s = t(927),
        i = t(3448),
        n = t.n(i),
        r = t(6502),
        c = t(9542),
        o = t(8976),
        d = t(9929),
        l = t(454),
        m = t(5323),
        p = t(8642);
      var g = t(5770);
      const {
        LiteMotion: f,
        Animations: u
      } = o.framer, {
        transitions: h
      } = u, b = e => {
        let {
          components: a,
          payload: t,
          prod: i,
          size: u,
          title: b,
          initial: v = "initial",
          animate: x = "animate",
          variants: y,
          type: w = null,
          context: C = null,
          textOverlayProps: j,
          className: P,
          children: T,
          theme: k = "none",
          cardIds: _,
          id: z,
          pricingOptions: O,
          pricingContainerHeight: N,
          isCoverCard: Z,
          platformOptions: L
        } = e;
        const H = (0, s.useRef)(),
          E = (0, s.useRef)(),
          {
            tag: S,
            expandedHasTag: I,
            badges: M
          } = j;
        n().set(t, "meta.prod", i);
        const [, V] = (0, r.useSearchParams)(), [B, q] = (0, s.useState)(null), W = void 0 !== O?.hasPricingOptions || null !== L, R = T?.props?.images.length > 0;
        let A = (0, g.jsx)("h1", {
          children: b
        });
        return Z && (A = null), (0, s.useEffect)((() => {
          null !== B && B < _?.length && B > -1 && V({
            info: _[B]
          })
        }), [B, _]), (0, s.useEffect)((() => {
          _?.forEach(((e, a) => {
            e === z && q(a)
          }))
        }), [_, z]), (0, s.useEffect)((() => {
          const e = () => {
            H.current && H.current.scrollTop > 0 && window.innerWidth >= window.innerHeight && (H.current.scrollTop = 0)
          };
          return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
        }), []), (0, g.jsx)(d.DataLayerProvider, {
          card_id: z,
          card_name: b?.toLowerCase(),
          children: (0, g.jsx)(o.ScrollTracker, {
            threshold: [25, 50, 75, 90, 100],
            trackRef: "long" === w ? H : E,
            children: (0, g.jsxs)(f, {
              ref: H,
              initial: v,
              animate: x,
              variants: y.expanded,
              transition: h.cardOpen,
              className: (0, c.classList)("f3cc5628ab9066a1b26588866b3f8cf68385", P),
              "data-type": w,
              "data-size": u,
              "data-product": W || !1,
              "data-covercard": Z || !1,
              "data-context": C,
              style: {
                "--product-card-pricing-info-height": `${N||0}px`
              },
              children: [R && (0, g.jsx)(m.Z, {
                size: u,
                title: b,
                textOverlayProps: j,
                expandedView: !0,
                pricingOptions: O,
                platformOptions: L,
                isCoverCard: Z,
                children: T
              }), (0, g.jsxs)(f, {
                ref: E,
                className: "f3cc5628ab9066a1c86efe7469f4c7bea32c",
                variants: y.expandedContents,
                transition: h.afterCardOpen,
                "data-theme": k,
                children: [(0, g.jsxs)("div", {
                  className: "f3cc5628ab9066a1d606f8b2c00b2c32599e",
                  children: [(0, g.jsx)(l.Z, {
                    hasTag: I,
                    tag: S,
                    badges: M
                  }), A, W && (0, g.jsxs)(g.Fragment, {
                    children: [!0 === L?.hasPlatformOptions && (0, g.jsx)("div", {
                      className: "f3cc5628ab9066a1d2544b84994ed9402e17",
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
                }), (0, g.jsx)(c.TinaParser, {
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
    5323: (e, a, t) => {
      t.d(a, {
        Z: () => l
      });
      var s = t(927),
        i = t(1237),
        n = t(5770);
      var r = t(8642),
        c = t(454);
      const o = {
          ps5: "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/6c6092979b344bb70ea6.svg",
          ps4: "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/399e4fadd28201f041fe.svg",
          ps: "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/f440137b017e0d8346de.svg",
          xboxone: "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/3852a2c6a70d09be710a.svg",
          xbox: "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/96b3858c446374dbe3a1.svg",
          xboxseriesxs: "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/ef962ee0eb1746b9363f.svg",
          pc: "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/af7a4b3f215a9ffd7074.svg",
          googleplay: "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/bef9ef087b87f666fcd7.svg",
          applestore: "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/bc8ea43a98eff3caadb0.svg"
        },
        d = e => {
          let {
            title: a,
            showTitle: t = !0,
            showBackground: i = !0,
            platformOptions: r,
            setPricingContainerHeight: d = (() => {})
          } = e;
          const l = (0, s.createRef)();
          let m = !1;
          return m = !0, (0, s.useEffect)((() => {
            const e = () => {
              l.current && null !== d && d(l.current.clientHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [l]), (0, n.jsxs)("div", {
            className: "f3cc5628ab9066a1eeadbeed9ee274c67407",
            ref: l,
            "data-show-background": i,
            children: [t && (0, n.jsx)("span", {
              className: "f3cc5628ab9066a1c39fd0843036ce142f01",
              children: a
            }), r?.platformsAndLinks && (0, n.jsxs)("div", {
              className: "f3cc5628ab9066a1ee88638c3c5574517abc",
              children: [(0, n.jsx)(c.Z, {
                hasTag: r?._memoq?.platformTag,
                tag: r?._memoq?.platformTag,
                tagStyle: r?._memoq?.platformTagStyle
              }), (0, n.jsx)("div", {
                className: "f3cc5628ab9066a1c47b30ab7c09b221ba43",
                children: r.platformsAndLinks.map((e => {
                  let {
                    platform: a,
                    buttonText: t
                  } = e;
                  return (0, n.jsx)("img", {
                    className: "f3cc5628ab9066a1af429680f615e05c19d7",
                    alt: t,
                    src: o[a]
                  }, a)
                }))
              })]
            }), !1]
          })
        },
        l = e => {
          let {
            textOverlayProps: a,
            title: t,
            size: c,
            expandedView: o = !1,
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
              collapsedHasTag: r,
              description: c,
              collapsedHasDescription: o,
              size: d,
              title: l,
              expandedView: m,
              badges: p
            } = e;
            const [g, f] = (0, s.useState)(null), u = (0, s.useMemo)((() => {
              if (!a) return null;
              const e = "sm" !== d && o;
              return (0, n.jsx)(i.Z, {
                title: l,
                hasTag: r,
                tag: t,
                hasDescription: e,
                description: c,
                fadesOut: m,
                badges: p
              })
            }), [a, t, r, c, o, d, l, m, p]);
            return (0, s.useEffect)((() => {
              f(u)
            }), [u]), [g, f]
          })({
            ...a,
            size: c,
            title: t,
            expandedView: o
          }), h = void 0 !== m?.hasPricingOptions || null !== f;
          return (0, n.jsxs)("header", {
            className: "f3cc5628ab9066a1abf1ce2359a28e402c7a",
            "data-is-covercard": g,
            "data-expanded-view": o,
            children: [s.Children.map(l, (e => (0, s.cloneElement)(e, {
              title: t,
              size: c,
              expandedView: o
            }))), u, h && (0, n.jsxs)(n.Fragment, {
              children: [!0 === f?.hasPlatformOptions && (0, n.jsx)(d, {
                title: t,
                platformOptions: f,
                pricingOptions: m,
                setPricingContainerHeight: p
              }), !0 === m?.hasPricingOptions && (0, n.jsx)(r.Z, {
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
    8125: (e, a, t) => {
      t.d(a, {
        Z: () => u
      });
      var s = t(927),
        i = t(8976),
        n = t(420),
        r = t.n(n),
        c = t(9542),
        o = t(956),
        d = t(6502),
        l = t(8008),
        m = t(6711),
        p = t(5770);
      const g = e => {
          let {
            id: a,
            position: t,
            title: i,
            size: n = "md",
            sectionTitle: r = "",
            expandedType: c = null,
            modalProps: o = {
              content: null,
              className: "",
              contentClassName: ""
            },
            className: g,
            children: f,
            isProductCard: u,
            cardIds: h = null,
            theme: b = "none",
            isCoverCard: v
          } = e;
          const [x, y] = (0, d.useSearchParams)(), w = (0, s.useRef)(null), [, C] = (0, l.useModal)(), {
            track: j
          } = (0, m.useGtmTrack)(), [P, T] = (0, s.useState)(!1), k = () => {
            T(!1), C(null), y({}), j({
              event: "trackPageview"
            })
          }, _ = () => {
            if (!o?.content || !w.current || !c || "linkout" === c) return;
            const e = w.current,
              s = window.getComputedStyle(e),
              r = parseInt(s.getPropertyValue("width"), 10),
              d = parseInt(s.getPropertyValue("height"), 10),
              l = e.getBoundingClientRect(),
              {
                content: m,
                className: p,
                contentClassName: g
              } = o,
              f = "fob" === n ? "fob" : "default";
            C({
              content: m,
              onClose: k,
              rect: l,
              width: r,
              height: d,
              className: p,
              contentClassName: g,
              fadeIn: !1,
              cardIds: h,
              theme: b,
              gtm: {
                event_label: i?.toLowerCase(),
                card_id: a,
                card_name: i?.toLowerCase(),
                position: t
              },
              aspectRatio: f,
              cardDimensions: {
                size: n,
                type: c
              }
            }), j({
              event: "trackPageview",
              link_url: window.location.href,
              card_id: a,
              card_name: i?.toLowerCase(),
              position: t
            })
          }, z = e => {
            v && "button" !== e.target.type || "linkout" !== c && (e.preventDefault(), e.stopPropagation(), a ? y({
              info: a
            }) : _(), j({
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
            P && _()
          }), [P]), (0, s.useEffect)((() => {
            T(x.get("info") === a)
          }), [x.get("info"), a]), (0, p.jsx)("div", {
            ref: w,
            onClick: z,
            onKeyUp: e => {
              (e => {
                "Enter" === e.code && z(e)
              })(e)
            },
            className: g,
            "data-size": n,
            "data-type": c,
            "data-product": u,
            role: "button",
            tabIndex: 0,
            "aria-label": i,
            children: f
          })
        },
        f = {
          card: "f3cc5628ab9066a1d44e1aa953059f5cf739",
          content: "f3cc5628ab9066a1ad7f915244524b0b3e74",
          expandedContent: "f3cc5628ab9066a1e98bb7ffca8939f0b817",
          text: "f3cc5628ab9066a1b2bf0078b6a4193e97ad",
          imageHolder: "f3cc5628ab9066a1b14d98c26bd35d8ed13b",
          coverCardWrapper: "f3cc5628ab9066a1c33a106136fc61bb3abe"
        },
        u = e => {
          let {
            payload: a,
            prod: t,
            images: n,
            size: d,
            title: l,
            initial: m,
            animate: u,
            variants: h,
            id: b,
            position: v,
            sectionTitle: x,
            expandedType: y,
            context: w,
            children: C,
            expandedCardContents: j,
            textOverlayProps: P = {
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
            cardIds: z,
            pricingOptions: O,
            platformOptions: N = null,
            pricingContainerHeight: Z,
            isCoverCard: L = !1
          } = e;
          const H = (0, c.useTinaComponents)(),
            E = void 0 !== O?.hasPricingOptions || null !== N,
            S = (0, s.useMemo)((() => ({
              ...H,
              HTMLElement: i.HTMLElement,
              ImageWithBadge: i.ImageWithBadge,
              Carousel: i.Carousel,
              GroupOfItems: r()
            })), [H]),
            I = (0, s.useMemo)((() => (0, p.jsx)(o.Z, {
              type: y,
              components: S,
              payload: a,
              prod: t,
              images: n,
              size: d,
              title: l,
              context: w,
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
              children: j
            })), [y, n, t, d, l, P, j, m, u, h, S, a]),
            M = [f.card, L ? f.coverCardWrapper : ""].join(" ");
          return (0, p.jsx)(g, {
            id: b,
            position: v,
            sectionTitle: x,
            title: l,
            size: d,
            expandedType: y,
            images: n,
            deckProps: T,
            modalProps: {
              content: I,
              ...k
            },
            className: M,
            isProductCard: E,
            cardIds: z,
            theme: _,
            isCoverCard: L,
            children: C
          })
        }
    },
    8380: (e, a, t) => {
      t.d(a, {
        Z: () => u
      });
      var s = t(927),
        i = t(9542),
        n = t(559),
        r = t(8976);
      const c = {
        layeredImageFrame: "f3cc5628ab9066a1be654799b10be1d2683c",
        layered: "f3cc5628ab9066a1ddb6c868927fc40f5dec",
        foreground: "f3cc5628ab9066a1d7e710282847fb9224de",
        imageMask: "f3cc5628ab9066a1ffc0a2a4179a84c1734b",
        logo: "f3cc5628ab9066a1fa4275085d6c272146c2",
        "sm-horizontal": "f3cc5628ab9066a1c7c57379e39dc9e34690"
      };
      var o = t(5770);
      const {
        LiteMotion: d,
        Animations: l
      } = r.framer, {
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
          alt: i,
          src: r
        } = (0, n.useImageParser)({
          ...a,
          prod: s
        });
        return (0, o.jsx)("img", {
          src: r.mobile,
          alt: i ?? "",
          style: {
            "--z-index": t
          }
        })
      }, u = e => {
        let {
          images: a = [],
          className: t = "",
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
        const b = (0, s.useMemo)((() => a?.length && 0 !== a.length ? a.map((e => (0, o.jsx)(d, {
          className: (0, i.classList)(c[e?.specialClass] ?? c.imageMask, c[e?.sizeClass], e.className),
          variants: m(e?.specialClass ?? "imageMask", r ? "expanded" : "collapsed"),
          initial: "initial",
          animate: "animate",
          transition: g.cardOpen,
          children: (0, o.jsx)(f, {
            image: e,
            prod: n
          })
        }, e.key))) : null), [a, u, r, n]);
        return (0, o.jsx)(d, {
          className: (0, i.classList)(c.layeredImageFrame, a.length > 1 ? c.layered : c.flat, t),
          style: l,
          initial: p.fade.in.initial,
          animate: p.fade.in.animate,
          transition: g.instantFade,
          "data-expanded-view": r,
          children: b
        })
      }
    },
    2333: (e, a, t) => {
      t.d(a, {
        Z: () => r
      });
      var s = t(8976),
        i = t(6711),
        n = t(5770);
      const r = e => {
        let {
          expandedType: a,
          to: t,
          children: r,
          style: c,
          sectionTitle: o = "",
          id: d,
          cardTitle: l,
          position: m
        } = e;
        const {
          track: p
        } = (0, i.useGtmTrack)();
        return "linkout" === a && t ? (0, n.jsx)(s.A, {
          to: t,
          style: c,
          target: t?.startsWith("http") ? "_blank" : "_self",
          onClick: () => p({
            event: "card_click",
            event_action: "click",
            event_category: "card",
            event_label: o,
            link_url: t,
            card_id: d,
            card_name: l,
            element_placement: o,
            position: m
          }),
          children: r
        }) : r
      }
    },
    8642: (e, a, t) => {
      t.d(a, {
        Z: () => n
      });
      var s = t(927);
      var i = t(5770);
      const n = e => {
        let {
          title: a,
          showTitle: t = !0,
          showBackground: n = !0,
          tag: r,
          tagStyle: c,
          discountPrice: o,
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
        }), [m]), (0, i.jsxs)("div", {
          className: "f3cc5628ab9066a1b87b1cad353b616da6a4",
          ref: m,
          "data-show-background": n,
          children: [t && (0, i.jsx)("span", {
            className: "f3cc5628ab9066a1c42eda1240c596f0d785",
            children: a
          }), (0, i.jsxs)("div", {
            className: "f3cc5628ab9066a1b0f482f2d0f16c294d3c",
            children: [(0, i.jsx)("span", {
              className: "f3cc5628ab9066a1a7aa97d72858d6ca3f16",
              "data-tag-style": c || "free",
              children: r
            }), (0, i.jsx)("span", {
              className: "f3cc5628ab9066a1bda97786d5063ef9b8f6",
              children: o
            }), (0, i.jsx)("span", {
              className: "f3cc5628ab9066a1c235f619535bec335f09",
              children: d
            })]
          })]
        })
      }
    },
    1237: (e, a, t) => {
      t.d(a, {
        Z: () => m
      });
      var s = t(8976),
        i = t(454);
      const n = {
        textOverlay: "f3cc5628ab9066a1b8bb24e78a7e5e3849fd",
        content: "f3cc5628ab9066a1a62c2da90114215ae3c8"
      };
      var r = t(5770);
      const {
        LiteMotion: c,
        Animations: o
      } = s.framer, {
        variants: d,
        transitions: l
      } = o, m = e => {
        let {
          title: a,
          hasTag: t,
          tag: s,
          hasDescription: o,
          description: m,
          fadesOut: p = !1,
          badges: g
        } = e;
        return (0, r.jsx)(c, {
          initial: d.fade.out.initial,
          animate: {
            opacity: p ? 0 : 1
          },
          transition: l.fade,
          className: n.textOverlay,
          children: (0, r.jsxs)("div", {
            className: n.content,
            children: [(0, r.jsx)(i.Z, {
              hasTag: t,
              tag: s,
              badges: g?.filter((e => e?.isPrimary))
            }), (0, r.jsx)("h3", {
              children: a
            }), o && m && (0, r.jsx)("div", {
              className: n.description,
              children: m
            })]
          })
        })
      }
    },
    7091: (e, a, t) => {
      t.d(a, {
        Z: () => r
      });
      var s = t(927),
        i = t(8976),
        n = t(5770);
      const r = e => {
        let {
          images: a,
          title: t,
          expandedView: r,
          variants: c,
          transition: o
        } = e;
        const d = (0, s.useMemo)((() => a && 0 !== a?.length ? a.map((e => e?.image?.sources ? (0, n.jsx)(i.ImageWithBadge, {
          ...e,
          style: {
            "--object-position": e?.objectPosition ?? ""
          }
        }) : null)) : null), [a]);
        return !d?.length || d?.length < 1 ? null : 1 === d.length ? d : (0, n.jsx)(i.ThumbsGallery, {
          slideChildren: d,
          title: t,
          navigation: r,
          thumbsVisible: r,
          spaceBetween: 0,
          variants: c,
          transition: o
        })
      }
    },
    2473: (e, a, t) => {
      t.d(a, {
        Z: () => g
      });
      var s = t(927),
        i = t(9542),
        n = t(8976),
        r = t(8125),
        c = t(5323),
        o = t(8380),
        d = t(2333);
      const l = {
        customModalContent: "f3cc5628ab9066a1eaaa89d602e502f9ab5a",
        content: "f3cc5628ab9066a1c1f66a431c932dee33fd"
      };
      var m = t(5770);
      const {
        variants: p
      } = n.framer.Animations, g = e => {
        let {
          id: a,
          title: t,
          content: n,
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
          to: v = null,
          tina: x = {},
          position: y = 0,
          sectionTitle: w = "",
          theme: C,
          pricingOptions: j,
          cardIds: P,
          platformOptions: T = null
        } = e;
        const k = (0, i.useTinaPayload)(),
          _ = x?.payload?.meta?.cdn ?? k?.meta?.prod ?? !1,
          [z, O] = (0, s.useState)(b?.size ?? g),
          N = void 0 !== j?.hasPricingOptions || null !== T,
          [Z, L] = (0, s.useState)(0);
        return (0, s.useEffect)((() => {
          O(b?.size ?? g)
        }), [b?.size, g]), (0, m.jsx)(r.Z, {
          id: a,
          title: t,
          size: z,
          expandedType: f,
          images: h,
          deckProps: b,
          prod: _,
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
          expandedCardContents: (0, m.jsx)(o.Z, {
            images: h,
            prod: _,
            expandedView: !0
          }),
          position: y,
          sectionTitle: w,
          theme: C,
          cardIds: P,
          pricingOptions: j,
          platformOptions: T,
          pricingContainerHeight: Z,
          children: (0, m.jsx)(d.Z, {
            expandedType: f,
            to: v,
            sectionTitle: w,
            id: a,
            cardTitle: t,
            position: y,
            children: (0, m.jsx)("div", {
              className: l.content,
              "data-product": N,
              children: (0, m.jsx)(c.Z, {
                title: t,
                size: z,
                textOverlayProps: u,
                pricingOptions: j,
                platformOptions: T,
                setPricingContainerHeight: L,
                children: (0, m.jsx)(o.Z, {
                  images: h,
                  prod: _
                })
              })
            })
          })
        })
      }
    },
    1497: (e, a, t) => {
      t.d(a, {
        Z: () => g
      });
      var s = t(927),
        i = t(9542),
        n = t(8976),
        r = t(8125),
        c = t(5323),
        o = t(7091);
      const d = {
        customModalContent: "f3cc5628ab9066a1e9e7ee7cbb3a089710cc"
      };
      var l = t(5770);
      const {
        transitions: m,
        variants: p
      } = n.framer.Animations, g = e => {
        let {
          id: a,
          title: t,
          content: n,
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
          tina: v = {},
          payload: x,
          position: y = 0,
          sectionTitle: w = "",
          cardIds: C
        } = e;
        const j = (0, i.useTinaPayload)(),
          P = x ?? j,
          T = v?.payload?.meta?.cdn ?? P?.meta?.prod ?? !1,
          k = ((e, a) => e?.map((e => e?.image ? {
            ...e,
            image: {
              ...e.image,
              prod: a
            }
          } : e)))(h, T),
          [_, z] = (0, s.useState)(b?.size ?? g),
          {
            parent: O,
            main: N,
            thumbs: Z
          } = p?.cardWithImageGallery?.gallery ?? {};
        return (0, s.useEffect)((() => {
          z(b?.size ?? g)
        }), [b?.size, g]), (0, l.jsx)(r.Z, {
          id: a,
          position: y,
          sectionTitle: w,
          payload: {
            content: n,
            meta: {},
            payload: P
          },
          title: t,
          size: _,
          expandedType: f,
          images: k,
          deckProps: b,
          prod: T,
          variants: p.cardWithImageGallery,
          textOverlayProps: u,
          modalProps: {
            className: d.customModal,
            contentClassName: d.customModalContent
          },
          expandedCardContents: (0, l.jsx)(o.Z, {
            images: k,
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
          cardIds: C,
          children: (0, l.jsx)("div", {
            className: d.content,
            children: (0, l.jsx)(c.Z, {
              title: t,
              size: _,
              textOverlayProps: u,
              children: (0, l.jsx)(o.Z, {
                images: k,
                title: t,
                navigation: !1,
                thumbsVisible: !1
              })
            })
          })
        })
      }
    },
    5837: (e, a, t) => {
      t.d(a, {
        Z: () => r
      });
      var s = t(8976),
        i = t(9542);
      var n = t(5770);
      const r = e => {
        let {
          title: a,
          content: t,
          size: r = "md",
          badgeText: c
        } = e;
        const o = {
          ...(0, i.useTinaComponents)(),
          HTMLElement: s.HTMLElement,
          UnorderedList: s.UnorderedList,
          ListItem: s.ListItem
        };
        return (0, n.jsx)("div", {
          className: "f3cc5628ab9066a1e881a80105cd524eb2bf",
          "data-size": r,
          children: (0, n.jsxs)("div", {
            className: "f3cc5628ab9066a1b950e84d17e2720a8c4a",
            children: [c && (0, n.jsx)("div", {
              className: "f3cc5628ab9066a1d4d1e516f8a980e2ce3a",
              children: c
            }), (0, n.jsxs)("div", {
              className: "f3cc5628ab9066a1afc8dfd2b7b7731fdc0d",
              children: [a && (0, n.jsx)("h3", {
                children: a
              }), (0, n.jsx)(i.TinaParser, {
                components: o,
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
    7097: (e, a, t) => {
      t.d(a, {
        Z: () => v
      });
      var s = t(927),
        i = t(6502),
        n = t(3448),
        r = t.n(n),
        c = t(8976),
        o = t(9542),
        d = t(2473),
        l = t(1497),
        m = t(5837);
      var p = t(5770);
      const {
        Gen9CoreCarousel: g,
        framer: f,
        useTinaModuleFetchByIds: u,
        withSimpleErrorBoundary: h
      } = c, b = {
        Card: d.Z,
        CardWithImageGallery: l.Z,
        TextCard: m.Z,
        ...c
      }, v = f.withFadeIn(h((e => {
        let {
          cards: a = [],
          size: t,
          title: n,
          description: c,
          customSlidesPerView: d = null,
          theme: l = "none",
          cardSizeBreakpoints: m = {},
          customAspectRatio: f = "3/1",
          titleBadge: h = null
        } = e;
        const v = (0, s.useRef)(null),
          x = r().map(a, "id"),
          y = u({
            ids: x
          }),
          [w, C] = (0, s.useState)(d),
          [j] = (0, i.useSearchParams)(),
          [P, T] = (0, s.useState)(!1);
        (0, s.useEffect)((() => {
          if ("fob" === t) {
            const e = j.get("section");
            if (e && "games" === e && !P && (T(!0), v.current)) {
              const e = 100;
              window.scrollTo(0, v.current.offsetTop - e)
            }
          }
        }), []), (0, s.useEffect)((() => {
          if (!v.current) return;
          const e = () => {
            const e = d || window.getComputedStyle(v.current).getPropertyValue("--slides-per-view");
            C(e)
          };
          return window.addEventListener("resize", e), e(), () => {
            window.removeEventListener("resize", e)
          }
        }));
        const k = (0, s.useMemo)((() => {
          let e = 0;
          return y ? y.reduce(((a, s) => {
            if (s) {
              const {
                id: i,
                tina: c
              } = s, d = r().clone(c);
              r().set(d, "payload.meta.id", i), a.push((0, p.jsx)(o.TinaParser, {
                components: b,
                tina: d,
                componentProps: {
                  deckProps: {
                    size: t
                  },
                  tina: d,
                  id: i,
                  position: e,
                  sectionTitle: n,
                  theme: l,
                  cardIds: x
                }
              }, i)), e += 1
            }
            return a
          }), []) : null
        }), [y, t]);
        return (0, p.jsx)("div", {
          className: "f3cc5628ab9066a1cd5e4502d7fca0835dd4",
          "data-theme": l,
          ref: v,
          children: (0, p.jsx)(g, {
            description: c,
            size: t,
            cardSizeBreakpoints: m,
            slideChildren: k,
            title: n,
            customSlidesPerView: w,
            customAspectRatio: f,
            titleBadge: h
          })
        })
      })))
    }
  }
]);