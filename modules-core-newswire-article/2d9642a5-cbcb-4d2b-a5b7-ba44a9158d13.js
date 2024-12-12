! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      s = (new Error).stack;
    s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "2d9642a5-cbcb-4d2b-a5b7-ba44a9158d13", e._sentryDebugIdIdentifier = "sentry-dbid-2d9642a5-cbcb-4d2b-a5b7-ba44a9158d13")
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
  [9435, 4216], {
    69435: (e, s, a) => {
      a.r(s), a.d(s, {
        Jsx0: () => o,
        Jsx1: () => R,
        Jsx2: () => E
      });
      var r = a(31716);
      var t = a(46632);
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
              children: [s.primary_tags.length ? (0, t.jsx)(r.A, {
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
      var n = a(71403),
        l = a(85865),
        d = a.n(l),
        i = a(42756),
        c = a(34983),
        m = a(21450),
        f = a(8999),
        u = a(60285),
        x = a(22778),
        b = a(39613),
        j = a(41074),
        g = a(28606),
        p = a(87839),
        w = a(2024),
        _ = a(95625),
        h = a(61841),
        y = a(43108),
        A = a(75930),
        k = a(17375),
        v = a(37297),
        I = a(63303),
        C = a(63672),
        N = a(5217),
        S = a.n(N),
        T = a(64064),
        M = a.n(T),
        P = a(26750);
      const R = (0, i.withTranslations)((0, i.withLocale)((e => {
        let {
          article: s,
          children: a,
          locale: o,
          t: l
        } = e;
        const i = {
            A: e => (0, t.jsx)(u.A, {
              ...e
            }),
            AnchorLink: e => (0, t.jsx)(P.AnchorLink, {
              ...e
            }),
            ArticleTag: e => (0, t.jsx)(r.A, {
              ...e
            }),
            AudioPlayer: e => (0, t.jsx)(c.A, {
              ...e
            }),
            Button: e => (0, t.jsx)(x.A, {
              ...e
            }),
            Carousel: e => (0, t.jsx)(m.A, {
              ...e
            }),
            Cta: e => (0, t.jsx)(b.A, {
              ...e
            }),
            Discounts: e => (0, t.jsx)(P.Discounts, {
              ...e
            }),
            Donate: e => (0, t.jsx)(P.Donate, {
              ...e
            }),
            FadeInContent: e => (0, t.jsx)(j.A, {
              ...e
            }),
            FontClip: e => (0, t.jsx)(P.FontClip, {
              ...e
            }),
            GamingRewards: e => (0, t.jsx)(P.GamingRewards, {
              ...e
            }),
            Gif: e => (0, t.jsx)(M(), {
              ...e
            }),
            Grid: e => (0, t.jsx)(g.A, {
              ...e
            }),
            GroupOfItems: e => (0, t.jsx)(S(), {
              ...e
            }),
            HeroImage: e => (0, t.jsx)(P.HeroImage, {
              ...e
            }),
            HTMLElement: e => (0, t.jsx)(p.A, {
              ...e
            }),
            ImageWithBadge: e => (0, t.jsx)(f.A, {
              ...e
            }),
            MultiSourceImage: e => (0, t.jsx)(w.A, {
              ...e
            }),
            NewswireFull: e => (0, t.jsx)(P.NewswireFull, {
              ...e
            }),
            Title: e => (0, t.jsx)(P.NewswireTitle, {
              ...e
            }),
            PctBar: e => (0, t.jsx)(P.PctBar, {
              ...e
            }),
            Podium: e => (0, t.jsx)(P.Podium, {
              ...e
            }),
            ResponsiveGridBox: e => (0, t.jsx)(_.A, {
              ...e
            }),
            ResponsiveGridItem: e => (0, t.jsx)(h.A, {
              ...e
            }),
            ResponsiveFlexBox: e => (0, t.jsx)(y.A, {
              ...e
            }),
            ResponsiveFlexItem: e => (0, t.jsx)(A.A, {
              ...e
            }),
            ResponsiveSection: e => (0, t.jsx)(k.A, {
              ...e
            }),
            ResponsiveImg: e => (0, t.jsx)(v.A, {
              ...e
            }),
            Separator: e => (0, t.jsx)(I.A, {
              ...e
            }),
            Tag: e => (0, t.jsx)(r.A, {
              ...e
            }),
            UnorderedList: e => (0, t.jsx)(C.A, {
              ...e
            })
          },
          N = s.posts_jsx.variables_us_defaulted,
          [T] = (0, n.useState)((0, t.jsx)(d(), {
            renderInWrapper: !1,
            bindings: {
              getArray: (e, s) => e[s],
              renderHtml: e => (0, t.jsx)("span", {
                dangerouslySetInnerHTML: {
                  __html: e
                }
              }, T),
              article: s,
              locale: o,
              t: l,
              variables: N
            },
            components: i,
            jsx: s.posts_jsx.markup,
            onError: e => {
              console.error(e)
            }
          }));
        return (0, t.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articlec24348b14cbdcfa0c1461aa99aa4c1f6",
          children: [T, a]
        })
      })));
      var G = a(74401),
        F = a(74216),
        L = a(97187),
        D = a(96717);
      const E = e => {
        let {
          children: s,
          payload: a,
          variablesKeys: r
        } = e, o = !1;
        o = !0;
        const [n] = (0, D.getLocale)(), l = e => {
          let {
            children: s
          } = e;
          return (0, t.jsx)(L.NP, {
            locale: n?.iso,
            colorScheme: "dark",
            defaultColorScheme: "dark",
            defaultContrastMode: "normal",
            defaultPlatformScale: "desktop",
            children: s
          })
        };
        return (0, t.jsx)(l, {
          children: (0, t.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articled024f9dc1e6bc46f9b3576bcf12e1eb9",
            children: [(0, t.jsx)(G.TinaParser, {
              tina: {
                payload: a,
                variables: {
                  keys: r
                }
              },
              components: F.componentsForTinaParser
            }), s]
          })
        })
      }
    },
    74216: (e, s, a) => {
      a.r(s), a.d(s, {
        componentsForTinaParser: () => b
      });
      var r = a(76612),
        t = a(64064),
        o = a.n(t),
        n = a(5217),
        l = a.n(n),
        d = a(26527),
        i = a.n(d),
        c = a(31879),
        m = a.n(c),
        f = a(66713),
        u = a.n(f),
        x = a(42012);
      const b = {
        ...r,
        ...a(26750),
        ClrCard: x.y3,
        ClrCollapsedCard: x.h7,
        Gif: o(),
        GroupOfItems: l(),
        RockstarVideoPlayer: m(),
        SwiperCarousel: i(),
        UGCJobSpotlight: u()
      }
    }
  }
]);