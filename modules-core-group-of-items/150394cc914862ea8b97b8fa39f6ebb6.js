/*! For license information please see 150394cc914862ea8b97b8fa39f6ebb6.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "03140f90-4278-4513-a6dc-1c34defe9805", e._sentryDebugIdIdentifier = "sentry-dbid-03140f90-4278-4513-a6dc-1c34defe9805")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "5e225a56a96343405c858680af91190e5116b19e",
  packageName: "@rockstargames/modules-core-group-of-items",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "5e225a56a96343405c858680af91190e5116b19e"
}, (self.webpackChunk_rockstargames_modules_core_group_of_items = self.webpackChunk_rockstargames_modules_core_group_of_items || []).push([
  [288], {
    996: (e, a, s) => {
      var r = s(200),
        t = Symbol.for("react.element"),
        l = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        i = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function d(e, a, s) {
        var r, d = {},
          n = null,
          c = null;
        for (r in void 0 !== s && (n = "" + s), void 0 !== a.key && (n = "" + a.key), void 0 !== a.ref && (c = a.ref), a) l.call(a, r) && !i.hasOwnProperty(r) && (d[r] = a[r]);
        if (e && e.defaultProps)
          for (r in a = e.defaultProps) void 0 === d[r] && (d[r] = a[r]);
        return {
          $$typeof: t,
          type: e,
          key: n,
          ref: c,
          props: d,
          _owner: o.current
        }
      }
      a.jsx = d, a.jsxs = d
    },
    480: (e, a, s) => {
      e.exports = s(996)
    },
    288: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => u
      });
      var r = s(668);
      const t = {
        padding: "rockstargames-modules-core-group-of-itemsf8dcbd22e1a67105fa359cf786156615",
        carouselWrapper: "rockstargames-modules-core-group-of-itemsa77a2d85406cc69455ad0a04a043bdc3",
        carouselTitle: "rockstargames-modules-core-group-of-itemsca328c43db22756d2cb0de71ec6db33d"
      };
      var l = s(480);
      const o = e => {
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
        i = e => {
          let {
            items: a,
            text: s = {},
            style: i,
            className: d = ""
          } = e;
          return a?.length ? (0, l.jsxs)("div", {
            children: [(0, l.jsx)(r.Carousel, {
              style: i,
              className: [d, t.carouselWrapper].join(" "),
              children: a.map((e => (0, l.jsxs)("div", {
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
                }), e.title && (0, l.jsx)(o, {
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
      var d = s(644),
        n = s.n(d),
        c = (s(116), s(740));
      const m = e => {
          let {
            impressionTracking: a,
            gtm: s = {},
            children: r
          } = e;
          return r
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
        f = e => {
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
        p = e => {
          let {
            items: a,
            style: s = {},
            className: t = ""
          } = e;
          return (0, l.jsx)("div", {
            style: s,
            className: (0, c.classList)("rockstargames-modules-core-group-of-itemsea89abaf4ac157f8b73b157db3926579", t),
            children: a.map((e => (0, l.jsx)(m, {
              impressionTracking: e?.impressionTracking,
              gtm: e?.gtm,
              children: (0, l.jsx)(g, {
                to: e?.to,
                children: (0, l.jsxs)("div", {
                  className: (0, c.classList)("rockstargames-modules-core-group-of-itemsf510d048113d8217bd683830d3dd9614", e.className),
                  style: e?.style ?? {},
                  ...e?.props,
                  children: [e?.image || e?.videoId ? (0, l.jsx)(f, {
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
        u = e => {
          let {
            children: a,
            text: s,
            items: r = [],
            renderTemplate: t,
            style: o,
            ...d
          } = e;
          if (!r.length) return null;
          switch (t) {
            case "carousel":
              return (0, l.jsx)(i, {
                text: s,
                items: r,
                style: o,
                children: a
              });
            case "carousel-panorama":
              return (0, l.jsx)(i, {
                text: s,
                items: r,
                style: o,
                className: "panorama",
                children: a
              });
            default:
              return (0, l.jsx)(p, {
                items: r,
                style: o,
                ...d,
                children: a
              })
          }
        }
    }
  }
]);
//# sourceMappingURL=150394cc914862ea8b97b8fa39f6ebb6.js.map