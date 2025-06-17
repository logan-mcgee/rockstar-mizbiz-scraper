! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "bfe2ef62-f19b-4504-901e-9a4a785c7ad4", e._sentryDebugIdIdentifier = "sentry-dbid-bfe2ef62-f19b-4504-901e-9a4a785c7ad4")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [8464], {
    6083: (e, a, t) => {
      t.r(a), t.d(a, {
        default: () => h
      });
      var s = t(99217),
        l = t(85239),
        d = t(60882);
      const r = {
        padding: "rockstargames-sites-gta-gen9ac767e959939b4d56b2358cb263d07ad",
        carouselWrapper: "rockstargames-sites-gta-gen9fabefc39343f6c494eb3d049757d89c5",
        carouselTitle: "rockstargames-sites-gta-gen9e9e0ef1bfc3699b1e50c33dd0ce8e76a"
      };
      var i = t(25854);
      const n = e => {
          let {
            to: a,
            children: t
          } = e;
          return a ? (0, i.jsx)("a", {
            href: a,
            target: "_blank",
            children: t
          }) : t
        },
        o = e => {
          let {
            items: a = [],
            text: t = {},
            style: o,
            className: c = "",
            id: g = null
          } = e;
          return a?.length ? (0, i.jsxs)("div", {
            id: g,
            "data-testid": `carousel${c&&`-${c}`}-group-of-items`,
            children: [(0, i.jsx)(d.A, {
              style: o,
              className: [c, r.carouselWrapper].join(" "),
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
                  className: [r.img, e?.className].join(" ")
                }), e.title && (0, i.jsx)(n, {
                  to: e?.to,
                  children: (0, i.jsx)("h4", {
                    className: r.carouselTitle,
                    children: e.title
                  })
                }), e.description && (0, i.jsx)("span", {
                  className: r.description,
                  dangerouslySetInnerHTML: {
                    __html: e.description
                  }
                })]
              }, e?.key ?? e?.title)))
            }), t?.title || t?.description ? (0, i.jsx)("div", {
              className: r.padding,
              style: t?.style ?? {},
              children: (0, i.jsx)(s.A, {
                item: t
              })
            }) : ""]
          }) : null
        };
      var c = t(31879),
        g = t.n(c),
        b = t(92440),
        m = t(95966);
      const u = e => {
          let {
            impressionTracking: a,
            gtm: t = {},
            children: s
          } = e;
          return a?.shouldTrack ? (0, i.jsx)(b.InViewTracker, {
            threshold: a?.threshold,
            gtm: t,
            children: s
          }) : s
        },
        f = e => {
          let {
            to: a,
            children: t
          } = e;
          return a ? (0, i.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noreferrer",
            children: t
          }) : t
        },
        y = e => {
          let {
            item: a
          } = e;
          return a?.videoId ? (0, i.jsx)(g(), {
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
            style: t = {},
            className: l = "",
            id: d = null
          } = e;
          return (0, i.jsx)("div", {
            style: t,
            className: (0, m.classList)("rockstargames-sites-gta-gen9d38af92e8657708abd3dc5295e62476c", l),
            id: d,
            "data-testid": "standard-group-of-items",
            children: a.map((e => (0, i.jsx)(u, {
              impressionTracking: e?.impressionTracking,
              gtm: e?.gtm,
              children: (0, i.jsx)(f, {
                to: e?.to,
                children: (0, i.jsxs)("div", {
                  className: (0, m.classList)("rockstargames-sites-gta-gen9a9b63d3aa2f18fa6c84b19c8993a7893", e.className),
                  style: e?.style ?? {},
                  ...e?.props,
                  children: [e?.image || e?.videoId ? (0, i.jsx)(y, {
                    item: e
                  }) : "", e.title || e.description ? (0, i.jsx)(s.A, {
                    item: e,
                    className: "rockstargames-sites-gta-gen9bc47d354556b20071313d2c1ccc3debd"
                  }) : ""]
                })
              })
            }, e.key)))
          })
        },
        h = e => {
          let {
            children: a = null,
            text: t = {},
            items: s = [],
            renderTemplate: l = "",
            style: d = {},
            id: r = null,
            ...n
          } = e;
          if (!s.length) return null;
          switch (l) {
            case "carousel":
              return (0, i.jsx)(o, {
                text: t,
                items: s,
                style: d,
                id: r,
                children: a
              });
            case "carousel-panorama":
              return (0, i.jsx)(o, {
                text: t,
                items: s,
                style: d,
                className: "panorama",
                id: r,
                children: a
              });
            default:
              return (0, i.jsx)(p, {
                items: s,
                style: d,
                id: r,
                ...n,
                children: a
              })
          }
        }
    }
  }
]);