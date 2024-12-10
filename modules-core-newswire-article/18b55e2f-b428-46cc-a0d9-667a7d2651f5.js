! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "18b55e2f-b428-46cc-a0d9-667a7d2651f5", e._sentryDebugIdIdentifier = "sentry-dbid-18b55e2f-b428-46cc-a0d9-667a7d2651f5")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [4876], {
    42495: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => h
      });
      var t = s(26371),
        l = s(8999),
        r = s(21450);
      const d = {
        padding: "rockstargames-modules-core-newswire-articlef7c6c7f374a964c878d2d276e933ee0b",
        carouselWrapper: "rockstargames-modules-core-newswire-articleea6dc08aea9d51a8db44ed608c891705",
        carouselTitle: "rockstargames-modules-core-newswire-articleeeecd14725803dea4b8848410b644b27"
      };
      var i = s(46632);
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
      var o = s(14522),
        m = s(31879),
        g = s.n(m),
        b = s(74401);
      const u = e => {
          let {
            impressionTracking: a,
            gtm: s = {},
            children: t
          } = e;
          return a?.shouldTrack ? (0, i.jsx)(o.H, {
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
        p = e => {
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
        y = e => {
          let {
            items: a,
            style: s = {},
            className: l = "",
            id: r = null
          } = e;
          return (0, i.jsx)("div", {
            style: s,
            className: (0, b.classList)("rockstargames-modules-core-newswire-articlec84f82c9ba8b58c3cfcc3834228a96d7", l),
            id: r,
            "data-testid": "standard-group-of-items",
            children: a.map((e => (0, i.jsx)(u, {
              impressionTracking: e?.impressionTracking,
              gtm: e?.gtm,
              children: (0, i.jsx)(f, {
                to: e?.to,
                children: (0, i.jsxs)("div", {
                  className: (0, b.classList)("rockstargames-modules-core-newswire-articleea3df4f9076c3f017962a018b926c3e0", e.className),
                  style: e?.style ?? {},
                  ...e?.props,
                  children: [e?.image || e?.videoId ? (0, i.jsx)(p, {
                    item: e
                  }) : "", e.title || e.description ? (0, i.jsx)(t.A, {
                    item: e,
                    className: "rockstargames-modules-core-newswire-articlee9ece151c1b5c70da591c9192e29ef50"
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