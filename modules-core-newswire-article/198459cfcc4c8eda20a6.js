"use strict";
(self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [417, 986], {
    417: (e, s, a) => {
      a.r(s), a.d(s, {
        Jsx0: () => i,
        Jsx1: () => f,
        Jsx2: () => g
      });
      var r = a(8976);
      var t = a(6160);
      const i = e => {
        let {
          article: s,
          children: a
        } = e;
        const i = s.primary_tags[s.primary_tags.length > 1 && 722 === s.primary_tags[0].id ? 1 : 0];
        return (0, t.jsxs)("div", {
          className: "a6afed00140449f9d680dbb62ac2c9a59f44",
          children: [(0, t.jsxs)("div", {
            className: "a6afed00140449f9fe0c9ab354abbddb8756",
            children: [(0, t.jsxs)("h1", {
              children: [s.title, s.subtitle ? (0, t.jsx)("span", {
                children: s.subtitle
              }) : ""]
            }), (0, t.jsxs)("div", {
              className: "a6afed00140449f9ddb6daf6f9db42766ee7",
              children: [s.primary_tags.length ? (0, t.jsx)(r.NewswireTag, {
                title: i.name,
                href: `/newswire?tag_id=${i.id}`
              }) : "", (0, t.jsx)("time", {
                dateTime: s.created,
                children: s.created_formatted
              })]
            }), s.posts_hero && "iframe" === s.posts_hero.type ? (0, t.jsx)("div", {
              className: "a6afed00140449f9f2956f0c5077d5814eed",
              children: (0, t.jsx)("iframe", {
                src: s.posts_hero.hero
              })
            }) : "", (0, t.jsx)("div", {
              className: "a6afed00140449f9cd439fe9262aab24bbd5",
              dangerouslySetInnerHTML: {
                __html: s.content
              }
            })]
          }), a]
        })
      };
      var n = a(4932),
        o = a(7218),
        d = a.n(o),
        l = a(9929),
        c = a(420),
        x = a.n(c),
        j = a(8356),
        m = a.n(j),
        p = a(3975);
      const f = (0, l.withTranslations)((0, l.withLocale)((e => {
        let {
          article: s,
          children: a,
          locale: i,
          t: o
        } = e;
        const l = {
            A: e => (0, t.jsx)(r.A, {
              ...e
            }),
            AnchorLink: e => (0, t.jsx)(p.AnchorLink, {
              ...e
            }),
            ArticleTag: e => (0, t.jsx)(r.NewswireTag, {
              ...e
            }),
            AudioPlayer: e => (0, t.jsx)(r.AudioPlayer, {
              ...e
            }),
            Button: e => (0, t.jsx)(r.Button, {
              ...e
            }),
            Carousel: e => (0, t.jsx)(r.Carousel, {
              ...e
            }),
            Cta: e => (0, t.jsx)(r.Cta, {
              ...e
            }),
            Discounts: e => (0, t.jsx)(p.Discounts, {
              ...e
            }),
            Donate: e => (0, t.jsx)(p.Donate, {
              ...e
            }),
            FadeInContent: e => (0, t.jsx)(r.FadeInContent, {
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
            Grid: e => (0, t.jsx)(r.Grid, {
              ...e
            }),
            GroupOfItems: e => (0, t.jsx)(x(), {
              ...e
            }),
            HeroImage: e => (0, t.jsx)(p.HeroImage, {
              ...e
            }),
            HTMLElement: e => (0, t.jsx)(r.HTMLElement, {
              ...e
            }),
            ImageWithBadge: e => (0, t.jsx)(r.ImageWithBadge, {
              ...e
            }),
            MultiSourceImage: e => (0, t.jsx)(r.MultiSourceImage, {
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
            ResponsiveGridBox: e => (0, t.jsx)(r.ResponsiveGridBox, {
              ...e
            }),
            ResponsiveGridItem: e => (0, t.jsx)(r.ResponsiveGridItem, {
              ...e
            }),
            ResponsiveFlexBox: e => (0, t.jsx)(r.ResponsiveFlexBox, {
              ...e
            }),
            ResponsiveFlexItem: e => (0, t.jsx)(r.ResponsiveFlexItem, {
              ...e
            }),
            ResponsiveSection: e => (0, t.jsx)(r.ResponsiveSection, {
              ...e
            }),
            ResponsiveImg: e => (0, t.jsx)(r.ResponsiveImg, {
              ...e
            }),
            Separator: e => (0, t.jsx)(r.Separator, {
              ...e
            }),
            Tag: e => (0, t.jsx)(Tag, {
              ...e
            }),
            UnorderedList: e => (0, t.jsx)(r.UnorderedList, {
              ...e
            })
          },
          c = s.posts_jsx.variables_us_defaulted,
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
              variables: c
            },
            components: l,
            jsx: s.posts_jsx.markup,
            onError: e => {
              console.error(e)
            }
          }));
        return (0, t.jsxs)("div", {
          className: "a6afed00140449f9dca988c805a8fc3cf0b8",
          children: [j, a]
        })
      })));
      var u = a(9542),
        h = a(7986);
      const g = e => {
        let {
          children: s,
          payload: a,
          variablesKeys: r
        } = e;
        return (0, t.jsxs)("div", {
          className: "a6afed00140449f9f5d1f51c8ee4ad8ccbbd",
          children: [(0, t.jsx)(u.TinaParser, {
            tina: {
              payload: a,
              variables: {
                keys: r
              }
            },
            components: h.componentsForTinaParser
          }), s]
        })
      }
    },
    7986: (e, s, a) => {
      a.r(s), a.d(s, {
        componentsForTinaParser: () => p
      });
      var r = a(8976),
        t = a(8356),
        i = a.n(t),
        n = a(420),
        o = a.n(n),
        d = a(3750),
        l = a.n(d),
        c = a(4224),
        x = a.n(c),
        j = a(5551),
        m = a.n(j);
      const p = {
        ...r,
        ...a(3975),
        ...{
          Gif: i(),
          GroupOfItems: o(),
          SwiperCarousel: l(),
          RockstarVideoPlayer: x(),
          UGCJobSpotlight: m()
        }
      }
    }
  }
]);
//# sourceMappingURL=198459cfcc4c8eda20a6.js.map