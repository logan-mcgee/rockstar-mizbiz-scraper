! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      s = (new Error).stack;
    s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "1d9a5b58-f4c7-4034-982c-bce23308fa88", e._sentryDebugIdIdentifier = "sentry-dbid-1d9a5b58-f4c7-4034-982c-bce23308fa88")
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
  [216, 68], {
    19216: (e, s, a) => {
      a.r(s), a.d(s, {
        Jsx0: () => o,
        Jsx1: () => g,
        Jsx2: () => b
      });
      var r = a(9860);
      var t = a(95240);
      const o = e => {
        let {
          article: s,
          children: a
        } = e;
        const o = s.primary_tags[s.primary_tags.length > 1 && 722 === s.primary_tags[0].id ? 1 : 0];
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
              children: [s.primary_tags.length ? (0, t.jsx)(r.NewswireTag, {
                title: o.name,
                href: `/newswire?tag_id=${o.id}`
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
          }), a]
        })
      };
      var n = a(51664),
        i = a(46280),
        l = a.n(i),
        d = a(45792),
        c = a(45364),
        f = a.n(c),
        m = a(88460),
        x = a.n(m),
        u = a(22052);
      const g = (0, d.withTranslations)((0, d.withLocale)((e => {
        let {
          article: s,
          children: a,
          locale: o,
          t: i
        } = e;
        const d = {
            A: e => (0, t.jsx)(r.A, {
              ...e
            }),
            AnchorLink: e => (0, t.jsx)(u.AnchorLink, {
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
            Discounts: e => (0, t.jsx)(u.Discounts, {
              ...e
            }),
            Donate: e => (0, t.jsx)(u.Donate, {
              ...e
            }),
            FadeInContent: e => (0, t.jsx)(r.FadeInContent, {
              ...e
            }),
            FontClip: e => (0, t.jsx)(u.FontClip, {
              ...e
            }),
            GamingRewards: e => (0, t.jsx)(u.GamingRewards, {
              ...e
            }),
            Gif: e => (0, t.jsx)(x(), {
              ...e
            }),
            Grid: e => (0, t.jsx)(r.Grid, {
              ...e
            }),
            GroupOfItems: e => (0, t.jsx)(f(), {
              ...e
            }),
            HeroImage: e => (0, t.jsx)(u.HeroImage, {
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
            NewswireFull: e => (0, t.jsx)(u.NewswireFull, {
              ...e
            }),
            Title: e => (0, t.jsx)(u.NewswireTitle, {
              ...e
            }),
            PctBar: e => (0, t.jsx)(u.PctBar, {
              ...e
            }),
            Podium: e => (0, t.jsx)(u.Podium, {
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
            Tag: e => (0, t.jsx)(r.NewswireTag, {
              ...e
            }),
            UnorderedList: e => (0, t.jsx)(r.UnorderedList, {
              ...e
            })
          },
          c = s.posts_jsx.variables_us_defaulted,
          [m] = (0, n.useState)((0, t.jsx)(l(), {
            renderInWrapper: !1,
            bindings: {
              getArray: (e, s) => e[s],
              renderHtml: e => (0, t.jsx)("span", {
                dangerouslySetInnerHTML: {
                  __html: e
                }
              }, m),
              article: s,
              locale: o,
              t: i,
              variables: c
            },
            components: d,
            jsx: s.posts_jsx.markup,
            onError: e => {
              console.error(e)
            }
          }));
        return (0, t.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articlec24348b14cbdcfa0c1461aa99aa4c1f6",
          children: [m, a]
        })
      })));
      var p = a(1740),
        w = a(26068);
      const b = e => {
        let {
          children: s,
          payload: a,
          variablesKeys: r
        } = e;
        return (0, t.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articled024f9dc1e6bc46f9b3576bcf12e1eb9",
          children: [(0, t.jsx)(p.TinaParser, {
            tina: {
              payload: a,
              variables: {
                keys: r
              }
            },
            components: w.componentsForTinaParser
          }), s]
        })
      }
    },
    26068: (e, s, a) => {
      a.r(s), a.d(s, {
        componentsForTinaParser: () => g
      });
      var r = a(9860),
        t = a(88460),
        o = a.n(t),
        n = a(45364),
        i = a.n(n),
        l = a(46040),
        d = a.n(l),
        c = a(84644),
        f = a.n(c),
        m = a(53964),
        x = a.n(m),
        u = a(21760);
      const g = {
        ...r,
        ...a(22052),
        ...{
          ClrCard: u.qQ,
          ClrCollapsedCard: u.wJ,
          Gif: o(),
          GroupOfItems: i(),
          SwiperCarousel: d(),
          RockstarVideoPlayer: f(),
          UGCJobSpotlight: x()
        }
      }
    }
  }
]);