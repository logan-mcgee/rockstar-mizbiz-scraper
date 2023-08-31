(self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [975], {
    1765: (e, a, i) => {
      "use strict";
      i.r(a), i.d(a, {
        default: () => r
      });
      var n = i(8976),
        s = i(9542),
        t = i(9929);
      const d = {
        title: "a6afed00140449f9adb8c90b39b6855c758d",
        main: "a6afed00140449f9b71b10432f44c16d125f",
        breadcrumbs: "a6afed00140449f9c2bf1c67c354c461aa89"
      };
      var l = i(6160);
      const r = (0, t.withTranslations)((e => {
        let {
          children: a,
          intro: i,
          image: r = {},
          style: o = {},
          t: c,
          className: m = "",
          variant: f = null
        } = e, u = {};
        void 0 !== o.toggleInvertSeparator && (u = {
          "--breadcrumb-separator-filter-invert": o.toggleInvertSeparator ? "invert(0)" : "invert(1)"
        });
        const g = (0, t.useNewswirePost)(),
          p = {},
          v = p?.meta?.title ?? g?.title,
          h = p?.meta?.subtitle ?? g?.subtitle,
          b = h ? (0, l.jsx)("h3", {
            "data-context": "newswire-subtitle",
            children: h
          }) : "",
          k = [{
            text: c("Newswire"),
            to: "/newswire"
          }],
          {
            src: x
          } = (0, s.useImageParser)(r),
          j = (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)("time", {
              dateTime: g.created,
              children: g.created_formatted
            }), i ? (0, l.jsx)(n.DescriptionArea, {
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
        const N = (0, l.jsx)("div", {
          className: d.breadcrumbs,
          children: k.map((e => (0, l.jsx)(n.A, {
            to: e.to,
            children: e.text
          }, e.to)))
        });
        return x?.desktop && (o.background = `url(${x.desktop}) center/cover no-repeat`), (0, l.jsx)("div", {
          className: [m, d.title].join(" "),
          style: {
            ...o,
            ...u
          },
          children: "separated" === f ? (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsxs)("header", {
              "data-context": "title",
              children: [N, (0, l.jsx)("h1", {
                children: v
              })]
            }), (0, l.jsxs)("footer", {
              "data-context": "title",
              children: [b, j]
            })]
          }) : (0, l.jsxs)(l.Fragment, {
            children: [N, (0, l.jsxs)("div", {
              className: d.main,
              children: [(0, l.jsx)("h1", {
                children: v
              }), b]
            }), j]
          })
        })
      }))
    },
    3975: (e, a, i) => {
      "use strict";
      i.r(a), i.d(a, {
        AnchorLink: () => t,
        Discounts: () => x,
        Donate: () => S,
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
        s = i(6160);
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
        l = i.n(d);
      const r = e => {
        let {
          items: a,
          columns: i = {},
          noCarousel: n = !1,
          noInfiniteScroll: t = !1,
          ...d
        } = e;
        const r = d?.style ?? {};
        return n && (i?.mobile && (r["--mobile-cols"] = i.mobile), i?.desktop && (r["--desktop-cols"] = i.desktop)), (0, s.jsxs)(s.Fragment, {
          children: [d.title && (0, s.jsx)("p", {
            className: "a6afed00140449f9cc23ea60d10b10978740",
            children: d.title
          }), (0, s.jsxs)("div", {
            className: "a6afed00140449f9c9824c3db07a3f15334b",
            children: [n && (0, s.jsx)(l(), {
              style: {
                ...r,
                "--grid-gap-dynamic": "2rem 0"
              },
              className: "a6afed00140449f9b6ef0aec65f96384d4cd",
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
      var o = i(8976);
      const c = {
          limitedGrid: "a6afed00140449f9ab9f12604c018853a308",
          gridCarousel: "a6afed00140449f9c0608394773250c28a1c",
          limitedGridContent: "a6afed00140449f9ee961e47b32d65061386",
          columnsDesktop2: "a6afed00140449f9e0672125aba71dce5e07",
          thirdLine: "a6afed00140449f9cd50d53d3b617640dabb",
          gridItem: "a6afed00140449f9fc1568b77cc287420646",
          columnsDesktop3: "a6afed00140449f9a7043faf0a658ff4328a",
          columnsDesktop4: "a6afed00140449f9fc538cbda060a473ba1b",
          extraDiv: "a6afed00140449f9ee55d82807507d7ffa2d",
          gridText: "a6afed00140449f9c49b07718b793fbbf0e1",
          noTextFit: "a6afed00140449f9f30240c7088b463a9458",
          coupons: "a6afed00140449f9ecf4053f24a1ea762cbb",
          imageArea: "a6afed00140449f9ece1738ecb734a0cc174",
          carouselOnMobile: "a6afed00140449f9b52aa02f8029431b58ee",
          imageAreaBg: "a6afed00140449f9b5915942ffe5f300bc4b",
          carouselDesc: "a6afed00140449f9f1b6246a59e1a1757f2a"
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
        f = e => {
          let {
            items: a,
            noTextFit: i,
            type: t,
            carouselOnMobile: d,
            columns: l = {
              desktop: 3,
              mobile: 2
            }
          } = e;
          const [r, f] = (0, n.useState)(null), [u, g] = (0, n.useState)(3), p = (0, n.useRef)(null);
          return (0, n.useEffect)((() => {
            const e = window.getComputedStyle(p.current).getPropertyValue("--divisible-desktop"),
              i = () => {
                const a = window.innerWidth;
                g(a <= 767 ? 2 : e)
              };
            if (a?.content.length && a?.content.length >= u) {
              let {
                length: e
              } = a.content;
              const i = [];
              if (e % u != 0) {
                let a = 0;
                do {
                  i.push((0, s.jsx)("div", {
                    className: `${c.gridItem} ${c.extraDiv}`
                  }, "limited-grid-" + a++)), e++
                } while (e % u != 0)
              }
              f(i)
            }
            return window.addEventListener("resize", i), i(), () => window.removeEventListener("resize", i)
          }), [u, p]), (0, s.jsxs)("div", {
            className: `${c.limitedGrid} ${d?c.carouselOnMobile:""}`,
            children: [(0, s.jsxs)("div", {
              ref: p,
              style: {
                "--divisible-desktop": l.desktop,
                "--divisible-mobile": l.mobile
              },
              className: `\n                    ${c.limitedGridContent}\n                    ${2===l.desktop?c.columnsDesktop2:""}\n                    ${3===l.desktop?c.columnsDesktop3:""}\n                    ${l.desktop>=4?c.columnsDesktop4:""}\n                    ${i?c.noTextFit:""}\n                    ${t?c[t]:""}\n                `,
              children: [(0, s.jsx)("div", {
                className: c.thirdLine
              }), a.content.map(((e, a) => (0, s.jsx)("div", {
                className: c.gridItem,
                children: (0, s.jsxs)(m, {
                  to: e?.href ?? e?.to,
                  children: [!i && (0, s.jsx)(o.TextFit, {
                    className: c.gridText,
                    min: 16,
                    max: 1e3,
                    mode: "single",
                    children: e.title
                  }), (0, s.jsx)("div", {
                    className: c.imageArea,
                    children: (0, s.jsx)(o.ImageWithBadge, {
                      image: e.image,
                      ariaLabel: e.ariaLabel,
                      badgeType: "badge2",
                      badge: e.badge
                    })
                  }), i && (0, s.jsx)("p", {
                    children: e.title
                  })]
                })
              }, a))), r]
            }), d && (0, s.jsx)("div", {
              className: c.gridCarousel,
              children: (0, s.jsx)(o.Carousel, {
                children: a.content.map(((e, a) => (0, s.jsxs)("div", {
                  children: [(0, s.jsx)("div", {
                    className: `${c.imageArea} ${c.imageAreaBg}`,
                    children: (0, s.jsx)(o.ImageWithBadge, {
                      className: t ? c[t] : "",
                      image: e.image,
                      ariaLabel: e.ariaLabel,
                      badgeType: "badge2",
                      badge: e.badge
                    })
                  }), e.title && (0, s.jsx)("p", {
                    className: c.carouselDesc,
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
        u = e => {
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
              }, e?.key ?? a)), e.limitedGridList?.content && i.push((0, s.jsx)(f, {
                columns: e.limitedGridList.columns,
                items: e.limitedGridList
              }, e?.key ?? a)), n++, (0, s.jsxs)("div", {
                children: [1 === n && (0, s.jsx)("div", {
                  className: "a6afed00140449f9c6f2704eec0039dc99fd",
                  children: (0, s.jsx)("div", {
                    className: "a6afed00140449f9eb5100dcfafe9290815d"
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
              }, e?.key ?? a)), e.discountsGridList?.content && n.push((0, s.jsx)(f, {
                noTextFit: !0,
                carouselOnMobile: !0,
                type: e.type ?? e.discountsGridList.type,
                columns: e.discountsGridList.columns,
                items: e.discountsGridList
              }, e?.key ?? a)), e?.list && n.push((0, s.jsx)(o.UnorderedList, {
                ...e
              })), i++, (0, s.jsxs)("div", {
                children: [1 === i && (0, s.jsx)("div", {
                  className: "a6afed00140449f9b71bc87fe69e5e8e4ab7"
                }), n]
              }, a)
            }
            return null
          }))
        },
        g = {
          discountsCarouselItem: "a6afed00140449f9f9c21e26992205ac01be",
          fontUpdate: "a6afed00140449f9f37fa2503116c2fcad05",
          discountsCarousel: "a6afed00140449f9b420f85959d96ba8f2f5",
          singleImage: "a6afed00140449f9fce6b1a83c6b2a049943"
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
            customSlidesPerView: l = null,
            style: r = {}
          } = e;
          const c = (0, n.useRef)(null),
            [m, f] = (0, n.useState)(null),
            [u, v] = (0, n.useState)(t);
          return (0, n.useEffect)((() => {
            !t && d && v(1 === d ? "lg" : "sm"), t || d || (v("lg"), console.error('Error: DiscountsCarousel expects a prop "size" in order to display the correct amount of slides. Defaulting to lg.'))
          }), [t, d]), (0, n.useEffect)((() => {
            if (!c.current) return;
            const e = () => {
              const e = l || window.getComputedStyle(c.current).getPropertyValue("--slides-per-view");
              f(e)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [c, l]), a.length ? (0, s.jsx)(p, {
            length: a.length,
            wrapper: e => (0, s.jsx)("div", {
              "data-size": u,
              ref: c,
              children: (0, s.jsx)(o.Carousel, {
                className: g.discountsCarousel,
                noInfiniteScroll: i,
                style: {
                  ...r,
                  "--per-page": m,
                  "--carousel-column-gap": "1rem"
                },
                children: e
              })
            }),
            children: a.map(((e, i) => (0, s.jsxs)("div", {
              className: [g.discountsCarouselItem, 1 === a.length ? g.singleImage : ""].join(" "),
              children: [(0, s.jsx)(o.ImageWithBadge, {
                ariaLabel: e?.ariaLabel,
                image: e?.image ?? {
                  alt: e?.alt ?? "",
                  desktop: e?.img ?? null,
                  mobile: e?.imgMobile ?? null
                },
                badge: e?.badge ?? e?.image?.badge ?? e.discountTxt,
                splitter: e?.splitter ?? e?.image?.splitter,
                badgeType: "badgeSizeUpdate"
              }), (0, s.jsx)(o.DescriptionArea, {
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
          return a.length ? (0, s.jsx)(o.Grid, {
            style: {
              "--background-color": "#000",
              "--grid-gap-dynamic": "var(--grid-gap-static-lg)",
              "--padding-dynamic-tb": "var(--grid-gap-static-lg)",
              "--image-rounding-dynamic": "0",
              ...i
            },
            children: a.map(((e, a) => e?.title_and_description ? (0, s.jsxs)(o.Grid, {
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
            }, e?.key ?? a) : e?.discountsGridList?.content ? (0, s.jsx)(r, {
              noCarousel: !0,
              columns: e.discountsGridList?.columns,
              items: e.discountsGridList.content
            }, e?.key ?? a) : e?.content ? (0, s.jsx)(o.HTMLElement, {
              ...e,
              children: e.content
            }, e?.key ?? a) : e?.list ? (0, s.jsx)(o.UnorderedList, {
              ...e
            }) : void 0))
          }) : null
        },
        b = {
          area: "a6afed00140449f9aef21ffeff79dc62ba24",
          btmImg: "a6afed00140449f9a1c51a7aa9369eaf079c",
          limitedTopImg: "a6afed00140449f9fa1c3afa7e5f8f6902a7",
          topImg: "a6afed00140449f9f34e40ec1e46045b6556"
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
              return (0, s.jsx)(r, {
                items: a,
                ...n
              });
            default:
              return (0, s.jsx)(u, {
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
      var j = i(3205),
        N = i.n(j);
      const y = {
          donate: "a6afed00140449f9eb9e02d18c2e7b2b52b5",
          largePaddingSides: "a6afed00140449f9fa870f1909d3ea0301ec"
        },
        S = e => {
          let {
            text: a
          } = e;
          const {
            sanitize: i
          } = N();
          return (0, s.jsx)("div", {
            className: [y.donate, "normalPaddingTopBottom largePaddingSides"].join(" "),
            children: (0, s.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: i(a)
              }
            })
          })
        };
      var I = i(3653),
        w = i.n(I),
        _ = i(9542),
        L = i(8356),
        P = i.n(L),
        F = i(4224),
        T = i.n(F),
        G = i(1765);
      const D = "a6afed00140449f9f3260737e9b7c57df84f",
        V = e => {
          let {
            images: a
          } = e;
          return a?.length ? 1 === a.length ? (0, s.jsx)(o.ImageWithBadge, {
            ...a[0]
          }) : (0, s.jsx)(o.Carousel, {
            items: a
          }) : null
        },
        C = e => {
          let {
            images: a,
            title: i,
            content: t,
            isFeatured: d = !1,
            className: r = null,
            videoInHeroProps: c
          } = e;
          const m = (0, _.useTinaPayload)(),
            f = m?.meta?.prod ?? !1,
            u = (0, _.useTinaComponents)();
          w().set(m, "meta.prod", f);
          let g = c?.gifVideoProps?.hasVideoInHero || !1;
          const p = c?.htmlVideoProps?.id || !1,
            v = !!c?.htmlVideoProps?.hasHtmlVideoInHero && p;
          v && g && (g = !1);
          const h = void 0 === c || !g && !v,
            b = (0, n.useMemo)((() => ({
              ...u,
              HTMLElement: o.HTMLElement,
              ImageWithBadge: o.ImageWithBadge,
              GroupOfItems: l()
            })), [u]);
          return (0, s.jsxs)("div", {
            className: (0, _.classList)("a6afed00140449f9ed5f9280b13b59a49eec", r),
            children: [g && (0, s.jsx)("div", {
              className: D,
              children: (0, s.jsx)(P(), {
                hash: {
                  desktop: c?.gifVideoProps?.hash?.desktop,
                  mobile: c?.gifVideoProps?.hash?.mobile
                },
                loop: c?.gifVideoProps?.isLooping
              })
            }), v && p && (0, s.jsx)("div", {
              className: D,
              children: (0, s.jsx)(T(), {
                autoplay: c?.htmlVideoProps?.autoPlay || !1,
                id: p
              })
            }), h && (0, s.jsx)(V, {
              images: a
            }), d && (0, s.jsx)(G.default, {}), (0, s.jsxs)("div", {
              className: "a6afed00140449f9dcf127a634221b8098a3",
              children: [!d && (0, s.jsx)("h3", {
                className: "a6afed00140449f9ef32214b3aa67dacb84e",
                children: i
              }), (0, s.jsx)(_.TinaParser, {
                components: b,
                tina: {
                  payload: {
                    content: t,
                    meta: {
                      prod: f
                    }
                  }
                }
              })]
            })]
          })
        },
        $ = e => (0, s.jsx)(C, {
          ...e,
          className: "a6afed00140449f9d1f2db52d32a7225d61b",
          isFeatured: !0
        }),
        M = {
          clip: "a6afed00140449f9c690130b61bb7ff08523",
          redTexture: "a6afed00140449f9ca901535ed8040e1c467",
          greyTexture: "a6afed00140449f9e7678c54af2658902efe"
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
          gamingWrapper: "a6afed00140449f9dac29c965cc5e1c26e56",
          gamingRewards: "a6afed00140449f9bfcd25af2b432261c26b",
          psPlus: "a6afed00140449f9ee6e703409860b14015d",
          rightSide: "a6afed00140449f9b531aec805fdbc421fb0",
          primeGamingSocialLogo: "a6afed00140449f9b9bff8272ca0f1235eec",
          gtaPlus: "a6afed00140449f9b4538e93d172276607d0",
          plus: "a6afed00140449f9aa03d239a9b0983fb5bb",
          listArea: "a6afed00140449f9a9e798941ccde7b0c567",
          psPlusDefaultImg: "a6afed00140449f9bd25cae14a3ba24b11cf"
        },
        A = e => {
          let {
            headline: a,
            plainImage: n,
            top: t,
            unorderedList: d,
            bottom: l,
            rewards: r = "primeGaming",
            style: c = {}
          } = e;
          const m = (0, B.useLocale)();
          return "primeGaming" === r && ["ru", "kr", "ko_kr", "ru_ru"].includes(m) ? null : (0, s.jsx)("div", {
            className: R.gamingWrapper,
            children: (0, s.jsx)("div", {
              className: `${R.gamingRewards} ${R[r]}`,
              style: c,
              children: (0, s.jsxs)(o.ResponsiveGridBox, {
                style: {
                  "--grid-align-items": "center",
                  "--grid-row-gap": "2rem"
                },
                children: [(0, s.jsxs)(o.ResponsiveGridItem, {
                  children: [a && (0, s.jsx)("h3", {
                    children: a
                  }), "psPlus" === r && (0, s.jsx)("img", {
                    "aria-label": "Playstation Plus Benefit",
                    className: R.primeGamingSocialLogo,
                    src: i(6469)
                  }), "primeGaming" === r && (0, s.jsx)("img", {
                    "aria-label": "Social Club | Prime Gaming",
                    className: R.primeGamingSocialLogo,
                    src: i(4024)
                  }), "gtaPlus" === r && (0, s.jsx)("img", {
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
                    children: (0, s.jsx)(o.UnorderedList, {
                      className: "gtaPlus" === r ? R.plus : "",
                      ...d,
                      list: d.list,
                      ...d?.attributes
                    })
                  }), l?.text && (0, s.jsx)("p", {
                    ...l,
                    dangerouslySetInnerHTML: {
                      __html: l.text
                    }
                  })]
                }), (0, s.jsx)(o.ResponsiveGridItem, {
                  className: R.rightSide,
                  children: n?.image ? (0, s.jsx)(o.MultiSourceImage, {
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
          const [d, l] = (0, n.useState)(null), r = (0, _.useGetCdnSource)(a?.backgroundImg?.full_src ?? null), c = (0, _.useGetCdnSource)(a?.layeredImg?.full_src ?? null), m = (0, n.useRef)(null), {
            data: f,
            error: u
          } = (0, H.useQuery)(W.TinaModulesInfo, {
            variables: {
              ids: i
            },
            skip: !i
          });
          return (0, n.useEffect)((() => {
            if (f?.tinaModulesInfo) {
              const e = f.tinaModulesInfo[0],
                {
                  id: a,
                  tina: i
                } = e,
                n = w().clone(i);
              w().set(n, "payload.meta.id", a), l(n)
            }
          }), [f]), f && d ? u ? (0, s.jsx)(o.Wasted, {
            error: u
          }) : (0, s.jsx)("div", {
            className: "a6afed00140449f9db774e916b16318ae327",
            ref: m,
            style: {
              "--background-image": `url(${r})`,
              "--layered-image": `url(${c})`,
              "--slides-per-view-desktop": t
            },
            children: (0, s.jsxs)("div", {
              className: "a6afed00140449f9f455e6d9f8157a14665a",
              children: [c ? (0, s.jsx)("div", {
                className: "a6afed00140449f9e4bebd4c2131ade1d9c1"
              }) : "", (0, s.jsx)("div", {
                className: "a6afed00140449f9c4e52217bf1e1984b197",
                children: (0, s.jsx)(_.TinaParser, {
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
          hiddenMobile: "a6afed00140449f9e96a63eec3122dc2a4f5",
          hiddenLarge: "a6afed00140449f9eed7a702464fd229d881",
          "hidden-sm": "a6afed00140449f9af3842b947053cf2932e",
          "show-sm": "a6afed00140449f9daf236def146d5984332",
          "hidden-md": "a6afed00140449f9ef90d488c8f49b134e8b",
          "show-md": "a6afed00140449f9ed4ec616c6c7c8840514",
          "hidden-lg": "a6afed00140449f9a11425ac101c440709c0",
          "show-lg": "a6afed00140449f9c1b1f6cd526524fc4ce4",
          "hidden-xl": "a6afed00140449f9bc7425f876dbbfafc359",
          "show-xl": "a6afed00140449f9a2a9889ffb089e23dfe1",
          "hidden-xxl": "a6afed00140449f9bab72c30a7c66b393b54",
          "show-xxl": "a6afed00140449f9a052de34831b84cf470a",
          "full-width": "a6afed00140449f9f5937043c4f02ec43709",
          "reverse-mobile": "a6afed00140449f9d00d706245a1594dc25b",
          "center-children": "a6afed00140449f9af5cd07ecb23db699714",
          "std-padding-mobile-desktop-none": "a6afed00140449f9da3c8590d87c28680c7c",
          "std-padding-desktop-mobile-none": "a6afed00140449f9d4451bc3c8bec7c2ebd1",
          "horizontal-line": "a6afed00140449f9dfaf731745ab9b4e53c3",
          gold: "a6afed00140449f9e23f08b60c2c1c99a883",
          heroImage: "a6afed00140449f9bcce02f64dfa789d982b",
          responsiveImage: "a6afed00140449f9a0d8db2d99e68f049876",
          responsiveVideo: "a6afed00140449f9cfe91d32e301b62619c9"
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
            children: [n?.mobile && (0, s.jsx)(o.ResponsiveImg, {
              src: n.mobile,
              ariaLabel: a,
              className: [n?.desktop && U.hiddenLarge, U.responsiveImage].join(" "),
              noRatioPlease: !0
            }), n?.desktop && (0, s.jsx)(o.ResponsiveImg, {
              src: n.desktop,
              ariaLabel: a,
              className: [n?.mobile && U.hiddenMobile, U.responsiveImage].join(" ")
            }), n?.videoPlayerId && (0, s.jsx)("div", {
              className: [U.responsiveVideo, U.trailer].join(" "),
              children: (0, s.jsx)(T(), {
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
            }), t && (0, s.jsx)(o.ImageWithBadge, {
              image: t
            }), d && (0, s.jsx)("div", {
              className: [U.responsiveVideo, U.trailer].join(" "),
              children: (0, s.jsx)(T(), {
                context: "site",
                autoplay: d?.autoplay ?? !1,
                id: d.id,
                hero: !0
              })
            })]
          })
        };
      var Q = i(3032);
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
              className: "a6afed00140449f9a1f51d5da3595dd14065",
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
            descPositionBottom: l,
            fontColor: r = "#fff"
          } = e;
          return (0, s.jsxs)(s.Fragment, {
            children: [l ?? (0, s.jsx)(o.ResponsiveSection, {
              style: {
                backgroundColor: `${d}`,
                "--padding-top-bottom": "1.75rem"
              },
              className: "normalPaddingTopBottom largePaddingSides",
              children: (0, s.jsxs)(o.ResponsiveSection, {
                className: "maxDescArea",
                style: {
                  "--desc-h3-margin-bottom": "var(--h-rem-size)"
                },
                children: [(0, s.jsx)("h3", {
                  style: {
                    "--color-span": `${r}`
                  },
                  children: a
                }), (0, s.jsx)("p", {
                  children: i
                })]
              })
            }), (0, s.jsxs)(o.ResponsiveSection, {
              className: [l ?? "spacing"].join(" "),
              children: [(0, s.jsx)(o.ResponsiveImg, {
                className: "hiddenMobile",
                src: n
              }), (0, s.jsx)(o.ResponsiveImg, {
                className: "hiddenLarge",
                src: t
              })]
            }), l ? (0, s.jsx)(o.ResponsiveSection, {
              style: {
                backgroundColor: `${d}`,
                "--padding-top-bottom": "1.75rem"
              },
              className: "normalPaddingTopBottom largePaddingSides spacing",
              children: (0, s.jsxs)(o.ResponsiveSection, {
                className: "maxDescArea",
                style: {
                  "--desc-h3-margin-bottom": "var(--h-rem-size)"
                },
                children: [(0, s.jsx)("h3", {
                  style: {
                    "--color-span": `${r}`
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
          l = new Set;
        for (t.forEach((function(e) {
            l.add(e)
          })); l.size > 0;) {
          var r = l;
          l = new Set, r.forEach((function(e) {
            d.has(e) || (d.add(e), (n[e] || new Set).forEach((function(e) {
              l.add(e)
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