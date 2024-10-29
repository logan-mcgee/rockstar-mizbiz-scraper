! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "9380c350-d96e-4c4c-94b4-bfc5512e34ee", e._sentryDebugIdIdentifier = "sentry-dbid-9380c350-d96e-4c4c-94b4-bfc5512e34ee")
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
  [6119], {
    18500: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => h
      });
      var l = s(26371),
        t = s(8999),
        r = s(21450);
      const i = {
        padding: "rockstargames-modules-core-newswire-articlee1811c65983d2df02484c7bd49620f6d",
        carouselWrapper: "rockstargames-modules-core-newswire-articledaf8d6c749fa379c43a098df8a842f62",
        carouselTitle: "rockstargames-modules-core-newswire-articleffab2486abb58ef9090c19d6d5bdd44c"
      };
      var d = s(46632);
      const c = e => {
          let {
            to: a,
            children: s
          } = e;
          return a ? (0, d.jsx)("a", {
            href: a,
            target: "_blank",
            children: s
          }) : s
        },
        n = e => {
          let {
            items: a,
            text: s = {},
            style: n,
            className: o = "",
            id: m = null
          } = e;
          return a?.length ? (0, d.jsxs)("div", {
            id: m,
            children: [(0, d.jsx)(r.A, {
              style: n,
              className: [o, i.carouselWrapper].join(" "),
              children: a.map((e => (0, d.jsxs)("div", {
                id: e?.id ?? null,
                children: [(0, d.jsx)(t.A, {
                  image: e?.image,
                  badge: e?.badge ?? e?.image?.badge,
                  badgeType: "badge3",
                  role: e?.role ?? e?.image?.role,
                  splitter: e?.splitter ?? e?.image?.splitter,
                  type: e?.type,
                  ariaLabel: e?.image?.ariaLabel ?? e.description,
                  style: e?.style,
                  className: [i.img, e?.className].join(" ")
                }), e.title && (0, d.jsx)(c, {
                  to: e?.to,
                  children: (0, d.jsx)("h4", {
                    className: i.carouselTitle,
                    children: e.title
                  })
                }), e.description && (0, d.jsx)("span", {
                  className: i.description,
                  dangerouslySetInnerHTML: {
                    __html: e.description
                  }
                })]
              }, e?.key ?? e?.title)))
            }), s?.title || s?.description ? (0, d.jsx)("div", {
              className: i.padding,
              style: s?.style ?? {},
              children: (0, d.jsx)(l.A, {
                item: s
              })
            }) : ""]
          }) : null
        };
      var o = s(14522),
        m = s(31879),
        f = s.n(m),
        b = s(74401);
      const g = e => {
          let {
            impressionTracking: a,
            gtm: s = {},
            children: l
          } = e;
          return a?.shouldTrack ? (0, d.jsx)(o.H, {
            threshold: a?.threshold,
            gtm: s,
            children: l
          }) : l
        },
        u = e => {
          let {
            to: a,
            children: s
          } = e;
          return a ? (0, d.jsx)("a", {
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
          return a?.videoId ? (0, d.jsx)(f(), {
            context: "site",
            autoplay: !1,
            id: a.videoId
          }) : (0, d.jsx)(t.A, {
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
        y = e => {
          let {
            items: a,
            style: s = {},
            className: t = "",
            id: r = null
          } = e;
          return (0, d.jsx)("div", {
            style: s,
            className: (0, b.classList)("rockstargames-modules-core-newswire-articlefbb6b44c6d90c22144e4fbed29bc540b", t),
            id: r,
            children: a.map((e => (0, d.jsx)(g, {
              impressionTracking: e?.impressionTracking,
              gtm: e?.gtm,
              children: (0, d.jsx)(u, {
                to: e?.to,
                children: (0, d.jsxs)("div", {
                  className: (0, b.classList)("rockstargames-modules-core-newswire-articlec6ef137c3cc0ba12d735aedb6db0cae3", e.className),
                  style: e?.style ?? {},
                  ...e?.props,
                  children: [e?.image || e?.videoId ? (0, d.jsx)(p, {
                    item: e
                  }) : "", e.title || e.description ? (0, d.jsx)(l.A, {
                    item: e,
                    className: "rockstargames-modules-core-newswire-articlea953f78a1d15741f11ef44c196dbb9c4"
                  }) : ""]
                })
              })
            }, e.key)))
          })
        },
        h = e => {
          let {
            children: a,
            text: s,
            items: l = [],
            renderTemplate: t,
            style: r,
            id: i = null,
            ...c
          } = e;
          if (!l.length) return null;
          switch (t) {
            case "carousel":
              return (0, d.jsx)(n, {
                text: s,
                items: l,
                style: r,
                id: i,
                children: a
              });
            case "carousel-panorama":
              return (0, d.jsx)(n, {
                text: s,
                items: l,
                style: r,
                className: "panorama",
                id: i,
                children: a
              });
            default:
              return (0, d.jsx)(y, {
                items: l,
                style: r,
                id: i,
                ...c,
                children: a
              })
          }
        }
    }
  }
]);