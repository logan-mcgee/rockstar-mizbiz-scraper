(self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [767], {
    47: (e, i, a) => {
      "use strict";
      a.r(i), a.d(i, {
        AnchorLink: () => t,
        Discounts: () => x,
        Donate: () => S,
        FontClip: () => I,
        GamingRewards: () => F,
        Gen9List: () => V,
        HeroImage: () => z,
        NewswireFull: () => O,
        NewswireTitle: () => J,
        PctBar: () => W,
        Podium: () => U
      });
      var n = a(822),
        s = a(5668);
      const t = e => {
        let {
          children: i,
          hash: a
        } = e;
        const t = (0, n.useRef)(null),
          l = window.location.hash?.replace("#", "") === a ? a : null;
        return (0, n.useEffect)((() => {
          l && setTimeout((() => {
            const e = document.getElementById(l);
            e && e.scrollIntoView()
          }), 1e3)
        }), []), (0, s.jsx)("div", {
          ref: t,
          id: a,
          children: i
        })
      };
      var l = a(420),
        d = a.n(l);
      const r = e => {
        let {
          items: i,
          columns: a = {},
          noCarousel: n = !1,
          noInfiniteScroll: t = !1,
          ...l
        } = e;
        const r = l?.style ?? {};
        return n && (a?.mobile && (r["--mobile-cols"] = a.mobile), a?.desktop && (r["--desktop-cols"] = a.desktop)), (0, s.jsxs)(s.Fragment, {
          children: [l.title && (0, s.jsx)("p", {
            className: "cc23ea60d10b10978740",
            children: l.title
          }), (0, s.jsxs)("div", {
            className: "c9824c3db07a3f15334b",
            children: [n && (0, s.jsx)(d(), {
              style: {
                ...r,
                "--grid-gap-dynamic": "2rem 0"
              },
              className: "b6ef0aec65f96384d4cd",
              renderTemplate: "standard",
              items: i,
              ...l
            }), !n && (0, s.jsx)(v, {
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
          limitedGrid: "ab9f12604c018853a308",
          gridCarousel: "c0608394773250c28a1c",
          limitedGridContent: "ee961e47b32d65061386",
          columnsDesktop2: "e0672125aba71dce5e07",
          thirdLine: "cd50d53d3b617640dabb",
          gridItem: "fc1568b77cc287420646",
          columnsDesktop3: "a7043faf0a658ff4328a",
          columnsDesktop4: "fc538cbda060a473ba1b",
          extraDiv: "ee55d82807507d7ffa2d",
          gridText: "c49b07718b793fbbf0e1",
          noTextFit: "f30240c7088b463a9458",
          coupons: "ecf4053f24a1ea762cbb",
          imageArea: "ece1738ecb734a0cc174",
          carouselOnMobile: "b52aa02f8029431b58ee",
          imageAreaBg: "b5915942ffe5f300bc4b",
          carouselDesc: "f1b6246a59e1a1757f2a"
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
            carouselOnMobile: l,
            columns: d = {
              desktop: 3,
              mobile: 2
            }
          } = e;
          const [r, u] = (0, n.useState)(null), [g, p] = (0, n.useState)(3), f = (0, n.useRef)(null);
          return (0, n.useEffect)((() => {
            const e = window.getComputedStyle(f.current).getPropertyValue("--divisible-desktop"),
              a = () => {
                const i = window.innerWidth;
                p(i <= 767 ? 2 : e)
              };
            if (i?.content.length && i?.content.length >= g) {
              let {
                length: e
              } = i.content;
              const a = [];
              if (e % g != 0) {
                let i = 0;
                do {
                  a.push((0, s.jsx)("div", {
                    className: `${o.gridItem} ${o.extraDiv}`
                  }, "limited-grid-" + i++)), e++
                } while (e % g != 0)
              }
              u(a)
            }
            return window.addEventListener("resize", a), a(), () => window.removeEventListener("resize", a)
          }), [g, f]), (0, s.jsxs)("div", {
            className: `${o.limitedGrid} ${l?o.carouselOnMobile:""}`,
            children: [(0, s.jsxs)("div", {
              ref: f,
              style: {
                "--divisible-desktop": d.desktop,
                "--divisible-mobile": d.mobile
              },
              className: `\n                    ${o.limitedGridContent}\n                    ${2===d.desktop?o.columnsDesktop2:""}\n                    ${3===d.desktop?o.columnsDesktop3:""}\n                    ${d.desktop>=4?o.columnsDesktop4:""}\n                    ${a?o.noTextFit:""}\n                    ${t?o[t]:""}\n                `,
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
            }), l && (0, s.jsx)("div", {
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
        g = e => {
          let {
            items: i = []
          } = e;
          if (!i.length) return null;
          let a = 0,
            n = 0;
          return i.map(((e, i) => {
            if (e.limitedList?.content || e.limitedGridList?.content) {
              const a = [];
              return e.limitedList?.content && a.push((0, s.jsx)(v, {
                items: e.limitedList.content,
                noInfiniteScroll: e?.noInfiniteScroll,
                perPage: e?.perPage
              }, e?.key ?? i)), e.limitedGridList?.content && a.push((0, s.jsx)(u, {
                columns: e.limitedGridList.columns,
                items: e.limitedGridList
              }, e?.key ?? i)), n++, (0, s.jsxs)("div", {
                children: [1 === n && (0, s.jsx)("div", {
                  className: "c6f2704eec0039dc99fd",
                  children: (0, s.jsx)("div", {
                    className: "eb5100dcfafe9290815d"
                  })
                }), a]
              }, i)
            }
            if (e.discountsList?.content || e.discountsGridList?.content) {
              const n = [];
              return e.discountsList?.content && n.push((0, s.jsx)(v, {
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
                  className: "b71bc87fe69e5e8e4ab7"
                }), n]
              }, i)
            }
            return null
          }))
        },
        p = {
          discountsCarouselItem: "f9c21e26992205ac01be",
          fontUpdate: "f37fa2503116c2fcad05",
          discountsCarousel: "b420f85959d96ba8f2f5",
          singleImage: "fce6b1a83c6b2a049943"
        },
        f = e => {
          let {
            wrapper: i,
            children: a,
            length: n
          } = e;
          return n > 1 ? i(a) : a
        },
        v = e => {
          let {
            items: i,
            noInfiniteScroll: a = !1,
            size: t = null,
            perPage: l = null,
            customSlidesPerView: d = null,
            style: r = {}
          } = e;
          const o = (0, n.useRef)(null),
            [m, u] = (0, n.useState)(null),
            [g, v] = (0, n.useState)(t);
          return (0, n.useEffect)((() => {
            !t && l && v(1 === l ? "lg" : "sm"), t || l || (v("lg"), console.error('Error: DiscountsCarousel expects a prop "size" in order to display the correct amount of slides. Defaulting to lg.'))
          }), [t, l]), (0, n.useEffect)((() => {
            if (!o.current) return;
            const e = () => {
              const e = d || window.getComputedStyle(o.current).getPropertyValue("--slides-per-view");
              u(e)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [o, d]), i.length ? (0, s.jsx)(f, {
            length: i.length,
            wrapper: e => (0, s.jsx)("div", {
              "data-size": g,
              ref: o,
              children: (0, s.jsx)(c.Carousel, {
                className: p.discountsCarousel,
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
              className: [p.discountsCarouselItem, 1 === i.length ? p.singleImage : ""].join(" "),
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
                className: p.fontUpdate,
                item: e
              })]
            }, e?.key ?? a)))
          }) : (console.error('Error: DiscountsCarousel expects a prop "items" that contains an array of objects.'), null)
        },
        b = e => {
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
            }, e?.key ?? i) : e?.limitedList?.content ? (0, s.jsx)(v, {
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
          area: "aef21ffeff79dc62ba24",
          btmImg: "a1c51a7aa9369eaf079c",
          limitedTopImg: "fa1c3afa7e5f8f6902a7",
          topImg: "f34e40ec1e46045b6556"
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
              return (0, s.jsx)(b, {
                items: i,
                ...n
              });
            case "grid":
              return (0, s.jsx)(r, {
                items: i,
                ...n
              });
            default:
              return (0, s.jsx)(g, {
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
      var j = a(8866),
        N = a.n(j);
      const y = {
          donate: "eb9e02d18c2e7b2b52b5",
          largePaddingSides: "fa870f1909d3ea0301ec"
        },
        S = e => {
          let {
            text: i
          } = e;
          const {
            sanitize: a
          } = N();
          return (0, s.jsx)("div", {
            className: [y.donate, "normalPaddingTopBottom largePaddingSides"].join(" "),
            children: (0, s.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: a(i)
              }
            })
          })
        },
        w = {
          clip: "c690130b61bb7ff08523",
          redTexture: "ca901535ed8040e1c467",
          greyTexture: "e7678c54af2658902efe"
        },
        I = e => {
          let {
            fontFamily: i = "inherit",
            fontBg: a,
            string: n
          } = e;
          return (0, s.jsx)("span", {
            style: {
              "--font-family-clip": i
            },
            className: [w.clip, w[a]].join(" "),
            children: n
          })
        };
      var _ = a(3657);
      const L = {
          gamingWrapper: "dac29c965cc5e1c26e56",
          gamingRewards: "bfcd25af2b432261c26b",
          psPlus: "ee6e703409860b14015d",
          rightSide: "b531aec805fdbc421fb0",
          primeGamingSocialLogo: "b9bff8272ca0f1235eec",
          gtaPlus: "b4538e93d172276607d0",
          plus: "aa03d239a9b0983fb5bb",
          listArea: "a9e798941ccde7b0c567",
          psPlusDefaultImg: "bd25cae14a3ba24b11cf"
        },
        F = e => {
          let {
            headline: i,
            plainImage: n,
            top: t,
            unorderedList: l,
            bottom: d,
            rewards: r = "primeGaming",
            style: o = {}
          } = e;
          const m = (0, _.useLocale)();
          return "primeGaming" === r && ["ru", "kr", "ko_kr", "ru_ru"].includes(m) ? null : (0, s.jsx)("div", {
            className: L.gamingWrapper,
            children: (0, s.jsx)("div", {
              className: `${L.gamingRewards} ${L[r]}`,
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
                    className: L.primeGamingSocialLogo,
                    src: a(6469)
                  }), "primeGaming" === r && (0, s.jsx)("img", {
                    "aria-label": "Social Club | Prime Gaming",
                    className: L.primeGamingSocialLogo,
                    src: a(4024)
                  }), "gtaPlus" === r && (0, s.jsx)("img", {
                    "aria-label": "GTA Plus",
                    className: L.primeGamingSocialLogo,
                    src: a(1630)
                  }), t?.text && (0, s.jsx)("p", {
                    ...t,
                    dangerouslySetInnerHTML: {
                      __html: t.text
                    }
                  }), l?.list && (0, s.jsx)("div", {
                    className: L.listArea,
                    children: (0, s.jsx)(c.UnorderedList, {
                      className: "gtaPlus" === r ? L.plus : "",
                      ...l,
                      list: l.list,
                      ...l?.attributes
                    })
                  }), d?.text && (0, s.jsx)("p", {
                    ...d,
                    dangerouslySetInnerHTML: {
                      __html: d.text
                    }
                  })]
                }), (0, s.jsx)(c.ResponsiveGridItem, {
                  className: L.rightSide,
                  children: n?.image ? (0, s.jsx)(c.MultiSourceImage, {
                    image: n.image
                  }) : (0, s.jsx)("div", {
                    className: L.psPlusDefaultImg
                  })
                })]
              })
            })
          })
        };
      var T = a(735),
        P = a.n(T),
        G = a(6947),
        D = a(9542),
        C = a(4859),
        $ = a(3634);
      const V = e => {
        let {
          backgroundImages: i,
          deckHash: a = "",
          perPage: t = null
        } = e;
        const [l, d] = (0, n.useState)(null), r = (0, D.useGetCdnSource)(i?.backgroundImg?.full_src ?? null), o = (0, D.useGetCdnSource)(i?.layeredImg?.full_src ?? null), m = (0, n.useRef)(null), {
          data: u,
          error: g
        } = (0, C.useQuery)($.TinaModulesInfo, {
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
              n = P().clone(a);
            P().set(n, "payload.meta.id", i), d(n)
          }
        }), [u]), u && l ? g ? (0, s.jsx)(c.Wasted, {
          error: g
        }) : (0, s.jsx)("div", {
          className: "db774e916b16318ae327",
          ref: m,
          style: {
            "--background-image": `url(${r})`,
            "--layered-image": `url(${o})`,
            "--slides-per-view-desktop": t
          },
          children: (0, s.jsxs)("div", {
            className: "f455e6d9f8157a14665a",
            children: [o ? (0, s.jsx)("div", {
              className: "e4bebd4c2131ade1d9c1"
            }) : "", (0, s.jsx)("div", {
              className: "c4e52217bf1e1984b197",
              children: (0, s.jsx)(D.TinaParser, {
                components: {
                  Deck: G.Deck
                },
                tina: l
              })
            })]
          })
        }) : null
      };
      var M = a(8356),
        E = a.n(M),
        B = a(4224),
        R = a.n(B);
      const A = {
          hiddenMobile: "e96a63eec3122dc2a4f5",
          hiddenLarge: "eed7a702464fd229d881",
          "hidden-sm": "af3842b947053cf2932e",
          "show-sm": "daf236def146d5984332",
          "hidden-md": "ef90d488c8f49b134e8b",
          "show-md": "ed4ec616c6c7c8840514",
          "hidden-lg": "a11425ac101c440709c0",
          "show-lg": "c1b1f6cd526524fc4ce4",
          "hidden-xl": "bc7425f876dbbfafc359",
          "show-xl": "a2a9889ffb089e23dfe1",
          "hidden-xxl": "bab72c30a7c66b393b54",
          "show-xxl": "a052de34831b84cf470a",
          "full-width": "f5937043c4f02ec43709",
          "reverse-mobile": "d00d706245a1594dc25b",
          "center-children": "af5cd07ecb23db699714",
          "std-padding-mobile-desktop-none": "da3c8590d87c28680c7c",
          "std-padding-desktop-mobile-none": "d4451bc3c8bec7c2ebd1",
          "horizontal-line": "dfaf731745ab9b4e53c3",
          gold: "e23f08b60c2c1c99a883",
          heroImage: "bcce02f64dfa789d982b",
          responsiveImage: "a0d8db2d99e68f049876",
          responsiveVideo: "cfe91d32e301b62619c9"
        },
        z = e => {
          let {
            alt: i = "",
            className: a = "",
            src: n = {},
            image: t = null,
            video: l = null
          } = e;
          return (0, s.jsxs)("div", {
            className: ((n?.videoPlayerId || n?.gifHash) && A.heroImage, a),
            children: [n?.mobile && (0, s.jsx)(c.ResponsiveImg, {
              src: n.mobile,
              ariaLabel: i,
              className: [n?.desktop && A.hiddenLarge, A.responsiveImage].join(" "),
              noRatioPlease: !0
            }), n?.desktop && (0, s.jsx)(c.ResponsiveImg, {
              src: n.desktop,
              ariaLabel: i,
              className: [n?.mobile && A.hiddenMobile, A.responsiveImage].join(" ")
            }), n?.videoPlayerId && (0, s.jsx)("div", {
              className: [A.responsiveVideo, A.trailer].join(" "),
              children: (0, s.jsx)(R(), {
                context: "site",
                autoplay: !1,
                id: n.videoPlayerId,
                hero: !0
              })
            }), n?.gifHash && (0, s.jsx)("div", {
              className: A.responsiveVideo,
              children: (0, s.jsx)(E(), {
                hash: [{
                  desktop: n?.gifHash?.desktop
                }, {
                  mobile: n?.gifHash?.mobile
                }]
              })
            }), t && (0, s.jsx)(c.ImageWithBadge, {
              image: t
            }), l && (0, s.jsx)("div", {
              className: [A.responsiveVideo, A.trailer].join(" "),
              children: (0, s.jsx)(R(), {
                context: "site",
                autoplay: l?.autoplay ?? !1,
                id: l.id,
                hero: !0
              })
            })]
          })
        };
      var H = a(4768);
      const O = e => {
          let {
            children: i,
            className: a = "",
            style: t,
            game: l
          } = e;
          return (0, n.useEffect)((() => {
            document.fonts.ready.then((() => {
              H.balanceText()
            }))
          }), [i]), (0, s.jsx)("div", {
            className: ["newswireFull", l, a].join(" "),
            style: t,
            "data-game": l,
            children: i
          })
        },
        W = e => {
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
              className: "a1f51d5da3595dd14065",
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
        U = e => {
          let {
            title: i,
            desc: a,
            img: n,
            imgMobile: t,
            bgColor: l,
            descPositionBottom: d,
            fontColor: r = "#fff"
          } = e;
          return (0, s.jsxs)(s.Fragment, {
            children: [d ?? (0, s.jsx)(c.ResponsiveSection, {
              style: {
                backgroundColor: `${l}`,
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
              className: [d ?? "spacing"].join(" "),
              children: [(0, s.jsx)(c.ResponsiveImg, {
                className: "hiddenMobile",
                src: n
              }), (0, s.jsx)(c.ResponsiveImg, {
                className: "hiddenLarge",
                src: t
              })]
            }), d ? (0, s.jsx)(c.ResponsiveSection, {
              style: {
                backgroundColor: `${l}`,
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
        };
      var q = a(9929);
      const Q = {
          title: "adb8c90b39b6855c758d",
          main: "b71b10432f44c16d125f",
          breadcrumbs: "c2bf1c67c354c461aa89"
        },
        J = (0, q.withTranslations)((e => {
          let {
            children: i,
            intro: a,
            image: n = {},
            style: t = {},
            t: l,
            className: d = "",
            variant: r = null
          } = e;
          const o = (0, q.useNewswirePost)(),
            m = {},
            u = m?.meta?.title ?? o?.title,
            g = m?.meta?.subtitle ?? o?.subtitle,
            p = g ? (0, s.jsx)("h3", {
              "data-context": "newswire-subtitle",
              children: g
            }) : "",
            f = [{
              text: l("Newswire"),
              to: "/newswire"
            }],
            {
              src: v
            } = (0, D.useImageParser)(n),
            b = (0, s.jsxs)(s.Fragment, {
              children: [(0, s.jsx)("time", {
                dateTime: o.created,
                children: o.created_formatted
              }), a ? (0, s.jsx)(c.DescriptionArea, {
                item: a
              }) : "", i]
            });
          o?.primary_tags?.length && f.push({
            text: o.primary_tags[0].name,
            to: `/newswire?tag_id=${o.primary_tags[0].id}`
          }), o?.secondary_tags?.length && f.push({
            text: o.secondary_tags[0].name,
            to: `/newswire?tag_id=${o.secondary_tags[0].id}`
          });
          const h = (0, s.jsx)("div", {
            className: Q.breadcrumbs,
            children: f.map((e => (0, s.jsx)(c.A, {
              to: e.to,
              children: e.text
            }, e.to)))
          });
          return v?.desktop && (t.background = `url(${v.desktop}) center/cover no-repeat`), (0, s.jsx)("div", {
            className: [d, Q.title].join(" "),
            style: t,
            children: "separated" === r ? (0, s.jsxs)(s.Fragment, {
              children: [(0, s.jsxs)("header", {
                "data-context": "title",
                children: [h, (0, s.jsx)("h1", {
                  children: u
                })]
              }), (0, s.jsxs)("footer", {
                "data-context": "title",
                children: [p, b]
              })]
            }) : (0, s.jsxs)(s.Fragment, {
              children: [h, (0, s.jsxs)("div", {
                className: Q.main,
                children: [(0, s.jsx)("h1", {
                  children: u
                }), p]
              }), b]
            })
          })
        }))
    },
    7767: (e, i, a) => {
      "use strict";
      a.r(i), a.d(i, {
        componentsForTinaParser: () => p
      });
      var n = a(8976),
        s = a(8356),
        t = a.n(s),
        l = a(420),
        d = a.n(l),
        r = a(3750),
        c = a.n(r),
        o = a(4224),
        m = a.n(o),
        u = a(5551),
        g = a.n(u);
      const p = {
        ...n,
        ...a(47),
        ...{
          Gif: t(),
          GroupOfItems: d(),
          SwiperCarousel: c(),
          RockstarVideoPlayer: m(),
          UGCJobSpotlight: g()
        }
      }
    },
    3634: e => {
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
          l = new Set,
          d = new Set;
        for (t.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var r = d;
          d = new Set, r.forEach((function(e) {
            l.has(e) || (l.add(e), (n[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return l.forEach((function(i) {
          var n = s(e, i);
          n && a.definitions.push(n)
        })), a
      }(i, "TinaModulesInfo")
    },
    1630: (e, i, a) => {
      "use strict";
      e.exports = a.p + "img/c957a3210117cf0e5e6a.svg"
    },
    6469: (e, i, a) => {
      "use strict";
      e.exports = a.p + "img/c5b831ad44e0f2012e2f.png"
    },
    4024: (e, i, a) => {
      "use strict";
      e.exports = a.p + "img/8d473777119f38062c5a.svg"
    }
  }
]);