try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "b63aac0d-5989-4ece-92d3-0d5b440f6967", e._sentryDebugIdIdentifier = "sentry-dbid-b63aac0d-5989-4ece-92d3-0d5b440f6967")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [4053], {
    44053(e, a, s) {
      s.r(a), s.d(a, {
        default: () => h
      });
      var t = s(39793),
        l = s(68291),
        d = s(44453),
        i = s(75138);
      const r = {
          carouselTitle: "rockstargames-modules-core-newswire-articlee9e0ef1bfc3699b1e50c33dd0ce8e76a",
          carouselWrapper: "rockstargames-modules-core-newswire-articlefabefc39343f6c494eb3d049757d89c5",
          padding: "rockstargames-modules-core-newswire-articleac767e959939b4d56b2358cb263d07ad"
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
          children: [(0, t.jsx)(i.A, {
            style: s,
            className: [c, r.carouselWrapper].join(" "),
            children: e.map(e => (0, t.jsxs)("div", {
              id: e?.id ?? null,
              children: [(0, t.jsx)(d.A, {
                image: e?.image,
                badge: e?.badge ?? e?.image?.badge,
                badgeType: "badge3",
                role: e?.role ?? e?.image?.role,
                splitter: e?.splitter ?? e?.image?.splitter,
                type: e?.type,
                ariaLabel: e?.image?.ariaLabel ?? e.description,
                style: e?.style,
                className: [r.img, e?.className].join(" ")
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
            children: (0, t.jsx)(l.A, {
              item: a
            })
          }) : ""]
        }) : null;
      var o = s(31879),
        m = s.n(o),
        g = s(17301),
        b = s(81270);
      const u = ({
          impressionTracking: e,
          gtm: a = {},
          children: s
        }) => e?.shouldTrack ? (0, t.jsx)(g.InViewTracker, {
          threshold: e?.threshold,
          gtm: a,
          children: s
        }) : s,
        f = ({
          to: e,
          children: a
        }) => e ? (0, t.jsx)("a", {
          href: e,
          target: "_blank",
          rel: "noreferrer",
          children: a
        }) : a,
        p = ({
          item: e
        }) => e?.videoId ? (0, t.jsx)(m(), {
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
          className: (0, b.default)("rockstargames-modules-core-newswire-articled38af92e8657708abd3dc5295e62476c", s),
          id: d,
          "data-testid": "standard-group-of-items",
          children: e.map(e => (0, t.jsx)(u, {
            impressionTracking: e?.impressionTracking,
            gtm: e?.gtm,
            children: (0, t.jsx)(f, {
              to: e?.to,
              children: (0, t.jsxs)("div", {
                className: (0, b.default)("rockstargames-modules-core-newswire-articlea9b63d3aa2f18fa6c84b19c8993a7893", e.className),
                style: e?.style ?? {},
                ...e?.props,
                children: [e?.image || e?.videoId ? (0, t.jsx)(p, {
                  item: e
                }) : "", e.title || e.description ? (0, t.jsx)(l.A, {
                  item: e,
                  className: "rockstargames-modules-core-newswire-articlebc47d354556b20071313d2c1ccc3debd"
                }) : ""]
              })
            })
          }, e.key))
        }),
        h = ({
          children: e = null,
          text: a = {},
          items: s = [],
          renderTemplate: l = "",
          style: d = {},
          id: i = null,
          ...r
        }) => {
          if (!s.length) return null;
          switch (l) {
            case "carousel":
              return (0, t.jsx)(c, {
                text: a,
                items: s,
                style: d,
                id: i,
                children: e
              });
            case "carousel-panorama":
              return (0, t.jsx)(c, {
                text: a,
                items: s,
                style: d,
                className: "panorama",
                id: i,
                children: e
              });
            default:
              return (0, t.jsx)(y, {
                items: s,
                style: d,
                id: i,
                ...r,
                children: e
              })
          }
        }
    }
  }
]);