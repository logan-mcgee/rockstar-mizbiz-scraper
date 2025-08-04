try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    s = (new e.Error).stack;
  s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "00dc0a7b-5498-4713-83c7-01506430abef", e._sentryDebugIdIdentifier = "sentry-dbid-00dc0a7b-5498-4713-83c7-01506430abef")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "dde524f11ca2e811c948d868f62c7d544de61cc3",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "dde524f11ca2e811c948d868f62c7d544de61cc3"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [7547], {
    59928: (e, s, a) => {
      a.r(s), a.d(s, {
        default: () => h
      });
      var t = a(19991),
        l = a(80195),
        i = a(16046);
      const d = {
        padding: "rockstargames-sites-gta-gen9ac767e959939b4d56b2358cb263d07ad",
        carouselWrapper: "rockstargames-sites-gta-gen9fabefc39343f6c494eb3d049757d89c5",
        carouselTitle: "rockstargames-sites-gta-gen9e9e0ef1bfc3699b1e50c33dd0ce8e76a"
      };
      var r = a(70954);
      const n = e => {
          let {
            to: s,
            children: a
          } = e;
          return s ? (0, r.jsx)("a", {
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
          return s?.length ? (0, r.jsxs)("div", {
            id: g,
            "data-testid": `carousel${o&&`-${o}`}-group-of-items`,
            children: [(0, r.jsx)(i.A, {
              style: c,
              className: [o, d.carouselWrapper].join(" "),
              children: s.map((e => (0, r.jsxs)("div", {
                id: e?.id ?? null,
                children: [(0, r.jsx)(l.A, {
                  image: e?.image,
                  badge: e?.badge ?? e?.image?.badge,
                  badgeType: "badge3",
                  role: e?.role ?? e?.image?.role,
                  splitter: e?.splitter ?? e?.image?.splitter,
                  type: e?.type,
                  ariaLabel: e?.image?.ariaLabel ?? e.description,
                  style: e?.style,
                  className: [d.img, e?.className].join(" ")
                }), e.title && (0, r.jsx)(n, {
                  to: e?.to,
                  children: (0, r.jsx)("h4", {
                    className: d.carouselTitle,
                    children: e.title
                  })
                }), e.description && (0, r.jsx)("span", {
                  className: d.description,
                  dangerouslySetInnerHTML: {
                    __html: e.description
                  }
                })]
              }, e?.key ?? e?.title)))
            }), a?.title || a?.description ? (0, r.jsx)("div", {
              className: d.padding,
              style: a?.style ?? {},
              children: (0, r.jsx)(t.A, {
                item: a
              })
            }) : ""]
          }) : null
        };
      var o = a(31879),
        g = a.n(o),
        m = a(92440),
        f = a(95966);
      const u = e => {
          let {
            impressionTracking: s,
            gtm: a = {},
            children: t
          } = e;
          return s?.shouldTrack ? (0, r.jsx)(m.InViewTracker, {
            threshold: s?.threshold,
            gtm: a,
            children: t
          }) : t
        },
        b = e => {
          let {
            to: s,
            children: a
          } = e;
          return s ? (0, r.jsx)("a", {
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
          return s?.videoId ? (0, r.jsx)(g(), {
            context: "site",
            autoplay: !1,
            id: s.videoId
          }) : (0, r.jsx)(l.A, {
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
          return (0, r.jsx)("div", {
            style: a,
            className: (0, f.classList)("rockstargames-sites-gta-gen9d38af92e8657708abd3dc5295e62476c", l),
            id: i,
            "data-testid": "standard-group-of-items",
            children: s.map((e => (0, r.jsx)(u, {
              impressionTracking: e?.impressionTracking,
              gtm: e?.gtm,
              children: (0, r.jsx)(b, {
                to: e?.to,
                children: (0, r.jsxs)("div", {
                  className: (0, f.classList)("rockstargames-sites-gta-gen9a9b63d3aa2f18fa6c84b19c8993a7893", e.className),
                  style: e?.style ?? {},
                  ...e?.props,
                  children: [e?.image || e?.videoId ? (0, r.jsx)(p, {
                    item: e
                  }) : "", e.title || e.description ? (0, r.jsx)(t.A, {
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
            id: d = null,
            ...n
          } = e;
          if (!t.length) return null;
          switch (l) {
            case "carousel":
              return (0, r.jsx)(c, {
                text: a,
                items: t,
                style: i,
                id: d,
                children: s
              });
            case "carousel-panorama":
              return (0, r.jsx)(c, {
                text: a,
                items: t,
                style: i,
                className: "panorama",
                id: d,
                children: s
              });
            default:
              return (0, r.jsx)(y, {
                items: t,
                style: i,
                id: d,
                ...n,
                children: s
              })
          }
        }
    }
  }
]);