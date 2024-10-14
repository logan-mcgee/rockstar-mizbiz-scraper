! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "7fd42817-67a2-4f48-8659-37e06adb4c0c", e._sentryDebugIdIdentifier = "sentry-dbid-7fd42817-67a2-4f48-8659-37e06adb4c0c")
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
  [6119, 8500], {
    18500: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => h
      });
      var t = s(26371),
        l = s(8999),
        i = s(21450);
      const r = {
        padding: "rockstargames-sites-gta-gen9e1811c65983d2df02484c7bd49620f6d",
        carouselWrapper: "rockstargames-sites-gta-gen9daf8d6c749fa379c43a098df8a842f62",
        carouselTitle: "rockstargames-sites-gta-gen9ffab2486abb58ef9090c19d6d5bdd44c"
      };
      var d = s(46632);
      const n = e => {
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
        c = e => {
          let {
            items: a,
            text: s = {},
            style: c,
            className: o = "",
            id: g = null
          } = e;
          return a?.length ? (0, d.jsxs)("div", {
            id: g,
            children: [(0, d.jsx)(i.A, {
              style: c,
              className: [o, r.carouselWrapper].join(" "),
              children: a.map((e => (0, d.jsxs)("div", {
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
            }), s?.title || s?.description ? (0, d.jsx)("div", {
              className: r.padding,
              style: s?.style ?? {},
              children: (0, d.jsx)(t.A, {
                item: s
              })
            }) : ""]
          }) : null
        };
      var o = s(14522),
        g = s(31879),
        f = s.n(g),
        m = s(74401);
      const b = e => {
          let {
            impressionTracking: a,
            gtm: s = {},
            children: t
          } = e;
          return a?.shouldTrack ? (0, d.jsx)(o.H, {
            threshold: a?.threshold,
            gtm: s,
            children: t
          }) : t
        },
        p = e => {
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
        u = e => {
          let {
            item: a
          } = e;
          return a?.videoId ? (0, d.jsx)(f(), {
            context: "site",
            autoplay: !1,
            id: a.videoId
          }) : (0, d.jsx)(l.A, {
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
            className: l = "",
            id: i = null
          } = e;
          return (0, d.jsx)("div", {
            style: s,
            className: (0, m.classList)("rockstargames-sites-gta-gen9fbb6b44c6d90c22144e4fbed29bc540b", l),
            id: i,
            children: a.map((e => (0, d.jsx)(b, {
              impressionTracking: e?.impressionTracking,
              gtm: e?.gtm,
              children: (0, d.jsx)(p, {
                to: e?.to,
                children: (0, d.jsxs)("div", {
                  className: (0, m.classList)("rockstargames-sites-gta-gen9c6ef137c3cc0ba12d735aedb6db0cae3", e.className),
                  style: e?.style ?? {},
                  ...e?.props,
                  children: [e?.image || e?.videoId ? (0, d.jsx)(u, {
                    item: e
                  }) : "", e.title || e.description ? (0, d.jsx)(t.A, {
                    item: e,
                    className: "rockstargames-sites-gta-gen9a953f78a1d15741f11ef44c196dbb9c4"
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
            items: t = [],
            renderTemplate: l,
            style: i,
            id: r = null,
            ...n
          } = e;
          if (!t.length) return null;
          switch (l) {
            case "carousel":
              return (0, d.jsx)(c, {
                text: s,
                items: t,
                style: i,
                id: r,
                children: a
              });
            case "carousel-panorama":
              return (0, d.jsx)(c, {
                text: s,
                items: t,
                style: i,
                className: "panorama",
                id: r,
                children: a
              });
            default:
              return (0, d.jsx)(y, {
                items: t,
                style: i,
                id: r,
                ...n,
                children: a
              })
          }
        }
    }
  }
]);