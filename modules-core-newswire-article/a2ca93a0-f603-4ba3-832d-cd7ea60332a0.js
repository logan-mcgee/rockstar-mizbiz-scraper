! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "a2ca93a0-f603-4ba3-832d-cd7ea60332a0", e._sentryDebugIdIdentifier = "sentry-dbid-a2ca93a0-f603-4ba3-832d-cd7ea60332a0")
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
  [5535], {
    26908: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => d
      });
      var s = t(81788),
        r = t(20066);
      const i = (0, s.defineMessages)({
          components_track_list_title: {
            id: "components_track_list_title",
            defaultMessage: "Tracklist"
          }
        }),
        n = {
          bodySmall: "rockstargames-modules-core-newswire-articledeed018133fca0148d0bf72fbe95bcd6"
        };
      var c = t(98096);
      const o = e => {
          let {
            track: a,
            artist: t
          } = e;
          return (0, c.jsxs)("div", {
            className: n.track,
            children: [(0, c.jsx)("p", {
              children: a
            }), (0, c.jsx)("p", {
              className: n.bodySmall,
              children: t
            })]
          })
        },
        d = (0, s.withIntl)((e => {
          let {
            content: a = []
          } = e;
          return (0, c.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlee2587587f57e43c9ca90d1e16e4a6ca6",
            children: [(0, c.jsx)("h4", {
              className: "rockstargames-modules-core-newswire-articleef167f82b058360b2b6a3466ca73d7de",
              children: (0, c.jsx)(s.FormattedMessage, {
                ...i.components_track_list_title
              })
            }), (0, c.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlebeaa4a0a8d9f3a6ef20ee517f222a3c2",
              children: (0, c.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlec06a65e90847e8b44df20f2aceb57038",
                children: a?.map((e => (0, c.jsx)(o, {
                  track: e.track,
                  artist: e.artist
                }, e.key)))
              })
            })]
          })
        }), r)
    },
    29131: (e, a, t) => {
      "use strict";
      t.d(a, {
        y3: () => ge,
        h7: () => ee,
        E$: () => $e
      });
      var s = t(62229),
        r = t(16188),
        i = t.n(r),
        n = t(92440),
        c = t(26495),
        o = t(7048),
        d = t(95966),
        l = t(27371);
      var m = t(98096);
      const u = e => {
          let {
            hasTag: a = !1,
            tag: t = null,
            tagStyle: s = null,
            badges: r = []
          } = e;
          return a && t ? (0, m.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articleceb75d3391774f84e920e955d7a6853f",
            "data-tag-style": s,
            children: t
          }) : a && r && r?.length > 0 ? (0, m.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articlef83b84453472e937d57011680a564ec6",
            children: r.map((e => (0, m.jsx)(l.A, {
              ...e
            }, e?.text)))
          }) : null
        },
        g = {
          textOverlay: "rockstargames-modules-core-newswire-articleca83475001f5d512b9ffcd89f1117561",
          content: "rockstargames-modules-core-newswire-articlef418ed13cf5cbe3f701ce0d872b50704"
        },
        {
          LiteMotion: f,
          Animations: p
        } = c,
        {
          variants: b,
          transitions: k
        } = p,
        v = e => {
          let {
            title: a,
            hasTag: t,
            tag: s,
            hasDescription: r,
            description: i,
            fadesOut: n = !1,
            badges: c
          } = e;
          return (0, m.jsx)(f, {
            initial: b.fade.out.initial,
            animate: {
              opacity: n ? 0 : 1
            },
            transition: k.fade,
            className: g.textOverlay,
            children: (0, m.jsxs)("div", {
              className: g.content,
              children: [(0, m.jsx)(u, {
                hasTag: t,
                tag: s,
                badges: c?.filter((e => e?.isPrimary))
              }), (0, m.jsx)("h3", {
                children: a
              }), r && i && (0, m.jsx)("div", {
                className: g.description,
                children: i
              })]
            })
          })
        },
        w = e => {
          let {
            title: a,
            showTitle: t = !0,
            showBackground: r = !0,
            tag: i,
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
            className: "rockstargames-modules-core-newswire-articlee419c6cd31abd635e742e635dcfd8316",
            ref: l,
            "data-show-background": r,
            children: [t && (0, m.jsx)("span", {
              className: "rockstargames-modules-core-newswire-articlebf415d56280a8768ee0c26e116865d5b",
              children: a
            }), (0, m.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articled98da8fc9dce6d600db165351d3a3fed",
              children: [(0, m.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articlea5717338db21efc7eb765011d68ea73d",
                "data-tag-style": n || "free",
                children: i
              }), (0, m.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articlecdaaa9655747e4d129d6c22080bdd33d",
                children: c
              }), (0, m.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articleaf3db4eb6d14c1f4ee5689b4e6386715",
                children: o
              })]
            })]
          })
        };
      var h = t(80391),
        x = t(28985),
        _ = t(47240),
        y = t(81715),
        N = t(49429),
        j = t(32903),
        S = t(85719),
        T = t(11008);
      const C = {
          ps5: _,
          ps4: x,
          ps: h,
          xboxone: N,
          xbox: j,
          xboxseriesxs: y,
          nintendoswitch: T,
          pc: S,
          googleplay: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2ef574ea2aa502447d579267ff37e251.svg",
          applestore: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c6affc8b37ec4c75486ab6d12b2de395.svg"
        },
        A = e => {
          let {
            title: a,
            showTitle: t = !0,
            showBackground: r = !0,
            platformOptions: i,
            setPricingContainerHeight: n = (() => {}),
            expandedView: c
          } = e;
          const o = (0, s.createRef)();
          return (0, s.useEffect)((() => {
            const e = () => {
              o.current && null !== n && n(o.current.clientHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [o]), (0, m.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articleee81f54f31ab2cd10a67313b9689bf96",
            ref: o,
            "data-show-background": r,
            "data-show-platforms": !c,
            children: [t && (0, m.jsx)("span", {
              className: "rockstargames-modules-core-newswire-articled4ab460f0a204a588d4d4dd0a110ca36",
              children: a
            }), i?.platformsAndLinks && (0, m.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articleafdc85bfd80cae52d4c1b422f1294962",
              children: [(0, m.jsx)(u, {
                hasTag: i?._memoq?.platformTag,
                tag: i?._memoq?.platformTag,
                tagStyle: i?._memoq?.platformTagStyle
              }), (0, m.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlec252412353007d9f02f19a754430b14b",
                children: i.platformsAndLinks.map((e => {
                  let {
                    platform: a,
                    buttonText: t
                  } = e;
                  return (0, m.jsx)("img", {
                    className: "rockstargames-modules-core-newswire-articleff5cde8853312ffb892472d100c684cd",
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
            size: r,
            expandedView: i = !1,
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
              collapsedHasTag: r,
              description: i,
              collapsedHasDescription: n,
              size: c,
              title: o,
              expandedView: d,
              badges: l
            } = e;
            const [u, g] = (0, s.useState)(null), f = (0, s.useMemo)((() => {
              if (!a) return null;
              const e = "sm" !== c && n;
              return (0, m.jsx)(v, {
                title: o,
                hasTag: r,
                tag: t,
                hasDescription: e,
                description: i,
                fadesOut: d,
                badges: l
              })
            }), [a, t, r, i, n, c, o, d, l]);
            return (0, s.useEffect)((() => {
              g(f)
            }), [f]), [u, g]
          })({
            ...a,
            size: r,
            title: t,
            expandedView: i
          }), g = void 0 !== c?.hasPricingOptions || null !== l;
          return (0, m.jsxs)("header", {
            className: "rockstargames-modules-core-newswire-articlecab36c59e0808c47183ef125bd12c511",
            "data-is-covercard": d,
            "data-expanded-view": i,
            children: [s.Children.map(n, (e => (0, s.cloneElement)(e, {
              title: t,
              size: r,
              expandedView: i
            }))), u, g && (0, m.jsxs)(m.Fragment, {
              children: [!0 === l?.hasPlatformOptions && (0, m.jsx)(A, {
                title: t,
                platformOptions: l,
                pricingOptions: c,
                setPricingContainerHeight: o,
                expandedView: i
              }), !0 === c?.hasPricingOptions && (0, m.jsx)(w, {
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
          transitions: P
        } = E,
        z = e => {
          let {
            components: a,
            payload: t,
            prod: r,
            size: c,
            title: l,
            initial: g = "initial",
            animate: f = "animate",
            variants: p,
            type: b = null,
            context: k = null,
            textOverlayProps: v,
            className: h,
            children: x,
            theme: _ = "none",
            id: y,
            pricingOptions: N,
            pricingContainerHeight: j,
            isCoverCard: S,
            platformOptions: T,
            isProductCard: C = !1
          } = e;
          const A = (0, s.useRef)(),
            E = (0, s.useRef)(),
            {
              tag: z,
              expandedHasTag: F,
              badges: V
            } = v;
          i().set(t, "meta.prod", r);
          const D = x?.props?.images.length > 0;
          let M = (0, m.jsx)("h1", {
            children: l
          });
          return S && (M = null), (0, s.useEffect)((() => {
            const e = () => {
              A.current && A.current.scrollTop > 0 && window.innerWidth >= window.innerHeight && (A.current.scrollTop = 0)
            };
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), []), (0, m.jsx)(d.DataLayerProvider, {
            card_id: y,
            card_name: l?.toLowerCase(),
            children: (0, m.jsx)(o.A, {
              threshold: [25, 50, 75, 90, 100],
              trackRef: "long" === b ? A : E,
              children: (0, m.jsxs)(L, {
                ref: A,
                initial: g,
                animate: f,
                variants: p.expanded,
                transition: P.cardOpen,
                className: (0, d.classList)("rockstargames-modules-core-newswire-articlec2289ce1bf0de6ad8a4a8ce7e90a4b66", h),
                "data-type": b,
                "data-size": c,
                "data-product": C,
                "data-covercard": S || !1,
                "data-context": k,
                style: {
                  "--product-card-pricing-info-height": `${j||0}px`
                },
                children: [D && (0, m.jsx)(I, {
                  size: c,
                  title: l,
                  textOverlayProps: v,
                  expandedView: !0,
                  pricingOptions: N,
                  platformOptions: T,
                  isCoverCard: S,
                  children: x
                }), (0, m.jsxs)(L, {
                  ref: E,
                  className: "rockstargames-modules-core-newswire-articlee461568802b56e8c21b8b82d9c3a1fb4",
                  variants: p.expandedContents,
                  transition: P.afterCardOpen,
                  "data-theme": _,
                  children: [(0, m.jsxs)("div", {
                    className: "rockstargames-modules-core-newswire-articlec4c35e83dbf962aa44c3f94b313361b3",
                    children: [(0, m.jsx)(u, {
                      hasTag: F,
                      tag: z,
                      badges: V
                    }), M, C && (0, m.jsxs)(m.Fragment, {
                      children: [!0 === T?.hasPlatformOptions && (0, m.jsx)("div", {
                        className: "rockstargames-modules-core-newswire-articlecd635452588eda421bdea19f00660efc",
                        children: (0, m.jsx)(u, {
                          hasTag: T?.hasPlatformOptions,
                          tag: T?._memoq?.platformTag,
                          tagStyle: T?._memoq?.platformTagStyle
                        })
                      }), !0 === N?.hasPricingOptions && (0, m.jsx)(w, {
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
      var F = t(89028),
        V = t(87782),
        D = t(98142),
        M = t(15310),
        $ = t.n(M),
        B = t(9623),
        O = t(81788),
        G = t(93075);
      const R = [null, () => null],
        H = (0, d.setContextItem)({
          context: (0, s.createContext)(R),
          key: "modalContext"
        }),
        U = JSON.parse('{"us":{"card_label_platforms":"{title} on {platformList}","card_label_platforms_tag":"{tag} {title} on {platformList}","card_label_tag":"{tag} {title}"},"de":{"card_label_platforms":"{title} auf {platformList}","card_label_platforms_tag":"{tag} {title} auf {platformList}","card_label_tag":"{tag} {title}"},"es":{"card_label_platforms":"{title} para {platformList}","card_label_platforms_tag":"{tag} {title} para {platformList}","card_label_tag":"{tag} {title}"},"mx":{"card_label_platforms":"{title} en {platformList}","card_label_platforms_tag":"{tag} {title} en {platformList}","card_label_tag":"{tag} {title}"},"fr":{"card_label_platforms":"{title} sur {platformList}","card_label_platforms_tag":"{tag} {title} sur {platformList}","card_label_tag":"{tag} {title}"},"it":{"card_label_platforms":"{title} su {platformList}","card_label_platforms_tag":"{tag} {title} su {platformList}","card_label_tag":"{tag} {title}"},"jp":{"card_label_platforms":"{platformList}版{title}","card_label_platforms_tag":"{tag} {platformList}版 {title}","card_label_tag":"{tag} {title}"},"kr":{"card_label_platforms":"{platformList}용 {title}","card_label_platforms_tag":"{tag} {platformList}용 {title}","card_label_tag":"{tag} {title}"},"pl":{"card_label_platforms":"{title} na {platformList}","card_label_platforms_tag":"{tag} {title} na {platformList}","card_label_tag":"{tag} {title}"},"br":{"card_label_platforms":"{title} para {platformList}","card_label_platforms_tag":"{tag} {title} para {platformList}","card_label_tag":"{tag} {title}"},"ru":{"card_label_platforms":"{title} на {platformList}","card_label_platforms_tag":"{title} ({tag}) на {platformList}","card_label_tag":"{title} ({tag})"},"hans":{"card_label_platforms":"{platformList} 上的 {title}","card_label_platforms_tag":"{tag} {platformList} 上的 {title}","card_label_tag":"{tag} {title}"},"tw":{"card_label_platforms":"{platformList} 上的 {title}","card_label_platforms_tag":"{tag} {platformList} 上的 {title}","card_label_tag":"{tag} {title}"}}'),
        q = (0, O.defineMessages)({
          card_label_platforms: {
            id: "card_label_platforms",
            defaultMessage: "{title} on {platformList}"
          },
          card_label_tag: {
            id: "card_label_tag",
            defaultMessage: "{tag} {title}"
          },
          card_label_platforms_tag: {
            id: "card_label_platforms_tag",
            defaultMessage: "{tag} {title} on {platformList}"
          }
        }),
        W = (0, O.withIntl)((e => {
          let {
            id: a,
            position: t,
            title: r,
            size: i = "md",
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
            cardIds: g = null,
            theme: f = "none",
            isCoverCard: p,
            platformOptions: b
          } = e;
          const {
            formatMessage: k,
            formatList: v
          } = (0, O.useIntl)(), [w, h] = (0, B.useSearchParams)(), x = (0, s.useRef)(null), [, _] = (0, s.useContext)(H), {
            track: y
          } = (0, G.h)(), [N, j] = (0, s.useState)(!1), S = window.location.href.includes("cms5"), T = () => {
            j(!1), _(null), S || h({}), y({
              event: "trackPageview"
            })
          }, C = () => {
            if (!o?.content || !x.current || !c || "linkout" === c) return;
            const e = x.current,
              s = window.getComputedStyle(e),
              n = parseInt(s.getPropertyValue("width"), 10),
              d = parseInt(s.getPropertyValue("height"), 10),
              l = e.getBoundingClientRect(),
              {
                content: m,
                className: u,
                contentClassName: p
              } = o,
              b = "fob" === i ? "fob" : "default";
            _({
              content: m,
              onClose: T,
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
                card_id: a,
                card_name: r?.toLowerCase(),
                position: t
              },
              aspectRatio: b,
              cardDimensions: {
                size: i,
                type: c
              }
            }), y({
              event: "trackPageview",
              link_url: window.location.href,
              card_id: a,
              card_name: r?.toLowerCase(),
              position: t
            })
          };
          (0, s.useEffect)((() => {
            N && C()
          }), [N]), (0, s.useEffect)((() => {
            j(w.get("info") === a)
          }), [w.get("info"), a]);
          const A = (0, s.useMemo)((() => {
            const e = b?._memoq?.platformTag || "";
            if (b?.platformsAndLinks?.length > 0) {
              const a = b?.platformsAndLinks?.map((e => {
                  let {
                    buttonText: a
                  } = e;
                  return a
                })),
                t = v(a, {
                  type: "conjunction"
                });
              return e ? k(q.card_label_platforms_tag, {
                tag: e,
                title: r,
                platformList: t
              }) : k(q.card_label_platforms, {
                title: r,
                platformList: t
              })
            }
            return e ? k(q.card_label_tag, {
              tag: e,
              title: r
            }) : r
          }), [b, r]);
          return p || "linkout" === c ? (0, m.jsx)("div", {
            ref: x,
            className: d,
            "data-size": i,
            "data-type": c,
            "data-product": u,
            role: "button",
            "aria-label": A,
            children: l
          }) : (0, m.jsx)("button", {
            ref: x,
            onClick: e => {
              e.preventDefault(), e.stopPropagation(), a ? h({
                info: a
              }) : C(), y({
                event: "card_click",
                element_placement: n?.toLowerCase(),
                position: t,
                card_id: a,
                card_name: r?.toLowerCase(),
                link_url: window.location.href
              })
            },
            className: d,
            "data-size": i,
            "data-type": c,
            "data-product": u,
            tabIndex: "linkout" !== c ? 0 : -1,
            "aria-label": A,
            type: "button",
            children: l
          })
        }), U),
        Q = {
          pillBtn: "rockstargames-modules-core-newswire-articlef3a91bbe53323354bc84e26197787c03",
          selected: "rockstargames-modules-core-newswire-articlea03c60979e8d6882b5b8ce0f0301b7e9",
          card: "rockstargames-modules-core-newswire-articlec49a3d41905733d6aa83dcd3463df7d5",
          content: "rockstargames-modules-core-newswire-articleb41eac21ba69f02fe26f8dafa8433207",
          expandedContent: "rockstargames-modules-core-newswire-articlefea5414b5f55420cfcd6c6ee12a393b3",
          text: "rockstargames-modules-core-newswire-articlee961062768d06292ff6cb598ae1c5e69",
          imageHolder: "rockstargames-modules-core-newswire-articled893e3eab0a5754bb28882ceb8de6b59",
          coverCardWrapper: "rockstargames-modules-core-newswire-articledd482c08ed9fdc5cef20f63dd6720e13"
        },
        Y = e => {
          let {
            payload: a,
            prod: t,
            images: r,
            size: i,
            title: c,
            initial: o,
            animate: d,
            variants: l,
            id: u,
            position: g,
            sectionTitle: f,
            expandedType: p,
            context: b,
            children: k,
            expandedCardContents: v,
            textOverlayProps: w = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            deckProps: h = {},
            modalProps: x = [],
            theme: _,
            cardIds: y,
            pricingOptions: N,
            platformOptions: j = null,
            pricingContainerHeight: S,
            isCoverCard: T = !1,
            isProductCard: C = !1
          } = e;
          const A = (0, n.useTinaComponents)(),
            I = (0, s.useMemo)((() => ({
              ...A,
              HTMLElement: F.A,
              ImageWithBadge: V.A,
              Carousel: D.A,
              GroupOfItems: $()
            })), [A]),
            L = (0, s.useMemo)((() => (0, m.jsx)(z, {
              type: p,
              components: I,
              payload: a,
              prod: t,
              images: r,
              size: i,
              title: c,
              context: b,
              textOverlayProps: w,
              initial: o,
              animate: d,
              variants: l,
              theme: _,
              cardIds: y,
              pricingOptions: N,
              id: u,
              pricingContainerHeight: S,
              isCoverCard: T,
              platformOptions: j,
              isProductCard: C,
              children: v
            })), [p, r, t, i, c, w, v, o, d, l, I, a, C]),
            E = [Q.card, T ? Q.coverCardWrapper : ""].join(" ");
          return (0, m.jsx)(W, {
            id: u,
            position: g,
            sectionTitle: f,
            title: c,
            size: i,
            expandedType: p,
            images: r,
            deckProps: h,
            modalProps: {
              content: L,
              ...x
            },
            className: E,
            isProductCard: C,
            cardIds: y,
            theme: _,
            isCoverCard: T,
            platformOptions: j,
            children: k
          })
        };
      var K = t(89950),
        X = t(89972);
      const J = {
          clrCollapsedCard: "rockstargames-modules-core-newswire-articleeba324832dbf8f56f76fddb1d358c572",
          cardContainer: "rockstargames-modules-core-newswire-articlea65bd0d9d5dcff98d39d50398a055863",
          cardInfo: "rockstargames-modules-core-newswire-articlece8cc9fec51fad1ccdcc9dbc3c0e7986",
          subtitle: "rockstargames-modules-core-newswire-articlec0d737e6798c3e0994f78b427cbe9a59",
          price: "rockstargames-modules-core-newswire-articleeededa1d68a7f78ab4c0ba86fcafcb01",
          newBadge: "rockstargames-modules-core-newswire-articlebfb0205000666e00e4263cf557c3382d",
          outOfStockBadge: "rockstargames-modules-core-newswire-articlef56e1440ab1dbcff414939617853e921",
          saleBadge: "rockstargames-modules-core-newswire-articleca0d7f9e641eae51d7819491f87acc5d",
          slashedPrice: "rockstargames-modules-core-newswire-articleef47a1b9aa928979141bb75952f93adb",
          storeInfo: "rockstargames-modules-core-newswire-articlead85da337b24dbf2f1aba7e75352217a",
          priceInfo: "rockstargames-modules-core-newswire-articleb678df03ded67dcee3c87ae543d6a5e5",
          cardDesc: "rockstargames-modules-core-newswire-articled175015429f8daa4f434fd9b81b1a2cb"
        },
        Z = e => {
          let {
            videoUrl: a,
            expandedType: t,
            children: s
          } = e;
          return a && "linkout" === t ? (0, m.jsx)(K.A, {
            to: a,
            children: s
          }) : s
        },
        ee = e => {
          let {
            className: a,
            cardType: t,
            title: s,
            image: r,
            subheader: i,
            subtitle: n,
            price: c,
            slashedPrice: o,
            badge: d = null,
            expandedType: l,
            videoUrl: u
          } = e;
          return (0, m.jsx)("div", {
            className: [J.clrCollapsedCard, a].join(" "),
            role: "button",
            tabIndex: 0,
            children: (0, m.jsx)(Z, {
              videoUrl: u,
              expandedType: l,
              children: (0, m.jsxs)("div", {
                className: J.cardContainer,
                "data-type": t,
                children: [(0, m.jsx)("div", {
                  className: J.cardMedia,
                  children: (0, m.jsx)(X.A, {
                    ...r
                  })
                }), (0, m.jsxs)("div", {
                  className: J.cardInfo,
                  children: [i && (0, m.jsx)("h6", {
                    children: i
                  }), (0, m.jsx)("h5", {
                    children: s
                  }), n && (0, m.jsx)("h6", {
                    className: J.subtitle,
                    children: n
                  }), "store" === t && (0, m.jsxs)("div", {
                    className: J.storeInfo,
                    children: [(0, m.jsx)("p", {
                      className: (() => {
                        switch (d) {
                          case "New":
                            return J.newBadge;
                          case "Sale":
                            return J.saleBadge;
                          case "Out of Stock":
                            return J.outOfStockBadge;
                          default:
                            return ""
                        }
                      })(),
                      children: d
                    }), (0, m.jsxs)("span", {
                      className: J.priceInfo,
                      children: [(0, m.jsx)("p", {
                        className: J.price,
                        children: c
                      }), (0, m.jsx)("p", {
                        className: J.slashedPrice,
                        children: o
                      })]
                    })]
                  })]
                })]
              })
            })
          })
        },
        ae = e => {
          let {
            expandedType: a,
            to: t,
            children: r,
            style: i,
            sectionTitle: n = "",
            id: c,
            cardTitle: o,
            position: d
          } = e;
          const {
            track: l
          } = (0, G.h)(), u = (0, s.useCallback)((() => {
            l({
              event: "card_click",
              link_url: t,
              card_id: c,
              card_name: o,
              element_placement: n.toLowerCase(),
              position: d
            })
          }), [n, t, c, o, n, d]);
          return "linkout" === a && t ? (0, m.jsx)(K.A, {
            to: t,
            style: i,
            target: t?.startsWith("http") ? "_blank" : "_self",
            onClick: u,
            children: r
          }) : r
        };
      var te = t(13916);
      const se = {
          layeredImageFrame: "rockstargames-modules-core-newswire-articlecfc6074d8b476125230142c79438a249",
          layered: "rockstargames-modules-core-newswire-articlea7a1d10cda2bf3de7960b4fadf2f7a4e",
          foreground: "rockstargames-modules-core-newswire-articled858cc29f8933cc96ea1b20f734c1796",
          imageMask: "rockstargames-modules-core-newswire-articled656190323ba10afc580adbf82303a8b",
          logo: "rockstargames-modules-core-newswire-articleca32213b5f72baeb68ba9a21ee8a295b",
          "sm-horizontal": "rockstargames-modules-core-newswire-articlef5ab2fbb234fc0631784968dc2b1da75"
        },
        {
          LiteMotion: re,
          Animations: ie
        } = c,
        {
          getVariant: ne,
          variants: ce,
          transitions: oe
        } = ie,
        de = e => {
          let {
            image: a,
            i: t,
            prod: s
          } = e;
          const {
            alt: r,
            src: i
          } = (0, te.S1)({
            ...a,
            prod: s
          });
          return (0, m.jsx)("img", {
            src: i.mobile,
            alt: r ?? "",
            style: {
              "--z-index": t
            }
          })
        },
        le = e => {
          let {
            images: a = [],
            className: t = "",
            prod: r = !1,
            expandedView: i = !1,
            style: n = {}
          } = e;
          const [c, o] = (0, s.useState)({
            height: window.innerHeight,
            width: window.innerWidth
          });
          (0, s.useEffect)((() => {
            function e() {
              o({
                height: window.innerHeight,
                width: window.innerWidth
              })
            }
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [c]);
          const l = (0, s.useMemo)((() => a?.length && 0 !== a.length ? a.map((e => (0, m.jsx)(re, {
            className: (0, d.classList)(se[e?.specialClass] ?? se.imageMask, se[e?.sizeClass], e?.className),
            variants: ne(e?.specialClass ?? "imageMask", i ? "expanded" : "collapsed"),
            initial: "initial",
            animate: "animate",
            transition: oe.cardOpen,
            children: (0, m.jsx)(de, {
              image: e,
              prod: r
            })
          }, e.key))) : null), [a, c, i, r]);
          return (0, m.jsx)(re, {
            className: (0, d.classList)(se.layeredImageFrame, a.length > 1 ? se.layered : se.flat, t),
            style: n,
            initial: ce.fade.in.initial,
            animate: ce.fade.in.animate,
            transition: oe.instantFade,
            "data-expanded-view": i,
            children: l
          })
        },
        me = {
          clrCardModalContent: "rockstargames-modules-core-newswire-articlef32476f7063f9c4104b440088ce4c4b0",
          expandedCard: "rockstargames-modules-core-newswire-articlef6cbada424337b1e6ccd75c5029db4c3",
          content: "rockstargames-modules-core-newswire-articlea0b99bca02f0c4de4ad0bf4e4bd02337",
          details: "rockstargames-modules-core-newswire-articlee642b377145369df07970f4d4feb3f25",
          calloutHeaders: "rockstargames-modules-core-newswire-articleebd11baf4f38deb4ff8d0662eb5a6862"
        },
        {
          variants: ue
        } = c.Animations,
        ge = e => {
          let {
            id: a,
            content: t,
            size: s = "clr",
            cardType: r = "release",
            title: i,
            subheader: c,
            subtitle: o,
            storeInfo: d = {},
            expandedType: l,
            to: u,
            image: g,
            deckProps: f,
            tina: p = {},
            position: b
          } = e;
          const k = (0, n.useTinaPayload)(),
            v = p?.payload?.meta?.cdn ?? k?.meta?.prod ?? !1,
            w = {
              image: {
                ...g,
                prod: v
              }
            },
            h = [g];
          return (0, m.jsx)(Y, {
            id: a,
            title: i,
            context: "clr-card",
            size: s,
            expandedType: l,
            images: w,
            deckProps: f,
            prod: v,
            position: b,
            modalProps: {
              className: me.clrCardModal,
              contentClassName: me.clrCardModalContent
            },
            variants: ue.plainCard,
            payload: {
              content: t
            },
            expandedCardContents: (0, m.jsx)(le, {
              images: h,
              prod: v
            }),
            children: (0, m.jsx)(ae, {
              expandedType: l,
              to: u,
              style: {
                display: "flex"
              },
              children: (0, m.jsx)(ee, {
                cardType: r,
                title: i,
                subheader: c,
                subtitle: o,
                image: w,
                expandedType: l,
                price: d?.price,
                slashedPrice: d?.slashedPrice,
                badge: d?.badge
              })
            })
          })
        };
      var fe = t(13647);
      const pe = e => {
        let {
          images: a,
          title: t,
          expandedView: r,
          variants: i,
          transition: n
        } = e;
        const c = (0, s.useMemo)((() => a && 0 !== a?.length ? a.map(((e, a) => e?.image?.sources ? (0, s.createElement)(V.A, {
          ...e,
          key: a,
          style: {
            "--object-position": e?.objectPosition ?? ""
          }
        }) : null)) : null), [a]);
        return !c?.length || c?.length < 1 ? null : 1 === c.length ? c : (0, m.jsx)(fe.A, {
          slideChildren: c,
          title: t,
          navigation: r,
          thumbsVisible: r,
          spaceBetween: 0,
          variants: i,
          transition: n
        })
      };
      var be = t(45757),
        ke = t.n(be),
        ve = t(89363);
      const we = {
          pillBtn: "rockstargames-modules-core-newswire-articlecf00b554598ff2d6e233a11c7c829c7d",
          selected: "rockstargames-modules-core-newswire-articlecbdd37e11b752cff831c5a96aeb7dbeb",
          customModalContent: "rockstargames-modules-core-newswire-articleecdc3da21cda9331cebe845898b7fa7b"
        },
        {
          transitions: he,
          variants: xe
        } = c.Animations;
      t(3225), t(46823);
      var _e = t(539);
      const ye = (e, a) => {
          let t = getComputedStyle(e).getPropertyValue(a);
          return t = t.replace("px", "").replace("rem", "").replace("em", ""), t = t.replace("vh", "").replace("vw", "").replace("vmin", "").replace("vmax", ""), t = t.replace("ms", "").replace("s", ""), Number(t)
        },
        Ne = e => ({
          x: void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
          y: void 0 !== e.changedTouches ? e.changedTouches[0].screenY : e.screenY
        }),
        je = e => e.scrollHeight > e.clientHeight;

      function Se(e, a) {
        const t = {
          ...e
        };
        return i().forOwn(e, ((e, s) => {
          if ("image" === s) {
            const e = t[s];
            t[s] = {
              ...e,
              prod: a
            }
          } else i().isObject(e) && !i().isArray(e) ? Se(e, a) : i().isArray(e) && (t[s] = e.map((e => i().isObject(e) ? Se(e, a) : e)))
        })), t
      }(0, d.withTranslations)((e => {
        let {
          active: a,
          styles: t,
          title: r,
          itemNumber: i,
          inModalMode: c,
          openModalMode: o,
          element: d,
          upNext: u,
          mobileMode: g,
          refDeck: f,
          components: p,
          tina: b,
          prevPage: k,
          nextPage: v,
          transitionStyle: w,
          selectedItemNumber: h,
          carouselTitle: x,
          sharedDraggingDelta: _,
          setSharedDraggingDelta: y
        } = e;
        const N = (0, O.useIntl)(),
          {
            track: j
          } = (0, G.h)(),
          S = (0, s.createRef)(),
          T = (0, s.createRef)(),
          C = (0, s.createRef)(),
          A = (0, s.createRef)(),
          I = (0, s.createRef)(),
          [L, E] = (0, s.useState)(!1),
          [P, z] = (0, s.useState)(0),
          [F, V] = (0, s.useState)(0),
          [D, M] = (0, s.useState)(0),
          [$, B] = (0, s.useState)(0),
          [R, H] = (0, s.useState)(0),
          [U, q] = (0, s.useState)(!1),
          [W, Q] = (0, s.useState)(0),
          [Y, K] = (0, s.useState)(0),
          [X, J] = (0, s.useState)(0),
          [Z, ee] = (0, s.useState)("700"),
          [ae, se] = (0, s.useState)(-1),
          [re, ie] = (0, s.useState)(0),
          [ne, ce] = (0, s.useState)(0),
          [oe, de] = (0, s.useState)(0),
          [le, me] = (0, s.useState)(!1),
          [ue, ge] = (0, s.useState)(""),
          [fe, pe] = (0, s.useState)(null),
          [be, ve] = (0, s.useState)(!1),
          [we, he] = (0, s.useState)(null),
          [xe, Te] = (0, s.useState)(!1),
          [Ce, Ae] = (0, s.useState)(!1),
          Ie = (0, n.useTinaPayload)(),
          Le = b?.payload?.meta?.cdn ?? !1 ?? Ie?.meta?.prod ?? !1,
          Ee = (0, n.useTranslations)({
            payload: b?.payload,
            variables: b?.variables
          }),
          Pe = Ee?.meta ?? {},
          ze = Se(Ee?.content?.[0], Le),
          Fe = (0, s.useMemo)((() => ze?.images?.[0]?.image?.badge), [ze]),
          Ve = (0, s.useMemo)((() => ze.title ?? r ?? Pe?.title), [r, Pe?.title, ze.title]),
          De = (0, te.S1)({
            alt: ze?.images?.[0]?.image?.alt ?? "",
            ariaLabel: ze?.images?.[0]?.image?.alt ?? "",
            sources: ze?.images?.[0]?.image?.sources ?? [],
            prod: Le
          }),
          Me = De?.src?.mobile ?? De?.src?.desktop ?? !1,
          $e = (0, s.useMemo)((() => Pe?.foreignId), [Pe]),
          Be = (0, s.useMemo)((() => Pe?.foreignTitle), [Pe]),
          [Oe, Ge] = (0, s.useState)(0),
          [Re, He] = (0, s.useState)(0),
          [Ue, qe] = (0, s.useState)(0),
          [We, Qe] = (0, s.useState)(0),
          [Ye, Ke] = (0, s.useState)(!1),
          [Xe, Je] = (0, s.useState)(0),
          [Ze, ea] = (0, s.useState)(20),
          [aa, ta] = (0, s.useState)(null),
          [sa, ra] = (0, s.useState)(!1);
        let ia = c ? -1 : 0;
        const na = (0, s.useCallback)((e => {
            if (!0 === U || !c && !g || be) return;
            const a = Ne(e);
            Ge(a.x), He(a.y)
          }), [U, c]),
          ca = e => {
            na(e)
          },
          oa = e => {
            if (!0 === U || 0 === Oe || !c && !g || be) return;
            const a = Ne(e),
              t = a.x > Oe ? 1 : -1,
              s = Math.abs(Oe - a.x);
            c && !g && s > Ze ? (ra(!0), ge(t > 0 ? "prev" : "next"), la()) : (Ke(!0), Je(s * t), y(s * t))
          },
          da = e => {
            if (!0 === U || !c && !g || be) return;
            const a = Ne(e),
              t = a.x > Oe ? 1 : -1,
              s = Math.abs(Oe - a.x),
              r = Math.abs(Re - a.y);
            c && !g ? (la(), ge("")) : s > Ze && r < 25 ? (ra(!0), ge(t > 0 ? "prev" : "next"), la()) : la()
          },
          la = () => {
            q(!0), Ge(0), He(0), Ke(!1), Je(0), y(0)
          },
          ma = e => {
            e ? (c || E(!0), c || g || (clearTimeout(ae), se(setTimeout((() => {
              j({
                event: "card_title_hover",
                card_name: Ve,
                card_id: i,
                position: i,
                view_name: `${$e}/${Be}`,
                source_content_id: $e,
                source_content_name: Be
              })
            }), 1e3)))) : (c || E(!1), c || g || clearTimeout(ae))
          };
        return (0, s.useEffect)((() => {
          let e = W;
          L ? e = 0 : c && !g && (e = W), z(e)
        }), [L, g, c, F, $, Y, X, D, W]), (0, s.useEffect)((() => {
          E(!(!c || !g))
        }), [c, g]), (0, s.useEffect)((() => {
          c && a && j({
            event: "virtualPageview",
            display_type: g ? "mobile" : "desktop",
            view_name: `${$e}/${Ve}`,
            source_content_id: $e,
            source_content_name: Be
          })
        }), [c, a]), (0, s.useEffect)((() => {
          const e = ke()(((e, a) => {
            let t = 18;
            if (e?.documentElement && (t = ye(e?.documentElement, "--root-font-size")), ne !== a.innerHeight && ce(a.innerHeight), f?.current) {
              J(ye(f.current, "--eventDeck-marginSm") * t);
              const e = t * ye(f?.current, "--eventDeck-modalGutters"),
                s = a?.innerWidth,
                r = s - 2 * e;
              V(r), A.current && g && M(r), B(ye(f.current, "--eventDeck-itemSize") * t), de(ye(f.current, "--eventDeck-phaseOneTransitionDuration"));
              const i = ye(f?.current, "--eventDeck-itemImageTitleMargins") * t,
                n = T?.current?.clientHeight,
                c = n + i;
              Number.isNaN(c) || Q(c), ie(ye(f?.current, "--eventDeck-headerHeight") * t)
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
          if (S.current) {
            const e = S.current.clientHeight;
            Number.isNaN(e) || K(e)
          }
        }), [S]), (0, s.useEffect)((() => {
          if (c && g && A.current && (A.current.style.transform = "scale(1) translate3d(0, 0, 0)"), !c && g && A.current) {
            const e = 228 / F;
            A.current.style.transform = `scale(${e}) translate3d(0, 0, 0)`
          }!g && A.current && (A.current.style.transform = null)
        }), [c, g, F, D]), (0, s.useEffect)((() => {
          const e = .5 * F,
            a = ne - re - 3 * X;
          H(F - (e < a ? e : a))
        }), [F, X, ne]), (0, s.useEffect)((() => {
          "next" === ue ? (v(null, !0), ge("")) : "prev" === ue && (k(null, !0), ge(""))
        }), [ue]), (0, s.useEffect)((() => {
          qe(0), Qe(0)
        }), [g]), (0, s.useEffect)((() => {
          g ? ea(c ? 35 : 20) : c && ea(50)
        }), [c, g]), (0, s.useEffect)((() => {
          let e = [],
            a = 0,
            s = 0;
          if (null !== t?.transform) {
            e = t.transform.split(",");
            const r = e[0].split("(");
            a = Number(r[1].replace("px", "")), qe(a), s = Number(e[1].replace("px", "")), Qe(s)
          }
        }), [t]), (0, s.useEffect)((() => {
          if (!U) return;
          clearTimeout(fe);
          const e = setTimeout((() => {
            q(!1), Ge(0)
          }), 200);
          pe(e)
        }), [U, 200]), (0, s.useEffect)((() => {
          if (!sa) return;
          clearTimeout(aa);
          const e = setTimeout((() => {
            ra(!1)
          }), 1e3);
          ta(e)
        }), [sa]), (0, s.useEffect)((() => {
          c && clearTimeout(ae), setTimeout((() => {
            me(!le)
          }), oe)
        }), [c]), (0, s.useEffect)((() => (document.body.addEventListener("mouseleave", la), () => {
          document.body.removeEventListener("mouseleave", la)
        })), []), (0, s.useEffect)((() => {
          I.current ? Te(je(I.current)) : Te(!1), void 0 !== d && d.current ? Ae(je(d.current)) : Ae(!1)
        }), [d, I, a, c, le]), ze ? (0, m.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articlec02ee363d47108460ab7916fc955cd9b",
          ref: d,
          "data-item-position": i,
          "data-modal-mode": c,
          "data-active-item": a,
          "data-up-next": u,
          "data-transition": Ye || 0 !== _ ? "none" : w,
          "data-scrollable": Ce,
          style: {
            ...t,
            transform: c && a && !g ? `translate3d(${Ue+Xe}px, ${We}px, 0)` : g && !c ? `translate3d(${Ue+_}px, ${We}px, 0)` : t?.transform
          },
          onClick: e => {
            sa || (c ? c && !g && (i < h ? k(e, !0) : i > h && v(e, !0)) : o(e))
          },
          onMouseEnter: () => ma(!0),
          onMouseLeave: () => ma(!1),
          onTouchStart: ca,
          onTouchMove: oa,
          onTouchEnd: da,
          onMouseDown: ca,
          onMouseMove: oa,
          onMouseUp: da,
          onKeyUp: e => {
            "Enter" === e.key && (c || o(e))
          },
          tabIndex: ia,
          "aria-label": c ? N.formatMessage(_e.Nr.events_deck_modal_group_label) : Ve,
          role: c ? "dialog" : "presentation",
          children: [(0, m.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articledee75b8e3614051c8f0fc97e373e78e5",
            "data-full-header": L,
            ref: C,
            style: {
              height: c && g ? `${F}px` : null,
              width: c && g ? `${F}px` : null
            },
            children: [Me && (0, m.jsx)("img", {
              ref: A,
              src: `${De?.src?.mobile??De?.src?.desktop}?im=Resize,width=${Z}`,
              alt: De?.alt,
              style: {
                width: 0 !== D && g ? `${D}px` : null,
                height: 0 !== D && g ? `${D}px` : null
              }
            }), (0, m.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articledc279f97c134d6e7d30602288b8b10ae",
              "aria-hidden": "true",
              style: {
                transform: !g || g && c ? `translate3d(0, ${P}px, 0)` : null
              },
              children: [Fe && (0, m.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlecfe252d5613a21c1d308c98566cabd21",
                ref: S,
                children: (0, m.jsx)(l.A, {
                  text: Fe
                })
              }), (0, m.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articleb311a78aea53383ab6bd5cbccb52ceeb",
                ref: T,
                "aria-hidden": "true",
                children: Ve
              })]
            })]
          }), (0, m.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articled212586e74ea4b4fe934beed9e339f78",
            ref: I,
            "aria-hidden": !c,
            onScroll: () => {
              ve(!0), la(), clearTimeout(we);
              const e = setTimeout((() => {
                ve(!1)
              }), 100);
              he(e)
            },
            style: {
              top: c && g ? `${F}px` : null,
              width: c && !g && a ? `${R}px` : null,
              touchAction: xe || g ? "unset" : "none"
            },
            children: [Ve && (0, m.jsx)("span", {
              className: "rockstargames-modules-core-newswire-articleda9ef865674c108ffd53cfab2ed2971a",
              children: Ve
            }), (0, m.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articleabad8b0c98a7216d91b672492397e6a6",
              children: (0, m.jsx)(n.TinaParser, {
                components: p,
                tina: {
                  meta: Pe,
                  payload: {
                    content: ze?.content
                  }
                }
              })
            })]
          })]
        }) : null
      }));
      const Te = {
          pillBtn: "rockstargames-modules-core-newswire-articleddaada7b150b18de710c9f77384c6537",
          selected: "rockstargames-modules-core-newswire-articleb4fbb4006fc27b899dac5e522ef574e3",
          customModalContent: "rockstargames-modules-core-newswire-articlefc96cdfdaeb2ad81b1b409fcb233657e",
          content: "rockstargames-modules-core-newswire-articlec65ddebc8ee2173143d87e1079f2455a"
        },
        {
          variants: Ce
        } = c.Animations;
      t(2006), t(60351), t(76214), t(26908), t(43243);
      const {
        variants: Ae
      } = c.Animations;
      var Ie = t(86090);
      var Le = t(37338),
        Ee = t(79945);
      const {
        Gen9CoreCarousel: Pe,
        framer: ze,
        useTinaModuleFetchByIds: Fe,
        withSimpleErrorBoundary: Ve
      } = Le, De = {
        Card: e => {
          let {
            id: a,
            title: t,
            content: r,
            size: i = "md",
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
            tina: g = {},
            position: f = 0,
            sectionTitle: p = "",
            theme: b,
            pricingOptions: k,
            cardIds: v,
            platformOptions: w = null
          } = e;
          const h = (0, n.useTinaPayload)(),
            x = g?.payload?.meta?.cdn ?? h?.meta?.prod ?? !1,
            [_, y] = (0, s.useState)(l?.size ?? i),
            [N, j] = (0, s.useState)(0),
            S = void 0 !== k?.hasPricingOptions || void 0 !== w?.hasPlatformOptions;
          return (0, s.useEffect)((() => {
            y(l?.size ?? i)
          }), [l?.size, i]), (0, m.jsx)(Y, {
            id: a,
            title: t,
            size: _,
            expandedType: c,
            images: d,
            deckProps: l,
            prod: x,
            payload: {
              content: r,
              meta: {}
            },
            variants: Ce.plainCard,
            textOverlayProps: o,
            modalProps: {
              className: Te.customModal,
              contentClassName: Te.customModalContent
            },
            expandedCardContents: (0, m.jsx)(le, {
              images: d,
              prod: x,
              expandedView: !0
            }),
            position: f,
            sectionTitle: p,
            theme: b,
            cardIds: v,
            pricingOptions: k,
            platformOptions: w,
            pricingContainerHeight: N,
            isProductCard: S,
            children: (0, m.jsx)(ae, {
              expandedType: c,
              to: u,
              sectionTitle: p,
              id: a,
              cardTitle: t,
              position: f,
              children: (0, m.jsx)("div", {
                className: Te.content,
                "data-product": S,
                children: (0, m.jsx)(I, {
                  title: t,
                  size: _,
                  textOverlayProps: o,
                  pricingOptions: k,
                  platformOptions: w,
                  setPricingContainerHeight: j,
                  children: (0, m.jsx)(le, {
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
            content: r,
            size: i = "md",
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
            payload: g,
            position: f = 0,
            sectionTitle: p = "",
            cardIds: b
          } = e;
          const k = (0, n.useTinaPayload)(),
            v = g ?? k,
            w = u?.payload?.meta?.cdn ?? v?.meta?.prod ?? !1,
            h = ((e, a) => e?.map((e => e?.image ? {
              ...e,
              image: {
                ...e.image,
                prod: a
              }
            } : e)))(d, w),
            [x, _] = (0, s.useState)(l?.size ?? i),
            {
              parent: y,
              main: N,
              thumbs: j
            } = xe?.cardWithImageGallery?.gallery ?? {};
          return (0, s.useEffect)((() => {
            _(l?.size ?? i)
          }), [l?.size, i]), (0, m.jsx)(Y, {
            id: a,
            position: f,
            sectionTitle: p,
            payload: {
              content: r,
              meta: {},
              payload: v
            },
            title: t,
            size: x,
            expandedType: c,
            images: h,
            deckProps: l,
            prod: w,
            variants: xe.cardWithImageGallery,
            textOverlayProps: o,
            modalProps: {
              className: we.customModal,
              contentClassName: we.customModalContent
            },
            expandedCardContents: (0, m.jsx)(pe, {
              images: h,
              title: t,
              navigation: !0,
              thumbsVisible: !0,
              variants: {
                parent: y,
                main: N,
                thumbs: j
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
                children: (0, m.jsx)(pe, {
                  images: h,
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
            badgeText: r
          } = e;
          const i = {
            ...(0, n.useTinaComponents)(),
            HTMLElement: F.A,
            UnorderedList: ve.A,
            ListItem: Ie.A
          };
          return (0, m.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articlecfa8d259e6ae05cd5f97d50306be5ffe",
            "data-size": s,
            children: (0, m.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articlea4a39548fac12526e8721ffa8813e66a",
              children: [r && (0, m.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlecf77e65e2af63ee114825607dde3d11e",
                children: r
              }), (0, m.jsxs)("div", {
                className: "rockstargames-modules-core-newswire-articlef903ce7e605696e1bc18c4bc22274a6e",
                children: [a && (0, m.jsx)("h3", {
                  children: a
                }), (0, m.jsx)(n.TinaParser, {
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
        },
        ...Le
      };
      var Me = function(e) {
        return e.extraSmall = "xs", e.small = "sm", e.medium = "md", e.large = "lg", e.extraLarge = "xl", e.frontOfBox = "fob", e.custom = "custom", e
      }(Me || {});
      const $e = ze.withFadeIn(Ve((e => {
        let {
          cards: a = [],
          size: t,
          name: r,
          title: c,
          description: o,
          disclaimer: d,
          customSlidesPerView: l = null,
          theme: u = "none",
          cardSizeBreakpoints: g = {},
          customAspectRatio: f = "3/1",
          titleBadge: p = null,
          id: b = ""
        } = e;
        const k = (0, s.useRef)(null),
          v = i().map(a, "id"),
          w = Fe({
            ids: v
          }),
          [h, x] = (0, s.useState)(l),
          [_] = (0, B.useSearchParams)(),
          [y, N] = (0, s.useState)(!1);
        (0, s.useEffect)((() => {
          let e;
          if (e = Me.frontOfBox, t === e) {
            const e = _.get("section");
            if (e && "games" === e && !y && (N(!0), k.current)) {
              const e = 100;
              window.scrollTo(0, k.current.offsetTop - e)
            }
          }
        }), []), (0, s.useEffect)((() => {
          if (!k.current) return;
          const e = () => {
            const e = l || window.getComputedStyle(k.current).getPropertyValue("--slides-per-view");
            x(e)
          };
          return window.addEventListener("resize", e), e(), () => {
            window.removeEventListener("resize", e)
          }
        }));
        const j = (0, s.useMemo)((() => {
          let e = 0;
          if (!w) return null;
          let a = "blank",
            s = !1;
          return w.forEach((e => {
            "cover-card" === e?.tina?.payload?.meta?.type && (a = e?.id, void 0 !== e?.tina?.payload?.content[0]?.excludeFromModal && (s = e.tina.payload.content[0].excludeFromModal))
          })), w.reduce(((r, o) => {
            if (o) {
              const {
                id: d,
                tina: l
              } = o, g = i().clone(l);
              i().set(g, "payload.meta.id", d);
              let f = v;
              f = v.filter((e => e !== a || e === a && !s)), r.push((0, m.jsx)(n.TinaParser, {
                components: De,
                tina: g,
                componentProps: {
                  deckProps: {
                    size: t
                  },
                  tina: g,
                  id: d,
                  position: e,
                  sectionTitle: c,
                  theme: u,
                  cardIds: f
                }
              }, d)), e += 1
            }
            return r
          }), [])
        }), [w, t]);
        return (0, m.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articlecf8eaaa96e41e0c9b5a5a1745ded9986",
          "data-theme": u,
          ref: k,
          id: b,
          children: [(0, m.jsx)(Pe, {
            description: o,
            size: t,
            cardSizeBreakpoints: g,
            slideChildren: j,
            title: c,
            name: r,
            customSlidesPerView: h,
            customAspectRatio: f,
            titleBadge: p,
            theme: u
          }), d && (0, m.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articled6d0f9d842469dec608825829148dff6",
            children: (0, m.jsx)("span", {
              className: "rockstargames-modules-core-newswire-articlee22c0580e1e1d2471b4ca2e60e6b900f",
              children: (0, m.jsx)(Ee.A, {
                html: d
              })
            })
          })]
        })
      })))
    },
    99973: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        Jsx0: () => i,
        Jsx1: () => P,
        Jsx2: () => M
      });
      var s = t(26213);
      var r = t(98096);
      const i = e => {
        let {
          article: a,
          children: t
        } = e;
        const i = a.primary_tags[a.primary_tags.length > 1 && 722 === a.primary_tags[0].id ? 1 : 0];
        return (0, r.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articlec853d8a152fed83cf33e0fc661cf8214",
          children: [(0, r.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlef7db33be003c658d5566777dc41b3d8d",
            children: [(0, r.jsxs)("h1", {
              children: [a.title, a.subtitle ? (0, r.jsx)("span", {
                children: a.subtitle
              }) : ""]
            }), (0, r.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articlec1fbf3067a1ce8e71e38d92093f62f88",
              children: [a.primary_tags.length ? (0, r.jsx)(s.A, {
                title: i.name,
                href: `/newswire?tag_id=${i.id}`
              }) : "", (0, r.jsx)("time", {
                dateTime: a.created,
                children: a.created_formatted
              })]
            }), a.posts_hero && "iframe" === a.posts_hero.type ? (0, r.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlebb59ee9d50a65d6978fff34966f65bf8",
              children: (0, r.jsx)("iframe", {
                src: a.posts_hero.hero
              })
            }) : "", (0, r.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlefd4ea03865b0f756d342c3eee228e9f8",
              dangerouslySetInnerHTML: {
                __html: a.content
              }
            })]
          }), t]
        })
      };
      var n = t(62229),
        c = t(94581),
        o = t.n(c),
        d = t(95966),
        l = t(17977),
        m = t(98142),
        u = t(87782),
        g = t(89950),
        f = t(43243),
        p = t(2006),
        b = t(1772),
        k = t(60351),
        v = t(89028),
        w = t(89972),
        h = t(71678),
        x = t(85932),
        _ = t(11079),
        y = t(29623),
        N = t(29428),
        j = t(47002),
        S = t(11308),
        T = t(89363),
        C = t(15310),
        A = t.n(C),
        I = t(64064),
        L = t.n(I),
        E = t(94644);
      const P = (0, d.withTranslations)((e => {
        let {
          article: a,
          children: t,
          t: i
        } = e;
        const c = (0, d.useLocale)(),
          C = {
            A: e => (0, r.jsx)(g.A, {
              ...e
            }),
            AnchorLink: e => (0, r.jsx)(E.AnchorLink, {
              ...e
            }),
            ArticleTag: e => (0, r.jsx)(s.A, {
              ...e
            }),
            AudioPlayer: e => (0, r.jsx)(l.A, {
              ...e
            }),
            Button: e => (0, r.jsx)(f.A, {
              ...e
            }),
            Carousel: e => (0, r.jsx)(m.A, {
              ...e
            }),
            Cta: e => (0, r.jsx)(p.A, {
              ...e
            }),
            Discounts: e => (0, r.jsx)(E.Discounts, {
              ...e
            }),
            Donate: e => (0, r.jsx)(E.Donate, {
              ...e
            }),
            FadeInContent: e => (0, r.jsx)(b.A, {
              ...e
            }),
            FontClip: e => (0, r.jsx)(E.FontClip, {
              ...e
            }),
            GamingRewards: e => (0, r.jsx)(E.GamingRewards, {
              ...e
            }),
            Gif: e => (0, r.jsx)(L(), {
              ...e
            }),
            Grid: e => (0, r.jsx)(k.A, {
              ...e
            }),
            GroupOfItems: e => (0, r.jsx)(A(), {
              ...e
            }),
            HeroImage: e => (0, r.jsx)(E.HeroImage, {
              ...e
            }),
            HTMLElement: e => (0, r.jsx)(v.A, {
              ...e
            }),
            ImageWithBadge: e => (0, r.jsx)(u.A, {
              ...e
            }),
            MultiSourceImage: e => (0, r.jsx)(w.A, {
              ...e
            }),
            NewswireFull: e => (0, r.jsx)(E.NewswireFull, {
              ...e
            }),
            Title: e => (0, r.jsx)(E.NewswireTitle, {
              ...e
            }),
            PctBar: e => (0, r.jsx)(E.PctBar, {
              ...e
            }),
            Podium: e => (0, r.jsx)(E.Podium, {
              ...e
            }),
            ResponsiveGridBox: e => (0, r.jsx)(h.A, {
              ...e
            }),
            ResponsiveGridItem: e => (0, r.jsx)(x.A, {
              ...e
            }),
            ResponsiveFlexBox: e => (0, r.jsx)(_.A, {
              ...e
            }),
            ResponsiveFlexItem: e => (0, r.jsx)(y.A, {
              ...e
            }),
            ResponsiveSection: e => (0, r.jsx)(N.A, {
              ...e
            }),
            ResponsiveImg: e => (0, r.jsx)(j.A, {
              ...e
            }),
            Separator: e => (0, r.jsx)(S.A, {
              ...e
            }),
            Tag: e => (0, r.jsx)(s.A, {
              ...e
            }),
            UnorderedList: e => (0, r.jsx)(T.A, {
              ...e
            })
          },
          I = a.posts_jsx.variables_us_defaulted,
          [P] = (0, n.useState)((0, r.jsx)(o(), {
            renderInWrapper: !1,
            bindings: {
              getArray: (e, a) => e[a],
              renderHtml: e => (0, r.jsx)("span", {
                dangerouslySetInnerHTML: {
                  __html: e
                }
              }, P),
              article: a,
              locale: c,
              t: i,
              variables: I
            },
            components: C,
            jsx: a.posts_jsx.markup,
            onError: e => {
              console.error(e)
            }
          }));
        return (0, r.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articlece2d8080309005e155e5422fd38faa5d",
          children: [P, t]
        })
      }));
      var z = t(92440),
        F = t(98654),
        V = t(87927),
        D = t(81788);
      const M = e => {
        let {
          children: a,
          payload: t,
          variablesKeys: s
        } = e, i = !1;
        i = !0;
        const [n] = (0, D.getLocale)(), c = e => {
          let {
            children: a
          } = e;
          return (0, r.jsx)(V.NP, {
            locale: n?.iso,
            colorScheme: "dark",
            defaultColorScheme: "dark",
            defaultContrastMode: "normal",
            defaultPlatformScale: "desktop",
            children: a
          })
        };
        return (0, r.jsx)(c, {
          children: (0, r.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articledad06d3570a3cd17332c2bfb19d8f611",
            children: [(0, r.jsx)(z.TinaParser, {
              tina: {
                payload: t,
                variables: {
                  keys: s
                }
              },
              components: F.componentsForTinaParser
            }), a]
          })
        })
      }
    },
    94644: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        AnchorLink: () => c,
        Discounts: () => A,
        Donate: () => P,
        Engagement: () => r(),
        EventInfo: () => W,
        FeaturedEventInfo: () => Q,
        FontClip: () => K,
        GamingRewards: () => ee,
        Gen9List: () => re,
        HeroImage: () => ie.A,
        NewswireFull: () => oe,
        NewswireTitle: () => H,
        PctBar: () => de,
        Podium: () => ue
      });
      var s = t(20206),
        r = t.n(s),
        i = t(62229),
        n = t(98096);
      const c = e => {
        let {
          children: a,
          hash: t
        } = e;
        const s = (0, i.useRef)(null),
          r = window.location.hash?.replace("#", "") === t ? t : null;
        return (0, i.useEffect)((() => {
          r && setTimeout((() => {
            const e = document.getElementById(r);
            e && e.scrollIntoView()
          }), 1e3)
        }), []), (0, n.jsx)("div", {
          ref: s,
          id: t,
          children: a
        })
      };
      var o = t(15310),
        d = t.n(o);
      const l = e => {
        let {
          items: a,
          columns: t = {},
          noCarousel: s = !1,
          noInfiniteScroll: r = !1,
          ...i
        } = e;
        const c = i?.style ?? {};
        return s && (t?.mobile && (c["--mobile-cols"] = t.mobile), t?.desktop && (c["--desktop-cols"] = t.desktop)), (0, n.jsxs)(n.Fragment, {
          children: [i.title && (0, n.jsx)("p", {
            className: "rockstargames-modules-core-newswire-articlebbdcc06cced1ed19baee825aacefee0b",
            children: i.title
          }), (0, n.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articleba7b5228b2134bc8563fe2a8f65ca885",
            children: [s && (0, n.jsx)(d(), {
              style: {
                ...c,
                "--grid-gap-dynamic": "2rem 0"
              },
              className: "rockstargames-modules-core-newswire-articlea225b2127250d1b0285289115c698451",
              renderTemplate: "standard",
              items: a,
              ...i
            }), !s && (0, n.jsx)(y, {
              items: a,
              noInfiniteScroll: r,
              perPage: 2,
              perPageMobile: 1
            })]
          })]
        })
      };
      var m = t(89972),
        u = t(89363),
        g = t(98142),
        f = t(87782),
        p = t(79889);
      const b = {
          limitedGrid: "rockstargames-modules-core-newswire-articled07881e40e8304c6a71f439189eaf726",
          gridCarousel: "rockstargames-modules-core-newswire-articled2a5e95f5d1614aef34b0ec5c2b7447d",
          limitedGridContent: "rockstargames-modules-core-newswire-articleef7041902f2c885a1e72e11068b88472",
          columnsDesktop2: "rockstargames-modules-core-newswire-articlef23776fba4cb02462ec7d4f659513b29",
          thirdLine: "rockstargames-modules-core-newswire-articleba521de069b7af801a2ce695f33cbcce",
          gridItem: "rockstargames-modules-core-newswire-articled7d79c7b10177f979b26b7a23f8ce275",
          columnsDesktop3: "rockstargames-modules-core-newswire-articled913dbb31f95159240657470a2d5f843",
          columnsDesktop4: "rockstargames-modules-core-newswire-articlef86c12578b1b364cfcf74e21ec26b8cf",
          extraDiv: "rockstargames-modules-core-newswire-articled4111fecce89d56df4c14b2046b9f96e",
          gridText: "rockstargames-modules-core-newswire-articlea0473db56227eedff7fa7b8caef70981",
          noTextFit: "rockstargames-modules-core-newswire-articlee4c624766c99d0bc6602652f0926cf66",
          coupons: "rockstargames-modules-core-newswire-articlef5e7daa5da737825dfb76d422e3fcc40",
          imageArea: "rockstargames-modules-core-newswire-articlefe28c5ef2a9b0db8497edb03e6abfd26",
          carouselOnMobile: "rockstargames-modules-core-newswire-articlea560549799c4dc8483f97da50f1981b6",
          imageAreaBg: "rockstargames-modules-core-newswire-articleeb7557efb1c2a51b525bb0eddad25f5e",
          carouselDesc: "rockstargames-modules-core-newswire-articlee9bfd17e6e24970ba255a08b588a037d"
        },
        k = e => {
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
        v = e => {
          let {
            items: a,
            noTextFit: t,
            type: s,
            carouselOnMobile: r,
            columns: c = {
              desktop: 3,
              mobile: 2
            }
          } = e;
          const [o, d] = (0, i.useState)(null), [l, m] = (0, i.useState)(3), u = (0, i.useRef)(null);
          return (0, i.useEffect)((() => {
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
            className: `${b.limitedGrid} ${r?b.carouselOnMobile:""}`,
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
                children: (0, n.jsxs)(k, {
                  to: e?.href ?? e?.to,
                  children: [!t && (0, n.jsx)(p.A, {
                    className: b.gridText,
                    min: 16,
                    max: 1e3,
                    mode: "single",
                    children: e.title
                  }), (0, n.jsx)("div", {
                    className: b.imageArea,
                    children: (0, n.jsx)(f.A, {
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
            }), r && (0, n.jsx)("div", {
              className: b.gridCarousel,
              children: (0, n.jsx)(g.A, {
                children: a.content.map(((e, a) => (0, n.jsxs)("div", {
                  children: [(0, n.jsx)("div", {
                    className: `${b.imageArea} ${b.imageAreaBg}`,
                    children: (0, n.jsx)(f.A, {
                      className: s ? b[s] : "",
                      image: e.image,
                      ariaLabel: e.ariaLabel,
                      badgeType: "badge2",
                      badge: e.badge
                    })
                  }), e.title && (0, n.jsx)("p", {
                    className: b.carouselDesc,
                    children: (0, n.jsx)(k, {
                      to: e?.href ?? e?.to,
                      children: e.title
                    })
                  })]
                }, a)))
              })
            })]
          })
        },
        w = e => {
          let {
            items: a = []
          } = e;
          if (!a.length) return null;
          let t = 0,
            s = 0;
          return a.map(((e, a) => {
            if (e.limitedList?.content || e.limitedGridList?.content) {
              const t = [];
              return e.limitedList?.content && t.push((0, n.jsx)(y, {
                items: e.limitedList.content,
                noInfiniteScroll: e?.noInfiniteScroll,
                perPage: e?.perPage
              }, e?.key ?? a)), e.limitedGridList?.content && t.push((0, n.jsx)(v, {
                columns: e.limitedGridList.columns,
                items: e.limitedGridList
              }, e?.key ?? a)), s++, (0, n.jsxs)("div", {
                children: [1 === s && (0, n.jsx)("div", {
                  className: "rockstargames-modules-core-newswire-articlee14aea44e0cd05cab3f737d9241c40cf",
                  children: (0, n.jsx)("div", {
                    className: "rockstargames-modules-core-newswire-articlecf8636d2845d410d7b3fdb9c5fd9f451"
                  })
                }), t]
              }, a)
            }
            if (e.discountsList?.content || e.discountsGridList?.content) {
              const s = [];
              return e.discountsList?.content && s.push((0, n.jsx)(y, {
                items: e.discountsList.content,
                noInfiniteScroll: e?.noInfiniteScroll,
                perPage: e?.perPage
              }, e?.key ?? a)), e.discountsGridList?.content && s.push((0, n.jsx)(v, {
                noTextFit: !0,
                carouselOnMobile: !0,
                type: e.type ?? e.discountsGridList.type,
                columns: e.discountsGridList.columns,
                items: e.discountsGridList
              }, e?.key ?? a)), e?.list && s.push((0, n.jsx)(u.A, {
                ...e
              })), t++, (0, n.jsxs)("div", {
                children: [1 === t && (0, n.jsx)("div", {
                  className: "rockstargames-modules-core-newswire-articleab089b387a91263ebf4e3e5f9457113c"
                }), s]
              }, a)
            }
            return null
          }))
        };
      var h = t(38621);
      const x = {
          wrapper: "rockstargames-modules-core-newswire-articlecf1f4a81a7b06d2f1741f014efccd835",
          discountsCarouselItem: "rockstargames-modules-core-newswire-articledbe871f29ce887fdb3633adfa3a508e3",
          fontUpdate: "rockstargames-modules-core-newswire-articleb9e436db9c819a6291277c1c3b14a102",
          discountsCarousel: "rockstargames-modules-core-newswire-articlee323ee7ef1389c61bd0f7f5edf7ae87f",
          singleImage: "rockstargames-modules-core-newswire-articleef61c1eb2ac13f1f00f9fbcf97b591d9"
        },
        _ = e => {
          let {
            wrapper: a,
            children: t,
            length: s
          } = e;
          return s > 1 ? a(t) : t
        },
        y = e => {
          let {
            items: a,
            noInfiniteScroll: t = !1,
            size: s = null,
            perPage: r = null,
            customSlidesPerView: c = null,
            style: o = {}
          } = e;
          const d = (0, i.useRef)(null),
            [l, m] = (0, i.useState)(null),
            [u, p] = (0, i.useState)(s);
          return (0, i.useEffect)((() => {
            !s && r && p(1 === r ? "lg" : "sm"), s || r || (p("lg"), console.error('Error: DiscountsCarousel expects a prop "size" in order to display the correct amount of slides. Defaulting to lg.'))
          }), [s, r]), (0, i.useEffect)((() => {
            if (!d.current) return;
            const e = () => {
              const e = c || window.getComputedStyle(d.current).getPropertyValue("--slides-per-view");
              m(e)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [d, c]), a.length ? (0, n.jsx)(_, {
            length: a.length,
            wrapper: e => (0, n.jsx)("div", {
              "data-size": u,
              ref: d,
              className: x.wrapper,
              children: (0, n.jsx)(g.A, {
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
              children: [(0, n.jsx)(f.A, {
                ariaLabel: e?.ariaLabel,
                image: e?.image ?? {
                  alt: e?.alt ?? "",
                  desktop: e?.img ?? null,
                  mobile: e?.imgMobile ?? null
                },
                badge: e?.badge ?? e?.image?.badge ?? e.discountTxt,
                splitter: e?.splitter ?? e?.image?.splitter,
                badgeType: "badgeSizeUpdate"
              }), (0, n.jsx)(h.A, {
                className: x.fontUpdate,
                item: e
              })]
            }, e?.key ?? t)))
          }) : (console.error('Error: DiscountsCarousel expects a prop "items" that contains an array of objects.'), null)
        };
      var N = t(60351),
        j = t(89028);
      const S = e => {
          let {
            items: a = [],
            style: t = {}
          } = e;
          return a.length ? (0, n.jsx)(N.A, {
            style: {
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
            }, e?.key ?? a) : e?.limitedList?.content ? (0, n.jsx)(y, {
              items: e.limitedList.content,
              noInfiniteScroll: e?.noInfiniteScroll,
              perPage: e?.perPage,
              size: e?.size
            }, e?.key ?? a) : e?.discountsGridList?.content ? (0, n.jsx)(l, {
              noCarousel: !0,
              columns: e.discountsGridList?.columns,
              items: e.discountsGridList.content
            }, e?.key ?? a) : e?.content ? (0, n.jsx)(j.A, {
              ...e,
              children: e.content
            }, e?.key ?? a) : e?.list ? (0, n.jsx)(u.A, {
              ...e
            }, e?.key ?? a) : void 0))
          }) : null
        },
        T = {
          area: "rockstargames-modules-core-newswire-articlec0f0f1d12bd9d73702d5518ddfeb248a",
          btmImg: "rockstargames-modules-core-newswire-articlef7d259739c10010bebbf5a4566021799",
          limitedTopImg: "rockstargames-modules-core-newswire-articlefc4ab7fde14e1466eb3397a40c26a8f0",
          topImg: "rockstargames-modules-core-newswire-articlee034ccf8bbda4129691cf7da53b87170"
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
              return (0, n.jsx)(S, {
                items: a,
                ...s
              });
            case "grid":
              return (0, n.jsx)(l, {
                items: a,
                ...s
              });
            default:
              return (0, n.jsx)(w, {
                items: a
              })
          }
        },
        A = e => {
          let {
            items: a,
            renderTemplate: t,
            style: s,
            ...r
          } = e;
          return (0, n.jsx)("div", {
            className: T.area,
            "data-context": "discounts",
            children: (0, n.jsxs)("div", {
              className: T.discountsContent,
              children: [(0, n.jsx)(C, {
                renderTemplate: t,
                items: a,
                props: r,
                style: s
              }), (0, n.jsx)("div", {
                className: T.btmImg
              })]
            })
          })
        };
      var I = t(2973),
        L = t.n(I);
      const E = {
          donate: "rockstargames-modules-core-newswire-articleca3a67499205086cce3ec4006dde027a",
          largePaddingSides: "rockstargames-modules-core-newswire-articlee9aa6553439a489ffff3140708eb84c9"
        },
        P = e => {
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
      var z = t(16188),
        F = t.n(z),
        V = t(92440),
        D = t(95966),
        M = t(64064),
        $ = t.n(M),
        B = t(31879),
        O = t.n(B),
        G = t(89950);
      const R = {
          title: "rockstargames-modules-core-newswire-articlea82cdf4d56d4fbadd86d56caf6b7da04",
          main: "rockstargames-modules-core-newswire-articleaf5256fb296a82d00fb900a2380a5d7f",
          breadcrumbs: "rockstargames-modules-core-newswire-articlea300b88d467c420e15084fc2eeeb1e09"
        },
        H = (0, D.withTranslations)((e => {
          let {
            children: a,
            intro: t,
            image: s = {},
            style: r = {},
            t: i,
            className: c = "",
            variant: o = null
          } = e, d = {};
          void 0 !== r.toggleInvertSeparator && (d = {
            "--breadcrumb-separator-filter-invert": r.toggleInvertSeparator ? "invert(0)" : "invert(1)"
          });
          const l = (0, D.useNewswirePost)(),
            m = {},
            u = m?.meta?.title ?? l?.title,
            g = m?.meta?.subtitle ?? l?.subtitle,
            f = g ? (0, n.jsx)("h3", {
              "data-context": "newswire-subtitle",
              children: g
            }) : "",
            p = [{
              text: i("Newswire"),
              to: "/newswire"
            }],
            {
              src: b
            } = (0, V.useImageParser)(s),
            k = (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)("time", {
                dateTime: l.created,
                children: l.created_formatted
              }), t ? (0, n.jsx)(h.A, {
                item: t
              }) : "", a]
            });
          l?.primary_tags?.length && p.push({
            text: l.primary_tags[0].name,
            to: `/newswire?tag_id=${l.primary_tags[0].id}`
          }), l?.secondary_tags?.length && p.push({
            text: l.secondary_tags[0].name,
            to: `/newswire?tag_id=${l.secondary_tags[0].id}`
          });
          const v = (0, n.jsx)("div", {
            className: R.breadcrumbs,
            children: p.map((e => (0, n.jsx)(G.A, {
              to: e.to,
              children: e.text
            }, e.to)))
          });
          return b?.desktop && (r.background = `url(${b.desktop}) center/cover no-repeat`), (0, n.jsx)("div", {
            className: [c, R.title].join(" "),
            style: {
              ...r,
              ...d
            },
            children: "separated" === o ? (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsxs)("header", {
                "data-context": "title",
                children: [v, (0, n.jsx)("h1", {
                  children: u
                })]
              }), (0, n.jsxs)("footer", {
                "data-context": "title",
                children: [f, k]
              })]
            }) : (0, n.jsxs)(n.Fragment, {
              children: [v, (0, n.jsxs)("div", {
                className: R.main,
                children: [(0, n.jsx)("h1", {
                  children: u
                }), f]
              }), k]
            })
          })
        })),
        U = {
          pillBtn: "rockstargames-modules-core-newswire-articlef5d4e8bec1c576430dea6b22ec107759",
          selected: "rockstargames-modules-core-newswire-articledb6bc6b6bcb510524004bd740d0e8ba9",
          event: "rockstargames-modules-core-newswire-articled2fab08f92d966e9f62ad805f1e15542",
          featured: "rockstargames-modules-core-newswire-articlebb5a0823d43098a1cc049f2296fcf49e",
          eventInfo: "rockstargames-modules-core-newswire-articlee4a137d11e066c1ea5b0c733d364311f",
          large: "rockstargames-modules-core-newswire-articlee94ea7e671124487acc1e1a38fe28560",
          videoWrapper: "rockstargames-modules-core-newswire-articledad6ecb3c2a7a4f228052b0e1bd38ed5"
        },
        q = e => {
          let {
            images: a
          } = e;
          return a?.length ? 1 === a.length ? (0, i.createElement)(f.A, {
            ...a[0],
            key: null
          }) : (0, n.jsx)(g.A, {
            items: a
          }) : null
        },
        W = e => {
          let {
            images: a,
            title: t,
            content: s,
            isFeatured: r = !1,
            className: c = null,
            videoInHeroProps: o,
            hideNewswireTitle: l = !1
          } = e;
          const m = (0, V.useTinaPayload)(),
            u = m?.meta?.prod ?? !1,
            g = (0, V.useTinaComponents)();
          F().set(m, "meta.prod", u);
          let p = o?.gifVideoProps?.hasVideoInHero || !1;
          const b = o?.htmlVideoProps?.id || !1,
            k = !!o?.htmlVideoProps?.hasHtmlVideoInHero && b;
          k && p && (p = !1);
          const v = void 0 === o || !p && !k,
            w = (0, i.useMemo)((() => ({
              ...g,
              HTMLElement: j.A,
              ImageWithBadge: f.A,
              GroupOfItems: d()
            })), [g]);
          return (0, n.jsxs)("div", {
            className: (0, D.classList)(U.event, c),
            children: [p && (0, n.jsx)("div", {
              className: U.videoWrapper,
              children: (0, n.jsx)($(), {
                hash: {
                  desktop: o?.gifVideoProps?.hash?.desktop,
                  mobile: o?.gifVideoProps?.hash?.mobile
                },
                loop: o?.gifVideoProps?.isLooping
              })
            }), k && b && (0, n.jsx)("div", {
              className: U.videoWrapper,
              children: (0, n.jsx)(O(), {
                autoplay: o?.htmlVideoProps?.autoPlay || !1,
                id: b
              })
            }), v && (0, n.jsx)(q, {
              images: a
            }), r && (0, n.jsx)(H, {}), (0, n.jsxs)("div", {
              className: U.eventInfo,
              children: [!r && !l && (0, n.jsx)("h3", {
                className: U.eventTitle,
                children: t
              }), (0, n.jsx)(V.TinaParser, {
                components: w,
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
        Q = e => (0, n.jsx)(W, {
          ...e,
          className: U.featured,
          isFeatured: !0
        }),
        Y = {
          clip: "rockstargames-modules-core-newswire-articleaf597db4ae39661b43752ca8aef0ea95",
          redTexture: "rockstargames-modules-core-newswire-articlea1e6c3732fbb497aa657efa3ba5f7aca",
          greyTexture: "rockstargames-modules-core-newswire-articlefb39d1c9eee482e2db4e0b343e1cb979"
        },
        K = e => {
          let {
            fontFamily: a = "inherit",
            fontBg: t,
            string: s
          } = e;
          return (0, n.jsx)("span", {
            style: {
              "--font-family-clip": a
            },
            className: [Y.clip, Y[t]].join(" "),
            children: s
          })
        };
      var X = t(71678),
        J = t(85932);
      const Z = {
          gamingWrapper: "rockstargames-modules-core-newswire-articledd734e4acaf9151080ed7586e4e639b7",
          gamingRewards: "rockstargames-modules-core-newswire-articlea9a31094bd3e441b534cc78d739c61ee",
          psPlus: "rockstargames-modules-core-newswire-articlea9ed6881a254587b0f62accd0a42f49b",
          rightSide: "rockstargames-modules-core-newswire-articleeb6155b649b94d394e88f6bd53a994c7",
          primeGamingSocialLogo: "rockstargames-modules-core-newswire-articled476570605bebe4274221d86cd4777b1",
          gtaPlus: "rockstargames-modules-core-newswire-articled890310a8a24e8315e93aad1c1f514eb",
          plus: "rockstargames-modules-core-newswire-articled692340ad550eab50b73f70580899379",
          listArea: "rockstargames-modules-core-newswire-articlea7bde69bf0b082d54fc3174a8cd8b920",
          psPlusDefaultImg: "rockstargames-modules-core-newswire-articleaaac34c5e0f54812ed6d3141047b44d5"
        },
        ee = e => {
          let {
            headline: a,
            plainImage: s,
            top: r,
            unorderedList: i,
            bottom: c,
            rewards: o = "primeGaming",
            style: d = {}
          } = e;
          const l = (0, D.useLocale)();
          return "primeGaming" === o && ["ru", "kr", "ko_kr", "ru_ru"].includes(l) ? null : (0, n.jsx)("div", {
            className: Z.gamingWrapper,
            children: (0, n.jsx)("div", {
              className: `${Z.gamingRewards} ${Z[o]}`,
              style: d,
              children: (0, n.jsxs)(X.A, {
                style: {
                  "--grid-align-items": "center",
                  "--grid-row-gap": "2rem"
                },
                children: [(0, n.jsxs)(J.A, {
                  children: [a && (0, n.jsx)("h3", {
                    children: a
                  }), "psPlus" === o && (0, n.jsx)("img", {
                    "aria-label": "Playstation Plus Benefit",
                    className: Z.primeGamingSocialLogo,
                    src: t(1983)
                  }), "primeGaming" === o && (0, n.jsx)("img", {
                    "aria-label": "Social Club | Prime Gaming",
                    className: Z.primeGamingSocialLogo,
                    src: t(29654)
                  }), "gtaPlus" === o && (0, n.jsx)("img", {
                    "aria-label": "GTA Plus",
                    className: Z.primeGamingSocialLogo,
                    src: t(68547)
                  }), r?.text && (0, n.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: r.text
                    }
                  }), i?.list && (0, n.jsx)("div", {
                    className: Z.listArea,
                    children: (0, n.jsx)(u.A, {
                      className: "gtaPlus" === o ? Z.plus : "",
                      ...i,
                      list: i.list,
                      ...i?.attributes
                    })
                  }), c?.text && (0, n.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: c.text
                    }
                  })]
                }), (0, n.jsx)(J.A, {
                  className: Z.rightSide,
                  children: s?.image ? (0, n.jsx)(m.A, {
                    image: s.image
                  }) : (0, n.jsx)("div", {
                    className: Z.psPlusDefaultImg
                  })
                })]
              })
            })
          })
        };
      var ae = t(29131),
        te = t(23375),
        se = t(11015);
      const re = e => {
        let {
          backgroundImages: a,
          deckHash: t = "",
          perPage: s = null
        } = e;
        const [r, c] = (0, i.useState)(null), o = (0, V.useGetCdnSource)(a?.backgroundImg?.full_src ?? null), d = (0, V.useGetCdnSource)(a?.layeredImg?.full_src ?? null), l = (0, i.useRef)(null), {
          data: m,
          error: u
        } = (0, D.useQuery)(se.TinaModulesInfo, {
          variables: {
            ids: t
          },
          skip: !t
        });
        return (0, i.useEffect)((() => {
          if (m?.tinaModulesInfo) {
            const e = m.tinaModulesInfo[0],
              {
                id: a,
                tina: t
              } = e,
              s = F().clone(t);
            F().set(s, "payload.meta.id", a), c(s)
          }
        }), [m]), m && r ? u ? (0, n.jsx)(te.A, {
          error: u
        }) : (0, n.jsx)("div", {
          className: "rockstargames-modules-core-newswire-articlea2287392a6363add6fc77a246fc467ce",
          ref: l,
          style: {
            "--background-image": `url(${o})`,
            "--layered-image": `url(${d})`,
            "--slides-per-view-desktop": s
          },
          children: (0, n.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articleef8574282ec987f2460a951505ca5ef7",
            children: [d ? (0, n.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articleaa9b5909de87ec85fc53e12a7f9ca2d5"
            }) : "", (0, n.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlee3ff669c62cc2088728385fb58ef2969",
              children: (0, n.jsx)(V.TinaParser, {
                components: {
                  Deck: ae.E$
                },
                tina: r
              })
            })]
          })
        }) : null
      };
      var ie = t(96618),
        ne = t(97384),
        ce = t.n(ne);
      const oe = e => {
          let {
            children: a,
            className: t = "",
            style: s,
            game: r
          } = e;
          return (0, i.useEffect)((() => {
            document.fonts.ready.then((() => {
              ce().balanceText()
            }))
          }), [a]), (0, n.jsx)("div", {
            className: ["newswireFull", r, t].join(" "),
            style: s,
            "data-game": r,
            children: a
          })
        },
        de = e => {
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
              className: "rockstargames-modules-core-newswire-articleb271a7a9b503a732ecc3de9eb27d11c8",
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
      var le = t(47002),
        me = t(29428);
      const ue = e => {
        let {
          title: a,
          desc: t,
          img: s,
          imgMobile: r,
          bgColor: i,
          descPositionBottom: c,
          fontColor: o = "#fff"
        } = e;
        return (0, n.jsxs)(n.Fragment, {
          children: [c ?? (0, n.jsx)(me.A, {
            style: {
              backgroundColor: `${i}`,
              "--padding-top-bottom": "1.75rem"
            },
            className: "normalPaddingTopBottom largePaddingSides",
            children: (0, n.jsxs)(me.A, {
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
          }), (0, n.jsxs)(me.A, {
            className: [c ?? "spacing"].join(" "),
            children: [(0, n.jsx)(le.A, {
              className: "hiddenMobile",
              src: s
            }), (0, n.jsx)(le.A, {
              className: "hiddenLarge",
              src: r
            })]
          }), c ? (0, n.jsx)(me.A, {
            style: {
              backgroundColor: `${i}`,
              "--padding-top-bottom": "1.75rem"
            },
            className: "normalPaddingTopBottom largePaddingSides spacing",
            children: (0, n.jsxs)(me.A, {
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
    17977: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => g
      });
      var s = t(62229),
        r = t(97712),
        i = t.n(r),
        n = t(95966),
        c = t(65211);
      const o = {
        player: "rockstargames-modules-core-newswire-articlec7765dd7dbdff24d38ef3326bb8a938b",
        fixedToBottom: "rockstargames-modules-core-newswire-articleea802f7f67d39cfdd9625cc8de62828f",
        tracksOpen: "rockstargames-modules-core-newswire-articlea9a553961300b8ee030d0c90ac613c4c",
        tracks: "rockstargames-modules-core-newswire-articleb4036f5fe1d1ab9674cc7c6e40f9a53c",
        iconBurger: "rockstargames-modules-core-newswire-articlea18e526e94dfd87e9b5696a21c1c7754",
        trackList: "rockstargames-modules-core-newswire-articlec7dfe95abfbec1cdef9dfb87d9fd1a1f",
        trackActive: "rockstargames-modules-core-newswire-articlea74e95cb6296abf8ca92168db76fecb9",
        trackTitle: "rockstargames-modules-core-newswire-articleeceb3183ee9dc74e33d4184b307ba923",
        trackIndex: "rockstargames-modules-core-newswire-articled0322571401b3a4dac22628533213ede",
        controls: "rockstargames-modules-core-newswire-articleadd02ff2cfa9b26941d96126a31bc21f",
        controlsCurrentBg: "rockstargames-modules-core-newswire-articlecca0f086505f02983f345dfb64c2ca45",
        controlsCurrentBgVisible: "rockstargames-modules-core-newswire-articleb91004149be94449c7fbfee3d24bde58",
        controlsTrack: "rockstargames-modules-core-newswire-articleff717d7c9ac30041034f2c95fd3e3017",
        controlsTrackTitle: "rockstargames-modules-core-newswire-articlef47edf112978c82a9bbfb2476170007f",
        controlsTrackAnimating: "rockstargames-modules-core-newswire-articlef09973ae8e0457805bc0a1090d05e444",
        scrollText: "rockstargames-modules-core-newswire-articleb42c9e9ba3716121d34600c92fdf4398",
        controlsTrackArtist: "rockstargames-modules-core-newswire-articlee0b6ffdc4c40a6992d70395cd98cb6c5",
        controlsTrackBurger: "rockstargames-modules-core-newswire-articlef3106c22742d7b08e577964a56789504",
        controlsButtons: "rockstargames-modules-core-newswire-articlee77442300b4509fe7a0104b3fb4cecf5",
        controlsScrub: "rockstargames-modules-core-newswire-articlef90cfd862377d31cb5ee1faf9249fd3c",
        controlsPlayPause: "rockstargames-modules-core-newswire-articlec58746be839199f6102319efb7659a54",
        controlsPlayPausePlaying: "rockstargames-modules-core-newswire-articlececadc2b92a0597a55ba5870b46706c9",
        controlsNextTrack: "rockstargames-modules-core-newswire-articlecd583d32f7692538f7f5d1181943c899",
        controlsPrevTrack: "rockstargames-modules-core-newswire-articled84e8c03d27a3038eb54cb7d12c8ac52",
        controlsScrubTrack: "rockstargames-modules-core-newswire-articlef4bb886e9545730ccc323f43a1dfb45c"
      };
      var d = t(98096);
      const l = e => {
          let {
            src: a
          } = e;
          return (0, d.jsx)("div", {
            className: o.cover,
            style: {
              background: `url(${a}) center/cover`
            }
          })
        },
        m = e => {
          let {
            timing: a = {
              current: 0,
              duration: 0
            },
            playing: t,
            audioRef: r,
            setPlaying: n,
            tracksOpen: c,
            setTracksOpen: l,
            trackData: m,
            setTrackId: u,
            trackBounds: g,
            setAutoNext: f
          } = e;
          const p = (0, s.useRef)(null),
            b = (0, s.useRef)(null),
            k = (0, s.useRef)(null),
            [v, w] = (0, s.useState)(null),
            [h, x] = (0, s.useState)(!1),
            _ = e => {
              const a = new Date(1e3 * e),
                t = a.getUTCMinutes(),
                s = a.getSeconds();
              return `${t.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`
            };
          return (0, s.useEffect)((() => {
            if (!b.current || !k.current) return;
            const e = () => {
              k.current && b.current && w(k.current.clientWidth > b.current.clientWidth)
            };
            return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e)
          }), [k, b, a]), (0, s.useEffect)((() => {
            if (!p.current || !a?.duration) return;
            let e = null;
            const t = new(i())(p.current),
              s = e => {
                if (p.current) {
                  const t = p.current.clientWidth;
                  if (!p.current.contains(e.srcEvent.target)) return;
                  const s = Math.max(0, e.srcEvent.offsetX),
                    i = Number(s / t * a.duration);
                  r.currentTime = i
                }
              },
              n = () => {
                e ? r.pause() : r.play()
              },
              c = () => {
                e = r.paused, r.pause()
              };
            return t.on("panstart", c), t.on("panleft", s), t.on("panright", s), t.on("panend", n), t.on("tap", s), () => {
              t.off("panstart", c), t.off("panleft", s), t.off("panright", s), t.off("panend", n), t.off("tap", s)
            }
          }), [p.current, a.duration]), (0, s.useEffect)((() => {
            const e = Number(r?.currentTime);
            (t || !isNaN(e) && 0 !== e) && x(!0)
          }), [t, r?.currentTime]), (0, d.jsxs)("div", {
            className: o.controls,
            style: {
              "--track-color": m.color,
              "--track-mix-blend-mode": m.mix_blend_mode,
              "--current-pct": a.current / a.duration
            },
            children: [(0, d.jsx)("div", {
              className: [o.controlsCurrentBg, h ? o.controlsCurrentBgVisible : ""].join(" ")
            }), (0, d.jsx)("div", {
              className: o.controlsTrack,
              ref: b,
              children: (0, d.jsx)("span", {
                className: [o.controlsTrackTitle, v ? o.controlsTrackAnimating : ""].join(" "),
                ref: k,
                children: m.title
              })
            }), (0, d.jsxs)("div", {
              className: o.controlsButtons,
              children: [(0, d.jsx)("div", {
                className: o.controlsPrevTrack,
                onClick: () => {
                  g && (u(g[0]), f(!0), n(!0))
                }
              }), (0, d.jsx)("div", {
                className: [o.controlsPlayPause, t ? o.controlsPlayPausePlaying : ""].join(" "),
                onClick: () => {
                  n(!t)
                }
              }), (0, d.jsx)("div", {
                className: o.controlsNextTrack,
                onClick: () => {
                  g && (u(g[1]), f(!0), n(!0))
                }
              })]
            }), (0, d.jsx)("div", {
              active: c ? "" : null,
              className: o.controlsTrackBurger,
              children: (0, d.jsx)("div", {
                className: o.iconBurger,
                onClick: () => {
                  l(!c)
                }
              })
            }), (0, d.jsxs)("div", {
              className: o.controlsScrub,
              children: [(0, d.jsx)("span", {
                children: _(a.current)
              }), (0, d.jsx)("div", {
                className: o.controlsScrubTrack,
                ref: p
              }), (0, d.jsx)("span", {
                children: _(a.duration)
              })]
            })]
          })
        },
        u = e => {
          let {
            tracks: a,
            trackId: t,
            setTrackId: s,
            tracksOpen: r,
            setTracksOpen: i,
            setPlaying: n,
            setAutoNext: c
          } = e;
          return (0, d.jsxs)("div", {
            className: o.tracks,
            children: [(0, d.jsx)("h4", {
              children: "Tracks"
            }), (0, d.jsx)("div", {
              className: o.trackBurger,
              onClick: () => {
                i(!r)
              }
            }), (0, d.jsx)("div", {
              className: o.trackList,
              children: a.map(((e, a) => (0, d.jsxs)("a", {
                style: {
                  "--highlight-color": e.color
                },
                className: t === e.id ? o.trackActive : "",
                onClick: () => {
                  s(e.id), n(!0), c(!0)
                },
                children: [(0, d.jsx)("span", {
                  className: o.trackIndex,
                  children: String(a + 1).padStart(2, "0")
                }), (0, d.jsx)("span", {
                  className: o.trackTitle,
                  children: e.title
                }), (0, d.jsx)("span", {
                  className: o.trackTime,
                  children: e.duration
                })]
              }, e.id)))
            })]
          })
        },
        g = e => {
          let {
            id: a,
            className: t = ""
          } = e;
          const {
            data: r
          } = (0, n.useQuery)(c.GetAudioAlbum, {
            variables: {
              id: a
            }
          }), [i, g] = (0, s.useState)(), [f, p] = (0, s.useState)(), [b, k] = (0, s.useState)(), [v, w] = (0, s.useState)(!1), [h, x] = (0, s.useState)(!1), [_, y] = (0, s.useState)(new HTMLAudioElement), [N, j] = (0, s.useState)({
            current: 0,
            duration: 0
          }), [S, T] = (0, s.useState)(!0);
          return (0, s.useEffect)((() => {
            const e = "audio",
              a = a => {
                a?.data?.rockstarAudioPlayerPlayTrackId && (p(a.data.rockstarAudioPlayerPlayTrackId), T(!1), x(!0)), h && a?.data?.attentionBlurredElsewhere && a?.data?.from !== e && x(!1)
              };
            return h && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: e
            }), window.addEventListener("message", a, !1), () => window.removeEventListener("message", a, !1)
          }), [h]), (0, s.useEffect)((() => {
            if (!_) return;
            const e = () => {
                isNaN(_.duration) || j({
                  duration: _?.duration ?? 0,
                  current: _?.currentTime ?? 0
                })
              },
              a = () => {
                S && i && p(i[1])
              };
            return _.addEventListener("loadedmetadata", e), _.addEventListener("timeupdate", e), _.addEventListener("ended", a), () => {
              _.removeEventListener("loadedmetadata", e), _.removeEventListener("timeupdate", e), _.removeEventListener("ended", a)
            }
          }), [_, i, S]), (0, s.useEffect)((() => {
            h && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: "audio"
            })
          }), [h]), (0, s.useEffect)((() => {
            _ && (h ? _.play() : _.pause(), w(!1))
          }), [h, _, b?.id]), (0, s.useEffect)((() => {
            if (!f) return;
            const {
              tracks: e
            } = r.audioAlbum, a = r.audioAlbum.tracks.findIndex((e => e.id === f));
            g([e[a - 1]?.id ?? e[e.length - 1].id, e[a + 1]?.id ?? e[0].id]), k(e[a])
          }), [f]), (0, s.useEffect)((() => {
            r && p(r.audioAlbum.tracks[0].id)
          }), [r]), b ? (0, d.jsxs)("div", {
            className: [o.player, o[t], v ? o.tracksOpen : ""].join(" "),
            children: [(0, d.jsx)("audio", {
              ref: e => {
                y(e)
              },
              src: b.mp3_src
            }), (0, d.jsx)(u, {
              tracks: r.audioAlbum.tracks,
              setTrackId: p,
              trackId: f,
              tracksOpen: v,
              setTracksOpen: w,
              setPlaying: x,
              setAutoNext: T
            }), (0, d.jsx)(l, {
              src: b.cover_src
            }), (0, d.jsx)(m, {
              setTrackId: p,
              trackBounds: i,
              tracksOpen: v,
              setTracksOpen: w,
              playing: h,
              setPlaying: x,
              timing: N,
              trackData: b,
              audioRef: _,
              setAutoNext: T
            })]
          }) : null
        }
    },
    76214: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => p
      });
      var s = t(62229),
        r = t(44498),
        i = t(95966),
        n = t(93075),
        c = t(50828),
        o = t(43243),
        d = t(98096);
      const l = e => {
          let {
            className: a
          } = e;
          return (0, d.jsxs)("svg", {
            className: a,
            width: "16",
            height: "17",
            viewBox: "0 0 16 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, d.jsx)("path", {
              d: "M3.33203 8.5H12.6654",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, d.jsx)("path", {
              d: "M8 3.83331L12.6667 8.49998L8 13.1666",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })]
          })
        },
        m = {
          pillBtn: "rockstargames-modules-core-newswire-articlec881ff12d1d9fb612b4ddd89178684e4",
          selected: "rockstargames-modules-core-newswire-articledece7a2abb867cf09add3f7429e7383b",
          calloutContainer: "rockstargames-modules-core-newswire-articlee8b19ed9af6aedef68997370cd508539",
          calloutSection: "rockstargames-modules-core-newswire-articleab742f2f5b6947ec0b2facff923a076f",
          calloutHeaders: "rockstargames-modules-core-newswire-articlee86d59dd2e0ab3c594c33eccde3e8fea",
          calloutHeaderMargins: "rockstargames-modules-core-newswire-articled7d4d815f9e36b62ef54befcc89ca296",
          calloutHeader: "rockstargames-modules-core-newswire-articlefb0bbc5bcc4fb2c7d0b8152001df0497",
          calloutSubheader: "rockstargames-modules-core-newswire-articlef5fe27da672cf05e64359ada500a6b7a",
          calloutVoteForm: "rockstargames-modules-core-newswire-articleb5e2fa8800d39c78682d9ce8ce5e53f8",
          voteButton: "rockstargames-modules-core-newswire-articleecdf609ed8d6c4039be969205b7e3ac0",
          upvote: "rockstargames-modules-core-newswire-articlef8d6a685395153161827b5cf8c6ddb93",
          downvote: "rockstargames-modules-core-newswire-articleb1953057e462cdf6c79a4b8e6f2fe91b",
          active: "rockstargames-modules-core-newswire-articleec9f200e6987aebf6375c999eecd5dc3",
          calloutButton: "rockstargames-modules-core-newswire-articleb8ed029eb7d9b09c70caa4576bbb4c5a",
          calloutLink: "rockstargames-modules-core-newswire-articlebc07ececd6531f5df1c8cba48c846797",
          calloutLinkIcon: "rockstargames-modules-core-newswire-articledb31e98c20de15e8d5983285bd6ec92e",
          actionBlock: "rockstargames-modules-core-newswire-articleb1516576d0566f12c906be9e81407ce4",
          actionFooter: "rockstargames-modules-core-newswire-articlef713e165e153987c3855d93dc1614f4d"
        },
        u = e => {
          let {
            foreign_id: a,
            foreign_type: t
          } = e;
          const {
            track: r
          } = (0, n.h)(), {
            refetch: o
          } = (0, i.useQuery)(c.UserGetVote, {
            skip: !0
          }), [l] = (0, i.useMutation)(c.UserCastVote), [u, g] = (0, s.useState)(null), f = (0, s.useCallback)((e => {
            (async () => {
              if (e === u && null !== u) g(null);
              else {
                g(e), r({
                  event: "cta_" + (e ? "like" : "dislike"),
                  text: `${t} ${a}`
                });
                const s = {
                  foreignId: a,
                  foreignType: t,
                  vote: e
                };
                await l({
                  variables: s
                })
              }
            })()
          }), [a, t, u]);
          return (0, s.useEffect)((() => {
            a && t && (async () => {
              const e = await o({
                foreignId: a,
                foreignType: t
              });
              g(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [a, t]), (0, d.jsxs)("div", {
            className: m.calloutVoteForm,
            children: [(0, d.jsx)("button", {
              "aria-label": "upvote",
              className: [m.upvote, m.voteButton, u ? m.active : ""].join(" "),
              name: "upvote",
              onClick: () => f(!0),
              type: "button"
            }), (0, d.jsx)("button", {
              "aria-label": "downvote",
              className: [m.downvote, m.voteButton, !1 === u ? m.active : ""].join(" "),
              name: "downvote",
              onClick: () => f(!1),
              type: "button"
            })]
          })
        },
        g = e => {
          let {
            action_text: a,
            link: t,
            trackingData: s
          } = e;
          const {
            track: r
          } = (0, n.h)();
          return (0, d.jsx)("a", {
            href: t,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, d.jsxs)("button", {
              className: m.calloutLink,
              type: "button",
              onClick: s ? () => r({
                ...s
              }) : () => {},
              children: [a, (0, d.jsx)(l, {
                className: m.calloutLinkIcon
              })]
            })
          })
        },
        f = e => {
          let {
            helperText: a,
            linkText: t,
            link: s,
            trackingData: r
          } = e;
          const {
            track: i
          } = (0, n.h)();
          return (0, d.jsxs)("div", {
            className: m.actionFooter,
            children: [a, t && " ", t && (0, d.jsx)("a", {
              href: s ?? "",
              onClick: () => i({
                ...r
              }),
              children: t
            })]
          })
        },
        p = (0, i.withTranslations)((e => {
          let {
            header: a,
            subheader: t,
            type: i,
            action_text: c,
            link: l,
            foreign_id: p = document.location.pathname,
            foreign_type: b = "url",
            className: k = "",
            actionFooterHelperText: v,
            actionFooterLinkText: w,
            actionFooterLink: h,
            trackingData: x = {},
            actionFooterLinkTrackingData: _ = {},
            t: y,
            ...N
          } = e;
          const {
            loggedIn: j
          } = (0, n.Wx)(), {
            track: S
          } = (0, n.h)(), T = `${document.location.origin}/auth/sc-auth-login?returnUrl=${window.location.pathname}`, {
            ref: C,
            inView: A
          } = (0, r.Wx)({
            threshold: .6
          }), [I, L] = (0, s.useState)(!1);
          let E;
          if ((0, s.useEffect)((() => {
              A && !I && (S({
                event: "page_section_impression",
                element_placement: `callout section - ${N?.sectionName??N?._memoq?.header}`
              }), L(!0))
            }), [A]), !a && !t) return null;
          switch (i) {
            case "vote":
              if (!j) {
                E = (0, d.jsx)(o.A, {
                  to: T,
                  className: m.calloutButton,
                  onClick: x ? () => S({
                    ...x
                  }) : () => {},
                  children: "Log In"
                });
                break
              }
              E = (0, d.jsx)(u, {
                foreign_id: p,
                foreign_type: b
              });
              break;
            case "button":
              c && l && (E = (0, d.jsx)(o.A, {
                to: l,
                className: m.calloutButton,
                onClick: x ? () => S({
                  ...x
                }) : () => {},
                children: c
              }));
              break;
            case "link":
              c && l && (E = (0, d.jsx)(g, {
                action_text: c,
                link: l,
                trackingData: x
              }));
              break;
            default:
              E = null
          }
          return (0, d.jsx)("div", {
            className: `${m.calloutContainer} ${k||""}`,
            ref: C,
            children: (0, d.jsxs)("div", {
              className: m.calloutSection,
              children: [(0, d.jsxs)("div", {
                className: [m.calloutHeaders, E ? m.calloutHeaderMargins : ""].join(" "),
                children: [a && (0, d.jsx)("h2", {
                  className: m.calloutHeader,
                  children: y(a)
                }), t && (0, d.jsx)("h3", {
                  className: m.calloutSubheader,
                  children: y(t)
                })]
              }), (0, d.jsxs)("div", {
                className: m.actionBlock,
                children: [E, v && (0, d.jsx)(f, {
                  helperText: v,
                  linkText: w,
                  link: h,
                  trackingData: _
                })]
              })]
            })
          })
        }))
    },
    98142: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => g
      });
      var s = t(62229),
        r = t(24162),
        i = t(48648),
        n = t(95966);
      const c = {
        deprecatedCarousel: "rockstargames-modules-core-newswire-articlea531264d5417d2198d4e14aa72335af1",
        "swiper-scrollbar-disabled": "rockstargames-modules-core-newswire-articleee2324d6dd93a95776b1e2d14d0f529d",
        "swiper-horizontal": "rockstargames-modules-core-newswire-articleb823bbff86d38da8cb611a7c3367d8fe",
        "swiper-vertical": "rockstargames-modules-core-newswire-articled29252354bbbfe413678daff5223169d",
        renderedWithChildren: "rockstargames-modules-core-newswire-articlead7696edafa3086969e7aaece4f09b4f",
        panorama: "rockstargames-modules-core-newswire-articleff63f8addff8d036ca0b65fa495e1653",
        img: "rockstargames-modules-core-newswire-articled8e66128b4fef1ea164350cd535e2d68",
        hideMobile: "rockstargames-modules-core-newswire-articlef3445a74a067bd92ff94b521cb0bdc07",
        hideLarge: "rockstargames-modules-core-newswire-articlea6c9173aa5a8fe31a062251352a9d711",
        imageAreaBg: "rockstargames-modules-core-newswire-articledcb2b41007683141579697bb4a8658ba",
        infinite_false: "rockstargames-modules-core-newswire-articleb85758ee99a52896b94130d002e821c7",
        track: "rockstargames-modules-core-newswire-articlec7c21df4f7f83a73f79dd7913aa87832",
        perico: "rockstargames-modules-core-newswire-articleaa50a9164fd0296b1196d441233cc348",
        dotsSlide: "rockstargames-modules-core-newswire-articleb8fd11776fba32f9663bbb6292a5c901",
        siblings: "rockstargames-modules-core-newswire-articlef4c50c0daadf81cd292587fcfea1339d",
        active: "rockstargames-modules-core-newswire-articlefdc2ec652cbb7469f602e73cd10ef997",
        "swiper-preloader-spin": "rockstargames-modules-core-newswire-articlec39b97f81c73d75dc4e013fde14aff18"
      };
      var o = t(38621),
        d = t(87782),
        l = t(98096);
      const m = e => {
          let {
            item: a
          } = e;
          return (0, l.jsxs)("div", {
            children: [(0, l.jsx)(d.A, {
              image: a?.image,
              badge: a?.badge ?? a?.image?.badge,
              badgeType: "badge3",
              role: a?.role ?? a?.image?.role,
              splitter: a?.splitter ?? a?.image?.splitter,
              type: a?.type,
              ariaLabel: a?.image?.ariaLabel ?? a.description,
              style: a?.style,
              className: (0, n.classList)(c.img, a?.className)
            }), (a?.title || a?.description) && (0, l.jsx)(o.A, {
              item: a
            })]
          })
        },
        u = e => {
          let {
            current: a,
            total: t
          } = e;
          return (0, l.jsx)("div", {
            className: "swiper-scrollbar",
            style: {
              "--current-slide": a,
              "--total-slides": t
            },
            children: (0, l.jsx)("div", {
              className: "swiper-scrollbar-drag"
            })
          })
        },
        g = e => {
          let {
            children: a,
            items: t = [],
            style: d = {},
            noInfiniteScroll: g = !1,
            className: f = "",
            renderTemplate: p = "standard",
            text: b,
            customSpaceBetween: k = null,
            centerSlides: v = !0,
            centeredSlidesBounds: w = !1
          } = e;
          const [h, x] = (0, s.useState)(0), _ = (0, s.useMemo)((() => a && Array.isArray(a) ? a.map((() => (0, i.A)())) : null), [a]);
          if (!(t && 0 !== t?.length || a)) return null;
          const y = {
            0: {
              spaceBetween: k ?? 16
            },
            1024: {
              spaceBetween: k ?? 18
            },
            1920: {
              spaceBetween: k ?? 20
            },
            2560: {
              spaceBetween: k ?? 22
            }
          };
          return (0, l.jsxs)("div", {
            className: (0, n.classList)(c.deprecatedCarousel, c[p], c[`infinite_${!g}`], a ? c.renderedWithChildren : "", f),
            style: d,
            children: [(0, l.jsxs)(r.RC, {
              loop: !g,
              grabCursor: !0,
              centeredSlides: v,
              centerInsufficientSlides: v,
              slidesPerView: "auto",
              speed: 700,
              breakpoints: y,
              onUpdate: () => x(0),
              onActiveIndexChange: e => x(e?.realIndex ?? 0),
              centeredSlidesBounds: w,
              children: [(0, l.jsx)("div", {
                className: c.trackWrapper,
                children: (0, l.jsxs)("div", {
                  className: c.track,
                  children: [t?.map((e => (0, l.jsx)(r.qr, {
                    children: (0, l.jsx)(m, {
                      item: e
                    })
                  }, e.key))), a && a.map(((e, a) => e && (0, l.jsx)(r.qr, {
                    children: e
                  }, _ && _[a])))]
                })
              }), (0, l.jsx)(u, {
                current: h,
                total: a ? a.length : t.length
              })]
            }), (b?.title || b?.description) && (0, l.jsx)(o.A, {
              item: b
            })]
          })
        }
    },
    2006: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => h
      });
      var s = t(62229),
        r = t(9623),
        i = t(93075),
        n = t(95966),
        c = t(80391),
        o = t(28985),
        d = t(47240),
        l = t(32903),
        m = t(81715),
        u = t(49429);
      const g = {
          ps: c,
          ps3: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg",
          ps4: o,
          ps5: d,
          switch: t(11008),
          xbox: l,
          xboxone: u,
          xboxseriesxs: m,
          xbox360: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c5cee7464423693de19149a4554b3c2.svg",
          pc: t(85719),
          play: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/59c4aadbdbfcdb8d06d7caa54bdc9f60.svg",
          applestore: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38a6e85fa4a378c5620efa9fde8ff223.svg",
          googleplay: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ca4e52b102306a186549cfd712b1c8f8.svg",
          questionMark: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e6833fa9baf4a5382bdd84b0b7d2c03f.svg",
          default: ""
        },
        f = e => g[e] || null,
        p = {
          pillBtn: "rockstargames-modules-core-newswire-articlef39c827be0d560f2cc376d83e3988fbc",
          selected: "rockstargames-modules-core-newswire-articlea63fd127fc0aab231f6740340658d647",
          "clr-button": "rockstargames-modules-core-newswire-articled4ec60c769b079ac712ea0264480d480",
          lgMax: "rockstargames-modules-core-newswire-articledf956d5fc70d2129beb1406170402148",
          smMax: "rockstargames-modules-core-newswire-articlefce12fc6343fbf09a5bb418bb8107f0b",
          cta: "rockstargames-modules-core-newswire-articlea8f295907e9b244767bb48cfc469b480",
          label: "rockstargames-modules-core-newswire-articled75a0e2af2bf8502f8647015e04e10e1",
          primary: "rockstargames-modules-core-newswire-articlea857266233e524e3bb96d327a2095642",
          btnContent: "rockstargames-modules-core-newswire-articled4df564f6143ae5909e2bbc95b4a7ebc",
          btnIcon: "rockstargames-modules-core-newswire-articlef7afeacf3abab7856caca9ea1fad81ad",
          border: "rockstargames-modules-core-newswire-articleaab360f8b5cf6965c56e5f86813b8620",
          xbox: "rockstargames-modules-core-newswire-articlecf162a09fdf0c180f3f5091077493d98",
          xboxone: "rockstargames-modules-core-newswire-articlee34e2c7fd3dd88f7e7d46f495c15a98d",
          xboxseriesxs: "rockstargames-modules-core-newswire-articlef5b0bc5e5a291a3ecab7447d33a76e55",
          ps: "rockstargames-modules-core-newswire-articled439373e74d36689bc159e9a585db184",
          ps4: "rockstargames-modules-core-newswire-articlee49e2b4d44ce7bab7966fbd9fdfb0760",
          ps5: "rockstargames-modules-core-newswire-articlebaa2b83edce86fda2d9dffb2682092f7",
          pc: "rockstargames-modules-core-newswire-articlea1b9c83f518722f01ecb3ece3681c117",
          nintendoswitch: "rockstargames-modules-core-newswire-articlee646f30d1a0c9990c5178e67be93f75e",
          googleplay: "rockstargames-modules-core-newswire-articlead074b742a5ce23c053880b289c2bbe6",
          platformIcon: "rockstargames-modules-core-newswire-articlef25581474e97714bc974f3ab51136511",
          lgMin: "rockstargames-modules-core-newswire-articlee974b6c740bfac2959d5170bd2d9f3ca",
          applestore: "rockstargames-modules-core-newswire-articlee97115f479fca9697b140bfbfa6534f2",
          borderless: "rockstargames-modules-core-newswire-articlecad0684072c4a89cb09b9f79ddda6f38",
          icon: "rockstargames-modules-core-newswire-articlec394fea7e071f1213a5d44f5b569bd1a",
          "icon-left": "rockstargames-modules-core-newswire-articlec73b838b4f69aff2241b814ad1547c48",
          "icon-right": "rockstargames-modules-core-newswire-articlef0de4560b8a1190f63a65ad1e9fd4e03",
          disabled: "rockstargames-modules-core-newswire-articled7a212b6e993966a3773c335359586d5"
        };
      var b = t(75694),
        k = t.n(b),
        v = t(98096);
      const w = e => {
          let {
            platform: a = "",
            altText: t
          } = e;
          const s = a ? f(a) : null,
            r = s ? (0, v.jsx)("img", {
              className: p.platformIcon,
              src: s,
              alt: t
            }) : null;
          return (0, v.jsx)("span", {
            className: [p.btnContent, p.platformButton].join(" "),
            children: r
          })
        },
        h = e => {
          let {
            children: a,
            href: t,
            style: c,
            content: o,
            variant: d = null,
            size: l = "medium",
            icon: m,
            iconPosition: u = "none",
            iconStyle: g,
            badge: b,
            badgeStyle: h,
            platformItem: x,
            platformStyle: _ = "border",
            gtm: y = {},
            disabled: N,
            reloadDocument: j = !1,
            className: S
          } = e;
          const {
            track: T
          } = (0, i.h)(), C = (0, n.useDataLayer)(), A = o ?? a, I = (0, n.findPlatform)(x)?.friendlyName, L = (0, s.useMemo)((() => {
            const e = window.location.hostname;
            let a;
            try {
              a = new URL(t)?.hostname
            } catch (t) {
              a = e
            }
            return e === a
          }), [t]), E = (0, s.useCallback)((() => {
            N || T({
              event: "cta_other",
              text: A ?? void 0,
              ...C,
              ...y,
              link_url: t ?? void 0
            })
          }), [y, t, C]), P = () => m ? (0, v.jsx)("span", {
            className: [p.icon, `icon-${u}`].join(" "),
            style: g,
            children: (0, v.jsx)("img", {
              className: p.btnIcon,
              src: f(m) || "",
              alt: `${m} icon`
            })
          }) : null;
          return (0, v.jsx)(r.Link, {
            to: t,
            target: L ? "_self" : "_blank",
            className: k()(p.cta, "platform" === d && x ? p[x] : "", _ && p[_], N ? p.disabled : "", S),
            style: c,
            "data-variant": d,
            "data-size": l,
            onClick: E,
            "aria-label": A,
            reloadDocument: j,
            children: "platform" === d && x ? (0, v.jsx)(w, {
              platform: x,
              altText: I || A
            }) : (0, v.jsxs)("div", {
              className: p.btnContent,
              children: ["left" === u && P(), (0, v.jsx)("span", {
                className: p.label,
                children: A
              }), "right" === u && P(), b ? (0, v.jsx)("span", {
                className: p.badge,
                style: h,
                children: b
              }) : null]
            })
          })
        }
    },
    38621: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => l
      });
      var s = t(95966),
        r = t(89972),
        i = t(89363),
        n = t(11308);
      const c = "rockstargames-modules-core-newswire-articleacd27eff2209196752622710f7b27558";
      var o = t(98096);
      const d = e => {
          let {
            to: a,
            children: t
          } = e;
          return a ? (0, o.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noreferrer",
            children: t
          }) : t
        },
        l = e => {
          let {
            item: a,
            className: t = ""
          } = e;
          return (0, o.jsxs)("div", {
            className: (0, s.classList)("rockstargames-modules-core-newswire-articlef8bc9589974046cdac4a2264be12d2df", t),
            children: [a.title && (0, o.jsx)(d, {
              to: a?.href ?? a?.to,
              children: (0, o.jsx)("h3", {
                children: a.title
              })
            }), Array.isArray(a?.description?.content) ? a.description.content?.map(((e, a) => e?.unorderedList ? (0, o.jsx)(i.A, {
              columns: e.unorderedList.columns ?? null,
              style: {
                "--unordered-list-padding": "var(--grid-gap-static-sm)",
                "--unordered-list-margin-bottom": ".5rem"
              },
              noImg: !0,
              list: e.unorderedList.list
            }, a) : e?.image ? (0, o.jsx)(r.A, {
              image: e.image,
              className: e?.className
            }, a) : e?.separator ? (0, o.jsx)("div", {
              style: {
                margin: `${e.separator.spacing} 0`
              },
              children: (0, o.jsx)(n.A, {})
            }, a) : (0, o.jsx)("p", {
              children: (0, o.jsx)("span", {
                className: c,
                dangerouslySetInnerHTML: {
                  __html: e
                }
              })
            }, a))) : (0, o.jsx)("span", {
              className: c,
              dangerouslySetInnerHTML: {
                __html: a.description
              }
            })]
          })
        }
    },
    1772: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var s = t(62229);
      const r = {
        animateBox: "rockstargames-modules-core-newswire-articleb07a3be6338e0ba4b346b072762582e3",
        fadeArea: "rockstargames-modules-core-newswire-articlef47504b50907dd0fd609719dad3f62bd",
        visible: "rockstargames-modules-core-newswire-articlec121e11e40215dc778fe8665eb38845d",
        barGrow: "rockstargames-modules-core-newswire-articlee0262d00df9ad8a47b08ae84160bfa51",
        bar: "rockstargames-modules-core-newswire-articlebbb7e636ac00581aed0b7e148916cc11",
        animateMe: "rockstargames-modules-core-newswire-articlef7adfd0186421cac9ad0b300911cc9af"
      };
      var i = t(98096);
      const n = e => {
        let {
          children: a,
          style: t
        } = e;
        const n = (0, s.useRef)(null);
        return (0, s.useEffect)((() => {
          new IntersectionObserver((e => {
            e.forEach((e => {
              e.isIntersecting && e.target.classList.add([r.visible])
            }))
          })).observe(n?.current)
        }), []), (0, i.jsx)("div", {
          style: t,
          className: [r.fadeArea].join(" "),
          ref: n,
          children: a
        })
      }
    },
    79945: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => i
      });
      var s = t(45881),
        r = t(98096);
      const i = e => {
        let {
          html: a
        } = e;
        return (0, r.jsx)("div", {
          children: (0, s.Ay)(a)
        })
      }
    },
    7048: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var s = t(62229),
        r = t(93075);
      const i = (0, s.forwardRef)(((e, a) => {
        const {
          threshold: t,
          callback: i,
          children: n,
          requireUser: c
        } = e, {
          track: o
        } = (0, r.h)(c), [d, l] = (0, s.useState)(a?.current);
        return (0, s.useEffect)((() => {
          a?.current && l(a.current)
        }), [a]), ((e, a, t) => {
          const [r, i] = (0, s.useState)({
            scrollDepths: e,
            scrollY: 0
          }), {
            scrollDepths: n,
            scrollY: c
          } = r;
          (0, s.useEffect)((() => {
            "undefined" != typeof window && 0 !== window.pageYOffset && i((e => ({
              ...e,
              scrollY: window.pageYOffset
            })))
          }), []), (0, s.useEffect)((() => {
            i({
              scrollDepths: e,
              scrollY: 0
            })
          }), [window.location.pathname]);
          const o = (0, s.useCallback)((() => {
            const e = document.documentElement,
              s = document.body,
              c = t?.scrollTop || e.scrollTop || s.scrollTop,
              d = t?.scrollHeight || e.scrollHeight || s.scrollHeight,
              {
                clientHeight: l
              } = e,
              m = c / (d - l) * 100;
            if (n) {
              const e = Math.min(...n, d);
              if (m >= e) {
                const s = n.filter((a => a !== e));
                0 === s.length && (t ?? window).removeEventListener("scroll", o), a && a({
                  scrollY: e,
                  scrollPercent: m,
                  remainingDepths: s
                }), i({
                  scrollY: e,
                  scrollDepths: s
                })
              }
            } else i({
              ...r,
              scrollY: m
            })
          }), [n, t, a]);
          (0, s.useEffect)((() => {
            if ("undefined" == typeof window) return;
            const e = t ?? window;
            return e.addEventListener("scroll", o), () => e.removeEventListener("scroll", o)
          }), [o])
        })(t, (e => {
          let {
            scrollY: a
          } = e;
          o({
            event: "page_scroll",
            scroll_depth: a
          }), "function" == typeof i && i(a)
        }), d), n
      }));
      i.displayName = "ScrollTracker";
      const n = i
    },
    34327: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => c
      });
      var s = t(62229),
        r = t(9623),
        i = t(95966);
      var n = t(98096);
      const c = (0, i.withTranslations)((e => {
        let {
          t: a
        } = e;
        const [t] = (0, s.useState)(""), c = (0, r.useNavigate)(), o = (0, i.useMutateState)();
        return (0, n.jsxs)("form", {
          action: "#",
          className: "rockstargames-modules-core-newswire-articlec9f16d9c2f4a943ae8f1f900f31b5f4b",
          onSubmit: e => {
            e.preventDefault(), o({
              navOpen: !1
            }), document.activeElement?.blur?.();
            const a = e.currentTarget.elements.namedItem("q").value;
            c(`/search?q=${a}`)
          },
          role: "search",
          children: [(0, n.jsx)("button", {
            type: "submit",
            role: "button",
            title: "Submit"
          }), (0, n.jsx)("input", {
            autoComplete: "off",
            defaultValue: t,
            enterKeyHint: "search",
            name: "q",
            placeholder: a("Search Rockstar Games")
          })]
        })
      }))
    },
    13647: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => u
      });
      var s = t(62229),
        r = t(22557),
        i = t(93075),
        n = t(24162),
        c = t(7545);
      const o = "rockstargames-modules-core-newswire-articleb7d3d1587271986440f5870d8d02eb3b",
        d = "rockstargames-modules-core-newswire-articlefcffcc6e594fbf9a4a6e9ab5a8d034c7";
      var l = t(98096);
      const m = {
          0: {
            spaceBetween: 8
          },
          768: {
            spaceBetween: 16
          },
          1024: {
            spaceBetween: 18
          },
          1920: {
            spaceBetween: 20
          },
          2560: {
            spaceBetween: 22
          }
        },
        u = e => {
          let {
            title: a = "thumbnail gallery",
            thumbsPerView: t = 3,
            loop: u = !1,
            navigation: g = !1,
            slideChildren: f = [],
            variants: p = {
              parent: void 0,
              main: void 0,
              thumbs: void 0
            },
            transition: b = {
              parent: void 0,
              main: void 0,
              thumbs: void 0
            }
          } = e;
          const {
            track: k
          } = (0, i.h)(), [v, w] = (0, s.useState)([c.U1, c.WO, c.dK]), [h, x] = (0, s.useState)(null), [_, y] = (0, s.useState)(null);
          return (0, s.useEffect)((() => {
            const e = [c.U1, c.WO, c.dK];
            g && e.push(c.Vx), w(e)
          }), [g]), (0, s.useEffect)((() => {
            if (!f) return;
            const e = f.map(((e, a) => (0, l.jsx)(n.qr, {
              children: e
            }, Symbol(a).toString())));
            y(e)
          }), [f]), _ ? (0, l.jsxs)(r.P.div, {
            className: "rockstargames-modules-core-newswire-articlef2d55de974817e455a162843125a8771",
            variants: p.parent,
            transition: b.parent,
            initial: "initial",
            animate: "animate",
            children: [(0, l.jsx)(r.P.div, {
              className: o,
              variants: p.main,
              transition: b.main,
              initial: "initial",
              animate: "animate",
              children: (0, l.jsx)(n.RC, {
                loop: u,
                navigation: g,
                pagination: {
                  clickable: !0
                },
                thumbs: {
                  swiper: h
                },
                modules: v,
                breakpoints: m,
                className: o,
                onSlideNextTransitionEnd: () => {
                  k({
                    event: "carousel_next",
                    element_placement: a?.toLowerCase() ?? ""
                  })
                },
                onSlidePrevTransitionEnd: () => {
                  k({
                    event: "carousel_previous",
                    element_placement: a?.toLowerCase() ?? ""
                  })
                },
                onSlideChangeTransitionEnd: () => {
                  k({
                    event: "carousel_swipe",
                    element_placement: a?.toLowerCase() ?? ""
                  })
                },
                children: _
              })
            }), (0, l.jsx)(r.P.div, {
              className: d,
              variants: p.thumbs,
              transition: b.thumbs,
              initial: "initial",
              animate: "animate",
              children: (0, l.jsx)(n.RC, {
                threshold: 50,
                onSwiper: x,
                loop: u,
                breakpoints: m,
                slidesPerView: t,
                freeMode: !0,
                watchSlidesProgress: !0,
                modules: v,
                className: d,
                children: _
              })
            })]
          }) : null
        }
    },
    3225: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => d,
        X: () => o
      });
      var s = t(92440),
        r = t(95966),
        i = t(26595),
        n = t(84343),
        c = t(98096);
      const o = e => {
          let {
            id: a = null,
            ids: t = null,
            setTitleDataPath: s = null,
            sync: i = !1
          } = e;
          const c = t ?? [a],
            {
              data: o
            } = (0, r.useQuery)(n.TinaModulesInfo, {
              variables: {
                ids: c,
                sync: i
              },
              setTitleDataPath: s,
              skip: !c.length
            });
          return o?.tinaModulesInfo ?? null
        },
        d = (0, i.A)((e => {
          let {
            components: a = {},
            id: t = null,
            ids: r = null
          } = e;
          const i = o({
              id: t,
              ids: r
            }),
            n = i?.[0]?.tina;
          return n ? (0, c.jsx)(c.Fragment, {
            children: i.map(((e, t) => {
              let {
                tina: r
              } = e;
              return (0, c.jsx)(s.TinaParser, {
                components: a,
                tina: r,
                componentProps: {
                  tinaModulesInfo: i
                }
              }, t)
            }))
          }) : null
        }), {
          header: null
        })
    },
    27371: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r
      });
      var s = t(98096);
      const r = e => {
        let {
          text: a,
          style: t
        } = e;
        return (0, s.jsx)("div", {
          className: "rockstargames-modules-core-newswire-articlec08a001134624b9ceb275eae413bfd3d",
          style: t,
          children: a
        })
      }
    },
    37338: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        A: () => r.A,
        AlertDialog: () => ke,
        AudioPlayer: () => i.A,
        Badge: () => n.A,
        Brands: () => o,
        Button: () => d.A,
        ButtonGroup: () => u,
        CalloutSection: () => x.A,
        Carousel: () => g.A,
        ConditionalBlock: () => h,
        CookieAB: () => S,
        CountryInputField: () => j,
        Cta: () => T.A,
        DescriptionArea: () => C.A,
        DiscountsBadge: () => A.A,
        DotLoader: () => L,
        Dropdown: () => z,
        Embed: () => D,
        ExpandingPlatformButton: () => M.A,
        FadeInContent: () => $.A,
        Gen9Button: () => m.A,
        Gen9CoreCarousel: () => q,
        Grid: () => F.A,
        HTMLElement: () => se.A,
        Hero: () => te,
        HookStore: () => k,
        ImageWithBadge: () => me.A,
        LayeredImage: () => ce,
        Lightbox: () => le,
        LoadingAnimation: () => za.A,
        MultiSourceImage: () => re.A,
        NewswireBlocks: () => Se,
        NewswireCard: () => ve.A,
        NewswireList: () => _e,
        NewswireRelated: () => ye.A,
        NewswireTag: () => Ne.A,
        OrderedList: () => Te.A,
        Paging: () => Ie,
        ParallaxCacheBuster: () => Ee,
        ParallaxInnerLayer: () => Fe,
        ParallaxOuterLayer: () => De,
        ParallaxWrapper: () => ze,
        PromoModule: () => $e,
        Rating: () => Ue,
        ResponsiveFlexBox: () => qe.A,
        ResponsiveFlexItem: () => We.A,
        ResponsiveGridBox: () => Qe.A,
        ResponsiveGridItem: () => Ye.A,
        ResponsiveImg: () => Ke.A,
        ResponsiveSection: () => Xe.A,
        RockstarLogo: () => Je,
        SafeHtml: () => Ze.A,
        ScrollSection: () => ea,
        ScrollToTop: () => aa,
        ScrollTracker: () => ta.A,
        SearchBox: () => sa.A,
        Separator: () => ra.A,
        SrcsetImage: () => ge,
        StorybookWrapper: () => ia,
        TextFit: () => na.A,
        ThumbsGallery: () => oa.A,
        TinaModuleFetchNRender: () => da.A,
        TinaWrapper: () => la,
        TrackList: () => ca.A,
        UnorderedList: () => ma.A,
        UserVote: () => fa,
        VideoCard: () => s,
        VideoCarousel: () => xa,
        VideoList: () => Ca,
        VisuallyHidden: () => Aa,
        Wasted: () => Ia.A,
        framer: () => Pa,
        useTinaModuleFetchByIds: () => da.X,
        withSearchbarErrorBoundary: () => Ea,
        withSimpleErrorBoundary: () => H.A
      });
      var s = {};
      t.r(s), t.d(s, {
        Art: () => va,
        Link: () => wa
      });
      var r = t(89950),
        i = t(17977),
        n = t(27371);
      var c = t(98096);
      const o = e => {
        let {
          brands: a = []
        } = e;
        return a.length ? (0, c.jsx)("div", {
          className: "rockstargames-modules-core-newswire-articleb53b6eca487387fc5c2057daf151691a",
          children: a.map(((e, a) => {
            let {
              brand: t
            } = e;
            return (0, c.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlee8c3be7a76fd7e532e74a9fcf87bee09",
              "data-brand": t
            }, a)
          }))
        }) : null
      };
      var d = t(43243),
        l = t(95966),
        m = t(14818);
      const u = e => {
        let {
          buttons: a = [],
          className: t
        } = e;
        return a.length ? (0, c.jsx)("div", {
          className: (0, l.classList)("rockstargames-modules-core-newswire-articlebbd74dec556da7f5c06710c72c662f8a", t),
          children: a.map(((e, a) => {
            let {
              icon: t,
              title: s,
              to: r
            } = e;
            return s ? (0, c.jsx)(m.A, {
              icon: t,
              text: s,
              to: r
            }, a) : ""
          }))
        }) : null
      };
      var g = t(98142),
        f = t(62229),
        p = t(9623),
        b = t(93075);
      const k = (0, t(52946).FF)(),
        v = e => e.some((e => !e)),
        w = e => {
          let {
            condition: a = null,
            children: t
          } = e;
          const [s, r] = (0, f.useState)(!1), i = (e => {
            const [a] = (0, p.useSearchParams)(), [t, s] = (0, f.useState)(null), r = (0, b.Wx)(), {
              loggedIn: i
            } = r, {
              currentCharId: n
            } = (0, b.F$)(), c = (0, b.F3)(r?.data, n);
            return (0, f.useEffect)((() => {
              const t = "true" === a.get("conditionPreview");
              if (!e?.length > 0) return;
              k.applyFilters("preview_conditions", e);
              const r = [];
              return e.forEach((e => {
                const {
                  value: s
                } = e;
                if (t) return "true" === a.get(s) ? (r.push(!0), !0) : (r.push(!1), !1);
                if (v(r)) return !1;
                switch (s) {
                  case "user:is:loggedIn":
                    r.push(!0 === i);
                    break;
                  case "user:not:loggedIn":
                    r.push(!1 === i);
                    break;
                  case "user:is:gtaPlus":
                    r.push(!0 === c);
                    break;
                  case "user:not:gtaPlus":
                    r.push(!1 === c);
                    break;
                  default:
                    r.push(!1)
                }
                return null
              })), s(!v(r)), () => {}
            }), [a, e, c, r, i]), t
          })(a);
          return (0, f.useEffect)((() => {
            r(i)
          }), [i]), (0, f.useMemo)((() => s ? t : null), [s])
        },
        h = (0, l.withTranslations)((e => {
          let {
            children: a
          } = e;
          return f.Children.map(f.Children.toArray(a), (e => (0, c.jsx)(w, {
            ...e?.props
          })))
        }));
      var x = t(76214),
        _ = t(43763),
        y = t(6234),
        N = t.n(y);
      const j = e => {
          let {
            isMulti: a,
            allowSelectAll: t,
            label: s,
            miscProps: r
          } = e;
          const [i, n] = (0, f.useState)(""), o = (0, f.useMemo)((() => N()().getData()), []);
          return (0, c.jsx)(_.Ay, {
            unstyled: !0,
            value: i,
            isMulti: a,
            allowSelectAll: t,
            options: o,
            placeholder: s,
            onChange: e => {
              return a = e?.target?.value, void n(a);
              var a
            },
            classNamePrefix: "country-select",
            ...r
          })
        },
        S = e => {
          let {
            cookieName: a,
            cookieValue: t,
            trueComponent: s,
            falseComponent: r
          } = e;
          const i = (e => {
              const a = document.cookie.split("; "),
                t = `${e}=`,
                s = a.find((e => e.startsWith(t)));
              return s?.substring(t.length, s.length)
            })(a),
            n = new URLSearchParams(window.location.search).get(a);
          return n && ((e, a) => {
            e && a && (document.cookie = `${e}=${a}; domain=${(()=>{const e=window.location.hostname.split(".");return e.slice(e.length-2).join(".")})()}; path=/;`)
          })(a, n), i === t || n === t ? s : r
        };
      var T = t(2006),
        C = t(38621),
        A = t(38185);
      const I = "rockstargames-modules-core-newswire-articlea19bcd2b98d91e60c43b9de146e20f4e",
        L = e => {
          let {
            color: a
          } = e;
          return (0, c.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlee83fe07aa054242e9023d2f9e7a3fd25",
            style: {
              "--loader-color": a
            },
            children: [(0, c.jsx)("div", {
              className: I
            }), (0, c.jsx)("div", {
              className: I
            }), (0, c.jsx)("div", {
              className: I
            })]
          })
        };
      var E = t(93254);
      const P = {
          dropdownWrapper: "rockstargames-modules-core-newswire-articlebbf48ac7e790ff47ad1d5ee6fb7da4d9",
          items: "rockstargames-modules-core-newswire-articlea9afd60434d032bdba4ce040dbeb13b7",
          open: "rockstargames-modules-core-newswire-articledf17f0cb21e0947d4f391f915bd797d2",
          opener: "rockstargames-modules-core-newswire-articlecb53c003fd165ccb31dee0f32edca90f",
          secondary: "rockstargames-modules-core-newswire-articlefe6babf9fc35bb59a2b5225e4d6e7a50"
        },
        z = e => {
          let {
            children: a,
            className: t,
            title: s
          } = e;
          const [r, i] = (0, f.useState)(!1);
          let n = null;
          return n = E.Ay, (0, c.jsx)(n, {
            disabled: !r,
            children: (0, c.jsxs)("div", {
              className: [P.dropdownWrapper, r ? P.open : "", void 0 !== t ? t : ""].join(" "),
              children: [(0, c.jsx)("button", {
                className: P.opener,
                onClick: () => i(!r),
                children: s
              }), r && (0, c.jsx)("div", {
                className: P.items,
                onClick: () => i(!1),
                children: a
              })]
            })
          })
        };
      var F = t(60351);
      const V = e => {
          let {
            caption: a,
            children: t,
            ...s
          } = e;
          return a ? (0, c.jsxs)("figure", {
            ...s,
            children: [t, (0, c.jsx)("figcaption", {
              dangerouslySetInnerHTML: {
                __html: a
              }
            })]
          }) : t
        },
        D = e => {
          let {
            componentTitle: a,
            type: t,
            items: s
          } = e;
          return s?.length ? (0, c.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articleaee2a98f97e777758e2d9bec034314ee",
            type: t,
            children: (0, c.jsxs)(F.A, {
              children: [a && (0, c.jsx)("h3", {
                children: a
              }), (0, c.jsx)(F.A, {
                className: "rockstargames-modules-core-newswire-articledba17b5c55f8d40e2600765f1a60d6af",
                children: s.map(((e, a) => {
                  return e?.embed ? (0, c.jsx)(V, {
                    caption: e?.caption,
                    children: (0, c.jsx)("div", {
                      className: "rockstargames-modules-core-newswire-articlef0cd8278232673606f9c1715bd4950f6",
                      dangerouslySetInnerHTML: {
                        __html: (t = e.embed, t.replace(/&gt;/g, ">").replace(/&lt;/g, "<"))
                      }
                    }, `${e?.key??a}_div`)
                  }, e?.key ?? a) : e?.text ? (0, c.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: e.text
                    }
                  }, e?.key ?? a) : void 0;
                  var t
                }))
              })]
            })
          }) : null
        };
      var M = t(3453),
        $ = t(1772),
        B = t(16188),
        O = t(44498),
        G = t(7545),
        R = t(24162),
        H = t(26595);
      const U = e => {
          let {
            prevRef: a,
            nextRef: t,
            onNextClicked: s,
            onPrevClicked: r,
            onNextKeyDown: i
          } = e;
          return (0, c.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articleb8d5ef10008331a9f6d3a6bdf1690d01",
            children: [(0, c.jsx)("button", {
              className: "rockstargames-modules-core-newswire-articlec38cd500d52d07bd012e288dc0b4f635",
              ref: a,
              onClick: r,
              "aria-label": "Previous",
              role: "button"
            }), (0, c.jsx)("button", {
              className: "rockstargames-modules-core-newswire-articleb24ada0f7959966c6d950567eaaafce2",
              ref: t,
              onClick: s,
              onKeyDown: i,
              "aria-label": "Next",
              role: "button"
            })]
          })
        },
        q = (0, H.A)((e => {
          let {
            description: a,
            slideChildren: t,
            size: s,
            title: r,
            name: i,
            customSlidesPerView: n = null,
            customSpaceBetween: o = null,
            slideClass: d,
            style: m,
            className: u,
            cardSizeBreakpoints: g,
            customAspectRatio: p,
            titleBadge: k,
            theme: v
          } = e;
          const {
            track: w
          } = (0, b.h)(), h = (0, f.useRef)(null), x = (0, f.useRef)(null), _ = (0, f.useRef)(null), [y, N] = (0, f.useState)(null), [j, S] = (0, f.useState)(!1), [T, C] = (0, f.useState)(null), [A, I] = (0, f.useState)(), [L, E] = (0, f.useState)(), {
            ref: P,
            inView: z
          } = (0, O.Wx)({
            threshold: .6
          }), [F, V] = (0, f.useState)(!1), [D, M] = (0, f.useState)(null), [$, H] = (0, f.useState)(!1), [q, W] = (0, f.useState)(0), [Q, Y] = (0, f.useState)(0);
          (0, f.useEffect)((() => {
            const e = () => {
              H(window.innerWidth < 1024)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, f.useEffect)((() => {
            const e = () => {
              A && !(0, B.isEmpty)(A) && A?.height > 0 && A?.height !== q && W(A?.height)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [A]);
          const K = {
            0: {
              spaceBetween: o ?? 16
            },
            1024: {
              spaceBetween: o ?? 18
            },
            1920: {
              spaceBetween: o ?? 20
            },
            2560: {
              spaceBetween: o ?? 22
            }
          };
          (0, f.useEffect)((() => {
            if (!h.current) return;
            const e = () => {
              if (h.current) {
                const e = n || Number(window.getComputedStyle(h.current).getPropertyValue("--slides-per-view")),
                  a = n ? 1 : Number(window.getComputedStyle(h.current).getPropertyValue("--slides-per-view-multiplier"));
                C(e * a)
              }
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [h, n]), (0, f.useEffect)((() => {
            if (!t) return;
            let e = !1;
            t.forEach((a => {
              "cover-card" === a?.props?.tina?.payload?.meta?.type && (e = !0, M(a))
            })), V(e);
            const a = t.map(((e, a) => "cover-card" === e?.props?.tina?.payload?.meta?.type && $ ? null : (0, c.jsx)(R.qr, {
              className: "rockstargames-modules-core-newswire-articlead67cb8db28ddf18d185f85a3d54b06f",
              onFocus: () => Z(a),
              children: e
            }, Symbol(a).toString())));
            N(a)
          }), [t, $]), (0, f.useEffect)((() => {
            E({
              nextEl: _.current,
              prevEl: x.current
            })
          }), [_, x]), (0, f.useEffect)((() => {
            z && !j && t && (w({
              event: "page_section_impression",
              element_placement: (i || r).toLowerCase()
            }), S(!0))
          }), [z, t]);
          let X = "custom" === s ? {
            "--custom-aspect-ratio": p,
            ...m
          } : {
            ...m
          };
          const J = 0 !== q ? `${q}px` : "100%";
          X = {
            ...X,
            "--carousel-cards-height": J,
            "--carousel-nav-opacity": Q
          };
          const Z = e => {
            A?.slideTo(e)
          };
          return (0, c.jsxs)("div", {
            className: (0, l.classList)("rockstargames-modules-core-newswire-articlef20b52f7c3f9003cd00811a47a04bf10", u),
            "data-size": s,
            "data-sm": g?.sm ? g?.sm : s,
            "data-md": g?.md ? g?.md : s,
            "data-lg": g?.lg ? g?.lg : s,
            "data-xl": g?.xl ? g?.xl : s,
            "data-xxl": g?.xxl ? g?.xxl : s,
            "data-has-covercard": F,
            "data-new-carousel-nav": !0,
            "data-theme": v,
            ref: h,
            style: X,
            children: [(0, c.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articleaeafe767d91d07fab61f307b5bbffeef",
              ref: P
            }), F && $ && (0, c.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articledef6705cfe82c4e562f3c71c78bc5248",
              children: D
            }), (0, c.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articleb093fac5b0d056a4a00f34d0418c6577",
              children: (0, c.jsxs)("div", {
                className: "rockstargames-modules-core-newswire-articledcef10ca0aa4165afec829cc4474b8b7",
                children: [(0, c.jsxs)("div", {
                  className: "rockstargames-modules-core-newswire-articleb83b41754b7e9ac95c806264014db990",
                  children: [!F && r && (0, c.jsxs)("div", {
                    className: "rockstargames-modules-core-newswire-articlec8e04a547988dacbae8960776862f15f",
                    children: [(0, c.jsx)("h2", {
                      children: r
                    }), k && (0, c.jsx)("span", {
                      className: "rockstargames-modules-core-newswire-articlec3de2db74771fdba023cc2b11b216955",
                      children: k
                    })]
                  }), (0, c.jsx)(U, {
                    prevRef: x,
                    nextRef: _,
                    onNextClicked: () => {},
                    onPrevClicked: () => {},
                    onNextKeyDown: e => {
                      if ("Tab" === e.key && !e.shiftKey) {
                        const a = A?.slides[A?.activeIndex].querySelector('a, button, [role="button"]');
                        a && a?.tabIndex > -1 && (e.preventDefault(), a.focus())
                      }
                    },
                    theme: v
                  })]
                }), a && (0, c.jsx)("div", {
                  className: "rockstargames-modules-core-newswire-articlea1497e1cd7844ff158955c0afe2fd3b8",
                  dangerouslySetInnerHTML: {
                    __html: a
                  }
                })]
              })
            }), T ? (0, c.jsx)(R.RC, {
              slidesPerView: T,
              onInit: e => {
                I(e);
                const a = setInterval((() => {
                  const {
                    height: t
                  } = e;
                  t > 0 && (W(t), Y(1), clearInterval(a))
                }), 500)
              },
              grabCursor: !0,
              navigation: L,
              modules: [G.Vx],
              breakpoints: K,
              slideClass: (0, l.classList)("swiper-slide", d),
              onSlideNextTransitionEnd: () => {
                w({
                  event: "carousel_next",
                  element_placement: r?.toLowerCase() ?? ""
                })
              },
              onSlidePrevTransitionEnd: () => {
                w({
                  event: "carousel_previous",
                  element_placement: r?.toLowerCase() ?? ""
                })
              },
              onSlideChangeTransitionEnd: () => {
                w({
                  event: "carousel_swipe",
                  element_placement: r?.toLowerCase() ?? ""
                })
              },
              children: y
            }) : ""]
          })
        }), null);
      var W = t(22557),
        Q = t(92440);
      const Y = {
          pillBtn: "rockstargames-modules-core-newswire-articleb89f190ffa4d32a33304ffa4b5ff73df",
          selected: "rockstargames-modules-core-newswire-articleb5c12cc9810c7b3774102378f71714a1",
          hero: "rockstargames-modules-core-newswire-articledccb6453f49a8e81c4ec407c39df4c79",
          images: "rockstargames-modules-core-newswire-articled5fdc650fc4f2f7441ce7c563ae9653e",
          background: "rockstargames-modules-core-newswire-articlec8c90210c344650ad11d2d97258dcaab",
          gradient: "rockstargames-modules-core-newswire-articled074051a93eac66cd56c616c8ccd4c91",
          layered: "rockstargames-modules-core-newswire-articlec58f0111e3765dc6116481764d0431d0",
          content: "rockstargames-modules-core-newswire-articlee4bb4024fb4b167423f58e02e471bf5e",
          descriptions: "rockstargames-modules-core-newswire-articlea54e628f4898aed20e45ad8a5e39af7f",
          buttonGroup: "rockstargames-modules-core-newswire-articleb8a0dc337c7ea835340f88b0f6d14822",
          ctaBlock: "rockstargames-modules-core-newswire-articlec3f1f785f5adb5cfcbf93195e21521e6",
          verticalCtaBlock: "rockstargames-modules-core-newswire-articlede8ee9092175484396cd56d19aec7cbd",
          primaryBtn: "rockstargames-modules-core-newswire-articled273ee25efe0a98d789db801a1a18e97",
          secondaryBtn: "rockstargames-modules-core-newswire-articleaf112e1264860cebe9be5f542d47ec27",
          btnText: "rockstargames-modules-core-newswire-articlee8ca7c699fe44c30cf4e542ee8b22119",
          legalText: "rockstargames-modules-core-newswire-articlebdbadc8b5ef295a4122905fffdde18f6",
          shardsCarousel: "rockstargames-modules-core-newswire-articlecd8c6fbe5139a661c2e52e9df726ca78"
        },
        K = {
          visible: {
            opacity: 1,
            transition: {
              ease: [.5, 0, 0, 1],
              duration: .75,
              when: "beforeChildren",
              delayChildren: .25,
              staggerChildren: .1
            }
          },
          hidden: {
            opacity: 0
          }
        },
        X = {
          visible: {
            opacity: 1,
            y: 0,
            height: "100%",
            overflow: "hidden",
            transition: {
              ease: [.5, 0, 0, 1],
              duration: .75
            }
          },
          hidden: {
            opacity: 0,
            y: 100,
            height: "0%",
            overflow: "hidden"
          }
        },
        J = e => {
          let {
            title: a = "",
            mobileImg: t,
            desktopImg: s
          } = e;
          const r = (0, Q.useGetCdnSource)(t ?? null),
            i = (0, Q.useGetCdnSource)(s ?? r);
          return (0, c.jsx)("div", {
            className: Y.shard,
            style: {
              "--background-image-mobile": `url(${r})`,
              "--background-image-desktop": `url(${i})`
            },
            children: (0, c.jsx)("h5", {
              children: a
            })
          })
        },
        Z = e => {
          let {
            title: a = "Membership Rewards",
            name: t = "Membership Rewards",
            shards: s
          } = e;
          const [r, i] = (0, f.useState)(null);
          return (0, f.useEffect)((() => {
            s && i(s.reduce(((e, a) => {
              if (!a?.shardImg) return e;
              const {
                title: t,
                shardImg: s
              } = a, {
                mobile: r,
                desktop: i
              } = s;
              return e.push((0, c.jsx)(J, {
                title: t,
                mobileImg: r?.full_src,
                desktopImg: i?.full_src
              })), e
            }), []))
          }), [s]), r ? (0, c.jsx)("div", {
            className: Y.shardsCarousel,
            children: (0, c.jsx)(q, {
              title: a,
              name: t,
              slideChildren: r,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        ee = e => {
          let {
            animated: a = !1,
            ctas: t = [],
            expandingButtonLabel: s = "Subscribe"
          } = e;
          const [r, i] = (0, f.useState)([]), [n, o] = (0, f.useState)([]);
          return (0, f.useEffect)((() => {
            const {
              expandingButtonsArray: e,
              plainButtonsArray: a
            } = t.reduce(((e, a) => (a.isInExpandingButton ? e.expandingButtonsArray.push({
              href: a.href,
              platform: a.platform,
              buttonText: a.buttonText
            }) : e.plainButtonsArray.push({
              icon: a.platform ?? "",
              title: a.buttonText,
              to: a.href
            }), e)), {
              expandingButtonsArray: [],
              plainButtonsArray: []
            });
            i(e), o(a)
          }), [t]), r.length ? (0, c.jsx)(W.P.div, {
            variants: a ? X : void 0,
            children: (0, c.jsx)(M.A, {
              variant: "gen9",
              buttonText: s,
              platformsAndLinks: r,
              children: !!n.length && (0, c.jsx)(W.P.div, {
                variants: X,
                children: (0, c.jsx)(u, {
                  buttons: n,
                  className: Y.buttonGroup
                })
              })
            })
          }) : (0, c.jsx)(c.Fragment, {
            children: !!n.length && (0, c.jsx)(W.P.div, {
              variants: X,
              children: (0, c.jsx)(u, {
                buttons: n,
                className: Y.buttonGroup
              })
            })
          })
        },
        ae = e => {
          let {
            animated: a = !1,
            brands: t = [],
            cta: s = [],
            ctas: r = [],
            description: i = "",
            expandingButtonLabel: n = "Subscribe",
            legalText: d,
            stackButtons: l,
            title: m = ""
          } = e;
          return (0, c.jsxs)(W.P.div, {
            className: Y.content,
            initial: "hidden",
            animate: "visible",
            variants: a ? K : void 0,
            children: [(0, c.jsx)(W.P.div, {
              variants: a ? X : void 0,
              children: (0, c.jsx)(o, {
                brands: t
              })
            }), (m || i) && (0, c.jsxs)(W.P.div, {
              className: Y.descriptions,
              variants: a ? X : void 0,
              children: [m && (0, c.jsx)("h2", {
                dangerouslySetInnerHTML: {
                  __html: m
                }
              }), i && (0, c.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: i
                }
              })]
            }), !!s.length && (0, c.jsx)("div", {
              className: l ? Y.verticalCtaBlock : Y.ctaBlock,
              children: (0, c.jsx)(Q.TinaParser, {
                components: {
                  Cta: T.A,
                  ExpandingPlatformButton: M.A
                },
                tina: {
                  payload: {
                    content: s
                  }
                }
              })
            }), !!r.length && (0, c.jsx)("div", {
              className: Y.ctaBlock,
              children: (0, c.jsx)(ee, {
                animated: a,
                ctas: r,
                expandingButtonLabel: n
              })
            }), d && (0, c.jsx)(W.P.div, {
              className: Y.legalText,
              variants: a ? X : void 0,
              children: (0, c.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: d
                }
              })
            })]
          })
        },
        te = e => {
          let {
            animated: a = !1,
            backgroundImage: t,
            brands: s = [],
            className: r,
            ctas: i = [],
            cta: n,
            description: o = "",
            expandingButtonLabel: d = "Subscribe",
            layeredImage: m,
            layeredImageSettings: u,
            legalText: g,
            shardsSection: p = {},
            stackButtons: b = !1,
            theme: k = "gen9",
            title: v = ""
          } = e;
          const {
            breakpoints: w,
            windowWidth: h
          } = (0, l.useWindowResize)(), x = w.xxl.min, _ = (e => {
            if (!e) return null;
            const a = {},
              t = new Map([
                ["xsmall", "xs"],
                ["small", "sm"],
                ["medium", "md"],
                ["large", "lg"],
                ["xlarge", "xl"],
                ["horizontal", "--layered-horizontal-offset-"],
                ["vertical", "--layered-vertical-offset-"],
                ["imageWidth", "--layered-image-width-"]
              ]);
            return Object.entries(e).forEach((e => {
              const [s, r] = e;
              if (t.has(s)) {
                const e = t.get(s);
                Object.entries(r).forEach((r => {
                  const [i, n] = r;
                  if (t.has(s) && t.has(i)) {
                    const s = `${t.get(i)}${e}`;
                    a[s] = "imageWidth" !== i ? n ? `${n}px` : "0px" : n ? `${n}vw` : "100vw"
                  }
                }))
              }
            })), a
          })(u), y = (0, Q.useGetCdnSource)(t?.mobile?.full_src ?? null), N = (0, Q.useGetCdnSource)(t?.desktop?.full_src ?? y), j = (0, Q.useGetCdnSource)(m?.mobile?.full_src ?? null), S = (0, Q.useGetCdnSource)(m?.desktop?.full_src ?? j), T = (0, f.useMemo)((() => {
            const {
              mobileStyle: e,
              desktopStyle: a,
              style: s
            } = t ?? {};
            return {
              ...s,
              ...h >= x ? a : e
            }
          }), [h, t?.style, t?.mobileStyle, t?.desktopStyle]);
          return (0, c.jsxs)(W.P.div, {
            className: (0, l.classList)(Y.hero, r),
            style: {
              "--background-image-desktop": `url(${N})`,
              "--background-image-mobile": `url(${y})`,
              "--layered-image-desktop": `url(${S})`,
              "--layered-image-mobile": `url(${j})`
            },
            initial: "hidden",
            animate: "visible",
            variants: a ? K : void 0,
            "data-type": "hero",
            theme: k,
            children: [(0, c.jsxs)("div", {
              className: Y.images,
              children: [N && y ? (0, c.jsx)("div", {
                className: Y.background,
                style: T ?? {}
              }) : "", j && S ? (0, c.jsx)("div", {
                className: Y.layered,
                style: u ? _ : {}
              }) : "", (0, c.jsx)("div", {
                className: Y.gradient
              })]
            }), (0, c.jsx)(ae, {
              animated: a,
              brands: s,
              cta: n,
              ctas: i,
              description: o,
              expandingButtonLabel: d,
              legalText: g,
              stackButtons: b,
              title: v
            }), p?.shards && (0, c.jsx)(Z, {
              ...p
            })]
          })
        };
      var se = t(89028),
        re = t(89972);
      const ie = {
          layeredImage: "rockstargames-modules-core-newswire-articlefb27e7361e78dacdcf500e0b9a2b4fce",
          layersWrapper: "rockstargames-modules-core-newswire-articleaf169afca6f741daca0331a1b13fa5f1",
          "hero-lg": "rockstargames-modules-core-newswire-articleb722bba74c792beb73ccdfec4506b591",
          "hero-md": "rockstargames-modules-core-newswire-articlec6b26605a3817704bbf427741edb98f8",
          "hero-sm": "rockstargames-modules-core-newswire-articlee7b70cd5245ee850b5a2bfd048fa02c4",
          contain: "rockstargames-modules-core-newswire-articlec409c9fefffbfffd091f81bdd75ab8a6",
          cover: "rockstargames-modules-core-newswire-articlea72cf62465acbddecc3a2cb256640fac",
          fill: "rockstargames-modules-core-newswire-articlec12eb7986b09f10158c48ad4a902f2ef",
          "bg-img": "rockstargames-modules-core-newswire-articleae25e5bf6793a5522c791028f396dedd",
          imageLayer: "rockstargames-modules-core-newswire-articlea63d213c123e7da5863c6256e847eb0f",
          "layer-lg-height": "rockstargames-modules-core-newswire-articlea206e14a6e055900c30ee67826330173",
          "layer-md-height": "rockstargames-modules-core-newswire-articlee2a2cf239dc64e006fdc9c2c3d280b8e",
          "layer-sm-height": "rockstargames-modules-core-newswire-articlec947fc08bb64674c4bf0429e7914507e",
          "layer-xl-height": "rockstargames-modules-core-newswire-articlea4d21457b55a0626d1cf5170845ba8d6",
          "layer-xs-height": "rockstargames-modules-core-newswire-articled0f6abd48b388b8e3b18eee4bc19039d",
          "layer-xxl-height": "rockstargames-modules-core-newswire-articled74cf249eb57fb6682f07fe13fdfdb4a",
          "layer-lg-width": "rockstargames-modules-core-newswire-articlefb58e41629b31453b12d8bbcc525608f",
          "layer-md-width": "rockstargames-modules-core-newswire-articlef1d2c109e21746d5fa00c85e56e61b10",
          "layer-sm-width": "rockstargames-modules-core-newswire-articlea1289245dc6b1854c3aec5b1a8a11593",
          "layer-xl-width": "rockstargames-modules-core-newswire-articlee5ecbec181677eea6c9c72e02580c501",
          "layer-xs-width": "rockstargames-modules-core-newswire-articlec60b1a515049d3f670d8c5a76c8a1bf6",
          "layer-xxl-width": "rockstargames-modules-core-newswire-articleac03c56e2475aecafc08e873eed26566",
          "bottom-y": "rockstargames-modules-core-newswire-articled66e5203a7bd3c85b99e6caef49b2e9b",
          "center-x": "rockstargames-modules-core-newswire-articlecc06519a4a0d2db824b70a425c8cefd6",
          "center-y": "rockstargames-modules-core-newswire-articled6ce82f1bd5cbf6b4abe650a2738c723",
          "left-x": "rockstargames-modules-core-newswire-articlebb4dd9e1570a80cc01f752a2230abdac",
          "right-x": "rockstargames-modules-core-newswire-articled50c0c4bee9b09502dd611543223ed37",
          "top-y": "rockstargames-modules-core-newswire-articlea9cd0a03e7193a5b47c6e767e045a1ec",
          border: "rockstargames-modules-core-newswire-articleaf6154339558ed7e6e46014575250492",
          shards: "rockstargames-modules-core-newswire-articlea0d1e1b5705f11b3b9301717bc5f6245",
          shards_three: "rockstargames-modules-core-newswire-articlecf01ef76b0d5cc2a7bc4f005be4eb31f",
          shards_two: "rockstargames-modules-core-newswire-articlef317b17c9b0f0a27ed95ec2844857f25",
          dual: "rockstargames-modules-core-newswire-articleb9c969b033c5016f95d5a70ceea22071"
        },
        ne = e => {
          let {
            style: a,
            className: t
          } = e;
          const s = {
              ...a
            },
            r = a["--border-image-source"],
            i = (0, Q.useGetCdnSource)(r || null);
          return r && (s["--border-image-source"] = `url(${i})`), (0, c.jsx)("div", {
            className: (0, l.classList)(ie.border, t),
            style: {
              ...s
            }
          })
        },
        ce = e => e?.images ? (0, c.jsx)("div", {
          className: (0, l.classList)(ie.layeredImage, ie[e?.variantClass], ie[e?.wrapperSizeClass]),
          style: {
            ...e?.style ?? {}
          },
          children: (0, c.jsxs)("div", {
            className: ie.layersWrapper,
            children: [e?.images?.map(((e, a) => {
              const {
                image: t,
                paddingClass: s,
                imageSizeClass: r,
                objectFitClass: i,
                positionClassX: n,
                positionClassY: o,
                zIndex: d,
                className: m,
                style: u,
                alt: g,
                displayClass: f
              } = e;
              return (0, c.jsx)(re.A, {
                image: t,
                style: {
                  zIndex: d ?? a + 1
                },
                imageStyle: u,
                className: (0, l.classList)(m, f, ie.imageLayer, ie[s], ie[r], ie[i], ie[n], ie[o]),
                alt: g
              }, d ?? a + 1)
            })), e?.borderImage && (0, c.jsx)(ne, {
              style: e?.borderImage,
              className: e?.borderImage?.displayClass
            })]
          })
        }) : null;
      var oe = t(37896),
        de = t(13916);
      const le = e => {
        const {
          src: a,
          thumbnail: t,
          style: s
        } = e, r = (0, de.C1)(a), i = (0, de.C1)(t?.thumbnail ?? ""), n = {
          ...t,
          ...e,
          src: r,
          thumbnail: i
        };
        return (0, c.jsx)("div", {
          style: s,
          className: "rockstargames-modules-core-newswire-articleadbaa0167219cd891249a29faec00e8f",
          children: (0, c.jsx)(oe.Lightbox, {
            ...n
          })
        })
      };
      var me = t(87782);
      const ue = {
          pillBtn: "rockstargames-modules-core-newswire-articlec79dd3a7e7c5c11adfd19c623716576f",
          selected: "rockstargames-modules-core-newswire-articlec53675ad15e2ef662362850daab33791",
          multiSourceContainer: "rockstargames-modules-core-newswire-articlea99f18f8581cc9aeafa5111379885ee6",
          multiSourceImage: "rockstargames-modules-core-newswire-articlebc42c525ec0bd93df46e1999e278e9fb",
          animatePlaceholder: "rockstargames-modules-core-newswire-articlef6f51dbe7c2f79f974e9573386bba9da",
          "loader-keyframes": "rockstargames-modules-core-newswire-articlec3684b80c99c860036d9337843a7be58"
        },
        ge = e => {
          let {
            imageUrl: a,
            className: t,
            alt: s,
            style: r,
            lazy: i = !1,
            decoding: n = "auto",
            sizes: o = [320, 480, 768, 1024, 1440, 1920, 2560]
          } = e;
          const [d, l] = (0, f.useState)(!1);
          return (0, c.jsxs)("div", {
            className: ue.multiSourceContainer,
            children: [!d && (0, c.jsx)("img", {
              className: [t, ue.animatePlaceholder].join(" "),
              src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjMzMzMzMzIi8+Cjwvc3ZnPgo=",
              sizes: "(max-width: 1024px) 100vw, 1024px",
              alt: "Loading...",
              style: r
            }), (0, c.jsx)("img", {
              className: [ue.multiSourceImage, t].join(" "),
              src: `${a}?im=Resize=1920`,
              srcSet: (m = a, o.map((e => `${m}?im=Resize=${e} ${e}w`)).join(", ")),
              sizes: "(max-width: 400px) 200px, (max-width: 1920px) 100vw, 1920px",
              alt: s ?? "Multi-Source Image",
              style: r,
              onLoad: () => {
                l(!0)
              },
              loading: i ? "lazy" : "eager",
              decoding: n
            })]
          });
          var m
        },
        fe = {
          pillBtn: "rockstargames-modules-core-newswire-articleec4cf2a0d1bf4b163356a239c9fcd2c5",
          selected: "rockstargames-modules-core-newswire-articlef2bcb112e2fedaca40598307a49544c4",
          dialogButton: "rockstargames-modules-core-newswire-articlead86d4b21240f743281b4922702072b0",
          primary: "rockstargames-modules-core-newswire-articlee4ce9e8b1c839a16acd1198dd6155b0a",
          secondary: "rockstargames-modules-core-newswire-articlec2b869b762352eaa5d0adbeb70fac94c"
        },
        pe = e => {
          let {
            button: a,
            closeDialog: t,
            style: s = "primary"
          } = e;
          const {
            buttonIcon: r,
            buttonText: i,
            extraClasses: n,
            isDisabled: o,
            isLink: d,
            link: l,
            onClick: m,
            testId: u
          } = a;
          return d ? i && (0, c.jsx)("a", {
            className: [fe.dialogButton, fe.link, fe[s], n].join(" "),
            href: l,
            ...u && {
              "data-testid": u
            },
            children: i
          }) : (0, c.jsx)("button", {
            className: [fe.dialogButton, fe[s], n].join(" "),
            disabled: o,
            onClick: e => (e => {
              m && m(), t && t(), e.stopPropagation()
            })(e),
            type: "button",
            value: "cancel",
            "aria-label": i,
            ...u && {
              "data-testid": u
            },
            children: (0, c.jsxs)("span", {
              children: [i, r && (0, c.jsx)("div", {
                className: fe.ctaIcon
              })]
            })
          })
        },
        be = {
          pillBtn: "rockstargames-modules-core-newswire-articleb403f298c2eff00899432c93daa15aec",
          selected: "rockstargames-modules-core-newswire-articlea6cab397bf3a16564fcc531ef4c16130",
          dialog: "rockstargames-modules-core-newswire-articled2c9ef0a70d425745a27c169c594199a",
          "slide-up": "rockstargames-modules-core-newswire-articleb2b3117a07a11b3ec5897e4718e24373",
          "fade-in": "rockstargames-modules-core-newswire-articlee30057881578a38b5dc6f50854c6b56d",
          heading: "rockstargames-modules-core-newswire-articledab9a8f190197c99405cebe1e9a992d6",
          message: "rockstargames-modules-core-newswire-articlef7cd64be4f94a272222f88f34789734a",
          icon: "rockstargames-modules-core-newswire-articlebc1e57fee27452c58670e4f60e492246",
          check: "rockstargames-modules-core-newswire-articleb63b9588fb98b439d19028797670c6c5",
          error: "rockstargames-modules-core-newswire-articlef654f7a2bf475a939f8c05fb569bfd5e",
          mail: "rockstargames-modules-core-newswire-articleb120386c4c2485c587f87173721d63be",
          content: "rockstargames-modules-core-newswire-articleefe65f5c39de5d044fdc6b13c1771125",
          actions: "rockstargames-modules-core-newswire-articled35d1125eabb9ae0e941bd585003c4fc"
        },
        ke = e => {
          let {
            icon: a,
            title: t,
            secondaryText: s,
            buttons: r,
            showDialog: i,
            onClose: n = (() => {}),
            closeOnOutsideClick: o = !0,
            extraClasses: d
          } = e;
          const m = (0, f.useRef)(null),
            {
              setBodyIsLocked: u
            } = (0, l.useBodyScrollable)("AlertDialog");
          (0, f.useEffect)((() => {
            i && m?.current && (m.current?.showModal?.(), u(!0))
          }), [i]);
          const g = () => {
            u(!1), n(), m.current?.close?.()
          };
          if (i) return (0, c.jsxs)("dialog", {
            ref: m,
            className: be.dialog,
            onClick: e => (e => {
              if (!e.currentTarget) return;
              const a = e.currentTarget.getBoundingClientRect();
              (a.left > e.clientX || a.right < e.clientX || a.top > e.clientY || a.bottom < e.clientY) && o && (u(!1), n(), e.currentTarget.close())
            })(e),
            "data-testid": "alert-dialog",
            children: [a && (0, c.jsx)("i", {
              className: [be.icon, be[a]].join(" ")
            }), (0, c.jsxs)("div", {
              className: [be.content, d?.content].join(" "),
              children: [(0, c.jsx)("h3", {
                className: [be.heading, d?.heading].join(" "),
                children: t
              }), s && (0, c.jsx)("div", {
                className: [be.message, d?.message].join(" "),
                dangerouslySetInnerHTML: {
                  __html: s
                }
              })]
            }), r && (0, c.jsx)("div", {
              className: be.actions,
              children: r.slice(0, 2).map(((e, a) => (0, c.jsx)(pe, {
                style: 0 === a ? "primary" : "secondary",
                button: e,
                closeDialog: g
              }, e.buttonText)))
            })]
          })
        };
      var ve = t(38701),
        we = t(61940),
        he = t(46368),
        xe = t.n(he);
      const _e = (0, l.withTranslations)((e => {
        let {
          section: a = "",
          relativeTo: t = "",
          tagId: s = null,
          metaUrl: r = "/newswire",
          t: i
        } = e;
        const {
          track: n
        } = (0, b.h)(), [o, l] = (0, p.useSearchParams)(), {
          tagId: m = null
        } = (0, p.useParams)(), [u, g] = (0, f.useState)(m ?? s ?? o.get("tag_id")), [k, v] = (0, f.useState)(1), [w, h] = (0, f.useState)(20), [x, _] = (0, f.useState)([]), [y, N] = (0, f.useState)(null), [j, {
          loading: S,
          data: T
        }] = (0, we._l)(xe(), {
          variables: {
            tagId: Number(u),
            page: k,
            metaUrl: r,
            limit: w,
            locale: "en_us"
          }
        });
        return (0, f.useEffect)((() => {
          v(1), _([]), h(20), g(m ?? s ?? o.get("tag_id")), j()
        }), [o.get("tag_id"), m, s]), (0, f.useEffect)((() => {
          const e = x;
          T?.posts?.paging && N(T?.posts?.paging), T?.posts?.results && _(e.concat(T?.posts?.results))
        }), [T]), (0, f.useEffect)((() => {
          (() => {
            const e = o.get("page"),
              a = Number(e ?? 1);
            h(20 * a), j()
          })()
        }), []), x.length ? (0, c.jsxs)("div", {
          "data-testid": "newswire-list",
          children: [(0, c.jsx)(Se, {
            section: a,
            posts: x,
            relativeTo: t,
            noSpecialOrder: null !== u
          }), null !== y && y.nextPage ? (0, c.jsx)(d.A, {
            className: "rockstargames-modules-core-newswire-articlee125d510192feb4ce2844cb97084b838",
            "data-testid": "more-stories",
            onClick: e => {
              const a = o.get("page"),
                t = Number(a ?? k) + 1;
              v(t), 20 !== w && h(20), j(), l({
                page: String(t)
              }, {
                replace: !0
              }), n({
                event: "cta_learn",
                text: "more stories",
                element_placement: "newswire"
              })
            },
            disabled: S,
            context: "secondary",
            children: i("More Stories")
          }) : ""]
        }) : null
      }));
      var ye = t(39544),
        Ne = t(26213);
      const je = {
          newswireBlocks: "rockstargames-modules-core-newswire-articleea687097d9239d4830bc03090f0116f2",
          noSpecialOrder: "rockstargames-modules-core-newswire-articled301334a72b626f8cc2f5b9733299e76"
        },
        Se = (0, l.withGtmTracking)((e => {
          let {
            section: a = "",
            noSpecialOrder: t = !1,
            posts: s,
            gtmTrack: r,
            relativeTo: i
          } = e;
          const [n, o] = (0, f.useState)(null);
          return (0, f.useEffect)((() => {
            if (!s.length) return;
            const e = {
              event: "view_item_list",
              ecommerce: {
                impressions: []
              }
            };
            s.map(((t, s) => {
              e.ecommerce.impressions.push({
                name: t.title,
                id: t.id,
                position: s + 1,
                list: a
              })
            })), r(e), o(s.length)
          }), [s.length]), (0, c.jsx)("div", {
            "data-testid": "newswire-blocks-container",
            className: [je.newswireBlocks, t ? je.noSpecialOrder : "", je.contextHome].join(" "),
            children: s.map(((e, s) => (0, c.jsx)(ve.A, {
              section: a,
              index: s,
              noSpecialOrder: t,
              post: e,
              focused: s === n
            }, e.id)))
          })
        }));
      var Te = t(67306);
      const Ce = "rockstargames-modules-core-newswire-articleb013d77f453d7053bbcf06f173ff326c",
        Ae = e => {
          let {
            children: a,
            data: t,
            onPageUpdate: s,
            page: r,
            className: i
          } = e;
          return (0, c.jsx)("a", {
            href: "#",
            className: r === t.page ? `rockstargames-modules-core-newswire-articleb577d5726806ec872ecdb8a46905734f ${i??""}` : "",
            onClick: e => {
              e.preventDefault(), s(r)
            },
            children: a
          })
        },
        Ie = e => {
          let {
            data: a,
            onPageUpdate: t,
            className: s
          } = e;
          if (1 === a.pageCount) return null;
          const r = new Array(Math.min(a.pageCount, 8)),
            i = Math.max(a.pageCount - 8, 1),
            n = Math.max(2, a.page - 4),
            o = Array.from(r, ((e, a) => a + Math.min(i, n)));
          return (0, c.jsxs)("div", {
            className: `rockstargames-modules-core-newswire-articlee480f25872ae2a8b3fcd1e492d838301 ${s??""}`,
            children: [a.pageCount > 8 ? (0, c.jsxs)(c.Fragment, {
              children: [(0, c.jsx)(Ae, {
                data: a,
                onPageUpdate: t,
                page: 1,
                children: "1"
              }), 2 !== o[0] ? (0, c.jsx)("div", {
                className: Ce,
                children: "..."
              }) : ""]
            }) : "", o.map((e => (0, c.jsx)(Ae, {
              data: a,
              onPageUpdate: t,
              page: e,
              className: s,
              children: e
            }, e))), a.pageCount > 8 ? (0, c.jsxs)(c.Fragment, {
              children: [o.slice(-1)[0] + 1 < a.pageCount ? (0, c.jsx)("div", {
                className: Ce,
                children: "..."
              }) : "", (0, c.jsx)(Ae, {
                data: a,
                onPageUpdate: t,
                page: a.pageCount,
                children: a.pageCount
              })]
            }) : ""]
          })
        };
      var Le = t(81551);
      const Ee = e => {
          let {
            children: a
          } = e;
          const {
            parallaxController: t
          } = (0, Le.as)();
          return (0, f.useLayoutEffect)((() => {
            if (!t) return;
            const e = setInterval((() => {
              t.update()
            }), 500);
            return () => clearInterval(e)
          }), [t]), a
        },
        Pe = {
          parallaxWrapper: "rockstargames-modules-core-newswire-articlee30c08cf0e042f7fc7bed0c23c0bfb31",
          large: "rockstargames-modules-core-newswire-articlee15ce487b25ba576b6e2b31df308098f",
          medium: "rockstargames-modules-core-newswire-articledfdaa6f63f8e8bd10576fa2debcbc1fc",
          small: "rockstargames-modules-core-newswire-articlec32a973dbc862a43cc5d4a2aac19ed9b"
        },
        ze = e => {
          let {
            scrollAxis: a = "vertical",
            size: t = "",
            style: s = {},
            children: r
          } = e;
          return (0, c.jsx)(Le.zE, {
            scrollAxis: a,
            children: (0, c.jsx)(Ee, {
              children: (0, c.jsx)("div", {
                className: (0, l.classList)(Pe.parallaxWrapper, Pe[t]),
                style: s,
                "data-context": "parallax-wrapper",
                children: r ? r.map(((e, t) => (0, f.cloneElement)(e, {
                  scrollAxis: a,
                  style: {
                    ...e?.props?.style,
                    zIndex: t
                  }
                }))) : (0, c.jsx)("div", {})
              })
            })
          })
        },
        Fe = e => {
          let {
            layers: a = [],
            displayClass: t = "",
            style: s = {}
          } = e;
          const r = (0, Q.useGenerateCdnSource)();
          if (!a || !a[0]?.image) return null;
          const i = a.map((e => ({
            ...e,
            props: {
              style: {
                ...e.style
              }
            },
            style: void 0,
            image: r(e?.image ?? null)
          })));
          return (0, c.jsx)(Le.y, {
            className: (0, l.classList)("rockstargames-modules-core-newswire-articlec1c689cf47230fa80bccc9b20515d4fa", t),
            layers: i,
            style: s
          })
        },
        Ve = "rockstargames-modules-core-newswire-articleae8bfc3f9a519606a95144e64ee454b5",
        De = e => {
          let {
            minOffset: a = 0,
            maxOffset: t = 0,
            scrollAxis: s = "vertical",
            displayClass: r = "",
            style: i = {},
            children: n
          } = e;
          return "horizontal" === s ? (0, c.jsx)(Le.kQ, {
            x: [a, t],
            className: (0, l.classList)(Ve, r),
            styleOuter: i,
            children: n
          }) : (0, c.jsx)(Le.kQ, {
            y: [a, t],
            className: (0, l.classList)(Ve, r),
            styleOuter: i,
            children: n
          })
        },
        Me = {
          pillBtn: "rockstargames-modules-core-newswire-articleb12cdd53cc59cb42903d11d9fdceca7f",
          selected: "rockstargames-modules-core-newswire-articlee03b475da5ca3ded74e8c6dfd54fb476",
          promoModule: "rockstargames-modules-core-newswire-articleeabbb5f24c40ef994b612515a0d0f356",
          promoModuleImage: "rockstargames-modules-core-newswire-articleb8584eedfbe5a91aaf72c40ec1d619a5",
          gradient: "rockstargames-modules-core-newswire-articleb78d3c0bdc9668bb3d318825467177ab",
          promoModuleContentContainer: "rockstargames-modules-core-newswire-articleef7d758b0d1515fcebe6cb22271a4688",
          left: "rockstargames-modules-core-newswire-articlef4448b69feb648b8b910230c6f873dbd",
          right: "rockstargames-modules-core-newswire-articleb69bb02f1c00007e9b4eab8217e2f08e",
          promoModuleTextContent: "rockstargames-modules-core-newswire-articleb590150a7ac01a01a493b85b7ea5cf90",
          promoModuleWrapper: "rockstargames-modules-core-newswire-articlede25220583bb9220882329a113f7a5e2"
        },
        $e = e => {
          let {
            backgroundColor: a,
            brands: t = [],
            description: s = "",
            ctaLabel: r,
            ctaLink: i = "https://rockstargames.com",
            gradient: n = !0,
            image: d,
            imageOrientation: l = "right",
            title: u = "",
            name: g = ""
          } = e;
          const [p, k] = (0, f.useState)(!1), {
            ref: v,
            inView: w
          } = (0, O.Wx)({
            threshold: .6
          }), {
            track: h
          } = (0, b.h)(), x = {
            "--promo-background": a ?? "var(--black-200)",
            "--promo-image": `url(${(0,Q.useGetCdnSource)(d)??"var(--promo-background)"})`,
            "--promo-order": "left" === l ? "row" : "row-reverse"
          };
          return (0, f.useEffect)((() => {
            w && !p && (h({
              event: "page_section_impression",
              element_placement: g
            }), k(!0))
          }), [w]), (0, c.jsx)(c.Fragment, {
            children: (0, c.jsx)("div", {
              className: Me.promoModuleWrapper,
              children: (0, c.jsxs)(W.P.div, {
                className: Me.promoModule,
                style: {
                  ...x
                },
                initial: {
                  opacity: 0
                },
                whileInView: {
                  opacity: 1
                },
                viewport: {
                  margin: "-20%",
                  once: !0
                },
                transition: {
                  ease: "easeIn",
                  duration: .4
                },
                ref: v,
                children: [(0, c.jsx)("div", {
                  className: [Me.promoModuleImage, n ? Me.gradient : "", "left" === l ? Me.left : Me.right].join(" ")
                }), (0, c.jsxs)("div", {
                  className: Me.promoModuleContentContainer,
                  children: [(0, c.jsx)(o, {
                    brands: t,
                    className: Me.promoModuleBrands
                  }), (0, c.jsxs)("div", {
                    className: Me.promoModuleTextContent,
                    children: [u && (0, c.jsx)("h3", {
                      children: u
                    }), s && (0, c.jsx)("p", {
                      children: s
                    })]
                  }), r && (0, c.jsx)(m.A, {
                    to: i,
                    text: r,
                    onClick: () => {
                      h({
                        event: "cta_other",
                        element_placement: "promo module",
                        link_url: i,
                        text: r
                      })
                    }
                  })]
                })]
              })
            })
          })
        };
      var Be = t(81788),
        Oe = t(20066);
      const Ge = {
          rating: "rockstargames-modules-core-newswire-articlec3e95c84902dd75b827d3c95532e22dc",
          withDescriptors: "rockstargames-modules-core-newswire-articleb98963abfc7a63295bebc6c6d15b391a",
          withOutDescriptors: "rockstargames-modules-core-newswire-articleb6339480b5fd086fb0c025930bfb7dcd",
          text: "rockstargames-modules-core-newswire-articlebabdd6ae2ff83f380dadc6982effa011"
        },
        Re = (0, Be.defineMessages)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      var He = t(95520);
      (0, l.importAll)(t(36672));
      const Ue = (0, H.A)((0, Be.withIntl)((e => {
        let {
          descriptors: a = null,
          footer: s = null,
          href: i,
          img: n = null,
          titleSlug: o = null,
          style: d = {},
          className: m
        } = e;
        const [u, g] = (0, f.useState)(!1), {
          inView: p
        } = (0, O.Wx)({
          threshold: .6
        }), [k, v] = (0, f.useState)({
          ratingDescriptors: a,
          ratingFooter: s,
          ratingImg: n,
          ratingUrl: i
        }), {
          track: w
        } = (0, b.h)(), h = (0, Be.useIntl)(), {
          data: x
        } = (0, l.useQuery)(He.GameData, {
          variables: {
            titleSlug: o
          },
          skip: !o
        });
        if ((0, f.useEffect)((() => {
            x && v(x?.game)
          }), [x]), (0, f.useEffect)((() => {
            p && !u && k.img_rating && (w({
              event: "page_section_impression",
              element_placement: "rating"
            }), g(!0))
          }), [p]), !k.ratingImg) return null;
        const _ = !!k.ratingDescriptors;
        return (0, c.jsxs)("div", {
          className: [Ge.rating, _ ? Ge.withDescriptors : Ge.withOutDescriptors, m || ""].join(" "),
          style: (0, l.safeStyles)(d),
          children: [(0, c.jsx)(r.A, {
            to: k.ratingUrl,
            target: "_blank",
            children: (0, c.jsx)("img", {
              alt: h.formatMessage(Re.components_ratings_link_alt, {
                rating: (y = k.ratingImg, y.replace(/_/g, " ").split(".")[0].toUpperCase())
              }),
              src: t(8194)(`./${k.ratingImg}`)
            })
          }), _ && (0, c.jsxs)("div", {
            className: Ge.text,
            children: [(0, c.jsx)("p", {
              className: Ge.descriptors,
              dangerouslySetInnerHTML: {
                __html: k?.ratingDescriptors?.split(/<br\s?\/?>/).join(", ") || ""
              }
            }), k.ratingFooter && (0, c.jsx)("hr", {}), k.ratingFooter && (0, c.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: k.ratingFooter.replace(/ \//g, ", ")
              }
            })]
          })]
        });
        var y
      }), Oe));
      var qe = t(11079),
        We = t(29623),
        Qe = t(71678),
        Ye = t(85932),
        Ke = t(47002),
        Xe = t(29428);
      const Je = e => {
        let {
          disableLink: a,
          className: t
        } = e;
        const s = a ? "span" : r.A;
        return (0, c.jsx)(s, {
          className: [a ? "rockstargames-modules-core-newswire-articleb28a6ee32abeb20049b97677a86a4314" : "rockstargames-modules-core-newswire-articlea3d920a1139575706b914bc3a0100970", t || ""].join(" "),
          alt: "Rockstar Games Home",
          ...!a && {
            to: "/"
          }
        })
      };
      var Ze = t(79945);
      const ea = e => {
          let {
            thresholds: a,
            onThresholdReached: t,
            children: s
          } = e;
          const [r, i] = (0, f.useState)([]), [n, o] = (0, f.useState)(new Set);
          return (0, f.useEffect)((() => {
            const e = Array.from(new Set(a));
            e.sort(((e, a) => e - a)), i(e)
          }), [a]), (0, c.jsxs)("div", {
            style: {
              position: "relative"
            },
            children: [r.map((e => (0, c.jsx)(O.pL, {
              threshold: e,
              onChange: a => ((e, a) => {
                e && !n.has(a) && o((e => {
                  const s = new Set(e);
                  return r.forEach((e => {
                    e <= a && !s.has(e) && (s.add(e), t(e))
                  })), s
                }))
              })(a, e),
              triggerOnce: !0,
              children: a => {
                let {
                  ref: t
                } = a;
                return (0, c.jsx)("div", {
                  ref: t,
                  style: {
                    height: "1px",
                    position: "absolute",
                    top: 100 * e + "%"
                  }
                })
              }
            }, e))), s]
          })
        },
        aa = () => {
          const {
            pathname: e
          } = (0, p.useLocation)();
          return (0, f.useEffect)((() => {
            const e = document.scrollingElement || document.documentElement;
            setTimeout((() => {
              e.scrollTop = 0
            }), 0)
          }), [e]), null
        };
      var ta = t(7048),
        sa = t(34327),
        ra = t(11308);
      const ia = e => {
        let {
          children: a
        } = e;
        return (0, c.jsx)("div", {
          className: "rockstargames-modules-core-newswire-articleaae4d33d1eecebdc9b489f8d7a1ad708",
          children: (0, c.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articlec573fe5c7bdcc46c4d57ec4a2c275e3b",
            children: a
          })
        })
      };
      var na = t(79889),
        ca = t(26908),
        oa = t(13647),
        da = t(3225);
      const la = e => {
        let {
          children: a,
          style: t,
          theme: s
        } = e;
        const [r, i] = (0, f.useState)(s);
        return (0, f.useEffect)((() => {
          s && i(s)
        }), [s]), (0, c.jsx)("div", {
          className: "rockstargames-modules-core-newswire-articlee5e0faf6ab9871fd60b958c6f7dcf519",
          style: t,
          "data-theme": r,
          children: a
        })
      };
      var ma = t(89363),
        ua = t(48524);
      const ga = {
          pillBtn: "rockstargames-modules-core-newswire-articlea0626acfa0dbdfdfd4f40b93134ac915",
          selected: "rockstargames-modules-core-newswire-articlede6015fb35bdee07192c1656ba4893e3",
          userVote: "rockstargames-modules-core-newswire-articleb32a59a8a63c53cc278266d726c9c5da",
          info: "rockstargames-modules-core-newswire-articlecee10f330f3ac6fba73fc06ac99bc951",
          voteContent: "rockstargames-modules-core-newswire-articleaad01ad44bcc6161ad363910e931515f",
          loggedOutButtons: "rockstargames-modules-core-newswire-articlec393b8f2d3b5b3e9204881ae6ff0fdc5",
          voteButtons: "rockstargames-modules-core-newswire-articledda673f7473820d8884c017373c780f6",
          downVote: "rockstargames-modules-core-newswire-articlee23b13b0d0be49814d3770c10365c096",
          upVote: "rockstargames-modules-core-newswire-articleb3be682e82659d45f93c2fe63ccd73ba",
          voteButtonActive: "rockstargames-modules-core-newswire-articlef9e46f58f97d2b391aaf715861654cd7"
        },
        fa = e => {
          let {
            description: a,
            foreign_id: t = document.location.pathname,
            foreign_type: s = "url",
            title: r
          } = e;
          const {
            track: i
          } = (0, b.h)(), {
            loggedIn: n
          } = (0, b.Wx)(), {
            refetch: o
          } = (0, l.useQuery)(ua.UserGetVote, {
            skip: !0
          }), [d] = (0, l.useMutation)(ua.UserCastVote), [m, u] = (0, f.useState)(null), g = (0, f.useCallback)((async e => {
            i({
              event: "cta_" + (e ? "like" : "dislike"),
              text: `${s} ${t}`
            });
            const a = {
                foreign_id: t,
                foreign_type: s,
                vote: e
              },
              r = await d({
                variables: a
              });
            u(r?.data?.userCastVote?.vote ?? null)
          }), [t, s]);
          return (0, f.useEffect)((() => {
            (async () => {
              if (!n || !t || !s) return;
              const e = await o({
                foreign_id: t,
                foreign_type: s
              });
              u(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [t, s, n]), (0, c.jsx)("div", {
            className: ga.userVote,
            children: (0, c.jsxs)("div", {
              className: ga.voteContent,
              children: [(0, c.jsxs)("div", {
                className: ga.info,
                children: [(0, c.jsx)("h3", {
                  children: r
                }), (0, c.jsx)("p", {
                  children: a
                })]
              }), (0, c.jsxs)("div", {
                className: [ga.voteButtons, n ? "" : ga.loggedOutButtons].join(" "),
                children: [(0, c.jsx)("button", {
                  onClick: () => g(!0),
                  className: [ga.upVote, m ? ga.voteButtonActive : ""].join(" "),
                  type: "button",
                  "aria-label": "Vote up"
                }), (0, c.jsx)("button", {
                  className: [ga.downVote, !1 === m ? ga.voteButtonActive : ""].join(" "),
                  onClick: () => g(!1),
                  type: "button",
                  "aria-label": "Vote down"
                })]
              })]
            })
          })
        };
      var pa = t(97712),
        ba = t.n(pa);
      const ka = {
          videoPreview: "rockstargames-modules-core-newswire-articlea626ad482ff0be0336e75929516654d5",
          card: "rockstargames-modules-core-newswire-articlef93031694e202c791c00e5ae3497250a",
          info: "rockstargames-modules-core-newswire-articledabce30c906fad181d7cc188f1632c04",
          title: "rockstargames-modules-core-newswire-articlefd87597d0f90ed6d8a2081da933f53bc",
          screencap: "rockstargames-modules-core-newswire-articlefd37974f16cd1f2376fef29d4af8d948",
          screencapLoaded: "rockstargames-modules-core-newswire-articleb8d4ef3e1a73c58f4002eab351d4eec2",
          gameTitle: "rockstargames-modules-core-newswire-articlea1fe577b937c0e16250bf38e9d775061"
        },
        va = e => {
          let {
            video: a,
            size: t = 640
          } = e;
          const s = () => a.screencap.includes("akamai") ? `${a.screencap}?im=Resize=${t}` : a.screencap,
            [r] = (0, l.usePreloadImg)(s());
          return (0, c.jsx)("div", {
            className: [ka.screencap, r ? ka.screencapLoaded : ""].join(" "),
            style: {
              background: `url(${s()}) center/cover`
            }
          })
        },
        wa = e => {
          let {
            gameTitleNecessary: a = !0,
            openInNewWindow: t = !1,
            video: s,
            size: i,
            toExplicit: n
          } = e;
          const o = n ?? `/videos/${s.id}`,
            d = {
              className: ka.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": o
            },
            l = (0, c.jsxs)("div", {
              className: ka.card,
              children: [(0, c.jsx)(va, {
                video: s,
                size: i
              }), (0, c.jsxs)("div", {
                className: ka.info,
                children: [a ? (0, c.jsx)("div", {
                  className: ka.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: s.game.title
                  }
                }) : "", (0, c.jsx)("h5", {
                  className: ka.title,
                  dangerouslySetInnerHTML: {
                    __html: s.title
                  }
                })]
              })]
            });
          return t ? (0, c.jsx)("a", {
            href: o,
            target: "_blank",
            ...d,
            children: l
          }) : (0, c.jsx)(r.A, {
            to: o,
            ...d,
            children: l
          })
        },
        ha = {
          carousel: "rockstargames-modules-core-newswire-articlebc3f1abaac4c17c0e9aaac5fccfc6f7e",
          slidesContent: "rockstargames-modules-core-newswire-articlec4e301fb08e073f689a8dabd2bef9eb2",
          text: "rockstargames-modules-core-newswire-articlecdb5c063bfc35cfbaaaefc68a77c1b07",
          info: "rockstargames-modules-core-newswire-articlea4057ef942e10ebeedb1370b08c3c32b",
          active: "rockstargames-modules-core-newswire-articlee35688e0d87409e3aef95ffb624d94f4",
          title: "rockstargames-modules-core-newswire-articlee66c271fbbc8b6e431fc5d466c57479c",
          gameTitle: "rockstargames-modules-core-newswire-articleb5d3df350466b14e4b419bdb479b4064",
          videoTitle: "rockstargames-modules-core-newswire-articleed4138b1e7fecd4b6d29f0e1bef1fdfd",
          cta: "rockstargames-modules-core-newswire-articlef40c40ed1bc4242a32bc0628eea34048",
          track: "rockstargames-modules-core-newswire-articleefe7112432da76c65f293853b4c942d1",
          disableClick: "rockstargames-modules-core-newswire-articlefcd11cd5895147a9e08f8f4026d68d94",
          items: "rockstargames-modules-core-newswire-articled30be9a5f31ff7fabf20969eec3200f1",
          dragging: "rockstargames-modules-core-newswire-articleb335b03fce6834b86318f3d7cbf3fab6",
          dots: "rockstargames-modules-core-newswire-articlee0ca3ed410818f0961345606a96f03ee"
        },
        xa = e => {
          let {
            t: a,
            videos: t
          } = e;
          const s = (0, l.useLocale)(),
            {
              track: i
            } = (0, b.h)(),
            {
              setBodyIsLocked: n
            } = (0, l.useBodyScrollable)("VideoCarousel"),
            [o, m] = (0, f.useState)(0),
            [u, g] = (0, f.useState)(0),
            p = (0, f.useRef)(null),
            k = (0, f.useRef)(null);
          return (0, f.useEffect)((() => {
            if (!p.current || !k.current) return;
            const e = new(ba())(p.current);
            e.get("press").set({
              time: 0
            }), e.get("tap").set({
              time: 150
            });
            const a = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
              s = () => {
                m(o - 1 < 0 ? 0 : o - 1), g(0)
              },
              r = () => {
                const e = o + 1 >= t.length - 1 ? t.length - 1 : o + 1;
                m(e), g(0)
              },
              i = e => {
                g(e.isFinal ? 0 : e.deltaX), "panleft" !== e.additionalEvent && "panright" !== e.additionalEvent || !k.current?.classList.contains(ha.dragging) || a() && n(!0)
              },
              c = () => {
                a() && n(!1), g(0)
              },
              d = e => {
                "press" === e.type && p.current?.classList.add(`${ha.disableClick}`), "tap" === e.type && (p.current?.classList.remove(`${ha.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
              },
              l = () => {
                a() && n(!1), p.current && p.current.classList.remove(`${ha.disableClick}`)
              },
              u = () => {
                a() && n(!1)
              };
            return k.current.addEventListener("transitionend", u), e.on("swiperight", s), e.on("swipeleft", r), e.on("pan", i), e.on("panend", c), e.on("press tap", d), e.on("pressup", l), () => {
              e.off("swiperight", s), e.off("swipeleft", r), e.off("pan", i), e.off("panend", c), e.off("press tap", d), e.off("pressup", l), k.current && k.current.removeEventListener("transitionend", u), g(0)
            }
          }), [p.current, o]), (0, c.jsxs)("section", {
            className: ha.carousel,
            children: [(0, c.jsx)("div", {
              className: ha.track,
              ref: p,
              children: (0, c.jsx)("div", {
                className: `${ha.items} ${0!==u?ha.dragging:""}`,
                ref: k,
                style: {
                  transform: `translateX(calc(-${100*o}% + ${u}px))`
                },
                children: t.map(((e, a) => (0, c.jsx)(r.A, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through screencap",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  className: o === a ? ha.active : "",
                  role: "link",
                  title: e.title,
                  tabIndex: o === a ? 0 : -1,
                  children: (0, c.jsx)(va, {
                    video: e,
                    size: 1280
                  })
                }, e.id)))
              })
            }), (0, c.jsxs)("div", {
              className: ha.slidesContent,
              children: [(0, c.jsx)("div", {
                className: ha.text,
                children: t.map(((e, t) => {
                  return (0, c.jsxs)(r.A, {
                    className: [ha.info, t === o ? ha.active : ""].join(" "),
                    "data-gtm-category": "Carousel",
                    "data-gtm-action": "Click-through footer",
                    "data-gtm-label": `/videos/${e.id}`,
                    to: `/videos/${e.id}`,
                    role: "link",
                    title: e.title,
                    tabIndex: o === t ? 0 : -1,
                    children: [(0, c.jsxs)("div", {
                      className: ha.title,
                      children: [(0, c.jsxs)("div", {
                        className: ha.gameTitle,
                        children: [e.game.title, "fr_fr" === s && " "]
                      }), (0, c.jsx)("h2", {
                        className: ha.videoTitle,
                        children: e.title
                      })]
                    }), (0, c.jsx)(d.A, {
                      className: ha.cta,
                      onClick: (n = `/videos/${e.id}`, () => {
                        i({
                          event: "cta_watch_video",
                          text: "watch now",
                          link_url: n,
                          element_placement: "video carousel"
                        })
                      }),
                      children: a("Watch Now")
                    })]
                  }, e.id);
                  var n
                }))
              }), (0, c.jsx)("section", {
                className: ha.dots,
                "aria-controls": "video-carousel",
                "aria-label": "video carousel buttons",
                role: "group",
                children: t.map(((e, a) => (0, c.jsx)("button", {
                  "aria-label": `Slide ${a+1}`,
                  "data-gtm-category": "Marquee",
                  "data-gtm-action": "Dot click",
                  "data-gtm-label": `Dot clicked to ${a}`,
                  onClick: () => m(a),
                  className: o === a ? ha.active : "",
                  type: "button"
                }, e.id)))
              })]
            })]
          })
        },
        _a = (0, Be.defineMessages)({
          next_button_label: {
            id: "next_button_label",
            defaultMessage: "Next video page"
          },
          previous_button_label: {
            id: "previous_button_label",
            defaultMessage: "Previous video page"
          }
        }),
        ya = {
          img: "rockstargames-modules-core-newswire-articled87037fda2ea106061c7a614036a89df",
          wide: "rockstargames-modules-core-newswire-articledc444c089b89129c0a39bc61845d531f"
        };
      (0, l.importAll)(t(86751));
      const Na = e => {
          let {
            isWideCard: a = !1,
            size: s = 640,
            title: r,
            titleSlug: i
          } = e;
          const {
            isMobile: n
          } = (0, l.useWindowResize)(), o = (0, f.useMemo)((() => {
            let e = "";
            return a && (e = n ? t(75877)(`./${i}/mobile.png`) : t(55889)(`./${i}/desktop.png`)), e || (e = t(39294)(`./${i}.jpg`), e += `?im=Resize=${s}`), e
          }), [n, i]), [d] = (0, l.usePreloadImg)(o);
          return (0, c.jsx)("div", {
            role: "img",
            "aria-label": r,
            className: [ya.img, d ? ya.startAnimation : "", a ? ya.wide : ""].join(" "),
            style: {
              backgroundImage: `url(${o})`
            }
          })
        },
        ja = {
          fobLink: "rockstargames-modules-core-newswire-articled30ff40ba02b7ed14124da3ca9cd4f2b",
          wide: "rockstargames-modules-core-newswire-articlec9686ec502f78b05e47568667e90bd17"
        },
        Sa = e => {
          let {
            game: a,
            to: t
          } = e;
          const {
            titleSlug: s,
            urlOfficial: i = ""
          } = a, n = ["VI"].includes(s);
          return (0, c.jsx)(r.A, {
            "data-gtm-category": "Games",
            "data-gtm-action": "Game Click-through",
            "data-gtm-label": s,
            "data-testid": `${s}-gamecard`,
            to: t ?? i,
            target: "_self",
            className: [ja.fobLink, n ? ja.wide : ""].join(" "),
            reloadDocument: n,
            children: (0, c.jsx)(Na, {
              title: a.title,
              titleSlug: s,
              isWideCard: n
            })
          })
        },
        Ta = {
          videoList: "rockstargames-modules-core-newswire-articlebacddb57787eca7b621a046e6f23aaf5",
          sectionHeader: "rockstargames-modules-core-newswire-articlead695c18d6276297e78924feea3e6201",
          arrowNav: "rockstargames-modules-core-newswire-articlec9b73b78d75dd740e918208a9d615796",
          items: "rockstargames-modules-core-newswire-articleef63b0224f0cc9fa73a9c4549ad6c7e9",
          trackWrapper: "rockstargames-modules-core-newswire-articlebd79ab04bc93e3bcf79be808e0a06e9b",
          partial: "rockstargames-modules-core-newswire-articleab95829b388545f21071fd5bb97c25bb",
          track: "rockstargames-modules-core-newswire-articlea4d3877b3cf6bff0abccdc561c0fe149",
          arrow: "rockstargames-modules-core-newswire-articlecabb1073f7b7f75b799c87d74cfaf0ad",
          previous: "rockstargames-modules-core-newswire-articled7404262ef1f79bde0883b02110a4a5d",
          next: "rockstargames-modules-core-newswire-articlebfdf85a5867d26b52a0962be91170e36",
          disabled: "rockstargames-modules-core-newswire-articledbe1b06efadb349825f7b9b1b2778c68"
        },
        Ca = (0, Be.withIntl)((e => {
          let {
            vids: a,
            games: t,
            title: s,
            gameTitleNecessary: r
          } = e;
          const i = (0, Be.useIntl)(),
            {
              track: n
            } = (0, b.h)(),
            o = void 0 !== t ? "games" : "videos",
            [d, m] = (0, f.useState)(),
            [u, g] = (0, f.useState)(),
            [p, k] = (0, f.useState)(0),
            v = (0, f.useRef)(null),
            w = (0, f.useRef)(null);
          (0, f.useEffect)((() => {
            g({
              nextEl: w.current,
              prevEl: v.current
            })
          }), [w, v]), (0, f.useEffect)((() => {
            const e = () => {
              const e = e => window.matchMedia(`(max-width: ${e})`).matches;
              let a = 4;
              e("768px") ? a = 1 : e("990px") || e("1440px") ? a = 2.2 : e("1920px") && (a = 3.2), k(a)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [p]);
          const h = e => {
            d?.slideTo(e)
          };
          let x;
          return x = "games" === o ? (0, c.jsx)(c.Fragment, {
            children: t.results.map(((e, a) => "775700as" !== e.id && (0, c.jsx)(R.qr, {
              className: Ta.slide,
              onFocus: () => h(a),
              children: (0, c.jsx)(Sa, {
                game: e,
                dontOverrideTo: !0,
                to: `/videos?type=game&gameId=${e.id}`
              })
            }, e.id)))
          }) : (0, c.jsx)(c.Fragment, {
            children: a.map(((e, a) => (0, c.jsx)(R.qr, {
              className: Ta.slide,
              onFocus: () => h(a),
              children: (0, c.jsx)(wa, {
                video: e,
                gameTitleNecessary: r
              })
            }, e.id)))
          }), (0, c.jsxs)("section", {
            className: Ta.videoList,
            children: [(0, c.jsxs)("h3", {
              className: Ta.sectionHeader,
              children: [s, (0, c.jsxs)("div", {
                className: Ta.arrowNav,
                children: [(0, c.jsx)("button", {
                  className: [Ta.arrow, Ta.previous].join(" "),
                  type: "button",
                  ref: v,
                  "aria-label": i.formatMessage(_a.previous_button_label)
                }), (0, c.jsx)("button", {
                  className: [Ta.arrow, Ta.next].join(" "),
                  type: "button",
                  ref: w,
                  "aria-label": i.formatMessage(_a.next_button_label),
                  onKeyDown: e => {
                    if ("Tab" === e.key && !e.shiftKey) {
                      const a = d?.slides[d?.activeIndex].querySelector('a, button, [role="button"]');
                      a && (e.preventDefault(), a.focus())
                    }
                  }
                })]
              })]
            }), (0, c.jsx)("div", {
              className: [Ta.items, p % 1 != 0 ? Ta.partial : ""].join(" "),
              children: (0, c.jsx)("div", {
                className: Ta.trackWrapper,
                children: p && (0, c.jsx)(R.RC, {
                  className: Ta.track,
                  slidesPerView: p,
                  spaceBetween: 24,
                  onInit: e => {
                    m(e)
                  },
                  grabCursor: !0,
                  navigation: u,
                  modules: [G.Vx],
                  slideClass: (0, l.classList)("swiper-slide"),
                  onSlideNextTransitionEnd: () => {
                    n({
                      event: "carousel_next",
                      element_placement: s?.toLowerCase() ?? ""
                    })
                  },
                  onSlidePrevTransitionEnd: () => {
                    n({
                      event: "carousel_previous",
                      element_placement: s?.toLowerCase() ?? ""
                    })
                  },
                  onSlideChangeTransitionEnd: () => {
                    n({
                      event: "carousel_swipe",
                      element_placement: s?.toLowerCase() ?? ""
                    })
                  },
                  children: x
                })
              })
            })]
          })
        }), Oe),
        Aa = e => {
          let {
            children: a,
            ...t
          } = e;
          return (0, c.jsx)("span", {
            ...t,
            className: "rockstargames-modules-core-newswire-articleacd86b7f5778381df8fac4a3f7489f60",
            children: a
          })
        };
      var Ia = t(23375);
      class La extends f.Component {
        constructor(e) {
          super(e), this.state = {
            error: {
              code: null,
              message: null
            }
          }
        }
        componentDidUpdate(e) {
          this.props.error && e.error !== this.props.error && this.setState({
            ...this.state,
            error: this.props.error
          })
        }
        static getDerivedStateFromError(e) {
          return {
            error: {
              message: e?.message ? e.toString() : "Something has gone horribly awry.",
              code: e?.code ?? 399
            }
          }
        }
        render() {
          return null !== this.state.error.code ? (0, c.jsx)(Ia.A, {
            error: this.state.error
          }) : this.props.children
        }
      }
      const Ea = function(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return function(t) {
          return (0, c.jsx)(La, {
            header: a,
            children: (0, c.jsx)(e, {
              ...t
            })
          })
        }
      };
      var Pa = t(26495),
        za = t(36671)
    },
    43243: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var s = t(89950);
      const r = {
        button: "rockstargames-modules-core-newswire-articlebc25ec64410308d56e4dc097e81fb129",
        secondary: "rockstargames-modules-core-newswire-articlea3e6439dcaa4870840298d683db4831c"
      };
      var i = t(98096);
      const n = e => {
        let {
          className: a = "",
          children: t,
          context: n = "",
          to: c,
          onClick: o,
          target: d = "_self",
          ...l
        } = e;
        const m = [r.button, r[n], a].join(" ");
        return c ? (0, i.jsx)(s.A, {
          ...l,
          to: c,
          className: m,
          onClick: o,
          target: d,
          children: t
        }) : (0, i.jsx)("button", {
          ...l,
          type: "button",
          className: m,
          onClick: o,
          children: t
        })
      }
    },
    11079: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => i
      });
      const s = {
        responsiveFlexBox: "rockstargames-modules-core-newswire-articlefad65f02dd0ee292c36ec9d50b9c249a",
        responsiveFlexItem: "rockstargames-modules-core-newswire-articlef5215494f66727858110c9c73e2d882a",
        responsiveImage: "rockstargames-modules-core-newswire-articled437a700a9b768227a114e70db78af03"
      };
      var r = t(98096);
      const i = e => {
        let {
          children: a,
          className: t,
          style: i
        } = e;
        return (0, r.jsx)("div", {
          className: [s.responsiveFlexBox, void 0 !== t ? t : ""].join(" "),
          style: i,
          children: a
        })
      }
    },
    29623: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => i
      });
      const s = {
        responsiveFlexItem: "rockstargames-modules-core-newswire-articlee7371144db2e94a049204d4b178416ec"
      };
      var r = t(98096);
      const i = e => {
        let {
          children: a,
          className: t,
          style: i
        } = e;
        return (0, r.jsx)("div", {
          className: [s.responsiveFlexItem, void 0 !== t ? t : ""].join(" "),
          style: i,
          children: a
        })
      }
    },
    60351: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var s = t(13916),
        r = t(95966);
      var i = t(98096);
      const n = e => {
        let {
          children: a,
          context: t = null,
          game: n,
          image: c = {},
          style: o = {},
          template: d = null,
          theme: l = null,
          reversedOnMobile: m = !1,
          className: u = "",
          id: g = null
        } = e;
        const f = (0, s.S1)(c ?? {}),
          p = {
            ...o
          };
        if (f?.src?.desktop) {
          const e = (c?.style && c?.style["--background-image-size"]) ?? "var(--grid-background-size, cover)",
            a = (c?.style && c?.style["--background-image-repeat"]) ?? "var(--grid-background-repeat, no-repeat)",
            t = `var(--grid-background-position, center)/${e??"cover"}`;
          if (p.background = `url(${f?.src?.desktop}) ${a} ${t}`, c?.style && c?.style["--linear-gradient"]) p.background = `linear-gradient(${c?.style["--linear-gradient"]}), url(${f?.src?.desktop}) ${a} ${t}`;
          else if (c?.style && c?.style["--gradient-height"]) {
            const e = c?.style["--gradient-height"] || "3",
              s = c?.style["--gradient-start-color"] || "var(--background-color, transparent)",
              r = c?.style["--gradient-end-color"] || "var(--background-color, transparent)";
            p.background = `linear-gradient(180deg, ${s}, transparent ${e}%, transparent ${100-e}%, ${r}), url(${f?.src?.desktop}) ${a} ${t}`
          }
        }
        return (0, i.jsx)("div", {
          id: g,
          className: (0, r.classList)("rockstargames-modules-core-newswire-articleda87ead760b989fbe90a0b89c60b0653", m ? "rockstargames-modules-core-newswire-articledfbda195073626bc6a7690dc73fba873" : "", u),
          "data-game": "community" === d ? null : n,
          style: (0, r.safeStyles)(p),
          "data-context": t,
          "data-template": d,
          "data-theme": l,
          children: a
        })
      }
    },
    71678: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => i
      });
      const s = {
        responsiveGridBox: "rockstargames-modules-core-newswire-articlee9ae27279428e611bbce59656759ed50",
        responsiveGridItem: "rockstargames-modules-core-newswire-articleb0d14e4a5e63a903117e93a392cbfb53"
      };
      var r = t(98096);
      const i = e => {
        let {
          children: a,
          cols: t,
          className: i,
          rows: n,
          style: c
        } = e;
        const o = c ? {
          ...c
        } : {};
        return void 0 !== t && (o.gridTemplateColumns = `repeat(${t}, 1fr)`), void 0 !== n && (o.gridTemplateRows = `repeat(${n}, 1fr)`), (0, r.jsx)("div", {
          className: [s.responsiveGridBox, void 0 !== i ? i : ""].join(" "),
          style: o,
          children: a
        })
      }
    },
    85932: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => i
      });
      const s = {
        responsiveGridBox: "rockstargames-modules-core-newswire-articlee721a07d53edbb90b165a7720bb32c08",
        responsiveGridItem: "rockstargames-modules-core-newswire-articlea32d93b6ae982b5ad473f75cf86ff085"
      };
      var r = t(98096);
      const i = e => {
        let {
          children: a,
          className: t,
          style: i
        } = e;
        return (0, r.jsx)("div", {
          className: [s.responsiveGridItem, void 0 !== t ? t : ""].join(" "),
          style: i,
          children: a
        })
      }
    },
    89028: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => c
      });
      var s = t(16188),
        r = t.n(s),
        i = t(95966);
      var n = t(98096);
      const c = e => {
        let {
          attributes: a = {},
          children: t,
          className: s = "",
          id: c = "",
          style: o = {}
        } = e;
        return (0, n.jsx)("span", {
          className: (0, i.classList)(s, a?.className, "rockstargames-modules-core-newswire-articlec650a7a1e761d6a9f2d6ce1cd8d6f330"),
          id: c,
          style: (0, i.safeStyles)(o ?? a?.style ?? {}),
          dangerouslySetInnerHTML: {
            __html: r().unescape(t)
          }
        })
      }
    },
    29428: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => i
      });
      const s = {
        responsiveSection: "rockstargames-modules-core-newswire-articlebd7167fb3a3edaf4df4d9a576efb1170",
        maxWidth: "rockstargames-modules-core-newswire-articleb2c8f49e280c2e7c204b30a4af8c13b9"
      };
      var r = t(98096);
      const i = e => {
        let {
          children: a,
          className: t,
          style: i,
          maxWidth: n
        } = e;
        return (0, r.jsx)("section", {
          className: [s.responsiveSection, void 0 !== t ? t : ""].join(" "),
          style: i,
          children: n ? (0, r.jsx)("div", {
            className: s.maxWidth,
            children: a
          }) : a
        })
      }
    },
    11308: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => i
      });
      const s = {
        hr: "rockstargames-modules-core-newswire-articledc7b1bc141e132d4ee9b7bf9d55c573a",
        redLine: "rockstargames-modules-core-newswire-articled4d968b41ef87926b0b6318e8647738b",
        gtao: "rockstargames-modules-core-newswire-articlef66c75c6e882da85fef31e4211ca0be2"
      };
      var r = t(98096);
      const i = e => {
        let {
          style: a,
          className: t = "",
          type: i = ""
        } = e;
        return (0, r.jsx)("div", {
          style: a,
          className: [s.hr, s[i], t].join(" ")
        })
      }
    },
    26595: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var s = t(62229);
      var r = t(98096);
      class i extends s.Component {
        constructor(e) {
          super(e), this.state = {
            header: e.header ?? null,
            hidden: e.hidden ?? !1
          }
        }
        static getDerivedStateFromError(e) {
          return {
            error: {
              message: e.message ?? e.toString()
            }
          }
        }
        render() {
          return this?.state?.error?.message && this?.state?.hidden ? null : this?.state?.error?.message ? (0, r.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articled5c408a8b618087ef4bb452f96526b2b",
            children: [(0, r.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, r.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      const n = function(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return function(s) {
          return (0, r.jsx)(i, {
            header: a,
            hidden: t,
            children: (0, r.jsx)(e, {
              ...s
            })
          })
        }
      }
    },
    23375: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => o
      });
      var s = t(62229),
        r = t(95966),
        i = t(89950),
        n = t(34327);
      var c = t(98096);
      const o = (0, r.withTranslations)((e => {
        let {
          error: a,
          t,
          domain: r = ""
        } = e;
        console.error({
          error: a
        });
        let o = a?.message ?? t("error-404-new");
        o = t("error-404-new");
        const d = a?.code ?? 398,
          l = (0, s.useRef)(null);
        return (0, s.useEffect)((() => {
          l && l?.current && l.current.focus()
        }), [l]), (0, c.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articled0635ab9b06be2bdd2967e49648afe4e",
          children: [(0, c.jsx)("h3", {
            tabIndex: -1,
            ref: l,
            children: `${o} (${d})`
          }), (0, c.jsx)(i.A, {
            to: "/",
            children: t("Home")
          }), "clr" !== r && (0, c.jsx)(n.A, {})]
        })
      }))
    },
    26495: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        Animations: () => s,
        LiteMotion: () => l,
        withFadeIn: () => p,
        withFadeUp: () => w
      });
      var s = {};
      t.r(s), t.d(s, {
        getVariant: () => _,
        transitions: () => h,
        variants: () => x
      });
      var r = t(62229),
        i = t(47730),
        n = t(43348),
        c = t(53078),
        o = t(98096);
      const d = (0, r.forwardRef)(((e, a) => {
        const {
          children: t,
          tag: s = "div"
        } = e, r = i.m[s];
        return (0, o.jsx)(n.F, {
          features: c.l,
          children: (0, o.jsx)(r, {
            ref: a,
            ...e,
            children: t
          })
        })
      }));
      d.displayName = "LiteMotion";
      const l = d;
      var m = t(22557);
      const u = {
          visible: {
            opacity: 1
          },
          hidden: {
            opacity: 0
          }
        },
        g = {
          ease: "easeIn",
          duration: .4
        },
        f = e => {
          let {
            children: a
          } = e;
          return (0, o.jsx)(m.P.div, Object.assign({
            className: "rockstargames-modules-core-newswire-articlef38982805188b64825a72d2c5fac938c",
            variants: u,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: g
          }, {
            children: a
          }))
        },
        p = e => a => (0, o.jsx)(f, {
          children: (0, o.jsx)(e, Object.assign({}, a))
        }),
        b = {
          visible: {
            opacity: 1,
            y: 0
          },
          hidden: {
            opacity: 0,
            y: 40
          }
        },
        k = {
          ease: "easeIn",
          duration: .75
        },
        v = e => {
          let {
            children: a
          } = e;
          return (0, o.jsx)(m.P.div, {
            className: "rockstargames-modules-core-newswire-articlec1ad787ad6429786650325edac0ffe42",
            variants: b,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: k,
            children: a
          })
        },
        w = e => a => (0, o.jsx)(v, {
          children: (0, o.jsx)(e, {
            ...a
          })
        }),
        h = {
          cardOpen: {
            ease: [.77, 0, .175, 1],
            duration: .5
          },
          afterCardOpen: {
            ease: "easeIn",
            duration: .3,
            delay: .5
          },
          fade: {
            ease: "easeIn",
            duration: .3
          },
          instantFade: {
            duration: .05
          }
        },
        x = {
          plainCard: {
            expanded: {
              initial: {
                gridTemplateColumns: "var(--grid-template-columns-initial)",
                "--card-image-aspect-ratio": "var(--card-image-aspect-ratio-initial)",
                overflow: "visible",
                "--product-card-pricing-info-opacity": 1,
                "--product-card-pricing-info-padding": "var(--padding-sm)"
              },
              animate: {
                gridTemplateColumns: "var(--grid-template-columns-animate)",
                "--card-image-aspect-ratio": "var(--card-image-aspect-ratio-animate)",
                "--product-card-pricing-info-height": 0,
                "--product-card-pricing-info-opacity": 0,
                "--product-card-pricing-info-padding": 0,
                transitionEnd: {
                  overflow: "auto",
                  marginTop: "calc(var(--modal-padding) * -1)",
                  paddingTop: "var(--modal-padding)",
                  height: "calc(100% + var(--modal-padding))"
                }
              },
              hovered: {}
            },
            expandedContents: {
              initial: {
                opacity: 0,
                display: "var(--card-expanded-contents-display-initial)"
              },
              animate: {
                opacity: 1,
                display: "grid"
              }
            }
          },
          cardWithImageGallery: {
            expanded: {
              initial: {
                overflow: "visible",
                gridTemplateColumns: "var(--grid-template-columns-initial)",
                "--card-image-aspect-ratio": "var(--card-image-aspect-ratio-initial)",
                "--gallery-border": "0 solid transparent"
              },
              animate: {
                gridTemplateColumns: "var(--grid-template-columns-animate)",
                "--card-image-aspect-ratio": "var(--card-image-aspect-ratio-animate)",
                transitionEnd: {
                  overflow: "auto",
                  marginTop: "calc(var(--modal-padding) * -1)",
                  paddingTop: "var(--modal-padding)",
                  height: "calc(100% + var(--modal-padding))"
                }
              },
              hovered: {}
            },
            expandedContents: {
              initial: {
                opacity: 0,
                display: "none"
              },
              animate: {
                opacity: 1,
                display: "grid"
              }
            },
            gallery: {
              parent: {
                initial: {
                  gridGap: 0,
                  background: "var(--black-100)"
                },
                animate: {
                  gridGap: "var(--gallery-grid-gap)",
                  background: "var(--black-200)",
                  transitionEnd: {
                    pointerEvents: "all"
                  }
                }
              },
              main: {
                initial: {
                  "--gallery-aspect-ratio": "var(--gallery-aspect-ratio-initial)",
                  "--swiper-pagination-opacity": 0
                },
                animate: {
                  "--gallery-aspect-ratio": "var(--gallery-aspect-ratio-animate)",
                  "--swiper-pagination-opacity": 1
                }
              },
              thumbs: {
                initial: {
                  "--thumb-aspect-ratio": "1/0"
                },
                animate: {
                  "--thumb-aspect-ratio": "1/1"
                }
              }
            }
          },
          imageMask: {
            expanded: {
              initial: {
                borderRadius: "var(--border-radius-md)"
              },
              animate: {
                borderRadius: "var(--card-expanded-border-radius)"
              }
            }
          },
          foreground: {
            expanded: {
              initial: {
                width: "100%"
              },
              animate: {
                width: "var(--card-foreground-layer-width-animate)"
              }
            }
          },
          logo: {
            expanded: {
              initial: {
                "--card-logo-top-initial": "2rem",
                "--card-logo-top-animate": "0%"
              },
              animate: {
                "--card-logo-top-initial": "0rem",
                "--card-logo-top-animate": "50%",
                "--card-logo-marginTop-animate": "calc(var(--card-logo-height) * -1)",
                "--card-logo-y-animate-mobile": "-20%",
                height: "calc(var(--card-logo-height) * 2)",
                x: "var(--card-logo-animate-x)"
              },
              hovered: {}
            }
          },
          fade: {
            in: {
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              }
            },
            out: {
              initial: {
                opacity: 1
              },
              animate: {
                opacity: 0
              }
            }
          }
        },
        _ = function() {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "collapsed";
          return x[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "imageMask"][e]
        }
    },
    38701: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => m
      });
      var s = t(62229),
        r = t(9623),
        i = t(95966),
        n = t(93075),
        c = t(89950),
        o = t(26213);
      const d = {
        newswireBlock: "rockstargames-modules-core-newswire-articleb394b56c31488c36155ca82090c66e6f",
        info: "rockstargames-modules-core-newswire-articleea1c51ae745531c2aeabbe3fcf603842",
        title: "rockstargames-modules-core-newswire-articlef1dfe59c3d981dbe132559620885ecea",
        newswireBlockNoSpecialOrder: "rockstargames-modules-core-newswire-articlec06d09374e8b5cc41f1732c691ee8e25",
        preview: "rockstargames-modules-core-newswire-articleca2b587572d3c9a74cfc2fedf400ce8c",
        previewMobile: "rockstargames-modules-core-newswire-articleb3d4a8cfcc371ae39ce6220d009c5954",
        top: "rockstargames-modules-core-newswire-articleeee9c5d3b714a61ac265369800a6d4e0",
        startAnimation: "rockstargames-modules-core-newswire-articlea56af3c95449fe8452485dfb6c89fc29"
      };
      var l = t(98096);
      const m = e => {
        let {
          section: a = "",
          index: t,
          post: m,
          noSpecialOrder: u = !1,
          focused: g
        } = e;
        const {
          track: f
        } = (0, n.h)(), [p] = (0, r.useSearchParams)(), b = m.preview_images_parsed.newswire_block, k = {
          default: 0 !== t || u ? b.square || b.d16x9 || b._fallback : b.d16x9 || b.square || b._fallback,
          mobile: b.square || b._fallback
        }, [v, w] = (0, i.usePreloadImg)(k.default), h = {
          default: {
            backgroundImage: `url(${k.default})`
          },
          mobile: {
            backgroundImage: `url(${k.mobile})`
          }
        }, x = (0, s.useCallback)((() => {
          f({
            event: "card_click",
            card_id: m.id,
            card_name: m.name_slug.replace(/-/g, " "),
            link_url: m.url,
            position: t,
            element_placement: a
          })
        }), [m]);
        return (0, l.jsx)(c.A, {
          to: m.url,
          className: [d.newswireBlock, u ? d.newswireBlockNoSpecialOrder : "", null !== v ? d.startAnimation : ""].join(" "),
          focused: g,
          onClick: x,
          children: (0, l.jsxs)(l.Fragment, {
            children: [0 !== t || p.get("tag_id") ? (0, l.jsx)("div", {
              className: d.preview,
              style: h.default
            }) : (0, l.jsxs)(l.Fragment, {
              children: [(0, l.jsx)("div", {
                className: d.previewMobile,
                style: h.mobile
              }), (0, l.jsx)("div", {
                className: d.preview,
                style: h.default
              })]
            }), (0, l.jsxs)("div", {
              className: d.info,
              children: [(0, l.jsxs)("div", {
                className: d.top,
                children: [m.primary_tags.length ? (0, l.jsx)(o.A, {
                  title: m.primary_tags[m.primary_tags.length > 1 && 722 === m.primary_tags[0].id ? 1 : 0].name
                }) : "", (0, l.jsx)("time", {
                  dateTime: m.created,
                  children: m.created_formatted
                })]
              }), (0, l.jsx)("h5", {
                className: d.title,
                dangerouslySetInnerHTML: {
                  __html: m.title
                }
              })]
            })]
          })
        })
      }
    },
    26213: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var s = t(89950);
      const r = {
        tag: "rockstargames-modules-core-newswire-articleb660bb706132d84852c02df01cc6ed5a"
      };
      var i = t(98096);
      const n = e => {
        let {
          className: a,
          href: t,
          title: n,
          style: c
        } = e;
        const o = (0, i.jsxs)("div", {
          style: c,
          className: [r.tag, a].join(" "),
          children: [(0, i.jsx)("i", {}), n]
        });
        return void 0 !== t ? (0, i.jsx)(s.A, {
          to: t,
          children: o
        }) : o
      }
    },
    39544: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => c
      });
      var s = t(95966),
        r = t(38701);
      const i = {
        pillBtn: "rockstargames-modules-core-newswire-articlef2d003dd0e6a129a56ea07208548787c",
        selected: "rockstargames-modules-core-newswire-articlef94728c4a438800b9abab11a8b3e3c0a",
        related: "rockstargames-modules-core-newswire-articleb8a63bb419c1f2a8f94e099e1e650e48",
        posts: "rockstargames-modules-core-newswire-articlecfe09d4dc8447b1e606404300d040e7a",
        just1post: "rockstargames-modules-core-newswire-articled46374473ed68a4121f88b44eba06359"
      };
      var n = t(98096);
      const c = (0, s.withTranslations)((e => {
        let {
          posts: a,
          t
        } = e;
        return (0, n.jsxs)("section", {
          className: i.related,
          children: [(0, n.jsx)("h2", {
            children: t("Related Stories")
          }), (0, n.jsx)("div", {
            className: [i.posts, 1 === a.length ? i.just1post : ""].join(" "),
            children: a.map((e => (0, n.jsx)(r.A, {
              noSpecialOrder: !0,
              post: e
            }, e.id)))
          })]
        })
      }))
    },
    98654: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        NewswireArticle: () => x,
        componentsForTinaParser: () => _
      });
      var s = t(37338),
        r = t(64064),
        i = t.n(r),
        n = t(15310),
        c = t.n(n),
        o = t(23608),
        d = t.n(o),
        l = t(31879),
        m = t.n(l),
        u = t(29131),
        g = t(94644),
        f = t(62229),
        p = t(39544),
        b = t(95966),
        k = t(99973),
        v = t(52470),
        w = t(98096);
      const h = e => {
          let {
            article: a,
            relatedBlock: t
          } = e;
          switch (a.jsx) {
            case 0:
              return (0, w.jsx)(k.Jsx0, {
                article: a,
                children: t
              });
            case 1:
              return (0, w.jsx)(k.Jsx1, {
                article: a,
                children: t
              });
            default:
              return (0, w.jsx)(k.Jsx2, {
                payload: a.tina.payload,
                variablesKeys: a.tina.variables.keys,
                children: t
              })
          }
        },
        x = e => {
          let {
            idHash: a
          } = e;
          const {
            data: t,
            loading: s
          } = (0, b.useQuery)(v.NewswirePost, {
            variables: {
              id_hash: a
            },
            setTitleDataPath: "post.title",
            autoSetLoading: !0
          }), r = t?.post ?? null, i = t?.related?.results ?? null;
          if ((0, f.useEffect)((() => {
              r && (window?.instgrm?.Embeds?.process?.(), window?.twttr?.widgets?.load?.())
            }), [r]), !r || s) return null;
          const n = i && r.show_related ? (0, w.jsx)(p.A, {
            posts: i
          }) : "";
          return (0, w.jsx)(b.newswirePost.Provider, {
            article: r,
            children: (0, w.jsx)(h, {
              article: r,
              relatedBlock: n
            })
          })
        },
        _ = {
          ...s,
          ...g,
          ClrCard: u.y3,
          ClrCollapsedCard: u.h7,
          Gif: i(),
          GroupOfItems: c(),
          RockstarVideoPlayer: m(),
          SwiperCarousel: d()
        }
    },
    65211: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "GetAudioAlbum"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "id"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int"
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
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "audioAlbum"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "id"
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
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "tracks"
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
                        value: "cover_src"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "mp3_src"
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
                        value: "color"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "mix_blend_mode"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "duration"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "artist"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "name"
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
        }],
        loc: {
          start: 0,
          end: 340
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
        body: "query GetAudioAlbum($id: Int!, $locale: String!) {\n    audioAlbum(id: $id, locale: $locale) {\n        title\n        tracks {\n            id\n            cover_src\n            mp3_src\n            title\n            color\n            mix_blend_mode\n            duration\n            artist {\n                name\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function r(e, a) {
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
      })), e.exports = a, e.exports.GetAudioAlbum = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = s[a] || new Set,
          n = new Set,
          c = new Set;
        for (i.forEach((function(e) {
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
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "GetAudioAlbum")
    },
    50828: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "UserGetVote"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "foreignId"
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
                value: "foreignType"
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
                value: "userGetVote"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreignId"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreignType"
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
                    value: "vote"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "mutation",
          name: {
            kind: "Name",
            value: "UserCastVote"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "foreignId"
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
                value: "foreignType"
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
                value: "vote"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
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
                value: "userCastVote"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreignId"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreignType"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "vote"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "vote"
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
                    value: "vote"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 386
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
        body: "query UserGetVote($foreignId: String!, $foreignType: String!) {\n    userGetVote(foreign_id: $foreignId, foreign_type: $foreignType) {\n        vote\n    }\n}\n\nmutation UserCastVote(\n    $foreignId: String!\n    $foreignType: String!\n    $vote: Boolean!\n) {\n    userCastVote(\n        foreign_id: $foreignId\n        foreign_type: $foreignType\n        vote: $vote\n    ) {\n        vote\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function r(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function i(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = s[a] || new Set,
          n = new Set,
          c = new Set;
        for (i.forEach((function(e) {
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
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.UserGetVote = i(a, "UserGetVote"), e.exports.UserCastVote = i(a, "UserCastVote")
    },
    95520: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "GameData"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "titleSlug"
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
                value: "withMetaTitle"
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
                value: "metaUrl"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            },
            defaultValue: {
              kind: "StringValue",
              value: "/",
              block: !1
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              alias: {
                kind: "Name",
                value: "meta"
              },
              name: {
                kind: "Name",
                value: "metaUrl"
              },
              arguments: [{
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
                  value: "domain"
                },
                value: {
                  kind: "StringValue",
                  value: "www",
                  block: !1
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "url"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "metaUrl"
                  }
                }
              }],
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
                      value: "withMetaTitle"
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
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "game"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "titleSlug"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "titleSlug"
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
                    value: "ratingDescriptors"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingFooter"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingImg"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingUrl"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 394
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
        body: 'query GameData(\n    $titleSlug: String!\n    $locale: String!\n    $withMetaTitle: Boolean = false\n    $metaUrl: String = "/"\n) {\n    meta: metaUrl(locale: $locale, domain: "www", url: $metaUrl)\n        @include(if: $withMetaTitle) {\n        title\n    }\n    game(titleSlug: $titleSlug, locale: $locale) {\n        ratingDescriptors\n        ratingFooter\n        ratingImg\n        ratingUrl\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function r(e, a) {
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
      })), e.exports = a, e.exports.GameData = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = s[a] || new Set,
          n = new Set,
          c = new Set;
        for (i.forEach((function(e) {
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
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "GameData")
    },
    48524: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "UserGetVote"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "foreign_id"
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
                value: "foreign_type"
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
                value: "userGetVote"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreign_id"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreign_type"
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
                    value: "vote"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "mutation",
          name: {
            kind: "Name",
            value: "UserCastVote"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "foreign_id"
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
                value: "foreign_type"
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
                value: "vote"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
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
                value: "userCastVote"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreign_id"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreign_type"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "vote"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "vote"
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
                    value: "vote"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 394
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
        body: "query UserGetVote($foreign_id: String!, $foreign_type: String!) {\n    userGetVote(foreign_id: $foreign_id, foreign_type: $foreign_type) {\n        vote\n    }\n}\n\nmutation UserCastVote(\n    $foreign_id: String!\n    $foreign_type: String!\n    $vote: Boolean!\n) {\n    userCastVote(\n        foreign_id: $foreign_id\n        foreign_type: $foreign_type\n        vote: $vote\n    ) {\n        vote\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function r(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function i(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = s[a] || new Set,
          n = new Set,
          c = new Set;
        for (i.forEach((function(e) {
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
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.UserGetVote = i(a, "UserGetVote"), e.exports.UserCastVote = i(a, "UserCastVote")
    },
    46368: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "FragmentDefinition",
          name: {
            kind: "Name",
            value: "postFields"
          },
          typeCondition: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "RockstarGames_Newswire_Model_Entity_Post_o"
            }
          },
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
                value: "url"
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
                value: "name_slug"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "created"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "created_formatted"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "primary_tags"
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
                    value: "name"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "secondary_tags"
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
                    value: "name"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "preview_images_parsed"
              },
              arguments: [],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "newswire_block"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "square"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "d16x9"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "_fallback"
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
          kind: "FragmentDefinition",
          name: {
            kind: "Name",
            value: "paging"
          },
          typeCondition: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "RockstarGames_Cake_Graph_Type_Paging_o"
            }
          },
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "pageCount"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "page"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "count"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "nextPage"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "prevPage"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "perPage"
              },
              arguments: [],
              directives: []
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "NewswireList"
          },
          variableDefinitions: [{
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
                value: "page"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int"
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
                value: "limit"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int"
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "tagId"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int"
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "metaUrl"
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
              value: !0
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              alias: {
                kind: "Name",
                value: "meta"
              },
              name: {
                kind: "Name",
                value: "metaUrl"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "url"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "metaUrl"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "domain"
                },
                value: {
                  kind: "StringValue",
                  value: "www",
                  block: !1
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
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "posts"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "page"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "page"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "tagId"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "tagId"
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
                  value: "limit"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "limit"
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
                    value: "paging"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "FragmentSpread",
                      name: {
                        kind: "Name",
                        value: "paging"
                      },
                      directives: []
                    }]
                  }
                }, {
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
                      kind: "FragmentSpread",
                      name: {
                        kind: "Name",
                        value: "postFields"
                      },
                      directives: []
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 926
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
        body: 'fragment postFields on RockstarGames_Newswire_Model_Entity_Post_o {\n    id: id_hash\n    url\n    title\n    name_slug\n    created\n    created_formatted\n    primary_tags {\n        id\n        name\n    }\n    secondary_tags {\n        id\n        name\n    }\n    preview_images_parsed {\n        newswire_block {\n            square\n            d16x9\n            _fallback\n        }\n    }\n}\nfragment paging on RockstarGames_Cake_Graph_Type_Paging_o {\n    pageCount\n    page\n    count\n    nextPage\n    prevPage\n    perPage\n}\n\nquery NewswireList(\n    $locale: String!\n    $page: Int!\n    $limit: Int\n    $tagId: Int\n    $metaUrl: String!\n    $cache: Boolean = true\n) {\n    meta: metaUrl(url: $metaUrl, domain: "www", locale: $locale) {\n        title\n    }\n    posts(page: $page, tagId: $tagId, locale: $locale, limit: $limit) {\n        paging {\n            ...paging\n        }\n        results {\n            ...postFields\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function r(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function i(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = s[a] || new Set,
          n = new Set,
          c = new Set;
        for (i.forEach((function(e) {
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
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.postFields = i(a, "postFields"), e.exports.paging = i(a, "paging"), e.exports.NewswireList = i(a, "NewswireList")
    },
    46823: e => {
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

      function r(e, a) {
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
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = s[a] || new Set,
          n = new Set,
          c = new Set;
        for (i.forEach((function(e) {
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
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "TinaModulesList")
    },
    11015: e => {
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

      function r(e, a) {
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
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = s[a] || new Set,
          n = new Set,
          c = new Set;
        for (i.forEach((function(e) {
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
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "TinaModulesInfo")
    },
    52470: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "FragmentDefinition",
          name: {
            kind: "Name",
            value: "postFields"
          },
          typeCondition: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "RockstarGames_Newswire_Model_Entity_Post_o"
            }
          },
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
                value: "url"
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
                value: "name_slug"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "created"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "created_formatted"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "primary_tags"
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
                    value: "name"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "secondary_tags"
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
                    value: "name"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "preview_images_parsed"
              },
              arguments: [],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "newswire_block"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "square"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "d16x9"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "_fallback"
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
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "NewswirePost"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "id_hash"
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
              value: !0
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
                value: "post"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "id_hash"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "id_hash"
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
                    value: "subtitle"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "content"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "show_related"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "created"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "created_formatted"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "posts_hero"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
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
                        value: "hero"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "primary_tags"
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
                        value: "name"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "secondary_tags"
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
                        value: "name"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "jsx"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "posts_jsx"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "markup"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "variables_us_defaulted"
                      },
                      arguments: [],
                      directives: []
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
                            value: "translation_status"
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
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "status"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "__typename"
                  },
                  arguments: [],
                  directives: [{
                    kind: "Directive",
                    name: {
                      kind: "Name",
                      value: "skip"
                    },
                    arguments: [{
                      kind: "Argument",
                      name: {
                        kind: "Name",
                        value: "if"
                      },
                      value: {
                        kind: "BooleanValue",
                        value: !0
                      }
                    }]
                  }]
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "root_url_translations"
              },
              name: {
                kind: "Name",
                value: "metaUrlTree"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "domain"
                },
                value: {
                  kind: "StringValue",
                  value: "www",
                  block: !1
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "url"
                },
                value: {
                  kind: "StringValue",
                  value: "/",
                  block: !1
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
                    value: "tina_tree"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
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
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "related"
              },
              name: {
                kind: "Name",
                value: "posts"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "limit"
                },
                value: {
                  kind: "IntValue",
                  value: "4"
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "relatedToId"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "id_hash"
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
                      kind: "FragmentSpread",
                      name: {
                        kind: "Name",
                        value: "postFields"
                      },
                      directives: []
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 1823
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
        body: 'fragment postFields on RockstarGames_Newswire_Model_Entity_Post_o {\n    id: id_hash\n    url\n    title\n    name_slug\n    created\n    created_formatted\n    primary_tags {\n        id\n        name\n    }\n    secondary_tags {\n        id\n        name\n    }\n    preview_images_parsed {\n        newswire_block {\n            square\n            d16x9\n            _fallback\n        }\n    }\n}\n\nquery NewswirePost(\n    $id_hash: String!\n    $locale: String!\n    $cache: Boolean = true\n) {\n    post(id_hash: $id_hash, locale: $locale) {\n        id: id_hash\n        title\n        subtitle\n        content\n        show_related\n        created\n        created_formatted\n        posts_hero {\n            type\n            hero\n        }\n        primary_tags {\n            id\n            name\n        }\n        secondary_tags {\n            id\n            name\n        }\n        jsx\n        posts_jsx {\n            markup\n            variables_us_defaulted\n        }\n        tina {\n            id\n            payload\n            variables {\n                translation_status\n                keys\n            }\n            status\n        }\n        ### This makes Apollo skip caching so you can go back/forth between series and collections\n        ### without worrying about the wrong thing showing up.\n        ###\n        ### https://kamranicus.com/posts/2018-03-06-graphql-apollo-object-caching\n        __typename @skip(if: true)\n    }\n    root_url_translations: metaUrlTree(\n        domain: "www"\n        url: "/"\n        locale: $locale\n    ) {\n        tina_tree {\n            tina {\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n    }\n    related: posts(limit: 4, relatedToId: $id_hash, locale: $locale) {\n        results {\n            ...postFields\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function r(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function i(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = s[a] || new Set,
          n = new Set,
          c = new Set;
        for (i.forEach((function(e) {
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
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.postFields = i(a, "postFields"), e.exports.NewswirePost = i(a, "NewswirePost")
    },
    36672: (e, a, t) => {
      var s = {
        "./cero_a.png": 97558,
        "./cero_b.svg": 29362,
        "./cero_c.svg": 67299,
        "./cero_d.svg": 9020,
        "./cero_rp.png": 17065,
        "./cero_z.svg": 46554,
        "./djctq_10.svg": 51392,
        "./djctq_12.svg": 8674,
        "./djctq_14.svg": 89836,
        "./djctq_16.svg": 54222,
        "./djctq_18.svg": 58648,
        "./djctq_er.svg": 8054,
        "./djctq_l.svg": 23781,
        "./esrb_ao.svg": 89235,
        "./esrb_e.svg": 24256,
        "./esrb_e10plus.svg": 65315,
        "./esrb_m.svg": 87256,
        "./esrb_m_ao.svg": 10419,
        "./esrb_rp.svg": 89069,
        "./esrb_rplm17.svg": 95088,
        "./esrb_t.svg": 18177,
        "./fpb_13.svg": 86595,
        "./fpb_16.svg": 28414,
        "./fpb_18.svg": 81864,
        "./fpb_pg.svg": 77404,
        "./grac_12.svg": 8711,
        "./grac_15.svg": 6312,
        "./grac_18.svg": 48157,
        "./grac_19.svg": 19612,
        "./grac_a.svg": 89303,
        "./gsrr_0.svg": 67443,
        "./gsrr_12.svg": 49980,
        "./gsrr_15.svg": 24611,
        "./gsrr_18.svg": 68918,
        "./gsrr_6.svg": 63117,
        "./nmc_12.svg": 2024,
        "./nmc_16.svg": 50324,
        "./nmc_18.svg": 52466,
        "./nmc_21.svg": 3950,
        "./nmc_3.svg": 9188,
        "./nmc_7.svg": 18712,
        "./oflc_g.svg": 21022,
        "./oflc_m.svg": 22772,
        "./oflc_ma15.svg": 9815,
        "./oflc_pg.svg": 47580,
        "./oflc_r18.svg": 74432,
        "./pegi_12.svg": 15821,
        "./pegi_16.svg": 86929,
        "./pegi_18.svg": 51575,
        "./pegi_3.svg": 27351,
        "./pegi_4.svg": 82424,
        "./pegi_6.svg": 46618,
        "./pegi_7.svg": 40491,
        "./pegi_rp.png": 94293,
        "./rars_0.svg": 36855,
        "./rars_12.svg": 98952,
        "./rars_16.svg": 65044,
        "./rars_18.svg": 72690,
        "./rars_6.svg": 51913,
        "./usk_0.svg": 84406,
        "./usk_12.svg": 26151,
        "./usk_16.svg": 87707,
        "./usk_18.svg": 90717,
        "./usk_6.svg": 2696,
        "./usk_rp.svg": 21228,
        "./vaci_rp.png": 32323
      };

      function r(e) {
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 36672
    },
    8194: (e, a, t) => {
      var s = {
        "./cero_a.png": 97558,
        "./cero_b.svg": 29362,
        "./cero_c.svg": 67299,
        "./cero_d.svg": 9020,
        "./cero_rp.png": 17065,
        "./cero_z.svg": 46554,
        "./djctq_10.svg": 51392,
        "./djctq_12.svg": 8674,
        "./djctq_14.svg": 89836,
        "./djctq_16.svg": 54222,
        "./djctq_18.svg": 58648,
        "./djctq_er.svg": 8054,
        "./djctq_l.svg": 23781,
        "./esrb_ao.svg": 89235,
        "./esrb_e.svg": 24256,
        "./esrb_e10plus.svg": 65315,
        "./esrb_m.svg": 87256,
        "./esrb_m_ao.svg": 10419,
        "./esrb_rp.svg": 89069,
        "./esrb_rplm17.svg": 95088,
        "./esrb_t.svg": 18177,
        "./fpb_13.svg": 86595,
        "./fpb_16.svg": 28414,
        "./fpb_18.svg": 81864,
        "./fpb_pg.svg": 77404,
        "./grac_12.svg": 8711,
        "./grac_15.svg": 6312,
        "./grac_18.svg": 48157,
        "./grac_19.svg": 19612,
        "./grac_a.svg": 89303,
        "./gsrr_0.svg": 67443,
        "./gsrr_12.svg": 49980,
        "./gsrr_15.svg": 24611,
        "./gsrr_18.svg": 68918,
        "./gsrr_6.svg": 63117,
        "./nmc_12.svg": 2024,
        "./nmc_16.svg": 50324,
        "./nmc_18.svg": 52466,
        "./nmc_21.svg": 3950,
        "./nmc_3.svg": 9188,
        "./nmc_7.svg": 18712,
        "./oflc_g.svg": 21022,
        "./oflc_m.svg": 22772,
        "./oflc_ma15.svg": 9815,
        "./oflc_pg.svg": 47580,
        "./oflc_r18.svg": 74432,
        "./pegi_12.svg": 15821,
        "./pegi_16.svg": 86929,
        "./pegi_18.svg": 51575,
        "./pegi_3.svg": 27351,
        "./pegi_4.svg": 82424,
        "./pegi_6.svg": 46618,
        "./pegi_7.svg": 40491,
        "./pegi_rp.png": 94293,
        "./rars_0.svg": 36855,
        "./rars_12.svg": 98952,
        "./rars_16.svg": 65044,
        "./rars_18.svg": 72690,
        "./rars_6.svg": 51913,
        "./usk_0.svg": 84406,
        "./usk_12.svg": 26151,
        "./usk_16.svg": 87707,
        "./usk_18.svg": 90717,
        "./usk_6.svg": 2696,
        "./usk_rp.svg": 21228,
        "./vaci_rp.png": 32323
      };

      function r(e) {
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 8194
    },
    86751: (e, a, t) => {
      var s = {
        "./GTAOnline.jpg": 10111,
        "./GTATrilogy.jpg": 84752,
        "./IV.jpg": 73483,
        "./V.jpg": 98754,
        "./VI/desktop.png": 3660,
        "./VI/mobile.png": 96048,
        "./agent.jpg": 78323,
        "./beaterator.jpg": 23587,
        "./bully-scholarshipedition.jpg": 67181,
        "./bully.jpg": 85332,
        "./chinatownwars.jpg": 44596,
        "./episodesfromlibertycity.jpg": 18518,
        "./grandtheftauto-gba.jpg": 7509,
        "./grandtheftauto3.jpg": 42787,
        "./gta-online.jpg": 26788,
        "./gta-v.jpg": 33143,
        "./gta.jpg": 8494,
        "./gta2.jpg": 59942,
        "./gtacomplete.jpg": 64923,
        "./gtalondon.jpg": 85256,
        "./italianjob.jpg": 42043,
        "./lanoire-vr-case-files.jpg": 52014,
        "./lanoire.jpg": 59414,
        "./lanoire_2.jpg": 52461,
        "./libertycitystories.jpg": 89273,
        "./manhunt.jpg": 95903,
        "./manhunt2.jpg": 3933,
        "./maxpayne.jpg": 77321,
        "./maxpayne2.jpg": 13095,
        "./maxpayne3.jpg": 57258,
        "./midnightclub.jpg": 12602,
        "./midnightclub2.jpg": 3818,
        "./midnightclub3.jpg": 59655,
        "./midnightclubLA-complete.jpg": 63839,
        "./midnightclubLA.jpg": 79795,
        "./oni.jpg": 24808,
        "./rdr-goty.jpg": 19552,
        "./reddeadonline.jpg": 73534,
        "./reddeadredemption.jpg": 27064,
        "./reddeadredemption2.jpg": 31248,
        "./reddeadrevolver.jpg": 79114,
        "./rockstar-games-collection-edition-1.jpg": 93573,
        "./sanandreas.jpg": 14724,
        "./skateanddestroy.jpg": 90377,
        "./smugglersrun.jpg": 73564,
        "./smugglersrun2.jpg": 22844,
        "./smugglersrunwarzones.jpg": 84715,
        "./stateofemergency.jpg": 28005,
        "./tabletennis.jpg": 84141,
        "./theballadofgaytony.jpg": 14825,
        "./thelostanddamned.jpg": 52591,
        "./thewarriors.jpg": 96148,
        "./undeadnightmare.jpg": 32830,
        "./vicecity.jpg": 91480,
        "./vicecitystories.jpg": 10869,
        "./wildmetal.jpg": 85613
      };

      function r(e) {
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 86751
    },
    39294: (e, a, t) => {
      var s = {
        "./GTAOnline.jpg": 10111,
        "./GTATrilogy.jpg": 84752,
        "./IV.jpg": 73483,
        "./V.jpg": 98754,
        "./agent.jpg": 78323,
        "./beaterator.jpg": 23587,
        "./bully-scholarshipedition.jpg": 67181,
        "./bully.jpg": 85332,
        "./chinatownwars.jpg": 44596,
        "./episodesfromlibertycity.jpg": 18518,
        "./grandtheftauto-gba.jpg": 7509,
        "./grandtheftauto3.jpg": 42787,
        "./gta-online.jpg": 26788,
        "./gta-v.jpg": 33143,
        "./gta.jpg": 8494,
        "./gta2.jpg": 59942,
        "./gtacomplete.jpg": 64923,
        "./gtalondon.jpg": 85256,
        "./italianjob.jpg": 42043,
        "./lanoire-vr-case-files.jpg": 52014,
        "./lanoire.jpg": 59414,
        "./lanoire_2.jpg": 52461,
        "./libertycitystories.jpg": 89273,
        "./manhunt.jpg": 95903,
        "./manhunt2.jpg": 3933,
        "./maxpayne.jpg": 77321,
        "./maxpayne2.jpg": 13095,
        "./maxpayne3.jpg": 57258,
        "./midnightclub.jpg": 12602,
        "./midnightclub2.jpg": 3818,
        "./midnightclub3.jpg": 59655,
        "./midnightclubLA-complete.jpg": 63839,
        "./midnightclubLA.jpg": 79795,
        "./oni.jpg": 24808,
        "./rdr-goty.jpg": 19552,
        "./reddeadonline.jpg": 73534,
        "./reddeadredemption.jpg": 27064,
        "./reddeadredemption2.jpg": 31248,
        "./reddeadrevolver.jpg": 79114,
        "./rockstar-games-collection-edition-1.jpg": 93573,
        "./sanandreas.jpg": 14724,
        "./skateanddestroy.jpg": 90377,
        "./smugglersrun.jpg": 73564,
        "./smugglersrun2.jpg": 22844,
        "./smugglersrunwarzones.jpg": 84715,
        "./stateofemergency.jpg": 28005,
        "./tabletennis.jpg": 84141,
        "./theballadofgaytony.jpg": 14825,
        "./thelostanddamned.jpg": 52591,
        "./thewarriors.jpg": 96148,
        "./undeadnightmare.jpg": 32830,
        "./vicecity.jpg": 91480,
        "./vicecitystories.jpg": 10869,
        "./wildmetal.jpg": 85613
      };

      function r(e) {
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 39294
    },
    55889: (e, a, t) => {
      var s = {
        "./VI/desktop.png": 3660
      };

      function r(e) {
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 55889
    },
    75877: (e, a, t) => {
      var s = {
        "./VI/mobile.png": 96048
      };

      function r(e) {
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 75877
    },
    97558: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51b141250a4851d7ec3673d88dbd20a.png"
    },
    29362: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7ac89f9e00ded04ef4b2dd3eaf3e8734.svg"
    },
    67299: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f44dd7aad9d6c62e40a11f51252f59b8.svg"
    },
    9020: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/204116b24cd9e9ab4e71af21b3a96179.svg"
    },
    17065: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/676b3908098d8b19f1019ce361af45ec.png"
    },
    46554: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/03ab76c58ed61a83bf035c923dbe32b2.svg"
    },
    51392: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f468aef6f0b5399d5c0f6b2e95b60cc5.svg"
    },
    8674: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b31c79d361cfd92e1a405dbbf4890bd.svg"
    },
    89836: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3689ac97526f00a4537e1b38ec82a074.svg"
    },
    54222: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07f9f9e93ec430813e74cbce545962c4.svg"
    },
    58648: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/608f591c35aff9d47091dd7fe9a8fb13.svg"
    },
    8054: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/198ced82807c854e92e84e23f7434c91.svg"
    },
    23781: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/edf01daa4f0392081705c17a74d8a146.svg"
    },
    89235: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c4dd58f5b5b97796b6c6177de364dd36.svg"
    },
    24256: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/201de0eb81b09ea93aa1aef2a6824b7c.svg"
    },
    65315: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/534078f6307f97ce0d70e0bb885f9d77.svg"
    },
    87256: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f4b0d9409df1e8a420b2118e4e601263.svg"
    },
    10419: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/092865e0ddae5190dc3c0284ee3c21bd.svg"
    },
    89069: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/80dd50a2fa9aae3b5d6effdb2d9c2661.svg"
    },
    95088: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d471eef7883043fdabe1b3ed17a72b3.svg"
    },
    18177: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/35cf853d7882b090b56837bd08127da1.svg"
    },
    86595: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/72e8749316b4d1f52925b95e075e9c24.svg"
    },
    28414: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c2acdad576048f5c48b2ee6a2a2a90a3.svg"
    },
    81864: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f52c5ab315a1ff90360e06372c3f2c0.svg"
    },
    77404: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d1f569db6c94b4f81417f62e91759082.svg"
    },
    8711: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fe262661c6667d97f441e045067f4a0f.svg"
    },
    6312: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b457cab77cb82e1c05ad12628414576.svg"
    },
    48157: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1a3660d76f39527a79f8a49bb27a74be.svg"
    },
    19612: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1a3660d76f39527a79f8a49bb27a74be.svg"
    },
    89303: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/515f2884036e870905ae53f156692721.svg"
    },
    67443: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a3931a545299e205758648bce29e5c49.svg"
    },
    49980: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/05e9f2f27883d4cbabb3d4e4e16c9c74.svg"
    },
    24611: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f2fc4de3decfa0ac007f6cbd91658a9.svg"
    },
    68918: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cd57122be57f5e3a9dc4d0a0f2503fb1.svg"
    },
    63117: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d910a48fc0914f58ca80dc0732a7677.svg"
    },
    2024: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e99540df7fd07d75b08a5fbc02d4815.svg"
    },
    50324: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/937b7a0c5a128c39addf2adeba2d2f23.svg"
    },
    52466: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/46a27d8d16855dcc2a217f48243c6d82.svg"
    },
    3950: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e5792c85d5a88a0b7c75af087e4c6ee2.svg"
    },
    9188: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4da522682784ded3799c5a6f9f8c213a.svg"
    },
    18712: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/29ea20c333709a952c2eb3a2591d435d.svg"
    },
    21022: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c66fbb7c204e32da80ccb1693d15e00.svg"
    },
    22772: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/954d63889440be17e1ebef30b7026369.svg"
    },
    9815: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2eb8777f38cbd4d721261ad736c1f2e7.svg"
    },
    47580: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6079496697e537802f8a0eb5a83d2e94.svg"
    },
    74432: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a19fbf81b03db0fda00839496a3ce5.svg"
    },
    15821: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/129ef1c1a15ffc7afb86ce282e48decb.svg"
    },
    86929: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a5d9ca87a5bd107da9bb33d3d718e8.svg"
    },
    51575: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dabd13175cc0894dcb3f942d3d2dab86.svg"
    },
    27351: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/64d281825da1c782681bcc096d693e32.svg"
    },
    82424: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b43dddd485139df895fc531e79c75e68.svg"
    },
    46618: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c01f38f1051e751caa633d533202873c.svg"
    },
    40491: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27a26f477c8db29df4ceec4517c7f42b.svg"
    },
    94293: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a380d3ce353544a356e8ce48f8586804.png"
    },
    36855: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bba2f70e014e82b336a9f80625053089.svg"
    },
    98952: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/85250e8a0e5a5a1209f214423f6ebe43.svg"
    },
    65044: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1a94d5705ae3ddeb4c8c2fde79bfe81.svg"
    },
    72690: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a825976dddc59e33b3ce146ad6cd3d20.svg"
    },
    51913: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/01b0cd4466759aa349ac4036594ab6ae.svg"
    },
    84406: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c699f3b76c15209c8059f02507e11b5.svg"
    },
    26151: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b48e041f1412ff62c8a92dc424b59aa5.svg"
    },
    87707: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07362df5a2671c08b232a97d503cd6bf.svg"
    },
    90717: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c3fe2a9610ca8b42807dfa99073d68b3.svg"
    },
    2696: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/056d3bdf1f300bcb7efa4aebcfc5224d.svg"
    },
    21228: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/278e84e5a41407499c43a30f545da3e8.svg"
    },
    32323: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/703a546f7a5109c1e2af87a212135aad.png"
    },
    10111: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    84752: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/214a1cd1a2e7bb8f9b1e5d3846ca2993.jpg"
    },
    73483: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b01707ef5603a26c1f542088f8f7c09.jpg"
    },
    98754: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    },
    3660: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1aba112359a3d6747ad694a8c02a07c.png"
    },
    96048: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/26f95aa7677031d8cd56ea75250c7bdd.png"
    },
    78323: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d66bfe06a724f04c0941073de283297.jpg"
    },
    23587: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b95ab415fdd8bec89099d433d23e3c7.jpg"
    },
    67181: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5704d117b387578dfebe1290e556f963.jpg"
    },
    85332: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f58d386594d32f34c887da75032c5be.jpg"
    },
    44596: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a8074783730a47af2fe5c2b67ddf7d31.jpg"
    },
    18518: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0281770395dc77e41c1f40559a3d5989.jpg"
    },
    7509: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/15b671d990b1f3f941c6359b3235abf3.jpg"
    },
    42787: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/81001f378e085cd20f8ee0182e23cb7c.jpg"
    },
    26788: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    33143: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    },
    8494: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f34231941013a609948485830c84c072.jpg"
    },
    59942: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48371205a1d87d858baa85712d1f91bb.jpg"
    },
    64923: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/089fe525338554e2120a1aaaf81766d6.jpg"
    },
    85256: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc4dbe3e1d52c3fc405579090868d08.jpg"
    },
    42043: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/809c3d6f72a6752f0ebcc6c92d43db67.jpg"
    },
    52014: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b13400360d3873aa5ed169d38da1ff9f.jpg"
    },
    59414: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b1034f3c525b39db31d9017268a0aeb5.jpg"
    },
    52461: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b1034f3c525b39db31d9017268a0aeb5.jpg"
    },
    89273: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ab528316ca7d31c2b041b62c4ce5dd36.jpg"
    },
    95903: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fa649a5d6b52121271093a7c564cc56a.jpg"
    },
    3933: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/116555df6799e584310484375c97a43f.jpg"
    },
    77321: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fd74a091e2e5765c8769668cc515e494.jpg"
    },
    13095: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e7d916fcce2bbe9b6419f914f290597.jpg"
    },
    57258: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0f31b4df90bff5bab740485f2d4b8253.jpg"
    },
    12602: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dd4b0f40e745f4347c822594da56a119.jpg"
    },
    3818: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/774943ec47ce732040f48df3943a0a7c.jpg"
    },
    59655: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e8ae1f733bc7d3b05c506de67f4b4f7f.jpg"
    },
    63839: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a549b321910f5308200496f1893c2a5f.jpg"
    },
    79795: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/659db20d7a19cc70a0510c7d197cedf3.jpg"
    },
    24808: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8977d6b170f295068d78c5bbb7b6f02d.jpg"
    },
    19552: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61a79de8dea0228576a18068e4f2660a.jpg"
    },
    73534: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc01cf29aa31b9d15a5d06483a0a1a3.jpg"
    },
    27064: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5aa471f90eaff248e0fbef79400cbbf3.jpg"
    },
    31248: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/082b847bcab37655faf903149f80f1e4.jpg"
    },
    79114: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d3ee871568fd751956d5ea1242a4f2d.jpg"
    },
    93573: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f79f3baf4a020b34cf9d3cf29d71f4e.jpg"
    },
    14724: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bbcbd2a2bb65ddad76e831c91c17b421.jpg"
    },
    90377: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a69bebbefae64314172002dd2bae0a34.jpg"
    },
    73564: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4393d2466a2f8931669e345898541812.jpg"
    },
    22844: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4a1657ff0ab4e3d45469556ba2f899c3.jpg"
    },
    84715: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/16e65ca64eafabe331ef1d2bef9c6f16.jpg"
    },
    28005: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/404be4f04081372768bb660a6c1991ba.jpg"
    },
    84141: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5df3b2d018d1e8e9b424b9eaebc86b16.jpg"
    },
    14825: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14448aca4ceaab8680323ce19c963d68.jpg"
    },
    52591: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f9b044c847e4c971c6ac5d096fe3e0eb.jpg"
    },
    96148: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5239707dea0f2f4ea8351f64e6b5a921.jpg"
    },
    32830: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14312e604f0637a2afd376dd571345d9.jpg"
    },
    91480: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6bf5412b358a42300603159932412051.jpg"
    },
    10869: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c82125e0b20342dba2008b0dcc6d55f6.jpg"
    },
    85613: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d0b53035bf66e851116bd0244ba6ace.jpg"
    },
    85719: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    80391: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1506c5bba61fa270f73c874e3d60a94f.svg"
    },
    28985: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg"
    },
    47240: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e8f340ded0fd6b0b0d434e8c6c8b75e.svg"
    },
    11008: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg"
    },
    32903: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d6d2cb861c79506282c6d6cbf1170f81.svg"
    },
    49429: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg"
    },
    81715: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/205366df6706c3b367fb5ff4f26ab7f3.svg"
    },
    68547: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7563ed0414306d18d4f8401effcab31a.svg"
    },
    1983: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fd3b8222b81c51f8a6ae266c805c98a6.png"
    },
    29654: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f002a20c79ea2264ca52456194ef5b48.svg"
    }
  }
]);