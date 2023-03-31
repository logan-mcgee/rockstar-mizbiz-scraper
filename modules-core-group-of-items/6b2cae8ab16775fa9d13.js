/*! For license information please see 6b2cae8ab16775fa9d13.js.LICENSE.txt */
"use strict";
(self.webpackChunk_rockstargames_modules_core_group_of_items = self.webpackChunk_rockstargames_modules_core_group_of_items || []).push([
  [814], {
    814: (e, t, s) => {
      s.r(t), s.d(t, {
        default: () => u
      });
      var a = s(976);
      const r = {
        padding: "d43222c91b7813ddcb52",
        carouselWrapper: "ad1bf0c179c133e32145",
        carouselTitle: "c54517becdcc361e4d2c"
      };
      var l = s(322);
      const i = e => {
          let {
            to: t,
            children: s
          } = e;
          return t ? (0, l.jsx)("a", {
            href: t,
            target: "_blank",
            children: s
          }) : s
        },
        c = e => {
          let {
            items: t,
            text: s = {},
            style: c,
            className: d = ""
          } = e;
          return t?.length ? (0, l.jsxs)("div", {
            children: [(0, l.jsx)(a.Carousel, {
              style: c,
              className: [d, r.carouselWrapper].join(" "),
              children: t.map((e => (0, l.jsxs)("div", {
                children: [(0, l.jsx)(a.ImageWithBadge, {
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
              children: (0, l.jsx)(a.DescriptionArea, {
                item: s
              })
            }) : ""]
          }) : null
        };
      var d = s(224),
        n = s.n(d),
        o = s(542);
      const m = e => {
          let {
            to: t,
            children: s
          } = e;
          return t ? (0, l.jsx)("a", {
            href: t,
            target: "_blank",
            rel: "noreferrer",
            children: s
          }) : s
        },
        p = e => {
          let {
            item: t
          } = e;
          return t?.videoId ? (0, l.jsx)(n(), {
            context: "site",
            autoplay: !1,
            id: t.videoId
          }) : (0, l.jsx)(a.ImageWithBadge, {
            image: t?.image,
            badge: t?.badge ?? t?.image?.badge,
            badgeType: "badge3",
            role: t?.role ?? t?.image?.role,
            splitter: t?.splitter ?? t?.image?.splitter,
            type: t?.type,
            ariaLabel: t?.image?.ariaLabel,
            style: t?.style,
            className: t?.className
          })
        },
        g = e => {
          let {
            items: t,
            style: s = {},
            className: r = ""
          } = e;
          return (0, l.jsx)("div", {
            style: s,
            className: (0, o.classList)("a54825b2222b5c43e8e5", r),
            children: t.map((e => (0, l.jsx)(m, {
              to: e?.to,
              children: (0, l.jsxs)("div", {
                className: (0, o.classList)("d6ab9c37be8d844c7a6c", e.className),
                style: e?.style ?? {},
                ...e?.props,
                children: [e?.image || e?.videoId ? (0, l.jsx)(p, {
                  item: e
                }) : "", e.title || e.description ? (0, l.jsx)(a.DescriptionArea, {
                  item: e,
                  className: "a8bf1f04d75db58bdc23"
                }) : ""]
              })
            }, e.key)))
          })
        },
        u = e => {
          let {
            children: t,
            text: s,
            items: a = [],
            renderTemplate: r,
            style: i,
            ...d
          } = e;
          if (!a.length) return null;
          switch (r) {
            case "carousel":
              return (0, l.jsx)(c, {
                text: s,
                items: a,
                style: i,
                children: t
              });
            case "carousel-panorama":
              return (0, l.jsx)(c, {
                text: s,
                items: a,
                style: i,
                className: "panorama",
                children: t
              });
            default:
              return (0, l.jsx)(g, {
                items: a,
                style: i,
                ...d,
                children: t
              })
          }
        }
    },
    652: (e, t, s) => {
      var a = s(822),
        r = Symbol.for("react.element"),
        l = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        i = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        c = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function d(e, t, s) {
        var a, d = {},
          n = null,
          o = null;
        for (a in void 0 !== s && (n = "" + s), void 0 !== t.key && (n = "" + t.key), void 0 !== t.ref && (o = t.ref), t) l.call(t, a) && !c.hasOwnProperty(a) && (d[a] = t[a]);
        if (e && e.defaultProps)
          for (a in t = e.defaultProps) void 0 === d[a] && (d[a] = t[a]);
        return {
          $$typeof: r,
          type: e,
          key: n,
          ref: o,
          props: d,
          _owner: i.current
        }
      }
      t.jsx = d, t.jsxs = d
    },
    322: (e, t, s) => {
      e.exports = s(652)
    }
  }
]);