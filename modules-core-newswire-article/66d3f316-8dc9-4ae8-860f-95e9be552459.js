! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "66d3f316-8dc9-4ae8-860f-95e9be552459", e._sentryDebugIdIdentifier = "sentry-dbid-66d3f316-8dc9-4ae8-860f-95e9be552459")
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
  [289], {
    12670: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => h
      });
      var t = s(38621),
        r = s(87782),
        l = s(98142);
      const i = {
        padding: "rockstargames-modules-core-newswire-articleac767e959939b4d56b2358cb263d07ad",
        carouselWrapper: "rockstargames-modules-core-newswire-articlefabefc39343f6c494eb3d049757d89c5",
        carouselTitle: "rockstargames-modules-core-newswire-articlee9e0ef1bfc3699b1e50c33dd0ce8e76a"
      };
      var d = s(98096);
      const c = e => {
          let {
            to: a,
            children: s
          } = e;
          return a ? (0, d.jsx)("a", {
            href: a,
            target: "_blank",
            children: s
          }) : s
        },
        n = e => {
          let {
            items: a = [],
            text: s = {},
            style: n,
            className: o = "",
            id: m = null
          } = e;
          return a?.length ? (0, d.jsxs)("div", {
            id: m,
            "data-testid": `carousel${o&&`-${o}`}-group-of-items`,
            children: [(0, d.jsx)(l.A, {
              style: n,
              className: [o, i.carouselWrapper].join(" "),
              children: a.map((e => (0, d.jsxs)("div", {
                id: e?.id ?? null,
                children: [(0, d.jsx)(r.A, {
                  image: e?.image,
                  badge: e?.badge ?? e?.image?.badge,
                  badgeType: "badge3",
                  role: e?.role ?? e?.image?.role,
                  splitter: e?.splitter ?? e?.image?.splitter,
                  type: e?.type,
                  ariaLabel: e?.image?.ariaLabel ?? e.description,
                  style: e?.style,
                  className: [i.img, e?.className].join(" ")
                }), e.title && (0, d.jsx)(c, {
                  to: e?.to,
                  children: (0, d.jsx)("h4", {
                    className: i.carouselTitle,
                    children: e.title
                  })
                }), e.description && (0, d.jsx)("span", {
                  className: i.description,
                  dangerouslySetInnerHTML: {
                    __html: e.description
                  }
                })]
              }, e?.key ?? e?.title)))
            }), s?.title || s?.description ? (0, d.jsx)("div", {
              className: i.padding,
              style: s?.style ?? {},
              children: (0, d.jsx)(t.A, {
                item: s
              })
            }) : ""]
          }) : null
        };
      var o = s(31879),
        m = s.n(o),
        g = s(92440),
        u = s(95966);
      const b = e => {
          let {
            impressionTracking: a,
            gtm: s = {},
            children: t
          } = e;
          return a?.shouldTrack ? (0, d.jsx)(g.InViewTracker, {
            threshold: a?.threshold,
            gtm: s,
            children: t
          }) : t
        },
        f = e => {
          let {
            to: a,
            children: s
          } = e;
          return a ? (0, d.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noreferrer",
            children: s
          }) : s
        },
        p = e => {
          let {
            item: a
          } = e;
          return a?.videoId ? (0, d.jsx)(m(), {
            context: "site",
            autoplay: !1,
            id: a.videoId
          }) : (0, d.jsx)(r.A, {
            image: a?.image,
            badge: a?.badge ?? a?.image?.badge,
            badgeType: "badge3",
            role: a?.role ?? a?.image?.role,
            splitter: a?.splitter ?? a?.image?.splitter,
            ariaLabel: a?.image?.ariaLabel,
            style: a?.style,
            className: a?.className
          })
        },
        y = e => {
          let {
            items: a,
            style: s = {},
            className: r = "",
            id: l = null
          } = e;
          return (0, d.jsx)("div", {
            style: s,
            className: (0, u.classList)("rockstargames-modules-core-newswire-articled38af92e8657708abd3dc5295e62476c", r),
            id: l,
            "data-testid": "standard-group-of-items",
            children: a.map((e => (0, d.jsx)(b, {
              impressionTracking: e?.impressionTracking,
              gtm: e?.gtm,
              children: (0, d.jsx)(f, {
                to: e?.to,
                children: (0, d.jsxs)("div", {
                  className: (0, u.classList)("rockstargames-modules-core-newswire-articlea9b63d3aa2f18fa6c84b19c8993a7893", e.className),
                  style: e?.style ?? {},
                  ...e?.props,
                  children: [e?.image || e?.videoId ? (0, d.jsx)(p, {
                    item: e
                  }) : "", e.title || e.description ? (0, d.jsx)(t.A, {
                    item: e,
                    className: "rockstargames-modules-core-newswire-articlebc47d354556b20071313d2c1ccc3debd"
                  }) : ""]
                })
              })
            }, e.key)))
          })
        },
        h = e => {
          let {
            children: a = null,
            text: s = {},
            items: t = [],
            renderTemplate: r = "",
            style: l = {},
            id: i = null,
            ...c
          } = e;
          if (!t.length) return null;
          switch (r) {
            case "carousel":
              return (0, d.jsx)(n, {
                text: s,
                items: t,
                style: l,
                id: i,
                children: a
              });
            case "carousel-panorama":
              return (0, d.jsx)(n, {
                text: s,
                items: t,
                style: l,
                className: "panorama",
                id: i,
                children: a
              });
            default:
              return (0, d.jsx)(y, {
                items: t,
                style: l,
                id: i,
                ...c,
                children: a
              })
          }
        }
    }
  }
]);