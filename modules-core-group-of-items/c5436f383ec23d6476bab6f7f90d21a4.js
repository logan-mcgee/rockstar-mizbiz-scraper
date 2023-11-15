/*! For license information please see c5436f383ec23d6476bab6f7f90d21a4.js.LICENSE.txt */
"use strict";
(self.webpackChunk_rockstargames_modules_core_group_of_items = self.webpackChunk_rockstargames_modules_core_group_of_items || []).push([
  [673], {
    32: (e, s, r) => {
      var a = r(927),
        t = Symbol.for("react.element"),
        l = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        i = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        o = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, s, r) {
        var a, c = {},
          d = null,
          m = null;
        for (a in void 0 !== r && (d = "" + r), void 0 !== s.key && (d = "" + s.key), void 0 !== s.ref && (m = s.ref), s) l.call(s, a) && !o.hasOwnProperty(a) && (c[a] = s[a]);
        if (e && e.defaultProps)
          for (a in s = e.defaultProps) void 0 === c[a] && (c[a] = s[a]);
        return {
          $$typeof: t,
          type: e,
          key: d,
          ref: m,
          props: c,
          _owner: i.current
        }
      }
      s.jsx = c, s.jsxs = c
    },
    705: (e, s, r) => {
      e.exports = r(32)
    },
    673: (e, s, r) => {
      r.r(s), r.d(s, {
        default: () => u
      });
      var a = r(976);
      const t = {
        padding: "rockstargames-modules-core-group-of-itemsf8dcbd22e1a67105fa359cf786156615",
        carouselWrapper: "rockstargames-modules-core-group-of-itemsa77a2d85406cc69455ad0a04a043bdc3",
        carouselTitle: "rockstargames-modules-core-group-of-itemsca328c43db22756d2cb0de71ec6db33d"
      };
      var l = r(705);
      const i = e => {
          let {
            to: s,
            children: r
          } = e;
          return s ? (0, l.jsx)("a", {
            href: s,
            target: "_blank",
            children: r
          }) : r
        },
        o = e => {
          let {
            items: s,
            text: r = {},
            style: o,
            className: c = ""
          } = e;
          return s?.length ? (0, l.jsxs)("div", {
            children: [(0, l.jsx)(a.Carousel, {
              style: o,
              className: [c, t.carouselWrapper].join(" "),
              children: s.map((e => (0, l.jsxs)("div", {
                children: [(0, l.jsx)(a.ImageWithBadge, {
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
              children: (0, l.jsx)(a.DescriptionArea, {
                item: r
              })
            }) : ""]
          }) : null
        };
      var c = r(224),
        d = r.n(c),
        m = r(542);
      const n = e => {
          let {
            to: s,
            children: r
          } = e;
          return s ? (0, l.jsx)("a", {
            href: s,
            target: "_blank",
            rel: "noreferrer",
            children: r
          }) : r
        },
        p = e => {
          let {
            item: s
          } = e;
          return s?.videoId ? (0, l.jsx)(d(), {
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
            style: r = {},
            className: t = ""
          } = e;
          return (0, l.jsx)("div", {
            style: r,
            className: (0, m.classList)("rockstargames-modules-core-group-of-itemsea89abaf4ac157f8b73b157db3926579", t),
            children: s.map((e => (0, l.jsx)(n, {
              to: e?.to,
              children: (0, l.jsxs)("div", {
                className: (0, m.classList)("rockstargames-modules-core-group-of-itemsf510d048113d8217bd683830d3dd9614", e.className),
                style: e?.style ?? {},
                ...e?.props,
                children: [e?.image || e?.videoId ? (0, l.jsx)(p, {
                  item: e
                }) : "", e.title || e.description ? (0, l.jsx)(a.DescriptionArea, {
                  item: e,
                  className: "rockstargames-modules-core-group-of-itemsfa416cbbb870efaec14b304f7ffe8968"
                }) : ""]
              })
            }, e.key)))
          })
        },
        u = e => {
          let {
            children: s,
            text: r,
            items: a = [],
            renderTemplate: t,
            style: i,
            ...c
          } = e;
          if (!a.length) return null;
          switch (t) {
            case "carousel":
              return (0, l.jsx)(o, {
                text: r,
                items: a,
                style: i,
                children: s
              });
            case "carousel-panorama":
              return (0, l.jsx)(o, {
                text: r,
                items: a,
                style: i,
                className: "panorama",
                children: s
              });
            default:
              return (0, l.jsx)(g, {
                items: a,
                style: i,
                ...c,
                children: s
              })
          }
        }
    }
  }
]);