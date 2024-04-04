! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "50caee6d-9bd8-40ec-84e0-7503751abcc2", e._sentryDebugIdIdentifier = "sentry-dbid-50caee6d-9bd8-40ec-84e0-7503751abcc2")
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
  [52, 312, 240], {
    9576: (e, a, s) => {
      "use strict";
      var i = s(1664),
        r = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        l = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function o(e, a, s) {
        var i, t = {},
          o = null,
          c = null;
        for (i in void 0 !== s && (o = "" + s), void 0 !== a.key && (o = "" + a.key), void 0 !== a.ref && (c = a.ref), a) n.call(a, i) && !d.hasOwnProperty(i) && (t[i] = a[i]);
        if (e && e.defaultProps)
          for (i in a = e.defaultProps) void 0 === t[i] && (t[i] = a[i]);
        return {
          $$typeof: r,
          type: e,
          key: o,
          ref: c,
          props: t,
          _owner: l.current
        }
      }
      a.Fragment = t, a.jsx = o, a.jsxs = o
    },
    5240: (e, a, s) => {
      "use strict";
      e.exports = s(9576)
    },
    1312: (e, a, s) => {
      "use strict";
      s.r(a), s.d(a, {
        default: () => d
      });
      var i = s(9860),
        r = s(1740),
        t = s(5792);
      const n = {
        title: "rockstargames-modules-core-newswire-articleca3619ec694712f8ef44a0673cc5cd2a",
        main: "rockstargames-modules-core-newswire-articleb604683b1b1cf1316f5cf35ce2fe4b31",
        breadcrumbs: "rockstargames-modules-core-newswire-articled1965b8d8252ea2aaac5bde77b3bcef0"
      };
      var l = s(5240);
      const d = (0, t.withTranslations)((e => {
        let {
          children: a,
          intro: s,
          image: d = {},
          style: o = {},
          t: c,
          className: m = "",
          variant: u = null
        } = e, g = {};
        void 0 !== o.toggleInvertSeparator && (g = {
          "--breadcrumb-separator-filter-invert": o.toggleInvertSeparator ? "invert(0)" : "invert(1)"
        });
        const f = (0, t.useNewswirePost)(),
          b = {},
          p = b?.meta?.title ?? f?.title,
          k = b?.meta?.subtitle ?? f?.subtitle,
          w = k ? (0, l.jsx)("h3", {
            "data-context": "newswire-subtitle",
            children: k
          }) : "",
          h = [{
            text: c("Newswire"),
            to: "/newswire"
          }],
          {
            src: v
          } = (0, r.useImageParser)(d),
          x = (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)("time", {
              dateTime: f.created,
              children: f.created_formatted
            }), s ? (0, l.jsx)(i.DescriptionArea, {
              item: s
            }) : "", a]
          });
        f?.primary_tags?.length && h.push({
          text: f.primary_tags[0].name,
          to: `/newswire?tag_id=${f.primary_tags[0].id}`
        }), f?.secondary_tags?.length && h.push({
          text: f.secondary_tags[0].name,
          to: `/newswire?tag_id=${f.secondary_tags[0].id}`
        });
        const y = (0, l.jsx)("div", {
          className: n.breadcrumbs,
          children: h.map((e => (0, l.jsx)(i.A, {
            to: e.to,
            children: e.text
          }, e.to)))
        });
        return v?.desktop && (o.background = `url(${v.desktop}) center/cover no-repeat`), (0, l.jsx)("div", {
          className: [m, n.title].join(" "),
          style: {
            ...o,
            ...g
          },
          children: "separated" === u ? (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsxs)("header", {
              "data-context": "title",
              children: [y, (0, l.jsx)("h1", {
                children: p
              })]
            }), (0, l.jsxs)("footer", {
              "data-context": "title",
              children: [w, x]
            })]
          }) : (0, l.jsxs)(l.Fragment, {
            children: [y, (0, l.jsxs)("div", {
              className: n.main,
              children: [(0, l.jsx)("h1", {
                children: p
              }), w]
            }), x]
          })
        })
      }))
    },
    2052: (e, a, s) => {
      "use strict";
      s.r(a), s.d(a, {
        AnchorLink: () => l,
        Discounts: () => y,
        Donate: () => _,
        Engagement: () => r(),
        EventInfo: () => V,
        FeaturedEventInfo: () => $,
        FontClip: () => B,
        GamingRewards: () => H,
        Gen9List: () => q,
        HeroImage: () => Y,
        NewswireFull: () => X,
        NewswireTitle: () => G.default,
        PctBar: () => Z,
        Podium: () => ee
      });
      var i = s(2112),
        r = s.n(i),
        t = s(1664),
        n = s(5240);
      const l = e => {
        let {
          children: a,
          hash: s
        } = e;
        const i = (0, t.useRef)(null),
          r = window.location.hash?.replace("#", "") === s ? s : null;
        return (0, t.useEffect)((() => {
          r && setTimeout((() => {
            const e = document.getElementById(r);
            e && e.scrollIntoView()
          }), 1e3)
        }), []), (0, n.jsx)("div", {
          ref: i,
          id: s,
          children: a
        })
      };
      var d = s(9812),
        o = s.n(d);
      const c = e => {
        let {
          items: a,
          columns: s = {},
          noCarousel: i = !1,
          noInfiniteScroll: r = !1,
          ...t
        } = e;
        const l = t?.style ?? {};
        return i && (s?.mobile && (l["--mobile-cols"] = s.mobile), s?.desktop && (l["--desktop-cols"] = s.desktop)), (0, n.jsxs)(n.Fragment, {
          children: [t.title && (0, n.jsx)("p", {
            className: "rockstargames-modules-core-newswire-articleaff0b1cbcafd725c58c239e5c027d99c",
            children: t.title
          }), (0, n.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlef21b886c69c9d2c51f97af89d920996b",
            children: [i && (0, n.jsx)(o(), {
              style: {
                ...l,
                "--grid-gap-dynamic": "2rem 0"
              },
              className: "rockstargames-modules-core-newswire-articlea537ee313e960643c300864d36fccce1",
              renderTemplate: "standard",
              items: a,
              ...t
            }), !i && (0, n.jsx)(w, {
              items: a,
              noInfiniteScroll: r,
              perPage: 2,
              perPageMobile: 1
            })]
          })]
        })
      };
      var m = s(9860);
      const u = {
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
        g = e => {
          let {
            to: a,
            children: s
          } = e;
          return a ? (0, n.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noreferrer",
            children: s
          }) : s
        },
        f = e => {
          let {
            items: a,
            noTextFit: s,
            type: i,
            carouselOnMobile: r,
            columns: l = {
              desktop: 3,
              mobile: 2
            }
          } = e;
          const [d, o] = (0, t.useState)(null), [c, f] = (0, t.useState)(3), b = (0, t.useRef)(null);
          return (0, t.useEffect)((() => {
            const e = window.getComputedStyle(b.current).getPropertyValue("--divisible-desktop"),
              s = () => {
                const a = window.innerWidth;
                f(a <= 767 ? 2 : e)
              };
            if (a?.content.length && a?.content.length >= c) {
              let {
                length: e
              } = a.content;
              const s = [];
              if (e % c != 0) {
                let a = 0;
                do {
                  s.push((0, n.jsx)("div", {
                    className: `${u.gridItem} ${u.extraDiv}`
                  }, "limited-grid-" + a++)), e++
                } while (e % c != 0)
              }
              o(s)
            }
            return window.addEventListener("resize", s), s(), () => window.removeEventListener("resize", s)
          }), [c, b]), (0, n.jsxs)("div", {
            className: `${u.limitedGrid} ${r?u.carouselOnMobile:""}`,
            children: [(0, n.jsxs)("div", {
              ref: b,
              style: {
                "--divisible-desktop": l.desktop,
                "--divisible-mobile": l.mobile
              },
              className: `\n                    ${u.limitedGridContent}\n                    ${2===l.desktop?u.columnsDesktop2:""}\n                    ${3===l.desktop?u.columnsDesktop3:""}\n                    ${l.desktop>=4?u.columnsDesktop4:""}\n                    ${s?u.noTextFit:""}\n                    ${i?u[i]:""}\n                `,
              children: [(0, n.jsx)("div", {
                className: u.thirdLine
              }), a.content.map(((e, a) => (0, n.jsx)("div", {
                className: u.gridItem,
                children: (0, n.jsxs)(g, {
                  to: e?.href ?? e?.to,
                  children: [!s && (0, n.jsx)(m.TextFit, {
                    className: u.gridText,
                    min: 16,
                    max: 1e3,
                    mode: "single",
                    children: e.title
                  }), (0, n.jsx)("div", {
                    className: u.imageArea,
                    children: (0, n.jsx)(m.ImageWithBadge, {
                      image: e.image,
                      ariaLabel: e.ariaLabel,
                      badgeType: "badge2",
                      badge: e.badge
                    })
                  }), s && (0, n.jsx)("p", {
                    children: e.title
                  })]
                })
              }, a))), d]
            }), r && (0, n.jsx)("div", {
              className: u.gridCarousel,
              children: (0, n.jsx)(m.Carousel, {
                children: a.content.map(((e, a) => (0, n.jsxs)("div", {
                  children: [(0, n.jsx)("div", {
                    className: `${u.imageArea} ${u.imageAreaBg}`,
                    children: (0, n.jsx)(m.ImageWithBadge, {
                      className: i ? u[i] : "",
                      image: e.image,
                      ariaLabel: e.ariaLabel,
                      badgeType: "badge2",
                      badge: e.badge
                    })
                  }), e.title && (0, n.jsx)("p", {
                    className: u.carouselDesc,
                    children: (0, n.jsx)(g, {
                      to: e?.href ?? e?.to,
                      children: e.title
                    })
                  })]
                }, a)))
              })
            })]
          })
        },
        b = e => {
          let {
            items: a = []
          } = e;
          if (!a.length) return null;
          let s = 0,
            i = 0;
          return a.map(((e, a) => {
            if (e.limitedList?.content || e.limitedGridList?.content) {
              const s = [];
              return e.limitedList?.content && s.push((0, n.jsx)(w, {
                items: e.limitedList.content,
                noInfiniteScroll: e?.noInfiniteScroll,
                perPage: e?.perPage
              }, e?.key ?? a)), e.limitedGridList?.content && s.push((0, n.jsx)(f, {
                columns: e.limitedGridList.columns,
                items: e.limitedGridList
              }, e?.key ?? a)), i++, (0, n.jsxs)("div", {
                children: [1 === i && (0, n.jsx)("div", {
                  className: "rockstargames-modules-core-newswire-articleec69a1e1d83f2c9b2d71b4afc2e8d41e",
                  children: (0, n.jsx)("div", {
                    className: "rockstargames-modules-core-newswire-articlef28c9e814f58215db0c40753bd85a265"
                  })
                }), s]
              }, a)
            }
            if (e.discountsList?.content || e.discountsGridList?.content) {
              const i = [];
              return e.discountsList?.content && i.push((0, n.jsx)(w, {
                items: e.discountsList.content,
                noInfiniteScroll: e?.noInfiniteScroll,
                perPage: e?.perPage
              }, e?.key ?? a)), e.discountsGridList?.content && i.push((0, n.jsx)(f, {
                noTextFit: !0,
                carouselOnMobile: !0,
                type: e.type ?? e.discountsGridList.type,
                columns: e.discountsGridList.columns,
                items: e.discountsGridList
              }, e?.key ?? a)), e?.list && i.push((0, n.jsx)(m.UnorderedList, {
                ...e
              })), s++, (0, n.jsxs)("div", {
                children: [1 === s && (0, n.jsx)("div", {
                  className: "rockstargames-modules-core-newswire-articlea6b9b7f63ef349c57f3045b559b9a238"
                }), i]
              }, a)
            }
            return null
          }))
        },
        p = {
          discountsCarouselItem: "rockstargames-modules-core-newswire-articleb1db5637574663ac89f33762c188d7eb",
          fontUpdate: "rockstargames-modules-core-newswire-articlea32986414e2f20d413cb21db77e5ddf2",
          discountsCarousel: "rockstargames-modules-core-newswire-articlee049405f569eb7a31b675e4066e535f7",
          singleImage: "rockstargames-modules-core-newswire-articlea34b328fa3d84d357c02b025e41c0352"
        },
        k = e => {
          let {
            wrapper: a,
            children: s,
            length: i
          } = e;
          return i > 1 ? a(s) : s
        },
        w = e => {
          let {
            items: a,
            noInfiniteScroll: s = !1,
            size: i = null,
            perPage: r = null,
            customSlidesPerView: l = null,
            style: d = {}
          } = e;
          const o = (0, t.useRef)(null),
            [c, u] = (0, t.useState)(null),
            [g, f] = (0, t.useState)(i);
          return (0, t.useEffect)((() => {
            !i && r && f(1 === r ? "lg" : "sm"), i || r || (f("lg"), console.error('Error: DiscountsCarousel expects a prop "size" in order to display the correct amount of slides. Defaulting to lg.'))
          }), [i, r]), (0, t.useEffect)((() => {
            if (!o.current) return;
            const e = () => {
              const e = l || window.getComputedStyle(o.current).getPropertyValue("--slides-per-view");
              u(e)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [o, l]), a.length ? (0, n.jsx)(k, {
            length: a.length,
            wrapper: e => (0, n.jsx)("div", {
              "data-size": g,
              ref: o,
              children: (0, n.jsx)(m.Carousel, {
                className: p.discountsCarousel,
                noInfiniteScroll: s,
                style: {
                  ...d,
                  "--per-page": c,
                  "--carousel-column-gap": "1rem"
                },
                children: e
              })
            }),
            children: a.map(((e, s) => (0, n.jsxs)("div", {
              className: [p.discountsCarouselItem, 1 === a.length ? p.singleImage : ""].join(" "),
              children: [(0, n.jsx)(m.ImageWithBadge, {
                ariaLabel: e?.ariaLabel,
                image: e?.image ?? {
                  alt: e?.alt ?? "",
                  desktop: e?.img ?? null,
                  mobile: e?.imgMobile ?? null
                },
                badge: e?.badge ?? e?.image?.badge ?? e.discountTxt,
                splitter: e?.splitter ?? e?.image?.splitter,
                badgeType: "badgeSizeUpdate"
              }), (0, n.jsx)(m.DescriptionArea, {
                className: p.fontUpdate,
                item: e
              })]
            }, e?.key ?? s)))
          }) : (console.error('Error: DiscountsCarousel expects a prop "items" that contains an array of objects.'), null)
        },
        h = e => {
          let {
            items: a = [],
            style: s = {}
          } = e;
          return a.length ? (0, n.jsx)(m.Grid, {
            style: {
              "--background-color": "#000",
              "--grid-gap-dynamic": "var(--grid-gap-static-lg)",
              "--padding-dynamic-tb": "var(--grid-gap-static-lg)",
              "--image-rounding-dynamic": "0",
              ...s
            },
            children: a.map(((e, a) => e?.title_and_description ? (0, n.jsxs)(m.Grid, {
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
            }, e?.key ?? a) : e?.limitedList?.content ? (0, n.jsx)(w, {
              items: e.limitedList.content,
              noInfiniteScroll: e?.noInfiniteScroll,
              perPage: e?.perPage,
              size: e?.size
            }, e?.key ?? a) : e?.discountsGridList?.content ? (0, n.jsx)(c, {
              noCarousel: !0,
              columns: e.discountsGridList?.columns,
              items: e.discountsGridList.content
            }, e?.key ?? a) : e?.content ? (0, n.jsx)(m.HTMLElement, {
              ...e,
              children: e.content
            }, e?.key ?? a) : e?.list ? (0, n.jsx)(m.UnorderedList, {
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
        x = e => {
          let {
            items: a,
            renderTemplate: s,
            ...i
          } = e;
          switch (s) {
            case "gtav":
            case "gtao":
              return (0, n.jsx)(h, {
                items: a,
                ...i
              });
            case "grid":
              return (0, n.jsx)(c, {
                items: a,
                ...i
              });
            default:
              return (0, n.jsx)(b, {
                items: a
              })
          }
        },
        y = e => {
          let {
            items: a,
            renderTemplate: s,
            style: i,
            ...r
          } = e;
          return (0, n.jsx)("div", {
            className: v.area,
            "data-context": "discounts",
            children: (0, n.jsxs)("div", {
              className: v.discountsContent,
              children: [(0, n.jsx)(x, {
                renderTemplate: s,
                items: a,
                props: r,
                style: i
              }), (0, n.jsx)("div", {
                className: v.btmImg
              })]
            })
          })
        };
      var j = s(9416),
        N = s.n(j);
      const S = {
          donate: "rockstargames-modules-core-newswire-articleff9f3568a504aa9435bb271c905604c6",
          largePaddingSides: "rockstargames-modules-core-newswire-articleeda019a9aff0ac7012c1f9d07452fb57"
        },
        _ = e => {
          let {
            text: a
          } = e;
          const {
            sanitize: s
          } = N();
          return (0, n.jsx)("div", {
            className: [S.donate, "normalPaddingTopBottom largePaddingSides"].join(" "),
            children: (0, n.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: s(a)
              }
            })
          })
        };
      var I = s(3660),
        L = s.n(I),
        P = s(1740),
        T = s(8460),
        F = s.n(T),
        D = s(4644),
        E = s.n(D),
        G = s(1312);
      const C = {
          pillBtn: "rockstargames-modules-core-newswire-articlef9b4575485160d1ee87bf2d85c618500",
          selected: "rockstargames-modules-core-newswire-articlefc0de6978953b2e05ca6256e5df9ddeb",
          event: "rockstargames-modules-core-newswire-articledeb35a20cd305c1c3f58adf38c18a13b",
          featured: "rockstargames-modules-core-newswire-articlec9494ef21ed459fabdebc24519c1880c",
          eventInfo: "rockstargames-modules-core-newswire-articlef0f5b255059bdf027309b512d3f6b154",
          large: "rockstargames-modules-core-newswire-articlec21ddd1ba6d193681ca88e9d03509ad4",
          videoWrapper: "rockstargames-modules-core-newswire-articlefa2fc51439d229dae72eeb8818a0c0c5"
        },
        M = e => {
          let {
            images: a
          } = e;
          return a?.length ? 1 === a.length ? (0, n.jsx)(m.ImageWithBadge, {
            ...a[0]
          }) : (0, n.jsx)(m.Carousel, {
            items: a
          }) : null
        },
        V = e => {
          let {
            images: a,
            title: s,
            content: i,
            isFeatured: r = !1,
            className: l = null,
            videoInHeroProps: d,
            hideNewswireTitle: c = !1
          } = e;
          const u = (0, P.useTinaPayload)(),
            g = u?.meta?.prod ?? !1,
            f = (0, P.useTinaComponents)();
          L().set(u, "meta.prod", g);
          let b = d?.gifVideoProps?.hasVideoInHero || !1;
          const p = d?.htmlVideoProps?.id || !1,
            k = !!d?.htmlVideoProps?.hasHtmlVideoInHero && p;
          k && b && (b = !1);
          const w = void 0 === d || !b && !k,
            h = (0, t.useMemo)((() => ({
              ...f,
              HTMLElement: m.HTMLElement,
              ImageWithBadge: m.ImageWithBadge,
              GroupOfItems: o()
            })), [f]);
          return (0, n.jsxs)("div", {
            className: (0, P.classList)(C.event, l),
            children: [b && (0, n.jsx)("div", {
              className: C.videoWrapper,
              children: (0, n.jsx)(F(), {
                hash: {
                  desktop: d?.gifVideoProps?.hash?.desktop,
                  mobile: d?.gifVideoProps?.hash?.mobile
                },
                loop: d?.gifVideoProps?.isLooping
              })
            }), k && p && (0, n.jsx)("div", {
              className: C.videoWrapper,
              children: (0, n.jsx)(E(), {
                autoplay: d?.htmlVideoProps?.autoPlay || !1,
                id: p
              })
            }), w && (0, n.jsx)(M, {
              images: a
            }), r && (0, n.jsx)(G.default, {}), (0, n.jsxs)("div", {
              className: C.eventInfo,
              children: [!r && !c && (0, n.jsx)("h3", {
                className: C.eventTitle,
                children: s
              }), (0, n.jsx)(P.TinaParser, {
                components: h,
                tina: {
                  payload: {
                    content: i,
                    meta: {
                      prod: g
                    }
                  }
                }
              })]
            })]
          })
        },
        $ = e => (0, n.jsx)(V, {
          ...e,
          className: C.featured,
          isFeatured: !0
        }),
        R = {
          clip: "rockstargames-modules-core-newswire-articlee0224b729307b43a17327188777c3c60",
          redTexture: "rockstargames-modules-core-newswire-articlebbcb053265bd42678ed1086e133ee340",
          greyTexture: "rockstargames-modules-core-newswire-articlea58880949ade673f268f021629ed7bb0"
        },
        B = e => {
          let {
            fontFamily: a = "inherit",
            fontBg: s,
            string: i
          } = e;
          return (0, n.jsx)("span", {
            style: {
              "--font-family-clip": a
            },
            className: [R.clip, R[s]].join(" "),
            children: i
          })
        };
      var A = s(3061);
      const z = {
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
        H = e => {
          let {
            headline: a,
            plainImage: i,
            top: r,
            unorderedList: t,
            bottom: l,
            rewards: d = "primeGaming",
            style: o = {}
          } = e;
          const c = (0, A.useLocale)();
          return "primeGaming" === d && ["ru", "kr", "ko_kr", "ru_ru"].includes(c) ? null : (0, n.jsx)("div", {
            className: z.gamingWrapper,
            children: (0, n.jsx)("div", {
              className: `${z.gamingRewards} ${z[d]}`,
              style: o,
              children: (0, n.jsxs)(m.ResponsiveGridBox, {
                style: {
                  "--grid-align-items": "center",
                  "--grid-row-gap": "2rem"
                },
                children: [(0, n.jsxs)(m.ResponsiveGridItem, {
                  children: [a && (0, n.jsx)("h3", {
                    children: a
                  }), "psPlus" === d && (0, n.jsx)("img", {
                    "aria-label": "Playstation Plus Benefit",
                    className: z.primeGamingSocialLogo,
                    src: s(3844)
                  }), "primeGaming" === d && (0, n.jsx)("img", {
                    "aria-label": "Social Club | Prime Gaming",
                    className: z.primeGamingSocialLogo,
                    src: s(6588)
                  }), "gtaPlus" === d && (0, n.jsx)("img", {
                    "aria-label": "GTA Plus",
                    className: z.primeGamingSocialLogo,
                    src: s(2100)
                  }), r?.text && (0, n.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: r.text
                    }
                  }), t?.list && (0, n.jsx)("div", {
                    className: z.listArea,
                    children: (0, n.jsx)(m.UnorderedList, {
                      className: "gtaPlus" === d ? z.plus : "",
                      ...t,
                      list: t.list,
                      ...t?.attributes
                    })
                  }), l?.text && (0, n.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: l.text
                    }
                  })]
                }), (0, n.jsx)(m.ResponsiveGridItem, {
                  className: z.rightSide,
                  children: i?.image ? (0, n.jsx)(m.MultiSourceImage, {
                    image: i.image
                  }) : (0, n.jsx)("div", {
                    className: z.psPlusDefaultImg
                  })
                })]
              })
            })
          })
        };
      var O = s(7047),
        W = s(3052),
        U = s(8680);
      const q = e => {
          let {
            backgroundImages: a,
            deckHash: s = "",
            perPage: i = null
          } = e;
          const [r, l] = (0, t.useState)(null), d = (0, P.useGetCdnSource)(a?.backgroundImg?.full_src ?? null), o = (0, P.useGetCdnSource)(a?.layeredImg?.full_src ?? null), c = (0, t.useRef)(null), {
            data: u,
            error: g
          } = (0, W.useQuery)(U.TinaModulesInfo, {
            variables: {
              ids: s
            },
            skip: !s
          });
          return (0, t.useEffect)((() => {
            if (u?.tinaModulesInfo) {
              const e = u.tinaModulesInfo[0],
                {
                  id: a,
                  tina: s
                } = e,
                i = L().clone(s);
              L().set(i, "payload.meta.id", a), l(i)
            }
          }), [u]), u && r ? g ? (0, n.jsx)(m.Wasted, {
            error: g
          }) : (0, n.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articlee274b3eb1b6b53a4a1a15a8f7e45c32b",
            ref: c,
            style: {
              "--background-image": `url(${d})`,
              "--layered-image": `url(${o})`,
              "--slides-per-view-desktop": i
            },
            children: (0, n.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articleb22f3a069f5ae8392b6f0a125b2fcc7c",
              children: [o ? (0, n.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlef24111149ce32640ed3990c565f1f663"
              }) : "", (0, n.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articled816468db56e41fe199319fd7f20b8fd",
                children: (0, n.jsx)(P.TinaParser, {
                  components: {
                    Deck: O.Deck
                  },
                  tina: r
                })
              })]
            })
          }) : null
        },
        Q = {
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
        Y = e => {
          let {
            alt: a = "",
            className: s = "",
            src: i = {},
            image: r = null,
            video: t = null
          } = e;
          return (0, n.jsxs)("div", {
            className: ((i?.videoPlayerId || i?.gifHash) && Q.heroImage, s),
            children: [i?.mobile && (0, n.jsx)(m.ResponsiveImg, {
              src: i.mobile,
              ariaLabel: a,
              className: [i?.desktop && Q.hiddenLarge, Q.responsiveImage].join(" "),
              noRatioPlease: !0
            }), i?.desktop && (0, n.jsx)(m.ResponsiveImg, {
              src: i.desktop,
              ariaLabel: a,
              className: [i?.mobile && Q.hiddenMobile, Q.responsiveImage].join(" ")
            }), i?.videoPlayerId && (0, n.jsx)("div", {
              className: [Q.responsiveVideo, Q.trailer].join(" "),
              children: (0, n.jsx)(E(), {
                context: "site",
                autoplay: !1,
                id: i.videoPlayerId,
                hero: !0
              })
            }), i?.gifHash && (0, n.jsx)("div", {
              className: Q.responsiveVideo,
              children: (0, n.jsx)(F(), {
                hash: [{
                  desktop: i?.gifHash?.desktop
                }, {
                  mobile: i?.gifHash?.mobile
                }]
              })
            }), r && (0, n.jsx)(m.ImageWithBadge, {
              image: r
            }), t && (0, n.jsx)("div", {
              className: [Q.responsiveVideo, Q.trailer].join(" "),
              children: (0, n.jsx)(E(), {
                context: "site",
                autoplay: t?.autoplay ?? !1,
                id: t.id,
                hero: !0
              })
            })]
          })
        };
      var J = s(2064),
        K = s.n(J);
      const X = e => {
          let {
            children: a,
            className: s = "",
            style: i,
            game: r
          } = e;
          return (0, t.useEffect)((() => {
            document.fonts.ready.then((() => {
              K().balanceText()
            }))
          }), [a]), (0, n.jsx)("div", {
            className: ["newswireFull", r, s].join(" "),
            style: i,
            "data-game": r,
            children: a
          })
        },
        Z = e => {
          let {
            pct: a,
            bgColor: s,
            primaryColor: i
          } = e;
          return (0, n.jsx)("div", {
            style: {
              position: "relative",
              width: "100%",
              height: "20px",
              backgroundColor: s
            },
            children: (0, n.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlebd486f774b8499df78c2751a83ceb906",
              style: {
                backgroundColor: i,
                position: "absolute",
                top: "0",
                left: "0",
                width: `${a}%`,
                height: "100%"
              }
            })
          })
        },
        ee = e => {
          let {
            title: a,
            desc: s,
            img: i,
            imgMobile: r,
            bgColor: t,
            descPositionBottom: l,
            fontColor: d = "#fff"
          } = e;
          return (0, n.jsxs)(n.Fragment, {
            children: [l ?? (0, n.jsx)(m.ResponsiveSection, {
              style: {
                backgroundColor: `${t}`,
                "--padding-top-bottom": "1.75rem"
              },
              className: "normalPaddingTopBottom largePaddingSides",
              children: (0, n.jsxs)(m.ResponsiveSection, {
                className: "maxDescArea",
                style: {
                  "--desc-h3-margin-bottom": "var(--h-rem-size)"
                },
                children: [(0, n.jsx)("h3", {
                  style: {
                    "--color-span": `${d}`
                  },
                  children: a
                }), (0, n.jsx)("p", {
                  children: s
                })]
              })
            }), (0, n.jsxs)(m.ResponsiveSection, {
              className: [l ?? "spacing"].join(" "),
              children: [(0, n.jsx)(m.ResponsiveImg, {
                className: "hiddenMobile",
                src: i
              }), (0, n.jsx)(m.ResponsiveImg, {
                className: "hiddenLarge",
                src: r
              })]
            }), l ? (0, n.jsx)(m.ResponsiveSection, {
              style: {
                backgroundColor: `${t}`,
                "--padding-top-bottom": "1.75rem"
              },
              className: "normalPaddingTopBottom largePaddingSides spacing",
              children: (0, n.jsxs)(m.ResponsiveSection, {
                className: "maxDescArea",
                style: {
                  "--desc-h3-margin-bottom": "var(--h-rem-size)"
                },
                children: [(0, n.jsx)("h3", {
                  style: {
                    "--color-span": `${d}`
                  },
                  children: a
                }), (0, n.jsx)("p", {
                  children: s
                })]
              })
            }) : null]
          })
        }
    },
    8680: e => {
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

      function s(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && a.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          s(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          s(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          s(e, a)
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
      var i = {};

      function r(e, a) {
        for (var s = 0; s < e.definitions.length; s++) {
          var i = e.definitions[s];
          if (i.name && i.name.value == a) return i
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), i[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesInfo = function(e, a) {
        var s = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var t = i[a] || new Set,
          n = new Set,
          l = new Set;
        for (t.forEach((function(e) {
            l.add(e)
          })); l.size > 0;) {
          var d = l;
          l = new Set, d.forEach((function(e) {
            n.has(e) || (n.add(e), (i[e] || new Set).forEach((function(e) {
              l.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var i = r(e, a);
          i && s.definitions.push(i)
        })), s
      }(a, "TinaModulesInfo")
    },
    2100: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7563ed0414306d18d4f8401effcab31a.svg"
    },
    3844: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fd3b8222b81c51f8a6ae266c805c98a6.png"
    },
    6588: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f002a20c79ea2264ca52456194ef5b48.svg"
    }
  }
]);