! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      s = (new Error).stack;
    s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "99aa5190-602f-464a-a7b5-5d9eee5139c7", e._sentryDebugIdIdentifier = "sentry-dbid-99aa5190-602f-464a-a7b5-5d9eee5139c7")
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
  [5946, 4216], {
    45946: (e, s, a) => {
      a.r(s), a.d(s, {
        Jsx0: () => o,
        Jsx1: () => M,
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
        f = a(21450),
        m = a(8999),
        u = a(60285),
        x = a(22778),
        b = a(39613),
        g = a(41074),
        j = a(28606),
        p = a(87839),
        w = a(2024),
        h = a(95625),
        _ = a(61841),
        y = a(43108),
        A = a(75930),
        k = a(17375),
        v = a(37297),
        C = a(63303),
        I = a(63672),
        S = a(74459),
        N = a.n(S),
        T = a(64064),
        G = a.n(T),
        L = a(26750);
      const M = (0, i.withTranslations)((0, i.withLocale)((e => {
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
            AnchorLink: e => (0, t.jsx)(L.AnchorLink, {
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
            Carousel: e => (0, t.jsx)(f.A, {
              ...e
            }),
            Cta: e => (0, t.jsx)(b.A, {
              ...e
            }),
            Discounts: e => (0, t.jsx)(L.Discounts, {
              ...e
            }),
            Donate: e => (0, t.jsx)(L.Donate, {
              ...e
            }),
            FadeInContent: e => (0, t.jsx)(g.A, {
              ...e
            }),
            FontClip: e => (0, t.jsx)(L.FontClip, {
              ...e
            }),
            GamingRewards: e => (0, t.jsx)(L.GamingRewards, {
              ...e
            }),
            Gif: e => (0, t.jsx)(G(), {
              ...e
            }),
            Grid: e => (0, t.jsx)(j.A, {
              ...e
            }),
            GroupOfItems: e => (0, t.jsx)(N(), {
              ...e
            }),
            HeroImage: e => (0, t.jsx)(L.HeroImage, {
              ...e
            }),
            HTMLElement: e => (0, t.jsx)(p.A, {
              ...e
            }),
            ImageWithBadge: e => (0, t.jsx)(m.A, {
              ...e
            }),
            MultiSourceImage: e => (0, t.jsx)(w.A, {
              ...e
            }),
            NewswireFull: e => (0, t.jsx)(L.NewswireFull, {
              ...e
            }),
            Title: e => (0, t.jsx)(L.NewswireTitle, {
              ...e
            }),
            PctBar: e => (0, t.jsx)(L.PctBar, {
              ...e
            }),
            Podium: e => (0, t.jsx)(L.Podium, {
              ...e
            }),
            ResponsiveGridBox: e => (0, t.jsx)(h.A, {
              ...e
            }),
            ResponsiveGridItem: e => (0, t.jsx)(_.A, {
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
            Separator: e => (0, t.jsx)(C.A, {
              ...e
            }),
            Tag: e => (0, t.jsx)(r.A, {
              ...e
            }),
            UnorderedList: e => (0, t.jsx)(I.A, {
              ...e
            })
          },
          S = s.posts_jsx.variables_us_defaulted,
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
              variables: S
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
      var P = a(74401),
        R = a(74216),
        F = a(87319),
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
          return (0, t.jsx)(F.NP, {
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
            children: [(0, t.jsx)(P.TinaParser, {
              tina: {
                payload: a,
                variables: {
                  keys: r
                }
              },
              components: R.componentsForTinaParser
            }), s]
          })
        })
      }
    },
    74216: (e, s, a) => {
      a.r(s), a.d(s, {
        componentsForTinaParser: () => w
      });
      var r = a(73695),
        t = a(64064),
        o = a.n(t),
        n = a(74459),
        l = a.n(n),
        d = a(26527),
        i = a.n(d),
        c = a(31879),
        f = a.n(c),
        m = a(66713),
        u = a.n(m),
        x = a(42012),
        b = a(26750),
        g = a(29210),
        j = a(28089),
        p = a(46632);
      const w = {
        ...r,
        ...b,
        ClrCard: x.y3,
        ClrCollapsedCard: x.h7,
        Gif: o(),
        GroupOfItems: l(),
        Lightbox: e => {
          const {
            src: s,
            thumbnail: a
          } = e, r = (0, j.useGetCdnSource)(s), t = (0, j.useGetCdnSource)(a);
          return (0, p.jsx)(g.Lightbox, {
            ...e,
            src: r,
            thumbnail: t
          })
        },
        RockstarVideoPlayer: f(),
        SwiperCarousel: i(),
        UGCJobSpotlight: u()
      }
    }
  }
]);