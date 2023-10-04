(self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [879], {
    4378: (e, a, i) => {
      "use strict";
      i.r(a), i.d(a, {
        default: () => l
      });
      var n = i(8976),
        s = i(9542),
        t = i(9929);
      const d = {
        title: "_1c6c5e2e5850fea8adb8c90b39b6855c758d",
        main: "_1c6c5e2e5850fea8b71b10432f44c16d125f",
        breadcrumbs: "_1c6c5e2e5850fea8c2bf1c67c354c461aa89"
      };
      var c = i(9817);
      const l = (0, t.withTranslations)((e => {
        let {
          children: a,
          intro: i,
          image: l = {},
          style: r = {},
          t: o,
          className: m = "",
          variant: u = null
        } = e, f = {};
        void 0 !== r.toggleInvertSeparator && (f = {
          "--breadcrumb-separator-filter-invert": r.toggleInvertSeparator ? "invert(0)" : "invert(1)"
        });
        const g = (0, t.useNewswirePost)(),
          p = {},
          v = p?.meta?.title ?? g?.title,
          h = p?.meta?.subtitle ?? g?.subtitle,
          b = h ? (0, c.jsx)("h3", {
            "data-context": "newswire-subtitle",
            children: h
          }) : "",
          k = [{
            text: o("Newswire"),
            to: "/newswire"
          }],
          {
            src: x
          } = (0, s.useImageParser)(l),
          _ = (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsx)("time", {
              dateTime: g.created,
              children: g.created_formatted
            }), i ? (0, c.jsx)(n.DescriptionArea, {
              item: i
            }) : "", a]
          });
        g?.primary_tags?.length && k.push({
          text: g.primary_tags[0].name,
          to: `/newswire?tag_id=${g.primary_tags[0].id}`
        }), g?.secondary_tags?.length && k.push({
          text: g.secondary_tags[0].name,
          to: `/newswire?tag_id=${g.secondary_tags[0].id}`
        });
        const j = (0, c.jsx)("div", {
          className: d.breadcrumbs,
          children: k.map((e => (0, c.jsx)(n.A, {
            to: e.to,
            children: e.text
          }, e.to)))
        });
        return x?.desktop && (r.background = `url(${x.desktop}) center/cover no-repeat`), (0, c.jsx)("div", {
          className: [m, d.title].join(" "),
          style: {
            ...r,
            ...f
          },
          children: "separated" === u ? (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsxs)("header", {
              "data-context": "title",
              children: [j, (0, c.jsx)("h1", {
                children: v
              })]
            }), (0, c.jsxs)("footer", {
              "data-context": "title",
              children: [b, _]
            })]
          }) : (0, c.jsxs)(c.Fragment, {
            children: [j, (0, c.jsxs)("div", {
              className: d.main,
              children: [(0, c.jsx)("h1", {
                children: v
              }), b]
            }), _]
          })
        })
      }))
    },
    6879: (e, a, i) => {
      "use strict";
      i.r(a), i.d(a, {
        AnchorLink: () => t,
        Discounts: () => x,
        Donate: () => y,
        EventInfo: () => C,
        FeaturedEventInfo: () => $,
        FontClip: () => E,
        GamingRewards: () => A,
        Gen9List: () => O,
        HeroImage: () => q,
        NewswireFull: () => J,
        NewswireTitle: () => G.default,
        PctBar: () => K,
        Podium: () => X
      });
      var n = i(4932),
        s = i(9817);
      const t = e => {
        let {
          children: a,
          hash: i
        } = e;
        const t = (0, n.useRef)(null),
          d = window.location.hash?.replace("#", "") === i ? i : null;
        return (0, n.useEffect)((() => {
          d && setTimeout((() => {
            const e = document.getElementById(d);
            e && e.scrollIntoView()
          }), 1e3)
        }), []), (0, s.jsx)("div", {
          ref: t,
          id: i,
          children: a
        })
      };
      var d = i(420),
        c = i.n(d);
      const l = e => {
        let {
          items: a,
          columns: i = {},
          noCarousel: n = !1,
          noInfiniteScroll: t = !1,
          ...d
        } = e;
        const l = d?.style ?? {};
        return n && (i?.mobile && (l["--mobile-cols"] = i.mobile), i?.desktop && (l["--desktop-cols"] = i.desktop)), (0, s.jsxs)(s.Fragment, {
          children: [d.title && (0, s.jsx)("p", {
            className: "_1c6c5e2e5850fea8cc23ea60d10b10978740",
            children: d.title
          }), (0, s.jsxs)("div", {
            className: "_1c6c5e2e5850fea8c9824c3db07a3f15334b",
            children: [n && (0, s.jsx)(c(), {
              style: {
                ...l,
                "--grid-gap-dynamic": "2rem 0"
              },
              className: "_1c6c5e2e5850fea8b6ef0aec65f96384d4cd",
              renderTemplate: "standard",
              items: a,
              ...d
            }), !n && (0, s.jsx)(v, {
              items: a,
              noInfiniteScroll: t,
              perPage: 2,
              perPageMobile: 1
            })]
          })]
        })
      };
      var r = i(8976);
      const o = {
          limitedGrid: "_1c6c5e2e5850fea8ab9f12604c018853a308",
          gridCarousel: "_1c6c5e2e5850fea8c0608394773250c28a1c",
          limitedGridContent: "_1c6c5e2e5850fea8ee961e47b32d65061386",
          columnsDesktop2: "_1c6c5e2e5850fea8e0672125aba71dce5e07",
          thirdLine: "_1c6c5e2e5850fea8cd50d53d3b617640dabb",
          gridItem: "_1c6c5e2e5850fea8fc1568b77cc287420646",
          columnsDesktop3: "_1c6c5e2e5850fea8a7043faf0a658ff4328a",
          columnsDesktop4: "_1c6c5e2e5850fea8fc538cbda060a473ba1b",
          extraDiv: "_1c6c5e2e5850fea8ee55d82807507d7ffa2d",
          gridText: "_1c6c5e2e5850fea8c49b07718b793fbbf0e1",
          noTextFit: "_1c6c5e2e5850fea8f30240c7088b463a9458",
          coupons: "_1c6c5e2e5850fea8ecf4053f24a1ea762cbb",
          imageArea: "_1c6c5e2e5850fea8ece1738ecb734a0cc174",
          carouselOnMobile: "_1c6c5e2e5850fea8b52aa02f8029431b58ee",
          imageAreaBg: "_1c6c5e2e5850fea8b5915942ffe5f300bc4b",
          carouselDesc: "_1c6c5e2e5850fea8f1b6246a59e1a1757f2a"
        },
        m = e => {
          let {
            to: a,
            children: i
          } = e;
          return a ? (0, s.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noreferrer",
            children: i
          }) : i
        },
        u = e => {
          let {
            items: a,
            noTextFit: i,
            type: t,
            carouselOnMobile: d,
            columns: c = {
              desktop: 3,
              mobile: 2
            }
          } = e;
          const [l, u] = (0, n.useState)(null), [f, g] = (0, n.useState)(3), p = (0, n.useRef)(null);
          return (0, n.useEffect)((() => {
            const e = window.getComputedStyle(p.current).getPropertyValue("--divisible-desktop"),
              i = () => {
                const a = window.innerWidth;
                g(a <= 767 ? 2 : e)
              };
            if (a?.content.length && a?.content.length >= f) {
              let {
                length: e
              } = a.content;
              const i = [];
              if (e % f != 0) {
                let a = 0;
                do {
                  i.push((0, s.jsx)("div", {
                    className: `${o.gridItem} ${o.extraDiv}`
                  }, "limited-grid-" + a++)), e++
                } while (e % f != 0)
              }
              u(i)
            }
            return window.addEventListener("resize", i), i(), () => window.removeEventListener("resize", i)
          }), [f, p]), (0, s.jsxs)("div", {
            className: `${o.limitedGrid} ${d?o.carouselOnMobile:""}`,
            children: [(0, s.jsxs)("div", {
              ref: p,
              style: {
                "--divisible-desktop": c.desktop,
                "--divisible-mobile": c.mobile
              },
              className: `\n                    ${o.limitedGridContent}\n                    ${2===c.desktop?o.columnsDesktop2:""}\n                    ${3===c.desktop?o.columnsDesktop3:""}\n                    ${c.desktop>=4?o.columnsDesktop4:""}\n                    ${i?o.noTextFit:""}\n                    ${t?o[t]:""}\n                `,
              children: [(0, s.jsx)("div", {
                className: o.thirdLine
              }), a.content.map(((e, a) => (0, s.jsx)("div", {
                className: o.gridItem,
                children: (0, s.jsxs)(m, {
                  to: e?.href ?? e?.to,
                  children: [!i && (0, s.jsx)(r.TextFit, {
                    className: o.gridText,
                    min: 16,
                    max: 1e3,
                    mode: "single",
                    children: e.title
                  }), (0, s.jsx)("div", {
                    className: o.imageArea,
                    children: (0, s.jsx)(r.ImageWithBadge, {
                      image: e.image,
                      ariaLabel: e.ariaLabel,
                      badgeType: "badge2",
                      badge: e.badge
                    })
                  }), i && (0, s.jsx)("p", {
                    children: e.title
                  })]
                })
              }, a))), l]
            }), d && (0, s.jsx)("div", {
              className: o.gridCarousel,
              children: (0, s.jsx)(r.Carousel, {
                children: a.content.map(((e, a) => (0, s.jsxs)("div", {
                  children: [(0, s.jsx)("div", {
                    className: `${o.imageArea} ${o.imageAreaBg}`,
                    children: (0, s.jsx)(r.ImageWithBadge, {
                      className: t ? o[t] : "",
                      image: e.image,
                      ariaLabel: e.ariaLabel,
                      badgeType: "badge2",
                      badge: e.badge
                    })
                  }), e.title && (0, s.jsx)("p", {
                    className: o.carouselDesc,
                    children: (0, s.jsx)(m, {
                      to: e?.href ?? e?.to,
                      children: e.title
                    })
                  })]
                }, a)))
              })
            })]
          })
        },
        f = e => {
          let {
            items: a = []
          } = e;
          if (!a.length) return null;
          let i = 0,
            n = 0;
          return a.map(((e, a) => {
            if (e.limitedList?.content || e.limitedGridList?.content) {
              const i = [];
              return e.limitedList?.content && i.push((0, s.jsx)(v, {
                items: e.limitedList.content,
                noInfiniteScroll: e?.noInfiniteScroll,
                perPage: e?.perPage
              }, e?.key ?? a)), e.limitedGridList?.content && i.push((0, s.jsx)(u, {
                columns: e.limitedGridList.columns,
                items: e.limitedGridList
              }, e?.key ?? a)), n++, (0, s.jsxs)("div", {
                children: [1 === n && (0, s.jsx)("div", {
                  className: "_1c6c5e2e5850fea8c6f2704eec0039dc99fd",
                  children: (0, s.jsx)("div", {
                    className: "_1c6c5e2e5850fea8eb5100dcfafe9290815d"
                  })
                }), i]
              }, a)
            }
            if (e.discountsList?.content || e.discountsGridList?.content) {
              const n = [];
              return e.discountsList?.content && n.push((0, s.jsx)(v, {
                items: e.discountsList.content,
                noInfiniteScroll: e?.noInfiniteScroll,
                perPage: e?.perPage
              }, e?.key ?? a)), e.discountsGridList?.content && n.push((0, s.jsx)(u, {
                noTextFit: !0,
                carouselOnMobile: !0,
                type: e.type ?? e.discountsGridList.type,
                columns: e.discountsGridList.columns,
                items: e.discountsGridList
              }, e?.key ?? a)), e?.list && n.push((0, s.jsx)(r.UnorderedList, {
                ...e
              })), i++, (0, s.jsxs)("div", {
                children: [1 === i && (0, s.jsx)("div", {
                  className: "_1c6c5e2e5850fea8b71bc87fe69e5e8e4ab7"
                }), n]
              }, a)
            }
            return null
          }))
        },
        g = {
          discountsCarouselItem: "_1c6c5e2e5850fea8f9c21e26992205ac01be",
          fontUpdate: "_1c6c5e2e5850fea8f37fa2503116c2fcad05",
          discountsCarousel: "_1c6c5e2e5850fea8b420f85959d96ba8f2f5",
          singleImage: "_1c6c5e2e5850fea8fce6b1a83c6b2a049943"
        },
        p = e => {
          let {
            wrapper: a,
            children: i,
            length: n
          } = e;
          return n > 1 ? a(i) : i
        },
        v = e => {
          let {
            items: a,
            noInfiniteScroll: i = !1,
            size: t = null,
            perPage: d = null,
            customSlidesPerView: c = null,
            style: l = {}
          } = e;
          const o = (0, n.useRef)(null),
            [m, u] = (0, n.useState)(null),
            [f, v] = (0, n.useState)(t);
          return (0, n.useEffect)((() => {
            !t && d && v(1 === d ? "lg" : "sm"), t || d || (v("lg"), console.error('Error: DiscountsCarousel expects a prop "size" in order to display the correct amount of slides. Defaulting to lg.'))
          }), [t, d]), (0, n.useEffect)((() => {
            if (!o.current) return;
            const e = () => {
              const e = c || window.getComputedStyle(o.current).getPropertyValue("--slides-per-view");
              u(e)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [o, c]), a.length ? (0, s.jsx)(p, {
            length: a.length,
            wrapper: e => (0, s.jsx)("div", {
              "data-size": f,
              ref: o,
              children: (0, s.jsx)(r.Carousel, {
                className: g.discountsCarousel,
                noInfiniteScroll: i,
                style: {
                  ...l,
                  "--per-page": m,
                  "--carousel-column-gap": "1rem"
                },
                children: e
              })
            }),
            children: a.map(((e, i) => (0, s.jsxs)("div", {
              className: [g.discountsCarouselItem, 1 === a.length ? g.singleImage : ""].join(" "),
              children: [(0, s.jsx)(r.ImageWithBadge, {
                ariaLabel: e?.ariaLabel,
                image: e?.image ?? {
                  alt: e?.alt ?? "",
                  desktop: e?.img ?? null,
                  mobile: e?.imgMobile ?? null
                },
                badge: e?.badge ?? e?.image?.badge ?? e.discountTxt,
                splitter: e?.splitter ?? e?.image?.splitter,
                badgeType: "badgeSizeUpdate"
              }), (0, s.jsx)(r.DescriptionArea, {
                className: g.fontUpdate,
                item: e
              })]
            }, e?.key ?? i)))
          }) : (console.error('Error: DiscountsCarousel expects a prop "items" that contains an array of objects.'), null)
        },
        h = e => {
          let {
            items: a = [],
            style: i = {}
          } = e;
          return a.length ? (0, s.jsx)(r.Grid, {
            style: {
              "--background-color": "#000",
              "--grid-gap-dynamic": "var(--grid-gap-static-lg)",
              "--padding-dynamic-tb": "var(--grid-gap-static-lg)",
              "--image-rounding-dynamic": "0",
              ...i
            },
            children: a.map(((e, a) => e?.title_and_description ? (0, s.jsxs)(r.Grid, {
              context: "readable-text",
              style: {
                textAlign: "left",
                "--grid-gap-dynamic": "var(--grid-gap-static-xs)",
                background: "transparent"
              },
              children: [e?.title_and_description.title && (0, s.jsx)("h1", {
                className: "large",
                children: e.title_and_description.title
              }), e?.title_and_description.description && (0, s.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: e.title_and_description.description
                }
              })]
            }, e?.key ?? a) : e?.limitedList?.content ? (0, s.jsx)(v, {
              items: e.limitedList.content,
              noInfiniteScroll: e?.noInfiniteScroll,
              perPage: e?.perPage,
              size: e?.size
            }, e?.key ?? a) : e?.discountsGridList?.content ? (0, s.jsx)(l, {
              noCarousel: !0,
              columns: e.discountsGridList?.columns,
              items: e.discountsGridList.content
            }, e?.key ?? a) : e?.content ? (0, s.jsx)(r.HTMLElement, {
              ...e,
              children: e.content
            }, e?.key ?? a) : e?.list ? (0, s.jsx)(r.UnorderedList, {
              ...e
            }) : void 0))
          }) : null
        },
        b = {
          area: "_1c6c5e2e5850fea8aef21ffeff79dc62ba24",
          btmImg: "_1c6c5e2e5850fea8a1c51a7aa9369eaf079c",
          limitedTopImg: "_1c6c5e2e5850fea8fa1c3afa7e5f8f6902a7",
          topImg: "_1c6c5e2e5850fea8f34e40ec1e46045b6556"
        },
        k = e => {
          let {
            items: a,
            renderTemplate: i,
            ...n
          } = e;
          switch (i) {
            case "gtav":
            case "gtao":
              return (0, s.jsx)(h, {
                items: a,
                ...n
              });
            case "grid":
              return (0, s.jsx)(l, {
                items: a,
                ...n
              });
            default:
              return (0, s.jsx)(f, {
                items: a
              })
          }
        },
        x = e => {
          let {
            items: a,
            renderTemplate: i,
            style: n,
            ...t
          } = e;
          return (0, s.jsx)("div", {
            className: b.area,
            "data-context": "discounts",
            children: (0, s.jsxs)("div", {
              className: b.discountsContent,
              children: [(0, s.jsx)(k, {
                renderTemplate: i,
                items: a,
                props: t,
                style: n
              }), (0, s.jsx)("div", {
                className: b.btmImg
              })]
            })
          })
        };
      var _ = i(9696),
        j = i.n(_);
      const N = {
          donate: "_1c6c5e2e5850fea8eb9e02d18c2e7b2b52b5",
          largePaddingSides: "_1c6c5e2e5850fea8fa870f1909d3ea0301ec"
        },
        y = e => {
          let {
            text: a
          } = e;
          const {
            sanitize: i
          } = j();
          return (0, s.jsx)("div", {
            className: [N.donate, "normalPaddingTopBottom largePaddingSides"].join(" "),
            children: (0, s.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: i(a)
              }
            })
          })
        };
      var S = i(2999),
        I = i.n(S),
        w = i(9542),
        L = i(8356),
        P = i.n(L),
        T = i(4224),
        F = i.n(T),
        G = i(4378);
      const D = {
          event: "_1c6c5e2e5850fea8ed5f9280b13b59a49eec",
          featured: "_1c6c5e2e5850fea8d1f2db52d32a7225d61b",
          eventInfo: "_1c6c5e2e5850fea8dcf127a634221b8098a3",
          large: "_1c6c5e2e5850fea8c002528278e1cdbec437",
          videoWrapper: "_1c6c5e2e5850fea8f3260737e9b7c57df84f"
        },
        V = e => {
          let {
            images: a
          } = e;
          return a?.length ? 1 === a.length ? (0, s.jsx)(r.ImageWithBadge, {
            ...a[0]
          }) : (0, s.jsx)(r.Carousel, {
            items: a
          }) : null
        },
        C = e => {
          let {
            images: a,
            title: i,
            content: t,
            isFeatured: d = !1,
            className: l = null,
            videoInHeroProps: o
          } = e;
          const m = (0, w.useTinaPayload)(),
            u = m?.meta?.prod ?? !1,
            f = (0, w.useTinaComponents)();
          I().set(m, "meta.prod", u);
          let g = o?.gifVideoProps?.hasVideoInHero || !1;
          const p = o?.htmlVideoProps?.id || !1,
            v = !!o?.htmlVideoProps?.hasHtmlVideoInHero && p;
          v && g && (g = !1);
          const h = void 0 === o || !g && !v,
            b = (0, n.useMemo)((() => ({
              ...f,
              HTMLElement: r.HTMLElement,
              ImageWithBadge: r.ImageWithBadge,
              GroupOfItems: c()
            })), [f]);
          return (0, s.jsxs)("div", {
            className: (0, w.classList)(D.event, l),
            children: [g && (0, s.jsx)("div", {
              className: D.videoWrapper,
              children: (0, s.jsx)(P(), {
                hash: {
                  desktop: o?.gifVideoProps?.hash?.desktop,
                  mobile: o?.gifVideoProps?.hash?.mobile
                },
                loop: o?.gifVideoProps?.isLooping
              })
            }), v && p && (0, s.jsx)("div", {
              className: D.videoWrapper,
              children: (0, s.jsx)(F(), {
                autoplay: o?.htmlVideoProps?.autoPlay || !1,
                id: p
              })
            }), h && (0, s.jsx)(V, {
              images: a
            }), d && (0, s.jsx)(G.default, {}), (0, s.jsxs)("div", {
              className: D.eventInfo,
              children: [!d && (0, s.jsx)("h3", {
                className: D.eventTitle,
                children: i
              }), (0, s.jsx)(w.TinaParser, {
                components: b,
                tina: {
                  payload: {
                    content: t,
                    meta: {
                      prod: u
                    }
                  }
                }
              })]
            })]
          })
        },
        $ = e => (0, s.jsx)(C, {
          ...e,
          className: D.featured,
          isFeatured: !0
        }),
        M = {
          clip: "_1c6c5e2e5850fea8c690130b61bb7ff08523",
          redTexture: "_1c6c5e2e5850fea8ca901535ed8040e1c467",
          greyTexture: "_1c6c5e2e5850fea8e7678c54af2658902efe"
        },
        E = e => {
          let {
            fontFamily: a = "inherit",
            fontBg: i,
            string: n
          } = e;
          return (0, s.jsx)("span", {
            style: {
              "--font-family-clip": a
            },
            className: [M.clip, M[i]].join(" "),
            children: n
          })
        };
      var B = i(3657);
      const R = {
          gamingWrapper: "_1c6c5e2e5850fea8dac29c965cc5e1c26e56",
          gamingRewards: "_1c6c5e2e5850fea8bfcd25af2b432261c26b",
          psPlus: "_1c6c5e2e5850fea8ee6e703409860b14015d",
          rightSide: "_1c6c5e2e5850fea8b531aec805fdbc421fb0",
          primeGamingSocialLogo: "_1c6c5e2e5850fea8b9bff8272ca0f1235eec",
          gtaPlus: "_1c6c5e2e5850fea8b4538e93d172276607d0",
          plus: "_1c6c5e2e5850fea8aa03d239a9b0983fb5bb",
          listArea: "_1c6c5e2e5850fea8a9e798941ccde7b0c567",
          psPlusDefaultImg: "_1c6c5e2e5850fea8bd25cae14a3ba24b11cf"
        },
        A = e => {
          let {
            headline: a,
            plainImage: n,
            top: t,
            unorderedList: d,
            bottom: c,
            rewards: l = "primeGaming",
            style: o = {}
          } = e;
          const m = (0, B.useLocale)();
          return "primeGaming" === l && ["ru", "kr", "ko_kr", "ru_ru"].includes(m) ? null : (0, s.jsx)("div", {
            className: R.gamingWrapper,
            children: (0, s.jsx)("div", {
              className: `${R.gamingRewards} ${R[l]}`,
              style: o,
              children: (0, s.jsxs)(r.ResponsiveGridBox, {
                style: {
                  "--grid-align-items": "center",
                  "--grid-row-gap": "2rem"
                },
                children: [(0, s.jsxs)(r.ResponsiveGridItem, {
                  children: [a && (0, s.jsx)("h3", {
                    children: a
                  }), "psPlus" === l && (0, s.jsx)("img", {
                    "aria-label": "Playstation Plus Benefit",
                    className: R.primeGamingSocialLogo,
                    src: i(6469)
                  }), "primeGaming" === l && (0, s.jsx)("img", {
                    "aria-label": "Social Club | Prime Gaming",
                    className: R.primeGamingSocialLogo,
                    src: i(4024)
                  }), "gtaPlus" === l && (0, s.jsx)("img", {
                    "aria-label": "GTA Plus",
                    className: R.primeGamingSocialLogo,
                    src: i(1630)
                  }), t?.text && (0, s.jsx)("p", {
                    ...t,
                    dangerouslySetInnerHTML: {
                      __html: t.text
                    }
                  }), d?.list && (0, s.jsx)("div", {
                    className: R.listArea,
                    children: (0, s.jsx)(r.UnorderedList, {
                      className: "gtaPlus" === l ? R.plus : "",
                      ...d,
                      list: d.list,
                      ...d?.attributes
                    })
                  }), c?.text && (0, s.jsx)("p", {
                    ...c,
                    dangerouslySetInnerHTML: {
                      __html: c.text
                    }
                  })]
                }), (0, s.jsx)(r.ResponsiveGridItem, {
                  className: R.rightSide,
                  children: n?.image ? (0, s.jsx)(r.MultiSourceImage, {
                    image: n.image
                  }) : (0, s.jsx)("div", {
                    className: R.psPlusDefaultImg
                  })
                })]
              })
            })
          })
        };
      var z = i(6947),
        H = i(4859),
        W = i(6992);
      const O = e => {
          let {
            backgroundImages: a,
            deckHash: i = "",
            perPage: t = null
          } = e;
          const [d, c] = (0, n.useState)(null), l = (0, w.useGetCdnSource)(a?.backgroundImg?.full_src ?? null), o = (0, w.useGetCdnSource)(a?.layeredImg?.full_src ?? null), m = (0, n.useRef)(null), {
            data: u,
            error: f
          } = (0, H.useQuery)(W.TinaModulesInfo, {
            variables: {
              ids: i
            },
            skip: !i
          });
          return (0, n.useEffect)((() => {
            if (u?.tinaModulesInfo) {
              const e = u.tinaModulesInfo[0],
                {
                  id: a,
                  tina: i
                } = e,
                n = I().clone(i);
              I().set(n, "payload.meta.id", a), c(n)
            }
          }), [u]), u && d ? f ? (0, s.jsx)(r.Wasted, {
            error: f
          }) : (0, s.jsx)("div", {
            className: "_1c6c5e2e5850fea8db774e916b16318ae327",
            ref: m,
            style: {
              "--background-image": `url(${l})`,
              "--layered-image": `url(${o})`,
              "--slides-per-view-desktop": t
            },
            children: (0, s.jsxs)("div", {
              className: "_1c6c5e2e5850fea8f455e6d9f8157a14665a",
              children: [o ? (0, s.jsx)("div", {
                className: "_1c6c5e2e5850fea8e4bebd4c2131ade1d9c1"
              }) : "", (0, s.jsx)("div", {
                className: "_1c6c5e2e5850fea8c4e52217bf1e1984b197",
                children: (0, s.jsx)(w.TinaParser, {
                  components: {
                    Deck: z.Deck
                  },
                  tina: d
                })
              })]
            })
          }) : null
        },
        U = {
          hiddenMobile: "_1c6c5e2e5850fea8e96a63eec3122dc2a4f5",
          hiddenLarge: "_1c6c5e2e5850fea8eed7a702464fd229d881",
          "hidden-sm": "_1c6c5e2e5850fea8af3842b947053cf2932e",
          "show-sm": "_1c6c5e2e5850fea8daf236def146d5984332",
          "hidden-md": "_1c6c5e2e5850fea8ef90d488c8f49b134e8b",
          "show-md": "_1c6c5e2e5850fea8ed4ec616c6c7c8840514",
          "hidden-lg": "_1c6c5e2e5850fea8a11425ac101c440709c0",
          "show-lg": "_1c6c5e2e5850fea8c1b1f6cd526524fc4ce4",
          "hidden-xl": "_1c6c5e2e5850fea8bc7425f876dbbfafc359",
          "show-xl": "_1c6c5e2e5850fea8a2a9889ffb089e23dfe1",
          "hidden-xxl": "_1c6c5e2e5850fea8bab72c30a7c66b393b54",
          "show-xxl": "_1c6c5e2e5850fea8a052de34831b84cf470a",
          "full-width": "_1c6c5e2e5850fea8f5937043c4f02ec43709",
          "reverse-mobile": "_1c6c5e2e5850fea8d00d706245a1594dc25b",
          "center-children": "_1c6c5e2e5850fea8af5cd07ecb23db699714",
          "std-padding-mobile-desktop-none": "_1c6c5e2e5850fea8da3c8590d87c28680c7c",
          "std-padding-desktop-mobile-none": "_1c6c5e2e5850fea8d4451bc3c8bec7c2ebd1",
          "horizontal-line": "_1c6c5e2e5850fea8dfaf731745ab9b4e53c3",
          gold: "_1c6c5e2e5850fea8e23f08b60c2c1c99a883",
          heroImage: "_1c6c5e2e5850fea8bcce02f64dfa789d982b",
          responsiveImage: "_1c6c5e2e5850fea8a0d8db2d99e68f049876",
          responsiveVideo: "_1c6c5e2e5850fea8cfe91d32e301b62619c9"
        },
        q = e => {
          let {
            alt: a = "",
            className: i = "",
            src: n = {},
            image: t = null,
            video: d = null
          } = e;
          return (0, s.jsxs)("div", {
            className: ((n?.videoPlayerId || n?.gifHash) && U.heroImage, i),
            children: [n?.mobile && (0, s.jsx)(r.ResponsiveImg, {
              src: n.mobile,
              ariaLabel: a,
              className: [n?.desktop && U.hiddenLarge, U.responsiveImage].join(" "),
              noRatioPlease: !0
            }), n?.desktop && (0, s.jsx)(r.ResponsiveImg, {
              src: n.desktop,
              ariaLabel: a,
              className: [n?.mobile && U.hiddenMobile, U.responsiveImage].join(" ")
            }), n?.videoPlayerId && (0, s.jsx)("div", {
              className: [U.responsiveVideo, U.trailer].join(" "),
              children: (0, s.jsx)(F(), {
                context: "site",
                autoplay: !1,
                id: n.videoPlayerId,
                hero: !0
              })
            }), n?.gifHash && (0, s.jsx)("div", {
              className: U.responsiveVideo,
              children: (0, s.jsx)(P(), {
                hash: [{
                  desktop: n?.gifHash?.desktop
                }, {
                  mobile: n?.gifHash?.mobile
                }]
              })
            }), t && (0, s.jsx)(r.ImageWithBadge, {
              image: t
            }), d && (0, s.jsx)("div", {
              className: [U.responsiveVideo, U.trailer].join(" "),
              children: (0, s.jsx)(F(), {
                context: "site",
                autoplay: d?.autoplay ?? !1,
                id: d.id,
                hero: !0
              })
            })]
          })
        };
      var Q = i(2224);
      const J = e => {
          let {
            children: a,
            className: i = "",
            style: t,
            game: d
          } = e;
          return (0, n.useEffect)((() => {
            document.fonts.ready.then((() => {
              Q.balanceText()
            }))
          }), [a]), (0, s.jsx)("div", {
            className: ["newswireFull", d, i].join(" "),
            style: t,
            "data-game": d,
            children: a
          })
        },
        K = e => {
          let {
            pct: a,
            bgColor: i,
            primaryColor: n
          } = e;
          return (0, s.jsx)("div", {
            style: {
              position: "relative",
              width: "100%",
              height: "20px",
              backgroundColor: i
            },
            children: (0, s.jsx)("div", {
              className: "_1c6c5e2e5850fea8a1f51d5da3595dd14065",
              style: {
                backgroundColor: n,
                position: "absolute",
                top: "0",
                left: "0",
                width: `${a}%`,
                height: "100%"
              }
            })
          })
        },
        X = e => {
          let {
            title: a,
            desc: i,
            img: n,
            imgMobile: t,
            bgColor: d,
            descPositionBottom: c,
            fontColor: l = "#fff"
          } = e;
          return (0, s.jsxs)(s.Fragment, {
            children: [c ?? (0, s.jsx)(r.ResponsiveSection, {
              style: {
                backgroundColor: `${d}`,
                "--padding-top-bottom": "1.75rem"
              },
              className: "normalPaddingTopBottom largePaddingSides",
              children: (0, s.jsxs)(r.ResponsiveSection, {
                className: "maxDescArea",
                style: {
                  "--desc-h3-margin-bottom": "var(--h-rem-size)"
                },
                children: [(0, s.jsx)("h3", {
                  style: {
                    "--color-span": `${l}`
                  },
                  children: a
                }), (0, s.jsx)("p", {
                  children: i
                })]
              })
            }), (0, s.jsxs)(r.ResponsiveSection, {
              className: [c ?? "spacing"].join(" "),
              children: [(0, s.jsx)(r.ResponsiveImg, {
                className: "hiddenMobile",
                src: n
              }), (0, s.jsx)(r.ResponsiveImg, {
                className: "hiddenLarge",
                src: t
              })]
            }), c ? (0, s.jsx)(r.ResponsiveSection, {
              style: {
                backgroundColor: `${d}`,
                "--padding-top-bottom": "1.75rem"
              },
              className: "normalPaddingTopBottom largePaddingSides spacing",
              children: (0, s.jsxs)(r.ResponsiveSection, {
                className: "maxDescArea",
                style: {
                  "--desc-h3-margin-bottom": "var(--h-rem-size)"
                },
                children: [(0, s.jsx)("h3", {
                  style: {
                    "--color-span": `${l}`
                  },
                  children: a
                }), (0, s.jsx)("p", {
                  children: i
                })]
              })
            }) : null]
          })
        }
    },
    6992: e => {
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
                    value: "tina_uploads"
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
                        value: "type"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "directory"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      alias: {
                        kind: "Name",
                        value: "filename"
                      },
                      name: {
                        kind: "Name",
                        value: "input_filename"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      alias: {
                        kind: "Name",
                        value: "hashed_filename"
                      },
                      name: {
                        kind: "Name",
                        value: "filename"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      alias: {
                        kind: "Name",
                        value: "previewSrc"
                      },
                      name: {
                        kind: "Name",
                        value: "preview_src"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "full_src"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "prod"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "created_by"
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
          end: 1001
        }
      };

      function i(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          i(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          i(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          i(e, a)
        }))
      }
      a.loc.source = {
        body: "query TinaModulesInfo(\n    $ids: [String]!\n    $locale: String!\n    $sync: Boolean = false\n    $cache: Boolean = false\n) {\n    tinaModulesInfo(ids: $ids, locale: $locale, cache: $cache) {\n        id: id_hash\n        title\n        title_doc\n        type\n        sync_hash\n        to\n        visible\n        children {\n            title\n            id_hash\n            to\n            tina {\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n        tina_uploads {\n            id\n            type\n            directory\n            filename: input_filename\n            hashed_filename: filename\n            previewSrc: preview_src\n            full_src\n            prod\n            created_by\n        }\n        tina {\n            payload\n            variables {\n                keys\n                _translations @include(if: $sync) {\n                    locale\n                    keys\n                }\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function s(e, a) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == a) return n
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          i(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesInfo = function(e, a) {
        var i = {
          kind: e.kind,
          definitions: [s(e, a)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var t = n[a] || new Set,
          d = new Set,
          c = new Set;
        for (t.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var l = c;
          c = new Set, l.forEach((function(e) {
            d.has(e) || (d.add(e), (n[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return d.forEach((function(a) {
          var n = s(e, a);
          n && i.definitions.push(n)
        })), i
      }(a, "TinaModulesInfo")
    },
    1630: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/c957a3210117cf0e5e6a.svg"
    },
    6469: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/c5b831ad44e0f2012e2f.png"
    },
    4024: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/e73c2fba147b4d905059.svg"
    }
  }
]);