/*! For license information please see bec039c3b3579bcb8546820b4eba60ca.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "b6885998-5054-4b80-9255-0977abbb3571", e._sentryDebugIdIdentifier = "sentry-dbid-b6885998-5054-4b80-9255-0977abbb3571")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "63eddca94fa9726ada78d0c14030f13fd7020af7",
  packageName: "@rockstargames/modules-core-group-of-items",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "63eddca94fa9726ada78d0c14030f13fd7020af7"
}, (self.webpackChunk_rockstargames_modules_core_group_of_items = self.webpackChunk_rockstargames_modules_core_group_of_items || []).push([
  [288], {
    996: (e, a, s) => {
      var r = s(200),
        t = Symbol.for("react.element"),
        l = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function o(e, a, s) {
        var r, o = {},
          n = null,
          c = null;
        for (r in void 0 !== s && (n = "" + s), void 0 !== a.key && (n = "" + a.key), void 0 !== a.ref && (c = a.ref), a) l.call(a, r) && !d.hasOwnProperty(r) && (o[r] = a[r]);
        if (e && e.defaultProps)
          for (r in a = e.defaultProps) void 0 === o[r] && (o[r] = a[r]);
        return {
          $$typeof: t,
          type: e,
          key: n,
          ref: c,
          props: o,
          _owner: i.current
        }
      }
      a.jsx = o, a.jsxs = o
    },
    480: (e, a, s) => {
      e.exports = s(996)
    },
    288: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => p
      });
      var r = s(668);
      const t = {
        padding: "rockstargames-modules-core-group-of-itemsf8dcbd22e1a67105fa359cf786156615",
        carouselWrapper: "rockstargames-modules-core-group-of-itemsa77a2d85406cc69455ad0a04a043bdc3",
        carouselTitle: "rockstargames-modules-core-group-of-itemsca328c43db22756d2cb0de71ec6db33d"
      };
      var l = s(480);
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
            className: o = "",
            id: n = null
          } = e;
          return a?.length ? (0, l.jsxs)("div", {
            id: n,
            children: [(0, l.jsx)(r.Carousel, {
              style: d,
              className: [o, t.carouselWrapper].join(" "),
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
      var o = s(644),
        n = s.n(o),
        c = (s(116), s(740));
      const m = e => {
          let {
            impressionTracking: a,
            gtm: s = {},
            children: r
          } = e;
          return r
        },
        f = e => {
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
        g = e => {
          let {
            item: a
          } = e;
          return a?.videoId ? (0, l.jsx)(n(), {
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
            className: (0, c.classList)("rockstargames-modules-core-group-of-itemsea89abaf4ac157f8b73b157db3926579", t),
            id: i,
            children: a.map((e => (0, l.jsx)(m, {
              impressionTracking: e?.impressionTracking,
              gtm: e?.gtm,
              children: (0, l.jsx)(f, {
                to: e?.to,
                children: (0, l.jsxs)("div", {
                  className: (0, c.classList)("rockstargames-modules-core-group-of-itemsf510d048113d8217bd683830d3dd9614", e.className),
                  style: e?.style ?? {},
                  ...e?.props,
                  children: [e?.image || e?.videoId ? (0, l.jsx)(g, {
                    item: e
                  }) : "", e.title || e.description ? (0, l.jsx)(r.DescriptionArea, {
                    item: e,
                    className: "rockstargames-modules-core-group-of-itemsfa416cbbb870efaec14b304f7ffe8968"
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
            id: o = null,
            ...n
          } = e;
          if (!r.length) return null;
          switch (t) {
            case "carousel":
              return (0, l.jsx)(d, {
                text: s,
                items: r,
                style: i,
                id: o,
                children: a
              });
            case "carousel-panorama":
              return (0, l.jsx)(d, {
                text: s,
                items: r,
                style: i,
                className: "panorama",
                id: o,
                children: a
              });
            default:
              return (0, l.jsx)(u, {
                items: r,
                style: i,
                id: o,
                ...n,
                children: a
              })
          }
        }
    }
  }
]);
//# sourceMappingURL=bec039c3b3579bcb8546820b4eba60ca.js.map