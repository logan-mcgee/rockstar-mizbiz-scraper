try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    s = (new e.Error).stack;
  s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "00dc0a7b-5498-4713-83c7-01506430abef", e._sentryDebugIdIdentifier = "sentry-dbid-00dc0a7b-5498-4713-83c7-01506430abef")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "e9ec16f9fe241f7e8169df2a1c5f1f8c74b65018",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "e9ec16f9fe241f7e8169df2a1c5f1f8c74b65018"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [7547], {
    59928: (e, s, a) => {
      a.r(s), a.d(s, {
        default: () => h
      });
      var t = a(19991),
        l = a(80195),
        i = a(16046);
      const r = {
        padding: "rockstargames-sites-gta-gen9ac767e959939b4d56b2358cb263d07ad",
        carouselWrapper: "rockstargames-sites-gta-gen9fabefc39343f6c494eb3d049757d89c5",
        carouselTitle: "rockstargames-sites-gta-gen9e9e0ef1bfc3699b1e50c33dd0ce8e76a"
      };
      var d = a(70954);
      const n = e => {
          let {
            to: s,
            children: a
          } = e;
          return s ? (0, d.jsx)("a", {
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
            id: g = null
          } = e;
          return s?.length ? (0, d.jsxs)("div", {
            id: g,
            "data-testid": `carousel${o&&`-${o}`}-group-of-items`,
            children: [(0, d.jsx)(i.A, {
              style: c,
              className: [o, r.carouselWrapper].join(" "),
              children: s.map((e => (0, d.jsxs)("div", {
                id: e?.id ?? null,
                children: [(0, d.jsx)(l.A, {
                  image: e?.image,
                  badge: e?.badge ?? e?.image?.badge,
                  badgeType: "badge3",
                  role: e?.role ?? e?.image?.role,
                  splitter: e?.splitter ?? e?.image?.splitter,
                  type: e?.type,
                  ariaLabel: e?.image?.ariaLabel ?? e.description,
                  style: e?.style,
                  className: [r.img, e?.className].join(" ")
                }), e.title && (0, d.jsx)(n, {
                  to: e?.to,
                  children: (0, d.jsx)("h4", {
                    className: r.carouselTitle,
                    children: e.title
                  })
                }), e.description && (0, d.jsx)("span", {
                  className: r.description,
                  dangerouslySetInnerHTML: {
                    __html: e.description
                  }
                })]
              }, e?.key ?? e?.title)))
            }), a?.title || a?.description ? (0, d.jsx)("div", {
              className: r.padding,
              style: a?.style ?? {},
              children: (0, d.jsx)(t.A, {
                item: a
              })
            }) : ""]
          }) : null
        };
      var o = a(31879),
        g = a.n(o),
        f = a(92440),
        m = a(95966);
      const b = e => {
          let {
            impressionTracking: s,
            gtm: a = {},
            children: t
          } = e;
          return s?.shouldTrack ? (0, d.jsx)(f.InViewTracker, {
            threshold: s?.threshold,
            gtm: a,
            children: t
          }) : t
        },
        u = e => {
          let {
            to: s,
            children: a
          } = e;
          return s ? (0, d.jsx)("a", {
            href: s,
            target: "_blank",
            rel: "noreferrer",
            children: a
          }) : a
        },
        p = e => {
          let {
            item: s
          } = e;
          return s?.videoId ? (0, d.jsx)(g(), {
            context: "site",
            autoplay: !1,
            id: s.videoId
          }) : (0, d.jsx)(l.A, {
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
            id: i = null
          } = e;
          return (0, d.jsx)("div", {
            style: a,
            className: (0, m.classList)("rockstargames-sites-gta-gen9d38af92e8657708abd3dc5295e62476c", l),
            id: i,
            "data-testid": "standard-group-of-items",
            children: s.map((e => (0, d.jsx)(b, {
              impressionTracking: e?.impressionTracking,
              gtm: e?.gtm,
              children: (0, d.jsx)(u, {
                to: e?.to,
                children: (0, d.jsxs)("div", {
                  className: (0, m.classList)("rockstargames-sites-gta-gen9a9b63d3aa2f18fa6c84b19c8993a7893", e.className),
                  style: e?.style ?? {},
                  ...e?.props,
                  children: [e?.image || e?.videoId ? (0, d.jsx)(p, {
                    item: e
                  }) : "", e.title || e.description ? (0, d.jsx)(t.A, {
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
            children: s = null,
            text: a = {},
            items: t = [],
            renderTemplate: l = "",
            style: i = {},
            id: r = null,
            ...n
          } = e;
          if (!t.length) return null;
          switch (l) {
            case "carousel":
              return (0, d.jsx)(c, {
                text: a,
                items: t,
                style: i,
                id: r,
                children: s
              });
            case "carousel-panorama":
              return (0, d.jsx)(c, {
                text: a,
                items: t,
                style: i,
                className: "panorama",
                id: r,
                children: s
              });
            default:
              return (0, d.jsx)(y, {
                items: t,
                style: i,
                id: r,
                ...n,
                children: s
              })
          }
        }
    }
  }
]);