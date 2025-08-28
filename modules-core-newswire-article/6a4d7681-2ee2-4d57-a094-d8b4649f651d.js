try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "6a4d7681-2ee2-4d57-a094-d8b4649f651d", e._sentryDebugIdIdentifier = "sentry-dbid-6a4d7681-2ee2-4d57-a094-d8b4649f651d")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "1abf2adfc44dda687079577dcca1257a51fb3eb0",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "1abf2adfc44dda687079577dcca1257a51fb3eb0"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [7547], {
    59928: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => h
      });
      var t = s(19991),
        l = s(80195),
        r = s(16046);
      const d = {
        padding: "rockstargames-modules-core-newswire-articleac767e959939b4d56b2358cb263d07ad",
        carouselWrapper: "rockstargames-modules-core-newswire-articlefabefc39343f6c494eb3d049757d89c5",
        carouselTitle: "rockstargames-modules-core-newswire-articlee9e0ef1bfc3699b1e50c33dd0ce8e76a"
      };
      var i = s(70954);
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
        c = e => {
          let {
            items: a = [],
            text: s = {},
            style: c,
            className: o = "",
            id: m = null
          } = e;
          return a?.length ? (0, i.jsxs)("div", {
            id: m,
            "data-testid": `carousel${o&&`-${o}`}-group-of-items`,
            children: [(0, i.jsx)(r.A, {
              style: c,
              className: [o, d.carouselWrapper].join(" "),
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
      var o = s(31879),
        m = s.n(o),
        g = s(92440),
        u = s(95966);
      const f = e => {
          let {
            impressionTracking: a,
            gtm: s = {},
            children: t
          } = e;
          return a?.shouldTrack ? (0, i.jsx)(g.InViewTracker, {
            threshold: a?.threshold,
            gtm: s,
            children: t
          }) : t
        },
        b = e => {
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
        p = e => {
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
        y = e => {
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
            children: a.map((e => (0, i.jsx)(f, {
              impressionTracking: e?.impressionTracking,
              gtm: e?.gtm,
              children: (0, i.jsx)(b, {
                to: e?.to,
                children: (0, i.jsxs)("div", {
                  className: (0, u.classList)("rockstargames-modules-core-newswire-articlea9b63d3aa2f18fa6c84b19c8993a7893", e.className),
                  style: e?.style ?? {},
                  ...e?.props,
                  children: [e?.image || e?.videoId ? (0, i.jsx)(p, {
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
              return (0, i.jsx)(c, {
                text: s,
                items: t,
                style: r,
                id: d,
                children: a
              });
            case "carousel-panorama":
              return (0, i.jsx)(c, {
                text: s,
                items: t,
                style: r,
                className: "panorama",
                id: d,
                children: a
              });
            default:
              return (0, i.jsx)(y, {
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