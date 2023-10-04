/*! For license information please see 877c4ff382c6f8775975.js.LICENSE.txt */
"use strict";
(self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [378], {
    6162: (e, t, r) => {
      var a = r(4932),
        s = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        c = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        o = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, r) {
        var a, n = {},
          l = null,
          d = null;
        for (a in void 0 !== r && (l = "" + r), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (d = t.ref), t) i.call(t, a) && !o.hasOwnProperty(a) && (n[a] = t[a]);
        if (e && e.defaultProps)
          for (a in t = e.defaultProps) void 0 === n[a] && (n[a] = t[a]);
        return {
          $$typeof: s,
          type: e,
          key: l,
          ref: d,
          props: n,
          _owner: c.current
        }
      }
      t.Fragment = n, t.jsx = l, t.jsxs = l
    },
    9817: (e, t, r) => {
      e.exports = r(6162)
    },
    4378: (e, t, r) => {
      r.r(t), r.d(t, {
        default: () => o
      });
      var a = r(8976),
        s = r(9542),
        n = r(9929);
      const i = {
        title: "_1c6c5e2e5850fea8adb8c90b39b6855c758d",
        main: "_1c6c5e2e5850fea8b71b10432f44c16d125f",
        breadcrumbs: "_1c6c5e2e5850fea8c2bf1c67c354c461aa89"
      };
      var c = r(9817);
      const o = (0, n.withTranslations)((e => {
        let {
          children: t,
          intro: r,
          image: o = {},
          style: l = {},
          t: d,
          className: _ = "",
          variant: m = null
        } = e, u = {};
        void 0 !== l.toggleInvertSeparator && (u = {
          "--breadcrumb-separator-filter-invert": l.toggleInvertSeparator ? "invert(0)" : "invert(1)"
        });
        const h = (0, n.useNewswirePost)(),
          p = {},
          f = p?.meta?.title ?? h?.title,
          g = p?.meta?.subtitle ?? h?.subtitle,
          x = g ? (0, c.jsx)("h3", {
            "data-context": "newswire-subtitle",
            children: g
          }) : "",
          w = [{
            text: d("Newswire"),
            to: "/newswire"
          }],
          {
            src: b
          } = (0, s.useImageParser)(o),
          v = (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsx)("time", {
              dateTime: h.created,
              children: h.created_formatted
            }), r ? (0, c.jsx)(a.DescriptionArea, {
              item: r
            }) : "", t]
          });
        h?.primary_tags?.length && w.push({
          text: h.primary_tags[0].name,
          to: `/newswire?tag_id=${h.primary_tags[0].id}`
        }), h?.secondary_tags?.length && w.push({
          text: h.secondary_tags[0].name,
          to: `/newswire?tag_id=${h.secondary_tags[0].id}`
        });
        const y = (0, c.jsx)("div", {
          className: i.breadcrumbs,
          children: w.map((e => (0, c.jsx)(a.A, {
            to: e.to,
            children: e.text
          }, e.to)))
        });
        return b?.desktop && (l.background = `url(${b.desktop}) center/cover no-repeat`), (0, c.jsx)("div", {
          className: [_, i.title].join(" "),
          style: {
            ...l,
            ...u
          },
          children: "separated" === m ? (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsxs)("header", {
              "data-context": "title",
              children: [y, (0, c.jsx)("h1", {
                children: f
              })]
            }), (0, c.jsxs)("footer", {
              "data-context": "title",
              children: [x, v]
            })]
          }) : (0, c.jsxs)(c.Fragment, {
            children: [y, (0, c.jsxs)("div", {
              className: i.main,
              children: [(0, c.jsx)("h1", {
                children: f
              }), x]
            }), v]
          })
        })
      }))
    }
  }
]);