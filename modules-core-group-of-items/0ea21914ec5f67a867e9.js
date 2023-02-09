/*! For license information please see 0ea21914ec5f67a867e9.js.LICENSE.txt */
"use strict";
(self.webpackChunk_rockstargames_modules_core_group_of_items = self.webpackChunk_rockstargames_modules_core_group_of_items || []).push([
  [935], {
    935: (e, s, t) => {
      t.r(s), t.d(s, {
        default: () => u
      });
      var a = t(976);
      const r = {
        padding: "d43222c91b7813ddcb52",
        carouselWrapper: "ad1bf0c179c133e32145",
        carouselTitle: "c54517becdcc361e4d2c"
      };
      var l = t(668);
      const i = e => {
          let {
            to: s,
            children: t
          } = e;
          return s ? (0, l.jsx)("a", {
            href: s,
            target: "_blank",
            children: t
          }) : t
        },
        c = e => {
          let {
            items: s,
            text: t = {},
            style: c,
            className: d = ""
          } = e;
          return s?.length ? (0, l.jsxs)("div", {
            children: [(0, l.jsx)(a.Carousel, {
              style: c,
              className: [d, r.carouselWrapper].join(" "),
              children: s.map(((e, s) => (0, l.jsxs)("div", {
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
              }, s)))
            }), t?.title || t?.description ? (0, l.jsx)("div", {
              className: r.padding,
              children: (0, l.jsx)(a.DescriptionArea, {
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
            to: s,
            children: t
          } = e;
          return s ? (0, l.jsx)("a", {
            href: s,
            target: "_blank",
            rel: "noreferrer",
            children: t
          }) : t
        },
        p = e => {
          let {
            item: s
          } = e;
          return s?.videoId ? (0, l.jsx)(n(), {
            context: "site",
            autoplay: !1,
            id: s.videoId
          }) : (0, l.jsx)(a.ImageWithBadge, {
            image: s?.image,
            badge: s?.badge ?? s?.image?.badge,
            badgeType: "badge3",
            role: s?.role ?? s?.image?.role,
            splitter: s?.splitter ?? s?.image?.splitter,
            type: s?.type,
            ariaLabel: s?.image?.ariaLabel,
            style: s?.style,
            className: s?.className
          })
        },
        g = e => {
          let {
            items: s,
            style: t = {},
            className: r = ""
          } = e;
          return (0, l.jsx)("div", {
            style: t,
            className: (0, o.classList)("a54825b2222b5c43e8e5", r),
            children: s.map((e => (0, l.jsx)(m, {
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
            children: s,
            text: t,
            items: a = [],
            renderTemplate: r,
            style: i,
            ...d
          } = e;
          if (!a.length) return null;
          switch (r) {
            case "carousel":
              return (0, l.jsx)(c, {
                text: t,
                items: a,
                style: i,
                children: s
              });
            case "carousel-panorama":
              return (0, l.jsx)(c, {
                text: t,
                items: a,
                style: i,
                className: "panorama",
                children: s
              });
            default:
              return (0, l.jsx)(g, {
                items: a,
                style: i,
                ...d,
                children: s
              })
          }
        }
    },
    670: (e, s, t) => {
      var a = t(822),
        r = Symbol.for("react.element"),
        l = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        i = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        c = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function d(e, s, t) {
        var a, d = {},
          n = null,
          o = null;
        for (a in void 0 !== t && (n = "" + t), void 0 !== s.key && (n = "" + s.key), void 0 !== s.ref && (o = s.ref), s) l.call(s, a) && !c.hasOwnProperty(a) && (d[a] = s[a]);
        if (e && e.defaultProps)
          for (a in s = e.defaultProps) void 0 === d[a] && (d[a] = s[a]);
        return {
          $$typeof: r,
          type: e,
          key: n,
          ref: o,
          props: d,
          _owner: i.current
        }
      }
      s.jsx = d, s.jsxs = d
    },
    668: (e, s, t) => {
      e.exports = t(670)
    }
  }
]);