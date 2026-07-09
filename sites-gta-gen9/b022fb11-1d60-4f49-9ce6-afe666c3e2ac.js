try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "b022fb11-1d60-4f49-9ce6-afe666c3e2ac", e._sentryDebugIdIdentifier = "sentry-dbid-b022fb11-1d60-4f49-9ce6-afe666c3e2ac")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [6434], {
    44053(e, a, s) {
      s.r(a), s.d(a, {
        default: () => h
      });
      var t = s(39793),
        i = s(68291),
        d = s(44453),
        l = s(75138);
      const r = {
          carouselTitle: "rockstargames-sites-gta-gen9e9e0ef1bfc3699b1e50c33dd0ce8e76a",
          carouselWrapper: "rockstargames-sites-gta-gen9fabefc39343f6c494eb3d049757d89c5",
          padding: "rockstargames-sites-gta-gen9ac767e959939b4d56b2358cb263d07ad"
        },
        n = ({
          to: e,
          children: a
        }) => e ? (0, t.jsx)("a", {
          href: e,
          target: "_blank",
          children: a
        }) : a,
        c = ({
          items: e = [],
          text: a = {},
          style: s,
          className: c = "",
          id: o = null
        }) => e?.length ? (0, t.jsxs)("div", {
          id: o,
          "data-testid": `carousel${c&&`-${c}`}-group-of-items`,
          children: [(0, t.jsx)(l.A, {
            style: s,
            className: [c, r.carouselWrapper].join(" "),
            children: e.map(e => (0, t.jsxs)("div", {
              id: e?.id ?? null,
              children: [(0, t.jsx)("div", {
                className: r.imageWrapper,
                tabIndex: 0,
                children: (0, t.jsx)(d.A, {
                  image: e?.image,
                  badge: e?.badge ?? e?.image?.badge,
                  badgeType: "badge3",
                  role: e?.role ?? e?.image?.role,
                  splitter: e?.splitter ?? e?.image?.splitter,
                  type: e?.type,
                  ariaLabel: e?.image?.ariaLabel ?? e.description,
                  style: e?.style,
                  className: [r.img, e?.className].join(" ")
                })
              }), e.title && (0, t.jsx)(n, {
                to: e?.to,
                children: (0, t.jsx)("h4", {
                  className: r.carouselTitle,
                  children: e.title
                })
              }), e.description && (0, t.jsx)("span", {
                className: r.description,
                dangerouslySetInnerHTML: {
                  __html: e.description
                }
              })]
            }, e?.key ?? e?.title))
          }), a?.title || a?.description ? (0, t.jsx)("div", {
            className: r.padding,
            style: a?.style ?? {},
            children: (0, t.jsx)(i.A, {
              item: a
            })
          }) : ""]
        }) : null;
      var o = s(31879),
        g = s.n(o),
        f = s(17301),
        b = s(81270);
      const m = ({
          impressionTracking: e,
          gtm: a = {},
          children: s
        }) => e?.shouldTrack ? (0, t.jsx)(f.InViewTracker, {
          threshold: e?.threshold,
          gtm: a,
          children: s
        }) : s,
        p = ({
          to: e,
          children: a
        }) => e ? (0, t.jsx)("a", {
          href: e,
          target: "_blank",
          rel: "noreferrer",
          children: a
        }) : a,
        u = ({
          item: e
        }) => e?.videoId ? (0, t.jsx)(g(), {
          context: "site",
          autoplay: !1,
          id: e.videoId
        }) : (0, t.jsx)(d.A, {
          image: e?.image,
          badge: e?.badge ?? e?.image?.badge,
          badgeType: "badge3",
          role: e?.role ?? e?.image?.role,
          splitter: e?.splitter ?? e?.image?.splitter,
          ariaLabel: e?.image?.ariaLabel,
          style: e?.style,
          className: e?.className
        }),
        y = ({
          items: e,
          style: a = {},
          className: s = "",
          id: d = null
        }) => (0, t.jsx)("div", {
          style: a,
          className: (0, b.default)("rockstargames-sites-gta-gen9d38af92e8657708abd3dc5295e62476c", s),
          id: d,
          "data-testid": "standard-group-of-items",
          children: e.map(e => (0, t.jsx)(m, {
            impressionTracking: e?.impressionTracking,
            gtm: e?.gtm,
            children: (0, t.jsx)(p, {
              to: e?.to,
              children: (0, t.jsxs)("div", {
                className: (0, b.default)("rockstargames-sites-gta-gen9a9b63d3aa2f18fa6c84b19c8993a7893", e.className),
                style: e?.style ?? {},
                ...e?.props,
                children: [e?.image || e?.videoId ? (0, t.jsx)(u, {
                  item: e
                }) : "", e.title || e.description ? (0, t.jsx)(i.A, {
                  item: e,
                  className: "rockstargames-sites-gta-gen9bc47d354556b20071313d2c1ccc3debd"
                }) : ""]
              })
            })
          }, e.key))
        }),
        h = ({
          children: e = null,
          text: a = {},
          items: s = [],
          renderTemplate: i = "",
          style: d = {},
          id: l = null,
          ...r
        }) => {
          if (!s.length) return null;
          switch (i) {
            case "carousel":
              return (0, t.jsx)(c, {
                text: a,
                items: s,
                style: d,
                id: l,
                children: e
              });
            case "carousel-panorama":
              return (0, t.jsx)(c, {
                text: a,
                items: s,
                style: d,
                className: "panorama",
                id: l,
                children: e
              });
            default:
              return (0, t.jsx)(y, {
                items: s,
                style: d,
                id: l,
                ...r,
                children: e
              })
          }
        }
    }
  }
]);