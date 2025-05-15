! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "2cdbf13c-ff7a-4195-8b28-3f2a73bb9136", e._sentryDebugIdIdentifier = "sentry-dbid-2cdbf13c-ff7a-4195-8b28-3f2a73bb9136")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [8464], {
    6083: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => h
      });
      var t = s(99217),
        l = s(85239),
        r = s(60882);
      const d = {
        padding: "rockstargames-modules-core-newswire-articleac767e959939b4d56b2358cb263d07ad",
        carouselWrapper: "rockstargames-modules-core-newswire-articlefabefc39343f6c494eb3d049757d89c5",
        carouselTitle: "rockstargames-modules-core-newswire-articlee9e0ef1bfc3699b1e50c33dd0ce8e76a"
      };
      var i = s(25854);
      const n = e => {
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
        o = e => {
          let {
            items: a = [],
            text: s = {},
            style: o,
            className: c = "",
            id: m = null
          } = e;
          return a?.length ? (0, i.jsxs)("div", {
            id: m,
            "data-testid": `carousel${c&&`-${c}`}-group-of-items`,
            children: [(0, i.jsx)(r.A, {
              style: o,
              className: [c, d.carouselWrapper].join(" "),
              children: a.map((e => (0, i.jsxs)("div", {
                id: e?.id ?? null,
                children: [(0, i.jsx)(l.A, {
                  image: e?.image,
                  badge: e?.badge ?? e?.image?.badge,
                  badgeType: "badge3",
                  role: e?.role ?? e?.image?.role,
                  splitter: e?.splitter ?? e?.image?.splitter,
                  type: e?.type,
                  ariaLabel: e?.image?.ariaLabel ?? e.description,
                  style: e?.style,
                  className: [d.img, e?.className].join(" ")
                }), e.title && (0, i.jsx)(n, {
                  to: e?.to,
                  children: (0, i.jsx)("h4", {
                    className: d.carouselTitle,
                    children: e.title
                  })
                }), e.description && (0, i.jsx)("span", {
                  className: d.description,
                  dangerouslySetInnerHTML: {
                    __html: e.description
                  }
                })]
              }, e?.key ?? e?.title)))
            }), s?.title || s?.description ? (0, i.jsx)("div", {
              className: d.padding,
              style: s?.style ?? {},
              children: (0, i.jsx)(t.A, {
                item: s
              })
            }) : ""]
          }) : null
        };
      var c = s(31879),
        m = s.n(c),
        b = s(92440),
        u = s(95966);
      const g = e => {
          let {
            impressionTracking: a,
            gtm: s = {},
            children: t
          } = e;
          return a?.shouldTrack ? (0, i.jsx)(b.InViewTracker, {
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
          return a ? (0, i.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noreferrer",
            children: s
          }) : s
        },
        y = e => {
          let {
            item: a
          } = e;
          return a?.videoId ? (0, i.jsx)(m(), {
            context: "site",
            autoplay: !1,
            id: a.videoId
          }) : (0, i.jsx)(l.A, {
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
        p = e => {
          let {
            items: a,
            style: s = {},
            className: l = "",
            id: r = null
          } = e;
          return (0, i.jsx)("div", {
            style: s,
            className: (0, u.classList)("rockstargames-modules-core-newswire-articled38af92e8657708abd3dc5295e62476c", l),
            id: r,
            "data-testid": "standard-group-of-items",
            children: a.map((e => (0, i.jsx)(g, {
              impressionTracking: e?.impressionTracking,
              gtm: e?.gtm,
              children: (0, i.jsx)(f, {
                to: e?.to,
                children: (0, i.jsxs)("div", {
                  className: (0, u.classList)("rockstargames-modules-core-newswire-articlea9b63d3aa2f18fa6c84b19c8993a7893", e.className),
                  style: e?.style ?? {},
                  ...e?.props,
                  children: [e?.image || e?.videoId ? (0, i.jsx)(y, {
                    item: e
                  }) : "", e.title || e.description ? (0, i.jsx)(t.A, {
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
            renderTemplate: l = "",
            style: r = {},
            id: d = null,
            ...n
          } = e;
          if (!t.length) return null;
          switch (l) {
            case "carousel":
              return (0, i.jsx)(o, {
                text: s,
                items: t,
                style: r,
                id: d,
                children: a
              });
            case "carousel-panorama":
              return (0, i.jsx)(o, {
                text: s,
                items: t,
                style: r,
                className: "panorama",
                id: d,
                children: a
              });
            default:
              return (0, i.jsx)(p, {
                items: t,
                style: r,
                id: d,
                ...n,
                children: a
              })
          }
        }
    }
  }
]);