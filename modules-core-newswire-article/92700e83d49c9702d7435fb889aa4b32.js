! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "4675ac9c-4a38-4abe-849e-d64a4883e510", e._sentryDebugIdIdentifier = "sentry-dbid-4675ac9c-4a38-4abe-849e-d64a4883e510")
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
  [152, 240, 771], {
    99576: (e, a, r) => {
      var s = r(51664),
        t = Symbol.for("react.element"),
        l = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        d = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        n = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, a, r) {
        var s, l = {},
          c = null,
          o = null;
        for (s in void 0 !== r && (c = "" + r), void 0 !== a.key && (c = "" + a.key), void 0 !== a.ref && (o = a.ref), a) i.call(a, s) && !n.hasOwnProperty(s) && (l[s] = a[s]);
        if (e && e.defaultProps)
          for (s in a = e.defaultProps) void 0 === l[s] && (l[s] = a[s]);
        return {
          $$typeof: t,
          type: e,
          key: c,
          ref: o,
          props: l,
          _owner: d.current
        }
      }
      a.Fragment = l, a.jsx = c, a.jsxs = c
    },
    95240: (e, a, r) => {
      e.exports = r(99576)
    },
    86152: (e, a, r) => {
      r.r(a), r.d(a, {
        default: () => b
      });
      var s = r(9860);
      const t = {
        padding: "rockstargames-modules-core-newswire-articlee1811c65983d2df02484c7bd49620f6d",
        carouselWrapper: "rockstargames-modules-core-newswire-articledaf8d6c749fa379c43a098df8a842f62",
        carouselTitle: "rockstargames-modules-core-newswire-articleffab2486abb58ef9090c19d6d5bdd44c"
      };
      var l = r(95240);
      const i = e => {
          let {
            to: a,
            children: r
          } = e;
          return a ? (0, l.jsx)("a", {
            href: a,
            target: "_blank",
            children: r
          }) : r
        },
        d = e => {
          let {
            items: a,
            text: r = {},
            style: d,
            className: n = "",
            id: c = null
          } = e;
          return a?.length ? (0, l.jsxs)("div", {
            id: c,
            children: [(0, l.jsx)(s.Carousel, {
              style: d,
              className: [n, t.carouselWrapper].join(" "),
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
            }), r?.title || r?.description ? (0, l.jsx)("div", {
              className: t.padding,
              style: r?.style ?? {},
              children: (0, l.jsx)(s.DescriptionArea, {
                item: r
              })
            }) : ""]
          }) : null
        };
      var n = r(84644),
        c = r.n(n),
        o = r(1740);
      const m = e => {
          let {
            impressionTracking: a,
            gtm: r = {},
            children: t
          } = e;
          return a?.shouldTrack ? (0, l.jsx)(s.InViewTracker, {
            threshold: a?.threshold,
            gtm: r,
            children: t
          }) : t
        },
        g = e => {
          let {
            impressionTracking: a,
            gtm: r = {},
            children: s
          } = e, t = !1;
          return t = !0, (0, l.jsx)(m, {
            impressionTracking: a,
            gtm: r,
            children: s
          })
        },
        f = e => {
          let {
            to: a,
            children: r
          } = e;
          return a ? (0, l.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noreferrer",
            children: r
          }) : r
        },
        u = e => {
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
        p = e => {
          let {
            items: a,
            style: r = {},
            className: t = "",
            id: i = null
          } = e;
          return (0, l.jsx)("div", {
            style: r,
            className: (0, o.classList)("rockstargames-modules-core-newswire-articlefbb6b44c6d90c22144e4fbed29bc540b", t),
            id: i,
            children: a.map((e => (0, l.jsx)(g, {
              impressionTracking: e?.impressionTracking,
              gtm: e?.gtm,
              children: (0, l.jsx)(f, {
                to: e?.to,
                children: (0, l.jsxs)("div", {
                  className: (0, o.classList)("rockstargames-modules-core-newswire-articlec6ef137c3cc0ba12d735aedb6db0cae3", e.className),
                  style: e?.style ?? {},
                  ...e?.props,
                  children: [e?.image || e?.videoId ? (0, l.jsx)(u, {
                    item: e
                  }) : "", e.title || e.description ? (0, l.jsx)(s.DescriptionArea, {
                    item: e,
                    className: "rockstargames-modules-core-newswire-articlea953f78a1d15741f11ef44c196dbb9c4"
                  }) : ""]
                })
              })
            }, e.key)))
          })
        },
        b = e => {
          let {
            children: a,
            text: r,
            items: s = [],
            renderTemplate: t,
            style: i,
            id: n = null,
            ...c
          } = e;
          if (!s.length) return null;
          switch (t) {
            case "carousel":
              return (0, l.jsx)(d, {
                text: r,
                items: s,
                style: i,
                id: n,
                children: a
              });
            case "carousel-panorama":
              return (0, l.jsx)(d, {
                text: r,
                items: s,
                style: i,
                className: "panorama",
                id: n,
                children: a
              });
            default:
              return (0, l.jsx)(p, {
                items: s,
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