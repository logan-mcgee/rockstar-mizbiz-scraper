! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "0e4b7450-1aed-4156-a82d-8671c99ec8be", e._sentryDebugIdIdentifier = "sentry-dbid-0e4b7450-1aed-4156-a82d-8671c99ec8be")
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
  [771], {
    86152: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => p
      });
      var r = s(9860);
      const t = {
        padding: "rockstargames-modules-core-newswire-articlee1811c65983d2df02484c7bd49620f6d",
        carouselWrapper: "rockstargames-modules-core-newswire-articledaf8d6c749fa379c43a098df8a842f62",
        carouselTitle: "rockstargames-modules-core-newswire-articleffab2486abb58ef9090c19d6d5bdd44c"
      };
      var l = s(95240);
      const i = e => {
          let {
            to: a,
            children: s
          } = e;
          return a ? (0, l.jsx)("a", {
            href: a,
            target: "_blank",
            children: s
          }) : s
        },
        d = e => {
          let {
            items: a,
            text: s = {},
            style: d,
            className: n = "",
            id: c = null
          } = e;
          return a?.length ? (0, l.jsxs)("div", {
            id: c,
            children: [(0, l.jsx)(r.Carousel, {
              style: d,
              className: [n, t.carouselWrapper].join(" "),
              children: a.map((e => (0, l.jsxs)("div", {
                id: e?.id ?? null,
                children: [(0, l.jsx)(r.ImageWithBadge, {
                  image: e?.image,
                  badge: e?.badge ?? e?.image?.badge,
                  badgeType: "badge3",
                  role: e?.role ?? e?.image?.role,
                  splitter: e?.splitter ?? e?.image?.splitter,
                  type: e?.type,
                  ariaLabel: e?.image?.ariaLabel ?? e.description,
                  style: e?.style,
                  className: [t.img, e?.className].join(" ")
                }), e.title && (0, l.jsx)(i, {
                  to: e?.to,
                  children: (0, l.jsx)("h4", {
                    className: t.carouselTitle,
                    children: e.title
                  })
                }), e.description && (0, l.jsx)("span", {
                  className: t.description,
                  dangerouslySetInnerHTML: {
                    __html: e.description
                  }
                })]
              }, e?.key ?? e?.title)))
            }), s?.title || s?.description ? (0, l.jsx)("div", {
              className: t.padding,
              style: s?.style ?? {},
              children: (0, l.jsx)(r.DescriptionArea, {
                item: s
              })
            }) : ""]
          }) : null
        };
      var n = s(84644),
        c = s.n(n),
        o = s(1740);
      const m = e => {
          let {
            impressionTracking: a,
            gtm: s = {},
            children: t
          } = e;
          return a?.shouldTrack ? (0, l.jsx)(r.InViewTracker, {
            threshold: a?.threshold,
            gtm: s,
            children: t
          }) : t
        },
        g = e => {
          let {
            impressionTracking: a,
            gtm: s = {},
            children: r
          } = e, t = !1;
          return t = !0, (0, l.jsx)(m, {
            impressionTracking: a,
            gtm: s,
            children: r
          })
        },
        b = e => {
          let {
            to: a,
            children: s
          } = e;
          return a ? (0, l.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noreferrer",
            children: s
          }) : s
        },
        f = e => {
          let {
            item: a
          } = e;
          return a?.videoId ? (0, l.jsx)(c(), {
            context: "site",
            autoplay: !1,
            id: a.videoId
          }) : (0, l.jsx)(r.ImageWithBadge, {
            image: a?.image,
            badge: a?.badge ?? a?.image?.badge,
            badgeType: "badge3",
            role: a?.role ?? a?.image?.role,
            splitter: a?.splitter ?? a?.image?.splitter,
            type: a?.type,
            ariaLabel: a?.image?.ariaLabel,
            style: a?.style,
            className: a?.className
          })
        },
        u = e => {
          let {
            items: a,
            style: s = {},
            className: t = "",
            id: i = null
          } = e;
          return (0, l.jsx)("div", {
            style: s,
            className: (0, o.classList)("rockstargames-modules-core-newswire-articlefbb6b44c6d90c22144e4fbed29bc540b", t),
            id: i,
            children: a.map((e => (0, l.jsx)(g, {
              impressionTracking: e?.impressionTracking,
              gtm: e?.gtm,
              children: (0, l.jsx)(b, {
                to: e?.to,
                children: (0, l.jsxs)("div", {
                  className: (0, o.classList)("rockstargames-modules-core-newswire-articlec6ef137c3cc0ba12d735aedb6db0cae3", e.className),
                  style: e?.style ?? {},
                  ...e?.props,
                  children: [e?.image || e?.videoId ? (0, l.jsx)(f, {
                    item: e
                  }) : "", e.title || e.description ? (0, l.jsx)(r.DescriptionArea, {
                    item: e,
                    className: "rockstargames-modules-core-newswire-articlea953f78a1d15741f11ef44c196dbb9c4"
                  }) : ""]
                })
              })
            }, e.key)))
          })
        },
        p = e => {
          let {
            children: a,
            text: s,
            items: r = [],
            renderTemplate: t,
            style: i,
            id: n = null,
            ...c
          } = e;
          if (!r.length) return null;
          switch (t) {
            case "carousel":
              return (0, l.jsx)(d, {
                text: s,
                items: r,
                style: i,
                id: n,
                children: a
              });
            case "carousel-panorama":
              return (0, l.jsx)(d, {
                text: s,
                items: r,
                style: i,
                className: "panorama",
                id: n,
                children: a
              });
            default:
              return (0, l.jsx)(u, {
                items: r,
                style: i,
                id: n,
                ...c,
                children: a
              })
          }
        }
    }
  }
]);