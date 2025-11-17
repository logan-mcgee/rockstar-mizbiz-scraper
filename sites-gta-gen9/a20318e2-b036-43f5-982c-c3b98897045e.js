try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    s = (new e.Error).stack;
  s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "a20318e2-b036-43f5-982c-c3b98897045e", e._sentryDebugIdIdentifier = "sentry-dbid-a20318e2-b036-43f5-982c-c3b98897045e")
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
  [8503], {
    90884: (e, s, a) => {
      a.r(s), a.d(s, {
        default: () => x
      });
      var t = a(42295),
        d = a(26708),
        i = a(10632),
        l = a(24769);
      const r = {
          carouselTitle: "rockstargames-sites-gta-gen9e9e0ef1bfc3699b1e50c33dd0ce8e76a",
          carouselWrapper: "rockstargames-sites-gta-gen9fabefc39343f6c494eb3d049757d89c5",
          padding: "rockstargames-sites-gta-gen9ac767e959939b4d56b2358cb263d07ad"
        },
        n = ({
          to: e,
          children: s
        }) => e ? (0, t.jsx)("a", {
          href: e,
          target: "_blank",
          children: s
        }) : s,
        c = ({
          items: e = [],
          text: s = {},
          style: a,
          className: c = "",
          id: o = null
        }) => e?.length ? (0, t.jsxs)("div", {
          id: o,
          "data-testid": `carousel${c&&`-${c}`}-group-of-items`,
          children: [(0, t.jsx)(l.A, {
            style: a,
            className: [c, r.carouselWrapper].join(" "),
            children: e.map(e => (0, t.jsxs)("div", {
              id: e?.id ?? null,
              children: [(0, t.jsx)(i.A, {
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
          }), s?.title || s?.description ? (0, t.jsx)("div", {
            className: r.padding,
            style: s?.style ?? {},
            children: (0, t.jsx)(d.A, {
              item: s
            })
          }) : ""]
        }) : null;
      var o = a(31879),
        g = a.n(o),
        m = a(92440),
        f = a(4572),
        b = a.n(f);
      const p = ({
          impressionTracking: e,
          gtm: s = {},
          children: a
        }) => e?.shouldTrack ? (0, t.jsx)(m.InViewTracker, {
          threshold: e?.threshold,
          gtm: s,
          children: a
        }) : a,
        u = ({
          to: e,
          children: s
        }) => e ? (0, t.jsx)("a", {
          href: e,
          target: "_blank",
          rel: "noreferrer",
          children: s
        }) : s,
        y = ({
          item: e
        }) => e?.videoId ? (0, t.jsx)(g(), {
          context: "site",
          autoplay: !1,
          id: e.videoId
        }) : (0, t.jsx)(i.A, {
          image: e?.image,
          badge: e?.badge ?? e?.image?.badge,
          badgeType: "badge3",
          role: e?.role ?? e?.image?.role,
          splitter: e?.splitter ?? e?.image?.splitter,
          ariaLabel: e?.image?.ariaLabel,
          style: e?.style,
          className: e?.className
        }),
        h = ({
          items: e,
          style: s = {},
          className: a = "",
          id: i = null
        }) => (0, t.jsx)("div", {
          style: s,
          className: b()("rockstargames-sites-gta-gen9d38af92e8657708abd3dc5295e62476c", a),
          id: i,
          "data-testid": "standard-group-of-items",
          children: e.map(e => (0, t.jsx)(p, {
            impressionTracking: e?.impressionTracking,
            gtm: e?.gtm,
            children: (0, t.jsx)(u, {
              to: e?.to,
              children: (0, t.jsxs)("div", {
                className: b()("rockstargames-sites-gta-gen9a9b63d3aa2f18fa6c84b19c8993a7893", e.className),
                style: e?.style ?? {},
                ...e?.props,
                children: [e?.image || e?.videoId ? (0, t.jsx)(y, {
                  item: e
                }) : "", e.title || e.description ? (0, t.jsx)(d.A, {
                  item: e,
                  className: "rockstargames-sites-gta-gen9bc47d354556b20071313d2c1ccc3debd"
                }) : ""]
              })
            })
          }, e.key))
        }),
        x = ({
          children: e = null,
          text: s = {},
          items: a = [],
          renderTemplate: d = "",
          style: i = {},
          id: l = null,
          ...r
        }) => {
          if (!a.length) return null;
          switch (d) {
            case "carousel":
              return (0, t.jsx)(c, {
                text: s,
                items: a,
                style: i,
                id: l,
                children: e
              });
            case "carousel-panorama":
              return (0, t.jsx)(c, {
                text: s,
                items: a,
                style: i,
                className: "panorama",
                id: l,
                children: e
              });
            default:
              return (0, t.jsx)(h, {
                items: a,
                style: i,
                id: l,
                ...r,
                children: e
              })
          }
        }
    }
  }
]);