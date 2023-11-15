/*! For license information please see 76774ac8a5a10d976c3defa27ad4707c.js.LICENSE.txt */
"use strict";
(self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [211], {
    3032: (e, r, t) => {
      var s = t(927),
        a = Symbol.for("react.element"),
        i = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        c = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        o = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, r, t) {
        var s, i = {},
          l = null,
          d = null;
        for (s in void 0 !== t && (l = "" + t), void 0 !== r.key && (l = "" + r.key), void 0 !== r.ref && (d = r.ref), r) n.call(r, s) && !o.hasOwnProperty(s) && (i[s] = r[s]);
        if (e && e.defaultProps)
          for (s in r = e.defaultProps) void 0 === i[s] && (i[s] = r[s]);
        return {
          $$typeof: a,
          type: e,
          key: l,
          ref: d,
          props: i,
          _owner: c.current
        }
      }
      r.Fragment = i, r.jsx = l, r.jsxs = l
    },
    3705: (e, r, t) => {
      e.exports = t(3032)
    },
    4211: (e, r, t) => {
      t.r(r), t.d(r, {
        default: () => o
      });
      var s = t(8976),
        a = t(9542),
        i = t(9929);
      const n = {
        title: "rockstargames-modules-core-newswire-articleca3619ec694712f8ef44a0673cc5cd2a",
        main: "rockstargames-modules-core-newswire-articleb604683b1b1cf1316f5cf35ce2fe4b31",
        breadcrumbs: "rockstargames-modules-core-newswire-articled1965b8d8252ea2aaac5bde77b3bcef0"
      };
      var c = t(3705);
      const o = (0, i.withTranslations)((e => {
        let {
          children: r,
          intro: t,
          image: o = {},
          style: l = {},
          t: d,
          className: m = "",
          variant: _ = null
        } = e, u = {};
        void 0 !== l.toggleInvertSeparator && (u = {
          "--breadcrumb-separator-filter-invert": l.toggleInvertSeparator ? "invert(0)" : "invert(1)"
        });
        const w = (0, i.useNewswirePost)(),
          f = {},
          h = f?.meta?.title ?? w?.title,
          p = f?.meta?.subtitle ?? w?.subtitle,
          g = p ? (0, c.jsx)("h3", {
            "data-context": "newswire-subtitle",
            children: p
          }) : "",
          x = [{
            text: d("Newswire"),
            to: "/newswire"
          }],
          {
            src: b
          } = (0, a.useImageParser)(o),
          v = (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsx)("time", {
              dateTime: w.created,
              children: w.created_formatted
            }), t ? (0, c.jsx)(s.DescriptionArea, {
              item: t
            }) : "", r]
          });
        w?.primary_tags?.length && x.push({
          text: w.primary_tags[0].name,
          to: `/newswire?tag_id=${w.primary_tags[0].id}`
        }), w?.secondary_tags?.length && x.push({
          text: w.secondary_tags[0].name,
          to: `/newswire?tag_id=${w.secondary_tags[0].id}`
        });
        const y = (0, c.jsx)("div", {
          className: n.breadcrumbs,
          children: x.map((e => (0, c.jsx)(s.A, {
            to: e.to,
            children: e.text
          }, e.to)))
        });
        return b?.desktop && (l.background = `url(${b.desktop}) center/cover no-repeat`), (0, c.jsx)("div", {
          className: [m, n.title].join(" "),
          style: {
            ...l,
            ...u
          },
          children: "separated" === _ ? (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsxs)("header", {
              "data-context": "title",
              children: [y, (0, c.jsx)("h1", {
                children: h
              })]
            }), (0, c.jsxs)("footer", {
              "data-context": "title",
              children: [g, v]
            })]
          }) : (0, c.jsxs)(c.Fragment, {
            children: [y, (0, c.jsxs)("div", {
              className: n.main,
              children: [(0, c.jsx)("h1", {
                children: h
              }), g]
            }), v]
          })
        })
      }))
    }
  }
]);