! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "2b917423-a155-4b22-86c3-1661faf6dc41", e._sentryDebugIdIdentifier = "sentry-dbid-2b917423-a155-4b22-86c3-1661faf6dc41")
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
  [6152, 5240, 3771], {
    99576: (e, a, t) => {
      var s = t(51664),
        r = Symbol.for("react.element"),
        l = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        n = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, a, t) {
        var s, l = {},
          c = null,
          o = null;
        for (s in void 0 !== t && (c = "" + t), void 0 !== a.key && (c = "" + a.key), void 0 !== a.ref && (o = a.ref), a) i.call(a, s) && !d.hasOwnProperty(s) && (l[s] = a[s]);
        if (e && e.defaultProps)
          for (s in a = e.defaultProps) void 0 === l[s] && (l[s] = a[s]);
        return {
          $$typeof: r,
          type: e,
          key: c,
          ref: o,
          props: l,
          _owner: n.current
        }
      }
      a.Fragment = l, a.jsx = c, a.jsxs = c
    },
    95240: (e, a, t) => {
      e.exports = t(99576)
    },
    86152: (e, a, t) => {
      t.r(a), t.d(a, {
        default: () => u
      });
      var s = t(9860);
      const r = {
        padding: "rockstargames-sites-gta-gen9e1811c65983d2df02484c7bd49620f6d",
        carouselWrapper: "rockstargames-sites-gta-gen9daf8d6c749fa379c43a098df8a842f62",
        carouselTitle: "rockstargames-sites-gta-gen9ffab2486abb58ef9090c19d6d5bdd44c"
      };
      var l = t(95240);
      const i = e => {
          let {
            to: a,
            children: t
          } = e;
          return a ? (0, l.jsx)("a", {
            href: a,
            target: "_blank",
            children: t
          }) : t
        },
        n = e => {
          let {
            items: a,
            text: t = {},
            style: n,
            className: d = "",
            id: c = null
          } = e;
          return a?.length ? (0, l.jsxs)("div", {
            id: c,
            children: [(0, l.jsx)(s.Carousel, {
              style: n,
              className: [d, r.carouselWrapper].join(" "),
              children: a.map((e => (0, l.jsxs)("div", {
                id: e?.id ?? null,
                children: [(0, l.jsx)(s.ImageWithBadge, {
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
            }), t?.title || t?.description ? (0, l.jsx)("div", {
              className: r.padding,
              style: t?.style ?? {},
              children: (0, l.jsx)(s.DescriptionArea, {
                item: t
              })
            }) : ""]
          }) : null
        };
      var d = t(84644),
        c = t.n(d),
        o = t(1740);
      const g = e => {
          let {
            impressionTracking: a,
            gtm: t = {},
            children: r
          } = e;
          return a?.shouldTrack ? (0, l.jsx)(s.InViewTracker, {
            threshold: a?.threshold,
            gtm: t,
            children: r
          }) : r
        },
        f = e => {
          let {
            impressionTracking: a,
            gtm: t = {},
            children: s
          } = e, r = !1;
          return r = !0, (0, l.jsx)(g, {
            impressionTracking: a,
            gtm: t,
            children: s
          })
        },
        m = e => {
          let {
            to: a,
            children: t
          } = e;
          return a ? (0, l.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noreferrer",
            children: t
          }) : t
        },
        p = e => {
          let {
            item: a
          } = e;
          return a?.videoId ? (0, l.jsx)(c(), {
            context: "site",
            autoplay: !1,
            id: a.videoId
          }) : (0, l.jsx)(s.ImageWithBadge, {
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
        b = e => {
          let {
            items: a,
            style: t = {},
            className: r = "",
            id: i = null
          } = e;
          return (0, l.jsx)("div", {
            style: t,
            className: (0, o.classList)("rockstargames-sites-gta-gen9fbb6b44c6d90c22144e4fbed29bc540b", r),
            id: i,
            children: a.map((e => (0, l.jsx)(f, {
              impressionTracking: e?.impressionTracking,
              gtm: e?.gtm,
              children: (0, l.jsx)(m, {
                to: e?.to,
                children: (0, l.jsxs)("div", {
                  className: (0, o.classList)("rockstargames-sites-gta-gen9c6ef137c3cc0ba12d735aedb6db0cae3", e.className),
                  style: e?.style ?? {},
                  ...e?.props,
                  children: [e?.image || e?.videoId ? (0, l.jsx)(p, {
                    item: e
                  }) : "", e.title || e.description ? (0, l.jsx)(s.DescriptionArea, {
                    item: e,
                    className: "rockstargames-sites-gta-gen9a953f78a1d15741f11ef44c196dbb9c4"
                  }) : ""]
                })
              })
            }, e.key)))
          })
        },
        u = e => {
          let {
            children: a,
            text: t,
            items: s = [],
            renderTemplate: r,
            style: i,
            id: d = null,
            ...c
          } = e;
          if (!s.length) return null;
          switch (r) {
            case "carousel":
              return (0, l.jsx)(n, {
                text: t,
                items: s,
                style: i,
                id: d,
                children: a
              });
            case "carousel-panorama":
              return (0, l.jsx)(n, {
                text: t,
                items: s,
                style: i,
                className: "panorama",
                id: d,
                children: a
              });
            default:
              return (0, l.jsx)(b, {
                items: s,
                style: i,
                id: d,
                ...c,
                children: a
              })
          }
        }
    }
  }
]);