! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "7b0c6f3c-3902-40f8-8189-a16c5a172f0c", e._sentryDebugIdIdentifier = "sentry-dbid-7b0c6f3c-3902-40f8-8189-a16c5a172f0c")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [3771], {
    86152: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => p
      });
      var t = s(9860);
      const l = {
        padding: "rockstargames-sites-gta-gen9e1811c65983d2df02484c7bd49620f6d",
        carouselWrapper: "rockstargames-sites-gta-gen9daf8d6c749fa379c43a098df8a842f62",
        carouselTitle: "rockstargames-sites-gta-gen9ffab2486abb58ef9090c19d6d5bdd44c"
      };
      var i = s(95240);
      const r = e => {
          let {
            to: a,
            children: s
          } = e;
          return a ? (0, i.jsx)("a", {
            href: a,
            target: "_blank",
            children: s
          }) : s
        },
        d = e => {
          let {
            items: a,
            text: s = {},
            style: d,
            className: n = "",
            id: c = null
          } = e;
          return a?.length ? (0, i.jsxs)("div", {
            id: c,
            children: [(0, i.jsx)(t.Carousel, {
              style: d,
              className: [n, l.carouselWrapper].join(" "),
              children: a.map((e => (0, i.jsxs)("div", {
                id: e?.id ?? null,
                children: [(0, i.jsx)(t.ImageWithBadge, {
                  image: e?.image,
                  badge: e?.badge ?? e?.image?.badge,
                  badgeType: "badge3",
                  role: e?.role ?? e?.image?.role,
                  splitter: e?.splitter ?? e?.image?.splitter,
                  type: e?.type,
                  ariaLabel: e?.image?.ariaLabel ?? e.description,
                  style: e?.style,
                  className: [l.img, e?.className].join(" ")
                }), e.title && (0, i.jsx)(r, {
                  to: e?.to,
                  children: (0, i.jsx)("h4", {
                    className: l.carouselTitle,
                    children: e.title
                  })
                }), e.description && (0, i.jsx)("span", {
                  className: l.description,
                  dangerouslySetInnerHTML: {
                    __html: e.description
                  }
                })]
              }, e?.key ?? e?.title)))
            }), s?.title || s?.description ? (0, i.jsx)("div", {
              className: l.padding,
              style: s?.style ?? {},
              children: (0, i.jsx)(t.DescriptionArea, {
                item: s
              })
            }) : ""]
          }) : null
        };
      var n = s(84644),
        c = s.n(n),
        o = s(1740);
      const g = e => {
          let {
            impressionTracking: a,
            gtm: s = {},
            children: t
          } = e;
          return t
        },
        m = e => {
          let {
            to: a,
            children: s
          } = e;
          return a ? (0, i.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noreferrer",
            children: s
          }) : s
        },
        b = e => {
          let {
            item: a
          } = e;
          return a?.videoId ? (0, i.jsx)(c(), {
            context: "site",
            autoplay: !1,
            id: a.videoId
          }) : (0, i.jsx)(t.ImageWithBadge, {
            image: a?.image,
            badge: a?.badge ?? a?.image?.badge,
            badgeType: "badge3",
            role: a?.role ?? a?.image?.role,
            splitter: a?.splitter ?? a?.image?.splitter,
            type: a?.type,
            ariaLabel: a?.image?.ariaLabel,
            style: a?.style,
            className: a?.className
          })
        },
        f = e => {
          let {
            items: a,
            style: s = {},
            className: l = "",
            id: r = null
          } = e;
          return (0, i.jsx)("div", {
            style: s,
            className: (0, o.classList)("rockstargames-sites-gta-gen9fbb6b44c6d90c22144e4fbed29bc540b", l),
            id: r,
            children: a.map((e => (0, i.jsx)(g, {
              impressionTracking: e?.impressionTracking,
              gtm: e?.gtm,
              children: (0, i.jsx)(m, {
                to: e?.to,
                children: (0, i.jsxs)("div", {
                  className: (0, o.classList)("rockstargames-sites-gta-gen9c6ef137c3cc0ba12d735aedb6db0cae3", e.className),
                  style: e?.style ?? {},
                  ...e?.props,
                  children: [e?.image || e?.videoId ? (0, i.jsx)(b, {
                    item: e
                  }) : "", e.title || e.description ? (0, i.jsx)(t.DescriptionArea, {
                    item: e,
                    className: "rockstargames-sites-gta-gen9a953f78a1d15741f11ef44c196dbb9c4"
                  }) : ""]
                })
              })
            }, e.key)))
          })
        },
        p = e => {
          let {
            children: a,
            text: s,
            items: t = [],
            renderTemplate: l,
            style: r,
            id: n = null,
            ...c
          } = e;
          if (!t.length) return null;
          switch (l) {
            case "carousel":
              return (0, i.jsx)(d, {
                text: s,
                items: t,
                style: r,
                id: n,
                children: a
              });
            case "carousel-panorama":
              return (0, i.jsx)(d, {
                text: s,
                items: t,
                style: r,
                className: "panorama",
                id: n,
                children: a
              });
            default:
              return (0, i.jsx)(f, {
                items: t,
                style: r,
                id: n,
                ...c,
                children: a
              })
          }
        }
    }
  }
]);