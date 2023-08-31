/*! For license information please see e42031ae32fbf34e621f.js.LICENSE.txt */
"use strict";
(self.webpackChunk_rockstargames_modules_core_group_of_items = self.webpackChunk_rockstargames_modules_core_group_of_items || []).push([
  [795], {
    970: (e, a, t) => {
      var s = t(932),
        r = Symbol.for("react.element"),
        l = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        i = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        c = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function d(e, a, t) {
        var s, d = {},
          n = null,
          o = null;
        for (s in void 0 !== t && (n = "" + t), void 0 !== a.key && (n = "" + a.key), void 0 !== a.ref && (o = a.ref), a) l.call(a, s) && !c.hasOwnProperty(s) && (d[s] = a[s]);
        if (e && e.defaultProps)
          for (s in a = e.defaultProps) void 0 === d[s] && (d[s] = a[s]);
        return {
          $$typeof: r,
          type: e,
          key: n,
          ref: o,
          props: d,
          _owner: i.current
        }
      }
      a.jsx = d, a.jsxs = d
    },
    160: (e, a, t) => {
      e.exports = t(970)
    },
    795: (e, a, t) => {
      t.r(a), t.d(a, {
        default: () => u
      });
      var s = t(976);
      const r = {
        padding: "_93da086e95b9cae8d43222c91b7813ddcb52",
        carouselWrapper: "_93da086e95b9cae8ad1bf0c179c133e32145",
        carouselTitle: "_93da086e95b9cae8c54517becdcc361e4d2c"
      };
      var l = t(160);
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
        c = e => {
          let {
            items: a,
            text: t = {},
            style: c,
            className: d = ""
          } = e;
          return a?.length ? (0, l.jsxs)("div", {
            children: [(0, l.jsx)(s.Carousel, {
              style: c,
              className: [d, r.carouselWrapper].join(" "),
              children: a.map((e => (0, l.jsxs)("div", {
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
      var d = t(224),
        n = t.n(d),
        o = t(542);
      const m = e => {
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
          return a?.videoId ? (0, l.jsx)(n(), {
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
        g = e => {
          let {
            items: a,
            style: t = {},
            className: r = ""
          } = e;
          return (0, l.jsx)("div", {
            style: t,
            className: (0, o.classList)("_93da086e95b9cae8a54825b2222b5c43e8e5", r),
            children: a.map((e => (0, l.jsx)(m, {
              to: e?.to,
              children: (0, l.jsxs)("div", {
                className: (0, o.classList)("_93da086e95b9cae8d6ab9c37be8d844c7a6c", e.className),
                style: e?.style ?? {},
                ...e?.props,
                children: [e?.image || e?.videoId ? (0, l.jsx)(p, {
                  item: e
                }) : "", e.title || e.description ? (0, l.jsx)(s.DescriptionArea, {
                  item: e,
                  className: "_93da086e95b9cae8a8bf1f04d75db58bdc23"
                }) : ""]
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
            ...d
          } = e;
          if (!s.length) return null;
          switch (r) {
            case "carousel":
              return (0, l.jsx)(c, {
                text: t,
                items: s,
                style: i,
                children: a
              });
            case "carousel-panorama":
              return (0, l.jsx)(c, {
                text: t,
                items: s,
                style: i,
                className: "panorama",
                children: a
              });
            default:
              return (0, l.jsx)(g, {
                items: s,
                style: i,
                ...d,
                children: a
              })
          }
        }
    }
  }
]);