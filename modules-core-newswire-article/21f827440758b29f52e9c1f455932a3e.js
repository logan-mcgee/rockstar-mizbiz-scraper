(self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [715], {
    4211: (e, a, i) => {
      "use strict";
      i.r(a), i.d(a, {
        default: () => d
      });
      var s = i(8976),
        r = i(9542),
        t = i(9929);
      const n = {
        title: "rockstargames-modules-core-newswire-articleca3619ec694712f8ef44a0673cc5cd2a",
        main: "rockstargames-modules-core-newswire-articleb604683b1b1cf1316f5cf35ce2fe4b31",
        breadcrumbs: "rockstargames-modules-core-newswire-articled1965b8d8252ea2aaac5bde77b3bcef0"
      };
      var l = i(3705);
      const d = (0, t.withTranslations)((e => {
        let {
          children: a,
          intro: i,
          image: d = {},
          style: c = {},
          t: o,
          className: m = "",
          variant: u = null
        } = e, g = {};
        void 0 !== c.toggleInvertSeparator && (g = {
          "--breadcrumb-separator-filter-invert": c.toggleInvertSeparator ? "invert(0)" : "invert(1)"
        });
        const f = (0, t.useNewswirePost)(),
          b = {},
          k = b?.meta?.title ?? f?.title,
          p = b?.meta?.subtitle ?? f?.subtitle,
          v = p ? (0, l.jsx)("h3", {
            "data-context": "newswire-subtitle",
            children: p
          }) : "",
          h = [{
            text: o("Newswire"),
            to: "/newswire"
          }],
          {
            src: w
          } = (0, r.useImageParser)(d),
          x = (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)("time", {
              dateTime: f.created,
              children: f.created_formatted
            }), i ? (0, l.jsx)(s.DescriptionArea, {
              item: i
            }) : "", a]
          });
        f?.primary_tags?.length && h.push({
          text: f.primary_tags[0].name,
          to: `/newswire?tag_id=${f.primary_tags[0].id}`
        }), f?.secondary_tags?.length && h.push({
          text: f.secondary_tags[0].name,
          to: `/newswire?tag_id=${f.secondary_tags[0].id}`
        });
        const j = (0, l.jsx)("div", {
          className: n.breadcrumbs,
          children: h.map((e => (0, l.jsx)(s.A, {
            to: e.to,
            children: e.text
          }, e.to)))
        });
        return w?.desktop && (c.background = `url(${w.desktop}) center/cover no-repeat`), (0, l.jsx)("div", {
          className: [m, n.title].join(" "),
          style: {
            ...c,
            ...g
          },
          children: "separated" === u ? (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsxs)("header", {
              "data-context": "title",
              children: [j, (0, l.jsx)("h1", {
                children: k
              })]
            }), (0, l.jsxs)("footer", {
              "data-context": "title",
              children: [v, x]
            })]
          }) : (0, l.jsxs)(l.Fragment, {
            children: [j, (0, l.jsxs)("div", {
              className: n.main,
              children: [(0, l.jsx)("h1", {
                children: k
              }), v]
            }), x]
          })
        })
      }))
    },
    4715: (e, a, i) => {
      "use strict";
      i.r(a), i.d(a, {
        AnchorLink: () => t,
        Discounts: () => w,
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
      var s = i(927),
        r = i(3705);
      const t = e => {
        let {
          children: a,
          hash: i
        } = e;
        const t = (0, s.useRef)(null),
          n = window.location.hash?.replace("#", "") === i ? i : null;
        return (0, s.useEffect)((() => {
          n && setTimeout((() => {
            const e = document.getElementById(n);
            e && e.scrollIntoView()
          }), 1e3)
        }), []), (0, r.jsx)("div", {
          ref: t,
          id: i,
          children: a
        })
      };
      var n = i(420),
        l = i.n(n);
      const d = e => {
        let {
          items: a,
          columns: i = {},
          noCarousel: s = !1,
          noInfiniteScroll: t = !1,
          ...n
        } = e;
        const d = n?.style ?? {};
        return s && (i?.mobile && (d["--mobile-cols"] = i.mobile), i?.desktop && (d["--desktop-cols"] = i.desktop)), (0, r.jsxs)(r.Fragment, {
          children: [n.title && (0, r.jsx)("p", {
            className: "rockstargames-modules-core-newswire-articleaff0b1cbcafd725c58c239e5c027d99c",
            children: n.title
          }), (0, r.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlef21b886c69c9d2c51f97af89d920996b",
            children: [s && (0, r.jsx)(l(), {
              style: {
                ...d,
                "--grid-gap-dynamic": "2rem 0"
              },
              className: "rockstargames-modules-core-newswire-articlea537ee313e960643c300864d36fccce1",
              renderTemplate: "standard",
              items: a,
              ...n
            }), !s && (0, r.jsx)(k, {
              items: a,
              noInfiniteScroll: t,
              perPage: 2,
              perPageMobile: 1
            })]
          })]
        })
      };
      var c = i(8976);
      const o = {
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
        m = e => {
          let {
            to: a,
            children: i
          } = e;
          return a ? (0, r.jsx)("a", {
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
            carouselOnMobile: n,
            columns: l = {
              desktop: 3,
              mobile: 2
            }
          } = e;
          const [d, u] = (0, s.useState)(null), [g, f] = (0, s.useState)(3), b = (0, s.useRef)(null);
          return (0, s.useEffect)((() => {
            const e = window.getComputedStyle(b.current).getPropertyValue("--divisible-desktop"),
              i = () => {
                const a = window.innerWidth;
                f(a <= 767 ? 2 : e)
              };
            if (a?.content.length && a?.content.length >= g) {
              let {
                length: e
              } = a.content;
              const i = [];
              if (e % g != 0) {
                let a = 0;
                do {
                  i.push((0, r.jsx)("div", {
                    className: `${o.gridItem} ${o.extraDiv}`
                  }, "limited-grid-" + a++)), e++
                } while (e % g != 0)
              }
              u(i)
            }
            return window.addEventListener("resize", i), i(), () => window.removeEventListener("resize", i)
          }), [g, b]), (0, r.jsxs)("div", {
            className: `${o.limitedGrid} ${n?o.carouselOnMobile:""}`,
            children: [(0, r.jsxs)("div", {
              ref: b,
              style: {
                "--divisible-desktop": l.desktop,
                "--divisible-mobile": l.mobile
              },
              className: `\n                    ${o.limitedGridContent}\n                    ${2===l.desktop?o.columnsDesktop2:""}\n                    ${3===l.desktop?o.columnsDesktop3:""}\n                    ${l.desktop>=4?o.columnsDesktop4:""}\n                    ${i?o.noTextFit:""}\n                    ${t?o[t]:""}\n                `,
              children: [(0, r.jsx)("div", {
                className: o.thirdLine
              }), a.content.map(((e, a) => (0, r.jsx)("div", {
                className: o.gridItem,
                children: (0, r.jsxs)(m, {
                  to: e?.href ?? e?.to,
                  children: [!i && (0, r.jsx)(c.TextFit, {
                    className: o.gridText,
                    min: 16,
                    max: 1e3,
                    mode: "single",
                    children: e.title
                  }), (0, r.jsx)("div", {
                    className: o.imageArea,
                    children: (0, r.jsx)(c.ImageWithBadge, {
                      image: e.image,
                      ariaLabel: e.ariaLabel,
                      badgeType: "badge2",
                      badge: e.badge
                    })
                  }), i && (0, r.jsx)("p", {
                    children: e.title
                  })]
                })
              }, a))), d]
            }), n && (0, r.jsx)("div", {
              className: o.gridCarousel,
              children: (0, r.jsx)(c.Carousel, {
                children: a.content.map(((e, a) => (0, r.jsxs)("div", {
                  children: [(0, r.jsx)("div", {
                    className: `${o.imageArea} ${o.imageAreaBg}`,
                    children: (0, r.jsx)(c.ImageWithBadge, {
                      className: t ? o[t] : "",
                      image: e.image,
                      ariaLabel: e.ariaLabel,
                      badgeType: "badge2",
                      badge: e.badge
                    })
                  }), e.title && (0, r.jsx)("p", {
                    className: o.carouselDesc,
                    children: (0, r.jsx)(m, {
                      to: e?.href ?? e?.to,
                      children: e.title
                    })
                  })]
                }, a)))
              })
            })]
          })
        },
        g = e => {
          let {
            items: a = []
          } = e;
          if (!a.length) return null;
          let i = 0,
            s = 0;
          return a.map(((e, a) => {
            if (e.limitedList?.content || e.limitedGridList?.content) {
              const i = [];
              return e.limitedList?.content && i.push((0, r.jsx)(k, {
                items: e.limitedList.content,
                noInfiniteScroll: e?.noInfiniteScroll,
                perPage: e?.perPage
              }, e?.key ?? a)), e.limitedGridList?.content && i.push((0, r.jsx)(u, {
                columns: e.limitedGridList.columns,
                items: e.limitedGridList
              }, e?.key ?? a)), s++, (0, r.jsxs)("div", {
                children: [1 === s && (0, r.jsx)("div", {
                  className: "rockstargames-modules-core-newswire-articleec69a1e1d83f2c9b2d71b4afc2e8d41e",
                  children: (0, r.jsx)("div", {
                    className: "rockstargames-modules-core-newswire-articlef28c9e814f58215db0c40753bd85a265"
                  })
                }), i]
              }, a)
            }
            if (e.discountsList?.content || e.discountsGridList?.content) {
              const s = [];
              return e.discountsList?.content && s.push((0, r.jsx)(k, {
                items: e.discountsList.content,
                noInfiniteScroll: e?.noInfiniteScroll,
                perPage: e?.perPage
              }, e?.key ?? a)), e.discountsGridList?.content && s.push((0, r.jsx)(u, {
                noTextFit: !0,
                carouselOnMobile: !0,
                type: e.type ?? e.discountsGridList.type,
                columns: e.discountsGridList.columns,
                items: e.discountsGridList
              }, e?.key ?? a)), e?.list && s.push((0, r.jsx)(c.UnorderedList, {
                ...e
              })), i++, (0, r.jsxs)("div", {
                children: [1 === i && (0, r.jsx)("div", {
                  className: "rockstargames-modules-core-newswire-articlea6b9b7f63ef349c57f3045b559b9a238"
                }), s]
              }, a)
            }
            return null
          }))
        },
        f = {
          discountsCarouselItem: "rockstargames-modules-core-newswire-articleb1db5637574663ac89f33762c188d7eb",
          fontUpdate: "rockstargames-modules-core-newswire-articlea32986414e2f20d413cb21db77e5ddf2",
          discountsCarousel: "rockstargames-modules-core-newswire-articlee049405f569eb7a31b675e4066e535f7",
          singleImage: "rockstargames-modules-core-newswire-articlea34b328fa3d84d357c02b025e41c0352"
        },
        b = e => {
          let {
            wrapper: a,
            children: i,
            length: s
          } = e;
          return s > 1 ? a(i) : i
        },
        k = e => {
          let {
            items: a,
            noInfiniteScroll: i = !1,
            size: t = null,
            perPage: n = null,
            customSlidesPerView: l = null,
            style: d = {}
          } = e;
          const o = (0, s.useRef)(null),
            [m, u] = (0, s.useState)(null),
            [g, k] = (0, s.useState)(t);
          return (0, s.useEffect)((() => {
            !t && n && k(1 === n ? "lg" : "sm"), t || n || (k("lg"), console.error('Error: DiscountsCarousel expects a prop "size" in order to display the correct amount of slides. Defaulting to lg.'))
          }), [t, n]), (0, s.useEffect)((() => {
            if (!o.current) return;
            const e = () => {
              const e = l || window.getComputedStyle(o.current).getPropertyValue("--slides-per-view");
              u(e)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [o, l]), a.length ? (0, r.jsx)(b, {
            length: a.length,
            wrapper: e => (0, r.jsx)("div", {
              "data-size": g,
              ref: o,
              children: (0, r.jsx)(c.Carousel, {
                className: f.discountsCarousel,
                noInfiniteScroll: i,
                style: {
                  ...d,
                  "--per-page": m,
                  "--carousel-column-gap": "1rem"
                },
                children: e
              })
            }),
            children: a.map(((e, i) => (0, r.jsxs)("div", {
              className: [f.discountsCarouselItem, 1 === a.length ? f.singleImage : ""].join(" "),
              children: [(0, r.jsx)(c.ImageWithBadge, {
                ariaLabel: e?.ariaLabel,
                image: e?.image ?? {
                  alt: e?.alt ?? "",
                  desktop: e?.img ?? null,
                  mobile: e?.imgMobile ?? null
                },
                badge: e?.badge ?? e?.image?.badge ?? e.discountTxt,
                splitter: e?.splitter ?? e?.image?.splitter,
                badgeType: "badgeSizeUpdate"
              }), (0, r.jsx)(c.DescriptionArea, {
                className: f.fontUpdate,
                item: e
              })]
            }, e?.key ?? i)))
          }) : (console.error('Error: DiscountsCarousel expects a prop "items" that contains an array of objects.'), null)
        },
        p = e => {
          let {
            items: a = [],
            style: i = {}
          } = e;
          return a.length ? (0, r.jsx)(c.Grid, {
            style: {
              "--background-color": "#000",
              "--grid-gap-dynamic": "var(--grid-gap-static-lg)",
              "--padding-dynamic-tb": "var(--grid-gap-static-lg)",
              "--image-rounding-dynamic": "0",
              ...i
            },
            children: a.map(((e, a) => e?.title_and_description ? (0, r.jsxs)(c.Grid, {
              context: "readable-text",
              style: {
                textAlign: "left",
                "--grid-gap-dynamic": "var(--grid-gap-static-xs)",
                background: "transparent"
              },
              children: [e?.title_and_description.title && (0, r.jsx)("h1", {
                className: "large",
                children: e.title_and_description.title
              }), e?.title_and_description.description && (0, r.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: e.title_and_description.description
                }
              })]
            }, e?.key ?? a) : e?.limitedList?.content ? (0, r.jsx)(k, {
              items: e.limitedList.content,
              noInfiniteScroll: e?.noInfiniteScroll,
              perPage: e?.perPage,
              size: e?.size
            }, e?.key ?? a) : e?.discountsGridList?.content ? (0, r.jsx)(d, {
              noCarousel: !0,
              columns: e.discountsGridList?.columns,
              items: e.discountsGridList.content
            }, e?.key ?? a) : e?.content ? (0, r.jsx)(c.HTMLElement, {
              ...e,
              children: e.content
            }, e?.key ?? a) : e?.list ? (0, r.jsx)(c.UnorderedList, {
              ...e
            }) : void 0))
          }) : null
        },
        v = {
          area: "rockstargames-modules-core-newswire-articlebd369197d34037ca950bc456ae0edbfa",
          btmImg: "rockstargames-modules-core-newswire-articlea96546818d0319df5a2790c88dc1f5ea",
          limitedTopImg: "rockstargames-modules-core-newswire-articlec42389be5e7c869431a648165a5cae18",
          topImg: "rockstargames-modules-core-newswire-articleaffb8cefb29b116795380aa5314d5127"
        },
        h = e => {
          let {
            items: a,
            renderTemplate: i,
            ...s
          } = e;
          switch (i) {
            case "gtav":
            case "gtao":
              return (0, r.jsx)(p, {
                items: a,
                ...s
              });
            case "grid":
              return (0, r.jsx)(d, {
                items: a,
                ...s
              });
            default:
              return (0, r.jsx)(g, {
                items: a
              })
          }
        },
        w = e => {
          let {
            items: a,
            renderTemplate: i,
            style: s,
            ...t
          } = e;
          return (0, r.jsx)("div", {
            className: v.area,
            "data-context": "discounts",
            children: (0, r.jsxs)("div", {
              className: v.discountsContent,
              children: [(0, r.jsx)(h, {
                renderTemplate: i,
                items: a,
                props: t,
                style: s
              }), (0, r.jsx)("div", {
                className: v.btmImg
              })]
            })
          })
        };
      var x = i(9885),
        j = i.n(x);
      const N = {
          donate: "rockstargames-modules-core-newswire-articleff9f3568a504aa9435bb271c905604c6",
          largePaddingSides: "rockstargames-modules-core-newswire-articleeda019a9aff0ac7012c1f9d07452fb57"
        },
        y = e => {
          let {
            text: a
          } = e;
          const {
            sanitize: i
          } = j();
          return (0, r.jsx)("div", {
            className: [N.donate, "normalPaddingTopBottom largePaddingSides"].join(" "),
            children: (0, r.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: i(a)
              }
            })
          })
        };
      var S = i(5370),
        I = i.n(S),
        _ = i(9542),
        L = i(8356),
        P = i.n(L),
        T = i(4224),
        F = i.n(T),
        G = i(4211);
      const D = {
          event: "rockstargames-modules-core-newswire-articledeb35a20cd305c1c3f58adf38c18a13b",
          featured: "rockstargames-modules-core-newswire-articlec9494ef21ed459fabdebc24519c1880c",
          eventInfo: "rockstargames-modules-core-newswire-articlef0f5b255059bdf027309b512d3f6b154",
          large: "rockstargames-modules-core-newswire-articlec21ddd1ba6d193681ca88e9d03509ad4",
          videoWrapper: "rockstargames-modules-core-newswire-articlefa2fc51439d229dae72eeb8818a0c0c5"
        },
        V = e => {
          let {
            images: a
          } = e;
          return a?.length ? 1 === a.length ? (0, r.jsx)(c.ImageWithBadge, {
            ...a[0]
          }) : (0, r.jsx)(c.Carousel, {
            items: a
          }) : null
        },
        C = e => {
          let {
            images: a,
            title: i,
            content: t,
            isFeatured: n = !1,
            className: d = null,
            videoInHeroProps: o,
            hideNewswireTitle: m = !1
          } = e;
          const u = (0, _.useTinaPayload)(),
            g = u?.meta?.prod ?? !1,
            f = (0, _.useTinaComponents)();
          I().set(u, "meta.prod", g);
          let b = o?.gifVideoProps?.hasVideoInHero || !1;
          const k = o?.htmlVideoProps?.id || !1,
            p = !!o?.htmlVideoProps?.hasHtmlVideoInHero && k;
          p && b && (b = !1);
          const v = void 0 === o || !b && !p,
            h = (0, s.useMemo)((() => ({
              ...f,
              HTMLElement: c.HTMLElement,
              ImageWithBadge: c.ImageWithBadge,
              GroupOfItems: l()
            })), [f]);
          return (0, r.jsxs)("div", {
            className: (0, _.classList)(D.event, d),
            children: [b && (0, r.jsx)("div", {
              className: D.videoWrapper,
              children: (0, r.jsx)(P(), {
                hash: {
                  desktop: o?.gifVideoProps?.hash?.desktop,
                  mobile: o?.gifVideoProps?.hash?.mobile
                },
                loop: o?.gifVideoProps?.isLooping
              })
            }), p && k && (0, r.jsx)("div", {
              className: D.videoWrapper,
              children: (0, r.jsx)(F(), {
                autoplay: o?.htmlVideoProps?.autoPlay || !1,
                id: k
              })
            }), v && (0, r.jsx)(V, {
              images: a
            }), n && (0, r.jsx)(G.default, {}), (0, r.jsxs)("div", {
              className: D.eventInfo,
              children: [!n && !m && (0, r.jsx)("h3", {
                className: D.eventTitle,
                children: i
              }), (0, r.jsx)(_.TinaParser, {
                components: h,
                tina: {
                  payload: {
                    content: t,
                    meta: {
                      prod: g
                    }
                  }
                }
              })]
            })]
          })
        },
        $ = e => (0, r.jsx)(C, {
          ...e,
          className: D.featured,
          isFeatured: !0
        }),
        M = {
          clip: "rockstargames-modules-core-newswire-articlee0224b729307b43a17327188777c3c60",
          redTexture: "rockstargames-modules-core-newswire-articlebbcb053265bd42678ed1086e133ee340",
          greyTexture: "rockstargames-modules-core-newswire-articlea58880949ade673f268f021629ed7bb0"
        },
        E = e => {
          let {
            fontFamily: a = "inherit",
            fontBg: i,
            string: s
          } = e;
          return (0, r.jsx)("span", {
            style: {
              "--font-family-clip": a
            },
            className: [M.clip, M[i]].join(" "),
            children: s
          })
        };
      var B = i(3657);
      const R = {
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
            top: t,
            unorderedList: n,
            bottom: l,
            rewards: d = "primeGaming",
            style: o = {}
          } = e;
          const m = (0, B.useLocale)();
          return "primeGaming" === d && ["ru", "kr", "ko_kr", "ru_ru"].includes(m) ? null : (0, r.jsx)("div", {
            className: R.gamingWrapper,
            children: (0, r.jsx)("div", {
              className: `${R.gamingRewards} ${R[d]}`,
              style: o,
              children: (0, r.jsxs)(c.ResponsiveGridBox, {
                style: {
                  "--grid-align-items": "center",
                  "--grid-row-gap": "2rem"
                },
                children: [(0, r.jsxs)(c.ResponsiveGridItem, {
                  children: [a && (0, r.jsx)("h3", {
                    children: a
                  }), "psPlus" === d && (0, r.jsx)("img", {
                    "aria-label": "Playstation Plus Benefit",
                    className: R.primeGamingSocialLogo,
                    src: i(6469)
                  }), "primeGaming" === d && (0, r.jsx)("img", {
                    "aria-label": "Social Club | Prime Gaming",
                    className: R.primeGamingSocialLogo,
                    src: i(4024)
                  }), "gtaPlus" === d && (0, r.jsx)("img", {
                    "aria-label": "GTA Plus",
                    className: R.primeGamingSocialLogo,
                    src: i(1630)
                  }), t?.text && (0, r.jsx)("p", {
                    ...t,
                    dangerouslySetInnerHTML: {
                      __html: t.text
                    }
                  }), n?.list && (0, r.jsx)("div", {
                    className: R.listArea,
                    children: (0, r.jsx)(c.UnorderedList, {
                      className: "gtaPlus" === d ? R.plus : "",
                      ...n,
                      list: n.list,
                      ...n?.attributes
                    })
                  }), l?.text && (0, r.jsx)("p", {
                    ...l,
                    dangerouslySetInnerHTML: {
                      __html: l.text
                    }
                  })]
                }), (0, r.jsx)(c.ResponsiveGridItem, {
                  className: R.rightSide,
                  children: s?.image ? (0, r.jsx)(c.MultiSourceImage, {
                    image: s.image
                  }) : (0, r.jsx)("div", {
                    className: R.psPlusDefaultImg
                  })
                })]
              })
            })
          })
        };
      var z = i(6947),
        H = i(4859),
        W = i(6141);
      const O = e => {
          let {
            backgroundImages: a,
            deckHash: i = "",
            perPage: t = null
          } = e;
          const [n, l] = (0, s.useState)(null), d = (0, _.useGetCdnSource)(a?.backgroundImg?.full_src ?? null), o = (0, _.useGetCdnSource)(a?.layeredImg?.full_src ?? null), m = (0, s.useRef)(null), {
            data: u,
            error: g
          } = (0, H.useQuery)(W.TinaModulesInfo, {
            variables: {
              ids: i
            },
            skip: !i
          });
          return (0, s.useEffect)((() => {
            if (u?.tinaModulesInfo) {
              const e = u.tinaModulesInfo[0],
                {
                  id: a,
                  tina: i
                } = e,
                s = I().clone(i);
              I().set(s, "payload.meta.id", a), l(s)
            }
          }), [u]), u && n ? g ? (0, r.jsx)(c.Wasted, {
            error: g
          }) : (0, r.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articlee274b3eb1b6b53a4a1a15a8f7e45c32b",
            ref: m,
            style: {
              "--background-image": `url(${d})`,
              "--layered-image": `url(${o})`,
              "--slides-per-view-desktop": t
            },
            children: (0, r.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articleb22f3a069f5ae8392b6f0a125b2fcc7c",
              children: [o ? (0, r.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlef24111149ce32640ed3990c565f1f663"
              }) : "", (0, r.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articled816468db56e41fe199319fd7f20b8fd",
                children: (0, r.jsx)(_.TinaParser, {
                  components: {
                    Deck: z.Deck
                  },
                  tina: n
                })
              })]
            })
          }) : null
        },
        U = {
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
        q = e => {
          let {
            alt: a = "",
            className: i = "",
            src: s = {},
            image: t = null,
            video: n = null
          } = e;
          return (0, r.jsxs)("div", {
            className: ((s?.videoPlayerId || s?.gifHash) && U.heroImage, i),
            children: [s?.mobile && (0, r.jsx)(c.ResponsiveImg, {
              src: s.mobile,
              ariaLabel: a,
              className: [s?.desktop && U.hiddenLarge, U.responsiveImage].join(" "),
              noRatioPlease: !0
            }), s?.desktop && (0, r.jsx)(c.ResponsiveImg, {
              src: s.desktop,
              ariaLabel: a,
              className: [s?.mobile && U.hiddenMobile, U.responsiveImage].join(" ")
            }), s?.videoPlayerId && (0, r.jsx)("div", {
              className: [U.responsiveVideo, U.trailer].join(" "),
              children: (0, r.jsx)(F(), {
                context: "site",
                autoplay: !1,
                id: s.videoPlayerId,
                hero: !0
              })
            }), s?.gifHash && (0, r.jsx)("div", {
              className: U.responsiveVideo,
              children: (0, r.jsx)(P(), {
                hash: [{
                  desktop: s?.gifHash?.desktop
                }, {
                  mobile: s?.gifHash?.mobile
                }]
              })
            }), t && (0, r.jsx)(c.ImageWithBadge, {
              image: t
            }), n && (0, r.jsx)("div", {
              className: [U.responsiveVideo, U.trailer].join(" "),
              children: (0, r.jsx)(F(), {
                context: "site",
                autoplay: n?.autoplay ?? !1,
                id: n.id,
                hero: !0
              })
            })]
          })
        };
      var Q = i(1188);
      const J = e => {
          let {
            children: a,
            className: i = "",
            style: t,
            game: n
          } = e;
          return (0, s.useEffect)((() => {
            document.fonts.ready.then((() => {
              Q.balanceText()
            }))
          }), [a]), (0, r.jsx)("div", {
            className: ["newswireFull", n, i].join(" "),
            style: t,
            "data-game": n,
            children: a
          })
        },
        K = e => {
          let {
            pct: a,
            bgColor: i,
            primaryColor: s
          } = e;
          return (0, r.jsx)("div", {
            style: {
              position: "relative",
              width: "100%",
              height: "20px",
              backgroundColor: i
            },
            children: (0, r.jsx)("div", {
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
        X = e => {
          let {
            title: a,
            desc: i,
            img: s,
            imgMobile: t,
            bgColor: n,
            descPositionBottom: l,
            fontColor: d = "#fff"
          } = e;
          return (0, r.jsxs)(r.Fragment, {
            children: [l ?? (0, r.jsx)(c.ResponsiveSection, {
              style: {
                backgroundColor: `${n}`,
                "--padding-top-bottom": "1.75rem"
              },
              className: "normalPaddingTopBottom largePaddingSides",
              children: (0, r.jsxs)(c.ResponsiveSection, {
                className: "maxDescArea",
                style: {
                  "--desc-h3-margin-bottom": "var(--h-rem-size)"
                },
                children: [(0, r.jsx)("h3", {
                  style: {
                    "--color-span": `${d}`
                  },
                  children: a
                }), (0, r.jsx)("p", {
                  children: i
                })]
              })
            }), (0, r.jsxs)(c.ResponsiveSection, {
              className: [l ?? "spacing"].join(" "),
              children: [(0, r.jsx)(c.ResponsiveImg, {
                className: "hiddenMobile",
                src: s
              }), (0, r.jsx)(c.ResponsiveImg, {
                className: "hiddenLarge",
                src: t
              })]
            }), l ? (0, r.jsx)(c.ResponsiveSection, {
              style: {
                backgroundColor: `${n}`,
                "--padding-top-bottom": "1.75rem"
              },
              className: "normalPaddingTopBottom largePaddingSides spacing",
              children: (0, r.jsxs)(c.ResponsiveSection, {
                className: "maxDescArea",
                style: {
                  "--desc-h3-margin-bottom": "var(--h-rem-size)"
                },
                children: [(0, r.jsx)("h3", {
                  style: {
                    "--color-span": `${d}`
                  },
                  children: a
                }), (0, r.jsx)("p", {
                  children: i
                })]
              })
            }) : null]
          })
        }
    },
    6141: e => {
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
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
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
      var s = {};

      function r(e, a) {
        for (var i = 0; i < e.definitions.length; i++) {
          var s = e.definitions[i];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          i(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesInfo = function(e, a) {
        var i = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var t = s[a] || new Set,
          n = new Set,
          l = new Set;
        for (t.forEach((function(e) {
            l.add(e)
          })); l.size > 0;) {
          var d = l;
          l = new Set, d.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              l.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = r(e, a);
          s && i.definitions.push(s)
        })), i
      }(a, "TinaModulesInfo")
    },
    1630: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7563ed0414306d18d4f8401effcab31a.svg"
    },
    6469: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fd3b8222b81c51f8a6ae266c805c98a6.png"
    },
    4024: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f002a20c79ea2264ca52456194ef5b48.svg"
    }
  }
]);