(self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [413], {
    1951: (e, i, a) => {
      "use strict";
      a.r(i), a.d(i, {
        default: () => r
      });
      var n = a(8976),
        s = a(9542),
        t = a(9929);
      const d = {
        title: "_8961b235c4d9e842adb8c90b39b6855c758d",
        main: "_8961b235c4d9e842b71b10432f44c16d125f",
        breadcrumbs: "_8961b235c4d9e842c2bf1c67c354c461aa89"
      };
      var l = a(9706);
      const r = (0, t.withTranslations)((e => {
        let {
          children: i,
          intro: a,
          image: r = {},
          style: c = {},
          t: o,
          className: m = "",
          variant: u = null
        } = e, b = {};
        void 0 !== c.toggleInvertSeparator && (b = {
          "--breadcrumb-separator-filter-invert": c.toggleInvertSeparator ? "invert(0)" : "invert(1)"
        });
        const g = (0, t.useNewswirePost)(),
          p = {},
          f = p?.meta?.title ?? g?.title,
          v = p?.meta?.subtitle ?? g?.subtitle,
          h = v ? (0, l.jsx)("h3", {
            "data-context": "newswire-subtitle",
            children: v
          }) : "",
          k = [{
            text: o("Newswire"),
            to: "/newswire"
          }],
          {
            src: x
          } = (0, s.useImageParser)(r),
          _ = (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)("time", {
              dateTime: g.created,
              children: g.created_formatted
            }), a ? (0, l.jsx)(n.DescriptionArea, {
              item: a
            }) : "", i]
          });
        g?.primary_tags?.length && k.push({
          text: g.primary_tags[0].name,
          to: `/newswire?tag_id=${g.primary_tags[0].id}`
        }), g?.secondary_tags?.length && k.push({
          text: g.secondary_tags[0].name,
          to: `/newswire?tag_id=${g.secondary_tags[0].id}`
        });
        const j = (0, l.jsx)("div", {
          className: d.breadcrumbs,
          children: k.map((e => (0, l.jsx)(n.A, {
            to: e.to,
            children: e.text
          }, e.to)))
        });
        return x?.desktop && (c.background = `url(${x.desktop}) center/cover no-repeat`), (0, l.jsx)("div", {
          className: [m, d.title].join(" "),
          style: {
            ...c,
            ...b
          },
          children: "separated" === u ? (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsxs)("header", {
              "data-context": "title",
              children: [j, (0, l.jsx)("h1", {
                children: f
              })]
            }), (0, l.jsxs)("footer", {
              "data-context": "title",
              children: [h, _]
            })]
          }) : (0, l.jsxs)(l.Fragment, {
            children: [j, (0, l.jsxs)("div", {
              className: d.main,
              children: [(0, l.jsx)("h1", {
                children: f
              }), h]
            }), _]
          })
        })
      }))
    },
    1413: (e, i, a) => {
      "use strict";
      a.r(i), a.d(i, {
        AnchorLink: () => t,
        Discounts: () => x,
        Donate: () => y,
        FontClip: () => T,
        GamingRewards: () => D,
        Gen9List: () => V,
        HeroImage: () => H,
        NewswireFull: () => O,
        NewswireTitle: () => L.default,
        PctBar: () => U,
        Podium: () => q
      });
      var n = a(822),
        s = a(9706);
      const t = e => {
        let {
          children: i,
          hash: a
        } = e;
        const t = (0, n.useRef)(null),
          d = window.location.hash?.replace("#", "") === a ? a : null;
        return (0, n.useEffect)((() => {
          d && setTimeout((() => {
            const e = document.getElementById(d);
            e && e.scrollIntoView()
          }), 1e3)
        }), []), (0, s.jsx)("div", {
          ref: t,
          id: a,
          children: i
        })
      };
      var d = a(420),
        l = a.n(d);
      const r = e => {
        let {
          items: i,
          columns: a = {},
          noCarousel: n = !1,
          noInfiniteScroll: t = !1,
          ...d
        } = e;
        const r = d?.style ?? {};
        return n && (a?.mobile && (r["--mobile-cols"] = a.mobile), a?.desktop && (r["--desktop-cols"] = a.desktop)), (0, s.jsxs)(s.Fragment, {
          children: [d.title && (0, s.jsx)("p", {
            className: "_8961b235c4d9e842cc23ea60d10b10978740",
            children: d.title
          }), (0, s.jsxs)("div", {
            className: "_8961b235c4d9e842c9824c3db07a3f15334b",
            children: [n && (0, s.jsx)(l(), {
              style: {
                ...r,
                "--grid-gap-dynamic": "2rem 0"
              },
              className: "_8961b235c4d9e842b6ef0aec65f96384d4cd",
              renderTemplate: "standard",
              items: i,
              ...d
            }), !n && (0, s.jsx)(f, {
              items: i,
              noInfiniteScroll: t,
              perPage: 2,
              perPageMobile: 1
            })]
          })]
        })
      };
      var c = a(8976);
      const o = {
          limitedGrid: "_8961b235c4d9e842ab9f12604c018853a308",
          gridCarousel: "_8961b235c4d9e842c0608394773250c28a1c",
          limitedGridContent: "_8961b235c4d9e842ee961e47b32d65061386",
          columnsDesktop2: "_8961b235c4d9e842e0672125aba71dce5e07",
          thirdLine: "_8961b235c4d9e842cd50d53d3b617640dabb",
          gridItem: "_8961b235c4d9e842fc1568b77cc287420646",
          columnsDesktop3: "_8961b235c4d9e842a7043faf0a658ff4328a",
          columnsDesktop4: "_8961b235c4d9e842fc538cbda060a473ba1b",
          extraDiv: "_8961b235c4d9e842ee55d82807507d7ffa2d",
          gridText: "_8961b235c4d9e842c49b07718b793fbbf0e1",
          noTextFit: "_8961b235c4d9e842f30240c7088b463a9458",
          coupons: "_8961b235c4d9e842ecf4053f24a1ea762cbb",
          imageArea: "_8961b235c4d9e842ece1738ecb734a0cc174",
          carouselOnMobile: "_8961b235c4d9e842b52aa02f8029431b58ee",
          imageAreaBg: "_8961b235c4d9e842b5915942ffe5f300bc4b",
          carouselDesc: "_8961b235c4d9e842f1b6246a59e1a1757f2a"
        },
        m = e => {
          let {
            to: i,
            children: a
          } = e;
          return i ? (0, s.jsx)("a", {
            href: i,
            target: "_blank",
            rel: "noreferrer",
            children: a
          }) : a
        },
        u = e => {
          let {
            items: i,
            noTextFit: a,
            type: t,
            carouselOnMobile: d,
            columns: l = {
              desktop: 3,
              mobile: 2
            }
          } = e;
          const [r, u] = (0, n.useState)(null), [b, g] = (0, n.useState)(3), p = (0, n.useRef)(null);
          return (0, n.useEffect)((() => {
            const e = window.getComputedStyle(p.current).getPropertyValue("--divisible-desktop"),
              a = () => {
                const i = window.innerWidth;
                g(i <= 767 ? 2 : e)
              };
            if (i?.content.length && i?.content.length >= b) {
              let {
                length: e
              } = i.content;
              const a = [];
              if (e % b != 0) {
                let i = 0;
                do {
                  a.push((0, s.jsx)("div", {
                    className: `${o.gridItem} ${o.extraDiv}`
                  }, "limited-grid-" + i++)), e++
                } while (e % b != 0)
              }
              u(a)
            }
            return window.addEventListener("resize", a), a(), () => window.removeEventListener("resize", a)
          }), [b, p]), (0, s.jsxs)("div", {
            className: `${o.limitedGrid} ${d?o.carouselOnMobile:""}`,
            children: [(0, s.jsxs)("div", {
              ref: p,
              style: {
                "--divisible-desktop": l.desktop,
                "--divisible-mobile": l.mobile
              },
              className: `\n                    ${o.limitedGridContent}\n                    ${2===l.desktop?o.columnsDesktop2:""}\n                    ${3===l.desktop?o.columnsDesktop3:""}\n                    ${l.desktop>=4?o.columnsDesktop4:""}\n                    ${a?o.noTextFit:""}\n                    ${t?o[t]:""}\n                `,
              children: [(0, s.jsx)("div", {
                className: o.thirdLine
              }), i.content.map(((e, i) => (0, s.jsx)("div", {
                className: o.gridItem,
                children: (0, s.jsxs)(m, {
                  to: e?.href ?? e?.to,
                  children: [!a && (0, s.jsx)(c.TextFit, {
                    className: o.gridText,
                    min: 16,
                    max: 1e3,
                    mode: "single",
                    children: e.title
                  }), (0, s.jsx)("div", {
                    className: o.imageArea,
                    children: (0, s.jsx)(c.ImageWithBadge, {
                      image: e.image,
                      ariaLabel: e.ariaLabel,
                      badgeType: "badge2",
                      badge: e.badge
                    })
                  }), a && (0, s.jsx)("p", {
                    children: e.title
                  })]
                })
              }, i))), r]
            }), d && (0, s.jsx)("div", {
              className: o.gridCarousel,
              children: (0, s.jsx)(c.Carousel, {
                children: i.content.map(((e, i) => (0, s.jsxs)("div", {
                  children: [(0, s.jsx)("div", {
                    className: `${o.imageArea} ${o.imageAreaBg}`,
                    children: (0, s.jsx)(c.ImageWithBadge, {
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
                }, i)))
              })
            })]
          })
        },
        b = e => {
          let {
            items: i = []
          } = e;
          if (!i.length) return null;
          let a = 0,
            n = 0;
          return i.map(((e, i) => {
            if (e.limitedList?.content || e.limitedGridList?.content) {
              const a = [];
              return e.limitedList?.content && a.push((0, s.jsx)(f, {
                items: e.limitedList.content,
                noInfiniteScroll: e?.noInfiniteScroll,
                perPage: e?.perPage
              }, e?.key ?? i)), e.limitedGridList?.content && a.push((0, s.jsx)(u, {
                columns: e.limitedGridList.columns,
                items: e.limitedGridList
              }, e?.key ?? i)), n++, (0, s.jsxs)("div", {
                children: [1 === n && (0, s.jsx)("div", {
                  className: "_8961b235c4d9e842c6f2704eec0039dc99fd",
                  children: (0, s.jsx)("div", {
                    className: "_8961b235c4d9e842eb5100dcfafe9290815d"
                  })
                }), a]
              }, i)
            }
            if (e.discountsList?.content || e.discountsGridList?.content) {
              const n = [];
              return e.discountsList?.content && n.push((0, s.jsx)(f, {
                items: e.discountsList.content,
                noInfiniteScroll: e?.noInfiniteScroll,
                perPage: e?.perPage
              }, e?.key ?? i)), e.discountsGridList?.content && n.push((0, s.jsx)(u, {
                noTextFit: !0,
                carouselOnMobile: !0,
                type: e.type ?? e.discountsGridList.type,
                columns: e.discountsGridList.columns,
                items: e.discountsGridList
              }, e?.key ?? i)), e?.list && n.push((0, s.jsx)(c.UnorderedList, {
                ...e
              })), a++, (0, s.jsxs)("div", {
                children: [1 === a && (0, s.jsx)("div", {
                  className: "_8961b235c4d9e842b71bc87fe69e5e8e4ab7"
                }), n]
              }, i)
            }
            return null
          }))
        },
        g = {
          discountsCarouselItem: "_8961b235c4d9e842f9c21e26992205ac01be",
          fontUpdate: "_8961b235c4d9e842f37fa2503116c2fcad05",
          discountsCarousel: "_8961b235c4d9e842b420f85959d96ba8f2f5",
          singleImage: "_8961b235c4d9e842fce6b1a83c6b2a049943"
        },
        p = e => {
          let {
            wrapper: i,
            children: a,
            length: n
          } = e;
          return n > 1 ? i(a) : a
        },
        f = e => {
          let {
            items: i,
            noInfiniteScroll: a = !1,
            size: t = null,
            perPage: d = null,
            customSlidesPerView: l = null,
            style: r = {}
          } = e;
          const o = (0, n.useRef)(null),
            [m, u] = (0, n.useState)(null),
            [b, f] = (0, n.useState)(t);
          return (0, n.useEffect)((() => {
            !t && d && f(1 === d ? "lg" : "sm"), t || d || (f("lg"), console.error('Error: DiscountsCarousel expects a prop "size" in order to display the correct amount of slides. Defaulting to lg.'))
          }), [t, d]), (0, n.useEffect)((() => {
            if (!o.current) return;
            const e = () => {
              const e = l || window.getComputedStyle(o.current).getPropertyValue("--slides-per-view");
              u(e)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [o, l]), i.length ? (0, s.jsx)(p, {
            length: i.length,
            wrapper: e => (0, s.jsx)("div", {
              "data-size": b,
              ref: o,
              children: (0, s.jsx)(c.Carousel, {
                className: g.discountsCarousel,
                noInfiniteScroll: a,
                style: {
                  ...r,
                  "--per-page": m,
                  "--carousel-column-gap": "1rem"
                },
                children: e
              })
            }),
            children: i.map(((e, a) => (0, s.jsxs)("div", {
              className: [g.discountsCarouselItem, 1 === i.length ? g.singleImage : ""].join(" "),
              children: [(0, s.jsx)(c.ImageWithBadge, {
                ariaLabel: e?.ariaLabel,
                image: e?.image ?? {
                  alt: e?.alt ?? "",
                  desktop: e?.img ?? null,
                  mobile: e?.imgMobile ?? null
                },
                badge: e?.badge ?? e?.image?.badge ?? e.discountTxt,
                splitter: e?.splitter ?? e?.image?.splitter,
                badgeType: "badgeSizeUpdate"
              }), (0, s.jsx)(c.DescriptionArea, {
                className: g.fontUpdate,
                item: e
              })]
            }, e?.key ?? a)))
          }) : (console.error('Error: DiscountsCarousel expects a prop "items" that contains an array of objects.'), null)
        },
        v = e => {
          let {
            items: i = [],
            style: a = {}
          } = e;
          return i.length ? (0, s.jsx)(c.Grid, {
            style: {
              "--background-color": "#000",
              "--grid-gap-dynamic": "var(--grid-gap-static-lg)",
              "--padding-dynamic-tb": "var(--grid-gap-static-lg)",
              "--image-rounding-dynamic": "0",
              ...a
            },
            children: i.map(((e, i) => e?.title_and_description ? (0, s.jsxs)(c.Grid, {
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
            }, e?.key ?? i) : e?.limitedList?.content ? (0, s.jsx)(f, {
              items: e.limitedList.content,
              noInfiniteScroll: e?.noInfiniteScroll,
              perPage: e?.perPage,
              size: e?.size
            }, e?.key ?? i) : e?.discountsGridList?.content ? (0, s.jsx)(r, {
              noCarousel: !0,
              columns: e.discountsGridList?.columns,
              items: e.discountsGridList.content
            }, e?.key ?? i) : e?.content ? (0, s.jsx)(c.HTMLElement, {
              ...e,
              children: e.content
            }, e?.key ?? i) : e?.list ? (0, s.jsx)(c.UnorderedList, {
              ...e
            }) : void 0))
          }) : null
        },
        h = {
          area: "_8961b235c4d9e842aef21ffeff79dc62ba24",
          btmImg: "_8961b235c4d9e842a1c51a7aa9369eaf079c",
          limitedTopImg: "_8961b235c4d9e842fa1c3afa7e5f8f6902a7",
          topImg: "_8961b235c4d9e842f34e40ec1e46045b6556"
        },
        k = e => {
          let {
            items: i,
            renderTemplate: a,
            ...n
          } = e;
          switch (a) {
            case "gtav":
            case "gtao":
              return (0, s.jsx)(v, {
                items: i,
                ...n
              });
            case "grid":
              return (0, s.jsx)(r, {
                items: i,
                ...n
              });
            default:
              return (0, s.jsx)(b, {
                items: i
              })
          }
        },
        x = e => {
          let {
            items: i,
            renderTemplate: a,
            style: n,
            ...t
          } = e;
          return (0, s.jsx)("div", {
            className: h.area,
            "data-context": "discounts",
            children: (0, s.jsxs)("div", {
              className: h.discountsContent,
              children: [(0, s.jsx)(k, {
                renderTemplate: a,
                items: i,
                props: t,
                style: n
              }), (0, s.jsx)("div", {
                className: h.btmImg
              })]
            })
          })
        };
      var _ = a(3046),
        j = a.n(_);
      const N = {
          donate: "_8961b235c4d9e842eb9e02d18c2e7b2b52b5",
          largePaddingSides: "_8961b235c4d9e842fa870f1909d3ea0301ec"
        },
        y = e => {
          let {
            text: i
          } = e;
          const {
            sanitize: a
          } = j();
          return (0, s.jsx)("div", {
            className: [N.donate, "normalPaddingTopBottom largePaddingSides"].join(" "),
            children: (0, s.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: a(i)
              }
            })
          })
        };
      var S = a(948),
        w = a.n(S),
        I = a(9542),
        L = a(1951);
      const F = {
          clip: "_8961b235c4d9e842c690130b61bb7ff08523",
          redTexture: "_8961b235c4d9e842ca901535ed8040e1c467",
          greyTexture: "_8961b235c4d9e842e7678c54af2658902efe"
        },
        T = e => {
          let {
            fontFamily: i = "inherit",
            fontBg: a,
            string: n
          } = e;
          return (0, s.jsx)("span", {
            style: {
              "--font-family-clip": i
            },
            className: [F.clip, F[a]].join(" "),
            children: n
          })
        };
      var P = a(3657);
      const G = {
          gamingWrapper: "_8961b235c4d9e842dac29c965cc5e1c26e56",
          gamingRewards: "_8961b235c4d9e842bfcd25af2b432261c26b",
          psPlus: "_8961b235c4d9e842ee6e703409860b14015d",
          rightSide: "_8961b235c4d9e842b531aec805fdbc421fb0",
          primeGamingSocialLogo: "_8961b235c4d9e842b9bff8272ca0f1235eec",
          gtaPlus: "_8961b235c4d9e842b4538e93d172276607d0",
          plus: "_8961b235c4d9e842aa03d239a9b0983fb5bb",
          listArea: "_8961b235c4d9e842a9e798941ccde7b0c567",
          psPlusDefaultImg: "_8961b235c4d9e842bd25cae14a3ba24b11cf"
        },
        D = e => {
          let {
            headline: i,
            plainImage: n,
            top: t,
            unorderedList: d,
            bottom: l,
            rewards: r = "primeGaming",
            style: o = {}
          } = e;
          const m = (0, P.useLocale)();
          return "primeGaming" === r && ["ru", "kr", "ko_kr", "ru_ru"].includes(m) ? null : (0, s.jsx)("div", {
            className: G.gamingWrapper,
            children: (0, s.jsx)("div", {
              className: `${G.gamingRewards} ${G[r]}`,
              style: o,
              children: (0, s.jsxs)(c.ResponsiveGridBox, {
                style: {
                  "--grid-align-items": "center",
                  "--grid-row-gap": "2rem"
                },
                children: [(0, s.jsxs)(c.ResponsiveGridItem, {
                  children: [i && (0, s.jsx)("h3", {
                    children: i
                  }), "psPlus" === r && (0, s.jsx)("img", {
                    "aria-label": "Playstation Plus Benefit",
                    className: G.primeGamingSocialLogo,
                    src: a(6469)
                  }), "primeGaming" === r && (0, s.jsx)("img", {
                    "aria-label": "Social Club | Prime Gaming",
                    className: G.primeGamingSocialLogo,
                    src: a(4024)
                  }), "gtaPlus" === r && (0, s.jsx)("img", {
                    "aria-label": "GTA Plus",
                    className: G.primeGamingSocialLogo,
                    src: a(1630)
                  }), t?.text && (0, s.jsx)("p", {
                    ...t,
                    dangerouslySetInnerHTML: {
                      __html: t.text
                    }
                  }), d?.list && (0, s.jsx)("div", {
                    className: G.listArea,
                    children: (0, s.jsx)(c.UnorderedList, {
                      className: "gtaPlus" === r ? G.plus : "",
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
                }), (0, s.jsx)(c.ResponsiveGridItem, {
                  className: G.rightSide,
                  children: n?.image ? (0, s.jsx)(c.MultiSourceImage, {
                    image: n.image
                  }) : (0, s.jsx)("div", {
                    className: G.psPlusDefaultImg
                  })
                })]
              })
            })
          })
        };
      var $ = a(6947),
        C = a(4859),
        M = a(3168);
      const V = e => {
        let {
          backgroundImages: i,
          deckHash: a = "",
          perPage: t = null
        } = e;
        const [d, l] = (0, n.useState)(null), r = (0, I.useGetCdnSource)(i?.backgroundImg?.full_src ?? null), o = (0, I.useGetCdnSource)(i?.layeredImg?.full_src ?? null), m = (0, n.useRef)(null), {
          data: u,
          error: b
        } = (0, C.useQuery)(M.TinaModulesInfo, {
          variables: {
            ids: a
          },
          skip: !a
        });
        return (0, n.useEffect)((() => {
          if (u?.tinaModulesInfo) {
            const e = u.tinaModulesInfo[0],
              {
                id: i,
                tina: a
              } = e,
              n = w().clone(a);
            w().set(n, "payload.meta.id", i), l(n)
          }
        }), [u]), u && d ? b ? (0, s.jsx)(c.Wasted, {
          error: b
        }) : (0, s.jsx)("div", {
          className: "_8961b235c4d9e842db774e916b16318ae327",
          ref: m,
          style: {
            "--background-image": `url(${r})`,
            "--layered-image": `url(${o})`,
            "--slides-per-view-desktop": t
          },
          children: (0, s.jsxs)("div", {
            className: "_8961b235c4d9e842f455e6d9f8157a14665a",
            children: [o ? (0, s.jsx)("div", {
              className: "_8961b235c4d9e842e4bebd4c2131ade1d9c1"
            }) : "", (0, s.jsx)("div", {
              className: "_8961b235c4d9e842c4e52217bf1e1984b197",
              children: (0, s.jsx)(I.TinaParser, {
                components: {
                  Deck: $.Deck
                },
                tina: d
              })
            })]
          })
        }) : null
      };
      var E = a(8356),
        B = a.n(E),
        R = a(4224),
        A = a.n(R);
      const z = {
          hiddenMobile: "_8961b235c4d9e842e96a63eec3122dc2a4f5",
          hiddenLarge: "_8961b235c4d9e842eed7a702464fd229d881",
          "hidden-sm": "_8961b235c4d9e842af3842b947053cf2932e",
          "show-sm": "_8961b235c4d9e842daf236def146d5984332",
          "hidden-md": "_8961b235c4d9e842ef90d488c8f49b134e8b",
          "show-md": "_8961b235c4d9e842ed4ec616c6c7c8840514",
          "hidden-lg": "_8961b235c4d9e842a11425ac101c440709c0",
          "show-lg": "_8961b235c4d9e842c1b1f6cd526524fc4ce4",
          "hidden-xl": "_8961b235c4d9e842bc7425f876dbbfafc359",
          "show-xl": "_8961b235c4d9e842a2a9889ffb089e23dfe1",
          "hidden-xxl": "_8961b235c4d9e842bab72c30a7c66b393b54",
          "show-xxl": "_8961b235c4d9e842a052de34831b84cf470a",
          "full-width": "_8961b235c4d9e842f5937043c4f02ec43709",
          "reverse-mobile": "_8961b235c4d9e842d00d706245a1594dc25b",
          "center-children": "_8961b235c4d9e842af5cd07ecb23db699714",
          "std-padding-mobile-desktop-none": "_8961b235c4d9e842da3c8590d87c28680c7c",
          "std-padding-desktop-mobile-none": "_8961b235c4d9e842d4451bc3c8bec7c2ebd1",
          "horizontal-line": "_8961b235c4d9e842dfaf731745ab9b4e53c3",
          gold: "_8961b235c4d9e842e23f08b60c2c1c99a883",
          heroImage: "_8961b235c4d9e842bcce02f64dfa789d982b",
          responsiveImage: "_8961b235c4d9e842a0d8db2d99e68f049876",
          responsiveVideo: "_8961b235c4d9e842cfe91d32e301b62619c9"
        },
        H = e => {
          let {
            alt: i = "",
            className: a = "",
            src: n = {},
            image: t = null,
            video: d = null
          } = e;
          return (0, s.jsxs)("div", {
            className: ((n?.videoPlayerId || n?.gifHash) && z.heroImage, a),
            children: [n?.mobile && (0, s.jsx)(c.ResponsiveImg, {
              src: n.mobile,
              ariaLabel: i,
              className: [n?.desktop && z.hiddenLarge, z.responsiveImage].join(" "),
              noRatioPlease: !0
            }), n?.desktop && (0, s.jsx)(c.ResponsiveImg, {
              src: n.desktop,
              ariaLabel: i,
              className: [n?.mobile && z.hiddenMobile, z.responsiveImage].join(" ")
            }), n?.videoPlayerId && (0, s.jsx)("div", {
              className: [z.responsiveVideo, z.trailer].join(" "),
              children: (0, s.jsx)(A(), {
                context: "site",
                autoplay: !1,
                id: n.videoPlayerId,
                hero: !0
              })
            }), n?.gifHash && (0, s.jsx)("div", {
              className: z.responsiveVideo,
              children: (0, s.jsx)(B(), {
                hash: [{
                  desktop: n?.gifHash?.desktop
                }, {
                  mobile: n?.gifHash?.mobile
                }]
              })
            }), t && (0, s.jsx)(c.ImageWithBadge, {
              image: t
            }), d && (0, s.jsx)("div", {
              className: [z.responsiveVideo, z.trailer].join(" "),
              children: (0, s.jsx)(A(), {
                context: "site",
                autoplay: d?.autoplay ?? !1,
                id: d.id,
                hero: !0
              })
            })]
          })
        };
      var W = a(256);
      const O = e => {
          let {
            children: i,
            className: a = "",
            style: t,
            game: d
          } = e;
          return (0, n.useEffect)((() => {
            document.fonts.ready.then((() => {
              W.balanceText()
            }))
          }), [i]), (0, s.jsx)("div", {
            className: ["newswireFull", d, a].join(" "),
            style: t,
            "data-game": d,
            children: i
          })
        },
        U = e => {
          let {
            pct: i,
            bgColor: a,
            primaryColor: n
          } = e;
          return (0, s.jsx)("div", {
            style: {
              position: "relative",
              width: "100%",
              height: "20px",
              backgroundColor: a
            },
            children: (0, s.jsx)("div", {
              className: "_8961b235c4d9e842a1f51d5da3595dd14065",
              style: {
                backgroundColor: n,
                position: "absolute",
                top: "0",
                left: "0",
                width: `${i}%`,
                height: "100%"
              }
            })
          })
        },
        q = e => {
          let {
            title: i,
            desc: a,
            img: n,
            imgMobile: t,
            bgColor: d,
            descPositionBottom: l,
            fontColor: r = "#fff"
          } = e;
          return (0, s.jsxs)(s.Fragment, {
            children: [l ?? (0, s.jsx)(c.ResponsiveSection, {
              style: {
                backgroundColor: `${d}`,
                "--padding-top-bottom": "1.75rem"
              },
              className: "normalPaddingTopBottom largePaddingSides",
              children: (0, s.jsxs)(c.ResponsiveSection, {
                className: "maxDescArea",
                style: {
                  "--desc-h3-margin-bottom": "var(--h-rem-size)"
                },
                children: [(0, s.jsx)("h3", {
                  style: {
                    "--color-span": `${r}`
                  },
                  children: i
                }), (0, s.jsx)("p", {
                  children: a
                })]
              })
            }), (0, s.jsxs)(c.ResponsiveSection, {
              className: [l ?? "spacing"].join(" "),
              children: [(0, s.jsx)(c.ResponsiveImg, {
                className: "hiddenMobile",
                src: n
              }), (0, s.jsx)(c.ResponsiveImg, {
                className: "hiddenLarge",
                src: t
              })]
            }), l ? (0, s.jsx)(c.ResponsiveSection, {
              style: {
                backgroundColor: `${d}`,
                "--padding-top-bottom": "1.75rem"
              },
              className: "normalPaddingTopBottom largePaddingSides spacing",
              children: (0, s.jsxs)(c.ResponsiveSection, {
                className: "maxDescArea",
                style: {
                  "--desc-h3-margin-bottom": "var(--h-rem-size)"
                },
                children: [(0, s.jsx)("h3", {
                  style: {
                    "--color-span": `${r}`
                  },
                  children: i
                }), (0, s.jsx)("p", {
                  children: a
                })]
              })
            }) : null]
          })
        }
    },
    3168: e => {
      var i = {
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

      function a(e, i) {
        if ("FragmentSpread" === e.kind) i.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && i.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, i)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, i)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, i)
        }))
      }
      i.loc.source = {
        body: "query TinaModulesInfo(\n    $ids: [String]!\n    $locale: String!\n    $sync: Boolean = false\n    $cache: Boolean = false\n) {\n    tinaModulesInfo(ids: $ids, locale: $locale, cache: $cache) {\n        id: id_hash\n        title\n        title_doc\n        type\n        sync_hash\n        to\n        visible\n        children {\n            title\n            id_hash\n            to\n            tina {\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n        tina_uploads {\n            id\n            type\n            directory\n            filename: input_filename\n            hashed_filename: filename\n            previewSrc: preview_src\n            full_src\n            prod\n            created_by\n        }\n        tina {\n            payload\n            variables {\n                keys\n                _translations @include(if: $sync) {\n                    locale\n                    keys\n                }\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function s(e, i) {
        for (var a = 0; a < e.definitions.length; a++) {
          var n = e.definitions[a];
          if (n.name && n.name.value == i) return n
        }
      }
      i.definitions.forEach((function(e) {
        if (e.name) {
          var i = new Set;
          a(e, i), n[e.name.value] = i
        }
      })), e.exports = i, e.exports.TinaModulesInfo = function(e, i) {
        var a = {
          kind: e.kind,
          definitions: [s(e, i)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var t = n[i] || new Set,
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
        return d.forEach((function(i) {
          var n = s(e, i);
          n && a.definitions.push(n)
        })), a
      }(i, "TinaModulesInfo")
    },
    1630: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/c957a3210117cf0e5e6a.svg"
    },
    6469: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/c5b831ad44e0f2012e2f.png"
    },
    4024: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/e73c2fba147b4d905059.svg"
    }
  }
]);