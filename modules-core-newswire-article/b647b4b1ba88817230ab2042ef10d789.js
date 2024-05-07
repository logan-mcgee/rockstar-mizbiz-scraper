! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "f9c7c971-c77e-4714-9375-db547e3e39e8", e._sentryDebugIdIdentifier = "sentry-dbid-f9c7c971-c77e-4714-9375-db547e3e39e8")
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
        default: () => f
      });
      var t = s(9860);
      const r = {
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
            className: c = "",
            id: n = null
          } = e;
          return a?.length ? (0, l.jsxs)("div", {
            id: n,
            children: [(0, l.jsx)(t.Carousel, {
              style: d,
              className: [c, r.carouselWrapper].join(" "),
              children: a.map((e => (0, l.jsxs)("div", {
                id: e?.id ?? null,
                children: [(0, l.jsx)(t.ImageWithBadge, {
                  image: e?.image,
                  badge: e?.badge ?? e?.image?.badge,
                  badgeType: "badge3",
                  role: e?.role ?? e?.image?.role,
                  splitter: e?.splitter ?? e?.image?.splitter,
                  type: e?.type,
                  ariaLabel: e?.image?.ariaLabel ?? e.description,
                  style: e?.style,
                  className: [r.img, e?.className].join(" ")
                }), e.title && (0, l.jsx)(i, {
                  to: e?.to,
                  children: (0, l.jsx)("h4", {
                    className: r.carouselTitle,
                    children: e.title
                  })
                }), e.description && (0, l.jsx)("span", {
                  className: r.description,
                  dangerouslySetInnerHTML: {
                    __html: e.description
                  }
                })]
              }, e?.key ?? e?.title)))
            }), s?.title || s?.description ? (0, l.jsx)("div", {
              className: r.padding,
              style: s?.style ?? {},
              children: (0, l.jsx)(t.DescriptionArea, {
                item: s
              })
            }) : ""]
          }) : null
        };
      var c = s(84644),
        n = s.n(c),
        o = s(1740);
      const m = e => {
          let {
            impressionTracking: a,
            gtm: s = {},
            children: t
          } = e;
          return t
        },
        g = e => {
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
        b = e => {
          let {
            item: a
          } = e;
          return a?.videoId ? (0, l.jsx)(n(), {
            context: "site",
            autoplay: !1,
            id: a.videoId
          }) : (0, l.jsx)(t.ImageWithBadge, {
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
            className: r = "",
            id: i = null
          } = e;
          return (0, l.jsx)("div", {
            style: s,
            className: (0, o.classList)("rockstargames-modules-core-newswire-articlefbb6b44c6d90c22144e4fbed29bc540b", r),
            id: i,
            children: a.map((e => (0, l.jsx)(m, {
              impressionTracking: e?.impressionTracking,
              gtm: e?.gtm,
              children: (0, l.jsx)(g, {
                to: e?.to,
                children: (0, l.jsxs)("div", {
                  className: (0, o.classList)("rockstargames-modules-core-newswire-articlec6ef137c3cc0ba12d735aedb6db0cae3", e.className),
                  style: e?.style ?? {},
                  ...e?.props,
                  children: [e?.image || e?.videoId ? (0, l.jsx)(b, {
                    item: e
                  }) : "", e.title || e.description ? (0, l.jsx)(t.DescriptionArea, {
                    item: e,
                    className: "rockstargames-modules-core-newswire-articlea953f78a1d15741f11ef44c196dbb9c4"
                  }) : ""]
                })
              })
            }, e.key)))
          })
        },
        f = e => {
          let {
            children: a,
            text: s,
            items: t = [],
            renderTemplate: r,
            style: i,
            id: c = null,
            ...n
          } = e;
          if (!t.length) return null;
          switch (r) {
            case "carousel":
              return (0, l.jsx)(d, {
                text: s,
                items: t,
                style: i,
                id: c,
                children: a
              });
            case "carousel-panorama":
              return (0, l.jsx)(d, {
                text: s,
                items: t,
                style: i,
                className: "panorama",
                id: c,
                children: a
              });
            default:
              return (0, l.jsx)(u, {
                items: t,
                style: i,
                id: c,
                ...n,
                children: a
              })
          }
        }
    }
  }
]);