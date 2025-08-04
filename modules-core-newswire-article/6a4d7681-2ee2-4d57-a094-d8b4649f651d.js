try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    s = (new e.Error).stack;
  s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "6a4d7681-2ee2-4d57-a094-d8b4649f651d", e._sentryDebugIdIdentifier = "sentry-dbid-6a4d7681-2ee2-4d57-a094-d8b4649f651d")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "dde524f11ca2e811c948d868f62c7d544de61cc3",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "dde524f11ca2e811c948d868f62c7d544de61cc3"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [7547], {
    59928: (e, s, a) => {
      a.r(s), a.d(s, {
        default: () => h
      });
      var t = a(19991),
        l = a(80195),
        r = a(16046);
      const d = {
        padding: "rockstargames-modules-core-newswire-articleac767e959939b4d56b2358cb263d07ad",
        carouselWrapper: "rockstargames-modules-core-newswire-articlefabefc39343f6c494eb3d049757d89c5",
        carouselTitle: "rockstargames-modules-core-newswire-articlee9e0ef1bfc3699b1e50c33dd0ce8e76a"
      };
      var i = a(70954);
      const n = e => {
          let {
            to: s,
            children: a
          } = e;
          return s ? (0, i.jsx)("a", {
            href: s,
            target: "_blank",
            children: a
          }) : a
        },
        c = e => {
          let {
            items: s = [],
            text: a = {},
            style: c,
            className: o = "",
            id: m = null
          } = e;
          return s?.length ? (0, i.jsxs)("div", {
            id: m,
            "data-testid": `carousel${o&&`-${o}`}-group-of-items`,
            children: [(0, i.jsx)(r.A, {
              style: c,
              className: [o, d.carouselWrapper].join(" "),
              children: s.map((e => (0, i.jsxs)("div", {
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
            }), a?.title || a?.description ? (0, i.jsx)("div", {
              className: d.padding,
              style: a?.style ?? {},
              children: (0, i.jsx)(t.A, {
                item: a
              })
            }) : ""]
          }) : null
        };
      var o = a(31879),
        m = a.n(o),
        g = a(92440),
        u = a(95966);
      const f = e => {
          let {
            impressionTracking: s,
            gtm: a = {},
            children: t
          } = e;
          return s?.shouldTrack ? (0, i.jsx)(g.InViewTracker, {
            threshold: s?.threshold,
            gtm: a,
            children: t
          }) : t
        },
        p = e => {
          let {
            to: s,
            children: a
          } = e;
          return s ? (0, i.jsx)("a", {
            href: s,
            target: "_blank",
            rel: "noreferrer",
            children: a
          }) : a
        },
        b = e => {
          let {
            item: s
          } = e;
          return s?.videoId ? (0, i.jsx)(m(), {
            context: "site",
            autoplay: !1,
            id: s.videoId
          }) : (0, i.jsx)(l.A, {
            image: s?.image,
            badge: s?.badge ?? s?.image?.badge,
            badgeType: "badge3",
            role: s?.role ?? s?.image?.role,
            splitter: s?.splitter ?? s?.image?.splitter,
            ariaLabel: s?.image?.ariaLabel,
            style: s?.style,
            className: s?.className
          })
        },
        y = e => {
          let {
            items: s,
            style: a = {},
            className: l = "",
            id: r = null
          } = e;
          return (0, i.jsx)("div", {
            style: a,
            className: (0, u.classList)("rockstargames-modules-core-newswire-articled38af92e8657708abd3dc5295e62476c", l),
            id: r,
            "data-testid": "standard-group-of-items",
            children: s.map((e => (0, i.jsx)(f, {
              impressionTracking: e?.impressionTracking,
              gtm: e?.gtm,
              children: (0, i.jsx)(p, {
                to: e?.to,
                children: (0, i.jsxs)("div", {
                  className: (0, u.classList)("rockstargames-modules-core-newswire-articlea9b63d3aa2f18fa6c84b19c8993a7893", e.className),
                  style: e?.style ?? {},
                  ...e?.props,
                  children: [e?.image || e?.videoId ? (0, i.jsx)(b, {
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
            children: s = null,
            text: a = {},
            items: t = [],
            renderTemplate: l = "",
            style: r = {},
            id: d = null,
            ...n
          } = e;
          if (!t.length) return null;
          switch (l) {
            case "carousel":
              return (0, i.jsx)(c, {
                text: a,
                items: t,
                style: r,
                id: d,
                children: s
              });
            case "carousel-panorama":
              return (0, i.jsx)(c, {
                text: a,
                items: t,
                style: r,
                className: "panorama",
                id: d,
                children: s
              });
            default:
              return (0, i.jsx)(y, {
                items: t,
                style: r,
                id: d,
                ...n,
                children: s
              })
          }
        }
    }
  }
]);