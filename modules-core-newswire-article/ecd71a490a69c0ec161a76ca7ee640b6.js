! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      s = (new Error).stack;
    s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "06a92636-7b8e-456d-afd2-ae362a7d43b1", e._sentryDebugIdIdentifier = "sentry-dbid-06a92636-7b8e-456d-afd2-ae362a7d43b1")
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
        Jsx0: () => t,
        Jsx1: () => g,
        Jsx2: () => b
      });
      var r = a(9860);
      var o = a(95240);
      const t = e => {
        let {
          article: s,
          children: a
        } = e;
        const t = s.primary_tags[s.primary_tags.length > 1 && 722 === s.primary_tags[0].id ? 1 : 0];
        return (0, o.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articlefde6afcfe220cf25157dc91bf1b2d18e",
          children: [(0, o.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlebca2269fc10a1f1bd0a9e45876f0c9cf",
            children: [(0, o.jsxs)("h1", {
              children: [s.title, s.subtitle ? (0, o.jsx)("span", {
                children: s.subtitle
              }) : ""]
            }), (0, o.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articlec37d0dc8985df7232f651846152c95e2",
              children: [s.primary_tags.length ? (0, o.jsx)(r.NewswireTag, {
                title: t.name,
                href: `/newswire?tag_id=${t.id}`
              }) : "", (0, o.jsx)("time", {
                dateTime: s.created,
                children: s.created_formatted
              })]
            }), s.posts_hero && "iframe" === s.posts_hero.type ? (0, o.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlea802e7b8d32570889cd1dfceaae9f128",
              children: (0, o.jsx)("iframe", {
                src: s.posts_hero.hero
              })
            }) : "", (0, o.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlefec56da42544417b3e8932627cfb9ab8",
              dangerouslySetInnerHTML: {
                __html: s.content
              }
            })]
          }), a]
        })
      };
      var n = a(51664),
        d = a(46280),
        i = a.n(d),
        l = a(45792),
        c = a(45364),
        f = a.n(c),
        m = a(88460),
        x = a.n(m),
        u = a(22052);
      const g = (0, l.withTranslations)((0, l.withLocale)((e => {
        let {
          article: s,
          children: a,
          locale: t,
          t: d
        } = e;
        const l = {
            A: e => (0, o.jsx)(r.A, {
              ...e
            }),
            AnchorLink: e => (0, o.jsx)(u.AnchorLink, {
              ...e
            }),
            ArticleTag: e => (0, o.jsx)(r.NewswireTag, {
              ...e
            }),
            AudioPlayer: e => (0, o.jsx)(r.AudioPlayer, {
              ...e
            }),
            Button: e => (0, o.jsx)(r.Button, {
              ...e
            }),
            Carousel: e => (0, o.jsx)(r.Carousel, {
              ...e
            }),
            Cta: e => (0, o.jsx)(r.Cta, {
              ...e
            }),
            Discounts: e => (0, o.jsx)(u.Discounts, {
              ...e
            }),
            Donate: e => (0, o.jsx)(u.Donate, {
              ...e
            }),
            FadeInContent: e => (0, o.jsx)(r.FadeInContent, {
              ...e
            }),
            FontClip: e => (0, o.jsx)(u.FontClip, {
              ...e
            }),
            GamingRewards: e => (0, o.jsx)(u.GamingRewards, {
              ...e
            }),
            Gif: e => (0, o.jsx)(x(), {
              ...e
            }),
            Grid: e => (0, o.jsx)(r.Grid, {
              ...e
            }),
            GroupOfItems: e => (0, o.jsx)(f(), {
              ...e
            }),
            HeroImage: e => (0, o.jsx)(u.HeroImage, {
              ...e
            }),
            HTMLElement: e => (0, o.jsx)(r.HTMLElement, {
              ...e
            }),
            ImageWithBadge: e => (0, o.jsx)(r.ImageWithBadge, {
              ...e
            }),
            MultiSourceImage: e => (0, o.jsx)(r.MultiSourceImage, {
              ...e
            }),
            NewswireFull: e => (0, o.jsx)(u.NewswireFull, {
              ...e
            }),
            Title: e => (0, o.jsx)(u.NewswireTitle, {
              ...e
            }),
            PctBar: e => (0, o.jsx)(u.PctBar, {
              ...e
            }),
            Podium: e => (0, o.jsx)(u.Podium, {
              ...e
            }),
            ResponsiveGridBox: e => (0, o.jsx)(r.ResponsiveGridBox, {
              ...e
            }),
            ResponsiveGridItem: e => (0, o.jsx)(r.ResponsiveGridItem, {
              ...e
            }),
            ResponsiveFlexBox: e => (0, o.jsx)(r.ResponsiveFlexBox, {
              ...e
            }),
            ResponsiveFlexItem: e => (0, o.jsx)(r.ResponsiveFlexItem, {
              ...e
            }),
            ResponsiveSection: e => (0, o.jsx)(r.ResponsiveSection, {
              ...e
            }),
            ResponsiveImg: e => (0, o.jsx)(r.ResponsiveImg, {
              ...e
            }),
            Separator: e => (0, o.jsx)(r.Separator, {
              ...e
            }),
            Tag: e => (0, o.jsx)(r.NewswireTag, {
              ...e
            }),
            UnorderedList: e => (0, o.jsx)(r.UnorderedList, {
              ...e
            })
          },
          c = s.posts_jsx.variables_us_defaulted,
          [m] = (0, n.useState)((0, o.jsx)(i(), {
            renderInWrapper: !1,
            bindings: {
              getArray: (e, s) => e[s],
              renderHtml: e => (0, o.jsx)("span", {
                dangerouslySetInnerHTML: {
                  __html: e
                }
              }, m),
              article: s,
              locale: t,
              t: d,
              variables: c
            },
            components: l,
            jsx: s.posts_jsx.markup,
            onError: e => {
              console.error(e)
            }
          }));
        return (0, o.jsxs)("div", {
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
        return (0, o.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articled024f9dc1e6bc46f9b3576bcf12e1eb9",
          children: [(0, o.jsx)(p.TinaParser, {
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
        o = a(88460),
        t = a.n(o),
        n = a(45364),
        d = a.n(n),
        i = a(46040),
        l = a.n(i),
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
          ClrCollapsedcard: u.ClrCollapsedcard,
          Gif: t(),
          GroupOfItems: d(),
          SwiperCarousel: l(),
          RockstarVideoPlayer: f(),
          UGCJobSpotlight: x()
        }
      }
    }
  }
]);