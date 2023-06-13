"use strict";
(self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [573, 578], {
    6573: (e, s, r) => {
      r.r(s), r.d(s, {
        Jsx0: () => i,
        Jsx1: () => u,
        Jsx2: () => b
      });
      var a = r(8976);
      var t = r(9706);
      const i = e => {
        let {
          article: s,
          children: r
        } = e;
        const i = s.primary_tags[s.primary_tags.length > 1 && 722 === s.primary_tags[0].id ? 1 : 0];
        return (0, t.jsxs)("div", {
          className: "_8961b235c4d9e842d680dbb62ac2c9a59f44",
          children: [(0, t.jsxs)("div", {
            className: "_8961b235c4d9e842fe0c9ab354abbddb8756",
            children: [(0, t.jsxs)("h1", {
              children: [s.title, s.subtitle ? (0, t.jsx)("span", {
                children: s.subtitle
              }) : ""]
            }), (0, t.jsxs)("div", {
              className: "_8961b235c4d9e842ddb6daf6f9db42766ee7",
              children: [s.primary_tags.length ? (0, t.jsx)(a.NewswireTag, {
                title: i.name,
                href: `/newswire?tag_id=${i.id}`
              }) : "", (0, t.jsx)("time", {
                dateTime: s.created,
                children: s.created_formatted
              })]
            }), s.posts_hero && "iframe" === s.posts_hero.type ? (0, t.jsx)("div", {
              className: "_8961b235c4d9e842f2956f0c5077d5814eed",
              children: (0, t.jsx)("iframe", {
                src: s.posts_hero.hero
              })
            }) : "", (0, t.jsx)("div", {
              className: "_8961b235c4d9e842cd439fe9262aab24bbd5",
              dangerouslySetInnerHTML: {
                __html: s.content
              }
            })]
          }), r]
        })
      };
      var n = r(822),
        o = r(1719),
        d = r.n(o),
        c = r(9929),
        l = r(420),
        x = r.n(l),
        j = r(8356),
        m = r.n(j),
        p = r(1413);
      const u = (0, c.withTranslations)((0, c.withLocale)((e => {
        let {
          article: s,
          children: r,
          locale: i,
          t: o
        } = e;
        const c = {
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
            Gif: e => (0, t.jsx)(m(), {
              ...e
            }),
            Grid: e => (0, t.jsx)(a.Grid, {
              ...e
            }),
            GroupOfItems: e => (0, t.jsx)(x(), {
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
          l = s.posts_jsx.variables_us_defaulted,
          [j] = (0, n.useState)((0, t.jsx)(d(), {
            renderInWrapper: !1,
            bindings: {
              getArray: (e, s) => e[s],
              renderHtml: e => (0, t.jsx)("span", {
                dangerouslySetInnerHTML: {
                  __html: e
                }
              }, j),
              article: s,
              locale: i,
              t: o,
              variables: l
            },
            components: c,
            jsx: s.posts_jsx.markup,
            onError: e => {
              console.error(e)
            }
          }));
        return (0, t.jsxs)("div", {
          className: "_8961b235c4d9e842dca988c805a8fc3cf0b8",
          children: [j, r]
        })
      })));
      var _ = r(9542),
        h = r(9578);
      const b = e => {
        let {
          children: s,
          payload: r,
          variablesKeys: a
        } = e;
        return (0, t.jsxs)("div", {
          className: "_8961b235c4d9e842f5d1f51c8ee4ad8ccbbd",
          children: [(0, t.jsx)(_.TinaParser, {
            tina: {
              payload: r,
              variables: {
                keys: a
              }
            },
            components: h.componentsForTinaParser
          }), s]
        })
      }
    },
    9578: (e, s, r) => {
      r.r(s), r.d(s, {
        componentsForTinaParser: () => p
      });
      var a = r(8976),
        t = r(8356),
        i = r.n(t),
        n = r(420),
        o = r.n(n),
        d = r(3750),
        c = r.n(d),
        l = r(4224),
        x = r.n(l),
        j = r(5551),
        m = r.n(j);
      const p = {
        ...a,
        ...r(1413),
        ...{
          Gif: i(),
          GroupOfItems: o(),
          SwiperCarousel: c(),
          RockstarVideoPlayer: x(),
          UGCJobSpotlight: m()
        }
      }
    }
  }
]);