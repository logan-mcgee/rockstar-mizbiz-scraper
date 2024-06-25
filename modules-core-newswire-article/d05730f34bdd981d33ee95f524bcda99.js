! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      s = (new Error).stack;
    s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "58b7b97f-3edd-436d-b38e-c842852477ef", e._sentryDebugIdIdentifier = "sentry-dbid-58b7b97f-3edd-436d-b38e-c842852477ef")
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
    19216: (e, s, r) => {
      r.r(s), r.d(s, {
        Jsx0: () => o,
        Jsx1: () => g,
        Jsx2: () => b
      });
      var a = r(9860);
      var t = r(95240);
      const o = e => {
        let {
          article: s,
          children: r
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
              children: [s.primary_tags.length ? (0, t.jsx)(a.NewswireTag, {
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
          }), r]
        })
      };
      var n = r(51664),
        i = r(69460),
        d = r.n(i),
        l = r(45792),
        c = r(45364),
        f = r.n(c),
        m = r(88460),
        x = r.n(m),
        u = r(22052);
      const g = (0, l.withTranslations)((0, l.withLocale)((e => {
        let {
          article: s,
          children: r,
          locale: o,
          t: i
        } = e;
        const l = {
            A: e => (0, t.jsx)(a.A, {
              ...e
            }),
            AnchorLink: e => (0, t.jsx)(u.AnchorLink, {
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
            Discounts: e => (0, t.jsx)(u.Discounts, {
              ...e
            }),
            Donate: e => (0, t.jsx)(u.Donate, {
              ...e
            }),
            FadeInContent: e => (0, t.jsx)(a.FadeInContent, {
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
            Grid: e => (0, t.jsx)(a.Grid, {
              ...e
            }),
            GroupOfItems: e => (0, t.jsx)(f(), {
              ...e
            }),
            HeroImage: e => (0, t.jsx)(u.HeroImage, {
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
            Tag: e => (0, t.jsx)(a.NewswireTag, {
              ...e
            }),
            UnorderedList: e => (0, t.jsx)(a.UnorderedList, {
              ...e
            })
          },
          c = s.posts_jsx.variables_us_defaulted,
          [m] = (0, n.useState)((0, t.jsx)(d(), {
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
            components: l,
            jsx: s.posts_jsx.markup,
            onError: e => {
              console.error(e)
            }
          }));
        return (0, t.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articlec24348b14cbdcfa0c1461aa99aa4c1f6",
          children: [m, r]
        })
      })));
      var p = r(1740),
        w = r(26068);
      const b = e => {
        let {
          children: s,
          payload: r,
          variablesKeys: a
        } = e;
        return (0, t.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articled024f9dc1e6bc46f9b3576bcf12e1eb9",
          children: [(0, t.jsx)(p.TinaParser, {
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
    26068: (e, s, r) => {
      r.r(s), r.d(s, {
        componentsForTinaParser: () => g
      });
      var a = r(9860),
        t = r(88460),
        o = r.n(t),
        n = r(45364),
        i = r.n(n),
        d = r(46040),
        l = r.n(d),
        c = r(84644),
        f = r.n(c),
        m = r(53964),
        x = r.n(m),
        u = r(21760);
      const g = {
        ...a,
        ...r(22052),
        ...{
          ClrCard: u.qQ,
          ClrCollapsedCard: u.wJ,
          Gif: o(),
          GroupOfItems: i(),
          SwiperCarousel: l(),
          RockstarVideoPlayer: f(),
          UGCJobSpotlight: x()
        }
      }
    }
  }
]);