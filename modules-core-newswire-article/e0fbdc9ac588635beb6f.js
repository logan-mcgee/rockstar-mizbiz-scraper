"use strict";
(self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [403], {
    7403: (e, s, r) => {
      r.r(s), r.d(s, {
        Jsx0: () => i,
        Jsx1: () => u,
        Jsx2: () => v
      });
      var a = r(8976);
      var t = r(3322);
      const i = e => {
        let {
          article: s,
          children: r
        } = e;
        const i = s.primary_tags[s.primary_tags.length > 1 && 722 === s.primary_tags[0].id ? 1 : 0];
        return (0, t.jsxs)("div", {
          className: "d680dbb62ac2c9a59f44",
          children: [(0, t.jsxs)("div", {
            className: "fe0c9ab354abbddb8756",
            children: [(0, t.jsxs)("h1", {
              children: [s.title, s.subtitle ? (0, t.jsx)("span", {
                children: s.subtitle
              }) : ""]
            }), (0, t.jsxs)("div", {
              className: "ddb6daf6f9db42766ee7",
              children: [s.primary_tags.length ? (0, t.jsx)(a.NewswireTag, {
                title: i.name,
                href: `/newswire?tag_id=${i.id}`
              }) : "", (0, t.jsx)("time", {
                dateTime: s.created,
                children: s.created_formatted
              })]
            }), s.posts_hero && "iframe" === s.posts_hero.type ? (0, t.jsx)("div", {
              className: "f2956f0c5077d5814eed",
              children: (0, t.jsx)("iframe", {
                src: s.posts_hero.hero
              })
            }) : "", (0, t.jsx)("div", {
              className: "cd439fe9262aab24bbd5",
              dangerouslySetInnerHTML: {
                __html: s.content
              }
            })]
          }), r]
        })
      };
      var n = r(822),
        o = r(8254),
        l = r.n(o),
        d = r(9929),
        c = r(420),
        x = r.n(c),
        j = r(8356),
        m = r.n(j),
        p = r(3583);
      const u = (0, d.withTranslations)((0, d.withLocale)((e => {
        let {
          article: s,
          children: r,
          locale: i,
          t: o
        } = e;
        const d = {
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
          c = s.posts_jsx.variables_us_defaulted,
          [j] = (0, n.useState)((0, t.jsx)(l(), {
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
              variables: c
            },
            components: d,
            jsx: s.posts_jsx.markup,
            onError: e => {
              console.error(e)
            }
          }));
        return (0, t.jsxs)("div", {
          className: "dca988c805a8fc3cf0b8",
          children: [j, r]
        })
      })));
      var h = r(9542),
        g = r(24);
      const v = e => {
        let {
          children: s,
          payload: r,
          variablesKeys: a
        } = e;
        return (0, t.jsxs)("div", {
          className: "f5d1f51c8ee4ad8ccbbd",
          children: [(0, t.jsx)(h.TinaParser, {
            tina: {
              payload: r,
              variables: {
                keys: a
              }
            },
            components: g.componentsForTinaParser
          }), s]
        })
      }
    }
  }
]);