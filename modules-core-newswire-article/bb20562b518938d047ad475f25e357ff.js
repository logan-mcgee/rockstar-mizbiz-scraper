"use strict";
(self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [383, 344], {
    3383: (e, s, r) => {
      r.r(s), r.d(s, {
        Jsx0: () => i,
        Jsx1: () => u,
        Jsx2: () => h
      });
      var a = r(8976);
      var t = r(3705);
      const i = e => {
        let {
          article: s,
          children: r
        } = e;
        const i = s.primary_tags[s.primary_tags.length > 1 && 722 === s.primary_tags[0].id ? 1 : 0];
        return (0, t.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articlefde6afcfe220cf25157dc91bf1b2d18e",
          children: [(0, t.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlebca2269fc10a1f1bd0a9e45876f0c9cf",
            children: [(0, t.jsxs)("h1", {
              children: [s.title, s.subtitle ? (0, t.jsx)("span", {
                children: s.subtitle
              }) : ""]
            }), (0, t.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articlec37d0dc8985df7232f651846152c95e2",
              children: [s.primary_tags.length ? (0, t.jsx)(a.NewswireTag, {
                title: i.name,
                href: `/newswire?tag_id=${i.id}`
              }) : "", (0, t.jsx)("time", {
                dateTime: s.created,
                children: s.created_formatted
              })]
            }), s.posts_hero && "iframe" === s.posts_hero.type ? (0, t.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlea802e7b8d32570889cd1dfceaae9f128",
              children: (0, t.jsx)("iframe", {
                src: s.posts_hero.hero
              })
            }) : "", (0, t.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlefec56da42544417b3e8932627cfb9ab8",
              dangerouslySetInnerHTML: {
                __html: s.content
              }
            })]
          }), r]
        })
      };
      var o = r(927),
        n = r(9394),
        c = r.n(n),
        l = r(9929),
        d = r(420),
        m = r.n(d),
        x = r(8356),
        j = r.n(x),
        p = r(4715);
      const u = (0, l.withTranslations)((0, l.withLocale)((e => {
        let {
          article: s,
          children: r,
          locale: i,
          t: n
        } = e;
        const l = {
            A: e => (0, t.jsx)(a.A, {
              ...e
            }),
            AnchorLink: e => (0, t.jsx)(p.AnchorLink, {
              ...e
            }),
            ArticleTag: e => (0, t.jsx)(a.NewswireTag, {
              ...e
            }),
            AudioPlayer: e => (0, t.jsx)(a.AudioPlayer, {
              ...e
            }),
            Button: e => (0, t.jsx)(a.Button, {
              ...e
            }),
            Carousel: e => (0, t.jsx)(a.Carousel, {
              ...e
            }),
            Cta: e => (0, t.jsx)(a.Cta, {
              ...e
            }),
            Discounts: e => (0, t.jsx)(p.Discounts, {
              ...e
            }),
            Donate: e => (0, t.jsx)(p.Donate, {
              ...e
            }),
            FadeInContent: e => (0, t.jsx)(a.FadeInContent, {
              ...e
            }),
            FontClip: e => (0, t.jsx)(p.FontClip, {
              ...e
            }),
            GamingRewards: e => (0, t.jsx)(p.GamingRewards, {
              ...e
            }),
            Gif: e => (0, t.jsx)(j(), {
              ...e
            }),
            Grid: e => (0, t.jsx)(a.Grid, {
              ...e
            }),
            GroupOfItems: e => (0, t.jsx)(m(), {
              ...e
            }),
            HeroImage: e => (0, t.jsx)(p.HeroImage, {
              ...e
            }),
            HTMLElement: e => (0, t.jsx)(a.HTMLElement, {
              ...e
            }),
            ImageWithBadge: e => (0, t.jsx)(a.ImageWithBadge, {
              ...e
            }),
            MultiSourceImage: e => (0, t.jsx)(a.MultiSourceImage, {
              ...e
            }),
            NewswireFull: e => (0, t.jsx)(p.NewswireFull, {
              ...e
            }),
            Title: e => (0, t.jsx)(p.NewswireTitle, {
              ...e
            }),
            PctBar: e => (0, t.jsx)(p.PctBar, {
              ...e
            }),
            Podium: e => (0, t.jsx)(p.Podium, {
              ...e
            }),
            ResponsiveGridBox: e => (0, t.jsx)(a.ResponsiveGridBox, {
              ...e
            }),
            ResponsiveGridItem: e => (0, t.jsx)(a.ResponsiveGridItem, {
              ...e
            }),
            ResponsiveFlexBox: e => (0, t.jsx)(a.ResponsiveFlexBox, {
              ...e
            }),
            ResponsiveFlexItem: e => (0, t.jsx)(a.ResponsiveFlexItem, {
              ...e
            }),
            ResponsiveSection: e => (0, t.jsx)(a.ResponsiveSection, {
              ...e
            }),
            ResponsiveImg: e => (0, t.jsx)(a.ResponsiveImg, {
              ...e
            }),
            Separator: e => (0, t.jsx)(a.Separator, {
              ...e
            }),
            Tag: e => (0, t.jsx)(Tag, {
              ...e
            }),
            UnorderedList: e => (0, t.jsx)(a.UnorderedList, {
              ...e
            })
          },
          d = s.posts_jsx.variables_us_defaulted,
          [x] = (0, o.useState)((0, t.jsx)(c(), {
            renderInWrapper: !1,
            bindings: {
              getArray: (e, s) => e[s],
              renderHtml: e => (0, t.jsx)("span", {
                dangerouslySetInnerHTML: {
                  __html: e
                }
              }, x),
              article: s,
              locale: i,
              t: n,
              variables: d
            },
            components: l,
            jsx: s.posts_jsx.markup,
            onError: e => {
              console.error(e)
            }
          }));
        return (0, t.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articlec24348b14cbdcfa0c1461aa99aa4c1f6",
          children: [x, r]
        })
      })));
      var g = r(9542),
        w = r(2344);
      const h = e => {
        let {
          children: s,
          payload: r,
          variablesKeys: a
        } = e;
        return (0, t.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articled024f9dc1e6bc46f9b3576bcf12e1eb9",
          children: [(0, t.jsx)(g.TinaParser, {
            tina: {
              payload: r,
              variables: {
                keys: a
              }
            },
            components: w.componentsForTinaParser
          }), s]
        })
      }
    },
    2344: (e, s, r) => {
      r.r(s), r.d(s, {
        componentsForTinaParser: () => u
      });
      var a = r(8976),
        t = r(8356),
        i = r.n(t),
        o = r(420),
        n = r.n(o),
        c = r(3750),
        l = r.n(c),
        d = r(4224),
        m = r.n(d),
        x = r(5551),
        j = r.n(x),
        p = r(6947);
      const u = {
        ...a,
        ...r(4715),
        ...{
          ClrCard: p.ClrCard,
          ClrCollapsedcard: p.ClrCollapsedcard,
          Gif: i(),
          GroupOfItems: n(),
          SwiperCarousel: l(),
          RockstarVideoPlayer: m(),
          UGCJobSpotlight: j()
        }
      }
    }
  }
]);