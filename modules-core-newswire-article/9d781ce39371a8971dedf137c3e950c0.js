! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      r = (new Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "9258851b-2690-4f6f-afdc-a78d7006a72a", e._sentryDebugIdIdentifier = "sentry-dbid-9258851b-2690-4f6f-afdc-a78d7006a72a")
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
    99576: (e, r, a) => {
      var s = a(51664),
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

      function o(e, r, a) {
        var s, l = {},
          o = null,
          c = null;
        for (s in void 0 !== a && (o = "" + a), void 0 !== r.key && (o = "" + r.key), void 0 !== r.ref && (c = r.ref), r) i.call(r, s) && !n.hasOwnProperty(s) && (l[s] = r[s]);
        if (e && e.defaultProps)
          for (s in r = e.defaultProps) void 0 === l[s] && (l[s] = r[s]);
        return {
          $$typeof: t,
          type: e,
          key: o,
          ref: c,
          props: l,
          _owner: d.current
        }
      }
      r.Fragment = l, r.jsx = o, r.jsxs = o
    },
    95240: (e, r, a) => {
      e.exports = a(99576)
    },
    86152: (e, r, a) => {
      a.r(r), a.d(r, {
        default: () => b
      });
      var s = a(9860);
      const t = {
        padding: "rockstargames-modules-core-newswire-articlee1811c65983d2df02484c7bd49620f6d",
        carouselWrapper: "rockstargames-modules-core-newswire-articledaf8d6c749fa379c43a098df8a842f62",
        carouselTitle: "rockstargames-modules-core-newswire-articleffab2486abb58ef9090c19d6d5bdd44c"
      };
      var l = a(95240);
      const i = e => {
          let {
            to: r,
            children: a
          } = e;
          return r ? (0, l.jsx)("a", {
            href: r,
            target: "_blank",
            children: a
          }) : a
        },
        d = e => {
          let {
            items: r,
            text: a = {},
            style: d,
            className: n = "",
            id: o = null
          } = e;
          return r?.length ? (0, l.jsxs)("div", {
            id: o,
            children: [(0, l.jsx)(s.Carousel, {
              style: d,
              className: [n, t.carouselWrapper].join(" "),
              children: r.map((e => (0, l.jsxs)("div", {
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
            }), a?.title || a?.description ? (0, l.jsx)("div", {
              className: t.padding,
              style: a?.style ?? {},
              children: (0, l.jsx)(s.DescriptionArea, {
                item: a
              })
            }) : ""]
          }) : null
        };
      var n = a(84644),
        o = a.n(n),
        c = a(1740);
      const m = e => {
          let {
            impressionTracking: r,
            gtm: a = {},
            children: t
          } = e;
          return r?.shouldTrack ? (0, l.jsx)(s.InViewTracker, {
            threshold: r?.threshold,
            gtm: a,
            children: t
          }) : t
        },
        f = e => {
          let {
            impressionTracking: r,
            gtm: a = {},
            children: s
          } = e, t = !1;
          return t = !0, (0, l.jsx)(m, {
            impressionTracking: r,
            gtm: a,
            children: s
          })
        },
        g = e => {
          let {
            to: r,
            children: a
          } = e;
          return r ? (0, l.jsx)("a", {
            href: r,
            target: "_blank",
            rel: "noreferrer",
            children: a
          }) : a
        },
        u = e => {
          let {
            item: r
          } = e;
          return r?.videoId ? (0, l.jsx)(o(), {
            context: "site",
            autoplay: !1,
            id: r.videoId
          }) : (0, l.jsx)(s.ImageWithBadge, {
            image: r?.image,
            badge: r?.badge ?? r?.image?.badge,
            badgeType: "badge3",
            role: r?.role ?? r?.image?.role,
            splitter: r?.splitter ?? r?.image?.splitter,
            type: r?.type,
            ariaLabel: r?.image?.ariaLabel,
            style: r?.style,
            className: r?.className
          })
        },
        p = e => {
          let {
            items: r,
            style: a = {},
            className: t = "",
            id: i = null
          } = e;
          return (0, l.jsx)("div", {
            style: a,
            className: (0, c.classList)("rockstargames-modules-core-newswire-articlefbb6b44c6d90c22144e4fbed29bc540b", t),
            id: i,
            children: r.map((e => (0, l.jsx)(f, {
              impressionTracking: e?.impressionTracking,
              gtm: e?.gtm,
              children: (0, l.jsx)(g, {
                to: e?.to,
                children: (0, l.jsxs)("div", {
                  className: (0, c.classList)("rockstargames-modules-core-newswire-articlec6ef137c3cc0ba12d735aedb6db0cae3", e.className),
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
            children: r,
            text: a,
            items: s = [],
            renderTemplate: t,
            style: i,
            id: n = null,
            ...o
          } = e;
          if (!s.length) return null;
          switch (t) {
            case "carousel":
              return (0, l.jsx)(d, {
                text: a,
                items: s,
                style: i,
                id: n,
                children: r
              });
            case "carousel-panorama":
              return (0, l.jsx)(d, {
                text: a,
                items: s,
                style: i,
                className: "panorama",
                id: n,
                children: r
              });
            default:
              return (0, l.jsx)(p, {
                items: s,
                style: i,
                id: n,
                ...o,
                children: r
              })
          }
        }
    }
  }
]);