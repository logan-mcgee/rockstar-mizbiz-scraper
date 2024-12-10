! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "01bab6b1-3536-4188-a0d7-e9fddec0f240", e._sentryDebugIdIdentifier = "sentry-dbid-01bab6b1-3536-4188-a0d7-e9fddec0f240")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [2495, 4876], {
    42495: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => h
      });
      var t = s(26371),
        l = s(8999),
        d = s(21450);
      const i = {
        padding: "rockstargames-sites-gta-gen9f7c6c7f374a964c878d2d276e933ee0b",
        carouselWrapper: "rockstargames-sites-gta-gen9ea6dc08aea9d51a8db44ed608c891705",
        carouselTitle: "rockstargames-sites-gta-gen9eeecd14725803dea4b8848410b644b27"
      };
      var r = s(46632);
      const n = e => {
          let {
            to: a,
            children: s
          } = e;
          return a ? (0, r.jsx)("a", {
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
            id: g = null
          } = e;
          return a?.length ? (0, r.jsxs)("div", {
            id: g,
            "data-testid": `carousel${o&&`-${o}`}-group-of-items`,
            children: [(0, r.jsx)(d.A, {
              style: c,
              className: [o, i.carouselWrapper].join(" "),
              children: a.map((e => (0, r.jsxs)("div", {
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
                  className: [i.img, e?.className].join(" ")
                }), e.title && (0, r.jsx)(n, {
                  to: e?.to,
                  children: (0, r.jsx)("h4", {
                    className: i.carouselTitle,
                    children: e.title
                  })
                }), e.description && (0, r.jsx)("span", {
                  className: i.description,
                  dangerouslySetInnerHTML: {
                    __html: e.description
                  }
                })]
              }, e?.key ?? e?.title)))
            }), s?.title || s?.description ? (0, r.jsx)("div", {
              className: i.padding,
              style: s?.style ?? {},
              children: (0, r.jsx)(t.A, {
                item: s
              })
            }) : ""]
          }) : null
        };
      var o = s(14522),
        g = s(31879),
        m = s.n(g),
        b = s(74401);
      const f = e => {
          let {
            impressionTracking: a,
            gtm: s = {},
            children: t
          } = e;
          return a?.shouldTrack ? (0, r.jsx)(o.H, {
            threshold: a?.threshold,
            gtm: s,
            children: t
          }) : t
        },
        u = e => {
          let {
            to: a,
            children: s
          } = e;
          return a ? (0, r.jsx)("a", {
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
          return a?.videoId ? (0, r.jsx)(m(), {
            context: "site",
            autoplay: !1,
            id: a.videoId
          }) : (0, r.jsx)(l.A, {
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
            id: d = null
          } = e;
          return (0, r.jsx)("div", {
            style: s,
            className: (0, b.classList)("rockstargames-sites-gta-gen9c84f82c9ba8b58c3cfcc3834228a96d7", l),
            id: d,
            "data-testid": "standard-group-of-items",
            children: a.map((e => (0, r.jsx)(f, {
              impressionTracking: e?.impressionTracking,
              gtm: e?.gtm,
              children: (0, r.jsx)(u, {
                to: e?.to,
                children: (0, r.jsxs)("div", {
                  className: (0, b.classList)("rockstargames-sites-gta-gen9ea3df4f9076c3f017962a018b926c3e0", e.className),
                  style: e?.style ?? {},
                  ...e?.props,
                  children: [e?.image || e?.videoId ? (0, r.jsx)(p, {
                    item: e
                  }) : "", e.title || e.description ? (0, r.jsx)(t.A, {
                    item: e,
                    className: "rockstargames-sites-gta-gen9e9ece151c1b5c70da591c9192e29ef50"
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
            style: d = {},
            id: i = null,
            ...n
          } = e;
          if (!t.length) return null;
          switch (l) {
            case "carousel":
              return (0, r.jsx)(c, {
                text: s,
                items: t,
                style: d,
                id: i,
                children: a
              });
            case "carousel-panorama":
              return (0, r.jsx)(c, {
                text: s,
                items: t,
                style: d,
                className: "panorama",
                id: i,
                children: a
              });
            default:
              return (0, r.jsx)(y, {
                items: t,
                style: d,
                id: i,
                ...n,
                children: a
              })
          }
        }
    }
  }
]);