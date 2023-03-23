/*! For license information please see 9eef49179202138e3b45.js.LICENSE.txt */
"use strict";
(self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [281], {
    281: (e, t, r) => {
      r.r(t), r.d(t, {
        default: () => o
      });
      var s = r(8976),
        a = r(9542),
        n = r(9929);
      const i = {
        title: "adb8c90b39b6855c758d",
        main: "b71b10432f44c16d125f",
        breadcrumbs: "c2bf1c67c354c461aa89"
      };
      var c = r(3322);
      const o = (0, n.withTranslations)((e => {
        let {
          children: t,
          intro: r,
          image: o = {},
          style: l = {},
          t: d,
          className: _ = "",
          variant: m = null
        } = e;
        const u = (0, n.useNewswirePost)(),
          h = {},
          p = h?.meta?.title ?? u?.title,
          x = h?.meta?.subtitle ?? u?.subtitle,
          f = x ? (0, c.jsx)("h3", {
            "data-context": "newswire-subtitle",
            children: x
          }) : "",
          w = [{
            text: d("Newswire"),
            to: "/newswire"
          }],
          {
            src: g
          } = (0, a.useImageParser)(o),
          b = (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsx)("time", {
              dateTime: u.created,
              children: u.created_formatted
            }), r ? (0, c.jsx)(s.DescriptionArea, {
              item: r
            }) : "", t]
          });
        u?.primary_tags?.length && w.push({
          text: u.primary_tags[0].name,
          to: `/newswire?tag_id=${u.primary_tags[0].id}`
        }), u?.secondary_tags?.length && w.push({
          text: u.secondary_tags[0].name,
          to: `/newswire?tag_id=${u.secondary_tags[0].id}`
        });
        const y = (0, c.jsx)("div", {
          className: i.breadcrumbs,
          children: w.map((e => (0, c.jsx)(s.A, {
            to: e.to,
            children: e.text
          }, e.to)))
        });
        return g?.desktop && (l.background = `url(${g.desktop}) center/cover no-repeat`), (0, c.jsx)("div", {
          className: [_, i.title].join(" "),
          style: l,
          children: "separated" === m ? (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsxs)("header", {
              "data-context": "title",
              children: [y, (0, c.jsx)("h1", {
                children: p
              })]
            }), (0, c.jsxs)("footer", {
              "data-context": "title",
              children: [f, b]
            })]
          }) : (0, c.jsxs)(c.Fragment, {
            children: [y, (0, c.jsxs)("div", {
              className: i.main,
              children: [(0, c.jsx)("h1", {
                children: p
              }), f]
            }), b]
          })
        })
      }))
    },
    8652: (e, t, r) => {
      var s = r(822),
        a = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        c = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        o = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, r) {
        var s, n = {},
          l = null,
          d = null;
        for (s in void 0 !== r && (l = "" + r), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (d = t.ref), t) i.call(t, s) && !o.hasOwnProperty(s) && (n[s] = t[s]);
        if (e && e.defaultProps)
          for (s in t = e.defaultProps) void 0 === n[s] && (n[s] = t[s]);
        return {
          $$typeof: a,
          type: e,
          key: l,
          ref: d,
          props: n,
          _owner: c.current
        }
      }
      t.Fragment = n, t.jsx = l, t.jsxs = l
    },
    3322: (e, t, r) => {
      e.exports = r(8652)
    }
  }
]);